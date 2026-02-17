var lo, W, P0, _0, gt, ra, T0, H0, K0, Nr, Ui, Yi, j0, Bo = {}, q0 = [], iI = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, uo = Array.isArray;
function we(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Rr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function FA(i, o, t) {
  var e, A, n, r = {};
  for (n in o) n == "key" ? e = o[n] : n == "ref" ? A = o[n] : r[n] = o[n];
  if (arguments.length > 16118 + -2686 * 6 && (r.children = arguments.length > 3605 + -1 * 3602 ? lo.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (n in i.defaultProps) r[n] === void 0 && (r[n] = i.defaultProps[n]);
  return ro(i, r, e, A, null);
}
function ro(i, o, t, e, A) {
  var n = {};
  n.type = i, n.props = o, n.key = t, n.ref = e, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__c = null, n.constructor = void 0, n.__v = A ?? ++P0, n.__i = -1, n.__u = 0;
  var r = n;
  return A == null && W.vnode != null && W.vnode(r), r;
}
function rI() {
  var i = {};
  return i.current = null, i;
}
function Ae(i) {
  return i.children;
}
function ae(i, o) {
  this.props = i, this.context = o;
}
function vt(i, o) {
  if (o == null) return i.__ ? vt(i.__, i.__i + 1) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? vt(i) : null;
}
function V0(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = -8467 * 1 + -7014 + -1 * -15481; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return V0(i);
  }
}
function Pi(i) {
  (!i.__d && (i.__d = !0) && gt.push(i) && !cn.__r++ || ra != W.debounceRendering) && ((ra = W.debounceRendering) || T0)(cn);
}
function cn() {
  for (var i, o, t, e, A, n, r, a = 4622 * -2 + -7 * -1255 + 460; gt.length; ) gt.length > a && gt.sort(H0), i = gt.shift(), a = gt.length, i.__d && (t = void 0, e = void 0, A = (e = (o = i).__v).__e, n = [], r = [], o.__P && ((t = we({}, e)).__v = e.__v + (-3 * -2819 + -1184 + 4 * -1818), W.vnode && W.vnode(t), vr(o.__P, t, e, o.__n, o.__P.namespaceURI, -1 * -5138 + 1263 + -6369 & e.__u ? [A] : null, n, A ?? vt(e), !!(32 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, X0(n, t, r), e.__e = e.__ = null, t.__e != A && V0(t)));
  cn.__r = -6474 + 2 * 898 + 1 * 4678;
}
function Z0(i, o, t, e, A, n, r, a, g, c, I) {
  var s, C, Q, E, B, d, u, h = e && e.__k || q0, p = o.length;
  for (g = aI(t, o, h, g, p), s = -743 * 3 + 1 * 2646 + -417; s < p; s++) (Q = t.__k[s]) != null && (C = Q.__i == -1 ? Bo : h[Q.__i] || Bo, Q.__i = s, d = vr(i, Q, C, A, n, r, a, g, c, I), E = Q.__e, Q.ref && C.ref != Q.ref && (C.ref && Wr(C.ref, null, Q), I.push(Q.ref, Q.__c || E, Q)), B == null && E != null && (B = E), (u = !!(1075 + -1 * 8677 + 1 * 7606 & Q.__u)) || C.__k === Q.__k ? g = z0(Q, g, i, u) : typeof Q.type == "function" && d !== void 0 ? g = d : E && (g = E.nextSibling), Q.__u &= -7);
  return t.__e = B, g;
}
function aI(i, o, t, e, A) {
  var n, r, a, g, c, I = t.length, s = I, C = 4164 + 3 * -607 + -2343;
  for (i.__k = new Array(A), n = -9724 + 2 * 577 + 8570; n < A; n++) (r = o[n]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[n] = ro(null, r, null, null, null) : uo(r) ? r = i.__k[n] = ro(Ae, { children: r }, null, null, null) : r.constructor == null && r.__b > 0 ? r = i.__k[n] = ro(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[n] = r, g = n + C, r.__ = i, r.__b = i.__b + (-2 * -1732 + -842 * -2 + -1 * 5147), a = null, (c = r.__i = gI(r, t, g, s)) != -1 && (s--, (a = t[c]) && (a.__u |= 4 * -2283 + -988 + 7 * 1446)), a == null || a.__v == null ? (c == -1 && (A > I ? C-- : A < I && C++), typeof r.type != "function" && (r.__u |= 4)) : c != g && (c == g - (4801 * 1 + 2747 * 1 + -7547) ? C-- : c == g + (1806 + 5 * -361) ? C++ : (c > g ? C-- : C++, r.__u |= 745 * 2 + 1781 + 297 * -11))) : i.__k[n] = null;
  if (s)
    for (n = -301 + 3539 * -2 + 7379; n < I; n++) (a = t[n]) != null && 1278 * -1 + 1448 + -170 == (-1 * -5789 + 1 * -7026 + 1239 & a.__u) && (a.__e == e && (e = vt(a)), Ag(a, a));
  return e;
}
function z0(i, o, t, e) {
  var A, n;
  if (typeof i.type == "function") {
    for (A = i.__k, n = 0; A && n < A.length; n++) A[n] && (A[n].__ = i, o = z0(A[n], o, t, e));
    return o;
  }
  i.__e != o && (e && (o && i.type && !o.parentNode && (o = vt(i)), t.insertBefore(i.__e, o || null)), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -6028 + -2 * 1563 + -9 * -1018 == o.nodeType);
  return o;
}
function Je(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (uo(i) ? i.some(function(t) {
    Je(t, o);
  }) : o.push(i)), o;
}
function gI(i, o, t, e) {
  var A, n, r, a = i.key, g = i.type, c = o[t], I = c != null && 2821 + 2 * 843 + -1 * 4507 == (7642 + 8 * -955 & c.__u);
  if (c === null && a == null || I && a == c.key && g == c.type) return t;
  if (e > (I ? -8154 + -1 * 2807 + 10962 : 7412 + 11 * 393 + -11735)) {
    for (A = t - (-422 + -2 * -4578 + -8733), n = t + (6292 + -9051 * -1 + 3 * -5114); A >= 9546 + 1 * 1757 + -11303 || n < o.length; ) if ((c = o[r = A >= -2447 * -1 + 8372 + 349 * -31 ? A-- : n++]) != null && 11142 + 1 * -11142 == (1905 + -4 * -1037 + -6051 & c.__u) && a == c.key && g == c.type) return r;
  }
  return -1;
}
function aa(i, o, t) {
  o[-493 * -4 + -4265 + 2293] == "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || iI.test(o) ? t : t + "px";
}
function Do(i, o, t, e, A) {
  var n, r;
  A: if (o == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || aa(i.style, o, "");
      if (t)
        for (o in t) e && t[o] == e[o] || aa(i.style, o, t[o]);
    }
  else if (o[0] == "o" && o[2323 + 2322 * -1] == "n") n = o != (o = o.replace(K0, "$1")), r = o.toLowerCase(), o = r in i || o == "onFocusOut" || o == "onFocusIn" ? r.slice(2) : o.slice(2), i.l || (i.l = {}), i.l[o + n] = t, t ? e ? t.u = e.u : (t.u = Nr, i.addEventListener(o, n ? Yi : Ui, n)) : i.removeEventListener(o, n ? Yi : Ui, n);
  else {
    if (A == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && o[6445 * 1 + -1767 + -4674] != "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && -709 * 14 + 4746 + 1727 * 3 == t ? "" : t));
  }
}
function ga(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = Nr++;
      else if (o.t < t.u) return;
      return t(W.event ? W.event(o) : o);
    }
  };
}
function vr(i, o, t, e, A, n, r, a, g, c) {
  var I, s, C, Q, E, B, d, u, h, p, m, w, b, y, G, R, L, O = o.type;
  if (o.constructor != null) return null;
  128 & t.__u && (g = !!(-4969 + 1667 * 3 & t.__u), n = [a = o.__e = t.__e]), (I = W.__b) && I(o);
  A: if (typeof O == "function") try {
    if (u = o.props, h = "prototype" in O && O.prototype.render, p = (I = O.contextType) && e[I.__c], m = I ? p ? p.props.value : I.__ : e, t.__c ? d = (s = o.__c = t.__c).__ = s.__E : (h ? o.__c = s = new O(u, m) : (o.__c = s = new ae(u, m), s.constructor = O, s.render = cI), p && p.sub(s), s.state || (s.state = {}), s.__n = e, C = s.__d = !(18 * 445 + 2 * -1902 + 1402 * -3), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && O.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = we({}, s.__s)), we(s.__s, O.getDerivedStateFromProps(u, s.__s))), Q = s.props, E = s.state, s.__v = o, C) h && O.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && O.getDerivedStateFromProps == null && u !== Q && s.componentWillReceiveProps != null && s.componentWillReceiveProps(u, m), o.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(13744 + -3 * 4581) === s.shouldComponentUpdate(u, s.__s, m)) {
        for (o.__v != t.__v && (s.props = u, s.state = s.__s, s.__d = !(-3556 + -1 * -1259 + 2 * 1149)), o.__e = t.__e, o.__k = t.__k, o.__k.some(function(J) {
          J && (J.__ = o);
        }), w = 0; w < s._sb.length; w++) s.__h.push(s._sb[w]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(u, s.__s, m), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(Q, E, B);
      });
    }
    if (s.context = m, s.props = u, s.__P = i, s.__e = !(6481 * -1 + 3385 + 3097), b = W.__r, y = -7762 + 3881 * 2, h) {
      for (s.state = s.__s, s.__d = !(-3127 + 1 * 1143 + 5 * 397), b && b(o), I = s.render(s.props, s.state, s.context), G = -5769 + -1 * -5769; G < s._sb.length; G++) s.__h.push(s._sb[G]);
      s._sb = [];
    } else do
      s.__d = !(1 * -3833 + 322 + 1 * 3512), b && b(o), I = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++y < -12 * 499 + -1276 + 1 * 7289);
    s.state = s.__s, s.getChildContext != null && (e = we(we({}, e), s.getChildContext())), h && !C && s.getSnapshotBeforeUpdate != null && (B = s.getSnapshotBeforeUpdate(Q, E)), R = I, I != null && I.type === Ae && I.key == null && (R = $0(I.props.children)), a = Z0(i, uo(R) ? R : [R], o, t, e, A, n, r, a, g, c), s.base = o.__e, o.__u &= -(1 * -7592 + -5116 + 12869), s.__h.length && r.push(s), d && (s.__E = s.__ = null);
  } catch (J) {
    if (o.__v = null, g || n != null)
      if (J.then) {
        for (o.__u |= g ? -3031 + 3191 * 1 : -17021 + 1 * 17149; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
        n[n.indexOf(a)] = null, o.__e = a;
      } else {
        for (L = n.length; L--; ) Rr(n[L]);
        _i(o);
      }
    else o.__e = t.__e, o.__k = t.__k, J.then || _i(o);
    W.__e(J, o, t);
  }
  else n == null && o.__v == t.__v ? (o.__k = t.__k, o.__e = t.__e) : a = o.__e = sI(t.__e, o, t, e, A, n, r, g, c);
  return (I = W.diffed) && I(o), 128 & o.__u ? void 0 : a;
}
function _i(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(_i);
}
function X0(i, o, t) {
  for (var e = -3208 + 401 * 8; e < t.length; e++) Wr(t[e], t[++e], t[++e]);
  W.__c && W.__c(o, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(n) {
        n.call(A);
      });
    } catch (n) {
      W.__e(n, A.__v);
    }
  });
}
function $0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 289 * 8 + 6155 + -8467 ? i : uo(i) ? i.map($0) : we({}, i);
}
function sI(i, o, t, e, A, n, r, a, g) {
  var c, I, s, C, Q, E, B, d = t.props || Bo, u = o.props, h = o.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = -3517 + 1 * 3517; c < n.length; c++) if ((Q = n[c]) && "setAttribute" in Q == !!h && (h ? Q.localName == h : 583 * -5 + 1 * -4877 + 7795 == Q.nodeType)) {
      i = Q, n[c] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(u);
    i = document.createElementNS(A, h, u.is && u), a && (W.__m && W.__m(o, n), a = !1), n = null;
  }
  if (h == null) d === u || a && i.data == u || (i.data = u);
  else {
    if (n = n && lo.call(i.childNodes), !a && n != null)
      for (d = {}, c = -1 * 844 + 26 * -305 + 8774; c < i.attributes.length; c++) d[(Q = i.attributes[c]).name] = Q.value;
    for (c in d) if (Q = d[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") s = Q;
      else if (!(c in u)) {
        if (c == "value" && "defaultValue" in u || c == "checked" && "defaultChecked" in u) continue;
        Do(i, c, null, Q, A);
      }
    }
    for (c in u) Q = u[c], c == "children" ? C = Q : c == "dangerouslySetInnerHTML" ? I = Q : c == "value" ? E = Q : c == "checked" ? B = Q : a && typeof Q != "function" || d[c] === Q || Do(i, c, Q, d[c], A);
    if (I) a || s && (I.__html == s.__html || I.__html == i.innerHTML) || (i.innerHTML = I.__html), o.__k = [];
    else if (s && (i.innerHTML = ""), Z0(o.type == "template" ? i.content : i, uo(C) ? C : [C], o, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, n, r, n ? n[0] : t.__k && vt(t, 0), a, g), n != null)
      for (c = n.length; c--; ) Rr(n[c]);
    a || (c = "value", h == "progress" && E == null ? i.removeAttribute("value") : E != null && (E !== i[c] || h == "progress" && !E || h == "option" && E != d[c]) && Do(i, c, E, d[c], A), c = "checked", B != null && B != i[c] && Do(i, c, B, d[c], A));
  }
  return i;
}
function Wr(i, o, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && o == null || (i.__u = i(o));
    } else i.current = o;
  } catch (A) {
    W.__e(A, t);
  }
}
function Ag(i, o, t) {
  var e, A;
  if (W.unmount && W.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Wr(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (n) {
      W.__e(n, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -14 * 669 + 241 + 9125; A < e.length; A++) e[A] && Ag(e[A], o, t || typeof i.type != "function");
  t || Rr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function cI(i, o, t) {
  return this.constructor(i, t);
}
function Ze(i, o, t) {
  var e, A, n, r;
  o == document && (o = document.documentElement), W.__ && W.__(i, o), A = (e = typeof t == "function") ? null : t && t.__k || o.__k, n = [], r = [], vr(o, i = (!e && t || o).__k = FA(Ae, null, [i]), A || Bo, Bo, o.namespaceURI, !e && t ? [t] : A ? null : o.firstChild ? lo.call(o.childNodes) : null, n, !e && t ? t : A ? A.__e : o.firstChild, e, r), X0(n, i, r);
}
function Fr(i, o) {
  Ze(i, o, Fr);
}
function Mr(i, o, t) {
  var e, A, n, r, a = we({}, i.props);
  for (n in i.type && i.type.defaultProps && (r = i.type.defaultProps), o) n == "key" ? e = o[n] : n == "ref" ? A = o[n] : a[n] = o[n] === void 0 && r != null ? r[n] : o[n];
  return arguments.length > 2 && (a.children = arguments.length > -1 * -7090 + -6452 + -635 ? lo.call(arguments, 1842 * -3 + 6507 + -979 * 1) : t), ro(i.type, a, e || i.key, A || i.ref, null);
}
function Ue(i) {
  function o(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[o.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value != n.value && e.forEach(function(r) {
        r.__e = !0, Pi(r);
      });
    }, this.sub = function(n) {
      e.add(n);
      var r = n.componentWillUnmount;
      n.componentWillUnmount = function() {
        e && e.delete(n), r && r.call(n);
      };
    }), t.children;
  }
  return o.__c = "__cC" + j0++, o.__ = i, o.Provider = o.__l = (o.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = o, o;
}
lo = q0.slice, W = { __e: function(i, o, t, e) {
  for (var A, n, r; o = o.__; ) if ((A = o.__c) && !A.__) try {
    if ((n = A.constructor) && n.getDerivedStateFromError != null && (A.setState(n.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, P0 = -15 * 642 + -1568 * -1 + 8062, _0 = function(i) {
  return i != null && i.constructor == null;
}, ae.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = we({}, this.state), typeof i == "function" && (i = i(we({}, t), this.props)), i && we(t, i), i != null && this.__v && (o && this._sb.push(o), Pi(this));
}, ae.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Pi(this));
}, ae.prototype.render = Ae, gt = [], T0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, H0 = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, cn.__r = 271 * 29 + -5233 * -1 + -13092, K0 = /(PointerCapture)$|Capture$/i, Nr = 1641 + -5782 * 1 + 4141, Ui = ga(!1), Yi = ga(!0), j0 = 3 * 1103 + -964 + -2345;
function In() {
  return In = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = -1 * -2897 + -2956 * 1 + 60; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, In.apply(this, arguments);
}
function eg(i, o) {
  if (i == null) return {};
  var t, e, A = {}, n = Object.keys(i);
  for (e = -8136 + 1 * 4013 + 4123; e < n.length; e++) o.indexOf(t = n[e]) >= -3541 * 2 + 7805 * -1 + 14887 || (A[t] = i[t]);
  return A;
}
var II = ["context", "children"], CI = ["useFragment"];
function BI(i, o, t, e) {
  function A() {
    var n = Reflect.construct(HTMLElement, [], A);
    return n._vdomComponent = i, n._root = n, n;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    QI.call(this, e);
  }, A.prototype.attributeChangedCallback = EI, A.prototype.disconnectedCallback = dI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(n) {
    Object.defineProperty(A.prototype, n, { get: function() {
      return this._vdom ? this._vdom.props[n] : this._props[n];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(n, null, r) : (this._props || (this._props = {}), this._props[n] = r);
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, r);
    } });
  }), customElements.define(o, A), A;
}
function xI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = eg(i, II);
  return Mr(o, t);
}
function QI(i) {
  var o = {};
  o.detail = {}, o.bubbles = !0, o.cancelable = !0;
  var t = new CustomEvent("_preact", o);
  this.dispatchEvent(t), this._vdom = FA(xI, In({}, this._props, { context: t.detail.context }), og(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? Fr : Ze)(this._vdom, this._root);
}
function tg(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function EI(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[tg(i)] = t, this._vdom = Mr(this._vdom, e), Ze(this._vdom, this._root);
  }
}
function dI() {
  Ze(this._vdom = null, this._root);
}
function sa(i, o) {
  var t = this, e = i.useFragment, A = eg(i, CI);
  return FA(e ? Ae : "slot", In({}, A, { ref: function(n) {
    n ? (t.ref = n, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = o;
    }, n.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function og(i, o, t) {
  if (-8764 + 1 * -8741 + 17508 === i.nodeType) return i.data;
  if (1042 * 1 + 5373 + 1069 * -6 !== i.nodeType) return null;
  var e = [], A = {}, n = -4 * -677 + -5877 + 3169, r = i.attributes, a = i.childNodes;
  for (n = r.length; n--; ) r[n].name !== "slot" && (A[r[n].name] = r[n].value, A[tg(r[n].name)] = r[n].value);
  for (n = a.length; n--; ) {
    var g = og(a[n], null, t), c = a[n].slot;
    c ? A[c] = FA(sa, { name: c }, g) : e[n] = g;
  }
  var I = !(!t || !t.shadow), s = o ? FA(sa, { useFragment: !I }, e) : e;
  return !I && o && (i.innerHTML = ""), FA(o || i.nodeName.toLowerCase(), A, s);
}
var lI = 491 * 13 + 14 * -599 + 2003 * 1;
function k(i, o, t, e, A, n) {
  o || (o = {});
  var r, a, g = o;
  if ("ref" in g)
    for (a in g = {}, o) a == "ref" ? r = o[a] : g[a] = o[a];
  var c = {};
  c.type = i, c.props = g, c.key = t, c.ref = r, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__c = null, c.constructor = void 0, c.__v = --lI, c.__i = -1, c.__u = 0, c.__source = A, c.__self = n;
  var I = c;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return W.vnode && W.vnode(I), I;
}
class D extends Error {
  cause;
  constructor(o, t) {
    super(o), this.name = "AutoCaptureError", this.cause = t;
  }
  static logError(o) {
  }
  static fromCameraError(o) {
    if (this.logError(o), o instanceof D) return o;
    let t;
    switch (o.name) {
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
    return new D(t, o);
  }
  static fromError(o) {
    if (this.logError(o), o instanceof D) return o;
    const t = "An unexpected error has occurred";
    return new D(t);
  }
}
const Lo = {};
Lo.CONTINUE_DETECTION = "continue-detection", Lo.SWITCH_CAMERA = "switch-camera", Lo.TOGGLE_MIRROR = "toggle-mirror";
const Cn = Lo;
var ng = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(ng || {}), uI = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(uI || {}), fI = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(fI || {}), hI = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(hI || {}), pI = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(pI || {});
const pe = {};
pe.DETECTION_CHANGED = "multi-range-auto-capture:detection-changed", pe.CAMERA_PROPS_CHANGED = "multi-range-auto-capture:camera-props-changed", pe.CONTROL = "multi-range-auto-capture:control", pe.PHASE_CHANGED = "multi-range-auto-capture:phase-changed", pe.INSTRUCTION_CHANGED = "multi-range-auto-capture:instruction-changed", pe.INSTRUCTION_ESCALATED = "multi-range-auto-capture:instruction-escalated", pe.VIDEO_ELEMENT_SIZE = "multi-range-auto-capture:video-element-size", pe.CHALLENGE_VALUE_CHANGED = "multi-range-auto-capture:challenge-value-changed", pe.STATE_CHANGED = "multi-range-auto-capture:state-changed";
const xe = pe, Me = {};
Me.CANDIDATE_SELECTION = "candidate_selection", Me.DOCUMENT_CENTERING = "document_centering", Me.DOCUMENT_NOT_PRESENT = "document_not_present", Me.DOCUMENT_TOO_FAR = "document_too_far", Me.SHARPNESS_TOO_LOW = "sharpness_too_low", Me.BRIGHTNESS_TOO_LOW = "brightness_too_low", Me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Me.HOTSPOTS_PRESENT = "hotspots_present";
const $e = Me, At = {};
At.isPresent = $e.DOCUMENT_NOT_PRESENT, At.isNotSmall = $e.DOCUMENT_TOO_FAR, At.isNotOutOfBounds = $e.DOCUMENT_CENTERING, At.isSharp = $e.SHARPNESS_TOO_LOW, At.isNotDim = $e.BRIGHTNESS_TOO_LOW, At.isNotBright = $e.BRIGHTNESS_TOO_HIGH, At.noHotspots = $e.HOTSPOTS_PRESENT;
const Dt = {};
Dt.LOADING = "loading", Dt.ERROR = "error", Dt.WAITING = "waiting", Dt.RUNNING = "running", Dt.COMPLETE = "complete";
const _ = Dt, ig = {};
ig.EYE_NOT_PRESENT = "eye_not_present";
const Wt = ig, NA = {};
NA.CANDIDATE_SELECTION = "candidate_selection", NA.FACE_TOO_CLOSE = "face_too_close", NA.FACE_TOO_FAR = "face_too_far", NA.FACE_CENTERING = "face_centering", NA.FACE_NOT_PRESENT = "face_not_present", NA.SHARPNESS_TOO_LOW = "sharpness_too_low", NA.BRIGHTNESS_TOO_LOW = "brightness_too_low", NA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", NA.DEVICE_PITCHED = "device_pitched", NA.LEFT_EYE_NOT_PRESENT = "left_" + Wt.EYE_NOT_PRESENT, NA.RIGHT_EYE_NOT_PRESENT = "right_" + Wt.EYE_NOT_PRESENT, NA.MOUTH_NOT_PRESENT = "mouth_not_present", NA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", NA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const JA = NA, TA = {};
TA.isPresent = JA.FACE_NOT_PRESENT, TA.isNotPitched = JA.DEVICE_PITCHED, TA.isNotSmall = JA.FACE_TOO_FAR, TA.isNotLarge = JA.FACE_TOO_CLOSE, TA.isNotOutOfBounds = JA.FACE_CENTERING, TA.isNotDim = JA.BRIGHTNESS_TOO_LOW, TA.isNotBright = JA.BRIGHTNESS_TOO_HIGH, TA.isSharp = JA.SHARPNESS_TOO_LOW, TA.isLeftEyePresent = JA.LEFT_EYE_NOT_PRESENT, TA.isRightEyePresent = JA.RIGHT_EYE_NOT_PRESENT, TA.isMouthPresent = JA.MOUTH_NOT_PRESENT, TA.isMouthScoreNotTooHigh = JA.MOUTH_SCORE_TOO_HIGH, TA.isMouthScoreNotTooLow = JA.MOUTH_SCORE_TOO_LOW;
var mI = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(mI || {});
const IA = {};
IA.CANDIDATE_SELECTION = "candidate_selection", IA.FACE_TOO_CLOSE = "face_too_close", IA.FACE_TOO_FAR = "face_too_far", IA.FACE_CENTERING = "face_centering", IA.FACE_NOT_PRESENT = "face_not_present", IA.SHARPNESS_TOO_LOW = "sharpness_too_low", IA.BRIGHTNESS_TOO_LOW = "brightness_too_low", IA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", IA.DEVICE_PITCHED = "device_pitched", IA.LEFT_EYE_NOT_PRESENT = "left_" + Wt.EYE_NOT_PRESENT, IA.RIGHT_EYE_NOT_PRESENT = "right_" + Wt.EYE_NOT_PRESENT, IA.MOUTH_NOT_PRESENT = "mouth_not_present", IA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", IA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", IA.SMILE = "smile", IA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", IA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const HA = IA, KA = {};
KA.isPresent = HA.FACE_NOT_PRESENT, KA.isNotPitched = HA.DEVICE_PITCHED, KA.isNotSmall = HA.FACE_TOO_FAR, KA.isNotLarge = HA.FACE_TOO_CLOSE, KA.isNotOutOfBounds = HA.FACE_CENTERING, KA.isNotDim = HA.BRIGHTNESS_TOO_LOW, KA.isNotBright = HA.BRIGHTNESS_TOO_HIGH, KA.isSharp = HA.SHARPNESS_TOO_LOW, KA.isLeftEyePresent = HA.LEFT_EYE_NOT_PRESENT, KA.isRightEyePresent = HA.RIGHT_EYE_NOT_PRESENT, KA.isMouthPresent = HA.MOUTH_NOT_PRESENT, KA.isMouthStatusNotTooHigh = HA.MOUTH_SCORE_TOO_HIGH, KA.isMouthStatusNotTooLow = HA.MOUTH_SCORE_TOO_LOW;
const Ii = {};
Ii.NEUTRAL = "NEUTRAL", Ii.SMILE = "SMILE", Ii.SMILE_MANUAL = "SMILE_MANUAL";
const Ie = {};
Ie.CANDIDATE_SELECTION = "candidate_selection", Ie.PALM_CENTERING = "palm_centering", Ie.PALM_NOT_PRESENT = "palm_not_present", Ie.PALM_TOO_FAR = "palm_too_far", Ie.PALM_TOO_CLOSE = "palm_too_close", Ie.SHARPNESS_TOO_LOW = "sharpness_too_low", Ie.BRIGHTNESS_TOO_LOW = "brightness_too_low", Ie.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Ie.DEVICE_PITCHED = "device_pitched", Ie.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const Ge = Ie, Ne = {};
Ne.isPresent = Ge.PALM_NOT_PRESENT, Ne.isNotPitched = Ge.DEVICE_PITCHED, Ne.isNotSmall = Ge.PALM_TOO_FAR, Ne.isNotOutOfBounds = Ge.PALM_CENTERING, Ne.isNotDim = Ge.BRIGHTNESS_TOO_LOW, Ne.isNotBright = Ge.BRIGHTNESS_TOO_HIGH, Ne.isSharp = Ge.SHARPNESS_TOO_LOW, Ne.isNotLarge = Ge.PALM_TOO_CLOSE, Ne.isTemplateExtractionQualityHighEnough = Ge.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const bo = {};
bo.TOP_LEFT = "TOP_LEFT", bo.TOP_RIGHT = "TOP_RIGHT", bo.BOTTOM_RIGHT = "BOTTOM_RIGHT", bo.BOTTOM_LEFT = "BOTTOM_LEFT";
const ie = {};
ie.CANDIDATE_SELECTION = "candidate_selection", ie.FACE_TOO_CLOSE = "face_too_close", ie.FACE_TOO_FAR = "face_too_far", ie.FACE_CENTERING = "face_centering", ie.FACE_NOT_PRESENT = "face_not_present", ie.SHARPNESS_TOO_LOW = "sharpness_too_low", ie.BRIGHTNESS_TOO_LOW = "brightness_too_low", ie.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ie.DEVICE_PITCHED = "device_pitched", ie.LEFT_EYE_NOT_PRESENT = "left_" + Wt.EYE_NOT_PRESENT, ie.RIGHT_EYE_NOT_PRESENT = "right_" + Wt.EYE_NOT_PRESENT;
const bA = ie, Ce = {};
Ce.isPresent = bA.FACE_NOT_PRESENT, Ce.isNotPitched = bA.DEVICE_PITCHED, Ce.isNotSmall = bA.FACE_TOO_FAR, Ce.isNotLarge = bA.FACE_TOO_CLOSE, Ce.isNotOutOfBounds = bA.FACE_CENTERING, Ce.isNotDim = bA.BRIGHTNESS_TOO_LOW, Ce.isNotBright = bA.BRIGHTNESS_TOO_HIGH, Ce.isSharp = bA.SHARPNESS_TOO_LOW, Ce.isLeftEyePresent = bA.LEFT_EYE_NOT_PRESENT, Ce.isRightEyePresent = bA.RIGHT_EYE_NOT_PRESENT;
const ca = Ce, nt = {};
nt.ZERO = "ZERO", nt.ONE = "ONE", nt.TWO = "TWO", nt.THREE = "THREE", nt.FOUR = "FOUR", nt.FIVE = "FIVE";
const XA = nt;
var ze, j, Ci, Ia, Ft = 1 * 8663 + -999 + -7664, rg = [], V = W, Ca = V.__b, Ba = V.__r, xa = V.diffed, Qa = V.__c, Ea = V.unmount, da = V.__;
function Tt(i, o) {
  V.__h && V.__h(j, i, Ft || o), Ft = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var e = j.__H || (j.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function sA(i) {
  return Ft = 1879 * -1 + 8965 + -7085, Lr(sg, i);
}
function Lr(i, o, t) {
  var e = Tt(ze++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : sg(void 0, o), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], c = e.t(g, a);
    g !== c && (e.__N = [c, e.__[-7793 + 1 * 7777 + 17]], e.__c.setState({}));
  }], e.__c = j, !j.__f)) {
    var A = function(a, g, c) {
      if (!e.__c.__H) return !0;
      var I = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (I.every(function(C) {
        return !C.__N;
      })) return !n || n.call(this, a, g, c);
      var s = e.__c.props !== a;
      return I.forEach(function(C) {
        if (C.__N) {
          var Q = C.__[0];
          C.__ = C.__N, C.__N = void 0, Q !== C.__[0] && (s = !0);
        }
      }), n && n.call(this, a, g, c) || s;
    };
    j.__f = !0;
    var n = j.shouldComponentUpdate, r = j.componentWillUpdate;
    j.componentWillUpdate = function(a, g, c) {
      if (this.__e) {
        var I = n;
        n = void 0, A(a, g, c), n = I;
      }
      r && r.call(this, a, g, c);
    }, j.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function eA(i, o) {
  var t = Tt(ze++, 3);
  !V.__s && Or(t.__H, o) && (t.__ = i, t.u = o, j.__H.__h.push(t));
}
function Ht(i, o) {
  var t = Tt(ze++, 4);
  !V.__s && Or(t.__H, o) && (t.__ = i, t.u = o, j.__h.push(t));
}
function _A(i) {
  return Ft = -1483 + -1 * 6871 + 8359, uA(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function ag(i, o, t) {
  Ft = 6, Ht(function() {
    if (typeof i == "function") {
      var e = i(o());
      return function() {
        i(null), e && typeof e == "function" && e();
      };
    }
    if (i) return i.current = o(), function() {
      return i.current = null;
    };
  }, t == null ? t : t.concat(i));
}
function uA(i, o) {
  var t = Tt(ze++, 7);
  return Or(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function be(i, o) {
  return Ft = 5491 + 5483 * -1, uA(function() {
    return i;
  }, o);
}
function Qe(i) {
  var o = j.context[i.__c], t = Tt(ze++, 8400 + 32 * 292 + 1 * -17735);
  return t.c = i, o ? (t.__ == null && (t.__ = !0, o.sub(j)), o.props.value) : i.__;
}
function Bn(i, o) {
  V.useDebugValue && V.useDebugValue(o ? o(i) : i);
}
function gg() {
  var i = Tt(ze++, 11);
  if (!i.__) {
    for (var o = j.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-1535 + 1 * 1535, -566 * -3 + 5700 + -7398]);
    i.__ = "P" + t[-15590 + 5 * 3118] + "-" + t[1]++;
  }
  return i.__;
}
function yI() {
  for (var i; i = rg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(Oo), i.__H.__h.forEach(Ti), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], V.__e(o, i.__v);
  }
}
V.__b = function(i) {
  j = null, Ca && Ca(i);
}, V.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), da && da(i, o);
}, V.__r = function(i) {
  Ba && Ba(i), ze = 0;
  var o = (j = i.__c).__H;
  o && (Ci === j ? (o.__h = [], j.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (o.__h.forEach(Oo), o.__h.forEach(Ti), o.__h = [], ze = -1 * 5714 + 1824 + 3890)), Ci = j;
}, V.diffed = function(i) {
  xa && xa(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (-2681 + -6813 * 1 + 633 * 15 !== rg.push(o) && Ia === V.requestAnimationFrame || ((Ia = V.requestAnimationFrame) || wI)(yI)), o.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Ci = j = null;
}, V.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(Oo), t.__h = t.__h.filter(function(e) {
        return !e.__ || Ti(e);
      });
    } catch (e) {
      o.some(function(A) {
        A.__h && (A.__h = []);
      }), o = [], V.__e(e, t.__v);
    }
  }), Qa && Qa(i, o);
}, V.unmount = function(i) {
  Ea && Ea(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Oo(e);
    } catch (A) {
      o = A;
    }
  }), t.__H = void 0, o && V.__e(o, t.__v));
};
var la = typeof requestAnimationFrame == "function";
function wI(i) {
  var o, t = function() {
    clearTimeout(e), la && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 35);
  la && (o = requestAnimationFrame(t));
}
function Oo(i) {
  var o = j, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), j = o;
}
function Ti(i) {
  var o = j;
  i.__c = i.__(), j = o;
}
function Or(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function sg(i, o) {
  return typeof o == "function" ? o(i) : o;
}
const Vn = Ue(void 0);
Vn.displayName = "AppStateContext";
function MA() {
  const i = Qe(Vn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class DI extends ae {
  static contextType = Vn;
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    const o = new D("An unknown error has occurred");
    this.context?.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    return this.context?.appState === _.ERROR ? null : this.props.children;
  }
}
function cg(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Hi(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !0;
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !0;
  return !1;
}
function Ig(i, o) {
  var t = o(), e = sA({ t: { __: t, u: o } }), A = e[-1053 + 1 * -5965 + -319 * -22].t, n = e[-11990 + 1 * 11991];
  return Ht(function() {
    A.__ = t, A.u = o, Bi(A) && n({ t: A });
  }, [i, t, o]), eA(function() {
    return Bi(A) && n({ t: A }), i(function() {
      Bi(A) && n({ t: A });
    });
  }, [i]), t;
}
function Bi(i) {
  var o, t, e = i.u, A = i.__;
  try {
    var n = e();
    return !((o = A) === (t = n) && (o !== 0 || (11900 + -11899 * 1) / o == (-1 * -9929 + -2 * -1543 + -13014) / t) || o != o && t != t);
  } catch {
    return !0;
  }
}
function Cg(i) {
  i();
}
function Bg(i) {
  return i;
}
function xg() {
  return [!1, Cg];
}
var Qg = Ht;
function Ki(i, o) {
  this.props = i, this.context = o;
}
function bI(i, o) {
  function t(A) {
    var n = this.props.ref, r = n == A.ref;
    return !r && n && (n.call ? n(null) : n.current = null), o ? !o(this.props, A) || !r : Hi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, FA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(Ki.prototype = new ae()).isPureReactComponent = !0, Ki.prototype.shouldComponentUpdate = function(i, o) {
  return Hi(this.props, i) || Hi(this.state, o);
};
var ua = W.__b;
W.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ua && ua(i);
};
var kI = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 1 * 1427 + -1 * -1322 + 1162;
function Jr(i) {
  function o(t) {
    var e = cg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = kI, o.render = i, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var fa = function(i, o) {
  return i == null ? null : Je(Je(i).map(o));
}, SI = { map: fa, forEach: fa, count: function(i) {
  return i ? Je(i).length : 6572 + 3 * 2972 + -15488;
}, only: function(i) {
  var o = Je(i);
  if (o.length !== 1) throw "Children.only";
  return o[0];
}, toArray: Je }, GI = W.__e;
W.__e = function(i, o, t, e) {
  if (i.then) {
    for (var A, n = o; n = n.__; ) if ((A = n.__c) && A.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), A.__c(i, o);
  }
  GI(i, o, t, e);
};
var ha = W.unmount;
function Eg(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = cg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Eg(e, o, t);
  })), i;
}
function dg(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return dg(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function Jo() {
  this.__u = -5 * 813 + 2 * -2521 + -9107 * -1, this.o = null, this.__b = null;
}
function lg(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function NI(i) {
  var o, t, e, A = null;
  function n(r) {
    if (o || (o = i()).then(function(a) {
      a && (A = a.default || a), e = !0;
    }, function(a) {
      t = a, e = !0;
    }), t) throw t;
    if (!e) throw o;
    return A ? FA(A, r) : null;
  }
  return n.displayName = "Lazy", n.__f = !0, n;
}
function eo() {
  this.i = null, this.l = null;
}
W.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && -9391 * 1 + 1 * 2931 + 6492 & i.__u && (i.type = null), ha && ha(i);
}, (Jo.prototype = new ae()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = lg(e.__v), n = !1, r = function() {
    n || (n = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[1 * -265 + -4636 + -1 * -4901] = dg(g, g.__c.__P, g.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.o.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || 6907 + 625 * -11 & o.__u || e.setState({ __a: e.__b = e.__v.__k[0] }), i.then(r, r);
}, Jo.prototype.componentWillUnmount = function() {
  this.o = [];
}, Jo.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-10 * 716 + -368 + -1 * -7528].__c;
      this.__v.__k[6657 + -1 * -867 + -3762 * 2] = Eg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = o.__a && FA(Ae, null, i.fallback);
  return A && (A.__u &= -33), [FA(Ae, null, o.__a ? null : i.children), A];
};
var pa = function(i, o, t) {
  if (++t[-12 * 647 + -3139 + 5452 * 2] === t[0] && i.l.delete(o), i.props.revealOrder && (i.props.revealOrder[886 * -10 + 6376 + 2484] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[-1 * 2533 + -1 * 5436 + 613 * 13]) break;
    i.i = t = t[-3609 * 1 + -9699 + -1 * -13310];
  }
};
function RI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function vI(i) {
  var o = this, t = i.h;
  if (o.componentWillUnmount = function() {
    Ze(null, o.v), o.v = null, o.h = null;
  }, o.h && o.h !== t && o.componentWillUnmount(), !o.v) {
    for (var e = o.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, o.h = t, o.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), o.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -8561 + -16 * -342 + 309 * 10, 1), o.h.removeChild(r);
    } };
  }
  var n = {};
  n.context = o.context, Ze(FA(RI, n, i.__v), o.v);
}
function WI(i, o) {
  var t = {};
  t.__v = i, t.h = o;
  var e = FA(vI, t);
  return e.containerInfo = o, e;
}
(eo.prototype = new ae()).__a = function(i) {
  var o = this, t = lg(o.__v), e = o.l.get(i);
  return e[-2821 + 442 * -16 + 13 * 761]++, function(A) {
    var n = function() {
      o.props.revealOrder ? (e.push(A), pa(o, i, e)) : A();
    };
    t ? t(n) : n();
  };
}, eo.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var o = Je(i.children);
  i.revealOrder && i.revealOrder[-6 * 831 + 750 + 4236] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.l.set(o[t], this.i = [1 * -3201 + -8218 + -2284 * -5, 6528 + -6525 * 1 + -3, this.i]);
  return i.children;
}, eo.prototype.componentDidUpdate = eo.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(o, t) {
    pa(i, t, o);
  });
};
var ug = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, FI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, MI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, LI = /[A-Z0-9]/g, OI = typeof document < "u", JI = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function UI(i, o, t) {
  return o.__k == null && (o.textContent = ""), Ze(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function YI(i, o, t) {
  return Fr(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
ae.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(ae.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = o, Object.defineProperty(this, i, t);
  } });
});
var ma = W.event;
function PI() {
}
function _I() {
  return this.cancelBubble;
}
function TI() {
  return this.defaultPrevented;
}
W.event = function(i) {
  return ma && (i = ma(i)), i.persist = PI, i.isPropagationStopped = _I, i.isDefaultPrevented = TI, i.nativeEvent = i;
};
var Uo = {};
Uo.enumerable = !1, Uo.configurable = !0, Uo.get = function() {
  return this.class;
};
var Ur, HI = Uo, ya = W.vnode;
W.vnode = function(i) {
  typeof i.type == "string" && (function(o) {
    var t = o.props, e = o.type, A = {}, n = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || OI && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[11 * -347 + 6333 + -2516] === "o" && g[1] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || JI(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : MI.test(r) && (r = g) : g = r = "oninput" : n && FI.test(r) ? r = r.replace(LI, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Je(t.children).forEach(function(c) {
      c.props.selected = A.value.indexOf(c.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Je(t.children).forEach(function(c) {
      c.props.selected = A.multiple ? A.defaultValue.indexOf(c.props.value) != -1 : A.defaultValue == c.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", HI)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), o.props = A;
  })(i), i.$$typeof = ug, ya && ya(i);
};
var wa = W.__r;
W.__r = function(i) {
  wa && wa(i), Ur = i.__c;
};
var Da = W.diffed;
W.diffed = function(i) {
  Da && Da(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Ur = null;
};
var pA = {};
pA.readContext = function(i) {
  return Ur.__n[i.__c].props.value;
}, pA.useCallback = be, pA.useContext = Qe, pA.useDebugValue = Bn, pA.useDeferredValue = Bg, pA.useEffect = eA, pA.useId = gg, pA.useImperativeHandle = ag, pA.useInsertionEffect = Qg, pA.useLayoutEffect = Ht, pA.useMemo = uA, pA.useReducer = Lr, pA.useRef = _A, pA.useState = sA, pA.useSyncExternalStore = Ig, pA.useTransition = xg;
var fg = {};
fg.current = pA;
var hg = {};
hg.ReactCurrentDispatcher = fg;
var KI = hg;
function jI(i) {
  return FA.bind(null, i);
}
function Zn(i) {
  return !!i && i.$$typeof === ug;
}
function qI(i) {
  return Zn(i) && i.type === Ae;
}
function VI(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function ZI(i) {
  return Zn(i) ? Mr.apply(null, arguments) : i;
}
function zI(i) {
  return !!i.__k && (Ze(null, i), !0);
}
function XI(i) {
  return i && (i.base || 5 * -1151 + 3659 + 2097 === i.nodeType && i) || null;
}
var $I = function(i, o) {
  return i(o);
}, AC = function(i, o) {
  return i(o);
}, eC = Ae, tC = Zn, Qt = { useState: sA, useId: gg, useReducer: Lr, useEffect: eA, useLayoutEffect: Ht, useInsertionEffect: Qg, useTransition: xg, useDeferredValue: Bg, useSyncExternalStore: Ig, startTransition: Cg, useRef: _A, useImperativeHandle: ag, useMemo: uA, useCallback: be, useContext: Qe, useDebugValue: Bn, version: "18.3.1", Children: SI, render: UI, hydrate: YI, unmountComponentAtNode: zI, createPortal: WI, createElement: FA, createContext: Ue, createFactory: jI, cloneElement: ZI, createRef: rI, Fragment: Ae, isValidElement: Zn, isElement: tC, isFragment: qI, isMemo: VI, findDOMNode: XI, Component: ae, PureComponent: Ki, memo: bI, forwardRef: Jr, flushSync: AC, unstable_batchedUpdates: $I, StrictMode: eC, Suspense: Jo, SuspenseList: eo, lazy: NI, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: KI };
function CA(i, o) {
  i = i - (9869 + 1 * -9624);
  const t = Qn();
  let e = t[i];
  if (CA.KlvluG === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    CA.FQgFyt = g, CA.OGDnJk = {}, CA.KlvluG = !0;
  }
  const n = t[7857 * 1 + -486 * -15 + -891 * 17], r = i + n, a = CA.OGDnJk[r];
  return a ? e = a : (CA.cqsqJY === void 0 && (CA.cqsqJY = !0), e = CA.FQgFyt(e, o), CA.OGDnJk[r] = e), e;
}
function ao(i, o, t, e, A) {
  return CA(i - 722, o);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return CA(C - 501, g);
  }
  const e = i();
  function A(g, c, I, s, C) {
    return CA(I - -924, s);
  }
  function n(g, c, I, s, C) {
    return CA(C - -51, c);
  }
  function r(g, c, I, s, C) {
    return CA(s - 61, C);
  }
  function a(g, c, I, s, C) {
    return CA(s - -736, g);
  }
  for (; ; )
    try {
      if (-parseInt(A(-674, -658, -657, "if]W", -666)) / 1 * (parseInt(A(-662, -663, -673, "[mel", -668)) / 2) + parseInt(a("zTxH", -456, -467, -472, -461)) / 3 + -parseInt(A(-661, -664, -667, "mZhI", -672)) / 4 + parseInt(r(341, 324, 347, 332, "mvPC")) / 5 * (parseInt(r(352, 336, 353, 336, "cMft")) / 6) + -parseInt(t("4$N5", 749, 761, 747, 753)) / 7 + parseInt(t("yG21", 766, 749, 764, 754)) / 8 + parseInt(A(-657, -636, -652, "mZhI", -657)) / 9 * (parseInt(n(204, "oM#S", 194, 181, 199)) / 10) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Qn, -1678855 + -9 * 104393 + 3533697);
function oC(i, o, t, e, A) {
  return CA(A - 612, o);
}
const xn = Ue(void 0);
function pg(i, o, t, e, A) {
  return CA(i - 29, t);
}
function Qn() {
  const i = ["W7ZdLHpcJxJcOLdcSIS", "W73dGt0wqa", "wCo2W4uxaq", "WOapkWJdJtCuWQjcFCo3W6FdLG", "WR3cTHCwjmk1rse", "y1ldJSkwt8kxWPXZy8ka", "gxdcSmoIAGNcSSowW4PkWQaZkq", "aSoqW5OUECk+W4hcHCkvWOb2W7NcTW", "WQ/cUd07aq", "WOeiW5nZW7e", "WRuFW44", "W5NcTmoZfSoDWOtdImogiaBcO1fV", "WRiLqCkVfSkSeSksW4/cKq", "ss3dTmkHpW", "WPNdPSkctSkf", "W6jLW5NcLhHNaSkxW7DsW5dcO24", "WPzFW5JcKHRcN1qf", "WOO2WOlcUH/dQCkMW7v7v8kjrCow", "bCoIWQTNf0qFWR3dPG4we3C", "jmkVWP9ev8oGWQxdV8krW7KJ", "xmkDWOTYia", "og4nWQOXaaBdGCo+", "BJjiWPWw", "rCkcnmk+rW", "WQ/dPWXRka", "W6JdUuyJp8ozWRi5yCoW", "W5/cSSo0emoCWOldICogmW7cQgzt", "WPbyW4LUjZldL8olWRCo", "W5VdNJj2", "W6DHW5FcKxK1ASkwW6DLW5u", "WPzrW4PNrwVcO8oLWPWdW5BdKKi", "wmkWW7zoWRG", "W5zXnCojWQe", "W7lcTCo2W7Lg", "WO0xWO0/WOicWRRcRSkfWQOhW5ft"];
  return Qn = function() {
    return i;
  }, Qn();
}
xn[pg(288, 275, "4$N5") + ao(969, "WXn@") + "e"] = ao(970, "pG5Q") + mg(1019, "mZhI", 1008, 996, 1009) + oC(893, "D8)e", 883, 887, 886);
function mg(i, o, t, e, A) {
  return CA(A - 749, o);
}
function zn() {
  function i(r, a, g, c, I) {
    return mg(r - 446, a, g - 153, c - 405, r - -224);
  }
  function o(r, a, g, c, I) {
    return pg(g - -445, a - 100, a);
  }
  function t(r, a, g, c, I) {
    return ao(I - -1680, g);
  }
  function e(r, a, g, c, I) {
    return ao(I - -802, r);
  }
  const A = Qe(xn);
  function n(r, a, g, c, I) {
    return ao(I - -1056, r);
  }
  if (A === void 0) throw new Error(xn[i(793, "if]W", 776, 789) + i(795, "Oh&0", 792, 779) + "e"] + (e("PPv7", 164, 172, 166, 174) + n("Tm*z", -43, -59, -50, -56) + i(802, "uA%Q", 813, 808) + n("yG21", -55, -85, -72, -68) + e("u!&O", 215, 214, 195, 199) + o(-138, "$10J", -147) + i(780, "12RT", 789, 768) + t(-707, -689, "12RT", -710, -702)));
  return A;
}
const En = Ue(void 0);
En.displayName = "AnalyticsContext";
function nC() {
  const i = Qe(En);
  if (i === void 0)
    throw new Error(`${En.displayName} must be used within a AnalyticsProvider`);
  return i;
}
var iC = /* @__PURE__ */ Symbol.for("preact-signals");
function Xn() {
  if (Ve > 359 * 22 + -5053 + -4 * 711)
    Ve--;
  else {
    for (var i, o = !1; go !== void 0; ) {
      var t = go;
      for (go = void 0, ji++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && Dg(t)) try {
          t.c();
        } catch (A) {
          !o && (i = A, o = !0);
        }
        t = e;
      }
    }
    if (ji = 1249 * 1 + -8748 + 7499, Ve--, o) throw i;
  }
}
function rC(i) {
  if (Ve > 0) return i();
  Ve++;
  try {
    return i();
  } finally {
    Xn();
  }
}
var P = void 0;
function ba(i) {
  var o = P;
  P = void 0;
  try {
    return i();
  } finally {
    P = o;
  }
}
var go = void 0, Ve = 7 * -313 + -1033 * -4 + -1941, ji = 1135 + -7267 * 1 + -3 * -2044, dn = -2333 * -4 + 1 * 483 + 9815 * -1;
function yg(i) {
  if (P !== void 0) {
    var o = i.n;
    if (o === void 0 || o.t !== P)
      return o = { i: 0, S: i, p: P.s, n: void 0, t: P, e: void 0, x: void 0, r: o }, P.s !== void 0 && (P.s.n = o), P.s = o, i.n = o, 1 * 7333 + -3754 + -3547 & P.f && i.S(o), o;
    if (o.i === -1)
      return o.i = 0, o.n !== void 0 && (o.n.p = o.p, o.p !== void 0 && (o.p.n = o.n), o.p = P.s, o.n = void 0, P.s.n = o, P.s = o), o;
  }
}
function mA(i, o) {
  this.v = i, this.i = 0, this.n = void 0, this.t = void 0, this.W = o?.watched, this.Z = o?.unwatched, this.name = o?.name;
}
mA.prototype.brand = iC, mA.prototype.h = function() {
  return !0;
}, mA.prototype.S = function(i) {
  var o = this, t = this.t;
  t !== i && i.e === void 0 && (i.x = t, this.t = i, t !== void 0 ? t.e = i : ba(function() {
    var e;
    (e = o.W) == null || e.call(o);
  }));
}, mA.prototype.U = function(i) {
  var o = this;
  if (this.t !== void 0) {
    var t = i.e, e = i.x;
    t !== void 0 && (t.x = e, i.e = void 0), e !== void 0 && (e.e = t, i.x = void 0), i === this.t && (this.t = e, e === void 0 && ba(function() {
      var A;
      (A = o.Z) == null || A.call(o);
    }));
  }
}, mA.prototype.subscribe = function(i) {
  var o = this, t = {};
  return t.name = "sub", fo(function() {
    var e = o.value, A = P;
    P = void 0;
    try {
      i(e);
    } finally {
      P = A;
    }
  }, t);
}, mA.prototype.valueOf = function() {
  return this.value;
}, mA.prototype.toString = function() {
  return this.value + "";
}, mA.prototype.toJSON = function() {
  return this.value;
}, mA.prototype.peek = function() {
  var i = P;
  P = void 0;
  try {
    return this.value;
  } finally {
    P = i;
  }
}, Object.defineProperty(mA.prototype, "value", { get: function() {
  var i = yg(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (ji > -802 * 2 + 1368 + 336) throw new Error("Cycle detected");
    this.v = i, this.i++, dn++, Ve++;
    try {
      for (var o = this.t; void (732 + -4 * -576 + -3036) !== o; o = o.x) o.t.N();
    } finally {
      Xn();
    }
  }
} });
function wg(i, o) {
  return new mA(i, o);
}
function Dg(i) {
  for (var o = i.s; o !== void 0; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !0;
  return !1;
}
function bg(i) {
  for (var o = i.s; o !== void 0; o = o.n) {
    var t = o.S.n;
    if (t !== void 0 && (o.r = t), o.S.n = o, o.i = -1, o.n === void 0) {
      i.s = o;
      break;
    }
  }
}
function kg(i) {
  for (var o = i.s, t = void 0; o !== void 0; ) {
    var e = o.p;
    o.i === -1 ? (o.S.U(o), e !== void 0 && (e.n = o.n), o.n !== void 0 && (o.n.p = e)) : t = o, o.S.n = o.r, o.r !== void 0 && (o.r = void 0), o = e;
  }
  i.s = t;
}
function it(i, o) {
  mA.call(this, void 0), this.x = i, this.s = void 0, this.g = dn - (520 * 4 + 197 + -2276), this.f = -2569 * -1 + -2 * 1591 + 617, this.W = o?.watched, this.Z = o?.unwatched, this.name = o?.name;
}
it.prototype = new mA(), it.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if (266 * 32 + -5489 + -2991 == (11947 + -1 * 11911 & this.f) || (this.f &= -5, this.g === dn)) return !0;
  if (this.g = dn, this.f |= 6039 + 6038 * -1, this.i > 0 && !Dg(this)) return this.f &= -2, !0;
  var i = P;
  try {
    bg(this), P = this;
    var o = this.x();
    (-323 + -3 * 1678 + 5373 & this.f || this.v !== o || -1699 + -1 * -1699 === this.i) && (this.v = o, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 1 * 549 + 887 * -2 + 1241, this.i++;
  }
  return P = i, kg(this), this.f &= -2, !0;
}, it.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -1583 * -6 + 1 * 5445 + -14907;
    for (var o = this.s; o !== void 0; o = o.n) o.S.S(o);
  }
  mA.prototype.S.call(this, i);
}, it.prototype.U = function(i) {
  if (this.t !== void 0 && (mA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var o = this.s; o !== void 0; o = o.n) o.S.U(o);
  }
}, it.prototype.N = function() {
  if (!(-7811 + 1923 * -5 + 17428 & this.f)) {
    this.f |= 6;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(it.prototype, "value", { get: function() {
  if (7108 * -1 + -7144 + 14253 & this.f) throw new Error("Cycle detected");
  var i = yg(this);
  if (this.h(), i !== void 0 && (i.i = this.i), -9515 + 869 * -8 + 16483 & this.f) throw this.v;
  return this.v;
} });
function ka(i, o) {
  return new it(i, o);
}
function Sg(i) {
  var o = i.u;
  if (i.u = void 0, typeof o == "function") {
    Ve++;
    var t = P;
    P = void 0;
    try {
      o();
    } catch (e) {
      throw i.f &= -2, i.f |= 8, Yr(i), e;
    } finally {
      P = t, Xn();
    }
  }
}
function Yr(i) {
  for (var o = i.s; o !== void 0; o = o.n) o.S.U(o);
  i.x = void 0, i.s = void 0, Sg(i);
}
function aC(i) {
  if (P !== this) throw new Error("Out-of-order effect");
  kg(this), P = i, this.f &= -2, 4430 * 1 + -2433 * 3 + 2877 & this.f && Yr(this), Xn();
}
function bt(i, o) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 1 * 5407 + -6861 + 2 * 743, this.name = o?.name;
}
bt.prototype.c = function() {
  var i = this.S();
  try {
    if (8 & this.f || void (-4066 + -1 * -553 + -1 * -3513) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, bt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Sg(this), bg(this), Ve++;
  var i = P;
  return P = this, aC.bind(this, i);
}, bt.prototype.N = function() {
  !(-8795 + 2345 * 1 + 6452 & this.f) && (this.f |= 2, this.o = go, go = this);
}, bt.prototype.d = function() {
  this.f |= 13025 + -3 * 4339, 1 & this.f || Yr(this);
}, bt.prototype.dispose = function() {
  this.d();
};
function fo(i, o) {
  var t = new bt(i, o);
  try {
    t.c();
  } catch (A) {
    throw t.d(), A;
  }
  var e = t.d.bind(t);
  return e[Symbol.dispose] = e, e;
}
var Gg, xi, ko = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, Ng = [];
fo(function() {
  Gg = this.N;
})();
function Gt(i, o) {
  W[i] = o.bind(null, W[i] || function() {
  });
}
function So(i) {
  xi && xi(), xi = i && i.S();
}
function Rg(i) {
  var o = this, t = i.data, e = vg(t);
  e.value = t;
  var A = uA(function() {
    for (var a = o, g = o.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= 1954 * -2 + 4201 * 1 + 289 * -1;
      break;
    }
    var c = ka(function() {
      var Q = e.value.value;
      return -6337 + 8906 * -1 + 15243 === Q ? 7770 + -1433 * 3 + -3471 * 1 : Q === !0 ? "" : Q || "";
    }), I = ka(function() {
      return !Array.isArray(c.value) && !_0(c.value);
    }), s = fo(function() {
      if (this.N = Wg, I.value) {
        var Q = c.value;
        a.__v && a.__v.__e && 8472 + -3 * 2823 === a.__v.__e.nodeType && (a.__v.__e.data = Q);
      }
    }), C = o.__$u.d;
    return o.__$u.d = function() {
      s(), C.call(this);
    }, [I, c];
  }, []), n = A[1975 + -1975 * 1], r = A[1];
  return n.value ? r.peek() : r.value;
}
Rg.displayName = "ReactiveTextNode";
var qi = {};
qi.configurable = !0, qi.value = void 0;
var Vi = {};
Vi.configurable = !0, Vi.value = Rg;
var Zi = {};
Zi.configurable = !0, Zi.get = function() {
  var i = {};
  return i.data = this, i;
};
var zi = {};
zi.configurable = !0, zi.value = 1;
var zt = {};
zt.constructor = qi, zt.type = Vi, zt.props = Zi, zt.__b = zi, Object.defineProperties(mA.prototype, zt), Gt("__b", function(i, o) {
  if (ko && typeof o.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), typeof o.type == "string") {
    var t, e = o.props;
    for (var A in e) if (A !== "children") {
      var n = e[A];
      n instanceof mA && (t || (o.__np = t = {}), t[A] = n, e[A] = n.peek());
    }
  }
  i(o);
}), Gt("__r", function(i, o) {
  if (ko && typeof o.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(o), o.type !== Ae) {
    So();
    var t, e = o.__c;
    e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = (function(A) {
      var n;
      return fo(function() {
        n = this;
      }), n.c = function() {
        e.__$f |= 3286 + -2 * -3119 + -9523, e.setState({});
      }, n;
    })())), So(t);
  }
  i(o);
}), Gt("__e", function(i, o, t, e) {
  ko && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), So(), i(o, t, e);
}), Gt("diffed", function(i, o) {
  ko && typeof o.type == "function" && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(), So();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, A = o.props;
    if (e) {
      var n = t.U;
      if (n) for (var r in n) {
        var a = n[r];
        a !== void 0 && !(r in e) && (a.d(), n[r] = void 0);
      }
      else n = {}, t.U = n;
      for (var g in e) {
        var c = n[g], I = e[g];
        c === void 0 ? (c = gC(t, g, I, A), n[g] = c) : c.o(I, A);
      }
    }
  }
  i(o);
});
function gC(i, o, t, e) {
  var A = o in i && i.ownerSVGElement === void 0, n = wg(t);
  return { o: function(r, a) {
    n.value = r, e = a;
  }, d: fo(function() {
    this.N = Wg;
    var r = n.value.value;
    e[o] !== r && (e[o] = r, A ? i[o] = r : r != null && (r !== !1 || o[4436 * -2 + -7 * -1409 + -3 * 329] === "-") ? i.setAttribute(o, r) : i.removeAttribute(o));
  }) };
}
Gt("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void 0;
        for (var A in e) {
          var n = e[A];
          n && n.d();
        }
      }
    }
  } else {
    var r = o.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void 0, a.d());
    }
  }
  i(o);
}), Gt("__h", function(i, o, t, e) {
  (e < 3 || -1184 + 5 * -1059 + 8 * 811 === e) && (o.__$f |= 2), i(o, t, e);
}), ae.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in o) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var n = 2 & this.__$f;
    if (!(e || n || 4 & this.__$f) || -3643 * -1 + -4598 + -956 * -1 & this.__$f) return !0;
  } else if (!(e || -4498 + -1833 * -5 + 1 * -4663 & this.__$f) || -1 * -2207 + -9350 + 18 * 397 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var a in this.props) if (!(a in i)) return !0;
  return !1;
};
function vg(i, o) {
  return sA(function() {
    return wg(i, o);
  })[267 * -27 + 4935 + -3 * -758];
}
var sC = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function cC() {
  rC(function() {
    for (var i; i = Ng.shift(); ) Gg.call(i);
  });
}
function Wg() {
  Ng.push(this) === 1 && (W.requestAnimationFrame || sC)(cC);
}
const Qi = (i) => i.length < 2485 + 11 * 299 + -5773 ? -5015 + 3359 * -2 + 11733 : i.reduce((t, e) => t + e, -741 + -1450 * -1 + 1 * -709) / i.length, Nt = (i) => Number.parseFloat(i.toFixed(-14757 + 492 * 30));
function IC(i) {
  const o = i.getContext("2d");
  o && o.clearRect(4690 + -5 * 938, 3235 + 8 * 773 + -9419, o.canvas.width, o.canvas.height);
}
const Fg = 1 * -2657 + 1848 + 1 * 809 + 0.75, CC = -3368 + 3370 * 1, BC = 600, xC = "dot-auto-capture-video", $n = (i, o) => Math.min(i, o), Mg = ({ height: i, width: o }, t) => {
  const e = $n(o, i) * t, A = (o - e) / (5888 + -981 * 6), n = (i - e) / (-1097 * -2 + -6144 + -13 * -304), r = {};
  return r.shiftX = A, r.shiftY = n, r.width = e, r.height = e, r;
}, QC = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = Mg(i, o), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = n / i.width, r.height = t / i.height, r;
}, EC = ({ height: i, width: o }) => {
  const t = $n(o, i), e = t / (-1152 * 3 + 1 * -9109 + 12568) * (746 * 7 + -6188 + 970);
  if (o > i) {
    const n = {};
    return n.width = e, n.height = t, n;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function dC(i, o) {
  const t = $n(o.width, o.height);
  return Nt(i * t);
}
function lC({ height: i, width: o }) {
  const t = {};
  return t.height = i, t.width = o, Mg(t, Fg);
}
function uC(i) {
  return QC(i, Fg);
}
function fC(i, o) {
  return dC(i, o) * CC;
}
const hC = "8.0.3", pC = {
  version: hC
}, mC = 9 + 0.8100000000000005, Xi = {};
Xi.max = 100, Xi.min = 10;
const Sa = Xi, yC = 1 * 3923 + 3261 + 4 * -1616, wC = 200, DC = 4, Lg = "AES-CBC", Og = "RSA-OAEP", bC = "SHA-256", kC = "image/jpeg", SC = 8286 + -8278 * 1, Jg = "/dot-assets", Ga = "dot_embedded_bg.wasm", GC = "c56a4180-65aa-42ec-a945-5fd21dec0538", NC = ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "b2c3d4e5-f6a7-8901-bcde-f12345678901", "c3d4e5f6-a7b8-9012-cdef-123456789012", "d4e5f6a7-b8c9-0123-defa-234567890123", "e5f6a7b8-c9d0-1234-efab-345678901234", "f6a7b8c9-d0e1-2345-fabc-456789012345", "17a8b9c0-e1f2-3456-abcd-567890123456", "28b9c0d1-f2a3-4567-bcde-678901234567", "39c0d1e2-a3b4-5678-cdef-789012345678", "40d1e2f3-b4c5-6789-defa-890123456789", "51e2f3a4-c5d6-7890-efab-901234567890", "62f3a4b5-d6e7-8901-fabc-012345678901", "73a4b5c6-e7f8-9012-abcd-123456789012", "84b5c6d7-f8a9-0123-bcde-234567890123", "95c6d7e8-a9b0-1234-cdef-345678901234", "a6d7e8f9-b0c1-2345-defa-456789012345", "b7e8f9a0-c1d2-3456-efab-567890123456"], $i = (i) => new Promise((o) => {
  setTimeout(o, i);
}), Ug = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? Nt(t) : t)), RC = () => pC.version, Yg = (i) => new URL(i).hostname.replace("www.", ""), Pr = () => Yg(window.location.href) === "localhost", vC = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
function WC(i) {
  return i.at(-1) === "/" ? i.slice(1507 + -5 * -1665 + -9832, -1) : i;
}
function FC(i) {
  return "" + WC(i ?? "") + Jg;
}
function MC(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function Xt(i) {
  return (...o) => {
    Pr() && console[i](...o);
  };
}
const _r = { log: Xt("log"), warn: Xt("warn"), error: Xt("error"), info: Xt("info"), debug: Xt("debug") };
function LC({ analytics: i, crosshatch: o }) {
  if (!Pr())
    return o !== void 0 && i.shouldReportAnalytics(o) ? i : void 0;
}
function OC({ analytics: i, apiKey: o, redfin: t, crosshatch: e, bramble: A }) {
  const n = {};
  n.analytics = i, n.crosshatch = e;
  const r = LC(n), a = vg(t);
  return a.value = t, eA(() => {
    r && (_r.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r.init(o, A.getCustomerName(), a));
  }, [r, A, o, e, a]), r;
}
function JC({
  analytics: i,
  apiKey: o,
  children: t
}) {
  const { crosshatch: e, bramble: A } = zn(), { redfin: n } = MA(), r = OC({
    analytics: i,
    redfin: n,
    crosshatch: e,
    bramble: A,
    apiKey: o
  }), a = uA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ k(En.Provider, { value: a, children: t });
}
const Ar = {};
Ar.SIMD = "simd", Ar.NO_SIMD = "no-simd";
const Na = Ar, er = {};
er.Lower = "Lower", er.Higher = "Higher";
const Mt = er, tr = {};
tr.MOBILE = "MOBILE", tr.DESKTOP = "DESKTOP";
const Ra = tr, ln = Ue(void 0);
ln.displayName = "TransactionCountingContext";
function Pg() {
  const i = Qe(ln);
  if (i === void 0)
    throw new Error(`${ln.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function UC({ children: i, value: o }) {
  const { crosshatch: t } = zn(), { transactionCounting: e } = Pg(), A = t?.isValid && e?.isTransactionTokenValid ? Mt.Higher : Mt.Lower, n = uA(
    () => ({
      ...o,
      redfin: A
    }),
    [o, A]
  );
  return /* @__PURE__ */ k(Vn.Provider, { value: n, children: i });
}
let M;
const Oe = new Array(-4235 + 27 * -277 + 11842).fill(void 0);
Oe.push(void 0, null, !0, !1);
function or(i) {
  return Oe[i];
}
let De = 4169 + -1388 * 3 + -5, to = null;
function Yo() {
  return (to === null || to.byteLength === 5939 + -1 * 5939) && (to = new Uint8Array(M.memory.buffer)), to;
}
const Po = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, YC = typeof Po.encodeInto == "function" ? function(i, o) {
  return Po.encodeInto(i, o);
} : function(i, o) {
  const t = Po.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function xo(i, o, t) {
  if (t === void 0) {
    const a = Po.encode(i), g = o(a.length, -5064 + -894 * -6 + -299) >>> -4 * 2179 + 1 * -6938 + 15654;
    return Yo().subarray(g, g + a.length).set(a), De = a.length, g;
  }
  let e = i.length, A = o(e, -1007 * 3 + -3 * -3151 + 6431 * -1) >>> 0;
  const n = Yo();
  let r = 0;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > 1 * 8509 + -7273 * -1 + -15655) break;
    n[A + r] = a;
  }
  if (r !== e) {
    r !== -5482 + -5482 * -1 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-1625 + -814 * -2), 1) >>> 278 + 5227 * 1 + 1835 * -3;
    const a = Yo().subarray(A + r, A + e), g = YC(i, a);
    r += g.written, A = t(A, e, r, 3118 * -1 + 8996 + -5877) >>> 0;
  }
  return De = r, A;
}
function _g(i) {
  return i == null;
}
let oo = null;
function me() {
  return (oo === null || oo.byteLength === 9986 + 4 * -452 + -8178) && (oo = new Int32Array(M.memory.buffer)), oo;
}
let so = Oe.length;
function PC(i) {
  i < -10327 + -1 * -10459 || (Oe[i] = so, so = i);
}
function Tg(i) {
  const o = or(i);
  return PC(i), o;
}
const nr = {};
nr.ignoreBOM = !0, nr.fatal = !0;
const Hg = typeof TextDecoder < "u" ? new TextDecoder("utf-8", nr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Hg.decode();
function un(i, o) {
  return i = i >>> 1 * 4499 + 661 * -8 + 3 * 263, Hg.decode(Yo().subarray(i, i + o));
}
function ir(i) {
  so === Oe.length && Oe.push(Oe.length + (11390 + 7 * -1627));
  const o = so;
  return so = Oe[o], Oe[o] = i, o;
}
let no = null;
function Kg() {
  return (no === null || no.byteLength === -4 * -1283 + 3 * 1193 + -8711) && (no = new Uint32Array(M.memory.buffer)), no;
}
function va(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = Kg();
  for (let A = 1437 * 5 + -1049 + -6136; A < i.length; A++)
    e[t / 4 + A] = ir(i[A]);
  return De = i.length, t;
}
function Wa(i, o) {
  i = i >>> -7264 + -4243 * -2 + -1222;
  const t = Kg(), e = t.subarray(i / (3251 + -3247 * 1), i / (-9968 + -1 * 387 + -9 * -1151) + o), A = [];
  for (let n = 12764 + -12764 * 1; n < e.length; n++)
    A.push(Tg(e[n]));
  return A;
}
function _C(i, o) {
  const t = xo(i, M.__wbindgen_malloc, M.__wbindgen_realloc), e = De, A = xo(o, M.__wbindgen_malloc, M.__wbindgen_realloc), n = De, r = M.is_mobile_supported(t, e, A, n);
  return Tr.__wrap(r);
}
const rr = {};
rr.register = () => {
}, rr.unregister = () => {
};
const Fa = typeof FinalizationRegistry > "u" ? rr : new FinalizationRegistry((i) => M.__wbg_licensevalidationresult_free(i >>> -675 * -10 + -7542 + 792));
class Tr {
  static __wrap(o) {
    o = o >>> 0;
    const t = Object.create(Tr.prototype);
    return t.__wbg_ptr = o, Fa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -9808 + -6329 * -1 + 3479, Fa.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    M.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, A, n) {
    var r = _g(t) ? 0 : xo(t, M.__wbindgen_malloc, M.__wbindgen_realloc), a = De;
    const g = va(e, M.__wbindgen_malloc), c = De, I = va(A, M.__wbindgen_malloc), s = De, C = xo(n, M.__wbindgen_malloc, M.__wbindgen_realloc), Q = De, E = M.licensevalidationresult_new(o, r, a, g, c, I, s, C, Q);
    return this.__wbg_ptr = E >>> -5 * 1619 + 1844 * 5 + -1125, this;
  }
  get is_valid() {
    return M.licensevalidationresult_is_valid(this.__wbg_ptr) !== 7653 * -1 + 2422 + -5231 * -1;
  }
  get features_json() {
    try {
      const e = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = me()[e / (4 * -1240 + -538 * 6 + 1024 * 8) + (4183 + 1347 * 3 + -32 * 257)], t = me()[e / (-7942 + 313 * 11 + 4503) + (-1796 + -8993 * -1 + -7196)];
      let A;
      return o !== 327 * 27 + 1682 + -23 * 457 && (A = un(o, t).slice(), M.__wbindgen_free(o, t * 1, -525 + -263 * 3 + 1315)), A;
    } finally {
      M.__wbindgen_add_to_stack_pointer(8397 + -493 * 17);
    }
  }
  get errors() {
    try {
      const A = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_errors(A, this.__wbg_ptr);
      var o = me()[A / 4 + (-1 * -6407 + -7905 + 1498)], t = me()[A / (-7223 + -2 * 4633 + 16493) + (-1118 + 3589 * -1 + 4708)], e = Wa(o, t).slice();
      return M.__wbindgen_free(o, t * (3011 + 2609 * 3 + 10834 * -1), -2099 * -1 + 9326 + -11421), e;
    } finally {
      M.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const A = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var o = me()[A / (4497 * -1 + -1 * -6673 + -2 * 1086) + (-1 * 7492 + -277 * 15 + 1 * 11647)], t = me()[A / 4 + 1], e = Wa(o, t).slice();
      return M.__wbindgen_free(o, t * (2234 + -1 * 2230), -6096 + 7737 * 1 + 1637 * -1), e;
    } finally {
      M.__wbindgen_add_to_stack_pointer(-2700 + 4 * 1137 + 4 * -458);
    }
  }
  get customer() {
    let o, t;
    try {
      const n = M.__wbindgen_add_to_stack_pointer(-16);
      M.licensevalidationresult_customer(n, this.__wbg_ptr);
      var e = me()[n / (1903 * 1 + -6 * 1339 + 2045 * 3) + (3083 * 1 + 1 * -6211 + 3128)], A = me()[n / (1 * 6829 + 3216 + -10041) + (-1 * 2719 + -6966 + 9686)];
      return o = e, t = A, un(e, A);
    } finally {
      M.__wbindgen_add_to_stack_pointer(-8647 * 1 + -1 * 1381 + 10044), M.__wbindgen_free(o, t, 1);
    }
  }
}
async function TC(i, o) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, o);
    } catch (e) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, o);
  } else {
    const t = await WebAssembly.instantiate(i, o);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = i, e;
    } else return t;
  }
}
function HC() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = or(t), A = typeof e == "string" ? e : void 0;
    var n = _g(A) ? -4816 + 4 * 1204 : xo(A, M.__wbindgen_malloc, M.__wbindgen_realloc), r = De;
    me()[o / (-839 * 4 + -279 * 3 + 1 * 4197) + (10849 + 1 * -10848)] = r, me()[o / (-5258 + -2 * -2631) + (3 * 3217 + -7763 + -1888)] = n;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    Tg(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = un(o, t);
    return ir(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return ir(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return or(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(un(o, t));
  }, i;
}
function KC(i, o) {
  return M = i.exports, jg.__wbindgen_wasm_module = o, oo = null, no = null, to = null, M;
}
async function jg(i) {
  if (M !== void 0) return M;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYhACAIRQRAIAQoArQGIQIgDSEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgA2ogBEGwBmpBMBC+AhoLAn8gBCgCyAMiB0EETQRAIARBqANqIQIgBwwBCyAEKAKoAyECIAQoAqQDCyEBIARBIGohDQJAAkACQAJAAkACQAJAAkACQAJAIAQoAkAiA0EFTwRAQQIhACACIAEgBCgCICAEKAIcEKgBQf8BcUECSQ0WIAQoAhwiAkUNAiAEKAIgIQEMAQtBAiEAIAIgASANIAMQqAFB/wFxQQJJDRUgDSEBIAMiAkUNAgsgAkEGdCACQQN0IAFqQQhrKQMAeadrQQdqQQN2IApGDQIMFAsgCg0TIARBoAJqIQkMAgsgCkUNAwwSCyAEQaACaiEJIANBBUkNAQsgBCgCHEUiAQ0BIAQoAiAtAABBAXFFIgANDiADQQVJDQMgAQ0IIAANCyABDQkgBCgCICECDAQLIAMNAQsgBEG8BmpCADcCACAEQQE2ArQGIARBiO/AADYCsAYgBEGMrMIANgK4BiAEQbAGakGQ78AAEOsBAAsgBC0AIEEBcUUNCwsgDSECIAQtACBBAXFFDQcLIAQgAikDACIkQgGDNwN4ICSnQQFxRQ0FICRCAX0hJUICICR9ISZBASECA0AgJSAlfiIlQgF8ICZ+ISYgAkEgSSACQQF0IQINAAsgA0EFTwRAIAQoAhwhAwsgB0EETQR/IARBqANqBSAEKAKkAyEHIAQoAqgDCyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiIAIAEgASAHQQN0ahBDIARB0ANqIABBMBC+AhogBCgC+AMiAiEAIAJBBU8EfyAEKALUAwUgAAsgA0sEQCAEQbAGaiIBIARB0ANqIgIgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogARCPAiACEI8CIAIgAEEwEL4CGiAEKAL4AyECCyACQQVPBH8gBCgC1AMFIAILIANJBEAgBEHQA2ogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRlCACAmfSEkIAJBATYCACAEQoGAgIAgNwKEBiAEIAI2AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgEgBEGABmoQMyAEQbAGaiIAIAFBMBC+AhogAhAiIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGABGoiASAEQbAGaiIAQTAQvgIaIARB0AVqIAFBMBC+AhoCQCADQQd0IgtFBEAgACABQTAQvgIaIARBgAZqIAAQrAEMAQsgBEHQBWohAiAEKALQBUECRgRAIAQoAtQFIQILIAIoAigiAUEFTwRAIAIoAgQhAQsgBEEANgKwBiAEQQA2AtgGIARBsAZqIgIgASALQQZ2IgBBAXJqEK0BIARB+ABqIgEgAkEwEL4CGiABIAAQSSAEQdAFaiECIAECfyAEKALQBUECRgRAIAQoAtQFIQILIAJBCGogAigCKCIAQQRNDQAaIAIoAgQhACACKAIICyICIAIgAEEDdGoQQyAEQYAGaiABQTAQvgIaCyAEQbAGaiIAIARBgAZqQTAQvgIaIABBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEH4AGogBEGwBmpBMBC+AhoCQCALRQ0AIAQoAtAFQQJGDQAgBEHQBWoQjwILIARBsAZqIgIgBEH4AGoiASAEQRhqEAggBEGABmoiACAEQeAGakEwEL4CGiACEI8CIAEQjwIgBEGABGogAEEwEL4CGiAEKAKoBCIAQQVPBH8gBCgChAQFIAALIANJBEAgBEGABGogAxDQAQtBuLHCAC0AABpBBBAKIgJFDRkgAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiIAIARBsAZqIgFBMBC+AhogACADENABQbixwgAtAAAaQYAGEAoiD0UNGSAEQhA3AugEIAQgDzYC5AQgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyABIABBMBC+AhogAUEEciEKIARBuAZqIQggBEHYBmohBiAEKAK4BiEHA0AgCCEBIAQoAtgGIgIhACACQQVJIgxFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgBiEAIAxFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQfAEaiIAIARBsAZqIgFBMBC+AhogACAEQbAEaiAEQYAEaiAEQRhqICQgAxASIAEgAEEwEL4CGiAPIAFBMBC+AiAEQQE2AuwEIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgASAAQTAQvgIaIAFBBHIhCiAEQbgGaiEIIARB2AZqIQYgBCgCuAYhBwNAIAghASAEKALYBiICIQAgAkEFSSIMRQRAIAchASAEKAK0BiEACwJAIABFDQAgAEEDdCABakEIaykDAEIAUg0AIAYhACAMRQRAIAQoArQGIQIgCiEACyACRQ0BIAAgAkEBazYCAAwBCwsgBEGgBWoiACAEQbAGaiIBQTAQvgIaIAAgBEHQA2ogBEGABGogBEEYaiAkIAMQEiABIABBMBC+AhpBMGogAUEwEL4CGiAEQQI2AuwEIAFBBHIhDiAEQbgGaiELIARB2AZqIQxBAiEGQQIhCANAIARBAjYCiAYgBEIENwKABiAEQQA2AnggBEEANgKgASAEQfgAaiIAIARBgAZqEDMgBEGwBmogAEEwEL4CGiAIIgpBAWohCCAEKAK4BiEHA0AgCyEBIAQoAtgGIgIhACACQQVJIhBFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgDCEAIBBFBEAgBCgCtAYhAiAOIQALIAJFDQEgACACQQFrNgIADAELCyAEQfgAaiICIARBsAZqIgBBMBC+AhogBiAKQQFrIgFNDQggAiAPIAFBMGxqIA9BMGogBEEYaiAkIAMQEiAAIAJBMBC+AhogBCgC6AQgBkcEfyAGBSAEQeQEaiEKIwBBIGsiECQAAkACQCAGQQFqIgFFDQBBBCAKKAIEIgdBAXQiACABIAAgAUsbIgAgAEEETRsiAkEwbCEBIAJBq9WqFUlBA3QhAAJAIAdFBEAgEEEANgIYDAELIBBBCDYCGCAQIAdBMGw2AhwgECAKKAIANgIUCyAQQQhqIAAgASAQQRRqEHcgECgCDCEAIBAoAghFBEAgCiACNgIEIAogADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIBBBIGokACAEKALkBCEPIAQoAuwECyIQQTBsIA9qIARBsAZqQTAQvgIaIAQgEEEBaiIGNgLsBCAIQRBHDQALDAgLIBdFDQ0MCwtBuLHCAC0AABpBARAKIgBFDRcgAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQZTYwAAQLiECIBJFDRYgFhAiDBYLIACtQv8Bg0IIhiAGIBFqQQFrrUIghoRCAoQhJQwUC0EAQQBB0PjAABC3AQALQQBBAEGM98AAELcBAAsgBEEANgKwBiMAQRBrIgAkACAAQYj2wAA2AgwgACAEQfgAajYCCEEBIABBCGpB+PXAACAAQQxqQfj1wAAgBEGwBmpB/PbAABBPAAtBoPnAAEEkQcT5wAAQ3gEACyABIAZBkPnAABC3AQALAkACQAJAAkAgBgRAIA8oAigiAEEETQR/IA9BCGoFIA8oAgQhACAPKAIICyEBIARBADYCsAYgBEEANgLYBiAEQbAGaiICIAEgASAAQQN0ahBDIARB0AVqIgAgAkEwEL4CGiAAIAMQ0AEgBEECNgKIBiAEQgQ3AoAGIARBADYCeCAEQQA2AqABIARB+ABqIgAgBEGABmoQMyACIABBMBC+AhogAkEEciEMIARBuAZqIQogBEHYBmohCCAEKAK4BiEHA0AgCiEBIAQoAtgGIgIhACACQQVJIgtFBEAgByEBIAQoArQGIQALAkAgAEUNACAAQQN0IAFqQQhrKQMAQgBSDQAgCCEAIAtFBEAgBCgCtAYhAiAMIQALIAJFDQEgACACQQFrNgIADAELCyAEQYAGaiIAIARBsAZqQTAQvgIaIAAgAxDQAQJAAn8gBEHwAGooAgAiAEEFTwRAIARBzABqIgcoAgAiAUUNAiABQQFrIQIgBygCACIIIQcgBEHQAGooAgAMAQsgAEUNASAAQQFrIQIgBEHMAGooAgAhCCAAIgEhByAEQdAAagsgAiAHTw0CIAggACAAQQRLIgcbIQsgBEHQAGoiACgCACAAIAcbIQggAkEDdGohAANAIAIhByAAKQMAISZBfCECA0AgAkF8RiABIAtGcUUEQCAEQYAGaiIMIARB0AVqIgogCiAEQRhqIgAgJCADEBIgCiAMIAwgACAkIAMQEiAMIAogCiAAICQgAxASIAogDCAMIAAgJCADEBILIAYgJkI8iKciAE0NBiAEQYAGaiIMIARB0AVqIgogDyAAQTBsaiAEQRhqICQgAxASIARBsAZqIgAgCkEwEL4CGiAKIAxBMBC+AhogDCAAQTAQvgIaICZCBIYhJiACQQRqIgJBPEkNAAsgB0UNASALIAdBAWsiAk0NBCAIIAJBA3RqIQAgByEBDAALAAsgBEGABmoiACAEQdAFaiAEQbAEaiAEQRhqICQgAxASIABBBHIhCCAEQYgGaiEBIARBqAZqIQcgBCgCiAYhBgNAIAEhAyAEKAKoBiICIQAgAkEFSSIKRQRAIAYhAyAEKAKEBiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAchACAKRQRAIAQoAoQGIQIgCCEACyACRQ0BIAAgAkEBazYCAAwBCwsgAkEFTwR/IAQoAoQGIQIgBgUgAQsgAiAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQYAGaiAEQRhqEHUgASECIAQoAqgGIgBBBU8EQCAEKAKIBiECIAQoAoQGIQALIAIgACAEKAJAIgZBBU8EfyAEKAIcIQYgBCgCIAUgDQsgBhCoAUH/AXFBAk8NBCAEQbAGaiICIARBgAZqIgMgBEEYahAIIARB+ABqIgAgBEHgBmpBMBC+AhogAhCPAiADEI8CIAMgAEEwEL4CGgwEC0EAQQBB4PjAABC3AQALIAIgB0Hw+MAAELcBAAsgAiALQfD4wAAQtwEACyAAIAZBgPnAABC3AQALIAQoAogGIQoDQCABIQMgBCgCqAYiAiEAIAJBBUkiBkUEQCAKIQMgBCgChAYhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAHIQAgBkUEQCAEKAKEBiECIAghAAsgAkUNASAAIAJBAWs2AgAMAQsLIAkgBEGABmpBMBC+AhogEEEBaiEAIARB0AVqEI8CIA8hAgNAIAIQjwIgAkEwaiECIABBAWsiAA0ACyAEKALoBARAIA8QIgsgBEGwBGoQjwIgBEGABGoQjwIgBEHQA2oQjwIMAQtBuLHCAC0AABpBBBAKIgJFDQ8gAkEBNgIAIARCgYCAgCA3AoQGIAQgAjYCgAYgBEEANgJ4IARBADYCoAEgBEH4AGoiASAEQYAGahAzIARBsAZqIgAgAUEwEL4CGiACECIgAEEEciEKIARBuAZqIQcgBEHYBmohBiAEKAK4BiEIA0AgByEDIAQoAtgGIgIhACACQQVJIgFFBEAgCCEDIAQoArQGIQALAkAgAEUNACAAQQN0IANqQQhrKQMAQgBSDQAgBiEAIAFFBEAgBCgCtAYhAiAKIQALIAJFDQEgACACQQFrNgIADAELCyAEQbAEaiAEQbAGakEwEL4CGiAEQfAAaigCACIAQQVPBH8gBEHMAGooAgAFIAALBEAgBEGwBmoiACAEQaADaiAEQRhqEAggBEHwBGogBEHgBmoiBkEwEL4CGiAAEI8CIAQoAnAiAEEFSQR/IARB0ABqBSAEQcwAaigCACEAIAQoAlALIQIgBEEANgKwBiAEQQA2AtgGIARBsAZqIgEgAiACIABBA3RqEEMgBEGgBWogAUEwEL4CGiAEQfgEaiEHIARBqAVqIQEDQCABIQAgBCgCyAUiAyECIANBBU8EQCAEKAKkBSECIAQoAqgFIQALAkAgAkUNACAALQAAQQFxRQ0AIANBBU8EfyAEKAKkBSEDIAQoAqgFBSABCyADIAQoAtgEIgBBBE0EfyAEQbgEagUgBCgCtAQhACAEKAK4BAsiBiAAEKgBQf8BcQRAIAchAiAEKAKYBSIAQQVPBEAgBCgC+AQhAiAEKAL0BCEACyAEQQA2ArAGIARBADYC2AYgBEGwBmoiAyACIAIgAEEDdGoQQyAEQdAFaiADQTAQvgIaIARBuAZqIQMgBEG4BGohCCAEQeAGaiEMA0AgASECIAQoAsgFIgBBBU8EQCAEKAKoBSECIAQoAqQFIQALIAIgACAEKALYBCIGQQVPBH8gBCgCtAQhBiAEKAK4BAUgCAsgBhCoAUH/AXFBAUcEQCAJIARB0AVqQTAQvgIaIARBoAVqEI8CIARB8ARqEI8CIARBsARqEI8CDAYLIARBoAVqEBkgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgYgAiAAIAIgABBwIARBsAZqIgAgBiAEQRhqEAggBEGABmoiAiAMQTAQvgIaIAAQjwIgBhCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiABIQAgBCgCyAUiAkEFTwRAIAQoAqQFIQIgBCgCqAUhAAsgAkUNACAALQAAQQFxRQ0AIARBsAZqIARB0AVqQTAQvgIaIAMhAiAEKALYBiIAQQVPBEAgBCgCuAYhAiAEKAK0BiEACyAEQfgAaiIKIAIgACAEKAKYBSIGQQVPBH8gBCgC9AQhBiAEKAL4BAUgBwsgBhBwIARBsAZqIgAQjwIgACAKIARBGGoQCCAEQdAFaiAMQTAQvgIaIAAQjwIgChCPAgwACwALIAkgBEHwBGpBMBC+AhogBEGgBWoQjwIgBEGwBGoQjwIMAwsgByECIAQoApgFIgBBBU8EQCAEKAL4BCECIAQoAvQEIQALIARB+ABqIgMgAiAAIAIgABBwIARBsAZqIgAgAyAEQRhqEAggBEGABmoiAiAGQTAQvgIaIAAQjwIgAxCPAiAEQfAEaiIAEI8CIAAgAkEwEL4CGiAEQaAFahAZDAALAAsgCSAEQbAEakEwEL4CGgsgBEGwBmogBEHMAWogCUEwEL4CQTAQvgIaAn8CQAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMAwsgDSEAIAJFDQIMAQsgBCgCICEACyACQQZ0IAJBA3QgAGpBCGspAwB5p2tBB2pBA3YMAQtBAAshCwJAIAQCfwJ/AkACQCAEKALYBiICQQVPBEAgBCgCtAZFDQEgBCgCtAYiAEEBayEGQQAgAEUNBBogBCgCuAYMAwsgAg0BC0G4scIALQAAGkEBIQJBARAKIgNFDRIgA0EAOgAAQQEhCAwDCyACQQFrIQYgAiEAIARBuAZqCyEBIABBBnQgASAGQQN0aikDAHmna0EHakEDdgsQ4AEgBEEANgKgAiAEIAQoAgQ2ApwCIAQgBCgCACIDNgKYAiACQQRNBH8gBEG4BmoFIAQoArQGIQIgBCgCuAYLIQEgAiAGTwRAIAEgBkEDdGohB0EAIQIDQAJAAkACQAJAIAEgB0YEQCAEKALYBiIAQQRNBH8gBEG4BmoFIAQoArQGIQAgBCgCuAYLIAAgBk0NAyAGQQN0aikDACIlUA0BA0AgBCgCnAIgAkYEQCAEQZgCaiACEIoBIAQoAqACIQILIAQoApgCIgMgAmogJTwAACAEIAJBAWoiAjYCoAIgJUKAAlQgJUIIiCElRQ0ACwwCCyABKQMAISVBCCEAA0AgBCgCnAIgAkYEfyAEQZgCaiACEIoBIAQoApgCIQMgBCgCoAIFIAILIANqICU8AAAgBCAEKAKgAkEBaiICNgKgAiAlQgiIISUgAEEBayIADQALDAMLIAQoApgCIQMLIAQoApwCIQggAkECSQ0EIAJBAXYhDCACQQFrIQBBACEBA0AgASADaiIHLQAAIQYgByAAIANqIgotAAA6AAAgCiAGOgAAIABBAWshACAMIAFBAWoiAUcNAAsMBAsgBiAAQdjuwAAQtwEACyABQQhqIQEMAAsACyAGIAJByO7AABC4AQALAn8CQAJAAkAgAiALSyIKBH9BEgUgBEGYAmogCxDMASAEKAKgAiIHIAsgAmsiAUkNASAHIAFrIgAgAkcNAiABIAQoApgCIgFqIAMgAhC+AhogBCgCnAIhBkEUCyEAIAgEQCADECILIARBsAZqEI8CIAoNBAJAAkAgBCgCQCICQQVPBEAgBCgCHCICDQEMBQsgAkUNBAwBCyAEKAIgIQ0LIAJBBnQgAkEDdCANakEIaykDAHmna0EHakEDdgwDCyABIAdB9IjBABC5AQALIAAgAkGEicEAELsBAAtBAAshC0ECIQAgCyAXQR9qTwRAIAdFDQYgAS0AACIAQQAgAGtywEEAThCXAiECIAdBAUYNCyALQRRrIQwgAS0AASIAQf4Bc0EBaiAAcsBBAE4QlwIgAnEQlwIhDSALQRRJDQcgByALSQ0IIBdBFGohCAJAQRQgASALaiABIAxqIgprIgAgAEEUTxtFBEBBASEADAELQQEhAEEAIQIDQCACIBRqLQAAIAIgCmotAABzIgNBACADa3LAQQBOEJcCIABxIQAgAkEBaiICQRRHDQALCyAAEJcCIA1xEJcCIQ0gCyAIayIIIAxLDQkgByAMSQ0KAkAgCiABIAhqayIAIBcgACAXSRtFBEBBASEPDAELQQAgF2shAiARIQBBASEPA0AgAC0AACACIApqLQAAcyIDQQAgA2tywEEAThCXAiAPcSEPIABBAWohACACQQFqIgINAAsLIA8QlwIgDXEQlwIhAiAIQQFrIgAgB08NDEEAIQ8gACABai0AACIAQQAgAGtywEEAThCXAiACcRCXAiEDAkAgCEEDRg0AIAEgB2ohCCAXIAtrQRdqIQBBAiEHIAEhAgNAAkAgD0EBcQRAIAIgCEcNAQwDCyAIIAJrIAdNDQIgAiAHaiECCyACLQAAIQ1BASEPIAJBAWohAkEAIQcgDUEBaiANQX9zcsBBAE4QlwIgA3EQlwIhAyAAQQFqIgANAAsLQRRBAiADQf8BcUEBRhshAAsgBkUNACABECILIARBoANqEI8CIBdFDQELIBEQIgsgAEEURw0AQQAMAQtBuLHCAC0AABpBPBAKIgJFDQogAiAHNgIMIAIgBjYCCCACIAE2AgQgAiAANgIAIAJBEGogBEH0AmpBLBC+AhogBEIENwK4BiAEQZjlwAA2ArQGIAQgAjYCsAYgBEGwBmpB9NfAABAuQYTYwAAQWgshAiAEKALsAgRAIAQoAugCECILIBIEQCAWECILIARBGGoQjwIgBEHIAGoQjwIMCgtBAEEAQYCKwQAQtwEACyAMIAtBoIrBABC6AQALIAsgB0GgisEAELgBAAsgCCAMQbCKwQAQugEACyAMIAdBsIrBABC4AQALQQFBAUGQisEAELcBAAsgACAHQcCKwQAQtwEACyAEKAK0BgRAIBYQIgtBuLHCAC0AABpBCBAKIgBFDQEgACAlQiCIPgIEIAAgJT4CACAEQgQ3ArgGIARByOXAADYCtAYgBCAANgKwBiAEQbAGakHU18AAEC5B5NfAABBaIQILIARBGGoQjwIgBEHIAGoQjwIMAQsACyAEQZAHaiQAIAINCiATQYDnwABBCBBzIgBFDQUgAEHU4cAAQQMQcyIARQ0GIABB1+HAAEEDEHMiAEUNByAALQAAQQVHDQggAEEMaigCAA0JQbixwgAtAAAaQQEQCiIARQ0RIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGI4sAAEC4hAgwKCyAFIAE2AsgBIAUgAiADIAMgAUEBaiIAIAAgA0sbELYBQbixwgAtAAAaIAUoAgQhAiAFKAIAIQBBFBAKIgENAQwQCyAFKAJkIQEMAQsgASAANgIMIAFBFjYCACABIAI2AhAgBUHgAmoQtAELIAUoAtABRQ0AIAUoAswBECILAkACQAJAAkAgASgCAA4CAAEDCyABQQhqKAIARQ0CIAEoAgQhAwwBCyABLQAEQQNHDQEgAUEIaigCACIDKAIAIgIgAygCBCIAKAIAEQQAIAAoAgRFDQAgAhAiCyADECILIAEQIkG4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpB/OfAABAuIQIMCQtBuLHCAC0AABpBARAKIgBFDQsgAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAQLQbixwgAtAAAaQQEQCiIARQ0KIABBBToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY4sAAEC4hAgwDC0G4scIALQAAGkEBEAoiAEUNCSAAQQU6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBmOLAABAuIQIMAgtBuLHCAC0AABpBARAKIgBFDQggAEEFOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQZjiwAAQLiECDAELIAVByABqIABBBGoQ5wECQAJAAkAgBUEwakHw6cAAQQcQcyIBBEAgAS0AAEEDRiIARQ0BIAFBDGooAgBBA0YEQCABKAIEQQAgABtB9+nAAEEDELwCRQ0DC0G4scIALQAAGkEBEAoiAEUNCyAAQQI6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqOrAABAuIQIMAwtBuLHCAC0AABpBARAKIgBFDQogAEEBOgAAIAVCBDcCyAEgBUGw5cAANgLEASAFIAA2AsABIAVBwAFqQbjqwAAQLiECDAILQbixwgAtAAAaQQEQCiIARQ0JIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakG46sAAEC4hAgwBCwJAAkACQAJAAkAgBUEwakGA58AAQQgQcyIABEAgAEGT3MAAQQUQcyINRQ0BIA0tAABBBEYiBkUNBCAFQfgAakEAQcEAELsCIQEgBUL+uevF6Y6VmRA3A2ggBUKBxpS6lvHq5m83A2AgBUIANwNwIBVBP0sNAiABIBkgFRC+AhogFSEDDAMLQbixwgAtAAAaQQEQCiIARQ0NIABBAToAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGo3MAAEC4hAgwFC0G4scIALQAAGkEBEAoiAEUNDCAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMBAsgBSAVQQZ2IgCtNwNwIAVB4ABqIBkgABANIAEgGSAVQUBxaiAVQT9xIgMQvgIaCyAFIAM6ALgBIAVBwAFqIAVB4ABqQeAAEL4CGiAFQagCakIANwMAIAVCADcDoAIgBSkD0AEgBUHYAWoiAiAFQZgCai0AACIDaiIBQYABOgAAIAUgBSkDyAE3A7gCIAUgBSkDwAE3A7ACIANBP3MiAARAIAFBAWpBACAAELsCGgtCCYYgA61CA4aEISQCQCADQThxQThHBEAgBUGQAmogJDcDACAFQbACaiACQQEQDQwBCyAFQbACaiIBIAJBARANIAVB4AJqIgBBAEE4ELsCGiAFICQ3AJgDIAEgAEEBEA0LIAVBADoAmAIgBUHUAmpCkICAgMAANwIAIAVBADYCzAIgBSAFQbACaiIANgLIAiAFIAVBoAJqNgLQAiAFQeACaiAFQcgCaiAAIAVBwAJqEKkBAkACQCAFKAKAAyIAIAUoAvwCIgJNDQAgACACayEAIAUoAugCIgcgAiAFKALwAiIIbGohASAFKAL0AiACQQJ0aiEDIAhBBEYhAgNAIAdFDQEgAkUNAiABIAMoAgA2AAAgASAIaiEBIANBBGohAyAAQQFrIgANAAsLIAVB0AJqIgAgBUGoAmopAwA3AwAgBSAFKQOgAjcDyAJBuLHCAC0AABpBEBAKIgJFDQsgAiAFKQPIAjcAACACQQhqIAApAwA3AABBACEBQbixwgAtAAAaQQsQCiIIRQ0LIA1BBGpBACAGGyEGIAggAikAADcAACAIQQdqIAJBB2ooAAA2AAAgAhAiIAVB4ABqQRAQzAEgBSgCaCEMIAUoAmAhCkEAIQMCQAJAAkACQANAIANBBGoiACAMSw0BIAMgCmoiDSABIAhqIgItAAAiB0ECdkHQ2cAAai0AADoAACANQQNqIAJBAmotAAAiA0E/cUHQ2cAAai0AADoAACANQQJqIAJBAWotAAAiAkECdCADQQZ2ckE/cUHQ2cAAai0AADoAACANQQFqIAdBBHQgAkEEdnJBP3FB0NnAAGotAAA6AAAgAUEGSSABQQNqIQEgACEDDQALIAxBDUkNAyAKIAgtAAkiAEECdkHQ2cAAai0AADoADCAMQQ1GDQIgCiAAQQR0IAgtAAoiAEEEdnJBP3FB0NnAAGotAAA6AA0gDEEORwRAIAogAEECdEE8cUHQ2cAAai0AADoADiAMQQ9rIgBFDQIgCkE9OgAPIAxBB2siAEEAIAAgDE0bIQcgCkEDakF8cSAKayECIAUoAmQhGkEAIQEDQAJAAkACQCABIApqLQAAIg3AIgNBAE4EQCACIAFrQQNxDQEgASAHTw0CA0AgASAKaiIAQQRqKAIAIAAoAgByQYCBgoR4cQ0DIAFBCGoiASAHSQ0ACwwCC0KAgICAgCAhJkKAgICAECEkAkACQAJAAn4CQAJAAkACQAJAAkACQAJAIA1BrK3AAGotAABBAmsOAwADAQsLIAFBAWoiAyAMSQ0BQgAhJgwJC0IAISYgAUEBaiIAIAxJDQIMCAsgAyAKaiwAAEG/f0oNCAwGC0IAISYgAUEBaiIAIAxPDQYgACAKaiwAACEAAkACQCANQeABRwRAIA1B7QFGDQEgA0EfakH/AXFBDEkNAiADQX5xQW5HDQQgAEFASA0FDAQLIABBYHFBoH9GDQQMAwsgAEGff0oNAgwDCyAAQUBIDQIMAQsgACAKaiwAACEAAkACQAJAAkAgDUHwAWsOBQEAAAACAAsgA0EPakH/AXFBAksgAEFATnINAwwCCyAAQfAAakH/AXFBME8NAgwBCyAAQY9/Sg0BCyABQQJqIgAgDE8NBSAAIApqLAAAQb9/Sg0CQgAhJCABQQNqIgMgDE8NBiADIApqLAAAQUBIDQRCgICAgIDgAAwDC0KAgICAgCAMAgtCACEkIAFBAmoiAyAMTw0EIAMgCmosAABBv39MDQILQoCAgICAwAALISZCgICAgBAhJAwCCyADQQFqIQEMBAtCACEkCyAFIAw2AsgBIAUgGjYCxAEgBSAKNgLAASAFICYgAa2EICSENwLMAUH/gsAAQQwgBUHAAWpB2IDAAEGMg8AAEK4BAAsgAUEBaiEBDAELIAEgDE8NAANAIAEgCmosAABBAEgNASAMIAFBAWoiAUcNAAsMCQsgASAMSQ0ACwwHC0EOIAxB3JHAABC3AQALIAAgDEHskcAAELgBAAsgACAAQfiLwAAQtwEAC0ENIAxBzJHAABC3AQALQQwgDEG8kcAAELcBAAsgCEEEQZTZwAAQuwEAC0G4scIALQAAGkEBEAoiAEUNCSAAQQE6AAAgBUIENwLIASAFQbDlwAA2AsQBIAUgADYCwAEgBUHAAWpBqNzAABAuIQIMAQsgBSAMNgLoAiAFIBo2AuQCIAUgCjYC4AIgCBAiIAUoAugCIQAgBUKAgICAEDcCyAICQCAAQQFNBEAgAEEBRg0BDAkLIAUoAuACLAABQb9/TA0ICyAFQewAaiAFQcwCajYCACAFQQE2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAVB2AFqIgFBkdzAADYCACAFQZDcwAA2AtQBIAAQVyAAEJEBIAUgBSgC6AIiAEECayICNgLIAiACBEAgAEECSQ0FIAUoAuACIAJqLAAAQb9/TA0FCyAFQQI2AmggBUEANgJgIAUgBUHIAmo2AmQgBUHAAWoiACAFQeACaiAFQeAAahB+IAFBk9zAADYCACAFQZHcwAA2AtQBIAAQVyAAEJEBIAUoAuACIQ0gBSgC5AIhBwJAIAYoAggiAARAIAUoAugCIQMgBigCACIBIABBGGxqIQIDQAJAIAEtAAAiAEEDRw0AIAFBDGooAgAgA0cNACABQQRqKAIAQQAgAEEDRhsgDSADELwCRQ0DCyABQRhqIgEgAkcNAAsLQbixwgAtAAAaQQEQCiIARQ0JIABBAzoAACAFQgQ3AsgBIAVBsOXAADYCxAEgBSAANgLAASAFQcABakGY3MAAEC4hAiAHRQ0BIA0QIgwBCyAHBEAgDRAiCyAFQcABaiESIAVBMGoiByECIwBBgAFrIgkkABADIggQBCIsRAAAAAAAAODDZiEAAkACQAJAAn8CQAJAAkACQAJAAkACQAJ/AkACQAJAAkBC////////////AAJ+ICyZRAAAAAAAAOBDYwRAICywDAELQoCAgICAgICAgH8LQoCAgICAgICAgH8gABsgLET////////fQ2QbQgAgLCAsYRsiJCAkQugHfyIkQugHfn0iJ0I/hyIoICR8IiQgJEKAowV/IiRCgKMFfn0iJUI/hyImICR8IiRCxY3U/wd9QoCAgIBwVA0AICSnIgBBqPUraiIBIABBu/IrakgNACABIAFBsfUIbSIBQbH1CGxrIg1BH3VBsfUIcSANaiIAQe0CbiEDAkACQCAAQbz3CE0EQAJ/IAAgA0HtAmxrIgYgA0Hbk8AAai0AACIATwRAIAYgAGsMAQsgA0EBayIDQZADSw0CIAYgA0Hbk8AAai0AAGtB7QJqCyEGIANBkANPDQIgBkHtAksNAyADIA1BH3UgAWpBkANsaiIAQf//D2tBgoBgSQ0DIAZBBHRBEGogAEENdHIiBiADQZyXwABqLQAAciIPQfg/cSIBQeAtSw0DIChC6AeDICd8p0HAhD1sIgBB/6fWuQdLDQMgD0UgJkKAowWDICV8pyIDQf+iBUsgA0E8cEE7RyAAQf+T69wDS3Fycg0DIAhBhAFPBEAgCBABCwJAAkACQAJAIAMgA0GAowVtIgBBgKMFbGtBH3UgAGpBAWoOAwADAQMLIA9B8D9xIgBBEUkNASAAQRBrIA9Bj0BxciEPDAILIAFB0C1NBEAgAUEQaiAPQYdAcXIhDwwCCwJ/IAZBDXVBAWoiAUGQA28iAEEfdUGQA3EgAGoiAEGQA0kEQCABQf//D2tBgoBgTwR/IABBnJfAAGotAAAgAUENdHJBEHIFQQALDAELIABBkANBmJvAABC3AQALIg8NAQwTCyAGQQ11QQFrQQxBHxCUASIPRQ0SCyASAn8CQAJAAkACQAJAAkACQAJAIAJBgOfAAEEIEHMiAARAIABB4N/AAEEKEHMiAEUNCCAALQAAIgJBAWsOBQIDBAYHAQtBuLHCAC0AABpBARAKIgBFDRQgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuDAgLIAlBADoAAAwDCyAJQQE6AAAgCSAALQABOgABDAILIAlBEGogAEEQaikDADcDACAJQQI6AAAgCSAAKQMINwMIDAELIAlBBHIgAEEEaigCACAAQQxqKAIAENYBIAlBAzoAAAtBASELIAkgCUH/AGpBoIDAABD4ASEYQQEhAwwMCyAJQQRyIABBBGoQOCAJQQQ6AAAgCUEIaigCACEAIAkgCSgCBCIIIAlBDGooAgAiDUEYbGo2AmQgCSAINgJgIAkgADYCXCAJIAg2AlgCQCANRQ0AIAkgCEEYajYCYCAILQAAIgBBBkYNACAJQSFqIgYgCEEJaikAADcAACAJQShqIgMgCEEQaikAADcAACAJIAA6ABggCSAIKQABNwAZIAlB8ABqIgIgCUEYaiIBEGsgCSgCcA0SIA1BAUYNCCAJKAJ0IRggCSAIQTBqNgJgIAgtABgiAEEGRg0IIAYgCEEhaikAADcAACADIAhBKGopAAA3AAAgCSAAOgAYIAkgCEEZaikAADcAGSACIAEQbCAJKAJwDRIgDUECRg0JIAkoAnQhHiAJIAhByABqNgJgIAgtADAiAEEGRg0JIAYgCEE5aikAADcAACADIAhBQGspAAA3AAAgCSAAOgAYIAkgCEExaikAADcAGSACIAEQbCAJKAJwDRIgCSgCdCEfQQAhCyANQQNHBEAgDUG03cAAEKsBIRhBASELCyAJQdgAahCJAQwNC0EAQZTewAAQqwEMEgsgCUEEciAAQQRqEOcBIAlBBToAACAJQQxqKAIAIQpBACEDIAlBMGohDCAJQdAAaiAJKAIEIgEEfyAJQcwAaiAJQQhqKAIAIgA2AgAgCUHIAGogATYCACAJQcQAakEANgIAIAlBPGogADYCACAJQThqIAE2AgAgCUE0akEANgIAQQEhAyAKBUEACzYCACAJQUBrIAM2AgAgCSADNgIwIAlBBjoAGCAJQdgAakEBciEUIAlBGGpBAXIhESAJQeAAaiEIIAlB5wBqIQ1BASETA0ACQCAJQfAAaiIBIAwQPCAJKAJwIgNFDQAgCCADIAkoAngiAEEYbGoiBkEJaikAADcDACANIAZBEGopAAA3AAAgCSAGKQABNwNYIAYtAAAiEEEGRg0AIAMgAEEMbGoiBkGUAmooAgAhAyAGQZACaigCACEAIAZBjAJqKAIAIQYgCUEYahCvASARIAkpA1g3AAAgEUEIaiIOIAgpAwA3AAAgEUEPaiILIA0pAAA3AAAgCSAQOgAYAkAgBkUEQCABIAAgAxC+AQwBCyAJQfAAaiAGIAMQvgEgAEUNACAGECILIAktAHANCgJAAkACQAJAIAktAHEOAwECAwALIBQgESkAADcAACAUQQhqIA4pAAA3AAAgFEEPaiALKQAANwAAIAlBBjoAGCAJIBA6AFggCUHYAGoQtAEMBAsgIARAQajiwABBBBDKAQwOCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGsgCSgCcA0MIAkoAnQhGEEBISAMAwsgIQRAQaziwABBBRDKAQwNCyAUIBEpAAA3AAAgFEEIaiAOKQAANwAAIBRBD2ogCykAADcAACAJQQY6ABggCSAQOgBYIAlB8ABqIAlB2ABqEGwgCSgCcA0LIAkoAnQhHkEBISEMAgsgE0UEQEGx4sAAQQMQygEMDAsgFCARKQAANwAAIBRBCGogDikAADcAACAUQQ9qIAspAAA3AAAgCUEGOgAYIAkgEDoAWCAJQfAAaiAJQdgAahBsIAkoAnANCiAJKAJ0IR9BACETDAELCwJAICAEQCAhRQRAQaziwABBBRDJAQwMCyATRQ0BQbHiwABBAxDJAQwLC0Go4sAAQQQQyQEMCgtBACEDQQAhCyAJKAJQBEAgCkHk3cAAEKsBIRhBASELCyAMEIABIAlBGGoQrwEMCgtBuLHCAC0AABpBARAKIgBFDQwgAEEBOgAAIAlCBDcCICAJQbDlwAA2AhwgCSAANgIYIAlBGGpBvODAABAuCzYCBEEBIQMMCgsgA0GRA0HslsAAELcBAAtBf0GRA0H8lsAAELcBAAsgA0GQA0GYm8AAELcBAAsgCUEkakIANwIAIAlBATYCHCAJQeiSwAA2AhggCUGMrMIANgIgIAlBGGpBxJLAABDrAQALQQFBlN7AABCrAQwKC0ECQZTewAAQqwEMCQsgCSgCdAshGCAMEIABIAlBGGoQrwFBACEDQQEhCwsCQAJAAkAgAkEEaw4CAgEACyAJELQBDAILIANFDQEgCUEEchCyAQwBCyAJKAIEIQAgCUEMaigCACICBEAgACEDA0AgAxC0ASADQRhqIQMgAkEBayICDQALCyAJQQhqKAIARQ0AIAAQIgsgCw0GIBggHiAfEJQBIghFBEAgCUEBOgAYQbzvwABBKyAJQRhqQZzewABBrODAABCuAQALAkAgCCAPTgRAIA9BDXUiAUGQA28hDSAIQQ11IgAgAEGQA20iAEGQA2xrIgJBH3VBkANxIAJqIgZBkQNPDQQgDUEfdUGQA3EgDWoiA0GRA08NBSAGQduTwABqLQAAIAZB7QJsIAhBBHZB/wNxampBAWutIAJBH3UgAGogAUHwfG1qIA1BH3ZqrEKx9Qh+fCADQduTwABqLQAAIANB7QJsIA9BBHZB/wNxampBAWutfSIkQh5VDQEgCSAkPAAAIAlBJGpCATcCACAJQQI2AhwgCUG04cAANgIYIAlBCTYCXCAJIAlB2ABqNgIgIAkgCTYCWCASQQRqIAlBGGoQRkEAIQMMAgtBuLHCAC0AABpBASEDQQEQCiIARQ0CIABBBDoAACAJQgQ3AiAgCUGw5cAANgIcIAkgADYCGCASIAlBGGpBxOHAABAuNgIEDAELQQAhAyASQQA2AgQLIBIgAzYCACAJQYABaiQADAcLAAsgBkGRA0GMl8AAELcBAAsgA0GRA0GMl8AAELcBAAsgCSgCdAshGCAJQdgAahCJAQsgCSAYNgIYQbzvwABBKyAJQRhqQazewABBnODAABCuAQALQbzewABBK0HQ38AAENEBAAsgBSgCwAFFBEAgBUHIAWopAgAhJCAFKALEASEIQQAhACAFQQA2AmggBUIENwJgIwBBIGsiBiQAAkACQAJAAkACQAJAIAdBgOfAAEEIEHMiAQRAIAFBiOfAAEEIEHMiAUUNASABLQAAQQNGIgNFDQIgAUEMaigCACIHRQ0DIAEoAgQhASAGQQhqIAcQ4AEgBigCDCECIAYoAgggAUEAIAMbIAcQvgIhASASIAc2AgggEiACNgIEIBIgATYCAAwEC0G4scIALQAAGkEBEAoiAUUNBCABQQE6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHQ58AAEC4hASASQQA2AgAgEiABNgIEDAMLQbixwgAtAAAaQQEQCiIBRQ0DIAFBAToAACAGQgQ3AhggBkGw5cAANgIUIAYgATYCECAGQRBqQdDnwAAQLiEBIBJBADYCACASIAE2AgQMAgtBuLHCAC0AABpBARAKIgFFDQIgAUEBOgAAIAZCBDcCGCAGQbDlwAA2AhQgBiABNgIQIAZBEGpB0OfAABAuIQEgEkEANgIAIBIgATYCBAwBC0G4scIALQAAGkEBEAoiAUUNASABQQY6AAAgBkIENwIYIAZBsOXAADYCFCAGIAE2AhAgBkEQakHA58AAEC4hASASQQA2AgAgEiABNgIECyAGQSBqJAAMAQsACyAFKALAASINBEAgBSgCyAEhCyAFKALEASEGIAgNBEEEIRNBAAwFCyAFKALEASECQQRBABDtASAIRSAkQv////8Pg1ByDQEgCBAiDAELIAUoAsQBIQILIAVByABqELIBCyAFQTBqELQBDAMLIAUgJDcCWCAFIAg2AlQgBUHgAGoiASgCCCIAIAEoAgRGBEAgASAAEIIBIAEoAgghAAsgASAAQQFqNgIIIAEoAgAgAEEMbGoiASAFQdQAaiIAKQIANwIAIAFBCGogAEEIaigCADYCACAFKAJoIQAgBSgCYCETIAUoAmQLIQIgBUGoAmogBUHQAGooAgA2AgAgBSAFKQJINwOgAiAFQTBqELQBIBNFDQFBuLHCAC0AABogBSgCqAIhASAFKAKkAiEHIAUoAqACIQhBgAEQCiIDRQ0EIAVCgAE3AmQgBSADNgJgIAUgBUHgAGoiAzYCMCADQefswABBARDkASAFIAEEf0EBBSADQdzswABBARDkAUEACzoA5AIgBSAFQTBqNgLgAgJ/IAhFBEBBACEBQQAMAQsgBSAHNgLcASAFIAg2AtgBIAVBADYC1AEgBSAHNgLMASAFIAg2AsgBIAVBADYCxAFBAQshAyAFIAE2AuABIAUgAzYC0AEgBSADNgLAAQNAAkAgBUEIaiAFQcABahBEIAUoAggiAQRAIAVB4AJqIAEgBSgCDBDcAQwCBSAFLQDkAgRAIAUoAuACKAIAQdzswABBARDkAQsgBSgCZCEiIAUoAmAiB0UNASAFKAJoIRogBUGgAmoQsgFBBCEKQQAhA0EBDAULAAsLIAUgIjYCwAFBvO/AAEErIAVBwAFqQfDqwABBjOvAABCuAQALQeiAwABBKkGUgcAAEN4BAAtBuLHCAC0AABpBDBAKIgpFDQIgBUEANgK4AiAFQgE3ArACIAVB+ABqQcjqwAA2AgAgBUEDOgCAASAFQSA2AnAgBUEANgJ8IAVBADYCaCAFQQA2AmBBuLHCAC0AABogBSAFQbACajYCdCACKAIAIQEgAigCCCEAQQgQCiITRQ0CIBMgATYCACATIAEgAEEEdGo2AgQgBUEANgLsAiAFQoGAgIAQNwLkAiAFIBM2AuACQQEhAwNAAkAgA0UNACATIANBA3RqQQhrIQECQANAIAEoAgAiDCABQQRqKAIARw0BIAFBCGshASADQQFrIgMNAAsgBUEANgLoAgwBCyABIAxBEGo2AgAgDCgCCCIGIAxBDGooAgBBBHRqIQcgBSADNgLoAiAFKALkAiADRgRAIAVB4AJqIQgjAEEgayILJAACQAJAIANBAWoiAUUNAEEEIAgoAgQiDUEBdCIAIAEgACABSxsiACAAQQRNGyIDQQN0IQEgA0GAgICAAUlBAnQhAAJAIA1FBEAgC0EANgIYDAELIAtBBDYCGCALIA1BA3Q2AhwgCyAIKAIANgIUCyALQQhqIAAgASALQRRqEHcgCygCDCEAIAsoAghFBEAgCCADNgIEIAggADYCAAwCCyAAQYGAgIB4Rg0BIABFDQAACxDqAQALIAtBIGokACAFKALoAiEDCyAFKALgAiITIANBA3RqIgAgBzYCBCAAIAY2AgAgBSADQQFqIgM2AugCIAVByAJqIAwoAgAgDCgCBCgCDBECACAFKALIAkECRw0BIAUoAswCIQEgBSgC0AIhACAFQQA2AjggBUIBNwIwIAVBAzoA4AEgBUEgNgLQASAFQQA2AtwBIAVByOnAADYC2AEgBUEANgLIASAFQQA2AsABIAUgBUEwajYC1AECQCABIAVBwAFqIAAoAgwRAQBFBEAgBSgCMCIBRQ0DIAUpAjQhJCAFIAUoAuwCIgBBAWo2AuwCIAUgJDcCNCAFIAE2AjACQCAARQRAIAVB4ABqIAEgJEIgiKcQEQ0BIAUoAjRFDQQgBSgCMBAiDAQLIAVBATYCxAEgBUGM6MAANgLAASAFQgE3AswBIAVBHTYCzAIgBSAFQcgCajYCyAEgBSAFQTBqNgLIAiAFQbACakHI6sAAIAVBwAFqEC9FDQILIAUoAjQEQCAFKAIwECILIAUoAuQCBEAgExAiC0Gc6sEAQTcgBUHUAGpB4OrAAEGw68EAEK4BAAtBnOrBAEE3IAVB1ABqQeDpwABBsOvBABCuAQALIAUoAjRFDQEgBSgCMBAiDAELCyAFKALkAgRAIBMQIgsgBUHIAWogBUG4AmooAgAiADYCACAFIAUpArACIiQ3A8ABIApBCGogADYCACAKICQ3AgAgAigCACACKAIIEMYBIAIoAgQEQCACKAIAECILIAIQIkEBIQ1BBCETQQAhB0EAIQtBACEGQQAhAEEAIQJBASEDQQALIQEgIwRAIBkQIgsgBUEuaiAFQcIBai0AADoAACAFIAUvAMABOwEsIBUEQCAdECILIBwEQCAbECILQbixwgAtAAAaQTgQCiIIRQ0BIAggAToANCAIIBo2AjAgCCAiNgIsIAggBzYCKCAIIAs2AiQgCCAGNgIgIAggDTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const o = HC();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await TC(await i, o);
  return KC(t, e);
}
function $t(i, o, t, e, A) {
  return yA(o - 711, t);
}
function yA(i, o) {
  i = i - (-936 + 1 * 1357);
  const t = fn();
  let e = t[i];
  if (yA.WXhouF === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    yA.OjMBpZ = g, yA.kNAPYd = {}, yA.WXhouF = !0;
  }
  const n = t[8666 + -8666 * 1], r = i + n, a = yA.kNAPYd[r];
  return a ? e = a : (yA.sIUPmV === void 0 && (yA.sIUPmV = !0), e = yA.OjMBpZ(e, o), yA.kNAPYd[r] = e), e;
}
function Ao(i, o, t, e, A) {
  return yA(i - -836, o);
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return yA(a - 737, c);
  }
  function e(a, g, c, I, s) {
    return yA(a - 216, I);
  }
  function A(a, g, c, I, s) {
    return yA(g - -602, c);
  }
  function n(a, g, c, I, s) {
    return yA(c - 363, s);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(n(810, 835, 820, 829, "C]R(")) / 1 * (-parseInt(n(828, 804, 819, 837, "5RMe")) / 2) + -parseInt(e(676, 658, 688, "tBbr", 674)) / 3 * (-parseInt(t(1166, 1189, "U)PI", 1185, 1157)) / 4) + parseInt(e(684, 704, 691, "OW83", 675)) / 5 * (-parseInt(n(811, 778, 805, 782, "S8tC")) / 6) + -parseInt(n(834, 828, 814, 827, "Y71J")) / 7 * (parseInt(A(-148, -170, "U)PI", -153, -180)) / 8) + parseInt(t(1175, 1186, "x$08", 1184, 1187)) / 9 + -parseInt(t(1210, 1201, "I16i", 1187, 1192)) / 10 + parseInt(n(792, 801, 804, 800, "arNs")) / 11 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fn, 1081890 + -439167 * 1 + -68763);
function Ma(i, o, t, e, A) {
  return yA(e - 805, t);
}
function La(i, o, t, e, A) {
  return yA(e - 402, A);
}
function fn() {
  const i = ["WOi7WO8tlmoWWQRdIwpcHLnfDmo4", "jCkhW7ZdPSkIW7abpSkkWO/dPG", "W6fLWQdcV8ow", "WP8gW4n0WPq", "W49XWPldHSo+", "W5ZdTSobrsa", "WRLBw8oVW4a", "FbxdNmkbWQ0", "WPqtWOmPW7W", "Ea7dJ8k4W5G", "WQ7cOCk8WP9IWRC2WRxcGHG", "WPTvWQOXCSoNo8o/W4VdNHeyquO", "B0pcJmoDW7JdN8oPWOhcJmo7W6m", "CmohWOSLW5PdW4lcKmoBtG", "f8oXWPxcRSk5", "WRxdReiGW4PmWRO+k0C", "hrBcSSkFE8kyW4NdTmow", "WQbFrmoKW5a", "W7CKW7ddTCkdjwddIqzTW5S", "WPntWQOXFmkFzCkPW4RdHaO", "oKJcTmkEwa", "WRFdQeyJWRXRWP8UnLz1", "DCoIW5r8xq", "WO9urhjO", "WRLZWRlcOCoY", "zmk5WOWIwqfSWP4mmG", "W59QW4nfFG", "W7NcQwv1DcP2Btbv", "y8osWR3cUSoF", "W5Kas8o/", "xCkDWPJcLmo5", "WPToWRVdRq", "AvNcMCo9W4P3W6/cH8oEWP/dUetcUq", "WQT2W6ddRmoR", "EmkdWPywBG", "WP9SlXxdJG", "mLlcU8kEra", "ju3dPCoCWOm", "W6rmWQWfW6C", "sSkGW5NdUmoRp8oRFsxdHwvcsmkc", "mH/dGmknWQ8", "W74dcmoUW7lcTqlcR8k2", "W7WIWRdcISo5heVdVW", "rSkmWPJcIHW", "W6Xqx8oOW5G", "W70NW7NdTCknauNdIdX3W44", "WPeRW5JcK8oPWPlcICkjy8kF", "W5jdW4LZWODNW44+wt4Ljwu", "W7hdUSo+W4fZ", "WR3dMbRdNmkq", "imofEWpcRLG0WQO", "WOtcIILuW4W6mXBcKuvgiG10", "W7eVW5arvq", "WQziWOJcMei"];
  return fn = function() {
    return i;
  }, fn();
}
class jC {
  [Ao(-392, "Hh#^") + $t(1125, 1146, "Y71J") + Ao(-391, "^BEN")] = !1;
  async [$t(1185, 1183, "vaJM")](o) {
    function t(a, g, c, I, s) {
      return Ao(g - 1396, I);
    }
    function e(a, g, c, I, s) {
      return Ao(s - 1122, g);
    }
    function A(a, g, c, I, s) {
      return La(a - 382, g - 14, c - 388, s - 153, I);
    }
    function n(a, g, c, I, s) {
      return La(a - 1, g - 305, c - 193, c - 191, s);
    }
    function r(a, g, c, I, s) {
      return Ma(a - 338, g - 150, c, a - -1033);
    }
    try {
      const a = o + (t(981, 1003, 984, "U)PI", 991) + "/") + Ga;
      await jg(a), this[t(1035, 1025, 1052, "U)PI", 1043) + A(996, 1007, 975, "rsHu", 982) + t(1036, 1015, 1038, "2fyw", 992)] = !0;
    } catch {
      this[t(1054, 1029, 1053, "S8tC") + t(973, 981, 981, "3M&B") + t(992, 1018, 991, "e9(X")] = !1, console[r(242, 263, "Ae!B")](Ga + (A(1013, 1011, 1040, "f)wm", 1018) + n(1036, 1041, 1029, 1030, "lF(U") + A(1013, 993, 1037, "ug[x", 1016) + A(984, 984, 966, "e9(X", 986) + t(1040, 1034, 1018, "U)PI") + e(698, "DgOh", 710, 707, 708) + t(982, 1008, 995, "rsHu") + e(747, "*$IJ", 699, 709, 725) + e(743, "e9(X", 717, 717, 733) + r(236, 219, "[%Ht") + e(732, "I16i", 729, 730, 736) + e(704, "mM&b", 749, 725, 726) + e(705, "ug[x", 713, 709, 709) + e(715, "Jf@F", 700, 699, 716) + "n."));
    }
  }
  [$t(1156, 1157, "N*ep") + Ma(1253, 1269, "uX)S", 1276) + Ao(-412, "GWSe") + "ed"]() {
    function o(e, A, n, r, a) {
      return $t(e - 356, a - -776, A);
    }
    function t(e, A, n, r, a) {
      return $t(e - 258, A - -1200, a);
    }
    return this[t(-53, -40, -48, -47, "vlVx") + o(383, "ocCX", 365, 361, 360) + o(408, "arNs", 378, 415, 402)];
  }
}
class Ei extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function ht(i, o, t, e, A) {
  return X(o - -932, e);
}
function et(i, o, t, e, A) {
  return X(o - -143, e);
}
function X(i, o) {
  i = i - (-6942 + 1 * 5378 + 1997);
  var t = hn(), e = t[i];
  if (X.aftMOK === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (var u = 0, h = s.length; u < h; u++)
        C += "%" + ("00" + s.charCodeAt(u).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, n = function(c, I) {
      var s = [], C = 0, Q, E = "";
      c = A(c);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (var d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    X.XUFujM = n, X.HbkXQK = {}, X.aftMOK = !0;
  }
  var r = t[4594 * 1 + -9422 + 4828], a = i + r, g = X.HbkXQK[a];
  return g ? e = g : (X.qwtuVW === void 0 && (X.qwtuVW = !0), e = X.XUFujM(e, o), X.HbkXQK[a] = e), e;
}
function tt(i, o, t, e, A) {
  return X(t - -328, i);
}
function qC(i, o, t, e, A) {
  return X(t - -504, o);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return X(I - 976, g);
  }
  function e(g, c, I, s, C) {
    return X(g - -720, s);
  }
  function A(g, c, I, s, C) {
    return X(c - 319, C);
  }
  function n(g, c, I, s, C) {
    return X(C - 742, I);
  }
  for (var r = i(); ; )
    try {
      var a = -parseInt(A(800, 785, 787, 771, "KrLk")) / 1 + -parseInt(t("[9Ko", 1444, 1463, 1486, 1473)) / 2 * (parseInt(n(1220, 1209, "Kbr3", 1169, 1187)) / 3) + -parseInt(t("iQsS", 1412, 1410, 1436, 1406)) / 4 + parseInt(e(-230, -266, -231, "i5sX", -230)) / 5 * (parseInt(e(-263, -295, -228, "wO!Z", -265)) / 6) + parseInt(e(-271, -246, -267, "kcGs", -236)) / 7 + parseInt(A(810, 826, 796, 816, "IGLn")) / 8 + parseInt(A(799, 787, 817, 762, "j(r%")) / 9;
      if (a === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(hn, 142566 * -1 + -649194 + 1437584);
function hn() {
  var i = ["e8kJW7u", "nIfpuqK", "ESkAyCoKW4q", "W7zlxmk0dW", "W7jUWR0", "WRzXW4a8WP0", "BMSQfLhcOKyjqvzrWOVdVW", "o8k/WQtcT8kx", "W7SZW7KNqCkWs0xdUZOc", "iCojjCoMW4RdRwldJ8oL", "WONcQLFdUqxdOKDTWRhcR8oxW5ldRW", "W6uEodtcRMn2iLjjdCoJWQ4", "wSoZW7VdI14", "CCkozSoZW4m", "hf7cLSomgW", "jCo2Crby", "mCk/WQNcPmkg", "iCoOEGTd", "W5u2CIiS", "wSoMW5mNjG", "WQ15W5y", "W6XUW6yDWQVcUCow", "sLqKW6n6", "WRvltW", "v8o0W7m", "kCo3vr5g", "WRZcO8kpuSkKWPO4W58vWOGxW4b3", "WR1hWQv+gW", "WPhdK8onq8osrmk9gvddTMnzjq", "W5WEWP0PzfGDW5jShSo5CWa", "W5aCpCkTEq", "wxnf", "WRFdN8k8", "WRLcEW", "W5iylSkYsa", "W6NcJCo3W4uQWOVcGehdReLrkwy", "WPX4WOT6WPO", "W7bSWQO", "WR1kBeddUq", "WRfVW4qlWPS", "W6DvsNtdKZ8h", "sCo0W7BdGM4", "l1Pp", "CCkjESo0W58", "q8oPhZ1QWPRdICk6WPlcQ8kwxmkc", "WQG4W6xdPhW", "FCkjyCoUW4i", "hSk1tuaY", "rCoqWRK", "WPZcOuVdRa", "WQPTWR9iha", "cW3dKNDfesdcS8oX", "WQrYW67cISoBWPabu8ozWPjt", "WRNdJ8k9WOH0", "WQnwuX8w", "gCodW7NdKNi", "WOVcQ1xdUaxdPK0fWRdcG8omW5ldUri", "WRZdN8kVWOHU", "z8kUW4hdT2m", "oLbaBqi", "amk6wgS1", "zqWuletcKaamW4GkWRy0", "uSo+W7NdRvu", "cqJdLIqrAfNdTmoNWQxcJSkuwCkD", "aqBdLYmqAqNcKmoPWPFcJmkV", "i8o2BaXz", "Dr9sAwS", "WQTYWQrTdq", "W6FdTmonaSo+", "haRcV8oFW7G", "W5HZyY3dRa", "dCoqW6tdJ2G", "seVdN8oRW6O", "xCoYW6e", "W5BdPrxcO1q", "sSohWRjRW5u"];
  return hn = function() {
    return i;
  }, hn();
}
function Re(i, o, t, e, A) {
  return X(i - 862, e);
}
class Oa {
  constructor(o) {
    function t(r, a, g, c, I) {
      return X(g - -204, I);
    }
    this[e(-310, "eZ7J", -265, -295) + n(-245, -236, -236, "^rOa")] = o;
    function e(r, a, g, c, I) {
      return X(c - -775, a);
    }
    function A(r, a, g, c, I) {
      return X(a - 708, I);
    }
    function n(r, a, g, c, I) {
      return X(g - -711, c);
    }
    try {
      this.#A = o[e(-318, "S(BY", -310, -313, -311) + t(321, 283, 295, 311, "[lX@") + e(-291, "pih&", -257, -271, -270)] && JSON[n(-273, -302, -276, "mgA[", -302)](o[e(-245, ")ado", -307, -272, -303) + A(1129, 1149, 1176, 1128, "z7rv") + e(-317, "KrLk", -349, -328, -324)]), this.#e = o[t(323, 265, 290, 322, "i5sX") + n(-280, -291, -273, "Kbr3", -268)];
    } catch (r) {
      console[n(-228, -231, -257, "a3VW")](r);
    }
  }
  #A;
  #e;
  get [tt("%cLv", 172, 178) + "id"]() {
    function o(e, A, n, r, a) {
      return tt(e, A - 98, a - 197);
    }
    function t(e, A, n, r, a) {
      return tt(r, A - 133, n - 360);
    }
    return this[t(472, 518, 492, "GgjG") + t(524, 507, 505, "IGLn")][t(522, 551, 520, "KD*H") + o("XMBe", 292, 273, 280, 305)];
  }
  get [ht(-474, -473, -486, "pih&") + "s"]() {
    function o(e, A, n, r, a) {
      return ht(e - 215, n - -68, n - 152, A);
    }
    function t(e, A, n, r, a) {
      return ht(e - 64, a - 218, n - 283, A);
    }
    return this[t(-248, "i5sX", -264, -281, -266) + t(-265, "i5sX", -206, -233, -231)][o(-527, "%cLv", -504) + "s"];
  }
  get [ht(-494, -467, -453, "kcGs") + tt("JPUa", 136, 150)]() {
    function o(e, A, n, r, a) {
      return Re(n - -596, A - 339, n - 481, A);
    }
    function t(e, A, n, r, a) {
      return tt(n, A - 8, r - -348);
    }
    return this[t(-175, -213, "%cLv", -206) + o(725, "(gaj", 740)][o(773, "GgjG", 742) + o(762, "ehw6", 751)];
  }
  get [Re(1317, 1351, 1296, "jHiy") + "b"]() {
    return this.#A;
  }
  get [ht(-488, -474, -451, "S(BY") + Re(1299, 1303, 1266, "S(BY")]() {
    return this.#e;
  }
  get [Re(1362, 1390, 1340, "JPUa") + et(322, 336, 332, "66RB") + et(388, 365, 328, "jHiy") + ht(-475, -490, -453, "ehw6")]() {
    function o(n, r, a, g, c) {
      return qC(n - 165, n, c - 834);
    }
    function t(n, r, a, g, c) {
      return et(n - 190, n - -799, a - 183, r);
    }
    function e(n, r, a, g, c) {
      return et(n - 267, n - -775, a - 277, a);
    }
    function A(n, r, a, g, c) {
      return tt(a, r - 483, c - -617);
    }
    return !!this.#A?.[e(-454, -442, "KrLk") + e(-437, -426, "zlRF")]?.[e(-472, -479, "C]sU") + A(-505, -513, "Kbr3", -479, -502) + t(-444, "%cLv", -423) + t(-445, "KD*H", -458) + o("i5sX", 760, 798, 751, 781) + A(-473, -480, "yf[L", -500, -495) + A(-476, -466, "C]sU", -474, -440)];
  }
  get [Re(1344, 1359, 1381, "[9Ko") + Re(1306, 1287, 1311, "njkq") + et(334, 324, 299, "C]sU") + Re(1339, 1377, 1314, "4UaN") + tt("fYBB", 135, 156) + et(334, 310, 335, "eZ7J")]() {
    function o(A, n, r, a, g) {
      return Re(a - -1423, n - 345, r - 158, g);
    }
    function t(A, n, r, a, g) {
      return et(A - 74, g - -305, r - 233, n);
    }
    function e(A, n, r, a, g) {
      return Re(r - -399, n - 241, r - 321, a);
    }
    return !!this.#A?.[e(932, 958, 958, "l!v5") + t(57, "njkq", 85, 32, 53)]?.[t(-36, "mgA[", -28, -44, -9) + e(986, 952, 949, "njkq") + t(35, "8Hvl", 24, -10, 15) + t(24, "c%cA", -7, 51, 23) + o(-78, -109, -61, -89, "jHiy") + o(-72, -119, -144, -109, "kcGs") + e(923, 977, 956, "C]sU")];
  }
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return rA(s - -758, a);
  }
  const e = i();
  function A(a, g, c, I, s) {
    return rA(c - 330, a);
  }
  function n(a, g, c, I, s) {
    return rA(s - -836, I);
  }
  function r(a, g, c, I, s) {
    return rA(s - 37, a);
  }
  for (; ; )
    try {
      if (-parseInt(t("eYr4", 30, 84, -27, -32)) / 1 * (-parseInt(A("E9RN", 872, 967, 974, 981)) / 2) + parseInt(r("r[c8", 545, 587, 778, 662)) / 3 + -parseInt(t("LhR!", -117, -284, -275, -172)) / 4 * (parseInt(r("UXCG", 659, 696, 755, 755)) / 5) + parseInt(n(-302, -135, -262, "L&zX", -252)) / 6 * (-parseInt(t("g&4H", -131, -119, -9, -100)) / 7) + parseInt(t("[XY6", -189, -217, -111, -139)) / 8 * (-parseInt(r("X*C5", 699, 703, 521, 599)) / 9) + -parseInt(n(-335, -307, -397, "2gv5", -285)) / 10 + -parseInt(t("*%(I", 45, -15, -69, -65)) / 11 * (-parseInt(t("ddW]", -222, -134, -203, -155)) / 12) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(pn, -282986 * -1 + -17695 * 13 + 468830);
function jA(i, o, t, e, A) {
  return rA(o - -458, t);
}
function z(i, o, t, e, A) {
  return rA(A - -765, e);
}
function rA(i, o) {
  i = i - 498;
  const t = pn();
  let e = t[i];
  if (rA.rmoomZ === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    rA.pNnMfG = g, rA.stuhqL = {}, rA.rmoomZ = !0;
  }
  const n = t[-7963 + 2 * 4755 + -1547], r = i + n, a = rA.stuhqL[r];
  return a ? e = a : (rA.eAtRrh === void 0 && (rA.eAtRrh = !0), e = rA.pNnMfG(e, o), rA.stuhqL[r] = e), e;
}
function nA(i, o, t, e, A) {
  return rA(i - -271, t);
}
function cA(i, o, t, e, A) {
  return rA(t - 666, i);
}
function te(i, o, t, e, A) {
  return rA(i - 256, A);
}
class VC {
  constructor(o) {
    function t(e, A, n, r, a) {
      return rA(A - -377, n);
    }
    this[t(183, 146, "*%(I") + t(188, 267, "bVwO") + "d"] = o;
  }
  [z(-265, -293, -106, "r!Jd", -190) + "se"];
  [z(-146, -48, -147, "^D5f", -139) + cA("8yH6", 1294, 1390) + nA(297, 220, "1lxN") + nA(308, 369, "rJ4w")] = [nA(437, 511, "9MTE") + cA("r[c8", 1389, 1281) + "ic", te(757, 723, 651, 789, "g&4H") + jA(174, 234, "(dvP") + "ic"];
  [nA(356, 267, "^D5f") + nA(306, 239, "cw*%")];
  async [z(-207, -91, -49, "r!Jd", -120)](o) {
    function t(g, c, I, s, C) {
      return jA(g - 352, C - 804, I);
    }
    const e = await this[r(")XPc", 1285, 1446, 1363) + r("fGU0", 1469, 1510, 1406) + r("bym9", 1369, 1453, 1380)](o);
    await Promise[r("wEZ*", 1286, 1306, 1355) + n(1014, "cw*%")]([this[a(-62, 19, "AoqZ", -106) + t(1043, 901, "g&4H", 1038, 953) + "d"][r("NYyJ", 1302, 1398, 1413)](o), this[n(1062, "&Pc7") + n(1111, "&Pc7") + "e"](e)]);
    function A(g, c, I, s, C) {
      return nA(I - -50, c - 31, C);
    }
    function n(g, c, I, s, C) {
      return cA(c, c - 118, g - -287);
    }
    function r(g, c, I, s, C) {
      return z(g - 285, c - 288, I - 322, g, s - 1578);
    }
    function a(g, c, I, s, C) {
      return z(g - 118, c - 12, I - 106, I, s - -3);
    }
    this[A(156, 392, 275, 340, "A[z3") + A(159, 290, 251, 200, "bVwO") + t(929, 807, "rJ4w", 737, 861)]();
  }
  async [jA(208, 242, "bVwO") + jA(246, 198, "*%s3") + "se"](o) {
    function t(a, g, c, I, s) {
      return te(I - -392, g - 231, c - 344, I - 228, c);
    }
    function e(a, g, c, I, s) {
      return nA(I - -474, g - 423, g);
    }
    function A(a, g, c, I, s) {
      return z(a - 321, g - 435, c - 120, c, g - 799);
    }
    function n(a, g, c, I, s) {
      return te(c - -285, g - 317, c - 260, I - 416, I);
    }
    function r(a, g, c, I, s) {
      return te(c - 278, g - 450, c - 426, I - 5, a);
    }
    try {
      if (e(-214, "g&4H", -118, -141, -245) === n(577, 753, 637, "[XY6", 685))
        return this[e(-358, "@l[(", -313, -238, -233) + r("X*C5", 1054, 1055, 942, 1158) + "se"]()?.[e(-251, "9MTE", -215, -216, -228) + n(451, 602, 524, "g&4H", 540)]?.[r("eYr4", 1183, 1280, 1159, 1317)] || [];
      {
        const a = await fetch(o);
        if (!a.ok) {
          if (t(613, 658, "cw*%", 600, 563) !== A(834, 738, "L&zX", 747, 733))
            return this[A(590, 583, "2gv5", 669, 640) + n(499, 500, 477, "g&4H", 577) + "se"]()?.[A(598, 655, "bym9", 678, 583) + e(-163, "*%s3", 46, -36, -148)]?.[n(663, 580, 576, "oly5", 703) + e(-213, "&Pc7", -187, -92, -16)];
          throw new Error(t(524, 503, "wz#a", 504, 528) + t(468, 610, "A[z3", 560, 553) + r("XZXs", 1144, 1065, 1135, 957) + n(403, 559, 506, "GjtR", 440) + "d.");
        }
        this[t(517, 337, "^D5f", 451, 418) + "se"] = await a[r("fGU0", 986, 1093, 1156, 1138)]();
      }
    } catch (a) {
      if (e(-166, "8yH6", -96, -54) === e(-12, "LhR!", 60, -58)) throw new _0x1e3fa2(r("bym9", 1130, 1147, 1100) + e(-13, "bVwO", -193, -116) + n(492, 480, 484, "KLEu") + e(-25, "XZXs", 73, -23) + ".");
      this[e(-90, "wEZ*", -80, -50) + "se"] = void 0, console[A(646, 588, "EKCu")](a);
    }
  }
  async [cA("wEZ*", 1274, 1389) + te(773, 710, 770, 646, "EKCu") + "e"](o) {
    function t(a, g, c, I, s) {
      return nA(c - 652, g - 214, s);
    }
    function e(a, g, c, I, s) {
      return cA(I, g - 175, g - -32);
    }
    function A(a, g, c, I, s) {
      return z(a - 344, g - 485, c - 241, c, a - 675);
    }
    function n(a, g, c, I, s) {
      return te(c - -393, g - 226, c - 239, I - 90, a);
    }
    if (this[n("xVqA", 455, 460, 487) + e(1244, 1288, 1249, "(dvP")] = void 0, !o)
      if (e(1201, 1283, 1192, "70HD") !== e(1259, 1217, 1299, "5QkA")) {
        _0x384646 instanceof _0x39c52d ? _0x43ed67[r(613, 507, 602, "K]Hj")]() : _0xd7a55 instanceof _0x1ad3a7 && _0x5d48be[r(505, 462, 365, "wEZ*")](_0x4a2cf0);
        const a = {};
        a[A(456, 490, "dzzA") + t(895, 940, 1013, 1101, "rJ4w")] = !1, a[r(577, 619, 558, "5QkA") + "s"] = [], a[t(1022, 838, 926, 1011, "8Jq8") + t(1087, 1182, 1126, 1098, "fGU0")] = [], a[t(911, 877, 929, 900, "XZXs") + n("NYyJ", 445, 399, 383) + n("LhR!", 570, 458, 488)] = void 0, a[A(649, 680, "wEZ*")] = function() {
        }, a[t(1133, 1078, 1114, 1218, "[XY6") + t(912, 895, 883, 823, "(dvP")] = "", this[t(1171, 1208, 1119, 1073, "*%(I") + A(444, 415, "LhR!")] = new _0x49ca8c(a);
      } else {
        console[n("8yH6", 566, 590, 696)](r(362, 463, 560, "X*C5") + e(1332, 1240, 1199, "ddW]") + A(569, 584, "eYr4") + r(567, 689, 686, "LhR!") + n("6VnF", 486, 560, 620)), this[t(950, 944, 951, 1042, ")XPc") + "se"] = void 0;
        return;
      }
    function r(a, g, c, I, s) {
      return z(a - 488, g - 467, c - 68, I, g - 703);
    }
    await this[n("@l[(", 434, 530, 549) + n("fGU0", 556, 543, 539) + "se"](o);
  }
  async [jA(162, 108, "KLEu") + cA("x4FM", 1287, 1391) + te(775, 657, 691, 754, "XZXs")](o) {
    const t = await fetch("" + o + this[n(706, 598, 710, "6VnF") + n(519, 410, 309, "UNfo") + A(1326, 1322, 1411, 1350, "bVwO") + A(1198, 1188, 1263, 1287, "E9RN")][0]), e = t.ok ? 0 : -4719 + -626 * 15 + 14110;
    function A(r, a, g, c, I) {
      return z(r - 465, a - 116, g - 384, I, c - 1441);
    }
    function n(r, a, g, c, I) {
      return z(r - 17, a - 376, g - 492, c, a - 657);
    }
    return "" + o + this[n(601, 518, 529, "^D5f") + A(1308, 1272, 1104, 1194, "UNfo") + A(1285, 1228, 1240, 1336, "NYyJ") + n(344, 433, 452, "5QkA")][e];
  }
  [cA("EKCu", 1412, 1400) + te(765, 837, 861, 682, "oly5") + "s"](o) {
    function t(A, n, r, a, g) {
      return te(A - -1196, n - 348, r - 445, a - 467, g);
    }
    function e(A, n, r, a, g) {
      return cA(A, n - 319, r - -622);
    }
    o[t(-212, -285, -157, -262, "AoqZ") + "ch"]((A) => console[e("bVwO", 778, 658)](A));
  }
  [nA(293, 312, "dzzA") + nA(386, 477, "#nut") + nA(320, 351, "qVmx")](o) {
    function t(e, A, n, r, a) {
      return nA(r - 465, A - 53, A);
    }
    o[t(924, "qVmx", 819, 816) + "ch"]((e) => console[t(1066, "KLEu", 822, 942)](e));
  }
  [z(-232, -334, -305, "f5)c", -233) + cA("*%(I", 1504, 1386)]() {
    function o(e, A, n, r, a) {
      return jA(e - 233, e - 1336, a);
    }
    function t(e, A, n, r, a) {
      return nA(r - 1079, A - 489, a);
    }
    return window[t(1475, 1404, 1488, 1485, "bym9") + o(1417, 1360, 1384, 1509, "wEZ*")][t(1540, 1528, 1471, 1451, "@l[(") + t(1619, 1507, 1433, 1520, "#nut")];
  }
  [cA("1lxN", 1141, 1237) + jA(72, 54, "@l[(") + nA(454, 419, "x4FM")]() {
    function o(r, a, g, c, I) {
      return jA(r - 434, I - 104, g);
    }
    function t(r, a, g, c, I) {
      return jA(r - 341, c - -89, I);
    }
    function e(r, a, g, c, I) {
      return z(r - 245, a - 279, g - 352, g, r - 1139);
    }
    function A(r, a, g, c, I) {
      return cA(g, a - 466, c - -1310);
    }
    function n(r, a, g, c, I) {
      return jA(r - 326, r - -369, c);
    }
    try {
      if (e(954, 1015, "g&4H", 958, 998) !== A(-146, -64, "oly5", -43, -162)) _0x56fede[t(258, 156, 184, 174, "*%(I") + e(930, 996, "XZXs", 810, 979)](_0x776c54);
      else {
        if (!this[o(190, 357, "8Jq8", 256, 262) + "se"])
          if (e(991, 991, "70HD", 977, 1084) === e(1026, 1093, "f5)c", 975, 1019)) {
            _0x1c7e30[A(30, 99, "[95x", -24, -131)](A(-83, -111, "2gv5", -52, -178) + e(1025, 1038, "xVqA", 1107, 1104) + e(887, 854, "KLEu", 792, 841) + o(339, 358, "9MTE", 346, 357) + A(122, -26, "xVqA", 35, 16)), this[t(-131, -93, -73, -10, "eYr4") + "se"] = void 0;
            return;
          } else throw new Ei(e(901, 1016, "KLEu", 865, 936) + o(240, 233, "XZXs", 459, 349) + e(914, 1e3, "rJ4w", 867, 801) + t(202, 202, 147, 188, "cw*%") + ".");
        if (!this[o(290, 381, "2gv5", 240, 255) + t(239, 30, 61, 123, "qVmx") + "d"][e(1016, 916, "#nut", 935, 1107) + t(190, 238, 167, 155, "GjtR") + e(1002, 910, "@l[(", 1086, 987) + "ed"]())
          if (o(409, 256, "x4FM", 356, 293) !== t(13, -39, -13, -42, "AoqZ")) this[e(894, 837, "#nut", 826, 986) + A(-146, -126, "g&4H", -37, -62) + "d"] = _0x47bad1;
          else throw new Ei(e(900, 918, "xVqA", 773, 947) + A(123, 87, "NYyJ", 108, 223) + e(1084, 970, "[XY6", 972, 971) + A(-186, 9, "f5)c", -63, -120) + ".");
        this[o(87, 300, "A[z3", 157, 176) + o(319, 404, "(dvP", 247, 300)] = new Oa(_C(this[o(225, 288, "9MTE", 214, 335) + "se"], this[t(119, 134, 112, 87, "ddW]") + e(1043, 940, "XZXs", 988, 1105)]())), this[n(-228, -136, -171, "rJ4w", -260) + e(972, 943, "cw*%", 1014, 1011) + "s"](this[n(-164, -87, -36, "(dvP", -145) + A(-138, -158, "cw*%", -67, 4)][n(-194, -221, -295, "8yH6", -274) + "s"]), this[A(-120, 90, "GjtR", -34, -110) + n(-189, -169, -151, "cw*%", -196) + e(874, 917, "f5)c", 769, 803)](this[A(185, 30, "6VnF", 72, 8) + e(1093, 1007, "1lxN", 988, 1e3)][t(225, 160, 102, 183, "bVwO") + o(340, 319, "5QkA", 365, 360)]);
      }
    } catch (r) {
      if (e(1105, 1228, "g&4H") !== o(211, 260, "[XY6", 52, 145)) {
        if (r instanceof Ei) A(-86, 69, "f5)c", 21) === e(992, 1044, "^D5f") ? r[n(-78, -96, -199, "bym9")]() : _0x57d4c8[n(-166, -200, -80, ")XPc") + "ch"]((g) => _0x39429e[o(464, 489, "8yH6", 330, 373)](g));
        else if (r instanceof Error) {
          if (t(67, 214, 195, 160, "r!Jd") === A(-125, -238, "1lxN", -146)) throw new _0x1c2e07(e(1116, 1166, "cw*%") + t(25, -99, 71, 10, "UXCG") + n(-215, -215, -226, "[95x") + e(890, 865, "8Jq8") + "d.");
          console[o(171, 316, "r!Jd", 261, 294)](r);
        }
        const a = {};
        a[o(235, 329, "xVqA", 244, 334) + o(280, 100, "qVmx", 294, 211)] = !1, a[e(937, 921, "&Pc7") + "s"] = [], a[e(948, 942, "^D5f") + A(22, 2, "r[c8", 57)] = [], a[n(-204, -133, -136, "qVmx") + e(917, 884, "*%s3") + o(120, 271, "wEZ*", 175, 184)] = void 0, a[e(1024, 908, "KLEu")] = function() {
        }, a[o(219, 295, "f5)c", 197, 310) + n(-225, -105, -344, "r!Jd")] = "", this[t(62, 86, 135, 129, "@l[(") + n(-141, -145, -175, "8Jq8")] = new Oa(a);
      } else return null;
    }
  }
  [z(-191, -91, -174, "9MTE", -187) + z(-84, -266, -206, "^D5f", -175) + z(-109, -172, -65, "*%s3", -60) + cA("8yH6", 1210, 1296)]() {
    function o(t, e, A, n, r) {
      return z(t - 88, e - 280, A - 388, t, A - 1175);
    }
    return !!this[o("&Pc7", 1040, 1154) + o("UNfo", 1008, 938)];
  }
  [z(69, -66, -72, "*%(I", -36) + te(981, 947, 1027, 1060, "x4FM") + cA("#nut", 1459, 1350) + "t"]() {
    function o(e, A, n, r, a) {
      return nA(A - 592, A - 294, n);
    }
    function t(e, A, n, r, a) {
      return z(e - 241, A - 273, n - 136, a, A - 1234);
    }
    return this[t(972, 979, 960, 1022, "8yH6") + o(979, 992, "UXCG")];
  }
  [z(-236, -9, -169, "*%s3", -124) + nA(407, 440, "UXCG") + "se"]() {
    function o(r, a, g, c, I) {
      return jA(r - 331, a - 1017, r);
    }
    function t(r, a, g, c, I) {
      return te(a - -909, a - 308, g - 309, c - 265, c);
    }
    function e(r, a, g, c, I) {
      return cA(c, a - 314, g - -1429);
    }
    function A(r, a, g, c, I) {
      return cA(g, a - 55, I - -593);
    }
    if (!this[e(-294, -166, -169, "5QkA") + "se"]) {
      if (e(-266, -74, -190, "[XY6") !== o("eYr4", 1070)) return null;
      this[o("A[z3", 1244) + "se"] = void 0, _0x22a8a8[n(-292, "bym9", -386)](_0x14f153);
    }
    function n(r, a, g, c, I) {
      return z(r - 186, a - 348, g - 380, a, g - -173);
    }
    try {
      return t(66, 20, -21, "bVwO", 70) !== t(5, -17, 88, "UNfo", 111) ? this[o("g&4H", 1241, 1265, 1340, 1319) + t(-30, -120, -104, "2gv5", -243)] : JSON[n(-338, "LhR!", -435, -437, -409)](this[e(-70, -293, -175, "qVmx", -140) + "se"]);
    } catch (r) {
      if (A(745, 886, "bym9", 665, 786) !== n(-390, "qVmx", -391)) _0x233f61[o("@l[(", 1249)](_0x43526f);
      else {
        if (r instanceof Error) {
          if (n(-239, "*%s3", -356) === e(4, -55, -23, "8Jq8")) return _0x3a57fe[o("fGU0", 1274)](this[t(149, 46, 52, "L&zX") + "se"]);
          D[e(-150, -146, -46, "XZXs") + n(-168, "A[z3", -263)](r);
        }
        return null;
      }
    }
  }
  [te(902, 1024, 858, 1004, "r[c8") + nA(237, 190, "6VnF")]() {
    const o = this[e(1258, 1381, 1174, "GjtR") + e(1441, 1408, 1445, "bVwO") + "se"]();
    function t(n, r, a, g, c) {
      return nA(a - -202, r - 477, r);
    }
    function e(n, r, a, g, c) {
      return cA(g, r - 319, n - 34);
    }
    function A(n, r, a, g, c) {
      return jA(n - 411, a - -497, g);
    }
    return o?.[t(126, "UNfo", 116) + A(-385, -263, -316, "UXCG")]?.[A(-342, -496, -400, "K]Hj")] || [];
  }
  [jA(159, 150, "@l[(") + cA("L&zX", 1053, 1180) + z(-110, -153, -219, "xVqA", -97)]() {
    function o(n, r, a, g, c) {
      return z(n - 88, r - 162, a - 210, c, n - 1761);
    }
    function t(n, r, a, g, c) {
      return cA(r, r - 447, g - -608);
    }
    const e = this[o(1694, 1574, 1724, 1777, "rJ4w") + o(1517, 1554, 1402, 1559, "X*C5") + "se"]();
    function A(n, r, a, g, c) {
      return nA(r - 1074, r - 497, g);
    }
    return e?.[A(1390, 1388, 1410, "1lxN") + o(1651, 1614, 1731, 1689, "bVwO")]?.[t(503, "^D5f", 471, 580) + t(832, "[XY6", 844, 805)];
  }
}
function pn() {
  const i = ["WR50p8kwWOq", "W4WHWQZcG8k3", "pILwuG", "zIWQFmoD", "qsxcLSoKW4G", "BSkDf8odW40", "W5aSpCkvxW", "aSknWR/cSYBdOtWEWQxdGmol", "WRi6n8kw", "W6eHW6lcS8kk", "W7XMWQ53WPi", "W7XSWR1gWOy", "W71xWPxcUr3cMv5vxCoCjG", "phD6ymkfCSkUW79kW4HMW4K", "W4aimSk5wG", "W4CFo8kRxa", "AbLlWOf4", "hwHivrO", "W4akr1m", "WRSuW5FcTmklvSoUWPy", "W7ivnq", "W4qmufHZ", "W7ZcH8oDW5fZ", "gK3cPCorBG", "WQZcPYvcfa", "z8kWqKVcLmodkW", "ovJcU8oAyW", "W4jIoW", "l8oCvCoNW5i", "tvO9awO", "WRRcUCkSldy", "ArDuWPXS", "kY1awbW", "WRWxWPyy", "AcC7gSog", "WP3cJaNdISo8", "WRalWO0dla", "sCkbo8oBW5S", "B8o0eJa", "WRJdVmkfWONcLG", "qColWPldISob", "ECkKkq", "D8oBc8oslW", "kcTq", "CviSf2e", "WOtcQ8kjiYW", "CmofiJ5dA8ofbv1hW4q9", "i8otWOOsma", "WOO1jX81", "W69pW4ZcOCkE", "WRpdMSo7mvu", "Fmoiemocna", "r8oeWRxdM8oe", "umoWWQ/dOSoB", "zColW7RdTxy", "zX1tWOTQ", "WP7cKSkiWO3cKa", "W4isjSo+", "W7HSWRHwWPy", "W4TGo1xcHa", "whPSWPPyDxxcMmoKpmkZWOX8", "edHjta0", "lczxwsK", "xtKE", "yGPiWPTX", "W64HW6/cPSkm", "W69OlfpcGG", "WOJcUCknW44", "lcS2W4Kd", "sSo2WRpcQCow", "iCkpFhSb", "EmkUoSoWWQ8", "WOhcR8kiocK", "qZ8pW7VdHq", "rs3cGCoIW44", "W6FcSKKTWRW", "WOxcR8k2WPBcLa", "EYrJBCop", "zaPvWODW", "W7e6whPT", "CCojgSkFkW", "W67dL8otW544vMhdRa", "WPKhDx5KW6FdGq", "jComvdzQ", "rJujW7ddMa", "l8kFz0y", "W64DiZpdGG", "WOW1exZdHq", "lY1qxXe", "ysu8", "WO/dNulcMCoI", "W7Tti8o5WPC", "WRupbhBdVW", "A1OJg2S", "l8kFzqLx", "WRmoWO0CmG", "ocrLzSog", "xfG7", "wCoqW7VdRxu", "zZ9VFSoi", "WRlcP8kE", "W4CnW7VcSmkl", "qCoJWRi", "ecmNW58i", "kmkiBbTr", "W4mCkmovWOy", "WPz1lL/cTCkxWRG", "uSkeW6FdL8oT", "WRdcHCo0W4m", "WRhcI8o6W6Gs", "W4KCoSo+WPa", "jCokvJDi", "W40kBL5I", "WPZcHYxdQ8o+", "DmkeW4Hai8oWWPf3b8k5oa", "W4GqrfG", "WRhdMSo9mvK", "WRRcGCoPW6ej", "pILwuHa", "d8kYFM4G", "FCkIpSo6WPa", "vmomW7ZdShS", "WRGrW4ZdOfS", "cfBcVmoABG", "o2RcV8oBxG", "W67cHCk+qahdNbZcU8obW4bqz8ow", "WR7cLSoYW54t", "l8oxuJy", "AGxcOSoJW7m", "bsfhwrC", "kNBcNCkurG", "ce8Ug1BdTJe", "D8kZnmoNWPa", "dIuM", "lSokWPatyW", "wSoCW70", "ymoOetO", "W64HW6S", "o8k/rMlcMCoCWOi6W4PduG", "W5RcJKqbWOu", "WOe0ifOm", "tSkbW4RdNCou", "t8oBW4xdH2C", "sSowWRu", "BCkrEMSx", "CSoFdq", "W5RcNvKeWOK", "W7PwWPdcUrVdOdb2ySoEeSovfW", "WRxdM8onjL8", "dSkuCg0C", "CrLvWPTN", "iSkECa", "hr14W7L5", "W4imturY", "lCoEWPGgqq", "yaXcWQrR", "BmoObddcIG", "WPmOhxtdJG", "W70zpZpdGG", "dsRcMSo0W4G", "WQeaW4ddOfW", "WPNcOWrBaW", "W78so8o4", "WRFcPCkpccG", "W4pdPCowlHS", "W4Cyj8kSqa", "WRNcI8oPW6Gn", "lmoxrtX2", "W4hdO8kvdZO", "WRVcVCkAWO3dLq", "r8oPvXhdPq", "WP3cTJXrca", "DcjUFmot", "tcqdW63dMa", "W4PtiCo/WOa", "q8ouWRldQ8oe", "ACozCaHx", "W4lcNv8uWOq", "W4ldSKpcHCo4", "WP0+jYup", "kSouWPOsFG", "oSokwq", "imokwq", "W7SsiIxcHW", "tSoWWQNcTq", "kmojwWbH", "t148lwu", "WROwWOFcPSkXECoUWQXB", "wI3cH8oVW48", "uSoaWRZdTmoI", "W59kWQTfWOa", "W4KwlSoKWOe", "CCozDHHA", "W65fW4RcQmkw", "oCkapv0kW6b3WQ9qW4ZcO8ozWQy", "W6C8W77cQmkk", "i8kEzW", "WQ0rW5FdOv0", "r3pdGbnw", "W50Cpq", "W4PIkLJcNW", "WPldTv7cG8oZ", "fcCTW5G", "f8keW7pcNCkFWOlcOJNcQSo3W6Oe", "cmkaWQ3dSCoBtSoHaa", "WRZcUSkmctVdONe8Cq", "CCkZkCo7WPe", "s8obWORdRmo3", "W7zGWRG", "BSoJaXNdGW", "W5iVW7JcRW", "x8klW6ddKCov", "q2VdJG", "W6vjW53cGCkr", "tmkeW7/dNCoH", "kdXbCba", "FConW6xdOg0", "W5mmjSk2rG", "WRKqWPWjma", "W6xcJCk+qGNdK1pcQ8oBW7vpya", "bLJcVCoxyG", "ycXZrmoi", "W78iotm", "aCkyA1Od", "smoyWRZdISop", "tLGvbvy", "FCoZWPFcICoq", "W5jOg0NdNZuiWRm", "wCkkW73dGmo3", "WPJdIr5aW5GaWP8/WRhdOmovrmoe", "W4Gen8k9qq", "W7zGWR9xWP0", "WPBcUczgeG", "W4CioSkRsG", "W7rUWQ8", "t8oxjc9W", "aYC7W58i", "q8oTWQlcO8ok", "W5NcK0u", "wtCaW7FdJW", "WO/cRSkgWPpcHG", "k0VcU8oBEa", "W64ooc7dKW", "WOy1pq4", "gWPYW4r6", "WRGCWO0", "WQldKSkyWQeLy25/ewbSWPRdIq", "gmkyv2Sa", "oXP5W6jK", "W4/dGSofW7X/", "imkyD2Wx", "zH1tWQT3", "zCoxCc5s", "WPldPKxcNSoI", "pSk9Fxe"];
  return pn = function() {
    return i;
  }, pn();
}
const Hr = Ue(void 0);
Hr.displayName = "CommonConfigurationContext";
function qg() {
  const i = Qe(Hr);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return kA(s - 192, g);
  }
  function e(g, c, I, s, C) {
    return kA(c - 89, g);
  }
  function A(g, c, I, s, C) {
    return kA(s - -981, c);
  }
  const n = i();
  function r(g, c, I, s, C) {
    return kA(C - -199, c);
  }
  function a(g, c, I, s, C) {
    return kA(s - -409, C);
  }
  for (; ; )
    try {
      if (-parseInt(a(81, 93, 76, 87, "Q!]t")) / 1 * (parseInt(r(287, "hYC2", 282, 299, 287)) / 2) + parseInt(a(91, 98, 83, 86, "V3![")) / 3 * (-parseInt(e("U*Hg", 570, 562, 560, 576)) / 4) + parseInt(a(69, 78, 80, 81, "Pt#A")) / 5 + parseInt(a(78, 70, 64, 73, "5e(R")) / 6 * (-parseInt(r(296, "B]b0", 281, 288, 293)) / 7) + -parseInt(t("ML0*", 662, 676, 669, 670)) / 8 * (-parseInt(A(-516, "TZxA", -520, -509, -508)) / 9) + parseInt(t("R^I0", 690, 688, 685, 698)) / 10 + parseInt(r(296, "z@N2", 292, 298, 289)) / 11 * (-parseInt(e("Iop(", 574, 573, 564, 581)) / 12) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(mn, -15 * -61609 + 892996 + -931786);
function mn() {
  const i = ["wXRdRLBdH8oRWOjEAmodia", "xb/dQvRcSCoZWQPJvSoD", "AwmLwmo/W6GJW7qMt2q", "WP7dMhjFWOr5h8otWRHcWQK", "q2mbWPZdVse8WPjdoxdcNConW5u", "WPtdQ0PfsMG6xZuQ", "W5mvCSkhW6rBaa", "W6dcPxeKW5NcQftdK8kXW6vZetG", "jWxdOfj+W6ZdIM3cKa", "WPdcQ8oFWPtdP8kKW5C", "EfpcJM/dNJlcSu/dNCohWR4", "WQ7dVmojW6Llvmo8ASoDlq", "WQRdTConW6yWeCkCu8oqa8kCCSkf", "lmk0cc4Xw0RcM8kkW6HgW641", "n8k8uWNcVtuhxtv+", "nCk5pMhcRauMsa", "ygddMN89WQddM8kA", "z8k6lthcKGlcPSkNWQdcJmoQW6rm", "A1urWRnXAJePDSovW5effG", "bKxcTry", "sM8pW53cPgrhW6Hr", "W6FcJSo+W6xcOfGgWOGGWOhcQCkpzsi", "W4JcMYegW5e", "bCk8W63dH8kWWOxdRSkVs29cWPNdPG", "W6PnW6RcVSkSeSozuCoU", "WQNdVCooWRXgx8oyuSoi"];
  return mn = function() {
    return i;
  }, mn();
}
function kA(i, o) {
  i = i - 471;
  const t = mn();
  let e = t[i];
  if (kA.VgmqOT === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    kA.MsEBSx = g, kA.XTfwkt = {}, kA.VgmqOT = !0;
  }
  const n = t[-1 * 6170 + -1 * -3124 + 3046], r = i + n, a = kA.XTfwkt[r];
  return a ? e = a : (kA.ytyjoQ === void 0 && (kA.ytyjoQ = !0), e = kA.MsEBSx(e, o), kA.XTfwkt[r] = e), e;
}
function ZC() {
  const { assetsDirectoryPath: i } = qg();
  function o(n, r, a, g, c) {
    return kA(r - -950, c);
  }
  const [t, e] = sA();
  eA(() => {
    async function n() {
      const r = new jC();
      function a(c, I, s, C, Q) {
        return kA(C - 604, Q);
      }
      const g = new VC(r);
      await g[a(1104, 1084, 1094, 1095, "TZxA")](i), e(g);
    }
    n();
  }, [i]);
  const A = {};
  return A[o(-467, -456, -454, -466, "^eTQ") + "le"] = t, A;
}
function UA(i, o) {
  i = i - (-1 * 8567 + -3 * 1256 + 12533);
  var t = yn(), e = t[i];
  if (UA.FFukpH === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (var u = 0, h = s.length; u < h; u++)
        C += "%" + ("00" + s.charCodeAt(u).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, n = function(c, I) {
      var s = [], C = 0, Q, E = "";
      c = A(c);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (var d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    UA.wBMVEp = n, UA.WeZvZv = {}, UA.FFukpH = !0;
  }
  var r = t[-2 * -4276 + 1308 + 10 * -986], a = i + r, g = UA.WeZvZv[a];
  return g ? e = g : (UA.pRkECp === void 0 && (UA.pRkECp = !0), e = UA.wBMVEp(e, o), UA.WeZvZv[a] = e), e;
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return UA(I - 833, c);
  }
  function e(a, g, c, I, s) {
    return UA(c - -759, g);
  }
  var A = i();
  function n(a, g, c, I, s) {
    return UA(g - -526, c);
  }
  for (; ; )
    try {
      var r = parseInt(t(1027, 1030, "wAGg", 1038, 1038)) / 1 + -parseInt(n(-307, -313, "m5AM", -320, -308)) / 2 * (-parseInt(n(-305, -316, "907A", -311, -311)) / 3) + parseInt(n(-324, -328, "lDiV", -322, -333)) / 4 + parseInt(t(1055, 1047, "rIXj", 1051, 1057)) / 5 + -parseInt(n(-306, -314, "s3HS", -308, -306)) / 6 + parseInt(n(-337, -326, "m5AM", -327, -335)) / 7 * (-parseInt(e(-548, "907A", -555, -561, -547)) / 8) + -parseInt(t(1041, 1040, "vx3G", 1044, 1048)) / 9;
      if (r === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(yn, 1771725 + 121360 * -12 + 655190);
function zC({ crosshatch: i }) {
  function o(e, A, n, r, a) {
    return UA(r - 753, e);
  }
  function t(e, A, n, r, a) {
    return UA(e - -920, a);
  }
  return i?.[t(-714, -705, -714, -709, "9GPv") + "id"] ? Mt[t(-704, -713, -715, -710, "lDiV") + "r"] : Mt[o("vngu", 966, 977, 967)];
}
function yn() {
  var i = ["cYLJfrPlWPZcNHJdNq", "W64BcwDkamoPnMftW4K", "pCkkWO14W7ZcVcGyWOtcGCkrf8kd", "tSoidWDy", "W6jyW790W6ddTZ7dKSkkWOxdKCo2WOy", "aCoYemk6W7WRWQlcTmo2kG", "y8osmqyjW6PiWR/dKGldQGS6", "W60BdwaMfCovpuH+", "WO8JuMpcHMdcQguDAb3cN3Hw", "h8kEnCkJWOa2pYdcJ8kkW7VcI24", "W4m7j1mRwG8LcSod", "WQpcRSoyvZ0", "dmkxW4XRiqJcM119W5RcN8ke", "xI3cOmkroq", "W77dJ8oKzmoiomoBWRuHtr4", "W4XrWRCgW4NdKCk0w03cVCkRs8o5", "lNddVSoiAuBdMNOSEZpdJq", "oCkjWOL+W7xcTIWJWP7cTSkSeCkj", "W4K/lsCUqdGJjW", "WRLnWPRdVSo3W6NdPrqm", "W43dKCodW7uGaSkUWPvFeW3dRSoQbq"];
  return yn = function() {
    return i;
  }, yn();
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return BA(s - 382, g);
  }
  function e(a, g, c, I, s) {
    return BA(s - 580, a);
  }
  function A(a, g, c, I, s) {
    return BA(a - 564, c);
  }
  function n(a, g, c, I, s) {
    return BA(I - -66, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(845, 840, "dMQd", 860, 842)) / 1 + -parseInt(e("uiaI", 833, 845, 834, 848)) / 2 * (-parseInt(e("2YF0", 868, 859, 876, 868)) / 3) + -parseInt(n(219, "070O", 198, 205, 207)) / 4 + -parseInt(n(218, "dMQd", 209, 218, 222)) / 5 + parseInt(t(671, "4%]6", 683, 673, 679)) / 6 + -parseInt(t(667, "oTIC", 668, 673, 667)) / 7 + -parseInt(e("m5$A", 855, 876, 875, 870)) / 8 === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(wn, 41 * 3946 + 517459 + 1506);
function XC({ children: i }) {
  const { bramble: o } = ZC(), t = uA(() => ({ redfin: zC({ crosshatch: o?.[e(-512, -508, "HpQO", -517) + e(-511, -511, "4odE", -524) + r(-370, -360, "OOow", -375, -360) + "t"]() }), crosshatch: o?.[g(-379, -364, -377, "g0bo") + r(-368, -356, "dMQd", -344, -354) + a(-12, "OOow") + "t"](), bramble: o, wasLicenseValidated: o?.[r(-367, -362, "J^f^", -350, -353) + g(-362, -351, -355, "m5$A") + a(2, "Jsle") + a(14, "OP^E")]() }), [o]);
  function e(c, I, s, C, Q) {
    return BA(C - -806, s);
  }
  function A(c, I, s, C, Q) {
    return BA(C - -370, Q);
  }
  const n = {};
  n[r(-339, -345, "CLXj", -335, -349)] = t;
  function r(c, I, s, C, Q) {
    return BA(Q - -629, s);
  }
  n[g(-375, -366, -353, "veGr") + A(-71, -68, -87, -83, "rnz7")] = i;
  function a(c, I, s, C, Q) {
    return BA(c - -281, I);
  }
  function g(c, I, s, C, Q) {
    return BA(I - -643, C);
  }
  return k(xn[g(-350, -357, -356, "J^f^") + A(-89, -62, -62, -77, "dMQd")], n);
}
function BA(i, o) {
  i = i - 268;
  const t = wn();
  let e = t[i];
  if (BA.cUcaTV === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    BA.RQiiAf = g, BA.kdizeF = {}, BA.cUcaTV = !0;
  }
  const n = t[0], r = i + n, a = BA.kdizeF[r];
  return a ? e = a : (BA.YzhHTR === void 0 && (BA.YzhHTR = !0), e = BA.RQiiAf(e, o), BA.kdizeF[r] = e), e;
}
function wn() {
  const i = ["h8oUhgSUa8oCW43cL8kRpmkb", "W5RdJr7dR8kjsbXHW4znW4pcHSk8", "W4TjWOZdNSk8WOBdJq", "cCktvHFcOq", "WPldJK0wW7/cPgtcIe14xrnZ", "xSkZWQ03WQ/cOvaNfmoJWOn9Dq", "pCk8W7LpW6NdMSo1WPVcI2OkW6G", "WOdcQ8oAWPz8zmkzr8oon0qF", "WQqsgCkjWQpcNCo+DJrAnmop", "WQddNSo/WRVdTG", "xCooWOBcTmot", "W6y0dSkWbW", "EqyHyIpdU1m", "DLCdjrK", "iLjEnYC", "W7hcISkLW7dcPhlcPX1ekH3cOq", "B1lcTr8l", "WOtcMhHOua", "W7dcImkLW7hcOxZdOIXAaWdcT8oR", "smoOW6hdOSoHWONcGmkVcWPUCW", "ESoDWPRcJSot", "ra7dJq", "W4XRW77cMmoKW6ddVxytWPNcHsa", "WO/dPCkxWR12", "ECoNWPddRwyGW7OLbSoMqCk4", "gSoLewuUbmk2W6/cSCkupCk1W6W", "lmk6W4FcQte", "WQFdNSoJ", "WOxcQ8oyWPH/BmoEuCovmKGTla", "W44CdCoj"];
  return wn = function() {
    return i;
  }, wn();
}
const $C = -112 + 1239 * 2 + -366;
class AB {
  transactionCountingToken;
  constructor(o) {
    this.transactionCountingToken = o;
  }
  async validateToken() {
    const o = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), $C), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const n = {};
    n.method = "POST", n.headers = A, n.signal = t.signal;
    const r = n, a = await fetch(o, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== -2694 * -1 + -7646 + 5352 && a.status !== -4384 + 1139 * -3 + 8202 : !0;
  }
}
class eB {
  #A;
  #e;
  #t;
  #o;
  #n;
  #i;
  #r;
  #a;
  constructor({ hwids: o, tokenHandler: t, transactionType: e }) {
    this.#A = t, this.#n = o, this.#a = e, this.#i = window.location.origin, this.#r = "8.0.3";
  }
  async init(o) {
    if (this.#t = this.shouldCountTransactions(o), _r.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), Pr()) {
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
  shouldCountTransactions(o) {
    return o?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !o?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] : o?.dotWeb?.features?.["realTimeTransactionReportingEnabled"] ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!this.#t || !this.#e) return;
    const o = this.prepareTransactions();
    this.sendTransactions(o);
  }
  prepareTransactions() {
    const o = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = this.#n, e.id = this.#i, e.version = this.#r;
    const A = {};
    A.application = e, A.sessionId = o, A.timestamp = t, A.transactionId = o, A.transactionType = this.#a;
    const n = A, r = {};
    return r.transactions = [n], r;
  }
  sendTransactions(o) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + this.#o;
    const A = { method: "POST", headers: e, body: JSON.stringify(o) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return this.#e || !1;
  }
}
function tB(i, o) {
  const { crosshatch: t, bramble: e } = zn(), [A, n] = sA(null);
  eA(() => {
    if (!t) return;
    (async () => {
      const g = new AB(o), c = new eB({ hwids: e.getHwids(), tokenHandler: g, transactionType: i });
      await c.init(t), n(c);
    })();
  }, [o, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function oB({
  children: i,
  transactionCountingToken: o,
  transactionType: t
}) {
  const { transactionCounting: e } = tB(t, o), A = uA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ k(ln.Provider, { value: A, children: i });
}
const _e = {};
_e.FACE = "web-capture-face", _e.DOCUMENT = "web-capture-document", _e.MAGNIFEYE = "web-capture-magnifeye", _e.SMILE = "web-capture-smile", _e.PALM = "web-capture-palm", _e.EYEGAZE = "web-capture-eyegaze", _e.MULTIRANGE = "web-capture-multirange";
const nB = _e;
var YA = function() {
  return YA = Object.assign || function(o) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]);
    }
    return o;
  }, YA.apply(this, arguments);
};
function Lt(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, A = o.length, n; e < A; e++)
    (n || !(e in o)) && (n || (n = Array.prototype.slice.call(o, 0, e)), n[e] = o[e]);
  return i.concat(n || Array.prototype.slice.call(o));
}
function iB(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var rB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, aB = iB(function(i) {
  return rB.test(i) || i.charCodeAt(-1 * -8987 + 2 * -2753 + -3481) === 2201 + -2 * 1045 && i.charCodeAt(1606 + 17 * 383 + -8116) === 1 * 4323 + 7288 + -11501 * 1 && i.charCodeAt(-4987 + 3 * 1663) < -4993 * -1 + 3 * 843 + -1 * 7431;
});
function gB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var di, Ja;
function sB() {
  return Ja || (Ja = 1, di = function(o, t, e, A) {
    var n = e ? e.call(A, o, t) : void 0;
    if (n !== void 0) return !!n;
    if (o === t) return !0;
    if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
    var r = Object.keys(o), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), c = 3 * -2239 + -1 * 9491 + -16 * -1013; c < r.length; c++) {
      var I = r[c];
      if (!g(I)) return !1;
      var s = o[I], C = t[I];
      if (n = e ? e.call(A, s, C, I) : void 0, n === !1 || n === void 0 && s !== C) return !1;
    }
    return !0;
  }), di;
}
var cB = sB();
const IB = /* @__PURE__ */ gB(cB);
var K = "-ms-", co = "-moz-", Y = "-webkit-", Vg = "comm", Ai = "rule", Kr = "decl", CB = "@import", Zg = "@keyframes", BB = "@layer", zg = Math.abs, jr = String.fromCharCode, ar = Object.assign;
function xB(i, o) {
  return lA(i, -5955 * -1 + -986 + 1 * -4969) ^ -4676 + 4721 * 1 ? (((o << -8703 + 5 * 1741 ^ lA(i, 718 + 653 * 7 + -5289)) << -3509 + -1 * -8245 + -4734 ^ lA(i, 4 * 2426 + -4319 * -2 + -18341)) << 2 ^ lA(i, -1 * -4705 + 515 * 3 + -6248)) << 2 * -4295 + -1 * -5749 + 2843 ^ lA(i, 1 * -4459 + -2884 + 7346) : 5037 * 1 + -1189 * 8 + 1 * 4475;
}
function Xg(i) {
  return i.trim();
}
function Le(i, o) {
  return (i = o.exec(i)) ? i[0] : i;
}
function F(i, o, t) {
  return i.replace(o, t);
}
function _o(i, o, t) {
  return i.indexOf(o, t);
}
function lA(i, o) {
  return i.charCodeAt(o) | 1 * 7481 + 928 * 8 + 1 * -14905;
}
function Ot(i, o, t) {
  return i.slice(o, t);
}
function ye(i) {
  return i.length;
}
function $g(i) {
  return i.length;
}
function io(i, o) {
  return o.push(i), i;
}
function QB(i, o) {
  return i.map(o).join("");
}
function Ua(i, o) {
  return i.filter(function(t) {
    return !Le(t, o);
  });
}
var ei = -1824 + -365 * -5, Jt = 722 * -7 + -1295 + 6350, As = -404 + -1 * 6383 + 6787, ge = 4673 * 1 + -1 * 7759 + 3086, oA = 18514 + -9257 * 2, Kt = "";
function ti(i, o, t, e, A, n, r, a) {
  var g = {};
  return g.value = i, g.root = o, g.parent = t, g.type = e, g.props = A, g.children = n, g.line = ei, g.column = Jt, g.length = r, g.return = "", g.siblings = a, g;
}
function Te(i, o) {
  return ar(ti("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function pt(i) {
  for (; i.root; ) i = Te(i.root, { children: [i] });
  io(i, i.siblings);
}
function EB() {
  return oA;
}
function dB() {
  return oA = ge > -6333 + 6333 * 1 ? lA(Kt, --ge) : -2434 * 2 + -2043 + 6911, Jt--, oA === 5 * -566 + 720 + 2120 && (Jt = 8411 * 1 + 978 + -9388, ei--), oA;
}
function Be() {
  return oA = ge < As ? lA(Kt, ge++) : 9067 + 5 * 1063 + -14382, Jt++, oA === 10 && (Jt = 1, ei++), oA;
}
function Bt() {
  return lA(Kt, ge);
}
function To() {
  return ge;
}
function oi(i, o) {
  return Ot(Kt, i, o);
}
function gr(i) {
  switch (i) {
    case -505 + 1 * 505:
    case 5759 + -2453 * 4 + 4062:
    case -5901 + 5911 * 1:
    case 9646 + 6 * 719 + -1 * 13947:
    case -3 * -2083 + 8276 + -3 * 4831:
      return -1394 + -1 * 2418 + 3817;
    case -8991 + 1 * 4855 + 4169:
    case 43:
    case 9461 * 1 + 9229 + 18646 * -1:
    case 3 * 2627 + -1 * 5019 + -2815:
    case 7490 + 2476 * -3:
    case 64:
    case 6119 + 4 * 2381 + -15517:
    case -3039 + -1973 * 1 + 461 * 11:
    case 1 * -1175 + 1589 + 291 * -1:
    case 125:
      return 4;
    case -8397 + -1 * 5223 + 13678:
      return -2 * -4793 + -1 * 6108 + -695 * 5;
    case 9083 + 6659 * -1 + -2390:
    case -2309 * -3 + -1 * 8691 + 1803:
    case 645 + 10 * -902 + -1683 * -5:
    case -6224 + 1 * -3277 + -8 * -1199:
      return 2;
    case 5884 + 1 * -5306 + 1 * -537:
    case 93:
      return 3499 * 1 + 2 * 2052 + -7602;
  }
  return 100 + -6 * 887 + 5222 * 1;
}
function lB(i) {
  return ei = Jt = -5 * 1517 + -2 * 3827 + 15240, As = ye(Kt = i), ge = 0, [];
}
function uB(i) {
  return Kt = "", i;
}
function li(i) {
  return Xg(oi(ge - (521 * 19 + 1021 * 6 + -16024), sr(i === 91 ? i + (4 * -1384 + 15 * -391 + 11403) : i === 40 ? i + (1256 + -4147 * -1 + -5402) : i)));
}
function fB(i) {
  for (; (oA = Bt()) && oA < 4602 + 1523 * -3; ) Be();
  return gr(i) > -3844 + 1 * 3846 || gr(oA) > 3 ? "" : " ";
}
function hB(i, o) {
  for (; --o && Be() && !(oA < -3 * -319 + -20 * 337 + 5831 || oA > -7210 + 1828 * 4 || oA > 57 && oA < 65 || oA > 4001 * 2 + -8085 + 153 && oA < -1 * 2859 + -5463 + 8419 * 1); ) ;
  return oi(i, To() + (o < 6 && Bt() == 5991 * 1 + 1267 + -7226 && Be() == 392 + 311 * 5 + -1 * 1915));
}
function sr(i) {
  for (; Be(); ) switch (oA) {
    case i:
      return ge;
    case -764 * -8 + 1910 + -1997 * 4:
    case -16684 + 16723 * 1:
      i !== 34 && i !== 39 && sr(oA);
      break;
    case -3818 + -1270 * 6 + 11478:
      i === 41 && sr(i);
      break;
    case 709 * 1 + -7809 + 7192:
      Be();
      break;
  }
  return ge;
}
function pB(i, o) {
  for (; Be() && i + oA !== 3454 + 1 * -3407 + (-1 * 6373 + -1326 + 7709); ) if (i + oA === -3 * -3119 + 6627 + -15942 + (169 + -1 * -3897 + 503 * -8) && Bt() === -2376 + -13 * -410 + -2907) break;
  return "/*" + oi(o, ge - (3917 * -1 + -1 * -9749 + -5831)) + "*" + jr(i === -1015 * 9 + -6702 + 3971 * 4 ? i : Be());
}
function mB(i) {
  for (; !gr(Bt()); ) Be();
  return oi(i, ge);
}
function yB(i) {
  return uB(Ho("", null, null, null, [""], i = lB(i), -6936 + -408 * -17, [807 * 11 + -1955 + 1 * -6922], i));
}
function Ho(i, o, t, e, A, n, r, a, g) {
  for (var c = 0, I = -6 + 1429 * 5 + -7139, s = r, C = -1110 + 1 * -3374 + 4484, Q = -9417 + -3 * -3139, E = -2883 * 3 + 1513 + 7136, B = 1 * 5021 + 8550 + -13570, d = -8856 + -5925 * 1 + 1 * 14782, u = -3989 * -1 + 6912 + -10900, h = 0, p = "", m = A, w = n, b = e, y = p; d; ) switch (E = h, h = Be()) {
    case 5382 + -5342 * 1:
      if (E != 4991 + -4654 * 2 + 4425 && lA(y, s - (9501 + -3134 * -1 + 12634 * -1)) == -1 * -6646 + -7487 + 899) {
        _o(y += F(li(h), "&", "&\f"), "&\f", zg(c ? a[c - (5358 + 3323 * 1 + -8680)] : -6256 + 1 * -1205 + 7461)) != -1 && (u = -1);
        break;
      }
    case 2087 * -1 + 2 * 2613 + -3105:
    case 39:
    case -24 * 378 + -7598 + 16761:
      y += li(h);
      break;
    case 5597 * 1 + 2813 + -1 * 8401:
    case -647 * -10 + -7584 + 562 * 2:
    case 13:
    case 32:
      y += fB(E);
      break;
    case -7037 * -1 + -3295 + -2 * 1825:
      y += hB(To() - (3160 + 15 * -274 + 951), 5078 + 1 * -3107 + -1964);
      continue;
    case 47:
      switch (Bt()) {
        case 42:
        case 1429 * -1 + 11 * 762 + 3 * -2302:
          io(wB(pB(Be(), To()), o, t, g), g);
          break;
        default:
          y += "/";
      }
      break;
    case 123 * B:
      a[c++] = ye(y) * u;
    case (1171 + -2 * 523) * B:
    case 59:
    case -3993 + -6 * -349 + 1899:
      switch (h) {
        case -874 * -4 + 7832 + -11328:
        case 1 * -6178 + 1739 + 2282 * 2:
          d = 0;
        case -1 * -3107 + 532 + -3580 + I:
          u == -1 && (y = F(y, /\f/g, "")), Q > 286 + -1 * -1719 + -2005 && ye(y) - s && io(Q > 7279 + 8213 * -1 + -322 * -3 ? Pa(y + ";", e, t, s - (398 * 11 + -1577 + -2800), g) : Pa(F(y, " ", "") + ";", e, t, s - 2, g), g);
          break;
        case 59:
          y += ";";
        default:
          if (io(b = Ya(y, o, t, c, I, A, a, p, m = [], w = [], s, n), n), h === 16213 + -2 * 8045)
            if (I === -3888 + -3051 * 3 + 13041) Ho(y, o, b, b, m, n, s, a, w);
            else switch (C === -2445 * 2 + 3143 * -2 + 11275 && lA(y, 3) === -8941 * -1 + -396 * 24 + 673 ? -5 * 1754 + 2150 + 480 * 14 : C) {
              case -1320 + -1 * 4201 + 5621:
              case -7552 + -2620 * 1 + 10280:
              case 109:
              case 389 * -25 + 4760 + -635 * -8:
                Ho(i, b, b, e && io(Ya(i, b, b, 1 * 8913 + -795 + -8118, 0, A, a, p, A, m = [], s, w), w), A, w, s, a, e ? m : w);
                break;
              default:
                Ho(y, b, b, b, [""], w, 2297 + -1 * 2297, a, w);
            }
      }
      c = I = Q = -3235 + 5 * 647, B = u = -1860 + -1 * 4670 + -6531 * -1, p = y = "", s = r;
      break;
    case -1 * -9055 + -5163 * -1 + -14160:
      s = -4648 + 4649 * 1 + ye(y), Q = E;
    default:
      if (B < 1) {
        if (h == 2026 * -2 + -1168 + 5343) --B;
        else if (h == 125 && B++ == 0 && dB() == -1466 * -1 + -7090 + -5749 * -1) continue;
      }
      switch (y += jr(h), h * B) {
        case 38:
          u = I > -8358 * -1 + 1446 * -4 + -2574 ? 1 : (y += "\f", -1);
          break;
        case -2 * -1466 + -5309 + 2421 * 1:
          a[c++] = (ye(y) - (1576 * 2 + -1102 + -2049)) * u, u = 1;
          break;
        case 64:
          Bt() === 1867 + -911 * 2 && (y += li(Be())), C = Bt(), I = s = ye(p = y += mB(To())), h++;
          break;
        case 3 * -2814 + -2 * -3919 + 649 * 1:
          E === 8178 + 617 * -10 + -1963 * 1 && ye(y) == -16 * 319 + -9828 + -3 * -4978 && (B = 0);
      }
  }
  return n;
}
function Ya(i, o, t, e, A, n, r, a, g, c, I, s) {
  for (var C = A - 1, Q = A === 0 ? n : [""], E = $g(Q), B = 0, d = -2 * 2931 + 299 * -16 + 10646, u = -1386 + 4 * 499 + -610; B < e; ++B) for (var h = 3974 * 2 + 614 * -6 + -2 * 2132, p = Ot(i, C + (4768 + 7 * 1303 + -13888), C = zg(d = r[B])), m = i; h < E; ++h) (m = Xg(d > -6749 + -6749 * -1 ? Q[h] + " " + p : F(p, /&\f/g, Q[h]))) && (g[u++] = m);
  return ti(i, o, t, A === -13191 + 3 * 4397 ? Ai : a, g, c, I, s);
}
function wB(i, o, t, e) {
  return ti(i, o, t, Vg, jr(EB()), Ot(i, 8939 + 3170 * -1 + -5767, -2), -6615 + 3677 * 1 + 2938 * 1, e);
}
function Pa(i, o, t, e, A) {
  return ti(i, o, t, Kr, Ot(i, 3513 + -1 * 3513, e), Ot(i, e + 1, -1), e, A);
}
function es(i, o, t) {
  switch (xB(i, o)) {
    case -1 * -9083 + -1 * 608 + -3372:
      return Y + "print-" + i + i;
    case -21981 + -1 * -27718:
    case 521 * -1 + -7371 + 12093:
    case -9111 * -1 + -2674 * -1 + 538 * -16:
    case 1717 + -6728 * 1 + 8444:
    case 4298 + 1623 * -3 + 2212:
    case 3 * -1207 + -9657 * -1 + -1579:
    case 1 * 1189 + 516 + 1216:
    case 5572:
    case 1 * -11699 + -3949 * 1 + 5501 * 4:
    case 1968 * 5 + 10220 + -14216:
    case 2 * 2755 + -218 + -2101:
    case 1100 + -3 * 919 + -14 * -593:
    case 2507 * -2 + 3304 + 4715:
    case 185 + -5 * 1873 + -15571 * -1:
    case -6 * 1394 + 5825 + 8418:
    case 8275 + 1326 * -2:
    case -20478 + 8871 * 3:
    case 4599:
    case 7273 * -1 + -2595 + -1 * -14723:
    case 2426 + 1789 * 1:
    case -601 * -11 + -10932 + 10710:
    case 1 * 2636 + -1038 * 6 + 8701:
    case -22 * -398 + 3992 + -7383:
    case -1083 + -1 * -10271 + -3567:
    case 14972 + 1013 * -11:
      return Y + i + i;
    case -1076 * -7 + -425 + -2318:
      return co + i + i;
    case 918 + -4781 * -1 + -350:
    case 4246:
    case -6231 + 11041 * 1:
    case -11661 + 13 * 1433:
    case -3611 + -383 * 7 + 9048:
      return Y + i + co + i + K + i + i;
    case -3863 + -10657 * -1 + -858:
      switch (lA(i, o + 11)) {
        case -1 * -5667 + -471 * 1 + -5082:
          return Y + i + K + F(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 1455 + -340 * -3 + -2367:
          return Y + i + K + F(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 334 + -9992 * 1 + 9703:
          return Y + i + K + F(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 10217 + 1376 * 1 + -4765:
    case -4 * 927 + -4 * 604 + -12 * -866:
    case 3939 + -269 * 28 + 6496:
      return Y + i + K + i + i;
    case -2 * -2281 + -3017 + 6 * 770:
      return Y + i + K + "flex-" + i + i;
    case -5 * 703 + -5904 + 14606:
      return Y + i + F(i, /(\w+).+(:[^]+)/, Y + "box-$1$2" + K + "flex-$1$2") + i;
    case 5443:
      return Y + i + K + "flex-item-" + F(i, /flex-|-self/g, "") + (Le(i, /flex-|baseline/) ? "" : K + "grid-row-" + F(i, /flex-|-self/g, "")) + i;
    case 4675:
      return Y + i + K + "flex-line-pack" + F(i, /align-content|flex-|-self/g, "") + i;
    case -1 * -4694 + -1 * -6754 + -5900:
      return Y + i + K + F(i, "shrink", "negative") + i;
    case 5292:
      return Y + i + K + F(i, "basis", "preferred-size") + i;
    case 6060:
      return Y + "box-" + F(i, "-grow", "") + Y + i + K + F(i, "grow", "positive") + i;
    case -50 + -3491 * 1 + 8095:
      return Y + F(i, /([^-])(transform)/g, "$1" + Y + "$2") + i;
    case -3617 * -1 + 236 + 2334:
      return F(F(F(i, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), i, "") + i;
    case 9050 + 443 * -17 + -568 * -7:
    case -303 * 4 + -480 + -1 * -5651:
      return F(i, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return F(F(i, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + K + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + i + i;
    case 949 * -3 + 2364 + -4683 * -1:
      if (!Le(i, /flex-|baseline/)) return K + "grid-column-align" + Ot(i, o) + i;
      break;
    case 1 * 5579 + 1983 * -1 + -1004:
    case -9794 + 8743 * 1 + 4411 * 1:
      return K + F(i, "template-", "") + i;
    case -1506 + -1178 * -5:
    case 1961 + -281 * 6 + 3341:
      return t && t.some(function(e, A) {
        return o = A, Le(e.props, /grid-\w+-end/);
      }) ? ~_o(i + (t = t[o].value), "span", 1 * 2083 + -5281 + 3198) ? i : K + F(i, "-start", "") + i + K + "grid-row-span:" + (~_o(t, "span", -5147 * -1 + -5148 + 1) ? Le(t, /\d+/) : +Le(t, /\d+/) - +Le(i, /\d+/)) + ";" : K + F(i, "-start", "") + i;
    case -293 * -21 + 5 * -697 + -2228 * -1:
    case 4128:
      return t && t.some(function(e) {
        return Le(e.props, /grid-\w+-start/);
      }) ? i : K + F(F(i, "-end", "-span"), "span ", "") + i;
    case -3036 + 8507 * 1 + 688 * -2:
    case -8994 + -2687 * 2 + 17951:
    case 5816 + -4321 * -1 + -6069:
    case 3681 + 7691 * -1 + -6542 * -1:
      return F(i, /(.+)-inline(.+)/, Y + "$1$2") + i;
    case 2 * -6439 + -9438 + -3 * -10144:
    case 1135 + -2543 * 2 + 734 * 15:
    case -5260 + 1 * 1517 + 2374 * 4:
    case -5857 + -1563 * -7 + 451:
    case 7359 + 7313 * -1 + 5399 * 1:
    case -5910 + -17 * -683:
    case -1 * 8759 + -15 * -555 + 5367:
    case 4677:
    case -1 * -3757 + -1520 + 4 * 824:
    case -984 * -9 + -8982 + 5915:
    case 7990 + -2969 * 1:
    case 4765:
      if (ye(i) - (-1531 * 1 + 965 + 567) - o > 6) switch (lA(i, o + 1)) {
        case -1791 * 5 + -1 * 9367 + 18431:
          if (lA(i, o + 4) !== -8269 * 1 + 8828 + 2 * -257) break;
        case -1 * -7829 + -9017 * -1 + -16744:
          return F(i, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + co + (lA(i, o + (-7080 + -3112 * 1 + 10195)) == 108 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~_o(i, "stretch", -5943 + 1 * 5943) ? es(F(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case 10 * -626 + 2264 + -4 * -2287:
    case 8301 + -11 * -1027 + -13678:
      return F(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, n, r, a, g, c) {
        return K + A + ":" + n + c + (r ? K + A + "-span:" + (a ? g : +g - +n) + c : "") + i;
      });
    case 1 * -3650 + -8793 + 17392:
      if (lA(i, o + (-21 * -391 + -58 + -8147 * 1)) === 1 * 8047 + -2 * -311 + -4 * 2137) return F(i, ":", ":" + Y) + i;
      break;
    case 6444:
      switch (lA(i, lA(i, 4613 * -1 + 5472 + -845) === -7 * -363 + 9030 + 34 * -339 ? 349 * 15 + 597 * 8 + 1 * -9993 : -3325 + 1025 * -5 + 1 * 8461)) {
        case -1955 + 415 * 5:
          return F(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Y + (lA(i, -5518 + 1 * 5532) === 2733 * -1 + -9984 + 12762 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + K + "$2box$3") + i;
        case 3043 + -2 * -1490 + -5923 * 1:
          return F(i, ":", ":" + K) + i;
      }
      break;
    case -7342 + -1 * -6189 + -4 * -1718:
    case 3740 + -1 * 1093:
    case -4111 * 1 + -431 * -19 + 1 * -1943:
    case 3927:
    case -727 + -3118 * -1:
      return F(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Dn(i, o) {
  for (var t = "", e = -4876 * -1 + -4367 * -1 + -9243; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function DB(i, o, t, e) {
  switch (i.type) {
    case BB:
      if (i.children.length) break;
    case CB:
    case Kr:
      return i.return = i.return || i.value;
    case Vg:
      return "";
    case Zg:
      return i.return = i.value + "{" + Dn(i.children, e) + "}";
    case Ai:
      if (!ye(i.value = i.props.join(","))) return "";
  }
  return ye(t = Dn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function bB(i) {
  var o = $g(i);
  return function(t, e, A, n) {
    for (var r = "", a = 0; a < o; a++) r += i[a](t, e, A, n) || "";
    return r;
  };
}
function kB(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function SB(i, o, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Kr:
        i.return = es(i.value, i.length, t);
        return;
      case Zg:
        return Dn([Te(i, { value: F(i.value, "@", "@" + Y) })], e);
      case Ai:
        if (i.length) return QB(t = i.props, function(A) {
          switch (Le(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              pt(Te(i, { props: [F(A, /:(read-\w+)/, ":" + co + "$1")] }));
              var n = {};
              n.props = [A], pt(Te(i, n)), ar(i, { props: Ua(t, e) });
              break;
            case "::placeholder":
              pt(Te(i, { props: [F(A, /:(plac\w+)/, ":" + Y + "input-$1")] })), pt(Te(i, { props: [F(A, /:(plac\w+)/, ":" + co + "$1")] })), pt(Te(i, { props: [F(A, /:(plac\w+)/, K + "input-$1")] }));
              var r = {};
              r.props = [A], pt(Te(i, r)), ar(i, { props: Ua(t, e) });
              break;
          }
          return "";
        });
    }
}
var v = {};
v.animationIterationCount = 1, v.aspectRatio = 1, v.borderImageOutset = 1, v.borderImageSlice = 1, v.borderImageWidth = 1, v.boxFlex = 1, v.boxFlexGroup = 1, v.boxOrdinalGroup = 1, v.columnCount = 1, v.columns = 1, v.flex = 1, v.flexGrow = 1, v.flexPositive = 1, v.flexShrink = 1, v.flexNegative = 1, v.flexOrder = 1, v.gridRow = 1, v.gridRowEnd = 1, v.gridRowSpan = 1, v.gridRowStart = 1, v.gridColumn = 1, v.gridColumnEnd = 1, v.gridColumnSpan = 1, v.gridColumnStart = 1, v.msGridRow = 1, v.msGridRowSpan = 1, v.msGridColumn = 1, v.msGridColumnSpan = 1, v.fontWeight = 1, v.lineHeight = 1, v.opacity = 1, v.order = 1, v.orphans = 1, v.tabSize = 1, v.widows = 1, v.zIndex = 1, v.zoom = 1, v.WebkitLineClamp = 1, v.fillOpacity = 1, v.floodOpacity = 1, v.stopOpacity = 1, v.strokeDasharray = 1, v.strokeDashoffset = 1, v.strokeMiterlimit = 1, v.strokeOpacity = 1, v.strokeWidth = 1;
var GB = v, U = {}, Et = typeof process < "u" && U !== void 0 && (U.REACT_APP_SC_ATTR || U.SC_ATTR) || "data-styled", ts = "active", os = "data-styled-version", ni = "6.1.19", qr = `/*!sc*/
`, bn = typeof window < "u" && typeof document < "u", NB = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && U !== void 0 && U.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && U.REACT_APP_SC_DISABLE_SPEEDY !== "" ? U.REACT_APP_SC_DISABLE_SPEEDY !== "false" && U.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && U !== void 0 && U.SC_DISABLE_SPEEDY !== void 0 && U.SC_DISABLE_SPEEDY !== "" ? U.SC_DISABLE_SPEEDY !== "false" && U.SC_DISABLE_SPEEDY : U.NODE_ENV !== "production"), _a = /invalid hook call/i, Go = /* @__PURE__ */ new Set(), RB = function(i, o) {
  if (U.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var n = !0;
      console.error = function(r) {
        for (var a = [], g = 1037 + -563 * -5 + 3851 * -1; g < arguments.length; g++) a[g - (-4023 + 4 * 1006)] = arguments[g];
        _a.test(r) ? (n = !1, Go.delete(e)) : A.apply(void 0, Lt([r], a, !1));
      }, _A(), n && !Go.has(e) && (console.warn(e), Go.add(e));
    } catch (r) {
      _a.test(r.message) && Go.delete(e);
    } finally {
      console.error = A;
    }
  }
}, ii = Object.freeze([]), Ut = Object.freeze({});
function vB(i, o, t) {
  return t === void 0 && (t = Ut), i.theme !== t.theme && i.theme || o || t.theme;
}
var cr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), WB = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, FB = /(^-|-$)/g;
function Ta(i) {
  return i.replace(WB, "-").replace(FB, "");
}
var MB = /(a)(d)/gi, No = 52, Ha = function(i) {
  return String.fromCharCode(i + (i > 5580 + 505 * -11 ? 39 : -2216 * 4 + 870 + 279 * 29));
};
function Ir(i) {
  var o, t = "";
  for (o = Math.abs(i); o > No; o = o / No | 1810 * -2 + 6297 + -2677) t = Ha(o % No) + t;
  return (Ha(o % No) + t).replace(MB, "$1-$2");
}
var ui, ns = -1 * 4132 + 191 + 9322, st = function(i, o) {
  for (var t = o.length; t; ) i = (-3757 + -4969 * -1 + -1179) * i ^ o.charCodeAt(--t);
  return i;
}, is = function(i) {
  return st(ns, i);
};
function LB(i) {
  return Ir(is(i) >>> -1 * 3741 + 8429 + -4688);
}
function rs(i) {
  return U.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function fi(i) {
  return typeof i == "string" && (U.NODE_ENV === "production" || i.charAt(6459 + 11 * -845 + 2836) === i.charAt(494 * 1 + -1 * 1031 + -1 * -537).toLowerCase());
}
var re = {};
re.childContextTypes = !0, re.contextType = !0, re.contextTypes = !0, re.defaultProps = !0, re.displayName = !0, re.getDefaultProps = !0, re.getDerivedStateFromError = !0, re.getDerivedStateFromProps = !0, re.mixins = !0, re.propTypes = !0, re.type = !0;
var He = {};
He.name = !0, He.length = !0, He.prototype = !0, He.caller = !0, He.callee = !0, He.arguments = !0, He.arity = !0;
var rt = {};
rt.$$typeof = !0, rt.compare = !0, rt.defaultProps = !0, rt.displayName = !0, rt.propTypes = !0, rt.type = !0;
var kt = {};
kt.$$typeof = !0, kt.render = !0, kt.defaultProps = !0, kt.displayName = !0, kt.propTypes = !0;
var as = typeof Symbol == "function" && Symbol.for, gs = as ? /* @__PURE__ */ Symbol.for("react.memo") : 348 * 230 + -76906 * -1 + -21 * 4611, OB = as ? /* @__PURE__ */ Symbol.for("react.forward_ref") : -4793 * 5 + 84069 + 8, JB = re, UB = He, ss = rt, YB = ((ui = {})[OB] = kt, ui[gs] = ss, ui);
function Ka(i) {
  return ("type" in (o = i) && o.type.$$typeof) === gs ? ss : "$$typeof" in i ? YB[i.$$typeof] : JB;
  var o;
}
var PB = Object.defineProperty, _B = Object.getOwnPropertyNames, ja = Object.getOwnPropertySymbols, TB = Object.getOwnPropertyDescriptor, HB = Object.getPrototypeOf, qa = Object.prototype;
function cs(i, o, t) {
  if (typeof o != "string") {
    if (qa) {
      var e = HB(o);
      e && e !== qa && cs(i, e, t);
    }
    var A = _B(o);
    ja && (A = A.concat(ja(o)));
    for (var n = Ka(i), r = Ka(o), a = 0; a < A.length; ++a) {
      var g = A[a];
      if (!(g in UB || t && t[g] || r && g in r || n && g in n)) {
        var c = TB(o, g);
        try {
          PB(i, g, c);
        } catch {
        }
      }
    }
  }
  return i;
}
function Yt(i) {
  return typeof i == "function";
}
function Vr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function It(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function Va(i, o) {
  if (-9716 + 4209 * -2 + -1 * -18134 === i.length) return "";
  for (var t = i[0], e = 14002 + -359 * 39; e < i.length; e++) t += i[e];
  return t;
}
function Pt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Cr(i, o, t) {
  if (t === void 0 && (t = !1), !t && !Pt(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = 2895 + -1006 * 1 + 1889 * -1; e < o.length; e++) i[e] = Cr(i[e], o[e]);
  else if (Pt(o))
    for (var e in o) i[e] = Cr(i[e], o[e]);
  return i;
}
function Zr(i, o) {
  var t = {};
  t.value = o, Object.defineProperty(i, "toString", t);
}
var iA = {};
iA[1] = `Cannot create styled-component for component: %s.

`, iA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, iA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, iA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, iA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, iA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, iA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', iA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, iA[9] = "Missing document `<head>`\n\n", iA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, iA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, iA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", iA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, iA[14] = `ThemeProvider: "theme" prop is required.

`, iA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", iA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, iA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, iA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var KB = U.NODE_ENV !== "production" ? iA : {};
function jB() {
  for (var i = [], o = -1 * 8403 + 6 * -358 + 10551; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[7383 + 23 * -321], e = [], A = 1, n = i.length; A < n; A += 7992 + 1 * 9138 + 17129 * -1) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function jt(i) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - 1] = arguments[t];
  return U.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > -2114 * -2 + -3850 + -378 ? " Args: ".concat(o.join(", ")) : "")) : new Error(jB.apply(void 0, Lt([KB[i]], o, !1)).trim());
}
var qB = (function() {
  function i(o) {
    this.groupSizes = new Uint32Array(512), this.length = 3409 * 2 + -5842 + -464, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = -394 + 2859 * -1 + 3253, e = -11 * -908 + 8827 + 53 * -355; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, n = A; o >= n; ) if ((n <<= 12396 + -2479 * 5) < -2 * -371 + 4988 + -5730) throw jt(-1753 * -5 + -6159 * -1 + -14908 * 1, "".concat(o));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(e), this.length = n;
      for (var r = A; r < n; r++) this.groupSizes[r] = 7421 + -7421 * 1;
    }
    for (var a = this.indexOfGroup(o + (3094 + -4289 * -1 + -1 * 7382)), g = (r = -1 * -6544 + -7503 + 959, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[o]++, a++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), A = e + t;
      this.groupSizes[o] = -1 * -6609 + -163 + -6446;
      for (var n = e; n < A; n++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -3241 * 1 + -1 * 9868 + 13109 * 1 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], A = this.indexOfGroup(o), n = A + e, r = A; r < n; r++) t += "".concat(this.tag.getRule(r)).concat(qr);
    return t;
  }, i;
})(), VB = 1 << 30, Ko = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), jo = 12401 + -10 * 1240, Ro = function(i) {
  if (Ko.has(i)) return Ko.get(i);
  for (; kn.has(jo); ) jo++;
  var o = jo++;
  if (U.NODE_ENV !== "production" && ((-2718 + -6966 * 1 + 9684 | o) < 8209 + -1855 * -3 + -13774 || o > VB)) throw jt(-905 + 1 * 921, "".concat(o));
  return Ko.set(i, o), kn.set(o, i), o;
}, ZB = function(i, o) {
  jo = o + (-2053 * -2 + -9751 + 5646), Ko.set(i, o), kn.set(o, i);
}, zB = "style[".concat(Et, "][").concat(os, '="').concat(ni, '"]'), XB = new RegExp("^".concat(Et, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), $B = function(i, o, t) {
  for (var e, A = t.split(","), n = 5334 + -6 * 889, r = A.length; n < r; n++) (e = A[n]) && i.registerName(o, e);
}, Ax = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && t !== void 0 ? t : "").split(qr), A = [], n = 0, r = e.length; n < r; n++) {
    var a = e[n].trim();
    if (a) {
      var g = a.match(XB);
      if (g) {
        var c = 0 | parseInt(g[1], 10), I = g[-11990 + 5996 * 2];
        -1502 + -5 * 304 + 3022 !== c && (ZB(I, c), $B(i, I, g[-8443 + 266 * -10 + 11106]), i.getTag().insertRules(c, A)), A.length = 15773 + 1 * -15773;
      } else A.push(a);
    }
  }
}, Za = function(i) {
  for (var o = document.querySelectorAll(zB), t = -10513 + -1 * -10513, e = o.length; t < e; t++) {
    var A = o[t];
    A && A.getAttribute(Et) !== ts && (Ax(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function ex() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Is = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), A = (function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(Et, "]")));
    return g[g.length - (383 * 23 + 4051 + -12859)];
  })(t), n = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(Et, ts), e.setAttribute(os, ni);
  var r = ex();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, n), e;
}, tx = (function() {
  function i(o) {
    this.element = Is(o), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 1 * 8131 + 4265 + -12396, n = e.length; A < n; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw jt(-2 * 4591 + -5671 + 1 * 14870);
    })(this.element), this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    try {
      return this.sheet.insertRule(t, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, i.prototype.getRule = function(o) {
    var t = this.sheet.cssRules[o];
    return t && t.cssText ? t.cssText : "";
  }, i;
})(), ox = (function() {
  function i(o) {
    this.element = Is(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 3128 * -1 + -898 * -3 + 434 * 1) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
})(), nx = (function() {
  function i(o) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, 15833 + 15833 * -1, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, -3658 + 1051 * 9 + -5800), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
})(), za = bn, ix = { isServer: !bn, useCSSOMInjection: !NB }, Cs = (function() {
  function i(o, t, e) {
    o === void 0 && (o = Ut), t === void 0 && (t = {});
    var A = this;
    this.options = YA(YA({}, ix), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && bn && za && (za = !1, Za(this)), Zr(this, function() {
      return (function(n) {
        for (var r = n.getTag(), a = r.length, g = "", c = function(s) {
          var C = (function(u) {
            return kn.get(u);
          })(s);
          if (C === void 0) return "continue";
          var Q = n.names.get(C), E = r.getGroup(s);
          if (Q === void 0 || !Q.size || 1 * 6628 + -7953 + 5 * 265 === E.length) return "continue";
          var B = "".concat(Et, ".g").concat(s, '[id="').concat(C, '"]'), d = "";
          Q !== void 0 && Q.forEach(function(u) {
            u.length > 0 && (d += "".concat(u, ","));
          }), g += "".concat(E).concat(B, '{content:"').concat(d, '"}').concat(qr);
        }, I = -7757 * 1 + -6076 + 13833; I < a; I++) c(I);
        return g;
      })(A);
    });
  }
  return i.registerId = function(o) {
    return Ro(o);
  }, i.prototype.rehydrate = function() {
    !this.server && bn && Za(this);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return t === void 0 && (t = !0), new i(YA(YA({}, this.options), o), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -1791 + -1 * 1033 + 1412 * 2) + (-1861 + -23 * -417 + -1 * 7729);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new nx(A) : e ? new tx(A) : new ox(A);
    })(this.options), new qB(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (Ro(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Ro(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Ro(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), rx = /&/g, ax = /^\s*\/\/.*$/gm;
function Bs(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Bs(t.children, o)), t;
  });
}
function xs(i) {
  var o, t, e, A = i === void 0 ? Ut : i, n = A.options, r = n === void 0 ? Ut : n, a = A.plugins, g = a === void 0 ? ii : a, c = function(C, Q, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 0 ? ".".concat(o) : C;
  }, I = g.slice();
  I.push(function(C) {
    C.type === Ai && C.value.includes("&") && (C.props[0] = C.props[-8903 + 8903 * 1].replace(rx, t).replace(e, c));
  }), r.prefix && I.push(SB), I.push(DB);
  var s = function(C, Q, E, B) {
    Q === void 0 && (Q = ""), E === void 0 && (E = ""), B === void 0 && (B = "&"), o = B, t = Q, e = new RegExp("\\".concat(t, "\\b"), "g");
    var d = C.replace(ax, ""), u = yB(E || Q ? "".concat(E, " ").concat(Q, " { ").concat(d, " }") : d);
    r.namespace && (u = Bs(u, r.namespace));
    var h = [];
    return Dn(u, bB(I.concat(kB(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = g.length ? g.reduce(function(C, Q) {
    return Q.name || jt(-3604 * 2 + 7493 + -270), st(C, Q.name);
  }, ns).toString() : "", s;
}
var gx = new Cs(), Br = xs(), zr = Qt.createContext({ shouldForwardProp: void 0, styleSheet: gx, stylis: Br });
zr.Consumer;
var sx = Qt.createContext(void 0);
function xr() {
  return Qe(zr);
}
function cx(i) {
  var o = sA(i.stylisPlugins), t = o[2836 * 3 + -1 * -3065 + 11573 * -1], e = o[-1 * -8414 + -8377 * -1 + -16790], A = xr().styleSheet, n = uA(function() {
    var I = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? I = i.sheet : i.target && (I = I.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (I = I.reconstructWithOptions(s)), I;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = uA(function() {
    var I = {};
    I.namespace = i.namespace, I.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = I, s.plugins = t, xs(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  eA(function() {
    IB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = uA(function() {
    var I = {};
    return I.shouldForwardProp = i.shouldForwardProp, I.styleSheet = n, I.stylis = r, I;
  }, [i.shouldForwardProp, n, r]), g = {};
  g.value = a;
  var c = {};
  return c.value = r, Qt.createElement(zr.Provider, g, Qt.createElement(sx.Provider, c, i.children));
}
var Xa = (function() {
  function i(o, t) {
    var e = this;
    this.inject = function(A, n) {
      n === void 0 && (n = Br);
      var r = e.name + n.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, n(e.rules, r, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, Zr(this, function() {
      throw jt(12, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return o === void 0 && (o = Br), this.name + o.hash;
  }, i;
})(), Ix = function(i) {
  return i >= "A" && i <= "Z";
};
function $a(i) {
  for (var o = "", t = 4132 + 2 * -2066; t < i.length; t++) {
    var e = i[t];
    if (-1 * -5177 + 2569 + -7745 === t && e === "-" && i[0] === "-") return i;
    Ix(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Qs = function(i) {
  return i == null || i === !1 || i === "";
}, Es = function(i) {
  var o, t, e = [];
  for (var A in i) {
    var n = i[A];
    i.hasOwnProperty(A) && !Qs(n) && (Array.isArray(n) && n.isCss || Yt(n) ? e.push("".concat($a(A), ":"), n, ";") : Pt(n) ? e.push.apply(e, Lt(Lt(["".concat(A, " {")], Es(n), !1), ["}"], !1)) : e.push("".concat($a(A), ": ").concat((o = A, (t = n) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || o in GB || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function xt(i, o, t, e) {
  if (Qs(i)) return [];
  if (Vr(i)) return [".".concat(i.styledComponentId)];
  if (Yt(i)) {
    if (!Yt(n = i) || n.prototype && n.prototype.isReactComponent || !o) return [i];
    var A = i(o);
    return U.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Xa || Pt(A) || A === null || console.error("".concat(rs(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), xt(A, o, t, e);
  }
  var n;
  return i instanceof Xa ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Pt(i) ? Es(i) : Array.isArray(i) ? Array.prototype.concat.apply(ii, i.map(function(r) {
    return xt(r, o, t, e);
  })) : [i.toString()];
}
function Cx(i) {
  for (var o = -3005 + -601 * -5; o < i.length; o += 1) {
    var t = i[o];
    if (Yt(t) && !Vr(t)) return !1;
  }
  return !0;
}
var Bx = is(ni), xx = (function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = U.NODE_ENV === "production" && (e === void 0 || e.isStatic) && Cx(o), this.componentId = t, this.baseHash = st(Bx, t), this.baseStyle = e, Cs.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = It(A, this.staticRulesId);
      else {
        var n = Va(xt(this.rules, o, t, e)), r = Ir(st(this.baseHash, n) >>> 11598 + -11598 * 1);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(n, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = It(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = st(this.baseHash, e.hash), c = "", I = 7403 + -7403 * 1; I < this.rules.length; I++) {
        var s = this.rules[I];
        if (typeof s == "string") c += s, U.NODE_ENV !== "production" && (g = st(g, s));
        else if (s) {
          var C = Va(xt(s, o, t, e));
          g = st(g, C + I), c += C;
        }
      }
      if (c) {
        var Q = Ir(g >>> 0);
        t.hasNameForId(this.componentId, Q) || t.insertRules(this.componentId, Q, e(c, ".".concat(Q), void 0, this.componentId)), A = It(A, Q);
      }
    }
    return A;
  }, i;
})(), ds = Qt.createContext(void 0);
ds.Consumer;
var hi = {}, A0 = /* @__PURE__ */ new Set();
function Qx(i, o, t) {
  var e = Vr(i), A = i, n = !fi(i), r = o.attrs, a = r === void 0 ? ii : r, g = o.componentId, c = g === void 0 ? (function(w, b) {
    var y = typeof w != "string" ? "sc" : Ta(w);
    hi[y] = (hi[y] || -332 * -27 + 3 * 1479 + -1 * 13401) + (-9954 + -11 * -905);
    var G = "".concat(y, "-").concat(LB(ni + y + hi[y]));
    return b ? "".concat(b, "-").concat(G) : G;
  })(o.displayName, o.parentComponentId) : g, I = o.displayName, s = I === void 0 ? (function(w) {
    return fi(w) ? "styled.".concat(w) : "Styled(".concat(rs(w), ")");
  })(i) : I, C = o.displayName && o.componentId ? "".concat(Ta(o.displayName), "-").concat(o.componentId) : o.componentId || c, Q = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, E = o.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var B = A.shouldForwardProp;
    if (o.shouldForwardProp) {
      var d = o.shouldForwardProp;
      E = function(w, b) {
        return B(w, b) && d(w, b);
      };
    } else E = B;
  }
  var u = new xx(t, C, e ? A.componentStyle : void 0);
  function h(w, b) {
    return (function(y, G, R) {
      var L = y.attrs, O = y.componentStyle, J = y.defaultProps, H = y.foldedComponentIds, Ee = y.styledComponentId, de = y.target, Ye = Qt.useContext(ds), nI = xr(), ri = y.shouldForwardProp || nI.shouldForwardProp;
      U.NODE_ENV !== "production" && Bn(Ee);
      var ia = vB(G, Ye, J) || Ut, Se = (function(mo, Zt, yo) {
        var ft = {};
        ft.className = void 0, ft.theme = yo;
        for (var si, Xe = YA(YA({}, Zt), ft), ci = -11 * -768 + 5370 + -49 * 282; ci < mo.length; ci += 1) {
          var wo = Yt(si = mo[ci]) ? si(Xe) : si;
          for (var Pe in wo) Xe[Pe] = Pe === "className" ? It(Xe[Pe], wo[Pe]) : Pe === "style" ? YA(YA({}, Xe[Pe]), wo[Pe]) : wo[Pe];
        }
        return Zt.className && (Xe.className = It(Xe.className, Zt.className)), Xe;
      })(L, G, ia), qt = Se.as || de, Vt = {};
      for (var ee in Se) Se[ee] === void 0 || ee[0] === "$" || ee === "as" || ee === "theme" && Se.theme === ia || (ee === "forwardedAs" ? Vt.as = Se.forwardedAs : ri && !ri(ee, qt) || (Vt[ee] = Se[ee], ri || U.NODE_ENV !== "development" || aB(ee) || A0.has(ee) || !cr.has(qt) || (A0.add(ee), console.warn('styled-components: it looks like an unknown prop "'.concat(ee, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ai = (function(mo, Zt) {
        var yo = xr(), ft = mo.generateAndInjectStyles(Zt, yo.styleSheet, yo.stylis);
        return U.NODE_ENV !== "production" && Bn(ft), ft;
      })(O, Se);
      U.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(ai);
      var gi = It(H, Ee);
      return ai && (gi += " " + ai), Se.className && (gi += " " + Se.className), Vt[fi(qt) && !cr.has(qt) ? "class" : "className"] = gi, R && (Vt.ref = R), FA(qt, Vt);
    })(p, w, b);
  }
  h.displayName = s;
  var p = Qt.forwardRef(h), m = {};
  return m.attrs = !0, m.componentStyle = !0, m.displayName = !0, m.foldedComponentIds = !0, m.shouldForwardProp = !0, m.styledComponentId = !0, m.target = !0, p.attrs = Q, p.componentStyle = u, p.displayName = s, p.shouldForwardProp = E, p.foldedComponentIds = e ? It(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = C, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = e ? (function(b) {
      for (var y = [], G = 7 * -617 + -307 * 26 + 12302 * 1; G < arguments.length; G++) y[G - (-1963 * 1 + -683 * 7 + 6745)] = arguments[G];
      for (var R = -6911 * -1 + 1 * 3407 + -1474 * 7, L = y; R < L.length; R++) Cr(b, L[R], !0);
      return b;
    })({}, A.defaultProps, w) : w;
  } }), U.NODE_ENV !== "production" && (RB(s, C), p.warnTooManyClasses = /* @__PURE__ */ (function(w, b) {
    var y = {}, G = !1;
    return function(R) {
      if (!G && (y[R] = !0, Object.keys(y).length >= 200)) {
        var L = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(-2452 * -3 + -7948 + 792, " classes were generated for component ").concat(w).concat(L, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), G = !0, y = {};
      }
    };
  })(s, C)), Zr(p, function() {
    return ".".concat(p.styledComponentId);
  }), n && cs(p, i, m), p;
}
function e0(i, o) {
  for (var t = [i[-24 * 295 + 2 * 3206 + 668]], e = 17046 + 1 * -17046, A = o.length; e < A; e += 1) t.push(o[e], i[e + (5507 * 1 + -763 + -4743)]);
  return t;
}
var t0 = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function Ex(i) {
  for (var o = [], t = -8 * -787 + -2978 + -3317; t < arguments.length; t++) o[t - (-4301 + -1 * -4302)] = arguments[t];
  if (Yt(i) || Pt(i)) return t0(xt(e0(ii, Lt([i], o, !0))));
  var e = i;
  return -2 * -917 + -3606 + 1772 === o.length && -7 * -879 + -4467 + -337 * 5 === e.length && typeof e[9317 + -1 * 9317] == "string" ? xt(e) : t0(xt(e0(e, o)));
}
function Qr(i, o, t) {
  if (t === void 0 && (t = Ut), !o) throw jt(-8875 + 1327 * -1 + 10203, o);
  var e = function(A) {
    for (var n = [], r = 8072 + 1 * -8411 + 340; r < arguments.length; r++) n[r - (-5924 + 5925 * 1)] = arguments[r];
    return i(o, t, Ex.apply(void 0, Lt([A], n, !1)));
  };
  return e.attrs = function(A) {
    return Qr(i, o, YA(YA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Qr(i, o, YA(YA({}, t), A));
  }, e;
}
var ls = function(i) {
  return Qr(Qx, i);
}, ho = ls;
cr.forEach(function(i) {
  ho[i] = ls(i);
});
U.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var vo = "__sc-".concat(Et, "__");
U.NODE_ENV !== "production" && U.NODE_ENV !== "test" && typeof window < "u" && (window[vo] || (window[vo] = 15739 + -15739 * 1), 1868 + 18 * 537 + -11533 === window[vo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[vo] += 9326 + 5 * -1865);
const Sn = Ue(void 0);
Sn.displayName = "CameraServiceContext";
function dt() {
  const i = Qe(Sn);
  if (i === void 0)
    throw new Error(`${Sn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function Io() {
  return !1;
}
function dx() {
  return !0;
}
async function us() {
  return navigator.mediaDevices.enumerateDevices();
}
async function pi() {
  return (await us()).filter((o) => o.kind === "videoinput");
}
function Rt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Er(i) {
  return i.getVideoTracks()[738 + -369 * 2];
}
(function(i, o) {
  function t(r, a, g, c, I) {
    return wA(I - 623, c);
  }
  const e = i();
  function A(r, a, g, c, I) {
    return wA(I - 696, c);
  }
  function n(r, a, g, c, I) {
    return wA(g - 219, c);
  }
  for (; ; )
    try {
      if (-parseInt(t(903, 892, 912, "Z7jz", 902)) / 1 * (parseInt(n(490, 496, 497, "oJB7", 514)) / 2) + parseInt(n(526, 503, 520, "Kq&T", 527)) / 3 + parseInt(A(978, 974, 986, "PaI*", 985)) / 4 + parseInt(n(531, 507, 525, "1Lc5", 526)) / 5 + parseInt(t(934, 911, 930, "cRX2", 915)) / 6 + -parseInt(n(502, 482, 494, "Ay^o", 503)) / 7 + parseInt(t(914, 892, 910, "@X(b", 910)) / 8 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Gn, 937872);
function wA(i, o) {
  i = i - (1753 * -1 + -3001 * -1 + -977);
  const t = Gn();
  let e = t[i];
  if (wA.KBHIQP === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    wA.XGzcPF = g, wA.qWwKsE = {}, wA.KBHIQP = !0;
  }
  const n = t[511 * 6 + 3 * 2504 + -10578], r = i + n, a = wA.qWwKsE[r];
  return a ? e = a : (wA.vHJUva === void 0 && (wA.vHJUva = !0), e = wA.XGzcPF(e, o), wA.qWwKsE[r] = e), e;
}
function Gn() {
  const i = ["WR4azq", "WOWCWO04W7q", "W4tcLKhcVtS", "yHBdHmo9WOqrWQxcL3BcGSkMWRlcUKq", "lXbSWRG2", "W65DkSo5ia", "ymoHehdcOItdSq3cH2W", "Eqz7W5vNW4/dJfjFWO0", "omonW4OJW7FcUGGDW6JcTmoTzgG", "WQibDmk6bW", "E24DqeBcP8opW5fech9kWRK", "W4ldQ8kwWRC", "jGzMWPqb", "W7Oof8kLeG", "omkaE8ofmW", "A8kFW7mHySocW4z1oCo5W4dcGZK", "c8k/ACorWOS", "WOVdPeydzIPSWOldTxhdVSoI", "W7NdQmozzCon", "omooW44UWO7dHLyIW5FcOa", "W6RcTmk0W4dcV1lcQ8ojW4u5neBdQ8kV", "W6TXWQXdW6K", "qfmeW6m+kNz1bc9BsW", "WRRdQWhdQJ/dMCooWQSIW6y", "WQdcI8kazq", "h8o1gCkBWRq", "W6vIWRfTW4u", "k8kFCSovWPi", "W7aweCkdmq", "WQ1Kr8ocwdCqk0GOWOtcMai", "isNdLtrd", "lNJdMahdNmoViG7dIY/cHSo0r8kr", "WRNdOqpdR2/cHSkWW4K2W6ldI8oiWPWK", "oWJdPXjm", "CvuXW61eW7nBW6VdRSo5W5VcO20", "l8klEmoeoa", "WQVdKhRdLe3dTCk3qmofW5/cLmoHW6i"];
  return Gn = function() {
    return i;
  }, Gn();
}
function lx(i) {
  const o = new ArrayBuffer(i[a(560, 543, 560, "[O*j") + "h"]);
  function t(g, c, I, s, C) {
    return wA(I - -907, c);
  }
  const e = new Uint8Array(o);
  for (let g = -1326 + 5 * -983 + 6241 * 1, c = i[n(1004, 1016, 1008, 991, "LUC9") + "h"]; g < c; g++)
    if (a(570, 558, 548, "LUC9") !== t(-618, "cDk)", -633)) {
      const I = new _0x216661(_0x137ca9);
      return _0x44f99d[A(878, 865, "dgdx", 859)](I[a(558, 556, 538, "fb#C") + "e"](function(s, C) {
        function Q(E, B, d, u, h) {
          return r(E - 383, E, d - 368, h - -1173);
        }
        return s + _0x927c88[Q("0n))", -234, -202, -230, -216) + Q("YUi*", -205, -213, -209, -214) + "de"](C);
      }, ""));
    } else e[g] = i[t(-639, "SDp%", -630) + r(937, "6811", 928, 940)](g);
  function A(g, c, I, s, C) {
    return wA(s - 563, I);
  }
  function n(g, c, I, s, C) {
    return wA(g - 705, C);
  }
  function r(g, c, I, s, C) {
    return wA(s - 659, c);
  }
  function a(g, c, I, s, C) {
    return wA(c - 270, s);
  }
  return o;
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return Z(c - -282, s);
  }
  function e(g, c, I, s, C) {
    return Z(C - 638, s);
  }
  function A(g, c, I, s, C) {
    return Z(C - -485, s);
  }
  const n = i();
  function r(g, c, I, s, C) {
    return Z(I - 375, g);
  }
  function a(g, c, I, s, C) {
    return Z(I - 957, s);
  }
  for (; ; )
    try {
      if (parseInt(A(-59, -26, -38, "r0xB", -53)) / 1 + -parseInt(A(-77, -61, -64, "OSg1", -59)) / 2 + parseInt(t(173, 167, 146, "l]R1", 185)) / 3 + -parseInt(a(1417, 1407, 1415, "wx&z", 1433)) / 4 + parseInt(e(1080, 1076, 1065, "HuYx", 1094)) / 5 * (parseInt(r("oQvx", 827, 815, 789, 823)) / 6) + -parseInt(a(1356, 1365, 1378, "KQOS", 1389)) / 7 * (parseInt(e(1121, 1084, 1099, "[DPb", 1105)) / 8) + -parseInt(t(194, 189, 174, "zeP[", 167)) / 9 * (-parseInt(r("oQvx", 774, 790, 778, 774)) / 10) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Nn, 233145 + 42 * 3418);
function Nn() {
  const i = ["bIHIW6tdLG", "W59XW5/dQey1CeJcKmoJFSkP", "bqtcMcldJYPnya", "thBdS8oQ", "WRzQyZNcVG", "lXLzfa", "W59UW6XuEtfsW5DjW5XN", "m8kMsLhcLmk6nN8y", "WQLRWPO/x8kzWO/dIba", "WQlcMKmPW4G", "obCp", "fSoUsCkOWRxcH1TgW5KEomkk", "AGxdJmoB", "WPZcTc3cLSkf", "FuzoWOxcMCobWR3cMI5PltO", "WRRdMSo7qw0", "EmkSt8oP", "W78aW5/cIdddHCkhx0pcQ1G", "W5ZdJJpdLSkufbG", "lSo9eSk4hmoEWOxdOx8vza", "fr/cICkJ", "WPXifmogzG", "WQzeWORdT2C", "WPxcV8kB", "qCoXWQW7mW", "DcKbWPKRe8o2W5JdOKS1WP0", "W4xdReZdPMy", "E3CxWOpcOq", "ACo6cN/cJW", "obCJf1y", "bmoSW4CLWQa", "W6rmC8k0W6ldIw0h", "FZRdHSoa", "WQWrW7GnySkTWPa", "BqpdJmou", "lrmmW6tdGq", "qhNcQcO", "WOnygmovFG", "W7yvWPJcNmkI", "irmb", "Es4bWPGVqSosW53dG3GX", "WQrcWPBdJhy", "jCkYqSojWOOiz8kwW48ZuCkG", "WRiFsmkGW6q", "ESoVfCkvW6O", "iCo0fmk9fSkxWRldIuqtrCos", "W53cTvFcLSo5vJ4ImCkOk8k0", "uwldVmo7jG", "WOOTWPNcUau", "CuFcNmkIWONcGrddKxzaiW", "WPTUBa", "x8oRW7xcIf3cSuyIpwyZva", "W7KOW5moqG", "WORcRYZcKmkq", "srhdQ2VdKa", "W780W4KmtW", "zSo+fNW", "bSkZWQ7dNa"];
  return Nn = function() {
    return i;
  }, Nn();
}
function Z(i, o) {
  i = i - (-1564 + -4 * 1926 + 9682);
  const t = Nn();
  let e = t[i];
  if (Z.ygXkgd === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    Z.ZAOoAO = g, Z.njMUer = {}, Z.ygXkgd = !0;
  }
  const n = t[0], r = i + n, a = Z.njMUer[r];
  return a ? e = a : (Z.givLKn === void 0 && (Z.givLKn = !0), e = Z.ZAOoAO(e, o), Z.njMUer[r] = e), e;
}
async function ux() {
  const i = {};
  i[c(579, 538, 560, 548, "ZFiv")] = Lg, i[g(330, 356, 341, 333, "bhpD") + "h"] = 256;
  const o = await window[g(334, 331, 369, 356, "oQvx") + "o"][e(545, 540, 556, "RDGv") + "e"][a(513, "IJRr") + n(-134, -114, "lOnP", -94, -116) + "y"](i, !0, [a(500, "*kfH") + "pt", c(563, 564, 559, 538, "mn^I") + "pt"]), t = Uint8Array[g(362, 359, 358, 338, "MG7V")](Array(6760 + 367 * -2 + -6010)[a(526, "a0vv")](-108 + -2 * 4149 + 2802 * 3));
  function e(I, s, C, Q, E) {
    return Z(s - 118, Q);
  }
  const A = window[e(588, 579, 556, "hPDB") + "o"][e(558, 560, 572, "KQOS") + n(-68, -89, "l]R1", -91, -94) + n(-98, -61, "IGhQ", -71, -90)](t);
  function n(I, s, C, Q, E) {
    return Z(E - -545, C);
  }
  const r = {};
  r[c(527, 540, 547, 558, "@oqn")] = o;
  function a(I, s, C, Q, E) {
    return Z(I - 63, s);
  }
  function g(I, s, C, Q, E) {
    return Z(Q - -103, E);
  }
  r.iv = A;
  function c(I, s, C, Q, E) {
    return Z(C - 90, E);
  }
  return r;
}
async function fx(i) {
  const { iv: o, key: t } = await ux();
  function e(C, Q, E, B, d) {
    return Z(B - 495, d);
  }
  const A = new Uint8Array(i), n = {};
  function r(C, Q, E, B, d) {
    return Z(Q - -748, E);
  }
  n[r(-339, -325, "OSg1")] = Lg, n.iv = o;
  const a = await window[s(1207, 1227, 1198, "I]D[") + "o"][s(1230, 1240, 1214, "g&B4") + "e"][s(1263, 1256, 1277, "6W[p") + "pt"](n, t, A);
  function g(C, Q, E, B, d) {
    return Z(Q - 750, B);
  }
  const c = await window[g(1155, 1166, 1141, "X4XS") + "o"][r(-311, -294, "Mg(R") + "e"][r(-294, -314, "o6nU") + e(927, 926, 910, 938, "[DPb")](s(1235, 1213, 1195, "KQOS"), t), I = {};
  I[g(1218, 1195, 1173, "%QJI") + "ge"] = a;
  function s(C, Q, E, B, d) {
    return Z(Q - 796, B);
  }
  return I[g(1208, 1196, 1209, "KQOS")] = c, I.iv = o, I;
}
async function hx(i) {
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return xA(c - 521, s);
  }
  function e(a, g, c, I, s) {
    return xA(I - -565, g);
  }
  const A = i();
  function n(a, g, c, I, s) {
    return xA(c - -623, g);
  }
  function r(a, g, c, I, s) {
    return xA(s - 512, g);
  }
  for (; ; )
    try {
      if (parseInt(t(936, 960, 967, 988, "lLDk")) / 1 * (parseInt(e(-153, "OYi8", -111, -112, -119)) / 2) + parseInt(e(-74, "!(c&", -94, -105, -139)) / 3 + -parseInt(t(968, 1050, 1005, 1054, "M9Vr")) / 4 * (parseInt(e(-150, "*@@0", -90, -134, -97)) / 5) + parseInt(n(-207, "5V0b", -213, -183, -192)) / 6 + -parseInt(r(1026, "$Nb#", 1023, 965, 1001)) / 7 * (parseInt(r(960, "A3W*", 893, 902, 927)) / 8) + -parseInt(n(-199, "OEy6", -162, -194, -160)) / 9 + parseInt(r(961, "ycJl", 918, 927, 932)) / 10 * (parseInt(n(-260, "qm7%", -219, -237, -213)) / 11) === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(vn, -1 * -835819 + 1226893 + -1360556);
const o0 = 342 + 6 * 502 + -854, fs = 3500, hs = -9581 + -3 * 650 + 11533, ps = 6528 + 1 * 2604 + -9132 + 0.5;
function vA(i, o, t, e, A) {
  return xA(A - 983, e);
}
const ms = {};
ms[q("qj2!", 872)] = 1920;
const ys = {};
ys[vA(1356, 1352, 1362, "$C9p", 1391)] = 1080;
const ws = {};
ws[q("1!lJ", 798)] = 30;
const qo = {};
qo[PA(597, "#ukf")] = ms, qo[$A(-578, "$Nb#") + "t"] = ys, qo[$A(-498, "qm7%") + PA(670, "8Vg7")] = ws;
const Ds = {};
Ds[q("BBwL", 882)] = 1920;
const bs = {};
bs[PA(614, "KsdV")] = 1080;
const Rn = {};
Rn[WA(866, 914, 883, 840, "BR3*")] = Ds, Rn[vA(1390, 1477, 1426, "5V0b", 1437) + "t"] = bs;
function WA(i, o, t, e, A) {
  return xA(i - 388, A);
}
Rn[WA(876, 895, 894, 921, "qj2!") + $A(-503, "8Vg7")] = 30;
const ks = {};
function vn() {
  const i = ["W63dKGlcH3WCWQShf1JdRJfr", "WRu8W7Xo", "WOLrW7xcTq", "ESoBoK4W", "w8oWymoKWRe", "WQvpE8ovnw/cV10", "W6CrqCo1", "vuFdPSkSW6C", "WQVcMfS", "f8kBW4fOWPNcVhWJWRvKEa", "CvNdS8kQW6e", "W4aNgaBcVG", "W5fUlCkHWRT1jCorW5xdM0Hx", "W4eMfadcUG", "oCodmG", "nSo1W5K", "WPOWgCkWWO8", "W70zs8oJpq", "WQFdOt4yW7W", "W6rDWRrMl8oScCkLWROTWRHd", "wCooWQe/m2JcKCo7WQdcU8odhSob", "wvVdOSkUW78", "W6G/jq", "W6K+omof", "xCo7aYO", "smoPWOeTW4m", "WOy4xmo4W6e", "WO82pmkOWPG", "W7iCqSoUmW", "WRH1j8oIWO0DvIi", "WOddOsewwW", "hSkSW5ldOSkO", "W49Xf2C", "WOdcKSotxLa", "B0NcUSoeEq", "c8kfW6y", "pe1YW5eY", "WOJdIdLwsq", "WP9lWOBcSCoy", "o8kUWRLLWQK", "WQirW7u0FG", "nCorpLnh", "WRRcJ0HOiW", "W4hdL8kiwMldM3NdPSka", "r8o0etZdMa", "umk/WOau", "bmkcW6e", "WRNcHuHMmG", "BmkjDJuuWQRcNSkHW4RdL8knW7hcUW", "k8kqW6zSCa", "t8kaWOLzWQq", "dmkVW5VdTCkA", "DeZcQ8omEG", "W4/dTmkmCq", "rSoICSoZWPy", "A8kSW591pCkWn8kQ", "W68Km8o8WPS", "rxhdJgS2", "WP9tWRhcT8oz", "WQldSrKdW7O", "hmokW5ShW7NcUmo8FmkuW7/dKHq", "Db7cPLtdGG", "rhddKe4Q", "h8oeW5ahW7FcUSkxDSkoW4/dJbWT", "W5hdNCoJWPy5amoIrmoSW6ddIHDt", "WQ0couG", "fJS0qSkbW6fLxW", "W6mZn8osW4a", "WQ5ln8oChq", "WP5ZsLxdPSkvWQddV3D5WQCNWQy", "mmovl2bk", "W65WWQiiBCotemkbnKxdIqZdHq", "pg3dJ07dRa", "WOVcHmkS", "i07cKvVdRYVdP8oc", "FSoamg4R", "WQWNs8oFha", "dCkPlsO", "WO3dLdnJta", "WRnSpSo7WP7dSaOv", "WOe8DCoRW7y", "xMddL203", "p8khiqbN", "r8o5gc4", "vCoHhJBdPq", "hCk/W53dQSkp", "ugafyCkn", "smozWOaRW40", "cmo7W5P+", "WQihl11m", "W41ZtCoSW5/dKConWR/dGmo5W6m", "WQ4MW6a", "W5WAW4xdOmkoWRFdSsvxd1L7", "w2tdHL46", "WPtcH8k0W5i", "ymoZzH1BygDvWQ0", "WQLfW6/cLeu", "WPqNeCk6WOi", "xmo4AwXoW4VcVY7dSSoxBYvh", "WRGGrmoZfa"];
  return vn = function() {
    return i;
  }, vn();
}
ks[$A(-545, "gaUC")] = 1;
const Ss = {};
Ss[q("BP32", 837)] = 1;
const Gs = {};
Gs[PA(655, "aXtM")] = 1;
const Vo = {};
Vo[q("t2rN", 816)] = ks, Vo[q("*@@0", 827) + "t"] = Ss, Vo[vA(1477, 1401, 1450, "*@@0", 1440) + q("u@5o", 818)] = Gs;
const Ns = {};
Ns[WA(840, 810, 809, 857, "5V0b")] = 1;
const Rs = {};
Rs[PA(642, "lLDk")] = 1;
const vs = {};
function PA(i, o, t, e, A) {
  return xA(i - 184, o);
}
vs[q("BP32", 851)] = 1;
const Zo = {};
Zo[vA(1372, 1373, 1407, "C^Gf", 1383)] = Ns, Zo[WA(810, 848, 827, 851, "r#4j") + "t"] = Rs, Zo[q("GMu8", 806) + q("Vefn", 832)] = vs;
const Qo = {};
Qo[vA(1379, 1417, 1353, "vG)7", 1401)] = qo, Qo[q("ra]N", 861) + PA(660, "OEy6")] = Rn;
function q(i, o, t, e, A) {
  return xA(o - 389, i);
}
Qo[$A(-565, "H#3c")] = Vo, Qo[PA(669, "H#3c") + WA(802, 773, 771, 819, "2fiU")] = Zo;
const Wn = Qo, at = {};
at[$A(-555, "r#4j") + $A(-521, "*@@0") + vA(1465, 1466, 1434, "#5FO", 1463)] = o0, at[q("M9Vr", 863) + $A(-490, "UI!z") + $A(-508, "!(c&") + vA(1417, 1397, 1425, "$C9p", 1446)] = Wn[WA(882, 903, 902, 923, "yL)I")], at[q("lLDk", 858) + vA(1368, 1381, 1422, "gaUC", 1399) + PA(612, "!8ye") + WA(853, 808, 837, 863, "H#3c")] = Wn[q("zU4s", 834) + vA(1397, 1394, 1406, "$Nb#", 1438)], at[vA(1384, 1356, 1374, "BR3*", 1402) + WA(830, 816, 798, 833, "l@2b")] = hs, at[WA(825, 799, 848, 785, "Vefn") + q("UI!z", 868) + q("!8ye", 855) + PA(586, "A3W*") + WA(837, 860, 837, 823, "qj2!")] = ps, at[WA(880, 862, 909, 908, "ra]N") + vA(1523, 1518, 1426, "OEy6", 1473) + "Ms"] = o0;
function xA(i, o) {
  i = i - 400;
  const t = vn();
  let e = t[i];
  if (xA.ROZQqw === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    xA.lfCXyJ = g, xA.qMDASS = {}, xA.ROZQqw = !0;
  }
  const n = t[8 * -395 + -9 * -301 + 451], r = i + n, a = xA.qMDASS[r];
  return a ? e = a : (xA.leZTLe === void 0 && (xA.leZTLe = !0), e = xA.lfCXyJ(e, o), xA.qMDASS[r] = e), e;
}
const Ct = {};
Ct[PA(666, "$Nb#") + q("(J$w", 866) + q("H#3c", 814)] = fs, Ct[WA(814, 823, 804, 780, "ra]N") + vA(1437, 1468, 1462, "C^Gf", 1442) + vA(1445, 1479, 1486, "r#4j", 1481) + WA(875, 832, 862, 839, "OEy6")] = Wn[$A(-554, "2fiU")], Ct[q("]p9C", 886) + q("gaUC", 805) + PA(679, "zU4s") + vA(1467, 1461, 1432, "UI9Y", 1456)] = Wn[q("H#3c", 874) + PA(640, "u@5o")], Ct[PA(624, "GMu8") + WA(852, 813, 842, 839, "$C9p")] = hs;
function $A(i, o, t, e, A) {
  return xA(i - -989, o);
}
Ct[$A(-586, "r#4j") + q("BBwL", 864) + vA(1389, 1413, 1423, "&o)6", 1406) + PA(651, "OYi8") + q("l@2b", 821)] = ps, Ct[q("OYi8", 810) + $A(-538, "BP32") + "Ms"] = fs;
const dr = {};
dr[WA(794, 826, 782, 772, "KsdV")] = at, dr[$A(-542, "lLDk")] = Ct;
const px = dr;
function GA(i, o, t, e, A) {
  return QA(o - -832, t);
}
function ve(i, o, t, e, A) {
  return QA(i - -933, t);
}
function le(i, o, t, e, A) {
  return QA(t - -177, A);
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return QA(a - 115, I);
  }
  function e(a, g, c, I, s) {
    return QA(I - -859, g);
  }
  const A = i();
  function n(a, g, c, I, s) {
    return QA(c - 272, g);
  }
  function r(a, g, c, I, s) {
    return QA(g - -155, a);
  }
  for (; ; )
    try {
      if (parseInt(r("BVCX", 74, -12, 11, 132)) / 1 + -parseInt(r("qKlE", -13, 73, -18, -17)) / 2 + parseInt(t(390, 417, 310, "al3Y", 393)) / 3 * (-parseInt(n(566, "vUQV", 508, 512, 463)) / 4) + parseInt(t(329, 310, 313, "AmL&", 424)) / 5 * (parseInt(r("4Uk7", 152, 142, 58, 82)) / 6) + parseInt(e(-538, "0[yo", -644, -591, -564)) / 7 + -parseInt(n(533, ")B$6", 541, 450, 445)) / 8 * (-parseInt(t(324, 283, 351, "so^h", 287)) / 9) + -parseInt(e(-744, "UK$b", -639, -666, -596)) / 10 === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Fn, -378527 + -1 * 102298 + -890587 * -1);
function Fn() {
  const i = ["bcpdN8kOka", "fCkhW6D2W5G", "dsyDgSkVWPrQW5RcHrjHCSkO", "yvH/BmkX", "W40KeWNdPa", "iCoXmSofW7i", "WQ/cI8k9WQy", "W4SKeWVdOW", "W4X+uJzb", "WODWsLhcQgCQqCoaWQldUSov", "W5udASoMW6K", "ALZcNtmm", "W4JdSqhdINy", "W6BdJc7dGCo7", "EN9wWOGZ", "W5ldRCk9uqG", "W6mdtSoVW5q", "zGD5WPJcNG", "tgVcGt4N", "WQnVj2OE", "vqxdGCkBW4e", "WOhdHmkNbCo4", "W4lcLWrQoq", "WQbofCosfq", "WP54bh4x", "WQbAh8osaa", "W6LAf8kBW7e", "jmkIWQ4Pza", "EhTjBha", "svhcQCk+eG", "rCkdW4mmWOW", "W7GqW6tcKNy", "WPD0kgm2", "eCkvxSkSWQ0", "W5PVoa", "WQjLl2Om", "jmkQWR4GCW", "W6xdMmknlCoe", "B0ZcTCkIfa", "W7O2W70", "WRyTcmowxa", "WRb4j3yL", "D0HeWQddMq", "swZcQ8kLcq", "WQ9lfSofka", "pG/cOSkmWOG", "lSoDWP/dImoy", "oCoyWRpdLmoE", "g8oBn8oxW6u", "W6lcPd1Wfa", "lmkRWRq", "WPBcGsDurW", "W4eNW6a5mW", "WQRdRu81pq", "WPldK8kNgCod", "qb7dKSkSW5q", "cCkHWRldKCkh", "W4ZdRbddIMC", "ccxdOmkVWQW", "W6CBs8oVW4q", "bWqgk8oJoGNdMvRdT3jKxa", "W7WaW47cKKW", "WQ7dUvuX", "W7ldL8kqamor", "mmoBWO1CW7CRh8oblmo0hSoz", "WRDCh8oloa", "pJdcPW", "hmkEfSocWRq", "BgbCWPOZ", "uqNdUCkjAq", "WPaWfmokwG", "WOC3cmoXtq", "bvpcHCoTWPFdJf8hm1GGWRlcHG", "W7HdmCoveSk5WR0", "W6G5W5JcJmkT", "WQtcJJdcHSkA", "qmkhpmoBWRldN0e", "W7BdJCklmCo4", "WPL+nheh", "xhTaWOWM", "hcdcU8kbWRm", "dq3dOCkOESk2W4q", "W4CRW6G7iW", "W60rW5pcHMS", "cCk4WRG", "hCknaCohWQi", "W5a0W7S6mG", "hCkwWPJdTSkG", "eZtdVCkhWRO", "W6lcSdPkbq", "WRPqj8oOnq", "W604W4/cRSk4", "gCkuW7bJW5W", "WOxcISkNWQyu", "xw9rw8kT", "v2nBAmoY", "W4b1uSkqhCkTWRdcTcb1bw8", "WPTSyW5fESoa", "W5NdUSobfSo2W5FcRCkqeSkssbW", "W5BdR8kZtZu", "xLBcTCkccq", "uGJdNmkSW5q", "W7BdL8kal8ov", "WO0mW78MkCkcWO4", "W7pcQJPTfa", "W5OZgWVdPq", "WRjjdSoTdG", "WPzrqIPADmoY", "eW0wirG", "gmkCgmoCWOK", "vW/dHCk3W4m", "wfjE", "urxdMa", "W5O2W70rjq", "iJzLiMO", "WPhcHrTZW4W", "vxzDtCoz", "WOpcVCkbz8kM", "W7GTW4pcGCkQ", "aSoBn8ox", "W5ddTSk8udq", "q0HEs8k9", "WONcU8kut8k2", "WPpcHr5QW54", "WPz0nguh", "WQtcSr7cLCkR", "cJddPSkmWQW", "W5jUmSkyW4u", "WOxcKdbb", "WQrAg8omfa", "W4fHp8kAW5q", "xqZdL8ktEq", "WPvHlKyw", "W5yMW6pcT0u", "WPr+lq", "WOy0zConWPpdUmk0vZnRW4aisG", "W7pdKmo7W6nyF8kvWRL/zmkWyJO", "zKzdWR3dMq", "vb/dMmkyEa", "W6KdW5RcMq", "E8kaW5SkWQy", "W6m6x8o3W4G", "cLZcHmoMWPldGY0wjMyqWPC", "CvTmWQFdGW", "CubcWQddVW", "WRlcHmkGWRKt", "WQDcaCoYiW", "k8kuW5b0W7u", "uLjEA8kG", "W741W5dcUmkj", "gCkmW7f9W5G", "WONcKCkfWQ8A", "W5e7W5dcJCkV", "W610wIPh", "W5XUwG1w", "W6SqxCoKW4q", "dSkFwCkLWQW", "wwK+zs7dJa/cISoThGSF", "WObYWRPSC8o8W6/cOSkFsSoCW7mk", "wwvkxSo2", "eCkBqSkSWR0", "WPldICkSb8oU", "W5eIfGldMq", "zSkDW44GWQa", "WP/cQmkbymkS", "WONcV8khtmkX", "W5aOW70Nkq", "c8kjhSoaWRu", "W4FdUmk7tZm", "WPpcLdftxa", "WRxcTSoAoKq", "yMPaWO4I", "WRhdOLu", "WQT4kG", "WR5fgSk3WPe5WQXyW73dMSkdW7q", "tNFcHSoWzmodW587zvhdQCov", "W7ddNmkqamor", "W7mhW5xcKMu", "ueLFASkC", "sGX5WP3cMG", "nSkOWRu7", "c8oln8oxW6u", "WRhdVfiDkW", "WRnne8oofq", "dCknbCopWRu", "W7GgW5pcJ3y", "EvpcKdeD", "f8kmW6y", "W4S3gW7dVG", "z8kcW40", "ANLtWOuY"];
  return Fn = function() {
    return i;
  }, Fn();
}
function se(i, o, t, e, A) {
  return QA(A - -385, e);
}
function LA(i, o, t, e, A) {
  return QA(o - -247, i);
}
function QA(i, o) {
  i = i - 138;
  const t = Fn();
  let e = t[i];
  if (QA.VWRfCB === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    QA.WlmYee = g, QA.UCptyD = {}, QA.VWRfCB = !0;
  }
  const n = t[711 * -5 + -5327 + 8882], r = i + n, a = QA.UCptyD[r];
  return a ? e = a : (QA.CwOmMw === void 0 && (QA.CwOmMw = !0), e = QA.WlmYee(e, o), QA.UCptyD[r] = e), e;
}
class mx {
  #A;
  [se(-247, -269, -179, "HkiG", -194) + se(-185, -90, -137, "oyZa", -134)] = [];
  [le(96, 79, 61, 156, "qKlE") + GA(-621, -684, "xjaY") + GA(-602, -663, "v3vi") + "r"];
  [se(-63, -112, -61, "8AGj", -115) + GA(-499, -516, "$hB5") + "s"] = {};
  constructor(o, t = {}) {
    function e(a, g, c, I, s) {
      return le(a - 44, g - 135, I - 1108, I - 479, g);
    }
    function A(a, g, c, I, s) {
      return se(a - 470, g - 111, c - 10, s, a - 171);
    }
    this[A(-65, -94, -87, -26, "4Uk7") + A(-40, 0, 46, -15, "KBl2") + r(-570, "sqts", -666, -585) + "r"] = o;
    function n(a, g, c, I, s) {
      return LA(s, a - -302);
    }
    this.#A = px;
    function r(a, g, c, I, s) {
      return LA(g, I - -482);
    }
    this[e(1135, "aEJa", 1093, 1115) + A(-38, -14, -80, 4, "rwIZ") + n(-244, -188, -288, -197, "Ji)X")](t);
  }
  async [GA(-580, -654, "((r0") + GA(-640, -608, "oyZa") + GA(-595, -580, "Vblf")]() {
    function o(I, s, C, Q, E) {
      return LA(s, C - 639);
    }
    if (!Io()) {
      if (c(663, 709, "((r0", 747, 707) === o(495, "sqts", 543)) return;
      {
        _0x974142(_0x5cc890);
        const I = {};
        return I[t(-575, -569, -543, "rwIZ", -573)] = _0xeb18a5, I;
      }
    }
    function t(I, s, C, Q, E) {
      return GA(I - 290, E - 97, Q);
    }
    const e = await this[o(647, "buw]", 679) + "st"](this.#A[o(605, "aEJa", 653)]), A = await this[a(368, 383, 322, "BVCX") + "st"](this.#A[a(477, 412, 382, "v3vi")]);
    function n(I, s, C, Q, E) {
      return ve(I - 1489, s - 1, E);
    }
    const r = {};
    function a(I, s, C, Q, E) {
      return le(I - 325, s - 147, I - 341, Q - 414, Q);
    }
    r[t(-630, -570, -604, "v3vi", -575) + n(728, 732, 724, 768, "vUQV")] = e[t(-473, -528, -480, "mcHl", -510) + "ge"], r[a(305, 349, 399, "buw]") + t(-531, -462, -396, "oyZa", -463)] = A[a(456, 464, 374, "%t5k") + "ge"];
    const g = r;
    function c(I, s, C, Q, E) {
      return GA(I - 86, E - 1326, C);
    }
    this[t(-348, -330, -497, "Ji)X", -420) + t(-519, -512, -462, "xjaY", -434)][c(785, 657, "Ji)X", 729, 689)](g);
  }
  async [se(-161, -138, -248, "ulFm", -163) + "st"](o) {
    const { abortAfterMs: t, fallbackConstraints: e, maxTestDuration: A, primaryConstraints: n, runAmount: r, runDurationCutoffFactor: a } = o;
    let g = -4748 + -1 * -4748, c = r, I, s = this[d(-657, -617, "((r0") + h(-797, -843, -722, -775, "3P0w") + C("4Uk7", 49, 156, 102, 73) + "r"][h(-666, -754, -650, -679, "mcHl") + B(-53, -25, -161, "BVCX", -102) + E("WM4A", -433, -302, -346, -351) + "s"](this[B(-125, -43, -120, "vZdn", -74) + B(-36, -18, -67, ")@oN", 18) + "s"], n);
    function C(p, m, w, b, y) {
      return LA(p, y - 128);
    }
    for (let p = -2 * 867 + -7622 + -1 * -9356; p < r; p++)
      if (E("0#@j", -264, -382, -373, -358) === d(-550, -584, "obQg")) ({ deviceId: _0x3b06ff } = _0x3eecf6);
      else {
        if (g > A * a)
          if (B(-75, -48, -124, "Vblf", -137) === E("UK$b", -352, -270, -245, -294)) this[d(-635, -720, "so^h") + E("y(y6", -276, -325, -269, -334) + E("WM4A", -363, -222, -238, -286) + "r"][B(-52, 4, -21, "AmL&", -73) + d(-683, -589, "KBl2") + E("qKlE", -127, -191, -216, -200) + d(-671, -760, "3P0w") + "or"](_0x54cb78[h(-693, -768, -683, -639, "p]U#")]) && (_0x2513be = this[h(-759, -679, -705, -715, "xjaY") + h(-802, -768, -881, -857, "c08z") + h(-697, -774, -662, -662, "y(y6") + "r"][E("vZdn", -200, -126, -164, -217) + C("$rnz", 148, 120, 108, 128) + h(-728, -771, -771, -802, "0[yo") + "s"](this[C("z1xI", 190, 236, 131, 184) + h(-816, -782, -811, -836, "8AGj") + "s"], _0x3980b3), _0x242786--);
          else {
            c = p;
            break;
          }
        const m = await this[C("rwIZ", 27, 63, 160, 114) + B(7, -30, 48, "qKlE", 20) + C("Vblf", 65, -25, 0, 62) + d(-591, -613, "UK$b")](s, t);
        if (m[C("BVCX", 171, 123, 19, 84)]) {
          if (h(-711, -625, -785, -746, "mcHl") !== E("4Uk7", -352, -445, -328, -378)) return;
          this[B(-77, -104, 19, "$hB5", -13) + B(-143, -117, -103, "WM4A", -65) + d(-575, -492, "0[yo") + "r"][E("LVQA", -281, -235, -283, -242) + d(-681, -768, "y(y6") + C("8AGj", 229, 167, 67, 157) + h(-811, -726, -884, -780, "ufWM") + "or"](m[h(-673, -624, -586, -630, "3P0w")]) && (E("FK#F", -232, -315, -369, -280) !== h(-771, -865, -859, -792, "c08z") ? (s = this[h(-709, -765, -758, -693, "obQg") + E("so^h", -196, -274, -315, -279) + C("E9RE", 81, -1, 128, 71) + "r"][E(")@oN", -294, -263, -170, -232) + d(-664, -714, "rwIZ") + C("qKlE", 284, 162, 211, 209) + "s"](this[E("hkxo", -233, -287, -222, -310) + B(-174, -86, -111, "KJmx", -114) + "s"], e), p--) : _0x2601c2[B(-210, -103, -77, "$hB5", -119)]());
        }
        m[E("so^h", -320, -215, -387, -303) + C("LVQA", 134, 169, 168, 187)] && (h(-834, -911, -844, -864, "KBl2") !== C(")B$6", 72, 245, 178, 165) ? this[B(-95, -62, -92, "xjaY", -22) + B(-101, -75, -78, "ulFm", -93) + "s"] = _0x3c40bb : { deviceId: I } = m), g += m[B(-121, -96, 23, "oyZa", -68) + h(-808, -776, -730, -852, "v3vi")] || 711 * -5 + -5327 + 8882;
      }
    const Q = Math[C(")@oN", 110, 32, 24, 47)](g / (c || -6643 + 1 * 7269 + -625));
    function E(p, m, w, b, y) {
      return se(p - 118, m - 456, w - 73, p, y - -136);
    }
    function B(p, m, w, b, y) {
      return se(p - 349, m - 206, w - 428, b, y - 110);
    }
    this[d(-598, -669, "ulFm") + E("UHlm", -237, -187, -131, -197) + "s"] = this[E("AmL&", -255, -290, -314, -257) + B(-54, 127, 113, "UK$b", 36) + B(-11, -2, 25, "wku9", 37) + "r"][E("4Uk7", -262, -177, -144, -233) + d(-549, -530, "buw]") + B(101, 27, 92, "so^h", 25) + "s"](this[h(-710, -639, -774, -644, "UK$b") + B(-5, -21, -22, "ufWM", -96) + "s"], {}, I);
    function d(p, m, w, b, y) {
      return GA(p - 110, p - -3, w);
    }
    const u = {};
    function h(p, m, w, b, y) {
      return se(p - 261, m - 424, w - 405, y, p - -606);
    }
    return u[E("$hB5", -366, -321, -357, -363) + "ge"] = Q, u;
  }
  async [ve(-679, -674, "UK$b") + ve(-756, -802, "$hB5") + ve(-616, -706, "so^h") + se(-150, -190, -289, "0[yo", -218)](o, t) {
    function e(s, C, Q, E, B) {
      return se(s - 53, C - 23, Q - 156, E, s - 238);
    }
    function A(s, C, Q, E, B) {
      return le(s - 180, C - 111, Q - -86, E - 403, E);
    }
    const n = Date[I(784, "hkxo", 770)]();
    function r(s, C, Q, E, B) {
      return LA(Q, B - -586);
    }
    const a = new AbortController();
    function g(s, C, Q, E, B) {
      return ve(Q - 601, C - 286, E);
    }
    const c = setTimeout(() => {
      function s(Q, E, B, d, u) {
        return I(Q - 413, u, E - 263);
      }
      function C(Q, E, B, d, u) {
        return I(Q - 160, u, B - -466);
      }
      s(979, 1032, 942, 1041, "3P0w") !== s(1045, 1093, 1078, 1176, "UK$b") && a[C(282, 317, 271, 203, "al3Y")]();
    }, t);
    function I(s, C, Q, E, B) {
      return LA(C, Q - 750);
    }
    try {
      if (I(734, "$hB5", 701, 733, 611) === e(12, -28, -83, "0[yo", -78)) _0x2dbd3c = this[I(786, "vZdn", 826, 743, 856) + I(742, "xjaY", 651, 606, 683) + g(-122, -202, -142, "E9RE", -157) + "r"][g(-80, -161, -73, "HkiG", -10) + r(-700, -665, ")B$6", -671, -607) + g(-75, -228, -157, "8AGj", -225) + "s"](this[e(134, 171, 96, "UK$b", 69) + r(-506, -593, "$hB5", -480, -517) + "s"], _0x338d7b), _0x2ce9e6--;
      else {
        const { deviceId: s, mediaStream: C } = await this[r(-535, -652, "p]U#", -512, -578) + A(-69, 13, -55, "xlS&", 19) + e(136, 112, 130, "mcHl", 108) + "r"][r(-603, -727, "al3Y", -719, -645) + A(-20, -54, -113, "wku9", -70) + g(-64, -186, -120, "vZdn", -65) + "m"](o, a[r(-694, -580, "KBl2", -580, -665) + "l"]), Q = Date[A(-31, 124, 59, "0#@j", -16)]() - n;
        Rt(C), clearTimeout(c);
        const E = {};
        return E[r(-565, -567, "Vblf", -533, -519) + e(98, 142, 52, "AmL&", 145)] = Q, E[r(-608, -658, "al3Y", -535, -590) + I(686, "((r0", 702, 778, 689)] = s, E;
      }
    } catch (s) {
      if (A(70, 66, -5, "xlS&") === r(-605, -672, "ulFm", -613, -678)) {
        const C = {};
        return C[e(103, 77, 37, "p]U#") + I(806, "LVQA", 726)] = this[I(829, "0#@j", 799) + A(-33, -52, -77, "Ji)X")], C[A(-113, -10, -47, "3P0w") + r(-503, -614, "0#@j", -509, -560) + "e"] = !1, C;
      } else {
        clearTimeout(c);
        const C = {};
        return C[A(-57, -81, -44, "vUQV")] = s, C;
      }
    }
  }
  [ve(-786, -823, "vZdn") + LA("4Uk7", 27) + ve(-613, -558, "mcHl")](o) {
    function t(e, A, n, r, a) {
      return GA(e - 33, e - 512, A);
    }
    Object[t(-21, "vUQV") + "es"](o)[t(-167, "al3Y") + "ch"](([e, A]) => {
      const n = e;
      this.#A[n] && (this.#A[n] = { ...this.#A[n], ...A });
    });
  }
  [LA("p]U#", 50) + GA(-520, -522, "3P0w") + LA(")B$6", -108)](o) {
    function t(e, A, n, r, a) {
      return LA(A, e - 916);
    }
    this[t(950, "UK$b") + t(988, "sqts") + "s"] = o;
  }
  async [LA("$hB5", -8) + GA(-736, -686, "^[&%") + LA("WM4A", -51) + ve(-684, -662, "%t5k") + GA(-620, -615, "c08z")](o) {
    if (this[n(-367, -478, -428, "vUQV") + e(-552, -524, ")B$6")][e(-464, -531, "AmL&") + "h"] === 447 * 22 + 7371 + -37 * 465) return;
    const t = this[n(-318, -386, -378, "0#@j") + r(903, "RfUh", 955, 889, 972)][n(-464, -395, -417, "hkxo") + "h"] - (8824 * 1 + 1812 + 5 * -2127);
    function e(g, c, I, s, C) {
      return se(g - 107, c - 222, I - 134, I, c - -417);
    }
    const A = await hx();
    function n(g, c, I, s, C) {
      return ve(I - 259, c - 124, s);
    }
    function r(g, c, I, s, C) {
      return le(g - 186, c - 94, C - 893, s - 210, c);
    }
    function a(g, c, I, s, C) {
      return le(g - 218, c - 30, g - 1050, s - 310, c);
    }
    this[n(-324, -406, -378, "0#@j") + e(-503, -581, "HkiG")][t] = { ...this[e(-625, -574, "%t5k") + a(1013, "qKlE", 975, 1052)][t], optSetting: A };
  }
  [le(75, 213, 132, 155, "WM4A") + GA(-669, -667, "hkxo") + le(-15, 126, 71, 13, "RfUh") + le(50, 159, 100, 155, "8AGj") + LA("E9RE", -102)]() {
    const o = {};
    function t(n, r, a, g, c) {
      return LA(r, a - 532);
    }
    function e(n, r, a, g, c) {
      return GA(n - 186, g - 1041, n);
    }
    o[e("hkxo", 409, 472, 474) + e("vUQV", 319, 331, 394)] = this[t(474, "hkxo", 550) + e(")B$6", 539, 522, 487)];
    function A(n, r, a, g, c) {
      return le(n - 356, r - 468, g - -422, g - 335, a);
    }
    return o[t(581, "aEJa", 587) + A(-390, -321, "vUQV", -384) + "e"] = !1, o;
  }
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return $(c - -862, I);
  }
  function e(a, g, c, I, s) {
    return $(g - -897, a);
  }
  function A(a, g, c, I, s) {
    return $(I - 517, s);
  }
  const n = i();
  function r(a, g, c, I, s) {
    return $(I - -572, s);
  }
  for (; ; )
    try {
      if (-parseInt(A(1172, 1278, 1189, 1196, "uMa1")) / 1 * (-parseInt(A(1044, 944, 954, 1044, "vAgp")) / 2) + parseInt(A(1143, 1104, 1090, 1059, "i6jp")) / 3 + -parseInt(t(-428, -345, -365, "zTwM", -442)) / 4 + -parseInt(t(-432, -263, -346, "y73c", -272)) / 5 + parseInt(r(179, 9, 192, 110, "uMa1")) / 6 + parseInt(t(-279, -381, -336, "7[]]", -298)) / 7 + -parseInt(e("YOz^", -216, -212, -298, -133)) / 8 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Mn, 167123 * -2 + 1 * -67790 + 589279);
function qA(i, o, t, e, A) {
  return $(o - 608, t);
}
function Mn() {
  const i = ["Bv7cMctdHG", "WQfGWRvdWP0", "W4rBWPPYbq", "wCkvwf8P", "mSkEWQxdLq", "W4xcKNjYva", "umkHmSorW7e", "lNRcTSkojq", "iKdcNq", "WQJcQ8klW7m0", "W7jAtSoR", "qmoIW7alkG", "jLNcHW", "FKBcKq", "tCo6W6aUhW", "WQDOWQrvWPC", "WOFcHWG", "W6RcJuhdN8oO", "W47cR1JdMCoK", "WQpdSCkpWRjd", "WOlcVCkNrXi", "ESkDpgBdNq", "F8kqjwlcQW", "WP7dKmoZdf8", "kmkYW6SeymoHWQ5wmCoGmKhdKq", "WQvMWQm", "CCk5tKiE", "WPNcNCo0W60", "WP5ZAZeAW7JcKXddVb0akW", "BdnbWPT1", "xSkAoMBdNW", "xmkHlCoFW7O", "W4RcRgDkdq", "AtnmWPv8", "ymoFW6qckW", "W7hcULm", "EWpdQCk5W5e", "WRjaWRu", "WPZdK8oG", "W6PCrmoRqG", "W4NcT8oHgSkw", "kblcUCoFW6m", "W5VdO2edWOO", "WONdGmogzSoQ", "jCoOW53dVSoT", "WPzzWOC", "AGxdTmk1W4e", "W65qtCoHwW", "jSo3W5VdMmo2", "hMpcGgpdOeBcKJu", "rSo/W7Cipa", "umkMshJdUG", "W4zlWPbLhW", "W4NcUhm", "eLddMhaY", "W5VcMhnpwa", "WO/dNSo9b1G", "WQxcO8ojW49G", "xcFcO1RdJG", "sSkFggddIW", "W4LiWPjY", "W4NcIxzyra", "W5dcSmo2c8kl", "qHqjW6RcNa", "zCkvnuNcVq", "W57cLhPurG", "oH7cQ8otW68", "aSkzAa", "W5NdVMeKWPG", "W4lcNH5hkq", "W4xcQ8o3d8kq", "WOhcISk3W4CjkfdcVmo2WQO", "WPvHumoyWPG", "W47dGCkKWQ4bb8ozWRtcSmoxESoAxq", "WOJcJCk9W4LnvI3cUCoYWOb8CCoE", "CSkgWQCKnq", "nMqDW40RxmkdlCk5ebFcHhy", "B8kwow/cUG", "pwyAx8ov", "fxhdRmoH", "d2pcM8kYbW", "xmkHna", "vSo7jbXR", "mmkLWRnvACoqW4ldOsC9W6VcNq", "FKFcLLVdTG", "kmkZWQhdG8oU", "xtBcT1NdNq", "WOpdPwvftW", "WPVdJmouASoM", "lXVcQSoxW64", "i8kUwbJcTG", "xSklkKZdMq", "nvOk", "Csjn", "zSoIW6Cfla", "B1pcKdpdGq", "qsFcQq", "zmokrSk+W4W", "A8oNWRvCjG", "vSk5sfqa", "DCo/W7enla", "W5hcUYv4lq", "W7ldO8oKlKvMWRSXWRpdJ8kDjW", "DfVcMK7cOG", "WQJdJXCUma", "aeBdJNe7", "WPZcHMn7AG", "zbZdU8kZW4W", "pSk0WO8", "mwdcNCkDlW", "uSkkkMddJG", "a1pdNMW7", "pNWaxW", "w8kkiq", "mSkuWOFcHtG", "sbiMW73cJq", "W5ZdUmoIWPSq", "W73cTCkYW65W", "WPNcNCoLW5nE", "WOpdKLzwra", "W740W4mHW6u", "FmkYWOVcISkUBSoVu8kQtSkcW5C", "WOVdHmoMb00", "vSkxENJdOG", "WOnbxmo9WOu", "W43dICoNWPaA", "W4pcGXu", "ysvwdSkcfSklWO0UW4ZdPqNdJW", "WQFcSmkHtru", "w8kLnSotW6S", "pCkDWQFdGSoU", "WOFdGuGuAubvyY/cQmkMdCkM", "W6y5WOTZWRLXCSoT", "WRJcR8k2xcG", "lqlcU8ozW7a", "WP7dK8o7g1G", "DSoAvSkEW4i", "zmomrmkdW5O", "WQJcSCktsce", "WQ/cT8k/EXm", "WOfGWRvdWP0", "pSkqWRRdHmo7", "W6PUWR57oG", "W63cVvvgga", "WOdcNgLJFq", "y1VcNKBcUa", "jCk+WOZcJd0", "EuhdV8khWRtdLd94WR/dQwnw", "eHldMhOQ", "FSkhm2dcVq", "WRdcUCk0zW", "W64DW5W7W7i", "WPtcL8oxW4LM", "gSkwWQddG8oG", "WPNdVCkpWQ9k", "omkAWR7dMCo5", "zmomxmkDW4S", "wtRcVLpdHa", "cCkdBW", "W4/cQmo7kCkx", "CmoGW5qnpa", "WQxcKmk5EX0", "W5VdTxad", "W7pdSCowWReP", "mwayW40PxCo2gmk7ntxcUa", "i2CxvSou", "fNVdJW", "a2VdSmo/Dq", "WPFdGf8mWP8", "xCkaph3dJG", "Ch0btSkr", "W7buwq", "W5VdKNe", "W4pcVubB", "sZBcRf/dIa", "WRxdUSkeWRrF", "W4VcTez5eG", "W77cT0/dNCoR", "zGNdQmk3W4a", "W5rez8oRxq", "E8odWR0Mkq", "n2xcMmkbaq", "WPhdK38mWOK", "umkGAxJdOG", "WPxcKmo0W5zt", "wH8hW7VcLW", "D8kwWROMoq", "WPddIxDftG", "yrnEWPLZ", "ymozW6y", "mmkqWQ/dTCoO", "WQxdRbpcHCoXW6hdJ8owWRNcQq", "jvVdJ3OX", "nSkZDadcPW", "WOldHwvjqG", "iCkGwa", "W7NcGrvsoq", "WO/cH8oOW7ns", "mf3dNNm6", "kmkwWQBdL8oP", "WOpdJMC", "WQldJrS7FG", "wYqXW4ZcMa", "WRjXWRbfWOy", "BeVcIcBdLW", "vLhcNspdNa", "W7/cHwvEuq", "umoJlqDM", "rSo/W6Wxla", "W55DuSoxtW", "e8kTBZRcVq", "WQtdJreQ", "W4NdKCoVWOC8"];
  return Mn = function() {
    return i;
  }, Mn();
}
function ot(i, o, t, e, A) {
  return $(o - -95, e);
}
function $(i, o) {
  i = i - (1227 * 7 + 1 * 4003 + 12109 * -1);
  const t = Mn();
  let e = t[i];
  if ($.ibPcAn === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    $.zSHXvQ = g, $.wRKNoP = {}, $.ibPcAn = !0;
  }
  const n = t[3 * -671 + 1750 + 263], r = i + n, a = $.wRKNoP[r];
  return a ? e = a : ($.vCIPSJ === void 0 && ($.vCIPSJ = !0), e = $.zSHXvQ(e, o), $.wRKNoP[r] = e), e;
}
function ce(i, o, t, e, A) {
  return $(o - 0, A);
}
function Wo(i, o, t, e, A) {
  return $(A - -839, e);
}
function VA(i, o, t, e, A) {
  return $(A - 764, o);
}
class yx {
  [VA(1279, "Hgu^", 1251, 1281, 1281) + VA(1348, "F(1o", 1448, 1426, 1423) + ce(510, 579, 516, 634, "YOz^")](o) {
    function t(c, I, s, C, Q) {
      return ce(c - 418, Q - 726, s - 485, C - 218, s);
    }
    function e(c, I, s, C, Q) {
      return ce(c - 24, s - -947, s - 228, C - 68, c);
    }
    function A(c, I, s, C, Q) {
      return ot(c - 283, C - -572, s - 396, Q);
    }
    const n = Er(o);
    function r(c, I, s, C, Q) {
      return VA(c - 194, I, s - 240, C - 374, C - -561);
    }
    function a(c, I, s, C, Q) {
      return ot(c - 101, s - -80, s - 228, Q);
    }
    const g = n?.[e("zTwM", -318, -424, -377) + e("uMa1", -355, -427, -440) + "s"]();
    if (!g?.[a(516, 569, 508, 490, "91t0") + "t"] || !g?.[e("@FHQ", -240, -320, -356)] || !g?.[e("IB0c", -358, -464, -476) + A(-56, -56, 2, -100, "5][A")])
      throw e("zTwM", -396, -419, -315) === A(-29, 29, -83, -42, "]9LW") ? new _0x2f343c(A(15, -128, -85, -74, "Qs3&") + r(733, "u4si", 687, 768) + a(506, 479, 517, 533, "0cG#") + r(768, "#&t9", 801, 766) + r(726, "Qs3&", 827, 746) + t(1448, 1506, "7[]]", 1345, 1403)) : new D(a(437, 582, 483, 491, "B*7u") + t(1272, 1281, "nv8B", 1246, 1238) + a(486, 318, 421, 465, "LQv&") + A(-171, -95, -215, -143, "eTT!") + a(380, 385, 400, 297, "91t0") + t(1273, 1348, "!TD8", 1365, 1320));
    if (n)
      if (A(-174, -124, -109, -113, "kI9H") !== e("DT!3", -173, -275, -292)) _0x63cbc4[t(1302, 1334, "!TD8", 1247, 1311) + a(361, 496, 458, 481, "vAgp")](_0x49d4de);
      else return g[t(1280, 1291, "VQe)", 1409, 1315) + r(689, "u4si", 751, 690)];
  }
  [ce(573, 498, 582, 404, "0cG#") + qA(1203, 1250, "B*7u") + VA(1371, "2fU8", 1294, 1290, 1374) + ot(404, 492, 560, "Qs3&")]() {
    function o(a, g, c, I, s) {
      return VA(a - 365, I, c - 275, I - 253, c - -1354);
    }
    function t(a, g, c, I, s) {
      return ce(a - 426, a - -468, c - 456, I - 337, I);
    }
    const e = document[n(739, 738, "DT!3", 808, 714) + o(-71, -4, -34, "zTwM") + n(667, 654, "Kk*p", 663, 582)](A(231, "IB0c", 169));
    e[n(517, 456, "i6jp", 462, 558) + r(255, "]9LW", 288, 230)] = !0, e[r(181, "91t0", 75, 168)] = !0;
    function A(a, g, c, I, s) {
      return Wo(a - 281, g - 131, c - 158, g, c - 357);
    }
    e[r(157, "Hgu^", 180, 218) + r(138, "$8MB", 187, 189) + "e"] = !0, e[o(-6, 63, 76, "czxe")][t(27, -18, 125, "B*7u") + t(153, 71, 53, "0cG#")] = t(63, 126, -37, "No6S") + n(448, 615, "7[]]", 527, 550), e[A(91, "pWr(", 117)][A(206, "y73c", 174) + "ty"] = "0", e[o(-92, 101, 2, "YOz^")][r(238, "AyFk", 136, 175) + o(-55, -135, -105, "AyFk") + o(-26, -39, -99, "czxe")] = o(-30, 62, 28, "6r3a");
    function n(a, g, c, I, s) {
      return Wo(a - 471, g - 0, c - 358, c, s - 868);
    }
    function r(a, g, c, I, s) {
      return VA(a - 72, g, c - 47, I - 140, I - -1177);
    }
    return e[o(-79, -91, -28, "qI(a")][r(168, "4syO", 148, 250)] = t(185, 201, 92, "2fU8"), e[t(71, 86, 47, "bHfO")][t(169, 116, 250, "hlsO") + "t"] = A(74, "7[]]", 142), e;
  }
  async [ot(454, 481, 563, "vka6") + ce(588, 536, 632, 633, "!TD8") + ce(595, 680, 702, 760, "i8o2") + qA(1148, 1116, "O&kJ")](o, t, e) {
    return new Promise((A, n) => {
      function r(I, s, C, Q, E) {
        return $(I - -775, Q);
      }
      function a(I, s, C, Q, E) {
        return $(E - -441, Q);
      }
      function g(I, s, C, Q, E) {
        return $(C - -914, E);
      }
      function c(I, s, C, Q, E) {
        return $(Q - -567, s);
      }
      if (a(98, 86, 86, "6r3a", 133) !== a(176, 251, 64, "3#YE", 170)) {
        const I = () => {
          function Q(u, h, p, m, w) {
            return a(u - 399, h - 417, p - 491, m, p - 517);
          }
          function E(u, h, p, m, w) {
            return g(u - 315, h - 296, u - 499, m - 33, w);
          }
          function B(u, h, p, m, w) {
            return a(u - 340, h - 72, p - 483, h, u - 479);
          }
          function d(u, h, p, m, w) {
            return g(u - 84, h - 169, u - 10, m - 32, h);
          }
          if (Q(666, 663, 613, "2fU8") !== E(81, -7, 120, 18, "7[]]")) this[Q(577, 675, 648, "]9LW") + Q(619, 737, 693, "nv8B") + "eo"](o, t);
          else {
            const u = {};
            u[d(-306, "vAgp", -373, -391)] = _0xbf92cc, _0x2a66ee[B(677, "eTT!", 620) + d(-259, "vAgp", -206, -184)] = u;
          }
        }, s = {};
        s[g(-344, -236, -308, -358, "LQv&")] = !0, e?.[r(-289, -374, -288, "O&kJ") + c(-36, "YOz^", -114, -54) + a(142, 149, -9, "Qs3&", 59) + "r"](g(-332, -161, -254, -283, "2fU8"), I, s), (async () => {
          function Q(h, p, m, w, b) {
            return a(h - 268, p - 322, m - 180, h, p - 882);
          }
          function E(h, p, m, w, b) {
            return c(h - 147, m, m - 274, b - 1534);
          }
          function B(h, p, m, w, b) {
            return g(h - 277, p - 26, p - 1409, w - 370, h);
          }
          function d(h, p, m, w, b) {
            return r(m - 891, p - 302, m - 43, w);
          }
          function u(h, p, m, w, b) {
            return a(h - 240, p - 153, m - 356, w, b - -487);
          }
          if (d(828, 798, 721, "AyFk") !== Q("YZJL", 1038, 1076)) try {
            Q("6r3a", 1045, 1060, 972, 1044) !== d(802, 672, 744, "zTwM", 733) ? (_0x496198[E(1497, 1395, "Qs3&", 1471, 1473)](), _0xd3d05d(_0x358b5a), _0x3e4698[d(605, 633, 609, "$)&v", 532) + "e"]()) : (await o[E(1585, 1407, "zTwM", 1469, 1512)](), e?.[B("4syO", 1168, 1112, 1119, 1179) + u(-170, -159, -271, "VQe)", -233) + d(734, 529, 635, "i8o2", 576) + d(616, 738, 673, "5][A", 648)](Q("@FHQ", 1011, 1107, 1002, 976), I), A());
          } catch (h) {
            if (E(1705, 1574, "YOz^", 1639, 1632) === u(-467, -423, -396, "uMa1", -370)) {
              const p = { ..._0x4f48b7 }, m = p, w = { ...typeof m[B("VQe)", 1077, 1019, 1002)] == u(-235, -202, -177, "YZJL", -257) + "t" ? m[u(-335, -429, -409, "czxe", -376)] : {}, ..._0x5aff0b }, b = w;
              if (_0x30be1f) {
                const y = {};
                y[d(818, 788, 714, "vAgp")] = _0x4dcc9f, b[u(-348, -368, -406, "b@e[", -382) + d(724, 804, 732, "vka6")] = y;
              }
              return m[Q("vka6", 945, 899)] = b, m;
            } else e?.[d(588, 640, 657, "r6Q!") + E(1555, 1555, "F(1o", 1500, 1485) + Q("!TD8", 1134, 1090) + Q("YOz^", 1076, 1026)](B("!TD8", 1020, 985, 1093), I), Rt(t), n(h);
          }
          else _0x1d2ede?.[E(1721, 1641, "czxe", 1562, 1661) + B("hlsO", 1078, 1002, 1179) + d(526, 617, 631, "b@e[") + u(-290, -232, -285, "qI(a", -241)](d(759, 678, 780, "Hgu^"), _0x8daf57), _0x3d7daa(_0xfd8da4), _0x36bfb3(_0x2a9bab);
        })();
      } else return _0x377b07[g(-295, -363, -345, -312, "czxe") + c(-56, "Qs3&", 62, -6)];
    });
  }
  async [qA(1080, 1140, "No6S") + VA(1244, "@FHQ", 1310, 1237, 1313) + ce(561, 601, 670, 636, "4syO") + "m"](o, t) {
    const e = this[n(349, "kI9H", 455, 359) + n(266, "r6Q!", 286, 209) + s(1144, 1311, "F(1o", 1164, 1208) + s(1196, 1079, "vAgp", 1093, 1165)](), A = await navigator[n(279, "O&kJ", 282, 242) + n(361, "Rn#*", 315, 242) + "es"][n(372, "5][A", 453, 351) + s(1221, 1173, "#&t9", 1313, 1207) + "ia"](o);
    function n(C, Q, E, B, d) {
      return ce(C - 409, E - -223, E - 434, B - 147, Q);
    }
    const r = this[a(213, "5][A", 244) + a(323, "Rn#*", 234) + n(322, "4syO", 390, 466)](A);
    e[g(959, 872, "No6S", 966) + I(1430, 1483, 1441, "Rn#*")] = A;
    function a(C, Q, E, B, d) {
      return Wo(C - 137, Q - 414, E - 448, Q, E - 433);
    }
    try {
      if (s(1094, 1227, "YOz^", 1259, 1177) !== I(1397, 1448, 1385, "zTwM", 1477)) {
        const C = _0x5d1655[s(1029, 1027, "B*7u", 1121, 1119) + I(1465, 1426, 1440, "uMa1", 1526) + I(1468, 1510, 1497, "VQe)", 1514)](a(124, "vAgp", 203, 96, 229));
        return C[s(1243, 1356, "O&kJ", 1186, 1268) + g(1094, 994, "6r3a", 1040, 981)] = !0, C[s(1356, 1340, "u4si", 1241, 1316)] = !0, C[s(1208, 1112, "pWr(", 1092, 1120) + s(1143, 1147, "pWr(", 1240, 1230) + "e"] = !0, C[g(995, 1009, "bHfO", 1013, 986)][I(1525, 1559, 1635, "yD8W", 1523) + n(312, "r6Q!", 280, 224, 242)] = n(545, "Qs3&", 439, 507, 344) + a(105, "hlsO", 82, 95, 123), C[g(1116, 1071, "DT!3", 1104, 1193)][g(875, 882, "yD8W", 976, 907) + "ty"] = "0", C[g(1214, 1193, "czxe", 1140, 1170)][s(1113, 1086, "Hgu^", 1230, 1160) + a(84, "VQe)", 108, 188, 62) + g(1144, 1094, "Kk*p", 1149, 1123)] = s(1043, 1079, "u4si", 1209, 1137), C[g(1063, 1016, "u4si", 1034, 988)][a(105, "YZJL", 174, 202, 271)] = I(1504, 1505, 1414, "3#YE", 1506), C[I(1539, 1466, 1379, "No6S", 1531)][n(380, "eTT!", 391, 444, 486) + "t"] = g(1105, 1126, "0cG#", 1094, 1098), C;
      } else await this[s(1152, 1279, "uMa1", 1170, 1237) + I(1466, 1479, 1518, "O&kJ", 1529) + I(1487, 1486, 1431, "Rn#*", 1552) + I(1703, 1604, 1606, "eTT!", 1596)](e, A, t);
    } catch (C) {
      a(51, "3#YE", 88) === n(405, "!TD8", 325, 264) ? D[a(179, "y73c", 246) + a(236, "Hgu^", 240)](C) : this[g(885, 865, "i6jp", 958) + a(100, "B*7u", 149) + "eo"](_0x3301de, _0x9c7b8e);
    }
    function g(C, Q, E, B, d) {
      return VA(C - 432, E, E - 175, B - 310, B - -290);
    }
    const c = {};
    function I(C, Q, E, B, d) {
      return qA(C - 295, Q - 307, B);
    }
    function s(C, Q, E, B, d) {
      return qA(C - 215, d - 22, E);
    }
    return c[n(401, "hlsO", 418, 399) + a(131, "]9LW", 220) + "m"] = A, c[I(1394, 1465, 1403, "!TD8") + n(433, "B*7u", 361, 363)] = r, c;
  }
  [ce(446, 499, 429, 451, "LQv&") + qA(1365, 1275, "O&kJ") + "eo"](o, t) {
    function e(n, r, a, g, c) {
      return VA(n - 292, a, a - 132, g - 287, g - -247);
    }
    o[A(1571, 1524, 1541, 1628, "vAgp")]();
    function A(n, r, a, g, c) {
      return qA(n - 132, n - 340, c);
    }
    Rt(t), o[e(1183, 1073, "6r3a", 1172) + "e"]();
  }
  [qA(1249, 1223, "vka6") + ce(513, 544, 560, 623, "DT!3") + qA(1202, 1148, "0cG#") + ot(349, 415, 400, "YZJL") + "or"](o) {
    function t(n, r, a, g, c) {
      return ot(n - 150, a - 991, a - 186, c);
    }
    function e(n, r, a, g, c) {
      return qA(n - 204, g - -238, c);
    }
    function A(n, r, a, g, c) {
      return ot(n - 239, c - 504, a - 133, n);
    }
    return o instanceof DOMException && o[A("2fU8", 1175, 1067, 1006, 1077)] === A("7[]]", 928, 910, 894, 1e3) + e(766, 918, 830, 871, "bHfO") + t(1544, 1478, 1550, 1501, "yD8W") + e(1038, 1095, 893, 999, "O&kJ");
  }
  [qA(1137, 1181, "yD8W") + qA(1267, 1211, "B*7u") + VA(1343, "pWr(", 1408, 1442, 1372) + "s"](o = {}, t = {}, e) {
    const A = { ...o };
    function n(Q, E, B, d, u) {
      return Wo(Q - 212, E - 285, B - 55, u, Q - 1134);
    }
    const r = A;
    function a(Q, E, B, d, u) {
      return VA(Q - 386, Q, B - 412, d - 98, E - -406);
    }
    function g(Q, E, B, d, u) {
      return qA(Q - 232, B - -768, u);
    }
    const c = { ...typeof r[s("i6jp", 1345, 1476, 1409)] == s("zTwM", 1266, 1288, 1269) + "t" ? r[n(942, 856, 968, 840, "6r3a")] : {}, ...t }, I = c;
    function s(Q, E, B, d, u) {
      return VA(Q - 316, Q, B - 270, d - 226, d - -29);
    }
    function C(Q, E, B, d, u) {
      return VA(Q - 372, d, B - 239, d - 177, u - -1535);
    }
    if (e)
      if (n(983, 897, 973, 1060, "vka6") === n(917, 855, 877, 945, "B*7u")) {
        const Q = {};
        Q[C(-10, -184, -133, "4syO", -102)] = e, I[n(944, 934, 878, 904, "i6jp") + s("4syO", 1301, 1393, 1396)] = Q;
      } else return _0x22922b instanceof _0x8f43da && _0x325f7d[s("!TD8", 1248, 1301, 1347)] === g(630, 517, 530, 488, "$8MB") + n(943, 844, 1030, 1006, "kI9H") + a("3#YE", 992, 898, 1060) + a("B*7u", 977, 951, 967);
    return r[g(504, 601, 510, 414, "kI9H")] = I, r;
  }
}
const lr = {};
lr.FRONT = "user", lr.BACK = "environment";
const Xr = lr;
function $r() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function n0() {
  return /Android/i.test(navigator.userAgent);
}
function Eo() {
  return /Firefox/i.test(navigator.userAgent);
}
function Ws() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const wx = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
};
function Fs() {
  return navigator.userAgent;
}
function Dx() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const zo = {};
zo.width = 1920, zo.height = 1080, zo.facingMode = Xr.FRONT;
const bx = zo;
class Ms {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: o = bx, minCameraShorterSide: t = yC } = {}) {
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.#A = e;
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
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Rt(t);
  }
  async open(o = {}) {
    n0() && Eo() && await $i(7744 + 4 * 2470 + 17174 * -1), this.#t = await navigator.mediaDevices.getUserMedia(o), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get next device");
    const o = await pi(), t = this.videoTrack.getSettings(), e = o.findIndex((n) => n.deviceId === t.deviceId);
    return (o[e + (-447 * 16 + -3 * 2777 + 15484)] ?? o[-6090 + 2089 * -1 + 8179]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(o) {
    if (!this.videoTrack) throw new D("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, o);
  }
  close() {
    this.#t && (Rt(this.#t), this.#t = null);
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = o;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = this.#e, A;
  }
  getSettings() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const o = this.getSettings();
    if (!o.width) throw new D("Video width is undefined");
    if (!o.height) throw new D("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings();
    return (await us()).find((A) => A.deviceId === o.deviceId)?.label;
  }
  async getBestCameraInfo(o) {
    if (o !== Xr.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if ($r())
      return (await pi()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const o = await pi();
    for (const t of o) {
      n0() && Eo() && await $i(450);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const n = {};
        n.video = A;
        const r = await navigator.mediaDevices.getUserMedia(n), a = Er(r);
        if (!a) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = a.getSettings(), c = { ...g };
        c.deviceName = a.label;
        const I = {};
        I.cameraProperties = c;
        const s = I;
        this.#e.push(s), Rt(r);
      } catch (e) {
        e instanceof Error && D.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.#A.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    const o = this.videoTrack?.getSettings();
    if (!o?.height || !o?.width)
      throw this.close(), new D("Could not init camera settings");
    if (typeof this.#A.minCameraShorterSide != "number") return;
    if (Math.min(o?.width, o?.height) < this.#A.minCameraShorterSide)
      throw this.close(), new D("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
class kx {
  #A = !1;
  videoHandler;
  cameraHandler;
  videoRecorder;
  performanceCheckup;
  cameraEvaluator;
  constructor({ cameraEvaluator: o, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: n }) {
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = o, this.videoRecorder = n;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    this.#A || (this.#A = !0, await Ms.requestPermission());
  }
  async startFirstVideoStream(o = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), dx() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t?.deviceId);
    !Eo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    if (!this.cameraHandler.videoTrack) throw new D("Video track must be initialized to take photo");
    const o = this.cameraHandler.videoTrack?.getSettings();
    if (!o?.width) throw new D("Cant take photo - video width is undefined");
    if (!o?.height) throw new D("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new D("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 1351 * 1 + 1845 + -4 * 799, -8649 * 1 + 9403 * -1 + -9026 * -2), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(o) {
    await this.cameraHandler.open(o), wx() && (this.cameraHandler.close(), await this.cameraHandler.open(o)), await this.mountVideoStream(), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const o = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(o);
    this.pauseStream(), !Eo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
    if (!this.cameraHandler.mediaStream) throw new D("Media Stream must be initialized to stream");
    await this.videoHandler.play(this.cameraHandler.mediaStream);
  }
}
class Sx {
  #A;
  constructor(o) {
    this.#A = o;
  }
  get videoElement() {
    return this.#A;
  }
  async play(o) {
    this.#A.srcObject = o, await this.#A.play();
  }
  stop() {
    this.#A.srcObject = null;
  }
  hasSrcObject() {
    return !!this.#A.srcObject;
  }
}
function oe(i, o, t, e, A) {
  return EA(t - -939, A);
}
function ZA(i, o, t, e, A) {
  return EA(o - 630, e);
}
function Ln() {
  var i = ["u8keqSkSW6S", "WPaJwcLU", "W5uEsmoMq3vqjSoZWRJcOG", "W7qhW7VdNCki", "WPXhWORdPwG", "kZdcLW", "kxLMwSozg297W7ZdTmkxy8o2", "smowW4lcKWm", "oCk0vCkJ", "W73cImoBuZ0", "wW3cQmocwCo2imk3W6KDWPbXvq", "WP8sWOjyWRi", "BI/dM8klvG", "hCk/qM4", "Af8B", "imoPerDIimoPWP3cLSoMbmk3WQm", "W6RdVWxcRCof", "pColWRdcGem", "imopWRO", "W57cKfu/kmosW4u8fY0p", "W5iFtCoKqcD6k8orWR/cJmoD", "WPD9ee4z", "imoqWQZcMLW", "W6qfW7RdJmkW", "cxaPn8oU", "WOvpWP0", "W4RdTGdcK8oJ", "W5uCW6VdISk2", "W7hcO8oeqJO", "aCoWWQ3cPxG", "hN3dSSkhaa", "yWldG05mW5a8oLWpW4a3Da", "zmo3W4dcM38", "WRZdQeuCWPi", "WPPUgeuh", "l8k0vmkPgW", "c1FdR8kbgG", "WOvucmkshG", "u8kHWQ3dRCkT", "kxdcOItcNCo+nhTN", "vsC3cmkz", "DSkfvCk8W7q", "W7yqW7hdMCkX", "B14fWPKU", "WRJdO3GhWOq", "WP3dR08lWRC", "WOH1ouGL", "W6dcK3mPqW", "AcaG", "W7qhBSkZas8AW6ddTa", "AmkWWONdPCk2", "WQFdIr0Ibq", "WObIf08i", "vSkFvCk+W6S", "WQ9ummkyhq", "WPnReMqD", "WQDmlSkjhq", "W4a7d0KNW6qwsW", "W4FcJx4", "gmkmva", "WQTyoW", "W44KAM0o", "WPRcUW8", "WPGIva", "WPCMqYb7", "WPmYrmowW7zqqW", "dfldTmkidW", "ymk3teGd", "zGxdQYRcVq", "DcFdQXZcLG", "FSkdWQVdT8kC", "W7OZW47dVSkr", "bmkcWP4QgG", "W7JdTau", "dmkucmkeDW", "W5xcMmkSW5X/", "ASoacmk+rrZcNSo7nJJdTmkL", "q8otbSkfWQhcKCkvW5ldMh/dPrVdRG", "CmooW5SScW", "W4mgwSoAW78", "kxRdHCoKW7G", "aSo7W4q", "W7mAW78", "Cr7dVw9L", "W4idjmo7W5q", "oCorW4pcShvncW", "m2ddICo+W7q", "DXm5W43cRWVcVGO", "A8oAW5JcGaq", "p33dK8ojW7i", "WOLPWP3dUKm", "BCoEW4/cKXm", "WRddTv8RWQ0", "W7CmBComsJeOW77dOqtdKW", "m8oyWPdcH1K", "iSkRrq", "k31Hw8oBg25XW57dT8kJtCoK", "WRldJbS2ma", "ewWYkmo8", "W5u2rSoSW74", "neNcHaGy", "EcaGj8kf", "WP1AyCk+WPe7WPLHkhPIFa", "lSkZtW", "eSkFbq", "EJhdOs/cIW", "v8kexSk7", "WQBdNSkeeMxdG2WVc8kvAY8", "j8k1fCoJwG", "Ca/dV3bd", "W7qnBSoctZOQW4JdQXFdMq", "umk/vCkSW6O", "ysJdGmkmsW", "WOpdJrX2Bq", "WQhdGaamdq", "AYVdVqlcSa", "W7pdUu3cISki", "eLJcKrKw", "BctdI8kBua", "W6VdSWpcLCou", "W5S1x3uu", "WRRdLdFdTCkT", "WO/dJrfnEG", "o8kruCoSga", "BrtdPW", "WPm3WO5vWP8", "WRBdGay+cW"];
  return Ln = function() {
    return i;
  }, Ln();
}
function We(i, o, t, e, A) {
  return EA(t - -534, o);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return EA(s - 34, c);
  }
  function e(g, c, I, s, C) {
    return EA(I - 668, c);
  }
  var A = i();
  function n(g, c, I, s, C) {
    return EA(g - -228, c);
  }
  function r(g, c, I, s, C) {
    return EA(s - 924, I);
  }
  for (; ; )
    try {
      var a = parseInt(r(1255, 1289, "2uy@", 1269, 1222)) / 1 + parseInt(e(1032, ")jkS", 1022, 1066, 974)) / 2 + -parseInt(r(1251, 1262, "2uy@", 1286, 1235)) / 3 * (-parseInt(e(939, "0a]c", 977, 987, 993)) / 4) + -parseInt(e(995, "Sdh1", 1005, 1001, 969)) / 5 * (-parseInt(n(55, "YOaa", 32, 5, 112)) / 6) + parseInt(t(232, "2Rd!", 274, 296, 338)) / 7 + parseInt(t(241, "nM76", 348, 301, 312)) / 8 + parseInt(r(1225, 1345, "p@@w", 1283, 1246)) / 9 * (-parseInt(r(1258, 1249, "f@Hf", 1215, 1227)) / 10);
      if (a === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ln, 1180572 + -7 * 89785);
function ue(i, o, t, e, A) {
  return EA(i - -428, A);
}
function EA(i, o) {
  i = i - (6087 * -1 + -4822 + -1 * -11156);
  var t = Ln(), e = t[i];
  if (EA.uQXlov === void 0) {
    var A = function(c) {
      for (var I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (var u = 0, h = s.length; u < h; u++)
        C += "%" + ("00" + s.charCodeAt(u).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, n = function(c, I) {
      var s = [], C = 0, Q, E = "";
      c = A(c);
      var B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (var d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    EA.WoPlip = n, EA.FitVWj = {}, EA.uQXlov = !0;
  }
  var r = t[-2 * -2717 + -2 * 3870 + 1 * 2306], a = i + r, g = EA.FitVWj[a];
  return g ? e = g : (EA.ZlYRem === void 0 && (EA.ZlYRem = !0), e = EA.WoPlip(e, o), EA.FitVWj[a] = e), e;
}
function fe(i, o, t, e, A) {
  return EA(o - -382, t);
}
class Gx {
  [ue(-134, -172, -107, -178, "5#eY") + ue(-71, -87, -31, -46, "f@Hf") + fe(-47, -82, "!STz")] = 1055 + 1087 * 1 + -2142;
  [oe(-737, -739, -676, -717, "@[F]") + We(-271, "]zfR", -231) + oe(-531, -638, -590, -584, "]zfR") + fe(-27, -67, "pDC%")];
  [oe(-528, -525, -575, -542, "4Gzs") + fe(-108, -90, "!STz") + "p"] = void 0;
  constructor() {
    function o(A, n, r, a, g) {
      return ue(n - 89, n - 475, r - 318, a - 241, g);
    }
    function t(A, n, r, a, g) {
      return ue(r - 829, n - 428, r - 110, a - 161, n);
    }
    function e(A, n, r, a, g) {
      return ue(a - 204, n - 185, r - 154, a - 201, g);
    }
    this[t(706, "!uiX", 739, 707) + e(85, 152, 122, 126, "]ap*") + t(643, "By22", 670, 676) + e(121, 47, 148, 87, "aO2$")] = Date[o(11, -25, 26, -18, "HJ!U")]();
  }
  [oe(-689, -650, -691, -665, "3NPg") + We(-248, "@[F]", -284) + ZA(956, 977, 978, "0Thp")]() {
    function o(r, a, g, c, I) {
      return fe(r - 377, a - -567, c);
    }
    function t(r, a, g, c, I) {
      return ue(a - 367, a - 24, g - 299, c - 273, r);
    }
    function e(r, a, g, c, I) {
      return oe(r - 390, a - 131, g - 177, c - 160, a);
    }
    function A(r, a, g, c, I) {
      return ZA(r - 186, r - -833, g - 282, I);
    }
    this[n(883, 882, "z^LZ", 896) + o(-632, -605, -639, "o!&(") + e(-362, "*MQP", -406, -389)]++;
    function n(r, a, g, c, I) {
      return oe(r - 264, a - 349, a - 1481, c - 141, g);
    }
    this[n(812, 869, "*[rs", 914) + n(928, 873, "9!I@", 830) + t("bp^h", 294, 244, 242)] === -12547 + -12548 * -1 && (A(117, 73, 95, 126, "f@Hf") !== n(770, 820, "cWQc", 816) ? this[t(")jkS", 275, 248, 287) + e(-456, "wLeF", -463, -412) + "p"] = Date[e(-518, "(Way", -513, -526)]() - this[e(-453, "p@@w", -501, -448) + t("E1!v", 312, 287, 375) + t("bp^h", 226, 282, 230) + t("2uy@", 251, 277, 294)] : this[t("gJU6", 191, 137, 150) + o(-689, -670, -729, "5#eY") + "p"] = _0x9bd0a0[n(858, 808, "1)Ow", 858)]() - this[n(852, 806, "4Gzs", 843) + n(755, 795, "pDC%", 819) + t("f@Hf", 306, 301, 331) + e(-440, "GaUr", -485, -523)]);
  }
  [We(-110, "(Way", -173) + ue(-68, -82, -78, -30, "EKbh") + fe(-75, -39, "z^LZ") + ZA(890, 923, 894, "gJU6") + "up"]() {
    if (!Io())
      return e(677, 692, 658, "vNmw") === e(688, 704, 653, "%#Kj") ? void 0 : this[e(747, 686, 739, "%#Kj") + o(-368, -309, "z^LZ", -333) + "p"];
    function o(r, a, g, c, I) {
      return ZA(r - 99, c - -1222, g - 401, g);
    }
    this[o(-230, -178, "!F!m", -227) + t(-180, "bKN!", -145, -145, -147) + A(-270, -293, -320, -321, "9(*X")] = -1 * -5863 + -6149 * -1 + -12012;
    function t(r, a, g, c, I) {
      return We(r - 111, a, I - 98);
    }
    function e(r, a, g, c, I) {
      return We(r - 119, c, r - 909);
    }
    function A(r, a, g, c, I) {
      return ZA(r - 224, c - -1208, g - 230, I);
    }
    this[t(-159, "2Rd!", -115, -127, -148) + o(-344, -270, "vNmw", -302) + "p"] = void 0;
    function n(r, a, g, c, I) {
      return oe(r - 385, a - 222, r - 635, c - 489, a);
    }
    window[n(31, "(Way", 30, 49) + n(-24, "p@@w", -7, 20) + A(-297, -266, -185, -248, "rI@%") + o(-268, -310, "r]pv", -327)](A(-230, -269, -289, -252, "*MQP") + "wn", this[n(-18, "0a]c", 17, -53) + e(717, 779, 748, "GaUr") + t(-86, "wLeF", -180, -113, -126)][n(54, "gJU6", 100, 35)](this));
  }
  [ue(-143, -201, -173, -144, "o!&(") + fe(-105, -109, "0a]c") + fe(-75, -76, "2uy@") + ZA(1024, 999, 985, "YOaa") + "up"]() {
    if (!Io()) {
      if (n(781, 736, "0a]c", 786, 779) === n(783, 784, "By22", 809, 827)) return;
      var o = {};
      return o[t(-528, -474, -479, "]zfR") + t(-432, -429, -426, "0a]c") + "e"] = !1, o;
    }
    function t(r, a, g, c, I) {
      return ue(g - -302, a - 447, g - 355, c - 40, c);
    }
    function e(r, a, g, c, I) {
      return oe(r - 235, a - 379, r - 1729, c - 92, g);
    }
    function A(r, a, g, c, I) {
      return We(r - 216, r, I - -339);
    }
    function n(r, a, g, c, I) {
      return ZA(r - 172, I - -149, g - 230, g);
    }
    window[n(809, 754, "0a]c", 742, 788) + n(790, 795, "!STz", 862, 834) + t(-408, -381, -398, "!uiX") + "r"](A("4Gzs", -509, -525, -442, -503) + "wn", this[n(823, 816, "Sdh1", 727, 765) + n(863, 832, "vNmw", 756, 803) + e(1123, 1080, "$Df!", 1180)][e(1050, 1020, "bp^h", 1066)](this));
  }
  [fe(-62, -77, "gJU6") + oe(-553, -635, -576, -560, "gJU6") + "lt"]() {
    function o(r, a, g, c, I) {
      return oe(r - 101, a - 132, a - 705, c - 72, g);
    }
    function t(r, a, g, c, I) {
      return oe(r - 48, a - 425, a - 669, c - 293, c);
    }
    if (!Io() || !this[o(117, 82, "pDC%", 45) + o(8, 25, "z^LZ", 72) + "p"])
      if (A(356, 384, "By22") !== o(101, 89, "5#eY", 96)) {
        var e = {};
        return e[o(73, 22, "GaUr", 29) + A(420, 471, "7oLj") + "e"] = !1, e;
      } else this[o(0, 61, "1)Ow", 15) + t(-2, 48, 44, "2Rd!") + A(409, 422, "nM76") + n(306, "By22", 260, 320)] = _0x4aef44[n(325, "5#eY", 339, 384)]();
    function A(r, a, g, c, I) {
      return ZA(r - 480, a - -527, g - 337, g);
    }
    function n(r, a, g, c, I) {
      return ZA(r - 498, c - -580, g - 230, a);
    }
    return { performance: !0, hiccupAmount: this[n(330, "!F!m", 280, 297) + A(330, 378, "5#eY") + t(72, 81, 76, "9!I@") + "t"](), firstHiccup: this[A(484, 427, "g]2l") + n(350, "o!&(", 379, 346) + t(-26, -15, -31, "5#eY") + o(137, 118, "YOaa", 130) + "ss"]() };
  }
  [ZA(864, 898, 932, "cWQc") + oe(-697, -703, -663, -626, "]ap*") + ue(-146, -206, -208, -130, "2Rd!") + "t"]() {
    function o(e, A, n, r, a) {
      return ZA(e - 261, A - -1596, n - 74, e);
    }
    function t(e, A, n, r, a) {
      return ZA(e - 470, n - -1266, n - 283, r);
    }
    return this[o("f@Hf", -645, -687) + o("!uiX", -625, -655) + t(-273, -313, -311, "cWQc")];
  }
  [ZA(1021, 996, 993, "]zfR") + We(-188, "o!&(", -238) + fe(-107, -108, "By22") + fe(-62, -74, "2uy@") + "ss"]() {
    function o(e, A, n, r, a) {
      return We(e - 189, a, n - 414);
    }
    function t(e, A, n, r, a) {
      return We(e - 211, n, r - 272);
    }
    return this[o(315, 212, 251, 284, "cWQc") + t(14, 93, "o!&(", 35) + "p"];
  }
}
const Nx = 480, Rx = 1817 * -1 + 1 * 2844 + -787, Aa = -2402 + -322 * 14 + 347 * 20, Ls = 15, Os = 13 * 348 + 4342 + -8858, ur = {};
ur.codec = "avc1.42E01E", ur.bitrate = 1e6;
const Fo = ur, vx = 2, Wx = 3e4;
class Fx {
  shouldBeTested = !0;
  testFramesSizesList = [];
  maximumTestFrames;
  maximumTestFramesSize;
  constructor(o, t) {
    this.maximumTestFrames = o, this.maximumTestFramesSize = t;
  }
  addTestFrame(o) {
    this.testFramesSizesList.push(o);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let o = 1 * 3177 + 1 * 1033 + 4210 * -1;
    for (const t of this.testFramesSizesList)
      o += t;
    return this.shouldBeTested = !1, o > this.maximumTestFramesSize;
  }
}
class Js {
  encoder;
  create(o) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), o(t, e);
    }, error: (t) => {
      throw D.fromError("Encoding error: " + t);
    } });
  }
  configure(o) {
    this.encoder && this.encoder.configure(o);
  }
  encode(o, t = !1) {
    if (this.encoder) {
      const e = {};
      e.keyFrame = t, this.encoder.encode(o, e);
    }
  }
  async close() {
    this.encoder && (await this.encoder.flush(), this.encoder.close(), this.encoder = void 0);
  }
  async isConfigSupported(o) {
    const t = await VideoEncoder.isConfigSupported(o);
    return t.supported ? t.supported : !1;
  }
  static isSupported() {
    return "VideoEncoder" in window;
  }
}
function Mx(i) {
  if (!i) return !1;
  const o = Js.isSupported();
  return !o && D.logError("Video encoding is not supported in this browser."), o;
}
const fr = {};
fr.LOW = "low", fr.STANDARD = "standard";
const On = fr, hr = {};
hr.SPS = "SPS", hr.PPS = "PPS";
const mi = hr;
class Lx {
  parseAVCCParameterSets(o) {
    try {
      let t = 0;
      if (t += -4 * -2070 + 6743 + 653 * -23, t >= o.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(o, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(o, t), n = {};
      return n.pictureParameterSet = A.parameterSet, n.sequenceParameterSet = e.parameterSet, n;
    } catch (t) {
      D.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(o, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(o, t, mi.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(o, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(o, t, mi.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(o, t, e) {
    if (t >= o.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === mi.SPS ? o[t] & 31 : o[t], n = t + (4102 * 2 + 9902 + -18105);
    return this.skipToNextSectionAndReturnFirstParameterSet(o, n, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(o, t, e) {
    let A = t;
    for (let r = 0; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(o, A);
      if (A = a.nextOffset, a.parameterSet && r === -1 * -7001 + 7174 * 1 + -14175) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const n = {};
    return n.nextOffset = A, n;
  }
  extractSingleParameterSetFromAVCC(o, t) {
    if (t + (-2739 * 1 + -5398 + -3 * -2713) > o.length) {
      const c = {};
      return c.nextOffset = t, c;
    }
    const e = new DataView(o.buffer, o.byteOffset), A = e.getUint16(t, !1), n = t + (6343 + 9 * -591 + -1022), r = n + A;
    if (r > o.length) {
      const c = {};
      return c.nextOffset = t, c;
    }
    const a = o.slice(n, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class Ox {
  parameterSetsHandler;
  START_CODE = new Uint8Array([6 * 557 + 5972 + 9314 * -1, -14696 + 22 * 668, -7 * 1220 + -5992 * -1 + 2548 * 1, -1 * 3123 + 4832 + -1708]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new Lx();
  }
  extractParameterSets(o) {
    if (this.parameterSets = void 0, !o.description) return;
    const t = this.normalizeBufferSource(o.description);
    t && (this.parameterSets = this.parameterSetsHandler.parseAVCCParameterSets(t) || {});
  }
  process(o) {
    return this.buildH264AnnexBRawVideo(o);
  }
  buildH264AnnexBRawVideo(o) {
    const t = [...this.getParameterSetsAnnexB(), ...this.getAnnexBParts(o)];
    return this.combineRawVideoParts(t);
  }
  getParameterSetsAnnexB() {
    const o = [];
    return this.parameterSets?.["sequenceParameterSet"] && (o.push(this.START_CODE), o.push(this.parameterSets.sequenceParameterSet)), this.parameterSets?.["pictureParameterSet"] && (o.push(this.START_CODE), o.push(this.parameterSets.pictureParameterSet)), o;
  }
  getAnnexBParts(o) {
    const t = [];
    for (const e of o)
      t.push(...this.convertAVCCToAnnexB(e));
    return t;
  }
  convertAVCCToAnnexB(o) {
    const t = [];
    let e = 0;
    for (; e < o.length; ) {
      const A = this.extractNALUnit(o, e);
      if (!A) break;
      t.push(this.START_CODE), t.push(A.data), e = A.nextOffset;
    }
    return t;
  }
  extractNALUnit(o, t) {
    if (t + (3909 * 1 + 5357 * 1 + -9262 * 1) > o.length) return;
    const e = new DataView(o.buffer, o.byteOffset), A = e.getUint32(t, !1), n = t + (6522 + -1289 * -1 + -7807), r = n + A;
    if (!(r > o.length))
      return { data: o.slice(n, r), nextOffset: r };
  }
  normalizeBufferSource(o) {
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (o instanceof SharedArrayBuffer) return this.copyFromSharedArrayBuffer(o);
    if (o instanceof Uint8Array) return o;
  }
  copyFromSharedArrayBuffer(o) {
    const t = new ArrayBuffer(o.byteLength), e = new Uint8Array(o), A = new Uint8Array(t);
    return A.set(e), A;
  }
  combineRawVideoParts(o) {
    const t = o.reduce((n, r) => n + r.length, 0), e = new Uint8Array(t);
    let A = 5120 + -320 * 16;
    for (const n of o)
      e.set(n, A), A += n.length;
    return e;
  }
}
class Jx {
  chunks = [];
  maxChunksCount;
  constructor(o = Os, t = Aa) {
    this.cleanSetup(o, t);
  }
  cleanSetup(o, t) {
    this.clear(), this.maxChunksCount = (o + (3327 + -2 * 2137 + 948)) * t;
  }
  add(o) {
    this.chunks.push(o), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const o = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(6335 + 3469 * 1 + 2 * -4902, o));
  }
}
class i0 {
  codec;
  bitrate;
  resolution;
  framerate;
  setCodec(o) {
    return this.codec = o, this;
  }
  setBitrate(o) {
    return this.bitrate = o, this;
  }
  setResolution(o) {
    return this.resolution = o, this;
  }
  setFramerate(o) {
    return this.framerate = o, this;
  }
  validate() {
    if (!this.codec) throw D.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw D.logError("VideoEncoderConfigBuilder: resolution is not set.");
  }
  reset() {
    return this.codec = void 0, this.bitrate = void 0, this.resolution = void 0, this.framerate = void 0, this;
  }
  build() {
    this.validate();
    const { height: o, width: t } = this.resolution, e = {};
    return e.codec = this.codec, e.bitrate = this.bitrate, e.width = t, e.height = o, e.framerate = this.framerate, e;
  }
}
class Ux {
  getScaledResolution(o, t) {
    const { height: e, width: A } = o, n = A / e;
    if (Ws() && e > A) {
      const a = e, g = A, c = a / g, I = t * c;
      return { width: Math.floor(I / (7 * 1220 + -7250 + -1288)) * (537 + -1 * 535), height: t };
    }
    if (A < e) {
      const a = t / n;
      return { width: t, height: Math.floor(a / 2) * (-1744 * -1 + -9577 + 7835) };
    }
    const r = t * n;
    return { width: Math.floor(r / (7 * 701 + -7311 + -2 * -1203)) * (5065 + 1 * -5063), height: t };
  }
  create(o, t) {
    switch (o) {
      case On.STANDARD:
        return new i0().setBitrate(Fo.bitrate).setCodec(Fo.codec).setFramerate(Aa).setResolution(this.getScaledResolution(t, Nx)).build();
      case On.LOW:
        return new i0().setBitrate(Fo.bitrate).setCodec(Fo.codec).setFramerate(Ls).setResolution(this.getScaledResolution(t, Rx)).build();
      default:
        throw D.logError("Unsupported preset for video encoder config");
    }
  }
}
class Yx {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = On.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(o, t, e, A, n) {
    this.videoProcessor = o, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new Ux(), this.chunkStorage = new Jx(), this.cameraFramerate = Aa, this.customEvent = n, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(o, t) {
    this.chunkStorage.add(o), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(o.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(Os, Ls), this.currentConfigPreset = On.LOW, this.startRecording();
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
  async handleCameraPropsChange(o) {
    if (Ws()) return;
    const t = o.detail?.["cameraResolution"], e = this.currentResolution?.width !== t?.width, A = this.currentResolution?.height !== t?.height;
    !e && !A || this.restartRecording();
  }
  startRecording(o = this.currentConfigPreset) {
    if (this.captureIntervalId) {
      D.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      D.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(o), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), this.removeCameraPropsChangedListener(), await this.videoEncoder.close();
  }
  configureVideoEncoder(o) {
    if (this.currentResolution = this.cameraHandler?.getResolution(), !this.currentResolution) {
      D.logError("Camera resolution could not be determined.");
      return;
    }
    let t;
    try {
      t = this.videoEncoderConfigFactory.create(o, this.currentResolution);
    } catch (e) {
      D.logError("Failed to create video encoder configuration: " + e);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(t)) {
      D.logError("The provided video encoder configuration is not supported.");
      return;
    }
    this.videoEncoder.configure(t), t.framerate && (this.cameraFramerate = t.framerate);
  }
  createVideoElement(o) {
    if (this.videoElement) return;
    const t = document.createElement("video");
    t.srcObject = o, t.playsInline = !0, t.muted = !0, t.play(), this.videoElement = t;
  }
  createCaptureInterval() {
    if (!this.videoElement) {
      D.logError("Video element is not created.");
      return;
    }
    let o = -5391 + 5391 * 1;
    const t = this.cameraFramerate, e = (-2 * 3278 + 3 * -3274 + 17378) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), n = o % t === 1 * -8531 + -2 * -497 + 7537;
        this.videoEncoder.encode(A, n), o++, A.close();
      }
    }, e);
  }
  clearCaptureInterval() {
    this.captureIntervalId && (clearInterval(this.captureIntervalId), this.captureIntervalId = void 0);
  }
  getRecording() {
    const o = this.chunkStorage.getChunks(), t = o.map((n) => {
      const r = new Uint8Array(n.byteLength);
      return n.copyTo(r), r;
    }), e = this.videoProcessor.process(t), A = {};
    return A.frameRate = this.cameraFramerate, A.bytes = e, A;
  }
}
class Px {
  videoProcessor;
  videoEncoder;
  qualityTester;
  cameraHandler;
  customEvent;
  setVideoProcessor(o) {
    return this.videoProcessor = o, this;
  }
  setVideoEncoder(o) {
    return this.videoEncoder = o, this;
  }
  setQualityTester(o) {
    return this.qualityTester = o, this;
  }
  setCameraHandler(o) {
    return this.cameraHandler = o, this;
  }
  setCustomEvent(o) {
    return this.customEvent = o, this;
  }
  validate() {
    if (!this.videoProcessor) throw D.logError("VideoProcessor is not set");
    if (!this.videoEncoder) throw D.logError("VideoEncoder is not set");
    if (!this.qualityTester) throw D.logError("QualityTester is not set");
    if (!this.cameraHandler) throw D.logError("CameraHandler is not set");
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new Yx(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class _x {
  create({ cameraHandler: o, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!Mx(e)) return;
    const A = new Fx(vx, Wx), n = new Js(), r = new Ox();
    return new Px().setQualityTester(A).setVideoEncoder(n).setVideoProcessor(r).setCameraHandler(o).setCustomEvent(t).build();
  }
}
function Tx(i, o) {
  const { facingMode: t = Xr.FRONT, isVideoCaptureEnabled: e } = o ?? {}, A = _A(null), [n, r] = sA(), [a, g] = sA(), { handleError: c, setIsCameraReady: I } = MA(), s = be((Q) => {
    g((E) => vC(Q, E));
  }, []);
  eA(() => {
    if (!A.current) {
      c(new D("Something went wrong during video initialization"));
      return;
    }
    const Q = new Sx(A.current), E = new yx(), B = new mx(E), d = new Ms(), u = new Gx(), h = {};
    h.cameraHandler = d, h.customEvent = i, h.isVideoCaptureEnabled = e;
    const p = new _x().create(h), m = {};
    m.videoHandler = Q, m.cameraHandler = d, m.performanceCheckup = u, m.cameraEvaluator = B, m.videoRecorder = p;
    const w = new kx(m);
    return (async () => {
      try {
        const y = {};
        y.facingMode = t, await w.startFirstVideoStream(y);
      } catch (y) {
        if (y instanceof Error) {
          c(D.fromCameraError(y));
          return;
        }
      }
      r(w), I(!0), s(w.getCameraResolution());
    })(), () => {
      w?.stopStreaming(), I(!1), r(void 0);
    };
  }, [t, c, I, A, s, e, i]);
  const C = {};
  return C.cameraService = n, C.cameraResolution = a, C.onCameraResolutionChange = s, C.videoRef = A, C;
}
function Hx({
  cameraConfiguration: i,
  children: o,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: n, videoRef: r } = Tx(
    t,
    i
  ), a = uA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: n,
      videoRef: r
    }),
    [A, e, n, r]
  );
  return /* @__PURE__ */ k(Sn.Provider, { value: a, children: o });
}
function Kx({
  cameraConfiguration: i,
  children: o
}) {
  return /* @__PURE__ */ k(Hx, { cameraConfiguration: i, customEvent: xe, children: o });
}
let yi;
// @__NO_SIDE_EFFECTS__
function Us(i) {
  return {
    lang: i?.lang ?? yi?.lang,
    message: i?.message,
    abortEarly: i?.abortEarly ?? yi?.abortEarly,
    abortPipeEarly: i?.abortPipeEarly ?? yi?.abortPipeEarly
  };
}
let jx;
// @__NO_SIDE_EFFECTS__
function qx(i) {
  return jx?.get(i);
}
let Vx;
// @__NO_SIDE_EFFECTS__
function Zx(i) {
  return Vx?.get(i);
}
let zx;
// @__NO_SIDE_EFFECTS__
function Xx(i, o) {
  return zx?.get(i)?.get(o);
}
// @__NO_SIDE_EFFECTS__
function Ys(i) {
  const o = typeof i;
  return o === "string" ? `"${i}"` : o === "number" || o === "bigint" || o === "boolean" ? `${i}` : o === "object" || o === "function" ? (i && Object.getPrototypeOf(i)?.constructor?.name) ?? "null" : o;
}
function _t(i, o, t, e, A) {
  const n = A && "input" in A ? A.input : t.value, r = A?.expected ?? i.expects ?? null, a = A?.received ?? /* @__PURE__ */ Ys(n), g = {
    kind: i.kind,
    type: i.type,
    input: n,
    expected: r,
    received: a,
    message: `Invalid ${o}: ${r ? `Expected ${r} but r` : "R"}eceived ${a}`,
    requirement: i.requirement,
    path: A?.path,
    issues: A?.issues,
    lang: e.lang,
    abortEarly: e.abortEarly,
    abortPipeEarly: e.abortPipeEarly
  }, c = i.kind === "schema", I = A?.message ?? i.message ?? /* @__PURE__ */ Xx(i.reference, g.lang) ?? (c ? /* @__PURE__ */ Zx(g.lang) : null) ?? e.message ?? /* @__PURE__ */ qx(g.lang);
  I !== void 0 && (g.message = typeof I == "function" ? I(g) : I), c && (t.typed = !1), t.issues ? t.issues.push(g) : t.issues = [g];
}
// @__NO_SIDE_EFFECTS__
function po(i) {
  return {
    version: 1,
    vendor: "valibot",
    validate(o) {
      return i["~run"]({ value: o }, /* @__PURE__ */ Us());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $x(i, o) {
  const t = [...new Set(i)];
  return t.length > 1 ? `(${t.join(` ${o} `)})` : t[0] ?? "never";
}
var AQ = class extends Error {
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
function Ps(i, o) {
  return {
    kind: "validation",
    type: "min_length",
    reference: Ps,
    async: !1,
    expects: `>=${i}`,
    requirement: i,
    message: o,
    "~run"(t, e) {
      return t.typed && t.value.length < this.requirement && _t(this, "length", t, e, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eQ(i, o, t) {
  return typeof i.fallback == "function" ? i.fallback(o, t) : i.fallback;
}
// @__NO_SIDE_EFFECTS__
function tQ(i, o, t) {
  return typeof i.default == "function" ? i.default(o, t) : i.default;
}
// @__NO_SIDE_EFFECTS__
function _s(i, o) {
  return {
    kind: "schema",
    type: "array",
    reference: _s,
    expects: "Array",
    async: !1,
    item: i,
    message: o,
    get "~standard"() {
      return /* @__PURE__ */ po(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (Array.isArray(A)) {
        t.typed = !0, t.value = [];
        for (let n = 0; n < A.length; n++) {
          const r = A[n], a = this.item["~run"]({ value: r }, e);
          if (a.issues) {
            const g = {
              type: "array",
              origin: "value",
              input: A,
              key: n,
              value: r
            };
            for (const c of a.issues)
              c.path ? c.path.unshift(g) : c.path = [g], t.issues?.push(c);
            if (t.issues || (t.issues = a.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          a.typed || (t.typed = !1), t.value.push(a.value);
        }
      } else _t(this, "type", t, e);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pr(i) {
  return {
    kind: "schema",
    type: "function",
    reference: pr,
    expects: "Function",
    async: !1,
    message: i,
    get "~standard"() {
      return /* @__PURE__ */ po(this);
    },
    "~run"(o, t) {
      return typeof o.value == "function" ? o.typed = !0 : _t(this, "type", o, t), o;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ts(i, o) {
  return {
    kind: "schema",
    type: "object",
    reference: Ts,
    expects: "Object",
    async: !1,
    entries: i,
    message: o,
    get "~standard"() {
      return /* @__PURE__ */ po(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (A && typeof A == "object") {
        t.typed = !0, t.value = {};
        for (const n in this.entries) {
          const r = this.entries[n];
          if (n in A || (r.type === "exact_optional" || r.type === "optional" || r.type === "nullish") && r.default !== void 0) {
            const a = n in A ? A[n] : /* @__PURE__ */ tQ(r), g = r["~run"]({ value: a }, e);
            if (g.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: A,
                key: n,
                value: a
              };
              for (const I of g.issues)
                I.path ? I.path.unshift(c) : I.path = [c], t.issues?.push(I);
              if (t.issues || (t.issues = g.issues), e.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            g.typed || (t.typed = !1), t.value[n] = g.value;
          } else if (r.fallback !== void 0) t.value[n] = /* @__PURE__ */ eQ(r);
          else if (r.type !== "exact_optional" && r.type !== "optional" && r.type !== "nullish" && (_t(this, "key", t, e, {
            input: void 0,
            expected: `"${n}"`,
            path: [{
              type: "object",
              origin: "key",
              input: A,
              key: n,
              value: A[n]
            }]
          }), e.abortEarly))
            break;
        }
      } else _t(this, "type", t, e);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hs(i, o) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Hs,
    expects: /* @__PURE__ */ $x(i.map(Ys), "|"),
    async: !1,
    options: i,
    message: o,
    get "~standard"() {
      return /* @__PURE__ */ po(this);
    },
    "~run"(t, e) {
      return this.options.includes(t.value) ? t.typed = !0 : _t(this, "type", t, e), t;
    }
  };
}
function oQ(i, o, t) {
  const e = i["~run"]({ value: o }, /* @__PURE__ */ Us(t));
  if (e.issues) throw new AQ(e.issues);
  return e.value;
}
// @__NO_SIDE_EFFECTS__
function nQ(...i) {
  return {
    ...i[0],
    pipe: i,
    get "~standard"() {
      return /* @__PURE__ */ po(this);
    },
    "~run"(o, t) {
      for (const e of i) if (e.kind !== "metadata") {
        if (o.issues && (e.kind === "schema" || e.kind === "transformation")) {
          o.typed = !1;
          break;
        }
        (!o.issues || !t.abortEarly && !t.abortPipeEarly) && (o = e["~run"](o, t));
      }
      return o;
    }
  };
}
function iQ(i, o) {
  try {
    oQ(o, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: FC(i.assetsDirectoryPath)
  };
}
function rQ({
  children: i,
  configuration: o,
  validationSchema: t
}) {
  const e = uA(() => iQ(o, t), [o, t]);
  return /* @__PURE__ */ k(Hr.Provider, { value: e, children: i });
}
function aQ({
  children: i,
  configuration: o
}) {
  const t = Object.values(XA);
  return /* @__PURE__ */ k(rQ, { configuration: o, validationSchema: /* @__PURE__ */ Ts({
    challengeSequence: /* @__PURE__ */ nQ(
      /* @__PURE__ */ _s(
        /* @__PURE__ */ Hs(t, "Challenge sequence must be an array of valid challenge items")
      ),
      /* @__PURE__ */ Ps(4, "Challenge sequence must be at least 4 items")
    ),
    onComplete: /* @__PURE__ */ pr("On complete must be a function"),
    onError: /* @__PURE__ */ pr("On error must be a function")
  }), children: i });
}
const Jn = Ue(void 0);
Jn.displayName = "ControllerContext";
function Ks() {
  const i = Qe(
    Jn
  );
  if (i === void 0)
    throw new Error(`${Jn.displayName} must be used within a ControllerProvider`);
  return i;
}
function gQ({ children: i, controller: o }) {
  const t = uA(
    () => ({
      controller: o
    }),
    [o]
  );
  return /* @__PURE__ */ k(Jn.Provider, { value: t, children: i });
}
function aA(i, o) {
  i = i - (3147 * 3 + 5428 + -14749);
  const t = Un();
  let e = t[i];
  if (aA.aWHTvU === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    aA.uLhUlf = g, aA.UEhCdp = {}, aA.aWHTvU = !0;
  }
  const n = t[0], r = i + n, a = aA.UEhCdp[r];
  return a ? e = a : (aA.UgMaNm === void 0 && (aA.UgMaNm = !0), e = aA.uLhUlf(e, o), aA.UEhCdp[r] = e), e;
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return aA(I - -821, s);
  }
  function e(g, c, I, s, C) {
    return aA(s - -86, c);
  }
  function A(g, c, I, s, C) {
    return aA(s - 708, g);
  }
  const n = i();
  function r(g, c, I, s, C) {
    return aA(g - -865, c);
  }
  function a(g, c, I, s, C) {
    return aA(c - -659, g);
  }
  for (; ; )
    try {
      if (parseInt(a("vXVx", -519, -513, -520, -519)) / 1 + parseInt(e(53, "9r*c", 41, 49, 51)) / 2 + -parseInt(a("#cty", -529, -516, -544, -521)) / 3 * (-parseInt(r(-742, "9r*c", -747, -751, -749)) / 4) + parseInt(A("eP1e", 841, 844, 844, 842)) / 5 * (parseInt(a("vXVx", -509, -521, -523, -499)) / 6) + -parseInt(e(50, "1L)5", 44, 46, 42)) / 7 * (-parseInt(t(-709, -688, -693, "03nX", -703)) / 8) + -parseInt(A("GwMW", 816, 830, 828, 842)) / 9 + -parseInt(r(-717, "GwMW", -716, -715, -726)) / 10 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Un, 869006);
function Un() {
  const i = ["WRlcG1ldTZVdQgFcT8kolW", "mCoAWQ7dHa", "WPpdSXy", "iCofWO/cLb8UW6NcItfulSoB", "mSoFW6mXdmkiDJpdKr7dRmkcW5hdLG", "hCobWRncW7m", "WQbdWQjmW4pdPSokC097", "oCozW6e7a8kjDg/dMdNdR8kkW5q", "hLRdLYNdTSo+W6/dSCojWOhcQSoUWOK", "WP/dMIddJmom", "iXtdLCkCW6S5bq", "oSo6q8kZWOiZW4SDm8oB", "W5aQWQOYWOG", "hvtdNs7dVmo3W6NdRSoqWQtcPCoEWQC", "seHb", "xslcVqxdMbtdUIlcOq", "yIyOWPCCWRnGcCkmg8ozdNi", "WPJcVLpcR33dOb/dN8kNgdFdTG", "W5KIWR0", "WQ/dRYRcOCkoyCoze0LXtgC", "WOfZW7LKW43cVSoGpW/dKhTY", "h1rQb0y", "juBcQ8ooWP9TswS0q3hdVCot", "WOFcImoPySoFqeq4WRC+", "W7K3W5BcG24", "y8kyW7hdJSkzWPpcNmk1W7u", "nSkWWQvZW5XhfSouW7DDWOjDWOz5", "WQneWQblWPxcSSkzrufCe8okW5K", "WODppw8uh20", "EKrKcq", "yePPnmow"];
  return Un = function() {
    return i;
  }, Un();
}
async function js(i) {
  function o(g, c, I, s, C) {
    return aA(g - -579, s);
  }
  function t(g, c, I, s, C) {
    return aA(c - 625, I);
  }
  function e(g, c, I, s, C) {
    return aA(C - 219, g);
  }
  const A = new Uint8Array(i), n = await window[e("^pxP", 361, 368, 374, 368) + "o"][a(-9, -5, "pmqQ") + "e"][a(-21, -13, "Ly)8") + "t"](t(750, 747, "5@^X"), A);
  function r(g, c, I, s, C) {
    return aA(g - -911, s);
  }
  function a(g, c, I, s, C) {
    return aA(g - -146, I);
  }
  return Array[a(-1, -12, "Q7Zv")](new Uint8Array(n))[r(-780, -793, -778, "Ly)8")]((g) => g[o(-445, -453, -438, "&A$G") + e(")]c^", 338, 358, 350, 346)](4687 * -1 + -3056 + 7759)[a(-3, -12, "#Sk&") + e("NIyg", 371, 379, 376, 365)](632 * -2 + 6962 + -5696, "0"))[t(773, 767, "#Sk&")]("");
}
class sQ {
  localStorageKey;
  constructor(o = GC) {
    this.localStorageKey = o;
  }
  generateUuid() {
    return crypto.randomUUID();
  }
  generateSha1(o) {
    const t = new TextEncoder(), e = t.encode(o);
    return js(e);
  }
  async generateAndStoreDecoys() {
    for (const o of NC) {
      const t = this.generateUuid(), e = await this.generateSha1(t);
      localStorage.setItem(o, e);
    }
  }
  async generateAndStoreMainId() {
    const o = this.generateUuid(), t = await this.generateSha1(o);
    return localStorage.setItem(this.localStorageKey, t), t;
  }
  async generateAndStore() {
    return await this.generateAndStoreDecoys(), this.generateAndStoreMainId();
  }
  getMainStoredValue() {
    return this.getStoredValue(this.localStorageKey);
  }
  getStoredValue(o) {
    return localStorage.getItem(o) ?? void 0;
  }
  async get() {
    const o = this.getMainStoredValue();
    return o || this.generateAndStore();
  }
}
const mr = {};
mr.LIVENESS_CHALLENGE = "LIVENESS_CHALLENGE", mr.PASSIVE_LIVENESS = "PASSIVE_LIVENESS";
const T = mr, yr = {};
yr.ON_COMPLETE = "multi-range-auto-capture:on-complete", yr.DEV = "multi-range-auto-capture:dev";
const qs = yr, cQ = { ...qs, ...xe }, IQ = cQ;
const Vs = /* @__PURE__ */ Symbol("Comlink.proxy"), CQ = /* @__PURE__ */ Symbol("Comlink.endpoint"), Zs = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), wi = /* @__PURE__ */ Symbol("Comlink.finalizer"), Xo = /* @__PURE__ */ Symbol("Comlink.thrown"), zs = (i) => typeof i == "object" && i !== null || typeof i == "function", BQ = {
  canHandle: (i) => zs(i) && i[Vs],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return $s(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), ec(i);
  }
}, xQ = {
  canHandle: (i) => zs(i) && Xo in i,
  serialize({ value: i }) {
    let o;
    return i instanceof Error ? o = {
      isError: !0,
      value: {
        message: i.message,
        name: i.name,
        stack: i.stack
      }
    } : o = { isError: !1, value: i }, [o, []];
  },
  deserialize(i) {
    throw i.isError ? Object.assign(new Error(i.value.message), i.value) : i.value;
  }
}, Xs = /* @__PURE__ */ new Map([
  ["proxy", BQ],
  ["throw", xQ]
]);
function QQ(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function $s(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!QQ(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: n, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(ct);
    let c;
    try {
      const I = a.slice(0, -1).reduce((C, Q) => C[Q], i), s = a.reduce((C, Q) => C[Q], i);
      switch (r) {
        case "GET":
          c = s;
          break;
        case "SET":
          I[a.slice(-1)[0]] = ct(A.data.value), c = !0;
          break;
        case "APPLY":
          c = s.apply(I, g);
          break;
        case "CONSTRUCT":
          {
            const C = new s(...g);
            c = hQ(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: Q } = new MessageChannel();
            $s(i, Q), c = fQ(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (I) {
      c = { value: I, [Xo]: 0 };
    }
    Promise.resolve(c).catch((I) => ({ value: I, [Xo]: 0 })).then((I) => {
      const [s, C] = _n(I);
      o.postMessage(Object.assign(Object.assign({}, s), { id: n }), C), r === "RELEASE" && (o.removeEventListener("message", e), Ac(o), wi in i && typeof i[wi] == "function" && i[wi]());
    }).catch((I) => {
      const [s, C] = _n({
        value: new TypeError("Unserializable return value"),
        [Xo]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, s), { id: n }), C);
    });
  }), o.start && o.start();
}
function EQ(i) {
  return i.constructor.name === "MessagePort";
}
function Ac(i) {
  EQ(i) && i.close();
}
function ec(i, o) {
  const t = /* @__PURE__ */ new Map();
  return i.addEventListener("message", function(A) {
    const { data: n } = A;
    if (!n || !n.id)
      return;
    const r = t.get(n.id);
    if (r)
      try {
        r(n);
      } finally {
        t.delete(n.id);
      }
  }), wr(i, t, [], o);
}
function Mo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function tc(i) {
  return St(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    Ac(i);
  });
}
const Yn = /* @__PURE__ */ new WeakMap(), Pn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (Yn.get(i) || 0) - 1;
  Yn.set(i, o), o === 0 && tc(i);
});
function dQ(i, o) {
  const t = (Yn.get(o) || 0) + 1;
  Yn.set(o, t), Pn && Pn.register(i, o, i);
}
function lQ(i) {
  Pn && Pn.unregister(i);
}
function wr(i, o, t = [], e = function() {
}) {
  let A = !1;
  const n = new Proxy(e, {
    get(r, a) {
      if (Mo(A), a === Zs)
        return () => {
          lQ(n), tc(i), o.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => n };
        const g = St(i, o, {
          type: "GET",
          path: t.map((c) => c.toString())
        }).then(ct);
        return g.then.bind(g);
      }
      return wr(i, o, [...t, a]);
    },
    set(r, a, g) {
      Mo(A);
      const [c, I] = _n(g);
      return St(i, o, {
        type: "SET",
        path: [...t, a].map((s) => s.toString()),
        value: c
      }, I).then(ct);
    },
    apply(r, a, g) {
      Mo(A);
      const c = t[t.length - 1];
      if (c === CQ)
        return St(i, o, {
          type: "ENDPOINT"
        }).then(ct);
      if (c === "bind")
        return wr(i, o, t.slice(0, -1));
      const [I, s] = r0(g);
      return St(i, o, {
        type: "APPLY",
        path: t.map((C) => C.toString()),
        argumentList: I
      }, s).then(ct);
    },
    construct(r, a) {
      Mo(A);
      const [g, c] = r0(a);
      return St(i, o, {
        type: "CONSTRUCT",
        path: t.map((I) => I.toString()),
        argumentList: g
      }, c).then(ct);
    }
  });
  return dQ(n, i), n;
}
function uQ(i) {
  return Array.prototype.concat.apply([], i);
}
function r0(i) {
  const o = i.map(_n);
  return [o.map((t) => t[0]), uQ(o.map((t) => t[1]))];
}
const oc = /* @__PURE__ */ new WeakMap();
function fQ(i, o) {
  return oc.set(i, o), i;
}
function hQ(i) {
  return Object.assign(i, { [Vs]: !0 });
}
function _n(i) {
  for (const [o, t] of Xs)
    if (t.canHandle(i)) {
      const [e, A] = t.serialize(i);
      return [
        {
          type: "HANDLER",
          name: o,
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
    oc.get(i) || []
  ];
}
function ct(i) {
  switch (i.type) {
    case "HANDLER":
      return Xs.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function St(i, o, t, e) {
  return new Promise((A) => {
    const n = pQ();
    o.set(n, A), i.start && i.start(), i.postMessage(Object.assign({ id: n }, t), e);
  });
}
function pQ() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function nc() {
  return qg();
}
const ea = Ue(void 0);
ea.displayName = "CommonThresholdsContext";
function mQ() {
  const i = Qe(ea);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function ic() {
  return mQ();
}
class yQ {
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
  constructor(o, t, e, A, n, r, a, g, c) {
    this.assetsDirectoryPath = o, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = n, this.installationId = r, this.analytics = a, this.dispatcher = A, this.sessionToken = g, this.transactionCounting = c, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  verifyEnvironment() {
    Eo() && this.handleEnvironmentNotSupported();
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(o) {
    if (!this.currentDetection) throw new D("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, o);
  }
  transitionToDetection(o) {
    const t = this.currentDetection?.name, e = this.detections?.[o];
    if (!e) throw new D("Detection " + o + " not found");
    if (!this.allowedDetectionTransitions[t]?.includes(o)) throw new D("Illegal detection transition: " + t + " -> " + o);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new D("Detection not initialized");
    this.currentDetection.run();
  }
  reset() {
    this.currentDetection?.stop(), this.onCaptureData.clear(), this.setDetections(void 0), this.setCurrentDetection(void 0);
  }
  areVersionsCompatible(o) {
    return o === this.compatibleSamVersion;
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
  setCurrentDetection(o) {
    this.currentDetection = o, this.dispatcher.dispatchPhaseChangedEvent(o?.name);
  }
  setDetections(o) {
    this.detections = o;
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new D("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  handleEnvironmentNotSupported() {
    _r.warn(`
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
  setThresholds(o) {
    this.currentDetection?.setThresholds(o);
  }
  static getWorkerPath(o, t) {
    return "" + t.replace(Jg, "") + o;
  }
}
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, a0 = {}, Di = {}, bi, g0;
function wQ() {
  if (g0) return bi;
  g0 = 1, bi = i;
  function i(o, t) {
    for (var e = new Array(arguments.length - 1), A = 0, n = 2, r = !0; n < arguments.length; )
      e[A++] = arguments[n++];
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
        o.apply(t || null, e);
      } catch (c) {
        r && (r = !1, g(c));
      }
    });
  }
  return bi;
}
var s0 = {}, c0;
function DQ() {
  return c0 || (c0 = 1, (function(i) {
    var o = i;
    o.length = function(r) {
      var a = r.length;
      if (!a)
        return 0;
      for (var g = 0; --a % 4 > 1 && r.charAt(a) === "="; )
        ++g;
      return Math.ceil(r.length * 3) / 4 - g;
    };
    for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
      e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
    o.encode = function(r, a, g) {
      for (var c = null, I = [], s = 0, C = 0, Q; a < g; ) {
        var E = r[a++];
        switch (C) {
          case 0:
            I[s++] = t[E >> 2], Q = (E & 3) << 4, C = 1;
            break;
          case 1:
            I[s++] = t[Q | E >> 4], Q = (E & 15) << 2, C = 2;
            break;
          case 2:
            I[s++] = t[Q | E >> 6], I[s++] = t[E & 63], C = 0;
            break;
        }
        s > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, I)), s = 0);
      }
      return C && (I[s++] = t[Q], I[s++] = 61, C === 1 && (I[s++] = 61)), c ? (s && c.push(String.fromCharCode.apply(String, I.slice(0, s))), c.join("")) : String.fromCharCode.apply(String, I.slice(0, s));
    };
    var n = "invalid encoding";
    o.decode = function(r, a, g) {
      for (var c = g, I = 0, s, C = 0; C < r.length; ) {
        var Q = r.charCodeAt(C++);
        if (Q === 61 && I > 1)
          break;
        if ((Q = e[Q]) === void 0)
          throw Error(n);
        switch (I) {
          case 0:
            s = Q, I = 1;
            break;
          case 1:
            a[g++] = s << 2 | (Q & 48) >> 4, s = Q, I = 2;
            break;
          case 2:
            a[g++] = (s & 15) << 4 | (Q & 60) >> 2, s = Q, I = 3;
            break;
          case 3:
            a[g++] = (s & 3) << 6 | Q, I = 0;
            break;
        }
      }
      if (I === 1)
        throw Error(n);
      return g - c;
    }, o.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  })(s0)), s0;
}
var ki, I0;
function bQ() {
  if (I0) return ki;
  I0 = 1, ki = i;
  function i() {
    this._listeners = {};
  }
  return i.prototype.on = function(o, t, e) {
    return (this._listeners[o] || (this._listeners[o] = [])).push({
      fn: t,
      ctx: e || this
    }), this;
  }, i.prototype.off = function(o, t) {
    if (o === void 0)
      this._listeners = {};
    else if (t === void 0)
      this._listeners[o] = [];
    else
      for (var e = this._listeners[o], A = 0; A < e.length; )
        e[A].fn === t ? e.splice(A, 1) : ++A;
    return this;
  }, i.prototype.emit = function(o) {
    var t = this._listeners[o];
    if (t) {
      for (var e = [], A = 1; A < arguments.length; )
        e.push(arguments[A++]);
      for (A = 0; A < t.length; )
        t[A].fn.apply(t[A++].ctx, e);
    }
    return this;
  }, ki;
}
var Si, C0;
function kQ() {
  if (C0) return Si;
  C0 = 1, Si = i(i);
  function i(n) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function c(Q, E, B) {
        r[0] = Q, E[B] = a[0], E[B + 1] = a[1], E[B + 2] = a[2], E[B + 3] = a[3];
      }
      function I(Q, E, B) {
        r[0] = Q, E[B] = a[3], E[B + 1] = a[2], E[B + 2] = a[1], E[B + 3] = a[0];
      }
      n.writeFloatLE = g ? c : I, n.writeFloatBE = g ? I : c;
      function s(Q, E) {
        return a[0] = Q[E], a[1] = Q[E + 1], a[2] = Q[E + 2], a[3] = Q[E + 3], r[0];
      }
      function C(Q, E) {
        return a[3] = Q[E], a[2] = Q[E + 1], a[1] = Q[E + 2], a[0] = Q[E + 3], r[0];
      }
      n.readFloatLE = g ? s : C, n.readFloatBE = g ? C : s;
    })() : (function() {
      function r(g, c, I, s) {
        var C = c < 0 ? 1 : 0;
        if (C && (c = -c), c === 0)
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
          g((C << 31 | 2139095040) >>> 0, I, s);
        else if (c < 11754943508222875e-54)
          g((C << 31 | Math.round(c / 1401298464324817e-60)) >>> 0, I, s);
        else {
          var Q = Math.floor(Math.log(c) / Math.LN2), E = Math.round(c * Math.pow(2, -Q) * 8388608) & 8388607;
          g((C << 31 | Q + 127 << 23 | E) >>> 0, I, s);
        }
      }
      n.writeFloatLE = r.bind(null, o), n.writeFloatBE = r.bind(null, t);
      function a(g, c, I) {
        var s = g(c, I), C = (s >> 31) * 2 + 1, Q = s >>> 23 & 255, E = s & 8388607;
        return Q === 255 ? E ? NaN : C * (1 / 0) : Q === 0 ? C * 1401298464324817e-60 * E : C * Math.pow(2, Q - 150) * (E + 8388608);
      }
      n.readFloatLE = a.bind(null, e), n.readFloatBE = a.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function c(Q, E, B) {
        r[0] = Q, E[B] = a[0], E[B + 1] = a[1], E[B + 2] = a[2], E[B + 3] = a[3], E[B + 4] = a[4], E[B + 5] = a[5], E[B + 6] = a[6], E[B + 7] = a[7];
      }
      function I(Q, E, B) {
        r[0] = Q, E[B] = a[7], E[B + 1] = a[6], E[B + 2] = a[5], E[B + 3] = a[4], E[B + 4] = a[3], E[B + 5] = a[2], E[B + 6] = a[1], E[B + 7] = a[0];
      }
      n.writeDoubleLE = g ? c : I, n.writeDoubleBE = g ? I : c;
      function s(Q, E) {
        return a[0] = Q[E], a[1] = Q[E + 1], a[2] = Q[E + 2], a[3] = Q[E + 3], a[4] = Q[E + 4], a[5] = Q[E + 5], a[6] = Q[E + 6], a[7] = Q[E + 7], r[0];
      }
      function C(Q, E) {
        return a[7] = Q[E], a[6] = Q[E + 1], a[5] = Q[E + 2], a[4] = Q[E + 3], a[3] = Q[E + 4], a[2] = Q[E + 5], a[1] = Q[E + 6], a[0] = Q[E + 7], r[0];
      }
      n.readDoubleLE = g ? s : C, n.readDoubleBE = g ? C : s;
    })() : (function() {
      function r(g, c, I, s, C, Q) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          g(0, C, Q + c), g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, Q + I);
        else if (isNaN(s))
          g(0, C, Q + c), g(2146959360, C, Q + I);
        else if (s > 17976931348623157e292)
          g(0, C, Q + c), g((E << 31 | 2146435072) >>> 0, C, Q + I);
        else {
          var B;
          if (s < 22250738585072014e-324)
            B = s / 5e-324, g(B >>> 0, C, Q + c), g((E << 31 | B / 4294967296) >>> 0, C, Q + I);
          else {
            var d = Math.floor(Math.log(s) / Math.LN2);
            d === 1024 && (d = 1023), B = s * Math.pow(2, -d), g(B * 4503599627370496 >>> 0, C, Q + c), g((E << 31 | d + 1023 << 20 | B * 1048576 & 1048575) >>> 0, C, Q + I);
          }
        }
      }
      n.writeDoubleLE = r.bind(null, o, 0, 4), n.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, c, I, s, C) {
        var Q = g(s, C + c), E = g(s, C + I), B = (E >> 31) * 2 + 1, d = E >>> 20 & 2047, u = 4294967296 * (E & 1048575) + Q;
        return d === 2047 ? u ? NaN : B * (1 / 0) : d === 0 ? B * 5e-324 * u : B * Math.pow(2, d - 1075) * (u + 4503599627370496);
      }
      n.readDoubleLE = a.bind(null, e, 0, 4), n.readDoubleBE = a.bind(null, A, 4, 0);
    })(), n;
  }
  function o(n, r, a) {
    r[a] = n & 255, r[a + 1] = n >>> 8 & 255, r[a + 2] = n >>> 16 & 255, r[a + 3] = n >>> 24;
  }
  function t(n, r, a) {
    r[a] = n >>> 24, r[a + 1] = n >>> 16 & 255, r[a + 2] = n >>> 8 & 255, r[a + 3] = n & 255;
  }
  function e(n, r) {
    return (n[r] | n[r + 1] << 8 | n[r + 2] << 16 | n[r + 3] << 24) >>> 0;
  }
  function A(n, r) {
    return (n[r] << 24 | n[r + 1] << 16 | n[r + 2] << 8 | n[r + 3]) >>> 0;
  }
  return Si;
}
function B0(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Gi, x0;
function SQ() {
  if (x0) return Gi;
  x0 = 1, Gi = i;
  function i(o) {
    try {
      if (typeof B0 != "function")
        return null;
      var t = B0(o);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Gi;
}
var Q0 = {}, E0;
function GQ() {
  return E0 || (E0 = 1, (function(i) {
    var o = i;
    o.length = function(t) {
      for (var e = 0, A = 0, n = 0; n < t.length; ++n)
        A = t.charCodeAt(n), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 ? (++n, e += 4) : e += 3;
      return e;
    }, o.read = function(t, e, A) {
      var n = A - e;
      if (n < 1)
        return "";
      for (var r = null, a = [], g = 0, c; e < A; )
        c = t[e++], c < 128 ? a[g++] = c : c > 191 && c < 224 ? a[g++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (c >> 10), a[g++] = 56320 + (c & 1023)) : a[g++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
      return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
    }, o.write = function(t, e, A) {
      for (var n = A, r, a, g = 0; g < t.length; ++g)
        r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - n;
    };
  })(Q0)), Q0;
}
var Ni, d0;
function NQ() {
  if (d0) return Ni;
  d0 = 1, Ni = i;
  function i(o, t, e) {
    var A = e || 8192, n = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > n)
        return o(g);
      a + g > A && (r = o(A), a = 0);
      var c = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), c;
    };
  }
  return Ni;
}
var Ri, l0;
function RQ() {
  if (l0) return Ri;
  l0 = 1, Ri = o;
  var i = lt();
  function o(n, r) {
    this.lo = n >>> 0, this.hi = r >>> 0;
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
  o.fromNumber = function(n) {
    if (n === 0)
      return t;
    var r = n < 0;
    r && (n = -n);
    var a = n >>> 0, g = (n - a) / 4294967296 >>> 0;
    return r && (g = ~g >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++g > 4294967295 && (g = 0))), new o(a, g);
  }, o.from = function(n) {
    if (typeof n == "number")
      return o.fromNumber(n);
    if (i.isString(n))
      if (i.Long)
        n = i.Long.fromString(n);
      else
        return o.fromNumber(parseInt(n, 10));
    return n.low || n.high ? new o(n.low >>> 0, n.high >>> 0) : t;
  }, o.prototype.toNumber = function(n) {
    if (!n && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(n) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!n) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!n };
  };
  var A = String.prototype.charCodeAt;
  return o.fromHash = function(n) {
    return n === e ? t : new o(
      (A.call(n, 0) | A.call(n, 1) << 8 | A.call(n, 2) << 16 | A.call(n, 3) << 24) >>> 0,
      (A.call(n, 4) | A.call(n, 5) << 8 | A.call(n, 6) << 16 | A.call(n, 7) << 24) >>> 0
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
    var n = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ n) >>> 0, this.lo = (this.lo << 1 ^ n) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var n = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ n) >>> 0, this.hi = (this.hi >>> 1 ^ n) >>> 0, this;
  }, o.prototype.length = function() {
    var n = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? n < 16384 ? n < 128 ? 1 : 2 : n < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Ri;
}
var u0;
function lt() {
  return u0 || (u0 = 1, (function(i) {
    var o = i;
    o.asPromise = wQ(), o.base64 = DQ(), o.EventEmitter = bQ(), o.float = kQ(), o.inquire = SQ(), o.utf8 = GQ(), o.pool = NQ(), o.LongBits = RQ(), o.isNode = !!(typeof mt < "u" && mt && mt.process && mt.process.versions && mt.process.versions.node), o.global = o.isNode && mt || typeof window < "u" && window || typeof self < "u" && self || Di, o.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), o.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), o.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, o.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, o.isObject = function(A) {
      return A && typeof A == "object";
    }, o.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    o.isSet = function(A, n) {
      var r = A[n];
      return r != null && A.hasOwnProperty(n) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, o.Buffer = (function() {
      try {
        var A = o.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    })(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(A) {
      return typeof A == "number" ? o.Buffer ? o._Buffer_allocUnsafe(A) : new o.Array(A) : o.Buffer ? o._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(A) {
      return A ? o.LongBits.from(A).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(A, n) {
      var r = o.LongBits.fromHash(A);
      return o.Long ? o.Long.fromBits(r.lo, r.hi, n) : r.toNumber(!!n);
    };
    function t(A, n, r) {
      for (var a = Object.keys(n), g = 0; g < a.length; ++g)
        (A[a[g]] === void 0 || !r) && (A[a[g]] = n[a[g]]);
      return A;
    }
    o.merge = t, o.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function n(r, a) {
        if (!(this instanceof n))
          return new n(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
      }
      return n.prototype = Object.create(Error.prototype, {
        constructor: {
          value: n,
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
      }), n;
    }
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(A) {
      for (var n = {}, r = 0; r < A.length; ++r)
        n[A[r]] = 1;
      return function() {
        for (var a = Object.keys(this), g = a.length - 1; g > -1; --g)
          if (n[a[g]] === 1 && this[a[g]] !== void 0 && this[a[g]] !== null)
            return a[g];
      };
    }, o.oneOfSetter = function(A) {
      return function(n) {
        for (var r = 0; r < A.length; ++r)
          A[r] !== n && delete this[A[r]];
      };
    }, o.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, o._configure = function() {
      var A = o.Buffer;
      if (!A) {
        o._Buffer_from = o._Buffer_allocUnsafe = null;
        return;
      }
      o._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(n, r) {
        return new A(n, r);
      }, o._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(n) {
        return new A(n);
      };
    };
  })(Di)), Di;
}
var vi, f0;
function rc() {
  if (f0) return vi;
  f0 = 1, vi = g;
  var i = lt(), o, t = i.LongBits, e = i.base64, A = i.utf8;
  function n(d, u, h) {
    this.fn = d, this.len = u, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function a(d) {
    this.head = d.head, this.tail = d.tail, this.len = d.len, this.next = d.states;
  }
  function g() {
    this.len = 0, this.head = new n(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var c = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new o();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = c(), g.alloc = function(d) {
    return new i.Array(d);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(d, u, h) {
    return this.tail = this.tail.next = new n(d, u, h), this.len += u, this;
  };
  function I(d, u, h) {
    u[h] = d & 255;
  }
  function s(d, u, h) {
    for (; d > 127; )
      u[h++] = d & 127 | 128, d >>>= 7;
    u[h] = d;
  }
  function C(d, u) {
    this.len = d, this.next = void 0, this.val = u;
  }
  C.prototype = Object.create(n.prototype), C.prototype.fn = s, g.prototype.uint32 = function(d) {
    return this.len += (this.tail = this.tail.next = new C(
      (d = d >>> 0) < 128 ? 1 : d < 16384 ? 2 : d < 2097152 ? 3 : d < 268435456 ? 4 : 5,
      d
    )).len, this;
  }, g.prototype.int32 = function(d) {
    return d < 0 ? this._push(Q, 10, t.fromNumber(d)) : this.uint32(d);
  }, g.prototype.sint32 = function(d) {
    return this.uint32((d << 1 ^ d >> 31) >>> 0);
  };
  function Q(d, u, h) {
    for (; d.hi; )
      u[h++] = d.lo & 127 | 128, d.lo = (d.lo >>> 7 | d.hi << 25) >>> 0, d.hi >>>= 7;
    for (; d.lo > 127; )
      u[h++] = d.lo & 127 | 128, d.lo = d.lo >>> 7;
    u[h++] = d.lo;
  }
  g.prototype.uint64 = function(d) {
    var u = t.from(d);
    return this._push(Q, u.length(), u);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(d) {
    var u = t.from(d).zzEncode();
    return this._push(Q, u.length(), u);
  }, g.prototype.bool = function(d) {
    return this._push(I, 1, d ? 1 : 0);
  };
  function E(d, u, h) {
    u[h] = d & 255, u[h + 1] = d >>> 8 & 255, u[h + 2] = d >>> 16 & 255, u[h + 3] = d >>> 24;
  }
  g.prototype.fixed32 = function(d) {
    return this._push(E, 4, d >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(d) {
    var u = t.from(d);
    return this._push(E, 4, u.lo)._push(E, 4, u.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(d) {
    return this._push(i.float.writeFloatLE, 4, d);
  }, g.prototype.double = function(d) {
    return this._push(i.float.writeDoubleLE, 8, d);
  };
  var B = i.Array.prototype.set ? function(d, u, h) {
    u.set(d, h);
  } : function(d, u, h) {
    for (var p = 0; p < d.length; ++p)
      u[h + p] = d[p];
  };
  return g.prototype.bytes = function(d) {
    var u = d.length >>> 0;
    if (!u)
      return this._push(I, 1, 0);
    if (i.isString(d)) {
      var h = g.alloc(u = e.length(d));
      e.decode(d, h, 0), d = h;
    }
    return this.uint32(u)._push(B, u, d);
  }, g.prototype.string = function(d) {
    var u = A.length(d);
    return u ? this.uint32(u)._push(A.write, u, d) : this._push(I, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new n(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new n(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var d = this.head, u = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = d.next, this.tail = u, this.len += h), this;
  }, g.prototype.finish = function() {
    for (var d = this.head.next, u = this.constructor.alloc(this.len), h = 0; d; )
      d.fn(d.val, u, h), h += d.len, d = d.next;
    return u;
  }, g._configure = function(d) {
    o = d, g.create = c(), o._configure();
  }, vi;
}
var Wi, h0;
function vQ() {
  if (h0) return Wi;
  h0 = 1, Wi = t;
  var i = rc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var o = lt();
  function t() {
    i.call(this);
  }
  t._configure = function() {
    t.alloc = o._Buffer_allocUnsafe, t.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && o.Buffer.prototype.set.name === "set" ? function(A, n, r) {
      n.set(A, r);
    } : function(A, n, r) {
      if (A.copy)
        A.copy(n, r, 0, A.length);
      else for (var a = 0; a < A.length; )
        n[r++] = A[a++];
    };
  }, t.prototype.bytes = function(A) {
    o.isString(A) && (A = o._Buffer_from(A, "base64"));
    var n = A.length >>> 0;
    return this.uint32(n), n && this._push(t.writeBytesBuffer, n, A), this;
  };
  function e(A, n, r) {
    A.length < 40 ? o.utf8.write(A, n, r) : n.utf8Write ? n.utf8Write(A, r) : n.write(A, r);
  }
  return t.prototype.string = function(A) {
    var n = o.Buffer.byteLength(A);
    return this.uint32(n), n && this._push(e, n, A), this;
  }, t._configure(), Wi;
}
var Fi, p0;
function ac() {
  if (p0) return Fi;
  p0 = 1, Fi = n;
  var i = lt(), o, t = i.LongBits, e = i.utf8;
  function A(s, C) {
    return RangeError("index out of range: " + s.pos + " + " + (C || 1) + " > " + s.len);
  }
  function n(s) {
    this.buf = s, this.pos = 0, this.len = s.length;
  }
  var r = typeof Uint8Array < "u" ? function(s) {
    if (s instanceof Uint8Array || Array.isArray(s))
      return new n(s);
    throw Error("illegal buffer");
  } : function(s) {
    if (Array.isArray(s))
      return new n(s);
    throw Error("illegal buffer");
  }, a = function() {
    return i.Buffer ? function(s) {
      return (n.create = function(C) {
        return i.Buffer.isBuffer(C) ? new o(C) : r(C);
      })(s);
    } : r;
  };
  n.create = a(), n.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, n.prototype.uint32 = /* @__PURE__ */ (function() {
    var s = 4294967295;
    return function() {
      if (s = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (s = (s | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (s = (s | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return s;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return s;
    };
  })(), n.prototype.int32 = function() {
    return this.uint32() | 0;
  }, n.prototype.sint32 = function() {
    var s = this.uint32();
    return s >>> 1 ^ -(s & 1) | 0;
  };
  function g() {
    var s = new t(0, 0), C = 0;
    if (this.len - this.pos > 4) {
      for (; C < 4; ++C)
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << C * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      if (s.lo = (s.lo | (this.buf[this.pos] & 127) << 28) >>> 0, s.hi = (s.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return s;
      C = 0;
    } else {
      for (; C < 3; ++C) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.lo = (s.lo | (this.buf[this.pos] & 127) << C * 7) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
      return s.lo = (s.lo | (this.buf[this.pos++] & 127) << C * 7) >>> 0, s;
    }
    if (this.len - this.pos > 4) {
      for (; C < 5; ++C)
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << C * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
    } else
      for (; C < 5; ++C) {
        if (this.pos >= this.len)
          throw A(this);
        if (s.hi = (s.hi | (this.buf[this.pos] & 127) << C * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return s;
      }
    throw Error("invalid varint encoding");
  }
  n.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function c(s, C) {
    return (s[C - 4] | s[C - 3] << 8 | s[C - 2] << 16 | s[C - 1] << 24) >>> 0;
  }
  n.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return c(this.buf, this.pos += 4);
  }, n.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return c(this.buf, this.pos += 4) | 0;
  };
  function I() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(c(this.buf, this.pos += 4), c(this.buf, this.pos += 4));
  }
  return n.prototype.float = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    var s = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, s;
  }, n.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var s = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, s;
  }, n.prototype.bytes = function() {
    var s = this.uint32(), C = this.pos, Q = this.pos + s;
    if (Q > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(C, Q);
    if (C === Q) {
      var E = i.Buffer;
      return E ? E.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, C, Q);
  }, n.prototype.string = function() {
    var s = this.bytes();
    return e.read(s, 0, s.length);
  }, n.prototype.skip = function(s) {
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
  }, n.prototype.skipType = function(s) {
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
  }, n._configure = function(s) {
    o = s, n.create = a(), o._configure();
    var C = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(n.prototype, {
      int64: function() {
        return g.call(this)[C](!1);
      },
      uint64: function() {
        return g.call(this)[C](!0);
      },
      sint64: function() {
        return g.call(this).zzDecode()[C](!1);
      },
      fixed64: function() {
        return I.call(this)[C](!0);
      },
      sfixed64: function() {
        return I.call(this)[C](!1);
      }
    });
  }, Fi;
}
var Mi, m0;
function WQ() {
  if (m0) return Mi;
  m0 = 1, Mi = t;
  var i = ac();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var o = lt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    o.Buffer && (t.prototype._slice = o.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), Mi;
}
var y0 = {}, Li, w0;
function FQ() {
  if (w0) return Li;
  w0 = 1, Li = o;
  var i = lt();
  (o.prototype = Object.create(i.EventEmitter.prototype)).constructor = o;
  function o(t, e, A) {
    if (typeof t != "function")
      throw TypeError("rpcImpl must be a function");
    i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!A;
  }
  return o.prototype.rpcCall = function t(e, A, n, r, a) {
    if (!r)
      throw TypeError("request must be specified");
    var g = this;
    if (!a)
      return i.asPromise(t, g, e, A, n, r);
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
          if (!(I instanceof n))
            try {
              I = n[g.responseDelimited ? "decodeDelimited" : "decode"](I);
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
  }, o.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, Li;
}
var D0;
function MQ() {
  return D0 || (D0 = 1, (function(i) {
    var o = i;
    o.Service = FQ();
  })(y0)), y0;
}
var b0, k0;
function LQ() {
  return k0 || (k0 = 1, b0 = {}), b0;
}
var S0;
function OQ() {
  return S0 || (S0 = 1, (function(i) {
    var o = i;
    o.build = "minimal", o.Writer = rc(), o.BufferWriter = vQ(), o.Reader = ac(), o.BufferReader = WQ(), o.util = lt(), o.rpc = MQ(), o.roots = LQ(), o.configure = t;
    function t() {
      o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
    }
    t();
  })(a0)), a0;
}
var G0, N0;
function JQ() {
  return N0 || (N0 = 1, G0 = OQ()), G0;
}
var S = JQ();
const f = S.Reader, N = S.Writer, l = S.util, x = S.roots.default || (S.roots.default = {}), SA = x.dot = (() => {
  const i = {};
  return i.Content = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.token = l.newBuffer([]), o.prototype.iv = l.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.Content();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.Content)
        return t;
      let e = new x.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  })(), i.v4 = (function() {
    const o = {};
    return o.MagnifEyeLivenessContent = (function() {
      function t(A) {
        if (this.images = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.images = l.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.images != null && A.images.length)
          for (let r = 0; r < A.images.length; ++r)
            x.dot.Image.encode(A.images[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(x.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let n = 0; n < A.images.length; ++n) {
            let r = x.dot.Image.verify(A.images[n]);
            if (r)
              return "images." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.MagnifEyeLivenessContent)
          return A;
        let n = new x.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          n.images = [];
          for (let r = 0; r < A.images.length; ++r) {
            if (typeof A.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = x.dot.Image.fromObject(A.images[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), A.images && A.images.length) {
          r.images = [];
          for (let a = 0; a < A.images.length; ++a)
            r.images[a] = x.dot.Image.toObject(A.images[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    })(), o.Metadata = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && x.dot.v4.WebMetadata.encode(A.web, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && x.dot.v4.AndroidMetadata.encode(A.android, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && x.dot.v4.IosMetadata.encode(A.ios, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.Metadata();
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
              g.web = x.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.android = x.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.ios = x.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n._sessionToken = 1, !l.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !l.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          n.metadata = 1;
          {
            let r = x.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let r = x.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let r = x.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.Metadata)
          return A;
        let n = new x.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              n.platform = A.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            n.platform = 0;
            break;
          case "ANDROID":
          case 1:
            n.platform = 1;
            break;
          case "IOS":
          case 2:
            n.platform = 2;
            break;
        }
        if (A.sessionToken != null && (n.sessionToken = String(A.sessionToken)), A.componentVersion != null && (n.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          n.web = x.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          n.android = x.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          n.ios = x.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.platform = n.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = n.enums === String ? x.dot.Platform[A.platform] === void 0 ? A.platform : x.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = x.dot.v4.WebMetadata.toObject(A.web, n), n.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = x.dot.v4.AndroidMetadata.toObject(A.android, n), n.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = x.dot.v4.IosMetadata.toObject(A.ios, n), n.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, n.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    })(), o.AndroidMetadata = (function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let r = 0; r < A.supportedAbis.length; ++r)
            n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[r]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), x.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            x.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && x.dot.v4.AndroidCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && x.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && x.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && x.dot.v4.Yuv420ImageCrop.encode(A.yuv420ImageCrop, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.androidId != null && Object.hasOwnProperty.call(A, "androidId") && n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).string(A.androidId), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.AndroidMetadata(), c, I;
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
              g.camera = x.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = x.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(x.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.dynamicCameraFrameProperties === l.emptyObject && (g.dynamicCameraFrameProperties = {});
              let C = A.uint32() + A.pos;
              for (c = "", I = null; A.pos < C; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    c = A.string();
                    break;
                  case 2:
                    I = x.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(Q & 7);
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
              g.croppedYuv420Image = x.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.yuv420ImageCrop = x.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let n = 0; n < A.supportedAbis.length; ++n)
            if (!l.isString(A.supportedAbis[n]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !l.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = x.dot.v4.AndroidCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = x.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || l.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let r = x.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let n = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < n.length; ++r) {
            let a = x.dot.Int32List.verify(A.dynamicCameraFrameProperties[n[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = x.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let n = x.dot.v4.Yuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (n)
            return "yuv420ImageCrop." + n;
        }
        return A.androidId != null && A.hasOwnProperty("androidId") && !l.isString(A.androidId) ? "androidId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.AndroidMetadata)
          return A;
        let n = new x.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          n.supportedAbis = [];
          for (let r = 0; r < A.supportedAbis.length; ++r)
            n.supportedAbis[r] = String(A.supportedAbis[r]);
        }
        if (A.device != null && (n.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          n.camera = x.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = x.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], n.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (n.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = x.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          n.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            n.dynamicCameraFrameProperties[r[a]] = x.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, n.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (n.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = x.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          n.yuv420ImageCrop = x.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.androidId != null && (n.androidId = String(A.androidId)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (n.objects || n.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            r.supportedAbis[g] = A.supportedAbis[g];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, n.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = n.bytes === String ? l.base64.encode(A.digests[g], 0, A.digests[g].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let g = 0; g < a.length; ++g)
            r.dynamicCameraFrameProperties[a[g]] = x.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], n);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = x.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = x.dot.v4.AndroidCamera.toObject(A.camera, n), n.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = x.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = n.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : n.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, n.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = x.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = x.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, n), n.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.androidId != null && A.hasOwnProperty("androidId") && (r.androidId = A.androidId, n.oneofs && (r._androidId = "androidId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    })(), o.AndroidCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && x.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = x.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = x.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.AndroidCamera)
          return e;
        let A = new x.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = x.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = x.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    })(), o.Yuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && x.dot.ImageSize.encode(e.size, A.uint32(
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
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = x.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = x.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.Yuv420Image)
          return e;
        let A = new x.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = x.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = l.newBuffer(n.yPlane))), A.bytes === String ? n.uPlane = "" : (n.uPlane = [], A.bytes !== Array && (n.uPlane = l.newBuffer(n.uPlane))), A.bytes === String ? n.vPlane = "" : (n.vPlane = [], A.bytes !== Array && (n.vPlane = l.newBuffer(n.vPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = x.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (n.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (n.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    })(), o.Yuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && x.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && x.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = x.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = x.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = x.dot.v4.Yuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = x.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.Yuv420ImageCrop)
          return e;
        let A = new x.dot.v4.Yuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.image: object expected");
          A.image = x.dot.v4.Yuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.Yuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = x.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (n.image = x.dot.v4.Yuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (n.topLeftCorner = x.dot.PointInt.toObject(e.topLeftCorner, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    })(), o.IosMetadata = (function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            n.uint32(
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
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.isoValues != null && A.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < A.isoValues.length; ++r)
            n.int32(A.isoValues[r]);
          n.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            x.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && x.dot.v4.IosCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && x.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && x.dot.v4.IosYuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.yuv420ImageCrop != null && Object.hasOwnProperty.call(A, "yuv420ImageCrop") && x.dot.v4.IosYuv420ImageCrop.encode(A.yuv420ImageCrop, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.identifierForVendor != null && Object.hasOwnProperty.call(A, "identifierForVendor") && n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).string(A.identifierForVendor), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.IosMetadata(), c, I;
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
              g.architectureInfo === l.emptyObject && (g.architectureInfo = {});
              let C = A.uint32() + A.pos;
              for (c = "", I = !1; A.pos < C; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    c = A.string();
                    break;
                  case 2:
                    I = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              g.architectureInfo[c] = I;
              break;
            }
            case 6: {
              g.camera = x.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.detectionNormalizedRectangle = x.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.digests && g.digests.length || (g.digests = []), g.digests.push(A.bytes());
              break;
            }
            case 5: {
              g.digestsWithTimestamp && g.digestsWithTimestamp.length || (g.digestsWithTimestamp = []), g.digestsWithTimestamp.push(x.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (s & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  g.isoValues.push(A.int32());
              } else
                g.isoValues.push(A.int32());
              break;
            }
            case 8: {
              g.croppedYuv420Image = x.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.yuv420ImageCrop = x.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !l.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!l.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(A.architectureInfo);
          for (let r = 0; r < n.length; ++r)
            if (typeof A.architectureInfo[n[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = x.dot.v4.IosCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = x.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || l.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let r = x.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < A.isoValues.length; ++n)
            if (!l.isInteger(A.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = x.dot.v4.IosYuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        if (A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop")) {
          let n = x.dot.v4.IosYuv420ImageCrop.verify(A.yuv420ImageCrop);
          if (n)
            return "yuv420ImageCrop." + n;
        }
        return A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && !l.isString(A.identifierForVendor) ? "identifierForVendor: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.IosMetadata)
          return A;
        let n = new x.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (n.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            n.architectureInfo[r[a]] = !!A.architectureInfo[r[a]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          n.camera = x.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = x.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], n.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (n.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = x.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let r = 0; r < A.isoValues.length; ++r)
            n.isoValues[r] = A.isoValues[r] | 0;
        }
        if (A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.IosMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = x.dot.v4.IosYuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.IosMetadata.yuv420ImageCrop: object expected");
          n.yuv420ImageCrop = x.dot.v4.IosYuv420ImageCrop.fromObject(A.yuv420ImageCrop);
        }
        return A.identifierForVendor != null && (n.identifierForVendor = String(A.identifierForVendor)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        (n.arrays || n.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (n.objects || n.defaults) && (r.architectureInfo = {}), n.defaults && (r.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (r.cameraModelId = A.cameraModelId);
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let g = 0; g < a.length; ++g)
            r.architectureInfo[a[g]] = A.architectureInfo[a[g]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = n.bytes === String ? l.base64.encode(A.digests[g], 0, A.digests[g].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            r.isoValues[g] = A.isoValues[g];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = x.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = x.dot.v4.IosCamera.toObject(A.camera, n), n.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = x.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = x.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = x.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, n), n.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), A.identifierForVendor != null && A.hasOwnProperty("identifierForVendor") && (r.identifierForVendor = A.identifierForVendor, n.oneofs && (r._identifierForVendor = "identifierForVendor")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    })(), o.IosCamera = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && x.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.resolution = x.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = x.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.IosCamera)
          return e;
        let A = new x.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = x.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = x.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    })(), o.IosYuv420Image = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uvPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && x.dot.ImageSize.encode(e.size, A.uint32(
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
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.size = x.dot.ImageSize.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = x.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || l.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.IosYuv420Image)
          return e;
        let A = new x.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = x.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? l.base64.decode(e.uvPlane, A.uvPlane = l.newBuffer(l.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = l.newBuffer(n.yPlane))), A.bytes === String ? n.uvPlane = "" : (n.uvPlane = [], A.bytes !== Array && (n.uvPlane = l.newBuffer(n.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = x.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (n.uvPlane = A.bytes === String ? l.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420Image";
      }, t;
    })(), o.IosYuv420ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && x.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && x.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = x.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = x.dot.PointInt.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = x.dot.v4.IosYuv420Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = x.dot.PointInt.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.IosYuv420ImageCrop)
          return e;
        let A = new x.dot.v4.IosYuv420ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.image: object expected");
          A.image = x.dot.v4.IosYuv420Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.IosYuv420ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = x.dot.PointInt.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (n.image = x.dot.v4.IosYuv420Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (n.topLeftCorner = x.dot.PointInt.toObject(e.topLeftCorner, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    })(), o.WebMetadata = (function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && x.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            x.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[r]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let r = 0; r < A.detectionRecord.length; ++r)
            x.dot.v4.DetectedObject.encode(A.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            x.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && x.dot.Image.encode(A.croppedImage, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.croppedImageWithPosition != null && Object.hasOwnProperty.call(A, "croppedImageWithPosition") && x.dot.v4.ImageCrop.encode(A.croppedImageWithPosition, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.platformDetails != null && Object.hasOwnProperty.call(A, "platformDetails") && x.dot.v4.PlatformDetails.encode(A.platformDetails, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.currentCameraProperties = x.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.availableCameraProperties && g.availableCameraProperties.length || (g.availableCameraProperties = []), g.availableCameraProperties.push(x.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              g.hashedDetectedImages && g.hashedDetectedImages.length || (g.hashedDetectedImages = []), g.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              g.hashedDetectedImagesWithTimestamp && g.hashedDetectedImagesWithTimestamp.length || (g.hashedDetectedImagesWithTimestamp = []), g.hashedDetectedImagesWithTimestamp.push(x.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.detectionRecord && g.detectionRecord.length || (g.detectionRecord = []), g.detectionRecord.push(x.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              g.croppedImage = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.croppedImageWithPosition = x.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.platformDetails = x.dot.v4.PlatformDetails.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let n = x.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            let r = x.dot.v4.CameraProperties.verify(A.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            if (!l.isString(A.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            let r = x.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            let r = x.dot.v4.DetectedObject.verify(A.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let n = x.dot.Image.verify(A.croppedImage);
          if (n)
            return "croppedImage." + n;
        }
        if (A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition")) {
          let n = x.dot.v4.ImageCrop.verify(A.croppedImageWithPosition);
          if (n)
            return "croppedImageWithPosition." + n;
        }
        if (A.platformDetails != null && A.hasOwnProperty("platformDetails")) {
          let n = x.dot.v4.PlatformDetails.verify(A.platformDetails);
          if (n)
            return "platformDetails." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.WebMetadata)
          return A;
        let n = new x.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = x.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = x.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            n.hashedDetectedImages[r] = String(A.hashedDetectedImages[r]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r) {
            if (typeof A.hashedDetectedImagesWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[r] = x.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = x.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          n.croppedImage = x.dot.Image.fromObject(A.croppedImage);
        }
        if (A.croppedImageWithPosition != null) {
          if (typeof A.croppedImageWithPosition != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImageWithPosition: object expected");
          n.croppedImageWithPosition = x.dot.v4.ImageCrop.fromObject(A.croppedImageWithPosition);
        }
        if (A.platformDetails != null) {
          if (typeof A.platformDetails != "object")
            throw TypeError(".dot.v4.WebMetadata.platformDetails: object expected");
          n.platformDetails = x.dot.v4.PlatformDetails.fromObject(A.platformDetails);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = x.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, n)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = x.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], n);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = x.dot.v4.DetectedObject.toObject(A.detectionRecord[a], n);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = x.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], n);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = x.dot.Image.toObject(A.croppedImage, n), n.oneofs && (r._croppedImage = "croppedImage")), A.croppedImageWithPosition != null && A.hasOwnProperty("croppedImageWithPosition") && (r.croppedImageWithPosition = x.dot.v4.ImageCrop.toObject(A.croppedImageWithPosition, n), n.oneofs && (r._croppedImageWithPosition = "croppedImageWithPosition")), A.platformDetails != null && A.hasOwnProperty("platformDetails") && (r.platformDetails = x.dot.v4.PlatformDetails.toObject(A.platformDetails, n), n.oneofs && (r._platformDetails = "platformDetails")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    })(), o.HashedDetectedImageWithTimestamp = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !l.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new x.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if (A.defaults)
          if (n.imageHash = "", l.Long) {
            let r = new l.Long(0, 0, !0);
            n.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            n.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (n.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? n.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : n.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    })(), o.MediaTrackSettings = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && n.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && n.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && n.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && n.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && n.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && n.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && n.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && n.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && n.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.MediaTrackSettings();
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !l.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !l.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !l.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !l.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !l.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !l.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !l.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !l.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.MediaTrackSettings)
          return A;
        let n = new x.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (n.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (n.autoGainControl = !!A.autoGainControl), A.channelCount != null && (n.channelCount = A.channelCount | 0), A.deviceId != null && (n.deviceId = String(A.deviceId)), A.displaySurface != null && (n.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (n.echoCancellation = !!A.echoCancellation), A.facingMode != null && (n.facingMode = String(A.facingMode)), A.frameRate != null && (n.frameRate = Number(A.frameRate)), A.groupId != null && (n.groupId = String(A.groupId)), A.height != null && (n.height = A.height | 0), A.noiseSuppression != null && (n.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (n.sampleRate = A.sampleRate | 0), A.sampleSize != null && (n.sampleSize = A.sampleSize | 0), A.width != null && (n.width = A.width | 0), A.deviceName != null && (n.deviceName = String(A.deviceName)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = n.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, n.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, n.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, n.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, n.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, n.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, n.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, n.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = n.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, n.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, n.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, n.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, n.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, n.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, n.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, n.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, n.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    })(), o.ImageBitmap = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.ImageBitmap)
          return e;
        let A = new x.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.width = 0, n.height = 0), e.width != null && e.hasOwnProperty("width") && (n.width = e.width), e.height != null && e.hasOwnProperty("height") && (n.height = e.height), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    })(), o.CameraProperties = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && x.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && x.dot.v4.MediaTrackSettings.encode(A.cameraProperties, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = x.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = x.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let n = x.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (n)
            return "cameraInitFrameResolution." + n;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let n = x.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (n)
            return "cameraProperties." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.CameraProperties)
          return A;
        let n = new x.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          n.cameraInitFrameResolution = x.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          n.cameraProperties = x.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = x.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, n), n.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = x.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    })(), o.DetectedObject = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && x.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && x.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && x.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && x.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && x.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
              a.faceCenter = x.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              a.smallestEdge = e.float();
              break;
            }
            case 8: {
              a.bottomLeft = x.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              a.bottomRight = x.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              a.topLeft = x.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              a.topRight = x.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
          let A = x.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = x.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = x.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = x.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = x.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.DetectedObject)
          return e;
        let A = new x.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = x.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = x.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = x.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = x.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = x.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.brightness = 0, n.sharpness = 0, n.hotspots = 0, n.confidence = 0, n.faceSize = 0, n.faceCenter = null, n.smallestEdge = 0, n.bottomLeft = null, n.bottomRight = null, n.topLeft = null, n.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (n.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (n.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (n.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (n.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (n.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (n.faceCenter = x.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (n.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (n.bottomLeft = x.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (n.bottomRight = x.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (n.topLeft = x.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (n.topRight = x.dot.v4.Point.toObject(e.topRight, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    })(), o.Point = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.Point();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.Point)
          return e;
        let A = new x.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.x = 0, n.y = 0), e.x != null && e.hasOwnProperty("x") && (n.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (n.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    })(), o.ImageCrop = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && x.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && x.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.image = x.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.topLeftCorner = x.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = x.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner")) {
          let A = x.dot.v4.Point.verify(e.topLeftCorner);
          if (A)
            return "topLeftCorner." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.ImageCrop)
          return e;
        let A = new x.dot.v4.ImageCrop();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.ImageCrop.image: object expected");
          A.image = x.dot.Image.fromObject(e.image);
        }
        if (e.topLeftCorner != null) {
          if (typeof e.topLeftCorner != "object")
            throw TypeError(".dot.v4.ImageCrop.topLeftCorner: object expected");
          A.topLeftCorner = x.dot.v4.Point.fromObject(e.topLeftCorner);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.topLeftCorner = null), e.image != null && e.hasOwnProperty("image") && (n.image = x.dot.Image.toObject(e.image, A)), e.topLeftCorner != null && e.hasOwnProperty("topLeftCorner") && (n.topLeftCorner = x.dot.v4.Point.toObject(e.topLeftCorner, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    })(), o.PlatformDetails = (function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.userAgent), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.platform), A.platformVersion != null && Object.hasOwnProperty.call(A, "platformVersion") && n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).string(A.platformVersion), A.architecture != null && Object.hasOwnProperty.call(A, "architecture") && n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.architecture), A.model != null && Object.hasOwnProperty.call(A, "model") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.model), A.browserVersions != null && A.browserVersions.length)
          for (let r = 0; r < A.browserVersions.length; ++r)
            x.dot.v4.BrowserVersion.encode(A.browserVersions[r], n.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return A.installationId != null && Object.hasOwnProperty.call(A, "installationId") && n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.installationId), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.PlatformDetails();
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
              g.browserVersions && g.browserVersions.length || (g.browserVersions = []), g.browserVersions.push(x.dot.v4.BrowserVersion.decode(A, A.uint32()));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
          for (let n = 0; n < A.browserVersions.length; ++n) {
            let r = x.dot.v4.BrowserVersion.verify(A.browserVersions[n]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && !l.isString(A.installationId) ? "installationId: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.PlatformDetails)
          return A;
        let n = new x.dot.v4.PlatformDetails();
        if (A.userAgent != null && (n.userAgent = String(A.userAgent)), A.platform != null && (n.platform = String(A.platform)), A.platformVersion != null && (n.platformVersion = String(A.platformVersion)), A.architecture != null && (n.architecture = String(A.architecture)), A.model != null && (n.model = String(A.model)), A.browserVersions) {
          if (!Array.isArray(A.browserVersions))
            throw TypeError(".dot.v4.PlatformDetails.browserVersions: array expected");
          n.browserVersions = [];
          for (let r = 0; r < A.browserVersions.length; ++r) {
            if (typeof A.browserVersions[r] != "object")
              throw TypeError(".dot.v4.PlatformDetails.browserVersions: object expected");
            n.browserVersions[r] = x.dot.v4.BrowserVersion.fromObject(A.browserVersions[r]);
          }
        }
        return A.installationId != null && (n.installationId = String(A.installationId)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.browserVersions = []), n.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, n.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, n.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, n.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, n.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = x.dot.v4.BrowserVersion.toObject(A.browserVersions[a], n);
        }
        return A.installationId != null && A.hasOwnProperty("installationId") && (r.installationId = A.installationId, n.oneofs && (r._installationId = "installationId")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PlatformDetails";
      }, t;
    })(), o.BrowserVersion = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.name = "", t.prototype.version = "", t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.name != null && Object.hasOwnProperty.call(e, "name") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.name), e.version != null && Object.hasOwnProperty.call(e, "version") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.version), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.BrowserVersion();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !l.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !l.isString(e.version) ? "version: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.BrowserVersion)
          return e;
        let A = new x.dot.v4.BrowserVersion();
        return e.name != null && (A.name = String(e.name)), e.version != null && (A.version = String(e.version)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.name = "", n.version = ""), e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.version != null && e.hasOwnProperty("version") && (n.version = e.version), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.BrowserVersion";
      }, t;
    })(), o.FaceContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && x.dot.Image.encode(A.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = x.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.FaceContent)
          return A;
        let n = new x.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          n.image = x.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.FaceContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = x.dot.Image.toObject(A.image, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    })(), o.DocumentContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && x.dot.Image.encode(A.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = x.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.DocumentContent)
          return A;
        let n = new x.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          n.image = x.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.DocumentContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = x.dot.Image.toObject(A.image, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    })(), o.Blob = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null, t.prototype.multiRangeLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && x.dot.v4.DocumentContent.encode(A.documentContent, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && x.dot.v4.FaceContent.encode(A.faceContent, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && x.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && x.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && x.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && x.dot.v4.PalmContent.encode(A.palmContent, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && x.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.multiRangeLivenessContent != null && Object.hasOwnProperty.call(A, "multiRangeLivenessContent") && x.dot.v4.MultiRangeLivenessContent.encode(A.multiRangeLivenessContent, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.Blob();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.documentContent = x.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.eyeGazeLivenessContent = x.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.faceContent = x.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.magnifeyeLivenessContent = x.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.smileLivenessContent = x.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.palmContent = x.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.travelDocumentContent = x.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.multiRangeLivenessContent = x.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          n.blob = 1;
          {
            let r = x.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        if (A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let r = x.dot.v4.MultiRangeLivenessContent.verify(A.multiRangeLivenessContent);
            if (r)
              return "multiRangeLivenessContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.Blob)
          return A;
        let n = new x.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          n.documentContent = x.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          n.eyeGazeLivenessContent = x.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          n.faceContent = x.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          n.magnifeyeLivenessContent = x.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          n.smileLivenessContent = x.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          n.palmContent = x.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          n.travelDocumentContent = x.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        if (A.multiRangeLivenessContent != null) {
          if (typeof A.multiRangeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.multiRangeLivenessContent: object expected");
          n.multiRangeLivenessContent = x.dot.v4.MultiRangeLivenessContent.fromObject(A.multiRangeLivenessContent);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = x.dot.v4.DocumentContent.toObject(A.documentContent, n), n.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = x.dot.v4.FaceContent.toObject(A.faceContent, n), n.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = x.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, n), n.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = x.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, n), n.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = x.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, n), n.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = x.dot.v4.PalmContent.toObject(A.palmContent, n), n.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = x.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, n), n.oneofs && (r.blob = "travelDocumentContent")), A.multiRangeLivenessContent != null && A.hasOwnProperty("multiRangeLivenessContent") && (r.multiRangeLivenessContent = x.dot.v4.MultiRangeLivenessContent.toObject(A.multiRangeLivenessContent, n), n.oneofs && (r.blob = "multiRangeLivenessContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    })(), o.TravelDocumentContent = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && x.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && x.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && x.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.ldsMasterFile = x.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              a.authenticationStatus = x.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              a.metadata = x.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = x.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = x.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = x.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.TravelDocumentContent)
          return e;
        let A = new x.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = x.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = x.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = x.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.ldsMasterFile = null, n.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, n.authenticationStatus = null, n.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (n.ldsMasterFile = x.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (n.accessControlProtocolUsed = A.enums === String ? x.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : x.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (n.authenticationStatus = x.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = x.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    })(), o.LdsMasterFile = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && x.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          g >>> 3 === 1 ? a.lds1eMrtdApplication = x.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = x.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.LdsMasterFile)
          return e;
        let A = new x.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = x.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (n.lds1eMrtdApplication = x.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    })(), o.Lds1eMrtdApplication = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && x.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && x.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && x.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && x.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && x.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && x.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && x.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && x.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && x.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && x.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && x.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && x.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, n.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && x.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, n.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && x.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, n.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && x.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && x.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, n.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && x.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, n.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.comHeaderAndDataGroupPresenceInformation = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.sodDocumentSecurityObject = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.dg1MachineReadableZoneInformation = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.dg2EncodedIdentificationFeaturesFace = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              g.dg3AdditionalIdentificationFeatureFingers = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              g.dg4AdditionalIdentificationFeatureIrises = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              g.dg5DisplayedPortrait = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              g.dg7DisplayedSignatureOrUsualMark = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              g.dg8DataFeatures = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              g.dg9StructureFeatures = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              g.dg10SubstanceFeatures = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              g.dg11AdditionalPersonalDetails = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              g.dg12AdditionalDocumentDetails = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              g.dg13OptionalDetails = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              g.dg14SecurityOptions = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              g.dg15ActiveAuthenticationPublicKeyInfo = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              g.dg16PersonsToNotify = x.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (n)
            return "comHeaderAndDataGroupPresenceInformation." + n;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (n)
            return "sodDocumentSecurityObject." + n;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (n)
            return "dg1MachineReadableZoneInformation." + n;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (n)
            return "dg2EncodedIdentificationFeaturesFace." + n;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (n)
            return "dg3AdditionalIdentificationFeatureFingers." + n;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (n)
            return "dg4AdditionalIdentificationFeatureIrises." + n;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (n)
            return "dg5DisplayedPortrait." + n;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (n)
            return "dg7DisplayedSignatureOrUsualMark." + n;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (n)
            return "dg8DataFeatures." + n;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (n)
            return "dg9StructureFeatures." + n;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (n)
            return "dg10SubstanceFeatures." + n;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (n)
            return "dg11AdditionalPersonalDetails." + n;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (n)
            return "dg12AdditionalDocumentDetails." + n;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (n)
            return "dg13OptionalDetails." + n;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (n)
            return "dg14SecurityOptions." + n;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (n)
            return "dg15ActiveAuthenticationPublicKeyInfo." + n;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let n = x.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (n)
            return "dg16PersonsToNotify." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.Lds1eMrtdApplication)
          return A;
        let n = new x.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          n.comHeaderAndDataGroupPresenceInformation = x.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          n.sodDocumentSecurityObject = x.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          n.dg1MachineReadableZoneInformation = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          n.dg2EncodedIdentificationFeaturesFace = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          n.dg3AdditionalIdentificationFeatureFingers = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          n.dg4AdditionalIdentificationFeatureIrises = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          n.dg5DisplayedPortrait = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          n.dg7DisplayedSignatureOrUsualMark = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          n.dg8DataFeatures = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          n.dg9StructureFeatures = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          n.dg10SubstanceFeatures = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          n.dg11AdditionalPersonalDetails = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          n.dg12AdditionalDocumentDetails = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          n.dg13OptionalDetails = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          n.dg14SecurityOptions = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          n.dg15ActiveAuthenticationPublicKeyInfo = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          n.dg16PersonsToNotify = x.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = x.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, n)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = x.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, n)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = x.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, n)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = x.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, n)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = x.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, n), n.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = x.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, n), n.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = x.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, n), n.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = x.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, n), n.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = x.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, n), n.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = x.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, n), n.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = x.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, n), n.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = x.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, n), n.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = x.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, n), n.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = x.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, n), n.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = x.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, n), n.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = x.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, n), n.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = x.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, n), n.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    })(), o.Lds1ElementaryFile = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: l.oneOfGetter(e = ["bytes"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.Lds1ElementaryFile();
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        if (A instanceof x.dot.v4.Lds1ElementaryFile)
          return A;
        let n = new x.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              n.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            n.id = 0;
            break;
          case "ID_COM":
          case 1:
            n.id = 1;
            break;
          case "ID_SOD":
          case 2:
            n.id = 2;
            break;
          case "ID_DG1":
          case 3:
            n.id = 3;
            break;
          case "ID_DG2":
          case 4:
            n.id = 4;
            break;
          case "ID_DG3":
          case 5:
            n.id = 5;
            break;
          case "ID_DG4":
          case 6:
            n.id = 6;
            break;
          case "ID_DG5":
          case 7:
            n.id = 7;
            break;
          case "ID_DG7":
          case 8:
            n.id = 8;
            break;
          case "ID_DG8":
          case 9:
            n.id = 9;
            break;
          case "ID_DG9":
          case 10:
            n.id = 10;
            break;
          case "ID_DG10":
          case 11:
            n.id = 11;
            break;
          case "ID_DG11":
          case 12:
            n.id = 12;
            break;
          case "ID_DG12":
          case 13:
            n.id = 13;
            break;
          case "ID_DG13":
          case 14:
            n.id = 14;
            break;
          case "ID_DG14":
          case 15:
            n.id = 15;
            break;
          case "ID_DG15":
          case 16:
            n.id = 16;
            break;
          case "ID_DG16":
          case 17:
            n.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, n.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (n.bytes = A.bytes)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.id = n.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = n.enums === String ? x.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : x.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = n.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, n.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = (function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "ID_UNSPECIFIED"] = 0, n[A[1] = "ID_COM"] = 1, n[A[2] = "ID_SOD"] = 2, n[A[3] = "ID_DG1"] = 3, n[A[4] = "ID_DG2"] = 4, n[A[5] = "ID_DG3"] = 5, n[A[6] = "ID_DG4"] = 6, n[A[7] = "ID_DG5"] = 7, n[A[8] = "ID_DG7"] = 8, n[A[9] = "ID_DG8"] = 9, n[A[10] = "ID_DG9"] = 10, n[A[11] = "ID_DG10"] = 11, n[A[12] = "ID_DG11"] = 12, n[A[13] = "ID_DG12"] = 13, n[A[14] = "ID_DG13"] = 14, n[A[15] = "ID_DG14"] = 15, n[A[16] = "ID_DG15"] = 16, n[A[17] = "ID_DG16"] = 17, n;
      })(), t;
    })(), o.AccessControlProtocol = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    })(), o.AuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && x.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && x.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.data = x.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              a.chip = x.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = x.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = x.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.AuthenticationStatus)
          return e;
        let A = new x.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = x.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = x.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.data = null, n.chip = null), e.data != null && e.hasOwnProperty("data") && (n.data = x.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (n.chip = x.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    })(), o.DataAuthenticationStatus = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.DataAuthenticationStatus();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
        if (e instanceof x.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new x.dot.v4.DataAuthenticationStatus();
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
        let n = {};
        return A.defaults && (n.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, n.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (n.status = A.enums === String ? x.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : x.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (n.protocol = A.enums === String ? x.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : x.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), n;
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
    })(), o.ChipAuthenticationStatus = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.ChipAuthenticationStatus();
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
        if (A instanceof x.dot.v4.ChipAuthenticationStatus)
          return A;
        let n = new x.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              n.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            n.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            n.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            n.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            n.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              n.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            n.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            n.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            n.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            n.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, n.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (n.activeAuthenticationResponse = A.activeAuthenticationResponse)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.status = n.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = n.enums === String ? x.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : x.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = n.enums === String ? x.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : x.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, n.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = n.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : n.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, n.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = (function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "STATUS_UNSPECIFIED"] = 0, n[A[1] = "STATUS_AUTHENTICATED"] = 1, n[A[2] = "STATUS_DENIED"] = 2, n[A[3] = "STATUS_NOT_SUPPORTED"] = 3, n;
      })(), t.Protocol = (function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, n[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, n[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, n[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, n;
      })(), t;
    })(), o.EyeGazeLivenessContent = (function() {
      function t(A) {
        if (this.segments = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.segments != null && A.segments.length)
          for (let r = 0; r < A.segments.length; ++r)
            x.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && x.dot.Image.encode(A.image, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 3: {
              g.image = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              g.segments && g.segments.length || (g.segments = []), g.segments.push(x.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = x.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let n = 0; n < A.segments.length; ++n) {
            let r = x.dot.v4.EyeGazeLivenessSegment.verify(A.segments[n]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.EyeGazeLivenessContent)
          return A;
        let n = new x.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          n.image = x.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = x.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = x.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.image != null && A.hasOwnProperty("image") && (r.image = x.dot.Image.toObject(A.image, n), n.oneofs && (r._image = "image")), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    })(), o.EyeGazeLivenessSegment = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && x.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.corner = e.int32();
              break;
            }
            case 2: {
              a.image = x.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
          let A = x.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new x.dot.v4.EyeGazeLivenessSegment();
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
          A.image = x.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.corner = A.enums === String ? "TOP_LEFT" : 0, n.image = null), e.corner != null && e.hasOwnProperty("corner") && (n.corner = A.enums === String ? x.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : x.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (n.image = x.dot.Image.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    })(), o.EyeGazeLivenessCorner = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    })(), o.MultiRangeLivenessContent = (function() {
      function t(A) {
        if (this.stepResults = [], A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.stepResults = l.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = N.create()), A.stepResults != null && A.stepResults.length)
          for (let r = 0; r < A.stepResults.length; ++r)
            x.dot.v4.MultiRangeLivenessStepResult.encode(A.stepResults[r], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.multiRangeLivenessMetadata != null && Object.hasOwnProperty.call(A, "multiRangeLivenessMetadata") && x.dot.v4.MultiRangeLivenessMetadata.encode(A.multiRangeLivenessMetadata, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.stepResults && g.stepResults.length || (g.stepResults = []), g.stepResults.push(x.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.multiRangeLivenessMetadata = x.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.stepResults != null && A.hasOwnProperty("stepResults")) {
          if (!Array.isArray(A.stepResults))
            return "stepResults: array expected";
          for (let n = 0; n < A.stepResults.length; ++n) {
            let r = x.dot.v4.MultiRangeLivenessStepResult.verify(A.stepResults[n]);
            if (r)
              return "stepResults." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata")) {
          let n = x.dot.v4.MultiRangeLivenessMetadata.verify(A.multiRangeLivenessMetadata);
          if (n)
            return "multiRangeLivenessMetadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.MultiRangeLivenessContent)
          return A;
        let n = new x.dot.v4.MultiRangeLivenessContent();
        if (A.stepResults) {
          if (!Array.isArray(A.stepResults))
            throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: array expected");
          n.stepResults = [];
          for (let r = 0; r < A.stepResults.length; ++r) {
            if (typeof A.stepResults[r] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessContent.stepResults: object expected");
            n.stepResults[r] = x.dot.v4.MultiRangeLivenessStepResult.fromObject(A.stepResults[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.multiRangeLivenessMetadata != null) {
          if (typeof A.multiRangeLivenessMetadata != "object")
            throw TypeError(".dot.v4.MultiRangeLivenessContent.multiRangeLivenessMetadata: object expected");
          n.multiRangeLivenessMetadata = x.dot.v4.MultiRangeLivenessMetadata.fromObject(A.multiRangeLivenessMetadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.stepResults = []), n.defaults && (r.metadata = null, r.multiRangeLivenessMetadata = null), A.stepResults && A.stepResults.length) {
          r.stepResults = [];
          for (let a = 0; a < A.stepResults.length; ++a)
            r.stepResults[a] = x.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), A.multiRangeLivenessMetadata != null && A.hasOwnProperty("multiRangeLivenessMetadata") && (r.multiRangeLivenessMetadata = x.dot.v4.MultiRangeLivenessMetadata.toObject(A.multiRangeLivenessMetadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MultiRangeLivenessContent";
      }, t;
    })(), o.MultiRangeLivenessStepResult = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.challengeItem = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && x.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.MultiRangeLivenessStepResult();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.challengeItem = e.int32();
              break;
            }
            case 2: {
              a.image = x.dot.ImageWithTimestamp.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
          let A = x.dot.ImageWithTimestamp.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.MultiRangeLivenessStepResult)
          return e;
        let A = new x.dot.v4.MultiRangeLivenessStepResult();
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
          A.image = x.dot.ImageWithTimestamp.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.challengeItem = A.enums === String ? "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED" : 0, n.image = null), e.challengeItem != null && e.hasOwnProperty("challengeItem") && (n.challengeItem = A.enums === String ? x.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] === void 0 ? e.challengeItem : x.dot.v4.MultiRangeLivenessChallengeItem[e.challengeItem] : e.challengeItem), e.image != null && e.hasOwnProperty("image") && (n.image = x.dot.ImageWithTimestamp.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessStepResult";
      }, t;
    })(), o.MultiRangeLivenessChallengeItem = (function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED"] = 0, e[t[1] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO"] = 1, e[t[2] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE"] = 2, e[t[3] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO"] = 3, e[t[4] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE"] = 4, e[t[5] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR"] = 5, e[t[6] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE"] = 6, e;
    })(), o.MultiRangeLivenessMetadata = (function() {
      function t(e) {
        if (this.detections = [], e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.detections = l.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = N.create()), e.detections != null && e.detections.length)
          for (let n = 0; n < e.detections.length; ++n)
            x.dot.v4.FaceDetection.encode(e.detections[n], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          g >>> 3 === 1 ? (a.detections && a.detections.length || (a.detections = []), a.detections.push(x.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(g & 7);
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.detections != null && e.hasOwnProperty("detections")) {
          if (!Array.isArray(e.detections))
            return "detections: array expected";
          for (let A = 0; A < e.detections.length; ++A) {
            let n = x.dot.v4.FaceDetection.verify(e.detections[A]);
            if (n)
              return "detections." + n;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.MultiRangeLivenessMetadata)
          return e;
        let A = new x.dot.v4.MultiRangeLivenessMetadata();
        if (e.detections) {
          if (!Array.isArray(e.detections))
            throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: array expected");
          A.detections = [];
          for (let n = 0; n < e.detections.length; ++n) {
            if (typeof e.detections[n] != "object")
              throw TypeError(".dot.v4.MultiRangeLivenessMetadata.detections: object expected");
            A.detections[n] = x.dot.v4.FaceDetection.fromObject(e.detections[n]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if ((A.arrays || A.defaults) && (n.detections = []), e.detections && e.detections.length) {
          n.detections = [];
          for (let r = 0; r < e.detections.length; ++r)
            n.detections[r] = x.dot.v4.FaceDetection.toObject(e.detections[r], A);
        }
        return n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    })(), o.FaceDetection = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && x.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.FaceDetection();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.timestampMillis = e.uint64();
              break;
            }
            case 2: {
              a.position = x.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)))
          return "timestampMillis: integer|Long expected";
        if (e.position != null && e.hasOwnProperty("position")) {
          let A = x.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.FaceDetection)
          return e;
        let A = new x.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = x.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if (A.defaults) {
          if (l.Long) {
            let r = new l.Long(0, 0, !0);
            n.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            n.timestampMillis = A.longs === String ? "0" : 0;
          n.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? n.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : n.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (n.position = x.dot.v4.FaceDetectionPosition.toObject(e.position, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetection";
      }, t;
    })(), o.FaceDetectionPosition = (function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.center = null, t.prototype.faceSizeToImageShorterSideRatio = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = N.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && x.dot.PointDouble.encode(e.center, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceSizeToImageShorterSideRatio != null && Object.hasOwnProperty.call(e, "faceSizeToImageShorterSideRatio") && A.uint32(
          /* id 2, wireType 1 =*/
          17
        ).double(e.faceSizeToImageShorterSideRatio), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, n) {
        e instanceof f || (e = f.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === n)
            break;
          switch (g >>> 3) {
            case 1: {
              a.center = x.dot.PointDouble.decode(e, e.uint32());
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.center != null && e.hasOwnProperty("center")) {
          let A = x.dot.PointDouble.verify(e.center);
          if (A)
            return "center." + A;
        }
        return e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && typeof e.faceSizeToImageShorterSideRatio != "number" ? "faceSizeToImageShorterSideRatio: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof x.dot.v4.FaceDetectionPosition)
          return e;
        let A = new x.dot.v4.FaceDetectionPosition();
        if (e.center != null) {
          if (typeof e.center != "object")
            throw TypeError(".dot.v4.FaceDetectionPosition.center: object expected");
          A.center = x.dot.PointDouble.fromObject(e.center);
        }
        return e.faceSizeToImageShorterSideRatio != null && (A.faceSizeToImageShorterSideRatio = Number(e.faceSizeToImageShorterSideRatio)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.center = null, n.faceSizeToImageShorterSideRatio = 0), e.center != null && e.hasOwnProperty("center") && (n.center = x.dot.PointDouble.toObject(e.center, A)), e.faceSizeToImageShorterSideRatio != null && e.hasOwnProperty("faceSizeToImageShorterSideRatio") && (n.faceSizeToImageShorterSideRatio = A.json && !isFinite(e.faceSizeToImageShorterSideRatio) ? String(e.faceSizeToImageShorterSideRatio) : e.faceSizeToImageShorterSideRatio), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetectionPosition";
      }, t;
    })(), o.SmileLivenessContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && x.dot.Image.encode(A.neutralExpressionFaceImage, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && x.dot.Image.encode(A.smileExpressionFaceImage, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let n = x.dot.Image.verify(A.neutralExpressionFaceImage);
          if (n)
            return "neutralExpressionFaceImage." + n;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let n = x.dot.Image.verify(A.smileExpressionFaceImage);
          if (n)
            return "smileExpressionFaceImage." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.SmileLivenessContent)
          return A;
        let n = new x.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          n.neutralExpressionFaceImage = x.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          n.smileExpressionFaceImage = x.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = x.dot.Image.toObject(A.neutralExpressionFaceImage, n)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = x.dot.Image.toObject(A.smileExpressionFaceImage, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    })(), o.PalmContent = (function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), r = 0; r < n.length; ++r)
            A[n[r]] != null && (this[n[r]] = A[n[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = N.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && x.dot.Image.encode(A.image, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && x.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.video != null && Object.hasOwnProperty.call(A, "video") && x.dot.Video.encode(A.video, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n, r) {
        A instanceof f || (A = f.create(A));
        let a = n === void 0 ? A.len : A.pos + n, g = new x.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.image = x.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              g.video = x.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.metadata = x.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = x.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.video != null && A.hasOwnProperty("video")) {
          let n = x.dot.Video.verify(A.video);
          if (n)
            return "video." + n;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = x.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof x.dot.v4.PalmContent)
          return A;
        let n = new x.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          n.image = x.dot.Image.fromObject(A.image);
        }
        if (A.video != null) {
          if (typeof A.video != "object")
            throw TypeError(".dot.v4.PalmContent.video: object expected");
          n.video = x.dot.Video.fromObject(A.video);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          n.metadata = x.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), A.image != null && A.hasOwnProperty("image") && (r.image = x.dot.Image.toObject(A.image, n)), A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = x.dot.v4.Metadata.toObject(A.metadata, n)), A.video != null && A.hasOwnProperty("video") && (r.video = x.dot.Video.toObject(A.video, n), n.oneofs && (r._video = "video")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    })(), o;
  })(), i.Image = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.Image();
      for (; t.pos < n; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.Image)
        return t;
      let e = new x.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  })(), i.ImageWithTimestamp = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.image = null, o.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && x.dot.Image.encode(t.image, e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).fork()).ldelim(), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.ImageWithTimestamp();
      for (; t.pos < n; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
            r.image = x.dot.Image.decode(t, t.uint32());
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = x.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.ImageWithTimestamp)
        return t;
      let e = new x.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = x.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, l.Long) {
          let n = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = x.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageWithTimestamp";
    }, o;
  })(), i.ImageSize = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.width = 0, o.prototype.height = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.ImageSize();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.ImageSize)
        return t;
      let e = new x.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, o;
  })(), i.Int32List = (function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.items = l.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = N.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.Int32List();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
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
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.Int32List)
        return t;
      let e = new x.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let A = 0; A < t.items.length; ++A)
          e.items[A] = t.items[A] | 0;
      }
      return e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let n = 0; n < t.items.length; ++n)
          A.items[n] = t.items[n];
      }
      return A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  })(), i.Platform = (function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  })(), i.RectangleDouble = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.left = 0, o.prototype.top = 0, o.prototype.right = 0, o.prototype.bottom = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.RectangleDouble();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.RectangleDouble)
        return t;
      let e = new x.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, o;
  })(), i.DigestWithTimestamp = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.digest = l.newBuffer([]), o.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.DigestWithTimestamp)
        return t;
      let e = new x.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, e.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = l.newBuffer(A.digest))), l.Long) {
          let n = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  })(), i.Video = (function() {
    function o(e) {
      if (e)
        for (let A = Object.keys(e), n = 0; n < A.length; ++n)
          e[A[n]] != null && (this[A[n]] = e[A[n]]);
    }
    o.prototype.bytes = null, o.prototype.containerMp4 = null, o.prototype.streamH264 = null;
    let t;
    return Object.defineProperty(o.prototype, "_bytes", {
      get: l.oneOfGetter(t = ["bytes"]),
      set: l.oneOfSetter(t)
    }), Object.defineProperty(o.prototype, "content", {
      get: l.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: l.oneOfSetter(t)
    }), o.create = function(e) {
      return new o(e);
    }, o.encode = function(e, A) {
      return A || (A = N.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), e.containerMp4 != null && Object.hasOwnProperty.call(e, "containerMp4") && x.dot.VideoContainer.encode(e.containerMp4, A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).fork()).ldelim(), e.streamH264 != null && Object.hasOwnProperty.call(e, "streamH264") && x.dot.VideoStream.encode(e.streamH264, A.uint32(
        /* id 3, wireType 2 =*/
        26
      ).fork()).ldelim(), A;
    }, o.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, o.decode = function(e, A, n) {
      e instanceof f || (e = f.create(e));
      let r = A === void 0 ? e.len : e.pos + A, a = new x.dot.Video();
      for (; e.pos < r; ) {
        let g = e.uint32();
        if (g === n)
          break;
        switch (g >>> 3) {
          case 1: {
            a.bytes = e.bytes();
            break;
          }
          case 2: {
            a.containerMp4 = x.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            a.streamH264 = x.dot.VideoStream.decode(e, e.uint32());
            break;
          }
          default:
            e.skipType(g & 7);
            break;
        }
      }
      return a;
    }, o.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, o.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || l.isString(e.bytes))))
        return "bytes: buffer expected";
      if (e.containerMp4 != null && e.hasOwnProperty("containerMp4")) {
        A.content = 1;
        {
          let n = x.dot.VideoContainer.verify(e.containerMp4);
          if (n)
            return "containerMp4." + n;
        }
      }
      if (e.streamH264 != null && e.hasOwnProperty("streamH264")) {
        if (A.content === 1)
          return "content: multiple values";
        A.content = 1;
        {
          let n = x.dot.VideoStream.verify(e.streamH264);
          if (n)
            return "streamH264." + n;
        }
      }
      return null;
    }, o.fromObject = function(e) {
      if (e instanceof x.dot.Video)
        return e;
      let A = new x.dot.Video();
      if (e.bytes != null && (typeof e.bytes == "string" ? l.base64.decode(e.bytes, A.bytes = l.newBuffer(l.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
        if (typeof e.containerMp4 != "object")
          throw TypeError(".dot.Video.containerMp4: object expected");
        A.containerMp4 = x.dot.VideoContainer.fromObject(e.containerMp4);
      }
      if (e.streamH264 != null) {
        if (typeof e.streamH264 != "object")
          throw TypeError(".dot.Video.streamH264: object expected");
        A.streamH264 = x.dot.VideoStream.fromObject(e.streamH264);
      }
      return A;
    }, o.toObject = function(e, A) {
      A || (A = {});
      let n = {};
      return e.bytes != null && e.hasOwnProperty("bytes") && (n.bytes = A.bytes === String ? l.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (n._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (n.containerMp4 = x.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (n.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (n.streamH264 = x.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (n.content = "streamH264")), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, o;
  })(), i.VideoContainer = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.VideoContainer();
      for (; t.pos < n; ) {
        let a = t.uint32();
        if (a === A)
          break;
        a >>> 3 === 1 ? r.bytes = t.bytes() : t.skipType(a & 7);
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.VideoContainer)
        return t;
      let e = new x.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, o;
  })(), i.VideoStream = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = l.newBuffer([]), o.prototype.frameRate = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.frameRate), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.VideoStream();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.VideoStream)
        return t;
      let e = new x.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoStream";
    }, o;
  })(), i.PointInt = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.x = 0, o.prototype.y = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.y), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.PointInt();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !l.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !l.isInteger(t.y) ? "y: integer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.PointInt)
        return t;
      let e = new x.dot.PointInt();
      return t.x != null && (e.x = t.x | 0), t.y != null && (e.y = t.y | 0), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = t.x), t.y != null && t.hasOwnProperty("y") && (A.y = t.y), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointInt";
    }, o;
  })(), i.PointDouble = (function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.x = 0, o.prototype.y = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = N.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.y), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e, A) {
      t instanceof f || (t = f.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new x.dot.PointDouble();
      for (; t.pos < n; ) {
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && typeof t.x != "number" ? "x: number expected" : t.y != null && t.hasOwnProperty("y") && typeof t.y != "number" ? "y: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof x.dot.PointDouble)
        return t;
      let e = new x.dot.PointDouble();
      return t.x != null && (e.x = Number(t.x)), t.y != null && (e.y = Number(t.y)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.x = 0, A.y = 0), t.x != null && t.hasOwnProperty("x") && (A.x = e.json && !isFinite(t.x) ? String(t.x) : t.x), t.y != null && t.hasOwnProperty("y") && (A.y = e.json && !isFinite(t.y) ? String(t.y) : t.y), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, o;
  })(), i;
})(), R0 = /* @__PURE__ */ new Map([[XA.ZERO, SA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO], [XA.ONE, SA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE], [XA.TWO, SA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO], [XA.THREE, SA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE], [XA.FOUR, SA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR], [XA.FIVE, SA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE]]), gc = {};
gc.min = 0.4;
const sc = {};
sc.min = 0.25;
const Dr = {};
Dr.min = 0.2, Dr.max = 0.85;
const cc = {};
cc.min = 0.05;
const Ic = {};
Ic.max = 30;
const Cc = {};
Cc.min = 0;
const Bc = {};
Bc.confidence = Cc;
const xc = {};
xc.min = 0;
const Qc = {};
Qc.confidence = xc;
const Ke = {};
Ke.confidence = gc, Ke.sharpness = sc, Ke.brightness = Dr, Ke.edgeDistanceToImageShorterSideRatio = cc, Ke.devicePitchAngle = Ic, Ke.leftEye = Bc, Ke.rightEye = Qc;
const Ec = {};
Ec.min = 0.4;
const dc = {};
dc.min = 0.25;
const br = {};
br.min = 0.2, br.max = 0.85;
const lc = {};
lc.min = 0.05;
const uc = {};
uc.max = 30;
const fc = {};
fc.min = 0;
const hc = {};
hc.confidence = fc;
const pc = {};
pc.min = 0;
const mc = {};
mc.confidence = pc;
const je = {};
je.confidence = Ec, je.sharpness = dc, je.brightness = br, je.edgeDistanceToImageShorterSideRatio = lc, je.devicePitchAngle = uc, je.leftEye = hc, je.rightEye = mc;
const kr = {};
kr.MOBILE = Ke, kr.DESKTOP = je;
const UQ = kr, yc = {};
yc.min = 0.4;
const wc = {};
wc.min = 0;
const Dc = {};
Dc.confidence = wc;
const bc = {};
bc.min = 0;
const kc = {};
kc.confidence = bc;
const $o = {};
$o.confidence = yc, $o.leftEye = Dc, $o.rightEye = kc;
const Sc = {};
Sc.min = 0.4;
const Gc = {};
Gc.min = 0;
const Nc = {};
Nc.confidence = Gc;
const Rc = {};
Rc.min = 0;
const vc = {};
vc.confidence = Rc;
const An = {};
An.confidence = Sc, An.leftEye = Nc, An.rightEye = vc;
const Sr = {};
Sr.MOBILE = $o, Sr.DESKTOP = An;
const YQ = Sr, v0 = 2e3, en = {};
en.timeout = 4e3, en.threshold = 0.7, en.instructions = [bA.FACE_TOO_CLOSE, bA.FACE_TOO_FAR];
const Oi = en, Wc = "SAM v1.50.5 for idcards";
class Fc extends yQ {
  detector;
  allowedDetectionTransitions;
  detectionFactory;
  phaseThresholds;
  passiveLivenessPhase;
  livenessChallengePhase;
  dispatcher;
  analytics;
  constructor(o, t, e, A, n, r, a, g, c, I, s, C) {
    super(o, Wc, t, r, a, g, I, s, C), this.detector = e, this.detectionFactory = A, this.phaseThresholds = n, [this.passiveLivenessPhase, ...this.livenessChallengePhase] = c, this.dispatcher = r, this.analytics = I, this.allowedDetectionTransitions = this.buildAllowedTransitions(c);
  }
  getDispatcher() {
    return this.dispatcher;
  }
  getAnalytics() {
    return this.analytics;
  }
  buildAllowedTransitions(o) {
    if (o.length === 6454 * 1 + -9967 * 1 + -3 * -1171)
      return { [T.PASSIVE_LIVENESS]: [] };
    const t = { [T.PASSIVE_LIVENESS]: [T.LIVENESS_CHALLENGE + "_0"] }, e = t;
    return this.livenessChallengePhase.forEach((A, n) => {
      const r = T.LIVENESS_CHALLENGE + "_" + n;
      if (n < this.livenessChallengePhase.length - (5461 + -21 * 260)) {
        const a = T.LIVENESS_CHALLENGE + "_" + (n + 1);
        e[r] = [a];
      }
    }), e;
  }
  async init() {
    await super.init();
    const o = {};
    o[T.PASSIVE_LIVENESS] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: v0, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: this.passiveLivenessPhase }, type: T.PASSIVE_LIVENESS }), this.livenessChallengePhase.forEach((t, e) => {
      const A = e + 1 < this.livenessChallengePhase.length ? e + 1 : void 0, n = T.LIVENESS_CHALLENGE + "_" + e;
      o[n] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: v0, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: t, currentIndex: e, nextIndex: A }, type: T.LIVENESS_CHALLENGE });
    }), this.setDetections(o), this.setCurrentDetection(this.detections[T.PASSIVE_LIVENESS]), this.getDispatcher().dispatchChallengeItemChangedEvent(this.passiveLivenessPhase), this.runDetectionLoop();
  }
  getLivenessChallengePhase() {
    return this.livenessChallengePhase;
  }
  getPassiveLivenessPhase() {
    return this.passiveLivenessPhase;
  }
}
class PQ {
  assetsDirectoryPath;
  cameraService;
  protobuf;
  installationId;
  analytics;
  dispatcher;
  sessionToken;
  transactionCounting;
  detector;
  setAssetsDirectoryPath(o) {
    return this.assetsDirectoryPath = o, this;
  }
  setCameraService(o) {
    return this.cameraService = o, this;
  }
  setProtobuf(o) {
    return this.protobuf = o, this;
  }
  setInstallationId(o) {
    return this.installationId = o, this;
  }
  setAnalytics(o) {
    return this.analytics = o, this;
  }
  setDispatcher(o) {
    return this.dispatcher = o, this;
  }
  setSessionToken(o) {
    return this.sessionToken = o, this;
  }
  setTransactionCounting(o) {
    return this.transactionCounting = o, this;
  }
  setDetector(o) {
    return this.detector = o, this;
  }
  validateDependencies() {
    if (!this.assetsDirectoryPath) throw new D("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.protobuf) throw new D("Protobuf is required");
    if (!this.installationId) throw new D("InstallationId is required");
    if (!this.dispatcher) throw new D("Dispatcher is required");
    if (!this.detector) throw new D("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.installationId = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class _Q extends PQ {
  detectionFactory;
  phaseThresholds;
  challengeSequence;
  setDetectionFactory(o) {
    return this.detectionFactory = o, this;
  }
  setPhaseThresholds(o) {
    return this.phaseThresholds = o, this;
  }
  setChallengeSequence(o) {
    return this.challengeSequence = o, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new D("DetectionFactory is required");
    if (!this.phaseThresholds) throw new D("PhaseThresholds is required");
    if (!this.challengeSequence) throw new D("ChallengeSequence is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this.phaseThresholds = void 0, this.challengeSequence = void 0, this;
  }
  build() {
    return this.validateDependencies(), new Fc(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.installationId, this.challengeSequence, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const TQ = "/dot-assets/multi-range/dot-BGu0OvGV.js", W0 = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
};
class ut {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 4624 + -2 * 2312;
  }
  static getInstance() {
    return !this._instance && (this._instance = new ut()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && W0(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = A);
  }
  dispatchCustomEvent(o, t) {
    W0(o, t);
  }
}
const HQ = () => "prod".toLowerCase() === "dev";
class KQ extends ut {
  events;
  constructor(o) {
    super(), this.events = o;
  }
  dispatchDetectionEvent(o) {
    this.dispatchCustomEventOnChange(this.events.DETECTION_CHANGED, o);
  }
  dispatchOnCompleteEvent(o, t) {
    const e = {};
    e.resultData = o, e.content = t, this.dispatchCustomEvent(this.events.ON_COMPLETE, e);
  }
  dispatchPhaseChangedEvent(o) {
    const t = {};
    t.phaseName = o, this.dispatchCustomEventOnChange(this.events.PHASE_CHANGED, t);
  }
  dispatchInstructionChangedEvent(o, t = BC) {
    const e = {};
    e.instructionCode = o.code, e.isEscalated = o.isEscalated ?? !1;
    const A = e;
    this.dispatchDelayedCustomEventOnChange(this.events.INSTRUCTION_CHANGED, A, t);
  }
  dispatchInstructionEscalatedEvent(o) {
    const t = {};
    t.instructionCode = o, this.dispatchCustomEventOnChange(this.events.INSTRUCTION_ESCALATED, t);
  }
  dispatchDevEvent(o) {
    if (!HQ() || !o) return;
    const t = {};
    t.candidateSelectionImages = o, this.dispatchCustomEventOnChange(this.events.DEV, t);
  }
}
class jQ extends KQ {
  dispatchChallengeItemChangedEvent(o) {
    var t = {};
    t.currentMultiRangeLivenessChallengeItem = o, this.dispatchCustomEvent(this.events.CHALLENGE_VALUE_CHANGED, t);
  }
}
const qQ = -6 * 337 + -1889 + 5911;
class F0 {
  duration;
  constructor(o) {
    this.duration = o ?? qQ;
  }
  candidateSelectionTime = 0;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime = performance.now();
  }
  newCandidate(o) {
    this.candidateSelectionImages.push(o);
  }
  getCandidateSelectionImages() {
    return this.candidateSelectionImages;
  }
  isCandidateSelectionDone() {
    return this.isInCandidateSelection() && performance.now() - this.candidateSelectionTime > this.duration;
  }
  reset() {
    this.candidateSelectionTime = 10038 + -21 * 478, this.candidateSelectionImages = [];
  }
}
function Tn(i) {
  const { height: o, width: t } = EC(i), e = (i.width - t) / 2, A = (i.height - o) / (-664 + -3218 * 3 + 10320), n = {};
  return n.shiftX = e, n.shiftY = A, n.width = t, n.height = o, n;
}
function Mc(i, o, t) {
  const { height: e, width: A } = t, n = $n(i.width, i.height), r = A - n * o * (-1 * 2134 + -6010 + -2 * -4073), a = e - n * o * (8 * -883 + 17 * 379 + 623), g = (i.width - r) / (9502 + -1 * 3753 + -5747), c = (i.height - a) / (5008 + 2503 * -2), I = {};
  return I.shiftX = g, I.shiftY = c, I.width = r, I.height = a, I;
}
function yt(i, o) {
  const { shiftX: t, shiftY: e } = o, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const Lc = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, A = fC(e, o), n = {};
  n.x = t.x, n.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const c = {};
  return c.top = n, c.right = r, c.bottom = a, c.left = g, Ug(c);
}, Oc = (i, o, t = kC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, o);
}), Jc = async (i) => Oc(i, 120 + -1 * 4931 + 4901), VQ = async (i) => Oc(i, 8240 + 2035 * -4, "image/png"), Uc = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, -7283 * -1 + 4437 + -11720, -1 * -3347 + -3947 + 600, t.width, t.height), t;
}, Yc = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(0, -8132 + 2613 * 3 + 1 * 293, i.width, i.height);
  return t;
};
async function ZQ(i, o) {
  const t = Uc(i, o);
  return VQ(t);
}
const Pc = (i, o, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (A.strokeStyle = t, A.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), A.stroke());
}, Ji = (i, o, t) => {
  const { height: e, shiftX: A, shiftY: n, width: r } = o, a = {};
  a.x = A, a.y = n;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, Pc(i, g, t);
}, Co = (i, o, t, e = -4209 + -4209 * -1) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(o.x + e, o.y + e, 12880 + 1839 * -7, 5056 + -425 * 10 + -799), A.beginPath());
};
function zQ(i, o) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = o, n = {};
  n.topLeft = A, n.width = t.x - A.x, n.height = t.y - A.y, Pc(i, n, "rgba(255, 0, 0, 0.3)", !0), Co(i, e, "lime");
}
function XQ(i, o, t) {
  const e = Lc(o, t);
  Object.values(e).map((A) => Co(i, A, "orange"));
}
class _c extends D {
  cause;
  constructor(o) {
    super(o.message), this.name = "ProxyError", this.cause = o, this.logError(o);
  }
  logError(o) {
  }
}
class Tc extends Array {
  #A;
  constructor(o) {
    super(), this.#A = o;
  }
  get size() {
    return this.#A;
  }
  pushFixed(...o) {
    if (o.length > this.#A) {
      const t = o.slice(-this.#A);
      this.push(...t);
      return;
    }
    this.length === this.#A && this.splice(-8061 + 1 * 8061, o.length), this.push(...o);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-7808 + -1 * 4403 + 12211);
  }
}
class $Q {
  detectionRecord;
  imagesWithTimestampForDuplicateDetection;
  validationService;
  constructor(o) {
    this.validationService = o, this.imagesWithTimestampForDuplicateDetection = new Tc(wC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / SC, A = e / (8677 + 5 * -1735), n = o.length / 2, r = o.slice(n - A, n + A), a = await js(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(o) {
    return { data: Yc(o), resolution: { width: o.width, height: o.height } };
  }
  async getOptimalRegionForCompressionDetection(o, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(o, t, A);
  }
  detect(o, t, e) {
    try {
      return this.detector.detect(o, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new _c(A) : D.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: o, image: t, imageData: e, timestamp: A }) {
    const n = Ug(o), r = {};
    r.detectedObject = n, r.timestamp = A;
    const a = r, g = this.validationService.validateDetectedObject(n, t);
    if (g.result.get("isPresent")) {
      const c = {};
      c.image = e, c.timestamp = A, this.collectImagesForDuplicateDetection(c);
    }
    return this.detectionRecord.push(a), { detection: n, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class M0 extends $Q {
  className = "FaceImageProcessor";
  detector;
  constructor(o, t) {
    super(t), this.detector = o;
  }
  optimizeImageBeforeDetection(o) {
    const t = Tn(o), e = Uc(o, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: o, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(o), A = {};
    A.height = o.height, A.width = o.width;
    let n = await this.detect(e.data, e.resolution, A);
    n = this.transformDetectionCoordinatesRelativeToFullFrameImage(n, Tn(o));
    const r = {};
    return r.detectedObject = n, r.image = o, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(o, t) {
    return { ...o, leftEye: { ...o.leftEye, center: yt(o.leftEye.center, t) }, rightEye: { ...o.rightEye, center: yt(o.rightEye.center, t) }, mouth: { ...o.mouth, center: yt(o.mouth.center, t) }, topLeft: yt(o.topLeft, t), bottomRight: yt(o.bottomRight, t), faceCenter: yt(o.faceCenter, t) };
  }
}
class AE {
  instructionCodes;
  trackingState;
  contextDescriptor;
  instructionCodeCollector;
  config;
  analytics;
  dispatcher;
  constructor({ analytics: o, config: t, contextDescriptor: e, dispatcher: A, instructionCodeCollector: n, trackingState: r }) {
    this.instructionCodeCollector = n, this.dispatcher = A, this.config = t, this.analytics = o, this.trackingState = r, this.contextDescriptor = e, this.instructionCodes = new Map(t.instructions.map((a) => [a, !1]));
  }
  get getInstructionCodes() {
    return this.instructionCodes;
  }
  canEscalate(o) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(o) ? !1 : t.filter((A) => A === o).length / t.length >= this.config.threshold;
  }
  trackEscalated(o) {
    this.trackingState.hasTracked(o) || (this.analytics?.["trackEscalated"]?.(o, this.contextDescriptor), this.trackingState.markAsTracked(o));
  }
  collect(o) {
    this.instructionCodeCollector.pushWithTimestamp(o);
  }
  isEscalated(o) {
    return this.instructionCodes.get(o) ?? !1;
  }
  escalate() {
    for (const [o, t] of this.instructionCodes.entries())
      !t && this.canEscalate(o) && (this.instructionCodes.set(o, !0), this.dispatcher.dispatchInstructionEscalatedEvent(o), this.trackEscalated(o));
  }
  reset() {
    this.instructionCodes.forEach((o, t) => {
      this.instructionCodes.set(t, !1);
    }), this.trackingState.reset(), this.instructionCodeCollector.clear();
  }
}
class eE {
  trackedInstructionCodes = /* @__PURE__ */ new Set();
  hasTracked(o) {
    return this.trackedInstructionCodes.has(o);
  }
  markAsTracked(o) {
    this.trackedInstructionCodes.add(o);
  }
  reset() {
    this.trackedInstructionCodes.clear();
  }
}
class tE extends Array {
  #A = 4126 + -1 * 4126;
  #e = [];
  #t = !1;
  constructor(o) {
    super(), this.#A = o;
  }
  clearAfterTimeout() {
    if (this.#e.length === 2 * -1109 + -4922 + 7140) return;
    const o = Date.now(), t = this.#e.findLastIndex((e) => o - e > this.#A);
    t !== -1 && (this.#t = !0, this.splice(-5445 + 1 * -9235 + 14680, t + (-13503 + -6752 * -2)), this.#e.splice(0, t + 1));
  }
  pushWithTimestamp(...o) {
    this.clearAfterTimeout();
    const t = Array(o.length).fill(Date.now());
    this.push(...o), this.#e.push(...t);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return this.#t;
  }
  clear() {
    this.splice(4563 + -1 * 3583 + -980), this.#e.splice(7 * -298 + -7701 + 9787), this.#t = !1;
  }
}
const tn = {};
tn.minFaceSizeRatio = 0.13, tn.maxFaceSizeRatio = 0.15, tn.scale = 0.85;
const on = {};
on.minFaceSizeRatio = 0.152, on.maxFaceSizeRatio = 0.172, on.scale = 1;
const nn = {};
nn.minFaceSizeRatio = 0.18, nn.maxFaceSizeRatio = 0.205, nn.scale = 1.18;
const rn = {};
rn.minFaceSizeRatio = 0.215, rn.maxFaceSizeRatio = 0.24, rn.scale = 1.41;
const an = {};
an.minFaceSizeRatio = 0.245, an.maxFaceSizeRatio = 0.275, an.scale = 1.61;
const gn = {};
gn.minFaceSizeRatio = 0.28, gn.maxFaceSizeRatio = 0.34, gn.scale = 1.84;
const L0 = /* @__PURE__ */ new Map([[XA.ZERO, tn], [XA.ONE, on], [XA.TWO, nn], [XA.THREE, rn], [XA.FOUR, an], [XA.FIVE, gn]]);
class Hc {
  controller;
  constructor(o) {
    this.controller = o;
  }
  onCapture(o) {
    this.controller.collectOnCaptureData(o), this.controller.getDispatcher().dispatchDevEvent(o.metadata.candidateSelectionImages);
  }
  onDetection(o) {
    const { processedImage: t } = o.detectionDetails;
    this.controller.getDispatcher().dispatchDetectionEvent(o);
    const e = {};
    e.code = t.instructionCode, e.isEscalated = t.isEscalated, this.controller.getDispatcher().dispatchInstructionChangedEvent(e);
  }
}
class oE extends Hc {
  nextIndex;
  controller;
  constructor(o, t) {
    super(o), this.nextIndex = t, this.controller = o;
  }
  async onCapture(o) {
    super.onCapture(o);
    const t = this.controller.getLivenessChallengePhase();
    if (this.nextIndex !== void 0) {
      this.controller.transitionToDetection(T.LIVENESS_CHALLENGE + "_" + this.nextIndex), t?.[this.nextIndex] !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(t[this.nextIndex]), this.controller.runDetectionLoop();
      return;
    }
    this.controller.getTransactionCounting()?.trackTransaction();
    const e = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), installationId: await this.controller.getInstallationId().get(), video: this.controller.cameraService.videoRecorder?.getRecording() });
    this.dispatchOnCompleteEvent(e), this.controller.getAnalytics()?.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  onDetection(o) {
    super.onDetection(o);
  }
  async dispatchOnCompleteEvent(o) {
    const t = this.controller.getOnCaptureData(), e = t.get(T.PASSIVE_LIVENESS);
    if (!e) throw new D("On capture data was not found");
    const { detectedObject: A, resultImage: n } = e, r = {};
    r.height = n.height, r.width = n.width;
    const a = r, g = await Jc(n), c = {};
    c.detection = A, c.imageResolution = a;
    const I = {};
    I.data = c, I.image = g;
    const s = {};
    s.imageWithMetadata = I;
    const C = s;
    this.controller.getDispatcher().dispatchOnCompleteEvent(C, o);
  }
}
class nE {
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
  constructor(o, t, e, A, n, r, a) {
    this.name = o, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = n, this.fallbackInstruction = r, this.instructionEscalation = a, this.fpsOfAllImages = new Tc(9235 * 1 + 1253 * 6 + -16723), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (o) {
      if (!(o instanceof _c)) throw o;
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
  onDetection(o, t) {
    const e = { ...o, avgFps: Nt(Qi(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(o, t, e) {
    if (!this.captureProcessStartTime) throw new D("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(o.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Nt(Qi(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: o.timestamp }, n = {};
    n.resultImage = o.image, n.detectedObject = t, n.metadata = A, n.timestamp = o.timestamp, this.callbacks.onCapture(n);
  }
  async getCroppedImageWithPosition(o, t) {
    const e = {};
    e.width = o.width, e.height = o.height;
    const A = e, n = Yc(o), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(n, A, t), a = await ZQ(o, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const c = g, I = {};
    return I.croppedImage = a, I.topLeftCorner = c, I;
  }
  collectAndEscalate(o) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(o), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(o)) : !1;
  }
  getDetectionDetails(o, t) {
    const e = this.getDetectionEndTime(o.timestamp), A = Nt(1e3 / e);
    this.fpsOfAllImages.pushFixed(A);
    const n = {};
    n.width = o.image.width, n.height = o.image.height;
    const r = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[1 * -4703 + 2633 + 2070], t), c = this.collectAndEscalate(g), I = {};
    return I.detection = t.detection, I.instructionCode = g, I.invalidValidators = a, I.isInCandidateSelection = !1, I.isEscalated = c, { processedImage: I, detectionTime: e, fps: A, avgFps: Nt(Qi(this.fpsOfAllImages)), resolution: r };
  }
  getDetectionEndTime(o) {
    return Date.now() - o;
  }
  getInvalidInstructions(o, t) {
    const e = [];
    return Array.from(o).forEach(([A, n]) => {
      !n && e.push(t[A]);
    }), e;
  }
  async sleep(o) {
    await $i(Math.max(Sa.max - o, Sa.min));
  }
  setThresholds(o) {
    this.imageProcessor.validationService.setThresholds(o);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class iE extends nE {
  instructionCodeMap;
  lastImage;
  bestImage;
  candidateSelection;
  constructor(o, t, ...e) {
    super(...e), this.candidateSelection = o, this.instructionCodeMap = t, this.lastImage = void 0, this.bestImage = void 0;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const o = this.cameraService.takePhoto(), t = await this.processTakenPhoto(o);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(o, t) : this.tryInitCandidatePhase(o, t);
    const e = this.getDetectionDetails(o, t);
    this.onDetection(e, o.image);
    const A = {};
    A.instructionCode = e.processedImage.instructionCode, A.isValid = t.isValid, A.takenPhoto = o, A.detection = t.detection, this.lastImage = A, await this.sleep(e.detectionTime);
  }
  getDetectionDetails(o, t) {
    const e = super.getDetectionDetails(o, t);
    return { ...e, processedImage: { ...e.processedImage, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() } };
  }
  async processTakenPhoto(o) {
    try {
      return await this.imageProcessor.process(o);
    } catch (t) {
      throw t instanceof D ? t : D.fromError(t);
    }
  }
  saveBetterImage(o, t) {
    if (!(this.bestImage && t.isValid && this.isNewImageBetter(this.bestImage.detection, t.detection))) return;
    const A = {};
    A.takenPhoto = o, A.detection = t.detection;
    const n = A;
    this.bestImage = n, this.candidateSelection.newCandidate(n);
  }
  tryInitCandidatePhase(o, t) {
    if (!(this.lastImage?.isValid && t.isValid)) return;
    const A = {};
    A.takenPhoto = o, A.detection = t.detection;
    const n = A;
    this.isNewImageBetter(this.lastImage.detection, n.detection) ? this.bestImage = n : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(n), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: o, takenPhoto: t } = this.bestImage || {};
    if (t && o) await this.onCapture(t, o, this.candidateSelection.getCandidateSelectionImages());
    else throw new D("Something went wrong during capturing an image");
  }
  getInstructionCode(o, t) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && t?.isValid ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t?.isValid ? this.lastImage.instructionCode : o ?? this.fallbackInstruction;
  }
  isNewImageBetter(o, t) {
    return t.sharpness > o.sharpness;
  }
}
class rE {
  name;
  cameraService;
  imageProcessor;
  callbacks;
  checkToInstructionCodeMap;
  fallbackInstruction;
  instructionEscalation;
  setName(o) {
    return this.name = o, this;
  }
  setCameraService(o) {
    return this.cameraService = o, this;
  }
  setImageProcessor(o) {
    return this.imageProcessor = o, this;
  }
  setCallbacks(o) {
    return this.callbacks = o, this;
  }
  setCheckToInstructionCodeMap(o) {
    return this.checkToInstructionCodeMap = o, this;
  }
  setFallbackInstruction(o) {
    return this.fallbackInstruction = o, this;
  }
  setInstructionEscalation(o) {
    return this.instructionEscalation = o, this;
  }
  reset() {
    return this.name = void 0, this.cameraService = void 0, this.imageProcessor = void 0, this.callbacks = void 0, this.instructionEscalation = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this;
  }
  validateDependencies() {
    if (!this.name) throw new D("Name is required");
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.callbacks) throw new D("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new D("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new D("FallbackInstruction is required");
  }
}
class Kc extends rE {
  instructionCodeMap;
  candidateSelection;
  setInstructionCodeMap(o) {
    return this.instructionCodeMap = o, this;
  }
  setCandidateSelection(o) {
    return this.candidateSelection = o, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void 0, this.candidateSelection = void 0, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new D("instructionCodeMap is required");
    if (!this.candidateSelection) throw new D("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new iE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class aE extends Kc {
}
class jc {
  #A;
  #e;
  #t;
  constructor(o) {
    this.#A = o, this.#e = /* @__PURE__ */ new Map();
  }
  validate() {
    this.#A.forEach((o) => {
      this.#e.set(o.name, o.evaluate());
    }), this.#t = void 0;
  }
  isValid() {
    return this.#t === void 0 && (this.#t = Array.from(this.#e.values()).every((o) => o)), this.#t;
  }
  get result() {
    return this.#e;
  }
  get validators() {
    return this.#A;
  }
}
class qc {
  className;
  thresholds;
  constructor(o, t) {
    this.className = o, this.thresholds = t;
  }
  getThresholds() {
    return this.thresholds;
  }
  setThresholds(o) {
    this.thresholds = o;
  }
}
class ke {
  #A;
  #e;
  constructor(o, t) {
    this.#A = o, this.#e = t;
  }
  get threshold() {
    return this.#e;
  }
  get name() {
    return this.#A;
  }
  isValueBelowThreshold(o) {
    return o < this.#e;
  }
  isValueAboveThreshold(o) {
    return o > this.#e;
  }
}
const gE = "isNotSmall";
class Vc extends ke {
  #A;
  constructor(o, t) {
    super(gE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const sE = "isPresent";
class Zc extends ke {
  #A;
  constructor(o, t) {
    super(sE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const cE = "isLeftEyePresent";
class zc extends ke {
  #A;
  constructor(o, t) {
    super(cE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const IE = "isNotLarge";
class Xc extends ke {
  #A;
  constructor(o, t) {
    super(IE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const CE = "isRightEyePresent";
class $c extends ke {
  #A;
  constructor(o, t) {
    super(CE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
class BE extends qc {
  constructor(o) {
    super("LivenessChallengeValidationService", o);
  }
  validateDetectedObject(o) {
    const t = this.getThresholds(), e = new jc([new Zc(t.confidence.min, o.confidence), new zc(t.leftEye.confidence.min, o.leftEye.confidence), new $c(t.rightEye.confidence.min, o.rightEye.confidence), new Vc(t.size.min, o.faceSize), new Xc(t.size.max, o.faceSize)]);
    return e.validate(), e;
  }
}
class xE extends Hc {
  controller;
  constructor(o) {
    super(o), this.controller = o;
  }
  onCapture(o) {
    super.onCapture(o), this.controller.transitionToDetection(T.LIVENESS_CHALLENGE + "_0");
    const t = this.controller.getLivenessChallengePhase();
    t !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(t[-7700 + -313 * -13 + 3631 * 1]), this.controller.runDetectionLoop();
  }
  onDetection(o) {
    super.onDetection(o);
  }
}
class QE extends Kc {
}
const EE = "isNotDim";
class dE extends ke {
  #A;
  constructor(o, t) {
    super(EE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const lE = "isNotBright";
class uE extends ke {
  #A;
  constructor(o, t) {
    super(lE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const fE = "isSharp";
class hE extends ke {
  #A;
  constructor(o, t) {
    super(fE, o), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const pE = "isNotPitched";
class ta extends ke {
  #A;
  constructor(o, t) {
    super(pE, ta.calculatePitchAngleAccelerationThreshold(o)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(o) {
    return mC * Math.sin(o * (Math.PI / (323 * 21 + 2287 * 4 + -15751)));
  }
  evaluate() {
    const { z: o } = this.#A || {};
    return o ? this.isValueBelowThreshold(Math.abs(o)) : !0;
  }
}
const mE = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = o;
  return !(i.x < e || i.x > e + n || i.y < A || i.y > A + t);
}, yE = (i, o) => Object.values(i).every((t) => mE(t, o)), wE = "isNotOutOfBounds";
class DE extends ke {
  #A;
  #e;
  constructor(o, t, e) {
    super(wE, o), this.#A = t, this.#e = e;
  }
  evaluate() {
    const o = Mc(this.#e, this.threshold, Tn(this.#e)), t = Lc(this.#A, this.#e);
    return yE(t, o);
  }
}
class bE extends qc {
  acceleration;
  constructor(o) {
    super("PassiveLivenessValidationService", o);
  }
  validateDetectedObject(o, t) {
    const e = this.getThresholds(), A = new jc([new Zc(e.confidence.min, o.confidence), new zc(e.leftEye.confidence.min, o.leftEye.confidence), new $c(e.rightEye.confidence.min, o.rightEye.confidence), new Vc(e.size.min, o.faceSize), new Xc(e.size.max, o.faceSize), new hE(e.sharpness.min, o.sharpness), new dE(e.brightness.min, o.brightness), new uE(e.brightness.max, o.brightness), new DE(e.edgeDistanceToImageShorterSideRatio.min, o, t), new ta(e.devicePitchAngle.max, this.acceleration)]);
    return A.validate(), A;
  }
}
class kE {
  createDetection({ params: o, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: n, currentIndex: r, detector: a, multiRangeLivenessChallengeItem: g, nextIndex: c, phaseThresholds: I } = o;
    switch (t) {
      case T.PASSIVE_LIVENESS:
        return this.createPassiveLivenessDetection(n, e, a, A, I, g);
      case T.LIVENESS_CHALLENGE:
        return this.createLivenessChallengeDetection(n, e, a, A, I, g, r, c);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createPassiveLivenessDetection(o, t, e, A, n, r) {
    const a = new QE(), g = this.getThresholdsWithFaceSize(n[T.PASSIVE_LIVENESS], r), c = new bE(g), I = new xE(o), s = new M0(e, c), C = new F0(A), Q = this.createInstructionEscalation(o);
    return a.setName(T.PASSIVE_LIVENESS), a.setCameraService(t), a.setImageProcessor(s), a.setCallbacks(I), a.setCandidateSelection(C), a.setCheckToInstructionCodeMap(ca), a.setInstructionCodeMap(bA), a.setFallbackInstruction(bA.FACE_NOT_PRESENT), a.setInstructionEscalation(Q), a.build();
  }
  createLivenessChallengeDetection(o, t, e, A, n, r, a, g) {
    const c = new aE(), I = this.getThresholdsWithFaceSize(n[T.LIVENESS_CHALLENGE], r), s = new BE(I), C = new oE(o, g), Q = new M0(e, s), E = new F0(A), B = this.createInstructionEscalation(o, r);
    return c.setName(this.prepareIndexedPhaseName(T.LIVENESS_CHALLENGE, a)), c.setCameraService(t), c.setImageProcessor(Q), c.setCallbacks(C), c.setCandidateSelection(E), c.setCheckToInstructionCodeMap(ca), c.setInstructionCodeMap(bA), c.setFallbackInstruction(bA.FACE_NOT_PRESENT), c.setInstructionEscalation(B), c.build();
  }
  prepareIndexedPhaseName(o, t) {
    return t === void 0 ? o : o + "_" + t;
  }
  getThresholdsWithFaceSize(o, t) {
    if (t === void 0 || !L0.has(t)) throw new D("Invalid challenge");
    const e = L0.get(t);
    if (!e) throw new D("Invalid challenge");
    const A = {};
    A.min = e.minFaceSizeRatio, A.max = e.maxFaceSizeRatio;
    const n = { ...o };
    return n.size = A, n;
  }
  createInstructionEscalation(o, t) {
    const e = new eE();
    return new AE({ instructionCodeCollector: new tE(Oi.timeout), dispatcher: o.getDispatcher(), config: { threshold: Oi.threshold, instructions: Oi.instructions }, trackingState: e, analytics: o.getAnalytics(), contextDescriptor: t });
  }
}
function AA(i, o) {
  i = i - (3543 + 1 * -1599 + -1579);
  const t = Hn();
  let e = t[i];
  if (AA.rNVhto === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    AA.VMkKct = g, AA.LMlKiN = {}, AA.rNVhto = !0;
  }
  const n = t[1 * 8506 + -2254 + -6252], r = i + n, a = AA.LMlKiN[r];
  return a ? e = a : (AA.xBmXKi === void 0 && (AA.xBmXKi = !0), e = AA.VMkKct(e, o), AA.LMlKiN[r] = e), e;
}
function Hn() {
  const i = ["mCoYWP00WOu", "W5/cOSozW4q", "s8o/W6WzW4u", "dJHUWQ7cHW", "CmoXW4zesa", "AuaRW4VcUColWPn+bLK", "kCkbq0aA", "oNxdK3pcKa", "W4tcR8knrNW", "nmoTWOdcHcq", "k0BdO0FcUa", "WQS5W5hcKYO", "W64PW5amW7K", "mSkonblcGW", "W5pdGmoLW4vs", "W6Dek8opWQK", "WRbLW5pcMY4", "WRStBmocW5G", "pmo9WQjdfa", "dmoIW7DSWOC", "d8o5W4WlWQG", "W6WQcSk8W7W", "gXu0WRmp", "mCoAW5rXxa", "WRdcG2DSWR0", "A8kquCkDnCo0WONdTmk6WQa", "x8otWP7cHdO", "v0bMW6JcPW", "WRNdOXpcMK8", "W5pdMSkFW4DY", "WOa3lSkUW58Dlq9PW7ldOq", "t8oQCSkogrlcQmo3Cmof", "AInszMm", "c8kyWPypW652eq85kvm", "W6KhW5Oumq", "W7W/o8kAWOi", "smkCCmk8WRi", "WOZdMbXJW7a", "W53dSCo7wLe", "E8ohW6qtma", "eCkvdSottW", "l8kzlSoKtq", "s8ooW7aRWPO", "jNlcPIdcOq", "cSknCLT7", "WQGaW6ZdMfe", "cuDFWPFcNa", "amo7W4ZdKLu", "WO0gW4tcMN4", "dmk7DCohjq", "gtOdWQmc", "W50swdVcMmoRvmou", "w8oEWOZdOai", "CSkMge7cQa", "W5VdUmk5W6H0", "t3lcPXNcRG", "WP99icjE", "W6a0tSoGWRO", "nmoHemo7fa", "tCoOW4r4WRu", "bHzsWO0K", "z8oXW68rW4m", "eZ3cLcyU", "W4hdLmkfrHK", "W4WEW7ZcNLW", "WQBdHZjTWRm", "tamxlxm", "W57cSdFdPsq", "amo7W5pdSgm", "WPWvz8oH", "W73cTCkiW57dLW", "WOKeW7/cTLq", "WPJdQdVcUXS", "B8o4W7yYkW", "imkymCoHmW", "l2RdVeBcNa", "nSoDW55LcW", "hmohjmo3W77cQSoLW7RcScHddNO", "a1ucWOj4", "WQpdH8oWsfS", "Cvz9W4ZcHW", "W404ygbMW41VW4xcV8kb", "mCoHW4j4oq", "WRZcPW4zWRS", "ASoVW5e3nq", "W5hcJ8ouW4ldUq", "W7H5WOJdOfq", "WRVdHadcIH0", "kmoDWRVcOK8", "WO3dSt1NW4q", "WQxcQmkdpbRdOSoDW6RdIcqx", "WReZu8kRW6a", "WP8jvmo8W6i", "W4HGWQ/dIslcN2hcG8oVWPZcHKC", "WQpdSq5I", "kZrkWR7cUq", "hmk6hblcGW", "W7eNxCkLW4O", "WQVcVc9oWRW", "j8kmeWdcJq", "WQKwW4ZcUhG", "sCkIW47dUIbfWOJcJHTQWQGF", "cmonWQzdW5i", "pSkMW4/cM0K", "CSoCW4ulnq", "tmoYW43cJuW", "WOf0zG7cHW", "ACkux8kFo8oAWRxdUSklWOe", "u8onW595xa", "WRLPWOejWPe", "W7hdLmoQWRJdQq", "WQxdI8oew1m", "WPJdJbNdONq", "bCo/WOdcTIq", "WOqaW5aLW4u", "ihiXWQbN", "r0tcGH3cUG", "vCkdWQjsc8kdpeZdPa", "W6FdTSoIz0e", "ACoXxSo7fq", "W53dH8oEs2a", "WR88v8ooW7W", "cevSWRBcHq", "xNlcHZZcPW", "W6JdPmk5xhC", "BSk9iJNcPW", "iSo9W5JdR10", "WOZcPCoMWQ9xWPPeWQRdTCki", "vY4Mz0q", "W4BdImoxohO", "wfz+W7/cIa", "kCk/dtdcVq", "pa59WPddQW", "W402BgyzWRGuW4pcQmkQdmowW60", "tZ0urfu", "mejxW4RcIa", "W6zNW59XiG", "e8kKadRcRq", "ALiGWO54", "lWuJWOi7", "WPa/rCoSW58", "smoWW7ajcW", "W5SYA8ovW7C", "qSoZW7ifW48", "WPqEWRldOM0", "B8ozW6jsWRy", "hmkDdx17", "W7VcO8k6W5/cGq", "bZS2WO0u", "ebKKWRWu", "cCkTfmkhfq", "cCoDW6jVjG", "wGK7AMi", "WRLlwh3cPa", "aCoyW7nsfW", "WO7cGSo3W6/dNq", "vbX+W7pcIW", "WOyEWONdUWu", "W4pdMmkaoxG", "W5NcV23dNgu", "W6tdGCoqW5/dRq", "WOX+WP8AWPC", "rCoqWPJdVIu", "WRHYx3JcOG", "AqDvFfK", "WOFcSZ7cHu0", "amo7W5ZdRv0", "ACkClvNcOG", "WPtdMY/cPgW", "d1i2WQjs", "W7BcVZJdPum", "iSkSfxNcLa", "rCo9W5ioW6C", "oSoiW6FdOJS", "j8ktWO9eW5m", "DmkCW7bqWP8", "nmogbCok", "W6Snp8kxW6O", "WRNdP8k7sNy", "W5OEbxZcImoGBCosW6FcUG", "pI3cKcyN", "WRddLfeXWRe", "WQVdVmkGyq", "WOFdHCowWQddL8kGbCoavZG", "DfVdPKxcPW", "zCoIW6SenG", "W5hcO1G3WR0", "WQFdHa9zW64", "sImhtLS", "W5aFpCo3W7u", "Dmo5bseBW4TjW745BXG", "hXDBWO/cIG", "Ate4tga", "BCobW7Gkjq", "WR3cTs3cL2G", "WOpcJCoEW6tdOG", "WQZcGCoNW5S", "fSk0pCowfW", "W6FcTeRcOKVdL8oRW55V", "W5eYoCklW4G", "dHHyW7RcTxrAWOy", "m8oDW4zNpW", "zmoXW7e6uG", "WO7dImkNxMm", "W40xWQ3cOK8", "emkEucv8", "W4OPoSkCWOi", "W5xcJ8oLWPhdNG", "k8o5WPFcReK", "W5pcRs49WQm", "W5Oqs8o8W4u", "WQC7WPldUMS", "k0ScpazGW6xdG8o0ucNcRuy", "W4FdJmoJW7nf", "hhVdTf3cSG", "W5tdVXLTW5u", "W64EW6WzW5K", "m1q9WOX1", "BmkDW5HWWOu", "W6NcVgNdU0e", "WRPswX7cMG", "W4PQW4WycW", "WRddRCk4ya", "W5KCnSovW4u", "WOxcVSorWQhdHG", "kGzdBv4", "WPCDWRNcMgy", "oCkEWP96W4JcNYFdH8kgWOC", "WP7cPYBdU3S", "vSkTWPxcVWi", "WOHTWQxcUCka", "W4fEFCo2WRO", "WQ/dP1fZW5O", "CIOjl1m", "WQH8zX3dGG", "WQuEWOZdNwS"];
  return Hn = function() {
    return i;
  }, Hn();
}
(function(i, o) {
  const t = i();
  function e(a, g, c, I, s) {
    return AA(a - 826, I);
  }
  function A(a, g, c, I, s) {
    return AA(a - -668, I);
  }
  function n(a, g, c, I, s) {
    return AA(a - -187, c);
  }
  function r(a, g, c, I, s) {
    return AA(I - -703, s);
  }
  for (; ; )
    try {
      if (-parseInt(n(330, 335, "3O0k", 279, 304)) / 1 * (parseInt(n(257, 171, "Y80e", 368, 208)) / 2) + parseInt(A(-129, -141, -36, "tlK3", -67)) / 3 + -parseInt(n(221, 230, "B(7F", 272, 169)) / 4 * (parseInt(n(247, 160, "A#XJ", 181, 133)) / 5) + parseInt(n(241, 317, "zm2i", 162, 159)) / 6 + parseInt(n(367, 300, "&yVC", 411, 392)) / 7 * (parseInt(e(1332, 1332, 1339, "c7eX", 1315)) / 8) + parseInt(A(-72, 5, -89, "hn1N", -21)) / 9 * (parseInt(n(323, 397, "fw22", 317, 227)) / 10) + -parseInt(r(-387, -285, -290, -299, "LDmr")) / 11 * (parseInt(r(-109, -154, -163, -176, "EH^t")) / 12) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Hn, 381564 + 1 * -406922 + 673168);
function SE() {
  const i = o(-458, -448, -411, "tjj(", -477) + o(-553, -537, -694, "#b[9", -578) + t("*m&6", 1205, 1089) + o(-445, -384, -458, "PyPh", -481) + o(-475, -556, -445, "eJ5I", -450) + c(1217, 1264, 1265, 1171, "Pwkx") + e(348, "7Wy2") + e(290, "tlK3") + t("3O0k", 986, 1081) + r("Y80e", 738, 858, 725, 771) + c(1278, 1276, 1287, 1239, "ftBQ") + r("c7eX", 545, 521, 531, 618) + t("zm2i", 1231, 1245) + o(-519, -490, -341, "hn1N", -403) + o(-614, -497, -622, "8jGE", -556) + e(334, "8jGE") + o(-427, -482, -441, "c7eX", -468) + e(279, "ANyO") + e(150, "hwFN") + o(-356, -454, -473, "F!nM", -357) + o(-626, -597, -497, "5Z3z", -517) + o(-664, -539, -623, "vJfW", -558) + c(1195, 1026, 1073, 1103, "hwFN") + c(1182, 1143, 1002, 1077, "tjj(") + r("PyPh", 666, 558, 707, 603) + e(321, "UmTS") + r("%)@K", 663, 477, 463, 580) + t("ANyO", 1096, 1134) + t("3O0k", 1175, 1242) + o(-497, -312, -478, "PyPh", -411) + e(289, "ZSUX") + r("vJfW", 602, 650, 747, 632) + r("3O0k", 734, 685, 701, 658) + c(1126, 1112, 1183, 1183, "Y80e") + o(-487, -643, -448, "F!nM", -549) + o(-667, -508, -474, "8I8O", -572) + c(1053, 1164, 1211, 1160, "n)td") + c(1327, 1170, 1186, 1271, "Q1NA") + c(1114, 1164, 1165, 1127, "Q1NA") + c(1222, 1071, 1183, 1137, "zm2i") + e(156, "10YL") + o(-611, -424, -488, "vJfW", -510) + o(-496, -560, -415, "wace", -496) + t("Y80e", 1247, 1291) + t("eJ5I", 1284, 1168) + t("fw22", 1133, 1107) + t("tjj(", 1097, 1123) + o(-424, -592, -564, "PyPh", -529) + o(-604, -603, -641, "8I8O", -547) + c(1195, 1161, 1250, 1187, "8oQk") + t("ZSUX", 1018, 1126) + t("&yVC", 1266, 1209) + r("Y80e", 484, 526, 545, 588) + c(1054, 1235, 1139, 1120, "zm2i") + c(1231, 1090, 1116, 1182, "8I8O") + r("vJfW", 474, 492, 600, 591) + t("n)td", 1045, 1103) + r("#b[9", 635, 676, 727, 635) + o(-553, -464, -578, "5Z3z", -480) + r("Pwkx", 645, 735, 725, 661) + r("Y80e", 669, 624, 671, 594) + e(353, "QEaz") + c(1173, 1194, 1101, 1158, "%)@K") + c(1175, 1146, 1240, 1223, "Q1NA") + r("cP0)", 830, 825, 759, 715) + r("tlK3", 764, 848, 639, 737) + e(335, "n)td") + t("YM15", 1353, 1285) + c(1068, 1157, 1177, 1132, "hwFN") + t("wace", 1122, 1204) + c(1064, 1218, 1070, 1175, "&yVC") + e(283, "8jGE") + e(177, "7Wy2") + t("7Wy2", 1379, 1280) + o(-434, -431, -408, "F!nM", -509) + c(1381, 1216, 1186, 1287, "hn1N") + o(-240, -365, -388, "Bh4w", -351) + r("A#XJ", 694, 650, 667, 631) + o(-341, -434, -305, "tlK3", -353) + c(1171, 1284, 1284, 1238, "ANyO") + r("#b[9", 622, 464, 684, 567) + o(-524, -421, -439, "1r&K", -513) + o(-419, -292, -406, "3E^Z", -391) + r("n)td", 579, 749, 688, 664) + r("o9Pd", 635, 692, 612, 574) + o(-528, -626, -540, "5Z3z", -582) + c(1298, 1182, 1328, 1261, "*m&6") + o(-456, -462, -515, "&yVC", -560) + r("UmTS", 645, 751, 628, 682) + t("R]j8", 1219, 1152) + t("10YL", 1381, 1302) + r("fw22", 684, 645, 726, 736) + c(1206, 1308, 1092, 1192, "fw22") + e(322, "c7eX") + r("Bh4w", 571, 696, 596, 648) + r("5Z3z", 494, 467, 653, 585) + c(1094, 1236, 1140, 1197, "F!nM") + o(-407, -451, -389, "c7eX", -387) + t("U^Tp", 1251, 1223) + e(236, "n)td") + r("YM15", 808, 762, 830, 728) + t("ZSUX", 1257, 1252) + e(347, "*m&6") + t("R]j8", 1074, 1115) + o(-511, -501, -531, "%)@K", -574) + r("cP0)", 615, 691, 523, 636) + t("EH^t", 1150, 1117) + c(1324, 1254, 1161, 1221, "ANyO") + r("5Z3z", 536, 574, 665, 596) + r("A#XJ", 676, 683, 590, 570) + o(-468, -449, -517, "QEaz", -564) + o(-465, -477, -546, "#b[9", -505) + r("%)@K", 732, 631, 613, 678) + o(-394, -478, -488, "5Z3z", -419) + c(1220, 1121, 1245, 1167, "Q1NA") + r("F!nM", 582, 596, 648, 680) + e(265, "c7eX") + c(1388, 1196, 1214, 1295, "EH^t") + r("tjj(", 711, 720, 586, 669) + t("&yVC", 1043, 1079) + r("5Z3z", 785, 704, 809, 697) + c(1223, 1098, 1154, 1193, "RQP0") + o(-398, -483, -487, "eJ5I", -372) + e(294, "n)td") + c(1331, 1300, 1134, 1246, "7Wy2") + r("PyPh", 629, 644, 696, 654) + e(198, "eJ5I") + e(360, "Pwkx") + r("vJfW", 873, 746, 743, 756) + c(1389, 1198, 1299, 1282, "10YL") + r("Q1NA", 705, 586, 655, 644) + o(-460, -526, -486, "UmTS", -554) + o(-445, -542, -337, "#b[9", -437) + o(-268, -483, -448, "hwFN", -374) + o(-514, -541, -594, "hwFN", -557) + t("PyPh", 1128, 1158) + t("o9Pd", 1206, 1217) + t("8I8O", 1260, 1234) + o(-529, -499, -465, "Q1NA", -575) + c(1357, 1192, 1325, 1268, "XZ%!") + c(1335, 1236, 1235, 1289, "ANyO") + e(200, "8jGE") + t("hn1N", 1119, 1096) + c(1089, 1166, 1192, 1191, "UmTS") + t("EH^t", 1124, 1167) + t("8oQk", 1075, 1184) + e(277, "hn1N") + o(-429, -433, -331, "PyPh", -368) + r("%)@K", 624, 558, 717, 615) + r("0u4y", 537, 691, 549, 595) + c(1016, 1149, 1066, 1085, "wace") + c(1200, 1278, 1303, 1294, "*m&6") + e(275, "*m&6") + o(-575, -484, -652, "8I8O", -580) + c(1233, 1200, 1322, 1263, "QEaz") + r("R]j8", 607, 560, 583, 650) + e(276, "XZ%!") + r("F!nM", 653, 561, 715, 599) + t("vJfW", 1100, 1075) + r("&yVC", 845, 737, 836, 750) + o(-454, -468, -417, "XZ%!", -519) + r("Pwkx", 617, 637, 608, 660) + o(-410, -326, -361, "5Z3z", -428) + o(-463, -315, -436, "1r&K", -381) + e(231, "vJfW") + c(1267, 1153, 1343, 1255, "PyPh") + o(-456, -652, -617, "8oQk", -536) + e(215, "*m&6") + o(-438, -328, -358, "cP0)", -443) + o(-395, -327, -470, "3O0k", -379) + o(-462, -557, -484, "RQP0", -512) + e(162, "Pwkx") + e(337, "tjj(") + t("tjj(", 1248, 1248) + e(220, "vJfW") + e(297, "ftBQ") + t("Q1NA", 1049, 1159) + r("8I8O", 575, 462, 440, 552) + e(258, "EH^t") + t("eJ5I", 1092, 1136) + r("8oQk", 543, 600, 567, 622) + e(323, "Bh4w") + o(-493, -436, -513, "0u4y", -412) + e(301, "ANyO") + e(271, "R]j8") + e(216, "YM15") + r("hwFN", 669, 741, 881, 764) + t("10YL", 1133, 1250) + c(1192, 1347, 1145, 1258, "tjj(") + r("R]j8", 617, 618, 696, 729) + t("hn1N", 1117, 1182) + o(-375, -360, -360, "U^Tp", -361) + o(-359, -429, -317, "Y80e", -420) + r("UmTS", 678, 625, 804, 740) + c(1281, 1110, 1196, 1226, "F!nM") + c(1358, 1176, 1400, 1288, "hn1N") + e(260, "vJfW") + t("hwFN", 1246, 1241) + c(1339, 1353, 1265, 1303, "ANyO") + e(264, "zm2i");
  function o(I, s, C, Q, E) {
    return AA(E - -948, Q);
  }
  function t(I, s, C, Q, E) {
    return AA(C - 710, I);
  }
  function e(I, s, C, Q, E) {
    return AA(I - -225, s);
  }
  const A = window[t("8jGE", 1068, 1131)](i), n = window[t("58N@", 1167, 1233)](A);
  function r(I, s, C, Q, E) {
    return AA(E - 185, I);
  }
  const a = lx(n), g = {};
  g[t("ftBQ", 1299, 1274)] = Og;
  function c(I, s, C, Q, E) {
    return AA(Q - 705, E);
  }
  return g[c(1162, 1256, 1237, 1254, "cP0)")] = bC, window[e(158, "B(7F") + "o"][e(266, "tlK3") + "e"][e(375, "ZSUX") + t("PyPh", 1033, 1106)](e(284, "cP0)"), a, g, !0, [c(1104, 1243, 1148, 1186, "Y80e") + "pt"]);
}
async function GE(i) {
  const o = await SE();
  function t(r, a, g, c, I) {
    return AA(g - -429, a);
  }
  function e(r, a, g, c, I) {
    return AA(r - 131, I);
  }
  const A = {};
  A[t(5, "A#XJ", 74)] = Og;
  function n(r, a, g, c, I) {
    return AA(I - 902, a);
  }
  return window[n(1384, "eJ5I", 1447, 1377, 1366) + "o"][n(1341, "Pwkx", 1254, 1300, 1279) + "e"][e(730, 695, 815, 679, "LDmr") + "pt"](A, o, i);
}
function Kn() {
  const i = ["WOldJaZcOCoywazu", "WRddJru", "WOmKnatdU8oGWP7cRG", "WOtcGGxcIKRcGZFcQCo4WRhdRSoRFq", "W6ZdMqr9bCkOWRSDWPmP", "WOizmuTdm8o/WRxcSCoiWRxdIrS", "WPz/xCoMdSoGWOdcJCkmW58s", "WR99rSopW73cICobW5FcP8ojhgFcQW", "a8odvGZcPSoOWPpcJxSCvt1k", "uehdQmo1ddb/WQddLatcH8oPya", "fCkwcmokAmo4WOPfFY48uq", "WPNdQCozWRfYWPHFW7q", "W5pcSZ7cQMRdVg5e", "rmoruh/cJSkdFmkNWRi", "o8kSW5lcJ8kQx8kCmCouimkKW47cIa", "D8oxWRRdKGWAW4q4W4FdHq", "WRD+tConW7RdM8k9W47cNCownG", "W55pDWKw", "W5ldQvxdM8kiWQhdIhegW73cRSk8Da", "WPZdTSovW5bcetuMWPVcPbmI", "WOaNudVdUCoSWOBcH8oU", "imknySkZg8kJl8oCW4zXwSkdW4y"];
  return Kn = function() {
    return i;
  }, Kn();
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return RA(s - 65, c);
  }
  function e(g, c, I, s, C) {
    return RA(I - 646, s);
  }
  const A = i();
  function n(g, c, I, s, C) {
    return RA(C - 507, I);
  }
  function r(g, c, I, s, C) {
    return RA(s - 642, I);
  }
  function a(g, c, I, s, C) {
    return RA(C - -91, c);
  }
  for (; ; )
    try {
      if (-parseInt(t(481, "hwhx", 481, 482, 474)) / 1 * (parseInt(r(1072, 1073, "z^u0", 1065, 1054)) / 2) + parseInt(t(476, "uYEJ", 492, 481, 490)) / 3 + -parseInt(r(1042, 1044, "T#sI", 1047, 1054)) / 4 + -parseInt(t(483, "3mm7", 488, 487, 494)) / 5 + parseInt(n(936, 923, "3ypB", 935, 925)) / 6 + -parseInt(a(324, "3h6o", 308, 314, 318)) / 7 * (parseInt(t(484, "26c@", 478, 478, 487)) / 8) + -parseInt(a(330, "8@D1", 325, 314, 324)) / 9 * (-parseInt(e(1075, 1059, 1065, "vLJd", 1065)) / 10) === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Kn, 893 * 8 + 557 * 221 + 33284);
function RA(i, o) {
  i = i - (-5 * 1613 + 1 * -1279 + 9 * 1083);
  const t = Kn();
  let e = t[i];
  if (RA.biAKxL === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    RA.qcCZdF = g, RA.UzMXuS = {}, RA.biAKxL = !0;
  }
  const n = t[0], r = i + n, a = RA.UzMXuS[r];
  return a ? e = a : (RA.VykOxA === void 0 && (RA.VykOxA = !0), e = RA.qcCZdF(e, o), RA.UzMXuS[r] = e), e;
}
async function NE(i) {
  function o(a, g, c, I, s) {
    return RA(a - 983, I);
  }
  const { iv: t, key: e, message: A } = await fx(i), n = await GE(e), r = {};
  return r[o(1403, 1401, 1404, "l%65")] = n, r.iv = t, r[o(1397, 1387, 1398, "1PYp") + "ge"] = A, r;
}
(function(i, o) {
  function t(a, g, c, I, s) {
    return dA(a - 440, I);
  }
  function e(a, g, c, I, s) {
    return dA(I - -435, c);
  }
  const A = i();
  function n(a, g, c, I, s) {
    return dA(I - -723, a);
  }
  function r(a, g, c, I, s) {
    return dA(c - 264, s);
  }
  for (; ; )
    try {
      if (-parseInt(r(683, 619, 627, 590, "2NF8")) / 1 * (-parseInt(r(594, 573, 591, 620, "EHI*")) / 2) + parseInt(e(-150, -121, "LGYF", -142, -129)) / 3 * (-parseInt(n("1Kne", -446, -356, -380, -370)) / 4) + parseInt(r(532, 647, 596, 533, "LGYF")) / 5 * (-parseInt(n("dfu%", -422, -368, -372, -332)) / 6) + -parseInt(t(786, 811, 757, "Uj[P", 803)) / 7 + parseInt(n("8B#k", -408, -349, -345, -283)) / 8 * (-parseInt(e(-71, -164, "S1HP", -114, -131)) / 9) + parseInt(e(-165, -201, "dx85", -170, -230)) / 10 + parseInt(t(722, 726, 693, "dfu%", 785)) / 11 === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jn, 438 * -289 + -9 * -34536 + 478);
function dA(i, o) {
  i = i - (-2143 * 4 + 4 * 1742 + -926 * -2);
  const t = jn();
  let e = t[i];
  if (dA.ZXNtkC === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    dA.NysFpR = g, dA.zqRzDm = {}, dA.ZXNtkC = !0;
  }
  const n = t[5260 + 1 * 6437 + 3 * -3899], r = i + n, a = dA.zqRzDm[r];
  return a ? e = a : (dA.nAundg === void 0 && (dA.nAundg = !0), e = dA.NysFpR(e, o), dA.zqRzDm[r] = e), e;
}
function Fe(i, o, t, e, A) {
  return dA(o - 0, e);
}
function zA(i, o, t, e, A) {
  return dA(A - -459, i);
}
function fA(i, o, t, e, A) {
  return dA(e - 315, i);
}
function wt(i, o, t, e, A) {
  return dA(t - 329, o);
}
function hA(i, o, t, e, A) {
  return dA(t - 989, i);
}
class RE {
  async [fA("0W%Y", 620, 697, 644) + zA("dx85", -111, -108, -69, -133) + Fe(345, 374, 415, "8&XB") + fA("xE(r", 629, 576, 571) + fA("#fjQ", 575, 520, 568)](o) {
    const { Image: t } = SA, e = await o[g(-392, "xE(r", -348) + I("Uj[P", -355, -290) + "r"](), A = new Uint8Array(e), n = {};
    n[I("#fjQ", -349, -344)] = A;
    function r(C, Q, E, B, d) {
      return fA(E, Q - 184, E - 130, Q - 457);
    }
    const a = t[s(1023, 1e3, "0W%Y", 1070, 1054) + "y"](n);
    if (a)
      throw r(1059, 1089, "AAUY") === I("ncBP", -309, -360) ? D[I("AAUY", -346, -289) + s(1035, 1096, "zJ6t", 1030, 1095)](a) : _0x5ef004[g(-334, "]1(f", -336) + I("dx85", -440, -377)](_0x2215d6);
    function g(C, Q, E, B, d) {
      return fA(Q, Q - 214, E - 429, E - -976);
    }
    const c = {};
    c[r(1073, 1029, "ncBP")] = A;
    function I(C, Q, E, B, d) {
      return hA(C, Q - 216, E - -1647);
    }
    function s(C, Q, E, B, d) {
      return wt(C - 419, E, d - 465);
    }
    return t[s(1205, 1106, "vuR6", 1176, 1153) + "e"](c);
  }
  [Fe(425, 366, 350, "wDSH") + hA("1Kne", 1383, 1339) + zA("o(LO", -169, -242, -237, -182) + zA("0W%Y", -66, -157, -116, -105) + hA("dx85", 1386, 1364) + fA("HM4C", 504, 576, 570)](o) {
    function t(a, g, c, I, s) {
      return hA(I, g - 299, a - -1096);
    }
    function e(a, g, c, I, s) {
      return Fe(a - 387, s - -593, c - 99, I);
    }
    const { VideoStream: A } = SA, n = A[r(-175, "2NF8", -234) + "y"](o);
    function r(a, g, c, I, s) {
      return wt(a - 368, g, c - -826);
    }
    if (n)
      throw t(184, 165, 197, "xE(r") === r(-108, "Y(4M", -141) ? D[r(-209, "dx85", -148) + e(-239, -330, -260, "qp3t", -303)](n) : _0x548ab9[t(161, 101, 214, "zJ6t") + r(-177, "euaJ", -203)](_0x2d0896);
    return A[t(234, 291, 228, "jyZ^") + "e"](o);
  }
  async [zA("#fjQ", -127, -209, -208, -181) + hA("37zm", 1272, 1262) + fA("aKcY", 616, 635, 659) + hA("37zm", 1272, 1255) + fA("dx85", 682, 638, 631) + "e"](o) {
    function t(s, C, Q, E, B) {
      return fA(Q, C - 426, Q - 437, s - -724);
    }
    function e(s, C, Q, E, B) {
      return hA(Q, C - 159, B - -450);
    }
    function A(s, C, Q, E, B) {
      return hA(C, C - 199, Q - -1517);
    }
    const { v4: { Metadata: n } } = SA;
    function r(s, C, Q, E, B) {
      return zA(Q, C - 175, Q - 38, E - 148, B - 1086);
    }
    const a = { ...o };
    a[c(1176, "AAUY", 1148) + c(1293, "VVhI", 1335)] = SA[c(1258, "o(LO", 1205) + t(-112, -145, "#fjQ")][A(-263, "#D[F", -243)], a[r(884, 986, "qp3t", 907, 922) + r(1005, 1002, "2NF8", 1030, 982) + e(791, 897, "o(LO", 810, 846) + "n"] = e(832, 903, "1Kne", 824, 873);
    const g = a;
    function c(s, C, Q, E, B) {
      return Fe(s - 302, s - 928, Q - 442, C);
    }
    const I = n[A(-213, "c4zx", -193) + "y"](g);
    if (I)
      if (r(935, 924, "LZ0D", 976, 989) !== c(1266, "qp3t", 1302)) {
        const { Blob: s } = _0x1d2b51.v4, C = s[r(868, 927, "jyZ^", 915, 919) + "y"](_0x5c3c6d);
        if (C) throw _0xbb8788[A(-278, "zJ6t", -260) + r(937, 1003, "Uj[P", 966, 987)](C);
        const Q = s[t(-45, -56, "Y(4M") + "e"](_0x33aae9);
        return s[t(-32, -50, "cO#B") + "e"](Q)[e(844, 811, "dfu%", 796, 811) + "h"]();
      } else throw D[e(968, 953, "c4zx", 891, 906) + A(-149, "SQEF", -171)](I);
    return n[t(-121, -165, "o(LO") + "e"](g);
  }
  async [zA("37zm", -135, -263, -225, -197) + hA("1Kne", 1303, 1339) + Fe(344, 319, 370, "vuR6") + zA("SQEF", -34, -57, -159, -98)](o) {
    function t(E, B, d, u, h) {
      return hA(E, B - 188, u - -253);
    }
    const { Content: e } = SA;
    function A(E, B, d, u, h) {
      return hA(d, B - 7, h - -1701);
    }
    const { iv: n, key: r, message: a } = await NE(o);
    function g(E, B, d, u, h) {
      return zA(E, B - 218, d - 101, u - 156, B - 444);
    }
    const c = { token: new Uint8Array(r), iv: n, schemaVersion: DC, bytes: new Uint8Array(a) }, I = e[C(172, 111, 161, "!KCA") + "y"](c);
    function s(E, B, d, u, h) {
      return hA(B, B - 70, E - -126);
    }
    if (I) {
      if (C(88, 104, 132, "a%Rd") === g("ATS)", 358, 414, 338)) throw D[s(1210, "JM]G") + g("#fjQ", 294, 327, 341)](I);
      {
        const { VideoStream: E } = _0x5829ac, B = E[t("iJ4h", 1086, 1103, 1108) + "y"](_0xc9a781);
        if (B) throw _0x222566[A(-353, -439, "wDSH", -342, -401) + t("S1HP", 1095, 1116, 1094)](B);
        return E[A(-400, -481, "8B#k", -461, -460) + "e"](_0x488ee5);
      }
    }
    function C(E, B, d, u, h) {
      return fA(u, B - 304, d - 421, d - -525);
    }
    const Q = e[C(74, 74, 48, "XH5a") + "e"](c);
    return e[A(-458, -348, "0Zm)", -439, -397) + "e"](Q)[A(-434, -407, "euaJ", -390, -390) + "h"]();
  }
  [hA("dx85", 1234, 1288) + hA("v[bT", 1320, 1275) + wt(647, "0W%Y", 677) + "ge"](o) {
    function t(I, s, C, Q, E) {
      return hA(s, s - 464, Q - -1033);
    }
    function e(I, s, C, Q, E) {
      return Fe(I - 335, E - -106, C - 392, s);
    }
    const { Blob: A } = SA.v4, n = A[e(318, "o(LO", 287, 209, 264) + "y"](o);
    if (n)
      throw g(1119, 1161, "!KCA", 1065) === r(1312, "Y(4M", 1302, 1333, 1280) ? D[t(244, "S1HP", 240, 266) + r(1318, "w^mS", 1284, 1348, 1283)](n) : _0x2f4f61[a(-583, "#fjQ", -649) + t(326, "aKcY", 303, 264)](_0x1c8fee);
    function r(I, s, C, Q, E) {
      return wt(I - 104, s, E - 667);
    }
    function a(I, s, C, Q, E) {
      return wt(I - 94, s, C - -1284);
    }
    function g(I, s, C, Q, E) {
      return zA(C, s - 256, C - 322, Q - 137, I - 1327);
    }
    const c = A[r(1398, "#D[F", 1306, 1289, 1349) + "e"](o);
    return A[a(-648, "$2](", -666) + "e"](c)[r(1278, "HM4C", 1264, 1367, 1308) + "h"]();
  }
  async [Fe(227, 270, 231, "&F^y") + zA("ncBP", -135, -191, -191, -154) + hA("$2](", 1353, 1329) + fA("8B#k", 706, 596, 646) + "ls"](o, t, e) {
    const { architecture: A, fullVersionList: n, model: r, platform: a, platformVersion: g } = t ?? {};
    function c(I, s, C, Q, E) {
      return fA(C, s - 149, C - 110, Q - -661);
    }
    return { userAgent: o, architecture: A, platform: a, model: r, platformVersion: g, browserVersions: n?.[c(5, 10, "v[bT", -9)](({ brand: I, version: s }) => ({ name: I, version: s })), installationId: e };
  }
  async [zA("o(LO", -236, -150, -216, -171) + Fe(229, 264, 249, "1Kne") + hA("cO#B", 1361, 1365) + wt(559, "0W%Y", 578) + fA("8&XB", 610, 606, 638) + zA("ncBP", -81, -96, -83, -139) + fA("xE(r", 641, 667, 667) + "on"](o) {
    function t(c, I, s, C, Q) {
      return fA(s, I - 339, s - 367, C - -1109);
    }
    const e = await this[a(1023, "VVhI", 1014) + g("2NF8", 1054, 1002) + g("2NF8", 1045, 1108) + t(-514, -435, "0W%Y", -490) + n(1064, 1093, 1046, 983, "0W%Y")](o[g("vuR6", 1050, 1060) + n(975, 1101, 1040, 1051, "8B#k") + "ge"]);
    function A(c, I, s, C, Q) {
      return Fe(c - 94, I - -835, s - 426, Q);
    }
    function n(c, I, s, C, Q) {
      return zA(Q, I - 175, s - 319, C - 152, s - 1181);
    }
    const r = {};
    function a(c, I, s, C, Q) {
      return fA(I, I - 58, s - 109, c - 369);
    }
    r[g("aKcY", 1107, 1138)] = e;
    function g(c, I, s, C, Q) {
      return fA(c, I - 170, s - 27, I - 459);
    }
    return r[a(953, "2NF8", 940) + n(1022, 1082, 1050, 1054, "o(LO") + g("$2](", 1076, 1036)] = o[A(-559, -499, -445, -522, "zJ6t") + n(998, 991, 996, 989, "DR5Y") + A(-487, -535, -475, -478, "S1HP")], r;
  }
}
function jn() {
  const i = ["W5xcHSouuG", "W5FcNmoga8o7", "dINcHt7cVG", "aCkuovDu", "W78ZfxddSa", "W4xcJCoprui", "W5mNWQ/cPSo+", "rYC6W4NcMq", "CWxdKK3dGG", "ymoRWQZdNSkI", "WPxcU35/wq", "jCoyW556qq", "WOxdL8krwmoQEbBcPCowCG", "smkZWOqesq", "WPJdLgfuWOm", "pCoxW6u", "WONdJX3dMwi", "rWq7W4FcIG", "WQ8qWRijeCoWjmkHW7OvoXa", "WRH1WRNcOSk0", "p8ocW6xdJxq", "WO5TWPVcUCkG", "qCoQWPhdKSkQ", "WRmozCkEWORcISoGrSo3", "W6hdKSo0scG", "aIpcQLqE", "WORcRmkNW5lcLq", "WQZcLvrJWQi", "sSkqWP8", "oZhdNLxdSW", "zmoyWRpcTmkG", "ieVdVg3cKq", "guifW5Hg", "fvFcKCousa", "dt7cQ0WvFbtdJ8oqWP7cRSkz", "W6FdSSoWwYW", "WQSrWRqneCksh8kMW4KYlW", "DCohBIf8W7vjWQ86b1pcRmov", "BSohemkQiq", "eCovW7pdN2e", "rcyMW4xcUW", "x13dQbvz", "WQ3cImotWOhcQCkRFSoVASklWRS", "W7eYdMxdOa", "WP/cSYRcMmoA", "m8oJW7tdNMu", "W6xdKmkGWRi6", "W5XmbCoTW78", "aYKXBG", "W4pcNmogha", "WPNcHh5TxG", "nSkam2S", "edW7", "fYzueWa", "WR/dLSkLWReTnGG", "W7P9aCoyW4i", "AmoyWRS", "cYNcJZlcJW", "WPRcU8k6W5BcTG", "bSkhoN8U", "ra3dPhpdQq", "WQHKWOJcPmkG", "jSoDWOjlWO8", "WQ48W4SVW5m", "WQnffrSr", "WOtdRM1sWOe", "qZKeW43cJq", "WP4ZuCkbW4a", "WOS4vSkNW4K", "n8k/W5xcI8kKxCoBW7OSWPi", "uHpdQMRdIG", "pCoxW6xdOwu", "W7fSWQZdKCotWOjDr8kouG", "cmozWRzKWQe", "zSo9WOddKSk3", "W4BcK8oE", "W4LehZipWOJcOq", "fmkCmfS", "W7SmaMldUG", "emoiW553yG", "tComi8ofuq", "W57cIedcJbb6umksumo/W59BWQC", "kSovW7ldHwy", "zr/cPM/cImkmWRamtG", "uCkcWO0uWR8", "W73dKmk8WQ8k", "x07dQbvD", "e219WPVdJmoSySoJWQNcMhRdKgS", "vSkrWPWuWOy", "WRNcI8kJgNNdO3pdOWxcISk0W5a", "WR7cIeTcWOi", "W7/dMSk+WOOj", "f8ooEmolbW", "W6tdVmkJWQCl", "W77dLmknW5NdRG", "v8kGWPOAWR8", "W4pcLmkiDmkW", "W4VdUSoKWO3dI8oyj8o7WPO7xKu", "WPNcHhr8wG", "WRfxWPpcQCkJ", "W4tcHSoEquu", "g8oRW5LydrdcLxm7W6hcMePo", "W67dPCk8WQKy", "ucyMW5O", "WQ3cJmoqWOxcQSogbCovqCkxWR0TW4C", "mCoSWO7dHmkcyCoX", "W4fUiSo/W74", "WQVcHa0", "qSkZWOndW7y", "WRKCFsq", "WR1ZWP/cRmkY", "mupdShdcMa", "ca3dOeO", "W5ScbKxdGa", "dfusW5bu", "WRfrcmkeWOFcICoN", "xmkOWOuF", "grddOKJdHq", "h8oJW55EcbBcNgKGW5RcMeTS", "W4JcHSow", "i8olW7nbFW", "qsySW4NcIG", "W5/cI8oB", "WQRcIeTD", "oKJdOq", "WO7dP8oNBXhdIvH5exy", "oCo9W6xdN3m", "amouW7P+Ca", "W4hcHSoutxq", "WRTZWONcPmkP", "W7RdJCo6xq"];
  return jn = function() {
    return i;
  }, jn();
}
function AI(i) {
  const o = [], t = T.LIVENESS_CHALLENGE + "_";
  for (const [e, A] of i.entries())
    if (e.startsWith(t)) {
      const n = e.slice(t.length), r = parseInt(n, 15390 + 1 * -15380);
      if (!isNaN(r) && n === r.toString()) {
        const a = {};
        a.phase = e, a.data = A, a.index = r, o.push(a);
      }
    }
  return o.sort((e, A) => e.index - A.index);
}
(function(i, o) {
  function t(g, c, I, s, C) {
    return gA(I - 182, c);
  }
  function e(g, c, I, s, C) {
    return gA(g - 115, c);
  }
  function A(g, c, I, s, C) {
    return gA(s - 613, g);
  }
  const n = i();
  function r(g, c, I, s, C) {
    return gA(c - 218, s);
  }
  function a(g, c, I, s, C) {
    return gA(g - 589, c);
  }
  for (; ; )
    try {
      if (parseInt(e(446, "Qcdq", 268, 386, 367)) / 1 * (-parseInt(e(690, "!l3k", 718, 694, 570)) / 2) + parseInt(a(1093, "&S[m", 930, 1019, 1096)) / 3 + -parseInt(r(762, 708, 494, "t1tY", 924)) / 4 + -parseInt(t(637, "1]4W", 797, 631, 619)) / 5 + parseInt(t(905, "5IL$", 752, 548, 552)) / 6 * (parseInt(a(1231, "*7q*", 1313, 1366, 1276)) / 7) + -parseInt(A("^q6k", 1127, 974, 1172, 1175)) / 8 * (parseInt(A("^q6k", 861, 717, 873, 872)) / 9) + parseInt(r(843, 726, 923, "B(1Q", 882)) / 10 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qn, -2 * 132488 + -444158 + -97 * -14653);
function gA(i, o) {
  i = i - (-1 * 5617 + 7532 * -1 + -744 * -18);
  const t = qn();
  let e = t[i];
  if (gA.FmaVyH === void 0) {
    var A = function(c) {
      const I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let Q = 0, E, B, d = 0; B = c.charAt(d++); ~B && (E = Q % 4 ? E * 64 + B : B, Q++ % 4) ? s += String.fromCharCode(255 & E >> (-2 * Q & 6)) : 0)
        B = I.indexOf(B);
      for (let Q = 0, E = s.length; Q < E; Q++)
        C += "%" + ("00" + s.charCodeAt(Q).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const g = function(c, I) {
      let s = [], C = 0, Q, E = "";
      c = A(c);
      let B;
      for (B = 0; B < 256; B++)
        s[B] = B;
      for (B = 0; B < 256; B++)
        C = (C + s[B] + I.charCodeAt(B % I.length)) % 256, Q = s[B], s[B] = s[C], s[C] = Q;
      B = 0, C = 0;
      for (let d = 0; d < c.length; d++)
        B = (B + 1) % 256, C = (C + s[B]) % 256, Q = s[B], s[B] = s[C], s[C] = Q, E += String.fromCharCode(c.charCodeAt(d) ^ s[(s[B] + s[C]) % 256]);
      return E;
    };
    gA.fWnYUF = g, gA.GULtRo = {}, gA.FmaVyH = !0;
  }
  const n = t[0], r = i + n, a = gA.GULtRo[r];
  return a ? e = a : (gA.wgCVnr === void 0 && (gA.wgCVnr = !0), e = gA.fWnYUF(e, o), gA.GULtRo[r] = e), e;
}
function DA(i, o, t, e, A) {
  return gA(o - -203, i);
}
function he(i, o, t, e, A) {
  return gA(t - 769, i);
}
function qn() {
  const i = ["WOBcVvZdVCoK", "k8oDWOq", "hmk0bSk5nq", "W59/WQnXW4a", "zmkLaJxcUG", "CmoFW5xcNSoA", "uCoQW6/dGg0", "hqPXiZ8", "A8oUWRxcSmkB", "krVcMmkvW6q", "B8oLWRlcPCkE", "W7xdHtxdRv4", "WPFdU0v8ja", "pSo8WO3cL2m", "W6FdNJxdRKK", "WPpdKmoTiSov", "WPtdJwK", "Fd7dLmofca", "sJ7dJSodia", "WQGdl3Px", "EKjc", "cCkCbSk5mG", "Ffnx", "oL/cO8k4qG", "W6RcQCk0", "gSkSWQtcQ3a", "W4pcRmopW41D", "w8khlJRcMa", "W7T3W7VdNaK", "WQtdV8kuhgS", "W455WQjxWOG", "wCovW4ZcICoq", "WR7cNaJcTCoH", "dmkVWRBcTKK", "cSkramkO", "q8kXW5mUWRW", "vmkXW5KvWRS", "B8oLWRtcO8kF", "WPNdS8k4hN0", "kbFcNmkxW68", "i8kGArBdNa", "WOpdTSk2c2W", "FdRdLmobjG", "iMf3WPmW", "WPZdOxWbdG", "Bmk3W7LYCa", "WQjLWOxdP38", "mq3cRmoiW54", "WQrIpg/dIa", "eCkrfmkLmq", "kbFcMSkrW64", "tgddTJ9J", "jCo8WO3cKhe", "W7/cKmkWWOpcOW", "W73cUmkNWPNcTG", "amojjxC", "WQpcNSolW4NcNG", "vmofWOJcGCkP", "k8oga2xdOG", "BJRcGmoila", "FSoxW43dJxy", "WQzYWRFdR38", "WRVcVv8", "W5XTWRnxW6S", "W5lcT8oZW4PR", "eSoAj2ON", "WPfLxSkWsa", "v8kElJNcNa", "iXpcJCkvW5K", "W7RdKCoIlCoRqNi", "laJcIW", "y8oNWQm", "W73cGCkPdJK", "u3BcSYKm", "W6JcR8kWWPhcPa", "FKjcW57dSW", "qxDdeCkd", "jgviWOKV", "W6JdGZq", "W4ddUI4QW4q", "WPD5t8kCwq", "vgzg", "l8oFWO3cL2m", "hSonk3m", "W4BdVtGnW6u", "vmklldJcRG", "WRVdNCoPk8oL", "bSoAj3u", "yCozW57cO8oC", "rrVcPs0z", "neZcTG", "lmkDWPVcLtywo8kkW5iEWQ54WPi", "WRNdSSk1egS", "CJRdG8oq", "E8kSW7f2DW", "dqzOiY8", "lSo5qSo6WO8", "WQNcHWlcUSoM", "WQbZWQhdR2W", "WQeCBvtdQG", "b8ojl2i", "W6RcSmkyWPxcOW", "nCoQwq", "v8k1W456WR8", "DJfQ", "rSk1W54/WOO", "WP/dNNyykG", "EY3dHCofmq", "oSoqWPVcL3K", "saBcVZie", "gmkCc8kOoG", "W64jWQddH8kB", "auhcSCkJBW", "WQDxsa", "vmkHW48/W7K", "WQpcV8oAW5JcMa", "BthdHa", "W4tdRJGKW4K", "bmoho24w", "WRhdUCk8", "afjBs8k3", "xSkpitRcIq", "WQ9ItmkmW6O", "ESkXW5/cHvG", "WPDhsCk+sa", "W4xcT8opW5e", "W4KaWQldHCkI", "gCkdWQRcSuK", "duLkFSo4", "rstcGYGj", "gSkSFXBdGq", "g8kLWPxcT1W", "WQbrtSkhW44", "sCk7W5m", "ySkKW7T2DW", "WPBdKLHViG", "mmo7tmomWQO", "vSkPsSkkWPPuWP7cLq", "qvpdOZbj", "WOFdT8kTeuW", "rCk6W5O/WPa", "W4SJcmoLdXarsqaJWPWD", "W4H1W5pdGc8", "k8o7j2pdHW", "texdPYPl", "bMvvWP0J", "WOurAgJdRq", "WRKVb2Xx", "zSopW7u4W58", "tCkXW4K7WR0", "W7xdJtFdSW", "rSkdidpcJG", "W6PjW7BdUqy", "lwdcO8kQrq", "AZ7dH8ob", "gtNcSwCApCoaWRLJW7C7WQns", "amonjq", "W5v5WR5w", "r8kXW7i0WPO", "W7hcVCkTeY0", "WRrLj3ZdQa", "gvPBB8k5", "WPddGhuCha", "neJcSSk4uG", "mWNcR8oDW6a", "CKXg", "yCoDW57cJCok", "W73cQCkTnde", "oMfiWOKl", "r8oWlfBcH8kJW61fW5v5WOzXxa", "oeRcOW", "W5pdRc8aW4O", "WQtcICoAW43cIq", "jmknWOJdNSkgW55Hzt7cKSkKvJJcJW", "W4pcRmonW4z8", "WP5nASk8va", "WQ7cLSoAW5/cIq", "fH7cL8kiW4i", "b8onCSo6WQO", "WQm6l2Dq", "v8kzpdZcMG", "W6/cUmkHWPxcSW", "WQGci39b", "W7xcVSk4", "W5pdRdmmW58", "eCo0ACkfWR4", "vmk9W5i0WQO", "imo3v8ohWPS", "qSklpc7cLa", "WQbZWQhdJwm", "WQNcHWlcUG", "b8kODqVdPW", "zd19tW", "h01mDSk+", "vd/cVY8E", "WQSHoeXf", "WRjzqmkhW74", "WQeug2rm", "W7/cUmkXWR/cSG", "WPddRfr4mW", "irpcMSkrWQO", "W6RcRCkHWOxcOG", "vSkXWP02WRa", "CXH/xHO", "WQrhlxRdOa", "W5BcSCob", "WQRcMSoyW4NcJG", "WQlcUuVdGCoV", "WQS8jwrH", "FCoDW4NcHmoB", "ESoIW4/cQu0", "W7ZcVmkMW5dcVG", "jSoSv8oB", "WRVcJW7cSCow", "FtL5xG", "W5lcLCosW4X7", "WQbUWRFdVxG", "W4dcPmotWOnH", "amoDoMiM", "hwLAWP0J", "gH1GjYG", "hWnKmHe", "u3neo8kY", "vd/cVsqE", "W77dJ8kmWPJdJSoAWO4fW7hcScvQ", "e8kUWPhcSfy", "FmoJW5NcHvW", "WQVcIYhcVCoJ", "W5DxW7/dJW0", "WOdcMxddGSoe", "W67cRSkMWPhcTW", "WQVcNSorW4VcIq", "vdBdLSobkW", "DmoiW5S", "WRpdRmk8ggW", "z8kNdCkCW7/dIeFcS8kNzCkxWRC", "yCovW5xcGSon", "W7DwW7ldGrS", "WOjZvmkLW7O", "WRVcNalcUCoq", "jMWPge18W6SsWP7dTgHJW50", "F1nxW5/dSq", "mCoDsSogWRK", "dSkLWPxcS1W", "cJRcGCoMW6m", "tCoUWOxcPCkk", "B1DkW5BdOq", "haXQndG", "ECoaW5ZdIwe", "W4hcOmosW4PP", "zCkdoZxcQq", "yCoDW7FcICon", "hufrCCkR", "rCouW5VcN8oB", "vMzcoSkO", "WPaaBq", "WQhdV19+iG", "tYldScCc", "yNTtnSk1", "yYLOt18", "W6tcLmk4WPhcTW", "sw3dRJTa", "ASkMW7nHya", "W71FW7ddNa0", "WPztWPJdNwG", "WQDMggBdPa", "jSohfG", "hY3cISoIW6q", "WR7cVvZdPSoO", "xeJdRZ9j", "WP1et8kJwq", "WPzYt8k0xW", "W5i3WQBdKCkk", "W4RdHdGAW58", "amo0ASkcWOS", "WRvdtmkfW6G", "CSoWW4W", "W51PWObAW4K", "fmkhWOtcTg8", "nutcSmk8wa", "tCojvSo9ySkwWRtcTNBdM8k2f10", "WRhdSSk1hhy", "W6PBW7pdMa", "W5npW7ldNae", "qmoXW6G3W6S", "W59OWPLFW4K", "eColj3ug", "zYLPqG", "W7NcSSk4", "bSo2qa", "zZL+yXi", "aSo/qmkFWRS", "WPvYtW", "W5ldRd8", "gmkebG", "tdRcStue", "k8ofWOK", "DSooW5xcNmoo", "rSkdiJJcJG", "cbFcNCkdW6S", "CSozW44", "WQvTlx3dTG", "W4PJWQnBW5W", "fmoIrmklWQ0", "CG9UtW8", "idZcS8oxW6C", "WQJdJSo/oCo4", "W4yLqCkODgCUqG", "W6tdNYNdGgq", "BdBdJ8oknG", "ce9B", "dJRcNmo2W7W", "mWNcJCorW6u", "kqxcT8oDW70", "cSoqbmkSja", "W54vWQRdKCkM", "WPCgy0RdIG", "WPldN8oFpCoE", "FJf/wqS", "BcZdImo1kW", "WQrSWR7dQ2u", "WQ3dJSo1nCoj", "cuxcP8kQuW", "B8oHWQhcOCkj", "rdpcPcqo", "kCodWO3cHwq", "WQzIk2VdLG", "WRZdT8kVhhy", "w8o0W4JcHue", "uebgkSki", "amoHEqtdHq", "emkkaSkzoW", "WR/dRmoJW4pdOMKFWO5zW6fRW7hdKq", "WOD5xW", "gv1nDW", "crVcMmkvW6q", "ESoJW6/cJuW", "f8oRnvJdJa", "WRdcNwJcSttcI8kQDtZcKcRcKL3cLa", "qxVdPW", "W5ipWOBdKq", "WPZdJ3yhcW", "rwtdTJ9k", "dCkzcmkJbG", "WQvWo0pdOa", "fmkrfW", "BSkPW7b2AG", "WPBdSev8nq", "tgtdTJTn", "W57cQmobW4rQ", "ySkGW6HYya", "kCopfxJdIa", "gCkmWQZcQvG", "E8o0W4JcGuS", "WRdcJX0", "W5LKWRfEW4q", "WQKRpMXh", "wmojW5BcMmox", "z8osWQFcSmkt", "ztqiW4H0WPNcSHNdNCk7W7iUW4W", "W4NdOcSmW4i", "WPZdLCoUmmoy", "WRpcMSosW5W", "pCoXvG", "WORdN3GscG", "kCkCWPNcNdqwpmkFW5KYWPzjWRi", "xgddPJ9A", "W53cOmodW5C", "W6tcPSk7ca", "WQnHWRhdQ1G", "W6BcOCkNeG", "ibZcMSk9W68", "vMbcp8kv", "W7BdG8oqW4RcR8k/WOSp", "wMfokSki", "BcRdKSobaq", "W6lcTSkecsG", "mCodaM7dQG", "WP1LvSkvwq", "m8odcwxdTG", "iq3cTCozWRm", "id/cTCoDW6m", "WRlcUvVdQ8oU", "B8k6W747WQK", "WQn9wmkoW7K", "zdLPwry", "W7NcPSkKfdC", "WQtdV8k0cvu", "jmoya2RdSq", "DSoPWQVcOCkj", "BSoaW5VdN2S", "kGDQncG", "pg7cQCk3qG", "ofNcPW", "B8oKW4/cJa", "W5tcT8ofW4j7", "WO/cIX7cOCo5", "jmopch/dOa", "DmojW4tdHxe", "W4XFW63dNqq", "W6xcHmkHbZO", "W67cJSkHWPxcOa", "WP7dU0v4iW", "CSovW7KSW4G", "l8oJWONcKhK", "W6tdGI7dPN4", "WRjXj3W", "dWP3lZO", "iclcNmkFW74", "omo7vSooWR0", "eWPMmG", "WRKhj2Hd", "WRJcUvZdVCoa", "WRNcIXNcSCo2", "iaBcJ8kuW6S", "yCo0WQpcOmkZ", "WPigAuBdUW", "iSoOcMtdPW", "WQn0tmkwW6W", "WOuDy0NdVa", "EKzxW4/dOa", "CmoYWQNcTG", "CSolW7ZdG2K", "jMfiWO8Q", "W4H+WR9a", "pSoyWOxcGwm", "W6dcUSkLbs0", "ft5elH4", "WONdJwOgbG", "kGBdJSkwW6u", "W7NcTSk8atO", "uhXto8kt", "W7DxW7VdMXW", "rCkNW44zWRy", "W4xcSSo1WPZcUq", "W7ujgmoxWRTBn3pdH8ojh8oH", "W6dcSSkLebm", "emonpgib", "ttFcTYqE", "W6VdItNdTW", "cmkHWQJcRW", "ECkGW656yG", "WRNdJSo1kG", "nCoycxK", "lmoiW5ddMwvdqq", "BdBdJ8okfW", "emkZFWtdGq", "pmo/s8obWQW"];
  return qn = function() {
    return i;
  }, qn();
}
function tA(i, o, t, e, A) {
  return gA(e - -405, o);
}
function ne(i, o, t, e, A) {
  return gA(o - -383, i);
}
function OA(i, o, t, e, A) {
  return gA(o - 382, e);
}
class vE extends RE {
  [he("%Cd1", 1103, 1181) + DA("%Cd1", 175) + he("iu[)", 1302, 1320) + OA(635, 816, 688, "aBek")];
  [tA(-373, "C)*3", 16, -158) + he("C)*3", 1355, 1183) + tA(396, "olGC", 214, 211) + ne("NgeS", 229) + "se"];
  constructor(o) {
    function t(r, a, g, c, I) {
      return OA(r - 189, g - -656, g - 390, a);
    }
    function e(r, a, g, c, I) {
      return DA(c, I - -703);
    }
    function A(r, a, g, c, I) {
      return tA(r - 483, I, g - 120, c - 1048);
    }
    super();
    function n(r, a, g, c, I) {
      return he(g, a - 397, r - -1342);
    }
    [this[e(-462, -750, -798, "sd*q", -591) + e(-639, -707, -718, "S(J!", -643) + A(1304, 1262, 1083, 1279, "aR2@") + n(84, 44, "uS5d")], ...this[t(77, "LWL7", 70) + A(1076, 1135, 997, 981, "NgeS") + n(108, -66, "WZnN") + A(1198, 1175, 1225, 1109, "yodc") + "se"]] = o;
  }
  async [ne("9sKj", 172) + tA(-202, "W&&(", 162, -51) + he("uS5d", 1218, 1274)]({ installationId: o, onCaptureData: t, sessionToken: e, video: A }) {
    const n = t[s(64, -15, -361, "%$u^", -157)](T[C(316, 147, 356, "3)7i") + s(-16, -82, -94, "nNN@", 50) + s(-90, -296, 16, "&v1m", -122) + "S"]);
    if (!n)
      throw I(-63, -134, -225, -127, "iu[)") !== I(-397, -372, -220, -213, "5IL$") ? new _0x49cc19(g(1469, "nNN@", 1310) + C(38, -132, 16, "xwz@") + I(-346, -352, -434, -227, "ZWoD") + I(85, -230, -79, -61, "&S[m") + g(1245, "NgeS", 1340) + s(-323, -196, -149, "ZWoD", -247) + s(-67, -105, -100, "t0)l", 38) + s(-20, 175, -58, "A@aJ", 78) + I(45, -137, 72, -58, "*7q*")) : new D(I(-169, -465, -377, -351, "&S[m") + g(1609, "$RLP", 1512) + a(302, 107, 179, "Tvd)", 276) + C(293, 139, 390, "1]4W") + g(1427, "!l3k", 1569) + g(1713, "LWL7", 1510) + a(57, 132, 197, "cu])", 243) + a(93, 21, -33, "LWL7", 13) + s(-37, -195, -3, "xwz@", -63));
    const r = AI(t);
    function a(d, u, h, p, m) {
      return ne(p, m - 80);
    }
    if (r[C(-60, 137, -195, "5IL$") + "h"] === 1 * -2377 + -5053 + -7430 * -1)
      throw s(-348, -324, -333, "K1l!", -175) !== I(-458, -140, -323, -249, "Vvqs") ? _0x4f414e[g(1468, "r5Vq", 1375) + I(-212, -594, -328, -415, "NgeS")](_0x3f285d) : new D(C(-35, 131, -111, "cu])") + g(1595, "C)*3", 1494) + C(52, -106, 51, "A@aJ") + C(37, 215, 106, "3)7i") + a(277, 291, 106, "a1p0", 155) + s(-56, -141, -213, "$RLP", -65) + C(107, 190, 9, "G%vZ") + C(82, 199, -38, "$RLP") + s(-177, -135, -47, "NgeS", -22));
    function g(d, u, h, p, m) {
      return he(u, u - 48, h - 206);
    }
    const c = {};
    c[a(315, 302, 214, "ZWoD", 345) + g(1783, "vNGw", 1618) + g(1734, "iu[)", 1630) + s(102, -200, -93, "$RLP", -21) + g(1555, "cu])", 1511) + C(-19, 55, -229, "1]4W")] = r, c[s(-299, -20, -26, "n8QF", -93) + a(90, 382, 219, "oLE4", 259) + a(163, 270, 114, "S(J!", 191) + I(-130, -25, -327, -146, "&v1m") + s(53, 200, 188, "r5Vq", 39) + C(-1, -156, 33, "%$u^")] = n;
    function I(d, u, h, p, m) {
      return OA(d - 474, p - -1108, h - 122, m);
    }
    c[a(118, 52, 139, "!l3k", -31) + I(-96, -190, -122, -166, "yodc") + "en"] = e, c[C(-13, 87, -55, "&v1m") + g(1686, "A@aJ", 1605) + g(1475, ")286", 1650)] = o;
    function s(d, u, h, p, m) {
      return tA(d - 340, p, h - 164, m - -109);
    }
    function C(d, u, h, p, m) {
      return ne(p, d - 27);
    }
    const Q = await this[C(-53, 32, -23, "aBek") + C(23, 116, -106, "sd*q") + I(-180, -540, -424, -374, "xwz@") + a(395, 109, 85, "K1l!", 212) + "e"](c), E = {};
    E[a(418, 417, 0, "K1l!", 220) + g(1629, "vdhM", 1495) + a(510, 484, 445, "vdhM", 323) + C(-86, 24, -64, "$RLP") + g(1404, "xwz@", 1237) + I(-324, -190, -508, -367, "cu])")] = n, E[I(83, 38, -53, -64, "olGC") + I(-143, -345, -334, -202, "iu[)") + s(-90, 89, -194, "1]4W", -69) + s(185, 160, -24, "vdhM", 95) + s(-429, -1, -190, "%$u^", -207) + a(151, 96, -38, "i65e", 2)] = r, E[s(11, -8, 69, "LWL7", -129) + I(-529, -523, -436, -367, "cu])")] = Q, E[a(48, -126, 79, "3)7i", -39)] = A;
    const B = await this[g(1630, "a1p0", 1536) + a(36, 82, 166, "uS5d", -24) + a(20, 304, 214, "*7q*", 112) + a(152, 527, 462, "vdhM", 335)](E);
    return this[g(1213, "cu])", 1384) + I(-375, -204, -124, -267, "*7q*") + C(252, 89, 214, "C)*3") + C(98, 174, 315, "olGC")](B);
  }
  async [ne("uS5d", -25) + tA(175, "Vvqs", 113, -42) + OA(713, 765, 613, "aR2@") + OA(812, 947, 1019, "cu])") + "e"]({ installationId: o, livenessChallengeOnCaptureData: t, passiveLivenessOnCaptureData: e, sessionToken: A }) {
    const n = [...e[u(1165, 1046, 1103, "$RLP") + u(802, 842, 1003, "uS5d")][u(840, 946, 1081, "1]4W") + m(360, 315, 348, "t1tY") + B(359, "C)*3", 501, 332) + m(206, 8, 146, "A@aJ") + E(628, 610, 509, 765, "K1l!") + d(-396, -187, "Vvqs", -277) + E(654, 626, 782, 835, "3)7i")]], r = e[u(640, 851, 804, "qzhM") + m(510, 447, 448, "1]4W")][m(569, 532, 475, "a1p0") + d(-162, -235, "&S[m", -70) + m(463, 374, 363, "9sKj")][d(79, 226, "S(J!", 27)](({ detectedObject: b }) => b);
    t[E(600, 555, 476, 595, "W&&(") + "ch"](({ data: b }) => {
      function y(J, H, Ee, de, Ye) {
        return E(J - 37, de - 503, Ee - 247, de - 252, Ye);
      }
      function G(J, H, Ee, de, Ye) {
        return d(J - 293, H - 121, Ye, H - 515);
      }
      function R(J, H, Ee, de, Ye) {
        return B(J - 372, H, Ee - 134, de - -610);
      }
      function L(J, H, Ee, de, Ye) {
        return d(J - 220, H - 172, Ee, J - 738);
      }
      function O(J, H, Ee, de, Ye) {
        return d(J - 319, H - 165, H, de - 272);
      }
      if (O(-23, "Qcdq", 103, 17) !== O(198, "yodc", 305, 289)) {
        n[L(811, 739, "G%vZ")](...b[R(-194, "WZnN", -20, -12) + y(1054, 907, 1206, 1096, "B(1Q")][O(-97, "5IL$", 200, 10) + L(681, 778, "aR2@") + G(472, 569, 785, 390, ")286") + y(870, 986, 881, 997, "WZnN") + O(397, "gfDc", 492, 269) + y(1146, 1050, 914, 1039, "^q6k") + G(195, 358, 386, 315, "!l3k")]);
        const J = b[O(297, "uS5d", 227, 174) + L(579, 619, "5IL$")][y(1016, 1084, 1371, 1187, "A@aJ") + O(-141, "t0)l", -16, 37) + L(724, 637, "9sKj")][G(133, 270, 441, 262, "sd*q")](({ detectedObject: H }) => H);
        r[R(-541, "a1p0", -465, -416)](...J);
      } else {
        const J = {};
        J[L(740, 631, "Vvqs") + "r"] = _0x2c5d75[O(126, "r5Vq", 61, 0) + y(733, 1076, 791, 951, "B(1Q") + G(432, 216, 372, 66, "9sKj")][O(-48, "i65e", 231, 143) + O(79, "gfDc", 84, -6)], J[O(-15, "LWL7", 48, 79) + R(-40, "S(J!", -325, -195) + R(-188, "%Cd1", -258, -143) + R(-276, ")286", -44, -251) + L(813, 884, "a1p0") + R(-591, "uXMe", -371, -406) + "o"] = _0x411503[O(180, "xwz@", 113, 53) + R(-90, "cu])", -217, -164) + L(560, 601, "r5Vq")][G(197, 175, 129, 66, "iu[)") + G(498, 324, 481, 472, "LWL7")];
        const H = {};
        return H[G(393, 287, 475, 315, "yodc") + G(610, 387, 522, 454, "$RLP")] = J, H[L(775, 571, "K1l!") + L(603, 727, ")286") + R(-70, "Vvqs", -327, -125)] = _0x1c4265[y(932, 1065, 839, 957, "WZnN") + y(1295, 1045, 1054, 1145, "Vvqs")], H;
      }
    });
    const a = Fs(), g = await Dx(), c = await this[B(518, "G%vZ", 372, 409) + E(590, 603, 596, 675, "yodc") + u(1014, 1057, 1109, "aR2@") + B(753, "a1p0", 390, 576) + "ls"](a, g, o), { cameraProperties: I, croppedImageWithPosition: s } = e[u(1010, 947, 936, "LWL7") + m(297, 198, 314, "gfDc")], C = await this[m(214, 374, 431, "&S[m") + E(605, 602, 609, 407, "5IL$") + E(498, 650, 808, 869, "!l3k") + E(324, 477, 560, 664, "C)*3") + u(603, 813, 723, "sd*q") + B(453, "t^0x", 353, 532) + d(-330, -227, "gfDc", -335) + "on"](s), Q = { ...I };
    function E(b, y, G, R, L) {
      return tA(b - 426, L, G - 229, y - 430);
    }
    function B(b, y, G, R, L) {
      return OA(b - 142, R - -469, G - 448, y);
    }
    Q[B(431, "B(1Q", 683, 545) + d(47, 161, "NgeS", 24) + E(297, 406, 200, 336, "iu[)") + m(325, 389, 311, "A@aJ") + m(406, 190, 503, "oLE4")] = C, Q[E(546, 381, 346, 604, "1]4W") + u(763, 827, 926, "*7q*") + B(336, "%$u^", 642, 494)] = c, Q[B(670, "B(1Q", 307, 457) + B(365, "^q6k", 510, 363) + B(164, "&v1m", 399, 215) + u(1284, 1220, 999, "&v1m") + m(355, 190, 152, "olGC") + m(346, 312, 559, "&S[m") + E(556, 543, 717, 430, "S(J!")] = n, Q[E(519, 708, 892, 645, "t1tY") + E(238, 357, 546, 374, "xwz@") + E(171, 365, 338, 354, "B(1Q")] = r;
    function d(b, y, G, R, L) {
      return tA(b - 139, G, G - 346, R - -191);
    }
    function u(b, y, G, R, L) {
      return tA(b - 27, R, G - 346, y - 967);
    }
    const h = Q, p = {};
    p[E(146, 302, 335, 350, "Qcdq") + d(-146, -418, "Qcdq", -287) + "en"] = A, p[u(980, 1190, 1094, "C)*3")] = h;
    function m(b, y, G, R, L) {
      return tA(b - 5, R, G - 317, b - 286);
    }
    const w = p;
    return this[u(1217, 1222, 1158, "uXMe") + u(1246, 1112, 1093, "t0)l") + E(314, 412, 346, 405, "uXMe") + B(388, "t1tY", 452, 299) + B(393, "iu[)", 169, 346) + "e"](w);
  }
  async [OA(734, 777, 860, "Qcdq") + DA("yodc", 259) + OA(552, 640, 454, "LWL7") + tA(17, "i65e", 105, 205)]({ livenessChallengeOnCaptureData: o, metadata: t, passiveLivenessOnCaptureData: e, video: A }) {
    const { MultiRangeLivenessContent: n } = SA.v4, r = this[m(321, 465, 167, 345, "^q6k") + m(580, 352, 604, 477, "!l3k") + m(168, 88, -82, 124, "Vvqs") + m(441, 373, 320, 326, "uS5d") + C(-587, -390, "&v1m")](e[m(354, 681, 658, 484, "Tvd)") + p(-194, -115, -74, "t1tY") + "e"], e[C(-318, -484, "uXMe") + I(-249, -252, "vNGw")], R0[I(-99, -176, "B(1Q")](this[C(-381, -353, "uXMe") + I(-87, -36, "ZWoD") + m(424, 381, 205, 255, "uXMe") + C(-9, -208, "B(1Q")])), a = o[p(-187, -237, -309, "a1p0")](({ data: w }, b) => this[I(-338, -145, "iu[)") + p(-510, -726, -590, "cu])") + I(-451, -288, "oLE4") + C(-289, -448, "uXMe") + h(1108, 1156, 1055, 1216, "G%vZ")](w[p(-488, -531, -524, "%Cd1") + I(-436, -365, "W&&(") + "e"], w[I(-304, -261, "9sKj") + C(-483, -547, "^q6k")], R0[p(-171, 31, -360, "*7q*")](this[p(-184, 0, -217, "uS5d") + p(-384, -336, -210, "C)*3") + p(-202, -348, -82, "t1tY") + p(-198, -271, -321, "aR2@") + "se"][b]))), g = await Promise[I(-398, -544, "uXMe")]([r, ...a]), c = this[h(722, 904, 857, 683, "gfDc") + p(-374, -356, -209, "A@aJ") + p(-341, -529, -457, "i65e") + p(-111, 70, -259, "yodc") + m(-34, 32, 95, 137, "nNN@") + C(-228, -386, "%$u^") + h(827, 989, 836, 699, "olGC") + I(-245, -372, "xwz@")](e[C(-573, -479, "S(J!") + I(-144, 76, "aBek")][I(-434, -437, "oLE4") + I(-56, 92, "1]4W") + h(1139, 1284, 1328, 1034, "sd*q")]);
    function I(w, b, y, G, R) {
      return he(y, b - 205, w - -1503);
    }
    const s = o[C(-187, -399, "nNN@")](({ data: w }) => this[h(1104, 1226, 1013, 954, "n8QF") + p(-527, -632, -611, "i65e") + C(-185, -323, "t1tY") + I(-217, -14, "W&&(") + p(-112, -244, 14, "3)7i") + h(865, 1048, 641, 783, "K1l!") + m(496, 513, 532, 424, "B(1Q") + C(-321, -361, "r5Vq")](w[I(-389, -554, "&v1m") + C(-67, -165, "uXMe")][I(-151, -139, "Qcdq") + h(985, 1090, 814, 872, "5IL$") + C(-143, -175, "r5Vq")]));
    function C(w, b, y, G, R) {
      return OA(w - 444, b - -1178, y - 314, y);
    }
    const Q = this[I(-362, -165, "&v1m") + I(-490, -599, "B(1Q") + C(-391, -316, "%Cd1") + p(-432, -406, -600, "B(1Q") + h(1008, 901, 1215, 948, "a1p0") + p(-297, -491, -358, "B(1Q") + "a"]([c, ...s]), E = { stepResults: g, metadata: t, multiRangeLivenessMetadata: Q, video: { streamH264: A ? this[C(-176, -354, "xwz@") + h(1103, 1193, 1116, 935, "ZWoD") + h(1070, 1066, 1238, 1211, ")286") + m(656, 291, 443, 443, "*7q*") + p(-362, -334, -265, "cu])") + p(-429, -599, -385, "1]4W")](A) : void 0 } }, B = n[h(1047, 898, 993, 1075, "t0)l") + "y"](E);
    if (B)
      throw I(-384, -384, "n8QF") !== C(-501, -349, "uS5d") ? _0x15fbb3[I(-160, -116, "oLE4") + m(296, -8, 186, 167, "n8QF")](_0x3ec896) : D[h(812, 715, 794, 933, "vNGw") + I(-312, -505, "r5Vq")](B);
    const d = n[C(-391, -194, "Tvd)") + "e"](E), u = {};
    function h(w, b, y, G, R) {
      return tA(w - 329, R, y - 439, w - 868);
    }
    function p(w, b, y, G, R) {
      return he(G, b - 293, w - -1567);
    }
    function m(w, b, y, G, R) {
      return tA(w - 314, R, y - 332, G - 243);
    }
    return u[p(-525, -388, -684, "S(J!") + h(1054, 1181, 839, 1065, "qzhM") + h(1133, 1074, 1099, 971, "LWL7") + m(-14, 61, 311, 158, "$RLP") + I(-220, -394, "W&&(")] = d, this[C(-509, -429, "oLE4") + p(-494, -442, -613, "3)7i") + m(679, 658, 586, 472, "LWL7") + "ge"](u);
  }
  async [DA("WZnN", 177) + DA("ZWoD", 65) + DA("oLE4", 80) + ne("cu])", 5) + DA("vdhM", 421)](o, t, e) {
    const { MultiRangeLivenessStepResult: A } = SA.v4, n = await Jc(o), r = await this[E(731, 437, 533, 618, "*7q*") + E(644, 592, 370, 512, "LWL7") + B(-320, -98, "cu])") + Q(391, 546, 709, "t^0x") + B(-467, -263, "i65e")](n), a = {};
    a[B(-231, -296, "t0)l")] = r, a[s(1229, 1145, 1181, "t0)l") + B(-641, -709, "olGC") + E(600, 699, 661, 714, "sd*q")] = t;
    const g = {};
    g[B(-553, -713, "K1l!")] = a;
    function c(d, u, h, p, m) {
      return DA(d, h - 1164);
    }
    g[E(792, 1107, 809, 907, "NgeS") + c("$RLP", 1420, 1436) + s(1161, 1036, 1163, "r5Vq")] = e;
    const I = g;
    function s(d, u, h, p, m) {
      return DA(p, h - 875);
    }
    const C = A[B(-587, -542, "WZnN") + "y"](I);
    function Q(d, u, h, p, m) {
      return DA(p, u - 459);
    }
    function E(d, u, h, p, m) {
      return DA(m, p - 420);
    }
    if (C) {
      if (B(-484, -546, "5IL$") === Q(871, 908, 766, "n8QF")) return;
      throw D[c("W&&(", 1678, 1504) + B(-604, -473, "NgeS")](C);
    }
    function B(d, u, h, p, m) {
      return OA(d - 422, d - -1297, h - 68, h);
    }
    return A[Q(471, 531, 658, "3)7i") + "e"](I);
  }
  [DA("qzhM", 331) + ne("i65e", -112) + ne("S(J!", 24) + ne("qzhM", 87) + OA(663, 885, 1053, "%Cd1") + tA(102, "LWL7", -225, -104) + he("W&&(", 1314, 1251) + OA(961, 909, 878, "!l3k")](o) {
    const { MultiRangeLivenessMetadata: t } = SA.v4;
    function e(C, Q, E, B, d) {
      return tA(C - 148, C, E - 189, B - 1076);
    }
    if (!o)
      if (a(-481, "LWL7") === a(-420, "i65e")) {
        _0x207637[c(-80, "S(J!", 203, 85, 84)](..._0x4bbe71[r("&v1m", -315, -236) + r("t0)l", 148, -41)][a(-390, "nNN@") + c(145, "!l3k", 317, 443, 367) + a(-404, "gfDc") + a(-452, "^q6k") + a(-745, "n8QF") + e("!l3k", 1443, 1439, 1324) + r("!l3k", 43, -142)]);
        const C = _0x1a542c[e("t1tY", 1445, 1347, 1348) + c(333, "uXMe", 479, 519, 460)][e("^q6k", 902, 889, 1062) + I(845, 798, 1029, "vNGw") + a(-396, "WZnN")][c(302, "oLE4", 538, 658, 518)](({ detectedObject: Q }) => Q);
        _0x22f762[r("!l3k", 205, 41)](...C);
      } else return;
    const A = o[I(924, 827, 992, "uS5d")]((C) => {
      function Q(h, p, m, w, b) {
        return a(m - 822, w);
      }
      function E(h, p, m, w, b) {
        return I(m - -770, p - 245, m - 116, p);
      }
      function B(h, p, m, w, b) {
        return I(h - -955, p - 334, m - 265, p);
      }
      function d(h, p, m, w, b) {
        return r(m, p - 397, h - -352);
      }
      function u(h, p, m, w, b) {
        return e(w, p - 149, m - 245, h - -976);
      }
      if (Q(249, 253, 361, "W&&(") !== Q(522, 164, 339, "*7q*")) throw _0x1bfdf9[d(-277, -219, "n8QF") + Q(223, -23, 159, "3)7i")](_0x5acfc0);
      {
        const h = {};
        h[u(-21, 0, 94, "3)7i") + "r"] = C[d(-357, -264, "%$u^") + B(-45, "gfDc", -224) + u(21, 189, -112, "vNGw")][E(46, "NgeS", 127) + u(377, 332, 297, "qzhM")], h[E(336, "gfDc", 286) + B(210, "1]4W", 93) + d(-560, -749, "olGC") + u(-27, 100, 53, "9sKj") + B(8, "A@aJ", -49) + u(-60, -165, -116, "&v1m") + "o"] = C[Q(98, 80, 300, "5IL$") + d(-452, -496, "aBek") + d(-679, -504, "t0)l")][B(205, "aR2@", 0) + Q(526, 429, 503, "t1tY")];
        const p = {};
        return p[Q(439, 484, 466, "NgeS") + d(-520, -687, "vNGw")] = h, p[E(53, "S(J!", 42) + B(-74, "ZWoD", 65) + E(-143, "Qcdq", 14)] = C[u(-29, 52, 39, "&v1m") + Q(-2, 99, 219, "r5Vq")], p;
      }
    }), n = {};
    n[e("^q6k", 949, 1047, 1062) + e("G%vZ", 1383, 1307, 1258)] = A;
    function r(C, Q, E, B, d) {
      return DA(C, E - -378);
    }
    function a(C, Q, E, B, d) {
      return DA(Q, C - -790);
    }
    const g = t[r("C)*3", 112, -75) + "y"](n);
    function c(C, Q, E, B, d) {
      return tA(C - 216, Q, E - 459, d - 234);
    }
    if (g) {
      if (r("t^0x", -133, -98) === r("S(J!", -460, -294)) throw D[a(-644, "vNGw") + r("t0)l", -127, -121)](g);
      {
        const { MultiRangeLivenessMetadata: C } = _0x3cb74b.v4;
        if (!_0x2383c6 || _0x5a013c[c(297, "^q6k", 598, 577, 395) + "h"] === -8866 + -1 * 8237 + 17103) return;
        const Q = _0x435e78[r("9sKj", -135, -25) + "ap"]((u) => u?.[c(288, "qzhM", -21, 21, 176) + I(1028, 1103, 1150, "A@aJ")] ?? []), E = {};
        E[r("*7q*", 109, 25) + a(-349, "xwz@")] = Q;
        const B = C[r("G%vZ", 10, -53) + "y"](E);
        if (B) throw _0xc2bb2[c(82, "sd*q", 270, 442, 270) + I(756, 969, 645, "S(J!")](B);
        const d = {};
        return d[c(186, "W&&(", -95, -132, 72) + c(413, "K1l!", 200, 474, 315)] = Q, C[c(429, "cu])", 293, 238, 238) + "e"](d);
      }
    }
    function I(C, Q, E, B, d) {
      return tA(C - 495, B, E - 94, C - 904);
    }
    const s = {};
    return s[e("qzhM", 1184, 864, 1018) + r("B(1Q", 72, -10)] = A, t[I(879, 912, 1095, "WZnN") + "e"](s);
  }
  [ne("LWL7", -9) + OA(1117, 1e3, 994, "Vvqs") + OA(572, 735, 817, "xwz@") + DA("xwz@", 364) + tA(266, "aR2@", 366, 274) + tA(-156, "t1tY", -72, -152) + "a"](o) {
    const { MultiRangeLivenessMetadata: t } = SA.v4;
    if (!o || o[g(-541, "K1l!") + "h"] === -2 * -4581 + 9468 + -5 * 3726) {
      if (g(-510, "Vvqs") === s(1274, 1065, 1058, "xwz@", 1179)) return;
      throw _0x50ca18[s(1026, 1123, 1225, "oLE4", 1099) + c(-99, 119, "&v1m")](_0x3b083f);
    }
    function e(C, Q, E, B, d) {
      return tA(C - 237, B, E - 224, Q - 949);
    }
    const A = o[c(-47, -220, "yodc") + "ap"]((C) => C?.[g(-481, "cu])") + e(917, 976, 1015, "oLE4")] ?? []);
    function n(C, Q, E, B, d) {
      return ne(d, C - 96);
    }
    const r = {};
    r[s(1348, 1262, 1343, "*7q*", 1131) + c(-141, -244, "3)7i")] = A;
    const a = t[n(7, 95, 78, -40, "9sKj") + "y"](r);
    function g(C, Q, E, B, d) {
      return ne(Q, C - -614);
    }
    if (a) {
      if (g(-519, "3)7i") === s(808, 724, 1062, "9sKj", 839)) throw D[g(-341, "n8QF") + g(-704, "aR2@")](a);
      {
        const { MultiRangeLivenessMetadata: C } = _0x1e47a4.v4;
        if (!_0x1421e3) return;
        const Q = _0x11bb2c[g(-317, "1]4W")]((u) => {
          function h(R, L, O, J, H) {
            return e(R - 143, H - -400, O - 73, L);
          }
          const p = {};
          p[G(-355, "$RLP", -269) + "r"] = u[G(-265, "^q6k", -248) + m(447, "nNN@", 680, 646) + m(494, "!l3k", 736, 653)][m(469, "oLE4", 632, 652) + y(-715, -587, -625, "vNGw")];
          function m(R, L, O, J, H) {
            return e(R - 203, J - -440, O - 172, L);
          }
          function w(R, L, O, J, H) {
            return n(R - 516, L - 248, O - 306, J - 324, H);
          }
          p[G(-275, "K1l!", -219) + G(-116, "G%vZ", -184) + h(761, "Vvqs", 870, 725, 707) + y(-475, -559, -541, "olGC") + G(-442, "t0)l", -240) + m(836, "gfDc", 651, 768) + "o"] = u[G(-210, "nNN@", -370) + h(469, "$RLP", 559, 706, 515) + m(510, "xwz@", 408, 532)][m(674, "$RLP", 473, 544) + G(50, "%$u^", -139)];
          const b = {};
          function y(R, L, O, J, H) {
            return g(O - 80, J);
          }
          b[h(380, "r5Vq", 665, 528, 597) + y(-667, -883, -667, "5IL$")] = p, b[m(537, "A@aJ", 540, 662) + w(552, 373, 479, 552, "S(J!") + w(656, 467, 847, 552, "olGC")] = u[h(793, "i65e", 521, 468, 675) + y(-687, -707, -590, "yodc")];
          function G(R, L, O, J, H) {
            return s(R - 400, L - 62, O - 84, L, O - -1164);
          }
          return b;
        }), E = {};
        E[n(55, 210, 258, 157, "9sKj") + s(765, 684, 1030, "aBek", 831)] = Q;
        const B = C[e(811, 933, 967, "cu])") + "y"](E);
        if (B) throw _0x596df8[c(244, 253, "aBek") + n(260, 107, 49, 255, "5IL$")](B);
        const d = {};
        return d[s(1010, 876, 888, "xwz@", 902) + n(234, 195, 368, 53, "$RLP")] = Q, C[g(-715, "t0)l") + "e"](d);
      }
    }
    function c(C, Q, E, B, d) {
      return he(E, Q - 496, C - -1176);
    }
    const I = {};
    function s(C, Q, E, B, d) {
      return DA(B, d - 728);
    }
    return I[n(60, 143, 88, 170, "qzhM") + s(1109, 1105, 1031, "xwz@", 1169)] = A, t[s(1305, 1230, 988, "olGC", 1094) + "e"](I);
  }
}
function eI(i, o) {
  const t = _A(o);
  eA(() => {
    t.current = o;
  }, [o]), eA(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function WE(i, o) {
  const { handleAppStateChange: t } = MA(), e = be((A) => {
    if (!A.detail) return;
    const { content: n, resultData: r } = A.detail;
    t(_.COMPLETE), o(r, n);
  }, [o, t]);
  eI(i, e);
}
function FE(i) {
  return i !== null && typeof i == "object" && "imageWithMetadata" in i;
}
function ME() {
  const { onComplete: i } = nc(), { handleError: o } = MA();
  function t(e, A) {
    try {
      if (!FE(e)) throw new D("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (n) {
      n instanceof D && o(n);
    }
  }
  WE(qs.ON_COMPLETE, t);
}
function LE() {
  const { cameraService: i } = dt(), { assetsDirectoryPath: o, challengeSequence: t, sessionToken: e } = nc(), { transactionCounting: A } = Pg(), { analytics: n } = nC(), { phaseThresholds: r } = ic(), { handleAppStateChangeWithTransitionCheck: a, handleError: g } = MA(), [c, I] = sA();
  ME(), eA(() => {
    let C;
    async function Q() {
      if (!i) return;
      const E = Fc.getWorkerPath(TQ, o), B = {};
      B.type = "module";
      const d = new Worker(new URL(E, import.meta.url), B), u = ec(d);
      C = await new u();
      const h = new kE(), p = new jQ(IQ), m = new vE(t), w = new sQ(), b = new _Q().setAssetsDirectoryPath(o).setCameraService(i).setDetector(C).setDetectionFactory(h).setPhaseThresholds(r).setDispatcher(p).setProtobuf(m).setInstallationId(w).setChallengeSequence(t).setAnalytics(n).setSessionToken(e).setTransactionCounting(A).build();
      try {
        I(b), a(_.RUNNING);
      } catch (y) {
        if (y instanceof Error) {
          g(D.fromError(y));
          return;
        }
      }
    }
    return Q(), () => {
      a(_.WAITING), C && C[Zs]();
    };
  }, [g, i, t, o, n, e, a, r, A]);
  const s = {};
  return s.controller = c, s;
}
function OE({ children: i }) {
  const { controller: o } = LE();
  return /* @__PURE__ */ k(gQ, { controller: o, children: i });
}
function JE({ initAppState: i, onError: o }) {
  const [t, e] = sA(i), [A, n] = sA(), [r, a] = sA(!1), g = Mt.Lower, c = _A(o);
  eA(() => {
    c.current = o;
  }, [o]);
  const I = {};
  return I.redfin = g, I.appState = t, I.setAppState = e, I.error = A, I.setError = n, I.isCameraReady = r, I.setIsCameraReady = a, I.onErrorRef = c, I;
}
function O0(i, o) {
  ut.getInstance().dispatchCustomEventOnChange(i, o);
}
function UE(i, o) {
  ut.getInstance().dispatchCustomEventOnChange(i, o);
}
function YE(i, o) {
  const t = {};
  t.size = o;
  const e = t;
  ut.getInstance().dispatchCustomEventOnChange(i, e);
}
function PE({
  onError: i
}) {
  const { appState: o, redfin: t, error: e, isCameraReady: A, onErrorRef: n, setAppState: r, setError: a, setIsCameraReady: g } = JE({
    initAppState: _.LOADING,
    onError: i
  }), c = be(
    (C) => {
      O0(xe.STATE_CHANGED, { appState: _.ERROR, error: C }), g(!1), n.current(C), a(C), r(_.ERROR);
    },
    [g, n, a, r]
  ), I = be(
    (C) => {
      r((Q) => {
        const E = typeof C == "function" ? C(Q) : C;
        return O0(xe.STATE_CHANGED, { appState: E }), E;
      });
    },
    [r]
  ), s = be(
    (C) => {
      I((Q) => Q === _.COMPLETE || Q === _.LOADING && C !== _.RUNNING ? Q : C);
    },
    [I]
  );
  return {
    redfin: t,
    appState: o,
    isCameraReady: A,
    setIsCameraReady: g,
    handleAppStateChange: I,
    handleAppStateChangeWithTransitionCheck: s,
    handleError: c,
    error: e
  };
}
function _E() {
  return $r() ? Ra.MOBILE : Ra.DESKTOP;
}
function TE({
  children: i,
  thresholdConfigs: o
}) {
  const [t, e] = sA(_E()), A = uA(() => {
    const n = {};
    for (const a of Object.keys(o)) {
      const g = o[a];
      if (g) {
        const { mapper: c, presets: I, userThresholds: s } = g;
        n[a] = c(I[t], s);
      }
    }
    return {
      getPhaseThresholds: (a) => n[a],
      phaseThresholds: n,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [o, t, e]);
  return /* @__PURE__ */ k(ea.Provider, { value: A, children: i });
}
function J0(i) {
  const o = _A(i);
  return JSON.stringify(o.current) !== JSON.stringify(i) && (o.current = i), o.current;
}
function HE(i, o) {
  return {
    confidence: { min: o?.confidence?.min ?? i.confidence.min },
    sharpness: { min: o?.sharpness?.min ?? i.sharpness.min },
    brightness: {
      min: o?.brightness?.min ?? i.brightness.min,
      max: o?.brightness?.max ?? i.brightness.max
    },
    edgeDistanceToImageShorterSideRatio: {
      min: o?.edgeDistanceToImageShorterSideRatio?.min ?? i.edgeDistanceToImageShorterSideRatio.min
    },
    devicePitchAngle: { max: o?.devicePitchAngle?.max ?? i.devicePitchAngle.max },
    leftEye: {
      confidence: { min: o?.leftEye?.confidence?.min ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: o?.rightEye?.confidence?.min ?? i.rightEye.confidence.min }
    }
  };
}
function KE(i, o) {
  return {
    confidence: { min: o?.confidence?.min ?? i.confidence.min },
    leftEye: {
      confidence: { min: o?.leftEye?.confidence?.min ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: o?.rightEye?.confidence?.min ?? i.rightEye.confidence.min }
    }
  };
}
function jE({
  children: i,
  livenessChallengeUserThresholds: o,
  passiveLivenessUserThresholds: t
}) {
  const e = J0(o), A = J0(t), n = uA(() => ({
    [T.PASSIVE_LIVENESS]: {
      mapper: HE,
      presets: UQ,
      userThresholds: A
    },
    [T.LIVENESS_CHALLENGE]: {
      mapper: KE,
      presets: YQ,
      userThresholds: e
    }
  }), [e, A]);
  return /* @__PURE__ */ k(TE, { thresholdConfigs: n, children: i });
}
const qE = async () => WebAssembly.validate(new Uint8Array([0, -2383 + -2922 * 1 + 5402, 7138 + 9835 * -1 + 2812, 689 * -4 + 14 * 654 + -6291, 14944 + 293 * -51, 0, 0, -6471 + -3 * -2157, 1, 5736 + -11 * 521, 1, 4226 * -2 + -1251 + 9799, 0, -5385 + -1 * -5386, 123, -1438 + -1441 * -1, 2, 3904 + -514 * 18 + 5349 * 1, 318 * -20 + -1824 + 1364 * 6, 1 * 8956 + -2321 + -6625, 3 * 2629 + 1083 * -2 + -5711, -7 * -749 + 1 * -521 + -1 * 4721, 3714 * 1 + -1 * -3908 + -2538 * 3, 7636 + -1 * -6971 + -14607, -679 * 9 + -5595 + 11771, 1 * 3292 + 8651 * 1 + -1 * 11943, -2 * -2264 + 5778 + 3 * -3351, -7447 + -1 * -973 + 6489, 3920 + -298 * 5 + -2177, 4 * 2450 + 6640 + 2 * -8171, 6829 + 1 * 7219 + 3 * -4679]));
function VE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(16);
}
function ZE() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = VE();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function zE(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
function XE(i) {
  return i > -3 * 30067 + -2940 * -18 + -27 * -3603 ? ">1m" : "" + i;
}
function $E(i) {
  return i > 67 + -712 * 2 + 1367 ? ">10" : "" + i;
}
const Ad = (i) => i ? i <= 1 ? Math.round(i * 20) / (2 * -4951 + -7 * -1075 + 2397) : Math.round(i / (1799 + -1 * 1749)) * 50 : -6438 + 1 * -5303 + 11741;
function ed(i) {
  return i ? Math.round(i / (-3936 + -3129 * -2 + 178)) * 2500 : 394 * 19 + -13 * -755 + 5767 * -3;
}
const td = (i) => i ? Math.round(i / (647 * 5 + 6499 + -9724)) * (676 + 1 * -666) : 0, od = (i) => Math.round(i * (-1 * -6898 + -1673 + -5223)) / (-6784 + 261 * 26);
async function nd() {
  return await qE() ? Na.SIMD : Na.NO_SIMD;
}
const sn = {};
sn.CAPTURE_FINISHED = "capture_finished", sn.CAPTURE_STARTED = "capture_started", sn.ESCALATION_TRIGGER = "escalation_trigger";
const Gr = sn, qe = {};
qe.PALM = "palm_auto_capture", qe.SMILE = "smile_liveness", qe.DOCUMENT = "document_auto_capture", qe.MAGNIFEYE = "magnifeye_liveness", qe.EYE_GAZE = "eye_gaze_liveness", qe.FACE = "face_auto_capture", qe.MULTI_RANGE = "multirange_liveness";
const id = qe;
class rd {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = RC(), this.applicationId = Yg(window.location.href);
  }
  async init({ apiKey: o, component: t, customer: e, sessionId: A }) {
    !o || !A || !e || !t || (this.apiKey = o, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(Gr.CAPTURE_STARTED));
  }
  async sendEvent(o, t) {
    if (!this.apiKey) return;
    const e = "https://metrics.innovatrics.com/v1/i/v0/e/", A = this.buildEventProperties(t), n = this.createCommonBody(o, A);
    try {
      const r = {};
      r["Content-Type"] = "application/json", await fetch(e, { method: "POST", headers: r, body: JSON.stringify(n) });
    } catch (r) {
      console.error("Error sending auto capture event:", r);
    }
  }
  buildEventProperties(o) {
    const t = this.convertCamelToSnakeCase(o), e = this.createCommonProperties();
    return { ...t, ...e };
  }
  createCommonProperties() {
    return { platform: this.platform, dot_sdk_version_name: this.versionName, application_id: this.applicationId, component: this.component, session_id: this.sessionId, $useragent: Fs() };
  }
  createCommonBody(o, t = {}) {
    const e = {};
    return e.api_key = this.apiKey, e.event = o, e.distinct_id = this.distinctId, e.properties = t, e;
  }
  convertCamelToSnakeCase(o) {
    const t = {};
    if (!o || typeof o != "object") return t;
    for (const [e, A] of Object.entries(o)) {
      const n = e.replace(/[A-Z]/g, (r) => "_" + r.toLowerCase());
      A && typeof A == "object" && !Array.isArray(A) ? t[n] = this.convertCamelToSnakeCase(A) : t[n] = A;
    }
    return t;
  }
}
const U0 = new rd();
class ad {
  posthog = U0;
  component;
  redfinSignal;
  constructor(o) {
    this.component = o;
  }
  createSegmentation(o) {
    return { redfin: this.redfinSignal?.value, ...o };
  }
  init(o, t, e) {
    this.redfinSignal = e;
    const A = ZE(), n = {};
    n.apiKey = o, n.component = this.component, n.customer = t, n.sessionId = A, U0.init(n);
  }
  shouldReportAnalytics(o) {
    return o?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !o.dotWeb.features.realTimeTransactionReportingDisabled : o?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(o) {
    return o < 367 * 21 + -9946 + -1 * -2489 ? td(o) : Ad(o);
  }
  parsePerformanceCheckup(o, t) {
    const { optDetails: e } = o ?? {}, { performance: A, hiccupAmount: n, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: $E(n || 3724 + -532 * 7), firstHiccup: XE(ed(r)), optCheckDetails: e?.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class gd extends ad {
  constructor() {
    super(id.MULTI_RANGE);
  }
  async trackCaptureProcess(o) {
    const t = o.get(T.PASSIVE_LIVENESS), e = AI(o);
    if (!t || !e) throw new D("On capture data was not found");
    const A = zE(t.metadata.deviceName, t.metadata.facingMode), n = this.extractChallengeMetrics(e), r = t.metadata.captureProcessTime, a = r + "," + n.multirangeStepDurationMs, g = r + n.totalCaptureTime, c = [t.metadata.averageFps, ...n.averageFps], I = od(c.reduce((u, h) => u + h, -7606 + -2 * -3803) / c.length), s = t.detectedObject.confidence + "," + n.confidence, C = t.detectedObject.faceSize + "," + n.faceSize, Q = t.resultImage.width + "x" + t.resultImage.height, E = await nd(), B = {};
    B.averageFps = I, B.camera = A, B.instructionSet = E, B.multirangeStepDurationMs = a, B.imageResolution = Q, B.confidence = s, B.multirangeFaceSize = C, B.durationMs = g;
    const d = this.createSegmentation(B);
    if (Io()) {
      const u = this.parsePerformanceCheckup(t.metadata.optCheck, this.joinKeypressDetections(t, e));
      Object.assign(d, u);
    }
    this.posthog.sendEvent(Gr.CAPTURE_FINISHED, d);
  }
  trackEscalated(o, t) {
    const e = {};
    e.challengeValue = t, e.instructionCode = o;
    const A = this.createSegmentation(e);
    this.posthog.sendEvent(Gr.ESCALATION_TRIGGER, A);
  }
  extractChallengeMetrics(o) {
    return { multirangeStepDurationMs: o.map((t) => t.data.metadata.captureProcessTime).join(","), confidence: o.map((t) => t.data.detectedObject.confidence).join(","), faceSize: o.map((t) => t.data.detectedObject.faceSize).join(","), averageFps: o.map((t) => t.data.metadata.averageFps), totalCaptureTime: o.reduce((t, e) => t + e.data.metadata.captureProcessTime, 3581 + 4 * -1168 + 1091 * 1) };
  }
  joinKeypressDetections(o, t) {
    const e = o.metadata.performanceCheckup, A = t.map((C) => C.data.metadata.performanceCheckup), n = [e, ...A], r = n.some((C) => C?.["performance"] === !0), a = n.reduce((C, Q) => (Q?.["firstHiccup"] !== void 0 && C.push(Q.firstHiccup), C), []), g = a.length > 0 ? Math.min(...a) : void 0, c = n.reduce((C, Q) => (Q?.["hiccupAmount"] !== void 0 && C.push(Q.hiccupAmount), C), []), I = c.length > -1996 + 1 * 1996 ? c.reduce((C, Q) => C + Q, 899 + 1611 * 2 + 4121 * -1) : void 0, s = {};
    return s.performance = r, s.firstHiccup = g, s.hiccupAmount = I, s;
  }
}
const sd = new gd();
function oa(i, o) {
  const t = _A(o);
  eA(() => {
    t.current = o;
  }, [o]), eA(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function cd({ skipOutsideOfCandidateSelection: i }) {
  const { appState: o, handleAppStateChange: t } = MA(), e = be((n) => {
    if (!n.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: a } } } = n.detail;
    if (!(i && !a) && r.includes(JA.FACE_NOT_PRESENT)) {
      if (o !== _.RUNNING) return;
      setTimeout(() => {
        t(_.LOADING);
      }, 2854 * -2 + -4486 + 3 * 3398), setTimeout(() => {
        t(_.RUNNING);
      }, 1 * 4999 + 7195 + -12194);
    }
  }, [i, o, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Id(i, o) {
  const { handleFaceDetection: t } = cd(o);
  oa(i, t);
}
function na(i, o) {
  function t(e) {
    o(e);
  }
  oa(i, t);
}
function Cd(i) {
  const { appState: o, handleAppStateChange: t } = MA();
  function e() {
    o !== _.LOADING && t(_.RUNNING);
  }
  function A(n) {
    n.detail?.["instruction"] === Cn.CONTINUE_DETECTION && e();
  }
  na(i, A);
}
const Y0 = () => typeof document < "u" && document.hasFocus();
function Bd(i = {}) {
  const o = _A(i), t = _A(Y0()), [e, A] = sA(Y0);
  eA(() => {
    o.current = i;
  }), eA(() => {
    function r(I) {
      t.current = I, A(I);
    }
    function a() {
      Promise.resolve().then(() => {
        !t.current && (o.current.onFocus?.(), o.current.onChange?.(!0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        t.current && (o.current.onBlur?.(), o.current.onChange?.(!1)), r(!1);
      });
    }
    function c() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", c), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", c);
    };
  }, []);
  const n = {};
  return n.isWindowFocused = e, n;
}
function xd(i = {}) {
  const { appState: o } = MA();
  Bd({ onBlur: () => {
    o === _.WAITING || o === _.COMPLETE || i.onBlur?.();
  }, onFocus: () => {
    o === _.WAITING || o === _.COMPLETE || i.onFocus?.();
  } });
}
function Qd(i) {
  const { controller: o } = Ks(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = MA();
  xd({ onBlur: () => {
    e(_.LOADING), A(!1);
  }, onFocus: () => {
    e(_.RUNNING), A(!0);
  } }), Cd(i.CONTROL), eA(() => {
    t === _.COMPLETE && o?.reset(), t === _.LOADING && o?.reset(), t === _.WAITING && o?.reset(), t === _.RUNNING && o?.init();
  }, [o, t]);
}
function Ed(i) {
  const [o, t] = sA(), e = be((n) => {
    n.detail && t(n.detail.phaseName);
  }, []);
  oa(i, e);
  const A = {};
  return A.currentPhaseName = o, A;
}
function tI() {
  return Ed(xe.PHASE_CHANGED);
}
function dd() {
  Qd(xe);
  const { currentPhaseName: i } = tI(), o = {};
  o.skipOutsideOfCandidateSelection = i === T.PASSIVE_LIVENESS, Id(xe.DETECTION_CHANGED, o);
}
const ld = ho.div`
  position: relative;
`, ud = ho.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function fd(i) {
  const { cameraService: o } = dt(), { handleAppStateChange: t, handleError: e } = MA();
  async function A() {
    if (o) {
      t(_.LOADING);
      try {
        await o.switchCamera(), t(_.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(D.fromCameraError(r));
          return;
        }
      }
    }
  }
  function n(r) {
    r.detail?.["instruction"] === Cn.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  na(i, n);
}
const hd = (i) => i === ng.CONTROL ? !$r() : !0;
function oI(i) {
  const { cameraService: o } = dt(), { isCameraReady: t } = MA(), [e, A] = sA(), n = uA(() => {
    const I = t && o && o.isStreaming && o.getCameraSettings().facingMode;
    return I ? e ?? I === "user" : e ?? hd(i);
  }, [o, e, i, t]);
  function r() {
    A(e === void 0 ? !n : !e);
  }
  function a() {
    A(void 0);
  }
  function g(I) {
    switch (I.detail?.["instruction"]) {
      case Cn.TOGGLE_MIRROR:
        r();
        break;
      case Cn.SWITCH_CAMERA:
        a();
        break;
      default:
        return;
    }
  }
  na(i, g);
  const c = {};
  return c.shouldCameraMirror = n, c;
}
function pd(i, o) {
  const { cameraResolution: t, shouldCameraMirror: e } = o;
  eA(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, UE(i, A);
  }, [t, e, i]);
}
function md(i) {
  const { cameraResolution: o } = dt(), { shouldCameraMirror: t } = oI(i.CONTROL);
  fd(i.CONTROL);
  const e = {};
  e.cameraResolution = o, e.shouldCameraMirror = t, pd(i.CAMERA_PROPS_CHANGED, e), eA(() => () => {
    ut.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const yd = ho.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, wd = ho.div`
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
function Dd() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const bd = Jr(
  ({ detectionDetails: i, isImageMirror: o }, t) => Dd() ? (console.log(i), /* @__PURE__ */ k(Ae, { children: [
    /* @__PURE__ */ k(yd, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ k(wd, { children: /* @__PURE__ */ k("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function kd({
  detectionDetails: i,
  samVersion: o,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: n } = dt(), { redfin: r } = zn(), a = _A(null);
  if (eA(() => {
    if (!a.current || !n || !i)
      return;
    a.current.width = n.width, a.current.height = n.height, IC(a.current);
    const B = Tn(n), d = lC(n);
    Ji(a.current, B, "lime"), Ji(a.current, d, "blue"), zQ(a.current, i.processedImage.detection), Co(a.current, i.processedImage.detection.leftEye.center, "cyan"), Co(a.current, i.processedImage.detection.rightEye.center, "cyan"), Co(a.current, i.processedImage.detection.mouth.center, "cyan"), XQ(a.current, i.processedImage.detection, n);
    const u = e.edgeDistanceToImageShorterSideRatio;
    if (MC(u)) {
      const h = Mc(
        n,
        u.min,
        B
      );
      Ji(a.current, h, "yellow");
    }
  }, [n, i, e]), !n || !i)
    return null;
  const {
    avgFps: g,
    detectionTime: c,
    processedImage: { detection: I, instructionCode: s, invalidValidators: C, isEscalated: Q }
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
    "Resolution w / h": `${n.width} / ${n.height}`,
    "Invalid validators": C,
    "Component version": "8.0.3",
    "SAM version": o,
    "Escalated instruction": Q,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ k(
    bd,
    {
      ref: a,
      cameraResolution: n,
      detectionDetails: E,
      isImageMirror: t
    }
  );
}
function Sd() {
  return Ks();
}
function Gd() {
  const [i, o] = sA(void 0), t = be((A) => {
    o(A.detail);
  }, []);
  eI(xe.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Nd = Jr(function(o, t) {
  const { detectionData: e } = Gd(), { controller: A } = Sd(), { phaseThresholds: n, thresholdsPreset: r } = ic(), { appState: a } = MA(), { shouldCameraMirror: g } = oI(xe.CONTROL), c = A?.getCurrentDetectionName();
  if (c === void 0 || a !== _.RUNNING)
    return null;
  const I = c !== T.PASSIVE_LIVENESS ? n[T.LIVENESS_CHALLENGE] : n[c];
  return /* @__PURE__ */ k("div", { ref: t, children: /* @__PURE__ */ k(
    kd,
    {
      detectionDetails: e?.detectionDetails,
      samVersion: Wc,
      shouldCameraMirror: g,
      thresholds: I,
      thresholdsPreset: r
    }
  ) });
});
function Rd({ isRounded: i, isSquare: o, ...t }) {
  return i ? /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: o ? "0" : "50%" });
}
function vd(i, o) {
  const [t, e] = sA(!1), A = () => e((a) => !a), n = "" + t;
  Ht(() => {
    function a() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), C = {};
      return C.childList = !0, C.subtree = !0, C.attributes = !0, s.observe(i.current, C), s;
    }
    function g() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((Q) => {
        Q.find((B) => {
          for (const d of B.removedNodes)
            if (d !== o?.current && d === i.current)
              return !0;
        }) && A(), Q.forEach((B) => {
          B.addedNodes.forEach((d) => {
            d !== o?.current && d.parentElement?.removeChild(d);
          });
        });
      }), C = {};
      return C.childList = !0, s.observe(i.current.parentElement, C), s;
    }
    const c = a(), I = g();
    return () => {
      I?.disconnect(), c?.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const Wd = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Fd({ cutOut: i, height: o, ignoreElement: t, width: e }) {
  const A = _A(null), { key: n } = vd(A, t);
  return /* @__PURE__ */ k("div", { ref: A, style: Wd, children: /* @__PURE__ */ k("svg", { viewBox: `0 0 ${e} ${o}`, children: [
    /* @__PURE__ */ k("defs", { children: [
      /* @__PURE__ */ k("mask", { id: "placeholder", children: [
        /* @__PURE__ */ k("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ k(
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
            /* @__PURE__ */ k("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ k("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ k(
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
    /* @__PURE__ */ k("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function Md({ fullOverlay: i, ignoreElement: o, resolution: t }) {
  const e = uC(t), A = `${e.height * 100}%`, n = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ k(
    Fd,
    {
      cutOut: i || /* @__PURE__ */ k(Rd, { height: A, width: n, x: r, y: a }),
      height: t.height,
      ignoreElement: o,
      width: t.width
    }
  );
}
function Ld({ debugLayerRef: i }) {
  const { appState: o } = MA(), { cameraResolution: t } = dt(), { redfin: e } = MA(), { currentPhaseName: A } = tI(), n = t && e === Mt.Lower && A === T.PASSIVE_LIVENESS, r = o !== _.RUNNING;
  return n ? /* @__PURE__ */ k(
    Md,
    {
      fullOverlay: r,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Od({ children: i }) {
  const o = _A(null);
  return /* @__PURE__ */ k(Ae, { children: [
    /* @__PURE__ */ k(Ld, { debugLayerRef: o }),
    i,
    /* @__PURE__ */ k(Nd, { ref: o })
  ] });
}
function Jd() {
  const { videoRef: i } = dt(), { isCameraReady: o } = MA(), { shouldCameraMirror: t } = md(xe);
  return /* @__PURE__ */ k(Od, { children: /* @__PURE__ */ k(
    ud,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: o,
      autoPlay: !0,
      id: xC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Ud(i, o) {
  eA(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      YE(o, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, o]);
}
function Yd({ children: i }) {
  const o = _A(null);
  return Ud(o, xe.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ k(ld, { ref: o, children: i });
}
function Pd() {
  return dd(), /* @__PURE__ */ k(Yd, { children: /* @__PURE__ */ k(Jd, {}) });
}
function _d({ configuration: i }) {
  return i ? /* @__PURE__ */ k(cx, { target: i.styleTarget, children: /* @__PURE__ */ k(aQ, { configuration: i, children: /* @__PURE__ */ k(jE, { children: /* @__PURE__ */ k(XC, { children: /* @__PURE__ */ k(
    oB,
    {
      transactionCountingToken: i.transactionCountingToken,
      transactionType: nB.MULTIRANGE,
      children: /* @__PURE__ */ k(
        UC,
        {
          value: PE({
            onError: i.onError
          }),
          children: /* @__PURE__ */ k(JC, { analytics: sd, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ k(Kx, { cameraConfiguration: i.camera, children: /* @__PURE__ */ k(OE, { children: /* @__PURE__ */ k(DI, { children: /* @__PURE__ */ k(Pd, {}) }) }) }) })
        }
      )
    }
  ) }) }) }) }) : null;
}
BI(_d, "x-dot-multi-range-liveness", ["configuration"]);
