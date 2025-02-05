var EB = Object.defineProperty;
var VI = (g) => {
  throw TypeError(g);
};
var rB = (g, I, t) => I in g ? EB(g, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[I] = t;
var p = (g, I, t) => rB(g, typeof I != "symbol" ? I + "" : I, t), PI = (g, I, t) => I.has(g) || VI("Cannot " + t);
var b = (g, I, t) => (PI(g, I, "read from private field"), t ? t.call(g) : I.get(g)), V = (g, I, t) => I.has(g) ? VI("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, t), T = (g, I, t, A) => (PI(g, I, "write to private field"), A ? A.call(g, t) : I.set(g, t), t);
var Nt, k, ai, xi, ne, XI, Ei, N0, lI, F0, R0, ri, ct = {}, si = [], sB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vg = Array.isArray;
function VA(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function ci(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function dA(g, I, t) {
  var A, e, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : i[o] = I[o];
  if (arguments.length > 3486 + -1 * 6179 + 2695 && (i.children = arguments.length > 2 * 3533 + -1 * -6947 + -14010 ? Nt.call(arguments, 2) : t), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) void (-19 * 64 + -16 * 241 + 5072) === i[o] && (i[o] = g.defaultProps[o]);
  return at(g, i, A, e, null);
}
function at(g, I, t, A, e) {
  var o = {};
  o.type = g, o.props = I, o.key = t, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (-5417 * -1 + -1 * 6974 + 1557), o.__c = null, o.constructor = void (6871 + -1 * 6871), o.__v = e ?? ++ai, o.__i = -(-1 * -6344 + 1 * 2824 + -9167), o.__u = 0;
  var i = o;
  return e == null && k.vnode != null && k.vnode(i), i;
}
function cB() {
  var g = {};
  return g.current = null, g;
}
function kA(g) {
  return g.children;
}
function mA(g, I) {
  this.props = g, this.context = I;
}
function ue(g, I) {
  if (I == null) return g.__ ? ue(g.__, g.__i + (-1 * -4021 + 1 * 8519 + -12539)) : null;
  for (var t; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) return t.__e;
  return typeof g.type == "function" ? ue(g) : null;
}
function di(g) {
  var I, t;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = -4418 + -2 * -2209; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) {
      g.__e = g.__c.base = t.__e;
      break;
    }
    return di(g);
  }
}
function S0(g) {
  (!g.__d && (g.__d = !(-6857 + 11 * -43 + 7330)) && ne.push(g) && !sg.__r++ || XI !== k.debounceRendering) && ((XI = k.debounceRendering) || Ei)(sg);
}
function sg() {
  var g, I, t, A, e, o, i, C;
  for (ne.sort(N0); g = ne.shift(); ) g.__d && (I = ne.length, A = void (1465 * 1 + -5305 + 3840), o = (e = (t = g).__v).__e, i = [], C = [], t.__P && ((A = VA({}, e)).__v = e.__v + (4437 + 23 * 269 + -10623), k.vnode && k.vnode(A), uI(t.__P, A, e, t.__n, t.__P.namespaceURI, 2426 + -11 * -898 + -12272 & e.__u ? [o] : null, i, o ?? ue(e), !!(5398 * 1 + 4639 + -10005 & e.__u), C), A.__v = e.__v, A.__.__k[A.__i] = A, ui(i, A, C), A.__e != o && di(A)), ne.length > I && ne.sort(N0));
  sg.__r = 0;
}
function hi(g, I, t, A, e, o, i, C, B, Q, a) {
  var n, s, x, r, d, h = A && A.__k || si, E = I.length;
  for (t.__d = B, dB(t, I, h), B = t.__d, n = 2410 + 4894 * -2 + 2 * 3689; n < E; n++) (x = t.__k[n]) != null && typeof x != "boolean" && typeof x != "function" && (s = -(-8317 * -1 + -2811 + -5505) === x.__i ? ct : h[x.__i] || ct, x.__i = n, uI(g, x, s, e, o, i, C, B, Q, a), r = x.__e, x.ref && s.ref != x.ref && (s.ref && fI(s.ref, null, x), a.push(x.ref, x.__c || r, x)), d == null && r != null && (d = r), 129609 + -1 * 64073 & x.__u || s.__k === x.__k ? (B && typeof x.type == "string" && !g.contains(B) && (B = ue(s)), B = li(x, B, g)) : typeof x.type == "function" && void (154 * -39 + 451 * -17 + 121 * 113) !== x.__d ? B = x.__d : r && (B = r.nextSibling), x.__d = void (9495 + 3161 * 3 + -18978), x.__u &= -(-8 * -691 + 469 * 793 + -180836));
  t.__d = B, t.__e = d;
}
function dB(g, I, t) {
  var A, e, o, i, C, B = I.length, Q = t.length, a = Q, n = 1 * -6199 + 157 * 1 + 6042;
  for (g.__k = [], A = -5464 + 1 * -7812 + -6638 * -2; A < B; A++) i = A + n, (e = g.__k[A] = (e = I[A]) == null || typeof e == "boolean" || typeof e == "function" ? null : typeof e == "string" || typeof e == "number" || typeof e == "bigint" || e.constructor == String ? at(null, e, null, null, null) : Vg(e) ? at(kA, { children: e }, null, null, null) : e.constructor === void 0 && e.__b > 9368 + 25 * 343 + -17943 ? at(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v) : e) != null ? (e.__ = g, e.__b = g.__b + (31 * -223 + -181 + 7095), C = hB(e, t, i, a), e.__i = C, o = null, -(3723 + -449 * -9 + 1109 * -7) !== C && (a--, (o = t[C]) && (o.__u |= -2 * -21620 + -4265 * -5 + 9501 * 7)), o == null || o.__v === null ? (-(-2437 * 4 + 3432 + 6317 * 1) == C && n--, typeof e.type != "function" && (e.__u |= 10 * 6269 + 2 * 56531 + -110216)) : C !== i && (C == i - 1 ? n = C - i : C == i + (-1 * -571 + -5805 + -1 * -5235) ? n++ : C > i ? a > B - i ? n += C - i : n-- : C < i && n++, C !== A + n && (e.__u |= -50315 + 17291 * -2 + -17 * -8849))) : (o = t[i]) && o.key == null && o.__e && -4457 + -1 * -4457 == (131072 & o.__u) && (o.__e == g.__d && (g.__d = ue(o)), M0(o, o, !(4419 + 9393 * -1 + -199 * -25)), t[i] = null, a--);
  if (a)
    for (A = 5 * -316 + -6821 + 8401; A < Q; A++) (o = t[A]) != null && -1 * -2830 + 392 + -1 * 3222 == (-212683 + -7639 * -45 & o.__u) && (o.__e == g.__d && (g.__d = ue(o)), M0(o, o));
}
function li(g, I, t) {
  var A, e;
  if (typeof g.type == "function") {
    for (A = g.__k, e = 0; A && e < A.length; e++) A[e] && (A[e].__ = g, I = li(A[e], I, t));
    return I;
  }
  g.__e != I && (t.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && 13662 + -6827 * 2 === I.nodeType);
  return I;
}
function PA(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || (Vg(g) ? g.some(function(t) {
    PA(t, I);
  }) : I.push(g)), I;
}
function hB(g, I, t, A) {
  var e = g.key, o = g.type, i = t - 1, C = t + 1, B = I[t];
  if (B === null || B && e == B.key && o === B.type && 4 * -1615 + 9859 + -3399 * 1 == (-1315 * 13 + -150 * 796 + 267567 & B.__u)) return t;
  if (A > (B != null && -4276 + 1733 * 1 + 2543 * 1 == (31 * -6559 + -69 * 2527 + -169588 * -3 & B.__u) ? 1 * -551 + -174 * -38 + -6060 : 2 * 4895 + 79 * 57 + -1 * 14293)) for (; i >= 0 || C < I.length; ) {
    if (i >= -6 * -296 + 3813 + -1 * 5589) {
      if ((B = I[i]) && -1967 * 5 + 5029 + 4806 == (7801 + 2 * 47602 + 28067 & B.__u) && e == B.key && o === B.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((B = I[C]) && 3322 + -1 * 3889 + 567 == (-257546 + -7997 * 25 + 588543 & B.__u) && e == B.key && o === B.type) return C;
      C++;
    }
  }
  return -1;
}
function zI(g, I, t) {
  I[1 * -6887 + -5426 + -1759 * -7] === "-" ? g.setProperty(I, t ?? "") : g[I] = t == null ? "" : typeof t != "number" || sB.test(I) ? t : t + "px";
}
function Ut(g, I, t, A, e) {
  var o;
  A: if (I === "style")
    if (typeof t == "string") g.style.cssText = t;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) t && I in t || zI(g.style, I, "");
      if (t)
        for (I in t) A && t[I] === A[I] || zI(g.style, I, t[I]);
    }
  else if (I[-6207 + -1 * -6207] === "o" && I[1] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(282 * -29 + 4273 + 1 * 3907) : I.slice(-1483 * -3 + -1093 * 3 + 1168 * -1), g.l || (g.l = {}), g.l[I + o] = t, t ? A ? t.u = A.u : (t.u = lI, g.addEventListener(I, o ? R0 : F0, o)) : g.removeEventListener(I, o ? R0 : F0, o);
  else {
    if (e == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(17716 + 17715 * -1) === t && I[-6478 + 26 * 9 + -4 * -1562] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && -31 * 283 + -1 * 1873 + 39 * 273 == t ? "" : t));
  }
}
function _I(g) {
  return function(I) {
    if (this.l) {
      var t = this.l[I.type + g];
      if (I.t == null) I.t = lI++;
      else if (I.t < t.u) return;
      return t(k.event ? k.event(I) : I);
    }
  };
}
function uI(g, I, t, A, e, o, i, C, B, Q) {
  var a, n, s, x, r, d, h, E, u, w, R, S, M, y, O, J, z = I.type;
  if (void (-1931 + 336 * 14 + 2773 * -1) !== I.constructor) return null;
  -669 * 2 + 2 * 191 + -1084 * -1 & t.__u && (B = !!(7731 + -3 * -1448 + -12043 * 1 & t.__u), o = [C = I.__e = t.__e]), (a = k.__b) && a(I);
  A: if (typeof z == "function") try {
    if (E = I.props, u = "prototype" in z && z.prototype.render, w = (a = z.contextType) && A[a.__c], R = a ? w ? w.props.value : a.__ : A, t.__c ? h = (n = I.__c = t.__c).__ = n.__E : (u ? I.__c = n = new z(E, R) : (I.__c = n = new mA(E, R), n.constructor = z, n.render = uB), w && w.sub(n), n.props = E, n.state || (n.state = {}), n.context = R, n.__n = A, s = n.__d = !(-2502 * 3 + -1042 * 1 + 8548 * 1), n.__h = [], n._sb = []), u && n.__s == null && (n.__s = n.state), u && z.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = VA({}, n.__s)), VA(n.__s, z.getDerivedStateFromProps(E, n.__s))), x = n.props, r = n.state, n.__v = I, s) u && z.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), u && n.componentDidMount != null && n.__h.push(n.componentDidMount);
    else {
      if (u && z.getDerivedStateFromProps == null && E !== x && n.componentWillReceiveProps != null && n.componentWillReceiveProps(E, R), !n.__e && (n.shouldComponentUpdate != null && !(7344 + 17 * 144 + 9791 * -1) === n.shouldComponentUpdate(E, n.__s, R) || I.__v === t.__v)) {
        for (I.__v !== t.__v && (n.props = E, n.state = n.__s, n.__d = !(-2 * -2281 + -983 * 2 + 15 * -173)), I.__e = t.__e, I.__k = t.__k, I.__k.forEach(function(Ge) {
          Ge && (Ge.__ = I);
        }), S = 140 * -3 + 19 * 38 + -302; S < n._sb.length; S++) n.__h.push(n._sb[S]);
        n._sb = [], n.__h.length && i.push(n);
        break A;
      }
      n.componentWillUpdate != null && n.componentWillUpdate(E, n.__s, R), u && n.componentDidUpdate != null && n.__h.push(function() {
        n.componentDidUpdate(x, r, d);
      });
    }
    if (n.context = R, n.props = E, n.__P = g, n.__e = !(26 * 74 + 85 * 49 + -6088), M = k.__r, y = 1 * -6374 + 5269 + 1105, u) {
      for (n.state = n.__s, n.__d = !(-7335 + 83 * -27 + -9577 * -1), M && M(I), a = n.render(n.props, n.state, n.context), O = 0; O < n._sb.length; O++) n.__h.push(n._sb[O]);
      n._sb = [];
    } else do
      n.__d = !(4412 * -2 + -9440 + 1 * 18265), M && M(I), a = n.render(n.props, n.state, n.context), n.state = n.__s;
    while (n.__d && ++y < -5356 + 44 * 148 + -1 * 1131);
    n.state = n.__s, n.getChildContext != null && (A = VA(VA({}, A), n.getChildContext())), u && !s && n.getSnapshotBeforeUpdate != null && (d = n.getSnapshotBeforeUpdate(x, r)), hi(g, Vg(J = a != null && a.type === kA && a.key == null ? a.props.children : a) ? J : [J], I, t, A, e, o, i, C, B, Q), n.base = I.__e, I.__u &= -(-2 * 3877 + -6045 + 8 * 1745), n.__h.length && i.push(n), h && (n.__E = n.__ = null);
  } catch (Ge) {
    I.__v = null, B || o != null ? (I.__e = C, I.__u |= B ? 160 : -4455 + 1 * 4487, o[o.indexOf(C)] = null) : (I.__e = t.__e, I.__k = t.__k), k.__e(Ge, I, t);
  }
  else o == null && I.__v === t.__v ? (I.__k = t.__k, I.__e = t.__e) : I.__e = lB(t.__e, I, t, A, e, o, i, B, Q);
  (a = k.diffed) && a(I);
}
function ui(g, I, t) {
  I.__d = void (-3 * 755 + -2438 + 4703 * 1);
  for (var A = -480 + 48 * 10; A < t.length; A++) fI(t[A], t[++A], t[++A]);
  k.__c && k.__c(I, g), g.some(function(e) {
    try {
      g = e.__h, e.__h = [], g.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      k.__e(o, e.__v);
    }
  });
}
function lB(g, I, t, A, e, o, i, C, B) {
  var Q, a, n, s, x, r, d, h = t.props, E = I.props, u = I.type;
  if (u === "svg" ? e = "http://www.w3.org/2000/svg" : u === "math" ? e = "http://www.w3.org/1998/Math/MathML" : e || (e = "http://www.w3.org/1999/xhtml"), o != null) {
    for (Q = 0; Q < o.length; Q++) if ((x = o[Q]) && "setAttribute" in x == !!u && (u ? x.localName === u : -7883 + 1 * -863 + 8749 === x.nodeType)) {
      g = x, o[Q] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(E);
    g = document.createElementNS(e, u, E.is && E), o = null, C = !1;
  }
  if (u === null) h === E || C && g.data === E || (g.data = E);
  else {
    if (o = o && Nt.call(g.childNodes), h = t.props || ct, !C && o != null)
      for (h = {}, Q = -395 * -21 + 6269 + -14564; Q < g.attributes.length; Q++) h[(x = g.attributes[Q]).name] = x.value;
    for (Q in h) if (x = h[Q], Q != "children") {
      if (Q == "dangerouslySetInnerHTML") n = x;
      else if (Q !== "key" && !(Q in E)) {
        if (Q == "value" && "defaultValue" in E || Q == "checked" && "defaultChecked" in E) continue;
        Ut(g, Q, null, x, e);
      }
    }
    for (Q in E) x = E[Q], Q == "children" ? s = x : Q == "dangerouslySetInnerHTML" ? a = x : Q == "value" ? r = x : Q == "checked" ? d = x : Q === "key" || C && typeof x != "function" || h[Q] === x || Ut(g, Q, x, h[Q], e);
    if (a) C || n && (a.__html === n.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (n && (g.innerHTML = ""), hi(g, Vg(s) ? s : [s], I, t, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e, o, i, o ? o[-153 * -53 + -4769 * 1 + -3340] : t.__k && ue(t, 2779 + -997 * 2 + -785), C, B), o != null)
      for (Q = o.length; Q--; ) o[Q] != null && ci(o[Q]);
    C || (Q = "value", void (-7219 + -23 * -211 + -2366 * -1) !== r && (r !== g[Q] || u === "progress" && !r || u === "option" && r !== h[Q]) && Ut(g, Q, r, h[Q], e), Q = "checked", void (13 * 404 + 3 * -2027 + 829) !== d && d !== g[Q] && Ut(g, Q, d, h[Q], e));
  }
  return g;
}
function fI(g, I, t) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    k.__e(A, t);
  }
}
function M0(g, I, t) {
  var A, e;
  if (k.unmount && k.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || fI(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      k.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (e = 6241 + 4918 * -1 + 7 * -189; e < A.length; e++) A[e] && M0(A[e], I, t || typeof g.type != "function");
  t || g.__e == null || ci(g.__e), g.__c = g.__ = g.__e = g.__d = void (288 * -2 + -1 * -8599 + 113 * -71);
}
function uB(g, I, t) {
  return this.constructor(g, t);
}
function oe(g, I, t) {
  var A, e, o, i;
  k.__ && k.__(g, I), e = (A = typeof t == "function") ? null : t && t.__k || I.__k, o = [], i = [], uI(I, g = (!A && t || I).__k = dA(kA, null, [g]), e || ct, ct, I.namespaceURI, !A && t ? [t] : e ? null : I.firstChild ? Nt.call(I.childNodes) : null, o, !A && t ? t : e ? e.__e : I.firstChild, A, i), ui(o, g, i);
}
function DI(g, I) {
  oe(g, I, DI);
}
function yI(g, I, t) {
  var A, e, o, i, C = VA({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : C[o] = void (8 * -1186 + 4645 + 29 * 167) === I[o] && i !== void 0 ? i[o] : I[o];
  return arguments.length > -3 * 2174 + -1 * 6751 + -531 * -25 && (C.children = arguments.length > 3711 + -9 * 412 ? Nt.call(arguments, 2) : t), at(g.type, C, A || g.key, e || g.ref, null);
}
function Ft(g, I) {
  var t = { __c: I = "__cC" + ri++, __: g, Consumer: function(A, e) {
    return A.children(e);
  }, Provider: function(A) {
    var e, o;
    return this.getChildContext || (e = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && e.some(function(C) {
        C.__e = !0, S0(C);
      });
    }, this.sub = function(i) {
      e.push(i);
      var C = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        e && e.splice(e.indexOf(i), 1), C && C.call(i);
      };
    }), A.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Nt = si.slice, k = { __e: function(g, I, t, A) {
  for (var e, o, i; I = I.__; ) if ((e = I.__c) && !e.__) try {
    if ((o = e.constructor) && o.getDerivedStateFromError != null && (e.setState(o.getDerivedStateFromError(g)), i = e.__d), e.componentDidCatch != null && (e.componentDidCatch(g, A || {}), i = e.__d), i) return e.__E = e;
  } catch (C) {
    g = C;
  }
  throw g;
} }, ai = -1558 + -1 * -1558, xi = function(g) {
  return g != null && g.constructor == null;
}, mA.prototype.setState = function(g, I) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = VA({}, this.state), typeof g == "function" && (g = g(VA({}, t), this.props)), g && VA(t, g), g != null && this.__v && (I && this._sb.push(I), S0(this));
}, mA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(7 * 239 + -8997 + 7324), g && this.__h.push(g), S0(this));
}, mA.prototype.render = kA, ne = [], Ei = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, N0 = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, sg.__r = 975 * 3 + -5233 + -1 * -2308, lI = 9 * 153 + -29 * -248 + 11 * -779, F0 = _I(!(77 * -14 + 7 * -393 + -766 * -5)), R0 = _I(!(2165 * 1 + 6801 + -8966)), ri = 1191 * -3 + -13 * 578 + 11087;
function wI() {
  return (wI = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = 1 * -3244 + 4858 + -1613; I < arguments.length; I++) {
      var t = arguments[I];
      for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (g[A] = t[A]);
    }
    return g;
  }).apply(this, arguments);
}
var fB = ["context", "children"];
function DB(g) {
  this.getChildContext = function() {
    return g.context;
  };
  var I = g.children, t = function(A, e) {
    if (A == null) return {};
    var o, i, C = {}, B = Object.keys(A);
    for (i = 8687 + 516 * 7 + -49 * 251; i < B.length; i++) e.indexOf(o = B[i]) >= 0 || (C[o] = A[o]);
    return C;
  }(g, fB);
  return yI(I, t);
}
function yB() {
  var g = {};
  g.detail = {}, g.bubbles = !(-353 * 2 + -760 + 1466), g.cancelable = !(-1452 + 5386 * 1 + -3934);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = dA(DB, wI({}, this._props, { context: I.detail.context }), function t(A, e) {
    if (-238 + 17 * -73 + 1482 === A.nodeType) return A.data;
    if (-3986 * -1 + 6802 + 161 * -67 !== A.nodeType) return null;
    var o = [], i = {}, C = -51 * 113 + -1900 * -1 + -3863 * -1, B = A.attributes, Q = A.childNodes;
    for (C = B.length; C--; ) B[C].name !== "slot" && (i[B[C].name] = B[C].value, i[fi(B[C].name)] = B[C].value);
    for (C = Q.length; C--; ) {
      var a = t(Q[C], null), n = Q[C].slot;
      n ? i[n] = dA($I, { name: n }, a) : o[C] = a;
    }
    var s = e ? dA($I, null, o) : o;
    return dA(e || A.nodeName.toLowerCase(), i, s);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? DI : oe)(this._vdom, this._root);
}
function fi(g) {
  return g.replace(/-(\w)/g, function(I, t) {
    return t ? t.toUpperCase() : "";
  });
}
function wB(g, I, t) {
  if (this._vdom) {
    var A = {};
    A[g] = t = t ?? void (2439 + 1 * -2439), A[fi(g)] = t, this._vdom = yI(this._vdom, A), oe(this._vdom, this._root);
  }
}
function pB() {
  oe(this._vdom = null, this._root);
}
function $I(g, I) {
  var t = this;
  return dA("slot", wI({}, g, { ref: function(A) {
    A ? (t.ref = A, t._listener || (t._listener = function(e) {
      e.stopPropagation(), e.detail.context = I;
    }, A.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function mB(g, I, t, A) {
  function e() {
    var o = Reflect.construct(HTMLElement, [], e);
    return o._vdomComponent = g, o._root = o, o;
  }
  return (e.prototype = Object.create(HTMLElement.prototype)).constructor = e, e.prototype.connectedCallback = yB, e.prototype.attributeChangedCallback = wB, e.prototype.disconnectedCallback = pB, t = t || g.observedAttributes || Object.keys(g.propTypes || {}), e.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(e.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var C = typeof i;
      i != null && C !== "string" && C !== "boolean" && C !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(I, e);
}
var GB = -2543 * 2 + -4534 + 9620;
function D(g, I, t, A, e, o) {
  I || (I = {});
  var i, C, B = I;
  if ("ref" in B)
    for (C in B = {}, I) C == "ref" ? i = I[C] : B[C] = I[C];
  var Q = {};
  Q.type = g, Q.props = B, Q.key = t, Q.ref = i, Q.__k = null, Q.__ = null, Q.__b = 0, Q.__e = null, Q.__d = void (842 * -1 + -9987 + 10829), Q.__c = null, Q.constructor = void (-10 * 607 + -2853 + 8923), Q.__v = --GB, Q.__i = -(5587 + -3 * -2529 + -13173), Q.__u = 0, Q.__source = e, Q.__self = o;
  var a = Q;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (-5932 + -2966 * -2) === B[C] && (B[C] = i[C]);
  return k.vnode && k.vnode(a), a;
}
var lA = function() {
  return lA = Object.assign || function(I) {
    for (var t, A = 1, e = arguments.length; A < e; A++) {
      t = arguments[A];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (I[o] = t[o]);
    }
    return I;
  }, lA.apply(this, arguments);
};
function ve(g, I, t) {
  if (t || arguments.length === 2) for (var A = 0, e = I.length, o; A < e; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function bB(g) {
  var I = Object.create(null);
  return function(t) {
    return I[t] === void 0 && (I[t] = g(t)), I[t];
  };
}
var kB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, NB = bB(function(g) {
  return kB.test(g) || g.charCodeAt(461 * 1 + 2974 * -1 + 2513) === 5623 * 1 + -16 * 554 + 3352 && g.charCodeAt(-97 + 291 * 21 + -6013) === -8392 + 253 * -31 + 16345 && g.charCodeAt(-7843 + -3595 * -2 + -1 * -655) < 8714 + 2641 * -1 + -5982;
}), ie, q, n0, Ao, We = 13995 + 45 * -311, Di = [], Z = k, eo = Z.__b, to = Z.__r, go = Z.diffed, Io = Z.__c, oo = Z.unmount, io = Z.__;
function je(g, I) {
  Z.__h && Z.__h(q, g, We || I), We = -7371 + -10 * 522 + -1 * -12591;
  var t = {};
  t.__ = [], t.__h = [];
  var A = q.__H || (q.__H = t);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function GA(g) {
  return We = -7301 + -6 * -1217, pI(pi, g);
}
function pI(g, I, t) {
  var A = je(ie++, 2);
  if (A.t = g, !A.__c && (A.__ = [t ? t(I) : pi(void (-5829 + 29 * 201), I), function(C) {
    var B = A.__N ? A.__N[0] : A.__[0], Q = A.t(B, C);
    B !== Q && (A.__N = [Q, A.__[-101 * -35 + 3 * -1377 + -597 * -1]], A.__c.setState({}));
  }], A.__c = q, !q.u)) {
    var e = function(C, B, Q) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(s) {
        return !!s.__c;
      });
      if (a.every(function(s) {
        return !s.__N;
      })) return !o || o.call(this, C, B, Q);
      var n = !1;
      return a.forEach(function(s) {
        if (s.__N) {
          var x = s.__[0];
          s.__ = s.__N, s.__N = void 0, x !== s.__[0] && (n = !0);
        }
      }), !(!n && A.__c.props === C) && (!o || o.call(this, C, B, Q));
    };
    q.u = !(7081 + 97 * -73);
    var o = q.shouldComponentUpdate, i = q.componentWillUpdate;
    q.componentWillUpdate = function(C, B, Q) {
      if (this.__e) {
        var a = o;
        o = void (5895 + 3 * -1460 + 1 * -1515), e(C, B, Q), o = a;
      }
      i && i.call(this, C, B, Q);
    }, q.shouldComponentUpdate = e;
  }
  return A.__N || A.__;
}
function tA(g, I) {
  var t = je(ie++, 3);
  !Z.__s && mI(t.__H, I) && (t.__ = g, t.i = I, q.__H.__h.push(t));
}
function Ve(g, I) {
  var t = je(ie++, 4);
  !Z.__s && mI(t.__H, I) && (t.__ = g, t.i = I, q.__h.push(t));
}
function UA(g) {
  return We = 1 * -2018 + 2 * -1107 + 4237 * 1, yA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function yi(g, I, t) {
  We = -12 * -263 + 11 * -18 + -2952, Ve(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void (12361 + 47 * -263);
  }, t == null ? t : t.concat(g));
}
function yA(g, I) {
  var t = je(ie++, 7);
  return mI(t.__H, I) && (t.__ = g(), t.__H = I, t.__h = g), t.__;
}
function zA(g, I) {
  return We = 7828 + 24 * -155 + -4100, yA(function() {
    return g;
  }, I);
}
function we(g) {
  var I = q.context[g.__c], t = je(ie++, 6 * 1576 + 6463 + -15910);
  return t.c = g, I ? (t.__ == null && (t.__ = !0, I.sub(q)), I.props.value) : g.__;
}
function cg(g, I) {
  Z.useDebugValue && Z.useDebugValue(I ? I(g) : g);
}
function wi() {
  var g = je(ie++, 11);
  if (!g.__) {
    for (var I = q.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var t = I.__m || (I.__m = [2782 * -1 + -949 * 1 + 287 * 13, -7170 * 1 + 2863 * 1 + -4307 * -1]);
    g.__ = "P" + t[-7062 + -15 * 427 + -201 * -67] + "-" + t[4242 + 1 * -4241]++;
  }
  return g.__;
}
function FB() {
  for (var g; g = Di.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach(Ag), g.__H.__h.forEach(L0), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], Z.__e(I, g.__v);
  }
}
Z.__b = function(g) {
  q = null, eo && eo(g);
}, Z.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), io && io(g, I);
}, Z.__r = function(g) {
  to && to(g), ie = 0;
  var I = (q = g.__c).__H;
  I && (n0 === q ? (I.__h = [], q.__h = [], I.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-1 * -634 + 4614 + 32 * -164);
  })) : (I.__h.forEach(Ag), I.__h.forEach(L0), I.__h = [], ie = 1518 + -138 * 11)), n0 = q;
}, Z.diffed = function(g) {
  go && go(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (89 * -88 + 4959 + 2874 !== Di.push(I) && Ao === Z.requestAnimationFrame || ((Ao = Z.requestAnimationFrame) || RB)(FB)), I.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), n0 = q = null;
}, Z.__c = function(g, I) {
  I.some(function(t) {
    try {
      t.__h.forEach(Ag), t.__h = t.__h.filter(function(A) {
        return !A.__ || L0(A);
      });
    } catch (A) {
      I.some(function(e) {
        e.__h && (e.__h = []);
      }), I = [], Z.__e(A, t.__v);
    }
  }), Io && Io(g, I);
}, Z.unmount = function(g) {
  oo && oo(g);
  var I, t = g.__c;
  t && t.__H && (t.__H.__.forEach(function(A) {
    try {
      Ag(A);
    } catch (e) {
      I = e;
    }
  }), t.__H = void 0, I && Z.__e(I, t.__v));
};
var Co = typeof requestAnimationFrame == "function";
function RB(g) {
  var I, t = function() {
    clearTimeout(A), Co && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(t, 100);
  Co && (I = requestAnimationFrame(t));
}
function Ag(g) {
  var I = q, t = g.__c;
  typeof t == "function" && (g.__c = void (240 + 4533 * 2 + -9306), t()), q = I;
}
function L0(g) {
  var I = q;
  g.__c = g.__(), q = I;
}
function mI(g, I) {
  return !g || g.length !== I.length || I.some(function(t, A) {
    return t !== g[A];
  });
}
function pi(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function mi(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function J0(g, I) {
  for (var t in g) if (t !== "__source" && !(t in I)) return !(-5 * 677 + 4485 + -550 * 2);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(47 * -13 + 7308 + -181 * 37);
  return !(15 * -329 + -56 * 47 + 7568);
}
function Y0(g, I) {
  this.props = g, this.context = I;
}
function SB(g, I) {
  function t(e) {
    var o = this.props.ref, i = o == e.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, e) || !i : J0(this.props, e);
  }
  function A(e) {
    return this.shouldComponentUpdate = t, dA(g, e);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(10891 + -1 * 10891), A.__f = !(-11403 + 181 * 63), A;
}
(Y0.prototype = new mA()).isPureReactComponent = !(99 * -79 + -8511 + 16332), Y0.prototype.shouldComponentUpdate = function(g, I) {
  return J0(this.props, g) || J0(this.state, I);
};
var Bo = k.__b;
k.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), Bo && Bo(g);
};
var MB = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 9592 + -4 * 1297 + -493;
function Gi(g) {
  function I(t) {
    var A = mi({}, t);
    return delete A.ref, g(A, t.ref || null);
  }
  return I.$$typeof = MB, I.render = I, I.prototype.isReactComponent = I.__f = !(7285 + 155 * -47), I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var Qo = function(g, I) {
  return g == null ? null : PA(PA(g).map(I));
}, LB = { map: Qo, forEach: Qo, count: function(g) {
  return g ? PA(g).length : 4747 + -47 * 101;
}, only: function(g) {
  var I = PA(g);
  if (I.length !== 1) throw "Children.only";
  return I[6878 + -6878 * 1];
}, toArray: PA }, JB = k.__e;
k.__e = function(g, I, t, A) {
  if (g.then) {
    for (var e, o = I; o = o.__; ) if ((e = o.__c) && e.__c) return I.__e == null && (I.__e = t.__e, I.__k = t.__k), e.__c(g, I);
  }
  JB(g, I, t, A);
};
var no = k.unmount;
function bi(g, I, t) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = mi({}, g)).__c != null && (g.__c.__P === t && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return bi(A, I, t);
  })), g;
}
function ki(g, I, t) {
  return g && t && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return ki(A, I, t);
  }), g.__c && g.__c.__P === I && (g.__e && t.appendChild(g.__e), g.__c.__e = !(-4053 + 3017 * -2 + 10087), g.__c.__P = t)), g;
}
function eg() {
  this.__u = -18948 + 1579 * 12, this.t = null, this.__b = null;
}
function Ni(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function YB(g) {
  var I, t, A;
  function e(o) {
    if (I || (I = g()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!t) throw I;
    return dA(t, o);
  }
  return e.displayName = "Lazy", e.__f = !(4933 + -1393 * 1 + -295 * 12), e;
}
function It() {
  this.u = null, this.o = null;
}
k.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && 9572 * 1 + 3 * -1522 + 2487 * -2 & g.__u && (g.type = null), no && no(g);
}, (eg.prototype = new mA()).__c = function(g, I) {
  var t = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(t);
  var e = Ni(A.__v), o = !(-3139 * 2 + -6160 + 12439), i = function() {
    o || (o = !(2298 + 1 * -2297 + -1), t.__R = null, e ? e(C) : C());
  };
  t.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var B = A.state.__a;
        A.__v.__k[8924 + -47 * 128 + 2908 * -1] = ki(B, B.__c.__P, B.__c.__O);
      }
      var Q;
      for (A.setState({ __a: A.__b = null }); Q = A.t.pop(); ) Q.forceUpdate();
    }
  };
  A.__u++ || 5572 + -233 * -3 + -6239 & I.__u || A.setState({ __a: A.__b = A.__v.__k[7669 + 847 * 11 + -16986] }), g.then(i, i);
}, eg.prototype.componentWillUnmount = function() {
  this.t = [];
}, eg.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), A = this.__v.__k[4694 + 508 * -7 + -1138].__c;
      this.__v.__k[2943 + 327 * -9] = bi(this.__b, t, A.__O = A.__P);
    }
    this.__b = null;
  }
  var e = I.__a && dA(kA, null, g.fallback);
  return e && (e.__u &= -(158 * 25 + 11 * -127 + -5 * 504)), [dA(kA, null, I.__a ? null : g.children), e];
};
var ao = function(g, I, t) {
  if (++t[-11474 + -9 * -1275] === t[1998 * 3 + -368 * -26 + 251 * -62] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[0] !== "t" || !g.o.size)) for (t = g.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[-1 * -8884 + -484 + -8399] < t[0]) break;
    g.u = t = t[370 * 19 + -7 * -1031 + -14245];
  }
};
function vB(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function WB(g) {
  var I = this, t = g.i;
  I.componentWillUnmount = function() {
    oe(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== t && I.componentWillUnmount(), I.l || (I.i = t, I.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(1054 + -4742 * 1 + 1 * 3688);
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, e) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> -2 * 4979 + -627 + 10586 * 1, -1319 + -8 * -165), I.i.removeChild(A);
  } }), oe(dA(vB, { context: I.context }, g.__v), I.l);
}
function UB(g, I) {
  var t = {};
  t.__v = g, t.i = I;
  var A = dA(WB, t);
  return A.containerInfo = I, A;
}
(It.prototype = new mA()).__a = function(g) {
  var I = this, t = Ni(I.__v), A = I.o.get(g);
  return A[8630 * -1 + 9089 + -9 * 51]++, function(e) {
    var o = function() {
      I.props.revealOrder ? (A.push(e), ao(I, g, A)) : e();
    };
    t ? t(o) : o();
  };
}, It.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = PA(g.children);
  g.revealOrder && g.revealOrder[0] === "b" && I.reverse();
  for (var t = I.length; t--; ) this.o.set(I[t], this.u = [-1 * -91 + -3634 + 4 * 886, 0, this.u]);
  return g.children;
}, It.prototype.componentDidUpdate = It.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, t) {
    ao(g, t, I);
  });
};
var Fi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 7963 * -10 + 17 * 3347 + -83 * -998, KB = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, HB = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, qB = /[A-Z0-9]/g, OB = typeof document < "u", TB = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function ZB(g, I, t) {
  return I.__k == null && (I.textContent = ""), oe(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
function jB(g, I, t) {
  return DI(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
mA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(mA.prototype, g, { configurable: !(3919 * 1 + -1858 * -3 + -9493), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var t = {};
    t.configurable = !(-2961 + 295 * -27 + 10926), t.writable = !(-6e3 * -1 + 8611 + -14611), t.value = I, Object.defineProperty(this, g, t);
  } });
});
var xo = k.event;
function VB() {
}
function PB() {
  return this.cancelBubble;
}
function XB() {
  return this.defaultPrevented;
}
k.event = function(g) {
  return xo && (g = xo(g)), g.persist = VB, g.isPropagationStopped = PB, g.isDefaultPrevented = XB, g.nativeEvent = g;
};
var tg = {};
tg.enumerable = !(-7243 * -1 + 1 * -7289 + -47 * -1), tg.configurable = !(-4917 + 1639 * 3), tg.get = function() {
  return this.class;
};
var GI, zB = tg, Eo = k.vnode;
k.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var t = I.props, A = I.type, e = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || OB && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(405 * 9 + 3907 + -7552) === i ? i = "" : C === "translate" && i === "no" ? i = !(-186 * 5 + -25 * -141 + -2 * 1297) : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || TB(t.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : HB.test(o) ? o = C : -(-23 * -219 + -3261 + -1775) === A.indexOf("-") && KB.test(o) ? o = o.replace(qB, "-$&").toLowerCase() : i === null && (i = void (-6941 + 15 * 325 + -2066 * -1)) : C = o = "oninput", C === "oninput" && e[o = C] && (o = "oninputCapture"), e[o] = i;
      }
    }
    A == "select" && e.multiple && Array.isArray(e.value) && (e.value = PA(t.children).forEach(function(B) {
      B.props.selected = -(-1058 * -4 + -259 * -19 + -64 * 143) != e.value.indexOf(B.props.value);
    })), A == "select" && e.defaultValue != null && (e.value = PA(t.children).forEach(function(B) {
      B.props.selected = e.multiple ? -(-6436 + -2987 * -3 + -2524) != e.defaultValue.indexOf(B.props.value) : e.defaultValue == B.props.value;
    })), t.class && !t.className ? (e.class = t.class, Object.defineProperty(e, "className", zB)) : (t.className && !t.class || t.class && t.className) && (e.class = e.className = t.className), I.props = e;
  }(g), g.$$typeof = Fi, Eo && Eo(g);
};
var ro = k.__r;
k.__r = function(g) {
  ro && ro(g), GI = g.__c;
};
var so = k.diffed;
k.diffed = function(g) {
  so && so(g);
  var I = g.props, t = g.__e;
  t != null && g.type === "textarea" && "value" in I && I.value !== t.value && (t.value = I.value == null ? "" : I.value), GI = null;
};
var CA = {};
CA.readContext = function(g) {
  return GI.__n[g.__c].props.value;
}, CA.useCallback = zA, CA.useContext = we, CA.useDebugValue = cg, CA.useDeferredValue = Li, CA.useEffect = tA, CA.useId = wi, CA.useImperativeHandle = yi, CA.useInsertionEffect = Yi, CA.useLayoutEffect = Ve, CA.useMemo = yA, CA.useReducer = pI, CA.useRef = UA, CA.useState = GA, CA.useSyncExternalStore = vi, CA.useTransition = Ji;
var Ri = {};
Ri.current = CA;
var Si = {};
Si.ReactCurrentDispatcher = Ri;
var _B = Si;
function $B(g) {
  return dA.bind(null, g);
}
function Pg(g) {
  return !!g && g.$$typeof === Fi;
}
function AQ(g) {
  return Pg(g) && g.type === kA;
}
function eQ(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function tQ(g) {
  return Pg(g) ? yI.apply(null, arguments) : g;
}
function gQ(g) {
  return !!g.__k && (oe(null, g), !(1 * 3301 + -5763 + -2462 * -1));
}
function IQ(g) {
  return g && (g.base || -7 * -231 + -1 * -542 + -2158 === g.nodeType && g) || null;
}
var oQ = function(g, I) {
  return g(I);
}, iQ = function(g, I) {
  return g(I);
}, CQ = kA;
function Mi(g) {
  g();
}
function Li(g) {
  return g;
}
function Ji() {
  return [!(2904 + 1 * -2903), Mi];
}
var Yi = Ve, BQ = Pg;
function vi(g, I) {
  var t = I(), A = GA({ h: { __: t, v: I } }), e = A[0].h, o = A[924 * -9 + -1 * -5303 + 11 * 274];
  return Ve(function() {
    e.__ = t, e.v = I, a0(e) && o({ h: e });
  }, [g, t, I]), tA(function() {
    return a0(e) && o({ h: e }), g(function() {
      a0(e) && o({ h: e });
    });
  }, [g]), t;
}
function a0(g) {
  var I, t, A = g.v, e = g.__;
  try {
    var o = A();
    return !((I = e) === (t = o) && (-1 * 3924 + 332 + 2 * 1796 !== I || (-347 + -3 * -1539 + 3 * -1423) / I == (8071 + 269 * -30) / t) || I != I && t != t);
  } catch {
    return !0;
  }
}
var G = {};
G.useState = GA, G.useId = wi, G.useReducer = pI, G.useEffect = tA, G.useLayoutEffect = Ve, G.useInsertionEffect = Yi, G.useTransition = Ji, G.useDeferredValue = Li, G.useSyncExternalStore = vi, G.startTransition = Mi, G.useRef = UA, G.useImperativeHandle = yi, G.useMemo = yA, G.useCallback = zA, G.useContext = we, G.useDebugValue = cg, G.version = "17.0.2", G.Children = LB, G.render = ZB, G.hydrate = jB, G.unmountComponentAtNode = gQ, G.createPortal = UB, G.createElement = dA, G.createContext = Ft, G.createFactory = $B, G.cloneElement = tQ, G.createRef = cB, G.Fragment = kA, G.isValidElement = Pg, G.isElement = BQ, G.isFragment = AQ, G.isMemo = eQ, G.findDOMNode = IQ, G.Component = mA, G.PureComponent = Y0, G.memo = SB, G.forwardRef = Gi, G.flushSync = iQ, G.unstable_batchedUpdates = oQ, G.StrictMode = CQ, G.Suspense = eg, G.SuspenseList = It, G.lazy = YB, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _B;
var fe = G, QQ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nQ(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function aQ(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function xQ(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") && Object.keys(g).length === 1 ? g.default : g;
}
function EQ(g) {
  if (g.__esModule) return g;
  var I = g.default;
  if (typeof I == "function") {
    var t = function A() {
      return this instanceof A ? Reflect.construct(I, arguments, this.constructor) : I.apply(this, arguments);
    };
    t.prototype = I.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(g).forEach(function(A) {
    var e = Object.getOwnPropertyDescriptor(g, A);
    Object.defineProperty(t, A, e.get ? e : {
      enumerable: !0,
      get: function() {
        return g[A];
      }
    });
  }), t;
}
const rQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: QQ,
  getAugmentedNamespace: EQ,
  getDefaultExportFromCjs: nQ,
  getDefaultExportFromNamespaceIfNotNamed: xQ,
  getDefaultExportFromNamespaceIfPresent: aQ
}, Symbol.toStringTag, { value: "Module" }));
var sQ = function(I, t, A, e) {
  var o = A ? A.call(e, I, t) : void 0;
  if (o !== void (255 * -3 + 4774 * -1 + 5539)) return !!o;
  if (I === t) return !0;
  if (typeof I != "object" || !I || typeof t != "object" || !t) return !1;
  var i = Object.keys(I), C = Object.keys(t);
  if (i.length !== C.length) return !1;
  for (var B = Object.prototype.hasOwnProperty.bind(t), Q = -1 * -8177 + 5 * -1429 + -1032; Q < i.length; Q++) {
    var a = i[Q];
    if (!B(a)) return !1;
    var n = I[a], s = t[a];
    if (o = A ? A.call(e, n, s, a) : void (228 * -26 + -5219 + 1 * 11147), o === !1 || o === void (-6778 * 1 + 195 + 6583) && n !== s) return !1;
  }
  return !0;
};
const cQ = rQ.getDefaultExportFromCjs(sQ);
var H = "-ms-", xt = "-moz-", v = "-webkit-", Wi = "comm", Xg = "rule", bI = "decl", dQ = "@import", Ui = "@keyframes", hQ = "@layer", Ki = Math.abs, kI = String.fromCharCode, v0 = Object.assign;
function lQ(g, I) {
  return gA(g, 1108 + -6 * -796 + 2942 * -2) ^ -4162 + -7 * -601 ? (((I << 9202 + 1 * 4391 + -13591 ^ gA(g, -2108 + -64 * 51 + 158 * 34)) << -6755 * 1 + 1 * 8825 + -2068 ^ gA(g, -922 * -1 + 7 * 842 + -1 * 6815)) << 4177 + -1 * -4507 + 2894 * -3 ^ gA(g, -2 * 938 + 7934 + -6056 * 1)) << 1024 + 1419 * 5 + 1 * -8117 ^ gA(g, -944 + 89 * 37 + -2346) : -769 * 9 + -9877 + 37 * 454;
}
function Hi(g) {
  return g.trim();
}
function OA(g, I) {
  return (g = I.exec(g)) ? g[-9 * 437 + 6915 + -2982] : g;
}
function N(g, I, t) {
  return g.replace(I, t);
}
function gg(g, I, t) {
  return g.indexOf(I, t);
}
function gA(g, I) {
  return g.charCodeAt(I) | -523 * 18 + -95 * -5 + 8939;
}
function Ue(g, I, t) {
  return g.slice(I, t);
}
function YA(g) {
  return g.length;
}
function qi(g) {
  return g.length;
}
function ot(g, I) {
  return I.push(g), g;
}
function uQ(g, I) {
  return g.map(I).join("");
}
function co(g, I) {
  return g.filter(function(t) {
    return !OA(t, I);
  });
}
var zg = -327 + -125 * -41 + -4797, Ke = 1, Oi = -5279 + -1427 * 1 + -1 * -6706, NA = -2994 + 38 * -77 + -148 * -40, $ = 1 * -892 + 2 * 3735 + -6578, Pe = "";
function _g(g, I, t, A, e, o, i, C) {
  var B = {};
  return B.value = g, B.root = I, B.parent = t, B.type = A, B.props = e, B.children = o, B.line = zg, B.column = Ke, B.length = i, B.return = "", B.siblings = C, B;
}
function Ae(g, I) {
  return v0(_g("", null, null, "", null, null, -9180 + -1 * 9957 + 19137, g.siblings), g, { length: -g.length }, I);
}
function ke(g) {
  for (; g.root; ) g = Ae(g.root, { children: [g] });
  ot(g, g.siblings);
}
function fQ() {
  return $;
}
function DQ() {
  return $ = NA > -1 * 3799 + -3895 + -2 * -3847 ? gA(Pe, --NA) : 1886 + 3053 * -3 + -1039 * -7, Ke--, $ === -7621 + -146 * 36 + 12887 && (Ke = -8336 + 331 * -3 + -1866 * -5, zg--), $;
}
function SA() {
  return $ = NA < Oi ? gA(Pe, NA++) : -1 * -954 + -4909 * 2 + 8864, Ke++, $ === -9078 + 2 * 4544 && (Ke = -11 * -257 + 5324 + -163 * 50, zg++), $;
}
function he() {
  return gA(Pe, NA);
}
function Ig() {
  return NA;
}
function $g(g, I) {
  return Ue(Pe, g, I);
}
function W0(g) {
  switch (g) {
    case 1831 * 1 + -1771 + -60:
    case 8654 + -586 * 6 + 1 * -5129:
    case 1 * -4639 + 4858 + 1 * -209:
    case -423 * -9 + -1 * -3294 + -4 * 1772:
    case -2 * 1091 + 8307 + -1 * 6093:
      return 5;
    case -9028 + 1 * 9061:
    case 43:
    case -3067 * -2 + 2954 + -4 * 2261:
    case -364 * -1 + -9 * 47 + -1 * -106:
    case -767 * -12 + 2430 + -44 * 263:
    case 7981 * 1 + 8353 + -16270:
    case -5834 + 2 * -21 + 6002 * 1:
    case 5857 * 1 + 5279 + -11077:
    case 1677 * -2 + -5802 + -9279 * -1:
    case 1630 + 215 * -7:
      return 1 * -4244 + 515 * 18 + 2 * -2511;
    case 58:
      return -44 * -118 + -97 * 3 + 158 * -31;
    case 34:
    case 4479 * 1 + 698 * 6 + -8628:
    case 40:
    case 2409 + -1573 * -1 + -3891 * 1:
      return 2;
    case 41:
    case -740 + -17 * -49:
      return -2030 + 76 * -2 + 2183 * 1;
  }
  return 7539 + -59 * -79 + -12200;
}
function yQ(g) {
  return zg = Ke = -454 * -13 + -6196 * 1 + 295, Oi = YA(Pe = g), NA = 3 * -2213 + 6310 + 329, [];
}
function wQ(g) {
  return Pe = "", g;
}
function x0(g) {
  return Hi($g(NA - (6496 + -6487 * -1 + -12982), U0(g === 1 * 7262 + -97 * 95 + 2044 ? g + (-6562 + 811 * 1 + 5753) : g === -24 * 276 + 362 * -1 + 7026 ? g + (-2543 * 1 + -83 * 25 + 4619) : g)));
}
function pQ(g) {
  for (; ($ = he()) && $ < 5 * -1582 + -3 * -323 + 6974; ) SA();
  return W0(g) > 9659 + -111 * 76 + 407 * -3 || W0($) > -59 * -142 + -2434 + -13 * 457 ? "" : " ";
}
function mQ(g, I) {
  for (; --I && SA() && !($ < 3 * 212 + -1 * -8741 + -1 * 9329 || $ > -8514 + -1073 * -4 + 4324 || $ > -1250 + -1 * -3317 + 201 * -10 && $ < 879 * 1 + -6757 + 7 * 849 || $ > -3169 * 2 + -3683 + 10091 && $ < 1 * -8147 + -5 * -988 + 3304); ) ;
  return $g(g, Ig() + (I < 251 * -13 + -2598 + -5867 * -1 && he() == 1 * 6763 + -2 * -2408 + 1 * -11547 && SA() == -38 * -77 + 4253 * -2 + 5612));
}
function U0(g) {
  for (; SA(); ) switch ($) {
    case g:
      return NA;
    case 931 + 299 * -3:
    case -4549 + 2 * 2294:
      g !== 727 * -1 + 1680 + 919 * -1 && g !== -22 * -201 + 1140 + -1 * 5523 && U0($);
      break;
    case -525 * -7 + 3766 + -7401:
      g === -5390 + -2031 * -3 + -662 && U0(g);
      break;
    case 79 * 41 + -4639 + -4 * -373:
      SA();
      break;
  }
  return NA;
}
function GQ(g, I) {
  for (; SA() && g + $ !== -1211 + 2801 * 1 + 1543 * -1 + 10; ) if (g + $ === -9061 + 2722 * -3 + 17269 * 1 + 42 && he() === 693 + -2777 * -2 + -62 * 100) break;
  return "/*" + $g(I, NA - (-9978 + 1739 * -2 + 13457 * 1)) + "*" + kI(g === 7 * -710 + 9624 + -271 * 17 ? g : SA());
}
function bQ(g) {
  for (; !W0(he()); ) SA();
  return $g(g, NA);
}
function kQ(g) {
  return wQ(og("", null, null, null, [""], g = yQ(g), 5385 * 1 + -3725 + 20 * -83, [-3202 + -1 * 6016 + 2 * 4609], g));
}
function og(g, I, t, A, e, o, i, C, B) {
  for (var Q = 0, a = -8448 + 479 * 3 + -123 * -57, n = i, s = -3872 + -968 * -4, x = 8478 + -46 * -142 + 5 * -3002, r = -805 + 938 * -6 + 1 * 6433, d = 53 * -34 + 999 * 10 + -8187, h = 15 * 493 + -5479 * 1 + 5 * -383, E = 1 * -33 + -2600 + 2634, u = -57 * -26 + -2987 + 1505, w = "", R = e, S = o, M = A, y = w; h; ) switch (r = u, u = SA()) {
    case -98 * 40 + 1 * 8171 + -4211:
      if (r != -269 * -7 + -284 * 22 + -1491 * -3 && gA(y, n - (-4298 * -1 + 8663 * 1 + -12960)) == 803 + 5 * -1059 + 4550) {
        gg(y += N(x0(u), "&", "&\f"), "&\f", Ki(Q ? C[Q - (3731 + 1 * 5443 + -9173 * 1)] : -4596 * -2 + -5339 + -3853)) != -1 && (E = -(-3525 + 1 * 2943 + 583));
        break;
      }
    case 172 + -2722 * 3 + 8028 * 1:
    case -6288 + -1 * 4955 + -1 * -11282:
    case -10112 + -1 * -10203:
      y += x0(u);
      break;
    case 1 * 8941 + -1921 + -7011:
    case 2896 * 1 + 7187 * -1 + 4301:
    case 13:
    case 1238 * -4 + 2696 * 2 + -408:
      y += pQ(r);
      break;
    case -85 * 73 + -1896 * 4 + 13881:
      y += mQ(Ig() - (-1 * 8105 + 540 + 7566), 2591 * 1 + -717 * 1 + -1867);
      continue;
    case 6993 + 23 * -302:
      switch (he()) {
        case -47 * 209 + -1689 * 5 + 18310:
        case 47:
          ot(NQ(GQ(SA(), Ig()), I, t, B), B);
          break;
        default:
          y += "/";
      }
      break;
    case (1918 + 2143 * 2 + 6081 * -1) * d:
      C[Q++] = YA(y) * E;
    case (14710 + 14585 * -1) * d:
    case 62 + 321 * 3 + -966:
    case 2759 + 1 * -583 + -136 * 16:
      switch (u) {
        case 199 * 27 + -1735 + 2 * -1819:
        case -5956 * -1 + 421 * 9 + 962 * -10:
          h = -8599 + -7572 * 1 + -157 * -103;
        case 9690 + -1 * 9631 + a:
          E == -(59 * -107 + -36 * -106 + 2498) && (y = N(y, /\f/g, "")), x > -3329 + -607 * 1 + 6 * 656 && YA(y) - n && ot(x > 32 ? lo(y + ";", A, t, n - (2909 + -139 * -71 + -12777), B) : lo(N(y, " ", "") + ";", A, t, n - (1144 + 1 * -6506 + 12 * 447), B), B);
          break;
        case 1555 * 5 + -586 * -7 + -11818:
          y += ";";
        default:
          if (ot(M = ho(y, I, t, Q, a, e, C, w, R = [], S = [], n, o), o), u === -1831 * 1 + 1 * -887 + -947 * -3)
            if (a === 659 * -1 + 6274 * -1 + 6933) og(y, I, M, M, R, o, n, C, S);
            else switch (s === 99 && gA(y, 10152 + 597 * -17) === 1149 * -5 + -3127 + 2 * 4491 ? 1 * 4939 + 7231 + -5 * 2414 : s) {
              case 100:
              case 134 * -68 + -3 * -577 + 1 * 7489:
              case 7362 + 865 * 3 + 4 * -2462:
              case -3 * -243 + 1007 + -1621:
                og(g, M, M, A && ot(ho(g, M, M, -4 * 113 + -1002 + 727 * 2, 2 * 1945 + 2730 + -5 * 1324, e, C, w, e, R = [], n, S), S), e, S, n, C, A ? R : S);
                break;
              default:
                og(y, M, M, M, [""], S, -3911 * 1 + -102 * -85 + -1 * 4759, C, S);
            }
      }
      Q = a = x = 2 * -3334 + -2011 + -2893 * -3, d = E = 5576 + 1 * -5575, w = y = "", n = i;
      break;
    case 58:
      n = 1 + YA(y), x = r;
    default:
      if (d < -1129 * 4 + -5233 + -6 * -1625) {
        if (u == 8052 + 133 * -17 + -2834 * 2) --d;
        else if (u == -401 * 7 + 368 + 1 * 2564 && d++ == -1 * -3461 + -9630 + 199 * 31 && DQ() == -796 * 4 + -2791 + 6100) continue;
      }
      switch (y += kI(u), u * d) {
        case -9275 + 29 * 232 + 1 * 2585:
          E = a > -3175 + 545 * 1 + 2630 ? 1 : (y += "\f", -1);
          break;
        case 44:
          C[Q++] = (YA(y) - (-150 * 27 + -2 * -407 + 3237)) * E, E = 1;
          break;
        case 64:
          he() === 45 && (y += x0(SA())), s = he(), a = n = YA(w = y += bQ(Ig())), u++;
          break;
        case 6 * -862 + -231 + -3 * -1816:
          r === 45 && YA(y) == 2 && (d = 8713 * 1 + 9013 + 2 * -8863);
      }
  }
  return o;
}
function ho(g, I, t, A, e, o, i, C, B, Q, a, n) {
  for (var s = e - 1, x = e === 841 * 1 + 9285 + -10126 ? o : [""], r = qi(x), d = 631 * 11 + 3046 * -2 + 283 * -3, h = -1 * 399 + -7688 + 8087, E = -5359 + -1 * 1293 + 6652; d < A; ++d) for (var u = 4481 * 1 + -189 + -4292, w = Ue(g, s + (1470 + -17 * -339 + -7232), s = Ki(h = i[d])), R = g; u < r; ++u) (R = Hi(h > -1 * -9881 + -2 * 2322 + -1 * 5237 ? x[u] + " " + w : N(w, /&\f/g, x[u]))) && (B[E++] = R);
  return _g(g, I, t, e === 8692 + 7141 * -1 + -1551 ? Xg : C, B, Q, a, n);
}
function NQ(g, I, t, A) {
  return _g(g, I, t, Wi, kI(fQ()), Ue(g, 4418 + 2208 * -2, -(-2170 + -944 * 4 + 5948)), 0, A);
}
function lo(g, I, t, A, e) {
  return _g(g, I, t, bI, Ue(g, -2 * -3871 + 1 * 3547 + -11289, A), Ue(g, A + 1, -(-6218 + 35 * 277 + -3476)), A, e);
}
function Ti(g, I, t) {
  switch (lQ(g, I)) {
    case -3767 * -1 + -4050 + 5386:
      return v + "print-" + g + g;
    case 5544 + 1 * 193:
    case -739 * 4 + 214 * 45 + 2473 * -1:
    case 3177:
    case 2 * -3793 + 5358 + 5661:
    case 12415 + 10774 * -1:
    case -6783 + 2810 * 4:
    case -7496 + -1 * 3098 + -255 * -53:
    case -10829 + 77 * 213:
    case 2 * -5545 + -1367 + 18813:
    case 23 * 138 + -6 * -1704 + -6 * 1259:
    case 2111 * -1 + -4 * -2479 + -1538 * 3:
    case 6645:
    case 3005:
    case 3 * -2152 + -1 * 7033 + 19880:
    case 263 * 6 + -5484 + 9785:
    case -5436 + 1 * 7858 + 3201:
    case 6135:
    case -4 * 449 + 1 * 9907 + -3512:
    case 1516 + -1 * 38 + 1 * 3377:
    case 6234 + -2517 * 3 + -1 * -5532:
    case -487 * 1 + 1 * -9049 + -2275 * -7:
    case 575 * 2 + -3 * 1087 + -722 * -10:
    case 1620 + 7 * -67 + 4214:
    case 3228 + 1 * -6891 + 9284:
    case -8816 + -59 * -43 + -5054 * -2:
      return v + g + g;
    case 4789:
      return xt + g + g;
    case -4422 + -1 * -8206 + 1565:
    case 869 * -5 + 3657 + 4934:
    case -12491 + 5767 * 3:
    case 6374 + -9 * -66:
    case 25 * -43 + -4 * -1516 + -2233:
      return v + g + xt + g + H + g + g;
    case 1 * 8250 + 11117 + -13431:
      switch (gA(g, I + 11)) {
        case -3726 + 1 * 8372 + -4532 * 1:
          return v + g + H + N(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 1896 * -1 + -674 * -6 + 408 * -5:
          return v + g + H + N(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case 502 * 3 + -1622 + 161:
          return v + g + H + N(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case -446 * 9 + 2026 * 5 + -2 * -356:
    case 427 * -17 + 4753 + -1129 * -6:
    case 7 * 1165 + -2498 * -4 + -15244:
      return v + g + H + g + g;
    case -4916 + 1583 * 7:
      return v + g + H + "flex-" + g + g;
    case 5187:
      return v + g + N(g, /(\w+).+(:[^]+)/, v + "box-$1$2" + H + "flex-$1$2") + g;
    case -1 * 3461 + -130 * 31 + 12934:
      return v + g + H + "flex-item-" + N(g, /flex-|-self/g, "") + (OA(g, /flex-|baseline/) ? "" : H + "grid-row-" + N(g, /flex-|-self/g, "")) + g;
    case -9461 + -3 * 643 + -595 * -27:
      return v + g + H + "flex-line-pack" + N(g, /align-content|flex-|-self/g, "") + g;
    case 7 * -793 + 4150 + 6949:
      return v + g + H + N(g, "shrink", "negative") + g;
    case -3262 + -9 * -213 + -1 * -6637:
      return v + g + H + N(g, "basis", "preferred-size") + g;
    case -12 * -67 + -3864 + 1520 * 6:
      return v + "box-" + N(g, "-grow", "") + v + g + H + N(g, "grow", "positive") + g;
    case 8241 + 1 * -3687:
      return v + N(g, /([^-])(transform)/g, "$1" + v + "$2") + g;
    case -6374 + -2 * -1680 + -1 * -9201:
      return N(N(N(g, /(zoom-|grab)/, v + "$1"), /(image-set)/, v + "$1"), g, "") + g;
    case 5495:
    case -5224 + 1129 * -5 + 2 * 7414:
      return N(g, /(image-set\([^]*)/, v + "$1$`$1");
    case 204 * 35 + -791 * -5 + -6127:
      return N(N(g, /(.+:)(flex-)?(.*)/, v + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + v + g + g;
    case -3632 + -2509 * 1 + 10341:
      if (!OA(g, /flex-|baseline/)) return H + "grid-column-align" + Ue(g, I) + g;
      break;
    case -2979 * -3 + -79 * -47 + -10058:
    case 2063 * -3 + 2123 + -7426 * -1:
      return H + N(g, "template-", "") + g;
    case 223 * -41 + -2820 + 16347:
    case 23 * -109 + 1901 + 1 * 4222:
      return t && t.some(function(A, e) {
        return I = e, OA(A.props, /grid-\w+-end/);
      }) ? ~gg(g + (t = t[I].value), "span", 0) ? g : H + N(g, "-start", "") + g + H + "grid-row-span:" + (~gg(t, "span", 10 * 148 + 381 * 17 + -109 * 73) ? OA(t, /\d+/) : +OA(t, /\d+/) - +OA(g, /\d+/)) + ";" : H + N(g, "-start", "") + g;
    case 2 * 2543 + -275 + -5 * -17:
    case 4128:
      return t && t.some(function(A) {
        return OA(A.props, /grid-\w+-start/);
      }) ? g : H + N(N(g, "-end", "-span"), "span ", "") + g;
    case -2927 * 3 + 2051 + 433 * 25:
    case 3583:
    case -1 * 5829 + 743 + 9154:
    case 14853 + 1 * -12321:
      return N(g, /(.+)-inline(.+)/, v + "$1$2") + g;
    case 13016 + 1475 * -11 + 11325:
    case -616 * -16 + 13686 + -1 * 16483:
    case 5753:
    case 10494 + 346 * -2 + -17 * 251:
    case 4358 + 541 * 3 + -536:
    case 1005 + 1 * -4157 + 8853:
    case 1667 + -5 * -478 + 2 * 438:
    case 10 * -607 + 7185 + 3562:
    case 4149 + -4 * -346:
    case -2075 + 179 * 35 + 1599:
    case 979 + 1 * 899 + -449 * -7:
    case -4931 * -1 + 1 * -4076 + -782 * -5:
      if (YA(g) - (1 * -8811 + 5872 + -490 * -6) - I > -1294 + -6079 * -1 + -4779) switch (gA(g, I + (2 * -4933 + -1333 * 5 + 4 * 4133))) {
        case -1 * 5666 + 7 * 113 + -2492 * -2:
          if (gA(g, I + 4) !== 8542 + 1 * 1541 + 1673 * -6) break;
        case 7 * 839 + -4269 + -1502:
          return N(g, /(.+:)(.+)-([^]+)/, "$1" + v + "$2-$3$1" + xt + (gA(g, I + (-117 * 21 + -254 * -19 + -2366)) == -18925 + -7 * -2719 ? "$3" : "$2-$3")) + g;
        case -2 * -2414 + -134 * -29 + -8599:
          return ~gg(g, "stretch", 8535 * -1 + 6790 + 1745) ? Ti(N(g, "stretch", "fill-available"), I, t) + g : g;
      }
      break;
    case 244 * -3 + 6397 * 1 + -513:
    case -15886 + -10903 * -2:
      return N(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, e, o, i, C, B, Q) {
        return H + e + ":" + o + Q + (i ? H + e + "-span:" + (C ? B : +B - +o) + Q : "") + g;
      });
    case 1 * -2292 + 517 * 1 + 1681 * 4:
      if (gA(g, I + (23 * -265 + -3316 + 9417)) === 121) return N(g, ":", ":" + v) + g;
      break;
    case 2690 + -3754 * -1:
      switch (gA(g, gA(g, 2434 * 3 + -4882 * 1 + -2406) === -7372 * 1 + -5962 + 13379 * 1 ? 18 : 11)) {
        case -16724 + 1 * 16844:
          return N(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + v + (gA(g, -1354 + 5639 * -1 + 7007) === 1 * -8923 + 9709 + -741 ? "inline-" : "") + "box$3$1" + v + "$2$3$1" + H + "$2box$3") + g;
        case 2426 + -2326 * 1:
          return N(g, ":", ":" + H) + g;
      }
      break;
    case 11428 * 1 + -10459 * 1 + 2375 * 2:
    case 1 * -2851 + 8620 + -3122:
    case -6427 + 1 * -8836 + 17398 * 1:
    case 1 * 4315 + 2289 + -2677:
    case 31 * -161 + -217 + 51 * 149:
      return N(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function dg(g, I) {
  for (var t = "", A = -4484 + -3 * 2161 + 10967; A < g.length; A++) t += I(g[A], A, g, I) || "";
  return t;
}
function FQ(g, I, t, A) {
  switch (g.type) {
    case hQ:
      if (g.children.length) break;
    case dQ:
    case bI:
      return g.return = g.return || g.value;
    case Wi:
      return "";
    case Ui:
      return g.return = g.value + "{" + dg(g.children, A) + "}";
    case Xg:
      if (!YA(g.value = g.props.join(","))) return "";
  }
  return YA(t = dg(g.children, A)) ? g.return = g.value + "{" + t + "}" : "";
}
function RQ(g) {
  var I = qi(g);
  return function(t, A, e, o) {
    for (var i = "", C = 2 * 1897 + -815 * -1 + -4609 * 1; C < I; C++) i += g[C](t, A, e, o) || "";
    return i;
  };
}
function SQ(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function MQ(g, I, t, A) {
  if (g.length > -(2075 + -1743 * -3 + 7303 * -1) && !g.return)
    switch (g.type) {
      case bI:
        g.return = Ti(g.value, g.length, t);
        return;
      case Ui:
        return dg([Ae(g, { value: N(g.value, "@", "@" + v) })], A);
      case Xg:
        if (g.length) return uQ(t = g.props, function(e) {
          switch (OA(e, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ke(Ae(g, { props: [N(e, /:(read-\w+)/, ":" + xt + "$1")] }));
              var o = {};
              o.props = [e], ke(Ae(g, o)), v0(g, { props: co(t, A) });
              break;
            case "::placeholder":
              ke(Ae(g, { props: [N(e, /:(plac\w+)/, ":" + v + "input-$1")] })), ke(Ae(g, { props: [N(e, /:(plac\w+)/, ":" + xt + "$1")] })), ke(Ae(g, { props: [N(e, /:(plac\w+)/, H + "input-$1")] }));
              var i = {};
              i.props = [e], ke(Ae(g, i)), v0(g, { props: co(t, A) });
              break;
          }
          return "";
        });
    }
}
var m = {};
m.animationIterationCount = 1, m.aspectRatio = 1, m.borderImageOutset = 1, m.borderImageSlice = 1, m.borderImageWidth = 1, m.boxFlex = 1, m.boxFlexGroup = 1, m.boxOrdinalGroup = 1, m.columnCount = 1, m.columns = 1, m.flex = 1, m.flexGrow = 1, m.flexPositive = 1, m.flexShrink = 1, m.flexNegative = 1, m.flexOrder = 1, m.gridRow = 1, m.gridRowEnd = 1, m.gridRowSpan = 1, m.gridRowStart = 1, m.gridColumn = 1, m.gridColumnEnd = 1, m.gridColumnSpan = 1, m.gridColumnStart = 1, m.msGridRow = 1, m.msGridRowSpan = 1, m.msGridColumn = 1, m.msGridColumnSpan = 1, m.fontWeight = 1, m.lineHeight = 1, m.opacity = 1, m.order = 1, m.orphans = 1, m.tabSize = 1, m.widows = 1, m.zIndex = 1, m.zoom = 1, m.WebkitLineClamp = 1, m.fillOpacity = 1, m.floodOpacity = 1, m.stopOpacity = 1, m.strokeDasharray = 1, m.strokeDashoffset = 1, m.strokeMiterlimit = 1, m.strokeOpacity = 1, m.strokeWidth = 1;
var LQ = m, Y = {}, De = typeof process < "u" && Y !== void 0 && (Y.REACT_APP_SC_ATTR || Y.SC_ATTR) || "data-styled", Zi = "active", ji = "data-styled-version", A0 = "6.1.11", NI = `/*!sc*/
`, FI = typeof window < "u" && "HTMLElement" in window, JQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (775 + -6 * -495 + -7 * 535) !== Y && void (16553 + 16553 * -1) !== Y.REACT_APP_SC_DISABLE_SPEEDY && Y.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-7761 + 39 * 199) !== Y && void (-4285 + -2811 * 1 + 887 * 8) !== Y.SC_DISABLE_SPEEDY && Y.SC_DISABLE_SPEEDY !== "" ? Y.SC_DISABLE_SPEEDY !== "false" && Y.SC_DISABLE_SPEEDY : Y.NODE_ENV !== "production"), uo = /invalid hook call/i, Kt = /* @__PURE__ */ new Set(), YQ = function(g, I) {
  if (Y.NODE_ENV !== "production") {
    var t = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], B = -1131 + -61 * -97 + 3 * -1595; B < arguments.length; B++) C[B - (1457 * 3 + 113 * 61 + -1609 * 7)] = arguments[B];
        uo.test(i) ? (o = !1, Kt.delete(A)) : e.apply(void (-39 * 51 + 4925 + 8 * -367), ve([i], C, !1));
      }, UA(), o && !Kt.has(A) && (console.warn(A), Kt.add(A));
    } catch (i) {
      uo.test(i.message) && Kt.delete(A);
    } finally {
      console.error = e;
    }
  }
}, e0 = Object.freeze([]), He = Object.freeze({});
function vQ(g, I, t) {
  return void (9747 + -4 * 261 + -8703) === t && (t = He), g.theme !== t.theme && g.theme || I || t.theme;
}
var K0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), WQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, UQ = /(^-|-$)/g;
function fo(g) {
  return g.replace(WQ, "-").replace(UQ, "");
}
var KQ = /(a)(d)/gi, Ht = 1243 + 2 * 1581 + -3 * 1451, Do = function(g) {
  return String.fromCharCode(g + (g > 1 * 8167 + 4127 * 1 + 1 * -12269 ? -2 * 2110 + 8636 + -4377 : -1 * 2429 + 6869 + -43 * 101));
};
function H0(g) {
  var I, t = "";
  for (I = Math.abs(g); I > Ht; I = I / Ht | 4399 + -1 * 1415 + -2984) t = Do(I % Ht) + t;
  return (Do(I % Ht) + t).replace(KQ, "$1-$2");
}
var E0, Vi = 7 * -1259 + -22 * 484 + 12421 * 2, ae = function(g, I) {
  for (var t = I.length; t; ) g = (-9 * -781 + -2259 + -4737) * g ^ I.charCodeAt(--t);
  return g;
}, Pi = function(g) {
  return ae(Vi, g);
};
function HQ(g) {
  return H0(Pi(g) >>> 531 + 2 * 87 + 1 * -705);
}
function Xi(g) {
  return Y.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function r0(g) {
  return typeof g == "string" && (Y.NODE_ENV === "production" || g.charAt(9354 + -4677 * 2) === g.charAt(-817 * -5 + -5949 + -466 * -4).toLowerCase());
}
var pA = {};
pA.childContextTypes = !0, pA.contextType = !0, pA.contextTypes = !0, pA.defaultProps = !0, pA.displayName = !0, pA.getDefaultProps = !0, pA.getDerivedStateFromError = !0, pA.getDerivedStateFromProps = !0, pA.mixins = !0, pA.propTypes = !0, pA.type = !0;
var ee = {};
ee.name = !0, ee.length = !0, ee.prototype = !0, ee.caller = !0, ee.callee = !0, ee.arguments = !0, ee.arity = !0;
var Qe = {};
Qe.$$typeof = !0, Qe.compare = !0, Qe.defaultProps = !0, Qe.displayName = !0, Qe.propTypes = !0, Qe.type = !0;
var Ne = {};
Ne.$$typeof = !0, Ne.render = !0, Ne.defaultProps = !0, Ne.displayName = !0, Ne.propTypes = !0;
var zi = typeof Symbol == "function" && Symbol.for, _i = zi ? Symbol.for("react.memo") : -10394 * 6 + -4 * -14272 + 65391 * 1, qQ = zi ? Symbol.for("react.forward_ref") : -487 * -13 + -4133 * 22 + 144707, OQ = pA, TQ = ee, $i = Qe, ZQ = ((E0 = {})[qQ] = Ne, E0[_i] = $i, E0);
function yo(g) {
  return ("type" in (I = g) && I.type.$$typeof) === _i ? $i : "$$typeof" in g ? ZQ[g.$$typeof] : OQ;
  var I;
}
var jQ = Object.defineProperty, VQ = Object.getOwnPropertyNames, wo = Object.getOwnPropertySymbols, PQ = Object.getOwnPropertyDescriptor, XQ = Object.getPrototypeOf, po = Object.prototype;
function AC(g, I, t) {
  if (typeof I != "string") {
    if (po) {
      var A = XQ(I);
      A && A !== po && AC(g, A, t);
    }
    var e = VQ(I);
    wo && (e = e.concat(wo(I)));
    for (var o = yo(g), i = yo(I), C = 0; C < e.length; ++C) {
      var B = e[C];
      if (!(B in TQ || t && t[B] || i && B in i || o && B in o)) {
        var Q = PQ(I, B);
        try {
          jQ(g, B, Q);
        } catch {
        }
      }
    }
  }
  return g;
}
function qe(g) {
  return typeof g == "function";
}
function RI(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function Ee(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function mo(g, I) {
  if (5018 + -197 * -41 + -13095 === g.length) return "";
  for (var t = g[0], A = 5174 + -13 * 81 + -4120; A < g.length; A++) t += g[A];
  return t;
}
function Oe(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function q0(g, I, t) {
  if (void (9 * 531 + 1 * 2206 + -55 * 127) === t && (t = !1), !t && !Oe(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = 149 * -1 + 5722 + 1 * -5573; A < I.length; A++) g[A] = q0(g[A], I[A]);
  else if (Oe(I))
    for (var A in I) g[A] = q0(g[A], I[A]);
  return g;
}
function SI(g, I) {
  var t = {};
  t.value = I, Object.defineProperty(g, "toString", t);
}
var AA = {};
AA[1] = `Cannot create styled-component for component: %s.

`, AA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, AA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, AA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, AA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, AA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, AA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', AA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, AA[9] = "Missing document `<head>`\n\n", AA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, AA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, AA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", AA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, AA[14] = `ThemeProvider: "theme" prop is required.

`, AA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", AA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, AA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, AA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var zQ = Y.NODE_ENV !== "production" ? AA : {};
function _Q() {
  for (var g = [], I = -4992 + -16 * -312; I < arguments.length; I++) g[I] = arguments[I];
  for (var t = g[-1 * 8708 + 8777 + -69], A = [], e = -3363 + 4 * 2377 + -6144, o = g.length; e < o; e += 7254 + 7253 * -1) A.push(g[e]);
  return A.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function Xe(g) {
  for (var I = [], t = 12 * 715 + -1355 + -7224; t < arguments.length; t++) I[t - (784 + 47 * 120 + -2141 * 3)] = arguments[t];
  return Y.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > -975 + 4277 * -2 + 9529 ? " Args: ".concat(I.join(", ")) : "")) : new Error(_Q.apply(void (728 + 45 * 22 + -2 * 859), ve([zQ[g]], I, !1)).trim());
}
var $Q = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(27 * 9 + -99 * 30 + 3239), this.length = 8 * -1114 + 2170 * 1 + 279 * 26, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var t = -7340 + -1781 * 5 + -361 * -45, A = 574 + 2027 * -1 + 1 * 1453; A < I; A++) t += this.groupSizes[A];
    return t;
  }, g.prototype.insertRules = function(I, t) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, e = A.length, o = e; I >= o; ) if ((o <<= -37 * 250 + 1512 + 7739) < 3074 * 1 + -697 * 3 + -983) throw Xe(-3551 + 5 * 291 + 2112, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = e; i < o; i++) this.groupSizes[i] = 0;
    }
    for (var C = this.indexOfGroup(I + (-5944 * -1 + 1763 * -1 + -190 * 22)), B = (i = -1249 * 8 + -3621 + -1 * -13613, t.length); i < B; i++) this.tag.insertRule(C, t[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var t = this.groupSizes[I], A = this.indexOfGroup(I), e = A + t;
      this.groupSizes[I] = -98 * 1 + -5480 + 5578;
      for (var o = A; o < e; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var t = "";
    if (I >= this.length || -19 * -236 + -156 + -1082 * 4 === this.groupSizes[I]) return t;
    for (var A = this.groupSizes[I], e = this.indexOfGroup(I), o = e + A, i = e; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(NI);
    return t;
  }, g;
}(), An = -6129 + 613 * 10 << 30, ig = /* @__PURE__ */ new Map(), hg = /* @__PURE__ */ new Map(), Cg = 1, qt = function(g) {
  if (ig.has(g)) return ig.get(g);
  for (; hg.has(Cg); ) Cg++;
  var I = Cg++;
  if (Y.NODE_ENV !== "production" && ((3140 + 5201 * 1 + 1 * -8341 | I) < 0 || I > An)) throw Xe(-1399 * -1 + -1 * 5401 + 4018, "".concat(I));
  return ig.set(g, I), hg.set(I, g), I;
}, en = function(g, I) {
  Cg = I + 1, ig.set(g, I), hg.set(I, g);
}, tn = "style[".concat(De, "][").concat(ji, '="').concat(A0, '"]'), gn = new RegExp("^".concat(De, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), In = function(g, I, t) {
  for (var A, e = t.split(","), o = -1252 + 1 * 287 + 965, i = e.length; o < i; o++) (A = e[o]) && g.registerName(I, A);
}, on = function(g, I) {
  for (var t, A = ((t = I.textContent) !== null && void (1 * 7682 + 7061 + -14743) !== t ? t : "").split(NI), e = [], o = 5573 * -1 + -2769 + 8342, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var B = C.match(gn);
      if (B) {
        var Q = 0 | parseInt(B[1], 10), a = B[14539 + -14537 * 1];
        43 * -19 + 5483 * 1 + -4666 !== Q && (en(a, Q), In(g, a, B[3 * -1333 + -2379 + 709 * 9]), g.getTag().insertRules(Q, e)), e.length = 2605 + -13 * 263 + 814;
      } else e.push(C);
    }
  }
};
function Cn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var eC = function(g) {
  var I = document.head, t = g || I, A = document.createElement("style"), e = function(C) {
    var B = Array.from(C.querySelectorAll("style[".concat(De, "]")));
    return B[B.length - (3160 * 2 + -3565 + -2754)];
  }(t), o = void (92 * -89 + 4251 + -1 * -3937) !== e ? e.nextSibling : null;
  A.setAttribute(De, Zi), A.setAttribute(ji, A0);
  var i = Cn();
  return i && A.setAttribute("nonce", i), t.insertBefore(A, o), A;
}, Bn = function() {
  function g(I) {
    this.element = eC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var A = document.styleSheets, e = 1194 * -3 + -513 * -3 + -681 * -3, o = A.length; e < o; e++) {
        var i = A[e];
        if (i.ownerNode === t) return i;
      }
      throw Xe(-4938 + 61 * 87 + 22 * -16);
    }(this.element), this.length = 0;
  }
  return g.prototype.insertRule = function(I, t) {
    try {
      return this.sheet.insertRule(t, I), this.length++, !0;
    } catch {
      return !1;
    }
  }, g.prototype.deleteRule = function(I) {
    this.sheet.deleteRule(I), this.length--;
  }, g.prototype.getRule = function(I) {
    var t = this.sheet.cssRules[I];
    return t && t.cssText ? t.cssText : "";
  }, g;
}(), Qn = function() {
  function g(I) {
    this.element = eC(I), this.nodes = this.element.childNodes, this.length = -7 * -111 + -57 + -15 * 48;
  }
  return g.prototype.insertRule = function(I, t) {
    if (I <= this.length && I >= 9460 + 1 * 1481 + -10941) {
      var A = document.createTextNode(t);
      return this.element.insertBefore(A, this.nodes[I] || null), this.length++, !0;
    }
    return !1;
  }, g.prototype.deleteRule = function(I) {
    this.element.removeChild(this.nodes[I]), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.nodes[I].textContent : "";
  }, g;
}(), nn = function() {
  function g(I) {
    this.rules = [], this.length = -107 * 57 + -2452 * 1 + 17 * 503;
  }
  return g.prototype.insertRule = function(I, t) {
    return I <= this.length && (this.rules.splice(I, 5358 + 227 * -25 + 317, t), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, 1 * 1085 + 2744 + 6 * -638), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), Go = FI, an = { isServer: !FI, useCSSOMInjection: !JQ }, tC = function() {
  function g(I, t, A) {
    void (-6997 * -1 + -1466 + -1 * 5531) === I && (I = He), void (-24 * 125 + -1 * -3769 + -769) === t && (t = {});
    var e = this;
    this.options = lA(lA({}, an), I), this.gs = t, this.names = new Map(A), this.server = !!I.isServer, !this.server && FI && Go && (Go = !1, function(o) {
      for (var i = document.querySelectorAll(tn), C = 4477 + 985 * 3 + -7432, B = i.length; C < B; C++) {
        var Q = i[C];
        Q && Q.getAttribute(De) !== Zi && (on(o, Q), Q.parentNode && Q.parentNode.removeChild(Q));
      }
    }(this)), SI(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, B = "", Q = function(n) {
          var s = function(E) {
            return hg.get(E);
          }(n);
          if (void (839 * 4 + -1 * 5443 + 2087) === s) return "continue";
          var x = o.names.get(s), r = i.getGroup(n);
          if (void (-7190 * -1 + 5 * -1891 + 2265) === x || -8502 + -2670 * -2 + 3162 === r.length) return "continue";
          var d = "".concat(De, ".g").concat(n, '[id="').concat(s, '"]'), h = "";
          void (1 * -1858 + 163 * 43 + 1 * -5151) !== x && x.forEach(function(E) {
            E.length > -1001 + -91 * -11 && (h += "".concat(E, ","));
          }), B += "".concat(r).concat(d, '{content:"').concat(h, '"}').concat(NI);
        }, a = -907 * -2 + -8693 * -1 + -10507; a < C; a++) Q(a);
        return B;
      }(e);
    });
  }
  return g.registerId = function(I) {
    return qt(I);
  }, g.prototype.reconstructWithOptions = function(I, t) {
    return void (461 * -5 + 5953 + -3648) === t && (t = !0), new g(lA(lA({}, this.options), I), this.gs, t && this.names || void (-7442 + 1 * 4678 + -2 * -1382));
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || 9633 + -8 * 790 + -3313) + (-167 * 49 + -5471 * 1 + 13655);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(t) {
      var A = t.useCSSOMInjection, e = t.target;
      return t.isServer ? new nn(e) : A ? new Bn(e) : new Qn(e);
    }(this.options), new $Q(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, t) {
    return this.names.has(I) && this.names.get(I).has(t);
  }, g.prototype.registerName = function(I, t) {
    if (qt(I), this.names.has(I)) this.names.get(I).add(t);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(t), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, t, A) {
    this.registerName(I, t), this.getTag().insertRules(qt(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(qt(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void (9411 + -16 * 399 + -3027);
  }, g;
}(), xn = /&/g, En = /^\s*\/\/.*$/gm;
function gC(g, I) {
  return g.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(I, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(I, " ")), t.props = t.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = gC(t.children, I)), t;
  });
}
function IC(g) {
  var I, t, A, e = g === void 0 ? He : g, o = e.options, i = void (110 * -83 + -3015 + 35 * 347) === o ? He : o, C = e.plugins, B = void (33 * 75 + 1521 * -5 + 5130) === C ? e0 : C, Q = function(s, x, r) {
    return r.startsWith(t) && r.endsWith(t) && r.replaceAll(t, "").length > 1 * 8271 + 8 * -13 + -8167 ? ".".concat(I) : s;
  }, a = B.slice();
  a.push(function(s) {
    s.type === Xg && s.value.includes("&") && (s.props[-1368 + -335 * -28 + -8012] = s.props[-149 * -33 + -710 * -11 + -1 * 12727].replace(xn, t).replace(A, Q));
  }), i.prefix && a.push(MQ), a.push(FQ);
  var n = function(s, x, r, d) {
    void (-8214 * -1 + -4100 * 1 + -4114) === x && (x = ""), void (-157 * 1 + 3578 * -2 + 7313) === r && (r = ""), void (-9786 + -706 * 2 + 11198) === d && (d = "&"), I = d, t = x, A = new RegExp("\\".concat(t, "\\b"), "g");
    var h = s.replace(En, ""), E = kQ(r || x ? "".concat(r, " ").concat(x, " { ").concat(h, " }") : h);
    i.namespace && (E = gC(E, i.namespace));
    var u = [];
    return dg(E, RQ(a.concat(SQ(function(w) {
      return u.push(w);
    })))), u;
  };
  return n.hash = B.length ? B.reduce(function(s, x) {
    return x.name || Xe(9729 + 1 * -3677 + -6037 * 1), ae(s, x.name);
  }, Vi).toString() : "", n;
}
var rn = new tC(), O0 = IC(), MI = fe.createContext({ shouldForwardProp: void (-8354 + -8 * -190 + -402 * -17), styleSheet: rn, stylis: O0 });
MI.Consumer;
var sn = fe.createContext(void (-2 * -82 + 1 * 2424 + 2588 * -1));
function T0() {
  return we(MI);
}
function cn(g) {
  var I = GA(g.stylisPlugins), t = I[9448 + -37 * -227 + -17847], A = I[-4 * -1574 + -2322 + -3973], e = T0().styleSheet, o = yA(function() {
    var a = e, n = {};
    return n.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(n)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, e]), i = yA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var n = {};
    return n.options = a, n.plugins = t, IC(n);
  }, [g.enableVendorPrefixes, g.namespace, t]);
  tA(function() {
    cQ(t, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = yA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), B = {};
  B.value = C;
  var Q = {};
  return Q.value = i, fe.createElement(MI.Provider, B, fe.createElement(sn.Provider, Q, g.children));
}
var bo = function() {
  function g(I, t) {
    var A = this;
    this.inject = function(e, o) {
      void (-2 * -4054 + 1 * -6635 + 491 * -3) === o && (o = O0);
      var i = A.name + o.hash;
      e.hasNameForId(A.id, i) || e.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = t, SI(this, function() {
      throw Xe(1 * -9749 + 2 * 1313 + 7135, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return void (8916 + -76 * -97 + 1018 * -16) === I && (I = O0), this.name + I.hash;
  }, g;
}(), dn = function(g) {
  return g >= "A" && g <= "Z";
};
function ko(g) {
  for (var I = "", t = -14624 + 1828 * 8; t < g.length; t++) {
    var A = g[t];
    if (-3 * -2734 + 5657 * -1 + -2544 === t && A === "-" && g[1 * 4107 + -50 * -17 + 1 * -4957] === "-") return g;
    dn(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var oC = function(g) {
  return g == null || g === !1 || g === "";
}, iC = function(g) {
  var I, t, A = [];
  for (var e in g) {
    var o = g[e];
    g.hasOwnProperty(e) && !oC(o) && (Array.isArray(o) && o.isCss || qe(o) ? A.push("".concat(ko(e), ":"), o, ";") : Oe(o) ? A.push.apply(A, ve(ve(["".concat(e, " {")], iC(o), !1), ["}"], !1)) : A.push("".concat(ko(e), ": ").concat((I = e, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 2671 * -2 + -914 + 6256 === t || I in LQ || I.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return A;
};
function le(g, I, t, A) {
  if (oC(g)) return [];
  if (RI(g)) return [".".concat(g.styledComponentId)];
  if (qe(g)) {
    if (!qe(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var e = g(I);
    return Y.NODE_ENV === "production" || typeof e != "object" || Array.isArray(e) || e instanceof bo || Oe(e) || e === null || console.error("".concat(Xi(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), le(e, I, t, A);
  }
  var o;
  return g instanceof bo ? t ? (g.inject(t, A), [g.getName(A)]) : [g] : Oe(g) ? iC(g) : Array.isArray(g) ? Array.prototype.concat.apply(e0, g.map(function(i) {
    return le(i, I, t, A);
  })) : [g.toString()];
}
function hn(g) {
  for (var I = 8437 + -4 * 2066 + 1 * -173; I < g.length; I += -589 * 14 + -1823 * 5 + 17362) {
    var t = g[I];
    if (qe(t) && !RI(t)) return !1;
  }
  return !0;
}
var ln = Pi(A0), un = function() {
  function g(I, t, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = Y.NODE_ENV === "production" && (void (-8269 + 273 * 6 + 6631) === A || A.isStatic) && hn(I), this.componentId = t, this.baseHash = ae(ln, t), this.baseStyle = A, tC.registerId(t);
  }
  return g.prototype.generateAndInjectStyles = function(I, t, A) {
    var e = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, t, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) e = Ee(e, this.staticRulesId);
      else {
        var o = mo(le(this.rules, I, t, A)), i = H0(ae(this.baseHash, o) >>> 718 * -1 + -67 * 71 + 1 * 5475);
        if (!t.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, C);
        }
        e = Ee(e, i), this.staticRulesId = i;
      }
    else {
      for (var B = ae(this.baseHash, A.hash), Q = "", a = -34 * -239 + -6171 * -1 + 14297 * -1; a < this.rules.length; a++) {
        var n = this.rules[a];
        if (typeof n == "string") Q += n, Y.NODE_ENV !== "production" && (B = ae(B, n));
        else if (n) {
          var s = mo(le(n, I, t, A));
          B = ae(B, s + a), Q += s;
        }
      }
      if (Q) {
        var x = H0(B >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, A(Q, ".".concat(x), void (5404 + 7 * -772), this.componentId)), e = Ee(e, x);
      }
    }
    return e;
  }, g;
}(), CC = fe.createContext(void (3923 * -1 + -2 * -2904 + -1885));
CC.Consumer;
var s0 = {}, No = /* @__PURE__ */ new Set();
function fn(g, I, t) {
  var A = RI(g), e = g, o = !r0(g), i = I.attrs, C = void (4879 + 41 * -119) === i ? e0 : i, B = I.componentId, Q = B === void 0 ? function(S, M) {
    var y = typeof S != "string" ? "sc" : fo(S);
    s0[y] = (s0[y] || 7808 + -32 * 244) + (304 * -16 + 6841 + 104 * -19);
    var O = "".concat(y, "-").concat(HQ(A0 + y + s0[y]));
    return M ? "".concat(M, "-").concat(O) : O;
  }(I.displayName, I.parentComponentId) : B, a = I.displayName, n = void (-1 * -5427 + -9682 * 1 + 4255) === a ? function(S) {
    return r0(S) ? "styled.".concat(S) : "Styled(".concat(Xi(S), ")");
  }(g) : a, s = I.displayName && I.componentId ? "".concat(fo(I.displayName), "-").concat(I.componentId) : I.componentId || Q, x = A && e.attrs ? e.attrs.concat(C).filter(Boolean) : C, r = I.shouldForwardProp;
  if (A && e.shouldForwardProp) {
    var d = e.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      r = function(S, M) {
        return d(S, M) && h(S, M);
      };
    } else r = d;
  }
  var E = new un(t, s, A ? e.componentStyle : void (1 * 3099 + -467 * -17 + -11038));
  function u(S, M) {
    return function(y, O, J) {
      var z = y.attrs, Ge = y.componentStyle, BB = y.defaultProps, QB = y.foldedComponentIds, ZI = y.styledComponentId, nB = y.target, aB = fe.useContext(CC), xB = T0(), o0 = y.shouldForwardProp || xB.shouldForwardProp;
      Y.NODE_ENV !== "production" && cg(ZI);
      var jI = vQ(O, aB, BB) || He, HA = function(Yt, $e, vt) {
        var be = {};
        be.className = void (-1 * 1671 + -758 + 2429), be.theme = vt;
        for (var B0, Ce = lA(lA({}, $e), be), Q0 = -2 * 4406 + -3710 * 1 + 12522; Q0 < Yt.length; Q0 += 2844 + -5 * -1047 + -8078) {
          var Wt = qe(B0 = Yt[Q0]) ? B0(Ce) : B0;
          for (var _A in Wt) Ce[_A] = _A === "className" ? Ee(Ce[_A], Wt[_A]) : _A === "style" ? lA(lA({}, Ce[_A]), Wt[_A]) : Wt[_A];
        }
        return $e.className && (Ce.className = Ee(Ce.className, $e.className)), Ce;
      }(z, O, jI), ze = HA.as || nB, _e = {};
      for (var wA in HA) void (7685 + 6463 * 1 + -14148) === HA[wA] || wA[1 * -9142 + 4 * 2143 + 570] === "$" || wA === "as" || wA === "theme" && HA.theme === jI || (wA === "forwardedAs" ? _e.as = HA.forwardedAs : o0 && !o0(wA, ze) || (_e[wA] = HA[wA], o0 || Y.NODE_ENV !== "development" || NB(wA) || No.has(wA) || !K0.has(ze) || (No.add(wA), console.warn('styled-components: it looks like an unknown prop "'.concat(wA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var i0 = function(Yt, $e) {
        var vt = T0(), be = Yt.generateAndInjectStyles($e, vt.styleSheet, vt.stylis);
        return Y.NODE_ENV !== "production" && cg(be), be;
      }(Ge, HA);
      Y.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(i0);
      var C0 = Ee(QB, ZI);
      return i0 && (C0 += " " + i0), HA.className && (C0 += " " + HA.className), _e[r0(ze) && !K0.has(ze) ? "class" : "className"] = C0, _e.ref = J, dA(ze, _e);
    }(w, S, M);
  }
  u.displayName = n;
  var w = fe.forwardRef(u), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, w.attrs = x, w.componentStyle = E, w.displayName = n, w.shouldForwardProp = r, w.foldedComponentIds = A ? Ee(e.foldedComponentIds, e.styledComponentId) : "", w.styledComponentId = s, w.target = A ? e.target : g, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = A ? function(M) {
      for (var y = [], O = -1194 + 631 * -6 + 1 * 4981; O < arguments.length; O++) y[O - (-5 * -1021 + -8353 * 1 + 361 * 9)] = arguments[O];
      for (var J = 2 * 2748 + 2655 + 13 * -627, z = y; J < z.length; J++) q0(M, z[J], !0);
      return M;
    }({}, e.defaultProps, S) : S;
  } }), Y.NODE_ENV !== "production" && (YQ(n, s), w.warnTooManyClasses = /* @__PURE__ */ function(S, M) {
    var y = {}, O = !1;
    return function(J) {
      if (!O && (y[J] = !0, Object.keys(y).length >= -1 * 7617 + 4621 + 47 * 68)) {
        var z = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(18 * 551 + 703 + -10421, " classes were generated for component ").concat(S).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), O = !0, y = {};
      }
    };
  }(n, s)), SI(w, function() {
    return ".".concat(w.styledComponentId);
  }), o && AC(w, g, R), w;
}
function Fo(g, I) {
  for (var t = [g[0]], A = 2134 * -2 + 9198 + 170 * -29, e = I.length; A < e; A += 3185 + -398 * 8) t.push(I[A], g[A + (-5 * 1466 + 2554 + 1 * 4777)]);
  return t;
}
var Ro = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function Dn(g) {
  for (var I = [], t = -3679 + 23 * 160; t < arguments.length; t++) I[t - (2955 + 34 * 51 + -4688 * 1)] = arguments[t];
  if (qe(g) || Oe(g)) return Ro(le(Fo(e0, ve([g], I, !0))));
  var A = g;
  return 7421 * 1 + 2 * 2948 + -13317 === I.length && A.length === 1 && typeof A[-8873 + 1 * 2518 + 6355] == "string" ? le(A) : Ro(le(Fo(A, I)));
}
function Z0(g, I, t) {
  if (void (237 * -29 + 4204 + -157 * -17) === t && (t = He), !I) throw Xe(-292 * 26 + 3044 + -4549 * -1, I);
  var A = function(e) {
    for (var o = [], i = -1433 * -1 + 3950 * -1 + 2518 * 1; i < arguments.length; i++) o[i - (3 * -38 + 2637 + -2522)] = arguments[i];
    return g(I, t, Dn.apply(void 0, ve([e], o, !1)));
  };
  return A.attrs = function(e) {
    return Z0(g, I, lA(lA({}, t), { attrs: Array.prototype.concat(t.attrs, e).filter(Boolean) }));
  }, A.withConfig = function(e) {
    return Z0(g, I, lA(lA({}, t), e));
  }, A;
}
var BC = function(g) {
  return Z0(fn, g);
}, Rt = BC;
K0.forEach(function(g) {
  Rt[g] = BC(g);
});
Y.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ot = "__sc-".concat(De, "__");
Y.NODE_ENV !== "production" && Y.NODE_ENV !== "test" && typeof window < "u" && (window[Ot] || (window[Ot] = -1 * 7366 + 678 * 4 + 2327 * 2), -1246 * -5 + 1177 * 2 + 1 * -8583 === window[Ot] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ot] += 8282 + 1 * 4424 + -12705);
const yn = Rt.div`
  position: relative;
`, wn = Rt.video`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(g) => g.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class K extends Error {
  constructor(t, A) {
    super(t);
    p(this, "cause");
    this.name = "AutoCaptureError", this.cause = A;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof K) return t;
    let A;
    switch (t.name) {
      case "OverconstrainedError":
        A = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        A = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        A = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        A = "There is no camera available to you";
        break;
      default:
        A = "An unknown camera error has occurred";
        break;
    }
    return new K(A, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof K) return t;
    const A = "An unexpected error has occurred";
    return new K(A);
  }
}
const Bg = {};
Bg.CONTINUE_DETECTION = "continue-detection", Bg.SWITCH_CAMERA = "switch-camera", Bg.TOGGLE_MIRROR = "toggle-mirror";
const c0 = Bg, j0 = {};
j0.FIRST_FRAME = "first-frame", j0.FIRST_VALID_FRAME = "first-valid-frame";
const d0 = j0, QC = {};
QC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const So = QC;
var XA = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))(XA || {}), pn = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(pn || {}), mn = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(mn || {}), Gn = ((g) => (g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(Gn || {}), bn = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(bn || {}), kn = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(kn || {});
const qA = {};
qA.CANDIDATE_SELECTION = "candidate_selection", qA.DOCUMENT_CENTERING = "document_centering", qA.DOCUMENT_NOT_PRESENT = "document_not_present", qA.DOCUMENT_TOO_FAR = "document_too_far", qA.SHARPNESS_TOO_LOW = "sharpness_too_low", qA.BRIGHTNESS_TOO_LOW = "brightness_too_low", qA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", qA.HOTSPOTS_PRESENT = "hotspots_present";
const TA = qA, te = {};
te.isPresent = TA.DOCUMENT_NOT_PRESENT, te.isNotSmall = TA.DOCUMENT_TOO_FAR, te.isNotOutOfBounds = TA.DOCUMENT_CENTERING, te.isSharp = TA.SHARPNESS_TOO_LOW, te.isNotDim = TA.BRIGHTNESS_TOO_LOW, te.isNotBright = TA.BRIGHTNESS_TOO_HIGH, te.noHotspots = TA.HOTSPOTS_PRESENT;
const Nn = te, V0 = {};
V0.FRONT = "user", V0.REAR = "environment";
const lg = V0, P0 = {};
P0.AUTO_CAPTURE = "AUTO_CAPTURE", P0.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const nC = P0, it = {};
it.LOADING = "LOADING", it.ERROR = "ERROR", it.WAITING = "WAITING", it.RUNNING = "RUNNING";
const DA = it;
var Fn = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(Fn || {});
const t0 = Ft(void 0);
t0.displayName = "AppStateContext";
function St() {
  const g = we(t0);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const Rn = t0.Provider;
class aC extends mA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const I = new K("An unknown error has occurred");
    (t = this.context) == null || t.handleError(I);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var I;
    return ((I = this.context) == null ? void 0 : I.appState) === DA.ERROR ? null : this.props.children;
  }
}
p(aC, "contextType", t0);
const Sn = Rt.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Mn = Rt.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: auto;
  padding: 10px;
  z-index: 2;
  word-break: break-word;
  position: absolute;
  top: 0;
`;
function Ln() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Jn = Gi(
  ({ detectionDetails: g, isImageMirror: I }, t) => Ln() ? (console.log(g), /* @__PURE__ */ D(kA, { children: [
    /* @__PURE__ */ D(Sn, { ref: t, $isImageMirror: I }),
    /* @__PURE__ */ D(Mn, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), ug = Ft(void 0);
ug.displayName = "AnalyticsContext";
function Yn() {
  const g = we(ug);
  if (g === void 0)
    throw new Error(`${ug.displayName} must be used within a AnalyticsProvider`);
  return g;
}
(function(g, I) {
  const t = g();
  function A(C, B, Q, a, n) {
    return QA(B - -237, Q);
  }
  function e(C, B, Q, a, n) {
    return QA(B - -246, C);
  }
  function o(C, B, Q, a, n) {
    return QA(Q - -933, n);
  }
  function i(C, B, Q, a, n) {
    return QA(B - -906, C);
  }
  for (; ; )
    try {
      if (-parseInt(e("Ek3m", 189, 179, 200, 204)) / 1 + parseInt(e("yw9E", 193, 178, 183, 194)) / 2 * (-parseInt(e("MXuJ", 183, 165, 189, 166)) / 3) + parseInt(A(223, 205, "MXuJ", 197, 217)) / 4 + -parseInt(o(-510, -501, -499, -485, "pXe3")) / 5 + -parseInt(A(207, 213, "qDLa", 204, 211)) / 6 * (parseInt(i("H*nW", -478, -492, -474, -471)) / 7) + parseInt(i("p1#[", -445, -437, -451, -439)) / 8 * (parseInt(o(-492, -495, -484, -490, "RB8B")) / 9) + parseInt(A(212, 226, "Lx5J", 220, 210)) / 10 * (parseInt(e("c)ep", 191, 207, 196, 188)) / 11) === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(fg, -8 * 11141 + -110 * -2371 + 1 * 33479);
function xC(g, I, t, A, e) {
  return QA(t - -520, A);
}
function vn(g, I, t, A, e) {
  return QA(I - -653, e);
}
function fg() {
  const g = ["W4ldGYnNnq", "W7Knya9St8oSW7pdJSoria", "nexcH8kdbwr/F8k5WO0", "j25PxCojWObQW7Pfrq", "WRelW4LnoK3dS2jBu8ofDa", "nmosrdih", "nc5uh8k0", "WRRcVrBdSMW", "W5VcHbpdQSk8W6bdWRVdKmosW77cV2y", "W79DWRRcSmoqWP7cPhzAWOO", "WQu9kcqHnCoDj1evW6BcQmoE", "WP7dMfpcQW", "wtu5c8o9", "j8ocWPBdMwTieCoL", "jdVcVa", "xSk9W4NcUSo+DSkpW7a", "yHNdHCohgG", "rCoBb8oXbSkvW4O9c2q", "igtdUSknF8oZmN/cLmkQWRddTa", "FtSCoSkZ", "W6DeWRqzyG", "rthcUsSfACoeW7hdJmkqi8kt", "WQZdVuVdG8oR", "sSonW6G9WOCHs343paRcSuC", "WR/dLx8WW4NdKComWRxcGmoMECkt", "bmkcF2Lm", "EwZdUsK9fIm4qdZcThL6", "bmkmD8kTmG", "W4qOWO4BW5TpWP4", "W5jltCohWRzmcCob", "yCklrHCbDSoJca", "igddUSkmFmo9mfxcI8k/WQ3dPq", "W7pdIajWmq", "FSkwndpcVxmnfZVdPx1q", "W4rEW7ddUwu", "WR3cRZKXW7zaWQ8FWOZdKcG", "rCkzF8kWhSkVW4i"];
  return fg = function() {
    return g;
  }, fg();
}
function h0(g, I, t, A, e) {
  return QA(A - -934, e);
}
function Mo(g, I, t, A, e) {
  return QA(g - -122, t);
}
const Dg = Ft(void (-1 * 9063 + -1 * -1361 + 3851 * 2));
Dg[h0(-494, -518, -501, -507, "qDLa") + xC(-102, -97, -89, "yWSU") + "e"] = h0(-491, -484, -491, -474, "1M64") + h0(-501, -493, -498, -496, "H*nW") + vn(-186, -194, -180, -192, "TsCQ");
function Wn(g, I, t, A, e) {
  return QA(e - 123, I);
}
function QA(g, I) {
  const t = fg();
  return QA = function(A, e) {
    A = A - (4525 + 2049 * -2);
    let o = t[A];
    if (QA.MneiEV === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      QA.RPVBgY = a, g = arguments, QA.MneiEV = !0;
    }
    const C = t[14 * -90 + -2 * -3449 + 2819 * -2], B = A + C, Q = g[B];
    return Q ? o = Q : (QA.aTkDpP === void 0 && (QA.aTkDpP = !0), o = QA.RPVBgY(o, e), g[B] = o), o;
  }, QA(g, I);
}
function Mt() {
  function g(o, i, C, B, Q) {
    return Mo(Q - -263, i - 39, B);
  }
  function I(o, i, C, B, Q) {
    return Mo(o - 778, i - 171, i);
  }
  function t(o, i, C, B, Q) {
    return Wn(o - 223, B, C - 256, B - 395, C - -32);
  }
  const A = we(Dg);
  if (A === void (7331 + -1 * 4933 + 218 * -11)) throw new Error(Dg[g(52, 77, 55, "@9fK", 68) + e(774, 787, "VQJw") + "e"] + (e(788, 777, "^OP%") + I(1111, "S[Lq") + t(534, 532, 527, "VWGX") + g(75, 64, 55, "7X(Z", 69) + t(502, 540, 521, "7X(Z") + t(532, 539, 536, "KFht") + t(542, 552, 539, "VQJw") + I(1118, "c)ep")));
  function e(o, i, C, B, Q) {
    return xC(o - 207, i - 468, i - 864, C);
  }
  return A;
}
const Tt = (g, I) => Math.hypot(I.x - g.x, I.y - g.y), yg = (g) => g.length < -43 * -155 + 149 * 38 + -12326 * 1 ? -2 * 4331 + -407 * 4 + -10 * -1029 : g.reduce((t, A) => t + A, -2082 + -6136 * 1 + -587 * -14) / g.length, Te = (g) => Number.parseFloat(g.toFixed(-4010 * -1 + 978 + 5 * -997)), Un = (g) => {
  const { bottomLeft: I, bottomRight: t, topLeft: A, topRight: e } = g, o = Tt(A, e), i = Tt(e, t), C = Tt(I, t), B = Tt(A, I);
  return Math.min(o, i, C, B);
}, Kn = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(40 * -174 + 59 * -121 + 14099, 109 * 53 + 2483 + -2 * 4130, I.canvas.width, I.canvas.height);
}, Hn = 4627 + -18 * 257 + 0.5, qn = -127 * 18 + 1543 * -1 + 3829 + 0.85, l0 = 12230 + -5615 * 2, On = 600, Tn = 1221 + 1 * -3751 + 2530, Zn = "dot-auto-capture-video";
function jn(g, I) {
  return g < l0 && I >= l0 ? l0 : g;
}
function Vn(g, I) {
  return g < I ? g : I;
}
function EC({ height: g, width: I }) {
  let t;
  return I > g ? t = jn(g, I) : t = I, { width: t, height: Vn(g, t) };
}
const Pn = (g, I) => Math.min(g, I), rC = (g) => {
  const I = EC(g).width, t = I * qn, A = (g.width - t) / (2022 + -1432 * -3 + -6316), e = t / Hn, o = (g.height - e) / (-4147 * 2 + -1871 + 10167), i = {};
  return i.shiftX = A, i.shiftY = o, i.width = t, i.height = e, i;
}, Xn = (g) => {
  const { height: I, shiftX: t, shiftY: A, width: e } = rC(g), o = {};
  return o.shiftX = t / g.width, o.shiftY = A / g.height, o.width = e / g.width, o.height = I / g.height, o;
}, zn = "@innovatrics/dot-common-auto-capture", _n = "7.0.1", $n = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Aa = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, ea = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, ta = {
  name: zn,
  private: !0,
  version: _n,
  scripts: $n,
  dependencies: Aa,
  devDependencies: ea
}, ga = 5 * 1388 + 563 * -14 + 942 + 0.8, Ia = -1 * 2287 + 3593 * 2 + -4899 + 0.43, oa = -6503 * -1 + -2802 + -3701 + 0.03, ia = -1931 + -2 * -4419 + 6907 * -1 + 0.5, Ca = 286 * -32 + 6 * -836 + 14168 + 0.25, Ba = -11 * 907 + 5960 + 4017 + 0.9, Qa = -2391 + 2 * -884 + 4159 + 0.1, Qg = {};
Qg.minDuration = 1e3, Qg.maxDuration = 2500, Qg.minFrames = 10;
const u0 = Qg, X0 = {};
X0.max = 100, X0.min = 10;
const Lo = X0, na = 2408 + 1 * -9185 + 7497, aa = -4273 * 2 + -1532 + 10278, xa = -16829 + -31 * -543, sC = "AES-CBC", cC = "RSA-OAEP", Ea = "SHA-256", ra = "image/jpeg", sa = 8, dC = "/dot-assets", Jo = "dot_embedded_bg.wasm", LI = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Yo = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, ca = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, z0 = (g) => new Promise((I) => {
  setTimeout(I, g);
}), da = (g) => JSON.parse(JSON.stringify(g, (I, t) => typeof t == "number" ? Te(t) : t)), hC = () => ta.version, lC = (g) => new URL(g).hostname.replace("www.", ""), ha = () => lC(window.location.href) === "localhost", Zt = (g) => Object.entries(g).map(([I, t]) => encodeURIComponent(I) + "=" + encodeURIComponent(t)).join("&"), la = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g;
function ua(g) {
  return g.at(-(5346 + 1067 * -4 + 1077 * -1)) === "/" ? g.slice(6547 + -6547 * 1, -(-4231 * -1 + -29 + 1 * -4201)) : g;
}
function uC(g) {
  return "" + ua(g ?? "") + dC;
}
const fa = () => "prod".toLowerCase() === "dev";
class fC extends Array {
  constructor(t) {
    super();
    p(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const A = t.slice(-this.size);
      this.push(...A);
      return;
    }
    this.length === this.size && this.splice(2019 + 673 * -3, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-167 * -1 + 5064 + -5231);
  }
}
const Da = (g, I, t = ra) => new Promise((A) => {
  g.toBlob((e) => {
    if (!e) throw new Error("Canvas to Blob failed");
    A(e);
  }, t, I);
}), ya = async (g) => Da(g, -9164 + 2818 * 1 + -1 * -6436), wa = (g, I) => {
  const t = document.createElement("canvas");
  t.width = I.width, t.height = I.height;
  const A = t.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, 8277 * 1 + -8782 + 505, -7093 + 157 * -1 + 7250, t.width, t.height), t;
}, pa = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: t } = I.getImageData(2499 + 3 * 599 + -4296 * 1, 113 * 2 + 4766 * 2 + 82 * -119, g.width, g.height);
  return t;
}, ma = (g, I, t, A) => {
  const e = g.getContext("2d");
  e && (e.beginPath(), e.strokeStyle = t, e.rect(I.topLeft.x, I.topLeft.y, I.width, I.height), e.stroke());
}, f0 = (g, I, t) => {
  const { height: A, shiftX: e, shiftY: o, width: i } = I, C = {};
  C.x = e, C.y = o;
  const B = {};
  B.topLeft = C, B.width = i, B.height = A, B.color = t, ma(g, B, t);
};
function Ga({ canvas: g, color: I, fill: t, offset: A = -262 * 13 + 1109 + 1 * 2297, polygon: e }) {
  const o = g.getContext("2d");
  if (!o) return;
  const { bottomLeft: i, bottomRight: C, topLeft: B, topRight: Q } = e;
  t ? o.fillStyle = I : o.strokeStyle = I, o.beginPath(), o.moveTo(B.x + A, B.y + A), o.lineTo(Q.x + A, Q.y + A), o.lineTo(C.x + A, C.y + A), o.lineTo(i.x + A, i.y + A), o.closePath(), t ? o.fill() : o.stroke();
}
const ba = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < e || g.y > e + t);
}, ka = (g, I) => Object.values(g).every((t) => ba(t, I));
function wg(g) {
  const { height: I, width: t } = EC(g), A = (g.width - t) / (-5167 + 223 * -1 + 337 * 16), e = (g.height - I) / (-5719 * -1 + -5 * -385 + 1 * -7642), o = {};
  return o.shiftX = A, o.shiftY = e, o.width = t, o.height = I, o;
}
function DC(g, I, t) {
  const { height: A, width: e } = t, o = Pn(g.width, g.height), i = e - o * I * (-1 * -4391 + -664 + 3725 * -1), C = A - o * I * (-14928 + -10 * -1493), B = (g.width - i) / (-10 * 827 + -1158 + 82 * 115), Q = (g.height - C) / (8909 + -9 * 1031 + -93 * -4), a = {};
  return a.shiftX = B, a.shiftY = Q, a.width = i, a.height = C, a;
}
function jt(g, I) {
  const { shiftX: t, shiftY: A } = I, e = {};
  return e.x = g.x + t, e.y = g.y + A, e;
}
function Na(g, I) {
  return { ...g, topLeft: jt(g.topLeft, I), topRight: jt(g.topRight, I), bottomRight: jt(g.bottomRight, I), bottomLeft: jt(g.bottomLeft, I) };
}
function Fa(g, I) {
  const t = Un(g), A = t / I.width, e = { ...g };
  return e.smallestEdge = A, e;
}
function pg() {
  const g = ["zSocWRracI1YW6ldQmkRW5m", "W44IEsvdWRqN", "gmofWRpcV3a", "dgdcSbJcOSosDx4G", "WQxdH1zEnmkFmftcQbzokCkb", "c8kWA0VcOG", "WQ54tCke", "WRBcR3BdGHG", "mSoXWPpcJSoJW7vjW4JdLmo0WP0DWPu", "qCkXwHTOWQvj", "EdTLhSoiW7aGW5ZdOtZdSCoGW6a", "B8kJW5FdMCkY", "WQqIWQLoW61OW4bKWP0JWQisoG", "W7eHhmkhWPndW6ldP1e", "ASonW7f0k1xdQKrq", "W5tcKqHIEmouWPGnW7jY", "nSoYWPpcI8oTWQewW4VdO8oAWO0", "FJLShSojW7T7W43dPY7dHCoN", "b381WPJdOG", "ah/cHdpcNSorW7HFfmoXWOBdNmkx", "C8kbW7ZcK0ldJJFdQmkS", "ud1RW53cP2pcPCooW7RcVmkIoG", "WO/dK8oaW4j3WRVcI8k+wCoK", "jCkNtcVdTq", "WQhdHvbFpCkwnxpcMY9Xh8k1", "WQZdHmk1WOzFW4xdT8o/W7zTWQGyuq", "zSolWRvbchqVW6xdSmkYW77dGKq"];
  return pg = function() {
    return g;
  }, pg();
}
function rA(g, I) {
  const t = pg();
  return rA = function(A, e) {
    A = A - (-2903 * 2 + -6488 * -1 + 1 * -381);
    let o = t[A];
    if (rA.UBMQWG === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      rA.eqfHyQ = a, g = arguments, rA.UBMQWG = !0;
    }
    const C = t[2567 + -109 * 22 + -169 * 1], B = A + C, Q = g[B];
    return Q ? o = Q : (rA.zmUNzC === void 0 && (rA.zmUNzC = !0), o = rA.eqfHyQ(o, e), g[B] = o), o;
  }, rA(g, I);
}
(function(g, I) {
  const t = g();
  function A(C, B, Q, a, n) {
    return rA(a - -388, n);
  }
  function e(C, B, Q, a, n) {
    return rA(C - 128, n);
  }
  function o(C, B, Q, a, n) {
    return rA(n - -213, C);
  }
  function i(C, B, Q, a, n) {
    return rA(B - -822, Q);
  }
  for (; ; )
    try {
      if (-parseInt(A(-48, -56, -67, -61, "RwUw")) / 1 * (parseInt(A(-73, -64, -82, -71, "zVo6")) / 2) + parseInt(e(453, 442, 463, 466, "oObm")) / 3 * (-parseInt(o("^8[V", 96, 106, 106, 101)) / 4) + -parseInt(i(-497, -501, "IaKT", -495, -502)) / 5 + parseInt(e(447, 436, 459, 439, "gZ2z")) / 6 * (parseInt(A(-63, -72, -66, -64, "CCIl")) / 7) + parseInt(A(-55, -71, -67, -65, "CCIl")) / 8 + -parseInt(i(-507, -500, "#^G^", -504, -507)) / 9 + parseInt(o("IaKT", 82, 93, 90, 88)) / 10 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(pg, 116068 * 1 + -101219 + -14 * -10025);
function Ra({ assetsDirectoryPath: g, bramble: I }) {
  const [t, A] = GA(), e = t !== void (73 * 62 + 3453 * -1 + -1073);
  tA(() => {
    async function C() {
      function B(a, n, s, x, r) {
        return rA(n - -374, s);
      }
      await I[B(-65, -71, "LkXo")](uC(g));
      function Q(a, n, s, x, r) {
        return rA(a - 527, n);
      }
      A(I[B(-64, -70, "LLRG") + Q(853, "XPE5") + Q(829, "(K9z") + "t"]());
    }
    C();
  }, [I, g, A]);
  const o = {};
  function i(C, B, Q, a, n) {
    return rA(a - -219, B);
  }
  return o[i(88, "so&[", 90, 96) + i(91, "WKLd", 101, 89)] = t, o[i(90, "ctsy", 88, 101) + "sh"] = e, o;
}
var yC = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(yC || {});
const _0 = {};
_0.SIMD = "simd", _0.NO_SIMD = "no-simd";
const vo = _0, $0 = {};
$0.Lower = "Lower", $0.Higher = "Higher";
const AI = $0, ng = {};
ng.VISIBLE = "VISIBLE", ng.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", ng.HIDDEN = "HIDDEN";
const mg = ng;
function sA(g, I) {
  var t = Gg();
  return sA = function(A, e) {
    A = A - (9825 + -182 * 52);
    var o = t[A];
    if (sA.gfVWFJ === void 0) {
      var i = function(n) {
        for (var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", r = "", d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (var w = 0, R = x.length; w < R; w++)
          r += "%" + ("00" + x.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(r);
      }, C = function(n, s) {
        var x = [], r = 0, d, h = "";
        n = i(n);
        var E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (var u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      sA.MYCXUQ = C, g = arguments, sA.gfVWFJ = !0;
    }
    var B = t[0], Q = A + B, a = g[Q];
    return a ? o = a : (sA.vJNcSW === void 0 && (sA.vJNcSW = !0), o = sA.MYCXUQ(o, e), g[Q] = o), o;
  }, sA(g, I);
}
function Gg() {
  var g = ["gadcHCkDBalcMa", "WOFdKsHAvvCaWOhdGSkTW7RcQG", "WRhdM8orW4FcTmovfwu", "Be7dRs3cGXq0", "wcqDWQyPc8kKW5VcPGBcISol", "W6hcGCkyW5OZW4VdICo8WRNcOCkbW5i", "iHD6WOxdMW", "WRLccJPKW5xdVGHjvN1cW6m", "g8keWQtcRmopW69G", "yYbZWPddS8kTW4ZcS8o7WOGnW7LW", "W57dH8kTttZdHmoPkW", "W7uYwb14bsOvExKnWQ1toa", "wI0sWQ8Sa8oEW73cLWFcOSoqya", "s0jgW5KB", "WRhdMCkWWRpdHSkoDKFdILVcNZhdMq", "heBcG8kltGxcNZS", "W6KCWPmYWR3dKCk7WQRdONRcHSo0", "bJ41W4bCWQldT8o+WRBcPmoqbCk0", "WQbjqc7cVLtdVa1kl8oFWRb9", "xmokpSoSe0ZcKvK", "xx1vWPah", "W60BELnRW7xdK1aAvSkEW7nE", "ChJdKY5VE3S", "W53dGCo7c1dcL8k5uCoXW6S0WPldUCol", "qIFdJ0xdK8kkFxNcMuPupIq"];
  return Gg = function() {
    return g;
  }, Gg();
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return sA(n - 853, a);
  }
  function A(Q, a, n, s, x) {
    return sA(a - 290, s);
  }
  var e = g();
  function o(Q, a, n, s, x) {
    return sA(x - 222, n);
  }
  function i(Q, a, n, s, x) {
    return sA(x - 893, Q);
  }
  function C(Q, a, n, s, x) {
    return sA(Q - -951, x);
  }
  for (; ; )
    try {
      var B = parseInt(i("C2mV", 1262, 1273, 1276, 1266)) / 1 + -parseInt(C(-585, -574, -598, -583, "b1nj")) / 2 + parseInt(A(668, 668, 670, "]3[(", 672)) / 3 * (-parseInt(t(1224, "l6$d", 1236, 1226, 1237)) / 4) + parseInt(A(647, 651, 651, "C0W*", 662)) / 5 * (-parseInt(C(-581, -590, -582, -579, "6S4o")) / 6) + -parseInt(C(-580, -577, -572, -586, "GDBj")) / 7 * (parseInt(o(579, 580, "C2mV", 593, 587)) / 8) + parseInt(o(590, 586, "6R]x", 601, 590)) / 9 + -parseInt(o(598, 596, "%XfZ", 578, 585)) / 10 * (-parseInt(o(591, 596, "p5iw", 607, 594)) / 11);
      if (B === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Gg, -457514 * 1 + -1313257 + -23 * -118795);
function Sa({ crosshatch: g }) {
  function I(A, e, o, i, C) {
    return sA(e - -712, i);
  }
  function t(A, e, o, i, C) {
    return sA(o - -728, C);
  }
  return g != null && g[t(-355, -344, -347, -349, "]3[(") + "id"] ? AI[I(-357, -345, -333, "FE!o") + "r"] : AI[t(-359, -359, -354, -361, "fzsP")];
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return nA(Q - -989, B);
  }
  const A = g();
  function e(C, B, Q, a, n) {
    return nA(Q - -944, B);
  }
  function o(C, B, Q, a, n) {
    return nA(a - 193, C);
  }
  function i(C, B, Q, a, n) {
    return nA(n - 48, Q);
  }
  for (; ; )
    try {
      if (-parseInt(t(-487, "RZ!R", -474, -467, -469)) / 1 + -parseInt(t(-489, "GYWr", -484, -481, -471)) / 2 * (-parseInt(o("fIzT", 701, 704, 696, 689)) / 3) + parseInt(t(-475, "c)E8", -485, -475, -485)) / 4 * (parseInt(e(-428, "b&!Q", -425, -436, -424)) / 5) + -parseInt(e(-443, "ks4s", -435, -432, -436)) / 6 * (-parseInt(i(552, 557, "q(09", 542, 554)) / 7) + parseInt(e(-428, "S$QA", -444, -460, -460)) / 8 + parseInt(e(-408, "X&@x", -419, -428, -403)) / 9 + -parseInt(o("fb2H", 715, 702, 710, 706)) / 10 === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(bg, 246 * -1063 + 617031 + 7515);
function nA(g, I) {
  const t = bg();
  return nA = function(A, e) {
    A = A - (8092 + 4129 * 1 + 11723 * -1);
    let o = t[A];
    if (nA.umhmFB === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      nA.OpxtlF = a, g = arguments, nA.umhmFB = !0;
    }
    const C = t[-3 * 1454 + 37 * 155 + -1 * 1373], B = A + C, Q = g[B];
    return Q ? o = Q : (nA.EMzKQQ === void 0 && (nA.EMzKQQ = !0), o = nA.OpxtlF(o, e), g[B] = o), o;
  }, nA(g, I);
}
function Ma({ assetsDirectoryPath: g, children: I, bramble: t }) {
  const A = {};
  function e(r, d, h, E, u) {
    return nA(r - -718, u);
  }
  A[e(-198, -202, -213, -193, "CSju") + "le"] = t;
  function o(r, d, h, E, u) {
    return nA(d - -392, h);
  }
  A[e(-217, -202, -224, -232, "S$QA") + e(-189, -203, -186, -189, "!p4D") + n(866, 862, 872, 859, "fIzT") + a(-158, -161, -164, "c)E8")] = g;
  const { sunfish: i, crosshatch: C } = Ra(A), B = {};
  function Q(r, d, h, E, u) {
    return nA(h - -119, d);
  }
  function a(r, d, h, E, u) {
    return nA(r - -657, E);
  }
  B[e(-204, -190, -220, -213, "#$Ok") + Q(406, "S$QA", 397)] = C;
  function n(r, d, h, E, u) {
    return nA(d - 360, u);
  }
  const s = yA(() => ({ redfin: Sa(B), sunfish: i, crosshatch: C, bramble: t }), [i, C, t]), x = {};
  return x[o(122, 115, "Q9#q")] = s, x[n(873, 881, 877, 887, "bG*E") + o(119, 121, "bG*E")] = I, D(Dg[n(878, 872, 867, 856, "b5eV") + o(108, 106, "!p4D")], x);
}
function bg() {
  const g = ["WOFdPCo2weH5cG", "lCkpdZ5iW5apW5f5WQ8gh8kO", "g3jatmkKW77cUcxcN8kiWOS", "WP7cIqJdIGJdRg/cHSkvtxTyW40", "d8o4WQWOW4y", "zSo4WOzxgSoxtmoRWQ3dRZ4", "AdddMmk9u8kYCG", "B8oObCkJsWtcVW", "WOxcRSkokdunymkwoupcIuZcVq", "lszqW6/cMa", "W41kha", "W4PjsSohWR0", "db4sWQ0PvmopWOXIxt3dJa", "WPhcPveucW", "yCo8W7qgW4yiW6nkDt/dKuHjlW", "i8k/WQ40amkqjZ1gWQZdQXddQG", "ihfJfNldNw4", "WQxcR8oTo8o5", "W5XhgYxdHa", "WP0ie8kdW78RrCo/dCkAW740fG", "BCoZo3VdN8o1W6r4WOxcV33cOG", "tCoAbshcMg/dHJfUmeaaW7NdUq", "WR/dUrdcVCkDm8ozhq7dGmoEWRVcSq", "i0jpaxRdIv4", "WR/dVXxcUmkDn8oxeXldVmoIWOtcLq", "j8oXW63dKLdcNIC", "WOtcV8kWAmkG", "WPpcNSkR", "t8oztMu", "W43dSrzfuSocbmk1W7rzWR41WPi", "WPJcT1ysfW", "W5FdQ8ovA3K"];
  return bg = function() {
    return g;
  }, bg();
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return uA(Q - -223, a);
  }
  var A = g();
  function e(Q, a, n, s, x) {
    return uA(x - 611, n);
  }
  function o(Q, a, n, s, x) {
    return uA(n - -908, s);
  }
  function i(Q, a, n, s, x) {
    return uA(a - 227, Q);
  }
  function C(Q, a, n, s, x) {
    return uA(a - 208, x);
  }
  for (; ; )
    try {
      var B = -parseInt(C(426, 418, 426, 425, "pw$*")) / 1 * (parseInt(C(423, 431, 422, 430, "]eUi")) / 2) + parseInt(t(-3, "D8fv", 6, 5, -6)) / 3 + parseInt(t(-8, "!72Y", -2, -9, -9)) / 4 + parseInt(i("5iIJ", 438, 432, 443, 438)) / 5 + parseInt(i("Gv2J", 441, 442, 444, 436)) / 6 + parseInt(i("UJJx", 436, 438, 428, 434)) / 7 + parseInt(e(821, 829, "nv(8", 821, 823)) / 8 * (-parseInt(o(-681, -688, -690, "gQRf", -682)) / 9);
      if (B === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(kg, 6 * -6229 + -28351 * 1 + 216208);
function kg() {
  var g = ["W4pcH8kbq1JcUSkfDSostt5Wua", "WPHEWPVcO8kQf8k4W5BdM8kEseddUa", "WOXqtmoiW5ZcNwtcI8o8B8otvmoE", "W6RcNX3cKCkFymoYW7uVAx9z", "udnzW4FdNCkCW51XW57cSaqGbW", "W7FcL8krW4qDWQtdSNqnWRhcL8on", "WOPKlCkmWQ/cICoC", "W5ueWRFcQGHACG", "WROMWQPWWROuyq", "WR9uWQ8OkSkcW4jQW5xdVCkw", "FSkpdwdcKG7dKmoQu8ksW7WWfq", "WPfQW7CRrJdcLMpcImkpWOW", "t2pdGLhcPXfVnYTYemo/WRW", "WRywW4NdQCkoFmk2", "W5X4W6mkW4qVAcpdJSo2BmolEa", "WQC9ySoehmo/WQLwWQ0SW4RdQCks", "pbDEwSkXW5qwuCkKCmonpq", "kSkVW5fqdgJcUCkaWQKCkuq"];
  return kg = function() {
    return g;
  }, kg();
}
function uA(g, I) {
  var t = kg();
  return uA = function(A, e) {
    A = A - 208;
    var o = t[A];
    if (uA.mdwaUc === void 0) {
      var i = function(n) {
        for (var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", r = "", d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (var w = 0, R = x.length; w < R; w++)
          r += "%" + ("00" + x.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(r);
      }, C = function(n, s) {
        var x = [], r = 0, d, h = "";
        n = i(n);
        var E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (var u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      uA.SeUfat = C, g = arguments, uA.mdwaUc = !0;
    }
    var B = t[-1250 * 7 + -6746 + -4 * -3874], Q = A + B, a = g[Q];
    return a ? o = a : (uA.JzBATx === void 0 && (uA.JzBATx = !0), o = uA.SeUfat(o, e), g[Q] = o), o;
  }, uA(g, I);
}
function La({ analytics: g, crosshatch: I }) {
  return I !== void (-7839 + 661 * 13 + -754) && !I.isAnalyticsDisabled ? g : void (-1 * -3529 + -66 * 19 + -2275);
}
function Ja({ analytics: g, appKey: I, redfin: t, crosshatch: A, bramble: e }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = La(o);
  return tA(() => {
    i && i.init(I);
  }, [i, I]), tA(() => {
    A && (console.info("Analytics is " + (A.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, e.getCustomerName()));
  }, [i, e, A, t]), tA(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function Ya({
  analytics: g,
  appKey: I,
  children: t
}) {
  const { redfin: A, crosshatch: e, bramble: o } = Mt(), i = Ja({ analytics: g, redfin: A, appKey: I, crosshatch: e, bramble: o }), C = yA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ D(ug.Provider, { value: C, children: t });
}
const wC = Ft(null), JI = () => {
  const g = we(wC);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, va = ({
  assetsDirectoryPath: g,
  cameraFacing: I,
  captureMode: t,
  onPhotoTaken: A,
  sessionToken: e,
  thresholds: o
}) => {
  const i = LI() ? lg.REAR : lg.FRONT;
  return {
    onPhotoTaken: A,
    cameraFacing: I ?? i,
    captureMode: t ?? nC.AUTO_CAPTURE,
    assetsDirectoryPath: uC(g),
    sessionToken: e,
    thresholds: {
      confidenceThreshold: (o == null ? void 0 : o.confidenceThreshold) ?? ga,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? ia,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? Ca,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Ba,
      hotspotsScoreThreshold: (o == null ? void 0 : o.hotspotsScoreThreshold) ?? Qa,
      sizeSmallThreshold: (o == null ? void 0 : o.sizeSmallThreshold) ?? Ia,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? oa
    }
  };
}, Wa = ({
  cameraOptions: g,
  children: I
}) => {
  const t = yA(() => va(g), [g]);
  return /* @__PURE__ */ D(wC.Provider, { value: t, children: I });
};
function Ua({ cameraResolution: g, detectionDetails: I, isImageMirror: t }) {
  const { thresholds: A } = JI(), { redfin: e } = Mt(), o = UA(null);
  if (tA(() => {
    if (!(o != null && o.current))
      return;
    o.current.width = g.width, o.current.height = g.height, Kn(o.current);
    const d = wg(g), h = DC(
      g,
      A.outOfBoundsThreshold,
      d
    ), E = rC(g);
    I.value && (Ga({
      canvas: o.current,
      polygon: I.value.processedImage.detection,
      color: "red"
    }), f0(o.current, d, "lime"), f0(o.current, h, "yellow"), f0(o.current, E, "blue"));
  }, [g, I.value, A.outOfBoundsThreshold]), !I.value)
    return null;
  const {
    avgFps: i,
    detectionTime: C,
    fps: B,
    processedImage: { detection: Q, instructionCode: a, invalidValidators: n },
    resolution: s,
    samVersion: x
  } = I.value, r = {
    Confidence: Q.confidence,
    "Smallest edge": Q.smallestEdge,
    Brightness: Q.brightness,
    Hotspots: Q.hotspots,
    Sharpness: Q.sharpness,
    "Detection time": C,
    FPS: B,
    "Avg FPS": i,
    Tier: e,
    Instruction: a,
    Resolution: s,
    "Component version": "7.0.1"
  };
  return x && (r["SAM version"] = x), n.length > 0 && (r["Invalid validators"] = n), /* @__PURE__ */ D(
    Jn,
    {
      ref: o,
      cameraResolution: g,
      detectionDetails: r,
      isImageMirror: t
    }
  );
}
function Ka(g) {
  return /* @__PURE__ */ D("rect", { fill: "#000", ...g, rx: "2%" });
}
function Ha(g, I) {
  const [t, A] = GA(!1), e = () => A((C) => !C), o = "" + t;
  Ve(() => {
    function C() {
      if (!g.current) return;
      const n = new MutationObserver(() => {
        e();
      }), s = {};
      return s.childList = !0, s.subtree = !0, s.attributes = !0, n.observe(g.current, s), n;
    }
    function B() {
      var x;
      if (!((x = g.current) != null && x["parentElement"])) return;
      const n = new MutationObserver((r) => {
        r.find((h) => {
          for (const E of h.removedNodes)
            if (E !== (I == null ? void 0 : I.current) && E === g.current)
              return !0;
        }) && e(), r.forEach((h) => {
          h.addedNodes.forEach((E) => {
            var u;
            E !== (I == null ? void 0 : I.current) && ((u = E.parentElement) == null || u.removeChild(E));
          });
        });
      }), s = {};
      return s.childList = !0, n.observe(g.current.parentElement, s), n;
    }
    const Q = C(), a = B();
    return () => {
      a == null || a.disconnect(), Q == null || Q.disconnect();
    };
  });
  const i = {};
  return i.key = o, i;
}
const qa = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Oa({ cutOut: g, height: I, ignoreElement: t, width: A }) {
  const e = UA(null), { key: o } = Ha(e, t);
  return /* @__PURE__ */ D("div", { ref: e, style: qa, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${A} ${I}`, children: [
    /* @__PURE__ */ D("defs", { children: [
      /* @__PURE__ */ D("mask", { id: "placeholder", children: [
        /* @__PURE__ */ D("rect", { fill: "#fff", height: "100%", width: "100%" }),
        g
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
function Ta({ fullOverlay: g, ignoreElement: I, resolution: t }) {
  const A = Xn(t), e = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    Oa,
    {
      cutOut: g || /* @__PURE__ */ D(Ka, { height: e, width: o, x: i, y: C }),
      height: t.height,
      ignoreElement: I,
      width: t.width
    }
  );
}
function Za({ cameraResolution: g, children: I, detectionDetails: t, shouldMirror: A }) {
  const { redfin: e } = Mt(), { appState: o, freemiumOverlayState: i } = St(), C = UA(null), B = i !== mg.HIDDEN && e !== AI.Higher && g, Q = i === mg.VISIBLE, a = g && o === DA.RUNNING;
  return /* @__PURE__ */ D(kA, { children: [
    B && /* @__PURE__ */ D(
      Ta,
      {
        fullOverlay: Q,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ D("div", { ref: C, children: /* @__PURE__ */ D(
      Ua,
      {
        cameraResolution: g,
        detectionDetails: t,
        isImageMirror: A
      }
    ) })
  ] });
}
const ja = (g, I) => {
  const t = {};
  t.detail = I, document.dispatchEvent(new CustomEvent(g, t));
}, Tg = class Tg {
  constructor() {
    p(this, "lastDetails", {});
    p(this, "delayedTime", -4510 + -26 * -25 + -4 * -965);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Tg()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -6185 * -1 + -9579 + 3394 * 1;
  }
  isDetailChanged(I, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(I, t) {
    this.isDetailChanged(I, t) && ja(I, t);
  }
  dispatchDelayedCustomEventOnChange(I, t, A) {
    const e = performance.now();
    e - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, t), this.delayedTime = e);
  }
};
p(Tg, "_instance");
let dt = Tg;
const Lt = dt.getInstance(), pC = (g, I, t = On) => {
  const A = {};
  A.instructionCode = I;
  const e = A;
  Lt.dispatchDelayedCustomEventOnChange(g, e, t);
}, Wo = (g, I) => {
  Lt.dispatchCustomEventOnChange(g, I);
}, Va = (g, I) => {
  Lt.dispatchCustomEventOnChange(g, I);
}, Pa = (g, I) => {
  const t = {};
  t.size = I;
  const A = t;
  Lt.dispatchCustomEventOnChange(g, A);
}, Xa = (g, I, t) => {
  const A = I.confidence < t ? void 0 : I, e = {};
  e.detectedObject = A;
  const o = e;
  Lt.dispatchCustomEventOnChange(g, o);
}, za = (g, I) => {
  if (fa()) {
    const t = {};
    t.candidateSelectionImages = I;
    const A = t;
    dt.getInstance().dispatchCustomEventOnChange(g, A);
  }
}, _a = (g, I) => {
  const { cameraResolution: t, shouldCameraMirror: A } = I;
  tA(() => {
    if (!t) return;
    const e = {};
    e.cameraResolution = t, e.isMirroring = A, Va(g, e);
  }, [t, A, g]);
}, $a = (g) => g === XA.CONTROL ? !LI() : !0, Ax = (g, I) => {
  const { appState: t, handleAppStateChange: A, handleError: e, isCameraReady: o } = St(), [i, C] = GA(), B = yA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? $a(g);
  }, [I, i, g, o]);
  tA(() => {
    const a = () => {
      t !== DA.LOADING && A(DA.RUNNING);
    }, n = () => {
      C(i === void 0 ? !B : !i);
    }, s = async () => {
      if (I) {
        A(DA.LOADING);
        try {
          await I.switchCamera(), A(DA.RUNNING);
        } catch (r) {
          if (r instanceof Error) {
            e(K.fromCameraError(r));
            return;
          }
        }
        C(void 0);
      }
    }, x = (r) => {
      var d;
      switch ((d = r.detail) == null ? void 0 : d["instruction"]) {
        case c0.CONTINUE_DETECTION:
          a();
          break;
        case c0.TOGGLE_MIRROR:
          n();
          break;
        case c0.SWITCH_CAMERA:
          s();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(g, x), () => {
      document.removeEventListener(g, x);
    };
  }, [t, I, e, i, A, B, g]);
  const Q = {};
  return Q.shouldCameraMirror = B, Q;
};
async function mC() {
  return navigator.mediaDevices.enumerateDevices();
}
async function D0() {
  return (await mC()).filter((I) => I.kind === "videoinput");
}
function y0(g) {
  g.getTracks().forEach((t) => t.stop());
}
function Uo(g) {
  return g.getVideoTracks()[-14766 + -3 * -4922];
}
const ag = {};
ag.width = 1920, ag.height = 1080, ag.facingMode = lg.FRONT;
const ex = ag;
var RA;
class GC {
  constructor({ defaultVideoConstrains: I = ex, minCameraShorterSide: t = na } = {}) {
    p(this, "options");
    p(this, "availableCameraProperties", []);
    V(this, RA, null);
    const A = {};
    A.defaultVideoConstrains = I, A.minCameraShorterSide = t, this.options = A;
  }
  get mediaStream() {
    return b(this, RA);
  }
  get videoTrack() {
    if (b(this, RA)) return Uo(b(this, RA));
  }
  get isCameraActive() {
    var I;
    return !!((I = b(this, RA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(I);
    y0(t);
  }
  async open(I = {}) {
    Yo() && await z0(-5020 + -1 * -6527 + -1057), T(this, RA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await D0();
    if (I.length <= -1 * -1731 + 44 * -199 + 1 * 7026) return;
    const t = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), e = I.findIndex((C) => C.deviceId === A.deviceId), o = I[e + 1] ?? I[-13 * -470 + 762 + 2 * -3436], i = this.getConstraints(t, o);
    this.close(), await this.open(i);
  }
  close() {
    b(this, RA) && (y0(b(this, RA)), T(this, RA, null));
  }
  async getProperties() {
    const I = await this.getDeviceName(), t = this.getSettings(), A = { ...t };
    A.deviceName = I;
    const e = {};
    return e.currentCameraProperties = A, e.availableCameraProperties = this.availableCameraProperties, e;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const I = this.getSettings();
    if (!I.width) throw new K("Video width is undefined");
    if (!I.height) throw new K("Video height is undefined");
    const t = {};
    return t.width = I.width, t.height = I.height, t;
  }
  async getDeviceName() {
    const I = this.getSettings(), t = await mC(), A = t.find((e) => e.deviceId === I.deviceId);
    return A == null ? void 0 : A.label;
  }
  async getBestCameraInfo(I) {
    if (I !== lg.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return LI() ? (await D0()).find((A) => A.label.includes("back") && A.label.includes("0")) : void (-1 * 3823 + -557 * 9 + 8836);
  }
  async collectAvailableCamerasInfo() {
    const I = await D0();
    for (const t of I) {
      Yo() && await z0(-1 * 281 + 5138 + -4407);
      try {
        const A = {};
        A.deviceId = t.deviceId, A.width = 480;
        const e = {};
        e.video = A;
        const o = await navigator.mediaDevices.getUserMedia(e), i = Uo(o);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const C = i.getSettings(), B = { ...C };
        B.deviceName = i.label;
        const Q = {};
        Q.cameraProperties = B;
        const a = Q;
        this.availableCameraProperties.push(a), y0(o);
      } catch (A) {
        A instanceof Error && K.logError(A);
      }
    }
  }
  getConstraints(I, t) {
    const A = { ...this.options.defaultVideoConstrains, ...I };
    A.deviceId = t ? { exact: t.deviceId } : void (-113 * 6 + 46 * -187 + 9280);
    const e = {};
    return e.video = A, e.audio = !1, e;
  }
  checkVideoTrackSettings() {
    var A;
    const I = (A = this.videoTrack) == null ? void 0 : A.getSettings();
    if (!(I != null && I.height) || !(I != null && I.width))
      throw this.close(), new K("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(I == null ? void 0 : I.width, I == null ? void 0 : I.height) < this.options.minCameraShorterSide)
      throw this.close(), new K("Could not init video because of low camera resolution: " + I.width + "x" + I.height + ".");
  }
}
RA = new WeakMap();
class tx {
  constructor(I, t) {
    this.videoHandler = I, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(I = {}) {
    await GC.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, t);
    await this.cameraHandler.open(A), ca() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
  }
  takePhoto() {
    var e;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const I = (e = this.cameraHandler.videoTrack) == null ? void 0 : e.getSettings();
    if (!(I != null && I.width)) throw new K("Cant take photo - video width is undefined");
    if (!(I != null && I.height)) throw new K("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = I.width, t.height = I.height;
    const A = t.getContext("2d");
    if (!A) throw new K("Cant take photo - cant create context");
    return A.drawImage(this.videoHandler.videoElement, 11790 + -1310 * 9, 9386 + 1447 * 1 + -10833), { image: t, timestamp: Date.now() };
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
var ZA;
class gx {
  constructor(I) {
    V(this, ZA);
    T(this, ZA, I);
  }
  get videoElement() {
    return b(this, ZA);
  }
  async play(I) {
    b(this, ZA).srcObject = I, await b(this, ZA).play();
  }
  stop() {
    b(this, ZA).srcObject = null;
  }
  hasSrcObject() {
    return !!b(this, ZA).srcObject;
  }
}
ZA = new WeakMap();
function Ix(g) {
  const I = UA(null), t = UA(), { handleError: A, setIsCameraReady: e } = St(), [o, i] = GA(), C = zA((Q) => {
    i((a) => la(Q, a));
  }, []);
  tA(() => ((async () => {
    if (!I.current) {
      A(new K("Something went wrong during video initialization"));
      return;
    }
    const a = new gx(I.current), n = new GC(), s = new tx(a, n);
    try {
      const x = {};
      x.facingMode = g, await s.startVideoStream(x);
    } catch (x) {
      if (x instanceof Error) {
        A(K.fromCameraError(x));
        return;
      }
    }
    e(!0), C(s.getCameraResolution()), t.current = s;
  })(), function() {
    t.current && t.current.stopStreaming(), e(!1);
  }), [g, A, e, I, C]);
  const B = {};
  return B.cameraService = t.current, B.cameraResolution = o, B.onCameraResolutionChange = C, B.videoRef = I, B;
}
function ox(g, I) {
  tA(() => {
    if (!g.current) return;
    const t = new ResizeObserver((A) => {
      const [e] = A;
      Pa(I, e.contentRect);
    });
    return t.observe(g.current), () => {
      t.disconnect();
    };
  }, [g, I]);
}
var ix = Symbol.for("preact-signals");
function YI() {
  if (Me > 6446 + -1 * -9857 + -16302)
    Me--;
  else {
    for (var g, I = !1; void (-338 + -8428 * -1 + -8090) !== Et; ) {
      var t = Et;
      for (Et = void (8737 * -1 + 9484 + -747), eI++; void (3949 + -1 * 1161 + -2788) !== t; ) {
        var A = t.o;
        if (t.o = void (-953 + 4189 * -1 + 1714 * 3), t.f &= -3, !(7390 + 436 * -13 + -1714 & t.f) && NC(t)) try {
          t.c();
        } catch (e) {
          !I && (g = e, I = !0);
        }
        t = A;
      }
    }
    if (eI = 3 * -1018 + 3 * 2657 + 4917 * -1, Me--, I) throw g;
  }
}
var U = void (-1 * 5262 + -3038 + 8300), Et = void 0, Me = 9865 + 219 * 41 + -18844, eI = 215 * 39 + 8566 * -1 + 181, Ng = 0;
function bC(g) {
  if (void (-2 * 64 + 76 * -131 + 10084) !== U) {
    var I = g.n;
    if (void (-4 * 1904 + 140 + 7476) === I || I.t !== U)
      return I = { i: 0, S: g, p: U.s, n: void (-2019 * -3 + 5875 + -314 * 38), t: U, e: void (-1 * -3137 + -2366 * 1 + 771 * -1), x: void (-442 * 22 + 9571 + 153), r: I }, void (-5107 * -1 + 2627 * 2 + -10361) !== U.s && (U.s.n = I), U.s = I, g.n = I, 2774 * -1 + -793 * 5 + -61 * -111 & U.f && g.S(I), I;
    if (-(-4 * 713 + 2789 * -2 + 8431) === I.i)
      return I.i = -1 * -3259 + 4227 + -7486, I.n !== void 0 && (I.n.p = I.p, void (-1 * 3769 + 7919 + 2075 * -2) !== I.p && (I.p.n = I.n), I.p = U.s, I.n = void (7851 + -361 * -17 + -13988), U.s.n = I, U.s = I), I;
  }
}
function BA(g) {
  this.v = g, this.i = -6 * 1229 + -3 * 2326 + 14352, this.n = void (217 * 6 + -7560 + -1043 * -6), this.t = void (1359 * -7 + 1 * -3023 + 3134 * 4);
}
BA.prototype.brand = ix, BA.prototype.h = function() {
  return !(-14089 + -73 * -193);
}, BA.prototype.S = function(g) {
  this.t !== g && void (-1 * 827 + -932 * -5 + 3833 * -1) === g.e && (g.x = this.t, void (636 * -2 + 2331 * 1 + -1059) !== this.t && (this.t.e = g), this.t = g);
}, BA.prototype.U = function(g) {
  if (void (8077 + 41 * -197) !== this.t) {
    var I = g.e, t = g.x;
    void (210 * 29 + 16 * -547 + 2662) !== I && (I.x = t, g.e = void (7679 * 1 + -377 * 4 + -6171)), void (-976 + 1 * -6031 + 7007) !== t && (t.e = I, g.x = void (-19 * -412 + -2612 + -5216)), g === this.t && (this.t = t);
  }
}, BA.prototype.subscribe = function(g) {
  var I = this;
  return WI(function() {
    var t = I.value, A = U;
    U = void (-63 * -143 + -6266 + 211 * -13);
    try {
      g(t);
    } finally {
      U = A;
    }
  });
}, BA.prototype.valueOf = function() {
  return this.value;
}, BA.prototype.toString = function() {
  return this.value + "";
}, BA.prototype.toJSON = function() {
  return this.value;
}, BA.prototype.peek = function() {
  var g = U;
  U = void (-1157 * 7 + 8057 + -3 * -14);
  try {
    return this.value;
  } finally {
    U = g;
  }
}, Object.defineProperty(BA.prototype, "value", { get: function() {
  var g = bC(this);
  return g !== void 0 && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if (eI > -59 * 109 + -772 + 7303) throw new Error("Cycle detected");
    this.v = g, this.i++, Ng++, Me++;
    try {
      for (var I = this.t; void (1381 + -1 * -7123 + 2126 * -4) !== I; I = I.x) I.t.N();
    } finally {
      YI();
    }
  }
} });
function kC(g) {
  return new BA(g);
}
function NC(g) {
  for (var I = g.s; void (14397 + -1 * 14397) !== I; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !(3884 * 2 + -1538 + -6230);
  return !(-614 * -3 + 7884 + -9725);
}
function FC(g) {
  for (var I = g.s; void (-1 * 563 + 2806 + -2243) !== I; I = I.n) {
    var t = I.S.n;
    if (void (-5936 + -75 * 97 + 1 * 13211) !== t && (I.r = t), I.S.n = I, I.i = -(14066 + 97 * -145), void (-5 * -228 + 9237 * 1 + -3459 * 3) === I.n) {
      g.s = I;
      break;
    }
  }
}
function RC(g) {
  for (var I = g.s, t = void (-185 * 54 + -3229 * -1 + 1 * 6761); void (-4895 + -445 * -11) !== I; ) {
    var A = I.p;
    -(4 * -995 + 3968 * 2 + -3955) === I.i ? (I.S.U(I), void (-15960 + -420 * -38) !== A && (A.n = I.n), void (6430 * 1 + -4112 + -2318) !== I.n && (I.n.p = A)) : t = I, I.S.n = I.r, void (211 * 35 + 448 * -3 + -6041 * 1) !== I.r && (I.r = void (6758 + -1427 * 3 + -2477 * 1)), I = A;
  }
  g.s = t;
}
function Fe(g) {
  BA.call(this, void (2 * 2541 + -9317 + -847 * -5)), this.x = g, this.s = void 0, this.g = Ng - (-231 + -232 * -1), this.f = 3 * -2133 + -3 * 1291 + 1 * 10276;
}
(Fe.prototype = new BA()).h = function() {
  if (this.f &= -(1 * 6414 + -338 * 18 + -327), 3 * 439 + -6161 + 4845 & this.f) return !(4619 + 2 * -2309);
  if (2185 + -1314 * 6 + 5731 == (-9909 + 502 * -13 + 16471 & this.f)) return !(19 * 208 + -1 * -8566 + -12518 * 1);
  if (this.f &= -(-13811 + -11 * -1256), this.g === Ng) return !(-2472 + 206 * 12);
  if (this.g = Ng, this.f |= 1 * -2653 + 9877 * -1 + 3 * 4177, this.i > 3391 + -3899 * -2 + -67 * 167 && !NC(this)) return this.f &= -2, !(-1 * -289 + 3005 + -3294);
  var g = U;
  try {
    FC(this), U = this;
    var I = this.x();
    (-383 * 7 + -2790 + -1 * -5487 & this.f || this.v !== I || 8972 + 8521 * 1 + -17493 === this.i) && (this.v = I, this.f &= -(14 * -637 + -3727 + -2 * -6331), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return U = g, RC(this), this.f &= -(-5741 + -5743 * -1), !(4130 + 9743 * -1 + 5613);
}, Fe.prototype.S = function(g) {
  if (void (-2169 * 2 + 41 * 47 + 2411) === this.t) {
    this.f |= -11 * 31 + 2801 * -2 + 5979;
    for (var I = this.s; I !== void 0; I = I.n) I.S.S(I);
  }
  BA.prototype.S.call(this, g);
}, Fe.prototype.U = function(g) {
  if (void (1 * -8864 + -111 * 49 + 14303) !== this.t && (BA.prototype.U.call(this, g), this.t === void 0)) {
    this.f &= -(1 * 499 + 5993 + -2153 * 3);
    for (var I = this.s; void (1175 + -1 * 1175) !== I; I = I.n) I.S.U(I);
  }
}, Fe.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 1 * -9343 + 8761 + 588;
    for (var g = this.t; void (3550 + -53 * 31 + -1907) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(Fe.prototype, "value", { get: function() {
  if (-9393 * -1 + -7639 + 1 * -1753 & this.f) throw new Error("Cycle detected");
  var g = bC(this);
  if (this.h(), void (1 * -2099 + -2659 + -366 * -13) !== g && (g.i = this.i), -607 * 13 + -4966 + 12873 & this.f) throw this.v;
  return this.v;
} });
function Cx(g) {
  return new Fe(g);
}
function SC(g) {
  var I = g.u;
  if (g.u = void (584 * 10 + 2955 + 1 * -8795), typeof I == "function") {
    Me++;
    var t = U;
    U = void (-202 * -29 + 5917 + 3925 * -3);
    try {
      I();
    } catch (A) {
      throw g.f &= -(7 * -244 + -5208 + 6918), g.f |= -30 * 265 + -1389 + 9347 * 1, vI(g), A;
    } finally {
      U = t, YI();
    }
  }
}
function vI(g) {
  for (var I = g.s; void (-1 * -3739 + -5298 + 1559) !== I; I = I.n) I.S.U(I);
  g.x = void (-3177 * -3 + 3649 + -13180), g.s = void (5 * -979 + 174 * -17 + 7853 * 1), SC(g);
}
function Bx(g) {
  if (U !== this) throw new Error("Out-of-order effect");
  RC(this), U = g, this.f &= -(-4537 * -1 + 113 * 66 + 179 * -67), -2918 + -38 * -77 & this.f && vI(this), YI();
}
function Ct(g) {
  this.x = g, this.u = void (11 * -234 + 1 * 9118 + -4 * 1636), this.s = void (-1 * 101 + -3 * 389 + 1268), this.o = void (8 * 667 + 439 * 4 + -7092), this.f = 3346 + -8433 * -1 + -11747;
}
Ct.prototype.c = function() {
  var g = this.S();
  try {
    if (53 * 51 + 2866 * 2 + -8427 & this.f || void (851 + 37 * -23) === this.x) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, Ct.prototype.S = function() {
  if (6168 + 2731 * 3 + 718 * -20 & this.f) throw new Error("Cycle detected");
  this.f |= 4087 * -1 + -108 * 43 + 8732, this.f &= -(-3889 + -2 * 3140 + -7 * -1454), SC(this), FC(this), Me++;
  var g = U;
  return U = this, Bx.bind(this, g);
}, Ct.prototype.N = function() {
  !(112 * 70 + -6421 + 109 * -13 & this.f) && (this.f |= -42 * 41 + 2 * 1436 + -1148, this.o = Et, Et = this);
}, Ct.prototype.d = function() {
  this.f |= -11041 + 1 * 11049, 16 * -514 + 1496 + 6729 & this.f || vI(this);
};
function WI(g) {
  var I = new Ct(g);
  try {
    I.c();
  } catch (t) {
    throw I.d(), t;
  }
  return I.d.bind(I);
}
var w0;
function Se(g, I) {
  k[g] = I.bind(null, k[g] || function() {
  });
}
function Vt(g) {
  w0 && w0(), w0 = g && g.S();
}
function MC(g) {
  var I = this, t = g.data, A = LC(t);
  A.value = t;
  var e = yA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 6601 + 4 * 367 + -8065;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !xi(e.peek()) && 142 * -1 + 617 * -11 + 2 * 3466 === ((i = I.base) == null ? void (-8098 + -4049 * -2) : i.nodeType) ? I.base.data = e.peek() : (I.__$f |= 1877 * -1 + -1394 + 3272, I.setState({}));
    }, Cx(function() {
      var i = A.value.value;
      return 7044 + -4 * 1761 === i ? -5305 + 1003 * 1 + 4302 : !(-1717 + -1 * 8574 + 10291) === i ? "" : i || "";
    });
  }, []);
  return e.value;
}
MC.displayName = "_st";
var tI = {};
tI.configurable = !0, tI.value = void (-1 * -643 + 128 * 55 + -7683);
var gI = {};
gI.configurable = !(-1242 + -1242 * -1), gI.value = MC;
var II = {};
II.configurable = !(-1 * -6172 + -1139 + 1 * -5033), II.get = function() {
  var g = {};
  return g.data = this, g;
};
var oI = {};
oI.configurable = !(-1 * 1294 + -2264 + 3558), oI.value = 1;
var At = {};
At.constructor = tI, At.type = gI, At.props = II, At.__b = oI, Object.defineProperties(BA.prototype, At), Se("__b", function(g, I) {
  if (typeof I.type == "string") {
    var t, A = I.props;
    for (var e in A) if (e !== "children") {
      var o = A[e];
      o instanceof BA && (t || (I.__np = t = {}), t[e] = o, A[e] = o.peek());
    }
  }
  g(I);
}), Se("__r", function(g, I) {
  Vt();
  var t, A = I.__c;
  A && (A.__$f &= -(487 * -8 + -327 * 9 + 6841), void (8361 + -646 * -3 + -3433 * 3) === (t = A.__$u) && (A.__$u = t = function(e) {
    var o;
    return WI(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= -11 * 550 + 1850 + 1 * 4201, A.setState({});
    }, o;
  }())), Vt(t), g(I);
}), Se("__e", function(g, I, t, A) {
  Vt(), g(I, t, A);
}), Se("diffed", function(g, I) {
  Vt();
  var t;
  if (typeof I.type == "string" && (t = I.__e)) {
    var A = I.__np, e = I.props;
    if (A) {
      var o = t.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (-8539 + -645 * 1 + 9184) !== C && !(i in A) && (C.d(), o[i] = void (-75 * 33 + -6446 + 8921));
      }
      else t.U = o = {};
      for (var B in A) {
        var Q = o[B], a = A[B];
        void (-1657 * -5 + -9138 + 853) === Q ? (Q = Qx(t, B, a, e), o[B] = Q) : Q.o(a, e);
      }
    }
  }
  g(I);
});
function Qx(g, I, t, A) {
  var e = I in g && g.ownerSVGElement === void 0, o = kC(t);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: WI(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, e ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
Se("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var t = I.__e;
    if (t) {
      var A = t.U;
      if (A) {
        t.U = void (-6321 * 1 + 4469 + 1852);
        for (var e in A) {
          var o = A[e];
          o && o.d();
        }
      }
    }
  } else {
    var i = I.__c;
    if (i) {
      var C = i.__$u;
      C && (i.__$u = void (-14 * 5 + -1291 + -1 * -1361), C.d());
    }
  }
  g(I);
}), Se("__h", function(g, I, t, A) {
  (A < 7848 + 89 * -107 + 1678 || A === 9) && (I.__$f |= 2), g(I, t, A);
}), mA.prototype.shouldComponentUpdate = function(g, I) {
  var t = this.__$u;
  if (!(t && void (2356 * 4 + 545 * -17 + -159) !== t.s || 8255 + -5923 * 1 + -1 * 2328 & this.__$f)) return !(1 * -9355 + 9371 + 2 * -8);
  if (5 * -1218 + -877 * -5 + 1708 & this.__$f) return !(-4905 * -1 + -571 * -3 + 2206 * -3);
  for (var A in I) return !(5270 + -23 * -419 + -14907);
  for (var e in g) if (e !== "__source" && g[e] !== this.props[e]) return !(13 * -22 + -164 * 5 + 1106);
  for (var o in this.props) if (!(o in g)) return !(-15 * -314 + 15 * -19 + 4425 * -1);
  return !(-2455 * 1 + -9530 + 922 * 13);
};
function LC(g) {
  return yA(function() {
    return kC(g);
  }, []);
}
const nx = async () => WebAssembly.validate(new Uint8Array([-4802 + 1387 * -4 + -69 * -150, -11 * 503 + -1102 * 1 + -204 * -33, -1 * -2125 + 6352 + -226 * 37, -5343 + 297 * -20 + 11392, 5617 + -1 * 5616, -1253 * 3 + 1 * -557 + 4316, 8961 + 29 * -309, 801 * -3 + 6735 + -57 * 76, 4966 + 139 * 9 + -6216, 2945 + -20 * -147 + -5880, 3325 * 3 + 6677 + -16651, 52 * 144 + -6120 + -8 * 159, 19 + -9179 * -1 + 18 * -511, -804 + -35 * -23, 59 * -61 + -123 * -64 + -4150, 9540 + -503 * -2 + -10543, -5723 + 4 * 776 + 2621, 1, 4452 + 379 * -1 + -1 * 4073, 5302 + -67 * -67 + -9781, -8127 + 79 * 103, 404 * -7 + -1252 * 4 + 7837, 8, 0, -7082 + -5 * 1408 + 14187, 3065 + -613 * 5, 350 + -1 * 97, 15, 1 * 7577 + -81 * -115 + 1 * -16639, -2311 * -1 + 8476 + 1527 * -7, 5660 + 28 * -25 + -4949]));
function ax() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(3 * 1103 + 653 * 15 + -13088);
}
function xx() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = ax();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function Ex(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const iI = {};
iI.label = ">1m", iI.time = 60;
const CI = {};
CI.label = ">45", CI.time = 45;
const BI = {};
BI.label = ">30", BI.time = 30;
function rx(g, I = [iI, CI, BI]) {
  const t = I.sort((A, e) => e.time - A.time);
  for (const A of t)
    if (g > A.time) return A.label;
  return "" + g;
}
const sx = (g) => Math.round(g / 500) * 500 / (52 * 79 + 6915 + -10023), et = (g) => g ? g <= -17 * 349 + -3819 + 9753 ? Math.round(g * (9623 * -1 + -3854 + 13497 * 1)) / (15 * 641 + -1 * -1913 + -11508) : Math.round(g / (-1254 * 3 + -9316 + -547 * -24)) * (-1 * 6442 + 2618 + 3874) : 105 * 25 + -2297 * 2 + 1969, cx = (g) => Math.round(g * (3526 + -12 * -541 + -10016 * 1)) / (51 * -191 + -35 * -148 + 4563);
function dx(g) {
  return g !== DA.RUNNING ? mg.VISIBLE : mg.VISIBLE_WITH_MASK;
}
async function hx() {
  return await nx() ? vo.SIMD : vo.NO_SIMD;
}
var ut, Zg;
class JC {
  constructor(I) {
    V(this, ut, !0);
    V(this, Zg, Date.now());
    p(this, "analytics");
    p(this, "samVersion");
    p(this, "sessionToken");
    p(this, "onDetectionCallback");
    p(this, "onCaptureCallback");
    p(this, "createProtoMessage");
    p(this, "fpsOfAllImages", new fC(3467 * 2 + -820 + -676 * 9));
    p(this, "cameraService");
    p(this, "imageProcessor");
    this.cameraService = I.cameraService, this.imageProcessor = I.imageProcessor, this.analytics = I.analytics, this.samVersion = I.samVersion, this.sessionToken = I.sessionToken, this.createProtoMessage = I.createProtoMessage, this.onDetectionCallback = I.onDetectionCallback, this.onCaptureCallback = I.onCaptureCallback;
  }
  async run() {
    for (; b(this, ut); )
      await this.iterate();
    return this;
  }
  stop() {
    T(this, ut, !1);
  }
  async trackCaptureProcess(I, t) {
    var i;
    const A = Date.now(), e = yg(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: e, captureProcessDurationInMs: A - b(this, Zg), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await hx() });
  }
  onDetection(I, t) {
    this.onDetectionCallback({ ...I, avgFps: Te(yg(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: t, detection: A }) {
    const e = {};
    e.width = t.width, e.height = t.height;
    const o = e, i = await ya(t), C = await this.cameraService.getCameraProperties(), B = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, Q = {};
    Q.sessionToken = this.sessionToken, Q.web = B;
    const a = Q, n = await this.createProtoMessage(i, a), s = {};
    s.detection = A, s.imageResolution = o;
    const x = {};
    x.image = i, x.data = s;
    const r = x;
    this.stop();
    const d = {};
    d.imageData = r, d.protoMessage = n, d.webMetadata = B, d.candidateSelectionImages = I, this.onCaptureCallback(d);
  }
  getDetectionEndTime(I) {
    return Date.now() - I;
  }
  getInvalidInstructions(I, t) {
    const A = [];
    return Array.from(I).forEach(([e, o]) => {
      !o && A.push(t[e]);
    }), A;
  }
  async sleep(I) {
    await z0(Math.max(Lo.max - I, Lo.min));
  }
}
ut = new WeakMap(), Zg = new WeakMap();
class lx extends JC {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, instructionCodeMap: e, ...o }) {
    super(o);
    p(this, "candidateSelectionTime", 8186 + -485 * -11 + -3 * 4507);
    p(this, "candidatesSelectionFramesCount", 1807 + 8501 * 1 + -2577 * 4);
    p(this, "isInCandidateSelection", !1);
    p(this, "lastImage", null);
    p(this, "bestImage", null);
    p(this, "candidateSelectionImages", []);
    p(this, "fallbackInstruction");
    p(this, "instructionCodeMap");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.instructionCodeMap = e, this.checkToInstructionCodeMap = t;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), A = await this.processTakenPhoto(t);
    this.isInCandidateSelection ? this.saveBetterImage(t, A) : this.tryInitCandidatePhase(t, A);
    const e = {};
    e.takenPhoto = t, e.imageProcessorResult = A;
    const o = this.getDetectionDetails(e);
    this.onDetection(o, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const i = {};
    i.instructionCode = o.processedImage.instructionCode, i.isValid = A.isValid, i.image = t.image, i.detection = A.detection, this.lastImage = i, await this.sleep(o.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (A) {
      throw A instanceof Error ? K.fromCameraError(A) : K.fromError(A);
    }
  }
  saveBetterImage(t, A) {
    if (!(this.bestImage && A.isValid && this.isNewImageBetter(this.bestImage.detection, A.detection))) return;
    const o = {};
    o.image = t.image, o.detection = A.detection;
    const i = o;
    this.bestImage = i, this.candidateSelectionImages.push(i);
  }
  tryInitCandidatePhase(t, A) {
    var C;
    if (!(((C = this.lastImage) == null ? void 0 : C.isValid) && A.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = A.detection;
    const i = o;
    this.isNewImageBetter(this.lastImage.detection, i.detection) ? this.bestImage = i : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, i), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 9194 + 463 * 13 + -15213 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= u0.minFrames ? t > u0.minDuration : t > u0.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: A } = this.bestImage || {};
    if (A && t) this.trackCaptureProcess(t, A), await this.onCapture({ canvasImage: A, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new K("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: A }) {
    const e = this.getDetectionEndTime(A.timestamp), o = Te((261 * 1 + -3166 + 3905) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, B = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), Q = {};
    Q.isNewDetectionValid = t.isValid, Q.newInvalidInstruction = B[0];
    const a = this.getInstructionCode(Q), n = {};
    return n.detection = t.detection, n.instructionCode = a, n.invalidValidators = B, n.isInCandidateSelection = this.isInCandidateSelection, { processedImage: n, detectionTime: e, fps: o, avgFps: Te(yg(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: A }) {
    var e;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (e = this.lastImage) != null && e.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, A) {
    return A.sharpness > t.sharpness;
  }
}
var ge, re;
class ux extends JC {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, ...e }) {
    super(e);
    V(this, ge, void (4 * -1308 + -55 * -5 + 4957 * 1));
    V(this, re);
    p(this, "fallbackInstruction");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var A, e;
    return (A = t.detail) != null && A["instruction"] ? Object.values(d0).includes((e = t.detail) == null ? void 0 : e["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    T(this, re, (t) => {
      var A;
      this.isRequestCaptureEventValid(t) && T(this, ge, (A = t.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(So.REQUEST_CAPTURE, b(this, re));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), A = await this.processTakenPhoto(t), e = this.getDetectionDetails(t, A);
    if (this.onDetection(e, t.image), this.isCaptureDone(A)) {
      await this.onCaptureDone(t.image, A.detection);
      return;
    }
    await this.sleep(e.detectionTime);
  }
  isCaptureDone(t) {
    return b(this, ge) ? b(this, ge) === d0.FIRST_FRAME ? !0 : b(this, ge) === d0.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (A) {
      throw A instanceof Error ? K.fromCameraError(A) : K.fromError(A);
    }
  }
  async onCaptureDone(t, A) {
    this.trackCaptureProcess(A, t);
    const e = {};
    e.canvasImage = t, e.detection = A, e.candidateSelectionImages = [], await this.onCapture(e), T(this, ge, void (414 * -9 + 4661 * -1 + 8387 * 1)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, A) {
    const e = this.getDetectionEndTime(t.timestamp), o = Te((-65 * 44 + -3878 + 7738) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = t.image.width, i.height = t.image.height;
    const C = i, B = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), Q = this.getInstructionCode(B[-4775 + -955 * -5]), a = {};
    return a.detection = A.detection, a.instructionCode = Q, a.invalidValidators = B, a.isInCandidateSelection = !1, { processedImage: a, detectionTime: e, fps: o, avgFps: Te(yg(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), b(this, re) && document.removeEventListener(So.REQUEST_CAPTURE, b(this, re));
  }
}
ge = new WeakMap(), re = new WeakMap();
function fx({ captureMode: g, ...I }) {
  return g === nC.AUTO_CAPTURE ? new lx(I) : new ux(I);
}
function Dx({ cameraResolution: g, cameraService: I, customEvent: t }) {
  const { shouldCameraMirror: A } = Ax(t.CONTROL, I), e = {};
  e.cameraResolution = g, e.shouldCameraMirror = A, _a(t.CAMERA_PROPS_CHANGED, e), tA(() => () => {
    dt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function yx({ cameraFacing: g, captureMode: I, checkToInstructionCodeMap: t, controller: A, createProtoMessage: e, customEvent: o, fallbackInstruction: i, instructionCodeMap: C, onCapture: B, onDetection: Q, sessionToken: a }) {
  const { appState: n, handleAppStateChange: s } = St(), { sunfish: x } = Mt(), { analytics: r } = Yn(), { cameraResolution: d, cameraService: h, onCameraResolutionChange: E, videoRef: u } = Ix(g), w = {};
  w.cameraResolution = d, w.cameraService = h, w.customEvent = o;
  const { shouldCameraMirror: R } = Dx(w), S = LC(void (-3704 + 4 * 926)), M = zA((J) => {
    s(DA.WAITING), B(J);
  }, [B, s]), y = zA((J, z) => {
    E(J.resolution), S.value = J, Q(J, z);
  }, [Q, S, E]);
  tA(() => {
    h != null && h["isStreaming"] && (A != null && A["isDetectorInitialized"]) && x && s(DA.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], A == null ? void 0 : A["isDetectorInitialized"], s, x]), tA(() => {
    if (n !== DA.RUNNING) return;
    if (!h || !A) throw new K("Cannot start detection");
    const J = {};
    J.captureMode = I, J.analytics = r, J.cameraService = h, J.imageProcessor = A.imageProcessor, J.fallbackInstruction = i, J.instructionCodeMap = C, J.checkToInstructionCodeMap = t, J.sessionToken = a, J.samVersion = A.samVersion, J.createProtoMessage = e, J.onCaptureCallback = M, J.onDetectionCallback = y;
    const z = fx(J);
    return A.runDetectionLoop(z), () => {
      A.stopDetectionLoop();
    };
  }, [n, A, h, M, y, a, S, r, e, C, t, i, I]);
  const O = {};
  return O.videoRef = u, O.cameraResolution = d, O.detectionDetails = S, O.shouldCameraMirror = R, O;
}
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, YC = {}, Ko = {}, wx = px;
function px(g, I) {
  for (var t = new Array(arguments.length - 1), A = 0, e = 2, o = !0; e < arguments.length; )
    t[A++] = arguments[e++];
  return new Promise(function(i, C) {
    t[A] = function(B) {
      if (o)
        if (o = !1, B)
          C(B);
        else {
          for (var Q = new Array(arguments.length - 1), a = 0; a < Q.length; )
            Q[a++] = arguments[a];
          i.apply(null, Q);
        }
    };
    try {
      g.apply(I || null, t);
    } catch (B) {
      o && (o = !1, C(B));
    }
  });
}
var vC = {};
(function(g) {
  var I = g;
  I.length = function(i) {
    var C = i.length;
    if (!C)
      return 0;
    for (var B = 0; --C % 4 > 1 && i.charAt(C) === "="; )
      ++B;
    return Math.ceil(i.length * 3) / 4 - B;
  };
  for (var t = new Array(64), A = new Array(123), e = 0; e < 64; )
    A[t[e] = e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e - 59 | 43] = e++;
  I.encode = function(i, C, B) {
    for (var Q = null, a = [], n = 0, s = 0, x; C < B; ) {
      var r = i[C++];
      switch (s) {
        case 0:
          a[n++] = t[r >> 2], x = (r & 3) << 4, s = 1;
          break;
        case 1:
          a[n++] = t[x | r >> 4], x = (r & 15) << 2, s = 2;
          break;
        case 2:
          a[n++] = t[x | r >> 6], a[n++] = t[r & 63], s = 0;
          break;
      }
      n > 8191 && ((Q || (Q = [])).push(String.fromCharCode.apply(String, a)), n = 0);
    }
    return s && (a[n++] = t[x], a[n++] = 61, s === 1 && (a[n++] = 61)), Q ? (n && Q.push(String.fromCharCode.apply(String, a.slice(0, n))), Q.join("")) : String.fromCharCode.apply(String, a.slice(0, n));
  };
  var o = "invalid encoding";
  I.decode = function(i, C, B) {
    for (var Q = B, a = 0, n, s = 0; s < i.length; ) {
      var x = i.charCodeAt(s++);
      if (x === 61 && a > 1)
        break;
      if ((x = A[x]) === void 0)
        throw Error(o);
      switch (a) {
        case 0:
          n = x, a = 1;
          break;
        case 1:
          C[B++] = n << 2 | (x & 48) >> 4, n = x, a = 2;
          break;
        case 2:
          C[B++] = (n & 15) << 4 | (x & 60) >> 2, n = x, a = 3;
          break;
        case 3:
          C[B++] = (n & 3) << 6 | x, a = 0;
          break;
      }
    }
    if (a === 1)
      throw Error(o);
    return B - Q;
  }, I.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(vC);
var mx = g0;
function g0() {
  this._listeners = {};
}
g0.prototype.on = function(g, I, t) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: t || this
  }), this;
};
g0.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var t = this._listeners[g], A = 0; A < t.length; )
      t[A].fn === I ? t.splice(A, 1) : ++A;
  return this;
};
g0.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var t = [], A = 1; A < arguments.length; )
      t.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, t);
  }
  return this;
};
var Gx = Ho(Ho);
function Ho(g) {
  return typeof Float32Array < "u" ? function() {
    var I = new Float32Array([-0]), t = new Uint8Array(I.buffer), A = t[3] === 128;
    function e(B, Q, a) {
      I[0] = B, Q[a] = t[0], Q[a + 1] = t[1], Q[a + 2] = t[2], Q[a + 3] = t[3];
    }
    function o(B, Q, a) {
      I[0] = B, Q[a] = t[3], Q[a + 1] = t[2], Q[a + 2] = t[1], Q[a + 3] = t[0];
    }
    g.writeFloatLE = A ? e : o, g.writeFloatBE = A ? o : e;
    function i(B, Q) {
      return t[0] = B[Q], t[1] = B[Q + 1], t[2] = B[Q + 2], t[3] = B[Q + 3], I[0];
    }
    function C(B, Q) {
      return t[3] = B[Q], t[2] = B[Q + 1], t[1] = B[Q + 2], t[0] = B[Q + 3], I[0];
    }
    g.readFloatLE = A ? i : C, g.readFloatBE = A ? C : i;
  }() : function() {
    function I(A, e, o, i) {
      var C = e < 0 ? 1 : 0;
      if (C && (e = -e), e === 0)
        A(1 / e > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, i);
      else if (isNaN(e))
        A(2143289344, o, i);
      else if (e > 34028234663852886e22)
        A((C << 31 | 2139095040) >>> 0, o, i);
      else if (e < 11754943508222875e-54)
        A((C << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, o, i);
      else {
        var B = Math.floor(Math.log(e) / Math.LN2), Q = Math.round(e * Math.pow(2, -B) * 8388608) & 8388607;
        A((C << 31 | B + 127 << 23 | Q) >>> 0, o, i);
      }
    }
    g.writeFloatLE = I.bind(null, qo), g.writeFloatBE = I.bind(null, Oo);
    function t(A, e, o) {
      var i = A(e, o), C = (i >> 31) * 2 + 1, B = i >>> 23 & 255, Q = i & 8388607;
      return B === 255 ? Q ? NaN : C * (1 / 0) : B === 0 ? C * 1401298464324817e-60 * Q : C * Math.pow(2, B - 150) * (Q + 8388608);
    }
    g.readFloatLE = t.bind(null, To), g.readFloatBE = t.bind(null, Zo);
  }(), typeof Float64Array < "u" ? function() {
    var I = new Float64Array([-0]), t = new Uint8Array(I.buffer), A = t[7] === 128;
    function e(B, Q, a) {
      I[0] = B, Q[a] = t[0], Q[a + 1] = t[1], Q[a + 2] = t[2], Q[a + 3] = t[3], Q[a + 4] = t[4], Q[a + 5] = t[5], Q[a + 6] = t[6], Q[a + 7] = t[7];
    }
    function o(B, Q, a) {
      I[0] = B, Q[a] = t[7], Q[a + 1] = t[6], Q[a + 2] = t[5], Q[a + 3] = t[4], Q[a + 4] = t[3], Q[a + 5] = t[2], Q[a + 6] = t[1], Q[a + 7] = t[0];
    }
    g.writeDoubleLE = A ? e : o, g.writeDoubleBE = A ? o : e;
    function i(B, Q) {
      return t[0] = B[Q], t[1] = B[Q + 1], t[2] = B[Q + 2], t[3] = B[Q + 3], t[4] = B[Q + 4], t[5] = B[Q + 5], t[6] = B[Q + 6], t[7] = B[Q + 7], I[0];
    }
    function C(B, Q) {
      return t[7] = B[Q], t[6] = B[Q + 1], t[5] = B[Q + 2], t[4] = B[Q + 3], t[3] = B[Q + 4], t[2] = B[Q + 5], t[1] = B[Q + 6], t[0] = B[Q + 7], I[0];
    }
    g.readDoubleLE = A ? i : C, g.readDoubleBE = A ? C : i;
  }() : function() {
    function I(A, e, o, i, C, B) {
      var Q = i < 0 ? 1 : 0;
      if (Q && (i = -i), i === 0)
        A(0, C, B + e), A(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), C, B + o);
      else if (isNaN(i))
        A(0, C, B + e), A(2146959360, C, B + o);
      else if (i > 17976931348623157e292)
        A(0, C, B + e), A((Q << 31 | 2146435072) >>> 0, C, B + o);
      else {
        var a;
        if (i < 22250738585072014e-324)
          a = i / 5e-324, A(a >>> 0, C, B + e), A((Q << 31 | a / 4294967296) >>> 0, C, B + o);
        else {
          var n = Math.floor(Math.log(i) / Math.LN2);
          n === 1024 && (n = 1023), a = i * Math.pow(2, -n), A(a * 4503599627370496 >>> 0, C, B + e), A((Q << 31 | n + 1023 << 20 | a * 1048576 & 1048575) >>> 0, C, B + o);
        }
      }
    }
    g.writeDoubleLE = I.bind(null, qo, 0, 4), g.writeDoubleBE = I.bind(null, Oo, 4, 0);
    function t(A, e, o, i, C) {
      var B = A(i, C + e), Q = A(i, C + o), a = (Q >> 31) * 2 + 1, n = Q >>> 20 & 2047, s = 4294967296 * (Q & 1048575) + B;
      return n === 2047 ? s ? NaN : a * (1 / 0) : n === 0 ? a * 5e-324 * s : a * Math.pow(2, n - 1075) * (s + 4503599627370496);
    }
    g.readDoubleLE = t.bind(null, To, 0, 4), g.readDoubleBE = t.bind(null, Zo, 4, 0);
  }(), g;
}
function qo(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
function Oo(g, I, t) {
  I[t] = g >>> 24, I[t + 1] = g >>> 16 & 255, I[t + 2] = g >>> 8 & 255, I[t + 3] = g & 255;
}
function To(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function Zo(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function jo(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bx = kx;
function kx(g) {
  try {
    if (typeof jo != "function")
      return null;
    var I = jo(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var WC = {};
(function(g) {
  var I = g;
  I.length = function(t) {
    for (var A = 0, e = 0, o = 0; o < t.length; ++o)
      e = t.charCodeAt(o), e < 128 ? A += 1 : e < 2048 ? A += 2 : (e & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, A += 4) : A += 3;
    return A;
  }, I.read = function(t, A, e) {
    var o = e - A;
    if (o < 1)
      return "";
    for (var i = null, C = [], B = 0, Q; A < e; )
      Q = t[A++], Q < 128 ? C[B++] = Q : Q > 191 && Q < 224 ? C[B++] = (Q & 31) << 6 | t[A++] & 63 : Q > 239 && Q < 365 ? (Q = ((Q & 7) << 18 | (t[A++] & 63) << 12 | (t[A++] & 63) << 6 | t[A++] & 63) - 65536, C[B++] = 55296 + (Q >> 10), C[B++] = 56320 + (Q & 1023)) : C[B++] = (Q & 15) << 12 | (t[A++] & 63) << 6 | t[A++] & 63, B > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, C)), B = 0);
    return i ? (B && i.push(String.fromCharCode.apply(String, C.slice(0, B))), i.join("")) : String.fromCharCode.apply(String, C.slice(0, B));
  }, I.write = function(t, A, e) {
    for (var o = e, i, C, B = 0; B < t.length; ++B)
      i = t.charCodeAt(B), i < 128 ? A[e++] = i : i < 2048 ? (A[e++] = i >> 6 | 192, A[e++] = i & 63 | 128) : (i & 64512) === 55296 && ((C = t.charCodeAt(B + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (C & 1023), ++B, A[e++] = i >> 18 | 240, A[e++] = i >> 12 & 63 | 128, A[e++] = i >> 6 & 63 | 128, A[e++] = i & 63 | 128) : (A[e++] = i >> 12 | 224, A[e++] = i >> 6 & 63 | 128, A[e++] = i & 63 | 128);
    return e - o;
  };
})(WC);
var Nx = Fx;
function Fx(g, I, t) {
  var A = t || 8192, e = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > e)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var B = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), B;
  };
}
var p0, Vo;
function Rx() {
  if (Vo)
    return p0;
  Vo = 1, p0 = I;
  var g = pe();
  function I(o, i) {
    this.lo = o >>> 0, this.hi = i >>> 0;
  }
  var t = I.zero = new I(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var A = I.zeroHash = "\0\0\0\0\0\0\0\0";
  I.fromNumber = function(o) {
    if (o === 0)
      return t;
    var i = o < 0;
    i && (o = -o);
    var C = o >>> 0, B = (o - C) / 4294967296 >>> 0;
    return i && (B = ~B >>> 0, C = ~C >>> 0, ++C > 4294967295 && (C = 0, ++B > 4294967295 && (B = 0))), new I(C, B);
  }, I.from = function(o) {
    if (typeof o == "number")
      return I.fromNumber(o);
    if (g.isString(o))
      if (g.Long)
        o = g.Long.fromString(o);
      else
        return I.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new I(o.low >>> 0, o.high >>> 0) : t;
  }, I.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var i = ~this.lo + 1 >>> 0, C = ~this.hi >>> 0;
      return i || (C = C + 1 >>> 0), -(i + C * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, I.prototype.toLong = function(o) {
    return g.Long ? new g.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var e = String.prototype.charCodeAt;
  return I.fromHash = function(o) {
    return o === A ? t : new I(
      (e.call(o, 0) | e.call(o, 1) << 8 | e.call(o, 2) << 16 | e.call(o, 3) << 24) >>> 0,
      (e.call(o, 4) | e.call(o, 5) << 8 | e.call(o, 6) << 16 | e.call(o, 7) << 24) >>> 0
    );
  }, I.prototype.toHash = function() {
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
  }, I.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, I.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, I.prototype.length = function() {
    var o = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, C = this.hi >>> 24;
    return C === 0 ? i === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : C < 128 ? 9 : 10;
  }, p0;
}
var Po;
function pe() {
  return Po || (Po = 1, function(g) {
    var I = g;
    I.asPromise = wx, I.base64 = vC, I.EventEmitter = mx, I.float = Gx, I.inquire = bx, I.utf8 = WC, I.pool = Nx, I.LongBits = Rx(), I.isNode = !!(typeof Be < "u" && Be && Be.process && Be.process.versions && Be.process.versions.node), I.global = I.isNode && Be || typeof window < "u" && window || typeof self < "u" && self || Be, I.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), I.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), I.isInteger = Number.isInteger || /* istanbul ignore next */
    function(e) {
      return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    }, I.isString = function(e) {
      return typeof e == "string" || e instanceof String;
    }, I.isObject = function(e) {
      return e && typeof e == "object";
    }, I.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    I.isSet = function(e, o) {
      var i = e[o];
      return i != null && e.hasOwnProperty(o) ? typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1;
    }, I.Buffer = function() {
      try {
        var e = I.inquire("buffer").Buffer;
        return e.prototype.utf8Write ? e : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), I._Buffer_from = null, I._Buffer_allocUnsafe = null, I.newBuffer = function(e) {
      return typeof e == "number" ? I.Buffer ? I._Buffer_allocUnsafe(e) : new I.Array(e) : I.Buffer ? I._Buffer_from(e) : typeof Uint8Array > "u" ? e : new Uint8Array(e);
    }, I.Array = typeof Uint8Array < "u" ? Uint8Array : Array, I.Long = /* istanbul ignore next */
    I.global.dcodeIO && /* istanbul ignore next */
    I.global.dcodeIO.Long || /* istanbul ignore next */
    I.global.Long || I.inquire("long"), I.key2Re = /^true|false|0|1$/, I.key32Re = /^-?(?:0|[1-9][0-9]*)$/, I.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, I.longToHash = function(e) {
      return e ? I.LongBits.from(e).toHash() : I.LongBits.zeroHash;
    }, I.longFromHash = function(e, o) {
      var i = I.LongBits.fromHash(e);
      return I.Long ? I.Long.fromBits(i.lo, i.hi, o) : i.toNumber(!!o);
    };
    function t(e, o, i) {
      for (var C = Object.keys(o), B = 0; B < C.length; ++B)
        (e[C[B]] === void 0 || !i) && (e[C[B]] = o[C[B]]);
      return e;
    }
    I.merge = t, I.lcFirst = function(e) {
      return e.charAt(0).toLowerCase() + e.substring(1);
    };
    function A(e) {
      function o(i, C) {
        if (!(this instanceof o))
          return new o(i, C);
        Object.defineProperty(this, "message", { get: function() {
          return i;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), C && t(this, C);
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
            return e;
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
    I.newError = A, I.ProtocolError = A("ProtocolError"), I.oneOfGetter = function(e) {
      for (var o = {}, i = 0; i < e.length; ++i)
        o[e[i]] = 1;
      return function() {
        for (var C = Object.keys(this), B = C.length - 1; B > -1; --B)
          if (o[C[B]] === 1 && this[C[B]] !== void 0 && this[C[B]] !== null)
            return C[B];
      };
    }, I.oneOfSetter = function(e) {
      return function(o) {
        for (var i = 0; i < e.length; ++i)
          e[i] !== o && delete this[e[i]];
      };
    }, I.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, I._configure = function() {
      var e = I.Buffer;
      if (!e) {
        I._Buffer_from = I._Buffer_allocUnsafe = null;
        return;
      }
      I._Buffer_from = e.from !== Uint8Array.from && e.from || /* istanbul ignore next */
      function(o, i) {
        return new e(o, i);
      }, I._Buffer_allocUnsafe = e.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new e(o);
      };
    };
  }(Ko)), Ko;
}
var UC = L, bA = pe(), QI, I0 = bA.LongBits, Xo = bA.base64, zo = bA.utf8;
function Jt(g, I, t) {
  this.fn = g, this.len = I, this.next = void 0, this.val = t;
}
function UI() {
}
function Sx(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function L() {
  this.len = 0, this.head = new Jt(UI, 0, 0), this.tail = this.head, this.states = null;
}
var KC = function() {
  return bA.Buffer ? function() {
    return (L.create = function() {
      return new QI();
    })();
  } : function() {
    return new L();
  };
};
L.create = KC();
L.alloc = function(g) {
  return new bA.Array(g);
};
bA.Array !== Array && (L.alloc = bA.pool(L.alloc, bA.Array.prototype.subarray));
L.prototype._push = function(g, I, t) {
  return this.tail = this.tail.next = new Jt(g, I, t), this.len += I, this;
};
function KI(g, I, t) {
  I[t] = g & 255;
}
function Mx(g, I, t) {
  for (; g > 127; )
    I[t++] = g & 127 | 128, g >>>= 7;
  I[t] = g;
}
function HI(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
HI.prototype = Object.create(Jt.prototype);
HI.prototype.fn = Mx;
L.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new HI(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
L.prototype.int32 = function(g) {
  return g < 0 ? this._push(qI, 10, I0.fromNumber(g)) : this.uint32(g);
};
L.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function qI(g, I, t) {
  for (; g.hi; )
    I[t++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[t++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[t++] = g.lo;
}
L.prototype.uint64 = function(g) {
  var I = I0.from(g);
  return this._push(qI, I.length(), I);
};
L.prototype.int64 = L.prototype.uint64;
L.prototype.sint64 = function(g) {
  var I = I0.from(g).zzEncode();
  return this._push(qI, I.length(), I);
};
L.prototype.bool = function(g) {
  return this._push(KI, 1, g ? 1 : 0);
};
function nI(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
L.prototype.fixed32 = function(g) {
  return this._push(nI, 4, g >>> 0);
};
L.prototype.sfixed32 = L.prototype.fixed32;
L.prototype.fixed64 = function(g) {
  var I = I0.from(g);
  return this._push(nI, 4, I.lo)._push(nI, 4, I.hi);
};
L.prototype.sfixed64 = L.prototype.fixed64;
L.prototype.float = function(g) {
  return this._push(bA.float.writeFloatLE, 4, g);
};
L.prototype.double = function(g) {
  return this._push(bA.float.writeDoubleLE, 8, g);
};
var Lx = bA.Array.prototype.set ? function(g, I, t) {
  I.set(g, t);
} : function(g, I, t) {
  for (var A = 0; A < g.length; ++A)
    I[t + A] = g[A];
};
L.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(KI, 1, 0);
  if (bA.isString(g)) {
    var t = L.alloc(I = Xo.length(g));
    Xo.decode(g, t, 0), g = t;
  }
  return this.uint32(I)._push(Lx, I, g);
};
L.prototype.string = function(g) {
  var I = zo.length(g);
  return I ? this.uint32(I)._push(zo.write, I, g) : this._push(KI, 1, 0);
};
L.prototype.fork = function() {
  return this.states = new Sx(this), this.head = this.tail = new Jt(UI, 0, 0), this.len = 0, this;
};
L.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Jt(UI, 0, 0), this.len = 0), this;
};
L.prototype.ldelim = function() {
  var g = this.head, I = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = g.next, this.tail = I, this.len += t), this;
};
L.prototype.finish = function() {
  for (var g = this.head.next, I = this.constructor.alloc(this.len), t = 0; g; )
    g.fn(g.val, I, t), t += g.len, g = g.next;
  return I;
};
L._configure = function(g) {
  QI = g, L.create = KC(), QI._configure();
};
var Jx = WA, HC = UC;
(WA.prototype = Object.create(HC.prototype)).constructor = WA;
var Ie = pe();
function WA() {
  HC.call(this);
}
WA._configure = function() {
  WA.alloc = Ie._Buffer_allocUnsafe, WA.writeBytesBuffer = Ie.Buffer && Ie.Buffer.prototype instanceof Uint8Array && Ie.Buffer.prototype.set.name === "set" ? function(g, I, t) {
    I.set(g, t);
  } : function(g, I, t) {
    if (g.copy)
      g.copy(I, t, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[t++] = g[A++];
  };
};
WA.prototype.bytes = function(g) {
  Ie.isString(g) && (g = Ie._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(WA.writeBytesBuffer, I, g), this;
};
function Yx(g, I, t) {
  g.length < 40 ? Ie.utf8.write(g, I, t) : I.utf8Write ? I.utf8Write(g, t) : I.write(g, t);
}
WA.prototype.string = function(g) {
  var I = Ie.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(Yx, I, g), this;
};
WA._configure();
var qC = _, KA = pe(), aI, OC = KA.LongBits, vx = KA.utf8;
function MA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function _(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var _o = typeof Uint8Array < "u" ? function(g) {
  if (g instanceof Uint8Array || Array.isArray(g))
    return new _(g);
  throw Error("illegal buffer");
} : function(g) {
  if (Array.isArray(g))
    return new _(g);
  throw Error("illegal buffer");
}, TC = function() {
  return KA.Buffer ? function(g) {
    return (_.create = function(I) {
      return KA.Buffer.isBuffer(I) ? new aI(I) : _o(I);
    })(g);
  } : _o;
};
_.create = TC();
_.prototype._slice = KA.Array.prototype.subarray || /* istanbul ignore next */
KA.Array.prototype.slice;
_.prototype.uint32 = /* @__PURE__ */ function() {
  var g = 4294967295;
  return function() {
    if (g = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (g = (g | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return g;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, MA(this, 10);
    return g;
  };
}();
_.prototype.int32 = function() {
  return this.uint32() | 0;
};
_.prototype.sint32 = function() {
  var g = this.uint32();
  return g >>> 1 ^ -(g & 1) | 0;
};
function m0() {
  var g = new OC(0, 0), I = 0;
  if (this.len - this.pos > 4) {
    for (; I < 4; ++I)
      if (g.lo = (g.lo | (this.buf[this.pos] & 127) << I * 7) >>> 0, this.buf[this.pos++] < 128)
        return g;
    if (g.lo = (g.lo | (this.buf[this.pos] & 127) << 28) >>> 0, g.hi = (g.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return g;
    I = 0;
  } else {
    for (; I < 3; ++I) {
      if (this.pos >= this.len)
        throw MA(this);
      if (g.lo = (g.lo | (this.buf[this.pos] & 127) << I * 7) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
    return g.lo = (g.lo | (this.buf[this.pos++] & 127) << I * 7) >>> 0, g;
  }
  if (this.len - this.pos > 4) {
    for (; I < 5; ++I)
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
  } else
    for (; I < 5; ++I) {
      if (this.pos >= this.len)
        throw MA(this);
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
  throw Error("invalid varint encoding");
}
_.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Fg(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
_.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw MA(this, 4);
  return Fg(this.buf, this.pos += 4);
};
_.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw MA(this, 4);
  return Fg(this.buf, this.pos += 4) | 0;
};
function $o() {
  if (this.pos + 8 > this.len)
    throw MA(this, 8);
  return new OC(Fg(this.buf, this.pos += 4), Fg(this.buf, this.pos += 4));
}
_.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw MA(this, 4);
  var g = KA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
_.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw MA(this, 4);
  var g = KA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
_.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, t = this.pos + g;
  if (t > this.len)
    throw MA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, t) : I === t ? new this.buf.constructor(0) : this._slice.call(this.buf, I, t);
};
_.prototype.string = function() {
  var g = this.bytes();
  return vx.read(g, 0, g.length);
};
_.prototype.skip = function(g) {
  if (typeof g == "number") {
    if (this.pos + g > this.len)
      throw MA(this, g);
    this.pos += g;
  } else
    do
      if (this.pos >= this.len)
        throw MA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
_.prototype.skipType = function(g) {
  switch (g) {
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
      for (; (g = this.uint32() & 7) !== 4; )
        this.skipType(g);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + g + " at offset " + this.pos);
  }
  return this;
};
_._configure = function(g) {
  aI = g, _.create = TC(), aI._configure();
  var I = KA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  KA.merge(_.prototype, {
    int64: function() {
      return m0.call(this)[I](!1);
    },
    uint64: function() {
      return m0.call(this)[I](!0);
    },
    sint64: function() {
      return m0.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return $o.call(this)[I](!0);
    },
    sfixed64: function() {
      return $o.call(this)[I](!1);
    }
  });
};
var Wx = ye, ZC = qC;
(ye.prototype = Object.create(ZC.prototype)).constructor = ye;
var Ai = pe();
function ye(g) {
  ZC.call(this, g);
}
ye._configure = function() {
  Ai.Buffer && (ye.prototype._slice = Ai.Buffer.prototype.slice);
};
ye.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
ye._configure();
var jC = {}, Ux = ht, OI = pe();
(ht.prototype = Object.create(OI.EventEmitter.prototype)).constructor = ht;
function ht(g, I, t) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  OI.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!t;
}
ht.prototype.rpcCall = function g(I, t, A, e, o) {
  if (!e)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return OI.asPromise(g, i, I, t, A, e);
  if (!i.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return i.rpcImpl(
      I,
      t[i.requestDelimited ? "encodeDelimited" : "encode"](e).finish(),
      function(C, B) {
        if (C)
          return i.emit("error", C, I), o(C);
        if (B === null) {
          i.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(B instanceof A))
          try {
            B = A[i.responseDelimited ? "decodeDelimited" : "decode"](B);
          } catch (Q) {
            return i.emit("error", Q, I), o(Q);
          }
        return i.emit("data", B, I), o(null, B);
      }
    );
  } catch (C) {
    i.emit("error", C, I), setTimeout(function() {
      o(C);
    }, 0);
    return;
  }
};
ht.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = Ux;
})(jC);
var Kx = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = UC, I.BufferWriter = Jx, I.Reader = qC, I.BufferReader = Wx, I.util = pe(), I.rpc = jC, I.roots = Kx, I.configure = t;
  function t() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  t();
})(YC);
var W = YC;
const f = W.Reader, P = W.Writer, l = W.util, c = W.roots.default || (W.roots.default = {}), Ze = c.dot = (() => {
  const g = {};
  return g.Content = function() {
    function I(t) {
      if (t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.token = l.newBuffer([]), I.prototype.iv = l.newBuffer([]), I.prototype.schemaVersion = 0, I.prototype.bytes = l.newBuffer([]), I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      return A || (A = P.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.token), t.iv != null && Object.hasOwnProperty.call(t, "iv") && A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(t.iv), t.schemaVersion != null && Object.hasOwnProperty.call(t, "schemaVersion") && A.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(t.schemaVersion), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && A.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(t.bytes), A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.Content();
      for (; t.pos < e; ) {
        let i = t.uint32();
        switch (i >>> 3) {
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
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let A = new c.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, A.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (A.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, A.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (A.iv = t.iv)), t.schemaVersion != null && (A.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, A.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (A.bytes = t.bytes)), A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      return A.defaults && (A.bytes === String ? e.token = "" : (e.token = [], A.bytes !== Array && (e.token = l.newBuffer(e.token))), A.bytes === String ? e.iv = "" : (e.iv = [], A.bytes !== Array && (e.iv = l.newBuffer(e.iv))), e.schemaVersion = 0, A.bytes === String ? e.bytes = "" : (e.bytes = [], A.bytes !== Array && (e.bytes = l.newBuffer(e.bytes)))), t.token != null && t.hasOwnProperty("token") && (e.token = A.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : A.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (e.iv = A.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : A.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (e.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (e.bytes = A.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, W.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, I;
  }(), g.v4 = function() {
    const I = {};
    return I.MagnifEyeLivenessContent = function() {
      function t(A) {
        if (this.images = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.images = l.emptyArray, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.images != null && A.images.length)
          for (let o = 0; o < A.images.length; ++o)
            c.dot.Image.encode(A.images[o], e.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(c.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let e = 0; e < A.images.length; ++e) {
            let o = c.dot.Image.verify(A.images[e]);
            if (o)
              return "images." + o;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MagnifEyeLivenessContent)
          return A;
        let e = new c.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          e.images = [];
          for (let o = 0; o < A.images.length; ++o) {
            if (typeof A.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            e.images[o] = c.dot.Image.fromObject(A.images[o]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if ((e.arrays || e.defaults) && (o.images = []), e.defaults && (o.metadata = null), A.images && A.images.length) {
          o.images = [];
          for (let i = 0; i < A.images.length; ++i)
            o.images[i] = c.dot.Image.toObject(A.images[i], e);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), I.Metadata = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let A;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: l.oneOfGetter(A = ["sessionToken"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: l.oneOfGetter(A = ["web", "android", "ios"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.platform != null && Object.hasOwnProperty.call(e, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.platform), e.web != null && Object.hasOwnProperty.call(e, "web") && c.dot.v4.WebMetadata.encode(e.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.android != null && Object.hasOwnProperty.call(e, "android") && c.dot.v4.AndroidMetadata.encode(e.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.ios != null && Object.hasOwnProperty.call(e, "ios") && c.dot.v4.IosMetadata.encode(e.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), e.sessionToken != null && Object.hasOwnProperty.call(e, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(e.sessionToken), e.componentVersion != null && Object.hasOwnProperty.call(e, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(e.componentVersion), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.Metadata();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.platform = e.int32();
              break;
            }
            case 5: {
              C.sessionToken = e.string();
              break;
            }
            case 6: {
              C.componentVersion = e.string();
              break;
            }
            case 2: {
              C.web = c.dot.v4.WebMetadata.decode(e, e.uint32());
              break;
            }
            case 3: {
              C.android = c.dot.v4.AndroidMetadata.decode(e, e.uint32());
              break;
            }
            case 4: {
              C.ios = c.dot.v4.IosMetadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        let o = {};
        if (e.platform != null && e.hasOwnProperty("platform"))
          switch (e.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (e.sessionToken != null && e.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !l.isString(e.sessionToken)))
          return "sessionToken: string expected";
        if (e.componentVersion != null && e.hasOwnProperty("componentVersion") && !l.isString(e.componentVersion))
          return "componentVersion: string expected";
        if (e.web != null && e.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let i = c.dot.v4.WebMetadata.verify(e.web);
            if (i)
              return "web." + i;
          }
        }
        if (e.android != null && e.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = c.dot.v4.AndroidMetadata.verify(e.android);
            if (i)
              return "android." + i;
          }
        }
        if (e.ios != null && e.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = c.dot.v4.IosMetadata.verify(e.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Metadata)
          return e;
        let o = new c.dot.v4.Metadata();
        switch (e.platform) {
          default:
            if (typeof e.platform == "number") {
              o.platform = e.platform;
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
        if (e.sessionToken != null && (o.sessionToken = String(e.sessionToken)), e.componentVersion != null && (o.componentVersion = String(e.componentVersion)), e.web != null) {
          if (typeof e.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = c.dot.v4.WebMetadata.fromObject(e.web);
        }
        if (e.android != null) {
          if (typeof e.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = c.dot.v4.AndroidMetadata.fromObject(e.android);
        }
        if (e.ios != null) {
          if (typeof e.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = c.dot.v4.IosMetadata.fromObject(e.ios);
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.platform = o.enums === String ? "WEB" : 0, i.componentVersion = ""), e.platform != null && e.hasOwnProperty("platform") && (i.platform = o.enums === String ? c.dot.Platform[e.platform] === void 0 ? e.platform : c.dot.Platform[e.platform] : e.platform), e.web != null && e.hasOwnProperty("web") && (i.web = c.dot.v4.WebMetadata.toObject(e.web, o), o.oneofs && (i.metadata = "web")), e.android != null && e.hasOwnProperty("android") && (i.android = c.dot.v4.AndroidMetadata.toObject(e.android, o), o.oneofs && (i.metadata = "android")), e.ios != null && e.hasOwnProperty("ios") && (i.ios = c.dot.v4.IosMetadata.toObject(e.ios, o), o.oneofs && (i.metadata = "ios")), e.sessionToken != null && e.hasOwnProperty("sessionToken") && (i.sessionToken = e.sessionToken, o.oneofs && (i._sessionToken = "sessionToken")), e.componentVersion != null && e.hasOwnProperty("componentVersion") && (i.componentVersion = e.componentVersion), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Metadata";
      }, t;
    }(), I.AndroidMetadata = function() {
      function t(e) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.supportedAbis = l.emptyArray, t.prototype.device = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.dynamicCameraFrameProperties = l.emptyObject;
      let A;
      return Object.defineProperty(t.prototype, "_device", {
        get: l.oneOfGetter(A = ["device"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        if (o || (o = P.create()), e.supportedAbis != null && e.supportedAbis.length)
          for (let i = 0; i < e.supportedAbis.length; ++i)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(e.supportedAbis[i]);
        if (e.device != null && Object.hasOwnProperty.call(e, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.device), e.digests != null && e.digests.length)
          for (let i = 0; i < e.digests.length; ++i)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[i]);
        if (e.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(e, "dynamicCameraFrameProperties"))
          for (let i = Object.keys(e.dynamicCameraFrameProperties), C = 0; C < i.length; ++C)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[C]), c.dot.Int32List.encode(e.dynamicCameraFrameProperties[i[C]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i)
            c.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[i], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.AndroidMetadata(), B, Q;
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              C.supportedAbis && C.supportedAbis.length || (C.supportedAbis = []), C.supportedAbis.push(e.string());
              break;
            }
            case 2: {
              C.device = e.string();
              break;
            }
            case 3: {
              C.digests && C.digests.length || (C.digests = []), C.digests.push(e.bytes());
              break;
            }
            case 5: {
              C.digestsWithTimestamp && C.digestsWithTimestamp.length || (C.digestsWithTimestamp = []), C.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              C.dynamicCameraFrameProperties === l.emptyObject && (C.dynamicCameraFrameProperties = {});
              let n = e.uint32() + e.pos;
              for (B = "", Q = null; e.pos < n; ) {
                let s = e.uint32();
                switch (s >>> 3) {
                  case 1:
                    B = e.string();
                    break;
                  case 2:
                    Q = c.dot.Int32List.decode(e, e.uint32());
                    break;
                  default:
                    e.skipType(s & 7);
                    break;
                }
              }
              C.dynamicCameraFrameProperties[B] = Q;
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.supportedAbis != null && e.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(e.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < e.supportedAbis.length; ++o)
            if (!l.isString(e.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (e.device != null && e.hasOwnProperty("device") && !l.isString(e.device))
          return "device: string expected";
        if (e.digests != null && e.hasOwnProperty("digests")) {
          if (!Array.isArray(e.digests))
            return "digests: array expected";
          for (let o = 0; o < e.digests.length; ++o)
            if (!(e.digests[o] && typeof e.digests[o].length == "number" || l.isString(e.digests[o])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o) {
            let i = c.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[o]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (e.dynamicCameraFrameProperties != null && e.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(e.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(e.dynamicCameraFrameProperties);
          for (let i = 0; i < o.length; ++i) {
            let C = c.dot.Int32List.verify(e.dynamicCameraFrameProperties[o[i]]);
            if (C)
              return "dynamicCameraFrameProperties." + C;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.AndroidMetadata)
          return e;
        let o = new c.dot.v4.AndroidMetadata();
        if (e.supportedAbis) {
          if (!Array.isArray(e.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let i = 0; i < e.supportedAbis.length; ++i)
            o.supportedAbis[i] = String(e.supportedAbis[i]);
        }
        if (e.device != null && (o.device = String(e.device)), e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let i = 0; i < e.digests.length; ++i)
            typeof e.digests[i] == "string" ? l.base64.decode(e.digests[i], o.digests[i] = l.newBuffer(l.base64.length(e.digests[i])), 0) : e.digests[i].length >= 0 && (o.digests[i] = e.digests[i]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i) {
            if (typeof e.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[i] = c.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[i]);
          }
        }
        if (e.dynamicCameraFrameProperties) {
          if (typeof e.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(e.dynamicCameraFrameProperties), C = 0; C < i.length; ++C) {
            if (typeof e.dynamicCameraFrameProperties[i[C]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[i[C]] = c.dot.Int32List.fromObject(e.dynamicCameraFrameProperties[i[C]]);
          }
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        if ((o.arrays || o.defaults) && (i.supportedAbis = [], i.digests = [], i.digestsWithTimestamp = []), (o.objects || o.defaults) && (i.dynamicCameraFrameProperties = {}), e.supportedAbis && e.supportedAbis.length) {
          i.supportedAbis = [];
          for (let B = 0; B < e.supportedAbis.length; ++B)
            i.supportedAbis[B] = e.supportedAbis[B];
        }
        if (e.device != null && e.hasOwnProperty("device") && (i.device = e.device, o.oneofs && (i._device = "device")), e.digests && e.digests.length) {
          i.digests = [];
          for (let B = 0; B < e.digests.length; ++B)
            i.digests[B] = o.bytes === String ? l.base64.encode(e.digests[B], 0, e.digests[B].length) : o.bytes === Array ? Array.prototype.slice.call(e.digests[B]) : e.digests[B];
        }
        let C;
        if (e.dynamicCameraFrameProperties && (C = Object.keys(e.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let B = 0; B < C.length; ++B)
            i.dynamicCameraFrameProperties[C[B]] = c.dot.Int32List.toObject(e.dynamicCameraFrameProperties[C[B]], o);
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let B = 0; B < e.digestsWithTimestamp.length; ++B)
            i.digestsWithTimestamp[B] = c.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[B], o);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidMetadata";
      }, t;
    }(), I.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = l.emptyObject, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.isoValues = l.emptyArray, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let o = Object.keys(A.architectureInfo), i = 0; i < o.length; ++i)
            e.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o[i]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[o[i]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let o = 0; o < A.digests.length; ++o)
            e.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[o]);
        if (A.isoValues != null && A.isoValues.length) {
          e.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let o = 0; o < A.isoValues.length; ++o)
            e.int32(A.isoValues[o]);
          e.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o)
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[o], e.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.IosMetadata(), C, B;
        for (; A.pos < o; ) {
          let Q = A.uint32();
          switch (Q >>> 3) {
            case 1: {
              i.cameraModelId = A.string();
              break;
            }
            case 2: {
              i.architectureInfo === l.emptyObject && (i.architectureInfo = {});
              let a = A.uint32() + A.pos;
              for (C = "", B = !1; A.pos < a; ) {
                let n = A.uint32();
                switch (n >>> 3) {
                  case 1:
                    C = A.string();
                    break;
                  case 2:
                    B = A.bool();
                    break;
                  default:
                    A.skipType(n & 7);
                    break;
                }
              }
              i.architectureInfo[C] = B;
              break;
            }
            case 3: {
              i.digests && i.digests.length || (i.digests = []), i.digests.push(A.bytes());
              break;
            }
            case 5: {
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (Q & 7) === 2) {
                let a = A.uint32() + A.pos;
                for (; A.pos < a; )
                  i.isoValues.push(A.int32());
              } else
                i.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(Q & 7);
              break;
          }
        }
        return i;
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
          let e = Object.keys(A.architectureInfo);
          for (let o = 0; o < e.length; ++o)
            if (typeof A.architectureInfo[e[o]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let e = 0; e < A.digests.length; ++e)
            if (!(A.digests[e] && typeof A.digests[e].length == "number" || l.isString(A.digests[e])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let e = 0; e < A.digestsWithTimestamp.length; ++e) {
            let o = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[e]);
            if (o)
              return "digestsWithTimestamp." + o;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let e = 0; e < A.isoValues.length; ++e)
            if (!l.isInteger(A.isoValues[e]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.IosMetadata)
          return A;
        let e = new c.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (e.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          e.architectureInfo = {};
          for (let o = Object.keys(A.architectureInfo), i = 0; i < o.length; ++i)
            e.architectureInfo[o[i]] = !!A.architectureInfo[o[i]];
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          e.digests = [];
          for (let o = 0; o < A.digests.length; ++o)
            typeof A.digests[o] == "string" ? l.base64.decode(A.digests[o], e.digests[o] = l.newBuffer(l.base64.length(A.digests[o])), 0) : A.digests[o].length >= 0 && (e.digests[o] = A.digests[o]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          e.digestsWithTimestamp = [];
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            if (typeof A.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            e.digestsWithTimestamp[o] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[o]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          e.isoValues = [];
          for (let o = 0; o < A.isoValues.length; ++o)
            e.isoValues[o] = A.isoValues[o] | 0;
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        (e.arrays || e.defaults) && (o.digests = [], o.isoValues = [], o.digestsWithTimestamp = []), (e.objects || e.defaults) && (o.architectureInfo = {}), e.defaults && (o.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (o.cameraModelId = A.cameraModelId);
        let i;
        if (A.architectureInfo && (i = Object.keys(A.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let C = 0; C < i.length; ++C)
            o.architectureInfo[i[C]] = A.architectureInfo[i[C]];
        }
        if (A.digests && A.digests.length) {
          o.digests = [];
          for (let C = 0; C < A.digests.length; ++C)
            o.digests[C] = e.bytes === String ? l.base64.encode(A.digests[C], 0, A.digests[C].length) : e.bytes === Array ? Array.prototype.slice.call(A.digests[C]) : A.digests[C];
        }
        if (A.isoValues && A.isoValues.length) {
          o.isoValues = [];
          for (let C = 0; C < A.isoValues.length; ++C)
            o.isoValues[C] = A.isoValues[C];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let C = 0; C < A.digestsWithTimestamp.length; ++C)
            o.digestsWithTimestamp[C] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[C], e);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), I.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let o = 0; o < A.availableCameraProperties.length; ++o)
            c.dot.v4.CameraProperties.encode(A.availableCameraProperties[o], e.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            e.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[o]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let o = 0; o < A.detectionRecord.length; ++o)
            c.dot.v4.DetectedObject.encode(A.detectionRecord[o], e.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o)
            c.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[o], e.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.WebMetadata();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.currentCameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(c.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(c.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(c.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let e = c.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (e)
            return "currentCameraProperties." + e;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let e = 0; e < A.availableCameraProperties.length; ++e) {
            let o = c.dot.v4.CameraProperties.verify(A.availableCameraProperties[e]);
            if (o)
              return "availableCameraProperties." + o;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let e = 0; e < A.hashedDetectedImages.length; ++e)
            if (!l.isString(A.hashedDetectedImages[e]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let e = 0; e < A.hashedDetectedImagesWithTimestamp.length; ++e) {
            let o = c.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[e]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let e = 0; e < A.detectionRecord.length; ++e) {
            let o = c.dot.v4.DetectedObject.verify(A.detectionRecord[e]);
            if (o)
              return "detectionRecord." + o;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.WebMetadata)
          return A;
        let e = new c.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          e.currentCameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          e.availableCameraProperties = [];
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            if (typeof A.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            e.availableCameraProperties[o] = c.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[o]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          e.hashedDetectedImages = [];
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            e.hashedDetectedImages[o] = String(A.hashedDetectedImages[o]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          e.hashedDetectedImagesWithTimestamp = [];
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o) {
            if (typeof A.hashedDetectedImagesWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            e.hashedDetectedImagesWithTimestamp[o] = c.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          e.detectionRecord = [];
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            if (typeof A.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            e.detectionRecord[o] = c.dot.v4.DetectedObject.fromObject(A.detectionRecord[o]);
          }
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if ((e.arrays || e.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), e.defaults && (o.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, e)), A.availableCameraProperties && A.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let i = 0; i < A.availableCameraProperties.length; ++i)
            o.availableCameraProperties[i] = c.dot.v4.CameraProperties.toObject(A.availableCameraProperties[i], e);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let i = 0; i < A.hashedDetectedImages.length; ++i)
            o.hashedDetectedImages[i] = A.hashedDetectedImages[i];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          o.detectionRecord = [];
          for (let i = 0; i < A.detectionRecord.length; ++i)
            o.detectionRecord[i] = c.dot.v4.DetectedObject.toObject(A.detectionRecord[i], e);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < A.hashedDetectedImagesWithTimestamp.length; ++i)
            o.hashedDetectedImagesWithTimestamp[i] = c.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[i], e);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), I.HashedDetectedImageWithTimestamp = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.imageHash != null && Object.hasOwnProperty.call(A, "imageHash") && e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.imageHash), A.timestampMillis != null && Object.hasOwnProperty.call(A, "timestampMillis") && e.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(A.timestampMillis), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.HashedDetectedImageWithTimestamp();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.imageHash = A.string();
              break;
            }
            case 2: {
              i.timestampMillis = A.uint64();
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.imageHash != null && A.hasOwnProperty("imageHash") && !l.isString(A.imageHash) ? "imageHash: string expected" : A.timestampMillis != null && A.hasOwnProperty("timestampMillis") && !l.isInteger(A.timestampMillis) && !(A.timestampMillis && l.isInteger(A.timestampMillis.low) && l.isInteger(A.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return A;
        let e = new c.dot.v4.HashedDetectedImageWithTimestamp();
        return A.imageHash != null && (e.imageHash = String(A.imageHash)), A.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(A.timestampMillis)).unsigned = !0 : typeof A.timestampMillis == "string" ? e.timestampMillis = parseInt(A.timestampMillis, 10) : typeof A.timestampMillis == "number" ? e.timestampMillis = A.timestampMillis : typeof A.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(A.timestampMillis.low >>> 0, A.timestampMillis.high >>> 0).toNumber(!0))), e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if (e.defaults)
          if (o.imageHash = "", l.Long) {
            let i = new l.Long(0, 0, !0);
            o.timestampMillis = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i;
          } else
            o.timestampMillis = e.longs === String ? "0" : 0;
        return A.imageHash != null && A.hasOwnProperty("imageHash") && (o.imageHash = A.imageHash), A.timestampMillis != null && A.hasOwnProperty("timestampMillis") && (typeof A.timestampMillis == "number" ? o.timestampMillis = e.longs === String ? String(A.timestampMillis) : A.timestampMillis : o.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(A.timestampMillis) : e.longs === Number ? new l.LongBits(A.timestampMillis.low >>> 0, A.timestampMillis.high >>> 0).toNumber(!0) : A.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), I.MediaTrackSettings = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let A;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: l.oneOfGetter(A = ["aspectRatio"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: l.oneOfGetter(A = ["autoGainControl"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: l.oneOfGetter(A = ["channelCount"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: l.oneOfGetter(A = ["deviceId"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: l.oneOfGetter(A = ["displaySurface"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: l.oneOfGetter(A = ["echoCancellation"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: l.oneOfGetter(A = ["facingMode"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: l.oneOfGetter(A = ["frameRate"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: l.oneOfGetter(A = ["groupId"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_height", {
        get: l.oneOfGetter(A = ["height"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: l.oneOfGetter(A = ["noiseSuppression"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: l.oneOfGetter(A = ["sampleRate"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: l.oneOfGetter(A = ["sampleSize"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_width", {
        get: l.oneOfGetter(A = ["width"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: l.oneOfGetter(A = ["deviceName"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.aspectRatio != null && Object.hasOwnProperty.call(e, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(e.aspectRatio), e.autoGainControl != null && Object.hasOwnProperty.call(e, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(e.autoGainControl), e.channelCount != null && Object.hasOwnProperty.call(e, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(e.channelCount), e.deviceId != null && Object.hasOwnProperty.call(e, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(e.deviceId), e.displaySurface != null && Object.hasOwnProperty.call(e, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(e.displaySurface), e.echoCancellation != null && Object.hasOwnProperty.call(e, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(e.echoCancellation), e.facingMode != null && Object.hasOwnProperty.call(e, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(e.facingMode), e.frameRate != null && Object.hasOwnProperty.call(e, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(e.frameRate), e.groupId != null && Object.hasOwnProperty.call(e, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(e.groupId), e.height != null && Object.hasOwnProperty.call(e, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(e.height), e.noiseSuppression != null && Object.hasOwnProperty.call(e, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(e.noiseSuppression), e.sampleRate != null && Object.hasOwnProperty.call(e, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(e.sampleRate), e.sampleSize != null && Object.hasOwnProperty.call(e, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(e.sampleSize), e.width != null && Object.hasOwnProperty.call(e, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(e.width), e.deviceName != null && Object.hasOwnProperty.call(e, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(e.deviceName), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.MediaTrackSettings();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.aspectRatio = e.double();
              break;
            }
            case 2: {
              C.autoGainControl = e.bool();
              break;
            }
            case 3: {
              C.channelCount = e.int32();
              break;
            }
            case 4: {
              C.deviceId = e.string();
              break;
            }
            case 5: {
              C.displaySurface = e.string();
              break;
            }
            case 6: {
              C.echoCancellation = e.bool();
              break;
            }
            case 7: {
              C.facingMode = e.string();
              break;
            }
            case 8: {
              C.frameRate = e.double();
              break;
            }
            case 9: {
              C.groupId = e.string();
              break;
            }
            case 10: {
              C.height = e.int32();
              break;
            }
            case 11: {
              C.noiseSuppression = e.bool();
              break;
            }
            case 12: {
              C.sampleRate = e.int32();
              break;
            }
            case 13: {
              C.sampleSize = e.int32();
              break;
            }
            case 14: {
              C.width = e.int32();
              break;
            }
            case 15: {
              C.deviceName = e.string();
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.aspectRatio != null && e.hasOwnProperty("aspectRatio") && typeof e.aspectRatio != "number" ? "aspectRatio: number expected" : e.autoGainControl != null && e.hasOwnProperty("autoGainControl") && typeof e.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : e.channelCount != null && e.hasOwnProperty("channelCount") && !l.isInteger(e.channelCount) ? "channelCount: integer expected" : e.deviceId != null && e.hasOwnProperty("deviceId") && !l.isString(e.deviceId) ? "deviceId: string expected" : e.displaySurface != null && e.hasOwnProperty("displaySurface") && !l.isString(e.displaySurface) ? "displaySurface: string expected" : e.echoCancellation != null && e.hasOwnProperty("echoCancellation") && typeof e.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : e.facingMode != null && e.hasOwnProperty("facingMode") && !l.isString(e.facingMode) ? "facingMode: string expected" : e.frameRate != null && e.hasOwnProperty("frameRate") && typeof e.frameRate != "number" ? "frameRate: number expected" : e.groupId != null && e.hasOwnProperty("groupId") && !l.isString(e.groupId) ? "groupId: string expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : e.noiseSuppression != null && e.hasOwnProperty("noiseSuppression") && typeof e.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : e.sampleRate != null && e.hasOwnProperty("sampleRate") && !l.isInteger(e.sampleRate) ? "sampleRate: integer expected" : e.sampleSize != null && e.hasOwnProperty("sampleSize") && !l.isInteger(e.sampleSize) ? "sampleSize: integer expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.deviceName != null && e.hasOwnProperty("deviceName") && !l.isString(e.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.MediaTrackSettings)
          return e;
        let o = new c.dot.v4.MediaTrackSettings();
        return e.aspectRatio != null && (o.aspectRatio = Number(e.aspectRatio)), e.autoGainControl != null && (o.autoGainControl = !!e.autoGainControl), e.channelCount != null && (o.channelCount = e.channelCount | 0), e.deviceId != null && (o.deviceId = String(e.deviceId)), e.displaySurface != null && (o.displaySurface = String(e.displaySurface)), e.echoCancellation != null && (o.echoCancellation = !!e.echoCancellation), e.facingMode != null && (o.facingMode = String(e.facingMode)), e.frameRate != null && (o.frameRate = Number(e.frameRate)), e.groupId != null && (o.groupId = String(e.groupId)), e.height != null && (o.height = e.height | 0), e.noiseSuppression != null && (o.noiseSuppression = !!e.noiseSuppression), e.sampleRate != null && (o.sampleRate = e.sampleRate | 0), e.sampleSize != null && (o.sampleSize = e.sampleSize | 0), e.width != null && (o.width = e.width | 0), e.deviceName != null && (o.deviceName = String(e.deviceName)), o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return e.aspectRatio != null && e.hasOwnProperty("aspectRatio") && (i.aspectRatio = o.json && !isFinite(e.aspectRatio) ? String(e.aspectRatio) : e.aspectRatio, o.oneofs && (i._aspectRatio = "aspectRatio")), e.autoGainControl != null && e.hasOwnProperty("autoGainControl") && (i.autoGainControl = e.autoGainControl, o.oneofs && (i._autoGainControl = "autoGainControl")), e.channelCount != null && e.hasOwnProperty("channelCount") && (i.channelCount = e.channelCount, o.oneofs && (i._channelCount = "channelCount")), e.deviceId != null && e.hasOwnProperty("deviceId") && (i.deviceId = e.deviceId, o.oneofs && (i._deviceId = "deviceId")), e.displaySurface != null && e.hasOwnProperty("displaySurface") && (i.displaySurface = e.displaySurface, o.oneofs && (i._displaySurface = "displaySurface")), e.echoCancellation != null && e.hasOwnProperty("echoCancellation") && (i.echoCancellation = e.echoCancellation, o.oneofs && (i._echoCancellation = "echoCancellation")), e.facingMode != null && e.hasOwnProperty("facingMode") && (i.facingMode = e.facingMode, o.oneofs && (i._facingMode = "facingMode")), e.frameRate != null && e.hasOwnProperty("frameRate") && (i.frameRate = o.json && !isFinite(e.frameRate) ? String(e.frameRate) : e.frameRate, o.oneofs && (i._frameRate = "frameRate")), e.groupId != null && e.hasOwnProperty("groupId") && (i.groupId = e.groupId, o.oneofs && (i._groupId = "groupId")), e.height != null && e.hasOwnProperty("height") && (i.height = e.height, o.oneofs && (i._height = "height")), e.noiseSuppression != null && e.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = e.noiseSuppression, o.oneofs && (i._noiseSuppression = "noiseSuppression")), e.sampleRate != null && e.hasOwnProperty("sampleRate") && (i.sampleRate = e.sampleRate, o.oneofs && (i._sampleRate = "sampleRate")), e.sampleSize != null && e.hasOwnProperty("sampleSize") && (i.sampleSize = e.sampleSize, o.oneofs && (i._sampleSize = "sampleSize")), e.width != null && e.hasOwnProperty("width") && (i.width = e.width, o.oneofs && (i._width = "width")), e.deviceName != null && e.hasOwnProperty("deviceName") && (i.deviceName = e.deviceName, o.oneofs && (i._deviceName = "deviceName")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), I.ImageBitmap = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.width != null && Object.hasOwnProperty.call(A, "width") && e.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.width), A.height != null && Object.hasOwnProperty.call(A, "height") && e.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.height), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.ImageBitmap();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.width = A.int32();
              break;
            }
            case 2: {
              i.height = A.int32();
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.ImageBitmap)
          return A;
        let e = new c.dot.v4.ImageBitmap();
        return A.width != null && (e.width = A.width | 0), A.height != null && (e.height = A.height | 0), e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.width = 0, o.height = 0), A.width != null && A.hasOwnProperty("width") && (o.width = A.width), A.height != null && A.hasOwnProperty("height") && (o.height = A.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ImageBitmap";
      }, t;
    }(), I.CameraProperties = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let A;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(A = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.cameraInitFrameResolution != null && Object.hasOwnProperty.call(e, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(e.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.cameraProperties != null && Object.hasOwnProperty.call(e, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(e.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.CameraProperties();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(e, e.uint32());
              break;
            }
            case 2: {
              C.cameraProperties = c.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraInitFrameResolution != null && e.hasOwnProperty("cameraInitFrameResolution")) {
          let o = c.dot.v4.ImageBitmap.verify(e.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (e.cameraProperties != null && e.hasOwnProperty("cameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(e.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.CameraProperties)
          return e;
        let o = new c.dot.v4.CameraProperties();
        if (e.cameraInitFrameResolution != null) {
          if (typeof e.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = c.dot.v4.ImageBitmap.fromObject(e.cameraInitFrameResolution);
        }
        if (e.cameraProperties != null) {
          if (typeof e.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = c.dot.v4.MediaTrackSettings.fromObject(e.cameraProperties);
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.cameraProperties = null), e.cameraInitFrameResolution != null && e.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = c.dot.v4.ImageBitmap.toObject(e.cameraInitFrameResolution, o), o.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), e.cameraProperties != null && e.hasOwnProperty("cameraProperties") && (i.cameraProperties = c.dot.v4.MediaTrackSettings.toObject(e.cameraProperties, o)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.CameraProperties";
      }, t;
    }(), I.DetectedObject = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.brightness != null && Object.hasOwnProperty.call(A, "brightness") && e.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(A.brightness), A.sharpness != null && Object.hasOwnProperty.call(A, "sharpness") && e.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(A.sharpness), A.hotspots != null && Object.hasOwnProperty.call(A, "hotspots") && e.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(A.hotspots), A.confidence != null && Object.hasOwnProperty.call(A, "confidence") && e.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(A.confidence), A.faceSize != null && Object.hasOwnProperty.call(A, "faceSize") && e.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(A.faceSize), A.faceCenter != null && Object.hasOwnProperty.call(A, "faceCenter") && c.dot.v4.Point.encode(A.faceCenter, e.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.smallestEdge != null && Object.hasOwnProperty.call(A, "smallestEdge") && e.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(A.smallestEdge), A.bottomLeft != null && Object.hasOwnProperty.call(A, "bottomLeft") && c.dot.v4.Point.encode(A.bottomLeft, e.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.bottomRight != null && Object.hasOwnProperty.call(A, "bottomRight") && c.dot.v4.Point.encode(A.bottomRight, e.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.topLeft != null && Object.hasOwnProperty.call(A, "topLeft") && c.dot.v4.Point.encode(A.topLeft, e.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.topRight != null && Object.hasOwnProperty.call(A, "topRight") && c.dot.v4.Point.encode(A.topRight, e.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.DetectedObject();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.brightness = A.float();
              break;
            }
            case 2: {
              i.sharpness = A.float();
              break;
            }
            case 3: {
              i.hotspots = A.float();
              break;
            }
            case 4: {
              i.confidence = A.float();
              break;
            }
            case 5: {
              i.faceSize = A.float();
              break;
            }
            case 6: {
              i.faceCenter = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = A.float();
              break;
            }
            case 8: {
              i.bottomLeft = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 9: {
              i.bottomRight = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 10: {
              i.topLeft = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 11: {
              i.topRight = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.brightness != null && A.hasOwnProperty("brightness") && typeof A.brightness != "number")
          return "brightness: number expected";
        if (A.sharpness != null && A.hasOwnProperty("sharpness") && typeof A.sharpness != "number")
          return "sharpness: number expected";
        if (A.hotspots != null && A.hasOwnProperty("hotspots") && typeof A.hotspots != "number")
          return "hotspots: number expected";
        if (A.confidence != null && A.hasOwnProperty("confidence") && typeof A.confidence != "number")
          return "confidence: number expected";
        if (A.faceSize != null && A.hasOwnProperty("faceSize") && typeof A.faceSize != "number")
          return "faceSize: number expected";
        if (A.faceCenter != null && A.hasOwnProperty("faceCenter")) {
          let e = c.dot.v4.Point.verify(A.faceCenter);
          if (e)
            return "faceCenter." + e;
        }
        if (A.smallestEdge != null && A.hasOwnProperty("smallestEdge") && typeof A.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (A.bottomLeft != null && A.hasOwnProperty("bottomLeft")) {
          let e = c.dot.v4.Point.verify(A.bottomLeft);
          if (e)
            return "bottomLeft." + e;
        }
        if (A.bottomRight != null && A.hasOwnProperty("bottomRight")) {
          let e = c.dot.v4.Point.verify(A.bottomRight);
          if (e)
            return "bottomRight." + e;
        }
        if (A.topLeft != null && A.hasOwnProperty("topLeft")) {
          let e = c.dot.v4.Point.verify(A.topLeft);
          if (e)
            return "topLeft." + e;
        }
        if (A.topRight != null && A.hasOwnProperty("topRight")) {
          let e = c.dot.v4.Point.verify(A.topRight);
          if (e)
            return "topRight." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.DetectedObject)
          return A;
        let e = new c.dot.v4.DetectedObject();
        if (A.brightness != null && (e.brightness = Number(A.brightness)), A.sharpness != null && (e.sharpness = Number(A.sharpness)), A.hotspots != null && (e.hotspots = Number(A.hotspots)), A.confidence != null && (e.confidence = Number(A.confidence)), A.faceSize != null && (e.faceSize = Number(A.faceSize)), A.faceCenter != null) {
          if (typeof A.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          e.faceCenter = c.dot.v4.Point.fromObject(A.faceCenter);
        }
        if (A.smallestEdge != null && (e.smallestEdge = Number(A.smallestEdge)), A.bottomLeft != null) {
          if (typeof A.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          e.bottomLeft = c.dot.v4.Point.fromObject(A.bottomLeft);
        }
        if (A.bottomRight != null) {
          if (typeof A.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          e.bottomRight = c.dot.v4.Point.fromObject(A.bottomRight);
        }
        if (A.topLeft != null) {
          if (typeof A.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          e.topLeft = c.dot.v4.Point.fromObject(A.topLeft);
        }
        if (A.topRight != null) {
          if (typeof A.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          e.topRight = c.dot.v4.Point.fromObject(A.topRight);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), A.brightness != null && A.hasOwnProperty("brightness") && (o.brightness = e.json && !isFinite(A.brightness) ? String(A.brightness) : A.brightness), A.sharpness != null && A.hasOwnProperty("sharpness") && (o.sharpness = e.json && !isFinite(A.sharpness) ? String(A.sharpness) : A.sharpness), A.hotspots != null && A.hasOwnProperty("hotspots") && (o.hotspots = e.json && !isFinite(A.hotspots) ? String(A.hotspots) : A.hotspots), A.confidence != null && A.hasOwnProperty("confidence") && (o.confidence = e.json && !isFinite(A.confidence) ? String(A.confidence) : A.confidence), A.faceSize != null && A.hasOwnProperty("faceSize") && (o.faceSize = e.json && !isFinite(A.faceSize) ? String(A.faceSize) : A.faceSize), A.faceCenter != null && A.hasOwnProperty("faceCenter") && (o.faceCenter = c.dot.v4.Point.toObject(A.faceCenter, e)), A.smallestEdge != null && A.hasOwnProperty("smallestEdge") && (o.smallestEdge = e.json && !isFinite(A.smallestEdge) ? String(A.smallestEdge) : A.smallestEdge), A.bottomLeft != null && A.hasOwnProperty("bottomLeft") && (o.bottomLeft = c.dot.v4.Point.toObject(A.bottomLeft, e)), A.bottomRight != null && A.hasOwnProperty("bottomRight") && (o.bottomRight = c.dot.v4.Point.toObject(A.bottomRight, e)), A.topLeft != null && A.hasOwnProperty("topLeft") && (o.topLeft = c.dot.v4.Point.toObject(A.topLeft, e)), A.topRight != null && A.hasOwnProperty("topRight") && (o.topRight = c.dot.v4.Point.toObject(A.topRight, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DetectedObject";
      }, t;
    }(), I.Point = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.x != null && Object.hasOwnProperty.call(A, "x") && e.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(A.x), A.y != null && Object.hasOwnProperty.call(A, "y") && e.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(A.y), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.Point();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.x = A.float();
              break;
            }
            case 2: {
              i.y = A.float();
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.x != null && A.hasOwnProperty("x") && typeof A.x != "number" ? "x: number expected" : A.y != null && A.hasOwnProperty("y") && typeof A.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Point)
          return A;
        let e = new c.dot.v4.Point();
        return A.x != null && (e.x = Number(A.x)), A.y != null && (e.y = Number(A.y)), e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.x = 0, o.y = 0), A.x != null && A.hasOwnProperty("x") && (o.x = e.json && !isFinite(A.x) ? String(A.x) : A.x), A.y != null && A.hasOwnProperty("y") && (o.y = e.json && !isFinite(A.y) ? String(A.y) : A.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Point";
      }, t;
    }(), I.FaceContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.FaceContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.FaceContent)
          return A;
        let e = new c.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    }(), I.DocumentContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.DocumentContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.DocumentContent)
          return A;
        let e = new c.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    }(), I.Blob = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let A;
      return Object.defineProperty(t.prototype, "blob", {
        get: l.oneOfGetter(A = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.documentContent != null && Object.hasOwnProperty.call(e, "documentContent") && c.dot.v4.DocumentContent.encode(e.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceContent != null && Object.hasOwnProperty.call(e, "faceContent") && c.dot.v4.FaceContent.encode(e.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(e, "magnifeyeLivenessContent") && c.dot.v4.MagnifEyeLivenessContent.encode(e.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.smileLivenessContent != null && Object.hasOwnProperty.call(e, "smileLivenessContent") && c.dot.v4.SmileLivenessContent.encode(e.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), e.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(e, "eyeGazeLivenessContent") && c.dot.v4.EyeGazeLivenessContent.encode(e.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), e.palmContent != null && Object.hasOwnProperty.call(e, "palmContent") && c.dot.v4.PalmContent.encode(e.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.Blob();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.documentContent = c.dot.v4.DocumentContent.decode(e, e.uint32());
              break;
            }
            case 5: {
              C.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.decode(e, e.uint32());
              break;
            }
            case 2: {
              C.faceContent = c.dot.v4.FaceContent.decode(e, e.uint32());
              break;
            }
            case 3: {
              C.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.decode(e, e.uint32());
              break;
            }
            case 4: {
              C.smileLivenessContent = c.dot.v4.SmileLivenessContent.decode(e, e.uint32());
              break;
            }
            case 6: {
              C.palmContent = c.dot.v4.PalmContent.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        let o = {};
        if (e.documentContent != null && e.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let i = c.dot.v4.DocumentContent.verify(e.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (e.eyeGazeLivenessContent != null && e.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.EyeGazeLivenessContent.verify(e.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (e.faceContent != null && e.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.FaceContent.verify(e.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (e.magnifeyeLivenessContent != null && e.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.MagnifEyeLivenessContent.verify(e.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (e.smileLivenessContent != null && e.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.SmileLivenessContent.verify(e.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        if (e.palmContent != null && e.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.PalmContent.verify(e.palmContent);
            if (i)
              return "palmContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Blob)
          return e;
        let o = new c.dot.v4.Blob();
        if (e.documentContent != null) {
          if (typeof e.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = c.dot.v4.DocumentContent.fromObject(e.documentContent);
        }
        if (e.eyeGazeLivenessContent != null) {
          if (typeof e.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.fromObject(e.eyeGazeLivenessContent);
        }
        if (e.faceContent != null) {
          if (typeof e.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = c.dot.v4.FaceContent.fromObject(e.faceContent);
        }
        if (e.magnifeyeLivenessContent != null) {
          if (typeof e.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.fromObject(e.magnifeyeLivenessContent);
        }
        if (e.smileLivenessContent != null) {
          if (typeof e.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = c.dot.v4.SmileLivenessContent.fromObject(e.smileLivenessContent);
        }
        if (e.palmContent != null) {
          if (typeof e.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = c.dot.v4.PalmContent.fromObject(e.palmContent);
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return e.documentContent != null && e.hasOwnProperty("documentContent") && (i.documentContent = c.dot.v4.DocumentContent.toObject(e.documentContent, o), o.oneofs && (i.blob = "documentContent")), e.faceContent != null && e.hasOwnProperty("faceContent") && (i.faceContent = c.dot.v4.FaceContent.toObject(e.faceContent, o), o.oneofs && (i.blob = "faceContent")), e.magnifeyeLivenessContent != null && e.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.toObject(e.magnifeyeLivenessContent, o), o.oneofs && (i.blob = "magnifeyeLivenessContent")), e.smileLivenessContent != null && e.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = c.dot.v4.SmileLivenessContent.toObject(e.smileLivenessContent, o), o.oneofs && (i.blob = "smileLivenessContent")), e.eyeGazeLivenessContent != null && e.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.toObject(e.eyeGazeLivenessContent, o), o.oneofs && (i.blob = "eyeGazeLivenessContent")), e.palmContent != null && e.hasOwnProperty("palmContent") && (i.palmContent = c.dot.v4.PalmContent.toObject(e.palmContent, o), o.oneofs && (i.blob = "palmContent")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Blob";
      }, t;
    }(), I.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.segments = l.emptyArray, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.segments != null && A.segments.length)
          for (let o = 0; o < A.segments.length; ++o)
            c.dot.v4.EyeGazeLivenessSegment.encode(A.segments[o], e.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(c.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let e = 0; e < A.segments.length; ++e) {
            let o = c.dot.v4.EyeGazeLivenessSegment.verify(A.segments[e]);
            if (o)
              return "segments." + o;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessContent)
          return A;
        let e = new c.dot.v4.EyeGazeLivenessContent();
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          e.segments = [];
          for (let o = 0; o < A.segments.length; ++o) {
            if (typeof A.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            e.segments[o] = c.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[o]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if ((e.arrays || e.defaults) && (o.segments = []), e.defaults && (o.metadata = null), A.segments && A.segments.length) {
          o.segments = [];
          for (let i = 0; i < A.segments.length; ++i)
            o.segments[i] = c.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[i], e);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), I.EyeGazeLivenessSegment = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.corner != null && Object.hasOwnProperty.call(A, "corner") && e.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.corner), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.EyeGazeLivenessSegment();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.corner = A.int32();
              break;
            }
            case 2: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.corner != null && A.hasOwnProperty("corner"))
          switch (A.corner) {
            default:
              return "corner: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessSegment)
          return A;
        let e = new c.dot.v4.EyeGazeLivenessSegment();
        switch (A.corner) {
          default:
            if (typeof A.corner == "number") {
              e.corner = A.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            e.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            e.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            e.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            e.corner = 3;
            break;
        }
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.corner = e.enums === String ? "TOP_LEFT" : 0, o.image = null), A.corner != null && A.hasOwnProperty("corner") && (o.corner = e.enums === String ? c.dot.v4.EyeGazeLivenessCorner[A.corner] === void 0 ? A.corner : c.dot.v4.EyeGazeLivenessCorner[A.corner] : A.corner), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), I.EyeGazeLivenessCorner = function() {
      const t = {}, A = Object.create(t);
      return A[t[0] = "TOP_LEFT"] = 0, A[t[1] = "TOP_RIGHT"] = 1, A[t[2] = "BOTTOM_RIGHT"] = 2, A[t[3] = "BOTTOM_LEFT"] = 3, A;
    }(), I.SmileLivenessContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && c.dot.Image.encode(A.smileExpressionFaceImage, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let e = c.dot.Image.verify(A.neutralExpressionFaceImage);
          if (e)
            return "neutralExpressionFaceImage." + e;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let e = c.dot.Image.verify(A.smileExpressionFaceImage);
          if (e)
            return "smileExpressionFaceImage." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.SmileLivenessContent)
          return A;
        let e = new c.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          e.neutralExpressionFaceImage = c.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          e.smileExpressionFaceImage = c.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = c.dot.Image.toObject(A.neutralExpressionFaceImage, e)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = c.dot.Image.toObject(A.smileExpressionFaceImage, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), I.PalmContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.PalmContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.PalmContent)
          return A;
        let e = new c.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, W.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    }(), I;
  }(), g.Image = function() {
    function I(t) {
      if (t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.bytes = l.newBuffer([]), I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      return A || (A = P.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.Image();
      for (; t.pos < e; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let A = new c.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, A.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (A.bytes = t.bytes)), A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      return A.defaults && (A.bytes === String ? e.bytes = "" : (e.bytes = [], A.bytes !== Array && (e.bytes = l.newBuffer(e.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (e.bytes = A.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, W.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, I;
  }(), g.Int32List = function() {
    function I(t) {
      if (this.items = [], t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.items = l.emptyArray, I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      if (A || (A = P.create()), t.items != null && t.items.length) {
        A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let e = 0; e < t.items.length; ++e)
          A.int32(t.items[e]);
        A.ldelim();
      }
      return A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.Int32List();
      for (; t.pos < e; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (i & 7) === 2) {
              let C = t.uint32() + t.pos;
              for (; t.pos < C; )
                o.items.push(t.int32());
            } else
              o.items.push(t.int32());
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let A = 0; A < t.items.length; ++A)
          if (!l.isInteger(t.items[A]))
            return "items: integer[] expected";
      }
      return null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.Int32List)
        return t;
      let A = new c.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        A.items = [];
        for (let e = 0; e < t.items.length; ++e)
          A.items[e] = t.items[e] | 0;
      }
      return A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      if ((A.arrays || A.defaults) && (e.items = []), t.items && t.items.length) {
        e.items = [];
        for (let o = 0; o < t.items.length; ++o)
          e.items[o] = t.items[o];
      }
      return e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, W.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, I;
  }(), g.Platform = function() {
    const I = {}, t = Object.create(I);
    return t[I[0] = "WEB"] = 0, t[I[1] = "ANDROID"] = 1, t[I[2] = "IOS"] = 2, t;
  }(), g.DigestWithTimestamp = function() {
    function I(t) {
      if (t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.digest = l.newBuffer([]), I.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      return A || (A = P.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && A.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.DigestWithTimestamp();
      for (; t.pos < e; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            o.digest = t.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let A = new c.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, A.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (A.digest = t.digest)), t.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? A.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? A.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      if (A.defaults)
        if (A.bytes === String ? e.digest = "" : (e.digest = [], A.bytes !== Array && (e.digest = l.newBuffer(e.digest))), l.Long) {
          let o = new l.Long(0, 0, !0);
          e.timestampMillis = A.longs === String ? o.toString() : A.longs === Number ? o.toNumber() : o;
        } else
          e.timestampMillis = A.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (e.digest = A.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : A.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? e.timestampMillis = A.longs === String ? String(t.timestampMillis) : t.timestampMillis : e.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : A.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, W.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, I;
  }(), g;
})();
function Rg() {
  const g = ["o8kFW6WEgq", "WQODW7e", "xdtdLCoxWOe", "W601W6mQ", "WOvOWO7dRmoN", "W6tdV3ldH3G", "W74BW6G2AW", "cg7cGCkxW4NcOZ1HD8oaW5ve", "W6SrvHS", "bgvsD1a", "WO/cMs/cHSkW", "kWXGW6qDmCoKpSoZj8kGWQ4", "Eea1WPXk", "xmoJW73cOSocWPaAt2NdGSk3WRBcTW", "WONcKYBcMCk2", "iGBcQYdcOv5Lv8oFqSoAoW", "W6qjBuhcNCoiimkxcmoJqHaUW4y", "gJLxWPxcO8oYECk6", "DfeJWQro", "WQxdQCoeW5S", "W7v0WRpdO8ohDSk3WQJcGmk/yMrj", "A8oaW5WyWQakW7RcPZ7cMmkeWOhcNq", "xmoHW7pdUSkJW4jsrfy", "ySkLWPFcMmko", "b8ofz8keWO/cMmoRW6/cSW", "ySoPW5Dl", "xmoHWOpcReq", "m8kvWPPmW6y", "W5f7eSk0W71GeCkIdZfH", "omkdW6ab", "ymobW51BW6zhWRNcOdC", "s8oeCLTrq8omsviLW5W", "W7CjWQldLmk/W6ODWR9q", "mSk4WO8tW6jGWQr1uI3cQryCW4K", "cgvF", "CeddPwldPa", "ymolW5WzWQamW7dcHc3cR8k7WOJcTq", "p8o5rc1lBSkqjW", "E29NixS", "WP7cIIe", "WOWNtCoUWPi", "q8ocW7D8rSo7mCoVW6lcLs5G", "g8kooXWC", "FCk1WPVcI8kw", "W6FcT8ovW6CXWOS1WPtdQ3ZcPfvA", "msm2zcj+wSkqWRSYnmo1W7S"];
  return Rg = function() {
    return g;
  }, Rg();
}
function X(g, I) {
  const t = Rg();
  return X = function(A, e) {
    A = A - (-7276 + 6137 * 1 + -124 * -10);
    let o = t[A];
    if (X.ImXNlD === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      X.lKROzh = a, g = arguments, X.ImXNlD = !0;
    }
    const C = t[-79 * -79 + 1 * -1238 + -5003], B = A + C, Q = g[B];
    return Q ? o = Q : (X.yGHZbD === void 0 && (X.yGHZbD = !0), o = X.lKROzh(o, e), g[B] = o), o;
  }, X(g, I);
}
(function(g, I) {
  function t(B, Q, a, n, s) {
    return X(n - 428, s);
  }
  function A(B, Q, a, n, s) {
    return X(n - 102, a);
  }
  function e(B, Q, a, n, s) {
    return X(n - 485, a);
  }
  const o = g();
  function i(B, Q, a, n, s) {
    return X(B - 982, n);
  }
  function C(B, Q, a, n, s) {
    return X(Q - -208, a);
  }
  for (; ; )
    try {
      if (-parseInt(A(238, 204, "5rQ@", 215, 208)) / 1 + -parseInt(A(219, 219, "1y6r", 238, 259)) / 2 + parseInt(t(533, 563, 562, 556, "laRJ")) / 3 * (-parseInt(C(-81, -86, "5rQ@", -91, -66)) / 4) + parseInt(C(-109, -93, "nyB4", -103, -113)) / 5 * (-parseInt(C(-83, -84, "F3mr", -90, -72)) / 6) + -parseInt(i(1093, 1080, 1106, "%Y[s", 1116)) / 7 * (parseInt(A(204, 241, "y#v8", 219, 226)) / 8) + -parseInt(C(-78, -63, "JFsa", -73, -65)) / 9 + parseInt(e(620, 605, "hEZy", 601, 612)) / 10 === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Rg, -1268829 * 1 + -1540652 + -3657293 * -1);
async function Hx() {
  function g(a, n, s, x, r) {
    return X(x - 804, s);
  }
  function I(a, n, s, x, r) {
    return X(s - -643, r);
  }
  const t = {};
  function A(a, n, s, x, r) {
    return X(n - -275, a);
  }
  function e(a, n, s, x, r) {
    return X(n - -713, a);
  }
  function o(a, n, s, x, r) {
    return X(a - -778, r);
  }
  t[A("94Dl", -156)] = sC, t[A("5q@U", -152) + "h"] = 256;
  const i = await window[g(901, 906, "hW]6", 909) + "o"][e("JFsa", -575) + "e"][o(-672, -652, -654, -684, "%QLX") + e("%Y[s", -601) + "y"](t, !0, [g(946, 946, "KF#G", 950) + "pt", I(-528, -516, -539, -521, "il@1") + "pt"]), C = Uint8Array[o(-649, -663, -639, -629, "KF#G")](Array(21 * -319 + 2643 + 4072)[A("ZBDm", -150)](-8678 * 1 + 31 * 293 + -405)), B = window[o(-636, -657, -653, -631, "x97q") + "o"][A("Wq[B", -166) + g(929, 923, "laRJ", 944) + e("1y6r", -586)](C), Q = {};
  return Q[A("&Wl3", -174)] = i, Q.iv = B, Q;
}
async function qx(g) {
  const { iv: I, key: t } = await Hx();
  function A(n, s, x, r, d) {
    return X(x - 669, r);
  }
  const e = {};
  e[a(-375, -342, -353, -373, "HY[O")] = sC, e.iv = I;
  function o(n, s, x, r, d) {
    return X(s - 727, x);
  }
  const i = await window[a(-373, -338, -351, -334, "Dnf3") + "o"][a(-337, -315, -318, -324, "5q@U") + "e"][B("d!^i", 439, 440, 454) + "pt"](e, t, g), C = await window[a(-341, -303, -326, -310, "nyB4") + "o"][A(780, 816, 795, "^ty[") + "e"][a(-341, -346, -347, -369, "Dnf3") + B("%QLX", 475, 433, 455)](A(813, 821, 808, "Dnf3"), t);
  function B(n, s, x, r, d) {
    return X(r - 352, n);
  }
  const Q = {};
  Q[B("%Y[s", 466, 493, 470) + "ge"] = i, Q[o(872, 861, "Wq[B")] = C, Q.iv = I;
  function a(n, s, x, r, d) {
    return X(x - -461, d);
  }
  return Q;
}
(function(g, I) {
  function t(i, C, B, Q, a) {
    return hA(Q - -233, i);
  }
  function A(i, C, B, Q, a) {
    return hA(B - 731, C);
  }
  const e = g();
  function o(i, C, B, Q, a) {
    return hA(C - 94, Q);
  }
  for (; ; )
    try {
      if (-parseInt(A(1105, "FLd&", 1094, 1084, 1094)) / 1 + parseInt(A(1106, "cq44", 1100, 1100, 1098)) / 2 + parseInt(A(1100, "CuWS", 1102, 1100, 1092)) / 3 + -parseInt(t("FLd&", 115, 114, 122, 131)) / 4 + -parseInt(A(1085, "AsMI", 1090, 1098, 1092)) / 5 + -parseInt(o(458, 467, 459, "]%pL", 469)) / 6 + parseInt(o(457, 466, 470, "TF%j", 473)) / 7 * (parseInt(t("iFu8", 132, 127, 129, 127)) / 8) === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sg, 119 * 6841 + 933539 + -1164347);
function Sg() {
  const g = ["W5RdRIVcK8o+WP3cQxRcNSkyWRaPWRS", "WRdcOCokFM8", "W6NdUCkabdecWQjiW7/cGWmk", "DwnMWO3dGSkxWRKnWPldJaddKum", "W5ZdQIxcNSoXWPRcQwNcRSkAWPa5WP8", "W43cR8kwhfnwD8k4", "fWq1smoaaSkTaCk2CaNcUMu", "WRxcGNm0FCkVzsW", "vHSdWObQ", "W7RdJHtcV8oA", "W6z/vYLhWRWeWQddKrubwq", "W7zXAIm", "WR9dW5/dMGy", "W5/dPcxcN8o4WPVdVL/cO8kIWPiw", "WPTAW6qrW5KoqshcV3npmt8", "kZ8/W5/cGG", "WOq0eMJcKmowqCoXW64BDSkdW7m", "emkvbeCtW7pdKL4wcmkwv8kM", "W6r+vsLoWRP3WRFdMZKlttq", "DgTMWOZdJSksW4KyWRJdGrFdOq", "W4KyWRnnWQS", "xCoCW4tdT08"];
  return Sg = function() {
    return g;
  }, Sg();
}
function hA(g, I) {
  const t = Sg();
  return hA = function(A, e) {
    A = A - (-115 + -459 * 9 + 4599);
    let o = t[A];
    if (hA.BcQYZK === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      hA.RjyrMB = a, g = arguments, hA.BcQYZK = !0;
    }
    const C = t[-1 * -8753 + 361 * 5 + -10558], B = A + C, Q = g[B];
    return Q ? o = Q : (hA.fZkuAR === void 0 && (hA.fZkuAR = !0), o = hA.RjyrMB(o, e), g[B] = o), o;
  }, hA(g, I);
}
function Ox(g) {
  const I = new ArrayBuffer(g[o("4#5e", -619) + "h"]);
  function t(i, C, B, Q, a) {
    return hA(Q - -352, a);
  }
  const A = new Uint8Array(I);
  function e(i, C, B, Q, a) {
    return hA(i - -221, C);
  }
  for (let i = 6722 + -8885 * 1 + -721 * -3, C = g[e(139, "Po3g") + "h"]; i < C; i++)
    A[i] = g[t(-9, 12, 3, 2, "RHeJ") + t(3, -4, -1, 1, "K4gR")](i);
  function o(i, C, B, Q, a) {
    return hA(C - -985, i);
  }
  return I;
}
(function(g, I) {
  const t = g();
  function A(C, B, Q, a, n) {
    return eA(a - 350, C);
  }
  function e(C, B, Q, a, n) {
    return eA(n - -922, B);
  }
  function o(C, B, Q, a, n) {
    return eA(C - 518, n);
  }
  function i(C, B, Q, a, n) {
    return eA(C - 349, Q);
  }
  for (; ; )
    try {
      if (parseInt(o(858, 808, 923, 892, "J2vb")) / 1 + -parseInt(i(750, 714, "wxRS", 866, 743)) / 2 * (parseInt(i(857, 908, "myep", 748, 753)) / 3) + -parseInt(o(886, 916, 970, 787, "J2vb")) / 4 + parseInt(i(825, 710, "F3[j", 828, 918)) / 5 + -parseInt(A("lX[J", 736, 741, 649, 679)) / 6 * (parseInt(e(-509, "MuY6", -380, -519, -460)) / 7) + parseInt(A("myep", 590, 758, 664, 755)) / 8 + parseInt(e(-615, "bx8N", -586, -468, -534)) / 9 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mg, -1243399 + 94713 * 7 + 1576779);
function eA(g, I) {
  const t = Mg();
  return eA = function(A, e) {
    A = A - (-3 * -1929 + 1 * -9096 + 3595);
    let o = t[A];
    if (eA.IWPJWE === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      eA.fPhzUn = a, g = arguments, eA.IWPJWE = !0;
    }
    const C = t[-6240 + 3327 * 1 + 2913], B = A + C, Q = g[B];
    return Q ? o = Q : (eA.DIbfTM === void 0 && (eA.DIbfTM = !0), o = eA.fPhzUn(o, e), g[B] = o), o;
  }, eA(g, I);
}
function Mg() {
  const g = ["rmo1zmoOWQm", "W4JcQCoYySoS", "DCoCgulcIG", "reJcPSkPwa", "qSoYCa/dSG", "g8oKW7Wi", "cSoLxrKC", "W7/dMficwa", "xmkzW5LxWPxdTtuRgmkMW5xdNmoh", "tI/cQwCu", "zZJcRfak", "BfCEW5yc", "W6Oxo8k+W6O", "WRSNW6hdQxG", "Bbv+W4al", "qmoNCG/dTa", "sSkRm2VdHq", "W4/cPmosb8o0", "wCoLW5bFW5C", "WPKHf2f2", "veO/W6aO", "cYhdTmkVga", "WP0IW5hcThG", "W48GDSkBWQW", "WP5lW5RcNfK", "WQ/cR2dcVCkNzSk5W48JWQtdPYTl", "sfFcU8ke", "WOfMWOhdQmoL", "WO1ah1ya", "t2JcJCkyW5u", "W71mwN59", "xwJcSCkF", "WQWek1S", "uNL/WQxdSG", "r1FcI8o1WO0", "EXlcL8kkxG", "W5TZWQtdLmom", "xSkZW5iSWO4", "CqddOaxcSG", "gGZdIeqA", "DYhcGGBcUq", "W4LvWRVcMSoT", "WRldRraYWQO", "WO5ccmoCWQK", "WOaRdCoEWPa", "p1CkwCoe", "W4VdSIiZWOtcRCo/", "s8kUoSk/WRu", "dL1tcdu", "E8onxmkCW6i", "WR5vW7JcJLC", "W4nVWOpdHCkK", "W5TYWO7dRmog", "W5fBWP3cICoD", "WP5vW73cQWa", "i8oUfJhdQq", "xNySWO/dRa", "WPPmwMzs", "wmkzW5jAWP3dTdCfn8kCW5RdPmoh", "xCk2W5anW7C", "WPKzW6pcNCorE8ohcrjgz2yE", "WO4Kc8oIWR4", "eCoDW5VdH10", "qCoCoCktW6m", "FCkah8osWOW", "D8oKdLlcKG", "FYxcH2pcRq", "BeBcQCoTWO8", "g8kbE8oEWRC", "W4LNWRFcTCos", "WQxcOCkAm8oI", "tSkRdKxdTG", "g8otWRfDWOPVWOf8WPRcGchdLCkx", "WOj1lComWRq", "wNNcNmk9W6a", "FtVcNtOu", "sSkdWOOlAq", "wdZdIJSw", "WR/dVM7dJL8", "hwxcKLJcIW", "dKSMW4ic", "ow/cJCkTW7SBnq", "y8o8CthcJa", "BHq/W4in", "WRC3DW7cLq", "WQr8C0VdRq", "FYpcIf8B", "iCkeW7L7ha", "WQyBzGBcRq", "FtZcReFcNW", "jmodsI0Z", "C8k0W4WZW68", "W4rXjv3dJ8oMW5W5j8oqWRmIW6a", "s8kugSoEW5m", "matdUSoecG", "F3SCumo5", "W4mNBWRcLq", "W4ZdIt/cV8ob", "WOKWlgqd", "rZ4cbCor", "ycFcMuWP", "mmk7wqiW", "WOTOW6RcSYq", "W7TpW6dcPCkq", "yfpcULtcOa", "AZZcKL7dIG", "bNxdLGG+", "E8ocjw7cGW", "j3vapGG", "WPxcHGf2ga", "qxO3WPVdKW", "xwBcSCkGEa", "Fmkyq8odWPO", "FfCoWQxdIq", "EeGdWOZdHW", "W4OFWOZdKhW3BblcQSkKW5fjW7G", "WQ8LjvWz", "zCkgCCkDoq", "bMb9ptS", "WPXzt0VdKa", "vt7cH1/cLW", "zdRcQ2lcUW", "g3xcPmkWAG", "ctK6CSoi", "W4ldTcFdTCo3", "yhFdRGat", "iSowW4mooq", "wCkuW6qDW5y", "W4NdPZ/cVmoE", "a8omouW1", "W4fYjfVdI8oLW5GKo8oWWRq6W4C", "W7VcTWnLbq", "wdtcKun9", "WQq7WOfJtW", "i8k0gCo1W5m", "BSocsmkSWQW", "Cwjypmo9", "y1JcHSoFW6W", "tttcOL0", "W4qzpCkBWRu", "vqhdU8k4kq", "j8otW6pdUci", "bCoHWPC7WP8", "W7L0WOhcUCoq", "WOPdq1W4", "WPnreMOL", "WPldNGelna", "W5flW4dcJSk/", "x8kFhuRdNG", "CSkIdMBdTq", "lmk9rrns", "rCkRCmkMuq", "FtFcKeaA", "aIZdRCoebG", "cWJdLHim", "W4NdTH3dM8oX", "gXf6W73cKSk5cSo0CMhdQgTR", "Cmkzm8oQ", "WQnQWRZdT8ob", "gbf8W7RcKCk7dSo0rxNdGvzw", "rCkkdSkouq", "W5atWRFdVSoD", "WPDiW7FdKCkU", "tSo3gmkUW78", "WPxcVZOPWQK", "pJNdVCoyWR1wrghdG17dRmkxWRC", "W4vCo21p", "WPjUd8o5W5i", "bSo5rcOX", "qSkAyZBdNW", "i8oysY7dQW", "BtNcGxJcRa", "CSkqemoEWPS", "dCkyWRK2W4K", "xJxcIfJcRG", "w8ofWQ5kzW", "jSo5ttu1", "ESo6u8kFWPi", "v0uCWRyD", "v1tdQc0f", "W45LW47cHrS", "dmogWOmCW5q", "i8oblmkdW5C", "jmkeBmojWQy", "hXj0W7dcMSk/c8oGtxtdT2nO", "fW/dTSkraW", "F8oeqdVdPG", "o8kagmo2WPi", "dmomCcjv", "iCkScmkjcW", "BLdcSLFcPq", "d3OBpbS", "uXNcS2KA", "W55qWRdcMCoR", "gCk8qCoPWRe", "WP8tFCk6WOG", "WO84W6zSnW", "W405F8kPWOe", "F8oKAZVdMW", "WOO6W79HxW", "W5fEW5hdLCkz", "Fg7dLZyk", "a1BdSqSX", "cmkaW4X2", "vmovWPmLgLCEiJBdO8k/xwbZ", "B8kLf3BdNa", "WO/cItSska", "fSo5W4KIqG", "nWddGmoamq", "WRH7W7/cVIu", "nej7sW4", "pWdcMSkDmq", "A3NcG8ksuG", "pComu8koWOeBWOa", "rHWWr8oU", "W5vanNxdQa", "s8k1mvZcSW", "oNtcISo6WQJcVSkF", "gNFcUmkovG", "jCoIySk3WRO", "jZ8Lt8oe", "xJNcS8kIW5u", "WPvxrL4f", "WQXjWQhcMmoF", "cSk9xt8G", "xSkzW6iTW7G", "WRZdLw7cQdS", "uKikWR3dKG", "W4j3jfNdI8oLW5LKi8o2WReaW402", "xCkjfmoEaW", "mmk1W69YsW", "EhVcM8oCW6u"];
  return Mg = function() {
    return g;
  }, Mg();
}
function Tx() {
  const g = B(127, 204, 37, "4K*O") + t(146, "F1s8", 35, 101, 149) + B(170, 160, 176, "l!mK") + B(164, 246, 238, "J2vb") + I(1130, 1092, 1170, "nEAU", 1056) + o("bK%k", 1436, 1526, 1477) + I(1264, 1107, 1235, "RAd8", 1223) + o("uCCe", 1376, 1376, 1377) + t(245, "wxRS", 154, 248, 213) + t(270, "QG3i", 251, 228, 272) + o("lj6Z", 1465, 1359, 1369) + B(103, 26, 208, "$#o#") + I(1200, 1134, 1006, "flwF", 1122) + t(121, "^24f", 52, 214, 168) + I(1248, 1143, 1095, "bz9o", 1169) + B(71, 121, 24, "flwF") + B(163, 179, 230, "ec5$") + I(1223, 1088, 1199, "6u%[", 1171) + t(39, "SK7z", 149, 23, 94) + B(185, 107, 249, "y8Lu") + I(1162, 1210, 1243, "MuY6", 1202) + A(-291, -334, -279, -316, "!PTc") + o("J2vb", 1428, 1517, 1443) + I(1124, 1010, 957, "OfGJ", 1067) + t(79, "CL@&", 115, 80, 157) + o("lxHf", 1408, 1316, 1431) + o("u]Di", 1394, 1412, 1328) + I(1275, 1229, 1336, "lxHf", 1221) + A(-114, -125, -216, -188, "QG3i") + t(150, "!PTc", 92, 94, 136) + B(130, 47, 158, "YbP$") + o("CL@&", 1318, 1336, 1263) + A(-360, -213, -294, -256, "FluG") + o("1m*5", 1488, 1465, 1390) + A(-315, -272, -359, -362, "@evg") + A(-458, -414, -427, -350, "!PTc") + o("YbP$", 1430, 1432, 1456) + t(165, "bz9o", 227, 348, 265) + I(1121, 1074, 1202, "ncS7", 1105) + A(-244, -197, -108, -196, "bz9o") + o("F1s8", 1419, 1296, 1334) + A(-457, -260, -372, -345, "1m*5") + t(213, "FluG", 258, 286, 273) + o("l!mK", 1526, 1420, 1457) + o("nEAU", 1330, 1236, 1279) + A(-155, -240, -144, -207, "uCCe") + B(91, 4, 40, "F1s8") + t(139, "GeLo", 164, 128, 238) + I(1249, 1128, 1171, "a2e8", 1143) + o("myep", 1380, 1430, 1483) + B(220, 261, 235, "F3[j") + I(1062, 994, 1062, "jX$#", 1086) + I(948, 1078, 1026, "J2vb", 1042) + o("uc9K", 1370, 1199, 1274) + I(1207, 1074, 1273, "^24f", 1159) + o("RAd8", 1447, 1306, 1337) + I(1154, 1061, 1214, "!PTc", 1157) + A(-260, -180, -319, -296, "@evg") + o("lX[J", 1184, 1161, 1257) + I(1025, 975, 1173, "y8Lu", 1076) + I(1115, 1323, 1221, "flwF", 1228) + I(1081, 1297, 1292, "$#o#", 1190) + I(1078, 1162, 1135, "FVY!", 1051) + t(268, "^24f", 132, 190, 208) + B(267, 251, 298, "voN3") + I(1359, 1251, 1299, "FVY!", 1255) + t(105, "SK7z", 178, 81, 147) + o("CEa4", 1356, 1418, 1389) + I(1085, 967, 1059, "CEa4", 1035) + B(243, 259, 248, "^24f") + I(1262, 1193, 1278, "E9lo", 1184) + o("bz9o", 1425, 1563, 1464) + I(1198, 1184, 1199, "nEAU", 1083) + B(253, 171, 165, "myep") + t(179, "ncS7", 106, 127, 179) + o("F1s8", 1168, 1282, 1261) + t(307, "wxRS", 251, 343, 246) + I(1239, 1151, 1266, "flwF", 1224) + B(53, 155, -49, "voN3") + B(251, 268, 233, "JJro") + I(1169, 1170, 1142, "RAd8", 1091) + I(1022, 1005, 1089, "QG3i", 1100) + o("FluG", 1308, 1289, 1308) + o("CEa4", 1463, 1336, 1452) + B(128, 71, 38, "CL@&") + B(113, -3, 167, "bK%k") + B(248, 281, 342, "@evg") + I(1271, 1262, 1286, "jX$#", 1187) + t(26, "4K*O", 115, 164, 51) + o("bz9o", 1399, 1330, 1347) + A(-301, -296, -241, -269, "JJro") + B(187, 115, 105, "u]Di") + I(1180, 1235, 1227, "6u%[", 1174) + o("YbP$", 1328, 1342, 1428) + o("E9lo", 1366, 1477, 1400) + I(1280, 1240, 1125, "JJro", 1175) + I(1164, 1042, 1175, "JJro", 1097) + o("$!E4", 1268, 1464, 1351) + A(-246, -165, -240, -195, "@evg") + o("bz9o", 1422, 1489, 1397) + B(212, 206, 116, "!q8$") + o("lX[J", 1332, 1351, 1335) + o("@evg", 1342, 1443, 1453) + A(-327, -306, -251, -364, "SK7z") + I(1244, 1208, 1125, "CEa4", 1144) + I(1105, 1172, 1248, "YbP$", 1151) + o("YbP$", 1556, 1516, 1440) + o("6u%[", 1294, 1379, 1333) + o("myep", 1514, 1461, 1475) + I(1312, 1247, 1123, "E9lo", 1210) + t(287, "bK%k", 256, 255, 280) + B(173, 269, 151, "JJro") + B(111, 4, 27, "4K*O") + B(63, 55, 175, "eQ[t") + I(1153, 1110, 1258, "flwF", 1147) + B(149, 210, 168, "1m*5") + o("nEAU", 1572, 1485, 1484) + I(1057, 1201, 1160, "bK%k", 1166) + I(1289, 1184, 1085, "voN3", 1179) + A(-87, -198, -110, -148, "bx8N") + B(260, 166, 312, "GeLo") + B(58, -26, -58, "@evg") + A(-179, -188, -248, -268, "$!E4") + B(47, 15, -20, "J2vb") + B(223, 229, 199, "lX[J") + B(249, 188, 306, "6u%[") + A(-363, -317, -248, -281, "JJro") + A(-274, -239, -298, -282, "FluG") + A(-242, -370, -340, -331, "lj6Z") + I(1239, 1160, 1217, "RAd8", 1209) + t(304, "BHwV", 312, 204, 241) + A(-254, -362, -297, -335, "bz9o") + A(-351, -283, -347, -338, "bK%k") + B(97, 125, 182, "!PTc") + B(205, 235, 204, "jX$#") + B(46, 104, -55, "RYJz") + o("uCCe", 1338, 1270, 1299) + B(254, 184, 277, "uc9K") + I(1233, 1155, 1221, "1m*5", 1195) + I(1278, 1106, 1269, "GeLo", 1197) + I(1019, 1180, 1e3, "uCCe", 1073) + I(1012, 1163, 1155, "MuY6", 1092) + A(-315, -467, -311, -356, "1m*5") + I(1141, 1086, 1032, "flwF", 1115) + B(72, 45, 170, "ncS7") + A(-304, -278, -119, -223, "OfGJ") + I(1254, 1145, 1249, "E9lo", 1182) + o("F1s8", 1276, 1186, 1280) + A(-186, -182, -218, -272, "lxHf") + A(-77, -210, -184, -162, "!q8$") + t(328, "bz9o", 392, 254, 279) + B(221, 148, 154, "jX$#") + o("@evg", 1352, 1352, 1425) + o("ec5$", 1550, 1555, 1465) + I(1282, 1189, 1137, "FVY!", 1205) + t(72, "FluG", 133, 92, 87) + I(1074, 1188, 1074, "XG%p", 1103) + I(1200, 1141, 1084, "bK%k", 1116) + A(-237, -284, -297, -262, "y8Lu") + t(215, "lX[J", 195, 79, 156) + t(163, "RYJz", 62, 58, 153) + B(190, 210, 248, "FluG") + I(1064, 1106, 1127, "BHwV", 1069) + o("F1s8", 1379, 1448, 1356) + o("FluG", 1257, 1369, 1363) + B(226, 127, 330, "$#o#") + A(-243, -271, -359, -260, "eQ[t") + o("y8Lu", 1473, 1470, 1458) + t(97, "OfGJ", 204, 241, 144) + o("u]Di", 1272, 1330, 1297) + t(274, "GeLo", 158, 208, 172) + o("$!E4", 1359, 1306, 1288) + t(73, "YbP$", 97, 59, 90) + B(105, 7, 126, "bK%k") + A(-398, -433, -345, -347, "@evg") + o("flwF", 1288, 1158, 1267) + B(252, 245, 136, "6u%[") + A(-315, -230, -214, -330, "wxRS") + t(164, "FVY!", 190, 83, 167) + B(89, 86, 47, "bz9o") + B(98, -2, 121, "YbP$") + B(258, 346, 153, "4K*O") + t(47, "RYJz", 90, -6, 78) + t(-40, "CL@&", 79, 96, 65) + B(167, 258, 73, "bx8N") + t(112, "JJro", 171, 64, 117) + A(-201, -250, -212, -317, "bK%k") + B(202, 159, 307, "J2vb") + I(1288, 1260, 1230, "bz9o", 1235) + A(-334, -251, -346, -284, "flwF") + A(-328, -444, -365, -354, "J2vb") + A(-136, -217, -276, -249, "1m*5") + A(-202, -429, -419, -318, "y8Lu") + B(186, 246, 80, "l!mK") + t(104, "bK%k", 174, 224, 171) + A(-277, -192, -373, -305, "SK7z") + A(-433, -312, -407, -321, "Jq(u") + o("JJro", 1466, 1474, 1442) + I(985, 1124, 1022, "!q8$", 1095) + o("Jq(u", 1409, 1351, 1394);
  function I(a, n, s, x, r) {
    return eA(r - 744, x);
  }
  function t(a, n, s, x, r) {
    return eA(r - -237, n);
  }
  function A(a, n, s, x, r) {
    return eA(x - -651, r);
  }
  const e = window[A(-194, -138, -269, -230, "eQ[t")](g);
  function o(a, n, s, x, r) {
    return eA(x - 971, a);
  }
  const i = window[A(-175, -295, -278, -209, "1m*5")](e), C = Ox(i);
  function B(a, n, s, x, r) {
    return eA(a - -247, x);
  }
  const Q = {};
  return Q[t(83, "bx8N", 137, 202, 150)] = cC, Q[I(1005, 1056, 1179, "@evg", 1066)] = Ea, window[I(1157, 1157, 1134, "OfGJ", 1183) + "o"][o("GeLo", 1242, 1308, 1282) + "e"][A(-146, -309, -290, -215, "6u%[") + A(-254, -296, -256, -204, "1m*5")](I(1126, 1170, 1201, "voN3", 1192), C, Q, !0, [A(-233, -192, -127, -136, "lj6Z") + "pt"]);
}
async function Zx(g) {
  function I(o, i, C, B, Q) {
    return eA(B - 946, i);
  }
  const t = await Tx();
  function A(o, i, C, B, Q) {
    return eA(C - -492, Q);
  }
  const e = {};
  return e[A(-183, -41, -151, -219, "QG3i")] = cC, window[I(1396, "CL@&", 1352, 1410) + "o"][A(-55, -22, 0, -41, "XG%p") + "e"][I(1372, "u]Di", 1296, 1311) + "pt"](e, t, g);
}
(function(g, I) {
  function t(B, Q, a, n, s) {
    return cA(Q - 657, n);
  }
  function A(B, Q, a, n, s) {
    return cA(a - -445, n);
  }
  function e(B, Q, a, n, s) {
    return cA(Q - -864, s);
  }
  function o(B, Q, a, n, s) {
    return cA(a - -38, B);
  }
  const i = g();
  function C(B, Q, a, n, s) {
    return cA(n - 709, B);
  }
  for (; ; )
    try {
      if (-parseInt(t(1139, 1128, 1123, "VV!s", 1133)) / 1 + -parseInt(C("6b*F", 1190, 1190, 1192, 1201)) / 2 + parseInt(t(1137, 1142, 1137, "b5Qc", 1135)) / 3 * (parseInt(C("t4J8", 1195, 1182, 1187, 1189)) / 4) + -parseInt(A(27, 34, 22, "LfLS", 17)) / 5 * (parseInt(C("Zj!R", 1178, 1186, 1181, 1193)) / 6) + parseInt(A(31, 31, 25, "SJz[", 23)) / 7 * (-parseInt(e(-378, -385, -377, -396, ")6@N")) / 8) + parseInt(C("fnQ!", 1181, 1189, 1189, 1179)) / 9 + parseInt(o("%Ynt", 450, 448, 438, 440)) / 10 * (parseInt(t(1135, 1139, 1132, "]W0D", 1138)) / 11) === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Lg, 717763 + -168902 * -1);
async function jx(g) {
  const { iv: I, key: t, message: A } = await qx(g), e = await Zx(t);
  function o(B, Q, a, n, s) {
    return cA(B - -167, a);
  }
  const i = {};
  i[C("^6e8", 761)] = e;
  function C(B, Q, a, n, s) {
    return cA(Q - 297, B);
  }
  return i.iv = I, i[o(314, 305, "YM*g") + "ge"] = A, i;
}
function cA(g, I) {
  const t = Lg();
  return cA = function(A, e) {
    A = A - 463;
    let o = t[A];
    if (cA.XsxoWk === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      cA.VVSClI = a, g = arguments, cA.XsxoWk = !0;
    }
    const C = t[0], B = A + C, Q = g[B];
    return Q ? o = Q : (cA.eltySC === void 0 && (cA.eltySC = !0), o = cA.VVSClI(o, e), g[B] = o), o;
  }, cA(g, I);
}
function Lg() {
  const g = ["FCkuW6OKo1ddRatcKSkhW5RcH8kh", "W4/cPCkFomkchN89f1LoW6ZcHx4", "WRxcL8oR", "j8oSlwLeW5L8W7JdJIlcTSkQWOO", "mSoZf8k7W4tcPCkT", "W5VcH8kouCo4kfO", "mgimW6m3DSol", "yCkbW4/dLLC1x1BdJ8oHW5JdTXC", "W7mbhcldGICB", "F8oZWR0Zo3ZcPuFdV8klmgtcIa", "E3HSt3BcUSkUWOvltmk/W57cGG", "jCk+gmkoDw9hW7u", "wtBdSsXSagZcQNXpomoIW4q", "iSoaW5BdNY18hHX8eCkesdu", "W4ddOZKEd8kTW6VdOwe", "z0ZcIdy0Ah1DW5NcJKmucG", "FmkHWPmNW70dr8khw3bSFG", "jMapmIhcUM3cQvVdLvRcJmkm", "pLJdP8o8ou3cMcDWDmkchCoGiW", "W6BcRmkcW7ZdJW", "WRrpWPKZWRzWFtyB", "W4ZcO8kwnmkdhxjxlKzzW5NcOG", "h382wZRdRmoHs8oUCSogtG", "W7LDd2C9qwaa"];
  return Lg = function() {
    return g;
  }, Lg();
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return EA(a - 308, B);
  }
  const A = g();
  function e(C, B, Q, a, n) {
    return EA(C - 720, a);
  }
  function o(C, B, Q, a, n) {
    return EA(B - -511, C);
  }
  function i(C, B, Q, a, n) {
    return EA(a - 36, Q);
  }
  for (; ; )
    try {
      if (-parseInt(i(376, 359, "$AqF", 372, 362)) / 1 + parseInt(t(653, "49$[", 641, 641, 625)) / 2 * (-parseInt(t(644, "ZnI9", 635, 645, 662)) / 3) + -parseInt(t(649, "snQH", 659, 661, 666)) / 4 + -parseInt(o("*1#l", -167, -165, -178, -170)) / 5 * (-parseInt(o("mAJ^", -161, -149, -160, -165)) / 6) + parseInt(i(372, 367, "[ef[", 382, 391)) / 7 + -parseInt(e(1055, 1067, 1062, "m3gT", 1046)) / 8 * (-parseInt(o("1B%h", -179, -164, -176, -193)) / 9) + parseInt(e(1047, 1056, 1052, "5SNO", 1041)) / 10 * (parseInt(t(642, "@]nV", 654, 647, 660)) / 11) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Jg, 1 * -758899 + 16 * -58979 + -7 * -312931);
async function Vx(g) {
  const I = await window[A(-322, -319, "nlya", -317, -317) + "o"][A(-334, -331, "52tF", -306, -319) + "e"][A(-322, -303, "c%Ob", -299, -309) + "t"](o(408, 411, 425, 418, "@lPm"), g);
  function t(i, C, B, Q, a) {
    return EA(i - 893, a);
  }
  function A(i, C, B, Q, a) {
    return EA(a - -660, B);
  }
  function e(i, C, B, Q, a) {
    return EA(Q - -381, i);
  }
  function o(i, C, B, Q, a) {
    return EA(Q - 73, a);
  }
  return Array[o(414, 387, 413, 402, "QbWn")](new Uint8Array(I))[e("RpwL", -45, -57, -51)]((i) => i[e("Tlci", -44, -25, -34) + t(1221, 1216, 1227, 1231, "JWOx")](-9162 + 43 * -195 + 17563)[o(413, 407, 382, 399, "snQH") + e("13PX", -50, -32, -41)](2380 + 2378 * -1, "0"))[A(-312, -297, "eihP", -301, -312)]("");
}
function EA(g, I) {
  const t = Jg();
  return EA = function(A, e) {
    A = A - (-1206 + 1530 * 1);
    let o = t[A];
    if (EA.nDvuNn === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      EA.qTUTnu = a, g = arguments, EA.nDvuNn = !0;
    }
    const C = t[4 * -1511 + -3 * -674 + 4022], B = A + C, Q = g[B];
    return Q ? o = Q : (EA.IXvqvY === void 0 && (EA.IXvqvY = !0), o = EA.qTUTnu(o, e), g[B] = o), o;
  }, EA(g, I);
}
function Jg() {
  const g = ["W4e3WRpdStpdV8kqW6ddN1VdP8kbW7JdSq", "W4aCW6Cuwmk2W7ZdSa", "WO9SW4G", "WRpdSmk4oSk+", "WQrjWOXYW7DuoSkJ", "DN3cPHhcIW", "WRHYW6qKz8kzEwpcPSoT", "W64HW5bSWOC", "a1hdSmoVWQldGwb1W4qnWPySWRC", "W7hcHgtdSmkM", "W7VcJ8k8WQK", "WPyqhfKgWQFcSZ3dJSkHW6NdLG", "W5hdNJldLSoqW4azW5VdKSkU", "EmkxlCoyBq", "lSkYimoiW4j+f8o1W43dJg5Aiq", "dmo6lh7dPKZcMhSVW4GMi2y", "F8oxpCkkb8o3f1quA8ktWQtcVq", "F8kQrmo3zSkgsq", "W4e3WRFdVvtcJmoeWRpdVL0", "cSoEWRSzW4dcUgCcBmkyWQP1W6q", "WPWNW5BcNmo6D8o0lW", "t8kPFX3cOW", "W54iWR3dSmoCWOjlWQLGi8kOWPj1W7y", "mILI", "vbNdUmo4", "gmo1kq", "hmoGx8o6vCk/W65LBCk0", "W6FcLSkljSobvmo7sr/dOSobha", "W7ivDCo/W4JdT8o3W4TeW6JdRwldHa", "WPhcHxBdISo1mgFcGZzvjxO", "WOLtCWaJW4VdHM0", "nZbzWO0bWRldQCoJWRHUCGe", "hCkDjSkdxCk/W6u"];
  return Jg = function() {
    return g;
  }, Jg();
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return fA(a - 108, x);
  }
  function A(Q, a, n, s, x) {
    return fA(a - 135, n);
  }
  function e(Q, a, n, s, x) {
    return fA(n - -819, x);
  }
  var o = g();
  function i(Q, a, n, s, x) {
    return fA(s - 520, Q);
  }
  function C(Q, a, n, s, x) {
    return fA(s - -771, a);
  }
  for (; ; )
    try {
      var B = parseInt(t(598, 587, 593, 593, "ebiv")) / 1 * (-parseInt(A(614, 622, "KJ#k", 622, 631)) / 2) + parseInt(A(606, 611, "5hxO", 605, 611)) / 3 * (parseInt(t(603, 600, 588, 607, "N9q!")) / 4) + -parseInt(t(584, 593, 592, 604, "9$xz")) / 5 * (-parseInt(i("@g8]", 1017, 1020, 1011, 1018)) / 6) + -parseInt(C(-300, "AKxn", -295, -297, -288)) / 7 * (-parseInt(C(-287, "$P%S", -293, -287, -283)) / 8) + parseInt(t(576, 585, 596, 593, "0W%N")) / 9 * (parseInt(t(610, 603, 606, 611, "2&Qj")) / 10) + parseInt(C(-288, "AKxn", -278, -290, -279)) / 11 + -parseInt(e(-349, -335, -337, -325, "V4x8")) / 12;
      if (B === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Yg, -70158 + -1 * -338669 + 85428);
function fA(g, I) {
  var t = Yg();
  return fA = function(A, e) {
    A = A - (5 * -179 + -9444 + -318 * -34);
    var o = t[A];
    if (fA.whFvcv === void 0) {
      var i = function(n) {
        for (var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", r = "", d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (var w = 0, R = x.length; w < R; w++)
          r += "%" + ("00" + x.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(r);
      }, C = function(n, s) {
        var x = [], r = 0, d, h = "";
        n = i(n);
        var E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (var u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      fA.PnAoDG = C, g = arguments, fA.whFvcv = !0;
    }
    var B = t[15915 + -15915 * 1], Q = A + B, a = g[Q];
    return a ? o = a : (fA.mxHRTY === void 0 && (fA.mxHRTY = !0), o = fA.PnAoDG(o, e), g[Q] = o), o;
  }, fA(g, I);
}
function Yg() {
  var g = ["nmoBW5VdMSomWOFdVaHBc8oObcy", "ueLMW7uYDvRcTG", "oCoFjZfQW68DqCoMW40a", "sZRdLKhcUmkuWRRcLGzMBaf4", "kmkfWRpcGZbVWQRcMmo2WOxcQW", "dmoJW57dG1rLnHpdMWhcJGpdIa", "bmkDW5RdTCoIWRLnW5pdONNdGG", "WRhdRCk1vSkQW63dTCoU", "jSoDWOldM8oPW7WCWQtcPq", "pSoDiJTMWRfVtmobW6mVzIK", "fSkmBSk/cIpdUIhcL8ouWPjdW4JcLW", "nSoDW5tdNCocW4/cHHrFaSoW", "D8k2nYlcSueqW5VdSW", "W7/dK2pdL17cRCoqWOG", "W6BcTt/dNSkEBmoHwW", "W6vIsvXsfSkklGJcJa", "eIBdUmkZWRFdV2msWQ03", "amkFW5JdT8oIW6G9WR/dRKddPYdcGCoR", "W7FdLfxdMxNcT8oEWRS", "nIVdRNfqyJpdKvlcKCoueW", "n8kAW5ZcO0vEW4JdHG", "W6NcS1/dN8kSWOBcUgi", "WPbmWQldRCo7W6SFvdxcL8kSWOa", "xSozCCodEKVdMmoU"];
  return Yg = function() {
    return g;
  }, Yg();
}
async function Px(g) {
  const { Image: I } = Ze, t = await g.arrayBuffer(), A = new Uint8Array(t), e = {};
  e.bytes = A;
  const o = I.verify(e);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function Xx(g) {
  const { v4: { Metadata: I } } = Ze, t = { ...g };
  t.platform = Ze.Platform.WEB;
  const A = t, e = I.verify(A);
  if (e) throw Error(e);
  return I.create(A);
}
async function zx(g) {
  const { Content: I } = Ze, { iv: t, key: A, message: e } = await jx(g), o = { token: new Uint8Array(A), iv: t, schemaVersion: xa, bytes: new Uint8Array(e) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function _x(g) {
  const { Blob: I } = Ze.v4, t = I.verify(g);
  if (t) throw Error(t);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function $x(g, I) {
  const { DocumentContent: t } = Ze.v4, A = await Px(g), e = await Xx(I), o = {};
  o.image = A, o.metadata = e;
  const i = o, C = t.verify(i);
  if (C) throw Error(C);
  const B = t.create(i), Q = {};
  return Q.documentContent = B, _x(Q);
}
async function AE(g, I) {
  const t = await $x(g, I);
  return zx(t);
}
class eE {
  constructor(I, t) {
    p(this, "isDetectorInitialized", !1);
    p(this, "samVersion", null);
    p(this, "detection");
    this.imageProcessor = I, this.assetsDirectoryPath = t;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(I) {
    await this.detector.initSamModule(location.href, I);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(I) {
    if (!I || !this.areVersionsCompatible(I))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new K("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = I;
  }
  runDetectionLoop(I) {
    this.detection && this.detection.stop(), this.detection = I, this.detection.run();
  }
  stopDetectionLoop() {
    var I;
    (I = this.detection) == null || I.stop();
  }
  setThresholds(I) {
    this.imageProcessor.validationService.thresholds = I;
  }
  static getWorkerPath(I, t) {
    return "" + t.replace(dC, "") + I;
  }
}
class tE {
  constructor() {
    p(this, "detectionRecord", []);
    p(this, "imagesWithTimestampForDuplicateDetection", new fC(aa));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: t }) {
    const A = I.length / sa, e = A / (-4261 + -203 * -21), o = I.length / (-1241 + 6145 * 1 + -19 * 258), i = await Vx(I.slice(o - e, o + e)), C = {};
    C.imageHash = i, C.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: pa(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: t, imageData: A, timestamp: e }) {
    const o = da(I), i = this.validationService.validateDetectedObject(o, t);
    if (i.result.get("isPresent")) {
      const C = {};
      C.image = A, C.timestamp = e, this.collectImagesForDuplicateDetection(C);
    }
    return this.detectionRecord.push(I), { detection: o, validationResult: i.result, isValid: i.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class gE {
  constructor() {
    p(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new K("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const VC = Symbol("Comlink.proxy"), IE = Symbol("Comlink.endpoint"), oE = Symbol("Comlink.releaseProxy"), G0 = Symbol("Comlink.finalizer"), xg = Symbol("Comlink.thrown"), PC = (g) => typeof g == "object" && g !== null || typeof g == "function", iE = {
  canHandle: (g) => PC(g) && g[VC],
  serialize(g) {
    const { port1: I, port2: t } = new MessageChannel();
    return zC(g, I), [t, [t]];
  },
  deserialize(g) {
    return g.start(), $C(g);
  }
}, CE = {
  canHandle: (g) => PC(g) && xg in g,
  serialize({ value: g }) {
    let I;
    return g instanceof Error ? I = {
      isError: !0,
      value: {
        message: g.message,
        name: g.name,
        stack: g.stack
      }
    } : I = { isError: !1, value: g }, [I, []];
  },
  deserialize(g) {
    throw g.isError ? Object.assign(new Error(g.value.message), g.value) : g.value;
  }
}, XC = /* @__PURE__ */ new Map([
  ["proxy", iE],
  ["throw", CE]
]);
function BE(g, I) {
  for (const t of g)
    if (I === t || t === "*" || t instanceof RegExp && t.test(I))
      return !0;
  return !1;
}
function zC(g, I = globalThis, t = ["*"]) {
  I.addEventListener("message", function A(e) {
    if (!e || !e.data)
      return;
    if (!BE(t, e.origin)) {
      console.warn(`Invalid origin '${e.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, e.data), B = (e.data.argumentList || []).map(xe);
    let Q;
    try {
      const a = C.slice(0, -1).reduce((s, x) => s[x], g), n = C.reduce((s, x) => s[x], g);
      switch (i) {
        case "GET":
          Q = n;
          break;
        case "SET":
          a[C.slice(-1)[0]] = xe(e.data.value), Q = !0;
          break;
        case "APPLY":
          Q = n.apply(a, B);
          break;
        case "CONSTRUCT":
          {
            const s = new n(...B);
            Q = rE(s);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: s, port2: x } = new MessageChannel();
            zC(g, x), Q = EE(s, [s]);
          }
          break;
        case "RELEASE":
          Q = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      Q = { value: a, [xg]: 0 };
    }
    Promise.resolve(Q).catch((a) => ({ value: a, [xg]: 0 })).then((a) => {
      const [n, s] = Ug(a);
      I.postMessage(Object.assign(Object.assign({}, n), { id: o }), s), i === "RELEASE" && (I.removeEventListener("message", A), _C(I), G0 in g && typeof g[G0] == "function" && g[G0]());
    }).catch((a) => {
      const [n, s] = Ug({
        value: new TypeError("Unserializable return value"),
        [xg]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, n), { id: o }), s);
    });
  }), I.start && I.start();
}
function QE(g) {
  return g.constructor.name === "MessagePort";
}
function _C(g) {
  QE(g) && g.close();
}
function $C(g, I) {
  return xI(g, [], I);
}
function Pt(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function AB(g) {
  return Re(g, {
    type: "RELEASE"
  }).then(() => {
    _C(g);
  });
}
const vg = /* @__PURE__ */ new WeakMap(), Wg = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (vg.get(g) || 0) - 1;
  vg.set(g, I), I === 0 && AB(g);
});
function nE(g, I) {
  const t = (vg.get(I) || 0) + 1;
  vg.set(I, t), Wg && Wg.register(g, I, g);
}
function aE(g) {
  Wg && Wg.unregister(g);
}
function xI(g, I = [], t = function() {
}) {
  let A = !1;
  const e = new Proxy(t, {
    get(o, i) {
      if (Pt(A), i === oE)
        return () => {
          aE(e), AB(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => e };
        const C = Re(g, {
          type: "GET",
          path: I.map((B) => B.toString())
        }).then(xe);
        return C.then.bind(C);
      }
      return xI(g, [...I, i]);
    },
    set(o, i, C) {
      Pt(A);
      const [B, Q] = Ug(C);
      return Re(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: B
      }, Q).then(xe);
    },
    apply(o, i, C) {
      Pt(A);
      const B = I[I.length - 1];
      if (B === IE)
        return Re(g, {
          type: "ENDPOINT"
        }).then(xe);
      if (B === "bind")
        return xI(g, I.slice(0, -1));
      const [Q, a] = ei(C);
      return Re(g, {
        type: "APPLY",
        path: I.map((n) => n.toString()),
        argumentList: Q
      }, a).then(xe);
    },
    construct(o, i) {
      Pt(A);
      const [C, B] = ei(i);
      return Re(g, {
        type: "CONSTRUCT",
        path: I.map((Q) => Q.toString()),
        argumentList: C
      }, B).then(xe);
    }
  });
  return nE(e, g), e;
}
function xE(g) {
  return Array.prototype.concat.apply([], g);
}
function ei(g) {
  const I = g.map(Ug);
  return [I.map((t) => t[0]), xE(I.map((t) => t[1]))];
}
const eB = /* @__PURE__ */ new WeakMap();
function EE(g, I) {
  return eB.set(g, I), g;
}
function rE(g) {
  return Object.assign(g, { [VC]: !0 });
}
function Ug(g) {
  for (const [I, t] of XC)
    if (t.canHandle(g)) {
      const [A, e] = t.serialize(g);
      return [
        {
          type: "HANDLER",
          name: I,
          value: A
        },
        e
      ];
    }
  return [
    {
      type: "RAW",
      value: g
    },
    eB.get(g) || []
  ];
}
function xe(g) {
  switch (g.type) {
    case "HANDLER":
      return XC.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function Re(g, I, t) {
  return new Promise((A) => {
    const e = sE();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== e || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: e }, I), t);
  });
}
function sE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const cE = "SAM v1.44.0 for idcards", dE = "/dot-assets/document/dot-Dkj5lBQc.js";
class hE extends tE {
  constructor(t, A) {
    super();
    p(this, "className", "DocumentImageProcessor");
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  optimizeImageBeforeDetection(t) {
    const A = wg(t), e = wa(t, A);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: t, timestamp: A }) {
    const e = this.optimizeImageBeforeDetection(t);
    let o = await this.detector.detect(e.data, e.resolution);
    o = Na(o, wg(t)), o = Fa(o, e.resolution);
    const i = {};
    return i.image = t, i.timestamp = A, i.imageData = e.data, i.detectedObject = o, this.processDetectedObject(i);
  }
}
var Le, se, ce;
class lE {
  constructor(I) {
    V(this, Le);
    V(this, se);
    V(this, ce);
    T(this, Le, I), T(this, se, /* @__PURE__ */ new Map());
  }
  validate() {
    b(this, Le).forEach((I) => {
      b(this, se).set(I.name, I.evaluate());
    }), T(this, ce, void (-9894 + -13 * 433 + 15523));
  }
  isValid() {
    return b(this, ce) === void (1279 + 1 * -1279) && T(this, ce, Array.from(b(this, se).values()).every((I) => I)), b(this, ce);
  }
  get result() {
    return b(this, se);
  }
  get validators() {
    return b(this, Le);
  }
}
Le = new WeakMap(), se = new WeakMap(), ce = new WeakMap();
var ft, de;
class me {
  constructor(I, t) {
    V(this, ft);
    V(this, de);
    T(this, ft, I), T(this, de, t);
  }
  get threshold() {
    return b(this, de);
  }
  get name() {
    return b(this, ft);
  }
  isValueBelowThreshold(I) {
    return I < b(this, de);
  }
  isValueAboveThreshold(I) {
    return I > b(this, de);
  }
}
ft = new WeakMap(), de = new WeakMap();
const uE = "isNotDim";
var Dt;
class fE extends me {
  constructor(t, A) {
    super(uE, t);
    V(this, Dt);
    T(this, Dt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, Dt));
  }
}
Dt = new WeakMap();
const DE = "isNotSmall";
var yt;
class yE extends me {
  constructor(t, A) {
    super(DE, t);
    V(this, yt);
    T(this, yt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, yt));
  }
}
yt = new WeakMap();
const wE = "isNotBright";
var wt;
class pE extends me {
  constructor(t, A) {
    super(wE, t);
    V(this, wt);
    T(this, wt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(b(this, wt));
  }
}
wt = new WeakMap();
const mE = "isPresent";
var pt;
class GE extends me {
  constructor(t, A) {
    super(mE, t);
    V(this, pt);
    T(this, pt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, pt));
  }
}
pt = new WeakMap();
const bE = "isSharp";
var mt;
class kE extends me {
  constructor(t, A) {
    super(bE, t);
    V(this, mt);
    T(this, mt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(b(this, mt));
  }
}
mt = new WeakMap();
var Gt;
class NE extends me {
  constructor(t, A) {
    super("noHotspots", t);
    V(this, Gt);
    T(this, Gt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(b(this, Gt));
  }
}
Gt = new WeakMap();
const FE = "isNotOutOfBounds";
var bt, Je;
class RE extends me {
  constructor(t, A, e) {
    super(FE, t);
    V(this, bt);
    V(this, Je);
    T(this, bt, A), T(this, Je, e);
  }
  evaluate() {
    const t = DC(b(this, Je), this.threshold, wg(b(this, Je))), { bottomLeft: A, bottomRight: e, topLeft: o, topRight: i } = b(this, bt), C = {};
    return C.topLeft = o, C.topRight = i, C.bottomLeft = A, C.bottomRight = e, ka(C, t);
  }
}
bt = new WeakMap(), Je = new WeakMap();
class SE {
  static getDocumentValidationInstance(I, t, A) {
    return new lE([new GE(I.confidenceThreshold, t.confidence), new kE(I.sharpnessThreshold, t.sharpness), new fE(I.brightnessLowThreshold, t.brightness), new pE(I.brightnessHighThreshold, t.brightness), new NE(I.hotspotsScoreThreshold, t.hotspots), new RE(I.outOfBoundsThreshold, t, A), new yE(I.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class ME extends gE {
  constructor() {
    super(...arguments);
    p(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, A) {
    const e = SE.getDocumentValidationInstance(this.getThresholds(), t, A);
    return e.validate(), e;
  }
}
const st = class st extends eE {
  constructor(t, A, e) {
    super(A, e);
    p(this, "detector");
    this.detector = t;
  }
  static async createInstance(t) {
    const A = st.getWorkerPath(dE, t), e = {};
    e.type = "module";
    const o = new Worker(new URL(A, import.meta.url), e), i = $C(o), C = await new i(), B = new ME(), Q = new hE(C, B), a = new st(C, Q, t);
    this._instance = a;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), pC(XA.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], Tn);
  }
  areVersionsCompatible(t) {
    return t === cE;
  }
};
p(st, "_instance");
let EI = st;
const LE = () => {
  const { handleError: g } = St(), { assetsDirectoryPath: I, thresholds: t } = JI(), [A, e] = GA();
  tA(() => {
    (async () => {
      const C = await EI.getInstance(I);
      try {
        await C.init(), e(C);
      } catch (B) {
        if (B instanceof Error) {
          g(K.fromError(B));
          return;
        }
      }
    })();
  }, [g, I]), tA(() => {
    A && A.setThresholds(t);
  }, [A, t]);
  const o = {};
  return o.controller = A, o;
};
function JE() {
  const { cameraFacing: g, captureMode: I, onPhotoTaken: t, sessionToken: A } = JI(), { controller: e } = LE(), o = zA(({ candidateSelectionImages: B, imageData: Q, protoMessage: a }) => {
    za(yC.DOCUMENT, B), t(Q, a);
  }, [t]), i = zA(({ processedImage: B }) => {
    pC(XA.INSTRUCTION_CHANGED, B.instructionCode), e && Xa(XA.DETECTED_DOCUMENT_CHANGED, B.detection, e.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [e]), C = {};
  return C.captureMode = I, C.cameraFacing = g, C.controller = e, C.createProtoMessage = AE, C.onCapture = o, C.onDetection = i, C.sessionToken = A, C.customEvent = XA, C.fallbackInstruction = TA.DOCUMENT_NOT_PRESENT, C.instructionCodeMap = TA, C.checkToInstructionCodeMap = Nn, yx(C);
}
const YE = () => {
  const { sunfish: g } = Mt(), { cameraResolution: I, detectionDetails: t, shouldCameraMirror: A, videoRef: e } = JE();
  return /* @__PURE__ */ D(kA, { children: /* @__PURE__ */ D(
    Za,
    {
      cameraResolution: I,
      detectionDetails: t,
      shouldMirror: A,
      children: /* @__PURE__ */ D(
        wn,
        {
          ref: e,
          $isImageMirror: A,
          $isVisible: g,
          autoPlay: !0,
          id: Zn,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, vE = (g) => /* @__PURE__ */ D(Wa, { cameraOptions: g, children: /* @__PURE__ */ D(YE, {}) });
function WE({ initAppState: g, onError: I }) {
  const [t, A] = GA(g), [e, o] = GA(), [i, C] = GA(!1), B = UA(I);
  tA(() => {
    B.current = I;
  }, [I]);
  const Q = {};
  return Q.appState = t, Q.setAppState = A, Q.error = e, Q.setError = o, Q.isCameraReady = i, Q.setIsCameraReady = C, Q.onErrorRef = B, Q;
}
function UE({ onError: g }) {
  const { appState: I, error: t, isCameraReady: A, onErrorRef: e, setAppState: o, setError: i, setIsCameraReady: C } = WE({
    initAppState: DA.LOADING,
    onError: g
  }), B = dx(I), Q = zA(
    (n) => {
      Wo(XA.STATE_CHANGED, { appState: DA.ERROR, error: n }), C(!1), e.current(n), i(n), o(DA.ERROR);
    },
    [e, i, o, C]
  ), a = zA(
    (n) => {
      Wo(XA.STATE_CHANGED, { appState: n }), o(n);
    },
    [o]
  );
  return {
    appState: I,
    freemiumOverlayState: B,
    isCameraReady: A,
    setIsCameraReady: C,
    handleAppStateChange: a,
    handleError: Q,
    error: t
  };
}
var tB = ((g) => (g.AUTO_CAPTURE = "auto-capture", g.LONG_CAPTURE_SMILE = "long-capture-smile", g))(tB || {});
class KE {
  constructor() {
    p(this, "appKey", "");
    p(this, "deviceId", "");
  }
  async countlyFetch(I) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const A = {};
    A.method = "GET", A.headers = t;
    const e = A, o = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const C = Zt(i);
    try {
      await fetch("" + o + C + "&" + I, e);
    } catch (B) {
      console.error("Countly Error", B);
    }
  }
  async init(I, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = I;
    const A = { _app_version: hC() }, e = { organization: lC(window.location.href) }, o = Zt({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(e) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const t = Zt(I);
    await this.countlyFetch(t);
  }
  async sendEvent(I, t, A) {
    const e = {};
    e.key = I, e.count = 1, e.dur = A, e.segmentation = t;
    const o = [e], i = Zt({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, t) {
    await this.sendEvent(tB.AUTO_CAPTURE, I, t);
  }
}
const Xt = new KE();
class HE {
  constructor() {
    p(this, "countly", Xt);
  }
  createSegmentation(I) {
    return { appVersion: hC(), ...I };
  }
  init(I) {
    if (ha()) return;
    const t = xx();
    Xt.init(t, I);
  }
  endSession() {
    Xt.endSession();
  }
  walleye(I, t) {
    const A = {};
    A.nocturne = I, A.customer = t;
    const e = this.createSegmentation(A);
    Xt.sendAutoCaptureEvent(e);
  }
}
class qE extends HE {
  trackCaptureProcess({ averageFps: I, captureProcessDurationInMs: t, detection: A, deviceName: e, facingMode: o, imageResolution: i, instructionSet: C }) {
    if (!A) return;
    const B = sx(t), Q = this.createSegmentation({ hotspots: et(A.hotspots), brightness: et(A.brightness), confidence: et(A.confidence), sharpness: et(A.sharpness), smallestEdge: et(A.smallestEdge), camera: Ex(e, o), imageResolution: i.width + "x" + i.height, averageFps: cx(I), captureTime: rx(B), instructionSet: C });
    this.countly.sendAutoCaptureEvent(Q, B);
  }
}
const OE = new qE();
let F;
const jA = new Array(-6558 + 2 * 752 + 2 * 2591).fill(void 0);
jA.push(void 0, null, !0, !1);
function rI(g) {
  return jA[g];
}
let vA = 536 * 16 + 1696 + 1284 * -8, Bt = null;
function Eg() {
  return (Bt === null || Bt.byteLength === 9013 + 6835 * -1 + 3 * -726) && (Bt = new Uint8Array(F.memory.buffer)), Bt;
}
const rg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, TE = typeof rg.encodeInto == "function" ? function(g, I) {
  return rg.encodeInto(g, I);
} : function(g, I) {
  const t = rg.encode(g);
  I.set(t);
  const A = {};
  return A.read = g.length, A.written = t.length, A;
};
function lt(g, I, t) {
  if (t === void 0) {
    const C = rg.encode(g), B = I(C.length, -229 * 3 + 3499 + -2811) >>> 3620 + -4 * -314 + -4876;
    return Eg().subarray(B, B + C.length).set(C), vA = C.length, B;
  }
  let A = g.length, e = I(A, 6135 + -7 * 207 + -4685) >>> 1 * -9414 + 1 * -949 + 10363;
  const o = Eg();
  let i = 2249 + -95 * -43 + -6334;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > -542 * 16 + -1 * -3343 + -4 * -1364) break;
    o[e + i] = C;
  }
  if (i !== A) {
    i !== 1 * 9031 + -820 * 11 + -11 && (g = g.slice(i)), e = t(e, A, A = i + g.length * (-415 * 13 + 3960 + 1438), -2223 + 5 * -877 + 6609) >>> -4 * 1107 + 5833 + 5 * -281;
    const C = Eg().subarray(e + i, e + A), B = TE(g, C);
    i += B.written, e = t(e, A, i, 17 * 578 + -1520 + -8305) >>> 345 * -26 + -1 * -1977 + 37 * 189;
  }
  return vA = i, e;
}
function gB(g) {
  return g == null;
}
let Qt = null;
function JA() {
  return (Qt === null || Qt.byteLength === -24 * 22 + 183 * 12 + -1668) && (Qt = new Int32Array(F.memory.buffer)), Qt;
}
let rt = jA.length;
function ZE(g) {
  g < -7188 + -30 * -244 || (jA[g] = rt, rt = g);
}
function IB(g) {
  const I = rI(g);
  return ZE(g), I;
}
const sI = {};
sI.ignoreBOM = !0, sI.fatal = !0;
const oB = typeof TextDecoder < "u" ? new TextDecoder("utf-8", sI) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && oB.decode();
function Kg(g, I) {
  return g = g >>> 9654 + -8957 * 1 + 697 * -1, oB.decode(Eg().subarray(g, g + I));
}
function cI(g) {
  rt === jA.length && jA.push(jA.length + (1 * -6376 + 1 * -9277 + 2609 * 6));
  const I = rt;
  return rt = jA[I], jA[I] = g, I;
}
let nt = null;
function iB() {
  return (nt === null || nt.byteLength === -32 * -87 + 5775 + -8559) && (nt = new Uint32Array(F.memory.buffer)), nt;
}
function ti(g, I) {
  const t = I(g.length * 4, 4) >>> 0, A = iB();
  for (let e = 1 * 7683 + 7132 + -14815; e < g.length; e++)
    A[t / (327 * -28 + 1 * -2251 + 11411) + e] = cI(g[e]);
  return vA = g.length, t;
}
function gi(g, I) {
  g = g >>> -277 * 27 + 1217 * 8 + -2257;
  const t = iB(), A = t.subarray(g / (-1 * -4993 + 744 + -5733), g / (1 * -5233 + -6337 + -3 * -3858) + I), e = [];
  for (let o = 2149 * -4 + -8334 + 16930; o < A.length; o++)
    e.push(IB(A[o]));
  return e;
}
function jE(g, I) {
  const t = lt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), A = vA, e = lt(I, F.__wbindgen_malloc, F.__wbindgen_realloc), o = vA, i = F.is_mobile_supported(t, A, e, o);
  return TI.__wrap(i);
}
const dI = {};
dI.register = () => {
}, dI.unregister = () => {
};
const Ii = typeof FinalizationRegistry > "u" ? dI : new FinalizationRegistry((g) => F.__wbg_licensevalidationresult_free(g >>> -45 * 111 + 9703 * -1 + -14698 * -1));
class TI {
  static __wrap(I) {
    I = I >>> -4 * -316 + -5556 + -4 * -1073;
    const t = Object.create(TI.prototype);
    return t.__wbg_ptr = I, Ii.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = 7642 + 1 * 5327 + -12969, Ii.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, t, A, e, o) {
    var i = gB(t) ? 0 : lt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), C = vA;
    const B = ti(A, F.__wbindgen_malloc), Q = vA, a = ti(e, F.__wbindgen_malloc), n = vA, s = lt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), x = vA, r = F.licensevalidationresult_new(I, i, C, B, Q, a, n, s, x);
    return this.__wbg_ptr = r >>> 272 * 2 + -8692 + -14 * -582, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 9983 + 6236 * 1 + -331 * 49;
  }
  get features_json() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = JA()[A / (-16536 + 1654 * 10) + (3867 + 7597 * 1 + -11464)], t = JA()[A / (-1070 * -7 + -1 * 1613 + -5873) + (2171 * -4 + -7291 + 2 * 7988)];
      let e;
      return I !== 0 && (e = Kg(I, t).slice(), F.__wbindgen_free(I, t * (-83 * 31 + -167 * 40 + 9254), 7862 + -371 * -11 + -11942)), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-8508 + -2131 * -4);
    }
  }
  get errors() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(e, this.__wbg_ptr);
      var I = JA()[e / (829 * -7 + 8 * 807 + -649) + (-7269 + -3 * -2423)], t = JA()[e / (7595 + 71 * 55 + 5748 * -2) + (659 * 2 + 1701 + -3018)], A = gi(I, t).slice();
      return F.__wbindgen_free(I, t * (9488 + 5 * -723 + -1 * 5869), 717 * 1 + 936 + -1649), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-346 * -7 + 1 * -3109 + 19 * 37);
    }
  }
  get warnings() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(e, this.__wbg_ptr);
      var I = JA()[e / (-1600 * -4 + -5183 + -1 * 1213) + 0], t = JA()[e / (-687 * -14 + 4576 + 473 * -30) + (2425 + -100 * 82 + 5776)], A = gi(I, t).slice();
      return F.__wbindgen_free(I, t * (6118 + 622 * -4 + -49 * 74), -3 * -2918 + -6324 + 1213 * -2), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-457 * -17 + -5 * -1957 + -17538);
    }
  }
  get customer() {
    let I, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = JA()[o / (6 * 72 + 1 * -4913 + 4485) + (-189 * 47 + -4406 + 13289)], e = JA()[o / 4 + (129 * 33 + 1 * 4265 + -8521)];
      return I = A, t = e, Kg(A, e);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-4895 * 1 + -9756 + 14667), F.__wbindgen_free(I, t, -9383 + -1 * 2039 + 11423);
    }
  }
}
async function VE(g, I) {
  if (typeof Response == "function" && g instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(g, I);
    } catch (A) {
      if (g.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", A);
      else throw A;
    }
    const t = await g.arrayBuffer();
    return await WebAssembly.instantiate(t, I);
  } else {
    const t = await WebAssembly.instantiate(g, I);
    if (t instanceof WebAssembly.Instance) {
      const A = {};
      return A.instance = t, A.module = g, A;
    } else return t;
  }
}
function PE() {
  const g = {};
  return g.wbg = {}, g.wbg.__wbindgen_string_get = function(I, t) {
    const A = rI(t), e = typeof A == "string" ? A : void 0;
    var o = gB(e) ? 0 : lt(e, F.__wbindgen_malloc, F.__wbindgen_realloc), i = vA;
    JA()[I / (-44 * 12 + -3797 + -333 * -13) + (-1824 + 13 * -461 + -2606 * -3)] = i, JA()[I / (1 * 3083 + 2250 * 2 + -583 * 13) + (-443 * 3 + 19 * 111 + -780)] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    IB(I);
  }, g.wbg.__wbindgen_string_new = function(I, t) {
    const A = Kg(I, t);
    return cI(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return cI(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return rI(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, t) {
    throw new Error(Kg(I, t));
  }, g;
}
function XE(g, I) {
  return F = g.exports, CB.__wbindgen_wasm_module = I, Qt = null, nt = null, Bt = null, F;
}
async function CB(g) {
  if (F !== void 0) return F;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0hPWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IHwTEAAQAAAAjBMQABcAAACjExAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAB8ExAAEAAAAMQTEAAQAAAA1BMQAAkAAACjExAACQAAAAyWEAAAAAAAj48QAAIAAABFAAAADAAAAAQAAABPAAAAUAAAAFEAAAAgICAgIHsgIHsKLAogfSgoCgoAAEUAAAAEAAAABAAAAFIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMATBQQABsAAABpAAAAFwAAADB4AADUEhAAGwAAAC8JAAAaAAAA1BIQABsAAAAoCQAAIgAAAGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvbWVtY2hyLnJznBQQACAAAACtAAAACQAAAJwUEAAgAAAAkQAAAB4AAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg3BQQABIAAADuFBAAIgAAAHJhbmdlIGVuZCBpbmRleCAgFRAAEAAAAO4UEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAQBUQABYAAABWFRAADQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSBmcm9tIGFmdGVyIG1heGltdW0gdXNpemUAAAB0FRAAMQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplsBUQACwAAABzb3VyY2Ugc2xpY2UgbGVuZ3RoICgpIGRvZXMgbm90IG1hdGNoIGRlc3RpbmF0aW9uIHNsaWNlIGxlbmd0aCAo5BUQABUAAAD5FRAAKwAAADSPEAABAAAAaW52YWxpZCB1dGYtOCBzZXF1ZW5jZSBvZiAgYnl0ZXMgZnJvbSBpbmRleCA8FhAAGgAAAFYWEAASAAAAaW5jb21wbGV0ZSB1dGYtOCBieXRlIHNlcXVlbmNlIGZyb20gaW5kZXggAAB4FhAAKgAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEHursAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQayvwAAL2UZsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAKwXEAAfAAAAQgUAABIAAACsFxAAHwAAAEIFAAAoAAAArBcQAB8AAAA1BgAAFQAAAKwXEAAfAAAAYwYAABUAAACsFxAAHwAAAGQGAAAVAAAAWy4uLl1iZWdpbiA8PSBlbmQgKCA8PSApIHdoZW4gc2xpY2luZyBgACEYEAAOAAAALxgQAAQAAAAzGBAAEAAAAGR5EAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgAGQYEAALAAAAbxgQACYAAACVGBAACAAAAJ0YEAAGAAAAZHkQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAABkGBAACwAAAMwYEAAWAAAAZHkQAAEAAABsaWJyYXJ5L2NvcmUvc3JjL3N0ci9tb2QucnMA/BgQABsAAAADAQAALAAAAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAAAAoGRAAJQAAABoAAAA2AAAAKBkQACUAAAAKAAAAKwAAAAAGAQEDAQQCBQcHAggICQIKBQsCDgQQARECEgUTERQBFQIXAhkNHAUdCB8BJAFqBGsCrwOxArwCzwLRAtQM1QnWAtcC2gHgBeEC5wToAu4g8AT4AvoD+wEMJzs+Tk+Pnp6fe4uTlqKyuoaxBgcJNj0+VvPQ0QQUGDY3Vld/qq6vvTXgEoeJjp4EDQ4REikxNDpFRklKTk9kZVy2txscBwgKCxQXNjk6qKnY2Qk3kJGoBwo7PmZpj5IRb1+/7u9aYvT8/1NUmpsuLycoVZ2goaOkp6iturzEBgsMFR06P0VRpqfMzaAHGRoiJT4/5+zv/8XGBCAjJSYoMzg6SEpMUFNVVlhaXF5gY2Vma3N4fX+KpKqvsMDQrq9ub76TXiJ7BQMELQNmAwEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLTkOBNwkWCggYO0U5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSZSSysIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFgItiHkgICoCmXiJFCwoGDRM6Bgo2LAQXgLk8ZFMMSAkKRkUbSAhTDUkHCoD2RgodA0dJNwMOCAoGOQcKgTYZBzsDHFYBDzINg5tmdQuAxIpMYw2EMBAWj6qCR6G5gjkHKgRcBiYKRgooBROCsFtlSwQ5BxFABQsCDpf4CITWKgmi54EzDwEdBg4ECIGMiQRrBQ0DCQcQkmBHCXQ8gPYKcwhwFUZ6FAwUDFcJGYCHgUcDhUIPFYRQHwYGgNUrBT4hAXAtAxoEAoFAHxE6BQGB0CqC5oD3KUwECgQCgxFETD2AwjwGAQRVBRs0AoEOLARkDFYKgK44HQ0sBAkHAg4GgJqD2AQRAw0DdwRfBgwEAQ8MBDgICgYoCCJOgVQMHQMJBzYIDgQJBwkHgMslCoQGAAEDBQUGBgIHBggHCREKHAsZDBoNEA4MDwQQAxISEwkWARcEGAEZAxoHGwEcAh8WIAMrAy0LLgEwAzECMgGnAqkCqgSrCPoC+wX9Av4D/wmteHmLjaIwV1iLjJAc3Q4PS0z7/C4vP1xdX+KEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpOjtFSVdbXF5fZGWNkam0urvFyd/k5fANEUVJZGWAhLK8vr/V1/Dxg4WLpKa+v8XHz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4Btcd7fDh9ubxwdX31+rq9/u7wWFx4fRkdOT1haXF5+f7XF1NXc8PH1cnOPdHWWJi4vp6+3v8fP19+aQJeYMI8f0tTO/05PWlsHCA8QJy/u725vNz0/QkWQkVNndcjJ0NHY2ef+/wAgXyKC3wSCRAgbBAYRgawOgKsFHwmBGwMZCAEELwQ0BAcDAQcGBxEKUA8SB1UHAwQcCgkDCAMHAwIDAwMMBAUDCwYBDhUFTgcbB1cHAgYXDFAEQwMtAwEEEQYPDDoEHSVfIG0EaiWAyAWCsAMaBoL9A1kHFgkYCRQMFAxqBgoGGgZZBysFRgosBAwEAQMxCywEGgYLA4CsBgoGLzFNA4CkCDwDDwM8BzgIKwWC/xEYCC8RLQMhDyEPgIwEgpcZCxWIlAUvBTsHAg4YCYC+InQMgNYaDAWA/wWA3wzynQM3CYFcFIC4CIDLBQoYOwMKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUwEgIoGq6QMFwQxoQSB2iYHDAUFgKYQgfUHASAqBkwEgI0EgL4DGwMPDWxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS91bmljb2RlX2RhdGEucnPsHhAAKAAAAFAAAAAoAAAA7B4QACgAAABcAAAAFgAAAGxpYnJhcnkvY29yZS9zcmMvZXNjYXBlLnJzXHV7AAAANB8QABoAAABiAAAAIwAAAEUAAAAEAAAABAAAAA4AAABVdGY4RXJyb3J2YWxpZF91cF90b2Vycm9yX2xlbgAAAEUAAAAEAAAABAAAAFMAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLKArKjAgLG+m4CwCqGAtHvtgLgD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8YoTkwHGFI8x6hTEA0YVDwaqFRT28hUp28oVIAz2FTZdGhUwDaIVQA4OFVruJhV+zkIVnQ6KFZIADuWfABf1oAcAAHAC0BAQECAQIBAUgLMBUQAWUHAgYCAgEEIwEeG1sLOgkJARgEAQkBAwEFKwM8CCoYASA3AQEBBAgEAQMHCgIdAToBAQECBAgBCQEKAhoBAgI5AQQCBAICAwMBHgIDAQsCOQEEBQECBAEUAhYGAQE6AQECAQQIAQcDCgIeATsBAQEMAQkBKAEDATcBAQMFAwEEBwILAh0BOgECAQIBAwEFAgcCCwIcAjkCAQECBAgBCQEKAh0BSAEEAQIDAQEIAVEBAgcMCGIBAgkLB0kCGwEBAQEBNw4BBQECBQsBJAkBZgQBBgECAgIZAgQDEAQNAQICBgEPAQADAAMdAh4CHgJAAgEHCAECCwkBLQMBAXUCIgF2AwQCCQEGA9sCAgE6AQEHAQEBAQIIBgoCATAfMQQwBwEBBQEoCQwCIAQCAgEDOAEBAgMBAQM6CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsuAzABAgQCAicBQwYCAgICDAEIAS8BMwEBAwICBQIBASoCCAHuAQIBBAEAAQAQEBAAAgAB4gGVBQADAQIFBCgDBAGlAgAEAAJQA0YLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJCgQCAV8DAgEBAgYBAgGdAQMIFQI5AgEBAQEWAQ4HAwXDCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAgYBAWUDAgQBBQAJAQL1AQoCAQEEAZAEAgIEASAKKAYCBAgBCQYCAy4NAQIABwEGAQFSFgIHAQIBAnoGAwEBAgEHAQFIAgMBAQEAAgsCNAUFAQEBAAEGDwAFOwcAAT8EUQEAAgAuAhcAAQEDBAUICAIHHgSUAwA3BDIIAQ4BFgUBDwAHARECBwECAQVkAaAHAAE9BAAEAAdtBwBggPAATGF5b3V0c2l6ZWFsaWduAABFAAAABAAAAAQAAABUAAAASQAAAAQAAAAEAAAATQAAAE5vbmVTb21lSQAAAAQAAAAEAAAAVQAAAEkAAAAEAAAABAAAAFYAAABCT09MRUFOSU5URUdFUkJJVCBTVFJJTkdPQ1RFVCBTVFJJTkdOVUxMT0JKRUNUIElERU5USUZJRVJSRUFMRU5VTUVSQVRFRFVURjhTdHJpbmdTRVFVRU5DRVNFVE51bWVyaWNTdHJpbmdQcmludGFibGVTdHJpbmdUZWxldGV4U3RyaW5nVmlkZW90ZXhTdHJpbmdJQTVTdHJpbmdVVENUaW1lR2VuZXJhbGl6ZWRUaW1lVmlzaWJsZVN0cmluZ0JNUFN0cmluZ0FQUExJQ0FUSU9OIFtdICggJBAADQAAAC0kEAADAAAANI8QAAEAAABwcmltaXRpdmVjb25zdHJ1Y3RlZEgkEAAJAAAAUSQQAAsAAABDT05URVhULVNQRUNJRklDIFsAAGwkEAASAAAALSQQAAMAAAA0jxAAAQAAAFBSSVZBVEUgWwAAAJgkEAAJAAAALSQQAAMAAAA0jxAAAQAAAFRhZygweAAAvCQQAAYAAACPjxAAAgAAADSPEAABAAAAIGF0IERFUiBieXRlIAAAANwkEAANAAAAZGF0ZS90aW1lIGVycm9yAPQkEAAPAAAAb3BlcmF0aW9uIGZhaWxlZAwlEAAQAAAAZmlsZSBub3QgZm91bmQAACQlEAAOAAAAQVNOLjEgREVSIG1lc3NhZ2UgaXMgaW5jb21wbGV0ZTogZXhwZWN0ZWQgLCBhY3R1YWwgADwlEAAqAAAAZiUQAAkAAABJL08gZXJyb3I6IACAJRAACwAAAGluZGVmaW5pdGUgbGVuZ3RoIGRpc2FsbG93ZWSUJRAAHAAAAGluY29ycmVjdCBsZW5ndGggZm9yIAAAALglEAAVAAAAQVNOLjEgIG5vdCBjYW5vbmljYWxseSBlbmNvZGVkIGFzIERFUgAAANglEAAGAAAA3iUQAB8AAABtYWxmb3JtZWQgT0lEAAAAECYQAA0AAAB1bmtub3duL3Vuc3VwcG9ydGVkIE9JRDogAAAAKCYQABkAAABTRVQgT0YgY29udGFpbnMgZHVwbGljYXRlAAAATCYQABkAAABTRVQgT0Ygb3JkZXJpbmcgZXJyb3IAAABwJhAAFQAAAGludGVnZXIgb3ZlcmZsb3eQJhAAEAAAAEFTTi4xIERFUiBtZXNzYWdlIGlzIHRvbyBsb25nAAAAqCYQAB0AAABQRU0gZXJyb3I6IADQJhAACwAAAEyMEAARAAAAcmVhZGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24A7CYQAC8AAAB1bmtub3duIHRhZyBtb2RlJCcQABAAAABpbnZhbGlkIHRhZyBudW1iZXIAADwnEAASAAAAdW5leHBlY3RlZCBBU04uMSBERVIgdGFnOiAAAFgnEAAaAAAAZXhwZWN0ZWQgLCAAfCcQAAkAAACFJxAAAgAAAGdvdCCYJxAABAAAAHVua25vd24vdW5zdXBwb3J0ZWQgQVNOLjEgREVSIHRhZzogMHgAAACkJxAAJQAAAHRyYWlsaW5nIGRhdGEgYXQgZW5kIG9mIERFUiBtZXNzYWdlOiBkZWNvZGVkICBieXRlcywgIGJ5dGVzIHJlbWFpbmluZwAAANQnEAAtAAAAASgQAAgAAAAJKBAAEAAAAG1hbGZvcm1lZCBBU04uMSBERVIgdmFsdWUgZm9yIAAANCgQAB4AAABFcnJvcmtpbmQAAABJAAAALAAAAAQAAABXAAAAcG9zaXRpb25JAAAABAAAAAQAAABYAAAARGF0ZVRpbWVGYWlsZWRGaWxlTm90Rm91bmRJbmNvbXBsZXRlZXhwZWN0ZWRfbGVuSQAAAAQAAAAEAAAAWQAAAGFjdHVhbF9sZW4AAEkAAAAEAAAABAAAAFYAAABJbwAASQAAAAQAAAAEAAAAFAAAAEluZGVmaW5pdGVMZW5ndGh0YWcASQAAAAQAAAAEAAAAVQAAAE5vbmNhbm9uaWNhbE9pZE1hbGZvcm1lZEkAAAAEAAAABAAAAFoAAABTZXREdXBsaWNhdGVTZXRPcmRlcmluZ092ZXJmbG93T3Zlcmxlbmd0aFBlbUkAAAAEAAAABAAAAFsAAABSZWFkZXJUYWdNb2RlVW5rbm93blRhZ051bWJlckludmFsaWRUYWdVbmV4cGVjdGVkAAAAXAAAAAMAAAABAAAAXQAAAGFjdHVhbFRhZ1Vua25vd25ieXRlSQAAAAQAAAAEAAAASgAAAFRyYWlsaW5nRGF0YWRlY29kZWRyZW1haW5pbmdVdGY4SQAAAAQAAAAEAAAAXgAAAFZhbHVlAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAOQAAAAAAAAABAAAARAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NoYTEtMC4xMC42L3NyYy9saWIucnMAAFAqEABeAAAAcQAAABMAAABVbmtub3duIEpTT04gaXRlbQoAAMAqEAASAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL3NpZ25hdHVyZV92ZXJpZmllci5ycwAA3CoQAC4AAAA1AAAAMgAAAJ4QAgaoYc6J1fzqjbc9WtBLdEw+sUAA+h5nwPG/Mzo0/x5OvoFoy3GeoJm9up4/0o5sfajSWD31YbsLi2/nzZlMHINTsXGRoY2HHKpNaubySQUN0TPhdT3vjfnPeIhbTdBdZwRY+KXiNCguU5u2HXtanM1bL+iFANopq/wsoEKNAAEAAdwqEAAuAAAAUAAAAAoAAADcKhAALgAAAFEAAAAKAAAAY29udHJhY3Rfc2lnbmF0dXJlAADcKhAALgAAAFsAAAAKAAAA3CoQAC4AAABcAAAACgAAANwqEAAuAAAAZAAAAAoAAADcKhAALgAAAGUAAAAKAAAA3CoQAC4AAABeAAAAFAAAANwqEAAuAAAAUwAAABUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = PE();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: t, module: A } = await VE(await g, I);
  return XE(t, A);
}
function zt(g, I, t, A, e) {
  return aA(I - -835, t);
}
function tt(g, I, t, A, e) {
  return aA(I - 908, A);
}
function Hg() {
  const g = ["W4hcQ8krxSoz", "g8kRb1pdQa", "nCokW7qXA8khdmk5AmoTWRxcJa", "W7NcSvXOWRBcQejEWRFcSmkNWOK", "WQaKiSoJrcBdJa", "W71ilmofCa", "W7hdKSkcW4iV", "WPfhW5ddU3ajW7GMW5C", "W53dPmo/aHO", "DeqkW5uK", "WRHhWP15WOe", "g2iKsCkb", "W53dGvT7sqlcISoRW5BcUhnrW7i", "WPxdSSoxW4VcG8oscsfij8kt", "AmkegSoDbGjq", "W5BdQCkQsYS", "mtzqjcjpWPe", "nSkWW6quuW", "r8o5wW3cPmoZWP3dQSogWQRdRGSc", "o8kpW5aIeW", "BbP6oa", "oSoNFSkQW7C", "W6ejo8ohwG", "W5u8cgddUW", "WPxcLmokWP1K", "W5JcLSkmW6qulCooWQa", "DmkEW7PiWQGcvSomtZr2", "CSkQFSobgG", "sCoRW7RdICoqW5ioiq", "W7JcKhtdKGe", "FmoZv8kWvq", "WO53ASoTW78+uCkwWRJcHSospmk0", "wSoGj8kCeW", "W4T9dq0ZhSoxW7dcTvVdSSkOBa", "W4RdImkhW4q3W73dTCkZW5j7vCoCja", "WOL7smk4wCkZcq", "WQqznqX0vSklW77dKM3cGaCf", "W5xdICkWsZ4", "w8oOkCkqga", "WPhdQ8oXd8kBzbu8W4NcSeS", "W5/cUCk1uSoJ", "WOtcKbyTga", "WPyIe3BdSG", "W5ldMCoZmCkX", "WR9aWO9/WPi", "bCkRgfFdMW", "WOxdNSoHnCku", "zsdcICoOWPpdNZiavW", "W7NcTvnJWRdcRJf8WOJcNSkDWPHT", "jLeyWPddSa", "WRVdPry/", "WRxcISoEWPXPWO/cM8k+W4VcGc3dK8oy", "WQGzmGTZgmoRW5BdQKlcTa"];
  return Hg = function() {
    return g;
  }, Hg();
}
function _t(g, I, t, A, e) {
  return aA(A - -755, t);
}
(function(g, I) {
  function t(B, Q, a, n, s) {
    return aA(n - -122, B);
  }
  const A = g();
  function e(B, Q, a, n, s) {
    return aA(s - -406, n);
  }
  function o(B, Q, a, n, s) {
    return aA(B - -24, Q);
  }
  function i(B, Q, a, n, s) {
    return aA(Q - -637, a);
  }
  function C(B, Q, a, n, s) {
    return aA(Q - -252, a);
  }
  for (; ; )
    try {
      if (parseInt(t("JURU", 183, 190, 168, 183)) / 1 * (parseInt(e(-53, -90, -82, "vRwt", -80)) / 2) + parseInt(o(265, "rR]U", 286, 266, 250)) / 3 + parseInt(e(-116, -94, -90, "(AEg", -102)) / 4 * (-parseInt(C(89, 86, "E(uZ", 96, 69)) / 5) + -parseInt(C(47, 53, "yqL]", 58, 36)) / 6 * (-parseInt(e(-48, -76, -64, "vnhG", -67)) / 7) + -parseInt(t("ZINb", 189, 198, 171, 182)) / 8 + -parseInt(e(-105, -129, -110, "OkIu", -103)) / 9 + -parseInt(i(-325, -321, "aT9X", -306, -329)) / 10 * (-parseInt(o(303, "JURU", 284, 283, 311)) / 11) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Hg, -483967 + -1454 * 201 + -221864 * -6);
function aA(g, I) {
  const t = Hg();
  return aA = function(A, e) {
    A = A - (577 * 2 + -8086 + -361 * -20);
    let o = t[A];
    if (aA.Sfamco === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      aA.aANBZF = a, g = arguments, aA.Sfamco = !0;
    }
    const C = t[312 + -156 * 2], B = A + C, Q = g[B];
    return Q ? o = Q : (aA.IytDIZ === void 0 && (aA.IytDIZ = !0), o = aA.aANBZF(o, e), g[B] = o), o;
  }, aA(g, I);
}
function zE(g, I, t, A, e) {
  return aA(e - 3, t);
}
var Ci;
class _E {
  constructor() {
    p(this, Ci, !1);
  }
  async [(Ci = zt(-499, -522, "Yzmu") + zt(-518, -517, "hyrm") + _t(-409, -415, "OkIu", -423), tt(1193, 1219, 1217, "L$zs"))](I) {
    function t(C, B, Q, a, n) {
      return zE(C - 438, B - 444, C, a - 94, n - 342);
    }
    function A(C, B, Q, a, n) {
      return tt(C - 310, Q - 28, Q - 496, C);
    }
    function e(C, B, Q, a, n) {
      return _t(C - 39, B - 439, C, Q - 176);
    }
    function o(C, B, Q, a, n) {
      return tt(C - 347, Q - -335, Q - 417, B);
    }
    function i(C, B, Q, a, n) {
      return _t(C - 480, B - 247, B, a - 265);
    }
    try {
      const C = I + (t("aAxf", 687, 705, 666, 678) + "/") + Jo;
      await CB(C), this[t("zQL1", 668, 662, 660, 676) + e("b]yK", -297, -273, -299, -272) + i(-147, "[wSZ", -153, -161, -164)] = !0;
    } catch {
      this[i(-143, "#XF*", -167, -156) + o(850, "8iLQ", 874) + t("[wSZ", 696, 699, 654, 674)] = !1, console[e("vnhG", -307, -291)](Jo + (A("5v(5", 1261, 1256) + t("$&DX", 661, 668, 628, 647) + o(921, "yrFU", 913) + t("#XF*", 679, 674, 669, 682) + t("b]yK", 643, 670, 624, 644) + i(-172, "I!v)", -205, -180) + i(-197, "bQSy", -165, -182) + e("Yzmu", -291, -283) + o(873, "rR]U", 870) + o(877, "VOHX", 885) + i(-212, "7hTd", -206, -190) + o(885, "Q]#S", 894) + t("8iLQ", 666, 656, 682, 680) + e("[wSZ", -257, -256) + "n."));
    }
  }
  [_t(-453, -437, "zQL1", -464) + zt(-512, -507, "b]yK") + tt(1193, 1200, 1194, "xtUZ") + "ed"]() {
    function I(A, e, o, i, C) {
      return zt(A - 317, C - 1410, i);
    }
    function t(A, e, o, i, C) {
      return tt(A - 254, e - -1093, o - 138, i);
    }
    return this[t(141, 151, 157, "xtUZ") + I(912, 896, 868, "!eAI", 890) + t(117, 129, 138, "aAxf")];
  }
}
class b0 extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function j(g, I) {
  var t = qg();
  return j = function(A, e) {
    A = A - 331;
    var o = t[A];
    if (j.YEkEzu === void 0) {
      var i = function(n) {
        for (var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", r = "", d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (var w = 0, R = x.length; w < R; w++)
          r += "%" + ("00" + x.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(r);
      }, C = function(n, s) {
        var x = [], r = 0, d, h = "";
        n = i(n);
        var E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (var u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      j.CMyipi = C, g = arguments, j.YEkEzu = !0;
    }
    var B = t[0], Q = A + B, a = g[Q];
    return a ? o = a : (j.WMkdxv === void 0 && (j.WMkdxv = !0), o = j.CMyipi(o, e), g[Q] = o), o;
  }, j(g, I);
}
function k0(g, I, t, A, e) {
  return j(e - 814, I);
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return j(a - 718, n);
  }
  function A(Q, a, n, s, x) {
    return j(a - -274, n);
  }
  function e(Q, a, n, s, x) {
    return j(a - -133, x);
  }
  var o = g();
  function i(Q, a, n, s, x) {
    return j(a - -184, s);
  }
  function C(Q, a, n, s, x) {
    return j(x - -931, Q);
  }
  for (; ; )
    try {
      var B = -parseInt(t(1067, 1091, "!k7x", 1104, 1089)) / 1 + parseInt(C("80$0", -572, -544, -591, -565)) / 2 * (parseInt(C("p0!4", -597, -544, -598, -567)) / 3) + -parseInt(A(101, 78, "Kv*T", 49, 73)) / 4 + parseInt(C("#FwE", -598, -576, -588, -583)) / 5 * (parseInt(e(274, 251, 245, 230, "AXWD")) / 6) + parseInt(e(277, 250, 236, 271, "9c2^")) / 7 + -parseInt(t(1064, 1057, "*qnc", 1062, 1066)) / 8 * (-parseInt(i(164, 184, 185, "&Up*", 210)) / 9) + parseInt(i(180, 193, 224, "O%$r", 179)) / 10 * (-parseInt(A(73, 59, "(m(I", 70, 76)) / 11);
      if (B === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(qg, 199199);
function oi(g, I, t, A, e) {
  return j(I - -232, t);
}
function $t(g, I, t, A, e) {
  return j(A - 977, e);
}
function $A(g, I, t, A, e) {
  return j(g - 479, t);
}
function qg() {
  var g = ["WPXhWR46", "pevCW5i3", "WOrqWPaiW7y", "WOpdSbS5W6/dP8kMra", "W6v6vCkgoW", "mmkGamoNWOa", "dSoZW6iLWPKBW4tdI3nEW6DX", "WOHnWRiTWPDyW6Lt", "bSk7W6y5WOm", "Bg52W68wnY8oW6/cHrC", "W69VWPK", "oMCWWO7dL2XfWQn+WRfHW4y", "W7xdPNK", "W6FcTSkzFmoG", "WOSKW5NdLSkV", "W5qndgVdVhLjWPBdOmooW4C2", "Fbv7W5DUW5SgW4flW6bLgG", "oqj5tmkB", "W71UWOtcStu", "ESkEW7WUheBcVXZdPdtdOae", "EComxfDFW7FdT8k1jq", "FHn/W5bTW5X+W7vyW6PwamkV", "qSk6WPlcL8oM", "W4RcUNnUoW", "wSkRWPNcR8oy", "W4GDzSoVFG", "g0vZrCkqW50XfSoxWPtcUvOy", "W7zcW7RcP2nbWQJcHH8", "WODyW7juW7C", "W7rCjLTUwxRcL8o/aaa", "mZHmW7ZcLq", "wCk8WORcTmoF", "WQRcU8kTsGu", "i8ojWRf0qa", "W5pdUciNtG", "WQhcVcNcJhbyWPKqtG", "uSk8WPK", "W5OeW4ZdRCk7", "mCk+cSoW", "W7/dSCoRf1hdL8kiWQdcJ8oNkG", "WOjCWOW5W44", "W5CwWOaiWQ0", "g8k/W6y", "WQxcT8kQvWK", "W63cT8kGBSo/", "WO1ZoSoVWPKxW4FcGW", "W4WEWPy", "oSkHlSo6WPi", "DrtdIsjx", "W6BcPmk7FSoK", "W6G6W7W", "WPbBWQO6ia", "AL7cSG", "WQWGkYC3BWhcLG", "AXakWPfYeGiYEZ1n", "t8oDsSovvW", "lsviW4ldPCk4WRe6WPu", "bSoQW5NdTmkDkCkzW5mrFmoa", "WPXjm8kVpCkvm8k4W5/cKGnQ", "qSoDyCktW7e", "W7DRsmkAjG", "i8kEhW", "W6VdQNZcOxC"];
  return qg = function() {
    return g;
  }, qg();
}
function gt(g, I, t, A, e) {
  return j(g - -426, I);
}
var Ye, kt;
class ii {
  constructor(I) {
    V(this, Ye);
    V(this, kt);
    function t(C, B, Q, a, n) {
      return j(C - -424, n);
    }
    this[e(705, 724, "RR)t", 714) + e(663, 706, "IhE8", 682)] = I;
    function A(C, B, Q, a, n) {
      return j(a - 909, B);
    }
    function e(C, B, Q, a, n) {
      return j(a - 340, Q);
    }
    function o(C, B, Q, a, n) {
      return j(C - -152, Q);
    }
    function i(C, B, Q, a, n) {
      return j(B - 246, n);
    }
    try {
      T(this, Ye, I[A(1296, "Kv*T", 1299, 1291, 1317) + o(235, 205, "3JLV", 226, 210) + e(659, 690, "mS82", 686, 662)] && JSON[A(1263, "v8EI", 1274, 1274, 1290)](I[t(-66, -38, -49, -75, "#FwE") + e(707, 727, "o)8t", 699, 715) + o(215, 228, "q55R", 199, 224)])), T(this, kt, I[t(-87, -78, -108, -91, "(m(I") + i(588, 582, 575, 612, "v8EI")]);
    } catch (C) {
      console[t(-67, -88, -38, -90, "&*8M")](C);
    }
  }
  get [$A(849, 820, "jk#H") + "id"]() {
    function I(e, o, i, C, B) {
      return $A(B - -635, o - 294, i);
    }
    function t(e, o, i, C, B) {
      return $A(B - 95, o - 204, e);
    }
    function A(e, o, i, C, B) {
      return $A(i - -347, o - 233, o);
    }
    return this[A(541, "a4Qz", 511) + t("M48N", 935, 968, 935, 964)][I(217, 193, "73cY", 225, 224) + I(197, 234, "jbc8", 213, 213)];
  }
  get [gt(-45, "rC@W") + "s"]() {
    function I(A, e, o, i, C) {
      return $A(A - -201, e - 321, o);
    }
    function t(A, e, o, i, C) {
      return gt(C - 659, i);
    }
    return this[t(570, 605, 570, "OtIY", 595) + I(669, 649, "%)i4")][t(596, 583, 565, "&*8M", 578) + "s"];
  }
  get [$t(1303, 1353, 1313, 1331, "TbML") + k0(1139, "O%$r", 1180, 1189, 1169)]() {
    function I(e, o, i, C, B) {
      return $A(o - -612, o - 387, e);
    }
    function t(e, o, i, C, B) {
      return $A(B - -1006, o - 403, o);
    }
    function A(e, o, i, C, B) {
      return $A(C - -968, o - 210, B);
    }
    return this[t(-189, "jk#H", -191, -215, -189) + A(-169, -130, -122, -146, "jk#H")][A(-135, -130, -132, -135, "TbML") + I("!V06", 211)];
  }
  get [$t(1317, 1355, 1324, 1348, "%DI0") + "b"]() {
    return b(this, Ye);
  }
  get [oi(158, 153, "*3o&") + gt(-33, "rC@W")]() {
    return b(this, kt);
  }
  get [k0(1173, "OtIY", 1133, 1134, 1155) + oi(150, 157, "(m(I") + gt(-73, "iq0n") + $t(1312, 1311, 1331, 1309, "OtIY")]() {
    var e, o;
    function I(i, C, B, Q, a) {
      return gt(i - -542, a);
    }
    function t(i, C, B, Q, a) {
      return k0(i - 130, C, B - 143, Q - 2, a - -225);
    }
    function A(i, C, B, Q, a) {
      return $t(i - 486, C - 414, B - 457, C - -100, Q);
    }
    return !!((o = (e = b(this, Ye)) == null ? void 0 : e[I(-580, -562, -581, -561, "rC@W") + A(1191, 1217, 1208, "p0!4")]) != null && o[t(965, "jbc8", 930, 945, 945) + t(905, "p0!4", 939, 901, 924) + A(1282, 1252, 1271, "q55R") + A(1182, 1211, 1194, "o)8t") + A(1224, 1238, 1245, "TbML") + I(-637, -652, -616, -636, "LsyK") + A(1227, 1226, 1255, "F8mB") + "d"]);
  }
}
Ye = new WeakMap(), kt = new WeakMap();
function FA(g, I, t, A, e) {
  return IA(A - 714, e);
}
function IA(g, I) {
  const t = Og();
  return IA = function(A, e) {
    A = A - (-9189 + -2916 * -3 + 835);
    let o = t[A];
    if (IA.CtbnAV === void 0) {
      var i = function(n) {
        const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", r = "";
        for (let d = 0, h, E, u = 0; E = n.charAt(u++); ~E && (h = d % 4 ? h * 64 + E : E, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          E = s.indexOf(E);
        for (let d = 0, h = x.length; d < h; d++)
          r += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(r);
      };
      const a = function(n, s) {
        let x = [], r = 0, d, h = "";
        n = i(n);
        let E;
        for (E = 0; E < 256; E++)
          x[E] = E;
        for (E = 0; E < 256; E++)
          r = (r + x[E] + s.charCodeAt(E % s.length)) % 256, d = x[E], x[E] = x[r], x[r] = d;
        E = 0, r = 0;
        for (let u = 0; u < n.length; u++)
          E = (E + 1) % 256, r = (r + x[E]) % 256, d = x[E], x[E] = x[r], x[r] = d, h += String.fromCharCode(n.charCodeAt(u) ^ x[(x[E] + x[r]) % 256]);
        return h;
      };
      IA.LFKspI = a, g = arguments, IA.CtbnAV = !0;
    }
    const C = t[-8185 * 1 + -4854 + 13039 * 1], B = A + C, Q = g[B];
    return Q ? o = Q : (IA.FUyfeK === void 0 && (IA.FUyfeK = !0), o = IA.LFKspI(o, e), g[B] = o), o;
  }, IA(g, I);
}
function oA(g, I, t, A, e) {
  return IA(e - 346, t);
}
(function(g, I) {
  const t = g();
  function A(i, C, B, Q, a) {
    return IA(i - 875, C);
  }
  function e(i, C, B, Q, a) {
    return IA(a - 284, B);
  }
  function o(i, C, B, Q, a) {
    return IA(Q - -484, C);
  }
  for (; ; )
    try {
      if (-parseInt(A(1449, "wS*@", 1479, 1365, 1520)) / 1 + -parseInt(A(1333, "iQmK", 1205, 1301, 1422)) / 2 + -parseInt(e(722, 876, "q5jk", 753, 797)) / 3 * (-parseInt(A(1273, "q5jk", 1267, 1148, 1360)) / 4) + -parseInt(o(230, "oMZH", 135, 135, 238)) / 5 + parseInt(e(847, 649, "q5jk", 704, 767)) / 6 * (-parseInt(o(85, "wS*@", 96, 54, -9)) / 7) + parseInt(e(756, 821, "^!p[", 749, 867)) / 8 + -parseInt(e(902, 884, "dM9Y", 886, 785)) / 9 * (-parseInt(A(1351, "dM9Y", 1435, 1469, 1433)) / 10) === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Og, -440792 + -297865 * -2 + 428535);
function LA(g, I, t, A, e) {
  return IA(t - 27, g);
}
function Og() {
  const g = ["W5NcTHm", "oSksnSoAgGRdQCksemktiSooW44", "W7JcIGCHW6m", "Emo7espdKG", "W63dPCkpW7xdHmkaW79dAgWJ", "W67dGXNdUSoK", "xM/dOY8v", "W6VcKc49W4m", "WRpcTemEFa", "ymouzahcPW", "BKhdLt0K", "W5f2W4hdUCkh", "W6/dNSk1WR96", "dK7cKvNcQW", "jSoTqa", "WRO1a8o9pa", "W4WTnsq", "WRuMfq", "CCoUdtm", "e3dcLwNcRq", "W6u/fSoiWPe", "w0tcMmkDWRm", "WOuUWOtcQCoUrmkIhqhdSmoQW7jB", "W4pdSSobWP/dJW", "W7/cNreQW7q", "WQ0fW7ajeG", "WRddJGK", "yITtWQRdJG", "iaddHCoMeG", "dZuyiCkA", "nSk0xsrO", "WOH+b8o8WRS", "W6nmW64eba", "WQFcK3OPCq", "WRqNcSo6jq", "crxdIx7dRG", "FmkuWP7dV8kg", "ECo1cW", "kSk2xq", "tmkEsJ4E", "iCkPvxFcGX/cQ8oSWOldMmkbF8kB", "z8oiyG", "wSktWP/dPmkB", "WPSpW7C5eW", "yu3dMcSV", "WRJcSmorWQ0", "WOu1dmoMWOTAW6vqkSoqFc4", "W4S6pNLN", "W5z9W5FdSSkd", "belcG1hcVW", "E8olvsms", "WQudW6CPeq", "ibZdHmoSma", "WOCfWQqima", "W406i2vM", "ACoyDq", "W5fQW4ddS8kL", "r8onW6BdONu", "WRTTgCo6WQ0", "qSkIvYmf", "zcboWRZcIW", "W6ddN8kIW5r3", "tmkzvJKc", "W6/cUGuXWRC", "zCo6W4ddG2a", "WR/dJHjhWRe", "wIVcU8oSqq", "W6NdHahdKSo8", "W6rBW6CwaG", "W4izwx8", "W5HSW77dTCk0", "oqLfWOBcTG", "kmkjWOVdOCkl", "AmotACkEua", "WQ/cVmoklG0", "BSkMWRFdQwC", "WRddNZnhW4S", "i8o2W6muEW", "WQC7dSoQWPK", "AYXdWQRcGa", "WR3cImoWW4SRWOfiW7xdGmkkW47cPG", "WRWKeSo1oG", "BfddNGiO", "WQr/kSoLWQG", "W7xdS8o0W5ldPG", "W47dOIWhW4i", "WQhcUmoklG0", "ibHpWP7cRa", "WP7cUmonieu", "WQBcN2S", "W4qHk29W", "mZ/dS8oWfa", "DSkvr39l", "rMxcJmoMta", "lmoRW6S", "W6JdJrNcUCoL", "W7ZcGbeaW6C", "n8oNsSkcWO4", "lmoRW60dra", "W5dcTauOW7K", "WQHIbSo2WPK", "tmkovZKu", "lmogcYqxjWujc1BdQebI", "WQSZd8oFiq", "zmoADYFcVq", "W67dLmkZWRzY", "WQ3cKsfsoW", "iCoXqbr2", "W7VdHWufW6a", "W7/dNbajW5K", "WQrTgCo6WRm", "jbhdGW", "W7Swrgm", "W7ldGbufWQ4", "WQCdW7aLhG", "wcvSWQrV", "u8oUW5RdVNW", "psyyimkb", "WR/dKWjm", "W4Gfx3G7", "mHpdHCoNcq", "xMVcJCoHrW", "W5vNv8kSW50", "W75GlCoLWQ1XpG", "W4uqqW", "W5PTxG", "rSoJW70m", "C8kiWO7dRSkh", "WRFcTmoCWQFcMq", "WQ/cLw0jCG", "W7XrF8kCW4W", "W6XkW40Efa", "WQOfW6O4dq", "u2vmWQBcJq", "WO/cKwj3aa", "WRWOW7FcSYa", "W6ldJrNdNmoH", "jGddMmo6eW", "W5v0W57dJ8kY", "WR3cSmomWQdcLa", "nxCyW7FdMSo1WPtcNv4CWQFcNs4", "W5/dM8ot", "W7pdGriLW6m", "WQRdTHDWWRi", "W5SwqNGT", "DeddHmoagLXkrW", "WP9obZP4WR8ilCkujGBdQG", "W5BcTaj8W74", "W5hcQcKQW7y", "EmohEqZcUW", "DSo1fWxdMW", "q8oIW7Gcdq", "amkjvZPW", "W6ddN8kUWO4", "W7ZcGW8DW6u", "r8o9W4FdO2y", "pd3dHmoriq", "yYbgWQ7cMW", "BSokW5ldICkhWP0gW6/cHq", "WRhdVWzhW4W", "W5NcTIK", "bcGEBSkb", "W7ldLGhdVmoO", "y0ldUciR", "W7/dJXidW6y", "WRJcG8k0WRnHW71wW4W", "WRZcM2SI", "WOG7W6RcRJO", "W6tdLmk1", "xmoZW5tdQum", "WR5Mv8opWOtdGCkOWRSz", "BCkaxhfg", "W5PRq8k6W5W", "WOqeWRlcPSoj", "WQRcJNe/", "xmo1W5BdQge", "dKdcLG", "WRBcPmolWRFcKW", "a1xcIKpcUq", "WOSrx34M", "W7HXW5hdUCk5", "e0JcICkWWQe", "W6r5W4BdTa", "A8omW5FcTSomW6GyW4RcPgNdSgC", "W5pcVdRcGa0", "WQlcMxWIBa", "vulcICkWWRu", "EwVcJCo8sW", "W5hcVcRdJq", "W6q+bmoSWPi", "x1pcG8kTWRu", "WOLfWQJcQSov", "vM3cKchcQKBcPdTDWPJcQmkf", "m8oNt8ksWP4", "rSo9W5NdPgS", "WRRdNCkFWOX/W6bA", "aZq9l8kB", "zsbeWQVcIW", "tmoOW7uqha", "C8krqq", "W4n5W4ddSSk+", "W5HLsG", "AKxcQ8kYBG", "WQxdNYHgW40", "CcrsWQe", "nmo2rSkv", "zZhcNmoFFW", "b0lcKxtcPq", "uLFcHSkQWOC", "W5L5W5VdSG", "W6vmW7mybq", "qN7cS8o7qq", "W73cIHCjW68", "twxcKCoMua", "WR/cN2e4", "W6vqW7isvW", "kZ7cKmopFW", "W65iW6SdnG", "W5FdLmo0WQRdIW", "W5FdJSofWPC", "WReiWRDctKNdPCkpW77cJIZcGSkm", "CmkQWQFdK2m", "WQZcMZa", "tZjXWOzY", "qCkctsmq", "ysPvWQhcIG", "WO3cGqTaWRy", "W4CEsM4S", "W6tdKmkUWPq", "z8oQvmkkrW", "EwVcJmo/aG", "W6/dGWhdSmo2", "qmoUW5ZdO3S", "W6ddN8kHWPu", "W7HTgCkBW7C", "WQSZcCohpa", "ASkUWQddR2e", "cvtcSLhcUq", "ESkpWP7dRSoj", "W53dLCoe", "WPHRWQ/cKCo8", "W4KRjq", "WO7cIgSJBq", "bI4jk8kg", "ECkoWPJdPCkn", "oCoRtCkdWOu", "W7tdMXuuW6e", "WQrIe8o8", "W4FcTJW", "W6FdGSkIW5r3", "BSopDCkiaW", "WPVcVSkyWOFcSW", "W4vTvW", "WRiIa8oFjG", "WQhdRZ17WRy", "m8kvmCoBg03cVSkHoSk3kG", "WRipWRzbr0RcNCkUW4ZcNJNcIq", "dciloSkD", "j8oHW7GJzW", "W71jsqBcVW", "W5qEW60Efa"];
  return Og = function() {
    return g;
  }, Og();
}
function xA(g, I, t, A, e) {
  return IA(e - 93, A);
}
function iA(g, I, t, A, e) {
  return IA(I - 802, e);
}
var Bi, Qi, ni;
class $E {
  constructor(I) {
    p(this, ni);
    p(this, Qi, [iA(1373, 1301, 1295, 1184, "kXiB") + LA("q5jk", 704, 667) + "ic", iA(1286, 1198, 1124, 1084, "lmj1") + LA("q5jk", 479, 594) + "ic"]);
    p(this, Bi);
    function t(e, o, i, C, B) {
      return IA(e - 327, o);
    }
    function A(e, o, i, C, B) {
      return IA(i - -497, B);
    }
    this[t(931, "hCH%") + A(-109, 24, 18, 33, "iQmK") + "d"] = I;
  }
  async [(ni = oA(1099, 969, "obTv", 962, 969) + "se", Qi = FA(1230, 1357, 1290, 1342, "btR]") + oA(893, 865, "Mnn$", 757, 875) + FA(1217, 1262, 1195, 1132, "l]5s") + LA("Z7p*", 569, 550), Bi = xA(607, 673, 675, "qFV@", 734) + xA(700, 606, 773, "5OUg", 647), FA(1097, 1244, 1075, 1185, "q5jk"))](I) {
    const t = await this[C(2, -171, "F*#q", -78) + C(158, -22, "iQmK", 31) + o(105, 62, 39, 27, "%5Rd")](I);
    function A(B, Q, a, n, s) {
      return iA(B - 385, n - 118, a - 124, n - 489, B);
    }
    function e(B, Q, a, n, s) {
      return oA(B - 199, Q - 51, B, n - 191, n - -906);
    }
    await Promise[C(-153, -162, "%5Rd", -152) + C(2, -104, "2qGF", -128)]([this[e("*uOM", -145, -127, -100) + C(-92, -73, "F*#q", -27) + "d"][i(-359, -416, -334, -366, "0m3u")](I), this[C(-107, -225, "4B17", -121) + e("kXiB", -147, 31, -56) + "e"](t)]);
    function o(B, Q, a, n, s) {
      return oA(B - 36, Q - 24, s, n - 258, Q - -784);
    }
    function i(B, Q, a, n, s) {
      return iA(B - 109, a - -1784, a - 206, n - 262, s);
    }
    function C(B, Q, a, n, s) {
      return iA(B - 351, n - -1410, a - 329, n - 65, a);
    }
    this[e("4B17", 67, -177, -48) + o(-133, -38, -89, -13, "obTv") + A("Oyy]", 1475, 1291, 1360)]();
  }
  async [iA(1409, 1455, 1541, 1397, "n5zU") + xA(656, 546, 710, "%5Rd", 591) + "se"](I) {
    var C;
    function t(B, Q, a, n, s) {
      return xA(B - 345, Q - 319, a - 207, s, a - -642);
    }
    function A(B, Q, a, n, s) {
      return xA(B - 428, Q - 16, a - 226, Q, s - -708);
    }
    function e(B, Q, a, n, s) {
      return iA(B - 160, a - -1617, a - 499, n - 477, B);
    }
    function o(B, Q, a, n, s) {
      return LA(B, Q - 193, s - 503);
    }
    function i(B, Q, a, n, s) {
      return LA(n, Q - 38, s - 284);
    }
    try {
      if (A(-62, "7zW&", 20, 13, -28) !== t(36, -90, 23, 34, ")tWJ")) throw new _0x275b7d(e("Mnn$", -232, -267, -145, -326) + t(-66, -74, -70, -93, "trzM") + A(-93, "qFV@", -176, -31, -73) + o("0m3u", 972, 1192, 1022, 1075) + ".");
      {
        const B = await fetch(I);
        if (!B.ok) {
          if (t(143, 56, 94, 86, "4B17") !== A(-173, "*uOM", -319, -65, -188)) throw new Error(i(906, 840, 911, "Mnn$", 831) + i(677, 693, 632, "mNrd", 716) + o("1YQv", 910, 1059, 1116, 1021) + o("tY1)", 1028, 1151, 946, 1064) + "d.");
          {
            const Q = _0x59bbb7[A(-26, "0m3u", -175, -104, -153)](this[e("4B17", -385, -322, -427, -273) + "se"]);
            return (C = Q == null ? void 0 : Q[t(-83, -60, -18, 23, "Mnn$") + A(40, "4w1E", -92, 52, -56)]) == null ? void 0 : C[t(-49, 45, -54, -16, "^!p[") + o("WJL3", 1106, 951, 1191, 1070)];
          }
        }
        this[o("lmj1", 1081, 1062, 907, 1037) + "se"] = await B[t(-16, -96, -17, -90, "7zW&")]();
      }
    } catch (B) {
      t(-157, -228, -146, -192, "*uOM") === A(-59, "4B17", 26, 124, 21) ? (this[A(-278, "*uOM", -212, -182, -189) + "se"] = void (-69 + 418 * 16 + 1 * -6619), _0x4c8c68[i(999, 1004, 866, "wDIk", 918)](_0x560831)) : (this[e("iQmK", -422, -418, -295) + "se"] = void (3762 + -3 * -2062 + 9948 * -1), console[i(869, 982, 1007, "%5Rd", 946)](B));
    }
  }
  async [oA(762, 795, "(l52", 674, 762) + oA(834, 924, "7zW&", 822, 849) + "e"](I) {
    function t(C, B, Q, a, n) {
      return iA(C - 249, B - -1052, Q - 421, a - 308, C);
    }
    function A(C, B, Q, a, n) {
      return FA(C - 196, B - 64, Q - 346, n - -1462, B);
    }
    function e(C, B, Q, a, n) {
      return xA(C - 255, B - 275, Q - 231, Q, B - 185);
    }
    function o(C, B, Q, a, n) {
      return iA(C - 3, n - -1160, Q - 120, a - 236, Q);
    }
    function i(C, B, Q, a, n) {
      return FA(C - 405, B - 290, Q - 288, Q - -1283, B);
    }
    if (this[i(-4, "0m3u", -132) + A(-251, "rK@1", -76, -98, -160)] = void (-2088 + -1233 * 6 + -279 * -34), !I) {
      if (A(-207, "2qGF", -223, 15, -102) !== A(-214, "C&l0", -60, -240, -135)) throw new _0x558ef8(t("mLT0", 152, 196, 28) + i(-120, "C&l0", 2) + i(-58, "cE[b", -144) + A(-272, "0m3u", -298, -198, -251) + "d.");
      console[e(856, 843, "l]5s")](o(302, 281, "Oyy]", 280, 194) + i(9, "iQmK", -118) + e(833, 709, "*uOM") + o(219, 292, "mNrd", 255, 292) + e(741, 784, "sb8i")), this[t("4m7N", 195, 188, 136) + "se"] = void (1326 * -5 + 2 * 1293 + 2022 * 2);
      return;
    }
    await this[t("sb8i", 252, 288, 185) + i(6, "%5Rd", -71) + "se"](I);
  }
  async [oA(867, 840, "q5jk", 870, 769) + LA("obTv", 500, 616) + LA("0m3u", 575, 457)](I) {
    function t(B, Q, a, n, s) {
      return oA(B - 119, Q - 305, s, n - 298, B - -38);
    }
    function A(B, Q, a, n, s) {
      return xA(B - 254, Q - 280, a - 480, Q, n - -138);
    }
    const e = await fetch("" + I + this[A(528, "wS*@", 555, 602) + C(1315, 1309, 1323, "%5Rd") + i(1152, 1235, "%5Rd", 1042, 1169) + C(1238, 1162, 1166, "7zW&")][-1 * 7101 + -6858 + 13959 * 1]), o = e.ok ? -10 * -780 + -17 * 431 + -1 * 473 : 5 * 1217 + 8 * -46 + -5716;
    function i(B, Q, a, n, s) {
      return LA(a, Q - 357, s - 552);
    }
    function C(B, Q, a, n, s) {
      return iA(B - 16, a - -128, a - 379, n - 16, n);
    }
    return "" + I + this[t(783, 810, 769, 700, "iQmK") + C(1093, 1114, 1123, "wS*@") + C(1336, 1237, 1305, "wDIk") + A(664, "oMZH", 490, 552)][o];
  }
  [xA(743, 583, 577, "IF89", 614) + xA(596, 774, 822, "l]5s", 703) + "s"](I) {
    function t(e, o, i, C, B) {
      return FA(e - 164, o - 313, i - 284, e - -560, o);
    }
    function A(e, o, i, C, B) {
      return iA(e - 157, e - -1315, i - 459, C - 342, o);
    }
    I[A(78, "q5jk", -53, 129) + "ch"]((e) => console[t(676, "iQmK", 588)](e));
  }
  [oA(1113, 912, "dM9Y", 1114, 997) + iA(1264, 1287, 1337, 1186, "E^y8") + LA("cE[b", 770, 644)](I) {
    function t(e, o, i, C, B) {
      return FA(e - 49, o - 426, i - 214, C - -1259, i);
    }
    function A(e, o, i, C, B) {
      return iA(e - 419, B - -99, i - 209, C - 298, i);
    }
    I[t(-26, -217, "F*#q", -131) + "ch"]((e) => console[A(1138, 1226, "q5jk", 1298, 1254)](e));
  }
  [xA(663, 546, 507, "btR]", 618) + xA(689, 741, 699, "^!p[", 717)]() {
    function I(A, e, o, i, C) {
      return FA(A - 224, e - 155, o - 302, C - -116, o);
    }
    function t(A, e, o, i, C) {
      return oA(A - 141, e - 399, i, i - 475, A - 76);
    }
    return window[I(1149, 1108, "WJL3", 1056, 1022) + I(1171, 1159, ")tWJ", 1225, 1203)][t(839, 878, 820, "75ny") + I(1115, 1139, "75ny", 1210, 1177)];
  }
  [LA("l]5s", 595, 664) + xA(705, 787, 745, "C&l0", 687) + FA(1004, 1155, 1197, 1133, "qFV@")]() {
    function I(i, C, B, Q, a) {
      return iA(i - 403, C - -114, B - 446, Q - 95, i);
    }
    function t(i, C, B, Q, a) {
      return iA(i - 298, a - -1451, B - 68, Q - 394, B);
    }
    function A(i, C, B, Q, a) {
      return oA(i - 400, C - 376, a, Q - 381, B - -1084);
    }
    function e(i, C, B, Q, a) {
      return FA(i - 41, C - 339, B - 454, C - 210, a);
    }
    function o(i, C, B, Q, a) {
      return xA(i - 213, C - 148, B - 99, a, B - -183);
    }
    try {
      if (I("lmj1", 1287, 1178, 1209, 1368) === e(1587, 1569, 1505, 1615, "tY1)")) return _0x51f342[e(1332, 1393, 1268, 1305, "sY)a") + t(95, 81, "oMZH", -119, -33)][e(1265, 1335, 1449, 1328, "Mnn$") + A(-122, -63, -104, 22, "rK@1")];
      if (!this[t(-59, -89, "5OUg", 68, 5) + "se"])
        if (e(1283, 1401, 1271, 1449, "IF89") === e(1300, 1333, 1414, 1264, "wDIk")) _0x5cb8b8[I("(l52", 1100, 983, 1228, 1151)]();
        else throw new b0(I("WJL3", 1140, 1233, 1235, 1133) + e(1616, 1553, 1477, 1508, "qFV@") + o(550, 462, 478, 412, "dZi*") + A(-87, -197, -176, -174, "4m7N") + ".");
      if (!this[o(269, 412, 357, 241, "7zW&") + t(-194, -123, "^!p[", -212, -203) + "d"][o(357, 328, 424, 466, "trzM") + I("qFV@", 1326, 1216, 1273, 1264) + e(1367, 1352, 1450, 1312, "l]5s") + "ed"]()) {
        if (o(596, 658, 537, 420, "%5Rd") !== A(-140, -257, -202, -274, "mLT0")) throw new b0(t(-15, 32, "75ny", -99, -7) + t(-312, -301, "75ny", -202, -184) + o(492, 462, 502, 430, "btR]") + o(364, 281, 400, 390, "Oyy]") + ".");
        {
          _0x4e3ec2 instanceof _0x44c7e6 ? _0x16bf56[I("Oyy]", 1131, 1242, 1063, 1144)]() : _0x1575f5 instanceof _0x4aec01 && _0x49ba2a[e(1546, 1532, 1441, 1499, "trzM")](_0x4dd6d4);
          const i = {};
          i[o(398, 396, 311, 194, "l]5s") + o(457, 509, 530, 462, "dZi*")] = !1, i[A(-333, -233, -344, -253, "IF89") + "s"] = [], i[t(-12, -184, "%5Rd", -164, -131) + o(545, 380, 506, 381, "C&l0")] = [], i[I("trzM", 1263, 1208, 1138, 1134) + I("cE[b", 1297, 1239, 1428, 1280) + e(1517, 1517, 1514, 1594, "Z7p*")] = void 0, i[t(-180, -183, ")tWJ", -86, -213)] = function() {
          }, i[t(-164, -39, "4m7N", -25, -34) + e(1314, 1331, 1380, 1422, "7zW&")] = "", this[o(397, 244, 344, 284, "4B17") + I("^!p[", 1145, 1237, 1049, 1125)] = new _0x5920ac(i);
        }
      }
      this[I("(l52", 1083, 1129, 1022, 956) + t(-97, -290, "*uOM", -226, -167)] = new ii(jE(this[I("trzM", 1249, 1296, 1351, 1143) + "se"], this[e(1302, 1323, 1335, 1201, "C&l0") + o(327, 482, 456, 581, "q5jk")]())), this[A(-199, -276, -317, -186, "C&l0") + I("4m7N", 1309, 1191, 1407, 1282) + "s"](this[o(396, 341, 363, 320, "E^y8") + t(-186, -219, "n5zU", -222, -245)][A(-66, 9, -105, -95, "4w1E") + "s"]), this[e(1236, 1357, 1392, 1354, "ZShg") + o(444, 291, 415, 510, "Mnn$") + I("mLT0", 1147, 1229, 1215, 1207)](this[e(1305, 1379, 1374, 1403, "wDIk") + I("5OUg", 1242, 1342, 1335, 1156)][I("%5Rd", 1206, 1158, 1312, 1082) + t(-123, -149, "C&l0", -41, -53)]);
    } catch (i) {
      if (o(373, 507, 380, 304, "cE[b") !== e(1285, 1396, 1312, 1488, "75ny")) throw new _0x3eb807(I("^!p[", 1257, 1309, 1339) + o(546, 459, 488, 548, "wS*@") + e(1564, 1457, 1369, 1509, "wS*@") + I(")tWJ", 1332, 1439, 1275) + ".");
      {
        if (i instanceof b0)
          if (o(551, 448, 508, 410, "btR]") === e(1368, 1385, 1265, 1410, ")tWJ")) i[t(-61, -140, "sb8i", -62, -171)]();
          else {
            if (!this[t(-172, -73, "Z7p*", -216, -86) + "se"]) throw new _0x1202dc(I("hCH%", 1320, 1362, 1272) + e(1670, 1553, 1547, 1594, "qFV@") + e(1478, 1530, 1644, 1510, "iQmK") + I("iQmK", 1231, 1124, 1266) + ".");
            if (!this[o(335, 434, 364, 286, "2qGF") + e(1455, 1339, 1343, 1300, "Z7p*") + "d"][e(1428, 1479, 1350, 1394, "btR]") + I("Mfny", 1302, 1242, 1362) + e(1424, 1473, 1417, 1373, "2qGF") + "ed"]()) throw new _0x112200(e(1298, 1330, 1370, 1444, "n5zU") + t(-354, -135, "2qGF", -321, -236) + o(280, 404, 342, 298, "hCH%") + o(413, 238, 318, 306, "4w1E") + ".");
            this[e(1462, 1535, 1428, 1532, "wS*@") + o(333, 419, 314, 300, "n5zU")] = new _0x2959d6(_0x4058ed(this[I("lmj1", 1195, 1137, 1226) + "se"], this[o(435, 396, 486, 490, "(l52") + o(533, 521, 437, 566, "%5Rd")]())), this[I("rK@1", 1155, 1041, 1272) + e(1547, 1484, 1392, 1476, "7zW&") + "s"](this[A(-84, -17, -86, 27, "dZi*") + o(317, 203, 320, 245, "hKfq")][t(-26, -70, "F*#q", -71, -46) + "s"]), this[e(1372, 1474, 1556, 1602, "4B17") + A(-207, -345, -303, -283, "trzM") + t(-177, -125, "btR]", -128, -155)](this[t(-139, -122, "0m3u", -195, -212) + e(1302, 1433, 1398, 1453, "1YQv")][t(-179, -273, "4B17", -288, -176) + e(1481, 1366, 1397, 1385, "0m3u")]);
          }
        else i instanceof Error && (I("Oyy]", 1136, 1242, 1175) !== A(-117, -266, -161, -120, "k#XJ") ? console[I("wS*@", 1216, 1307, 1332)](i) : _0x2121d5[t(-221, -300, "oMZH", -309, -181) + "ch"]((B) => _0x1ed5f0[t(-217, -270, "7zW&", -160, -165)](B)));
        const C = {};
        C[t(-114, -134, "75ny", -308, -183) + A(-260, -170, -181, -124, "mLT0")] = !1, C[A(-426, -450, -344, -382, "IF89") + "s"] = [], C[e(1355, 1362, 1253, 1263, "wDIk") + I("Oyy]", 1207, 1119, 1302)] = [], C[I("Z7p*", 1199, 1124, 1080) + o(465, 472, 449, 468, "5OUg") + o(356, 483, 480, 385, "Oyy]")] = void (26 * 249 + 738 + -7212), C[I("mLT0", 1225, 1330, 1263)] = function() {
        }, C[I("*uOM", 1252, 1247, 1147) + e(1362, 1410, 1396, 1515, "q5jk")] = "", this[t(-125, -281, "btR]", -99, -153) + e(1596, 1478, 1407, 1424, "5OUg")] = new ii(C);
      }
    }
  }
  [FA(1148, 1350, 1356, 1255, "ZShg") + xA(522, 614, 592, "sY)a", 609) + iA(1420, 1424, 1419, 1498, "hCH%") + "t"]() {
    function I(t, A, e, o, i) {
      return oA(t - 341, A - 168, e, o - 18, t - -841);
    }
    return this[I(131, 91, "4w1E", 72) + I(87, 110, "oMZH", 154)];
  }
  [oA(924, 1010, "kXiB", 971, 946) + oA(953, 908, "hKfq", 775, 835) + oA(928, 899, "mLT0", 818, 948)]() {
    var i;
    function I(C, B, Q, a, n) {
      return xA(C - 29, B - 162, Q - 311, C, n - 580);
    }
    function t(C, B, Q, a, n) {
      return iA(C - 166, B - 128, Q - 428, a - 191, Q);
    }
    if (!this[e(542, "tY1)", 515, 683, 569) + "se"]) {
      if (I("kXiB", 1123, 1215, 1230, 1199) === I("wS*@", 1097, 1236, 1220, 1208)) return;
      _0x80270e[A(1236, "wS*@", 1271, 1358)](_0x4c253b);
    }
    function A(C, B, Q, a, n) {
      return oA(C - 425, B - 84, B, a - 222, C - 362);
    }
    function e(C, B, Q, a, n) {
      return oA(C - 276, B - 73, B, a - 90, n - -301);
    }
    function o(C, B, Q, a, n) {
      return xA(C - 171, B - 116, Q - 302, Q, C - -528);
    }
    try {
      if (I("obTv", 1375, 1173, 1208, 1258) !== I("75ny", 1201, 1238, 1304, 1259)) {
        _0xa1c92c[e(403, "sY)a", 394, 471, 489)](o(17, 148, "WJL3", -18, -11) + I(")tWJ", 1147, 1161, 1336, 1217) + e(587, "4m7N", 618, 475, 601) + o(118, 16, "C&l0", 6, 215) + o(160, 126, "4w1E", 285, 30)), this[o(195, 75, "hCH%", 137, 164) + "se"] = void (2901 + -3 * 967);
        return;
      } else {
        const C = JSON[A(1147, "Mnn$", 1256, 1156, 1025)](this[o(177, 223, "7zW&", 58, 148) + "se"]);
        return (i = C == null ? void 0 : C[e(611, "hCH%", 555, 521, 495) + t(1251, 1359, "wDIk", 1392, 1442)]) == null ? void 0 : i[A(1326, "qFV@", 1401, 1287, 1338) + t(1464, 1447, "hKfq", 1419, 1436)];
      }
    } catch (C) {
      if (I("1YQv", 1295, 1209, 1250, 1231) === I("wDIk", 1110, 1094, 1155, 1147)) {
        if (C instanceof Error)
          if (A(1255, "dZi*", 1292, 1126) !== I("obTv", 1047, 1040, 1165, 1154)) K[t(1345, 1352, "rK@1", 1277) + o(131, 168, "sb8i")](C);
          else return;
        return;
      } else return this[I("kXiB", 1285, 1082, 1073, 1181) + e(499, "2qGF", 718, 723, 629)];
    }
  }
}
const jg = class jg extends $E {
  static getInstance() {
    if (!this._instance) {
      const I = new _E();
      this._instance = new jg(I);
    }
    return this._instance;
  }
};
p(jg, "_instance");
let hI = jg;
const Ar = ({ children: g }) => {
  const I = UA(null);
  return ox(I, XA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(yn, { ref: I, children: g });
}, er = ({ cameraOptions: g }) => g ? /* @__PURE__ */ D(cn, { target: g.styleTarget, children: /* @__PURE__ */ D(
  Ma,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: hI.getInstance(),
    children: /* @__PURE__ */ D(Ya, { analytics: OE, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ D(
      Rn,
      {
        value: UE({
          onError: g.onError
        }),
        children: /* @__PURE__ */ D(aC, { children: /* @__PURE__ */ D(Ar, { children: /* @__PURE__ */ D(vE, { ...g }) }) })
      }
    ) })
  }
) }) : null;
mB(er, "x-dot-document-auto-capture", ["cameraOptions"]);
