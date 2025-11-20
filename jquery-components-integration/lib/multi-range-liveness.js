var jc = Object.defineProperty;
var ma = (i) => {
  throw TypeError(i);
};
var qc = (i, n, t) => n in i ? jc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var p = (i, n, t) => qc(i, typeof n != "symbol" ? n + "" : n, t), ya = (i, n, t) => n.has(i) || ma("Cannot " + t);
var S = (i, n, t) => (ya(i, n, "read from private field"), t ? t.call(i) : n.get(i)), U = (i, n, t) => n.has(i) ? ma("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), W = (i, n, t, e) => (ya(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Yo, L, E0, ct, wa, x0, d0, l0, Vr, Ir, Cr, u0, fo = {}, f0 = [], Vc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Po = Array.isArray;
function be(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Zr(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function KA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > -1 * -9005 + -2 * 4599 + -15 * -13 && (r.children = arguments.length > 3 ? Yo.call(arguments, -379 * 15 + 4997 * 1 + 690) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return Co(i, r, e, A, null);
}
function Co(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++E0, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && L.vnode != null && L.vnode(r), r;
}
function Zc() {
  var i = {};
  return i.current = null, i;
}
function pe(i) {
  return i.children;
}
function fe(i, n) {
  this.props = i, this.context = n;
}
function Ht(i, n) {
  if (n == null) return i.__ ? Ht(i.__, i.__i + 1) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? Ht(i) : null;
}
function h0(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = -1 * 8583 + -5335 + -6959 * -2; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return h0(i);
  }
}
function Br(i) {
  (!i.__d && (i.__d = !0) && ct.push(i) && !Wn.__r++ || wa != L.debounceRendering) && ((wa = L.debounceRendering) || x0)(Wn);
}
function Wn() {
  for (var i, n, t, e, A, o, r, a = 3255 + 4733 * -2 + 2 * 3106; ct.length; ) ct.length > a && ct.sort(d0), i = ct.shift(), a = ct.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = be({}, e)).__v = e.__v + (-173 * -32 + 277 * -11 + 311 * -8), L.vnode && L.vnode(t), zr(n.__P, t, e, n.__n, n.__P.namespaceURI, -7 * -1157 + -1909 * -3 + -13794 & e.__u ? [A] : null, o, A ?? Ht(e), !!(93 * -67 + -4540 + 10803 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, y0(o, t, r), t.__e != A && h0(t)));
  Wn.__r = 6809 + 30 * 171 + -11939;
}
function p0(i, n, t, e, A, o, r, a, g, s, C) {
  var c, E, I, x, d, l, Q = e && e.__k || f0, f = n.length;
  for (g = zc(t, n, Q, g, f), c = 13278 + 13278 * -1; c < f; c++) (I = t.__k[c]) != null && (E = I.__i == -1 ? fo : Q[I.__i] || fo, I.__i = c, l = zr(i, I, E, A, o, r, a, g, s, C), x = I.__e, I.ref && E.ref != I.ref && (E.ref && Xr(E.ref, null, I), C.push(I.ref, I.__c || x, I)), d == null && x != null && (d = x), 27 * -308 + 11 * -139 + 9849 & I.__u || E.__k === I.__k ? g = m0(I, g, i) : typeof I.type == "function" && l !== void 0 ? g = l : x && (g = x.nextSibling), I.__u &= -7);
  return t.__e = d, g;
}
function zc(i, n, t, e, A) {
  var o, r, a, g, s, C = t.length, c = C, E = -5289 + -6823 * -1 + -2 * 767;
  for (i.__k = new Array(A), o = -1282 + 36 * -230 + 9562; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (g = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Co(null, r, null, null, null) : Po(r) ? Co(pe, { children: r }, null, null, null) : r.constructor == null && r.__b > -1061 + 1147 * 7 + -6968 ? Co(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (-9720 + -1 * -5113 + -24 * -192), a = null, (s = r.__i = Xc(r, t, g, c)) != -1 && (c--, (a = t[s]) && (a.__u |= 5058 + -2089 * -2 + -9234)), a == null || a.__v == null ? (s == -1 && (A > C ? E-- : A < C && E++), typeof r.type != "function" && (r.__u |= -2051 + 258 * -7 + 27 * 143)) : s != g && (s == g - (-653 * -11 + 2536 * 1 + -1 * 9718) ? E-- : s == g + (16 * 310 + -9679 * -1 + -13 * 1126) ? E++ : (s > g ? E-- : E++, r.__u |= 1 * 4833 + -3 * -1617 + -4 * 2420))) : i.__k[o] = null;
  if (c)
    for (o = -354 * 19 + -9360 + 16086; o < C; o++) (a = t[o]) != null && 1 * 8287 + -3920 + -4367 == (-4799 + 1 * 4801 & a.__u) && (a.__e == e && (e = Ht(a)), D0(a, a));
  return e;
}
function m0(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 0; e && A < e.length; A++) e[A] && (e[A].__ = i, n = m0(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = Ht(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && 7386 + -62 * 119 == n.nodeType);
  return n;
}
function He(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (Po(i) ? i.some(function(t) {
    He(t, n);
  }) : n.push(i)), n;
}
function Xc(i, n, t, e) {
  var A, o, r = i.key, a = i.type, g = n[t];
  if (g === null && i.key == null || g && r == g.key && a == g.type && 5333 * 1 + 6623 + 61 * -196 == (-9282 + 4 * 2321 & g.__u)) return t;
  if (e > (g != null && (182 + -2 * 4307 + 2 * 4217 & g.__u) == 0 ? -6 * -12 + 1 * -7483 + -109 * -68 : 1 * -5471 + -4145 + -9616 * -1)) for (A = t - (-2083 * -2 + 9242 + 327 * -41), o = t + (-1 * 829 + -5273 * 1 + 6103); A >= 5996 + -2 * 2998 || o < n.length; ) {
    if (A >= 13635 + -4545 * 3) {
      if ((g = n[A]) && -22 * 194 + 5886 + 1618 * -1 == (3426 + -5 * 154 + -1327 * 2 & g.__u) && r == g.key && a == g.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((g = n[o]) && 177 * -21 + -1087 * -4 + -631 * 1 == (2 & g.__u) && r == g.key && a == g.type) return o;
      o++;
    }
  }
  return -1;
}
function Da(i, n, t) {
  n[2036 + -5333 * 1 + -21 * -157] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || Vc.test(n) ? t : t + "px";
}
function qo(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Da(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Da(i.style, n, t[n]);
    }
  else if (n[30 * -46 + -8605 + -9985 * -1] == "o" && n[56 * 21 + 1164 + -2339] == "n") o = n != (n = n.replace(l0, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(-46 * -167 + 7217 + -14897) : n.slice(-6940 + -2 * -3471), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Vr, i.addEventListener(n, o ? Cr : Ir, o)) : i.removeEventListener(n, o ? Cr : Ir, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[-1441 * 5 + -4742 * -2 + -2275] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -7038 + 95 * -83 + 14924 == t ? "" : t));
  }
}
function ba(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Vr++;
      else if (n.t < t.u) return;
      return t(L.event ? L.event(n) : n);
    }
  };
}
function zr(i, n, t, e, A, o, r, a, g, s) {
  var C, c, E, I, x, d, l, Q, f, m, y, G, b, w, F, M, P, _ = n.type;
  if (n.constructor != null) return null;
  3 * 3255 + -4 * 978 + -5725 & t.__u && (g = !!(9657 + -1 * 4873 + -99 * 48 & t.__u), o = [a = n.__e = t.__e]), (C = L.__b) && C(n);
  A: if (typeof _ == "function") try {
    if (Q = n.props, f = "prototype" in _ && _.prototype.render, m = (C = _.contextType) && e[C.__c], y = C ? m ? m.props.value : C.__ : e, t.__c ? l = (c = n.__c = t.__c).__ = c.__E : (f ? n.__c = c = new _(Q, y) : (n.__c = c = new fe(Q, y), c.constructor = _, c.render = AI), m && m.sub(c), c.props = Q, c.state || (c.state = {}), c.context = y, c.__n = e, E = c.__d = !(-1958 + 197 * -43 + 10429), c.__h = [], c._sb = []), f && c.__s == null && (c.__s = c.state), f && _.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = be({}, c.__s)), be(c.__s, _.getDerivedStateFromProps(Q, c.__s))), I = c.props, x = c.state, c.__v = n, E) f && _.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), f && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (f && _.getDerivedStateFromProps == null && Q !== I && c.componentWillReceiveProps != null && c.componentWillReceiveProps(Q, y), !c.__e && c.shouldComponentUpdate != null && !(-1951 * -2 + -8301 + -176 * -25) === c.shouldComponentUpdate(Q, c.__s, y) || n.__v == t.__v) {
        for (n.__v != t.__v && (c.props = Q, c.state = c.__s, c.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(X) {
          X && (X.__ = n);
        }), G = 7467 + -1 * -8438 + 3181 * -5; G < c._sb.length; G++) c.__h.push(c._sb[G]);
        c._sb = [], c.__h.length && r.push(c);
        break A;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(Q, c.__s, y), f && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(I, x, d);
      });
    }
    if (c.context = y, c.props = Q, c.__P = i, c.__e = !(-9028 + -11 * -578 + 2671), b = L.__r, w = -1 * -3891 + -40 + -3851 * 1, f) {
      for (c.state = c.__s, c.__d = !(-8895 + -556 * -16), b && b(n), C = c.render(c.props, c.state, c.context), F = 1 * -6281 + 6487 + 103 * -2; F < c._sb.length; F++) c.__h.push(c._sb[F]);
      c._sb = [];
    } else do
      c.__d = !(1361 * -1 + 1502 + -140), b && b(n), C = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++w < 25);
    c.state = c.__s, c.getChildContext != null && (e = be(be({}, e), c.getChildContext())), f && !E && c.getSnapshotBeforeUpdate != null && (d = c.getSnapshotBeforeUpdate(I, x)), M = C, C != null && C.type === pe && C.key == null && (M = w0(C.props.children)), a = p0(i, Po(M) ? M : [M], n, t, e, A, o, r, a, g, s), c.base = n.__e, n.__u &= -(-1 * 9411 + -364 * 7 + 4 * 3030), c.__h.length && r.push(c), l && (c.__E = c.__ = null);
  } catch (X) {
    if (n.__v = null, g || o != null)
      if (X.then) {
        for (n.__u |= g ? -1493 + -717 * -5 + -1932 : 229 * -17 + -2341 * -1 + -560 * -3; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
        o[o.indexOf(a)] = null, n.__e = a;
      } else
        for (P = o.length; P--; ) Zr(o[P]);
    else n.__e = t.__e, n.__k = t.__k;
    L.__e(X, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : a = n.__e = $c(t.__e, n, t, e, A, o, r, g, s);
  return (C = L.diffed) && C(n), -4038 + -1 * 5821 + 3 * 3329 & n.__u ? void 0 : a;
}
function y0(i, n, t) {
  for (var e = 1123 * -1 + -1289 * 1 + 9 * 268; e < t.length; e++) Xr(t[e], t[++e], t[++e]);
  L.__c && L.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      L.__e(o, A.__v);
    }
  });
}
function w0(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 102 * 7 + -67 + -647 ? i : Po(i) ? i.map(w0) : be({}, i);
}
function $c(i, n, t, e, A, o, r, a, g) {
  var s, C, c, E, I, x, d, l = t.props, Q = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = 1 * -1727 + 1191 * -1 + 1459 * 2; s < o.length; s++) if ((I = o[s]) && "setAttribute" in I == !!f && (f ? I.localName == f : I.nodeType == 3)) {
      i = I, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(Q);
    i = document.createElementNS(A, f, Q.is && Q), a && (L.__m && L.__m(n, o), a = !1), o = null;
  }
  if (f == null) l === Q || a && i.data == Q || (i.data = Q);
  else {
    if (o = o && Yo.call(i.childNodes), l = t.props || fo, !a && o != null)
      for (l = {}, s = -41 * 73 + 1344 + -97 * -17; s < i.attributes.length; s++) l[(I = i.attributes[s]).name] = I.value;
    for (s in l) if (I = l[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") c = I;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        qo(i, s, null, I, A);
      }
    }
    for (s in Q) I = Q[s], s == "children" ? E = I : s == "dangerouslySetInnerHTML" ? C = I : s == "value" ? x = I : s == "checked" ? d = I : a && typeof I != "function" || l[s] === I || qo(i, s, I, l[s], A);
    if (C) a || c && (C.__html == c.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (c && (i.innerHTML = ""), p0(n.type == "template" ? i.content : i, Po(E) ? E : [E], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[0] : t.__k && Ht(t, 3729 + -25 * 199 + 14 * 89), a, g), o != null)
      for (s = o.length; s--; ) Zr(o[s]);
    a || (s = "value", f == "progress" && x == null ? i.removeAttribute("value") : x != null && (x !== i[s] || f == "progress" && !x || f == "option" && x != l[s]) && qo(i, s, x, l[s], A), s = "checked", d != null && d != i[s] && qo(i, s, d, l[s], A));
  }
  return i;
}
function Xr(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    L.__e(A, t);
  }
}
function D0(i, n, t) {
  var e, A;
  if (L.unmount && L.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || Xr(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      L.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 0; A < e.length; A++) e[A] && D0(e[A], n, t || typeof i.type != "function");
  t || Zr(i.__e), i.__c = i.__ = i.__e = void 0;
}
function AI(i, n, t) {
  return this.constructor(i, t);
}
function tt(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), L.__ && L.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], zr(n, i = (!e && t || n).__k = KA(pe, null, [i]), A || fo, fo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Yo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), y0(o, i, r);
}
function $r(i, n) {
  tt(i, n, $r);
}
function Aa(i, n, t) {
  var e, A, o, r, a = be({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > 8620 + -571 * 5 + 113 * -51 && (a.children = arguments.length > 59 * 20 + -1696 + 519 ? Yo.call(arguments, 2) : t), Co(i.type, a, e || i.key, A || i.ref, null);
}
function _e(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, Br(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + u0++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Yo = f0.slice, L = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, E0 = 0, fe.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = be({}, this.state), typeof i == "function" && (i = i(be({}, t), this.props)), i && be(t, i), i != null && this.__v && (n && this._sb.push(n), Br(this));
}, fe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Br(this));
}, fe.prototype.render = pe, ct = [], x0 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, d0 = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Wn.__r = -1 * -5027 + -387 + -4640, l0 = /(PointerCapture)$|Capture$/i, Vr = 2 * -1795 + -2 * 1456 + 6502, Ir = ba(!1), Cr = ba(!0), u0 = 1363 + -8 * -342 + 1 * -4099;
function ea() {
  return (ea = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 139 * 59 + -2459 * 1 + -5741; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var eI = ["context", "children"];
function tI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, a = {}, g = Object.keys(e);
    for (r = -1978 + -8233 * -1 + -6255; r < g.length; r++) A.indexOf(o = g[r]) >= -1781 * 2 + 1166 + 2396 || (a[o] = e[o]);
    return a;
  }(i, eI);
  return Aa(n, t);
}
function oI() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = KA(tI, ea({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (2 * -1639 + -8271 + 152 * 76 === e.nodeType) return e.data;
    if (-1141 + -73 * 97 + 8223 !== e.nodeType) return null;
    var o = [], r = {}, a = -1 * 9204 + 2012 + 7192, g = e.attributes, s = e.childNodes;
    for (a = g.length; a--; ) g[a].name !== "slot" && (r[g[a].name] = g[a].value, r[b0(g[a].name)] = g[a].value);
    for (a = s.length; a--; ) {
      var C = t(s[a], null), c = s[a].slot;
      c ? r[c] = KA(ka, { name: c }, C) : o[a] = C;
    }
    var E = A ? KA(ka, null, o) : o;
    return KA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? $r : tt)(this._vdom, this._root);
}
function b0(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function nI(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[b0(i)] = t, this._vdom = Aa(this._vdom, e), tt(this._vdom, this._root);
  }
}
function iI() {
  tt(this._vdom = null, this._root);
}
function ka(i, n) {
  var t = this;
  return KA("slot", ea({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function rI(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = oI, A.prototype.attributeChangedCallback = nI, A.prototype.disconnectedCallback = iI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var aI = 1 * 8878 + -1733 + 1 * -7145;
function k(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var s = {};
  s.type = i, s.props = g, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --aI, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var C = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) g[a] === void 0 && (g[a] = r[a]);
  return L.vnode && L.vnode(C), C;
}
class D extends Error {
  constructor(t, e) {
    super(t);
    p(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof D) return t;
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
    return new D(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof D) return t;
    const e = "An unexpected error has occurred";
    return new D(e);
  }
}
const gn = {};
gn.CONTINUE_DETECTION = "continue-detection", gn.SWITCH_CAMERA = "switch-camera", gn.TOGGLE_MIRROR = "toggle-mirror";
const Qr = gn;
var k0 = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(k0 || {}), gI = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(gI || {}), sI = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(sI || {}), cI = ((i) => (i.CONTROL = "smile-auto-capture:control", i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(cI || {}), II = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(II || {}), CI = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(CI || {});
const ye = {};
ye.DETECTION_CHANGED = "multi-range-auto-capture:detection-changed", ye.CAMERA_PROPS_CHANGED = "multi-range-auto-capture:camera-props-changed", ye.CONTROL = "multi-range-auto-capture:control", ye.PHASE_CHANGED = "multi-range-auto-capture:phase-changed", ye.INSTRUCTION_CHANGED = "multi-range-auto-capture:instruction-changed", ye.INSTRUCTION_ESCALATED = "multi-range-auto-capture:instruction-escalated", ye.VIDEO_ELEMENT_SIZE = "multi-range-auto-capture:video-element-size", ye.CHALLENGE_VALUE_CHANGED = "multi-range-auto-capture:challenge-value-changed", ye.STATE_CHANGED = "multi-range-auto-capture:state-changed";
const Ke = ye, Me = {};
Me.CANDIDATE_SELECTION = "candidate_selection", Me.DOCUMENT_CENTERING = "document_centering", Me.DOCUMENT_NOT_PRESENT = "document_not_present", Me.DOCUMENT_TOO_FAR = "document_too_far", Me.SHARPNESS_TOO_LOW = "sharpness_too_low", Me.BRIGHTNESS_TOO_LOW = "brightness_too_low", Me.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Me.HOTSPOTS_PRESENT = "hotspots_present";
const it = Me, rt = {};
rt.isPresent = it.DOCUMENT_NOT_PRESENT, rt.isNotSmall = it.DOCUMENT_TOO_FAR, rt.isNotOutOfBounds = it.DOCUMENT_CENTERING, rt.isSharp = it.SHARPNESS_TOO_LOW, rt.isNotDim = it.BRIGHTNESS_TOO_LOW, rt.isNotBright = it.BRIGHTNESS_TOO_HIGH, rt.noHotspots = it.HOTSPOTS_PRESENT;
const Er = {};
Er.FRONT = "user", Er.REAR = "environment";
const ta = Er, Rt = {};
Rt.LOADING = "LOADING", Rt.ERROR = "ERROR", Rt.WAITING = "WAITING", Rt.RUNNING = "RUNNING", Rt.COMPLETE = "COMPLETE";
const H = Rt, S0 = {};
S0.EYE_NOT_PRESENT = "eye_not_present";
const Mn = S0, TA = {};
TA.CANDIDATE_SELECTION = "candidate_selection", TA.FACE_TOO_CLOSE = "face_too_close", TA.FACE_TOO_FAR = "face_too_far", TA.FACE_CENTERING = "face_centering", TA.FACE_NOT_PRESENT = "face_not_present", TA.SHARPNESS_TOO_LOW = "sharpness_too_low", TA.BRIGHTNESS_TOO_LOW = "brightness_too_low", TA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", TA.DEVICE_PITCHED = "device_pitched", TA.LEFT_EYE_NOT_PRESENT = "left_" + Mn.EYE_NOT_PRESENT, TA.RIGHT_EYE_NOT_PRESENT = "right_" + Mn.EYE_NOT_PRESENT, TA.MOUTH_NOT_PRESENT = "mouth_not_present", TA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", TA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const HA = TA, Ae = {};
Ae.isPresent = HA.FACE_NOT_PRESENT, Ae.isNotPitched = HA.DEVICE_PITCHED, Ae.isNotSmall = HA.FACE_TOO_FAR, Ae.isNotLarge = HA.FACE_TOO_CLOSE, Ae.isNotOutOfBounds = HA.FACE_CENTERING, Ae.isNotDim = HA.BRIGHTNESS_TOO_LOW, Ae.isNotBright = HA.BRIGHTNESS_TOO_HIGH, Ae.isSharp = HA.SHARPNESS_TOO_LOW, Ae.isLeftEyePresent = HA.LEFT_EYE_NOT_PRESENT, Ae.isRightEyePresent = HA.RIGHT_EYE_NOT_PRESENT, Ae.isMouthPresent = HA.MOUTH_NOT_PRESENT, Ae.isMouthScoreNotTooHigh = HA.MOUTH_SCORE_TOO_HIGH, Ae.isMouthScoreNotTooLow = HA.MOUTH_SCORE_TOO_LOW;
var BI = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(BI || {});
const Ri = { ...HA };
Ri.SMILE = "smile", Ri.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", Ri.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const de = {};
de.CANDIDATE_SELECTION = "candidate_selection", de.PALM_CENTERING = "palm_centering", de.PALM_NOT_PRESENT = "palm_not_present", de.PALM_TOO_FAR = "palm_too_far", de.PALM_TOO_CLOSE = "palm_too_close", de.SHARPNESS_TOO_LOW = "sharpness_too_low", de.BRIGHTNESS_TOO_LOW = "brightness_too_low", de.BRIGHTNESS_TOO_HIGH = "brightness_too_high", de.DEVICE_PITCHED = "device_pitched", de.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const Ne = de, Re = {};
Re.isPresent = Ne.PALM_NOT_PRESENT, Re.isNotPitched = Ne.DEVICE_PITCHED, Re.isNotSmall = Ne.PALM_TOO_FAR, Re.isNotOutOfBounds = Ne.PALM_CENTERING, Re.isNotDim = Ne.BRIGHTNESS_TOO_LOW, Re.isNotBright = Ne.BRIGHTNESS_TOO_HIGH, Re.isSharp = Ne.SHARPNESS_TOO_LOW, Re.isNotLarge = Ne.PALM_TOO_CLOSE, Re.isTemplateExtractionQualityHighEnough = Ne.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
const Vo = {};
Vo.TOP_LEFT = "TOP_LEFT", Vo.TOP_RIGHT = "TOP_RIGHT", Vo.BOTTOM_RIGHT = "BOTTOM_RIGHT", Vo.BOTTOM_LEFT = "BOTTOM_LEFT";
const ge = {};
ge.CANDIDATE_SELECTION = "candidate_selection", ge.FACE_TOO_CLOSE = "face_too_close", ge.FACE_TOO_FAR = "face_too_far", ge.FACE_CENTERING = "face_centering", ge.FACE_NOT_PRESENT = "face_not_present", ge.SHARPNESS_TOO_LOW = "sharpness_too_low", ge.BRIGHTNESS_TOO_LOW = "brightness_too_low", ge.BRIGHTNESS_TOO_HIGH = "brightness_too_high", ge.DEVICE_PITCHED = "device_pitched", ge.LEFT_EYE_NOT_PRESENT = "left_" + Mn.EYE_NOT_PRESENT, ge.RIGHT_EYE_NOT_PRESENT = "right_" + Mn.EYE_NOT_PRESENT;
const OA = ge, le = {};
le.isPresent = OA.FACE_NOT_PRESENT, le.isNotPitched = OA.DEVICE_PITCHED, le.isNotSmall = OA.FACE_TOO_FAR, le.isNotLarge = OA.FACE_TOO_CLOSE, le.isNotOutOfBounds = OA.FACE_CENTERING, le.isNotDim = OA.BRIGHTNESS_TOO_LOW, le.isNotBright = OA.BRIGHTNESS_TOO_HIGH, le.isSharp = OA.SHARPNESS_TOO_LOW, le.isLeftEyePresent = OA.LEFT_EYE_NOT_PRESENT, le.isRightEyePresent = OA.RIGHT_EYE_NOT_PRESENT;
const Sa = le, gt = {};
gt.ZERO = "ZERO", gt.ONE = "ONE", gt.TWO = "TWO", gt.THREE = "THREE", gt.FOUR = "FOUR", gt.FIVE = "FIVE";
const te = gt;
var ot, q, Fi, Ga, Kt = 14281 + -14281 * 1, G0 = [], V = L, Na = V.__b, Ra = V.__r, Fa = V.diffed, va = V.__c, Wa = V.unmount, Ma = V.__;
function Ao(i, n) {
  V.__h && V.__h(q, i, Kt || n), Kt = -4695 * 1 + -3882 + 8577;
  var t = {};
  t.__ = [], t.__h = [];
  var e = q.__H || (q.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function xA(i) {
  return Kt = 1, oa(F0, i);
}
function oa(i, n, t) {
  var e = Ao(ot++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : F0(void 0, n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], s = e.t(g, a);
    g !== s && (e.__N = [s, e.__[-883 * 1 + 4919 * -2 + 10722]], e.__c.setState({}));
  }], e.__c = q, !q.__f)) {
    var A = function(a, g, s) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (C.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, a, g, s);
      var c = e.__c.props !== a;
      return C.forEach(function(E) {
        if (E.__N) {
          var I = E.__[0];
          E.__ = E.__N, E.__N = void 0, I !== E.__[0] && (c = !0);
        }
      }), o && o.call(this, a, g, s) || c;
    };
    q.__f = !0;
    var o = q.shouldComponentUpdate, r = q.componentWillUpdate;
    q.componentWillUpdate = function(a, g, s) {
      if (this.__e) {
        var C = o;
        o = void 0, A(a, g, s), o = C;
      }
      r && r.call(this, a, g, s);
    }, q.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function z(i, n) {
  var t = Ao(ot++, 3);
  !V.__s && na(t.__H, n) && (t.__ = i, t.u = n, q.__H.__h.push(t));
}
function eo(i, n) {
  var t = Ao(ot++, 4);
  !V.__s && na(t.__H, n) && (t.__ = i, t.u = n, q.__h.push(t));
}
function ne(i) {
  return Kt = 5 * 1513 + 2462 + -10022, NA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function N0(i, n, t) {
  Kt = -7759 * 1 + 8622 * 1 + -857, eo(function() {
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
function NA(i, n) {
  var t = Ao(ot++, 7);
  return na(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function Se(i, n) {
  return Kt = -6579 + 1791 * -2 + -10169 * -1, NA(function() {
    return i;
  }, n);
}
function me(i) {
  var n = q.context[i.__c], t = Ao(ot++, -8014 + 3730 * -2 + 15483);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(q)), n.props.value) : i.__;
}
function Ln(i, n) {
  V.useDebugValue && V.useDebugValue(n ? n(i) : i);
}
function R0() {
  var i = Ao(ot++, 11);
  if (!i.__) {
    for (var n = q.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [28 * -43 + -118 * 5 + -78 * -23, -3716 + -2 * 1214 + -1536 * -4]);
    i.__ = "P" + t[-11276 + 5638 * 2] + "-" + t[-1 * 3281 + 9270 + -5988]++;
  }
  return i.__;
}
function QI() {
  for (var i; i = G0.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(sn), i.__H.__h.forEach(xr), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], V.__e(n, i.__v);
  }
}
V.__b = function(i) {
  q = null, Na && Na(i);
}, V.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Ma && Ma(i, n);
}, V.__r = function(i) {
  Ra && Ra(i), ot = 2634 * -2 + 9111 + -3843;
  var n = (q = i.__c).__H;
  n && (Fi === q ? (n.__h = [], q.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(sn), n.__h.forEach(xr), n.__h = [], ot = 2 * 3649 + -3079 * 3 + 1939 * 1)), Fi = q;
}, V.diffed = function(i) {
  Fa && Fa(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (3956 + 7179 * -1 + -124 * -26 !== G0.push(n) && Ga === V.requestAnimationFrame || ((Ga = V.requestAnimationFrame) || EI)(QI)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Fi = q = null;
}, V.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(sn), t.__h = t.__h.filter(function(e) {
        return !e.__ || xr(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], V.__e(e, t.__v);
    }
  }), va && va(i, n);
}, V.unmount = function(i) {
  Wa && Wa(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      sn(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && V.__e(n, t.__v));
};
var La = typeof requestAnimationFrame == "function";
function EI(i) {
  var n, t = function() {
    clearTimeout(e), La && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  La && (n = requestAnimationFrame(t));
}
function sn(i) {
  var n = q, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), q = n;
}
function xr(i) {
  var n = q;
  i.__c = i.__(), q = n;
}
function na(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function F0(i, n) {
  return typeof n == "function" ? n(i) : n;
}
const li = _e(void 0);
li.displayName = "AppStateContext";
function ie() {
  const i = me(li);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
class v0 extends fe {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new D("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === H.ERROR ? null : this.props.children;
  }
}
p(v0, "contextType", li);
function W0(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function dr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function M0(i, n) {
  var t = n(), e = xA({ t: { __: t, u: n } }), A = e[0].t, o = e[-7860 + -1422 * 7 + 17815];
  return eo(function() {
    A.__ = t, A.u = n, vi(A) && o({ t: A });
  }, [i, t, n]), z(function() {
    return vi(A) && o({ t: A }), i(function() {
      vi(A) && o({ t: A });
    });
  }, [i]), t;
}
function vi(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-3146 + 86 * 19 + -168 * -9 !== n || (4457 * -2 + 9350 + 145 * -3) / n == (84 * -87 + -1923 + 9232) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function L0(i) {
  i();
}
function O0(i) {
  return i;
}
function J0() {
  return [!1, L0];
}
var U0 = eo;
function lr(i, n) {
  this.props = i, this.context = n;
}
function xI(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : dr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, KA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(lr.prototype = new fe()).isPureReactComponent = !0, lr.prototype.shouldComponentUpdate = function(i, n) {
  return dr(this.props, i) || dr(this.state, n);
};
var Oa = L.__b;
L.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Oa && Oa(i);
};
var dI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 8101 + -9743 * 1 + 3 * 1851;
function ia(i) {
  function n(t) {
    var e = W0({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = dI, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Ja = function(i, n) {
  return i == null ? null : He(He(i).map(n));
}, lI = { map: Ja, forEach: Ja, count: function(i) {
  return i ? He(i).length : -361 + -361 * -1;
}, only: function(i) {
  var n = He(i);
  if (-9106 + 1 * 4757 + -870 * -5 !== n.length) throw "Children.only";
  return n[7339 + 1 * -7339];
}, toArray: He }, uI = L.__e;
L.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  uI(i, n, t, e);
};
var Ua = L.unmount;
function Y0(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = W0({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Y0(e, n, t);
  })), i;
}
function P0(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return P0(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function cn() {
  this.__u = 3 + 31 * -59 + 166 * 11, this.o = null, this.__b = null;
}
function T0(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function fI(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return KA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function ao() {
  this.i = null, this.l = null;
}
L.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && -961 * 7 + -2 * -3659 + -1 * 559 & i.__u && (i.type = null), Ua && Ua(i);
}, (cn.prototype = new fe()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = T0(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[-1 * -4846 + 4621 * -1 + 45 * -5] = P0(g, g.__c.__P, g.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || -5386 * -1 + 165 * -49 + -2731 * -1 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-1 * -4051 + -9739 + 5688] }), i.then(r, r);
}, cn.prototype.componentWillUnmount = function() {
  this.o = [];
}, cn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[717 * 1 + 3657 + -4374].__c;
      this.__v.__k[-2 * -2293 + -13 * -170 + -6796] = Y0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && KA(pe, null, i.fallback);
  return A && (A.__u &= -33), [KA(pe, null, n.__a ? null : i.children), A];
};
var Ya = function(i, n, t) {
  if (++t[5346 * 1 + -17 * -49 + -6178] === t[1691 * 1 + 5643 * 1 + -2 * 3667] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -11452 + -395 * -29; ) t.pop()();
    if (t[1899 + 7 * 567 + -1 * 5867] < t[7 * 369 + 1091 * -1 + -1492]) break;
    i.i = t = t[-2 * 3539 + -1875 + 8955];
  }
};
function hI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function pI(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    tt(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, appendChild: function(r) {
      this.childNodes.push(r), n.h.appendChild(r);
    }, insertBefore: function(r, a) {
      this.childNodes.push(r), n.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 613 * 1 + -558 * -4 + -2844, -363 + -926 * 1 + 1290), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, tt(KA(hI, o, i.__v), n.v);
}
function mI(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = KA(pI, t);
  return e.containerInfo = n, e;
}
(ao.prototype = new fe()).__a = function(i) {
  var n = this, t = T0(n.__v), e = n.l.get(i);
  return e[151 * -32 + -8 * 769 + -2746 * -4]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Ya(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, ao.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = He(i.children);
  i.revealOrder && i.revealOrder[1 * 8208 + 454 + -8662] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-6020 + 669 * 9, -4602 + -1 * -2083 + 11 * 229, this.i]);
  return i.children;
}, ao.prototype.componentDidUpdate = ao.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Ya(i, t, n);
  });
};
var H0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 1 * -11812 + -3679 + 129 * 586, yI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, wI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, DI = /[A-Z0-9]/g, bI = typeof document < "u", kI = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function SI(i, n, t) {
  return n.__k == null && (n.textContent = ""), tt(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function GI(i, n, t) {
  return $r(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
fe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(fe.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Pa = L.event;
function NI() {
}
function RI() {
  return this.cancelBubble;
}
function FI() {
  return this.defaultPrevented;
}
L.event = function(i) {
  return Pa && (i = Pa(i)), i.persist = NI, i.isPropagationStopped = RI, i.isDefaultPrevented = FI, i.nativeEvent = i;
};
var In = {};
In.enumerable = !1, In.configurable = !0, In.get = function() {
  return this.class;
};
var ra, vI = In, Ta = L.vnode;
L.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var a = t[r];
      if (!(r === "value" && "defaultValue" in t && a == null || bI && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var g = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && a === !0 ? a = "" : g === "translate" && a === "no" ? a = !1 : g[-2591 + 6817 * -1 + 9408] === "o" && g[-17394 + 2485 * 7] === "n" ? g === "ondoubleclick" ? r = "ondblclick" : g !== "onchange" || e !== "input" && e !== "textarea" || kI(t.type) ? g === "onfocus" ? r = "onfocusin" : g === "onblur" ? r = "onfocusout" : wI.test(r) && (r = g) : g = r = "oninput" : o && yI.test(r) ? r = r.replace(DI, "-$&").toLowerCase() : a === null && (a = void 0), g === "oninput" && A[r = g] && (r = "oninputCapture"), A[r] = a;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = He(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = He(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", vI)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = H0, Ta && Ta(i);
};
var Ha = L.__r;
L.__r = function(i) {
  Ha && Ha(i), ra = i.__c;
};
var Ka = L.diffed;
L.diffed = function(i) {
  Ka && Ka(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), ra = null;
};
var hA = {};
hA.readContext = function(i) {
  return ra.__n[i.__c].props.value;
}, hA.useCallback = Se, hA.useContext = me, hA.useDebugValue = Ln, hA.useDeferredValue = O0, hA.useEffect = z, hA.useId = R0, hA.useImperativeHandle = N0, hA.useInsertionEffect = U0, hA.useLayoutEffect = eo, hA.useMemo = NA, hA.useReducer = oa, hA.useRef = ne, hA.useState = xA, hA.useSyncExternalStore = M0, hA.useTransition = J0;
var K0 = {};
K0.current = hA;
var _0 = {};
_0.ReactCurrentDispatcher = K0;
var WI = _0;
function MI(i) {
  return KA.bind(null, i);
}
function ui(i) {
  return !!i && i.$$typeof === H0;
}
function LI(i) {
  return ui(i) && i.type === pe;
}
function OI(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function JI(i) {
  return ui(i) ? Aa.apply(null, arguments) : i;
}
function UI(i) {
  return !!i.__k && (tt(null, i), !0);
}
function YI(i) {
  return i && (i.base || 1 * -6491 + 3813 + 2679 === i.nodeType && i) || null;
}
var PI = function(i, n) {
  return i(n);
}, TI = function(i, n) {
  return i(n);
}, HI = pe, KI = ui, pt = { useState: xA, useId: R0, useReducer: oa, useEffect: z, useLayoutEffect: eo, useInsertionEffect: U0, useTransition: J0, useDeferredValue: O0, useSyncExternalStore: M0, startTransition: L0, useRef: ne, useImperativeHandle: N0, useMemo: NA, useCallback: Se, useContext: me, useDebugValue: Ln, version: "18.3.1", Children: lI, render: SI, hydrate: GI, unmountComponentAtNode: UI, createPortal: mI, createElement: KA, createContext: _e, createFactory: MI, cloneElement: JI, createRef: Zc, Fragment: pe, isValidElement: ui, isElement: KI, isFragment: LI, isMemo: OI, findDOMNode: YI, Component: fe, PureComponent: lr, memo: xI, forwardRef: ia, flushSync: TI, unstable_batchedUpdates: PI, StrictMode: HI, Suspense: cn, SuspenseList: ao, lazy: fI, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: WI };
function _a(i, n, t, e, A) {
  return pA(t - 798, n);
}
(function(i, n) {
  function t(a, g, s, C, c) {
    return pA(C - 129, c);
  }
  function e(a, g, s, C, c) {
    return pA(g - -404, s);
  }
  function A(a, g, s, C, c) {
    return pA(g - -685, a);
  }
  function o(a, g, s, C, c) {
    return pA(C - -477, c);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(e(-263, -253, "m)sw", -242, -238)) / 1 * (parseInt(o(-332, -336, -330, -338, "x%Bt")) / 2) + -parseInt(o(-355, -335, -337, -352, "#$^]")) / 3 + -parseInt(o(-350, -347, -334, -333, "czRC")) / 4 + parseInt(A("oVac", -556, -542, -554, -548)) / 5 + -parseInt(t(254, 253, 272, 256, "8w3h")) / 6 + -parseInt(A("NmAJ", -531, -515, -545, -540)) / 7 * (-parseInt(t(262, 265, 266, 266, "lOfk")) / 8) + parseInt(e(-252, -268, "YY8K", -259, -279)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(On, 671505 + 155707 * -2);
function On() {
  const i = ["hCkAimocWPq", "bSoImh3cSh3dUXpdRSoiWOBcI8o1tq", "eNGTwmk+W7BdSwZcOCopkSkGxG", "imo9tbNcNgtdHq", "W4nCiG", "W4JcTx8lW5G", "WQhdUgLYWOmnma", "WPVcVuKxW4i", "W4OJc0WrWPVdRmoAWPNcG8kFW7zv", "W5RdQJTiWPu3ESo9WRDEEtLE", "jan2WP9nW6NcUSoVWQ1rW6W0W7y", "WRewWQ3cHsZdOxm", "lmkraCovWPa", "h8ooW6xcQCofWQm/w0frW6VdLmoW", "rmodW4CsWRq", "yKJdHN3cGSo4WP9DWOmcWOqTnG", "wJaWpSkp", "wmoaW5RdV8kgW74iWPHVCdfbFW", "bCoJn3RcVhJdTNxdNCo+WQpcHmof", "ttWNBSku", "W5hdRdLiWPG3oCoWWRv6Ad0", "W45oiqJdSW", "qCoBWP7cHuG", "dMFcSSkXW40", "W4KOdeSuWPtdRmkEWQ/cHSk0W7D1gW", "mmoKW4esWRlcMtW", "vY0Rj8kn", "oSkJWPpdRtafWOCFW7lcSs8h", "W7ldN8o9emkW", "xIZdISoPWPq0WQddUrBdI8k9WQFcRq", "c3FcJ8kGW4W", "yve7W58", "WQpcGSkIu8oLoCoMW68cW6xcKvNdKG"];
  return On = function() {
    return i;
  }, On();
}
function _I(i, n, t, e, A) {
  return pA(n - 250, A);
}
function ja(i, n, t, e, A) {
  return pA(e - -225, i);
}
const Jn = _e(void 0);
function qa(i, n, t, e, A) {
  return pA(A - -566, e);
}
function pA(i, n) {
  const t = On();
  return pA = function(e, A) {
    e = e - (509 * 12 + 34 * -284 + 3672);
    let o = t[e];
    if (pA.ZsbHkR === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      pA.EAtOKm = C, i = arguments, pA.ZsbHkR = !0;
    }
    const a = t[-3506 * -1 + -2 * -3479 + -10464], g = e + a, s = i[g];
    return s ? o = s : (pA.wPiElU === void 0 && (pA.wPiElU = !0), o = pA.EAtOKm(o, A), i[g] = o), o;
  }, pA(i, n);
}
function jI(i, n, t, e, A) {
  return pA(i - 721, A);
}
Jn[ja("9qni", -81, -92, -97) + _a(917, "B9Xj", 933) + "e"] = ja("lOfk", -99, -114, -99) + _a(933, "NmAJ", 950) + _I(386, 393, 404, 401, ")5oA");
function fi() {
  function i(A, o, r, a, g) {
    return jI(a - -616, o - 404, r - 432, a - 18, r);
  }
  function n(A, o, r, a, g) {
    return qa(A - 345, o - 359, r - 303, r, g - 662);
  }
  const t = me(Jn);
  if (t === void 0) throw new Error(Jn[i(256, 233, "B9Xj", 247) + i(231, 227, "l8xD", 229) + "e"] + (i(262, 239, "NmAJ", 255) + n(227, 238, "A^g]", 245, 229) + i(232, 220, "9qni", 236) + e(836, 826, "9qni", 845, 842) + n(244, 235, "nqfF", 231, 230) + e(858, 836, "czRC", 841, 844) + n(244, 242, "l8xD", 250, 241) + e(859, 841, "U&G%", 855, 853)));
  function e(A, o, r, a, g) {
    return qa(A - 453, o - 66, r - 65, r, g - 1270);
  }
  return t;
}
const Un = _e(void 0);
Un.displayName = "AnalyticsContext";
function qI() {
  const i = me(Un);
  if (i === void 0)
    throw new Error(`${Un.displayName} must be used within a AnalyticsProvider`);
  return i;
}
const Wi = (i) => i.length < 82 * 101 + 1178 + -9459 ? 3 * 2939 + -2594 + -6223 : i.reduce((t, e) => t + e, -1 * -1762 + 1 * 437 + -2199) / i.length, Lt = (i) => Number.parseFloat(i.toFixed(4 * 599 + 522 + -2915));
function VI(i) {
  const n = i.getContext("2d");
  n && n.clearRect(0, -997 * 3 + 4179 + -99 * 12, n.canvas.width, n.canvas.height);
}
const j0 = 6596 + 57 * 131 + -343 * 41 + 0.75, ZI = 2488 * 3 + -9127 * -1 + -16589, zI = -5535 + -1 * -6135, XI = "dot-auto-capture-video", hi = (i, n) => Math.min(i, n), q0 = ({ height: i, width: n }, t) => {
  const e = hi(n, i) * t, A = (n - e) / (1 * 114 + 2 * 634 + -1380), o = (i - e) / 2, r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, $I = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = q0(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, AC = ({ height: i, width: n }) => {
  const t = hi(n, i), e = t / (-1 * -6057 + -5047 + 53 * -19) * (-14 * 527 + 6779 * -1 + 2023 * 7);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function eC(i, n) {
  const t = hi(n.width, n.height);
  return Lt(i * t);
}
function tC({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, q0(t, j0);
}
function oC(i) {
  return $I(i, j0);
}
function nC(i, n) {
  return eC(i, n) * ZI;
}
const iC = "7.7.0", rC = {
  version: iC
}, aC = 2144 + 1706 * -4 + 4689 + 0.8100000000000005, ur = {};
ur.max = 100, ur.min = 10;
const Va = ur, gC = -27 * -37 + -7218 + 6939, sC = 1632 + 280 * -1 + 9 * -128, cC = 1873 + 7997 * 1 + -9866, V0 = "AES-CBC", Z0 = "RSA-OAEP", IC = "SHA-256", CC = "image/jpeg", BC = 8, z0 = "/dot-assets", Za = "dot_embedded_bg.wasm", fr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), X0 = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Lt(t) : t)), aa = () => rC.version, ga = (i) => new URL(i).hostname.replace("www.", ""), $0 = () => ga(window.location.href) === "localhost", Zo = (i) => Object.entries(i).map(([n, t]) => encodeURIComponent(n) + "=" + encodeURIComponent(t)).join("&"), QC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function EC(i) {
  return i.at(-1) === "/" ? i.slice(-258 * -21 + 19 * -74 + -4012, -1) : i;
}
function xC(i) {
  return "" + EC(i ?? "") + z0;
}
function Bo() {
  return !1;
}
function dC({ analytics: i, crosshatch: n }) {
  if (!$0())
    return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function lC({ analytics: i, apiKey: n, redfin: t, countlyAppKey: e, crosshatch: A, bramble: o }) {
  const r = {};
  r.analytics = i, r.crosshatch = A;
  const a = dC(r);
  return z(() => {
    a && a.init(e, o.getCustomerName(), n);
  }, [a, e, o, n]), z(() => {
    A && (console.info("Analytics is " + (a != null && a.shouldReportAnalytics(A) ? "enabled" : "disabled")), a && a.walleye(t, o.getCustomerName()));
  }, [a, o, A, t]), z(() => {
    if (a)
      return window.addEventListener("beforeunload", a.endSession), () => {
        a.endSession(), window.removeEventListener("beforeunload", a.endSession);
      };
  }, [a]), a;
}
function uC({
  analytics: i,
  apiKey: n,
  children: t,
  countlyAppKey: e
}) {
  const { crosshatch: A, bramble: o } = fi(), { redfin: r } = ie(), a = lC({
    analytics: i,
    redfin: r,
    countlyAppKey: e,
    crosshatch: A,
    bramble: o,
    apiKey: n
  }), g = NA(
    () => ({
      analytics: a
    }),
    [a]
  );
  return /* @__PURE__ */ k(Un.Provider, { value: g, children: t });
}
const hr = {};
hr.SIMD = "simd", hr.NO_SIMD = "no-simd";
const za = hr, pr = {};
pr.Lower = "Lower", pr.Higher = "Higher";
const _t = pr, mr = {};
mr.MOBILE = "MOBILE", mr.DESKTOP = "DESKTOP";
const Xa = mr, Yn = _e(void 0);
Yn.displayName = "TransactionCountingContext";
function As() {
  const i = me(Yn);
  if (i === void 0)
    throw new Error(`${Yn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
function fC({ children: i, value: n }) {
  const { crosshatch: t } = fi(), { transactionCounting: e } = As(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? _t.Higher : _t.Lower, o = NA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ k(li.Provider, { value: o, children: i });
}
const Pn = _e(void 0);
Pn.displayName = "CameraServiceContext";
function to() {
  const i = me(Pn);
  if (i === void 0)
    throw new Error(`${Pn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function es() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Mi() {
  return (await es()).filter((n) => n.kind === "videoinput");
}
function Cn(i) {
  i.getTracks().forEach((t) => t.stop());
}
function yr(i) {
  return i.getVideoTracks()[-1 * -2129 + 2 * -1451 + 773];
}
(function(i, n) {
  const t = i();
  function e(g, s, C, c, E) {
    return JA(c - 760, g);
  }
  function A(g, s, C, c, E) {
    return JA(E - 407, g);
  }
  function o(g, s, C, c, E) {
    return JA(g - 44, C);
  }
  function r(g, s, C, c, E) {
    return JA(C - -312, E);
  }
  function a(g, s, C, c, E) {
    return JA(g - -389, C);
  }
  for (; ; )
    try {
      if (parseInt(e("a2Q5", 943, 956, 959, 945)) / 1 * (-parseInt(e("(FTt", 952, 938, 956, 954)) / 2) + parseInt(e("Mw!k", 965, 1003, 981, 976)) / 3 * (parseInt(a(-181, -166, "%UJ2", -182, -197)) / 4) + parseInt(r(-116, -121, -99, -99, "93h[")) / 5 * (-parseInt(r(-122, -106, -123, -125, "sM8J")) / 6) + parseInt(e("MHUT", 979, 963, 963, 983)) / 7 + -parseInt(a(-163, -179, "Lf)Z", -153, -148)) / 8 * (-parseInt(a(-185, -195, "M8Jx", -166, -173)) / 9) + -parseInt(e("ZuvU", 989, 991, 974, 972)) / 10 * (parseInt(o(245, 251, "E9P*", 256, 263)) / 11) + -parseInt(A("HruL", 612, 627, 641, 631)) / 12 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Tn, 2182039 + 212003 * -6);
function JA(i, n) {
  const t = Tn();
  return JA = function(e, A) {
    e = e - (-8796 + 1122 * -4 + 13471);
    let o = t[e];
    if (JA.aHLgTX === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      JA.RYCQZc = C, i = arguments, JA.aHLgTX = !0;
    }
    const a = t[-4133 + 1 * 4133], g = e + a, s = i[g];
    return s ? o = s : (JA.bQTlmu === void 0 && (JA.bQTlmu = !0), o = JA.RYCQZc(o, A), i[g] = o), o;
  }, JA(i, n);
}
function Tn() {
  const i = ["W5tcVSo3deqYWOdcLa", "WP0JyqT4eSounWlcGSkKFq", "W57dQSoLW7PaxcuTW4O", "W6NcIGxcS2y", "W6/dSd41oJNdQSkXWOO", "WQyGFmkYW4K", "WRddMqxcIv9xW7hdQq", "rWFcJmoZWRK", "emoFh8k/kG", "W7/cRI9Bjq", "h01ZuuNdPWZdO8oxWRSodG", "vCouW7BcNCobWQ/dNH8fW4a", "b0BcSIGCWO9wWOZdLmknAW", "WOqrDmknW7K", "ubxdOL5y", "ddFcJSkuW6u", "qbzKW5JdRwO5vmkRWPZcTNW", "sH4OaqS", "nmozFcpcGW", "W60ZrCoqnwRdHKxdJSktWOLj", "WRtcQHqpw13cISkBxSkkCa", "iCoVW7KlWQa", "sSoiatBcQmozWQT/m8oNu00", "hKHOjSoI", "xr45ASk4bcFdImohgXtcQW", "dLLJmG", "WQxdLu53lmkOWQeCWP8", "D8kXW67dLCowsbmoWPLvySoB", "W5xdQmoJWOWImGyKW7XiW5KY", "WPuPyqGesSoxfYlcTq", "W79QyIJdOW", "WPRcSLzyACkXDtu7W6KQ", "EJddSvFcJq", "WRmJWPdcH8k6", "W4VcK8ocW6ZcMq", "WORcMSo0", "WRJdQ1BdTG8", "eLzGW4qq", "WPqaW7hcPSkyW7zY", "W53cU8kWqIixWP3cScZdRGm", "tSoikCkDchNcGq", "WOeftmkBWPHuqJOlsSoXEa", "bH4GW63dIG", "i8o9W6BcJSovWPXstmof"];
  return Tn = function() {
    return i;
  }, Tn();
}
function hC(i) {
  const n = new ArrayBuffer(i[o(497, "s$Ay", 480, 498, 480) + "h"]), t = new Uint8Array(n);
  function e(r, a, g, s, C) {
    return JA(r - -245, g);
  }
  for (let r = 0, a = i[A(-314, "h2KI") + "h"]; r < a; r++)
    if (A(-321, "[kd]") !== A(-306, "h2KI")) t[r] = i[o(443, "O4my", 467, 447, 452) + o(461, "ZuvU", 485, 493, 477)](r);
    else {
      const g = new _0x14068b(_0x1b5ba4[e(-55, -56, "^xmA") + "h"]), s = new _0x356b20(g);
      for (let C = -29 * 101 + 2613 + -316 * -1, c = _0x151b65[A(-311, "vko1") + "h"]; C < c; C++)
        s[C] = _0x5ce6b0[A(-329, "4cH6") + o(486, "U8fZ", 484, 479, 478)](C);
      return g;
    }
  function A(r, a, g, s, C) {
    return JA(r - -521, a);
  }
  function o(r, a, g, s, C) {
    return JA(C - 261, a);
  }
  return n;
}
(function(i, n) {
  const t = i();
  function e(a, g, s, C, c) {
    return $(g - 961, a);
  }
  function A(a, g, s, C, c) {
    return $(g - -708, s);
  }
  function o(a, g, s, C, c) {
    return $(g - -380, c);
  }
  function r(a, g, s, C, c) {
    return $(g - 417, s);
  }
  for (; ; )
    try {
      if (-parseInt(e("MTp#", 1380, 1354, 1363, 1409)) / 1 * (parseInt(e("y@X(", 1359, 1365, 1332, 1384)) / 2) + -parseInt(A(-269, -300, "H3av", -299, -320)) / 3 + -parseInt(r(861, 863, "MTp#", 889, 846)) / 4 * (parseInt(e("[pH$", 1375, 1372, 1402, 1395)) / 5) + -parseInt(o(59, 50, 24, 29, "%fSQ")) / 6 + parseInt(e("IN4*", 1389, 1397, 1370, 1373)) / 7 * (-parseInt(r(808, 832, "G%sL", 833, 844)) / 8) + parseInt(o(42, 37, 64, 7, "yifK")) / 9 + parseInt(e("IN4*", 1355, 1336, 1370, 1340)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Hn, 439783 * -1 + -39720 + 1324 * 818);
function Hn() {
  const i = ["WOBdGmk9W5zZ", "emkHW7hdPCkU", "W4XPDd4", "W6nemCkOWOvdW5RdU8oMWRe/", "WP4jDmo1W7q", "WP8TW50hW71OWP08dfRdSSkHW6i", "nmoVbSkbvW", "swXSpa", "WPSQlMhdNZq1WQ5NWOOZ", "rCk5sshdLa", "WRv8kq", "q8oKW49xc8oKACoiCSkabX3cKq", "utNdLwRdSCk+WRG", "W6RcP3hdHci", "WPOEy8oGW7i", "qgrHW7mR", "ucVcQ8kJy8o/zXnwWRdcUctcSWm", "WPLYAq3cGa", "oWWda3q", "amo8W4ymca", "WR/cQ38vrJZdQXTfW4tcJrje", "y8k7u8kaz03dPCk3oG", "bLLiW74q", "WQpcK8k9scqOxWVcTsy", "amo+gglcIxZdHCk7W6tdO8owhq", "W6VdRd5qbq", "gmoSW50", "eCo/bCkCW60", "hmkzeKXD", "W6tdUYLhbq", "W6benSkVWOa3WQ3cOSoyWPGFW7BdJKy", "qmk4WPillx7dV8ojWQS", "WQBcMdtdUhBcRulcOLv6t8oP", "W6xcUmkeF8kX", "W5PTW5RdSmk9WPhdRW", "cfjs", "cSkRktFcUCkHWRzws8ks", "WOuRWOTgpq", "s2P6lSkX", "WRWuACo/", "WRqfCmkd", "WPpdNmkZW44", "WPb5zbJcJq", "WOm3WPfema", "W4OUouJdImk9WRtdUmkfDCoRW4C", "pKPw", "W5xcNCkagW", "mamncq", "hSkXWO8psq", "aKneW64", "W4hcHmoRWPDgW6elW7rbW48", "WQ7cMZ3dVI7dT2hcU3bL", "W4lcPmkCeKW", "dmkOidtdOSo9W5rrzCkStZHH", "cwldRd/dIq", "ACk/xCodgG3dN8kKgx8DFq", "a27dVmoDmq", "W4ZcS8kwevK", "WR0bACk0W7C", "WRddLZTR", "A3DhEW"];
  return Hn = function() {
    return i;
  }, Hn();
}
async function pC() {
  const i = {};
  function n(C, c, E, I, x) {
    return $(c - 219, x);
  }
  i[g(131, "UgZ&", 140, 133)] = V0, i[n(620, 625, 618, 640, "H3av") + "h"] = 256;
  function t(C, c, E, I, x) {
    return $(x - 261, C);
  }
  const e = await window[n(698, 669, 647, 700, "RtMv") + "o"][g(128, "5i2k", 148, 143) + "e"][a(113, 55, 83, "NMhw") + n(628, 639, 660, 659, "k*r&") + "y"](i, !0, [a(71, 36, 61, "g8RM") + "pt", a(105, 114, 85, "MTp#") + "pt"]), A = Uint8Array[s(-292, -311, -327, -310, "1B)6")](Array(16)[a(31, 76, 59, "[pH$")](0)), o = window[g(97, "[dBj", 102, 125) + "o"][g(135, "K4AS", 108, 131) + g(86, "PgA6", 128, 106) + t("4s3Q", 715, 675, 701, 699)](A), r = {};
  function a(C, c, E, I, x) {
    return $(E - -346, I);
  }
  r[s(-258, -287, -288, -261, "ATpx")] = e, r.iv = o;
  function g(C, c, E, I, x) {
    return $(I - -291, c);
  }
  function s(C, c, E, I, x) {
    return $(c - -738, x);
  }
  return r;
}
async function mC(i) {
  function n(E, I, x, d, l) {
    return $(x - 427, d);
  }
  function t(E, I, x, d, l) {
    return $(I - -432, E);
  }
  function e(E, I, x, d, l) {
    return $(I - -162, x);
  }
  const { iv: A, key: o } = await pC(), r = {};
  function a(E, I, x, d, l) {
    return $(x - 556, d);
  }
  function g(E, I, x, d, l) {
    return $(d - 308, I);
  }
  r[a(959, 932, 960, "K4AS")] = V0, r.iv = A;
  const s = await window[e(238, 256, "U3I1") + "o"][a(1031, 1009, 1009, "]X$[") + "e"][t("PvQ2", -6) + "pt"](r, o, i), C = await window[a(977, 988, 958, "^lB5") + "o"][t("ATpx", 12) + "e"][t("A^Ow", 20) + t("[dBj", -22)](t("cG7F", -23), o), c = {};
  return c[g(727, "[dBj", 749, 729) + "ge"] = s, c[n(797, 812, 826, "xrT$")] = C, c.iv = A, c;
}
function $(i, n) {
  const t = Hn();
  return $ = function(e, A) {
    e = e - (-179 * 20 + 8238 + -328 * 13);
    let o = t[e];
    if ($.PhbWPt === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      $.iKsEaj = C, i = arguments, $.PhbWPt = !0;
    }
    const a = t[1 * -799 + 536 * -1 + -5 * -267], g = e + a, s = i[g];
    return s ? o = s : ($.GWVvcv === void 0 && ($.GWVvcv = !0), o = $.iKsEaj(o, A), i[g] = o), o;
  }, $(i, n);
}
async function yC(i) {
}
(function(i, n) {
  function t(a, g, s, C, c) {
    return mA(C - 642, s);
  }
  function e(a, g, s, C, c) {
    return mA(c - 183, g);
  }
  function A(a, g, s, C, c) {
    return mA(c - 53, C);
  }
  function o(a, g, s, C, c) {
    return mA(a - -191, s);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(A(564, 583, 525, "SC[4", 546)) / 1 + parseInt(A(467, 527, 516, "5Q52", 513)) / 2 * (-parseInt(A(471, 481, 485, "6%z5", 486)) / 3) + parseInt(A(470, 466, 487, "qV9i", 496)) / 4 * (-parseInt(o(233, 235, "AF8q", 259, 203)) / 5) + -parseInt(o(317, 354, "wKah", 364, 357)) / 6 + parseInt(e(614, "J1BN", 651, 684, 636)) / 7 * (parseInt(e(741, "J1BN", 671, 727, 698)) / 8) + -parseInt(t(1096, 1101, "VO4x", 1116, 1093)) / 9 * (-parseInt(A(494, 539, 506, "jp9b", 503)) / 10) + parseInt(e(687, "E0lJ", 667, 700, 655)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Kn, 71158 * -4 + -284745 * -1 + 381260);
const wC = -8521 + -8098 * 1 + 19619, DC = -22 * -514 + 2413 * 4 + 1 * -13960, ts = -1 * -4129 + -3234 + -892, os = 9490 + 268 * -18 + 2 * -2333 + 0.5, ns = {};
ns[EA(-146, -141, -190, -99, "*U38")] = 1280;
const is = {};
is[EA(-13, -52, -67, -81, "A5Oz")] = 720;
const rs = {};
rs[SA(786, "ZTGu", 774)] = 60;
function ce(i, n, t, e, A) {
  return mA(e - 998, n);
}
const Bn = {};
Bn[EA(-93, -123, -125, -148, "ZTGu")] = ns, Bn[SA(868, "33^M", 848) + "t"] = is, Bn[GA(-331, -323, -412, -367, "xJxQ") + SA(884, "dVl6", 851)] = rs;
const as = {};
function Kn() {
  const i = ["uYnT", "bfD4WQldJa", "WRldKwe1WP7dPYtcRJbygq", "csaKB8ku", "WR45WOddQSoL", "zGJdJLWJ", "E8oNW7KDma", "mh/cSff8WOFdICkwatmMW5RdQq", "fxZdSe/cGmoaW4W1Bmk9tfe", "WQ3dUCoZ", "DbNdI0S/", "xdr1WO7cQa", "WQL3WORcGSkncmoSca", "uXrRWRNcQa", "W7HnW5JdQLu", "WRtdT8o5zCoc", "WR/dSmohumoe", "WQhdVW0via", "eSo3W5uVvG", "WQXEuSk+WQXatSoNW5e", "WQPYW5hdS8oPESkMkSk+WPXsDXS", "hLi3WQTy", "tmkXW5DkW7tdLL5P", "WRBdO8oVrq", "WPfEwvS9", "cSo2W71AW7i", "WQaaDCoCWRy", "uSkaogfG", "bCkMvrRcPG", "nr/dStK+W5tcRq", "pSkds8ko", "Et/cPIC", "W5Skn8kxWRldLmkRW5xcN8otWPhcMW", "WQuWWOBdUG", "rJ3cObldMW", "ve4hW5a", "WR/dPmoGxmoc", "k8kwsSkBcq", "WOBdVmoGjW", "lmovE8k7W6C", "WO43W4VcQ8k5", "AWDRW78xiCk7WRNdTmo0ofRdQa", "W7zjW53dOv8", "dXHaWPVcMmkymrJcTaBdS0G", "tJz4WQJcGq", "WOWUW4xcPIm", "BdlcUIq", "W6tcLYy", "bCkZDWRcHW", "WPiGrXlcQW", "mCo/W7m", "nSoLW7rV", "yJBcOdFdGa", "WR/dSGWaja", "fmowFJW+FHxdIZTntSk9", "xIKHW6Xcud1U", "W4lcTs8faG", "W7SmjmkxWPS", "hCo7W7j4W6S", "tGvyFSo3", "vbvpFSoY", "vfLbW4W", "W5CCbsT5WPJcMa5LW7xcKmo4", "W5BcRqagdG", "WQRcPLBcKG", "WOm7W5C", "qMtcPmoUWOhcLmoa", "WOG8qq", "B8oGW7y0ia", "WQJcOf8", "ASoAc8ocu8kwlmkskmo7WQhdMa", "k1uMWQjo", "WP/dJfm", "uZOUdW", "jKrLWQO", "W4BdJ1xdOGW", "WP0TW6pcH8k4", "WQ0uWOlcTaFcKdVdQmogFCkLySkV", "WORcSKZcTSoB", "yCo3W74+lq", "WP7dGtXrW7C", "nSoBWPFcL8kT", "ptmXzW", "W4JcGgyiWQ9cySkfWR5yWPq", "sSkWWQCIWQ/cI2rNyCoNiMK", "gMzKWRVdGG", "WPW1W4BcJCkf", "tI3cRbZdMq", "kLu0WQ5N", "m8oIW6u/", "W4vzDYnL", "W4LYWPJdOh5maCoIemoaWQFcJG", "gLzLWR3dJa", "yZFcRdhdHa", "drb3WPtcPmkumZu", "W47cGwv2W41Zt8kNWR0", "WRukFCosWQm", "g8kZAtVcSq"];
  return Kn = function() {
    return i;
  }, Kn();
}
as[SA(839, "OMBl", 856)] = 1920;
const gs = {};
gs[oe(1183, 1204, 1183, "b8i[")] = 1080;
const Qn = {};
Qn[EA(-42, -58, -56, -58, ")BMh")] = as, Qn[ce(1394, "zg]d", 1467, 1433) + "t"] = gs, Qn[SA(786, "dVl6", 772) + EA(-32, -69, -109, -22, "4^uJ")] = 30;
const ss = {};
ss[EA(-115, -75, -57, -89, "J1BN")] = 1;
const cs = {};
cs[GA(-381, -369, -365, -362, "H8wD")] = 1;
const Is = {};
Is[EA(-66, -75, -83, -41, "J1BN")] = 1;
const En = {};
En[SA(838, "AF8q", 814)] = ss, En[GA(-288, -294, -369, -336, "$*E!") + "t"] = cs, En[GA(-271, -323, -302, -320, "33^M") + EA(-62, -59, -101, -14, "vnuJ")] = Is;
function EA(i, n, t, e, A) {
  return mA(n - -564, A);
}
const Cs = {};
Cs[EA(-156, -116, -85, -72, "hb*)")] = 1;
const Bs = {};
Bs[SA(770, "Xoqt", 808)] = 1;
function SA(i, n, t, e, A) {
  return mA(t - 338, n);
}
const Qs = {};
Qs[EA(-160, -138, -182, -128, "$*E!")] = 1;
const xn = {};
xn[oe(1142, 1137, 1176, "hb*)")] = Cs, xn[oe(1182, 1144, 1165, "wKah") + "t"] = Bs, xn[GA(-324, -363, -343, -352, "IgtR") + GA(-349, -422, -421, -397, "ePy@")] = Qs;
const Qo = {};
Qo[oe(1117, 1181, 1153, "RaE(")] = Bn, Qo[ce(1441, "BVny", 1504, 1473) + ce(1517, "6%z5", 1498, 1476)] = Qn, Qo[GA(-320, -370, -326, -357, "$*E!")] = En;
function oe(i, n, t, e, A) {
  return mA(t - 692, e);
}
Qo[ce(1521, "F[3Q", 1563, 1515) + GA(-280, -293, -341, -323, "F[3Q")] = xn;
const _n = Qo, Ft = {};
function mA(i, n) {
  const t = Kn();
  return mA = function(e, A) {
    e = e - (2460 + -314 * -4 + 5 * -659);
    let o = t[e];
    if (mA.jZtMmT === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      mA.PLeKvI = C, i = arguments, mA.jZtMmT = !0;
    }
    const a = t[-8195 + 111 * -59 + 76 * 194], g = e + a, s = i[g];
    return s ? o = s : (mA.sBxHbg === void 0 && (mA.sBxHbg = !0), o = mA.PLeKvI(o, A), i[g] = o), o;
  }, mA(i, n);
}
Ft[GA(-335, -392, -407, -373, "IgtR") + ce(1424, "!xCv", 1498, 1457) + GA(-349, -349, -272, -308, "^j3o")] = wC, Ft[GA(-344, -384, -399, -387, "vnuJ") + SA(802, "C&pv", 825) + oe(1219, 1147, 1182, "b8i[") + GA(-307, -349, -328, -338, ")]1u")] = _n[oe(1206, 1212, 1196, "gthY")], Ft[EA(-119, -119, -127, -161, "wKah") + ce(1438, "F[3Q", 1445, 1469) + oe(1176, 1168, 1172, "4Z6T") + GA(-362, -376, -317, -353, "VO4x")] = _n[EA(-116, -143, -131, -188, "E0lJ") + oe(1228, 1174, 1192, "olBx")], Ft[oe(1169, 1133, 1148, "J1BN") + SA(816, "g(MV", 830)] = ts, Ft[EA(-122, -127, -131, -166, "33^M") + ce(1452, "8UqF", 1495, 1456) + EA(-123, -120, -90, -88, "BVny") + oe(1148, 1114, 1139, "IgtR") + SA(812, "IgtR", 778)] = os;
const Ot = {};
Ot[GA(-384, -402, -382, -389, "!xCv") + SA(814, "ePy@", 787) + ce(1512, "OMBl", 1444, 1463)] = DC;
function GA(i, n, t, e, A) {
  return mA(e - -819, A);
}
Ot[ce(1415, "H8wD", 1456, 1427) + GA(-344, -329, -286, -312, "F[3Q") + EA(-131, -96, -106, -66, "RaE(") + SA(741, "BVny", 769)] = _n[ce(1444, "zg]d", 1506, 1462)], Ot[GA(-351, -303, -343, -325, "C&pv") + oe(1180, 1115, 1134, "BVny") + EA(-178, -139, -184, -123, "vnuJ") + EA(-103, -82, -121, -90, ")]1u")] = _n[ce(1432, "!xCv", 1524, 1477) + SA(841, "kB7(", 841)], Ot[SA(840, "4^uJ", 847) + ce(1436, "IgtR", 1407, 1452)] = ts, Ot[oe(1112, 1134, 1147, "SC[4") + oe(1192, 1148, 1194, "E0lJ") + SA(858, "vnuJ", 854) + GA(-332, -315, -344, -331, "jp9b") + SA(817, "4Z6T", 836)] = os;
const wr = {};
wr[SA(800, "$*E!", 815)] = Ft, wr[EA(-63, -95, -79, -70, "KdOa")] = Ot;
const bC = wr;
(function(i, n) {
  function t(a, g, s, C, c) {
    return yA(s - -435, C);
  }
  function e(a, g, s, C, c) {
    return yA(s - -345, g);
  }
  function A(a, g, s, C, c) {
    return yA(a - 467, g);
  }
  function o(a, g, s, C, c) {
    return yA(c - -719, a);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(o("(IHP", -329, -428, -402, -336)) / 1 + -parseInt(t(-135, -161, -53, "VGXp", -190)) / 2 + -parseInt(t(-120, -101, -47, "hH$S", 7)) / 3 * (parseInt(t(27, 123, -5, "hH$S", 106)) / 4) + parseInt(A(689, "D7gJ", 627, 601, 722)) / 5 + parseInt(o("VGXp", -492, -642, -650, -513)) / 6 + -parseInt(o("7D^4", -416, -289, -455, -363)) / 7 * (parseInt(t(-85, 91, 6, "5DwP", 70)) / 8) + parseInt(e(-14, "N6o7", -33, -75, -126)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jn, 871382 + 156018 * 4 + -94755 * 9);
function RA(i, n, t, e, A) {
  return yA(n - -134, A);
}
function oA(i, n, t, e, A) {
  return yA(A - 593, i);
}
function lA(i, n, t, e, A) {
  return yA(n - 238, t);
}
function Be(i, n, t, e, A) {
  return yA(A - 51, i);
}
function yA(i, n) {
  const t = jn();
  return yA = function(e, A) {
    e = e - (5226 + 1 * 1141 + -6185);
    let o = t[e];
    if (yA.pccbgV === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      yA.ziuZqr = C, i = arguments, yA.pccbgV = !0;
    }
    const a = t[9950 + -3 * -2342 + 4 * -4244], g = e + a, s = i[g];
    return s ? o = s : (yA.xWlbtu === void 0 && (yA.xWlbtu = !0), o = yA.ziuZqr(o, A), i[g] = o), o;
  }, yA(i, n);
}
function sA(i, n, t, e, A) {
  return yA(t - -250, n);
}
var n0, i0, Ue;
class kC {
  constructor(n = {}) {
    U(this, Ue);
    p(this, i0, []);
    p(this, n0, {});
    W(this, Ue, bC);
    function t(o, r, a, g, s) {
      return oA(s, r - 186, a - 58, g - 401, o - 122);
    }
    function e(o, r, a, g, s) {
      return RA(o - 199, o - 1121, a - 286, g - 190, g);
    }
    function A(o, r, a, g, s) {
      return oA(a, r - 425, a - 471, g - 444, r - -1036);
    }
    this[e(1266, 1272, 1367, "#dcD") + A(-135, -211, "7i00", -156) + t(1073, 992, 1149, 1110, "MhOs")](n);
  }
  [(i0 = oA("VGXp", 1089, 1067, 979, 962) + RA(189, 230, 187, 220, "5w$u"), n0 = Be("9M[#", 513, 478, 330, 395) + RA(184, 293, 205, 182, "toFy") + "s", RA(-8, 85, -12, 59, "FhOM") + sA(31, "^6kz", 152) + sA(58, "Wk8b", 40) + "fo")](n) {
    const t = yr(n), e = t == null ? void 0 : t[o("7D^4", -336, -226) + r(1182, "7i00", 1085, 1161) + "s"]();
    function A(s, C, c, E, I) {
      return sA(s - 234, I, C - -554);
    }
    function o(s, C, c, E, I) {
      return lA(s - 444, c - -845, s);
    }
    function r(s, C, c, E, I) {
      return sA(s - 149, C, E - 1212);
    }
    function a(s, C, c, E, I) {
      return oA(I, C - 29, c - 112, E - 419, E - -1347);
    }
    function g(s, C, c, E, I) {
      return lA(s - 135, E - -238, s);
    }
    if (!(e != null && e[g("ir&l", 271, 305, 265) + "t"]) || !(e != null && e[a(-456, -253, -421, -355, "t#!w")]) || !(e != null && e[A(-482, -595, -500, -496, "wBh*") + a(-475, -453, -543, -502, "9M[#")])) {
      if (a(-563, -606, -418, -552, "#vBQ") === g("wF2n", 276, 529, 391)) throw new D(o("#vBQ", -145, -260) + r(1135, "zn2g", 1298, 1259) + o("gg6l", -29, -151) + a(-559, -662, -615, -533, "FhOM") + o("SEh1", -337, -323) + A(-492, -412, -458, -528, "SEh1"));
      _0x12cfd0 = this[a(-527, -348, -358, -391, "FhOM") + a(-364, -354, -347, -300, "d#MR") + o("N6o7", -309, -201) + "s"](this[a(-541, -478, -515, -513, "MhOs") + o("7D^4", -308, -252) + "s"], _0x511b1a), _0x41b43a--;
    }
    if (t)
      if (o("x7&G", -348, -361) !== g("zRV(", 139, 134, 192)) {
        const s = {};
        return s[g("ir&l", 130, 390, 253)] = t[A(-495, -482, -400, -421, "!Yp2")], s.id = e[r(1103, "KfYW", 1145, 1148) + r(1150, "zn2g", 1197, 1205)], s;
      } else return _0x3b7c5a instanceof _0x3b62db && _0x42dbc2[g("D7gJ", 172, 146, 271)] === a(-541, -564, -690, -567, "Wk8b") + o("qzRn", -168, -176) + o("afp^", -188, -179) + A(-277, -411, -420, -513, "^oe$");
  }
  async [sA(-88, "9M[#", -22) + lA(457, 592, "9M[#") + oA("VGXp", 901, 773, 714, 775) + "m"](n) {
    function t(s, C, c, E, I) {
      return oA(c, C - 376, c - 188, E - 351, C - -328);
    }
    const e = document[A(645, 729, 669, "hW3v") + o(803, 657, 826, "f5^I", 740) + o(578, 685, 651, "!Yp2", 710)](g(-334, -433, "x7&G", -474));
    e[o(620, 697, 732, "]eQv", 675) + g(-669, -552, "hH$S", -669)] = !0, e[o(804, 775, 736, "^oe$", 692)] = !0, e[r(996, 929, 944, 926, "toFy") + A(809, 673, 880, "VGXp") + "e"] = !0, e[r(1114, 1146, 1199, 1114, "c*40")][A(603, 716, 615, "#70f") + r(1028, 1061, 967, 1037, "HR$2")] = A(643, 760, 776, "c*40") + r(837, 960, 1022, 957, "HR$2");
    function A(s, C, c, E, I) {
      return sA(s - 372, E, s - 604);
    }
    e[t(454, 488, "FhOM", 463)][g(-585, -449, "hH$S", -387) + "ty"] = "0";
    function o(s, C, c, E, I) {
      return RA(s - 104, I - 422, c - 358, E - 135, E);
    }
    e[A(650, 596, 695, "N6o7")][o(761, 661, 560, "toFy", 666) + t(559, 565, "#vBQ", 694) + A(687, 570, 634, "pimi")] = r(1184, 1176, 1285, 1158, "5DwP"), e[A(647, 744, 528, "9M[#")][g(-517, -482, "ir&l", -355)] = A(587, 664, 665, "5w$u");
    function r(s, C, c, E, I) {
      return sA(s - 42, I, C - 981);
    }
    e[o(723, 672, 630, "ir&l", 609)][o(593, 628, 600, "zn2g", 603) + "t"] = o(649, 418, 581, "5w$u", 521);
    const a = await navigator[g(-464, -492, "SEh1", -621) + t(795, 668, "c*40", 739) + "es"][A(585, 475, 681, "Wk8b") + o(630, 762, 620, "N6o7", 674) + "ia"](n);
    function g(s, C, c, E, I) {
      return RA(s - 289, C - -618, c - 385, E - 262, c);
    }
    return e[g(-376, -504, "d#MR", -448) + g(-406, -301, "x7&G", -240)] = a, await e[r(1059, 1110, 1113, 1224, "D7gJ")](), a;
  }
  async [lA(604, 525, "c43j") + RA(148, 120, 208, 11, "toFy") + Be("r$rT", 381, 320, 466, 396)]() {
    var C, c;
    if (!Bo()) {
      if (A(-329, -399, -382, -288, "DozF") !== s(131, "r$rT", -75, -7)) return;
      {
        const E = {};
        return E[s(207, "#70f", 123, 84)] = _0xd47bea, E;
      }
    }
    const n = await this[a(-183, -275, -382, -298, "RWH[") + "st"](S(this, Ue)[e("MhOs", 92)]);
    function t(E, I, x, d, l) {
      return lA(E - 25, E - -1091, x);
    }
    function e(E, I, x, d, l) {
      return lA(E - 83, I - -531, E);
    }
    function A(E, I, x, d, l) {
      return lA(E - 139, I - -821, l);
    }
    const o = await this[a(-548, -318, -374, -441, "hH$S") + "st"](S(this, Ue)[A(-276, -345, -229, -361, "9M[#")]), r = ((C = n[a(-403, -472, -459, -416, "d#MR") + a(-588, -423, -585, -491, "c*40")]) == null ? void 0 : C[a(-466, -433, -336, -434, "Wk8b")]) + t(-545, -613, "x7&G") + ((c = o[A(-143, -154, -133, -242, "ir&l") + s(99, "^6kz", 91, 121)]) == null ? void 0 : c[t(-505, -596, "!Yp2")]);
    function a(E, I, x, d, l) {
      return oA(l, I - 370, x - 432, d - 71, d - -1308);
    }
    const g = await this[A(-97, -158, -126, -263, "u5K(") + e("$K^K", 33) + t(-649, -541, "gg6l") + A(-250, -141, -207, -90, "5DwP") + "lt"](r, n[A(-261, -390, -403, -444, "CVeY") + "ge"], o[a(-369, -339, -164, -257, "t#!w") + "ge"]);
    function s(E, I, x, d, l) {
      return Be(I, I - 109, x - 445, d - 271, d - -243);
    }
    this[t(-565, -533, "c43j") + s(222, "0i(y", 179, 206)][a(-321, -396, -416, -386, "VGXp")](g);
  }
  async [oA("RWH[", 1029, 1105, 1071, 1010) + "st"](n) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: o, runDurationCutoffFactor: r } = n;
    let a = 0, g = o, s, C = this[c(-151, -261, "MhOs", -87, -156) + I("ir&l", 900, 863, 960, 965) + l(-300, "Diw$", -309, -377, -310) + "s"](this[c(-393, -489, "wBh*", -245, -374) + l(-264, "pimi", -126, -164, -241) + "s"], A);
    function c(f, m, y, G, b) {
      return lA(f - 370, b - -808, y);
    }
    for (let f = -266 + -32 * 53 + -981 * -2; f < o; f++)
      if (c(-83, -259, "#70f", -263, -147) !== l(-355, "zn2g", -180, -260, -260)) {
        if (a > e * r)
          if (I("zn2g", 955, 880, 1024, 924) === l(-295, "wF2n", -288, -252, -376)) {
            g = f;
            break;
          } else ({ deviceInfo: _0x50849b } = _0x35d677);
        const m = await this[l(-203, "c43j", -410, -232, -340) + c(-17, -148, "RWH[", -127, -151) + c(-248, -398, "!Yp2", -320, -356) + l(-358, "t#!w", -410, -336, -407)](C);
        if (m[Q(-260, "r$rT")]) {
          if (d(45, 64, -105, 28, "FhOM") === d(-14, 152, -55, 63, "i#Y)")) this[Q(-281, "#70f") + c(-373, -434, "#vBQ", -430, -354) + "s"] = _0x74fec6;
          else if (this[c(-432, -427, "^6kz", -266, -387) + c(-234, -265, "r$rT", -322, -203) + c(-214, -301, "(IHP", -364, -285) + l(-532, "RWH[", -292, -448, -425) + "or"](m[I("MhOs", 851, 859, 989, 983)])) {
            if (c(-233, -136, "0i(y", -285, -261) === d(-6, -189, 30, -73, "!Yp2")) return;
            C = this[d(20, -55, -19, -94, "t#!w") + d(-262, -229, -269, -162, "wF2n") + l(-378, "afp^", -569, -485, -472) + "s"](this[I("wF2n", 1132, 987, 906, 1028) + l(-409, "zRV(", -204, -320, -273) + "s"], t), f--;
          }
        }
        if (m[I("#dcD", 966, 810, 807, 910) + Q(-332, "5DwP")])
          if (I("!Yp2", 952, 1007, 1032, 1049) === Q(-185, "]eQv")) ({ deviceInfo: s } = m);
          else {
            const y = {};
            return y[I("x7&G", 970, 1177, 969, 1086)] = _0x357f18[l(-200, "gg6l", -207, -160, -270)], y.id = _0x44ec16[l(-350, "#70f", -482, -320, -444) + I("N6o7", 1205, 1028, 1230, 1105)], y;
          }
        a += m[I("9M[#", 1070, 1238, 1094, 1118) + l(-387, "^oe$", -182, -295, -315)] || 5394 + 62 * -87;
      } else {
        const m = {};
        return m[c(-291, -110, "]eQv", -237, -227) + Q(-284, "9M[#")] = this[c(-191, -192, "toFy", -230, -221) + I("7D^4", 1003, 948, 982, 1043)], m[Q(-223, "u5K(") + d(9, -144, -164, -62, "c*40") + "e"] = !1, m;
      }
    const E = Math[Q(-391, "#vBQ")](a / (g || -1540 * 3 + 5346 + -25 * 29));
    this[Q(-306, "VGXp") + c(-5, -132, "MhOs", -155, -127) + "s"] = this[I("gg6l", 1063, 996, 958, 956) + c(-325, -374, "#vBQ", -336, -345) + I("c43j", 1118, 1295, 1156, 1157) + "s"](this[c(-415, -324, "MhOs", -369, -329) + Q(-297, "d#MR") + "s"], {}, s == null ? void 0 : s.id);
    function I(f, m, y, G, b) {
      return RA(f - 283, b - 831, y - 484, G - 368, f);
    }
    const x = {};
    x[l(-409, "D7gJ", -459, -247, -370) + "ge"] = E, x[d(58, 52, -6, 22, "#vBQ") + I("pimi", 1179, 1141, 1063, 1158)] = s;
    function d(f, m, y, G, b) {
      return Be(b, m - 391, y - 263, G - 47, G - -447);
    }
    function l(f, m, y, G, b) {
      return oA(m, m - 91, y - 146, G - 245, b - -1273);
    }
    function Q(f, m, y, G, b) {
      return lA(f - 256, f - -836, m);
    }
    return x;
  }
  async [sA(31, "^6kz", -8) + RA(139, 232, 116, 106, "]eQv") + sA(16, "gg6l", 109) + RA(218, 139, 244, 183, "t#!w")](n) {
    const t = Date[o(387, 276, "KfYW", 327)]();
    function e(g, s, C, c, E) {
      return oA(C, s - 118, C - 212, c - 497, s - -456);
    }
    function A(g, s, C, c, E) {
      return sA(g - 202, s, C - -142);
    }
    function o(g, s, C, c, E) {
      return Be(C, s - 331, C - 418, c - 234, g - 42);
    }
    function r(g, s, C, c, E) {
      return sA(g - 374, s, g - 127);
    }
    function a(g, s, C, c, E) {
      return sA(g - 447, c, g - 277);
    }
    try {
      if (r(237, "afp^", 294, 313, 318) === r(315, "$K^K", 264, 308, 357)) {
        const g = {};
        g[r(267, "c*40", 253, 319, 298)] = _0x3a49b5, _0x8b2ac1[a(480, 461, 577, "7D^4", 439) + A(179, "toFy", 40, 91, 88)] = g;
      } else {
        const g = await this[r(183, "gg6l", 202, 162, 94) + e(340, 332, "(IHP", 255, 406) + o(542, 610, "MhOs", 485, 433) + "m"](n), s = Date[a(461, 489, 599, "N6o7", 322)]() - t, C = this[e(395, 376, "wBh*", 346, 390) + a(474, 388, 357, "qzRn", 444) + A(-46, "wBh*", -129, -256, -174) + "fo"](g);
        Cn(g);
        const c = {};
        return c[o(477, 487, "5DwP", 367, 607) + a(244, 328, 243, "zn2g", 339)] = s, c[A(-195, "9M[#", -85, -185, -141) + r(82, "7D^4", -51, 90, -56)] = C, c;
      }
    } catch (g) {
      if (e(510, 382, "gg6l", 245) === e(462, 585, "t#!w", 600)) {
        const s = {};
        return s[a(221, 106, 194, "#vBQ")] = g, s;
      } else this[r(254, "DozF") + A(-44, "#vBQ", -130) + A(-85, "toFy", -19) + o(373, 496, "CVeY", 418) + "or"](_0x47b65d[r(135, "x7&G")]) && (_0x5d0b8b = this[e(520, 412, "ir&l", 286) + a(332, 390, 447, "VGXp") + e(572, 498, "gg6l", 595) + "s"](this[a(319, 401, 287, "VGXp") + o(455, 464, "x7&G", 577) + "s"], _0x295c76), _0x4edd13--);
    }
  }
  [oA("hH$S", 972, 926, 783, 857) + Be("c*40", 281, 295, 312, 254) + lA(372, 499, "#dcD") + oA("#dcD", 693, 712, 763, 782) + "or"](n) {
    function t(o, r, a, g, s) {
      return Be(a, r - 140, a - 67, g - 43, o - 530);
    }
    function e(o, r, a, g, s) {
      return RA(o - 242, g - -90, a - 299, g - 374, s);
    }
    function A(o, r, a, g, s) {
      return oA(g, r - 182, a - 63, g - 38, o - -846);
    }
    return n instanceof DOMException && n[e(65, 160, 152, 94, "(IHP")] === t(1021, 1080, "wBh*", 1058) + A(16, 8, 122, "DozF") + A(-3, 50, 113, "ir&l") + A(121, 85, 21, "D7gJ");
  }
  async [lA(632, 591, "(IHP") + sA(98, "#dcD", -40) + oA("zn2g", 709, 952, 824, 833) + lA(728, 634, "D7gJ") + "lt"](n, t, e) {
    return { optSetting: await yC(), afterOpt: t, beforeOpt: e };
  }
  [oA("#dcD", 754, 957, 991, 872) + lA(783, 675, "gg6l") + RA(123, 238, 321, 171, "0i(y")](n) {
    function t(A, o, r, a, g) {
      return oA(g, o - 279, r - 231, a - 201, o - -1339);
    }
    function e(A, o, r, a, g) {
      return sA(A - 31, A, r - 669);
    }
    Object[t(-474, -479, -390, -608, "HR$2") + "es"](n)[t(-318, -341, -354, -281, "ir&l") + "ch"](([A, o]) => {
      function r(c, E, I, x, d) {
        return e(c, E - 3, x - -1183);
      }
      function a(c, E, I, x, d) {
        return e(d, E - 405, c - 180);
      }
      function g(c, E, I, x, d) {
        return t(c - 46, E - 1246, I - 307, x - 140, x);
      }
      function s(c, E, I, x, d) {
        return t(c - 323, c - 1103, I - 294, x - 211, d);
      }
      function C(c, E, I, x, d) {
        return e(c, E - 269, d - -340);
      }
      if (s(548, 669, 594, 592, "hW3v") === s(783, 901, 871, 814, "Diw$")) {
        const c = _0x884d54(_0xeaa91f), E = c == null ? void 0 : c[a(850, 990, 746, 818, "^oe$") + C("5DwP", 526, 506, 547, 414) + "s"]();
        if (!(E != null && E[r("c*40", -702, -581, -563) + "t"]) || !(E != null && E[s(575, 591, 623, 573, "VGXp")]) || !(E != null && E[C("Diw$", 604, 432, 553, 525) + C("SEh1", 508, 425, 365, 495)])) throw new _0x36ab79(g(738, 871, 970, "(IHP") + r("gg6l", -389, -532, -396) + a(941, 820, 867, 912, "toFy") + a(936, 1018, 847, 797, "ir&l") + a(923, 862, 963, 1022, "0i(y") + r("D7gJ", -315, -315, -353));
        if (c) {
          const I = {};
          return I[s(547, 526, 427, 457, "5w$u")] = c[r("hH$S", -381, -498, -481)], I.id = E[g(681, 820, 743, "]eQv") + g(589, 726, 720, "pimi")], I;
        }
        return;
      } else {
        const c = A;
        if (S(this, Ue)[c])
          if (s(733, 687, 682, 720, "Diw$") === r("VGXp", -564, -525, -448)) S(this, Ue)[c] = { ...S(this, Ue)[c], ...o };
          else {
            const E = { ..._0x136b05 }, I = E, x = { ...typeof I[C("D7gJ", 633, 412, 561, 536)] == s(698, 808, 700, 657, "0i(y") + "t" ? I[g(801, 825, 945, "toFy")] : {}, ..._0x344cb0 }, d = x;
            if (_0x291382) {
              const l = {};
              l[C("i#Y)", 176, 398, 314, 294)] = _0x544083, d[s(803, 716, 795, 692, "Diw$") + C("zn2g", 313, 440, 296, 322)] = l;
            }
            return I[r("VGXp", -641, -577, -517)] = d, I;
          }
      }
    });
  }
  [sA(70, "DozF", 7) + sA(76, "VGXp", 55) + Be("HR$2", 465, 417, 438, 501) + "s"](n = {}, t = {}, e) {
    function A(I, x, d, l, Q) {
      return lA(I - 426, d - -132, l);
    }
    const o = { ...n };
    function r(I, x, d, l, Q) {
      return oA(d, x - 193, d - 410, l - 406, l - -737);
    }
    const a = o, g = { ...typeof a[r(332, 133, "RWH[", 268)] == r(134, 214, "MhOs", 91) + "t" ? a[c(92, 137, 183, 64, "SEh1")] : {}, ...t }, s = g;
    function C(I, x, d, l, Q) {
      return sA(I - 272, l, I - 458);
    }
    function c(I, x, d, l, Q) {
      return Be(Q, x - 401, d - 7, l - 17, I - -156);
    }
    function E(I, x, d, l, Q) {
      return lA(I - 360, x - 687, Q);
    }
    if (e)
      if (C(588, 686, 694, "c*40") !== A(311, 544, 438, "pimi")) {
        const I = {};
        I[C(603, 496, 611, "FhOM")] = e, s[A(547, 558, 515, "gg6l") + r(34, 267, "wF2n", 138)] = I;
      } else throw new _0xc07603(E(1353, 1325, 1194, 1314, "hW3v") + C(486, 585, 442, "]eQv") + A(461, 322, 401, "i#Y)") + r(361, 383, "CVeY", 292) + c(339, 265, 440, 427, "u5K(") + r(206, 254, "#dcD", 167));
    return a[E(1068, 1202, 1304, 1246, "hH$S")] = s, a;
  }
  [lA(328, 449, "x7&G") + Be("c43j", 369, 432, 379, 295) + Be("]eQv", 370, 529, 438, 445)](n) {
    function t(e, A, o, r, a) {
      return sA(e - 16, o, A - 487);
    }
    this[t(439, 554, "#70f") + t(481, 509, "]eQv") + "s"] = n;
  }
  [RA(260, 122, 156, -9, "qzRn") + lA(498, 566, "r$rT") + RA(234, 267, 375, 310, "#70f") + RA(223, 263, 226, 400, "wF2n") + oA("Wk8b", 804, 850, 808, 805)]() {
    function n(A, o, r, a, g) {
      return oA(g, o - 381, r - 499, a - 139, A - -255);
    }
    function t(A, o, r, a, g) {
      return RA(A - 155, o - -156, r - 400, a - 385, a);
    }
    const e = {};
    return e[n(689, 732, 738, 710, "7i00") + t(115, 145, 208, "]eQv")] = this[n(689, 760, 813, 708, "7i00") + t(-6, 67, -36, "x7&G")], e[n(688, 664, 773, 615, "i#Y)") + n(771, 736, 657, 699, "7i00") + "e"] = !1, e;
  }
}
Ue = new WeakMap();
function jn() {
  const i = ["pfBdVG", "WRmRWRyUW5S", "iaS6WQX5", "eeyJc3u", "WP3cPb7dJtbcWO7cLa", "W47dGdnQ", "yJpcTbrL", "WPtdQs0fkG", "lay+WRPU", "ztddTWFdJW", "WOtdGt0", "k8kwW5jZuW", "f8kBW7FcLwW", "W7NcQsNdQSkt", "W7tcM8kgCSol", "WPfNW4emhW", "beWMc2i", "W5ddVZZdH8k/", "nCoZCfRcOW", "W5JdPtG", "W5/dTZ/dHW", "wSkpW57cMMy", "FSoCWRhcPhO", "eXqcWRFdGG", "vCkPiw/dUG", "W5BcNdldISka", "hmkAW4dcLgO", "dJrhjCk0", "W4SNWP7cJmko", "W5VdVJJdTde", "BIJcPs9Q", "WPmFWPJcLCoH", "W5NdSZVdHCkZ", "W6RdIrtcVsC", "W5KBqXSD", "W7ldUtZdKCkV", "v8kIihZdRq", "W4BdVZBdLSkZ", "au0plG", "uqywWOxdLq", "vaG5", "WOGzWRNcT8oH", "W5ZdSYddHCk+", "eveNdwq", "WOWfWRpcHSoR", "aWKqWP/cGq", "W4OLWPVcHmku", "CsRcUs9l", "WQ1PWPG3", "WPunWRW", "WPynWRxcHSoO", "aNfqkCkH", "DXtcOJSD", "kHSIWQzO", "imktW4DTrW", "kSkvW5jfvW", "rSoTWPmICq", "WQPRWPaBra", "g8oHW4iAlq", "W6hcNCkmzmoq", "W47dMcvXWPG", "WQlcNCoi", "j8klWRdcG8kd", "WQjLW4ZcSmo8", "W4hdPJyyzq", "ECoCW6/dH8kBWPGgr8octSoOW48", "WOzWW5qQhG", "W4ZdRXldRcC", "WPb0W4STcq", "uaiLWRuz", "WPuCWRBcGmoT", "WOuoWQGkW6G", "W4hcNCkmzmoq", "aSklW5pcGxS", "W5NdIsP0WP4", "WPpdG2a", "CmofbLNdGa", "dLOhoCk1", "W4S8WPhcGSkt", "W6aLWOZdRmkRr8oCE8oGWOubWP7dP8o8", "CGZdTZldIq", "W4NdJtvXWO4", "WONdRtallq", "W4ZcHCkHu8oo", "f0W7ewi", "BqFcRJC", "W4xcHYtdGmkD", "rWijWOldGG", "W4ldOIVdJSk+", "W6ldLfNdUYe", "W4VdTLZdRaW", "rCkbiwJdSq", "tCksW5/cVgG", "WQ1PW59rpq", "W5eMWPb3s04qewxdJuq", "s8oLiCkMWPK", "W7lcH8krFW", "W5uAwq", "WPmRWRyUW5S", "W6aSW5XhW6u", "W6K8W70", "vCoIWOeJFG", "W7VdTbpcTs8", "DmowWPmZbSkjWRpdK0xdVmoly8kD", "W5ldTZ/dH8kP", "q8oYiCkOWQ4", "EmoxW6NdGCkvWPbUwCocAmo0W6JdRG", "n8kqW4HswW", "s8odogJdPG", "uSkvW5lcRsC", "tbClWQ/dHa", "W57dGZjUWOK", "s8oLiCkM", "avNcS8o/WPm", "W6RdSIldTIy", "W6ddLfBdUW", "vmklW4/cNwi", "pSkaWQVcKCom", "afuJp8k2", "W4NdGMVdNr8", "ybtcPJmh", "W7ddItH0WPW", "b1NcS8o9WPq", "qqhcK8oeWPldS0ddSq", "W4FcJYNdICkb", "iaCJ", "bCkAW4dcKNS", "rWJdKSkIWOO", "a8kEW5VcNxS", "W4hcJYNdI8kg", "WOC7nCoifa", "EuFdRZ1/", "o8o5AG", "tqatWO7dQa", "vmoJpmkPWQ8", "uCkrW53cHY8", "W63cGSkwu8ob", "W4VcKhLPhG", "qaNcTJ4x", "s8opiq", "t8kjW5RcSgK", "kL4qjmkM", "kCoLdXa/", "W7FcHLndaa", "uCk/hh7dUG", "s8kuW5lcT3m", "h0admG", "DmowWO8cBq", "eL3cRSoaWOu", "WRhdGCoqi8ksWRZcIqq6A8kJ", "nf/dTwjlcrRdV8oPWPVcKeO", "W6VdTqJcUJW", "kqGJWR0", "WRrJW7JcUCo9", "qHilWOtdKq", "W4HDW6hdK8kZWRrdDSkDr3ftW48", "W53cJY3dGa", "qSo3WOeUAq", "WQi+WRitW44", "fZHnk8kM", "f8oKDMBcTa", "sGKlWPG", "WO8MjSombq", "ax4homkH", "WOqTWRCZW70", "umoao2hdTG", "sG4ZWQyu", "o8o8W5ixpq", "aKi5f3C", "DdhdNthdKa", "y8oQWPyKFG", "p8oJCgZcOG", "W5FdUsddP8k6", "WQnWW5ZcSSoT", "x27dNdpdTW", "WRryW5e", "fCkAW4tcMMW", "hCkEW5dcLMm", "g0umlmkN", "BCorWPdcS2C", "zbaVWQJdSW", "iGWIWQ5/", "vmo7WPKHEa", "bHHh", "AConWPRcGM0", "W43dUchdSYe", "DCoFWPJcS0e", "WO3dIrqVbW", "W5NdMs58WOK", "W6VdM08", "aLO8jxq", "WPWoe8oSfW", "oSoYgbCK", "W5ZcU1nLhq", "sCkAW5lcT3m", "DbpdRCkaWRG", "W5xdSYtdI8k4", "W445WPtcSmohW64N", "gX8fWOddKq", "xSkYW58", "huG2fCkW", "WR9+W4i", "vWywWOFdKG", "DY/cKtHl", "fmkWW4lcH2y", "WQTpW75FnG", "W7uPW6DfW6i", "sd3cPrrN", "WRFcUu3dQhOKWOxdVuJdRNLv", "W6hdKH/cQd0", "pqG5WQDU", "omkGdHmK", "W6hdRXtcVG", "W53cLgzUcq", "fWuYWPhdLq", "wWmsWRqF", "hb0IWQX7", "W44uxGCa", "W5NcIYpdKq", "W7KrACkRuG", "ev3cRmo6WOm", "WQf6W4WWcq", "W4VcNmkoFSok", "gmkrW5VcHY8", "guuglSk7", "xbeYWQaD", "bCkQWPFcG8oh", "n8keW49VrG", "W6ibW6bnW7K", "W5hcHSkqCSof", "FJBdLIldGW", "DSkQoKhdQq", "vmoommkaWRO", "WQJcL8ojlhi", "WOX+WPaGsq", "W7KyWPaay8kwW5iGW5K3p8knWOaD", "W5OXWRRcL8ks", "y0FdQZq", "kCo0W54rla", "B1NdPq3dUq", "DtJcMs9y", "W4ZdRYxdTta", "tGpcPZSs", "zctcRHvW", "ftHhkCk6", "s8kxW5RcOhq", "g1e+fCk0", "WPynWQ4", "t8oQWOKQDq", "W7VdPZ3dLcm", "vCoSWO8JBG", "bmkEW4BcMMa", "ehhcTmo1WO8", "WRtdGmosiCksW77dLGy7BSkDlqa", "W5VdSIldTcy", "zXVdQSklWQG", "yY7cTG9N", "W5OqWONcHmkm", "W4dcIZtdPSkD", "WQz7WOa+xG", "W5SWWONcJmkd", "W7RdKeNdVZK", "k8kDWRJcLmox", "W5VdVd7dTdy", "WOJdPZC", "W7xcM8kgy8om", "WO8Mm8oDea", "fmkXzCo3W6VcTenOlmkYBSo/WP4", "WOK/kSokaW", "xH9xECoGW5/dJNNdML3cL2NdOa", "WPKQpSodfa", "qSogWO4RCG", "W6RdSJNdQty", "W6ibW6O", "WPtdGIK7aG", "W47dMd1VWOK", "W4KbuG", "W5xdNrO/bSksDW", "WQrTWOehwq", "cMONd8k6"];
  return jn = function() {
    return i;
  }, jn();
}
function sa() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function $a() {
  return /Android/i.test(navigator.userAgent);
}
function qn() {
  return /Firefox/i.test(navigator.userAgent);
}
function SC() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const GC = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function NC() {
  return navigator.userAgent;
}
function RC() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
const dn = {};
dn.width = 1920, dn.height = 1080, dn.facingMode = ta.FRONT;
const FC = dn;
var Qt, Jt, ue;
class Es {
  constructor({ defaultVideoConstrains: n = FC, minCameraShorterSide: t = gC } = {}) {
    U(this, Qt);
    U(this, Jt, []);
    U(this, ue, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, W(this, Qt, e);
  }
  get availableCameraProperties() {
    return S(this, Jt);
  }
  get mediaStream() {
    return S(this, ue);
  }
  get videoTrack() {
    if (S(this, ue)) return yr(S(this, ue));
  }
  get isCameraActive() {
    var n;
    return !!((n = S(this, ue)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Cn(t);
  }
  async open(n = {}) {
    $a() && qn() && await fr(-2355 + 51 * 55), W(this, ue, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get next device");
    const n = await Mi(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (-1 * 4397 + -4094 + 8492)] ?? n[4271 + -1 * 4271]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new D("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    S(this, ue) && (Cn(S(this, ue)), W(this, ue, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = S(this, Jt), A;
  }
  getSettings() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new D("Video width is undefined");
    if (!n.height) throw new D("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings(), t = await es(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== ta.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (sa())
      return (await Mi()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await Mi();
    for (const t of n) {
      $a() && qn() && await fr(450);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = yr(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), g = { ...a };
        g.deviceName = r.label;
        const s = {};
        s.cameraProperties = g;
        const C = s;
        S(this, Jt).push(C), Cn(o);
      } catch (e) {
        e instanceof Error && D.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...S(this, Qt).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new D("Could not init camera settings");
    if (typeof S(this, Qt).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < S(this, Qt).minCameraShorterSide)
      throw this.close(), new D("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
Qt = new WeakMap(), Jt = new WeakMap(), ue = new WeakMap();
var mo;
class vC {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    U(this, mo, !1);
    p(this, "videoHandler");
    p(this, "cameraHandler");
    p(this, "videoRecorder");
    p(this, "performanceCheckup");
    p(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n, this.videoRecorder = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    S(this, mo) || (W(this, mo, !0), await Es.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !qn() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw new D("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new D("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new D("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new D("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 7869 + 6359 * 1 + -14228, -1957 + 1533 * 1 + 106 * 4), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    var n;
    this.cameraHandler.close(), this.videoHandler.stop(), (n = this.videoRecorder) == null || n.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    var t;
    await this.cameraHandler.open(n), GC() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream(), (t = this.videoRecorder) == null || t.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !qn() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
mo = new WeakMap();
var Ye;
class WC {
  constructor(n) {
    U(this, Ye);
    W(this, Ye, n);
  }
  get videoElement() {
    return S(this, Ye);
  }
  async play(n) {
    S(this, Ye).srcObject = n, await S(this, Ye).play();
  }
  stop() {
    S(this, Ye).srcObject = null;
  }
  hasSrcObject() {
    return !!S(this, Ye).srcObject;
  }
}
Ye = new WeakMap();
function Vn() {
  var i = ["jmotnJFdMq", "WQRcRrdcIu4", "WRfwW5zTuW", "WOfvea", "WPDaW6RcHSot", "WP/dHaZcHSkQ", "W6ZdSfZdQWvkjNpcSmoNWRddO1e", "d8ktWQjKWQi", "WQ3cIcCffq", "ELddOxLH", "BmkgWPX+aG", "W50jtmoNmCkwosG", "er/cUSojpIj8sCkrW5FcLYJdKa", "FLRcJSoFtG", "W6JdQNvoltmZWRRdPHhdNCkvsq", "W6tcI8kRbMBcTe5yWOKnW7tcMa", "jwzVWO8", "bgDKWOHE", "BxdcSSozuW", "W4yfAmkVa8opWPaZaNPpeG", "pK5TjCoS", "WRVdKSoL", "pMZcUCkKbG", "WPDRESokaq", "WOGGh8kIWQa", "W5FdSCoqb8kC", "WPWQdW", "fePHW7hcSa", "W5OMfSkkWR1LlG", "ESkkWPXRgq", "W6bNz8k3pa", "W5NcH8oFW4rE", "WP/dTHNcJCkl", "AK3dTG", "qH1HieW", "W4ZcVv3dJCoCuKhdJ8oUW4NcLqlcIa", "s8kAxCo2WPS", "W6RdO10", "W6tcHCkJaXldJN9EWQC/", "ACknWPO", "qg9eWOlcOa", "WOFcJsC", "WRxcQqRcU1O", "WPfkfSkAkG", "cdbSimoCdxq", "WQBdICo9rW8", "jgRcR8k+ka", "WR9PFSoOdG", "WOjfW6a", "WPlcJJHzra", "euaThui", "tZTUi8oJ", "s2DyWPlcSq", "WPSPgSkjWRu", "WPNcUIaBBa", "r8khr8obWQq", "WOVcJICu", "WPzqiCkefW", "WP3dNvGUW4q", "WOn6pmkcdq", "WOfwhmkvW5K", "zSk6oNaA", "yqjoggFcUrJdImkO", "W4hdGCommCkD", "W5SotmoqWOdcNCkOW5VdR8o5W7CvcW", "dCowpc7dJq", "t2DeWOu", "pmoRDsmCyrXFW5b8", "s8kIs8omWRa", "bgfJ", "FmoWW4qiWRLIW6JcQa", "rYCyu20", "W43dGmombSk5", "cCksWRj1WR0", "WRVcOrBcRei", "yuNdVxG", "W5pdQmkRcfW", "AgNdV8orW7W", "WQ7cUr/cP25boSk6ftC", "WRtcMcybxq", "WPjkiCoSxW", "W7RdVLRdK2G", "rMTtWPhcTW", "tfqE", "ymk6f3SZ", "WOTiW6VcJmoR", "WOHmW7ZcMmo1", "iwzZWPHb", "WPPsp8o9xW", "CCoEW4iAW4y", "WPxcMdG", "W47cHGGsW6OWau8Y", "WPxdUaC", "gCoxW57dPmkL", "yColia", "WQr7W6K", "bmo2nuNdPqxdKd18t8oBm8kB", "W6VdPeBdVLm", "D8kgWPD8aG", "jmotWR1Yka47W70", "W7RdNCkidtOpWR7dHK3cGXpcLZK", "WPzhW71yxq", "v8kMDtVcTq", "W7tdQfddOhu", "WPXoW61guW", "WOzlESoSaa", "WRJcGWhcPNi", "WPNdG1C7W5C", "WONcHtyYfW", "WObxA8obhq", "WPXwkmoUsa", "bCkPW4SdWO8", "W4hdOmoAaCkh", "W4qfAmkVcSoeW5GDdfrCkCkr", "j0jwjmo+", "cCojjHFdGW", "EvVcKa", "w8kMEadcOG", "h8oygConWPOwWOXXWOi", "WRNcSI0CDq", "owz0W7FcQW", "DJC5W58gW73dLrhdNcVcTr1d", "W7/dMCkltgfaW4BdSwy", "qd97W7ZcNCopW4/cVW", "qeJdUSkWAq", "WPHCW7O", "BIFdVmoMECoHbwBdVCovACkgW5W", "nmkekSkykW", "W7O0WRyZDmoIqSkWWOzE", "WPzFomoKwW", "WRZdK8o7qZy", "W6BdVvVdTxq", "c8kipCkTjG", "W4ZdNrhdGqK"];
  return Vn = function() {
    return i;
  }, Vn();
}
(function(i, n) {
  function t(s, C, c, E, I) {
    return CA(c - 239, s);
  }
  function e(s, C, c, E, I) {
    return CA(C - 921, I);
  }
  function A(s, C, c, E, I) {
    return CA(E - -290, C);
  }
  function o(s, C, c, E, I) {
    return CA(c - 899, C);
  }
  function r(s, C, c, E, I) {
    return CA(I - 601, c);
  }
  for (var a = i(); ; )
    try {
      var g = parseInt(A(103, "6#5p", 203, 144, 185)) / 1 * (-parseInt(r(1007, 975, "!@))", 1033, 995)) / 2) + -parseInt(r(997, 926, "GkP4", 921, 985)) / 3 * (parseInt(t("rzlS", 662, 695, 730, 756)) / 4) + parseInt(e(1389, 1347, 1398, 1354, "mhe8")) / 5 * (-parseInt(A(194, "ofQ6", 154, 130, 136)) / 6) + -parseInt(e(1268, 1289, 1334, 1317, "E@kQ")) / 7 + -parseInt(e(1326, 1296, 1239, 1267, "g)!&")) / 8 * (parseInt(o(1319, "F(Yo", 1317, 1329, 1341)) / 9) + -parseInt(r(1032, 945, "P$Qb", 960, 968)) / 10 * (parseInt(o(1216, "Knae", 1242, 1276, 1201)) / 11) + parseInt(r(972, 941, "js*H", 913, 949)) / 12 * (parseInt(r(973, 975, "L9ni", 956, 941)) / 13);
      if (g === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Vn, -463929 * -3 + -41 * 33455 + 838630);
function uA(i, n, t, e, A) {
  return CA(i - 995, A);
}
function qe(i, n, t, e, A) {
  return CA(A - -692, i);
}
function at(i, n, t, e, A) {
  return CA(t - 221, n);
}
function re(i, n, t, e, A) {
  return CA(A - 864, i);
}
function Qe(i, n, t, e, A) {
  return CA(n - 716, A);
}
function CA(i, n) {
  var t = Vn();
  return CA = function(e, A) {
    e = e - (6969 + -2996 * 1 + 27 * -135);
    var o = t[e];
    if (CA.DZaVpI === void 0) {
      var r = function(c) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", x = "", d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, y = I.length; m < y; m++)
          x += "%" + ("00" + I.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(c, E) {
        var I = [], x = 0, d, l = "";
        c = r(c);
        var Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      CA.FXvnFr = a, i = arguments, CA.DZaVpI = !0;
    }
    var g = t[-827 * -5 + 1 * 6628 + 47 * -229], s = e + g, C = i[s];
    return C ? o = C : (CA.Ygmjsz === void 0 && (CA.Ygmjsz = !0), o = CA.FXvnFr(o, A), i[s] = o), o;
  }, CA(i, n);
}
var r0, a0, g0;
class MC {
  constructor() {
    p(this, g0, 0);
    p(this, a0);
    p(this, r0);
    function n(e, A, o, r, a) {
      return uA(e - -406, A - 256, o - 367, r - 491, o);
    }
    function t(e, A, o, r, a) {
      return re(A, A - 484, o - 164, r - 187, a - -1810);
    }
    this[n(1005, 1012, "ofQ6", 1042) + n(940, 970, "g)!&", 888) + n(949, 1010, "tPM^", 890) + t(-508, "%T69", -519, -517, -549)] = Date[t(-587, "]RzQ", -600, -591, -608)]();
  }
  [(g0 = uA(1327, 1346, 1332, 1263, "g)!&") + re("L9ni", 1284, 1225, 1209, 1256) + qe("n!sW", -203, -306, -327, -267), a0 = re("]RzQ", 1192, 1179, 1166, 1233) + at(599, "[QhB", 642) + at(511, "M()k", 557) + re("hVEA", 1313, 1246, 1237, 1253), r0 = qe("9@ZA", -194, -263, -260, -259) + uA(1337, 1364, 1304, 1404, "n!sW") + "p", re("]yHX", 1237, 1243, 1234, 1205) + Qe(1146, 1140, 1145, 1181, "L9ni") + at(665, "LkG#", 672))]() {
    function n(o, r, a, g, s) {
      return qe(s, r - 375, a - 193, g - 236, r - 1504);
    }
    function t(o, r, a, g, s) {
      return Qe(o - 382, o - -1300, a - 210, g - 183, r);
    }
    function e(o, r, a, g, s) {
      return uA(s - -758, r - 288, a - 465, g - 357, g);
    }
    function A(o, r, a, g, s) {
      return Qe(o - 436, o - -1576, a - 329, g - 421, r);
    }
    if (this[t(-146, "Xh#4", -162, -203) + t(-247, "[QhB", -239, -275) + e(603, 696, 656, "6#5p", 630)]++, this[e(712, 750, 733, "6#5p", 696) + n(1248, 1231, 1242, 1177, "F582") + A(-456, "yViW", -500, -488)] === 5 * -1855 + 3504 + 5772)
      if (A(-457, "P$Qb", -483, -431) !== A(-486, "]RzQ", -516, -469)) this[e(590, 651, 595, "H^WU", 622) + A(-506, "*#YN", -458, -571) + "p"] = Date[e(719, 653, 661, "Z$2Z", 687)]() - this[e(618, 588, 549, "!@))", 589) + e(682, 634, 663, "yViW", 694) + A(-407, "6#5p", -352, -396) + n(1185, 1171, 1186, 1173, "ofQ6")];
      else return;
  }
  [Qe(1124, 1117, 1095, 1181, "!@))") + Qe(1164, 1148, 1159, 1161, "k[D!") + Qe(1162, 1160, 1178, 1093, "g)!&") + uA(1368, 1385, 1435, 1325, "Knae") + "up"]() {
    if (!Bo())
      if (t(-629, -569, -526, -566, "JxFm") === t(-626, -609, -631, -607, "LkG#")) {
        if (!_0x1dc648()) return;
        _0x588c77[t(-551, -632, -636, -585, "GkP4") + n(808, 761, 736, 743, "P$Qb") + e(-190, -196, -211, "e(xB") + "r"](o(216, 194, "v[m(", 274, 242) + "wn", this[A(1159, 1207, 1164, 1098, "2kIX") + t(-593, -556, -492, -530, "]yHX") + t(-502, -475, -555, -519, "ZMqq")][e(-127, -205, -179, "Xh#4")](this));
      } else return;
    function n(r, a, g, s, C) {
      return re(C, a - 8, g - 386, s - 65, a - -434);
    }
    this[o(171, 225, "2UmQ", 214, 211) + A(1180, 1173, 1218, 1211, "F582") + o(212, 193, "H^WU", 181, 220)] = 0;
    function t(r, a, g, s, C) {
      return at(r - 462, C, s - -1186);
    }
    function e(r, a, g, s, C) {
      return qe(s, a - 117, g - 28, s - 444, g - 91);
    }
    this[o(202, 223, "Knae", 307, 268) + n(903, 879, 943, 856, "f@@S") + "p"] = void 0;
    function A(r, a, g, s, C) {
      return uA(r - -234, a - 100, g - 45, s - 288, C);
    }
    function o(r, a, g, s, C) {
      return Qe(r - 327, C - -891, g - 94, s - 291, g);
    }
    window[o(310, 231, "#q&n", 221, 252) + t(-565, -525, -563, -582, "n!sW") + n(750, 785, 747, 732, "p6ls") + o(184, 245, "%T69", 252, 237)](n(853, 884, 823, 913, "H^WU") + "wn", this[o(262, 206, "ZMqq", 272, 230) + A(1089, 1039, 1156, 1026, "2kIX") + t(-623, -615, -658, -618, "yViW")][A(1192, 1177, 1184, 1150, "hVEA")](this));
  }
  [Qe(1177, 1127, 1157, 1155, "L9ni") + uA(1324, 1371, 1264, 1259, "d2zA") + qe("Xh#4", -355, -303, -283, -296) + uA(1359, 1383, 1313, 1308, "%T69") + "up"]() {
    function n(r, a, g, s, C) {
      return Qe(r - 140, g - -1452, g - 369, s - 47, a);
    }
    function t(r, a, g, s, C) {
      return uA(C - -373, a - 391, g - 59, s - 250, a);
    }
    function e(r, a, g, s, C) {
      return re(C, a - 381, g - 184, s - 203, g - -320);
    }
    function A(r, a, g, s, C) {
      return Qe(r - 328, r - -1495, g - 54, s - 446, C);
    }
    if (!Bo())
      return o(155, 103, "F(Yo", 115) === n(-385, "P$Qb", -357, -378) ? this[o(88, 129, "ZKXd", 91) + t(1043, "6#5p", 1001, 1017, 1059) + A(-397, -396, -393, -401, "GkP4")] : void 0;
    function o(r, a, g, s, C) {
      return uA(r - -1246, a - 465, g - 126, s - 184, g);
    }
    window[e(1034, 979, 973, 961, "F#4y") + A(-392, -375, -427, -379, "9W%3") + t(1061, "js*H", 987, 980, 1024) + "r"](n(-261, "yViW", -276, -244) + "wn", this[o(190, 223, "tPM^", 234) + t(917, "GkU1", 966, 1014, 983) + o(197, 202, "GkU1", 250)][A(-407, -349, -439, -388, "Knae")](this));
  }
  [re("P$Qb", 1380, 1310, 1363, 1325) + at(521, "F582", 555) + "lt"]() {
    function n(a, g, s, C, c) {
      return qe(c, g - 336, s - 296, C - 424, g - 277);
    }
    function t(a, g, s, C, c) {
      return re(C, g - 188, s - 173, C - 257, s - -1696);
    }
    function e(a, g, s, C, c) {
      return uA(g - -689, g - 469, s - 189, C - 166, a);
    }
    function A(a, g, s, C, c) {
      return qe(a, g - 25, s - 333, C - 50, g - 1127);
    }
    function o(a, g, s, C, c) {
      return re(C, g - 248, s - 222, C - 338, s - -1088);
    }
    if (!Bo() || !this[t(-406, -416, -417, "JxFm") + t(-489, -525, -499, "mhe8") + "p"])
      if (t(-456, -486, -475, "2kIX") === t(-452, -455, -483, "*#YN")) {
        var r = {};
        return r[e("H^WU", 672, 739, 633) + e("GkP4", 715, 649, 780) + "e"] = !1, r;
      } else this[e("Xh#4", 714, 740, 707) + A("[QhB", 791, 731, 764) + "p"] = _0x2ab5e1[o(203, 162, 153, "!@))")]() - this[o(167, 118, 145, "]RzQ") + n(-62, -1, -3, -3, "d2zA") + e("Rdvu", 713, 738, 680) + A("%T69", 832, 897, 835)];
    return { performance: !0, hiccupAmount: this[n(10, 43, 78, 51, "ZKXd") + t(-426, -510, -479, "6#5p") + n(-49, -34, -101, -80, "F582") + "t"](), firstHiccup: this[t(-440, -550, -502, "%T69") + n(5, 25, 24, 43, "v[m(") + t(-379, -373, -404, "F582") + o(140, 193, 164, "GkU1") + "ss"]() };
  }
  [re("E@kQ", 1182, 1179, 1183, 1210) + at(572, "hVEA", 586) + Qe(1143, 1129, 1088, 1092, "JxFm") + "t"]() {
    function n(A, o, r, a, g) {
      return uA(A - -579, o - 374, r - 245, a - 423, g);
    }
    function t(A, o, r, a, g) {
      return uA(A - -1561, o - 29, r - 157, a - 267, a);
    }
    function e(A, o, r, a, g) {
      return re(a, o - 243, r - 303, a - 83, r - -159);
    }
    return this[n(858, 864, 819, 794, "tPM^") + t(-121, -68, -187, "g)6]") + e(1122, 1113, 1144, "i]7V")];
  }
  [at(617, "F#4y", 584) + uA(1371, 1405, 1410, 1411, "M()k") + uA(1373, 1438, 1314, 1384, "js*H") + uA(1431, 1479, 1404, 1418, "g)!&") + "ss"]() {
    function n(e, A, o, r, a) {
      return qe(A, A - 446, o - 473, r - 289, a - 148);
    }
    function t(e, A, o, r, a) {
      return uA(a - -650, A - 40, o - 276, r - 293, e);
    }
    return this[t("2kIX", 801, 718, 792, 775) + n(-128, "]yHX", -161, -181, -134) + "p"];
  }
}
const LC = 1 * 3063 + 43 * 47 + -4604, OC = 2797 * -1 + 1 * -999 + -1 * -4036, ca = -4757 * -2 + 7738 + 79 * -218, xs = 1630 * -3 + -241 * 15 + 8520, ds = 2717 + 9 * -237 + 144 * -4, Dr = {};
Dr.codec = "avc1.42E01E", Dr.bitrate = 1e6;
const zo = Dr, JC = -2 * 739 + -2605 * -2 + 1865 * -2, UC = 3e4;
class YC {
  constructor(n, t) {
    p(this, "shouldBeTested", !0);
    p(this, "testFramesSizesList", []);
    p(this, "maximumTestFrames");
    p(this, "maximumTestFramesSize");
    this.maximumTestFrames = n, this.maximumTestFramesSize = t;
  }
  addTestFrame(n) {
    this.testFramesSizesList.push(n);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let n = 1318 * 5 + 5938 * 1 + 6264 * -2;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class ls {
  constructor() {
    p(this, "encoder");
  }
  create(n) {
    this.encoder = new VideoEncoder({ output: (t, e) => {
      const A = new Uint8Array(t.byteLength);
      t.copyTo(A), n(t, e);
    }, error: (t) => {
      throw D.fromError("Encoding error: " + t);
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
function PC(i) {
  if (!i) return !1;
  const n = ls.isSupported();
  return !n && D.logError("Video encoding is not supported in this browser."), n;
}
const br = {};
br.LOW = "low", br.STANDARD = "standard";
const Zn = br, kr = {};
kr.SPS = "SPS", kr.PPS = "PPS";
const Li = kr;
class TC {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 4, t >= n.length) return;
      t++;
      const e = this.extractSPSFromAVCCAndSkipToNext(n, t);
      t = e.nextOffset;
      const A = this.extractPPSFromAVCCAndSkipToNext(n, t), o = {};
      return o.pictureParameterSet = A.parameterSet, o.sequenceParameterSet = e.parameterSet, o;
    } catch (t) {
      D.logError("Failed to parse AVCC parameter sets: " + t);
    }
  }
  extractSPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Li.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, Li.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === Li.SPS ? n[t] & 2 * -1249 + -1421 * 2 + 5371 : n[t], o = t + (-9371 * -1 + -977 + -8393);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 1990 + -398 * 5; r < e; r++) {
      const a = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = a.nextOffset, a.parameterSet && r === 0) {
        const g = {};
        return g.parameterSet = a.parameterSet, g.nextOffset = A, g;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (1227 * -3 + -30 * 276 + 11963) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (-1 * -7715 + 14 * -454 + -1 * 1357), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const a = n.slice(o, r), g = {};
    return g.parameterSet = a, g.nextOffset = r, g;
  }
}
class HC {
  constructor() {
    p(this, "parameterSetsHandler");
    p(this, "START_CODE", new Uint8Array([1 * -9446 + -1 * -3181 + 6265, -7691 * -1 + 7691 + -15382, -1 * 3254 + -128 + -38 * -89, 2 * 3703 + 4539 + -11944]));
    p(this, "parameterSets");
    this.parameterSetsHandler = new TC();
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
    var t, e;
    const n = [];
    return (t = this.parameterSets) != null && t["sequenceParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.sequenceParameterSet)), (e = this.parameterSets) != null && e["pictureParameterSet"] && (n.push(this.START_CODE), n.push(this.parameterSets.pictureParameterSet)), n;
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
    if (t + (-3802 + 1903 * 2) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-3985 + 3989 * 1), r = o + A;
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
class KC {
  constructor(n = ds, t = ca) {
    p(this, "chunks", []);
    p(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (1769 + 1979 * 1 + -3747)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(2587 + -199 * 13, n));
  }
}
class Ag {
  constructor() {
    p(this, "codec");
    p(this, "bitrate");
    p(this, "resolution");
    p(this, "framerate");
  }
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
    if (!this.codec) throw D.logError("VideoEncoderConfigBuilder: codec is not set.");
    if (!this.resolution) throw D.logError("VideoEncoderConfigBuilder: resolution is not set.");
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
class _C {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (SC() && e > A) {
      const a = e, g = A, s = a / g, C = t * s;
      return { width: Math.floor(C / (-5718 + -1 * -7862 + 102 * -21)) * (113 * 12 + -6299 * 1 + 5 * 989), height: t };
    }
    if (A < e) {
      const a = t / o;
      return { width: t, height: Math.floor(a / (-1 * 9621 + 3 * 1158 + -473 * -13)) * 2 };
    }
    const r = t * o;
    return { width: Math.floor(r / (3101 * -1 + 5146 + -9 * 227)) * (-2442 + 913 * -1 + 3 * 1119), height: t };
  }
  create(n, t) {
    switch (n) {
      case Zn.STANDARD:
        return new Ag().setBitrate(zo.bitrate).setCodec(zo.codec).setFramerate(ca).setResolution(this.getScaledResolution(t, LC)).build();
      case Zn.LOW:
        return new Ag().setBitrate(zo.bitrate).setCodec(zo.codec).setFramerate(xs).setResolution(this.getScaledResolution(t, OC)).build();
      default:
        throw D.logError("Unsupported preset for video encoder config");
    }
  }
}
class jC {
  constructor(n, t, e, A) {
    p(this, "videoProcessor");
    p(this, "videoEncoder");
    p(this, "chunkStorage");
    p(this, "qualityTester");
    p(this, "cameraHandler");
    p(this, "videoEncoderConfigFactory");
    p(this, "cameraFramerate");
    p(this, "captureIntervalId");
    p(this, "videoElement");
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new _C(), this.chunkStorage = new KC(), this.cameraFramerate = ca, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(ds, xs), this.startRecording(Zn.LOW);
  }
  startRecording(n = Zn.STANDARD) {
    if (this.captureIntervalId) {
      D.logError("Recording is already in progress.");
      return;
    }
    if (!this.cameraHandler.mediaStream) {
      D.logError("Camera media stream is not available.");
      return;
    }
    this.createVideoElement(this.cameraHandler.mediaStream), this.configureVideoEncoder(n), this.createCaptureInterval();
  }
  async stopRecording() {
    this.clearCaptureInterval(), await this.videoEncoder.close();
  }
  configureVideoEncoder(n) {
    var A;
    const t = (A = this.cameraHandler) == null ? void 0 : A.getResolution();
    if (!t) {
      D.logError("Camera resolution could not be determined.");
      return;
    }
    let e;
    try {
      e = this.videoEncoderConfigFactory.create(n, t);
    } catch (o) {
      D.logError("Failed to create video encoder configuration: " + o);
      return;
    }
    if (!this.videoEncoder.isConfigSupported(e)) {
      D.logError("The provided video encoder configuration is not supported.");
      return;
    }
    this.videoEncoder.configure(e), e.framerate && (this.cameraFramerate = e.framerate);
  }
  createVideoElement(n) {
    if (this.videoElement) return;
    const t = document.createElement("video");
    t.srcObject = n, t.playsInline = !0, t.muted = !0, t.play(), this.videoElement = t;
  }
  createCaptureInterval() {
    if (!this.videoElement) {
      D.logError("Video element is not created.");
      return;
    }
    let n = -8682 + 8221 * -1 + 16903;
    const t = this.cameraFramerate, e = (-3026 + -61 * -66) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === -2215 + -1 * -2215;
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
class qC {
  constructor() {
    p(this, "videoProcessor");
    p(this, "videoEncoder");
    p(this, "qualityTester");
    p(this, "cameraHandler");
  }
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
    return new jC(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class VC {
  create(n, t) {
    if (!PC(t)) return;
    const e = new YC(JC, UC), A = new ls(), o = new HC();
    return new qC().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function ZC(i, n) {
  const t = ne(null), [e, A] = xA(), [o, r] = xA(), { handleError: a, setIsCameraReady: g } = ie(), s = Se((c) => {
    r((E) => QC(c, E));
  }, []);
  z(() => {
    if (!t.current) {
      a(new D("Something went wrong during video initialization"));
      return;
    }
    const c = new WC(t.current), E = new kC(), I = new Es(), x = new MC(), d = new VC().create(I, n), l = {};
    l.videoHandler = c, l.cameraHandler = I, l.performanceCheckup = x, l.cameraEvaluator = E, l.videoRecorder = d;
    const Q = new vC(l);
    return (async () => {
      try {
        const m = {};
        m.facingMode = i, await Q.startFirstVideoStream(m);
      } catch (m) {
        if (m instanceof Error) {
          a(D.fromCameraError(m));
          return;
        }
      }
      A(Q), g(!0), s(Q.getCameraResolution());
    })(), () => {
      Q == null || Q.stopStreaming(), g(!1), A(void 0);
    };
  }, [i, a, g, t, s, n]);
  const C = {};
  return C.cameraService = e, C.cameraResolution = o, C.onCameraResolutionChange = s, C.videoRef = t, C;
}
function zC({
  cameraFacing: i,
  children: n,
  isVideoCaptureEnabled: t
}) {
  const { cameraResolution: e, cameraService: A, onCameraResolutionChange: o, videoRef: r } = ZC(
    i,
    t
  ), a = NA(
    () => ({
      cameraService: A,
      cameraResolution: e,
      onCameraResolutionChange: o,
      videoRef: r
    }),
    [A, e, o, r]
  );
  return /* @__PURE__ */ k(Pn.Provider, { value: a, children: n });
}
let J;
const Te = new Array(-863 * 7 + 1087 * 6 + 1 * -353).fill(void 0);
Te.push(void 0, null, !0, !1);
function Sr(i) {
  return Te[i];
}
let ke = 10 * 445 + -9958 + 5508, go = null;
function ln() {
  return (go === null || go.byteLength === -7 * 1390 + -11 * 559 + -201 * -79) && (go = new Uint8Array(J.memory.buffer)), go;
}
const un = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, XC = typeof un.encodeInto == "function" ? function(i, n) {
  return un.encodeInto(i, n);
} : function(i, n) {
  const t = un.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function ho(i, n, t) {
  if (t === void 0) {
    const a = un.encode(i), g = n(a.length, 1707 * 1 + 908 + -2614) >>> -9369 + -643 * -2 + 8083;
    return ln().subarray(g, g + a.length).set(a), ke = a.length, g;
  }
  let e = i.length, A = n(e, 9161 * 1 + -6157 + -77 * 39) >>> 0;
  const o = ln();
  let r = 21 * 145 + 4124 + -7169;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -6791 * 1 + 3123 + 3795) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== -2 * 3765 + -1 * -2296 + 5234 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-3478 + 59 * 59), 2 * -2930 + -3486 + -719 * -13) >>> 0;
    const a = ln().subarray(A + r, A + e), g = XC(i, a);
    r += g.written, A = t(A, e, r, 5260 + 3 * -1753) >>> 8489 + 1 * 5164 + 37 * -369;
  }
  return ke = r, A;
}
function us(i) {
  return i == null;
}
let so = null;
function we() {
  return (so === null || so.byteLength === 585 + -3 * -1007 + -3606) && (so = new Int32Array(J.memory.buffer)), so;
}
let Eo = Te.length;
function $C(i) {
  i < 4423 * -2 + 7703 + 1275 || (Te[i] = Eo, Eo = i);
}
function fs(i) {
  const n = Sr(i);
  return $C(i), n;
}
const Gr = {};
Gr.ignoreBOM = !0, Gr.fatal = !0;
const hs = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Gr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && hs.decode();
function zn(i, n) {
  return i = i >>> 0, hs.decode(ln().subarray(i, i + n));
}
function Nr(i) {
  Eo === Te.length && Te.push(Te.length + (5942 * -1 + -5146 + 1 * 11089));
  const n = Eo;
  return Eo = Te[n], Te[n] = i, n;
}
let co = null;
function ps() {
  return (co === null || co.byteLength === 0) && (co = new Uint32Array(J.memory.buffer)), co;
}
function eg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = ps();
  for (let A = -5065 + -1013 * -5; A < i.length; A++)
    e[t / 4 + A] = Nr(i[A]);
  return ke = i.length, t;
}
function tg(i, n) {
  i = i >>> 0;
  const t = ps(), e = t.subarray(i / (-205 * 47 + 8818 * -1 + 18457 * 1), i / (19 * 316 + -4693 + 1 * -1307) + n), A = [];
  for (let o = -5972 + -4 * 2476 + 15876; o < e.length; o++)
    A.push(fs(e[o]));
  return A;
}
function AB(i, n) {
  const t = ho(i, J.__wbindgen_malloc, J.__wbindgen_realloc), e = ke, A = ho(n, J.__wbindgen_malloc, J.__wbindgen_realloc), o = ke, r = J.is_mobile_supported(t, e, A, o);
  return Ia.__wrap(r);
}
const Rr = {};
Rr.register = () => {
}, Rr.unregister = () => {
};
const og = typeof FinalizationRegistry > "u" ? Rr : new FinalizationRegistry((i) => J.__wbg_licensevalidationresult_free(i >>> -6517 + 1 * -353 + 6870 * 1));
class Ia {
  static __wrap(n) {
    n = n >>> -1133 * -4 + -1900 + -2632;
    const t = Object.create(Ia.prototype);
    return t.__wbg_ptr = n, og.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 424 + -1 * 5918 + 82 * 67, og.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    J.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = us(t) ? 0 : ho(t, J.__wbindgen_malloc, J.__wbindgen_realloc), a = ke;
    const g = eg(e, J.__wbindgen_malloc), s = ke, C = eg(A, J.__wbindgen_malloc), c = ke, E = ho(o, J.__wbindgen_malloc, J.__wbindgen_realloc), I = ke, x = J.licensevalidationresult_new(n, r, a, g, s, C, c, E, I);
    return this.__wbg_ptr = x >>> -13 * 112 + 2756 * -2 + 1742 * 4, this;
  }
  get is_valid() {
    return J.licensevalidationresult_is_valid(this.__wbg_ptr) !== -10 * 845 + -6 * -1374 + 206;
  }
  get features_json() {
    try {
      const e = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = we()[e / (-4 * -1934 + 33 * 123 + 1 * -11791) + (4922 + 1 * 4181 + -9103)], t = we()[e / (-7943 + -1 * 5305 + 6626 * 2) + (4039 + 3 * -1346)];
      let A;
      return n !== -2 * 1566 + 61 * -101 + 9293 && (A = zn(n, t).slice(), J.__wbindgen_free(n, t * 1, 7192 + -2397 * 3)), A;
    } finally {
      J.__wbindgen_add_to_stack_pointer(3 * -479 + 6920 + -7 * 781);
    }
  }
  get errors() {
    try {
      const A = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = we()[A / (-116 + 4201 * -1 + 1 * 4321) + 0], t = we()[A / (1 * -9719 + -7167 + 2815 * 6) + (-8061 + 13 * 554 + -10 * -86)], e = tg(n, t).slice();
      return J.__wbindgen_free(n, t * (141 * -43 + -710 + 6777), -89 * 58 + 3424 + 1742), e;
    } finally {
      J.__wbindgen_add_to_stack_pointer(-1031 * 5 + -4003 * -2 + -45 * 63);
    }
  }
  get warnings() {
    try {
      const A = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = we()[A / (2647 + 1649 * -2 + -5 * -131) + 0], t = we()[A / (-1 * 2046 + -3904 + 1 * 5954) + (-1 * -7033 + 1 * -8759 + 157 * 11)], e = tg(n, t).slice();
      return J.__wbindgen_free(n, t * (6501 + 89 * 23 + -712 * 12), -82 + 6817 * -1 + 6903), e;
    } finally {
      J.__wbindgen_add_to_stack_pointer(-7440 + 1 * 1604 + -1463 * -4);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = J.__wbindgen_add_to_stack_pointer(-16);
      J.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = we()[o / (-11 * 426 + 1806 * -4 + 37 * 322) + (5177 + -5177 * 1)], A = we()[o / 4 + 1];
      return n = e, t = A, zn(e, A);
    } finally {
      J.__wbindgen_add_to_stack_pointer(-1 * -4303 + -5929 + 1642), J.__wbindgen_free(n, t, -2040 + 719 * 8 + 3711 * -1);
    }
  }
}
async function eB(i, n) {
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
function tB() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = Sr(t), A = typeof e == "string" ? e : void 0;
    var o = us(A) ? -7438 * 1 + 6148 + 1290 : ho(A, J.__wbindgen_malloc, J.__wbindgen_realloc), r = ke;
    we()[n / 4 + 1] = r, we()[n / (1 * 2875 + 1358 + 1 * -4229) + 0] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    fs(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = zn(n, t);
    return Nr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Nr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Sr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(zn(n, t));
  }, i;
}
function oB(i, n) {
  return J = i.exports, ms.__wbindgen_wasm_module = n, so = null, co = null, go = null, J;
}
async function ms(i) {
  if (J !== void 0) return J;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcCACAAQQhqIARBCGooAgA2AgAgBEEQaiQAC48DAQF/IwBBMGsiAiQAAn8CQAJAAkACQCAALQAAQQFrDgMBAgMACyACIAAoAgQ2AgAgAiAALQABOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkEDNgIcIAJBoIzAADYCGCACQQk2AgwgAUEYaigCACEAIAIgAkEIajYCICACIAI2AhAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQeSMwAA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAiAAKAIENgIAIAIgAC0AAToAByACQSRqQgI3AgAgAkEUakEENgIAIAJBAzYCHCACQYCNwAA2AhggAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACNgIQIAIgAkEHajYCCCABKAIUIAAgAkEYahAvDAELIAJBJGpCADcCACACQQE2AhwgAkGojcAANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvCyACQTBqJAALhwMCBX8BfiMAQUBqIgUkAEEBIQcCQCAALQAEDQAgAC0ABSEJIAAoAgAiBigCHCIIQQRxRQRAIAYoAhRBhc/AAEGsqMAAIAkbQQJBAyAJGyAGQRhqKAIAKAIMEQAADQEgBigCFCABIAIgBigCGCgCDBEAAA0BIAYoAhRBj5/CAEECIAYoAhgoAgwRAAANASADIAYgBCgCDBEBACEHDAELIAlFBEAgBigCFEGvqMAAQQMgBkEYaigCACgCDBEAAA0BIAYoAhwhCAsgBUEBOgAbIAVBNGpBkKjAADYCACAFIAYpAhQ3AgwgBSAFQRtqNgIUIAUgBikCCDcCJCAGKQIAIQogBSAINgI4IAUgBigCEDYCLCAFIAYtACA6ADwgBSAKNwIcIAUgBUEMaiIINgIwIAggASACEDENACAIQY+fwgBBAhAxDQAgAyAFQRxqIAQoAgwRAQANACAFKAIwQbKowABBAiAFKAI0KAIMEQAAIQcLIABBAToABSAAIAc6AAQgBUFAayQAIAAL7QIBCH8jAEEQayIHJAAgB0EIaiAAIAEQkwECQAJAIAcoAggiAkGBgICAeEcEQCACRQ0BAAsgAEEoaiEIQQQhBAJ/IAAoAigiBkEETQRAIABBCGohAyAIIQUgBgwBCyAAQQRqIQUgACgCCCEDIAYhBCAAKAIECyECAkAgBSACIARJBH8gAyACQQN0aiEDA0AgAUUNAiADQgA3AwAgA0EIaiEDIAFBAWshASAEIAJBAWoiAkcNAAsgBAUgAgs2AgAgAUUNAiAAQQRqIQYgAEEIaiEJA0ACfyAIKAIAIgRBBUkEQCAEIQMgCSEFQQQhBCAIDAELIAYoAgAhAyAJKAIAIQUgBgshAiADIARGBEAgABCgASAAKAIEIQMgACgCCCEFIAYhAgsgBSADQQN0akIANwMAIAIgAigCAEEBajYCACABQQFrIgENAAsMAgsgBSACNgIADAELQezwwABBEUGA8cAAEN4BAAsgB0EQaiQAC9ECAQR/IABBjAJqIgggAUEMbGohBQJAIAFBAWoiBiAALwGSAyIHSwRAIAUgAikCADcCACAFQQhqIAJBCGooAgA2AgAMAQsgCCAGQQxsaiAFIAcgAWsiCEEMbBC9AiAFQQhqIAJBCGooAgA2AgAgBSACKQIANwIAIAAgBkEYbGogACABQRhsaiAIQRhsEL0CCyAAIAFBGGxqIgIgAykDADcDACACQRBqIANBEGopAwA3AwAgAkEIaiADQQhqKQMANwMAIABBmANqIQIgAUECaiIDIAdBAmoiBUkEQCACIANBAnRqIAIgBkECdGogByABa0ECdBC9AgsgAiAGQQJ0aiAENgIAIAAgB0EBaiIDOwGSAyAFIAZLBEAgAUECdCAAakGcA2ohAgNAIAIoAgAiBCABQQFqIgE7AZADIAQgADYCiAIgAkEEaiECIAEgA0cNAAsLC98CAQl/IwBBgAFrIgMkACADQQhqIAIQ4AEgAygCDCADKAIIIAEgAhC+AiEGIAJBAWshASACQQF2IQcDQCAEIAZqIgUtAAAhCCAFIAEgBmoiBS0AADoAACAFIAg6AAAgAUEBayEBIAcgBEEBaiIERw0ACwJAIAIEQCAAIAYgAhAsDAELIANBAjYCHCADQgQ3AhQgA0EANgIgIANBADYCSCADQSBqIgIgA0EUahAzIANB0ABqIgEgAkEwEL4CGiABQQRyIQcgA0HYAGohBSADQfgAaiEIIAMoAlghCgNAIAUhAiADKAJ4IgEhBCABQQVJIgtFBEAgAygCVCEEIAohAgsCQCAERQ0AIARBA3QgAmpBCGspAwBCAFINACAIIQQgC0UEQCAHIQQgAygCVCEBCyABRQ0BIAQgAUEBazYCAAwBCwsgACADQdAAakEwEL4CGgsEQCAGECILIANBgAFqJAALywICBX4GfyMAQSBrIgokACABIAMgASADSRsiDEEDdCENAkACQCAMRQ0AIAAgDWohCyACIQkgDCEOA0AgACAEIAApAwAiBCAJKQMAIgZ9Igd8Igg3AwAgByAIVq0gBSAEIAZUrX18IgRCP4chBSAAQQhqIQAgCUEIaiEJIA5BAWsiDg0ACyAEUA0AIAFBA3QgDEEDdGshAANAIAAEQCALIAQgCykDAHwiBjcDACAAQQhrIQAgC0EIaiELIAUgBCAGVq18IgRCP4chBSAEQgBSDQEMAgsLIAQgBYRQRQ0BCyACIA1qIQkgA0EDdCANayEAA0AgAARAIABBCGshACAJKQMAIAlBCGohCVANAQwCCwsgCkEgaiQADwsgCkEUakIANwIAIApBATYCDCAKQdz/wAA2AgggCkGMrMIANgIQIApBCGpB5P/AABDrAQAL7gcCCX4JfyMAQdAAayINJAAgASgCKCIOQQRNBH8gAUEIagUgASgCBCEOIAEoAggLIQwCQCAOBEAgAlANASAMQQhrIREgDkEDdCEOIA1BGGohEgNAIA4gEWoiEykDACILIQQjAEEgayIMJABCACEDQgAhBkIAIQdCACEKIwBBIGsiDyQAAkACQAJAAkAgBVBFBEAgAiAFVg0DIAIgBVENASAFIAUgAoAiCiACfn0hAyACQoCAgIAQWg0CIARC/////w+DIANCIIYgBEIgiIQiAyADIAKAIgMgAn59QiCGhCIFIAIgBSACgCIFfn0hBCADQiCGIAWEIQYgA0IgiCAKhCEKQgAhAwwECyAEIAQgAoAiBiACfn0hBAwDCyAEIAQgBYAiBiAFfn0hBEIBIQoMAgsgA1AgAiAEVnENASACQgGIIQggAkI/hiEJQoCAgICAgICAgH8hBQNAAkAgAyAIfSAEIAlUrX0iB0IAWQRAIAQgCX0hBCAFIAaEIQYgB1ANASAHIQMLIAhCP4YgCUIBiIQhCSAFQgGIIQUgCEIBiCEIDAELCyAEIAKAIgMgBoQhBiAEIAIgA359IQRCACEDDAELIAIhAwJAQT8gAnmnIhAgBXmnIhRrQUBrIBAgFEYbIhBBwABxRQRAIBBFDQFCACAQQT9xrSIDhiACQQAgEGtBP3GtiIQhByACIAOGIQMMAQsgAyAQQT9xrYYhB0IAIQMLIA8gAzcDACAPIAc3AwhCASAQQT9xrYYhAyAPQQhqKQMAIQggDykDACEJA0ACQCAFIAh9IAQgCVStfSIHQgBZBEAgBCAJfSEEIAMgBoQhBiAHUA0BIAchBQsgCEI/hiAJQgGIhCEJIANCAYghAyAIQgGIIQgMAQsLIAQgAoAiAyAGhCEGIAQgAiADfn0hBEIAIQMLIAwgBDcDECAMIAY3AwAgDEEYaiADNwMAIAwgCjcDCCAPQSBqJAAgDCkDACEDIA1BEGoiDyAMQQhqKQMANwMIIA8gAzcDACAMQSBqJAAgDSANKQMQIgMgEikDACACELABIBMgAzcDACALIA0pAwB9IQUgDkEIayIODQALCyANQSBqIgwgAUEwEL4CGiAMQQRyIQ8gDUEoaiEQIA1ByABqIREgDSgCKCESA0AgECEBIA0oAkgiDiEMIA5BBUkiE0UEQCANKAIkIQwgEiEBCwJAIAxFDQAgDEEDdCABakEIaykDAEIAUg0AIBEhDCATRQRAIA0oAiQhDiAPIQwLIA5FDQEgDCAOQQFrNgIADAELCyAAIA1BIGpBMBC+AiAFNwMwIA1B0ABqJAAPC0Hg+sAAQRlByPrAABDeAQAL1AIBBn8gASACQQF0aiEJIABBgP4DcUEIdiEKIABB/wFxIQwCQAJAAkACQANAIAFBAmohCyAHIAEtAAEiAmohCCAKIAEtAAAiAUcEQCABIApLDQQgCCEHIAsiASAJRw0BDAQLIAcgCEsNASAEIAhJDQIgAyAHaiEBA0AgAkUEQCAIIQcgCyIBIAlHDQIMBQsgAkEBayECIAEtAAAgAUEBaiEBIAxHDQALC0EAIQIMAwsgByAIQeCywAAQugEACyAIIARB4LLAABC4AQALIABB//8DcSEHIAUgBmohA0EBIQIDQCAFQQFqIQACQCAFLQAAIgHAIgRBAE4EQCAAIQUMAQsgACADRwRAIAUtAAEgBEH/AHFBCHRyIQEgBUECaiEFDAELQYCXwgBBK0HQssAAEN4BAAsgByABayIHQQBIDQEgAkEBcyECIAMgBUcNAAsLIAJBAXEL2AIBAX8jAEHwAGsiByQAIAcgAjYCDCAHIAE2AgggByAENgIUIAcgAzYCECAHQQI2AhwgB0H6psAAQfimwAAgAEH/AXEbNgIYAkAgBSgCAEUEQCAHQcwAakEGNgIAIAdBxABqQQY2AgAgB0HkAGpCAzcCACAHQQM2AlwgB0Gsp8AANgJYIAdBBzYCPCAHIAdBOGo2AmAgByAHQRBqNgJIIAcgB0EIajYCQAwBCyAHQTBqIAVBEGopAgA3AwAgB0EoaiAFQQhqKQIANwMAIAcgBSkCADcDICAHQeQAakIENwIAIAdB1ABqQQY2AgAgB0HMAGpBBjYCACAHQcQAakEKNgIAIAdBBDYCXCAHQeCnwAA2AlggB0EHNgI8IAcgB0E4ajYCYCAHIAdBEGo2AlAgByAHQQhqNgJIIAcgB0EgajYCQAsgByAHQRhqNgI4IAdB2ABqIAYQ6wEAC8ICAgd/AX4jAEEgayIDJAAgASACQQxsaiEGAkACfyACRQRAIANBADYCHCADIAI2AhggA0EENgIUIAEhBCACDAELQbixwgAtAAAaIAJBAnQQCiIFRQ0BIANBADYCHCADIAI2AhggAyAFNgIUIAEhBCAGAn8DQCAEQQxqIAQoAgAiCEUNARogCCAEKQIEIgpCIIinEAIhCSAKpwRAIAgQIgsgBSAJNgIAIAVBBGohBSAHQQFqIQcgBEEMaiIEIAZHDQALIAYLIgRrQQxuCyEFIAMgBzYCHCAEIAZHBEADQCAEQQRqKAIABEAgBCgCABAiCyAEQQxqIQQgBUEBayIFDQALCyACBEAgARAiCyADQRBqIANBHGooAgA2AgAgAyADKQIUNwMIIAMgA0EIahC8ASAAIAMpAwA3AwAgA0EgaiQADwsAC9kCAgR/AX4jAEEQayICJAAgAkEANgIEAn8CQAJAIAFBgAFPBEAgAUGAEEkNASABQYCABE8NAiACIAFBP3FBgAFyOgAGIAIgAUEMdkHgAXI6AAQgAiABQQZ2QT9xQYABcjoABUEDDAMLIAIgAToABEEBDAILIAIgAUE/cUGAAXI6AAUgAiABQQZ2QcABcjoABEECDAELIAIgAUE/cUGAAXI6AAcgAiABQQZ2QT9xQYABcjoABiACIAFBDHZBP3FBgAFyOgAFIAIgAUESdkEHcUHwAXI6AARBBAshASACQQhqIAAoAggoAgAgAkEEaiABECsgAi0ACCIEQQRHBEAgACgCBCEBIAIpAwghBiAALQAAIgNBBE0gA0EDR3FFBEAgASgCACIDIAFBBGooAgAiBSgCABEEACAFKAIEBEAgAxAiCyABECILIAAgBjcCAAsgAkEQaiQAIARBBEcL1gIBCn8jAEEQayIEJAAgAAJ/AkACQAJAAkAgASgCBCICIAEoAggiBkEEak8EQCACIAZrIgNBACACIANPGyEIIAEoAgAiCSAGaiEKQQAhAwNAIAMgBmohBSADIAhGDQIgASAFQQFqIgU2AgggAyAKai0AAEGYj8IAai0AACILQf8BRg0DIAdBBHQgC2ohByADQQFqIgNBBEcNAAsgACAHOwECQQAMBQsgASACNgIIIAQgASgCACACIAIQtgFBuLHCAC0AABogBCgCBCEDIAQoAgAhAkEUEAoiAUUNAiABIAI2AgwgAUEENgIADAMLIAUgAkH4jMIAELcBAAsgBEEIaiAJIAIgBRC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCECQRQQCiIBRQ0AIAEgAjYCDCABQQw2AgAMAQsACyAAIAE2AgQgASADNgIQQQELOwEAIARBEGokAAvOAgICfAJ/IwBBEGsiByQAIAO6IQUgAAJ/AkACQAJAAkAgBCAEQR91IghzIAhrIghBtQJPBEADQCAFRAAAAAAAAAAAYQ0FIARBAE4NAiAFRKDI64XzzOF/oyEFIARBtAJqIgQgBEEfdSIIcyAIayIIQbQCSw0ACwsgCEEDdEHI9sEAaisDACEGIARBAE4NASAFIAajIQUMAwsgByABKAIAIAEoAgQgASgCCBC2AUG4scIALQAAGiAHKAIEIQIgBygCACEEDAELIAUgBqIiBZlEAAAAAAAA8H9iDQEgB0EIaiABKAIAIAEoAgQgASgCCBC2AUG4scIALQAAGiAHKAIMIQIgBygCCCEEC0EUEAoiAQRAIAEgBDYCDCABQQ42AgAgACABNgIEIAEgAjYCEEEBDAILAAsgACAFIAWaIAIbOQMIQQALNgIAIAdBEGokAAv/AwEFfyMAQRBrIgMkAAJAAn8CQCABQYABTwRAIANBADYCDCABQYAQSQ0BIAFBgIAESQRAIAMgAUE/cUGAAXI6AA4gAyABQQx2QeABcjoADCADIAFBBnZBP3FBgAFyOgANQQMMAwsgAyABQT9xQYABcjoADyADIAFBBnZBP3FBgAFyOgAOIAMgAUEMdkE/cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = tB();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await eB(await i, n);
  return oB(t, e);
}
(function(i, n) {
  function t(a, g, s, C, c) {
    return wA(c - -7, a);
  }
  function e(a, g, s, C, c) {
    return wA(a - -455, C);
  }
  const A = i();
  function o(a, g, s, C, c) {
    return wA(g - -677, C);
  }
  function r(a, g, s, C, c) {
    return wA(a - -609, c);
  }
  for (; ; )
    try {
      if (-parseInt(o(-285, -282, -278, "#Lnd", -269)) / 1 * (-parseInt(t("LEwH", 430, 419, 410, 418)) / 2) + parseInt(o(-312, -287, -310, "15Jc", -289)) / 3 * (parseInt(e(-24, -41, -43, "oAL)", -48)) / 4) + -parseInt(r(-187, -167, -204, -210, "15Jc")) / 5 * (-parseInt(t("tRCw", 431, 420, 407, 411)) / 6) + -parseInt(r(-194, -214, -189, -195, "!J*P")) / 7 * (parseInt(e(-43, -17, -18, "Cie6", -63)) / 8) + parseInt(e(-70, -76, -93, "CCAZ", -86)) / 9 * (parseInt(o(-289, -267, -282, "BDit", -267)) / 10) + -parseInt(r(-183, -205, -200, -165, "PwSY")) / 11 + -parseInt(r(-195, -184, -219, -194, "%Of4")) / 12 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Xn, -48362 * 11 + -6727 * 199 + -57298 * -46);
function ng(i, n, t, e, A) {
  return wA(A - -573, n);
}
function wA(i, n) {
  const t = Xn();
  return wA = function(e, A) {
    e = e - (2 * -1655 + 4567 + -872);
    let o = t[e];
    if (wA.xOpeyc === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      wA.qtjiUu = C, i = arguments, wA.xOpeyc = !0;
    }
    const a = t[3 * 1299 + -2993 + -904], g = e + a, s = i[g];
    return s ? o = s : (wA.hSCMTx === void 0 && (wA.hSCMTx = !0), o = wA.qtjiUu(o, A), i[g] = o), o;
  }, wA(i, n);
}
function Xo(i, n, t, e, A) {
  return wA(e - -743, A);
}
function Oi(i, n, t, e, A) {
  return wA(e - -641, n);
}
function ig(i, n, t, e, A) {
  return wA(i - -976, t);
}
function Xn() {
  const i = ["CCoNtMdcPW", "khn2WPRdTW", "peRcTebDl8kuW4ZdLu5qWOK", "WP5aWRWwWOO", "ahhdQf45xfyn", "W65WW5iwW50", "vqrVng8", "WRf2WQOGaSkFzLhdNtlcJmkz", "WRhdG3NdQmkN", "WRpdG3FdPmkI", "sqmjtH0", "Dgfpzmk9WRdcQG", "WQtcR2HMWPC", "ESkDW5VcKSkF", "zSoCW4ZcKmk1", "yXhdUr8l", "ECoZW4/cGSk0W7NcUbJdSCkYsmk1", "d8oAW67cJMK", "W5iKqmonpG", "WPtdHCkOjt0", "EbxdQbGE", "WQP2smkNha", "h0ZcOCoQWPldG8oEawyxDG", "WOP7bmkCjSkQWRyxW5hcR2BcOSoB", "b8kgW5lcISkmW6GT", "WPKKw8kwWOmLkrbDW5nKpCko", "W5jLWR3dVSk/hW7dSCkaWRqKBmkIjW", "W4rrW5vQW5fhv8o4yvLkcmk9", "dHddQfa0E0i", "WRlcH0xcIKa", "z20kW7NcSxX5WORdMZ7cSuy", "lwrwxSk4", "W5FdL8kOjtu", "WQJdI37dRmkp", "o03dOrWnzmkpW4y", "W5X1gSonW7S", "mCkbW6ZcKJS", "WPGtW5JcQSkZW79s", "WQBcUCkbemofW4NcN8oNvKhcU8oaW5S", "W7WNWO9tW43cUmkwoxGhwG", "W7i2qSkOW6G", "i8kAWQz7", "bSouWP8oW7q", "WQ8HWRtcKCoHW7NdNSo2", "W6GNW6LYxW", "s8o7WPaoW6W", "W5HMW53cHCo9WRuHvvvajmkZW57dGW", "oJzeWQ/dPW", "CI5VWPldJmkurCo/", "WQGfWRBdGhi", "pCklWQtdHG", "WPBdQ0X6WPhcGvNcR8olWQ4", "WP4SumkxWOSQscnxW4DQhG", "W4j6d8opW4a"];
  return Xn = function() {
    return i;
  }, Xn();
}
function Ji(i, n, t, e, A) {
  return wA(A - 248, e);
}
var s0;
class nB {
  constructor() {
    p(this, s0, !1);
  }
  async [(s0 = ig(-553, -561, "Ymfg") + Xo(-336, -361, -350, -354, "iYZ7") + ig(-559, -586, "8@Bn"), Xo(-305, -309, -304, -305, "FA%A"))](n) {
    function t(a, g, s, C, c) {
      return Oi(a - 355, a, s - 293, g - 317);
    }
    function e(a, g, s, C, c) {
      return Oi(a - 344, c, s - 32, g - 180);
    }
    function A(a, g, s, C, c) {
      return ng(a - 392, g, s - 78, C - 433, s - 515);
    }
    function o(a, g, s, C, c) {
      return ng(a - 491, c, s - 391, C - 95, g - -18);
    }
    function r(a, g, s, C, c) {
      return Xo(a - 223, g - 218, s - 277, c - 1608, s);
    }
    try {
      const a = n + (o(-185, -184, -206, -160, "x^rX") + "/") + Za;
      await ms(a), this[A(333, "]R8B", 343, 353, 323) + A(326, "15Jc", 345, 355, 358) + o(-164, -156, -174, -155, "tRCw")] = !0;
    } catch {
      this[t("NW(7", 97, 117) + r(1259, 1286, "49hF", 1268, 1274) + t("NW(7", 73, 75)] = !1, console[t("RWq(", 105, 114)](Za + (r(1298, 1298, ")7M(", 1309, 1302) + r(1255, 1273, "9fyz", 1286, 1265) + A(324, "kSVZ", 330, 355) + e(-21, -31, -25, -22, "j[X$") + t("FA%A", 100, 103) + t("x^rX", 96, 88) + e(-60, -67, -75, -69, "pi%!") + t("]R8B", 78, 96) + A(349, "15Jc", 350, 352) + A(366, "jlNt", 370, 387) + t("b$b(", 69, 82) + A(338, "Ge(z", 348, 323) + e(-99, -74, -99, -55, "Ymfg") + e(-64, -42, -20, -33, "P[9B") + "n."));
    }
  }
  [Ji(654, 641, 671, "O*1(", 653) + Xo(-287, -296, -289, -310, "j[X$") + Ji(632, 625, 619, "TJ#%", 646) + "ed"]() {
    function n(e, A, o, r, a) {
      return Oi(e - 423, e, o - 432, a - 45);
    }
    function t(e, A, o, r, a) {
      return Ji(e - 414, A - 318, o - 113, r, a - -424);
    }
    return this[n("2LxN", -206, -179, -178, -205) + t(229, 232, 215, "NW(7", 220) + n("#Lnd", -149, -186, -166, -164)];
  }
}
class Ui extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function $n() {
  var i = ["WQddQXJdHt4", "WOtcVsZdOKK", "WQ5qyW", "rmoRW7m", "q1HA", "W4/dTHyTW7a", "BuZcGmoZrq", "q0XiW5ZdJW", "hmk5WRFdOSonrrZdG8k7omk9W4hcMa", "mxm7ha", "W5pcMmoEW55j", "jmkfW6u", "pSkMWQS", "khWVaeG", "WR82W4W", "zmk+W65GW6CJxq", "W57cS8kcWQutiCkzWOVdL2pdMW", "tffAW57dMa", "Emo+W7pdM8kKWOVcNmouW7WGWRmCCa", "wSoMWRG", "BSorp8kVxG", "WP3dOSowW7L1", "w8oMWQ4", "WQyYW6m", "nbNdGCkGh8kJWOFdS8kVWQbp", "gWZcG8oIW74", "faruaCkK", "W4xdTYyOW6i", "rCoaW6xcTSog", "iSkeW79bW50", "mCknA8oRBsrPnCoOrG", "vmkOW77dUbddSL3dUq", "WP3cRSo1FMy", "aXXXdCkp", "vCo3W6tcPmox", "W6bsomkRy8kWW44Il8khxNTGkG", "lSkSWO4", "q8oIW6NcTWu", "W5mHW5SukW", "mHtdGCkNhCoJW7ldJCk3WQPXoqm", "WRyHW7S4DW", "wLCOl8oY", "WPFcSSo9shS", "umo5wYtdOa", "mSkOmmo+WQXEnCoODHCHWP13WP0", "W6ufjCkSWPWvW6lcJmkrW6ldKSkz", "WRLfF8oPW5S", "qCoVW7xcUmkx", "WP3cVuLNWRvoWO3dPmkhqSkIta", "WQxdRXNdTd0", "mw4jauW", "FH/dQwXh", "yg/dGctdVq", "W5BdTSkRW4hcLCo8zSoDW5NcOSkKnW", "eX5tiSkU", "WRyHW6W3EG", "zrFdV2DF", "BmkJWOi", "W6aKoa", "xCokWPtcGCkP", "WQHii8knoSopweRcPmk5W7HNWQK", "WO9JWPXmASosW50XW65sWP1R", "W60WW4JcJMv/WQG", "eSkZW5VcJHPAW7FdOW", "WRvyDCoAW4e", "WPhcUdRdUhi", "W5KCCmoSWPW", "xHBcTCkzW5e", "WQS2W55TW4e", "aG5boSkv", "abDXdCkc", "WONdOSowW6fu", "ysrOq2VdNdfAW5ZcSW", "uGVcQCk1W4W"];
  return $n = function() {
    return i;
  }, $n();
}
(function(i, n) {
  function t(s, C, c, E, I) {
    return Z(I - -158, s);
  }
  function e(s, C, c, E, I) {
    return Z(C - 738, I);
  }
  var A = i();
  function o(s, C, c, E, I) {
    return Z(C - 334, I);
  }
  function r(s, C, c, E, I) {
    return Z(E - -957, s);
  }
  function a(s, C, c, E, I) {
    return Z(s - -603, E);
  }
  for (; ; )
    try {
      var g = parseInt(t("$wmd", 365, 356, 336, 329)) / 1 + parseInt(e(1262, 1268, 1269, 1278, "yL7W")) / 2 + parseInt(a(-115, -111, -86, "ufm%", -89)) / 3 * (parseInt(a(-85, -52, -110, "807(", -113)) / 4) + -parseInt(r("zz0a", -461, -481, -468, -432)) / 5 * (-parseInt(a(-79, -99, -42, "xXoO", -67)) / 6) + parseInt(o(819, 813, 843, 835, "&(3J")) / 7 + parseInt(e(1306, 1277, 1279, 1297, "xXoO")) / 8 + -parseInt(e(1273, 1273, 1245, 1296, "m!X2")) / 9;
      if (g === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})($n, -2490299 + 1185 * 2923);
function ae(i, n, t, e, A) {
  return Z(n - -515, e);
}
function $o(i, n, t, e, A) {
  return Z(i - -548, t);
}
function bt(i, n, t, e, A) {
  return Z(n - -843, A);
}
function An(i, n, t, e, A) {
  return Z(n - -109, i);
}
function kt(i, n, t, e, A) {
  return Z(A - -611, e);
}
function Z(i, n) {
  var t = $n();
  return Z = function(e, A) {
    e = e - (-53 * 65 + -9242 + -13154 * -1);
    var o = t[e];
    if (Z.QvLZol === void 0) {
      var r = function(c) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", x = "", d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, y = I.length; m < y; m++)
          x += "%" + ("00" + I.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(c, E) {
        var I = [], x = 0, d, l = "";
        c = r(c);
        var Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      Z.MqBPqJ = a, i = arguments, Z.QvLZol = !0;
    }
    var g = t[-191 * -1 + -1742 + 11 * 141], s = e + g, C = i[s];
    return C ? o = C : (Z.BumqOk === void 0 && (Z.BumqOk = !0), o = Z.MqBPqJ(o, A), i[s] = o), o;
  }, Z(i, n);
}
var Et, yo;
class rg {
  constructor(n) {
    U(this, Et);
    U(this, yo);
    function t(a, g, s, C, c) {
      return Z(a - -86, c);
    }
    function e(a, g, s, C, c) {
      return Z(a - -589, g);
    }
    function A(a, g, s, C, c) {
      return Z(a - -161, s);
    }
    function o(a, g, s, C, c) {
      return Z(C - -572, g);
    }
    this[e(-61, "eXdg") + t(387, 377, 389, 410, "v8Sb")] = n;
    function r(a, g, s, C, c) {
      return Z(s - 203, a);
    }
    try {
      W(this, Et, n[e(-104, "0Tn^", -96, -136, -86) + o(-100, "*szG", -88, -95, -85) + e(-77, "807(", -85, -112, -91)] && JSON[r("2egT", 721, 716, 731, 689)](n[t(408, 405, 398, 408, "c%vr") + e(-114, "zWdu", -77, -136, -142) + o(-80, "tHW*", -90, -61, -86)])), W(this, yo, n[t(394, 372, 401, 386, "M)MM") + A(342, 369, "v8Sb", 308, 330)]);
    } catch (a) {
      console[A(348, 329, "2egT")](a);
    }
  }
  get [ae(-57, -34, -17, "hxBr") + "id"]() {
    function n(A, o, r, a, g) {
      return ae(A - 139, o - -29, r - 5, a);
    }
    function t(A, o, r, a, g) {
      return ae(A - 169, g - 1222, r - 366, a);
    }
    function e(A, o, r, a, g) {
      return ae(A - 279, r - -43, r - 204, a);
    }
    return this[t(1204, 1177, 1213, "SRZ^", 1212) + t(1196, 1243, 1249, "xXoO", 1213)][n(19, -17, -14, "SRZ^") + e(-62, -90, -74, "SGDG")];
  }
  get [ae(-25, -16, -49, "gOOS") + "s"]() {
    function n(e, A, o, r, a) {
      return ae(e - 83, A - 841, o - 206, o);
    }
    function t(e, A, o, r, a) {
      return ae(e - 44, A - 809, o - 107, a);
    }
    return this[t(787, 799, 830, 769, "SRZ^") + t(765, 767, 751, 802, "v8Sb")][n(898, 864, "$wmd") + "s"];
  }
  get [$o(-79, -85, "P072") + $o(-12, 1, "UV^Q")]() {
    function n(e, A, o, r, a) {
      return ae(e - 393, a - 410, o - 309, A);
    }
    function t(e, A, o, r, a) {
      return kt(e - 278, A - 196, o - 409, e, a - 400);
    }
    return this[n(391, "Ny#[", 429, 425, 427) + n(414, "zz0a", 452, 456, 432)][t("zWdu", 290, 320, 280, 289) + n(396, "MaX$", 373, 424, 399)];
  }
  get [$o(-22, 7, "M)MM") + "b"]() {
    return S(this, Et);
  }
  get [ae(-4, 10, 30, "Dd]1") + bt(-340, -324, -347, -360, "ZZk^")]() {
    return S(this, yo);
  }
  get [ae(-7, 25, -4, "hxBr") + An("W#jQ", 424) + kt(-98, -112, -76, "eXdg", -77) + ae(-30, -32, -56, "WbUq")]() {
    var o, r;
    function n(a, g, s, C, c) {
      return kt(a - 56, g - 401, s - 0, s, C - 485);
    }
    function t(a, g, s, C, c) {
      return An(g, s - 591);
    }
    function e(a, g, s, C, c) {
      return An(g, C - 529);
    }
    function A(a, g, s, C, c) {
      return bt(a - 242, C - 1013, s - 223, C - 299, c);
    }
    return !!((r = (o = S(this, Et)) == null ? void 0 : o[n(419, 406, "yL7W", 394) + A(661, 704, 713, 684, "c%vr")]) != null && r[A(691, 702, 674, 691, "OLQQ") + t(980, "cgII", 972) + A(676, 690, 657, 661, "s(0E") + e(926, "hnPP", 903, 930) + A(678, 649, 673, 666, "W#jQ") + t(946, "2#$u", 960) + n(386, 369, "ZZk^", 396)]);
  }
  get [bt(-375, -367, -356, -342, "2egT") + bt(-327, -336, -336, -365, "MaX$") + kt(-107, -128, -87, "gOOS", -118) + kt(-88, -110, -89, "tHW*", -82) + kt(-126, -107, -148, "jwBL", -119) + bt(-336, -320, -314, -348, "[onm")]() {
    var o, r;
    function n(a, g, s, C, c) {
      return ae(a - 493, a - 852, s - 240, C);
    }
    function t(a, g, s, C, c) {
      return bt(a - 213, a - 775, s - 478, C - 35, s);
    }
    function e(a, g, s, C, c) {
      return $o(a - 600, g - 327, g);
    }
    function A(a, g, s, C, c) {
      return An(C, a - 619);
    }
    return !!((r = (o = S(this, Et)) == null ? void 0 : o[t(429, 430, "OLQQ", 431) + e(554, "cgII")]) != null && r[A(1005, 1032, 1005, "M)MM") + A(992, 1004, 1008, "*szG") + A(1027, 994, 1026, "MaX$") + n(838, 851, 840, "s(0E") + t(404, 429, "cgII", 413) + e(520, "Ny#[") + n(804, 822, 808, "z@KQ")]);
  }
}
Et = new WeakMap(), yo = new WeakMap();
function FA(i, n, t, e, A) {
  return iA(e - -39, A);
}
function vA(i, n, t, e, A) {
  return iA(A - 60, i);
}
function AA(i, n, t, e, A) {
  return iA(n - -520, e);
}
(function(i, n) {
  function t(g, s, C, c, E) {
    return iA(s - -87, E);
  }
  function e(g, s, C, c, E) {
    return iA(c - 214, E);
  }
  function A(g, s, C, c, E) {
    return iA(c - -554, E);
  }
  const o = i();
  function r(g, s, C, c, E) {
    return iA(c - -259, s);
  }
  function a(g, s, C, c, E) {
    return iA(E - -865, C);
  }
  for (; ; )
    try {
      if (-parseInt(t(211, 291, 352, 429, "&ca4")) / 1 + -parseInt(t(239, 167, 41, 262, "OJu8")) / 2 * (parseInt(t(70, 156, 85, 49, ")i]t")) / 3) + parseInt(t(177, 231, 142, 118, "5)*0")) / 4 * (parseInt(A(-319, -235, -351, -241, "iYHW")) / 5) + parseInt(a(-502, -549, "WBJ0", -755, -632)) / 6 * (parseInt(e(623, 453, 493, 576, "u6c7")) / 7) + -parseInt(t(203, 74, 106, -37, "]tqg")) / 8 + -parseInt(r(-50, "8TuF", 48, -62, 32)) / 9 * (-parseInt(A(-386, -389, -387, -256, "jecr")) / 10) + parseInt(t(219, 261, 125, 284, "LQ8v")) / 11 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Ai, 107865 * -1 + -179157 + -311 * -1327);
function cA(i, n, t, e, A) {
  return iA(i - 469, n);
}
function fA(i, n, t, e, A) {
  return iA(A - 596, t);
}
function Ai() {
  const i = ["e8k1WPtcNcG", "fmkLWOhcIti", "W5JdQ8k7W7xcUG", "A8klmdxdNq", "WR4mWOj7ua", "WPThW5FdQmkF", "WRtcRfpdHW4", "h8oIWPdcN2y", "AGNcLZPa", "ghVcGmkSW6y", "x0ldSmo+WOO", "WQlcJJtdMaK", "WQdcPSo3d8o0xmoRhM4iWQa", "EMbVxSkE", "FmocoGu3", "eCkDumoK", "dHtdGIa", "tmoygCo7WPy", "hCk2W4VcUq", "W7xdU8kRsmkX", "WOPeA8oxWPu", "WQi4fNjr", "fCoKWPJcV2m", "W7uWrICf", "AmoqdSo9WPa", "WR7cRvJcNra", "W6D8mhD6W6dcOJW", "xSoanmk6sG", "W7XXWPtdISodFSorWQHXWRPaW4q", "W4ddUmkMW7JcPG", "lmkpWOCPua", "kmkEW5mZW6m", "v8oDiq", "qeSJxa", "nhpcUCkhFq", "eCk0WO/cMW", "WPpdGcVdLeO", "vICYn3y", "gh0EWQrT", "W7LXW4KMW4u", "W5pdUmkGW6xcOq", "W49WwhldGa", "bx0fWRK", "AmoEmbKl", "E8oriquQ", "dw4EWRH6", "vv/dSq", "W4lcK8kYW5CO", "W7ddSCkXx8kR", "umonaCo9WPO", "W4uIuCozna", "hCk2W4BcHSkt", "pw1YxSkt", "WPyQWQW+Ea", "WPWLwub3", "W4O9sLO", "W4uKsSoyha", "W43cLq4qnG", "CYmZlhm", "iZqIdmoor21oEmkSWOS", "wv7dRmoOW5K", "xg47ECk5", "W53dG8kHW7/cPG", "cSkgCCoHagFcTmoGWRBdNWGrwG", "WRaSW7NcS8k/aei", "gSkvW79jBa", "W6ddRSklW5f+", "WQeiW4/cOCkv", "x1/dSCo5WOS", "e3n2AIRdNwyximoIW6TEWOu", "ewdcKCkMW7O", "W4RcLmkYW4ao", "E8oricCQ", "WPRdI8oXWRiN", "m8kpW4hcRmkk", "WQWRW5a", "bSkwW4yVW6K", "hh3cL8kpW70", "W7v6W6KgW7a", "W5FdRCoUW4r6", "WOfxCmohWO4", "W5NdQCkQW7JcOq", "WQ8TW4dcMSkw", "WPnlW4hcVmkX", "k1ddNSobW5e", "W45Xx1lcJq", "WPRdGtNdLsy", "WOVdOmo+WQWN", "lSkeWOapbq", "y8k8DNxdRmoOxwldHSovW7OXW4e", "pmoVmG", "kLq5WRu1", "wCk2smklna", "kMJcGCkUWRq", "yCkjjq", "W486sa", "ASoFjGuN", "cN7cRuPK", "W486t1dcKG", "W5lcUmk+W6BdIG", "juSbWObG", "iwhcLw5I", "q0S0vSoD", "lSkEW44VW6i", "WPpdNcRdNHG", "W7P9vfxdQW", "FmorirGM", "DSovAq", "BmkCosFdMW", "W7hdSCkXCmkQ", "W7VcLWG", "W5vLWQa9cG", "W5mHrvVcIa", "WRfNW7FdQmk6", "jCkdWOCdra", "zmorjWGR", "W4CeWONcGSkQ", "u8otmSk2ua", "hSkPWPpcGsy", "W78Sxmouha", "WRyQWRu+CG", "e8kBwSoZdG", "W7NcHHmnla", "jCknW5u/W7K", "b2JcPHDT", "WQPsW4WDW44RWPS", "sSo1g8ocWPy", "c0K/WP8Q", "hgtcLW", "W4K1FZS4", "W4FdQSk5W6FdIG", "WOu5WPRcR8k/", "ucGUWOjNd8omgG", "fCkYWPxcHZu", "WQq6WPdcVSkC", "fwJcHSkGW7W", "lw4EWRH6", "W4OOxSoohq", "WQSNW5hcKmkx", "W7JdU8kXhmkQ", "W57dPCk7WRBcUW", "jmoGWOVcGsq", "W4qexSouda", "W4hdJmkbA8k3", "A8ovjYCQ", "W7VdP8kQW6rq", "gCkkumoUdG", "W4z6xG", "rCoAgq", "xmkKW4ZcV8ku", "dmkWW4RcPmko", "WOhdTSopWQKJ", "smkbW7VcGmkuW5NdHW", "W7pcLraxjq", "ixpcOSkgEW", "EqBcIdz0", "oSoPnslcVa", "W7NdNSkdsSkj", "nSoNnqtcUq", "eCkNW5e", "W5NdMCkNwSkZ", "W5OrxCoHWPldQa4K", "W5HWqG", "W4D2t1ldGW", "o8o7fIdcPW", "W7xdPSkQt8kW", "W5ZdVSkdW7/cSq", "i8klWOCjtq", "CCoHdSkKDW", "W4u8xNdcNq", "h8kiW6j/FG", "CWtcI8kzWPpdT8ohWOT5wCkr", "smowcSoDWOW", "pfq/", "W5HPWRONdG", "fSkmvmo0ca", "DICYn3y", "CvG0v8og", "W7pdPSk3u8kX", "W4uKu8oyfG", "tK4VxCoC", "e8kmw8oZga", "tmorW5LjxrhdOSoM", "W73cKqGYnG", "khxcNmkaAG", "WPyQWRu+CG", "lLJdKConW4u", "zmk7EhxdRCoObKpdG8oHW54y", "WR0PW5BcJCkw", "eSkLW5a", "W4eSrmoEea", "j1GOWP4R", "FgzO", "WO10l0JcNW", "t101", "WPz6pKC", "WPi0WR8/BW", "ah0yWRrG", "WQi0WQxcP8kX", "emo+WPNcJM0", "hCkmrW", "xmorjWm", "eaBdPY84", "W4NdO8k6W6G", "fvddGCofWOS", "r8owa8oSWOW", "h2ZcLSkNW7e", "WPddGsRdTaS", "ESorpWiN", "W5T/W5uMW6y", "q8oCgCoCWPe", "W7BcGdaxpa", "tfhdRCo+WPW", "wCoxiSkXxq", "lw/cUCkD", "WRCKcMfO", "W5DLWRCXbq", "WO1Yka", "W4ddQ8k9W6xcTW", "W6j2zhZdNG", "fCkSW4RcVG", "CWdcGCkFWP7cQ8k+WQ5bCCkHm8o8", "W6/dVSkWs8kA", "W6ZdUWBdNviWzgRdGbqvba", "W5S6FJab", "W4aJvSos", "rCk4W5pdJJSUE1CKqSoJla", "WOzCW4ZcPCkt", "DsZcOW1f", "bCoPmIZdTa", "W5m1zdS", "z8kbjsddHG", "WOBcM8k+W5ao", "WOfnW5VcVa", "W64oW53cGSkk", "W7SMFZOJ", "qJqVkMW", "at3dUXKU", "tmk2t8kCkq", "W4ucW4RcO8kl", "W5H+WRSNga", "kCkdkCkXW6xdLti3WPDgk8oSWRq", "WRWTcG", "gSo4WRxcJgm", "W7ZdO8kSW7pcVa", "W5PGWRGhdG", "d8oXhSkFvJRdOW", "u8k2tG", "W7P7W7Oh", "hmohW75vAW", "AWlcGJ5L", "W7ddSCkKsmk2", "W4O/x8oocW", "k8oIndBcJq", "W7yUwWiY", "uvhdTSoJ", "igtcTmoh", "WRm+WPBcICkw", "W5ZdPCkO", "ufNdVmoOWPC", "WQ5mFmorWPm", "AbddS8oKWPO", "B8otAmoOWRK", "WOVdSmoJWQST", "cXddGXeH", "WQ/cSmo8WRmcWOxdKmkvW5BcSWq", "WObMW7xcJmkv", "W4/cNSk0W4St", "WQ4TW4RcJCkw", "W6GiW50", "k8omWRJcShi", "fmkgqCofea", "WOr2svNdIG", "WOD+oeRcGW", "rZqLpa", "W7OeW4C", "WOlcV8o5WQxdPWBcHN7cQmoyafNdPa", "WQO0WRmJta"];
  return Ai = function() {
    return i;
  }, Ai();
}
function iA(i, n) {
  const t = Ai();
  return iA = function(e, A) {
    e = e - (-5 * -1049 + -2 * 2099 + 1 * -919);
    let o = t[e];
    if (iA.Vkivgb === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      iA.eOmOqr = C, i = arguments, iA.Vkivgb = !0;
    }
    const a = t[19 * -220 + 3731 + 1 * 449], g = e + a, s = i[g];
    return s ? o = s : (iA.ohiMMw === void 0 && (iA.ohiMMw = !0), o = iA.eOmOqr(o, A), i[g] = o), o;
  }, iA(i, n);
}
var c0, I0, C0;
class iB {
  constructor(n) {
    p(this, C0);
    p(this, I0, [cA(813, "(]kA") + FA(282, 198, 189, 317, "p!A&") + "ic", vA("5SGS", 590, 540, 446, 462) + AA(-326, -324, -237, "t]Ts") + "ic"]);
    p(this, c0);
    function t(e, A, o, r, a) {
      return iA(o - 562, r);
    }
    this[t(953, 926, 953, "(]kA") + t(944, 820, 840, "[(iw") + "d"] = n;
  }
  async [(C0 = AA(-366, -378, -496, "[(iw") + "se", I0 = cA(820, "@ADn") + AA(-177, -237, -189, "X]*c") + vA("TFav", 430, 374, 290, 418) + FA(327, 337, 396, 346, "@ADn"), c0 = fA(736, 755, "WBJ0", 813, 748) + FA(444, 210, 318, 331, "WBJ0"), cA(755, "wJED"))](n) {
    function t(a, g, s, C, c) {
      return FA(a - 53, g - 211, s - 276, s - -314, c);
    }
    function e(a, g, s, C, c) {
      return fA(a - 163, g - 227, c, C - 230, g - -497);
    }
    const A = await this[e(388, 280, 278, 316, "u6c7") + e(266, 308, 428, 267, "kB&@") + t(-216, -4, -78, -31, "ULZX")](n);
    await Promise[t(-83, 1, -36, -117, "c#sL") + r(343, 144, 234, 167, "k]dK")]([this[t(5, -70, -123, -202, "]tqg") + t(9, -132, -68, -179, "5)*0") + "d"][o(463, 477, "wP7q")](n), this[e(145, 257, 253, 387, "p20V") + e(420, 317, 435, 434, "Shfc") + "e"](A)]);
    function o(a, g, s, C, c) {
      return AA(a - 75, a - 691, s - 193, s);
    }
    function r(a, g, s, C, c) {
      return AA(a - 22, s - 355, s - 302, c);
    }
    this[t(-106, -115, -73, -79, "t^2v") + r(254, 179, 236, 283, "wP7q") + o(330, 329, ")Tu!")]();
  }
  async [fA(908, 855, "u6c7", 914, 994) + cA(780, "Hzr3") + "se"](n) {
    var a;
    function t(g, s, C, c, E) {
      return fA(g - 111, s - 161, s, c - 212, E - -745);
    }
    function e(g, s, C, c, E) {
      return fA(g - 460, s - 240, E, c - 105, C - 329);
    }
    function A(g, s, C, c, E) {
      return cA(E - 329, g);
    }
    function o(g, s, C, c, E) {
      return FA(g - 405, s - 286, C - 168, s - -683, g);
    }
    function r(g, s, C, c, E) {
      return fA(g - 470, s - 334, E, c - 491, s - -1514);
    }
    try {
      if (t(201, "Zq#l", 158, 304, 200) === t(116, "ULZX", 118, -22, -11)) {
        if (!this[t(151, "Zq#l", -10, 247, 108) + "se"]) throw new _0x41fffb(t(-35, "ULZX", 112, 77, 2) + t(-14, "@ADn", -28, 57, 64) + t(101, "p20V", 326, 187, 237) + o("&ca4", -512, -576, -392, -376) + ".");
        if (!this[r(-799, -755, -808, -869, "LJzt") + e(1176, 1031, 1142, 1279, "ULZX") + "d"][o("]tqg", -486, -505, -364, -350) + t(155, "kB&@", 152, 111, 65) + A("X]*c", 1016, 1024, 1160, 1023) + "ed"]()) throw new _0x488d61(o(")i]t", -446, -577, -415, -395) + e(1219, 1159, 1136, 1165, "u6c7") + A("nF%0", 1123, 1008, 1030, 984) + e(1385, 1190, 1328, 1462, "Zq#l") + ".");
        this[t(77, "&S^8", 224, 155, 211) + r(-687, -679, -812, -739, "nF%0")] = new _0x32c313(_0x5e6ee5(this[o("0RaS", -552, -543, -475, -486) + "se"], this[r(-686, -636, -692, -589, "k]dK") + t(322, "uR04", 353, 314, 243)]())), this[t(276, "LQ8v", 307, 329, 230) + A("uR04", 1073, 911, 971, 1006) + "s"](this[o("byBz", -414, -333, -344, -457) + o("kB&@", -460, -404, -397, -371)][r(-521, -537, -615, -634, "oL$@") + "s"]), this[e(1193, 1220, 1309, 1257, "wJED") + t(7, "byBz", 35, 230, 99) + r(-838, -756, -842, -778, "]tqg")](this[A("kB&@", 1021, 1177, 1119, 1122) + o("5)*0", -533, -487, -456, -588)][t(154, "6a*%", 90, -49, 52) + A("wP7q", 956, 1144, 953, 1059)]);
      } else {
        const g = await fetch(n);
        if (!g.ok) {
          if (A("uR04", 1063, 906, 1083, 970) !== e(1126, 1069, 1080, 1084, "ce!Z")) throw new Error(o("ce!Z", -537, -669, -539, -595) + t(-44, "LQ8v", -44, -41, 4) + e(1241, 1185, 1246, 1316, "OJu8") + A("wP7q", 1119, 1042, 992, 1019) + "d.");
          {
            const s = this[o("LQ8v", -432, -518, -384, -532) + r(-629, -602, -593, -568, "LQ8v") + "se"]();
            return (a = s == null ? void 0 : s[t(45, "k]dK", 195, 41, 128) + r(-768, -771, -731, -832, "&ca4")]) == null ? void 0 : a[t(130, "@ADn", 163, 111, 201) + A("(]kA", 889, 1033, 925, 1017)];
          }
        }
        this[r(-652, -776, -886, -849, "[(iw") + "se"] = await g[e(1258, 1277, 1230, 1115, "ce!Z")]();
      }
    } catch (g) {
      if (r(-716, -689, -764, -603, "u6c7") !== t(-13, "V7v^", 73, 15, 121)) this[t(59, "5Din", -108, 112, -6) + "se"] = void 0, console[r(-754, -742, -806, -745, "p20V")](g);
      else {
        _0x465054 instanceof _0x34b89b ? _0x3275a1[o("LQ8v", -392, -530)]() : _0x2cf950 instanceof _0x38aa27 && _0x1a7ad7[A("[(iw", 1034, 1215, 1093, 1157)](_0x13207d);
        const s = {};
        s[A("jecr", 1165, 1166, 1067, 1113) + t(52, "0RaS", -25, -115, 18)] = !1, s[o("uR04", -327, -415) + "s"] = [], s[t(140, "t^2v", 306, 310, 245) + t(147, "iYHW", -4, -65, 30)] = [], s[r(-734, -671, -597, -796, "Shfc") + o("mqfB", -412, -527) + e(1366, 1227, 1272, 1325, "Hzr3")] = void 0, s[r(-710, -572, -690, -564, "byBz")] = function() {
        }, s[e(1227, 1283, 1260, 1394, ")Tu!") + t(216, "wP7q", 92, 21, 82)] = "", this[e(1270, 1319, 1315, 1231, "LQ8v") + o("uR04", -453, -526)] = new _0x47a221(s);
      }
    }
  }
  async [vA("kB&@", 365, 365, 456, 460) + FA(112, 348, 323, 224, "LJzt") + "e"](n) {
    var a;
    function t(g, s, C, c, E) {
      return vA(s, s - 274, C - 201, c - 219, C - 765);
    }
    function e(g, s, C, c, E) {
      return AA(g - 475, C - -95, C - 313, E);
    }
    function A(g, s, C, c, E) {
      return cA(C - 505, E);
    }
    this[A(1178, 1181, 1298, 1281, "kB&@") + o(503, 422, 355, 439, "WBJ0")] = void 0;
    function o(g, s, C, c, E) {
      return FA(g - 255, s - 247, C - 33, c - 108, E);
    }
    function r(g, s, C, c, E) {
      return cA(E - 490, c);
    }
    if (!n)
      if (t(967, "k]dK", 1023, 903) !== t(1093, "TFav", 1125, 1197)) {
        console[r(1322, 1284, 1377, "kB&@", 1256)](o(539, 352, 547, 473, "%m[U") + e(-402, -365, -282, -364, "&S^8") + t(965, "(]kA", 982, 987) + A(1426, 1428, 1345, 1386, "%m[U") + o(444, 330, 453, 397, "wJED")), this[r(1311, 1257, 1265, "c#sL", 1247) + "se"] = void 0;
        return;
      } else {
        const g = this[e(-225, -233, -355, -454, "&ca4") + e(-201, -196, -304, -436, "Hzr3") + "se"]();
        return ((a = g == null ? void 0 : g[o(538, 537, 335, 438, "u6c7") + e(-461, -363, -395, -316, "k]dK")]) == null ? void 0 : a[e(-324, -291, -363, -341, "Rp[R")]) || [];
      }
    await this[o(500, 398, 301, 414, "wRwc") + r(1280, 1387, 1466, "k]dK", 1333) + "se"](n);
  }
  async [vA("X]*c", 196, 387, 314, 315) + vA("t]Ts", 144, 209, 267, 229) + vA("t^2v", 218, 221, 400, 333)](n) {
    function t(s, C, c, E, I) {
      return FA(s - 149, C - 408, c - 348, C - 1039, I);
    }
    const e = await fetch("" + n + this[o(-108, 161, 25, 36, "TFav") + a(89, 75, 182, "wJED", 110) + a(39, 98, 97, "%m[U", 141) + a(354, 156, 211, "wP7q", 222)][-9761 + -5 * 1402 + 541 * 31]), A = e.ok ? 2 * -2203 + -315 * -25 + -3469 : -1463 + -19 * 336 + 7848;
    function o(s, C, c, E, I) {
      return vA(I, C - 281, c - 440, E - 0, c - -357);
    }
    function r(s, C, c, E, I) {
      return AA(s - 305, C - -133, c - 483, I);
    }
    function a(s, C, c, E, I) {
      return FA(s - 251, C - 391, c - 259, I - -107, E);
    }
    function g(s, C, c, E, I) {
      return AA(s - 133, c - 1046, c - 251, E);
    }
    return "" + n + this[o(105, 7, 56, 80, "PoM)") + r(-540, -415, -295, -367, "LQ8v") + t(1364, 1296, 1409, 1192, "6a*%") + g(908, 867, 911, "@ADn")][A];
  }
  [vA("t^2v", 487, 516, 474, 424) + fA(889, 789, "LJzt", 842, 795) + "s"](n) {
    function t(A, o, r, a, g) {
      return cA(A - 40, g);
    }
    function e(A, o, r, a, g) {
      return fA(A - 50, o - 301, A, a - 208, a - -935);
    }
    n[e("jecr", 171, 7, 33) + "ch"]((A) => console[t(776, 830, 861, 856, "wRwc")](A));
  }
  [FA(218, 129, 297, 163, "#w8m") + cA(718, "Rp[R") + cA(733, "5SGS")](n) {
    function t(e, A, o, r, a) {
      return FA(e - 171, A - 427, o - 253, e - 649, A);
    }
    n[t(889, "p20V", 870) + "ch"]((e) => console[t(1015, "0RaS", 980)](e));
  }
  [vA("Hzr3", 306, 498, 240, 366) + vA("&S^8", 379, 486, 524, 387)]() {
    function n(A, o, r, a, g) {
      return cA(a - 171, g);
    }
    function t(A, o, r, a, g) {
      return cA(a - -1074, o);
    }
    function e(A, o, r, a, g) {
      return fA(A - 44, o - 382, o, a - 177, g - 159);
    }
    return window[t(-337, "wRwc", -209, -340) + e(1185, "&S^8", 1154, 1201, 1151)][t(-424, "PoM)", -196, -302) + n(840, 912, 959, 840, "[(iw")];
  }
  [AA(-232, -293, -236, "TFav") + vA("[(iw", 310, 274, 242, 209) + FA(402, 205, 276, 301, "&ca4")]() {
    function n(r, a, g, s, C) {
      return vA(C, a - 387, g - 190, s - 128, a - 639);
    }
    function t(r, a, g, s, C) {
      return cA(g - -850, s);
    }
    function e(r, a, g, s, C) {
      return fA(r - 363, a - 275, a, s - 403, s - -41);
    }
    function A(r, a, g, s, C) {
      return FA(r - 382, a - 159, g - 97, r - 57, s);
    }
    function o(r, a, g, s, C) {
      return fA(r - 178, a - 175, g, s - 434, a - -838);
    }
    try {
      if (t(-136, -111, -233, "oL$@", -182) === o(109, 100, "jecr", -2, 86)) _0x5439cf[o(-74, -1, "0RaS", -121, 7) + "ch"]((r) => _0x1144a4[o(128, 78, "8TuF", -8, -25)](r));
      else {
        if (!this[e(804, "kB&@", 859, 806, 713) + "se"]) {
          if (t(-107, -295, -178, "V7v^", -187) === A(195, 228, 255, "(]kA", 176)) throw new Ui(n(838, 887, 931, 822, "Hzr3") + e(900, "p20V", 794, 916, 924) + n(766, 859, 996, 937, "nF%0") + t(-328, -333, -231, "8TuF", -330) + ".");
          _0x4928b5[o(179, 135, "5)*0", 97, 272)](_0xb7014a);
        }
        if (!this[e(920, "Shfc", 940, 898, 889) + e(842, "&ca4", 680, 709, 715) + "d"][e(818, "FLqC", 756, 829, 723) + A(152, 284, 266, "LQ8v", 264) + A(174, 148, 273, ")i]t", 291) + "ed"]()) {
          if (n(999, 939, 1024, 1029, "5)*0") === o(78, 39, "8TuF", -31, -37)) return this[t(-303, -134, -187, "X]*c", -83) + o(111, 110, "LQ8v", 229, 232)];
          throw new Ui(n(1080, 1e3, 1076, 1038, "]tqg") + A(373, 236, 278, "ce!Z", 487) + A(201, 236, 77, "c#sL", 234) + o(9, 115, "jecr", 140, 78) + ".");
        }
        this[n(829, 879, 744, 786, "PoM)") + o(11, -35, "[(iw", 48, 3)] = new rg(AB(this[A(160, 148, 141, "[(iw", 99) + "se"], this[A(347, 459, 299, "V7v^", 426) + o(-25, 60, "6a*%", 90, 110)]())), this[o(-13, -58, "0RaS", -146, -23) + A(325, 421, 380, "6a*%", 210) + "s"](this[o(65, -67, "oL$@", -102, -125) + o(-109, -55, "t^2v", -172, 76)][t(-169, -197, -131, "u6c7", -47) + "s"]), this[o(11, -20, "wP7q", 74, -67) + o(-252, -113, "X]*c", -225, -165) + A(332, 384, 359, "%m[U", 403)](this[A(155, 224, 151, "OJu8", 186) + t(-89, -221, -186, "oL$@", -75)][e(979, "byBz", 921, 942, 917) + n(1010, 960, 887, 1051, "wP7q")]);
      }
    } catch (r) {
      if (o(129, 147, "8TuF", 201) === e(1013, "ce!Z", 972, 893)) return null;
      {
        if (r instanceof Ui)
          if (e(959, "FLqC", 862, 864) !== e(843, "6a*%", 854, 928)) r[o(98, 140, "5)*0", 15)]();
          else return !!this[e(915, "c#sL", 876, 867) + n(924, 886, 778, 993, "t^2v")];
        else if (r instanceof Error)
          if (A(343, 372, 273, "]tqg") === n(964, 993, 1108, 1081, "u6c7")) console[n(895, 904, 956, 840, "@ADn")](r);
          else throw new _0x20a7e2(n(751, 832, 861, 713, "5SGS") + A(157, 55, 289, "ce!Z") + t(-250, -342, -249, "&S^8") + e(825, "t^2v", 748, 723) + ".");
        const a = {};
        a[A(241, 245, 256, ")Tu!") + A(307, 251, 336, "wRwc")] = !1, a[t(-279, -281, -207, "Rp[R") + "s"] = [], a[o(168, 92, "iYHW", 78) + t(-294, -339, -215, "PoM)")] = [], a[e(892, "u6c7", 907, 878) + n(1118, 1035, 1078, 912, "FLqC") + e(787, "(]kA", 676, 789)] = void 0, a[t(140, -116, 2, "Rp[R")] = function() {
        }, a[t(-202, -66, -110, "jecr") + o(111, 77, "mqfB", 50)] = "", this[n(925, 1059, 1188, 978, "&S^8") + o(238, 121, "5SGS", -17)] = new rg(a);
      }
    }
  }
  [cA(613, "t^2v") + AA(-345, -274, -285, "c#sL") + fA(815, 816, "kB&@", 864, 787) + FA(219, 319, 330, 326, "Shfc")]() {
    function n(e, A, o, r, a) {
      return cA(A - -784, e);
    }
    function t(e, A, o, r, a) {
      return fA(e - 196, A - 240, r, r - 425, e - -818);
    }
    return !!this[n("u6c7", -78) + t(145, 183, 265, "k]dK")];
  }
  [vA("t^2v", 357, 180, 268, 276) + AA(-128, -267, -190, "Shfc") + AA(-487, -390, -447, "byBz") + "t"]() {
    function n(t, e, A, o, r) {
      return cA(o - -585, t);
    }
    return this[n("Shfc", 203, 79, 77) + n("]tqg", 3, 206, 112)];
  }
  [AA(-135, -236, -228, "&S^8") + AA(-277, -209, -185, "Hzr3") + "se"]() {
    function n(r, a, g, s, C) {
      return FA(r - 362, a - 230, g - 378, s - 871, g);
    }
    function t(r, a, g, s, C) {
      return FA(r - 120, a - 86, g - 304, s - -912, g);
    }
    function e(r, a, g, s, C) {
      return vA(a, a - 37, g - 209, s - 148, g - -771);
    }
    if (!this[A(69, ")i]t") + "se"]) {
      if (A(204, "t^2v") !== A(208, "5Din")) throw new _0x19fdae(t(-576, -687, "Zq#l", -597) + A(150, "5Din") + o("#w8m", -696, -568, -676) + o("5Din", -512, -647, -543) + "d.");
      return null;
    }
    function A(r, a, g, s, C) {
      return cA(r - -658, a);
    }
    function o(r, a, g, s, C) {
      return fA(r - 248, a - 494, r, s - 331, s - -1443);
    }
    try {
      if (A(26, "u6c7", 87, -40, -75) === e(-470, "(]kA", -420, -424, -533)) _0xbba1ed[A(53, "OJu8", 6, 41, 145) + "ch"]((r) => _0x19fa08[t(-575, -709, "FLqC", -585, -662)](r));
      else return JSON[n(1008, 955, "V7v^", 1038, 1136)](this[t(-580, -846, "(]kA", -716, -646) + "se"]);
    } catch (r) {
      if (t(-635, -632, "6a*%", -625) !== A(-16, "t]Ts")) this[n(1062, 1200, "&S^8", 1163) + "se"] = void 0, _0x5abc67[o("wJED", -630, -692, -621)](_0x13ee0d);
      else {
        if (r instanceof Error)
          if (A(43, "u6c7") === e(-541, "wP7q", -565, -596)) D[t(-640, -800, "k]dK", -707) + A(56, "LJzt")](r);
          else throw new _0x3143f5(n(979, 949, "[(iw", 997) + n(1103, 1149, "LQ8v", 1044) + n(918, 963, "@ADn", 1022) + A(-61, "kB&@") + ".");
        return null;
      }
    }
  }
  [fA(802, 685, "mqfB", 738, 760) + AA(-389, -254, -276, "Rp[R")]() {
    var o;
    function n(r, a, g, s, C) {
      return AA(r - 133, C - 62, g - 423, s);
    }
    const t = this[n(-193, -187, 58, "uR04", -70) + e(597, "Zq#l", 739, 744, 696) + "se"]();
    function e(r, a, g, s, C) {
      return AA(r - 416, C - 1024, g - 0, a);
    }
    function A(r, a, g, s, C) {
      return cA(a - 218, C);
    }
    return ((o = t == null ? void 0 : t[e(740, "p!A&", 935, 985, 879) + n(-177, -42, 22, "Hzr3", -117)]) == null ? void 0 : o[A(1014, 955, 928, 1030, "Zq#l")]) || [];
  }
  [AA(-29, -140, -85, "nF%0") + AA(-168, -221, -265, "ce!Z") + fA(869, 767, ")Tu!", 765, 741)]() {
    var o;
    function n(r, a, g, s, C) {
      return AA(r - 220, r - 233, g - 151, C);
    }
    function t(r, a, g, s, C) {
      return vA(a, a - 280, g - 405, s - 412, s - 469);
    }
    function e(r, a, g, s, C) {
      return fA(r - 312, a - 214, C, s - 350, r - -1303);
    }
    const A = this[n(-109, -167, -235, -201, "t^2v") + e(-375, -497, -246, -297, "WBJ0") + "se"]();
    return (o = A == null ? void 0 : A[n(-147, -208, -243, -155, "&S^8") + t(849, "X]*c", 608, 711)]) == null ? void 0 : o[e(-357, -232, -405, -249, "@ADn") + e(-435, -440, -468, -555, "Shfc")];
  }
}
const Ca = _e(void 0);
Ca.displayName = "CommonConfigurationContext";
function ys() {
  const i = me(Ca);
  if (!i)
    throw new Error("Missing provider for CommonConfigurationContext");
  return i;
}
(function(i, n) {
  function t(a, g, s, C, c) {
    return ZA(s - 714, C);
  }
  const e = i();
  function A(a, g, s, C, c) {
    return ZA(a - 768, g);
  }
  function o(a, g, s, C, c) {
    return ZA(C - -593, c);
  }
  function r(a, g, s, C, c) {
    return ZA(a - -730, g);
  }
  for (; ; )
    try {
      if (-parseInt(o(-87, -76, -86, -83, "hF@L")) / 1 + parseInt(o(-107, -103, -102, -98, "ufAC")) / 2 + parseInt(r(-231, "xM9@", -222, -223, -228)) / 3 * (parseInt(t(1217, 1221, 1212, "(hMv", 1221)) / 4) + parseInt(r(-233, "Cdir", -226, -228, -233)) / 5 * (parseInt(t(1219, 1220, 1221, "3Lzx", 1215)) / 6) + -parseInt(r(-217, "yhTA", -224, -216, -209)) / 7 + -parseInt(o(-84, -91, -91, -87, "^rDk")) / 8 * (-parseInt(o(-82, -85, -82, -82, "TIDf")) / 9) + -parseInt(A(1261, "Cdir", 1255, 1259, 1250)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ei, -1661 * -343 + 19609 * 57 + -913538);
function ei() {
  const i = ["W4bQksRdQ8oNrqGIo0VdKSoH", "WO/cRf0lpCoyCI4", "W6baW5qlwIdcKW", "oCksW43cRCkNq14", "W6tcVc12W6lcQ1hcImo/lCo2aSoH", "mCo1dmodW7hcKSoMWOCgW75uW6NcJW", "AxhcRv3dS8kWzq", "W4aHu8kjWO0lAd7cGmofvmkMjq", "zmkWWRO6Emk9qW", "uSk1WQ7dOmo8rSkYWPG3y2ZdGgK", "ACkVv8kb", "hwDww8oRWRRcOY8", "n8o3c8omW7hcLCoOWOqBW6zwW6tcSW", "WQVdUCouWPxdImo3gCo/vI7cKmobxa", "su3dRCkhW4FdPmoBW6K8WOnEW57dKq", "kmkSW6jVFCkyfLjVwGLrW4y", "cSoBj8ollKRdVstcHJ1hWR7dIW", "FSoAW6ZdOmoPWRzBW7rHm1FcUe/dTW", "W5JdI8kkWQiCESk6nCkbkmo0hG", "rbJcGMbHqbdcHCkRW5dcKmoj", "W6CtWQPRnhBdICkMWPj9WPSBuWO", "W7q8bmkJWQ4"];
  return ei = function() {
    return i;
  }, ei();
}
function ZA(i, n) {
  const t = ei();
  return ZA = function(e, A) {
    e = e - (-9081 + -248 * -31 + 1886);
    let o = t[e];
    if (ZA.rGmztn === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      ZA.sJcHGM = C, i = arguments, ZA.rGmztn = !0;
    }
    const a = t[1 * -5515 + 1 * 3027 + 2488], g = e + a, s = i[g];
    return s ? o = s : (ZA.CXqoXr === void 0 && (ZA.CXqoXr = !0), o = ZA.sJcHGM(o, A), i[g] = o), o;
  }, ZA(i, n);
}
function rB() {
  function i(o, r, a, g, s) {
    return ZA(r - -350, a);
  }
  const { assetsDirectoryPath: n } = ys(), [t, e] = xA();
  z(() => {
    async function o() {
      function r(s, C, c, E, I) {
        return ZA(E - 479, c);
      }
      const a = new nB(), g = new iB(a);
      await g[r(977, 994, "3Lzx", 984)](n), e(g);
    }
    o();
  }, [n]);
  const A = {};
  return A[i(149, 144, "!dph") + "le"] = t, A;
}
(function(i, n) {
  function t(s, C, c, E, I) {
    return zA(I - -570, s);
  }
  function e(s, C, c, E, I) {
    return zA(C - 925, c);
  }
  var A = i();
  function o(s, C, c, E, I) {
    return zA(I - 815, s);
  }
  function r(s, C, c, E, I) {
    return zA(E - 987, s);
  }
  function a(s, C, c, E, I) {
    return zA(E - 962, C);
  }
  for (; ; )
    try {
      var g = parseInt(e(1266, 1255, "j$Nx", 1248, 1265)) / 1 * (-parseInt(e(1264, 1253, "Xy@9", 1244, 1262)) / 2) + -parseInt(o("b9u5", 1141, 1156, 1142, 1148)) / 3 * (-parseInt(a(1301, "0)Zo", 1297, 1297, 1290)) / 4) + parseInt(e(1238, 1239, "luf^", 1237, 1231)) / 5 + -parseInt(o("j$Nx", 1136, 1148, 1140, 1141)) / 6 + -parseInt(t("0OqX", -231, -238, -240, -239)) / 7 + parseInt(r("#efP", 1294, 1290, 1302, 1303)) / 8 * (-parseInt(o("n!T8", 1126, 1137, 1142, 1132)) / 9) + parseInt(t("Ez^$", -245, -250, -251, -246)) / 10;
      if (g === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ti, -11924 + 503414 * 1);
function ti() {
  var i = ["pWrjW7tdQhtcSmoQo2e", "uw7cS2VdRXHCWQLFWP8", "jdVdKSogWQddQSkJWOmPWO3dKCoroq", "tM3cISkrW4xdNmkrWQCNcq", "t8klWP8QgYWVW5JcO8oTvqFcHG", "WPBcVSkNWOJdOrLZpMfzW5bj", "nCoKm8kCW6tdHeO", "W48Bc8kVW7hcVmoKeSozmuPsjSkT", "gwOMWPaAF8ocwSkGzwrUCa", "FcNdP8kEwbmZ", "oWDmW7tcOtlcGCoYg0bvWQq", "ixSeW4WelJ/cQG", "f0ZdLIZcPG", "WQFdVCoEq8kdWPJdUCkOdZa", "W5aPWR7cGvXpWPLK", "bI3dT8ksrW", "tM/cJmkAWOFcNSo/WRuOn8oOySk6", "WQL/g8oNgG", "wmouWOD/xfxdV8k0r8kY", "W4FcQ1HpuCoTcNzaiHxcNHy", "W5KGW5FdMt0iW7K1hCkEWRb/hCo9", "WQdcIGZcISocBfqvrSoy", "tg7cICkBWOhcM8o7WOC2a8obw8kS"];
  return ti = function() {
    return i;
  }, ti();
}
function zA(i, n) {
  var t = ti();
  return zA = function(e, A) {
    e = e - (4 * -2069 + 2125 + 6465);
    var o = t[e];
    if (zA.XhsLgj === void 0) {
      var r = function(c) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", I = "", x = "", d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (var m = 0, y = I.length; m < y; m++)
          x += "%" + ("00" + I.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, a = function(c, E) {
        var I = [], x = 0, d, l = "";
        c = r(c);
        var Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (var f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      zA.cssNgz = a, i = arguments, zA.XhsLgj = !0;
    }
    var g = t[43 * -50 + -1769 * 5 + -3 * -3665], s = e + g, C = i[s];
    return C ? o = C : (zA.aWdQso === void 0 && (zA.aWdQso = !0), o = zA.cssNgz(o, A), i[s] = o), o;
  }, zA(i, n);
}
function aB({ crosshatch: i }) {
  function n(t, e, A, o, r) {
    return zA(o - 256, t);
  }
  return i != null && i[n("aFsO", 567, 567, 577) + "id"] ? _t[n("Eena", 561, 574, 572) + "r"] : _t[n("g*2i", 570, 570, 575)];
}
function oi() {
  const i = ["x8oDBgysWRpcVGxcJCkwW5jHW5Hr", "wgj7W6tdNq", "qrJdLCor", "WO1KWQvtW6f2fmk4WO3cKYu7fG", "nCoXkSoQW5NcKaBdVYu", "W4/dQ8kpimkv", "EJ8cjbecsJZcT8oilmk3W4tdPG", "FKOpWQBcS0ZdQM8EWQe", "W4NcON14EG", "W5WYW7SvWRm", "WRO4WRKBFG", "s0beAx8", "WP1WW5hdSuXOs8ktvCkrcq", "WQ3cNvTeCvzT", "nSoBFYuIbmo4WOr5ACkQzSkBW7G", "FKimWQ/dGrlcUWm2WQFdGCoiW5eE", "sCkrW6RcJuXBaSo7ba0yW4pdJG", "dtq/WP3cG0/dGuLlW5n0WOJcPa", "W6/dQ8kppmku", "tSkdW4FcIZG", "W7JdUSkb", "W4eNWPC", "Bd9nW5er", "wCklW6JdTSo/F8oPWQnlWOq", "wCkiWPhcJ1OmnmoAW51aCa", "xCkIfHvjW5RdPa", "WPrMWR4ykW", "WRRdLgtdJKxdSmkMWQe9y3ldUq", "n8oZkSkpW7VcUdZdVXhcNq", "WPGwWOxcSCkmW6OjnLm", "aSkQWOZdI23cTmkujCoPWPVcR8kPWOC", "W7tcJSkem8o5yCoTW5eOW60", "W4XhW5ZcKSkH", "W73dVSkCqCk1", "meBdR8kwW5HrASkkWPtcULXF"];
  return oi = function() {
    return i;
  }, oi();
}
(function(i, n) {
  function t(g, s, C, c, E) {
    return DA(c - -914, g);
  }
  function e(g, s, C, c, E) {
    return DA(s - -972, g);
  }
  function A(g, s, C, c, E) {
    return DA(c - 840, E);
  }
  function o(g, s, C, c, E) {
    return DA(s - -824, g);
  }
  function r(g, s, C, c, E) {
    return DA(s - -934, C);
  }
  const a = i();
  for (; ; )
    try {
      if (-parseInt(A(979, 995, 980, 990, ")hfZ")) / 1 + -parseInt(A(965, 986, 974, 973, "UM16")) / 2 + parseInt(A(989, 995, 1024, 1007, "5@F7")) / 3 * (-parseInt(A(982, 992, 966, 981, "Fu((")) / 4) + parseInt(o("P9g5", -680, -687, -667, -680)) / 5 * (-parseInt(e(")%hQ", -825, -809, -823, -828)) / 6) + -parseInt(o("*W1X", -658, -674, -644, -646)) / 7 + parseInt(o("VxT9", -684, -667, -684, -700)) / 8 * (-parseInt(t("P9g5", -773, -749, -759, -771)) / 9) + parseInt(r(-779, -783, "Fu((", -768, -795)) / 10 === n) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(oi, 21722 * 37 + 524538 + -2298 * 233);
function DA(i, n) {
  const t = oi();
  return DA = function(e, A) {
    e = e - (-883 * 4 + 700 * 3 + 1565);
    let o = t[e];
    if (DA.OoDRvp === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      DA.jnhMfA = C, i = arguments, DA.OoDRvp = !0;
    }
    const a = t[1246 * 1 + -4996 + 150 * 25], g = e + a, s = i[g];
    return s ? o = s : (DA.JvWfiS === void 0 && (DA.JvWfiS = !0), o = DA.jnhMfA(o, A), i[g] = o), o;
  }, DA(i, n);
}
function gB({ children: i }) {
  const { bramble: n } = rB(), t = NA(() => ({ redfin: aB({ crosshatch: n == null ? void 0 : n[a(-509, -514, -499, -513, "UM16") + a(-514, -512, -503, -514, "47p)") + o("^97i", 244, 262, 259) + "t"]() }), crosshatch: n == null ? void 0 : n[a(-478, -491, -490, -479, "jv!e") + A(1052, 1045, 1064, "0mcY") + e("MG9j", 641, 648, 665, 658) + "t"](), bramble: n, wasLicenseValidated: n == null ? void 0 : n[e("1eBt", 666, 663, 658, 669) + a(-508, -495, -491, -508, "lyVe") + a(-480, -487, -495, -493, "W$SQ") + o("fhKi", 272, 287, 270)]() }), [n]);
  function e(g, s, C, c, E) {
    return DA(E - 520, g);
  }
  function A(g, s, C, c, E) {
    return DA(g - 890, c);
  }
  function o(g, s, C, c, E) {
    return DA(c - 117, g);
  }
  const r = {};
  r[a(-501, -508, -517, -533, "W$SQ")] = t;
  function a(g, s, C, c, E) {
    return DA(C - -651, E);
  }
  return r[o("H(V4", 235, 264, 252) + a(-518, -497, -515, -518, "1eBt")] = i, k(Jn[A(1049, 1051, 1038, "XWe^") + a(-526, -518, -514, -504, "c(I#")], r);
}
const sB = 2e3;
class cB {
  constructor(n) {
    p(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), sB), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, a = await fetch(n, r).catch(() => null);
    return clearTimeout(e), a ? a.status !== 400 && a.status !== 7873 + 467 * -16 : !0;
  }
}
var Ut, Pe, $e, Yt, wo, Do, bo, ko;
class IB {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    U(this, Ut);
    U(this, Pe);
    U(this, $e);
    U(this, Yt);
    U(this, wo);
    U(this, Do);
    U(this, bo);
    U(this, ko);
    W(this, Ut, t), W(this, wo, n), W(this, ko, e), W(this, Do, window.location.origin), W(this, bo, "7.7.0");
  }
  async init(n) {
    if (W(this, $e, this.shouldCountTransactions(n)), console.info("Transaction counting is " + (S(this, $e) ? "enabled" : "disabled")), $0()) {
      W(this, Pe, !0), W(this, $e, !1);
      return;
    }
    if (!S(this, $e)) {
      W(this, Pe, !0);
      return;
    }
    if (W(this, Yt, S(this, Ut).transactionCountingToken), !S(this, Yt)) {
      console.warn("Transaction counting token is missing"), W(this, Pe, !1);
      return;
    }
    W(this, Pe, await S(this, Ut).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !1 : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeTransactionReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeTransactionReportingEnabled : !1;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!S(this, $e) || !S(this, Pe)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = S(this, wo), e.id = S(this, Do), e.version = S(this, bo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = S(this, ko);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + S(this, Yt);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return S(this, Pe) || !1;
  }
}
Ut = new WeakMap(), Pe = new WeakMap(), $e = new WeakMap(), Yt = new WeakMap(), wo = new WeakMap(), Do = new WeakMap(), bo = new WeakMap(), ko = new WeakMap();
function CB(i, n) {
  const { crosshatch: t, bramble: e } = fi(), [A, o] = xA(null);
  z(() => {
    if (!t) return;
    (async () => {
      const g = new cB(n), s = new IB({ hwids: e.getHwids(), tokenHandler: g, transactionType: i });
      await s.init(t), o(s);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function BB({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = CB(t, n), A = NA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ k(Yn.Provider, { value: A, children: i });
}
const Ve = {};
Ve.FACE = "web-capture-face", Ve.DOCUMENT = "web-capture-document", Ve.MAGNIFEYE = "web-capture-magnifeye", Ve.SMILE = "web-capture-smile", Ve.PALM = "web-capture-palm", Ve.EYEGAZE = "web-capture-eyegaze", Ve.MULTIRANGE = "web-capture-multirange";
const QB = Ve;
var XA = function() {
  return XA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, XA.apply(this, arguments);
};
function jt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function EB(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var xB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dB = EB(function(i) {
  return xB.test(i) || i.charCodeAt(2 * -321 + -1 * 9419 + 10061) === 111 && i.charCodeAt(1 * 4139 + -7496 * 1 + -1679 * -2) === -1426 * -3 + -381 * 18 + -269 * -10 && i.charCodeAt(243 + 241 * -1) < -1 * 1463 + -1413 + 129 * 23;
});
function lB(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Yi, ag;
function uB() {
  return ag || (ag = -7481 + 14 * -489 + 1791 * 8, Yi = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (var g = Object.prototype.hasOwnProperty.bind(t), s = 0; s < r.length; s++) {
      var C = r[s];
      if (!g(C)) return !1;
      var c = n[C], E = t[C];
      if (o = e ? e.call(A, c, E, C) : void 0, o === !1 || o === void 0 && c !== E) return !1;
    }
    return !0;
  }), Yi;
}
var fB = uB();
const hB = /* @__PURE__ */ lB(fB);
var j = "-ms-", xo = "-moz-", T = "-webkit-", ws = "comm", pi = "rule", Ba = "decl", pB = "@import", Ds = "@keyframes", mB = "@layer", bs = Math.abs, Qa = String.fromCharCode, Fr = Object.assign;
function yB(i, n) {
  return BA(i, 1 * 8789 + -3262 + 1 * -5527) ^ -5876 + 43 * 146 + -1 * 357 ? (((n << -35 * 183 + 5367 * 1 + 1040 ^ BA(i, -481 * -1 + 5748 + -6229 * 1)) << -4080 + 2041 * 2 ^ BA(i, -6573 + 1 * -2451 + 9025)) << -9730 + 811 * 12 ^ BA(i, 3939 + 1 * -7297 + 3360)) << -4877 * -1 + -7 * 31 + 4658 * -1 ^ BA(i, 11 * 11 + 1 * -272 + 154) : -28 * 133 + 21 * -369 + 11473;
}
function ks(i) {
  return i.trim();
}
function Je(i, n) {
  return (i = n.exec(i)) ? i[-4 * -609 + 3 * -657 + -465] : i;
}
function O(i, n, t) {
  return i.replace(n, t);
}
function fn(i, n, t) {
  return i.indexOf(n, t);
}
function BA(i, n) {
  return i.charCodeAt(n) | 9011 * -1 + 8514 + 497;
}
function qt(i, n, t) {
  return i.slice(n, t);
}
function De(i) {
  return i.length;
}
function Ss(i) {
  return i.length;
}
function Io(i, n) {
  return n.push(i), i;
}
function wB(i, n) {
  return i.map(n).join("");
}
function gg(i, n) {
  return i.filter(function(t) {
    return !Je(t, n);
  });
}
var mi = 6296 + 125 * -62 + 1455, Vt = -8173 + -3 * -1363 + 4085, Gs = -1762 + -1762 * -1, Ie = -235 * -38 + -7741 * 1 + 41 * -29, eA = 5152 + 890 * -6 + -94 * -2, oo = "";
function yi(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = mi, g.column = Vt, g.length = r, g.return = "", g.siblings = a, g;
}
function Ze(i, n) {
  return Fr(yi("", null, null, "", null, null, -1 * -3076 + 5 * 953 + 7841 * -1, i.siblings), i, { length: -i.length }, n);
}
function St(i) {
  for (; i.root; ) i = Ze(i.root, { children: [i] });
  Io(i, i.siblings);
}
function DB() {
  return eA;
}
function bB() {
  return eA = Ie > 9674 + 7 * -1382 ? BA(oo, --Ie) : 4979 + 1 * -6211 + 112 * 11, Vt--, eA === -1 * 4463 + 6105 + -1632 && (Vt = 1, mi--), eA;
}
function he() {
  return eA = Ie < Gs ? BA(oo, Ie++) : 0, Vt++, eA === 764 * 3 + 810 + -3092 && (Vt = -4500 + 23 * 139 + 1304, mi++), eA;
}
function ft() {
  return BA(oo, Ie);
}
function hn() {
  return Ie;
}
function wi(i, n) {
  return qt(oo, i, n);
}
function vr(i) {
  switch (i) {
    case 0:
    case 3652 * 1 + 8993 * 1 + -1053 * 12:
    case 465 * -11 + -5419 + 10544:
    case -1902 * 4 + -1298 + -991 * -9:
    case 32:
      return -1939 * 3 + 4910 * -1 + 10732;
    case 83 * -15 + 3 * 2443 + 6051 * -1:
    case 2 * 1489 + -70 + -2865:
    case -424 * -9 + -1161 + 373 * -7:
    case -3445 * 1 + 7664 + -1 * 4172:
    case -23 * 357 + -1538 + 9811:
    case 64:
    case -1 * -329 + 41 * -71 + 2708:
    case 12869 + 35 * -366:
    case -413 * 2 + 1435 + -486:
    case 125:
      return -1 * 4043 + -1995 + 6042;
    case 58:
      return -9501 * 1 + 7635 + -267 * -7;
    case 34:
    case -1 * 237 + 5419 + -5143 * 1:
    case -4133 + 2987 * -3 + 13134:
    case 1813 * -1 + -41 * -202 + -2126 * 3:
      return 4673 + 6 * -1400 + 3 * 1243;
    case 8645 + -2151 * 4:
    case 3504 + 9 * -379:
      return 29 * -136 + -1454 * -1 + 2491;
  }
  return -8405 * -1 + 716 + -1303 * 7;
}
function kB(i) {
  return mi = Vt = 2146 * -4 + -247 + 3 * 2944, Gs = De(oo = i), Ie = -1 * 770 + 55 * 67 + 55 * -53, [];
}
function SB(i) {
  return oo = "", i;
}
function Pi(i) {
  return ks(wi(Ie - (98 * -17 + 1085 * 1 + -194 * -3), Wr(i === 91 ? i + (-14522 + -14524 * -1) : i === -1327 + 31 * 1 + 1336 ? i + (-4696 + 427 * 11) : i)));
}
function GB(i) {
  for (; (eA = ft()) && eA < -1 * -4357 + 4601 + 425 * -21; ) he();
  return vr(i) > 2 || vr(eA) > -3277 + -177 * -45 + 5 * -937 ? "" : " ";
}
function NB(i, n) {
  for (; --n && he() && !(eA < 5873 * 1 + 1 * 6839 + -12664 || eA > -1831 * -1 + 331 * 3 + -2722 || eA > -1882 * -1 + -2734 + 909 && eA < 3 * -1744 + 7372 + -2075 || eA > 70 && eA < 3 * -1559 + -122 + 4896); ) ;
  return wi(i, hn() + (n < 8971 + 7269 * 1 + 8117 * -2 && ft() == -2053 * -3 + -8254 + 2127 && he() == -1 * 3307 + -3 * -781 + 996));
}
function Wr(i) {
  for (; he(); ) switch (eA) {
    case i:
      return Ie;
    case 9182 + 5 * -1271 + -2793:
    case -487 * -1 + 37 * 206 + -8070:
      i !== -903 * -3 + -842 * -4 + -6043 && i !== 39 && Wr(eA);
      break;
    case 3 * -1607 + 4517 + 4 * 86:
      i === -40 * 219 + 3578 * -2 + 15957 && Wr(i);
      break;
    case -3827 * -1 + 7799 + -11534:
      he();
      break;
  }
  return Ie;
}
function RB(i, n) {
  for (; he() && i + eA !== -5 * 947 + 3009 + 1773 + (1005 + -3 * -2531 + -4294 * 2); ) if (i + eA === -1 * -410 + -1 * -6017 + -1277 * 5 + (15455 + 15413 * -1) && ft() === -7 * 605 + -4501 * 1 + 8783) break;
  return "/*" + wi(n, Ie - (-6635 + 367 * -23 + 1 * 15077)) + "*" + Qa(i === -2 * 1129 + -8569 + 10874 ? i : he());
}
function FB(i) {
  for (; !vr(ft()); ) he();
  return wi(i, Ie);
}
function vB(i) {
  return SB(pn("", null, null, null, [""], i = kB(i), 0, [0], i));
}
function pn(i, n, t, e, A, o, r, a, g) {
  for (var s = 0, C = -2749 + -163 * -11 + 956, c = r, E = -3976 + 482 * -1 + 4458, I = -9162 + 1018 * 9, x = -1641 + 1641 * 1, d = -10469 + -6 * -1745, l = -6850 + -221 * -31, Q = -6967 * 1 + 3297 + -1 * -3671, f = 0, m = "", y = A, G = o, b = e, w = m; l; ) switch (x = f, f = he()) {
    case -6599 * 1 + 6037 + 86 * 7:
      if (x != 6647 + 6539 * -1 && BA(w, c - (3441 * -1 + 3503 + 61 * -1)) == 58) {
        fn(w += O(Pi(f), "&", "&\f"), "&\f", bs(s ? a[s - (-6 * 1215 + 2 * 1037 + -111 * -47)] : 5565 + -997 * 3 + -39 * 66)) != -1 && (Q = -1);
        break;
      }
    case 1 * -3846 + 5303 + -1 * 1423:
    case -74 * 92 + 4217 * 1 + 2630:
    case -43 * 139 + -835 * 11 + -7 * -2179:
      w += Pi(f);
      break;
    case -3450 + -1 * -3459:
    case 10:
    case 13:
    case 2 * -2378 + -1 * -3074 + -1714 * -1:
      w += GB(x);
      break;
    case 3076 * -2 + 936 + 2654 * 2:
      w += NB(hn() - 1, 3 * -186 + 2812 + -749 * 3);
      continue;
    case -1792 * 5 + 1870 + -2379 * -3:
      switch (ft()) {
        case 17223 + 1 * -17181:
        case -5852 + -45 * 14 + 6529:
          Io(WB(RB(he(), hn()), n, t, g), g);
          break;
        default:
          w += "/";
      }
      break;
    case (967 * 8 + -1287 * -3 + -5737 * 2) * d:
      a[s++] = De(w) * Q;
    case (-1379 * -1 + 7262 + -8516) * d:
    case -1 * 961 + 149 * -13 + -1 * -2957:
    case 3485 + -9 * 1041 + -2 * -2942:
      switch (f) {
        case 0:
        case -1 * -4478 + 1 * -1619 + -2734:
          l = -2776 + -694 * -4;
        case 5477 * -1 + -4 * 1946 + 13320 + C:
          Q == -1 && (w = O(w, /\f/g, "")), I > 11514 + 202 * -57 && De(w) - c && Io(I > -142 * 7 + 16 * -233 + 2 * 2377 ? cg(w + ";", e, t, c - 1, g) : cg(O(w, " ", "") + ";", e, t, c - (-902 * -3 + -8185 + 5481), g), g);
          break;
        case -10 * -372 + 1 * 6638 + -3433 * 3:
          w += ";";
        default:
          if (Io(b = sg(w, n, t, s, C, A, a, m, y = [], G = [], c, o), o), f === -1 * -3684 + -6272 + 2711 * 1)
            if (C === -683 * -1 + 13 * -645 + 7702) pn(w, n, b, b, y, o, c, a, G);
            else switch (E === 14269 + 13 * -1090 && BA(w, -8055 + 34 * 237) === 110 ? 100 : E) {
              case 34 * 277 + 2428 * 3 + 6 * -2767:
              case -9390 + -1 * -9498:
              case -2 * 688 + 1638 + -153:
              case -329 * 29 + 1 * 9927 + -271:
                pn(i, b, b, e && Io(sg(i, b, b, -169 + -1 * -169, 1077 * -3 + -9 * -13 + 3114, A, a, m, A, y = [], c, G), G), A, G, c, a, e ? y : G);
                break;
              default:
                pn(w, b, b, b, [""], G, -3263 + 1 * 3263, a, G);
            }
      }
      s = C = I = -23 * -17 + -4003 * 1 + 602 * 6, d = Q = 4881 * 1 + -1 * 9683 + 4803, m = w = "", c = r;
      break;
    case -4969 * -2 + -17 * -103 + -11631:
      c = 1139 * 3 + 3 * 290 + 2143 * -2 + De(w), I = x;
    default:
      if (d < -5 * -390 + 1592 + -1 * 3541) {
        if (f == 1 * 8263 + -1774 * -4 + -15236) --d;
        else if (f == 21 * 307 + -4 * 1319 + -523 * 2 && d++ == -1893 + -142 * -2 + -1 * -1609 && bB() == 2107 * -3 + -2573 + 29 * 311) continue;
      }
      switch (w += Qa(f), f * d) {
        case -9200 + 12 * -142 + 10942:
          Q = C > 11 * 564 + -3 * 141 + -5781 ? -9509 * -1 + 1 * -226 + -3094 * 3 : (w += "\f", -1);
          break;
        case -2058 + 194 * 39 + -5464:
          a[s++] = (De(w) - 1) * Q, Q = -1002 + -1 * 642 + 1645;
          break;
        case 1889 * -1 + 2 * 1791 + -1629 * 1:
          ft() === 3 * -2555 + 1205 + 6505 && (w += Pi(he())), E = ft(), C = c = De(m = w += FB(hn())), f++;
          break;
        case -1050 + 15 * 73:
          x === 537 * -12 + 3257 * -1 + 443 * 22 && De(w) == 2 && (d = 1324 * -2 + -8646 + -1 * -11294);
      }
  }
  return o;
}
function sg(i, n, t, e, A, o, r, a, g, s, C, c) {
  for (var E = A - 1, I = A === 411 + -411 * 1 ? o : [""], x = Ss(I), d = -1289 * -1 + -4696 + 3407, l = -3 * 131 + -5897 + 6290, Q = 0; d < e; ++d) for (var f = 0, m = qt(i, E + (16520 + -16519 * 1), E = bs(l = r[d])), y = i; f < x; ++f) (y = ks(l > 264 * 16 + 2909 * 1 + -7133 ? I[f] + " " + m : O(m, /&\f/g, I[f]))) && (g[Q++] = y);
  return yi(i, n, t, A === 608 * -10 + -327 * -13 + 59 * 31 ? pi : a, g, s, C, c);
}
function WB(i, n, t, e) {
  return yi(i, n, t, ws, Qa(DB()), qt(i, 2, -2), 1353 + 1923 * -3 + -1472 * -3, e);
}
function cg(i, n, t, e, A) {
  return yi(i, n, t, Ba, qt(i, -3135 * 1 + -347 * 2 + -547 * -7, e), qt(i, e + (-2 * -4523 + -8614 + -431 * 1), -1), e, A);
}
function Ns(i, n, t) {
  switch (yB(i, n)) {
    case -1 * 5241 + -4422 + -46 * -321:
      return T + "print-" + i + i;
    case 5737:
    case -7 * 427 + 5128 + 1 * 2062:
    case 376 * 1 + 5892 + -3091:
    case 12732 + 547 * -17:
    case -29 * -179 + 8760 + -12310:
    case 343 * -3 + -2784 + 8270:
    case 4186 + 11 * -115:
    case 4483 + -547 * -6 + -2193:
    case 5 * 1341 + 1 * 8601 + -8950:
    case -4 * -2698 + 10079 * -1 + 1 * 5131:
    case 3191:
    case 173 * -17 + -7250 * -1 + 2336:
    case 3670 + -9791 * -1 + -8 * 1307:
    case 6391:
    case -12 * 361 + -9 * 674 + 16277:
    case -127 * -67 + 414 + -3300:
    case -9928 + -16063 * -1:
    case 6424 + 1233 * -4 + 3107:
    case 3 * 2759 + 230 * -6 + 1 * -2042:
    case -8550 * -1 + -46 * 83 + -517:
    case -5 * 1343 + -1539 + 3 * 4881:
    case 3019 + 61 * 142 + -6572:
    case 5454 + 13 * -420 + 5371:
    case 3 * -1865 + -2261 + 1 * 13477:
    case 3829:
      return T + i + i;
    case 4 * 1558 + -5477 + 4034:
      return xo + i + i;
    case 4092 + 2 * -4171 + 9599:
    case -1 * -6061 + 672 + -1 * 2487:
    case -163 * 53 + 5645 + 1 * 7804:
    case 9216 * -1 + 2 * 5655 + 4874:
    case 2361 + -395 * -1:
      return T + i + xo + i + j + i + i;
    case 2933 + -1 * -3533 + -5 * 106:
      switch (BA(i, n + (-61 * -3 + -2 * -1353 + -2878 * 1))) {
        case -7489 + 1 * 7603:
          return T + i + j + O(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -174 * 8 + 129 * 77 + -8433:
          return T + i + j + O(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -417 + -182 * -50 + -8638:
          return T + i + j + O(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6944 + 9 * 753 + -6893:
    case 3190 * 1 + 144 + 934:
    case -8674 + 492 * 3 + 10101:
      return T + i + j + i + i;
    case 6165:
      return T + i + j + "flex-" + i + i;
    case 5187:
      return T + i + O(i, /(\w+).+(:[^]+)/, T + "box-$1$2" + j + "flex-$1$2") + i;
    case -12 * 237 + -4751 * 1 + 41 * 318:
      return T + i + j + "flex-item-" + O(i, /flex-|-self/g, "") + (Je(i, /flex-|baseline/) ? "" : j + "grid-row-" + O(i, /flex-|-self/g, "")) + i;
    case -2903 * 1 + 6296 * 1 + 1282:
      return T + i + j + "flex-line-pack" + O(i, /align-content|flex-|-self/g, "") + i;
    case 5548:
      return T + i + j + O(i, "shrink", "negative") + i;
    case 1 * 2579 + 157 * 9 + -100 * -13:
      return T + i + j + O(i, "basis", "preferred-size") + i;
    case 747 + 9 * 967 + -2 * 1695:
      return T + "box-" + O(i, "-grow", "") + T + i + j + O(i, "grow", "positive") + i;
    case -2741 * -2 + 775 * 12 + 4 * -2557:
      return T + O(i, /([^-])(transform)/g, "$1" + T + "$2") + i;
    case -1 * -5231 + -3952 * -1 + -2996:
      return O(O(O(i, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), i, "") + i;
    case -33 * -261 + 773 * -4 + 1 * -26:
    case -1 * 7919 + -2136 + 182 * 77:
      return O(i, /(image-set\([^]*)/, T + "$1$`$1");
    case 2708 + 4900 * 2 + 4 * -1885:
      return O(O(i, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + i + i;
    case -785 * -3 + 6334 + -4489:
      if (!Je(i, /flex-|baseline/)) return j + "grid-column-align" + qt(i, n) + i;
      break;
    case -3466 + 1490 * 5 + -1392:
    case -4933 * 1 + 409 * 17 + 1340:
      return j + O(i, "template-", "") + i;
    case 9739 + -2 * -2098 + -9551:
    case 3616:
      return t && t.some(function(e, A) {
        return n = A, Je(e.props, /grid-\w+-end/);
      }) ? ~fn(i + (t = t[n].value), "span", -14 * -502 + 9391 + 1263 * -13) ? i : j + O(i, "-start", "") + i + j + "grid-row-span:" + (~fn(t, "span", 7679 * 1 + 1 * -3827 + 18 * -214) ? Je(t, /\d+/) : +Je(t, /\d+/) - +Je(i, /\d+/)) + ";" : j + O(i, "-start", "") + i;
    case -3987 * 1 + 7998 + 885:
    case 8570 + -28 * -194 + -9874:
      return t && t.some(function(e) {
        return Je(e.props, /grid-\w+-start/);
      }) ? i : j + O(O(i, "-end", "-span"), "span ", "") + i;
    case 3120 + 479 * -17 + 194 * 47:
    case 302 * 30 + 827 * 7 + -11266:
    case 6195 * -1 + 2787 + -1 * -7476:
    case 3235 + 19 * -37:
      return O(i, /(.+)-inline(.+)/, T + "$1$2") + i;
    case 12152 + -40 * -271 + -14876:
    case -24455 + -1 * -31514:
    case 5753:
    case 10960 + 1205 * 5 + -5725 * 2:
    case 5760 + -1 * 1942 + 1 * 1627:
    case -7658 + 2767 * 1 + 10592:
    case 1429 * -4 + 7703 + 3 * 982:
    case -5370 + -2 * -4204 + -1 * -1639:
    case 1336 * -8 + 453 * -3 + -1 * -17580:
    case 6910 + -1121 * 1:
    case -9030 + -425 * -5 + 11926:
    case -5632 + -516 * 2 + -1 * -11429:
      if (De(i) - (-17408 + 2487 * 7) - n > 8524 + 1 * -8773 + -51 * -5) switch (BA(i, n + (-2275 + -13 * -663 + -6343))) {
        case 2669 * -1 + 8321 * 1 + 1 * -5543:
          if (BA(i, n + (-55 * 74 + -129 * -11 + 2655)) !== 886 * -6 + -3262 + 8623) break;
        case -268 * -13 + 3490 + -6872:
          return O(i, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + xo + (BA(i, n + (1383 + -8 * -784 + -3826 * 2)) == -3258 * 3 + 4283 * 1 + 5599 ? "$3" : "$2-$3")) + i;
        case -6504 + 2253 * 1 + 4366:
          return ~fn(i, "stretch", -1 * 207 + -3104 + 3311) ? Ns(O(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case -430 * -4 + -12 * 343 + 7548:
    case -7256 + 10697 * 1 + 1 * 2479:
      return O(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, s) {
        return j + A + ":" + o + s + (r ? j + A + "-span:" + (a ? g : +g - +o) + s : "") + i;
      });
    case -2714 * 1 + 2887 + -6 * -796:
      if (BA(i, n + 6) === -1 * -2734 + -3 * 1766 + -895 * -3) return O(i, ":", ":" + T) + i;
      break;
    case -9782 * 1 + -669 + 16895:
      switch (BA(i, BA(i, 9654 + -422 * 13 + -4154) === -7311 * -1 + -10 * -809 + -15356 ? -298 * -7 + -1 * 4057 + 1989 : 47 * -122 + 4615 + 1130)) {
        case 4751 * -1 + 3558 * -1 + 8429:
          return O(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + T + (BA(i, -1 * 8318 + -6090 + 14422) === 7909 + -25 * -284 + -14964 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + j + "$2box$3") + i;
        case 3 * -397 + -7640 + 8931:
          return O(i, ":", ":" + j) + i;
      }
      break;
    case 157 * -27 + 7027 + 2931:
    case 8 * -653 + -2130 + 10001:
    case -388 * -23 + -7 * -55 + -34 * 211:
    case -763 * 11 + 1 * -9521 + 21841:
    case -1313 * 2 + -3694 + -1 * -8711:
      return O(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function ni(i, n) {
  for (var t = "", e = 3079 + 3 * 3053 + 58 * -211; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function MB(i, n, t, e) {
  switch (i.type) {
    case mB:
      if (i.children.length) break;
    case pB:
    case Ba:
      return i.return = i.return || i.value;
    case ws:
      return "";
    case Ds:
      return i.return = i.value + "{" + ni(i.children, e) + "}";
    case pi:
      if (!De(i.value = i.props.join(","))) return "";
  }
  return De(t = ni(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function LB(i) {
  var n = Ss(i);
  return function(t, e, A, o) {
    for (var r = "", a = -8149 + -2194 * -2 + -1 * -3761; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function OB(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function JB(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Ba:
        i.return = Ns(i.value, i.length, t);
        return;
      case Ds:
        return ni([Ze(i, { value: O(i.value, "@", "@" + T) })], e);
      case pi:
        if (i.length) return wB(t = i.props, function(A) {
          switch (Je(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              St(Ze(i, { props: [O(A, /:(read-\w+)/, ":" + xo + "$1")] }));
              var o = {};
              o.props = [A], St(Ze(i, o)), Fr(i, { props: gg(t, e) });
              break;
            case "::placeholder":
              St(Ze(i, { props: [O(A, /:(plac\w+)/, ":" + T + "input-$1")] })), St(Ze(i, { props: [O(A, /:(plac\w+)/, ":" + xo + "$1")] })), St(Ze(i, { props: [O(A, /:(plac\w+)/, j + "input-$1")] }));
              var r = {};
              r.props = [A], St(Ze(i, r)), Fr(i, { props: gg(t, e) });
              break;
          }
          return "";
        });
    }
}
var v = {};
v.animationIterationCount = 1, v.aspectRatio = 1, v.borderImageOutset = 1, v.borderImageSlice = 1, v.borderImageWidth = 1, v.boxFlex = 1, v.boxFlexGroup = 1, v.boxOrdinalGroup = 1, v.columnCount = 1, v.columns = 1, v.flex = 1, v.flexGrow = 1, v.flexPositive = 1, v.flexShrink = 1, v.flexNegative = 1, v.flexOrder = 1, v.gridRow = 1, v.gridRowEnd = 1, v.gridRowSpan = 1, v.gridRowStart = 1, v.gridColumn = 1, v.gridColumnEnd = 1, v.gridColumnSpan = 1, v.gridColumnStart = 1, v.msGridRow = 1, v.msGridRowSpan = 1, v.msGridColumn = 1, v.msGridColumnSpan = 1, v.fontWeight = 1, v.lineHeight = 1, v.opacity = 1, v.order = 1, v.orphans = 1, v.tabSize = 1, v.widows = 1, v.zIndex = 1, v.zoom = 1, v.WebkitLineClamp = 1, v.fillOpacity = 1, v.floodOpacity = 1, v.stopOpacity = 1, v.strokeDasharray = 1, v.strokeDashoffset = 1, v.strokeMiterlimit = 1, v.strokeOpacity = 1, v.strokeWidth = 1;
var UB = v, Y = {}, mt = typeof process < "u" && Y !== void 0 && (Y.REACT_APP_SC_ATTR || Y.SC_ATTR) || "data-styled", Rs = "active", Fs = "data-styled-version", Di = "6.1.18", Ea = `/*!sc*/
`, ii = typeof window < "u" && typeof document < "u", YB = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && Y !== void 0 && Y.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Y.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && Y !== void 0 && Y.SC_DISABLE_SPEEDY !== void 0 && Y.SC_DISABLE_SPEEDY !== "" ? Y.SC_DISABLE_SPEEDY !== "false" && Y.SC_DISABLE_SPEEDY : Y.NODE_ENV !== "production"), Ig = /invalid hook call/i, en = /* @__PURE__ */ new Set(), PB = function(i, n) {
  if (Y.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = -1 * 9706 + 2688 + -7019 * -1; g < arguments.length; g++) a[g - (29 * 98 + -3223 * -1 + -6064)] = arguments[g];
        Ig.test(r) ? (o = !1, en.delete(e)) : A.apply(void (-8020 + -463 * -1 + -229 * -33), jt([r], a, !1));
      }, ne(), o && !en.has(e) && (console.warn(e), en.add(e));
    } catch (r) {
      Ig.test(r.message) && en.delete(e);
    } finally {
      console.error = A;
    }
  }
}, bi = Object.freeze([]), Zt = Object.freeze({});
function TB(i, n, t) {
  return t === void 0 && (t = Zt), i.theme !== t.theme && i.theme || n || t.theme;
}
var Mr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), HB = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, KB = /(^-|-$)/g;
function Cg(i) {
  return i.replace(HB, "-").replace(KB, "");
}
var _B = /(a)(d)/gi, tn = -5316 + -488 * -11, Bg = function(i) {
  return String.fromCharCode(i + (i > -1361 + -2 * 2729 + -29 * -236 ? 1009 * -1 + 733 * -3 + 3247 : 454 * -16 + 3281 + 4080));
};
function Lr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > tn; n = n / tn | 7951 + -5 * -5 + 8 * -997) t = Bg(n % tn) + t;
  return (Bg(n % tn) + t).replace(_B, "$1-$2");
}
var Ti, vs = 2544 + 1 * 2837, It = function(i, n) {
  for (var t = n.length; t; ) i = 33 * i ^ n.charCodeAt(--t);
  return i;
}, Ws = function(i) {
  return It(vs, i);
};
function jB(i) {
  return Lr(Ws(i) >>> 1428 + 115 * -80 + 7772);
}
function Ms(i) {
  return Y.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Hi(i) {
  return typeof i == "string" && (Y.NODE_ENV === "production" || i.charAt(0) === i.charAt(963 + -4559 * 2 + -5 * -1631).toLowerCase());
}
var se = {};
se.childContextTypes = !0, se.contextType = !0, se.contextTypes = !0, se.defaultProps = !0, se.displayName = !0, se.getDefaultProps = !0, se.getDerivedStateFromError = !0, se.getDerivedStateFromProps = !0, se.mixins = !0, se.propTypes = !0, se.type = !0;
var ze = {};
ze.name = !0, ze.length = !0, ze.prototype = !0, ze.caller = !0, ze.callee = !0, ze.arguments = !0, ze.arity = !0;
var st = {};
st.$$typeof = !0, st.compare = !0, st.defaultProps = !0, st.displayName = !0, st.propTypes = !0, st.type = !0;
var vt = {};
vt.$$typeof = !0, vt.render = !0, vt.defaultProps = !0, vt.displayName = !0, vt.propTypes = !0;
var Ls = typeof Symbol == "function" && Symbol.for, Os = Ls ? Symbol.for("react.memo") : -64090 + -124205 * -1, qB = Ls ? Symbol.for("react.forward_ref") : 70173 + -1 * 84163 + 74102, VB = se, ZB = ze, Js = st, zB = ((Ti = {})[qB] = vt, Ti[Os] = Js, Ti);
function Qg(i) {
  return ("type" in (n = i) && n.type.$$typeof) === Os ? Js : "$$typeof" in i ? zB[i.$$typeof] : VB;
  var n;
}
var XB = Object.defineProperty, $B = Object.getOwnPropertyNames, Eg = Object.getOwnPropertySymbols, AQ = Object.getOwnPropertyDescriptor, eQ = Object.getPrototypeOf, xg = Object.prototype;
function Us(i, n, t) {
  if (typeof n != "string") {
    if (xg) {
      var e = eQ(n);
      e && e !== xg && Us(i, e, t);
    }
    var A = $B(n);
    Eg && (A = A.concat(Eg(n)));
    for (var o = Qg(i), r = Qg(n), a = 8506 + -1522 * -1 + -10028; a < A.length; ++a) {
      var g = A[a];
      if (!(g in ZB || t && t[g] || r && g in r || o && g in o)) {
        var s = AQ(n, g);
        try {
          XB(i, g, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function zt(i) {
  return typeof i == "function";
}
function xa(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Bt(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function dg(i, n) {
  if (2 * 2252 + -7664 + -158 * -20 === i.length) return "";
  for (var t = i[0], e = 8 * -431 + -1 * 9157 + 12606; e < i.length; e++) t += i[e];
  return t;
}
function Xt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Or(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Xt(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = -17 * 471 + 851 * -8 + 14815; e < n.length; e++) i[e] = Or(i[e], n[e]);
  else if (Xt(n))
    for (var e in n) i[e] = Or(i[e], n[e]);
  return i;
}
function da(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var nA = {};
nA[1] = `Cannot create styled-component for component: %s.

`, nA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, nA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, nA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, nA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, nA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, nA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', nA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, nA[9] = "Missing document `<head>`\n\n", nA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, nA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, nA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", nA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, nA[14] = `ThemeProvider: "theme" prop is required.

`, nA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", nA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, nA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, nA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var tQ = Y.NODE_ENV !== "production" ? nA : {};
function oQ() {
  for (var i = [], n = -12335 + 1 * 12335; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-1343 + -3 * -2611 + -6490], e = [], A = 1, o = i.length; A < o; A += -9133 * 1 + 1257 * 2 + 6620) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function no(i) {
  for (var n = [], t = -1 * 8121 + -9418 + 17540; t < arguments.length; t++) n[t - (-23 * -163 + -2403 + -1345)] = arguments[t];
  return Y.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -2470 + 10 * 247 ? " Args: ".concat(n.join(", ")) : "")) : new Error(oQ.apply(void 0, jt([tQ[i]], n, !1)).trim());
}
var nQ = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(2842 + 197 * -23 + 2201), this.length = 149 * 43 + 793 * 1 + -6688, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 6400 + 2 * 256 + -6912, e = -54 + -3 * -18; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -768 * 8 + 2657 + 3488) < 1044 * -3 + 8289 + -5157) throw no(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 1 * 1795 + 3564 + -5359;
    }
    for (var a = this.indexOfGroup(n + (8039 * -1 + 37 * 121 + 3563)), g = (r = 4244 + -307 * -31 + -13761, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 1944 + -162 * 12;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -911 * -6 + 6260 + 451 * -26 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(Ea);
    return t;
  }, i;
}(), iQ = -1 * 3974 + 4121 + -146 << -1 * -2694 + 95 * -16 + 44 * -26, mn = /* @__PURE__ */ new Map(), ri = /* @__PURE__ */ new Map(), yn = 5056 + -5055 * 1, on = function(i) {
  if (mn.has(i)) return mn.get(i);
  for (; ri.has(yn); ) yn++;
  var n = yn++;
  if (Y.NODE_ENV !== "production" && ((-9113 + 13 * 701 | n) < 1 * -4799 + -115 * 19 + 873 * 8 || n > iQ)) throw no(16, "".concat(n));
  return mn.set(i, n), ri.set(n, i), n;
}, rQ = function(i, n) {
  yn = n + (-4972 * 1 + -4601 * -1 + 372), mn.set(i, n), ri.set(n, i);
}, aQ = "style[".concat(mt, "][").concat(Fs, '="').concat(Di, '"]'), gQ = new RegExp("^".concat(mt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), sQ = function(i, n, t) {
  for (var e, A = t.split(","), o = 88 + 2 * 2654 + -5396, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, cQ = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ea), A = [], o = 0, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(gQ);
      if (g) {
        var s = 0 | parseInt(g[1], 10), C = g[2];
        7297 * -1 + -3 * -3178 + -1 * 2237 !== s && (rQ(C, s), sQ(i, C, g[9413 + -1 * 9410]), i.getTag().insertRules(s, A)), A.length = 6259 + -6 * -356 + 23 * -365;
      } else A.push(a);
    }
  }
}, lg = function(i) {
  for (var n = document.querySelectorAll(aQ), t = 0, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(mt) !== Rs && (cQ(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function IQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ys = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(mt, "]")));
    return g[g.length - 1];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(mt, Rs), e.setAttribute(Fs, Di);
  var r = IQ();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, CQ = function() {
  function i(n) {
    this.element = Ys(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 3633 + 9 * -669 + 2388, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw no(5032 + 17 * -295);
    }(this.element), this.length = 0;
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
}(), BQ = function() {
  function i(n) {
    this.element = Ys(n), this.nodes = this.element.childNodes, this.length = -87 * -10 + 8546 * 1 + 9416 * -1;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 11 * 517 + 9648 + -15335 * 1) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), QQ = function() {
  function i(n) {
    this.rules = [], this.length = -2743 + -507 * -7 + -806;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -4819 * 2 + -2722 * 2 + 15082, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1396 + -465 * 3), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), ug = ii, EQ = { isServer: !ii, useCSSOMInjection: !YB }, Ps = function() {
  function i(n, t, e) {
    n === void 0 && (n = Zt), t === void 0 && (t = {});
    var A = this;
    this.options = XA(XA({}, EQ), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && ii && ug && (ug = !1, lg(this)), da(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, g = "", s = function(c) {
          var E = function(Q) {
            return ri.get(Q);
          }(c);
          if (E === void 0) return "continue";
          var I = o.names.get(E), x = r.getGroup(c);
          if (I === void 0 || !I.size || -157 * -24 + 1 * 5333 + -479 * 19 === x.length) return "continue";
          var d = "".concat(mt, ".g").concat(c, '[id="').concat(E, '"]'), l = "";
          I !== void 0 && I.forEach(function(Q) {
            Q.length > 6395 + -5 * 1510 + 1155 && (l += "".concat(Q, ","));
          }), g += "".concat(x).concat(d, '{content:"').concat(l, '"}').concat(Ea);
        }, C = -3083 + 3083 * 1; C < a; C++) s(C);
        return g;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return on(n);
  }, i.prototype.rehydrate = function() {
    !this.server && ii && lg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(XA(XA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 6005 + -14 * -17 + -6243) + (-14129 + -1570 * -9);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new QQ(A) : e ? new CQ(A) : new BQ(A);
    }(this.options), new nQ(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (on(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(on(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(on(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), xQ = /&/g, dQ = /^\s*\/\/.*$/gm;
function Ts(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ts(t.children, n)), t;
  });
}
function Hs(i) {
  var n, t, e, A = i === void 0 ? Zt : i, o = A.options, r = o === void 0 ? Zt : o, a = A.plugins, g = a === void 0 ? bi : a, s = function(E, I, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 6637 + 1 * -9947 + 3310 ? ".".concat(n) : E;
  }, C = g.slice();
  C.push(function(E) {
    E.type === pi && E.value.includes("&") && (E.props[-8950 + 1928 * 3 + -3166 * -1] = E.props[-6718 + 206 * -37 + 14340].replace(xQ, t).replace(e, s));
  }), r.prefix && C.push(JB), C.push(MB);
  var c = function(E, I, x, d) {
    I === void 0 && (I = ""), x === void 0 && (x = ""), d === void 0 && (d = "&"), n = d, t = I, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = E.replace(dQ, ""), Q = vB(x || I ? "".concat(x, " ").concat(I, " { ").concat(l, " }") : l);
    r.namespace && (Q = Ts(Q, r.namespace));
    var f = [];
    return ni(Q, LB(C.concat(OB(function(m) {
      return f.push(m);
    })))), f;
  };
  return c.hash = g.length ? g.reduce(function(E, I) {
    return I.name || no(-7 * 1423 + -2 * 541 + 11058), It(E, I.name);
  }, vs).toString() : "", c;
}
var lQ = new Ps(), Jr = Hs(), la = pt.createContext({ shouldForwardProp: void 0, styleSheet: lQ, stylis: Jr });
la.Consumer;
var uQ = pt.createContext(void 0);
function Ur() {
  return me(la);
}
function fQ(i) {
  var n = xA(i.stylisPlugins), t = n[1059 + -5 * 101 + -554], e = n[-2253 + 5741 * -1 + 7995], A = Ur().styleSheet, o = NA(function() {
    var C = A, c = {};
    return c.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(c)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = NA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var c = {};
    return c.options = C, c.plugins = t, Hs(c);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  z(function() {
    hB(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = NA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var s = {};
  return s.value = r, pt.createElement(la.Provider, g, pt.createElement(uQ.Provider, s, i.children));
}
var fg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = Jr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, da(this, function() {
      throw no(1488 + 164 * -9, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = Jr), this.name + n.hash;
  }, i;
}(), hQ = function(i) {
  return i >= "A" && i <= "Z";
};
function hg(i) {
  for (var n = "", t = 9195 + -15 * 613; t < i.length; t++) {
    var e = i[t];
    if (5022 + -5021 * 1 === t && e === "-" && i[1 * -9041 + -6229 * -1 + 2812] === "-") return i;
    hQ(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Ks = function(i) {
  return i == null || i === !1 || i === "";
}, _s = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !Ks(o) && (Array.isArray(o) && o.isCss || zt(o) ? e.push("".concat(hg(A), ":"), o, ";") : Xt(o) ? e.push.apply(e, jt(jt(["".concat(A, " {")], _s(o), !1), ["}"], !1)) : e.push("".concat(hg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 1190 + 70 * -17 === t || n in UB || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function ht(i, n, t, e) {
  if (Ks(i)) return [];
  if (xa(i)) return [".".concat(i.styledComponentId)];
  if (zt(i)) {
    if (!zt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return Y.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof fg || Xt(A) || A === null || console.error("".concat(Ms(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ht(A, n, t, e);
  }
  var o;
  return i instanceof fg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Xt(i) ? _s(i) : Array.isArray(i) ? Array.prototype.concat.apply(bi, i.map(function(r) {
    return ht(r, n, t, e);
  })) : [i.toString()];
}
function pQ(i) {
  for (var n = 989 + 989 * -1; n < i.length; n += 7333 + -611 * 12) {
    var t = i[n];
    if (zt(t) && !xa(t)) return !1;
  }
  return !0;
}
var mQ = Ws(Di), yQ = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = Y.NODE_ENV === "production" && (e === void 0 || e.isStatic) && pQ(n), this.componentId = t, this.baseHash = It(mQ, t), this.baseStyle = e, Ps.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Bt(A, this.staticRulesId);
      else {
        var o = dg(ht(this.rules, n, t, e)), r = Lr(It(this.baseHash, o) >>> -1 * -5810 + -6191 + 127 * 3);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = Bt(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = It(this.baseHash, e.hash), s = "", C = 1067 * -1 + -4122 * -1 + -3055; C < this.rules.length; C++) {
        var c = this.rules[C];
        if (typeof c == "string") s += c, Y.NODE_ENV !== "production" && (g = It(g, c));
        else if (c) {
          var E = dg(ht(c, n, t, e));
          g = It(g, E + C), s += E;
        }
      }
      if (s) {
        var I = Lr(g >>> 0);
        t.hasNameForId(this.componentId, I) || t.insertRules(this.componentId, I, e(s, ".".concat(I), void 0, this.componentId)), A = Bt(A, I);
      }
    }
    return A;
  }, i;
}(), js = pt.createContext(void 0);
js.Consumer;
var Ki = {}, pg = /* @__PURE__ */ new Set();
function wQ(i, n, t) {
  var e = xa(i), A = i, o = !Hi(i), r = n.attrs, a = r === void 0 ? bi : r, g = n.componentId, s = g === void 0 ? function(G, b) {
    var w = typeof G != "string" ? "sc" : Cg(G);
    Ki[w] = (Ki[w] || 419 * -11 + -8446 + -1865 * -7) + (-183 * -7 + -1 * 1846 + 566);
    var F = "".concat(w, "-").concat(jB(Di + w + Ki[w]));
    return b ? "".concat(b, "-").concat(F) : F;
  }(n.displayName, n.parentComponentId) : g, C = n.displayName, c = C === void 0 ? function(G) {
    return Hi(G) ? "styled.".concat(G) : "Styled(".concat(Ms(G), ")");
  }(i) : C, E = n.displayName && n.componentId ? "".concat(Cg(n.displayName), "-").concat(n.componentId) : n.componentId || s, I = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, x = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      x = function(G, b) {
        return d(G, b) && l(G, b);
      };
    } else x = d;
  }
  var Q = new yQ(t, E, e ? A.componentStyle : void 0);
  function f(G, b) {
    return function(w, F, M) {
      var P = w.attrs, _ = w.componentStyle, X = w.defaultProps, tA = w.foldedComponentIds, YA = w.styledComponentId, $A = w.target, aA = pt.useContext(js), wt = Ur(), Ce = w.shouldForwardProp || wt.shouldForwardProp;
      Y.NODE_ENV !== "production" && Ln(YA);
      var _A = TB(F, aA, X) || Zt, dA = function(Ko, io, _o) {
        var Dt = {};
        Dt.className = void 0, Dt.theme = _o;
        for (var Gi, nt = XA(XA({}, io), Dt), Ni = 2272 + -1 * 3098 + -1 * -826; Ni < Ko.length; Ni += -1 * 8337 + 8 * 778 + -151 * -14) {
          var jo = zt(Gi = Ko[Ni]) ? Gi(nt) : Gi;
          for (var je in jo) nt[je] = je === "className" ? Bt(nt[je], jo[je]) : je === "style" ? XA(XA({}, nt[je]), jo[je]) : jo[je];
        }
        return io.className && (nt.className = Bt(nt.className, io.className)), nt;
      }(P, F, _A), jA = dA.as || $A, qA = {};
      for (var gA in dA) dA[gA] === void 0 || gA[1 * 5303 + 7 * -1385 + -24 * -183] === "$" || gA === "as" || gA === "theme" && dA.theme === _A || (gA === "forwardedAs" ? qA.as = dA.forwardedAs : Ce && !Ce(gA, jA) || (qA[gA] = dA[gA], Ce || Y.NODE_ENV !== "development" || dB(gA) || pg.has(gA) || !Mr.has(jA) || (pg.add(gA), console.warn('styled-components: it looks like an unknown prop "'.concat(gA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ki = function(Ko, io) {
        var _o = Ur(), Dt = Ko.generateAndInjectStyles(io, _o.styleSheet, _o.stylis);
        return Y.NODE_ENV !== "production" && Ln(Dt), Dt;
      }(_, dA);
      Y.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(ki);
      var Si = Bt(tA, YA);
      return ki && (Si += " " + ki), dA.className && (Si += " " + dA.className), qA[Hi(jA) && !Mr.has(jA) ? "class" : "className"] = Si, M && (qA.ref = M), KA(jA, qA);
    }(m, G, b);
  }
  f.displayName = c;
  var m = pt.forwardRef(f), y = {};
  return y.attrs = !0, y.componentStyle = !0, y.displayName = !0, y.foldedComponentIds = !0, y.shouldForwardProp = !0, y.styledComponentId = !0, y.target = !0, m.attrs = I, m.componentStyle = Q, m.displayName = c, m.shouldForwardProp = x, m.foldedComponentIds = e ? Bt(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = E, m.target = e ? A.target : i, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = e ? function(b) {
      for (var w = [], F = -214 * 19 + 829 * 8 + -2565; F < arguments.length; F++) w[F - 1] = arguments[F];
      for (var M = -6436 + -1 * 7121 + 13557, P = w; M < P.length; M++) Or(b, P[M], !0);
      return b;
    }({}, A.defaultProps, G) : G;
  } }), Y.NODE_ENV !== "production" && (PB(c, E), m.warnTooManyClasses = /* @__PURE__ */ function(G, b) {
    var w = {}, F = !1;
    return function(M) {
      if (!F && (w[M] = !0, Object.keys(w).length >= -6782 + -4167 * 1 + 11149)) {
        var P = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(2280 + 104 * -20, " classes were generated for component ").concat(G).concat(P, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), F = !0, w = {};
      }
    };
  }(c, E)), da(m, function() {
    return ".".concat(m.styledComponentId);
  }), o && Us(m, i, y), m;
}
function mg(i, n) {
  for (var t = [i[2453 * -1 + -1997 + 4450]], e = -3503 + 2 * -4992 + -1 * -13487, A = n.length; e < A; e += 10 * 995 + 9369 + 13 * -1486) t.push(n[e], i[e + (-4519 + -1 * -4177 + -7 * -49)]);
  return t;
}
var yg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function DQ(i) {
  for (var n = [], t = 4672 + 1 * -4671; t < arguments.length; t++) n[t - (9490 + 277 * 18 + -14475)] = arguments[t];
  if (zt(i) || Xt(i)) return yg(ht(mg(bi, jt([i], n, !0))));
  var e = i;
  return -8070 * 1 + -5753 * 1 + -601 * -23 === n.length && -1007 + 17 * 111 + -879 === e.length && typeof e[9231 + -411 * -2 + -10053] == "string" ? ht(e) : yg(ht(mg(e, n)));
}
function Yr(i, n, t) {
  if (t === void 0 && (t = Zt), !n) throw no(1, n);
  var e = function(A) {
    for (var o = [], r = -8203 + -8204 * -1; r < arguments.length; r++) o[r - (3036 + 977 * 9 + -11828)] = arguments[r];
    return i(n, t, DQ.apply(void 0, jt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return Yr(i, n, XA(XA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Yr(i, n, XA(XA({}, t), A));
  }, e;
}
var qs = function(i) {
  return Yr(wQ, i);
}, To = qs;
Mr.forEach(function(i) {
  To[i] = qs(i);
});
Y.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var nn = "__sc-".concat(mt, "__");
Y.NODE_ENV !== "production" && Y.NODE_ENV !== "test" && typeof window < "u" && (window[nn] || (window[nn] = 723 * 12 + 7636 + 8156 * -2), 1 * 7441 + 39 * -84 + -3 * 1388 === window[nn] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[nn] += -1806 * 2 + 7692 + -4079);
var Fe;
function Vs(i) {
  const n = {};
  return n.lang = Fe == null ? void 0 : Fe.lang, n.message = i == null ? void 0 : i.message, n.abortEarly = Fe == null ? void 0 : Fe.abortEarly, n.abortPipeEarly = Fe == null ? void 0 : Fe["abortPipeEarly"], n;
}
var _i;
function bQ(i) {
  return _i == null ? void 0 : _i.get(i);
}
var ji;
function kQ(i) {
  return ji == null ? void 0 : ji.get(i);
}
var qi;
function SQ(i, n) {
  var t;
  return (t = qi == null ? void 0 : qi.get(i)) == null ? void 0 : t.get(n);
}
function Zs(i) {
  var t, e;
  const n = typeof i;
  return n === "string" ? '"' + i + '"' : n === "number" || n === "bigint" || n === "boolean" ? "" + i : n === "object" || n === "function" ? (i && ((e = (t = Object.getPrototypeOf(i)) == null ? void 0 : t["constructor"]) == null ? void 0 : e.name)) ?? "null" : n;
}
function $t(i, n, t, e, A) {
  const o = A && "input" in A ? A.input : t.value, r = (A == null ? void 0 : A.expected) ?? i.expects ?? null, a = (A == null ? void 0 : A.received) ?? Zs(o), g = {};
  g.kind = i.kind, g.type = i.type, g.input = o, g.expected = r, g.received = a, g.message = "Invalid " + n + ": " + (r ? "Expected " + r + " but r" : "R") + "eceived " + a, g.requirement = i.requirement, g.path = A == null ? void 0 : A.path, g.issues = A == null ? void 0 : A.issues, g.lang = e.lang, g.abortEarly = e.abortEarly, g.abortPipeEarly = e.abortPipeEarly;
  const s = g, C = i.kind === "schema", c = (A == null ? void 0 : A.message) ?? i.message ?? SQ(i.reference, s.lang) ?? (C ? kQ(s.lang) : null) ?? e.message ?? bQ(s.lang);
  c !== void 0 && (s.message = typeof c == "function" ? c(s) : c), C && (t.typed = !1), t.issues ? t.issues.push(s) : t.issues = [s];
}
function Ho(i) {
  return { version: 1, vendor: "valibot", validate(n) {
    const t = {};
    return t.value = n, i["~run"](t, Vs());
  } };
}
function GQ(i, n) {
  const t = [...new Set(i)];
  return t.length > 1 ? "(" + t.join(" " + n + " ") + ")" : t[5111 + -2991 * 3 + -3862 * -1] ?? "never";
}
var NQ = class extends Error {
  constructor(i) {
    super(i[29 * 6 + -4982 + 4808].message), this.name = "ValiError", this.issues = i;
  }
};
function zs(i, n) {
  return { kind: "validation", type: "min_length", reference: zs, async: !1, expects: ">=" + i, requirement: i, message: n, "~run"(t, e) {
    return t.typed && t.value.length < this.requirement && $t(this, "length", t, e, { received: "" + t.value.length }), t;
  } };
}
function RQ(i, n, t) {
  return typeof i.fallback == "function" ? i.fallback(n, t) : i.fallback;
}
function FQ(i, n, t) {
  return typeof i.default == "function" ? i.default(n, t) : i.default;
}
function Xs(i, n) {
  return { kind: "schema", type: "array", reference: Xs, expects: "Array", async: !1, item: i, message: n, get "~standard"() {
    return Ho(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (Array.isArray(A)) {
      t.typed = !0, t.value = [];
      for (let r = -1493 * 3 + -1 * -2011 + 2468; r < A.length; r++) {
        const a = A[r], g = {};
        g.value = a;
        const s = this.item["~run"](g, e);
        if (s.issues) {
          const C = {};
          C.type = "array", C.origin = "value", C.input = A, C.key = r, C.value = a;
          const c = C;
          for (const E of s.issues)
            E.path ? E.path.unshift(c) : E.path = [c], (o = t.issues) == null || o.push(E);
          if (!t.issues && (t.issues = s.issues), e.abortEarly) {
            t.typed = !1;
            break;
          }
        }
        !s.typed && (t.typed = !1), t.value.push(s.value);
      }
    } else $t(this, "type", t, e);
    return t;
  } };
}
function Pr(i) {
  return { kind: "schema", type: "function", reference: Pr, expects: "Function", async: !1, message: i, get "~standard"() {
    return Ho(this);
  }, "~run"(n, t) {
    return typeof n.value == "function" ? n.typed = !0 : $t(this, "type", n, t), n;
  } };
}
function $s(i, n) {
  return { kind: "schema", type: "object", reference: $s, expects: "Object", async: !1, entries: i, message: n, get "~standard"() {
    return Ho(this);
  }, "~run"(t, e) {
    var o;
    const A = t.value;
    if (A && typeof A == "object") {
      t.typed = !0, t.value = {};
      for (const r in this.entries) {
        const a = this.entries[r];
        if (r in A || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
          const g = r in A ? A[r] : FQ(a), s = {};
          s.value = g;
          const C = a["~run"](s, e);
          if (C.issues) {
            const c = {};
            c.type = "object", c.origin = "value", c.input = A, c.key = r, c.value = g;
            const E = c;
            for (const I of C.issues)
              I.path ? I.path.unshift(E) : I.path = [E], (o = t.issues) == null || o.push(I);
            if (!t.issues && (t.issues = C.issues), e.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          !C.typed && (t.typed = !1), t.value[r] = C.value;
        } else if (a.fallback !== void 0) t.value[r] = RQ(a);
        else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish") {
          const g = {};
          if (g.input = void 0, g.expected = '"' + r + '"', g.path = [{ type: "object", origin: "key", input: A, key: r, value: A[r] }], $t(this, "key", t, e, g), e.abortEarly) break;
        }
      }
    } else $t(this, "type", t, e);
    return t;
  } };
}
function Ac(i, n) {
  return { kind: "schema", type: "picklist", reference: Ac, expects: GQ(i.map(Zs), "|"), async: !1, options: i, message: n, get "~standard"() {
    return Ho(this);
  }, "~run"(t, e) {
    return this.options.includes(t.value) ? t.typed = !0 : $t(this, "type", t, e), t;
  } };
}
function vQ(i, n, t) {
  const e = {};
  e.value = n;
  const A = i["~run"](e, Vs(t));
  if (A.issues) throw new NQ(A.issues);
  return A.value;
}
function WQ(...i) {
  return { ...i[-1 * 4613 + 2524 * 3 + -2959], pipe: i, get "~standard"() {
    return Ho(this);
  }, "~run"(n, t) {
    for (const e of i)
      if (e.kind !== "metadata") {
        if (n.issues && (e.kind === "schema" || e.kind === "transformation")) {
          n.typed = !1;
          break;
        }
        (!n.issues || !t.abortEarly && !t.abortPipeEarly) && (n = e["~run"](n, t));
      }
    return n;
  } };
}
function MQ(i, n) {
  try {
    vQ(n, i);
  } catch (e) {
    throw i.onError && e instanceof Error && i.onError(e), new Error("Invalid configuration", { cause: e });
  }
  return {
    ...i,
    assetsDirectoryPath: xC(i.assetsDirectoryPath)
  };
}
function LQ({
  children: i,
  configuration: n,
  validationSchema: t
}) {
  const e = NA(() => MQ(n, t), [n, t]);
  return /* @__PURE__ */ k(Ca.Provider, { value: e, children: i });
}
function OQ({
  children: i,
  configuration: n
}) {
  const t = Object.values(te), e = $s({
    challengeSequence: WQ(
      Xs(
        Ac(t, "Challenge sequence must be an array of valid challenge items")
      ),
      zs(4, "Challenge sequence must be at least 4 items")
    ),
    onComplete: Pr("On complete must be a function"),
    onError: Pr("On error must be a function")
  });
  return /* @__PURE__ */ k(
    LQ,
    {
      configuration: n,
      validationSchema: e,
      children: i
    }
  );
}
const ai = _e(void 0);
ai.displayName = "ControllerContext";
function ec() {
  const i = me(
    ai
  );
  if (i === void 0)
    throw new Error(`${ai.displayName} must be used within a ControllerProvider`);
  return i;
}
function JQ({ children: i, controller: n }) {
  const t = NA(
    () => ({
      controller: n
    }),
    [n]
  );
  return /* @__PURE__ */ k(ai.Provider, { value: t, children: i });
}
function tc(i, n) {
  const t = ne(n);
  z(() => {
    t.current = n;
  }, [n]), z(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
function UQ(i, n) {
  const { handleAppStateChange: t } = ie(), e = Se((A) => {
    if (!A.detail) return;
    const { content: o, imageData: r } = A.detail;
    t(H.COMPLETE), n(r, o);
  }, [n, t]);
  tc(i, e);
}
const Tr = {};
Tr.LIVENESS_CHALLENGE = "LIVENESS_CHALLENGE", Tr.PASSIVE_LIVENESS = "PASSIVE_LIVENESS";
const K = Tr, Hr = {};
Hr.ON_COMPLETE = "multi-range-auto-capture:on-complete", Hr.DEV = "multi-range-auto-capture:dev";
const oc = Hr, YQ = { ...oc, ...Ke }, PQ = YQ;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const nc = Symbol("Comlink.proxy"), TQ = Symbol("Comlink.endpoint"), ic = Symbol("Comlink.releaseProxy"), Vi = Symbol("Comlink.finalizer"), wn = Symbol("Comlink.thrown"), rc = (i) => typeof i == "object" && i !== null || typeof i == "function", HQ = {
  canHandle: (i) => rc(i) && i[nc],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return gc(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), cc(i);
  }
}, KQ = {
  canHandle: (i) => rc(i) && wn in i,
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
}, ac = /* @__PURE__ */ new Map([
  ["proxy", HQ],
  ["throw", KQ]
]);
function _Q(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function gc(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!_Q(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(Ct);
    let s;
    try {
      const C = a.slice(0, -1).reduce((E, I) => E[I], i), c = a.reduce((E, I) => E[I], i);
      switch (r) {
        case "GET":
          s = c;
          break;
        case "SET":
          C[a.slice(-1)[0]] = Ct(A.data.value), s = !0;
          break;
        case "APPLY":
          s = c.apply(C, g);
          break;
        case "CONSTRUCT":
          {
            const E = new c(...g);
            s = XQ(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: I } = new MessageChannel();
            gc(i, I), s = zQ(E, [E]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      s = { value: C, [wn]: 0 };
    }
    Promise.resolve(s).catch((C) => ({ value: C, [wn]: 0 })).then((C) => {
      const [c, E] = ci(C);
      n.postMessage(Object.assign(Object.assign({}, c), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), sc(n), Vi in i && typeof i[Vi] == "function" && i[Vi]());
    }).catch((C) => {
      const [c, E] = ci({
        value: new TypeError("Unserializable return value"),
        [wn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, c), { id: o }), E);
    });
  }), n.start && n.start();
}
function jQ(i) {
  return i.constructor.name === "MessagePort";
}
function sc(i) {
  jQ(i) && i.close();
}
function cc(i, n) {
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
  }), Kr(i, t, [], n);
}
function rn(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Ic(i) {
  return Wt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    sc(i);
  });
}
const gi = /* @__PURE__ */ new WeakMap(), si = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (gi.get(i) || 0) - 1;
  gi.set(i, n), n === 0 && Ic(i);
});
function qQ(i, n) {
  const t = (gi.get(n) || 0) + 1;
  gi.set(n, t), si && si.register(i, n, i);
}
function VQ(i) {
  si && si.unregister(i);
}
function Kr(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, a) {
      if (rn(A), a === ic)
        return () => {
          VQ(o), Ic(i), n.clear(), A = !0;
        };
      if (a === "then") {
        if (t.length === 0)
          return { then: () => o };
        const g = Wt(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(Ct);
        return g.then.bind(g);
      }
      return Kr(i, n, [...t, a]);
    },
    set(r, a, g) {
      rn(A);
      const [s, C] = ci(g);
      return Wt(i, n, {
        type: "SET",
        path: [...t, a].map((c) => c.toString()),
        value: s
      }, C).then(Ct);
    },
    apply(r, a, g) {
      rn(A);
      const s = t[t.length - 1];
      if (s === TQ)
        return Wt(i, n, {
          type: "ENDPOINT"
        }).then(Ct);
      if (s === "bind")
        return Kr(i, n, t.slice(0, -1));
      const [C, c] = wg(g);
      return Wt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: C
      }, c).then(Ct);
    },
    construct(r, a) {
      rn(A);
      const [g, s] = wg(a);
      return Wt(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: g
      }, s).then(Ct);
    }
  });
  return qQ(o, i), o;
}
function ZQ(i) {
  return Array.prototype.concat.apply([], i);
}
function wg(i) {
  const n = i.map(ci);
  return [n.map((t) => t[0]), ZQ(n.map((t) => t[1]))];
}
const Cc = /* @__PURE__ */ new WeakMap();
function zQ(i, n) {
  return Cc.set(i, n), i;
}
function XQ(i) {
  return Object.assign(i, { [nc]: !0 });
}
function ci(i) {
  for (const [n, t] of ac)
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
    Cc.get(i) || []
  ];
}
function Ct(i) {
  switch (i.type) {
    case "HANDLER":
      return ac.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Wt(i, n, t, e) {
  return new Promise((A) => {
    const o = $Q();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function $Q() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
function AE() {
  return ys();
}
const ua = _e(void 0);
ua.displayName = "CommonThresholdsContext";
function eE() {
  const i = me(ua);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function Bc() {
  return eE();
}
class tE {
  constructor(n, t, e, A, o, r, a, g) {
    p(this, "isDetectorInitialized");
    p(this, "assetsDirectoryPath");
    p(this, "compatibleSamVersion");
    p(this, "cameraService");
    p(this, "dispatcher");
    p(this, "onCaptureData");
    p(this, "protobuf");
    p(this, "samVersion");
    p(this, "currentDetection");
    p(this, "detections");
    p(this, "sessionToken");
    p(this, "analytics");
    p(this, "transactionCounting");
    this.assetsDirectoryPath = n, this.compatibleSamVersion = t, this.cameraService = e, this.protobuf = o, this.analytics = r, this.dispatcher = A, this.sessionToken = a, this.transactionCounting = g, this.isDetectorInitialized = !1, this.onCaptureData = /* @__PURE__ */ new Map();
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  collectOnCaptureData(n) {
    if (!this.currentDetection) throw new D("Detection not initialized");
    this.onCaptureData.set(this.currentDetection.name, n);
  }
  transitionToDetection(n) {
    var A, o, r;
    const t = (A = this.currentDetection) == null ? void 0 : A.name, e = (o = this.detections) == null ? void 0 : o[n];
    if (!e) throw new D("Detection " + n + " not found");
    if (!((r = this.allowedDetectionTransitions[t]) != null && r.includes(n))) throw new D("Illegal detection transition: " + t + " -> " + n);
    this.setCurrentDetection(e);
  }
  runDetectionLoop() {
    if (!this.currentDetection) throw new D("Detection not initialized");
    this.currentDetection.run();
  }
  reset() {
    var n;
    (n = this.currentDetection) == null || n.stop(), this.onCaptureData.clear(), this.setDetections(void 0), this.setCurrentDetection(void 0);
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
    var n;
    return (n = this.currentDetection) == null ? void 0 : n.name;
  }
  setCurrentDetection(n) {
    this.currentDetection = n, this.dispatcher.dispatchPhaseChangedEvent(n == null ? void 0 : n.name);
  }
  setDetections(n) {
    this.detections = n;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new D("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  setThresholds(n) {
    var t;
    (t = this.currentDetection) == null || t.setThresholds(n);
  }
  static getWorkerPath(n, t) {
    return "" + t.replace(z0, "") + n;
  }
}
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dg = {}, Zi = {}, zi, bg;
function oE() {
  if (bg) return zi;
  bg = 1, zi = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(a, g) {
      e[A] = function(s) {
        if (r)
          if (r = !1, s)
            g(s);
          else {
            for (var C = new Array(arguments.length - 1), c = 0; c < C.length; )
              C[c++] = arguments[c];
            a.apply(null, C);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (s) {
        r && (r = !1, g(s));
      }
    });
  }
  return zi;
}
var kg = {}, Sg;
function nE() {
  return Sg || (Sg = 1, function(i) {
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
      for (var s = null, C = [], c = 0, E = 0, I; a < g; ) {
        var x = r[a++];
        switch (E) {
          case 0:
            C[c++] = t[x >> 2], I = (x & 3) << 4, E = 1;
            break;
          case 1:
            C[c++] = t[I | x >> 4], I = (x & 15) << 2, E = 2;
            break;
          case 2:
            C[c++] = t[I | x >> 6], C[c++] = t[x & 63], E = 0;
            break;
        }
        c > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, C)), c = 0);
      }
      return E && (C[c++] = t[I], C[c++] = 61, E === 1 && (C[c++] = 61)), s ? (c && s.push(String.fromCharCode.apply(String, C.slice(0, c))), s.join("")) : String.fromCharCode.apply(String, C.slice(0, c));
    };
    var o = "invalid encoding";
    n.decode = function(r, a, g) {
      for (var s = g, C = 0, c, E = 0; E < r.length; ) {
        var I = r.charCodeAt(E++);
        if (I === 61 && C > 1)
          break;
        if ((I = e[I]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            c = I, C = 1;
            break;
          case 1:
            a[g++] = c << 2 | (I & 48) >> 4, c = I, C = 2;
            break;
          case 2:
            a[g++] = (c & 15) << 4 | (I & 60) >> 2, c = I, C = 3;
            break;
          case 3:
            a[g++] = (c & 3) << 6 | I, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return g - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(kg)), kg;
}
var Xi, Gg;
function iE() {
  if (Gg) return Xi;
  Gg = 1, Xi = i;
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
  }, Xi;
}
var $i, Ng;
function rE() {
  if (Ng) return $i;
  Ng = 1, $i = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), a = new Uint8Array(r.buffer), g = a[3] === 128;
      function s(I, x, d) {
        r[0] = I, x[d] = a[0], x[d + 1] = a[1], x[d + 2] = a[2], x[d + 3] = a[3];
      }
      function C(I, x, d) {
        r[0] = I, x[d] = a[3], x[d + 1] = a[2], x[d + 2] = a[1], x[d + 3] = a[0];
      }
      o.writeFloatLE = g ? s : C, o.writeFloatBE = g ? C : s;
      function c(I, x) {
        return a[0] = I[x], a[1] = I[x + 1], a[2] = I[x + 2], a[3] = I[x + 3], r[0];
      }
      function E(I, x) {
        return a[3] = I[x], a[2] = I[x + 1], a[1] = I[x + 2], a[0] = I[x + 3], r[0];
      }
      o.readFloatLE = g ? c : E, o.readFloatBE = g ? E : c;
    }() : function() {
      function r(g, s, C, c) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          g(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, c);
        else if (isNaN(s))
          g(2143289344, C, c);
        else if (s > 34028234663852886e22)
          g((E << 31 | 2139095040) >>> 0, C, c);
        else if (s < 11754943508222875e-54)
          g((E << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, C, c);
        else {
          var I = Math.floor(Math.log(s) / Math.LN2), x = Math.round(s * Math.pow(2, -I) * 8388608) & 8388607;
          g((E << 31 | I + 127 << 23 | x) >>> 0, C, c);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function a(g, s, C) {
        var c = g(s, C), E = (c >> 31) * 2 + 1, I = c >>> 23 & 255, x = c & 8388607;
        return I === 255 ? x ? NaN : E * (1 / 0) : I === 0 ? E * 1401298464324817e-60 * x : E * Math.pow(2, I - 150) * (x + 8388608);
      }
      o.readFloatLE = a.bind(null, e), o.readFloatBE = a.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), a = new Uint8Array(r.buffer), g = a[7] === 128;
      function s(I, x, d) {
        r[0] = I, x[d] = a[0], x[d + 1] = a[1], x[d + 2] = a[2], x[d + 3] = a[3], x[d + 4] = a[4], x[d + 5] = a[5], x[d + 6] = a[6], x[d + 7] = a[7];
      }
      function C(I, x, d) {
        r[0] = I, x[d] = a[7], x[d + 1] = a[6], x[d + 2] = a[5], x[d + 3] = a[4], x[d + 4] = a[3], x[d + 5] = a[2], x[d + 6] = a[1], x[d + 7] = a[0];
      }
      o.writeDoubleLE = g ? s : C, o.writeDoubleBE = g ? C : s;
      function c(I, x) {
        return a[0] = I[x], a[1] = I[x + 1], a[2] = I[x + 2], a[3] = I[x + 3], a[4] = I[x + 4], a[5] = I[x + 5], a[6] = I[x + 6], a[7] = I[x + 7], r[0];
      }
      function E(I, x) {
        return a[7] = I[x], a[6] = I[x + 1], a[5] = I[x + 2], a[4] = I[x + 3], a[3] = I[x + 4], a[2] = I[x + 5], a[1] = I[x + 6], a[0] = I[x + 7], r[0];
      }
      o.readDoubleLE = g ? c : E, o.readDoubleBE = g ? E : c;
    }() : function() {
      function r(g, s, C, c, E, I) {
        var x = c < 0 ? 1 : 0;
        if (x && (c = -c), c === 0)
          g(0, E, I + s), g(1 / c > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, I + C);
        else if (isNaN(c))
          g(0, E, I + s), g(2146959360, E, I + C);
        else if (c > 17976931348623157e292)
          g(0, E, I + s), g((x << 31 | 2146435072) >>> 0, E, I + C);
        else {
          var d;
          if (c < 22250738585072014e-324)
            d = c / 5e-324, g(d >>> 0, E, I + s), g((x << 31 | d / 4294967296) >>> 0, E, I + C);
          else {
            var l = Math.floor(Math.log(c) / Math.LN2);
            l === 1024 && (l = 1023), d = c * Math.pow(2, -l), g(d * 4503599627370496 >>> 0, E, I + s), g((x << 31 | l + 1023 << 20 | d * 1048576 & 1048575) >>> 0, E, I + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function a(g, s, C, c, E) {
        var I = g(c, E + s), x = g(c, E + C), d = (x >> 31) * 2 + 1, l = x >>> 20 & 2047, Q = 4294967296 * (x & 1048575) + I;
        return l === 2047 ? Q ? NaN : d * (1 / 0) : l === 0 ? d * 5e-324 * Q : d * Math.pow(2, l - 1075) * (Q + 4503599627370496);
      }
      o.readDoubleLE = a.bind(null, e, 0, 4), o.readDoubleBE = a.bind(null, A, 4, 0);
    }(), o;
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
  return $i;
}
function Rg(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ar, Fg;
function aE() {
  if (Fg) return Ar;
  Fg = 1, Ar = i;
  function i(n) {
    try {
      if (typeof Rg != "function")
        return null;
      var t = Rg(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return Ar;
}
var vg = {}, Wg;
function gE() {
  return Wg || (Wg = 1, function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, a = [], g = 0, s; e < A; )
        s = t[e++], s < 128 ? a[g++] = s : s > 191 && s < 224 ? a[g++] = (s & 31) << 6 | t[e++] & 63 : s > 239 && s < 365 ? (s = ((s & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (s >> 10), a[g++] = 56320 + (s & 1023)) : a[g++] = (s & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
      return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
    }, n.write = function(t, e, A) {
      for (var o = A, r, a, g = 0; g < t.length; ++g)
        r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  }(vg)), vg;
}
var er, Mg;
function sE() {
  if (Mg) return er;
  Mg = 1, er = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, a = A;
    return function(g) {
      if (g < 1 || g > o)
        return n(g);
      a + g > A && (r = n(A), a = 0);
      var s = t.call(r, a, a += g);
      return a & 7 && (a = (a | 7) + 1), s;
    };
  }
  return er;
}
var tr, Lg;
function cE() {
  if (Lg) return tr;
  Lg = 1, tr = n;
  var i = yt();
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
  }, tr;
}
var Og;
function yt() {
  return Og || (Og = 1, function(i) {
    var n = i;
    n.asPromise = oE(), n.base64 = nE(), n.EventEmitter = iE(), n.float = rE(), n.inquire = aE(), n.utf8 = gE(), n.pool = sE(), n.LongBits = cE(), n.isNode = !!(typeof Gt < "u" && Gt && Gt.process && Gt.process.versions && Gt.process.versions.node), n.global = n.isNode && Gt || typeof window < "u" && window || typeof self < "u" && self || Zi, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    }, n.Buffer = function() {
      try {
        var A = n.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(A) {
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
  }(Zi)), Zi;
}
var or, Jg;
function Qc() {
  if (Jg) return or;
  Jg = 1, or = g;
  var i = yt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, Q, f) {
    this.fn = l, this.len = Q, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function a(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function g() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var s = function() {
    return i.Buffer ? function() {
      return (g.create = function() {
        return new n();
      })();
    } : function() {
      return new g();
    };
  };
  g.create = s(), g.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (g.alloc = i.pool(g.alloc, i.Array.prototype.subarray)), g.prototype._push = function(l, Q, f) {
    return this.tail = this.tail.next = new o(l, Q, f), this.len += Q, this;
  };
  function C(l, Q, f) {
    Q[f] = l & 255;
  }
  function c(l, Q, f) {
    for (; l > 127; )
      Q[f++] = l & 127 | 128, l >>>= 7;
    Q[f] = l;
  }
  function E(l, Q) {
    this.len = l, this.next = void 0, this.val = Q;
  }
  E.prototype = Object.create(o.prototype), E.prototype.fn = c, g.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new E(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, g.prototype.int32 = function(l) {
    return l < 0 ? this._push(I, 10, t.fromNumber(l)) : this.uint32(l);
  }, g.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function I(l, Q, f) {
    for (; l.hi; )
      Q[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[f++] = l.lo;
  }
  g.prototype.uint64 = function(l) {
    var Q = t.from(l);
    return this._push(I, Q.length(), Q);
  }, g.prototype.int64 = g.prototype.uint64, g.prototype.sint64 = function(l) {
    var Q = t.from(l).zzEncode();
    return this._push(I, Q.length(), Q);
  }, g.prototype.bool = function(l) {
    return this._push(C, 1, l ? 1 : 0);
  };
  function x(l, Q, f) {
    Q[f] = l & 255, Q[f + 1] = l >>> 8 & 255, Q[f + 2] = l >>> 16 & 255, Q[f + 3] = l >>> 24;
  }
  g.prototype.fixed32 = function(l) {
    return this._push(x, 4, l >>> 0);
  }, g.prototype.sfixed32 = g.prototype.fixed32, g.prototype.fixed64 = function(l) {
    var Q = t.from(l);
    return this._push(x, 4, Q.lo)._push(x, 4, Q.hi);
  }, g.prototype.sfixed64 = g.prototype.fixed64, g.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, g.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var d = i.Array.prototype.set ? function(l, Q, f) {
    Q.set(l, f);
  } : function(l, Q, f) {
    for (var m = 0; m < l.length; ++m)
      Q[f + m] = l[m];
  };
  return g.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(C, 1, 0);
    if (i.isString(l)) {
      var f = g.alloc(Q = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(Q)._push(d, Q, l);
  }, g.prototype.string = function(l) {
    var Q = A.length(l);
    return Q ? this.uint32(Q)._push(A.write, Q, l) : this._push(C, 1, 0);
  }, g.prototype.fork = function() {
    return this.states = new a(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, g.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, g.prototype.ldelim = function() {
    var l = this.head, Q = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = l.next, this.tail = Q, this.len += f), this;
  }, g.prototype.finish = function() {
    for (var l = this.head.next, Q = this.constructor.alloc(this.len), f = 0; l; )
      l.fn(l.val, Q, f), f += l.len, l = l.next;
    return Q;
  }, g._configure = function(l) {
    n = l, g.create = s(), n._configure();
  }, or;
}
var nr, Ug;
function IE() {
  if (Ug) return nr;
  Ug = 1, nr = t;
  var i = Qc();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = yt();
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
  }, t._configure(), nr;
}
var ir, Yg;
function Ec() {
  if (Yg) return ir;
  Yg = 1, ir = o;
  var i = yt(), n, t = i.LongBits, e = i.utf8;
  function A(c, E) {
    return RangeError("index out of range: " + c.pos + " + " + (E || 1) + " > " + c.len);
  }
  function o(c) {
    this.buf = c, this.pos = 0, this.len = c.length;
  }
  var r = typeof Uint8Array < "u" ? function(c) {
    if (c instanceof Uint8Array || Array.isArray(c))
      return new o(c);
    throw Error("illegal buffer");
  } : function(c) {
    if (Array.isArray(c))
      return new o(c);
    throw Error("illegal buffer");
  }, a = function() {
    return i.Buffer ? function(c) {
      return (o.create = function(E) {
        return i.Buffer.isBuffer(E) ? new n(E) : r(E);
      })(c);
    } : r;
  };
  o.create = a(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ function() {
    var c = 4294967295;
    return function() {
      if (c = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (c = (c | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (c = (c | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (c = (c | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (c = (c | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return c;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return c;
    };
  }(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var c = this.uint32();
    return c >>> 1 ^ -(c & 1) | 0;
  };
  function g() {
    var c = new t(0, 0), E = 0;
    if (this.len - this.pos > 4) {
      for (; E < 4; ++E)
        if (c.lo = (c.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return c;
      if (c.lo = (c.lo | (this.buf[this.pos] & 127) << 28) >>> 0, c.hi = (c.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return c;
      E = 0;
    } else {
      for (; E < 3; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (c.lo = (c.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return c;
      }
      return c.lo = (c.lo | (this.buf[this.pos++] & 127) << E * 7) >>> 0, c;
    }
    if (this.len - this.pos > 4) {
      for (; E < 5; ++E)
        if (c.hi = (c.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return c;
    } else
      for (; E < 5; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (c.hi = (c.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return c;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function s(c, E) {
    return (c[E - 4] | c[E - 3] << 8 | c[E - 2] << 16 | c[E - 1] << 24) >>> 0;
  }
  o.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return s(this.buf, this.pos += 4);
  }, o.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    return s(this.buf, this.pos += 4) | 0;
  };
  function C() {
    if (this.pos + 8 > this.len)
      throw A(this, 8);
    return new t(s(this.buf, this.pos += 4), s(this.buf, this.pos += 4));
  }
  return o.prototype.float = function() {
    if (this.pos + 4 > this.len)
      throw A(this, 4);
    var c = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, c;
  }, o.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var c = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, c;
  }, o.prototype.bytes = function() {
    var c = this.uint32(), E = this.pos, I = this.pos + c;
    if (I > this.len)
      throw A(this, c);
    if (this.pos += c, Array.isArray(this.buf))
      return this.buf.slice(E, I);
    if (E === I) {
      var x = i.Buffer;
      return x ? x.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, I);
  }, o.prototype.string = function() {
    var c = this.bytes();
    return e.read(c, 0, c.length);
  }, o.prototype.skip = function(c) {
    if (typeof c == "number") {
      if (this.pos + c > this.len)
        throw A(this, c);
      this.pos += c;
    } else
      do
        if (this.pos >= this.len)
          throw A(this);
      while (this.buf[this.pos++] & 128);
    return this;
  }, o.prototype.skipType = function(c) {
    switch (c) {
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
        for (; (c = this.uint32() & 7) !== 4; )
          this.skipType(c);
        break;
      case 5:
        this.skip(4);
        break;
      /* istanbul ignore next */
      default:
        throw Error("invalid wire type " + c + " at offset " + this.pos);
    }
    return this;
  }, o._configure = function(c) {
    n = c, o.create = a(), n._configure();
    var E = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return g.call(this)[E](!1);
      },
      uint64: function() {
        return g.call(this)[E](!0);
      },
      sint64: function() {
        return g.call(this).zzDecode()[E](!1);
      },
      fixed64: function() {
        return C.call(this)[E](!0);
      },
      sfixed64: function() {
        return C.call(this)[E](!1);
      }
    });
  }, ir;
}
var rr, Pg;
function CE() {
  if (Pg) return rr;
  Pg = 1, rr = t;
  var i = Ec();
  (t.prototype = Object.create(i.prototype)).constructor = t;
  var n = yt();
  function t(e) {
    i.call(this, e);
  }
  return t._configure = function() {
    n.Buffer && (t.prototype._slice = n.Buffer.prototype.slice);
  }, t.prototype.string = function() {
    var e = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
  }, t._configure(), rr;
}
var Tg = {}, ar, Hg;
function BE() {
  if (Hg) return ar;
  Hg = 1, ar = n;
  var i = yt();
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
        function(s, C) {
          if (s)
            return g.emit("error", s, e), a(s);
          if (C === null) {
            g.end(
              /* endedByRPC */
              !0
            );
            return;
          }
          if (!(C instanceof o))
            try {
              C = o[g.responseDelimited ? "decodeDelimited" : "decode"](C);
            } catch (c) {
              return g.emit("error", c, e), a(c);
            }
          return g.emit("data", C, e), a(null, C);
        }
      );
    } catch (s) {
      g.emit("error", s, e), setTimeout(function() {
        a(s);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, ar;
}
var Kg;
function QE() {
  return Kg || (Kg = 1, function(i) {
    var n = i;
    n.Service = BE();
  }(Tg)), Tg;
}
var _g, jg;
function EE() {
  return jg || (jg = 1, _g = {}), _g;
}
var qg;
function xE() {
  return qg || (qg = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = Qc(), n.BufferWriter = IE(), n.Reader = Ec(), n.BufferReader = CE(), n.util = yt(), n.rpc = QE(), n.roots = EE(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(Dg)), Dg;
}
var Vg, Zg;
function dE() {
  return Zg || (Zg = 1, Vg = xE()), Vg;
}
var N = dE();
const h = N.Reader, R = N.Writer, u = N.util, B = N.roots.default || (N.roots.default = {}), UA = B.dot = (() => {
  const i = {};
  return i.Content = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = u.newBuffer([]), n.prototype.iv = u.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = u.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? u.base64.decode(t.token, e.token = u.newBuffer(u.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? u.base64.decode(t.iv, e.iv = u.newBuffer(u.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = u.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = u.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? u.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? u.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, n;
  }(), i.v4 = function() {
    const n = {};
    return n.MagnifEyeLivenessContent = function() {
      function t(A) {
        if (this.images = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.images = u.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.images != null && A.images.length)
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), n.Metadata = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: u.oneOfGetter(e = ["sessionToken"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: u.oneOfGetter(e = ["web", "android", "ios"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Metadata();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !u.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !u.isString(A.componentVersion))
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), n.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = u.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.dynamicCameraFrameProperties = u.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: u.oneOfGetter(e = ["device"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: u.oneOfGetter(e = ["tamperingIndicators"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: u.oneOfGetter(e = ["croppedYuv420Image"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: u.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.supportedAbis != null && A.supportedAbis.length)
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
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.AndroidMetadata(), s, C;
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
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
              g.dynamicCameraFrameProperties === u.emptyObject && (g.dynamicCameraFrameProperties = {});
              let E = A.uint32() + A.pos;
              for (s = "", C = null; A.pos < E; ) {
                let I = A.uint32();
                switch (I >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(I & 7);
                    break;
                }
              }
              g.dynamicCameraFrameProperties[s] = C;
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
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!u.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !u.isString(A.device))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
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
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
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
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
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
          for (let g = 0; g < A.supportedAbis.length; ++g)
            r.supportedAbis[g] = A.supportedAbis[g];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? u.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), n.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), n.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = u.newBuffer([]), t.prototype.uPlane = u.newBuffer([]), t.prototype.vPlane = u.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = u.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = u.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), n.Yuv420ImageCrop = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420ImageCrop";
      }, t;
    }(), n.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = u.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.isoValues = u.emptyArray, t.prototype.croppedYuv420Image = null, t.prototype.yuv420ImageCrop = null;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: u.oneOfGetter(e = ["croppedYuv420Image"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_yuv420ImageCrop", {
        get: u.oneOfGetter(e = ["yuv420ImageCrop"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && o.uint32(
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
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.IosMetadata(), s, C;
        for (; A.pos < a; ) {
          let c = A.uint32();
          if (c === r)
            break;
          switch (c >>> 3) {
            case 1: {
              g.cameraModelId = A.string();
              break;
            }
            case 2: {
              g.architectureInfo === u.emptyObject && (g.architectureInfo = {});
              let E = A.uint32() + A.pos;
              for (s = "", C = !1; A.pos < E; ) {
                let I = A.uint32();
                switch (I >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(I & 7);
                    break;
                }
              }
              g.architectureInfo[s] = C;
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
              if (g.isoValues && g.isoValues.length || (g.isoValues = []), (c & 7) === 2) {
                let E = A.uint32() + A.pos;
                for (; A.pos < E; )
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
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !u.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!u.isObject(A.architectureInfo))
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
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
            if (!u.isInteger(A.isoValues[o]))
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
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let g = 0; g < a.length; ++g)
            r.architectureInfo[a[g]] = A.architectureInfo[a[g]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? u.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = B.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), n.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), n.IosYuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = u.newBuffer([]), t.prototype.uvPlane = u.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || u.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosYuv420Image)
          return e;
        let A = new B.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? u.base64.decode(e.uvPlane, A.uvPlane = u.newBuffer(u.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = u.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? u.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420Image";
      }, t;
    }(), n.IosYuv420ImageCrop = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosYuv420ImageCrop";
      }, t;
    }(), n.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = u.emptyArray, t.prototype.hashedDetectedImages = u.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = u.emptyArray, t.prototype.detectionRecord = u.emptyArray, t.prototype.croppedImage = null, t.prototype.croppedImageWithPosition = null, t.prototype.platformDetails = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: u.oneOfGetter(e = ["croppedImage"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedImageWithPosition", {
        get: u.oneOfGetter(e = ["croppedImageWithPosition"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformDetails", {
        get: u.oneOfGetter(e = ["platformDetails"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.WebMetadata();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
            if (!u.isString(A.hashedDetectedImages[o]))
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), n.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", u.Long) {
            let r = new u.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), n.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: u.oneOfGetter(e = ["aspectRatio"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: u.oneOfGetter(e = ["autoGainControl"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: u.oneOfGetter(e = ["channelCount"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: u.oneOfGetter(e = ["deviceId"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: u.oneOfGetter(e = ["displaySurface"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: u.oneOfGetter(e = ["echoCancellation"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: u.oneOfGetter(e = ["facingMode"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: u.oneOfGetter(e = ["frameRate"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: u.oneOfGetter(e = ["groupId"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: u.oneOfGetter(e = ["height"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: u.oneOfGetter(e = ["noiseSuppression"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: u.oneOfGetter(e = ["sampleRate"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: u.oneOfGetter(e = ["sampleSize"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: u.oneOfGetter(e = ["width"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: u.oneOfGetter(e = ["deviceName"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MediaTrackSettings();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), n.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), n.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: u.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.CameraProperties();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              g.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), n.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), n.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), n.ImageCrop = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.topLeftCorner = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && B.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageCrop";
      }, t;
    }(), n.PlatformDetails = function() {
      function t(A) {
        if (this.browserVersions = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.userAgent = "", t.prototype.platform = null, t.prototype.platformVersion = null, t.prototype.architecture = null, t.prototype.model = null, t.prototype.browserVersions = u.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_platform", {
        get: u.oneOfGetter(e = ["platform"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_platformVersion", {
        get: u.oneOfGetter(e = ["platformVersion"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_architecture", {
        get: u.oneOfGetter(e = ["architecture"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_model", {
        get: u.oneOfGetter(e = ["model"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.userAgent != null && Object.hasOwnProperty.call(A, "userAgent") && o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.PlatformDetails();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.userAgent != null && A.hasOwnProperty("userAgent") && !u.isString(A.userAgent))
          return "userAgent: string expected";
        if (A.platform != null && A.hasOwnProperty("platform") && !u.isString(A.platform))
          return "platform: string expected";
        if (A.platformVersion != null && A.hasOwnProperty("platformVersion") && !u.isString(A.platformVersion))
          return "platformVersion: string expected";
        if (A.architecture != null && A.hasOwnProperty("architecture") && !u.isString(A.architecture))
          return "architecture: string expected";
        if (A.model != null && A.hasOwnProperty("model") && !u.isString(A.model))
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
          for (let a = 0; a < A.browserVersions.length; ++a)
            r.browserVersions[a] = B.dot.v4.BrowserVersion.toObject(A.browserVersions[a], o);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PlatformDetails";
      }, t;
    }(), n.BrowserVersion = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.name = "", t.prototype.version = "", t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.name != null && Object.hasOwnProperty.call(e, "name") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.name), e.version != null && Object.hasOwnProperty.call(e, "version") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.version), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !u.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !u.isString(e.version) ? "version: string expected" : null;
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.BrowserVersion";
      }, t;
    }(), n.FaceContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.FaceContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    }(), n.DocumentContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.DocumentContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    }(), n.Blob = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null, t.prototype.multiRangeLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: u.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent", "multiRangeLivenessContent"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Blob();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), n.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), n.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), n.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.comHeaderAndDataGroupPresenceInformation = null, t.prototype.sodDocumentSecurityObject = null, t.prototype.dg1MachineReadableZoneInformation = null, t.prototype.dg2EncodedIdentificationFeaturesFace = null, t.prototype.dg3AdditionalIdentificationFeatureFingers = null, t.prototype.dg4AdditionalIdentificationFeatureIrises = null, t.prototype.dg5DisplayedPortrait = null, t.prototype.dg7DisplayedSignatureOrUsualMark = null, t.prototype.dg8DataFeatures = null, t.prototype.dg9StructureFeatures = null, t.prototype.dg10SubstanceFeatures = null, t.prototype.dg11AdditionalPersonalDetails = null, t.prototype.dg12AdditionalDocumentDetails = null, t.prototype.dg13OptionalDetails = null, t.prototype.dg14SecurityOptions = null, t.prototype.dg15ActiveAuthenticationPublicKeyInfo = null, t.prototype.dg16PersonsToNotify = null;
      let e;
      return Object.defineProperty(t.prototype, "_dg3AdditionalIdentificationFeatureFingers", {
        get: u.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: u.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: u.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: u.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: u.oneOfGetter(e = ["dg8DataFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: u.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: u.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: u.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: u.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: u.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: u.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: u.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: u.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), n.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: u.oneOfGetter(e = ["bytes"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.Lds1ElementaryFile();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              g.id = A.int32();
              break;
            }
            case 2: {
              g.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || u.isString(A.bytes)) ? "bytes: buffer expected" : null;
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
        return A.bytes != null && (typeof A.bytes == "string" ? u.base64.decode(A.bytes, o.bytes = u.newBuffer(u.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "ID_UNSPECIFIED"] = 0, o[A[1] = "ID_COM"] = 1, o[A[2] = "ID_SOD"] = 2, o[A[3] = "ID_DG1"] = 3, o[A[4] = "ID_DG2"] = 4, o[A[5] = "ID_DG3"] = 5, o[A[6] = "ID_DG4"] = 6, o[A[7] = "ID_DG5"] = 7, o[A[8] = "ID_DG7"] = 8, o[A[9] = "ID_DG8"] = 9, o[A[10] = "ID_DG9"] = 10, o[A[11] = "ID_DG10"] = 11, o[A[12] = "ID_DG11"] = 12, o[A[13] = "ID_DG12"] = 13, o[A[14] = "ID_DG13"] = 14, o[A[15] = "ID_DG14"] = 15, o[A[16] = "ID_DG15"] = 16, o[A[17] = "ID_DG16"] = 17, o;
      }(), t;
    }(), n.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), n.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), n.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      }(), t.Protocol = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      }(), t;
    }(), n.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.status = 0, t.prototype.protocol = null, t.prototype.activeAuthenticationResponse = null;
      let e;
      return Object.defineProperty(t.prototype, "_protocol", {
        get: u.oneOfGetter(e = ["protocol"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: u.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || u.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? u.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = u.newBuffer(u.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "STATUS_UNSPECIFIED"] = 0, o[A[1] = "STATUS_AUTHENTICATED"] = 1, o[A[2] = "STATUS_DENIED"] = 2, o[A[3] = "STATUS_NOT_SUPPORTED"] = 3, o;
      }(), t.Protocol = function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, o[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, o[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, o[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, o;
      }(), t;
    }(), n.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.segments = u.emptyArray, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: u.oneOfGetter(e = ["image"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.segments != null && A.segments.length)
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), n.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), n.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), n.MultiRangeLivenessContent = function() {
      function t(A) {
        if (this.stepResults = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.stepResults = u.emptyArray, t.prototype.metadata = null, t.prototype.video = null, t.prototype.multiRangeLivenessMetadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = R.create()), A.stepResults != null && A.stepResults.length)
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MultiRangeLivenessContent";
      }, t;
    }(), n.MultiRangeLivenessStepResult = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.challengeItem = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.challengeItem != null && Object.hasOwnProperty.call(e, "challengeItem") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessStepResult";
      }, t;
    }(), n.MultiRangeLivenessChallengeItem = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_UNSPECIFIED"] = 0, e[t[1] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO"] = 1, e[t[2] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE"] = 2, e[t[3] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO"] = 3, e[t[4] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE"] = 4, e[t[5] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR"] = 5, e[t[6] = "MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE"] = 6, e;
    }(), n.MultiRangeLivenessMetadata = function() {
      function t(e) {
        if (this.detections = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.detections = u.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = R.create()), e.detections != null && e.detections.length)
          for (let o = 0; o < e.detections.length; ++o)
            B.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, a = new B.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let g = e.uint32();
          if (g === o)
            break;
          switch (g >>> 3) {
            case 1: {
              a.detections && a.detections.length || (a.detections = []), a.detections.push(B.dot.v4.FaceDetection.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MultiRangeLivenessMetadata";
      }, t;
    }(), n.FaceDetection = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, t.prototype.position = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && B.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = B.dot.v4.FaceDetectionPosition.fromObject(e.position);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults) {
          if (u.Long) {
            let r = new u.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
          o.position = null;
        }
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = B.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetection";
      }, t;
    }(), n.FaceDetectionPosition = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.center = null, t.prototype.faceSizeToImageShorterSideRatio = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = R.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && B.dot.PointDouble.encode(e.center, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceSizeToImageShorterSideRatio != null && Object.hasOwnProperty.call(e, "faceSizeToImageShorterSideRatio") && A.uint32(
          /* id 2, wireType 1 =*/
          17
        ).double(e.faceSizeToImageShorterSideRatio), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceDetectionPosition";
      }, t;
    }(), n.SmileLivenessContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && B.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.SmileLivenessContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), n.PalmContent = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.video = null, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_video", {
        get: u.oneOfGetter(e = ["video"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let a = o === void 0 ? A.len : A.pos + o, g = new B.dot.v4.PalmContent();
        for (; A.pos < a; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return this.constructor.toObject(this, N.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    }(), n;
  }(), i.Image = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = u.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.Image();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  }(), i.ImageWithTimestamp = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.image = null, n.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && B.dot.Image.encode(t.image, e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).fork()).ldelim(), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = B.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.ImageWithTimestamp)
        return t;
      let e = new B.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = B.dot.Image.fromObject(t.image);
      }
      return t.timestampMillis != null && (u.Long ? (e.timestampMillis = u.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (A.image = null, u.Long) {
          let o = new u.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.image != null && t.hasOwnProperty("image") && (A.image = B.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageWithTimestamp";
    }, n;
  }(), i.ImageSize = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.width = 0, n.prototype.height = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, n;
  }(), i.Int32List = function() {
    function n(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.items = u.emptyArray, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      if (e || (e = R.create()), t.items != null && t.items.length) {
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
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!u.isInteger(t.items[e]))
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, n;
  }(), i.Platform = function() {
    const n = {}, t = Object.create(n);
    return t[n[0] = "WEB"] = 0, t[n[1] = "ANDROID"] = 1, t[n[2] = "IOS"] = 2, t;
  }(), i.RectangleDouble = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.left = 0, n.prototype.top = 0, n.prototype.right = 0, n.prototype.bottom = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, n;
  }(), i.DigestWithTimestamp = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.digest = u.newBuffer([]), n.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? u.base64.decode(t.digest, e.digest = u.newBuffer(u.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (u.Long ? (e.timestampMillis = u.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = u.newBuffer(A.digest))), u.Long) {
          let o = new u.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? u.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, n;
  }(), i.Video = function() {
    function n(e) {
      if (e)
        for (let A = Object.keys(e), o = 0; o < A.length; ++o)
          e[A[o]] != null && (this[A[o]] = e[A[o]]);
    }
    n.prototype.bytes = null, n.prototype.containerMp4 = null, n.prototype.streamH264 = null;
    let t;
    return Object.defineProperty(n.prototype, "_bytes", {
      get: u.oneOfGetter(t = ["bytes"]),
      set: u.oneOfSetter(t)
    }), Object.defineProperty(n.prototype, "content", {
      get: u.oneOfGetter(t = ["containerMp4", "streamH264"]),
      set: u.oneOfSetter(t)
    }), n.create = function(e) {
      return new n(e);
    }, n.encode = function(e, A) {
      return A || (A = R.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
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
      e instanceof h || (e = h.create(e));
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
      return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
    }, n.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      let A = {};
      if (e.bytes != null && e.hasOwnProperty("bytes") && (A._bytes = 1, !(e.bytes && typeof e.bytes.length == "number" || u.isString(e.bytes))))
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
      if (e.bytes != null && (typeof e.bytes == "string" ? u.base64.decode(e.bytes, A.bytes = u.newBuffer(u.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? u.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = B.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = B.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Video";
    }, n;
  }(), i.VideoContainer = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = u.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
      let o = e === void 0 ? t.len : t.pos + e, r = new B.dot.VideoContainer();
      for (; t.pos < o; ) {
        let a = t.uint32();
        if (a === A)
          break;
        switch (a >>> 3) {
          case 1: {
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.VideoContainer)
        return t;
      let e = new B.dot.VideoContainer();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoContainer";
    }, n;
  }(), i.VideoStream = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = u.newBuffer([]), n.prototype.frameRate = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.frameRate), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.VideoStream)
        return t;
      let e = new B.dot.VideoStream();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), t.frameRate != null && (e.frameRate = Number(t.frameRate)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes))), A.frameRate = 0), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), t.frameRate != null && t.hasOwnProperty("frameRate") && (A.frameRate = e.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.VideoStream";
    }, n;
  }(), i.PointInt = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !u.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !u.isInteger(t.y) ? "y: integer expected" : null;
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointInt";
    }, n;
  }(), i.PointDouble = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.x = 0, n.prototype.y = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = R.create()), t.x != null && Object.hasOwnProperty.call(t, "x") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.x), t.y != null && Object.hasOwnProperty.call(t, "y") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.y), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e, A) {
      t instanceof h || (t = h.create(t));
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  }(), i;
})(), zg = /* @__PURE__ */ new Map([[te.ZERO, UA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ZERO], [te.ONE, UA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_ONE], [te.TWO, UA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_TWO], [te.THREE, UA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_THREE], [te.FOUR, UA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FOUR], [te.FIVE, UA.v4.MultiRangeLivenessChallengeItem.MULTI_RANGE_LIVENESS_CHALLENGE_ITEM_FIVE]]), xc = {};
xc.confidence = 0;
const dc = {};
dc.confidence = 0;
const Le = {};
Le.faceConfidence = 0.4, Le.sharpnessThreshold = 0.25, Le.brightnessLowThreshold = 0.2, Le.brightnessHighThreshold = 0.85, Le.outOfBoundsThreshold = 0.05, Le.devicePitchAngleThreshold = 30, Le.leftEye = xc, Le.rightEye = dc;
const lc = {};
lc.confidence = 0;
const uc = {};
uc.confidence = 0;
const Oe = {};
Oe.faceConfidence = 0.4, Oe.sharpnessThreshold = 0.25, Oe.brightnessLowThreshold = 0.2, Oe.brightnessHighThreshold = 0.85, Oe.outOfBoundsThreshold = 0.05, Oe.devicePitchAngleThreshold = 30, Oe.leftEye = lc, Oe.rightEye = uc;
const _r = {};
_r.MOBILE = Le, _r.DESKTOP = Oe;
const lE = _r, fc = {};
fc.confidence = 0;
const hc = {};
hc.confidence = 0;
const Dn = {};
Dn.faceConfidence = 0.4, Dn.leftEye = fc, Dn.rightEye = hc;
const pc = {};
pc.confidence = 0;
const mc = {};
mc.confidence = 0;
const bn = {};
bn.faceConfidence = 0.4, bn.leftEye = pc, bn.rightEye = mc;
const jr = {};
jr.MOBILE = Dn, jr.DESKTOP = bn;
const uE = jr, Xg = -29 * 110 + 235 * 13 + 427 * 5, kn = {};
kn.timeout = 4e3, kn.threshold = 0.7, kn.instructions = [OA.FACE_TOO_CLOSE, OA.FACE_TOO_FAR];
const gr = kn, yc = "SAM v1.50.5 for idcards";
class wc extends tE {
  constructor(t, e, A, o, r, a, g, s, C, c, E) {
    super(t, yc, e, a, g, C, c, E);
    p(this, "detector");
    p(this, "allowedDetectionTransitions");
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "passiveLivenessPhase");
    p(this, "livenessChallengePhase");
    p(this, "dispatcher");
    this.detector = A, this.detectionFactory = o, this.phaseThresholds = r, [this.passiveLivenessPhase, ...this.livenessChallengePhase] = s, this.dispatcher = a, this.allowedDetectionTransitions = this.buildAllowedTransitions(s);
  }
  getDispatcher() {
    return this.dispatcher;
  }
  buildAllowedTransitions(t) {
    if (t.length === -357 * -10 + -9774 + 6204)
      return { [K.PASSIVE_LIVENESS]: [] };
    const e = { [K.PASSIVE_LIVENESS]: [K.LIVENESS_CHALLENGE + "_0"] }, A = e;
    return this.livenessChallengePhase.forEach((o, r) => {
      const a = K.LIVENESS_CHALLENGE + "_" + r;
      if (r < this.livenessChallengePhase.length - (2531 * 1 + 8580 + -1010 * 11)) {
        const g = K.LIVENESS_CHALLENGE + "_" + (r + 1);
        A[a] = [g];
      }
    }), A;
  }
  async init() {
    await super.init();
    const t = {};
    t[K.PASSIVE_LIVENESS] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: Xg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: this.passiveLivenessPhase }, type: K.PASSIVE_LIVENESS }), this.livenessChallengePhase.forEach((e, A) => {
      const o = A + 1 < this.livenessChallengePhase.length ? A + 1 : void 0, r = K.LIVENESS_CHALLENGE + "_" + A;
      t[r] = this.detectionFactory.createDetection({ params: { cameraService: this.cameraService, candidateSelectionDuration: Xg, controller: this, detector: this.detector, phaseThresholds: this.phaseThresholds, multiRangeLivenessChallengeItem: e, currentIndex: A, nextIndex: o }, type: K.LIVENESS_CHALLENGE });
    }), this.setDetections(t), this.setCurrentDetection(this.detections[K.PASSIVE_LIVENESS]), this.getDispatcher().dispatchChallengeItemChangedEvent(this.passiveLivenessPhase), this.runDetectionLoop();
  }
  getLivenessChallengePhase() {
    return this.livenessChallengePhase;
  }
  getPassiveLivenessPhase() {
    return this.passiveLivenessPhase;
  }
}
class fE {
  constructor() {
    p(this, "assetsDirectoryPath");
    p(this, "cameraService");
    p(this, "protobuf");
    p(this, "analytics");
    p(this, "dispatcher");
    p(this, "sessionToken");
    p(this, "transactionCounting");
    p(this, "detector");
  }
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
    if (!this.assetsDirectoryPath) throw new D("AssetsDirectoryPath is required");
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.protobuf) throw new D("Protobuf is required");
    if (!this.dispatcher) throw new D("Dispatcher is required");
    if (!this.detector) throw new D("Detector is required");
  }
  reset() {
    return this.assetsDirectoryPath = void 0, this.cameraService = void 0, this.protobuf = void 0, this.analytics = void 0, this.dispatcher = void 0, this.sessionToken = void 0, this.transactionCounting = void 0, this.detector = void 0, this;
  }
}
class hE extends fE {
  constructor() {
    super(...arguments);
    p(this, "detectionFactory");
    p(this, "phaseThresholds");
    p(this, "challengeSequence");
  }
  setDetectionFactory(t) {
    return this.detectionFactory = t, this;
  }
  setPhaseThresholds(t) {
    return this.phaseThresholds = t, this;
  }
  setChallengeSequence(t) {
    return this.challengeSequence = t, this;
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
    return this.validateDependencies(), new wc(this.assetsDirectoryPath, this.cameraService, this.detector, this.detectionFactory, this.phaseThresholds, this.dispatcher, this.protobuf, this.challengeSequence, this.analytics, this.sessionToken, this.transactionCounting);
  }
}
const pE = "/dot-assets/multi-range/dot-DJT3N0It.js", $g = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, di = class di {
  constructor() {
    p(this, "lastDetails");
    p(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 0;
  }
  static getInstance() {
    return !this._instance && (this._instance = new di()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 743 * -12 + -1 * -7603 + 1 * 1313;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && $g(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    $g(n, t);
  }
};
p(di, "_instance");
let po = di;
const mE = () => "prod".toLowerCase() === "dev";
class yE extends po {
  constructor(t) {
    super();
    p(this, "events");
    this.events = t;
  }
  dispatchDetectionEvent(t) {
    this.dispatchCustomEventOnChange(this.events.DETECTION_CHANGED, t);
  }
  dispatchOnCompleteEvent(t, e) {
    const A = {};
    A.imageData = t, A.content = e, this.dispatchCustomEvent(this.events.ON_COMPLETE, A);
  }
  dispatchPhaseChangedEvent(t) {
    const e = {};
    e.phaseName = t, this.dispatchCustomEventOnChange(this.events.PHASE_CHANGED, e);
  }
  dispatchInstructionChangedEvent(t, e = zI) {
    const A = {};
    A.instructionCode = t.code, A.isEscalated = t.isEscalated ?? !1;
    const o = A;
    this.dispatchDelayedCustomEventOnChange(this.events.INSTRUCTION_CHANGED, o, e);
  }
  dispatchInstructionEscalatedEvent(t) {
    const e = {};
    e.instructionCode = t, this.dispatchCustomEventOnChange(this.events.INSTRUCTION_ESCALATED, e);
  }
  dispatchDevEvent(t) {
    if (!mE() || !t) return;
    const e = {};
    e.candidateSelectionImages = t, this.dispatchCustomEventOnChange(this.events.DEV, e);
  }
}
class wE extends yE {
  dispatchChallengeItemChangedEvent(n) {
    var t = {};
    t.currentMultiRangeLivenessChallengeItem = n, this.dispatchCustomEvent(this.events.CHALLENGE_VALUE_CHANGED, t);
  }
}
const DE = 5340 + -1256 * -3 + -7108;
class A0 {
  constructor(n) {
    p(this, "duration");
    p(this, "candidateSelectionTime", 5457 + 9767 * 1 + -22 * 692);
    p(this, "candidateSelectionImages", []);
    this.duration = n ?? DE;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > 10 * -774 + 8724 + -984;
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
    this.candidateSelectionTime = -2036 * -1 + 232 * 19 + -6444, this.candidateSelectionImages = [];
  }
}
function Ii(i) {
  const { height: n, width: t } = AC(i), e = (i.width - t) / (1 * 6133 + -8419 + 2288), A = (i.height - n) / (1 * -8048 + -3088 + -2 * -5569), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function Dc(i, n, t) {
  const { height: e, width: A } = t, o = hi(i.width, i.height), r = A - o * n * (8345 + 309 * -27), a = e - o * n * (1 * 6493 + 59 * -70 + -3 * 787), g = (i.width - r) / (-4615 + -57 * -81), s = (i.height - a) / (3777 * -1 + -1 * 5539 + -1 * -9318), C = {};
  return C.shiftX = g, C.shiftY = s, C.width = r, C.height = a, C;
}
function Nt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
const bc = (i, n) => {
  const { faceCenter: t, faceSize: e } = i, A = nC(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const g = {};
  g.x = t.x - A, g.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = a, s.left = g, X0(s);
}, kc = (i, n, t = CC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), Sc = async (i) => kc(i, 465 + 1091 * -1 + 716), bE = async (i) => kc(i, 2 * -2131 + -4237 + 8599, "image/png"), Gc = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -1699 + 1 * 6661 + -4962, 111 * 45 + -248 * 10 + 2515 * -1, t.width, t.height), t;
}, Nc = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(-10964 + -5482 * -2, -4287 + -3 * -1429, i.width, i.height);
  return t;
};
async function kE(i, n) {
  const t = Gc(i, n);
  return bE(t);
}
const Rc = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, sr = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, Rc(i, g, t);
}, lo = (i, n, t, e = 9 * 71 + 8575 + -9214) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, -36 * -255 + 1 * -3215 + -5958 * 1, 2 * 1966 + -9 * 801 + 3284), A.beginPath());
};
function SE(i, n) {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {};
  o.topLeft = A, o.width = t.x - A.x, o.height = t.y - A.y, Rc(i, o, "rgba(255, 0, 0, 0.3)", !0), lo(i, e, "lime");
}
function GE(i, n, t) {
  const e = bc(n, t);
  Object.values(e).map((A) => lo(i, A, "orange"));
}
var At;
class Fc extends Array {
  constructor(t) {
    super();
    U(this, At);
    W(this, At, t);
  }
  get size() {
    return S(this, At);
  }
  pushFixed(...t) {
    if (t.length > S(this, At)) {
      const e = t.slice(-S(this, At));
      this.push(...e);
      return;
    }
    this.length === S(this, At) && this.splice(8278 + -1191 * -5 + -14233, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-7728 + 866 * -4 + -11192 * -1);
  }
}
At = new WeakMap();
(function(i, n) {
  function t(a, g, s, C, c) {
    return bA(g - -751, C);
  }
  const e = i();
  function A(a, g, s, C, c) {
    return bA(C - 884, s);
  }
  function o(a, g, s, C, c) {
    return bA(g - -832, c);
  }
  function r(a, g, s, C, c) {
    return bA(c - 69, g);
  }
  for (; ; )
    try {
      if (-parseInt(r(286, "70[H", 276, 283, 280)) / 1 * (parseInt(r(258, "05x$", 248, 269, 261)) / 2) + -parseInt(r(259, "%Gqs", 238, 253, 250)) / 3 * (-parseInt(r(263, "coOQ", 269, 269, 253)) / 4) + parseInt(r(249, "$66n", 264, 268, 252)) / 5 * (parseInt(r(247, "@Nz1", 264, 259, 260)) / 6) + parseInt(t(-548, -549, -538, "ke)n", -554)) / 7 + -parseInt(o(-647, -635, -639, -620, "9&91")) / 8 + -parseInt(t(-570, -555, -551, "$66n", -544)) / 9 + parseInt(A(1077, 1078, "$OQZ", 1079, 1079)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ci, -160824 * -3 + 251235 + 1 * 138842);
async function NE(i) {
  function n(a, g, s, C, c) {
    return bA(g - -855, c);
  }
  function t(a, g, s, C, c) {
    return bA(s - 510, g);
  }
  function e(a, g, s, C, c) {
    return bA(c - 298, s);
  }
  const A = await window[r(-457, -428, -437, -443, ")be^") + "o"][r(-452, -443, -445, -450, "05x$") + "e"][t(700, "jJub", 714) + "t"](r(-459, -465, -438, -449, "%Gqs"), i);
  function o(a, g, s, C, c) {
    return bA(s - 143, g);
  }
  function r(a, g, s, C, c) {
    return bA(C - -636, c);
  }
  return Array[n(-653, -649, -649, -660, "%Gqs")](new Uint8Array(A))[o(342, "alB$", 351)]((a) => a[t(685, "]mew", 692) + t(710, "gmDT", 708)](-211 * -29 + -2539 * -1 + -8642)[t(709, "ke)n", 710) + t(711, "$66n", 713)](2, "0"))[e(500, 506, "alB$", 496, 505)]("");
}
function bA(i, n) {
  const t = Ci();
  return bA = function(e, A) {
    e = e - (-55 * -163 + 6817 + 1 * -15601);
    let o = t[e];
    if (bA.wLdqEd === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      bA.GSGYjM = C, i = arguments, bA.wLdqEd = !0;
    }
    const a = t[3 * -2810 + -1872 * 4 + 15918], g = e + a, s = i[g];
    return s ? o = s : (bA.GneCoM === void 0 && (bA.GneCoM = !0), o = bA.GSGYjM(o, A), i[g] = o), o;
  }, bA(i, n);
}
function Ci() {
  const i = ["tCkCWQZcO8kBWP9sW73dQuhcISoCdW", "BSobW70", "WR8eW4BcMw4", "rmkzW7ldVCoPW7yFW5O", "WRPofCkn", "WPRdJLRcIa", "WP3dGem", "fmkvW7LrWQ/dLmkWW7uEWOvFW4NdPq", "WO0vWQJcNvhcM2/cPvvxcfC", "hYtdKMmkWRPoWPi", "W6upq8ouFZ3cLKSUiSocW5q", "WQFdQSkxdaC", "oSoQW5RdS0f2CW", "mmkeWOuObHmXuW", "yCo6WP7dVstdSCoLW7VcOWNcOd/dNq", "WPOcWQVcRqe", "WO90o8onEW", "W5/dU1ldQCkLc8k1fG", "rHunj8oBgJfKkCkopmkLDq", "WOn6W53cGvJdHYm", "WOatWQdcMvhcNYtcMLnNgLa2", "W5HcW7VdRL7dPc/cVSopDmkvuG", "WOxdJCkRW53dVa", "W5NdTmkHqSkIBs3cNSosWOTRW7y", "WR3dMmoysZmVzmk5C8otWQjfWRG", "o8kgWRdcQGigdMVcO8k4W4PxW7G", "W7JcTrxdH8kvW7ScWPFdU8kJW5RcM30", "WQ/cISki", "W5ONWRioamoaimorWR8+bqZcUa", "bCooW73dHCox", "qmopW7lcHNpdJ8okD044W4PruG"];
  return Ci = function() {
    return i;
  }, Ci();
}
class RE {
  constructor(n) {
    p(this, "detectionRecord");
    p(this, "imagesWithTimestampForDuplicateDetection");
    p(this, "validationService");
    this.validationService = n, this.imagesWithTimestampForDuplicateDetection = new Fc(sC), this.detectionRecord = [];
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / BC, A = e / (-7071 + -5987 * 1 + 5 * 2612), o = n.length / (5 * 26 + 6931 + 543 * -13), r = n.slice(o - A, o + A), a = await NE(r), g = {};
    g.imageHash = a, g.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(g);
  }
  optimizeImageBeforeDetection(n) {
    return { data: Nc(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = X0(n), r = {};
    r.detectedObject = o, r.timestamp = A;
    const a = r, g = this.validationService.validateDetectedObject(o, t);
    if (g.result.get("isPresent")) {
      const s = {};
      s.image = e, s.timestamp = A, this.collectImagesForDuplicateDetection(s);
    }
    return this.detectionRecord.push(a), { detection: o, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class e0 extends RE {
  constructor(t, e) {
    super(e);
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    this.detector = t;
  }
  optimizeImageBeforeDetection(t) {
    const e = Ii(t), A = Gc(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(A.data, A.resolution, o);
    r = this.transformDetectionCoordinatesRelativeToFullFrameImage(r, Ii(t));
    const a = {};
    return a.detectedObject = r, a.image = t, a.imageData = A.data, a.timestamp = e, this.processDetectedObject(a);
  }
  transformDetectionCoordinatesRelativeToFullFrameImage(t, e) {
    return { ...t, leftEye: { ...t.leftEye, center: Nt(t.leftEye.center, e) }, rightEye: { ...t.rightEye, center: Nt(t.rightEye.center, e) }, mouth: { ...t.mouth, center: Nt(t.mouth.center, e) }, topLeft: Nt(t.topLeft, e), bottomRight: Nt(t.bottomRight, e), faceCenter: Nt(t.faceCenter, e) };
  }
}
class FE {
  constructor(n, t, e, A) {
    p(this, "instructionCodes");
    p(this, "instructionCodeCollector");
    p(this, "config");
    p(this, "analytics");
    p(this, "dispatcher");
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
    var n;
    for (const [t, e] of this.instructionCodes.entries())
      !e && this.canEscalate(t) && (this.instructionCodes.set(t, !0), this.dispatcher.dispatchInstructionEscalatedEvent(t), (n = this.analytics) == null || n.trackEscalated(t));
  }
  reset() {
    this.instructionCodes.forEach((n, t) => {
      this.instructionCodes.set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
var So, et, Pt;
class vE extends Array {
  constructor(t) {
    super();
    U(this, So, 23 * 283 + 3891 + -26 * 400);
    U(this, et, []);
    U(this, Pt, !1);
    W(this, So, t);
  }
  clearAfterTimeout() {
    if (S(this, et).length === -2898 * -1 + 7 * -566 + 1064) return;
    const t = Date.now(), e = S(this, et).findLastIndex((A) => t - A > S(this, So));
    e !== -1 && (W(this, Pt, !0), this.splice(0, e + (-8300 + -2767 * -3)), S(this, et).splice(-6 * -137 + 4181 * -1 + -3359 * -1, e + 1));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), S(this, et).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return S(this, Pt);
  }
  clear() {
    this.splice(-731 + 510 * 15 + -6919), S(this, et).splice(692 * -3 + 91 * -102 + -1893 * -6), W(this, Pt, !1);
  }
}
So = new WeakMap(), et = new WeakMap(), Pt = new WeakMap();
const Sn = {};
Sn.minFaceSizeRatio = 0.13, Sn.maxFaceSizeRatio = 0.15, Sn.scale = 0.85;
const Gn = {};
Gn.minFaceSizeRatio = 0.152, Gn.maxFaceSizeRatio = 0.172, Gn.scale = 1;
const Nn = {};
Nn.minFaceSizeRatio = 0.18, Nn.maxFaceSizeRatio = 0.205, Nn.scale = 1.18;
const Rn = {};
Rn.minFaceSizeRatio = 0.215, Rn.maxFaceSizeRatio = 0.24, Rn.scale = 1.41;
const Fn = {};
Fn.minFaceSizeRatio = 0.245, Fn.maxFaceSizeRatio = 0.275, Fn.scale = 1.61;
const vn = {};
vn.minFaceSizeRatio = 0.28, vn.maxFaceSizeRatio = 0.34, vn.scale = 1.84;
const t0 = /* @__PURE__ */ new Map([[te.ZERO, Sn], [te.ONE, Gn], [te.TWO, Nn], [te.THREE, Rn], [te.FOUR, Fn], [te.FIVE, vn]]);
class vc {
  constructor(n) {
    p(this, "controller");
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
class WE extends vc {
  constructor(t, e) {
    super(t);
    p(this, "nextIndex");
    p(this, "controller");
    this.nextIndex = e, this.controller = t;
  }
  async onCapture(t) {
    var o, r, a;
    super.onCapture(t);
    const e = this.controller.getLivenessChallengePhase();
    if (this.nextIndex !== void 0) {
      this.controller.transitionToDetection(K.LIVENESS_CHALLENGE + "_" + this.nextIndex), (e == null ? void 0 : e[this.nextIndex]) !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[this.nextIndex]), this.controller.runDetectionLoop();
      return;
    }
    (o = this.controller.getTransactionCounting()) == null || o.trackTransaction();
    const A = await this.controller.getProtobuf().createMessage({ onCaptureData: this.controller.getOnCaptureData(), sessionToken: this.controller.getSessionToken(), video: (r = this.controller.cameraService.videoRecorder) == null ? void 0 : r.getRecording() });
    this.dispatchOnCompleteEvent(A), (a = this.controller.getAnalytics()) == null || a.trackCaptureProcess(this.controller.getOnCaptureData());
  }
  onDetection(t) {
    super.onDetection(t);
  }
  async dispatchOnCompleteEvent(t) {
    const e = this.controller.getOnCaptureData(), A = e.get(K.PASSIVE_LIVENESS);
    if (!A) throw new D("On capture data was not found");
    const { detectedObject: o, resultImage: r } = A, a = {};
    a.height = r.height, a.width = r.width;
    const g = a, s = await Sc(r), C = {};
    C.detection = o, C.imageResolution = g;
    const c = {};
    c.data = C, c.image = s;
    const E = c;
    this.controller.getDispatcher().dispatchOnCompleteEvent(E, t);
  }
}
class ME {
  constructor(n, t, e, A, o, r, a) {
    p(this, "name");
    p(this, "isRunning");
    p(this, "fpsOfAllImages");
    p(this, "captureProcessStartTime");
    p(this, "cameraService");
    p(this, "imageProcessor");
    p(this, "callbacks");
    p(this, "checkToInstructionCodeMap");
    p(this, "fallbackInstruction");
    p(this, "instructionEscalation");
    this.name = n, this.cameraService = t, this.imageProcessor = e, this.callbacks = A, this.checkToInstructionCodeMap = o, this.fallbackInstruction = r, this.instructionEscalation = a, this.fpsOfAllImages = new Fc(30), this.isRunning = !0;
  }
  async run() {
    for (this.captureProcessStartTime = Date.now(); this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  onDetection(n, t) {
    const e = { ...n, avgFps: Lt(Wi(this.fpsOfAllImages)) }, A = {};
    A.detectionDetails = e, A.image = t, this.callbacks.onDetection(A);
  }
  async onCapture(n, t, e) {
    if (!this.captureProcessStartTime) throw new D("Capture process start time is not set");
    if (!this.isRunning) return;
    this.stop();
    const A = { candidateSelectionImages: e, croppedImageWithPosition: await this.getCroppedImageWithPosition(n.image, t), hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), captureProcessTime: this.getDetectionEndTime(this.captureProcessStartTime), averageFps: Lt(Wi(this.fpsOfAllImages)), deviceName: await this.cameraService.getDeviceName(), facingMode: this.cameraService.getCameraSettings().facingMode, cameraProperties: await this.cameraService.getCameraProperties(), detectionRecord: this.imageProcessor.detectionRecord, performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), timestamp: n.timestamp }, o = {};
    o.resultImage = n.image, o.detectedObject = t, o.metadata = A, o.timestamp = n.timestamp, this.callbacks.onCapture(o);
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = Nc(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), a = await kE(n, r), g = {};
    g.x = r.shiftX, g.y = r.shiftY;
    const s = g, C = {};
    return C.croppedImage = a, C.topLeftCorner = s, C;
  }
  collectAndEscalate(n) {
    return this.instructionEscalation ? (this.instructionEscalation.collect(n), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(n)) : !1;
  }
  getDetectionDetails(n, t) {
    const e = this.getDetectionEndTime(n.timestamp), A = Lt(1e3 / e);
    this.fpsOfAllImages.pushFixed(A);
    const o = {};
    o.width = n.image.width, o.height = n.image.height;
    const r = o, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), g = this.getInstructionCode(a[-2 * 3669 + 4242 + 24 * 129], t), s = this.collectAndEscalate(g), C = {};
    return C.detection = t.detection, C.instructionCode = g, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = s, { processedImage: C, detectionTime: e, fps: A, avgFps: Lt(Wi(this.fpsOfAllImages)), resolution: r };
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
    await fr(Math.max(Va.max - n, Va.min));
  }
  setThresholds(n) {
    this.imageProcessor.validationService.setThresholds(n);
  }
  isDetectionRunning() {
    return this.isRunning;
  }
}
class LE extends ME {
  constructor(t, e, ...A) {
    super(...A);
    p(this, "instructionCodeMap");
    p(this, "lastImage");
    p(this, "bestImage");
    p(this, "candidateSelection");
    this.candidateSelection = t, this.instructionCodeMap = e, this.lastImage = void 0, this.bestImage = void 0;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const A = this.getDetectionDetails(t, e);
    this.onDetection(A, t.image);
    const o = {};
    o.instructionCode = A.processedImage.instructionCode, o.isValid = e.isValid, o.takenPhoto = t, o.detection = e.detection, this.lastImage = o, await this.sleep(A.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? D.fromCameraError(e) : D.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const o = {};
    o.takenPhoto = t, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelection.newCandidate(r);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.takenPhoto = t, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(r), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    const { detection: t, takenPhoto: e } = this.bestImage || {};
    if (e && t) await this.onCapture(e, t, this.candidateSelection.getCandidateSelectionImages());
    else throw new D("Something went wrong during capturing an image");
  }
  getInstructionCode(t, e) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && (e != null && e.isValid) ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && (e != null && e.isValid) ? this.lastImage.instructionCode : t ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class OE {
  constructor() {
    p(this, "name");
    p(this, "cameraService");
    p(this, "imageProcessor");
    p(this, "callbacks");
    p(this, "checkToInstructionCodeMap");
    p(this, "fallbackInstruction");
    p(this, "instructionEscalation");
  }
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
    if (!this.name) throw new D("Name is required");
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.callbacks) throw new D("Callbacks is required");
    if (!this.checkToInstructionCodeMap) throw new D("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new D("FallbackInstruction is required");
  }
}
class Wc extends OE {
  constructor() {
    super(...arguments);
    p(this, "instructionCodeMap");
    p(this, "candidateSelection");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  setCandidateSelection(t) {
    return this.candidateSelection = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void 0, this.candidateSelection = void 0, this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new D("instructionCodeMap is required");
    if (!this.candidateSelection) throw new D("candidateSelection is required");
  }
  build() {
    return this.validateDependencies(), new LE(this.candidateSelection, this.instructionCodeMap, this.name, this.cameraService, this.imageProcessor, this.callbacks, this.checkToInstructionCodeMap, this.fallbackInstruction, this.instructionEscalation);
  }
}
class JE extends Wc {
}
var Tt, xt, dt;
class Mc {
  constructor(n) {
    U(this, Tt);
    U(this, xt);
    U(this, dt);
    W(this, Tt, n), W(this, xt, /* @__PURE__ */ new Map());
  }
  validate() {
    S(this, Tt).forEach((n) => {
      S(this, xt).set(n.name, n.evaluate());
    }), W(this, dt, void 0);
  }
  isValid() {
    return S(this, dt) === void 0 && W(this, dt, Array.from(S(this, xt).values()).every((n) => n)), S(this, dt);
  }
  get result() {
    return S(this, xt);
  }
  get validators() {
    return S(this, Tt);
  }
}
Tt = new WeakMap(), xt = new WeakMap(), dt = new WeakMap();
class Lc {
  constructor(n, t) {
    p(this, "className");
    p(this, "thresholds");
    this.className = n, this.thresholds = t;
  }
  getThresholds() {
    return this.thresholds;
  }
  setThresholds(n) {
    this.thresholds = n;
  }
}
var Go, lt;
class Ge {
  constructor(n, t) {
    U(this, Go);
    U(this, lt);
    W(this, Go, n), W(this, lt, t);
  }
  get threshold() {
    return S(this, lt);
  }
  get name() {
    return S(this, Go);
  }
  isValueBelowThreshold(n) {
    return n < S(this, lt);
  }
  isValueAboveThreshold(n) {
    return n > S(this, lt);
  }
}
Go = new WeakMap(), lt = new WeakMap();
const UE = "isNotSmall";
var No;
class Oc extends Ge {
  constructor(t, e) {
    super(UE, t);
    U(this, No);
    W(this, No, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, No));
  }
}
No = new WeakMap();
const YE = "isPresent";
var Ro;
class Jc extends Ge {
  constructor(t, e) {
    super(YE, t);
    U(this, Ro);
    W(this, Ro, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Ro));
  }
}
Ro = new WeakMap();
const PE = "isLeftEyePresent";
var Fo;
class Uc extends Ge {
  constructor(t, e) {
    super(PE, t);
    U(this, Fo);
    W(this, Fo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Fo));
  }
}
Fo = new WeakMap();
const TE = "isNotLarge";
var vo;
class Yc extends Ge {
  constructor(t, e) {
    super(TE, t);
    U(this, vo);
    W(this, vo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, vo));
  }
}
vo = new WeakMap();
const HE = "isRightEyePresent";
var Wo;
class Pc extends Ge {
  constructor(t, e) {
    super(HE, t);
    U(this, Wo);
    W(this, Wo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Wo));
  }
}
Wo = new WeakMap();
class KE extends Lc {
  constructor(n) {
    super("LivenessChallengeValidationService", n);
  }
  validateDetectedObject(n) {
    const t = this.getThresholds(), e = new Mc([new Jc(t.faceConfidence, n.confidence), new Uc(t.leftEye.confidence, n.leftEye.confidence), new Pc(t.rightEye.confidence, n.rightEye.confidence), new Oc(t.minFaceSizeRatio, n.faceSize), new Yc(t.maxFaceSizeRatio, n.faceSize)]);
    return e.validate(), e;
  }
}
class _E extends vc {
  constructor(t) {
    super(t);
    p(this, "controller");
    this.controller = t;
  }
  onCapture(t) {
    super.onCapture(t), this.controller.transitionToDetection(K.LIVENESS_CHALLENGE + "_0");
    const e = this.controller.getLivenessChallengePhase();
    e !== void 0 && this.controller.getDispatcher().dispatchChallengeItemChangedEvent(e[-2420 + -5 * -484]), this.controller.runDetectionLoop();
  }
  onDetection(t) {
    super.onDetection(t);
  }
}
class jE extends Wc {
}
const qE = "isNotDim";
var Mo;
class VE extends Ge {
  constructor(t, e) {
    super(qE, t);
    U(this, Mo);
    W(this, Mo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Mo));
  }
}
Mo = new WeakMap();
const ZE = "isNotBright";
var Lo;
class zE extends Ge {
  constructor(t, e) {
    super(ZE, t);
    U(this, Lo);
    W(this, Lo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(S(this, Lo));
  }
}
Lo = new WeakMap();
const XE = "isSharp";
var Oo;
class $E extends Ge {
  constructor(t, e) {
    super(XE, t);
    U(this, Oo);
    W(this, Oo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(S(this, Oo));
  }
}
Oo = new WeakMap();
const Ax = "isNotPitched";
var Jo;
const pa = class pa extends Ge {
  constructor(t, e) {
    super(Ax, pa.calculatePitchAngleAccelerationThreshold(t));
    U(this, Jo);
    W(this, Jo, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return aC * Math.sin(t * (Math.PI / (8150 + -11 * -449 + -3 * 4303)));
  }
  evaluate() {
    const { z: t } = S(this, Jo) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Jo = new WeakMap();
let qr = pa;
const ex = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, tx = (i, n) => Object.values(i).every((t) => ex(t, n)), ox = "isNotOutOfBounds";
var Uo, ut;
class nx extends Ge {
  constructor(t, e, A) {
    super(ox, t);
    U(this, Uo);
    U(this, ut);
    W(this, Uo, e), W(this, ut, A);
  }
  evaluate() {
    const t = Dc(S(this, ut), this.threshold, Ii(S(this, ut))), e = bc(S(this, Uo), S(this, ut));
    return tx(e, t);
  }
}
Uo = new WeakMap(), ut = new WeakMap();
class ix extends Lc {
  constructor(t) {
    super("PassiveLivenessValidationService", t);
    p(this, "acceleration");
  }
  validateDetectedObject(t, e) {
    const A = this.getThresholds(), o = new Mc([new Jc(A.faceConfidence, t.confidence), new Uc(A.leftEye.confidence, t.leftEye.confidence), new Pc(A.rightEye.confidence, t.rightEye.confidence), new Oc(A.minFaceSizeRatio, t.faceSize), new Yc(A.maxFaceSizeRatio, t.faceSize), new $E(A.sharpnessThreshold, t.sharpness), new VE(A.brightnessLowThreshold, t.brightness), new zE(A.brightnessHighThreshold, t.brightness), new nx(A.outOfBoundsThreshold, t, e), new qr(A.devicePitchAngleThreshold, this.acceleration)]);
    return o.validate(), o;
  }
}
class rx {
  createDetection({ params: n, type: t }) {
    const { cameraService: e, candidateSelectionDuration: A, controller: o, currentIndex: r, detector: a, multiRangeLivenessChallengeItem: g, nextIndex: s, phaseThresholds: C } = n;
    switch (t) {
      case K.PASSIVE_LIVENESS:
        return this.createPassiveLivenessDetection(o, e, a, A, C, g);
      case K.LIVENESS_CHALLENGE:
        return this.createLivenessChallengeDetection(o, e, a, A, C, g, r, s);
      default:
        throw new Error("Unknown phase: " + t);
    }
  }
  createPassiveLivenessDetection(n, t, e, A, o, r) {
    const a = new jE(), g = this.getThresholdsWithFaceSize(o[K.PASSIVE_LIVENESS], r), s = new ix(g), C = new _E(n), c = new e0(e, s), E = new A0(A), I = this.createInstructionEscalation(n);
    return a.setName(K.PASSIVE_LIVENESS), a.setCameraService(t), a.setImageProcessor(c), a.setCallbacks(C), a.setCandidateSelection(E), a.setCheckToInstructionCodeMap(Sa), a.setInstructionCodeMap(OA), a.setFallbackInstruction(OA.FACE_NOT_PRESENT), a.setInstructionEscalation(I), a.build();
  }
  createLivenessChallengeDetection(n, t, e, A, o, r, a, g) {
    const s = new JE(), C = this.getThresholdsWithFaceSize(o[K.LIVENESS_CHALLENGE], r), c = new KE(C), E = new WE(n, g), I = new e0(e, c), x = new A0(A), d = this.createInstructionEscalation(n);
    return s.setName(this.prepareIndexedPhaseName(K.LIVENESS_CHALLENGE, a)), s.setCameraService(t), s.setImageProcessor(I), s.setCallbacks(E), s.setCandidateSelection(x), s.setCheckToInstructionCodeMap(Sa), s.setInstructionCodeMap(OA), s.setFallbackInstruction(OA.FACE_NOT_PRESENT), s.setInstructionEscalation(d), s.build();
  }
  prepareIndexedPhaseName(n, t) {
    return t === void 0 ? n : n + "_" + t;
  }
  getThresholdsWithFaceSize(n, t) {
    if (t === void 0 || !t0.has(t)) throw new D("Invalid challenge");
    const e = t0.get(t);
    if (!e) throw new D("Invalid challenge");
    const A = { ...n };
    return A.maxFaceSizeRatio = e.maxFaceSizeRatio, A.minFaceSizeRatio = e.minFaceSizeRatio, A;
  }
  createInstructionEscalation(n) {
    return new FE(new vE(gr.timeout), n.getDispatcher(), { threshold: gr.threshold, instructions: gr.instructions }, n.getAnalytics());
  }
}
(function(i, n) {
  function t(a, g, s, C, c) {
    return rA(a - 903, g);
  }
  function e(a, g, s, C, c) {
    return rA(a - 299, s);
  }
  function A(a, g, s, C, c) {
    return rA(s - 988, c);
  }
  const o = i();
  function r(a, g, s, C, c) {
    return rA(a - -180, g);
  }
  for (; ; )
    try {
      if (parseInt(r(513, "r*ij", 626, 605, 416)) / 1 + parseInt(r(413, "*jfz", 327, 386, 326)) / 2 + -parseInt(t(1457, "Z$9L", 1344, 1437, 1397)) / 3 + -parseInt(A(1529, 1642, 1639, 1647, "zV!o")) / 4 + -parseInt(A(1651, 1754, 1682, 1754, "gcje")) / 5 + parseInt(r(435, ")b3F", 455, 329, 411)) / 6 + parseInt(e(921, 988, "$J@l", 963, 921)) / 7 * (parseInt(t(1520, "zE[z", 1529, 1592, 1511)) / 8) === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Bi, -1487 * -739 + 1118758 + -1346347);
function rA(i, n) {
  const t = Bi();
  return rA = function(e, A) {
    e = e - (2581 + -1259 * 4 + -1 * -2935);
    let o = t[e];
    if (rA.HndLld === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      rA.WDqwFw = C, i = arguments, rA.HndLld = !0;
    }
    const a = t[1405 * -5 + -769 + 7794], g = e + a, s = i[g];
    return s ? o = s : (rA.aJFqpw === void 0 && (rA.aJFqpw = !0), o = rA.WDqwFw(o, A), i[g] = o), o;
  }, rA(i, n);
}
function Bi() {
  const i = ["W77cLSkUzZG", "W7rBcSouoW", "WPJcKSkVhxi", "FSozmSkvW4q", "W5yqgSoqyq", "WR7cV8oaf8kQ", "eCo+hg9b", "Bw0lWQNdQG", "B0i8WRNdPW", "W40McSkhra", "W7uWcSknrq", "W5xcQSkfnWbJESkFW7VcIeZdPmoz", "WPvHpuOn", "BbyLWQDkdmk4", "W5ZcHahdRSo8", "DSozW7WjFG", "FCoCECk+W74", "W4i5cCoSwW", "WPzYAmklo07dUCktfSoTWOFcImkKjq", "vCkyiHtdHW", "nCk/WR3cLmkK", "jv/cRSkOW7G", "lCkljGip", "WQuVmCotqq", "WQZdNmoEt1K", "zSohWQtdLCkS", "fmosW6f9za", "emk+FsNdOG", "W4tcUWddHCod", "u8keWOBcGCkR", "jSo9d15/", "mdDFWPVcUq", "WOdcSmolzsa", "rSkAWOxdV8kF", "WRmuo8o/Aq", "C8o0iWZcOq", "eCkMW7NcQbm", "WOldLSk+WOBcKq", "bsRcL8kUW4S", "ig06Bmkx", "kN/cQSo5W4q", "WRv6DCkvWOu", "Bmo6W4BcL38", "WPHzW7rgzG", "WQBdLmkcWRVcTG", "cMiim8kx", "WPbCW6v7vW", "W5lcKmoYW4BdLeGNlmoqvmoZW4Kp", "iLJcG8kOW6G", "t8oGW7VdISo/", "uCoRW6XssW", "suJdRCo3WQK", "la5JWPZcUW", "WOqMW6ZdLSkH", "W7edcmoRrq", "wSo7WR7cLee", "fgyKpmoo", "W74rymowua", "W6vgWRtcOSoi", "v8oKWQ/cRLa", "W7hcHmkEtCo4", "W6JcNSkTCcO", "fgNdVSoIhG", "WOnHphnX", "WPBcKmkSntG", "jeWucCk1", "BSoHW6ztiW", "edDsWPFcPG", "W5pcJI7dNCoE", "WOW2WPFcGCkS", "WQzxtmkZomoNWOysc8orW4n+W6i", "tSkiAZddMa", "bs4rWRfG", "W4vgW7jSrq", "DSkcWRhcT8kQ", "DNKAWRu", "wmoyWQldRmoo", "A1RdRmodWO8", "aMKSc8o/", "W6pcRmkglmk3", "cmohWOxdS2O", "xYVdRmkNWQFcMe84WQ0MdfRdIW", "WOWWn8oTwa", "m8kqWO7dQ8ki", "tgifW67dIW", "W6uzta3cTW", "oMCjfSkV", "vmoWW4f8va", "WO8kgLddIq", "A8k6gmowWOKIWOxcOfBcLeVcOa", "WQRcQf/dJtSkD2ZdOfJcSmkAiW", "CSoJW6T9CW", "nCoCdmkeW5O", "WQBdSXflWQ4", "o8o+rSkf", "qCkhWPdcG8kv", "WPFcHmkWACov", "Bd/cUCo+WPa", "W5rEWQlcSSkP", "umoAW7ldRmoi", "twBdNSoBWQK", "vvqcW6tdKaVcOGdcQLxcOJqTWRW", "W4qWsCodyW", "WOFcGmk6cHO", "WR7cUSoxgmk7", "W73cRs7cGfW", "W7i9WRxcM8ot", "DCkphCk4W4i", "WOVcJSkRarq", "W4NcOCk0D1C", "WQjqW5nFFq", "sLbmaSk2", "WOlcJSoWieq", "iHi/Bmkx", "rhy7WQZdJq", "uSorW45Xjq", "nvb1WOtcIW", "W4tcQMldRCo+", "WROKmSophG", "W7VcGSkrr8oWeMO", "WOJcH216jW", "WQCLfmkSW7m", "cSo/W5/dTNm", "WPvyhSozia", "F3mzWP/dNW", "DSkeWO7cS8ky", "W4JcNCkxjdu", "FL4mgCoF", "lmoUgCkxW6u", "BCoLW4OkDq", "W6GzW7/dGSoD", "gMCkcCkL", "WQpdVmkkWQ7cVW", "lCoIdWZcIG", "W5inWPhdL8kO", "W7VdUCkItam", "vfikWPVdOq", "W4KLnmoB", "o1dcRSokW4q", "WRHZW6BdICog", "WPbbBeul", "D8klr2JdICooW6/dNCosvsXFWQm", "WRpdNXtdHmoz", "DSorW5jzqa", "WQqNsSoxwa", "bJCcWPxcSG", "W6ZcUCkqFq", "WQv1bbXL", "nmkfWQtcJ8kg", "t8oOWPZcK0y", "Fv85qSol", "WPBcV8obgsm", "ECoRW6tdUSo6", "WRJdM2lcMCkCaNmYW4VdKmkgWROK", "W7j0imoWwW", "W7y0d8oVBG", "WOe4amkmWOC", "nCoofYRcLW", "WOVdHbb8W4u", "WPTCq8kkWPK", "WRb7eIaX", "Daempmos", "WORcKmkMW4xcPW", "aGxcNZVdPW", "W4ZdLIxdS8og", "WPq8A8kaWOG", "iSoVeqJcQG", "B8kNWOpdTbldV8oRoeJdHhtcRmou", "aNzVbmkk", "zmkJW7bEsa", "zdiXWRLT", "WR0mW4lcV8oq", "Fxuij8ol", "W53cUXNdImom", "uYK4WRpdHa", "w8oMWQlcNhe", "W5fembWv", "WQJcHCkJtCo4", "s8osW6jQEq", "FCo6WQNcSvq", "WQ3dV8ooiLihh8oIWRpcR8koW5xdIW", "WQbKW6i5EG", "bmkHWPavkGvqn8koWPFcKSkE", "WPi2nSo5hW", "WOGFW6ldNCog", "oNhdOCoA", "s14zkCoF", "WRpcUuqBbW", "dbmDA8kV", "W47dTWdcLv8", "vaBdOCkBW6S", "WPeqnmklDG", "g07dRmo1pW", "WQGzmSkrW4W", "s8k8W7b/ua", "W4NcT8oGiSon", "eSomW5NdPmo0", "kvq6p8kJ", "x0tdLCkrW4K", "WRldRSo0BvK", "WPCne8kNW58", "WQtcKCk7eq8", "W5DTDH7cOq", "W4XLWQZcV8ox", "ah/cSCo6", "Dh0RhCon", "WPO+pHhdGG", "WOiJWOBcHCoN", "WQeiW77dGSo4", "s14cWO7cTG", "W4vtvCk6hW", "WQmXmCkrW4y", "lJHzWPFcOq", "WPjsf0ur", "AvKyjmot", "k2/dLSowaG", "W47cMSopiCk5", "W4TAkSowkW", "ASoozreK", "W6m/cCo/W6qxWQLDW4ZdVmosfr0", "bSoBhgnx", "WQC3t8oryq", "l8ozgWvT", "W4BcLrNdRmo3", "WRexWPJcJSo+", "xSoBW6Pala", "WPFcJ8oapmot", "B8ouyGq", "WRuZW6BcTSo3", "WQ7cI8opwq0"];
  return Bi = function() {
    return i;
  }, Bi();
}
function ax() {
  function i(C, c, E, I, x) {
    return rA(c - -98, E);
  }
  function n(C, c, E, I, x) {
    return rA(I - 688, x);
  }
  const t = i(574, 537, "dyAZ") + i(476, 446, "zE[z") + i(638, 589, "FDZ$") + n(1327, 1415, 1429, 1384, "v9%p") + g("FCr$", 357, 411, 400) + i(451, 564, "%OzM") + n(1351, 1366, 1341, 1346, "$J@l") + n(1314, 1315, 1334, 1394, "yi7z") + i(585, 561, "GbbM") + i(480, 559, "Yxh%") + g("TQ)g", 287, 399, 356) + g("QFe2", 480, 419, 398) + r(1095, 1126, "gcje", 1096, 1183) + r(1082, 1183, "$J@l", 1148, 1148) + n(1285, 1363, 1319, 1337, "0tH&") + i(319, 387, "EymH") + s(1366, 1358, 1320, 1269, "gWP6") + i(614, 578, "zE[z") + r(1175, 1074, "FDZ$", 1231, 1119) + s(1386, 1439, 1477, 1578, "xCn]") + r(1322, 1298, "EymH", 1297, 1208) + n(1317, 1200, 1289, 1294, "^4LE") + i(524, 573, "dyAZ") + r(1360, 1219, "3Zk4", 1386, 1327) + i(415, 439, "G#e$") + r(1202, 1167, "^4LE", 1057, 1102) + s(1317, 1226, 1333, 1283, "Z$9L") + g("3Zk4", 281, 286, 287) + n(1318, 1200, 1352, 1243, "64ck") + g("xCn]", 276, 285, 282) + i(571, 510, "yi7z") + s(1339, 1502, 1410, 1447, "dyAZ") + s(1434, 1542, 1485, 1389, "$J@l") + n(1371, 1337, 1436, 1335, "64ck") + n(1342, 1299, 1456, 1358, "CN7s") + g("r*ij", 236, 265, 214) + s(1340, 1427, 1398, 1289, "ZEJp") + i(401, 414, "YmTX") + n(1381, 1156, 1186, 1270, "Yxh%") + n(1326, 1360, 1399, 1308, "v9%p") + s(1368, 1425, 1416, 1397, "Gpk9") + g("FDZ$", 329, 140, 234) + i(516, 521, "CN7s") + g("^4LE", 397, 466, 380) + r(1071, 1203, "xCn]", 1198, 1146) + r(1300, 1192, ")b3F", 1325, 1248) + i(469, 383, "v9%p") + s(1418, 1540, 1489, 1486, "Z$9L") + s(1365, 1263, 1370, 1338, "EymH") + g("v9%p", 360, 415, 319) + n(1143, 1311, 1343, 1241, "GbbM") + r(1223, 1086, "*jfz", 1094, 1153) + s(1473, 1476, 1519, 1503, "CN7s") + r(1350, 1251, "EyMC", 1342, 1320) + s(1385, 1378, 1420, 1351, "c*pR") + r(1143, 1315, "CN7s", 1247, 1250) + s(1479, 1345, 1460, 1544, "^4LE") + n(1362, 1344, 1339, 1344, "dyAZ") + r(1151, 1152, "0tH&", 1176, 1125) + s(1562, 1459, 1458, 1378, "c*pR") + g("FDZ$", 283, 318, 345) + n(1273, 1225, 1336, 1233, "rc]R") + s(1302, 1318, 1363, 1333, "*jfz") + i(650, 594, "pOwr") + r(1375, 1351, "TGh8", 1416, 1309) + i(498, 579, "64ck") + r(1230, 1123, "Ialc", 1317, 1207) + s(1344, 1517, 1422, 1334, "rc]R") + r(1345, 1243, "0tH&", 1196, 1310) + n(1145, 1184, 1167, 1217, "$J@l") + g("GbbM", 177, 289, 261) + r(1054, 1210, "Ialc", 1109, 1134) + r(1266, 1219, "Ialc", 1224, 1154) + i(586, 473, "0tH&") + r(1362, 1333, "0tH&", 1369, 1263) + n(1341, 1217, 1370, 1327, "Hg0n") + r(1269, 1198, "Hg0n", 1141, 1160) + s(1333, 1326, 1419, 1455, "yi7z") + g("FDZ$", 485, 425, 390) + s(1268, 1346, 1381, 1277, "QFe2") + i(347, 403, "EymH") + i(287, 396, "6zEa") + r(1197, 1326, "Yxh%", 1260, 1222) + s(1489, 1450, 1496, 1516, "r%IF") + i(346, 421, "dyAZ") + i(559, 550, "zV!o") + i(449, 418, "r%IF") + g("CN7s", 152, 283, 264) + i(493, 425, "GbbM") + r(1103, 1135, "3Zk4", 1239, 1145) + i(594, 493, "Vw5F") + g("^4LE", 380, 242, 316) + n(1294, 1277, 1371, 1389, "p[mA") + r(1227, 1167, "Lzct", 1111, 1186) + g("zV!o", 265, 230, 248) + n(1181, 1285, 1342, 1267, "EymH") + g("dyAZ", 282, 130, 202) + i(590, 518, "7qk)") + r(1342, 1231, "$J@l", 1126, 1234) + r(1243, 1239, "c*pR", 1195, 1230) + g("FCr$", 209, 209, 200) + r(1252, 1229, "nB#N", 1254, 1229) + i(404, 496, "c*pR") + g("Lzct", 377, 326, 378) + i(530, 611, "gcje") + r(1260, 1253, "gWP6", 1284, 1266) + g("r%IF", 218, 277, 309) + s(1452, 1522, 1437, 1371, "$J@l") + g("yi7z", 394, 372, 333) + g("$@cE", 437, 368, 387) + s(1463, 1396, 1367, 1479, "UfgT") + n(1285, 1244, 1457, 1355, "7qk)") + r(1086, 1277, "TGh8", 1300, 1196) + n(1181, 1197, 1121, 1180, "QFe2") + s(1525, 1463, 1466, 1428, "YmTX") + r(1252, 1218, "GbbM", 1242, 1283) + s(1230, 1426, 1324, 1410, "Z$9L") + r(1347, 1214, "TQ)g", 1201, 1245) + s(1574, 1487, 1521, 1450, "pAPs") + i(344, 423, "Ialc") + g("Yxh%", 234, 216, 270) + s(1340, 1447, 1414, 1311, "nB#N") + n(1080, 1122, 1120, 1194, "zV!o") + r(1093, 1192, "Hg0n", 1056, 1127) + r(1212, 1252, "ZEJp", 1213, 1205) + i(621, 526, "FDZ$") + r(1092, 1114, "EymH", 1167, 1180) + r(1212, 1131, "FCr$", 1181, 1232) + n(1116, 1135, 1296, 1218, "*jfz") + r(1185, 1080, "0tH&", 1162, 1162) + s(1411, 1529, 1497, 1465, "rc]R") + n(1091, 1274, 1175, 1177, "CN7s") + i(487, 486, "Vw5F") + r(1137, 1065, "Z$9L", 1178, 1103) + i(591, 610, "nB#N") + s(1371, 1306, 1308, 1309, "64ck") + n(1111, 1209, 1250, 1179, "r%IF") + g("TQ)g", 397, 341, 364) + s(1224, 1280, 1304, 1370, "%OzM") + g("%OzM", 474, 433, 414) + r(1391, 1230, "p[mA", 1211, 1301) + r(1077, 1212, "Yxh%", 1146, 1133) + i(545, 557, "p[mA") + i(594, 525, "$@cE") + n(1254, 1267, 1454, 1342, "UfgT") + i(477, 531, "xCn]") + n(1262, 1149, 1211, 1236, "FCr$") + n(1346, 1267, 1232, 1293, "Vw5F") + r(1177, 1230, "EymH", 1155, 1144) + g("CN7s", 319, 238, 229) + i(404, 412, "FCr$") + n(1267, 1250, 1209, 1315, "yi7z") + r(1353, 1365, "gWP6", 1330, 1304) + r(1174, 1286, "FCr$", 1148, 1203) + n(1340, 1304, 1278, 1391, "xCn]") + n(1344, 1406, 1432, 1348, "EymH") + n(1222, 1324, 1229, 1250, "0tH&") + g("3Zk4", 294, 170, 198) + r(1356, 1397, "0tH&", 1187, 1289) + r(1286, 1422, "FDZ$", 1260, 1319) + i(338, 405, "CN7s") + i(623, 539, "FqTE") + i(608, 540, "QFe2") + g("r%IF", 421, 375, 344) + g("pOwr", 288, 353, 292) + i(617, 505, "Z$9L") + g("%OzM", 380, 388, 289) + i(391, 434, "pAPs") + n(1150, 1194, 1193, 1186, "FCr$") + s(1530, 1523, 1506, 1584, "0tH&") + r(1405, 1229, "CN7s", 1252, 1311) + g("nB#N", 383, 348, 395) + n(1280, 1248, 1243, 1277, "Lzct") + g("*jfz", 454, 284, 357) + i(551, 606, "p[mA") + r(1307, 1169, "EyMC", 1364, 1284) + s(1292, 1306, 1359, 1332, "EymH") + n(1388, 1358, 1375, 1287, "UfgT") + s(1376, 1494, 1396, 1506, "c@eL") + s(1423, 1554, 1450, 1410, "$G#M") + r(1191, 1162, "0tH&", 1145, 1107) + i(431, 440, "r%IF") + r(1067, 1012, "Yxh%", 1039, 1124) + n(1227, 1141, 1322, 1239, "EyMC") + r(1243, 1228, "r%IF", 1169, 1167) + s(1486, 1502, 1455, 1435, "$@cE") + r(1183, 1324, "gWP6", 1343, 1260) + n(1434, 1407, 1299, 1368, "xCn]") + g("6zEa", 169, 223, 273) + g("ZEJp", 391, 356, 279) + g(")b3F", 223, 302, 285) + n(1205, 1281, 1128, 1238, "Ialc") + n(1221, 1334, 1324, 1306, "r%IF") + g("Vw5F", 282, 94, 209) + i(483, 470, "CN7s") + r(1133, 1085, "$J@l", 1121, 1185) + i(587, 502, "EyMC") + n(1256, 1117, 1231, 1206, "yi7z") + n(1209, 1342, 1265, 1257, "nB#N") + i(300, 410, "rc]R"), e = window[r(1284, 1231, "r*ij", 1370, 1318)](t), A = window[s(1393, 1456, 1425, 1327, "Gpk9")](e), o = hC(A);
  function r(C, c, E, I, x) {
    return rA(x - 620, E);
  }
  const a = {};
  a[r(1127, 1241, "$J@l", 1035, 1131)] = Z0;
  function g(C, c, E, I, x) {
    return rA(I - -288, C);
  }
  function s(C, c, E, I, x) {
    return rA(E - 824, x);
  }
  return a[i(604, 581, "FCr$")] = IC, window[r(1224, 1277, "zV!o", 1321, 1261) + "o"][i(555, 513, "FCr$") + "e"][s(1389, 1420, 1405, 1350, "rc]R") + g("Lzct", 304, 293, 271)](i(452, 422, "Z$9L"), o, a, !0, [i(653, 552, "64ck") + "pt"]);
}
async function gx(i) {
  const n = await ax();
  function t(o, r, a, g, s) {
    return rA(s - -643, o);
  }
  const e = {};
  e[A(717, 617, 678, 576, "YmTX")] = Z0;
  function A(o, r, a, g, s) {
    return rA(r - 39, s);
  }
  return window[t("c@eL", -93, -132, -19, -79) + "o"][t("Hg0n", -38, -132, -143, -112) + "e"][t("ZEJp", -54, -157, -170, -148) + "pt"](e, n, i);
}
(function(i, n) {
  const t = i();
  function e(a, g, s, C, c) {
    return ee(s - -421, g);
  }
  function A(a, g, s, C, c) {
    return ee(C - -435, g);
  }
  function o(a, g, s, C, c) {
    return ee(C - -872, s);
  }
  function r(a, g, s, C, c) {
    return ee(a - 162, c);
  }
  for (; ; )
    try {
      if (parseInt(o(-508, -501, "ZJU@", -504, -494)) / 1 * (parseInt(o(-504, -501, "C[!F", -513, -518)) / 2) + -parseInt(o(-478, -496, "K!uB", -488, -483)) / 3 * (-parseInt(A(-52, "b7^[", -58, -62, -72)) / 4) + -parseInt(o(-510, -502, "4t[&", -502, -497)) / 5 * (-parseInt(e(-53, "j9gO", -61, -63, -48)) / 6) + parseInt(e(-45, "PY[[", -47, -56, -36)) / 7 + parseInt(A(-63, "0Ko)", -72, -66, -64)) / 8 * (-parseInt(r(527, 520, 516, 529, "K!uB")) / 9) + -parseInt(A(-54, "MZ7C", -45, -53, -46)) / 10 * (parseInt(A(-68, "Tutb", -74, -69, -56)) / 11) + -parseInt(A(-63, "@qAu", -60, -57, -48)) / 12 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Qi, -18 * 5798 + 275951 * -2 + 1 * 979171);
function ee(i, n) {
  const t = Qi();
  return ee = function(e, A) {
    e = e - (263 + 601 * -12 + -1827 * -4);
    let o = t[e];
    if (ee.Ijjmrx === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      ee.DKrUvX = C, i = arguments, ee.Ijjmrx = !0;
    }
    const a = t[-9295 + -4129 * 2 + 17553 * 1], g = e + a, s = i[g];
    return s ? o = s : (ee.ROzMsT === void 0 && (ee.ROzMsT = !0), o = ee.DKrUvX(o, A), i[g] = o), o;
  }, ee(i, n);
}
function Qi() {
  const i = ["W7/dKCkgE8kgW5qPW4igWQBcNh7cRW", "WOKQW785nW", "WQdcT8orbmkloKZdSG", "W5pcGN7cJq3dQCkOWOVdLG", "lSoMv8oNW5BdLJldGW", "W54jgSoXBt0bnmocW5hcUG", "q3NcSGC4W5y8iW", "rf8WA8oyrSk3xSk+uCk/xa", "WO7dRIxdGSkOW7JdNmkbgW", "WQpcTSkprCkAc0ZdOtlcGq", "vmk7WRfDW4NdHxhcPq", "qtnOW6uUrSkIWQNdNCoN", "WOVcP2ZcPmkcDwdcHmoa", "WO3dVCoHygxdQcxdOXmJW4a", "igddR8kfuSolW6D1lSk/W6vs", "W4n8qZldQSo+W5VdRSkTerDCaq", "nmo/rmkVaCk3xSkDWQRcTaNcOGu", "W5f2WRX/zYv1WRforCoXcW", "omoZWOJdISkuc2pcNfRdIv/dJmke", "dItcUCo4WQ0Qi8kj", "WQRcU1RdMmoyW4NcImoB", "W6SxWQRdH8oiWPxdIfaC", "WQRdQSkbW7zmmCoTW7DcW6pcOConW5W", "W5r3zr1aW6ekbSkDWOFcLmog", "WQWHiG", "WRlcPCkkEhmFW77cMH7cKmkQWO7dVG"];
  return Qi = function() {
    return i;
  }, Qi();
}
async function sx(i) {
  const { iv: n, key: t, message: e } = await mC(i), A = await gx(t), o = {};
  o[r(510, 499, 508, "m7c*")] = A, o.iv = n, o[r(506, 506, 511, "b7^[") + "ge"] = e;
  function r(a, g, s, C, c) {
    return ee(s - 128, C);
  }
  return o;
}
(function(i, n) {
  const t = i();
  function e(a, g, s, C, c) {
    return kA(a - 487, g);
  }
  function A(a, g, s, C, c) {
    return kA(a - -67, c);
  }
  function o(a, g, s, C, c) {
    return kA(s - 780, g);
  }
  function r(a, g, s, C, c) {
    return kA(c - -542, a);
  }
  for (; ; )
    try {
      if (-parseInt(o(1253, "cshB", 1223, 1238, 1162)) / 1 * (parseInt(e(886, "2OW$", 914, 920, 910)) / 2) + -parseInt(A(412, 462, 471, 453, "962l")) / 3 * (parseInt(A(362, 361, 367, 398, "e9%)")) / 4) + parseInt(A(338, 345, 321, 380, "t1&O")) / 5 + -parseInt(A(361, 424, 400, 391, "WUPY")) / 6 * (parseInt(o(1180, "DmDZ", 1239, 1189, 1281)) / 7) + -parseInt(A(333, 378, 374, 278, "iBFf")) / 8 * (parseInt(o(1169, "uSBu", 1158, 1162, 1109)) / 9) + parseInt(e(918, "HU]E", 939, 902, 895)) / 10 + parseInt(r("nmDI", -128, -105, -104, -138)) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ei, -5483 * 225 + 585143 + 1511166);
function ve(i, n, t, e, A) {
  return kA(e - -294, i);
}
function kA(i, n) {
  const t = Ei();
  return kA = function(e, A) {
    e = e - 363;
    let o = t[e];
    if (kA.QPXoYl === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      kA.TSZukS = C, i = arguments, kA.QPXoYl = !0;
    }
    const a = t[-7646 * 1 + -7090 + -8 * -1842], g = e + a, s = i[g];
    return s ? o = s : (kA.SqYpAG === void 0 && (kA.SqYpAG = !0), o = kA.TSZukS(o, A), i[g] = o), o;
  }, kA(i, n);
}
function WA(i, n, t, e, A) {
  return kA(i - -70, n);
}
function Ee(i, n, t, e, A) {
  return kA(t - -569, e);
}
function xe(i, n, t, e, A) {
  return kA(n - -167, t);
}
function MA(i, n, t, e, A) {
  return kA(e - -250, n);
}
function Ei() {
  const i = ["WOfFcXvQWQ8hcmk0WPGkW6BcMq", "rmksrSoKeW", "WPtcOYZdVG", "o8ovgtfM", "CXtdTdBdVW", "WOtdSmkXWPJcJq", "WOr9WOupWQy", "abFcVSkguq", "fCoMotvc", "evaJWPpcQa", "igHlCCkc", "fuq1WR/cQG", "W5BcSdSDWPK", "kSoXjtq", "uJ7cO18", "d8oKdIHS", "EaddOttdQq", "eGNcKSkerW", "dfFdV8kcW6q", "W6O0WPhdPce", "W7DZWPpdOW", "W68hWQZdLYq", "sSkOxL3dIG", "WOtdOtSUWO/dOCo/hG", "WOJcLSofW4bQns/dJW", "hvy2", "keRcOgtcRWL9wCkzW5nBxCk2", "wZKYqgW", "tXpdOmkBWQW", "WOnWW4ldKwG", "W6brWO7dVHq", "WQlcLvr0", "WRj+kt/dLW", "WOxcMZ0JWR3dGCoc", "WPrQWPGlWOu", "W7/cK8oO", "WPFcJKbftCoLWOLe", "WRZdSIeQW4G", "WPpdTh5ABmoEWPq", "W7xcPdepWRO", "qSkIt8oQbq", "C0xcMCkCW5y", "W5f4WP8HW6K", "WOf9WO8dWPC", "umkGW4/dOG", "WOldGCkMWPBcIq", "erBcKSkxra", "W7e1W4xdK8k2", "W5BcVX4TWP0", "cmk8W50", "WRD4dZhdKq", "W6XqW57cT8kc", "gCowDhyI", "lmoYhWZcQmktW7qrs8oAW6K", "WQW/dCkgmWegW7SixG50za", "WORcQSkZWRNcKW", "WRddIsKQW5S", "WPG8W4BcVZq", "WOhdQ8k6WPdcIG", "WQaQWR99WRm", "W63cSNn7WORdK8kEWPv7WPxdGCo2jhW", "W5SfWP/dIXm", "WR/cHJRcOeO", "WOBdRmkDWR3cUW", "W5jbWOmNW64", "WR/cMmkeWRSy", "E8kZrvJdNW", "jrVcLSk0W6ldGSoyba", "FIldLte", "ewJdTCkd", "FHJdOtddLW", "WPlcQXuZwq", "m3BdU8kfW7e", "uMqhWOy", "exZdVbZdHSkmtmosW78JgZG", "edvqW5ldMSkEWQhcMdqLAfK", "xGtdLCkwWRK", "W59xW6BcPJ8", "W4yYW4ddQ8kW", "r8kcW5ldV8ki", "mNvuumkI", "uCo6jmokWOy", "W5jaW6FcOHK", "W4vJWP46", "rSkhrG", "WR/cRLzNEa", "W5euuu8B", "fSoqg8kZu3DvWPbGWQNdRW", "WR/cSvjIEG", "r3CpWO7cPW", "bCkrWOO", "WQdcLv52FG", "W5CSWPdcNIW", "FSkZt1tdRG", "W4NcSCop", "W6RdJwRdTGP8nLpcMh18zxi", "W6LGsmo9ya", "o8oXlYDx", "dgJdTW", "gSoGWPFcOCkBWQuuh8okW40", "WOXQWPG", "nmkmWQWeFW", "WRtcISoflmos", "W4tdVCo2W6hcKLddGCooDmoU", "fX/cGCkkra", "WRxcGCoukmov", "WRZcIxHfuW", "cSkPW504W5O", "WODFWPGnWPC", "WQORWQvGWRu", "W6iIW4tdU8kV", "d8kPW5C0W6S", "rIxcOKtcJq", "WOBdOwjEW6NcS8kmdgFcTe85W6q", "W5ddG8oJ", "W5hdTCoLW6Dm", "W5RcOCkTtfW", "d8kUWOjKWQ8", "bN7dK8kCW7y", "muPEtSku", "WQauWRn9WRS", "W4VcUCohDSo/", "mwLyuSkd", "zJqocmosW67cNK/cRSo+qZLd", "jXVdGSofWOBdMCommMlcH8k2", "W4JdG8oDnhldQ8kTWQhcQSkGfq", "s8kbW4JdNCkq", "sdxdJIldQa", "W69mW5lcTCkJ", "WQTqW6NcJNrjof/cV8oXWOHUbCog"];
  return Ei = function() {
    return i;
  }, Ei();
}
class cx {
  async [WA(372, "#)iL") + WA(365, "a7JZ") + WA(391, "#)iL") + MA(158, "8hUo", 81, 144) + xe(258, 202, "P4io")](n) {
    function t(I, x, d, l, Q) {
      return MA(I - 118, d, d - 48, I - -129);
    }
    const { Image: e } = UA;
    function A(I, x, d, l, Q) {
      return MA(I - 62, Q, d - 298, l - -31);
    }
    function o(I, x, d, l, Q) {
      return MA(I - 243, d, d - 261, l - -224);
    }
    const r = await n[c(-80, -114, "Cjfn", -79) + c(-67, -113, "WUPY", -111) + "r"](), a = new Uint8Array(r), g = {};
    g[A(87, 72, 48, 96, "jzOi")] = a;
    function s(I, x, d, l, Q) {
      return WA(Q - 763, d);
    }
    const C = e[t(53, 45, "rT&7") + "y"](g);
    if (C)
      throw o(-88, -58, "08PT", -66) === A(200, 162, 170, 143, "nmDI") ? _0x544ff7[c(-127, -144, "y3oT", -191) + s(1052, 1104, "962l", 1083, 1112)](_0xa5edc7) : D[t(7, -39, "du95") + s(1225, 1233, "eU*M", 1221, 1181)](C);
    function c(I, x, d, l, Q) {
      return MA(I - 439, d, d - 437, l - -305);
    }
    const E = {};
    return E[s(1077, 1175, "HU]E", 1119, 1114)] = a, e[c(-202, -173, "08PT", -183) + "e"](E);
  }
  [WA(364, "RGXj") + WA(387, "yOhq") + ve("m$HL", 38, 118, 69) + MA(166, "e9%)", 179, 140) + ve("@Uao", 110, 136, 118) + ve("y3oT", 218, 219, 184)](n) {
    function t(s, C, c, E, I) {
      return MA(s - 84, c, c - 30, C - 312);
    }
    function e(s, C, c, E, I) {
      return Ee(s - 282, C - 370, I - 422, E);
    }
    const { VideoStream: A } = UA;
    function o(s, C, c, E, I) {
      return Ee(s - 239, C - 348, I - 1444, c);
    }
    const r = A[g("dFYC", 296, 246) + "y"](n);
    function a(s, C, c, E, I) {
      return Ee(s - 20, C - 184, C - 140, I);
    }
    function g(s, C, c, E, I) {
      return MA(s - 422, s, c - 404, C - 170);
    }
    if (r)
      throw a(83, 37, 46, -6, "nmDI") !== a(-54, -28, -49, -37, "I88j") ? D[e(210, 250, 215, "*jfJ", 264) + t(517, 535, "SWRn")](r) : _0x34b057[e(392, 384, 344, "t1&O", 344) + o(1324, 1265, "08PT", 1312, 1293)](_0x1d3ae1);
    return A[g("@NoZ", 375, 421) + "e"](n);
  }
  async [ve("amGy", 68, 42, 91) + MA(163, "eU*M", 208, 219) + WA(325, "KxC5") + ve("HU]E", 227, 175, 181) + MA(205, "QeDw", 181, 166) + "e"](n) {
    const { v4: { Metadata: t } } = UA, e = { ...n };
    e[s(-428, "@Uao", -398) + s(-457, "zQ2^", -484)] = UA[a(719, 736, "vgSX", 680) + A(767, 756, 754, "vgSX")][a(676, 679, "P4io", 643)];
    function A(c, E, I, x, d) {
      return xe(c - 49, I - 548, x);
    }
    function o(c, E, I, x, d) {
      return Ee(c - 381, E - 53, I - 1328, x);
    }
    function r(c, E, I, x, d) {
      return xe(c - 476, c - -715, E);
    }
    function a(c, E, I, x, d) {
      return WA(x - 273, I);
    }
    e[r(-486, "P4io") + A(921, 872, 863, "(MLa") + A(742, 750, 765, "KxC5") + "n"] = a(591, 581, "RGXj", 570);
    const g = e;
    function s(c, E, I, x, d) {
      return xe(c - 396, I - -682, E);
    }
    const C = t[a(589, 663, "*jfJ", 642) + "y"](g);
    if (C)
      if (A(762, 736, 798, "WUPY") === r(-399, "amGy")) {
        const { VideoStream: c } = _0xf3ee21, E = c[a(663, 709, "s7t#", 673) + "y"](_0x5c1c97);
        if (E) throw _0x144933[a(718, 672, "y)u5", 674) + r(-475, "i8#s")](E);
        return c[A(891, 838, 829, "*jfJ") + "e"](_0x523bdd);
      } else throw D[o(1119, 1143, 1162, "BV](") + s(-434, "m$HL", -413)](C);
    return t[s(-475, "gXKG", -439) + "e"](g);
  }
  async [MA(175, "jzOi", 175, 130) + Ee(-139, -140, -85, "I88j") + WA(353, "vgSX") + Ee(-109, -108, -115, "du95")](n) {
    function t(I, x, d, l, Q) {
      return ve(Q, x - 214, d - 87, l - 1177);
    }
    const { Content: e } = UA, { iv: A, key: o, message: r } = await sx(n);
    function a(I, x, d, l, Q) {
      return xe(I - 422, x - -116, Q);
    }
    function g(I, x, d, l, Q) {
      return WA(x - -315, l);
    }
    function s(I, x, d, l, Q) {
      return Ee(I - 12, x - 427, l - 790, I);
    }
    const C = { token: new Uint8Array(o), iv: A, schemaVersion: cC, bytes: new Uint8Array(r) }, c = e[s("@Uao", 656, 559, 600) + "y"](C);
    if (c) {
      if (t(1307, 1203, 1310, 1264, "m$HL") !== s("08PT", 584, 703, 641)) throw D[a(260, 203, 267, 158, "T[Ff") + t(1305, 1376, 1416, 1357, "vgSX")](c);
      {
        const { architecture: I, fullVersionList: x, model: d, platform: l, platformVersion: Q } = _0x3f50ba ?? {};
        return { userAgent: _0x3a7442, architecture: I, platform: l, model: d, platformVersion: Q, browserVersions: x == null ? void 0 : x[g(22, 45, 17, "QeDw")](({ brand: f, version: m }) => ({ name: f, version: m })) };
      }
    }
    const E = e[s("y)u5", 627, 535, 589) + "e"](C);
    return e[a(195, 173, 220, 150, "BV](") + "e"](E)[t(1364, 1323, 1368, 1330, "eU*M") + "h"]();
  }
  [ve("mY$j", 129, 187, 173) + xe(341, 278, "j0)#") + xe(206, 246, "08PT") + "ge"](n) {
    function t(C, c, E, I, x) {
      return WA(x - -92, I);
    }
    function e(C, c, E, I, x) {
      return MA(C - 153, C, E - 453, c - 1171);
    }
    const { Blob: A } = UA.v4, o = A[t(285, 330, 279, "uSBu", 298) + "y"](n);
    if (o)
      if (s(-40, "gXKG") !== e("WUPY", 1374, 1423)) {
        const { Blob: C } = _0xdf20c5.v4, c = C[t(237, 275, 205, "nmDI", 264) + "y"](_0x17dedc);
        if (c) throw _0x42ed5f[t(284, 332, 342, "8hUo", 323) + t(222, 289, 312, "a7JZ", 263)](c);
        const E = C[t(282, 346, 250, "uPV%", 300) + "e"](_0x27edab);
        return C[t(335, 346, 267, "2OW$", 284) + "e"](E)[r(1002, 1005, 944, 895, "962l") + "h"]();
      } else throw D[g(14, 48, 87, 31, "y)u5") + e("I88j", 1370, 1306)](o);
    function r(C, c, E, I, x) {
      return WA(E - 627, x);
    }
    const a = A[t(200, 203, 227, "du95", 220) + "e"](n);
    function g(C, c, E, I, x) {
      return WA(I - -370, x);
    }
    function s(C, c, E, I, x) {
      return Ee(C - 43, c - 379, C - 61, c);
    }
    return A[t(270, 295, 213, "8hUo", 235) + "e"](a)[g(84, 70, -28, 23, "gXKG") + "h"]();
  }
  async [WA(296, "m$HL") + MA(164, "NIcA", 165, 183) + Ee(-227, -121, -178, "6crX") + Ee(-106, -189, -167, "SWRn") + "ls"](n, t) {
    const { architecture: e, fullVersionList: A, model: o, platform: r, platformVersion: a } = t ?? {};
    function g(s, C, c, E, I) {
      return Ee(s - 301, C - 348, E - 976, c);
    }
    return { userAgent: n, architecture: e, platform: r, model: o, platformVersion: a, browserVersions: A == null ? void 0 : A[g(776, 892, "QeDw", 837)](({ brand: s, version: C }) => ({ name: s, version: C })) };
  }
  async [ve("j0)#", 158, 168, 112) + WA(380, "gXKG") + xe(323, 285, "amGy") + xe(304, 247, "QeDw") + MA(216, "@Uao", 149, 172) + MA(214, "y)u5", 197, 177) + xe(250, 297, "KxC5") + "on"](n) {
    function t(g, s, C, c, E) {
      return MA(g - 444, s, C - 310, g - -390);
    }
    const e = await this[r(332, 298, 275, 238, "NIcA") + r(115, 114, 177, 199, "*jfJ") + a("m$HL", 116) + a("zQ2^", 18) + a("j0)#", 115)](n[a("(MLa", 113) + o(443, 442, 396, 435, "vgSX") + "ge"]), A = {};
    A[r(177, 155, 203, 149, "HU]E")] = e, A[r(169, 205, 165, 135, "DmDZ") + t(-203, "@NoZ", -179) + o(430, 362, 392, 379, "e9%)")] = n[o(437, 433, 418, 483, "8hUo") + r(203, 218, 231, 249, "@NoZ") + r(114, 120, 169, 206, "*jfJ")];
    function o(g, s, C, c, E) {
      return ve(E, s - 254, C - 266, C - 297);
    }
    function r(g, s, C, c, E) {
      return WA(C - -136, E);
    }
    function a(g, s, C, c, E) {
      return xe(g - 377, s - -207, g);
    }
    return A;
  }
}
function Tc(i) {
  const n = [], t = K.LIVENESS_CHALLENGE + "_";
  for (const [e, A] of i.entries())
    if (e.startsWith(t)) {
      const o = e.slice(t.length), r = parseInt(o, 5518 + -12 * -149 + -7296);
      if (!isNaN(r) && o === r.toString()) {
        const a = {};
        a.phase = e, a.data = A, a.index = r, n.push(a);
      }
    }
  return n.sort((e, A) => e.index - A.index);
}
function IA(i, n, t, e, A) {
  return QA(n - 602, i);
}
function VA(i, n, t, e, A) {
  return QA(e - -512, t);
}
(function(i, n) {
  function t(g, s, C, c, E) {
    return QA(C - -641, c);
  }
  function e(g, s, C, c, E) {
    return QA(g - 797, E);
  }
  const A = i();
  function o(g, s, C, c, E) {
    return QA(g - 519, E);
  }
  function r(g, s, C, c, E) {
    return QA(C - -318, c);
  }
  function a(g, s, C, c, E) {
    return QA(g - -740, c);
  }
  for (; ; )
    try {
      if (-parseInt(a(-336, -418, -243, "MAEV", -147)) / 1 * (-parseInt(o(1167, 1164, 1131, 1087, "BFNn")) / 2) + -parseInt(a(-196, -108, -260, "61fj", -394)) / 3 * (-parseInt(t(-144, 160, -21, "v$C3", 31)) / 4) + parseInt(r(166, -62, 16, "mxuG", -114)) / 5 + parseInt(r(303, 218, 362, "vlcO", 439)) / 6 + parseInt(e(1421, 1284, 1302, 1608, "z&vu")) / 7 + parseInt(e(1410, 1239, 1618, 1586, "Qt*n")) / 8 * (parseInt(t(13, 110, -14, "2c06", 142)) / 9) + -parseInt(t(-113, -321, -247, "kHR3", -197)) / 10 * (parseInt(o(1079, 1074, 990, 863, "EnP%")) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(xi, 980865);
function We(i, n, t, e, A) {
  return QA(n - -918, e);
}
function xi() {
  const i = ["kCk0CJ/dGq", "W7JcQ8kRkH/cHmk0W7u", "FmkLCGK", "C8kYj8kwW44", "e8oTW6HEkG", "k348", "k8opWPyQcG", "WQr+WPtcL8ke", "WQnvg8kocW", "Bmk2Ca00", "FSkLo8kvW7m", "dSkrEd7dHG", "omkAEd7dLG", "WQtdSmkn", "WQFdUdBdMCoo", "WRuDW5/cPrO", "W7C4y8kNkW", "W6VcVwjsWRS", "smkCW5WNWPO", "WQ3cQSo9z8kq", "q8kOj8kuW4O", "WQNdRSkNbsO", "WPVdLSoJxSol", "WPHpgYNdVa", "qSkEWR8wDW", "W53cJKu", "lmoEumoCaq", "WPWtW7X6WOK", "p8k1W4FdH1G", "WP/dPcdcU8oE", "ecBcQmktbW", "W5RcS8krW49y", "CvxdRa", "FmoUWQq", "WQZcHSowq8kn", "WOlcNcRdVGW", "WRSMuSo2WQ8", "dwddVXKe", "WPNcIMK0WRq", "WOZdJtVcPmoD", "l2a/xY0", "gHRcNCkibq", "xSkNWR0aBq", "wCkgW4aeWOW", "WQ/dRSkrdtO", "WP54W5NcNSkE", "WQXlcZNdGW", "WRu+W4f1Ba", "WQ7cGx8YWQS", "ECkTlCkvW4O", "WRpdSspdImol", "hJZcNq", "xSk7WQiapG", "WQmzW7VcQdy", "nSkXW4m", "xSoOWOfGeW", "tmkdW4mpWPe", "WQRdO8kyWPtdOG", "qKFcI3VdRG", "pSksW5/dJvK", "CCkQimkrW54", "WQJdIsFcQSoE", "WPNdNcZcQCoY", "W7eWAmkHkG", "WO/cHwSI", "dCkukLRcRG", "W7ZcU24ttW", "W653W4u", "WQRdTmktWOhdSW", "omkIW5BdG08", "CSoNWRWZfG", "W4pcV3qvtG", "WRJdOhFdI8oh", "zetdOa", "FSozx2pcOq", "WO7cHcJdJIK", "WRutW4TOAW", "mmofWOzlWQS", "WQtdSmkAWPddPq", "W7X8W5u", "W5ZdP8kb", "CSkZW5iSW6S", "WP/cSmo6tmkS", "hf7dQsKy", "W77cJw4atG", "wItcTwXsW4/cR8ostCktWQJcPSkz", "WPJcOgKZWQi", "WQtdTmkpWPldSW", "vmk5m8kGW58", "zeddOaq", "W4VdS8k9o8o9WP/cP2VdISkhW4XRW7xdTG", "WORdRmo6xSoi", "WP/dUdVcOSop", "WRGUtmkZWRO", "WPFcOSoUASk3", "WRpdTspdJmki", "WO7cPSoTqmkM", "DCk1n8kIW5q", "ySkYj8ku", "kmonhSk3", "nSobemkMW7m", "WQSQs8o2WR8", "WOtcPsRdQty", "eSo8W71Fka", "WPHrxSkvWQm", "aCoYW5L1gW", "ywVdMwWb", "F8ostNxcSq", "W5JcN1dcKYO", "WP5WW5NcI8kG", "WOxdUmklWPddUa", "WQKUxmo2WO8", "W4ddTmoOWOf0", "WPpdUIJcO8oC", "m8obWPyRgW", "C8kYlCkhW4O", "WP/dPtZcOCop", "WQ0DW6ZcVq", "WOVcUdNdQbe", "sSkkW78cWP4", "WO8qsCkvW7m", "sKBcTNFdQW", "iSocWOKNaq", "WQLDdSkonG", "WR1zhSkEcq", "FSogWRuUba", "Cu3dOrfi", "dcNcM8kz", "ggBdVZi", "WRmrW6dcPYK", "W4RcNWtcMIa", "jmoEt8owkq", "ySkbW6WlWO8", "FSoztNxcOa", "WRC1W6TOxa", "j8oGW71ila", "bmkqkLRcHW", "FCkidmksuMxdRSoRy8osxq", "WPVdICo+tCoE", "o8kyDcNdSq", "WQJdPgtcJmks", "pNiHtGC", "W4JdT8k/o8kDW7ZdNthdNmk0", "bCkQf8k5kG", "WQ7dV2tcKa", "gqZcQJvhm8oxWOJdPCkWy3y", "nSojemkZ", "WO5WW4dcMSkG", "WRRdSspdJmom", "W7hcP8kEW55Y", "WOuDW6e", "WPFdV8oYB8ou", "ax7dRt0o", "W57dOCkfWRVcRa", "W53cNue", "jXJcTabbdCovhwy", "wSk6WPSVxq", "nSobeSkTW7m", "W4NdSSkeWRVcRa", "W7hcTmksW5z0", "a8kdo1RcVG", "CSoAx2pcPG", "wf3dVgic", "smkbW4OzWOW", "lmkLn8k9gq", "CSk1jSkX", "WRP5W5xcImki", "WQXocmkkeq", "r8kTxG0q", "q8k9WRirrG", "FCkhW44zWPO", "pCkIW5ZdJ34", "iCotWPfhWQe", "pmkuzW", "zL/cI2Xk", "gCoTW69iba", "WPNdHg8MWRC", "dupdVJuF", "W7JcSNyBwa", "D8o2W58OW6G", "W6iVDmkVoq", "WOPztSkrW6W", "WQOzW6JcRaG", "WRmIW4fNAW", "W4JcS0NcLY4", "Amo4WRe9aa", "W4JcK0VcMdO", "W4xcO8koW45D", "W6a/DmkJgW", "mCoBhmkKW6u", "FCodWRSifW", "s8kdW44EWRi", "WPLtrCkgW6C", "A8kHyqKJ", "WOexW7TOWOq", "n8oggq", "vapcOx7dRG", "BmoQWQn6cW", "WPpdSmo7t8os", "zgZdQaDv", "W5aVCSkNnG", "Dmk5m8kGW58", "WRpdHgBcG8kg", "wCoFWOXMjG", "n8k5W4xdH1u", "bMFdQtqF", "eINcJa", "WPddJsRcUq", "oSkGW4FdL0K", "zCo2W4uOW7G", "CCoYW4i+W7i", "WQxdSstdMmoe", "W6tdPSkEW5nq", "WQDphd3dTa", "WQ95hdNdOa", "W7lcHCkpW5rb", "BSkOEqKU", "WRVdO8ksWOC", "W6iVsSkVkq", "FxFcILbB", "WQ7dHqFcT8o8", "i8oeeq", "WR/dV27cG8kv", "j8oBdSkaW6G", "WPPJW5hcI8km", "W5VcN3tcNIG", "W4FdTmkiWPlcRW", "WO8aW6POWPq", "amk5eCk9hq", "WQ/dQhJcKCki", "hgBdVJ9l", "W43cTCo4WOHH", "cSkqyYtdPG", "qeBcLx/dUW", "k8osga", "WPNcT8oSA8kn", "E8kLEbWn", "W6y4ACk0", "W793W73cNrm", "WQ7dUCk2at0", "wmk8WR8x", "F8owtNhdSG", "W7GJCmkJmq", "lSo/wCoraq", "WPxcOYddVW", "WRRdTtddImoB", "WPxcTM0PWQa", "sfdcQ2ldPG", "t8k6WRebFW", "bCkFov7cGW", "k8oCwq", "j3y4xY4", "WQ3dTmkjWPddTq", "WQZdONJcI8kv", "A8o+WQmY", "sCkRlCkeW5W", "lNy4wYK", "WP7dRcZcUCoE", "WOBcTIO", "W4tcOmoQ", "lxyCvIS", "WQmDW7VcRbG", "WPH0t8kaW6y", "j8oleSkXW6q", "mSkqmfZcRW", "WQO8tmoqWRq", "WRuuW4vYFG", "cYhcKCkzhW", "rCo4WOTl", "C07cJG", "W7lcM8oUWPPO", "WOXfwCkC", "l8ojB8omaa", "EmkHo8koW5S", "W7xcU24xsa", "WR7dVCkpas0", "W6pcS8kpW54r", "cSkNgmk1gG", "WOJcPw/dQXa", "W6VdLSkUWP/cIW", "WQFdVCkY", "wCkgW4ipWOW", "bSkqpv7cMq", "WQNdUCkSedS", "ESoAsG", "WO9rtCkr", "W6hcQ2KA", "W7LZW4lcHWW", "xSkVWR0v", "E0dcIG", "CSoXWRuocG", "qmkHo8kvW5C", "WOHrr8keW44", "h8oPW69tla", "W4VcLKrpWPW", "wCohhelcJ8omW4FdHG", "aSkMoCk5gG", "bCkYmvxcVG", "l8oOsmoafa", "FCofvx3cLW", "fSk1W4ddKvO", "DCkskCksW5C", "WO7dIsdcOCoi", "w8kkW50dWPK", "WQ47xG", "t8kGWQqOEW", "WQCXW5CMCq", "fSoVW7K", "W4NdUSkpWRtcQW", "DxhdVXTs", "WRyIW4TRwG", "W75pWRBcRJeSW63dGmkk", "DvldVJDo", "W6/cLM4", "ESkGW4OqWPm", "WPLcECkDW6C", "wIdcUM9sW4VcQmoJwmkbWPVcPSk3", "W5NcLfdcUYW", "nIxcNCkBcq", "pSosuCoafW", "shhdHCkicWGDtmoj", "kCkCCWpdKa", "WRq1W5bJFa", "WPVdImoYt8oA", "W5tdV8kmWRpcQW", "WQnqcmkfaG", "WP9ct8kvW7C", "sCk8WRueAG", "n8kCDdG", "DmogWRuUba", "W7tcRSkCW5DD", "smk/W50fWOS", "WQBdSmkNcJK", "W4uhe8ktW4KUxCkHWPa", "WP/cSmo6BSkJ", "FSo6t3ZcPG", "WQJdPgtcJmkZ", "WRlcIYWRWQ4", "WPGMs8o7WOW", "xmoOWOTkaG", "DSkYj8klW7S", "imoAWOaMjG", "WQXfgHNdSq", "W5JdL8kbWQ7cUq", "WQvFbJG", "AmojjxRcG1fzW5JcNSknW6TV", "WRFcTSoLE8kT", "Bmo1W6e7W5a", "kCkqEci", "tKZcRa", "Amo+W5aQW74", "aCkbkK7cUa", "W53cL1q", "W4FcP8koW4Hy", "WQiUtW", "WPpcPd3dQdS", "sN7dI8oiwK1yvCoEe8kcnSoH", "W4ZcM1FcHsa", "BSk1cCkSW4C", "WQZdPCkCWPhdTW", "sfNdRgyv", "n8opWOGY", "W5JcS3SvtG", "WQ5ida", "uCo4qSoPumkjemkZgCkEmLfJ", "WP7dJt3cQmoy", "jCouWOm", "WRyXW4DJta", "WQXybZhdLq", "W63cG25fWQO", "W4RcGSoIWOrH", "WR4HWOhdG1nUW5z3W7JdImoa", "zvhdUwqt", "WOz0W5RcNmkz", "WPFdQmoYsmop", "W4/cTCkJd8kcimolW7pcHmo/rCkXW5ZcOq", "WQ9zgZ3dTW", "W5NcIvFcUYW", "W47dK2ujWOySWRNdQW", "WP/dIYBcV8oF", "WQOcsSo/WQG", "W5VcN1a", "WQiQs8oYWRG", "WOuGW65NWOC", "W4dcR8kjW5nL", "W7ZcG2rw", "nmkIW57dPL4", "mCondSkWW6K", "e8kUemkvba", "WQ7dSmk/W4j0iYKR", "WOJdOmoLuSoD", "xmkPpSkdW5a", "WQhdSxFdGCob", "s8koW4WpWQW", "iHBcTeiFtmkrlxRcSa1jWR4", "WR3dUCkG", "WQRdQeFcI8kx", "WP1esW", "ACofvwi", "W70iw8oFpmo+l3P1ba", "D0tdGHPL", "WOJcVXVdOHq", "WOJdOmoBuSon", "bmkukL7cQq", "B8oEvx7cGa", "WRqlW67cRH4", "ymkHo8kvW5C", "FSoLWQq/fW", "fmkqe17cUq", "WOuNW6HkWRy", "CSoMWRuPeq", "zKtdOXfv", "gCotu8oxea", "bCk8o0JcUq", "WO0vW6O", "DCoYW7WOW6G", "WQjDhq", "W7VcO8ktW5Xf", "WORdHZRcPmop", "WQ4xW6e", "W5lcTCo4W4bI", "jSonWOOWcW", "xmoOWPDgfW", "W7tdH8kSWRxcVa", "WRmEW6dcUXy", "WQ3dGt3cPCoV", "W6xcT3uCEq", "WR5dbtNdOW", "iCooWPzHWRS", "WQVdU8kNktS", "l8k5W5ZdJgK", "BSoMWOtcLG3dKSkwW7ddNc9fimkL", "WOJcHwe3", "WQXXECkNW4O", "WPhcTchdQaW", "WQvzdSkF", "zftdVXeg", "WRSguSoYWRS", "WR7dVSkZbWq", "zetdQtTe", "WPvktW"];
  return xi = function() {
    return i;
  }, xi();
}
function QA(i, n) {
  const t = xi();
  return QA = function(e, A) {
    e = e - (-1 * -1226 + 911 * -4 + 2699 * 1);
    let o = t[e];
    if (QA.nRBWek === void 0) {
      var r = function(c) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let I = "", x = "";
        for (let d = 0, l, Q, f = 0; Q = c.charAt(f++); ~Q && (l = d % 4 ? l * 64 + Q : Q, d++ % 4) ? I += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          Q = E.indexOf(Q);
        for (let d = 0, l = I.length; d < l; d++)
          x += "%" + ("00" + I.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const C = function(c, E) {
        let I = [], x = 0, d, l = "";
        c = r(c);
        let Q;
        for (Q = 0; Q < 256; Q++)
          I[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          x = (x + I[Q] + E.charCodeAt(Q % E.length)) % 256, d = I[Q], I[Q] = I[x], I[x] = d;
        Q = 0, x = 0;
        for (let f = 0; f < c.length; f++)
          Q = (Q + 1) % 256, x = (x + I[Q]) % 256, d = I[Q], I[Q] = I[x], I[x] = d, l += String.fromCharCode(c.charCodeAt(f) ^ I[(I[Q] + I[x]) % 256]);
        return l;
      };
      QA.JKaUex = C, i = arguments, QA.nRBWek = !0;
    }
    const a = t[-9258 + -4 * 2397 + 18846], g = e + a, s = i[g];
    return s ? o = s : (QA.Caaoof === void 0 && (QA.Caaoof = !0), o = QA.JKaUex(o, A), i[g] = o), o;
  }, QA(i, n);
}
function LA(i, n, t, e, A) {
  return QA(e - 341, i);
}
function PA(i, n, t, e, A) {
  return QA(i - -58, A);
}
var B0, Q0;
class Ix extends cx {
  constructor(t) {
    function e(a, g, s, C, c) {
      return PA(g - 657, g - 241, s - 318, C - 35, a);
    }
    function A(a, g, s, C, c) {
      return We(a - 118, a - 1281, s - 444, s);
    }
    function o(a, g, s, C, c) {
      return LA(s, g - 454, s - 83, C - 28);
    }
    super();
    p(this, Q0);
    p(this, B0);
    function r(a, g, s, C, c) {
      return IA(s, c - -1028);
    }
    [this[e("v$C3", 1135, 948, 1354) + A(1008, 915, "6)l4") + A(775, 575, "F7vk") + A(778, 709, "U836")], ...this[A(1061, 1082, "BFNn") + r(214, 292, "a&YO", -85, 88) + A(734, 644, "L^ts") + o(780, 865, "gM3t", 843) + "se"]] = t;
  }
  async [(Q0 = PA(401, 535, 573, 440, "GqUW") + VA(-192, 107, "Z7^U", -45) + VA(-97, -250, "F7vk", -100) + We(-626, -499, -391, "F7vk"), B0 = LA("K9*Y", 811, 577, 708) + VA(-166, 6, "zqeB", -91) + VA(-202, -193, "g@z0", -47) + VA(-224, -142, "If4U", -3) + "se", IA("vlcO", 920) + LA("61fj", 858, 970, 1003) + VA(-295, -59, "gM3t", -109))]({ onCaptureData: t, sessionToken: e, video: A }) {
    function o(l, Q, f, m, y) {
      return LA(l, Q - 171, f - 391, f - -1074);
    }
    const r = t[o("gM3t", -157, -103)](K[s(221, 237, "R6de", 251, 364) + s(46, 2, "u&Hs", 56, -35) + a("jsNT", -359, -173, -178) + "S"]);
    if (!r) {
      if (x("jsNT", 1320, 1371, 1219) === a("gvu4", -454, -97, -267)) return;
      throw new D(a("B#si", -330, -371, -166) + I("gM3t", 589, 409, 419) + x("MAEV", 1308, 1130, 1467) + I("GqUW", 540, 543, 631) + o("MAEV", 133, -48) + s(184, 103, "H!5^", -65, 26) + s(-2, -74, "gvu4", -45, 128) + x("K9*Y", 1175, 1261, 1396) + o("RwO8", -313, -289));
    }
    function a(l, Q, f, m, y) {
      return We(l - 325, m - 212, f - 11, l);
    }
    const g = Tc(t);
    if (g[s(121, 304, "U836", 356, 304) + "h"] === -22 * -125 + 23 * 353 + -10869) {
      if (a("dIxv", -374, -292, -301) !== a("GqUW", -290, -256, -110)) throw new D(o("U836", 87, -36) + x("GqUW", 1076, 986, 1079) + s(254, 327, "BPBI", 15, 143) + x("BFNn", 1222, 1357, 1443) + s(128, 16, "2c06", -36, 107) + I("mxuG", 689, 719, 522) + I("R6de", 563, 405, 465) + I("(BhR", 879, 833, 1048) + s(241, 318, "0L%O", 352, 275));
      return;
    }
    function s(l, Q, f, m, y) {
      return VA(l - 403, Q - 210, f, y - 194);
    }
    const C = {};
    C[o("Z7^U", -77, -242) + s(-173, -107, "u&Hs", 21, 13) + o("MAEV", -506, -358) + s(341, 532, "MAEV", 424, 331) + a("61fj", -72, -11, -106) + a("jsNT", -214, -61, -114)] = g, C[I("B#si", 865, 783, 1064) + s(383, 301, "v$C3", -6, 169) + I("p*@a", 506, 391, 715) + s(14, 305, "Qt*n", -38, 95) + x("Z7^U", 1085, 1245, 931) + a("MAEV", -537, -423, -425)] = r, C[s(228, 529, "RwO8", 318, 318) + I("$51b", 930, 1138, 919) + "en"] = e;
    const c = await this[s(-48, 228, "BFNn", 206, 98) + s(-97, -110, "gvu4", 48, 56) + a("61fj", -259, -153, -321) + s(144, 180, "u&Hs", 165, 265) + "e"](C), E = {};
    function I(l, Q, f, m, y) {
      return PA(Q - 268, Q - 468, f - 421, m - 211, l);
    }
    E[a("2iqp", 80, 46, 11) + I("&p%m", 817, 634, 629) + x("2c06", 935, 1052, 1049) + I("F7vk", 591, 476, 403) + I("K9*Y", 814, 1011, 1025) + a("jsNT", -532, -354, -377)] = r, E[a("vlcO", -461, -411, -253) + o("RwO8", -405, -261) + o("g@z0", -336, -268) + x("p*@a", 1031, 1102, 854) + a("vlcO", -373, -357, -249) + s(1, 261, "p*@a", 125, 197)] = g, E[a("If4U", -288, -24, -206) + I("$51b", 510, 678, 486)] = c, E[s(52, 111, "R6de", 290, 112)] = A;
    function x(l, Q, f, m, y) {
      return PA(Q - 706, Q - 357, f - 124, m - 469, l);
    }
    const d = await this[o("dIxv", -76, -157) + s(-14, -20, "p*@a", -196, 7) + I("dIxv", 764, 572, 815) + s(333, 221, "RwO8", -65, 120)](E);
    return this[x("BFNn", 1064, 1187, 1093) + I("F7vk", 790, 749, 583) + s(342, -11, "mUdJ", 176, 150) + x("%IP]", 1204, 1381, 1293)](d);
  }
  async [We(-367, -442, -428, "2iqp") + IA("z&vu", 1174) + IA("EnP%", 904) + We(-507, -293, -117, "0L%O") + "e"]({ livenessChallengeOnCaptureData: t, passiveLivenessOnCaptureData: e, sessionToken: A }) {
    const o = [...e[f("0L%O", 1652, 1453) + f("mUdJ", 1549, 1509)][x(1399, 1473, "B#si", 1266) + f("R6de", 1535, 1502) + a("L^ts", 1243, 1208, 1239, 1117) + a("WyB(", 711, 876, 993, 854) + Q("qVSl", 1231, 1072) + f("z&vu", 1552, 1614) + x(1127, 1183, "gM3t", 1345)]], r = e[f("H!5^", 1432, 1388) + a("gM3t", 1338, 1404, 1215, 1242)][l(128, 30, "WyB(", -60) + Q("vlcO", 1236, 1037) + f("RwO8", 1366, 1503)][x(1201, 1608, "BFNn", 1409)](({ detectedObject: b }) => b);
    function a(b, w, F, M, P) {
      return VA(b - 75, w - 137, b, P - 1039);
    }
    t[a("0L%O", 1227, 1067, 1077, 1118) + "ch"](({ data: b }) => {
      function w(X, tA, YA, $A, aA) {
        return a(tA, tA - 417, YA - 477, $A - 151, aA - -76);
      }
      function F(X, tA, YA, $A, aA) {
        return x(X - 69, tA - 245, aA, X - -852);
      }
      function M(X, tA, YA, $A, aA) {
        return a($A, tA - 221, YA - 421, $A - 478, tA - -254);
      }
      function P(X, tA, YA, $A, aA) {
        return x(X - 67, tA - 138, aA, YA - 101);
      }
      function _(X, tA, YA, $A, aA) {
        return x(X - 427, tA - 222, YA, tA - -776);
      }
      if (_(379, 511, "i!Ge") !== _(777, 655, "JH$4")) {
        o[_(359, 471, "gvu4")](...b[F(262, 136, 415, 467, "ejUR") + _(542, 476, "(BhR")][P(1603, 1486, 1541, 1711, "L^ts") + M(838, 765, 796, "ah#Y") + P(1220, 1035, 1196, 1337, "K9*Y") + M(905, 704, 574, "EnP%") + M(947, 982, 915, "u&Hs") + _(298, 378, "T)7f") + F(314, 334, 142, 168, "kd38")]);
        const X = b[F(335, 257, 448, 457, "2iqp") + F(538, 701, 320, 716, "R6de")][M(693, 882, 1076, "kHR3") + M(807, 948, 787, "l@i)") + F(404, 536, 374, 323, "RwO8")][_(693, 671, "WyB(")](({ detectedObject: tA }) => tA);
        r[M(744, 808, 755, "l@i)")](...X);
      } else throw new _0x30c69f(M(912, 875, 686, "BPBI") + _(390, 609, "H!5^") + F(480, 376, 354, 610, "r^09") + w(649, "R6de", 722, 883, 820) + F(417, 595, 241, 343, "BPBI") + F(382, 601, 531, 177, "T)7f") + P(1596, 1367, 1400, 1391, "p*@a") + _(256, 289, "H!5^") + F(220, 172, 95, 196, "v$C3"));
    });
    const g = NC(), s = await RC(), C = await this[f("U836", 1519, 1464) + l(18, 210, "EnP%", 144) + l(214, 63, "EnP%", 112) + a("Z7^U", 771, 1041, 1015, 976) + "ls"](g, s), { cameraProperties: c, croppedImageWithPosition: E } = e[x(1200, 1264, "0L%O", 1206) + Q("a&YO", 1110, 916)], I = await this[l(-186, -34, "R6de", 14) + a("BPBI", 782, 1163, 847, 991) + x(1401, 1475, "Qt*n", 1381) + a("JH$4", 1404, 1190, 1068, 1205) + x(1191, 1147, "gvu4", 1178) + x(1514, 1178, "a&YO", 1331) + Q("ejUR", 1053, 1050) + "on"](E);
    function x(b, w, F, M, P) {
      return IA(F, M - 142);
    }
    const d = { ...c };
    d[l(13, 26, "B#si", 132) + x(1212, 1006, "ejUR", 1051) + a("ejUR", 1210, 1013, 1087, 1009) + l(366, -31, "dIxv", 153) + f("kd38", 1602, 1588)] = I;
    function l(b, w, F, M, P) {
      return PA(M - -503, w - 31, F - 191, M - 221, F);
    }
    d[a("H!5^", 1289, 1326, 1335, 1231) + l(-108, 72, "vlcO", 74) + f("qVSl", 1453, 1542)] = C;
    function Q(b, w, F, M, P) {
      return LA(b, w - 305, F - 402, w - 216);
    }
    function f(b, w, F, M, P) {
      return VA(b - 277, w - 60, b, F - 1503);
    }
    d[f("(BhR", 1284, 1471) + l(-39, -145, "2c06", -226) + l(-84, -28, "u&Hs", -77) + x(1083, 1424, "H!5^", 1238) + x(1163, 1460, "BPBI", 1377) + f("B#si", 1471, 1289) + l(-218, -85, "T)7f", -28)] = o, d[a("EnP%", 1152, 861, 1220, 1037) + f("6)l4", 1475, 1576) + a("qVSl", 1260, 1305, 1096, 1155)] = r;
    const m = d, y = {};
    y[a("6)l4", 1014, 1075, 854, 1005) + l(289, -94, "K9*Y", 89) + "en"] = A, y[Q("JH$4", 1201, 1083)] = m;
    const G = y;
    return this[Q("Qt*n", 1034, 937) + l(-118, -70, "mxuG", -135) + l(-187, 47, "gvu4", 17) + Q("U836", 953, 1153) + x(1246, 814, "If4U", 1033) + "e"](G);
  }
  async [LA("jsNT", 662, 951, 743) + LA("61fj", 686, 942, 887) + PA(508, 706, 470, 554, "gM3t") + We(-199, -264, -60, "EnP%")]({ livenessChallengeOnCaptureData: t, metadata: e, passiveLivenessOnCaptureData: A, video: o }) {
    const { MultiRangeLivenessContent: r } = UA.v4;
    function a(b, w, F, M, P) {
      return VA(b - 264, w - 189, w, M - 101);
    }
    const g = this[m(1559, 1862, "Z7^U", 1718, 1687) + y(477, "0L%O", 410, 300) + y(58, "BPBI", 190, 273) + m(1316, 1303, "mxuG", 1384, 1313) + y(621, "2iqp", 310, 500)](A[a(-58, "H!5^", 184, 49) + m(1399, 1465, "gM3t", 1195, 1414) + "e"], A[a(-79, "z&vu", -57, -71) + y(140, "MAEV", 258, 175)], zg[c(-334, -296, -286, -235, "gvu4")](this[I("gM3t", 179) + a(279, "z&vu", 405, 240) + I("T)7f", -104) + c(-383, -284, -184, -149, "%IP]")])), s = t[c(-127, -62, -39, -16, "JH$4")](({ data: b }, w) => this[c(-107, -341, -159, 21, "61fj") + I("z&vu", 285) + I("2c06", -130) + y(363, "kd38", 432, 527) + y(558, "i!Ge", 429, 399)](b[y(35, "BFNn", 187, 210) + m(1583, 1854, "a&YO", 1854, 1667) + "e"], b[m(1345, 1676, "$51b", 1624, 1497) + y(619, "2c06", 607, 518)], zg[y(-38, "v$C3", -41, 153)](this[m(1391, 1409, "&p%m", 1311, 1431) + y(510, "MAEV", 301, 398) + m(1377, 1388, "F7vk", 1397, 1286) + c(-217, -219, -200, -202, "F7vk") + "se"][w]))), C = await Promise[y(191, "RwO8", 276, 307)]([g, ...s]);
    function c(b, w, F, M, P) {
      return PA(F - -510, w - 402, F - 447, M - 100, P);
    }
    const E = this[I("JH$4", 284) + a(246, "a&YO", 11, 218) + I("2c06", 68) + a(523, "qVSl", 326, 308) + I("%IP]", -3) + m(1745, 1804, "WyB(", 1723, 1589) + a(128, "JH$4", 197, 113) + c(-235, 87, -34, 75, "R6de")](A[c(-227, -449, -254, -284, "61fj") + m(1569, 1460, "zqeB", 1527, 1596)][y(691, "61fj", 526, 489) + I("T)7f", 226) + c(-80, 202, 102, -89, "L^ts")]);
    function I(b, w, F, M, P) {
      return IA(b, w - -1029);
    }
    const x = t[m(1621, 1363, "$51b", 1636, 1436)](({ data: b }) => this[c(-74, -109, -152, -71, "BFNn") + I("T)7f", 157) + c(-355, -30, -206, -41, "qVSl") + I("z&vu", -40) + I("B#si", 273) + c(1, -211, -71, 78, "dIxv") + c(162, -9, 96, 54, "GqUW") + I("$51b", -51)](b[a(364, "a&YO", 267, 220) + y(66, "jsNT", 246, 166)][m(1419, 1652, "GqUW", 1641, 1439) + a(-59, "EnP%", -106, -33) + I("kd38", 275)])), d = this[a(142, "&p%m", 121, -65) + c(196, 118, 27, -98, "u&Hs") + y(320, "l@i)", 265, 157) + a(-199, "&p%m", 137, -74) + c(-109, 219, 58, 272, "gM3t") + I("jsNT", -20) + "a"]([E, ...x]), l = { stepResults: C, metadata: e, multiRangeLivenessMetadata: d, video: { streamH264: o ? this[m(1323, 1584, "6)l4", 1271, 1452) + m(1606, 1406, "MAEV", 1387, 1539) + c(181, 18, 51, 48, "(BhR") + y(163, "l@i)", -48, 170) + a(45, "Qt*n", -43, 134) + I("2c06", -114)](o) : void 0 } }, Q = r[a(336, "r^09", 116, 260) + "y"](l);
    if (Q)
      if (I("F7vk", 136) !== I("(BhR", 92)) {
        const { MultiRangeLivenessMetadata: b } = _0x24cfe1.v4;
        if (!_0x4f66ee) return;
        const w = _0x4cd82f[m(1210, 1314, "vlcO", 1448, 1284)]((_) => {
          const X = {};
          X[Ce(-322, -219, -246, "WyB(") + "r"] = _[Ce(-345, -186, -22, "a&YO") + Ce(-106, -232, -306, "r^09") + tA(154, 193, 227, "&p%m")][wt("BPBI", 1171, 1367, 1296) + aA(-73, "T)7f")];
          function tA(_A, dA, jA, qA, gA) {
            return a(_A - 408, qA, jA - 311, jA - 224);
          }
          function YA(_A, dA, jA, qA, gA) {
            return a(_A - 410, _A, jA - 16, gA - 665);
          }
          X[aA(187, "F7vk") + Ce(-78, -136, -312, "z&vu") + wt("$51b", 1444, 1487, 1465) + aA(246, "kd38") + aA(66, "ah#Y") + aA(95, "B#si") + "o"] = _[Ce(-16, -31, -191, "If4U") + Ce(-215, -210, -187, "zqeB") + YA("qVSl", 768, 886, 643, 710)][wt("0L%O", 1310, 1222, 1193) + YA("mUdJ", 795, 707, 861, 792)];
          const $A = {};
          function aA(_A, dA, jA, qA, gA) {
            return I(dA, _A - -28);
          }
          function wt(_A, dA, jA, qA, gA) {
            return c(_A - 290, dA - 140, qA - 1466, qA - 458, _A);
          }
          function Ce(_A, dA, jA, qA, gA) {
            return y(_A - 445, qA, jA - 270, dA - -373);
          }
          return $A[aA(212, "qVSl") + aA(213, "EnP%")] = X, $A[YA("0L%O", 1066, 827, 1075, 930) + wt("R6de", 1528, 1637, 1439) + aA(-136, "gvu4")] = _[Ce(-30, -187, -386, "RwO8") + tA(160, 215, 350, "dIxv")], $A;
        }), F = {};
        F[y(26, "gM3t", 229, 194) + m(1524, 1286, "6)l4", 1459, 1370)] = w;
        const M = b[I("z&vu", 212) + "y"](F);
        if (M) throw _0x2cf850[y(563, "B#si", 506, 426) + y(346, "T)7f", 700, 484)](M);
        const P = {};
        return P[I("g@z0", 15) + c(-53, -306, -133, -103, "gM3t")] = w, b[m(1247, 1507, "p*@a", 1310, 1413) + "e"](P);
      } else throw D[I("0L%O", 190) + I("B#si", -80)](Q);
    const f = r[c(305, 169, 131, 287, "g@z0") + "e"](l);
    function m(b, w, F, M, P) {
      return IA(F, P - 379);
    }
    function y(b, w, F, M, P) {
      return IA(w, M - -765);
    }
    const G = {};
    return G[c(87, 52, -121, -101, "z&vu") + I("qVSl", -117) + y(453, "B#si", 511, 477) + a(-159, "mxuG", -131, -125) + I("mxuG", 27)] = f, this[m(1502, 1388, "vlcO", 1090, 1299) + m(1106, 1455, "vlcO", 1296, 1289) + c(-193, -212, -19, -34, "vlcO") + "ge"](G);
  }
  async [LA("dIxv", 937, 976, 917) + IA("ah#Y", 1149) + IA("0L%O", 1315) + We(-371, -470, -651, "MAEV") + LA("ah#Y", 1001, 862, 840)](t, e, A) {
    function o(Q, f, m, y, G) {
      return LA(f, f - 119, m - 236, m - 115);
    }
    const { MultiRangeLivenessStepResult: r } = UA.v4, a = await Sc(t);
    function g(Q, f, m, y, G) {
      return VA(Q - 234, f - 88, G, f - 233);
    }
    const s = await this[c(-343, "i!Ge", -391, -280) + c(-440, "qVSl", -716, -557) + I(846, 825, 718, 825, "6)l4") + I(804, 642, 685, 658, "K9*Y") + g(294, 228, 447, 342, "K9*Y")](a), C = {};
    C[d("mxuG", 813, 789, 720)] = s, C[g(-107, 12, -59, 135, "dIxv") + g(-76, 111, -9, 270, "If4U") + d("Qt*n", 877, 917, 845)] = e;
    function c(Q, f, m, y, G) {
      return LA(f, f - 297, m - 461, y - -1239);
    }
    const E = {};
    function I(Q, f, m, y, G) {
      return PA(y - 432, f - 292, m - 107, y - 222, G);
    }
    E[c(-186, "GqUW", -501, -299)] = C, E[c(-145, "BPBI", -103, -319) + c(-230, "61fj", -384, -400) + g(131, 43, -154, 231, "MAEV")] = A;
    const x = E;
    function d(Q, f, m, y, G) {
      return IA(Q, y - -283);
    }
    const l = r[c(-504, "qVSl", -393, -610) + "y"](x);
    if (l)
      if (c(-696, "%IP]", -732, -544) === d("Z7^U", 518, 566, 631)) {
        const Q = {};
        Q[g(327, 253, 297, 104, "JH$4") + "r"] = _0x35c2f8[I(698, 969, 973, 862, "JH$4") + g(281, 409, 584, 453, "MAEV") + o(624, "EnP%", 822)][I(640, 552, 720, 766, "Qt*n") + I(1201, 913, 1011, 1030, "gvu4")], Q[o(1287, "p*@a", 1072) + o(1035, "gvu4", 995) + I(1104, 1149, 947, 995, "kHR3") + I(919, 1103, 1288, 1084, "B#si") + g(44, 14, 180, 224, "JH$4") + d("$51b", 426, 779, 609) + "o"] = _0x4623e3[I(691, 668, 943, 875, "WyB(") + c(-371, "kd38", -456, -328) + g(168, 298, 240, 501, "kd38")][I(670, 584, 795, 746, "BFNn") + I(767, 711, 1074, 857, "RwO8")];
        const f = {};
        return f[o(924, "L^ts", 819) + c(-495, "2iqp", -506, -499)] = Q, f[d("a&YO", 606, 513, 604) + d("g@z0", 841, 986, 804) + o(1053, "l@i)", 883)] = _0x301664[I(891, 787, 1080, 942, "ah#Y") + d("RwO8", 762, 719, 714)], f;
      } else throw D[d("vlcO", 745, 914, 739) + g(61, 114, -72, 213, "6)l4")](l);
    return r[d("dIxv", 1064, 801, 895) + "e"](x);
  }
  [LA("WyB(", 849, 735, 647) + IA("qVSl", 967) + VA(338, 313, "2iqp", 120) + We(-337, -211, -27, "i!Ge") + PA(322, 487, 486, 326, "ah#Y") + VA(38, -339, "%IP]", -160) + LA("61fj", 1150, 902, 998) + PA(634, 593, 775, 840, "g@z0")](t) {
    const { MultiRangeLivenessMetadata: e } = UA.v4;
    function A(I, x, d, l, Q) {
      return VA(I - 152, x - 96, I, d - -399);
    }
    function o(I, x, d, l, Q) {
      return LA(l, x - 146, d - 209, x - 506);
    }
    function r(I, x, d, l, Q) {
      return PA(d - 1015, x - 33, d - 163, l - 28, Q);
    }
    function a(I, x, d, l, Q) {
      return IA(l, I - -155);
    }
    if (!t) {
      if (o(1231, 1322, 1186, "jsNT") === A("g@z0", -690, -494)) throw new _0x574504(o(1283, 1433, 1531, "2c06") + A("K9*Y", -237, -228) + o(1216, 1292, 1351, "ejUR") + E(263, "JH$4", 241) + o(1254, 1208, 1313, "(BhR") + o(1042, 1148, 1328, "dIxv") + E(-127, "H!5^", 4) + o(1180, 1189, 1193, "a&YO") + A("r^09", -312, -394));
      return;
    }
    const g = t[A("vlcO", -804, -608)]((I) => {
      function x(m, y, G, b, w) {
        return E(m - 456, y, b - 1278);
      }
      function d(m, y, G, b, w) {
        return r(m - 227, y - 338, m - -384, b - 397, w);
      }
      function l(m, y, G, b, w) {
        return o(m - 482, w - -1054, G - 391, b);
      }
      function Q(m, y, G, b, w) {
        return A(b, y - 265, w - 1252);
      }
      function f(m, y, G, b, w) {
        return E(m - 192, G, w - -55);
      }
      if (Q(884, 872, 966, "dIxv", 759) !== d(1077, 935, 1201, 1061, "B#si")) {
        const m = {};
        m[x(1535, "JH$4", 1412, 1470) + "r"] = I[l(156, 166, 134, "H!5^", 92) + d(996, 948, 836, 907, "mUdJ") + x(1316, "RwO8", 1389, 1286)][Q(592, 566, 870, "kd38", 729) + f(62, 124, "zqeB", 357, 282)], m[f(152, -133, "a&YO", 136, -35) + Q(476, 471, 662, "&p%m", 650) + Q(766, 943, 961, "l@i)", 952) + x(1746, "ah#Y", 1804, 1599) + l(167, 353, 332, "R6de", 357) + d(1123, 1267, 1180, 1032, "B#si") + "o"] = I[Q(983, 819, 1196, "%IP]", 1035) + f(-25, 121, "u&Hs", -132, -50) + Q(1097, 878, 1162, "BFNn", 1025)][Q(1078, 710, 901, "61fj", 872) + Q(1123, 816, 1030, "R6de", 1030)];
        const y = {};
        return y[x(1256, "6)l4", 1621, 1440) + x(1354, "ejUR", 1671, 1536)] = m, y[x(1099, "U836", 1016, 1232) + f(73, 17, "U836", -137, -37) + d(1146, 1277, 1127, 1114, "jsNT")] = I[Q(861, 1051, 1062, "F7vk", 871) + f(42, 347, "L^ts", -1, 215)], y;
      } else throw _0x3219e0[l(278, 170, 197, "BPBI", 201) + f(172, 63, "Z7^U", -94, 91)](_0x465102);
    }), s = {};
    s[E(144, "%IP]", 354) + a(882, 971, 922, "gM3t")] = g;
    const C = e[o(1374, 1276, 1101, "Z7^U") + "y"](s);
    if (C)
      throw o(1353, 1316, 1273, "qVSl") !== E(315, "r^09", 112) ? D[A("p*@a", -550, -352) + A("WyB(", -484, -445)](C) : _0x23ddf3[A("B#si", -142, -322) + a(1081, 1045, 1020, "i!Ge")](_0x43f0d2);
    const c = {};
    c[a(1165, 1127, 1364, "vlcO") + E(206, "6)l4", 49)] = g;
    function E(I, x, d, l, Q) {
      return LA(x, x - 420, d - 321, d - -681);
    }
    return e[o(1368, 1211, 1152, "B#si") + "e"](c);
  }
  [LA("WyB(", 832, 750, 677) + PA(663, 541, 512, 596, "BPBI") + IA("61fj", 1115) + PA(301, 283, 310, 91, "WyB(") + IA("F7vk", 1310) + We(-546, -507, -724, "kHR3") + "a"](t) {
    function e(I, x, d, l, Q) {
      return PA(x - -94, x - 101, d - 307, l - 213, I);
    }
    function A(I, x, d, l, Q) {
      return PA(I - 405, x - 114, d - 398, l - 81, l);
    }
    const { MultiRangeLivenessMetadata: o } = UA.v4;
    function r(I, x, d, l, Q) {
      return IA(l, x - -197);
    }
    function a(I, x, d, l, Q) {
      return IA(l, I - -226);
    }
    if (!t || t[E(1059, 961, 1045, 922, "BPBI") + "h"] === 29 * 59 + -107 * 28 + 1285) {
      if (E(748, 616, 928, 586, "kHR3") === e("ah#Y", 564, 587, 573)) throw _0x226d4a[E(941, 1116, 836, 818, "T)7f") + E(882, 890, 954, 944, "dIxv")](_0x2731ef);
      return;
    }
    const g = t[E(833, 967, 864, 1024, "F7vk") + "ap"]((I) => (I == null ? void 0 : I[E(964, 1097, 757, 969, "p*@a") + A(753, 750, 805, "RwO8")]) ?? []), s = {};
    s[r(552, 761, 842, "T)7f") + r(829, 697, 540, "F7vk")] = g;
    const C = o[r(1177, 957, 924, "F7vk") + "y"](s);
    if (C)
      if (r(1040, 1063, 993, "2iqp") !== A(671, 696, 841, "K9*Y")) {
        _0xea4f29[e("mxuG", 225, 61, 439)](..._0x437752[a(819, 908, 933, "2iqp") + e("R6de", 494, 615, 499)][A(889, 1063, 1015, "%IP]") + a(882, 986, 853, "qVSl") + a(687, 751, 876, "qVSl") + A(690, 625, 832, "u&Hs") + a(857, 878, 700, "kd38") + e("gvu4", 507, 566, 336) + a(1071, 1195, 1223, "If4U")]);
        const I = _0x9540ea[A(662, 562, 589, "l@i)") + A(959, 774, 1150, "BFNn")][e("qVSl", 462, 387, 323) + r(1093, 990, 1007, "6)l4") + e("R6de", 289, 145, 499)][A(950, 1131, 1040, "a&YO")](({ detectedObject: x }) => x);
        _0x100735[E(913, 817, 972, 804, "R6de")](...I);
      } else throw D[e("vlcO", 268, 408, 364) + r(1114, 898, 681, "K9*Y")](C);
    const c = {};
    function E(I, x, d, l, Q) {
      return IA(Q, I - -209);
    }
    return c[e("l@i)", 371, 338, 490) + a(933, 801, 1096, "jsNT")] = g, o[r(930, 1104, 1269, "g@z0") + "e"](c);
  }
}
function Cx() {
  const { cameraService: i } = to(), { assetsDirectoryPath: n, challengeSequence: t, onComplete: e, sessionToken: A } = AE(), { transactionCounting: o } = As(), { analytics: r } = qI(), { phaseThresholds: a } = Bc(), { handleAppStateChangeWithTransitionCheck: g, handleError: s } = ie(), [C, c] = xA();
  UQ(oc.ON_COMPLETE, e), z(() => {
    let I;
    async function x() {
      if (!i) return;
      const d = wc.getWorkerPath(pE, n), l = {};
      l.type = "module";
      const Q = new Worker(new URL(d, import.meta.url), l), f = cc(Q);
      I = await new f();
      const m = new rx(), y = new wE(PQ), G = new Ix(t), b = new hE().setAssetsDirectoryPath(n).setCameraService(i).setDetector(I).setDetectionFactory(m).setPhaseThresholds(a).setDispatcher(y).setProtobuf(G).setChallengeSequence(t).setAnalytics(r).setSessionToken(A).setTransactionCounting(o).build();
      try {
        c(b), g(H.RUNNING);
      } catch (w) {
        if (w instanceof Error) {
          s(D.fromError(w));
          return;
        }
      }
    }
    return x(), () => {
      g(H.WAITING), I && I[ic]();
    };
  }, [s, i, t, n, r, A, g, a, o]);
  const E = {};
  return E.controller = C, E;
}
function Bx({ children: i }) {
  const { controller: n } = Cx();
  return /* @__PURE__ */ k(JQ, { controller: n, children: i });
}
function Qx({ initAppState: i, onError: n }) {
  const [t, e] = xA(i), [A, o] = xA(), [r, a] = xA(!1), g = _t.Lower, s = ne(n);
  z(() => {
    s.current = n;
  }, [n]);
  const C = {};
  return C.redfin = g, C.appState = t, C.setAppState = e, C.error = A, C.setError = o, C.isCameraReady = r, C.setIsCameraReady = a, C.onErrorRef = s, C;
}
const fa = po.getInstance(), o0 = (i, n) => {
  fa.dispatchCustomEventOnChange(i, n);
}, Ex = (i, n) => {
  fa.dispatchCustomEventOnChange(i, n);
}, xx = (i, n) => {
  const t = {};
  t.size = n;
  const e = t;
  fa.dispatchCustomEventOnChange(i, e);
};
function dx({
  onError: i
}) {
  const { appState: n, redfin: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: a, setIsCameraReady: g } = Qx({
    initAppState: H.LOADING,
    onError: i
  }), s = Se(
    (E) => {
      o0(Ke.STATE_CHANGED, { appState: H.ERROR, error: E }), g(!1), o.current(E), a(E), r(H.ERROR);
    },
    [g, o, a, r]
  ), C = Se(
    (E) => {
      r((I) => {
        const x = typeof E == "function" ? E(I) : E;
        return o0(Ke.STATE_CHANGED, { appState: x }), x;
      });
    },
    [r]
  ), c = Se(
    (E) => {
      C((I) => I === H.COMPLETE || I === H.LOADING && E !== H.RUNNING ? I : E);
    },
    [C]
  );
  return {
    redfin: t,
    appState: n,
    isCameraReady: A,
    setIsCameraReady: g,
    handleAppStateChange: C,
    handleAppStateChangeWithTransitionCheck: c,
    handleError: s,
    error: e
  };
}
function lx() {
  return sa() ? Xa.MOBILE : Xa.DESKTOP;
}
function ux({
  children: i,
  thresholdConfigs: n
}) {
  const [t, e] = xA(lx()), A = NA(() => {
    const o = {};
    for (const a of Object.keys(n)) {
      const g = n[a];
      if (g) {
        const { mapper: s, presets: C, userThresholds: c } = g;
        o[a] = s(C[t], c);
      }
    }
    return {
      getPhaseThresholds: (a) => o[a],
      phaseThresholds: o,
      setThresholdsPreset: e,
      thresholdsPreset: t
    };
  }, [n, t, e]);
  return /* @__PURE__ */ k(ua.Provider, { value: A, children: i });
}
function fx(i, n) {
  return {
    faceConfidence: (n == null ? void 0 : n.faceConfidence) ?? i.faceConfidence,
    sharpnessThreshold: (n == null ? void 0 : n.sharpnessThreshold) ?? i.sharpnessThreshold,
    brightnessLowThreshold: (n == null ? void 0 : n.brightnessLowThreshold) ?? i.brightnessLowThreshold,
    brightnessHighThreshold: (n == null ? void 0 : n.brightnessHighThreshold) ?? i.brightnessHighThreshold,
    outOfBoundsThreshold: (n == null ? void 0 : n.outOfBoundsThreshold) ?? i.outOfBoundsThreshold,
    devicePitchAngleThreshold: (n == null ? void 0 : n.devicePitchAngleThreshold) ?? i.devicePitchAngleThreshold,
    leftEye: (n == null ? void 0 : n.leftEye) ?? {
      confidence: i.leftEye.confidence
    },
    rightEye: (n == null ? void 0 : n.rightEye) ?? {
      confidence: i.rightEye.confidence
    }
  };
}
function hx(i, n) {
  return {
    faceConfidence: (n == null ? void 0 : n.faceConfidence) ?? i.faceConfidence,
    leftEye: (n == null ? void 0 : n.leftEye) ?? {
      confidence: i.leftEye.confidence
    },
    rightEye: (n == null ? void 0 : n.rightEye) ?? {
      confidence: i.rightEye.confidence
    }
  };
}
function px({
  children: i,
  livenessChallengeUserThresholds: n,
  passiveLivenessUserThresholds: t
}) {
  const e = NA(() => ({
    [K.PASSIVE_LIVENESS]: {
      mapper: fx,
      presets: lE,
      userThresholds: t
    },
    [K.LIVENESS_CHALLENGE]: {
      mapper: hx,
      presets: uE,
      userThresholds: n
    }
  }), [n, t]);
  return /* @__PURE__ */ k(ux, { thresholdConfigs: e, children: i });
}
var uo = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(uo || {});
const mx = async () => WebAssembly.validate(new Uint8Array([-473 + -27 * -355 + 34 * -268, -974 * 1 + 17 * -77 + 35 * 68, -3275 * -2 + -3947 + -2488, 109, 9980 + -4071 * 1 + -5908, -3 * 540 + -2229 + -1283 * -3, 22 * 141 + -5954 + 2852, 0, 1, -106 * -73 + 2 * -3859 + -15, -1 * 898 + 4493 * -1 + 5392, 8298 + 199 * -3 + -7605, 870 * 7 + 1 * 269 + 6359 * -1, -1 * -1155 + 21 * -1 + 103 * -11, -7041 + 30 * 49 + 5694, -2436 + -813 * -3, -5041 + 5043 * 1, 4530 + 4529 * -1, -8478 + -122 * -37 + 3964, 3560 + -13 * 67 + -2679, 158 * 2 + -2569 + 2263, 1, 6156 + 4 * -1537, 0, -1971 + -1 * -25 + 1 * 2011, -1 * 6967 + 469 * -7 + 10250, -7373 * 1 + 214 * -11 + -998 * -10, 15, 67 * 26 + -4550 + 3061, 98, -8531 + -1 * 2474 + 11016]));
function yx() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-31 * -187 + 97 * -79 + 1882);
}
function wx() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = yx();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function Dx(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function bx(i) {
  return i > 1 * -19937 + -11322 + 91259 ? ">1m" : "" + i;
}
function kx(i) {
  return i > 24 * 336 + 1 * 1041 + -9095 * 1 ? ">10" : "" + i;
}
const cr = (i) => Math.round(i / 500) * 500 / (-9408 + -1013 * 4 + 14460), Sx = (i) => i ? i <= -6705 + -1 * 7069 + 475 * 29 ? Math.round(i * (8709 * 1 + 9988 + -18677)) / (-6761 + 1 * 6781) : Math.round(i / (-1 * -7910 + 493 * -7 + -1 * 4409)) * (-446 + -4 * -124) : 9913 + -4973 * 1 + -4940;
function Gx(i) {
  return i ? Math.round(i / (9489 + 1880 * -5 + 1 * 2411)) * 2500 : 0;
}
const Nx = (i) => i ? Math.round(i / 10) * (8654 * 1 + 8049 + -16693) : 8 * 881 + 1989 + -9037, Rx = (i) => Math.round(i * (-6 * -558 + 1838 + -5184)) / (156 + -7 * 22);
async function Fx() {
  return await mx() ? za.SIMD : za.NO_SIMD;
}
class vx {
  constructor() {
    p(this, "countlyAppKey", "");
    p(this, "deviceId", "");
  }
  async countlyFetch(n) {
    if (!this.countlyAppKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.countlyAppKey, r.device_id = this.deviceId;
    const a = Zo(r);
    try {
      await fetch("" + o + a + "&" + n, A);
    } catch (g) {
      console.error("Countly Error", g);
    }
  }
  async init(n, t) {
    if (!t) return;
    this.countlyAppKey = t, this.deviceId = n;
    const A = { _app_version: aa() }, o = { organization: ga(window.location.href) }, r = Zo({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const n = {};
    n.end_session = "1";
    const t = Zo(n);
    await this.countlyFetch(t);
  }
  async sendEvent(n, t, e) {
    const A = {};
    A.key = n, A.count = 1, A.dur = e, A.segmentation = t;
    const o = [A], r = Zo({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(n, t) {
    await this.sendEvent(uo.AUTO_CAPTURE, n, t);
  }
}
const ro = new vx(), Mt = {};
Mt.AUTO_CAPTURE = "auto-capture", Mt.CAPTURE_FINISHED = "capture-finished", Mt.CAPTURE_STARTED = "capture-started", Mt.ESCALATION_TRIGGER = "escalation-trigger", Mt.LONG_CAPTURE_SMILE = "long-capture-smile";
const Hc = Mt, Xe = {};
Xe.PALM = "palm", Xe.SMILE = "smile", Xe.DOCUMENT = "document", Xe.MAGNIFEYE = "magnifeye", Xe.EYE_GAZE = "eye-gaze", Xe.FACE = "face", Xe.MULTI_RANGE = "multi-range";
const Wx = Xe;
class Mx {
  constructor() {
    p(this, "apiKey");
    p(this, "sessionId");
    p(this, "distinctId");
    p(this, "componentName");
    p(this, "platform");
    p(this, "versionName");
    p(this, "applicationId");
    this.platform = "web", this.versionName = aa(), this.applicationId = ga(window.location.href);
  }
  async init({ apiKey: n, componentName: t, customer: e, sessionId: A }) {
  }
  async sendEvent(n, t, e) {
    if (!this.apiKey) return;
    const A = "https://metrics.innovatrics.com/v1/i/v0/e/", o = this.buildEventProperties(t, e), r = this.createCommonBody(n, o);
    try {
      const a = {};
      a["Content-Type"] = "application/json", await fetch(A, { method: "POST", headers: a, body: JSON.stringify(r) });
    } catch (a) {
      console.error("Error sending auto capture event:", a);
    }
  }
  buildEventProperties(n, t) {
    const e = this.convertCamelToSnakeCase(n), A = this.createCommonProperties(), o = { ...e, ...A };
    return o.duration = t, o;
  }
  createCommonProperties() {
    const n = {};
    return n.platform = this.platform, n.version_name = this.versionName, n.application_id = this.applicationId, n.component_name = this.componentName, n.session_id = this.sessionId, n;
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
const an = new Mx();
class Lx {
  constructor(n) {
    p(this, "countly", ro);
    p(this, "posthog", an);
    p(this, "componentName");
    this.componentName = n;
  }
  createSegmentation(n) {
    return { appVersion: aa(), ...n };
  }
  init(n, t, e) {
    const A = wx(), o = {};
    o.apiKey = t, o.componentName = this.componentName, o.customer = e, o.sessionId = A, an.init(o), ro.init(A, n);
  }
  endSession() {
    ro.endSession();
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    an.sendEvent(uo.AUTO_CAPTURE, A), ro.sendAutoCaptureEvent(A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    an.sendEvent(uo.ESCALATION_TRIGGER, e), ro.sendEvent(uo.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) !== void 0 ? n.dotWeb.features.realTimeAnalyticsReportingEnabled : !0;
  }
  normalizePerformanceCheckup(n) {
    return n < 992 + -14 * 53 ? Nx(n) : Sx(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: kx(o || 1899 + -67 * 65 + 2456), firstHiccup: bx(Gx(r)), optCheckDetails: e == null ? void 0 : e.reduce((a, g) => "" + a + g.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(g.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(g.beforeOpt) + ";", "") };
  }
}
class Ox extends Lx {
  constructor() {
    super(Wx.MULTI_RANGE);
  }
  async trackCaptureProcess(n) {
    const t = n.get(K.PASSIVE_LIVENESS), e = Tc(n);
    if (!t || !e) throw new D("On capture data was not found");
    const A = Dx(t.metadata.deviceName, t.metadata.facingMode), o = this.extractChallengeMetrics(e), r = cr(t.metadata.captureProcessTime), a = r + cr(o.totalCaptureTime), g = [t.metadata.averageFps, ...o.averageFps], s = Rx(g.reduce((I, x) => I + x, -3584 + -2693 * 1 + 6277) / g.length), C = "" + t.detectedObject.confidence, c = "" + t.detectedObject.faceSize, E = this.createSegmentation({ averageFps: s, camera: A, instructionSet: await Fx(), captureTimeChallenge: o.captureTime, captureTimePassive: "" + r, imageResolution: t.resultImage.width + "x" + t.resultImage.height, confidenceChallenge: o.confidence, confidencePassive: C, faceSizeChallenge: o.faceSize, faceSizePassive: c });
    if (Bo()) {
      const I = this.parsePerformanceCheckup(t.metadata.optCheck, this.joinKeypressDetections(t, e));
      Object.assign(E, I);
    }
    this.countly.sendAutoCaptureEvent(E, a), this.posthog.sendEvent(Hc.CAPTURE_FINISHED, E, a);
  }
  extractChallengeMetrics(n) {
    return { captureTime: n.map((t) => cr(t.data.metadata.captureProcessTime)).join(","), confidence: n.map((t) => t.data.detectedObject.confidence).join(","), faceSize: n.map((t) => t.data.detectedObject.faceSize).join(","), averageFps: n.map((t) => t.data.metadata.averageFps), totalCaptureTime: n.reduce((t, e) => t + e.data.metadata.captureProcessTime, -596 * 12 + 2119 + 5033) };
  }
  joinKeypressDetections(n, t) {
    const e = n.metadata.performanceCheckup, A = t.map((E) => E.data.metadata.performanceCheckup), o = [e, ...A], r = o.some((E) => (E == null ? void 0 : E["performance"]) === !0), a = o.reduce((E, I) => ((I == null ? void 0 : I["firstHiccup"]) !== void 0 && E.push(I.firstHiccup), E), []), g = a.length > -2491 * -2 + -2103 + 1 * -2879 ? Math.min(...a) : void 0, s = o.reduce((E, I) => ((I == null ? void 0 : I["hiccupAmount"]) !== void 0 && E.push(I.hiccupAmount), E), []), C = s.length > 951 + -1 * -5231 + -562 * 11 ? s.reduce((E, I) => E + I, -1823 * -3 + -4394 + -1075) : void 0, c = {};
    return c.performance = r, c.firstHiccup = g, c.hiccupAmount = C, c;
  }
}
const Jx = new Ox(), ha = (i, n) => {
  const t = ne(n);
  z(() => {
    t.current = n;
  }, [n]), z(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
function Ux({ skipOutsideOfCandidateSelection: i }) {
  const { appState: n, handleAppStateChange: t } = ie(), e = Se((o) => {
    if (!o.detail) return;
    const { detectionDetails: { processedImage: { invalidValidators: r, isInCandidateSelection: a } } } = o.detail;
    if (!(i && !a) && r.includes(HA.FACE_NOT_PRESENT)) {
      if (n !== H.RUNNING) return;
      setTimeout(() => {
        t(H.LOADING);
      }, 0), setTimeout(() => {
        t(H.RUNNING);
      }, -1975 * -3 + 8850 + -3 * 4925);
    }
  }, [i, n, t]), A = {};
  return A.handleFaceDetection = e, A;
}
function Yx(i, n) {
  const { handleFaceDetection: t } = Ux(n);
  ha(i, t);
}
function Kc(i, n) {
  function t(e) {
    n(e);
  }
  ha(i, t);
}
function Px(i) {
  const { appState: n, handleAppStateChange: t } = ie();
  function e() {
    n !== H.LOADING && t(H.RUNNING);
  }
  function A(o) {
    var r;
    ((r = o.detail) == null ? void 0 : r["instruction"]) === Qr.CONTINUE_DETECTION && e();
  }
  Kc(i, A);
}
const Tx = () => typeof document < "u" && document.hasFocus();
function Hx(i = {}) {
  const n = ne(i), t = ne(Tx()), [e, A] = xA(t.current);
  z(() => {
    n.current = i;
  }), z(() => {
    function r(C) {
      t.current = C, A(C);
    }
    function a() {
      Promise.resolve().then(() => {
        var C, c, E, I;
        !t.current && ((c = (C = n.current).onFocus) == null || c.call(C), (I = (E = n.current).onChange) == null || I.call(E, !0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        var C, c, E, I;
        t.current && ((c = (C = n.current).onBlur) == null || c.call(C), (I = (E = n.current).onChange) == null || I.call(E, !1)), r(!1);
      });
    }
    function s() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", s), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", s);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function Kx(i = {}) {
  const { appState: n } = ie();
  Hx({ onBlur: () => {
    var t;
    n === H.WAITING || n === H.COMPLETE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    n === H.WAITING || n === H.COMPLETE || (t = i.onFocus) == null || t.call(i);
  } });
}
function _x(i) {
  const { controller: n } = ec(), { appState: t, handleAppStateChange: e, setIsCameraReady: A } = ie();
  Kx({ onBlur: () => {
    e(H.LOADING), A(!1);
  }, onFocus: () => {
    e(H.RUNNING), A(!0);
  } }), Px(i.CONTROL), z(() => {
    t === H.COMPLETE && (n == null || n.reset()), t === H.LOADING && (n == null || n.reset()), t === H.WAITING && (n == null || n.reset()), t === H.RUNNING && (n == null || n.init());
  }, [n, t]);
}
function jx(i) {
  const [n, t] = xA(), e = Se((o) => {
    o.detail && t(o.detail.phaseName);
  }, []);
  ha(i, e);
  const A = {};
  return A.currentPhaseName = n, A;
}
function _c() {
  return jx(Ke.PHASE_CHANGED);
}
function qx() {
  _x(Ke);
  const { currentPhaseName: i } = _c(), n = {};
  n.skipOutsideOfCandidateSelection = i === K.PASSIVE_LIVENESS, Yx(Ke.DETECTION_CHANGED, n);
}
const Vx = To.div`
  position: relative;
`, Zx = To.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`, zx = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  z(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, Ex(i, A);
  }, [t, e, i]);
}, Xx = (i) => i === k0.CONTROL ? !sa() : !0;
function $x(i) {
  const { cameraService: n } = to(), { handleAppStateChange: t, handleError: e, isCameraReady: A } = ie(), [o, r] = xA(), a = NA(() => {
    const E = A && n && n.isStreaming && n.getCameraSettings().facingMode;
    return E ? o ?? E === "user" : o ?? Xx(i);
  }, [n, o, i, A]);
  function g() {
    r(o === void 0 ? !a : !o);
  }
  async function s() {
    if (n) {
      t(H.LOADING);
      try {
        await n.switchCamera(), t(H.RUNNING);
      } catch (E) {
        if (E instanceof Error) {
          e(D.fromCameraError(E));
          return;
        }
      }
      r(void 0);
    }
  }
  function C(E) {
    var I;
    switch ((I = E.detail) == null ? void 0 : I["instruction"]) {
      case Qr.TOGGLE_MIRROR:
        g();
        break;
      case Qr.SWITCH_CAMERA:
        s();
        break;
      default:
        return;
    }
  }
  Kc(i, C);
  const c = {};
  return c.shouldCameraMirror = a, c;
}
function Ad(i) {
  const { cameraResolution: n } = to(), { shouldCameraMirror: t } = $x(i.CONTROL), e = {};
  e.cameraResolution = n, e.shouldCameraMirror = t, zx(i.CAMERA_PROPS_CHANGED, e), z(() => () => {
    po.getInstance().restart();
  }, []);
  const A = {};
  return A.shouldCameraMirror = t, A;
}
const ed = To.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, td = To.div`
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
function od() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const nd = ia(
  ({ detectionDetails: i, isImageMirror: n }, t) => od() ? (console.log(i), /* @__PURE__ */ k(pe, { children: [
    /* @__PURE__ */ k(ed, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ k(td, { children: /* @__PURE__ */ k("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
);
function id({
  detectionDetails: i,
  samVersion: n,
  shouldCameraMirror: t,
  thresholds: e,
  thresholdsPreset: A
}) {
  const { cameraResolution: o } = to(), { redfin: r } = fi(), a = ne(null);
  if (z(() => {
    if (!a.current || !o || !i)
      return;
    a.current.width = o.width, a.current.height = o.height, VI(a.current);
    const d = Ii(o), l = tC(o);
    if (sr(a.current, d, "lime"), sr(a.current, l, "blue"), SE(a.current, i.processedImage.detection), lo(a.current, i.processedImage.detection.leftEye.center, "cyan"), lo(a.current, i.processedImage.detection.rightEye.center, "cyan"), lo(a.current, i.processedImage.detection.mouth.center, "cyan"), GE(a.current, i.processedImage.detection, o), e.outOfBoundsThreshold && typeof e.outOfBoundsThreshold == "number") {
      const Q = Dc(
        o,
        e.outOfBoundsThreshold,
        d
      );
      sr(a.current, Q, "yellow");
    }
  }, [o, i, e]), !o || !i)
    return null;
  const {
    avgFps: g,
    detectionTime: s,
    processedImage: { detection: C, instructionCode: c, invalidValidators: E, isEscalated: I }
  } = i, x = {
    Confidence: C.confidence,
    Brightness: C.brightness,
    Sharpness: C.sharpness,
    "Face size": C.faceSize,
    "L eye conf / status": `${C.leftEye.confidence} / ${C.leftEye.status}`,
    "R eye conf / status": `${C.rightEye.confidence} / ${C.rightEye.status}`,
    "Mouth conf / status": `${C.mouth.confidence} / ${C.mouth.status}`,
    "Detection time": s,
    "Avg FPS": g,
    Instruction: c,
    "Resolution w / h": `${o.width} / ${o.height}`,
    "Invalid validators": E,
    "Component version": "7.7.0",
    "SAM version": n,
    "Escalated instruction": I,
    Tier: r,
    "Thresholds preset": A
  };
  return /* @__PURE__ */ k(
    nd,
    {
      ref: a,
      cameraResolution: o,
      detectionDetails: x,
      isImageMirror: t
    }
  );
}
function rd() {
  return ec();
}
function ad() {
  const [i, n] = xA(void 0), t = Se((A) => {
    n(A.detail);
  }, []);
  tc(Ke.DETECTION_CHANGED, t);
  const e = {};
  return e.detectionData = i, e;
}
const gd = ia(function({ shouldCameraMirror: n }, t) {
  const { detectionData: e } = ad(), { controller: A } = rd(), { phaseThresholds: o, thresholdsPreset: r } = Bc(), { appState: a } = ie(), g = A == null ? void 0 : A.getCurrentDetectionName();
  if (g === void 0 || a !== H.RUNNING)
    return null;
  const s = g !== K.PASSIVE_LIVENESS ? o[K.LIVENESS_CHALLENGE] : o[g];
  return /* @__PURE__ */ k("div", { ref: t, children: /* @__PURE__ */ k(
    id,
    {
      detectionDetails: e == null ? void 0 : e.detectionDetails,
      samVersion: yc,
      shouldCameraMirror: n,
      thresholds: s,
      thresholdsPreset: r
    }
  ) });
});
function sd({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ k("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function cd(i, n) {
  const [t, e] = xA(!1), A = () => e((a) => !a), o = "" + t;
  eo(() => {
    function a() {
      if (!i.current) return;
      const c = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, c.observe(i.current, E), c;
    }
    function g() {
      var I;
      if (!((I = i.current) != null && I["parentElement"])) return;
      const c = new MutationObserver((x) => {
        x.find((l) => {
          for (const Q of l.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), x.forEach((l) => {
          l.addedNodes.forEach((Q) => {
            var f;
            Q !== (n == null ? void 0 : n.current) && ((f = Q.parentElement) == null || f.removeChild(Q));
          });
        });
      }), E = {};
      return E.childList = !0, c.observe(i.current.parentElement, E), c;
    }
    const s = a(), C = g();
    return () => {
      C == null || C.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const Id = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Cd({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = ne(null), { key: o } = cd(A, t);
  return /* @__PURE__ */ k("div", { ref: A, style: Id, children: /* @__PURE__ */ k("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
  ] }) }, o);
}
function Bd({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = oC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ k(
    Cd,
    {
      cutOut: i || /* @__PURE__ */ k(sd, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function Qd({ debugLayerRef: i }) {
  const { appState: n } = ie(), { cameraResolution: t } = to(), { redfin: e } = ie(), { currentPhaseName: A } = _c(), o = t && e === _t.Lower && A === K.PASSIVE_LIVENESS, r = n !== H.RUNNING;
  return o ? /* @__PURE__ */ k(
    Bd,
    {
      fullOverlay: r,
      ignoreElement: i,
      resolution: t
    }
  ) : null;
}
function Ed({ children: i, shouldCameraMirror: n }) {
  const t = ne(null);
  return /* @__PURE__ */ k(pe, { children: [
    /* @__PURE__ */ k(Qd, { debugLayerRef: t }),
    i,
    /* @__PURE__ */ k(gd, { ref: t, shouldCameraMirror: n })
  ] });
}
function xd() {
  const { videoRef: i } = to(), { isCameraReady: n } = ie(), { shouldCameraMirror: t } = Ad(Ke);
  return /* @__PURE__ */ k(Ed, { shouldCameraMirror: t, children: /* @__PURE__ */ k(
    Zx,
    {
      ref: i,
      $isImageMirror: t,
      $isVisible: n,
      autoPlay: !0,
      id: XI,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function dd(i, n) {
  z(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      xx(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function ld({ children: i }) {
  const n = ne(null);
  return dd(n, Ke.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ k(Vx, { ref: n, children: i });
}
function ud() {
  return qx(), /* @__PURE__ */ k(ld, { children: /* @__PURE__ */ k(xd, {}) });
}
function fd({ configuration: i }) {
  return i ? /* @__PURE__ */ k(fQ, { target: i.styleTarget, children: /* @__PURE__ */ k(OQ, { configuration: i, children: /* @__PURE__ */ k(px, { children: /* @__PURE__ */ k(gB, { children: /* @__PURE__ */ k(
    BB,
    {
      transactionCountingToken: i.transactionCountingToken,
      transactionType: QB.MULTIRANGE,
      children: /* @__PURE__ */ k(
        fC,
        {
          value: dx({
            onError: i.onError
          }),
          children: /* @__PURE__ */ k(
            uC,
            {
              analytics: Jx,
              apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt",
              countlyAppKey: "65eefa9cc8d37fd811f5015a62f6ef8451679658",
              children: /* @__PURE__ */ k(
                zC,
                {
                  cameraFacing: ta.FRONT,
                  isVideoCaptureEnabled: i.isVideoCaptureEnabled,
                  children: /* @__PURE__ */ k(Bx, { children: /* @__PURE__ */ k(v0, { children: /* @__PURE__ */ k(ud, {}) }) })
                }
              )
            }
          )
        }
      )
    }
  ) }) }) }) }) : null;
}
rI(fd, "x-dot-multi-range-liveness", ["configuration"]);
