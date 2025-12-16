var M0 = Object.defineProperty;
var qa = (i) => {
  throw TypeError(i);
};
var W0 = (i, n, t) => n in i ? M0(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var y = (i, n, t) => W0(i, typeof n != "symbol" ? n + "" : n, t), _a = (i, n, t) => n.has(i) || qa("Cannot " + t);
var m = (i, n, t) => (_a(i, n, "read from private field"), t ? t.call(i) : n.get(i)), W = (i, n, t) => n.has(i) ? qa("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), v = (i, n, t, e) => (_a(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Xo, M, vs, Ms, at, Va, Ws, Ls, Os, Ea, Cr, Br, Js, So = {}, Us = [], L0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $o = Array.isArray;
function Ee(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function da(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function MA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 13 * 9 + -7981 + 7866 && (r.children = arguments.length > 3 ? Xo.call(arguments, 24 * 64 + 7433 + 3 * -2989) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) r[o] == null && (r[o] = i.defaultProps[o]);
  return po(i, r, e, A, null);
}
function po(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__c = null, o.constructor = void 0, o.__v = A ?? ++vs, o.__i = -1, o.__u = 0;
  var r = o;
  return A == null && M.vnode != null && M.vnode(r), r;
}
function O0() {
  var i = {};
  return i.current = null, i;
}
function Ae(i) {
  return i.children;
}
function $A(i, n) {
  this.props = i, this.context = n;
}
function qt(i, n) {
  if (n == null) return i.__ ? qt(i.__, i.__i + (917 * -1 + -6156 + 7074)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? qt(i) : null;
}
function Ys(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 0; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return Ys(i);
  }
}
function Qr(i) {
  (!i.__d && (i.__d = !0) && at.push(i) && !Mn.__r++ || Va != M.debounceRendering) && ((Va = M.debounceRendering) || Ws)(Mn);
}
function Mn() {
  for (var i, n, t, e, A, o, r, g = 779 + -1 * 778; at.length; ) at.length > g && at.sort(Ls), i = at.shift(), g = at.length, i.__d && (t = void 0, A = (e = (n = i).__v).__e, o = [], r = [], n.__P && ((t = Ee({}, e)).__v = e.__v + (1 * -5775 + -1319 * -5 + 117 * -7), M.vnode && M.vnode(t), xa(n.__P, t, e, n.__n, n.__P.namespaceURI, -6316 + 1572 * -1 + 7920 & e.__u ? [A] : null, o, A ?? qt(e), !!(-1 * -40 + 110 * -60 + 103 * 64 & e.__u), r), t.__v = e.__v, t.__.__k[t.__i] = t, Hs(o, t, r), t.__e != A && Ys(t)));
  Mn.__r = -9861 + -6 * -1217 + -3 * -853;
}
function Ps(i, n, t, e, A, o, r, g, a, s, C) {
  var I, E, B, d, x, l, Q = e && e.__k || Us, f = n.length;
  for (a = J0(t, n, Q, a, f), I = -31 * -115 + 3585 + -22 * 325; I < f; I++) (B = t.__k[I]) != null && (E = B.__i == -1 ? So : Q[B.__i] || So, B.__i = I, l = xa(i, B, E, A, o, r, g, a, s, C), d = B.__e, B.ref && E.ref != B.ref && (E.ref && la(E.ref, null, B), C.push(B.ref, B.__c || d, B)), x == null && d != null && (x = d), -1 * 8914 + -3151 * -3 + -535 & B.__u || E.__k === B.__k ? a = Ts(B, a, i) : typeof B.type == "function" && l !== void 0 ? a = l : d && (a = d.nextSibling), B.__u &= -7);
  return t.__e = x, a;
}
function J0(i, n, t, e, A) {
  var o, r, g, a, s, C = t.length, I = C, E = -64 + -37 * 59 + 321 * 7;
  for (i.__k = new Array(A), o = 39 * 149 + -1049 * 6 + 3 * 161; o < A; o++) (r = n[o]) != null && typeof r != "boolean" && typeof r != "function" ? (a = o + E, (r = i.__k[o] = typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? po(null, r, null, null, null) : $o(r) ? po(Ae, { children: r }, null, null, null) : r.constructor == null && r.__b > -1 * -3851 + -1 * 4567 + 716 ? po(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = i, r.__b = i.__b + (-6080 + 7 * 124 + -13 * -401), g = null, (s = r.__i = U0(r, t, a, I)) != -1 && (I--, (g = t[s]) && (g.__u |= 176 + 58 * -3)), g == null || g.__v == null ? (s == -1 && (A > C ? E-- : A < C && E++), typeof r.type != "function" && (r.__u |= 895 * 8 + 3 * 1733 + -12355)) : s != a && (s == a - (-1 * 7883 + -13 * -651 + -579) ? E-- : s == a + (12 * 261 + -4 * 1948 + 4661 * 1) ? E++ : (s > a ? E-- : E++, r.__u |= 2178 * 1 + -2073 * 3 + 4045))) : i.__k[o] = null;
  if (I)
    for (o = -8363 * -1 + 1815 * -4 + -1103; o < C; o++) (g = t[o]) != null && 2 * -2127 + 26 * 143 + -134 * -4 == (-23 * 22 + -1466 + 1974 & g.__u) && (g.__e == e && (e = qt(g)), js(g, g));
  return e;
}
function Ts(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = -4602 + 3 * 2524 + -2970; e && A < e.length; A++) e[A] && (e[A].__ = i, n = Ts(e[A], n, t));
    return n;
  }
  i.__e != n && (n && i.type && !t.contains(n) && (n = qt(i)), t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && n.nodeType == 8);
  return n;
}
function Re(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || ($o(i) ? i.some(function(t) {
    Re(t, n);
  }) : n.push(i)), n;
}
function U0(i, n, t, e) {
  var A, o, r = i.key, g = i.type, a = n[t];
  if (a === null && i.key == null || a && r == a.key && g == a.type && -3 * -2710 + -527 + -7603 == (-2450 + 4210 * -1 + 6662 & a.__u)) return t;
  if (e > (a != null && 8048 + 1 * -1101 + -6947 * 1 == (45 * 156 + 7293 + -14311 & a.__u) ? 1 : -9924 + 9271 * 1 + 1 * 653)) for (A = t - (1 * 6982 + -9257 + -1 * -2276), o = t + (1 * 2131 + 21 * 298 + -8388); A >= -41 * -85 + 8779 * -1 + -1 * -5294 || o < n.length; ) {
    if (A >= -1 * -7468 + -1231 + -6237) {
      if ((a = n[A]) && (-59 * -89 + 6 * 911 + 5 * -2143 & a.__u) == 0 && r == a.key && g == a.type) return A;
      A--;
    }
    if (o < n.length) {
      if ((a = n[o]) && (2 & a.__u) == 0 && r == a.key && g == a.type) return o;
      o++;
    }
  }
  return -1;
}
function Za(i, n, t) {
  n[-2 * -2968 + 7833 * -1 + 1897] == "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || L0.test(n) ? t : t + "px";
}
function rn(i, n, t, e, A) {
  var o;
  A: if (n == "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || Za(i.style, n, "");
      if (t)
        for (n in t) e && t[n] == e[n] || Za(i.style, n, t[n]);
    }
  else if (n[-549 * 7 + 8741 * -1 + 12584] == "o" && n[3964 + -1569 * 4 + -771 * -3] == "n") o = n != (n = n.replace(Os, "$1")), n = n.toLowerCase() in i || n == "onFocusOut" || n == "onFocusIn" ? n.toLowerCase().slice(61 * -43 + -8446 + 11071 * 1) : n.slice(109 * 26 + 2344 + -5176), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = Ea, i.addEventListener(n, o ? Br : Cr, o)) : i.removeEventListener(n, o ? Br : Cr, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && n[1 * 8831 + -77 * -28 + 1569 * -7] != "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -10926 + -7 * -1561 == t ? "" : t));
  }
}
function za(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = Ea++;
      else if (n.t < t.u) return;
      return t(M.event ? M.event(n) : n);
    }
  };
}
function xa(i, n, t, e, A, o, r, g, a, s) {
  var C, I, E, B, d, x, l, Q, f, p, S, k, G, w, H, P, fA, V = n.type;
  if (n.constructor != null) return null;
  900 * 2 + 6 * 1013 + -310 * 25 & t.__u && (a = !!(3433 * -1 + 71 * 25 + 1690 & t.__u), o = [g = n.__e = t.__e]), (C = M.__b) && C(n);
  A: if (typeof V == "function") try {
    if (Q = n.props, f = "prototype" in V && V.prototype.render, p = (C = V.contextType) && e[C.__c], S = C ? p ? p.props.value : C.__ : e, t.__c ? l = (I = n.__c = t.__c).__ = I.__E : (f ? n.__c = I = new V(Q, S) : (n.__c = I = new $A(Q, S), I.constructor = V, I.render = P0), p && p.sub(I), I.props = Q, I.state || (I.state = {}), I.context = S, I.__n = e, E = I.__d = !(1 * 5873 + 2 * -7 + -217 * 27), I.__h = [], I._sb = []), f && I.__s == null && (I.__s = I.state), f && V.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = Ee({}, I.__s)), Ee(I.__s, V.getDerivedStateFromProps(Q, I.__s))), B = I.props, d = I.state, I.__v = n, E) f && V.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), f && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (f && V.getDerivedStateFromProps == null && Q !== B && I.componentWillReceiveProps != null && I.componentWillReceiveProps(Q, S), !I.__e && I.shouldComponentUpdate != null && !(6086 + -8905 * -1 + -14990) === I.shouldComponentUpdate(Q, I.__s, S) || n.__v == t.__v) {
        for (n.__v != t.__v && (I.props = Q, I.state = I.__s, I.__d = !(-2977 + 626 * 14 + -5786)), n.__e = t.__e, n.__k = t.__k, n.__k.some(function(QA) {
          QA && (QA.__ = n);
        }), k = -3 * 385 + 2704 + -1549; k < I._sb.length; k++) I.__h.push(I._sb[k]);
        I._sb = [], I.__h.length && r.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(Q, I.__s, S), f && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(B, d, x);
      });
    }
    if (I.context = S, I.props = Q, I.__P = i, I.__e = !(-8911 + -8 * -1114), G = M.__r, w = 2601 + -1 * 6712 + -1 * -4111, f) {
      for (I.state = I.__s, I.__d = !1, G && G(n), C = I.render(I.props, I.state, I.context), H = -24 * 313 + -15 * -339 + -3 * -809; H < I._sb.length; H++) I.__h.push(I._sb[H]);
      I._sb = [];
    } else do
      I.__d = !(-1 * 5441 + -7826 + 13268), G && G(n), C = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++w < 7932 + 4 * -1357 + -2479);
    I.state = I.__s, I.getChildContext != null && (e = Ee(Ee({}, e), I.getChildContext())), f && !E && I.getSnapshotBeforeUpdate != null && (x = I.getSnapshotBeforeUpdate(B, d)), P = C, C != null && C.type === Ae && C.key == null && (P = Ks(C.props.children)), g = Ps(i, $o(P) ? P : [P], n, t, e, A, o, r, g, a, s), I.base = n.__e, n.__u &= -(258 * -11 + 130 * 62 + 21 * -241), I.__h.length && r.push(I), l && (I.__E = I.__ = null);
  } catch (QA) {
    if (n.__v = null, a || o != null)
      if (QA.then) {
        for (n.__u |= a ? 191 * 3 + -191 * -7 + -5 * 350 : 8613 + -1 * 9449 + 964; g && -5261 + -1 * -7138 + 21 * -89 == g.nodeType && g.nextSibling; ) g = g.nextSibling;
        o[o.indexOf(g)] = null, n.__e = g;
      } else
        for (fA = o.length; fA--; ) da(o[fA]);
    else n.__e = t.__e, n.__k = t.__k;
    M.__e(QA, n, t);
  }
  else o == null && n.__v == t.__v ? (n.__k = t.__k, n.__e = t.__e) : g = n.__e = Y0(t.__e, n, t, e, A, o, r, a, s);
  return (C = M.diffed) && C(n), 1 * 1359 + -4 * 2063 + 7021 & n.__u ? void 0 : g;
}
function Hs(i, n, t) {
  for (var e = 2 * 4837 + -3 * -199 + -10271; e < t.length; e++) la(t[e], t[++e], t[++e]);
  M.__c && M.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      M.__e(o, A.__v);
    }
  });
}
function Ks(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > -1 * -5925 + 7384 + 13309 * -1 ? i : $o(i) ? i.map(Ks) : Ee({}, i);
}
function Y0(i, n, t, e, A, o, r, g, a) {
  var s, C, I, E, B, d, x, l = t.props, Q = n.props, f = n.type;
  if (f == "svg" ? A = "http://www.w3.org/2000/svg" : f == "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = 0; s < o.length; s++) if ((B = o[s]) && "setAttribute" in B == !!f && (f ? B.localName == f : -6062 + -1509 * 4 + 12101 == B.nodeType)) {
      i = B, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (f == null) return document.createTextNode(Q);
    i = document.createElementNS(A, f, Q.is && Q), g && (M.__m && M.__m(n, o), g = !1), o = null;
  }
  if (f == null) l === Q || g && i.data == Q || (i.data = Q);
  else {
    if (o = o && Xo.call(i.childNodes), l = t.props || So, !g && o != null)
      for (l = {}, s = -1 * 7273 + -501 + 7774; s < i.attributes.length; s++) l[(B = i.attributes[s]).name] = B.value;
    for (s in l) if (B = l[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") I = B;
      else if (!(s in Q)) {
        if (s == "value" && "defaultValue" in Q || s == "checked" && "defaultChecked" in Q) continue;
        rn(i, s, null, B, A);
      }
    }
    for (s in Q) B = Q[s], s == "children" ? E = B : s == "dangerouslySetInnerHTML" ? C = B : s == "value" ? d = B : s == "checked" ? x = B : g && typeof B != "function" || l[s] === B || rn(i, s, B, l[s], A);
    if (C) g || I && (C.__html == I.__html || C.__html == i.innerHTML) || (i.innerHTML = C.__html), n.__k = [];
    else if (I && (i.innerHTML = ""), Ps(n.type == "template" ? i.content : i, $o(E) ? E : [E], n, t, e, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[849 * 3 + 1876 + -4423] : t.__k && qt(t, -1 * 6343 + -1581 + 7924 * 1), g, a), o != null)
      for (s = o.length; s--; ) da(o[s]);
    g || (s = "value", f == "progress" && d == null ? i.removeAttribute("value") : d != null && (d !== i[s] || f == "progress" && !d || f == "option" && d != l[s]) && rn(i, s, d, l[s], A), s = "checked", x != null && x != i[s] && rn(i, s, x, l[s], A));
  }
  return i;
}
function la(i, n, t) {
  try {
    if (typeof i == "function") {
      var e = typeof i.__u == "function";
      e && i.__u(), e && n == null || (i.__u = i(n));
    } else i.current = n;
  } catch (A) {
    M.__e(A, t);
  }
}
function js(i, n, t) {
  var e, A;
  if (M.unmount && M.unmount(i), (e = i.ref) && (e.current && e.current != i.__e || la(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      M.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -3082 + -134 * -23; A < e.length; A++) e[A] && js(e[A], n, t || typeof i.type != "function");
  t || da(i.__e), i.__c = i.__ = i.__e = void 0;
}
function P0(i, n, t) {
  return this.constructor(i, t);
}
function qe(i, n, t) {
  var e, A, o, r;
  n == document && (n = document.documentElement), M.__ && M.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], xa(n, i = (!e && t || n).__k = MA(Ae, null, [i]), A || So, So, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Xo.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), Hs(o, i, r);
}
function ua(i, n) {
  qe(i, n, ua);
}
function fa(i, n, t) {
  var e, A, o, r, g = Ee({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : g[o] = n[o] == null && r != null ? r[o] : n[o];
  return arguments.length > 1714 * 2 + 784 * 4 + -6562 * 1 && (g.children = arguments.length > -3 * 1735 + -5694 + -1817 * -6 ? Xo.call(arguments, -107 * -89 + 8761 + -1662 * 11) : t), po(i.type, g, e || i.key, A || i.ref, null);
}
function Ze(i) {
  function n(t) {
    var e, A;
    return this.getChildContext || (e = /* @__PURE__ */ new Set(), (A = {})[n.__c] = this, this.getChildContext = function() {
      return A;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && e.forEach(function(r) {
        r.__e = !0, Qr(r);
      });
    }, this.sub = function(o) {
      e.add(o);
      var r = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        e && e.delete(o), r && r.call(o);
      };
    }), t.children;
  }
  return n.__c = "__cC" + Js++, n.__ = i, n.Provider = n.__l = (n.Consumer = function(t, e) {
    return t.children(e);
  }).contextType = n, n;
}
Xo = Us.slice, M = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (g) {
    i = g;
  }
  throw i;
} }, vs = -7 * -58 + 8412 + 1 * -8818, Ms = function(i) {
  return i != null && i.constructor == null;
}, $A.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ee({}, this.state), typeof i == "function" && (i = i(Ee({}, t), this.props)), i && Ee(t, i), i != null && this.__v && (n && this._sb.push(n), Qr(this));
}, $A.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !0, i && this.__h.push(i), Qr(this));
}, $A.prototype.render = Ae, at = [], Ws = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ls = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, Mn.__r = 598 + 1 * 7341 + -1 * 7939, Os = /(PointerCapture)$|Capture$/i, Ea = -233 * 32 + -622 * -16 + 416 * -6, Cr = za(!1), Br = za(!0), Js = 2341 * -3 + -7941 + 14964;
function ha() {
  return (ha = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var T0 = ["context", "children"];
function H0(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, g = {}, a = Object.keys(e);
    for (r = -127 * 67 + -91 * -7 + -3936 * -2; r < a.length; r++) A.indexOf(o = a[r]) >= 1 * -6127 + -7711 + 13838 || (g[o] = e[o]);
    return g;
  }(i, T0);
  return fa(n, t);
}
function K0() {
  var i = {};
  i.detail = {}, i.bubbles = !0, i.cancelable = !0;
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = MA(H0, ha({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (-9 * 647 + 4474 * 1 + 1352 === e.nodeType) return e.data;
    if (62 * 10 + -17 * 316 + 1 * 4753 !== e.nodeType) return null;
    var o = [], r = {}, g = -1131 + 1 * -1847 + -2 * -1489, a = e.attributes, s = e.childNodes;
    for (g = a.length; g--; ) a[g].name !== "slot" && (r[a[g].name] = a[g].value, r[qs(a[g].name)] = a[g].value);
    for (g = s.length; g--; ) {
      var C = t(s[g], null), I = s[g].slot;
      I ? r[I] = MA(Xa, { name: I }, C) : o[g] = C;
    }
    var E = A ? MA(Xa, null, o) : o;
    return MA(A || e.nodeName.toLowerCase(), r, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ua : qe)(this._vdom, this._root);
}
function qs(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function j0(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[qs(i)] = t, this._vdom = fa(this._vdom, e), qe(this._vdom, this._root);
  }
}
function q0() {
  qe(this._vdom = null, this._root);
}
function Xa(i, n) {
  var t = this;
  return MA("slot", ha({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function _0(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = K0, A.prototype.attributeChangedCallback = j0, A.prototype.disconnectedCallback = q0, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var g = typeof r;
      r != null && g !== "string" && g !== "boolean" && g !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var V0 = -1493 + -1493 * -1;
function b(i, n, t, e, A, o) {
  n || (n = {});
  var r, g, a = n;
  if ("ref" in a)
    for (g in a = {}, n) g == "ref" ? r = n[g] : a[g] = n[g];
  var s = {};
  s.type = i, s.props = a, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__c = null, s.constructor = void 0, s.__v = --V0, s.__i = -1, s.__u = 0, s.__source = A, s.__self = o;
  var C = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (g in r) a[g] === void 0 && (a[g] = r[g]);
  return M.vnode && M.vnode(C), C;
}
var JA = function() {
  return JA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, JA.apply(this, arguments);
};
function _t(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function Z0(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var z0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, X0 = Z0(function(i) {
  return z0.test(i) || i.charCodeAt(0) === 4711 + -40 * 115 && i.charCodeAt(-3377 + -3 * 1301 + 7281) === -7518 + -2839 * 2 + 1 * 13306 && i.charCodeAt(894 + 1 * -6438 + 5546) < -49 * -38 + -15 * 249 + -1964 * -1;
}), _e, j, Li, $a, Vt = -852 + 2 * -4037 + 8926, _s = [], q = M, Ag = q.__b, eg = q.__r, tg = q.diffed, og = q.__c, ng = q.unmount, ig = q.__;
function to(i, n) {
  q.__h && q.__h(j, i, Vt || n), Vt = -4704 + -196 * -24;
  var t = {};
  t.__ = [], t.__h = [];
  var e = j.__H || (j.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function iA(i) {
  return Vt = 7 * 77 + -5051 + 4513, pa(zs, i);
}
function pa(i, n, t) {
  var e = to(_e++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : zs(void 0, n), function(g) {
    var a = e.__N ? e.__N[0] : e.__[0], s = e.t(a, g);
    a !== s && (e.__N = [s, e.__[-7617 * -1 + -6171 + -289 * 5]], e.__c.setState({}));
  }], e.__c = j, !j.__f)) {
    var A = function(g, a, s) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (C.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, g, a, s);
      var I = e.__c.props !== g;
      return C.forEach(function(E) {
        if (E.__N) {
          var B = E.__[0];
          E.__ = E.__N, E.__N = void 0, B !== E.__[0] && (I = !0);
        }
      }), o && o.call(this, g, a, s) || I;
    };
    j.__f = !0;
    var o = j.shouldComponentUpdate, r = j.componentWillUpdate;
    j.componentWillUpdate = function(g, a, s) {
      if (this.__e) {
        var C = o;
        o = void 0, A(g, a, s), o = C;
      }
      r && r.call(this, g, a, s);
    }, j.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function Y(i, n) {
  var t = to(_e++, 3);
  !q.__s && ya(t.__H, n) && (t.__ = i, t.u = n, j.__H.__h.push(t));
}
function oo(i, n) {
  var t = to(_e++, 4);
  !q.__s && ya(t.__H, n) && (t.__ = i, t.u = n, j.__h.push(t));
}
function GA(i) {
  return Vt = 5, BA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function Vs(i, n, t) {
  Vt = 6, oo(function() {
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
function BA(i, n) {
  var t = to(_e++, 7);
  return ya(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function xe(i, n) {
  return Vt = -3011 * 1 + -2074 + 5093, BA(function() {
    return i;
  }, n);
}
function le(i) {
  var n = j.context[i.__c], t = to(_e++, -4346 + 335 * 13);
  return t.c = i, n ? (t.__ == null && (t.__ = !0, n.sub(j)), n.props.value) : i.__;
}
function Wn(i, n) {
  q.useDebugValue && q.useDebugValue(n ? n(i) : i);
}
function Zs() {
  var i = to(_e++, 11);
  if (!i.__) {
    for (var n = j.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [-11 * -842 + 9877 + -19139, 0]);
    i.__ = "P" + t[7 * -1395 + 3157 + 2 * 3304] + "-" + t[1538 + 1 * 3617 + 3 * -1718]++;
  }
  return i.__;
}
function $0() {
  for (var i; i = _s.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(xn), i.__H.__h.forEach(Er), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], q.__e(n, i.__v);
  }
}
q.__b = function(i) {
  j = null, Ag && Ag(i);
}, q.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), ig && ig(i, n);
}, q.__r = function(i) {
  eg && eg(i), _e = -1 * 5179 + -1 * -4687 + -3 * -164;
  var n = (j = i.__c).__H;
  n && (Li === j ? (n.__h = [], j.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (n.__h.forEach(xn), n.__h.forEach(Er), n.__h = [], _e = 53 * -107 + 2 * 4812 + -3953)), Li = j;
}, q.diffed = function(i) {
  tg && tg(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (-67 * -20 + -37 * -79 + -2 * 2131 !== _s.push(n) && $a === q.requestAnimationFrame || (($a = q.requestAnimationFrame) || AC)($0)), n.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Li = j = null;
}, q.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(xn), t.__h = t.__h.filter(function(e) {
        return !e.__ || Er(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], q.__e(e, t.__v);
    }
  }), og && og(i, n);
}, q.unmount = function(i) {
  ng && ng(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      xn(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void 0, n && q.__e(n, t.__v));
};
var rg = typeof requestAnimationFrame == "function";
function AC(i) {
  var n, t = function() {
    clearTimeout(e), rg && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  rg && (n = requestAnimationFrame(t));
}
function xn(i) {
  var n = j, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), j = n;
}
function Er(i) {
  var n = j;
  i.__c = i.__(), j = n;
}
function ya(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function zs(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function Xs(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function dr(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !0;
  return !1;
}
function $s(i, n) {
  var t = n(), e = iA({ t: { __: t, u: n } }), A = e[-4 * -859 + 6773 + -123 * 83].t, o = e[-7128 + 1 * 6863 + 266];
  return oo(function() {
    A.__ = t, A.u = n, Oi(A) && o({ t: A });
  }, [i, t, n]), Y(function() {
    return Oi(A) && o({ t: A }), i(function() {
      Oi(A) && o({ t: A });
    });
  }, [i]), t;
}
function Oi(i) {
  var n, t, e = i.u, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (1598 * -1 + 2 * -1231 + 4060 !== n || (17 * 281 + -2 * 2857 + 14 * 67) / n == (-1466 * 3 + -4787 * -1 + -388) / t) || n != n && t != t);
  } catch {
    return !0;
  }
}
function AI(i) {
  i();
}
function eI(i) {
  return i;
}
function tI() {
  return [!1, AI];
}
var oI = oo;
function xr(i, n) {
  this.props = i, this.context = n;
}
function eC(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : dr(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, MA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !0, e.__f = !0, e;
}
(xr.prototype = new $A()).isPureReactComponent = !0, xr.prototype.shouldComponentUpdate = function(i, n) {
  return dr(this.props, i) || dr(this.state, n);
};
var ag = M.__b;
M.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), ag && ag(i);
};
var tC = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 8188 + 7 * -611;
function nI(i) {
  function n(t) {
    var e = Xs({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = tC, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var gg = function(i, n) {
  return i == null ? null : Re(Re(i).map(n));
}, oC = { map: gg, forEach: gg, count: function(i) {
  return i ? Re(i).length : -446 * 3 + 1251 + 87 * 1;
}, only: function(i) {
  var n = Re(i);
  if (1 * 1064 + -5822 * -1 + -6885 !== n.length) throw "Children.only";
  return n[8597 * 1 + -2511 + -6086];
}, toArray: Re }, nC = M.__e;
M.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  nC(i, n, t, e);
};
var sg = M.unmount;
function iI(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = Xs({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c.__e = !0, i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return iI(e, n, t);
  })), i;
}
function rI(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return rI(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = t)), i;
}
function ln() {
  this.__u = -1 * -9446 + -6297 * -1 + -91 * 173, this.o = null, this.__b = null;
}
function aI(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function iC(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return MA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function Qo() {
  this.i = null, this.l = null;
}
M.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 32 & i.__u && (i.type = null), sg && sg(i);
}, (ln.prototype = new $A()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.o == null && (e.o = []), e.o.push(t);
  var A = aI(e.__v), o = !1, r = function() {
    o || (o = !0, t.__R = null, A ? A(g) : g());
  };
  t.__R = r;
  var g = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-4999 * -1 + 359 + 2679 * -2] = rI(a, a.__c.__P, a.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.o.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || 2393 * -4 + -158 * 52 + 17820 & n.__u || e.setState({ __a: e.__b = e.__v.__k[-586 * 13 + 8484 + -866] }), i.then(r, r);
}, ln.prototype.componentWillUnmount = function() {
  this.o = [];
}, ln.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-2009 + -599 * -10 + -3981].__c;
      this.__v.__k[6863 + 5 * -1355 + 88 * -1] = iI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && MA(Ae, null, i.fallback);
  return A && (A.__u &= -33), [MA(Ae, null, n.__a ? null : i.children), A];
};
var Ig = function(i, n, t) {
  if (++t[-8998 * 1 + -6093 * 1 + 15092] === t[-2 * -217 + 1 * 8152 + -53 * 162] && i.l.delete(n), i.props.revealOrder && (i.props.revealOrder[9980 + -1 * -1347 + 1 * -11327] !== "t" || !i.l.size)) for (t = i.i; t; ) {
    for (; t.length > -5746 * 1 + 214 * 42 + -3239; ) t.pop()();
    if (t[-2 * 3561 + -568 + 7691] < t[-7621 + 1 * 7621]) break;
    i.i = t = t[5007 + 35 * -143];
  }
};
function rC(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function aC(i) {
  var n = this, t = i.h;
  if (n.componentWillUnmount = function() {
    qe(null, n.v), n.v = null, n.h = null;
  }, n.h && n.h !== t && n.componentWillUnmount(), !n.v) {
    for (var e = n.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var A = {};
    A.__m = e.__m, n.h = t, n.v = { nodeType: 1, parentNode: t, childNodes: [], __k: A, contains: function() {
      return !0;
    }, appendChild: function(r) {
      this.childNodes.push(r), n.h.appendChild(r);
    }, insertBefore: function(r, g) {
      this.childNodes.push(r), n.h.insertBefore(r, g);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> -6081 + 3041 * 2, 5286 + 5 * -1057), n.h.removeChild(r);
    } };
  }
  var o = {};
  o.context = n.context, qe(MA(rC, o, i.__v), n.v);
}
function gC(i, n) {
  var t = {};
  t.__v = i, t.h = n;
  var e = MA(aC, t);
  return e.containerInfo = n, e;
}
(Qo.prototype = new $A()).__a = function(i) {
  var n = this, t = aI(n.__v), e = n.l.get(i);
  return e[9576 + 38 * -252]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Ig(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, Qo.prototype.render = function(i) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var n = Re(i.children);
  i.revealOrder && i.revealOrder[-9887 + -1 * -9887] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.l.set(n[t], this.i = [-9950 + -1528 * -3 + 5367, -4880 + -8 * -610, this.i]);
  return i.children;
}, Qo.prototype.componentDidUpdate = Qo.prototype.componentDidMount = function() {
  var i = this;
  this.l.forEach(function(n, t) {
    Ig(i, t, n);
  });
};
var gI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, sC = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, IC = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, cC = /[A-Z0-9]/g, CC = typeof document < "u", BC = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function QC(i, n, t) {
  return n.__k == null && (n.textContent = ""), qe(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function EC(i, n, t) {
  return ua(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
$A.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty($A.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !0, t.writable = !0, t.value = n, Object.defineProperty(this, i, t);
  } });
});
var cg = M.event;
function dC() {
}
function xC() {
  return this.cancelBubble;
}
function lC() {
  return this.defaultPrevented;
}
M.event = function(i) {
  return cg && (i = cg(i)), i.persist = dC, i.isPropagationStopped = xC, i.isDefaultPrevented = lC, i.nativeEvent = i;
};
var un = {};
un.enumerable = !1, un.configurable = !0, un.get = function() {
  return this.class;
};
var ma, uC = un, Cg = M.vnode;
M.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {}, o = e.indexOf("-") === -1;
    for (var r in t) {
      var g = t[r];
      if (!(r === "value" && "defaultValue" in t && g == null || CC && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && g === !0 ? g = "" : a === "translate" && g === "no" ? g = !1 : a[9276 + 107 * 89 + -18799] === "o" && a[25 * -237 + 5355 + -1 * -571] === "n" ? a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || BC(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : IC.test(r) && (r = a) : a = r = "oninput" : o && sC.test(r) ? r = r.replace(cC, "-$&").toLowerCase() : g === null && (g = void 0), a === "oninput" && A[r = a] && (r = "oninputCapture"), A[r] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Re(t.children).forEach(function(s) {
      s.props.selected = A.value.indexOf(s.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = Re(t.children).forEach(function(s) {
      s.props.selected = A.multiple ? A.defaultValue.indexOf(s.props.value) != -1 : A.defaultValue == s.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", uC)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = gI, Cg && Cg(i);
};
var Bg = M.__r;
M.__r = function(i) {
  Bg && Bg(i), ma = i.__c;
};
var Qg = M.diffed;
M.diffed = function(i) {
  Qg && Qg(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), ma = null;
};
var dA = {};
dA.readContext = function(i) {
  return ma.__n[i.__c].props.value;
}, dA.useCallback = xe, dA.useContext = le, dA.useDebugValue = Wn, dA.useDeferredValue = eI, dA.useEffect = Y, dA.useId = Zs, dA.useImperativeHandle = Vs, dA.useInsertionEffect = oI, dA.useLayoutEffect = oo, dA.useMemo = BA, dA.useReducer = pa, dA.useRef = GA, dA.useState = iA, dA.useSyncExternalStore = $s, dA.useTransition = tI;
var sI = {};
sI.current = dA;
var II = {};
II.ReactCurrentDispatcher = sI;
var fC = II;
function hC(i) {
  return MA.bind(null, i);
}
function hi(i) {
  return !!i && i.$$typeof === gI;
}
function pC(i) {
  return hi(i) && i.type === Ae;
}
function yC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function mC(i) {
  return hi(i) ? fa.apply(null, arguments) : i;
}
function DC(i) {
  return !!i.__k && (qe(null, i), !0);
}
function wC(i) {
  return i && (i.base || -1739 + -58 * -30 === i.nodeType && i) || null;
}
var bC = function(i, n) {
  return i(n);
}, kC = function(i, n) {
  return i(n);
}, SC = Ae, GC = hi, ht = { useState: iA, useId: Zs, useReducer: pa, useEffect: Y, useLayoutEffect: oo, useInsertionEffect: oI, useTransition: tI, useDeferredValue: eI, useSyncExternalStore: $s, startTransition: AI, useRef: GA, useImperativeHandle: Vs, useMemo: BA, useCallback: xe, useContext: le, useDebugValue: Wn, version: "18.3.1", Children: oC, render: QC, hydrate: EC, unmountComponentAtNode: DC, createPortal: gC, createElement: MA, createContext: Ze, createFactory: hC, cloneElement: mC, createRef: O0, Fragment: Ae, isValidElement: hi, isElement: GC, isFragment: pC, isMemo: yC, findDOMNode: wC, Component: $A, PureComponent: xr, memo: eC, forwardRef: nI, flushSync: kC, unstable_batchedUpdates: bC, StrictMode: SC, Suspense: ln, SuspenseList: Qo, lazy: iC, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fC };
function NC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ji, Eg;
function RC() {
  return Eg || (Eg = 1, Ji = function(n, t, e, A) {
    var o = e ? e.call(A, n, t) : void 0;
    if (o !== void 0) return !!o;
    if (n === t) return !0;
    if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
    var r = Object.keys(n), g = Object.keys(t);
    if (r.length !== g.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), s = 4829 * -1 + 771 * 8 + 1339 * -1; s < r.length; s++) {
      var C = r[s];
      if (!a(C)) return !1;
      var I = n[C], E = t[C];
      if (o = e ? e.call(A, I, E, C) : void 0, o === !1 || o === void 0 && I !== E) return !1;
    }
    return !0;
  }), Ji;
}
var FC = RC();
const vC = /* @__PURE__ */ NC(FC);
var K = "-ms-", yo = "-moz-", U = "-webkit-", cI = "comm", pi = "rule", Da = "decl", MC = "@import", CI = "@keyframes", WC = "@layer", BI = Math.abs, wa = String.fromCharCode, lr = Object.assign;
function LC(i, n) {
  return gA(i, -4012 + -68 * -59) ^ 17 * -237 + 4625 + -551 ? (((n << 931 * 3 + 9683 + -12474 ^ gA(i, 0)) << 5205 + -5203 * 1 ^ gA(i, -4 * -5 + -1344 * 1 + 1325)) << -8119 + -2382 * -3 + 5 * 195 ^ gA(i, 1 * -2872 + -674 * 6 + 2 * 3459)) << -165 * -25 + 1866 + 5989 * -1 ^ gA(i, -330 + -61 * -55 + -3022) : -113 * 21 + -9002 * -1 + -6629;
}
function QI(i) {
  return i.trim();
}
function be(i, n) {
  return (i = n.exec(i)) ? i[0] : i;
}
function L(i, n, t) {
  return i.replace(n, t);
}
function fn(i, n, t) {
  return i.indexOf(n, t);
}
function gA(i, n) {
  return i.charCodeAt(n) | -1 * -6145 + -635 * -7 + 5 * -2118;
}
function Zt(i, n, t) {
  return i.slice(n, t);
}
function Qe(i) {
  return i.length;
}
function EI(i) {
  return i.length;
}
function Eo(i, n) {
  return n.push(i), i;
}
function OC(i, n) {
  return i.map(n).join("");
}
function dg(i, n) {
  return i.filter(function(t) {
    return !be(t, n);
  });
}
var yi = 81 * 73 + 815 + -1 * 6727, zt = 365 * -17 + 5116 * 1 + 2 * 545, dI = -13799 + -1 * -13799, ee = -281 + 2897 * -1 + 7 * 454, eA = -6685 + 4937 * 1 + 1748, no = "";
function mi(i, n, t, e, A, o, r, g) {
  var a = {};
  return a.value = i, a.root = n, a.parent = t, a.type = e, a.props = A, a.children = o, a.line = yi, a.column = zt, a.length = r, a.return = "", a.siblings = g, a;
}
function Je(i, n) {
  return lr(mi("", null, null, "", null, null, -993 * -4 + -4 * 1266 + 1092, i.siblings), i, { length: -i.length }, n);
}
function Dt(i) {
  for (; i.root; ) i = Je(i.root, { children: [i] });
  Eo(i, i.siblings);
}
function JC() {
  return eA;
}
function UC() {
  return eA = ee > 709 * 11 + -2 * 1543 + 4713 * -1 ? gA(no, --ee) : 36 * 15 + 2512 + -1526 * 2, zt--, eA === 17348 + 1 * -17338 && (zt = 15309 + -178 * 86, yi--), eA;
}
function re() {
  return eA = ee < dI ? gA(no, ee++) : 536 + -1 * 536, zt++, eA === -4090 + 100 * -28 + 6900 && (zt = -2668 + 1 * -3359 + -6028 * -1, yi++), eA;
}
function lt() {
  return gA(no, ee);
}
function hn() {
  return ee;
}
function Di(i, n) {
  return Zt(no, i, n);
}
function ur(i) {
  switch (i) {
    case -29 * -103 + -7843 + 2 * 2428:
    case 277 * 31 + 4048 * -2 + -482:
    case -1056 + -419 * 21 + -1 * -9865:
    case 151 * -51 + 7 * 1428 + -2282:
    case 1 * 3017 + 8555 + 4 * -2885:
      return 7782 + -1 * 4103 + -3674;
    case 2 * -2371 + 473 + 2151 * 2:
    case -2 * 2014 + 2145 * 1 + 1926:
    case -9443 + -7214 * -1 + 2273:
    case 4627 * 1 + 2186 + -6766:
    case -49 * 38 + 6195 + -4271:
    case 880 + -3 * -2943 + -9645:
    case 5099 + 1885 * -3 + -2 * -341:
    case 4777 + -1 * 4718:
    case -107 * 41 + -4930 + 1888 * 5:
    case -10021 + -1 * -10146:
      return -2 * -4 + 270 * 31 + -1 * 8374;
    case 1694 * 1 + 5864 + -7500:
      return 1290 + -136 * -24 + -4551;
    case 4449 + -5 * 883:
    case 39:
    case -3053 + -1031 * -3:
    case 5015 + -1549 * 4 + 1272:
      return 1576 * 3 + 9344 + -14070;
    case 2204 * 2 + -4051 * 1 + 1 * -316:
    case 3 * -434 + -41 + 1436:
      return -3088 + -1451 * -2 + 187;
  }
  return 2 * -3917 + -7491 + 15325;
}
function YC(i) {
  return yi = zt = -3390 + -5793 * -1 + 1201 * -2, dI = Qe(no = i), ee = -5609 + -253 * -8 + 5 * 717, [];
}
function PC(i) {
  return no = "", i;
}
function Ui(i) {
  return QI(Di(ee - (1246 + 1 * -6699 + -606 * -9), fr(i === -9461 + -4804 * 1 + 388 * 37 ? i + (-4645 + -17 * 129 + 6840) : i === 5630 * 1 + 4268 + -9858 ? i + (-6019 + -1505 * -4) : i)));
}
function TC(i) {
  for (; (eA = lt()) && eA < -2789 + 166 * 17; ) re();
  return ur(i) > 3055 + -3053 * 1 || ur(eA) > 5582 + 101 * 18 + -1 * 7397 ? "" : " ";
}
function HC(i, n) {
  for (; --n && re() && !(eA < 3 * 1875 + -2503 + -3074 || eA > 2055 * 2 + 4054 * 1 + 2 * -4031 || eA > 57 && eA < 8235 + 33 * -11 + -7807 || eA > -2405 * 3 + -116 * 41 + 12041 && eA < -11 * 342 + 1 * 1615 + 2244); ) ;
  return Di(i, hn() + (n < 1069 * -7 + -2074 + 9563 * 1 && lt() == -6 * 477 + -4097 + 6991 && re() == -127 * 59 + 800 + 6725));
}
function fr(i) {
  for (; re(); ) switch (eA) {
    case i:
      return ee;
    case 5 * -600 + 7829 + -4795:
    case -1661 * 5 + -361 * 5 + 10149:
      i !== -5497 + 863 * -2 + 7257 && i !== 6287 + -2 * -1142 + -8532 && fr(eA);
      break;
    case 1010 + -69 * 107 + -6413 * -1:
      i === -4754 + -67 * 116 + 12567 * 1 && fr(i);
      break;
    case 4678 + -2562 * -2 + 2 * -4855:
      re();
      break;
  }
  return ee;
}
function KC(i, n) {
  for (; re() && i + eA !== 47 + (25 * -205 + -8465 * -1 + 9 * -370); ) if (i + eA === -1 * -2107 + -2 * 29 + -2007 * 1 + (-3 * 2151 + -1755 + 8250) && lt() === -10119 + -391 * -26) break;
  return "/*" + Di(n, ee - 1) + "*" + wa(i === 1 * -9063 + 148 * 23 + 2 * 2853 ? i : re());
}
function jC(i) {
  for (; !ur(lt()); ) re();
  return Di(i, ee);
}
function qC(i) {
  return PC(pn("", null, null, null, [""], i = YC(i), -1 * -3669 + 3617 * 2 + -10903, [-4556 * -1 + -9024 + 4468], i));
}
function pn(i, n, t, e, A, o, r, g, a) {
  for (var s = 0, C = 0, I = r, E = 2 * 4907 + -13 * -717 + -19135 * 1, B = 3 * -1637 + -167 * -30 + -3 * 33, d = -2 * -4561 + 6393 + -5 * 3103, x = 410 * -1 + 8165 + -3877 * 2, l = 1 * -925 + -1 * -5839 + -4913, Q = 1, f = -3842 + -34 * -113, p = "", S = A, k = o, G = e, w = p; l; ) switch (d = f, f = re()) {
    case 9 * -739 + -3678 * -2 + -19 * 35:
      if (d != 124 * 49 + -972 + -4996 && gA(w, I - (283 * -29 + -2 * 2771 + 13750)) == 153 * -47 + -3001 + -10250 * -1) {
        fn(w += L(Ui(f), "&", "&\f"), "&\f", BI(s ? g[s - (-8429 + 434 * 15 + -2 * -960)] : -2043 + -1 * -4793 + -11 * 250)) != -1 && (Q = -1);
        break;
      }
    case 5940 + -1 * 1056 + 194 * -25:
    case 39:
    case 2 * 4874 + 2193 + 2370 * -5:
      w += Ui(f);
      break;
    case 9:
    case -187 * -13 + 874 * -1 + -1547:
    case 4 * -2321 + -14 * 619 + 1 * 17963:
    case 94 * 19 + 737 * -3 + 457:
      w += TC(d);
      break;
    case 2 * -4397 + -1205 + 10091:
      w += HC(hn() - (-59 * -23 + 2875 + -1 * 4231), -3877 * -1 + -9193 + 5323);
      continue;
    case -19 * -475 + 940 * 10 + -2 * 9189:
      switch (lt()) {
        case -4150 + 16 * 262:
        case -5261 * -1 + -121 * -46 + 77 * -140:
          Eo(_C(KC(re(), hn()), n, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (-6308 * -1 + 4584 + -10769) * x:
      g[s++] = Qe(w) * Q;
    case (-1 * 8243 + 7093 + 1275) * x:
    case 59:
    case -262 * -36 + -8035 + -1397:
      switch (f) {
        case 326 * 27 + 2268 + -11070:
        case 125:
          l = 0;
        case 1 * -2278 + 1 * 7679 + -5342 + C:
          Q == -1 && (w = L(w, /\f/g, "")), B > -7273 + -2579 * 1 + -4 * -2463 && Qe(w) - I && Eo(B > -5254 * 1 + -3779 * 1 + 9065 ? lg(w + ";", e, t, I - (1 * -8293 + 3540 + 4754), a) : lg(L(w, " ", "") + ";", e, t, I - 2, a), a);
          break;
        case 576 * 7 + 6795 + 8 * -1346:
          w += ";";
        default:
          if (Eo(G = xg(w, n, t, s, C, A, g, p, S = [], k = [], I, o), o), f === 1 * 6170 + -4528 * -1 + -75 * 141)
            if (C === 12073 + 1 * -12073) pn(w, n, G, G, S, o, I, g, k);
            else switch (E === -1105 + -3097 * 1 + 4301 && gA(w, -10 * 409 + 81 * 103 + -850 * 5) === -1069 * 1 + 6479 + -4 * 1325 ? 1344 + 1194 * -6 + 5920 : E) {
              case 100:
              case -12 * -18 + 2570 + 1 * -2678:
              case 468 * 12 + -3 * 746 + -3269:
              case 115:
                pn(i, G, G, e && Eo(xg(i, G, G, 0, 908 * -7 + -29 * 254 + -2 * -6861, A, g, p, A, S = [], I, k), k), A, k, I, g, e ? S : k);
                break;
              default:
                pn(w, G, G, G, [""], k, 2 * -764 + 4772 * -1 + -84 * -75, g, k);
            }
      }
      s = C = B = 1 * 4361 + 8689 * 1 + 29 * -450, x = Q = -705 + -1 * -706, p = w = "", I = r;
      break;
    case -1968 + -1 * -2026:
      I = -6 * -678 + -7805 + 3738 * 1 + Qe(w), B = d;
    default:
      if (x < 1 * 1739 + -8655 + 6917) {
        if (f == 4174 * 2 + 889 * -7 + -2002) --x;
        else if (f == 1367 * 3 + 8407 * -1 + 1477 * 3 && x++ == -67 * -111 + 5919 * -1 + 66 * -23 && UC() == 125) continue;
      }
      switch (w += wa(f), f * x) {
        case -739 * -5 + 1 * -5511 + 1854:
          Q = C > 1 * -9421 + -9088 + 18509 ? -3457 + 395 * 3 + 2273 : (w += "\f", -1);
          break;
        case -1676 + -3 * -3199 + -1 * 7877:
          g[s++] = (Qe(w) - (-3946 * -1 + -1 * -5477 + -9422)) * Q, Q = -17 * -541 + 7920 + 2 * -8558;
          break;
        case 164 * -17 + -7318 + 18 * 565:
          lt() === -5 * 523 + 314 + 2346 * 1 && (w += Ui(re())), E = lt(), C = I = Qe(p = w += jC(hn())), f++;
          break;
        case 3715 + -29 * -340 + -22 * 615:
          d === -6392 + 1 * 6437 && Qe(w) == -1 * -1643 + 9107 + 2687 * -4 && (x = -8696 + -8696 * -1);
      }
  }
  return o;
}
function xg(i, n, t, e, A, o, r, g, a, s, C, I) {
  for (var E = A - 1, B = A === -2 * -2451 + -39 * -249 + -4871 * 3 ? o : [""], d = EI(B), x = 0, l = 0, Q = 0; x < e; ++x) for (var f = -9990 + 9 * 1110, p = Zt(i, E + (1 * 3823 + 1 * -9679 + -1 * -5857), E = BI(l = r[x])), S = i; f < d; ++f) (S = QI(l > 1 * -8746 + 1 * -2291 + 11037 ? B[f] + " " + p : L(p, /&\f/g, B[f]))) && (a[Q++] = S);
  return mi(i, n, t, A === 1 * 9822 + -4279 + 1 * -5543 ? pi : g, a, s, C, I);
}
function _C(i, n, t, e) {
  return mi(i, n, t, cI, wa(JC()), Zt(i, -454 + -2 * -299 + -142, -2), 9166 * 1 + -5968 + -3198, e);
}
function lg(i, n, t, e, A) {
  return mi(i, n, t, Da, Zt(i, 3164 + 4 * 1108 + -7596, e), Zt(i, e + 1, -1), e, A);
}
function xI(i, n, t) {
  switch (LC(i, n)) {
    case -1646 + -4 * -2437 + -2999:
      return U + "print-" + i + i;
    case -9 * -331 + 9906 + 2 * -3574:
    case 4201:
    case 1673 * 5 + -6644 + 1456 * 1:
    case 2 * -1621 + -1 * 3064 + 9739:
    case 61 * -47 + -1 * 7977 + 5 * 2497:
    case -6453 * -1 + 23 * 37 + 1 * -2847:
    case 2063 + 2 * -3504 + -3 * -2622:
    case 48 * -55 + -1622 * 3 + 13078:
    case -191 * 55 + 6753 * -1 + -23614 * -1:
    case 92 * -111 + -1422 * -3 + -2 * -5895:
    case -37 * -1 + -3391 + 77 * 85:
    case -3 * -3789 + 1 * 853 + -5575:
    case -1 * 7143 + 4304 + 5844:
    case -8738 + 5043 * 3:
    case 32 * 347 + -1 * 8929 + 3704 * 1:
    case 25 * -265 + 910 + 11338:
    case -2852 + -1 * -2397 + 6590:
    case 1 * -7478 + -6874 + 6317 * 3:
    case 129 * 22 + 473 + 1544:
    case -5784 + -5625 * 1 + 504 * 31:
    case -5791 * 2 + 7657 + -573 * -18:
    case 786 * 1 + -744 + 1 * 5067:
    case -459 * -19 + 3043 + 79 * -81:
    case 102 * 38 + -10409 + -103 * -118:
    case -1 * 752 + -7862 * -1 + 193 * -17:
      return U + i + i;
    case 13613 + -4 * 2206:
      return yo + i + i;
    case -3421 + 149 * 3 + -287 * -29:
    case -4 * -1778 + -3402 * 2 + 1969 * 2:
    case -15973 + -7 * -2969:
    case -219 * 61 + -59 * 34 + 22333:
    case -3 * 937 + -1466 + 7033:
      return U + i + yo + i + K + i + i;
    case -456 * -23 + -694 + -3858:
      switch (gA(i, n + (-5693 * -1 + -2 * -4567 + -14816))) {
        case -6223 + 9 * -367 + 9640:
          return U + i + K + L(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 3127 + 1 * -3019:
          return U + i + K + L(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -500 + 1 * -9728 + 10273:
          return U + i + K + L(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 11765 + -9 * -421 + -8726:
    case -1 * -2803 + -4027 + 2 * 2746:
    case 486 + 1 * 2417:
      return U + i + K + i + i;
    case 15 * 367 + 8920 + -8260:
      return U + i + K + "flex-" + i + i;
    case -3 * 207 + -2524 + 8332:
      return U + i + L(i, /(\w+).+(:[^]+)/, U + "box-$1$2" + K + "flex-$1$2") + i;
    case 5443:
      return U + i + K + "flex-item-" + L(i, /flex-|-self/g, "") + (be(i, /flex-|baseline/) ? "" : K + "grid-row-" + L(i, /flex-|-self/g, "")) + i;
    case 3937 * -1 + 8865 + -253:
      return U + i + K + "flex-line-pack" + L(i, /align-content|flex-|-self/g, "") + i;
    case 5066 * -1 + -59 * -18 + -1 * -9552:
      return U + i + K + L(i, "shrink", "negative") + i;
    case 4631 + 661 * 1:
      return U + i + K + L(i, "basis", "preferred-size") + i;
    case -3098 + -38 * -241:
      return U + "box-" + L(i, "-grow", "") + U + i + K + L(i, "grow", "positive") + i;
    case 1610 + -1 * 6315 + -9259 * -1:
      return U + L(i, /([^-])(transform)/g, "$1" + U + "$2") + i;
    case -59 * -85 + 27 * 226 + -4930:
      return L(L(L(i, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), i, "") + i;
    case -42 * 171 + -1 * 9489 + -1 * -22166:
    case -1 * -3389 + 1 * -3826 + 4396:
      return L(i, /(image-set\([^]*)/, U + "$1$`$1");
    case -1259 * -2 + -9038 + 8 * 1436:
      return L(L(i, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + K + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + i + i;
    case -246 * 22 + -12 * 786 + 19044:
      if (!be(i, /flex-|baseline/)) return K + "grid-column-align" + Zt(i, n) + i;
      break;
    case 3203 * 2 + -17 * 110 + 9 * -216:
    case 93 + 11 * 297:
      return K + L(i, "template-", "") + i;
    case -8 * -1165 + 70 * -33 + 1 * -2626:
    case -1314 * 3 + 6726 + 26 * 32:
      return t && t.some(function(e, A) {
        return n = A, be(e.props, /grid-\w+-end/);
      }) ? ~fn(i + (t = t[n].value), "span", 803 * 2 + -564 + 2 * -521) ? i : K + L(i, "-start", "") + i + K + "grid-row-span:" + (~fn(t, "span", 0) ? be(t, /\d+/) : +be(t, /\d+/) - +be(i, /\d+/)) + ";" : K + L(i, "-start", "") + i;
    case -575 + -2339 * -1 + 3132:
    case 4128:
      return t && t.some(function(e) {
        return be(e.props, /grid-\w+-start/);
      }) ? i : K + L(L(i, "-end", "-span"), "span ", "") + i;
    case 5150 + -2923 * -1 + -3978:
    case 3583:
    case -290 * 1 + -34 * -274 + -4958:
    case -2 * -1433 + -8338 + 8004:
      return L(i, /(.+)-inline(.+)/, U + "$1$2") + i;
    case -3 * 4661 + 224 * -58 + 1671 * 21:
    case 6500 + -11551 * -1 + 458 * -24:
    case 6 * -893 + 1283 + -52 * -189:
    case 317 * -3 + -9081 + 15567:
    case 6148 + -222 * 23 + 4403:
    case 1301 * 8 + -2928 + -3 * 593:
    case 1 * 6733 + 1 * 551 + -2351:
    case 4677:
    case 1157 * 4 + 596 * 7 + -3267:
    case 2 * 5189 + -7060 + 2471:
    case 1 * -6136 + 9589 + -28 * -56:
    case 2684 + 23 * -383 + 10890:
      if (Qe(i) - (11581 + 20 * -579) - n > 825 * 6 + -661 * 7 + -317) switch (gA(i, n + (-3333 * 2 + -1 * 6989 + 24 * 569))) {
        case 117 * -24 + 2 * 1445 + 3 * 9:
          if (gA(i, n + 4) !== 9214 + 1381 * 7 + 68 * -277) break;
        case 5132 + 2 * 2736 + 178 * -59:
          return L(i, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + yo + (gA(i, n + (3 * -563 + -1 * 3394 + -2 * -2543)) == -7823 + -11 * -721 ? "$3" : "$2-$3")) + i;
        case 369 * 18 + 9403 + -5310 * 3:
          return ~fn(i, "stretch", -193 * -2 + -16 * -251 + 62 * -71) ? xI(L(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 1 * -6374 + -6332 + 17858:
    case -10964 + -773 * -5 + 13019:
      return L(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, g, a, s) {
        return K + A + ":" + o + s + (r ? K + A + "-span:" + (g ? a : +a - +o) + s : "") + i;
      });
    case 4949:
      if (gA(i, n + (88 * 13 + 4062 * 1 + -5200)) === -4922 * -1 + 4831 + -9632) return L(i, ":", ":" + U) + i;
      break;
    case -6 * 1761 + 2370 + 14640:
      switch (gA(i, gA(i, 1109 * 1 + 2507 + 1801 * -2) === -1343 * -1 + -2356 + 1058 ? -2 * 4861 + -7268 + 17008 * 1 : -2 * -3545 + -2946 + -4133)) {
        case 9 * 26 + -8426 + -8 * -1039:
          return L(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (gA(i, 14) === -7228 + 7756 * 1 + -21 * 23 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + K + "$2box$3") + i;
        case -9379 * 1 + -25 * 25 + 10104:
          return L(i, ":", ":" + K) + i;
      }
      break;
    case 6 * -274 + -134 * -26 + 9 * 431:
    case 1495 * 1 + 882 + 30 * 9:
    case 2135:
    case -12611 + 16538 * 1:
    case 2044 + -3035 * -1 + -448 * 6:
      return L(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Ln(i, n) {
  for (var t = "", e = -17 * 69 + 6442 + -479 * 11; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function VC(i, n, t, e) {
  switch (i.type) {
    case WC:
      if (i.children.length) break;
    case MC:
    case Da:
      return i.return = i.return || i.value;
    case cI:
      return "";
    case CI:
      return i.return = i.value + "{" + Ln(i.children, e) + "}";
    case pi:
      if (!Qe(i.value = i.props.join(","))) return "";
  }
  return Qe(t = Ln(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function ZC(i) {
  var n = EI(i);
  return function(t, e, A, o) {
    for (var r = "", g = -9245 + -29 * -313 + 168; g < n; g++) r += i[g](t, e, A, o) || "";
    return r;
  };
}
function zC(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function XC(i, n, t, e) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case Da:
        i.return = xI(i.value, i.length, t);
        return;
      case CI:
        return Ln([Je(i, { value: L(i.value, "@", "@" + U) })], e);
      case pi:
        if (i.length) return OC(t = i.props, function(A) {
          switch (be(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Dt(Je(i, { props: [L(A, /:(read-\w+)/, ":" + yo + "$1")] }));
              var o = {};
              o.props = [A], Dt(Je(i, o)), lr(i, { props: dg(t, e) });
              break;
            case "::placeholder":
              Dt(Je(i, { props: [L(A, /:(plac\w+)/, ":" + U + "input-$1")] })), Dt(Je(i, { props: [L(A, /:(plac\w+)/, ":" + yo + "$1")] })), Dt(Je(i, { props: [L(A, /:(plac\w+)/, K + "input-$1")] }));
              var r = {};
              r.props = [A], Dt(Je(i, r)), lr(i, { props: dg(t, e) });
              break;
          }
          return "";
        });
    }
}
var F = {};
F.animationIterationCount = 1, F.aspectRatio = 1, F.borderImageOutset = 1, F.borderImageSlice = 1, F.borderImageWidth = 1, F.boxFlex = 1, F.boxFlexGroup = 1, F.boxOrdinalGroup = 1, F.columnCount = 1, F.columns = 1, F.flex = 1, F.flexGrow = 1, F.flexPositive = 1, F.flexShrink = 1, F.flexNegative = 1, F.flexOrder = 1, F.gridRow = 1, F.gridRowEnd = 1, F.gridRowSpan = 1, F.gridRowStart = 1, F.gridColumn = 1, F.gridColumnEnd = 1, F.gridColumnSpan = 1, F.gridColumnStart = 1, F.msGridRow = 1, F.msGridRowSpan = 1, F.msGridColumn = 1, F.msGridColumnSpan = 1, F.fontWeight = 1, F.lineHeight = 1, F.opacity = 1, F.order = 1, F.orphans = 1, F.tabSize = 1, F.widows = 1, F.zIndex = 1, F.zoom = 1, F.WebkitLineClamp = 1, F.fillOpacity = 1, F.floodOpacity = 1, F.stopOpacity = 1, F.strokeDasharray = 1, F.strokeDashoffset = 1, F.strokeMiterlimit = 1, F.strokeOpacity = 1, F.strokeWidth = 1;
var $C = F, J = {}, pt = typeof process < "u" && J !== void 0 && (J.REACT_APP_SC_ATTR || J.SC_ATTR) || "data-styled", lI = "active", uI = "data-styled-version", wi = "6.1.18", ba = `/*!sc*/
`, On = typeof window < "u" && typeof document < "u", AB = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && J.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && J.REACT_APP_SC_DISABLE_SPEEDY !== "" ? J.REACT_APP_SC_DISABLE_SPEEDY !== "false" && J.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && J !== void 0 && J.SC_DISABLE_SPEEDY !== void 0 && J.SC_DISABLE_SPEEDY !== "" ? J.SC_DISABLE_SPEEDY !== "false" && J.SC_DISABLE_SPEEDY : J.NODE_ENV !== "production"), ug = /invalid hook call/i, an = /* @__PURE__ */ new Set(), eB = function(i, n) {
  if (J.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var g = [], a = 647 * 4 + 1671 * -1 + 229 * -4; a < arguments.length; a++) g[a - (1 * 4057 + -4789 + 733)] = arguments[a];
        ug.test(r) ? (o = !1, an.delete(e)) : A.apply(void 0, _t([r], g, !1));
      }, GA(), o && !an.has(e) && (console.warn(e), an.add(e));
    } catch (r) {
      ug.test(r.message) && an.delete(e);
    } finally {
      console.error = A;
    }
  }
}, bi = Object.freeze([]), Xt = Object.freeze({});
function tB(i, n, t) {
  return t === void 0 && (t = Xt), i.theme !== t.theme && i.theme || n || t.theme;
}
var hr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), oB = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, nB = /(^-|-$)/g;
function fg(i) {
  return i.replace(oB, "-").replace(nB, "");
}
var iB = /(a)(d)/gi, gn = -7337 + -9 * -821, hg = function(i) {
  return String.fromCharCode(i + (i > -821 * -11 + 2614 + -11620 ? -1650 + 19 * -253 + 224 * 29 : 6081 + 25 * -227 + -3 * 103));
};
function pr(i) {
  var n, t = "";
  for (n = Math.abs(i); n > gn; n = n / gn | 8276 * 1 + 2 * -894 + -6488) t = hg(n % gn) + t;
  return (hg(n % gn) + t).replace(iB, "$1-$2");
}
var Yi, fI = 8936 + -203 * -29 + 2 * -4721, gt = function(i, n) {
  for (var t = n.length; t; ) i = (15 * 474 + -1 * -4024 + 653 * -17) * i ^ n.charCodeAt(--t);
  return i;
}, hI = function(i) {
  return gt(fI, i);
};
function rB(i) {
  return pr(hI(i) >>> 7111 + -6497 * -1 + -13608);
}
function pI(i) {
  return J.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Pi(i) {
  return typeof i == "string" && (J.NODE_ENV === "production" || i.charAt(9619 + 2834 * -1 + -6785) === i.charAt(-3 * 756 + 1 * 9974 + -7706).toLowerCase());
}
var _A = {};
_A.childContextTypes = !0, _A.contextType = !0, _A.contextTypes = !0, _A.defaultProps = !0, _A.displayName = !0, _A.getDefaultProps = !0, _A.getDerivedStateFromError = !0, _A.getDerivedStateFromProps = !0, _A.mixins = !0, _A.propTypes = !0, _A.type = !0;
var Ue = {};
Ue.name = !0, Ue.length = !0, Ue.prototype = !0, Ue.caller = !0, Ue.callee = !0, Ue.arguments = !0, Ue.arity = !0;
var et = {};
et.$$typeof = !0, et.compare = !0, et.defaultProps = !0, et.displayName = !0, et.propTypes = !0, et.type = !0;
var Ft = {};
Ft.$$typeof = !0, Ft.render = !0, Ft.defaultProps = !0, Ft.displayName = !0, Ft.propTypes = !0;
var yI = typeof Symbol == "function" && Symbol.for, mI = yI ? Symbol.for("react.memo") : -10711 * -4 + -1 * -82318 + -29 * 2243, aB = yI ? Symbol.for("react.forward_ref") : 110817 + 1 * -28949 + -21756, gB = _A, sB = Ue, DI = et, IB = ((Yi = {})[aB] = Ft, Yi[mI] = DI, Yi);
function pg(i) {
  return ("type" in (n = i) && n.type.$$typeof) === mI ? DI : "$$typeof" in i ? IB[i.$$typeof] : gB;
  var n;
}
var cB = Object.defineProperty, CB = Object.getOwnPropertyNames, yg = Object.getOwnPropertySymbols, BB = Object.getOwnPropertyDescriptor, QB = Object.getPrototypeOf, mg = Object.prototype;
function wI(i, n, t) {
  if (typeof n != "string") {
    if (mg) {
      var e = QB(n);
      e && e !== mg && wI(i, e, t);
    }
    var A = CB(n);
    yg && (A = A.concat(yg(n)));
    for (var o = pg(i), r = pg(n), g = 7 * 1114 + 4746 + -12544; g < A.length; ++g) {
      var a = A[g];
      if (!(a in sB || t && t[a] || r && a in r || o && a in o)) {
        var s = BB(n, a);
        try {
          cB(i, a, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function $t(i) {
  return typeof i == "function";
}
function ka(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function It(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function Dg(i, n) {
  if (6768 + 8921 * -1 + 1 * 2153 === i.length) return "";
  for (var t = i[-9780 + -30 * -326], e = 52 * 153 + 1 * -7941 + 1 * -14; e < i.length; e++) t += i[e];
  return t;
}
function Ao(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function yr(i, n, t) {
  if (t === void 0 && (t = !1), !t && !Ao(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = 26 * 307 + -8562 + -145 * -4; e < n.length; e++) i[e] = yr(i[e], n[e]);
  else if (Ao(n))
    for (var e in n) i[e] = yr(i[e], n[e]);
  return i;
}
function Sa(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var tA = {};
tA[1] = `Cannot create styled-component for component: %s.

`, tA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, tA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, tA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, tA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, tA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, tA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', tA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, tA[9] = "Missing document `<head>`\n\n", tA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, tA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, tA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", tA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, tA[14] = `ThemeProvider: "theme" prop is required.

`, tA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", tA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, tA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, tA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var EB = J.NODE_ENV !== "production" ? tA : {};
function dB() {
  for (var i = [], n = 9649 + -7639 * -1 + -17288; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[-4 * 2221 + 4691 + 4193], e = [], A = 7 * 831 + 1805 + -7621 * 1, o = i.length; A < o; A += -805 + 755 * 2 + -704 * 1) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function io(i) {
  for (var n = [], t = 17 * 547 + 2003 + -11301; t < arguments.length; t++) n[t - (-58 * 41 + -7240 + 1 * 9619)] = arguments[t];
  return J.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -10 * -487 + -9528 + -2329 * -2 ? " Args: ".concat(n.join(", ")) : "")) : new Error(dB.apply(void 0, _t([EB[i]], n, !1)).trim());
}
var xB = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(-7 * 417 + -1289 * -1 + 2142), this.length = 7731 + -1093 * -5 + 1 * -12684, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = 8041 + 19 * -356 + 1277 * -1, e = 1 * 1958 + -226 * -28 + -8286; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -7 * -1077 + 94 * 1 + 2544 * -3) < -9034 * 1 + 2237 * 1 + 6797) throw io(12641 + 25 * -505, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 7494 + 2136 * 1 + -9630;
    }
    for (var g = this.indexOfGroup(n + (115 * 34 + 6915 + -10824)), a = (r = 4800 + -1 * 3398 + -1402, t.length); r < a; r++) this.tag.insertRule(g, t[r]) && (this.groupSizes[n]++, g++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = -2 * -4831 + 8872 + 18534 * -1;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || 9781 * 1 + -1 * -9062 + -18843 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(ba);
    return t;
  }, i;
}(), lB = 1 << 10933 + -1 * 10903, yn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), mn = -7837 + 6140 * 1 + -849 * -2, sn = function(i) {
  if (yn.has(i)) return yn.get(i);
  for (; Jn.has(mn); ) mn++;
  var n = mn++;
  if (J.NODE_ENV !== "production" && ((0 | n) < 0 || n > lB)) throw io(35 * 3 + -7351 + 7262, "".concat(n));
  return yn.set(i, n), Jn.set(n, i), n;
}, uB = function(i, n) {
  mn = n + (16357 + 6 * -2726), yn.set(i, n), Jn.set(n, i);
}, fB = "style[".concat(pt, "][").concat(uI, '="').concat(wi, '"]'), hB = new RegExp("^".concat(pt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), pB = function(i, n, t) {
  for (var e, A = t.split(","), o = 1 * -6719 + 1804 * -1 + -2841 * -3, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, yB = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ba), A = [], o = -2 * 1263 + 40 * -119 + 2 * 3643, r = e.length; o < r; o++) {
    var g = e[o].trim();
    if (g) {
      var a = g.match(hB);
      if (a) {
        var s = 0 | parseInt(a[1], 10), C = a[9411 + -2 * -3463 + -16335];
        -1 * 7425 + -848 + 8273 !== s && (uB(C, s), pB(i, C, a[-3 * 1315 + 4644 + -174 * 4]), i.getTag().insertRules(s, A)), A.length = -4458 + 38 * -127 + 9284;
      } else A.push(g);
    }
  }
}, wg = function(i) {
  for (var n = document.querySelectorAll(fB), t = 9 * 541 + 61 + -4930, e = n.length; t < e; t++) {
    var A = n[t];
    A && A.getAttribute(pt) !== lI && (yB(i, A), A.parentNode && A.parentNode.removeChild(A));
  }
};
function mB() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var bI = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(g) {
    var a = Array.from(g.querySelectorAll("style[".concat(pt, "]")));
    return a[a.length - (-1 * 4808 + 45 * -47 + -577 * -12)];
  }(t), o = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(pt, lI), e.setAttribute(uI, wi);
  var r = mB();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, DB = function() {
  function i(n) {
    this.element = bI(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -1 * -547 + -9557 * 1 + 9010, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw io(313 * 1 + -11 * -215 + -2661);
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
}(), wB = function() {
  function i(n) {
    this.element = bI(n), this.nodes = this.element.childNodes, this.length = 4160 + -1 * -5723 + -9883;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= -7538 * 1 + -7566 + 15104) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), bB = function() {
  function i(n) {
    this.rules = [], this.length = 6288 + -3 * -1893 + -11967;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, -9830 * -1 + 1554 + -11384, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1058 * -3 + 940 + 447 * 5), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), bg = On, kB = { isServer: !On, useCSSOMInjection: !AB }, kI = function() {
  function i(n, t, e) {
    n === void 0 && (n = Xt), t === void 0 && (t = {});
    var A = this;
    this.options = JA(JA({}, kB), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && On && bg && (bg = !1, wg(this)), Sa(this, function() {
      return function(o) {
        for (var r = o.getTag(), g = r.length, a = "", s = function(I) {
          var E = function(Q) {
            return Jn.get(Q);
          }(I);
          if (E === void 0) return "continue";
          var B = o.names.get(E), d = r.getGroup(I);
          if (B === void 0 || !B.size || -7154 + 1 * 277 + 6877 === d.length) return "continue";
          var x = "".concat(pt, ".g").concat(I, '[id="').concat(E, '"]'), l = "";
          B !== void 0 && B.forEach(function(Q) {
            Q.length > -3329 + 6 * 859 + -1825 && (l += "".concat(Q, ","));
          }), a += "".concat(d).concat(x, '{content:"').concat(l, '"}').concat(ba);
        }, C = 2 * -4020 + -1 * 2551 + -623 * -17; C < g; C++) s(C);
        return a;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return sn(n);
  }, i.prototype.rehydrate = function() {
    !this.server && On && wg(this);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new i(JA(JA({}, this.options), n), this.gs, t && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 8658 + -9 * -997 + 653 * -27) + (15 * -337 + -4010 + 9066);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new bB(A) : e ? new DB(A) : new wB(A);
    }(this.options), new xB(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (sn(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(sn(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(sn(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), SB = /&/g, GB = /^\s*\/\/.*$/gm;
function SI(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = SI(t.children, n)), t;
  });
}
function GI(i) {
  var n, t, e, A = i === void 0 ? Xt : i, o = A.options, r = o === void 0 ? Xt : o, g = A.plugins, a = g === void 0 ? bi : g, s = function(E, B, d) {
    return d.startsWith(t) && d.endsWith(t) && d.replaceAll(t, "").length > 3493 + 4 * -1733 + 3439 ? ".".concat(n) : E;
  }, C = a.slice();
  C.push(function(E) {
    E.type === pi && E.value.includes("&") && (E.props[3 * -2377 + 16 * -435 + 33 * 427] = E.props[1 * 6150 + 143 * 2 + -6436].replace(SB, t).replace(e, s));
  }), r.prefix && C.push(XC), C.push(VC);
  var I = function(E, B, d, x) {
    B === void 0 && (B = ""), d === void 0 && (d = ""), x === void 0 && (x = "&"), n = x, t = B, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = E.replace(GB, ""), Q = qC(d || B ? "".concat(d, " ").concat(B, " { ").concat(l, " }") : l);
    r.namespace && (Q = SI(Q, r.namespace));
    var f = [];
    return Ln(Q, ZC(C.concat(zC(function(p) {
      return f.push(p);
    })))), f;
  };
  return I.hash = a.length ? a.reduce(function(E, B) {
    return B.name || io(-8 * -944 + 3617 * -2 + -303), gt(E, B.name);
  }, fI).toString() : "", I;
}
var NB = new kI(), mr = GI(), Ga = ht.createContext({ shouldForwardProp: void 0, styleSheet: NB, stylis: mr });
Ga.Consumer;
var RB = ht.createContext(void 0);
function Dr() {
  return le(Ga);
}
function FB(i) {
  var n = iA(i.stylisPlugins), t = n[-6814 + 2854 * 2 + 1106], e = n[5281 * 1 + -3853 + -1427 * 1], A = Dr().styleSheet, o = BA(function() {
    var C = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(I)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = BA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = C, I.plugins = t, GI(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  Y(function() {
    vC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var g = BA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = o, C.stylis = r, C;
  }, [i.shouldForwardProp, o, r]), a = {};
  a.value = g;
  var s = {};
  return s.value = r, ht.createElement(Ga.Provider, a, ht.createElement(RB.Provider, s, i.children));
}
var kg = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = mr);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Sa(this, function() {
      throw io(12, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return n === void 0 && (n = mr), this.name + n.hash;
  }, i;
}(), vB = function(i) {
  return i >= "A" && i <= "Z";
};
function Sg(i) {
  for (var n = "", t = -4597 * -1 + 4549 + -9146; t < i.length; t++) {
    var e = i[t];
    if (3 * -1719 + -1952 * 1 + -3555 * -2 === t && e === "-" && i[-1 * -7630 + -3917 * -2 + 8 * -1933] === "-") return i;
    vB(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var NI = function(i) {
  return i == null || i === !1 || i === "";
}, RI = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !NI(o) && (Array.isArray(o) && o.isCss || $t(o) ? e.push("".concat(Sg(A), ":"), o, ";") : Ao(o) ? e.push.apply(e, _t(_t(["".concat(A, " {")], RI(o), !1), ["}"], !1)) : e.push("".concat(Sg(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -1425 * -1 + 2796 + 3 * -1407 === t || n in $C || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function ut(i, n, t, e) {
  if (NI(i)) return [];
  if (ka(i)) return [".".concat(i.styledComponentId)];
  if ($t(i)) {
    if (!$t(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return J.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof kg || Ao(A) || A === null || console.error("".concat(pI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ut(A, n, t, e);
  }
  var o;
  return i instanceof kg ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Ao(i) ? RI(i) : Array.isArray(i) ? Array.prototype.concat.apply(bi, i.map(function(r) {
    return ut(r, n, t, e);
  })) : [i.toString()];
}
function MB(i) {
  for (var n = 6083 + 7303 * -1 + 1220; n < i.length; n += -9136 + -9137 * -1) {
    var t = i[n];
    if ($t(t) && !ka(t)) return !1;
  }
  return !0;
}
var WB = hI(wi), LB = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = J.NODE_ENV === "production" && (e === void 0 || e.isStatic) && MB(n), this.componentId = t, this.baseHash = gt(WB, t), this.baseStyle = e, kI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = It(A, this.staticRulesId);
      else {
        var o = Dg(ut(this.rules, n, t, e)), r = pr(gt(this.baseHash, o) >>> 7184 + 4 * -306 + -149 * 40);
        if (!t.hasNameForId(this.componentId, r)) {
          var g = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, g);
        }
        A = It(A, r), this.staticRulesId = r;
      }
    else {
      for (var a = gt(this.baseHash, e.hash), s = "", C = 554 + -158 * 43 + -780 * -8; C < this.rules.length; C++) {
        var I = this.rules[C];
        if (typeof I == "string") s += I, J.NODE_ENV !== "production" && (a = gt(a, I));
        else if (I) {
          var E = Dg(ut(I, n, t, e));
          a = gt(a, E + C), s += E;
        }
      }
      if (s) {
        var B = pr(a >>> 0);
        t.hasNameForId(this.componentId, B) || t.insertRules(this.componentId, B, e(s, ".".concat(B), void 0, this.componentId)), A = It(A, B);
      }
    }
    return A;
  }, i;
}(), FI = ht.createContext(void 0);
FI.Consumer;
var Ti = {}, Gg = /* @__PURE__ */ new Set();
function OB(i, n, t) {
  var e = ka(i), A = i, o = !Pi(i), r = n.attrs, g = r === void 0 ? bi : r, a = n.componentId, s = a === void 0 ? function(k, G) {
    var w = typeof k != "string" ? "sc" : fg(k);
    Ti[w] = (Ti[w] || 0) + (12629 + -574 * 22);
    var H = "".concat(w, "-").concat(rB(wi + w + Ti[w]));
    return G ? "".concat(G, "-").concat(H) : H;
  }(n.displayName, n.parentComponentId) : a, C = n.displayName, I = C === void 0 ? function(k) {
    return Pi(k) ? "styled.".concat(k) : "Styled(".concat(pI(k), ")");
  }(i) : C, E = n.displayName && n.componentId ? "".concat(fg(n.displayName), "-").concat(n.componentId) : n.componentId || s, B = e && A.attrs ? A.attrs.concat(g).filter(Boolean) : g, d = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var x = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var l = n.shouldForwardProp;
      d = function(k, G) {
        return x(k, G) && l(k, G);
      };
    } else d = x;
  }
  var Q = new LB(t, E, e ? A.componentStyle : void 0);
  function f(k, G) {
    return function(w, H, P) {
      var fA = w.attrs, V = w.componentStyle, QA = w.defaultProps, Z = w.foldedComponentIds, en = w.styledComponentId, R0 = w.target, F0 = ht.useContext(FI), v0 = Dr(), Ri = w.shouldForwardProp || v0.shouldForwardProp;
      J.NODE_ENV !== "production" && Wn(en);
      var ja = tB(H, F0, QA) || Xt, fe = function(tn, co, on) {
        var mt = {};
        mt.className = void 0, mt.theme = on;
        for (var Mi, ze = JA(JA({}, co), mt), Wi = 2 * 1706 + 1 * 5407 + 8819 * -1; Wi < tn.length; Wi += -275 * -17 + -16 * -284 + -9218) {
          var nn = $t(Mi = tn[Wi]) ? Mi(ze) : Mi;
          for (var Me in nn) ze[Me] = Me === "className" ? It(ze[Me], nn[Me]) : Me === "style" ? JA(JA({}, ze[Me]), nn[Me]) : nn[Me];
        }
        return co.className && (ze.className = It(ze.className, co.className)), ze;
      }(fA, H, ja), so = fe.as || R0, Io = {};
      for (var KA in fe) fe[KA] === void 0 || KA[-3239 * -3 + -8922 + -1 * 795] === "$" || KA === "as" || KA === "theme" && fe.theme === ja || (KA === "forwardedAs" ? Io.as = fe.forwardedAs : Ri && !Ri(KA, so) || (Io[KA] = fe[KA], Ri || J.NODE_ENV !== "development" || X0(KA) || Gg.has(KA) || !hr.has(so) || (Gg.add(KA), console.warn('styled-components: it looks like an unknown prop "'.concat(KA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Fi = function(tn, co) {
        var on = Dr(), mt = tn.generateAndInjectStyles(co, on.styleSheet, on.stylis);
        return J.NODE_ENV !== "production" && Wn(mt), mt;
      }(V, fe);
      J.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Fi);
      var vi = It(Z, en);
      return Fi && (vi += " " + Fi), fe.className && (vi += " " + fe.className), Io[Pi(so) && !hr.has(so) ? "class" : "className"] = vi, P && (Io.ref = P), MA(so, Io);
    }(p, k, G);
  }
  f.displayName = I;
  var p = ht.forwardRef(f), S = {};
  return S.attrs = !0, S.componentStyle = !0, S.displayName = !0, S.foldedComponentIds = !0, S.shouldForwardProp = !0, S.styledComponentId = !0, S.target = !0, p.attrs = B, p.componentStyle = Q, p.displayName = I, p.shouldForwardProp = d, p.foldedComponentIds = e ? It(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = E, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = e ? function(G) {
      for (var w = [], H = -2 * 539 + -1676 * -3 + -3949; H < arguments.length; H++) w[H - (-5165 + -246 * 37 + -7134 * -2)] = arguments[H];
      for (var P = -2 * 2018 + -62 * -53 + 750, fA = w; P < fA.length; P++) yr(G, fA[P], !0);
      return G;
    }({}, A.defaultProps, k) : k;
  } }), J.NODE_ENV !== "production" && (eB(I, E), p.warnTooManyClasses = /* @__PURE__ */ function(k, G) {
    var w = {}, H = !1;
    return function(P) {
      if (!H && (w[P] = !0, Object.keys(w).length >= 11556 + 4 * -2839)) {
        var fA = G ? ' with the id of "'.concat(G, '"') : "";
        console.warn("Over ".concat(3111 * -2 + -5 * -821 + 2317, " classes were generated for component ").concat(k).concat(fA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, w = {};
      }
    };
  }(I, E)), Sa(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && wI(p, i, S), p;
}
function Ng(i, n) {
  for (var t = [i[30 * -259 + -869 * 11 + 17329]], e = 1483 * 5 + 1 * -8719 + 1304 * 1, A = n.length; e < A; e += -1129 * -1 + -3847 + -2719 * -1) t.push(n[e], i[e + 1]);
  return t;
}
var Rg = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function vI(i) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - (-17793 + -8897 * -2)] = arguments[t];
  if ($t(i) || Ao(i)) return Rg(ut(Ng(bi, _t([i], n, !0))));
  var e = i;
  return -594 + 2 * 297 === n.length && -1 * 6074 + -7695 + -459 * -30 === e.length && typeof e[9306 + 1 * -5095 + -4211] == "string" ? ut(e) : Rg(ut(Ng(e, n)));
}
function wr(i, n, t) {
  if (t === void 0 && (t = Xt), !n) throw io(4966 * -1 + 5 * -596 + 7947, n);
  var e = function(A) {
    for (var o = [], r = -235 * -35 + 4 * -193 + -46 * 162; r < arguments.length; r++) o[r - (-13 * 267 + 639 * 1 + 2833)] = arguments[r];
    return i(n, t, vI.apply(void 0, _t([A], o, !1)));
  };
  return e.attrs = function(A) {
    return wr(i, n, JA(JA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return wr(i, n, JA(JA({}, t), A));
  }, e;
}
var MI = function(i) {
  return wr(OB, i);
}, ro = MI;
hr.forEach(function(i) {
  ro[i] = MI(i);
});
J.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var In = "__sc-".concat(pt, "__");
J.NODE_ENV !== "production" && J.NODE_ENV !== "test" && typeof window < "u" && (window[In] || (window[In] = -8286 + -4143 * -2), 3364 + -73 * -94 + -1 * 10225 === window[In] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[In] += -781 * -1 + -1 * 2869 + 2089);
const JB = ro.div`
  position: relative;
`, UB = ro.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class D extends Error {
  constructor(t, e) {
    super(t);
    y(this, "cause");
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
const Dn = {};
Dn.CONTINUE_DETECTION = "continue-detection", Dn.SWITCH_CAMERA = "switch-camera", Dn.TOGGLE_MIRROR = "toggle-mirror";
const Ut = Dn, br = {};
br.FIRST_FRAME = "first-frame", br.FIRST_VALID_FRAME = "first-valid-frame";
const Hi = br, WI = {};
WI.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Fg = WI;
var LI = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTION_CHANGED = "document-auto-capture:detection-changed", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(LI || {}), ie = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTION_CHANGED = "face-auto-capture:detection-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(ie || {}), Yt = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Yt || {}), YB = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTION_CHANGED = "palm-capture:detection-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(YB || {}), PB = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(PB || {});
const we = {};
we.CANDIDATE_SELECTION = "candidate_selection", we.DOCUMENT_CENTERING = "document_centering", we.DOCUMENT_NOT_PRESENT = "document_not_present", we.DOCUMENT_TOO_FAR = "document_too_far", we.SHARPNESS_TOO_LOW = "sharpness_too_low", we.BRIGHTNESS_TOO_LOW = "brightness_too_low", we.BRIGHTNESS_TOO_HIGH = "brightness_too_high", we.HOTSPOTS_PRESENT = "hotspots_present";
const Xe = we, $e = {};
$e.isPresent = Xe.DOCUMENT_NOT_PRESENT, $e.isNotSmall = Xe.DOCUMENT_TOO_FAR, $e.isNotOutOfBounds = Xe.DOCUMENT_CENTERING, $e.isSharp = Xe.SHARPNESS_TOO_LOW, $e.isNotDim = Xe.BRIGHTNESS_TOO_LOW, $e.isNotBright = Xe.BRIGHTNESS_TOO_HIGH, $e.noHotspots = Xe.HOTSPOTS_PRESENT;
const vt = {};
vt.LOADING = "loading", vt.ERROR = "error", vt.WAITING = "waiting", vt.RUNNING = "running", vt.COMPLETE = "complete";
const zA = vt, OI = { ...zA };
OI.DONE = "done";
const kr = OI, JI = {};
JI.EYE_NOT_PRESENT = "eye_not_present";
const eo = JI, FA = {};
FA.CANDIDATE_SELECTION = "candidate_selection", FA.FACE_TOO_CLOSE = "face_too_close", FA.FACE_TOO_FAR = "face_too_far", FA.FACE_CENTERING = "face_centering", FA.FACE_NOT_PRESENT = "face_not_present", FA.SHARPNESS_TOO_LOW = "sharpness_too_low", FA.BRIGHTNESS_TOO_LOW = "brightness_too_low", FA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", FA.DEVICE_PITCHED = "device_pitched", FA.LEFT_EYE_NOT_PRESENT = "left_" + eo.EYE_NOT_PRESENT, FA.RIGHT_EYE_NOT_PRESENT = "right_" + eo.EYE_NOT_PRESENT, FA.MOUTH_NOT_PRESENT = "mouth_not_present", FA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", FA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const aA = FA, OA = {};
OA.isPresent = aA.FACE_NOT_PRESENT, OA.isNotPitched = aA.DEVICE_PITCHED, OA.isNotSmall = aA.FACE_TOO_FAR, OA.isNotLarge = aA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = aA.FACE_CENTERING, OA.isNotDim = aA.BRIGHTNESS_TOO_LOW, OA.isNotBright = aA.BRIGHTNESS_TOO_HIGH, OA.isSharp = aA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = aA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = aA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = aA.MOUTH_NOT_PRESENT, OA.isMouthScoreNotTooHigh = aA.MOUTH_SCORE_TOO_HIGH, OA.isMouthScoreNotTooLow = aA.MOUTH_SCORE_TOO_LOW;
const TB = OA;
({ ...aA });
var vA = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(vA || {});
const ne = kr, rA = {};
rA.CANDIDATE_SELECTION = "candidate_selection", rA.FACE_TOO_CLOSE = "face_too_close", rA.FACE_TOO_FAR = "face_too_far", rA.FACE_CENTERING = "face_centering", rA.FACE_NOT_PRESENT = "face_not_present", rA.SHARPNESS_TOO_LOW = "sharpness_too_low", rA.BRIGHTNESS_TOO_LOW = "brightness_too_low", rA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", rA.DEVICE_PITCHED = "device_pitched", rA.LEFT_EYE_NOT_PRESENT = "left_" + eo.EYE_NOT_PRESENT, rA.RIGHT_EYE_NOT_PRESENT = "right_" + eo.EYE_NOT_PRESENT, rA.MOUTH_NOT_PRESENT = "mouth_not_present", rA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", rA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low", rA.SMILE = "smile", rA.SMILE_CANDIDATE_SELECTION = "smile_candidate_selection", rA.KEEP_NEUTRAL_EXPRESSION = "keep_neutral_expression";
const UA = rA, YA = {};
YA.isPresent = UA.FACE_NOT_PRESENT, YA.isNotPitched = UA.DEVICE_PITCHED, YA.isNotSmall = UA.FACE_TOO_FAR, YA.isNotLarge = UA.FACE_TOO_CLOSE, YA.isNotOutOfBounds = UA.FACE_CENTERING, YA.isNotDim = UA.BRIGHTNESS_TOO_LOW, YA.isNotBright = UA.BRIGHTNESS_TOO_HIGH, YA.isSharp = UA.SHARPNESS_TOO_LOW, YA.isLeftEyePresent = UA.LEFT_EYE_NOT_PRESENT, YA.isRightEyePresent = UA.RIGHT_EYE_NOT_PRESENT, YA.isMouthPresent = UA.MOUTH_NOT_PRESENT, YA.isMouthStatusNotTooHigh = UA.MOUTH_SCORE_TOO_HIGH, YA.isMouthStatusNotTooLow = UA.MOUTH_SCORE_TOO_LOW;
const Ki = {};
Ki.NEUTRAL = "NEUTRAL", Ki.SMILE = "SMILE", Ki.SMILE_MANUAL = "SMILE_MANUAL";
const te = {};
te.CANDIDATE_SELECTION = "candidate_selection", te.PALM_CENTERING = "palm_centering", te.PALM_NOT_PRESENT = "palm_not_present", te.PALM_TOO_FAR = "palm_too_far", te.PALM_TOO_CLOSE = "palm_too_close", te.SHARPNESS_TOO_LOW = "sharpness_too_low", te.BRIGHTNESS_TOO_LOW = "brightness_too_low", te.BRIGHTNESS_TOO_HIGH = "brightness_too_high", te.DEVICE_PITCHED = "device_pitched", te.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW = "template_extraction_quality_too_low";
const he = te, pe = {};
pe.isPresent = he.PALM_NOT_PRESENT, pe.isNotPitched = he.DEVICE_PITCHED, pe.isNotSmall = he.PALM_TOO_FAR, pe.isNotOutOfBounds = he.PALM_CENTERING, pe.isNotDim = he.BRIGHTNESS_TOO_LOW, pe.isNotBright = he.BRIGHTNESS_TOO_HIGH, pe.isSharp = he.SHARPNESS_TOO_LOW, pe.isNotLarge = he.PALM_TOO_CLOSE, pe.isTemplateExtractionQualityHighEnough = he.TEMPLATE_EXTRACTION_QUALITY_TOO_LOW;
({ ...aA });
const cn = {};
cn.TOP_LEFT = "TOP_LEFT", cn.TOP_RIGHT = "TOP_RIGHT", cn.BOTTOM_RIGHT = "BOTTOM_RIGHT", cn.BOTTOM_LEFT = "BOTTOM_LEFT";
const VA = {};
VA.CANDIDATE_SELECTION = "candidate_selection", VA.FACE_TOO_CLOSE = "face_too_close", VA.FACE_TOO_FAR = "face_too_far", VA.FACE_CENTERING = "face_centering", VA.FACE_NOT_PRESENT = "face_not_present", VA.SHARPNESS_TOO_LOW = "sharpness_too_low", VA.BRIGHTNESS_TOO_LOW = "brightness_too_low", VA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", VA.DEVICE_PITCHED = "device_pitched", VA.LEFT_EYE_NOT_PRESENT = "left_" + eo.EYE_NOT_PRESENT, VA.RIGHT_EYE_NOT_PRESENT = "right_" + eo.EYE_NOT_PRESENT;
const ae = VA, ge = {};
ge.isPresent = ae.FACE_NOT_PRESENT, ge.isNotPitched = ae.DEVICE_PITCHED, ge.isNotSmall = ae.FACE_TOO_FAR, ge.isNotLarge = ae.FACE_TOO_CLOSE, ge.isNotOutOfBounds = ae.FACE_CENTERING, ge.isNotDim = ae.BRIGHTNESS_TOO_LOW, ge.isNotBright = ae.BRIGHTNESS_TOO_HIGH, ge.isSharp = ae.SHARPNESS_TOO_LOW, ge.isLeftEyePresent = ae.LEFT_EYE_NOT_PRESENT, ge.isRightEyePresent = ae.RIGHT_EYE_NOT_PRESENT;
const ki = Ze(void 0);
ki.displayName = "AppStateContext";
function ue() {
  const i = le(ki);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const UI = ue;
var YI = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(YI || {});
const Sr = {};
Sr.FRONT = "user", Sr.BACK = "environment";
const Na = Sr, Gr = {};
Gr.AUTO_CAPTURE = "AUTO_CAPTURE", Gr.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Nr = Gr, Rr = {};
Rr.SIMD = "simd", Rr.NO_SIMD = "no-simd";
const vg = Rr, Fr = {};
Fr.Lower = "Lower", Fr.Higher = "Higher";
const Un = Fr, wn = {};
wn.VISIBLE = "VISIBLE", wn.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", wn.HIDDEN = "HIDDEN";
const mo = wn, vr = {};
vr.MOBILE = "MOBILE", vr.DESKTOP = "DESKTOP";
const Mg = vr;
function Yn() {
  const i = ["ia3dHuZdUqlcSCkNW6xdMa", "rICvfCkjpspcTW", "cK3dMmokqG", "oaNdVmkvh8kWW6fMWQ8MW7JcVq", "zmoZWPVdTCkC", "W5uIFCo9WO0", "kwDknSoy", "BeFdJ1ldHdFcImkGuq", "W79aWQNdIv/dSSoAW5ldHrivta", "Bw8zcSoD", "q8kIi8oh", "ECkWWP7dHxGkgCk7oMRcPH4", "sc1cjSkShWtcKfm", "AKBcHCohrW", "WRNdMNFdHq13W4TKea", "eXNcNSkoau5gWQBcR3WNW4tcKq", "WPldRmoaaX/cI8odWPq/", "h2y+aCkx", "WPxdQ8oaD3ddICkXWRu7WOTeqmoK", "WQNdMmoj", "ESoKm3rWWPWsEtaIca", "WPdcSMFcJ8oF", "WPW0Cmk0WPy", "bCokW6jenSogk8k4sG", "W7tcHmkipSkFFhBcOCoQp8klW6VdMq", "C0JcNuxdRZPkWPSYW5m4WRa", "udhdSCkVWP8", "ESk0s8kIW73cNw7cSra", "W5ddLslcRSkOW5rviL3dR8klymkz", "WR/dNN7cHXfUW5LEhSkl", "WQmJmImK", "W7fiW77cIHNcLCojW6S", "DKBcNKddQdHtWRepW7yKWRi", "lSoNhmkMW6S", "pq/dUCkqh8k1W516WRuUW7pcMq", "muDtW6j4WQeuW4NdVmoVW5W", "oSkhWQD9za"];
  return Yn = function() {
    return i;
  }, Yn();
}
function PI(i, n, t, e, A) {
  return mA(t - -68, e);
}
function Cn(i, n, t, e, A) {
  return mA(e - 521, A);
}
function mA(i, n) {
  const t = Yn();
  return mA = function(e, A) {
    e = e - (-23 * -69 + -1 * 3991 + 2526);
    let o = t[e];
    if (mA.CEhxNW === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      mA.jabyGG = C, i = arguments, mA.CEhxNW = !0;
    }
    const g = t[2942 + -2942 * 1], a = e + g, s = i[a];
    return s ? o = s : (mA.MfPvid === void 0 && (mA.MfPvid = !0), o = mA.jabyGG(o, A), i[a] = o), o;
  }, mA(i, n);
}
function HB(i, n, t, e, A) {
  return mA(e - 335, t);
}
(function(i, n) {
  function t(g, a, s, C, I) {
    return mA(I - 170, C);
  }
  function e(g, a, s, C, I) {
    return mA(g - -632, C);
  }
  function A(g, a, s, C, I) {
    return mA(g - -400, a);
  }
  const o = i();
  function r(g, a, s, C, I) {
    return mA(a - -313, I);
  }
  for (; ; )
    try {
      if (-parseInt(A(-261, "7t@7", -246, -262, -270)) / 1 * (parseInt(r(-172, -176, -193, -173, "etiX")) / 2) + -parseInt(r(-172, -170, -156, -179, "#$e8")) / 3 + parseInt(e(-510, -511, -504, "[Z^D", -506)) / 4 + -parseInt(t(336, 325, 321, "7t@7", 324)) / 5 * (parseInt(A(-255, "Di&y", -274, -245, -255)) / 6) + -parseInt(r(-190, -185, -181, -182, "[Z^D")) / 7 * (-parseInt(r(-143, -157, -153, -173, "JxvF")) / 8) + -parseInt(t(315, 321, 318, "pN9g", 320)) / 9 * (-parseInt(r(-165, -165, -167, -167, "&1RS")) / 10) + parseInt(A(-251, "(NOW", -246, -233, -241)) / 11 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Yn, -379 * -4897 + -163492 + -123 * 6213);
const Pn = Ze(void 0);
function Wg(i, n, t, e, A) {
  return mA(i - 833, e);
}
Pn[Cn(659, 666, 650, 667, "hp08") + Cn(676, 653, 647, 659, "[Z^D") + "e"] = Cn(644, 661, 645, 645, "K*2X") + Cn(661, 662, 683, 672, "85#T") + PI(77, 49, 67, "S6ZA");
function An() {
  const i = le(Pn);
  function n(o, r, g, a, s) {
    return Wg(g - -1254, r - 22, g - 450, o);
  }
  function t(o, r, g, a, s) {
    return Wg(g - -802, r - 223, g - 387, s);
  }
  if (i === void 0) throw new Error(Pn[A(-161, -158, "i4lu") + A(-150, -156, "etiX") + "e"] + (A(-165, -170, "Er4(") + n("LbVb", -290, -291) + t(170, 172, 186, 197, "N1pZ") + t(184, 160, 178, 176, "LbVb") + A(-158, -150, "i4lu") + e(792, 783, 802, 800, "SFtZ") + n("TIeI", -273, -292) + e(798, 773, 775, 786, "(NOW")));
  function e(o, r, g, a, s) {
    return PI(o - 424, r - 45, a - 710, s);
  }
  function A(o, r, g, a, s) {
    return HB(o - 225, r - 326, g, o - -627);
  }
  return i;
}
const Go = (i) => i.length < -223 * -11 + -25 + -2427 ? 0 : i.reduce((t, e) => t + e, -2595 + 1 * 8747 + -6152) / i.length, Fe = (i) => Number.parseFloat(i.toFixed(727 * -7 + 5105 + 13 * -1));
function KB(i) {
  const n = i.getContext("2d");
  n && n.clearRect(9910 + 47 * 2 + -10004, 187 * 17 + -2 * 257 + -2665, n.canvas.width, n.canvas.height);
}
const TI = 4482 + -13 * 535 + 2473 + 0.75, jB = 2, qB = 1 * 681 + 7368 + -7449, _B = 0, VB = "dot-auto-capture-video", Si = (i, n) => Math.min(i, n), HI = ({ height: i, width: n }, t) => {
  const e = Si(n, i) * t, A = (n - e) / (-645 * -1 + 78 * 42 + -3919), o = (i - e) / (4 * 934 + -1582 * 2 + -570), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, ZB = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = HI(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, zB = ({ height: i, width: n }) => {
  const t = Si(n, i), e = t / (-6855 + -18 * -381) * (-881 * 1 + 8110 + -7225);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
};
function XB(i, n) {
  const t = Si(n.width, n.height);
  return Fe(i * t);
}
function $B({ height: i, width: n }) {
  const t = {};
  return t.height = i, t.width = n, HI(t, TI);
}
function AQ(i) {
  return ZB(i, TI);
}
function eQ(i, n) {
  return XB(i, n) * jB;
}
const tQ = "8.0.0", oQ = {
  version: tQ
}, nQ = -4168 * -2 + 1450 * 1 + 3 * -3259 + 0.8100000000000005, Mr = {};
Mr.max = 100, Mr.min = 10;
const Lg = Mr, iQ = -19 + -10 * -11 + 629, rQ = 4773 + 1 * -1688 + 2885 * -1, aQ = 4, KI = "AES-CBC", jI = "RSA-OAEP", gQ = "SHA-256", sQ = "image/jpeg", IQ = 8, cQ = -519 + -409 * -16 + -5985, qI = "/dot-assets", Og = "dot_embedded_bg.wasm", Wr = (i) => new Promise((n) => {
  setTimeout(n, i);
}), _I = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Fe(t) : t)), VI = () => oQ.version, ZI = (i) => new URL(i).hostname.replace("www.", ""), Ra = () => ZI(window.location.href) === "localhost", CQ = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i, Jg = (i, n) => Math.abs(i - n);
function BQ(i, n) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, i(...e);
    }, n));
  };
}
function QQ(i) {
  return i.at(-1) === "/" ? i.slice(6186 + 8 * 1014 + -14298, -1) : i;
}
function zI(i) {
  return "" + QQ(i ?? "") + qI;
}
function Co(i) {
  return (...n) => {
    Ra() && console[i](...n);
  };
}
const Gi = { log: Co("log"), warn: Co("warn"), error: Co("error"), info: Co("info"), debug: Co("debug") }, EQ = () => "prod".toLowerCase() === "dev";
var Te;
class Fa extends Array {
  constructor(t) {
    super();
    W(this, Te);
    v(this, Te, t);
  }
  get size() {
    return m(this, Te);
  }
  pushFixed(...t) {
    if (t.length > m(this, Te)) {
      const e = t.slice(-m(this, Te));
      this.push(...e);
      return;
    }
    this.length === m(this, Te) && this.splice(73 * 45 + -8179 + 4894, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(7871 + 25 * -226 + -2221);
  }
}
Te = new WeakMap();
const XI = (i, n, t = sQ) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), $I = async (i) => XI(i, -1330 + 1459 * -1 + -2879 * -1), dQ = async (i) => XI(i, -1 * 9454 + -5130 + 4 * 3671, "image/png"), Ac = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -2900 * 3 + -1 * 9238 + 17938, 9003 + -85 * 25 + 6878 * -1, t.width, t.height), t;
}, ec = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(4402 + 8693 * -1 + -7 * -613, -6180 + 281 * -1 + -13 * -497, i.width, i.height);
  return t;
};
async function xQ(i, n) {
  const t = Ac(i, n);
  return dQ(t);
}
const tc = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(n.topLeft.x, n.topLeft.y, n.width, n.height)) : (A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height)), A.stroke());
}, ji = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, g = {};
  g.x = A, g.y = o;
  const a = {};
  a.topLeft = g, a.width = r, a.height = e, a.color = t, tc(i, a, t);
}, Do = (i, n, t, e = 6 * 1142 + -2847 + 89 * -45) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(n.x + e, n.y + e, -1 * -2577 + -9127 * -1 + 7 * -1671, 305 * 5 + -70 * 76 + 3802), A.beginPath());
}, lQ = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, uQ = (i, n) => Object.values(i).every((t) => lQ(t, n));
function Tn(i) {
  const { height: n, width: t } = zB(i), e = (i.width - t) / (-29 * 173 + 1590 + 127 * 27), A = (i.height - n) / 2, o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function oc(i, n, t) {
  const { height: e, width: A } = t, o = Si(i.width, i.height), r = A - o * n * (-94 * 83 + 4811 + 2993), g = e - o * n * (5879 + -2302 * -3 + -3 * 4261), a = (i.width - r) / (-6 * 613 + -5 * 781 + -41 * -185), s = (i.height - g) / (-2408 * 3 + -3973 + 1 * 11199), C = {};
  return C.shiftX = a, C.shiftY = s, C.width = r, C.height = g, C;
}
function wt(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function va() {
  return /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
}
function Ug() {
  return /Android/i.test(navigator.userAgent);
}
function ft() {
  return /Firefox/i.test(navigator.userAgent);
}
function fQ() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
const hQ = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
};
function pQ() {
  return navigator.userAgent;
}
function yQ() {
  var i;
  return (i = navigator.userAgentData) == null ? void 0 : i.getHighEntropyValues(["architecture", "brands", "fullVersionList", "platform", "platformVersion"]);
}
function wo() {
  return !1;
}
function mQ() {
  return !0;
}
(function(i, n) {
  const t = i();
  function e(a, s, C, I, E) {
    return sA(a - 351, C);
  }
  function A(a, s, C, I, E) {
    return sA(C - -229, I);
  }
  function o(a, s, C, I, E) {
    return sA(C - -61, I);
  }
  function r(a, s, C, I, E) {
    return sA(E - 65, a);
  }
  function g(a, s, C, I, E) {
    return sA(a - 18, C);
  }
  for (; ; )
    try {
      if (-parseInt(o(426, 419, 429, "9r(y", 436)) / 1 * (-parseInt(r("yAy$", 529, 542, 544, 535)) / 2) + parseInt(r("#Jtt", 557, 555, 555, 557)) / 3 + -parseInt(e(842, 844, "eqxk", 834, 843)) / 4 * (parseInt(g(503, 509, "GND%", 496, 498)) / 5) + -parseInt(o(430, 439, 432, "eqxk", 442)) / 6 + -parseInt(A(257, 249, 246, "jJwv", 242)) / 7 + parseInt(g(497, 487, "GND%", 489, 492)) / 8 + parseInt(o(415, 429, 423, "o#x$", 430)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Hn, 976657);
function sA(i, n) {
  const t = Hn();
  return sA = function(e, A) {
    e = e - (-647 * 1 + -1765 + 1 * 2882);
    let o = t[e];
    if (sA.EnZkXr === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      sA.ERJZjW = C, i = arguments, sA.EnZkXr = !0;
    }
    const g = t[-28 * -230 + 5527 + -11967], a = e + g, s = i[a];
    return s ? o = s : (sA.sSAqqk === void 0 && (sA.sSAqqk = !0), o = sA.ERJZjW(o, A), i[a] = o), o;
  }, sA(i, n);
}
function Hn() {
  const i = ["mSkqvHxdUI8JWR7dTCkzx8ktWOG", "WPiwW7RdTmkla1xcJg9EWPzrnSoo", "WQ3cGmkVASkfpqFcRG", "W6VcV8kiFJJcL2ldRIxcVCoPf8oE", "eHfoW6JdOGWbjvXPW78Bvq", "W63cVSkdDdVcLMBdLa7cN8oRc8o8", "WRJcHK02lgFdRZFdG38u", "jIlcSG7cQstcPY9Sq8oCWPGwca", "W4zvl8oV", "WQFdOmkkW54kWO4Qca", "Fq3dKxePhCoAjW", "xb/cUSoMWRrnWRVdKW1IvSk4W5C", "W6BdQtLtW4e", "W4XEkmoOW5i", "zNuLBHjxWOWdW4ddHdW", "m8kKnCoqWRiiyZDvW44CF8olqG", "WOtdPIhdQCoS", "ndf8jfC", "EqpcQW5ZDSkqamoSW4NdQCopW78", "WR3dR8kVAGC", "WR/cUbBcJCksyCotgCkYamonWQjCWR4", "mmkMFSkhW6vCcha", "jdz9mu0", "tSoKWRiTW5PzWOvbW7XWDSk3va"];
  return Hn = function() {
    return i;
  }, Hn();
}
function DQ({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = iA();
  function A(s, C, I, E, B) {
    return sA(B - -723, s);
  }
  function o(s, C, I, E, B) {
    return sA(E - 496, B);
  }
  const r = t !== void 0;
  Y(() => {
    async function s() {
      await n[I(978, "v@5O", 979, 979)](zI(i));
      function C(E, B, d, x, l) {
        return sA(d - -231, l);
      }
      function I(E, B, d, x, l) {
        return sA(x - 507, B);
      }
      e(n[C(248, 252, 249, 257, "oJ9s") + C(250, 250, 246, 239, "v@5O") + I(993, "LiKj", 994, 990) + "t"]());
    }
    s();
  }, [n, i, e]);
  const g = {};
  g[o(986, 970, 976, 977, "WZP4") + A("dgKw", -246, -258, -247, -247)] = t;
  function a(s, C, I, E, B) {
    return sA(I - 747, s);
  }
  return g[a("WZP4", 1239, 1233) + "sh"] = r, g;
}
(function(i, n) {
  function t(g, a, s, C, I) {
    return DA(I - 357, g);
  }
  function e(g, a, s, C, I) {
    return DA(I - -157, s);
  }
  const A = i();
  function o(g, a, s, C, I) {
    return DA(C - -452, s);
  }
  function r(g, a, s, C, I) {
    return DA(I - 257, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(199, 201, "GNcR", 194, 204)) / 1 + -parseInt(e(198, 212, "uuqp", 209, 209)) / 2 + -parseInt(r(629, "dHnI", 625, 622, 620)) / 3 + -parseInt(t("nl0l", 751, 739, 723, 736)) / 4 * (-parseInt(r(634, "b9fd", 634, 626, 621)) / 5) + -parseInt(t("B6YY", 756, 746, 737, 740)) / 6 * (-parseInt(t("%DcL", 724, 728, 716, 732)) / 7) + -parseInt(e(225, 222, "dHnI", 247, 231)) / 8 * (-parseInt(r(628, "mMmH", 615, 623, 629)) / 9) + parseInt(o(-89, -72, "iZsa", -81, -84)) / 10 * (-parseInt(t("Nn51", 708, 724, 714, 717)) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Kn, 769897);
function Kn() {
  const i = ["W7VcSqdcQ8kcD0lcH8oveSkQW54", "WRxdNSk6WO88a8k+WRFdOMraoq", "W4ZcP8oeWOi1", "Ew3dNGXMW74AWOG", "W73dV2tdMSoifuy", "WPaZW68bW78bu8k7je3cRY8", "EmoqEW", "hrNdN8k8W5L6deZdGwhcT8kq", "dXhcUCoKC34qWOdcMmk+WQ89", "q8otW5/dLCkwW7NcMr/dG8ksoHi", "jmoNWP7cOCokqcWUvcVcUSkYWRtdIq", "zYldS8kYW7a", "W4NdSCoEW7/cUa", "Amkweea", "aColWP/cVf4EWOlcLSorjWGe", "W6m4gmkte8oaWPjKoqFcUSoA", "dh1nW4ZdKftcSM0jWQ/dLmoZ", "jSoNWPlcOCokrMb/sY3cICk4", "q8oqW5/cHmolWOlcNqRdHq", "r8osiSo8W5K", "xCkxWQhcOa1vymkZW4qTfhVcRG", "mmkYfSklkSktW7lcHfWCWPa2uri", "is/cPSkYxSoFxW", "W57dM3WziSkWb0nl", "w8kFdutdHG", "jSovW7XFWPZdLSk9zW", "nSoasuhdNH/dVW", "W53dOSotW6FcVW", "xKVcGG", "W4mue8kXlCoRga", "WO3dMSkDW4jJWPdcUHBdK8kWrmofjG", "F8obzSkAhq"];
  return Kn = function() {
    return i;
  }, Kn();
}
function DA(i, n) {
  const t = Kn();
  return DA = function(e, A) {
    e = e - (-8610 + -25 * -75 + 7094);
    let o = t[e];
    if (DA.xByfNL === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      DA.ekixHK = C, i = arguments, DA.xByfNL = !0;
    }
    const g = t[-23 * 183 + 256 * 16 + 113], a = e + g, s = i[a];
    return s ? o = s : (DA.lnbvGI === void 0 && (DA.lnbvGI = !0), o = DA.ekixHK(o, A), i[a] = o), o;
  }, DA(i, n);
}
function wQ({ assetsDirectoryPath: i, children: n, bramble: t }) {
  const e = {};
  e[r("T8AJ", 1198) + "le"] = t;
  function A(E, B, d, x, l) {
    return DA(E - 738, d);
  }
  function o(E, B, d, x, l) {
    return DA(d - -343, E);
  }
  function r(E, B, d, x, l) {
    return DA(B - 825, E);
  }
  e[o("t7qp", 7, 22) + A(1118, 1134, "sPGq") + r("44jr", 1202) + I("7k5e", -37)] = i;
  const { sunfish: g, crosshatch: a } = DQ(e), s = BA(() => ({ sunfish: g, crosshatch: a, bramble: t }), [g, a, t]), C = {};
  C[A(1128, 1129, "T8AJ")] = s, C[o("7k5e", 29, 27) + r("RH1c", 1199)] = n;
  function I(E, B, d, x, l) {
    return DA(B - -396, E);
  }
  return b(Pn[r("^!8b", 1214) + A(1122, 1131, "44jr")], C);
}
(function(i, n) {
  var t = i();
  function e(a, s, C, I, E) {
    return ZA(C - -961, I);
  }
  function A(a, s, C, I, E) {
    return ZA(a - -980, C);
  }
  function o(a, s, C, I, E) {
    return ZA(a - -582, E);
  }
  function r(a, s, C, I, E) {
    return ZA(C - -432, a);
  }
  for (; ; )
    try {
      var g = -parseInt(o(-216, -214, -222, -217, "xY]^")) / 1 * (-parseInt(r("FAkp", -61, -65, -56, -70)) / 2) + -parseInt(A(-611, -605, "&uP5", -619, -606)) / 3 * (parseInt(e(-583, -590, -590, "4(1V", -594)) / 4) + -parseInt(r("8RtE", -60, -67, -72, -76)) / 5 + parseInt(r("fgSl", -56, -64, -67, -70)) / 6 + -parseInt(A(-610, -601, "gb30", -616, -610)) / 7 + parseInt(A(-617, -623, "Saf1", -609, -611)) / 8 + parseInt(A(-600, -601, "[(#l", -597, -607)) / 9;
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(jn, 587663 + 3 * -281160 + 992898);
function jn() {
  var i = ["W4urWQK0r8kVBq", "WRqLWOCWpCkxW5zvgmo3ECoF", "WPJdNw/dMmoKWPOZw8kpxmkqWRzd", "W4fOWQpcRxHLWOmWW6dcLG", "eZjfDmk4W64emgtdOCo2W7fl", "jNqrWRbVWO/cO8klvKW", "t8kUWPCcEmoibSkYW5Pw", "iKJdL8oAW6ldUmorps3cJSkNWQX7", "WOqqWPdcGCo8WPfqW7FdP8oQs8o8", "emk+i8oKW5eoqG", "AJZdJspdKSo5k8ohggpcOc3cGq", "W7eDobNdLh9YW75/gq", "jNqxWRmUW7hdP8kJBx/cI8o9W5a", "uCoJk8kmWPiMmSowWOK/W4VdQW", "buqNW5BdJqmmqCoVWQ8b", "W53cGNjOW79wWQhcRaZdStnSW4e", "WP7dMMJdMmoHW4rRxSk4Dmkd", "e8oOvmk0WQj7DZHBW7nTsW"];
  return jn = function() {
    return i;
  }, jn();
}
function ZA(i, n) {
  var t = jn();
  return ZA = function(e, A) {
    e = e - (6901 * -1 + -6799 + 14063);
    var o = t[e];
    if (ZA.pbMMAS === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", d = "", x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, S = B.length; p < S; p++)
          d += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, g = function(I, E) {
        var B = [], d = 0, x, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      ZA.ewfDGd = g, i = arguments, ZA.pbMMAS = !0;
    }
    var a = t[0], s = e + a, C = i[s];
    return C ? o = C : (ZA.apFsIG === void 0 && (ZA.apFsIG = !0), o = ZA.ewfDGd(o, A), i[s] = o), o;
  }, ZA(i, n);
}
const qn = Ze(void 0);
qn.displayName = "TransactionCountingContext";
function Ma() {
  const i = le(qn);
  if (i === void 0)
    throw new Error(`${qn.displayName} must be used within a TransactionCountingProvider`);
  return i;
}
const bQ = -5993 * -1 + 87 * 82 + 11127 * -1;
class kQ {
  constructor(n) {
    y(this, "transactionCountingToken");
    this.transactionCountingToken = n;
  }
  async validateToken() {
    const n = "https://tcs.innovatrics.com/transaction-system/v1/tokeninfo", t = new AbortController(), e = setTimeout(() => t.abort(), bQ), A = {};
    A["Content-Type"] = "application/json", A["X-Innovatrics-Authorization"] = "Bearer " + this.transactionCountingToken;
    const o = {};
    o.method = "POST", o.headers = A, o.signal = t.signal;
    const r = o, g = await fetch(n, r).catch(() => null);
    return clearTimeout(e), g ? g.status !== 1 * 4157 + 5412 * -1 + 1 * 1655 && g.status !== 401 : !0;
  }
}
var Tt, ke, He, Ht, Ro, Fo, vo, Mo;
class nc {
  constructor({ hwids: n, tokenHandler: t, transactionType: e }) {
    W(this, Tt);
    W(this, ke);
    W(this, He);
    W(this, Ht);
    W(this, Ro);
    W(this, Fo);
    W(this, vo);
    W(this, Mo);
    v(this, Tt, t), v(this, Ro, n), v(this, Mo, e), v(this, Fo, window.location.origin), v(this, vo, "8.0.0");
  }
  async init(n) {
    if (v(this, He, this.shouldCountTransactions(n)), Gi.info("Transaction counting is " + (m(this, He) ? "enabled" : "disabled")), Ra()) {
      v(this, ke, !0), v(this, He, !1);
      return;
    }
    if (!m(this, He)) {
      v(this, ke, !0);
      return;
    }
    if (v(this, Ht, m(this, Tt).transactionCountingToken), !m(this, Ht)) {
      console.warn("Transaction counting token is missing"), v(this, ke, !1);
      return;
    }
    v(this, ke, await m(this, Tt).validateToken());
  }
  shouldCountTransactions(n) {
    var t, e, A, o, r, g;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) != null && o["realTimeTransactionReportingDisabled"]) : ((g = (r = n == null ? void 0 : n.dotWeb) == null ? void 0 : r.features) == null ? void 0 : g["realTimeTransactionReportingEnabled"]) ?? !0;
  }
  trackTransaction() {
    this.prepareAndSendTransaction();
  }
  prepareAndSendTransaction() {
    if (!m(this, He) || !m(this, ke)) return;
    const n = this.prepareTransactions();
    this.sendTransactions(n);
  }
  prepareTransactions() {
    const n = crypto.randomUUID(), t = new Date(Date.now()).toISOString(), e = {};
    e.hwids = m(this, Ro), e.id = m(this, Fo), e.version = m(this, vo);
    const A = {};
    A.application = e, A.sessionId = n, A.timestamp = t, A.transactionId = n, A.transactionType = m(this, Mo);
    const o = A, r = {};
    return r.transactions = [o], r;
  }
  sendTransactions(n) {
    const t = "https://tcs.innovatrics.com/transaction-system/v1/transaction", e = {};
    e["Content-Type"] = "application/json", e["X-Innovatrics-Authorization"] = "Bearer " + m(this, Ht);
    const A = { method: "POST", headers: e, body: JSON.stringify(n) };
    fetch(t, A);
  }
  get isTransactionTokenValid() {
    return m(this, ke) || !1;
  }
}
Tt = new WeakMap(), ke = new WeakMap(), He = new WeakMap(), Ht = new WeakMap(), Ro = new WeakMap(), Fo = new WeakMap(), vo = new WeakMap(), Mo = new WeakMap();
class SQ extends nc {
  trackLivenessTransaction() {
    this.prepareAndSendTransaction();
  }
  trackTransaction() {
  }
}
const tt = {};
tt.FACE = "web-capture-face", tt.DOCUMENT = "web-capture-document", tt.MAGNIFEYE = "web-capture-magnifeye", tt.SMILE = "web-capture-smile", tt.PALM = "web-capture-palm", tt.EYEGAZE = "web-capture-eyegaze";
const ot = tt, Lr = {};
Lr.LIVENESS = "liveness", Lr.CAPTURE = "capture";
const Pe = Lr, GQ = { [ot.FACE]: Pe.CAPTURE, [ot.DOCUMENT]: Pe.CAPTURE, [ot.MAGNIFEYE]: Pe.LIVENESS, [ot.SMILE]: Pe.LIVENESS, [ot.PALM]: Pe.CAPTURE, [ot.EYEGAZE]: Pe.LIVENESS }, NQ = GQ;
class RQ {
  create({ hwids: n, tokenHandler: t, transactionType: e }) {
    const A = NQ[e];
    switch (A) {
      case Pe.CAPTURE:
        const o = {};
        return o.hwids = n, o.tokenHandler = t, o.transactionType = e, new nc(o);
      case Pe.LIVENESS:
        const r = {};
        return r.hwids = n, r.tokenHandler = t, r.transactionType = e, new SQ(r);
      default:
        throw new Error("Unknown capture type: " + A);
    }
  }
}
function FQ(i, n) {
  const { crosshatch: t, bramble: e } = An(), [A, o] = iA(null);
  Y(() => {
    if (!t) return;
    (async () => {
      const a = new RQ(), s = new kQ(n), C = a.create({ hwids: e.getHwids(), tokenHandler: s, transactionType: i });
      await C.init(t), o(C);
    })();
  }, [n, t, e, i]);
  const r = {};
  return r.transactionCounting = A, r;
}
function vQ({
  children: i,
  transactionCountingToken: n,
  transactionType: t
}) {
  const { transactionCounting: e } = FQ(t, n), A = BA(
    () => ({
      transactionCounting: e
    }),
    [e]
  );
  return /* @__PURE__ */ b(qn.Provider, { value: A, children: i });
}
function MQ({ children: i, value: n }) {
  const { crosshatch: t } = An(), { transactionCounting: e } = Ma(), A = t != null && t.isValid && (e != null && e.isTransactionTokenValid) ? Un.Higher : Un.Lower, o = BA(
    () => ({
      ...n,
      redfin: A
    }),
    [n, A]
  );
  return /* @__PURE__ */ b(ki.Provider, { value: o, children: i });
}
class ic extends $A {
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
    return ((n = this.context) == null ? void 0 : n.appState) === zA.ERROR ? null : this.props.children;
  }
}
y(ic, "contextType", ki);
const WQ = ro.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, LQ = ro.div`
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
function OQ() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const JQ = nI(
  ({ detectionDetails: i, isImageMirror: n }, t) => OQ() ? (console.log(i), /* @__PURE__ */ b(Ae, { children: [
    /* @__PURE__ */ b(WQ, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ b(LQ, { children: /* @__PURE__ */ b("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), _n = Ze(void 0);
_n.displayName = "AnalyticsContext";
function rc() {
  const i = le(_n);
  if (i === void 0)
    throw new Error(`${_n.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function UQ({ analytics: i, crosshatch: n }) {
  return n !== void 0 && i.shouldReportAnalytics(n) ? i : void 0;
}
function YQ({ analytics: i, apiKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = UQ(o);
  return Y(() => {
    r && r.init(n, A.getCustomerName());
  }, [r, A, n]), Y(() => {
    e && (Gi.info("Analytics is " + (r != null && r.shouldReportAnalytics(e) ? "enabled" : "disabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), r;
}
function PQ({
  analytics: i,
  apiKey: n,
  children: t
}) {
  const { crosshatch: e, bramble: A } = An(), { redfin: o } = ue(), r = YQ({
    analytics: i,
    redfin: o,
    crosshatch: e,
    bramble: A,
    apiKey: n
  }), g = BA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ b(_n.Provider, { value: g, children: t });
}
const Vn = Ze(void 0);
Vn.displayName = "CameraServiceContext";
function ac() {
  const i = le(Vn);
  if (i === void 0)
    throw new Error(`${Vn.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function gc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function qi() {
  return (await gc()).filter((n) => n.kind === "videoinput");
}
function Pt(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Or(i) {
  return i.getVideoTracks()[-2 * 1829 + -1 * 7628 + 11286];
}
(function(i, n) {
  function t(g, a, s, C, I) {
    return wA(g - -406, C);
  }
  function e(g, a, s, C, I) {
    return wA(a - -989, C);
  }
  const A = i();
  function o(g, a, s, C, I) {
    return wA(a - 215, s);
  }
  function r(g, a, s, C, I) {
    return wA(I - 992, a);
  }
  for (; ; )
    try {
      if (-parseInt(o(531, 533, "S&(c", 515, 545)) / 1 * (-parseInt(t(-98, -87, -108, "63zJ", -90)) / 2) + parseInt(e(-672, -663, -649, "63zJ", -649)) / 3 + parseInt(e(-669, -682, -687, "9hOm", -690)) / 4 + -parseInt(r(1326, "CIyj", 1325, 1337, 1331)) / 5 + parseInt(r(1293, "Rb09", 1323, 1314, 1305)) / 6 + -parseInt(o(550, 550, "1(AR", 534, 561)) / 7 + -parseInt(o(561, 553, "ci9)", 569, 545)) / 8 === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Zn, -270242 * 4 + -1 * -550933 + -1 * -1224688);
function wA(i, n) {
  const t = Zn();
  return wA = function(e, A) {
    e = e - (-10561 + 2 * 5434);
    let o = t[e];
    if (wA.YGOvCQ === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      wA.kPAaMV = C, i = arguments, wA.YGOvCQ = !0;
    }
    const g = t[-5843 + 1 * -5609 + 11452], a = e + g, s = i[a];
    return s ? o = s : (wA.KWOKlU === void 0 && (wA.KWOKlU = !0), o = wA.kPAaMV(o, A), i[a] = o), o;
  }, wA(i, n);
}
function Zn() {
  const i = ["xsZcNWHn", "WRhdK8k/ASo2y0dcTWdcP8kOW4xdVW", "amoAlr3dUG", "W6zbBmkvWRODANr6WPxcKCkdW48", "xCk9WQH1W5q", "i8k7W73dSSk8W7xcLf4kyuBdKG", "h8orW5xdPXqjsYSisv8jW54", "dmoLW7KWWQnoiSktWQNdMSkmWQRcTa", "BKX0", "pGdcJCkdySofWP3dHmoxWQ1zWOhdIG", "dJBcMSo5sCosrbTtDmoWWORdRq", "W6SOW5yeWPC", "WQ4ZWO3cJCks", "WRxdLmk5AmoYzeRcMtlcHCkGW4FdQa", "WQJdPx/cLd8IdhFcKWudW7a", "WPxcVqjSW50ZCcH3ySksWQil", "WOxdSmojWOS", "W4rVAHCE", "W4RdQvS+WPK", "A8oQWQKxD8kpWOtdGSoHW6ZdL8kdW5W", "WOlcPSk2ffC", "W4/cJSklW5yNWPpdQG", "WQ7dTCkuWPNcUa", "W7/cVSomW4FdJsHQxqpcImo2E8kd", "le5NW5xdJGnX", "W7/cLmkPASkA", "W5BcLmoiWOe", "rmkcWORcT1q", "WOJcRmk0iuS", "FLJcHCoQW4i", "WO7cQSkYj2a", "yq/dRvWi", "WQJdPxpcNJuGgxJcRtaKW7y", "CCkyxCormq", "sJFdQ0a+", "isTXC8oyWQRdKayBrXFdVq", "t8oGaCkLW5i", "tmkWWQ1YW7q"];
  return Zn = function() {
    return i;
  }, Zn();
}
function TQ(i) {
  function n(g, a, s, C, I) {
    return wA(g - 992, a);
  }
  const t = new ArrayBuffer(i[n(1319, "4C)H") + "h"]);
  function e(g, a, s, C, I) {
    return wA(s - 413, g);
  }
  function A(g, a, s, C, I) {
    return wA(g - -547, I);
  }
  const o = new Uint8Array(t);
  function r(g, a, s, C, I) {
    return wA(g - -54, s);
  }
  for (let g = -4879 + -6379 * 1 + 11258, a = i[n(1304, "z1et") + "h"]; g < a; g++)
    if (n(1322, "LlD^") !== n(1303, "&Naj")) o[g] = i[r(270, 280, "Vq!t") + n(1335, "$Ff$")](g);
    else {
      const s = new _0x4abb85(_0x4ebd16);
      return _0x34718d[r(256, 248, "BUSs")](s[A(-228, -221, -246, -217, "AGpD") + "e"](function(C, I) {
        function E(d, x, l, Q, f) {
          return e(l, x - 448, x - 346);
        }
        function B(d, x, l, Q, f) {
          return r(Q - 480, x - 96, d);
        }
        return C + _0x1fd49d[E(1081, 1075, "0OrX") + B("WXUH", 765, 758, 770) + "de"](I);
      }, ""));
    }
  return t;
}
(function(i, n) {
  const t = i();
  function e(a, s, C, I, E) {
    return _(E - -314, s);
  }
  function A(a, s, C, I, E) {
    return _(a - 569, I);
  }
  function o(a, s, C, I, E) {
    return _(I - -184, E);
  }
  function r(a, s, C, I, E) {
    return _(E - 438, C);
  }
  function g(a, s, C, I, E) {
    return _(s - 945, I);
  }
  for (; ; )
    try {
      if (parseInt(r(662, 687, "dkrM", 669, 670)) / 1 * (-parseInt(e(-127, "s)hb", -120, -76, -99)) / 2) + -parseInt(A(804, 797, 807, "b)bF", 813)) / 3 * (parseInt(o(-14, 17, -22, 0, "EA@!")) / 4) + -parseInt(g(1187, 1174, 1202, "uX4m", 1179)) / 5 + -parseInt(o(35, 11, 19, 8, "ok[%")) / 6 * (-parseInt(r(624, 675, "uO^N", 662, 650)) / 7) + -parseInt(e(-158, "7Ov]", -144, -154, -135)) / 8 + parseInt(e(-117, "QJ*L", -98, -134, -111)) / 9 + -parseInt(e(-143, "O#6o", -102, -111, -132)) / 10 * (-parseInt(o(67, 30, 26, 38, "am8(")) / 11) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(zn, 3 * 277652 + 1204457 * -1 + -99 * -11131);
function zn() {
  const i = ["W7aFiMnE", "f8k8k8krza", "B1xdMs0", "W7GkySoptq", "WPXsytbox13dGXJdUsNdUW", "sHZdVSomFG", "W6bVDmkHuCkzW4e", "W595jW", "WPZcKg7dSNFdIxW2WQRdUCogW55P", "EZNdJCoLWQ7dJHXni8oyz8oyW44", "W5JdI1xcVG", "WOJdUCoHW7isq8kg", "WQ5akSkhcCk+mSk2WQSHWOlcLXC", "W7vTvSomWQv+fSku", "DmoWW63dImkg", "iGK1wCk+", "zCoqWPpdTJu", "WPDfqCo7", "W6vbAmkLE8kfW4m", "WQnii8kldmk6n8ksWPuaWPVcNtW", "W4/cTCoFW5ldMW", "WQSvf8keaZhcNYVcPSoPWRCj", "wmkUtW", "W5xdJmojW5m", "WQzLxSkY", "W7ydohXo", "WPGlqdVdMW", "W4JdMmogW4i7", "W7pcJ8kEW6NdVMTpf2BdRmkJhSkg", "W77dJSoiW6ul", "W7/cQwfW", "lSo0W6FdPZq", "W6yei3Hw", "WPLuAdnkxaddPIRdMYRdNW0", "WRzXW7ddK38", "iSkxW4XxWOLzrWxcNrKTW4iZ", "mICZuG", "xdNdKmoBW6TyW6RdSZuDaSofWQG", "W50nW6aktNjP", "r8kXoSom", "l8oWW4zlW7i", "WQXYW6e4W5O9W6e", "W7/dGSokW6W", "W4uKFmoOfW", "sbRdQmoE", "WOZcN8kvWO9Ia8oNwgeEialcLq", "rezrW7RcSq", "W4DPpc/cLq", "WOdcMMVcNchcVCkjpG", "vLTOx8k9", "aGmlWRNdPdVcP2pdKMddR8k8nG", "WQ7dHmo1W647W4JcGq", "W5vWkZ7cIG", "W7tcPM9NW6S", "WOmhrW", "W44UCmo3oa", "W4CVA8oidW", "W7fasmowrG", "WPTsyZrjxqddPctdVthdRay", "Bea1"];
  return zn = function() {
    return i;
  }, zn();
}
function _(i, n) {
  const t = zn();
  return _ = function(e, A) {
    e = e - 177;
    let o = t[e];
    if (_.oapJjL === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      _.ixVokw = C, i = arguments, _.oapJjL = !0;
    }
    const g = t[-1 * -6917 + -8721 + 164 * 11], a = e + g, s = i[a];
    return s ? o = s : (_.HvcoGU === void 0 && (_.HvcoGU = !0), o = _.ixVokw(o, A), i[a] = o), o;
  }, _(i, n);
}
async function HQ() {
  function i(C, I, E, B, d) {
    return _(I - 97, E);
  }
  const n = {};
  n[s(-517, -485, "7Ov]", -486, -490)] = KI;
  function t(C, I, E, B, d) {
    return _(d - 677, E);
  }
  function e(C, I, E, B, d) {
    return _(E - -357, C);
  }
  n[s(-524, -518, "s)hb", -521, -516) + "h"] = 256;
  const A = await window[s(-491, -504, "ussf", -480, -493) + "o"][e("EA@!", -186, -177) + "e"][s(-474, -472, "$Bz&", -478, -484) + s(-467, -509, "O1FG", -491, -479) + "y"](n, !0, [o(1147, "(NU@", 1153, 1154, 1168) + "pt", o(1126, "sVo7", 1165, 1154, 1152) + "pt"]);
  function o(C, I, E, B, d) {
    return _(d - 943, I);
  }
  const r = Uint8Array[t(916, 923, "O*v@", 902, 910)](Array(1 * -1019 + -6634 + -1 * -7669)[e("$Bz&", -104, -121)](11307 + 3 * -3769)), g = window[i(345, 316, "v&Mw") + "o"][o(1112, "PUDI", 1158, 1146, 1133) + i(272, 286, "PUDI") + t(851, 838, "Y#Lf", 877, 863)](r), a = {};
  a[o(1147, "^zqi", 1135, 1148, 1136)] = A, a.iv = g;
  function s(C, I, E, B, d) {
    return _(d - -707, E);
  }
  return a;
}
async function KQ(i) {
  function n(E, B, d, x, l) {
    return _(E - 843, x);
  }
  function t(E, B, d, x, l) {
    return _(l - 339, E);
  }
  const { iv: e, key: A } = await HQ(), o = {};
  function r(E, B, d, x, l) {
    return _(d - 421, E);
  }
  o[g(-530, -489, "URLS", -506)] = KI, o.iv = e;
  function g(E, B, d, x, l) {
    return _(x - -730, d);
  }
  const a = await window[n(1038, 1064, 1046, "J0wr") + "o"][t("7Ov]", 584, 549, 547, 560) + "e"][t("d3!)", 550, 548, 549, 547) + "pt"](o, A, i), s = await window[t("ck12", 546, 538, 536, 538) + "o"][I(-279, -292, -253, -287, "7Ov]") + "e"][t("Yl1w", 562, 598, 552, 573) + n(1061, 1040, 1091, "uO^N")](r("5zpv", 626, 609), A), C = {};
  C[g(-525, -547, "[gvX", -520) + "ge"] = a;
  function I(E, B, d, x, l) {
    return _(E - -500, l);
  }
  return C[n(1044, 1049, 1020, "Y#Lf")] = s, C.iv = e, C;
}
async function jQ(i) {
}
(function(i, n) {
  function t(g, a, s, C, I) {
    return lA(g - 88, C);
  }
  const e = i();
  function A(g, a, s, C, I) {
    return lA(I - 4, C);
  }
  function o(g, a, s, C, I) {
    return lA(I - 199, C);
  }
  function r(g, a, s, C, I) {
    return lA(g - -328, C);
  }
  for (; ; )
    try {
      if (parseInt(t(596, 556, 559, "cmP3", 648)) / 1 * (parseInt(t(543, 551, 507, "zVj7", 529)) / 2) + -parseInt(o(678, 701, 688, "8AE%", 662)) / 3 + -parseInt(r(139, 122, 176, "yNLu", 189)) / 4 * (-parseInt(t(559, 519, 572, "8AE%", 589)) / 5) + parseInt(o(720, 702, 723, "m#R2", 733)) / 6 * (-parseInt(r(200, 245, 216, "Glfx", 177)) / 7) + -parseInt(A(484, 488, 522, "yNLu", 529)) / 8 * (parseInt(A(439, 507, 438, "iY&B", 489)) / 9) + -parseInt(A(507, 454, 456, "u^Wk", 492)) / 10 + -parseInt(t(575, 566, 603, "e[Pu", 578)) / 11 * (-parseInt(r(113, 133, 86, "ZrHP", 128)) / 12) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($n, 401130);
const Yg = 92 * 76 + 29 * -57 + -1 * 2839, Pg = -2163 + -5 * 269 + -7008 * -1, sc = 817 + -1 * -8651 + -9466, Ic = 0 + 0.5, cc = {};
cc[kA(-359, -365, -330, "cmP3")] = 1280;
const Cc = {};
Cc[XA(496, 529, 570, "yfo7")] = 720;
const Bc = {};
Bc[AA(305, 283, 260, 243, "$aiu")] = 60;
const bn = {};
bn[SA(-241, -208, -244, -193, "GbaZ")] = cc, bn[kA(-360, -291, -338, "yZML") + "t"] = Cc, bn[bA(672, 664, 648, "D$iW", 684) + XA(497, 484, 440, "AYwC")] = Bc;
const Qc = {};
Qc[AA(414, 363, 389, 365, "hQ%3")] = 1920;
const Ec = {};
Ec[SA(-130, -216, -154, -175, "!y^!")] = 1080;
const kn = {};
kn[XA(524, 542, 514, "&xb*")] = Qc, kn[SA(-201, -229, -237, -250, "ZyGj") + "t"] = Ec, kn[bA(639, 669, 690, "pVtR", 651) + AA(294, 279, 235, 272, "Yy9d")] = 30;
const dc = {};
dc[kA(-436, -369, -385, "Yy9d")] = 1;
const xc = {};
xc[SA(-141, -134, -216, -172, "a[hi")] = 1;
const lc = {};
function lA(i, n) {
  const t = $n();
  return lA = function(e, A) {
    e = e - 434;
    let o = t[e];
    if (lA.FQKXCf === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      lA.pNMIYJ = C, i = arguments, lA.FQKXCf = !0;
    }
    const g = t[-3 * -1963 + -2832 + -3057], a = e + g, s = i[a];
    return s ? o = s : (lA.bdGoCg === void 0 && (lA.bdGoCg = !0), o = lA.pNMIYJ(o, A), i[a] = o), o;
  }, lA(i, n);
}
function AA(i, n, t, e, A) {
  return lA(n - -157, A);
}
lc[bA(658, 658, 641, "yfo7", 681)] = 1;
const Sn = {};
Sn[SA(-152, -208, -124, -160, "$aiu")] = dc, Sn[AA(356, 321, 299, 317, "a]Y9") + "t"] = xc, Sn[XA(508, 537, 510, "@ysG") + XA(618, 571, 563, "A[w*")] = lc;
const uc = {};
uc[SA(-268, -221, -191, -242, "fO7o")] = 1;
function bA(i, n, t, e, A) {
  return lA(A - 191, e);
}
const fc = {};
function XA(i, n, t, e, A) {
  return lA(n - 39, e);
}
fc[AA(294, 308, 314, 277, "&xb*")] = 1;
const hc = {};
hc[AA(256, 304, 321, 260, "ZrHP")] = 1;
const Gn = {};
Gn[SA(-195, -133, -116, -166, "cmP3")] = uc, Gn[XA(474, 522, 519, "zxxp") + "t"] = fc, Gn[SA(-189, -218, -203, -167, "UFj8") + AA(314, 297, 293, 322, "m#R2")] = hc;
const xo = {};
xo[AA(247, 286, 239, 332, "!y^!")] = bn, xo[kA(-393, -432, -387, "bhX2") + XA(560, 575, 538, "JMoE")] = kn, xo[AA(306, 352, 308, 379, "AYwC")] = Sn, xo[AA(311, 313, 301, 262, "qV1A") + kA(-331, -312, -355, "K1t)")] = Gn;
const Xn = xo, nt = {};
nt[AA(364, 335, 288, 360, "iY&B") + SA(-191, -230, -193, -225, "tZ27") + bA(750, 726, 713, "a[hi", 706)] = Yg, nt[AA(309, 337, 344, 388, "qV1A") + bA(613, 655, 670, "4J15", 653) + bA(732, 633, 645, "GbaZ", 682) + SA(-231, -237, -294, -255, "4J15")] = Xn[kA(-330, -277, -326, "qV1A")], nt[AA(347, 332, 346, 361, "ZrHP") + kA(-408, -381, -400, "Ph(n") + AA(318, 361, 334, 323, "!y^!") + SA(-160, -194, -183, -165, "bv!w")] = Xn[AA(290, 289, 256, 328, "zVj7") + kA(-415, -374, -395, "!y^!")], nt[AA(397, 356, 350, 324, "yfo7") + bA(703, 739, 766, "e[Pu", 728)] = sc, nt[bA(731, 736, 719, "dt@s", 722) + bA(685, 706, 729, "dt@s", 718) + SA(-219, -221, -214, -183, "m#R2") + kA(-317, -339, -351, "fO7o") + bA(663, 645, 618, "Glfx", 635)] = Ic, nt[AA(327, 320, 311, 278, "UFj8") + kA(-339, -351, -311, "@7yy") + "Ms"] = Yg;
const it = {};
function $n() {
  const i = ["i8k5fa", "WQDdh8kqW5DaBCkMW5pcKfyUaW", "W7xcU8oTWRVcOSkfySk0W4hcLSoFW59c", "haNcICk+dq", "WRvmWOtdGSkP", "kCkUWQOiEW", "AbWourC", "pSkLWONcVd4xWQ/cL8okWOtcOCoYWPa", "rCo6Cmk0cq", "WO7dHHGsWOy", "e8k1W795ALjnWRy", "gefjASoixs7dKSkdwSo2W6WQ", "WOddUmkaaCkX", "W6zjWQ/dGCk4WPNcIG", "WPu9pbb0", "oSoIW7VdQNHIW7W", "e8o3WR0FW40", "WOXmW6tdKCoe", "W6/dQSkFzGFcRrhcOHLFyZTP", "WPXuWPKCWPO", "W5JdJCkobSksWPjm", "WQm3cdtcLW", "qHpdQmklW5C", "wGtdQmkbW54", "W5qhuIZcJJ9suW", "WQnnfCkzW5fdB8khW4ZcTxCsma", "WRlcTmoq", "nmoXcmozdq", "W5XRW41qWR8", "WONdISk4W70Femoh", "mSkXwtSb", "x8kOxLWLW4X6W71qWOiEWQhdVrS", "WQC1fq/dMqJcGmoqDd7cHH0A", "jSkRWQmfDq", "mSkUb8kmW4e", "WPzhW5/dR8kB", "W53dQSkNW4e3", "yqVcPCobeG", "WPyUmXHg", "WPHyW7NdOq", "WPjAW4NdUSkA", "wmkxcmoMWRZdP3O", "b8oWWRiZW4u", "v8oVWPLEW7e", "W5ePrG", "WPldUmkTg8kT", "WOHsW5xdMSkx", "WPddIXKhWOi", "WOFdRCkfaSk9", "Fmo0W5FdOv8", "WQRdGmkOW7NdUW", "nqTsmfW", "ytzvb37cHSkx", "dGFcICk7", "yuahyHNdUCoQi8kSW5XMFCkVW4K", "WOa9kqe", "eYJcK8k4fG", "jCkJcmkUW5G", "WODjWR8sWPG", "W4xdIsxcQ8kA", "W5zIW7W", "W4hdHs3cP8ka", "WObEWQ4bWPu", "W5dcVmorvSoTW7aGduzMzSkaFG", "o8k5crddLG", "qXJdTCkF", "WQqNbIVcHG", "jXPxj0a", "WQKZWOG6", "he9dy8ooxIZdS8kCF8oxW5az", "W747qrO7", "peRdMCkKea", "ymoKWRnpW5f3jbjdW6WvWQBcPG", "W6BdKSkapLy", "W6v5v1JcHG", "pf7dG8kjcG", "W7BcO8oBWRu", "WPDEqcdcQa", "W7xcU8k7W6JdNCoypmkh", "WOmZeYpcKq", "WOddV8kD", "aCoUbbK", "Dbe+", "umo/WP5n", "WRDEqcW", "pCkRWQxcGCou", "mSk7WRRcSmoA", "lte2ChO", "W7tdG8kfkuO", "CCo4WQm7xfDtW6K", "WO9EWQ4", "WOHmWQKh", "jCk6W7K", "lWRcKSkP", "WO1yW6ZdSmo3", "pCkZEJSo", "puFdGSk6", "WPldOmkggq", "uCoMW7vozW", "WQ89eWZdNW3dP8o1yrBcGZO", "WObhvsRcSW", "haJcJCkpfG", "WPBdOSkPW6G", "W4CjWRZcOmkbWPJdJwqVdmoqhq"];
  return $n = function() {
    return i;
  }, $n();
}
function kA(i, n, t, e, A) {
  return lA(t - -837, e);
}
function SA(i, n, t, e, A) {
  return lA(e - -689, A);
}
it[kA(-286, -283, -335, "GbaZ") + kA(-351, -332, -336, "JMoE") + kA(-338, -371, -369, "JMoE")] = Pg, it[XA(497, 518, 482, "a]Y9") + SA(-195, -252, -251, -214, "!y^!") + bA(696, 715, 754, "u^Wk", 721) + SA(-165, -209, -217, -189, "@7yy")] = Xn[XA(511, 488, 451, "JMoE")], it[kA(-319, -290, -333, "JMoE") + AA(255, 296, 283, 255, "AYwC") + bA(593, 641, 627, "Ph(n", 629) + AA(401, 364, 393, 381, "a]Y9")] = Xn[SA(-182, -203, -213, -184, "8AE%") + bA(744, 681, 704, "vw8r", 707)], it[XA(506, 511, 459, "@ysG") + kA(-411, -448, -402, "yZML")] = sc, it[bA(679, 712, 669, "zVj7", 664) + AA(418, 376, 385, 341, "Yy9d") + SA(-146, -229, -209, -177, "AYwC") + XA(521, 523, 520, "vw8r") + kA(-362, -412, -381, "yfo7")] = Ic, it[AA(252, 302, 261, 252, "AYwC") + bA(684, 754, 703, "UFj8", 726) + "Ms"] = Pg;
const Jr = {};
Jr[bA(684, 710, 715, "zVj7", 686)] = nt, Jr[XA(475, 487, 493, "dt@s")] = it;
const qQ = Jr;
function We(i, n, t, e, A) {
  return IA(A - -685, e);
}
function hA(i, n, t, e, A) {
  return IA(n - -703, t);
}
(function(i, n) {
  function t(a, s, C, I, E) {
    return IA(s - 968, E);
  }
  function e(a, s, C, I, E) {
    return IA(s - 302, a);
  }
  function A(a, s, C, I, E) {
    return IA(I - -925, s);
  }
  function o(a, s, C, I, E) {
    return IA(C - 478, a);
  }
  function r(a, s, C, I, E) {
    return IA(s - 610, C);
  }
  const g = i();
  for (; ; )
    try {
      if (parseInt(e("@I)z", 936, 990, 980, 990)) / 1 * (-parseInt(e("@baD", 873, 891, 949, 828)) / 2) + parseInt(t(1542, 1562, 1467, 1616, "1ZJd")) / 3 * (parseInt(o("9m@o", 982, 1033, 1079, 947)) / 4) + -parseInt(e("KYgs", 824, 859, 900, 752)) / 5 + parseInt(t(1568, 1473, 1507, 1453, "Rdi3")) / 6 * (-parseInt(t(1551, 1454, 1502, 1415, "!&T(")) / 7) + -parseInt(r(1223, 1205, "BnDZ", 1130, 1175)) / 8 * (-parseInt(e("@baD", 821, 921, 843, 843)) / 9) + parseInt(e("oqB7", 829, 801, 744, 828)) / 10 * (-parseInt(A(-251, "ukFC", -311, -311, -356)) / 11) + parseInt(t(1385, 1474, 1499, 1382, "gqt!")) / 12 * (parseInt(o("9m@o", 994, 1018, 948, 1001)) / 13) === n) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Ai, 117578 * -1 + -241126 * -1 + -14454 * -1);
function IA(i, n) {
  const t = Ai();
  return IA = function(e, A) {
    e = e - (3929 * 2 + -2274 + 5147 * -1);
    let o = t[e];
    if (IA.jonFEU === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      IA.LQJrIO = C, i = arguments, IA.jonFEU = !0;
    }
    const g = t[-5398 + 3158 * 1 + 1120 * 2], a = e + g, s = i[a];
    return s ? o = s : (IA.QMjHfc === void 0 && (IA.QMjHfc = !0), o = IA.LQJrIO(o, A), i[a] = o), o;
  }, IA(i, n);
}
function Ai() {
  const i = ["Fb3cOhu4", "uCkbnmk7iW", "WQHzW43cSrS", "WRJdHSoze8kYvMNdRa", "W78QAxxcKmoWfmoM", "uCoIzmkIhq", "ySkcWRldKCoP", "hCk7WQFcUmks", "W7GukmoAW5e", "W4pdK1nmFa", "tSkgxKxcSq", "dCobWRhcRCkY", "WQPvF2XE", "vfyoW5xcOq", "gCkJWQlcUmkc", "W5ZdJshdQt4", "W4H0aCoQWRy", "W5mHDCo2W6O", "swSnWR/dRq", "emoAB8kVfLKXWQNcIa", "WPFcM3a", "WQVdKSk/smoV", "w8o2vCkucG", "qSkpW5G", "sx8kWOxdVa", "W7FcHZJdQCk7", "mmofWOXUW5W", "W6SLkSoEW40", "r1ulW5FcPW", "W7GqrqhdVG", "W5m7FSoOW4C", "WR3cM3bzWR8", "AMyrzCk9", "lghdGY/dLG", "quOlW5dcQG", "i8kOdSoljq", "gSowCdrY", "WRntlCoBW5xdQmkvka", "lmk7dCoCja", "mCoWWQC", "oSoXWRZcUmkp", "W6hdKLLtBq", "WRvnW7L9W54jdbhcGSo8za", "WOhcTmoRvZKanSoQaCoPCSoO", "W5C8zmo2W7S", "WR9chrJcGW", "WP1dfWFcKG", "ECoUCehdMG", "fmosAWjF", "bSkBW7FdHSod", "W43dNdZdVrK", "WRLxW4RcRbS", "W5ldQSk3cgu", "ue4lW5xcSq", "wCkUuW", "WOPnW4KWWPO", "DCoXAG", "lmkPfSolhG", "WRpdH8kkCCoOprxdUmojWQLOW7e0", "qSoYWQZdIhe", "W4PTcSoRWQm", "qSoNtCkLdG", "WR8ZD8olWOJdIfKv", "W5L6bSo3WRy", "Bmk2a2G2", "WRDDW5BcUaO", "WPLQW5FcRZ0", "WQ3dHxJdL8k5gmoKWP88", "zmowWOJdRLC", "gq/cSCkbW64", "rSoYWRZdLN0", "gmocWRFcS8k1", "f8ohCsfo", "WPKRv8kQW7TGW6hcJtBdGCkUW5a", "kmk9emobhG", "gSkeWRdcVmkx", "W6VcRhRcU8kt", "vCo9WRhdLgW", "W7yuxJFdKW", "W5/dOCk9a3q", "W6dcGSoxm8k+", "W6dcGmoxaSk+", "eSkLW6hdN3WzmSomoq", "W5SGFW", "WPTjW4K1WOe", "W5ddNf5oBq", "aCkkW7RdICod", "mCkLW4tcGZVdJmoXWQFdSKS", "cmogWRJcS8k1", "WPLFaqtcHq", "W58Qy8o7W4e", "W4PFa8ooWRC", "pCoTWRSaW6a", "FCkZl3y3", "W6bLvSouWOa", "nCoQW6VcNw8", "W5hdOCk1c3i", "jmkGda", "W4BdI8kdeeu", "ufyEW7RcPq", "WOurvG3dLa", "WQTTrwpcPa", "WQxdLSkKFSoc", "hatdKe7cGu1ElXfTta", "WPqgxG3dKG", "xCo1BSkMcG", "dCooWRS", "W6SnWRSbWOS", "vSovWPdcTw9qWRBdPmk3", "pColWQXHW4m", "aSomWQK", "nmohWOjWW6e", "gmonCtvo", "gSomEYPF", "ea/cTCkpW6G", "WQFdJCkLF8o+", "emoGhG", "wCoJu8k3cG", "W6JcH8o9n8k6", "WRBcHSoFCmo8", "WQH0vKRcSa", "sLRcIq/dGG", "a8otWQRcM8kJ", "qSktW5T3rW", "n8o6WPTQW5K", "cSocWQ3cQW", "W7LzWQSnw3RcS1LCpG", "dWVcRSkgW7K", "WPfiaqRcSG", "W5KkbmolW74", "WOuOrXu", "W73cHt7dGSkS", "W692vCodWOe", "WP3cM3bzWR8", "wmkbW4zPvq", "WQddGNtcLmkra8oKWPazW6u", "wN4lWQpdKq", "u8o9WRhdLMS", "D8o1WP/dMWS", "iCoRWPmIW6e", "hCkeWQi", "W5HYcmo3WQm", "t8oXELpdMG", "p8k6dmo9bq", "W7NcGsNdN8k/", "kX57DxG", "C8k6oCkYoa", "gCotWPWCW5G", "gmogWQZcVSkY", "W5JdItRdOYi", "W7qiWRWT", "CCo1WP/dMqW", "WRmbW7jADW", "W7hcM8oYACoUECo1WOpdNq", "W43dGsPqWOC1W7r7kq", "zmk0WRFdMLJcOCk/fcpcVG", "x8oZBf3dNa", "WQLDW5dcKGa", "gSoaCdro", "W6/cGmoqnSkg", "kmk5a8ocgq", "mCk/WPZcTSkp", "W5ZcVx7cT8kr", "W7aCWQyPWP0", "rmkgp8k5fa", "AWRcQhC5", "emo+gw3dLa", "vCoXANBdIW", "hmkEgSkNc147", "cmowtsnz", "sSk9kgKW", "tfRdTmoCWR3dL2BcQbFcIbe6kG", "W7CrWQaY", "WPmtvHpdLq", "cCovWR/cS8kZ", "WQFcQmogAmoM", "hSotWPC1eCkSW4VdMLRdLCkTWQvA", "W64unmoOW4W", "W544WOG0WRG", "WP1zhbNcVW", "vmo5WQZdUxC", "baHCWOhdTavceY0Fma", "WO0crqBdHa", "WRujW6fvya", "eCkJWRlcPW", "w1RcKHldKG", "W5L4amo3WRe", "swKlWR/dQG", "WR8YcCkfW7NcQrWxh8kTDCk5W6q", "WRtdHCkfC8oOuwNdV8oqWR14", "w8kcq2JcPa", "WQasAWhdJmknWR8", "W6lcRh7cTCkv", "rv0yW5/cQW", "WQf1vW", "W5CayCoUW6y", "aSoAWO4EW4q", "dCoVbeFdHq", "f8kvW4RcM0y", "jmoKW6ZcGg8", "smknkCk0"];
  return Ai = function() {
    return i;
  }, Ai();
}
function WA(i, n, t, e, A) {
  return IA(t - 112, i);
}
function jA(i, n, t, e, A) {
  return IA(A - -436, t);
}
function se(i, n, t, e, A) {
  return IA(A - -785, t);
}
var ms, Ds, ws, Se;
class _Q {
  constructor(n, t = {}) {
    W(this, Se);
    y(this, ws, []);
    y(this, Ds);
    y(this, ms, {});
    function e(r, g, a, s, C) {
      return jA(r - 481, g - 319, a, s - 154, s - 879);
    }
    function A(r, g, a, s, C) {
      return WA(a, g - 489, C - 125);
    }
    this[A(746, 866, "5II1", 739, 789) + e(943, 887, "DV3$", 930) + o(270, 308, 222, 317, "vI!Z") + "r"] = n, v(this, Se, qQ);
    function o(r, g, a, s, C) {
      return se(r - 192, g - 356, C, s - 23, g - 535);
    }
    this[A(741, 756, "qa9@", 781, 730) + A(761, 828, "ts8E", 853, 783) + e(922, 965, "QOl4", 988)](t);
  }
  async [(ws = se(-128, -160, "g90F", -134, -155) + hA(-113, -203, "GIpQ"), Ds = WA("vl(a", 642, 623) + hA(-154, -122, "g90F") + se(-176, -302, "@baD", -176, -270) + "r", ms = WA("gqt!", 469, 558) + hA(-222, -155, "p52#") + "s", jA(148, 219, "fsay", 141, 123) + se(-203, -232, "9m@o", -139, -152) + We(-78, -225, -212, "@baD", -134))]() {
    if (!wo())
      if (r("AYnp", 1528, 1528, 1470) !== r("@baD", 1395, 1313, 1375)) _0x3388b2[g(504, 596, 514, 431, "3DYt")]();
      else return;
    const n = await this[r("j^UJ", 1558, 1378, 1462) + "st"](m(this, Se)[r("AYnp", 1310, 1324, 1354)]), t = await this[r("PF%M", 1374, 1395, 1427) + "st"](m(this, Se)[g(433, 543, 528, 441, "1ZJd")]), e = {};
    function A(C, I, E, B, d) {
      return se(C - 330, I - 299, I, B - 253, B - 778);
    }
    function o(C, I, E, B, d) {
      return hA(C - 203, I - 1145, C);
    }
    function r(C, I, E, B, d) {
      return jA(C - 174, I - 0, C, B - 179, B - 1314);
    }
    function g(C, I, E, B, d) {
      return se(C - 270, I - 63, d, B - 203, E - 790);
    }
    function a(C, I, E, B, d) {
      return se(C - 31, I - 394, E, B - 255, B - 236);
    }
    e[g(610, 667, 614, 689, "vl(a") + a(156, 95, "qa9@", 59)] = n[o("kB)l", 1054) + "ge"], e[A(394, "BnDZ", 499, 440) + o("WWkj", 923)] = t[A(589, "9m@o", 710, 625) + "ge"];
    const s = e;
    this[g(608, 599, 579, 590, "g^dS") + o("WWkj", 897)][a(4, -86, "1ZJd", -48)](s);
  }
  async [hA(-73, -127, "DV3$") + "st"](n) {
    function t(p, S, k, G, w) {
      return hA(p - 12, w - 500, G);
    }
    const { abortAfterMs: e, fallbackConstraints: A, maxTestDuration: o, primaryConstraints: r, runAmount: g, runDurationCutoffFactor: a } = n;
    function s(p, S, k, G, w) {
      return hA(p - 392, p - 138, G);
    }
    function C(p, S, k, G, w) {
      return WA(p, S - 334, k - 371);
    }
    function I(p, S, k, G, w) {
      return We(p - 475, S - 500, k - 113, p, G - 1389);
    }
    let E = 0;
    function B(p, S, k, G, w) {
      return jA(p - 406, S - 361, G, G - 385, k - -345);
    }
    let d = g, x, l = this[B(-190, -206, -203, "l]yI") + C("ts8E", 977, 1065) + C("ts8E", 1139, 1052) + "r"][I("Uj(V", 1232, 1247, 1247) + C("VAq1", 1069, 1004) + I("KYgs", 1203, 1108, 1182) + "s"](this[s(-99, -49, -53, "6Wav") + s(-3, -67, -48, "rF14") + "s"], r);
    for (let p = 0; p < g; p++)
      if (I("8GDV", 1336, 1336, 1251) === B(-321, -243, -252, "1ZJd")) {
        if (E > o * a)
          if (s(-123, -216, -144, "kB)l") !== t(390, 438, 402, "ho6(", 376)) {
            const k = {};
            return k[I("6Wav", 1355, 1323, 1277) + I("RwHz", 1192, 1155, 1230)] = this[C("!&T(", 1122, 1060) + s(-76, -163, -6, "zSNx")], k[I("[#dn", 1247, 1201, 1248) + I("[#dn", 1287, 1270, 1284) + "e"] = !1, k;
          } else {
            d = p;
            break;
          }
        const S = await this[t(387, 351, 223, "vl(a", 291) + t(356, 428, 306, "vl(a", 384) + C("AYnp", 1e3, 982) + C("8GDV", 1092, 1074)](l, e);
        S[s(-58, -51, -157, "qa9@")] && (I("l]yI", 1132, 1262, 1179) === t(519, 431, 480, "fsay", 424) ? this[s(42, 108, 3, "PNbs") + I("GIpQ", 1243, 1253, 1306) + s(39, -48, 105, "BnDZ") + "r"][I("9m@o", 1218, 1252, 1173) + s(-28, -110, -80, "kB)l") + B(-133, -287, -195, "[#dn") + B(-193, -320, -224, "g^dS") + "or"](S[t(351, 353, 310, "!&T(", 279)]) && (t(341, 262, 280, "8GDV", 287) !== t(243, 278, 251, "8GDV", 295) ? (l = this[C("WWkj", 983, 934) + C("vl(a", 1164, 1073) + I("h(4X", 1278, 1328, 1302) + "r"][B(-213, -268, -313, "g^dS") + B(-158, -102, -182, "qa9@") + C("zSNx", 940, 985) + "s"](this[C("C]*0", 891, 979) + s(5, 1, -25, "DV3$") + "s"], A), p--) : this[B(-128, -261, -213, "kB)l") + C("@I)z", 1183, 1112) + "s"] = _0x2d49e3) : (_0x100727 = this[C("AYnp", 989, 1008) + s(23, -40, 5, "3DYt") + s(-4, -5, -18, "][E7") + "r"][C("juNM", 1105, 1100) + t(341, 402, 340, "h(4X", 394) + C("5II1", 952, 999) + "s"](this[t(168, 269, 277, "3DYt", 260) + C("kB)l", 1172, 1098) + "s"], _0x3edec0), _0x27cb73--)), S[B(-209, -245, -153, "Uj(V") + t(373, 341, 376, "fsay", 288)] && (t(167, 216, 268, "AYnp", 236) !== I("@I)z", 1317, 1349, 1324) ? { deviceId: x } = S : this[s(-113, -78, -33, "QOl4") + I("ukFC", 1114, 1285, 1187) + t(343, 359, 327, "[#dn", 362) + "r"][t(286, 153, 275, "g^dS", 253) + I("DV3$", 1305, 1153, 1242) + C("PNbs", 1024, 1119) + B(-115, -196, -165, "VAq1") + "or"](_0x56cd51[C("h(4X", 857, 923)]) && (_0x1bf0d2 = this[C("WWkj", 955, 934) + B(-272, -228, -251, "h(4X") + s(57, 43, -14, "@I)z") + "r"][s(-100, -39, -145, "KYgs") + s(28, 75, 95, "][E7") + C("zSNx", 1020, 985) + "s"](this[t(451, 435, 373, "juNM", 400) + I("][E7", 1308, 1331, 1341) + "s"], _0x52700a), _0xefa9d9--)), E += S[I("^E]V", 1269, 1202, 1289) + s(-117, -71, -181, "vl(a")] || 0;
      } else return;
    const Q = Math[s(-29, -48, -74, "93QC")](E / (d || 3158 * 1 + 6755 * -1 + 3598));
    this[t(204, 289, 244, "Rdi3", 281) + s(36, 42, 20, "MN$E") + "s"] = this[C("5II1", 1062, 1035) + B(-346, -248, -328, "6Wav") + B(-335, -353, -317, "3DYt") + "r"][I("WWkj", 1196, 1208, 1237) + B(-145, -100, -198, "Rdi3") + t(468, 328, 432, "MN$E", 398) + "s"](this[I("93QC", 1146, 1273, 1176) + t(251, 270, 446, "juNM", 351) + "s"], {}, x);
    const f = {};
    return f[C("!&T(", 911, 978) + "ge"] = Q, f;
  }
  async [hA(-54, -143, "ho6(") + se(-397, -401, "ukFC", -409, -340) + jA(189, 122, "LB$v", 88, 98) + WA("ts8E", 707, 747)](n, t) {
    function e(I, E, B, d, x) {
      return jA(I - 405, E - 74, I, d - 162, B - 7);
    }
    function A(I, E, B, d, x) {
      return We(I - 437, E - 410, B - 126, x, E - 906);
    }
    const o = Date[e("oqB7", 218, 146, 48)](), r = new AbortController();
    function g(I, E, B, d, x) {
      return WA(I, E - 418, d - -338);
    }
    const a = setTimeout(() => {
      function I(B, d, x, l, Q) {
        return e(x, d - 467, B - -485, l - 491);
      }
      function E(B, d, x, l, Q) {
        return e(x, d - 340, Q - 800, l - 366);
      }
      if (E(869, 747, "BnDZ", 916, 820) !== E(849, 785, "ho6(", 875, 851)) r[E(872, 879, "AYnp", 929, 934)]();
      else {
        _0x9a988b(_0x38c052);
        const B = {};
        return B[I(-288, -216, "vl(a", -220)] = _0x38c90a, B;
      }
    }, t);
    function s(I, E, B, d, x) {
      return jA(I - 166, E - 381, d, d - 57, E - 1195);
    }
    function C(I, E, B, d, x) {
      return hA(I - 491, d - 88, B);
    }
    try {
      if (e("fsay", 115, 83, 50, -7) !== g("juNM", 440, 306, 392, 377)) {
        const { deviceId: I, mediaStream: E } = await this[C(-67, -79, "[#dn", -10, -65) + C(-236, -118, "l]yI", -153, -168) + A(756, 787, 746, 779, "fsay") + "r"][s(1324, 1283, 1343, "WWkj", 1346) + A(712, 785, 723, 865, "Qm0X") + C(-192, -185, "Uj(V", -102, -134) + "m"](n, r[e("kB)l", -29, 63, 161, 150) + "l"]), B = Date[s(1288, 1220, 1304, "AYnp", 1296)]() - o;
        Pt(E), clearTimeout(a);
        const d = {};
        return d[C(13, -130, "ho6(", -87, -19) + C(26, 52, "Rdi3", -43, -81)] = B, d[s(1327, 1380, 1479, "KYgs", 1424) + s(1348, 1365, 1460, "rF14", 1355)] = I, d;
      } else return;
    } catch (I) {
      if (s(1346, 1269, 1285, "9m@o") === A(601, 681, 656, 733, "l]yI")) ({ deviceId: _0x34b279 } = _0x1531ef);
      else {
        clearTimeout(a);
        const E = {};
        return E[A(607, 664, 724, 618, "8GDV")] = I, E;
      }
    }
  }
  [hA(-340, -266, "MN$E") + WA("RwHz", 653, 582) + jA(111, 33, "p52#", 75, 31)](n) {
    function t(A, o, r, g, a) {
      return jA(A - 483, o - 172, o, g - 275, A - 282);
    }
    function e(A, o, r, g, a) {
      return We(A - 441, o - 54, r - 380, A, o - 683);
    }
    Object[e("@I)z", 609, 509) + "es"](n)[t(317, "QOl4", 346, 223) + "ch"](([A, o]) => {
      const r = A;
      m(this, Se)[r] && (m(this, Se)[r] = { ...m(this, Se)[r], ...o });
    });
  }
  [hA(-153, -172, "@I)z") + WA("oqB7", 656, 586) + We(-199, -213, -211, "fsay", -150)](n) {
    function t(e, A, o, r, g) {
      return jA(e - 79, A - 199, A, r - 413, g - 403);
    }
    this[t(396, "93QC", 531, 406, 439) + t(440, "gqt!", 562, 516, 517) + "s"] = n;
  }
  async [WA("juNM", 552, 620) + hA(-241, -183, "3DYt") + jA(35, 1, "[#dn", 99, 14) + WA("ts8E", 601, 553) + WA("AYnp", 488, 569)](n) {
    function t(a, s, C, I, E) {
      return We(a - 387, s - 68, C - 23, a, E - 1400);
    }
    function e(a, s, C, I, E) {
      return We(a - 253, s - 287, C - 279, I, s - 684);
    }
    if (this[t("AYnp", 1110, 1242, 1103, 1188) + o(126, 241, 274, "AYnp", 213)][e(640, 630, 721, "BnDZ") + "h"] === 5271 + -753 * 7) return;
    const A = this[e(472, 457, 417, "1ZJd") + t("1ZJd", 1245, 1263, 1311, 1229)][g(934, "3DYt", 870) + "h"] - (5053 + -1684 * 3);
    function o(a, s, C, I, E) {
      return WA(I, s - 320, E - -522);
    }
    const r = await jQ();
    function g(a, s, C, I, E) {
      return hA(a - 479, C - 949, s);
    }
    this[o(96, 126, 89, "AYnp", 63) + t("oqB7", 1296, 1154, 1205, 1200)][A] = { ...this[e(550, 517, 613, "qa9@") + g(794, "@I)z", 734)][A], optSetting: r };
  }
  [se(-191, -339, "rF14", -146, -244) + jA(114, 86, "h(4X", 106, 43) + hA(-99, -90, "g^dS") + hA(-130, -150, "@baD") + We(-55, -114, 6, "ts8E", -89)]() {
    function n(r, g, a, s, C) {
      return WA(r, g - 384, s - 847);
    }
    const t = {};
    t[e(-539, -506, "p52#", -480) + e(-586, -472, "@I)z", -509)] = this[e(-454, -329, "3DYt", -397) + A(1415, 1410, 1349, "VAq1")], t[n("GIpQ", 1509, 1439, 1526) + o(1389, "LB$v", 1323, 1357, 1363) + "e"] = !1;
    function e(r, g, a, s, C) {
      return WA(a, g - 150, s - -1109);
    }
    function A(r, g, a, s, C) {
      return hA(r - 333, g - 1669, s);
    }
    function o(r, g, a, s, C) {
      return se(r - 154, g - 491, g, s - 244, C - 1645);
    }
    return t;
  }
}
Se = new WeakMap();
(function(i, n) {
  function t(r, g, a, s, C) {
    return X(r - 665, a);
  }
  function e(r, g, a, s, C) {
    return X(s - 379, r);
  }
  function A(r, g, a, s, C) {
    return X(a - 303, r);
  }
  const o = i();
  for (; ; )
    try {
      if (parseInt(e("V^yG", 1004, 882, 905, 921)) / 1 + -parseInt(e("SJ$)", 1112, 932, 1004, 920)) / 2 * (-parseInt(e("&dD7", 961, 847, 940, 900)) / 3) + parseInt(A("uAO#", 810, 737, 765, 655)) / 4 * (-parseInt(e("&#^k", 886, 946, 993, 999)) / 5) + -parseInt(e("VXIy", 910, 1062, 991, 895)) / 6 + parseInt(A(")OH4", 801, 759, 735, 774)) / 7 + -parseInt(t(1196, 1100, "mi0Z", 1288, 1098)) / 8 + parseInt(e("!RNK", 1095, 1013, 990, 1074)) / 9 === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ei, -1 * -4026 + 40925 * 2 + -1 * -556157);
function bt(i, n, t, e, A) {
  return X(e - 884, n);
}
function X(i, n) {
  const t = ei();
  return X = function(e, A) {
    e = e - 419;
    let o = t[e];
    if (X.JRTSyP === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      X.VghDEE = C, i = arguments, X.JRTSyP = !0;
    }
    const g = t[-14 * 307 + 1 * 9521 + -3 * 1741], a = e + g, s = i[a];
    return s ? o = s : (X.gumOpC === void 0 && (X.gumOpC = !0), o = X.VghDEE(o, A), i[a] = o), o;
  }, X(i, n);
}
function ye(i, n, t, e, A) {
  return X(e - -52, t);
}
function ei() {
  const i = ["lSk3W4NdHMm", "WQBcPmoyW5f2", "vI/cHNPtvmoeD8kqWP8QWP4c", "fxNdNcas", "cdPzW4ZcJq", "W5tcIKS", "WPNcM8omW4Df", "W4hdSJz7W6u", "btZcTuNcRa", "ymoCvLa8", "ctPzW7VcIG", "jNNdGcic", "duxdQCotWQG", "WPRdQJWJ", "yetcUmoIhW", "W6FdTHj3W6a", "W4irWO03sa", "WPRcJ1OuW5m", "W4yIDcG9", "mmoFW6jruW", "W6pcO8osWOPIW7qGWPZcVCoUWO7cHge", "W4ihWOKM", "agVdUuBdJq", "fcVcVuFcRG", "W4C2g8oBj8k2fmoEW5m", "W70WwXmB", "gcjfW4hcHG", "WOlcSSo9W65r", "W5T6qmkFsa", "WRddRIhdLW", "W7GVFHml", "WQhcSmkuWRhdRG", "WRVdHcpdLWG", "WO3dHhxdTmk1", "m8ohW7PeDW", "W4DdWOddRW", "ymo1W74", "DCo/uu88", "W7rjhxGk", "c0NdS8oLWQK", "rZJdRSoCWQ4", "W5mDWOu6wW", "i1FcRW", "mCokW6NdPKu", "qJDWW7NdTW", "WORcPCokW79r", "W6qgWQVcOg0", "btTvsSkK", "yCo2rL8S", "uXD3W4tdOa", "jmk1W4xdKY0", "cSoAW4vkWPO+x8kjWOxcNwnJW5a", "WOvZvCoWka", "W7CugSkzWOS", "W5uYWPFcU8o2", "WPv1sCo9oq", "W6X6sSkFqW", "W6aHWRlcT3C", "WQhdO30", "bMpdQfddHW", "WPBcPbe", "n8k2W4NdNdC", "W4CqWQ3cQhu", "cCoUW50dFa", "pSoxW6VdHLK", "WOzMwCoVka", "yvpcRSoGcq", "ASoJuvuM", "W7FdRrv+W6u", "umoUWPuK", "WRtdUCkjWRpdQq", "WRddTSksW5e+", "W4DnWOpdRW", "WQ/dSSknWRhdUq", "dCojqSk7", "qePKWOW0", "ACoPWPiKW5G", "iSkRW63dLYC", "W5pdPXrhW7i", "WORcNSoR", "gCoata", "WOVdQ8kJ", "WQngW7BdHhu", "xCkKWPi", "qLPUWP80", "W7TBj1G", "tczqW7xdOa", "fupdQa", "jSoUW61ywa", "W5BcGYr/tmobga", "sMuhdSo/W4WaW49tW5BcOvC", "mmoxW77dT0O", "WOVdNhZdR8k4", "WRP3nuPiaCkZWQ/dHfnLbY4", "bSozW6Lsra", "dmk5W4v1WOiYWOxdM8oImbtcQmoo", "nJDhv8kV", "imoDW6hdRf0", "WQ/dVSkuWQddQa", "W6KlWQpcL2S", "WR3dTqVdLXm", "d8oesSkSWPa", "WR7dPmkaW507", "W7zil1ZdMW", "W4XmWPNdHSom", "WOtdP8kIWPNdKG", "WQJdTCkoWRpdSG", "bdTvw8kJ", "evRdNd0s", "iSkHW5tdGci", "WOnnW4JdQSk9hCkvE8ovW6NcTKhdJG", "D8ohC24U", "ewddNGmi", "W5dcKfhdSX4", "W53dRaLMWQe", "h8oIW5KoBq", "WOZcLv0", "jCooW5SPEq", "razyW7NdRa", "qN3dQ8oqWRK", "W4SmWRpcRMK", "W6KKAt8j", "n8ozW7Puwa", "W5ddPXz7W6i", "W6nNvW", "iXBdOmolbSoOr0zf", "WQldPSkcW7eW", "sH01", "W5hdRbq", "WRfTxCoVbq", "WRiSr8oMDq", "W71zahas", "WPHLWOpdT1u", "WQjxW7RdMxC", "WPNcLfarW4i", "W4quWP/cUSo2", "W5BdRGveW6G", "m2xdOKBdNa", "gmoSrW", "iSkCW5BdLY0", "WOtdMmkRW4Wa", "W5TxW6RcPSkM", "uLXYWPiL", "W4aoW650W5O", "WO/dRCk1hG0", "WPjIwSo1lG", "ab54u8kC", "W59lWONdR8ok", "bhtdHIek", "dSoWWO4", "W43cIutdRWK", "W7vpevyg", "WPxdOtOL", "l8okW6i", "WO1qW6hcT8oP", "WRxdSCkxW5CX", "DSoNsvOQ", "m8oYW6VdKKy", "mCkHbav7WPvhW4BcNSoskG", "dNJdKWan", "W4nVWQxdU8kM", "W6DFj1ldMq", "WPtdSCkLhGy", "pvFdTG", "xSoIWPKZW4m", "b2pdQehdGa", "fYPftmkT", "WRldG33dUmk0", "jr9oW4tcLW", "fxldRvBdNa", "W5BdRrjMW6a", "fMldJcid", "W4bBW6RcQSkO", "W5u5WOxcQSox", "aIvZW5VcHG", "WR8NhCodffRcJvKZW4RcLtBdQG", "xHVcV8kgW7Tymq82tCkSwmoS", "W7bndq", "W5RcHmoFW455WOf0", "W6mMlCkcWRe", "WRFdOIRdUWe", "WODVWOS", "WQlcSSoRW6bv", "W5PxW6RcT8kH", "WQ7dQSkFWOxdTq", "W4XCW6hcSCk9", "W5lcH0/dSXK", "W5CfWO0TFq", "ALlcSgFdOW", "WRPmW7xdSI9RW57cRCkmkbm", "BCo/W6BcUSk9", "phVdVq", "W7zBj1JdNq", "W5NdQSk+d0i", "s1dcPG", "egldKa", "cCoPsSkXWPa", "WObUsmo5iG", "W7zwl1ZdGq", "W6S3WQu", "bc3cOuRcVW", "W4qXWPJcRSoX", "sGeeaSky", "gxqcWQZcSJhcGCofWOBcVqhcJa", "WPHfWRldSNu", "WQpdSCkkWRhdQa", "W7qTjCkF", "qvpcPCoPdq", "W79EexOm", "WOxcJLOjW5u", "phVdPmoTW6q", "qJ7cTqZcM8oenamYW7VdImk0yW", "W5xdTXr9W7e", "b8oNW4njuq", "W7FcMIdcQSoJnmkJW7DVW4xcM8kxwq", "gg/dPvldGa"];
  return ei = function() {
    return i;
  }, ei();
}
function me(i, n, t, e, A) {
  return X(i - -660, e);
}
function pA(i, n, t, e, A) {
  return X(t - 390, A);
}
function kt(i, n, t, e, A) {
  return X(i - -742, n);
}
class VQ {
  [pA(1026, 910, 992, 971, "V^yG") + pA(971, 918, 870, 922, "JWu0") + bt(1559, "7^#9", 1459, 1471)](n) {
    const t = Or(n);
    function e(s, C, I, E, B) {
      return me(s - -70, C - 458, I - 467, B);
    }
    const A = t == null ? void 0 : t[o("VXIy", 804, 803, 786) + o("Qb9*", 714, 833, 788) + "s"]();
    function o(s, C, I, E, B) {
      return pA(s - 408, C - 480, E - -79, E - 481, s);
    }
    function r(s, C, I, E, B) {
      return bt(s - 104, s, I - 363, I - -47);
    }
    function g(s, C, I, E, B) {
      return me(B - 1174, C - 231, I - 189, I);
    }
    function a(s, C, I, E, B) {
      return bt(s - 83, s, I - 419, E - -586);
    }
    if (!(A != null && A[e(-188, -219, -85, -159, "RRCk") + "t"]) || !(A != null && A[a("9^PQ", 914, 833, 917)]) || !(A != null && A[o("a8!!", 896, 700, 795) + e(-207, -206, -289, -212, "t#b6")]))
      if (g(985, 1003, "(Wg%", 1006, 1067) === o("RRCk", 760, 831, 852)) this[a("@@3[", 846, 642, 738) + r("8FOY", 1369, 1298) + "eo"](_0x40dc17, _0x526f01);
      else throw new D(r("D5eq", 1299, 1284) + g(1134, 1073, "9^PQ", 1024, 1104) + o("Qd5G", 926, 937, 861) + a("]K(B", 1003, 891, 926) + g(1069, 1098, "5PLG", 1089, 1069) + r("RRCk", 1259, 1343));
    if (t) {
      if (a("D5eq", 846, 738, 846) === r("V*aU", 1472, 1416)) return A[e(-300, -371, -311, -263, "nyQx") + g(989, 1129, "5uP4", 1051, 1033)];
      throw new _0x28dbac(e(-226, -258, -328, -282, "Qd5G") + o("NuxR", 1026, 833, 940) + o("LdaA", 765, 823, 747) + g(849, 1038, "RRCk", 882, 939) + o("RRCk", 746, 859, 778) + a("o#@^", 824, 790, 869));
    }
  }
  [bt(1412, "]K(B", 1501, 1423) + me(-170, -272, -100, "o#@^") + me(-232, -300, -171, "7^#9") + pA(986, 901, 902, 866, "mi0Z")]() {
    const n = document[A("QiNm", 1019, 932) + A("1sh#", 927, 941) + r("Qd5G", 95, 80, 46)](t(-474, -507, "t#b6"));
    n[o(-93, -77, -58, -98, "Qd5G") + o(29, 90, 123, 100, "7^#9")] = !0, n[o(49, 131, 108, 62, "NuxR")] = !0;
    function t(g, a, s, C, I) {
      return kt(g - -227, s);
    }
    n[t(-496, -390, "a8!!") + A("SJ$)", 985, 971) + "e"] = !0, n[t(-391, -305, "!A%Z")][r("8FOY", -44, 25, -52) + r("Tzvh", -148, 5, -77)] = A(")OH4", 979, 980) + A("9Tep", 881, 969), n[o(102, 59, -2, -87, "XZx3")][A(")OH4", 1074, 1011) + "ty"] = "0", n[o(27, 88, 102, 78, "a8!!")][t(-472, -546, "LdaA") + o(-63, 44, -9, -58, "&#^k") + r("A)R(", 209, 166, 112)] = r("1sh#", -124, -96, -53);
    function e(g, a, s, C, I) {
      return pA(g - 388, a - 165, g - -1290, C - 450, s);
    }
    n[A("@@3[", 925, 935)][r("t#b6", 30, 86, 83)] = o(112, 57, 95, 35, "mi0Z");
    function A(g, a, s, C, I) {
      return kt(s - 1215, g);
    }
    function o(g, a, s, C, I) {
      return pA(g - 413, a - 87, s - -880, C - 4, I);
    }
    n[e(-480, -445, "QiNm", -481)][e(-465, -426, "t#b6", -492) + "t"] = A("ezdy", 1153, 1090);
    function r(g, a, s, C, I) {
      return me(C - 142, a - 281, s - 326, g);
    }
    return n;
  }
  async [kt(-119, "Qb9*") + ye(577, 460, "L2Ro", 475) + me(-88, 16, -75, "Qd5G") + pA(999, 919, 906, 812, "G7h(")](n, t, e) {
    return new Promise((A, o) => {
      function r(I, E, B, d, x) {
        return X(d - 696, E);
      }
      function g(I, E, B, d, x) {
        return X(x - -922, B);
      }
      function a(I, E, B, d, x) {
        return X(d - -77, I);
      }
      function s(I, E, B, d, x) {
        return X(B - -464, E);
      }
      function C(I, E, B, d, x) {
        return X(I - 458, x);
      }
      if (r(1299, "XZx3", 1259, 1261) !== r(1213, "@@3[", 1379, 1300)) {
        const I = () => {
          function d(p, S, k, G, w) {
            return s(p - 27, G, w - -533);
          }
          function x(p, S, k, G, w) {
            return s(p - 281, k, w - 1026);
          }
          function l(p, S, k, G, w) {
            return s(p - 412, S, p - 1229);
          }
          function Q(p, S, k, G, w) {
            return s(p - 23, p, G - 1025);
          }
          function f(p, S, k, G, w) {
            return r(p - 243, p, k - 459, k - -1402);
          }
          if (Q("o#@^", 1166, 1116, 1170) !== Q("BO6U", 1080, 994, 985)) {
            const p = _0x7e5230[f("XZx3", -115, -215) + f("JWu0", -134, -152) + d(-498, -486, -506, "eA#X", -434)](x(1213, 1124, "BROX", 1087, 1128));
            return p[x(1200, 1171, "7^#9", 1059, 1129) + x(1072, 1078, "6V3&", 1243, 1151)] = !0, p[d(-436, -456, -368, "Tzvh", -448)] = !0, p[x(1205, 1076, "Tzvh", 1066, 1148) + Q("uAO#", 925, 1066, 1030) + "e"] = !0, p[x(1181, 1043, "Ngsw", 1056, 1132)][d(-641, -555, -617, "Ngsw", -544) + Q("X3iG", 983, 1084, 1033)] = Q("D5eq", 1045, 1220, 1145) + l(1396, "D5eq"), p[f("6V3&", -258, -251)][f("a8!!", -151, -203) + "ty"] = "0", p[l(1267, "&dD7")][x(988, 1100, "D5eq", 1012, 1001) + l(1187, "eA#X") + x(1146, 1203, "!RNK", 1056, 1122)] = l(1273, "TIy^"), p[Q("QiNm", 942, 940, 981)][Q("V^yG", 1130, 990, 1044)] = f("Tzvh", -215, -154), p[d(-490, -459, -354, "D5eq", -390)][l(1239, "7^#9") + "t"] = f("&dD7", -253, -228), p;
          } else this[d(-273, -378, -297, "]K(B", -363) + x(986, 1043, "Qd5G", 973, 1005) + "eo"](n, t);
        }, E = {};
        E[a("mi0Z", 352, 335, 428)] = !0, e == null || e[g(-390, -426, "8FOY", -416, -365) + s(90, "TIy^", 76) + g(-384, -424, "(Wg%", -268, -371) + "r"](g(-441, -462, "!A%Z", -420, -411), I, E), (async () => {
          function d(p, S, k, G, w) {
            return s(p - 454, k, G - -408);
          }
          function x(p, S, k, G, w) {
            return s(p - 306, w, k - 519);
          }
          function l(p, S, k, G, w) {
            return g(p - 42, S - 465, p, G - 126, S - 132);
          }
          function Q(p, S, k, G, w) {
            return C(w - -829, S - 174, k - 500, G - 277, S);
          }
          function f(p, S, k, G, w) {
            return a(G, S - 363, k - 258, S - 676);
          }
          if (l("V^yG", -208, -238, -185) === l("&#^k", -348, -386, -292)) {
            const p = {};
            p[l("Qb9*", -338, -354, -344)] = _0xf4927f, _0x197780[l("Qd5G", -231, -165, -192) + d(-243, -333, "G7h(", -298)] = p;
          } else try {
            d(-160, -303, "RRCk", -252, -154) === f(1282, 1192, 1136, "L2Ro", 1116) ? (_0x402d8a == null || _0x402d8a[l("QiNm", -346, -348, -369, -290) + f(1098, 1092, 1064, "P7Gr", 1101) + x(585, 710, 687, 618, "G7h(") + l("WV$t", -364, -312, -413, -441)](f(1144, 1199, 1274, "mi0Z", 1094), _0x5cc31e), _0x17193c(_0x4c68a2), _0x354f94(_0x31a87c)) : (await n[l("G7h(", -280, -323, -267, -345)](), e == null || e[Q(201, "OGEm", 109, 180, 198) + x(495, 569, 579, 523, "6V3&") + Q(102, "D5eq", 173, 143, 173) + d(-214, -286, "*Y@]", -284, -249)](l("9^PQ", -169, -264, -254, -107), I), A());
          } catch (p) {
            if (Q(43, "&#^k", 15, -11, 66) === d(-284, -441, "WV$t", -383)) return _0x45a8ed instanceof _0x13e5b2 && _0x4082ec[l("TIy^", -319, -386, -343)] === l("uAO#", -262, -320, -224) + d(-335, -538, "Ngsw", -443) + x(629, 576, 547, 596, "!RNK") + Q(269, "SJ$)", 278, 191, 185);
            e == null || e[l("L2Ro", -257, -177, -196) + f(1159, 1174, 1176, "LdaA") + l("o#@^", -369, -432, -418) + Q(36, "Qb9*", 174, 83, 86)](x(509, 448, 537, 453, "P7Gr"), I), Pt(t), o(p);
          }
        })();
      } else {
        const I = { ..._0x17595e }, E = I, B = { ...typeof E[s(146, "TIy^", 119)] == a("RRCk", 511, 327, 432) + "t" ? E[a("9^PQ", 599, 560, 500)] : {}, ..._0x171a8d }, d = B;
        if (_0x1be0a6) {
          const x = {};
          x[s(119, "(Wg%", 35)] = _0x5b0e22, d[a("X3iG", 549, 610, 549) + s(-141, "SJ$)", -45)] = x;
        }
        return E[s(30, "NuxR", 116)] = d, E;
      }
    });
  }
  async [me(-142, -218, -197, "OGEm") + ye(471, 597, "&#^k", 566) + ye(485, 429, "Qd5G", 399) + "m"](n, t) {
    function e(E, B, d, x, l) {
      return pA(E - 441, B - 334, d - -256, x - 494, l);
    }
    const A = this[r(-288, -188, -179, -208, "!A%Z") + r(-309, -263, -213, -336, "a8!!") + r(-122, -229, -266, -237, "L2Ro") + r(-296, -244, -325, -184, "!RNK")](), o = await navigator[a(28, 88, "9^PQ", -18, -16) + C(261, 136, 262, 240, "V^yG") + "es"][a(-58, -173, "Qd5G", -115, -110) + a(-217, -31, "LdaA", -219, -111) + "ia"](n);
    function r(E, B, d, x, l) {
      return pA(E - 63, B - 309, B - -1098, x - 54, l);
    }
    const g = this[a(-54, -139, "LdaA", -167, -79) + r(-137, -172, -80, -143, "1sh#") + r(-96, -92, -164, -183, "1sh#")](o);
    A[a(-21, -63, ")OH4", -29, -62) + C(132, 77, 151, 157, "*Y@]")] = o;
    try {
      a(-143, -157, "JWu0", -45, -139) !== r(-121, -161, -175, -199, "a8!!") ? (_0x4722a6[r(-308, -207, -173, -154, "XZx3")](), _0x8f9deb(_0x10a6c1), _0x5b6ed9[r(-117, -93, -164, -125, "WV$t") + "e"]()) : await this[e(526, 538, 604, 571, "6V3&") + r(-162, -102, -100, -3, "Qd5G") + C(185, 201, 164, 154, "@@3[") + r(-119, -81, -26, -38, "nyQx")](A, o, t);
    } catch (E) {
      I(500, 493, "6V3&", 459, 528) === a(71, 33, "D5eq", 15, -29) ? _0x34b8eb[e(588, 616, 634, 707, "L2Ro") + a(-115, -62, "NuxR", -30, -107)](_0x13ab58) : D[C(183, 194, 260, 243, "P7Gr") + C(273, 135, 214, 225, "NuxR")](E);
    }
    function a(E, B, d, x, l) {
      return bt(E - 61, d, d - 276, l - -1508);
    }
    const s = {};
    function C(E, B, d, x, l) {
      return ye(E - 256, B - 21, l, x - -240);
    }
    s[r(-247, -186, -197, -254, "JWu0") + e(582, 617, 561, 579, "&dD7") + "m"] = o;
    function I(E, B, d, x, l) {
      return pA(E - 223, B - 109, l - -295, x - 108, d);
    }
    return s[r(-17, -117, -97, -31, ")OH4") + r(-201, -193, -298, -216, "&#^k")] = g, s;
  }
  [pA(958, 942, 876, 933, "LdaA") + ye(650, 556, "ezdy", 544) + "eo"](n, t) {
    function e(A, o, r, g, a) {
      return kt(g - 710, a);
    }
    n[e(326, 514, 486, 426, "t#b6")](), Pt(t), n[e(544, 636, 652, 565, "]K(B") + "e"]();
  }
  [kt(-132, "@@3[") + pA(941, 932, 840, 812, "&dD7") + ye(507, 585, "6V3&", 506) + ye(564, 441, "BO6U", 516) + "or"](n) {
    function t(o, r, g, a, s) {
      return me(s - 1295, r - 213, g - 233, o);
    }
    function e(o, r, g, a, s) {
      return pA(o - 464, r - 64, r - -132, a - 63, s);
    }
    function A(o, r, g, a, s) {
      return pA(o - 311, r - 186, g - -204, a - 412, s);
    }
    return n instanceof DOMException && n[t("]K(B", 1236, 1263, 1253, 1156)] === t("A)R(", 1363, 1237, 1210, 1259) + e(741, 792, 697, 782, "RRCk") + A(636, 633, 634, 560, "VXIy") + t("6V3&", 1113, 1107, 1112, 1165);
  }
  [kt(-279, "&#^k") + pA(996, 1060, 963, 925, "t#b6") + me(-123, -173, -126, "G7h(") + "s"](n = {}, t = {}, e) {
    const A = { ...n };
    function o(E, B, d, x, l) {
      return bt(E - 296, d, d - 2, l - -91);
    }
    const r = A, g = { ...typeof r[o(1378, 1462, "XZx3", 1361, 1426)] == C("Tzvh", 1235, 1277, 1212, 1220) + "t" ? r[o(1326, 1300, "V^yG", 1324, 1336)] : {}, ...t };
    function a(E, B, d, x, l) {
      return ye(E - 108, B - 182, B, l - 992);
    }
    const s = g;
    if (e) {
      if (C(")OH4", 1114, 1276, 1172, 1174) === C("8FOY", 997, 960, 974, 1052)) return _0x1baa4f[C("5PLG", 970, 1030, 1176, 1074) + I(752, 719, "nyQx", 644)];
      {
        const E = {};
        E[C("t#b6", 1135, 1190, 1287, 1203)] = e, s[I(682, 630, "XZx3", 626) + o(1210, 1181, "uAO#", 1179, 1287)] = E;
      }
    }
    r[a(1466, "uAO#", 1611, 1644, 1543)] = s;
    function C(E, B, d, x, l) {
      return ye(E - 182, B - 164, E, l - 650);
    }
    function I(E, B, d, x, l) {
      return pA(E - 412, B - 197, x - -345, x - 129, d);
    }
    return r;
  }
}
const Nn = {};
Nn.width = 1920, Nn.height = 1080, Nn.facingMode = Na.FRONT;
const ZQ = Nn;
var ct, Kt, oe;
class pc {
  constructor({ defaultVideoConstrains: n = ZQ, minCameraShorterSide: t = iQ } = {}) {
    W(this, ct);
    W(this, Kt, []);
    W(this, oe, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, v(this, ct, e);
  }
  get availableCameraProperties() {
    return m(this, Kt);
  }
  get mediaStream() {
    return m(this, oe);
  }
  get videoTrack() {
    if (m(this, oe)) return Or(m(this, oe));
  }
  get isCameraActive() {
    var n;
    return !!((n = m(this, oe)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Pt(t);
  }
  async open(n = {}) {
    Ug() && ft() && await Wr(-4676 * 2 + -269 * -22 + 3884), v(this, oe, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw new D("Video track must be initialized to get next device");
    const n = await qi(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (7874 + -68 * 80 + 811 * -3)] ?? n[1 * -7417 + -5 * -461 + -568 * -9]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw new D("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    m(this, oe) && (Pt(m(this, oe)), v(this, oe, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = m(this, Kt), A;
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
    const n = this.getSettings(), t = await gc(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    if (n !== Na.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (va())
      return (await qi()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const n = await qi();
    for (const t of n) {
      Ug() && ft() && await Wr(-3 * -2223 + -4633 + 1586 * -1);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = Or(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const g = r.getSettings(), a = { ...g };
        a.deviceName = r.label;
        const s = {};
        s.cameraProperties = a;
        const C = s;
        m(this, Kt).push(C), Pt(o);
      } catch (e) {
        e instanceof Error && D.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...m(this, ct).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void 0;
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new D("Could not init camera settings");
    if (typeof m(this, ct).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < m(this, ct).minCameraShorterSide)
      throw this.close(), new D("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
ct = new WeakMap(), Kt = new WeakMap(), oe = new WeakMap();
var Wo;
class zQ {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A, videoRecorder: o }) {
    W(this, Wo, !1);
    y(this, "videoHandler");
    y(this, "cameraHandler");
    y(this, "videoRecorder");
    y(this, "performanceCheckup");
    y(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n, this.videoRecorder = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    m(this, Wo) || (v(this, Wo, !0), await pc.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), mQ() && await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !ft() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
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
    return e.drawImage(this.videoHandler.videoElement, -1335 + -1 * 4119 + 202 * 27, 2591 + -2591 * 1), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    var n;
    this.cameraHandler.close(), this.videoHandler.stop(), (n = this.videoRecorder) == null || n.stopRecording(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    var e;
    await this.cameraHandler.open(n), hQ() && (this.cameraHandler.close(), await this.cameraHandler.open(n));
    const [, t] = await Promise.all([this.mountVideoStream(), this.cameraHandler.getDeviceName()]);
    !ft() && await this.cameraEvaluator.setMostRecentCameraName(t), (e = this.videoRecorder) == null || e.startRecording();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !ft() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
Wo = new WeakMap();
var Ge;
class XQ {
  constructor(n) {
    W(this, Ge);
    v(this, Ge, n);
  }
  get videoElement() {
    return m(this, Ge);
  }
  async play(n) {
    m(this, Ge).srcObject = n, await m(this, Ge).play();
  }
  stop() {
    m(this, Ge).srcObject = null;
  }
  hasSrcObject() {
    return !!m(this, Ge).srcObject;
  }
}
Ge = new WeakMap();
(function(i, n) {
  function t(s, C, I, E, B) {
    return cA(C - -889, I);
  }
  function e(s, C, I, E, B) {
    return cA(s - -90, E);
  }
  function A(s, C, I, E, B) {
    return cA(s - -736, I);
  }
  var o = i();
  function r(s, C, I, E, B) {
    return cA(s - 658, B);
  }
  function g(s, C, I, E, B) {
    return cA(I - -359, s);
  }
  for (; ; )
    try {
      var a = -parseInt(e(385, 368, 450, "3&n7", 325)) / 1 * (parseInt(r(1039, 1030, 1103, 977, "eOEz")) / 2) + -parseInt(r(1037, 1106, 1061, 1050, "@7Y%")) / 3 * (parseInt(r(1110, 1140, 1112, 1152, "H3ws")) / 4) + parseInt(g("#b2X", 131, 122, 145, 120)) / 5 * (-parseInt(r(1128, 1161, 1098, 1089, "z8Mh")) / 6) + -parseInt(A(-267, -252, "@G$c", -231, -285)) / 7 * (parseInt(A(-291, -341, "Ca4N", -314, -332)) / 8) + parseInt(t(-485, -467, "8jmF", -483, -444)) / 9 + parseInt(g("ZC7p", 46, 25, 78, 58)) / 10 * (parseInt(g("tO*E", 76, 124, 128, 94)) / 11) + parseInt(A(-268, -238, "fO2k", -327, -231)) / 12;
      if (a === n) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(ti, 817573 + -1 * 598106 + 393804);
function Le(i, n, t, e, A) {
  return cA(i - 228, n);
}
function LA(i, n, t, e, A) {
  return cA(i - -357, e);
}
function ti() {
  var i = ["Bmkfg8o2b3OQW6GrWQNdLmk1W78", "W4CnW7BdLqS", "pmkqlg/cTG", "cSoipeCj", "W6rZwfePW7VcNSo9W5pcIsa", "W5xdUSohWQ8", "dICqBeeVW5JcGa", "WRDoW70VW4S", "z8oPW6m", "fuFcRMZdPmouWQxcRIdcOxG", "WOqhW53cKvK", "o2qwW7jK", "s1Wkwgm", "W4ZcLSkNACoIW5pcUCkjWRi", "WRa+WPlcHSk0", "WR8mW6e", "W5KYW7RdO3C", "W6tcLLNcLK4", "zYdcRSooW5q", "W5ZcI8oagSkY", "vWFdUsRcHa", "WQuaW5FcHKu", "W5JdSmkVWQ10", "W5JcOSoFbCk9", "WRJdKxVdMJq", "yCoFW7xcUXW", "W5e9W6RdOWO", "AIZcPConW5i", "WPNdJmkPWQhcVG", "W5S5W6RdS3e", "WPpdJmkjWOxcNq", "W7KJFmkEta", "WOddPCkuWR3cJa", "n8ooF8kOWOz6WOHGcqBcHW", "rmofWRu", "WRJdJWJdLe/dSY7dIJe3", "WQCdW7VcJI8", "A8kDhMRdPmozWO1jtwJcLCkr", "ymoFW7FcImoa", "WOaBW6ZcNYe", "nhjVWOjU", "WPFdNwZdRsG", "yCo6W7xcSa", "b8kgWPP3wq", "xqpdPd/cPW", "W6OxW6BdTre", "nSoasW", "WRRdHudcVSkvsIuBqmoMB8kIWQy", "nSoEfKZcVW", "A8oJW74", "dM/cJmobWOFcSIVdVsG", "cCocDmkSzG", "p2WN", "W67cHr/dO8oq", "W6xdQ8o0Cmkycmk4W6a", "W73cNulcHeG", "smkeW6ZdHrW", "WQRcNWW", "e8kxWOTswq", "WPNdImoTvSoD", "vJNdH8oyWOy", "W6HGW4ZdISoUAmoPWPVdMmkPD8oW", "qHRdPcNcOa", "WQL+WQ/dIGS", "BSkzfMRdPSkkWQ5mE13cMW", "WRa9WP4", "WPRdKSoSzSog", "BsNcVSoeW4C", "a8oek1m", "m8oyvq", "WOBcO8kEW7njA8kqW5ZdSZVcMI4", "tSkCpSo+W7W", "WRRcVSoK", "hmo/eq/dIG", "umkUWQXCeq", "W5ldGComWRGp", "W6tdQ8oizmkMnSk5W7y", "ztjWW7rroSkOgJO", "WOddGmksWQdcRa", "WRLPWQS", "vt3dKmomWPG", "W7/cLvhcJeq", "ebddLmkYdG", "hCkSgNNcVa", "aCouwHGk", "jwHZWQ9v", "WQdcGSohcNm", "W5SNCmkhrG", "hrZdN8kXca", "WPFdM8kyWQ/cJa", "hMGHW75x", "WRCNds1S", "wb/cHSoUW6K", "WPfnWRtcRLW8WPDWW40FW7alhhW", "W7LvWQ3cOqhdMCkhExG", "ASkpA8krqGX/W4O", "ChygtNG", "WRhcNG8", "WQxcImoj", "WQhcGH3cOwW", "W4BcM8onW7RdJSo+WQ9dWO4wW7q", "WQRcI8oxaga", "Fmo3W6ldJJW", "WQmThq", "W67cMq3dGmol", "W5hcR8oyg8kW", "mmkKWQddTgOFWPRdUxHiCmkK", "WRWJWOJcSCkY", "bmodWQBcLGCXuSoeWQNcNG", "dSo/dbldQG", "cCknWODivq", "dSkmWPK", "WPhdJSoO", "WQvQWRO", "W50UBCkPtG", "W6eoWR9uWPZdRCoJngXdW75/WQ3cLG", "WQLmWRRdGsO", "zCobWRm+WOq", "W4i5W77dUgG", "BCkFimo1W5K", "E3CatMy", "qdmkhtq", "W6FcRWhdQCod", "FtqD", "WQPUWQ3dIXO", "W509W73dThS", "zY0h", "smoBWQmEWP4", "W6xdT8k4", "W5/cP8oedmkO", "n2HUWRj1", "WPZdS8omv8or", "W6tcIKpcLMW", "W5lcQ8opd8kU", "W5ZcHCotbSky", "WQ3cNHlcUK4", "cmodlems"];
  return ti = function() {
    return i;
  }, ti();
}
function St(i, n, t, e, A) {
  return cA(A - 97, n);
}
function Ie(i, n, t, e, A) {
  return cA(A - -982, i);
}
function cA(i, n) {
  var t = ti();
  return cA = function(e, A) {
    e = e - (-132 * 64 + -1 * -9128 + -308);
    var o = t[e];
    if (cA.FFhbOE === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", d = "", x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, S = B.length; p < S; p++)
          d += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, g = function(I, E) {
        var B = [], d = 0, x, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      cA.WgQZbn = g, i = arguments, cA.FFhbOE = !0;
    }
    var a = t[1 * 4127 + 2427 + -6554], s = e + a, C = i[s];
    return C ? o = C : (cA.afxJRw === void 0 && (cA.afxJRw = !0), o = cA.WgQZbn(o, A), i[s] = o), o;
  }, cA(i, n);
}
function NA(i, n, t, e, A) {
  return cA(n - 243, A);
}
var bs, ks, Ss;
class $Q {
  constructor() {
    y(this, Ss, 3844 + 32 * 148 + -858 * 10);
    y(this, ks);
    y(this, bs);
    function n(e, A, o, r, g) {
      return NA(e - 425, r - 753, o - 67, r - 35, A);
    }
    function t(e, A, o, r, g) {
      return NA(e - 66, e - -105, o - 72, r - 151, A);
    }
    this[t(529, "9K&3", 478, 480) + t(614, "aqR[", 658, 619) + n(1431, "b*0s", 1446, 1455) + t(585, "OJ8e", 644, 528)] = Date[t(611, "aqR[", 651, 655)]();
  }
  [(Ss = Ie("5I1E", -549, -567, -615, -604) + Ie("2a1B", -518, -482, -541, -480) + LA(121, 140, 141, "@7Y%"), ks = LA(128, 118, 187, "J!QO") + Ie("Lh@[", -626, -597, -566, -584) + LA(96, 109, 40, "3&n7") + Le(655, "H3ws"), bs = LA(142, 201, 146, "S4g@") + LA(63, 0, -1, "fO2k") + "p", St(601, "Lh@[", 545, 589, 577) + NA(766, 734, 789, 691, "S4g@") + NA(766, 744, 712, 800, "l5T["))]() {
    function n(r, g, a, s, C) {
      return Le(C - -1171, a);
    }
    function t(r, g, a, s, C) {
      return LA(a - 1254, g - 36, a - 455, r);
    }
    function e(r, g, a, s, C) {
      return Le(s - -986, a);
    }
    function A(r, g, a, s, C) {
      return NA(r - 19, g - -489, a - 196, s - 23, s);
    }
    function o(r, g, a, s, C) {
      return NA(r - 497, s - -1079, a - 479, s - 249, r);
    }
    this[t("p)xd", 1275, 1332) + o("fO2k", -410, -423, -460) + n(-505, -555, "@G$c", -552, -553)]++, this[e(-246, -291, "aqR[", -297) + A(225, 169, 181, "(E7a") + n(-501, -448, "GHBT", -496, -440)] === 21 * 153 + -5849 + 2637 && (o("ziJ^", -392, -311, -378) === t("vr13", 1347, 1310) ? this[A(297, 258, 314, "Lh@[") + o("l5T[", -357, -288, -340) + "p"] = _0x2b1ca2[o("z8Mh", -410, -436, -392)]() - this[e(-418, -431, "5I1E", -384) + e(-250, -241, "h(Y^", -296) + t("Khcd", 1367, 1374) + A(230, 175, 195, "Q8pc")] : this[e(-298, -226, "(E7a", -253) + n(-618, -561, "WZ37", -544, -558) + "p"] = Date[o("oMm4", -394, -397, -404)]() - this[n(-490, -528, "2U2]", -607, -554) + A(227, 203, 244, "H3fE") + o("(E7a", -383, -338, -376) + n(-561, -513, "2a1B", -500, -534)]);
  }
  [NA(617, 638, 573, 586, "ZC7p") + LA(71, 117, 4, "8jmF") + Ie("9K&3", -521, -499, -496, -482) + Le(634, "h(Y^") + "up"]() {
    function n(r, g, a, s, C) {
      return NA(r - 84, r - -953, a - 198, s - 11, s);
    }
    function t(r, g, a, s, C) {
      return NA(r - 44, g - -249, a - 470, s - 423, a);
    }
    if (!wo())
      if (e(91, "p)h!", 164, 98) === e(31, "z8Mh", 13, 78)) this[t(418, 390, "WZ37", 337) + e(122, "PAkG", 129, 94) + e(112, "cr$1", 96, 100) + o(-203, -142, -101, "2U2]")] = _0x4be940[t(457, 481, "[eEB", 438)]();
      else return;
    function e(r, g, a, s, C) {
      return Ie(g, g - 367, a - 219, s - 366, s - 634);
    }
    function A(r, g, a, s, C) {
      return Ie(r, g - 144, a - 1, s - 422, g - 1099);
    }
    this[o(-143, -119, -174, "Y#c#") + e(222, "2a1B", 124, 154) + n(-212, -194, -253, "l5T[")] = 1 * 197 + 1927 * 5 + -9832;
    function o(r, g, a, s, C) {
      return NA(r - 487, g - -825, a - 57, s - 57, s);
    }
    this[t(422, 451, "Y#c#", 452) + A("2a1B", 609, 630, 614) + "p"] = void 0, window[n(-217, -236, -156, "9K&3") + n(-316, -381, -265, "Lh@[") + n(-303, -290, -356, "3&n7") + e(108, "#b2X", 33, 69)](t(383, 398, "9K&3", 445) + "wn", this[A("p)xd", 572, 535, 547) + e(-20, "Lh@[", -18, 24) + n(-286, -249, -260, "#b2X")][A("Ca4N", 497, 539, 486)](this));
  }
  [LA(16, -11, -27, "oMm4") + Ie("oMm4", -571, -514, -499, -508) + Ie("@G$c", -539, -616, -505, -571) + St(537, "eOEz", 554, 555, 592) + "up"]() {
    function n(r, g, a, s, C) {
      return St(r - 381, a, a - 370, s - 363, g - 537);
    }
    function t(r, g, a, s, C) {
      return Ie(s, g - 176, a - 239, s - 53, r - 836);
    }
    function e(r, g, a, s, C) {
      return NA(r - 48, r - -1176, a - 402, s - 71, a);
    }
    function A(r, g, a, s, C) {
      return LA(C - 515, g - 192, a - 330, g);
    }
    if (!wo())
      if (e(-519, -522, "@G$c", -466) === n(1042, 1101, "PAkG", 1045)) this[A(565, "PAkG", 547, 612, 551) + o(229, 272, 186, 241, "2U2]") + t(308, 246, 284, "S4g@")]++, this[e(-470, -493, "Y#c#", -516) + A(579, "c%ok", 532, 581, 540) + A(661, "S4g@", 618, 672, 612)] === -3805 * -2 + 8262 + -15871 && (this[n(1120, 1071, "ZC7p", 1068) + A(522, "GHBT", 609, 606, 555) + "p"] = _0x3da579[o(191, 255, 300, 245, "J!QO")]() - this[o(93, 82, 166, 151, "ULHF") + A(697, "aqR[", 679, 696, 634) + A(651, "Khcd", 634, 595, 635) + o(291, 197, 271, 247, "S4g@")]);
      else return;
    function o(r, g, a, s, C) {
      return LA(s - 116, g - 463, a - 89, C);
    }
    window[t(320, 316, 376, "@7Y%") + e(-454, -404, "8jmF", -481) + o(140, 171, 145, 192, "J!QO") + "r"](n(1041, 1057, "s6cl", 992) + "wn", this[n(1091, 1128, "p)h!", 1197) + e(-533, -586, "#b2X", -595) + n(1030, 1017, "Khcd", 1016)][e(-490, -454, "5I1E", -500)](this));
  }
  [LA(107, 104, 44, "3&n7") + Le(678, "Ca4N") + "lt"]() {
    function n(r, g, a, s, C) {
      return Le(C - -869, s);
    }
    function t(r, g, a, s, C) {
      return NA(r - 215, s - -597, a - 133, s - 492, C);
    }
    function e(r, g, a, s, C) {
      return LA(r - 970, g - 244, a - 156, s);
    }
    function A(r, g, a, s, C) {
      return LA(r - -293, g - 471, a - 336, C);
    }
    if (!wo() || !this[t(130, 75, 180, 130, "cr$1") + t(161, 45, 61, 111, "H3ws") + "p"])
      if (e(1110, 1129, 1136, "8jmF") !== e(1119, 1178, 1124, "[eEB")) {
        var o = {};
        return o[e(1043, 1079, 1038, "ULHF") + A(-194, -143, -225, -246, "ULHF") + "e"] = !1, o;
      } else return this[e(1047, 1105, 1023, "[eEB") + t(107, -2, 55, 45, "zSzu") + "p"];
    return { performance: !0, hiccupAmount: this[t(109, 48, 67, 51, "3&n7") + t(12, 53, 126, 77, "tO*E") + n(-300, -207, -241, "eOEz", -254) + "t"](), firstHiccup: this[A(-161, -196, -117, -179, "h(Y^") + t(-4, 32, 82, 49, "3&n7") + A(-143, -207, -204, -142, "ULHF") + t(49, 21, 31, 84, "S4g@") + "ss"]() };
  }
  [LA(61, 7, 63, "J!QO") + NA(728, 662, 596, 653, "ZC7p") + Le(629, "fO2k") + "t"]() {
    function n(e, A, o, r, g) {
      return St(e - 3, r, o - 100, r - 291, o - -858);
    }
    function t(e, A, o, r, g) {
      return NA(e - 364, o - -227, o - 475, r - 345, g);
    }
    return this[n(-290, -301, -253, "Lh@[") + n(-277, -333, -320, "[eEB") + t(446, 437, 488, 459, "oMm4")];
  }
  [NA(662, 659, 701, 705, "zSzu") + St(529, "H3ws", 507, 475, 483) + Le(605, "ziJ^") + Ie("S4g@", -595, -602, -504, -544) + "ss"]() {
    function n(t, e, A, o, r) {
      return St(t - 415, A, A - 398, o - 241, t - -1016);
    }
    return this[n(-517, -555, "PAkG", -460) + n(-448, -406, "eOEz", -404) + "p"];
  }
}
const AE = 480, eE = 2438 * 2 + 2915 + 9 * -839, Wa = -2389 * 1 + 2 * 1325 + 21 * -11, yc = 15, mc = 4743 + 35 * -141 + 200, Ur = {};
Ur.codec = "avc1.42E01E", Ur.bitrate = 1e6;
const Bn = Ur, tE = -2097 + -2099 * -1, oE = 27086 + -1 * -16493 + 367 * -37;
class nE {
  constructor(n, t) {
    y(this, "shouldBeTested", !0);
    y(this, "testFramesSizesList", []);
    y(this, "maximumTestFrames");
    y(this, "maximumTestFramesSize");
    this.maximumTestFrames = n, this.maximumTestFramesSize = t;
  }
  addTestFrame(n) {
    this.testFramesSizesList.push(n);
  }
  isSizeExceeded() {
    if (this.testFramesSizesList.length !== this.maximumTestFrames) return !1;
    let n = -17061 + 141 * 121;
    for (const t of this.testFramesSizesList)
      n += t;
    return this.shouldBeTested = !1, n > this.maximumTestFramesSize;
  }
}
class Dc {
  constructor() {
    y(this, "encoder");
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
function iE(i) {
  if (!i) return !1;
  const n = Dc.isSupported();
  return !n && D.logError("Video encoding is not supported in this browser."), n;
}
const Yr = {};
Yr.LOW = "low", Yr.STANDARD = "standard";
const oi = Yr, Pr = {};
Pr.SPS = "SPS", Pr.PPS = "PPS";
const _i = Pr;
class rE {
  parseAVCCParameterSets(n) {
    try {
      let t = 0;
      if (t += 8434 + 19 * 509 + -18101 * 1, t >= n.length) return;
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
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, _i.SPS);
  }
  extractPPSFromAVCCAndSkipToNext(n, t) {
    return this.extractParameterSetFromAVCCAndSkipToNext(n, t, _i.PPS);
  }
  extractParameterSetFromAVCCAndSkipToNext(n, t, e) {
    if (t >= n.length) {
      const r = {};
      return r.nextOffset = t, r;
    }
    const A = e === _i.SPS ? n[t] & -8 * -870 + 1233 + -8162 : n[t], o = t + (-8158 + 83 * 107 + 1 * -722);
    return this.skipToNextSectionAndReturnFirstParameterSet(n, o, A);
  }
  skipToNextSectionAndReturnFirstParameterSet(n, t, e) {
    let A = t;
    for (let r = 402 * -13 + -6535 + -11761 * -1; r < e; r++) {
      const g = this.extractSingleParameterSetFromAVCC(n, A);
      if (A = g.nextOffset, g.parameterSet && r === 80 * -43 + 1 * 5159 + -1719) {
        const a = {};
        return a.parameterSet = g.parameterSet, a.nextOffset = A, a;
      }
    }
    const o = {};
    return o.nextOffset = A, o;
  }
  extractSingleParameterSetFromAVCC(n, t) {
    if (t + (1573 * 5 + -251 * -1 + -4057 * 2) > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint16(t, !1), o = t + (29 * -96 + 8342 + -5556), r = o + A;
    if (r > n.length) {
      const s = {};
      return s.nextOffset = t, s;
    }
    const g = n.slice(o, r), a = {};
    return a.parameterSet = g, a.nextOffset = r, a;
  }
}
class aE {
  constructor() {
    y(this, "parameterSetsHandler");
    y(this, "START_CODE", new Uint8Array([-1 * -5591 + -6598 + 1007, -5844 + -914 * 9 + 210 * 67, 17307 + 9 * -1923, 1394 + 1393 * -1]));
    y(this, "parameterSets");
    this.parameterSetsHandler = new rE();
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
    if (t + (2 * -4094 + -1 * -5807 + -477 * -5) > n.length) return;
    const e = new DataView(n.buffer, n.byteOffset), A = e.getUint32(t, !1), o = t + (-8 * -838 + -2344 + -4356), r = o + A;
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
class gE {
  constructor(n = mc, t = Wa) {
    y(this, "chunks", []);
    y(this, "maxChunksCount");
    this.cleanSetup(n, t);
  }
  cleanSetup(n, t) {
    this.clear(), this.maxChunksCount = (n + (28 * 92 + 7704 + -19 * 541)) * t;
  }
  add(n) {
    this.chunks.push(n), this.maxChunksCount && this.chunks.length > this.maxChunksCount && this.chunks.shift();
  }
  clear() {
    this.chunks = [];
  }
  getChunks() {
    const n = this.chunks.findIndex((t) => t.type === "key");
    return this.chunks.slice(Math.max(-5890 + 5890 * 1, n));
  }
}
class Tg {
  constructor() {
    y(this, "codec");
    y(this, "bitrate");
    y(this, "resolution");
    y(this, "framerate");
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
class sE {
  getScaledResolution(n, t) {
    const { height: e, width: A } = n, o = A / e;
    if (fQ() && e > A) {
      const g = e, a = A, s = g / a, C = t * s;
      return { width: Math.floor(C / 2) * (-1 * 3541 + -231 * -42 + -2053 * 3), height: t };
    }
    if (A < e) {
      const g = t / o;
      return { width: t, height: Math.floor(g / (-568 + 91 * -105 + -1 * -10125)) * 2 };
    }
    const r = t * o;
    return { width: Math.floor(r / (-206 + -4039 * -1 + -3831)) * (721 + 181 * 29 + -5968), height: t };
  }
  create(n, t) {
    switch (n) {
      case oi.STANDARD:
        return new Tg().setBitrate(Bn.bitrate).setCodec(Bn.codec).setFramerate(Wa).setResolution(this.getScaledResolution(t, AE)).build();
      case oi.LOW:
        return new Tg().setBitrate(Bn.bitrate).setCodec(Bn.codec).setFramerate(yc).setResolution(this.getScaledResolution(t, eE)).build();
      default:
        throw D.logError("Unsupported preset for video encoder config");
    }
  }
}
class IE {
  constructor(n, t, e, A) {
    y(this, "videoProcessor");
    y(this, "videoEncoder");
    y(this, "chunkStorage");
    y(this, "qualityTester");
    y(this, "cameraHandler");
    y(this, "videoEncoderConfigFactory");
    y(this, "cameraFramerate");
    y(this, "captureIntervalId");
    y(this, "videoElement");
    this.videoProcessor = n, this.videoEncoder = t, this.qualityTester = e, this.cameraHandler = A, this.videoEncoderConfigFactory = new sE(), this.chunkStorage = new gE(), this.cameraFramerate = Wa, this.videoEncoder.create(this.onChunkEncoded.bind(this));
  }
  onChunkEncoded(n, t) {
    this.chunkStorage.add(n), t != null && t["decoderConfig"] && this.videoProcessor.extractParameterSets(t.decoderConfig), this.qualityTester.shouldBeTested && (this.qualityTester.addTestFrame(n.byteLength), this.qualityTester.isSizeExceeded() && this.restartWithAdjustedConfig());
  }
  restartWithAdjustedConfig() {
    this.clearCaptureInterval(), this.chunkStorage.cleanSetup(mc, yc), this.startRecording(oi.LOW);
  }
  startRecording(n = oi.STANDARD) {
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
    let n = 4839 + 105 * 95 + -14814;
    const t = this.cameraFramerate, e = (-5475 + -6475 * -1) / t;
    this.captureIntervalId = setInterval(() => {
      if (this.videoElement && this.videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        const A = new VideoFrame(this.videoElement, { timestamp: performance.now() * 1e3 }), o = n % t === 2892 + -163 * 21 + 531;
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
class cE {
  constructor() {
    y(this, "videoProcessor");
    y(this, "videoEncoder");
    y(this, "qualityTester");
    y(this, "cameraHandler");
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
    return new IE(this.videoProcessor, this.videoEncoder, this.qualityTester, this.cameraHandler);
  }
}
class CE {
  create(n, t) {
    if (!iE(t)) return;
    const e = new nE(tE, oE), A = new Dc(), o = new aE();
    return new cE().setQualityTester(e).setVideoEncoder(A).setVideoProcessor(o).setCameraHandler(n).build();
  }
}
function BE(i) {
  const { facingMode: n = Na.FRONT, isVideoCaptureEnabled: t } = i ?? {}, e = GA(null), [A, o] = iA(), [r, g] = iA(), { handleError: a, setIsCameraReady: s } = ue(), C = xe((E) => {
    g((B) => CQ(E, B));
  }, []);
  Y(() => {
    if (!e.current) {
      a(new D("Something went wrong during video initialization"));
      return;
    }
    const E = new XQ(e.current), B = new VQ(), d = new _Q(B), x = new pc(), l = new $Q(), Q = new CE().create(x, t), f = {};
    f.videoHandler = E, f.cameraHandler = x, f.performanceCheckup = l, f.cameraEvaluator = d, f.videoRecorder = Q;
    const p = new zQ(f);
    return (async () => {
      try {
        const k = {};
        k.facingMode = n, await p.startFirstVideoStream(k);
      } catch (k) {
        if (k instanceof Error) {
          a(D.fromCameraError(k));
          return;
        }
      }
      o(p), s(!0), C(p.getCameraResolution());
    })(), () => {
      p == null || p.stopStreaming(), s(!1), o(void 0);
    };
  }, [n, a, s, e, C, t]);
  const I = {};
  return I.cameraService = A, I.cameraResolution = r, I.onCameraResolutionChange = C, I.videoRef = e, I;
}
function QE({
  cameraConfiguration: i,
  children: n
}) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = BE(i), r = BA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ b(Vn.Provider, { value: r, children: n });
}
let O;
const Ne = new Array(-6085 + -4 * 638 + 8765).fill(void 0);
Ne.push(void 0, null, !0, !1);
function Tr(i) {
  return Ne[i];
}
let de = -1 * 2039 + -5402 + -1063 * -7, lo = null;
function Rn() {
  return (lo === null || lo.byteLength === 7165 + -1 * 3974 + -3191) && (lo = new Uint8Array(O.memory.buffer)), lo;
}
const Fn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, EE = typeof Fn.encodeInto == "function" ? function(i, n) {
  return Fn.encodeInto(i, n);
} : function(i, n) {
  const t = Fn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function No(i, n, t) {
  if (t === void 0) {
    const g = Fn.encode(i), a = n(g.length, -2 * -3498 + -1266 + -337 * 17) >>> -6157 * 1 + -7686 + 13843 * 1;
    return Rn().subarray(a, a + g.length).set(g), de = g.length, a;
  }
  let e = i.length, A = n(e, -3 * -267 + 4131 * 1 + -4931) >>> 0;
  const o = Rn();
  let r = 1878 * 2 + 3877 + 1 * -7633;
  for (; r < e; r++) {
    const g = i.charCodeAt(r);
    if (g > -549 + -52 * -13) break;
    o[A + r] = g;
  }
  if (r !== e) {
    r !== -3322 + -25 * 365 + 12447 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (-5577 * 1 + -857 + 41 * 157), -947 * -3 + -287 * -7 + -4849) >>> -2 * 4467 + -38 * -203 + 1220;
    const g = Rn().subarray(A + r, A + e), a = EE(i, g);
    r += a.written, A = t(A, e, r, 1206 * 2 + 5 * -1949 + 7334) >>> -4273 + 1 * 1905 + 2 * 1184;
  }
  return de = r, A;
}
function wc(i) {
  return i == null;
}
let uo = null;
function Be() {
  return (uo === null || uo.byteLength === 9 * -1033 + 266 + 9031) && (uo = new Int32Array(O.memory.buffer)), uo;
}
let bo = Ne.length;
function dE(i) {
  i < -78 * -103 + 2764 * -1 + -5138 || (Ne[i] = bo, bo = i);
}
function bc(i) {
  const n = Tr(i);
  return dE(i), n;
}
const Hr = {};
Hr.ignoreBOM = !0, Hr.fatal = !0;
const kc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Hr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && kc.decode();
function ni(i, n) {
  return i = i >>> 13 * -491 + -9921 + 2 * 8152, kc.decode(Rn().subarray(i, i + n));
}
function Kr(i) {
  bo === Ne.length && Ne.push(Ne.length + (2 * -771 + -1 * -399 + 104 * 11));
  const n = bo;
  return bo = Ne[n], Ne[n] = i, n;
}
let fo = null;
function Sc() {
  return (fo === null || fo.byteLength === -5 * -1803 + -6620 + -2395) && (fo = new Uint32Array(O.memory.buffer)), fo;
}
function Hg(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = Sc();
  for (let A = 935 + -2942 * -2 + 6819 * -1; A < i.length; A++)
    e[t / (6 * 809 + 155 * -1 + -4695) + A] = Kr(i[A]);
  return de = i.length, t;
}
function Kg(i, n) {
  i = i >>> 267 * -22 + -5621 + -209 * -55;
  const t = Sc(), e = t.subarray(i / (5877 + -1 * 1153 + -4720), i / (4409 * -1 + 6520 + 43 * -49) + n), A = [];
  for (let o = -5 * 1692 + -8533 + -1 * -16993; o < e.length; o++)
    A.push(bc(e[o]));
  return A;
}
function xE(i, n) {
  const t = No(i, O.__wbindgen_malloc, O.__wbindgen_realloc), e = de, A = No(n, O.__wbindgen_malloc, O.__wbindgen_realloc), o = de, r = O.is_mobile_supported(t, e, A, o);
  return La.__wrap(r);
}
const jr = {};
jr.register = () => {
}, jr.unregister = () => {
};
const jg = typeof FinalizationRegistry > "u" ? jr : new FinalizationRegistry((i) => O.__wbg_licensevalidationresult_free(i >>> -1879 + 1879 * 1));
class La {
  static __wrap(n) {
    n = n >>> 8766 + 4773 * 1 + -4513 * 3;
    const t = Object.create(La.prototype);
    return t.__wbg_ptr = n, jg.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = -4565 + 3347 * 1 + 1218, jg.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    O.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = wc(t) ? 0 : No(t, O.__wbindgen_malloc, O.__wbindgen_realloc), g = de;
    const a = Hg(e, O.__wbindgen_malloc), s = de, C = Hg(A, O.__wbindgen_malloc), I = de, E = No(o, O.__wbindgen_malloc, O.__wbindgen_realloc), B = de, d = O.licensevalidationresult_new(n, r, g, a, s, C, I, E, B);
    return this.__wbg_ptr = d >>> 249 + 249 * -1, this;
  }
  get is_valid() {
    return O.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const e = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = Be()[e / (1 * 9245 + -9466 * 1 + 225) + 0], t = Be()[e / (-6431 + -19 * 342 + -27 * -479) + 1];
      let A;
      return n !== 3988 * 1 + -2 * 1636 + -716 && (A = ni(n, t).slice(), O.__wbindgen_free(n, t * (9156 + 5 * -1831), 3667 * 1 + 5149 + 1 * -8815)), A;
    } finally {
      O.__wbindgen_add_to_stack_pointer(3259 + 1791 * 2 + -105 * 65);
    }
  }
  get errors() {
    try {
      const A = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = Be()[A / (-79 * -34 + 28 * -131 + 986) + (-5654 + 26 * -291 + 6610 * 2)], t = Be()[A / (-856 * -8 + 6446 + 2215 * -6) + (-1618 + -409 * -11 + -2880)], e = Kg(n, t).slice();
      return O.__wbindgen_free(n, t * (11 * -881 + 6873 + 2822), -636 + 1 * -2397 + 3037), e;
    } finally {
      O.__wbindgen_add_to_stack_pointer(-7586 + -3 * 547 + 9243);
    }
  }
  get warnings() {
    try {
      const A = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = Be()[A / (8116 + -48 * 169) + (148 * 44 + -2 * -4707 + -15926)], t = Be()[A / (8211 + 46 * -131 + -2181) + (-7929 * -1 + -3332 * 2 + -1 * 1264)], e = Kg(n, t).slice();
      return O.__wbindgen_free(n, t * (-8651 + -268 * -16 + 4367 * 1), 1776 + 2173 * -1 + -401 * -1), e;
    } finally {
      O.__wbindgen_add_to_stack_pointer(-13552 + -8 * -1696);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = O.__wbindgen_add_to_stack_pointer(-16);
      O.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = Be()[o / (33 * -163 + -9108 + 1 * 14491) + 0], A = Be()[o / (-6444 + 256 * -35 + -1284 * -12) + (-10775 + -2 * -5388)];
      return n = e, t = A, ni(e, A);
    } finally {
      O.__wbindgen_add_to_stack_pointer(-4237 * 2 + -3204 + 11694), O.__wbindgen_free(n, t, 263 * -30 + -30 * -132 + -3931 * -1);
    }
  }
}
async function lE(i, n) {
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
function uE() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = Tr(t), A = typeof e == "string" ? e : void 0;
    var o = wc(A) ? -1 * 5144 + 6260 + -1116 : No(A, O.__wbindgen_malloc, O.__wbindgen_realloc), r = de;
    Be()[n / 4 + (-1487 + -1 * -1948 + 230 * -2)] = r, Be()[n / (9419 * 1 + 6263 + -15678) + (39 * 163 + -1 * 7463 + 1106 * 1)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    bc(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = ni(n, t);
    return Kr(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Kr(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return Tr(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(ni(n, t));
  }, i;
}
function fE(i, n) {
  return O = i.exports, Gc.__wbindgen_wasm_module = n, uo = null, fo = null, lo = null, O;
}
async function Gc(i) {
  if (O !== void 0) return O;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANBA3EiCkUNACACIQEDQCAIIAEsAABBv39KaiEIIAFBAWohASAKQQFrIgoNAAsLIAcgCGohBwsCQAJAIAAoAgBFBEBBASEBIAAoAhQiBiAAKAIYIgAgCSACIAMQ6QENAQwCCyAHIAAoAgQiCE8EQEEBIQEgACgCFCIGIAAoAhgiACAJIAIgAxDpAQ0BDAILIAZBCHEEQCAAKAIQIQsgAEEwNgIQIAAtACAhDEEBIQEgAEEBOgAgIAAoAhQiBiAAKAIYIgogCSACIAMQ6QENASAIIAdrQQFqIQECQANAIAFBAWsiAUUNASAGQTAgCigCEBEBAEUNAAtBAQ8LQQEhASAGIAQgBSAKKAIMEQAADQEgACAMOgAgIAAgCzYCEEEAIQEMAQsgCCAHayEGAkACQAJAIAAtACAiAUEBaw4DAAEAAgsgBiEBQQAhBgwBCyAGQQF2IQEgBkEBakEBdiEGCyABQQFqIQEgAEEYaigCACEHIAAoAhAhCCAAKAIUIQACQANAIAFBAWsiAUUNASAAIAggBygCEBEBAEUNAAtBAQ8LQQEhASAAIAcgCSACIAMQ6QENACAAIAQgBSAHKAIMEQAADQBBACEBA0AgASAGRgRAQQAPCyABQQFqIQEgACAIIAcoAhARAQBFDQALIAFBAWsgBkkPCyABDwsgBiAEIAUgACgCDBEAAAuvBAELfyAAKAIEIQogACgCACELIAAoAgghDAJAA0AgBA0BAkACQCACIANJDQADQCABIANqIQUCQAJAAkACQCACIANrIgZBCE8EQCAFQQNqQXxxIgAgBUYNASAAIAVrIgRFDQFBACEAA0AgACAFai0AAEEKRg0FIAQgAEEBaiIARw0ACyAEIAZBCGsiB0sNAwwCCyACIANGBEAgAiEDDAYLQQAhAANAIAAgBWotAABBCkYNBCAGIABBAWoiAEcNAAsgAiEDDAULIAZBCGshB0EAIQQLA0AgBCAFaiIAQQRqKAIAIglBipSo0ABzQYGChAhrIAlBf3NxIAAoAgAiAEGKlKjQAHNBgYKECGsgAEF/c3FyQYCBgoR4cQ0BIARBCGoiBCAHTQ0ACwsgBCAGRgRAIAIhAwwDCyAEIAVqIQcgAiAEayADayEFQQAhAAJAA0AgACAHai0AAEEKRg0BIAUgAEEBaiIARw0ACyACIQMMAwsgACAEaiEACyAAIANqIgBBAWohAwJAIAAgAk8NACAAIAFqLQAAQQpHDQBBACEEIAMhByADIQAMAwsgAiADTw0ACwtBASEEIAghByAIIAIiAEYNAgsCQCAMLQAABEAgC0GoqMAAQQQgCigCDBEAAA0BCyABIAhqIQUgACAIayEGQQAhCSAMIAAgCEcEfyAFIAZqQQFrLQAAQQpGBSAJCzoAACAHIQggCyAFIAYgCigCDBEAAEUNAQsLQQEhDQsgDQuQBQEEfyAAIAFqIQICQAJAAkAgACgCBCIDQQFxDQAgA0EDcUUNASAAKAIAIgMgAWohASAAIANrIgBB/LDCACgCAEYEQCACKAIEQQNxQQNHDQFB9LDCACABNgIAIAIgAigCBEF+cTYCBCAAIAFBAXI2AgQgAiABNgIADwsgA0GAAk8EQCAAEF8MAQsgAEEMaigCACIEIABBCGooAgAiBUcEQCAFIAQ2AgwgBCAFNgIIDAELQeywwgBB7LDCACgCAEF+IANBA3Z3cTYCAAsCQAJAIAIoAgQiA0ECcUUEQCACQYCxwgAoAgBGDQIgAkH8sMIAKAIARg0EIANBeHEiBCABaiEBAkAgBEGAAk8EQCACEF8MAQsgAkEMaigCACIEIAJBCGooAgAiAkcEQCACIAQ2AgwgBCACNgIIDAELQeywwgBB7LDCACgCAEF+IANBA3Z3cTYCAAsgACABQQFyNgIEIAAgAWogATYCACAAQfywwgAoAgBHDQFB9LDCACABNgIADwsgAiADQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALIAFBgAJPBEAgACABEGAPCyABQXhxQeSuwgBqIQICf0HssMIAKAIAIgNBASABQQN2dCIBcUUEQEHssMIAIAEgA3I2AgAgAgwBCyACKAIICyEBIAIgADYCCCABIAA2AgwgACACNgIMIAAgATYCCA8LQYCxwgAgADYCAEH4sMIAQfiwwgAoAgAgAWoiATYCACAAIAFBAXI2AgQgAEH8sMIAKAIARw0AQfSwwgBBADYCAEH8sMIAQQA2AgALDwtB/LDCACAANgIAQfSwwgBB9LDCACgCACABaiIBNgIAIAAgAUEBcjYCBCAAIAFqIAE2AgALtwQCC38BfiMAQRBrIgkkACABKAIIIQcgASgCACEFAkACQAJAAkAgCUEIaiAAIAEoAgQiAQR/IAdFDQEgASAHbiICIAEgAiAHbEdqBUEACxCTASAJKAIIIgJBgYCAgHhHBEAgAkUNAgALIABBKGohCkEEIQYCfyAAKAIoIgRBBE0EQCAAQQhqIQMgCiEIIAQMAQsgAEEEaiEIIAAoAgghAyAEIQYgACgCBAshAiACIAZPDQIgAyACQQN0aiEDA0AgAUUEQCAIIAI2AgAMBQsCfiABIAcgASAHSRsiBEEBTQRAIARBAUYEQCAFNQIADAILQQBBAEHo7sAAELcBAAsgBSkCAAshDSABIARrIQEgBSAEQQJ0aiEFIAMgDTcDACADQQhqIQMgBiACQQFqIgJHDQALIAYhAgwCC0Hg8cAAQRlB0PHAABDeAQALQezwwABBEUGA8cAAEN4BAAsgCCACNgIAIAFFDQAgAEEEaiEEIABBCGohDANAAn4gASAHIAEgB0kbIgtBAU0EQCALQQFGBEAgBTUCAAwCC0EAQQBB6O7AABC3AQALIAUpAgALIQ0CfyAKKAIAIgZBBUkEQCAGIQMgDCEIQQQhBiAKDAELIAQoAgAhAyAMKAIAIQggBAshAiABIAtrIQEgAyAGRgRAIAAQoAEgACgCBCEDIAAoAgghCCAEIQILIAtBAnQgBWohBSAIIANBA3RqIA03AwAgAiACKAIAQQFqNgIAIAENAAsLIAlBEGokAAv4BQIHfwF+IwBBMGsiBCQAIAEoAgAhBwJAAkACQAJAAkAgASgCCCIFIAEoAgQiA0kEQCABIAVBAWoiBjYCCCAFIAdqLQAAIghBMEcNAiADIAZLBEAgBiAHai0AAEEwa0H/AXFBCkkNAgsgACABIAJCABB0DAULIARBGGogByADIAUQtgFBuLHCAC0AABogBCgCHCECIAQoAhghA0EUEAoiAUUNAiABIAM2AgwgAUEFNgIAIAAgATYCCCAAQgM3AwAgASACNgIQDAQLIARBCGogByADIAMgBUECaiIBIAEgA0sbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQEgASADNgIMIAFBDTYCACAAIAE2AgggAEIDNwMAIAEgAjYCEAwDCyAIQTFrQf8BcUEJTwRAIARBEGogByADIAYQtgFBuLHCAC0AABogBCgCFCECIAQoAhAhA0EUEAoiAUUNASABIAM2AgwgAUENNgIAIAAgATYCCCAAQgM3AwAgASACNgIQDAMLIAhBMGutQv8BgyEKIAMgBk0NAQNAIAYgB2otAABBMGsiBUH/AXEiCEEKTw0CIAhBBUsgCkKZs+bMmbPmzBlSciAKQpmz5syZs+bMGVpxRQRAIAEgBkEBaiIGNgIIIApCCn4gBa1C/wGDfCEKIAMgBkcNAQwDCwsgBEEgaiEHIAIhA0EAIQICQAJAAkAgASgCBCIGIAEoAggiBU0NACAFQQFqIQggBiAFayEGIAEoAgAgBWohCQNAIAIgCWotAAAiBUEwa0H/AXFBCk8EQCAFQS5GDQMgBUHFAEcgBUHlAEdxDQIgByABIAMgCiACEDcMBAsgASACIAhqNgIIIAYgAkEBaiICRw0ACyAGIQILIAcgASADIAogAhBTDAELIAcgASADIAogAhA9CyAAAn4gBCgCIEUEQCAAIAQrAyg5AwhCAAwBCyAAIAQoAiQ2AghCAws3AwAMAgsACyAAIAEgAiAKEHQLIARBMGokAAupBQEBfyMAQRBrIgIkAAJ/AkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIAQQFrDhMBAgMEBQYHCAkKCwwNDg8QERITAAsgASgCFEGEj8EAQRQgAUEYaigCACgCDBEAAAwTCyABKAIUQZiPwQBBCiABQRhqKAIAKAIMEQAADBILIAEoAhRBoo/BAEEMIAFBGGooAgAoAgwRAAAMEQsgASgCFEGuj8EAQQ4gAUEYaigCACgCDBEAAAwQCyABKAIUQbyPwQBBDiABQRhqKAIAKAIMEQAADA8LIAEoAhRByo/BAEEPIAFBGGooAgAoAgwRAAAMDgsgASgCFEHZj8EAQQwgAUEYaigCACgCDBEAAAwNCyABKAIUQeWPwQBBDCABQRhqKAIAKAIMEQAADAwLIAEoAhRB8Y/BAEEOIAFBGGooAgAoAgwRAAAMCwsgASgCFEH/j8EAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQY6QwQBBEiABQRhqKAIAKAIMEQAADAkLIAEoAhRBoJDBAEEPIAFBGGooAgAoAgwRAAAMCAsgASgCFEGvkMEAQRYgAUEYaigCACgCDBEAAAwHCyABKAIUQcWQwQBBFiABQRhqKAIAKAIMEQAADAYLIAIgAEEEajYCCCABQduQwQBBBSACQQhqQeCQwQAQfQwFCyACIABBBGo2AgwgAUHwkMEAQQUgAkEMakH4kMEAEH0MBAsgASgCFEGIkcEAQQggAUEYaigCACgCDBEAAAwDCyABKAIUQZCRwQBBDCABQRhqKAIAKAIMEQAADAILIAEoAhRBnJHBAEENIAFBGGooAgAoAgwRAAAMAQsgASgCFEGpkcEAQRAgAUEYaigCACgCDBEAAAsgAkEQaiQAC+sDAgl/AX4jAEEQayIGJAACQAJAAkAgBgJ+AkACQAJAAkAgASgCAEUEQCABKAIIIgMtAAAiAkEoTw0BIAJFDQggAy0AASICQShuIQMgAkH3AEsNBCABQgE3AgAgAkEobq1CIIZCAYQhCwwGCyABKAIIIQIgASgCBCIDRQ0CIAItAAAiBSADayIEQQAgBCAFTRshCCACIANqQQFqIQkgBUEoSSEKQQAhBEEAIQIDQCAKRQ0CIAIgCEYEQCADIAVPDQdCAgwGC0IBIAJBBEkgAiAJai0AACIHQQ9NckUNBRogB0H/AHEgBEEHdHIhBCACQQFqIQIgB8BBAEgNAAtCBSADIAIgA2oiAksNBBogASACNgIEIAFBATYCACAErUIghkIBhCELDAULIAJBJ0GgpMAAELgBAAsgBUEnQaCkwAAQuAEACyACLQAAIgNBKE8NAyADBEAgAi0AASICQShuIQMgAkH3AEsNASABQoGAgIAQNwIAIAJBKHCtQiCGQgGEIQsMAwtBAEEAQYyjwAAQtwEACyADrUIghgs3AwhBnKPAAEENIAZBCGpBiKLAAEGso8AAEK4BAAsgACALPgIAIAAgC0IgiD4CBCAGQRBqJAAPCyADQSdBoKTAABC4AQALQQBBAEH8osAAELcBAAvVBQEHfyMAQRBrIgckAEEBIQogASABKAIIIgZBAWoiBTYCCAJAIAUgASgCBCIITw0AAkACQCABKAIAIAVqLQAAQStrDgMBAgACC0EAIQoLIAEgBkECaiIFNgIICyABKAIAIQkCQAJAAkAgACABIAIgAwJ/AkACQCAFIAhJBEAgASAFQQFqIgY2AgggBSAJai0AAEEwa0H/AXEiBUEKTw0BAkAgBiAITw0AA0AgBiAJai0AAEEwa0H/AXEiC0EKTw0BIAEgBkEBaiIGNgIIIAVBzJmz5gBHIAtBB0tyIAVBy5mz5gBKcQ0GIAVBCmwgC2ohBSAGIAhHDQALCyAKDQIgBCAFayIAQR91QYCAgIB4cyAAIAAgBEggBUEASnMbDAMLIAdBCGogCSAIIAUQtgFBuLHCAC0AABogBygCDCECIAcoAgghBEEUEAoiAUUNBCABIAQ2AgwgAUEFNgIAIAAgATYCBCAAQQE2AgAgASACNgIQDAULIAcgCSAIIAYQtgFBuLHCAC0AABogBygCBCECIAcoAgAhBEEUEAoiAUUNAyABIAQ2AgwgAUENNgIAIAAgATYCBCAAQQE2AgAgASACNgIQDAQLIAQgBWoiAEEfdUGAgICAeHMgACAFQQBIIAAgBEhzGwsQUwwCCyMAQRBrIgQkACAAAn8CQEEAIAogA1AbRQRAIAEoAggiBSABKAIEIgZPDQEgASgCACEIA0AgBSAIai0AAEEwa0H/AXFBCk8NAiABIAVBAWoiBTYCCCAFIAZHDQALDAELIARBCGogASgCACABKAIEIAEoAggQtgFBuLHCAC0AABogBCgCDCECIAQoAgghBUEUEAoiAQRAIAEgBTYCDCABQQ42AgAgACABNgIEIAEgAjYCEEEBDAILAAsgAEQAAAAAAAAAAEQAAAAAAAAAgCACGzkDCEEACzYCACAEQRBqJAAMAQsACyAHQRBqJAAL8AMBDX8jAEEwayICJAACQAJAAkAgASgCCCIERQRAQQghCAwBCyAEQdWq1SpLDQEgBEEYbCIHQQBIDQEgASgCACEKQQghCCAHBEBBuLHCAC0AABogBxAKIghFDQMLIARBGGwhCyACQRRqIQkgAkEQaiEFQQAhASACQRZqIQwgAkEcaiENIAQhBwNAIAEgC0YNAUEAIQYCQAJAAkACQAJAAkAgASAKaiIDLQAAQQFrDgUAAQIDBAULQQEhBiADQQFqLQAAIQ4MBAsgCUEIaiADQRBqKQEANwEAIAkgA0EIaikBADcBAEECIQYMAwsgAkEkaiADQQRqKAIAIANBDGooAgAQ1gEgBUEIaiACQSxqKAIANgEAIAUgAikCJDcBAEEDIQYMAgtBBCEGIAJBJGogA0EEahA4IAVBCGogAkEsaigCADYBACAFIAIpAiQ3AQAMAQsgAkEkaiADQQRqEOcBIAVBCGogAkEsaigCADYBACAFIAIpAiQ3AQBBBSEGCyABIAhqIgMgBjoAACADQQFqIA46AAAgA0ECaiACKQEONwEAIANBCmogDCkBADcBACADQRBqIA0pAQA3AQAgAUEYaiEBIAdBAWsiBw0ACwsgACAENgIIIAAgBDYCBCAAIAg2AgAgAkEwaiQADwsQ6gEACwALlgQBCX8jAEEQayIEJAAgAEGZg8EAQQEQ5AEgASACaiELIAEhCQNAIAghA0EAIQUCQAJAAkADQCALIAUgCWoiCEYEQCACIANHBEAgACABIANqIAMEfyACIANNDQQgASADaiwAAEG/f0wNBCACIANrBSACCxDkAQsgAEGZg8EAQQEQ5AEgBEEQaiQADwsgBUEBaiEFIAgtAAAiCkHE9MEAai0AACIGRQ0ACyADIAVqIghBAWsiByADTQ0CAkACQCADRQ0AIAIgA00EQCACIANGDQEMAgsgASADaiwAAEFASA0BCyACIAdNBEAgAiAHRw0BDAMLIAEgB2osAABBv39KDQILIAEgAiADIAdBzOzAABCZAgALIAEgAiADIAJBvOzAABCZAgALIAAgASADaiAHIANrEOQBCyAFIAlqIQkgAAJ/AkACQAJAAkACQCAGQe0ATQRAAkACQAJAIAZB4gBrDgUCBAQEAQALQenswAAgBkEiRg0IGiAGQdwARw0DQevswAAMCAtB7+zAAAwHC0Ht7MAADAYLIAZB7gBrDggEAAAAAwACAQALQZzrwABBKEGs7MAAEN4BAAsgBEHc6sGBAzYACiAEIApBD3FBtPTBAGotAAA6AA8gBCAKQQR2QbT0wQBqLQAAOgAOIAAgBEEKakEGEOQBDAQLQfXswAAMAgtB8+zAAAwBC0Hx7MAAC0ECEOQBDAALAAuQBAEDfyMAQfAAayICJAAgAiAAKAIAIgM2AgBBwAAhBEEBIQACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAMvAAAgA0ECai0AAEEQdHIiA0H/AXFBAWsOFgABAgMEBQYHCAkKCwwNDg8QERIVExQWC0ECIQAMFQtBAyEADBQLQQQhAAwTC0EFIQAMEgtBBiEADBELQQkhAAwQC0EKIQAMDwtBDCEADA4LQTAhAAwNC0ExIQAMDAtBEiEADAsLQRMhAAwKC0EUIQAMCQtBFSEADAgLQRYhAAwHC0EXIQAMBgtBGCEADAULQRohAAwEC0EeIQAMAwtBgAEhBAwBC0HAASEECyADQQt2QSBxIANBCHZyIARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAAAEkAAAAEAAAABAAAAIcAAABJbnRlcm5hbExhYmVsVG9vTG9uZ0ludmFsaWRQYWRMZW5JbnZhbGlkQXJndW1lbnRzaW5mLWluZk5hTgAAAAAAAQBB15HBAAvRKiCamZmZmZmZmZmZmZmZmZkZFa5H4XoUrkfhehSuR+F6FN4kBoGVQ4ts5/up8dJNYhCW1AloImx4eqUsQxzr4jYaq0Nuhhvw+WGE8GjjiLX4FCI2WDhJ88e0No3ttaD3xhBqI43ADlKmh1dIr7ya8tcaiE/XZqVBuJ/fOYww4o55FQemEh9RAS3mspTWJugLLhGkCVHLgWiu1re6vdfZ33wb6jqnojTt8d5flWR54X/9FbvIhej28Cd/GRHqLYGZlxH4DdZAvrQMZcKBdklowiUck3HeM5iQcOoBmyuhhpuEFkPBfingpvMhmxVW556vAxI3NTEPzdeFaSu8idiXstIc+ZBaP9ffNyGJltRGRvUOF/pzSMxF5l/noKtD0tFdchJdhg16PD1mpTSs0rZPyYMdsZ7XlGOXHlFdI0KSDKGcF8FLed2C337afU+bDgq04xJorFti0ZhkKpblXhcQIDkeU/Digafgtu5EUbISQLMtGKkmT85STZJYaqeOqJnCVxNBpH6wt3tQJ6rYfdr10PIeNFBlwF/JplK7E8uuxEDCGJCm6plM1OsOyQ888jaazhOAChHDrVN5sUEZYFC+9rAfZwh0AovcLcFnR7Om/l5aGVKgKTVvsCQ0hp/C6/5LSBTbGe6Q8lkdkJ5/aIll1jkQXymwtB3D+0yXMqeo1SP2GbK6WV2xNZY9rFsfunfpxBQoYuF9J16rl1ZJTPuSh50QDZ1oydjJq/LwDnr4t6WVGj4Xujp6obxbWnIuLZOERBXLRfsuyBrKr66Oi4pCnQMRRQmSsab33LJK5Hiqnfs4GwShQcHrkn31boMtVbEvxxUDtGdniXVkxFicV3cnJmwR0uyl2NuIbW30xiXyCz3gG9sj60YWB76KwzgeKKP9TBZJtlXSEWz+bpxgS1NPMdcRDorvtk8Tl7FgZ0WFGIKLHKWhv/hyD6wnGrlqN60B1hYeTplgwnJWueFgVSwkzkQSlRbCzQMeV/U1zrsTbeM6HaurAQsDGKwqK9gvdopPYhdWiTRvAuC8u1UT88RuDLUSiajtsdDMx5LvHrjUSnruHQe6V45ACtPb8kuTEG/78RcGyN9xANWofPVvD9pY/CcT1gxm6TO7p/q7TLIpjmCmHhHXhIcp/FKVyaOOVAsahRgOrNDSusmoqgeD2HZvrp0T46waHl7c2t2l0cBXsrBiH0+KSEtLsEh+UUGarI7AGxnZodPV1Vlty9rN4ValMxYUe4HcdxF7Vzzi1+er6sIRECrPYFmCXvLGNiamrKoEthm7pYBHaBj1a8VR61ZVnZEUloQABu15KiPRpyLf3X10EFYHNKPhj93RgQzRMZb8UxpFbPboGnPkpzQ9p/RE/Q8Vnlb4U+IoHVNdl1JdapfZEGJXjbkD22HrLvJQlRC/9RroRaTHz0hOvFhb2t2mZZEVIGuDbNnTcWOt4uEXHx5BEc0Rn60ohhyfSAQD82RjmxsL2xi+U2uw5QadNY8d6RUWohVHyw+J8+prSpFy5CCrETe8cXhM27hERqobhG0BRRxfY8HG1hXHAwVVSQO+mp0WGenNa0XeODY3dwdp/q4XEsFBFkaiY8FWWFhyDpex8hzOZ6vRgRwB33kT9XESjigXpexVQc4WNH9h3JDBDtiGEm5HVjV9JCBlAsfnaOSMpB0lOXj3MB2A6gFsuSAd17YXhPos+fOwmbs0I2FNF6z4Ejn3RyhTTlxfVDhoFfKsWh4uLNO5dQt9f0NgU0RbikgYWCPcx/fVMJnPGak2fDttEybS+XKMibSOso8O8fkrFR+4QS6PowcqciimC/THvN0Y+pq+pU85u8GGHtZcBpfkE/b3MAkZwl6c1zDw+tYk1B/4X1oHFGjlSXmNJi/fg3YZYObhBRAgUW7HClK/5c9eFBqFgdEMgNrxBW8OmYTZSxD11GiCFADET9bk4/Sg9RIaK3ftAaqZadkRtxz3s/fbFLzFigGIFO6tdJKwxVz5rxAsCd5opu18SVTqgG+UKLMaJNTkU7hXyjoQVZq/diBcFYN2HUNgeTtic6qu/16AFhGevcjRZvUrnbgQsTLLM1cbf2RtQVLEvH1gDfSOolzfFcy2imfbaf3K5j3D2E59fxHfindyxQ8vq9cvBY7kLv8bgNWSWwRz8oisjGo+Hb9lFmZEQknQKPXTVj1VmEr/6hGjoANCTUGIuVeVu/MQMqsc6eYCaNfNOWF5d/zCQFvvFlRSAiB5cWHnLfnJaM0VWRKGUJ2ZjrVopXxbdnQVVlsd0qZK4T6RIFH9FcX23UR8Fw4fohr/QE2nykQ3krHQyRJKy2n3ZM6uCxFuWFBPtA8eOzzuxVDYizyn8XlzP5AMGMnJ8TfaeQnKhfTHwjJAPRPbQum/9sKoqW+6DJ63Zsge45u6zCvPUyEmlXB+LFKgGIJJlXCJcqkauN0mZfB0sxOddYgaD4R194wvPgjnh4UfF16ge3I2kV8KJpgG7J83Gd/kGZZb+EAZ1YRGBfB/LBRM6kerr8YA4RA3BdGMmSMQR90/RUykZ87nJNW0R4/SGQaxzJ3W6VLYH7fdw59yqBQ4JwpLRe7beRksfmkZwoYQWdipEaLjXymPRjAPjzZxGnoTu6eBHLO6pWvz2NheJxUvqZXsmuMoYlGJj63gS+wQF3Xv4Pc4Dp3oDkyvmqwTG3kqWRqTLdiwU3LWJeJWqRUuVUdID755jdzB3reBRVQRfLsL2n6WjxWUnJeMzwi6G5cv1hT/EaZ3drDf1nJtLhZ5jN5D/6dR+ZHzsnj1vb4Rjq390v4/HMIc7LdaImNkHNiKZEIyM7ABF/BfFbW1thZGooObjsJZAaxZ5t2QxCsSowM5XxcE9s6swqP8GtQSHYOcLUysaV5yvZscykhDQhec44rWiVQY9f3iFggHaZsSxgWrvQ9Uje4va/EM2HTFHQVrIv5ydte+jCLBcEYq0RcEvE7LKMUS/9ZOZ41ruw0ToPl9eHQ7Ucskfth7El98Hk1h/vkpyQ0JtzGt/EF/YxgKgcuUIdTXoMUnJMo0zIITd854VM+5v2dvDG1DIa03H/lxLd2llMwfWXCKz01X+RjH9L19Ud3Wf3rzoT8+rPoTC+4vyeguvv/DuJwy/Xn3H9Yk86AgvzFmNvoWwv3Hkhl4HVwaGswnuF77qwHLbHUUYOR8e64JU5MYybxnovBdEJmglMWwQuse9HSUP2rnLxrh5nYEJwKJ5Vwq3TKIH/MU5+srnYXOoLew7rAooH/CENjf32FvSgFZtEpOdDPM0BqtTObnJdXN4CmiPpCP1nMV8dZRhlF3cU3utMvZcngpEehX6dbovuh7sFSsj4SNdRsgEyHfUzK6/FndiQxqpPcVgELnGEMoyGOuSm5w7umSEWZq2Cc4DQ0GFxFKGhdDHhzrIa3sLKQ9axJ0bnsSnH4WVk5XvfAc/ojbXFj8QeP+ESNKJWK0lJZBX2GNYDYFyxzp1B3oKaqrZ3/nPU340AgXh90XILshVrkyuWTX+XNtEqWVjGYraSPC6sE68sLsex0d3tYeibqCzrs0YlsCV5YXGBjfSwdiNaX89rTiAazeElnzZHnYnIg7lPGHNzYTMR7h9YPHRkpt/NxaBsaRQicYGisDBp9uVzAXr57Rp5tSE5De0TzLfSUaJRgxHKaS6h5A5acwPP4dSLd5WuOEqLsYAFGGwMkxS9PFx66CnVPJE820o81C6RFSCaYX0ciFqB+kkBw+AiHbdAe430A6nlMZUA1KywG0FfcFYBln++RCFKcKCAmbKd74N7N6UvyDNRDX3QyokUIwjlm4KreTOe8ZE0sKIA4CjT7h+e74QmG/FA88CIA+mz1l58dY+psamRDkLA0AZPjIbqUMjpD5kI4a6iOkmen504u3o3FAYdo+FbscUOG6lKk8+YL0mRoV/xArYbObxLp1x47RIMNduzEbiRopFmqVxNILDudosWLBFaF7uhGId9Dbbz4fhyeCZxGbkl0cQL+ALOZjmD4/0NgbSXXkSTPMM71RtkZl/wxHFtRdUG6P1o/Kp14FUcxw0hFTybPjS1cZRNn9bk6t54McqTr2ggl5RwPhlyWliuzPFrr7xGjUYGzPgHmE6m7wPxIq+QcOhzR65Zr10xBLGjMdIpQ5C2yQLlHiKkPaCBVcF7Wpx9W8povagVXP4dMQsBKHD9kiLnHfkJxV5QJTgeYdbAwUT4taTNoW3h3PqJrrF4qjqaWie6OueH6xpSDiIhOpBamial/SfSeXtaKaNp4eVNEggoh/25cfrPdOFZJ+GHengM4GZnx5TCPG2N10mBPxCwHkCnAtj61royeWVFofWtYAUKJZJAy+77UfeBAVGRVFmtmBFB1w/vL3svnZEBR3ansUm0MXwP5bxiguew0Q8kOS7cQF8szKLAoOfSuvGcKcDr7QN1sKb72hccoijBTO4z7Lc/lICIyXtCfVG3AQsJ9keOxbDtqsJVQMVflMGsB/UGDwrz57vbep1hBhChUzZkCA87/LlZcs7t5zGtUQUnDNZlJmrO9YR7BkuZDuGttZpLgOhSMmR2zztvqmixVJrraT2NCCHmwjKV+VhTwRdbCKH/Qanv2sOKj+7giUG/dZ1bIpr7GXvZOGmCUHEBYse3f1uiWOrJfcnhMebKYRE8VYIisJfXq/Lf64yXk9HHZqrU7voP1hzFfLYKGUlxbF7r0LWRr+5wkTCedN3RISOrH8RVtdY6bchA7Yr/vqHMiNMGuvShyFsNA+E/NiIhfU1ya88m7j0Cbay3XC6IEShoykxuoXn7TXKUaJnaecHWtwUAXv3xgqRu4EoReGsBeJ89mdJbPgVGuLnU15nvMSdFL2Ym/rzYd4RS98KJdSHl2oXoK/IgvTxmq/yYYSQhjkuUtozBs8D5+I/zrSDmgTbSl5QHosYBiY2piRg+QMHyQhlDPIVrNGE+ITDjYd1xi2TUMpoHiPONy03KSRSt8Tiq9rqGYnf1pgIWGhgqrLH6K/77nrhTIVTbRNtJu7bxlOmYxhidGOqj2QpPbiYlkUDOHWGqGn2O7K2bYrT4JHEEWbJF6bcid+EfaK37EDDBoESR0YSfWF/g34OxlbadYU0KBKE9Rdnsuk+S8UfIerEE0BEVJTyWPfOlzmufkLrBpxZ9p0D6EcGS+wHvv6b1YVwVJIKtmAsK0lwEsvL/MRETRRDaqONOcVCc0Ssn7rTxvEDXHuPl0fq20KDygyidkVnaSNi2UXGbxXCAwgKNR6EZQ6fBI88vQsWQ3gzNm59xtDlZbb/PTD8OA9s3Dhx18WAxESFpddNloay/UmgTnmEQToHPAk/FaQkN4iCzWPoxzQ7OOMHTDf2aZLgqJdP+kW2iODPbFZf+Hros5OsTJUElw5OC+1wstoedF95E6EUx3jLWC/XTXWU5SnZFByA3YXHIvmZbEqeKl27Lamjs/EEvpE12+1qiYP8ROL132yBx5iat+/KiJSPydDb6xkKAYYToh/mYhO22UfnPKJUCA4E0oNzCh0SsVvZZPqD7QzwB47pAmH9qFqWYQPInP2wpkYlrYHbPjn7q022bT1kTWuE1ZXDODzP35JJPW6IoMifR9FrNZM9v9k1OmQleho6DAZ0Yl4Pfj/g0Puc0TtUyAnFHShk5fGzJzP8Y8D8Q9NHxBSArklpEdhfxyzBeh/rssZDzXHt+nSTcwWXNHs//GiFNmQ0l8hDws9ErDaIzNbghDB51CZaEurYVCzKgaFK2oaZ7lAFLqiIk5AXFVrarwhFVOUAN2U6E4LzUlEvO7J5xBR7QDIh9oXEkip08ZKdgwb2r0AoGxIRttsh9xr1ZGjFa9kzUy9BgVJip/j792nTxGxOuJ6yAoIqEP/OOYvprIb9C7o+zmiOVNp/5Me84QoFl3y7C/7tMd1h/8PsvUDuhEu6kfmkSHZIj//f7Yi01wc8lQGhUGBerVl//+R6KiwFvVDODcBAWLEtzIz24btJhLun/PxAWg2OlmE65GkFQsdixn2J5u5Xvvgabx0UBE8F9Z6Xobi+n4v54djXUB0lhJWkf3W0PeX5XHZOGLNhr0dq9rKeA2TeYTBei3oPdLKF1YVby1xQmHQmsiKhjGoCBMiIhivTmpoTZHaqj1PQHQe6LR58j6IU6TarohkPwBdGIddYSj/bNzprlhtUMyZfROklWgNZa5gqeSNSBp6XC8fg0TtPbe+s7qDcaCuYbDyGDadijEsMvYuNsHmvudZ9RPwYXeCEx295Imb15c/9u4fWk4sNal9yoOhr9/fMviLGRWlVvcg/qGc5/KyTML5bxSqHRL5szEbSrkoj3CblFkQ3ZW2wey1XkP1DeWAxe0oGkreXgFXXuU1xKQdZwSL7RTVsRgBrH63xGkdflLQCL4QIrZam3mXJaEPLzC3s6fJGoFeFUlhrLdN2Vjz+MIfbhWbS0QHgSPG163g9ZM15iQRK6zTPpsFPVlJNFaGIj1uG7yJ3MsVnv3gbcMRBYLK8RVjoeNvERj+syRpQTebO44R0ZvSf7VZY4YHdTUlxcUWHA7jDjORFOnR0pD3UDeeeBYLHD+P2na6dHUNxkAsGPoReMYx5ZAk9+27SKNn4FnDHC0FW7dAHSyLydO1H02uAhckBHxfzX1Wb9QPK+Zwi2gSBm3GmEjJ8H7tshE9ThJ0HZ+9nuAGocCYV8Kn/aQOkBfmyktN0oAAR3mb7MpQpdkSokR5SB3OANiOxa1EgQgpHoLQLW0X2DMTP9FXnZrTIBjOpiQkeUb2qGWnrEoVdk0TfaQ6oI49vXRvpXp3iFbiHmRQleY+MWRdjLf7xQYStRi3pqrry422SnAsltFrDsQTV6SqEhMWJBEaR/DoEhegH9/p7g7cRIPaFGzzU0LfTBmAIb/YfJ0C4kMjKUNofz0UM4Eyev19aE42HFTPuTIxELjOUJCVyUBKvca5SylR6BnGC6emd9QzCDHSx2+H2rkUawnsHsZ2KaCNDtO/0q6UEN/brGSjV0IASRe4/x1+hxoZ4yPqtd8BzaASYJmxMTkVrrUciJFMznBNdeatJ476EOJVlKa1reMar7twSQx9Khvod0OFxFfpe/JijQc9l7sVh/k1BGp5h8mOtQoGZN9iEXHCvAYQj6V15Ih31mxl0RsnNcprpqW39+nTkqvwHUEWH8ShvB4exl/uDw9WjbHNEWXTAmFkY6P/FrOxiUhPfBxR3JtNUBzpMt8ojtQG2ckWDn1JcXPjII+yINh2BRQ7EnwuD4KFBZt+6s1Z8TtTKx3KvqUBnjevy+7XR/Qv3FUXoZiENEv5WAm/rGzDjBarEgBBt7zBAAsBEABBx7zBAAsBFABB17zBAAsBGQBB5rzBAAsCQB8AQfa8wQALAogTAEGGvcEACwJqGABBlb3BAAsDgIQeAEGlvcEACwPQEhMAQbW9wQALA4TXFwBBxb3BAAsDZc0dAEHUvcEACwQgX6ASAEHkvcEACwTodkgXAEH0vcEACwSilBodAEGDvsEACwVA5ZwwEgBBk77BAAsFkB7EvBYAQaO+wQALBTQm9WscAEGyvsEACwaA4Dd5wxEAQcK+wQALBqDYhVc0FgBB0r7BAAsGyE5nbcEbAEHivsEACwY9kWDkWBEAQfG+wQALB0CMtXgdrxUAQYG/wQALB1Dv4tbkGhsAQZG/wQAL1jWS1U0Gz/AQAAAAAAAAAACA9krhxwItFQAAAAAAAAAAILSd2XlDeBoAAAAAAAAAAJSQAigsKosQAAAAAAAAAAC5NAMyt/StFAAAAAAAAABA5wGE/uRx2RkAAAAAAAAAiDCBEh8v5ycQAAAAAAAAAKp8Idfm+uAxFAAAAAAAAIDU2+mMoDlZPhkAAAAAAACgyVIksAiI740fAAAAAAAABL6zFm4FtbW4EwAAAAAAAIWtYJzJRiLjphgAAAAAAEDm2HgDfNjqm9AeAAAAAADoj4crgk3HcmFCEwAAAAAA4nNptuIgec/5EhgAAAAAgNrQA2QbaVdDuBceAAAAAJCIYoIesaEWKtPOEgAAAAC0KvsiZh1KnPSHghcAAAAAYfW5q7+kXMPxKWMdAAAAoFw5VMv35hkaN/pdEgAAAMizRym+tWCg4MR49RYAAAC6oJmzLeN4yBj21rIcAABAdARAkPyNS33PWcbvEQAAUJEFULR7cZ5cQ/C3axYAAKT1BmSh2g3GM1TspQYcAICGWYTepKjIW6C0syeEEQAg6G8lFs7SunLIoaAx5RUAKOLLrpuBh2mPOsoIfl4bAFltP00BsfShmWR+xQ4bEUCvSI+gQd1xCsD93XbSYRUQ2xqzCJJUDg0wfZUUR7oa6sjwb0Xb9CgIPm7dbGy0ECT77MsWEjIzis3JFIiH4RTtOeh+nJb+v+xA/Blq6RkaNCRRzyEe//eTqD1Q4jFQEEFtJUOq5f71uBJN5Fo+ZBSSyO7TFJ9+M2dXYJ3xTX0ZtnrqCNpGXgBBbbgEbqHcH7KMkkVI7DqgSETzwuTk6RPeL/dWWqdJyFoVsPMdXuQY1vu07DARXHqxGpxwpXUdH2Ud8ZO+innsrpBhZodpchO/ZO04bu2Xp9r0+T/pA08Y770ox8nofVERcviP48RiHrV2eRx+se7SSkf7OQ67/RJi1Jej3V2qhx0ZesjRKb0Xe8l9DFX1lOlkn5g6RnSsHe2dzidVGf0Rn2Of5KvIixJoRcJxql981oY8x93Wui4XwtYyDpV3G4yoCzmVjGn6HDnG3yi9KpFXSadD3feBHBLItxdzbHV1rRuRlNR1oqMWuqXdj8fS0phitblJE4tMHJSH6rm8w4OfXREUDuzWrxF5KWXoq7RkB7UVmRGnzBsW13N+4tbhPUkiW//V0L+iG2YIj00mrcZt9Zi/heK3RRGAyvLgb1g4yTJ/LyfbJZcVIH0v2Ytuhnv/XvvwUe/8GjSuvWcXBTStXxudNpMV3hDBGa1BXQaBmDdiRAT4mhUVMmAYkvRHoX7FelUFtgFbGh88T9v4zCRvu2xVwxHheBAnCyMSNwDuSurHKjRWGZcU8M2r1kSAqd3keTXBq9+8GbZgKwYr8IkKL2zBWMsLFhDkOLbHNWwszTrH8S6+jhsUHcejOUOHd4AJOa66bXIiGeS4DAgUaZXgS8dZKQkPax+O8weFrGFdbI8c2Lll6aITcvBJphe6dEezI04ov6OLGI9s3I+d6FEZoKxh8q6Mrh7Zw+l5YjHTD+QLfVftFy0TzzRkGLv9xxPdTlyt6F34FwNCfd4p/blYlGKz2GJ19h1CSQ4rOj50t5wdcMddCboSktvRtchNUeUDJUw5tYtoF3dSRuM6oaXeRC6fh6KuQh2K8wvOxIQnC+t8w5QlrUkSbfCOAfZl8c0lXPT5bhjcFois8oFzv21BL3NxuIoekxzVqzcxqJfkiP3nRrMW89sRypaFPZK9Hev8oRhg3O9SFn385sz2LOUlfMoeeNOr5xvOXRBAGjyvl40+Eytky3ARQnUU0CALm/0wDtg1Pf7MFZKSGQTpzQE9vRFOg8w9QBub+4+isSAhRhbLENKfJggRgvozC95oqdfb/ZTGRzBKFSP5AI4Vw5PNUj06uFm8nBq2m8B47Vl8wFNmJBO49aEQo8Lw1mhwm7Dof+0XJnPKFEzzrAyDTMLc4t/one8P/RkPGOzn0W/5ye2LscL1KT4QEx7nYcbLdzzp7l0zc7RNFJjlYPq3vpWLo2o1AJAhYRn+Hvn4ZS57bkzFQgD0abkfX7Obu//8DMVPuymAOOLTEzeggqo/PFC2Iyo0oMbayBhESCOVT0vko6w0QUh4EfseKw02vRGvbubrwCgt6+pcE3WQgyzWWgrgJvFy+KUlNBiTdKS3i/EMmHCtj3YPL0Ee3MjGUvcWCF9mzBmqab3oEhN7eCe1HMr2fz+gFMTsohfXmVZx4qN89F9PyBn1p4sdJiDWhm3mzfibMR0w+Uh3EjCoi+gIYAH3An4kfDcbFRc8kq4iC7jBtIOdLVsFYtocZRut9QYT+VBygvxYQ30IEj9iGLPIVzflDqM7L5ScihbPet7fui2FntKLCju5Qy0cwQzry5Q8E6Njl+bEU0qcEfHP5f65C9iLPD0gtuhcAxbuQ59+qA7OrotMqOMiNIQbdYojTynJQE3XL0nOlaAyERJt7KJz+5AgzXvbQbtIfxVWiKeLUDq1aMBaUhLqGt8aNrVIV3JEcUG4eHNL0nDLEIPiGu2Olc1R5lZQ3gZN/hQkm2Go8vpA5p9s5JVI4D0a9wA9qdec6O/jw65dLaxmEDRBjJMNxOLr3HQatThXgBSBUW/4EHXbJhQSYeIGbaAZ8ZJFmyopSZhMq3xNJEQEEK33FkJ1c1u+H9bbYC1VBRSYtZySUlDyrafLErl4qgYZ/+JDN2fkbpmRflfnFlVIH99tioLATuX/Gq+WUC41jRNXCS2jcKLev+FavOR5gnAYrUv4ywxL1i+acetdGKOMHkwve//n7uVdACezOu/lFxMf+1n/oWpfdcDwXwlr390X53kwf0pFt5Lw7LfLRVfVHTBMfo9Oi7JbFvRSn4tWpRI8310zIi6f8huxJ4curE4XC1c1wKr5Ru9infEoOlciHWdWIbgKXIzVXQKXWYR2NRIBrClmDXPvSvXC/G8l1MIWARe0v9BPq52y8/vLLolzHGCO0HfiEYuiT3h9P701yBH5scQVW9Yti2PWXI8sQzoWd9412/FL+W38CzSz99PIGwqrASl3z7vEfYcA0HqEXRHNFULzVMPqNV2pAISZ5bQVQJsSMCp0ZYO00wDl/x4iGwihC16aaB/SUIQg719T9RBKiY71wEKnBmWl6Oo3qDIVnSvyMnETUUi+zqLlRVJ/GkJb178mrDLtNsGFr2uTjxASMs1vMFd/qIQxZ5tGeLMUl37Ai/wsn9Ll/UBCWFbgGR5PWNcdfKOjr55oKfc1LBDmYi5NJVuMjFvGwvN0QzcUn/t5oO5xr2/yd7MwUhRFGYd6mEhqTpsL71XgvGZZlh+UTF9tAhFBZ7U1DDbg970Tuh+3CENVEcEiQ49D2HWtGKjn5MqTqlVx6xNzVE7T2B7JEM9enIrVJnPsx/QQhEcT+9SCdkPtivCP5/kxFWUZGDqKI1SUqK3sc2F4flq+Hx5kNpa0XInsc+g8C4/41tMS/cO74bOr55AiDM6ytsyIF/20KtqgliE1K4+BX+T/ah0esVqIJP40AXv5sLvu32ISZV1xqq09gsHZN51q6pf7Fr+0DRUZzeIx0IVEBeV9uhz3kCitL8AtH6LTSiOvjvQRNbVymDsw+aaKiB3sWrJxFoJij35KfLdQreokp/EeDhyRnRmPrq1yUqwSdwhX04gR9gTgMhpZD2dX15TKLAjrFTMGmL9gL9NALQ06/TfKZRvgA793nP2DSDxIRP5inh8R2MSulQP9pFpLWtW9+4VnFQ52GntEPE4x3rBKrXpnwRrJifDMquXQ3oquTqys4LgQO6wsgBUfhZYtWmLX1xjnFErXN+DaZib8uPA6zQ3fIBqO5iLMSACYnXPWRKBoi1QQMqAr/1oA/oQQDFbIQq5pFD6I9r5xgD2mFI9retMZhBlOKrQujuDMz9lyBllIIOUfcJow3VgM4CHIB6Q3LTTvEw3BfBRvD1gqugmNhTgB6xhQ8ZvZShPutChM8KaGwSUf0nYByA7MFHGZL1Yo9Jh3E4bUAXoS/1nNf7trMjF/VRioSYIY136wwF+qBn/93moeCW5Rb0ZPbth7KmRvXssCE4vJJQsY44nOGjU9CzZ+wxfuO+8N3lssgmGCDI7DXbQddYW1yGq5W/F80cc4mrqQEtLm4nrFp7It3MX5xkDpNBeGoJvZtlEfOVM3uPiQIwIdVEQBSBKTswOUInObOlYhEmmVAdrWd6AEOetPQsmrqRbD+oGQzJXIRQfm45K7FlQcujxR2p9dnYvEb847NY60EeiL5dAHtYSutQvCisKxIRbj7h7FSeIlGqOOci0zHqobTVUzG26tV/AlmWf831JKEaEqAKLJmG1sb3+B+5fnnBVJNYAK/P6IR0vfYfp9IQQbTiGQhl2ftQyPK3287pTiEKEpNOg0B+PPcnacayo6GxUKNEEiAsnbgw+Ugwa1CGIahsBoVaFdabKJPBIkcUV9EKfwwqoJtQMfrMsWbc2WnBTRrHMVTKLEJpd+XMiAvMMZA0xojW/lOngezzl90FUaEANfwnDLnkkW5kKInETrIBTE9vJMfgbcm59TqsMVJikZdrQv4B0I04KH6JQ0m29zH8nQHawS5cOxVBHdAMElqBP8RCVXV9403qlVFEExL5IYO5buLO0VwlUUa1mR/bq2HuUdFTy0TZm17OLXet40MhNeZRpLIaH/4qfbjRkWwv4Xtv7gnWmJv9uRUvGfm3L+HTGfrALitVcpm9P2Q6EHvxL+xleDWqOt84GI9JSJyW4XvbgtJDEMmXCiqjH663tKHXaTnLaep1+GpQpffHONThJUuENkhpH3507NdlvQMOIWaaZU/ed19aGigFRyBL2aHAHoVP6waTmlZdB0xyK24BECIuo9HcSHDn8EUnmr41gWgqpkjSS1KdKehaZXlhzvG5HqXtg2EVpDgxPI9t1xdRE2pXaOhJUwFGQYenRVztIVg04UsuW6PBl9npjR6oFHGxKxTI/P9MUvDmP/wjKxDBFW3R9zA3K3u9E7v3N/3U8VrNTnT4ROpSrGCq9Q39SjGuvk8LESUafau2ZtkgtlphAmHm1eVyVR0WrACHdO/s8UsGUINq1upYWF8MoU4v0DGo4/xUEsZYdzU9b+TK1+QhBxjzZSdz5pUOiLPqBYHlMUTjPEJhWOg2TiLk7I7uVnGSJAdXCacaT9mrphemrfwR8VSEmGAMeG3qAUfYyiK9kTGprbp8B4KBbJWZwvi3bPGKGA0tHwlrJbO3CD+y1UAx9kkCODVp5PGSUmMr2cFGITfnTsI+yFo1+ur37sw5k6GJ2R5yxnZ4z3mVue5zRASR4CuxB8oMC3OkD5whAhyO0Sw+kUm8iwZUmQt/NUKTqpFzMk2sH6HL9bdKUwqrOIkx2gVii5HHJXuWhnXkpwNXwSSGxy56NOredCAfZczEIbF1oHT+FMopihk4EzdH8T4hyYZNEMcGX/RPwwoKgvTA0Svr0FEMw+P1Y7PciSO5+QFi4tBxR/Ds8rikx6dwrHNBw9fIRsD2lhW9ZvrIpm/KARTJulR1PDOfLLi1ctgDsJFh8CjxkoNMjuvm6tOGCKixtTYfkPmSA9VTdlbCN8NjcRqLn3U79ojCqFfkcsGwSFFRKo9Sjvgi91Jl5Z9yFF5hoLiZl51bE9Cdjalzo1688QTuv/10oejQuO0T2JAuYDFSLm/43dZXCO8UWNK4PfRBrV7794qj8G+bZLOPuxC2sQyuvvFpXPR7ekXgZ6ns6FFL3mq1x6wxnlTfaHGEZCpxk2cOt5LBowr/D5VM9riQgQQ0xmmLcg/NpsOCrDxqsKFFTff37lKLsRiMb0c7hWDRkq1x/eHvMpFir48ZBmrFAfeubTSvM32k0aO5cawGuSExngiB3wxVDh4Ak9IbAGdxgfGOskbPekGVlMjClcyJQeE+8Sl6MaB7C3r/eZOf0cE9iq13xM4QicpZt1AIg85BeOlQ2cnxkLA48CkwCqS90deX2IwQPw5mGZ4VtASk+qEtec6rEErGC6/9ly0BzjVBcNRGXeBdf4qH+QjwTkGyodiEr/qmOGm8lPutmCblE6Eiodv5X8ZwK84yiQI8rlyBZ05C67+wEDqxwzdKw8H3scyU79VD3h4erxn8jrhfPMEXuiPKqMWZpl7se6ZmcwQBYay8vU7+8A/+l5aUCBPNAb8F7/5PWVYD8y7EHI0CViEaw2P15zuzjPPmdS+kSvuhVXBM81UOoGgw4B5zgWWykbtmKhIXJS5BGpYJDj7dj5EGS7CaoOZ11W03h0XClPOBU9KoxU0sD0KwiXkbPzYoYaZprXdIP4eBtl/jpQ2P2TEACBDVKkNldi/r1JZE79uBRA4ZBmTQTt+n0tXP2hPOcZyIwaYLAi1LxunFk+5YUwEPovIXhcKwlsigPwjV6nPBT4eymWM3YLB20EbDE20UsZ9tqze8BTzkiIBce9g8WeH9poUE1Y9IAtdWOcVnI7wxMQg6RgbjHheFJ8Q+xOCrQYMC4waTMydTMyYm9vbGVhbiBgAACRchAACQAAAGR5EAABAAAAaW50ZWdlciBgAAAArHIQAAkAAABkeRAAAQAAAGNoYXJhY3RlciBgAMhyEAALAAAAZHkQAAEAAABzdHJpbmcgAORyEAAHAAAAYnl0ZSBhcnJheU9wdGlvbiB2YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = uE();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await lE(await i, n);
  return fE(t, e);
}
function Gt(i, n, t, e, A) {
  return uA(i - -643, A);
}
function qg(i, n, t, e, A) {
  return uA(e - -522, n);
}
(function(i, n) {
  function t(g, a, s, C, I) {
    return uA(g - 870, s);
  }
  function e(g, a, s, C, I) {
    return uA(s - -991, I);
  }
  function A(g, a, s, C, I) {
    return uA(a - -759, I);
  }
  function o(g, a, s, C, I) {
    return uA(C - 786, I);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(A(-529, -545, -570, -534, "uf&l")) / 1 + parseInt(t(1060, 1066, "]9Hz", 1066, 1047)) / 2 + parseInt(t(1058, 1070, "iyZC", 1077, 1054)) / 3 * (parseInt(o(963, 999, 992, 982, "M[hI")) / 4) + parseInt(A(-549, -532, -508, -550, "E0]B")) / 5 * (-parseInt(A(-510, -534, -536, -546, "fYHq")) / 6) + parseInt(t(1075, 1086, "]9Hz", 1099, 1094)) / 7 * (parseInt(e(-831, -804, -812, -822, "SG5S")) / 8) + -parseInt(t(1077, 1080, "m)Ku", 1072, 1077)) / 9 + parseInt(A(-571, -553, -578, -567, "Iyj#")) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ii, 190526 + -1 * 25980 + 127362);
function hE(i, n, t, e, A) {
  return uA(i - 648, n);
}
function ii() {
  const i = ["zmo/sxyK", "AKfKWONcGG", "WPddONnbWRSIWRG", "W4X+WOjMW78", "WOVdL8oPWOBcUW", "W6KLW6HOW6O", "W5hdMCkKWQDZ", "sejmn8kPqcC", "y8o7xWeL", "WQDVvSk/W5/cVMhdQqFdJfj1EW", "pCo3wWhdOG", "WOShWOZcQSoI", "gt88rSoAehO", "WQnRleLu", "mZNdNbFcRq", "a1ldH8kkWPa", "mmoMuX3dQq", "WOpdK8oOWPBdTG", "W5LgW7CYW4iWdHL3WPhcMCkV", "W6i/fmoKWQ4", "WRRdQ8kRW7HEymo+Aq5F", "sYJdJCkwiSk3jqG", "FCo3tNim", "W5XKW5fjWQfRW7GEe2ZcVmku", "W6bzW5HbWPPKAxXTuSoCqMq", "C0LJWO3cQG", "W4GDWQ9VWOa", "W5zwWP9IW4i", "WPz7xmoKEmkwW6Cr", "y8oBW7ZdTCkel8kpW680W58", "lmohrb7cR8kVqSkvnav7WPGq", "mSoQrGFdRq", "W6W0W7/cHKmxW7SmW4FdLmkTWPT0", "BSoRp35T", "abFdIguk", "kY3dKdZcI1ldMq", "gMRdKmkMcq", "W6DADanXjSo4CYyFkG", "W59UW5DeWQbOWOWGehFcRCklfG", "WOVcO8ogeCk3gftcGsddRt3dRSoQ", "bu8LWOyTWPfohCkHrYVcRdG", "gNJdQ8kUaa", "WOBdM01iWRC", "W4VdS8khsG", "WPmpW5W2WRW1hfTIW5CjsmoN", "WP3cVmoBDmkp", "mmoQsaVdQa", "WRPNWReXWRFcQ8kkqCode8oQ", "WRWciLOW", "CSoOm2q", "EmomWPeeW7m"];
  return ii = function() {
    return i;
  }, ii();
}
function uA(i, n) {
  const t = ii();
  return uA = function(e, A) {
    e = e - (25 * 240 + 5800 + 197 * -59);
    let o = t[e];
    if (uA.GyzqOS === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      uA.wHVlXY = C, i = arguments, uA.GyzqOS = !0;
    }
    const g = t[11 * -653 + 10 + 7173], a = e + g, s = i[a];
    return s ? o = s : (uA.VBsxwA === void 0 && (uA.VBsxwA = !0), o = uA.wHVlXY(o, A), i[a] = o), o;
  }, uA(i, n);
}
function Vi(i, n, t, e, A) {
  return uA(n - -932, A);
}
function _g(i, n, t, e, A) {
  return uA(i - -815, A);
}
var Gs;
class pE {
  constructor() {
    y(this, Gs, !1);
  }
  async [(Gs = Vi(-751, -738, -754, -734, "1G@&") + Vi(-731, -734, -736, -746, "%SPs") + Vi(-722, -719, -700, -701, "%SPs"), Gt(-427, -414, -407, -408, "E%DQ"))](n) {
    function t(g, a, s, C, I) {
      return Gt(g - 1001, a - 40, s - 287, C - 304, s);
    }
    function e(g, a, s, C, I) {
      return _g(a - 582, a - 72, s - 12, C - 255, C);
    }
    function A(g, a, s, C, I) {
      return qg(g - 48, C, s - 182, I - 1505);
    }
    function o(g, a, s, C, I) {
      return Gt(C - 1279, a - 240, s - 180, C - 81, s);
    }
    function r(g, a, s, C, I) {
      return Gt(s - 1134, a - 47, s - 143, C - 338, I);
    }
    try {
      const g = n + (e(-35, -32, -26, "6)mU", -43) + "/") + Og;
      await Gc(g), this[t(547, 529, "2Ys&", 556, 532) + r(682, 667, 689, 685, "%SPs") + r(737, 732, 717, 731, "fvHR")] = !0;
    } catch {
      this[e(-24, -47, -57, "E0]B") + e(-14, -15, -9, "2Ys&") + o(880, 833, "3w[L", 858)] = !1, console[o(861, 841, "Iyj#", 846)](Og + (t(551, 568, "DwJU", 540) + r(678, 658, 669, 692, "dim$") + e(-9, -10, -7, "uf&l") + A(1159, 1164, 1141, "mAvM", 1164) + A(1145, 1184, 1173, "b*ll", 1163) + t(541, 546, "%SPs", 540) + r(684, 715, 700, 717, "KOPc") + e(-58, -51, -62, "nNQ7") + e(-39, -33, -14, "E%DQ") + o(799, 810, "%SPs", 813) + o(861, 826, "HEKq", 848) + t(575, 555, "KLLl", 567) + o(842, 857, "Toc!", 851) + o(874, 871, "2Rvu", 860) + "n."));
    }
  }
  [Gt(-440, -448, -433, -434, "iyZC") + qg(-315, "1G@&", -307, -301) + Gt(-435, -416, -460, -458, "iyZC") + "ed"]() {
    function n(e, A, o, r, g) {
      return hE(A - -193, r);
    }
    function t(e, A, o, r, g) {
      return _g(o - 1033, A - 265, o - 242, r - 455, e);
    }
    return this[n(681, 674, 671, "D5Jl") + t("D5Jl", 392, 410, 396) + n(630, 639, 615, "eeUl")];
  }
}
class Zi extends Error {
  constructor() {
    super(...arguments);
    y(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ri() {
  var i = ["F8kqWRW", "WOGqiSkeWQm", "W54uWR3cTq", "WPFdUq48W5ediJ/dTSokW5/dJMef", "ECkCWQddR8k6", "cNeUWQxdPG", "W5BcSarvgq", "uhVcINxcQq", "W7BdTYjkW5pcKmkOW40VWRBcLmo8rq", "amkAcW", "yCo+tuKV", "W73dLSoKWOtdOmo1WONcT8ku", "tComFSk/hq", "W79OW7DIWQG", "lCo3DCkOW5i", "WORcM8orehK", "rgHM", "W6FdJumRDmkqjmkndSoMWPtdHYe", "WRZcUL3cIHO7DdVdULNdT8k1smoJ", "W7bSimkYuW", "nv5K", "WOini8k0WR8", "axe9", "WQP8WQ88zG", "W6hdKYqFWRi", "uhVcMeBcLW", "WQv3WQKnFq", "o8oyFL3cQ8opytNdRd3dJSk+AG", "WR/dL8kNzSka", "W7XSo8kOtG", "y8kBgXZdVa", "WQJcPMaFWOG", "WPpdUa9bWPj/DLpdIq", "WQ13WR0PCa", "W7FdJGitWQW", "WR0/WRa1W7mqW7tcULZcNJDavq", "qSoOzmk9fW", "cmkygsCr", "nCoaW7ZcUmoqW7beWQW0W4tcHXq", "gmoEaWFcQq", "zmoAWObgAa", "WQrgxSkBAZZcISodmmkgg2FcJa", "WPWdp8kzWRK", "W7JdHcqFWR8", "qCo5ir3dQW", "W70PW797jqVdQSo1WPldM8kRW4NcHG", "W7mAeCozmq", "qwVcIL7cRa", "u8oGEdNdJwLgW48Cra", "W4xdUuOEgmowBYBcOLXNWQrZ", "W4pdVtu", "fSobW4vhl8k2W4pdTCoJW7vttSkF", "WRldLCk2Cmkl", "W6tdVJ/dMeC", "WRJcMXm", "WOZdK8oQ", "WPNdQCoedmkID3rFW7VcPmkCW60", "w8o9jIhdQq", "W4m8WOO", "WONdHCorECks", "uvVcL0VcOq", "t8o7ySkXdq", "W4GqWObndG", "W7/cJYZdLmkM", "WOldIrO", "WO7dHCoVBmkh", "WQrGm1pdLa", "ASoEWPvrDq", "ESkjpr3dUa", "WOpdG8o9E8kC", "WOPaW64", "W4ldTYG"];
  return ri = function() {
    return i;
  }, ri();
}
function Oe(i, n, t, e, A) {
  return $(A - 793, e);
}
function zi(i, n, t, e, A) {
  return $(n - 337, A);
}
(function(i, n) {
  function t(a, s, C, I, E) {
    return $(a - -591, I);
  }
  function e(a, s, C, I, E) {
    return $(C - -921, a);
  }
  function A(a, s, C, I, E) {
    return $(C - -70, E);
  }
  function o(a, s, C, I, E) {
    return $(E - -939, a);
  }
  for (var r = i(); ; )
    try {
      var g = -parseInt(e("xp)x", -471, -500, -478, -468)) / 1 + parseInt(e("!4@2", -501, -511, -497, -488)) / 2 + parseInt(e("kavF", -530, -507, -477, -471)) / 3 + parseInt(t(-178, -172, -199, "#B&1", -166)) / 4 * (parseInt(A(328, 317, 306, 331, "F1FJ")) / 5) + parseInt(e("o5d*", -541, -548, -551, -512)) / 6 + parseInt(t(-191, -207, -204, "7wNr", -209)) / 7 + -parseInt(o("OpUk", -546, -580, -540, -571)) / 8;
      if (g === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, -1 * -28621 + -65334 + -1 * -615019);
function De(i, n, t, e, A) {
  return $(t - -995, i);
}
function At(i, n, t, e, A) {
  return $(A - -869, i);
}
function $(i, n) {
  var t = ri();
  return $ = function(e, A) {
    e = e - (-25 * -375 + 1 * 5155 + 1 * -14173);
    var o = t[e];
    if ($.SfGadB === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", d = "", x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, S = B.length; p < S; p++)
          d += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, g = function(I, E) {
        var B = [], d = 0, x, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      $.VqRwfv = g, i = arguments, $.SfGadB = !0;
    }
    var a = t[4039 + -2 * 1177 + -5 * 337], s = e + a, C = i[s];
    return C ? o = C : ($.nRAITQ === void 0 && ($.nRAITQ = !0), o = $.VqRwfv(o, A), i[s] = o), o;
  }, $(i, n);
}
function Nt(i, n, t, e, A) {
  return $(t - -159, i);
}
var Ct, Lo;
class Vg {
  constructor(n) {
    W(this, Ct);
    W(this, Lo);
    this[e(598, 573, "UH3z") + e(615, 641, "po^U")] = n;
    function t(r, g, a, s, C) {
      return $(s - 311, C);
    }
    function e(r, g, a, s, C) {
      return $(r - 214, a);
    }
    function A(r, g, a, s, C) {
      return $(g - 184, C);
    }
    function o(r, g, a, s, C) {
      return $(r - 968, a);
    }
    try {
      v(this, Ct, n[e(619, 623, "9#cA", 612, 613) + e(636, 664, "uC$v", 606, 654) + t(700, 641, 690, 674, ")DuL")] && JSON[t(669, 702, 657, 672, "(Ms3")](n[e(616, 585, "jhx*", 604, 635) + t(717, 703, 658, 683, ")kK%") + t(721, 754, 752, 726, "3hRQ")])), v(this, Lo, n[A(546, 546, 557, 561, "Ud4L") + A(574, 565, 530, 591, "k2Tt")]);
    } catch (r) {
      console[o(1335, 1331, "$]Nx")](r);
    }
  }
  get [De("18Zx", -592, -577) + "id"]() {
    function n(t, e, A, o, r) {
      return De(A, e - 407, o - 1010);
    }
    return this[n(411, 377, "8p(K", 386) + n(459, 430, "uC$v", 424)][n(434, 406, "Ud4L", 439) + n(464, 458, "3UL9", 438)];
  }
  get [De("jxf6", -586, -616) + "s"]() {
    function n(e, A, o, r, g) {
      return Oe(e - 198, A - 453, o - 201, o, A - -806);
    }
    function t(e, A, o, r, g) {
      return Oe(e - 447, A - 298, o - 394, r, o - -1113);
    }
    return this[t(50, 32, 46, "ay#P") + t(104, 48, 76, "o5d*")][n(390, 413, "po^U") + "s"];
  }
  get [De("ay#P", -620, -588) + At("v77Q", -480, -522, -539, -512)]() {
    function n(o, r, g, a, s) {
      return Nt(s, r - 79, o - 1073);
    }
    function t(o, r, g, a, s) {
      return Nt(s, r - 275, a - -783);
    }
    function e(o, r, g, a, s) {
      return Oe(o - 337, r - 112, g - 459, r, s - -349);
    }
    function A(o, r, g, a, s) {
      return At(a, r - 424, g - 431, a - 438, g - 1741);
    }
    return this[A(1264, 1227, 1256, "UH3z") + n(1274, 1291, 1273, 1266, "9#cA")][e(854, "7wNr", 830, 844, 822) + t(-598, -551, -558, -568, "jhx*")];
  }
  get [Nt("nu#[", 219, 234) + "b"]() {
    return m(this, Ct);
  }
  get [De(")kK%", -584, -583) + At(")L@U", -505, -516, -492, -482)]() {
    return m(this, Lo);
  }
  get [zi(714, 717, 717, 741, "O2@B") + De("oIWh", -595, -587) + At(")kK%", -473, -408, -470, -444) + Oe(1212, 1177, 1193, "jWRy", 1178)]() {
    var r, g;
    function n(a, s, C, I, E) {
      return De(C, s - 205, s - 425);
    }
    function t(a, s, C, I, E) {
      return Oe(a - 56, s - 150, C - 372, s, E - -1367);
    }
    function e(a, s, C, I, E) {
      return At(a, s - 60, C - 193, I - 170, C - -22);
    }
    function A(a, s, C, I, E) {
      return Oe(a - 392, s - 350, C - 354, s, a - -555);
    }
    function o(a, s, C, I, E) {
      return Oe(a - 353, s - 361, C - 390, C, E - -1120);
    }
    return !!((g = (r = m(this, Ct)) == null ? void 0 : r[e("!4@2", -521, -503, -497) + e("3hRQ", -498, -527, -492)]) != null && g[A(628, ")kK%", 595) + o(95, 56, "nu#[", 90, 90) + n(-156, -159, "8fzJ") + o(60, 68, "oIWh", 96, 72) + t(-160, "UH3z", -175, -148, -180) + t(-164, "po^U", -220, -230, -197) + o(59, 59, "D[hv", 122, 92)]);
  }
  get [zi(724, 732, 747, 744, "(Ms3") + Oe(1176, 1181, 1149, "Ud4L", 1151) + At("ay#P", -507, -475, -475, -483) + De("oIWh", -616, -606) + At("3UL9", -458, -462, -475, -442) + Nt("Ud4L", 279, 261)]() {
    var o, r;
    function n(g, a, s, C, I) {
      return De(a, a - 323, I - 1474);
    }
    function t(g, a, s, C, I) {
      return Nt(g, a - 293, a - 909);
    }
    function e(g, a, s, C, I) {
      return zi(g - 102, a - -414, s - 21, C - 496, g);
    }
    function A(g, a, s, C, I) {
      return Nt(C, a - 243, s - 561);
    }
    return !!((r = (o = m(this, Ct)) == null ? void 0 : o[A(808, 793, 772, ")L@U") + A(797, 787, 767, "5jjz")]) != null && r[t("ArN*", 1178) + e("XGjf", 327, 305, 343) + n(891, "!4@2", 861, 853, 877) + e("5jjz", 292, 311, 280) + e("HGnB", 298, 310, 292) + e("!4@2", 314, 345, 279) + n(852, "B2dm", 816, 830, 838)]);
  }
}
Ct = new WeakMap(), Lo = new WeakMap();
(function(i, n) {
  function t(g, a, s, C, I) {
    return oA(C - 476, s);
  }
  function e(g, a, s, C, I) {
    return oA(C - 848, I);
  }
  const A = i();
  function o(g, a, s, C, I) {
    return oA(C - 78, g);
  }
  function r(g, a, s, C, I) {
    return oA(s - -265, C);
  }
  for (; ; )
    try {
      if (parseInt(o("w1O)", 650, 490, 600, 604)) / 1 * (-parseInt(o("hpj9", 726, 612, 688, 668)) / 2) + parseInt(o("QOEq", 563, 561, 520, 428)) / 3 * (-parseInt(r(93, 106, 207, "Srcn", 260)) / 4) + -parseInt(r(219, 330, 307, "J3HY", 289)) / 5 + -parseInt(r(238, 328, 339, "Bvw]", 253)) / 6 + parseInt(o("*8R(", 706, 670, 593, 606)) / 7 * (-parseInt(t(1102, 1190, "c@5X", 1123, 1017)) / 8) + parseInt(t(1162, 1040, "RXE!", 1071, 1133)) / 9 + -parseInt(e(1468, 1401, 1498, 1453, "!75B")) / 10 * (-parseInt(t(925, 1050, "[R7i", 935, 1002)) / 11) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ai, -474284 * -1 + -410969 + 1 * 220564);
function z(i, n, t, e, A) {
  return oA(e - -664, n);
}
function qA(i, n, t, e, A) {
  return oA(n - -728, A);
}
function ai() {
  const i = ["W5JdM8o0wmoe", "dCotfmkJga", "y0SSWOtcOq", "cSoeaSkOdW", "WPfvsh3dLG", "W44JxSknxa", "W4D9WOXD", "p8oafmkIaW", "lSoFW5e", "kx7dRSoYcq", "iZ7cNSkXW4CbWR9Ldti1W5a", "W6m6wq", "W4NdI8o0C8ob", "ymoEW43cPSkD", "WOnUW4GBka", "m8oKWPLmW4m", "WRpdMmobz0a", "W4y8xcrS", "W4JdLIG8nSkGWOG9AMddL8k3", "tqb8WOWf", "W5/cGCk9WOVdQW", "z8kHF8kOBG", "WQfUWOS+eW", "ywRdLmoYWPe", "fmkeq37cKa", "tSoHW4ZcNr8", "W73dN8o0ASko", "WRRdMCobW5VcUCoVk8kAW7NdTx/cPXeN", "WQmVW47dTmkr", "WOhcKh/cGG", "jMxdU8oKhG", "vWlcLSknW60", "WO/cM2lcTCke", "nXWngSkX", "WRVdNSowr0m", "WPxdR8opW6Ly", "W4/dJmo1AmoC", "qSoQWRfTW5W", "W5HvWPvLda", "vXv/WOGA", "WPJcJSoIC8oIWRddLaq", "W4NdNNH/qSo7WOS1", "WPiRW4NdUSoz", "WR1GWPOSaG", "W5D5WOP/lG", "W6C0xIS", "W4bUWPDDmW", "vCkJrCkaqG", "W6TKfHa", "W7JcQCoeWPhdLq", "DIVcS8kFW6e", "p2hcGcXC", "WOlcGCkNWOxdQa", "scONWQ8", "qgC9WPVdTq", "oaCbdmkS", "W7ZcTmkGxmon", "W7SpWOpcNq", "lvzlW5JcUG", "WOlcO1T8AW", "WOBcG8kr", "m8kLuvNcLW", "dSoeb8k4hW", "tN7cLCkKWPG", "xXH/WRif", "W5hdLWqLiW", "WOBcOSoRC8ow", "WPm0W6yqtq", "WQZcSuldLSk9", "W4NdM8oPDmol", "jgxdTCoOgW", "f8kPgdhdLG", "WRHTb3aWALFdUq1bDSkt", "a2NcKtPx", "W6ZcMq1Ila", "WQJcT18", "WOFcTCoGzmoa", "sSoNW5VcVGq", "p8kNrG", "hKxcJCkMWOGVWRq", "WRqcWO/dI8kr", "q8oYW4RcKqu", "bmoobCkThG", "jmoNj8o2kZP/W6ZdOGpdL8kqWOq", "WQtcUe1FW6u", "iCkYxfpcHG", "WRq0W6Coca", "W7JcVmk3wSol", "ySkrn8olka", "W5zZWOX2jG", "W785W5HQxSopWPVdGW/dL1hcLa", "W6ZcLa0ImW", "WPnXA1FdSW", "WR/cN2tcMmky", "W65JeXOG", "s8ocWOvMW7G", "W5D5WOP7ma", "W55ZWOOtlG", "gmk7brNdJa", "kvyIn8k6", "wSoEpmoNoq", "mmk0xu4", "WPGovColAq", "W7FcQmoqWRS", "ASkrjmolnW", "W5f/WOO", "WQ0RW47dTmkr", "AuaKWPG", "W7pcLGqLja", "WPRdG8oqBvW", "zLeKWQVdPa", "vv7dVmoqWQ0", "WQW0W6eEbq", "WRmRW5BdVSkD", "bCoad8kI", "W6JcHSkxWPZdVG", "W6JcVGyLna", "WQXSWO0", "WRFcH35Uya", "Au8UWP7cVG", "W6KWwtzS", "W7lcUSkMESoe", "WRjdW5q", "WR4WEColyW", "AmokW5/cKXG", "p03dQSoOdW", "WQFcSK1wW6e", "WOlcKSkxWO/dQW", "D27cU8krW6a", "W7TvfZPg", "AIqH", "W4FcGmksWONdQq", "FIFcTSkBW7O", "cNlcGdbl", "WQnOWPW2bG", "jh/dPmkVfG", "WOlcPvn2W50", "ubP/WPq0", "oN7dQmoVdG", "W6pcImknWOVdPa", "WQpdJI4Ba8k3bmoDCSkVW4Gj", "WOVcNhj9zW", "tYOHWQLn", "sSoSWQznW58", "W4nZWPa", "WQeVW5ZdTSkm", "W7ysWOJcIY8", "m8oZWPHmW5u", "W6iTBCkBWRm", "WOVcUCoWACoe", "W7lcR8ovWRhdMG", "BSkEumkXFW", "W4xcHSozWQZdGW", "E8k8Cq", "er12WO8h", "kmo3WOzWW7m", "W73cL3jc", "BeC4WPlcOa", "WQaWW7mCga", "DcqYWQnO", "WPFdUmojW4jf", "BfaCWRNdPa", "i3tcVJzA", "W7vNWQDivCoBW4u3amoWW4TQW6i", "W5xdKmk/WPldQs7dH1W", "WR0aWPK", "CCkMwKJcNa", "W7pdPbhcGmoI", "W7yuWOZcQZm", "WRlcPeb9W6G", "WOeNW6CshW", "W64JxSknxa", "h8k1W6i5WOlcTNi0WR3cMfFcS0S", "WQZdTSoSWQBdHdmbBG", "W7ZcN3Hjvq", "aCosoCk6cW", "pSoXWOu", "jSoorSkijq", "zmohWOjnW4Kfza", "bwqcomk7", "WRhdNSowiKC", "u8kCqSoMvG", "WOfOWOS6cq", "WROgW4G3cW", "jvrpW5NcMW", "WQtcHCkqWOVdQq", "obOac8kT", "W6PBedPl", "pmolAmk+ACk/W63dU0jTWQldMa", "W6NcMaKOda", "d3uijCk7", "W7lcQCor", "WPtdT1vZW6S", "W6SHxZy", "W7tdPaS", "jSkHr1pcMW", "WOtcHCklWPpdVa", "WR8yWO/dI8kq", "W7VcTmoeWRVdHG", "WOBcLmkaWQZdSa", "W43cRSo5WPZdSq", "WR7cV1HQFa", "q8k7uSkLFq", "W4BdM8opW59oWPWH", "ymoYbWJdIJrmzSoNWRNdP1Pp", "WQvGWPW8dW", "omo3WOjCW5G", "W7i0rWPk", "dmoeaSoI", "nCoKWOrqW4i", "w8oYW4ZcGqG", "W7folJ1b", "gSkWaJdcHq", "zLWNWPi", "k2/dTq", "WQZcMCkLwCogxxa", "hmo/WPvAW54", "WONcH8kw", "WReoW7JdVCkq", "W7FcUqKHjq", "W7pcHhrFsa", "WRf/W4G+ha", "WQy4W5xdPmkk", "oCoLWQfEW4m", "WQpcVL99W5W", "W6lcH8kqWPW", "W7iAWP/cJsK", "D2tdK8oVWPa", "xSkFjmoM", "z8kAiW", "y2tdLa", "W7rzbZPr", "W6FcGmkdWO3dQa", "W6NcGYqLiW", "W6TPfre9", "W7hcKHa4", "xwldHCoKWPO", "vHTGWPuo", "WQpcUfDUW7O", "W7VcM8kqWOBdUa", "lKDuW4NcGa", "W6CWrq", "iKLuW6/cHq", "smoMWQzRW5O", "WQKzsConDG", "g2yvomkH", "DrirWPRdMCkzWQVdUCk3WRjUW7NdJG", "ubnG", "CSk9zCkJoG", "WPxcSCo2C8oa", "DgxdLCoKW5q", "W4uVsCkSxq", "W4JdM8oJy8ol", "E8k6DCkJDa", "ye04WR3dHW", "WRaeWPG", "W6NcJmkDWOZdQq"];
  return ai = function() {
    return i;
  }, ai();
}
function EA(i, n, t, e, A) {
  return oA(e - 401, i);
}
function RA(i, n, t, e, A) {
  return oA(A - 611, n);
}
function oA(i, n) {
  const t = ai();
  return oA = function(e, A) {
    e = e - (15082 + 14653 * -1);
    let o = t[e];
    if (oA.sfmSdu === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      oA.FbnXLV = C, i = arguments, oA.sfmSdu = !0;
    }
    const g = t[1301 * 1 + 1543 * 5 + -9016], a = e + g, s = i[a];
    return s ? o = s : (oA.UrduoN === void 0 && (oA.UrduoN = !0), o = oA.FbnXLV(o, A), i[a] = o), o;
  }, oA(i, n);
}
function yA(i, n, t, e, A) {
  return oA(e - -747, A);
}
var Ns, Rs, Fs;
class yE {
  constructor(n) {
    y(this, Fs);
    y(this, Rs, [z(-43, "Y1y(", 12, -78) + z(-202, "vEP5", -121, -158) + "ic", yA(-30, -185, -134, -130, "[R7i") + yA(-167, -294, -92, -180, "A$Ks") + "ic"]);
    y(this, Ns);
    function t(A, o, r, g, a) {
      return oA(a - 977, A);
    }
    function e(A, o, r, g, a) {
      return oA(g - -229, o);
    }
    this[t("F8@m", 1537, 1631, 1648, 1651) + e(315, "7awX", 140, 206) + "d"] = n;
  }
  async [(Fs = z(20, "39cU", -106, -86) + "se", Rs = RA(1160, "eLrD", 1203, 1244, 1188) + z(39, "4WI(", -132, -70) + RA(1230, "gyL)", 1316, 1364, 1267) + yA(-361, -214, -322, -258, "39cU"), Ns = RA(1103, "A$Ks", 975, 1133, 1052) + yA(-190, -173, -289, -176, "[R7i"), RA(1276, "[R7i", 1307, 1212, 1268))](n) {
    const t = await this[r(416, "2D1[", 490) + g(491, "@huW", 436) + r(600, "cuf@", 555)](n);
    function e(a, s, C, I, E) {
      return z(a - 162, E, C - 153, a - 153);
    }
    await Promise[g(613, "Y1y(", 498) + o(824, 956, "gyL)", 940)]([this[e(64, 192, -27, -64, "Bvw]") + r(433, "P@nl", 427) + "d"][o(910, 703, "Uih9", 800)](n), this[A(1388, 1331, 1503, 1418, "vEP5") + r(606, "w5Ye", 680) + "e"](t)]);
    function A(a, s, C, I, E) {
      return EA(E, s - 378, C - 188, I - 396);
    }
    function o(a, s, C, I, E) {
      return z(a - 298, C, C - 251, I - 1003);
    }
    function r(a, s, C, I, E) {
      return yA(a - 496, s - 331, C - 292, a - 687, s);
    }
    function g(a, s, C, I, E) {
      return EA(s, s - 65, C - 30, C - -399);
    }
    this[o(873, 913, "vEP5", 879) + r(571, "Dek6", 581) + e(41, 164, 70, -83, "Q$A3")]();
  }
  async [EA("Bvw]", 1195, 983, 1076) + RA(1026, "4WI(", 994, 1080, 1116) + "se"](n) {
    var g;
    function t(a, s, C, I, E) {
      return yA(a - 151, s - 30, C - 451, a - -149, E);
    }
    function e(a, s, C, I, E) {
      return yA(a - 104, s - 280, C - 429, C - 48, s);
    }
    function A(a, s, C, I, E) {
      return qA(a - 183, a - 1367, C - 236, I - 476, I);
    }
    function o(a, s, C, I, E) {
      return yA(a - 252, s - 447, C - 342, E - 1057, I);
    }
    function r(a, s, C, I, E) {
      return EA(E, s - 182, C - 354, s - -153);
    }
    try {
      if (t(-313, -398, -197, -237, "*8R(") === r(845, 739, 639, 629, "EAX%")) {
        const a = await fetch(n);
        if (!a.ok) {
          if (r(765, 738, 800, 689, "F8@m") === A(1207, 1235, 1200, "AynC", 1299)) return _0x356eb4[r(652, 723, 840, 613, "w1O)")](this[o(828, 760, 918, "[4qg", 874) + "se"]);
          throw new Error(t(-283, -175, -321, -171, "*8R(") + e(-208, "#fGc", -88, -33, -154) + e(-102, "dD9]", -84, -52, -97) + e(-216, "w*xc", -254, -145, -157) + "d.");
        }
        this[r(675, 767, 763, 686, "c@5X") + "se"] = await a[A(1306, 1221, 1297, "vEP5", 1221)]();
      } else this[t(-360, -424, -332, -437, "cuf@") + A(1147, 1187, 1023, "aTi*", 1027) + "d"] = _0x498e39;
    } catch (a) {
      if (r(745, 732, 611, 605, "Dek6") === t(-426, -467, -366, -482, "2D1[")) {
        const s = this[t(-378, -251, -415, -307, "RXE!") + t(-293, -187, -276, -337, "10vb") + "se"]();
        return ((g = s == null ? void 0 : s[r(815, 795, 756, 746, "[R7i") + o(915, 727, 800, "2D1[", 847)]) == null ? void 0 : g[t(-401, -327, -520, -350, "tMvS")]) || [];
      } else this[o(1049, 916, 969, "*8R(", 995) + "se"] = void 0, console[o(635, 785, 841, "7awX", 743)](a);
    }
  }
  async [z(-53, "$R5x", -150, -73) + z(-185, "vEP5", -24, -141) + "e"](n) {
    function t(g, a, s, C, I) {
      return EA(C, a - 419, s - 102, s - 178);
    }
    if (this[r(132, 108, 167, 209, "eLrD") + o(1393, 1481, 1450, "c@5X")] = void 0, !n) {
      if (r(212, 104, 63, 123, "eLrD") === e(41, 135, "dD9]", 117, 159)) return null;
      console[e(-62, -50, "w5Ye", 0, -14)](A(595, 582, 539, 715, "[R7i") + r(109, 78, 180, 139, "AynC") + A(691, 637, 800, 721, "*8R(") + r(103, 27, 154, 127, "EAX%") + r(181, 94, 186, 67, "7awX")), this[t(1300, 1229, 1185, "J3HY") + "se"] = void 0;
      return;
    }
    function e(g, a, s, C, I) {
      return qA(g - 118, I - 234, s - 365, C - 206, s);
    }
    function A(g, a, s, C, I) {
      return RA(g - 157, I, s - 28, C - 130, g - -600);
    }
    function o(g, a, s, C, I) {
      return EA(C, a - 243, s - 284, g - 504);
    }
    function r(g, a, s, C, I) {
      return qA(g - 431, a - 182, s - 24, C - 376, I);
    }
    await this[r(13, -86, -213, -157, "eLrD") + A(679, 632, 642, 696, "QOEq") + "se"](n);
  }
  async [z(-198, "AynC", -67, -106) + yA(-276, -97, -87, -168, "hpj9") + z(-83, "$R5x", -77, -179)](n) {
    const t = await fetch("" + n + this[r(1320, 1362, 1403, 1442, "RXE!") + r(1359, 1596, 1478, 1502, "vEP5") + e(-28, -101, "Z4c3", -85) + o(244, "P@nl", 280, 259, 357)][0]);
    function e(a, s, C, I, E) {
      return RA(a - 449, C, C - 72, I - 480, a - -1068);
    }
    function A(a, s, C, I, E) {
      return EA(a, s - 204, C - 11, C - -773);
    }
    function o(a, s, C, I, E) {
      return RA(a - 210, s, C - 99, I - 372, E - -787);
    }
    function r(a, s, C, I, E) {
      return qA(a - 94, C - 1541, C - 420, I - 330, E);
    }
    const g = t.ok ? 0 : 14068 + 27 * -521;
    return "" + n + this[o(230, "[4qg", 189, 370, 306) + A("uS1n", 249, 271) + o(356, "gyL)", 539, 390, 480) + r(1463, 1465, 1438, 1492, "Q$A3")][g];
  }
  [z(-106, "*8R(", -238, -211) + EA("RXE!", 1006, 967, 1003) + "s"](n) {
    function t(A, o, r, g, a) {
      return qA(A - 183, o - 1459, r - 134, g - 471, A);
    }
    function e(A, o, r, g, a) {
      return RA(A - 443, o, r - 471, g - 19, r - -1125);
    }
    n[t("2D1[", 1252, 1202, 1372) + "ch"]((A) => console[e(-72, "2D1[", -76, -179)](A));
  }
  [RA(1059, "A$Ks", 1308, 1208, 1181) + EA("7awX", 962, 933, 840) + z(-100, "gyL)", -157, -157)](n) {
    function t(A, o, r, g, a) {
      return yA(A - 324, o - 472, r - 29, A - 1462, g);
    }
    function e(A, o, r, g, a) {
      return z(A - 57, A, r - 375, g - 1542);
    }
    n[t(1196, 1241, 1252, "!75B") + "ch"]((A) => console[e("@huW", 1489, 1327, 1417)](A));
  }
  [RA(1074, "xzlb", 1014, 1167, 1078) + z(6, "J3HY", 10, -76)]() {
    function n(e, A, o, r, g) {
      return EA(r, A - 205, o - 394, e - 273);
    }
    function t(e, A, o, r, g) {
      return RA(e - 378, o, o - 120, r - 143, g - -1241);
    }
    return window[n(1188, 1159, 1145, "7awX") + n(1300, 1193, 1411, "iHk]")][t(-99, -8, "3e1M", -79, -118) + n(1271, 1336, 1282, "3e1M")];
  }
  [EA("eLrD", 982, 1065, 946) + yA(-239, -243, -197, -238, "Kd1P") + z(-136, "Dek6", 44, -36)]() {
    function n(r, g, a, s, C) {
      return qA(r - 235, a - 1405, a - 16, s - 197, g);
    }
    function t(r, g, a, s, C) {
      return EA(a, g - 372, a - 283, g - -722);
    }
    function e(r, g, a, s, C) {
      return z(r - 21, s, a - 119, r - 820);
    }
    function A(r, g, a, s, C) {
      return qA(r - 157, C - 1173, a - 66, s - 193, g);
    }
    function o(r, g, a, s, C) {
      return qA(r - 174, s - 1480, a - 452, s - 391, a);
    }
    try {
      if (A(918, "hpj9", 1094, 907, 1032) !== n(1269, "Q$A3", 1316, 1330, 1394)) this[t(192, 127, "W1[h", 147, 33) + "se"] = void (-7199 + -6 * -845 + 1 * 2129), _0x1609d5[e(613, 706, 626, "Kd1P", 741)](_0x758812);
      else {
        if (!this[o(1281, 1306, "[4qg", 1316, 1341) + "se"])
          if (o(1196, 1335, "[R7i", 1315, 1416) !== t(93, 128, "Q$A3", 170, 11)) _0x2af0b8[n(1410, "!75B", 1307, 1386, 1318)](_0x931cdb);
          else throw new Zi(n(1058, "w1O)", 1123, 1046, 1096) + A(1069, "cuf@", 961, 1089, 977) + e(800, 910, 817, "Bi%F", 833) + e(815, 893, 763, "QOEq", 700) + ".");
        if (!this[t(259, 195, "AynC", 227, 195) + n(1446, "Srcn", 1361, 1349, 1403) + "d"][e(811, 814, 939, "hpj9", 895) + A(911, "vEP5", 1075, 1087, 993) + A(987, "Y1y(", 885, 1016, 916) + "ed"]())
          throw t(286, 222, "QOEq", 285, 310) === n(1356, "!75B", 1309, 1187, 1241) ? new _0x246c99(t(304, 179, "Uih9", 202, 204) + e(819, 915, 862, "uS1n", 790) + e(716, 650, 814, "[4qg", 679) + n(1277, "P@nl", 1275, 1324, 1398) + "d.") : new Zi(t(209, 153, "eLrD", 90, 111) + o(1240, 1364, "iHk]", 1351, 1406) + t(210, 181, "A$Ks", 145, 289) + e(820, 724, 712, "[R7i", 796) + ".");
        this[o(1258, 1238, "Z4c3", 1294, 1282) + e(700, 591, 613, "RXE!", 647)] = new Vg(xE(this[n(1012, "10vb", 1114, 1148, 1149) + "se"], this[n(1386, "10vb", 1360, 1414, 1343) + e(633, 761, 664, "Q$A3", 726)]())), this[A(941, "2D1[", 934, 916, 923) + e(721, 813, 755, "4WI(", 668) + "s"](this[A(972, "aTi*", 975, 1024, 943) + A(1159, "39cU", 1201, 996, 1103)][A(883, "Srcn", 1037, 867, 913) + "s"]), this[A(945, "P@nl", 891, 1033, 962) + A(1018, "$R5x", 944, 896, 1019) + e(764, 892, 777, "hpj9", 731)](this[n(1227, "#fGc", 1299, 1298, 1409) + n(1263, "w1O)", 1314, 1381, 1279)][t(304, 306, "P@nl", 281, 307) + n(1120, "w*xc", 1117, 1241, 1144)]);
      }
    } catch (r) {
      if (e(680, 635, 803, "uQGx") === n(1111, "Bvw]", 1204, 1103)) {
        if (r instanceof Zi) {
          if (t(60, 158, "*8R(") === e(725, 682, 736, "Y1y(")) return this[n(1395, "eLrD", 1331, 1393) + n(1435, "39cU", 1335, 1238)];
          r[A(1061, "*8R(", 994, 1145, 1030)]();
        } else if (r instanceof Error)
          if (o(1379, 1233, "Kd1P", 1308) !== n(1245, "A$Ks", 1234, 1131)) console[n(1286, "xzlb", 1269, 1266)](r);
          else return _0x16dde7[n(1233, "w1O)", 1131, 1230) + A(865, "Q$A3", 943, 995, 888)][n(1355, "Y1y(", 1346, 1372) + A(896, "w1O)", 1098, 1034, 994)];
        const g = {};
        g[o(1400, 1293, "7awX", 1359) + t(-17, 109, "3e1M")] = !1, g[e(715, 699, 689, "Dek6") + "s"] = [], g[A(1213, "#fGc", 1129, 1180, 1122) + t(74, 189, "P@nl")] = [], g[A(993, "7awX", 1020, 1058, 939) + t(216, 111, "Srcn") + e(732, 640, 710, "2D1[")] = void 0, g[e(801, 731, 914, "@huW")] = function() {
        }, g[e(600, 500, 629, "Srcn") + t(213, 233, "dD9]")] = "", this[n(1334, "F8@m", 1293, 1323) + A(1130, "[R7i", 1140, 947, 1016)] = new Vg(g);
      } else _0x170cbd[o(1378, 1272, "!75B", 1375)]();
    }
  }
  [qA(-268, -198, -90, -170, "Bi%F") + EA("Srcn", 828, 840, 902) + RA(1402, "JWPq", 1397, 1328, 1287) + "t"]() {
    function n(t, e, A, o, r) {
      return EA(e, e - 341, A - 394, A - -51);
    }
    return this[n(771, "hpj9", 797) + n(989, "eLrD", 888)];
  }
  [qA(-109, -47, -80, -109, "aTi*") + z(35, "w1O)", -160, -50) + "se"]() {
    function n(r, g, a, s, C) {
      return EA(s, g - 141, a - 247, C - -842);
    }
    function t(r, g, a, s, C) {
      return z(r - 50, C, a - 229, g - -259);
    }
    function e(r, g, a, s, C) {
      return EA(C, g - 452, a - 489, g - -1042);
    }
    function A(r, g, a, s, C) {
      return z(r - 440, s, a - 427, g - 1399);
    }
    if (!this[A(1165, 1204, 1232, "Bvw]") + "se"]) {
      if (t(-556, -437, -439, -359, "Z4c3") === e(-301, -185, -186, -191, "P@nl")) return null;
      _0x2899ca[A(1266, 1288, 1261, "c@5X") + "ch"]((r) => _0x5b4c67[A(1147, 1270, 1150, "!75B")](r));
    }
    function o(r, g, a, s, C) {
      return qA(r - 498, r - -108, a - 231, s - 61, g);
    }
    try {
      if (A(1376, 1369, 1447, "*8R(", 1290) === e(-145, -189, -179, -176, "[R7i")) return JSON[e(-116, -158, -171, -99, "4WI(")](this[e(-243, -176, -250, -87, "FS^i") + "se"]);
      if (!this[n(85, 43, 183, "w5Ye", 85) + "se"]) throw new _0x4ff4af(n(110, 256, 62, "7awX", 168) + o(-339, "vEP5", -320, -242, -368) + t(-208, -241, -150, -204, "QOEq") + t(-384, -362, -404, -406, "uS1n") + ".");
      if (!this[n(15, 110, 68, "W1[h", 25) + o(-405, "[R7i", -483, -395, -533) + "d"][A(1357, 1328, 1297, "Z4c3", 1287) + e(-108, -61, -66, 16, "1qUb") + n(120, 226, 53, "@huW", 110) + "ed"]()) throw new _0x8e30d6(o(-337, "RXE!", -401, -358, -223) + A(1158, 1264, 1254, "2D1[", 1369) + e(-115, -75, -136, -153, "w1O)") + t(-482, -461, -477, -342, "A$Ks") + ".");
      this[o(-349, "FS^i", -361, -272, -343) + n(104, 173, 97, "Kd1P", 72)] = new _0x28c66d(_0x53570c(this[n(83, 55, 190, "!75B", 141) + "se"], this[o(-400, "uQGx", -411, -385, -482) + o(-290, "7awX", -256, -392, -372)]())), this[e(-147, -124, -102, -133, "P@nl") + t(-275, -382, -413, -415, "W1[h") + "s"](this[n(320, 226, 179, "J3HY", 211) + o(-164, "F8@m", -107, -117, -162)][e(97, 0, -74, -120, "hpj9") + "s"]), this[e(76, 30, -88, -93, "[R7i") + o(-311, "Uih9", -279, -278, -221) + o(-187, "Dek6", -309, -199, -299)](this[A(1190, 1269, 1376, "JWPq", 1336) + A(1501, 1373, 1270, "hpj9", 1276)][n(278, 254, 289, "uS1n", 178) + A(1362, 1414, 1429, "Y1y(", 1385)]);
    } catch (r) {
      if (n(3, 180, 41, "#fGc", 90) !== A(1250, 1368, 1428, "EAX%")) throw new _0x25906c(o(-378, "Srcn", -319, -493) + n(201, 60, 287, "W1[h", 171) + A(1382, 1316, 1249, "aTi*") + A(1428, 1324, 1291, "@huW") + ".");
      return r instanceof Error && (o(-281, "JWPq", -355, -389) !== e(-152, -178, -284, -187, "[4qg") ? _0x399193[t(-329, -323, -270, -429, "39cU") + o(-274, "$R5x", -188, -161)](_0x45d06b) : D[o(-316, "cuf@", -255, -387) + A(1331, 1397, 1431, "QOEq")](r)), null;
    }
  }
  [EA("2D1[", 988, 1012, 929) + z(50, "cuf@", -27, -3)]() {
    var A;
    const n = this[e(840, "QOEq", 703, 877, 817) + e(1076, "hpj9", 1121, 1130, 1010) + "se"]();
    function t(o, r, g, a, s) {
      return z(o - 402, g, g - 46, r - 128);
    }
    function e(o, r, g, a, s) {
      return yA(o - 16, r - 374, g - 349, s - 1109, r);
    }
    return ((A = n == null ? void 0 : n[e(1007, "AynC", 1001, 1098, 1032) + t(-61, -44, "Dek6")]) == null ? void 0 : A[e(809, "Bi%F", 909, 849, 865)]) || [];
  }
  [yA(-408, -251, -190, -283, "Uih9") + yA(-272, -368, -218, -296, "Y1y(") + RA(1189, "vEP5", 1356, 1216, 1262)]() {
    var r;
    function n(g, a, s, C, I) {
      return qA(g - 20, I - -14, s - 279, C - 350, C);
    }
    function t(g, a, s, C, I) {
      return yA(g - 85, a - 414, s - 498, s - 1646, a);
    }
    function e(g, a, s, C, I) {
      return RA(g - 153, I, s - 369, C - 360, g - -1427);
    }
    const A = this[t(1608, "Kd1P", 1541) + o(406, 484, 544, "EAX%") + "se"]();
    function o(g, a, s, C, I) {
      return yA(g - 111, a - 48, s - 345, a - 681, C);
    }
    return (r = A == null ? void 0 : A[e(-198, -277, -243, -84, "FS^i") + o(671, 580, 488, "A$Ks")]) == null ? void 0 : r[t(1556, "3e1M", 1528) + n(-148, -30, 4, "Q$A3", -69)];
  }
}
const li = class li extends yE {
  static getInstance() {
    if (!this._instance) {
      const n = new pE();
      this._instance = new li(n);
    }
    return this._instance;
  }
};
y(li, "_instance");
let qr = li;
const Oa = Ze(void 0);
Oa.displayName = "ConfigurationContext";
function Nc() {
  const i = le(Oa);
  if (!i)
    throw new Error("Missing provider for ConfigurationContext");
  return i;
}
function mE({
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
    captureMode: e ?? Nr.AUTO_CAPTURE,
    assetsDirectoryPath: zI(i),
    sessionToken: o,
    camera: t ?? {},
    transactionCountingToken: r,
    autoCapture: n ?? {}
  };
}
function DE({
  children: i,
  configuration: n
}) {
  const t = BA(() => mE(n), [n]);
  return /* @__PURE__ */ b(Oa.Provider, { value: t, children: i });
}
const gi = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, ui = class ui {
  constructor() {
    y(this, "lastDetails");
    y(this, "delayedTime");
    this.lastDetails = {}, this.delayedTime = 1 * 1969 + -490 + 1 * -1479;
  }
  static getInstance() {
    return !this._instance && (this._instance = new ui()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 4301 * -2 + 5538 + 3064;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && gi(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
  dispatchCustomEvent(n, t) {
    gi(n, t);
  }
};
y(ui, "_instance");
let ve = ui;
function Rc(i, n, t = qB) {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  ve.getInstance().dispatchDelayedCustomEventOnChange(i, A, t);
}
function wE(i, n) {
  ve.getInstance().dispatchCustomEventOnChange(i, n);
}
function bE(i, n) {
  const t = {};
  t.size = n;
  const e = t;
  ve.getInstance().dispatchCustomEventOnChange(i, e);
}
function kE(i, n, t) {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  ve.getInstance().dispatchCustomEventOnChange(i, o);
}
function SE(i, { detection: n, fps: t, image: e, invalidValidators: A, isInCandidateSelection: o }) {
  const r = {};
  r.image = e, r.data = {}, r.data.detection = n, r.data.fps = t, r.data.isInCandidateSelection = o, r.data.invalidValidators = A, r.data.imageResolution = {}, r.data.imageResolution.width = e.width, r.data.imageResolution.height = e.height;
  const g = r;
  ve.getInstance().dispatchCustomEventOnChange(i, g);
}
const GE = (i, n) => {
  const t = {};
  t.instruction = n, gi(i, t);
}, _r = (i, n) => {
  gi(i, n);
}, NE = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  Y(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, wE(i, A);
  }, [t, e, i]);
};
function Vr(i, n) {
  Y(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const RE = (i) => i === LI.CONTROL ? !va() : !0;
function FE(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = ue(), [r, g] = iA(), a = BA(() => {
    const d = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? RE(i);
  }, [n, r, i, o]);
  function s() {
    t !== zA.LOADING && e(zA.RUNNING);
  }
  function C() {
    g(r === void 0 ? !a : !r);
  }
  async function I() {
    if (n) {
      e(zA.LOADING);
      try {
        await n.switchCamera(), e(zA.RUNNING);
      } catch (d) {
        if (d instanceof Error) {
          A(D.fromCameraError(d));
          return;
        }
      }
      g(void 0);
    }
  }
  function E(d) {
    var x;
    switch ((x = d.detail) == null ? void 0 : x["instruction"]) {
      case Ut.CONTINUE_DETECTION:
        s();
        break;
      case Ut.TOGGLE_MIRROR:
        C();
        break;
      case Ut.SWITCH_CAMERA:
        I();
        break;
      default:
        return;
    }
  }
  Vr(i, E);
  const B = {};
  return B.shouldCameraMirror = a, B;
}
function vE(i, n) {
  Vr(i, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === Ut.CONTINUE_DETECTION && GE(ie.CONTROL, Ut.CONTINUE_DETECTION);
  }), Vr(ie.CONTROL, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === Ut.CONTINUE_DETECTION && n();
  });
}
function ME(i, n) {
  Y(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      bE(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
function WE(i) {
  return Fe(Math.abs(i));
}
const LE = () => {
  const [i, n] = iA(null), t = GA(new Fa(-3 * -960 + 223 * 13 + -5774));
  function e(o) {
    const { z: r } = o.accelerationIncludingGravity || {};
    if (!r) return;
    t.current.pushFixed(WE(r));
    const g = Fe(Go(t.current)), a = {};
    a.z = g, n(a);
  }
  Y(() => (window.addEventListener("devicemotion", BQ(e, cQ), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
};
function Ja(i, n) {
  const t = GA(n);
  Y(() => {
    t.current = n;
  }, [n]), Y(() => {
    if (!i) return;
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
}
var OE = Symbol.for("preact-signals");
function Ni() {
  if (je > -3 * 3172 + 768 * 4 + 6445)
    je--;
  else {
    for (var i, n = !1; ko !== void 0; ) {
      var t = ko;
      for (ko = void 0, Zr++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -3, !(967 * 4 + 4227 * -2 + 4594 & t.f) && Wc(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !0);
        }
        t = e;
      }
    }
    if (Zr = 5092 + 1 * 9004 + -14096, je--, n) throw i;
  }
}
function Fc(i) {
  if (je > 0) return i();
  je++;
  try {
    return i();
  } finally {
    Ni();
  }
}
var T = void 0, ko = void 0, je = 0, Zr = 7724 + 4399 * -2 + 1 * 1074, si = -10318 + 737 * 14;
function vc(i) {
  if (T !== void 0) {
    var n = i.n;
    if (n === void 0 || n.t !== T)
      return n = { i: 0, S: i, p: T.s, n: void 0, t: T, e: void 0, x: void 0, r: n }, T.s !== void 0 && (T.s.n = n), T.s = n, i.n = n, -479 * -3 + 6143 * -1 + 4738 * 1 & T.f && i.S(n), n;
    if (n.i === -1)
      return n.i = -705 + -3247 * -2 + -7 * 827, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = T.s, n.n = void 0, T.s.n = n, T.s = n), n;
  }
}
function xA(i) {
  this.v = i, this.i = 4 * 1167 + -8693 + -23 * -175, this.n = void 0, this.t = void 0;
}
xA.prototype.brand = OE, xA.prototype.h = function() {
  return !0;
}, xA.prototype.S = function(i) {
  this.t !== i && i.e === void 0 && (i.x = this.t, this.t !== void 0 && (this.t.e = i), this.t = i);
}, xA.prototype.U = function(i) {
  if (this.t !== void 0) {
    var n = i.e, t = i.x;
    n !== void 0 && (n.x = t, i.e = void 0), t !== void 0 && (t.e = n, i.x = void 0), i === this.t && (this.t = t);
  }
}, xA.prototype.subscribe = function(i) {
  var n = this;
  return ao(function() {
    var t = n.value, e = T;
    T = void 0;
    try {
      i(t);
    } finally {
      T = e;
    }
  });
}, xA.prototype.valueOf = function() {
  return this.value;
}, xA.prototype.toString = function() {
  return this.value + "";
}, xA.prototype.toJSON = function() {
  return this.value;
}, xA.prototype.peek = function() {
  var i = T;
  T = void 0;
  try {
    return this.value;
  } finally {
    T = i;
  }
}, Object.defineProperty(xA.prototype, "value", { get: function() {
  var i = vc(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Zr > -51 * 95 + -1 * 8072 + -13017 * -1) throw new Error("Cycle detected");
    this.v = i, this.i++, si++, je++;
    try {
      for (var n = this.t; void (-321 * 29 + -913 + 38 * 269) !== n; n = n.x) n.t.N();
    } finally {
      Ni();
    }
  }
} });
function Mc(i) {
  return new xA(i);
}
function Wc(i) {
  for (var n = i.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Lc(i) {
  for (var n = i.s; n !== void 0; n = n.n) {
    var t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      i.s = n;
      break;
    }
  }
}
function Oc(i) {
  for (var n = i.s, t = void 0; n !== void 0; ) {
    var e = n.p;
    n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
  }
  i.s = t;
}
function Mt(i) {
  xA.call(this, void 0), this.x = i, this.s = void 0, this.g = si - (3842 * -1 + -7968 + 127 * 93), this.f = -739 * 9 + -156 * 61 + 16171;
}
(Mt.prototype = new xA()).h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if (-9 * 888 + -6149 * -1 + -25 * -75 == (1 * -8237 + 67 * -14 + 9211 & this.f) || (this.f &= -5, this.g === si)) return !0;
  if (this.g = si, this.f |= 1319 * -2 + -9 * -1084 + 7117 * -1, this.i > -629 * 10 + -2797 * -1 + 3493 && !Wc(this)) return this.f &= -2, !0;
  var i = T;
  try {
    Lc(this), T = this;
    var n = this.x();
    (-697 * 5 + 1 * -5571 + 9072 & this.f || this.v !== n || 828 + 6 * -138 === this.i) && (this.v = n, this.f &= -(1424 + 7 * -201), this.i++);
  } catch (t) {
    this.v = t, this.f |= 31 * 13 + 23 * -291 + 6306 * 1, this.i++;
  }
  return T = i, Oc(this), this.f &= -2, !0;
}, Mt.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -387 * 10 + 43 * 77 + 595;
    for (var n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  xA.prototype.S.call(this, i);
}, Mt.prototype.U = function(i) {
  if (this.t !== void 0 && (xA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -33;
    for (var n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Mt.prototype.N = function() {
  if (!(2339 + 1 * -5534 + -139 * -23 & this.f)) {
    this.f |= -94 * 41 + -41 * 138 + 9518;
    for (var i = this.t; i !== void 0; i = i.x) i.t.N();
  }
}, Object.defineProperty(Mt.prototype, "value", { get: function() {
  if (1553 + -8518 * 1 + 1 * 6966 & this.f) throw new Error("Cycle detected");
  var i = vc(this);
  if (this.h(), i !== void 0 && (i.i = this.i), -3970 + -1515 * 1 + 5501 & this.f) throw this.v;
  return this.v;
} });
function Zg(i) {
  return new Mt(i);
}
function Jc(i) {
  var n = i.u;
  if (i.u = void 0, typeof n == "function") {
    je++;
    var t = T;
    T = void 0;
    try {
      n();
    } catch (e) {
      throw i.f &= -2, i.f |= 1 * 78 + 8262 + -8332, Ua(i), e;
    } finally {
      T = t, Ni();
    }
  }
}
function Ua(i) {
  for (var n = i.s; n !== void 0; n = n.n) n.S.U(n);
  i.x = void 0, i.s = void 0, Jc(i);
}
function JE(i) {
  if (T !== this) throw new Error("Out-of-order effect");
  Oc(this), T = i, this.f &= -2, 30 * 249 + 3090 + 1319 * -8 & this.f && Ua(this), Ni();
}
function ho(i) {
  this.x = i, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 7116 + 8 * 644 + -38 * 322;
}
ho.prototype.c = function() {
  var i = this.S();
  try {
    if (1 * -8536 + -4394 + -2 * -6469 & this.f || void (3505 * -1 + -2019 + 5524) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, ho.prototype.S = function() {
  if (567 + -2 * 283 & this.f) throw new Error("Cycle detected");
  this.f |= 96 + 95 * -1, this.f &= -9, Jc(this), Lc(this), je++;
  var i = T;
  return T = this, JE.bind(this, i);
}, ho.prototype.N = function() {
  !(1 * 6533 + -3721 + -2810 & this.f) && (this.f |= -163 * -38 + 9827 + 193 * -83, this.o = ko, ko = this);
}, ho.prototype.d = function() {
  this.f |= 2 * 1007 + -2 * -268 + -41 * 62, 1 * 6272 + 4652 + 331 * -33 & this.f || Ua(this);
};
function ao(i) {
  var n = new ho(i);
  try {
    n.c();
  } catch (t) {
    throw n.d(), t;
  }
  return n.d.bind(n);
}
var Ya, Xi, Uc = [], Yc = [];
ao(function() {
  Ya = this.N;
})();
function Jt(i, n) {
  M[i] = n.bind(null, M[i] || function() {
  });
}
function Qn(i) {
  Xi && Xi(), Xi = i && i.S();
}
function Pc(i) {
  var n = this, t = i.data, e = go(t);
  e.value = t;
  var A = BA(function() {
    for (var g = n, a = n.__v; a = a.__; ) if (a.__c) {
      a.__c.__$f |= 5922 + 14 * 82 + -1 * 7066;
      break;
    }
    var s = Zg(function() {
      var B = e.value.value;
      return B === 0 ? 0 : B === !0 ? "" : B || "";
    }), C = Zg(function() {
      return !Array.isArray(s.value) && !Ms(s.value);
    }), I = ao(function() {
      if (this.N = Tc, C.value) {
        var B = s.value;
        g.__v && g.__v.__e && g.__v.__e.nodeType === 3 && (g.__v.__e.data = B);
      }
    }), E = n.__$u.d;
    return n.__$u.d = function() {
      I(), E.call(this);
    }, [C, s];
  }, []), o = A[8187 + -2729 * 3], r = A[-287 * -2 + 8266 + -8839];
  return o.value ? r.peek() : r.value;
}
Pc.displayName = "_st";
var zr = {};
zr.configurable = !0, zr.value = void 0;
var Xr = {};
Xr.configurable = !0, Xr.value = Pc;
var $r = {};
$r.configurable = !0, $r.get = function() {
  var i = {};
  return i.data = this, i;
};
var Aa = {};
Aa.configurable = !0, Aa.value = 1;
var Bo = {};
Bo.constructor = zr, Bo.type = Xr, Bo.props = $r, Bo.__b = Aa, Object.defineProperties(xA.prototype, Bo), Jt("__b", function(i, n) {
  if (typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof xA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), Jt("__r", function(i, n) {
  Qn();
  var t, e = n.__c;
  e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var o;
    return ao(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 1 * -3493 + 6877 + 3383 * -1, e.setState({});
    }, o;
  }())), Qn(t), i(n);
}), Jt("__e", function(i, n, t, e) {
  Qn(), i(n, t, e);
}), Jt("diffed", function(i, n) {
  Qn();
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
        var s = o[a], C = e[a];
        s === void 0 ? (s = UE(t, a, C, A), o[a] = s) : s.o(C, A);
      }
    }
  }
  i(n);
});
function UE(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = Mc(t);
  return { o: function(r, g) {
    o.value = r, e = g;
  }, d: ao(function() {
    this.N = Tc;
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
Jt("unmount", function(i, n) {
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
}), Jt("__h", function(i, n, t, e) {
  (e < 9067 + -5 * 1637 + -879 || 4159 + 83 * -50 === e) && (n.__$f |= -3800 + 2 * 1901), i(n, t, e);
}), $A.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u, e = t && t.s !== void 0;
  for (var A in n) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var o = 2 & this.__$f;
    if (!(e || o || 4 & this.__$f) || 9 * -401 + 3890 + -280 & this.__$f) return !0;
  } else if (!(e || -277 + -1 * -281 & this.__$f) || -41 * -129 + 2 * 203 + 5692 * -1 & this.__$f) return !0;
  for (var r in i) if (r !== "__source" && i[r] !== this.props[r]) return !0;
  for (var g in this.props) if (!(g in i)) return !0;
  return !1;
};
function go(i) {
  return BA(function() {
    return Mc(i);
  }, []);
}
var YE = typeof requestAnimationFrame > "u" ? setTimeout : function(i) {
  var n = function() {
    clearTimeout(t), cancelAnimationFrame(e), i();
  }, t = setTimeout(n, 100), e = requestAnimationFrame(n);
}, PE = function(i) {
  queueMicrotask(function() {
    queueMicrotask(i);
  });
};
function TE() {
  Fc(function() {
    for (var i; i = Uc.shift(); ) Ya.call(i);
  });
}
function HE() {
  -3131 * -1 + 6801 * 1 + -9931 === Uc.push(this) && (M.requestAnimationFrame || YE)(TE);
}
function KE() {
  Fc(function() {
    for (var i; i = Yc.shift(); ) Ya.call(i);
  });
}
function Tc() {
  -2525 + 842 * 3 === Yc.push(this) && (M.requestAnimationFrame || PE)(KE);
}
function jE(i) {
  var n = GA(i);
  n.current = i, Y(function() {
    return ao(function() {
      return this.N = HE, n.current();
    });
  }, []);
}
const qE = (i) => {
  const n = go(!1);
  return Ja(i, (e) => {
    e.detail && (n.value = e.detail.animationEnd);
  }), n;
};
function _E({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = FE(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, NE(t.CAMERA_PROPS_CHANGED, A), Y(() => () => {
    ve.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function VE(i) {
  Y(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function ZE({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, instructionCodeMap: r, onCapture: g, onDetection: a, sessionToken: s }) {
  VE(() => {
    t && t.destroy();
  });
  const { appState: C, firstRunningDone: I, handleAppStateChange: E, isCameraReady: B, setFirstRunningDone: d } = ue(), { sunfish: x } = An(), { analytics: l } = rc(), { transactionCounting: Q } = Ma(), { cameraResolution: f, cameraService: p, onCameraResolutionChange: S, videoRef: k } = ac(), G = {};
  G.cameraResolution = f, G.cameraService = p, G.customEvent = A;
  const { shouldCameraMirror: w } = _E(G), H = go(void 0), P = (p == null ? void 0 : p["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && x && B, fA = xe(async (Z) => {
    E(zA.WAITING), g(Z);
  }, [g, E]), V = xe((Z, en) => {
    S(Z.resolution), H.value = Z, a(Z, en);
  }, [a, H, S]);
  Y(() => {
    !I && P && (d(!0), E(zA.RUNNING));
  }, [P, E, I, d]), Y(() => {
    if (C !== zA.RUNNING || !P) return;
    if (!p || !t) throw new D("Cannot start detection");
    t.imageProcessor.reset();
    const Z = {};
    return Z.analytics = l, Z.transactionCounting = Q, Z.cameraService = p, Z.fallbackInstruction = o, Z.instructionCodeMap = r, Z.checkToInstructionCodeMap = n, Z.sessionToken = s, Z.createProtoMessage = e, Z.onCaptureCallback = fA, Z.onDetectionCallback = V, t.createDetection(i, Z), t.runDetectionLoop(), () => {
      t.stopDetectionLoop();
    };
  }, [C, P, t, p, fA, V, s, H, l, e, r, n, o, i, Q]);
  const QA = {};
  return QA.videoRef = k, QA.cameraResolution = f, QA.detectionDetails = H, QA.shouldCameraMirror = w, QA;
}
function zE(i) {
  const n = GA([]);
  return Y(() => {
    n.current.forEach((t) => t()), n.current = [];
  }, [i]), (t) => {
    n.current.push(t);
  };
}
const XE = () => typeof document < "u" && document.hasFocus();
function $E(i = {}) {
  const n = GA(i), t = GA(XE()), [e, A] = iA(t.current);
  Y(() => {
    n.current = i;
  }), Y(() => {
    function r(C) {
      t.current = C, A(C);
    }
    function g() {
      Promise.resolve().then(() => {
        var C, I, E, B;
        !t.current && ((I = (C = n.current).onFocus) == null || I.call(C), (B = (E = n.current).onChange) == null || B.call(E, !0)), r(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var C, I, E, B;
        t.current && ((I = (C = n.current).onBlur) == null || I.call(C), (B = (E = n.current).onChange) == null || B.call(E, !1)), r(!1);
      });
    }
    function s() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", g), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", s), () => {
      window.removeEventListener("focus", g), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", s);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function Ad(i = {}) {
  const { appState: n, firstRunningDone: t } = ue();
  $E({ onBlur: () => {
    var e;
    n === zA.WAITING || n === kr.DONE || !t || (e = i.onBlur) == null || e.call(i);
  }, onFocus: () => {
    var e;
    n === zA.WAITING || n === kr.DONE || !t || (e = i.onFocus) == null || e.call(i);
  } });
}
function ed(i) {
  const { redfin: n, freemiumOverlayState: t } = ue(), e = n === Un.Higher, A = t !== mo.HIDDEN, o = A && !e && i, r = t === mo.VISIBLE, g = {};
  return g.showFreemiumOverlay = o, g.showFullFreemiumOverlay = r, g;
}
function td(i, n) {
  if (!i) return n;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  n.hashedDetectedImages && (e == null || e.push(...n.hashedDetectedImages)), n.detectionRecord && (t == null || t.push(...n.detectionRecord));
  const A = { ...i };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function od() {
  const i = go(null);
  function n({ cameraProperties: e }) {
    i.value = td(i.value, e);
  }
  const t = {};
  return t.cameraProperties = i, t.mergeCameraProperties = n, t;
}
const Pa = Ze(void 0);
Pa.displayName = "CommonThresholdsContext";
function nd() {
  const i = le(Pa);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function id() {
  return va() ? Mg.MOBILE : Mg.DESKTOP;
}
function rd({
  children: i,
  configurationThresholds: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = iA(id()), r = BA(() => ({ thresholds: t(n, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [n, A, o, e, t]);
  return /* @__PURE__ */ b(Pa.Provider, { value: r, children: i });
}
const Hc = {};
Hc.min = 0.4;
const ea = {};
ea.min = 0.16, ea.max = 0.2;
const Kc = {};
Kc.min = 0.25;
const ta = {};
ta.min = 0.2, ta.max = 0.85;
const jc = {};
jc.min = 0.05;
const qc = {};
qc.max = 30;
const _c = {};
_c.min = 0;
const oa = {};
oa.min = -1, oa.max = 1;
const na = {};
na.confidence = _c, na.status = oa;
const Vc = {};
Vc.min = 0;
const Zc = {};
Zc.confidence = Vc;
const zc = {};
zc.min = 0;
const Xc = {};
Xc.confidence = zc;
const ce = {};
ce.confidence = Hc, ce.size = ea, ce.sharpness = Kc, ce.brightness = ta, ce.edgeDistanceToImageShorterSideRatio = jc, ce.devicePitchAngle = qc, ce.mouth = na, ce.leftEye = Zc, ce.rightEye = Xc;
const $c = {};
$c.min = 0.4;
const ia = {};
ia.min = 0.16, ia.max = 0.2;
const A0 = {};
A0.min = 0.25;
const ra = {};
ra.min = 0.2, ra.max = 0.85;
const e0 = {};
e0.min = 0.05;
const t0 = {};
t0.max = 30;
const o0 = {};
o0.min = 0;
const aa = {};
aa.min = -1, aa.max = 1;
const ga = {};
ga.confidence = o0, ga.status = aa;
const n0 = {};
n0.min = 0;
const i0 = {};
i0.confidence = n0;
const r0 = {};
r0.min = 0;
const a0 = {};
a0.confidence = r0;
const Ce = {};
Ce.confidence = $c, Ce.size = ia, Ce.sharpness = A0, Ce.brightness = ra, Ce.edgeDistanceToImageShorterSideRatio = e0, Ce.devicePitchAngle = t0, Ce.mouth = ga, Ce.leftEye = i0, Ce.rightEye = a0;
const sa = {};
sa.MOBILE = ce, sa.DESKTOP = Ce;
const ad = sa;
function gd(i, n) {
  var t, e, A, o, r, g, a, s, C, I, E, B, d, x, l, Q;
  return {
    confidence: { min: ((t = i == null ? void 0 : i.confidence) == null ? void 0 : t.min) ?? n.confidence.min },
    size: {
      min: ((e = i == null ? void 0 : i.size) == null ? void 0 : e.min) ?? n.size.min,
      max: ((A = i == null ? void 0 : i.size) == null ? void 0 : A.max) ?? n.size.max
    },
    sharpness: { min: ((o = i == null ? void 0 : i.sharpness) == null ? void 0 : o.min) ?? n.sharpness.min },
    brightness: {
      min: ((r = i == null ? void 0 : i.brightness) == null ? void 0 : r.min) ?? n.brightness.min,
      max: ((g = i == null ? void 0 : i.brightness) == null ? void 0 : g.max) ?? n.brightness.max
    },
    edgeDistanceToImageShorterSideRatio: {
      min: ((a = i == null ? void 0 : i.edgeDistanceToImageShorterSideRatio) == null ? void 0 : a.min) ?? n.edgeDistanceToImageShorterSideRatio.min
    },
    devicePitchAngle: { max: ((s = i == null ? void 0 : i.devicePitchAngle) == null ? void 0 : s.max) ?? n.devicePitchAngle.max },
    mouth: {
      confidence: { min: ((I = (C = i == null ? void 0 : i.mouth) == null ? void 0 : C.confidence) == null ? void 0 : I.min) ?? n.mouth.confidence.min },
      status: {
        min: ((E = i == null ? void 0 : i.mouth) == null ? void 0 : E.status.min) ?? n.mouth.status.min,
        max: ((B = i == null ? void 0 : i.mouth) == null ? void 0 : B.status.max) ?? n.mouth.status.max
      }
    },
    leftEye: {
      confidence: { min: ((x = (d = i == null ? void 0 : i.leftEye) == null ? void 0 : d.confidence) == null ? void 0 : x.min) ?? n.leftEye.confidence.min }
    },
    rightEye: {
      confidence: {
        min: ((Q = (l = i == null ? void 0 : i.rightEye) == null ? void 0 : l.confidence) == null ? void 0 : Q.min) ?? n.rightEye.confidence.min
      }
    }
  };
}
function sd({
  children: i,
  configurationThresholds: n
}) {
  return /* @__PURE__ */ b(
    rd,
    {
      configurationThresholds: n,
      thresholdsPresetMapper: gd,
      thresholdsPresets: ad,
      children: i
    }
  );
}
function Id({ onFaceTrackingLost: i, skipOutsideOfCandidateSelection: n }) {
  const t = GA(i);
  Y(() => {
    t.current = i;
  }, [i]);
  const e = xe((o) => {
    if (!o.detail) return;
    const { data: r } = o.detail;
    n && !r.isInCandidateSelection || r.invalidValidators.includes(aA.FACE_NOT_PRESENT) && t.current();
  }, [n]), A = {};
  return A.handleFaceDetection = e, A;
}
function cd(i) {
  const { handleFaceDetection: n } = Id(i);
  Ja(ie.FACE_DETECTION, n);
}
const Cd = ({ children: i }) => {
  const n = GA(null);
  return ME(n, ie.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ b(JB, { ref: n, children: i });
}, Ia = {};
Ia.min = 0.135, Ia.max = 0.21;
const g0 = {};
g0.size = Ia;
const s0 = {};
s0.min = 1;
const I0 = {};
I0.confidence = s0;
const ca = {};
ca.min = 0.3, ca.max = 1;
const Ca = {};
Ca.max = 1, Ca.min = -1;
const c0 = {};
c0.min = 0.15;
const C0 = {};
C0.min = -1;
const B0 = {};
B0.min = -1;
const Wt = {};
Wt.size = ca, Wt.brightness = Ca, Wt.confidence = c0, Wt.sharpness = C0, Wt.edgeDistanceToImageShorterSideRatio = B0;
const Bd = { [vA.DISTANT]: g0, [vA.MIDDLE]: I0, [vA.CLOSEUP]: Wt }, Qd = Bd, zg = -823 * 2 + -2023 * 3 + -1 * -7715 + 0.255;
function Q0() {
  return nd();
}
function Ed(i, n) {
  return { ...i, leftEye: { ...i.leftEye, center: wt(i.leftEye.center, n) }, rightEye: { ...i.rightEye, center: wt(i.rightEye.center, n) }, mouth: { ...i.mouth, center: wt(i.mouth.center, n) }, topLeft: wt(i.topLeft, n), bottomRight: wt(i.bottomRight, n), faceCenter: wt(i.faceCenter, n) };
}
function E0(i, n) {
  const { faceCenter: t, faceSize: e } = i, A = eQ(e, n), o = {};
  o.x = t.x, o.y = t.y - A;
  const r = {};
  r.x = t.x + A, r.y = t.y;
  const g = {};
  g.x = t.x, g.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const s = {};
  return s.top = o, s.right = r, s.bottom = g, s.left = a, _I(s);
}
const dd = (i, n) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = n, o = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  tc(i, o, "rgba(255, 0, 0, 0.3)", !0), Do(i, e, "lime");
}, xd = (i, n, t) => {
  const e = E0(n, t);
  Object.values(e).map((A) => Do(i, A, "orange"));
};
function ld({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = Q0(), { redfin: o } = ue(), r = GA(null);
  if (Y(() => {
    if (!r.current)
      return;
    r.current.width = i.width, r.current.height = i.height, KB(r.current);
    const Q = Tn(i), f = oc(
      i,
      e.edgeDistanceToImageShorterSideRatio.min,
      Q
    ), p = $B(i);
    n.value && (dd(r.current, n.value.processedImage.detection), xd(
      r.current,
      n.value.processedImage.detection,
      i
    ), ji(r.current, Q, "lime"), ji(r.current, f, "yellow"), ji(r.current, p, "blue"), Do(r.current, n.value.processedImage.detection.leftEye.center, "cyan"), Do(r.current, n.value.processedImage.detection.rightEye.center, "cyan"), Do(r.current, n.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, n.value]), !n.value)
    return null;
  const {
    avgFps: g,
    detectionTime: a,
    fps: s,
    processedImage: { detection: C, instructionCode: I, invalidValidators: E, isEscalated: B },
    resolution: d,
    samVersion: x
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
    FPS: s,
    "Avg FPS": g,
    Tier: o,
    Instruction: I,
    Resolution: d,
    "Escalated instruction": B,
    "Component version": "8.0.0",
    "Thresholds preset": A
  };
  return x && (l["SAM version"] = x), E.length > 0 && (l["Invalid validators"] = E), /* @__PURE__ */ b(
    JQ,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function ud({ isRounded: i, isSquare: n, ...t }) {
  return i ? /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ b("rect", { fill: "#000", ...t, rx: n ? "0" : "50%" });
}
function fd(i, n) {
  const [t, e] = iA(!1), A = () => e((g) => !g), o = "" + t;
  oo(() => {
    function g() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, I.observe(i.current, E), I;
    }
    function a() {
      var B;
      if (!((B = i.current) != null && B["parentElement"])) return;
      const I = new MutationObserver((d) => {
        d.find((l) => {
          for (const Q of l.removedNodes)
            if (Q !== (n == null ? void 0 : n.current) && Q === i.current)
              return !0;
        }) && A(), d.forEach((l) => {
          l.addedNodes.forEach((Q) => {
            var f;
            Q !== (n == null ? void 0 : n.current) && ((f = Q.parentElement) == null || f.removeChild(Q));
          });
        });
      }), E = {};
      return E.childList = !0, I.observe(i.current.parentElement, E), I;
    }
    const s = g(), C = a();
    return () => {
      C == null || C.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const hd = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function pd({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = GA(null), { key: o } = fd(A, t);
  return /* @__PURE__ */ b("div", { ref: A, style: hd, children: /* @__PURE__ */ b("svg", { viewBox: `0 0 ${e} ${n}`, children: [
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
function yd({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = AQ(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, g = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ b(
    pd,
    {
      cutOut: i || /* @__PURE__ */ b(ud, { height: A, width: o, x: r, y: g }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function md({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { appState: A } = ue(), { showFreemiumOverlay: o, showFullFreemiumOverlay: r } = ed(i), g = GA(null), a = i && A === zA.RUNNING;
  return /* @__PURE__ */ b(Ae, { children: [
    o && i && /* @__PURE__ */ b(
      yd,
      {
        fullOverlay: r,
        ignoreElement: g,
        resolution: i
      }
    ),
    n,
    a && /* @__PURE__ */ b("div", { ref: g, children: /* @__PURE__ */ b(
      ld,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const Dd = (i, n) => {
  if (EQ()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    ve.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xg = {}, $i = {}, Ar, $g;
function wd() {
  if ($g) return Ar;
  $g = 1, Ar = i;
  function i(n, t) {
    for (var e = new Array(arguments.length - 1), A = 0, o = 2, r = !0; o < arguments.length; )
      e[A++] = arguments[o++];
    return new Promise(function(g, a) {
      e[A] = function(s) {
        if (r)
          if (r = !1, s)
            a(s);
          else {
            for (var C = new Array(arguments.length - 1), I = 0; I < C.length; )
              C[I++] = arguments[I];
            g.apply(null, C);
          }
      };
      try {
        n.apply(t || null, e);
      } catch (s) {
        r && (r = !1, a(s));
      }
    });
  }
  return Ar;
}
var As = {}, es;
function bd() {
  return es || (es = 1, function(i) {
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
      for (var s = null, C = [], I = 0, E = 0, B; g < a; ) {
        var d = r[g++];
        switch (E) {
          case 0:
            C[I++] = t[d >> 2], B = (d & 3) << 4, E = 1;
            break;
          case 1:
            C[I++] = t[B | d >> 4], B = (d & 15) << 2, E = 2;
            break;
          case 2:
            C[I++] = t[B | d >> 6], C[I++] = t[d & 63], E = 0;
            break;
        }
        I > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, C)), I = 0);
      }
      return E && (C[I++] = t[B], C[I++] = 61, E === 1 && (C[I++] = 61)), s ? (I && s.push(String.fromCharCode.apply(String, C.slice(0, I))), s.join("")) : String.fromCharCode.apply(String, C.slice(0, I));
    };
    var o = "invalid encoding";
    n.decode = function(r, g, a) {
      for (var s = a, C = 0, I, E = 0; E < r.length; ) {
        var B = r.charCodeAt(E++);
        if (B === 61 && C > 1)
          break;
        if ((B = e[B]) === void 0)
          throw Error(o);
        switch (C) {
          case 0:
            I = B, C = 1;
            break;
          case 1:
            g[a++] = I << 2 | (B & 48) >> 4, I = B, C = 2;
            break;
          case 2:
            g[a++] = (I & 15) << 4 | (B & 60) >> 2, I = B, C = 3;
            break;
          case 3:
            g[a++] = (I & 3) << 6 | B, C = 0;
            break;
        }
      }
      if (C === 1)
        throw Error(o);
      return a - s;
    }, n.test = function(r) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
    };
  }(As)), As;
}
var er, ts;
function kd() {
  if (ts) return er;
  ts = 1, er = i;
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
  }, er;
}
var tr, os;
function Sd() {
  if (os) return tr;
  os = 1, tr = i(i);
  function i(o) {
    return typeof Float32Array < "u" ? function() {
      var r = new Float32Array([-0]), g = new Uint8Array(r.buffer), a = g[3] === 128;
      function s(B, d, x) {
        r[0] = B, d[x] = g[0], d[x + 1] = g[1], d[x + 2] = g[2], d[x + 3] = g[3];
      }
      function C(B, d, x) {
        r[0] = B, d[x] = g[3], d[x + 1] = g[2], d[x + 2] = g[1], d[x + 3] = g[0];
      }
      o.writeFloatLE = a ? s : C, o.writeFloatBE = a ? C : s;
      function I(B, d) {
        return g[0] = B[d], g[1] = B[d + 1], g[2] = B[d + 2], g[3] = B[d + 3], r[0];
      }
      function E(B, d) {
        return g[3] = B[d], g[2] = B[d + 1], g[1] = B[d + 2], g[0] = B[d + 3], r[0];
      }
      o.readFloatLE = a ? I : E, o.readFloatBE = a ? E : I;
    }() : function() {
      function r(a, s, C, I) {
        var E = s < 0 ? 1 : 0;
        if (E && (s = -s), s === 0)
          a(1 / s > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), C, I);
        else if (isNaN(s))
          a(2143289344, C, I);
        else if (s > 34028234663852886e22)
          a((E << 31 | 2139095040) >>> 0, C, I);
        else if (s < 11754943508222875e-54)
          a((E << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, C, I);
        else {
          var B = Math.floor(Math.log(s) / Math.LN2), d = Math.round(s * Math.pow(2, -B) * 8388608) & 8388607;
          a((E << 31 | B + 127 << 23 | d) >>> 0, C, I);
        }
      }
      o.writeFloatLE = r.bind(null, n), o.writeFloatBE = r.bind(null, t);
      function g(a, s, C) {
        var I = a(s, C), E = (I >> 31) * 2 + 1, B = I >>> 23 & 255, d = I & 8388607;
        return B === 255 ? d ? NaN : E * (1 / 0) : B === 0 ? E * 1401298464324817e-60 * d : E * Math.pow(2, B - 150) * (d + 8388608);
      }
      o.readFloatLE = g.bind(null, e), o.readFloatBE = g.bind(null, A);
    }(), typeof Float64Array < "u" ? function() {
      var r = new Float64Array([-0]), g = new Uint8Array(r.buffer), a = g[7] === 128;
      function s(B, d, x) {
        r[0] = B, d[x] = g[0], d[x + 1] = g[1], d[x + 2] = g[2], d[x + 3] = g[3], d[x + 4] = g[4], d[x + 5] = g[5], d[x + 6] = g[6], d[x + 7] = g[7];
      }
      function C(B, d, x) {
        r[0] = B, d[x] = g[7], d[x + 1] = g[6], d[x + 2] = g[5], d[x + 3] = g[4], d[x + 4] = g[3], d[x + 5] = g[2], d[x + 6] = g[1], d[x + 7] = g[0];
      }
      o.writeDoubleLE = a ? s : C, o.writeDoubleBE = a ? C : s;
      function I(B, d) {
        return g[0] = B[d], g[1] = B[d + 1], g[2] = B[d + 2], g[3] = B[d + 3], g[4] = B[d + 4], g[5] = B[d + 5], g[6] = B[d + 6], g[7] = B[d + 7], r[0];
      }
      function E(B, d) {
        return g[7] = B[d], g[6] = B[d + 1], g[5] = B[d + 2], g[4] = B[d + 3], g[3] = B[d + 4], g[2] = B[d + 5], g[1] = B[d + 6], g[0] = B[d + 7], r[0];
      }
      o.readDoubleLE = a ? I : E, o.readDoubleBE = a ? E : I;
    }() : function() {
      function r(a, s, C, I, E, B) {
        var d = I < 0 ? 1 : 0;
        if (d && (I = -I), I === 0)
          a(0, E, B + s), a(1 / I > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), E, B + C);
        else if (isNaN(I))
          a(0, E, B + s), a(2146959360, E, B + C);
        else if (I > 17976931348623157e292)
          a(0, E, B + s), a((d << 31 | 2146435072) >>> 0, E, B + C);
        else {
          var x;
          if (I < 22250738585072014e-324)
            x = I / 5e-324, a(x >>> 0, E, B + s), a((d << 31 | x / 4294967296) >>> 0, E, B + C);
          else {
            var l = Math.floor(Math.log(I) / Math.LN2);
            l === 1024 && (l = 1023), x = I * Math.pow(2, -l), a(x * 4503599627370496 >>> 0, E, B + s), a((d << 31 | l + 1023 << 20 | x * 1048576 & 1048575) >>> 0, E, B + C);
          }
        }
      }
      o.writeDoubleLE = r.bind(null, n, 0, 4), o.writeDoubleBE = r.bind(null, t, 4, 0);
      function g(a, s, C, I, E) {
        var B = a(I, E + s), d = a(I, E + C), x = (d >> 31) * 2 + 1, l = d >>> 20 & 2047, Q = 4294967296 * (d & 1048575) + B;
        return l === 2047 ? Q ? NaN : x * (1 / 0) : l === 0 ? x * 5e-324 * Q : x * Math.pow(2, l - 1075) * (Q + 4503599627370496);
      }
      o.readDoubleLE = g.bind(null, e, 0, 4), o.readDoubleBE = g.bind(null, A, 4, 0);
    }(), o;
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
  return tr;
}
function ns(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var or, is;
function Gd() {
  if (is) return or;
  is = 1, or = i;
  function i(n) {
    try {
      if (typeof ns != "function")
        return null;
      var t = ns(n);
      return t && (t.length || Object.keys(t).length) ? t : null;
    } catch {
      return null;
    }
  }
  return or;
}
var rs = {}, as;
function Nd() {
  return as || (as = 1, function(i) {
    var n = i;
    n.length = function(t) {
      for (var e = 0, A = 0, o = 0; o < t.length; ++o)
        A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
      return e;
    }, n.read = function(t, e, A) {
      var o = A - e;
      if (o < 1)
        return "";
      for (var r = null, g = [], a = 0, s; e < A; )
        s = t[e++], s < 128 ? g[a++] = s : s > 191 && s < 224 ? g[a++] = (s & 31) << 6 | t[e++] & 63 : s > 239 && s < 365 ? (s = ((s & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, g[a++] = 55296 + (s >> 10), g[a++] = 56320 + (s & 1023)) : g[a++] = (s & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, g)), a = 0);
      return r ? (a && r.push(String.fromCharCode.apply(String, g.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, g.slice(0, a));
    }, n.write = function(t, e, A) {
      for (var o = A, r, g, a = 0; a < t.length; ++a)
        r = t.charCodeAt(a), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((g = t.charCodeAt(a + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (g & 1023), ++a, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
      return A - o;
    };
  }(rs)), rs;
}
var nr, gs;
function Rd() {
  if (gs) return nr;
  gs = 1, nr = i;
  function i(n, t, e) {
    var A = e || 8192, o = A >>> 1, r = null, g = A;
    return function(a) {
      if (a < 1 || a > o)
        return n(a);
      g + a > A && (r = n(A), g = 0);
      var s = t.call(r, g, g += a);
      return g & 7 && (g = (g | 7) + 1), s;
    };
  }
  return nr;
}
var ir, ss;
function Fd() {
  if (ss) return ir;
  ss = 1, ir = n;
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
  }, ir;
}
var Is;
function yt() {
  return Is || (Is = 1, function(i) {
    var n = i;
    n.asPromise = wd(), n.base64 = bd(), n.EventEmitter = kd(), n.float = Sd(), n.inquire = Gd(), n.utf8 = Nd(), n.pool = Rd(), n.LongBits = Fd(), n.isNode = !!(typeof Rt < "u" && Rt && Rt.process && Rt.process.versions && Rt.process.versions.node), n.global = n.isNode && Rt || typeof window < "u" && window || typeof self < "u" && self || $i, n.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }($i)), $i;
}
var rr, cs;
function d0() {
  if (cs) return rr;
  cs = 1, rr = a;
  var i = yt(), n, t = i.LongBits, e = i.base64, A = i.utf8;
  function o(l, Q, f) {
    this.fn = l, this.len = Q, this.next = void 0, this.val = f;
  }
  function r() {
  }
  function g(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function a() {
    this.len = 0, this.head = new o(r, 0, 0), this.tail = this.head, this.states = null;
  }
  var s = function() {
    return i.Buffer ? function() {
      return (a.create = function() {
        return new n();
      })();
    } : function() {
      return new a();
    };
  };
  a.create = s(), a.alloc = function(l) {
    return new i.Array(l);
  }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(l, Q, f) {
    return this.tail = this.tail.next = new o(l, Q, f), this.len += Q, this;
  };
  function C(l, Q, f) {
    Q[f] = l & 255;
  }
  function I(l, Q, f) {
    for (; l > 127; )
      Q[f++] = l & 127 | 128, l >>>= 7;
    Q[f] = l;
  }
  function E(l, Q) {
    this.len = l, this.next = void 0, this.val = Q;
  }
  E.prototype = Object.create(o.prototype), E.prototype.fn = I, a.prototype.uint32 = function(l) {
    return this.len += (this.tail = this.tail.next = new E(
      (l = l >>> 0) < 128 ? 1 : l < 16384 ? 2 : l < 2097152 ? 3 : l < 268435456 ? 4 : 5,
      l
    )).len, this;
  }, a.prototype.int32 = function(l) {
    return l < 0 ? this._push(B, 10, t.fromNumber(l)) : this.uint32(l);
  }, a.prototype.sint32 = function(l) {
    return this.uint32((l << 1 ^ l >> 31) >>> 0);
  };
  function B(l, Q, f) {
    for (; l.hi; )
      Q[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, l.hi >>>= 7;
    for (; l.lo > 127; )
      Q[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    Q[f++] = l.lo;
  }
  a.prototype.uint64 = function(l) {
    var Q = t.from(l);
    return this._push(B, Q.length(), Q);
  }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(l) {
    var Q = t.from(l).zzEncode();
    return this._push(B, Q.length(), Q);
  }, a.prototype.bool = function(l) {
    return this._push(C, 1, l ? 1 : 0);
  };
  function d(l, Q, f) {
    Q[f] = l & 255, Q[f + 1] = l >>> 8 & 255, Q[f + 2] = l >>> 16 & 255, Q[f + 3] = l >>> 24;
  }
  a.prototype.fixed32 = function(l) {
    return this._push(d, 4, l >>> 0);
  }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(l) {
    var Q = t.from(l);
    return this._push(d, 4, Q.lo)._push(d, 4, Q.hi);
  }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(l) {
    return this._push(i.float.writeFloatLE, 4, l);
  }, a.prototype.double = function(l) {
    return this._push(i.float.writeDoubleLE, 8, l);
  };
  var x = i.Array.prototype.set ? function(l, Q, f) {
    Q.set(l, f);
  } : function(l, Q, f) {
    for (var p = 0; p < l.length; ++p)
      Q[f + p] = l[p];
  };
  return a.prototype.bytes = function(l) {
    var Q = l.length >>> 0;
    if (!Q)
      return this._push(C, 1, 0);
    if (i.isString(l)) {
      var f = a.alloc(Q = e.length(l));
      e.decode(l, f, 0), l = f;
    }
    return this.uint32(Q)._push(x, Q, l);
  }, a.prototype.string = function(l) {
    var Q = A.length(l);
    return Q ? this.uint32(Q)._push(A.write, Q, l) : this._push(C, 1, 0);
  }, a.prototype.fork = function() {
    return this.states = new g(this), this.head = this.tail = new o(r, 0, 0), this.len = 0, this;
  }, a.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(r, 0, 0), this.len = 0), this;
  }, a.prototype.ldelim = function() {
    var l = this.head, Q = this.tail, f = this.len;
    return this.reset().uint32(f), f && (this.tail.next = l.next, this.tail = Q, this.len += f), this;
  }, a.prototype.finish = function() {
    for (var l = this.head.next, Q = this.constructor.alloc(this.len), f = 0; l; )
      l.fn(l.val, Q, f), f += l.len, l = l.next;
    return Q;
  }, a._configure = function(l) {
    n = l, a.create = s(), n._configure();
  }, rr;
}
var ar, Cs;
function vd() {
  if (Cs) return ar;
  Cs = 1, ar = t;
  var i = d0();
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
  }, t._configure(), ar;
}
var gr, Bs;
function x0() {
  if (Bs) return gr;
  Bs = 1, gr = o;
  var i = yt(), n, t = i.LongBits, e = i.utf8;
  function A(I, E) {
    return RangeError("index out of range: " + I.pos + " + " + (E || 1) + " > " + I.len);
  }
  function o(I) {
    this.buf = I, this.pos = 0, this.len = I.length;
  }
  var r = typeof Uint8Array < "u" ? function(I) {
    if (I instanceof Uint8Array || Array.isArray(I))
      return new o(I);
    throw Error("illegal buffer");
  } : function(I) {
    if (Array.isArray(I))
      return new o(I);
    throw Error("illegal buffer");
  }, g = function() {
    return i.Buffer ? function(I) {
      return (o.create = function(E) {
        return i.Buffer.isBuffer(E) ? new n(E) : r(E);
      })(I);
    } : r;
  };
  o.create = g(), o.prototype._slice = i.Array.prototype.subarray || /* istanbul ignore next */
  i.Array.prototype.slice, o.prototype.uint32 = /* @__PURE__ */ function() {
    var I = 4294967295;
    return function() {
      if (I = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (I = (I | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (I = (I | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return I;
      if ((this.pos += 5) > this.len)
        throw this.pos = this.len, A(this, 10);
      return I;
    };
  }(), o.prototype.int32 = function() {
    return this.uint32() | 0;
  }, o.prototype.sint32 = function() {
    var I = this.uint32();
    return I >>> 1 ^ -(I & 1) | 0;
  };
  function a() {
    var I = new t(0, 0), E = 0;
    if (this.len - this.pos > 4) {
      for (; E < 4; ++E)
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      if (I.lo = (I.lo | (this.buf[this.pos] & 127) << 28) >>> 0, I.hi = (I.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
        return I;
      E = 0;
    } else {
      for (; E < 3; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.lo = (I.lo | (this.buf[this.pos] & 127) << E * 7) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
      return I.lo = (I.lo | (this.buf[this.pos++] & 127) << E * 7) >>> 0, I;
    }
    if (this.len - this.pos > 4) {
      for (; E < 5; ++E)
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
    } else
      for (; E < 5; ++E) {
        if (this.pos >= this.len)
          throw A(this);
        if (I.hi = (I.hi | (this.buf[this.pos] & 127) << E * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
          return I;
      }
    throw Error("invalid varint encoding");
  }
  o.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function s(I, E) {
    return (I[E - 4] | I[E - 3] << 8 | I[E - 2] << 16 | I[E - 1] << 24) >>> 0;
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
    var I = i.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, I;
  }, o.prototype.double = function() {
    if (this.pos + 8 > this.len)
      throw A(this, 4);
    var I = i.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, I;
  }, o.prototype.bytes = function() {
    var I = this.uint32(), E = this.pos, B = this.pos + I;
    if (B > this.len)
      throw A(this, I);
    if (this.pos += I, Array.isArray(this.buf))
      return this.buf.slice(E, B);
    if (E === B) {
      var d = i.Buffer;
      return d ? d.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, E, B);
  }, o.prototype.string = function() {
    var I = this.bytes();
    return e.read(I, 0, I.length);
  }, o.prototype.skip = function(I) {
    if (typeof I == "number") {
      if (this.pos + I > this.len)
        throw A(this, I);
      this.pos += I;
    } else
      do
        if (this.pos >= this.len)
          throw A(this);
      while (this.buf[this.pos++] & 128);
    return this;
  }, o.prototype.skipType = function(I) {
    switch (I) {
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
        for (; (I = this.uint32() & 7) !== 4; )
          this.skipType(I);
        break;
      case 5:
        this.skip(4);
        break;
      /* istanbul ignore next */
      default:
        throw Error("invalid wire type " + I + " at offset " + this.pos);
    }
    return this;
  }, o._configure = function(I) {
    n = I, o.create = g(), n._configure();
    var E = i.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    i.merge(o.prototype, {
      int64: function() {
        return a.call(this)[E](!1);
      },
      uint64: function() {
        return a.call(this)[E](!0);
      },
      sint64: function() {
        return a.call(this).zzDecode()[E](!1);
      },
      fixed64: function() {
        return C.call(this)[E](!0);
      },
      sfixed64: function() {
        return C.call(this)[E](!1);
      }
    });
  }, gr;
}
var sr, Qs;
function Md() {
  if (Qs) return sr;
  Qs = 1, sr = t;
  var i = x0();
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
  }, t._configure(), sr;
}
var Es = {}, Ir, ds;
function Wd() {
  if (ds) return Ir;
  ds = 1, Ir = n;
  var i = yt();
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
        function(s, C) {
          if (s)
            return a.emit("error", s, e), g(s);
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
            } catch (I) {
              return a.emit("error", I, e), g(I);
            }
          return a.emit("data", C, e), g(null, C);
        }
      );
    } catch (s) {
      a.emit("error", s, e), setTimeout(function() {
        g(s);
      }, 0);
      return;
    }
  }, n.prototype.end = function(t) {
    return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
  }, Ir;
}
var xs;
function Ld() {
  return xs || (xs = 1, function(i) {
    var n = i;
    n.Service = Wd();
  }(Es)), Es;
}
var ls, us;
function Od() {
  return us || (us = 1, ls = {}), ls;
}
var fs;
function Jd() {
  return fs || (fs = 1, function(i) {
    var n = i;
    n.build = "minimal", n.Writer = d0(), n.BufferWriter = vd(), n.Reader = x0(), n.BufferReader = Md(), n.util = yt(), n.rpc = Ld(), n.roots = Od(), n.configure = t;
    function t() {
      n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
    }
    t();
  }(Xg)), Xg;
}
var hs, ps;
function Ud() {
  return ps || (ps = 1, hs = Jd()), hs;
}
var N = Ud();
const h = N.Reader, R = N.Writer, u = N.util, c = N.roots.default || (N.roots.default = {}), Ve = c.dot = (() => {
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let e = new c.dot.Content();
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Metadata();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.AndroidMetadata(), s, C;
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
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
              a.dynamicCameraFrameProperties === u.emptyObject && (a.dynamicCameraFrameProperties = {});
              let E = A.uint32() + A.pos;
              for (s = "", C = null; A.pos < E; ) {
                let B = A.uint32();
                switch (B >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = c.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(B & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[s] = C;
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
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
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
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let g = c.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (g)
              return "dynamicCameraFrameProperties." + g;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
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
        return null;
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
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = c.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        if (A.yuv420ImageCrop != null) {
          if (typeof A.yuv420ImageCrop != "object")
            throw TypeError(".dot.v4.AndroidMetadata.yuv420ImageCrop: object expected");
          o.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.fromObject(A.yuv420ImageCrop);
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
            r.digests[a] = o.bytes === String ? u.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.Yuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Yuv420Image)
          return e;
        let A = new c.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = u.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = u.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.Yuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.IosMetadata(), s, C;
        for (; A.pos < g; ) {
          let I = A.uint32();
          if (I === r)
            break;
          switch (I >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === u.emptyObject && (a.architectureInfo = {});
              let E = A.uint32() + A.pos;
              for (s = "", C = !1; A.pos < E; ) {
                let B = A.uint32();
                switch (B >>> 3) {
                  case 1:
                    s = A.string();
                    break;
                  case 2:
                    C = A.bool();
                    break;
                  default:
                    A.skipType(B & 7);
                    break;
                }
              }
              a.architectureInfo[s] = C;
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
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (I & 7) === 2) {
                let E = A.uint32() + A.pos;
                for (; A.pos < E; )
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
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
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
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
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
            if (!u.isInteger(A.isoValues[o]))
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
        return null;
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
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
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
            r.digests[a] = o.bytes === String ? u.base64.encode(A.digests[a], 0, A.digests[a].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
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
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = c.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = c.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = c.dot.v4.IosYuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), A.yuv420ImageCrop != null && A.hasOwnProperty("yuv420ImageCrop") && (r.yuv420ImageCrop = c.dot.v4.IosYuv420ImageCrop.toObject(A.yuv420ImageCrop, o), o.oneofs && (r._yuv420ImageCrop = "yuv420ImageCrop")), r;
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
        return A || (A = R.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && c.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = c.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        return A || (A = R.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && c.dot.ImageSize.encode(e.size, A.uint32(
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = c.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uvPlane != null && e.hasOwnProperty("uvPlane") && !(e.uvPlane && typeof e.uvPlane.length == "number" || u.isString(e.uvPlane)) ? "uvPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.IosYuv420Image)
          return e;
        let A = new c.dot.v4.IosYuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.IosYuv420Image.size: object expected");
          A.size = c.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uvPlane != null && (typeof e.uvPlane == "string" ? u.base64.decode(e.uvPlane, A.uvPlane = u.newBuffer(u.base64.length(e.uvPlane)), 0) : e.uvPlane.length >= 0 && (A.uvPlane = e.uvPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uvPlane = "" : (o.uvPlane = [], A.bytes !== Array && (o.uvPlane = u.newBuffer(o.uvPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = c.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uvPlane != null && e.hasOwnProperty("uvPlane") && (o.uvPlane = A.bytes === String ? u.base64.encode(e.uvPlane, 0, e.uvPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uvPlane) : e.uvPlane), o;
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.v4.IosYuv420Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.PointInt.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        if (o || (o = R.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
            if (!u.isString(A.hashedDetectedImages[o]))
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new c.dot.v4.HashedDetectedImageWithTimestamp();
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MediaTrackSettings();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
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
        return o || (o = R.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.topLeftCorner != null && Object.hasOwnProperty.call(e, "topLeftCorner") && c.dot.v4.Point.encode(e.topLeftCorner, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
            c.dot.v4.BrowserVersion.encode(A.browserVersions[r], o.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o, r) {
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.PlatformDetails();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
            let r = c.dot.v4.BrowserVersion.verify(A.browserVersions[o]);
            if (r)
              return "browserVersions." + r;
          }
        }
        return null;
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
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.browserVersions = []), o.defaults && (r.userAgent = ""), A.userAgent != null && A.hasOwnProperty("userAgent") && (r.userAgent = A.userAgent), A.platform != null && A.hasOwnProperty("platform") && (r.platform = A.platform, o.oneofs && (r._platform = "platform")), A.platformVersion != null && A.hasOwnProperty("platformVersion") && (r.platformVersion = A.platformVersion, o.oneofs && (r._platformVersion = "platformVersion")), A.architecture != null && A.hasOwnProperty("architecture") && (r.architecture = A.architecture, o.oneofs && (r._architecture = "architecture")), A.model != null && A.hasOwnProperty("model") && (r.model = A.model, o.oneofs && (r._model = "model")), A.browserVersions && A.browserVersions.length) {
          r.browserVersions = [];
          for (let g = 0; g < A.browserVersions.length; ++g)
            r.browserVersions[g] = c.dot.v4.BrowserVersion.toObject(A.browserVersions[g], o);
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.name != null && e.hasOwnProperty("name") && !u.isString(e.name) ? "name: string expected" : e.version != null && e.hasOwnProperty("version") && !u.isString(e.version) ? "version: string expected" : null;
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.FaceContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.DocumentContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return o || (o = R.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && c.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Blob();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return A || (A = R.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && c.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return A || (A = R.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && c.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.LdsMasterFile();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = c.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return o || (o = R.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && c.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.Lds1ElementaryFile();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        return A.bytes != null && (typeof A.bytes == "string" ? u.base64.decode(A.bytes, o.bytes = u.newBuffer(u.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? c.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : c.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
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
        return A || (A = R.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && c.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && c.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? u.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = u.newBuffer(u.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : c.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : c.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.MultiRangeLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        ).int32(e.challengeItem), e.image != null && Object.hasOwnProperty.call(e, "image") && c.dot.ImageWithTimestamp.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
            c.dot.v4.FaceDetection.encode(e.detections[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
        let r = A === void 0 ? e.len : e.pos + A, g = new c.dot.v4.MultiRangeLivenessMetadata();
        for (; e.pos < r; ) {
          let a = e.uint32();
          if (a === o)
            break;
          switch (a >>> 3) {
            case 1: {
              g.detections && g.detections.length || (g.detections = []), g.detections.push(c.dot.v4.FaceDetection.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        ).uint64(e.timestampMillis), e.position != null && Object.hasOwnProperty.call(e, "position") && c.dot.v4.FaceDetectionPosition.encode(e.position, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A, o) {
        e instanceof h || (e = h.create(e));
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)))
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
        if (e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), e.position != null) {
          if (typeof e.position != "object")
            throw TypeError(".dot.v4.FaceDetection.position: object expected");
          A.position = c.dot.v4.FaceDetectionPosition.fromObject(e.position);
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
        return e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), e.position != null && e.hasOwnProperty("position") && (o.position = c.dot.v4.FaceDetectionPosition.toObject(e.position, A)), o;
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
        return A || (A = R.create()), e.center != null && Object.hasOwnProperty.call(e, "center") && c.dot.PointDouble.encode(e.center, A.uint32(
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
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        return o || (o = R.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        return o || (o = R.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, o.uint32(
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
        A instanceof h || (A = h.create(A));
        let g = o === void 0 ? A.len : A.pos + o, a = new c.dot.v4.PalmContent();
        for (; A.pos < g; ) {
          let s = A.uint32();
          if (s === r)
            break;
          switch (s >>> 3) {
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
              A.skipType(s & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.Image();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let e = new c.dot.Image();
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
      return e || (e = R.create()), t.image != null && Object.hasOwnProperty.call(t, "image") && c.dot.Image.encode(t.image, e.uint32(
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.image != null && t.hasOwnProperty("image")) {
        let e = c.dot.Image.verify(t.image);
        if (e)
          return "image." + e;
      }
      return t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.ImageWithTimestamp)
        return t;
      let e = new c.dot.ImageWithTimestamp();
      if (t.image != null) {
        if (typeof t.image != "object")
          throw TypeError(".dot.ImageWithTimestamp.image: object expected");
        e.image = c.dot.Image.fromObject(t.image);
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
      return t.image != null && t.hasOwnProperty("image") && (A.image = c.dot.Image.toObject(t.image, e)), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let e = new c.dot.DigestWithTimestamp();
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
      e instanceof h || (e = h.create(e));
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
      if (e.bytes != null && (typeof e.bytes == "string" ? u.base64.decode(e.bytes, A.bytes = u.newBuffer(u.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), e.containerMp4 != null) {
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
      return e.bytes != null && e.hasOwnProperty("bytes") && (o.bytes = A.bytes === String ? u.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes, A.oneofs && (o._bytes = "bytes")), e.containerMp4 != null && e.hasOwnProperty("containerMp4") && (o.containerMp4 = c.dot.VideoContainer.toObject(e.containerMp4, A), A.oneofs && (o.content = "containerMp4")), e.streamH264 != null && e.hasOwnProperty("streamH264") && (o.streamH264 = c.dot.VideoStream.toObject(e.streamH264, A), A.oneofs && (o.content = "streamH264")), o;
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
      let o = e === void 0 ? t.len : t.pos + e, r = new c.dot.VideoContainer();
      for (; t.pos < o; ) {
        let g = t.uint32();
        if (g === A)
          break;
        switch (g >>> 3) {
          case 1: {
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoContainer)
        return t;
      let e = new c.dot.VideoContainer();
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof c.dot.VideoStream)
        return t;
      let e = new c.dot.VideoStream();
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.x != null && t.hasOwnProperty("x") && !u.isInteger(t.x) ? "x: integer expected" : t.y != null && t.hasOwnProperty("y") && !u.isInteger(t.y) ? "y: integer expected" : null;
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
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, N.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.PointDouble";
    }, n;
  }(), i;
})();
(function(i, n) {
  function t(g, a, s, C, I) {
    return nA(g - -216, s);
  }
  function e(g, a, s, C, I) {
    return nA(I - -559, a);
  }
  function A(g, a, s, C, I) {
    return nA(I - -812, C);
  }
  function o(g, a, s, C, I) {
    return nA(I - -592, g);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(o("h1Of", -474, -382, -452, -445)) / 1 + parseInt(t(-52, -13, "cypW", -63, 30)) / 2 * (parseInt(t(-24, -39, "]*]T", 71, -33)) / 3) + parseInt(A(-388, -535, -492, "%MP2", -446)) / 4 + parseInt(e(-408, "w1rd", -480, -310, -399)) / 5 * (parseInt(o("1J@M", -384, -345, -512, -407)) / 6) + -parseInt(A(-697, -557, -634, "%MP2", -654)) / 7 * (-parseInt(t(48, 103, "iZp2", 87, 23)) / 8) + -parseInt(A(-505, -376, -390, "*1l5", -458)) / 9 + parseInt(o("E[Ws", -304, -286, -384, -372)) / 10 * (-parseInt(e(-148, "XKxv", -188, -365, -250)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ii, 659 * 547 + 11708 * 67 + -36 * 10542);
function nA(i, n) {
  const t = Ii();
  return nA = function(e, A) {
    e = e - (39 * 57 + -2 * 3218 + -3 * -1451);
    let o = t[e];
    if (nA.ntrJjC === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      nA.YXlTNE = C, i = arguments, nA.ntrJjC = !0;
    }
    const g = t[467 + 1 * 5498 + -1 * 5965], a = e + g, s = i[a];
    return s ? o = s : (nA.GaPHiB === void 0 && (nA.GaPHiB = !0), o = nA.YXlTNE(o, A), i[a] = o), o;
  }, nA(i, n);
}
function Yd() {
  const i = o(1039, "%KIh", 1100) + o(959, "u)gX", 966) + s(-493, -531, -517, -493, "SDM@") + s(-418, -529, -512, -580, "&$X2") + t(-323, "w1rd", -201, -103, -205) + t(-224, "%KIh", -292, -382, -337) + r("04)v", 91, 15) + s(-336, -447, -498, -486, "o7mp") + o(1038, "%KIh", 1059) + o(963, "hNmX", 1016) + a(824, "V4FW", 821) + a(604, "cypW", 706) + t(-174, "(lTI", -178, -284, -216) + r("$iJX", -149, -168) + a(918, "rt)q", 859) + t(-408, "kUyM", -281, -271, -328) + a(897, "xZnK", 833) + t(-444, "cypW", -345, -256, -371) + t(-181, "GkmV", -209, -138, -243) + t(-147, "P7%Z", -284, -244, -211) + o(1170, "E[Ws", 1090) + r("u5Md", -143, -74) + s(-397, -514, -596, -407, "1q%*") + o(961, "5iK!", 1e3) + a(739, "(lTI", 722) + o(866, "xfao", 899) + s(-711, -616, -669, -511, "(]uf") + o(1066, "V4FW", 1070) + o(1042, "7k$$", 1004) + o(897, "FyxZ", 946) + s(-580, -579, -601, -672, "rt)q") + t(-446, "OxMF", -398, -354, -399) + t(-253, "iZp2", -293, -350, -300) + r("Xn)n", -10, 44) + r("Xn)n", 145, 43) + s(-610, -590, -700, -505, "7k$$") + a(879, "AQxe", 840) + r("P7%Z", 88, -23) + t(-262, "d0sj", -260, -275, -363) + r("%KIh", 77, 19) + r("E[Ws", -79, -169) + o(1016, "]*]T", 1044) + t(-182, "1q%*", -397, -283, -281) + o(1210, "X5gR", 1098) + o(1013, "cypW", 1002) + o(921, "xfao", 1029) + s(-429, -500, -568, -402, "kUyM") + t(-350, "u5Md", -294, -380, -288) + t(-497, "0U5s", -487, -471, -379) + r("7k$$", 92, 41) + a(750, "(]uf", 728) + a(760, "AQxe", 781) + a(673, "&qBT", 739) + s(-626, -546, -658, -433, "X5gR") + s(-483, -574, -690, -542, "$Z5L") + r("]*]T", 65, 12) + s(-603, -622, -669, -607, "0U5s") + o(1021, "(]uf", 959) + t(-343, "l1el", -324, -377, -342) + r("SDM@", 58, -5) + o(1126, "h1Of", 1072) + r("1q%*", -93, -173) + a(897, "X5gR", 782) + s(-596, -600, -599, -523, "%KIh") + o(881, "1q%*", 924) + o(1016, "XKxv", 1092) + a(775, "%KIh", 834) + o(968, "$iJX", 1034) + a(696, "OxMF", 723) + a(731, "rt)q", 786) + o(1041, "nREk", 928) + s(-671, -593, -622, -527, "M7w6") + o(997, "kUyM", 926) + r("XKxv", -97, 8) + o(898, "Xn)n", 869) + r("SDM@", -173, -159) + t(-261, "hNmX", -460, -456, -350) + o(901, "1q%*", 1012) + r("u)gX", 20, -93) + t(-231, "OxMF", -285, -313, -321) + a(842, "$Z5L", 873) + s(-620, -563, -577, -611, "0U5s") + r("SDM@", -253, -171) + s(-617, -635, -750, -636, "&qBT") + o(969, "Xn)n", 918) + t(-336, "o7mp", -315, -201, -264) + o(1076, "X5gR", 988) + s(-423, -511, -514, -589, "o7mp") + o(1091, "kUyM", 983) + r("d0sj", -100, -138) + o(908, "E[Ws", 871) + o(921, "*$yC", 1022) + r("E[Ws", -107, 6) + o(909, "1J@M", 916) + t(-423, "0U5s", -433, -517, -408) + o(1151, "SDM@", 1049) + s(-624, -541, -458, -479, "0U5s") + r("u)gX", -25, -30) + a(1030, "kUyM", 927) + a(811, "*$yC", 760) + a(783, "SDM@", 837) + r("FvBC", 69, 25) + a(802, "iZp2", 759) + a(589, "OxMF", 696) + s(-366, -411, -526, -346, "cypW") + r("w1rd", -66, -58) + t(-441, "QHFA", -240, -418, -353) + s(-418, -421, -424, -456, "FyxZ") + r("0U5s", -144, -27) + a(785, "SDM@", 816) + o(1031, "d0sj", 1096) + a(884, "E[Ws", 841) + t(-487, "%MP2", -499, -295, -381) + a(753, "]*]T", 868) + o(1182, "^hRZ", 1088) + s(-567, -539, -513, -625, "&qBT") + t(-334, "&qBT", -282, -269, -376) + t(-157, "V4FW", -290, -316, -221) + t(-242, "V4FW", -228, -139, -204) + a(677, "5iK!", 698) + a(703, "u)gX", 769) + o(1041, "Xn)n", 1005) + t(-361, "o7mp", -362, -282, -340) + a(894, "1J@M", 883) + r("u5Md", 163, 47) + s(-414, -431, -319, -473, "FvBC") + o(1010, "04)v", 1021) + t(-139, "AQxe", -110, -293, -228) + s(-599, -491, -403, -418, "w1rd") + a(914, "V4FW", 866) + t(-284, "y4ng", -367, -346, -347) + a(817, "FvBC", 832) + o(826, "04)v", 904) + s(-595, -615, -608, -563, "^hRZ") + s(-377, -493, -378, -487, "%MP2") + a(755, "P7%Z", 751) + o(911, "(]uf", 998) + t(-235, "cypW", -358, -279, -293) + a(611, "l1el", 711) + o(1196, "7k$$", 1082) + s(-624, -525, -443, -465, "FvBC") + t(-222, "u5Md", -328, -210, -310) + t(-189, "(]uf", -294, -254, -230) + r("E[Ws", 16, 36) + a(777, "cypW", 718) + r("cypW", -25, -73) + a(736, "kUyM", 817) + r("hNmX", 67, 5) + o(1025, "u5Md", 930) + o(1053, "%MP2", 951) + a(932, "y4ng", 902) + s(-497, -526, -504, -589, "l1el") + a(684, "FyxZ", 801) + a(790, "xZnK", 856) + t(-483, "8zHX", -326, -395, -409) + o(930, "5iK!", 941) + a(787, "d0sj", 862) + r("AQxe", -39, -87) + r("&$X2", 53, 18) + s(-540, -532, -487, -554, "d0sj") + s(-534, -460, -505, -353, "o7mp") + t(-225, "M7w6", -169, -269, -229) + r("AQxe", -6, -64) + o(1145, "u5Md", 1035) + t(-284, "iZp2", -268, -379, -359) + s(-504, -425, -410, -389, "&qBT") + o(1013, "P7%Z", 950) + t(-386, "(]uf", -364, -310, -338) + r("QHFA", -112, -150) + a(946, "E[Ws", 872) + s(-616, -537, -437, -440, "FyxZ") + t(-265, "M7w6", -298, -426, -345) + o(1081, "(]uf", 1084) + t(-361, "w1rd", -170, -320, -250) + t(-292, "X5gR", -356, -500, -392) + o(1149, "iZp2", 1087) + s(-511, -485, -526, -474, "XKxv") + r("xfao", -120, -102) + t(-257, "hNmX", -292, -358, -295) + r("0U5s", -87, -85) + r("1q%*", 18, 1) + a(734, "FyxZ", 835) + t(-269, "&qBT", -315, -268, -315) + s(-440, -407, -491, -347, "XKxv") + s(-679, -626, -565, -534, "xfao") + o(1122, "%KIh", 1028) + s(-551, -558, -486, -467, "l1el") + s(-557, -603, -649, -645, "iZp2") + a(723, "XKxv", 806) + s(-418, -467, -401, -393, "w1rd") + r("QHFA", -120, -142) + o(962, "X5gR", 1074) + o(974, "y4ng", 898) + o(1090, "h1Of", 1026) + t(-311, "E[Ws", -439, -397, -373) + a(975, "o7mp", 890) + o(761, "u)gX", 878) + t(-361, "E[Ws", -429, -295, -324) + t(-352, "kUyM", -349, -327, -329) + t(-330, "V4FW", -347, -244, -258), n = window[s(-443, -473, -534, -476, "h1Of")](i);
  function t(C, I, E, B, d) {
    return nA(d - -553, I);
  }
  const e = window[r("rt)q", -124, -164)](n), A = TQ(e);
  function o(C, I, E, B, d) {
    return nA(E - 729, I);
  }
  function r(C, I, E, B, d) {
    return nA(E - -321, C);
  }
  const g = {};
  g[a(725, "&$X2", 839)] = jI;
  function a(C, I, E, B, d) {
    return nA(E - 555, I);
  }
  g[a(814, "E[Ws", 823)] = gQ;
  function s(C, I, E, B, d) {
    return nA(I - -781, d);
  }
  return window[r("OxMF", -140, -145) + "o"][s(-689, -583, -671, -658, "E[Ws") + "e"][r("%KIh", -55, -76) + o(1102, "XKxv", 1031)](r("y4ng", -85, -80), A, g, !0, [o(1007, "5iK!", 915) + "pt"]);
}
async function Pd(i) {
  const n = await Yd();
  function t(o, r, g, a, s) {
    return nA(r - -147, a);
  }
  const e = {};
  function A(o, r, g, a, s) {
    return nA(a - 793, r);
  }
  return e[t(185, 184, 131, "%MP2")] = jI, window[t(264, 191, 146, "cypW") + "o"][t(149, 62, 1, "OxMF") + "e"][A(1129, "u5Md", 915, 1032) + "pt"](e, n, i);
}
function Ii() {
  const i = ["AbpdImkvWP4", "W4Shamo1dG", "eZtcPCoDaa", "W6j3f8kogG", "dSoFWQKPWQG", "ECoKWOZcQwq", "mHiZfrC", "WQePa8o4W7O", "W41NWP7cSJu", "W7WYk8onga", "mJjpx8kB", "kSo3W6aMhW", "oCoaWPOhWPO", "W6ZcJqDJsq", "oCozW4xcK8k0", "imktW5ZcMqi", "WQzXW6maW5W", "nW1TkSkS", "W5miz8oSW6fHW4G7emkFW58", "W4iREshcOW", "WRDnpmkjWR8", "W5TuW4PLWQe", "W5TLqqbN", "WQ9hW7WMW6m", "WRpcNL7cOmoc", "xCo2pJnUW4ZdOCoZrctdUCkr", "tfjOxZ1aW6ddRW", "a8o4WRf/ha", "W43cJexdS8kH", "W7KFnatcTW", "WOtdLmkaWR7dLG", "W7tdJdbqyW", "W7b0sH83", "iSooWPCUWQS", "W4tdTCk0W6uT", "W5BdSmkyW67dIq", "gtjUrIa", "cmoDWOqChq", "Amo2gMyd", "iYFcKSoXAa", "ErBdSCkDW4q", "W4vCW4KoWRm", "W6W1mmojaa", "t0pdHCo2WQFdSmo2WQVcQZSbuG", "WPfJpxJcJa", "WPqrqH7cKq", "EmonW51Yla", "WRNdJSo1yYW", "mtq0gGm", "omoYW4dcSSk5", "hNufymoA", "WPCgoCo/W44", "W4XOACk9FG", "WRdcI2jIrCkwiL5G", "W4iuoXRcRG", "s8knWQ3cJwG", "WQGqiutdKa", "WPddVCkBWR7cHa", "WRVdNCo+WPNcHW", "bZvlBCok", "W5ZdQg/cVJa", "WPddISoAvY8", "WRFdV2f2wG", "eJOYmWi", "W4xdSCkTW6RdIa", "W68ubSoVxa", "WP4rWP7cSW8jWRPnW5Pk", "iYzjESkY", "W47cKhNcMd0", "WQW0hCoKW6a", "W5ddT8ooAcW", "xdv0kSkh", "W7VdTSksWQqA", "WQPCmCo7W5C", "nY/cMmoZ", "jZX0g8kl", "W7FcOCk/WPG2", "wemOqmoY", "fmovW7lcImkE", "Eg59nmo9", "W4JdKCoaWP1t", "n8kMWRNcLwG", "WPHrW645W6e", "tZdcP8o3W6y", "W6vsWRazW60", "gSk2dmkFWP8", "c8o4W6SIha", "WOZdQCkQWQpdOa", "W5rQjhNcQa", "WQpcJCoZWOX7", "hXvODmoh", "fvzhAIC", "WQldRN7cLb4", "hCkiW7xcOta", "fdxcHCkrW78", "WPVcJSkFWOtdTG", "WQ7dTCoCe8k5", "ASodWQCgbCocEq", "W6NdJ8kNWRiU", "WRj/W7L/ja", "W6/cNuJdO8kJ", "W6/dMcfm", "frnxoGi", "uCopW5D4gq", "W48okcpcTW", "W43cMxdcLmkf", "kmkkW7NcUJ4", "C8k4W5FcQ8kbW6BdJWi+WOdcPmki", "WPdcRaRdOmoo", "W7HFcHn5", "WOFcG8o8WRCg", "WRtcJGDZW4y", "dCo6W4NdLSkU", "AWi+xSoB", "W67cJCkyWQldNa", "ib3cR8k0W5K", "WQJcNH/dSCkb", "dmk2jSko", "gYvvwCou", "W5BdOWDiqq", "kaPoqum", "lmkBWRJcGNG", "FCoLW5vNjq", "W43cR8kxdmk0", "WQFdGCoRBeS", "W4noW4RdNJW", "fCoUFa09", "WQ02b8ohW6i", "W69WW49YxW", "W6e3WQDKW6a", "FvZcSwtcMq", "W7SZeWFcSq", "tCoiW6ZcQSk7", "W69Ks8kxjW", "WRFcPqCvWQi", "W4zpWRjq", "W7NdRCoIfCk2", "W7ddG8kOW5BdVW", "WRBcOGNdJ8o0", "W5hdJmkMWROn", "WR02W6XwW6O", "lMBcPfe", "WOm0W6iqWOBdK8oEW7ldSrPQqG", "WOK6uSoAgG", "WRPLWPWvjq", "t0ddJ8oZWQldUSkWWQpcSd4sxXS", "nmkcww5U", "W7tdJ8oRcmkN", "xSksEvWL", "acxcUmkUW6G", "W6VdScvXpq", "uWJdKmofW7y", "DG1eBmolWPDu", "ktZcQSkPW5O", "D8o4W78yfq", "W5FdUK3cL8k3", "lHmhodK", "W4rXWQ0oWOm", "pZLKrmoG", "lITKsGy", "W5BcI2nRxG", "WOLGlSknWQq", "W7vWWRziW5K", "mSo9W4tcQCk/", "C8k1WRFcIq", "WR1FW70Uga", "wmkEtu8T", "ASoeWQbSga", "dmobW70FaW", "W7LLW77dKYa", "zHtdSCojWOa", "eSkrW7tcSc4", "kmk7bmk8WPC", "tCozWRdcQCk4", "WP1PWPSKgG", "W4eFcHJcHq", "gKxcMwVcOG", "C8k5W5hcOCkeWONdMqO2WQ7cTG", "WQNcILhcKsW", "W4tcKmoIWP9I", "dHxcKmoCnG", "W4ZdP8ocDmkS", "WPbMW78CwW", "W4BcTSo+WRnT", "pvBcKmoRW6yZhtmh", "A2DBr2reWOtdHmk2sM5xuLO", "WRhcQdRcLCkU", "W4msA8o/W6Cww8keWQVdKSkAFYar", "pWmWcWy", "vcqxiSkJ", "W7ldR2nuFq", "ymoJWRGpnq", "WPNcOhtcTCou", "rLKFpCo3", "W4NdKJzXwq", "W7BcNHFcTCo0", "WOjWWQnmW5W", "W7DzmY8i", "W5rBaGT1", "kmoNW6JdMG7dQMJdKSoZWPOlW6JdMq", "WO43W7SzW54", "W7/dOSk3WPKV", "W4lcLq/cMHa", "fCotW4VcUGG", "kCoTW67cRCk9", "WOtdI8kDW5NdSG", "WO8Ej2bLW5BcISkEk0jjW5q", "W5LlWObSW40", "W7D9exzN", "W4utkmo8jW", "W6VdTrX8Aa", "W6aGqJVdRa", "mSoqWOddVSoM", "WPbAfSkDW7y", "pqDAg8k6", "EIldSWddGmopEr3dISoqW7VdPG", "W43cIH3dSmkO", "WRtdNSkldsG", "hGRcS8o0W7y", "h8kXW5JcHI0", "W6pdLZPtBG", "WRNdIX7dPCoh", "W5uAomo7jq", "W7f2Bmk4lq", "WRCvl0pcQG", "W7xdTCkuW5K", "lmoKW6pdMaFdOw/dUmoOWOOOW6hdMq", "WRufiSkDW5y", "WQ/cRSkFCSkiimoTWRFdGSoi", "W6RcTwVcKWi", "tZZcQ8kxW4G", "fCkzW4dcTG8", "qmoxW6/cJXy+nvC", "pMy7jJu", "WQtdVhddP8k+"];
  return Ii = function() {
    return i;
  }, Ii();
}
(function(i, n) {
  function t(g, a, s, C, I) {
    return PA(C - -683, I);
  }
  function e(g, a, s, C, I) {
    return PA(C - -120, g);
  }
  const A = i();
  function o(g, a, s, C, I) {
    return PA(s - 150, g);
  }
  function r(g, a, s, C, I) {
    return PA(C - 788, s);
  }
  for (; ; )
    try {
      if (parseInt(t(-254, -237, -241, -241, "ohmE")) / 1 * (parseInt(t(-259, -243, -250, -250, "VOLd")) / 2) + parseInt(t(-242, -246, -253, -248, "N@]c")) / 3 * (parseInt(r(1222, 1223, "CKU2", 1232, 1229)) / 4) + -parseInt(o("&&A]", 592, 584, 580, 575)) / 5 * (parseInt(e("e]eu", 310, 330, 320, 317)) / 6) + -parseInt(o("Y)8e", 601, 597, 603, 607)) / 7 + parseInt(o("y&5z", 584, 578, 581, 566)) / 8 * (-parseInt(r(1224, 1228, "$Sze", 1218, 1219)) / 9) + -parseInt(e("N@]c", 313, 329, 318, 313)) / 10 + -parseInt(t(-241, -245, -245, -247, "l0AT")) / 11 * (-parseInt(e("ohmE", 328, 331, 330, 334)) / 12) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ci, 599 * -415 + -366 * -1912 + -94822);
function ci() {
  const i = ["W7NcGNtdP8oZWQnhzW", "CeedeNWcWQdcQmkmyG", "WR7cRCkAxcRcHmoAyryJWQyiyq", "W4Wmhmo9W6SPqcq", "W48sbvNcRmkUWRlcGb04wmkQWRi", "ymo9CmomWONcRI/cIx/cTSkSWQ8N", "WRhcS8kMomkqemkmWOVdMa", "WR5YeI8izd4QW5ldGa", "W7VcGw/dN8ojWPLiyW", "bvNdP8o6omowuq", "usPaEmk9iSodW4ZdUConWPG7W5W", "W5WgWPFcNLFcV8ozW7HAb0qp", "vCocF8knfa9Zsdu", "WOFdMmkbzctcIbm5WQZdSCoWzHO", "h8o6bSkFmSkZWQ3cHxuurmkz", "yCo+DCooWORdNLtcQvhcUCkD", "W5KoWPtcMLNcUSkAW7z4mMOpWRS", "iKNdSCoYjSkeWRaGdse8", "kSotyazQWQxcJdPuWQW", "WQJcOqPzW6dcLH0", "aGxcU8kfySktiqtdT8kOWOpcT8ok", "WPRcOrHWWP8JW6Kp", "WQ7dTLSNWRpdLgGrW6NcQmoGWRZdRq", "WRnPWQNdPmoJ", "WO7cMs3dH8o9fwxdQSk4WRa", "e8o+qq"];
  return ci = function() {
    return i;
  }, ci();
}
function PA(i, n) {
  const t = ci();
  return PA = function(e, A) {
    e = e - (-8691 + -2560 * -3 + 1439);
    let o = t[e];
    if (PA.uJlYUs === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      PA.WTrXsL = C, i = arguments, PA.uJlYUs = !0;
    }
    const g = t[-233 * 2 + 1762 + -1296], a = e + g, s = i[a];
    return s ? o = s : (PA.XZrTfn === void 0 && (PA.XZrTfn = !0), o = PA.WTrXsL(o, A), i[a] = o), o;
  }, PA(i, n);
}
async function Td(i) {
  const { iv: n, key: t, message: e } = await KQ(i), A = await Pd(t);
  function o(g, a, s, C, I) {
    return PA(a - -361, I);
  }
  const r = {};
  return r[o(89, 80, 82, 72, "!zJV")] = A, r.iv = n, r[o(72, 78, 81, 78, "]a$0") + "ge"] = e, r;
}
function CA(i, n) {
  const t = Ci();
  return CA = function(e, A) {
    e = e - (12194 + 461 * -26);
    let o = t[e];
    if (CA.qoEJrZ === void 0) {
      var r = function(I) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", d = "";
        for (let x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (let x = 0, l = B.length; x < l; x++)
          d += "%" + ("00" + B.charCodeAt(x).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const C = function(I, E) {
        let B = [], d = 0, x, l = "";
        I = r(I);
        let Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (let f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      CA.HGqZWt = C, i = arguments, CA.qoEJrZ = !0;
    }
    const g = t[-4770 + 4 * -2447 + 14558], a = e + g, s = i[a];
    return s ? o = s : (CA.eyxWDU === void 0 && (CA.eyxWDU = !0), o = CA.HGqZWt(o, A), i[a] = o), o;
  }, CA(i, n);
}
(function(i, n) {
  function t(a, s, C, I, E) {
    return CA(C - 357, I);
  }
  function e(a, s, C, I, E) {
    return CA(I - 534, E);
  }
  const A = i();
  function o(a, s, C, I, E) {
    return CA(s - -998, I);
  }
  function r(a, s, C, I, E) {
    return CA(s - 42, a);
  }
  function g(a, s, C, I, E) {
    return CA(s - -59, E);
  }
  for (; ; )
    try {
      if (parseInt(e(736, 745, 756, 744, "GGIB")) / 1 * (-parseInt(r("^Q^q", 276, 276, 276, 267)) / 2) + parseInt(r("zmaD", 271, 275, 283, 259)) / 3 * (-parseInt(e(774, 785, 760, 772, "Y&EP")) / 4) + parseInt(t(583, 586, 581, "mvKK", 594)) / 5 + -parseInt(g(159, 173, 183, 181, "JkS^")) / 6 + -parseInt(r("tzHz", 250, 252, 251, 243)) / 7 + -parseInt(o(-763, -778, -778, "RxMS", -781)) / 8 + -parseInt(g(163, 160, 153, 175, "x%CO")) / 9 * (-parseInt(g(185, 171, 183, 181, "r]9)")) / 10) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ci, -1 * -53128 + -1 * -192820 + -137672);
function Ci() {
  const i = ["lqlcUSkEmHLCWQf3W5fzWQG", "W6f0rsNdGKdcJCoghL4", "W4ZcM2C", "tmowdmope2mVW5VcRW", "mSoeWOG", "smoWn8ktWQJcJKRdT8kM", "wCkrerhcHuLbEhq", "W4apWOa/WPm", "bSobW57cV8k4W6qHs1FdI8khW6y", "W4hcPCkAW5jLWQxcNCoRW5RdGdTU", "W4pcQmkzWP4BW7/cM8o3W5y", "W4xcRCkDW4ldGmkRyCo9W6q", "WQpdNYiwW4K", "nujCqJxcKSktWPRcR8kdr2/dPW", "mSoeWQRdTXnkWRvtFK0", "WPXWtCoIhSk1tSkdAmopteC", "WOa5fmoPWQu", "WPBdJtbGqbRdTcnt", "WRJcMt7cIq", "BCo8iNig", "W7i/wmkMW5e", "WPjel8k7W5u2WO3dHhJcTXar", "WQtdHrmwW5C", "yMVdHh7dJIhcPSoMEW", "W6hcK3yAW6VcUCkjWOZcRW", "W5/cN8oFF8kWA8k3W7fYghW", "W7qPx8oPqw1DvLjRAq", "WRGsBmo9hgi2WRLmW5pcPuqe", "WPeQba", "W6f1qIxcSddcSCoKj3pdLIK", "e8kRASk4"];
  return Ci = function() {
    return i;
  }, Ci();
}
async function Hd(i) {
  function n(g, a, s, C, I) {
    return CA(a - -716, C);
  }
  function t(g, a, s, C, I) {
    return CA(g - 1e3, I);
  }
  function e(g, a, s, C, I) {
    return CA(g - -435, a);
  }
  const A = await window[n(-485, -485, -500, "(VRg") + "o"][n(-472, -480, -471, "meIy") + "e"][e(-223, "q4!i") + "t"](n(-509, -503, -505, "quzf"), i);
  function o(g, a, s, C, I) {
    return CA(I - 545, s);
  }
  function r(g, a, s, C, I) {
    return CA(C - -311, s);
  }
  return Array[r(-91, -110, "3^Tm", -100)](new Uint8Array(A))[o(773, 778, "bB[*", 764, 773)]((g) => g[r(-91, -101, "meIy", -96) + n(-481, -490, -492, "GGIB")](1 * -1945 + -2072 + 4033)[e(-226, "]8fR") + o(770, 751, "]8fR", 762, 766)](-23 * 365 + -1 * -6311 + 7 * 298, "0"))[t(1223, 1211, 1224, 1227, "zmaD")]("");
}
function Bi() {
  var i = ["W5mZW5NdTCoGxbH+W6/dV2Kjaa", "W70IgGtcOsLHW4vJWQ/cP1BdGq", "smoYWPXDWPfUW7e", "oSoGWPddVXBdJSkRFs3dOCkUxCkc", "W7JcMSohWOeFvCot", "BgLVWPbRWOFcOgFdLt8", "WOPRW4KWD8oHW4v5bq0AFa", "W4JdSSkFDCk/W6iruMihWOVcOqO", "WQ3cL8k1W7rWoHm", "W4hdU8o8B0/cLNNdNCktj1e", "eSkhmhqsW6a8kSkWla", "oSoofmoHW5KAWPVdHCkJvZK", "W7OOfqNcOIHRWQbyWPhcU23dTSkU", "W50ZW5JdVmoTeMD/W7ZdTeu", "pSoGWP3dUbBdJ8kHiZldGCkrzSk6W5W", "fSo4W6hcNmk2lNpdI2VdIIBcUcW", "W75kASkKWOFcMSkhqq", "W47dUCo6yeNdM1ldV8k4ahldIa", "mbOvbSo2WQbeW77dOrLEW6iH", "f8owAtiaW6GF", "Aw4KW65zWPNcT2u", "wJJcRSogECkzWPuv", "BmkzW5L/W5tcH2RcPZ00WRy", "zGa/CSkoW5hdSZm"];
  return Bi = function() {
    return i;
  }, Bi();
}
function TA(i, n) {
  var t = Bi();
  return TA = function(e, A) {
    e = e - (-7162 + -22 * -18 + 48 * 146);
    var o = t[e];
    if (TA.ljSELA === void 0) {
      var r = function(I) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", d = "", x = 0, l, Q, f = 0; Q = I.charAt(f++); ~Q && (l = x % 4 ? l * 64 + Q : Q, x++ % 4) ? B += String.fromCharCode(255 & l >> (-2 * x & 6)) : 0)
          Q = E.indexOf(Q);
        for (var p = 0, S = B.length; p < S; p++)
          d += "%" + ("00" + B.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, g = function(I, E) {
        var B = [], d = 0, x, l = "";
        I = r(I);
        var Q;
        for (Q = 0; Q < 256; Q++)
          B[Q] = Q;
        for (Q = 0; Q < 256; Q++)
          d = (d + B[Q] + E.charCodeAt(Q % E.length)) % 256, x = B[Q], B[Q] = B[d], B[d] = x;
        Q = 0, d = 0;
        for (var f = 0; f < I.length; f++)
          Q = (Q + 1) % 256, d = (d + B[Q]) % 256, x = B[Q], B[Q] = B[d], B[d] = x, l += String.fromCharCode(I.charCodeAt(f) ^ B[(B[Q] + B[d]) % 256]);
        return l;
      };
      TA.OERRZN = g, i = arguments, TA.ljSELA = !0;
    }
    var a = t[327 * -4 + 2595 + -1287], s = e + a, C = i[s];
    return C ? o = C : (TA.dQWuiP === void 0 && (TA.dQWuiP = !0), o = TA.OERRZN(o, A), i[s] = o), o;
  }, TA(i, n);
}
(function(i, n) {
  function t(s, C, I, E, B) {
    return TA(B - -382, s);
  }
  function e(s, C, I, E, B) {
    return TA(E - -778, C);
  }
  function A(s, C, I, E, B) {
    return TA(E - -270, B);
  }
  function o(s, C, I, E, B) {
    return TA(I - 718, E);
  }
  var r = i();
  function g(s, C, I, E, B) {
    return TA(B - 276, I);
  }
  for (; ; )
    try {
      var a = parseInt(t("MQsD", -132, -126, -142, -130)) / 1 * (parseInt(g(519, 531, "KTYT", 542, 530)) / 2) + -parseInt(o(968, 973, 974, "M!0Q", 985)) / 3 * (parseInt(g(537, 541, "WF]0", 536, 531)) / 4) + -parseInt(o(974, 970, 979, "8RjD", 967)) / 5 * (-parseInt(t("kDwL", -123, -140, -132, -135)) / 6) + parseInt(A(-19, -33, -15, -24, "g[^@")) / 7 * (-parseInt(t("lgjp", -132, -123, -123, -124)) / 8) + parseInt(t("74wf", -126, -139, -145, -133)) / 9 + -parseInt(e(-538, "8RjD", -529, -530, -525)) / 10 * (-parseInt(t("Lzw0", -139, -136, -128, -137)) / 11) + parseInt(A(-11, -10, -9, -10, "74wf")) / 12;
      if (a === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bi, -184295 + -1043659 * -1 + -166569);
async function Ta(i) {
  const { Image: n } = Ve, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw D.fromError(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
function l0(i) {
  const { VideoStream: n } = Ve, t = n.verify(i);
  if (t) throw D.fromError(t);
  return n.create(i);
}
async function u0(i) {
  const { v4: { Metadata: n } } = Ve, t = { ...i };
  t.platform = Ve.Platform.WEB, t.componentVersion = "8.0.0";
  const e = t, A = n.verify(e);
  if (A) throw D.fromError(A);
  return n.create(e);
}
async function f0(i) {
  const { Content: n } = Ve, { iv: t, key: e, message: A } = await Td(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: aQ, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw D.fromError(r);
  const g = n.create(o);
  return n.encode(g).finish();
}
function h0(i) {
  const { Blob: n } = Ve.v4, t = n.verify(i);
  if (t) throw D.fromError(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
async function Kd(i, n) {
  const { architecture: t, fullVersionList: e, model: A, platform: o, platformVersion: r } = n ?? {};
  return { userAgent: i, architecture: t, platform: o, model: A, platformVersion: r, browserVersions: e == null ? void 0 : e.map(({ brand: g, version: a }) => ({ name: g, version: a })) };
}
async function jd({ image: i, metadata: n, video: t }) {
  const { FaceContent: e } = Ve.v4, A = await Ta(i), o = await u0(n), r = t && l0(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.image = A, a.metadata = o, a.video = g;
  const s = a, C = e.verify(s);
  if (C) throw D.fromError(C);
  const I = e.create(s), E = {};
  return E.faceContent = I, h0(E);
}
async function qd(i) {
  const n = await jd(i);
  return f0(n);
}
function _d({ controller: i, onCompleteInternal: n }) {
  const { captureMode: t, onComplete: e, sessionToken: A } = Nc(), o = xe(({ candidateSelectionImages: a, imageData: s, protoMessage: C, webMetadata: I }) => {
    Dd(YI.FACE, a), e(s, C);
    const E = {};
    E.cameraProperties = I, n == null || n(E);
  }, [n, e]), r = xe(({ fps: a, processedImage: s }, C) => {
    const I = {};
    I.code = s.instructionCode, I.isEscalated = s.isEscalated, Rc(ie.INSTRUCTION_CHANGED, I), i && kE(ie.DETECTION_CHANGED, s.detection, i.imageProcessor.validationService.getThresholds().confidence.min);
    const E = {};
    E.detection = s.detection, E.fps = a, E.image = C, E.isInCandidateSelection = s.isInCandidateSelection, E.invalidValidators = s.invalidValidators, SE(ie.FACE_DETECTION, E);
  }, [i]), g = {};
  return g.captureMode = t, g.controller = i, g.createProtoMessage = qd, g.onCapture = o, g.onDetection = r, g.sessionToken = A, g.customEvent = ie, g.fallbackInstruction = aA.FACE_NOT_PRESENT, g.instructionCodeMap = aA, g.checkToInstructionCodeMap = TB, ZE(g);
}
const Vd = 2074 + -173 * 12 + 2002;
class Zd {
  constructor(n) {
    y(this, "duration");
    y(this, "candidateSelectionTime", 333 * -14 + 8452 + -379 * 10);
    y(this, "candidateSelectionImages", []);
    this.duration = n ?? Vd;
  }
  isInCandidateSelection() {
    return this.candidateSelectionTime > -38 * 229 + -2263 * -1 + -137 * -47;
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
    this.candidateSelectionTime = 6331 + -331 * 23 + -1 * -1282, this.candidateSelectionImages = [];
  }
}
const zd = async () => WebAssembly.validate(new Uint8Array([2969 * 2 + 3505 + -1 * 9443, 1 * 2114 + 5 * 191 + 2972 * -1, 116 * 49 + -705 * 9 + 776, 109, 8263 * -1 + -1521 + 515 * 19, -8913 + -387 * -25 + -127 * 6, 31 * 11 + -1341 + -1e3 * -1, 4034 + -2 * 2017, 2 * 4201 + -8569 + 2 * 84, 5016 + -1 * 3828 + -1183, -3859 + -3582 * 1 + -7442 * -1, 9248 + 3 * -2313 + -1 * 2213, -1163 * -1 + 26 * -241 + 5103, 1, -6620 + 6743 * 1, 3158 + 3 * 1938 + -8969, -6 * 857 + 6400 + -1256, 2377 + -3 * 1756 + -1 * -2892, -2785 * 1 + -100 * 49 + 1537 * 5, -1 * 7671 + -3 * 1059 + -5429 * -2, -2076 + 1 * 3981 + -5 * 379, -6431 + 9761 * -1 + 16193, -1 * 2241 + 7953 + -5704, -7 * 975 + 9217 + -4 * 598, 8825 + -12 * 730, 4 * 1531 + 1 * 1513 + -7637 * 1, -1 * 8584 + 2620 + 6217, -855 * -8 + -3497 * -1 + -2 * 5161, -1 * 4166 + -2035 + 6454, 7526 + 2 * -2558 + -2312 * 1, -9525 * -1 + -5339 + -4175 * 1]));
function Xd() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(8717 + -2828 * 2 + 21 * -145);
}
function $d() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = Xd();
  return sessionStorage.setItem("dot-user-id", n), n;
}
function Ax(i, n) {
  return n ? n === "user" ? "Front Camera" : "Back Camera" : i;
}
function ex(i) {
  return i > 23 * 2447 + -93601 * 1 + 97320 ? ">1m" : "" + i;
}
function tx(i) {
  return i > 9340 + -1 * -9682 + 194 * -98 ? ">10" : "" + i;
}
const rt = (i) => i ? i <= 2121 + 653 * -5 + -5 * -229 ? Math.round(i * (-5296 + -2658 * -2)) / 20 : Math.round(i / (4691 * 1 + 7044 + -11685)) * (1409 + 2693 * -1 + 1334) : 383 * 23 + 1 * 5718 + 14527 * -1;
function ox(i) {
  return i ? Math.round(i / (-1 * 4171 + -9840 + 16511)) * (-19 * -447 + 5994 + -11987 * 1) : 0;
}
const nx = (i) => i ? Math.round(i / (431 * -11 + 13 * -738 + -14345 * -1)) * (3 * 2903 + -1 * -9789 + 9244 * -2) : 1229 * -2 + 8 * 226 + 1 * 650, ix = (i) => Math.round(i * (1781 + -1 * 547 + -1232)) / (337 * -2 + -9193 + 9869);
async function rx() {
  return await zd() ? vg.SIMD : vg.NO_SIMD;
}
var fi;
class p0 {
  constructor(n, t, e, A, o, r, g, a, s, C, I, E) {
    y(this, "isRunning", !0);
    W(this, fi, Date.now());
    y(this, "fpsOfAllImages", new Fa(-6731 + -99 * 7 + 2 * 3727));
    this.cameraService = n, this.imageProcessor = t, this.createProtoMessage = e, this.onCaptureCallback = A, this.onDetectionCallback = o, this.checkToInstructionCodeMap = r, this.fallbackInstruction = g, this.samVersion = a, this.instructionEscalation = s, this.sessionToken = C, this.analytics = I, this.transactionCounting = E;
  }
  async run() {
    for (; this.isRunning; )
      await this.iterate();
    return this;
  }
  stop() {
    this.isRunning = !1;
  }
  async trackCaptureProcess(n, t) {
    var g;
    const e = Date.now(), A = Go(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - m(this, fi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await rx() };
    wo() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !ft() }), (g = this.analytics) == null || g.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: Fe(Go(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const { metadata: A, ...o } = await this.prepareOnCaptureData(t, e);
    if (!this.isRunning) return;
    this.stop();
    const r = { ...o };
    r.webMetadata = A.web, r.candidateSelectionImages = n, this.onCaptureCallback(r);
  }
  async prepareOnCaptureData(n, t) {
    var d;
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = await $I(n), r = await this.prepareDetectionMetadata(n, t), g = (d = this.cameraService.videoRecorder) == null ? void 0 : d.getRecording(), a = {};
    a.image = o, a.metadata = r, a.video = g;
    const s = await this.createProtoMessage(a), C = {};
    C.detection = t, C.imageResolution = A;
    const I = {};
    I.image = o, I.data = C;
    const E = I, B = {};
    return B.imageData = E, B.metadata = r, B.protoMessage = s, B;
  }
  async prepareDetectionMetadata(n, t) {
    const e = await this.cameraService.getCameraProperties(), A = pQ(), o = await yQ(), r = { ...e, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImageWithPosition: await this.getCroppedImageWithPosition(n, t), platformDetails: await Kd(A, o) }, g = {};
    return g.sessionToken = this.sessionToken, g.web = r, g;
  }
  async getCroppedImageWithPosition(n, t) {
    const e = {};
    e.width = n.width, e.height = n.height;
    const A = e, o = ec(n), r = await this.imageProcessor.getOptimalRegionForCompressionDetection(o, A, t), g = await xQ(n, r), a = {};
    a.x = r.shiftX, a.y = r.shiftY;
    const s = a, C = await Ta(g), I = {};
    return I.image = C, I.topLeftCorner = s, I;
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
    await Wr(Math.max(Lg.max - n, Lg.min));
  }
}
fi = new WeakMap();
class ax extends p0 {
  constructor(t, e, ...A) {
    super(...A);
    y(this, "lastImage", null);
    y(this, "bestImage", null);
    this.candidateSelection = t, this.instructionCodeMap = e;
  }
  async iterate() {
    if (this.candidateSelection.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.candidateSelection.isInCandidateSelection() ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const A = {};
    A.takenPhoto = t, A.imageProcessorResult = e;
    const o = this.getDetectionDetails(A);
    this.onDetection(o, t.image);
    const r = {};
    r.instructionCode = o.processedImage.instructionCode, r.isValid = e.isValid, r.image = t.image, r.detection = e.detection, this.lastImage = r, await this.sleep(o.detectionTime);
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
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelection.newCandidate(r);
  }
  tryInitCandidatePhase(t, e) {
    var g;
    if (!(((g = this.lastImage) == null ? void 0 : g.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelection.newCandidate(this.lastImage), this.candidateSelection.newCandidate(r), this.candidateSelection.candidateSelectionBegun();
  }
  async onCandidateSelectionDone() {
    var A;
    const { detection: t, image: e } = this.bestImage || {};
    if ((A = this.transactionCounting) == null || A.trackTransaction(), e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelection.getCandidateSelectionImages() });
    else throw new D("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), o = Fe((-32 * 118 + 4568 + 208) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const g = r, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), s = {};
    s.isNewDetectionValid = t.isValid, s.newInvalidInstruction = a[0];
    const C = this.getInstructionCode(s), I = this.collectAndEscalate(C);
    return { processedImage: { detection: t.detection, instructionCode: C, isEscalated: I, invalidValidators: a, isInCandidateSelection: this.candidateSelection.isInCandidateSelection() }, detectionTime: A, fps: o, avgFps: Fe(Go(this.fpsOfAllImages)), resolution: g };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.candidateSelection.isInCandidateSelection() ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class y0 {
  constructor() {
    y(this, "cameraService");
    y(this, "imageProcessor");
    y(this, "instructionEscalation");
    y(this, "createProtoMessage");
    y(this, "onCaptureCallback");
    y(this, "onDetectionCallback");
    y(this, "checkToInstructionCodeMap");
    y(this, "fallbackInstruction");
    y(this, "samVersion");
    y(this, "sessionToken");
    y(this, "analytics");
    y(this, "transactionCounting");
  }
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
    return this.cameraService = void 0, this.imageProcessor = void 0, this.instructionEscalation = void 0, this.createProtoMessage = void 0, this.onCaptureCallback = void 0, this.onDetectionCallback = void 0, this.checkToInstructionCodeMap = void 0, this.fallbackInstruction = void 0, this.samVersion = void 0, this.sessionToken = void 0, this.analytics = void 0, this.transactionCounting = void 0, this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new D("CameraService is required");
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.createProtoMessage) throw new D("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new D("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new D("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new D("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new D("FallbackInstruction is required");
    if (!this.samVersion) throw new D("SamVersion is required");
  }
}
class gx extends y0 {
  constructor() {
    super(...arguments);
    y(this, "instructionCodeMap");
    y(this, "candidateSelection");
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
    return this.validateDependencies(), new ax(this.candidateSelection, this.instructionCodeMap, this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
var Ke, Bt;
class sx extends p0 {
  constructor(...t) {
    super(...t);
    W(this, Ke);
    W(this, Bt);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Hi).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    v(this, Bt, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && v(this, Ke, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Fg.REQUEST_CAPTURE, m(this, Bt));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t), A = this.getDetectionDetails(t, e);
    if (this.onDetection(A, t.image), this.isCaptureDone(e)) {
      await this.onCaptureDone(t.image, e.detection);
      return;
    }
    await this.sleep(A.detectionTime);
  }
  isCaptureDone(t) {
    return m(this, Ke) ? m(this, Ke) === Hi.FIRST_FRAME ? !0 : m(this, Ke) === Hi.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? D.fromCameraError(e) : D.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    var o;
    (o = this.transactionCounting) == null || o.trackTransaction(), this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), v(this, Ke, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), o = Fe((1071 + 1 * -71) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const g = r, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), s = this.getInstructionCode(a[1 * -401 + -5815 + 6216]), C = this.collectAndEscalate(s), I = {};
    return I.detection = e.detection, I.instructionCode = s, I.invalidValidators = a, I.isInCandidateSelection = !1, I.isEscalated = C, { processedImage: I, detectionTime: A, fps: o, avgFps: Fe(Go(this.fpsOfAllImages)), resolution: g };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), m(this, Bt) && document.removeEventListener(Fg.REQUEST_CAPTURE, m(this, Bt));
  }
}
Ke = new WeakMap(), Bt = new WeakMap();
class Ix extends y0 {
  build() {
    return this.validateDependencies(), new sx(this.cameraService, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics, this.transactionCounting);
  }
}
class cx {
  create(n, t) {
    const { analytics: e, cameraService: A, candidateSelection: o, checkToInstructionCodeMap: r, createProtoMessage: g, fallbackInstruction: a, imageProcessor: s, instructionCodeMap: C, instructionEscalation: I, onCaptureCallback: E, onDetectionCallback: B, samVersion: d, sessionToken: x, transactionCounting: l } = t;
    switch (n) {
      case Nr.AUTO_CAPTURE:
        return new gx().setCandidateSelection(o).setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setInstructionCodeMap(C).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(B).setSamVersion(d).setInstructionEscalation(I).setSessionToken(x).setAnalytics(e).setTransactionCounting(l).build();
      case Nr.WAIT_FOR_REQUEST:
        return new Ix().setCheckToInstructionCodeMap(r).setFallbackInstruction(a).setCameraService(A).setImageProcessor(s).setCreateProtoMessage(g).setOnCaptureCallback(E).setOnDetectionCallback(B).setSamVersion(d).setInstructionEscalation(I).setSessionToken(x).setAnalytics(e).setTransactionCounting(l).build();
      default:
        throw new D("Invalid detection type: " + n);
    }
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const m0 = Symbol("Comlink.proxy"), Cx = Symbol("Comlink.endpoint"), Bx = Symbol("Comlink.releaseProxy"), cr = Symbol("Comlink.finalizer"), vn = Symbol("Comlink.thrown"), D0 = (i) => typeof i == "object" && i !== null || typeof i == "function", Qx = {
  canHandle: (i) => D0(i) && i[m0],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return b0(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), S0(i);
  }
}, Ex = {
  canHandle: (i) => D0(i) && vn in i,
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
}, w0 = /* @__PURE__ */ new Map([
  ["proxy", Qx],
  ["throw", Ex]
]);
function dx(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function b0(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!dx(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: g } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(st);
    let s;
    try {
      const C = g.slice(0, -1).reduce((E, B) => E[B], i), I = g.reduce((E, B) => E[B], i);
      switch (r) {
        case "GET":
          s = I;
          break;
        case "SET":
          C[g.slice(-1)[0]] = st(A.data.value), s = !0;
          break;
        case "APPLY":
          s = I.apply(C, a);
          break;
        case "CONSTRUCT":
          {
            const E = new I(...a);
            s = px(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: B } = new MessageChannel();
            b0(i, B), s = hx(E, [E]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      s = { value: C, [vn]: 0 };
    }
    Promise.resolve(s).catch((C) => ({ value: C, [vn]: 0 })).then((C) => {
      const [I, E] = di(C);
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E), r === "RELEASE" && (n.removeEventListener("message", e), k0(n), cr in i && typeof i[cr] == "function" && i[cr]());
    }).catch((C) => {
      const [I, E] = di({
        value: new TypeError("Unserializable return value"),
        [vn]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, I), { id: o }), E);
    });
  }), n.start && n.start();
}
function xx(i) {
  return i.constructor.name === "MessagePort";
}
function k0(i) {
  xx(i) && i.close();
}
function S0(i, n) {
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
  }), Ba(i, t, [], n);
}
function En(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function G0(i) {
  return Lt(i, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    k0(i);
  });
}
const Qi = /* @__PURE__ */ new WeakMap(), Ei = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = (Qi.get(i) || 0) - 1;
  Qi.set(i, n), n === 0 && G0(i);
});
function lx(i, n) {
  const t = (Qi.get(n) || 0) + 1;
  Qi.set(n, t), Ei && Ei.register(i, n, i);
}
function ux(i) {
  Ei && Ei.unregister(i);
}
function Ba(i, n, t = [], e = function() {
}) {
  let A = !1;
  const o = new Proxy(e, {
    get(r, g) {
      if (En(A), g === Bx)
        return () => {
          ux(o), G0(i), n.clear(), A = !0;
        };
      if (g === "then") {
        if (t.length === 0)
          return { then: () => o };
        const a = Lt(i, n, {
          type: "GET",
          path: t.map((s) => s.toString())
        }).then(st);
        return a.then.bind(a);
      }
      return Ba(i, n, [...t, g]);
    },
    set(r, g, a) {
      En(A);
      const [s, C] = di(a);
      return Lt(i, n, {
        type: "SET",
        path: [...t, g].map((I) => I.toString()),
        value: s
      }, C).then(st);
    },
    apply(r, g, a) {
      En(A);
      const s = t[t.length - 1];
      if (s === Cx)
        return Lt(i, n, {
          type: "ENDPOINT"
        }).then(st);
      if (s === "bind")
        return Ba(i, n, t.slice(0, -1));
      const [C, I] = ys(a);
      return Lt(i, n, {
        type: "APPLY",
        path: t.map((E) => E.toString()),
        argumentList: C
      }, I).then(st);
    },
    construct(r, g) {
      En(A);
      const [a, s] = ys(g);
      return Lt(i, n, {
        type: "CONSTRUCT",
        path: t.map((C) => C.toString()),
        argumentList: a
      }, s).then(st);
    }
  });
  return lx(o, i), o;
}
function fx(i) {
  return Array.prototype.concat.apply([], i);
}
function ys(i) {
  const n = i.map(di);
  return [n.map((t) => t[0]), fx(n.map((t) => t[1]))];
}
const N0 = /* @__PURE__ */ new WeakMap();
function hx(i, n) {
  return N0.set(i, n), i;
}
function px(i) {
  return Object.assign(i, { [m0]: !0 });
}
function di(i) {
  for (const [n, t] of w0)
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
    N0.get(i) || []
  ];
}
function st(i) {
  switch (i.type) {
    case "HANDLER":
      return w0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Lt(i, n, t, e) {
  return new Promise((A) => {
    const o = yx();
    n.set(o, A), i.start && i.start(), i.postMessage(Object.assign({ id: o }, t), e);
  });
}
function yx() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
class mx {
  constructor(n, t, e, A, o, r, g) {
    y(this, "isDetectorInitialized", !1);
    y(this, "samVersion", null);
    y(this, "detection");
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.candidateSelection = A, this.validationService = o, this.detectionFactory = r, this.instructionEscalation = g;
  }
  async init() {
    this.verifyEnvironment(), await this.initDetector(this.assetsDirectoryPath);
  }
  verifyEnvironment() {
    ft() && this.handleEnvironmentNotSupported();
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new D("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  handleEnvironmentNotSupported() {
    Gi.warn(`
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
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: g, instructionCodeMap: a, onCaptureCallback: s, onDetectionCallback: C, sessionToken: I, transactionCounting: E } = t;
    this.detection = this.detectionFactory.create(n, { analytics: e, transactionCounting: E, cameraService: A, candidateSelection: this.candidateSelection, imageProcessor: this.imageProcessor, fallbackInstruction: g, instructionCodeMap: a, checkToInstructionCodeMap: o, sessionToken: I, samVersion: this.samVersion, createProtoMessage: r, onCaptureCallback: s, onDetectionCallback: C, instructionEscalation: this.instructionEscalation });
  }
  runDetectionLoop() {
    if (!this.detection) throw new D("Detection not initialized");
    this.detection.run();
  }
  stopDetectionLoop() {
    var n, t;
    (n = this.detection) == null || n.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset(), this.candidateSelection.reset();
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
    return "" + t.replace(qI, "") + n;
  }
}
class Dx {
  constructor() {
    y(this, "imageProcessor");
    y(this, "assetsDirectoryPath");
    y(this, "instructionEscalation");
    y(this, "compatibleSamVersion");
    y(this, "validationService");
    y(this, "detector");
    y(this, "detectionFactory");
    y(this, "candidateSelection");
  }
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
  validateDependencies() {
    if (!this.imageProcessor) throw new D("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new D("AssetsDirectoryPath is required");
    if (!this.detector) throw new D("Detector is required");
    if (!this.compatibleSamVersion) throw new D("CompatibleSamVersion is required");
    if (!this.validationService) throw new D("ValidationService is required");
    if (!this.detectionFactory) throw new D("DetectionFactory is required");
    if (!this.candidateSelection) throw new D("CandidateSelection is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void 0, this.instructionEscalation = void 0, this.compatibleSamVersion = void 0, this.detector = void 0, this.validationService = void 0, this.detectionFactory = void 0, this.candidateSelection = void 0, this;
  }
}
class wx {
  constructor() {
    y(this, "detectionRecord", []);
    y(this, "imagesWithTimestampForDuplicateDetection", new Fa(rQ));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / IQ, A = e / 2, o = n.length / (3047 + -269 * 21 + -124 * -21), r = n.slice(o - A, o + A), g = await Hd(r), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: ec(n), resolution: { width: n.width, height: n.height } };
  }
  async getOptimalRegionForCompressionDetection(n, t, e) {
    const A = e;
    return this.detector.getOptimalRegionForCompressionDetection(n, t, A);
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = _I(n), r = this.validationService.validateDetectedObject(o, t);
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
class bx {
  constructor() {
    y(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new D("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Ha extends mx {
  constructor(t, e, A, o, r, g, a, s) {
    super(o, r, g, a, A, t, s);
    y(this, "detector");
    this.detectionFactory = t, this.detector = e;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Rc(ie.INSTRUCTION_CHANGED, t, _B);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
y(Ha, "_instance");
class kx extends Dx {
  build() {
    return this.validateDependencies(), new Ha(this.detectionFactory, this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.candidateSelection, this.instructionEscalation);
  }
}
class Sx extends wx {
  constructor(t, e) {
    super();
    y(this, "className", "FaceImageProcessor");
    y(this, "detector");
    y(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Tn(t), A = Ac(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let r = await this.detector.detect(A.data, A.resolution, o);
    r = Ed(r, Tn(t));
    const g = {};
    return g.detectedObject = r, g.image = t, g.imageData = A.data, g.timestamp = e, this.processDetectedObject(g);
  }
}
var jt, Qt, Et;
class Gx {
  constructor(n) {
    W(this, jt);
    W(this, Qt);
    W(this, Et);
    v(this, jt, n), v(this, Qt, /* @__PURE__ */ new Map());
  }
  validate() {
    m(this, jt).forEach((n) => {
      m(this, Qt).set(n.name, n.evaluate());
    }), v(this, Et, void 0);
  }
  isValid() {
    return m(this, Et) === void 0 && v(this, Et, Array.from(m(this, Qt).values()).every((n) => n)), m(this, Et);
  }
  get result() {
    return m(this, Qt);
  }
  get validators() {
    return m(this, jt);
  }
}
jt = new WeakMap(), Qt = new WeakMap(), Et = new WeakMap();
var Oo, dt;
class HA {
  constructor(n, t) {
    W(this, Oo);
    W(this, dt);
    v(this, Oo, n), v(this, dt, t);
  }
  get threshold() {
    return m(this, dt);
  }
  get name() {
    return m(this, Oo);
  }
  isValueBelowThreshold(n) {
    return n < m(this, dt);
  }
  isValueAboveThreshold(n) {
    return n > m(this, dt);
  }
}
Oo = new WeakMap(), dt = new WeakMap();
const Nx = "isNotDim";
var Jo;
class Rx extends HA {
  constructor(t, e) {
    super(Nx, t);
    W(this, Jo);
    v(this, Jo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Jo));
  }
}
Jo = new WeakMap();
const Fx = "isNotSmall";
var Uo;
class vx extends HA {
  constructor(t, e) {
    super(Fx, t);
    W(this, Uo);
    v(this, Uo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Uo));
  }
}
Uo = new WeakMap();
const Mx = "isNotBright";
var Yo;
class Wx extends HA {
  constructor(t, e) {
    super(Mx, t);
    W(this, Yo);
    v(this, Yo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Yo));
  }
}
Yo = new WeakMap();
const Lx = "isPresent";
var Po;
class Ox extends HA {
  constructor(t, e) {
    super(Lx, t);
    W(this, Po);
    v(this, Po, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Po));
  }
}
Po = new WeakMap();
const Jx = "isSharp";
var To;
class Ux extends HA {
  constructor(t, e) {
    super(Jx, t);
    W(this, To);
    v(this, To, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, To));
  }
}
To = new WeakMap();
const Yx = "isLeftEyePresent";
var Ho;
class Px extends HA {
  constructor(t, e) {
    super(Yx, t);
    W(this, Ho);
    v(this, Ho, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ho));
  }
}
Ho = new WeakMap();
const Tx = "isMouthPresent";
var Ko;
class Hx extends HA {
  constructor(t, e) {
    super(Tx, t);
    W(this, Ko);
    v(this, Ko, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ko));
  }
}
Ko = new WeakMap();
const Kx = "isMouthScoreNotTooLow";
var jo;
class jx extends HA {
  constructor(t, e) {
    super(Kx, t);
    W(this, jo);
    v(this, jo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, jo));
  }
}
jo = new WeakMap();
const qx = "isMouthScoreNotTooHigh";
var qo;
class _x extends HA {
  constructor(t, e) {
    super(qx, t);
    W(this, qo);
    v(this, qo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, qo));
  }
}
qo = new WeakMap();
const Vx = "isNotLarge";
var _o;
class Zx extends HA {
  constructor(t, e) {
    super(Vx, t);
    W(this, _o);
    v(this, _o, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, _o));
  }
}
_o = new WeakMap();
const zx = "isNotPitched";
var Vo;
const Ka = class Ka extends HA {
  constructor(t, e) {
    super(zx, Ka.calculatePitchAngleAccelerationThreshold(t));
    W(this, Vo);
    v(this, Vo, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return nQ * Math.sin(t * (Math.PI / (3261 * -2 + 10 * -400 + -2 * -5351)));
  }
  evaluate() {
    const { z: t } = m(this, Vo) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Vo = new WeakMap();
let Qa = Ka;
const Xx = "isRightEyePresent";
var Zo;
class $x extends HA {
  constructor(t, e) {
    super(Xx, t);
    W(this, Zo);
    v(this, Zo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Zo));
  }
}
Zo = new WeakMap();
const Al = "isNotOutOfBounds";
var zo, xt;
class el extends HA {
  constructor(t, e, A) {
    super(Al, t);
    W(this, zo);
    W(this, xt);
    v(this, zo, e), v(this, xt, A);
  }
  evaluate() {
    const t = oc(m(this, xt), this.threshold, Tn(m(this, xt))), e = E0(m(this, zo), m(this, xt));
    return uQ(e, t);
  }
}
zo = new WeakMap(), xt = new WeakMap();
class tl {
  static getFaceValidationInstance(n, t, e, A) {
    return new Gx([new Ox(n.confidence.min, t.confidence), new Px(n.leftEye.confidence.min, t.leftEye.confidence), new $x(n.rightEye.confidence.min, t.rightEye.confidence), new vx(n.size.min, t.faceSize), new Zx(n.size.max, t.faceSize), new Ux(n.sharpness.min, t.sharpness), new Rx(n.brightness.min, t.brightness), new Wx(n.brightness.max, t.brightness), new el(n.edgeDistanceToImageShorterSideRatio.min, t, e), new Qa(n.devicePitchAngle.max, A), new Hx(n.mouth.confidence.min, t.mouth.confidence), new _x(n.mouth.status.max, t.mouth.status), new jx(n.mouth.status.min, t.mouth.status)]);
  }
}
class ol extends bx {
  constructor() {
    super(...arguments);
    y(this, "className", "FaceValidationService");
    y(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = tl.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
const nl = "SAM v1.50.5 for idcards", il = "/dot-assets/magnifeye/dot-iyQ3-8G6.js";
function rl() {
  const { handleError: i } = ue(), { acceleration: n } = LE(), { assetsDirectoryPath: t } = Nc(), { thresholds: e } = Q0(), [A, o] = iA();
  Y(() => {
    let g;
    (async () => {
      const s = Ha.getWorkerPath(il, t), C = {};
      C.type = "module";
      const I = new Worker(new URL(s, import.meta.url), C), E = S0(I);
      g = await new E();
      const B = new ol(), d = new Sx(g, B), x = new cx(), l = new Zd(), Q = new kx().setDetector(g).setValidationService(B).setImageProcessor(d).setCompatibleSamVersion(nl).setAssetsDirectoryPath(t).setDetectionFactory(x).setCandidateSelection(l).build();
      try {
        await Q.init(), o(Q);
      } catch (f) {
        if (f instanceof Error) {
          i(D.fromError(f));
          return;
        }
      }
    })();
  }, [i, t]), Y(() => {
    A && A.setThresholds(e);
  }, [A, e]), Y(() => {
    A && A.setAcceleration(n);
  }, [n, A]);
  const r = {};
  return r.controller = A, r;
}
function al({ onCompleteInternal: i }) {
  const { isCameraReady: n } = UI(), { sunfish: t } = An(), { controller: e } = rl(), { cameraResolution: A, detectionDetails: o, shouldCameraMirror: r, videoRef: g } = _d({
    controller: e,
    onCompleteInternal: i
  });
  return /* @__PURE__ */ b(Ae, { children: /* @__PURE__ */ b(
    md,
    {
      cameraResolution: A,
      detectionDetails: o,
      shouldMirror: r,
      children: /* @__PURE__ */ b(
        UB,
        {
          ref: g,
          $isImageMirror: r,
          $isVisible: t && n,
          autoPlay: !0,
          id: VB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function gl({ images: i, metadata: n, video: t }) {
  const { MagnifEyeLivenessContent: e } = Ve.v4, A = await Promise.all(i.map(async (B) => Ta(B))), o = await u0(n), r = t && l0(t), g = {};
  g.streamH264 = r;
  const a = {};
  a.images = A, a.metadata = o, a.video = g;
  const s = a, C = e.verify(s);
  if (C) throw D.fromError(C);
  const I = e.create(s), E = {};
  return E.magnifeyeLivenessContent = I, h0(E);
}
async function sl({ images: i, metadata: n, video: t }) {
  const e = i.map((r) => r.image), A = {};
  A.images = e, A.metadata = n, A.video = t;
  const o = await gl(A);
  return f0(o);
}
function Il(i, n) {
  const t = Jg(i.faceSize, zg);
  return Jg(n.faceSize, zg) < t;
}
function cl() {
  Gi.warn(`
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
const Cl = (i, n) => {
  const t = go(void 0), e = (o) => {
    if (!(!o.detail || i !== ne.RUNNING || n !== vA.CLOSEUP)) {
      if (!t.value) {
        t.value = o.detail;
        return;
      }
      Il(t.value.data.detection, o.detail.data.detection) && (t.value = o.detail);
    }
  };
  Ja(ie.FACE_DETECTION, e);
  const A = {};
  return A.middleImageBestCandidate = t, A;
}, Bl = ro.div`
  ${(i) => i.$isSecondStep && vI`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, Ql = ({
  assetsDirectoryPath: i,
  onComplete: n,
  sessionToken: t
}) => {
  const { analytics: e } = rc(), { appState: A, handleAppStateChange: o, handleError: r, magnifEyePhase: g, setIsCameraReady: a, setMagnifEyePhase: s } = UI(), { cameraProperties: C, mergeCameraProperties: I } = od(), { transactionCounting: E } = Ma(), B = zE(A), { cameraService: d } = ac(), x = go([]), { middleImageBestCandidate: l } = Cl(A, g), Q = qE(Yt.ANIMATION_END);
  function f(P) {
    x.value = [...x.value, P];
  }
  function p(P) {
    s(P), _r(Yt.STATUS_CHANGED, { phase: P });
  }
  function S(P) {
    f(P), p(vA.MIDDLE), o(ne.RUNNING);
  }
  function k() {
    p(vA.DISTANT), Q.value = !1, x.value = [], e == null || e.reset();
  }
  jE(() => {
    Q.value && p(vA.CLOSEUP);
  }), cd({
    onFaceTrackingLost: () => {
      o(ne.WAITING), k(), B(() => o(ne.RUNNING));
    },
    skipOutsideOfCandidateSelection: g !== vA.CLOSEUP
  }), Ad({
    onBlur: () => {
      a(!1), o(ne.LOADING), k();
    },
    onFocus: () => {
      a(!0), o(ne.RUNNING);
    }
  }), vE(Yt.CONTROL, () => {
    k();
  });
  async function G(P) {
    var fA;
    if (l.value) {
      const QA = { image: await $I(l.value.image), data: l.value.data };
      f(QA);
    }
    f(P), E == null || E.trackLivenessTransaction();
    try {
      const V = {
        sessionToken: t,
        web: C.value
      }, QA = await sl({
        images: x.value,
        metadata: V,
        video: (fA = d == null ? void 0 : d.videoRecorder) == null ? void 0 : fA.getRecording()
      }), [Z] = x.value;
      n(Z, QA), e == null || e.trackLivenessProcess(x.value);
    } catch (V) {
      V instanceof Error && r(D.fromError(V));
      return;
    }
    o(ne.DONE);
  }
  const w = {
    [vA.DISTANT]: S,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [vA.MIDDLE]: () => {
    },
    [vA.CLOSEUP]: G
  }, H = BA(
    () => ({
      assetsDirectoryPath: i,
      magnifEyePhase: g,
      onComplete: w[g]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, g]
  );
  return /* @__PURE__ */ b(Cd, { children: /* @__PURE__ */ b(Bl, { $isSecondStep: g !== vA.DISTANT, children: /* @__PURE__ */ b(DE, { configuration: H, children: /* @__PURE__ */ b(sd, { configurationThresholds: Qd[g], children: /* @__PURE__ */ b(al, { onCompleteInternal: I }) }) }) }) });
};
function El({ initAppState: i, onError: n }) {
  const [t, e] = iA(i), [A, o] = iA(), [r, g] = iA(!1), [a, s] = iA(!1), C = Un.Lower, I = GA(n);
  Y(() => {
    I.current = n;
  }, [n]);
  const E = {};
  return E.redfin = C, E.appState = t, E.setAppState = e, E.error = A, E.setError = o, E.isCameraReady = r, E.setIsCameraReady = g, E.onErrorRef = I, E.firstRunningDone = a, E.setFirstRunningDone = s, E;
}
function dl(i, n) {
  return n !== vA.DISTANT ? mo.HIDDEN : i !== ne.RUNNING ? mo.VISIBLE : mo.VISIBLE_WITH_MASK;
}
function xl({
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
    setFirstRunningDone: s,
    setIsCameraReady: C
  } = El({
    initAppState: ne.LOADING,
    onError: i
  }), [I, E] = iA(vA.DISTANT), B = dl(n, I), d = xe(
    (l) => {
      _r(Yt.STATUS_CHANGED, { state: ne.ERROR, error: l }), C(!1), r.current(l), a(l), g(ne.ERROR);
    },
    [C, r, a, g]
  ), x = xe(
    (l) => {
      g(l), _r(Yt.STATUS_CHANGED, { state: l });
    },
    [g]
  );
  return {
    redfin: t,
    appState: n,
    magnifEyePhase: I,
    setMagnifEyePhase: E,
    freemiumOverlayState: B,
    isCameraReady: o,
    setIsCameraReady: C,
    handleAppStateChange: x,
    handleError: d,
    error: e,
    firstRunningDone: A,
    setFirstRunningDone: s
  };
}
const Ot = {};
Ot.AUTO_CAPTURE = "auto_capture", Ot.CAPTURE_FINISHED = "capture_finished", Ot.CAPTURE_STARTED = "capture_started", Ot.ESCALATION_TRIGGER = "escalation_trigger", Ot.LONG_CAPTURE_SMILE = "long_capture_smile";
const xi = Ot, Ye = {};
Ye.PALM = "palm_auto_capture", Ye.SMILE = "smile_liveness", Ye.DOCUMENT = "document_auto_capture", Ye.MAGNIFEYE = "magnifeye_liveness", Ye.EYE_GAZE = "eye_gaze_liveness", Ye.FACE = "face_auto_capture", Ye.MULTI_RANGE = "multi_range_liveness";
const ll = Ye;
class ul {
  constructor() {
    y(this, "apiKey");
    y(this, "sessionId");
    y(this, "distinctId");
    y(this, "component");
    y(this, "platform");
    y(this, "versionName");
    y(this, "applicationId");
    this.platform = "web", this.versionName = VI(), this.applicationId = ZI(window.location.href);
  }
  async init({ apiKey: n, component: t, customer: e, sessionId: A }) {
    !n || !A || !e || !t || (this.apiKey = n, this.sessionId = A, this.distinctId = e, this.component = t, await this.sendEvent(xi.CAPTURE_STARTED));
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
const dn = new ul();
class fl {
  constructor(n) {
    y(this, "posthog", dn);
    y(this, "component");
    this.component = n;
  }
  createSegmentation(n) {
    return { appVersion: VI(), ...n };
  }
  init(n, t) {
    if (Ra()) return;
    const e = $d(), A = {};
    A.apiKey = n, A.component = this.component, A.customer = t, A.sessionId = e, dn.init(A);
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    dn.sendEvent(xi.AUTO_CAPTURE, A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    dn.sendEvent(xi.ESCALATION_TRIGGER, e);
  }
  shouldReportAnalytics(n) {
    var t, e, A, o;
    return ((e = (t = n == null ? void 0 : n.dotWeb) == null ? void 0 : t.features) == null ? void 0 : e["realTimeTransactionReportingDisabled"]) !== void 0 ? !n.dotWeb.features.realTimeTransactionReportingDisabled : ((o = (A = n == null ? void 0 : n.dotWeb) == null ? void 0 : A.features) == null ? void 0 : o["realTimeAnalyticsReportingEnabled"]) ?? !0;
  }
  normalizePerformanceCheckup(n) {
    return n < -9341 * 1 + -1 * -1574 + 8017 ? nx(n) : rt(n);
  }
  parsePerformanceCheckup(n, t) {
    const { optDetails: e } = n ?? {}, { performance: A, hiccupAmount: o, firstHiccup: r } = t ?? {};
    return { performanceCheckup: A, hiccupAmount: tx(o || -9979 + 29 * 144 + 5803), firstHiccup: ex(ox(r)), optCheckDetails: e == null ? void 0 : e.reduce((g, a) => "" + g + a.optSetting + ",afterOpt:" + this.normalizePerformanceCheckup(a.afterOpt) + ",beforeOpt:" + this.normalizePerformanceCheckup(a.beforeOpt) + ";", "") };
  }
}
class hl extends fl {
  constructor() {
    super(...arguments);
    y(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class pl extends hl {
  constructor() {
    super(ll.MAGNIFEYE);
  }
  trackLivenessProcess(n) {
    var B, d, x, l, Q, f, p, S, k, G;
    if (!n.length || !this.captureProcessAnalytics.length) return;
    const [t, e, A] = n, [o, r] = this.captureProcessAnalytics, g = ix(o.averageFps + (r == null ? void 0 : r.averageFps)) / 2, a = o.captureProcessDurationInMs, s = r == null ? void 0 : r["captureProcessDurationInMs"], C = a + s, I = this.parsePerformanceCheckup(o.optCheck, o.performanceCheckup), E = this.createSegmentation({ faceSizeDistant: rt((B = t.data.detection) == null ? void 0 : B.faceSize), faceSizeCloseup: rt((d = A == null ? void 0 : A.data.detection) == null ? void 0 : d.faceSize), faceSizeMiddle: rt((x = e.data.detection) == null ? void 0 : x.faceSize), confidenceDistant: rt((l = t.data.detection) == null ? void 0 : l.confidence), confidenceCloseup: rt((Q = A == null ? void 0 : A.data.detection) == null ? void 0 : Q.confidence), confidenceMiddle: rt((f = e.data.detection) == null ? void 0 : f.confidence), imageResolution: ((S = (p = t.data) == null ? void 0 : p["imageResolution"]) == null ? void 0 : S.width) + "x" + ((G = (k = t.data) == null ? void 0 : k["imageResolution"]) == null ? void 0 : G.height), averageFps: g, captureTimeCloseup: s, captureTimeDistant: a, camera: Ax(o == null ? void 0 : o.deviceName, o == null ? void 0 : o.facingMode), instructionSet: o.instructionSet, isSystemStable: o.isSystemStable, durationMs: C, ...I });
    this.posthog.sendEvent(xi.CAPTURE_FINISHED, E), this.reset();
  }
}
const yl = new pl(), ml = ({ configuration: i }) => i ? (cl(), /* @__PURE__ */ b(FB, { target: i.styleTarget, children: /* @__PURE__ */ b(
  wQ,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: qr.getInstance(),
    children: /* @__PURE__ */ b(
      vQ,
      {
        transactionCountingToken: i.transactionCountingToken,
        transactionType: ot.MAGNIFEYE,
        children: /* @__PURE__ */ b(
          MQ,
          {
            value: xl({
              onError: i.onError
            }),
            children: /* @__PURE__ */ b(PQ, { analytics: yl, apiKey: "phc_8RAlx3YXwoJErjqdWVxyrtS5x6Tsq0RGO7uWzYGVCqt", children: /* @__PURE__ */ b(ic, { children: /* @__PURE__ */ b(QE, { cameraConfiguration: i.camera, children: /* @__PURE__ */ b(Ql, { ...i }) }) }) })
          }
        )
      }
    )
  }
) })) : null;
_0(ml, "x-dot-magnifeye-liveness", ["configuration"]);
