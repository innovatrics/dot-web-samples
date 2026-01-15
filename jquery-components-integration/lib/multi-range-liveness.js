var to, F, Qg, ze, Mr, Eg, xg, dg, gr, hi, pi, lg, Xt = {}, ug = [], EI = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oo = Array.isArray;
function ue(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function sr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function OA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3409 * 1 + -307 * 8 + -950 ? to.call(arguments, 3 * 2950 + 4 * 380 + -10368) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] === void 0 && (r[o] = i.defaultProps[o]);
  return jt(i, r, e, A, null);
}
function jt(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++Qg, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && F.vnode != null && F.vnode(r), r;
}
function xI() {
  var i = {};
  return i.current = null, i;
}
function ne(i) {
  return i.children;
}
function se(i, n) {
  this.props = i, this.context = n;
}
function ft(i, n) {
  if (n == null) return i.__ ? ft(i.__, i.__i + 1) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? ft(i) : null;
}
function fg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 0; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return fg(i);
  }
}
function mi(i) {
  (!i.__d && (i.__d = !0) && ze.push(i) && !Ko.__r++ || Mr != F.debounceRendering) && ((Mr = F.debounceRendering) || Eg)(Ko);
}
function Ko() {
  for (var i, n, t, e, A, o, r, g = 1; ze.length; ) ze.length > g && ze.sort(xg), i = ze.shift(), g = ze.length, i.__d && (t = void 0, e = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = ue({}, e)).__v = e.__v + (2 * -1733 + 7651 + -4184), F.vnode && F.vnode(t), Ir(n.__P, t, e, n.__n, n.__P.namespaceURI, 32 & e.__u ? [A] : null, o, A ?? ft(e), !!(32 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, mg(o, t, r), e.__e = e.__ = null, t.__e != A && fg(t)));
  Ko.__r = -1973 * 1 + -4790 + -1 * -6763;
}
function hg(i, n, t, e, A, o, r, g, a, I, c) {
  var s, C, E, x, Q, d, f, h = e && e.__k || ug, p = n.length;
  for (a = dI(t, n, h, a, p), s = -188 + -4409 * -2 + -5 * 1726; s < p; s++) (E = t.__k[s]) != null && (C = E.__i == -1 ? Xt : h[E.__i] || Xt, E.__i = s, d = Ir(i, E, C, A, o, r, g, a, I, c), x = E.__e, E.ref && C.ref != E.ref && (C.ref && cr(C.ref, null, E), c.push(E.ref, E.__c || x, E)), Q == null && x != null && (Q = x), (f = !!(6815 + 3457 * -1 + -559 * 6 & E.__u)) || C.__k === E.__k ? a = pg(E, a, i, f) : typeof E.type == "function" && d !== void 0 ? a = d : x && (a = x.nextSibling), E.__u &= -7);
  return t.__e = Q, a;
}
function dI(i, n, t, e, A) {
  var o, r, g, a, I, c = t.length, s = c, C = 3 * 1198 + -5618 + 2024;
  for (i.__k = new Array(A), o = -1 * -2713 + 100 + -2813; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = i.__k[o] = jt(null, r, null, null, null) : oo(r) ? r = i.__k[o] = jt(ne, { children: r }, null, null, null) : r.constructor == null && r.__b > -2 * -4041 + -2959 + -5123 ? r = i.__k[o] = jt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : i.__k[o] = r, a = o + C, r.__ = i, r.__b = i.__b + (4101 + -7867 * 1 + -1 * -3767), g = null, (I = r.__i = lI(r, t, a, s)) != -1 && (s--, (g = t[I]) && (g.__u |= 854 * -6 + 1888 + 3238)), g == null || g.__v == null ? (I == -1 && (A > c ? C-- : A < c && C++), typeof r.type != "function" && (r.__u |= 4)) : I != a && (I == a - (4953 + 1 * 8193 + -13145) ? C-- : I == a + 1 ? C++ : (I > a ? C-- : C++, r.__u |= 4))) : i.__k[o] = null;
  if (s)
    for (o = -1 * 6167 + -966 + -7133 * -1; o < c; o++) (g = t[o]) != null && (2 & g.__u) == 0 && (g.__e == e && (e = ft(g)), Dg(g, g));
  return e;
}
function pg(i, n, t, e) {
  var A, o;
  if (typeof i.type == "function") {
    for (A = i.__k, o = 0; A && o < A.length; o++) A[o] && (A[o].__ = i, n = pg(A[o], n, t, e));
    return n;
  }
  i.__e != n && (e && (n && i.type && !n.parentNode && (n = ft(i)), t.insertBefore(i.__e, n || null)), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 3721 + 6 * 1619 + 29 * -463 == n.nodeType);
  return n;
}
function Re(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (oo(i) ? i.some(function(t) {
    Re(t, n);
  }) : n.push(i)), n;
}
function lI(i, n, t, e) {
  var A, o, r, g = i.key, a = i.type, I = n[t], c = I != null && -6033 + -1 * 3922 + 9955 == (2 * -593 + 9489 + -3 * 2767 & I.__u);
  if (I === null && g == null || c && g == I.key && a == I.type) return t;
  if (e > (c ? -2824 + -5 * -565 : 0)) {
    for (A = t - (-8889 + -7 * -1270), o = t + 1; A >= 4262 * 1 + -2899 * 2 + 1536 || o < n.length; ) if ((I = n[r = A >= 0 ? A-- : o++]) != null && (-12695 + -12697 * -1 & I.__u) == 0 && g == I.key && a == I.type) return r;
  }
  return -1;
}
function Lr(i, n, t) {
  n[6356 + 7606 * -1 + 1250] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || EI.test(n) ? t : t + "px";
}
function so(i, n, t, e, A) {
  var o, r;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Lr(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Lr(i.style, n, t[n]);
    }
  else if (n[6107 * -1 + 5 * 1799 + -2888] == "o" && n[5881 + -1663 * -6 + -1762 * 9] == "n") o = n != (n = n.replace(dg, "$1")), r = n.toLowerCase(), n = r in i || n == "onFocusOut" || n == "onFocusIn" ? r.slice(-1 * 1107 + 3040 + -1931) : n.slice(250 + -4 * 1759 + 6788), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = gr, i.addEventListener(n, o ? pi : hi, o)) : i.removeEventListener(n, o ? pi : hi, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[4] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && 3784 + 291 * -13 == t ? "" : t));
  }
}
function Or(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = gr++;
      else if (n.t < t.u) return;
      return t(F.event ? F.event(n) : n);
    }
  };
}
function Ir(i, n, t, e, A, o, r, g, a, I) {
  var c, s, C, E, x, Q, d, f, h, p, k, b, m, w, R, M, uA, L = n.type;
  if (n.constructor != null) return null;
  -1517 * 4 + 3 * -2909 + 14923 * 1 & t.__u && (a = !!(32 & t.__u), o = [g = n.__e = t.__e]), (c = F.__b) && c(n);
  A: if (typeof L == "function") try {
    if (f = n.props, h = "prototype" in L && L.prototype.render, p = (c = L.contextType) && e[c.__c], k = c ? p ? p.props.value : c.__ : e, t.__c ? d = (s = n.__c = t.__c).__ = s.__E : (h ? n.__c = s = new L(f, k) : (n.__c = s = new se(f, k), s.constructor = L, s.render = fI), p && p.sub(s), s.state || (s.state = {}), s.__n = e, C = s.__d = !(5224 + 4153 * -2 + 3082), s.__h = [], s._sb = []), h && s.__s == null && (s.__s = s.state), h && L.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ue({}, s.__s)), ue(s.__s, L.getDerivedStateFromProps(f, s.__s))), E = s.props, x = s.state, s.__v = n, C) h && L.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), h && s.componentDidMount != null && s.__h.push(s.componentDidMount);
    else {
      if (h && L.getDerivedStateFromProps == null && f !== E && s.componentWillReceiveProps != null && s.componentWillReceiveProps(f, k), n.__v == t.__v || !s.__e && s.shouldComponentUpdate != null && !(-7112 + -458 * -8 + 3449) === s.shouldComponentUpdate(f, s.__s, k)) {
        for (n.__v != t.__v && (s.props = f, s.state = s.__s, s.__d = !(675 * 1 + -5842 + 16 * 323)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(Z) {
          Z && (Z.__ = n);
        }), b = 0; b < s._sb.length; b++) s.__h.push(s._sb[b]);
        s._sb = [], s.__h.length && r.push(s);
        break A;
      }
      s.componentWillUpdate != null && s.componentWillUpdate(f, s.__s, k), h && s.componentDidUpdate != null && s.__h.push(function() {
        s.componentDidUpdate(E, x, Q);
      });
    }
    if (s.context = k, s.props = f, s.__P = i, s.__e = !1, m = F.__r, w = 5349 + -5349 * 1, h) {
      for (s.state = s.__s, s.__d = !(7 * -1403 + 725 + -1 * -9097), m && m(n), c = s.render(s.props, s.state, s.context), R = 0; R < s._sb.length; R++) s.__h.push(s._sb[R]);
      s._sb = [];
    } else do
      s.__d = !(9266 + 1934 * 3 + -15067), m && m(n), c = s.render(s.props, s.state, s.context), s.state = s.__s;
    while (s.__d && ++w < 8137 + -2 * 4056);
    s.state = s.__s, s.getChildContext != null && (e = ue(ue({}, e), s.getChildContext())), h && !C && s.getSnapshotBeforeUpdate != null && (Q = s.getSnapshotBeforeUpdate(E, x)), M = c, c != null && c.type === ne && c.key == null && (M = yg(c.props.children)), g = hg(i, oo(M) ? M : [M], n, t, e, A, o, r, g, a, I), s.base = n.__e, n.__u &= -(-3412 * 1 + -509 + 4082), s.__h.length && r.push(s), d && (s.__E = s.__ = null);
  } catch (Z) {
    if (n.__v = null, a || o != null)
      if (Z.then) {
        for (n.__u |= a ? 1314 * -6 + 1 * 3937 + 4107 : 128; g && 1 * -5987 + 1 * -7615 + 13610 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else {
        for (uA = o.length; uA--; ) sr(o[uA]);
        yi(n);
      }
    else n.__e = t.__e, n.__k = t.__k, Z.then || yi(n);
    F.__e(Z, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = uI(t.__e, n, t, e, A, o, r, a, I);
  return (c = F.diffed) && c(n), -16 * -502 + 4659 + -1 * 12563 & n.__u ? void 0 : g;
}
function yi(i) {
  i && i.__c && (i.__c.__e = !0), i && i.__k && i.__k.forEach(yi);
}
function mg(i, n, t) {
  for (var e = 1268 + 4 * -317; e < t.length; e++) cr(t[e], t[++e], t[++e]);
  F.__c && F.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      F.__e(o, A.__v);
    }
  });
}
function yg(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -9391 + -6581 * 1 + 15972 ? i : oo(i) ? i.map(yg) : ue({}, i);
}
function uI(i, n, t, e, A, o, r, g, a) {
  var I, c, s, C, E, x, Q, d = t.props || Xt, f = n.props, h = n.type;
  if (h == "svg" ? A = "http://www.w3.org/2000/svg" : h == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (I = -1 * 1419 + -8491 + 9910 * 1; I < o.length; I++) if ((E = o[I]) && "setAttribute" in E == !!h && (h ? E.localName == h : E.nodeType == 3)) {
      i = E, o[I] = null;
      break;
    }
  }
  if (i == null) {
    if (h == null) return document.createTextNode(f);
    i = document.createElementNS(A, h, f.is && f), g && (F.__m && F.__m(n, o), g = !1), o = null;
  }
  if (h == null) d === f || g && i.data == f || (i.data = f);
  else {
    if (o = o && to.call(i.childNodes), !g && o != null)
      for (d = {}, I = 2 * 3373 + -6891 + 145; I < i.attributes.length; I++) d[(E = i.attributes[I]).name] = E.value;
    for (I in d) if (E = d[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") s = E;
      else if (!(I in f)) {
        if (I == "value" && "defaultValue" in f || I == "checked" && "defaultChecked" in f) continue;
        so(i, I, null, E, A);
      }
    }
    for (I in f) E = f[I], I == "children" ? C = E : I == "dangerouslySetInnerHTML" ? c = E : I == "value" ? x = E : I == "checked" ? Q = E : g && typeof E != "function" || d[I] === E || so(i, I, E, d[I], A);
    if (c) g || s && (c.__html == s.__html || c.__html == i.innerHTML) || (i.innerHTML = c.__html), n.__k = [];
    else if (s && (i.innerHTML = ""), hg(n.type == "template" ? i.content : i, oo(C) ? C : [C], n, t, e, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[9837 + 846 * -5 + -5607] : t.__k && ft(t, -4547 + 1 * 4547), g, a), o != null)
      for (I = o.length; I--; ) sr(o[I]);
    g || (I = "value", h == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[I] || h == "progress" && !x || h == "option" && x != d[I]) && so(i, I, x, d[I], A), I = "checked", Q != null && Q != i[I] && so(i, I, Q, d[I], A));
  }
  return i;
}
function cr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    F.__e(A, t);
  }
}
function Dg(i, n, t) {
  var e, A;
  if (F.unmount && F.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || cr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      F.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 0; A < e.length; A++) e[A] && Dg(e[A], n, t || typeof i.type != "function");
  t || sr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function fI(i, n, t) {
  return this.constructor(i, t);
}
function _e(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), F.__ && F.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Ir(n, i = (!e && t || n).__k = OA(ne, null, [i]), A || Xt, Xt, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? to.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), mg(o, i, r);
}
function Cr(i, n) {
  _e(i, n, Cr);
}
function Br(i, n, t) {
  var e, A, o, r, g = ue({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] === void 0 && r != null ? r[o] : n[o];
  return arguments.length > 2 && (g.children = arguments.length > 3 ? to.call(arguments, -2214 + 407 * 18 + -5110) : t), jt(i.type, g, e || i.key, A || i.ref, null);
}
function Fe(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, mi(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + lg++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
to = ug.slice, F = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, Qg = -495 * -1 + 9197 * -1 + 8702, se.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = ue({}, this.state), typeof i == "function" && (i = i(ue({}, t), this.props)), i && ue(t, i), i != null && this.__v && (n && this._sb.push(n), mi(this));
}, se.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), mi(this));
}, se.prototype.render = ne, ze = [], Eg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xg = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Ko.__r = 0, dg = /(PointerCapture)$|Capture$/i, gr = -3737 * -1 + -8669 + 6 * 822, hi = Or(!1), pi = Or(!0), lg = 9067 + -1 * 9067;
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -1 * 4045 + 9804 * -1 + 50 * 277; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }, jo.apply(this, arguments);
}
function wg(i, n) {
  if (i == null) return {};
  var t, e, A = {}, o = Object.keys(i);
  for (e = -1 * 7033 + -4973 * 1 + 12006; e < o.length; e++) n.indexOf(t = o[e]) >= -4364 + 1 * 4364 || (A[t] = i[t]);
  return A;
}
var hI = ["context", "children"], pI = ["useFragment"];
function mI(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = function() {
    DI.call(this, e);
  }, A.prototype.attributeChangedCallback = wI, A.prototype.disconnectedCallback = bI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, i.formAssociated && (A.formAssociated = !0), t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom ? this._vdom.props[o] : this._props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r);
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A), A;
}
function yI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = wg(i, hI);
  return Br(n, t);
}
function DI(i) {
  var n = {};
  n.detail = {}, n.bubbles = !0, n.cancelable = !0;
  var t = new CustomEvent("_preact", n);
  this.dispatchEvent(t), this._vdom = OA(yI, jo({}, this._props, { context: t.detail.context }), kg(this, this._vdomComponent, i)), (this.hasAttribute("hydrate") ? Cr : _e)(this._vdom, this._root);
}
function bg(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function wI(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[bg(i)] = t, this._vdom = Br(this._vdom, e), _e(this._vdom, this._root);
  }
}
function bI() {
  _e(this._vdom = null, this._root);
}
function Jr(i, n) {
  var t = this, e = i.useFragment, A = wg(i, pI);
  return OA(e ? ne : "slot", jo({}, A, { ref: function(o) {
    o ? (t.ref = o, t._listener || (t._listener = function(r) {
      r.stopPropagation(), r.detail.context = n;
    }, o.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function kg(i, n, t) {
  if (1 * -8971 + -3951 + 47 * 275 === i.nodeType) return i.data;
  if (17 * 314 + -3151 + -2186 !== i.nodeType) return null;
  var e = [], A = {}, o = -624 + -7824 * 1 + 8448, r = i.attributes, g = i.childNodes;
  for (o = r.length; o--; ) r[o].name !== "slot" && (A[r[o].name] = r[o].value, A[bg(r[o].name)] = r[o].value);
  for (o = g.length; o--; ) {
    var a = kg(g[o], null, t), I = g[o].slot;
    I ? A[I] = OA(Jr, { name: I }, a) : e[o] = a;
  }
  var c = !(!t || !t.shadow), s = n ? OA(Jr, { useFragment: !c }, e) : e;
  return !c && n && (i.innerHTML = ""), OA(n || i.nodeName.toLowerCase(), A, s);
}
var kI = -4921 + 4177 * -1 + 9098;
function D(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var I = {};
  I.type = i, I.props = a, I.key = t, I.ref = r, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__c = null, I.constructor = void 0, I.__v = --kI, I.__i = -1, I.__u = 0, I.__source = A, I.__self = o;
  var c = I;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return F.vnode && F.vnode(c), c;
}
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
const fo = {};
fo.CONTINUE_DETECTION = "continue-detection", fo.SWITCH_CAMERA = "switch-camera", fo.TOGGLE_MIRROR = "toggle-mirror";
const qo = fo;
var Sg = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(Sg || {}), SI = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(SI || {}), GI = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(GI || {}), NI = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(NI || {}), RI = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(RI || {});
const xe = {};
xe.DETECTION_CHANGED = "multi-range-auto-capture:detection-changed", xe.CAMERA_PROPS_CHANGED = "multi-range-auto-capture:camera-props-changed", xe.CONTROL = "multi-range-auto-capture:control", xe.PHASE_CHANGED = "multi-range-auto-capture:phase-changed", xe.INSTRUCTION_CHANGED = "multi-range-auto-capture:instruction-changed", xe.INSTRUCTION_ESCALATED = "multi-range-auto-capture:instruction-escalated", xe.VIDEO_ELEMENT_SIZE = "multi-range-auto-capture:video-element-size", xe.CHALLENGE_VALUE_CHANGED = "multi-range-auto-capture:challenge-value-changed", xe.STATE_CHANGED = "multi-range-auto-capture:state-changed";
const ce = xe, Se = {};
Se.CANDIDATE_SELECTION = "candidate_selection", Se.DOCUMENT_CENTERING = "document_centering", Se.DOCUMENT_NOT_PRESENT = "document_not_present", Se.DOCUMENT_TOO_FAR = "document_too_far", Se.SHARPNESS_TOO_LOW = "sharpness_too_low", Se.BRIGHTNESS_TOO_LOW = "brightness_too_low", Se.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Se.HOTSPOTS_PRESENT = "hotspots_present";
const je = Se, qe = {};
qe.isPresent = je.DOCUMENT_NOT_PRESENT, qe.isNotSmall = je.DOCUMENT_TOO_FAR, qe.isNotOutOfBounds = je.DOCUMENT_CENTERING, qe.isSharp = je.SHARPNESS_TOO_LOW, qe.isNotDim = je.BRIGHTNESS_TOO_LOW, qe.isNotBright = je.BRIGHTNESS_TOO_HIGH, qe.noHotspots = je.HOTSPOTS_PRESENT;
const Bt = {};
Bt.LOADING = "loading", Bt.ERROR = "error", Bt.WAITING = "waiting", Bt.RUNNING = "running", Bt.COMPLETE = "complete";
const U = Bt, Gg = {};
Gg.EYE_NOT_PRESENT = "eye_not_present";
const ht = Gg, MA = {};
MA.CANDIDATE_SELECTION = "candidate_selection", MA.FACE_TOO_CLOSE = "face_too_close", MA.FACE_TOO_FAR = "face_too_far", MA.FACE_CENTERING = "face_centering", MA.FACE_NOT_PRESENT = "face_not_present", MA.SHARPNESS_TOO_LOW = "sharpness_too_low", MA.BRIGHTNESS_TOO_LOW = "brightness_too_low", MA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", MA.DEVICE_PITCHED = "device_pitched", MA.LEFT_EYE_NOT_PRESENT = "left_" + ht.EYE_NOT_PRESENT, MA.RIGHT_EYE_NOT_PRESENT = "right_" + ht.EYE_NOT_PRESENT, MA.MOUTH_NOT_PRESENT = "mouth_not_present", MA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", MA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const YA = MA, HA = {};
HA.isPresent = YA.FACE_NOT_PRESENT, HA.isNotPitched = YA.DEVICE_PITCHED, HA.isNotSmall = YA.FACE_TOO_FAR, HA.isNotLarge = YA.FACE_TOO_CLOSE, HA.isNotOutOfBounds = YA.FACE_CENTERING, HA.isNotDim = YA.BRIGHTNESS_TOO_LOW, HA.isNotBright = YA.BRIGHTNESS_TOO_HIGH, HA.isSharp = YA.SHARPNESS_TOO_LOW, HA.isLeftEyePresent = YA.LEFT_EYE_NOT_PRESENT, HA.isRightEyePresent = YA.RIGHT_EYE_NOT_PRESENT, HA.isMouthPresent = YA.MOUTH_NOT_PRESENT, HA.isMouthScoreNotTooHigh = YA.MOUTH_SCORE_TOO_HIGH, HA.isMouthScoreNotTooLow = YA.MOUTH_SCORE_TOO_LOW;
var FI = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(FI || {});
const cA = {};
cA.CANDIDATE_SELECTION = "candidate_selection", cA.FACE_TOO_CLOSE = "face_too_close", cA.FACE_TOO_FAR = "face_too_far", cA.FACE_CENTERING = "face_centering", cA.FACE_NOT_PRESENT = "face_not_present", cA.SHARPNESS_TOO_LOW = "sharpness_too_low", cA.BRIGHTNESS_TOO_LOW = "brightness_too_low", cA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", cA.DEVICE_PITCHED = "device_pitched", cA.LEFT_EYE_NOT_PRESENT = "left_" + ht.EYE_NOT_PRESENT, cA.RIGHT_EYE_NOT_PRESENT = "right_" + ht.EYE_NOT_PRESENT, cA.MOUTH_NOT_PRESENT = "mouth_not_present", cA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", cA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", cA.SMILE = "smile", cA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", cA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const KA = cA, jA = {};
jA.isPresent = KA.FACE_NOT_PRESENT, jA.isNotPitched = KA.DEVICE_PITCHED, jA.isNotSmall = KA.FACE_TOO_FAR, jA.isNotLarge = KA.FACE_TOO_CLOSE, jA.isNotOutOfBounds = KA.FACE_CENTERING, jA.isNotDim = KA.BRIGHTNESS_TOO_LOW, jA.isNotBright = KA.BRIGHTNESS_TOO_HIGH, jA.isSharp = KA.SHARPNESS_TOO_LOW, jA.isLeftEyePresent = KA.LEFT_EYE_NOT_PRESENT, jA.isRightEyePresent = KA.RIGHT_EYE_NOT_PRESENT, jA.isMouthPresent = KA.MOUTH_NOT_PRESENT, jA.isMouthStatusNotTooHigh = KA.MOUTH_SCORE_TOO_HIGH, jA.isMouthStatusNotTooLow = KA.MOUTH_SCORE_TOO_LOW;
const jn = {};
jn.NEUTRAL = "NEUTRAL", jn.SMILE = "SMILE", jn.SMILE_MANUAL = "SMILE_MANUAL";
const ae = {};
ae.CANDIDATE_SELECTION = "candidate_selection", ae.PALM_CENTERING = "palm_centering", ae.PALM_NOT_PRESENT = "palm_not_present", ae.PALM_TOO_FAR = "palm_too_far", ae.PALM_TOO_CLOSE = "palm_too_close", ae.SHARPNESS_TOO_LOW = "sharpness_too_low", ae.BRIGHTNESS_TOO_LOW = "brightness_too_low", ae.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ae.DEVICE_PITCHED = "device_pitched", ae.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const ye = ae, De = {};
De.isPresent = ye.PALM_NOT_PRESENT, De.isNotPitched = ye.DEVICE_PITCHED, De.isNotSmall = ye.PALM_TOO_FAR, De.isNotOutOfBounds = ye.PALM_CENTERING, De.isNotDim = ye.BRIGHTNESS_TOO_LOW, De.isNotBright = ye.BRIGHTNESS_TOO_HIGH, De.isSharp = ye.SHARPNESS_TOO_LOW, De.isNotLarge = ye.PALM_TOO_CLOSE, De.isTemplateExtractionQualityHighEnough = ye.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Io = {};
Io.TOP_LEFT = "TOP_LEFT", Io.TOP_RIGHT = "TOP_RIGHT", Io.BOTTOM_RIGHT = "BOTTOM_RIGHT", Io.BOTTOM_LEFT = "BOTTOM_LEFT";
const te = {};
te.CANDIDATE_SELECTION = "candidate_selection", te.FACE_TOO_CLOSE = "face_too_close", te.FACE_TOO_FAR = "face_too_far", te.FACE_CENTERING = "face_centering", te.FACE_NOT_PRESENT = "face_not_present", te.SHARPNESS_TOO_LOW = "sharpness_too_low", te.BRIGHTNESS_TOO_LOW = "brightness_too_low", te.BRIGHTNESS_TOO_HIGH = "brightness_too_high", te.DEVICE_PITCHED = "device_pitched", te.LEFT_EYE_NOT_PRESENT = "left_" + ht.EYE_NOT_PRESENT, te.RIGHT_EYE_NOT_PRESENT = "right_" + ht.EYE_NOT_PRESENT;
const SA = te, ge = {};
ge.isPresent = SA.FACE_NOT_PRESENT, ge.isNotPitched = SA.DEVICE_PITCHED, ge.isNotSmall = SA.FACE_TOO_FAR, ge.isNotLarge = SA.FACE_TOO_CLOSE, ge.isNotOutOfBounds = SA.FACE_CENTERING, ge.isNotDim = SA.BRIGHTNESS_TOO_LOW, ge.isNotBright = SA.BRIGHTNESS_TOO_HIGH, ge.isSharp = SA.SHARPNESS_TOO_LOW, ge.isLeftEyePresent = SA.LEFT_EYE_NOT_PRESENT, ge.isRightEyePresent = SA.RIGHT_EYE_NOT_PRESENT;
const Ur = ge, Ve = {};
Ve.ZERO = "ZERO", Ve.ONE = "ONE", Ve.TWO = "TWO", Ve.THREE = "THREE", Ve.FOUR = "FOUR", Ve.FIVE = "FIVE";
const ZA = Ve;
var He, P, qn, Yr, pt = 2096 + -524 * 4, Ng = [], H = F, Tr = H.__b, Pr = H.__r, _r = H.diffed, Hr = H.__c, Kr = H.unmount, jr = H.__;
function Nt(i, n) {
  H.__h && H.__h(P, i, pt || n), pt = 1 * 4490 + -1984 + -2506;
  var t = {};
  t.__ = [], t.__h = [];
  var e = P.__H || (P.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function lA(i) {
  return pt = -6388 * 1 + -7258 + 13647, Qr(vg, i);
}
function Qr(i, n, t) {
  var e = Nt(He++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : vg(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], I = e.t(a, g);
    a !== I && (e.__N = [I, e.__[1]], e.__c.setState({}));
  }], e.__c = P, !P.__f)) {
    var A = function(g, a, I) {
      if (!e.__c.__H) return !0;
      var c = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (c.every(function(C) {
        return !C.__N;
      })) return !o || o.call(this, g, a, I);
      var s = e.__c.props !== g;
      return c.forEach(function(C) {
        if (C.__N) {
          var E = C.__[0];
          C.__ = C.__N, C.__N = void 0, E !== C.__[0] && (s = !0);
        }
      }), o && o.call(this, g, a, I) || s;
    };
    P.__f = !0;
    var o = P.shouldComponentUpdate, r = P.componentWillUpdate;
    P.componentWillUpdate = function(g, a, I) {
      if (this.__e) {
        var c = o;
        o = void 0, A(g, a, I), o = c;
      }
      r && r.call(this, g, a, I);
    }, P.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function V(i, n) {
  var t = Nt(He++, 3);
  !H.__s && Er(t.__H, n) && (t.__ = i, t.u = n, P.__H.__h.push(t));
}
function Rt(i, n) {
  var t = Nt(He++, 4);
  !H.__s && Er(t.__H, n) && (t.__ = i, t.u = n, P.__h.push(t));
}
function PA(i) {
  return pt = 1752 * -1 + -2956 + 4713, bA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Rg(i, n, t) {
  pt = 1682 * -3 + 2843 + 2209 * 1, Rt(function() {
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
function bA(i, n) {
  var t = Nt(He++, 7);
  return Er(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function he(i, n) {
  return pt = -1 * 4877 + 1115 * 1 + 3770, bA(function() {
    return i;
  }, n);
}
function Ce(i) {
  var n = P.context[i.__c], t = Nt(He++, -1782 + 1 * -1604 + 3395);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(P)), n.props.value) : i.__;
}
function Vo(i, n) {
  H.useDebugValue && H.useDebugValue(n ? n(i) : i);
}
function Fg() {
  var i = Nt(He++, 11);
  if (!i.__) {
    for (var n = P.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [6129 * 1 + -1726 + -4403, -7590 + 1 * -4909 + 12499]);
    i.__ = "P" + t[-1738 + 2329 * -4 + -5527 * -2] + "-" + t[226 + 2507 * 1 + -4 * 683]++;
  }
  return i.__;
}
function vI() {
  for (var i; i = Ng.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(ho), i.__H.__h.forEach(Di), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], H.__e(n, i.__v);
  }
}
H.__b = function(i) {
  P = null, Tr && Tr(i);
}, H.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), jr && jr(i, n);
}, H.__r = function(i) {
  Pr && Pr(i), He = 2317 * 2 + -9471 + 4837;
  var n = (P = i.__c).__H;
  n && (qn === P ? (n.__h = [], P.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(ho), n.__h.forEach(Di), n.__h = [], He = 1 * 9274 + -161 + -9113)), qn = P;
}, H.diffed = function(i) {
  _r && _r(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (1 * -5331 + 2542 * -1 + 7874 !== Ng.push(n) && Yr === H.requestAnimationFrame || ((Yr = H.requestAnimationFrame) || WI)(vI)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), qn = P = null;
}, H.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(ho), t.__h = t.__h.filter(function(e) {
        return !e.__ || Di(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], H.__e(e, t.__v);
    }
  }), Hr && Hr(i, n);
}, H.unmount = function(i) {
  Kr && Kr(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      ho(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && H.__e(n, t.__v));
};
var qr = typeof requestAnimationFrame == "function";
function WI(i) {
  var n, t = function() {
    clearTimeout(e), qr && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 35);
  qr && (n = requestAnimationFrame(t));
}
function ho(i) {
  var n = P, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), P = n;
}
function Di(i) {
  var n = P;
  i.__c = i.__(), P = n;
}
function Er(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function vg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const Nn = Fe(void 0);
Nn.displayName = "AppStateContext";
function JA() {
  const i = Ce(Nn);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class MI extends se {
  static contextType = Nn;
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
    return this.context?.appState === U.ERROR ? null : this.props.children;
  }
}
function Wg(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function wi(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function Mg(i, n) {
  var t = n(), e = lA({ t: { __: t, u: n } }), A = e[-347 * -1 + 1140 + 1487 * -1].t, o = e[3 * 801 + -12 + -2390];
  return Rt(function() {
    A.__ = t, A.u = n, Vn(A) && o({ t: A });
  }, [i, t, n]), V(function() {
    return Vn(A) && o({ t: A }), i(function() {
      Vn(A) && o({ t: A });
    });
  }, [i]), t;
}
function Vn(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (6951 * 1 + 2 * 3102 + -5 * 2631 !== n || (7341 + -10 * -716 + -14500) / n == 1 / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function Lg(i) {
  i();
}
function Og(i) {
  return i;
}
function Jg() {
  return [!1, Lg];
}
var Ug = Rt;
function bi(i, n) {
  this.props = i, this.context = n;
}
function LI(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : wi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, OA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e.type = i, e;
}
(bi.prototype = new se()).isPureReactComponent = !0, bi.prototype.shouldComponentUpdate = function(i, n) {
  return wi(this.props, i) || wi(this.state, n);
};
var Vr = F.__b;
F.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Vr && Vr(i);
};
var OI = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 5081 * 1 + -1175 + 5;
function xr(i) {
  function n(t) {
    var e = Wg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = OI, n.render = i, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Zr = function(i, n) {
  return i == null ? null : Re(Re(i).map(n));
}, JI = { map: Zr, forEach: Zr, count: function(i) {
  return i ? Re(i).length : 1 * -787 + -6702 + 7489;
}, only: function(i) {
  var n = Re(i);
  if (741 * -3 + -3 * 2081 + 8467 !== n.length) throw "Children.only";
  return n[659 * -4 + -8 * -1112 + 313 * -20];
}, toArray: Re }, UI = F.__e;
F.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  UI(i, n, t, e);
};
var zr = F.unmount;
function Yg(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Wg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Yg(e, n, t);
  })), i;
}
function Tg(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return Tg(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function po() {
  this.__u = -13 * -568 + -542 + -6842, this.o = null, this.__b = null;
}
function Pg(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function YI(i) {
  var n, t, e, A = null;
  function o(r) {
    if (n || (n = i()).then(function(g) {
      g && (A = g.default || g), e = !0;
    }, function(g) {
      t = g, e = !0;
    }), t) throw t;
    if (!e) throw n;
    return A ? OA(A, r) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Tt() {
  this.i = null, this.l = null;
}
F.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 32 & i.__u && (i.type = null), zr && zr(i);
}, (po.prototype = new se()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = Pg(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[0] = Tg(a, a.__c.__P, a.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.o.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 8593 + 3295 * 3 + -18446 & n.__u || e.setState({ __a: e.__b = e.__v.__k[19 * -289 + 5114 + 377] }), i.then(r, r);
}, po.prototype.componentWillUnmount = function() {
  this.o = [];
}, po.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[0].__c;
      this.__v.__k[4715 + -1547 * -1 + -6262] = Yg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && OA(ne, null, i.fallback);
  return A && (A.__u &= -33), [OA(ne, null, n.__a ? null : i.children), A];
};
var Xr = function(i, n, t) {
  if (++t[281 * -3 + 7553 * 1 + 6709 * -1] === t[-1 * 7439 + -7 * 506 + 10981] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -7781 + -7 * 905 + 14119; ) t.pop()();
    if (t[1 * 3373 + 1923 + -3 * 1765] < t[2350 + 470 * -5]) break;
    i.i = t = t[2 * 1634 + 775 * -1 + -2491];
  }
};
function TI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function PI(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    _e(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 2262 + -11 * 433 + 2502, 1), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, _e(OA(TI, o, i.__v), n.v);
}
function _I(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = OA(PI, t);
  return e.containerInfo = n, e;
}
(Tt.prototype = new se()).__a = function(i) {
  var n = this, t = Pg(n.__v), e = n.l.get(i);
  return e[0]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Xr(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Tt.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Re(i.children);
  i.revealOrder && i.revealOrder[-493 * -9 + -9931 + 5494] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-1474 + 994 * -4 + 5451, 2459 * 3 + 3046 + -10423, this.i]);
  return i.children;
}, Tt.prototype.componentDidUpdate = Tt.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Xr(i, t, n);
  });
};
var _g = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 1100 * -10 + 3 * -33992 + 1 * 173079, HI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, KI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, jI = /[A-Z0-9]/g, qI = typeof document < "u", VI = function(i) {
  return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function ZI(i, n, t) {
  return n.__k == null && (n.textContent = ""), _e(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function zI(i, n, t) {
  return Cr(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
se.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(se.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var $r = F.event;
function XI() {
}
function $I() {
  return this.cancelBubble;
}
function Ac() {
  return this.defaultPrevented;
}
F.event = function(i) {
  return $r && (i = $r(i)), i.persist = XI, i.isPropagationStopped = $I, i.isDefaultPrevented = Ac, i.nativeEvent = i;
};
var mo = {};
mo.enumerable = !1, mo.configurable = !0, mo.get = function() {
  return this.class;
};
var dr, ec = mo, Aa = F.vnode;
F.vnode = function(i) {
  typeof i.type == "string" && (function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || qI && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[-1121 * -4 + -1 * -9389 + -13873] === "o" && a[1954 + -4461 * 1 + 2508] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || VI(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : KI.test(r) && (r = a) : a = r = "oninput" : o && HI.test(r) ? r = r.replace(jI, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Re(t.children).forEach(function(I) {
      I.props.selected = A.value.indexOf(I.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Re(t.children).forEach(function(I) {
      I.props.selected = A.multiple ? A.defaultValue.indexOf(I.props.value) != -1 : A.defaultValue == I.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", ec)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  })(i), i.$$typeof = _g, Aa && Aa(i);
};
var ea = F.__r;
F.__r = function(i) {
  ea && ea(i), dr = i.__c;
};
var ta = F.diffed;
F.diffed = function(i) {
  ta && ta(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), dr = null;
};
var yA = {};
yA.readContext = function(i) {
  return dr.__n[i.__c].props.value;
}, yA.useCallback = he, yA.useContext = Ce, yA.useDebugValue = Vo, yA.useDeferredValue = Og, yA.useEffect = V, yA.useId = Fg, yA.useImperativeHandle = Rg, yA.useInsertionEffect = Ug, yA.useLayoutEffect = Rt, yA.useMemo = bA, yA.useReducer = Qr, yA.useRef = PA, yA.useState = lA, yA.useSyncExternalStore = Mg, yA.useTransition = Jg;
var Hg = {};
Hg.current = yA;
var Kg = {};
Kg.ReactCurrentDispatcher = Hg;
var tc = Kg;
function oc(i) {
  return OA.bind(null, i);
}
function Rn(i) {
  return !!i && i.$$typeof === _g;
}
function nc(i) {
  return Rn(i) && i.type === ne;
}
function ic(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function rc(i) {
  return Rn(i) ? Br.apply(null, arguments) : i;
}
function ac(i) {
  return !!i.__k && (_e(null, i), !0);
}
function gc(i) {
  return i && (i.base || -5291 + -1 * -5839 + 1 * -547 === i.nodeType && i) || null;
}
var sc = function(i, n) {
  return i(n);
}, Ic = function(i, n) {
  return i(n);
}, cc = ne, Cc = Rn, ot = { useState: lA, useId: Fg, useReducer: Qr, useEffect: V, useLayoutEffect: Rt, useInsertionEffect: Ug, useTransition: Jg, useDeferredValue: Og, useSyncExternalStore: Mg, startTransition: Lg, useRef: PA, useImperativeHandle: Rg, useMemo: bA, useCallback: he, useContext: Ce, useDebugValue: Vo, version: "18.3.1", Children: JI, render: ZI, hydrate: zI, unmountComponentAtNode: ac, createPortal: _I, createElement: OA, createContext: Fe, createFactory: oc, cloneElement: rc, createRef: xI, Fragment: ne, isValidElement: Rn, isElement: Cc, isFragment: nc, isMemo: ic, findDOMNode: gc, Component: se, PureComponent: bi, memo: LI, forwardRef: xr, flushSync: Ic, unstable_batchedUpdates: sc, StrictMode: cc, Suspense: po, SuspenseList: Tt, lazy: YI, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tc };
function Bc(i, n, t, e, A) {
  return DA(A - 628, t);
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return DA(I - 593, g);
  }
  function e(g, a, I, c, s) {
    return DA(a - -3, s);
  }
  const A = i();
  function o(g, a, I, c, s) {
    return DA(a - -726, c);
  }
  function r(g, a, I, c, s) {
    return DA(s - 754, c);
  }
  for (; ; )
    try {
      if (-parseInt(r(1209, 1235, 1216, "o@63", 1220)) / 1 + parseInt(r(1192, 1206, 1193, "rdHx", 1206)) / 2 * (-parseInt(r(1215, 1223, 1215, "SVie", 1212)) / 3) + -parseInt(r(1244, 1214, 1224, "jJ)t", 1230)) / 4 * (-parseInt(e(457, 464, 460, 463, "2]n8")) / 5) + -parseInt(t("B!3#", 1060, 1066, 1082, 1079)) / 6 + -parseInt(e(440, 456, 470, 456, "BOY5")) / 7 + -parseInt(r(1221, 1225, 1216, "I7t1", 1219)) / 8 + parseInt(o(-290, -280, -291, "B!3#", -273)) / 9 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Zo, -405911 + -97 * -9659 + 447257);
function ki(i, n, t, e, A) {
  return DA(i - 7, A);
}
function DA(i, n) {
  i = i - (6245 * 1 + -6570 * -1 + -12369);
  const t = Zo();
  let e = t[i];
  if (DA.lNOdOY === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    DA.ziJUwz = a, DA.widZbz = {}, DA.lNOdOY = !0;
  }
  const o = t[-1 * -4789 + -2769 + -2020], r = i + o, g = DA.widZbz[r];
  return g ? e = g : (DA.eQYJKf === void 0 && (DA.eQYJKf = !0), e = DA.ziJUwz(e, n), DA.widZbz[r] = e), e;
}
function Zo() {
  const i = ["oGJcSubpWOaN", "gSoQW5VdPuu", "B0Ghxgy", "lCkfWRvqvG", "cCkeWPZdSsfcy2BdIMDSEW", "W6PxW6X9W4BcMwDrWOddGCkSW5P1", "qcrJ", "WQJdQ8o4cCk+", "e3KGW6S6WPmClmkjbmoGW50", "pYf+n2a", "W6uBAmkNkM8uAG", "WP7cGbNcSmo4WQJdV3NdKmoOzNFdVq", "W4hcUSksdG", "WR7cOCkkWRDMW64fW4BcRwCxw01C", "WOSvWRe4WPy", "WOfRxwin", "lCkWW7OPiW", "fd9IkapcPulcK8oavKigcWG", "cCoWWOyGW79nW63cNSkVru5oW7C", "W6PwW6L5W4NcMwjRWOpdQ8k1W7np", "W5OeBXddRq", "W4JdN1VdSSkT", "ac1Epwa", "pmosW6nhfcpcN8oWWOvalHNdJmkZ", "z8kyWP9ZW5fjsmkUW6nyW77dVCot", "WOj7WPKnWQ5KW4xdGLJcT8o7W7W4", "cSoHWOC6tW", "W5LpW4mZiG", "hdrzWPHeW7eC", "W43dHmoeWRTmWQ4iW6PqWQfEW4iI", "WOf0WPWgWQ9LW4ZcIv7cKmoBW4S6WPW", "d8koW4VcVx0mFua"];
  return Zo = function() {
    return i;
  }, Zo();
}
function Si(i, n, t, e, A) {
  return DA(e - -800, i);
}
function oa(i, n, t, e, A) {
  return DA(t - 673, n);
}
const zo = Fe(void 0);
zo[ki(476, 471, 474, 473, "BOY5") + ki(482, 473, 487, 475, "^SEY") + "e"] = oa(1142, "oI1*", 1130) + oa(1134, "oI1*", 1143) + Si("vG(i", -334, -333, -340);
function Fn() {
  function i(o, r, g, a, I) {
    return Si(r, r - 17, g - 31, g - 154);
  }
  const n = Ce(zo);
  function t(o, r, g, a, I) {
    return Si(o, r - 373, g - 117, I - 205);
  }
  if (n === void 0) throw new Error(zo[A(977, 991, 992, "mbxj") + i(-212, "0wcq", -197) + "e"] + (A(997, 985, 983, "BfWp") + A(964, 965, 979, "v6lD") + t("tH3V", -147, -152, -155, -145) + A(1015, 996, 1002, "eAHg") + t("bh)o", -148, -148, -147, -132) + e(96, 97, 104, "b4B)") + e(90, 91, 83, "2]n8") + A(968, 997, 982, "jJ)t")));
  function e(o, r, g, a, I) {
    return ki(o - -379, r - 436, g - 331, a - 355, a);
  }
  function A(o, r, g, a, I) {
    return Bc(o - 405, r - 367, a, a - 162, g - -100);
  }
  return n;
}
const Xo = Fe(void 0);
Xo.displayName = "AnalyticsContext";
function Qc() {
  const i = Ce(Xo);
  if (i === void 0)
    throw new Error(`${Xo.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const Zn = (i) => i.length < -14375 + 3 * 4792 ? 0 : i.reduce((t, e) => t + e, -6239 + 1 * 6239) / i.length, ut = (i) => Number.parseFloat(i.toFixed(18965 + 499 * -38));
function Ec(i) {
  const n = i.getContext("2d");
  n && n.clearRect(8029 + 1559 * -5 + -234, 0, n.canvas.width, n.canvas.height);
}
const jg = 6471 + 719 * -9 + 0.75, xc = -2087 * -1 + 7383 + 36 * -263, dc = -26 * 337 + -2 * -925 + 7512, lc = "dot-auto-capture-video", vn = (i, n) => Math.min(i, n), qg = ({ height: i, width: n }, t) => {
  const e = vn(n, i) * t, A = (n - e) / 2, o = (i - e) / (-7024 + -6458 * -1 + 568), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, uc = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = qg(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, fc = ({ height: i, width: n }) => {
  const t = vn(n, i), e = t / 3 * (-2573 * -3 + 2 * 1457 + 10629 * -1);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function hc(i, n) {
  const t = vn(n.width, n.height);
  return ut(i * t);
}
function pc({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, qg(t, jg);
}
function mc(i) {
  return uc(i, jg);
}
function yc(i, n) {
  return hc(i, n) * xc;
}
const Dc = "8.0.2", wc = {
  version: Dc
}, bc = -4579 + 327 * 27 + 4241 * -1 + 0.8100000000000005, Gi = {};
Gi.max = 100, Gi.min = 10;
const na = Gi, kc = 720, Sc = -8923 * -1 + 1038 * 7 + -15989, Gc = 4, Vg = "AES-CBC", Zg = "RSA-OAEP", Nc = "SHA-256", Rc = "image/jpeg", Fc = 299 * -7 + 556 + 1545, zg = "/dot-assets", ia = "dot_embedded_bg.wasm", Ni = (i) => new Promise((n) => {
  setTimeout(n, i);
}), Xg = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? ut(t) : t)), $g = () => wc.version, A0 = (i) => new URL(i).hostname.replace("www.", ""), lr = () => A0(window.location.href) === "localhost", vc = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function Wc(i) {
  return i.at(-1) === "/" ? i.slice(0, -1) : i;
}
function Mc(i) {
  return "" + Wc(i ?? "") + zg;
}
function Lc(i) {
  return i !== null && typeof i == "object" && "min" in i && typeof i.min == "number";
}
function Ot(i) {
  return (...n) => {
    lr() && console[i](...n);
  };
}
const ur = { log: Ot("log"), warn: Ot("warn"), error: Ot("error"), info: Ot("info"), debug: Ot("debug") };
function Oc({ analytics: i, crosshatch: n }) {
  if (!lr())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function Jc({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = Oc(o);
  return V(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), V(() => {
    e && (ur.info("Analytics is " + (r?.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function Uc({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = Fn(), { redfin: o } = JA(), r = Jc({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = bA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ D(Xo.Provider, { value: g, children: t });
}
const Ri = {};
Ri.SIMD = "simd", Ri.NO_SIMD = "no-simd";
const ra = Ri, Fi = {};
Fi.Lower = "Lower", Fi.Higher = "Higher";
const mt = Fi, vi = {};
vi.MOBILE = "MOBILE", vi.DESKTOP = "DESKTOP";
const aa = vi, $o = Fe(void 0);
$o.displayName = "TransactionCountingContext";
function e0() {
  const i = Ce($o);
  if (i === void 0)
    throw new Error(`${$o.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function Yc({ children: i, value: n }) {
  const { crosshatch: t } = Fn(), { transactionCounting: e } = e0(), A = t?.isValid && e?.isTransactionTokenValid ? mt.Higher : mt.Lower, o = bA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ D(Nn.Provider, { value: o, children: i });
}
let W;
const Ne = new Array(128).fill(void 0);
Ne.push(void 0, null, !0, !1);
function Wi(i) {
  return Ne[i];
}
let fe = 6514 + -1 * 6514, Pt = null;
function yo() {
  return (Pt === null || Pt.byteLength === 2246 * -3 + 6579 + 159) && (Pt = new Uint8Array(W.memory.buffer)), Pt;
}
const Do = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Tc = typeof Do.encodeInto == "function" ? function(i, n) {
  return Do.encodeInto(i, n);
} : function(i, n) {
  const t = Do.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function $t(i, n, t) {
  if (t === void 0) {
    const g = Do.encode(i), a = n(g.length, -397 * 1 + 3 * -571 + -2111 * -1) >>> 0;
    return yo().subarray(a, a + g.length).set(g), fe = g.length, a;
  }
  let e = i.length, A = n(e, 1) >>> -1 * 2761 + -8070 * -1 + -5309;
  const o = yo();
  let r = 1236 + 2 * 3853 + 263 * -34;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > 12976 + 12849 * -1) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== -3061 + 21 * -312 + -1 * -9613 && (i = i.slice(r)), A = t(A, e, e = r + i.length * 3, 1) >>> -2684 * 3 + 9454 + -1402;
    const g = yo().subarray(A + r, A + e), a = Tc(i, g);
    r += a.written, A = t(A, e, r, 1) >>> 1537 * 3 + 5205 + -9816;
  }
  return fe = r, A;
}
function t0(i) {
  return i == null;
}
let _t = null;
function de() {
  return (_t === null || _t.byteLength === -3641 + 1 * 5784 + -2143 * 1) && (_t = new Int32Array(W.memory.buffer)), _t;
}
let qt = Ne.length;
function Pc(i) {
  i < -1787 + 1919 * 1 || (Ne[i] = qt, qt = i);
}
function o0(i) {
  const n = Wi(i);
  return Pc(i), n;
}
const Mi = {};
Mi.ignoreBOM = !0, Mi.fatal = !0;
const n0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Mi) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && n0.decode();
function An(i, n) {
  return i = i >>> 0, n0.decode(yo().subarray(i, i + n));
}
function Li(i) {
  qt === Ne.length && Ne.push(Ne.length + (5787 * -1 + 8193 + -2405));
  const n = qt;
  return qt = Ne[n], Ne[n] = i, n;
}
let Ht = null;
function i0() {
  return (Ht === null || Ht.byteLength === -1 * -9532 + -8202 + -1330) && (Ht = new Uint32Array(W.memory.buffer)), Ht;
}
function ga(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = i0();
  for (let A = -1 * 3929 + 3391 + 538; A < i.length; A++)
    e[t / (-1 * -8890 + -1818 + -7068) + A] = Li(i[A]);
  return fe = i.length, t;
}
function sa(i, n) {
  i = i >>> 0;
  const t = i0(), e = t.subarray(i / (8289 + -2548 * 1 + -1 * 5737), i / (-10333 + -1 * -10337) + n), A = [];
  for (let o = -1915 + -346 * -17 + -3967; o < e.length; o++)
    A.push(o0(e[o]));
  return A;
}
function _c(i, n) {
  const t = $t(i, W.__wbindgen_malloc, W.__wbindgen_realloc), e = fe, A = $t(n, W.__wbindgen_malloc, W.__wbindgen_realloc), o = fe, r = W.is_mobile_supported(t, e, A, o);
  return fr.__wrap(r);
}
const Oi = {};
Oi.register = () => {
}, Oi.unregister = () => {
};
const Ia = typeof FinalizationRegistry > "u" ? Oi : new FinalizationRegistry((i) => W.__wbg_licensevalidationresult_free(i >>> 0));
class fr {
  static __wrap(n) {
    n = n >>> 0;
    const t = Object.create(fr.prototype);
    return t.__wbg_ptr = n, Ia.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -9239 + 2488 * -1 + 3 * 3909, Ia.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    W.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = t0(t) ? 0 : $t(t, W.__wbindgen_malloc, W.__wbindgen_realloc), g = fe;
    const a = ga(e, W.__wbindgen_malloc), I = fe, c = ga(A, W.__wbindgen_malloc), s = fe, C = $t(o, W.__wbindgen_malloc, W.__wbindgen_realloc), E = fe, x = W.licensevalidationresult_new(n, r, g, a, I, c, s, C, E);
    return this.__wbg_ptr = x >>> 4220 + 2 * -2110, this;
  }
  get is_valid() {
    return W.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1311 * 2 + 1 * 1534 + -2078 * 2;
  }
  get features_json() {
    try {
      const e = W.__wbindgen_add_to_stack_pointer(-16);
      W.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = de()[e / (1609 + 535 * -3) + 0], t = de()[e / (2 * 4372 + -414 + 1 * -8326) + (26 * 349 + 1 * 3631 + 32 * -397)];
      let A;
      return n !== 0 && (A = An(n, t).slice(), W.__wbindgen_free(n, t * (14445 + -314 * 46), -273 + 2903 * 2 + -5532)), A;
    } finally {
      W.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = W.__wbindgen_add_to_stack_pointer(-16);
      W.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = de()[A / 4 + (-1866 + 4 * 850 + -1534)], t = de()[A / (-2237 * 4 + 4512 + 4440) + (8134 + 3 * -2711)], e = sa(n, t).slice();
      return W.__wbindgen_free(n, t * (4 * -2377 + -8134 + 1038 * 17), 6644 + -415 * 16), e;
    } finally {
      W.__wbindgen_add_to_stack_pointer(2189 * -4 + -1394 + 391 * 26);
    }
  }
  get warnings() {
    try {
      const A = W.__wbindgen_add_to_stack_pointer(-16);
      W.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = de()[A / (-2938 + 1471 * 2) + (-3118 + -3118 * -1)], t = de()[A / (-3518 * -2 + -8 * 1213 + 2672) + (2194 + -5 * -1231 + -8348 * 1)], e = sa(n, t).slice();
      return W.__wbindgen_free(n, t * (-3 * 1297 + -7168 + 11063), 4), e;
    } finally {
      W.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = W.__wbindgen_add_to_stack_pointer(-16);
      W.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = de()[o / (-4332 + 542 * 8) + (-5751 + 9364 * -1 + 5 * 3023)], A = de()[o / (2522 + -6 * 939 + 3116 * 1) + (2668 + 5 * 1453 + -9932)];
      return n = e, t = A, An(e, A);
    } finally {
      W.__wbindgen_add_to_stack_pointer(2 * 4792 + -9426 + -142), W.__wbindgen_free(n, t, -308 * -12 + -4440 + 745);
    }
  }
}
async function Hc(i, n) {
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
function Kc() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = Wi(t), A = typeof e == "string" ? e : void 0;
    var o = t0(A) ? -1 * 8609 + -9573 + 18182 : $t(A, W.__wbindgen_malloc, W.__wbindgen_realloc), r = fe;
    de()[n / 4 + (-9590 + 1 * 5954 + 3637)] = r, de()[n / (1 * 1567 + -8871 + -7308 * -1) + 0] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    o0(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = An(n, t);
    return Li(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Li(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Wi(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(An(n, t));
  }, i;
}
function jc(i, n) {
  return W = i.exports, r0.__wbindgen_wasm_module = n, _t = null, Ht = null, Pt = null, W;
}
async function r0(i) {
  if (W !== void 0) return W;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KBgICAIDcClAMgAyABNgKQAyADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQZADahAzIANB+AFqIAJBMBC+AhogARAiIAMoAoACIQYDQCASIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAYhAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACATIQIgBUUEQCADKAL8ASEEIBEhAgsgBEUNASACIARBAWs2AgAMAQsLIANBwANqIgIgA0H4AWoiAUEwEL4CGiABIANBsAJqIgRBMBC+AhogASACEHUgA0GQA2oiBSABQTAQvgIaIAIQjwIgBCAFQTAQvgIaIAEgA0HgAmoiAkEwEL4CGiABIANBOGoQdSACIAFBMBC+AhoMAAsACyAFIARBvPvAABC5AQALIAogBEHM+8AAELkBAAsgCiAEQdz7wAAQuQEACyAKIARB7PvAABC5AQALIAoNAAsMBAtBgJfCAEErQaz7wAAQ3gEAC0GAl8IAQStBnPvAABDeAQALAAtB/PvAAEEOQYz8wAAQ3gEACyADQfgBaiIBIANB6ABqQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0GwAmogA0H4AWpBMBC+AhogA0HgAmoiBCADQQhqQTAQvgIaIAMoAuACIgtBAkYEQCADKALkAiEECwJAAkACQAJAAkAgBCgCKCIBQQVPBH8gBCgCBAUgAQsgDUEGdiICSwRAIAtBAkcNASADIAMoAuQCIAJBlP7AABDTASADKAIAIQIgAygCBCEBIANBADYC+AEgA0EANgKgAiADQfgBaiIEIAIgAiABQQN0ahBDIANBkANqIARBMBC+AhoMAgsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiIBIANBkANqEDMgA0H4AWoiAiABQTAQvgIaIAJBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogC0ECRg0EIANB4AJqEI8CDAQLIANBwANqIANBCGpBMBC+AhogAygC6AMiBEEETQR/IANByANqBSADKALEAyEEIAMoAsgDCyEBIAIgBEsNASADQQA2AvgBIANBADYCoAIgA0H4AWoiByABIAJBA3RqIAEgBEEDdGoQQyADQZADaiAHQTAQvgIaIANBwANqEI8CCyANQT9xRQ0BIAMoArgDIgRBBE0EfyADQZgDagUgAygClAMhBCADKAKYAwsgBEUNAUEIayECIARBA3QhBCAXQj+DIRhCACEWQgAgF31CP4MhFwNAIAIgBGoiASAWIAEpAwAiFiAYiIQ3AwAgFiAXhiEWIARBCGsiBA0ACwwBCyACIARBpP7AABC5AQALIANB+AFqIgEgA0GQA2pBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQcADaiADQfgBakEwEL4CGgsgACADQbACakEwEL4CQTBqIANBwANqQTAQvgIaIANBmAFqEI8CIANBOGoQjwIMAgsgAkEIaiEHIAQLRQ0BIAcpAwBCAVEEQCAFQQRNBH8gAUEIagUgASgCBCEFIAEoAggLIQQgA0EANgL4ASADQQA2AqACIANB+AFqIgEgBCAEIAVBA3RqEEMgA0GQA2ogAUEwEL4CGiADQQI2AugCIANCBDcC4AIgA0EANgLAAyADQQA2AugDIANBwANqIgIgA0HgAmoQMyABIAJBMBC+AhogAUEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyAAQTBqIANB+AFqQTAQvgIaIAAgA0GQA2pBMBC+AhoMAQsgBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEBIANBADYC+AEgA0EANgKgAiADQfgBaiIHIAEgASAFQQN0ahBDIANBwANqIAdBMBC+AhogBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyECIARFDQIgA0H4AWoiASADQcADaiACKQMAEE0gACABQTAQvgIiAEHYAGogAykDqAIiFkIAUjYCACAAQThqIBY3AwAgAEEANgIwCyADQfADaiQADwtBAEEAQfz6wAAQtwEAC0EAQQBBjPvAABC3AQALyC8CDX8BfiMAQbACayIEJAAgASgCACEGAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEoAggiAiABKAIEIgNJBEADQCACIAZqLQAAIgVBCWsiB0EXS0EBIAd0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEGAAWogBiADIAMgAkEBaiIBIAEgA0sbELYBQbixwgAtAAAaIAQoAoQBIQIgBCgCgAEhA0EUEAoiAQ0BDBoLIAVB5QBLDQUgBUEiRg0CIAVBLUYNAyAFQdsARw0GIAEgAS0AGEEBayIFOgAYIAJBAWohAiAFQf8BcUUNASABIAI2AghBACEHIARBADYC+AEgBEIINwLwASAEQagBaiEIIARBoAFqQQFyIQlBCCEKAn8CQAJAA0AgASgCACEGIAIgA08NAQNAAkACQAJAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0HDAELIAVBH0wEQCAFQQ1HDQEMBwsgBUEgRg0GIAVBLEYNASAFQd0ARg0DCyALDQEMAwsgC0UNAyABIAJBAWoiAjYCCCAEQdgAaiAGIAMgAyACIANJBH8DQCACIAZqLQAAIgVBCWsiC0EXS0EBIAt0QZOAgARxRXINBCABIAJBAWoiAjYCCCACIANHDQALIAMFIAILQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCXCECIAQoAlghA0EUEAoiBkUNIyAGIAM2AgwgBkEFNgIAIAYgAjYCEAwICyAEQUBrIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJEIQIgBCgCQCEDQRQQCiIGRQ0iIAYgAzYCDCAGQQc2AgAgBiACNgIQDAcLIAQoAvABIQYgBCkC9AEhD0EAIQhBBAwHCyAFQd0ARw0AIARByABqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAJMIQIgBCgCSCEDQRQQCiIGRQ0gIAYgAzYCDCAGQRU2AgAgBiACNgIQDAULIARBoAFqIAEQCSAELQCgASILQQZGBEAgBCgCpAEhBgwFCyAEQYoCaiIMIAlBAmotAAA6AAAgBEGgAmoiDSAIQQhqKQMANwMAIAQgCS8AADsBiAIgBCAIKQMANwOYAiAEKAKkASEOIAQoAvQBIAdGBH8gBEHwAWohAyMAQSBrIgIkAAJAAkAgB0EBaiIFRQ0AQQQgAygCBCIGQQF0IgcgBSAFIAdJGyIFIAVBBE0bIgdBGGwhBSAHQdaq1SpJQQN0IQoCQCAGRQRAIAJBADYCGAwBCyACQQg2AhggAiAGQRhsNgIcIAIgAygCADYCFAsgAkEIaiAKIAUgAkEUahB3IAIoAgwhBSACKAIIRQRAIAMgBzYCBCADIAU2AgAMAgsgBUGBgICAeEYNASAFRQ0AAAsQ6gEACyACQSBqJAAgBCgC8AEhCiAEKAL4AQUgBwtBGGwgCmoiAiALOgAAIAIgDjYABCACQQNqIAwtAAA6AAAgAiAELwGIAjsAASACIAQpA5gCNwAIIAJBEGogDSkDADcAAEEBIQsgBCAEKAL4AUEBaiIHNgL4ASABKAIIIQIgASgCBCEDDAILIAEgAkEBaiICNgIIIAIgA0cNAAsLIAMhAgsgBEHQAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAlQhAiAEKAJQIQNBFBAKIgZFDRsgBiADNgIMIAZBAjYCACAGIAI2AhALIAQoAvABIQMgBwRAIAMhAgNAIAIQtAEgAkEYaiECIAdBAWsiBw0ACwsgBCgC9AEEQCADECILQQEhCEEGCyEJIAEgAS0AGEEBajoAGCABKAIAIQUCQCABKAIIIgIgASgCBCIDSQRAA0ACQAJAAkACQAJAAkAgAiAFai0AACIHQQxNBEAgB0EJa0ECSQ0GDAELIAdBH00EQCAHQQ1HDQEMBgsgB0EgRg0FIAdBLEYNASAHQd0ARg0CCyAEQSBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIkIQUgBCgCICEDQRQQCiICRQ0hIAJBFjYCAAwHCyABIAJBAWoiAjYCCCACIANPDQIDQCACIAVqLQAAIgdBCWsiCkEXS0EBIAp0QZOAgARxRXINAiABIAJBAWoiAjYCCCACIANHDQALIAMhAgwCCyABIAJBAWo2AgggBCAPNwOoASAEIAY2AqQBIAQgCToAoAEgCEUNCiAEQQY6AIgBIAQgBjYCjAEMGwsgB0HdAEcNACAEQThqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI8IQUgBCgCOCEDQRQQCiICRQ0eIAJBFTYCAAwECyAEQTBqIAUgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAI0IQUgBCgCMCEDQRQQCiICRQ0dIAJBFjYCAAwDCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEEoaiAFIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCLCEFIAQoAighA0EUEAoiAkUNGiACQQI2AgALIAIgAzYCDCACIAU2AhAgBCACNgK4ASAEIA83A6gBIAQgBjYCpAEgBCAJOgCgASAIRQRAIARBBjoAiAEgBCACNgKMASAEQaABahC0AQwWCyAEQQY6AIgBIAQgBjYCjAEgAhDNAQwVCyABIAM2AgwgAUEFNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDBcLIARBGGogBiADIAMgAiACIANLGxC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEDQRQQCiIBRQ0XIAEgAzYCDCABQRg2AgAgACABNgIEIABBBjoAACABIAI2AhAMFgsgAUEUakEANgIAIAEgAkEBajYCCCAEQaABaiABIAFBDGoQECAEKAKgAUECRwRAIAQoAqQBIQMgBEEQaiAEKAKoASICEOABIAQoAhQhBSAEKAIQIAMgAhC+AiEDIAQgAjYClAEgBCAFNgKQASAEIAM2AowBIARBAzoAiAEMEwsgACAEKAKkATYCBCAAQQY6AAAMFQsgASACQQFqNgIIIARBoAFqIgIgAUEAEDQgBCkDoAFCA1IEQCAEQYgBaiACEKMBDBILIAAgBCgCqAE2AgQgAEEGOgAADBQLIARBmAFqIARBsAFqKQMANwMAIARBkAFqIARBqAFqKQMANwMAIAQgBCkDoAE3A4gBDBALIAVB8wBNBEAgBUHmAEYNBCAFQe4ARw0BIAEgAkEBajYCCCABQfCJwgBBAxBxIgENAiAEQQA6AIgBDBELIAVB9ABGDQIgBUH7AEYNBAsgBUEwa0H/AXFBCkkNBCAEQQhqIAYgAyADIAJBAWoiAiACIANLGxC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCEFQRQQCiICRQ0SIAIgBTYCDCACQQo2AgAgAiADNgIQDBALIABBBjoAACAAIAE2AgQMEAsgASACQQFqNgIIIAFB84nCAEEDEHEiAUUNAyAAQQY6AAAgACABNgIEDA8LIAEgAkEBajYCCCABQfaJwgBBBBBxIgFFDQogAEEGOgAAIAAgATYCBAwOCyABIAEtABhBAWsiBToAGCACQQFqIQIgBUH/AXFFDQggASACNgIIIARBAToAxAEgBCABNgLAASAEQcgBaiEHIwBBQGoiBSQAIARBwAFqIgooAgAiCCgCACEJAkACQAJAIAgoAggiAyAIQQRqKAIAIgJJBEADQAJAAkACQAJAAkACQAJAIAMgCWotAAAiBkEMTQRAIAZBCWtBAkkNBwwBCyAGQR9NBEAgBkENRw0BDAcLIAZBIEYNBiAGQSxGDQIgBkH9AEYNAQsgCi0ABEUNAgwDC0EAIQYgB0EANgIEDAkLQSwhBiAKLQAEDQEgCCADQQFqIgM2AgggBUEoaiAJIAIgAiACIANLBH8DQCADIAlqLQAAIgZBCWsiCkEXS0EBIAp0QZOAgARxRXINBCAIIANBAWoiAzYCCCACIANHDQALIAIFIAMLQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCLCEDIAUoAighBkEUEAoiAkUNBiACIAY2AgwgAkEFNgIAIAcgAjYCBCACIAM2AhBBASEGDAgLQQEhBiAFIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIEIQMgBSgCACEIQRQQCiICRQ0FIAIgCDYCDCACQQg2AgAgByACNgIEIAIgAzYCEAwHCyAKQQA6AAQLAkAgBkEiRwRAIAZB/QBGDQFBASEGIAVBCGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAgwhAyAFKAIIIQhBFBAKIgJFDQUgAiAINgIMIAJBETYCACAHIAI2AgQgAiADNgIQDAcLQQAhBiAIQRRqQQA2AgAgCCADQQFqNgIIIAVBNGogCCAIQQxqEBAgBSgCNEECRwRAIAUoAjghAyAFQRBqIAUoAjwiAhDgASAFKAIUIQggBSgCECADIAIQvgIhAyAHQQxqIAI2AgAgB0EIaiAINgIAIAcgAzYCBAwHCyAHIAUoAjg2AgRBASEGDAYLQQEhBiAFQRhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIcIQMgBSgCGCEIQRQQCiICRQ0DIAIgCDYCDCACQRU2AgAgByACNgIEIAIgAzYCEAwFCyAIIANBAWoiAzYCCCACIANHDQALIAIhAwtBASEGIAVBIGogCSACIAIgA0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiQhAyAFKAIgIQhBFBAKIgINAQsACyACIAg2AgwgAkEDNgIAIAcgAjYCBCACIAM2AhALIAcgBjYCACAFQUBrJAAgBCgCyAENAiAEKALMASICRQRAIARBADYCrAEgBEEANgKkASAEQQU6AKABDAcLIARB0AFqKQIAIQ8gBEEANgLgASAEQQA2AtgBIAQgDzcCjAIgBCACNgKIAiAEQZgCaiIDIARBwAFqEF4gBC0AmAJBBkYNAyAEQfABaiICIARB2AFqIARBiAJqIAMQDCAELQDwAUEGRwRAIAIQtAELIARB8AFqQQFyIQogBEGYAmpBAXIhCwNAAkAgBEGIAmohByMAQUBqIgUkACAEQcABaiIMKAIAIggoAgAhCQJAAkACQCAIKAIIIgMgCEEEaigCACICSQRAA0ACQAJAAkACQAJAAkACQCADIAlqLQAAIgZBDE0EQCAGQQlrQQJJDQcMAQsgBkEfTQRAIAZBDUcNAQwHCyAGQSBGDQYgBkEsRg0CIAZB/QBGDQELIAwtAARFDQIMAwtBACEGIAdBADYCBAwJC0EsIQYgDC0ABA0BIAggA0EBaiIDNgIIIAVBKGogCSACIAIgAiADSwR/A0AgAyAJai0AACIGQQlrIgxBF0tBASAMdEGTgIAEcUVyDQQgCCADQQFqIgM2AgggAiADRw0ACyACBSADC0EBaiIDIAIgA0kbELYBQbixwgAtAAAaIAUoAiwhAyAFKAIoIQZBFBAKIgJFDQYgAiAGNgIMIAJBBTYCACAHIAI2AgQgAiADNgIQQQEhBgwIC0EBIQYgBSAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCBCEDIAUoAgAhCEEUEAoiAkUNBSACIAg2AgwgAkEINgIAIAcgAjYCBCACIAM2AhAMBwsgDEEAOgAECwJAIAZBIkcEQCAGQf0ARg0BQQEhBiAFQQhqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIMIQMgBSgCCCEIQRQQCiICRQ0FIAIgCDYCDCACQRE2AgAgByACNgIEIAIgAzYCEAwHCyAIQRRqQQA2AgBBASEGIAggA0EBajYCCCAFQTRqIAggCEEMahAQIAUoAjRBAkYEQCAHIAUoAjg2AgQMBwsgBSgCOCEDIAVBEGogBSgCPCICEOABIAUoAhQhBiAFKAIQIAMgAhC+AiEDIAdBDGogAjYCACAHQQhqIAY2AgAgByADNgIEQQAhBgwGC0EBIQYgBUEYaiAJIAIgAiADQQFqIgMgAiADSRsQtgFBuLHCAC0AABogBSgCHCEDIAUoAhghCEEUEAoiAkUNAyACIAg2AgwgAkEVNgIAIAcgAjYCBCACIAM2AhAMBQsgCCADQQFqIgM2AgggAiADRw0ACyACIQMLQQEhBiAFQSBqIAkgAiACIANBAWoiAyACIANJGxC2AUG4scIALQAAGiAFKAIkIQMgBSgCICEIQRQQCiICDQELAAsgAiAINgIMIAJBAzYCACAHIAI2AgQgAiADNgIQCyAHIAY2AgAgBUFAayQAIAQoAowCIQICQAJAIAQoAogCBEAgAiEFDAELIAJFDQIgBCkCkAIhDyAEQZgCaiAEQcABahBeIAQtAJgCIgNBBkcNASAEKAKcAiEFIA+nRQ0AIAIQIgsgBCAFNgKkASAEQQY6AKABDAcLIAogCykAADcAACAKQQ9qIAtBD2opAAA3AAAgCkEIaiALQQhqKQAANwAAIAQgDzcC6AEgBCACNgLkASAEIAM6APABIARBmAJqIgIgBEHYAWogBEHkAWogBEHwAWoQDCAELQCYAkEGRg0BIAIQtAEMAQsLIARBowJqIARB4AFqKAIANgAAIAQgBCkC2AE3AJsCIARBqAFqIARBnwJqKQAANwAAIARBBToAoAEgBCAEKQCYAjcAoQEMBgsgBEGgAWoiAiABQQEQNCAEKQOgAUIDUgRAIARBiAFqIAIQowEMCgsgACAEKAKoATYCBCAAQQY6AAAMDAsgBEGBAjsBiAEMCQsgBCAEKALMATYCpAEgBEEGOgCgAQwCCyAEIAQoApwCNgKkASAEQQY6AKABIA+nRQ0AIAIQIgsgBEHYAWoQsgELQQEMAQtBAAshByABIAEtABhBAWo6ABggASgCACEGAkAgASgCCCICIAEoAgQiA0kEQANAAkACQAJAAkAgAiAGai0AACIFQQxNBEAgBUEJa0ECSQ0EDAELIAVBH00EQCAFQQ1HDQEMBAsgBUEgRg0DIAVBLEYNASAFQf0ARg0CCyAEQegAaiAGIAMgAyACQQFqIgIgAiADSxsQtgFBuLHCAC0AABogBCgCbCEFIAQoAmghA0EUEAoiAkUNDCACQRY2AgAMBQsgBEH4AGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnwhBSAEKAJ4IQNBFBAKIgJFDQsgAkEVNgIADAQLIAEgAkEBajYCCCAHBEAgBCAEKAKkATYCjAEgBEEGOgCIAQwHCyAEQZgBaiAEQbABaikDADcDACAEQZABaiAEQagBaikDADcDACAEIAQpA6ABNwOIAQwGCyABIAJBAWoiAjYCCCACIANHDQALIAMhAgsgBEHwAGogBiADIAMgAkEBaiICIAIgA0sbELYBQbixwgAtAAAaIAQoAnQhBSAEKAJwIQNBFBAKIgJFDQcgAkEDNgIACyACIAM2AgwgAiAFNgIQIAQgAjYCuAEgB0UEQCAEQQY6AIgBIAQgAjYCjAEgBEGgAWoQtAEMAwsgBCAEKAKkATYCjAEgBEEGOgCIASACEM0BDAILIARB4ABqIAYgAyADIAIgAiADSxsQtgFBuLHCAC0AABogBCgCZCECIAQoAmAhA0EUEAoiAUUNBSABIAM2AgwgAUEYNgIAIAAgATYCBCAAQQY6AAAgASACNgIQDAQLIARBATsBiAEMAQsgBC0AiAFBBkcNACAEKAKMASECDAELIAAgBCkDiAE3AwAgAEEQaiAEQZgBaikDADcDACAAQQhqIARBkAFqKQMANwMADAELIwBBEGsiAyQAAkAgAigCDARAIAIhAQwBCyADQQhqIAJBCGooAgA2AgAgAyACKQIANwMAIAEgAxC/ASEBIAIQIgsgA0EQaiQAIABBBjoAACAAIAE2AgQLIARBsAJqJAAPCwALpB8CCH8BfgJAAkACQAJAAkAgAEH1AU8EQCAAQc3/e08NBSAAQQtqIgBBeHEhBEHwsMIAKAIAIghFDQRBACAEayEBAn9BACAEQYACSQ0AGkEfIARB////B0sNABogBEEGIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiB0ECdEHUrcIAaigCACICRQRAQQAhAAwCC0EAIQAgBEEZIAdBAXZrQR9xQQAgB0EfRxt0IQYDQAJAIAIoAgRBeHEiBSAESQ0AIAUgBGsiBSABTw0AIAIhAyAFIgENAEEAIQEgAiEADAQLIAJBFGooAgAiBSAAIAUgAiAGQR12QQRxakEQaigCACICRxsgACAFGyEAIAZBAXQhBiACDQALDAELQeywwgAoAgAiAUEQIABBC2pBeHEgAEELSRsiBEEDdiICdiIAQQNxBEACQCAAQX9zQQFxIAJqIgBBA3QiBEHsrsIAaigCACICQQhqIgUoAgAiAyAEQeSuwgBqIgRHBEAgAyAENgIMIAQgAzYCCAwBC0HssMIAIAFBfiAAd3E2AgALIAIgAEEDdCIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEIAUPCyAEQfSwwgAoAgBNDQMCQAJAAkACQAJAAkAgAEUEQEHwsMIAKAIAIgBFDQogAGhBAnRB1K3CAGooAgAiBigCBEF4cSAEayECAkAgBigCECIARQRAIAZBFGooAgAiAEUNAQsDQCAAKAIEQXhxIARrIgUgAkkhAyAFIAIgAxshAiAAIAYgAxshBiAAKAIQIgEEfyABBSAAQRRqKAIACyIADQALCyAGEF8gAkEQSQ0CIAYgBEEDcjYCBCAEIAZqIgQgAkEBcjYCBCACIARqIAI2AgBB9LDCACgCACIDDQEMBQsCQEECIAJBH3EiAnQiA0EAIANrciAAIAJ0cWgiAkEDdCIFQeyuwgBqKAIAIgBBCGoiBigCACIDIAVB5K7CAGoiBUcEQCADIAU2AgwgBSADNgIIDAELQeywwgAgAUF+IAJ3cTYCAAsgACAEQQNyNgIEIAAgBGoiBSACQQN0IgEgBGsiAkEBcjYCBCAAIAFqIAI2AgBB9LDCACgCACIDDQIMAwsgA0F4cUHkrsIAaiEAQfywwgAoAgAhAQJ/QeywwgAoAgAiBUEBIANBA3Z0IgNxRQRAQeywwgAgAyAFcjYCACAADAELIAAoAggLIQMgACABNgIIIAMgATYCDCABIAA2AgwgASADNgIIDAMLIAYgAiAEaiIAQQNyNgIEIAAgBmoiACAAKAIEQQFyNgIEDAMLIANBeHFB5K7CAGohAEH8sMIAKAIAIQECf0HssMIAKAIAIgRBASADQQN2dCIDcUUEQEHssMIAIAMgBHI2AgAgAAwBCyAAKAIICyEEIAAgATYCCCAEIAE2AgwgASAANgIMIAEgBDYCCAtB/LDCACAFNgIAQfSwwgAgAjYCACAGDwtB/LDCACAENgIAQfSwwgAgAjYCAAsgBkEIag8LIAAgA3JFBEBBACEDIAhBAiAHdCIAQQAgAGtycSIARQ0DIABoQQJ0QdStwgBqKAIAIQALIABFDQELA0AgACADIAAoAgRBeHEiBSAEayIGIAFJIgcbIQggACgCECICRQRAIABBFGooAgAhAgsgAyAIIAQgBUsiABshAyABIAYgASAHGyAAGyEBIAIiAA0ACwsgA0UNACAEQfSwwgAoAgAiAE0gASAAIARrT3ENACADEF8CQCABQRBPBEAgAyAEQQNyNgIEIAMgBGoiAiABQQFyNgIEIAEgAmogATYCACABQYACTwRAIAIgARBgDAILIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiBEEBIAFBA3Z0IgFxRQRAQeywwgAgASAEcjYCACAADAELIAAoAggLIQEgACACNgIIIAEgAjYCDCACIAA2AgwgAiABNgIIDAELIAMgASAEaiIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIECyADQQhqDwsCQAJAAkACQAJAAkACQCAEQfSwwgAoAgAiAUsEQCAEQfiwwgAoAgAiAE8EQEEAIQEgBEGvgARqIgBBEHZAACICQX9GIgUNCSACQRB0IgNFDQlBhLHCAEEAIABBgIB8cSAFGyIGQYSxwgAoAgBqIgA2AgBBiLHCAEGIscIAKAIAIgEgACAAIAFJGzYCAAJAAkBBgLHCACgCACIFBEBB1K7CACEAA0AgACgCACIBIAAoAgQiAmogA0YNAiAAKAIIIgANAAsMAgtBkLHCACgCACIAQQAgACADTRtFBEBBkLHCACADNgIAC0GUscIAQf8fNgIAQdiuwgAgBjYCAEHUrsIAIAM2AgBB8K7CAEHkrsIANgIAQfiuwgBB7K7CADYCAEHsrsIAQeSuwgA2AgBBgK/CAEH0rsIANgIAQfSuwgBB7K7CADYCAEGIr8IAQfyuwgA2AgBB/K7CAEH0rsIANgIAQZCvwgBBhK/CADYCAEGEr8IAQfyuwgA2AgBBmK/CAEGMr8IANgIAQYyvwgBBhK/CADYCAEGgr8IAQZSvwgA2AgBBlK/CAEGMr8IANgIAQaivwgBBnK/CADYCAEGcr8IAQZSvwgA2AgBB4K7CAEEANgIAQbCvwgBBpK/CADYCAEGkr8IAQZyvwgA2AgBBrK/CAEGkr8IANgIAQbivwgBBrK/CADYCAEG0r8IAQayvwgA2AgBBwK/CAEG0r8IANgIAQbyvwgBBtK/CADYCAEHIr8IAQbyvwgA2AgBBxK/CAEG8r8IANgIAQdCvwgBBxK/CADYCAEHMr8IAQcSvwgA2AgBB2K/CAEHMr8IANgIAQdSvwgBBzK/CADYCAEHgr8IAQdSvwgA2AgBB3K/CAEHUr8IANgIAQeivwgBB3K/CADYCAEHkr8IAQdyvwgA2AgBB8K/CAEHkr8IANgIAQfivwgBB7K/CADYCAEHsr8IAQeSvwgA2AgBBgLDCAEH0r8IANgIAQfSvwgBB7K/CADYCAEGIsMIAQfyvwgA2AgBB/K/CAEH0r8IANgIAQZCwwgBBhLDCADYCAEGEsMIAQfyvwgA2AgBBmLDCAEGMsMIANgIAQYywwgBBhLDCADYCAEGgsMIAQZSwwgA2AgBBlLDCAEGMsMIANgIAQaiwwgBBnLDCADYCAEGcsMIAQZSwwgA2AgBBsLDCAEGksMIANgIAQaSwwgBBnLDCADYCAEG4sMIAQaywwgA2AgBBrLDCAEGksMIANgIAQcCwwgBBtLDCADYCAEG0sMIAQaywwgA2AgBByLDCAEG8sMIANgIAQbywwgBBtLDCADYCAEHQsMIAQcSwwgA2AgBBxLDCAEG8sMIANgIAQdiwwgBBzLDCADYCAEHMsMIAQcSwwgA2AgBB4LDCAEHUsMIANgIAQdSwwgBBzLDCADYCAEHosMIAQdywwgA2AgBB3LDCAEHUsMIANgIAQYCxwgAgAzYCAEHksMIAQdywwgA2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMCgsgACgCDCABIAVLcg0AIAMgBUsNAwtBkLHCAEGQscIAKAIAIgAgAyAAIANJGzYCACADIAZqIQJB1K7CACEAAkACQANAIAIgACgCAEcEQCAAKAIIIgANAQwCCwsgACgCDEUNAQtB1K7CACEAA0ACQCAFIAAoAgAiAU8EQCABIAAoAgRqIgIgBUsNAQsgACgCCCEADAELC0GAscIAIAM2AgBB+LDCACAGQShrIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAgBSACQSBrQXhxQQhrIgAgACAFQRBqSRsiAUEbNgIEQdSuwgApAgAhCSABQRBqQdyuwgApAgA3AgAgASAJNwIIQdiuwgAgBjYCAEHUrsIAIAM2AgBB3K7CACABQQhqNgIAQeCuwgBBADYCACABQRxqIQADQCAAQQc2AgAgAEEEaiIAIAJJDQALIAEgBUYNCSABIAEoAgRBfnE2AgQgBSABIAVrIgBBAXI2AgQgASAANgIAIABBgAJPBEAgBSAAEGAMCgsgAEF4cUHkrsIAaiEBAn9B7LDCACgCACICQQEgAEEDdnQiAHFFBEBB7LDCACAAIAJyNgIAIAEMAQsgASgCCAshACABIAU2AgggACAFNgIMIAUgATYCDCAFIAA2AggMCQsgACADNgIAIAAgACgCBCAGajYCBCADIARBA3I2AgQgAiADIARqIgVrIQEgAkGAscIAKAIARg0DIAJB/LDCACgCAEYNBCACKAIEIgRBA3FBAUYEQAJAIARBeHEiAEGAAk8EQCACEF8MAQsgAkEMaigCACIGIAJBCGooAgAiB0cEQCAHIAY2AgwgBiAHNgIIDAELQeywwgBB7LDCACgCAEF+IARBA3Z3cTYCAAsgACACaiICKAIEIQQgACABaiEBCyACIARBfnE2AgQgBSABQQFyNgIEIAEgBWogATYCACABQYACTwRAIAUgARBgDAgLIAFBeHFB5K7CAGohAAJ/QeywwgAoAgAiAkEBIAFBA3Z0IgFxRQRAQeywwgAgASACcjYCACAADAELIAAoAggLIQEgACAFNgIIIAEgBTYCDCAFIAA2AgwgBSABNgIIDAcLQfiwwgAgACAEayIBNgIAQYCxwgBBgLHCACgCACIAIARqIgI2AgAgAiABQQFyNgIEIAAgBEEDcjYCBCAAQQhqIQEMCAtB/LDCACgCACEAIAEgBGsiAkEQSQ0DQfSwwgAgAjYCAEH8sMIAIAAgBGoiAzYCACADIAJBAXI2AgQgACABaiACNgIAIAAgBEEDcjYCBAwECyAAIAIgBmo2AgRBgLHCAEGAscIAKAIAIgBBD2pBeHEiAUEIayICNgIAQfiwwgBB+LDCACgCACAGaiIDIAAgAWtqQQhqIgE2AgAgAiABQQFyNgIEIAAgA2pBKDYCBEGMscIAQYCAgAE2AgAMBQtBgLHCACAFNgIAQfiwwgBB+LDCACgCACABaiIANgIAIAUgAEEBcjYCBAwDC0H8sMIAIAU2AgBB9LDCAEH0sMIAKAIAIAFqIgA2AgAgBSAAQQFyNgIEIAAgBWogADYCAAwCC0H8sMIAQQA2AgBB9LDCAEEANgIAIAAgAUEDcjYCBCAAIAFqIgEgASgCBEEBcjYCBAsgAEEIag8LIANBCGoPC0EAIQFB+LDCACgCACIAIARNDQBB+LDCACAAIARrIgE2AgBBgLHCAEGAscIAKAIAIgAgBGoiAjYCACACIAFBAXI2AgQgACAEQQNyNgIEIABBCGoPCyABC9AWAhx/AX4jAEHwAGsiAyQAIANBAEHAABC7AiEDIAEgAkEGdGohHiAAKAIAIRkgACgCBCEaIAAoAgghGyAAKAIMIRwgACgCECEdA0BBACECA0AgAiADaiABIAJqKAAAIgRBGHQgBEGA/gNxQQh0ciAEQQh2QYD+A3EgBEEYdnJyNgIAIAJBBGoiAkHAAEcNAAsgAygCMCEJIAMoAjQhAiADKAI4IQQgAygCPCEQIAMoAiAhBSADKAIkIQogAygCKCELIAMoAiwhFSADKAIQIQwgAygCFCEWIAMoAhghDSADKAIcIREgAygCACEIIAMoAgQhFyADKAIIIQ4gAygCDCEPIAMgGjYCVCADIBs2AlggAyAcNgJcIAMgGTYCUCADIA82AmwgAyAONgJoIAMgFzYCZCADIAggHWo2AmAgA0FAayISIANB0ABqIhMgA0HgAGoiFEEAECQgAygCQCEGIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBjYCUCADIBE2AmwgAyANNgJoIAMgFjYCZCADIAwgGUEed2o2AmAgEiATIBRBABAkIAMoAkAhByADKQJEIR8gAyADKAJMNgJcIAMgHzcCVCADIAc2AlAgAyAVNgJsIAMgCzYCaCADIAo2AmQgAyAFIAZBHndqNgJgIBIgEyAUQQAQJCADKAJAIQYgAykCRCEfIAMgAygCTDYCXCADIB83AlQgAyAGNgJQIAMgEDYCbCADIAQ2AmggAyACNgJkIAMgCSAHQR53ajYCYCASIBMgFEEAECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAIgBSAIIA5zc3NBAXciCCAGQR53ajYCYCADIBUgDyAWc3MgCHNBAXciBjYCbCADIBAgCyAMIA5zc3NBAXciDjYCaCADIAQgCiAPIBdzc3NBAXciDzYCZCASIBMgFEEAECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAkgDCANc3MgD3NBAXciDCAHQR53ajYCYCADIAQgBSANc3MgBnNBAXciDTYCaCADIBAgCiARc3MgDHNBAXciFzYCbCADIAIgESAWc3MgDnNBAXciFjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgCHMgFnNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgF3NBAXciCzYCaCADIAIgFXMgBnMgBXNBAXciETYCbCADIAogFXMgD3MgDXNBAXciCjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgDHMgCnNBAXciCSAHQR53ajYCYCADIAQgCHMgDXMgEXNBAXciBDYCaCADIA8gEHMgF3MgCXNBAXciFTYCbCADIAIgEHMgFnMgC3NBAXciAjYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAggDnMgBXMgAnNBAXciECAYQR53ajYCYCADIAYgFnMgEXMgEHNBAXciCDYCbCADIAwgDnMgC3MgFXNBAXciDjYCaCADIAYgD3MgCnMgBHNBAXciBjYCZCASIBMgFEEBECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgDXMgCXMgBnNBAXciDyAHQR53ajYCYCADIAUgDXMgBHMgCHNBAXciDDYCaCADIAogF3MgFXMgD3NBAXciDTYCbCADIBYgF3MgAnMgDnNBAXciFzYCZCASIBMgFEEBECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgF3NBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDXNBAXciCzYCaCADIAIgEXMgCHMgBXNBAXciFjYCbCADIAogEXMgBnMgDHNBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgD3MgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgDHMgFnNBAXciBDYCaCADIAYgFXMgDXMgCXNBAXciETYCbCADIAIgFXMgF3MgC3NBAXciAjYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIAggF3MgFnMgEHNBAXciFTYCbCADIA4gD3MgC3MgEXNBAXciDjYCaCADIAYgCHMgCnMgBHNBAXciCDYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAwgD3MgCXMgCHNBAXciBiAHQR53ajYCYCADIAUgDHMgBHMgFXNBAXciDzYCaCADIAogDXMgEXMgBnNBAXciDDYCbCADIA0gF3MgAnMgDnNBAXciDTYCZCASIBMgFEECECQgAygCQCEHIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBzYCUCADIAUgC3MgEHMgDXNBAXciBSAYQR53ajYCYCADIAkgC3MgDnMgDHNBAXciCzYCaCADIAIgFnMgFXMgBXNBAXciFzYCbCADIAogFnMgCHMgD3NBAXciCjYCZCASIBMgFEECECQgAygCQCEYIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgGDYCUCADIAQgCXMgBnMgCnNBAXciCSAHQR53ajYCYCADIAQgEHMgD3MgF3NBAXciBDYCaCADIAggEXMgDHMgCXNBAXciFjYCbCADIAIgEXMgDXMgC3NBAXciAjYCZCASIBMgFEEDECQgAygCQCERIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgETYCUCADIA4gEHMgBXMgAnNBAXciECAYQR53ajYCYCADIA0gFXMgF3MgEHNBAXciBzYCbCADIAYgDnMgC3MgFnNBAXciDjYCaCADIAggFXMgCnMgBHNBAXciFTYCZCASIBMgFEEDECQgAygCQCEIIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgCDYCUCADIAYgD3MgCXMgFXNBAXciBiARQR53ajYCYCADIAUgD3MgBHMgB3NBAXciDzYCaCADIAogDHMgFnMgBnNBAXciETYCbCADIAwgDXMgAnMgDnNBAXciDDYCZCASIBMgFEEDECQgAygCQCENIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgDTYCUCADIAUgC3MgEHMgDHNBAXciBSAIQR53ajYCYCADIAkgC3MgDnMgEXNBAXciCzYCaCADIAIgF3MgB3MgBXNBAXciCDYCbCADIAogF3MgFXMgD3NBAXciCjYCZCASIBMgFEEDECQgAygCQCEFIAMpAkQhHyADIAMoAkw2AlwgAyAfNwJUIAMgBTYCUCADIAQgCXMgBnMgCnNBAXciCSAVIBZzIBFzc0EBdzYCbCADIAQgEHMgD3MgCHNBAXc2AmggAyACIBZzIAxzIAtzQQF3NgJkIAMgDUEedyAJajYCYCASIBMgFEEDECQgBUEedyAdaiEdIAMoAkwgHGohHCADKAJIIBtqIRsgAygCRCAaaiEaIAMoAkAgGWohGSABQUBrIgEgHkcNAAsgACAdNgIQIAAgHDYCDCAAIBs2AgggACAaNgIEIAAgGTYCACADQfAAaiQAC9cTAhR/AX4jAEHAAWsiBCQAAkACQAJAAkACQAJAAkACQAJAAkAgASgCACIHBEAgAigCCCEJIAIoAgAhDCABKAIEIQgCQANAIAdBjAJqIQUgBy8BkgMiCkEMbCELQX8hBgJAAkADQCALRQRAIAohBgwCCyAFKAIIIQ0gBSgCACEOIAZBAWohBiALQQxrIQsgBUEMaiEFQX8gDCAOIAkgDSAJIA1JGxC8AiIOIAkgDWsgDhsiDUEARyANQQBIGyINQQFGDQALIA1B/wFxRQ0BCyAIRQ0CIAhBAWshCCAHIAZBAnRqQZgDaigCACEHDAELCyACKAIERQ0JIAwQIgwJCyACKQIEIhinIQIgDA0BIAEhBiACIQcMCAsgAikCBCIYpyEHIAIoAgAiBkUEQCABIQYMCAtBuLHCAC0AABpBmAMQCiICRQ0CIAJBATsBkgMgAkEANgKIAiACIAY2AowCIAJBkAJqIAetIBhCgICAgHCDhDcCACACIAMpAwA3AwAgAkEIaiADQQhqKQMANwMAIAJBEGogA0EQaikDADcDACABQoCAgIAQNwIEIAEgAjYCAAwBCyACrSAYQoCAgIBwg4QhGAJAAkACQCAHLwGSAyIFQQtPBEBBASEIQQQhBQJAIAZBBUkNAAJAAkAgBiIFQQVrDgICAQALIAZBB2shBkEAIQhBBiEFDAELQQAhCEEFIQVBACEGC0G4scIALQAAGkGYAxAKIgpFDQUgCkEAOwGSAyAKQQA2AogCIARBkAFqIg8gB0GMAmoiDSAFQQxsaiILQQhqKAIANgIAIARBMGoiECAHIAVBGGxqIglBCWopAAA3AwAgBEE3aiIRIAlBEGopAAA3AAAgCiAHLwGSAyIOIAVBf3NqIgI7AZIDIAQgCykCADcDiAEgBCAJKQABNwMoIAJBDE8NBiAOIAVBAWoiC2sgAkcNDCAJLQAAIQkgCkGMAmogDSALQQxsaiACQQxsEL4CGiAKIAcgC0EYbGogAkEYbBC+AiECIAcgBTsBkgMgBEEIaiAPKAIANgIAIARB6ABqIBApAwA3AwAgBEHvAGogESkAADcAACAEIAQpA4gBNwMAIAQgBCkDKDcDYCAHIAIgCBsiBUGMAmoiDiAGQQxsaiEIIAZBAWoiCyAFLwGSAyINTQ0BIAggGDcCBCAIIAw2AgAMAgsgB0GMAmoiCCAGQQxsaiECAkAgBSAGQQFqIgpJBEAgAiAYNwIEIAIgDDYCAAwBCyAIIApBDGxqIAIgBSAGayIIQQxsEL0CIAIgGDcCBCACIAw2AgAgByAKQRhsaiAHIAZBGGxqIAhBGGwQvQILIAcgBkEYbGoiAkEQaiADQRBqKQMANwMAIAIgAykDADcDACACQQhqIANBCGopAwA3AwAgByAFQQFqOwGSAwwCCyAOIAtBDGxqIAggDSAGayIOQQxsEL0CIAggGDcCBCAIIAw2AgAgBSALQRhsaiAFIAZBGGxqIA5BGGwQvQILIAUgBkEYbGoiBkEQaiADQRBqKQMANwMAIAYgAykDADcDACAEQbgBaiIMIARBCGopAwA3AwAgBEGgAWoiCCAEQegAaiILKQMANwMAIARBpwFqIg4gBEHvAGopAAA3AAAgBkEIaiADQQhqKQMANwMAIAUgDUEBajsBkgMgBCAEKQMANwOwASAEIAQpA2A3A5gBIAlBBkYNACALIAwpAwA3AwAgBEH5AGogCCkDADcAACAEQYABaiAOKQAANwAAIAQgBCkDsAE3A2AgBCAJOgBwIAQgBCkDmAE3AHECQAJAIAcoAogCIgVFBEBBACEMDAELIARB8QBqIQsgBEHwAGohEyAEQTdqIQhBACEMA0AgBy8BkAMhAyAFIgcvAZIDIhRBC0kNAkEBIQ1BBCEFAkAgA0EFSQ0AAkACQCADIgVBBWsOAgIBAAsgA0EHayEDQQAhDUEGIQUMAQtBACENQQUhBUEAIQMLQbixwgAtAAAaQcgDEAoiCkUNBSAKQQA7AZIDIApBADYCiAIgBEGQAWoiDiAHQYwCaiIQIAVBDGxqIg9BCGooAgA2AgAgBEEwaiISIAcgBUEYbGoiCUEJaikAADcDACAIIAlBEGopAAA3AAAgCiAHLwGSAyIRIAVBf3NqIgY7AZIDIAQgDykCADcDiAEgBCAJKQABNwMoIAZBDE8NByARIAVBAWoiD2sgBkcNDCAJLQAAIREgCkGMAmogECAPQQxsaiAGQQxsEL4CGiAKIAcgD0EYbGogBkEYbBC+AiEGIAcgBTsBkgMgBEG4AWoiFSAOKAIANgIAIARBoAFqIhYgEikDADcDACAEQacBaiIXIAgpAAA3AAAgBCAEKQOIATcDsAEgBCAEKQMoNwOYASAGLwGSAyIJQQFqIRAgCUEMTw0IIBQgBWsiBSAQRw0MIAxBAWohDCAGQZgDaiAHIA9BAnRqQZgDaiAFQQJ0EL4CIQ9BACEFA0ACQCAPIAVBAnRqKAIAIhAgBTsBkAMgECAGNgKIAiAFIAlPDQAgBSAFIAlJaiIFIAlNDQELCyAOIBUpAwA3AwAgEiAWKQMANwMAIAggFykAADcAACAEIAQpA7ABNwOIASAEIAQpA5gBNwMoIAcgBiANGyADIARB4ABqIBMgAhBKIARBIGoiAiAOKQMANwMAIARBCGoiAyASKQMANwMAIARBD2oiBSAIKQAANwAAIAQgBCkDiAE3AxggBCAEKQMoNwMAIBFBBkYNAyALIAQpAwA3AAAgBEHoAGogAikDADcDACALQQhqIAMpAwA3AAAgC0EPaiAFKQAANwAAIAQgBCkDGDcDYCAEIBE6AHAgBiECIAcoAogCIgUNAAsLIARBKGoiBiAEQeAAakEoEL4CGiAEIAw2AlwgBCAKNgJYIAQgDDYCVCAEIAc2AlAgASgCACIDRQ0HQbixwgAtAAAaIAEoAgQhB0HIAxAKIgJFDQMgAiADNgKYAyACQQA7AZIDIAJBADYCiAIgASACNgIAIANBADsBkAMgAyACNgKIAiABIAdBAWoiAzYCBCACIAMgBiAEQThqIAogDBCLAQwBCyAHIAMgBEHgAGogEyACEEoLIAEgASgCCEEBajYCCAsgAEEGOgAADAYLAAsgAkELQeTpwQAQuAEACyAGQQtB5OnBABC4AQALIBBBDEH06cEAELgBAAtBgJfCAEErQcDnwQAQ3gEACyAAIAcgBkEYbGoiASkDADcDACABIAMpAwA3AwAgAEEQaiABQRBqIgIpAwA3AwAgAEEIaiABQQhqIgApAwA3AwAgACADQQhqKQMANwMAIAIgA0EQaikDADcDAAsgBEHAAWokAA8LQazpwQBBKEHU6cEAEN4BAAujEQEZfyMAQUBqIhkkACACBEAgASACQQZ0aiEaIAAoAgwhByAAKAIIIQYgACgCBCEEIAAoAgAhCANAQQAhAiAZQQBBwAAQuwIhAyABQUBrA0AgAiADaiABIAJqKAAANgIAIAJBBGoiAkHAAEcNAAsgBCADKAIIIgkgAygCGCIKIAMoAigiCyADKAI4IgwgAygCPCINIAMoAgwiDiADKAIcIg8gAygCLCIQIA8gDiANIBAgDCALIAogBiAJaiAHIAMoAgQiEWogAygCACISIAggBCAGcWogByAEQX9zcWpqQYi31cQCa0EHdyAEaiIBIARxaiAGIAFBf3NxakGqkeG5AWtBDHcgAWoiAiABcWogBCACQX9zcWpB2+GBoQJqQRF3IAJqIgVqIAMoAhQiEyACaiABIAMoAhAiFGogBCAOaiACIAVxaiABIAVBf3NxakGS4ojyA2tBFncgBWoiASAFcWogAiABQX9zcWpB0eCP1ABrQQd3IAFqIgIgAXFqIAUgAkF/c3FqQaqMn7wEakEMdyACaiIEIAJxaiABIARBf3NxakHt876+BWtBEXcgBGoiBWogAygCJCIVIARqIAMoAiAiFiACaiABIA9qIAQgBXFqIAIgBUF/c3FqQf/V5RVrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQdixgswGakEHdyABaiICIAFxaiAFIAJBf3NxakHRkOylB2tBDHcgAmoiBCACcWogASAEQX9zcWpBz8gCa0ERdyAEaiIFaiADKAI0IhcgBGogAygCMCIYIAJqIAEgEGogBCAFcWogAiAFQX9zcWpBwtCMtQdrQRZ3IAVqIgEgBXFqIAQgAUF/c3FqQaKiwNwGakEHdyABaiICIAFxaiAFIAJBf3NxakHtnJ4Ta0EMdyACaiIDIAJxaiABIANBf3MiBXFqQfL4mswFa0ERdyADaiIEaiACIBFqIAQgBXFqIAEgDWogAyAEcWogAiAEQX9zIgVxakGhkNDNBGpBFncgBGoiASADcWpBnrWHzwBrQQV3IAFqIgIgAUF/c3FqIAMgCmogASAFcWogAiAEcWpBwJn9/QNrQQl3IAJqIgMgAXFqQdG0+bICakEOdyADaiIEaiACIBNqIAQgA0F/c3FqIAEgEmogAyACQX9zcWogAiAEcWpB1vCksgFrQRR3IARqIgEgA3FqQaPfw84Ca0EFdyABaiICIAFBf3NxaiADIAtqIAEgBEF/c3FqIAIgBHFqQdOokBJqQQl3IAJqIgMgAXFqQf+y+LoCa0EOdyADaiIEaiACIBVqIAQgA0F/c3FqIAEgFGogAyACQX9zcWogAiAEcWpBuIiwwQFrQRR3IARqIgEgA3FqQeabh48CakEFdyABaiICIAFBf3NxaiADIAxqIAEgBEF/c3FqIAIgBHFqQarwo+YDa0EJdyACaiIDIAFxakH55KvZAGtBDncgA2oiBGogAiAXaiAEIANBf3NxaiABIBZqIAMgAkF/c3FqIAIgBHFqQe2p6KoEakEUdyAEaiIBIANxakH7rfCwBWtBBXcgAWoiAiABQX9zcWogAyAJaiABIARBf3NxaiACIARxakGIuMEYa0EJdyACaiIDIAFxakHZhby7BmpBDncgA2oiBGogAyAWaiACIBNqIAEgGGogAyACQX9zcWogAiAEcWpB9ubWlgdrQRR3IARqIgIgBHMiASADc2pBvo0Xa0EEdyACaiIDIAFzakH/krjEB2tBC3cgA2oiBCADcyIFIAJzakGiwvXsBmpBEHcgBGoiAWogAyARaiACIAxqIAEgBXNqQfSP6xBrQRd3IAFqIgIgASAEc3NqQbyrhNoFa0EEdyACaiIDIAJzIAQgFGogASACcyADc2pBqZ/73gRqQQt3IANqIgFzakGg6ZLKAGtBEHcgAWoiBGogAyAXaiACIAtqIAEgA3MgBHNqQZCHgYoEa0EXdyAEaiICIAEgBHNzakHG/e3EAmpBBHcgAmoiAyACcyABIBJqIAIgBHMgA3NqQYaw+6oBa0ELdyADaiIBc2pB+57D2AJrQRB3IAFqIgRqIAMgFWogAiAKaiABIANzIARzakGFuqAkakEXdyAEaiICIAEgBHNzakHH36yxAmtBBHcgAmoiAyACcyABIBhqIAIgBHMgA3NqQZvMkckBa0ELdyADaiIBc2pB+PmJ/QFqQRB3IAFqIgRqIAEgD2ogAyASaiACIAlqIAEgA3MgBHNqQZvTztoDa0EXdyAEaiICIAFBf3NyIARzakG8u9veAGtBBncgAmoiASAEQX9zciACc2pBl/+rmQRqQQp3IAFqIgMgAkF/c3IgAXNqQdm4r6MFa0EPdyADaiIEaiADIA5qIAEgGGogAiATaiAEIAFBf3NyIANzakHHv7Eba0EVdyAEaiIBIANBf3NyIARzakHDs+2qBmpBBncgAWoiAiAEQX9zciABc2pB7ubMhwdrQQp3IAJqIgMgAUF/c3IgAnNqQYOXwABrQQ93IANqIgRqIAMgDWogAiAWaiABIBFqIAQgAkF/c3IgA3NqQa/E7tMHa0EVdyAEaiIBIANBf3NyIARzakHP/KH9BmpBBncgAWoiAiAEQX9zciABc2pBoLLMDmtBCncgAmoiAyABQX9zciACc2pB7Pn65wVrQQ93IANqIgRqIAMgEGogAiAUaiABIBdqIAQgAkF/c3IgA3NqQaGjoPAEakEVdyAEaiIBIANBf3NyIARzakH+grLFAGtBBncgAWoiAiAEQX9zciABc2pBy5uUlgRrQQp3IAJqIgMgAUF/c3IgAnNqQbul39YCakEPdyADaiIFaiABIBVqIAUgAkF/c3IgA3NqQe/Y5KMBa0EVd2ohBCAFIAZqIQYgAyAHaiEHIAIgCGohCCIBIBpHDQALIAAgBzYCDCAAIAY2AgggACAENgIEIAAgCDYCAAsgGUFAayQAC5cRAQV/IwBB0ABrIgIkAAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAtAABBAWsOFwECAwQFBgcICQoLDA0ODxAREhcTFBUWAAsgAkE4akIANwIAIAJBATYCMCACQYTKwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwXCyACQThqQgA3AgAgAkEBNgIwIAJBnMrAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDBYLIAJBOGpCADcCACACQQE2AjAgAkG0ysAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMFQsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAjYCMCACQfDKwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDBQLIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJBjMvAADYCLCACQRQ2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDBMLIAJBOGpCADcCACACQQE2AjAgAkGwy8AANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMEgsgAiAAQQFqNgIkIAJBOGpCATcCACACQQE2AjAgAkHQy8AANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEQsgAiAAQQFqNgIkIAJBOGpCATcCACACQQI2AjAgAkGAzMAANgIsIAJBEDYCECABQRhqKAIAIQAgAiACQQxqNgI0IAIgAkEkajYCDCABKAIUIAAgAkEsahAvIQMMEAsgAkE4akIANwIAIAJBATYCMCACQaDMwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwPCyACIABBAWo2AiQgAkE4akIBNwIAIAJBATYCMCACQcTMwAA2AiwgAkEVNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIMIAEoAhQgACACQSxqEC8hAwwOCyACQThqQgA3AgAgAkEBNgIwIAJB6MzAADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDA0LIAJBOGpCADcCACACQQE2AjAgAkGIzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMDAsgAkE4akIANwIAIAJBATYCMCACQaDNwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwLCyACQThqQgA3AgAgAkEBNgIwIAJByM3AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAoLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB3M3AADYCLCACQRY2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAkLIAJBOGpCADcCACACQQE2AjAgAkHkzcAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMCAsgAkE4akIANwIAIAJBATYCMCACQZzOwAA2AiwgAkGMrMIANgI0IAEoAhQgAUEYaigCACACQSxqEC8hAwwHCyACQThqQgA3AgAgAkEBNgIwIAJBtM7AADYCLCACQYyswgA2AjQgASgCFCABQRhqKAIAIAJBLGoQLyEDDAYLIAJBOGpCADcCACACQQE2AjAgAkHQzsAANgIsIAJBjKzCADYCNCABKAIUIAFBGGooAgAgAkEsahAvIQMMBQsgAiAAQQFqNgJMIAJBIGpBATYCACACQRhqQQE2AgAgAkEXNgIoIAJBATYCECACQczPwAA2AgwgAiACQcwAajYCJCACQQM6AEggAkEINgJEIAJCIDcCPCACQoCAgIAgNwI0IAJBAjYCLCABQRhqKAIAIQAgAiACQSxqNgIcIAIgAkEkajYCFCABKAIUIAAgAkEMahAvIQMMBAsgAiAAQQRqNgJMIAIgAEEIajYCJCACQThqQgI3AgAgAkEYakETNgIAIAJBAzYCMCACQZzQwAA2AiwgAkETNgIQIAFBGGooAgAhACACIAJBDGo2AjQgAiACQSRqNgIUIAIgAkHMAGo2AgwgASgCFCAAIAJBLGoQLyEDDAMLIAIgAEEEajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1JfCADYCLCACQRg2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAILIAIgAEEBajYCJCACQThqQgE3AgAgAkEBNgIwIAJB1NDAADYCLCACQRA2AhAgAUEYaigCACEAIAIgAkEMajYCNCACIAJBJGo2AgwgASgCFCAAIAJBLGoQLyEDDAELIAIgAEEEajYCTCACQThqIgVCADcCAEEBIQMgAkEBNgIwIAJB9M7AADYCLCACQYyswgA2AjQgASgCFCIEIAFBGGooAgAiASACQSxqIgYQLw0AIAAtAAFBF0cEQCACIABBAWo2AiQgBUIBNwIAIAJBAjYCMCACQYjPwAA2AiwgAkEQNgIQIAIgAkEMajYCNCACIAJBJGo2AgwgBCABIAYQLw0BCyACQThqQgE3AgAgAkEBNgIwIAJBnM/AADYCLCACQRA2AhAgAiACQQxqNgI0IAIgAkHMAGo2AgwgBCABIAJBLGoQLyEDCyACQdAAaiQAIAMLjg0CB38HfiMAQRBrIgckACAAvSIJQv////////8HgyELIAlCAFMEQCABQS06AABBASEGCwJAAn8CfwJAAkAgC0IAUiIDIAlCNIinQf8PcSICcgRAIAMgAkECSXIhAyALQoCAgICAgIAIhCALIAIbIglCAoYhCiAJQgGDIQ4gAkG1CGtBzHcgAhsiAkEASARAIAlBqLzBACACIAJBhaJTbEEUdiACQX9HayICaiIEQQR0IgVrKQMAQbC8wQAgBWspAwAgAiAEQbHZtX9sQRN2a0H8AGogByAHQQhqIAMQVSEMIAcpAwghCSAHKQMAIQsgAkECTwRAIApCfyACrYZCf4WDUEUgAkE+S3INAwwECyALIA59IQsgAyAOUHEhCEEBDAQLIAkgAkHB6ARsQRJ2IAJBA0trIgRBBHQiBUHIkcEAaikDACAFQdCRwQBqKQMAIAQgAmsgBEHPpsoAbEETdmpB/QBqIAcgB0EIaiADEFUhDCAHKQMIIQkgBykDACELIARBFk8NAUEAIAqnayAKQgWAp0F7bEYEQEF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCs+bMmbPmzJkzWA0ACyACIARPDQMMAgsgDlBFBEAgCkIChCEKQX8hAgNAIAJBAWohAiAKQs2Zs+bMmbPmTH4iCkK05syZs+bMmTNUDQALIAsgAiAET619IQsMAgsgA61Cf4UgCnwhCkF/IQIDQCACQQFqIQIgCkLNmbPmzJmz5kx+IgpCtObMmbPmzJkzVA0ACyACIARJDQFBASEIQQAMAwsgASAGaiIBQYjlwQAvAAA7AAAgAUECakGK5cEALQAAOgAAIAlCP4inQQNqIQIMBAtBACEDAn8gC0LkAIAiCiAJQuQAgCINWARAIAkhDSALIQogDCEJQQAMAQsgDKcgDELkAIAiCadBnH9sakExSyEDQQILIQIgCkIKgCIKIA1CCoAiC1YEfwNAIAJBAWohAiAJIgxCCoAhCSAKQgqAIgogCyINQgqAIgtWDQALIAynIAmnQXZsakEESwUgAwsgCSANUXIMAgtBAQshBUEAIQMCQCALQgqAIg0gCUIKgCIPWARAQQAhAiAJIQogDCELDAELQQAhAgNAIAhBACAJp2sgDyIKp0F2bEZxIQggAkEBaiECIAUgA0H/AXFFcSEFIAynIAxCCoAiC6dBdmxqIQMgCyEMIA1CCoAiDSAKIglCCoAiD1YNAAsLAkACQCAIRQ0AQQAgCqdrIApCCoAiDKdBdmxHDQADQCACQQFqIQIgBSADQf8BcUVxIQUgC6cgC0IKgCIJp0F2bGohAyAJIQtBACAMp2sgDCIKQgqAIgynQXZsRg0ACwwBCyALIQkLIA6nIAhBf3NyIAkgClFxQQRBBSAJQgGDUBsgAyAFGyADIANB/wFxQQVGG0H/AXFBBEtyCyEDAkACQAJAIAIgBGoiBEEATiAEAn9BESAJIAOtfCIJQv//g/6m3uERVg0AGkEQIAlC//+Zpuqv4wFWDQAaQQ8gCUL//+iDsd4WVg0AGkEOIAlC/7/K84SjAlYNABpBDSAJQv+flKWNHVYNABpBDCAJQv/P28P0AlYNABpBCyAJQv/Hr6AlVg0AGkEKIAlC/5Pr3ANWDQAaQQkgCUL/wdcvVg0AGkEIIAlC/6ziBFYNABpBByAJQr+EPVYNABpBBiAJQp+NBlYNABpBBSAJQo/OAFYNABpBBCAJQucHVg0AGkEDIAlC4wBWDQAaQQJBASAJQglWGwsiAmoiA0ERSHFFBEAgA0EBayIEQRBJDQEgA0EEakEFSQ0CIAEgBmoiBUEBaiEDIAJBAUcNAyADQeUAOgAAIAUgCadBMGo6AAAgBCABIAZBAnIiAmoQlwEgAmohAgwECyAJIAEgAiAGamoiBRA+IAIgA0gEQCAFQTAgBBC7AhoLIAEgAyAGaiICakGu4AA7AAAgAkECaiECDAMLIAkgASAGQQFqIgQgAmoiAmoQPiABIAZqIAEgBGogAxC9AiABIAMgBmpqQS46AAAMAgsgASAGaiIFQbDcADsAAEECIANrIQQgA0EASARAIAVBAmpBMEEDIAQgBEEDTBtBAmsQuwIaCyAJIAEgAiAGaiAEaiICahA+DAELIAkgAiAGaiICIAFqQQFqIgYQPiAFIAMtAAA6AAAgA0EuOgAAIAZB5QA6AAAgBCABIAJBAmoiAmoQlwEgAmohAgsgB0EQaiQAIAILwA4BBn8jAEFAaiIEJAACQAJAIAACfwJAAkAgASgCCCIFIAEoAgQiB08NAANAIAEoAgAhCCAFIQMCQANAIAMgCGotAAAiBkGIjcIAai0AAA0BIAEgA0EBaiIDNgIIIAMgB0kNAAsgAyEFDAILAkACfwJAAkACQAJAAkACQAJAAkAgBkHcAEcEQCAGQSJGDQEgASADQQFqIgE2AgggBEEQaiAIIAcgARC2AUG4scIALQAAGiAEKAIUIQIgBCgCECEBQRQQCiIFRQ0QIAUgATYCDCAFQRA2AgAgACAFNgIEIAUgAjYCEAwNCyADIAVPBEAgAiAFIAhqIAMgBWsQ5QEgASADQQFqIgY2AgggBiAHTwRAIARBIGogCCAHIAYQtgFBuLHCAC0AABogBCgCJCECIAQoAiAhAUEUEAoiA0UNESADIAE2AgwgA0EENgIAIAMgAjYCEAwICyABIANBAmoiBTYCCAJAAkACQAJAAkACQAJAAkACQCAGIAhqLQAAIgNB7QBNBEAgA0HhAE0EQCADQSJGDQMgA0EvRg0EIANB3ABHDQIgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pB3AA6AAAMFQsgA0HiAGsOBQQBAQEFAQsgA0HuAGsOCAUAAAAGAAcIAAsgBEEYaiAIIAcgBRC2AUG4scIALQAAGiAEKAIcIQIgBCgCGCEBQRQQCiIDRQ0YIAMgATYCDCADQQw2AgAgAyACNgIQDA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQSI6AAAMEQsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBLzoAAAwQCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakEIOgAADA8LIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQw6AAAMDgsgAigCCCIDIAIoAgRGBEAgAiADEOEBIAIoAgghAwsgAiADQQFqNgIIIAIoAgAgA2pBCjoAAAwNCyACKAIIIgMgAigCBEYEQCACIAMQ4QEgAigCCCEDCyACIANBAWo2AgggAigCACADakENOgAADAwLIAIoAggiAyACKAIERgRAIAIgAxDhASACKAIIIQMLIAIgA0EBajYCCCACKAIAIANqQQk6AAAMCwsgBEEsaiABEFIgBC8BLA0CIAQvAS4iBkGA+ANxIgVBgLADRwRAIAVBgLgDRgRAIARBFDYCNCABIARBNGoQvwEhAwwJCyAGQYCwv39zQf+PvH9NDQYgBEEANgI0IAZBgAFJDQQgBkGAEEkEQCAEIAZBP3FBgAFyOgA1IAQgBkEGdkHAAXI6ADRBAgwLCyAEIAZBP3FBgAFyOgA2IAQgBkEMdkHgAXI6ADQgBCAGQQZ2QT9xQYABcjoANUEDDAoLIARBNGoiByABEKEBIAQtADQNBiAELQA1IAEgASgCCCIDQQFqNgIIQdwARwRAIARBFzYCNCABIAcQvwEhAwwICyAEQTRqIgcgARChASAELQA0DQYgBC0ANSABIANBAmo2AghB9QBHBEAgBEEXNgI0IAEgBxC/ASEDDAgLIARBNGoiByABEFIgBC8BNA0GIAQvATYiA0GAQGtB//8DcUGA+ANJDQQgA0GAyABqQf//A3EgBkGA0ABqQf//A3FBCnRyIgVBgIAEaiIGQYCAxABHIAZBgLADc0GAgMQAa0H/j7x/S3ENCCAEQQ82AjQgASAHEL8BIQMMBwsgBSADQeiMwgAQugEACyACKAIIBEAgAyAFTwRAIAIgBSAIaiADIAVrEOUBIAEgA0EBajYCCCAAIAIoAgg2AgggACACKAIANgIEQQEMDgsgBSADQciMwgAQugEACyADIAVPBEAgACADIAVrNgIIIAAgBSAIajYCBCABIANBAWo2AghBAAwNCyAFIANB2IzCABC6AQALIAQoAjAhAwwECyAEIAY6ADRBAQwFCyAEQRQ2AjQgASAEQTRqEL8BIQMMAgtBgJfCAEErQYiPwgAQ3gEACyAEKAI4IQMLIAAgAzYCBAwFCyAEIANBP3FBgAFyOgA3IAQgBUEGdkE/cUGAAXI6ADYgBCAGQQx2QT9xQYABcjoANSAEIAZBEnZBB3FB8AFyOgA0QQQLIQMgAiAEQTRqIAMQ5QEgASgCBCEHIAEoAgghBQsgBSAHSQ0ACwsgBSAHRw0CIARBCGogASgCACAHIAcQtgFBuLHCAC0AABogBCgCDCECIAQoAgghAUEUEAoiBUUNAyAFIAE2AgwgBUEENgIAIAAgBTYCBCAFIAI2AhALQQILNgIAIARBQGskAA8LIAUgB0G4jMIAELcBAAsAC98LAQt/AkACQAJAIAAoAgAiCiAAKAIIIgNyBEACQCADRQ0AIAEgAmohCCAAQQxqKAIAQQFqIQkgASEEA0ACQCAEIQMgCUEBayIJRQ0AIAMgCEYNAgJ/IAMsAAAiBkEATgRAIAZB/wFxIQYgA0EBagwBCyADLQABQT9xIQcgBkEfcSEEIAZBX00EQCAEQQZ0IAdyIQYgA0ECagwBCyADLQACQT9xIAdBBnRyIQcgBkFwSQRAIAcgBEEMdHIhBiADQQNqDAELIARBEnRBgIDwAHEgAy0AA0E/cSAHQQZ0cnIiBkGAgMQARg0DIANBBGoLIgQgBSADa2ohBSAGQYCAxABHDQEMAgsLIAMgCEYNACADLAAAIgRBAE4gBEFgSXIgBEFwSXJFBEAgBEH/AXFBEnRBgIDwAHEgAy0AA0E/cSADLQACQT9xQQZ0IAMtAAFBP3FBDHRycnJBgIDEAEYNAQsCQAJAIAVFDQAgAiAFTQRAQQAhAyACIAVGDQEMAgtBACEDIAEgBWosAABBQEgNAQsgASEDCyAFIAIgAxshAiADIAEgAxshAQsgCkUNAyAAKAIEIQsgAkEQTwRAIAIgASABQQNqQXxxIgZrIglqIgpBA3EhB0EAIQhBACEDIAEgBkcEQCAGIAFBf3NqQQNPBEBBACEFA0AgAyABIAVqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEDIAVBBGoiBQ0ACwsgASEEA0AgAyAELAAAQb9/SmohAyAEQQFqIQQgCUEBaiIJDQALCwJAIAdFDQAgBiAKQXxxaiIELAAAQb9/SiEIIAdBAUYNACAIIAQsAAFBv39KaiEIIAdBAkYNACAIIAQsAAJBv39KaiEICyAKQQJ2IQcgAyAIaiEFA0AgBiEJIAdFDQRBwAEgByAHQcABTxsiCEEDcSEKIAhBAnQhDEEAIQQgCEEETwRAIAYgDEHwB3FqIQ0gBiEDA0AgBCADKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIANBBGooAgAiBEF/c0EHdiAEQQZ2ckGBgoQIcWogA0EIaigCACIEQX9zQQd2IARBBnZyQYGChAhxaiADQQxqKAIAIgRBf3NBB3YgBEEGdnJBgYKECHFqIQQgA0EQaiIDIA1HDQALCyAHIAhrIQcgCSAMaiEGIARBCHZB/4H8B3EgBEH/gfwHcWpBgYAEbEEQdiAFaiEFIApFDQALIAkgCEH8AXFBAnRqIgQoAgAiA0F/c0EHdiADQQZ2ckGBgoQIcSEDIApBAUYNAiADIAQoAgQiA0F/c0EHdiADQQZ2ckGBgoQIcWohAyAKQQJGDQIgAyAEKAIIIgNBf3NBB3YgA0EGdnJBgYKECHFqIQMMAgsgAkUEQEEAIQUMAwsgAkEDcSEEAkAgAkEESQRAQQAhBUEAIQkMAQtBACEFIAEhAyACQXxxIgkhBgNAIAUgAywAAEG/f0pqIANBAWosAABBv39KaiADQQJqLAAAQb9/SmogA0EDaiwAAEG/f0pqIQUgA0EEaiEDIAZBBGsiBg0ACwsgBEUNAiABIAlqIQMDQCAFIAMsAABBv39KaiEFIANBAWohAyAEQQFrIgQNAAsMAgsMAgsgA0EIdkH/gRxxIANB/4H8B3FqQYGABGxBEHYgBWohBQsCQCAFIAtJBEAgCyAFayEFQQAhAwJAAkACQCAALQAgQQFrDgIAAQILIAUhA0EAIQUMAQsgBUEBdiEDIAVBAWpBAXYhBQsgA0EBaiEDIABBGGooAgAhBCAAKAIQIQYgACgCFCEAA0AgA0EBayIDRQ0CIAAgBiAEKAIQEQEARQ0AC0EBDwsMAQtBASEDIAAgASACIAQoAgwRAAAEfyADBUEAIQMCfwNAIAUgAyAFRg0BGiADQQFqIQMgACAGIAQoAhARAQBFDQALIANBAWsLIAVJCw8LIAAoAhQgASACIABBGGooAgAoAgwRAAALoAsCEH8HfiMAQYABayIGJAAgBiACNgI8IAYgATYCOCAGIAM2AkAgBiAFNgJEIAEoAigiCCEHAkACQAJAAkACQAJAAkAgCEEFTwR/IAEoAgQFIAcLIAVHDQAgAigCKCIJIQcgCUEFTwR/IAIoAgQFIAcLIAVHDQAgAygCKCIMIQcgDEEFTwR/IAMoAgQFIAcLIAVHDQAgAEEoaiIKIQsgACgCKCIHQQVPBH8gAEEEaiELIAAoAgQFIAcLBEAgC0EANgIACyAAIAVBAXQQ0AECQAJAIAUEQCACKAIIIAJBCGogCUEESyIHGyERIAMoAggiEiADQQhqIhMgDEEESyINGyELIAEoAgggAUEIaiAIQQRLIg4bIRQgAigCBCAJIAcbIQ8gAygCBCIVIAwgDRshDSABKAIEIAggDhshDiAAQQhqIQdBACEIA0AgBkEwaiAAIAggBSAIaiIJQYD4wAAQwAEgCCAPTw0FIAhBA3QhEAJAIAYoAjQiASAOIAEgDkkbIgNFBEBCACEXDAELIAYoAjAhASAQIBFqKQMAIRZCACEXIBQhAgNAIAZBIGogAikDAEIAIBYQsAEgASAXIAYpAyAiGCABKQMAfCIafCIbNwMAIBcgG1atIAZBKGopAwAgGCAaVq18fCEXIAFBCGohASACQQhqIQIgA0EBayIDDQALCyAHIQIgCigCACIBQQVPBEAgACgCCCECIAAoAgQhAQsgASAITQ0GIAIgEGopAwAhFiAGQRhqIAAgCCAJQbD4wAAQwAECQCAGKAIcIgEgDSABIA1JGyIDRQRAQgAhFgwBCyAGKAIYIQEgBCAWfiEYQgAhFiALIQIDQCAGQQhqIAIpAwBCACAYELABIAEgFiAGKQMIIhogASkDAHwiG3wiHDcDACAWIBxWrSAGQRBqKQMAIBogG1atfHwhFiABQQhqIQEgAkEIaiECIANBAWsiAw0ACwsgByECIAooAgAiAUEFTwRAIAAoAgghAiAAKAIEIQELIAEgCU0NByACIAlBA3RqIBYgFyAZfCIZfCIYNwMAIBcgGVYgFiAYVnIiAa0hGSAIQQFqIgggBUcNAAsgAQ0BCyAKKAIAIgJBBE0EfyAAQQhqBSAAKAIEIQIgACgCCAshASACIAVJDQYgAiAFQQF0Rw0HIAVFDQEgBUEDdCEDIAUhAgNAIAEpAwAhBCABIAEgA2oiBykDADcDACAHIAQ3AwAgAUEIaiEBIAJBAWsiAg0ACwwBCyAKKAIAIgFBBU8EQCAAKAIIIQcgACgCBCEBCyABIAVJDQcgByABQQN0aiAHIAVBA3QiC2prQQN2IgEgFSAMIAxBBEsiAhsiAyABIANJGyEBIBIgEyACGyECQgAhFiAFIQMDQCABRQ0BIAcgByALaikDACIXIBYgAikDACIEfXwiFjcDACAWIAQgF0J/hSIWhIMgBCAWg4RCP4chFiABQQFrIQEgB0EIaiEHIAJBCGohAiADQQFrIgMNAAsLIAooAgAiAUEFTwR/IABBBGohCiAAKAIEBSABCyAFSwRAIAogBTYCAAsgBkGAAWokAA8LIAZB/ABqQQQ2AgAgBkH0AGpBGzYCACAGQewAakEbNgIAIAZB1ABqQgQ3AgAgBkEENgJMIAZBoPfAADYCSCAGQRs2AmQgBiAGQeAAajYCUCAGIAZBxABqNgJ4IAYgBkFAazYCcCAGIAZBPGo2AmggBiAGQThqNgJgIAZByABqQcD3wAAQ6wEACyAIIA9BkPjAABC3AQALIAggAUGg+MAAELcBAAsgCSABQcD4wAAQtwEAC0GJmMIAQSNB0PfAABDeAQALIAZB7ABqQgA3AgAgBkEBNgJkIAZB7PTAADYCYCAGQYyswgA2AmggBkHgAGpB4PfAABDrAQALQYmYwgBBI0Hw98AAEN4BAAv3CgEFfyMAQRBrIgMkAAJAAkACQAJAAkACQAJAAkACQAJAIAEOKAUICAgICAgICAEDCAgCCAgICAgICAgICAgICAgICAgICAgGCAgICAcACyABQdwARg0DDAcLIABBgAQ7AQogAEIANwECIABB3OgBOwEADAcLIABBgAQ7AQogAEIANwECIABB3OQBOwEADAYLIABBgAQ7AQogAEIANwECIABB3NwBOwEADAULIABBgAQ7AQogAEIANwECIABB3LgBOwEADAQLIABBgAQ7AQogAEIANwECIABB3OAAOwEADAMLIAJBgIAEcUUNASAAQYAEOwEKIABCADcBAiAAQdzEADsBAAwCCyACQYACcUUNACAAQYAEOwEKIABCADcBAiAAQdzOADsBAAwBCwJAAkACQAJAAkACQCACQQFxBEAgAUELdCEGQQAhAkEhIQVBISEEAkADQAJAAkBBfyAFQQF2IAJqIgVBAnRBpL/AAGooAgBBC3QiByAGRyAGIAdLGyIHQQFGBEAgBSEEDAELIAdB/wFxQf8BRw0BIAVBAWohAgsgBCACayEFIAIgBEkNAQwCCwsgBUEBaiECCwJ/An8CQCACQSBNBEAgAkECdCIFQaS/wABqKAIAQRV2IQQgAkEgRw0BQdcFIQVBHwwCC0EhQSFBlL7AABC3AQALIAVBqL/AAGooAgBBFXYhBUEAIAJFDQEaIAJBAWsLQQJ0QaS/wABqKAIAQf///wBxCyECAkAgBSAEQX9zakUNACABIAJrIQdB1wUgBCAEQdcFTRshBiAFQQFrIQVBACECA0AgBCAGRg0HIAIgBEGowMAAai0AAGoiAiAHSw0BIAUgBEEBaiIERw0ACyAFIQQLIARBAXENAQsgAUEgSQ0FIAFB/wBJDQMgAUGAgARJDQIgAUGAgAhJDQEgAUGwxwxrQdC6K0kgAUHLpgxrQQVJciABQZ70C2tB4gtJIAFB4dcLa0GfGElyciABQX5xQZ7wCkYgAUGinQtrQQ5JciABQWBxQeDNCkYgAUG67gprQQZJcnJyDQUgAUHwgzhrQZD8C0kNBQwDCyADQQhqQQA6AAAgA0EAOwEGIAMgAUEIdkEPcUG09MEAai0AADoADCADIAFBDHZBD3FBtPTBAGotAAA6AAsgAyABQRB2QQ9xQbT0wQBqLQAAOgAKIAMgAUEUdkEPcUG09MEAai0AADoACSABQQFyZ0ECdkECayICIANBBmpqIgRBzr7AAC8AADsAACADIAFBBHZBD3FBtPTBAGotAAA6AA0gBEECakHQvsAALQAAOgAAIANBDmoiBCABQQ9xQbT0wQBqLQAAOgAAIAAgAykBBjcAACADQf0AOgAPIABBCGogBC8BADsAACAAQQo6AAsgACACOgAKDAULIAFB8LLAAEEsQcizwABBxAFBjLXAAEHCAxBODQEMAwsgAUHOuMAAQShBnrnAAEGfAkG9u8AAQa8CEE5FDQILIAAgATYCBCAAQYABOgAADAILIAZB1wVBpL7AABC3AQALIANBCGpBADoAACADQQA7AQYgAyABQQh2QQ9xQbT0wQBqLQAAOgAMIAMgAUEMdkEPcUG09MEAai0AADoACyADIAFBEHZBD3FBtPTBAGotAAA6AAogAyABQRR2QQ9xQbT0wQBqLQAAOgAJIAFBAXJnQQJ2QQJrIgIgA0EGamoiBEHOvsAALwAAOwAAIAMgAUEEdkEPcUG09MEAai0AADoADSAEQQJqQdC+wAAtAAA6AAAgA0EOaiIEIAFBD3FBtPTBAGotAAA6AAAgACADKQEGNwAAIANB/QA6AA8gAEEIaiAELwEAOwAAIABBCjoACyAAIAI6AAoLIANBEGokAAvECAIJfwR+IwBBIGsiCSQAIAEoAigiCiEHIAIoAigiBiEDIAFBKGohCwJAAkACQAJAAkACfgJAAkAgCkEFTwRAIAEoAgQhBwsCQCAGQQVPBH8gAigCBAUgAwsgB00EQCAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgCksNCSAGRQ0GIAMgBkEDdGohCCAGIQQDQCADIAwgAykDAHwiDSAFKQMAfCIONwMAIAwgDVatIA0gDlatfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALIAxQDQYgCkEDdCAGQQN0ayEDA0AgA0UNAiAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIAwgDVatIgxQRQ0ACwwGCyAKQQRNBH8gAUEIagUgASgCBCEKIAEoAggLIQMgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyEFIAYgB0kNASAHIApLDQggBwRAIAMgB0EDdGohCCAHIQQDQCADIAwgAykDAHwiDSAFKQMAfCIPNwMAIAwgDVatIA0gD1atfCEMIANBCGohAyAFQQhqIQUgBEEBayIEDQALQgAgDFANBBogCkEDdCAHQQN0ayEDA0AgA0UNBCAIIAwgCCkDAHwiDTcDACADQQhrIQMgCEEIaiEIIA4gDCANVq18IQwgDEIAUg0ACwtCAAwDCyAMUA0EDAMLIAcgBkHo7cAAELgBAAsgDAshDSAJQRhqIAIgB0H47cAAENMBIAkoAhwhAiALKAIAIgNBBU8EQCABKAIEIQMLIAkoAhghBiAJQRBqIAEgAhCTASAJKAIQIgRBgYCAgHhHBEAgBEUNAwALAn8gCygCACIEQQVPBEAgASgCBCIEIANJDQUgASgCCAwBCyADIARLDQQgAUEIagsgA0EDdGoiBSACQQN0IghqIAUgBCADa0EDdBC9AiAFIAYgCBC+AhogCyIDKAIAQQVPBH8gAUEEagUgAwsgAiAEajYCACAJQQhqIAEgB0GI7sAAENMBIAkoAgwiBEUNBCAJKAIIIgIgAikDACIMIA18Ig03AwAgDCANWA0BIAwgDVatIQwgAkEIaiEDIARBA3RBCGshBQNAIAVFDQEgAyAMIAMpAwB8Ig03AwAgA0EIaiEDIAVBCGshBSAMIA1YIAwgDVatIQxFDQALDAELQQQhBQJ/IAsoAgAiAkEETQRAIAFBCGohBCACDAELIAFBBGohCyABKAIIIQQgAiEFIAEoAgQLIgMgBUYEfyABEKABIAFBBGohCyABKAIIIQQgASgCBAUgAwtBA3QgBGpCATcDACALIAsoAgBBAWo2AgALIAAgAUEwEL4CGiAJQSBqJAAPC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAtBiZjCAEEjQej1wAAQ3gEAC+kJAwV/A34BfCMAQUBqIgIkAAJAAkACQAJ/AkACQAJAAkACQAJAAkAgAC0AAEEBaw4FAAECAwQFCyABKAIAQeLswABB3ezAACAALQABIgAbQQRBBSAAGxDkAQwJCwJAAkACQCAAKAIIQQFrDgIBAgALQRQhBCAAQRBqKQMAIgdCkM4AVARAIAchCAwKCwNAIAJBGGogBGoiAEEEayAHIAdCkM4AgCIIQpDOAH59pyIDQf//A3FB5ABuIgVBAXRB+onCAGovAAA7AAAgAEECayADIAVB5ABsa0H//wNxQQF0QfqJwgBqLwAAOwAAIARBBGshBCAHQv/B1y9WIAghBw0ACwwJC0EUIQQgAEEQaikDACIJIAlCP4ciB4UgB30iB0KQzgBUBEAgByEIDAgLA0AgAkEYaiAEaiIAQQRrIAcgB0KQzgCAIghCkM4Afn2nIgNB//8DcUHkAG4iBUEBdEH6icIAai8AADsAACAAQQJrIAMgBUHkAGxrQf//A3FBAXRB+onCAGovAAA7AAAgBEEEayEEIAdC/8HXL1YgCCEHDQALDAcLIABBEGorAwAiCiAKYiAKvUL///////////8Ag0KAgICAgICA+P8AUXJFBEAgCiACQRhqIgMQDyEAIAEoAgAgAyAAEOQBDAkLIAEoAgBB+PLBAEEEEOQBDAgLIAEoAgAgACgCBCAAQQxqKAIAEDkMBwsgAEEMaigCACEGIAAoAgQhBCABKAIAIgBB5uzAAEEBEOQBQQEhAyAGRQRAQQEhBSAAQfjswABBARDkAUEAIQMLIAZBGGwhAANAIAAEQCADQQFxRQRAIAEoAgBB6OzAAEEBEOQBCyAEIAEQFSAAQRhrIQBBACEDIARBGGohBEEAIQUMAQsLIAUNBiABKAIAQfjswABBARDkAQwGCyAAQQxqKAIAIQRBASEDIAEoAgAiBUHn7MAAQQEQ5AEgAiAEBH8gAwUgBUHc7MAAQQEQ5AFBAAs6ABQgAiABNgIQIAAoAgQiAQ0BQQAhBEEADAILIAEoAgBB+PLBAEEEEOQBDAQLIAIgATYCMCACQQA2AiwgAiABNgIgIAJBADYCHCACIABBCGooAgAiADYCNCACIAA2AiRBAQshACACIAQ2AjggAiAANgIoIAIgADYCGANAIAJBCGogAkEYahBEIAIoAggiAARAIAJBEGogACACKAIMENwBDAEFIAItABRFDQQgAigCECgCAEHc7MAAQQEQ5AEMBAsACwALIAinIgNB4wBKBEAgBEECayIEIAJBGGpqIAMgA0HkAG4iA0HkAGxrQQF0QfqJwgBqLwAAOwAACwJAIANBCk4EQCAEQQJrIgAgAkEYamogA0EBdEH6icIAai8AADsAAAwBCyAEQQFrIgAgAkEYamogA0EwajoAAAsgCUIAUwRAIABBAWsiACACQRhqakEtOgAACyABKAIAIAJBGGogAGpBFCAAaxDkAQwBCyAIpyIDQeMASgRAIARBAmsiBCACQRhqaiADIANB5ABuIgNB5ABsa0EBdEH6icIAai8AADsAAAsCQCADQQpOBEAgBEECayIAIAJBGGpqIANBAXRB+onCAGovAAA7AAAMAQsgBEEBayIAIAJBGGpqIANBMGo6AAALIAEoAgAgAkEYaiAAakEUIABrEOQBCyACQUBrJAALyQoBAX8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCAEEBaw4TAQIDBAUGBwgJCgsMDQ4PEBESEwALIAJBJGpCADcCACACQQE2AhwgAkGAi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBMLIAJBJGpCADcCACACQQE2AhwgAkGYi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = Kc();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await Hc(await i, n);
  return jc(t, e);
}
function ca(i, n, t, e, A) {
  return CA(i - -835, n);
}
function CA(i, n) {
  i = i - (-15887 + 1 * 16199);
  const t = en();
  let e = t[i];
  if (CA.eqdPDO === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    CA.ccwInV = a, CA.XYFhwM = {}, CA.eqdPDO = !0;
  }
  const o = t[-544 * -6 + 2 * -2411 + 1558], r = i + o, g = CA.XYFhwM[r];
  return g ? e = g : (CA.BNnnBn === void 0 && (CA.BNnnBn = !0), e = CA.ccwInV(e, n), CA.XYFhwM[r] = e), e;
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return CA(c - -418, a);
  }
  function e(a, I, c, s, C) {
    return CA(s - 59, a);
  }
  function A(a, I, c, s, C) {
    return CA(I - 281, s);
  }
  const o = i();
  function r(a, I, c, s, C) {
    return CA(C - 755, s);
  }
  function g(a, I, c, s, C) {
    return CA(c - -32, C);
  }
  for (; ; )
    try {
      if (-parseInt(e("Or%l", 388, 392, 388, 414)) / 1 * (parseInt(A(657, 647, 653, "6qww", 666)) / 2) + -parseInt(e("upgF", 346, 360, 372, 350)) / 3 * (parseInt(A(637, 618, 639, "bsOV", 610)) / 4) + parseInt(A(625, 602, 609, "AJ[)", 578)) / 5 * (parseInt(t("cv%$", -91, -80, -88, -83)) / 6) + parseInt(g(269, 313, 296, 310, "s)cK")) / 7 * (parseInt(g(329, 327, 328, 352, "2[zv")) / 8) + -parseInt(e("qORo", 400, 406, 413, 407)) / 9 * (parseInt(r(1111, 1113, 1128, "RKCg", 1116)) / 10) + parseInt(e("REzb", 405, 399, 394, 377)) / 11 * (-parseInt(r(1107, 1106, 1138, "i1Se", 1112)) / 12) + parseInt(g(286, 309, 282, 257, "XY#8")) / 13 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(en, 344605);
function en() {
  const i = ["xHVcMc4", "gW3cGtHJW6VcQG", "W4/dN8kgagq", "t3jBW5tcS1SoWQldQsdcMum", "WPFcII/dHfXyfYGuWOlcG0pdKW", "WRSczSoKWRa", "W4VcUqZcUuC", "W6ZdGgldJNS", "yCkUW5Pjrq", "e8oMz3CIESkAiJ1oySkE", "s3nsW5/cT1LyWRxdHY/cL0LA", "Es/dN8oRWRSRWR5qW7dcSMe", "WR/dKMf0j8oFW74", "axPhWOpdJL/cIe4", "w8kCWRZcHK0", "aSkZnIb3", "WQ7cUapdPmoJ", "kmojW4jfxG", "BIhdRNpdQCkoWRBdRG3dU8ool28", "W6NdRfxcVSkKWRvIFv7dN8o0", "EIddN8oUWR0yWPLAW7pcOx0", "eCkuj8oYiG", "axGiW6xcPb7dTuZcRqfQW7bZ", "pK8/dSoZW4it", "Af4gf8ow", "tZCfxmk4W5tdLx7dO19+CG", "z27cJCkPW6m", "W4FcPSoZxCk0WQPI", "fLmVWRGJW7FdQ8k6W6q", "tarRWR9e", "Cvybe8o+", "W5xdLeXog1SSW70MdMG", "vConkWfC", "WRlcTaRdO8oT", "rCkDW7ldRdhcUMhdLeaBW4RcMG", "csurWOVdJa", "W5lcSqVcVw8", "fYOlWPi", "B8kFWOZcS8oBW7xdJG", "hCoDWPtcVNC", "W63dIgZdGNa", "WPaDiePJ", "W4jbnWH0W4zkW70s", "W5FdLSoCo2q", "hmkHpw3cVCkmWOtdJa", "mGizcCo9W7u7W7u", "W5RdHM9zWQy", "nWuilmoUW4CYW4S", "WQFcPmk0W7Dw", "W6ZdIeXZW5VcQSojW4FdQKvXAmko", "CCoTW6LmqghdGW", "WPlcHSojutpcR8kTWQBdI8osW5TOhW", "hunkdCoi", "ALitdCos", "W7C5CJKX"];
  return en = function() {
    return i;
  }, en();
}
function st(i, n, t, e, A) {
  return CA(A - 513, i);
}
function qc(i, n, t, e, A) {
  return CA(t - -167, e);
}
function Jt(i, n, t, e, A) {
  return CA(i - 232, A);
}
class Vc {
  [st("fJup", 804, 809, 853, 829) + Jt(556, 542, 559, 563, "GS]Z") + st("1$xU", 891, 883, 871, 863)] = !1;
  async [Jt(579, 603, 586, 589, "upgF")](n) {
    function t(g, a, I, c, s) {
      return st(c, a - 55, I - 152, c - 333, g - -551);
    }
    function e(g, a, I, c, s) {
      return Jt(c - 257, a - 306, I - 400, c - 385, I);
    }
    function A(g, a, I, c, s) {
      return Jt(a - 59, a - 342, I - 388, c - 388, s);
    }
    function o(g, a, I, c, s) {
      return st(g, a - 67, I - 479, c - 143, a - -840);
    }
    function r(g, a, I, c, s) {
      return st(I, a - 493, I - 124, c - 494, g - -985);
    }
    try {
      const g = n + (t(298, 322, 271, "AJ[)", 296) + "/") + ia;
      await r0(g), this[r(-114, -96, "4exe", -111, -99) + r(-138, -112, "i1Se", -117, -131) + t(274, 274, 292, "RKCg", 290)] = !0;
    } catch {
      this[e(818, 808, "upgF", 834) + A(645, 637, 662, 647, "fJup") + e(833, 830, "1$xU", 839)] = !1, console[r(-107, -126, "6qww", -112)](ia + (A(650, 655, 631, 658, "Me]4") + t(305, 287, 288, "Or%l") + t(289, 286, 269, "2[zv") + o("p7#)", 35, 12, 16) + t(313, 288, 314, "GH#8") + t(325, 328, 346, "i1Se") + A(603, 616, 621, 603, "EP0w") + t(315, 295, 337, "Cej#") + t(288, 274, 301, "Or%l") + r(-141, -163, "nmQj", -160) + o("v(%&", 29, 50, 21) + r(-133, -116, "cv%$", -153) + t(304, 277, 311, "wnsE") + A(592, 608, 586, 610, "1$xU") + "n."));
    }
  }
  [qc(190, 186, 182, "5hq$") + ca(-520, "PWi[") + st("Or%l", 829, 880, 858, 856) + "ed"]() {
    function n(e, A, o, r, g) {
      return ca(r - 1745, g);
    }
    function t(e, A, o, r, g) {
      return Jt(g - -955, A - 382, o - 50, r - 90, o);
    }
    return this[t(-377, -400, "i1Se", -408, -383) + t(-373, -399, "fJup", -399, -377) + n(1238, 1216, 1251, 1228, "W^TV")];
  }
}
class zn extends Error {
  name = "SkipLicenseValidationError";
  log() {
  }
}
function tn() {
  var i = ["cSkGlh9g", "imopWPjDea", "W4tcISoMddW", "Emk2W4aOea", "ESkQW5W6aa", "WR9nj8kirW", "FsvhqCks", "th/cRW", "W68jWOqdW4a", "oxSEFmoE", "W4tcMWffW4lcVGpcOCk7n8oZWR7cNW", "xmkxWPFdHbC", "eYNcOx/dLJ1JW7S", "vhpcPhpdGq", "v0ZdVSo4WOa", "nSkNWQy", "i8oBW6KpWRdcU8kCW4q5F8oiW4Sx", "gmkAvW", "WQrBc8kHta", "W5/cG8oH", "W7BdTe/dRmoY", "xvj2DSo5", "lCo1WPLUuCkbCmkzAsRcLWtcKW", "WQhcSYZcUmk2kemrlNH1zq", "uqKR", "eSoDWPvjWQy", "WPXDW5jxW7nsgCkQncNdGqZdUa", "WR3cLXNdQCoxW7VdSeJcKaxcHmkDW78", "WQVcHLnMW4O", "r1/cPxZdSq", "WP/dJ0u", "WPFcPCk2qmoq", "WPTkcWyx", "W6VdMHCaWPBcLhiMAd0NW5XW", "W7vyW4CQW5O", "WPFdMeuFWOi", "aZtdJa", "dstdJsyO", "p8kWWRddG8kj", "W4pcMq5aW4hcUaRcP8k5pCoIWQNcIq", "c1PPs8oLWPKUvbxcRCojWRK", "nSolWOfAaa", "vvZcTauqWPSo", "tqSR", "Bmk3WPtdJ8krASk4", "W7WyzSoHgmk8W6pdJmk1WOXoWQWo", "W6KiWQylW4i", "W4Lht8ohpq", "W74Bz8oHfCk/W6/dK8k6WRvaWOKC", "EKCqEmoUWRRdMG", "WO1habWx", "w8kjWPpdSXe", "Cb4z", "WRpdIZJdKmkm", "WPhdG8oKgr5ZW7m", "WQhdOSkb", "kCkhWQZdJCkz", "eGTGhLK", "vCk4h11cWRNcIG", "ouRcTSk2W4jZxmkJ", "eCkOkfj8", "WPBdTSk7jmkC", "EsDikCk8W53cKs7cICkcqc3cGq", "W7DuyYpdRG", "WR/cHKfnW5u", "er5UgfG", "W4BcVIOEWRe8yG", "W4icWO0l", "swNcINpdSG", "W6rVoSkKDw7dR8k0xSogiCkAWR0", "W5BdHCkLeSkx", "e8opWRvyWQ8", "W4/dQuzQW5voe8ogWP9kW5Xtsa", "W4GEWOqxWRG", "WQ9vhCoGWRm", "WQPtfW", "W7nmyYNdPq", "WRZdNdm", "WPFcTbGFWOO", "W4TqumownG"];
  return tn = function() {
    return i;
  }, tn();
}
function co(i, n, t, e, A) {
  return K(n - 802, A);
}
function we(i, n, t, e, A) {
  return K(i - 467, e);
}
function K(i, n) {
  i = i - (1 * -4449 + -967 * -2 + 2825);
  var t = tn(), e = t[i];
  if (K.lfyFVZ === void 0) {
    var A = function(I) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        C += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, o = function(I, c) {
      var s = [], C = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (var d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    K.UfaDDG = o, K.tifRZy = {}, K.lfyFVZ = !0;
  }
  var r = t[-12 * 753 + -1 * 5503 + -31 * -469], g = i + r, a = K.tifRZy[g];
  return a ? e = a : (K.vdRkML === void 0 && (K.vdRkML = !0), e = K.UfaDDG(e, n), K.tifRZy[g] = e), e;
}
(function(i, n) {
  function t(I, c, s, C, E) {
    return K(I - 629, E);
  }
  function e(I, c, s, C, E) {
    return K(c - 705, C);
  }
  function A(I, c, s, C, E) {
    return K(C - 512, I);
  }
  function o(I, c, s, C, E) {
    return K(I - 775, E);
  }
  function r(I, c, s, C, E) {
    return K(I - -155, c);
  }
  for (var g = i(); ; )
    try {
      var a = parseInt(o(1151, 1127, 1142, 1180, "JA$2")) / 1 * (-parseInt(o(1164, 1153, 1194, 1146, "JA$2")) / 2) + parseInt(A("&J1s", 907, 868, 887, 909)) / 3 + parseInt(A("5cr2", 867, 907, 879, 885)) / 4 + parseInt(o(1128, 1089, 1156, 1165, "GAn5")) / 5 + parseInt(e(1094, 1076, 1069, "VE3k", 1080)) / 6 * (-parseInt(r(199, "5&zA", 159, 163, 181)) / 7) + parseInt(r(158, "ol1O", 131, 148, 131)) / 8 * (-parseInt(A("l**M", 875, 821, 849, 883)) / 9) + parseInt(t(995, 968, 963, 1032, "l**M")) / 10 * (parseInt(r(184, "*j0$", 197, 184, 191)) / 11);
      if (a === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(tn, -251 * 5449 + -151 * 5516 + -1 * -2957477);
function We(i, n, t, e, A) {
  return K(t - 437, A);
}
function Ut(i, n, t, e, A) {
  return K(n - 34, e);
}
function Me(i, n, t, e, A) {
  return K(A - 669, n);
}
class Ca {
  constructor(n) {
    this[o(1050, 1026, 998, 1033, "GAn5") + o(1087, 1138, 1139, 1101, "U7JM")] = n;
    function t(r, g, a, I, c) {
      return K(r - 311, I);
    }
    function e(r, g, a, I, c) {
      return K(r - 468, g);
    }
    function A(r, g, a, I, c) {
      return K(g - 970, a);
    }
    function o(r, g, a, I, c) {
      return K(I - 713, c);
    }
    try {
      this.#A = n[t(623, 599, 660, "rsnh", 651) + A(1348, 1325, "wCA4", 1317, 1353) + A(1334, 1349, "d]S6", 1319, 1327)] && JSON[t(639, 622, 661, "wlv1", 667)](n[o(1073, 1109, 1043, 1081, "wlv1") + t(643, 617, 612, "&J1s", 661) + A(1378, 1352, "))LY", 1334, 1367)]), this.#e = n[e(832, "agAH", 812, 823, 821) + A(1318, 1327, "l**M", 1360, 1334)];
    } catch (r) {
      console[A(1324, 1284, "GAn5")](r);
    }
  }
  #A;
  #e;
  get [we(802, 781, 831, "Iq5C") + "id"]() {
    function n(e, A, o, r, g) {
      return we(g - -611, A - 344, o - 394, o);
    }
    function t(e, A, o, r, g) {
      return we(g - -1116, A - 409, o - 223, r);
    }
    return this[t(-346, -346, -322, "kS&E", -319) + t(-324, -320, -303, "rrW5", -332)][t(-327, -300, -270, "&J1s", -304) + n(171, 200, "qh(G", 172, 178)];
  }
  get [Me(1043, "l**M", 1040, 1012, 1031) + "s"]() {
    function n(e, A, o, r, g) {
      return Me(e - 284, A, o - 134, r - 448, o - -1033);
    }
    function t(e, A, o, r, g) {
      return Me(e - 294, g, o - 191, r - 459, r - -1332);
    }
    return this[t(-266, -306, -273, -302, "6Btx") + n(-41, "geKU", -41, -67)][t(-297, -289, -278, -298, "VE3k") + "s"];
  }
  get [Me(1030, "YgF#", 1025, 1043, 1028) + We(815, 790, 783, 797, "rgpd")]() {
    function n(A, o, r, g, a) {
      return Ut(A - 500, a - -614, r - 377, g);
    }
    function t(A, o, r, g, a) {
      return we(r - -827, o - 161, r - 54, g);
    }
    function e(A, o, r, g, a) {
      return we(r - -1031, o - 493, r - 120, a);
    }
    return this[e(-181, -224, -184, -150, "9b2d") + n(-243, -210, -198, "Fx2e", -228)][n(-247, -227, -213, "6aB3", -222) + t(-12, 5, -9, "5cr2")];
  }
  get [we(808, 809, 841, "pIi#") + "b"]() {
    return this.#A;
  }
  get [we(841, 834, 817, "iqYr") + We(814, 768, 800, 813, "agAH")]() {
    return this.#e;
  }
  get [Me(962, "*j0$", 948, 962, 984) + co(1093, 1112, 1147, 1133, "geKU") + We(796, 816, 820, 809, "VE3k") + co(1101, 1136, 1173, 1159, "*j0$")]() {
    function n(r, g, a, I, c) {
      return We(r - 29, g - 255, a - -1095, I - 226, c);
    }
    function t(r, g, a, I, c) {
      return we(a - 4, g - 412, a - 127, c);
    }
    function e(r, g, a, I, c) {
      return We(r - 161, g - 259, g - -880, I - 252, a);
    }
    function A(r, g, a, I, c) {
      return Me(r - 375, g, a - 79, I - 39, I - -915);
    }
    function o(r, g, a, I, c) {
      return Ut(r - 381, a - -565, a - 466, I);
    }
    return !!this.#A?.[A(33, "wCA4", 45, 65) + t(832, 864, 841, 815, "5cr2")]?.[t(889, 885, 858, 829, "ocO]") + n(-315, -369, -331, -325, "ocO]") + e(-83, -66, "YgF#", -52) + A(122, "J]uR", 77, 101) + A(134, "Iq5C", 119, 127) + t(790, 768, 804, 844, "FHTL") + o(-209, -182, -207, "9b2d")];
  }
  get [Ut(367, 352, 333, "Fx2e") + We(816, 837, 815, 808, "gu3N") + Me(975, "qh(G", 1030, 1021, 990) + We(727, 753, 766, 800, "rgpd") + co(1190, 1158, 1119, 1154, "*j0$") + Ut(382, 376, 361, "VE3k")]() {
    function n(r, g, a, I, c) {
      return Me(r - 25, r, a - 259, I - 45, g - -539);
    }
    function t(r, g, a, I, c) {
      return co(r - 298, g - -888, a - 112, I - 379, I);
    }
    function e(r, g, a, I, c) {
      return Ut(r - 252, a - -42, a - 373, r);
    }
    function A(r, g, a, I, c) {
      return We(r - 454, g - 202, g - -8, I - 450, c);
    }
    function o(r, g, a, I, c) {
      return we(I - -257, g - 397, a - 473, c);
    }
    return !!this.#A?.[n("Ee]Z", 478, 472, 500) + o(538, 588, 587, 554, "3Jv[")]?.[o(557, 544, 521, 546, "JA$2") + o(561, 573, 526, 548, "gu3N") + A(780, 760, 798, 783, "kS&E") + e("*j0$", 296, 332) + n("rsnh", 514, 485, 498) + t(276, 239, 219, "ol1O") + n("iqYr", 456, 449, 476)];
  }
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return tA(I - 370, a);
  }
  const e = i();
  function A(g, a, I, c, s) {
    return tA(g - -628, s);
  }
  function o(g, a, I, c, s) {
    return tA(s - 577, a);
  }
  function r(g, a, I, c, s) {
    return tA(c - -265, g);
  }
  for (; ; )
    try {
      if (-parseInt(o(1004, "%vXJ", 975, 1075, 1063)) / 1 + -parseInt(r("yx91", 352, 235, 353, 386)) / 2 + -parseInt(o(1152, "%vXJ", 963, 1025, 1059)) / 3 + parseInt(t(937, "XbA!", 1031, 1111, 942)) / 4 * (parseInt(o(1225, ")lp@", 1093, 1185, 1146)) / 5) + parseInt(A(-125, -129, -136, -132, "rMzy")) / 6 * (-parseInt(t(1088, "#0nq", 1001, 1098, 944)) / 7) + parseInt(A(-162, -204, -103, -242, "C5qs")) / 8 + parseInt(t(976, "CA%M", 883, 821, 980)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(on, -507868 * 1 + -871846 + 1922223);
function z(i, n, t, e, A) {
  return tA(n - -783, i);
}
function X(i, n, t, e, A) {
  return tA(t - -116, e);
}
function on() {
  const i = ["jmodpmkFDa", "WR5UWRhcV38", "WQBdQWG0jW", "uSooWQ3cIMiCeSk+W60Bcmou", "e8kzhSkdCG", "WOVcVmo0m14", "dSkfEu3cNG", "er/cPmk9", "hCoAWRBcObG", "W7ZcTLFdICkq", "lb7dNmoKW6K", "WQKjWPJdMCk8", "eCoCWRKTW70", "WR1pzZqX", "WPeyWPvE", "WQTFmCo7W55GWQicpcZdQKO", "lrZdJCoPW7i", "WPtcVCkwWQ0W", "rCkQvCoCiq", "hGZcVW", "W4DUgG", "WOtcOCo8", "W5FdQMS", "qmkGwSoCjG", "xclcIsRdTq", "mCkmW53cHtLNW5X7WQldI37cSCkXW6C", "W7ddTNFdM8ke", "dCkzamke", "WPZdPCklx8o5", "WQ7dOmkjEmor", "supdKmk+ta", "WP0eWOfEDq", "mr02WOzD", "WReqd8koW70", "nmkzW6JdKxO", "WRubWONdJ8k3", "eKBdVXtdLG", "WP4rmbe", "W6NcPvFdLCkh", "WONcUSo+ja", "pmkQlcxdNa", "pSk9kGNdMW", "WQaoWOJdMCoY", "WPqknHhdHa", "WRDjBcKN", "vIlcNcRdPG", "y8kxlr3cKW", "DmoaWOtdK2K", "wJztWOH3", "pSohWRu7W6a", "cCojkW", "WOVcQ8o1m0G", "WRuOWRNdL8kN", "xLldMCkYxa", "usfHWOHm", "W4/dSSkyhay", "kKDfW6NcUG", "uZzNWQnr", "WRHdzr8W", "WPWMjW3dNG", "nmk9la", "WPJdUCkl", "rJJcGaZdRG", "ofVdHcRdRG", "W6xcUuZdJG", "fSkxe8kora", "W7FcS8kAEfu", "FwJdOmkisa", "W58CWPBdKCoU", "W4xdK8k2WQ8", "WPSeWPXcDa", "umkKv8obnW", "grlcHSoRcwddRgSCWO7cTJ4", "WQOygq", "mcz4iSk6", "W6dcVKe", "halcR8kRW4K", "WP4zWOzFyW", "umkrkX5L", "rf7dUCo8WPdcKCk1W6ilWP/cTmoOtG", "W69AsSowW6i", "WPJcOCoAsvyTy3mWAmobWPG", "W4aCWPC", "x8kDjGHU", "WPhdGcOVpW", "W6tcUfBdJSkB", "A8oiWOZcPgC", "gmoymmkmCW", "nrNcVSkHW5u", "W7OyWPFdOmoT", "nsXNkCkT", "W7ulCSkRWOi", "b8kDW7/cKG", "tmkuW7ldNZ8", "yCoxWPW", "W71nr8oCW7m", "WQ/dQq8", "W4ldHmk9W7iN", "qmk3xSon", "W5HuW6jJwW", "W7boifqQ", "umkherJcTq", "wCkwoX4R", "qvldUSk2wG", "sCkjdq", "gaRcUmkTW48", "nISrWQXR", "WPH1sdWm", "WPKBWPy", "W59KjaLz", "gmkQW6hcVr8", "W5xdOMddNmkn", "hNNdSttdRW", "W4tdIw/dGSkn", "aSoUW5fgha", "f8oaWQu7W54", "mczHiSkW", "wt7cUq7dTa", "WQmFdSkfWRq", "FCksW6tcNCkB", "lmkdoMZcVW", "qd/cHWhdSW", "WRDdBc4W", "W5XGabCo", "wmogWOVcJcO", "iXJdJCoPW7i", "u2r7WQnx", "nsbS", "W7qeymkN", "WQCscq", "eCowvv/dOt4UB8kps29pWQ0", "W6mwW4xdISol", "WRrQWQhcUhi", "W5DUgGau", "bgqpWObP", "WQysWPtdJ8kH", "DCoHWR/cKgy", "WQ4xWP9yyW", "qSk1W4zUWRO", "W49qW6rCvW", "fSkxeCklFa", "WR1czdu", "hf3dLdVdRG", "tSokk8kJBCo6yIO", "W63cU0NdQCkq", "BSotWPdcKG", "vSk1WPqBF8kslmoeW4DtW4eTaa", "WOi0q0Dsg287W5rQWQxdOq", "WRv9WQRcR2q", "rSkdaH/cPq", "WPSgoWFdJW", "W6uun2L2W57dS3JcTfBcJwJdHga", "WR3dJCkIy8oL", "WRBdRW4wjW", "CmkrkX5L", "g8oDWRFcUWu", "W7VcVCkAxLa", "WPJdVSkDWQW3", "W7PExmoCW64", "wCkkoHr5", "W4tdHmkGW64M", "b8kxW6/dUtC", "WPJdS8kDW6WO", "WPyrWOa", "WPtdR8kkWQ02", "jSkkW6NdKYG", "W5fGW4u", "eXNcO8k9W5q", "kqNdTCoJW7K", "W59RW4FcNsm", "W7LAvSog", "W7NcVCkCxLW", "mCkDW6JdIty", "WPuuWO3dTSoTW5ZcTG", "W7xcLSk+W6G3", "c8o0W65klW", "F13dKJddPW", "W7tcLxddKSkW", "E8kdW7xcLCkD", "CmkhfWm", "BmosWOVcLwu", "WPjkWQNcN18", "EGhdRCkBvq", "W7VcTLBdTSkC", "dSooWRFcPXi", "bSodk8ktEW", "emoCWQddUHS", "WPZcPCowfMC", "W6/cMSkSCeG", "CrldTSkltG", "W4qkWRRdUmoL", "WQSudW", "W5PxgX0O", "BCo9WOBdN3K", "W5NdVSkTDbWiWQtdOWFcHrebWQG", "pmk2ls/dVG", "nmkzW6NdKJm", "WQJdNSkHECoY", "eSkzbSkjya", "WRNdVCkntCom", "W7VcT8kiEKG", "sSkSqConnW", "c8kpW7ldMcK", "uIfZWQ1w", "WPTIW5/cG8kdrmo5", "fCk1jCkGta", "oSk5vKpcHq", "b8kEW5a", "nSomDKhcKW", "o1DfW4lcVW", "fISMWR5w", "pISxW4LJ", "kbZdKmoK", "W6jYECo4W4m", "emkxW7u", "qSkkDv3cNG", "W5BdL8kGW68", "idykWOD+", "Emk3hfTh", "W6tcTLhdMCkD", "WRHdytS2", "bSo0W4Pq", "xYP8WRG", "tmoDWOVdK2m", "o8ksW43dKZ0iW6ldMdaYjKrd", "CfldMcVdRG", "kSkzbSkc", "WPJdRSkNWRqL", "WPaxWODsBW", "WRvQWQVcR3i", "bmodpmkFDa", "WRPlCq", "y8ooWPVcHgq", "WQCHmmkMW6y", "W6i9WPZcLxjIF8om", "WQz9WQZcSMm", "cmkxaa", "W54Bsmk+WQK", "pZ1TnmkT", "WRymDtddPq", "w8ooWPtdGMhcUmkTzmowf3hcP2y", "W41MW4pcKSkl", "sSknjHHI", "W6VcSLhdSSkc", "xSopWPldJMlcU8oztSoncepcOq", "jXJdNCoUW78"];
  return on = function() {
    return i;
  }, on();
}
function fA(i, n, t, e, A) {
  return tA(t - -961, A);
}
function aA(i, n, t, e, A) {
  return tA(i - 979, n);
}
function tA(i, n) {
  i = i - 453;
  const t = on();
  let e = t[i];
  if (tA.kPioDB === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    tA.eMuIDF = a, tA.fWpFUe = {}, tA.kPioDB = !0;
  }
  const o = t[-8962 * 1 + -9 * 751 + 15721], r = i + o, g = tA.fWpFUe[r];
  return g ? e = g : (tA.LjKbcY === void 0 && (tA.LjKbcY = !0), e = tA.eMuIDF(e, n), tA.fWpFUe[r] = e), e;
}
function WA(i, n, t, e, A) {
  return tA(e - -879, i);
}
class Zc {
  constructor(n) {
    function t(e, A, o, r, g) {
      return tA(o - -39, r);
    }
    this[t(603, 659, 610, "FH^W") + t(534, 692, 581, "1@Mu") + "d"] = n;
  }
  [X(404, 421, 415, "lf6O") + "se"];
  [X(620, 527, 572, "n#Si") + WA("06MX", -269, -134, -223) + X(366, 591, 487, "tMss") + fA(-524, -468, -466, -369, "#[XA")] = [X(446, 647, 548, "hYKc") + z("Rp9Q", -133) + "ic", z("FH^W", -202) + X(477, 502, 558, "%Ilz") + "ic"];
  [X(537, 487, 469, "y(&8") + X(509, 568, 477, "#[XA")];
  async [WA("ssW&", -432, -211, -327)](n) {
    function t(a, I, c, s, C) {
      return aA(a - -829, I);
    }
    const e = await this[t(640, "JPL!") + t(682, "tqef") + o(1269, 1305, "#0nq", 1260, 1262)](n);
    await Promise[o(1344, 1368, "ssW&", 1327, 1426) + r(1364, 1368, 1484, 1596, "CA%M")]([this[r(1458, 1491, 1523, 1489, "C5qs") + t(718, "h&M6") + "d"][r(1426, 1292, 1413, 1459, "9]3o")](n), this[t(703, "#0nq") + g("%Y^R", 1372, 1485, 1384) + "e"](e)]);
    function A(a, I, c, s, C) {
      return z(C, I - 0);
    }
    function o(a, I, c, s, C) {
      return X(a - 108, I - 469, C - 910, c);
    }
    function r(a, I, c, s, C) {
      return WA(C, I - 237, c - 498, c - 1828);
    }
    function g(a, I, c, s, C) {
      return X(a - 320, I - 90, s - 922, a);
    }
    this[o(1525, 1410, "4]Ze", 1496, 1434) + A(-349, -263, -181, -332, "ZJtV") + r(1556, 1590, 1587, 1574, "lf6O")]();
  }
  async [fA(-305, -327, -418, -334, ")lp@") + z("hYKc", -153) + "se"](n) {
    function t(g, a, I, c, s) {
      return z(g, a - 1499);
    }
    function e(g, a, I, c, s) {
      return fA(g - 331, a - 295, c - 314, c - 212, I);
    }
    function A(g, a, I, c, s) {
      return fA(g - 193, a - 246, g - 1868, c - 144, I);
    }
    function o(g, a, I, c, s) {
      return fA(g - 167, a - 128, s - 207, c - 75, g);
    }
    function r(g, a, I, c, s) {
      return z(a, I - 498);
    }
    try {
      if (o("yx91", -244, -186, -342, -220) !== o("rMzy", -356, -190, -396, -275))
        return this[r(392, "hJ&g", 302, 195, 366) + t("hYKc", 1346, 1316, 1338, 1230) + "se"]()?.[o("0rEb", -243, -251, -95, -133) + o("IeWe", -175, -281, -334, -216)]?.[e(63, 111, "E0]s", 50, 152) + r(268, "Mlpo", 263, 367, 291)];
      {
        const g = await fetch(n);
        if (!g.ok) {
          if (r(273, "9]3o", 251, 187, 276) === o("hYKc", -287, -252, -353, -230)) return null;
          throw new Error(A(1367, 1280, "]Ky6", 1487, 1354) + r(426, "Rp9Q", 360, 339, 310) + r(334, "9]3o", 329, 251, 385) + r(257, "hYKc", 182, 266, 69) + "d.");
        }
        this[A(1511, 1558, "%Y^R", 1560, 1432) + "se"] = await g[e(-60, 40, "h&M6", 11, -17)]();
      }
    } catch (g) {
      if (r(357, "pLlD", 409) !== e(18, -185, "lf6O", -100)) this[o("IeWe", -278, -316, -284, -282) + "se"] = void 0, console[e(107, -12, "Rp9Q", 5)](g);
      else return _0x210a22 instanceof _0x47fc77 && _0x1ccf70[o("tqef", -126, -118, -112, -208) + r(130, "#0nq", 193)](_0x3e9662), null;
    }
  }
  async [X(559, 358, 437, "#0nq") + aA(1477, "06MX") + "e"](n) {
    function t(g, a, I, c, s) {
      return WA(I, a - 246, I - 456, a - 1067);
    }
    this[A(676, 519, 616, "MEjB") + t(783, 677, "1@Mu")] = void 0;
    function e(g, a, I, c, s) {
      return WA(I, a - 320, I - 444, c - 1307);
    }
    function A(g, a, I, c, s) {
      return X(g - 289, a - 38, I - 135, c);
    }
    if (!n) {
      if (A(524, 641, 591, "JPL!") !== A(576, 671, 574, ")%N6")) return _0x1ea2e3[r(316, 295, 370, 268, "tqef") + A(545, 732, 611, "yx91")][e(1102, 1037, "hYKc", 979) + r(475, 429, 420, 427, "tdpR")];
      console[t(779, 690, "tdpR")](t(834, 796, "pLlD") + t(844, 884, "pLlD") + o("r&Tq", 584, 463, 535) + r(462, 459, 548, 448, "UYjT") + o("y(&8", 669, 675, 562)), this[o("pLlD", 599, 568, 499) + "se"] = void 0;
      return;
    }
    function o(g, a, I, c, s) {
      return aA(c - -974, g);
    }
    function r(g, a, I, c, s) {
      return X(g - 28, a - 36, a - -51, s);
    }
    await this[e(1082, 940, "06MX", 1041) + o("CA%M", 353, 368, 470) + "se"](n);
  }
  async [X(550, 520, 511, "hJ&g") + z("1@Mu", -312) + WA("yx91", -233, -233, -212)](n) {
    function t(g, a, I, c, s) {
      return aA(c - -1399, I);
    }
    const e = await fetch("" + n + this[A(-412, -294, -453, ")%N6") + r(507, 575, ")%N6") + A(-328, -374, -424, "6qTP") + t(-1, 6, "6qTP", 43)][-6162 + 410 * -23 + 1 * 15592]);
    function A(g, a, I, c, s) {
      return z(c, g - -147);
    }
    const o = e.ok ? -13664 + -1708 * -8 : 3 * 2207 + 2188 * -1 + -4432;
    function r(g, a, I, c, s) {
      return z(I, g - 699);
    }
    return "" + n + this[A(-239, -355, -272, "9]3o") + A(-267, -244, -205, "6qTP") + r(599, 582, "Mlpo") + t(173, 201, "C5qs", 213)][o];
  }
  [z("1@Mu", -306) + X(633, 417, 537, "FH^W") + "s"](n) {
    function t(A, o, r, g, a) {
      return fA(A - 463, o - 281, A - 1211, g - 139, a);
    }
    function e(A, o, r, g, a) {
      return X(A - 344, o - 72, A - -471, a);
    }
    n[t(783, 681, 785, 892, "%8Mj") + "ch"]((A) => console[e(-72, -142, 36, 2, "#0nq")](A));
  }
  [aA(1562, "h&M6") + WA("FH^W", -127, -86, -195) + X(382, 390, 357, "tqef")](n) {
    function t(A, o, r, g, a) {
      return X(A - 380, o - 428, g - -478, o);
    }
    function e(A, o, r, g, a) {
      return fA(A - 390, o - 178, A - 1468, g - 499, g);
    }
    n[e(1101, 1078, 1151, "#185") + "ch"]((A) => console[t(89, "rMzy", 64, 22)](A));
  }
  [WA("gdQi", -161, -298, -272) + aA(1433, "06MX")]() {
    function n(A, o, r, g, a) {
      return aA(g - -1797, A);
    }
    function t(A, o, r, g, a) {
      return aA(A - -1308, r);
    }
    function e(A, o, r, g, a) {
      return WA(r, o - 433, r - 23, A - 1320);
    }
    return window[t(299, 294, "#0nq") + t(286, 318, "%Y^R")][e(1014, 972, "ssW&") + n("CTUL", -322, -297, -308)];
  }
  [aA(1538, "]7)U") + X(655, 645, 550, "gdQi") + aA(1578, "CTUL")]() {
    function n(r, g, a, I, c) {
      return WA(c, g - 447, a - 221, I - 1844);
    }
    function t(r, g, a, I, c) {
      return WA(a, g - 345, a - 228, c - 843);
    }
    function e(r, g, a, I, c) {
      return z(a, c - 498);
    }
    function A(r, g, a, I, c) {
      return WA(c, g - 55, a - 337, I - -87);
    }
    function o(r, g, a, I, c) {
      return fA(r - 65, g - 202, g - 1272, I - 350, I);
    }
    try {
      if (A(-443, -394, -565, -482, "]Ky6") === o(789, 861, 880, "%8Mj", 892)) {
        if (!this[A(-331, -505, -514, -400, "]Ky6") + "se"]) {
          if (t(680, 498, "tqef", 672, 559) !== t(636, 499, "hYKc", 496, 564)) throw new zn(e(211, 433, "XbA!", 276, 334) + A(-376, -318, -184, -304, "y(&8") + n(1536, 1630, 1616, 1571, "BpjL") + o(996, 876, 910, "tdpR", 823) + ".");
          _0x44ec99[e(379, 330, "n#Si", 361, 374) + "ch"]((r) => _0x491481[o(727, 769, 845, "y(&8", 891)](r));
        }
        if (!this[A(-324, -215, -342, -322, "n#Si") + t(439, 409, "06MX", 544, 451) + "d"][t(567, 592, "%8Mj", 468, 569) + o(920, 992, 1027, "CA%M", 1097) + e(251, 311, "#0nq", 107, 207) + "ed"]())
          if (o(1036, 1004, 992, "#0nq", 1029) !== e(74, 277, "h&M6", 182, 170)) {
            _0x2ef6c3[t(647, 526, "tqef", 474, 593)](o(767, 792, 761, "lf6O", 701) + n(1513, 1514, 1485, 1587, "#185") + o(967, 901, 910, "]Ky6", 883) + e(310, 383, "IeWe", 352, 290) + e(324, 240, "FH^W", 392, 295)), this[o(860, 785, 814, "C5qs", 802) + "se"] = void (-5170 + -2 * -2585);
            return;
          } else throw new zn(t(605, 459, "FH^W", 428, 486) + e(262, 105, "#185", 169, 168) + n(1705, 1673, 1662, 1638, "IeWe") + t(668, 648, "]7)U", 610, 653) + ".");
        this[A(-203, -412, -423, -311, "#[XA") + n(1449, 1461, 1344, 1426, "ssW&")] = new Ca(_c(this[t(509, 373, "IeWe", 323, 436) + "se"], this[o(829, 853, 744, "9]3o", 867) + e(264, 262, "06MX", 239, 169)]())), this[A(-445, -454, -396, -507, "#185") + e(296, 204, "#[XA", 361, 291) + "s"](this[e(137, 85, "aGcN", 215, 208) + e(210, 258, "0rEb", 437, 326)][t(598, 710, "y(&8", 591, 612) + "s"]), this[A(-333, -284, -296, -357, "%8Mj") + A(-336, -358, -390, -389, "XbA!") + t(512, 575, "#[XA", 462, 471)](this[n(1565, 1636, 1563, 1650, "4]Ze") + n(1553, 1539, 1537, 1519, "n#Si")][e(409, 315, "h&M6", 392, 361) + o(1008, 962, 991, "tdpR", 1079)]);
      } else this[A(-390, -527, -401, -467, "r&Tq") + "se"] = void (3709 + -1 * 8779 + -6 * -845), _0x1350d3[A(-369, -431, -433, -440, "ssW&")](_0x6d8b85);
    } catch (r) {
      if (e(321, 501, "aGcN", 400, 390) !== e(387, 521, "ZJtV", 502, 413)) {
        if (r instanceof zn) e(76, 153, "BpjL", 265, 190) === n(1735, 1644, 1534, 1645, "0rEb") ? this[o(1082, 960, 962, "FH^W") + e(269, 145, "06MX", 294, 202) + "d"] = _0x466864 : r[A(-374, -399, -340, -457, "aGcN")]();
        else if (r instanceof Error)
          if (e(324, 299, "CTUL", 227, 229) !== A(-328, -472, -332, -449, "4]Ze")) console[A(-413, -518, -428, -447, "tdpR")](r);
          else {
            _0x5c41f2 instanceof _0x35bafb ? _0x8e1bfc[A(-354, -397, -475, -457, "aGcN")]() : _0x40dd9e instanceof _0x252fe4 && _0x4fb753[n(1565, 1684, 1559, 1612, "]Ky6")](_0x3cbd53);
            const a = {};
            a[n(1351, 1357, 1416, 1434, "Rp9Q") + o(995, 874, 755, "ssW&")] = !1, a[t(611, 630, "9]3o", 626, 509) + "s"] = [], a[t(413, 603, "BpjL", 438, 485) + e(292, 215, "JPL!", 248, 299)] = [], a[t(481, 421, "]7)U", 371, 475) + n(1445, 1543, 1498, 1509, "E0]s") + e(132, 250, "0rEb", 179, 223)] = void 0, a[o(718, 836, 832, "lf6O")] = function() {
            }, a[o(686, 807, 744, "%Ilz") + o(939, 990, 1111, "BpjL")] = "", this[n(1594, 1644, 1693, 1588, "r&Tq") + A(-291, -383, -327, -296, "sO7(")] = new _0x36e702(a);
          }
        const g = {};
        g[A(-256, -253, -241, -288, "XbA!") + o(831, 872, 975, "BpjL")] = !1, g[A(-543, -315, -533, -438, "Mlpo") + "s"] = [], g[e(457, 479, "JPL!", 280, 356) + o(983, 962, 1043, "tdpR")] = [], g[A(-423, -335, -310, -329, "yx91") + t(561, 510, "XbA!", 610, 520) + o(705, 767, 770, "FH^W")] = void 0, g[t(516, 431, "]7)U", 654, 550)] = function() {
        }, g[o(887, 979, 1061, "C5qs") + A(-304, -353, -311, -396, "XbA!")] = "", this[A(-311, -384, -502, -408, "tdpR") + t(485, 513, "ssW&", 460, 425)] = new Ca(g);
      } else return this[t(374, 490, "tMss", 516, 464) + e(385, 413, "rMzy", 295, 294)];
    }
  }
  [fA(-377, -273, -290, -317, "ssW&") + fA(-366, -493, -422, -430, "aGcN") + WA("tdpR", -173, -269, -254) + WA("aGcN", -370, -401, -352)]() {
    function n(e, A, o, r, g) {
      return z(g, e - 1493);
    }
    function t(e, A, o, r, g) {
      return aA(o - -1229, r);
    }
    return !!this[n(1190, 1106, 1289, 1204, "%Y^R") + t(525, 508, 436, "#0nq")];
  }
  [z("JPL!", -293) + aA(1550, "]Ky6") + z("FH^W", -123) + "t"]() {
    function n(e, A, o, r, g) {
      return aA(g - -1730, e);
    }
    function t(e, A, o, r, g) {
      return aA(g - -731, A);
    }
    return this[t(920, "1@Mu", 939, 778, 884) + n("06MX", -150, -143, -188, -247)];
  }
  [z("%Ilz", -111) + fA(-474, -470, -473, -479, "IeWe") + "se"]() {
    if (!this[n(-589, -546, "IeWe", -516) + "se"]) return e(113, "C5qs", 104) === e(36, "1@Mu", 149) ? !!this[n(-192, -194, "sO7(", -311) + n(-621, -552, "tdpR", -518)] : null;
    function n(r, g, a, I, c) {
      return z(a, I - -205);
    }
    function t(r, g, a, I, c) {
      return z(g, c - 1437);
    }
    function e(r, g, a, I, c) {
      return z(g, a - 263);
    }
    function A(r, g, a, I, c) {
      return aA(c - -908, g);
    }
    function o(r, g, a, I, c) {
      return X(r - 385, g - 256, c - 59, r);
    }
    try {
      if (n(-362, -264, "n#Si", -312, -252) !== A(556, "r&Tq", 638, 516, 611)) _0x2c240b[A(601, "%Ilz", 792, 708, 714)](_0xdd8ee);
      else return JSON[e(-93, "r&Tq", 3, -57, 90)](this[e(6, "#[XA", 44, 124, -36) + "se"]);
    } catch (r) {
      if (e(214, "4]Ze", 167) !== o("%vXJ", 600, 423, 456, 541)) throw new _0x2bbc5d(A(798, "C5qs", 585, 723, 683) + n(-579, -528, "#185", -535) + n(-506, -384, "Kb@O", -505) + t(1276, "%Y^R", 1172, 1221, 1216) + ".");
      if (r instanceof Error)
        if (o("ssW&", 532, 490, 612, 608) !== A(553, "4]Ze", 498, 684, 587)) y[e(-58, "%8Mj", -8) + A(684, "Kb@O", 777, 709, 725)](r);
        else throw new _0x30cf68(t(1122, "0rEb", 1143, 1166, 1242) + t(1050, "tqef", 1105, 1157, 1155) + t(1078, "Rp9Q", 1201, 1047, 1159) + o("pLlD", 428, 409, 461, 400) + "d.");
      return null;
    }
  }
  [z("ssW&", -298) + fA(-528, -365, -412, -448, "Rp9Q")]() {
    function n(r, g, a, I, c) {
      return aA(r - -5, g);
    }
    function t(r, g, a, I, c) {
      return aA(I - -521, c);
    }
    function e(r, g, a, I, c) {
      return fA(r - 432, g - 351, c - 431, I - 395, a);
    }
    function A(r, g, a, I, c) {
      return WA(a, g - 252, a - 130, g - 1771);
    }
    return this[t(852, 935, 908, 955, "ssW&") + t(890, 1103, 970, 995, "tMss") + "se"]()?.[n(1584, "tqef") + A(1594, 1509, "BpjL")]?.[e(104, 276, "FH^W", 236, 160)] || [];
  }
  [fA(-419, -331, -432, -387, "Mlpo") + fA(-435, -347, -420, -302, ")%N6") + fA(-275, -300, -360, -300, "CTUL")]() {
    function n(r, g, a, I, c) {
      return z(I, r - 1597);
    }
    function t(r, g, a, I, c) {
      return fA(r - 460, g - 21, g - 1435, I - 192, a);
    }
    function e(r, g, a, I, c) {
      return X(r - 169, g - 404, a - -571, c);
    }
    const A = this[e(-125, -39, -98, -43, "yx91") + n(1456, 1453, 1355, "]Ky6") + "se"]();
    function o(r, g, a, I, c) {
      return aA(a - -694, g);
    }
    return A?.[e(-275, -174, -181, -232, "]7)U") + e(-226, -180, -105, -39, "CA%M")]?.[t(1236, 1131, "33#x", 1209) + o(1034, "%vXJ", 980)];
  }
}
const hr = Fe(void 0);
hr.displayName = "CommonConfigurationContext";
function a0() {
  const i = Ce(hr);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, n) {
  const t = i();
  function e(a, I, c, s, C) {
    return GA(c - -49, I);
  }
  function A(a, I, c, s, C) {
    return GA(s - 331, c);
  }
  function o(a, I, c, s, C) {
    return GA(c - -16, s);
  }
  function r(a, I, c, s, C) {
    return GA(a - -516, I);
  }
  function g(a, I, c, s, C) {
    return GA(a - -633, c);
  }
  for (; ; )
    try {
      if (parseInt(r(-354, "sfKC", -345, -353, -355)) / 1 + -parseInt(r(-350, "%S6m", -344, -342, -342)) / 2 + parseInt(r(-362, "%7YK", -353, -361, -355)) / 3 * (parseInt(g(-464, -465, "JeN$", -466, -473)) / 4) + -parseInt(A(484, 493, "9uIn", 489, 496)) / 5 + -parseInt(g(-469, -479, "rOz$", -460, -472)) / 6 + -parseInt(e(126, "CXBi", 119, 113, 126)) / 7 * (parseInt(o(143, 142, 139, "TI[w", 135)) / 8) + parseInt(g(-463, -461, "c*pg", -461, -456)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(nn, -1873106 + -32701 * -5 + -29 * -91309);
function GA(i, n) {
  i = i - (-1 * -2077 + 7 * 1123 + -9786);
  const t = nn();
  let e = t[i];
  if (GA.KVoviI === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    GA.OaozLa = a, GA.NdPpuv = {}, GA.KVoviI = !0;
  }
  const o = t[2 * -4469 + -2 * 1681 + 3075 * 4], r = i + o, g = GA.NdPpuv[r];
  return g ? e = g : (GA.GZkuWL === void 0 && (GA.GZkuWL = !0), e = GA.OaozLa(e, n), GA.NdPpuv[r] = e), e;
}
function nn() {
  const i = ["W5fLW4hcImoEuSkAWRJcRmkUWPHueq", "qmkYW7/dK8kyWQJdUq9vWOy9p0K", "ACoxuCoQW4/dKhGdqa", "W5JdUJJdUIHwsSkHha", "kN/cSY0YtMBdMN/dTCogCNm", "aYdcNea", "W6xdQXWQEa/dVCoaW5/cP8oMWOOY", "w8opaMRdSgtdLmk8jf/cT0tdLa", "dCozW5TjA8kFlCkTjc8A", "WQ/cR8k1WP13W4FdUI3dRmoxW6S", "ACk6WOhcKmkV", "W6TugSkrdN5PlCoQ", "W5FcTmooxdddQtjJWRtcLmoRW7ldLq", "whRdJvxdJSksW4BdOCoA", "WP5/hSoQpXhdHSkgCSoFtW", "sh4uEmkzW7hcQ3HiCKq", "WOtcKCkCW59JBmobW68zm2z9WPq", "WRGkeCoNW5ldTM3cLWBdJ3CkEa", "nGNcJ8osWQBcTCkGW5v0aeD2WRW", "WOBcLSkDW55IBSohW64Wgxr/WOG"];
  return nn = function() {
    return i;
  }, nn();
}
function zc() {
  const { assetsDirectoryPath: i } = a0(), [n, t] = lA();
  V(() => {
    async function o() {
      const r = new Vc(), g = new Zc(r);
      function a(I, c, s, C, E) {
        return GA(E - 683, s);
      }
      await g[a(853, 857, "*gQx", 857, 854)](i), t(g);
    }
    o();
  }, [i]);
  function e(o, r, g, a, I) {
    return GA(o - -832, r);
  }
  const A = {};
  return A[e(-676, "MTSc") + "le"] = n, A;
}
function rn() {
  var i = ["W7BdUfxdRCkcCsjiWRqxE2i", "eqRdJ2mJCSoE", "W4RcNI86l0rHW4lcI8kLW5TG", "hSkTnKPwW4OGur3cQrzOWRG", "wmo5BSkVWRBcQCk5m8keECo9BKS", "WOCcBe1/iSkKWRFdGCk/xuq", "s19Eoc7dS2xdTI7dMSovhhu", "W6/cOSoSoSohw10", "fe7dN2FdNaVcLYNdNXFcK8kGW4i", "rxSpW5Lr", "pd9lWPNdRG", "W6ldQSkpzmk9nMK2rMzOqa", "hCkYWOnOxK0Gm2RdRKLQWPW", "W4tdIwZdQblcNxLtWPCJzWu", "iCo6WRugrCkasev3WP7cG8koWPW", "omoHW5WGibtdJ8kuWQVdVmkAWOpcHW", "hehcHH7cKIO0WP9jnSkNi8om", "tahdJw4a", "rgqkW4xcPweCnCo/lgxcSG"];
  return rn = function() {
    return i;
  }, rn();
}
(function(i, n) {
  function t(I, c, s, C, E) {
    return NA(C - -973, I);
  }
  function e(I, c, s, C, E) {
    return NA(C - 971, E);
  }
  function A(I, c, s, C, E) {
    return NA(E - -647, s);
  }
  var o = i();
  function r(I, c, s, C, E) {
    return NA(s - 760, c);
  }
  function g(I, c, s, C, E) {
    return NA(I - -894, C);
  }
  for (; ; )
    try {
      var a = parseInt(A(-422, -409, "w4Ge", -416, -418)) / 1 + -parseInt(g(-671, -671, -681, ")g]N", -667)) / 2 + -parseInt(A(-412, -409, "2o0J", -415, -417)) / 3 * (-parseInt(r(985, "Tj7p", 991, 1e3, 994)) / 4) + parseInt(e(1209, 1206, 1201, 1205, "4wwg")) / 5 + parseInt(r(983, "PgiF", 992, 993, 1e3)) / 6 + parseInt(t("QMyF", -746, -740, -740, -737)) / 7 + -parseInt(e(1188, 1203, 1204, 1197, "OLcd")) / 8;
      if (a === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(rn, 1 * 28569 + 63 + 807520);
function NA(i, n) {
  i = i - (-3 * -725 + 8755 + -10711);
  var t = rn(), e = t[i];
  if (NA.jOptth === void 0) {
    var A = function(I) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        C += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, o = function(I, c) {
      var s = [], C = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (var d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    NA.njMbmS = o, NA.vfCvLd = {}, NA.jOptth = !0;
  }
  var r = t[4598 + -9381 * 1 + 4783], g = i + r, a = NA.vfCvLd[g];
  return a ? e = a : (NA.whjLwm === void 0 && (NA.whjLwm = !0), e = NA.njMbmS(e, n), NA.vfCvLd[g] = e), e;
}
function Xc({ crosshatch: i }) {
  function n(e, A, o, r, g) {
    return NA(A - -306, g);
  }
  function t(e, A, o, r, g) {
    return NA(A - 868, o);
  }
  return i?.[t(1099, 1096, "Tj7p") + "id"] ? mt[t(1087, 1088, "ncXg") + "r"] : mt[n(-87, -85, -92, -75, "w4Ge")];
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return BA(c - 450, s);
  }
  function e(g, a, I, c, s) {
    return BA(I - 672, s);
  }
  function A(g, a, I, c, s) {
    return BA(I - 964, g);
  }
  const o = i();
  function r(g, a, I, c, s) {
    return BA(g - -595, s);
  }
  for (; ; )
    try {
      if (parseInt(r(-269, -257, -282, -276, "vrHJ")) / 1 * (parseInt(r(-274, -266, -291, -290, "9!6I")) / 2) + parseInt(e(1009, 1e3, 1015, 1009, "nK!h")) / 3 * (parseInt(A("7oRW", 1274, 1282, 1292, 1295)) / 4) + -parseInt(e(1009, 1014, 997, 984, "ZzYi")) / 5 * (-parseInt(A("qfu2", 1292, 1305, 1301, 1287)) / 6) + -parseInt(t(795, 812, 785, 799, "t*dx")) / 7 * (-parseInt(t(791, 791, 784, 800, "sZJ!")) / 8) + parseInt(t(774, 755, 781, 773, "wZlL")) / 9 + -parseInt(A("Xq7Z", 1312, 1310, 1323, 1306)) / 10 * (parseInt(r(-253, -257, -239, -242, "dugA")) / 11) + -parseInt(A("nK!h", 1278, 1288, 1287, 1285)) / 12 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(an, 475 * 2227 + 885695 * -2 + 1655876);
function BA(i, n) {
  i = i - 312;
  const t = an();
  let e = t[i];
  if (BA.fOpaiz === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    BA.JlMPII = a, BA.vUwmma = {}, BA.fOpaiz = !0;
  }
  const o = t[-1 * -2383 + -4465 + -2082 * -1], r = i + o, g = BA.vUwmma[r];
  return g ? e = g : (BA.ZPkenM === void 0 && (BA.ZPkenM = !0), e = BA.JlMPII(e, n), BA.vUwmma[r] = e), e;
}
function $c({ children: i }) {
  function n(I, c, s, C, E) {
    return BA(I - -317, s);
  }
  const { bramble: t } = zc();
  function e(I, c, s, C, E) {
    return BA(c - 92, I);
  }
  function A(I, c, s, C, E) {
    return BA(C - -247, s);
  }
  function o(I, c, s, C, E) {
    return BA(E - -651, I);
  }
  function r(I, c, s, C, E) {
    return BA(C - -862, E);
  }
  const g = bA(() => ({ redfin: Xc({ crosshatch: t?.[A(79, 77, "(F7g", 87) + A(69, 50, "Zu))", 65) + o("HQDd", -329, -324, -341, -324) + "t"]() }), crosshatch: t?.[e("1yw4", 405) + r(-541, -505, -530, -525, "r%ml") + n(3, 21, "vrHJ") + "t"](), bramble: t, wasLicenseValidated: t?.[n(-2, -3, "z!KE") + o("^kxP", -297, -319, -322, -306) + A(88, 73, ")ypU", 81) + r(-525, -525, -539, -526, "B3oW")]() }), [t]), a = {};
  return a[e("(F7g", 431)] = g, a[r(-528, -506, -517, -524, "4Ap]") + o("2DG0", -321, -309, -328, -316)] = i, D(zo[r(-557, -539, -553, -545, "tGpP") + e("upKy", 414)], a);
}
function an() {
  const i = ["W4RcQsxcLrKCW6m", "W5GQEcyb", "sCobW6VcHY4ok8kw", "aSkQbIBdMa", "emoWWQOkW5pdLwNcOHdcMa", "W4bkW6voW5pdQCk7WOfpswzhW58", "qx93WOJdUa", "gCodoNC7wCog", "WOJdIL8", "mXJcMLnSWQNdHCoGWOS7kSkuWOq", "w8kyvmkTACoRDqBcSCklW5pcSSkVra", "f8kaW7f+DchdHHJcLXlcRW0B", "jI00W4RcPCkpiCoRatJdT3G", "cmk+rrlcRG", "WOxcN1BdJgO", "WR1GWRjqW40ffCoPW7vZACkdFa", "W6jtgZ5RW4icW4jjWQ5PrW", "W6ldJa/cLtPZpf7dS8o3cG", "W43dH1JdKxHdWRmUmv8fW7xcU2K", "zLRcM8k6W7lcNmoquCk1omkIf8kl", "W5xcUZZcJ2e", "cKm/", "W55YAaK", "WPNcJ8korJu", "WP3cMqpcIY8", "W4tcVYtcTM0", "WOtcVspcRwVcGSoV", "lIZcLH/cMSoUWPa", "WPxdTvNcJd3dTMK8", "wCkAuSkVAmk4o1lcLSkeW64", "mH3cNfybW7RcPCoQWRSl", "Bmk4W7BdQ8oq", "W5NdTc5JASoOWOHlimkQwK3cNq", "WQyvg8k7W7RcMqmVWQWRnG", "fYrQWOdcTriJnSohha", "aSo0WOddN8kDobrHdhq", "WQxcRSkhnmoSjsjOWQyLW4W", "W6GXW68sWP0", "W4HGtSo2W7C"];
  return an = function() {
    return i;
  }, an();
}
const AC = 6 * -522 + 2992 + 2140;
class eC {
  transactionCountingToken;
  constructor(n) {
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), AC), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== -6733 + -3 * -1849 + 1586 && g.status !== -8453 * 1 + -8418 + 17272 : !0;
  }
}
class tC {
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
    if (this.#t = this.shouldCountTransactions(n), ur.info("Transaction counting is " + (this.#t ? "enabled" : "disabled")), lr()) {
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
function oC(i, n) {
  const { crosshatch: t, bramble: e } = Fn(), [A, o] = lA(null);
  V(() => {
    if (!t) return;
    (async () => {
      const a = new eC(n), I = new tC({ hwids: e.getHwids(), tokenHandler: a, transactionType: i });
      await I.init(t), o(I);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function nC({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = oC(t, n), A = bA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ D($o.Provider, { value: A, children: i });
}
const Oe = {};
Oe.FACE = "web-capture-face", Oe.DOCUMENT = "web-capture-document", Oe.MAGNIFEYE = "web-capture-magnifeye", Oe.SMILE = "web-capture-smile", Oe.PALM = "web-capture-palm", Oe.EYEGAZE = "web-capture-eyegaze", Oe.MULTIRANGE = "web-capture-multirange";
const iC = Oe;
var TA = function() {
  return TA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, TA.apply(this, arguments);
};
function yt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function rC(i) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var aC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gC = rC(function(i) {
  return aC.test(i) || i.charCodeAt(3987 + 9 * -443) === 1 * -7057 + -6894 + -7031 * -2 && i.charCodeAt(1) === 5690 + 5580 * -1 && i.charCodeAt(-884 * -5 + -5166 + 748) < -3 * 2566 + 1175 + 6614 * 1;
});
function sC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Xn, Ba;
function IC() {
  return Ba || (Ba = 6392 + 6391 * -1, Xn = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), I = 3006 + -2 * 1028 + -950; I < r.length; I++) {
      var c = r[I];
      if (!a(c)) return !1;
      var s = n[c], C = t[c];
      if (o = e ? e.call(A, s, C, c) : void 0, o === !1 || o === void 0 && s !== C) return !1;
    }
    return !0;
  }), Xn;
}
var cC = IC();
const CC = /* @__PURE__ */ sC(cC);
var T = "-ms-", Vt = "-moz-", J = "-webkit-", g0 = "comm", Wn = "rule", pr = "decl", BC = "@import", s0 = "@keyframes", QC = "@layer", I0 = Math.abs, mr = String.fromCharCode, Ji = Object.assign;
function EC(i, n) {
  return dA(i, -310 * -12 + -4911 + 397 * 3) ^ 45 ? (((n << 2 ^ dA(i, -2 * 923 + 2555 * -1 + 4401)) << -537 + -8864 * 1 + 9403 ^ dA(i, 3 * 1951 + 813 * -11 + 3091 * 1)) << 2 ^ dA(i, 1 * -9300 + 1115 * -8 + 18222)) << 2 * 2172 + 289 * 17 + -9255 ^ dA(i, -2 * -1948 + -1 * 3221 + -672) : 3314 + -3314 * 1;
}
function c0(i) {
  return i.trim();
}
function Ge(i, n) {
  return (i = n.exec(i)) ? i[3 * 2474 + -10 * 329 + -4132] : i;
}
function v(i, n, t) {
  return i.replace(n, t);
}
function wo(i, n, t) {
  return i.indexOf(n, t);
}
function dA(i, n) {
  return i.charCodeAt(n) | 6112 + -2 * -4693 + -7 * 2214;
}
function Dt(i, n, t) {
  return i.slice(n, t);
}
function le(i) {
  return i.length;
}
function C0(i) {
  return i.length;
}
function Kt(i, n) {
  return n.push(i), i;
}
function xC(i, n) {
  return i.map(n).join("");
}
function Qa(i, n) {
  return i.filter(function(t) {
    return !Ge(t, n);
  });
}
var Mn = 5813 + 1453 * -4, wt = -1 * 8419 + 2466 + 5954, B0 = -12666 + -12666 * -1, ie = -5322 + 17 * -399 + -807 * -15, $ = 1156 * -2 + 9216 + -6904, Ft = "";
function Ln(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = Mn, a.column = wt, a.length = r, a.return = "", a.siblings = g, a;
}
function Je(i, n) {
  return Ji(Ln("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, n);
}
function It(i) {
  for (; i.root; ) i = Je(i.root, { children: [i] });
  Kt(i, i.siblings);
}
function dC() {
  return $;
}
function lC() {
  return $ = ie > -1381 * 3 + 9 * -903 + 12270 ? dA(Ft, --ie) : 1872 * 5 + 218 + 4789 * -2, wt--, $ === 10 && (wt = 2861 * 1 + -9525 + 6665, Mn--), $;
}
function Ie() {
  return $ = ie < B0 ? dA(Ft, ie++) : 5581 + -5581 * 1, wt++, $ === 4695 + 2599 * 1 + -7284 && (wt = -419 * 3 + -359 * 9 + -1 * -4489, Mn++), $;
}
function et() {
  return dA(Ft, ie);
}
function bo() {
  return ie;
}
function On(i, n) {
  return Dt(Ft, i, n);
}
function Ui(i) {
  switch (i) {
    case 3 * 1133 + -680 * 3 + -1359:
    case 1831 * -1 + -1 * 843 + 1 * 2683:
    case -2 * -612 + -613 * 3 + 625:
    case -4033 * 1 + 1 * -991 + 1 * 5037:
    case 5551 + 5519 * -1:
      return -1468 + -1 * -2265 + -792;
    case -3868 + -2 * -3449 + -2997:
    case 43:
    case -8263 * 1 + -1 * 2180 + 10487:
    case -1030 + 1 * 1077:
    case -4297 + -5 * -1267 + -1976:
    case 64:
    case 126:
    case -856 + 1 * 915:
    case 123:
    case -7311 * -1 + 4416 * -2 + -2 * -823:
      return 9814 + 2 * -4905;
    case -23 * -307 + -2 * 2349 + -5 * 461:
      return 4 * 1487 + -4307 + -2 * 819;
    case -9 * 863 + 6953 + 848:
    case 784 + -462 * 6 + 1 * 2027:
    case -1911 + -1 * 2585 + -4 * -1134:
    case -2 * -3513 + 8555 + 2 * -7745:
      return 2;
    case 41:
    case -2 * 2668 + -489 + -269 * -22:
      return 1;
  }
  return 0;
}
function uC(i) {
  return Mn = wt = 1 * 6119 + -9614 + -437 * -8, B0 = le(Ft = i), ie = -220 + 1 * 5939 + 7 * -817, [];
}
function fC(i) {
  return Ft = "", i;
}
function $n(i) {
  return c0(On(ie - 1, Yi(i === 4754 + 1 * -4663 ? i + (749 + 3826 * -2 + 6905) : i === 9284 + -961 * -1 + -10205 ? i + (3 * 3091 + 7646 + 11 * -1538) : i)));
}
function hC(i) {
  for (; ($ = et()) && $ < -2786 + -621 * -6 + 907 * -1; ) Ie();
  return Ui(i) > 1203 + -6997 * -1 + -8198 * 1 || Ui($) > 3 ? "" : " ";
}
function pC(i, n) {
  for (; --n && Ie() && !($ < 4348 + -4300 * 1 || $ > 53 + -9 * -643 + -302 * 19 || $ > 19 * -446 + 4276 + 4255 && $ < 443 * 3 + 372 * 2 + -2008 || $ > 70 && $ < 1961 + -4 * 532 + 264); ) ;
  return On(i, bo() + (n < 6 && et() == 32 && Ie() == -896 + -464 * -2));
}
function Yi(i) {
  for (; Ie(); ) switch ($) {
    case i:
      return ie;
    case -3344 + -1 * 9337 + 12715:
    case 7 * -911 + -4938 * -1 + 739 * 2:
      i !== 373 * -1 + 5764 + -11 * 487 && i !== 39 && Yi($);
      break;
    case -9415 * -1 + 4104 + -13479:
      i === -6 * -873 + 1719 + 988 * -7 && Yi(i);
      break;
    case 92:
      Ie();
      break;
  }
  return ie;
}
function mC(i, n) {
  for (; Ie() && i + $ !== 3888 + 7642 * 1 + 1 * -11483 + 10; ) if (i + $ === 8153 + -1 * -338 + -8449 + 42 && et() === -3473 + 2 * 3555 + -1 * 3590) break;
  return "/*" + On(n, ie - (-1 * -3539 + 8846 * -1 + 5308)) + "*" + mr(i === 24 * 263 + -156 + -6109 ? i : Ie());
}
function yC(i) {
  for (; !Ui(et()); ) Ie();
  return On(i, ie);
}
function DC(i) {
  return fC(ko("", null, null, null, [""], i = uC(i), 1583 * -3 + -417 * -3 + -3 * -1166, [0], i));
}
function ko(i, n, t, e, A, o, r, g, a) {
  for (var I = 0, c = 950 * 1 + -4688 + 3738, s = r, C = 1836 + -2 * 918, E = 1 * -6458 + -5 * -1191 + -503 * -1, x = 1 * 447 + 3621 * -1 + 3174, Q = 8371 * -1 + -6005 * -1 + 1 * 2367, d = 8072 + 951 * 9 + -16630, f = 1, h = 3318 + 7534 * 1 + 10852 * -1, p = "", k = A, b = o, m = e, w = p; d; ) switch (x = h, h = Ie()) {
    case 5998 * -1 + -733 * -10 + -1292:
      if (x != -3 * 389 + -9525 + 10800 && dA(w, s - (-9239 + -1373 * -4 + 3748)) == 1 * -8521 + 8393 + 186) {
        wo(w += v($n(h), "&", "&\f"), "&\f", I0(I ? g[I - (-7709 + -17 * 482 + 15904)] : -4105 + -1 * -8861 + -4756)) != -1 && (f = -1);
        break;
      }
    case 1 * 9496 + 1493 + 35 * -313:
    case -9457 + 2374 * 4:
    case 2447 + -804 * -1 + 316 * -10:
      w += $n(h);
      break;
    case 305 * -6 + 5699 + -3860:
    case 4108 + 1423 * -1 + -2675:
    case 13:
    case 32:
      w += hC(x);
      break;
    case 6502 * 1 + -4334 + -2076:
      w += pC(bo() - (7459 + -678 * 11), 7);
      continue;
    case 9919 + -9872 * 1:
      switch (et()) {
        case -7721 + 1807 * -4 + 14991:
        case -602 + 634 * -4 + 3185:
          Kt(wC(mC(Ie(), bo()), n, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (-5848 + 422 * 11 + 1329) * Q:
      g[I++] = le(w) * f;
    case (-11274 + 1 * 11399) * Q:
    case 59:
    case -2258 + 1 * -8111 + 1 * 10369:
      switch (h) {
        case 0:
        case -1993 * 2 + 3697 * -1 + -1952 * -4:
          d = 1557 * 1 + -464 + -1093;
        case 1557 + -1 * 1498 + c:
          f == -1 && (w = v(w, /\f/g, "")), E > 0 && le(w) - s && Kt(E > 32 ? xa(w + ";", e, t, s - (-9588 + 8642 * 1 + 947), a) : xa(v(w, " ", "") + ";", e, t, s - 2, a), a);
          break;
        case 1745 * 5 + -1986 + -6680:
          w += ";";
        default:
          if (Kt(m = Ea(w, n, t, I, c, A, g, p, k = [], b = [], s, o), o), h === 772 + 1 * -649)
            if (c === 1268 + 13 * 283 + 17 * -291) ko(w, n, m, m, k, o, s, g, b);
            else switch (C === -3084 * 3 + 6093 + 3258 && dA(w, 3) === 110 ? 2111 + -12 * -804 + -11659 : C) {
              case 100:
              case 108:
              case 7116 * -1 + 9558 + -1 * 2333:
              case 1 * 7274 + -335 * -29 + -16874:
                ko(i, m, m, e && Kt(Ea(i, m, m, 7579 * -1 + -1 * 9463 + 17042, 7141 + -417 * -13 + -12562, A, g, p, A, k = [], s, b), b), A, b, s, g, e ? k : b);
                break;
              default:
                ko(w, m, m, m, [""], b, 0, g, b);
            }
      }
      I = c = E = 0, Q = f = 380 + -379 * 1, p = w = "", s = r;
      break;
    case -1441 * -3 + 96 + -4361:
      s = -4 * 942 + -1 * -5383 + -3 * 538 + le(w), E = x;
    default:
      if (Q < -2290 + 2291 * 1) {
        if (h == 123) --Q;
        else if (h == -4073 * 2 + -13 * 753 + -5 * -3612 && Q++ == 3961 + 5 * -380 + 2061 * -1 && lC() == 5 * -537 + -1 * 4437 + 7247) continue;
      }
      switch (w += mr(h), h * Q) {
        case -16299 + 527 * 31:
          f = c > -1 * 5410 + -5108 + 10518 ? 10644 + -10643 * 1 : (w += "\f", -1);
          break;
        case 3839 + 3 * -3050 + 765 * 7:
          g[I++] = (le(w) - 1) * f, f = 552 + -1 * 551;
          break;
        case -15037 + 1 * 15101:
          et() === 6806 + -1 * 6761 && (w += $n(Ie())), C = et(), c = s = le(p = w += yC(bo())), h++;
          break;
        case 6506 + -695 * 9 + -206:
          x === -11654 + -11699 * -1 && le(w) == -3 * -2671 + 1 * 7647 + -15658 && (Q = 0);
      }
  }
  return o;
}
function Ea(i, n, t, e, A, o, r, g, a, I, c, s) {
  for (var C = A - 1, E = A === 204 + 439 * 6 + -2838 ? o : [""], x = C0(E), Q = -16493 + 1 * 16493, d = -450 + -5 * -1345 + -6275, f = -4371 + -468 * 7 + -7647 * -1; Q < e; ++Q) for (var h = 0, p = Dt(i, C + (9954 + 1 * -9953), C = I0(d = r[Q])), k = i; h < x; ++h) (k = c0(d > -6884 + -934 * -7 + 346 * 1 ? E[h] + " " + p : v(p, /&\f/g, E[h]))) && (a[f++] = k);
  return Ln(i, n, t, A === 0 ? Wn : g, a, I, c, s);
}
function wC(i, n, t, e) {
  return Ln(i, n, t, g0, mr(dC()), Dt(i, 3591 + 749 * -3 + -1 * 1342, -2), 4412 + 1432 * 1 + -5844, e);
}
function xa(i, n, t, e, A) {
  return Ln(i, n, t, pr, Dt(i, -9 * 839 + -947 * -4 + 1 * 3763, e), Dt(i, e + (7953 + -640 * 5 + 1188 * -4), -1), e, A);
}
function Q0(i, n, t) {
  switch (EC(i, n)) {
    case 5103:
      return J + "print-" + i + i;
    case 1 * -2614 + 1 * 10049 + -1698:
    case 4201:
    case 3 * -1321 + 8480 + -1340:
    case 5931 * 1 + -1492 * 4 + 3470:
    case -4 * 358 + -9558 + 12631:
    case -4022 + -4867 * -2 + -1255:
    case 2921:
    case 5572:
    case 1 * 5087 + -9967 * 1 + 11236:
    case 5844:
    case -301 * 3 + 8434 + -4340:
    case -7078 * 1 + -8046 + 21769:
    case 3005:
    case 17988 + 11597 * -1:
    case 5879:
    case -11009 + -10662 * 1 + 27294:
    case -9357 + 1 * -1805 + 17297:
    case -1 * 1373 + 9035 + -1021 * 3:
    case 4855:
    case -279 * -12 + 7428 + -6561:
    case 6389:
    case 330 * 5 + 4227 * -1 + 7686:
    case 904 * -2 + 8159 + -986:
    case 2081 * -5 + 1316 + 1471 * 10:
    case 626 * 1 + 1 * -386 + 3589:
      return J + i + i;
    case 866 * -10 + 6923 + 2 * 3263:
      return Vt + i + i;
    case 2 * 1906 + 9789 + -8252:
    case 2 * -1847 + 234 + 7706 * 1:
    case 4810:
    case 2 * 5081 + -5078 + 314 * 6:
    case -317 * -21 + -1 * 5716 + 1815:
      return J + i + Vt + i + T + i + i;
    case 9979 + 4852 * 1 + -8895:
      switch (dA(i, n + (-1505 * 6 + -2 * -2308 + 4425 * 1))) {
        case 114:
          return J + i + T + v(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 9727 + 5 * 355 + -9 * 1266:
          return J + i + T + v(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return J + i + T + v(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -9350 + -5 * 1839 + 25373:
    case -1717 * 2 + -8694 + 16396:
    case -8039 + -17 * 401 + -59 * -301:
      return J + i + T + i + i;
    case 3613 * 1 + 3059 + -507:
      return J + i + T + "flex-" + i + i;
    case 1 * 6153 + 1 * -535 + -431:
      return J + i + v(i, /(\w+).+(:[^]+)/, J + "box-$1$2" + T + "flex-$1$2") + i;
    case 5443:
      return J + i + T + "flex-item-" + v(i, /flex-|-self/g, "") + (Ge(i, /flex-|baseline/) ? "" : T + "grid-row-" + v(i, /flex-|-self/g, "")) + i;
    case 1 * 3070 + -3 * -822 + -861:
      return J + i + T + "flex-line-pack" + v(i, /align-content|flex-|-self/g, "") + i;
    case 5548:
      return J + i + T + v(i, "shrink", "negative") + i;
    case 1 * -1981 + -5713 + 12986:
      return J + i + T + v(i, "basis", "preferred-size") + i;
    case 1 * 3099 + 1 * 4417 + -1456:
      return J + "box-" + v(i, "-grow", "") + J + i + T + v(i, "grow", "positive") + i;
    case -996 * -6 + 7182 + -8604:
      return J + v(i, /([^-])(transform)/g, "$1" + J + "$2") + i;
    case -7721 + 4 * 1072 + 9620:
      return v(v(v(i, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), i, "") + i;
    case 1723 * -1 + -2431 + 9649 * 1:
    case 3959:
      return v(i, /(image-set\([^]*)/, J + "$1$`$1");
    case 1993 + -2 * 4386 + 11747:
      return v(v(i, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + i + i;
    case 5325 + 1 * -7369 + 6244:
      if (!Ge(i, /flex-|baseline/)) return T + "grid-column-align" + Dt(i, n) + i;
      break;
    case 9043 + 1 * -767 + -5684:
    case 10734 + -1 * 7374:
      return T + v(i, "template-", "") + i;
    case 1265 * -2 + 4791 * 1 + 2123 * 1:
    case 3616:
      return t && t.some(function(e, A) {
        return n = A, Ge(e.props, /grid-\w+-end/);
      }) ? ~wo(i + (t = t[n].value), "span", 13650 + 2 * -6825) ? i : T + v(i, "-start", "") + i + T + "grid-row-span:" + (~wo(t, "span", -5987 * -1 + 2330 * 2 + -10647) ? Ge(t, /\d+/) : +Ge(t, /\d+/) - +Ge(i, /\d+/)) + ";" : T + v(i, "-start", "") + i;
    case 9701 * 1 + 5727 + -5266 * 2:
    case 446 * -4 + -9222 + -322 * -47:
      return t && t.some(function(e) {
        return Ge(e.props, /grid-\w+-start/);
      }) ? i : T + v(v(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case 3583:
    case 3706 + -7927 * -1 + -7565:
    case 2532:
      return v(i, /(.+)-inline(.+)/, J + "$1$2") + i;
    case -2485 + 1 * -15679 + 8 * 3285:
    case -3062 + -29 * -349:
    case -46 + -708 * 8 + 11463:
    case 15020 + -35 * 271:
    case -5 * -525 + 3619 * 2 + -1 * 4418:
    case 8152 + 3 * -2336 + 4557:
    case 4933:
    case 398 + 2069 * 4 + -3997:
    case 8081 + 1 * 7823 + -1 * 10371:
    case -10 * 1104 + -7475 + 24304:
    case -766 * -6 + -9292 + 9717:
    case 2200 + 379 * 2 + 1807:
      if (le(i) - (7476 + 457 * -13 + 2 * -767) - n > 6) switch (dA(i, n + 1)) {
        case 109:
          if (dA(i, n + 4) !== -3169 * -2 + -5704 + -589) break;
        case 1 * 6869 + 1 * -9663 + 4 * 724:
          return v(i, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + Vt + (dA(i, n + 3) == 108 ? "$3" : "$2-$3")) + i;
        case 1 * 853 + -3875 + 3137:
          return ~wo(i, "stretch", 5891 + -961 * -2 + -7813 * 1) ? Q0(v(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -5653 + 9339 * 1 + 1466:
    case -1 * -9689 + -8193 * 1 + 4424:
      return v(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, I) {
        return T + A + ":" + o + I + (r ? T + A + "-span:" + (g ? a : +a - +o) + I : "") + i;
      });
    case 4949:
      if (dA(i, n + (3390 + -3797 * 2 + -421 * -10)) === -5781 + 2951 * 2) return v(i, ":", ":" + J) + i;
      break;
    case -6972 + -4472 * -3:
      switch (dA(i, dA(i, 5478 + 7237 * 1 + -12701) === 5 * -1901 + 6697 + 2853 ? -7263 + -2 * 4633 + 16547 : -4036 * -2 + -1 * 6362 + 1 * -1699)) {
        case 7717 + 6 * -1310 + -263 * -1:
          return v(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + J + (dA(i, 5807 + -730 * 13 + 3697) === 1 * -7210 + -2202 * -4 + -1553 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + T + "$2box$3") + i;
        case -3 * -1926 + -8771 + 3093:
          return v(i, ":", ":" + T) + i;
      }
      break;
    case -7268 + 1729 * 5 + 4342:
    case -2018 + -283 * 1 + 4948 * 1:
    case 1 * 7284 + 3275 * 1 + 6 * -1404:
    case -4482 + 1 * -9787 + 1 * 18196:
    case -9785 + 1 * -9403 + 21579:
      return v(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function gn(i, n) {
  for (var t = "", e = 7 * -937 + 16 + 6543; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function bC(i, n, t, e) {
  switch (i.type) {
    case QC:
      if (i.children.length) break;
    case BC:
    case pr:
      return i.return = i.return || i.value;
    case g0:
      return "";
    case s0:
      return i.return = i.value + "{" + gn(i.children, e) + "}";
    case Wn:
      if (!le(i.value = i.props.join(","))) return "";
  }
  return le(t = gn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function kC(i) {
  var n = C0(i);
  return function(t, e, A, o) {
    for (var r = "", g = 3769 * 2 + -8662 + 4 * 281; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function SC(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function GC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case pr:
        i.return = Q0(i.value, i.length, t);
        return;
      case s0:
        return gn([Je(i, { value: v(i.value, "@", "@" + J) })], e);
      case Wn:
        if (i.length) return xC(t = i.props, function(A) {
          switch (Ge(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              It(Je(i, { props: [v(A, /:(read-\w+)/, ":" + Vt + "$1")] }));
              var o = {};
              o.props = [A], It(Je(i, o)), Ji(i, { props: Qa(t, e) });
              break;
            case "::placeholder":
              It(Je(i, { props: [v(A, /:(plac\w+)/, ":" + J + "input-$1")] })), It(Je(i, { props: [v(A, /:(plac\w+)/, ":" + Vt + "$1")] })), It(Je(i, { props: [v(A, /:(plac\w+)/, T + "input-$1")] }));
              var r = {};
              r.props = [A], It(Je(i, r)), Ji(i, { props: Qa(t, e) });
              break;
          }
          return "";
        });
    }
}
var N = {};
N.animationIterationCount = 1, N.aspectRatio = 1, N.borderImageOutset = 1, N.borderImageSlice = 1, N.borderImageWidth = 1, N.boxFlex = 1, N.boxFlexGroup = 1, N.boxOrdinalGroup = 1, N.columnCount = 1, N.columns = 1, N.flex = 1, N.flexGrow = 1, N.flexPositive = 1, N.flexShrink = 1, N.flexNegative = 1, N.flexOrder = 1, N.gridRow = 1, N.gridRowEnd = 1, N.gridRowSpan = 1, N.gridRowStart = 1, N.gridColumn = 1, N.gridColumnEnd = 1, N.gridColumnSpan = 1, N.gridColumnStart = 1, N.msGridRow = 1, N.msGridRowSpan = 1, N.msGridColumn = 1, N.msGridColumnSpan = 1, N.fontWeight = 1, N.lineHeight = 1, N.opacity = 1, N.order = 1, N.orphans = 1, N.tabSize = 1, N.widows = 1, N.zIndex = 1, N.zoom = 1, N.WebkitLineClamp = 1, N.fillOpacity = 1, N.floodOpacity = 1, N.stopOpacity = 1, N.strokeDasharray = 1, N.strokeDashoffset = 1, N.strokeMiterlimit = 1, N.strokeOpacity = 1, N.strokeWidth = 1;
var NC = N, O = {}, nt = typeof process < "u" && O !== void 0 && (O.REACT_APP_SC_ATTR || O.SC_ATTR) || "data-styled", E0 = "active", x0 = "data-styled-version", Jn = "6.1.19", yr = `/*!sc*/
`, sn = typeof window < "u" && typeof document < "u", RC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && O !== void 0 && O.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && O.REACT_APP_SC_DISABLE_SPEEDY !== "" ? O.REACT_APP_SC_DISABLE_SPEEDY !== "false" && O.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && O !== void 0 && O.SC_DISABLE_SPEEDY !== void 0 && O.SC_DISABLE_SPEEDY !== "" ? O.SC_DISABLE_SPEEDY !== "false" && O.SC_DISABLE_SPEEDY : O.NODE_ENV !== "production"), da = /invalid hook call/i, Co = /* @__PURE__ */ new Set(), FC = function(i, n) {
  if (O.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 5542 + 13 * -739 + 4066; a < arguments.length; a++) g[a - (-2567 + 1 * -3193 + 5761)] = arguments[a];
        da.test(r) ? (o = !1, Co.delete(e)) : A.apply(void (-3253 + -1 * 6959 + 10212), yt([r], g, !1));
      }, PA(), o && !Co.has(e) && (console.warn(e), Co.add(e));
    } catch (r) {
      da.test(r.message) && Co.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Un = Object.freeze([]), bt = Object.freeze({});
function vC(i, n, t) {
  return t === void 0 && (t = bt), i.theme !== t.theme && i.theme || n || t.theme;
}
var Ti = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), WC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, MC = /(^-|-$)/g;
function la(i) {
  return i.replace(WC, "-").replace(MC, "");
}
var LC = /(a)(d)/gi, Bo = 52, ua = function(i) {
  return String.fromCharCode(i + (i > 405 + -3948 * -1 + -4328 ? 8 * 1066 + 7118 * -1 + -3 * 457 : 7 * -1181 + -743 * 5 + 12079));
};
function Pi(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Bo; n = n / Bo | 4027 + 621 * -9 + 781 * 2) t = ua(n % Bo) + t;
  return (ua(n % Bo) + t).replace(LC, "$1-$2");
}
var Ai, d0 = 5381, Xe = function(i, n) {
  for (var t = n.length; t; ) i = (8751 + -2 * 3271 + -8 * 272) * i ^ n.charCodeAt(--t);
  return i;
}, l0 = function(i) {
  return Xe(d0, i);
};
function OC(i) {
  return Pi(l0(i) >>> -1168 + -2 * -584);
}
function u0(i) {
  return O.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function ei(i) {
  return typeof i == "string" && (O.NODE_ENV === "production" || i.charAt(-302 * 6 + 3 * -1201 + 1805 * 3) === i.charAt(0).toLowerCase());
}
var oe = {};
oe.childContextTypes = !0, oe.contextType = !0, oe.contextTypes = !0, oe.defaultProps = !0, oe.displayName = !0, oe.getDefaultProps = !0, oe.getDerivedStateFromError = !0, oe.getDerivedStateFromProps = !0, oe.mixins = !0, oe.propTypes = !0, oe.type = !0;
var Ue = {};
Ue.name = !0, Ue.length = !0, Ue.prototype = !0, Ue.caller = !0, Ue.callee = !0, Ue.arguments = !0, Ue.arity = !0;
var Ze = {};
Ze.$$typeof = !0, Ze.compare = !0, Ze.defaultProps = !0, Ze.displayName = !0, Ze.propTypes = !0, Ze.type = !0;
var Qt = {};
Qt.$$typeof = !0, Qt.render = !0, Qt.defaultProps = !0, Qt.displayName = !0, Qt.propTypes = !0;
var f0 = typeof Symbol == "function" && Symbol.for, h0 = f0 ? /* @__PURE__ */ Symbol.for("react.memo") : -26370 + -33667 * 3 + 187486, JC = f0 ? /* @__PURE__ */ Symbol.for("react.forward_ref") : -15969 + -395 * 61 + -16696 * -6, UC = oe, YC = Ue, p0 = Ze, TC = ((Ai = {})[JC] = Qt, Ai[h0] = p0, Ai);
function fa(i) {
  return ("type" in (n = i) && n.type.$$typeof) === h0 ? p0 : "$$typeof" in i ? TC[i.$$typeof] : UC;
  var n;
}
var PC = Object.defineProperty, _C = Object.getOwnPropertyNames, ha = Object.getOwnPropertySymbols, HC = Object.getOwnPropertyDescriptor, KC = Object.getPrototypeOf, pa = Object.prototype;
function m0(i, n, t) {
  if (typeof n != "string") {
    if (pa) {
      var e = KC(n);
      e && e !== pa && m0(i, e, t);
    }
    var A = _C(n);
    ha && (A = A.concat(ha(n)));
    for (var o = fa(i), r = fa(n), g = 4851 + 6469 * 1 + -11320; g < A.length; ++g) {
      var a = A[g];
      if (!(a in YC || t && t[a] || r && a in r || o && a in o)) {
        var I = HC(n, a);
        try {
          PC(i, a, I);
        } catch {
        }
      }
    }
  }
  return i;
}
function kt(i) {
  return typeof i == "function";
}
function Dr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function At(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function ma(i, n) {
  if (1793 + -2049 * 2 + 2305 === i.length) return "";
  for (var t = i[0], e = -1020 * -1 + -4143 + 3124; e < i.length; e++) t += i[e];
  return t;
}
function St(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function _i(i, n, t) {
  if (t === void 0 && (t = !1), !t && !St(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 1154 * -2 + -1 * -1567 + 741 * 1; e < n.length; e++) i[e] = _i(i[e], n[e]);
  else if (St(n))
    for (var e in n) i[e] = _i(i[e], n[e]);
  return i;
}
function wr(i, n) {
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
var jC = O.NODE_ENV !== "production" ? eA : {};
function qC() {
  for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[0], e = [], A = 4275 + 2 * -2137, o = i.length; A < o; A += 1) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function vt(i) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - (-1477 + -820 * -11 + -9 * 838)] = arguments[t];
  return O.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -359 * 11 + -2905 * -3 + 1 * -4766 ? " Args: ".concat(n.join(", ")) : "")) : new Error(qC.apply(void 0, yt([jC[i]], n, !1)).trim());
}
var VC = (function() {
  function i(n) {
    this.groupSizes = new Uint32Array(1 * 8027 + 8023 + 34 * -457), this.length = -1 * 5083 + -17 * 406 + 1 * 12497, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 1 * 4125 + 1834 + 1 * -5959, e = 5928 + -2 * 2964; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -1485 + -743 * -2) < 6472 + -6472 * 1) throw vt(1031 * 6 + 2 * -3651 + 566 * 2, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 0;
    }
    for (var g = this.indexOfGroup(n + (1 * 9542 + -1119 * 2 + -1 * 7303)), a = (r = -4105 + -1 * -8465 + 872 * -5, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 16 * 307 + -1 * -5113 + -10025;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(yr);
    return t;
  }, i;
})(), ZC = -7426 + 1 * -8590 + 16017 << -6516 + 13 * 729 + -2931, So = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), Go = -6255 + 368 * 17, Qo = function(i) {
  if (So.has(i)) return So.get(i);
  for (; In.has(Go); ) Go++;
  var n = Go++;
  if (O.NODE_ENV !== "production" && ((-5683 * -1 + -659 * -3 + -7660 | n) < 1 * -7457 + -822 + 8279 || n > ZC)) throw vt(-11783 + 437 * 27, "".concat(n));
  return So.set(i, n), In.set(n, i), n;
}, zC = function(i, n) {
  Go = n + (1 * -2717 + 7980 + -877 * 6), So.set(i, n), In.set(n, i);
}, XC = "style[".concat(nt, "][").concat(x0, '="').concat(Jn, '"]'), $C = new RegExp("^".concat(nt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), AB = function(i, n, t) {
  for (var e, A = t.split(","), o = 0, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, eB = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(yr), A = [], o = -2649 + 5357 * 1 + 2708 * -1, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match($C);
      if (a) {
        var I = 0 | parseInt(a[1], 10), c = a[2];
        I !== 0 && (zC(c, I), AB(i, c, a[2950 + 15 * 277 + -7102 * 1]), i.getTag().insertRules(I, A)), A.length = 7503 + -2501 * 3;
      } else A.push(g);
    }
  }
}, ya = function(i) {
  for (var n = document.querySelectorAll(XC), t = 1 * -397 + -3512 + 3 * 1303, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(nt) !== E0 && (eB(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function tB() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var y0 = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = (function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(nt, "]")));
    return a[a.length - (1760 + 1759 * -1)];
  })(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(nt, E0), e.setAttribute(x0, Jn);
  var r = tB();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, oB = (function() {
  function i(n) {
    this.element = y0(n), this.element.appendChild(document.createTextNode("")), this.sheet = (function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw vt(-9304 + -2074 * -1 + 1 * 7247);
    })(this.element), this.length = 2919 + -4 * -1229 + -1 * 7835;
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
})(), nB = (function() {
  function i(n) {
    this.element = y0(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 7289 + -1 * -2399 + -9688) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
})(), iB = (function() {
  function i(n) {
    this.rules = [], this.length = -3119 + -3119 * -1;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 10846 + 10845 * -1), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
})(), Da = sn, rB = { isServer: !sn, useCSSOMInjection: !RC }, D0 = (function() {
  function i(n, t, e) {
    n === void 0 && (n = bt), t === void 0 && (t = {});
    var A = this;
    this.options = TA(TA({}, rB), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && sn && Da && (Da = !1, ya(this)), wr(this, function() {
      return (function(o) {
        for (var r = o.getTag(), g = r.length, a = "", I = function(s) {
          var C = (function(f) {
            return In.get(f);
          })(s);
          if (C === void 0) return "continue";
          var E = o.names.get(C), x = r.getGroup(s);
          if (E === void 0 || !E.size || 8045 * -1 + -3991 + -2 * -6018 === x.length) return "continue";
          var Q = "".concat(nt, ".g").concat(s, '[id="').concat(C, '"]'), d = "";
          E !== void 0 && E.forEach(function(f) {
            f.length > -8744 + -8744 * -1 && (d += "".concat(f, ","));
          }), a += "".concat(x).concat(Q, '{content:"').concat(d, '"}').concat(yr);
        }, c = -5998 + -5998 * -1; c < g; c++) I(c);
        return a;
      })(A);
    });
  }
  return i.registerId = function(n) {
    return Qo(n);
  }, i.prototype.rehydrate = function() {
    !this.server && sn && ya(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(TA(TA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 4 * 2057 + -1271 + 9 * -773) + (2450 * -1 + 660 * 10 + -1383 * 3);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = (function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new iB(A) : e ? new oB(A) : new nB(A);
    })(this.options), new VC(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (Qo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Qo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Qo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
})(), aB = /&/g, gB = /^\s*\/\/.*$/gm;
function w0(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = w0(t.children, n)), t;
  });
}
function b0(i) {
  var n, t, e, A = i === void 0 ? bt : i, o = A.options, r = o === void 0 ? bt : o, g = A.plugins, a = g === void 0 ? Un : g, I = function(C, E, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 3011 + 1 * -3011 ? ".".concat(n) : C;
  }, c = a.slice();
  c.push(function(C) {
    C.type === Wn && C.value.includes("&") && (C.props[0] = C.props[811 + -811 * 1].replace(aB, t).replace(e, I));
  }), r.prefix && c.push(GC), c.push(bC);
  var s = function(C, E, x, Q) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), Q === void 0 && (Q = "&"), n = Q, t = E, e = new RegExp("\\".concat(t, "\\b"), "g");
    var d = C.replace(gB, ""), f = DC(x || E ? "".concat(x, " ").concat(E, " { ").concat(d, " }") : d);
    r.namespace && (f = w0(f, r.namespace));
    var h = [];
    return gn(f, kC(c.concat(SC(function(p) {
      return h.push(p);
    })))), h;
  };
  return s.hash = a.length ? a.reduce(function(C, E) {
    return E.name || vt(-2117 + 787 * -6 + 6854), Xe(C, E.name);
  }, d0).toString() : "", s;
}
var sB = new D0(), Hi = b0(), br = ot.createContext({ shouldForwardProp: void 0, styleSheet: sB, stylis: Hi });
br.Consumer;
var IB = ot.createContext(void 0);
function Ki() {
  return Ce(br);
}
function cB(i) {
  var n = lA(i.stylisPlugins), t = n[3016 + 450 * -10 + -4 * -371], e = n[-6629 + 4487 * 1 + 2143], A = Ki().styleSheet, o = bA(function() {
    var c = A, s = {};
    return s.useCSSOMInjection = !1, i.sheet ? c = i.sheet : i.target && (c = c.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (c = c.reconstructWithOptions(s)), c;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = bA(function() {
    var c = {};
    c.namespace = i.namespace, c.prefix = i.enableVendorPrefixes;
    var s = {};
    return s.options = c, s.plugins = t, b0(s);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  V(function() {
    CC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = bA(function() {
    var c = {};
    return c.shouldForwardProp = i.shouldForwardProp, c.styleSheet = o, c.stylis = r, c;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var I = {};
  return I.value = r, ot.createElement(br.Provider, a, ot.createElement(IB.Provider, I, i.children));
}
var wa = (function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Hi);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, wr(this, function() {
      throw vt(12, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Hi), this.name + n.hash;
  }, i;
})(), CB = function(i) {
  return i >= "A" && i <= "Z";
};
function ba(i) {
  for (var n = "", t = 3033 * -1 + 4904 + -1 * 1871; t < i.length; t++) {
    var e = i[t];
    if (-1 * -2235 + 9975 + -12209 === t && e === "-" && i[2266 * 1 + -991 * 7 + -1 * -4671] === "-") return i;
    CB(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var k0 = function(i) {
  return i == null || i === !1 || i === "";
}, S0 = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !k0(o) && (Array.isArray(o) && o.isCss || kt(o) ? e.push("".concat(ba(A), ":"), o, ";") : St(o) ? e.push.apply(e, yt(yt(["".concat(A, " {")], S0(o), !1), ["}"], !1)) : e.push("".concat(ba(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 1 * -4526 + -11 * -389 + 247 === t || n in NC || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function tt(i, n, t, e) {
  if (k0(i)) return [];
  if (Dr(i)) return [".".concat(i.styledComponentId)];
  if (kt(i)) {
    if (!kt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return O.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof wa || St(A) || A === null || console.error("".concat(u0(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), tt(A, n, t, e);
  }
  var o;
  return i instanceof wa ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : St(i) ? S0(i) : Array.isArray(i) ? Array.prototype.concat.apply(Un, i.map(function(r) {
    return tt(r, n, t, e);
  })) : [i.toString()];
}
function BB(i) {
  for (var n = -6280 + -809 * -11 + -2619; n < i.length; n += 1) {
    var t = i[n];
    if (kt(t) && !Dr(t)) return !1;
  }
  return !0;
}
var QB = l0(Jn), EB = (function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = O.NODE_ENV === "production" && (e === void 0 || e.isStatic) && BB(n), this.componentId = t, this.baseHash = Xe(QB, t), this.baseStyle = e, D0.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = At(A, this.staticRulesId);
      else {
        var o = ma(tt(this.rules, n, t, e)), r = Pi(Xe(this.baseHash, o) >>> -9468 + -1052 * -9);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = At(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = Xe(this.baseHash, e.hash), I = "", c = 3422 * 1 + -2683 * 1 + 1 * -739; c < this.rules.length; c++) {
        var s = this.rules[c];
        if (typeof s == "string") I += s, O.NODE_ENV !== "production" && (a = Xe(a, s));
        else if (s) {
          var C = ma(tt(s, n, t, e));
          a = Xe(a, C + c), I += C;
        }
      }
      if (I) {
        var E = Pi(a >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, e(I, ".".concat(E), void 0, this.componentId)), A = At(A, E);
      }
    }
    return A;
  }, i;
})(), G0 = ot.createContext(void 0);
G0.Consumer;
var ti = {}, ka = /* @__PURE__ */ new Set();
function xB(i, n, t) {
  var e = Dr(i), A = i, o = !ei(i), r = n.attrs, g = r === void 0 ? Un : r, a = n.componentId, I = a === void 0 ? (function(b, m) {
    var w = typeof b != "string" ? "sc" : la(b);
    ti[w] = (ti[w] || -693 + 2 * 2989 + -1 * 5285) + (-2611 + 349 * 1 + 1 * 2263);
    var R = "".concat(w, "-").concat(OC(Jn + w + ti[w]));
    return m ? "".concat(m, "-").concat(R) : R;
  })(n.displayName, n.parentComponentId) : a, c = n.displayName, s = c === void 0 ? (function(b) {
    return ei(b) ? "styled.".concat(b) : "Styled(".concat(u0(b), ")");
  })(i) : c, C = n.displayName && n.componentId ? "".concat(la(n.displayName), "-").concat(n.componentId) : n.componentId || I, E = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var Q = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var d = n.shouldForwardProp;
      x = function(b, m) {
        return Q(b, m) && d(b, m);
      };
    } else x = Q;
  }
  var f = new EB(t, C, e ? A.componentStyle : void 0);
  function h(b, m) {
    return (function(w, R, M) {
      var uA = w.attrs, L = w.componentStyle, Z = w.defaultProps, UA = w.foldedComponentIds, re = w.styledComponentId, _A = w.target, Yn = ot.useContext(G0), QI = Ki(), Tn = w.shouldForwardProp || QI.shouldForwardProp;
      O.NODE_ENV !== "production" && Vo(re);
      var Wr = vC(R, Yn, Z) || bt, me = (function(ro, Lt, ao) {
        var gt = {};
        gt.className = void 0, gt.theme = ao;
        for (var Hn, Ke = TA(TA({}, Lt), gt), Kn = 0; Kn < ro.length; Kn += 8170 + -2723 * 3) {
          var go = kt(Hn = ro[Kn]) ? Hn(Ke) : Hn;
          for (var ve in go) Ke[ve] = ve === "className" ? At(Ke[ve], go[ve]) : ve === "style" ? TA(TA({}, Ke[ve]), go[ve]) : go[ve];
        }
        return Lt.className && (Ke.className = At(Ke.className, Lt.className)), Ke;
      })(uA, R, Wr), Wt = me.as || _A, Mt = {};
      for (var $A in me) me[$A] === void 0 || $A[1 * -8904 + -5333 + 14237] === "$" || $A === "as" || $A === "theme" && me.theme === Wr || ($A === "forwardedAs" ? Mt.as = me.forwardedAs : Tn && !Tn($A, Wt) || (Mt[$A] = me[$A], Tn || O.NODE_ENV !== "development" || gC($A) || ka.has($A) || !Ti.has(Wt) || (ka.add($A), console.warn('styled-components: it looks like an unknown prop "'.concat($A, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Pn = (function(ro, Lt) {
        var ao = Ki(), gt = ro.generateAndInjectStyles(Lt, ao.styleSheet, ao.stylis);
        return O.NODE_ENV !== "production" && Vo(gt), gt;
      })(L, me);
      O.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Pn);
      var _n = At(UA, re);
      return Pn && (_n += " " + Pn), me.className && (_n += " " + me.className), Mt[ei(Wt) && !Ti.has(Wt) ? "class" : "className"] = _n, M && (Mt.ref = M), OA(Wt, Mt);
    })(p, b, m);
  }
  h.displayName = s;
  var p = ot.forwardRef(h), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, p.attrs = E, p.componentStyle = f, p.displayName = s, p.shouldForwardProp = x, p.foldedComponentIds = e ? At(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = C, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = e ? (function(m) {
      for (var w = [], R = -1345 + 673 * 2; R < arguments.length; R++) w[R - (-16756 + -13 * -1289)] = arguments[R];
      for (var M = 0, uA = w; M < uA.length; M++) _i(m, uA[M], !0);
      return m;
    })({}, A.defaultProps, b) : b;
  } }), O.NODE_ENV !== "production" && (FC(s, C), p.warnTooManyClasses = /* @__PURE__ */ (function(b, m) {
    var w = {}, R = !1;
    return function(M) {
      if (!R && (w[M] = !0, Object.keys(w).length >= -8402 * 1 + 1 * -368 + 8970)) {
        var uA = m ? ' with the id of "'.concat(m, '"') : "";
        console.warn("Over ".concat(8257 + 8057 * -1, " classes were generated for component ").concat(b).concat(uA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), R = !0, w = {};
      }
    };
  })(s, C)), wr(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && m0(p, i, k), p;
}
function Sa(i, n) {
  for (var t = [i[0]], e = 0, A = n.length; e < A; e += -16450 + -1 * -16451) t.push(n[e], i[e + (-1816 * -2 + -7987 + 4356)]);
  return t;
}
var Ga = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function dB(i) {
  for (var n = [], t = -28 * 268 + -560 + 8065; t < arguments.length; t++) n[t - (-1 * -4383 + -1 * -8915 + -1 * 13297)] = arguments[t];
  if (kt(i) || St(i)) return Ga(tt(Sa(Un, yt([i], n, !0))));
  var e = i;
  return n.length === 0 && -6181 + -6182 * -1 === e.length && typeof e[-635 * 1 + -2110 + 1 * 2745] == "string" ? tt(e) : Ga(tt(Sa(e, n)));
}
function ji(i, n, t) {
  if (t === void 0 && (t = bt), !n) throw vt(-8598 + 1 * 8599, n);
  var e = function(A) {
    for (var o = [], r = -2673 + -382 * -7; r < arguments.length; r++) o[r - (2363 * -1 + -79 + 2443 * 1)] = arguments[r];
    return i(n, t, dB.apply(void 0, yt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return ji(i, n, TA(TA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return ji(i, n, TA(TA({}, t), A));
  }, e;
}
var N0 = function(i) {
  return ji(xB, i);
}, no = N0;
Ti.forEach(function(i) {
  no[i] = N0(i);
});
O.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Eo = "__sc-".concat(nt, "__");
O.NODE_ENV !== "production" && O.NODE_ENV !== "test" && typeof window < "u" && (window[Eo] || (window[Eo] = 2 * -3406 + -1 * 4252 + 24 * 461), window[Eo] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Eo] += -1991 + 298 * -11 + 5270);
const cn = Fe(void 0);
cn.displayName = "CameraServiceContext";
function it() {
  const i = Ce(cn);
  if (i === void 0)
    throw new Error(`${cn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
function Zt() {
  return !1;
}
function lB() {
  return !0;
}
async function R0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function oi() {
  return (await R0()).filter((n) => n.kind === "videoinput");
}
function No(i) {
  i.getTracks().forEach((t) => t.stop());
}
function qi(i) {
  return i.getVideoTracks()[17363 + 17363 * -1];
}
function QA(i, n) {
  i = i - (-608 + 394 * -24 + 1 * 10321);
  const t = Cn();
  let e = t[i];
  if (QA.adVhbr === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    QA.RJgXIr = a, QA.siDxlp = {}, QA.adVhbr = !0;
  }
  const o = t[11 * 291 + 1 * -488 + -2713 * 1], r = i + o, g = QA.siDxlp[r];
  return g ? e = g : (QA.aNmTsS === void 0 && (QA.aNmTsS = !0), e = QA.RJgXIr(e, n), QA.siDxlp[r] = e), e;
}
function Cn() {
  const i = ["WOXVvSo1Bq", "W6VdQSolWQW5", "wdFcSSoLW4xcSCkzgCopWO8", "W7OEWRlcHmkd", "xtdcTmoLW4dcN8kwcSoPWRS", "WQNcOSonW7NdQKairG", "WR4dWP1WWQNcM8ooaa", "W4nnWPylWOxdM8ocW5XBumoapde", "WQ4bW73cSmku", "kJXmBc/dImkqW6VcLCkd", "W6PTp8o6W78Komk9", "q8orEIdcUctcL8oFWQpdJx7cLxO", "xmkdWQKDds3dOmkQcmoHaLRdLW", "W50UW7hcMJFcISoeeNtdRJ4", "WRnPWRxcQ0a", "W4ZdKg1JAG", "pmkklSkQW6NdV8odi8k3xSk4W5ZcVW", "W7q6W5FdUHHgFvJcTCojW7pdUSkS", "W5FcMmk2C8kMW5dcUG", "eGdcTSk+", "W74vWQNcJmkm", "zmoIdZpcLKbQEfGlcf0", "pmkhl8kMW63dSmkKm8kKESk5W4m", "ftrnW6NdLq", "rmoCDIhcVfFdP8o7WP/dN2y", "WQNcO8kFWQVcMbH6EmkeDbTLDG", "nCkcl8kOW63cSCkDgmkMvSkA", "W5ZdNfTYBq", "tCoDWQu", "FMiAlaW", "DSoaWO5ZCq", "DcXJW53dUW", "W6W4f8k4bHb1eK57W5/dN8ok", "euhdOaXiW5ldUSkVvSoWW4FcPLm", "e8o9mIRdRCkYtMRdM8oe", "w8kDxG", "WPNcVSkQWQDZW6BdJG", "eWbwWPjM", "W7qnWQ/cQSkV", "hbhcT8k4oa", "fKNcTL4/WORcGmkO", "qmkzwmkLW7e", "jx02WP7cJglcSmk3A8oVW60", "zrddQ8kYDq"];
  return Cn = function() {
    return i;
  }, Cn();
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return QA(I - -187, s);
  }
  function e(a, I, c, s, C) {
    return QA(s - -691, I);
  }
  function A(a, I, c, s, C) {
    return QA(c - -531, I);
  }
  const o = i();
  function r(a, I, c, s, C) {
    return QA(C - -65, a);
  }
  function g(a, I, c, s, C) {
    return QA(s - 884, a);
  }
  for (; ; )
    try {
      if (parseInt(r("[khf", 225, 207, 246, 226)) / 1 * (-parseInt(r("N8E7", 194, 231, 225, 215)) / 2) + -parseInt(e(-421, "#&&z", -448, -426, -434)) / 3 * (-parseInt(g("o#hy", 1158, 1183, 1161, 1165)) / 4) + -parseInt(A(-240, "o#hy", -260, -245, -273)) / 5 + -parseInt(g("$Y*k", 1143, 1161, 1148, 1170)) / 6 * (parseInt(r("e!mb", 236, 227, 211, 214)) / 7) + parseInt(g("e!mb", 1143, 1151, 1150, 1171)) / 8 + parseInt(t(91, 101, 97, "4Nzd", 112)) / 9 * (-parseInt(r("N8E7", 184, 206, 195, 195)) / 10) + -parseInt(A(-285, "C2A$", -272, -289, -259)) / 11 * (-parseInt(t(110, 94, 112, "o#hy", 90)) / 12) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Cn, 589557 + 1 * -1148041 + 1270257);
function uB(i) {
  function n(g, a, I, c, s) {
    return QA(c - 743, g);
  }
  function t(g, a, I, c, s) {
    return QA(I - -90, c);
  }
  function e(g, a, I, c, s) {
    return QA(g - -277, a);
  }
  const A = new ArrayBuffer(i[r("3cM^", -235) + "h"]), o = new Uint8Array(A);
  function r(g, a, I, c, s) {
    return QA(a - -535, g);
  }
  for (let g = 1 * -4461 + -7812 + 12273, a = i[r("X%gZ", -241) + "h"]; g < a; g++)
    if (n("7W)J", 1024, 1013, 1021) === e(22, "xe6c")) o[g] = i[t(197, 193, 196, "j1w2") + n("jSLZ", 1016, 999, 1006)](g);
    else return _0x5155bb + _0x1dfb04[r("W9xI", -237) + r("YJFA", -239) + "de"](_0xb8a151);
  return A;
}
function _(i, n) {
  i = i - (3271 + 2 * -1487);
  const t = Bn();
  let e = t[i];
  if (_.WHjRtm === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    _.vVGAEZ = a, _.WyRtpP = {}, _.WHjRtm = !0;
  }
  const o = t[1 * 2692 + 2383 * -3 + 4457], r = i + o, g = _.WyRtpP[r];
  return g ? e = g : (_.CFBVBn === void 0 && (_.CFBVBn = !0), e = _.vVGAEZ(e, n), _.WyRtpP[r] = e), e;
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return _(s - 850, C);
  }
  const e = i();
  function A(a, I, c, s, C) {
    return _(c - -19, I);
  }
  function o(a, I, c, s, C) {
    return _(s - 843, a);
  }
  function r(a, I, c, s, C) {
    return _(c - 443, I);
  }
  function g(a, I, c, s, C) {
    return _(s - 378, I);
  }
  for (; ; )
    try {
      if (parseInt(o("ojyX", 1178, 1150, 1181, 1184)) / 1 * (-parseInt(r(750, "WCh4", 755, 751, 773)) / 2) + -parseInt(A(354, "kPsX", 331, 331, 303)) / 3 * (-parseInt(r(771, "#gSd", 800, 796, 816)) / 4) + -parseInt(o("p@nz", 1219, 1206, 1196, 1199)) / 5 * (parseInt(t(1182, 1205, 1173, 1205, "AfPi")) / 6) + -parseInt(o("Yjbe", 1115, 1119, 1141, 1117)) / 7 + -parseInt(g(670, "KHzu", 684, 679, 687)) / 8 * (-parseInt(o("Y*tD", 1171, 1175, 1171, 1193)) / 9) + -parseInt(A(345, "Y*tD", 327, 354, 343)) / 10 * (parseInt(g(682, "Z5tQ", 708, 689, 663)) / 11) + parseInt(g(698, "yAxj", 674, 684, 685)) / 12 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Bn, -1487957 + -191539 * -4 + -1 * -1487958);
async function fB() {
  function i(c, s, C, E, x) {
    return _(C - -789, s);
  }
  function n(c, s, C, E, x) {
    return _(c - -229, s);
  }
  const t = {};
  t[a("hZpA", 1120)] = Vg, t[n(86, ")Abk") + "h"] = 256;
  function e(c, s, C, E, x) {
    return _(C - -301, E);
  }
  const A = await window[i(-432, "wcjE", -438) + "o"][n(107, "%L[A") + "e"][i(-469, "WCh4", -448) + n(89, "Y*tD") + "y"](t, !0, [a("zjR%", 1176) + "pt", o(542, "*(A@", 548) + "pt"]);
  function o(c, s, C, E, x) {
    return _(C - 232, s);
  }
  const r = Uint8Array[o(508, "VbMX", 535)](Array(9819 + -1 * -1465 + -11268)[n(88, "%L[A")](1866 * 2 + 1111 + -4843)), g = window[e(39, 39, 25, "Jc%0") + "o"][e(62, 26, 43, "Y*tD") + n(131, "fhvk") + i(-492, "Y*tD", -460)](r);
  function a(c, s, C, E, x) {
    return _(s - 818, c);
  }
  const I = {};
  return I[n(119, "^0B2")] = A, I.iv = g, I;
}
async function hB(i) {
  const { iv: n, key: t } = await fB(), e = new Uint8Array(i);
  function A(E, x, Q, d, f) {
    return _(d - -74, Q);
  }
  const o = {};
  o[I(430, "fhvk", 390, 401, 419)] = Vg, o.iv = n;
  const r = await window[I(432, "WQmG", 381, 393, 409) + "o"][I(423, ")Abk", 426, 439, 415) + "e"][I(390, "qPG$", 417, 408, 412) + "pt"](o, t, e), g = await window[s(196, 210, 207, "$g6v") + "o"][c(-184, "s[MR") + "e"][C(923, 913, "ULWc") + I(453, "Z5tQ", 407, 440, 425)](s(240, 274, 252, "hZpA"), t), a = {};
  a[A(250, 213, "kPsX", 235) + "ge"] = r;
  function I(E, x, Q, d, f) {
    return _(f - 88, x);
  }
  function c(E, x, Q, d, f) {
    return _(E - -492, x);
  }
  function s(E, x, Q, d, f) {
    return _(Q - -93, d);
  }
  function C(E, x, Q, d, f) {
    return _(E - 593, Q);
  }
  return a[C(892, 882, "wcjE")] = g, a.iv = n, a;
}
async function pB(i) {
}
function Bn() {
  const i = ["wKPBWPSdrYe", "E8kjW7dcHxK", "sSkItfeZkCo9", "WONcVCo1n2m", "vWqMWRuJt8oX", "rSoZbSoarHddPYLoe2XGa8kl", "e8kEoG", "WPKRWOmABq", "d8kxfaZdH2mWqWDmWOXy", "gSkqW48d", "WQucWOjR", "uJtcRmkQ", "u8oHW6nN", "kwumWPVcSmkRt8kEr8kXWOKyWPBcKa", "WQ5IaSkyW6FdUtjAF1S2bG", "dCkyFfiD", "W5jPbmkOW4a", "W6raW5jhaG", "W4tdJXZdQL3dKLza", "aNFdIJhcU3lcPW", "DtBdIXu", "xmodqxhdPWv/WRKKW7FdIMv5hG", "bmk7WOtdVw8", "FZldHqlcTG", "vmo8W6bP", "rWVcRmkyW68", "WRKrWO8trSoHyCkMgSkTg1/dGmoP", "WOedFXJcJCk8uIO", "WRlcMqhdH8oY", "W6m6WQqtW4C", "W5WdWPe", "CfZcHJf5", "WRdcNXFdLq", "W5yCWRbjwW", "g8kRWOJdRNC", "eeZcGSkxW5mMWRlcRa", "rXpcVmk2W7K", "W6uWWQ0mW4e", "WONcUmo3pW", "W6ldNbVcUwzKFCkJWRJdS8kApYyu", "gMFcMxC3WQFdRuxdUYdcICoVW6W", "vCkFzxtdSXjPW6VdKr/dJIC", "WO49a8kjW6/dQh5N", "qCoGW65XW6m", "WOhcTq3dGq", "sJZcJJ4VW5JdUSkWWOGsWPRcJe8", "wCoOW57cRIRdI8orhCk8nCkTzG", "vxldHZhcUa", "v3NdIIBcSW", "eCozzflcGG", "WOqyzdi", "qrRcVCkbW6S", "bSkqW5u", "f0VdUSoGWRPBW4JdTCk3WO5gWRFcHXm", "aCoEF1BcMG", "WOeCCa", "W616o8o1WRa", "WO46q8oVWPdcVLv/kgtdTmoj", "g8kjoSoYla", "c2TQWP44", "xmkPWO7cMcpdGGxcTa", "CfZcHIXK", "WReqWOWuqmoUamoUeSkyi1i", "W5XkqHn/dSkIaW"];
  return Bn = function() {
    return i;
  }, Bn();
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return nA(c - 948, a);
  }
  const e = i();
  function A(a, I, c, s, C) {
    return nA(a - -166, c);
  }
  function o(a, I, c, s, C) {
    return nA(I - -923, a);
  }
  function r(a, I, c, s, C) {
    return nA(C - 860, a);
  }
  function g(a, I, c, s, C) {
    return nA(s - 81, c);
  }
  for (; ; )
    try {
      if (parseInt(g(353, 304, "q0l[", 336, 372)) / 1 + -parseInt(o("%rgY", -697, -695, -695, -708)) / 2 * (-parseInt(A(96, 117, "^nX1", 69, 70)) / 3) + parseInt(A(46, 18, "ErHz", 16, 84)) / 4 * (parseInt(t("#@b0", 1171, 1216, 1176, 1260)) / 5) + parseInt(o("NbYx", -670, -668, -687, -654)) / 6 + -parseInt(r("tMve", 1172, 1113, 1135, 1133)) / 7 + parseInt(o("G0MS", -733, -720, -739, -705)) / 8 + -parseInt(A(58, 28, "y2Qz", 20, 41)) / 9 * (parseInt(A(23, -15, "dM8f", -4, 38)) / 10) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Qn, -241470 + 172397 * 1 + -3310 * -215);
const mB = 3695 + 1 * -695, yB = 7e3, F0 = 3, v0 = 0 + 0.5, W0 = {};
W0[RA("%wi*", 749, 706)] = 1280;
const M0 = {};
M0[RA("NbYx", 724, 733)] = 720;
const L0 = {};
L0[RA("427Z", 782, 759)] = 60;
const Ro = {};
Ro[XA(1017, "NGQa", 959, 1005, 1004)] = W0, Ro[RA("74RP", 728, 688) + "t"] = M0, Ro[vA(-657, -651, -612, "NGQa") + zA(-296, "Os58", -340, -380, -339)] = L0;
const O0 = {};
function RA(i, n, t, e, A) {
  return nA(t - 493, i);
}
O0[XA(1037, "5cT%", 1070, 1017, 1045)] = 1920;
const J0 = {};
J0[oA(1054, 1073, 1078, "5cT%", 1068)] = 1080;
const Fo = {};
Fo[oA(1070, 994, 1039, "@bds", 1031)] = O0, Fo[RA("q0l[", 779, 756) + "t"] = J0, Fo[XA(1103, "&*xV", 1030, 1088, 1071) + vA(-683, -653, -660, "74RP")] = 30;
const U0 = {};
U0[vA(-650, -622, -658, "VAjb")] = 1;
const Y0 = {};
Y0[vA(-601, -636, -593, "&*xV")] = 1;
const T0 = {};
T0[XA(989, "Y@[u", 1041, 954, 998)] = 1;
const vo = {};
vo[RA("7jB7", 722, 735)] = U0, vo[zA(-296, ")FOG", -336, -290, -326) + "t"] = Y0, vo[vA(-698, -652, -671, "@@T^") + XA(1003, "Y@[u", 982, 991, 1023)] = T0;
const P0 = {};
function Qn() {
  const i = ["fxa6WQtdKW", "lw9KpZK", "WRhdSZm", "C2JdNCofFW", "W6uYaIVdOW", "ha05smkX", "WOhcIbRcOSkl", "eX98W5BcOCofBqOVW6tcQCk2", "WPFdHM8", "vWnIaqRcQSk4FCoXlXG4WRe", "vmkYgf/cN19HWPL4nmopWOzR", "WOBdS8kBWRe", "ASote8k1EG", "bmoNpSkj", "bqVdKSodiG", "nCkhvreqWR3cHa", "WQTrfdVcMa", "hX5Fla", "WQVdSM1HW4ldUNXqcSoqW6Wt", "WQruhtBcLG", "vmklwWu", "pvldH0qd", "WQ/dO8ksFmk3", "oxXQWOay", "WRlcHHSvdCkPW4tcPe0caCod", "WOhdNh/dSCon", "lKtdGKmz", "ovK6DW", "WQTzW6q", "WQddVmk5WOhcGq", "orNdKSou", "FG8kW4a", "WO7dUJ7dMSoi", "WQ/dMuP7WOm", "WQZdSMO7WOZcReT6ma", "WQXDxCkvg8kqvG", "Ade+W5TziIqYCCoHWPHwxq", "WP8AeMew", "WQVdTSoXW4zpWOpdT8o/bcZcTcO", "W5xdSCkCW4Km", "efzoCaC", "W5BdQKi8ea", "a8oWsqBdIG", "WQhdOmk9ESk8", "hq0Rrmkn", "WRpdKLHusCoZW7e", "W7BcOmkVWPiE", "W7JcPSkwgSkO", "WR3dMvf1WOq", "WQVdLuj3WPK", "abLynCoT", "mYqSWP3dVd7dOSkFwv8cWOK", "WQddQ8kGBG", "WRRdRmk+WQFcHa", "yh1OW5a", "WQngbq", "W6RcV8oIW7BdMXxdSSkNW6SjyvKf", "W7biWPG", "Bx7dQq", "WRhdUJldQW", "ymkytG0f", "BSo5lqDl", "ouNdJwqy", "W5FdV0q0fG", "W4O/fZPy", "WRyuW5RdPG1UEmkAW6a", "vXSrb0RcGSkofSoGBCo0nf4", "WQhdPCk4WRC", "F8oIkb5g", "WPVdRmkaWRqJ", "B8kosGem", "WOVdVI/dQCof", "W786hGVdRG", "zdi+W5vBismZrSojWRPVrG", "ft7dUmkJeG", "W6jgWOBdOXG", "amo6sqJdMW", "WQCtjSou", "W6bOWQbHpW", "W64tFv7cK8oGa19CWO41yWu", "AHC6W5VcTW", "WRvFW77cI8kS", "zq95pCkLebynW4xcLJhcQq", "WRZdMe1vWOa", "W7dcSCk1", "AW8FW5hcNW", "WOldMMK", "dLddMgi", "W7WKp8o1AuVcPq", "WPqHbNyn", "zSopf8k3yG", "lSonWRZcSta", "kKH0kJO"];
  return Qn = function() {
    return i;
  }, Qn();
}
P0[oA(1066, 1059, 1047, "Mloz", 1053)] = 1;
const _0 = {};
_0[oA(1075, 1061, 1091, "VAjb", 1064)] = 1;
const H0 = {};
H0[oA(993, 990, 1024, "@@T^", 1029)] = 1;
const En = {};
En[zA(-412, "NGQa", -438, -349, -394)] = P0;
function XA(i, n, t, e, A) {
  return nA(A - 812, n);
}
En[RA("tMve", 782, 763) + "t"] = _0, En[XA(1032, "M#cn", 1032, 1028, 1029) + RA("@@T^", 747, 730)] = H0;
const Ao = {};
Ao[vA(-549, -588, -550, "fnew")] = Ro;
function oA(i, n, t, e, A) {
  return nA(A - 835, e);
}
Ao[XA(1045, "fnew", 1059, 1047, 1021) + vA(-633, -611, -583, "7jB7")] = Fo, Ao[RA("5T5D", 730, 721)] = vo;
function zA(i, n, t, e, A) {
  return nA(A - -586, n);
}
Ao[zA(-343, "TxAm", -407, -356, -364) + XA(1022, "bOJw", 996, 1010, 1031)] = En;
const xn = Ao, Et = {};
Et[XA(1070, "74RP", 1088, 1044, 1061) + vA(-668, -648, -672, "W)k6") + vA(-595, -638, -660, "5OGx")] = mB, Et[vA(-587, -569, -540, "By$a") + zA(-336, "@iLc", -352, -395, -366) + RA("427Z", 754, 758) + RA("q0l[", 744, 701)] = xn[oA(1117, 1128, 1113, "#@b0", 1106)], Et[oA(1001, 1062, 1074, "dM8f", 1034) + zA(-339, "Y@[u", -370, -306, -348) + RA("Os58", 743, 724) + zA(-343, "C3GB", -337, -363, -342)] = xn[RA("!HpY", 714, 708) + oA(1128, 1065, 1082, "5cT%", 1107)], Et[zA(-376, "427Z", -343, -337, -379) + XA(1005, "ErHz", 1031, 982, 1013)] = F0, Et[oA(1080, 1097, 1077, "Y@[u", 1078) + RA("bpU*", 708, 680) + RA("Mloz", 665, 709) + vA(-578, -613, -592, "1B[n") + zA(-369, "dM8f", -398, -358, -405)] = v0;
const xt = {};
function vA(i, n, t, e, A) {
  return nA(n - -836, e);
}
xt[zA(-409, "@bds", -396, -396, -365) + oA(991, 1026, 991, "6tIa", 1037) + RA("427Z", 768, 743)] = yB, xt[zA(-358, "Cs^!", -404, -387, -381) + oA(1057, 1054, 1049, "fnew", 1039) + oA(1103, 1108, 1138, "bpU*", 1093) + oA(1049, 1078, 1066, "Cs^!", 1080)] = xn[vA(-627, -645, -612, "tMve")], xt[vA(-627, -600, -574, "5cT%") + vA(-625, -580, -584, "*Tgb") + oA(1006, 1075, 987, "5T5D", 1028) + oA(1075, 1133, 1059, ")FOG", 1104)] = xn[oA(1098, 1143, 1100, "^$mO", 1099) + zA(-416, "@iLc", -392, -396, -404)], xt[oA(1043, 1098, 1082, "tMve", 1081) + oA(1098, 1036, 1090, "By$a", 1069)] = F0, xt[XA(1076, "G0MS", 1114, 1023, 1069) + vA(-535, -575, -574, "TxAm") + XA(1089, "%wi*", 1020, 1046, 1066) + vA(-617, -597, -551, ")FOG") + zA(-407, "7jB7", -354, -359, -376)] = v0;
function nA(i, n) {
  i = i - (-5 * -880 + 315 * 9 + -7054);
  const t = Qn();
  let e = t[i];
  if (nA.ueGngE === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    nA.aiSjkC = a, nA.bDXzdG = {}, nA.ueGngE = !0;
  }
  const o = t[-989 * 7 + 5394 + 1529], r = i + o, g = nA.bDXzdG[r];
  return g ? e = g : (nA.vtbDRW === void 0 && (nA.vtbDRW = !0), e = nA.aiSjkC(e, n), nA.bDXzdG[r] = e), e;
}
const Vi = {};
Vi[oA(1111, 1032, 1079, "ccX3", 1065)] = Et, Vi[XA(1040, "tMve", 961, 969, 1003)] = xt;
const DB = Vi;
(function(i, n) {
  function t(g, a, I, c, s) {
    return EA(a - 665, g);
  }
  function e(g, a, I, c, s) {
    return EA(I - -686, c);
  }
  const A = i();
  function o(g, a, I, c, s) {
    return EA(s - -256, a);
  }
  function r(g, a, I, c, s) {
    return EA(g - 277, c);
  }
  for (; ; )
    try {
      if (parseInt(o(14, "$f8E", 5, 113, 17)) / 1 * (parseInt(o(24, "Zdgz", -38, -82, -11)) / 2) + -parseInt(o(-145, "s]nZ", -171, -121, -63)) / 3 * (parseInt(e(-275, -144, -279, "gu#7", -215)) / 4) + parseInt(e(-377, -351, -442, "yAGT", -437)) / 5 * (-parseInt(t("SPXE", 821, 857, 932, 898)) / 6) + -parseInt(r(543, 437, 557, "D*]k", 471)) / 7 * (-parseInt(r(444, 340, 377, "s]nZ", 531)) / 8) + parseInt(t("uUy4", 1006, 1033, 945, 1057)) / 9 * (-parseInt(r(659, 547, 783, "a0hF", 783)) / 10) + parseInt(o(-164, "6sh@", -22, -75, -62)) / 11 + parseInt(t("t1kF", 863, 729, 937, 836)) / 12 * (parseInt(o(7, "$^h)", 112, 137, 132)) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(dn, -15566 * -2 + 8923 * 17 + 344510);
function dn() {
  const i = ["jqviWQhdPW", "kmkzWPVcJXS", "W6NcVSkNp8oz", "jghcQmkUWRq", "wCoOrcBcNW", "WPnbW7fWWPi", "rCoZW7z7WQa", "WOJdOCoWiCkk", "rmkvW4VdV8o1", "W67cKCosmHG", "eSocWRpcQCkRWOFcImoiW4ODWRKDWRm", "tcldSCoKDq", "vCo7W6zOWRu", "u8oyWO7dIKi", "WPNdR8o3pmkk", "zSo5W4W7wG", "jw1WW4G", "vmoMW6rZWRC", "fmoVW6pcULC", "wCoWzc9K", "oSk1jCkxW4y", "jN7cICo0W5q", "C8k0oW", "WRpdMNJdOuO", "ix1XW4hcNG", "hfdcQCknWPy", "t8kbW7BdO8o6", "WP9fnGSJ", "k2H5W7uP", "W6pcI8oo", "emovW4bGBa", "xchdSmoG", "WQBdJ8o8WP58", "WPJdQ8oQeCkr", "WOxcTJG/mq", "W4eNW6fwyq", "xmonW53cHW", "WR1JkW0k", "W5VdRmoWW44", "WQ7dVmoSpCkm", "WP0cWP0acG", "pCkMl8k0W5C", "hM5ZW6mY", "ySoVW7eQwG", "fb9iWOBdTG", "W49EWOvqxG", "WQTHmW0A", "W5euAG", "W5GPW6Lhqa", "vSojW4BcIYW", "sYJdQCo+yG", "eCkCWQ/dKx/dV8oFza", "bCorW51BAW", "a8orW51zBa", "nmo4jCou", "W6RcICkWk8oj", "gSo/W5fAW6W", "WRRcHNlcU8obwGrx", "w1JcTg7cIa", "j8kOmq", "W4xcNSo+Emk6", "ACkPkCkSWOq", "sGtdUW", "ESoqBa", "WOmTW6WnWRG", "ASopW7uSuW", "WQ/dJ8o4WPb6", "d8k2W4XyW6S", "bCo1W6pcNuy", "WQldNwi", "W5BcVSo0E8k6", "xCoJxY5k", "W4ddQ0TBEa", "A8oTyvPI", "WR9nWOawcG", "W4vcWOrlxG", "cCkXWQSUW6eBW7ZcM8oVoCo3WQm", "kSo1kCoi", "t8oGuYhcNW", "umkgW7ZcT8o0", "kmo4iCoFwG", "W4LdWPLmwa", "ySo7W7hcJb0", "rCoLWPm", "WPT2wv91", "W4S5lr5T", "DCoJW7BcKYG", "c05pW54E", "W4Heq33dIq", "W4xdQ1DTBq", "z8oVW6OQvW", "iGbZWPah", "W7/dNf3cICoE", "jmkqaCkjWRW", "W7FcOSo8zCkH", "WORdLNldR1G", "W44symoMtW", "u8o3W5z/WQi", "r8kUW7e", "FKOZW41hW4fgW748WOhdL8oFra", "WOrUare8", "F8kFw3ldMmkyqupdGcW", "WPKLW6qeWRm", "W5tdPvbWBq", "o3DTW4u", "dfD8W4hcPG", "wu3cVeJcMW", "W555tgNdKG", "A8oUWPJdN2K", "W5VdUCoU", "vSkoW7RcT8os", "W5RcMCoZACo1", "WQtcTaC4pa", "phDT", "kCooW5NcR1S", "WO1ftMvv", "cKbZW5hcPG", "W4VdOuT/xa", "W4aQkXG", "WRBdNSoWFCkAWRPLg8k9xCkp", "W4hdI1jTFG", "W6LFW4rlsSk6fmkYF8oAbGXF", "WQj/jYuz", "ESo+W6y", "rCocWOpdLe4", "WOldOmo3jSoE", "WQJdOCoRpSkA", "xKNcP0tcIG", "WQ9fW6j2WPO", "amo3W5jy", "b8kQo34ZbCkCWQTOWQyi", "oMtcM8oYW5i", "W4GFeJ18", "WR7dPHVdMSknWOtcO8oPWQv1nG", "i3LVW5xcIW", "W5i7W7DdFq", "W6dcICk2d8on", "W6lcPCkSkSod", "oeH5", "iCokccxdTq", "WQpcVGq9oW", "owrRW7KL", "fCoGW65KBW", "W5yAACoM", "W7hcHCkMkCod", "hCoIW4zrW7O", "E8oHtfXl", "WOfNwxj/", "u8o2sZH1", "W73cJCoejWq", "kConfHpdSW", "E8o8FL1M", "rCoEWOxdIvu", "WR8pWOaCeG", "sJ/dRCo4CW", "BeFcN8oNW5RcGCoh", "d8oFEsT9gCkp", "ASkHkCoPWRZcHMPqd3/dJcbc", "qSo2W7XoWRe", "x8kOWRtdMGFdMaBdS2dcQmoYWOe", "bWniWRFdTW", "omk4WRr1c8oQuY8ktgZdMLG", "iCo2BSk1W6O", "WR57mXGC", "k8kBimkwWP0", "pwFcV8kbWRu", "W4xdPvr7AW", "W6RcICkWlq", "W5GUiqj4", "WQWmWPODcG", "BSouW65JzG", "l2jYW741", "tSomqq", "p8oblbhdJG", "W7/cLmoemHG", "rJ7dKmoHza", "W7pcJCkRimoF", "WQ9HnXmo", "ESo9tuz3", "xaGJWORdOSo6A3pcJ0lcUfO9", "qmopW5/cJdW", "eCoBj8oiya", "WRPLmWGb", "br5IWRFdPq", "BCkfWOBcLeK", "lgVcO8kcWR4", "WOD9W4r3zCk9kaG", "WOldOmoQiq", "g8orW40", "hmo3W5ztW6S", "j3/cHSovW4K", "tmooW69GCG", "oCo2jSocwG", "ymoKW7a", "kaj1WRSq", "W6/dQLv3DW", "wSoZBc9R", "B8o8ELjQ", "bCo7W6dcI0a", "W61pa8o2W54", "WQTZfXmD", "W5ddV8oqW45e", "WOPOW7ypWQq", "emouWQxdRmoNW5y+W5/dVSo/", "WPFdTee", "W55jWOvEwa", "u8oDFJ5U", "zZNdMmkZW4FcGmoWm1WR", "WOpcVCopW45dW6/cNmke", "iSkBWP3cPaW", "W7NdLfRcGmoz", "eSo/W4rbDG", "lCoAbYhdOG", "W5ddImoXW45n", "aSknhCkvWRO", "EupcV17cNq", "a8oOW4betq", "W6/cNmouiq0", "WP88W6WeWRC", "W7ZcQLFcGSoC", "WR9abCoSWOO", "vXPE", "b8o5W5e", "oCobbJtdVG", "W4i8W6rlzW", "h1D7W5ZcPG", "W7pcMSosWObhWRT6W6C", "bmkRfW", "uCo+W5pcSqa", "W69AW4PbmmouFSkzA8om", "dSksb8kIWQS", "W4npWPj2qG", "W5eRW7fXBa", "fCoVlCodtq", "WOGNW6SzWQq", "j8o4CSk3W70", "WR7dRrVdN8kpWQFcGCoUWQ9AlW", "qmoEW6LOzW", "rmoIW7T2WQC", "tmoLW60+sW", "W5ddHmoZW41p", "W5DrqgRdKq", "WQWyWP0GfW", "W4OABCoTva", "lmk1a8kUW4e", "sJ7dQSo7Dq", "r8kFW7tcUSo0", "mx11W4NcIq", "aXjhWRhdPW", "oh1NW4NcIW", "oeHZW7yP", "g8klW4LQyCkwjCkl", "tmkxW7ddTSo+", "aCkWWQCRW6j+W4VcImoEfmoi", "WR1WhGOe", "WRSKWPC", "j2VcGCoOW5q", "lNdcQmkgWQ4", "kmkXi8kQW4u", "WRtdH2/dQLW", "a8oFW7VcJ14", "y8oRW6eOuW", "W73cV0FcGmon", "v8kOWR/dNWtcMHJdUuRcMmol", "imkPl8kSWOq", "qSoIW7T0WQa", "WRedWOa", "xSoSW6u", "CmoPFhbG", "sCoFWRJdKei", "W5u8W6bdFq", "o8kcWO3cHqy", "WPtcSbG9la", "W5GSjWj/", "kSonfcNdTq", "wmo1yI9o", "WRtdG8oUWPjW", "sCkxW6VdTSoZ", "ymo6W7CjwG", "W5dcTmogiXu", "i8o2AmkYW7O", "W6hcV0pcIW", "l8o4pmoyqq", "yIJdU8o+ya", "CSoSFffH", "W6BdUCoVW45b", "BcldSCoKDq", "W4hdV8o8W4jo", "W5XfWPnAqW", "W4xcKSofiq8", "W6ZcHCotjW", "m2bWW7u", "xmo+W5xcKtO", "W5WECSoQqW"];
  return dn = function() {
    return i;
  }, dn();
}
function EA(i, n) {
  i = i - (-2607 * -2 + 2529 + -7627);
  const t = dn();
  let e = t[i];
  if (EA.DjLMMA === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    EA.Cssjwt = a, EA.fnbzOi = {}, EA.DjLMMA = !0;
  }
  const o = t[-6525 + -1 * -4379 + 2146], r = i + o, g = EA.fnbzOi[r];
  return g ? e = g : (EA.oLzxhy === void 0 && (EA.oLzxhy = !0), e = EA.Cssjwt(e, n), EA.fnbzOi[r] = e), e;
}
function qA(i, n, t, e, A) {
  return EA(A - 77, i);
}
function Ae(i, n, t, e, A) {
  return EA(t - -539, i);
}
function j(i, n, t, e, A) {
  return EA(t - -492, i);
}
function gA(i, n, t, e, A) {
  return EA(e - 492, i);
}
function hA(i, n, t, e, A) {
  return EA(A - -621, t);
}
class wB {
  #A;
  [Ae("t1kF", -351, -224) + qA("gu#7", 227, 302, 295, 352)] = [];
  [Ae("ZA0E", -313, -310) + gA("D&x1", 782, 775, 718) + "s"] = {};
  constructor(n = {}) {
    function t(o, r, g, a, I) {
      return j(o, r - 256, a - 423);
    }
    function e(o, r, g, a, I) {
      return Ae(g, r - 168, o - 459);
    }
    function A(o, r, g, a, I) {
      return j(r, r - 175, I - 673);
    }
    this.#A = DB, this[A(569, "gu#7", 414, 416, 518) + t("%Vv*", 196, 64, 179) + e(150, 257, "t1kF")](n);
  }
  [j("V0s0", -125, -238) + gA("gu#7", 597, 482, 626) + qA("hEHs", 491, 555, 486, 411) + "fo"](n) {
    function t(I, c, s, C, E) {
      return j(I, c - 149, s - 1253);
    }
    const e = qi(n);
    function A(I, c, s, C, E) {
      return j(C, c - 330, E - 69);
    }
    const o = e?.[A(-292, -218, -60, "nCE*", -154) + A(-17, -22, -137, "1ODY", -19) + "s"]();
    if (!o?.[A(-208, -294, -190, "t1kF", -296) + "t"] || !o?.[t("nCE*", 1020, 1127)] || !o?.[r(-623, "#ZcP", -751, -721, -694) + t("1ODY", 1094, 1155)]) {
      if (A(-397, -302, -358, "uiK#", -272) === r(-728, "Gq@[", -735, -669, -727)) return;
      throw new y(g(1071, 1011, 1237, 1137, "HnoS") + a(66, 8, 211, "81Tm") + A(-188, -420, -158, "Gq@[", -275) + g(1248, 1051, 1193, 1117, "#ZcP") + A(27, -46, -33, "D&x1", -25) + r(-480, "0z!b", -477, -515, -504));
    }
    function r(I, c, s, C, E) {
      return gA(c, c - 393, s - 424, E - -1350);
    }
    function g(I, c, s, C, E) {
      return hA(I - 183, c - 364, E, C - 288, C - 1595);
    }
    if (e) {
      if (r(-514, "uNRf", -659, -615, -567) === r(-713, "zHQ0", -692, -820, -739)) throw new _0x3f8e91(a(52, 172, -76, "(So)") + g(1328, 1163, 1378, 1231, "E3i(") + t("X78l", 1067, 1062) + g(1187, 1294, 1082, 1209, "uiK#") + A(-123, -209, -241, "bvcA", -184) + r(-334, "D&x1", -605, -569, -471));
      {
        const I = {};
        return I[a(173, 176, 62, "mmo(")] = e[A(-286, -202, -56, "s]nZ", -190)], I.id = o[t("!*aJ", 958, 1091) + g(1175, 1219, 1095, 1109, "nqL]")], I;
      }
    }
    function a(I, c, s, C, E) {
      return gA(C, c - 13, s - 157, I - -647);
    }
  }
  async [gA("MrK5", 591, 546, 617) + qA("0z!b", 248, 347, 189, 209) + hA(-420, -206, "Zdgz", -237, -299) + "m"](n) {
    const t = document[g("hEHs", -254, -385, -365) + g("Zdgz", -298, -274, -405) + a(796, "0z!b", 661, 518)](e(6, -123, 50, "81Tm"));
    t[r("(So)", 1139, 1200) + e(-77, -65, -183, "%Vv*")] = !0, t[A(906, 980, 921, "1ODY")] = !0, t[e(-102, -203, -46, "uNRf") + a(613, "@ZH1", 493, 573) + "e"] = !0, t[a(558, "D&x1", 443, 586)][g("6sh@", -231, -136, -194) + g("D&x1", -289, -397, -190)] = e(-112, 3, -125, "D*]k") + g("t1kF", -388, -490, -271);
    function e(I, c, s, C, E) {
      return j(C, c - 382, I - 190);
    }
    t[r("a0hF", 1261, 1316)][A(883, 643, 765, "G2@C") + "ty"] = "0", t[a(507, "0z!b", 557, 508)][a(399, "UY)P", 523, 603) + a(501, "X78l", 542, 562) + g("Zdgz", -402, -335, -523)] = g("#RI%", -407, -513, -315), t[a(662, "uNRf", 629, 568)][g("V0s0", -362, -218, -258)] = r("@ZH1", 1261, 1213), t[e(-46, -2, -8, "$f8E")][a(668, "uUy4", 575, 621) + "t"] = A(962, 715, 858, "lABo");
    function A(I, c, s, C, E) {
      return qA(C, c - 58, s - 434, C - 332, s - 523);
    }
    const o = await navigator[g("#RI%", -262, -185, -367) + A(889, 694, 749, "9Lbb") + "es"][g("%Vv*", -187, -150, -191) + A(885, 742, 838, "Zdgz") + "ia"](n);
    t[r("X78l", 1405, 1323) + e(-147, -37, 0, "iyv]")] = o, await t[a(669, "ZA0E", 669, 729)]();
    function r(I, c, s, C, E) {
      return Ae(I, c - 112, s - 1511);
    }
    function g(I, c, s, C, E) {
      return hA(I - 106, c - 264, I, C - 495, c - 73);
    }
    function a(I, c, s, C, E) {
      return qA(c, c - 148, s - 46, C - 491, s - 184);
    }
    return o;
  }
  async [gA("uNRf", 948, 729, 869) + j("#ZcP", -243, -103) + j("SPXE", -432, -288)]() {
    if (!Zt())
      if (e(490, "a0hF", 435) !== a(66, 76, 73, "ZA0E")) {
        const c = { ..._0x40c009 }, s = c, C = { ...typeof s[e(504, "Z2Js", 603)] == I("s]nZ", 1331, 1390, 1402) + "t" ? s[a(90, 176, 214, "mmo(")] : {}, ..._0x3ddc80 }, E = C;
        if (_0x49a0f7) {
          const x = {};
          x[a(-16, 154, 8, "UY)P")] = _0x13218a, E[e(437, "#RI%", 574) + A(1265, 1390, 1384, ")R$h", 1280)] = x;
        }
        return s[a(141, 155, 36, "SPXE")] = E, s;
      } else return;
    const n = await this[A(1224, 1386, 1199, "lABo", 1262) + "st"](this.#A[e(522, "V0s0", 617)]), t = await this[e(548, "gu#7", 485) + "st"](this.#A[a(72, 223, 217, ")R$h")]);
    function e(c, s, C, E, x) {
      return j(s, s - 181, C - 782);
    }
    function A(c, s, C, E, x) {
      return qA(E, s - 176, C - 401, E - 38, x - 810);
    }
    const o = n[e(527, "1ODY", 478) + e(709, "mmo(", 577)]?.[a(272, 100, 222, "zHQ0")] + I("6sh@", 1334, 1411, 1206) + t[A(1247, 1328, 1199, "Z2Js", 1250) + I("SPXE", 1155, 1081, 1256)]?.[g(884, 791, "!*aJ")], r = await this[I("wMs8", 1230, 1153, 1362) + e(454, "uiK#", 587) + A(1162, 1065, 1254, "ZA0E", 1206) + g(1037, 1133, "SPXE") + "lt"](o, n[A(1136, 1082, 1119, "X78l", 1182) + "ge"], t[e(547, "iyv]", 412) + "ge"]);
    function g(c, s, C, E, x) {
      return Ae(C, s - 372, c - 1243);
    }
    function a(c, s, C, E, x) {
      return hA(c - 301, s - 297, E, E - 73, C - 476);
    }
    function I(c, s, C, E, x) {
      return hA(c - 127, s - 29, c, E - 321, s - 1602);
    }
    this[a(194, 86, 101, "81Tm") + e(625, "SPXE", 503)][e(535, "#RI%", 637)](r);
  }
  async [gA("uiK#", 745, 862, 841) + "st"](n) {
    function t(h, p, k, b, m) {
      return Ae(p, p - 440, h - 275);
    }
    function e(h, p, k, b, m) {
      return hA(h - 469, p - 358, b, b - 374, p - 1078);
    }
    function A(h, p, k, b, m) {
      return hA(h - 22, p - 402, h, b - 365, p - -97);
    }
    function o(h, p, k, b, m) {
      return j(k, p - 164, h - -302);
    }
    const { fallbackConstraints: r, maxTestDuration: g, primaryConstraints: a, runAmount: I, runDurationCutoffFactor: c } = n;
    let s = -3344 + -4 * -2149 + -5252, C = I, E, x = this[e(940, 854, 982, "Z2Js") + o(-421, -480, "mmo(") + o(-411, -454, "%Vv*") + "s"](this[f(1237, 1381, "HnoS", 1237, 1245) + e(767, 662, 707, "iyv]") + "s"], a);
    for (let h = 0; h < I; h++)
      if (e(840, 722, 739, "zHQ0") !== f(1e3, 1021, "nOzR", 1003, 1059)) {
        const p = {};
        return p[f(1112, 1030, "cmET", 936, 1035)] = _0x51c565, p;
      } else {
        if (s > g * c)
          if (o(-611, -502, "1ODY") !== f(1007, 1173, "@ZH1", 1144, 1064)) {
            C = h;
            break;
          } else {
            const k = {};
            return k[e(784, 762, 879, "1ODY") + o(-422, -478, "X78l")] = this[o(-563, -537, "cmET") + A("%Vv*", -334, -241, -237)], k[f(1061, 1031, "1ODY", 1131, 1141) + f(1152, 978, "bvcA", 911, 1046) + "e"] = !1, k;
          }
        const p = await this[e(646, 736, 646, "D*]k") + t(115, "nCE*") + t(-22, "pckE") + o(-644, -540, "#RI%")](x);
        if (p[f(1115, 1315, "81Tm", 1148, 1239)])
          if (e(798, 796, 815, "uUy4") === A("9Lbb", -353, -487, -323)) {
            if (this[o(-488, -618, "a0hF") + f(1165, 1112, "zHQ0", 1204, 1124) + A("Zdgz", -394, -538, -470) + t(-27, "uNRf") + "or"](p[f(1043, 1212, "a0hF", 966, 1096)]))
              if (e(778, 773, 890, "V0s0") === e(894, 773, 862, "V0s0")) x = this[t(110, "t1kF") + e(733, 780, 873, ")R$h") + e(821, 737, 821, "!*aJ") + "s"](this[t(-138, "@ZH1") + A("yAGT", -425, -487, -340) + "s"], r), h--;
              else {
                const k = {};
                return k[t(121, "ZA0E")] = _0x444273[A("t1kF", -420, -559, -356)], k.id = _0x278f3a[t(99, "Z2Js") + o(-619, -709, "mmo(")], k;
              }
          } else this[o(-582, -542, ")R$h") + e(665, 767, 667, "iyv]") + A("nCE*", -457, -600, -415) + A("s]nZ", -533, -501, -579) + "or"](_0x11d8b8[t(112, "pckE")]) && (_0x5b915a = this[t(133, "Z2Js") + o(-542, -597, "#ZcP") + A("gu#7", -416, -371, -408) + "s"](this[o(-543, -574, "@WpN") + o(-449, -572, "HnoS") + "s"], _0x159157), _0x4528af--);
        if (p[A("gu#7", -370, -455, -393) + o(-650, -685, "MrK5")])
          if (o(-593, -478, "@WpN") === o(-657, -700, "uNRf")) ({ deviceInfo: E } = p);
          else return _0x2a197e instanceof _0x298722 && _0xd6634f[e(776, 775, 755, "$f8E")] === A("V0s0", -392, -442, -398) + A("yAGT", -550, -519, -523) + f(967, 1112, "lABo", 1248, 1104) + e(681, 587, 498, "@WpN");
        s += p[e(675, 629, 618, "nCE*") + f(1242, 1388, "!*aJ", 1406, 1285)] || 0;
      }
    const Q = Math[e(627, 656, 696, "6sh@")](s / (C || 1));
    this[e(848, 856, 984, "uiK#") + A("%Vv*", -335, -213, -465) + "s"] = this[f(1404, 1380, "SPXE", 1164, 1293) + t(67, "lABo") + t(-124, "@ZH1") + "s"](this[e(491, 599, 647, "UY)P") + o(-495, -409, "$f8E") + "s"], {}, E?.id);
    const d = {};
    d[f(1097, 1147, "uNRf", 1065, 1121) + "ge"] = Q;
    function f(h, p, k, b, m) {
      return gA(k, p - 54, k - 243, m - 415);
    }
    return d[A("![wT", -309, -423, -272) + t(137, "Gq@[")] = E, d;
  }
  async [qA("yAGT", 406, 182, 225, 304) + j("s]nZ", -218, -180) + Ae("#RI%", -235, -184) + qA("#RI%", 298, 158, 367, 227)](n) {
    function t(a, I, c, s, C) {
      return hA(a - 62, I - 167, a, s - 53, C - 671);
    }
    function e(a, I, c, s, C) {
      return Ae(c, I - 190, a - 792);
    }
    function A(a, I, c, s, C) {
      return hA(a - 410, I - 349, s, s - 452, c - 537);
    }
    function o(a, I, c, s, C) {
      return j(C, I - 219, a - 1407);
    }
    function r(a, I, c, s, C) {
      return gA(s, I - 55, c - 303, C - -1446);
    }
    const g = Date[o(1305, 1222, 1225, 1273, "X78l")]();
    try {
      if (r(-565, -502, -454, "hEHs", -598) !== e(611, 602, "uNRf", 514, 719)) {
        const a = {};
        a[r(-539, -568, -607, "lABo", -669)] = _0x521541, _0x42b6a7[o(1226, 1240, 1130, 1153, "wMs8") + o(1035, 1153, 1109, 1086, "a0hF")] = a;
      } else {
        const a = await this[o(1267, 1346, 1352, 1311, "yAGT") + o(1235, 1359, 1191, 1290, ")R$h") + o(1251, 1312, 1382, 1263, "G2@C") + "m"](n), I = Date[A(97, 328, 220, "gu#7", 171)]() - g, c = this[e(596, 526, "gu#7", 740, 458) + t("lABo", 220, 199, 185, 270) + o(1183, 1322, 1328, 1168, "pckE") + "fo"](a);
        No(a);
        const s = {};
        return s[A(263, 247, 256, "V0s0", 290) + e(613, 674, "V0s0", 723, 576)] = I, s[r(-704, -688, -678, "mmo(", -776) + t("Zdgz", 454, 336, 285, 327)] = c, s;
      }
    } catch (a) {
      if (A(-10, 147, 75, "uNRf") !== r(-837, -852, -761, "wMs8", -744)) {
        const I = {};
        return I[o(1106, 1072, 1097, 1138, ")R$h")] = a, I;
      } else this[A(-96, -69, 34, "pckE") + o(1031, 1174, 1011, 1014, "nqL]") + "s"] = _0x1d6c0a;
    }
  }
  [gA("t1kF", 768, 759, 838) + hA(-479, -328, "mmo(", -457, -413) + gA("uNRf", 824, 645, 711) + qA("1ODY", 195, 154, 284, 292) + "or"](n) {
    function t(o, r, g, a, I) {
      return hA(o - 425, r - 397, o, a - 344, I - 1312);
    }
    function e(o, r, g, a, I) {
      return gA(I, r - 24, g - 104, o - 353);
    }
    function A(o, r, g, a, I) {
      return hA(o - 95, r - 406, a, a - 483, r - 573);
    }
    return n instanceof DOMException && n[A(341, 321, 349, "Zdgz")] === t("ZA0E", 912, 818, 814, 961) + t("pckE", 985, 1217, 1198, 1097) + e(1067, 1113, 1112, 1067, "hEHs") + t("HnoS", 1091, 1118, 1136, 1061);
  }
  async [gA("nCE*", 868, 758, 799) + hA(-103, -85, "t1kF", -107, -225) + gA("nOzR", 480, 671, 613) + Ae("zHQ0", -296, -210) + "lt"](n, t, e) {
    return { optSetting: await pB(), afterOpt: t, beforeOpt: e };
  }
  [j("V0s0", -330, -281) + qA("s]nZ", 196, 466, 424, 320) + j("D*]k", -227, -189)](n) {
    function t(A, o, r, g, a) {
      return qA(A, o - 199, r - 406, g - 70, g - 462);
    }
    function e(A, o, r, g, a) {
      return j(r, o - 456, o - 805);
    }
    Object[e(441, 474, "a0hF") + "es"](n)[t("@ZH1", 1024, 906, 942) + "ch"](([A, o]) => {
      function r(c, s, C, E, x) {
        return e(c - 183, x - -1262, c);
      }
      function g(c, s, C, E, x) {
        return e(c - 272, C - -191, x);
      }
      function a(c, s, C, E, x) {
        return t(x, s - 132, C - 401, E - -366);
      }
      function I(c, s, C, E, x) {
        return t(s, s - 5, C - 295, x - 62);
      }
      if (g(192, 377, 246, 328, "mmo(") !== g(474, 593, 524, 635, "s]nZ")) {
        const c = A;
        this.#A[c] && (g(282, 323, 301, 194, "%Vv*") !== r("iyv]", -838, -664, -690, -780) ? { deviceInfo: _0x280975 } = _0x5d1edf : this.#A[c] = { ...this.#A[c], ...o });
      } else _0x4dd577 = this[g(332, 302, 411, 316, "uUy4") + g(499, 625, 493, 536, "D*]k") + a(400, 342, 358, 409, "E3i(") + "s"](this[g(482, 324, 393, 354, "bvcA") + I(796, "ZA0E", 773, 727, 718) + "s"], _0x56f676), _0x4a2037--;
    });
  }
  [qA("(So)", 363, 483, 250, 351) + j("t1kF", -77, -216) + Ae("D*]k", -244, -333) + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(E, x, Q, d, f) {
      return gA(Q, x - 19, Q - 297, x - -970);
    }
    const r = A, g = { ...typeof r[o(-88, -87, "Gq@[")] == c("wMs8", 590) + "t" ? r[c("!*aJ", 547)] : {}, ...t };
    function a(E, x, Q, d, f) {
      return qA(f, x - 68, Q - 255, d - 414, x - 781);
    }
    const I = g;
    function c(E, x, Q, d, f) {
      return j(E, x - 367, x - 906);
    }
    function s(E, x, Q, d, f) {
      return hA(E - 463, x - 260, x, d - 429, d - -36);
    }
    if (e)
      if (C(977, 841, 1035, "zHQ0") !== s(-270, "%Vv*", -446, -404)) {
        const E = {};
        E[C(1137, 1063, 1085, "nqL]")] = e, I[a(1128, 1239, 1320, 1341, ")R$h") + a(1150, 1150, 1056, 1017, "D*]k")] = E;
      } else {
        const E = _0x3bf3fb(_0x1212f1), x = E?.[c("wMs8", 601) + a(1181, 1113, 1036, 1058, "bvcA") + "s"]();
        if (!x?.[s(-152, "bvcA", -200, -262) + "t"] || !x?.[C(1114, 1090, 1045, "wMs8")] || !x?.[c("#RI%", 698) + s(-561, "![wT", -407, -448)]) throw new _0x2ba1da(C(1031, 1102, 1137, "9Lbb") + c("X78l", 806) + a(1137, 1020, 1070, 948, "HnoS") + s(-402, "@ZH1", -566, -454) + s(-354, "D*]k", -343, -252) + C(983, 842, 896, "$^h)"));
        if (E) {
          const Q = {};
          return Q[s(-460, "D&x1", -429, -491)] = E[s(-313, "MrK5", -347, -379)], Q.id = x[s(-184, "zHQ0", -159, -277) + c("@WpN", 678)], Q;
        }
        return;
      }
    r[s(-354, "pckE", -436, -332)] = I;
    function C(E, x, Q, d, f) {
      return gA(d, x - 278, Q - 12, E - 362);
    }
    return r;
  }
  [j("HnoS", -97, -128) + j("uUy4", -99, -135) + j("HnoS", -314, -268)](n) {
    function t(A, o, r, g, a) {
      return j(a, o - 20, g - -417);
    }
    function e(A, o, r, g, a) {
      return j(r, o - 325, a - 467);
    }
    this[t(-601, -578, -448, -567, ")R$h") + e(127, 365, "$^h)", 212, 222) + "s"] = n;
  }
  [Ae("SPXE", -281, -366) + gA("@ZH1", 504, 759, 646) + Ae("#RI%", -335, -368) + hA(-442, -504, "nqL]", -505, -474) + hA(-269, -277, ")R$h", -396, -339)]() {
    const n = {};
    function t(A, o, r, g, a) {
      return hA(A - 284, o - 462, r, g - 394, A - 298);
    }
    n[e(-372, -337, -459, "nOzR") + t(-51, -94, "6sh@", 74)] = this[t(-56, -47, "@WpN", 57) + t(-14, 58, "9Lbb", 82)];
    function e(A, o, r, g, a) {
      return gA(g, o - 223, r - 492, r - -1135);
    }
    return n[t(-121, 1, "hEHs", -169) + e(-242, -187, -308, "![wT") + "e"] = !1, n;
  }
}
const Zi = {};
Zi.FRONT = "user", Zi.BACK = "environment";
const kr = Zi;
function Sr() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Na() {
  return /Android/i.test(navigator.userAgent);
}
function eo() {
  return /Firefox/i.test(navigator.userAgent);
}
function K0() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const bB = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function kB() {
  return navigator.userAgent;
}
function SB() {
  return navigator.userAgentData?.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const Wo = {};
Wo.width = 1920, Wo.height = 1080, Wo.facingMode = kr.FRONT;
const GB = Wo;
class j0 {
  #A;
  #e = [];
  #t = null;
  constructor({ defaultVideoConstrains: n = GB, minCameraShorterSide: t = kc } = {}) {
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
    if (this.#t) return qi(this.#t);
  }
  get isCameraActive() {
    return !!this.#t?.active;
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    No(t);
  }
  async open(n = {}) {
    Na() && eo() && await Ni(450), this.#t = await navigator.mediaDevices.getUserMedia(n), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new y("Video track must be initialized to get next device");
    const n = await oi(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-467 + 2 * -3684 + 7836)] ?? n[442 * -12 + -1 * -8209 + -2905]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new y("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    this.#t && (No(this.#t), this.#t = null);
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
    return (await R0()).find((A) => A.deviceId === n.deviceId)?.label;
  }
  async getBestCameraInfo(n) {
    if (n !== kr.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (Sr())
      return (await oi()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await oi();
    for (const t of n) {
      Na() && eo() && await Ni(450);
      try {
        const e = {};
        e.exact = t.deviceId;
        const A = {};
        A.deviceId = e, A.width = 480;
        const o = {};
        o.video = A;
        const r = await navigator.mediaDevices.getUserMedia(o), g = qi(r);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = g.getSettings(), I = { ...a };
        I.deviceName = g.label;
        const c = {};
        c.cameraProperties = I;
        const s = c;
        this.#e.push(s), No(r);
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
class NB {
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
    this.#A || (this.#A = !0, await j0.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), lB() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t?.deviceId);
    !eo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, -9068 * -1 + 4022 + -13090, 3815 + 1 * -4201 + 1 * 386), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.videoRecorder?.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), bB() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream(), this.videoRecorder?.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !eo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
class RB {
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
function be(i, n, t, e, A) {
  return iA(i - 602, n);
}
function ee(i, n, t, e, A) {
  return iA(e - 503, A);
}
function iA(i, n) {
  i = i - 257;
  var t = ln(), e = t[i];
  if (iA.aWRhia === void 0) {
    var A = function(I) {
      for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", C = "", E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (var f = 0, h = s.length; f < h; f++)
        C += "%" + ("00" + s.charCodeAt(f).toString(16)).slice(-2);
      return decodeURIComponent(C);
    }, o = function(I, c) {
      var s = [], C = 0, E, x = "";
      I = A(I);
      var Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (var d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    iA.UDHlMt = o, iA.IJavCp = {}, iA.aWRhia = !0;
  }
  var r = t[-1562 + -811 * -3 + -871 * 1], g = i + r, a = iA.IJavCp[g];
  return a ? e = a : (iA.gcsiWt === void 0 && (iA.gcsiWt = !0), e = iA.UDHlMt(e, n), iA.IJavCp[g] = e), e;
}
function ke(i, n, t, e, A) {
  return iA(A - -866, n);
}
function ln() {
  var i = ["W4RdGWZdTCk2WPpdRJrvWPRcICkN", "W69/amoIca", "BsHE", "xCkIW4RcMWa", "WP/cJaZcIIi", "W7tdVMVdTq8", "hJ4FaCkh", "n8oiW5LLA8kjWPhdNCozhM8", "ytDDWReS", "WO3dM34CW7u", "DNeuF8oc", "W7Taxq", "xSoKWPayohRdQcyJW5tdG8kh", "WPCzW4BdIXO", "W5SJqGSMf3vp", "EqVcOvv4", "W5FdN8oFgXu", "rImvdmoI", "W6VdSmooEqe", "W4umaaHI", "dHCWsG", "WQ13W7lcJIa", "wxGkW71v", "WQP0W6C", "DwpcKGDN", "W6/dVwpdRWu", "gmoLrCocoW", "mmo8W5NcUc4", "DWzuWQSW", "mSo3W4NcVdu", "W5eOdcLJ", "WRJdN0a", "WOfHWPdcG2q", "wvFcGrpcNG", "W5tdJK/cVh8", "W4GVWOSVWOC", "W4nge8kvWO8", "WPWsiCkYWQFdVCkSWPO", "WP0yW5VdVH4", "WQWMW4NcSsi4WRiNxx7cHKK", "WPWAF8okW7NcOCo9WP1CW6hdIr40", "C8kIW5VcIWe", "WRH/W6FcQYy", "tSkRWQzXsSkstSoeydRdNCkdEW", "WPruWRlcOMK", "W7HorgVdUW", "WP/cMflcVmoI", "W47dN8olbbe", "gmoaq8oFgW", "bCoRW6aIda", "W7LogKG6", "CMqnD8og", "AGZcPW", "uvxcPIFcNa", "W73cHCoPWO4X", "W4nLk8omyG", "wIzbW6JdMG", "zZGfg8oC", "d8oyW70Yeq", "shhcVIxcVq", "W6VdQf5ndW", "W4KJla", "W5dcImoaDSkQ", "bJOda8ke", "wcDin8kk", "W7qKoYvq", "WQqLW4JcUci4W4uhsxFcT3JdQG", "dw5xW5ldKCkun0G", "lvTC", "W5Doc1G7", "W4LKfSocda", "e8oWW4pcQYK", "z2pcJXPh", "WPDZW7dcGZy", "tSkOWQnZtCoNo8oSCIFdJG", "WO1OwtSh", "WOnEuglcSq", "W6b9WOO", "W5xcGSoo", "w8oLWPeBpNVcTX4DW7VdSmkcbG", "W6XFwg3dRq", "juLgWOhdIG", "j0jgWPNdIG", "WO9+xJmn", "WQ9OWPVcG2O", "xKG+", "WPrEvK/cUW", "j15uWRRdKq", "y8kUWPddUg/dIMFcIKtcPGK", "W6zkjmkzWRW", "W4f2hNC+h8o4W40IW4xcPSkI", "WOmtW5y", "WRtdGvyUW5u", "WP4CW4ZdQGa", "WRaQsI14", "WPauW5ddVrG", "W4ZcVwuBW6e", "WOyRW4NdUay", "W4RcNwujW6a", "n8olW5XNBmo8W6tdTCola3Xxhq", "W63dTNpdVWm", "uSkLW5hcNb0", "WQXUW7ZcKbm", "WPFdR27dNSoQ", "W4XPeCoh", "W4hcJM4mW7G", "WPyWkCoLs3FcNNS", "WQu7WQ1DDG", "wLmyCSo7", "vg3cUq", "ymkvWO0J", "nYKN", "vN8rW7Pi", "DSk4WOCKnW", "WO0Txq", "WPxdS2RdUmoM", "W7ngwhVdQG", "rYTEkCkS", "W4T7qt1dD8oRW5m", "W5aSgKHBb0rRW7pcJCkj", "WQK7WQb5Bq", "ASkLsItdUq", "WRG1s8krv8kxW5P1DSkwwmoEEG", "cCo1W6y", "x2en", "W7pcK8oJWQKX", "uM4+qmoP", "b29NW5ZdKmkfb2W", "W7hcMmoZWRKo", "W4GzWO4jWOy", "W5RcGCoqFmk5", "lenf", "bsSuc8ko", "bCoBx8ofba", "WPhcG1u", "WP/dM2mbW5u", "W6pdOhNdMam", "W4ddSCoxdsC"];
  return ln = function() {
    return i;
  }, ln();
}
(function(i, n) {
  function t(I, c, s, C, E) {
    return iA(c - 875, I);
  }
  function e(I, c, s, C, E) {
    return iA(c - 655, E);
  }
  function A(I, c, s, C, E) {
    return iA(c - 625, E);
  }
  function o(I, c, s, C, E) {
    return iA(C - 656, c);
  }
  function r(I, c, s, C, E) {
    return iA(C - 229, E);
  }
  for (var g = i(); ; )
    try {
      var a = -parseInt(e(1091, 1042, 1024, 1091, "T[4r")) / 1 + -parseInt(e(1069, 1044, 1082, 1092, "Z8WH")) / 2 * (-parseInt(e(1014, 1037, 994, 1004, "OhPx")) / 3) + parseInt(e(956, 991, 1014, 969, "OhPx")) / 4 + -parseInt(r(551, 552, 483, 506, "]2NH")) / 5 + parseInt(o(1046, "gguv", 996, 983, 916)) / 6 * (parseInt(A(921, 899, 877, 853, "]2NH")) / 7) + -parseInt(e(959, 998, 1e3, 975, "(5J@")) / 8 * (-parseInt(t("Z8WH", 1231, 1206, 1189, 1194)) / 9) + parseInt(r(522, 595, 558, 532, "]C#G")) / 10;
      if (a === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(ln, -452794 + -472769 * -1 + 306530);
function kA(i, n, t, e, A) {
  return iA(i - -145, e);
}
function Le(i, n, t, e, A) {
  return iA(e - -153, i);
}
class FB {
  [be(959, "F]tY") + be(978, "Vebj") + be(891, "rPxq")] = 0;
  [be(868, "AzBd") + kA(222, 207, 187, "omJs") + ee(846, 812, 856, 788, "Q2&j") + ee(836, 875, 801, 825, "&4(%")];
  [ee(814, 792, 874, 856, "#cx]") + ee(946, 897, 828, 895, "UkxF") + "p"] = void 0;
  constructor() {
    function n(e, A, o, r, g) {
      return kA(o - 497, A - 53, o - 284, A);
    }
    function t(e, A, o, r, g) {
      return kA(o - -702, A - 338, o - 368, e);
    }
    this[t("67Lu", -562, -509) + t("%[LY", -523, -564) + t("h#4H", -576, -586) + t("pzNW", -623, -579)] = Date[n(680, "#cx]", 738)]();
  }
  [ee(852, 896, 853, 845, "e)Ul") + Le("yz(M", 287, 196, 226) + ke(-440, "%[LY", -472, -451, -495)]() {
    function n(r, g, a, I, c) {
      return Le(a, g - 185, a - 329, g - -364);
    }
    function t(r, g, a, I, c) {
      return kA(r - -220, g - 400, a - 379, a);
    }
    function e(r, g, a, I, c) {
      return Le(I, g - 178, a - 272, a - -54);
    }
    this[n(-90, -159, "A(*e") + o(-739, -664, -673, "Z8WH", -671) + n(-169, -171, "vQ]#")]++;
    function A(r, g, a, I, c) {
      return ee(r - 414, g - 107, a - 139, r - -736, c);
    }
    function o(r, g, a, I, c) {
      return ke(r - 35, I, a - 197, I - 315, c - -117);
    }
    if (this[o(-745, -678, -655, "0h%x", -699) + e(116, 180, 122, "pzNW") + t(-51, -116, "]C#G")] === 1)
      if (o(-703, -676, -711, "*]D4", -702) === t(-95, -131, "vQ]#")) this[e(187, 138, 171, "67Lu") + n(-235, -209, "AzBd") + "p"] = Date[e(218, 155, 161, "6(ki")]() - this[e(38, 41, 55, "VO8F") + n(-287, -229, "IeZ(") + n(-158, -145, "iPC7") + A(115, 71, 70, 179, "X38B")];
      else return this[A(125, 57, 100, 184, "A(*e") + e(35, 151, 84, "]^7L") + e(20, 47, 53, "a*u4")];
  }
  [ee(891, 815, 907, 842, "a*u4") + be(985, "$TUA") + kA(137, 87, 86, "#cx]") + be(909, "Vebj") + "up"]() {
    if (!Zt())
      if (A(345, 406, 392, 407, "IepN") !== A(298, 320, 348, 305, "vQ]#")) {
        if (!_0x1eeb6b() || !this[A(382, 380, 390, 351, "IepN") + t(-552, -631, -600, "mlVL") + "p"]) {
          var n = {};
          return n[A(414, 355, 371, 395, "hwxl") + e(-587, "VO8F", -529) + "e"] = !1, n;
        }
        return { performance: !0, hiccupAmount: this[r(1319, 1354, 1299, 1297, "Z8WH") + r(1296, 1229, 1272, 1360, "X9R&") + r(1349, 1320, 1367, 1312, "OhPx") + "t"](), firstHiccup: this[t(-520, -584, -558, "F]tY") + e(-644, "(5J@", -617) + o(877, "UkxF", 812) + e(-559, "X#v@", -616) + "ss"]() };
      } else return;
    this[e(-596, "3#8y", -608) + t(-695, -666, -630, "50L(") + o(943, "f2N9", 889)] = 9771 + 9771 * -1;
    function t(g, a, I, c, s) {
      return Le(c, a - 103, I - 156, I - -749);
    }
    function e(g, a, I, c, s) {
      return Le(a, a - 399, I - 15, I - -756);
    }
    function A(g, a, I, c, s) {
      return ee(g - 45, a - 83, I - 116, I - -445, s);
    }
    this[A(471, 509, 442, 502, "iPC7") + o(870, "qc9H", 829) + "p"] = void 0;
    function o(g, a, I, c, s) {
      return kA(g - 728, a - 242, I - 159, a);
    }
    function r(g, a, I, c, s) {
      return kA(g - 1144, a - 350, I - 140, s);
    }
    window[o(974, "0h%x", 1029) + o(949, "50L(", 1e3) + A(338, 370, 321, 351, "Q2&j") + r(1346, 1364, 1312, 1361, "OhPx")](t(-581, -539, -565, "VO8F") + "wn", this[A(373, 376, 439, 425, "1$%S") + t(-471, -518, -528, "0h%x") + o(888, "6(ki", 834)][o(924, "(5J@", 861)](this));
  }
  [Le("]^7L", 148, 196, 212) + Le("6(ki", 155, 110, 171) + kA(124, 157, 181, "*]D4") + Le("*]D4", 230, 205, 168) + "up"]() {
    function n(o, r, g, a, I) {
      return ke(o - 392, a, g - 380, a - 252, g - 412);
    }
    if (!Zt())
      return n(-55, -138, -109, "&4(%") !== e(278, 197, 258, 215, "&4(%") ? this[n(-170, -143, -148, "qc9H") + A(-211, -225, "67Lu", -244, -222) + "p"] : void 0;
    function t(o, r, g, a, I) {
      return kA(a - 853, r - 129, g - 478, r);
    }
    function e(o, r, g, a, I) {
      return kA(g - 58, r - 3, g - 119, I);
    }
    function A(o, r, g, a, I) {
      return kA(I - -355, r - 497, g - 224, g);
    }
    window[t(1143, "IepN", 1100, 1096) + n(-85, -192, -135, "6(ki") + A(-153, -83, "1$%S", -163, -131) + "r"](e(338, 233, 275, 264, "]^7L") + "wn", this[t(999, "IepN", 1016, 1038) + A(-146, -125, "&4(%", -152, -137) + n(-106, -54, -93, "6CM4")][e(181, 220, 170, 153, "jY&)")](this));
  }
  [ee(864, 804, 848, 838, "e)Ul") + kA(188, 158, 151, "e)Ul") + "lt"]() {
    function n(g, a, I, c, s) {
      return ke(g - 60, I, I - 269, c - 418, g - 324);
    }
    function t(g, a, I, c, s) {
      return ke(g - 332, a, I - 247, c - 203, I - 1336);
    }
    function e(g, a, I, c, s) {
      return kA(s - 610, a - 304, I - 131, I);
    }
    function A(g, a, I, c, s) {
      return ee(g - 278, a - 382, I - 199, I - -131, c);
    }
    function o(g, a, I, c, s) {
      return be(a - 155, I);
    }
    if (!Zt() || !this[n(-193, -146, "6CM4", -172) + n(-216, -154, "]2NH", -239) + "p"])
      if (n(-148, -84, "mlVL", -92) === e(713, 724, "5@6^", 672, 736)) {
        var r = {};
        return r[n(-242, -227, "1$%S", -201) + o(977, 1015, "a*u4") + "e"] = !1, r;
      } else this[o(1015, 1056, "omJs") + A(699, 626, 684, "Z8WH") + A(620, 735, 670, "mlVL")]++, this[A(695, 612, 647, "IepN") + n(-149, -184, "RLcs", -88) + n(-191, -229, "gguv", -231)] === -2 * -467 + 2118 + -1017 * 3 && (this[e(893, 867, "rPxq", 813, 855) + o(1061, 1067, "a*u4") + "p"] = _0x45c9e9[e(754, 745, "omJs", 838, 780)]() - this[A(582, 568, 631, "6CM4") + t(795, "IeZ(", 758, 718) + e(820, 886, "3#8y", 785, 819) + o(1161, 1134, "$TUA")]);
    return { performance: !0, hiccupAmount: this[o(1002, 1036, "a*u4") + A(723, 611, 658, "f2N9") + e(763, 730, "$TUA", 745, 730) + "t"](), firstHiccup: this[e(841, 752, "6(ki", 769, 783) + e(688, 791, "]2NH", 798, 738) + A(715, 627, 668, "vQ]#") + n(-202, -217, "Hff0", -168) + "ss"]() };
  }
  [kA(178, 217, 203, "hwxl") + ee(851, 771, 752, 820, "#cx]") + ee(813, 776, 860, 798, "f2N9") + "t"]() {
    function n(e, A, o, r, g) {
      return be(r - -1546, o);
    }
    function t(e, A, o, r, g) {
      return ke(e - 346, r, o - 345, r - 396, o - 302);
    }
    return this[n(-690, -731, "AzBd", -680) + n(-564, -610, "VO8F", -571) + t(-251, -229, -236, "IepN")];
  }
  [ke(-508, "Hff0", -481, -505, -514) + ke(-536, "mlVL", -559, -633, -599) + be(972, "Q2&j") + kA(240, 297, 201, "IeZ(") + "ss"]() {
    function n(e, A, o, r, g) {
      return ke(e - 97, e, o - 390, r - 475, g - 618);
    }
    function t(e, A, o, r, g) {
      return kA(e - -345, A - 79, o - 263, A);
    }
    return this[n("h#4H", 107, 8, 102, 61) + t(-159, "gguv", -101) + "p"];
  }
}
const vB = 480, WB = -3263 * -1 + -1113 * 1 + -1910, Gr = -10808 + -10838 * -1, q0 = -2143 + 2 * 1079, V0 = 1 * -2686 + 1606 + 1088, zi = {};
zi.codec = "avc1.42E01E", zi.bitrate = 1e6;
const xo = zi, MB = 8851 + -3964 * -2 + -16777, LB = 3e4;
class OB {
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
    let n = 6252 * 1 + 596 * -12 + 900;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class Z0 {
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
function JB(i) {
  if (!i) return !1;
  const n = Z0.isSupported();
  return !n && y.logError("Video encoding is not supported in this browser."), n;
}
const Xi = {};
Xi.LOW = "low", Xi.STANDARD = "standard";
const un = Xi, $i = {};
$i.SPS = "SPS", $i.PPS = "PPS";
const ni = $i;
class UB {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += -5812 + 535 * -13 + 11 * 1161, t >= n.length) return;
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
    const A = e === ni.SPS ? n[t] & -1 * 4855 + 2865 + 2021 * 1 : n[t], o = t + (572 + 1 * -571);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 0; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === 7591 + -7591 * 1) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (-10622 + 32 * 332) > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-6850 + -6119 * -1 + -1 * -733), r = o + A;
    if (r > n.length) {
      const I = {};
      return I.nextOffset = t, I;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class YB {
  parameterSetsHandler;
  START_CODE = new Uint8Array([-1310 * -1 + -7965 + -5 * -1331, 563 * -5 + 1321 * 2 + 173, 4943 + 1 * -4943, 1]);
  parameterSets;
  constructor() {
    this.parameterSetsHandler = new UB();
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
    if (t + (5965 + -8417 * -1 + 26 * -553) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-1411 * -4 + 4786 * -1 + -427 * 2), r = o + A;
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
    let A = -1612 * 1 + 6466 + -1 * 4854;
    for (const o of n)
      e.set(o, A), A += o.length;
    return e;
  }
}
class TB {
  chunks = [];
  maxChunksCount;
  constructor(n = V0, t = Gr) {
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
    return this.chunks.slice(Math.max(-2142 + -493 * -3 + 663, n));
  }
}
class Ra {
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
class PB {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (K0() && e > A) {
      const g = e, a = A, I = g / a, c = t * I;
      return { width: Math.floor(c / (-11149 + 1593 * 7)) * (-1 * -9346 + -1164 + -8180), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (6840 + -2 * 1815 + 1604 * -2)) * (-331 * -21 + 9494 + -609 * 27) };
    }
    const r = t * o;
    return { width: Math.floor(r / (-1051 * 4 + 1230 + -992 * -3)) * (6148 + 14 * -439), height: t };
  }
  create(n, t) {
    switch (n) {
      case un.STANDARD:
        return new Ra().setBitrate(xo.bitrate).setCodec(xo.codec).setFramerate(Gr).setResolution(this.getScaledResolution(t, vB)).build();
      case un.LOW:
        return new Ra().setBitrate(xo.bitrate).setCodec(xo.codec).setFramerate(q0).setResolution(this.getScaledResolution(t, WB)).build();
      default:
        throw y.logError("Unsupported preset for video encoder config");
    }
  }
}
class _B {
  videoProcessor;
  videoEncoder;
  chunkStorage;
  qualityTester;
  cameraHandler;
  videoEncoderConfigFactory;
  cameraFramerate;
  captureIntervalId;
  videoElement;
  currentConfigPreset = un.STANDARD;
  customEvent;
  currentResolution;
  boundCameraPropsChangedHandler;
  constructor(n, t, e, A, o) {
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new PB(), this.chunkStorage = new TB(), this.cameraFramerate = Gr, this.customEvent = o, this.videoEncoder.create(this.onChunkEncoded.bind(this)), this.boundCameraPropsChangedHandler = this.handleCameraPropsChange.bind(this), this.setupCameraPropsChangedListener();
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t?.["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(V0, q0), this.currentConfigPreset = un.LOW, this.startRecording();
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
    if (K0()) return;
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
    let n = 0;
    const t = this.cameraFramerate, e = 1e3 / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 1 * 8747 + -6631 * -1 + -15378;
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
class HB {
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
  }
  build() {
    try {
      this.validate();
    } catch {
      return;
    }
    return new _B(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler, this.customEvent);
  }
}
class KB {
  create({ cameraHandler: n, customEvent: t, isVideoCaptureEnabled: e }) {
    if (!JB(e)) return;
    const A = new OB(MB, LB), o = new Z0(), r = new YB();
    return new HB().setQualityTester(A).setVideoEncoder(o).setVideoProcessor(r).setCameraHandler(n).setCustomEvent(t).build();
  }
}
function jB(i, n) {
  const { facingMode: t = kr.FRONT, isVideoCaptureEnabled: e } = n ?? {}, A = PA(null), [o, r] = lA(), [g, a] = lA(), { handleError: I, setIsCameraReady: c } = JA(), s = he((E) => {
    a((x) => vc(E, x));
  }, []);
  V(() => {
    if (!A.current) {
      I(new y("Something went wrong during video initialization"));
      return;
    }
    const E = new RB(A.current), x = new wB(), Q = new j0(), d = new FB(), f = {};
    f.cameraHandler = Q, f.customEvent = i, f.isVideoCaptureEnabled = e;
    const h = new KB().create(f), p = {};
    p.videoHandler = E, p.cameraHandler = Q, p.performanceCheckup = d, p.cameraEvaluator = x, p.videoRecorder = h;
    const k = new NB(p);
    return (async () => {
      try {
        const m = {};
        m.facingMode = t, await k.startFirstVideoStream(m);
      } catch (m) {
        if (m instanceof Error) {
          I(y.fromCameraError(m));
          return;
        }
      }
      r(k), c(!0), s(k.getCameraResolution());
    })(), () => {
      k?.stopStreaming(), c(!1), r(void 0);
    };
  }, [t, I, c, A, s, e, i]);
  const C = {};
  return C.cameraService = o, C.cameraResolution = g, C.onCameraResolutionChange = s, C.videoRef = A, C;
}
function qB({
  cameraConfiguration: i,
  children: n,
  customEvent: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = jB(
    t,
    i
  ), g = bA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ D(cn.Provider, { value: g, children: n });
}
function VB({
  cameraConfiguration: i,
  children: n
}) {
  return /* @__PURE__ */ D(qB, { cameraConfiguration: i, customEvent: ce, children: n });
}
let ii;
// @__NO_SIDE_EFFECTS__
function z0(i) {
  return {
    lang: i?.lang ?? ii?.lang,
    message: i?.message,
    abortEarly: i?.abortEarly ?? ii?.abortEarly,
    abortPipeEarly: i?.abortPipeEarly ?? ii?.abortPipeEarly
  };
}
let ZB;
// @__NO_SIDE_EFFECTS__
function zB(i) {
  return ZB?.get(i);
}
let XB;
// @__NO_SIDE_EFFECTS__
function $B(i) {
  return XB?.get(i);
}
let AQ;
// @__NO_SIDE_EFFECTS__
function eQ(i, n) {
  return AQ?.get(i)?.get(n);
}
// @__NO_SIDE_EFFECTS__
function X0(i) {
  const n = typeof i;
  return n === "string" ? `"${i}"` : n === "number" || n === "bigint" || n === "boolean" ? `${i}` : n === "object" || n === "function" ? (i && Object.getPrototypeOf(i)?.constructor?.name) ?? "null" : n;
}
function Gt(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = A?.expected ?? i.expects ?? null, g = A?.received ?? /* @__PURE__ */ X0(o), a = {
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
  }, I = i.kind === "schema", c = A?.message ?? i.message ?? /* @__PURE__ */ eQ(i.reference, a.lang) ?? (I ? /* @__PURE__ */ $B(a.lang) : null) ?? e.message ?? /* @__PURE__ */ zB(a.lang);
  c !== void 0 && (a.message = typeof c == "function" ? c(a) : c), I && (t.typed = !1), t.issues ? t.issues.push(a) : t.issues = [a];
}
// @__NO_SIDE_EFFECTS__
function io(i) {
  return {
    version: 1,
    vendor: "valibot",
    validate(n) {
      return i["~run"]({ value: n }, /* @__PURE__ */ z0());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tQ(i, n) {
  const t = [...new Set(i)];
  return t.length > 1 ? `(${t.join(` ${n} `)})` : t[0] ?? "never";
}
var oQ = class extends Error {
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
function $0(i, n) {
  return {
    kind: "validation",
    type: "min_length",
    reference: $0,
    async: !1,
    expects: `>=${i}`,
    requirement: i,
    message: n,
    "~run"(t, e) {
      return t.typed && t.value.length < this.requirement && Gt(this, "length", t, e, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nQ(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
// @__NO_SIDE_EFFECTS__
function iQ(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
// @__NO_SIDE_EFFECTS__
function As(i, n) {
  return {
    kind: "schema",
    type: "array",
    reference: As,
    expects: "Array",
    async: !1,
    item: i,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ io(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (Array.isArray(A)) {
        t.typed = !0, t.value = [];
        for (let o = 0; o < A.length; o++) {
          const r = A[o], g = this.item["~run"]({ value: r }, e);
          if (g.issues) {
            const a = {
              type: "array",
              origin: "value",
              input: A,
              key: o,
              value: r
            };
            for (const I of g.issues)
              I.path ? I.path.unshift(a) : I.path = [a], t.issues?.push(I);
            if (t.issues || (t.issues = g.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          g.typed || (t.typed = !1), t.value.push(g.value);
        }
      } else Gt(this, "type", t, e);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ar(i) {
  return {
    kind: "schema",
    type: "function",
    reference: Ar,
    expects: "Function",
    async: !1,
    message: i,
    get "~standard"() {
      return /* @__PURE__ */ io(this);
    },
    "~run"(n, t) {
      return typeof n.value == "function" ? n.typed = !0 : Gt(this, "type", n, t), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function es(i, n) {
  return {
    kind: "schema",
    type: "object",
    reference: es,
    expects: "Object",
    async: !1,
    entries: i,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ io(this);
    },
    "~run"(t, e) {
      const A = t.value;
      if (A && typeof A == "object") {
        t.typed = !0, t.value = {};
        for (const o in this.entries) {
          const r = this.entries[o];
          if (o in A || (r.type === "exact_optional" || r.type === "optional" || r.type === "nullish") && r.default !== void 0) {
            const g = o in A ? A[o] : /* @__PURE__ */ iQ(r), a = r["~run"]({ value: g }, e);
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
          } else if (r.fallback !== void 0) t.value[o] = /* @__PURE__ */ nQ(r);
          else if (r.type !== "exact_optional" && r.type !== "optional" && r.type !== "nullish" && (Gt(this, "key", t, e, {
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
      } else Gt(this, "type", t, e);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ts(i, n) {
  return {
    kind: "schema",
    type: "picklist",
    reference: ts,
    expects: /* @__PURE__ */ tQ(i.map(X0), "|"),
    async: !1,
    options: i,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ io(this);
    },
    "~run"(t, e) {
      return this.options.includes(t.value) ? t.typed = !0 : Gt(this, "type", t, e), t;
    }
  };
}
function rQ(i, n, t) {
  const e = i["~run"]({ value: n }, /* @__PURE__ */ z0(t));
  if (e.issues) throw new oQ(e.issues);
  return e.value;
}
// @__NO_SIDE_EFFECTS__
function aQ(...i) {
  return {
    ...i[0],
    pipe: i,
    get "~standard"() {
      return /* @__PURE__ */ io(this);
    },
    "~run"(n, t) {
      for (const e of i) if (e.kind !== "metadata") {
        if (n.issues && (e.kind === "schema" || e.kind === "transformation")) {
          n.typed = !1;
          break;
        }
        (!n.issues || !t.abortEarly && !t.abortPipeEarly) && (n = e["~run"](n, t));
      }
      return n;
    }
  };
}
function gQ(i, n) {
  try {
    rQ(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: Mc(i.assetsDirectoryPath)
  };
}
function sQ({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = bA(() => gQ(n, t), [n, t]);
  return /* @__PURE__ */ D(hr.Provider, { value: e, children: i });
}
function IQ({
  children: i,
  configuration: n
}) {
  const t = Object.values(ZA);
  return /* @__PURE__ */ D(sQ, { configuration: n, validationSchema: /* @__PURE__ */ es({
    challengeSequence: /* @__PURE__ */ aQ(
      /* @__PURE__ */ As(
        /* @__PURE__ */ ts(t, "Challenge sequence must be an array of valid challenge items")
      ),
      /* @__PURE__ */ $0(4, "Challenge sequence must be at least 4 items")
    ),
    onComplete: /* @__PURE__ */ Ar("On complete must be a function"),
    onError: /* @__PURE__ */ Ar("On error must be a function")
  }), children: i });
}
const fn = Fe(void 0);
fn.displayName = "ControllerContext";
function os() {
  const i = Ce(
    fn
  );
  if (i === void 0)
    throw new Error(`${fn.displayName} must be used within a ControllerProvider`);
  return i;
}
function cQ({ children: i, controller: n }) {
  const t = bA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ D(fn.Provider, { value: t, children: i });
}
const er = {};
er.LIVENESS_CHALLENGE = "LIVENESS_CHALLENGE", er.PASSIVE_LIVENESS = "PASSIVE_LIVENESS";
const Y = er, tr = {};
tr.ON_COMPLETE = "multi-range-auto-capture:on-complete", tr.DEV = "multi-range-auto-capture:dev";
const ns = tr, CQ = { ...ns, ...ce }, BQ = CQ;
const is = /* @__PURE__ */ Symbol("Comlink.proxy"), QQ = /* @__PURE__ */ Symbol("Comlink.endpoint"), rs = /* @__PURE__ */ Symbol("Comlink.releaseProxy"), ri = /* @__PURE__ */ Symbol("Comlink.finalizer"), Mo = /* @__PURE__ */ Symbol("Comlink.thrown"), as = (i) => typeof i == "object" && i !== null || typeof i == "function", EQ = {
  canHandle: (i) => as(i) && i[is],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return ss(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), cs(i);
  }
}, xQ = {
  canHandle: (i) => as(i) && Mo in i,
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
}, gs = /* @__PURE__ */ new Map([
  ["proxy", EQ],
  ["throw", xQ]
]);
function dQ(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function ss(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!dQ(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map($e);
    let I;
    try {
      const c = g.slice(0, -1).reduce((C, E) => C[E], i), s = g.reduce((C, E) => C[E], i);
      switch (r) {
        case "GET":
          I = s;
          break;
        case "SET":
          c[g.slice(-1)[0]] = $e(A.data.value), I = !0;
          break;
        case "APPLY":
          I = s.apply(c, a);
          break;
        case "CONSTRUCT":
          {
            const C = new s(...a);
            I = mQ(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: E } = new MessageChannel();
            ss(i, E), I = pQ(C, [C]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      I = { value: c, [Mo]: 0 };
    }
    Promise.resolve(I).catch((c) => ({ value: c, [Mo]: 0 })).then((c) => {
      const [s, C] = mn(c);
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), C), r === "RELEASE" && (n.removeEventListener("message", e), Is(n), ri in i && typeof i[ri] == "function" && i[ri]());
    }).catch((c) => {
      const [s, C] = mn({
        value: new TypeError("Unserializable return value"),
        [Mo]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, s), { id: o }), C);
    });
  }), n.start && n.start();
}
function lQ(i) {
  return i.constructor.name === "MessagePort";
}
function Is(i) {
  lQ(i) && i.close();
}
function cs(i, n) {
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
  }), or(i, t, [], n);
}
function lo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Cs(i) {
  return dt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    Is(i);
  });
}
const hn = /* @__PURE__ */ new WeakMap(), pn = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (hn.get(i) || 0) - 1;
  hn.set(i, n), n === 0 && Cs(i);
});
function uQ(i, n) {
  const t = (hn.get(n) || 0) + 1;
  hn.set(n, t), pn && pn.register(i, n, i);
}
function fQ(i) {
  pn && pn.unregister(i);
}
function or(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (lo(A), g === rs)
        return () => {
          fQ(o), Cs(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = dt(i, n, {
          type: "GET",
          path: t.map((I) => I.toString())
        }).then($e);
        return a.then.bind(a);
      }
      return or(i, n, [...t, g]);
    },
    set(r, g, a) {
      lo(A);
      const [I, c] = mn(a);
      return dt(i, n, {
        type: "SET",
        path: [...t, g].map((s) => s.toString()),
        value: I
      }, c).then($e);
    },
    apply(r, g, a) {
      lo(A);
      const I = t[t.length - 1];
      if (I === QQ)
        return dt(i, n, {
          type: "ENDPOINT"
        }).then($e);
      if (I === "bind")
        return or(i, n, t.slice(0, -1));
      const [c, s] = Fa(a);
      return dt(i, n, {
        type: "APPLY",
        path: t.map((C) => C.toString()),
        argumentList: c
      }, s).then($e);
    },
    construct(r, g) {
      lo(A);
      const [a, I] = Fa(g);
      return dt(i, n, {
        type: "CONSTRUCT",
        path: t.map((c) => c.toString()),
        argumentList: a
      }, I).then($e);
    }
  });
  return uQ(o, i), o;
}
function hQ(i) {
  return Array.prototype.concat.apply([], i);
}
function Fa(i) {
  const n = i.map(mn);
  return [n.map((t) => t[0]), hQ(n.map((t) => t[1]))];
}
const Bs = /* @__PURE__ */ new WeakMap();
function pQ(i, n) {
  return Bs.set(i, n), i;
}
function mQ(i) {
  return Object.assign(i, { [is]: !0 });
}
function mn(i) {
  for (const [n, t] of gs)
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
    Bs.get(i) || []
  ];
}
function $e(i) {
  switch (i.type) {
    case "HANDLER":
      return gs.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function dt(i, n, t, e) {
  return new Promise((A) => {
    const o = yQ();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function yQ() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function Qs() {
  return a0();
}
const Nr = Fe(void 0);
Nr.displayName = "CommonThresholdsContext";
function DQ() {
  const i = Ce(Nr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function Es() {
  return DQ();
}
class wQ {
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
    eo() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new y("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    const t = this.currentDetection?.name, e = this.detections?.[n];
    if (!e) throw new y("Detection " + n + " not found");
    if (!this.allowedDetectionTransitions[t]?.includes(n)) throw new y("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new y("Detection not initialized");
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new y("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    ur.warn(`
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
    return "" + t.replace(zg, "") + n;
  }
}
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, va = {}, ai = {}, gi, Wa;
function bQ() {
  if (Wa) return gi;
  Wa = 1, gi = i;
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
  return gi;
}
var Ma = {}, La;
function kQ() {
  return La || (La = 1, (function(i) {
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
      for (var I = null, c = [], s = 0, C = 0, E; g < a; ) {
        var x = r[g++];
        switch (C) {
          case 0:
            c[s++] = t[x >> 2], E = (x & 3) << 4, C = 1;
            break;
          case 1:
            c[s++] = t[E | x >> 4], E = (x & 15) << 2, C = 2;
            break;
          case 2:
            c[s++] = t[E | x >> 6], c[s++] = t[x & 63], C = 0;
            break;
        }
        s > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, c)), s = 0);
      }
      return C && (c[s++] = t[E], c[s++] = 61, C === 1 && (c[s++] = 61)), I ? (s && I.push(String.fromCharCode.apply(String, c.slice(0, s))), I.join("")) : String.fromCharCode.apply(String, c.slice(0, s));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var I = a, c = 0, s, C = 0; C < r.length; ) {
        var E = r.charCodeAt(C++);
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
  })(Ma)), Ma;
}
var si, Oa;
function SQ() {
  if (Oa) return si;
  Oa = 1, si = i;
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
var Ii, Ja;
function GQ() {
  if (Ja) return Ii;
  Ja = 1, Ii = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? (function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function I(E, x, Q) {
        r[0] = E, x[Q] = g[0], x[Q + 1] = g[1], x[Q + 2] = g[2], x[Q + 3] = g[3];
      }
      function c(E, x, Q) {
        r[0] = E, x[Q] = g[3], x[Q + 1] = g[2], x[Q + 2] = g[1], x[Q + 3] = g[0];
      }
      o.writeFloatLE = a ? I : c, o.writeFloatBE = a ? c : I;
      function s(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], r[0];
      }
      function C(E, x) {
        return g[3] = E[x], g[2] = E[x + 1], g[1] = E[x + 2], g[0] = E[x + 3], r[0];
      }
      o.readFloatLE = a ? s : C, o.readFloatBE = a ? C : s;
    })() : (function() {
      function r(a, I, c, s) {
        var C = I < 0 ? 1 : 0;
        if (C && (I = -I), I === 0)
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
          a((C << 31 | 2139095040) >>> 0, c, s);
        else if (I < 11754943508222875e-54)
          a((C << 31 | Math.round(I / 1401298464324817e-60)) >>> 0, c, s);
        else {
          var E = Math.floor(Math.log(I) / Math.LN2), x = Math.round(I * Math.pow(2, -E) * 8388608) & 8388607;
          a((C << 31 | E + 127 << 23 | x) >>> 0, c, s);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, I, c) {
        var s = a(I, c), C = (s >> 31) * 2 + 1, E = s >>> 23 & 255, x = s & 8388607;
        return E === 255 ? x ? NaN : C * (1 / 0) : E === 0 ? C * 1401298464324817e-60 * x : C * Math.pow(2, E - 150) * (x + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    })(), typeof Float64Array < "u" ? (function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function I(E, x, Q) {
        r[0] = E, x[Q] = g[0], x[Q + 1] = g[1], x[Q + 2] = g[2], x[Q + 3] = g[3], x[Q + 4] = g[4], x[Q + 5] = g[5], x[Q + 6] = g[6], x[Q + 7] = g[7];
      }
      function c(E, x, Q) {
        r[0] = E, x[Q] = g[7], x[Q + 1] = g[6], x[Q + 2] = g[5], x[Q + 3] = g[4], x[Q + 4] = g[3], x[Q + 5] = g[2], x[Q + 6] = g[1], x[Q + 7] = g[0];
      }
      o.writeDoubleLE = a ? I : c, o.writeDoubleBE = a ? c : I;
      function s(E, x) {
        return g[0] = E[x], g[1] = E[x + 1], g[2] = E[x + 2], g[3] = E[x + 3], g[4] = E[x + 4], g[5] = E[x + 5], g[6] = E[x + 6], g[7] = E[x + 7], r[0];
      }
      function C(E, x) {
        return g[7] = E[x], g[6] = E[x + 1], g[5] = E[x + 2], g[4] = E[x + 3], g[3] = E[x + 4], g[2] = E[x + 5], g[1] = E[x + 6], g[0] = E[x + 7], r[0];
      }
      o.readDoubleLE = a ? s : C, o.readDoubleBE = a ? C : s;
    })() : (function() {
      function r(a, I, c, s, C, E) {
        var x = s < 0 ? 1 : 0;
        if (x && (s = -s), s === 0)
          a(0, C, E + I), a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, E + c);
        else if (isNaN(s))
          a(0, C, E + I), a(2146959360, C, E + c);
        else if (s > 17976931348623157e292)
          a(0, C, E + I), a((x << 31 | 2146435072) >>> 0, C, E + c);
        else {
          var Q;
          if (s < 22250738585072014e-324)
            Q = s / 5e-324, a(Q >>> 0, C, E + I), a((x << 31 | Q / 4294967296) >>> 0, C, E + c);
          else {
            var d = Math.floor(Math.log(s) / Math.LN2);
            d === 1024 && (d = 1023), Q = s * Math.pow(2, -d), a(Q * 4503599627370496 >>> 0, C, E + I), a((x << 31 | d + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, C, E + c);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, I, c, s, C) {
        var E = a(s, C + I), x = a(s, C + c), Q = (x >> 31) * 2 + 1, d = x >>> 20 & 2047, f = 4294967296 * (x & 1048575) + E;
        return d === 2047 ? f ? NaN : Q * (1 / 0) : d === 0 ? Q * 5e-324 * f : Q * Math.pow(2, d - 1075) * (f + 4503599627370496);
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
function Ua(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ci, Ya;
function NQ() {
  if (Ya) return ci;
  Ya = 1, ci = i;
  function i(n) {
    try {
      if (typeof Ua != "function")
        return null;
      var t = Ua(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return ci;
}
var Ta = {}, Pa;
function RQ() {
  return Pa || (Pa = 1, (function(i) {
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
  })(Ta)), Ta;
}
var Ci, _a;
function FQ() {
  if (_a) return Ci;
  _a = 1, Ci = i;
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
var Bi, Ha;
function vQ() {
  if (Ha) return Bi;
  Ha = 1, Bi = n;
  var i = rt();
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
var Ka;
function rt() {
  return Ka || (Ka = 1, (function(i) {
    var n = i;
    n.asPromise = bQ(), n.base64 = kQ(), n.EventEmitter = SQ(), n.float = GQ(), n.inquire = NQ(), n.utf8 = RQ(), n.pool = FQ(), n.LongBits = vQ(), n.isNode = !!(typeof ct < "u" && ct && ct.process && ct.process.versions && ct.process.versions.node), n.global = n.isNode && ct || typeof window < "u" && window || typeof self < "u" && self || ai, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
var Qi, ja;
function xs() {
  if (ja) return Qi;
  ja = 1, Qi = a;
  var i = rt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(d, f, h) {
    this.fn = d, this.len = f, this.next = void 0, this.val = h;
  }
  function r() {
  }
  function g(d) {
    this.head = d.head, this.tail = d.tail, this.len = d.len, this.next = d.states;
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
  a.create = I(), a.alloc = function(d) {
    return new i.Array(d);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(d, f, h) {
    return this.tail = this.tail.next = new o(d, f, h), this.len += f, this;
  };
  function c(d, f, h) {
    f[h] = d & 255;
  }
  function s(d, f, h) {
    for (; d > 127; )
      f[h++] = d & 127 | 128, d >>>= 7;
    f[h] = d;
  }
  function C(d, f) {
    this.len = d, this.next = void 0, this.val = f;
  }
  C.prototype = Object.create(o.prototype), C.prototype.fn = s, a.prototype.uint32 = function(d) {
    return this.len += (this.tail = this.tail.next = new C(
      (d = d >>> 0) < 128 ? 1 : d < 16384 ? 2 : d < 2097152 ? 3 : d < 268435456 ? 4 : 5,
      d
    )).len, this;
  }, a.prototype.int32 = function(d) {
    return d < 0 ? this._push(E, 10, t.fromNumber(d)) : this.uint32(d);
  }, a.prototype.sint32 = function(d) {
    return this.uint32((d << 1 ^ d >> 31) >>> 0);
  };
  function E(d, f, h) {
    for (; d.hi; )
      f[h++] = d.lo & 127 | 128, d.lo = (d.lo >>> 7 | d.hi << 25) >>> 0, d.hi >>>= 7;
    for (; d.lo > 127; )
      f[h++] = d.lo & 127 | 128, d.lo = d.lo >>> 7;
    f[h++] = d.lo;
  }
  a.prototype.uint64 = function(d) {
    var f = t.from(d);
    return this._push(E, f.length(), f);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(d) {
    var f = t.from(d).zzEncode();
    return this._push(E, f.length(), f);
  }, a.prototype.bool = function(d) {
    return this._push(c, 1, d ? 1 : 0);
  };
  function x(d, f, h) {
    f[h] = d & 255, f[h + 1] = d >>> 8 & 255, f[h + 2] = d >>> 16 & 255, f[h + 3] = d >>> 24;
  }
  a.prototype.fixed32 = function(d) {
    return this._push(x, 4, d >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(d) {
    var f = t.from(d);
    return this._push(x, 4, f.lo)._push(x, 4, f.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(d) {
    return this._push(i.float.writeFloatLE, 4, d);
  }, a.prototype.double = function(d) {
    return this._push(i.float.writeDoubleLE, 8, d);
  };
  var Q = i.Array.prototype.set ? function(d, f, h) {
    f.set(d, h);
  } : function(d, f, h) {
    for (var p = 0; p < d.length; ++p)
      f[h + p] = d[p];
  };
  return a.prototype.bytes = function(d) {
    var f = d.length >>> 0;
    if (!f)
      return this._push(c, 1, 0);
    if (i.isString(d)) {
      var h = a.alloc(f = e.length(d));
      e.decode(d, h, 0), d = h;
    }
    return this.uint32(f)._push(Q, f, d);
  }, a.prototype.string = function(d) {
    var f = A.length(d);
    return f ? this.uint32(f)._push(A.write, f, d) : this._push(c, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var d = this.head, f = this.tail, h = this.len;
    return this.reset().uint32(h), h && (this.tail.next = d.next, this.tail = f, this.len += h), this;
  }, a.prototype.finish = function() {
    for (var d = this.head.next, f = this.constructor.alloc(this.len), h = 0; d; )
      d.fn(d.val, f, h), h += d.len, d = d.next;
    return f;
  }, a._configure = function(d) {
    n = d, a.create = I(), n._configure();
  }, Qi;
}
var Ei, qa;
function WQ() {
  if (qa) return Ei;
  qa = 1, Ei = t;
  var i = xs();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = rt();
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
var xi, Va;
function ds() {
  if (Va) return xi;
  Va = 1, xi = o;
  var i = rt(), n, t = i.LongBits, e = i.utf8;
  function A(s, C) {
    return RangeError("index out of range: " + s.pos + " + " + (C || 1) + " > " + s.len);
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
      return (o.create = function(C) {
        return i.Buffer.isBuffer(C) ? new n(C) : r(C);
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
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function I(s, C) {
    return (s[C - 4] | s[C - 3] << 8 | s[C - 2] << 16 | s[C - 1] << 24) >>> 0;
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
    var s = this.uint32(), C = this.pos, E = this.pos + s;
    if (E > this.len)
      throw A(this, s);
    if (this.pos += s, Array.isArray(this.buf))
      return this.buf.slice(C, E);
    if (C === E) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, C, E);
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
    var C = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[C](!1);
      },
      uint64: function() {
        return a.call(this)[C](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[C](!1);
      },
      fixed64: function() {
        return c.call(this)[C](!0);
      },
      sfixed64: function() {
        return c.call(this)[C](!1);
      }
    });
  }, xi;
}
var di, Za;
function MQ() {
  if (Za) return di;
  Za = 1, di = t;
  var i = ds();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = rt();
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
var za = {}, li, Xa;
function LQ() {
  if (Xa) return li;
  Xa = 1, li = n;
  var i = rt();
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
  }, li;
}
var $a;
function OQ() {
  return $a || ($a = 1, (function(i) {
    var n = i;
    n.Service = LQ();
  })(za)), za;
}
var Ag, eg;
function JQ() {
  return eg || (eg = 1, Ag = {}), Ag;
}
var tg;
function UQ() {
  return tg || (tg = 1, (function(i) {
    var n = i;
    n.build = "minimal", n.Writer = xs(), n.BufferWriter = WQ(), n.Reader = ds(), n.BufferReader = MQ(), n.util = rt(), n.rpc = OQ(), n.roots = JQ(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  })(va)), va;
}
var og, ng;
function YQ() {
  return ng || (ng = 1, og = UQ()), og;
}
var S = YQ();
const u = S.Reader, G = S.Writer, l = S.util, B = S.roots.default || (S.roots.default = {}), FA = B.dot = (() => {
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Content();
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
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.images && a.images.length || (a.images = []), a.images.push(B.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
          for (let g = 0; g < A.images.length; ++g)
            r.images[g] = B.dot.Image.toObject(A.images[g], o);
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Metadata();
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
              a.web = B.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = B.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = B.dot.v4.IosMetadata.decode(A, A.uint32());
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
      t.prototype.supportedAbis = l.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.dynamicCameraFrameProperties = l.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
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
            ).string(r[g]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[g]], o.uint32(
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
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.AndroidMetadata(), I, c;
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
              a.camera = B.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === l.emptyObject && (a.dynamicCameraFrameProperties = {});
              let C = A.uint32() + A.pos;
              for (I = "", c = null; A.pos < C; ) {
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    I = A.string();
                    break;
                  case 2:
                    c = B.dot.Int32List.decode(A, A.uint32());
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
              a.croppedYuv420Image = B.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.decode(A, A.uint32());
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || l.isString(A.digests[o])))
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
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
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
        return null;
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
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], o.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
          for (let r = Object.keys(A.dynamicCameraFrameProperties), g = 0; g < r.length; ++g) {
            if (typeof A.dynamicCameraFrameProperties[r[g]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[g]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[g]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, o.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.digests[a] = o.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let g;
        if (A.dynamicCameraFrameProperties && (g = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let a = 0; a < g.length; ++a)
            r.dynamicCameraFrameProperties[g[a]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[g[a]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.AndroidCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Yuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = l.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = l.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = l.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Yuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.v4.Yuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
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
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = l.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.isoValues = l.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
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
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.IosMetadata(), I, c;
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
              let C = A.uint32() + A.pos;
              for (I = "", c = !1; A.pos < C; ) {
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
              a.camera = B.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (s & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            case 8: {
              a.croppedYuv420Image = B.dot.v4.IosYuv420Image.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.decode(A, A.uint32());
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || l.isString(A.digests[o])))
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
            if (!l.isInteger(A.isoValues[o]))
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
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let o = new B.dot.v4.IosMetadata();
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
            typeof A.digests[r] == "string" ? l.base64.decode(A.digests[r], o.digests[r] = l.newBuffer(l.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
            r.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosCamera();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.resolution = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uvPlane = l.newBuffer([]), t.create = function(e) {
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosYuv420Image();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.size = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || l.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosYuv420Image)
          return e;
        let A = new B.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? l.base64.decode(e.uvPlane, A.uvPlane = l.newBuffer(l.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = l.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = l.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? l.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosYuv420ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.v4.IosYuv420Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = B.dot.PointInt.decode(e, e.uint32());
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.currentCameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(B.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(B.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(B.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.croppedImageWithPosition = B.dot.v4.ImageCrop.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.platformDetails = B.dot.v4.PlatformDetails.decode(A, A.uint32());
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
            if (!l.isString(A.hashedDetectedImages[o]))
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
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            r.availableCameraProperties[g] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[g], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            r.hashedDetectedImages[g] = A.hashedDetectedImages[g];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g)
            r.detectionRecord[g] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[g], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            r.hashedDetectedImagesWithTimestamp[g] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MediaTrackSettings();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.ImageBitmap();
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
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DetectedObject();
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
              g.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = B.dot.v4.Point.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Point();
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.ImageCrop();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.topLeftCorner = B.dot.v4.Point.decode(e, e.uint32());
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
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = l.emptyArray;
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
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof u || (A = u.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.PlatformDetails();
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
              a.browserVersions && a.browserVersions.length || (a.browserVersions = []), a.browserVersions.push(B.dot.v4.BrowserVersion.decode(A, A.uint32()));
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
            let r = B.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
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
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = B.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.BrowserVersion();
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: l.oneOfSetter(e)
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Blob();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.documentContent = B.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = B.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = B.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = B.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = B.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.multiRangeLivenessContent = B.dot.v4.MultiRangeLivenessContent.decode(A, A.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? g.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32()) : e.skipType(a & 7);
        }
        return g;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Lds1ElementaryFile();
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
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, o.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DataAuthenticationStatus();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.ChipAuthenticationStatus();
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 3: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
          for (let g = 0; g < A.segments.length; ++g)
            r.segments[g] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.EyeGazeLivenessSegment();
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
              g.image = B.dot.Image.decode(e, e.uint32());
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.stepResults && a.stepResults.length || (a.stepResults = []), a.stepResults.push(B.dot.v4.MultiRangeLivenessStepResult.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.multiRangeLivenessMetadata = B.dot.v4.MultiRangeLivenessMetadata.decode(A, A.uint32());
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
          for (let g = 0; g < A.stepResults.length; ++g)
            r.stepResults[g] = B.dot.v4.MultiRangeLivenessStepResult.toObject(A.stepResults[g], o);
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.MultiRangeLivenessStepResult();
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
              g.image = B.dot.ImageWithTimestamp.decode(e, e.uint32());
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
      return t.prototype.detections = l.emptyArray, t.create = function(e) {
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          a >>> 3 === 1 ? (g.detections && g.detections.length || (g.detections = []), g.detections.push(B.dot.v4.FaceDetection.decode(e, e.uint32()))) : e.skipType(a & 7);
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
      return t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.FaceDetection();
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
              g.position = B.dot.v4.FaceDetectionPosition.decode(e, e.uint32());
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
          let A = B.dot.v4.FaceDetectionPosition.verify(e.position);
          if (A)
            return "position." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceDetection)
          return e;
        let A = new B.dot.v4.FaceDetection();
        if (e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = B.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = B.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.FaceDetectionPosition();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.center = B.dot.PointDouble.decode(e, e.uint32());
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.neutralExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.smileExpressionFaceImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
        get: l.oneOfGetter(e = ["video"]),
        set: l.oneOfSetter(e)
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
        let g = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.video = B.dot.Video.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Image();
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
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
    return n.prototype.image = null, n.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
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
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
            r.image = B.dot.Image.decode(t, t.uint32());
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
        let e = B.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.ImageWithTimestamp)
        return t;
      let e = new B.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = B.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = B.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Int32List();
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.DigestWithTimestamp();
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
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
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
      let r = A === void 0 ? e.len : e.pos + A, g = new B.dot.Video();
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
            g.containerMp4 = B.dot.VideoContainer.decode(e, e.uint32());
            break;
          }
          case 3: {
            g.streamH264 = B.dot.VideoStream.decode(e, e.uint32());
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
      if (e.bytes != null && (typeof e.bytes == "string" ? l.base64.decode(e.bytes, A.bytes = l.newBuffer(l.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? l.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = B.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = B.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoContainer();
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
      if (t instanceof B.dot.VideoContainer)
        return t;
      let e = new B.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoStream();
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
      if (t instanceof B.dot.VideoStream)
        return t;
      let e = new B.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
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
})(), ig = /* @__PURE__ */ new Map([[ZA.ZERO, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO], [ZA.ONE, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE], [ZA.TWO, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO], [ZA.THREE, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE], [ZA.FOUR, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR], [ZA.FIVE, FA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE]]), ls = {};
ls.min = 0.4;
const us = {};
us.min = 0.25;
const nr = {};
nr.min = 0.2, nr.max = 0.85;
const fs = {};
fs.min = 0.05;
const hs = {};
hs.max = 30;
const ps = {};
ps.min = 0;
const ms = {};
ms.confidence = ps;
const ys = {};
ys.min = 0;
const Ds = {};
Ds.confidence = ys;
const Ye = {};
Ye.confidence = ls, Ye.sharpness = us, Ye.brightness = nr, Ye.edgeDistanceToImageShorterSideRatio = fs, Ye.devicePitchAngle = hs, Ye.leftEye = ms, Ye.rightEye = Ds;
const ws = {};
ws.min = 0.4;
const bs = {};
bs.min = 0.25;
const ir = {};
ir.min = 0.2, ir.max = 0.85;
const ks = {};
ks.min = 0.05;
const Ss = {};
Ss.max = 30;
const Gs = {};
Gs.min = 0;
const Ns = {};
Ns.confidence = Gs;
const Rs = {};
Rs.min = 0;
const Fs = {};
Fs.confidence = Rs;
const Te = {};
Te.confidence = ws, Te.sharpness = bs, Te.brightness = ir, Te.edgeDistanceToImageShorterSideRatio = ks, Te.devicePitchAngle = Ss, Te.leftEye = Ns, Te.rightEye = Fs;
const rr = {};
rr.MOBILE = Ye, rr.DESKTOP = Te;
const TQ = rr, vs = {};
vs.min = 0.4;
const Ws = {};
Ws.min = 0;
const Ms = {};
Ms.confidence = Ws;
const Ls = {};
Ls.min = 0;
const Os = {};
Os.confidence = Ls;
const Lo = {};
Lo.confidence = vs, Lo.leftEye = Ms, Lo.rightEye = Os;
const Js = {};
Js.min = 0.4;
const Us = {};
Us.min = 0;
const Ys = {};
Ys.confidence = Us;
const Ts = {};
Ts.min = 0;
const Ps = {};
Ps.confidence = Ts;
const Oo = {};
Oo.confidence = Js, Oo.leftEye = Ys, Oo.rightEye = Ps;
const ar = {};
ar.MOBILE = Lo, ar.DESKTOP = Oo;
const PQ = ar, rg = 10560 + 2 * -4280, Jo = {};
Jo.timeout = 4e3, Jo.threshold = 0.7, Jo.instructions = [SA.FACE_TOO_CLOSE, SA.FACE_TOO_FAR];
const ui = Jo, _s = "SAM v1.50.5 for idcards";
class Hs extends wQ {
  detector;
  allowedDetectionTransitions;
  detectionFactory;
  phaseThresholds;
  passiveLivenessPhase;
  livenessChallengePhase;
  dispatcher;
  constructor(n, t, e, A, o, r, g, a, I, c, s) {
    super(n, _s, t, r, g, I, c, s), this.detector = e, this.detectionFactory = A, this.phaseThresholds = o, [this.passiveLivenessPhase, ...this.livenessChallengePhase] = a, this.dispatcher = r, this.allowedDetectionTransitions = this.buildAllowedTransitions(a);
  }
  getDispatcher() {
    return this.dispatcher;
  }
  buildAllowedTransitions(n) {
    if (n.length === -6830 + 2389 * -1 + -7 * -1317)
      return { [Y.PASSIVE_LIVENESS]: [] };
    const t = { [Y.PASSIVE_LIVENESS]: [Y.LIVENESS_CHALLENGE + "_0"] }, e = t;
    return this.livenessChallengePhase.forEach((A, o) => {
      const r = Y.LIVENESS_CHALLENGE + "_" + o;
      if (o < this.livenessChallengePhase.length - (9040 + -2 * -424 + -9887)) {
        const g = Y.LIVENESS_CHALLENGE + "_" + (o + 1);
        e[r] = [g];
      }
    }), e;
  }
  async init() {
    await super.init();
    const n = {};
    n[Y.PASSIVE_LIVENESS] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: rg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: this.passiveLivenessPhase }, type: Y.PASSIVE_LIVENESS }), this.livenessChallengePhase.forEach((t, e) => {
      const A = e + 1 < this.livenessChallengePhase.length ? e + 1 : void 0, o = Y.LIVENESS_CHALLENGE + "_" + e;
      n[o] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: rg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: t, currentIndex: e, nextIndex: A }, type: Y.LIVENESS_CHALLENGE });
    }), this.setDetections(n), this.setCurrentDetection(this.detections[Y.PASSIVE_LIVENESS]), this.getDispatcher().dispatchChallengeItemChangedEvent(this.passiveLivenessPhase), this.runDetectionLoop();
  }
  getLivenessChallengePhase() {
    return this.livenessChallengePhase;
  }
  getPassiveLivenessPhase() {
    return this.passiveLivenessPhase;
  }
}
class _Q {
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
    if (!this.assetsDirectoryPath) throw new y("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new y("CameraService is required");
    if (!this.protobuf) throw new y("Protobuf is required");
    if (!this.dispatcher) throw new y("Dispatcher is required");
    if (!this.detector) throw new y("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class HQ extends _Q {
  detectionFactory;
  phaseThresholds;
  challengeSequence;
  setDetectionFactory(n) {
    return this.detectionFactory = n, this;
  }
  setPhaseThresholds(n) {
    return this.phaseThresholds = n, this;
  }
  setChallengeSequence(n) {
    return this.challengeSequence = n, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.detectionFactory) throw new y("DetectionFactory is required");
    if (!this.phaseThresholds) throw new y("PhaseThresholds is required");
    if (!this.challengeSequence) throw new y("ChallengeSequence is required");
  }
  reset() {
    return super.reset(), this.detectionFactory = void 0, this.phaseThresholds = void 0, this.challengeSequence = void 0, this;
  }
  build() {
    return this.validateDependencies(), new Hs(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.challengeSequence, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const KQ = "/dot-assets/multi-range/dot-BGu0OvGV.js", ag = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
};
class at {
  static _instance;
  lastDetails;
  delayedTime;
  constructor() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  static getInstance() {
    return !this._instance && (this._instance = new at()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 2803 + -2803 * 1;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && ag(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    ag(n, t);
  }
}
const jQ = () => "prod".toLowerCase() === "dev";
class qQ extends at {
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
  dispatchInstructionChangedEvent(n, t = dc) {
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
    if (!jQ() || !n) return;
    const t = {};
    t.candidateSelectionImages = n, this.dispatchCustomEventOnChange(this.events.DEV, t);
  }
}
class VQ extends qQ {
  dispatchChallengeItemChangedEvent(n) {
    var t = {};
    t.currentMultiRangeLivenessChallengeItem = n, this.dispatchCustomEvent(this.events.CHALLENGE_VALUE_CHANGED, t);
  }
}
const ZQ = 2e3;
class gg {
  duration;
  constructor(n) {
    this.duration = n ?? ZQ;
  }
  candidateSelectionTime = -3503 + 3503 * 1;
  candidateSelectionImages = [];
  isInCandidateSelection() {
    return this.candidateSelectionTime > 1019 * 1 + -3064 * -1 + -4083;
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
    this.candidateSelectionTime = 1123 * 1 + 1 * 6709 + -7832, this.candidateSelectionImages = [];
  }
}
function yn(i) {
  const { height: n, width: t } = fc(i), e = (i.width - t) / (5610 + -514 * 3 + -2 * 2033), A = (i.height - n) / 2, o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function Ks(i, n, t) {
  const { height: e, width: A } = t, o = vn(i.width, i.height), r = A - o * n * (985 + 1 * -983), g = e - o * n * 2, a = (i.width - r) / 2, I = (i.height - g) / 2, c = {};
  return c.shiftX = a, c.shiftY = I, c.width = r, c.height = g, c;
}
function Ct(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const js = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = yc(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const I = {};
  return I.top = o, I.right = r, I.bottom = g, I.left = a, Xg(I);
}, qs = (i, n, t = Rc) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), Vs = async (i) => qs(i, 554 * -11 + -1192 + 7376), zQ = async (i) => qs(i, 1935 + -1 * 1835, "image/png"), Zs = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -7971 * 1 + 831 * 3 + 5478, 8993 + 1 * -8993, t.width, t.height), t;
}, zs = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(4098 * -2 + -1 * 9383 + 17579, 2680 + 536 * -5, i.width, i.height);
  return t;
};
async function XQ(i, n) {
  const t = Zs(i, n);
  return zQ(t);
}
const Xs = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, fi = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, Xs(i, a, t);
}, zt = (i, n, t, e = -1 * 9602 + -8925 + 18527) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, 7, 5465 + 563 * 8 + -9962), A.beginPath());
};
function $Q(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, Xs(i, o, "rgba(255, 0, 0, 0.3)", !0), zt(i, e, "lime");
}
function AE(i, n, t) {
  const e = js(n, t);
  Object.values(e).map((A) => zt(i, A, "orange"));
}
class $s extends y {
  cause;
  constructor(n) {
    super(n.message), this.name = "ProxyError", this.cause = n, this.logError(n);
  }
  logError(n) {
  }
}
class AI extends Array {
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
    this.length === this.#A && this.splice(-6581 * 1 + -8741 + 47 * 326, n.length), this.push(...n);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
  }
}
function Dn() {
  const i = ["WR/dV8k6Eh3dMdJcHJa", "urNcQxVdI8kWe2dcM8kOW4RcJW", "EWBcTmopp1NdMGe", "W4i5tW", "jmohFrfux0mfWPi", "WO/cGKvsl8kFW6iG", "mdqM", "v3ddRf0/W7W+", "fSohW5z2iuJdNSkzsb94bSkI", "W6OOW5jHaSkXF2exdMS", "W6NdMGBcUSo6WPRcQCo9lCo1W64aWOq", "WQxdULxcKHW", "WQOErIa", "W6RdKGtcUSoXWPJcPCoSo8owW4CuWQW", "WRFcSCoKW5yY", "W4RcNmoPWOOIW4RdUH41W6b2FW", "ESkDWR/dR8kkcgmIWQtcGIah", "W5OaW7hdVmk2", "lmoBs2WxW4quW49BACouDq", "oCkBnNvjEsHPvf7cSNu", "t8olW5RcUmom", "WQHwW78NFwFdHs0rvmoRW4i", "WP5Vc8kjn8ojW7bKW4Omxg0K", "W7SxWR8", "jSogDvi0jcW+WQK9aCoQbG", "ECkrFmoeaa", "W68VW5DIbmo0h2SOhe/dO3u", "WRZdRSooefnBgG", "WQVdVfVcMq", "kSoFt2KCWOCTW4vFECox", "hrfZkCkX"];
  return Dn = function() {
    return i;
  }, Dn();
}
function wA(i, n) {
  i = i - (7053 * 1 + -1979 + -4945);
  const t = Dn();
  let e = t[i];
  if (wA.tXbcnU === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    wA.LToDCX = a, wA.gjhbaS = {}, wA.tXbcnU = !0;
  }
  const o = t[-17 * -479 + 5919 + -14062], r = i + o, g = wA.gjhbaS[r];
  return g ? e = g : (wA.Njtdyp === void 0 && (wA.Njtdyp = !0), e = wA.LToDCX(e, n), wA.gjhbaS[r] = e), e;
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return wA(g - 49, I);
  }
  const e = i();
  function A(g, a, I, c, s) {
    return wA(c - -999, g);
  }
  function o(g, a, I, c, s) {
    return wA(a - 67, g);
  }
  function r(g, a, I, c, s) {
    return wA(I - -100, g);
  }
  for (; ; )
    try {
      if (-parseInt(t(178, 165, "))fW", 187, 183)) / 1 + parseInt(A("3aUp", -869, -841, -856, -871)) / 2 + -parseInt(t(184, 198, "NtUP", 191, 168)) / 3 * (parseInt(A("^P7[", -855, -848, -858, -870)) / 4) + -parseInt(t(199, 201, "!W(9", 198, 185)) / 5 + parseInt(r("2BS0", 47, 59, 70, 55)) / 6 * (parseInt(r("3^OM", 52, 37, 51, 49)) / 7) + parseInt(o("^P7[", 205, 220, 213, 191)) / 8 + -parseInt(A("K8CS", -861, -862, -855, -839)) / 9 * (-parseInt(A("l)17", -884, -854, -869, -881)) / 10) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Dn, 212660);
async function eE(i) {
  function n(g, a, I, c, s) {
    return wA(g - -224, c);
  }
  function t(g, a, I, c, s) {
    return wA(c - -872, a);
  }
  function e(g, a, I, c, s) {
    return wA(s - 844, c);
  }
  const A = new Uint8Array(i);
  function o(g, a, I, c, s) {
    return wA(I - 695, g);
  }
  const r = await window[o("[gig", 850, 848) + "o"][o("N0ya", 848, 837) + "e"][t(-721, "&Ah3", -728, -733) + "t"](t(-738, "ysej", -710, -724), A);
  return Array[e(985, 974, 969, "]QLE", 984)](new Uint8Array(r))[e(972, 963, 982, "!W(9", 975)]((g) => g[n(-66, -53, -62, "YD@M") + n(-90, -95, -89, "iyOz")](-1238 + 2434 * 4 + 1 * -8482)[e(982, 986, 976, "UjPD", 989) + n(-73, -75, -82, "gNn[")](1975 + 11 * -870 + 7597, "0"))[e(996, 1005, 987, "&Ah3", 1e3)]("");
}
class tE {
  detectionRecord;
  imagesWithTimestampForDuplicateDetection;
  validationService;
  constructor(n) {
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new AI(Sc), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / Fc, A = e / 2, o = n.length / (1 * -6640 + -4 * 698 + 9434), r = n.slice(o - A, o + A), g = await eE(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: zs(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  detect(n, t, e) {
    try {
      return this.detector.detect(n, t, e);
    } catch (A) {
      throw A instanceof Error && A.message.includes("Proxy has been released and is not useable") ? new $s(A) : y.fromError(A);
    }
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = Xg(n), r = {};
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
class sg extends tE {
  className = "FaceImageProcessor";
  detector;
  constructor(n, t) {
    super(t), this.detector = n;
  }
  optimizeImageBeforeDetection(n) {
    const t = yn(n), e = Zs(n, t);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: n, timestamp: t }) {
    const e = this.optimizeImageBeforeDetection(n), A = {};
    A.height = n.height, A.width = n.width;
    let o = await this.detect(e.data, e.resolution, A);
    o = this.transformDetectionCoordinatesRelativeToFullFrameImage(o, yn(n));
    const r = {};
    return r.detectedObject = o, r.image = n, r.imageData = e.data, r.timestamp = t, this.processDetectedObject(r);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(n, t) {
    return { ...n, leftEye: { ...n.leftEye, center: Ct(n.leftEye.center, t) }, rightEye: { ...n.rightEye, center: Ct(n.rightEye.center, t) }, mouth: { ...n.mouth, center: Ct(n.mouth.center, t) }, topLeft: Ct(n.topLeft, t), bottomRight: Ct(n.bottomRight, t), faceCenter: Ct(n.faceCenter, t) };
  }
}
class oE {
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
class nE extends Array {
  #A = -677 * -10 + -9313 + 2543;
  #e = [];
  #t = !1;
  constructor(n) {
    super(), this.#A = n;
  }
  clearAfterTimeout() {
    if (this.#e.length === 2747 + -6698 * -1 + -9445) return;
    const n = Date.now(), t = this.#e.findLastIndex((e) => n - e > this.#A);
    t !== -1 && (this.#t = !0, this.splice(0, t + (-3 * -1022 + -1271 + -1794)), this.#e.splice(-7266 + -3007 * -2 + 1252, t + 1));
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
    this.splice(1 * -6457 + 2149 + 4308), this.#e.splice(-946 * 2 + -1325 * -4 + 284 * -12), this.#t = !1;
  }
}
const Uo = {};
Uo.minFaceSizeRatio = 0.13, Uo.maxFaceSizeRatio = 0.15, Uo.scale = 0.85;
const Yo = {};
Yo.minFaceSizeRatio = 0.152, Yo.maxFaceSizeRatio = 0.172, Yo.scale = 1;
const To = {};
To.minFaceSizeRatio = 0.18, To.maxFaceSizeRatio = 0.205, To.scale = 1.18;
const Po = {};
Po.minFaceSizeRatio = 0.215, Po.maxFaceSizeRatio = 0.24, Po.scale = 1.41;
const _o = {};
_o.minFaceSizeRatio = 0.245, _o.maxFaceSizeRatio = 0.275, _o.scale = 1.61;
const Ho = {};
Ho.minFaceSizeRatio = 0.28, Ho.maxFaceSizeRatio = 0.34, Ho.scale = 1.84;
const Ig = /* @__PURE__ */ new Map([[ZA.ZERO, Uo], [ZA.ONE, Yo], [ZA.TWO, To], [ZA.THREE, Po], [ZA.FOUR, _o], [ZA.FIVE, Ho]]);
class eI {
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
class iE extends eI {
  nextIndex;
  controller;
  constructor(n, t) {
    super(n), this.nextIndex = t, this.controller = n;
  }
  async onCapture(n) {
    super.onCapture(n);
    const t = this.controller.getLivenessChallengePhase();
    if (this.nextIndex !== void 0) {
      this.controller.transitionToDetection(Y.LIVENESS_CHALLENGE + "_" + this.nextIndex), t?.[this.nextIndex] !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(t[this.nextIndex]), this.controller.runDetectionLoop();
      return;
    }
    this.controller.getTransactionCounting()?.trackTransaction();
    const e = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), video: this.controller.cameraService.videoRecorder?.getRecording() });
    this.dispatchOnCompleteEvent(e), this.controller.getAnalytics()?.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  onDetection(n) {
    super.onDetection(n);
  }
  async dispatchOnCompleteEvent(n) {
    const t = this.controller.getOnCaptureData(), e = t.get(Y.PASSIVE_LIVENESS);
    if (!e) throw new y("On capture data was not found");
    const { detectedObject: A, resultImage: o } = e, r = {};
    r.height = o.height, r.width = o.width;
    const g = r, a = await Vs(o), I = {};
    I.detection = A, I.imageResolution = g;
    const c = {};
    c.data = I, c.image = a;
    const s = {};
    s.imageWithMetadata = c;
    const C = s;
    this.controller.getDispatcher().dispatchOnCompleteEvent(C, n);
  }
}
class rE {
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
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = g, this.fpsOfAllImages = new AI(-5473 + 1 * 5503), this.isRunning = !0;
  }
  async safeIterate() {
    try {
      await this.iterate();
    } catch (n) {
      if (!(n instanceof $s)) throw n;
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
    const e = { ...n, avgFps: ut(Zn(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new y("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: ut(Zn(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = zs(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await XQ(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const I = a, c = {};
    return c.croppedImage = g, c.topLeftCorner = I, c;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = ut((-4586 * -1 + -293 * 8 + -1242) / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), a = this.getInstructionCode(g[-747 * -11 + -9019 + 802], t), I = this.collectAndEscalate(a), c = {};
    return c.detection = t.detection, c.instructionCode = a, c.invalidValidators = g, c.isInCandidateSelection = !1, c.isEscalated = I, { processedImage: c, detectionTime: e, fps: A, avgFps: ut(Zn(this.fpsOfAllImages)), resolution: r };
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
    await Ni(Math.max(na.max - n, na.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class aE extends rE {
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
      throw t instanceof y ? t : y.fromError(t);
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
    else throw new y("Something went wrong during capturing an image");
  }
  getInstructionCode(n, t) {
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage?.isValid && t?.isValid ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t?.isValid ? this.lastImage.instructionCode : n ?? this.fallbackInstruction;
  }
  isNewImageBetter(n, t) {
    return t.sharpness > n.sharpness;
  }
}
class gE {
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
    if (!this.name) throw new y("Name is required");
    if (!this.cameraService) throw new y("CameraService is required");
    if (!this.imageProcessor) throw new y("ImageProcessor is required");
    if (!this.callbacks) throw new y("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new y("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new y("FallbackInstruction is required");
  }
}
class tI extends gE {
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
    return this.validateDependencies(), new aE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class sE extends tI {
}
class oI {
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
class nI {
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
class pe {
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
const IE = "isNotSmall";
class iI extends pe {
  #A;
  constructor(n, t) {
    super(IE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const cE = "isPresent";
class rI extends pe {
  #A;
  constructor(n, t) {
    super(cE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const CE = "isLeftEyePresent";
class aI extends pe {
  #A;
  constructor(n, t) {
    super(CE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const BE = "isNotLarge";
class gI extends pe {
  #A;
  constructor(n, t) {
    super(BE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const QE = "isRightEyePresent";
class sI extends pe {
  #A;
  constructor(n, t) {
    super(QE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
class EE extends nI {
  constructor(n) {
    super("LivenessChallengeValidationService", n);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new oI([new rI(t.confidence.min, n.confidence), new aI(t.leftEye.confidence.min, n.leftEye.confidence), new sI(t.rightEye.confidence.min, n.rightEye.confidence), new iI(t.size.min, n.faceSize), new gI(t.size.max, n.faceSize)]);
    return e.validate(), e;
  }
}
class xE extends eI {
  controller;
  constructor(n) {
    super(n), this.controller = n;
  }
  onCapture(n) {
    super.onCapture(n), this.controller.transitionToDetection(Y.LIVENESS_CHALLENGE + "_0");
    const t = this.controller.getLivenessChallengePhase();
    t !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(t[0]), this.controller.runDetectionLoop();
  }
  onDetection(n) {
    super.onDetection(n);
  }
}
class dE extends tI {
}
const lE = "isNotDim";
class uE extends pe {
  #A;
  constructor(n, t) {
    super(lE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const fE = "isNotBright";
class hE extends pe {
  #A;
  constructor(n, t) {
    super(fE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueBelowThreshold(this.#A);
  }
}
const pE = "isSharp";
class mE extends pe {
  #A;
  constructor(n, t) {
    super(pE, n), this.#A = t;
  }
  evaluate() {
    return this.isValueAboveThreshold(this.#A);
  }
}
const yE = "isNotPitched";
class Rr extends pe {
  #A;
  constructor(n, t) {
    super(yE, Rr.calculatePitchAngleAccelerationThreshold(n)), this.#A = t;
  }
  static calculatePitchAngleAccelerationThreshold(n) {
    return bc * Math.sin(n * (Math.PI / (-1229 * 1 + 3217 * 3 + -8242)));
  }
  evaluate() {
    const { z: n } = this.#A || {};
    return n ? this.isValueBelowThreshold(Math.abs(n)) : !0;
  }
}
const DE = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, wE = (i, n) => Object.values(i).every((t) => DE(t, n)), bE = "isNotOutOfBounds";
class kE extends pe {
  #A;
  #e;
  constructor(n, t, e) {
    super(bE, n), this.#A = t, this.#e = e;
  }
  evaluate() {
    const n = Ks(this.#e, this.threshold, yn(this.#e)), t = js(this.#A, this.#e);
    return wE(t, n);
  }
}
class SE extends nI {
  acceleration;
  constructor(n) {
    super("PassiveLivenessValidationService", n);
  }
  validateDetectedObject(n, t) {
    const e = this.getThresholds(), A = new oI([new rI(e.confidence.min, n.confidence), new aI(e.leftEye.confidence.min, n.leftEye.confidence), new sI(e.rightEye.confidence.min, n.rightEye.confidence), new iI(e.size.min, n.faceSize), new gI(e.size.max, n.faceSize), new mE(e.sharpness.min, n.sharpness), new uE(e.brightness.min, n.brightness), new hE(e.brightness.max, n.brightness), new kE(e.edgeDistanceToImageShorterSideRatio.min, n, t), new Rr(e.devicePitchAngle.max, this.acceleration)]);
    return A.validate(), A;
  }
}
class GE {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, currentIndex: r, detector: g, multiRangeLivenessChallengeItem: a, nextIndex: I, phaseThresholds: c } = n;
    switch (t) {
      case Y.PASSIVE_LIVENESS:
        return this.createPassiveLivenessDetection(o, e, g, A, c, a);
      case Y.LIVENESS_CHALLENGE:
        return this.createLivenessChallengeDetection(o, e, g, A, c, a, r, I);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createPassiveLivenessDetection(n, t, e, A, o, r) {
    const g = new dE(), a = this.getThresholdsWithFaceSize(o[Y.PASSIVE_LIVENESS], r), I = new SE(a), c = new xE(n), s = new sg(e, I), C = new gg(A), E = this.createInstructionEscalation(n);
    return g.setName(Y.PASSIVE_LIVENESS), g.setCameraService(t), g.setImageProcessor(s), g.setCallbacks(c), g.setCandidateSelection(C), g.setCheckToInstructionCodeMap(Ur), g.setInstructionCodeMap(SA), g.setFallbackInstruction(SA.FACE_NOT_PRESENT), g.setInstructionEscalation(E), g.build();
  }
  createLivenessChallengeDetection(n, t, e, A, o, r, g, a) {
    const I = new sE(), c = this.getThresholdsWithFaceSize(o[Y.LIVENESS_CHALLENGE], r), s = new EE(c), C = new iE(n, a), E = new sg(e, s), x = new gg(A), Q = this.createInstructionEscalation(n);
    return I.setName(this.prepareIndexedPhaseName(Y.LIVENESS_CHALLENGE, g)), I.setCameraService(t), I.setImageProcessor(E), I.setCallbacks(C), I.setCandidateSelection(x), I.setCheckToInstructionCodeMap(Ur), I.setInstructionCodeMap(SA), I.setFallbackInstruction(SA.FACE_NOT_PRESENT), I.setInstructionEscalation(Q), I.build();
  }
  prepareIndexedPhaseName(n, t) {
    return t === void 0 ? n : n + "_" + t;
  }
  getThresholdsWithFaceSize(n, t) {
    if (t === void 0 || !Ig.has(t)) throw new y("Invalid challenge");
    const e = Ig.get(t);
    if (!e) throw new y("Invalid challenge");
    const A = {};
    A.min = e.minFaceSizeRatio, A.max = e.maxFaceSizeRatio;
    const o = { ...n };
    return o.size = A, o;
  }
  createInstructionEscalation(n) {
    return new oE(new nE(ui.timeout), n.getDispatcher(), { threshold: ui.threshold, instructions: ui.instructions }, n.getAnalytics());
  }
}
function q(i, n) {
  i = i - (-13 * 259 + 550 + 3168);
  const t = wn();
  let e = t[i];
  if (q.PsKZnb === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    q.jbIYeU = a, q.wDWTBA = {}, q.PsKZnb = !0;
  }
  const o = t[-2606 * -3 + -4339 + -3479 * 1], r = i + o, g = q.wDWTBA[r];
  return g ? e = g : (q.HoHCRP === void 0 && (q.HoHCRP = !0), e = q.jbIYeU(e, n), q.wDWTBA[r] = e), e;
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return q(I - -353, s);
  }
  const e = i();
  function A(a, I, c, s, C) {
    return q(I - 232, a);
  }
  function o(a, I, c, s, C) {
    return q(C - -544, a);
  }
  function r(a, I, c, s, C) {
    return q(c - -25, s);
  }
  function g(a, I, c, s, C) {
    return q(s - 385, I);
  }
  for (; ; )
    try {
      if (-parseInt(o("nX6s", -177, -238, -212, -134)) / 1 * (parseInt(o("bd&G", 112, 134, 47, 33)) / 2) + parseInt(g(812, "hMl7", 911, 869, 857)) / 3 * (-parseInt(o("aFhe", -96, -65, -231, -163)) / 4) + -parseInt(t(97, 202, 201, "Vn#!", 183)) / 5 * (-parseInt(A("p3Ya", 637, 626, 581, 717)) / 6) + -parseInt(g(810, "HTlD", 813, 737, 816)) / 7 * (-parseInt(A("QZIk", 736, 754, 667, 638)) / 8) + -parseInt(t(6, 56, 46, "bd&G", 19)) / 9 * (-parseInt(A("hMl7", 658, 740, 765, 654)) / 10) + -parseInt(A("N8cp", 654, 543, 558, 548)) / 11 * (-parseInt(r(277, 460, 386, "08X7", 449)) / 12) + parseInt(A("O7UI", 602, 715, 506, 656)) / 13 * (-parseInt(A("LIwR", 696, 665, 722, 669)) / 14) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(wn, 1945978 + 137511 * 9 + 1 * -2209783);
function NE() {
  function i(c, s, C, E, x) {
    return q(c - 289, E);
  }
  function n(c, s, C, E, x) {
    return q(x - -770, s);
  }
  const t = i(687, 575, 683, "Tyw3") + i(669, 664, 750, "m2)A") + r(235, 182, "O7UI") + n(-237, "O7UI", -300, -207, -212) + I("p3Ya", -177, -277, -220) + i(870, 809, 838, "nTol") + a("#Uu]", 1095) + n(-509, "kNrU", -337, -404, -419) + I(")X8^", -211, -328, -215) + I("XgeH", -318, -376, -335) + I("9dxG", -461, -442, -397) + a("[tMY", 1079) + i(723, 664, 685, "bd&G") + r(207, 93, "TamY") + n(-85, "[tMY", -188, -245, -199) + r(305, 420, "bd&G") + n(-328, "6VU@", -325, -462, -354) + a("8l]F", 1094) + i(707, 601, 746, "BgjQ") + a("6r*t", 1217) + r(81, 61, "oc)2") + i(761, 769, 708, "m2)A") + a("1GDW", 1199) + I("[tMY", -326, -392, -357) + I("XgeH", -339, -427, -382) + i(666, 773, 604, "LIwR") + r(111, 147, "bd&G") + n(-323, "N8cp", -110, -138, -229) + I("B(OS", -310, -274, -381) + n(-452, "hMl7", -379, -279, -380) + r(185, 144, "gfYZ") + a("kDn&", 1181) + n(-397, "N8cp", -326, -397, -407) + n(-332, "9dxG", -378, -336, -404) + i(755, 784, 678, "p3Ya") + I("HTlD", -369, -324, -410) + n(-392, "3pQh", -425, -287, -316) + I("08X7", -255, -354, -254) + n(-342, "nTol", -341, -351, -247) + n(-160, "[BTA", -132, -269, -222) + r(118, 218, "I[hj") + i(709, 620, 727, "0Dfc") + a("k7f%", 1190) + r(295, 269, "3pQh") + a("hMl7", 1058) + i(756, 758, 728, "I[hj") + a("aY11", 1225) + a("QZIk", 1255) + n(-187, "m2)A", -82, -185, -198) + i(833, 714, 933, "BgjQ") + n(-382, "TJGQ", -502, -376, -399) + a("aFhe", 1183) + a("Ybn%", 1161) + r(195, 95, "i64t") + r(192, 252, "I[hj") + I("aY11", -294, -365, -327) + I("HTlD", -225, -301, -344) + i(695, 713, 719, "LIwR") + n(-307, "BmDa", -371, -298, -289) + I("^LpK", -267, -102, -198) + a("BgjQ", 1239) + n(-385, "[tMY", -435, -393, -375) + a("fnye", 1019) + a("aY11", 1233) + n(-320, "aFhe", -269, -100, -209) + r(157, 227, "&JOL") + i(829, 851, 849, "nTol") + r(205, 106, "6VU@") + n(-467, "8l]F", -289, -430, -403) + i(782, 735, 845, "i64t") + i(722, 734, 613, "BmDa") + a("p3Ya", 1141) + n(-301, "6VU@", -430, -303, -385) + I("nTol", -318, -194, -232) + a("Tyw3", 1049) + i(789, 849, 755, "3Y[j") + n(-326, "^fUD", -330, -240, -301) + a("&JOL", 1056) + I("LIwR", -287, -344, -373) + r(246, 220, "nTol") + i(651, 551, 605, "k7f%") + i(824, 836, 928, "aFhe") + r(224, 198, "hAEl") + n(-288, "hMl7", -313, -360, -267) + r(177, 276, "gfYZ") + i(760, 673, 863, "[BTA") + n(-208, "hMl7", -154, -295, -234) + n(-363, "TamY", -359, -203, -278) + i(822, 772, 723, "O7UI") + a("&JOL", 1021) + n(-213, "6r*t", -161, -219, -272) + r(244, 274, "kNrU") + r(250, 139, "3Y[j") + i(745, 675, 761, "Vn#!") + r(212, 332, "nTol") + i(657, 772, 626, "m2)A") + I("08X7", -363, -246, -290) + I("nX6s", -311, -474, -361) + a("p3Ya", 1171) + a("aFhe", 1153) + n(-300, "^LpK", -200, -208, -192) + r(123, 22, "i64t") + r(159, 214, "k7f%") + a("B(OS", 1130) + a("k7f%", 1103) + a("KQYi", 1122) + n(-257, "hMl7", -278, -228, -284) + a("6VU@", 1038) + i(767, 717, 783, "B(OS") + n(-180, "3Y[j", -166, -321, -250) + i(675, 625, 780, "KQYi") + a("#Uu]", 1105) + a("0Dfc", 1107) + n(-348, "BmDa", -206, -245, -262) + i(865, 889, 775, ")X8^") + r(202, 146, "$qRa") + I("[BTA", -144, -198, -243) + n(-339, "BgjQ", -450, -379, -388) + I(")X8^", -379, -424, -308) + I("XgeH", -396, -356, -286) + a("XgeH", 1250) + a("i64t", 1113) + n(-469, "0Dfc", -298, -371, -368) + i(653, 634, 642, "KQYi") + n(-159, "6VU@", -100, -185, -191) + a("^fUD", 1072) + n(-238, "p3Ya", -238, -344, -258) + a("i64t", 1059) + a("&JOL", 1219) + r(190, 271, "0Dfc") + I("[tMY", -131, -216, -210) + a("p3Ya", 1212) + i(733, 701, 619, "TamY") + a("#Uu]", 1154) + I("TJGQ", -414, -461, -427) + n(-319, "TJGQ", -485, -361, -373) + n(-330, "6r*t", -274, -243, -291) + n(-304, "k7f%", -371, -426, -311) + r(79, 63, "6r*t") + a("HTlD", 1088) + I("8l]F", -187, -340, -239) + a("Vn#!", 1073) + r(147, 106, "m2)A") + n(-424, "&JOL", -386, -301, -323) + I("N8cp", -272, -317, -216) + i(799, 717, 690, "BgjQ") + r(314, 317, "Tyw3") + r(265, 260, "6r*t") + I("hAEl", -317, -258, -342) + n(-414, "LIwR", -256, -337, -339) + n(-471, "KQYi", -469, -411, -378) + i(764, 864, 849, "[BTA") + r(239, 232, "nTol") + i(663, 780, 544, "aFhe") + i(776, 736, 837, "gfYZ") + I("[tMY", -247, -256, -324) + i(668, 688, 734, "1GDW") + i(786, 748, 774, "QZIk") + a("BgjQ", 1172) + n(-295, "XgeH", -251, -238, -308) + i(642, 545, 712, "08X7") + a("[tMY", 1139) + n(-440, "kDn&", -485, -428, -415) + a("[BTA", 1191) + a("6VU@", 1048) + n(-330, ")X8^", -245, -430, -353) + a("BgjQ", 1147) + n(-175, "m2)A", -359, -254, -255) + n(-168, "BgjQ", -248, -372, -261) + a("N8cp", 1080) + i(654, 578, 735, "[BTA") + r(121, 30, "LIwR") + i(834, 929, 792, "KQYi") + r(252, 165, "3Y[j") + n(-289, "3Y[j", -222, -71, -179) + a("Vn#!", 1231) + i(838, 901, 839, "&JOL") + n(-282, "^fUD", -261, -88, -182) + I("XgeH", -238, -173, -228) + I("aY11", -403, -340, -336) + a("[BTA", 1170) + I("HTlD", -427, -467, -416) + I("kDn&", -402, -412, -413) + I("Ybn%", -244, -221, -205) + i(800, 905, 784, "HTlD") + n(-326, "i64t", -143, -238, -238) + i(740, 713, 852, "TamY") + r(286, 398, ")X8^") + n(-276, "Tyw3", -236, -339, -220) + i(716, 700, 779, "#Uu]") + n(-257, "BmDa", -252, -268, -357) + n(-272, "aY11", -94, -147, -208) + r(174, 191, "aFhe") + i(875, 825, 874, "KQYi") + a("aFhe", 1097) + a("nTol", 1247) + I("k7f%", -267, -332, -264) + n(-313, ")X8^", -314, -363, -349) + i(873, 889, 763, "JsS]") + a("p3Ya", 1221), e = window[n(-103, "1GDW", -116, -193, -211)](t), A = window[a("bd&G", 1065)](e), o = uB(A);
  function r(c, s, C, E, x) {
    return q(c - -278, C);
  }
  const g = {};
  function a(c, s, C, E, x) {
    return q(s - 665, c);
  }
  function I(c, s, C, E, x) {
    return q(E - -785, c);
  }
  return g[n(-314, "BmDa", -260, -128, -207)] = Zg, g[r(167, 239, "$qRa")] = Nc, window[i(650, 676, 714, "^fUD") + "o"][r(273, 366, "XgeH") + "e"][n(-101, "O7UI", -118, -118, -203) + r(82, 17, "nTol")](n(-335, "KQYi", -380, -247, -276), o, g, !0, [r(236, 188, "Tyw3") + "pt"]);
}
function wn() {
  const i = ["nSo1W6ldICkD", "dvhdOSkppq", "WPBdQLSnW74", "W6RdR8osW4/cJa", "nMxdMSoXpG", "F2VdOCkjza", "W5/dTmkqawG", "WOTUW6BcPvi", "WRhcSbzeWQy", "cvxdRmksEW", "cSonWPhcK8oW", "kSofW7NcVKW", "pZhdKMrE", "DhxdRHyZ", "W7vaFSkrW6W", "WOtdTmkQW7xcPq", "W5THjxX6", "pSk6oCkouq", "BaaltLq9WP4l", "W57cHfTEFW", "ee8PrhW", "WPWBs8o6aq", "asuNBmkV", "W7iPWR9HEq", "W7RdKsxdJZa", "qmkKWPBcK8kql8opW4icnCkw", "W6ddRMvcsa", "WO5qW7tcLwG", "WRZcKudcLq", "WR0os8ozCq", "WRnVc8ouW6O", "W7LgnsVdTG", "v3ZcLqOh", "eCkYp0xcQq", "zsRcJqxdOG", "WR/cKCoopbyyWQWihmkx", "WRNcS8kRW5/cPq", "bvqEDvu", "WQmWEX7cNXqZgKW", "DcNdGmo2Bq", "kSoOW7lcKCoU", "W71Kmgni", "WQJdTCkRW4BdVa", "W5zJd3zP", "W7fns2ec", "W6zOvxrI", "fmoWW4tdUSoY", "W6FcNgddR8ko", "Dcn1WOnc", "W6ldN8o3lGO", "WR3cH8ojrCkj", "W4xcShxdJd8", "bsylE8kG", "WRNcGXOJtg46pCoEWQK", "pIpcOWpdLq", "qmoOqdSV", "FbqLhCoQ", "W6hcPXlcUrK", "W6hcSrdcRKi", "qSo8lt4w", "D0/dS8kOwq", "WObcdCoKxwJcL8ow", "avFdQHJdQq", "W4xdQCkBn8koW4xdUSk2W57dRq", "nXxcLWxdRW", "WRLYF8ozrW", "W69qW4ZcIvi", "WOJcIv7cLmkU", "AelcOhDB", "ibG/z8kr", "zquKBfi", "W5HDWPhdQHS", "WQhdTh0GW4CxDNmebIi", "csNcKCoZb3NdQ8ohs8kynaC", "W6hcPW/dJta", "W6hdGSocWQmK", "B0/dImo0zq", "Ah3cTqGx", "WOrSbLfE", "WQRcThNcIqa", "gmkYnmopda", "cSofW4RdQ8kB", "chRcLSkkyW", "ANDvWQbL", "rHTXW4fH", "jCkIbvNdSW", "vflcSbGb", "W5BcKsxcNrW", "ANyCWQzN", "WOnpwCkEgWVcLmoDWP1yhZ0", "qCoFW4BcN8kv", "pSoNkLFdIq", "WQRcVN3cQCkk", "FwpcRLm", "WOn6W7pcLZC", "gJqDymkN", "WOGCW4NcTXK", "WP7dKSkwW4C", "fmokWPZcGsu", "kSoMW43cKCoL", "WOm5c8oUvq", "WRVcSKRcSSki", "W78PW6lcQWC", "W47dOSk8WR4j", "i8ovW6JcOYy", "WRJcHHjZWOy", "W5pdUSovhby", "WONdMCoTuSoB", "W6jFlwXN", "WRVcVcb1W6u", "b8kKW6xdNc8", "WO0AW5VcQHJcPHXskmk9", "WOpcLLNcU1O", "bCkzeCkLDG", "WOPleSouW7u", "W5tcRWBcQsC", "WQFcSsNdIqC", "W5znW5JdQvW", "jh3dSmobWRS", "d8kclxFdIG", "W73cR1hcQZS", "WQpcRK7cOwS", "W6xdSCo9W73dRW", "WOm8sL5KW40iWPVcSW", "W6nugXxcIa", "ia7cJt3dKa", "xhXhWP95", "haGLASo+", "WOGelcq7Bmklm8kWW5ZcMa", "WQfrySk+Cq", "W4JcLmkPqZS", "WQBcQ8o6v8kg", "qdbSWO5M", "AqhcMd4U", "xYntemkf", "hCk4ks4u", "W6xcRIhcHq", "W63dICopW6NcQq", "tCobbgCK", "W7pdJCoiWQap", "WQtcUfhcRIy", "tgpdGmkaDq", "W77cRJXAWR8", "gSkIaSo1ia", "W5RdSSo2jHa", "W7CfAu9O", "W6pdQG/dQ8ooWRO+W7uEamk/lW", "bIHGfCkf", "W47cJSo0rSko", "dSkbbmotFq", "gtyAzCoB", "W4zyk2vB", "W6yqW7RcJ03dUW0t", "W49AWRWzbW", "ySoMEe12WOxdUK3dH3Pvyq", "FItcHWr3", "WRNdKCoqgW0", "FujeaCoBWP1QWPCCsev5", "W5XKkLvk", "nCk2nmoFAq", "xWb3W4nH", "nSkigCk+wa", "WP7dK3RcHGe", "W6ddMSoBW7W", "W7FcIr8LWRe", "W58FWRhdGGS", "B3SUzuW", "cHitWRLE", "WOxcQ0JcUJa", "bfWtE0i", "WQ56W7FcOgq", "WORcHNvlWPK", "ixNdO8k2nW", "oq5Kkmkq", "rrH6WRTQ", "W6zwWROugW", "W5PBWOFdUa", "W65QW5FcPvi", "WRJdPcipW6m", "d8k6nH7dKa", "pd/dHJ1C", "qCkSW7NdQCoGamo+W5S", "W4jJW5KdaG", "WR3dL8oFW5tcHq", "W5Hol8oLEG", "WOKBW5dcRIhcJInEnSkC", "WRddR8orWRWKW7lcQmonWO8", "W5KppSk+kSoSdhJcNmodW7e", "W7PEW6WGbW", "WQBdH8k4W47cPG", "WRlcLHryWQS", "W4BdKCkgWP1U", "mSkopmoFBG", "xCosWPRcOb8", "W4DFjv5u", "WRVcImkfWQVdPCo8amkhsCofW4y", "W4JdQH8bW4m", "xmowWP3cVYa", "WPJcR8ojW7S3W7RcLXddNSkK", "W4rUt1a3", "W4pcGCkWWOnc", "W73dUmoedda", "BWrunbygWR0KwuFcJa", "W44tWRvndW", "WRtcJ3nUWRe", "h8kvaCoKgG", "W7igWQfxdW", "W5XwW74VbW", "j0qKCCkT", "WR7dQ8kHW6tcRG", "W6XfWOddTt4", "ctbrWOHz", "WRZcLeNcIdS", "tSoDiLKS", "CmkDmNuS", "WR08WR8Hc8kRnhCv", "W7uBWQvUbW", "W75xtIzH", "WP7cJdKsW6m", "WOFcP8kGW53cJW", "W6NdSrmKDa", "W597wSkn", "FmoDAmkiDNpdISoEw8kmEgG", "tbiuWP1a", "WP5pW5JcK0e", "W6WsW4/cLqS", "a8k7i3ZcRq", "W4BcGg97eW", "gXSNCCk6", "wSkLWP3dNqldR8oHDCk1WQK", "WOtdLmk7smo0", "WO4wgmosdq", "W6qdcCo9rq", "W7/cIvNcQa8", "WO8sW6hcMI0", "Emogdg4u", "xxxdH8k2tG", "W6/cKbLtWPC", "eCkdi3FdTG", "WQ4YsSodoW", "WRS8WRX2jSkZdeuibW", "mZRdMeXd"];
  return wn = function() {
    return i;
  }, wn();
}
async function RE(i) {
  const n = await NE(), t = {};
  function e(r, g, a, I, c) {
    return q(g - -516, I);
  }
  function A(r, g, a, I, c) {
    return q(g - 374, r);
  }
  function o(r, g, a, I, c) {
    return q(I - -340, c);
  }
  return t[o(4, 6, 167, 47, "^fUD")] = Zg, window[A("bd&G", 911) + "o"][e(-45, -80, -195, "KQYi") + "e"][e(-104, -56, -119, "[BTA") + "pt"](t, n, i);
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return LA(I - 380, C);
  }
  const e = i();
  function A(a, I, c, s, C) {
    return LA(c - -135, C);
  }
  function o(a, I, c, s, C) {
    return LA(I - 355, c);
  }
  function r(a, I, c, s, C) {
    return LA(C - 747, a);
  }
  function g(a, I, c, s, C) {
    return LA(I - -750, a);
  }
  for (; ; )
    try {
      if (-parseInt(r("]V]a", 1026, 1009, 1009, 1016)) / 1 + -parseInt(A(142, 137, 130, 139, "n2a&")) / 2 + parseInt(g("pJNF", -476, -471, -465, -483)) / 3 * (parseInt(o(627, 617, "]q1d", 607, 625)) / 4) + parseInt(A(109, 129, 118, 122, "(tdC")) / 5 * (parseInt(r("56U@", 1008, 993, 1014, 1003)) / 6) + -parseInt(A(136, 138, 133, 127, "QVC(")) / 7 * (-parseInt(t(644, 653, 657, 663, "Zgve")) / 8) + parseInt(o(638, 630, "LOyN", 623, 632)) / 9 * (-parseInt(r("Bd1o", 1025, 1007, 1008, 1017)) / 10) + parseInt(g("hg14", -478, -469, -489, -481)) / 11 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(bn, -1 * -548347 + 10 * -1701 + 2344 * -24);
function bn() {
  const i = ["W4xdItJcO8kNiCo4W7/cUHuNWPRdNa", "mCk2Afi/FCoiW7xcMZvWm8oO", "WRr2WQ85W6W6xWRcSG", "ACo/WRlcOenCW6fHnLtcTda", "W68Bxa", "WRdcImotdhf8WPiT", "hSkAWOa9xSoikSotWQ/cVHVcOW", "WR8Fdu1NA8km", "W7hcQ0vtW4FcPCo9", "vSk4W5BcT8olW5pcHINcJmk2WRCSWQy", "nSodWPpcJNCOW6RcUwG", "vSo7WO4CC8okDKbtvmolA1O", "WQZcG1TSWRX7WRDErmkxbWe", "WQ3dU0vDBa", "vSkJBmk9m8oJW6NdVSovh3ZdU24", "W4xdJdBcOSkSkmk3W7NcMqezWQK", "mSoaWPtdQsL/W7RcHuZcP1FdNG", "pLJdRSkIW5vgW4O", "eSo8FxyVhmkwv8opCCoRe8kh", "W60xhY49W6ldQG", "wSk/W5FcT8oiW5ddHYdcQ8khWPiN", "W4/dVfZcHmkzW6DUDq", "c0bpW7ZdPSoGW5xdSSo5W5VcN8kH", "gqBcKcpdLCkXhZ1KcfqA"];
  return bn = function() {
    return i;
  }, bn();
}
function LA(i, n) {
  i = i - (-5062 + 2718 * -3 + -26 * -518);
  const t = bn();
  let e = t[i];
  if (LA.TfPBNj === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    LA.ySQQII = a, LA.lbfwEM = {}, LA.TfPBNj = !0;
  }
  const o = t[-1 * -5302 + -9921 + 4619], r = i + o, g = LA.lbfwEM[r];
  return g ? e = g : (LA.szYghz === void 0 && (LA.szYghz = !0), e = LA.ySQQII(e, n), LA.lbfwEM[r] = e), e;
}
async function FE(i) {
  const { iv: n, key: t, message: e } = await hB(i), A = await RE(t), o = {};
  o[r(517, 510, "oV@S", 518)] = A, o.iv = n, o[r(536, 517, "EQw$", 527) + "ge"] = e;
  function r(g, a, I, c, s) {
    return LA(c - 260, I);
  }
  return o;
}
(function(i, n) {
  function t(g, a, I, c, s) {
    return xA(I - 406, c);
  }
  function e(g, a, I, c, s) {
    return xA(g - -63, a);
  }
  const A = i();
  function o(g, a, I, c, s) {
    return xA(s - -947, I);
  }
  function r(g, a, I, c, s) {
    return xA(I - 459, c);
  }
  for (; ; )
    try {
      if (-parseInt(t(802, 821, 851, "IflD", 887)) / 1 + parseInt(e(461, "f7aq", 521, 448, 499)) / 2 * (-parseInt(e(430, "VU2)", 373, 393, 425)) / 3) + parseInt(t(980, 963, 938, "de$J", 983)) / 4 * (-parseInt(r(854, 849, 887, "gmh2", 884)) / 5) + parseInt(r(889, 900, 945, "^DN1", 912)) / 6 + -parseInt(e(408, "n2w9", 424, 348, 355)) / 7 + -parseInt(t(910, 912, 941, "a*%o", 938)) / 8 + parseInt(o(-421, -434, "de$J", -440, -469)) / 9 * (parseInt(r(961, 974, 940, "IflD", 976)) / 10) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(kn, -21584 + 1 * 132757);
function pA(i, n, t, e, A) {
  return xA(e - -194, n);
}
function Be(i, n, t, e, A) {
  return xA(e - -614, i);
}
function AA(i, n, t, e, A) {
  return xA(i - 819, e);
}
function xA(i, n) {
  i = i - (9676 + -2 * -3466 + -16192);
  const t = kn();
  let e = t[i];
  if (xA.NMwqtP === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    xA.gqMmaZ = a, xA.xzQElu = {}, xA.NMwqtP = !0;
  }
  const o = t[869 * -7 + -5 * 1844 + 15303 * 1], r = i + o, g = xA.xzQElu[r];
  return g ? e = g : (xA.mHDmfg === void 0 && (xA.mHDmfg = !0), e = xA.gqMmaZ(e, n), xA.xzQElu[r] = e), e;
}
function VA(i, n, t, e, A) {
  return xA(n - -318, A);
}
function kn() {
  const i = ["WOWmW4RcLSkT", "sfFdRmkcfG", "l8kXvXXd", "W7XnyW", "W6ddHSk9W7BcLG", "yLdcMCkzha", "W7HbCMtdSW", "W4ZcVff2FG", "nCkUW6BcN8o1", "W7FcH1BdJtS", "WRlcOCo6W7JdJW", "W5TlWOe2W4i", "WO9eW5tdQIC", "DSoxfeG/t8oGW4vOcmoSWQm", "WR/cQLPgW7a", "AIjLW6RdKG", "WQhdNCkgk8kV", "aCkxeKlcQW", "DCowFdXVg8oVW5K", "WOqzW59YWQBdHCoHWPBcSSokugy", "dqz9W4Sb", "W53dIrzoWOS", "dXn9W6Cq", "W59mlLFcQW", "W4VcOwX+Ba", "hbfiW4yu", "WPlcPeBdKSoReCk/vq", "WPDXW4rQlwbhwSoZWRtcOehcMq", "W5nprqZcHW", "W488WRawlHVdOCoJeKxdVmo7WQ4", "W5iyAM7cVa", "W77cVftdGrK", "mmkPg18", "WQ7dM3VdOq", "W7BcT8oeBmoZW5SZuCkBWRXqja", "WQRcUXCTWQO", "WRRcSmol", "gmk4WOBdNmkQtmk6svdcPSkUWQtcPa", "wCoKW5FcNSo7", "ibfBwI8", "lmk6eq", "bx3dU3ffWPFcTmoBW4BcIhy", "tLuPgmoZ", "uCogWRddI8kp", "W5qFW4jj", "WP3cUSkpWQbf", "WOX+W69s", "W4zyuGtcLq", "W6RdVGe", "W5Knx8opEa", "DmotzHn4", "FJLKW7e", "ntpdQCoQWPS", "WQf9WQtdM8o0", "bmkxge7cMG", "C8omrbTo", "BeiYfmoF", "WP3cUSkfWRfb", "W649W6XcWOS", "WRVcP8ou", "WRxcLuXCW6W", "W5Tup8kMtCoBW5lcTmolWODsva", "bxVcUqSiWPFcGmo8", "WPWoErldV2nBqf/cLSkG", "WR0HtSk1uW", "Aui4gmoU", "WPWBW5FcKSko", "WR7dKgddTSoE", "WPTCW7jpBq", "lCkshuiL", "WR/cIfTaW6S", "j2xdQtu2", "W7ZdNJyhWQtdICopWQ4", "uXLEWODY", "lL7dQZKu", "jI5BscG", "W60pDM8", "W4SDESo/DG", "rd/cPJy", "WRHFW5FdPa0", "WPpcPGldH8oDaCkpzCkw", "t0pcQSkpcW", "W6xcK1BdKHm", "WPqAaLpdLX7cJ8kZE8o3qc3cUW", "mZLmqdO", "WQTtWRtdGJC", "cZL9W5Kg", "CSojWOurga", "W4mYWOi9Fa", "WP3cP8knWQbA", "WQVcUbWSWRi", "W7NdQWVcVG", "nCkTdLma", "WPCcECoFeq", "WPTFomkSn8oBW6BcPr/cVmkNW6W", "W5bSWOmTW7y", "oxVdNNldUa", "emkLzG", "WQ3dVmkxomk+", "W4XmlKBcVG", "mYddNCogpSowWORdNaTl", "jXPRW6eJ", "W4hcTKXNza", "WPSoW50", "pHpcKMWV", "bdpdS8oRWRG", "hSo1xJv9", "nSk0W4BcN8oJ", "W5LBou7cRa", "W6DjywRdSa", "EeiYcW", "W53cTKr0Aa", "W7i5BSoKra", "W5TlWP0", "W5fzpCojoSk6W4pcPCo0", "WOxdVfa", "WQJcQKzD", "W488WRasir3cN8oMh0ZdV8ok", "rSoAWRZdLG", "W43cT0bYEq", "le3dSduC", "WOKlW6/cRSk8", "ohG9WRpdS8oLi8k2WRvy", "tmoyW4tcHCoP"];
  return kn = function() {
    return i;
  }, kn();
}
function Yt(i, n, t, e, A) {
  return xA(n - 163, i);
}
class vE {
  async [Be("a*%o", -98, -82, -115) + Yt("IflD", 683) + Be("dE#1", -35, -34, -91) + VA(206, 173, 218, 118, "$F[K") + Be("V@pG", -70, -161, -114)](n) {
    const { Image: t } = FA;
    function e(E, x, Q, d, f) {
      return VA(E - 85, f - -672, Q - 291, d - 155, d);
    }
    const A = await n[I(1329, "jEWu", 1316) + I(1316, "&Fmh", 1269) + "r"](), o = new Uint8Array(A), r = {};
    function g(E, x, Q, d, f) {
      return Be(d, x - 156, Q - 495, Q - 938);
    }
    r[e(-478, -477, -441, "Q9zB", -471)] = o;
    const a = t[e(-475, -524, -468, "a*%o", -510) + "y"](r);
    function I(E, x, Q, d, f) {
      return pA(E - 370, x, Q - 200, E - 994);
    }
    function c(E, x, Q, d, f) {
      return Yt(x, E - 455);
    }
    if (a)
      throw g(864, 884, 834, "wtXo") === I(1333, "gmh2", 1382) ? y[I(1224, "e$q]", 1273) + e(-569, -558, -495, "O95(", -544)](a) : _0x2cd1bf[c(1124, "a1@%") + e(-516, -554, -623, "V@pG", -571)](_0x3c2450);
    function s(E, x, Q, d, f) {
      return pA(E - 433, f, Q - 386, x - 273);
    }
    const C = {};
    return C[g(746, 826, 783, "$u8U")] = o, t[s(524, 551, 505, 611, "5(FV") + "e"](C);
  }
  [VA(72, 108, 157, 135, "^DN1") + pA(283, "f7aq", 274, 224) + Be("!%]v", -77, -19, -75) + pA(272, "^DN1", 233, 274) + Be("mAut", -150, -156, -107) + Yt("RKbh", 647)](n) {
    function t(a, I, c, s, C) {
      return VA(a - 270, I - -226, c - 360, s - 154, C);
    }
    const { VideoStream: e } = FA;
    function A(a, I, c, s, C) {
      return Yt(a, C - -422);
    }
    const o = e[r(259, 235, 281, "RKbh") + "y"](n);
    function r(a, I, c, s, C) {
      return VA(a - 281, a - 157, c - 391, s - 287, s);
    }
    function g(a, I, c, s, C) {
      return VA(a - 123, a - 557, c - 392, s - 171, s);
    }
    if (o)
      throw A("!9CA", 215, 161, 237, 190) === A("jEWu", 255, 300, 189, 242) ? y[r(295, 277, 301, "#1uc") + g(683, 631, 696, "4*b0")](o) : _0x23c0a8[t(10, -36, -1, -22, "n%@c") + r(342, 326, 391, "PRK9")](_0x78b6c);
    return e[t(-64, -97, -152, -50, "$u8U") + "e"](n);
  }
  async [pA(202, "SbiW", 269, 240) + pA(232, "DSbg", 237, 257) + AA(1283, 1231, 1297, "q&gt") + pA(193, "dE#1", 247, 254) + AA(1235, 1174, 1203, "7c$e") + "e"](n) {
    const { v4: { Metadata: t } } = FA, e = { ...n };
    e[r("DSbg", 772, 765, 755) + o(29, "RKbh", -22)] = FA[o(-56, "n*yu", -9) + c(-401, "Gyeg", -431)][a(849, 886, 809, "u(wB")], e[r("KD&e", 628, 640, 682) + a(887, 892, 898, "n2w9") + I(841, 875, "4*b0", 839) + "n"] = o(-8, "xh[P", -41);
    const A = e;
    function o(s, C, E, x, Q) {
      return AA(E - -1333, C - 320, E - 74, C);
    }
    function r(s, C, E, x, Q) {
      return AA(x - -554, C - 71, E - 256, s);
    }
    const g = t[o(25, "$F[K", 22) + "y"](A);
    function a(s, C, E, x, Q) {
      return AA(s - -395, C - 267, E - 247, x);
    }
    function I(s, C, E, x, Q) {
      return VA(s - 390, x - 691, E - 358, x - 372, E);
    }
    if (g)
      throw a(864, 855, 826, "jEWu") === r("q&gt", 787, 746, 796) ? y[I(899, 887, "a1@%", 879) + r("kv#q", 761, 831, 793)](g) : _0x543ff2[o(46, "dE#1", 12) + c(-474, "n%@c", -512)](_0x4eee1b);
    function c(s, C, E, x, Q) {
      return pA(s - 438, C, E - 106, s - -718);
    }
    return t[o(39, "n%@c", 3) + "e"](A);
  }
  async [AA(1346, 1330, 1404, "$F[K") + AA(1339, 1326, 1388, "IflD") + AA(1331, 1365, 1272, "4*b0") + pA(308, "y3sO", 188, 249)](n) {
    const { Content: t } = FA;
    function e(x, Q, d, f, h) {
      return VA(x - 120, h - 1162, d - 57, f - 36, x);
    }
    const { iv: A, key: o, message: r } = await FE(n), g = { token: new Uint8Array(o), iv: A, schemaVersion: Gc, bytes: new Uint8Array(r) };
    function a(x, Q, d, f, h) {
      return pA(x - 211, Q, d - 261, d - 544);
    }
    function I(x, Q, d, f, h) {
      return Be(h, Q - 381, d - 76, d - 1080);
    }
    const c = t[I(871, 886, 902, 923, "U20e") + "y"](g);
    function s(x, Q, d, f, h) {
      return Be(x, Q - 44, d - 70, h - -381);
    }
    function C(x, Q, d, f, h) {
      return pA(x - 96, f, d - 310, h - -482);
    }
    if (c)
      throw I(927, 967, 987, 928, "RKbh") !== a(751, "u(wB", 804) ? y[C(-263, -178, -199, "22dN", -215) + e("wtXo", 1313, 1307, 1386, 1340)](c) : _0x574aa4[e("mAut", 1288, 1356, 1354, 1346) + s("Q9zB", -540, -503, -548, -510)](_0xfe90d9);
    const E = t[s("U20e", -578, -568, -574, -568) + "e"](g);
    return t[a(794, "O95(", 845) + "e"](E)[e("rR4N", 1321, 1241, 1215, 1277) + "h"]();
  }
  [VA(112, 151, 110, 170, "a1@%") + pA(249, "n2w9", 175, 229) + AA(1301, 1319, 1288, "kv#q") + "ge"](n) {
    const { Blob: t } = FA.v4;
    function e(c, s, C, E, x) {
      return Yt(x, E - 369);
    }
    function A(c, s, C, E, x) {
      return AA(s - -1609, s - 75, C - 376, C);
    }
    function o(c, s, C, E, x) {
      return pA(c - 309, c, C - 131, s - 1192);
    }
    const r = t[a(1402, 1425, 1368, "!9CA") + "y"](n);
    function g(c, s, C, E, x) {
      return AA(x - -398, s - 376, C - 180, c);
    }
    if (r) {
      if (a(1437, 1449, 1494, "f7aq") !== a(1379, 1337, 1388, "5(FV")) throw y[A(-300, -272, "!9CA") + o("IflD", 1496, 1465)](r);
      {
        const { VideoStream: c } = _0x1936f8, s = c[g("3uKL", 877, 812, 829, 858) + "y"](_0x16f61d);
        if (s) throw _0x49ba58[o("&871", 1451, 1398) + g("VU2)", 908, 977, 928, 951)](s);
        return c[a(1422, 1416, 1454, "5(FV") + "e"](_0x562e66);
      }
    }
    function a(c, s, C, E, x) {
      return AA(c - 131, s - 344, C - 331, E);
    }
    const I = t[a(1475, 1430, 1471, "0F55") + "e"](n);
    return t[e(935, 1007, 907, 967, "uEhT") + "e"](I)[a(1417, 1361, 1371, "PRK9") + "h"]();
  }
  async [AA(1294, 1251, 1267, "U20e") + AA(1296, 1256, 1308, "5(FV") + AA(1353, 1405, 1307, "22dN") + AA(1313, 1333, 1259, "n%@c") + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: g } = t ?? {};
    function a(I, c, s, C, E) {
      return pA(I - 291, s, s - 110, C - 165);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: g, browserVersions: A?.[a(481, 467, "3uKL", 426)](({ brand: I, version: c }) => ({ name: I, version: c })) };
  }
  async [VA(179, 151, 102, 113, "a1@%") + pA(216, "gmh2", 245, 263) + VA(174, 114, 167, 160, "8M[K") + pA(247, "5(FV", 222, 280) + AA(1258, 1270, 1287, "$u8U") + Be("rR4N", -92, -56, -110) + pA(226, "$u8U", 213, 236) + "on"](n) {
    function t(I, c, s, C, E) {
      return AA(c - -998, c - 344, s - 124, I);
    }
    function e(I, c, s, C, E) {
      return Be(s, c - 340, s - 444, I - -372);
    }
    const A = await this[a(355, "KD&e", 368, 375, 338) + a(335, "4*b0", 386, 385, 351) + t("22dN", 304, 327) + t("5(FV", 359, 355) + a(282, "!9CA", 305, 314, 260)](n[o(-393, -350, -350, -399, "KD&e") + r(856, 869, 868, 902, "$u8U") + "ge"]);
    function o(I, c, s, C, E) {
      return VA(I - 43, s - -529, s - 293, C - 218, E);
    }
    function r(I, c, s, C, E) {
      return AA(I - -439, c - 161, s - 443, E);
    }
    const g = {};
    function a(I, c, s, C, E) {
      return VA(I - 204, E - 147, s - 306, C - 78, c);
    }
    return g[r(838, 833, 889, 880, "3uKL")] = A, g[a(270, "uz7e", 232, 262, 250) + o(-435, -347, -385, -392, "Gyeg") + a(242, "n2w9", 271, 317, 270)] = n[e(-449, -511, "I2^8") + e(-526, -576, "uEhT") + a(361, "Gyeg", 276, 369, 317)], g;
  }
}
function II(i) {
  const n = [], t = Y.LIVENESS_CHALLENGE + "_";
  for (const [e, A] of i.entries())
    if (e.startsWith(t)) {
      const o = e.slice(t.length), r = parseInt(o, 5059 + -9017 * -1 + -14066);
      if (!isNaN(r) && o === r.toString()) {
        const g = {};
        g.phase = e, g.data = A, g.index = r, n.push(g);
      }
    }
  return n.sort((e, A) => e.index - A.index);
}
function sA(i, n, t, e, A) {
  return rA(e - -788, i);
}
(function(i, n) {
  function t(a, I, c, s, C) {
    return rA(C - 105, a);
  }
  const e = i();
  function A(a, I, c, s, C) {
    return rA(C - 556, s);
  }
  function o(a, I, c, s, C) {
    return rA(C - 944, a);
  }
  function r(a, I, c, s, C) {
    return rA(a - 96, c);
  }
  function g(a, I, c, s, C) {
    return rA(C - -285, s);
  }
  for (; ; )
    try {
      if (parseInt(t("YcT@", 610, 828, 586, 665)) / 1 + parseInt(t("v7k*", 695, 391, 543, 524)) / 2 * (-parseInt(o("$AAu", 1355, 1556, 1586, 1542)) / 3) + -parseInt(r(394, 294, "V1GV", 521, 589)) / 4 * (parseInt(A(856, 1033, 1033, "Db3C", 1023)) / 5) + -parseInt(A(1069, 849, 1012, "$AAu", 1031)) / 6 * (-parseInt(o("MGZ[", 1352, 1387, 1193, 1253)) / 7) + parseInt(g(19, 94, 4, "MGZ[", 117)) / 8 + -parseInt(t("LVyb", 285, 374, 513, 443)) / 9 + -parseInt(g(221, 104, -32, "SxK1", 55)) / 10 * (parseInt(o("1(&k", 1460, 1472, 1384, 1270)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sn, -320097 + -1 * -157277 + 919162);
function rA(i, n) {
  i = i - 269;
  const t = Sn();
  let e = t[i];
  if (rA.aZCAgj === void 0) {
    var A = function(I) {
      const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let s = "", C = "";
      for (let E = 0, x, Q, d = 0; Q = I.charAt(d++); ~Q && (x = E % 4 ? x * 64 + Q : Q, E++ % 4) ? s += String.fromCharCode(255 & x >> (-2 * E & 6)) : 0)
        Q = c.indexOf(Q);
      for (let E = 0, x = s.length; E < x; E++)
        C += "%" + ("00" + s.charCodeAt(E).toString(16)).slice(-2);
      return decodeURIComponent(C);
    };
    const a = function(I, c) {
      let s = [], C = 0, E, x = "";
      I = A(I);
      let Q;
      for (Q = 0; Q < 256; Q++)
        s[Q] = Q;
      for (Q = 0; Q < 256; Q++)
        C = (C + s[Q] + c.charCodeAt(Q % c.length)) % 256, E = s[Q], s[Q] = s[C], s[C] = E;
      Q = 0, C = 0;
      for (let d = 0; d < I.length; d++)
        Q = (Q + 1) % 256, C = (C + s[Q]) % 256, E = s[Q], s[Q] = s[C], s[C] = E, x += String.fromCharCode(I.charCodeAt(d) ^ s[(s[Q] + s[C]) % 256]);
      return x;
    };
    rA.LUybJV = a, rA.lOkSKb = {}, rA.aZCAgj = !0;
  }
  const o = t[8584 + 29 * -296], r = i + o, g = rA.lOkSKb[r];
  return g ? e = g : (rA.BnRXYm === void 0 && (rA.BnRXYm = !0), e = rA.LUybJV(e, n), rA.lOkSKb[r] = e), e;
}
function Sn() {
  const i = ["W6ddTgJcTKi", "WRJdJCofBmkD", "W6T9CSoyfW", "W783W6TSma", "mmojWRRdIq", "W7tcVCkeD3W", "ebRdIKHE", "WP/cTCoRD8kI", "eIn5bSku", "WQP0W6OmFq", "mmkpWRW5xW", "FCkQuemp", "W686Da", "W7qWW79BjqlcTKZdNWOCd3i", "rCoTbaVdSW", "wMv0w8o4", "WRGnWO5dW4W", "pdS0WQddKa", "WRWkWPW", "vgVdUtW0", "aSopW69bW54", "BLzE", "WQzAqKVcJa", "WPPButhcOa", "WQNdN8o7sSkg", "WO7cRCo7WP/cSa", "pSoCW6/cKKS", "jCoalmoxW6q", "W5e8W5W3Aa", "W6elEmoDaG", "rmk3BmoYW6G", "WOnqstFcVq", "WPlcOIJcLru", "W6fGjHhdPG", "n2LNW7nzu8km", "W4tdVwtcTwO", "WQRcI1bpWRa", "W5e/W44QEG", "W50irW", "WPn3WR5jaa", "tffoCtW", "W7DRW7KBFW", "f1NdJCo0WPm", "s3PWxmoI", "W4y2W6aWxW", "C8ogW7ZdNva", "W5xdQaXiea", "ASo1W67dGf4", "DCkQue8s", "pCobWRNcKuO", "WP/cN8oRWPVcTa", "lcLgqsK", "W7W4ySomcW", "WOBcKSo5Cq", "W5Geq8khW4e", "WOr6WRhcQtO", "WRDLjSkppCoVbSoabL0", "cSodW5aVW7e", "EKXB", "yhJdUdyu", "WORcPYdcNGe", "W7hdLNFcQx8", "dCouW7XfW4q", "jSogWRJdN0y", "WPjqCq", "WOFcVYq", "WRKBWOLRW4O", "lqeQWQddKa", "W7hdOwtcOM4", "lCk/pf/cJW", "WOLftehcRa", "BSkuWR3cV8kj", "otHwvs8", "jCoelmotWQC", "W68PCa", "W6tdThBcTwy", "WR8kWPxdUN4", "jCoDWR3cKqq", "W4qWW4aSEa", "WRLYBwNcUG", "WOlcHSohFmk2", "Bv1iCa4", "WQVcVLzfWQC", "WRWtWO0", "W4pdImoUWRjl", "WPpcVGn2W44", "amodW5C5W58", "x8kxWPX4WQldVSkSnbuPWPRcTZJcKW", "bCoyW75fW4K", "pConWQhcK1a", "CCkkvvWz", "EmoKaH3dPq", "qgNcNG8lW6pdM1JcTSoXimo4WQO", "WPlcOIRcNHu", "amotgSkvWOq", "fmobWQNdHgu", "WR/dN8oPBSkl", "WQO2WRPirSk6W48WWRv9", "W6FcTwBcRM4", "fSorW4TkW40", "W6FcRSkszwe", "W5ldImoKWQe", "W6mFW71Roa", "s156qCod", "WPf6WQTCBq", "gCofgabr", "jrCTWQddKW", "W4fkw0VcSa", "zSoDWOtcTvldQCoF", "WQdcTLbxWRi", "aMtdNmoYWPi", "aKJdTmoKWPi", "WOj3WP5xkG", "W6NcUCkdzxe", "ed/dM112", "W5pcTCkdBee", "rSkIBa", "oZPhqsK", "otXd", "W4CHW4aZwq", "WQRcOJpcLqG", "W7Gaq8khWOG", "WPXyzdNcRG", "jmoYlmotWRq", "W6i4F8oEeW", "CePQW7hcHgFdOmoXWQSvBwVdNa", "W4GmwmkiWPi", "WOv2WQFcSIS", "WQlcULi", "pJPntrG", "k8oNkCogWPa", "W6O4zCoCba", "iSoBWQ7cK0e", "xf90q8o9", "WOfYWRbtpG", "F8oLfWBdLa", "WPH6WQ8", "vCkgw8obW5ddSY/dGavXW5ldKvq", "B8ooW7NdI1C", "WPhcISodWRHgf8kXWPW", "WP/cImo+WORcPq", "W4tdGGXifW", "oaCQWQK", "WRGqWPH9W5O", "W7hdQqjvbG", "xmoTcGldSW", "WPlcRaruWOy", "WQugWPFdRa", "kmkHoeRcTG", "mSoAWQRcLva", "WOn+WRfypG", "qSkRBmoGW68", "fmotW64", "imoAWRJdJue", "sCoRbG", "oSovjeBcVG", "WPlcQXzZWO8", "W7eoW68", "erldHKPE", "pmonWR3cK0e", "tCoIfYpdPq", "WPJdIHm", "W6dcUCkdyxy", "W7jJW4aBBW", "aZfNfW", "kmo2WPZcLmkN", "imkdWQCYBG", "EeXFFse", "WOpcIcRcNHi", "W6xcSCkh", "WPBcSXS", "DN1fvCot", "qCkKASo2W58", "nmovneVcIa", "imkFWRO5Ea", "aCo7c8kdWPq", "WPldMGVcN8o/", "W4aYmCovdG", "nConWQ/dHvm", "W60VDmoyeW", "W4tdJazvea", "aZLLcq", "WOzArL/cNq", "W4tdSHbLcW", "W5tdK8oMWRzm", "WONdIIVcGSoG", "EmoxWRhcRmkD", "cSoohIrs", "WPRcVGC", "W4SermogWO8", "WRG8WPfHW4S", "B09yW4bk", "W7tcUCkttxG", "WQNdVmo6zSkA", "WRHaAsRcOG", "xmoJpJPnECoq", "BSkNWQdcOSkz", "WPxcGCo6WO3cTW", "ACkqW7ZdHbFcLCkGESo7x8oynNO", "dCouW4eRW6y", "nSoak8kwWQO", "ymkzW7FdHHtcKSkIdmo4vCo2euRcNG", "lqakWQJdKW", "uwVdSZaf", "W4FdSWXljG", "aSofga5s", "W6NcVCkqywy", "WPBdVqBcHCoX", "WQ/dMmoTBCkN", "WQfeWQ8EDW", "eZVdV1rA", "Cg5jW4jo", "zx9dW4bl", "Fmkwu1Kv", "W4u2W5S7FW", "u8ogW7ZdNva", "WOxcUsdcKri", "WOVcQJu", "WPuybqVdPGVcO0HQkSkOgLS", "WOtcRbzWWOS", "WPbiWQTypq", "ymovW6RdJ00", "WQNcQu1nWOe", "WPTYWRRcVZ0", "W5hdObbvcG", "qSk2ESoYW7S", "WRFcQCoSWO3cPq", "bSoAdZ1y", "jCoLpCocWQe", "B3fxEa8", "gmodWOqMW7S", "sK5pFsu", "j8ookSoZWQu", "WQRcUe1sWQa", "WRJdOCoTESkD", "bCoCW75bW6C", "ymkNuvOX", "WPRdMWBcJ8o3", "fmoxhCkdWO4", "s8o4bGRdIq", "i8oAWQdcHG", "W6FdTglcOW", "WOj6WQWDkW", "l8kHnvVcLq", "W4GqrCkdWQu", "eCoGc8oLWO0", "WR7dICoyzCkp", "WPbRWPTUxMxcVd/dJq0", "jCoAWRldGxa", "EhPIq8oY", "zSksWQBcRmkj", "W7NdThu", "nmotgSoCWPC", "WOdcGSogCmkZ", "WOZcQCoXWPVcTW", "s8o+bG/dTa", "tSkPzCo6W68", "WPNcVSoWWO7cTa", "WRaBWOLVW40", "WPpcQSo/DCkX", "bqNdMSoPWOa", "W7ddShhcO2W", "a8onWRZcGuG", "pCo/WPtcVSkR", "B8ksWQBcQmko", "WQysWOpdOq", "WQfcWROOeY5FASkwWRS", "WQ3dI8oT", "W7X8W6a6Eq", "WOupWP/dU34", "D8k0wuSi", "WQj5WPFcUZ4", "W5mwxSksWOG", "c8ovW5ChW7C", "W4ecng3dU3NcLqzwWOFdKSk5rq", "fSo0omkHWQ5eW4pcNIVcG8onuCkX", "n8oDWQ/dIru", "WRCtWPe", "c8oyoSkFWOW", "m8oMWPBcVW", "WQioWP/dP1G", "jeJdL8oMWOq", "iCkyWOO2BW", "cCotgSkrWOm", "uvjMxmoC", "zSojW7VdI0S", "m8otn8oe", "WPLsa0dcGa", "W6O8zCoykG", "W4iHW4O/Aa", "W4qfttxcSJddNby", "W5nirXNcSG", "W5tdJ8o5WRyF", "c8ofW4S4W7y", "iSk5ehxcKW", "pszfrrq", "WRRdICoMBmkD", "mCoYWOG", "rSkOEq", "WO5qrG", "WOVcRJhcKqi", "aZLLcCkH", "W6zblrhdPG", "k8kPefpcMG", "W44xwmku", "A8kSF8o2W7i", "WQhcJSo+CCkr", "k8kbmeJcNG", "W4vDvq", "mmo6WO7cVSkR", "y25jW5nB", "cSkacqHh", "pbm0WRe", "WQFcVGrKWOC", "W6vjW4O4WPfCW6XFbrKvlW", "W6iFW71Tpq", "W4NdObbobG", "mCoYWP/cVSk2", "WOdcGSo4CmkJ", "gtVdM11F", "a8ofba5d", "ftldG1Lv", "ECkNw08p", "omkOfvFcJq", "WQHLWR4lDG", "n8obWRldGKy", "k8k+kN3cKW", "W7ZdThBcRMO", "aKddLSoVWPi", "W4G+W445Eq", "mmotnSouWRu", "WP3cQCoiWPFcSa", "z3Ly", "WPjqsJdcIa", "W6WrCSoOia", "WPVcGSo+EmkH", "D8ogW6ldNG", "WOP6vKdcNq", "WPfqCtVcQa", "W7WtW7H9pW", "W6ddVgRcQhW", "o8ozmL3cRW", "B2LcW5y", "FLzFAHS", "d8osW4u", "WOXJWRu", "rMZdPdrr", "W58xuSkhWPu", "W5eMW5W2", "WRutWPxdRum", "W50rvG", "W6b0mqRdTW", "nSonWP/cNeu", "f8ouW65fW4u", "nmogWQRcH1C", "WR5wWPNcRqW", "svLuFG0", "WOzqDI3cOG", "WQz0scNcIq", "t2C9uColW63dPSoEss81dG", "WPJcICoht8k/", "WO7dNqNcICoN", "W4iFW71Tpq", "W6qtW6n9iG", "nSo2WPVcRW", "W5tdK8oKWR1m", "W7XhW6aFEW", "WPlcRsRcGGS", "ASoDW6O", "erpdMLbp", "kmkSoLVcQa", "pmk/nKW", "p8ori0/cVW", "WOJcRJBcGYS", "W4hdNmo+WQfQ", "W6hcR8ker3O", "BMHjW5XB", "WPhcRIC", "w8kBWQBcRmkB", "b8oTWPdcUg0", "W68XFCoCcq", "ySkyWRW", "W4VcSSk0zwu", "WQKBWPa", "WR1sufNcHq", "WOhcUGv+WOG", "wSkPheyv", "euZdQCoPWOa", "WRmuWOpdIMi", "a8ociKRcLG", "bmoLWQRdGfy", "lSoHWPFcQq", "wmkVsK8s", "W5xdPaDPaq", "W5u6W4aWtG", "CCkcxv4D", "WRDYWQuy", "W4z2uq3cStddTq", "jSoLWRJdMfq", "WRJdHCoLBmkD", "W4HrlXhdQG", "gKxdNmoVWOy", "ASkqWRFcGmki"];
  return Sn = function() {
    return i;
  }, Sn();
}
function Qe(i, n, t, e, A) {
  return rA(t - -167, n);
}
function IA(i, n, t, e, A) {
  return rA(t - -457, i);
}
function Ee(i, n, t, e, A) {
  return rA(t - -540, A);
}
function mA(i, n, t, e, A) {
  return rA(e - -913, n);
}
class WE extends vE {
  [Qe(162, "W^gz", 258) + Qe(83, "!1JN", 219) + mA(-542, "DJ9]", -374, -369) + sA("r1@x", -588, -618, -496)];
  [IA("*yAf", -309, -118) + sA("ul6L", -93, -229, -199) + mA(-478, "pgNe", -322, -449) + Ee(56, 226, 48, 241, "F)#m") + "se"];
  constructor(n) {
    function t(g, a, I, c, s) {
      return Ee(g - 473, a - 171, a - 688, c - 320, c);
    }
    function e(g, a, I, c, s) {
      return mA(g - 224, s, I - 370, I - -77);
    }
    super();
    function A(g, a, I, c, s) {
      return sA(s, a - 338, I - 45, c - 308);
    }
    function o(g, a, I, c, s) {
      return Ee(g - 421, a - 452, g - 259, c - 54, s);
    }
    function r(g, a, I, c, s) {
      return sA(s, a - 187, I - 145, c - 471);
    }
    [this[t(542, 587, 451, "LVyb") + t(641, 672, 753, "u)*0") + t(597, 703, 658, "MGZ[") + r(479, 191, 291, 322, "j72e")], ...this[e(-418, -553, -450, -283, "Db3C") + o(103, -40, 83, 171, "W^gz") + A(224, 171, 222, 172, "kR(l") + r(199, 293, 103, 94, "NtlQ") + "se"]] = n;
  }
  async [IA("&$96", -4, -40) + mA(-455, "W^gz", -427, -532) + mA(-531, "ARd)", -604, -413)]({ onCaptureData: n, sessionToken: t, video: e }) {
    const A = n[I(209, 394, "&RT7")](Y[I(139, 307, "w@r6") + r(-32, -89, -189, "MGZ[") + r(-332, -436, -511, "ARd)") + "S"]);
    function o(Q, d, f, h, p) {
      return Qe(Q - 140, p, h - -560);
    }
    function r(Q, d, f, h, p) {
      return IA(h, d - 38, Q - -155);
    }
    function g(Q, d, f, h, p) {
      return mA(Q - 349, h, f - 115, d - 787);
    }
    if (!A)
      throw g(628, 453, 573, "WYMH") === I(4, 171, "@ACw") ? new _0x17c49f(o(-308, -334, -432, -311, "*yAf") + o(-262, -354, -162, -239, "ARd)") + E(825, "wPC)", 907) + g(266, 261, 392, "WYMH") + E(1003, "MKCh", 929) + o(-261, -468, -259, -441, "7Am]") + g(366, 275, 411, "w@r6") + r(1, -128, 165, "Fq$X") + o(-226, -367, -173, -374, "e(4#")) : new y(o(-186, -68, -106, -213, "7Am]") + g(205, 305, 189, "C6Dk") + o(-576, -506, -514, -376, "8imW") + I(295, 248, "WYMH") + I(431, 408, "pUsj") + I(452, 519, "rQi!") + I(331, 251, "rQi!") + o(-33, -111, -138, -97, "MGZ[") + E(1223, "DJ9]", 1077));
    const a = II(n);
    function I(Q, d, f, h, p) {
      return IA(f, d - 222, d - 318);
    }
    if (a[I(277, 186, "EQsW") + "h"] === -427 + -427 * -1)
      throw E(1042, "%F@1", 1013) === g(361, 449, 450, "SxK1") ? new _0x18aca9(g(538, 461, 468, "kR(l") + o(-485, -173, -367, -303, "fWXI") + o(-518, -324, -551, -428, "j72e") + g(478, 538, 714, "&$96") + g(302, 386, 328, "V8rk") + r(-119, -269, -257, "SxK1") + g(136, 179, 41, "8imW") + g(315, 366, 437, "v7k*") + g(336, 354, 349, "pgNe")) : new y(g(340, 252, 447, "EQsW") + I(218, 358, "UMl2") + I(253, 322, "F)#m") + E(1228, "F)#m", 1054) + r(-6, -26, 27, "EQsW") + E(550, "MGZ[", 730) + I(380, 492, "w@r6") + g(388, 317, 469, "8imW") + r(-69, 80, -37, "&RT7"));
    const c = {};
    c[g(614, 527, 649, "MGZ[") + g(612, 502, 301, "UMl2") + g(492, 396, 333, "NtlQ") + r(-78, -224, -193, "$AAu") + I(682, 507, "F)#m") + o(-371, -507, -353, -386, "wPC)")] = a, c[o(-319, -538, -392, -451, "j72e") + g(309, 328, 309, "%F@1") + g(508, 541, 633, "MKCh") + r(-29, 20, -212, "RKnP") + I(326, 236, "]Vt&") + r(-67, 14, -142, "C6Dk")] = A, c[g(303, 432, 288, "$AAu") + r(15, 143, -53, "$AAu") + "en"] = t;
    const s = await this[o(-366, -431, -483, -347, "EQsW") + r(-13, 83, 156, "MKCh") + o(-117, -292, -463, -291, "e(4#") + g(432, 486, 580, "YcT@") + "e"](c), C = {};
    function E(Q, d, f, h, p) {
      return IA(d, d - 26, f - 909);
    }
    C[I(602, 510, "*yAf") + o(-244, -3, -281, -92, "$AAu") + E(611, "&!$T", 796) + g(172, 346, 357, "fWXI") + o(-424, -354, -254, -282, "rQi!") + E(1194, "&!$T", 1074)] = A, C[g(398, 540, 654, "e(4#") + r(-265, -412, -109, "7Am]") + o(-5, 36, -287, -146, "EQsW") + r(36, -164, 160, "(t]P") + I(256, 134, "QBeB") + o(-113, 69, 55, -131, "kR(l")] = a, C[I(429, 312, "WYMH") + E(1114, "rQi!", 1003)] = s, C[o(22, -252, -87, -173, "e(4#")] = e;
    const x = await this[E(706, "RKnP", 753) + g(313, 243, 200, "&$96") + g(362, 235, 57, "r1@x") + r(-192, -185, -154, "7Am]")](C);
    return this[r(-101, 98, -240, "&RT7") + I(122, 258, "WYMH") + o(-403, -524, -327, -329, "wPC)") + I(532, 477, "EQsW")](x);
  }
  async [mA(-304, "kR(l", -343, -442) + Qe(338, "MKCh", 432) + mA(-363, "EQsW", -268, -424) + sA("S5Lw", -190, -298, -362) + "e"]({ livenessChallengeOnCaptureData: n, passiveLivenessOnCaptureData: t, sessionToken: e }) {
    function A(b, m, w, R, M) {
      return sA(M, m - 161, w - 198, R - 1215);
    }
    function o(b, m, w, R, M) {
      return sA(R, m - 325, w - 177, w - 1728);
    }
    const r = [...t[c(61, 42, 132, 147, "RKnP") + A(1006, 912, 899, 936, "v7k*")][A(798, 904, 936, 755, "fWXI") + c(205, 138, 326, 44, "Fq$X") + d(34, 97, 161, "r1@x") + d(141, -43, 128, "RKnP") + p(-63, 126, 158, "r1@x") + A(646, 756, 621, 704, "ul6L") + d(124, 180, 91, "RKnP")]], g = t[A(1086, 1141, 807, 947, "NtlQ") + o(1345, 1341, 1486, "fWXI")][A(832, 762, 767, 716, "e(4#") + d(66, -4, 88, "]Vt&") + p(39, 203, 152, "&RT7")][o(1105, 1180, 1269, "@ACw")](({ detectedObject: b }) => b);
    n[p(26, 223, 232, "w@r6") + "ch"](({ data: b }) => {
      function m(L, Z, UA, re, _A) {
        return d(L - 99, Z - 295, L - 158, _A);
      }
      function w(L, Z, UA, re, _A) {
        return d(L - 491, Z - 4, UA - -120, _A);
      }
      function R(L, Z, UA, re, _A) {
        return c(L - 385, _A - -252, UA - 70, re - 137, L);
      }
      function M(L, Z, UA, re, _A) {
        return p(L - 50, L - 950, UA - 253, _A);
      }
      function uA(L, Z, UA, re, _A) {
        return p(L - 93, UA - 649, UA - 170, L);
      }
      if (uA("DJ9]", 1004, 871) !== uA("6^k@", 1160, 1029)) {
        const { MultiRangeLivenessMetadata: L } = _0x223170.v4;
        if (!_0x293bb3 || _0x477df4[R("V8rk", 33, 52, -99, -3) + "h"] === 4062 + 2031 * -2) return;
        const Z = _0x52c41b[R("8imW", -48, -59, -62, 119) + "ap"]((Yn) => Yn?.[m(294, 245, 451, 478, "(t]P") + m(173, 338, 284, 276, "&$96")] ?? []), UA = {};
        UA[R("&!$T", 80, 220, 346, 146) + w(261, 4, 167, 242, "SxK1")] = Z;
        const re = L[M(1119, 937, 941, 1052, "MKCh") + "y"](UA);
        if (re) throw _0x267106[w(-33, 143, 6, 142, "W^gz") + w(-9, 187, 173, 249, "u)*0")](re);
        const _A = {};
        return _A[w(145, 198, 262, 277, "C6Dk") + R("8imW", -5, -366, -84, -189)] = Z, L[M(1041, 1113, 1024, 1154, "RKnP") + "e"](_A);
      } else {
        r[m(536, 414, 721, 456, "%F@1")](...b[w(135, 121, 60, 239, "&!$T") + M(1409, 1400, 1475, 1207, "&$96")][w(-66, 122, 129, 172, "j72e") + m(308, 363, 163, 121, "w@r6") + uA("ul6L", 1150, 989) + w(166, -33, 124, 57, "kR(l") + m(523, 602, 393, 413, "DJ9]") + uA("ARd)", 784, 822) + R("&!$T", -110, -325, -261, -240)]);
        const L = b[R("%F@1", -153, -23, 1, 12) + M(1059, 1205, 868, 862, "QBeB")][R("]Vt&", 183, -66, 55, 90) + uA("S6e]", 934, 743) + m(373, 480, 184, 545, "C6Dk")][M(1077, 1237, 1022, 1095, "8imW")](({ detectedObject: Z }) => Z);
        g[uA("(t]P", 804, 988)](...L);
      }
    });
    const a = kB(), I = await SB();
    function c(b, m, w, R, M) {
      return sA(M, m - 34, w - 75, m - 516);
    }
    const s = await this[d(140, 249, 133, "&RT7") + A(1051, 1069, 1074, 874, "UMl2") + A(998, 1143, 1135, 995, "&$96") + p(187, 112, 153, "rQi!") + "ls"](a, I), { cameraProperties: C, croppedImageWithPosition: E } = t[p(417, 274, 222, "LVyb") + c(126, 206, 222, 331, "ul6L")], x = await this[d(19, 355, 177, "r1@x") + p(560, 455, 275, "j72e") + c(-53, 121, 30, -68, "RKnP") + c(155, 331, 478, 469, "WYMH") + o(1409, 1434, 1273, "MGZ[") + d(58, -95, 17, "MKCh") + d(92, -2, 194, "rQi!") + "on"](E), Q = { ...C };
    Q[o(1287, 1353, 1398, "wPC)") + d(308, 113, 225, "u)*0") + o(1671, 1299, 1472, "wPC)") + o(1377, 1533, 1354, "kR(l") + A(898, 648, 958, 809, "YcT@")] = x;
    function d(b, m, w, R, M) {
      return sA(R, m - 69, w - 330, w - 509);
    }
    Q[d(204, 267, 362, "(t]P") + d(259, 134, 190, "V1GV") + p(-36, 136, 121, "r1@x")] = s, Q[p(117, 146, 12, "6^k@") + d(308, 481, 358, "2VS0") + c(-56, 137, 282, 330, "UMl2") + d(353, 498, 339, "r1@x") + A(823, 1055, 776, 934, "%F@1") + o(1617, 1613, 1482, "6^k@") + A(1031, 1259, 1202, 1069, "rQi!")] = r, Q[A(790, 1006, 904, 892, "WYMH") + d(46, 183, 223, "YcT@") + p(364, 224, 372, "@ACw")] = g;
    const f = Q, h = {};
    h[d(42, 42, 24, "Db3C") + c(371, 207, 194, 28, "LVyb") + "en"] = e;
    function p(b, m, w, R, M) {
      return Ee(b - 142, m - 222, m - 330, R - 175, R);
    }
    h[p(550, 368, 179, "&$96")] = f;
    const k = h;
    return this[p(-8, 75, 73, "SxK1") + A(1012, 909, 938, 979, "2VS0") + A(1125, 1153, 976, 1034, "Db3C") + p(-25, 105, 99, "NtlQ") + d(454, 374, 392, "1(&k") + "e"](k);
  }
  async [Ee(-296, -260, -190, -116, "MGZ[") + sA("W^gz", -572, -626, -446) + Ee(-21, -134, -152, -293, "V8rk") + Qe(211, "UMl2", 130)]({ livenessChallengeOnCaptureData: n, metadata: t, passiveLivenessOnCaptureData: e, video: A }) {
    function o(b, m, w, R, M) {
      return Ee(b - 493, m - 88, m - 196, R - 425, R);
    }
    function r(b, m, w, R, M) {
      return mA(b - 153, m, w - 31, M - 1634);
    }
    const { MultiRangeLivenessContent: g } = FA.v4;
    function a(b, m, w, R, M) {
      return IA(M, m - 322, w - 1360);
    }
    const I = this[o(209, 204, 325, "rQi!") + o(252, 77, 170, "8imW") + x(1638, 1462, 1640, "ARd)") + o(329, 303, 456, "S6e]") + x(1171, 1345, 1227, "UMl2")](e[x(1470, 1533, 1674, "EQsW") + x(1456, 1498, 1613, "1(&k") + "e"], e[o(144, 41, 190, "SxK1") + r(1193, "1(&k", 1234, 1156, 1234)], ig[r(1510, "$AAu", 1422, 1368, 1389)](this[x(1674, 1486, 1414, "RKnP") + C(-171, -289, "!1JN") + a(1141, 1087, 1255, 1332, "S5Lw") + a(1330, 1379, 1248, 1215, "W^gz")])), c = n[a(1155, 1368, 1321, 1337, "&$96")](({ data: b }, m) => this[C(-395, -253, "*yAf") + C(-38, -21, "wPC)") + r(1048, "MGZ[", 1066, 1137, 1184) + x(1206, 1312, 1199, "UMl2") + r(1184, "r1@x", 924, 1049, 1076)](b[x(1312, 1393, 1447, "Db3C") + x(1280, 1307, 1469, "DJ9]") + "e"], b[r(1466, "UMl2", 1171, 1481, 1321) + C(-220, -138, "*yAf")], ig[o(-153, 18, -24, "!1JN")](this[x(1439, 1387, 1495, "pgNe") + r(1289, "u)*0", 1249, 1242, 1248) + x(1514, 1321, 1349, "u)*0") + o(404, 209, 77, "MGZ[") + "se"][m]))), s = await Promise[x(1241, 1248, 1284, "7Am]")]([I, ...c]);
    function C(b, m, w, R, M) {
      return IA(w, m - 218, m - -218);
    }
    const E = this[o(-8, 56, 72, "C6Dk") + r(1126, "NtlQ", 1376, 1178, 1291) + a(1495, 1710, 1514, 1655, "%F@1") + C(-388, -384, "kR(l") + r(1314, "S6e]", 1287, 1226, 1206) + o(-4, 13, 88, "7Am]") + o(-68, -63, -201, "%F@1") + x(1417, 1225, 1026, "ul6L")](e[r(1244, "6^k@", 1481, 1356, 1294) + r(1531, "DJ9]", 1465, 1230, 1383)][C(-150, -213, "j72e") + x(1371, 1358, 1308, "ul6L") + a(1299, 1247, 1182, 1071, "(t]P")]);
    function x(b, m, w, R, M) {
      return mA(b - 59, R, w - 473, m - 1790);
    }
    const Q = n[a(1421, 1283, 1355, 1202, "j72e")](({ data: b }) => this[r(1194, "pUsj", 1153, 1188, 1125) + C(-313, -215, "%F@1") + r(1172, "*yAf", 1201, 1313, 1372) + x(1421, 1385, 1338, "u)*0") + o(144, 230, 326, "&$96") + o(-239, -75, -168, "j72e") + x(1156, 1189, 1342, "F)#m") + x(1053, 1225, 1400, "ul6L")](b[o(9, -37, -130, "1(&k") + x(1035, 1152, 1016, "EQsW")][a(1384, 1305, 1266, 1267, "RKnP") + r(1062, "ul6L", 1226, 1035, 1202) + a(1287, 1258, 1175, 976, "WYMH")])), d = this[x(1254, 1237, 1316, "MGZ[") + a(1202, 1346, 1298, 1288, "$AAu") + o(324, 213, 339, "DJ9]") + r(881, "&$96", 1110, 1046, 1042) + x(1376, 1351, 1293, "C6Dk") + a(1498, 1444, 1558, 1486, "QBeB") + "a"]([E, ...Q]), f = { stepResults: s, metadata: t, multiRangeLivenessMetadata: d, video: { streamH264: A ? this[C(-178, -41, "S5Lw") + r(1257, "@ACw", 1361, 1300, 1361) + x(1670, 1510, 1495, "EQsW") + a(1420, 1451, 1295, 1322, "&RT7") + a(1098, 1141, 1267, 1193, "V1GV") + a(1309, 1513, 1345, 1183, "j72e")](A) : void 0 } }, h = g[C(15, -156, "%F@1") + "y"](f);
    if (h)
      throw o(-120, -31, -75, "8imW") === o(10, -44, -232, "e(4#") ? y[x(1250, 1197, 1012, "(t]P") + C(-149, -170, "rQi!")](h) : _0x4185f8[r(1003, "QBeB", 1206, 994, 1051) + r(1315, "MGZ[", 1333, 1132, 1162)](_0x3eac53);
    const p = g[o(-234, -59, -201, "SxK1") + "e"](f), k = {};
    return k[a(1441, 1221, 1280, 1164, "!1JN") + x(1694, 1540, 1552, "pUsj") + o(138, 162, 97, "S5Lw") + a(1336, 1560, 1479, 1642, "RKnP") + o(40, 233, 421, "&RT7")] = p, this[o(-62, -43, -157, "RKnP") + o(-114, 47, -104, "&!$T") + r(1084, "wPC)", 992, 1228, 1148) + "ge"](k);
  }
  async [IA("e(4#", 28, 167) + IA("w@r6", -305, -133) + IA("Db3C", -26, 106) + Qe(125, "F)#m", 144) + mA(-390, "UMl2", -573, -445)](n, t, e) {
    function A(d, f, h, p, k) {
      return Qe(d - 315, d, k - 996);
    }
    const { MultiRangeLivenessStepResult: o } = FA.v4;
    function r(d, f, h, p, k) {
      return mA(d - 278, h, h - 115, k - 1308);
    }
    function g(d, f, h, p, k) {
      return sA(p, f - 377, h - 68, k - 902);
    }
    const a = await Vs(n), I = await this[g(593, 326, 596, "pUsj", 518) + A("UMl2", 1139, 1068, 1352, 1223) + A("V1GV", 1431, 1234, 1577, 1396) + A("LVyb", 1172, 1234, 1196, 1205) + r(534, 681, "S5Lw", 518, 712)](a);
    function c(d, f, h, p, k) {
      return IA(p, f - 175, f - 72);
    }
    const s = {};
    function C(d, f, h, p, k) {
      return mA(d - 121, k, h - 162, p - 1386);
    }
    s[A("(t]P", 1319, 1333, 1215, 1359)] = I, s[c(353, 215, 205, "UMl2") + c(70, 52, 37, "kR(l") + r(821, 841, "kR(l", 988, 1010)] = t;
    const E = {};
    E[g(323, 482, 332, "$AAu", 437)] = s, E[c(127, -51, -243, "S6e]") + C(1005, 940, 910, 969, "QBeB") + C(898, 1009, 884, 1057, "&!$T")] = e;
    const x = E, Q = o[g(399, 303, 284, "V8rk", 420) + "y"](x);
    if (Q) {
      if (C(1043, 1169, 992, 1004, "w@r6") === c(134, 177, 254, "!1JN")) throw y[r(1027, 828, "pUsj", 1145, 1018) + c(-70, 56, 211, "MGZ[")](Q);
      {
        _0x94fc05[A("1(&k", 1335, 1232, 1014, 1172)](..._0x31419f[c(71, 140, 36, "Fq$X") + C(992, 915, 683, 831, "Db3C")][r(943, 975, "W^gz", 852, 912) + c(130, 225, 105, "NtlQ") + r(707, 708, "DJ9]", 718, 763) + c(45, 133, 151, "pgNe") + r(618, 871, "RKnP", 623, 711) + r(1233, 992, "fWXI", 878, 1054) + c(278, 114, 113, "S5Lw")]);
        const d = _0x55a644[r(939, 706, "&$96", 1012, 896) + r(883, 844, "&!$T", 919, 1017)][A("LVyb", 1218, 1180, 1200, 1124) + r(888, 795, "(t]P", 823, 990) + C(813, 631, 755, 781, "v7k*")][g(609, 788, 668, "pgNe", 612)](({ detectedObject: f }) => f);
        _0x3154a3[A("ul6L", 1155, 1471, 1337, 1295)](...d);
      }
    }
    return o[A("u)*0", 1168, 940, 1102, 1099) + "e"](x);
  }
  [IA("MKCh", -260, -103) + mA(-275, "ARd)", -387, -375) + mA(-517, "!1JN", -702, -505) + IA("NtlQ", -147, -98) + Ee(-405, -307, -253, -366, "C6Dk") + Qe(452, "!1JN", 271) + mA(-228, "UMl2", -137, -308) + IA("MKCh", 93, 151)](n) {
    function t(C, E, x, Q, d) {
      return Qe(C - 301, x, d - 1140);
    }
    function e(C, E, x, Q, d) {
      return sA(Q, E - 247, x - 339, d - -117);
    }
    const { MultiRangeLivenessMetadata: A } = FA.v4;
    function o(C, E, x, Q, d) {
      return Ee(C - 366, E - 124, E - 815, Q - 427, d);
    }
    if (!n)
      return t(1305, 1334, "w@r6", 1495, 1304) === t(1470, 1550, "u)*0", 1289, 1468), void 0;
    function r(C, E, x, Q, d) {
      return sA(x, E - 229, x - 353, Q - -115);
    }
    const g = n[o(755, 664, 685, 488, "7Am]")]((C) => {
      function E(h, p, k, b, m) {
        return o(h - 25, p - 29, k - 493, b - 373, k);
      }
      function x(h, p, k, b, m) {
        return o(h - 394, k - 86, k - 211, b - 210, p);
      }
      function Q(h, p, k, b, m) {
        return o(h - 291, h - 568, k - 257, b - 445, b);
      }
      function d(h, p, k, b, m) {
        return t(h - 449, p - 236, m, b - 255, p - -810);
      }
      function f(h, p, k, b, m) {
        return o(h - 75, m - -975, k - 430, b - 231, k);
      }
      if (E(826, 860, "fWXI", 838) === E(972, 863, "$AAu", 843)) {
        const h = {};
        h[E(899, 807, "2VS0", 729) + "r"] = C[f(-250, 31, "V1GV", 48, -55) + E(892, 898, "W^gz", 987) + d(687, 728, 675, 601, "pgNe")][E(544, 677, "S5Lw", 709) + E(804, 790, "*yAf", 799)], h[Q(1414, 1533, 1450, "u)*0") + f(-436, -155, "V8rk", -440, -272) + f(16, -107, "ARd)", -180, -74) + f(-264, -380, "ul6L", -36, -230) + f(-371, -183, "1(&k", -115, -297) + E(1076, 923, "S6e]", 926) + "o"] = C[f(-348, -540, "w@r6", -506, -426) + Q(1209, 1075, 1021, "pgNe") + d(605, 728, 558, 714, "pgNe")][f(-310, -313, "6^k@", -128, -326) + d(921, 732, 652, 536, "*yAf")];
        const p = {};
        return p[d(615, 795, 764, 962, "(t]P") + f(70, -209, "WYMH", -90, -118)] = h, p[E(863, 940, "&$96", 894) + E(769, 908, "j72e", 967) + x(794, "S5Lw", 818, 693)] = C[x(902, "Db3C", 925, 929) + Q(1208, 1209, 1300, "YcT@")], p;
      } else throw _0x3396e6[E(1065, 927, "pUsj", 733) + E(930, 896, "pgNe", 854)](_0x54511b);
    }), a = {};
    a[r(-538, -238, "$AAu", -364) + e(-578, -542, -426, "MKCh", -379)] = g;
    const I = A[e(-753, -669, -818, "DJ9]", -623) + "y"](a);
    if (I)
      throw t(1439, 1302, "w@r6", 1386, 1426) !== o(645, 758, 850, 920, "]Vt&") ? _0x16daa9[o(839, 724, 873, 924, "MKCh") + s(267, 218, 160, "w@r6")](_0x3b335e) : y[t(1380, 1251, "@ACw", 1474, 1396) + t(1151, 1340, "SxK1", 1276, 1275)](I);
    const c = {};
    function s(C, E, x, Q, d) {
      return IA(Q, E - 88, E - 188);
    }
    return c[s(-51, 26, 89, "LVyb") + o(855, 804, 810, 907, "F)#m")] = g, A[e(-315, -321, -563, "(t]P", -415) + "e"](c);
  }
  [IA("V8rk", -128, -51) + sA("2VS0", -163, -99, -187) + mA(-610, "F)#m", -518, -431) + IA("kR(l", 260, 136) + sA("&!$T", -86, -294, -168) + sA("wPC)", -147, -295, -159) + "a"](n) {
    function t(C, E, x, Q, d) {
      return IA(E, E - 458, C - 176);
    }
    const { MultiRangeLivenessMetadata: e } = FA.v4;
    function A(C, E, x, Q, d) {
      return sA(d, E - 356, x - 109, C - 1679);
    }
    if (!n || n[I(-448, -483, -613, -532, "MGZ[") + "h"] === 3 * -1674 + -9880 + 14902)
      return t(310, "MKCh") !== c(1083, 935, "S6e]"), void 0;
    const o = n[c(739, 834, "u)*0") + "ap"]((C) => C?.[I(-449, -546, -407, -253, "e(4#") + c(674, 812, "rQi!")] ?? []), r = {};
    function g(C, E, x, Q, d) {
      return Qe(C - 77, d, E - -486);
    }
    r[c(856, 768, "@ACw") + I(-197, -96, -232, -90, "j72e")] = o;
    const a = e[c(921, 1071, "7Am]") + "y"](r);
    function I(C, E, x, Q, d) {
      return Ee(C - 309, E - 2, C - -198, Q - 135, d);
    }
    if (a)
      throw c(1053, 857, "S6e]") !== I(-203, -210, -168, -220, "EQsW") ? y[c(796, 934, "MKCh") + g(-363, -351, -212, -496, "SxK1")](a) : _0x145c15[A(1162, 1092, 1070, 1289, "ARd)") + c(1267, 1082, "Fq$X")](_0x4058a6);
    function c(C, E, x, Q, d) {
      return sA(x, E - 484, x - 2, E - 1273);
    }
    const s = {};
    return s[t(51, "EQsW") + c(1031, 1135, "W^gz")] = o, e[I(-420, -368, -439, -279, "QBeB") + "e"](s);
  }
}
function cI(i, n) {
  const t = PA(n);
  V(() => {
    t.current = n;
  }, [n]), V(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function ME(i, n) {
  const { handleAppStateChange: t } = JA(), e = he((A) => {
    if (!A.detail) return;
    const { content: o, resultData: r } = A.detail;
    t(U.COMPLETE), n(r, o);
  }, [n, t]);
  cI(i, e);
}
function LE(i) {
  return i !== null && typeof i == "object" && "imageWithMetadata" in i;
}
function OE() {
  const { onComplete: i } = Qs(), { handleError: n } = JA();
  function t(e, A) {
    try {
      if (!LE(e)) throw new y("Invalid result data received in onComplete callback");
      i(e, A);
    } catch (o) {
      o instanceof y && n(o);
    }
  }
  ME(ns.ON_COMPLETE, t);
}
function JE() {
  const { cameraService: i } = it(), { assetsDirectoryPath: n, challengeSequence: t, sessionToken: e } = Qs(), { transactionCounting: A } = e0(), { analytics: o } = Qc(), { phaseThresholds: r } = Es(), { handleAppStateChangeWithTransitionCheck: g, handleError: a } = JA(), [I, c] = lA();
  OE(), V(() => {
    let C;
    async function E() {
      if (!i) return;
      const x = Hs.getWorkerPath(KQ, n), Q = {};
      Q.type = "module";
      const d = new Worker(new URL(x, import.meta.url), Q), f = cs(d);
      C = await new f();
      const h = new GE(), p = new VQ(BQ), k = new WE(t), b = new HQ().setAssetsDirectoryPath(n).setCameraService(i).setDetector(C).setDetectionFactory(h).setPhaseThresholds(r).setDispatcher(p).setProtobuf(k).setChallengeSequence(t).setAnalytics(o).setSessionToken(e).setTransactionCounting(A).build();
      try {
        c(b), g(U.RUNNING);
      } catch (m) {
        if (m instanceof Error) {
          a(y.fromError(m));
          return;
        }
      }
    }
    return E(), () => {
      g(U.WAITING), C && C[rs]();
    };
  }, [a, i, t, n, o, e, g, r, A]);
  const s = {};
  return s.controller = I, s;
}
function UE({ children: i }) {
  const { controller: n } = JE();
  return /* @__PURE__ */ D(cQ, { controller: n, children: i });
}
function YE({ initAppState: i, onError: n }) {
  const [t, e] = lA(i), [A, o] = lA(), [r, g] = lA(!1), a = mt.Lower, I = PA(n);
  V(() => {
    I.current = n;
  }, [n]);
  const c = {};
  return c.redfin = a, c.appState = t, c.setAppState = e, c.error = A, c.setError = o, c.isCameraReady = r, c.setIsCameraReady = g, c.onErrorRef = I, c;
}
function cg(i, n) {
  at.getInstance().dispatchCustomEventOnChange(i, n);
}
function TE(i, n) {
  at.getInstance().dispatchCustomEventOnChange(i, n);
}
function PE(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  at.getInstance().dispatchCustomEventOnChange(i, e);
}
function _E({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: g, setIsCameraReady: a } = YE({
    initAppState: U.LOADING,
    onError: i
  }), I = he(
    (C) => {
      cg(ce.STATE_CHANGED, { appState: U.ERROR, error: C }), a(!1), o.current(C), g(C), r(U.ERROR);
    },
    [a, o, g, r]
  ), c = he(
    (C) => {
      r((E) => {
        const x = typeof C == "function" ? C(E) : C;
        return cg(ce.STATE_CHANGED, { appState: x }), x;
      });
    },
    [r]
  ), s = he(
    (C) => {
      c((E) => E === U.COMPLETE || E === U.LOADING && C !== U.RUNNING ? E : C);
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
  return Sr() ? aa.MOBILE : aa.DESKTOP;
}
function KE({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = lA(HE()), A = bA(() => {
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
  return /* @__PURE__ */ D(Nr.Provider, { value: A, children: i });
}
function Cg(i) {
  const n = PA(i);
  return JSON.stringify(n.current) !== JSON.stringify(i) && (n.current = i), n.current;
}
function jE(i, n) {
  return {
    confidence: { min: n?.confidence?.min ?? i.confidence.min },
    sharpness: { min: n?.sharpness?.min ?? i.sharpness.min },
    brightness: {
      min: n?.brightness?.min ?? i.brightness.min,
      max: n?.brightness?.max ?? i.brightness.max
    },
    edgeDistanceToImageShorterSideRatio: {
      min: n?.edgeDistanceToImageShorterSideRatio?.min ?? i.edgeDistanceToImageShorterSideRatio.min
    },
    devicePitchAngle: { max: n?.devicePitchAngle?.max ?? i.devicePitchAngle.max },
    leftEye: {
      confidence: { min: n?.leftEye?.confidence?.min ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: n?.rightEye?.confidence?.min ?? i.rightEye.confidence.min }
    }
  };
}
function qE(i, n) {
  return {
    confidence: { min: n?.confidence?.min ?? i.confidence.min },
    leftEye: {
      confidence: { min: n?.leftEye?.confidence?.min ?? i.leftEye.confidence.min }
    },
    rightEye: {
      confidence: { min: n?.rightEye?.confidence?.min ?? i.rightEye.confidence.min }
    }
  };
}
function VE({
  children: i,
  livenessChallengeUserThresholds: n,
  passiveLivenessUserThresholds: t
}) {
  const e = Cg(n), A = Cg(t), o = bA(() => ({
    [Y.PASSIVE_LIVENESS]: {
      mapper: jE,
      presets: TQ,
      userThresholds: A
    },
    [Y.LIVENESS_CHALLENGE]: {
      mapper: qE,
      presets: PQ,
      userThresholds: e
    }
  }), [e, A]);
  return /* @__PURE__ */ D(KE, { thresholdConfigs: o, children: i });
}
const lt = {};
lt.AUTO_CAPTURE = "auto_capture", lt.CAPTURE_FINISHED = "capture_finished", lt.CAPTURE_STARTED = "capture_started", lt.ESCALATION_TRIGGER = "escalation_trigger", lt.LONG_CAPTURE_SMILE = "long_capture_smile";
const Gn = lt, Pe = {};
Pe.PALM = "palm_auto_capture", Pe.SMILE = "smile_liveness", Pe.DOCUMENT = "document_auto_capture", Pe.MAGNIFEYE = "magnifeye_liveness", Pe.EYE_GAZE = "eye_gaze_liveness", Pe.FACE = "face_auto_capture", Pe.MULTI_RANGE = "multi_range_liveness";
const ZE = Pe, zE = async () => WebAssembly.validate(new Uint8Array([-8108 + -1 * -8108, -1 * 2957 + 2521 + 533, -4781 + 807 * -5 + 8931, 367 * -19 + -1 * 9956 + 17038, 4712 + -1 * 4711, 18541 + -18541 * 1, -1837 + 1663 * 5 + -6478, 5621 + -1 * -9421 + -7521 * 2, -1 * 6943 + 2928 + -4016 * -1, -2 * 565 + -9 * -1017 + -2 * 4009, 3 * -366 + 13 * 275 + -2476, 489 * -11 + 1 * 7418 + -1943, 93 + -1 * 7706 + 7613, -1 * -349 + -20 * 437 + 8 * 1049, -319 * -11 + 2301 * -4 + 5818, 8738 + -2767 * -2 + -14269, 2111 * 3 + -5195 + -1136, 1061 + -1 * -8602 + -9662, 0, -1846 + -489 * -1 + 1367, 2773 + -307 * 9, 3908 + -352 * -17 + -9891, -5046 + -638 * -1 + 4416, 0, 9353 + 1 * 8452 + -17740, -373 + -373 * -1, 253, -3645 + 2 * 1333 + 2 * 497, -514 * 12 + 1 * 1907 + 4514, 98, 11]));
function XE() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(16);
}
function $E() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = XE();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function Ax(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function ex(i) {
  return i > 63184 + -17 * -4709 + -329 * 253 ? ">1m" : "" + i;
}
function tx(i) {
  return i > -9808 + 4 * -422 + -1046 * -11 ? ">10" : "" + i;
}
const ox = (i) => i ? i <= -9859 + -1 * -9860 ? Math.round(i * (4434 + 6078 * -1 + 1664)) / (2593 * 3 + 6731 + -14490) : Math.round(i / (-6537 + -2 * -1870 + 2847)) * (-1 * -514 + 4268 * -1 + 1 * 3804) : 1 * -3929 + -495 + 4424;
function nx(i) {
  return i ? Math.round(i / (4 * 1730 + 5263 + -9683)) * (-4788 + 2 * -277 + 3921 * 2) : 4154 + -4 * 577 + -1846;
}
const ix = (i) => i ? Math.round(i / 10) * 10 : 5660 + 4 * 978 + 9572 * -1, rx = (i) => Math.round(i * 2) / 2;
async function ax() {
  return await zE() ? ra.SIMD : ra.NO_SIMD;
}
class gx {
  apiKey;
  sessionId;
  distinctId;
  component;
  platform;
  versionName;
  applicationId;
  constructor() {
    this.platform = "web", this.versionName = $g(), this.applicationId = A0(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(Gn.CAPTURE_STARTED));
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
const uo = new gx();
class sx {
  posthog = uo;
  component;
  constructor(n) {
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: $g(), ...n };
  }
  init(n, t) {
    const e = $E(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, uo.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    uo.sendEvent(Gn.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    uo.sendEvent(Gn.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    return n?.dotWeb?.features?.["realTimeTransactionReportingDisabled"] !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : n?.dotWeb?.features?.["realTimeAnalyticsReportingEnabled"] ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -1 * 4981 + 8876 + -3645 ? ix(n) : ox(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: tx(o || -2117 + -2117 * -1), firstHiccup: ex(nx(r)), optCheckDetails: e?.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class Ix extends sx {
  constructor() {
    super(ZE.MULTI_RANGE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(Y.PASSIVE_LIVENESS), e = II(n);
    if (!t || !e) throw new y("On capture data was not found");
    const A = Ax(t.metadata.deviceName, t.metadata.facingMode), o = this.extractChallengeMetrics(e), r = t.metadata.captureProcessTime, g = r + "," + o.captureTime, a = r + o.totalCaptureTime, I = [t.metadata.averageFps, ...o.averageFps], c = rx(I.reduce((f, h) => f + h, 427 + -1 * 4943 + 2258 * 2) / I.length), s = t.detectedObject.confidence + "," + o.confidence, C = t.detectedObject.faceSize + "," + o.faceSize, E = t.resultImage.width + "x" + t.resultImage.height, x = await ax(), Q = {};
    Q.averageFps = c, Q.camera = A, Q.instructionSet = x, Q.captureTime = g, Q.imageResolution = E, Q.confidence = s, Q.faceSize = C, Q.durationMs = a;
    const d = this.createSegmentation(Q);
    if (Zt()) {
      const f = this.parsePerformanceCheckup(t.metadata.optCheck, this.joinKeypressDetections(t, e));
      Object.assign(d, f);
    }
    this.posthog.sendEvent(Gn.CAPTURE_FINISHED, d);
  }
  extractChallengeMetrics(n) {
    return { captureTime: n.map((t) => t.data.metadata.captureProcessTime).join(","), confidence: n.map((t) => t.data.detectedObject.confidence).join(","), faceSize: n.map((t) => t.data.detectedObject.faceSize).join(","), averageFps: n.map((t) => t.data.metadata.averageFps), totalCaptureTime: n.reduce((t, e) => t + e.data.metadata.captureProcessTime, 6435 + -2 * 431 + -5573) };
  }
  joinKeypressDetections(n, t) {
    const e = n.metadata.performanceCheckup, A = t.map((C) => C.data.metadata.performanceCheckup), o = [e, ...A], r = o.some((C) => C?.["performance"] === !0), g = o.reduce((C, E) => (E?.["firstHiccup"] !== void 0 && C.push(E.firstHiccup), C), []), a = g.length > 0 ? Math.min(...g) : void 0, I = o.reduce((C, E) => (E?.["hiccupAmount"] !== void 0 && C.push(E.hiccupAmount), C), []), c = I.length > 0 ? I.reduce((C, E) => C + E, 645 + 2119 * -4 + 7831) : void 0, s = {};
    return s.performance = r, s.firstHiccup = a, s.hiccupAmount = c, s;
  }
}
const cx = new Ix();
function Fr(i, n) {
  const t = PA(n);
  V(() => {
    t.current = n;
  }, [n]), V(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function Cx({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = JA(), e = he((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: g } } } = o.detail;
    if (!(i && !g) && r.includes(YA.FACE_NOT_PRESENT)) {
      if (n !== U.RUNNING) return;
      setTimeout(() => {
        t(U.LOADING);
      }, -5 * -885 + 13 * -386 + -593 * -1), setTimeout(() => {
        t(U.RUNNING);
      }, 3713 + -664 * 1 + 1 * -3049);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Bx(i, n) {
  const { handleFaceDetection: t } = Cx(n);
  Fr(i, t);
}
function vr(i, n) {
  function t(e) {
    n(e);
  }
  Fr(i, t);
}
function Qx(i) {
  const { appState: n, handleAppStateChange: t } = JA();
  function e() {
    n !== U.LOADING && t(U.RUNNING);
  }
  function A(o) {
    o.detail?.["instruction"] === qo.CONTINUE_DETECTION && e();
  }
  vr(i, A);
}
const Bg = () => typeof document < "u" && document.hasFocus();
function Ex(i = {}) {
  const n = PA(i), t = PA(Bg()), [e, A] = lA(Bg);
  V(() => {
    n.current = i;
  }), V(() => {
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
function xx(i = {}) {
  const { appState: n } = JA();
  Ex({ onBlur: () => {
    n === U.WAITING || n === U.COMPLETE || i.onBlur?.();
  }, onFocus: () => {
    n === U.WAITING || n === U.COMPLETE || i.onFocus?.();
  } });
}
function dx(i) {
  const { controller: n } = os(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = JA();
  xx({ onBlur: () => {
    e(U.LOADING), A(!1);
  }, onFocus: () => {
    e(U.RUNNING), A(!0);
  } }), Qx(i.CONTROL), V(() => {
    t === U.COMPLETE && n?.reset(), t === U.LOADING && n?.reset(), t === U.WAITING && n?.reset(), t === U.RUNNING && n?.init();
  }, [n, t]);
}
function lx(i) {
  const [n, t] = lA(), e = he((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  Fr(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function CI() {
  return lx(ce.PHASE_CHANGED);
}
function ux() {
  dx(ce);
  const { currentPhaseName: i } = CI(), n = {};
  n.skipOutsideOfCandidateSelection = i === Y.PASSIVE_LIVENESS, Bx(ce.DETECTION_CHANGED, n);
}
const fx = no.div`
  position: relative;
`, hx = no.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
function px(i) {
  const { cameraService: n } = it(), { handleAppStateChange: t, handleError: e } = JA();
  async function A() {
    if (n) {
      t(U.LOADING);
      try {
        await n.switchCamera(), t(U.RUNNING);
      } catch (r) {
        if (r instanceof Error) {
          e(y.fromCameraError(r));
          return;
        }
      }
    }
  }
  function o(r) {
    r.detail?.["instruction"] === qo.SWITCH_CAMERA && (r.stopImmediatePropagation(), A());
  }
  vr(i, o);
}
const mx = (i) => i === Sg.CONTROL ? !Sr() : !0;
function BI(i) {
  const { cameraService: n } = it(), { isCameraReady: t } = JA(), [e, A] = lA(), o = bA(() => {
    const c = t && n && n.isStreaming && n.getCameraSettings().facingMode;
    return c ? e ?? c === "user" : e ?? mx(i);
  }, [n, e, i, t]);
  function r() {
    A(e === void 0 ? !o : !e);
  }
  function g() {
    A(void 0);
  }
  function a(c) {
    switch (c.detail?.["instruction"]) {
      case qo.TOGGLE_MIRROR:
        r();
        break;
      case qo.SWITCH_CAMERA:
        g();
        break;
      default:
        return;
    }
  }
  vr(i, a);
  const I = {};
  return I.shouldCameraMirror = o, I;
}
function yx(i, n) {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  V(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, TE(i, A);
  }, [t, e, i]);
}
function Dx(i) {
  const { cameraResolution: n } = it(), { shouldCameraMirror: t } = BI(i.CONTROL);
  px(i.CONTROL);
  const e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, yx(i.CAMERA_PROPS_CHANGED, e), V(() => () => {
    at.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const wx = no.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, bx = no.div`
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
function kx() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Sx = xr(
  ({ detectionDetails: i, isImageMirror: n }, t) => kx() ? (console.log(i), /* @__PURE__ */ D(ne, { children: [
    /* @__PURE__ */ D(wx, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ D(bx, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function Gx({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = it(), { redfin: r } = Fn(), g = PA(null);
  if (V(() => {
    if (!g.current || !o || !i)
      return;
    g.current.width = o.width, g.current.height = o.height, Ec(g.current);
    const Q = yn(o), d = pc(o);
    fi(g.current, Q, "lime"), fi(g.current, d, "blue"), $Q(g.current, i.processedImage.detection), zt(g.current, i.processedImage.detection.leftEye.center, "cyan"), zt(g.current, i.processedImage.detection.rightEye.center, "cyan"), zt(g.current, i.processedImage.detection.mouth.center, "cyan"), AE(g.current, i.processedImage.detection, o);
    const f = e.edgeDistanceToImageShorterSideRatio;
    if (Lc(f)) {
      const h = Ks(
        o,
        f.min,
        Q
      );
      fi(g.current, h, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: a,
    detectionTime: I,
    processedImage: { detection: c, instructionCode: s, invalidValidators: C, isEscalated: E }
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
    "Invalid validators": C,
    "Component version": "8.0.2",
    "SAM version": n,
    "Escalated instruction": E,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ D(
    Sx,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function Nx() {
  return os();
}
function Rx() {
  const [i, n] = lA(void 0), t = he((A) => {
    n(A.detail);
  }, []);
  cI(ce.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const Fx = xr(function(n, t) {
  const { detectionData: e } = Rx(), { controller: A } = Nx(), { phaseThresholds: o, thresholdsPreset: r } = Es(), { appState: g } = JA(), { shouldCameraMirror: a } = BI(ce.CONTROL), I = A?.getCurrentDetectionName();
  if (I === void 0 || g !== U.RUNNING)
    return null;
  const c = I !== Y.PASSIVE_LIVENESS ? o[Y.LIVENESS_CHALLENGE] : o[I];
  return /* @__PURE__ */ D("div", { ref: t, children: /* @__PURE__ */ D(
    Gx,
    {
      detectionDetails: e?.detectionDetails,
      samVersion: _s,
      shouldCameraMirror: a,
      thresholds: c,
      thresholdsPreset: r
    }
  ) });
});
function vx({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function Wx(i, n) {
  const [t, e] = lA(!1), A = () => e((g) => !g), o = "" + t;
  Rt(() => {
    function g() {
      if (!i.current) return;
      const s = new MutationObserver(() => {
        A();
      }), C = {};
      return C.childList = !0, C.subtree = !0, C.attributes = !0, s.observe(i.current, C), s;
    }
    function a() {
      if (!i.current?.["parentElement"]) return;
      const s = new MutationObserver((E) => {
        E.find((Q) => {
          for (const d of Q.removedNodes)
            if (d !== n?.current && d === i.current)
              return !0;
        }) && A(), E.forEach((Q) => {
          Q.addedNodes.forEach((d) => {
            d !== n?.current && d.parentElement?.removeChild(d);
          });
        });
      }), C = {};
      return C.childList = !0, s.observe(i.current.parentElement, C), s;
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
function Lx({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = PA(null), { key: o } = Wx(A, t);
  return /* @__PURE__ */ D("div", { ref: A, style: Mx, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ D("defs", { children: [
      /* @__PURE__ */ D("mask", { id: "placeholder", children: [
        /* @__PURE__ */ D("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ D(
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
            /* @__PURE__ */ D("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ D("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
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
    /* @__PURE__ */ D("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function Ox({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = mc(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    Lx,
    {
      cutOut: i || /* @__PURE__ */ D(vx, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Jx({ debugLayerRef: i }) {
  const { appState: n } = JA(), { cameraResolution: t } = it(), { redfin: e } = JA(), { currentPhaseName: A } = CI(), o = t && e === mt.Lower && A === Y.PASSIVE_LIVENESS, r = n !== U.RUNNING;
  return o ? /* @__PURE__ */ D(
    Ox,
    {
      fullOverlay: r,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Ux({ children: i }) {
  const n = PA(null);
  return /* @__PURE__ */ D(ne, { children: [
    /* @__PURE__ */ D(Jx, { debugLayerRef: n }),
    i,
    /* @__PURE__ */ D(Fx, { ref: n })
  ] });
}
function Yx() {
  const { videoRef: i } = it(), { isCameraReady: n } = JA(), { shouldCameraMirror: t } = Dx(ce);
  return /* @__PURE__ */ D(Ux, { children: /* @__PURE__ */ D(
    hx,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: lc,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Tx(i, n) {
  V(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      PE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function Px({ children: i }) {
  const n = PA(null);
  return Tx(n, ce.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(fx, { ref: n, children: i });
}
function _x() {
  return ux(), /* @__PURE__ */ D(Px, { children: /* @__PURE__ */ D(Yx, {}) });
}
function Hx({ configuration: i }) {
  return i ? /* @__PURE__ */ D(cB, { target: i.styleTarget, children: /* @__PURE__ */ D(IQ, { configuration: i, children: /* @__PURE__ */ D(VE, { children: /* @__PURE__ */ D($c, { children: /* @__PURE__ */ D(
    nC,
    {
      transactionCountingToken: i.transactionCountingToken,
      transactionType: iC.MULTIRANGE,
      children: /* @__PURE__ */ D(
        Yc,
        {
          value: _E({
            onError: i.onError
          }),
          children: /* @__PURE__ */ D(Uc, { analytics: cx, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ D(VB, { cameraConfiguration: i.camera, children: /* @__PURE__ */ D(UE, { children: /* @__PURE__ */ D(MI, { children: /* @__PURE__ */ D(_x, {}) }) }) }) })
        }
      )
    }
  ) }) }) }) }) : null;
}
mI(Hx, "x-dot-multi-range-liveness", ["configuration"]);
