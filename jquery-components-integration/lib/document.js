var EB = Object.defineProperty;
var ZI = (g) => {
  throw TypeError(g);
};
var rB = (g, I, t) => I in g ? EB(g, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[I] = t;
var p = (g, I, t) => rB(g, typeof I != "symbol" ? I + "" : I, t), jI = (g, I, t) => I.has(g) || ZI("Cannot " + t);
var k = (g, I, t) => (jI(g, I, "read from private field"), t ? t.call(g) : I.get(g)), j = (g, I, t) => I.has(g) ? ZI("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, t), T = (g, I, t, A) => (jI(g, I, "write to private field"), A ? A.call(g, t) : I.set(g, t), t);
var Rt, b, ni, ai, ae, PI, xi, G0, dI, k0, b0, Ei, ht = {}, ri = [], sB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, jg = Array.isArray;
function VA(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function si(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function sA(g, I, t) {
  var A, e, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : i[o] = I[o];
  if (arguments.length > 3542 + 1 * -9890 + 6350 && (i.children = arguments.length > 7039 + -2 * 3518 ? Rt.call(arguments, -14 * -245 + -1152 * 1 + -2276) : t), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) void (-4 * -692 + 43 * 99 + -7025) === i[o] && (i[o] = g.defaultProps[o]);
  return Et(g, i, A, e, null);
}
function Et(g, I, t, A, e) {
  var o = {};
  o.type = g, o.props = I, o.key = t, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (1 * 7559 + -152 * -45 + -14399 * 1), o.__c = null, o.constructor = void (8390 * 1 + 6429 + -14819), o.__v = e ?? ++ni, o.__i = -(5 * -1983 + -4075 + 17 * 823), o.__u = 0;
  var i = o;
  return e == null && b.vnode != null && b.vnode(i), i;
}
function cB() {
  var g = {};
  return g.current = null, g;
}
function bA(g) {
  return g.children;
}
function mA(g, I) {
  this.props = g, this.context = I;
}
function fe(g, I) {
  if (I == null) return g.__ ? fe(g.__, g.__i + (-7524 + 5473 * -1 + -97 * -134)) : null;
  for (var t; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) return t.__e;
  return typeof g.type == "function" ? fe(g) : null;
}
function ci(g) {
  var I, t;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = 7432 + 1 * 89 + -7521; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) {
      g.__e = g.__c.base = t.__e;
      break;
    }
    return ci(g);
  }
}
function N0(g) {
  (!g.__d && (g.__d = !(-4190 + 373 * -2 + -8 * -617)) && ae.push(g) && !rg.__r++ || PI !== b.debounceRendering) && ((PI = b.debounceRendering) || xi)(rg);
}
function rg() {
  var g, I, t, A, e, o, i, C;
  for (ae.sort(G0); g = ae.shift(); ) g.__d && (I = ae.length, A = void 0, o = (e = (t = g).__v).__e, i = [], C = [], t.__P && ((A = VA({}, e)).__v = e.__v + (4085 + -71 * 52 + -392), b.vnode && b.vnode(A), hI(t.__P, A, e, t.__n, t.__P.namespaceURI, 1 * -7559 + 2 * 2279 + 3 * 1011 & e.__u ? [o] : null, i, o ?? fe(e), !!(-6198 + -3115 * -2 & e.__u), C), A.__v = e.__v, A.__.__k[A.__i] = A, li(i, A, C), A.__e != o && ci(A)), ae.length > I && ae.sort(G0));
  rg.__r = 1293 + -3986 * 1 + -2693 * -1;
}
function di(g, I, t, A, e, o, i, C, B, Q, a) {
  var n, s, x, r, d, h = A && A.__k || ri, E = I.length;
  for (t.__d = B, dB(t, I, h), B = t.__d, n = -13920 + -174 * -80; n < E; n++) (x = t.__k[n]) != null && typeof x != "boolean" && typeof x != "function" && (s = -(8009 + 11 * -257 + 471 * -11) === x.__i ? ht : h[x.__i] || ht, x.__i = n, hI(g, x, s, e, o, i, C, B, Q, a), r = x.__e, x.ref && s.ref != x.ref && (s.ref && lI(s.ref, null, x), a.push(x.ref, x.__c || r, x)), d == null && r != null && (d = r), -125213 + -131 * -773 + -44743 * -2 & x.__u || s.__k === x.__k ? (B && typeof x.type == "string" && !g.contains(B) && (B = fe(s)), B = hi(x, B, g)) : typeof x.type == "function" && void (-2843 * 3 + 4329 + 4200) !== x.__d ? B = x.__d : r && (B = r.nextSibling), x.__d = void (-1024 + 3 * 1578 + -3710), x.__u &= -(379827 + 26174 * -7));
  t.__d = B, t.__e = d;
}
function dB(g, I, t) {
  var A, e, o, i, C, B = I.length, Q = t.length, a = Q, n = 79 * -7 + -9529 + -2 * -5041;
  for (g.__k = [], A = 0; A < B; A++) i = A + n, (e = g.__k[A] = (e = I[A]) == null || typeof e == "boolean" || typeof e == "function" ? null : typeof e == "string" || typeof e == "number" || typeof e == "bigint" || e.constructor == String ? Et(null, e, null, null, null) : jg(e) ? Et(bA, { children: e }, null, null, null) : void (6121 * -1 + -9341 * 1 + 15462) === e.constructor && e.__b > 107 * 47 + -8348 + 3319 ? Et(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v) : e) != null ? (e.__ = g, e.__b = g.__b + (11012 + -121 * 91), C = hB(e, t, i, a), e.__i = C, o = null, -(-7 * 1318 + 4940 + -3 * -1429) !== C && (a--, (o = t[C]) && (o.__u |= -178439 + -2 * 72907 + 975 * 467)), o == null || o.__v === null ? (-(-23 * -263 + 2006 * 2 + -1006 * 10) == C && n--, typeof e.type != "function" && (e.__u |= -75151 + -128125 * 1 + 22401 * 12)) : C !== i && (C == i - (1822 + 1821 * -1) ? n = C - i : C == i + (4547 * 1 + 1516 + -6062) ? n++ : C > i ? a > B - i ? n += C - i : n-- : C < i && n++, C !== A + n && (e.__u |= -119201 * 1 + -119929 + 2 * 152333))) : (o = t[i]) && o.key == null && o.__e && 1439 * -5 + -1 * 3593 + 62 * 174 == (-121877 * 1 + -17 * -7001 + -33483 * -4 & o.__u) && (o.__e == g.__d && (g.__d = fe(o)), F0(o, o, !(4 * 292 + 8595 + 4881 * -2)), t[i] = null, a--);
  if (a)
    for (A = -328 * 8 + -3169 + 5793; A < Q; A++) (o = t[A]) != null && 1863 + 1 * -1863 == (-218739 + 1318 * -49 + -7 * -59199 & o.__u) && (o.__e == g.__d && (g.__d = fe(o)), F0(o, o));
}
function hi(g, I, t) {
  var A, e;
  if (typeof g.type == "function") {
    for (A = g.__k, e = 0; A && e < A.length; e++) A[e] && (A[e].__ = g, I = hi(A[e], I, t));
    return I;
  }
  g.__e != I && (t.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && -5030 + 32 * -194 + -5623 * -2 === I.nodeType);
  return I;
}
function XA(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || (jg(g) ? g.some(function(t) {
    XA(t, I);
  }) : I.push(g)), I;
}
function hB(g, I, t, A) {
  var e = g.key, o = g.type, i = t - (110 * 4 + -4 * 1916 + 1445 * 5), C = t + (-54 * 27 + 4 * -1675 + 8159 * 1), B = I[t];
  if (B === null || B && e == B.key && o === B.type && 5 * -1526 + -1 * 1403 + 9033 == (-38257 * 1 + 181398 + -12069 & B.__u)) return t;
  if (A > (B != null && 1 * 1393 + 7725 + -1 * 9118 == (-54146 * -2 + -1465 + 24245 & B.__u) ? 9314 + -139 * 67 : -3 * 2953 + 574 + 8285)) for (; i >= -9313 + -1 * -4285 + 4 * 1257 || C < I.length; ) {
    if (i >= 1 * 5903 + 1051 * 9 + -2 * 7681) {
      if ((B = I[i]) && !(-1 * 129963 + -128383 + 389418 & B.__u) && e == B.key && o === B.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((B = I[C]) && 3274 + 3274 * -1 == (3 * 79746 + 107389 + -95 * 2269 & B.__u) && e == B.key && o === B.type) return C;
      C++;
    }
  }
  return -(3417 + -8761 * 1 + 5345);
}
function VI(g, I, t) {
  I[-1 * 8503 + -33 * -263 + -176] === "-" ? g.setProperty(I, t ?? "") : g[I] = t == null ? "" : typeof t != "number" || sB.test(I) ? t : t + "px";
}
function Ht(g, I, t, A, e) {
  var o;
  A: if (I === "style")
    if (typeof t == "string") g.style.cssText = t;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) t && I in t || VI(g.style, I, "");
      if (t)
        for (I in t) A && t[I] === A[I] || VI(g.style, I, t[I]);
    }
  else if (I[17 * 269 + -8663 + 4090] === "o" && I[1] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(-7802 + 443 * -2 + -790 * -11) : I.slice(-9622 + 77 * -56 + 13936), g.l || (g.l = {}), g.l[I + o] = t, t ? A ? t.u = A.u : (t.u = dI, g.addEventListener(I, o ? b0 : k0, o)) : g.removeEventListener(I, o ? b0 : k0, o);
  else {
    if (e == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(361 + -12 * -159 + 14 * -162) === t && I[8724 + -35 * -233 + -25 * 675] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && 1 * -6773 + -1 * 2290 + 11 * 824 == t ? "" : t));
  }
}
function XI(g) {
  return function(I) {
    if (this.l) {
      var t = this.l[I.type + g];
      if (I.t == null) I.t = dI++;
      else if (I.t < t.u) return;
      return t(b.event ? b.event(I) : I);
    }
  };
}
function hI(g, I, t, A, e, o, i, C, B, Q) {
  var a, n, s, x, r, d, h, E, u, w, R, S, M, y, O, J, X = I.type;
  if (void (1 * -1973 + 888 + 1085) !== I.constructor) return null;
  3 * 2029 + -1997 * 1 + -3962 * 1 & t.__u && (B = !!(64 * -8 + 293 * 2 + 1 * -42 & t.__u), o = [C = I.__e = t.__e]), (a = b.__b) && a(I);
  A: if (typeof X == "function") try {
    if (E = I.props, u = "prototype" in X && X.prototype.render, w = (a = X.contextType) && A[a.__c], R = a ? w ? w.props.value : a.__ : A, t.__c ? h = (n = I.__c = t.__c).__ = n.__E : (u ? I.__c = n = new X(E, R) : (I.__c = n = new mA(E, R), n.constructor = X, n.render = uB), w && w.sub(n), n.props = E, n.state || (n.state = {}), n.context = R, n.__n = A, s = n.__d = !(3703 + -3127 * -2 + -9957), n.__h = [], n._sb = []), u && n.__s == null && (n.__s = n.state), u && X.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = VA({}, n.__s)), VA(n.__s, X.getDerivedStateFromProps(E, n.__s))), x = n.props, r = n.state, n.__v = I, s) u && X.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), u && n.componentDidMount != null && n.__h.push(n.componentDidMount);
    else {
      if (u && X.getDerivedStateFromProps == null && E !== x && n.componentWillReceiveProps != null && n.componentWillReceiveProps(E, R), !n.__e && (n.shouldComponentUpdate != null && !(-4031 * -1 + -2643 * -2 + -9316) === n.shouldComponentUpdate(E, n.__s, R) || I.__v === t.__v)) {
        for (I.__v !== t.__v && (n.props = E, n.state = n.__s, n.__d = !1), I.__e = t.__e, I.__k = t.__k, I.__k.forEach(function(ke) {
          ke && (ke.__ = I);
        }), S = 5302 + -2 * 1549 + 58 * -38; S < n._sb.length; S++) n.__h.push(n._sb[S]);
        n._sb = [], n.__h.length && i.push(n);
        break A;
      }
      n.componentWillUpdate != null && n.componentWillUpdate(E, n.__s, R), u && n.componentDidUpdate != null && n.__h.push(function() {
        n.componentDidUpdate(x, r, d);
      });
    }
    if (n.context = R, n.props = E, n.__P = g, n.__e = !(-8229 + -1 * -709 + 7521), M = b.__r, y = 2903 * 2 + 983 * 10 + 3909 * -4, u) {
      for (n.state = n.__s, n.__d = !(1138 + -6 * -906 + -2191 * 3), M && M(I), a = n.render(n.props, n.state, n.context), O = -1812 + 453 * 4; O < n._sb.length; O++) n.__h.push(n._sb[O]);
      n._sb = [];
    } else do
      n.__d = !(47 * -27 + -7095 + -239 * -35), M && M(I), a = n.render(n.props, n.state, n.context), n.state = n.__s;
    while (n.__d && ++y < 2042 * -3 + -345 * 10 + 9601);
    n.state = n.__s, n.getChildContext != null && (A = VA(VA({}, A), n.getChildContext())), u && !s && n.getSnapshotBeforeUpdate != null && (d = n.getSnapshotBeforeUpdate(x, r)), di(g, jg(J = a != null && a.type === bA && a.key == null ? a.props.children : a) ? J : [J], I, t, A, e, o, i, C, B, Q), n.base = I.__e, I.__u &= -161, n.__h.length && i.push(n), h && (n.__E = n.__ = null);
  } catch (ke) {
    I.__v = null, B || o != null ? (I.__e = C, I.__u |= B ? -5 * 289 + 1 * 1346 + 1 * 259 : 19 * 499 + 5306 + -14755 * 1, o[o.indexOf(C)] = null) : (I.__e = t.__e, I.__k = t.__k), b.__e(ke, I, t);
  }
  else o == null && I.__v === t.__v ? (I.__k = t.__k, I.__e = t.__e) : I.__e = lB(t.__e, I, t, A, e, o, i, B, Q);
  (a = b.diffed) && a(I);
}
function li(g, I, t) {
  I.__d = void 0;
  for (var A = -1110 + -83 * -90 + -6360; A < t.length; A++) lI(t[A], t[++A], t[++A]);
  b.__c && b.__c(I, g), g.some(function(e) {
    try {
      g = e.__h, e.__h = [], g.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      b.__e(o, e.__v);
    }
  });
}
function lB(g, I, t, A, e, o, i, C, B) {
  var Q, a, n, s, x, r, d, h = t.props, E = I.props, u = I.type;
  if (u === "svg" ? e = "http://www.w3.org/2000/svg" : u === "math" ? e = "http://www.w3.org/1998/Math/MathML" : e || (e = "http://www.w3.org/1999/xhtml"), o != null) {
    for (Q = -2 * -3773 + 3369 + -10915; Q < o.length; Q++) if ((x = o[Q]) && "setAttribute" in x == !!u && (u ? x.localName === u : -1314 * -6 + -9294 + 1413 === x.nodeType)) {
      g = x, o[Q] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(E);
    g = document.createElementNS(e, u, E.is && E), o = null, C = !(-411 * -7 + 89 * -74 + 3710);
  }
  if (u === null) h === E || C && g.data === E || (g.data = E);
  else {
    if (o = o && Rt.call(g.childNodes), h = t.props || ht, !C && o != null)
      for (h = {}, Q = 1 * 7053 + -1 * 2743 + 431 * -10; Q < g.attributes.length; Q++) h[(x = g.attributes[Q]).name] = x.value;
    for (Q in h) if (x = h[Q], Q != "children") {
      if (Q == "dangerouslySetInnerHTML") n = x;
      else if (Q !== "key" && !(Q in E)) {
        if (Q == "value" && "defaultValue" in E || Q == "checked" && "defaultChecked" in E) continue;
        Ht(g, Q, null, x, e);
      }
    }
    for (Q in E) x = E[Q], Q == "children" ? s = x : Q == "dangerouslySetInnerHTML" ? a = x : Q == "value" ? r = x : Q == "checked" ? d = x : Q === "key" || C && typeof x != "function" || h[Q] === x || Ht(g, Q, x, h[Q], e);
    if (a) C || n && (a.__html === n.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (n && (g.innerHTML = ""), di(g, jg(s) ? s : [s], I, t, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e, o, i, o ? o[2524 + 2524 * -1] : t.__k && fe(t, -8060 + 1612 * 5), C, B), o != null)
      for (Q = o.length; Q--; ) o[Q] != null && si(o[Q]);
    C || (Q = "value", void (-577 * -13 + 3 * -553 + 46 * -127) !== r && (r !== g[Q] || u === "progress" && !r || u === "option" && r !== h[Q]) && Ht(g, Q, r, h[Q], e), Q = "checked", d !== void 0 && d !== g[Q] && Ht(g, Q, d, h[Q], e));
  }
  return g;
}
function lI(g, I, t) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    b.__e(A, t);
  }
}
function F0(g, I, t) {
  var A, e;
  if (b.unmount && b.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || lI(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      b.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (e = -1317 * 6 + -1 * 2501 + 10403; e < A.length; e++) A[e] && F0(A[e], I, t || typeof g.type != "function");
  t || g.__e == null || si(g.__e), g.__c = g.__ = g.__e = g.__d = void (14 * -611 + 5317 + 3237);
}
function uB(g, I, t) {
  return this.constructor(g, t);
}
function ie(g, I, t) {
  var A, e, o, i;
  b.__ && b.__(g, I), e = (A = typeof t == "function") ? null : t && t.__k || I.__k, o = [], i = [], hI(I, g = (!A && t || I).__k = sA(bA, null, [g]), e || ht, ht, I.namespaceURI, !A && t ? [t] : e ? null : I.firstChild ? Rt.call(I.childNodes) : null, o, !A && t ? t : e ? e.__e : I.firstChild, A, i), li(o, g, i);
}
function uI(g, I) {
  ie(g, I, uI);
}
function fI(g, I, t) {
  var A, e, o, i, C = VA({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : C[o] = void (-9 * 581 + 802 + -233 * -19) === I[o] && void (2648 + 1 * -2648) !== i ? i[o] : I[o];
  return arguments.length > 2089 * 1 + -9999 + -46 * -172 && (C.children = arguments.length > -280 + 6983 * 1 + -6700 ? Rt.call(arguments, 1629 + -13 * -20 + -1887) : t), Et(g.type, C, A || g.key, e || g.ref, null);
}
function St(g, I) {
  var t = { __c: I = "__cC" + Ei++, __: g, Consumer: function(A, e) {
    return A.children(e);
  }, Provider: function(A) {
    var e, o;
    return this.getChildContext || (e = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && e.some(function(C) {
        C.__e = !0, N0(C);
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
Rt = ri.slice, b = { __e: function(g, I, t, A) {
  for (var e, o, i; I = I.__; ) if ((e = I.__c) && !e.__) try {
    if ((o = e.constructor) && o.getDerivedStateFromError != null && (e.setState(o.getDerivedStateFromError(g)), i = e.__d), e.componentDidCatch != null && (e.componentDidCatch(g, A || {}), i = e.__d), i) return e.__E = e;
  } catch (C) {
    g = C;
  }
  throw g;
} }, ni = -5435 + -5 * 1669 + -26 * -530, ai = function(g) {
  return g != null && g.constructor == null;
}, mA.prototype.setState = function(g, I) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = VA({}, this.state), typeof g == "function" && (g = g(VA({}, t), this.props)), g && VA(t, g), g != null && this.__v && (I && this._sb.push(I), N0(this));
}, mA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(796 + -417 * 9 + 2957), g && this.__h.push(g), N0(this));
}, mA.prototype.render = bA, ae = [], xi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, G0 = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, rg.__r = -2630 + -911 * -10 + -6480, dI = -276 + -1 * -7617 + 7341 * -1, k0 = XI(!(-6038 + -21 * 172 + 9651)), b0 = XI(!(-10 * -857 + -9581 + -3 * -337)), Ei = 5916 + 3 * -1972;
function DI() {
  return (DI = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = 3 * 1483 + 1361 + 157 * -37; I < arguments.length; I++) {
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
    for (i = 6223 + 18 * 345 + -1 * 12433; i < B.length; i++) e.indexOf(o = B[i]) >= -2819 * 3 + -1 * -2266 + 151 * 41 || (C[o] = A[o]);
    return C;
  }(g, fB);
  return fI(I, t);
}
function yB() {
  var g = {};
  g.detail = {}, g.bubbles = !(-665 * 7 + 867 + 3788), g.cancelable = !(-5 * -73 + 5518 + -5883);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = sA(DB, DI({}, this._props, { context: I.detail.context }), function t(A, e) {
    if (-6707 + -10 * -671 === A.nodeType) return A.data;
    if (4107 + 3 * -2891 + -1 * -4567 !== A.nodeType) return null;
    var o = [], i = {}, C = -5 * -161 + -7676 * 1 + 6871, B = A.attributes, Q = A.childNodes;
    for (C = B.length; C--; ) B[C].name !== "slot" && (i[B[C].name] = B[C].value, i[ui(B[C].name)] = B[C].value);
    for (C = Q.length; C--; ) {
      var a = t(Q[C], null), n = Q[C].slot;
      n ? i[n] = sA(_I, { name: n }, a) : o[C] = a;
    }
    var s = e ? sA(_I, null, o) : o;
    return sA(e || A.nodeName.toLowerCase(), i, s);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? uI : ie)(this._vdom, this._root);
}
function ui(g) {
  return g.replace(/-(\w)/g, function(I, t) {
    return t ? t.toUpperCase() : "";
  });
}
function wB(g, I, t) {
  if (this._vdom) {
    var A = {};
    A[g] = t = t ?? void (1 * -8311 + -1 * 9803 + 18114), A[ui(g)] = t, this._vdom = fI(this._vdom, A), ie(this._vdom, this._root);
  }
}
function pB() {
  ie(this._vdom = null, this._root);
}
function _I(g, I) {
  var t = this;
  return sA("slot", DI({}, g, { ref: function(A) {
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
var GB = 9470 + -1964 * 5 + -2 * -175;
function D(g, I, t, A, e, o) {
  I || (I = {});
  var i, C, B = I;
  if ("ref" in B)
    for (C in B = {}, I) C == "ref" ? i = I[C] : B[C] = I[C];
  var Q = {};
  Q.type = g, Q.props = B, Q.key = t, Q.ref = i, Q.__k = null, Q.__ = null, Q.__b = 0, Q.__e = null, Q.__d = void (4858 + 1 * -4858), Q.__c = null, Q.constructor = void (1763 + 8 * -101 + -5 * 191), Q.__v = --GB, Q.__i = -1, Q.__u = 0, Q.__source = e, Q.__self = o;
  var a = Q;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (1 * -1650 + 1339 * 1 + 311 * 1) === B[C] && (B[C] = i[C]);
  return b.vnode && b.vnode(a), a;
}
var hA = function() {
  return hA = Object.assign || function(I) {
    for (var t, A = 1, e = arguments.length; A < e; A++) {
      t = arguments[A];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (I[o] = t[o]);
    }
    return I;
  }, hA.apply(this, arguments);
};
function ve(g, I, t) {
  if (t || arguments.length === 2) for (var A = 0, e = I.length, o; A < e; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function kB(g) {
  var I = Object.create(null);
  return function(t) {
    return I[t] === void 0 && (I[t] = g(t)), I[t];
  };
}
var bB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, NB = kB(function(g) {
  return bB.test(g) || g.charCodeAt(4456 + 7263 * 1 + 1 * -11719) === -2113 * 1 + -9159 + 11383 && g.charCodeAt(-8923 * 1 + -7 * -1019 + 1791) === -6445 + 5 * 1311 && g.charCodeAt(2077 * -4 + 2721 * -1 + -11031 * -1) < 4 * 2167 + -7645 + -932;
}), Ce, q, Q0, zI, Ue = 3089 + -9869 * 1 + 6780, fi = [], Z = b, $I = Z.__b, Ao = Z.__r, eo = Z.diffed, to = Z.__c, go = Z.unmount, Io = Z.__;
function Pe(g, I) {
  Z.__h && Z.__h(q, g, Ue || I), Ue = 989 * -8 + 1 * 1733 + 167 * 37;
  var t = {};
  t.__ = [], t.__h = [];
  var A = q.__H || (q.__H = t);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function GA(g) {
  return Ue = -9846 + 755 * -1 + 10602, yI(wi, g);
}
function yI(g, I, t) {
  var A = Pe(Ce++, 2);
  if (A.t = g, !A.__c && (A.__ = [t ? t(I) : wi(void (1 * 9567 + 1 * -4797 + 45 * -106), I), function(C) {
    var B = A.__N ? A.__N[0] : A.__[0], Q = A.t(B, C);
    B !== Q && (A.__N = [Q, A.__[3561 + 3986 * -2 + 1103 * 4]], A.__c.setState({}));
  }], A.__c = q, !q.u)) {
    var e = function(C, B, Q) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(s) {
        return !!s.__c;
      });
      if (a.every(function(s) {
        return !s.__N;
      })) return !o || o.call(this, C, B, Q);
      var n = !(-5289 * 1 + -8 * 308 + -1 * -7754);
      return a.forEach(function(s) {
        if (s.__N) {
          var x = s.__[0];
          s.__ = s.__N, s.__N = void 0, x !== s.__[0] && (n = !0);
        }
      }), !(!n && A.__c.props === C) && (!o || o.call(this, C, B, Q));
    };
    q.u = !(-9560 + -1 * 5211 + 14771);
    var o = q.shouldComponentUpdate, i = q.componentWillUpdate;
    q.componentWillUpdate = function(C, B, Q) {
      if (this.__e) {
        var a = o;
        o = void (2124 * -2 + -29 * -259 + -3263), e(C, B, Q), o = a;
      }
      i && i.call(this, C, B, Q);
    }, q.shouldComponentUpdate = e;
  }
  return A.__N || A.__;
}
function gA(g, I) {
  var t = Pe(Ce++, 3);
  !Z.__s && wI(t.__H, I) && (t.__ = g, t.i = I, q.__H.__h.push(t));
}
function Ve(g, I) {
  var t = Pe(Ce++, 4);
  !Z.__s && wI(t.__H, I) && (t.__ = g, t.i = I, q.__h.push(t));
}
function UA(g) {
  return Ue = -487 + -492 * -1, yA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function Di(g, I, t) {
  Ue = 23 * -129 + 6544 + -3571, Ve(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void (-3566 + 1 * 7511 + 263 * -15);
  }, t == null ? t : t.concat(g));
}
function yA(g, I) {
  var t = Pe(Ce++, 7);
  return wI(t.__H, I) && (t.__ = g(), t.__H = I, t.__h = g), t.__;
}
function zA(g, I) {
  return Ue = 984 * -10 + 19 * -477 + 18911, yA(function() {
    return g;
  }, I);
}
function pe(g) {
  var I = q.context[g.__c], t = Pe(Ce++, -3613 * -1 + -2 * -1468 + -6540);
  return t.c = g, I ? (t.__ == null && (t.__ = !(-375 * -26 + -83 * 25 + -7675), I.sub(q)), I.props.value) : g.__;
}
function sg(g, I) {
  Z.useDebugValue && Z.useDebugValue(I ? I(g) : g);
}
function yi() {
  var g = Pe(Ce++, 11);
  if (!g.__) {
    for (var I = q.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var t = I.__m || (I.__m = [10766 + -5383 * 2, -2050 + 269 * 31 + -19 * 331]);
    g.__ = "P" + t[9603 + 458 * -2 + 119 * -73] + "-" + t[-935 * -1 + -1907 + -139 * -7]++;
  }
  return g.__;
}
function FB() {
  for (var g; g = fi.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach($t), g.__H.__h.forEach(R0), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], Z.__e(I, g.__v);
  }
}
Z.__b = function(g) {
  q = null, $I && $I(g);
}, Z.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), Io && Io(g, I);
}, Z.__r = function(g) {
  Ao && Ao(g), Ce = 6450 + 2 * 4434 + 1 * -15318;
  var I = (q = g.__c).__H;
  I && (Q0 === q ? (I.__h = [], q.__h = [], I.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (7332 + 8551 * 1 + -15883);
  })) : (I.__h.forEach($t), I.__h.forEach(R0), I.__h = [], Ce = -8038 + 47 * 193 + -1033)), Q0 = q;
}, Z.diffed = function(g) {
  eo && eo(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (1183 + 297 * -24 + 5946 !== fi.push(I) && zI === Z.requestAnimationFrame || ((zI = Z.requestAnimationFrame) || RB)(FB)), I.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-7 * -669 + 3 * -745 + -2448);
  })), Q0 = q = null;
}, Z.__c = function(g, I) {
  I.some(function(t) {
    try {
      t.__h.forEach($t), t.__h = t.__h.filter(function(A) {
        return !A.__ || R0(A);
      });
    } catch (A) {
      I.some(function(e) {
        e.__h && (e.__h = []);
      }), I = [], Z.__e(A, t.__v);
    }
  }), to && to(g, I);
}, Z.unmount = function(g) {
  go && go(g);
  var I, t = g.__c;
  t && t.__H && (t.__H.__.forEach(function(A) {
    try {
      $t(A);
    } catch (e) {
      I = e;
    }
  }), t.__H = void 0, I && Z.__e(I, t.__v));
};
var oo = typeof requestAnimationFrame == "function";
function RB(g) {
  var I, t = function() {
    clearTimeout(A), oo && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(t, 100);
  oo && (I = requestAnimationFrame(t));
}
function $t(g) {
  var I = q, t = g.__c;
  typeof t == "function" && (g.__c = void (-1 * -8969 + 5589 + -14558), t()), q = I;
}
function R0(g) {
  var I = q;
  g.__c = g.__(), q = I;
}
function wI(g, I) {
  return !g || g.length !== I.length || I.some(function(t, A) {
    return t !== g[A];
  });
}
function wi(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function pi(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function S0(g, I) {
  for (var t in g) if (t !== "__source" && !(t in I)) return !(9259 * 1 + -1 * -3270 + -12529);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(8100 + -20 * 405);
  return !(1 * -2731 + 7145 * 1 + -4413);
}
function M0(g, I) {
  this.props = g, this.context = I;
}
function SB(g, I) {
  function t(e) {
    var o = this.props.ref, i = o == e.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, e) || !i : S0(this.props, e);
  }
  function A(e) {
    return this.shouldComponentUpdate = t, sA(g, e);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(-34 * 8 + -7 * 877 + 6411), A.__f = !0, A;
}
(M0.prototype = new mA()).isPureReactComponent = !(789 + -36 * -100 + -4389), M0.prototype.shouldComponentUpdate = function(g, I) {
  return S0(this.props, g) || S0(this.state, I);
};
var io = b.__b;
b.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), io && io(g);
};
var MB = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -3241 * -3 + 8013 + -25 * 553;
function mi(g) {
  function I(t) {
    var A = pi({}, t);
    return delete A.ref, g(A, t.ref || null);
  }
  return I.$$typeof = MB, I.render = I, I.prototype.isReactComponent = I.__f = !(-4707 * -1 + -2800 + -1 * 1907), I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var Co = function(g, I) {
  return g == null ? null : XA(XA(g).map(I));
}, LB = { map: Co, forEach: Co, count: function(g) {
  return g ? XA(g).length : -2 * 809 + -1197 + -2815 * -1;
}, only: function(g) {
  var I = XA(g);
  if (3416 + -541 * -13 + 653 * -16 !== I.length) throw "Children.only";
  return I[-2427 + -97 * 20 + -397 * -11];
}, toArray: XA }, JB = b.__e;
b.__e = function(g, I, t, A) {
  if (g.then) {
    for (var e, o = I; o = o.__; ) if ((e = o.__c) && e.__c) return I.__e == null && (I.__e = t.__e, I.__k = t.__k), e.__c(g, I);
  }
  JB(g, I, t, A);
};
var Bo = b.unmount;
function Gi(g, I, t) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = pi({}, g)).__c != null && (g.__c.__P === t && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return Gi(A, I, t);
  })), g;
}
function ki(g, I, t) {
  return g && t && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return ki(A, I, t);
  }), g.__c && g.__c.__P === I && (g.__e && t.appendChild(g.__e), g.__c.__e = !(1 * 5692 + 997 * -5 + 1 * -707), g.__c.__P = t)), g;
}
function Ag() {
  this.__u = -136 * 65 + -936 + 47 * 208, this.t = null, this.__b = null;
}
function bi(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function WB(g) {
  var I, t, A;
  function e(o) {
    if (I || (I = g()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!t) throw I;
    return sA(t, o);
  }
  return e.displayName = "Lazy", e.__f = !0, e;
}
function it() {
  this.u = null, this.o = null;
}
b.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && 32 & g.__u && (g.type = null), Bo && Bo(g);
}, (Ag.prototype = new mA()).__c = function(g, I) {
  var t = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(t);
  var e = bi(A.__v), o = !1, i = function() {
    o || (o = !(-1386 * 2 + -895 * 3 + 5457), t.__R = null, e ? e(C) : C());
  };
  t.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var B = A.state.__a;
        A.__v.__k[1452 + 2 * 1152 + -2 * 1878] = ki(B, B.__c.__P, B.__c.__O);
      }
      var Q;
      for (A.setState({ __a: A.__b = null }); Q = A.t.pop(); ) Q.forceUpdate();
    }
  };
  A.__u++ || -8102 + 7 * 1162 & I.__u || A.setState({ __a: A.__b = A.__v.__k[-129 * 62 + -3811 + -49 * -241] }), g.then(i, i);
}, Ag.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ag.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), A = this.__v.__k[0].__c;
      this.__v.__k[-2207 * 1 + 3912 + -1705] = Gi(this.__b, t, A.__O = A.__P);
    }
    this.__b = null;
  }
  var e = I.__a && sA(bA, null, g.fallback);
  return e && (e.__u &= -(3 * -742 + -7 * -647 + -2270)), [sA(bA, null, I.__a ? null : g.children), e];
};
var Qo = function(g, I, t) {
  if (++t[2 * -1049 + -8965 + 922 * 12] === t[3767 + -5016 * -1 + -1 * 8783] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[2 * -3461 + -9882 + 16804] !== "t" || !g.o.size)) for (t = g.u; t; ) {
    for (; t.length > -1339 + 1 * -6163 + -1 * -7505; ) t.pop()();
    if (t[4558 * -1 + -1847 * -1 + 2712] < t[-52 * 64 + 4821 + -1493]) break;
    g.u = t = t[1 * 3922 + -9103 + 5183];
  }
};
function YB(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function vB(g) {
  var I = this, t = g.i;
  I.componentWillUnmount = function() {
    ie(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== t && I.componentWillUnmount(), I.l || (I.i = t, I.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-1049 * -1 + -4614 + 3565);
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, e) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> -6569 * -1 + 107 * 35 + -10313, -2868 + 125 * -51 + 9244), I.i.removeChild(A);
  } }), ie(sA(YB, { context: I.context }, g.__v), I.l);
}
function UB(g, I) {
  var t = {};
  t.__v = g, t.i = I;
  var A = sA(vB, t);
  return A.containerInfo = I, A;
}
(it.prototype = new mA()).__a = function(g) {
  var I = this, t = bi(I.__v), A = I.o.get(g);
  return A[2 * -761 + -2 * 905 + -14 * -238]++, function(e) {
    var o = function() {
      I.props.revealOrder ? (A.push(e), Qo(I, g, A)) : e();
    };
    t ? t(o) : o();
  };
}, it.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = XA(g.children);
  g.revealOrder && g.revealOrder[-6094 * 1 + -8453 + 14547] === "b" && I.reverse();
  for (var t = I.length; t--; ) this.o.set(I[t], this.u = [6 * -391 + 1 * -6801 + 9148, -2 * -2073 + -463 * -4 + 5998 * -1, this.u]);
  return g.children;
}, it.prototype.componentDidUpdate = it.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, t) {
    Qo(g, t, I);
  });
};
var Ni = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -83579 + -100003 * 1 + -13 * -18745, KB = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, HB = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, qB = /[A-Z0-9]/g, OB = typeof document < "u", TB = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function ZB(g, I, t) {
  return I.__k == null && (I.textContent = ""), ie(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
function jB(g, I, t) {
  return uI(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
mA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(mA.prototype, g, { configurable: !(15351 + -731 * 21), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var t = {};
    t.configurable = !(3 * 1334 + 1 * 9014 + -13016), t.writable = !(-3 * -2789 + 8425 + -16792), t.value = I, Object.defineProperty(this, g, t);
  } });
});
var no = b.event;
function PB() {
}
function VB() {
  return this.cancelBubble;
}
function XB() {
  return this.defaultPrevented;
}
b.event = function(g) {
  return no && (g = no(g)), g.persist = PB, g.isPropagationStopped = VB, g.isDefaultPrevented = XB, g.nativeEvent = g;
};
var eg = {};
eg.enumerable = !1, eg.configurable = !(-571 * -16 + 5353 + -14489), eg.get = function() {
  return this.class;
};
var pI, _B = eg, ao = b.vnode;
b.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var t = I.props, A = I.type, e = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || OB && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(19 * -480 + -21 * -274 + -1683 * -2) === i ? i = "" : C === "translate" && i === "no" ? i = !(-41 * 214 + 6542 + 2233) : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || TB(t.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : HB.test(o) ? o = C : -(-2 * -2357 + 7 * 1187 + 17 * -766) === A.indexOf("-") && KB.test(o) ? o = o.replace(qB, "-$&").toLowerCase() : i === null && (i = void (-8784 * 1 + 2848 + 7 * 848)) : C = o = "oninput", C === "oninput" && e[o = C] && (o = "oninputCapture"), e[o] = i;
      }
    }
    A == "select" && e.multiple && Array.isArray(e.value) && (e.value = XA(t.children).forEach(function(B) {
      B.props.selected = -(6444 + 1186 * -3 + -2885) != e.value.indexOf(B.props.value);
    })), A == "select" && e.defaultValue != null && (e.value = XA(t.children).forEach(function(B) {
      B.props.selected = e.multiple ? -(6 * -1063 + 90 * 74 + -281) != e.defaultValue.indexOf(B.props.value) : e.defaultValue == B.props.value;
    })), t.class && !t.className ? (e.class = t.class, Object.defineProperty(e, "className", _B)) : (t.className && !t.class || t.class && t.className) && (e.class = e.className = t.className), I.props = e;
  }(g), g.$$typeof = Ni, ao && ao(g);
};
var xo = b.__r;
b.__r = function(g) {
  xo && xo(g), pI = g.__c;
};
var Eo = b.diffed;
b.diffed = function(g) {
  Eo && Eo(g);
  var I = g.props, t = g.__e;
  t != null && g.type === "textarea" && "value" in I && I.value !== t.value && (t.value = I.value == null ? "" : I.value), pI = null;
};
var CA = {};
CA.readContext = function(g) {
  return pI.__n[g.__c].props.value;
}, CA.useCallback = zA, CA.useContext = pe, CA.useDebugValue = sg, CA.useDeferredValue = Mi, CA.useEffect = gA, CA.useId = yi, CA.useImperativeHandle = Di, CA.useInsertionEffect = Ji, CA.useLayoutEffect = Ve, CA.useMemo = yA, CA.useReducer = yI, CA.useRef = UA, CA.useState = GA, CA.useSyncExternalStore = Wi, CA.useTransition = Li;
var Fi = {};
Fi.current = CA;
var Ri = {};
Ri.ReactCurrentDispatcher = Fi;
var zB = Ri;
function $B(g) {
  return sA.bind(null, g);
}
function Pg(g) {
  return !!g && g.$$typeof === Ni;
}
function AQ(g) {
  return Pg(g) && g.type === bA;
}
function eQ(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function tQ(g) {
  return Pg(g) ? fI.apply(null, arguments) : g;
}
function gQ(g) {
  return !!g.__k && (ie(null, g), !(-421 * -10 + 11 * -185 + -2175));
}
function IQ(g) {
  return g && (g.base || g.nodeType === 1 && g) || null;
}
var oQ = function(g, I) {
  return g(I);
}, iQ = function(g, I) {
  return g(I);
}, CQ = bA;
function Si(g) {
  g();
}
function Mi(g) {
  return g;
}
function Li() {
  return [!(-5286 + -3 * -80 + 7 * 721), Si];
}
var Ji = Ve, BQ = Pg;
function Wi(g, I) {
  var t = I(), A = GA({ h: { __: t, v: I } }), e = A[0].h, o = A[-1915 + 8698 * -1 + -366 * -29];
  return Ve(function() {
    e.__ = t, e.v = I, n0(e) && o({ h: e });
  }, [g, t, I]), gA(function() {
    return n0(e) && o({ h: e }), g(function() {
      n0(e) && o({ h: e });
    });
  }, [g]), t;
}
function n0(g) {
  var I, t, A = g.v, e = g.__;
  try {
    var o = A();
    return !((I = e) === (t = o) && (2337 * 1 + 3943 + 1256 * -5 !== I || (57 * -67 + -870 * 2 + 5560) / I == (-4 * -1788 + -7643 * 1 + 492) / t) || I != I && t != t);
  } catch {
    return !(63 * 89 + -17 * 274 + -73 * 13);
  }
}
var G = {};
G.useState = GA, G.useId = yi, G.useReducer = yI, G.useEffect = gA, G.useLayoutEffect = Ve, G.useInsertionEffect = Ji, G.useTransition = Li, G.useDeferredValue = Mi, G.useSyncExternalStore = Wi, G.startTransition = Si, G.useRef = UA, G.useImperativeHandle = Di, G.useMemo = yA, G.useCallback = zA, G.useContext = pe, G.useDebugValue = sg, G.version = "17.0.2", G.Children = LB, G.render = ZB, G.hydrate = jB, G.unmountComponentAtNode = gQ, G.createPortal = UB, G.createElement = sA, G.createContext = St, G.createFactory = $B, G.cloneElement = tQ, G.createRef = cB, G.Fragment = bA, G.isValidElement = Pg, G.isElement = BQ, G.isFragment = AQ, G.isMemo = eQ, G.findDOMNode = IQ, G.Component = mA, G.PureComponent = M0, G.memo = SB, G.forwardRef = mi, G.flushSync = iQ, G.unstable_batchedUpdates = oQ, G.StrictMode = CQ, G.Suspense = Ag, G.SuspenseList = it, G.lazy = WB, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zB;
var De = G, QQ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
  if (o !== void (73 * -83 + 1774 + -857 * -5)) return !!o;
  if (I === t) return !0;
  if (typeof I != "object" || !I || typeof t != "object" || !t) return !1;
  var i = Object.keys(I), C = Object.keys(t);
  if (i.length !== C.length) return !1;
  for (var B = Object.prototype.hasOwnProperty.bind(t), Q = 0; Q < i.length; Q++) {
    var a = i[Q];
    if (!B(a)) return !1;
    var n = I[a], s = t[a];
    if (o = A ? A.call(e, n, s, a) : void (1 * -5849 + -3742 + 9591), o === !1 || o === void (917 * -5 + -6642 + 11227) && n !== s) return !1;
  }
  return !0;
};
const cQ = rQ.getDefaultExportFromCjs(sQ);
var H = "-ms-", rt = "-moz-", Y = "-webkit-", Yi = "comm", Vg = "rule", mI = "decl", dQ = "@import", vi = "@keyframes", hQ = "@layer", Ui = Math.abs, GI = String.fromCharCode, L0 = Object.assign;
function lQ(g, I) {
  return IA(g, 0) ^ -7726 + 4803 * -1 + -1 * -12574 ? (((I << 1 * 6467 + -8799 + 2334 ^ IA(g, -3183 + -58 * -131 + 5 * -883)) << 8953 + 13 * 321 + -13124 ^ IA(g, 8264 + 1 * -8263)) << -34 * -41 + 15 * -563 + 7053 ^ IA(g, -46 * 174 + 1698 * -5 + 16496)) << 8989 + -1 * 6415 + -4 * 643 ^ IA(g, 683 + 6 * -1658 + 9268 * 1) : -2867 + -11 * 671 + -7 * -1464;
}
function Ki(g) {
  return g.trim();
}
function TA(g, I) {
  return (g = I.exec(g)) ? g[-7851 + -2099 * -1 + 5752] : g;
}
function N(g, I, t) {
  return g.replace(I, t);
}
function tg(g, I, t) {
  return g.indexOf(I, t);
}
function IA(g, I) {
  return g.charCodeAt(I) | -5761 + -2441 * 1 + 8202;
}
function Ke(g, I, t) {
  return g.slice(I, t);
}
function WA(g) {
  return g.length;
}
function Hi(g) {
  return g.length;
}
function Ct(g, I) {
  return I.push(g), g;
}
function uQ(g, I) {
  return g.map(I).join("");
}
function ro(g, I) {
  return g.filter(function(t) {
    return !TA(t, I);
  });
}
var Xg = 7443 + -4244 * -2 + -15930, He = 10311 + -2 * 5155, qi = 0, NA = -1 * 1867 + 3978 + 1 * -2111, $ = 223 * 21 + 8021 + -397 * 32, Xe = "";
function _g(g, I, t, A, e, o, i, C) {
  var B = {};
  return B.value = g, B.root = I, B.parent = t, B.type = A, B.props = e, B.children = o, B.line = Xg, B.column = He, B.length = i, B.return = "", B.siblings = C, B;
}
function ee(g, I) {
  return L0(_g("", null, null, "", null, null, 3016 + -2297 * -1 + -5313, g.siblings), g, { length: -g.length }, I);
}
function Ne(g) {
  for (; g.root; ) g = ee(g.root, { children: [g] });
  Ct(g, g.siblings);
}
function fQ() {
  return $;
}
function DQ() {
  return $ = NA > 3 * -661 + 9613 * 1 + -7630 ? IA(Xe, --NA) : -106 * -87 + 5564 + 2 * -7393, He--, $ === -771 * 2 + -46 * -211 + 302 * -27 && (He = 1, Xg--), $;
}
function MA() {
  return $ = NA < qi ? IA(Xe, NA++) : -6192 + -5 * -1060 + 892, He++, $ === -5835 + 2 * 3406 + -967 && (He = -1 * 8123 + -541 * -11 + -2173 * -1, Xg++), $;
}
function le() {
  return IA(Xe, NA);
}
function gg() {
  return NA;
}
function zg(g, I) {
  return Ke(Xe, g, I);
}
function J0(g) {
  switch (g) {
    case 10168 + 2 * -5084:
    case 3399 + -613 * -4 + -23 * 254:
    case -3046 * -2 + 3 * 1778 + -11416:
    case -7920 + 2239 * 4 + -1023:
    case -2 * -4229 + 7787 + -1 * 16213:
      return -9382 * -1 + 3146 + 12523 * -1;
    case 33:
    case -2646 + -41 * 109 + 7158:
    case -2 * -11 + 5791 * 1 + -5769:
    case 2605 + 416 * -6 + 2 * -31:
    case 224 * 10 + -337 * -26 + -4 * 2735:
    case 4672 + 4608 * -1:
    case 126:
    case 59:
    case -1 * 5189 + 7 * 1417 + -4607:
    case -32 * 169 + -1 * 1013 + 1091 * 6:
      return -6733 + 17 * 502 + -1797;
    case 58:
      return -5744 + -2 * 4825 + -15397 * -1;
    case -6218 + 533 * -13 + -1883 * -7:
    case 1 * 8951 + 11 * 619 + 1 * -15721:
    case -7465 * 1 + 2823 + 4682:
    case -3148 + 129 * -17 + 4 * 1358:
      return 5312 + -59 * 90;
    case 41:
    case 8551 + -2469 * -4 + 206 * -89:
      return -4634 * -2 + 223 * -2 + 1 * -8821;
  }
  return -1 * -9181 + -1 * 6359 + -2822;
}
function yQ(g) {
  return Xg = He = 1 * -7454 + -2225 + 9680, qi = WA(Xe = g), NA = 0, [];
}
function wQ(g) {
  return Xe = "", g;
}
function a0(g) {
  return Ki(zg(NA - (2949 + 1 * -2948), W0(g === -14 * 291 + -4615 + 8780 ? g + (-17 * 205 + -3911 * -1 + -53 * 8) : g === -8 * -1049 + -290 * -15 + -6351 * 2 ? g + (-90 * -34 + 8870 + -11929) : g)));
}
function pQ(g) {
  for (; ($ = le()) && $ < 2837 + 1 * -9593 + 6789; ) MA();
  return J0(g) > 239 * 19 + 5 * 431 + -2 * 3347 || J0($) > -1 * 9370 + 2688 + 6685 ? "" : " ";
}
function mQ(g, I) {
  for (; --I && MA() && !($ < -423 * -21 + 1019 * -5 + 935 * -4 || $ > -8315 + 86 * -69 + -127 * -113 || $ > -9094 * 1 + 66 + 9085 && $ < 1 * -3119 + -9893 + 13077 || $ > 16 * 37 + -1569 + 349 * 3 && $ < 3042 + -589 * 5); ) ;
  return zg(g, gg() + (I < 7823 + 1294 * 1 + 1 * -9111 && le() == 9722 + 1983 * 4 + -6 * 2937 && MA() == 3 * 3179 + 9158 + -18663));
}
function W0(g) {
  for (; MA(); ) switch ($) {
    case g:
      return NA;
    case -6035 + 357 * 17:
    case 1822 + -1783 * 1:
      g !== 34 && g !== 6304 + 4 * 1021 + -79 * 131 && W0($);
      break;
    case -1 * -1699 + 5338 * -1 + 3679:
      g === 41 && W0(g);
      break;
    case 92:
      MA();
      break;
  }
  return NA;
}
function GQ(g, I) {
  for (; MA() && g + $ !== -7721 + 7768 * 1 + (884 * 4 + -1 * -5659 + -55 * 167); ) if (g + $ === 4457 * -2 + -31 * 2 + -1 * -9018 + (-820 + -431 * -2) && le() === 135 * 50 + -8898 + 2195) break;
  return "/*" + zg(I, NA - (-21 * -358 + 3553 + -15 * 738)) + "*" + GI(g === -1814 + -1 * -5541 + -3680 ? g : MA());
}
function kQ(g) {
  for (; !J0(le()); ) MA();
  return zg(g, NA);
}
function bQ(g) {
  return wQ(Ig("", null, null, null, [""], g = yQ(g), 638 + -2 * 319, [-8472 + 1 * -7519 + 15991], g));
}
function Ig(g, I, t, A, e, o, i, C, B) {
  for (var Q = 0, a = -7489 * -1 + 2638 * 2 + -12765, n = i, s = -9711 * 1 + -1 * -2773 + 6938, x = 2163 + 4 * -2077 + 6145 * 1, r = 1691 + -1 * 6461 + 4770, d = -5569 * -1 + -4668 + 100 * -9, h = -2 * -269 + -5 * 1753 + 8228, E = 41 * 161 + -1 * -2696 + -8 * 1162, u = 0, w = "", R = e, S = o, M = A, y = w; h; ) switch (r = u, u = MA()) {
    case 1 * 9347 + 6165 + 967 * -16:
      if (r != -3 * 1202 + 9223 + -5509 * 1 && IA(y, n - (604 * -13 + 6918 + 935)) == 4761 + -1 * 4703) {
        tg(y += N(a0(u), "&", "&\f"), "&\f", Ui(Q ? C[Q - (3463 * 1 + -7370 + 3908)] : 1 * -2326 + -3902 + 6228)) != -1 && (E = -1);
        break;
      }
    case 3466 + -3083 * -2 + 9598 * -1:
    case -3458 + 1 * -733 + 4230:
    case -857 * -4 + 8265 + 2 * -5801:
      y += a0(u);
      break;
    case -1283 * -1 + 7954 + -3 * 3076:
    case 2302 + -7341 * 1 + -33 * -153:
    case -30 * -173 + -8524 + 3347:
    case 2324 * -2 + 9223 * 1 + 11 * -413:
      y += pQ(r);
      break;
    case -1 * -9349 + -4737 * 1 + 20 * -226:
      y += mQ(gg() - (1 * 3557 + -8415 + 43 * 113), 4668 + -697 * 9 + 1612);
      continue;
    case 1 * -9574 + -4284 + 13905:
      switch (le()) {
        case 8923 + 13 * 209 + 1 * -11598:
        case 6341 + -1049 * 6:
          Ct(NQ(GQ(MA(), gg()), I, t, B), B);
          break;
        default:
          y += "/";
      }
      break;
    case (634 * 9 + -3408 + -2175) * d:
      C[Q++] = WA(y) * E;
    case (-433 * 4 + -5635 + -1873 * -4) * d:
    case -2908 * -1 + 1 * -8837 + 5988:
    case -653 + -653 * -1:
      switch (u) {
        case -4643 * -1 + 6 * -504 + -1619:
        case -1 * -7998 + -4797 + -3076:
          h = -9544 + 1 * 2743 + 6801;
        case 7 * 356 + 6 * 1330 + 89 * -117 + a:
          E == -(115 * -59 + 1192 + 5594) && (y = N(y, /\f/g, "")), x > -2564 + 149 * -37 + 8077 && WA(y) - n && Ct(x > -421 + 5 * 1933 + -9212 ? co(y + ";", A, t, n - 1, B) : co(N(y, " ", "") + ";", A, t, n - 2, B), B);
          break;
        case 2411 + -3 * -2966 + -11250:
          y += ";";
        default:
          if (Ct(M = so(y, I, t, Q, a, e, C, w, R = [], S = [], n, o), o), u === 5 * -339 + -8423 + 10241)
            if (a === -8797 + 811 * -1 + -1201 * -8) Ig(y, I, M, M, R, o, n, C, S);
            else switch (s === -867 + -322 * -3 && IA(y, 3) === 110 ? 811 * 4 + -9 * 1091 + 267 * 25 : s) {
              case 9 * 371 + 7726 + -10965:
              case -6580 * 1 + 7 * -1259 + 1 * 15501:
              case -8608 + -35 * -264 + 523 * -1:
              case -1552 * -6 + 2 * 3181 + -1 * 15559:
                Ig(g, M, M, A && Ct(so(g, M, M, 0, -3 * 1366 + 223 + -155 * -25, e, C, w, e, R = [], n, S), S), e, S, n, C, A ? R : S);
                break;
              default:
                Ig(y, M, M, M, [""], S, 8287 + 1 * -8287, C, S);
            }
      }
      Q = a = x = 0, d = E = 1693 * -1 + 2406 + -712, w = y = "", n = i;
      break;
    case 9316 + 2 * -4629:
      n = -7583 + -6 * -1264 + WA(y), x = r;
    default:
      if (d < 2453 * 2 + -8901 + 3996) {
        if (u == -2 * -101 + -9202 + 9123 * 1) --d;
        else if (u == -9039 + 2 * -4489 + 18142 && d++ == 11 * -86 + -3 * 3271 + 1 * 10759 && DQ() == 1 * -1754 + 2617 + -738) continue;
      }
      switch (y += GI(u), u * d) {
        case 38:
          E = a > 103 * 59 + -8146 + -2069 * -1 ? -7476 + -7477 * -1 : (y += "\f", -(9041 + -1481 * 1 + -7559 * 1));
          break;
        case 13 * 28 + 5859 + -37 * 167:
          C[Q++] = (WA(y) - (-3951 + 1560 * 3 + -728)) * E, E = 724 * 2 + -478 + -3 * 323;
          break;
        case 8954 + -1 * -5674 + 3641 * -4:
          le() === 45 && (y += a0(MA())), s = le(), a = n = WA(w = y += kQ(gg())), u++;
          break;
        case -7756 * 1 + -8615 + 16416:
          r === -12 * -475 + 7 * 467 + -194 * 46 && WA(y) == -493 * -7 + -29 * 193 + 2148 && (d = -2 * 1558 + -6 * 1639 + -175 * -74);
      }
  }
  return o;
}
function so(g, I, t, A, e, o, i, C, B, Q, a, n) {
  for (var s = e - 1, x = e === -2 * 3853 + 261 * -37 + -179 * -97 ? o : [""], r = Hi(x), d = 0, h = 0, E = 0; d < A; ++d) for (var u = -5908 + 14 * 422, w = Ke(g, s + (1452 + -1135 * 1 + -316), s = Ui(h = i[d])), R = g; u < r; ++u) (R = Ki(h > 0 ? x[u] + " " + w : N(w, /&\f/g, x[u]))) && (B[E++] = R);
  return _g(g, I, t, e === 13 * 123 + -1 * -1673 + -3272 ? Vg : C, B, Q, a, n);
}
function NQ(g, I, t, A) {
  return _g(g, I, t, Yi, GI(fQ()), Ke(g, 7514 + 285 * 25 + -14637, -(10 * -3 + -36 * -207 + -7420)), 4113 + -1 * 4321 + 1 * 208, A);
}
function co(g, I, t, A, e) {
  return _g(g, I, t, mI, Ke(g, -6002 * -1 + 1 * 5890 + -11892, A), Ke(g, A + (-7 * -923 + 4 * -1743 + 16 * 32), -1), A, e);
}
function Oi(g, I, t) {
  switch (lQ(g, I)) {
    case 352 + -1 * -4751:
      return Y + "print-" + g + g;
    case 5737:
    case -2928 + 1774 * 2 + 3581:
    case -4180 + -2 * 3407 + 1 * 14171:
    case -4597 * 1 + 8916 + -2 * 443:
    case -5728 * -1 + 1807 + -5894:
    case -1 * -5309 + -1410 + 279 * 2:
    case 2921:
    case -3 * 2019 + -2299 * -1 + -30 * -311:
    case 1445 * -5 + -4845 + -83 * -222:
    case 8629 * -1 + -8627 + 23100:
    case 9789 * -1 + 1689 * 2 + 9602:
    case -133 * 94 + 3051 + 4024 * 4:
    case 9580 + -16 * 457 + -1 * -737:
    case 6391:
    case -5 * -1039 + 97 * -29 + 269 * 13:
    case -9031 * 1 + 5286 + 9368:
    case 253 * -5 + 1 * 8441 + -1041:
    case 9784 + 367 * -11 + -28 * 41:
    case 3303 * 3 + 9448 + -2417 * 6:
    case 4215:
    case 3233 * -2 + 1049 + -5903 * -2:
    case 628 + -1 * 4742 + -9223 * -1:
    case 712 + 1551 * 3:
    case -95 * -52 + 2 * 5601 + 1169 * -9:
    case 1 * 2245 + -3690 + 5274 * 1:
      return Y + g + g;
    case 6999 + 221 * -10:
      return rt + g + g;
    case 11420 + -13 * 467:
    case 7 * -643 + -951 * -6 + -3041 * -1:
    case -1 * -1747 + -5 * -398 + 37 * 29:
    case 906 + 1097 * 3 + 2771:
    case -1125 + -1 * -9109 + -5228:
      return Y + g + rt + g + H + g + g;
    case -197 * -13 + -526 + -3901 * -1:
      switch (IA(g, I + (-3455 + 3466 * 1))) {
        case -1153 + 1 * 1267:
          return Y + g + H + N(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 7570 + -3 * 226 + -6784:
          return Y + g + H + N(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case -46 * 131 + -38 * 103 + -5 * -1997:
          return Y + g + H + N(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case 1623 * 5 + -5357 + 814 * 5:
    case 5 * -967 + 3196 + -33 * -179:
    case 6420 + -21 * 467 + 6290:
      return Y + g + H + g + g;
    case -10006 + -557 * 2 + -5 * -3457:
      return Y + g + H + "flex-" + g + g;
    case -1 * -523 + -5112 + 9776:
      return Y + g + N(g, /(\w+).+(:[^]+)/, Y + "box-$1$2" + H + "flex-$1$2") + g;
    case 1 * 2591 + 9691 + -6839:
      return Y + g + H + "flex-item-" + N(g, /flex-|-self/g, "") + (TA(g, /flex-|baseline/) ? "" : H + "grid-row-" + N(g, /flex-|-self/g, "")) + g;
    case -1 * 5647 + -7537 * -1 + 2785:
      return Y + g + H + "flex-line-pack" + N(g, /align-content|flex-|-self/g, "") + g;
    case 3 * 1844 + -1226 * 6 + 97 * 76:
      return Y + g + H + N(g, "shrink", "negative") + g;
    case -7 * 1351 + 78 * -69 + -41 * -491:
      return Y + g + H + N(g, "basis", "preferred-size") + g;
    case 6060:
      return Y + "box-" + N(g, "-grow", "") + Y + g + H + N(g, "grow", "positive") + g;
    case -1 * -8312 + -2589 + 1169 * -1:
      return Y + N(g, /([^-])(transform)/g, "$1" + Y + "$2") + g;
    case -3 * -686 + -6018 + 10147 * 1:
      return N(N(N(g, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), g, "") + g;
    case -1828 * -3 + 16 * 659 + -10533:
    case 3959:
      return N(g, /(image-set\([^]*)/, Y + "$1$`$1");
    case 16 * -171 + -9605 + 911 * 19:
      return N(N(g, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + H + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + g + g;
    case 1 * 59 + -4439 * 2 + -277 * -47:
      if (!TA(g, /flex-|baseline/)) return H + "grid-column-align" + Ke(g, I) + g;
      break;
    case 1957 * 5 + -8209 + 1016:
    case 5988 + -44 * -160 + -9668:
      return H + N(g, "template-", "") + g;
    case 4384:
    case 3616:
      return t && t.some(function(A, e) {
        return I = e, TA(A.props, /grid-\w+-end/);
      }) ? ~tg(g + (t = t[I].value), "span", -5072 + 4 * 1268) ? g : H + N(g, "-start", "") + g + H + "grid-row-span:" + (~tg(t, "span", -10892 + -1556 * -7) ? TA(t, /\d+/) : +TA(t, /\d+/) - +TA(g, /\d+/)) + ";" : H + N(g, "-start", "") + g;
    case 4896:
    case -2668 + -2 * -4627 + -2458:
      return t && t.some(function(A) {
        return TA(A.props, /grid-\w+-start/);
      }) ? g : H + N(N(g, "-end", "-span"), "span ", "") + g;
    case -11255 + -614 * -25:
    case 2683 + -1548 * 4 + 2 * 3546:
    case 958 * -2 + -3 * -3226 + -1 * 3694:
    case -1936 + 1 * 4468:
      return N(g, /(.+)-inline(.+)/, Y + "$1$2") + g;
    case 18 * -485 + 3856 + 866 * 15:
    case 2353 * 6 + 763 * 18 + -20793:
    case -6917 + 7 * -1201 + -21077 * -1:
    case -1 * -824 + 29 * 202 + 37 * -31:
    case 5445:
    case -574 * -12 + 610 * 14 + 71 * -137:
    case -872 * 10 + -7264 + 13 * 1609:
    case 8104 + 4435 * -1 + 1008:
    case 6113 + 580 * -1:
    case -522 * 15 + -105 * 64 + 20339:
    case -141 * -61 + -1 * -542 + 9 * -458:
    case 5169 + -419 * -14 + -6270:
      if (WA(g) - (-1262 + -8 * -443 + 1 * -2281) - I > 1 * -7243 + -1933 * 4 + -211 * -71) switch (IA(g, I + 1)) {
        case -6176 + -1 * -3601 + 122 * 22:
          if (IA(g, I + (-1621 * -3 + -1021 + -101 * 38)) !== -6817 + 75 * -1 + 6937) break;
        case 4068 + -1227 * -3 + -1 * 7647:
          return N(g, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + rt + (IA(g, I + (4 * 2258 + 2 * -228 + -8573)) == -3339 + 383 * 9 ? "$3" : "$2-$3")) + g;
        case -6442 + 8507 * -1 + 1 * 15064:
          return ~tg(g, "stretch", -1 * -8933 + -6462 * 1 + 7 * -353) ? Oi(N(g, "stretch", "fill-available"), I, t) + g : g;
      }
      break;
    case 11105 + -5953 * 1:
    case 11426 * 1 + -767 + -4739:
      return N(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, e, o, i, C, B, Q) {
        return H + e + ":" + o + Q + (i ? H + e + "-span:" + (C ? B : +B - +o) + Q : "") + g;
      });
    case 1603 + -3346 * -1:
      if (IA(g, I + (2513 * -1 + 1 * -3126 + 5645)) === 121) return N(g, ":", ":" + Y) + g;
      break;
    case 9549 + 47 * 190 + -83 * 145:
      switch (IA(g, IA(g, 6482 + -1 * -3131 + -9599) === -27 * -65 + 1114 + -1 * 2824 ? -14 * -569 + 4798 * 1 + -12746 : -6685 + -5 * -1607 + -1339)) {
        case 5924 + 51 * 6 + 1 * -6110:
          return N(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Y + (IA(g, 14) === 1124 * 5 + -2914 * -1 + -1 * 8489 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + H + "$2box$3") + g;
        case -8523 + 2 * -1977 + 12577:
          return N(g, ":", ":" + H) + g;
      }
      break;
    case -241 * -14 + 993 * -2 + 4331 * 1:
    case -46 * 89 + -4442 + -1 * -11183:
    case 1 * -4523 + 6763 + -7 * 15:
    case 998 + -1 * -2929:
    case 8579 + 1 * 841 + -99 * 71:
      return N(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function cg(g, I) {
  for (var t = "", A = -1 * -4516 + -1786 + -2730; A < g.length; A++) t += I(g[A], A, g, I) || "";
  return t;
}
function FQ(g, I, t, A) {
  switch (g.type) {
    case hQ:
      if (g.children.length) break;
    case dQ:
    case mI:
      return g.return = g.return || g.value;
    case Yi:
      return "";
    case vi:
      return g.return = g.value + "{" + cg(g.children, A) + "}";
    case Vg:
      if (!WA(g.value = g.props.join(","))) return "";
  }
  return WA(t = cg(g.children, A)) ? g.return = g.value + "{" + t + "}" : "";
}
function RQ(g) {
  var I = Hi(g);
  return function(t, A, e, o) {
    for (var i = "", C = 0; C < I; C++) i += g[C](t, A, e, o) || "";
    return i;
  };
}
function SQ(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function MQ(g, I, t, A) {
  if (g.length > -(-7 * 637 + 800 + 366 * 10) && !g.return)
    switch (g.type) {
      case mI:
        g.return = Oi(g.value, g.length, t);
        return;
      case vi:
        return cg([ee(g, { value: N(g.value, "@", "@" + Y) })], A);
      case Vg:
        if (g.length) return uQ(t = g.props, function(e) {
          switch (TA(e, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Ne(ee(g, { props: [N(e, /:(read-\w+)/, ":" + rt + "$1")] }));
              var o = {};
              o.props = [e], Ne(ee(g, o)), L0(g, { props: ro(t, A) });
              break;
            case "::placeholder":
              Ne(ee(g, { props: [N(e, /:(plac\w+)/, ":" + Y + "input-$1")] })), Ne(ee(g, { props: [N(e, /:(plac\w+)/, ":" + rt + "$1")] })), Ne(ee(g, { props: [N(e, /:(plac\w+)/, H + "input-$1")] }));
              var i = {};
              i.props = [e], Ne(ee(g, i)), L0(g, { props: ro(t, A) });
              break;
          }
          return "";
        });
    }
}
var m = {};
m.animationIterationCount = 1, m.aspectRatio = 1, m.borderImageOutset = 1, m.borderImageSlice = 1, m.borderImageWidth = 1, m.boxFlex = 1, m.boxFlexGroup = 1, m.boxOrdinalGroup = 1, m.columnCount = 1, m.columns = 1, m.flex = 1, m.flexGrow = 1, m.flexPositive = 1, m.flexShrink = 1, m.flexNegative = 1, m.flexOrder = 1, m.gridRow = 1, m.gridRowEnd = 1, m.gridRowSpan = 1, m.gridRowStart = 1, m.gridColumn = 1, m.gridColumnEnd = 1, m.gridColumnSpan = 1, m.gridColumnStart = 1, m.msGridRow = 1, m.msGridRowSpan = 1, m.msGridColumn = 1, m.msGridColumnSpan = 1, m.fontWeight = 1, m.lineHeight = 1, m.opacity = 1, m.order = 1, m.orphans = 1, m.tabSize = 1, m.widows = 1, m.zIndex = 1, m.zoom = 1, m.WebkitLineClamp = 1, m.fillOpacity = 1, m.floodOpacity = 1, m.stopOpacity = 1, m.strokeDasharray = 1, m.strokeDashoffset = 1, m.strokeMiterlimit = 1, m.strokeOpacity = 1, m.strokeWidth = 1;
var LQ = m, W = {}, ye = typeof process < "u" && void (7050 + -5101 * 1 + -1949 * 1) !== W && (W.REACT_APP_SC_ATTR || W.SC_ATTR) || "data-styled", Ti = "active", Zi = "data-styled-version", $g = "6.1.11", kI = `/*!sc*/
`, bI = typeof window < "u" && "HTMLElement" in window, JQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-18 * -247 + -1087 + -1 * 3359) !== W && void (-8398 + 9326 * 1 + -116 * 8) !== W.REACT_APP_SC_DISABLE_SPEEDY && W.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-7689 + -77 * 34 + 937 * 11) !== W && void (-2 * 211 + -4577 + -1 * -4999) !== W.SC_DISABLE_SPEEDY && W.SC_DISABLE_SPEEDY !== "" ? W.SC_DISABLE_SPEEDY !== "false" && W.SC_DISABLE_SPEEDY : W.NODE_ENV !== "production"), ho = /invalid hook call/i, qt = /* @__PURE__ */ new Set(), WQ = function(g, I) {
  if (W.NODE_ENV !== "production") {
    var t = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], B = 8502 + -1 * -4283 + -12784; B < arguments.length; B++) C[B - (10754 + 1 * -10753)] = arguments[B];
        ho.test(i) ? (o = !1, qt.delete(A)) : e.apply(void (798 + 4 * -1199 + 3998), ve([i], C, !1));
      }, UA(), o && !qt.has(A) && (console.warn(A), qt.add(A));
    } catch (i) {
      ho.test(i.message) && qt.delete(A);
    } finally {
      console.error = e;
    }
  }
}, A0 = Object.freeze([]), qe = Object.freeze({});
function YQ(g, I, t) {
  return t === void 0 && (t = qe), g.theme !== t.theme && g.theme || I || t.theme;
}
var Y0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), vQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, UQ = /(^-|-$)/g;
function lo(g) {
  return g.replace(vQ, "-").replace(UQ, "");
}
var KQ = /(a)(d)/gi, Ot = 1 * 9096 + -76 * -32 + 2869 * -4, uo = function(g) {
  return String.fromCharCode(g + (g > 1 * -4843 + -2 * 4871 + 14610 ? -5899 + 1 * 5938 : -3125 + 589 * -1 + -103 * -37));
};
function v0(g) {
  var I, t = "";
  for (I = Math.abs(g); I > Ot; I = I / Ot | 0) t = uo(I % Ot) + t;
  return (uo(I % Ot) + t).replace(KQ, "$1-$2");
}
var x0, ji = 5381, xe = function(g, I) {
  for (var t = I.length; t; ) g = (-2566 * 2 + 785 + 4380) * g ^ I.charCodeAt(--t);
  return g;
}, Pi = function(g) {
  return xe(ji, g);
};
function HQ(g) {
  return v0(Pi(g) >>> -1 * 1314 + -1594 + -1 * -2908);
}
function Vi(g) {
  return W.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function E0(g) {
  return typeof g == "string" && (W.NODE_ENV === "production" || g.charAt(0) === g.charAt(-523 * 7 + -13 * -221 + -1 * -788).toLowerCase());
}
var pA = {};
pA.childContextTypes = !0, pA.contextType = !0, pA.contextTypes = !0, pA.defaultProps = !0, pA.displayName = !0, pA.getDefaultProps = !0, pA.getDerivedStateFromError = !0, pA.getDerivedStateFromProps = !0, pA.mixins = !0, pA.propTypes = !0, pA.type = !0;
var te = {};
te.name = !0, te.length = !0, te.prototype = !0, te.caller = !0, te.callee = !0, te.arguments = !0, te.arity = !0;
var ne = {};
ne.$$typeof = !0, ne.compare = !0, ne.defaultProps = !0, ne.displayName = !0, ne.propTypes = !0, ne.type = !0;
var Fe = {};
Fe.$$typeof = !0, Fe.render = !0, Fe.defaultProps = !0, Fe.displayName = !0, Fe.propTypes = !0;
var Xi = typeof Symbol == "function" && Symbol.for, _i = Xi ? Symbol.for("react.memo") : 49335 + -9774 * 6 + 69424, qQ = Xi ? Symbol.for("react.forward_ref") : 74862 * 1 + -111351 + 1 * 96601, OQ = pA, TQ = te, zi = ne, ZQ = ((x0 = {})[qQ] = Fe, x0[_i] = zi, x0);
function fo(g) {
  return ("type" in (I = g) && I.type.$$typeof) === _i ? zi : "$$typeof" in g ? ZQ[g.$$typeof] : OQ;
  var I;
}
var jQ = Object.defineProperty, PQ = Object.getOwnPropertyNames, Do = Object.getOwnPropertySymbols, VQ = Object.getOwnPropertyDescriptor, XQ = Object.getPrototypeOf, yo = Object.prototype;
function $i(g, I, t) {
  if (typeof I != "string") {
    if (yo) {
      var A = XQ(I);
      A && A !== yo && $i(g, A, t);
    }
    var e = PQ(I);
    Do && (e = e.concat(Do(I)));
    for (var o = fo(g), i = fo(I), C = -5129 * 1 + 552 * 12 + 1495 * -1; C < e.length; ++C) {
      var B = e[C];
      if (!(B in TQ || t && t[B] || i && B in i || o && B in o)) {
        var Q = VQ(I, B);
        try {
          jQ(g, B, Q);
        } catch {
        }
      }
    }
  }
  return g;
}
function Oe(g) {
  return typeof g == "function";
}
function NI(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function re(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function wo(g, I) {
  if (-162 * -60 + 109 * -66 + 2 * -1263 === g.length) return "";
  for (var t = g[0], A = 16 * -46 + 3959 + -3222; A < g.length; A++) t += g[A];
  return t;
}
function Te(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function U0(g, I, t) {
  if (t === void 0 && (t = !1), !t && !Te(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = 21 * -365 + -4306 * -2 + -947; A < I.length; A++) g[A] = U0(g[A], I[A]);
  else if (Te(I))
    for (var A in I) g[A] = U0(g[A], I[A]);
  return g;
}
function FI(g, I) {
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
var _Q = W.NODE_ENV !== "production" ? AA : {};
function zQ() {
  for (var g = [], I = -49 * 45 + -425 * 3 + 3480; I < arguments.length; I++) g[I] = arguments[I];
  for (var t = g[-8400 + -2100 * -4], A = [], e = 5951 * 1 + -2338 + -3612, o = g.length; e < o; e += 9487 + 963 * -2 + -7560) A.push(g[e]);
  return A.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function _e(g) {
  for (var I = [], t = 1575 + 1 * 3799 + -1 * 5373; t < arguments.length; t++) I[t - 1] = arguments[t];
  return W.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > -11746 + 7 * 1678 ? " Args: ".concat(I.join(", ")) : "")) : new Error(zQ.apply(void (-3821 + 1 * 3821), ve([_Q[g]], I, !1)).trim());
}
var $Q = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(-11828 + 1 * 12340), this.length = 545 * -1 + 9895 * -1 + 10952, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var t = 3272 + -1636 * 2, A = 818 * -2 + 3167 * 1 + -1531 * 1; A < I; A++) t += this.groupSizes[A];
    return t;
  }, g.prototype.insertRules = function(I, t) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, e = A.length, o = e; I >= o; ) if ((o <<= -1 * 3003 + 4 * -1301 + 8208) < 0) throw _e(12741 + -509 * 25, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = e; i < o; i++) this.groupSizes[i] = 5968 + 22 * -1 + -5946;
    }
    for (var C = this.indexOfGroup(I + 1), B = (i = 3528 + 1 * 3244 + -1 * 6772, t.length); i < B; i++) this.tag.insertRule(C, t[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var t = this.groupSizes[I], A = this.indexOfGroup(I), e = A + t;
      this.groupSizes[I] = 75 * -103 + 1167 * 7 + -444;
      for (var o = A; o < e; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var t = "";
    if (I >= this.length || -2364 + 2257 * 2 + -2150 === this.groupSizes[I]) return t;
    for (var A = this.groupSizes[I], e = this.indexOfGroup(I), o = e + A, i = e; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(kI);
    return t;
  }, g;
}(), An = 1 << 30, og = /* @__PURE__ */ new Map(), dg = /* @__PURE__ */ new Map(), ig = -27 * -237 + -2 * 1003 + -4392, Tt = function(g) {
  if (og.has(g)) return og.get(g);
  for (; dg.has(ig); ) ig++;
  var I = ig++;
  if (W.NODE_ENV !== "production" && ((-1 * -6907 + 1396 * 2 + 9699 * -1 | I) < -3 * -2167 + -2 * -1673 + -9847 || I > An)) throw _e(-6039 + -22 * -257 + -1 * -401, "".concat(I));
  return og.set(g, I), dg.set(I, g), I;
}, en = function(g, I) {
  ig = I + (-166 * 12 + 3435 + -7 * 206), og.set(g, I), dg.set(I, g);
}, tn = "style[".concat(ye, "][").concat(Zi, '="').concat($g, '"]'), gn = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), In = function(g, I, t) {
  for (var A, e = t.split(","), o = -122 * 71 + -3880 + -6271 * -2, i = e.length; o < i; o++) (A = e[o]) && g.registerName(I, A);
}, on = function(g, I) {
  for (var t, A = ((t = I.textContent) !== null && t !== void 0 ? t : "").split(kI), e = [], o = 1175 * 5 + 4185 + 20 * -503, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var B = C.match(gn);
      if (B) {
        var Q = 0 | parseInt(B[1], 10), a = B[-1 * -797 + 9343 + -274 * 37];
        9033 + 1 * -2681 + 1588 * -4 !== Q && (en(a, Q), In(g, a, B[1 * 2577 + -38 * -87 + -168 * 35]), g.getTag().insertRules(Q, e)), e.length = 0;
      } else e.push(C);
    }
  }
};
function Cn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var AC = function(g) {
  var I = document.head, t = g || I, A = document.createElement("style"), e = function(C) {
    var B = Array.from(C.querySelectorAll("style[".concat(ye, "]")));
    return B[B.length - (-9001 + -1 * 6361 + 15363)];
  }(t), o = void (58 * -130 + 8015 + -475) !== e ? e.nextSibling : null;
  A.setAttribute(ye, Ti), A.setAttribute(Zi, $g);
  var i = Cn();
  return i && A.setAttribute("nonce", i), t.insertBefore(A, o), A;
}, Bn = function() {
  function g(I) {
    this.element = AC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var A = document.styleSheets, e = -2 * 3831 + 9979 + -1 * 2317, o = A.length; e < o; e++) {
        var i = A[e];
        if (i.ownerNode === t) return i;
      }
      throw _e(977 * 10 + -9592 + 161 * -1);
    }(this.element), this.length = 8400 + -2 * 4172 + -7 * 8;
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
    this.element = AC(I), this.nodes = this.element.childNodes, this.length = -7634 + 1849 * -2 + -2833 * -4;
  }
  return g.prototype.insertRule = function(I, t) {
    if (I <= this.length && I >= 153 * 45 + 11 * 123 + -6 * 1373) {
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
    this.rules = [], this.length = 10 * -647 + 12 * -659 + 553 * 26;
  }
  return g.prototype.insertRule = function(I, t) {
    return I <= this.length && (this.rules.splice(I, -10021 + 1 * 10021, t), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, -5775 + 8 * 722), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), po = bI, an = { isServer: !bI, useCSSOMInjection: !JQ }, eC = function() {
  function g(I, t, A) {
    void (1103 * 7 + 3258 + 1 * -10979) === I && (I = qe), void (-8526 + 179 * 5 + 587 * 13) === t && (t = {});
    var e = this;
    this.options = hA(hA({}, an), I), this.gs = t, this.names = new Map(A), this.server = !!I.isServer, !this.server && bI && po && (po = !1, function(o) {
      for (var i = document.querySelectorAll(tn), C = 6367 + -7297 * -1 + 32 * -427, B = i.length; C < B; C++) {
        var Q = i[C];
        Q && Q.getAttribute(ye) !== Ti && (on(o, Q), Q.parentNode && Q.parentNode.removeChild(Q));
      }
    }(this)), FI(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, B = "", Q = function(n) {
          var s = function(E) {
            return dg.get(E);
          }(n);
          if (void (7697 + -1 * -7109 + -1346 * 11) === s) return "continue";
          var x = o.names.get(s), r = i.getGroup(n);
          if (x === void 0 || -9144 + 4710 * -1 + 13854 === r.length) return "continue";
          var d = "".concat(ye, ".g").concat(n, '[id="').concat(s, '"]'), h = "";
          void (-12161 + -12161 * -1) !== x && x.forEach(function(E) {
            E.length > -2 * 660 + 2 * 287 + 746 && (h += "".concat(E, ","));
          }), B += "".concat(r).concat(d, '{content:"').concat(h, '"}').concat(kI);
        }, a = -64 * -81 + -1642 * -5 + -13394; a < C; a++) Q(a);
        return B;
      }(e);
    });
  }
  return g.registerId = function(I) {
    return Tt(I);
  }, g.prototype.reconstructWithOptions = function(I, t) {
    return void (-37 * 91 + -4116 + 1 * 7483) === t && (t = !0), new g(hA(hA({}, this.options), I), this.gs, t && this.names || void (8667 * 1 + 4 * -1327 + -3359));
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || 1313 + 1053 * -7 + 6058) + (-6403 * -1 + 7 * -1087 + 1207);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(t) {
      var A = t.useCSSOMInjection, e = t.target;
      return t.isServer ? new nn(e) : A ? new Bn(e) : new Qn(e);
    }(this.options), new $Q(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, t) {
    return this.names.has(I) && this.names.get(I).has(t);
  }, g.prototype.registerName = function(I, t) {
    if (Tt(I), this.names.has(I)) this.names.get(I).add(t);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(t), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, t, A) {
    this.registerName(I, t), this.getTag().insertRules(Tt(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(Tt(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void (17420 + -4355 * 4);
  }, g;
}(), xn = /&/g, En = /^\s*\/\/.*$/gm;
function tC(g, I) {
  return g.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(I, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(I, " ")), t.props = t.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = tC(t.children, I)), t;
  });
}
function gC(g) {
  var I, t, A, e = g === void 0 ? qe : g, o = e.options, i = void (-7909 + 1 * -4063 + 11972) === o ? qe : o, C = e.plugins, B = C === void 0 ? A0 : C, Q = function(s, x, r) {
    return r.startsWith(t) && r.endsWith(t) && r.replaceAll(t, "").length > 1 * 9122 + -50 * -115 + -14872 ? ".".concat(I) : s;
  }, a = B.slice();
  a.push(function(s) {
    s.type === Vg && s.value.includes("&") && (s.props[76 * -47 + 2 * 4541 + -5510] = s.props[-1 * -4889 + 3 * 2681 + -12932].replace(xn, t).replace(A, Q));
  }), i.prefix && a.push(MQ), a.push(FQ);
  var n = function(s, x, r, d) {
    void (95 * -18 + 8164 + -3227 * 2) === x && (x = ""), void (-5468 + 2734 * 2) === r && (r = ""), void (1 * 2414 + -4652 + -2238 * -1) === d && (d = "&"), I = d, t = x, A = new RegExp("\\".concat(t, "\\b"), "g");
    var h = s.replace(En, ""), E = bQ(r || x ? "".concat(r, " ").concat(x, " { ").concat(h, " }") : h);
    i.namespace && (E = tC(E, i.namespace));
    var u = [];
    return cg(E, RQ(a.concat(SQ(function(w) {
      return u.push(w);
    })))), u;
  };
  return n.hash = B.length ? B.reduce(function(s, x) {
    return x.name || _e(-7894 * -1 + 6315 + -14194), xe(s, x.name);
  }, ji).toString() : "", n;
}
var rn = new eC(), K0 = gC(), RI = De.createContext({ shouldForwardProp: void (-2 * 2710 + 7750 + 2 * -1165), styleSheet: rn, stylis: K0 });
RI.Consumer;
var sn = De.createContext(void (5871 + 3382 * 2 + -5 * 2527));
function H0() {
  return pe(RI);
}
function cn(g) {
  var I = GA(g.stylisPlugins), t = I[-14 * -191 + 8158 + -10832], A = I[-3 * -1527 + -9007 + 4427], e = H0().styleSheet, o = yA(function() {
    var a = e, n = {};
    return n.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(n)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, e]), i = yA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var n = {};
    return n.options = a, n.plugins = t, gC(n);
  }, [g.enableVendorPrefixes, g.namespace, t]);
  gA(function() {
    cQ(t, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = yA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), B = {};
  B.value = C;
  var Q = {};
  return Q.value = i, De.createElement(RI.Provider, B, De.createElement(sn.Provider, Q, g.children));
}
var mo = function() {
  function g(I, t) {
    var A = this;
    this.inject = function(e, o) {
      void (-9681 * 1 + -4352 + 14033) === o && (o = K0);
      var i = A.name + o.hash;
      e.hasNameForId(A.id, i) || e.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = t, FI(this, function() {
      throw _e(-5854 + -5 * -803 + -617 * -3, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return I === void 0 && (I = K0), this.name + I.hash;
  }, g;
}(), dn = function(g) {
  return g >= "A" && g <= "Z";
};
function Go(g) {
  for (var I = "", t = -566 + 566 * 1; t < g.length; t++) {
    var A = g[t];
    if (797 * -2 + -1903 * 3 + -1 * -7304 === t && A === "-" && g[0] === "-") return g;
    dn(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var IC = function(g) {
  return g == null || g === !1 || g === "";
}, oC = function(g) {
  var I, t, A = [];
  for (var e in g) {
    var o = g[e];
    g.hasOwnProperty(e) && !IC(o) && (Array.isArray(o) && o.isCss || Oe(o) ? A.push("".concat(Go(e), ":"), o, ";") : Te(o) ? A.push.apply(A, ve(ve(["".concat(e, " {")], oC(o), !1), ["}"], !1)) : A.push("".concat(Go(e), ": ").concat((I = e, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -98 * 16 + -3 * 1249 + 5315 === t || I in LQ || I.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return A;
};
function ue(g, I, t, A) {
  if (IC(g)) return [];
  if (NI(g)) return [".".concat(g.styledComponentId)];
  if (Oe(g)) {
    if (!Oe(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var e = g(I);
    return W.NODE_ENV === "production" || typeof e != "object" || Array.isArray(e) || e instanceof mo || Te(e) || e === null || console.error("".concat(Vi(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ue(e, I, t, A);
  }
  var o;
  return g instanceof mo ? t ? (g.inject(t, A), [g.getName(A)]) : [g] : Te(g) ? oC(g) : Array.isArray(g) ? Array.prototype.concat.apply(A0, g.map(function(i) {
    return ue(i, I, t, A);
  })) : [g.toString()];
}
function hn(g) {
  for (var I = -5624 + -4379 * -1 + -15 * -83; I < g.length; I += 1) {
    var t = g[I];
    if (Oe(t) && !NI(t)) return !1;
  }
  return !0;
}
var ln = Pi($g), un = function() {
  function g(I, t, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = W.NODE_ENV === "production" && (void (-9808 + -482 * 17 + -2 * -9001) === A || A.isStatic) && hn(I), this.componentId = t, this.baseHash = xe(ln, t), this.baseStyle = A, eC.registerId(t);
  }
  return g.prototype.generateAndInjectStyles = function(I, t, A) {
    var e = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, t, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) e = re(e, this.staticRulesId);
      else {
        var o = wo(ue(this.rules, I, t, A)), i = v0(xe(this.baseHash, o) >>> 9246 + 26 * 269 + -16240);
        if (!t.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, C);
        }
        e = re(e, i), this.staticRulesId = i;
      }
    else {
      for (var B = xe(this.baseHash, A.hash), Q = "", a = 1 * 4475 + -1 * -8513 + -68 * 191; a < this.rules.length; a++) {
        var n = this.rules[a];
        if (typeof n == "string") Q += n, W.NODE_ENV !== "production" && (B = xe(B, n));
        else if (n) {
          var s = wo(ue(n, I, t, A));
          B = xe(B, s + a), Q += s;
        }
      }
      if (Q) {
        var x = v0(B >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, A(Q, ".".concat(x), void 0, this.componentId)), e = re(e, x);
      }
    }
    return e;
  }, g;
}(), iC = De.createContext(void (3 * -818 + -1831 + 1 * 4285));
iC.Consumer;
var r0 = {}, ko = /* @__PURE__ */ new Set();
function fn(g, I, t) {
  var A = NI(g), e = g, o = !E0(g), i = I.attrs, C = void (399 + 1 * -399) === i ? A0 : i, B = I.componentId, Q = void (12345 + 3 * -4115) === B ? function(S, M) {
    var y = typeof S != "string" ? "sc" : lo(S);
    r0[y] = (r0[y] || -4700 + -1 * 9903 + 14603) + (-6734 + -467 * 9 + 10938);
    var O = "".concat(y, "-").concat(HQ($g + y + r0[y]));
    return M ? "".concat(M, "-").concat(O) : O;
  }(I.displayName, I.parentComponentId) : B, a = I.displayName, n = void (5031 + -97 * 41 + -1054) === a ? function(S) {
    return E0(S) ? "styled.".concat(S) : "Styled(".concat(Vi(S), ")");
  }(g) : a, s = I.displayName && I.componentId ? "".concat(lo(I.displayName), "-").concat(I.componentId) : I.componentId || Q, x = A && e.attrs ? e.attrs.concat(C).filter(Boolean) : C, r = I.shouldForwardProp;
  if (A && e.shouldForwardProp) {
    var d = e.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      r = function(S, M) {
        return d(S, M) && h(S, M);
      };
    } else r = d;
  }
  var E = new un(t, s, A ? e.componentStyle : void (4767 + 1589 * -3));
  function u(S, M) {
    return function(y, O, J) {
      var X = y.attrs, ke = y.componentStyle, BB = y.defaultProps, QB = y.foldedComponentIds, OI = y.styledComponentId, nB = y.target, aB = De.useContext(iC), xB = H0(), I0 = y.shouldForwardProp || xB.shouldForwardProp;
      W.NODE_ENV !== "production" && sg(OI);
      var TI = YQ(O, aB, BB) || qe, HA = function(vt, At, Ut) {
        var be = {};
        be.className = void (-1431 + 371 * -20 + 8851), be.theme = Ut;
        for (var C0, Be = hA(hA({}, At), be), B0 = 7487 * 1 + 1 * 7454 + 14941 * -1; B0 < vt.length; B0 += 5 * -1489 + 5 * 71 + -7091 * -1) {
          var Kt = Oe(C0 = vt[B0]) ? C0(Be) : C0;
          for (var $A in Kt) Be[$A] = $A === "className" ? re(Be[$A], Kt[$A]) : $A === "style" ? hA(hA({}, Be[$A]), Kt[$A]) : Kt[$A];
        }
        return At.className && (Be.className = re(Be.className, At.className)), Be;
      }(X, O, TI), ze = HA.as || nB, $e = {};
      for (var wA in HA) void (-22 * -411 + 5754 + -14796) === HA[wA] || wA[814 + -19 * 273 + -1 * -4373] === "$" || wA === "as" || wA === "theme" && HA.theme === TI || (wA === "forwardedAs" ? $e.as = HA.forwardedAs : I0 && !I0(wA, ze) || ($e[wA] = HA[wA], I0 || W.NODE_ENV !== "development" || NB(wA) || ko.has(wA) || !Y0.has(ze) || (ko.add(wA), console.warn('styled-components: it looks like an unknown prop "'.concat(wA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var o0 = function(vt, At) {
        var Ut = H0(), be = vt.generateAndInjectStyles(At, Ut.styleSheet, Ut.stylis);
        return W.NODE_ENV !== "production" && sg(be), be;
      }(ke, HA);
      W.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(o0);
      var i0 = re(QB, OI);
      return o0 && (i0 += " " + o0), HA.className && (i0 += " " + HA.className), $e[E0(ze) && !Y0.has(ze) ? "class" : "className"] = i0, $e.ref = J, sA(ze, $e);
    }(w, S, M);
  }
  u.displayName = n;
  var w = De.forwardRef(u), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, w.attrs = x, w.componentStyle = E, w.displayName = n, w.shouldForwardProp = r, w.foldedComponentIds = A ? re(e.foldedComponentIds, e.styledComponentId) : "", w.styledComponentId = s, w.target = A ? e.target : g, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = A ? function(M) {
      for (var y = [], O = 1 * 6791 + -9996 + 3206; O < arguments.length; O++) y[O - (601 * -3 + -4586 + 30 * 213)] = arguments[O];
      for (var J = 1067 * 1 + 2389 + 384 * -9, X = y; J < X.length; J++) U0(M, X[J], !0);
      return M;
    }({}, e.defaultProps, S) : S;
  } }), W.NODE_ENV !== "production" && (WQ(n, s), w.warnTooManyClasses = /* @__PURE__ */ function(S, M) {
    var y = {}, O = !1;
    return function(J) {
      if (!O && (y[J] = !0, Object.keys(y).length >= -1 * 2777 + -1 * -6595 + -1 * 3618)) {
        var X = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(S).concat(X, `.
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
  }(n, s)), FI(w, function() {
    return ".".concat(w.styledComponentId);
  }), o && $i(w, g, R), w;
}
function bo(g, I) {
  for (var t = [g[-89 * -43 + -1 * 1409 + 2418 * -1]], A = 2 * -478 + -6059 + 7015, e = I.length; A < e; A += 1 * 6367 + -6253 + -113 * 1) t.push(I[A], g[A + 1]);
  return t;
}
var No = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function Dn(g) {
  for (var I = [], t = 1; t < arguments.length; t++) I[t - (1347 + 3 * 1398 + -1385 * 4)] = arguments[t];
  if (Oe(g) || Te(g)) return No(ue(bo(A0, ve([g], I, !0))));
  var A = g;
  return 71 * 137 + -1 * -1145 + -18 * 604 === I.length && -4 * -1682 + 34 * 229 + -14513 === A.length && typeof A[1 * -5911 + -8351 + 14262 * 1] == "string" ? ue(A) : No(ue(bo(A, I)));
}
function q0(g, I, t) {
  if (void (-1 * -7673 + -2840 + -1 * 4833) === t && (t = qe), !I) throw _e(7728 + -213 * 21 + -3254, I);
  var A = function(e) {
    for (var o = [], i = 2 * 727 + -2792 + 1 * 1339; i < arguments.length; i++) o[i - (-7922 * 1 + 44 * 213 + -1449)] = arguments[i];
    return g(I, t, Dn.apply(void (-963 * 8 + -7912 + 15616), ve([e], o, !1)));
  };
  return A.attrs = function(e) {
    return q0(g, I, hA(hA({}, t), { attrs: Array.prototype.concat(t.attrs, e).filter(Boolean) }));
  }, A.withConfig = function(e) {
    return q0(g, I, hA(hA({}, t), e));
  }, A;
}
var CC = function(g) {
  return q0(fn, g);
}, Mt = CC;
Y0.forEach(function(g) {
  Mt[g] = CC(g);
});
W.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Zt = "__sc-".concat(ye, "__");
W.NODE_ENV !== "production" && W.NODE_ENV !== "test" && typeof window < "u" && (window[Zt] || (window[Zt] = -1 * -1961 + 3796 + 57 * -101), window[Zt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Zt] += -61 * 4 + -5919 * -1 + -5674);
const yn = Mt.div`
  position: relative;
`, wn = Mt.video`
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
const Cg = {};
Cg.CONTINUE_DETECTION = "continue-detection", Cg.SWITCH_CAMERA = "switch-camera", Cg.TOGGLE_MIRROR = "toggle-mirror";
const s0 = Cg, O0 = {};
O0.FIRST_FRAME = "first-frame", O0.FIRST_VALID_FRAME = "first-valid-frame";
const c0 = O0, BC = {};
BC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Fo = BC;
var _A = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))(_A || {}), pn = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(pn || {}), mn = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(mn || {}), Gn = ((g) => (g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(Gn || {}), kn = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(kn || {}), bn = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(bn || {});
const OA = {};
OA.CANDIDATE_SELECTION = "candidate_selection", OA.DOCUMENT_CENTERING = "document_centering", OA.DOCUMENT_NOT_PRESENT = "document_not_present", OA.DOCUMENT_TOO_FAR = "document_too_far", OA.SHARPNESS_TOO_LOW = "sharpness_too_low", OA.BRIGHTNESS_TOO_LOW = "brightness_too_low", OA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", OA.HOTSPOTS_PRESENT = "hotspots_present";
const ZA = OA, ge = {};
ge.isPresent = ZA.DOCUMENT_NOT_PRESENT, ge.isNotSmall = ZA.DOCUMENT_TOO_FAR, ge.isNotOutOfBounds = ZA.DOCUMENT_CENTERING, ge.isSharp = ZA.SHARPNESS_TOO_LOW, ge.isNotDim = ZA.BRIGHTNESS_TOO_LOW, ge.isNotBright = ZA.BRIGHTNESS_TOO_HIGH, ge.noHotspots = ZA.HOTSPOTS_PRESENT;
const Nn = ge, T0 = {};
T0.FRONT = "user", T0.REAR = "environment";
const hg = T0, Z0 = {};
Z0.AUTO_CAPTURE = "AUTO_CAPTURE", Z0.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const QC = Z0, Bt = {};
Bt.LOADING = "LOADING", Bt.ERROR = "ERROR", Bt.WAITING = "WAITING", Bt.RUNNING = "RUNNING";
const DA = Bt;
var Fn = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(Fn || {});
const e0 = St(void 0);
e0.displayName = "AppStateContext";
function Lt() {
  const g = pe(e0);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const Rn = e0.Provider;
class nC extends mA {
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
p(nC, "contextType", e0);
const Sn = Mt.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Mn = Mt.div`
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
const Jn = mi(
  ({ detectionDetails: g, isImageMirror: I }, t) => Ln() ? (console.log(g), /* @__PURE__ */ D(bA, { children: [
    /* @__PURE__ */ D(Sn, { ref: t, $isImageMirror: I }),
    /* @__PURE__ */ D(Mn, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), lg = St(void 0);
lg.displayName = "AnalyticsContext";
function Wn() {
  const g = pe(lg);
  if (g === void 0)
    throw new Error(`${lg.displayName} must be used within a AnalyticsProvider`);
  return g;
}
function aC(g, I, t, A, e) {
  return QA(e - -756, I);
}
(function(g, I) {
  const t = g();
  function A(C, B, Q, a, n) {
    return QA(Q - -214, B);
  }
  function e(C, B, Q, a, n) {
    return QA(a - -85, n);
  }
  function o(C, B, Q, a, n) {
    return QA(C - 468, Q);
  }
  function i(C, B, Q, a, n) {
    return QA(C - 264, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(164, 179, 150, 168, "P7Xq")) / 1 * (-parseInt(e(169, 159, 187, 170, "kl]L")) / 2) + parseInt(e(177, 162, 168, 169, "xm3!")) / 3 + parseInt(A(23, ")cNN", 37, 29, 30)) / 4 * (-parseInt(i(491, 474, 505, "wVw6", 503)) / 5) + -parseInt(i(514, 497, 503, "a^TF", 519)) / 6 + parseInt(o(713, 701, "9m6o", 731, 696)) / 7 * (-parseInt(i(511, 521, 501, "ckIE", 504)) / 8) + parseInt(i(522, 521, 511, "j0%3", 538)) / 9 * (-parseInt(e(192, 157, 194, 176, "PXEZ")) / 10) + parseInt(A(12, "P7Xq", 19, 34, 13)) / 11 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(fg, 222 * 2515 + 570456 + -2118 * 365);
function Yn(g, I, t, A, e) {
  return QA(e - -847, A);
}
function Ro(g, I, t, A, e) {
  return QA(g - 320, I);
}
function j0(g, I, t, A, e) {
  return QA(A - 993, g);
}
const ug = St(void 0);
ug[Ro(560, "77Jr") + Ro(557, "ckIE") + "e"] = xC(368, 369, "o5$G") + aC(-512, "pFj]", -491, -497, -507) + j0("P7Xq", 1208, 1228, 1223);
function xC(g, I, t, A, e) {
  return QA(g - 132, t);
}
function QA(g, I) {
  const t = fg();
  return QA = function(A, e) {
    A = A - 225;
    let o = t[A];
    if (QA.mLseEE === void 0) {
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
      QA.jYFIAP = a, g = arguments, QA.mLseEE = !0;
    }
    const C = t[-689 + -53 * -13], B = A + C, Q = g[B];
    return Q ? o = Q : (QA.xCimuw === void 0 && (QA.xCimuw = !0), o = QA.jYFIAP(o, e), g[B] = o), o;
  }, QA(g, I);
}
function fg() {
  const g = ["wxrFW7jf", "BmktF8ovWQq", "W67dT8oArvdcUmoN", "WOFcVcnLW7Xwe1ZdMSkVCaa", "WQddRmk2dwTuW7SMWQmCzwGy", "sJPhsq", "kSodgCoBWRG", "WQddG8oucGq", "cM0obw42W63cVmooWO/cJYBcTa", "AJBdQCo6nCo4WOxdHbldQbpdQq", "Ad/dR8o4nmkbWPddHIFdTqK", "WOZdLCo6hJO", "smogEInP", "kmkIFmkAta", "WPxcRmoQvq7cH8o/", "owFcRmk9BG", "ggaKWOK6W7ZcQmoK", "aItdP8orWOndpSk1qCkaWPCfWQm", "f0xdOSo3pa", "pmosqSo/WO7cLmosW5C", "WPddNSowCJBcVmodW6K", "W5FdQhOUWQW", "hmkobhCYW6CpW57dUXS6", "W6FdI3KlkG", "E8kQsSkgvG", "WP4FWOdcS03cVWpcVmosAmotW7NdLa", "WP7cJSoJW4aOWPqedSoAeftcUa", "W7lcVaL+W7K", "dXr6Cs1UWQK", "m8ovWO8HALD9WRzLuSknkCk8", "WQxdPe02WQddVLJcSwRdHw1m", "W7ZcSmkjW7ZdSqVcTHvRugu", "bSkyWRFcRJqKWQmAcmoneKHv", "W7zoWRTIBNinW44", "wJPn", "W7ivWRjXsfu9", "W5VcJXieW7FcTWpdVXLAaG"];
  return fg = function() {
    return g;
  }, fg();
}
function Jt() {
  const g = pe(ug);
  function I(i, C, B, Q, a) {
    return xC(a - 568, C - 280, B);
  }
  function t(i, C, B, Q, a) {
    return Yn(i - 319, C - 407, B - 356, B, i - 451);
  }
  if (g === void (7293 + -335 * -7 + 4819 * -2)) throw new Error(ug[e(821, "kl]L", 819, 821) + I(926, 918, "(mm[", 936, 926) + "e"] + (e(793, "pFj]", 822, 807) + I(944, 947, "9PqC", 960, 943) + A(802, 783, 784, 802, "okVJ") + I(909, 943, "Mo*%", 920, 925) + e(827, "Sh1@", 832, 817) + t(-150, -167, "MLHZ") + o(-244, "*uhY", -237, -251) + I(941, 944, "P7Xq", 959, 959)));
  function A(i, C, B, Q, a) {
    return j0(a, C - 32, B - 481, C - -441);
  }
  function e(i, C, B, Q, a) {
    return j0(C, C - 487, B - 291, Q - -424);
  }
  function o(i, C, B, Q, a) {
    return aC(i - 9, C, B - 156, Q - 170, B - 287);
  }
  return g;
}
const jt = (g, I) => Math.hypot(I.x - g.x, I.y - g.y), Dg = (g) => g.length < 1002 + -77 * 13 ? 593 * 8 + 4335 + -9079 : g.reduce((t, A) => t + A, -1 * -8255 + -2914 + -5341) / g.length, Ze = (g) => Number.parseFloat(g.toFixed(-1 * -5196 + -3512 + -1681)), vn = (g) => {
  const { bottomLeft: I, bottomRight: t, topLeft: A, topRight: e } = g, o = jt(A, e), i = jt(e, t), C = jt(I, t), B = jt(A, I);
  return Math.min(o, i, C, B);
}, Un = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(-1 * 4111 + 214 * -16 + -5 * -1507, 381 * -1 + 2 * 4507 + 1 * -8633, I.canvas.width, I.canvas.height);
}, Kn = 1 * -6991 + 8287 + -185 * 7 + 0.5, Hn = -48 * 46 + -3306 + 5514 + 0.85, d0 = 1e3, qn = -184 * -35 + 7683 + 13523 * -1, On = -1 * 4758 + -161 * -7 + 1 * 3631, Tn = "dot-auto-capture-video";
function Zn(g, I) {
  return g < d0 && I >= d0 ? d0 : g;
}
function jn(g, I) {
  return g < I ? g : I;
}
function EC({ height: g, width: I }) {
  let t;
  return I > g ? t = Zn(g, I) : t = I, { width: t, height: jn(g, t) };
}
const Pn = (g, I) => Math.min(g, I), rC = (g) => {
  const I = EC(g).width, t = I * Hn, A = (g.width - t) / (2518 * 1 + 1 * -5989 + -151 * -23), e = t / Kn, o = (g.height - e) / (162 + 214 * 23 + 1 * -5082), i = {};
  return i.shiftX = A, i.shiftY = o, i.width = t, i.height = e, i;
}, Vn = (g) => {
  const { height: I, shiftX: t, shiftY: A, width: e } = rC(g), o = {};
  return o.shiftX = t / g.width, o.shiftY = A / g.height, o.width = e / g.width, o.height = I / g.height, o;
}, Xn = "@innovatrics/dot-common-auto-capture", _n = "7.0.0", zn = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, $n = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Aa = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, ea = {
  name: Xn,
  private: !0,
  version: _n,
  scripts: zn,
  dependencies: $n,
  devDependencies: Aa
}, ta = 7 * -1293 + -9 * -787 + 1968 + 0.8, ga = 2829 + -2687 * -1 + -5516 + 0.43, Ia = 5654 + -5654 * 1 + 0.03, oa = 4549 + 24 * 371 + -1 * 13453 + 0.5, ia = 0 + 0.25, Ca = -2176 + 136 * 16 + 0.9, Ba = 1075 + -5 * 215 + 0.1, Bg = {};
Bg.minDuration = 1e3, Bg.maxDuration = 2500, Bg.minFrames = 10;
const h0 = Bg, P0 = {};
P0.max = 100, P0.min = 10;
const So = P0, Qa = -7253 * -1 + 1071 + -4 * 1901, na = -7878 + -1301 * 2 + 1335 * 8, aa = 1 * -6340 + 4 * -1891 + 6 * 2318, sC = "AES-CBC", cC = "RSA-OAEP", xa = "SHA-256", Ea = "image/jpeg", ra = 1657 * 1 + 122 * -71 + 7013, dC = "/dot-assets", Mo = "dot_embedded_bg.wasm", SI = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Lo = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, sa = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, V0 = (g) => new Promise((I) => {
  setTimeout(I, g);
}), ca = (g) => JSON.parse(JSON.stringify(g, (I, t) => typeof t == "number" ? Ze(t) : t)), hC = () => ea.version, lC = (g) => new URL(g).hostname.replace("www.", ""), da = () => lC(window.location.href) === "localhost", Pt = (g) => Object.entries(g).map(([I, t]) => encodeURIComponent(I) + "=" + encodeURIComponent(t)).join("&"), ha = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g;
function la(g) {
  return g.at(-(1 * -7391 + 1945 * -1 + 1 * 9337)) === "/" ? g.slice(255 * 19 + -1 * -8665 + -1930 * 7, -(8035 + -5861 * 1 + -2173)) : g;
}
function uC(g) {
  return "" + la(g ?? "") + dC;
}
const ua = () => "prod".toLowerCase() === "dev";
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
    this.length === this.size && this.splice(-11503 + 11503 * 1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-17 * -499 + -8347 * -1 + 187 * -90);
  }
}
const fa = (g, I, t = Ea) => new Promise((A) => {
  g.toBlob((e) => {
    if (!e) throw new Error("Canvas to Blob failed");
    A(e);
  }, t, I);
}), Da = async (g) => fa(g, 90), ya = (g, I) => {
  const t = document.createElement("canvas");
  t.width = I.width, t.height = I.height;
  const A = t.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, -2785 + -4 * -841 + -579, 946 + -946 * 1, t.width, t.height), t;
}, wa = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: t } = I.getImageData(-11 * -12 + -6144 + -2004 * -3, 11 * -586 + -4423 * 1 + 1 * 10869, g.width, g.height);
  return t;
}, pa = (g, I, t, A) => {
  const e = g.getContext("2d");
  e && (e.beginPath(), e.strokeStyle = t, e.rect(I.topLeft.x, I.topLeft.y, I.width, I.height), e.stroke());
}, l0 = (g, I, t) => {
  const { height: A, shiftX: e, shiftY: o, width: i } = I, C = {};
  C.x = e, C.y = o;
  const B = {};
  B.topLeft = C, B.width = i, B.height = A, B.color = t, pa(g, B, t);
};
function ma({ canvas: g, color: I, fill: t, offset: A = -2 * -751 + 17 * -41 + -805, polygon: e }) {
  const o = g.getContext("2d");
  if (!o) return;
  const { bottomLeft: i, bottomRight: C, topLeft: B, topRight: Q } = e;
  t ? o.fillStyle = I : o.strokeStyle = I, o.beginPath(), o.moveTo(B.x + A, B.y + A), o.lineTo(Q.x + A, Q.y + A), o.lineTo(C.x + A, C.y + A), o.lineTo(i.x + A, i.y + A), o.closePath(), t ? o.fill() : o.stroke();
}
const Ga = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < e || g.y > e + t);
}, ka = (g, I) => Object.values(g).every((t) => Ga(t, I));
function yg(g) {
  const { height: I, width: t } = EC(g), A = (g.width - t) / (3 * -287 + 191 * 21 + -1574 * 2), e = (g.height - I) / (9606 + -5197 * 1 + -4407 * 1), o = {};
  return o.shiftX = A, o.shiftY = e, o.width = t, o.height = I, o;
}
function DC(g, I, t) {
  const { height: A, width: e } = t, o = Pn(g.width, g.height), i = e - o * I * (-2976 + -1 * -2978), C = A - o * I * (-1959 * 5 + 119 * -7 + 2 * 5315), B = (g.width - i) / (-15 * -297 + 6441 * 1 + 419 * -26), Q = (g.height - C) / (-518 + 2 * -3392 + 3652 * 2), a = {};
  return a.shiftX = B, a.shiftY = Q, a.width = i, a.height = C, a;
}
function Vt(g, I) {
  const { shiftX: t, shiftY: A } = I, e = {};
  return e.x = g.x + t, e.y = g.y + A, e;
}
function ba(g, I) {
  return { ...g, topLeft: Vt(g.topLeft, I), topRight: Vt(g.topRight, I), bottomRight: Vt(g.bottomRight, I), bottomLeft: Vt(g.bottomLeft, I) };
}
function Na(g, I) {
  const t = vn(g), A = t / I.width, e = { ...g };
  return e.smallestEdge = A, e;
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return nA(a - 378, C);
  }
  const A = g();
  function e(C, B, Q, a, n) {
    return nA(n - 938, B);
  }
  function o(C, B, Q, a, n) {
    return nA(Q - -215, n);
  }
  function i(C, B, Q, a, n) {
    return nA(Q - 988, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(1066, "S!WI", 1067, 1075, 1076)) / 1 + parseInt(t("Rg$b", 529, 527, 515, 522)) / 2 + parseInt(t("W]m#", 504, 504, 509, 506)) / 3 * (parseInt(i("qHY#", 1127, 1129, 1130, 1121)) / 4) + parseInt(t("m)B2", 504, 504, 514, 504)) / 5 * (-parseInt(t("2SkS", 507, 525, 517, 528)) / 6) + parseInt(e(1073, "jWAn", 1092, 1091, 1080)) / 7 * (parseInt(o(-88, -81, -87, -77, "5^tB")) / 8) + -parseInt(t("S!WI", 508, 502, 503, 490)) / 9 * (-parseInt(t("J9@&", 537, 539, 528, 526)) / 10) + -parseInt(e(1099, "9qkl", 1096, 1089, 1087)) / 11 === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(wg, -6 * -56481 + -79568 + 132022);
function nA(g, I) {
  const t = wg();
  return nA = function(A, e) {
    A = A - (-4326 + 9813 * 1 + -5362);
    let o = t[A];
    if (nA.FEgcwY === void 0) {
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
      nA.XmFEBp = a, g = arguments, nA.FEgcwY = !0;
    }
    const C = t[94 * 87 + 1 * -9161 + -983 * -1], B = A + C, Q = g[B];
    return Q ? o = Q : (nA.hiPvRd === void 0 && (nA.hiPvRd = !0), o = nA.XmFEBp(o, e), g[B] = o), o;
  }, nA(g, I);
}
function Fa({ assetsDirectoryPath: g, bramble: I }) {
  const [t, A] = GA(), e = t !== void (1 * -4993 + -5235 + 10228);
  function o(B, Q, a, n, s) {
    return nA(Q - -69, a);
  }
  function i(B, Q, a, n, s) {
    return nA(s - 456, Q);
  }
  gA(() => {
    async function B() {
      function Q(s, x, r, d, h) {
        return nA(r - 288, h);
      }
      await I[Q(434, 421, 422, 433, "p&l6")](uC(g));
      function a(s, x, r, d, h) {
        return nA(s - 97, r);
      }
      function n(s, x, r, d, h) {
        return nA(s - 768, x);
      }
      A(I[Q(417, 408, 415, 402, "nBCG") + n(914, "PiI1") + a(240, 245, "B[!N") + "t"]());
    }
    B();
  }, [I, g, A]);
  const C = {};
  return C[i(597, "W]m#", 589, 579, 585) + i(588, "B[!N", 598, 596, 600)] = t, C[o(91, 83, "z^pB") + "sh"] = e, C;
}
function wg() {
  const g = ["WQ07W5HmamopACob", "xSkwjCoTf8kLFI8", "W4uwW7BdPwzVWO1MW6tcQSosjG", "sYXBDW", "W7FcT8kzcaddU8oyWPNdMCo/emkU", "daWJW6rPW6xcQG3dUs7dOZFdGa", "WQZcRmocWONdSXGapWFdQrddTW", "eCoaW4lcLW7cIgu5ECk7cSop", "Ah3dGSoeW5Hxhq", "eSoKW6RdJvaRwCoCW7tdQfJdPq", "qdJdN1aLW7VdLtBcQGXbW7u", "WQriW61wWQn4wSo0", "qsfby8ou", "EYvgDCoq", "WPlcJ8kMpsxdR8kBhCkUtb1T", "s8oTW7v7Fq", "fmoGcH8/W5mKtq", "s192eSkGpmk+WPLvpCk7WQad", "WRNdJePAW7nZW6aSWRJdMSo2FmkZ", "xSkwDSoCj8knwaFdKa", "tYHRW4OfzmoHWPuoCNPNnq", "WRVcQmkgW7uk", "fmomW47cLaJcHxCzr8kkg8ot", "cuvzWPOKWRNdIq", "W4tdKSoQr3S", "uI1/qCk+vJ9Qy8oGbHGK", "W798W5rTgG", "xSksFSkot8oCaXpdLX5yW6KB"];
  return wg = function() {
    return g;
  }, wg();
}
var yC = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(yC || {});
const X0 = {};
X0.SIMD = "simd", X0.NO_SIMD = "no-simd";
const Jo = X0, _0 = {};
_0.Lower = "Lower", _0.Higher = "Higher";
const z0 = _0, Qg = {};
Qg.VISIBLE = "VISIBLE", Qg.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Qg.HIDDEN = "HIDDEN";
const pg = Qg;
(function(g, I) {
  function t(Q, a, n, s, x) {
    return cA(x - 618, n);
  }
  function A(Q, a, n, s, x) {
    return cA(a - -212, n);
  }
  function e(Q, a, n, s, x) {
    return cA(s - -406, n);
  }
  function o(Q, a, n, s, x) {
    return cA(Q - -642, n);
  }
  var i = g();
  function C(Q, a, n, s, x) {
    return cA(x - -316, s);
  }
  for (; ; )
    try {
      var B = -parseInt(o(-338, -337, "FyG3", -348, -327)) / 1 * (-parseInt(A(83, 86, "Ox[%", 87, 78)) / 2) + parseInt(t(916, 916, "tne(", 909, 912)) / 3 * (-parseInt(A(100, 90, "6JIf", 80, 85)) / 4) + parseInt(o(-339, -350, "U9H]", -334, -330)) / 5 + -parseInt(e(-103, -111, "(lMt", -111, -105)) / 6 * (parseInt(C(-28, -26, -38, "johe", -30)) / 7) + parseInt(A(87, 77, "FyG3", 88, 82)) / 8 + parseInt(e(-116, -110, "TLW8", -113, -119)) / 9 + -parseInt(t(923, 929, "N*jn", 909, 919)) / 10;
      if (B === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(mg, 5876 * -74 + 1 * -243265 + 1014640);
function mg() {
  var g = ["W6rPtMaWodCMh8kT", "gCoUv8kTvJLCrHNdL8od", "sCkwW4CstW", "yCkiqeb7W4ddSmkJWOFcNmoOuSkY", "WQm2Ff1qlGNdH8kkxIZcOSkJ", "fIPZoZRcU8oGeJS", "bSkdW4jfWQZcG0aeqCo8qq1V", "WP7cSK8FWO5ZW54", "W7r7WOTcW6e", "rfpdObKpW613", "WPtcHConW6v1WPuJcSoJWQyuW5O", "WPDJhSklW6mfW6XLf3m", "zmkirKCIWOxcHmkHWQtcRG", "a8oFWRRdTSkliqtdR8kC", "WPFdVJbTW6uXW6fOBwyJWPq", "umoyWQGYjx3cT8kurmo4WPC", "oSocsqWNzaBcIKBcMsasWRK", "W65bFCoojW", "hKlcGZepWQe5WQ4Cc8k9sWq", "l08RaSo4W4NcQqFcKCkPDW", "zSkltuqaWQdcHSkfWRhcLW", "ku0SaSoZW5BcMq/cG8kfEG"];
  return mg = function() {
    return g;
  }, mg();
}
function cA(g, I) {
  var t = mg();
  return cA = function(A, e) {
    A = A - (-3140 + 1 * 6059 + 2636 * -1);
    var o = t[A];
    if (cA.OgrYYV === void 0) {
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
      cA.XXeejo = C, g = arguments, cA.OgrYYV = !0;
    }
    var B = t[-1792 * -2 + 8028 + -11612], Q = A + B, a = g[Q];
    return a ? o = a : (cA.EQVFlt === void 0 && (cA.EQVFlt = !0), o = cA.XXeejo(o, e), g[Q] = o), o;
  }, cA(g, I);
}
function Ra({ crosshatch: g }) {
  function I(t, A, e, o, i) {
    return cA(A - -229, t);
  }
  return g != null && g[I("$LRv", 70) + "id"] ? z0[I("CxVa", 63) + "r"] : z0[I("m^(y", 54)];
}
(function(g, I) {
  const t = g();
  function A(B, Q, a, n, s) {
    return oA(Q - 182, a);
  }
  function e(B, Q, a, n, s) {
    return oA(Q - 146, s);
  }
  function o(B, Q, a, n, s) {
    return oA(B - 698, s);
  }
  function i(B, Q, a, n, s) {
    return oA(n - 376, Q);
  }
  function C(B, Q, a, n, s) {
    return oA(Q - -474, a);
  }
  for (; ; )
    try {
      if (parseInt(C(-321, -305, "qcbS", -308, -312)) / 1 + -parseInt(e(338, 327, 314, 323, "[sOA")) / 2 + -parseInt(C(-304, -300, "k[[G", -296, -293)) / 3 * (-parseInt(o(882, 871, 883, 892, "TirW")) / 4) + -parseInt(i(545, "N4D2", 543, 559, 572)) / 5 * (parseInt(A(352, 349, "TOH&", 359, 361)) / 6) + -parseInt(e(305, 308, 309, 297, "DYzy")) / 7 + -parseInt(i(540, "&ekh", 542, 556, 550)) / 8 + -parseInt(A(351, 345, "NG8(", 360, 333)) / 9 * (-parseInt(A(371, 369, "Bm#4", 380, 375)) / 10) === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Gg, 1809 * -43 + -446084 + 1069652);
function Gg() {
  const g = ["WONdOIJcTCk/W7KpWQDaz8ojp0K", "pINdU8ksWPZcPXr0eSksWOX/DG", "WQmCgdawW79giSkIW60", "W7TjyCkhWPZdUSkyW73cOSk0", "WOLkW7ddH8ozW7v3n0qoj8k6", "W5BcR8oFbmoM", "W7pcRq1TWOe", "jCo/W4f6aSkajSkgWPXb", "CMPuWPi2", "WPCjW7FdNqxcISkqW7K/WRPN", "WPObWPZdOtBcOsCWwaVcQHC", "W5XBW50", "W4RdH8oGeN0", "WR0QdSoCW74", "nLdcM0NdOsvDWQNcT8kNA8oPFG", "o3DfjvmZzmk5CmoEWPBdKq", "ie7dGCkZiSk0WOW", "iH7cHmoACmoEW5TEWO1cWPq6WR0", "A3NcVG", "zSk4WOfPp8koWPq4c8oqWPm", "W5lcUfGvgSoCWQxdQXGM", "iZ8wW4DTgmonWQqHANXw", "W5VcOhBdV8o2", "W49ZW4pdQmk0", "W4PwW4BdR8k0", "nSo5W4a5Eq", "W5D5kCo2W6aiWPi", "WPadW7pdMqxdT8oXW5OJWQHQtmk5", "wIydEa", "kZ4xW4jQgCk8WPGkq2XhBW", "WOtdT8kexCkYWPbuW4ZdGWJdUCk8", "baPFWQ3cSmo/BNrpoSoQWRy"];
  return Gg = function() {
    return g;
  }, Gg();
}
function oA(g, I) {
  const t = Gg();
  return oA = function(A, e) {
    A = A - (-6626 + 11 * 617);
    let o = t[A];
    if (oA.GeMyBP === void 0) {
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
      oA.VHviZQ = a, g = arguments, oA.GeMyBP = !0;
    }
    const C = t[-41 * -201 + -1998 + -6243], B = A + C, Q = g[B];
    return Q ? o = Q : (oA.foTDbi === void 0 && (oA.foTDbi = !0), o = oA.VHviZQ(o, e), g[B] = o), o;
  }, oA(g, I);
}
function Sa({ assetsDirectoryPath: g, children: I, bramble: t }) {
  const A = {};
  A[o(870, 857, "j#K[") + "le"] = t;
  function e(r, d, h, E, u) {
    return oA(u - 503, E);
  }
  A[o(840, 838, "TOH&") + a(705, "acUj", 719, 706, 719) + a(727, "&ekh", 720, 720, 718) + Q(71, 85, 83, 99, "NG8(")] = g;
  function o(r, d, h, E, u) {
    return oA(d - 665, h);
  }
  const { sunfish: i, crosshatch: C } = Fa(A), B = {};
  function Q(r, d, h, E, u) {
    return oA(h - -93, u);
  }
  function a(r, d, h, E, u) {
    return oA(u - 548, d);
  }
  B[n(390, 396, 390, "cJ9J") + a(747, "qcbS", 737, 738, 736)] = C;
  function n(r, d, h, E, u) {
    return oA(d - 210, E);
  }
  const s = yA(() => ({ redfin: Ra(B), sunfish: i, crosshatch: C, bramble: t }), [i, C, t]), x = {};
  return x[o(852, 837, "acUj")] = s, x[a(729, "R%EW", 731, 733, 733) + Q(108, 105, 98, 110, "ZT%a")] = I, D(ug[e(658, 669, 654, "h#[Q", 664) + a(725, "[sOA", 720, 719, 714)], x);
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return uA(Q - -896, x);
  }
  function A(Q, a, n, s, x) {
    return uA(a - -121, x);
  }
  function e(Q, a, n, s, x) {
    return uA(x - -622, s);
  }
  function o(Q, a, n, s, x) {
    return uA(Q - -701, s);
  }
  var i = g();
  function C(Q, a, n, s, x) {
    return uA(a - 671, n);
  }
  for (; ; )
    try {
      var B = -parseInt(t(-526, -537, -527, -526, "fVMA")) / 1 + -parseInt(e(-249, -239, -240, "u$SI", -245)) / 2 + parseInt(e(-254, -253, -264, ")sYR", -258)) / 3 * (-parseInt(C(1063, 1052, "g[u0", 1048, 1047)) / 4) + -parseInt(t(-529, -528, -523, -531, "0QLG")) / 5 * (parseInt(A(262, 262, 261, 265, "f(jR")) / 6) + -parseInt(t(-522, -515, -512, -513, "C2^#")) / 7 * (parseInt(A(257, 257, 260, 255, "IkHS")) / 8) + -parseInt(o(-325, -329, -324, "EfzZ", -314)) / 9 + parseInt(A(234, 244, 253, 243, "LMFx")) / 10 * (parseInt(A(248, 252, 258, 253, "ARef")) / 11);
      if (B === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(kg, 490296 + -336202 * 1 + 127 * 1231);
function uA(g, I) {
  var t = kg();
  return uA = function(A, e) {
    A = A - (1 * 1510 + 6643 + -7790);
    var o = t[A];
    if (uA.vvRhop === void 0) {
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
      uA.lLjwOu = C, g = arguments, uA.vvRhop = !0;
    }
    var B = t[-5632 + 1 * 9944 + 77 * -56], Q = A + B, a = g[Q];
    return a ? o = a : (uA.NfrOEo === void 0 && (uA.NfrOEo = !0), o = uA.lLjwOu(o, e), g[Q] = o), o;
  }, uA(g, I);
}
function kg() {
  var g = ["W5pcUmkCwd3cUSkjwa", "CXDMW4VcVSoOB8kf", "WP03BfJdGCk2vG", "aW9uWQ7dQmkeW5HMWOO", "CwxcSmoxlCkina3cNG", "CH0IWONdQ8kiD8kVtmo9W6mo", "lYqqWRVcJmoDW4axumkaW6i", "W5dcUmoAfLFdImo3c8osgfpcPSoCWPO", "WPNdJmkFwmoGW6aZisHyW63cLW", "AGubwalcUCk9W5lcVSoxqa", "W5FcUCotfLZcNCkwF8oykwi", "W6tdMmodWR7cNrCMWQbVWPHj", "W7SAwSonW78tCLldOJbKgG", "C8kWWQ5aECkaD8kFWRRdL8oTw8k2W5q", "BGahxG/dLConW7NcVCoCFCo7WR0", "CmkWW6Goe8oYcCom", "W5JdPuldHcxdS8o6", "DwRcUSk6DSorpqtcImodhWy", "C2ZcV8k0DSoAyXpcHCoTdG/cOq", "W5f/kSoxW5hcMXRcM8o7WP0pW7O", "WQZdKfS5W50Ei8oEpLtdTeK", "b3FcUmoTW4mUW7xdUW"];
  return kg = function() {
    return g;
  }, kg();
}
function Ma({ analytics: g, crosshatch: I }) {
  return I !== void (-5795 + -1 * -5795) && !I.isAnalyticsDisabled ? g : void (-2892 + -1076 * 9 + -1048 * -12);
}
function La({ analytics: g, appKey: I, redfin: t, crosshatch: A, bramble: e }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = Ma(o);
  return gA(() => {
    i && i.init(I);
  }, [i, I]), gA(() => {
    A && (console.info("Analytics is " + (A.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, e.getCustomerName()));
  }, [i, e, A, t]), gA(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function Ja({
  analytics: g,
  appKey: I,
  children: t
}) {
  const { redfin: A, crosshatch: e, bramble: o } = Jt(), i = La({ analytics: g, redfin: A, appKey: I, crosshatch: e, bramble: o }), C = yA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ D(lg.Provider, { value: C, children: t });
}
const wC = St(null), MI = () => {
  const g = pe(wC);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, Wa = ({
  assetsDirectoryPath: g,
  cameraFacing: I,
  captureMode: t,
  onPhotoTaken: A,
  sessionToken: e,
  thresholds: o
}) => {
  const i = SI() ? hg.REAR : hg.FRONT;
  return {
    onPhotoTaken: A,
    cameraFacing: I ?? i,
    captureMode: t ?? QC.AUTO_CAPTURE,
    assetsDirectoryPath: uC(g),
    sessionToken: e,
    thresholds: {
      confidenceThreshold: (o == null ? void 0 : o.confidenceThreshold) ?? ta,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? oa,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? ia,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Ca,
      hotspotsScoreThreshold: (o == null ? void 0 : o.hotspotsScoreThreshold) ?? Ba,
      sizeSmallThreshold: (o == null ? void 0 : o.sizeSmallThreshold) ?? ga,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? Ia
    }
  };
}, Ya = ({
  cameraOptions: g,
  children: I
}) => {
  const t = yA(() => Wa(g), [g]);
  return /* @__PURE__ */ D(wC.Provider, { value: t, children: I });
};
function va({ cameraResolution: g, detectionDetails: I, isImageMirror: t }) {
  const { thresholds: A } = MI(), { redfin: e } = Jt(), o = UA(null);
  if (gA(() => {
    if (!(o != null && o.current))
      return;
    o.current.width = g.width, o.current.height = g.height, Un(o.current);
    const d = yg(g), h = DC(
      g,
      A.outOfBoundsThreshold,
      d
    ), E = rC(g);
    I.value && (ma({
      canvas: o.current,
      polygon: I.value.processedImage.detection,
      color: "red"
    }), l0(o.current, d, "lime"), l0(o.current, h, "yellow"), l0(o.current, E, "blue"));
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
    "Component version": "7.0.0"
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
function Ua(g) {
  return /* @__PURE__ */ D("rect", { fill: "#000", ...g, rx: "2%" });
}
function Ka(g, I) {
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
const Ha = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function qa({ cutOut: g, height: I, ignoreElement: t, width: A }) {
  const e = UA(null), { key: o } = Ka(e, t);
  return /* @__PURE__ */ D("div", { ref: e, style: Ha, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${A} ${I}`, children: [
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
function Oa({ fullOverlay: g, ignoreElement: I, resolution: t }) {
  const A = Vn(t), e = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    qa,
    {
      cutOut: g || /* @__PURE__ */ D(Ua, { height: e, width: o, x: i, y: C }),
      height: t.height,
      ignoreElement: I,
      width: t.width
    }
  );
}
function Ta({ cameraResolution: g, children: I, detectionDetails: t, shouldMirror: A }) {
  const { redfin: e } = Jt(), { appState: o, freemiumOverlayState: i } = Lt(), C = UA(null), B = i !== pg.HIDDEN && e !== z0.Higher && g, Q = i === pg.VISIBLE, a = g && o === DA.RUNNING;
  return /* @__PURE__ */ D(bA, { children: [
    B && /* @__PURE__ */ D(
      Oa,
      {
        fullOverlay: Q,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ D("div", { ref: C, children: /* @__PURE__ */ D(
      va,
      {
        cameraResolution: g,
        detectionDetails: t,
        isImageMirror: A
      }
    ) })
  ] });
}
const Za = (g, I) => {
  const t = {};
  t.detail = I, document.dispatchEvent(new CustomEvent(g, t));
}, Og = class Og {
  constructor() {
    p(this, "lastDetails", {});
    p(this, "delayedTime", 67 * -137 + 4341 + 4838);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Og()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 5 * 1233 + -1 * -823 + -6988 * 1;
  }
  isDetailChanged(I, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(I, t) {
    this.isDetailChanged(I, t) && Za(I, t);
  }
  dispatchDelayedCustomEventOnChange(I, t, A) {
    const e = performance.now();
    e - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, t), this.delayedTime = e);
  }
};
p(Og, "_instance");
let lt = Og;
const Wt = lt.getInstance(), pC = (g, I, t = qn) => {
  const A = {};
  A.instructionCode = I;
  const e = A;
  Wt.dispatchDelayedCustomEventOnChange(g, e, t);
}, Wo = (g, I) => {
  Wt.dispatchCustomEventOnChange(g, I);
}, ja = (g, I) => {
  Wt.dispatchCustomEventOnChange(g, I);
}, Pa = (g, I) => {
  const t = {};
  t.size = I;
  const A = t;
  Wt.dispatchCustomEventOnChange(g, A);
}, Va = (g, I, t) => {
  const A = I.confidence < t ? void 0 : I, e = {};
  e.detectedObject = A;
  const o = e;
  Wt.dispatchCustomEventOnChange(g, o);
}, Xa = (g, I) => {
  if (ua()) {
    const t = {};
    t.candidateSelectionImages = I;
    const A = t;
    lt.getInstance().dispatchCustomEventOnChange(g, A);
  }
}, _a = (g, I) => {
  const { cameraResolution: t, shouldCameraMirror: A } = I;
  gA(() => {
    if (!t) return;
    const e = {};
    e.cameraResolution = t, e.isMirroring = A, ja(g, e);
  }, [t, A, g]);
}, za = (g) => g === _A.CONTROL ? !SI() : !0, $a = (g, I) => {
  const { appState: t, handleAppStateChange: A, handleError: e, isCameraReady: o } = Lt(), [i, C] = GA(), B = yA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? za(g);
  }, [I, i, g, o]);
  gA(() => {
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
        case s0.CONTINUE_DETECTION:
          a();
          break;
        case s0.TOGGLE_MIRROR:
          n();
          break;
        case s0.SWITCH_CAMERA:
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
async function u0() {
  return (await mC()).filter((I) => I.kind === "videoinput");
}
function f0(g) {
  g.getTracks().forEach((t) => t.stop());
}
function Yo(g) {
  return g.getVideoTracks()[-9342 + -9342 * -1];
}
const ng = {};
ng.width = 1920, ng.height = 1080, ng.facingMode = hg.FRONT;
const Ax = ng;
var SA;
class GC {
  constructor({ defaultVideoConstrains: I = Ax, minCameraShorterSide: t = Qa } = {}) {
    p(this, "options");
    p(this, "availableCameraProperties", []);
    j(this, SA, null);
    const A = {};
    A.defaultVideoConstrains = I, A.minCameraShorterSide = t, this.options = A;
  }
  get mediaStream() {
    return k(this, SA);
  }
  get videoTrack() {
    return k(this, SA) ? Yo(k(this, SA)) : void (-4 * 926 + 4913 * 2 + 3061 * -2);
  }
  get isCameraActive() {
    var I;
    return !!((I = k(this, SA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(I);
    f0(t);
  }
  async open(I = {}) {
    Lo() && await V0(450), T(this, SA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await u0();
    if (I.length <= -19 * 266 + 9199 * 1 + -1036 * 4) return;
    const t = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), e = I.findIndex((C) => C.deviceId === A.deviceId), o = I[e + (859 * -5 + 4794 + -498)] ?? I[-1 * 3305 + 3 * -183 + 1 * 3854], i = this.getConstraints(t, o);
    this.close(), await this.open(i);
  }
  close() {
    k(this, SA) && (f0(k(this, SA)), T(this, SA, null));
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
    return I === hg.FRONT ? void (-1941 * 1 + -6073 * 1 + 8014 * 1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return SI() ? (await u0()).find((A) => A.label.includes("back") && A.label.includes("0")) : void (-2727 + 733 * 7 + 2404 * -1);
  }
  async collectAvailableCamerasInfo() {
    const I = await u0();
    for (const t of I) {
      Lo() && await V0(450);
      try {
        const A = {};
        A.deviceId = t.deviceId, A.width = 480;
        const e = {};
        e.video = A;
        const o = await navigator.mediaDevices.getUserMedia(e), i = Yo(o);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const C = i.getSettings(), B = { ...C };
        B.deviceName = i.label;
        const Q = {};
        Q.cameraProperties = B;
        const a = Q;
        this.availableCameraProperties.push(a), f0(o);
      } catch (A) {
        A instanceof Error && K.logError(A);
      }
    }
  }
  getConstraints(I, t) {
    const A = { ...this.options.defaultVideoConstrains, ...I };
    A.deviceId = t ? { exact: t.deviceId } : void 0;
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
SA = new WeakMap();
class ex {
  constructor(I, t) {
    this.videoHandler = I, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(I = {}) {
    await GC.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, t);
    await this.cameraHandler.open(A), sa() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
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
    return A.drawImage(this.videoHandler.videoElement, -6031 + -1 * -6031, 39 * 197 + -1523 * 5 + -34 * 2), { image: t, timestamp: Date.now() };
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
var jA;
class tx {
  constructor(I) {
    j(this, jA);
    T(this, jA, I);
  }
  get videoElement() {
    return k(this, jA);
  }
  async play(I) {
    k(this, jA).srcObject = I, await k(this, jA).play();
  }
  stop() {
    k(this, jA).srcObject = null;
  }
  hasSrcObject() {
    return !!k(this, jA).srcObject;
  }
}
jA = new WeakMap();
function gx(g) {
  const I = UA(null), t = UA(), { handleError: A, setIsCameraReady: e } = Lt(), [o, i] = GA(), C = zA((Q) => {
    i((a) => ha(Q, a));
  }, []);
  gA(() => ((async () => {
    if (!I.current) {
      A(new K("Something went wrong during video initialization"));
      return;
    }
    const a = new tx(I.current), n = new GC(), s = new ex(a, n);
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
function Ix(g, I) {
  gA(() => {
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
var ox = Symbol.for("preact-signals");
function LI() {
  if (Le > -100 * -38 + -8203 + 4404)
    Le--;
  else {
    for (var g, I = !1; void (-4511 + 110 * 67 + 3 * -953) !== st; ) {
      var t = st;
      for (st = void (445 * -4 + 1 * 1928 + 74 * -2), $0++; void (-67 * -144 + 3096 + -12744) !== t; ) {
        var A = t.o;
        if (t.o = void (2761 + -1 * -3603 + 3182 * -2), t.f &= -3, !(-2889 + 1 * -2674 + 9 * 619 & t.f) && NC(t)) try {
          t.c();
        } catch (e) {
          !I && (g = e, I = !(-6942 + 178 * 39));
        }
        t = A;
      }
    }
    if ($0 = -1884 + -7 * -769 + -3499, Le--, I) throw g;
  }
}
var U = void (-8109 + -4729 * 1 + -262 * -49), st = void 0, Le = -6 * -4 + -3294 + -2 * -1635, $0 = 449 + -74 * 47 + 3029, bg = -1 * -9007 + 9419 + -18426;
function kC(g) {
  if (void (-3819 + 1 * 5123 + -1304) !== U) {
    var I = g.n;
    if (void (-3388 + 6 * -89 + 3922) === I || I.t !== U)
      return I = { i: 0, S: g, p: U.s, n: void (-4632 + -2722 * 2 + -4 * -2519), t: U, e: void (3032 + -749 * 2 + -1534), x: void (-8256 + -6 * -1376), r: I }, void (-3596 + -1 * 773 + -4369 * -1) !== U.s && (U.s.n = I), U.s = I, g.n = I, 15e3 + -2 * 7484 & U.f && g.S(I), I;
    if (-(-231 * -11 + 1 * -5351 + 2811) === I.i)
      return I.i = -1552 + -1 * -1364 + 4 * 47, void (-491 * 11 + 265 * -8 + -2507 * -3) !== I.n && (I.n.p = I.p, void (18909 + 33 * -573) !== I.p && (I.p.n = I.n), I.p = U.s, I.n = void (-8896 + -2 * 3913 + 16722), U.s.n = I, U.s = I), I;
  }
}
function BA(g) {
  this.v = g, this.i = 1 * -5217 + -8250 + 4489 * 3, this.n = void (-15054 + -39 * -386), this.t = void 0;
}
BA.prototype.brand = ox, BA.prototype.h = function() {
  return !(-47 * -67 + 3754 + -6903);
}, BA.prototype.S = function(g) {
  this.t !== g && void (-1 * 1873 + -9503 + 36 * 316) === g.e && (g.x = this.t, void (9136 + 9622 * 1 + 2 * -9379) !== this.t && (this.t.e = g), this.t = g);
}, BA.prototype.U = function(g) {
  if (void (235 * 10 + 5653 + -8003) !== this.t) {
    var I = g.e, t = g.x;
    I !== void 0 && (I.x = t, g.e = void (-5524 * -1 + 9446 + 499 * -30)), void (4391 * -1 + 4436 + -45) !== t && (t.e = I, g.x = void (323 * 17 + 8017 + -13508)), g === this.t && (this.t = t);
  }
}, BA.prototype.subscribe = function(g) {
  var I = this;
  return WI(function() {
    var t = I.value, A = U;
    U = void (1 * 8020 + -6221 * 1 + -1799);
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
  U = void (3019 + -1 * 8767 + 5748);
  try {
    return this.value;
  } finally {
    U = g;
  }
}, Object.defineProperty(BA.prototype, "value", { get: function() {
  var g = kC(this);
  return void (-31 * -261 + 6123 + 3 * -4738) !== g && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if ($0 > 19 * -508 + -8 * 301 + 95 * 128) throw new Error("Cycle detected");
    this.v = g, this.i++, bg++, Le++;
    try {
      for (var I = this.t; void (7 * 793 + -1327 * -6 + -13513) !== I; I = I.x) I.t.N();
    } finally {
      LI();
    }
  }
} });
function bC(g) {
  return new BA(g);
}
function NC(g) {
  for (var I = g.s; void (-6407 + -23 * 277 + -6389 * -2) !== I; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !(-3088 * -1 + 2131 * -2 + 2 * 587);
  return !(-9139 + 20 * 457);
}
function FC(g) {
  for (var I = g.s; void (4469 + -21 * -103 + -6632) !== I; I = I.n) {
    var t = I.S.n;
    if (void (3 * 2362 + -6200 + -443 * 2) !== t && (I.r = t), I.S.n = I, I.i = -(-4459 + -24 * -85 + 2420), void (-2351 + 4435 * 2 + 159 * -41) === I.n) {
      g.s = I;
      break;
    }
  }
}
function RC(g) {
  for (var I = g.s, t = void (-2927 * -1 + -6506 + 3579); void (4265 + 4265 * -1) !== I; ) {
    var A = I.p;
    -(-4056 + -4 * 347 + 5445) === I.i ? (I.S.U(I), void (-4946 + 202 * -27 + -416 * -25) !== A && (A.n = I.n), I.n !== void 0 && (I.n.p = A)) : t = I, I.S.n = I.r, void (8138 + 8138 * -1) !== I.r && (I.r = void (-5814 + -1652 * -1 + -2 * -2081)), I = A;
  }
  g.s = t;
}
function Re(g) {
  BA.call(this, void (1 * -6593 + -5399 + 11992)), this.x = g, this.s = void (1068 + 683 * -6 + 3030), this.g = bg - (-1 * -5111 + -8 * -1117 + -2 * 7023), this.f = -5 * 685 + 9021 + -5592;
}
(Re.prototype = new BA()).h = function() {
  if (this.f &= -(3882 * -1 + -2756 + -229 * -29), -1547 + 207 * 31 + -3 * 1623 & this.f) return !(9739 + 1 * -2527 + -7211);
  if ((-1 * 3035 + 20 * -23 + 3531 & this.f) == 32) return !(409 * 8 + -9537 + 6265);
  if (this.f &= -(7 * -286 + -2501 * -2 + -2995), this.g === bg) return !0;
  if (this.g = bg, this.f |= -2 * 3779 + -3 * 2461 + 31 * 482, this.i > 1 * -7116 + 2524 * -2 + 12164 && !NC(this)) return this.f &= -(-7935 + -5 * 1542 + 15647), !(3132 + 4440 * -2 + 5748);
  var g = U;
  try {
    FC(this), U = this;
    var I = this.x();
    (8571 + 11 * 349 + -1 * 12394 & this.f || this.v !== I || this.i === 0) && (this.v = I, this.f &= -(-2624 * -1 + 9421 * 1 + 3007 * -4), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return U = g, RC(this), this.f &= -(-9474 * 1 + 4178 + 5298 * 1), !(-6 * 505 + -642 * 14 + 12018);
}, Re.prototype.S = function(g) {
  if (void (939 + 2 * -2842 + 4745) === this.t) {
    this.f |= -7102 + -1465 * -2 + 4208;
    for (var I = this.s; void (-65 * 57 + 8 * -566 + 8233) !== I; I = I.n) I.S.S(I);
  }
  BA.prototype.S.call(this, g);
}, Re.prototype.U = function(g) {
  if (void (-2817 + -1869 * -3 + -30 * 93) !== this.t && (BA.prototype.U.call(this, g), this.t === void 0)) {
    this.f &= -(-17336 + -17369 * -1);
    for (var I = this.s; void (-1 * -6025 + 15 * -145 + -3850) !== I; I = I.n) I.S.U(I);
  }
}, Re.prototype.N = function() {
  if (!(-10 * -591 + -9844 + 3936 & this.f)) {
    this.f |= -74 * 46 + -9801 + 13211;
    for (var g = this.t; void (-33 * 291 + 7889 + 1714) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(Re.prototype, "value", { get: function() {
  if (-23 * 405 + -6407 + 5241 * 3 & this.f) throw new Error("Cycle detected");
  var g = kC(this);
  if (this.h(), void (275 * 13 + -9456 + 5881) !== g && (g.i = this.i), -2021 * -1 + 3664 + -5669 & this.f) throw this.v;
  return this.v;
} });
function ix(g) {
  return new Re(g);
}
function SC(g) {
  var I = g.u;
  if (g.u = void (1 * -487 + -1 * -277 + 14 * 15), typeof I == "function") {
    Le++;
    var t = U;
    U = void (-23 * -344 + -5847 * 1 + -2065);
    try {
      I();
    } catch (A) {
      throw g.f &= -(-4610 * 1 + -1 * -664 + 3948), g.f |= -1637 * 5 + -1 * 1295 + 9488, JI(g), A;
    } finally {
      U = t, LI();
    }
  }
}
function JI(g) {
  for (var I = g.s; void (838 * 11 + -9225 * 1 + -7 * -1) !== I; I = I.n) I.S.U(I);
  g.x = void (-1539 + -4 * -1983 + -6393), g.s = void (-4657 * 1 + -14 * -289 + 611), SC(g);
}
function Cx(g) {
  if (U !== this) throw new Error("Out-of-order effect");
  RC(this), U = g, this.f &= -(-1 * 9449 + 6770 + 383 * 7), 9261 + -3 * 1701 + 2075 * -2 & this.f && JI(this), LI();
}
function Qt(g) {
  this.x = g, this.u = void (-8947 + 237 * -19 + 13450), this.s = void (-54 * -149 + 2863 * -3 + 543), this.o = void (-3885 * 2 + -4273 * 1 + 12043), this.f = 97 * 17 + -7 * -1115 + 9422 * -1;
}
Qt.prototype.c = function() {
  var g = this.S();
  try {
    if (1549 * 1 + 2 * -2705 + -53 * -73 & this.f || this.x === void 0) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, Qt.prototype.S = function() {
  if (683 * 1 + 976 + 2 * -829 & this.f) throw new Error("Cycle detected");
  this.f |= -17 + -2 * -881 + -1744, this.f &= -(1 * 2555 + -9611 + 7065), SC(this), FC(this), Le++;
  var g = U;
  return U = this, Cx.bind(this, g);
}, Qt.prototype.N = function() {
  !(-1 * 1229 + -411 + 1 * 1642 & this.f) && (this.f |= 5 * -229 + 6786 + 1 * -5639, this.o = st, st = this);
}, Qt.prototype.d = function() {
  this.f |= -8 * 606 + 5406 + -550, -683 * -14 + 752 * -6 + 99 * -51 & this.f || JI(this);
};
function WI(g) {
  var I = new Qt(g);
  try {
    I.c();
  } catch (t) {
    throw I.d(), t;
  }
  return I.d.bind(I);
}
var D0;
function Me(g, I) {
  b[g] = I.bind(null, b[g] || function() {
  });
}
function Xt(g) {
  D0 && D0(), D0 = g && g.S();
}
function MC(g) {
  var I = this, t = g.data, A = LC(t);
  A.value = t;
  var e = yA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 1094 + 2 * -545;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !ai(e.peek()) && ((i = I.base) == null ? void (1 * -2866 + -1 * 4585 + 7451) : i.nodeType) === 3 ? I.base.data = e.peek() : (I.__$f |= 1, I.setState({}));
    }, ix(function() {
      var i = A.value.value;
      return -6936 + 2563 * 3 + -753 * 1 === i ? 0 : !(292 * 5 + -4987 + 3527) === i ? "" : i || "";
    });
  }, []);
  return e.value;
}
MC.displayName = "_st";
var AI = {};
AI.configurable = !(1815 + 139 * 31 + -1531 * 4), AI.value = void (3 * 485 + -5370 + 29 * 135);
var eI = {};
eI.configurable = !(3319 + -1 * 3319), eI.value = MC;
var tI = {};
tI.configurable = !0, tI.get = function() {
  var g = {};
  return g.data = this, g;
};
var gI = {};
gI.configurable = !(3657 + -25 * -242 + 9707 * -1), gI.value = 1;
var et = {};
et.constructor = AI, et.type = eI, et.props = tI, et.__b = gI, Object.defineProperties(BA.prototype, et), Me("__b", function(g, I) {
  if (typeof I.type == "string") {
    var t, A = I.props;
    for (var e in A) if (e !== "children") {
      var o = A[e];
      o instanceof BA && (t || (I.__np = t = {}), t[e] = o, A[e] = o.peek());
    }
  }
  g(I);
}), Me("__r", function(g, I) {
  Xt();
  var t, A = I.__c;
  A && (A.__$f &= -(1981 + -28 * 262 + 5357), void (-9024 + 9024 * 1) === (t = A.__$u) && (A.__$u = t = function(e) {
    var o;
    return WI(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= 8481 + 8480 * -1, A.setState({});
    }, o;
  }())), Xt(t), g(I);
}), Me("__e", function(g, I, t, A) {
  Xt(), g(I, t, A);
}), Me("diffed", function(g, I) {
  Xt();
  var t;
  if (typeof I.type == "string" && (t = I.__e)) {
    var A = I.__np, e = I.props;
    if (A) {
      var o = t.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (9146 * -1 + -1 * 8213 + -17359 * -1) !== C && !(i in A) && (C.d(), o[i] = void 0);
      }
      else t.U = o = {};
      for (var B in A) {
        var Q = o[B], a = A[B];
        Q === void 0 ? (Q = Bx(t, B, a, e), o[B] = Q) : Q.o(a, e);
      }
    }
  }
  g(I);
});
function Bx(g, I, t, A) {
  var e = I in g && g.ownerSVGElement === void 0, o = bC(t);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: WI(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, e ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
Me("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var t = I.__e;
    if (t) {
      var A = t.U;
      if (A) {
        t.U = void (-3985 + -5 * -797);
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
      C && (i.__$u = void (-14 * 204 + 7736 * 1 + -4880), C.d());
    }
  }
  g(I);
}), Me("__h", function(g, I, t, A) {
  (A < 4961 + -330 * -24 + -12878 || 7564 + 13 * 124 + 1 * -9167 === A) && (I.__$f |= 2), g(I, t, A);
}), mA.prototype.shouldComponentUpdate = function(g, I) {
  var t = this.__$u;
  if (!(t && void (62 * 38 + -3886 + 1530) !== t.s || -16 * 565 + 2803 + -79 * -79 & this.__$f)) return !(-5730 + -1529 * 2 + 4 * 2197);
  if (-222 * 29 + 5075 + -1366 * -1 & this.__$f) return !(5111 * 1 + 2 * 4072 + -13255);
  for (var A in I) return !(2 * -4378 + 564 * -2 + 9884);
  for (var e in g) if (e !== "__source" && g[e] !== this.props[e]) return !(-6267 + 1 * 6267);
  for (var o in this.props) if (!(o in g)) return !(7626 + 1271 * -6);
  return !(3133 * 1 + -6154 + -3022 * -1);
};
function LC(g) {
  return yA(function() {
    return bC(g);
  }, []);
}
const Qx = async () => WebAssembly.validate(new Uint8Array([-11 * 757 + 3016 + -113 * -47, 97, 7780 * 1 + -8949 + 1284, -9930 + -1 * -10039, 3 * 2229 + -9 * -29 + 1 * -6947, -15 * -7 + 1 * -2621 + 2516, -89 * -82 + -11 * 591 + -797, 10447 + -337 * 31, -2863 + 2 * 3139 + -2 * 1707, 5, 9164 + 8581 * 1 + -17744, 681 * 3 + 321 * -20 + 4473, 1 * -2657 + 4529 + -1872, 1, -429 * -8 + -361 + -737 * 4, 3, 3022 * -1 + -5557 + 8581 * 1, -11515 + 2 * 5758, 215 * -43 + -3 * 631 + 11138, 1 * -8797 + -18 * 5 + -41 * -217, -4255 + 5 * 853, 8920 + 1 * -8919, 8, -103 * -62 + -7359 + -973 * -1, 6197 * -1 + -127 * -67 + -2247, 1 * 8521 + -274 * 35 + 1069, -8848 + 1 * 7309 + 1792, 2650 + 566 * 3 + -4333 * 1, 4243 * 1 + 9589 + 37 * -367, -3673 + 100 * -19 + 5671, -2 * 1598 + 1557 * 6 + -6135]));
function nx() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(26 * 364 + -881 + -8567);
}
function ax() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = nx();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function xx(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const II = {};
II.label = ">1m", II.time = 60;
const oI = {};
oI.label = ">45", oI.time = 45;
const iI = {};
iI.label = ">30", iI.time = 30;
function Ex(g, I = [II, oI, iI]) {
  const t = I.sort((A, e) => e.time - A.time);
  for (const A of t)
    if (g > A.time) return A.label;
  return "" + g;
}
const rx = (g) => Math.round(g / 500) * 500 / (4085 * -2 + 7265 * -1 + 16435), tt = (g) => g ? g <= -49 * 117 + 478 + -2 * -2628 ? Math.round(g * (4145 + -201 * 23 + -498 * -1)) / (-1733 * -3 + -8052 + -1 * -2873) : Math.round(g / (5366 + -12 * 443)) * 50 : -3499 + -474 * -19 + -1 * 5507, sx = (g) => Math.round(g * (-1797 + -303 * -7 + -322)) / (-486 * -2 + 1 * 6191 + -217 * 33);
function cx(g) {
  return g !== DA.RUNNING ? pg.VISIBLE : pg.VISIBLE_WITH_MASK;
}
async function dx() {
  return await Qx() ? Jo.SIMD : Jo.NO_SIMD;
}
var Dt, Tg;
class JC {
  constructor(I) {
    j(this, Dt, !0);
    j(this, Tg, Date.now());
    p(this, "analytics");
    p(this, "samVersion");
    p(this, "sessionToken");
    p(this, "onDetectionCallback");
    p(this, "onCaptureCallback");
    p(this, "createProtoMessage");
    p(this, "fpsOfAllImages", new fC(-2430 + -10 * 505 + -10 * -751));
    p(this, "cameraService");
    p(this, "imageProcessor");
    this.cameraService = I.cameraService, this.imageProcessor = I.imageProcessor, this.analytics = I.analytics, this.samVersion = I.samVersion, this.sessionToken = I.sessionToken, this.createProtoMessage = I.createProtoMessage, this.onDetectionCallback = I.onDetectionCallback, this.onCaptureCallback = I.onCaptureCallback;
  }
  async run() {
    for (; k(this, Dt); )
      await this.iterate();
    return this;
  }
  stop() {
    T(this, Dt, !1);
  }
  async trackCaptureProcess(I, t) {
    var i;
    const A = Date.now(), e = Dg(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: e, captureProcessDurationInMs: A - k(this, Tg), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await dx() });
  }
  onDetection(I, t) {
    this.onDetectionCallback({ ...I, avgFps: Ze(Dg(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: t, detection: A }) {
    const e = {};
    e.width = t.width, e.height = t.height;
    const o = e, i = await Da(t), C = await this.cameraService.getCameraProperties(), B = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, Q = {};
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
    await V0(Math.max(So.max - I, So.min));
  }
}
Dt = new WeakMap(), Tg = new WeakMap();
class hx extends JC {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, instructionCodeMap: e, ...o }) {
    super(o);
    p(this, "candidateSelectionTime", -4902 + -83 * 74 + 11044);
    p(this, "candidatesSelectionFramesCount", 16 * 386 + -8791 * 1 + 2615 * 1);
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
    this.candidateSelectionTime === -6577 + 11 * -7 + -3 * -2218 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= h0.minFrames ? t > h0.minDuration : t > h0.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: A } = this.bestImage || {};
    if (A && t) this.trackCaptureProcess(t, A), await this.onCapture({ canvasImage: A, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new K("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: A }) {
    const e = this.getDetectionEndTime(A.timestamp), o = Ze((-9547 + -179 * 4 + -1 * -11263) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, B = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), Q = {};
    Q.isNewDetectionValid = t.isValid, Q.newInvalidInstruction = B[-8559 + 7397 * 1 + 1 * 1162];
    const a = this.getInstructionCode(Q), n = {};
    return n.detection = t.detection, n.instructionCode = a, n.invalidValidators = B, n.isInCandidateSelection = this.isInCandidateSelection, { processedImage: n, detectionTime: e, fps: o, avgFps: Ze(Dg(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: A }) {
    var e;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (e = this.lastImage) != null && e.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, A) {
    return A.sharpness > t.sharpness;
  }
}
var Ie, se;
class lx extends JC {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, ...e }) {
    super(e);
    j(this, Ie, void (-743 * 3 + -5720 + 1 * 7949));
    j(this, se);
    p(this, "fallbackInstruction");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var A, e;
    return (A = t.detail) != null && A["instruction"] ? Object.values(c0).includes((e = t.detail) == null ? void 0 : e["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    T(this, se, (t) => {
      var A;
      this.isRequestCaptureEventValid(t) && T(this, Ie, (A = t.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(Fo.REQUEST_CAPTURE, k(this, se));
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
    return k(this, Ie) ? k(this, Ie) === c0.FIRST_FRAME ? !0 : k(this, Ie) === c0.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    e.canvasImage = t, e.detection = A, e.candidateSelectionImages = [], await this.onCapture(e), T(this, Ie, void (-2 * 3281 + -8543 * 1 + 15105)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, A) {
    const e = this.getDetectionEndTime(t.timestamp), o = Ze((-651 + 13 * 127) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = t.image.width, i.height = t.image.height;
    const C = i, B = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), Q = this.getInstructionCode(B[2 * 2007 + -5 * 22 + -2 * 1952]), a = {};
    return a.detection = A.detection, a.instructionCode = Q, a.invalidValidators = B, a.isInCandidateSelection = !1, { processedImage: a, detectionTime: e, fps: o, avgFps: Ze(Dg(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), k(this, se) && document.removeEventListener(Fo.REQUEST_CAPTURE, k(this, se));
  }
}
Ie = new WeakMap(), se = new WeakMap();
function ux({ captureMode: g, ...I }) {
  return g === QC.AUTO_CAPTURE ? new hx(I) : new lx(I);
}
function fx({ cameraResolution: g, cameraService: I, customEvent: t }) {
  const { shouldCameraMirror: A } = $a(t.CONTROL, I), e = {};
  e.cameraResolution = g, e.shouldCameraMirror = A, _a(t.CAMERA_PROPS_CHANGED, e), gA(() => () => {
    lt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function Dx({ cameraFacing: g, captureMode: I, checkToInstructionCodeMap: t, controller: A, createProtoMessage: e, customEvent: o, fallbackInstruction: i, instructionCodeMap: C, onCapture: B, onDetection: Q, sessionToken: a }) {
  const { appState: n, handleAppStateChange: s } = Lt(), { sunfish: x } = Jt(), { analytics: r } = Wn(), { cameraResolution: d, cameraService: h, onCameraResolutionChange: E, videoRef: u } = gx(g), w = {};
  w.cameraResolution = d, w.cameraService = h, w.customEvent = o;
  const { shouldCameraMirror: R } = fx(w), S = LC(void (16314 + -8157 * 2)), M = zA((J) => {
    s(DA.WAITING), B(J);
  }, [B, s]), y = zA((J, X) => {
    E(J.resolution), S.value = J, Q(J, X);
  }, [Q, S, E]);
  gA(() => {
    h != null && h["isStreaming"] && (A != null && A["isDetectorInitialized"]) && x && s(DA.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], A == null ? void 0 : A["isDetectorInitialized"], s, x]), gA(() => {
    if (n !== DA.RUNNING) return;
    if (!h || !A) throw new K("Cannot start detection");
    const J = {};
    J.captureMode = I, J.analytics = r, J.cameraService = h, J.imageProcessor = A.imageProcessor, J.fallbackInstruction = i, J.instructionCodeMap = C, J.checkToInstructionCodeMap = t, J.sessionToken = a, J.samVersion = A.samVersion, J.createProtoMessage = e, J.onCaptureCallback = M, J.onDetectionCallback = y;
    const X = ux(J);
    return A.runDetectionLoop(X), () => {
      A.stopDetectionLoop();
    };
  }, [n, A, h, M, y, a, S, r, e, C, t, i, I]);
  const O = {};
  return O.videoRef = u, O.cameraResolution = d, O.detectionDetails = S, O.shouldCameraMirror = R, O;
}
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, WC = {}, vo = {}, yx = wx;
function wx(g, I) {
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
var YC = {};
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
})(YC);
var px = t0;
function t0() {
  this._listeners = {};
}
t0.prototype.on = function(g, I, t) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: t || this
  }), this;
};
t0.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var t = this._listeners[g], A = 0; A < t.length; )
      t[A].fn === I ? t.splice(A, 1) : ++A;
  return this;
};
t0.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var t = [], A = 1; A < arguments.length; )
      t.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, t);
  }
  return this;
};
var mx = Uo(Uo);
function Uo(g) {
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
    g.writeFloatLE = I.bind(null, Ko), g.writeFloatBE = I.bind(null, Ho);
    function t(A, e, o) {
      var i = A(e, o), C = (i >> 31) * 2 + 1, B = i >>> 23 & 255, Q = i & 8388607;
      return B === 255 ? Q ? NaN : C * (1 / 0) : B === 0 ? C * 1401298464324817e-60 * Q : C * Math.pow(2, B - 150) * (Q + 8388608);
    }
    g.readFloatLE = t.bind(null, qo), g.readFloatBE = t.bind(null, Oo);
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
    g.writeDoubleLE = I.bind(null, Ko, 0, 4), g.writeDoubleBE = I.bind(null, Ho, 4, 0);
    function t(A, e, o, i, C) {
      var B = A(i, C + e), Q = A(i, C + o), a = (Q >> 31) * 2 + 1, n = Q >>> 20 & 2047, s = 4294967296 * (Q & 1048575) + B;
      return n === 2047 ? s ? NaN : a * (1 / 0) : n === 0 ? a * 5e-324 * s : a * Math.pow(2, n - 1075) * (s + 4503599627370496);
    }
    g.readDoubleLE = t.bind(null, qo, 0, 4), g.readDoubleBE = t.bind(null, Oo, 4, 0);
  }(), g;
}
function Ko(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
function Ho(g, I, t) {
  I[t] = g >>> 24, I[t + 1] = g >>> 16 & 255, I[t + 2] = g >>> 8 & 255, I[t + 3] = g & 255;
}
function qo(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function Oo(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function To(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Gx = kx;
function kx(g) {
  try {
    if (typeof To != "function")
      return null;
    var I = To(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var vC = {};
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
})(vC);
var bx = Nx;
function Nx(g, I, t) {
  var A = t || 8192, e = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > e)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var B = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), B;
  };
}
var y0, Zo;
function Fx() {
  if (Zo)
    return y0;
  Zo = 1, y0 = I;
  var g = me();
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
  }, y0;
}
var jo;
function me() {
  return jo || (jo = 1, function(g) {
    var I = g;
    I.asPromise = yx, I.base64 = YC, I.EventEmitter = px, I.float = mx, I.inquire = Gx, I.utf8 = vC, I.pool = bx, I.LongBits = Fx(), I.isNode = !!(typeof Qe < "u" && Qe && Qe.process && Qe.process.versions && Qe.process.versions.node), I.global = I.isNode && Qe || typeof window < "u" && window || typeof self < "u" && self || Qe, I.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(vo)), vo;
}
var UC = L, kA = me(), CI, g0 = kA.LongBits, Po = kA.base64, Vo = kA.utf8;
function Yt(g, I, t) {
  this.fn = g, this.len = I, this.next = void 0, this.val = t;
}
function YI() {
}
function Rx(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function L() {
  this.len = 0, this.head = new Yt(YI, 0, 0), this.tail = this.head, this.states = null;
}
var KC = function() {
  return kA.Buffer ? function() {
    return (L.create = function() {
      return new CI();
    })();
  } : function() {
    return new L();
  };
};
L.create = KC();
L.alloc = function(g) {
  return new kA.Array(g);
};
kA.Array !== Array && (L.alloc = kA.pool(L.alloc, kA.Array.prototype.subarray));
L.prototype._push = function(g, I, t) {
  return this.tail = this.tail.next = new Yt(g, I, t), this.len += I, this;
};
function vI(g, I, t) {
  I[t] = g & 255;
}
function Sx(g, I, t) {
  for (; g > 127; )
    I[t++] = g & 127 | 128, g >>>= 7;
  I[t] = g;
}
function UI(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
UI.prototype = Object.create(Yt.prototype);
UI.prototype.fn = Sx;
L.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new UI(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
L.prototype.int32 = function(g) {
  return g < 0 ? this._push(KI, 10, g0.fromNumber(g)) : this.uint32(g);
};
L.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function KI(g, I, t) {
  for (; g.hi; )
    I[t++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[t++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[t++] = g.lo;
}
L.prototype.uint64 = function(g) {
  var I = g0.from(g);
  return this._push(KI, I.length(), I);
};
L.prototype.int64 = L.prototype.uint64;
L.prototype.sint64 = function(g) {
  var I = g0.from(g).zzEncode();
  return this._push(KI, I.length(), I);
};
L.prototype.bool = function(g) {
  return this._push(vI, 1, g ? 1 : 0);
};
function BI(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
L.prototype.fixed32 = function(g) {
  return this._push(BI, 4, g >>> 0);
};
L.prototype.sfixed32 = L.prototype.fixed32;
L.prototype.fixed64 = function(g) {
  var I = g0.from(g);
  return this._push(BI, 4, I.lo)._push(BI, 4, I.hi);
};
L.prototype.sfixed64 = L.prototype.fixed64;
L.prototype.float = function(g) {
  return this._push(kA.float.writeFloatLE, 4, g);
};
L.prototype.double = function(g) {
  return this._push(kA.float.writeDoubleLE, 8, g);
};
var Mx = kA.Array.prototype.set ? function(g, I, t) {
  I.set(g, t);
} : function(g, I, t) {
  for (var A = 0; A < g.length; ++A)
    I[t + A] = g[A];
};
L.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(vI, 1, 0);
  if (kA.isString(g)) {
    var t = L.alloc(I = Po.length(g));
    Po.decode(g, t, 0), g = t;
  }
  return this.uint32(I)._push(Mx, I, g);
};
L.prototype.string = function(g) {
  var I = Vo.length(g);
  return I ? this.uint32(I)._push(Vo.write, I, g) : this._push(vI, 1, 0);
};
L.prototype.fork = function() {
  return this.states = new Rx(this), this.head = this.tail = new Yt(YI, 0, 0), this.len = 0, this;
};
L.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Yt(YI, 0, 0), this.len = 0), this;
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
  CI = g, L.create = KC(), CI._configure();
};
var Lx = vA, HC = UC;
(vA.prototype = Object.create(HC.prototype)).constructor = vA;
var oe = me();
function vA() {
  HC.call(this);
}
vA._configure = function() {
  vA.alloc = oe._Buffer_allocUnsafe, vA.writeBytesBuffer = oe.Buffer && oe.Buffer.prototype instanceof Uint8Array && oe.Buffer.prototype.set.name === "set" ? function(g, I, t) {
    I.set(g, t);
  } : function(g, I, t) {
    if (g.copy)
      g.copy(I, t, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[t++] = g[A++];
  };
};
vA.prototype.bytes = function(g) {
  oe.isString(g) && (g = oe._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(vA.writeBytesBuffer, I, g), this;
};
function Jx(g, I, t) {
  g.length < 40 ? oe.utf8.write(g, I, t) : I.utf8Write ? I.utf8Write(g, t) : I.write(g, t);
}
vA.prototype.string = function(g) {
  var I = oe.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(Jx, I, g), this;
};
vA._configure();
var qC = _, KA = me(), QI, OC = KA.LongBits, Wx = KA.utf8;
function LA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function _(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var Xo = typeof Uint8Array < "u" ? function(g) {
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
      return KA.Buffer.isBuffer(I) ? new QI(I) : Xo(I);
    })(g);
  } : Xo;
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
      throw this.pos = this.len, LA(this, 10);
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
function w0() {
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
        throw LA(this);
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
        throw LA(this);
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
  throw Error("invalid varint encoding");
}
_.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Ng(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
_.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw LA(this, 4);
  return Ng(this.buf, this.pos += 4);
};
_.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw LA(this, 4);
  return Ng(this.buf, this.pos += 4) | 0;
};
function _o() {
  if (this.pos + 8 > this.len)
    throw LA(this, 8);
  return new OC(Ng(this.buf, this.pos += 4), Ng(this.buf, this.pos += 4));
}
_.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw LA(this, 4);
  var g = KA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
_.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw LA(this, 4);
  var g = KA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
_.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, t = this.pos + g;
  if (t > this.len)
    throw LA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, t) : I === t ? new this.buf.constructor(0) : this._slice.call(this.buf, I, t);
};
_.prototype.string = function() {
  var g = this.bytes();
  return Wx.read(g, 0, g.length);
};
_.prototype.skip = function(g) {
  if (typeof g == "number") {
    if (this.pos + g > this.len)
      throw LA(this, g);
    this.pos += g;
  } else
    do
      if (this.pos >= this.len)
        throw LA(this);
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
  QI = g, _.create = TC(), QI._configure();
  var I = KA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  KA.merge(_.prototype, {
    int64: function() {
      return w0.call(this)[I](!1);
    },
    uint64: function() {
      return w0.call(this)[I](!0);
    },
    sint64: function() {
      return w0.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return _o.call(this)[I](!0);
    },
    sfixed64: function() {
      return _o.call(this)[I](!1);
    }
  });
};
var Yx = we, ZC = qC;
(we.prototype = Object.create(ZC.prototype)).constructor = we;
var zo = me();
function we(g) {
  ZC.call(this, g);
}
we._configure = function() {
  zo.Buffer && (we.prototype._slice = zo.Buffer.prototype.slice);
};
we.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
we._configure();
var jC = {}, vx = ut, HI = me();
(ut.prototype = Object.create(HI.EventEmitter.prototype)).constructor = ut;
function ut(g, I, t) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  HI.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!t;
}
ut.prototype.rpcCall = function g(I, t, A, e, o) {
  if (!e)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return HI.asPromise(g, i, I, t, A, e);
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
ut.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = vx;
})(jC);
var Ux = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = UC, I.BufferWriter = Lx, I.Reader = qC, I.BufferReader = Yx, I.util = me(), I.rpc = jC, I.roots = Ux, I.configure = t;
  function t() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  t();
})(WC);
var v = WC;
const f = v.Reader, P = v.Writer, l = v.util, c = v.roots.default || (v.roots.default = {}), je = c.dot = (() => {
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
      return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
        return this.constructor.toObject(this, v.util.toJSONOptions);
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
      return this.constructor.toObject(this, v.util.toJSONOptions);
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
      return this.constructor.toObject(this, v.util.toJSONOptions);
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
      return this.constructor.toObject(this, v.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, I;
  }(), g;
})();
(function(g, I) {
  function t(i, C, B, Q, a) {
    return z(C - 374, Q);
  }
  function A(i, C, B, Q, a) {
    return z(a - 719, Q);
  }
  const e = g();
  function o(i, C, B, Q, a) {
    return z(i - 931, C);
  }
  for (; ; )
    try {
      if (parseInt(A(979, 964, 979, "PkFl", 981)) / 1 + -parseInt(A(1008, 972, 989, "cV$2", 986)) / 2 + -parseInt(t(606, 622, 633, "5MJA", 602)) / 3 * (parseInt(A(988, 975, 993, "rDkW", 984)) / 4) + -parseInt(o(1186, "SR7[", 1169, 1196, 1187)) / 5 + parseInt(A(944, 948, 942, "PkFl", 963)) / 6 + -parseInt(o(1172, "4vr[", 1164, 1171, 1172)) / 7 * (parseInt(o(1183, "5E1H", 1170, 1205, 1187)) / 8) + parseInt(o(1184, "Zu2l", 1170, 1174, 1171)) / 9 === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fg, 987246);
function z(g, I) {
  const t = Fg();
  return z = function(A, e) {
    A = A - (-5 * -649 + -7 * -847 + -8945);
    let o = t[A];
    if (z.xPWedI === void 0) {
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
      z.pJPRUC = a, g = arguments, z.xPWedI = !0;
    }
    const C = t[9570 + -13 * -737 + -19151], B = A + C, Q = g[B];
    return Q ? o = Q : (z.RJptIq === void 0 && (z.RJptIq = !0), o = z.pJPRUC(o, e), g[B] = o), o;
  }, z(g, I);
}
async function Kx() {
  const g = {};
  g[B(613, "@YUH", 631, 616, 630)] = sC, g[B(598, "GA03", 629, 620, 618) + "h"] = 256;
  const I = await window[B(619, "TLfs", 590, 590, 611) + "o"][Q(-4, 4, 11, 30, "nBPL") + "e"][B(613, "#trr", 596, 623, 604) + B(637, "Zu2l", 631, 643, 635) + "y"](g, !0, [Q(-18, 17, 3, 7, "Zu2l") + "pt", i(576, 591, 584, 568, "]1Rb") + "pt"]);
  function t(a, n, s, x, r) {
    return z(r - 291, s);
  }
  const A = Uint8Array[Q(-15, -29, -11, -33, "nBPL")](Array(2302 * -3 + 4 * -1951 + 14726)[Q(-10, -12, 6, -11, ")7*q")](2 * 833 + 5587 + 1 * -7253));
  function e(a, n, s, x, r) {
    return z(r - -953, s);
  }
  const o = window[B(601, "Zu2l", 614, 612, 622) + "o"][t(540, 528, "(q$I", 522, 528) + Q(6, -21, -8, -16, "]1Rb") + e(-713, -724, "zXdu", -718, -714)](A);
  function i(a, n, s, x, r) {
    return z(a - 333, r);
  }
  const C = {};
  C[t(513, 510, "eC$D", 509, 525)] = I, C.iv = o;
  function B(a, n, s, x, r) {
    return z(r - 371, n);
  }
  function Q(a, n, s, x, r) {
    return z(s - -243, r);
  }
  return C;
}
async function Hx(g) {
  const { iv: I, key: t } = await Kx();
  function A(n, s, x, r, d) {
    return z(x - -942, d);
  }
  const e = {};
  e[a(271, "zXdu", 260)] = sC, e.iv = I;
  const o = await window[A(-699, -674, -679, -695, "Uy!d") + "o"][A(-706, -683, -700, -689, "]1Rb") + "e"][a(284, "%5(W", 287) + "pt"](e, t, g), i = await window[Q("MWsY", 323) + "o"][A(-690, -696, -685, -697, "@YUH") + "e"][Q("3)EO", 353) + C(-632, -653, "%Bi$")](a(284, "GA03", 303), t);
  function C(n, s, x, r, d) {
    return z(n - -863, x);
  }
  const B = {};
  B[a(281, "dL51", 281) + "ge"] = o;
  function Q(n, s, x, r, d) {
    return z(s - 85, n);
  }
  B[A(-734, -702, -712, -695, "JF7J")] = i, B.iv = I;
  function a(n, s, x, r, d) {
    return z(x - 31, s);
  }
  return B;
}
function Fg() {
  const g = ["kCo0W5VcRSos", "gmomsSkFsCkGtG", "E8kXWPxdQmkEwXhcRSogbmoCWPdcQ1u", "emoJoZWk", "WQHAWRJdRaOOW5pcSSopWQRdVCoqW4i", "kNVcM8kgWP0", "W6vvWRJcKeG", "oH1fnvrSAZGgtCoPgq", "W7HbWRFcGq", "BrreW77dUxWFW5VcVfxdJSkr", "p8okw1KzW7juWRqDWPzHs8os", "W6ZdVSoJW49WW6bHWOBcSmkXWQRdMa", "WOvBhvXe", "k8oYW4FcLCod", "WRddSd5Ybtaj", "be3dINxdK8kksq", "bSoYWPBcMWrtu2/dUhvVW6jO", "CCkGiwJdMG", "WPvznwniW4zUzmoyESkPAmom", "WPKKwcmWWQy9", "W6TgW4WGtGlcQSokWP7cNXuNhCoM", "khZcPG", "w8otW4Wi", "WReuWOi", "WQhcOCkwCG", "bCoKnIu", "r07dLG/dSa", "WOdcTsa", "WRLCW59bcq", "t8owjbxcHtrKDCoGvfxcSSoo", "f8oznsZcUG", "B1GiCHa", "vmoEW5qiyG", "DCoubSo/W4q", "W4D3k1ZdRMtcSr1ChmoWW7e", "WQrnW5jymW", "WRnDW5nEjG", "W6VdUmoNW410W60BW5ZcPmkhWOhdKmkItq", "E8k3WPldQ8kswbhcQ8oUmmo1WOZcT1K", "l8oOW4hcRmoF", "nNJcVY06", "cg3dOCk1dc9RmSkJW6nYW4dcKG", "W4FcNCo0fq", "yCkzgbjb"];
  return Fg = function() {
    return g;
  }, Fg();
}
(function(g, I) {
  function t(B, Q, a, n, s) {
    return rA(s - 976, a);
  }
  function A(B, Q, a, n, s) {
    return rA(B - -290, a);
  }
  function e(B, Q, a, n, s) {
    return rA(B - 405, Q);
  }
  const o = g();
  function i(B, Q, a, n, s) {
    return rA(s - 137, n);
  }
  function C(B, Q, a, n, s) {
    return rA(B - -613, n);
  }
  for (; ; )
    try {
      if (parseInt(e(741, "weam", 734, 731, 730)) / 1 * (parseInt(e(739, "dX[K", 746, 749, 740)) / 2) + -parseInt(i(494, 484, 488, "TgFM", 496)) / 3 + -parseInt(C(-276, -289, -264, "v6Ii", -287)) / 4 * (-parseInt(e(761, "&a!U", 756, 749, 749)) / 5) + -parseInt(i(483, 484, 482, "60xt", 480)) / 6 + parseInt(C(-262, -253, -270, "Xju@", -273)) / 7 + -parseInt(e(762, "!oFs", 759, 760, 754)) / 8 * (-parseInt(t(1318, 1340, "weam", 1319, 1328)) / 9) + -parseInt(A(68, 79, "5bCM", 66, 60)) / 10 === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Rg, -53069 * -7 + -511366 + 402545);
function Rg() {
  const g = ["W50GjJJdOWpcHSooWR1BW54bba", "WPLBd8keW5bhmSkMtYlcJM4", "WOeyf2tcMtVcJCo4WRbsW4i", "W4Xrzmkrpmo/W4L2zSkdlW", "iCknWRDRb1KTW7pdM8khW6TqW7y", "xMv4WPhcLSk3W4O", "hrFdHSoWi8kGedpcNgxdRSkb", "WOfYD0hcOG", "DqNcKSkKohNcKq", "WP7cS8keWOqiWOCqELBcJ2n8", "m8oGhSk6bq", "WOKcmSorAW", "W7PABtnsWRFdOe3dLcLhW7O", "W4ehWRddK8oZ", "gbtdGSoYimkQcGdcKw3dGSkl", "wHiDW4ldUSohWRBdIuVcPSobWPpdPW", "W73cKCk2W6i", "WRT4repdNW", "W6yOgvZdKXKBmYO", "W5hcS0ddI24XWQ9F", "oCkvWOe0A8oInmkbiaZdP8oQW4O", "wbeAWOlcT8k4W6NdOhG", "xHiBW4/dU8kZW6tdVLFcS8oF", "W7FcHmkRW4dcOG", "yCouW4JdUK8", "iCkmW54jsJHzW6W", "rNddVIpdTCkoFmkjWQCvqa"];
  return Rg = function() {
    return g;
  }, Rg();
}
function rA(g, I) {
  const t = Rg();
  return rA = function(A, e) {
    A = A - (-211 * -10 + 3 * 1241 + -5499);
    let o = t[A];
    if (rA.VdNzlJ === void 0) {
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
      rA.QrOAbi = a, g = arguments, rA.VdNzlJ = !0;
    }
    const C = t[473 * -21 + 1 * 5719 + 4214], B = A + C, Q = g[B];
    return Q ? o = Q : (rA.wzOBBT === void 0 && (rA.wzOBBT = !0), o = rA.QrOAbi(o, e), g[B] = o), o;
  }, rA(g, I);
}
function qx(g) {
  const I = new ArrayBuffer(g[e(508, 509, "mBTm", 519) + "h"]);
  function t(o, i, C, B, Q) {
    return rA(B - 119, C);
  }
  const A = new Uint8Array(I);
  for (let o = 7681 + -60 * -26 + 1 * -9241, i = g[e(515, 518, "8ASA", 526) + "h"]; o < i; o++)
    A[o] = g[e(523, 519, "jY(j", 515) + t(465, 460, "5bCM", 457)](o);
  function e(o, i, C, B, Q) {
    return rA(B - 171, C);
  }
  return I;
}
function Sg() {
  const g = ["WRveFgq/", "W4rfvCkEWRu", "CqWfv8oC", "yhdcQdldQG", "WQOLFbeZ", "xSoBW7ldGuq", "rL7cQIFdJW", "wmo8WOVdM8oQ", "WPmZWPxcOSoK", "FspdM8khWQy", "h8oLt8o2W50", "EmonW6NdPwq", "WQdcPGKWWOa", "W75TW4y3W7a", "dSogbSk3W7e", "ASkXW63dS8k1", "hCo5WROTWPS", "WRxdNJZdLCol", "AIWyaSom", "W4OPzCo6la", "W6D9WPrjWQ8", "WQZcOcCydmocWPzj", "eL58BSku", "W6pcJeNcN8kA", "WP7cKZRcH8og", "W67cSmkFsq", "omo6WRtcRmk8z8o3WQpcHehcTsO", "FmoHW53dRxu", "WP4ava3cNa", "W4NcR8kpW7i4", "WPJdV0lcNW", "W6GpW78swW", "F8o3WRajWOG", "WRy1WOFcGCom", "WRSxWO7cNmoD", "WQ/cUmkGaG0", "WOBcPMSGWQ4", "CCohWRxdTSop", "WQZdMthdICoB", "WOpdVCkHW48x", "wrCqmNi", "CctdJCo2WR8", "vSkUzSo2WQq", "W4JdHYOilq", "W5pcUCkewSol", "qSkmWRNdNmoF", "ymoFW57cQSoc", "DHKyaSot", "r8kbnmkOaW", "W6rfW4DcuW", "W6RdSmo0aNG", "uJKTrSof", "ALpcLc/dLW", "nSoDW6xdN8o+", "WP3cHSkqWOX5", "iCoKW5BcM8ou", "wSkAW50sWPO", "W6lcGSkyW4e", "wmkFW6JcQmoy", "WRrxWO/cTmoC", "vSoXgduH", "ACkznCkIlG", "W6qCWQ18fW", "AYCVB8oS", "k8kgWPhcRmoV", "cLzwcgC", "W78Qu8kPya", "xmkgsmoXWReXW6mEb8k3W68", "hSkQWRZcQmoy", "WRahW5S2nCoXram", "AmkJC8o8WPW", "W4uJnCkDaG", "W5tcOmoNrCo2", "WQNdJCodau9KW4RdIHeTv0ddTq", "qCopW4pdPhW", "pvPQxG", "W6qjWQHUsW", "W7VdHCkJo8oj", "ESoVW4abWPa", "h1nbs8ov", "WRiqsZZcNa", "W5xcISkbW57cLG", "W4eJvCkFWOq", "W6rZyCoCAW", "zmouWRpdImk6", "W7hcHmoLm8oU", "WOxcQI0GWR4", "WQVdSuhdJMO", "W7mdW4nuza", "gwL/gmkF", "wSojW67dVgG", "yc3dNCoXWR0", "EJXhftK", "w8kKW6FcRCoy", "WRrJW4nzlW", "W6/dN8oMW6WYWPuCW5KyW43dHCkeW4O", "WRKuW5jjWOOnDxG", "W57cHmoaqSov", "W4j2C8kW", "mwBcNYZdSW", "WQ3dNKhcT3y", "ACklW5/dTCow", "W4hcQLddJmkQ", "j3KbACo5hSoQWPG", "W4PlW51eWQe", "WRjHDKS", "W7n7CmkWWPG", "WQibWO1hjSobWQ4", "nmkAW5VdNCoc", "BCoAW4FdOa4", "uCk+k8klmW", "WQxdMmoTWO4b", "zCkcWR7dQmoH", "WPNcJCkEW4r4W5RcOgJdSXRdQeek", "WPHejeOI", "W5HHW4OLdG", "W4hdM8oQW6Gf", "WPZdTSkRW7uy", "cSo1W4ifWR8", "W4KoWRzXkG", "W7mPW4bPrW", "WP/dJSoiWROx", "v3KmmCoN", "WQKnsCoaca", "W5NdTrysvq", "W6BdNN/cSmkL", "WR7dQCkGzvm", "W45CWQeuWPe", "WQmoCZ/dOG", "z8ojCSouWQe", "WPKlCmkpzG", "W5VcTCksWPtcQa", "dSkdkCkomG", "sCoLBJ0C", "WPxdP8kuW4Wf", "pCkHW77dJmou", "W6NcM8oZBmoN", "W57cL2dcP8kO", "zrGnzCoa", "ChGYnmoE", "W5ZdOs0VdW", "A8k/pSkGsq", "WOmmW4WYEa", "mHOIdSoy", "veZcIGtdSW", "WOnjuhOR", "lmoPW4KOWPO", "W4tdObGSmq", "W4z/tSkjWRG", "C2e1BSoE", "ewPivSoW", "W7hcHSoZA8k5", "WR/dTLNcLCok", "ySknw8om", "WOtcOW09WOK", "WQFcSSk9WRDx", "WRZdI8k9W7HZ", "W7VdQ8kxW4Cn", "W4NcPgZcO8kFW7C6W5uME3CcxW", "m1ZcNIVdNa", "WQxcSM4fWPK", "WOPllKKj", "W4tcRSoHWO5GW7WUW5ruoaNcOW", "W4ycWOTkkq", "WRtcPgtcMSoX", "BwBcIYxdVa", "a8kJW7lcUSoB", "W6hdK2PmW5KFkCk6sSoHafxdSq", "WQNdNw7dMmkC", "FCkEW4X/W4jprmouA37cLCo8W4C", "z8kRW5/cOCol", "zaK0AvNcPJ1+ta", "W5GwWP5yWRa", "FCogWP3cNw4", "mM7cLXJdIa", "W7tcImobWQivW6GTqmoZqSoOxIO", "BGHXaYe", "rmknvCopWP0", "W5VcUCkFW67cPG", "W4Xunmogg8ogW5ZcICoP", "WP9yvSkkWPG", "k2e1v3G", "WRDBWPdcRmkM", "hCoJjCkTW6e", "fGbPrCoW", "W5VdKmo4aKm", "W6NcJSkyrbu", "WR3dKCocWPldHLW+vvZcRmkO", "W6D6B8oQWQe", "uSk3W6hdGGK", "WPZdQmkqWQmS", "W7uoWQ5Eka", "WPb0pmozaSoTWP93WOblE1tcQq", "vX8xv8o2", "tsi1mmo0", "W4ldSCkWW7Ci", "WQBdJCknW6Tt", "W5BdOSkphmkj", "hSkjWOBdICon", "W4VdIColFYG", "W7O4WQDMCW", "WO15WRFcR8kC", "wCoTW7ujWOq", "mSk3Fmo4WR8", "pmkPW7GIWRC", "WRT0W4LrzW", "WOaKWP7cMmkk", "wgTwpsS", "W63dPmoXWOmc", "WPHzESkpWQ4", "WRGsWP4IW5nObwXjW6tdRGH0", "usGVF8oo", "sZSly8kP", "W7O1vSoDDW", "mmoAW50RWPW", "W6lcPCknW7dcNW", "cmowW4dcUCo2", "W7xdKmo0WOyl", "W7ztW7uXWP8", "WRZdQSozmem", "WO/dGaVdGCkC", "W6xcTSoEzmoN", "W70EWOrXta", "d15OCSo1", "amoKWQiQWQm", "c8oNqSoZsSkXW6XzzSkCWPldLxa", "WPZdMCk5bmkGW5BdJa", "wN4HBCo4", "i8kZWPhdHCoS", "W4JdISk5xdC", "WQXsWQ7cJSkf", "pSoyW4pcUSkk", "W79HW4jvWO0", "W43cMCkVzIO", "W70VWQTXbq"];
  return Sg = function() {
    return g;
  }, Sg();
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return eA(C - 153, a);
  }
  const A = g();
  function e(C, B, Q, a, n) {
    return eA(a - 906, n);
  }
  function o(C, B, Q, a, n) {
    return eA(a - -110, Q);
  }
  function i(C, B, Q, a, n) {
    return eA(B - -676, Q);
  }
  for (; ; )
    try {
      if (-parseInt(i(-233, -250, "Mf%u", -280, -133)) / 1 * (-parseInt(i(-181, -79, "j2#3", 20, -27)) / 2) + parseInt(e(1548, 1530, 1448, 1520, "e7!u")) / 3 * (-parseInt(i(50, -54, "qDhX", 11, -139)) / 4) + -parseInt(i(-171, -138, "Z)Ra", -139, -39)) / 5 * (parseInt(i(-53, -66, "zPeu", -153, -53)) / 6) + parseInt(e(1539, 1418, 1630, 1533, "jFAg")) / 7 + parseInt(i(33, -83, "7Zvq", -34, -15)) / 8 + parseInt(i(39, -72, "&&or", -149, -1)) / 9 + parseInt(t(657, 684, 749, "#yGq", 692)) / 10 * (-parseInt(o(290, 501, "*%S)", 398, 332)) / 11) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Sg, 139 * -6361 + 285909 * -4 + 881491 * 3);
function Ox() {
  function g(a, n, s, x, r) {
    return eA(x - -50, a);
  }
  const I = e(48, "j75M", 88, 127, 74) + e(157, "dnsY", 147, -38, 73) + Q("*%S)", -220, -315, -160, -216) + i(1108, 1184, 1177, "Mf%u") + Q("j75M", -119, -117, -138, -164) + e(149, "8hrr", 150, 40, 64) + Q("fwAe", -296, -244, -169, -195) + i(1093, 1120, 1149, "K71D") + t("K71D", 745, 718) + g("N%Wb", 450, 499, 407) + e(-27, "UhFz", 36, -17, 27) + i(944, 988, 1070, "aeHZ") + e(61, "C2e0", 63, 46, 96) + e(146, "fwAe", 114, 133, 176) + g("Qi)D", 439, 550, 486) + t("jFAg", 834, 729) + Q("Qi)D", -236, -267, -102, -158) + t("K$LI", 700, 795) + i(1214, 1170, 1073, "rD[t") + g("Mcur", 608, 530, 549) + t("94Pc", 949, 876) + t("7Zvq", 942, 826) + t("pcP]", 599, 658) + g("Qi)D", 459, 447, 497) + Q("AdWw", -268, -157, -86, -186) + Q("Mcur", -119, -302, -225, -227) + Q("48uY", 55, 17, -30, -45) + e(181, "pcP]", 25, 156, 135) + i(984, 1045, 1048, "Qi)D") + g("uodI", 572, 532, 604) + Q("s3@B", -153, -133, -136, -111) + g("@0y4", 395, 423, 476) + g("pcP]", 421, 397, 499) + e(91, "j2#3", 46, 178, 91) + e(61, "6PUx", 26, 42, 125) + g("94Pc", 542, 521, 512) + Q("dnsY", -103, -100, -126, -107) + g("wFz#", 367, 563, 471) + e(-51, "wFz#", -107, 1, -14) + t("XB)4", 800, 747) + e(60, "*&Na", -122, -8, -19) + e(166, "dnsY", 157, 142, 133) + i(1293, 1180, 1095, "1$zE") + Q("b[1!", -101, -49, -105, -51) + g("qDhX", 474, 571, 466) + g("48uY", 301, 333, 380) + e(35, "j2#3", -72, -94, 3) + t("1$zE", 611, 705) + Q("UhFz", 4, -126, 42, -35) + e(121, "dnsY", 101, 143, 148) + g("xj*(", 443, 506, 503) + g("ZSsD", 361, 343, 412) + Q("xj*(", -55, 65, -86, -37) + t("aB!6", 747, 719) + e(62, "C2e0", 167, 48, 123) + t("&&or", 716, 690) + i(1108, 1072, 1148, "6PUx") + t("N%Wb", 740, 646) + g("tin*", 361, 548, 447) + i(930, 1035, 970, "aB!6") + t("HB8[", 745, 700) + Q("wFz#", -99, -180, -226, -215) + Q("b[1!", -105, -113, -286, -202) + i(1112, 1198, 1182, "Z)Ra") + e(83, "qkQe", 69, 109, 102) + g("fwAe", 557, 664, 589) + Q("1$zE", -232, -242, -327, -249) + t("6PUx", 631, 644) + i(1129, 1141, 1247, "wFz#") + t("b[1!", 747, 746) + t("xj*(", 780, 804) + i(1043, 997, 947, "rD[t") + e(3, "e7!u", 125, 40, 97) + Q("HB8[", -187, -158, -63, -74) + t("K$LI", 836, 760) + i(1187, 1167, 1160, "aeHZ") + i(1004, 1037, 1093, "uodI") + g("b2eT", 576, 486, 575) + t("Z)Ra", 853, 796) + Q("7Zvq", -40, -56, 72, -31) + e(-14, "aeHZ", 28, 50, 80) + t("aeHZ", 767, 806) + g("5d&A", 424, 352, 449) + g("N%Wb", 580, 564, 464) + g("xj*(", 388, 357, 374) + t("Z)Ra", 763, 709) + e(-94, "D@IQ", -39, -92, 5) + e(86, "HB8[", 32, 146, 44) + g("#yGq", 414, 468, 500) + g("zPeu", 479, 451, 541) + g("5d&A", 480, 385, 378) + g("uodI", 602, 547, 511) + e(143, "*%S)", 229, 221, 173) + g("uodI", 629, 631, 570) + e(-43, "pcP]", 25, -37, -22) + Q("48uY", -69, 5, -125, -69) + g("UhFz", 647, 562, 551) + Q("qkQe", -84, -280, -68, -171) + g("jFAg", 688, 581, 598) + g("*&Na", 510, 327, 422) + e(234, "b2eT", 224, 181, 191) + Q("jFAg", -21, -20, -174, -121) + i(1232, 1134, 1154, "s3@B") + t("@0y4", 700, 699) + g("HB8[", 619, 445, 514) + t("Qi)D", 828, 793) + t("ZSsD", 729, 669) + g("Qi)D", 512, 443, 555) + g("N%Wb", 439, 578, 535) + g("qDhX", 711, 500, 600) + g("N%Wb", 598, 462, 569) + g("b[1!", 530, 451, 505) + g("Mcur", 457, 469, 537) + i(1097, 1071, 1056, "*&Na") + e(10, "C2e0", -18, 133, 37) + g("b2eT", 705, 478, 593) + Q("@0y4", -190, -168, -226, -242) + g("ZSsD", 327, 459, 390) + t("94Pc", 690, 671) + e(112, "s3@B", 134, 176, 98) + Q("tin*", -196, -44, -71, -132) + Q("BjBY", -34, -95, -77, -147) + g("pcP]", 562, 523, 530) + Q("dnsY", -248, -311, -89, -199) + g("dnsY", 340, 327, 388) + t("j2#3", 786, 853) + i(1161, 1152, 1141, "dnsY") + i(1271, 1163, 1146, "HxgD") + Q("BjBY", 31, 16, -102, -79) + i(1125, 1031, 1122, "6PUx") + i(1072, 1002, 948, "Qi)D") + Q("8hrr", -50, -181, -129, -142) + e(48, "8hrr", 246, 74, 147) + e(225, "aB!6", 35, 11, 115) + i(1083, 1006, 1060, "e7!u") + g("*%S)", 351, 332, 383) + e(-42, "Qi)D", 15, -86, 19) + i(1047, 1010, 995, "K$LI") + e(-22, "*%S)", -88, 48, -32) + i(1113, 1063, 1061, "tin*") + e(-92, "s3@B", -13, 52, 17) + g("K$LI", 599, 600, 510) + Q("BjBY", -302, -248, -200, -254) + t("wFz#", 897, 818) + i(1198, 1121, 1238, "j2#3") + e(-47, "HxgD", 20, -65, 14) + g("C2e0", 557, 468, 579) + g("7Zvq", 442, 366, 423) + t("C2e0", 722, 650) + Q("tin*", 11, -68, -113, -88) + g("7Zvq", 466, 508, 402) + g("HB8[", 617, 640, 588) + g("b2eT", 597, 473, 542) + e(61, "Mf%u", 106, 156, 51) + i(1198, 1142, 1062, "(37M") + Q("aB!6", -154, -173, -190, -119) + g("XB)4", 621, 556, 597) + g("tin*", 465, 445, 372) + g("(37M", 498, 349, 439) + e(-49, "dnsY", -56, 87, -20) + g("aeHZ", 652, 679, 573) + t("tin*", 599, 657) + g("5d&A", 695, 604, 583) + g("f4R[", 403, 447, 393) + g("5d&A", 394, 429, 453) + t("&&or", 631, 736) + t("aB!6", 688, 768) + e(74, "1$zE", 83, 83, -8) + i(997, 1084, 1013, "6PUx") + e(-94, "UhFz", -11, -107, -30) + Q("ZSsD", -111, -75, -165, -177) + i(1065, 1007, 978, "BjBY") + Q("tin*", 5, -140, -49, -60) + Q("f4R[", -211, -244, -266, -217) + g("C2e0", 623, 481, 524) + t("UhFz", 813, 704) + e(163, "D@IQ", 69, 110, 116) + e(-60, "qkQe", 101, -31, 2) + Q("f4R[", -129, -193, -263, -192) + g("qDhX", 479, 581, 563) + g("jFAg", 575, 570, 468) + t("HxgD", 844, 865) + i(1109, 1095, 1115, "Qi)D") + Q("6PUx", -103, -195, -194, -179) + g("&&or", 423, 476, 401) + g("b2eT", 571, 418, 506) + Q("8hrr", 46, -173, 31, -62) + i(1147, 1168, 1260, "AdWw") + Q("qDhX", -218, -78, -165, -120) + g("f4R[", 324, 333, 418) + Q("6PUx", -232, -30, -122, -115) + Q("1$zE", -33, -170, -13, -108) + i(1023, 1053, 1004, "jFAg") + g("aeHZ", 606, 582, 594) + e(16, "aeHZ", -43, 65, 56) + t("#yGq", 651, 752) + e(157, "j2#3", -32, 190, 85) + e(2, "j2#3", 120, 156, 90) + g("zPeu", 452, 351, 424) + g("#yGq", 699, 633, 590);
  function t(a, n, s, x, r) {
    return eA(s - 223, a);
  }
  const A = window[i(1041, 1140, 1176, "HB8[")](I);
  function e(a, n, s, x, r) {
    return eA(r - -461, n);
  }
  const o = window[Q("j75M", -132, -204, -191, -221)](A);
  function i(a, n, s, x, r) {
    return eA(n - 552, x);
  }
  const C = qx(o), B = {};
  B[e(140, "qDhX", -44, 26, 31)] = cC;
  function Q(a, n, s, x, r) {
    return eA(r - -686, a);
  }
  return B[t("aeHZ", 719, 756)] = xa, window[t("rD[t", 742, 672) + "o"][e(42, "UhFz", -67, -76, 29) + "e"][t("48uY", 888, 859) + Q("*%S)", -283, -194, -172, -226)](t("pcP]", 856, 763), C, B, !0, [t("HxgD", 857, 750) + "pt"]);
}
function eA(g, I) {
  const t = Sg();
  return eA = function(A, e) {
    A = A - (353 * 20 + 67 * -67 + 430 * -5);
    let o = t[A];
    if (eA.KVajSx === void 0) {
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
      eA.QFmWAe = a, g = arguments, eA.KVajSx = !0;
    }
    const C = t[-5097 + -7227 * -1 + -1065 * 2], B = A + C, Q = g[B];
    return Q ? o = Q : (eA.gdWEpi === void 0 && (eA.gdWEpi = !0), o = eA.QFmWAe(o, e), g[B] = o), o;
  }, eA(g, I);
}
async function Tx(g) {
  const I = await Ox();
  function t(o, i, C, B, Q) {
    return eA(C - 379, Q);
  }
  const A = {};
  function e(o, i, C, B, Q) {
    return eA(B - -103, i);
  }
  return A[t(903, 991, 889, 799, "AdWw")] = cC, window[e(471, "zPeu", 564, 528) + "o"][t(1103, 1012, 1e3, 909, "*%S)") + "e"][t(807, 795, 906, 973, "HxgD") + "pt"](A, I, g);
}
function dA(g, I) {
  const t = Mg();
  return dA = function(A, e) {
    A = A - (-9 * -989 + -9536 + 1 * 1051);
    let o = t[A];
    if (dA.rEDdqV === void 0) {
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
      dA.ImqTmz = a, g = arguments, dA.rEDdqV = !0;
    }
    const C = t[0], B = A + C, Q = g[B];
    return Q ? o = Q : (dA.zdvMhK === void 0 && (dA.zdvMhK = !0), o = dA.ImqTmz(o, e), g[B] = o), o;
  }, dA(g, I);
}
(function(g, I) {
  const t = g();
  function A(B, Q, a, n, s) {
    return dA(B - -330, s);
  }
  function e(B, Q, a, n, s) {
    return dA(a - -934, Q);
  }
  function o(B, Q, a, n, s) {
    return dA(s - -721, a);
  }
  function i(B, Q, a, n, s) {
    return dA(s - -238, n);
  }
  function C(B, Q, a, n, s) {
    return dA(Q - -292, B);
  }
  for (; ; )
    try {
      if (-parseInt(o(-285, -292, "i]vA", -301, -292)) / 1 * (parseInt(i(189, 191, 182, "5eG$", 181)) / 2) + -parseInt(o(-296, -310, "pDQ)", -293, -304)) / 3 * (parseInt(e(-516, "AMC(", -506, -509, -498)) / 4) + -parseInt(A(92, 101, 98, 102, "wJtq")) / 5 + parseInt(A(104, 115, 115, 98, "Idsu")) / 6 * (parseInt(i(175, 178, 177, "jKZf", 180)) / 7) + -parseInt(C("h6v$", 135, 144, 145, 141)) / 8 + -parseInt(A(105, 111, 104, 98, "a2Ts")) / 9 + parseInt(o(-291, -292, "x3FL", -277, -284)) / 10 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mg, 250485 + -18541 * 17 + 307391);
async function Zx(g) {
  const { iv: I, key: t, message: A } = await Hx(g), e = await Tx(t), o = {};
  o[i("x3FL", -236)] = e, o.iv = I;
  function i(C, B, Q, a, n) {
    return dA(B - -659, C);
  }
  return o[i("h6v$", -223) + "ge"] = A, o;
}
function Mg() {
  const g = ["sZuaFmobnmkVW5W", "esJdNSoJc2hdVwhcKv4Ypvi", "WQ7dVSoHW4mg", "WPpcTmksW6BcV3jiWRNcJ3xdHq3dOmoT", "W73cR8oNWQbIccS4WPVcMq", "W71IW55kWQrhW4mcW4by", "W7RcRSoVWQa4ksG/WPlcVCkp", "jCoiW63cR8oxmaFcUvO", "dComWOxdKNXYi29qWR/dUmo5WOm", "W4efW5pdSSkCWRVcRSo7hqnOgGW", "zMBdK8ksvCoDb8oit8kGWRWaeq", "W4NdP8oz", "WPHcaCoVWRZdJ8oaya", "ESoOW4RdRs3dGWBcOGRdQeHLW5JcLW", "WQhdHSoJWOjSW5j/W6xdJG", "W7lcQmkGWOrwe8oJW7HSyCkXW7/dIW", "WP08W4mmWQddHSoaW5xcPG", "nJBcReRdOCkFiJz3WPm", "l8obWPCtfCoWqCo7WOxcHSo0", "jCopW63dJSkuqvNcJvVcPIWbEq", "pCo1W5FdQSoWC3RcVCk5", "W707WQpdUmotWPJdSgCWWQC"];
  return Mg = function() {
    return g;
  }, Mg();
}
function Lg() {
  const g = ["oCo0DaeEs1BcQ8kmW4a5", "W4nnWRhdKL/dJItcNGRdK1S/", "WR4ZW5NcS8oI", "E8kNANK", "WQBdRmo0Bb8", "WPddMCkvW5K", "fNfPW7ZdGa", "W5CegraLa8oKjghdS8kVW4C", "WPHrW77dUCo8WOXKWOddRSogbYC", "WOfrxSoKg8oGuZNcPq", "WPNdHrCFWRVcMSo4W7WEWQzh", "FWLKW4qDW6bNy8oNgG", "iISl", "CMPhWQ4bWR3cNGFcLvdcLZXB", "W4VdVSksWO/dNIRdNmk8", "WQm4smkUW68rW6SVWPFdO8oJWOrp", "qcCGW53dLZ/cGCoQxSoQACkH", "W7eGWQ85W7NcSwftW73cKgpdNmoB", "WOLsoW", "WQldOSodsXK", "W5hdNmojFxCMeqy", "W4FdRbhcRSkcW6Szd2e", "FtDnWPKNW53dIwD1p8o2Aa", "W5ldSmo6WPRdPW", "WPZdHb8EWRtdGSkgW6qSWQ5qWRL/", "q0pcQCk+WPLAr3NcSq", "WPVdISkk", "tdqGW6FdS0JdICo6aG", "lNKSEXZcOmk7WQhdK2i", "W6rSW4ipWR/dPmo6W7nlW67cPmo1", "W5WpcCoQlW"];
  return Lg = function() {
    return g;
  }, Lg();
}
function aA(g, I) {
  const t = Lg();
  return aA = function(A, e) {
    A = A - (-206 * -48 + -5507 + -4146);
    let o = t[A];
    if (aA.DrpwsD === void 0) {
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
      aA.ghJNVa = a, g = arguments, aA.DrpwsD = !0;
    }
    const C = t[17008 + 4252 * -4], B = A + C, Q = g[B];
    return Q ? o = Q : (aA.GcUUts === void 0 && (aA.GcUUts = !0), o = aA.ghJNVa(o, e), g[B] = o), o;
  }, aA(g, I);
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return aA(B - -540, C);
  }
  const A = g();
  function e(C, B, Q, a, n) {
    return aA(B - -785, n);
  }
  function o(C, B, Q, a, n) {
    return aA(B - -500, Q);
  }
  function i(C, B, Q, a, n) {
    return aA(n - 769, a);
  }
  for (; ; )
    try {
      if (parseInt(t("*H*&", -303, -295, -315, -288)) / 1 + parseInt(t("n!wq", -281, -276, -295, -287)) / 2 + -parseInt(i(1033, 1028, 1040, "7Yp4", 1031)) / 3 + parseInt(t("qAuw", -299, -294, -307, -293)) / 4 * (-parseInt(o(-231, -243, "FKEU", -231, -249)) / 5) + -parseInt(t("E75B", -285, -297, -272, -270)) / 6 * (parseInt(t("3o@F", -300, -310, -300, -306)) / 7) + parseInt(e(-552, -538, -526, -549, "hdTw")) / 8 + -parseInt(o(-260, -256, "&Pgo", -265, -245)) / 9 * (-parseInt(e(-555, -542, -555, -529, "k*w8")) / 10) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Lg, -3 * 23663 + -9336 * -69 + 409 * -71);
async function jx(g) {
  function I(C, B, Q, a, n) {
    return aA(C - 984, n);
  }
  function t(C, B, Q, a, n) {
    return aA(B - 940, n);
  }
  const A = await window[I(1220, 1215, 1208, 1234, "FKEU") + "o"][I(1237, 1232, 1249, 1223, "&9X7") + "e"][e(1144, "6(5U", 1133) + "t"](o("2o^a", 1042, 1051), g);
  function e(C, B, Q, a, n) {
    return aA(Q - 873, B);
  }
  function o(C, B, Q, a, n) {
    return aA(Q - 788, C);
  }
  function i(C, B, Q, a, n) {
    return aA(a - 489, Q);
  }
  return Array[I(1219, 1208, 1233, 1216, "S)Ki")](new Uint8Array(A))[I(1240, 1245, 1237, 1245, "S)Ki")]((C) => C[t(1190, 1205, 1219, 1205, "K@h*") + I(1232, 1221, 1239, 1227, "^DVA")](8438 + -2 * 818 + -6786)[i(742, 731, "K@h*", 738) + e(1103, "k*w8", 1115)](-1 * -1187 + -57 * -87 + 32 * -192, "0"))[I(1248, 1233, 1241, 1254, "%lLd")]("");
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return fA(n - 91, Q);
  }
  function A(Q, a, n, s, x) {
    return fA(n - -451, a);
  }
  var e = g();
  function o(Q, a, n, s, x) {
    return fA(x - -668, s);
  }
  function i(Q, a, n, s, x) {
    return fA(a - 863, s);
  }
  function C(Q, a, n, s, x) {
    return fA(x - -193, n);
  }
  for (; ; )
    try {
      var B = -parseInt(t("ZNBc", 222, 211, 221, 211)) / 1 * (parseInt(i(991, 992, 994, "^0[A", 992)) / 2) + -parseInt(C(-75, -66, "sJ1S", -73, -66)) / 3 + -parseInt(C(-49, -64, "iYfC", -52, -54)) / 4 * (parseInt(o(-551, -544, -541, "b0cx", -542)) / 5) + parseInt(t("Yn#n", 234, 232, 236, 238)) / 6 * (-parseInt(A(-326, "!gyn", -320, -332, -328)) / 7) + -parseInt(A(-322, "cykB", -318, -325, -314)) / 8 * (parseInt(o(-520, -532, -531, "vc(Y", -532)) / 9) + parseInt(t("vc(Y", 219, 214, 207, 226)) / 10 * (parseInt(i(998, 987, 979, "N8(0", 976)) / 11) + parseInt(i(996, 1003, 1015, "[S1C", 1003)) / 12;
      if (B === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Jg, -1631317 * 1 + 360008 + 2232932);
function Jg() {
  var g = ["q0BdN8oFW550Evm", "W6ZdPtBdJCkzu8kKsW", "FCkPpMVcG2BdJmo7cZRcPa", "n8oljmooo8k7aw3cVCo2iCoV", "oSojkSodo8k6ybpcQ8ovbCoCW4GL", "rILIWRBdKvxdRCkKma", "W5i/BIDxFCkjn8kP", "WQ7cOSowW7iQfCkmW6e", "WRRdVCoiwsRdG8ktWQS", "WRRdUSo1rYRdImkTWOa", "fSkXyxPuWRiTWQuPWOtcTei", "WPRcSI02WQmFWPHI", "d8kSaCo+WQbTW6FcPSorW4vMW7JcMG", "W5WtW4jMWRxdSxFcUcznW79mfxG", "cSkTbSo/WQWVWQBcHSoNW5Ph", "pSoZpgVdNCoNWQ8Moq", "cSkqW5m2W6VcU1lcIfPtW7ZdKMNcRq", "W7yMySkZxCosWOXsWOnjW6Wi", "W7yOW6y8WPddGSkaBmoH", "o8okkSojpCk9Au3cL8oRiSoFW6q", "W6z0WO3dRbNcK8k4WQGQW7lcQq", "WRlcSCo/qHJdNmobW4BcSLvd", "W5uuW4PKWRxdUbldJHL4W7vR", "cSkQb8o7WQzIW6RdSmoeW61VW6/cT8kh"];
  return Jg = function() {
    return g;
  }, Jg();
}
function fA(g, I) {
  var t = Jg();
  return fA = function(A, e) {
    A = A - (-213 * -7 + -2391 + 1018);
    var o = t[A];
    if (fA.jdBzhu === void 0) {
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
      fA.JTPUjQ = C, g = arguments, fA.jdBzhu = !0;
    }
    var B = t[7381 + 1 * -4723 + -443 * 6], Q = A + B, a = g[Q];
    return a ? o = a : (fA.BdEFcm === void 0 && (fA.BdEFcm = !0), o = fA.JTPUjQ(o, e), g[Q] = o), o;
  }, fA(g, I);
}
async function Px(g) {
  const { Image: I } = je, t = await g.arrayBuffer(), A = new Uint8Array(t), e = {};
  e.bytes = A;
  const o = I.verify(e);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function Vx(g) {
  const { v4: { Metadata: I } } = je, t = { ...g };
  t.platform = je.Platform.WEB;
  const A = t, e = I.verify(A);
  if (e) throw Error(e);
  return I.create(A);
}
async function Xx(g) {
  const { Content: I } = je, { iv: t, key: A, message: e } = await Zx(g), o = { token: new Uint8Array(A), iv: t, schemaVersion: aa, bytes: new Uint8Array(e) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function _x(g) {
  const { Blob: I } = je.v4, t = I.verify(g);
  if (t) throw Error(t);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function zx(g, I) {
  const { DocumentContent: t } = je.v4, A = await Px(g), e = await Vx(I), o = {};
  o.image = A, o.metadata = e;
  const i = o, C = t.verify(i);
  if (C) throw Error(C);
  const B = t.create(i), Q = {};
  return Q.documentContent = B, _x(Q);
}
async function $x(g, I) {
  const t = await zx(g, I);
  return Xx(t);
}
class AE {
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
class eE {
  constructor() {
    p(this, "detectionRecord", []);
    p(this, "imagesWithTimestampForDuplicateDetection", new fC(na));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: t }) {
    const A = I.length / ra, e = A / (1 * -8747 + 192 * -17 + 12013), o = I.length / (487 * -2 + -5013 + 5989), i = await jx(I.slice(o - e, o + e)), C = {};
    C.imageHash = i, C.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: wa(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: t, imageData: A, timestamp: e }) {
    const o = ca(I), i = this.validationService.validateDetectedObject(o, t);
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
class tE {
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
const PC = Symbol("Comlink.proxy"), gE = Symbol("Comlink.endpoint"), IE = Symbol("Comlink.releaseProxy"), p0 = Symbol("Comlink.finalizer"), ag = Symbol("Comlink.thrown"), VC = (g) => typeof g == "object" && g !== null || typeof g == "function", oE = {
  canHandle: (g) => VC(g) && g[PC],
  serialize(g) {
    const { port1: I, port2: t } = new MessageChannel();
    return _C(g, I), [t, [t]];
  },
  deserialize(g) {
    return g.start(), $C(g);
  }
}, iE = {
  canHandle: (g) => VC(g) && ag in g,
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
  ["proxy", oE],
  ["throw", iE]
]);
function CE(g, I) {
  for (const t of g)
    if (I === t || t === "*" || t instanceof RegExp && t.test(I))
      return !0;
  return !1;
}
function _C(g, I = globalThis, t = ["*"]) {
  I.addEventListener("message", function A(e) {
    if (!e || !e.data)
      return;
    if (!CE(t, e.origin)) {
      console.warn(`Invalid origin '${e.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, e.data), B = (e.data.argumentList || []).map(Ee);
    let Q;
    try {
      const a = C.slice(0, -1).reduce((s, x) => s[x], g), n = C.reduce((s, x) => s[x], g);
      switch (i) {
        case "GET":
          Q = n;
          break;
        case "SET":
          a[C.slice(-1)[0]] = Ee(e.data.value), Q = !0;
          break;
        case "APPLY":
          Q = n.apply(a, B);
          break;
        case "CONSTRUCT":
          {
            const s = new n(...B);
            Q = EE(s);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: s, port2: x } = new MessageChannel();
            _C(g, x), Q = xE(s, [s]);
          }
          break;
        case "RELEASE":
          Q = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      Q = { value: a, [ag]: 0 };
    }
    Promise.resolve(Q).catch((a) => ({ value: a, [ag]: 0 })).then((a) => {
      const [n, s] = vg(a);
      I.postMessage(Object.assign(Object.assign({}, n), { id: o }), s), i === "RELEASE" && (I.removeEventListener("message", A), zC(I), p0 in g && typeof g[p0] == "function" && g[p0]());
    }).catch((a) => {
      const [n, s] = vg({
        value: new TypeError("Unserializable return value"),
        [ag]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, n), { id: o }), s);
    });
  }), I.start && I.start();
}
function BE(g) {
  return g.constructor.name === "MessagePort";
}
function zC(g) {
  BE(g) && g.close();
}
function $C(g, I) {
  return nI(g, [], I);
}
function _t(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function AB(g) {
  return Se(g, {
    type: "RELEASE"
  }).then(() => {
    zC(g);
  });
}
const Wg = /* @__PURE__ */ new WeakMap(), Yg = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (Wg.get(g) || 0) - 1;
  Wg.set(g, I), I === 0 && AB(g);
});
function QE(g, I) {
  const t = (Wg.get(I) || 0) + 1;
  Wg.set(I, t), Yg && Yg.register(g, I, g);
}
function nE(g) {
  Yg && Yg.unregister(g);
}
function nI(g, I = [], t = function() {
}) {
  let A = !1;
  const e = new Proxy(t, {
    get(o, i) {
      if (_t(A), i === IE)
        return () => {
          nE(e), AB(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => e };
        const C = Se(g, {
          type: "GET",
          path: I.map((B) => B.toString())
        }).then(Ee);
        return C.then.bind(C);
      }
      return nI(g, [...I, i]);
    },
    set(o, i, C) {
      _t(A);
      const [B, Q] = vg(C);
      return Se(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: B
      }, Q).then(Ee);
    },
    apply(o, i, C) {
      _t(A);
      const B = I[I.length - 1];
      if (B === gE)
        return Se(g, {
          type: "ENDPOINT"
        }).then(Ee);
      if (B === "bind")
        return nI(g, I.slice(0, -1));
      const [Q, a] = $o(C);
      return Se(g, {
        type: "APPLY",
        path: I.map((n) => n.toString()),
        argumentList: Q
      }, a).then(Ee);
    },
    construct(o, i) {
      _t(A);
      const [C, B] = $o(i);
      return Se(g, {
        type: "CONSTRUCT",
        path: I.map((Q) => Q.toString()),
        argumentList: C
      }, B).then(Ee);
    }
  });
  return QE(e, g), e;
}
function aE(g) {
  return Array.prototype.concat.apply([], g);
}
function $o(g) {
  const I = g.map(vg);
  return [I.map((t) => t[0]), aE(I.map((t) => t[1]))];
}
const eB = /* @__PURE__ */ new WeakMap();
function xE(g, I) {
  return eB.set(g, I), g;
}
function EE(g) {
  return Object.assign(g, { [PC]: !0 });
}
function vg(g) {
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
function Ee(g) {
  switch (g.type) {
    case "HANDLER":
      return XC.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function Se(g, I, t) {
  return new Promise((A) => {
    const e = rE();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== e || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: e }, I), t);
  });
}
function rE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const sE = "SAM v1.44.0 for idcards", cE = "/dot-assets/document/dot-Dkj5lBQc.js";
class dE extends eE {
  constructor(t, A) {
    super();
    p(this, "className", "DocumentImageProcessor");
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  optimizeImageBeforeDetection(t) {
    const A = yg(t), e = ya(t, A);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: t, timestamp: A }) {
    const e = this.optimizeImageBeforeDetection(t);
    let o = await this.detector.detect(e.data, e.resolution);
    o = ba(o, yg(t)), o = Na(o, e.resolution);
    const i = {};
    return i.image = t, i.timestamp = A, i.imageData = e.data, i.detectedObject = o, this.processDetectedObject(i);
  }
}
var Je, ce, de;
class hE {
  constructor(I) {
    j(this, Je);
    j(this, ce);
    j(this, de);
    T(this, Je, I), T(this, ce, /* @__PURE__ */ new Map());
  }
  validate() {
    k(this, Je).forEach((I) => {
      k(this, ce).set(I.name, I.evaluate());
    }), T(this, de, void 0);
  }
  isValid() {
    return k(this, de) === void (-406 * 23 + 356 + 8982) && T(this, de, Array.from(k(this, ce).values()).every((I) => I)), k(this, de);
  }
  get result() {
    return k(this, ce);
  }
  get validators() {
    return k(this, Je);
  }
}
Je = new WeakMap(), ce = new WeakMap(), de = new WeakMap();
var yt, he;
class Ge {
  constructor(I, t) {
    j(this, yt);
    j(this, he);
    T(this, yt, I), T(this, he, t);
  }
  get threshold() {
    return k(this, he);
  }
  get name() {
    return k(this, yt);
  }
  isValueBelowThreshold(I) {
    return I < k(this, he);
  }
  isValueAboveThreshold(I) {
    return I > k(this, he);
  }
}
yt = new WeakMap(), he = new WeakMap();
const lE = "isNotDim";
var wt;
class uE extends Ge {
  constructor(t, A) {
    super(lE, t);
    j(this, wt);
    T(this, wt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(k(this, wt));
  }
}
wt = new WeakMap();
const fE = "isNotSmall";
var pt;
class DE extends Ge {
  constructor(t, A) {
    super(fE, t);
    j(this, pt);
    T(this, pt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(k(this, pt));
  }
}
pt = new WeakMap();
const yE = "isNotBright";
var mt;
class wE extends Ge {
  constructor(t, A) {
    super(yE, t);
    j(this, mt);
    T(this, mt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(k(this, mt));
  }
}
mt = new WeakMap();
const pE = "isPresent";
var Gt;
class mE extends Ge {
  constructor(t, A) {
    super(pE, t);
    j(this, Gt);
    T(this, Gt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(k(this, Gt));
  }
}
Gt = new WeakMap();
const GE = "isSharp";
var kt;
class kE extends Ge {
  constructor(t, A) {
    super(GE, t);
    j(this, kt);
    T(this, kt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(k(this, kt));
  }
}
kt = new WeakMap();
var bt;
class bE extends Ge {
  constructor(t, A) {
    super("noHotspots", t);
    j(this, bt);
    T(this, bt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(k(this, bt));
  }
}
bt = new WeakMap();
const NE = "isNotOutOfBounds";
var Nt, We;
class FE extends Ge {
  constructor(t, A, e) {
    super(NE, t);
    j(this, Nt);
    j(this, We);
    T(this, Nt, A), T(this, We, e);
  }
  evaluate() {
    const t = DC(k(this, We), this.threshold, yg(k(this, We))), { bottomLeft: A, bottomRight: e, topLeft: o, topRight: i } = k(this, Nt), C = {};
    return C.topLeft = o, C.topRight = i, C.bottomLeft = A, C.bottomRight = e, ka(C, t);
  }
}
Nt = new WeakMap(), We = new WeakMap();
class RE {
  static getDocumentValidationInstance(I, t, A) {
    return new hE([new mE(I.confidenceThreshold, t.confidence), new kE(I.sharpnessThreshold, t.sharpness), new uE(I.brightnessLowThreshold, t.brightness), new wE(I.brightnessHighThreshold, t.brightness), new bE(I.hotspotsScoreThreshold, t.hotspots), new FE(I.outOfBoundsThreshold, t, A), new DE(I.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class SE extends tE {
  constructor() {
    super(...arguments);
    p(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, A) {
    const e = RE.getDocumentValidationInstance(this.getThresholds(), t, A);
    return e.validate(), e;
  }
}
const dt = class dt extends AE {
  constructor(t, A, e) {
    super(A, e);
    p(this, "detector");
    this.detector = t;
  }
  static async createInstance(t) {
    const A = dt.getWorkerPath(cE, t), e = {};
    e.type = "module";
    const o = new Worker(new URL(A, import.meta.url), e), i = $C(o), C = await new i(), B = new SE(), Q = new dE(C, B), a = new dt(C, Q, t);
    this._instance = a;
  }
  static async getInstance(t) {
    return !this._instance && await this.createInstance(t), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), pC(_A.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], On);
  }
  areVersionsCompatible(t) {
    return t === sE;
  }
};
p(dt, "_instance");
let aI = dt;
const ME = () => {
  const { handleError: g } = Lt(), { assetsDirectoryPath: I, thresholds: t } = MI(), [A, e] = GA();
  gA(() => {
    (async () => {
      const C = await aI.getInstance(I);
      try {
        await C.init(), e(C);
      } catch (B) {
        if (B instanceof Error) {
          g(K.fromError(B));
          return;
        }
      }
    })();
  }, [g, I]), gA(() => {
    A && A.setThresholds(t);
  }, [A, t]);
  const o = {};
  return o.controller = A, o;
};
function LE() {
  const { cameraFacing: g, captureMode: I, onPhotoTaken: t, sessionToken: A } = MI(), { controller: e } = ME(), o = zA(({ candidateSelectionImages: B, imageData: Q, protoMessage: a }) => {
    Xa(yC.DOCUMENT, B), t(Q, a);
  }, [t]), i = zA(({ processedImage: B }) => {
    pC(_A.INSTRUCTION_CHANGED, B.instructionCode), e && Va(_A.DETECTED_DOCUMENT_CHANGED, B.detection, e.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [e]), C = {};
  return C.captureMode = I, C.cameraFacing = g, C.controller = e, C.createProtoMessage = $x, C.onCapture = o, C.onDetection = i, C.sessionToken = A, C.customEvent = _A, C.fallbackInstruction = ZA.DOCUMENT_NOT_PRESENT, C.instructionCodeMap = ZA, C.checkToInstructionCodeMap = Nn, Dx(C);
}
const JE = () => {
  const { sunfish: g } = Jt(), { cameraResolution: I, detectionDetails: t, shouldCameraMirror: A, videoRef: e } = LE();
  return /* @__PURE__ */ D(bA, { children: /* @__PURE__ */ D(
    Ta,
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
          id: Tn,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, WE = (g) => /* @__PURE__ */ D(Ya, { cameraOptions: g, children: /* @__PURE__ */ D(JE, {}) });
function YE({ initAppState: g, onError: I }) {
  const [t, A] = GA(g), [e, o] = GA(), [i, C] = GA(!1), B = UA(I);
  gA(() => {
    B.current = I;
  }, [I]);
  const Q = {};
  return Q.appState = t, Q.setAppState = A, Q.error = e, Q.setError = o, Q.isCameraReady = i, Q.setIsCameraReady = C, Q.onErrorRef = B, Q;
}
function vE({ onError: g }) {
  const { appState: I, error: t, isCameraReady: A, onErrorRef: e, setAppState: o, setError: i, setIsCameraReady: C } = YE({
    initAppState: DA.LOADING,
    onError: g
  }), B = cx(I), Q = zA(
    (n) => {
      Wo(_A.STATE_CHANGED, { appState: DA.ERROR, error: n }), C(!1), e.current(n), i(n), o(DA.ERROR);
    },
    [e, i, o, C]
  ), a = zA(
    (n) => {
      Wo(_A.STATE_CHANGED, { appState: n }), o(n);
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
class UE {
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
    const C = Pt(i);
    try {
      await fetch("" + o + C + "&" + I, e);
    } catch (B) {
      console.error("Countly Error", B);
    }
  }
  async init(I, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = I;
    const A = { _app_version: hC() }, e = { organization: lC(window.location.href) }, o = Pt({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(e) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const t = Pt(I);
    await this.countlyFetch(t);
  }
  async sendEvent(I, t, A) {
    const e = {};
    e.key = I, e.count = 1, e.dur = A, e.segmentation = t;
    const o = [e], i = Pt({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, t) {
    await this.sendEvent(tB.AUTO_CAPTURE, I, t);
  }
}
const zt = new UE();
class KE {
  constructor() {
    p(this, "countly", zt);
  }
  createSegmentation(I) {
    return { appVersion: hC(), ...I };
  }
  init(I) {
    if (da()) return;
    const t = ax();
    zt.init(t, I);
  }
  endSession() {
    zt.endSession();
  }
  walleye(I, t) {
    const A = {};
    A.nocturne = I, A.customer = t;
    const e = this.createSegmentation(A);
    zt.sendAutoCaptureEvent(e);
  }
}
class HE extends KE {
  trackCaptureProcess({ averageFps: I, captureProcessDurationInMs: t, detection: A, deviceName: e, facingMode: o, imageResolution: i, instructionSet: C }) {
    if (!A) return;
    const B = rx(t), Q = this.createSegmentation({ hotspots: tt(A.hotspots), brightness: tt(A.brightness), confidence: tt(A.confidence), sharpness: tt(A.sharpness), smallestEdge: tt(A.smallestEdge), camera: xx(e, o), imageResolution: i.width + "x" + i.height, averageFps: sx(I), captureTime: Ex(B), instructionSet: C });
    this.countly.sendAutoCaptureEvent(Q, B);
  }
}
const qE = new HE();
let F;
const PA = new Array(-1 * -5380 + 1 * -5047 + -205).fill(void 0);
PA.push(void 0, null, !0, !1);
function xI(g) {
  return PA[g];
}
let YA = -4633 + -1 * 3421 + 2 * 4027, nt = null;
function xg() {
  return (nt === null || nt.byteLength === 4 * -1910 + 3340 + -860 * -5) && (nt = new Uint8Array(F.memory.buffer)), nt;
}
const Eg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, OE = typeof Eg.encodeInto == "function" ? function(g, I) {
  return Eg.encodeInto(g, I);
} : function(g, I) {
  const t = Eg.encode(g);
  I.set(t);
  const A = {};
  return A.read = g.length, A.written = t.length, A;
};
function ft(g, I, t) {
  if (t === void 0) {
    const C = Eg.encode(g), B = I(C.length, -6838 + 977 * 7) >>> -2929 + 892 * 3 + 11 * 23;
    return xg().subarray(B, B + C.length).set(C), YA = C.length, B;
  }
  let A = g.length, e = I(A, -289 + 58 * 5) >>> -4589 + -353 * -13;
  const o = xg();
  let i = 7191 * 1 + 96 * -97 + -3 * -707;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > 9978 + -1 * -6263 + 2 * -8057) break;
    o[e + i] = C;
  }
  if (i !== A) {
    i !== 2 * -4222 + 6773 + 1671 && (g = g.slice(i)), e = t(e, A, A = i + g.length * (9532 + -6736 * 1 + -2793), -11096 + -1233 * -9) >>> -1 * 9313 + 1996 + 7317;
    const C = xg().subarray(e + i, e + A), B = OE(g, C);
    i += B.written, e = t(e, A, i, 2322 * 4 + 9528 + -18815) >>> -1767 + 1 * 9409 + -7642;
  }
  return YA = i, e;
}
function gB(g) {
  return g == null;
}
let at = null;
function JA() {
  return (at === null || at.byteLength === 5835 + 5 * -1167) && (at = new Int32Array(F.memory.buffer)), at;
}
let ct = PA.length;
function TE(g) {
  g < 1303 * 7 + -2324 + 43 * -155 || (PA[g] = ct, ct = g);
}
function IB(g) {
  const I = xI(g);
  return TE(g), I;
}
const EI = {};
EI.ignoreBOM = !0, EI.fatal = !0;
const oB = typeof TextDecoder < "u" ? new TextDecoder("utf-8", EI) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && oB.decode();
function Ug(g, I) {
  return g = g >>> 0, oB.decode(xg().subarray(g, g + I));
}
function rI(g) {
  ct === PA.length && PA.push(PA.length + (3377 + 1 * -8669 + 79 * 67));
  const I = ct;
  return ct = PA[I], PA[I] = g, I;
}
let xt = null;
function iB() {
  return (xt === null || xt.byteLength === -1187 + -1 * 1339 + 2 * 1263) && (xt = new Uint32Array(F.memory.buffer)), xt;
}
function Ai(g, I) {
  const t = I(g.length * 4, 4) >>> 0, A = iB();
  for (let e = 0; e < g.length; e++)
    A[t / (-1 * -4232 + -3447 + -781 * 1) + e] = rI(g[e]);
  return YA = g.length, t;
}
function ei(g, I) {
  g = g >>> 5153 * -1 + -2 * 4217 + -7 * -1941;
  const t = iB(), A = t.subarray(g / (-3 * 1191 + 4273 * -2 + 12123), g / (-554 * 14 + 1947 + -5813 * -1) + I), e = [];
  for (let o = 5746 + 1 * 9803 + 219 * -71; o < A.length; o++)
    e.push(IB(A[o]));
  return e;
}
function ZE(g, I) {
  const t = ft(g, F.__wbindgen_malloc, F.__wbindgen_realloc), A = YA, e = ft(I, F.__wbindgen_malloc, F.__wbindgen_realloc), o = YA, i = F.is_mobile_supported(t, A, e, o);
  return qI.__wrap(i);
}
const sI = {};
sI.register = () => {
}, sI.unregister = () => {
};
const ti = typeof FinalizationRegistry > "u" ? sI : new FinalizationRegistry((g) => F.__wbg_licensevalidationresult_free(g >>> 0));
class qI {
  static __wrap(I) {
    I = I >>> -13 * -411 + 5011 + -10354;
    const t = Object.create(qI.prototype);
    return t.__wbg_ptr = I, ti.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = 457 * -3 + -1 * -9401 + -8030, ti.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, t, A, e, o) {
    var i = gB(t) ? 0 : ft(t, F.__wbindgen_malloc, F.__wbindgen_realloc), C = YA;
    const B = Ai(A, F.__wbindgen_malloc), Q = YA, a = Ai(e, F.__wbindgen_malloc), n = YA, s = ft(o, F.__wbindgen_malloc, F.__wbindgen_realloc), x = YA, r = F.licensevalidationresult_new(I, i, C, B, Q, a, n, s, x);
    return this.__wbg_ptr = r >>> 0, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 11638 + 22 * -529;
  }
  get features_json() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = JA()[A / (2047 * 1 + 9350 + -11393) + (15059 + 1 * -15059)], t = JA()[A / (-65 * 136 + 284 * 6 + -60 * -119) + (-7345 + 2 * 3673)];
      let e;
      return I !== -5904 + -4869 * 2 + 15642 && (e = Ug(I, t).slice(), F.__wbindgen_free(I, t * (53 * -47 + -9517 + -12009 * -1), 34 * -257 + -43 * -201 + -1 * -96)), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-464 * 10 + 21 * -275 + 171 * 61);
    }
  }
  get errors() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(e, this.__wbg_ptr);
      var I = JA()[e / (-1279 + -1 * -7081 + -5798) + (-2712 + 2712 * 1)], t = JA()[e / 4 + (-8573 * 1 + -1 * -71 + -773 * -11)], A = ei(I, t).slice();
      return F.__wbindgen_free(I, t * (3225 + 1 * 5446 + 27 * -321), 1 * 6367 + -1 * -382 + -6745), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-1659 * -3 + -9290 + 4329);
    }
  }
  get warnings() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(e, this.__wbg_ptr);
      var I = JA()[e / 4 + (3082 + -3082 * 1)], t = JA()[e / (40 * -191 + 2 * -1273 + 10190) + (549 * -6 + -1 * -2500 + 795)], A = ei(I, t).slice();
      return F.__wbindgen_free(I, t * (-665 * 6 + -2276 + -6 * -1045), -434 * -1 + -478 * -9 + -4732), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(19 * 142 + -514 + 8 * -271);
    }
  }
  get customer() {
    let I, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = JA()[o / (-3 * 691 + -8509 + 10586) + (554 + -1 * -4723 + 3 * -1759)], e = JA()[o / (7 * 1119 + 9638 + -1 * 17467) + (5428 + 1 * -7075 + 206 * 8)];
      return I = A, t = e, Ug(A, e);
    } finally {
      F.__wbindgen_add_to_stack_pointer(2 * -1444 + 4226 * 1 + 1 * -1322), F.__wbindgen_free(I, t, -1807 * -5 + -3588 + -389 * 14);
    }
  }
}
async function jE(g, I) {
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
    const A = xI(t), e = typeof A == "string" ? A : void 0;
    var o = gB(e) ? 0 : ft(e, F.__wbindgen_malloc, F.__wbindgen_realloc), i = YA;
    JA()[I / (94 * 29 + -1 * -2379 + 1 * -5101) + (1 * 7811 + -5038 * -1 + -12848)] = i, JA()[I / (1928 + 569 * 5 + -1 * 4769) + (650 * -3 + 15 * 467 + -5055)] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    IB(I);
  }, g.wbg.__wbindgen_string_new = function(I, t) {
    const A = Ug(I, t);
    return rI(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return rI(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return xI(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, t) {
    throw new Error(Ug(I, t));
  }, g;
}
function VE(g, I) {
  return F = g.exports, CB.__wbindgen_wasm_module = I, at = null, xt = null, nt = null, F;
}
async function CB(g) {
  if (F !== void 0) return F;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2lzX3ZhbGlkAPYBJWxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2ZlYXR1cmVzX2pzb24AgwEebGljZW5zZXZhbGlkYXRpb25yZXN1bHRfZXJyb3JzAJ4BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X3dhcm5pbmdzAJ8BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2N1c3RvbWVyALEBE2lzX21vYmlsZV9zdXBwb3J0ZWQABxFfX3diaW5kZ2VuX21hbGxvYwDXARJfX3diaW5kZ2VuX3JlYWxsb2MA8QEfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgCvAg9fX3diaW5kZ2VuX2ZyZWUAqAIJjAIBAEEBC5IBmAIcnQKpAqsCmAKdAuYBqgKVAosCwwFdXPQBHqIBzwGfAvIBZj+zAnb1AZYC7AFFpgL9AdkB/AH9AfsBgwKCAvwB/AH+Af8BgAJYhQFpDqkCbWqTAvkBpgKBAqwC+gFjkgLAAokCigKNApQC4gGUAt8BVLACwAKMAsACsQKUAo8BwALmAegBbuMBngIx2wGyAllvpAE67wEmzgHwAcEBW8AC0gGxApQCrQJktwKEAvMBxwEqmgKnApsCjgGaAUc1Fo4CnAKlAoUCoAKgAoYCoQKhAocCogKiAo4CkAKjAqMCkQKkAqQCe9QB9wGIAt0BmwGWAZgBrgJluAJ/uQLaAaUBUboCCqjWCLsCkUQCD38FfiMAQbAJayIGJAAgAiAEIAMgBUkiCBshDCAEIAIgCBshDiADIAUgAyAFSxshCQJAAkACQAJAIAMgBSAIGyINQSFPBEACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDUGBAk8EQEEAIQggBkEANgKACCAGQQA2AqgIIAZBgAhqIgIgDCAMIA0gCUEDbiISQQFqIgogCiANSxsiD0EDdGoiEBBDIAZB+AhqIAJBMBC+AhogDSAPayICIAogAiAKSRshESAGQYAJaiELIAYoAvgIIRMCQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyIHRQ0AIAYoAoAJIRQDQCADIAUgBEEBcSIEGyECIAdBA3QgFCALIAQbakEIaykDAFBFBEAgAiEIDAILIAIEQCAGQfgIakEEQSggBBtqIAJBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALCyAGQTBqIAtBGGopAwA3AwAgBkEoaiALQRBqKQMANwMAIAZBIGogC0EIaikDADcDACAGIAspAwA3AxggBiAGKAKkCTYCPCAGIAU2AjggBiADNgIUIAYgEzYCECAGQQJBASAIGzoAQCAPIBFqIgcgDUsNAUEAIQIgBkEANgKACCAGQQA2AqgIIAZBgAhqIgMgECAQIBFBA3RqEEMgBkH4CGogA0EwEL4CGiAGQYAJaiEIIAYoAvgIIRACQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyILBEAgBigCgAkhEQNAIAMgBSAEQQFxIg8bIQQgC0EDdCARIAggDxtqQQhrKQMAQgBSDQIgBARAIAZB+AhqQQRBKCAPG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgsNAAsLQQAhBAsgBkHoAGogCEEYaiILKQMANwMAIAZB4ABqIAhBEGoiDykDADcDACAGQdgAaiAIQQhqKQMANwMAIAYgCCkDADcDUCAGIAYoAqQJNgJ0IAYgBTYCcCAGIAM2AkwgBiAQNgJIIAZBAkEBIAQbOgB4IAZBADYCgAggBkEANgKoCCAGQYAIaiIDIAwgB0EDdGogDCANQQN0ahBDIAZB+AhqIANBMBC+AhogBigC+AghDQJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgxFDQAgBigCgAkhEANAIAMgBSAEQQFxIgcbIQQgDEEDdCAQIAggBxtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAHG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgwNAAsLIAZBoAFqIAspAwA3AwAgBkGYAWogDykDADcDACAGQZABaiAIQQhqKQMANwMAIAYgCCkDADcDiAEgBiAGKAKkCTYCrAEgBiAFNgKoASAGIAM2AoQBIAYgDTYCgAEgBkECQQEgAhs6ALABIAkgEk0NAiAJIAprIgIgCiACIApJGyEMQQAhAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA4gCkEDdGoiDRBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCEPAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiB0UNACAGKAKACSEQA0AgAyAFIARBAXEiCxshBCAHQQN0IBAgCCALG2pBCGspAwBQRQRAIAQhAgwCCyAEBEAgBkH4CGpBBEEoIAsbaiAEQQFrNgIAIAYoAqAJIQUgBigC/AghAwsgAyAFIAVBBEsiBBsiBw0ACwsgBkHYAWogCEEYaikDADcDACAGQdABaiAIQRBqKQMANwMAIAZByAFqIAhBCGopAwA3AwAgBiAIKQMANwPAASAGIAYoAqQJNgLkASAGIAU2AuABIAYgAzYCvAEgBiAPNgK4ASAGQQJBASACGzoA6AEgCiAMaiIPIAlLDQNBACECIAZBADYCgAggBkEANgKoCCAGQYAIaiIDIA0gDSAMQQN0ahBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCENAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiBwRAIAYoAoAJIQsDQCADIAUgBEEBcSIMGyEEIAdBA3QgCyAIIAwbakEIaykDAEIAUg0CIAQEQCAGQfgIakEEQSggDBtqIARBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALC0EAIQQLIAZBkAJqIAhBGGopAwA3AwAgBkGIAmogCEEQaikDADcDACAGQYACaiAIQQhqKQMANwMAIAYgCCkDADcD+AEgBiAGKAKkCTYCnAIgBiAFNgKYAiAGIAM2AvQBIAYgDTYC8AFBASELIAZBAkEBIAQbOgCgAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA9BA3RqIA4gCUEDdGoQQyAGQfgIaiADQTAQvgIaIAZBgAlqIQkgBigC+AghDgJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgdFDQAgBigCgAkhDANAIAMgBSAEQQFxIggbIQQgB0EDdCAMIAkgCBtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAIG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgcNAAsLIAZByAJqIAlBGGopAwA3AwAgBkHAAmogCUEQaikDADcDACAGQbgCaiAJQQhqKQMANwMAIAYgCSkDADcDsAIgBiAGKAKkCTYC1AIgBiAFNgLQAiAGIAM2AqwCIAYgDjYCqAIgBkECQQEgAhs6ANgCIAZB4AJqIgIgBkEQaiAGQYABahAhIAZBmANqIgMgBkG4AWogBkGoAmoQISAGQdADaiACIAZByABqEB8gBkGIBGogAyAGQfABahAfAkAgBi0AQCICQQFGDQACQAJAAkAgBi0A6AEiC0EBaw4CAwEACyACDQFBAiELDAILQQIhCyACDQELQQAhCwsgBkH4CGoiAiAGKAI4IgVBBUkEfyAGQRhqBSAGKAIUIQUgBigCGAsgBSAGKALgASIDQQVJBH8gBkHAAWoFIAYoArwBIQMgBigCwAELIAMQcCAGQcAEaiALIAIQQkEBIQUCQCAGLQCwASICQQFGDQACQAJAAkAgBi0A2AIiBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAKoASIDQQVJBH8gBkGIAWoFIAYoAoQBIQMgBigCiAELIAMgBigC0AIiBEEFSQR/IAZBsAJqBSAGKAKsAiEEIAYoArACCyAEEHAgBkH4BGogBSACEEIgBkGACGoiAyAGQeACakE4EL4CGiACIAZByABqQTgQvgIaIAZBkAdqIAMgAhApIAMgBkGYA2pBOBC+AhogAiAGQfABakE4EL4CGiAGQcgHaiADIAIQKUEBIQUCQCAGLQDAByICQQFGDQACQAJAAkAgBi0A+AciBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAK4ByIDQQRNBH8gBkGYB2oFIAYoApQHIQMgBigCmAcLIAMgBigC8AciBEEETQR/IAZB0AdqBSAGKALMByEEIAYoAtAHCyAEEHAgBkGwBWogBSACEEIgBkGQB2oQjwIgBkHIB2oQjwJBASEFAkAgBi0AgAQiAkEBRg0AAkACQAJAIAYtALgEIgVBAWsOAgMBAAsgAg0BQQIhBQwCC0ECIQUgAg0BC0EAIQULIAZB+AhqIgIgBigC+AMiA0EETQR/IAZB2ANqBSAGKALUAyEDIAYoAtgDCyADIAYoArAEIgRBBE0EfyAGQZAEagUgBigCjAQhBCAGKAKQBAsgBBBwIAZB6AVqIAUgAhBCIAZBgAhqIgMgBkHQA2pBOBC+AhogAiAGQYABakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQMDQCAFIBUgBSkDACIVQgGGIhd8IhY3AwAgFiAXVK0gFUI/iHwhFSAFQQhqIQUgA0EIayIDDQALIBVQDQBBBCEDAn8gBigCoAkiBEEETQRAIAZBgAlqIQcgBAwBCyAGQfgIakEEciECIAYoAoAJIQcgBCEDIAYoAvwICyEFIAMgBUYEQCAGQfgIaiICEKABIAYoAvwIIQUgBigCgAkhByACQQRyIQILIAcgBUEDdGogFTcDACACIAIoAgBBAWo2AgALIAZBkAdqIgQgBkH4CGoiAkEwEL4CGiAGQYAIaiIDIAkgBBBCIAIgBkEQakE4EL4CGiAEIAMgAhAlIAMgBkGIBGpBOBC+AhogAiAGQagCakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQdgGaiIDIAZB+AhqIgJBMBC+AhogBkGACGoiBCAJIAMQQiACIAZBuAFqQTgQvgIaIAZByAdqIAQgAhAlQQEhBQJAIAYtAMAHIgJBAUYNAAJAAkACQCAGLQD4ByIFQQFrDgIDAQALIAINAUECIQUMAgtBAiEFIAINAQtBACEFCyAGQYAIaiIJIAYoArgHIgNBBE0EfyAGQZgHagUgBigClAchAyAGKAKYBwsgAyAGKALwByIEQQRNBH8gBkHQB2oFIAYoAswHIQQgBigC0AcLIAQQcCAGQfgIaiIDIAUgCRBCIAZBkAdqIgQQjwIgBkHIB2oiBRCPAiAJIAMgBkGwBWoiCBAtIAYtALAIIQIgBSAJQTAQvgIaIAMgBUIDEE0gBCADQTAQvgIaIAZBoAZqIgcgAiAEEEIgAyAIQTgQvgIaIAkgAyAGQegFaiIJEC0gBi0AsAghAiAGQcgHaiAGQYAIakEwEL4CGiADIAVCAhBNIAZBkAdqIAZB+AhqQTAQvgIaIAZB2AZqIAIgBBBCIAMgCUE4EL4CGiAEIAMgBkHABGoQLSADIAdBOBC+AhogBi0AqAkiAkEBRgRAIAYtAMAHIQIgBigCuAciA0EETQR/IAZBmAdqBSAGKAKUByEDIAYoApgHCyEFIAZBADYCyAcgBkEANgLwByAGQcgHaiIEIAUgBSADQQN0ahBDIAZBgAhqIARBMBC+AhogBiACOgCwCAwLCwJAAkACQAJAIAYtAMAHIgNBAWsOAgABAgsgBkGACGogBkGgBmpBMBC+AhogBkG0CGogBkGsCWooAAA2AAAgBkECIAJrOgCwCCAGIAYoAKkJNgCxCAwOCyACRQ0BDAsLIAJFDQoLIAZBgAhqIgIgBkGgBmpBMBC+AhogBkHIB2oiBCACIAZBkAdqEBQgAiADIAQQQgwLCyAJIA1BAXYiCkkNAyAMIApBA3QiAmohECAGQfgIaiIDIAkgCmsiESANIAprIhJqQQFqIhMQfCAGQZAHaiADQTAQvgIaIAIgDmohFCAGQbgHaiEJIAYoArgHIgVBBE0EfyAGQZgHagUgBigClAchBSAGKAKYBwsgBSAQIBIgFCAREAYgBkGQB2pBBHIhCCAGQZgHaiEEIAYoApgHIQcDQCAEIQIgBigCuAciBSEDIAVBBUkiC0UEQCAGKAKUByEDIAchAgsCQCADRQ0AIANBA3QgAmpBCGspAwBCAFINACAJIQMgC0UEQCAGKAKUByEFIAghAwsgBUUNASADIAVBAWs2AgAMAQsLIAEgCkkNBCAEIQMgACAKQQN0aiIPIAEgCmsiCyAFQQVPBH8gBigClAchBSAHBSADCyAFEHggASANQX5xIgJJDQUgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAAgAkEDdGogASACayAFIAMQeCAJIQMgBigCuAciBUEFTwRAIAYoApQHIQUgCCEDCyAFBEAgA0EANgIACyAGQZAHaiATEEkgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAUgAyAMIAogDiAKEAYgBigCmAchBwNAIAQhAiAGKAK4ByIFIQMgBUEFSSINRQRAIAYoApQHIQMgByECCwJAIANFDQAgA0EDdCACakEIaykDAEIAUg0AIAkhAyANRQRAIAYoApQHIQUgCCEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBCEDIAAgASAFQQVPBH8gBigClAchBSAHBSADCyAFEHggBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIA8gCyAFIAMQeCAGQfgIaiICIBAgEiAMIAoQGyAGLQD4CCEAIAZByAdqIAZBgAlqIgFBMBC+AhogAiAUIBEgDiAKEBsgBi0A+AghAiAGQYAIaiABQTAQvgIaIABBAUYNBwJAAkACQCACQQFrDgIKAAELIAANAQwICyAADQcLIAkhAyAGKAK4ByIFQQVPBEAgBigClAchBSAIIQMLIAUEQCADQQA2AgALIAZBkAdqIBMQSSAEIQUgBigCuAciA0EFTwRAIAYoApgHIQUgBigClAchAwsgBSADIAYoAvAHIgBBBE0EfyAGQdAHagUgBigCzAchACAGKALQBwsgACAGKAKoCCICQQRNBH8gBkGICGoFIAYoAoQIIQIgBigCiAgLIAIQBiAGKAKYByEBA0AgBCEAIAYoArgHIgUhAyAFQQVJIgJFBEAgBigClAchAyABIQALAkAgA0UNACADQQN0IABqQQhrKQMAQgBSDQAgCSEDIAJFBEAgBigClAchBSAIIQMLIAVFDQEgAyAFQQFrNgIADAELCyAPIAsgBUEFTwR/IAYoApQHIQUgAQUgBAsgBRBMDAcLIAcgDUGI9MAAELgBAAsgCiAJQZj0wAAQuAEACyAPIAlBqPTAABC4AQALQYmYwgBBI0HY88AAEN4BAAsgCiABQejzwAAQuQEACyACIAFB+PPAABC5AQALIA8gCyAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIAUgBigCqAgiA0EETQR/IAZBiAhqBSAGKAKECCEDIAYoAogICyADEAYLIAZBgAhqEI8CIAZByAdqEI8CIAZBkAdqEI8CDAgLAkACQAJAAkAgBigCuAciBUEETQR/IAZBmAdqBSAGKAKUByEFIAYoApgHCyAFIAYoAqAJIgRBBE0EfyAGQYAJagUgBigC/AghBCAGKAKACQsgBBCoAUH/AXEOAgECAAsgBkGACGoiAiAGQaAGakEwEL4CGiACIAZBkAdqEHUgBkHIB2oiBCACQTAQvgIaIAJBAiADayAEEEIMBAsgBkECNgLACCAGQgQ3ArgIIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAZBuAhqEDMgBkGACGoiAyACQTAQvgIaIANBBHIhAiAGQYgIaiEJIAZBqAhqIQggBigCiAghBwNAIAkhBCAGKAKoCCIFIQMgBUEFSSIORQRAIAchBCAGKAKECCEDCwJAIANFDQAgA0EDdCAEakEIaykDAEIAUg0AIAghAyAORQRAIAYoAoQIIQUgAiEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBkG4CGogBkGACGoiAkEwEL4CGiAGQoCAgIAgNwLwCCAGQYyswgA2AuwIIAZBADYCgAggBkEANgKoCCACIAZB7AhqEDMgBkHIB2ogAkEwEL4CGiAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIQQgBkG4CGogBRDQASAGKALgCCIDQQRNBH8gBkHACGoFIAYoArwIIQMgBigCwAgLIAMgBUcNBCAGQeAIaiEJIAQgBUEDdBC+AhogBkG4CGpBBHIhAiAGQcAIaiEIIAYoAsAIIQcDQCAIIQQgBigC4AgiBSEDIAVBBUkiDkUEQCAHIQQgBigCvAghAwsgA0UNAiADQQN0IARqQQhrKQMAQgBSDQIgCSEDIA5FBEAgBigCvAghBSACIQMLIAVFDQAgAyAFQQFrNgIADAALAAsgBkGACGoiAiAGQaAGakEwEL4CGiAGQcgHaiIEIAZBkAdqIAIQGiACIAMgBBBCDAILIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CCyAGLQCwCCECIAZByAdqIgMgBkGACGpBMBC+AhogBkH4CGoiBCADQgIQTSAGQbgIaiIFIARBMBC+AhogAyACIAUQQiAGKAKgBSIDQQRNBH8gBkGABWoFIAYoAvwEIQMgBigCgAULIQUgBi0AqAUhCSAGQQA2AoAIIAZBADYCqAggBkGACGoiAiAFIAUgA0EDdGoQQyAGQfgIaiACQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQYAIaiIDIAZB+AhqIgJBMBC+AhogAiAJIAMQQiAGQaAGaiAGQcgHaiACECkgAiAGQZAHaiICQTgQvgIaIAYtAIgHIgVBAUYEQCADIAJBOBC+AhoMBAsCQAJAAkACQAJAIAYtAKgJIgNBAWsOAgABAgsgBigCgAciBEEETQR/IAZB4AZqBSAGKALcBiEEIAYoAuAGCyEDIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAMgAyAEQQN0ahBDIAZBgAhqIAJBMBC+AhogBiAFOgCwCAwDCyAFRQ0BDAULIAVFDQQLAkACQAJAAkAgBigCoAkiBEEETQR/IAZBgAlqBSAGKAL8CCEEIAYoAoAJCyAEIAYoAoAHIgJBBE0EfyAGQeAGagUgBigC3AYhAiAGKALgBgsgAhCoAUH/AXEOAgECAAsgBkGACGoiAiAGQZAHakEwEL4CGiAGQcgHaiIDIAZB2AZqIAIQGiACIAUgAxBCDAcLIAZBAjYCwAggBkIENwK4CCAGQQA2AsgHIAZBADYC8AcgBkHIB2oiAiAGQbgIahAzIAZBgAhqIgMgAkEwEL4CGiADQQRyIQIgBkGICGohCSAGQagIaiEIIAYoAogIIQcDQCAJIQQgBigCqAgiBSEDIAVBBUkiDkUEQCAHIQQgBigChAghAwsCQCADRQ0AIANBA3QgBGpBCGspAwBCAFINACAIIQMgDkUEQCAGKAKECCEFIAIhAwsgBUUNASADIAVBAWs2AgAMAQsLIAZBuAhqIAZBgAhqIgJBMBC+AhogBkKAgICAIDcC8AggBkGMrMIANgLsCCAGQQA2AoAIIAZBADYCqAggAiAGQewIahAzIAZByAdqIAJBMBC+AhogBigC8AciBUEETQR/IAZB0AdqBSAGKALMByEFIAYoAtAHCyEEIAZBuAhqIAUQ0AEgBigC4AgiA0EETQR/IAZBwAhqBSAGKAK8CCEDIAYoAsAICyADIAVHDQQgBkHgCGohCSAEIAVBA3QQvgIaIAZBuAhqQQRyIQIgBkHACGohCCAGKALACCEHA0AgCCEEIAYoAuAIIgUhAyAFQQVJIg5FBEAgByEEIAYoArwIIQMLIANFDQIgA0EDdCAEakEIaykDAEIAUg0CIAkhAyAORQRAIAYoArwIIQUgAiEDCyAFRQ0AIAMgBUEBazYCAAwACwALIAZBgAhqIgIgBkGQB2pBMBC+AhogAiAGQdgGahB1IAZByAdqIgQgAkEwEL4CGiACIAMgBBBCDAULIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CDAMLIAMgBUH88cAAELsBAAsgAyAFQfzxwAAQuwEACyAGQYAIaiICIAZBkAdqQTAQvgIaIAZByAdqIgQgAiAGQdgGahAUIAIgAyAEEEILIAZB+AhqIgIgBkGACGoiAyAGQfgEahAtIAZBkAdqIAJBOBC+AhogAiAGQdgGaiIEQTgQvgIaIAMgAiAGQaAGahAtIAQgA0E4EL4CGiAAIAEgBigC6AQiBUEETQR/IAZByARqBSAGKALEBCEFIAYoAsgECyAFEHggBkH4CGoiAiAGQdgGakE4EL4CGiAGQYAIaiACIApBBnQQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZBkAdqQTgQvgIaIAIgAyAKQQd0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqIgIQjwIgBkH4CGoiAyAGQaAGakE4EL4CGiACIAMgCkHAAWwQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZB+ARqQTgQvgIaIAIgAyAKQQh0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqEI8CIAZBwARqEI8CDAELIA1FDQAgDCANQQN0aiEKIAFBA3QhAiAJQQN0IQgDQCABIAdJDQICQCAMKQMAIhhQDQAgCSABIAdrSw0EIAlFDQAgACEFIA4hAyAJIQRCACEVA0AgBiADKQMAQgAgGBCwASAFIBUgBSkDAHwiFiAGKQMAfCIZNwMAIBYgGVatIAZBCGopAwAgFSAWVq18fCEVIAVBCGohBSADQQhqIQMgBEEBayIEDQALIBVQDQAgCCEFA0AgAiAFRg0GIAAgBWoiAyAVIAMpAwB8IhY3AwAgBUEIaiEFIBcgFSAWVq18IRUgFUIAUg0ACwsgB0EBaiEHIAJBCGshAiAAQQhqIQAgDEEIaiIMIApHDQALCyAGQbAJaiQADwsgByABQcjzwAAQuQEAC0GJmMIAQSNBgPPAABDeAQALQZDzwABBJUG488AAENEBAAuxtQEDIH8IfgF8IwBBoANrIgUkACAFIAE2AsgBIAUgATYCxAEgBSAANgLAASAFQSBqIAVBwAFqIgAQxAEgBSgCICEbIAUoAiQhHCAFIAM2AsgBIAUgAzYCxAEgBSACNgLAASAFQRhqIAAQxAEgBSgCGCEdIAVBEGogBSgCHCIVEOABIAUoAhQhIyAFKAIQIB0gFRC+AiEZIAVB0AFqQgA3AgAgBUGAAToA2AEgBUKAgICAEDcCyAEgBSAcNgLEASAFIBs2AsABIAVB4ABqIAAQCQJAAkACfwJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAIAUtAGBBBkcEQCAFQfACaiAFQfAAaikDADcDACAFQegCaiAFQegAaikDADcDACAFIAUpA2A3A+ACAkAgBSgCyAEiASAFKALEASIDSQRAIAUoAsABIQIDQCABIAJqLQAAQQlrIgBBF0tBASAAdEGTgIAEcUVyDQIgAyABQQFqIgFHDQALIAUgAzYCyAELIAVB0AJqIAVB8AJqKQMANwMAIAUgBS8B4gI7AbACIAUgBSkD6AI3A8gCIAUtAOECIQAgBS0A4AIhAiAFKALkAiEBIAUoAtABBEAgBSgCzAEQIgsgAkEGRg0EIAVBQGsgBUHQAmopAwA3AwAgBSABNgI0IAUgBS8BsAI7ATIgBSAFKQPIAjcDOCAFIAA6ADEgBSACOgAwIAVBMGoiEyEMIwBBkAdrIgQkACAEQYAGaiIAQZzWwABBgAEQSyAEQeAGaiIIQZzXwABBBBBLIARBsAZqIABBMBC+AhogBCgCsAYhDQJAAkACQAJAAkACfyAEKALYBiIBQQVPBEAgBCgCtAYiAkUNAiAEKAK4BgwBCyABRQ0BIAEhAiAEQbgGagshACACQQZ0IAJBA3QgAGpBCGspAwB5p2tBgCBNDQBBCyEADAELIARB6AZqIgYhAiAEQYgHaigCACIHIQAgB0EFTwRAIAQoAugGIQIgBEHkBmooAgAhAAsgAARAIABBA3QhA0EBIQADQCAAQQFxRQRAQQ0hAAwDCyACKQMAICV8ISVBACEAIAJBCGohAiADQQhrIgMNAAsLIAYhAiAHIgNBBU8EQCAEQeQGaigCACEDIAQoAugGIQILAn8CQCABQQVPBEAgAiADIAQoArgGIAQoArQGEKgBQf8BcUECTw0BQQghAAwDC0EIIQAgAiADIARBuAZqIgIgARCoAUH/AXFBAkkNAiACDAELIAQoArQGIQEgBCgCuAYLQQghACABRQ0ALQAAQQFxRQ0AQQkhACAHQQVPBH8gBCgC6AYhBiAEQeQGaigCAAUgBwtFDQAgBi0AAEEBcUUNACAlQgJUBEBBDCEADAELICVCgICAgCBUDQFBDSEACyAEQbAGaiIBEI8CIAgQjwJBuLHCAC0AABpBPBAKIgJFDQEgAiAlNwIEIAIgADYCACACQQxqIARBmAJqQTAQvgIaIARCBDcCuAYgBEGY5cAANgK0BiAEIAI2ArAGIAFBoNfAABAuQbDXwAAQWiECDAILIAQoArQGIQIgBCkDuAYhJCAEQZgCaiIAIARBwAZqQdAAEL4CGiAEQcgBaiIBIABB0AAQvgIaIARB+ABqIgAgAUHQABC+AhogBCAkNwMgIARBKGogAEHQABC+AhogBCACNgIcIAQgDTYCGAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDEHA18AAQRIQcyIBBEAgAS0AAEEDRiIARQ0HIAEoAgRBACAAGyEKIARBsAZqIAFBDGooAgAiC0ECdiALQQNxQQBHakEDbBDMASAEKAK4BiEQIAQoArAGIRYgC0EHcSIAIQMgAA4GAQIDBAUCBgtBuLHCAC0AABpBARAKIgBFDQ4gAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQaTYwAAQLiECDA0LQQghAwwEC0IBISUgC0UNCiAKIAtBAWsiAGotAAAiAUE9Rg0KIAFBkNrAAGotAABB/wFHDQogAa1CCIYgAK1CIIaEISUMCgtBCiEDDAILQQshAwwBC0EMIQMLIAtBA3YgAEEAR2ohEUEAIQEgCyADayIAQQAgACALTRsiDUEgSQRAQQAhAwwGCyANQSBrIQJBACEDQQAhCAJAA0AgCEFgRg0DIAhBIGoiASALSw0EIANBGmoiACAQSw0FAkACQCAIIApqIg4tAAAiB0GQ2sAAajEAACIpQv8BUQ0AIA5BAWotAAAiB0GQ2sAAajEAACIoQv8BUQRAIAhBAXIhCAwBCyAOQQJqLQAAIgdBkNrAAGoxAAAiJUL/AVEEQCAIQQJyIQgMAQsgDkEDai0AACIHQZDawABqMQAAIipC/wFRBEAgCEEDciEIDAELIA5BBGotAAAiB0GQ2sAAajEAACImQv8BUQRAIAhBBHIhCAwBCyAOQQVqLQAAIgdBkNrAAGoxAAAiJEL/AVEEQCAIQQVyIQgMAQsgDkEGai0AACIHQZDawABqMQAAIitC/wFRBEAgCEEGciEIDAELIA5BB2otAAAiB0GQ2sAAajEAACInQv8BUg0BIAhBB3IhCAsgB61CCIYgCK1CIIaEISUMCQsgAyAWaiIAIChCNIYgKUI6hoQiKCAlQi6GhCIlICpCKIaEICZCIoaEIiYgJEIchoQiJCArQhaGhCAnQhCGhCInQoD+A4NCKIYgJ0KAgPwHg0IYhiAnQoCAgPgPg0IIhoSEICRCCIhCgICA+A+DICZCGIhCgID8B4OEICVCKIhCgP4DgyAoQjiIhISENwAAQQghByAOQQhqLQAAIgZBkNrAAGoxAAAiKUL/AVENBkEJIQcgDkEJai0AACIGQZDawABqMQAAIihC/wFRDQZBCiEHIA5BCmotAAAiBkGQ2sAAajEAACIlQv8BUQ0GQQshByAOQQtqLQAAIgZBkNrAAGoxAAAiKkL/AVENBkEMIQcgDkEMai0AACIGQZDawABqMQAAIiZC/wFRDQZBDSEHIA5BDWotAAAiBkGQ2sAAajEAACIkQv8BUQ0GQQ4hByAOQQ5qLQAAIgZBkNrAAGoxAAAiK0L/AVENBkEPIQcgDkEPai0AACIGQZDawABqMQAAIidC/wFRDQYgAEEGaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEQIQcCQCAOQRBqLQAAIgZBkNrAAGoxAAAiKUL/AVENAEERIQcgDkERai0AACIGQZDawABqMQAAIihC/wFRDQBBEiEHIA5BEmotAAAiBkGQ2sAAajEAACIlQv8BUQ0AQRMhByAOQRNqLQAAIgZBkNrAAGoxAAAiKkL/AVENAEEUIQcgDkEUai0AACIGQZDawABqMQAAIiZC/wFRDQBBFSEHIA5BFWotAAAiBkGQ2sAAajEAACIkQv8BUQ0AQRYhByAOQRZqLQAAIgZBkNrAAGoxAAAiK0L/AVENAEEXIQcgDkEXai0AACIGQZDawABqMQAAIidC/wFRDQAgAEEMaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEYIQcgDkEYai0AACIGQZDawABqMQAAIilC/wFRDQJBGSEHIA5BGWotAAAiBkGQ2sAAajEAACIoQv8BUQ0CQRohByAOQRpqLQAAIgZBkNrAAGoxAAAiJUL/AVENAkEbIQcgDkEbai0AACIGQZDawABqMQAAIipC/wFRDQJBHCEHIA5BHGotAAAiBkGQ2sAAajEAACImQv8BUQ0CQR0hByAOQR1qLQAAIgZBkNrAAGoxAAAiJEL/AVENAkEeIQcgDkEeai0AACIGQZDawABqMQAAIitC/wFRDQJBHyEHIA5BH2otAAAiBkGQ2sAAajEAACInQv8BUQ0CIABBEmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEEayERIANBGGohAyABIQggASACSw0IDAELCyAGrUIIhiAHIAhyrUIghoQhJQwHCyAGrUIIhiAHIAhyrUIghoQhJQwGC0G4scIALQAAGkEBEAoiAEUNByAAQQE6AAAgBEIENwK4BiAEQbDlwAA2ArQGIAQgADYCsAYgBEGwBmpBpNjAABAuIQIMBgtBYEEAQeSOwAAQugEACyABIAtB5I7AABC4AQALIAAgEEH0jsAAELgBAAsgBq1CCIYgByAIcq1CIIaEISUMAQsCQAJAIA1BCEkNACABIA1BCGsiAE8NAAJAAkACQAJAAkADQCABQQhqIQYgAUF4Rg0CIAYgC0sNAyADQQhqIQIgA0F3Sw0EIAIgEEsNBSABIApqIgctAAAiAkGQ2sAAajEAACIpQv8BUQ0BIAdBAWotAAAiAkGQ2sAAajEAACIoQv8BUQRAIAFBAXIhAQwCCyAHQQJqLQAAIgJBkNrAAGoxAAAiJUL/AVEEQCABQQJyIQEMAgsgB0EDai0AACICQZDawABqMQAAIipC/wFRBEAgAUEDciEBDAILIAdBBGotAAAiAkGQ2sAAajEAACImQv8BUQRAIAFBBHIhAQwCCyAHQQVqLQAAIgJBkNrAAGoxAAAiJEL/AVEEQCABQQVyIQEMAgsgB0EGai0AACICQZDawABqMQAAIitC/wFRBEAgAUEGciEBDAILIAdBB2otAAAiAkGQ2sAAajEAACInQv8BUgRAIAMgFmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEBayERIANBBmohAyAAIAYiAU0NCAwBCwsgAUEHciEBCyABrUIghiACrUIIhoQhJQwGC0F4IAZBhI/AABC6AQALIAYgC0GEj8AAELgBAAsgAyACQZSPwAAQugEACyACIBBBlI/AABC4AQALIAEhBgsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBFBAkkEQCADIQcMAQsgEUEBayEIQQAgBmshEQNAIAYgC0sNBSADQQZqIQcgA0F5Sw0GIAcgEEsNByAGIAtGDQggBiAKaiIBLQAAIgJBkNrAAGoxAAAiKUL/AVENFSALIBFqIgBBAkkNCSABQQFqLQAAIgJBkNrAAGoxAAAiKkL/AVENAyAAQQJNDQogAUECai0AACICQZDawABqMQAAIitC/wFRDQsgAEEDTQ0MIAFBA2otAAAiAkGQ2sAAajEAACInQv8BUQ0NIABBBE0NDiABQQRqLQAAIgJBkNrAAGoxAAAiKEL/AVENDyAAQQVNDRAgAUEFai0AACICQZDawABqMQAAIiVC/wFRDREgAEEGTQ0SIAFBBmotAAAiAkGQ2sAAajEAACImQv8BUQ0TIABBB00NFCABQQdqLQAAIgJBkNrAAGoxAAAiJEL/AVENAiADIBZqIgAgKkI0hiApQjqGhCArQi6GhCAnQiiGhCAoQiKGhCAlQhyGhCAmQhaGhCImQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAmQiiIQoD+A4MgJkI4iISEPgAAIABBBGogJiAkQhCGhCIkQoCA/AeDQhiGICRCgICA+A+DQgiGhEIgiD0AACARQQhrIREgBkEIaiEGIAchAyAIQQFrIggNAAsLIAYgC0sNAiAGIAtGBEBCACEmQQAhAEEAIRFBACECDBYLIAogC2ohCyAGIApqIQNBACERQgAhJkEAIQFBACENQQAhCANAQQAhAgNAIAIgCGohDiACIANqIgotAAAiAEE9RwRAAkAgAkUEQCAAQZDawABqMQAAIiRC/wFRDQEgDkEBaiEIICQgEUEBaiIRQTpsQT5xrYYgJoQhJkEAIQIgACENIApBAWoiAyALRw0EDBoLIAEgBmqtQiCGQoD6AIQhJQwaCyAArUIIhiAGIA5qrUIghoQhJQwZCyABIA4gAhshASAOQQJxBEAgAyACQQFqIgJqIAtGDRcMAQsLCyABIAZqrUIghkKA+gCEISUMFgsgBkEHaiEGDBILIAZBAWohBgwRCyAGIAtBiIrAABC5AQALIAYgC0Gkj8AAELkBAAsgAyAHQbSPwAAQugEACyAHIBBBtI/AABC4AQALQQBBAEHEj8AAELcBAAtBAUEBQdSPwAAQtwEAC0ECQQJB5I/AABC3AQALIAZBAmohBgwJC0EDQQNB9I/AABC3AQALIAZBA2ohBgwHC0EEQQRBhJDAABC3AQALIAZBBGohBgwFC0EFQQVBlJDAABC3AQALIAZBBWohBgwDC0EGQQZBpJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = PE();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: t, module: A } = await jE(await g, I);
  return VE(t, A);
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return EA(Q - 1, n);
  }
  function A(C, B, Q, a, n) {
    return EA(B - 276, a);
  }
  function e(C, B, Q, a, n) {
    return EA(Q - 487, n);
  }
  function o(C, B, Q, a, n) {
    return EA(C - -142, B);
  }
  const i = g();
  for (; ; )
    try {
      if (parseInt(A(578, 556, 561, "(Lhb", 571)) / 1 * (parseInt(o(119, "Bc][", 145, 135, 127)) / 2) + parseInt(e(715, 707, 734, 726, "x82p")) / 3 * (-parseInt(e(738, 760, 766, 740, "[E2r")) / 4) + parseInt(o(115, "Z8D8", 129, 137, 116)) / 5 * (-parseInt(e(768, 738, 743, 740, "RaVR")) / 6) + parseInt(t(268, 253, 273, 297, "lGaB")) / 7 * (parseInt(t(273, 305, 295, 274, "CzYb")) / 8) + -parseInt(A(536, 521, 543, "kakk", 498)) / 9 * (-parseInt(e(743, 782, 762, 787, "Bc][")) / 10) + parseInt(t(236, 243, 265, 275, "4YSx")) / 11 * (parseInt(o(132, "L)1D", 147, 107, 124)) / 12) + -parseInt(t(262, 242, 250, 279, "CzYb")) / 13 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Kg, -359959 + 3 * -144941 + 1027949);
function gt(g, I, t, A, e) {
  return EA(I - 707, t);
}
function It(g, I, t, A, e) {
  return EA(A - 251, g);
}
function gi(g, I, t, A, e) {
  return EA(e - -371, t);
}
function Kg() {
  const g = ["x8o+WQ08qa", "qmoXmCoRW5mPW6Loc1OWW5RcOCkP", "WRFdHtqdaMldQCot", "W5S+WQtcLqW", "W5pcNCosWRz/W4TeW6azW6G", "W5ZdPmomc8oyfmkGW7NdOa", "WOhcTCkdlmoi", "F8k7W6qjW7u", "W5GEWR7cLrK", "W4S2W6j0WQNcGmocF8oucG", "h8kRC8k0WOm", "m8oUW5BcTs8", "WODgWOBcVJP6dcG", "W58Qmmo1fMpcG8oRkSkr", "WOxcTvRdPW", "ugntrSo/h3xdRSoWkG", "h0WwW73cPfv2WOtcQcRcGW", "lCoUW4NcSrW", "WRRdQcumqwLUWQ/dJG", "A0KmnCou", "uSoLx8o8iaX1W6nscG", "W4tdOxhdVuO", "W4RcLLNdOCkaW7pcUuddM3xdL8oKaa", "W4K1W6f2WQlcUCocq8oXkq", "W58Aldac", "mMflW6iA", "nCkOWQrAW4G", "W77dK2JcGaFcKKBdRa", "W67cNtJcVCo4W5BdO8kPWR0", "WRVcJ8oMe8oA", "W5NdIqVcUCoA", "WQFcHNxcMIm", "CH5CzSoJs8kSngCg", "WQqkBsuV", "hfjKnmos", "WR8czc0c", "W50Upmo0FxVcKCoJkSklWPW", "W7ugWQntBLeLuHS", "WOvoW7NdJu4jCHvbW4GgWPVdJG", "rSorWP3dS8o6", "WR/cIMtcNtG", "i8ooumkpW7i", "vwfuqSoJfftdTSookq", "xfuYW7jbCbVcLG", "ltudiHK", "WOm7W7r+sa", "sJORfa", "dZKzeCov", "kvOol8oA", "W77cPCoHxMi", "W6/cLdWdla", "WQS7mCkpW5FdQWPVfmoMW7G", "qWSJBCo2WOpcTSkuWO9/", "W6DwW4FdO8kWy8oDjqdcM8og", "WObfFwKIxCkSymk1W7K", "uMnvqSkaqXdcRSovo8oidL3cPq", "W7DTCmosW4e", "FrLqAw4"];
  return Kg = function() {
    return g;
  }, Kg();
}
function Ii(g, I, t, A, e) {
  return EA(e - -89, A);
}
function EA(g, I) {
  const t = Kg();
  return EA = function(A, e) {
    A = A - (-13 * 167 + 35 * 113 + -110 * 14);
    let o = t[A];
    if (EA.BxsbSM === void 0) {
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
      EA.WReIlM = a, g = arguments, EA.BxsbSM = !0;
    }
    const C = t[2 * 1738 + -6067 + 2591], B = A + C, Q = g[B];
    return Q ? o = Q : (EA.VLjLHr === void 0 && (EA.VLjLHr = !0), o = EA.WReIlM(o, e), g[B] = o), o;
  }, EA(g, I);
}
var ii;
class XE {
  constructor() {
    p(this, ii, !1);
  }
  async [(ii = Ii(186, 178, 219, "]iPi", 204) + gi(-85, -109, "ZeU&", -67, -85) + It("Z8D8", 504, 482, 509), It("qK@V", 501, 540, 517))](I) {
    function t(C, B, Q, a, n) {
      return It(B, B - 356, Q - 8, a - -208);
    }
    function A(C, B, Q, a, n) {
      return It(n, B - 22, Q - 110, a - -311);
    }
    function e(C, B, Q, a, n) {
      return gt(C - 288, B - 248, a);
    }
    function o(C, B, Q, a, n) {
      return Ii(C - 422, B - 443, Q - 49, C, B - -592);
    }
    function i(C, B, Q, a, n) {
      return gt(C - 358, B - -1330, n);
    }
    try {
      const C = I + (o("UK)%", -422, -395, -422, -420) + "/") + Mo;
      await CB(C), this[t(326, "(kSe", 331, 312, 338) + t(293, "4YSx", 298, 303, 298) + e(1239, 1242, 1222, "E(r&", 1245)] = !0;
    } catch {
      this[o("XPz7", -385, -385) + e(1243, 1252, 1229, "Jb7T") + i(-307, -324, -345, -335, "CzYb")] = !1, console[t(332, "Ad5K", 346, 341)](Mo + (o("4)jI", -408, -425) + e(1226, 1255, 1272, "mvec") + t(312, "y12N", 295, 294) + i(-316, -341, -316, -313, "L)1D") + t(331, "UK)%", 347, 321) + e(1220, 1199, 1211, "u%C7") + o("7JIn", -410, -432) + o("2nea", -400, -391) + t(317, "[E2r", 358, 335) + A(215, 262, 250, 241, "H*@5") + i(-305, -332, -340, -345, "cuuo") + t(320, "kakk", 290, 293) + t(321, "wg(s", 347, 319) + i(-332, -340, -362, -340, "[E2r") + "n."));
    }
  }
  [It("$Hco", 521, 520, 503) + gt(986, 962, "4YSx") + gt(996, 970, "(kSe") + "ed"]() {
    function I(A, e, o, i, C) {
      return gt(A - 81, e - -185, o);
    }
    function t(A, e, o, i, C) {
      return gi(A - 294, e - 420, o, i - 459, A - -545);
    }
    return this[t(-631, -646, "E(r&", -646) + t(-654, -661, "lw&p", -666) + I(793, 799, "&fh8")];
  }
}
class m0 extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function _E(g, I, t, A, e) {
  return V(t - -402, A);
}
function Ae(g, I, t, A, e) {
  return V(I - -377, A);
}
function qA(g, I, t, A, e) {
  return V(g - 426, e);
}
(function(g, I) {
  function t(Q, a, n, s, x) {
    return V(x - 677, n);
  }
  function A(Q, a, n, s, x) {
    return V(n - -206, s);
  }
  var e = g();
  function o(Q, a, n, s, x) {
    return V(s - 875, n);
  }
  function i(Q, a, n, s, x) {
    return V(s - 473, n);
  }
  function C(Q, a, n, s, x) {
    return V(x - 461, s);
  }
  for (; ; )
    try {
      var B = parseInt(A(-19, 40, 8, "uEPV", 4)) / 1 * (parseInt(C(685, 669, 678, "uEPV", 662)) / 2) + parseInt(o(1130, 1097, "q&3p", 1110, 1103)) / 3 + -parseInt(t(940, 938, "lMq5", 891, 915)) / 4 * (parseInt(C(655, 699, 663, "q&3p", 669)) / 5) + parseInt(i(680, 693, "T84b", 686, 663)) / 6 + -parseInt(o(1093, 1072, "ToIq", 1092, 1103)) / 7 * (parseInt(t(941, 934, "[#]P", 928, 924)) / 8) + -parseInt(A(33, 17, 36, "7R7*", 67)) / 9 + parseInt(t(931, 954, "TI@q", 912, 927)) / 10;
      if (B === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Hg, -18601 * 7 + 1317724 + 1 * -249598);
function Hg() {
  var g = ["WOJcKt14W57cJdaKFSobW6/dOq", "hHr0BeS", "u3PWCmk2eCksWOOMW7tdJf95", "vSkuWRC", "ASkdW5CpWPa", "W5yEWRpdJwzpW7NdSSoojmkCW4NdKa", "W5PNemk8ca", "A8kwWPXlWOfTWOxcMmoGmIDb", "W6fOx1pcLmk4WQGJimoCv2pcNa", "W6ldKHJdM8oAEcCEhhiuD8kp", "uwevcbi", "wKBdTG", "uSorbW8E", "rKtdTG", "DqDnWORdJW", "WRhdTCkuW5ZdIq", "gJ3cSsZdKa", "W7S0pN5H", "hbRcSr1vWP/cMmkZWOVcTIC", "xhitbaG", "W5dcPCkBkSkV", "zuxcTmowbq", "x3mbW6JcR8onWRVcGZz0WPCJ", "WQNcI8kc", "eColW6NdI0pdRtVcKmoO", "W53dGgO4WPG", "WRlcLLlcNmkf", "W5z5gmkkfq", "BCkwWPzdWOfNW43cGmorpcPrWQC", "sbldSX3cMSkdW40LxmoZra", "u8oWhsmv", "vI7dKt4", "W5BdGhK", "DCo5oCoZW7C", "hbhcVb1rW57dQSkJWQ3cOW4iW78", "wY1YWPNdHmklWRS", "W7hdSqVdKdS", "WQCXhWZdJG", "n8kpBmkmzLpcOmoX", "B8oLaq", "WRlcKu7cM8kz", "pKLPW4JdMW", "mWRcMY/cRa", "W57dL3KJWP8", "ovDR", "W6eMa2rL", "DmoRg8oXW7m", "rmoBaaCr", "W4Xex8kCWRW", "jCoKW4nKW6O", "WR7dVSkpW4BdMq", "WO4Mr8o+smkjWR7dOYJcVmo/W6KC", "W492dCk9gq", "WQDxW5r9jSkRr8kUwSkXCMW", "qu3dO0e", "W63dUrddNqe", "tXRdVH3cMSoaWR4/zmo0F3tdHG", "W5Kqia", "WRmLhHBdIa", "WOfjDeuxAmkYlCow", "W6tdLulcGSkTdvef", "BLBcR8oghG", "tbXmrxafWOW"];
  return Hg = function() {
    return g;
  }, Hg();
}
function ot(g, I, t, A, e) {
  return V(t - 376, I);
}
function V(g, I) {
  var t = Hg();
  return V = function(A, e) {
    A = A - (-10 * 571 + -5587 * 1 + 11489);
    var o = t[A];
    if (V.qwtAtz === void 0) {
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
      V.VGzETP = C, g = arguments, V.qwtAtz = !0;
    }
    var B = t[-1 * -4438 + 31 * 49 + -5957], Q = A + B, a = g[Q];
    return a ? o = a : (V.eyicMK === void 0 && (V.eyicMK = !0), o = V.VGzETP(o, e), g[Q] = o), o;
  }, V(g, I);
}
var Ye, Ft;
class oi {
  constructor(I) {
    j(this, Ye);
    j(this, Ft);
    function t(C, B, Q, a, n) {
      return V(a - -96, C);
    }
    function A(C, B, Q, a, n) {
      return V(n - 620, Q);
    }
    function e(C, B, Q, a, n) {
      return V(C - 490, n);
    }
    function o(C, B, Q, a, n) {
      return V(a - 478, Q);
    }
    function i(C, B, Q, a, n) {
      return V(C - 581, n);
    }
    this[o(676, 674, "D1b*", 697) + A(788, 812, "m2^2", 812, 818)] = I;
    try {
      T(this, Ye, I[i(802, 779, 823, 831, "&5&(") + o(759, 737, "3Nlq", 732, 760) + i(826, 808, 821, 856, "vuBT")] && JSON[i(812, 844, 780, 788, "q&QO")](I[e(685, 672, 667, 694, "(k#x") + e(736, 744, 765, 762, "@@!)") + t("pT@N", 97, 154, 122, 154)])), T(this, Ft, I[t("TI@q", 137, 135, 141, 124) + e(701, 715, 720, 695, "7R7*")]);
    } catch (C) {
      console[o(701, 719, "T84b", 711)](C);
    }
  }
  get [qA(638, 615, 626, 618, "pT@N") + "id"]() {
    function I(e, o, i, C, B) {
      return qA(o - -239, o - 334, i - 132, C - 458, e);
    }
    function t(e, o, i, C, B) {
      return qA(C - 494, o - 158, i - 42, C - 441, o);
    }
    function A(e, o, i, C, B) {
      return qA(o - 315, o - 138, i - 39, C - 72, C);
    }
    return this[t(1128, "RW^l", 1126, 1119) + I("pT@N", 412, 441, 401)][t(1104, "gU^$", 1125, 1116) + A(992, 977, 994, "lMq5")];
  }
  get [qA(678, 672, 663, 657, "m2^2") + "s"]() {
    function I(A, e, o, i, C) {
      return Ae(A - 257, i - 1179, o - 407, A);
    }
    function t(A, e, o, i, C) {
      return Ae(A - 402, e - 1372, o - 458, A);
    }
    return this[t("&40G", 1189, 1205) + t("4Ind", 1195, 1204)][I("7R7*", 1027, 1047, 1024) + "s"];
  }
  get [Ae(-140, -161, -175, "TI@q") + Ae(-171, -154, -170, "IMGS")]() {
    function I(e, o, i, C, B) {
      return ot(e - 199, C, o - -1206);
    }
    function t(e, o, i, C, B) {
      return ot(e - 194, e, o - -363);
    }
    function A(e, o, i, C, B) {
      return ot(e - 139, e, i - -150);
    }
    return this[I(-575, -590, -608, "4Ind") + I(-589, -615, -629, "Vpyv")][A("zTgC", 466, 446) + t("T84b", 205)];
  }
  get [_E(-193, -202, -176, "3Nlq") + "b"]() {
    return k(this, Ye);
  }
  get [ot(604, "D1b*", 581) + qA(628, 634, 643, 630, "ubKW")]() {
    return k(this, Ft);
  }
  get [Ae(-146, -150, -177, "!W7@") + Ae(-156, -148, -177, "&40G") + qA(635, 651, 614, 631, "3Nlq") + qA(636, 634, 631, 652, "H#y4")]() {
    var o, i;
    function I(C, B, Q, a, n) {
      return Ae(C - 131, C - -256, Q - 2, n);
    }
    function t(C, B, Q, a, n) {
      return ot(C - 485, Q, B - -1009);
    }
    function A(C, B, Q, a, n) {
      return Ae(C - 19, B - 610, Q - 463, C);
    }
    function e(C, B, Q, a, n) {
      return qA(n - -1375, B - 358, Q - 222, a - 399, a);
    }
    return !!((i = (o = k(this, Ye)) == null ? void 0 : o[t(-454, -429, "7R7*") + e(-711, -726, -710, "T84b", -696)]) != null && i[t(-393, -405, "tVb3") + I(-440, -431, -445, -459, "9XCp") + e(-683, -711, -709, "$5vX", -706) + A("Vpyv", 467, 452) + e(-707, -732, -711, "q&QO", -701) + e(-718, -744, -731, "q&QO", -743) + I(-409, -384, -380, -436, "gU^$") + "d"]);
  }
}
Ye = new WeakMap(), Ft = new WeakMap();
function iA(g, I, t, A, e) {
  return tA(I - 754, g);
}
function FA(g, I, t, A, e) {
  return tA(I - 416, e);
}
(function(g, I) {
  function t(C, B, Q, a, n) {
    return tA(a - 427, C);
  }
  const A = g();
  function e(C, B, Q, a, n) {
    return tA(n - -449, C);
  }
  function o(C, B, Q, a, n) {
    return tA(n - 269, Q);
  }
  function i(C, B, Q, a, n) {
    return tA(Q - 313, a);
  }
  for (; ; )
    try {
      if (parseInt(o(1016, 810, "Rc@4", 915, 933)) / 1 + -parseInt(o(663, 620, "Bq%)", 586, 701)) / 2 * (parseInt(e("j28j", 64, 191, 264, 187)) / 3) + parseInt(o(699, 709, "2o]c", 752, 737)) / 4 * (parseInt(e("MA@)", -112, -72, 83, 1)) / 5) + parseInt(o(966, 860, "rpi1", 869, 921)) / 6 + -parseInt(i(1056, 1056, 925, "Gqhk", 1054)) / 7 * (-parseInt(t("W8BX", 1017, 1077, 1119, 1103)) / 8) + -parseInt(t("W8BX", 1155, 1033, 1037, 992)) / 9 * (-parseInt(t("XVNx", 907, 962, 976, 1081)) / 10) + -parseInt(t("O6t^", 978, 937, 1059, 1146)) / 11 === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(qg, 1070230 + 3 * 17903 + -510483);
function tA(g, I) {
  const t = qg();
  return tA = function(A, e) {
    A = A - (-1 * -6046 + -1 * 4126 + -1 * 1489);
    let o = t[A];
    if (tA.VeiSzI === void 0) {
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
      tA.TmMpzD = a, g = arguments, tA.VeiSzI = !0;
    }
    const C = t[385 * 7 + -5907 + 3212], B = A + C, Q = g[B];
    return Q ? o = Q : (tA.LpfYQX === void 0 && (tA.LpfYQX = !0), o = tA.TmMpzD(o, e), g[B] = o), o;
  }, tA(g, I);
}
function qg() {
  const g = ["W5FcKCkcW6fk", "kSk/W6RdR8oy", "xeyBW6W", "WRvpeCog", "W4NcTrFdH8kI", "FCodWObZfG", "W67cPsZdRSk9", "pSkIW7FdHmob", "W67dOrtdG8kK", "lCksmt/cIq", "qwahW61R", "W71ciYKi", "W70eqCoq", "rCo2AG", "FSkGW5ddP8oU", "oZ7dVmkcW64", "c8kIbSo9sq", "cCkPymkNvq", "C3mhW6XW", "W5NcTaVdNSkO", "W53cMCkf", "hmk6y8k9qG", "w8ouWPXVaq", "WPGrCmkLgq", "hCkTAmkQva", "CmkUpYCz", "pIpdOCk0W7W", "dmo/A8opWRK", "dItcUJe7", "whNcKSoPBdC9W5/dVtyC", "smkKW5ddRa", "W53cPaZdPSkU", "WQX5WOu", "DSk7pW", "BCo+WRVcUCkzfmkLW71OBaO", "DmkKns0c", "vhacW7nj", "W6pcICk5", "W6Hcjdux", "WPqHCmkemG", "wCkrWQnCma", "W6tcJCkVWRTz", "WP7dOw4xW6a", "nmkUW4u", "q8o2nJCs", "msldTCkE", "W7W/W7NcUCoq", "q8ozW4lcTmoQrmo4gKBcHa", "W5dcI8kfW5bi", "s8o8Cmo2WR4", "W6C3W7hcSSoD", "WR4FjmkcpG", "DSk8kCo0FG", "iCkXrqKR", "W5dcQfhcUtW", "W4/cKCk6W6FdNG", "bcdcJCobWQq", "wMzPWOBcVG", "W61zW5vxcW", "kSkpW4mCtG", "W5NcV8k5W6ZdTG", "W6awW4Hmeq", "ECk/lJCq", "FdOqp8oQ", "W4ZcK3dcNti", "lGhdSmo5eW", "ac7cUraS", "urdcT1VcJq", "W74kxmkEW5W", "u2rP", "E8k5prSd", "z8kqlXi", "oCkTW44ItG", "D8kZnmoJ", "W6SlW5rlda", "W7xcNKVcVcS", "jmkRErOK", "W73dJwTeW7S", "FcKZmmof", "WRvKWOi/WQ0", "W4hcKCke", "jIBcMSkeWQm", "DSohWPPJgW", "lCkSW7hdR8of", "W4GrsLyV", "W4xdV8kKW4lcJq", "shSr", "FvO2W5hcRq", "jZNcRXS7", "dmkOdmkN", "dY7cRW", "dmkIhmomvG", "uCkfnaZdHG", "W6umbwet", "nmkOW4eurq", "hmkjWPm", "amkIg8o9vq", "mCkVW4qE", "cYxcUfOL", "E8kVl8o4za", "EmkYkmo5CG", "fCksWOxdQ8on", "A8o1WPDheSoaW47cRSovW5ddTmo3", "W7yKW5jMW6fgrSobrmo0F3G", "W4lcKCktW4ldLa", "W4PqgmotWRS", "WRBdO2mcBW", "W64wW45wgW", "WPhdKSoaWR7cJSkMW68xdKzC", "W6WCW51zcG", "kCkvW5y4rKVcHa3dM2FcNa", "v2LUWOddTG", "dqRcKMhdJG", "W7WksCoAW7K", "qmoWFSoFWRm", "dbJcUxtdHW", "kINdOmkUW7C", "W40lW4Lxdq", "cbdcRNldGq", "WQxcU8oAEmoS", "EKKTW5e", "eXJcV3NdHG", "dctcQvqG", "CmobWP0", "W57dImko", "W6VcGCk4WPbl", "t8oRA8ojWQq", "D8kOW4CFta", "W4BcI8kfW6VcNq", "W7jjWRa", "pXPUWOZdRCoMygDMW7m9td1q", "lCkvltJcLq", "W5RdL8kzW4/cTa", "qxWgW6C5", "A8o4W6ZdGSoViSkaW7e", "W4zFb8oFWPe", "AK0RW7VcTG", "ECkXkq", "ldJdV8kuW7K", "W6riWQ1uoq", "wKKTW5hcSa", "zeKZW5BcOW", "jmk2qam", "dmoHW44ysa", "sSotWRa5WPy", "uWFcSxdcKa", "l8k9qGGG", "W6uNW74RW5i", "DSo0FSokWQy", "aI7cJCkcWQu", "W6pcTtjwoa1EpmoOWPNdMtLx", "ECoEWOT5gW", "kSk9W7ldTSo6", "bIBcMSkeWQm", "a8o1BCozWRi", "vWFcQ0FcMG", "qSorWQi", "W7KLW5tcVCoh", "W4fxh8oFWOO", "W5VdISkFW6xcQW", "WPSXuCkWeG", "W73cNmkJWRTE", "gf9CsCkNW5xdGhNcNSkuiWm", "bmkKeSoSxW", "ct3cLSksWR4", "umojW45epa", "btCRW5pdO8oMzI7cSZRdHmk1", "gCk8CIG/", "W4OsW5HmW5m", "hc/dImkWoW", "WPtdP383W68", "W4PmgCozWPK", "CSopWO1Lhq", "qxWgW6Dj", "mmkGW5ysqW", "qh0bW4D0", "WRKutSkcoq", "WO1IW5hcPmo+", "hCkdWR4oWQdcI8kJiq", "WOpcTCkox8ol", "cZVcKCks", "aSkmAtyC", "W7raja", "umkwWRnCdG", "CmkwWRnCdG", "qI3cSGeN", "FCouWOfZaa", "qmoFWRiOWO0", "A8o7W7tdPCoKpCk+W6u", "D8ktW53cKJm", "WPldL8ogW6tdRCklW7y5ba", "WPKEySkP", "WQtcTmohBW", "FSkGW4xdSmoZ", "F8kGW5ddGmoP", "WQnIWRBdQSknsbxcO8omWOSTkW", "gfrqtSokWOVdThtcK8ku", "uCk2WR5qfa", "gCkhW6e4rG", "W5VcN8kcW4Dp", "W6PvobWu", "dItcUG", "EG3dPxdcSa", "FCkVmSoKzq", "WQGvzLLjeCkIk8kaW4qFcfBcTa", "w0yCW6KT", "qhCtW6nS", "W44AW5mPwG", "W41Bd8osWO4", "WP05ASkVbq", "bmkIc8oOtW", "W5tcMCkHWR1j", "f8kvW60RCG", "eYjdWRqSkCklW5DOFCoYFW", "W6qwW5HzcW", "hmkuWRVdRCoC", "d27dISk2kW", "pmkIW7hdHmon", "nmkVWQpcPmoZ", "rbdcQKlcLG", "bmkKc8oSvq", "WPGnxSkgW5NcMsxdKSofy8k0x8oj", "W7GlW5jwcW", "r8o3WOq7WOa", "WOD0W6JcTSoO", "lCkfmd/cNW", "kSkfoc3cJW", "W7xcM3BcMJO", "smkgW6ddVSok", "E8kcW4RcKZi", "WORdNeKFW64", "preyW6bfWPtdISoc", "gL9vfmopWRxdUe7cMW", "FSoBuSoyWQq", "DmkQW4xdOmok", "W70ZW7e", "EmouWOTL", "dgZdV8kyW74", "ca3cGx7dJa", "WP1Fm8oXWQy", "WPqvymoO", "x2jV", "WQCrD8kRuq", "WP7dVhK3", "F8kaW4BcKW", "W64FhNei", "W5y9lMGS", "cmkPFSkG", "n8kSW6RdRW", "W7W/W6dcUCoA", "WPVdQ3iHW6q", "WO9ZW5RcM8oY", "hmkpWPddGCon", "qG4aemoS", "wWWxdCo6", "F18PW6/cIG", "FCkRW5FdOCkM", "W5BdHSkoW47cTq", "W6hcH8kPWRbe", "AK0RW7pcSa", "W65clX4", "W5lcIg3cMIC", "aHZcUxtdHW", "WO/dR248W6G", "W6HvW40"];
  return qg = function() {
    return g;
  }, qg();
}
function xA(g, I, t, A, e) {
  return tA(A - 969, e);
}
function RA(g, I, t, A, e) {
  return tA(A - 707, t);
}
function lA(g, I, t, A, e) {
  return tA(g - 30, I);
}
var Ci, Bi, Qi;
class zE {
  constructor(I) {
    p(this, Qi);
    p(this, Bi, [FA(1069, 1045, 1008, 981, "!7S*") + xA(1499, 1481, 1572, 1569, "2bBT") + "ic", iA("%9It", 1410) + iA(")xnF", 1424) + "ic"]);
    p(this, Ci);
    function t(e, o, i, C, B) {
      return tA(C - 144, e);
    }
    function A(e, o, i, C, B) {
      return tA(e - -270, i);
    }
    this[A(239, 130, "j28j") + t("2bBT", 813, 679, 712) + "d"] = I;
  }
  async [(Qi = FA(950, 873, 988, 975, "#0n2") + "se", Bi = FA(926, 1027, 936, 1054, "4lQK") + lA(482, "XVNx") + iA("VPGq", 1296) + xA(1586, 1516, 1357, 1474, "fwNu"), Ci = xA(1509, 1376, 1558, 1480, "&g#K") + RA(1278, 1280, "jfEf", 1232), xA(1735, 1738, 1546, 1663, "!&FD"))](I) {
    const t = await this[e(705, 643, 749, 741, "O6t^") + i(1508, 1687, 1607, 1561, "dZP2") + o(852, 973, "2o]c", 890)](I);
    await Promise[A(618, 689, 715, "!7S*") + e(849, 763, 958, 860, "8se[")]([this[e(802, 832, 910, 836, "#0n2") + i(1434, 1482, 1590, 1530, "aQ4i") + "d"][i(1468, 1421, 1525, 1457, "276G")](I), this[A(700, 730, 671, "6p]]") + A(636, 609, 644, "hoo)") + "e"](t)]);
    function A(C, B, Q, a, n) {
      return lA(B - 85, a);
    }
    function e(C, B, Q, a, n) {
      return lA(C - 179, n);
    }
    function o(C, B, Q, a, n) {
      return xA(C - 109, B - 29, Q - 87, a - -583, Q);
    }
    function i(C, B, Q, a, n) {
      return RA(C - 413, B - 209, n, a - 175);
    }
    this[A(724, 786, 814, "xduR") + A(541, 603, 522, "dZP2") + A(506, 622, 530, "Gqhk")]();
  }
  async [RA(1154, 1250, "&4Ku", 1206) + iA("[5dW", 1337) + "se"](I) {
    function t(C, B, Q, a, n) {
      return iA(n, B - -402);
    }
    function A(C, B, Q, a, n) {
      return iA(a, Q - -1325);
    }
    function e(C, B, Q, a, n) {
      return RA(C - 195, B - 161, B, C - -164);
    }
    function o(C, B, Q, a, n) {
      return xA(C - 488, B - 104, Q - 283, n - -1857, B);
    }
    function i(C, B, Q, a, n) {
      return FA(C - 9, C - -824, Q - 421, a - 108, n);
    }
    try {
      if (i(119, 181, 33, 81, "$vVk") === i(245, 145, 135, 216, "Gqhk")) {
        const C = await fetch(I);
        if (!C.ok)
          throw o(-157, "aQ4i", -189, -134, -219) !== o(-325, "xHeR", -291, -401, -380) ? new _0x4ad3f9(A(-14, -136, -4, "xduR", 26) + A(-211, -7, -105, "WoK1", -225) + e(1103, "4lQK", 1173, 1038, 988) + t(966, 1039, 1105, 960, "2bBT") + "d.") : new Error(t(814, 807, 907, 869, "XVNx") + i(82, 192, 211, 205, "Rc@4") + A(-149, -62, -118, "xduR", -112) + i(121, 64, 64, 211, "%9It") + "d.");
        this[o(-294, "aQ4i", -377, -297, -333) + "se"] = await C[A(-203, -132, -74, "ZQ7z", -26)]();
      } else {
        _0x236668 instanceof _0x5af175 ? _0x4b59d0[e(1088, "!7S*", 1094, 1036, 1185)]() : _0x4e36e7 instanceof _0x4918db && _0x4c4717[t(928, 1025, 914, 1134, "myr3")](_0x4cd825);
        const C = {};
        C[A(170, -20, 43, "&4Ku", -38) + A(35, 102, 26, "XVNx", 117)] = !1, C[o(-83, "WoK1", -325, -223, -197) + "s"] = [], C[A(133, -78, 52, "&4Ku", 76) + A(-52, 85, 68, "$vVk", -34)] = [], C[o(-223, "Q#yl", -372, -126, -242) + A(-103, 41, -31, "ZQ7z", -163) + o(-326, "mr2d", -247, -285, -257)] = void 0, C[t(881, 825, 759, 830, "Gqhk")] = function() {
        }, C[t(999, 902, 937, 990, "@1nd") + t(940, 944, 1036, 977, "2bBT")] = "", this[t(918, 889, 957, 856, "$vVk") + i(209, 159, 315, 125, "&4Ku")] = new _0x10a379(C);
      }
    } catch (C) {
      e(1099, "waJk") !== o(-511, "r@Qv", -335, -429, -421) ? _0x1d267f[o(-474, "j28j", -475, -513, -434) + "ch"]((B) => _0x3a4d70[e(1027, "dw#U")](B)) : (this[o(-261, "r@Qv", -134, -286, -216) + "se"] = void (4663 * 1 + -6491 * 1 + 1828), console[i(193, 209, 270, 63, "276G")](C));
    }
  }
  async [lA(501, "J!1e") + xA(1611, 1385, 1479, 1512, "*Bhq") + "e"](I) {
    this[i(835, "[5dW", 904, 908) + t(249, 194, 215, 152, "!&FD")] = void (16052 + 2 * -8026);
    function t(C, B, Q, a, n) {
      return iA(n, a - -1223);
    }
    function A(C, B, Q, a, n) {
      return RA(C - 0, B - 286, n, a - 144);
    }
    function e(C, B, Q, a, n) {
      return lA(a - 888, n);
    }
    if (!I)
      if (o(1540, 1509, "hoo)", 1448) !== i(731, "W8BX", 661, 734)) this[o(1615, 1613, "MA@)", 1538) + o(1240, 1235, "myr3", 1306) + "d"] = _0x5e3acc;
      else {
        console[o(1426, 1439, "!7S*", 1460)](o(1264, 1266, "2!d*", 1300) + i(643, "8se[", 529, 694) + A(1415, 1432, 1578, 1464, "OapT") + o(1320, 1220, "2!d*", 1317) + i(646, "jfEf", 558, 524)), this[A(1553, 1403, 1463, 1471, "&4Ku") + "se"] = void (9412 + 7 * -302 + -7298);
        return;
      }
    function o(C, B, Q, a, n) {
      return iA(Q, a - 107);
    }
    function i(C, B, Q, a, n) {
      return FA(C - 499, C - -247, Q - 381, a - 193, B);
    }
    await this[o(1501, 1444, "J!1e", 1377) + e(1645, 1489, 1618, 1604, "VPGq") + "se"](I);
  }
  async [lA(581, "%9It") + FA(1095, 1073, 981, 1120, "2!d*") + iA("J!1e", 1286)](I) {
    function t(B, Q, a, n, s) {
      return iA(n, s - -359);
    }
    const A = await fetch("" + I + this[C("MA@)", 844) + C("&4Ku", 876) + t(1119, 957, 955, "MA@)", 1070) + i(278, "[5dW", 272, 400)][-81 * 3 + 45 * -196 + 477 * 19]), e = A.ok ? -8242 + -1 * 2357 + 10599 : 73 * 60 + -1 * 816 + 509 * -7;
    function o(B, Q, a, n, s) {
      return RA(B - 67, Q - 275, s, Q - -743);
    }
    function i(B, Q, a, n, s) {
      return iA(Q, n - -1036);
    }
    function C(B, Q, a, n, s) {
      return iA(B, Q - -353);
    }
    return "" + I + this[t(829, 784, 895, "&g#K", 858) + o(566, 521, 607, 525, "W8BX") + o(584, 571, 486, 552, "myr3") + o(476, 537, 510, 456, "dhKQ")][e];
  }
  [lA(489, "4lQK") + FA(842, 940, 834, 1060, "Gqhk") + "s"](I) {
    function t(A, e, o, i, C) {
      return RA(A - 29, e - 277, A, i - -416);
    }
    I[t("r@Qv", 880, 904, 835) + "ch"]((A) => console[t("O6t^", 794, 1010, 913)](A));
  }
  [lA(693, "*Bhq") + RA(1462, 1389, "O6t^", 1349) + iA("ZQ7z", 1438)](I) {
    function t(A, e, o, i, C) {
      return lA(i - 591, A);
    }
    I[t("*Bhq", 1285, 1213, 1248) + "ch"]((A) => console[t("aQ4i", 1336, 1259, 1265)](A));
  }
  [lA(461, "J!1e") + RA(1091, 1214, "WoK1", 1188)]() {
    function I(A, e, o, i, C) {
      return xA(A - 155, e - 182, o - 344, o - -519, i);
    }
    function t(A, e, o, i, C) {
      return iA(o, i - -1070);
    }
    return window[I(844, 1012, 901, "4lQK") + I(1096, 1026, 984, "^J2M")][I(1108, 975, 1048, "#0n2") + t(189, 267, "hoo)", 310)];
  }
  [xA(1548, 1369, 1608, 1488, "dw#U") + xA(1581, 1706, 1532, 1575, "W8BX") + xA(1523, 1496, 1309, 1431, "&g#K")]() {
    function I(i, C, B, Q, a) {
      return FA(i - 465, Q - 262, B - 404, Q - 200, a);
    }
    function t(i, C, B, Q, a) {
      return xA(i - 125, C - 204, B - 254, Q - -902, B);
    }
    function A(i, C, B, Q, a) {
      return xA(i - 61, C - 266, B - 390, Q - -473, C);
    }
    function e(i, C, B, Q, a) {
      return xA(i - 305, C - 75, B - 262, B - -931, a);
    }
    function o(i, C, B, Q, a) {
      return FA(i - 139, B - -268, B - 181, Q - 341, i);
    }
    try {
      if (I(1237, 1008, 1006, 1138, "Q#yl") !== t(606, 612, "jfEf", 729, 847)) {
        _0x233cdc instanceof _0x2eff35 && _0x5342cb[e(628, 533, 527, 585, "XVNx") + I(1089, 1164, 1162, 1179, "rAw]")](_0x4e13ae);
        return;
      } else {
        if (!this[o("VPGq", 768, 833, 855, 820) + "se"])
          throw I(1167, 1216, 1206, 1148, "%9It") !== t(512, 684, "O6t^", 559, 462) ? new m0(A(1287, "Gqhk", 1038, 1163, 1038) + t(591, 487, "$vVk", 613, 574) + t(754, 735, "mr2d", 708, 616) + e(526, 667, 647, 544, "4lQK") + ".") : new _0x4cff36(A(1004, "jfEf", 1032, 975, 1068) + t(657, 509, "[5dW", 625, 734) + e(514, 489, 604, 686, "waJk") + A(1052, "#0n2", 1070, 1161, 1188) + ".");
        if (!this[e(421, 589, 540, 467, "@1nd") + e(617, 625, 646, 755, "rpi1") + "d"][A(1004, "dZP2", 879, 957, 899) + I(1210, 1170, 1108, 1124, "jfEf") + t(763, 791, "myr3", 704, 596) + "ed"]()) {
          if (e(449, 629, 576, 553, "MA@)") !== e(651, 620, 579, 452, "jfEf")) throw new m0(t(537, 627, "2o]c", 509, 498) + A(1191, "6p]]", 1061, 1066, 1099) + A(1139, "$vVk", 934, 1060, 1125) + e(708, 664, 586, 593, "Bq%)") + ".");
          _0xf58519[A(1017, "2bBT", 1003, 1026, 1014) + o("@1nd", 682, 730, 787, 841)](_0x2a4722);
        }
        this[o("276G", 527, 588, 509, 681) + I(1206, 1209, 1257, 1262, "Gqhk")] = new oi(ZE(this[e(600, 679, 634, 686, "!7S*") + "se"], this[e(619, 798, 676, 656, "O6t^") + t(518, 501, "j28j", 552, 559)]())), this[t(538, 663, "waJk", 565, 443) + I(1321, 1302, 1203, 1297, "4lQK") + "s"](this[t(661, 738, "4lQK", 643, 772) + t(754, 781, "[5dW", 718, 633)][o("MA@)", 585, 660, 645, 559) + "s"]), this[e(656, 622, 619, 531, "^J2M") + A(949, "waJk", 1048, 960, 829) + I(1173, 1243, 1424, 1303, "Gqhk")](this[I(1337, 1319, 1485, 1366, "Gqhk") + e(702, 638, 592, 674, "276G")][I(1217, 1295, 1186, 1178, "r@Qv") + I(1365, 1280, 1213, 1336, "Q#yl")]);
      }
    } catch (i) {
      if (t(537, 466, "!7S*", 516) !== t(781, 680, "aQ4i", 750)) return;
      {
        if (i instanceof m0)
          if (t(536, 527, "fwNu", 543) === t(864, 834, "jfEf", 745)) i[A(911, "2bBT", 948, 934)]();
          else {
            _0x2c249f[t(496, 713, "8se[", 614)](I(1307, 1158, 1288, 1264, ")93l") + t(475, 583, "xHeR", 577) + e(541, 696, 668, 656, "W8BX") + o("ZQ7z", 516, 585, 631) + t(696, 720, "#0n2", 658)), this[e(619, 486, 533, 455, "*Bhq") + "se"] = void (-6621 + -1 * -8941 + 16 * -145);
            return;
          }
        else i instanceof Error && (o("J!1e", 585, 613, 511) !== e(607, 623, 521, 395, ")93l") ? _0x286ffd[o("8se[", 659, 676, 774) + "ch"]((B) => _0x3ad452[o("jfEf", 889, 841, 768)](B)) : console[I(1356, 1184, 1355, 1312, "hoo)")](i));
        const C = {};
        C[I(1125, 1238, 1128, 1256, "aQ4i") + e(515, 528, 626, 577, "MA@)")] = !1, C[e(658, 677, 641, 767, "XVNx") + "s"] = [], C[A(1055, "Bq%)", 1158, 1048) + A(1128, "@1nd", 955, 1018)] = [], C[A(1318, "J!1e", 1323, 1191) + o("8se[", 661, 766, 803) + o("mr2d", 718, 779, 735)] = void (-4302 * -2 + 28 * -136 + -4796), C[o("r@Qv", 626, 628, 673)] = function() {
        }, C[o("&g#K", 818, 781, 859) + t(665, 598, "Bq%)", 539)] = "", this[I(1105, 1091, 1201, 1195, "8se[") + e(476, 613, 592, 557, "276G")] = new oi(C);
      }
    }
  }
  [FA(842, 949, 882, 876, "xHeR") + lA(517, "r@Qv") + lA(609, "*0R&") + "t"]() {
    function I(t, A, e, o, i) {
      return FA(t - 259, A - 211, e - 389, o - 23, o);
    }
    return this[I(1261, 1150, 1059, "dw#U") + I(1192, 1186, 1286, "OapT")];
  }
  [iA("ZQ7z", 1267) + xA(1477, 1457, 1374, 1475, "xHeR") + RA(1279, 1205, "!7S*", 1268)]() {
    var i;
    function I(C, B, Q, a, n) {
      return lA(n - 30, a);
    }
    function t(C, B, Q, a, n) {
      return RA(C - 92, B - 478, C, n - -905);
    }
    function A(C, B, Q, a, n) {
      return iA(Q, a - -1199);
    }
    if (!this[A(129, 186, "Gqhk", 229) + "se"])
      return t("Rc@4", 489, 367, 504, 382) === t("%9It", 387, 461, 396, 452) ? _0x2c8994[A(75, -38, "#0n2", 2) + A(-35, 36, "%9It", 70)][t("4lQK", 296, 326, 373, 365) + t("$vVk", 432, 383, 359, 337)] : void 0;
    function e(C, B, Q, a, n) {
      return xA(C - 113, B - 271, Q - 86, n - -369, C);
    }
    function o(C, B, Q, a, n) {
      return iA(a, B - -1070);
    }
    try {
      if (e("j28j", 1363, 1225, 1325, 1254) === o(247, 261, 205, "waJk", 256)) {
        if (!this[I(727, 804, 704, "Q#yl", 749) + "se"]) throw new _0x2f7332(A(203, 235, "jfEf", 108, 178) + e("rAw]", 966, 941, 949, 1044) + A(-17, 28, "J!1e", 48, -61) + o(349, 286, 282, "276G", 386) + ".");
        if (!this[A(235, 85, "hoo)", 216, 159) + I(671, 598, 557, "dw#U", 586) + "d"][t("Bq%)", 429, 513, 486, 461) + I(376, 473, 558, "VPGq", 494) + A(269, 268, "O6t^", 198, 247) + "ed"]()) throw new _0x26d1c2(A(268, 34, "dhKQ", 149, 38) + t("2bBT", 512, 313, 487, 426) + A(161, 229, "myr3", 215, 189) + A(165, 200, "%9It", 171, 177) + ".");
        this[I(589, 777, 725, "%9It", 688) + e("!7S*", 1247, 1245, 1298, 1276)] = new _0x5079ab(_0x3559b1(this[I(605, 693, 698, "[5dW", 715) + "se"], this[o(277, 331, 298, "2!d*", 402) + A(34, 126, "6p]]", 69, 56)]())), this[e("j28j", 1091, 1030, 1190, 1103) + o(273, 274, 382, "2bBT", 330) + "s"](this[t("[5dW", 451, 516, 347, 468) + o(11, 120, 23, "@1nd", 189)][I(723, 583, 676, "276G", 661) + "s"]), this[I(631, 573, 557, "O6t^", 649) + A(128, 184, "MA@)", 75, 70) + A(49, 157, "*Bhq", 94, 120)](this[A(197, 178, ")93l", 150, 165) + o(217, 166, 268, ")93l", 218)][A(120, 210, "j28j", 140, 80) + o(397, 309, 426, "Gqhk", 350)]);
      } else {
        const C = JSON[A(-19, 8, "Rc@4", 46, 70)](this[I(478, 514, 625, "Bq%)", 546) + "se"]);
        return (i = C == null ? void 0 : C[A(147, -42, "#0n2", 73, -52) + t("OapT", 314, 303, 376, 373)]) == null ? void 0 : i[A(98, 96, "xHeR", 76, 24) + o(117, 162, 186, "OapT", 240)];
      }
    } catch (C) {
      if (I(776, 780, 809, ")xnF", 709) !== o(24, 119, 76, "!7S*")) _0x471e91[e("2!d*", 1172, 1196, 1091, 1169)](_0x374420);
      else {
        if (C instanceof Error)
          if (o(357, 249, 143, "Rc@4") !== t("*Bhq", 319, 281, 285, 250)) K[A(85, 169, "$vVk", 127) + e("rAw]", 995, 994, 1199, 1101)](C);
          else throw new _0x3ec6f3(I(624, 796, 701, "!&FD", 741) + e("!7S*", 1165, 1137, 1364, 1245) + e("MA@)", 1283, 1179, 1312, 1235) + I(555, 740, 684, "4lQK", 669) + ".");
        return;
      }
    }
  }
}
const Zg = class Zg extends zE {
  static getInstance() {
    if (!this._instance) {
      const I = new XE();
      this._instance = new Zg(I);
    }
    return this._instance;
  }
};
p(Zg, "_instance");
let cI = Zg;
const $E = ({ children: g }) => {
  const I = UA(null);
  return Ix(I, _A.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(yn, { ref: I, children: g });
}, Ar = ({ cameraOptions: g }) => g ? /* @__PURE__ */ D(cn, { target: g.styleTarget, children: /* @__PURE__ */ D(
  Sa,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: cI.getInstance(),
    children: /* @__PURE__ */ D(Ja, { analytics: qE, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ D(
      Rn,
      {
        value: vE({
          onError: g.onError
        }),
        children: /* @__PURE__ */ D(nC, { children: /* @__PURE__ */ D($E, { children: /* @__PURE__ */ D(WE, { ...g }) }) })
      }
    ) })
  }
) }) : null;
mB(Ar, "x-dot-document-auto-capture", ["cameraOptions"]);
