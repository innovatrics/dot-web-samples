var sr = Object.defineProperty;
var Sn = (i) => {
  throw TypeError(i);
};
var Qr = (i, o, t) => o in i ? sr(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var D = (i, o, t) => Qr(i, typeof o != "symbol" ? o + "" : o, t), Rn = (i, o, t) => o.has(i) || Sn("Cannot " + t);
var p = (i, o, t) => (Rn(i, o, "read from private field"), t ? t.call(i) : o.get(i)), L = (i, o, t) => o.has(i) ? Sn("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), v = (i, o, t, e) => (Rn(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
var no, G, tI, oI, ye, Mn, iI, gg, zg, ng, Ig, gI, Lt = {}, nI = [], cr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ui = Array.isArray;
function ie(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function II(i) {
  var o = i.parentNode;
  o && o.removeChild(i);
}
function hA(i, o, t) {
  var e, A, g, n = {};
  for (g in o) g == "key" ? e = o[g] : g == "ref" ? A = o[g] : n[g] = o[g];
  if (arguments.length > -94 + 4169 * -1 + -853 * -5 && (n.children = arguments.length > -98 * -100 + -1013 * 6 + 1 * -3719 ? no.call(arguments, 706 * 14 + -2160 + -7722) : t), typeof i == "function" && i.defaultProps != null)
    for (g in i.defaultProps) void (1170 + 1 * 8263 + -9433) === n[g] && (n[g] = i.defaultProps[g]);
  return Ft(i, n, e, A, null);
}
function Ft(i, o, t, e, A) {
  var g = {};
  g.type = i, g.props = o, g.key = t, g.ref = e, g.__k = null, g.__ = null, g.__b = 0, g.__e = null, g.__d = void (4237 + 223 * -19), g.__c = null, g.constructor = void (3144 + -1 * 1812 + -1332), g.__v = A ?? ++tI, g.__i = -(1132 * -6 + 3875 * -2 + -14543 * -1), g.__u = 0;
  var n = g;
  return A == null && G.vnode != null && G.vnode(n), n;
}
function xr() {
  var i = {};
  return i.current = null, i;
}
function YA(i) {
  return i.children;
}
function JA(i, o) {
  this.props = i, this.context = o;
}
function ve(i, o) {
  if (o == null) return i.__ ? ve(i.__, i.__i + (-3065 * -1 + 9 * -839 + -641 * -7)) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? ve(i) : null;
}
function aI(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = 4254 + -2127 * 2; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return aI(i);
  }
}
function ag(i) {
  (!i.__d && (i.__d = !0) && ye.push(i) && !Yo.__r++ || Mn !== G.debounceRendering) && ((Mn = G.debounceRendering) || iI)(Yo);
}
function Yo() {
  var i, o, t, e, A, g, n, I;
  for (ye.sort(gg); i = ye.shift(); ) i.__d && (o = ye.length, e = void (-7919 + -7919 * -1), g = (A = (t = i).__v).__e, n = [], I = [], t.__P && ((e = ie({}, A)).__v = A.__v + (928 + 1 * 8117 + 323 * -28), G.vnode && G.vnode(e), $g(t.__P, e, A, t.__n, t.__P.namespaceURI, -12421 + 4151 * 3 & A.__u ? [g] : null, n, g ?? ve(A), !!(-9410 + -15 * 653 + 19237 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, BI(n, e, I), e.__e != g && aI(e)), ye.length > o && ye.sort(gg));
  Yo.__r = 3307 + 4 * 677 + 3 * -2005;
}
function rI(i, o, t, e, A, g, n, I, a, r, B) {
  var C, x, Q, E, d, u = e && e.__k || nI, c = o.length;
  for (t.__d = a, Er(t, o, u), a = t.__d, C = -2885 + 1 * 7609 + 1 * -4724; C < c; C++) (Q = t.__k[C]) != null && typeof Q != "boolean" && typeof Q != "function" && (x = Q.__i === -1 ? Lt : u[Q.__i] || Lt, Q.__i = C, $g(i, Q, x, A, g, n, I, a, r, B), E = Q.__e, Q.ref && x.ref != Q.ref && (x.ref && An(x.ref, null, Q), B.push(Q.ref, Q.__c || E, Q)), d == null && E != null && (d = E), -28942 * -1 + -29257 * 1 + -1 * -65851 & Q.__u || x.__k === Q.__k ? (a && typeof Q.type == "string" && !i.contains(a) && (a = ve(x)), a = CI(Q, a, i)) : typeof Q.type == "function" && Q.__d !== void 0 ? a = Q.__d : E && (a = E.nextSibling), Q.__d = void (1 * 9998 + -1 * -1450 + 477 * -24), Q.__u &= -(442768 + 3039 * -81));
  t.__d = a, t.__e = d;
}
function Er(i, o, t) {
  var e, A, g, n, I, a = o.length, r = t.length, B = r, C = 1063 + -379 * 9 + 2348;
  for (i.__k = [], e = -9056 + -49 * 83 + 13123; e < a; e++) n = e + C, (A = i.__k[e] = (A = o[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? Ft(null, A, null, null, null) : ui(A) ? Ft(YA, { children: A }, null, null, null) : void (-7345 + -1 * 8841 + 16186) === A.constructor && A.__b > -8351 + -4498 * 2 + -83 * -209 ? Ft(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = i, A.__b = i.__b + (5256 * 1 + 82 + -5337), I = dr(A, t, n, B), A.__i = I, g = null, -(35 * -4 + -4402 + 4543) !== I && (B--, (g = t[I]) && (g.__u |= 188414 + 1 * -152365 + -569 * -167)), g == null || g.__v === null ? (-(-1083 * -4 + -1783 * -4 + -11463) == I && C--, typeof A.type != "function" && (A.__u |= 65536)) : I !== n && (I == n - (-2354 + 1684 * 5 + 6065 * -1) ? C = I - n : I == n + (-1816 + -1817 * -1) ? C++ : I > n ? B > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= 103697 + -21126 * -1 + -59287 * 1))) : (g = t[n]) && g.key == null && g.__e && -4833 * -1 + -238 + -5 * 919 == (-91456 + -17 * 3374 + 279886 & g.__u) && (g.__e == i.__d && (i.__d = ve(g)), rg(g, g, !(-2271 * 1 + 3809 + -1537)), t[n] = null, B--);
  if (B)
    for (e = -921 * -5 + 6504 * -1 + 1 * 1899; e < r; e++) (g = t[e]) != null && !(131072 & g.__u) && (g.__e == i.__d && (i.__d = ve(g)), rg(g, g));
}
function CI(i, o, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = -47 * -51 + -1073 + -1 * 1324; e && A < e.length; A++) e[A] && (e[A].__ = i, o = CI(e[A], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -338 + 1 * 346 === o.nodeType);
  return o;
}
function ge(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (ui(i) ? i.some(function(t) {
    ge(t, o);
  }) : o.push(i)), o;
}
function dr(i, o, t, e) {
  var A = i.key, g = i.type, n = t - 1, I = t + 1, a = o[t];
  if (a === null || a && A == a.key && g === a.type && 4483 + -4 * -437 + -31 * 201 == (3 * 74349 + 60044 * 3 + 1 * -272107 & a.__u)) return t;
  if (e > (a != null && 7043 * -1 + -561 * 4 + 1 * 9287 == (201066 + -6 * 7009 + 5588 * -5 & a.__u) ? 4623 + 2473 * -1 + -2149 : -1700 + 68 * 25)) for (; n >= -6135 + 9 * 318 + 3273 || I < o.length; ) {
    if (n >= -936 + 2 * 499 + -62) {
      if ((a = o[n]) && -10 * 993 + -9277 * -1 + 653 == (-91 * -788 + -52830 + 112194 & a.__u) && A == a.key && g === a.type) return n;
      n--;
    }
    if (I < o.length) {
      if ((a = o[I]) && -1819 + 5 * 1403 + -5196 == (194886 + -88199 * -1 + -152013 & a.__u) && A == a.key && g === a.type) return I;
      I++;
    }
  }
  return -(-2333 + 151 * -49 + 1 * 9733);
}
function vn(i, o, t) {
  o[1378 * 4 + -389 + -5123] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || cr.test(o) ? t : t + "px";
}
function Qo(i, o, t, e, A) {
  var g;
  A: if (o === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || vn(i.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || vn(i.style, o, t[o]);
    }
  else if (o[-4619 + -2857 * 3 + 1 * 13190] === "o" && o[6485 + -995 * 7 + 481] === "n") g = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(2 * -284 + 2634 + 4 * -516) : o.slice(-4 * -948 + -3069 + -721), i.l || (i.l = {}), i.l[o + g] = t, t ? e ? t.u = e.u : (t.u = zg, i.addEventListener(o, g ? Ig : ng, g)) : i.removeEventListener(o, g ? Ig : ng, g);
  else {
    if (A == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(3076 + 1 * -3075) === t && o[-3589 * 2 + 7243 + 1 * -61] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && -3114 + 3 * 2053 + -3044 == t ? "" : t));
  }
}
function Ln(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = zg++;
      else if (o.t < t.u) return;
      return t(G.event ? G.event(o) : o);
    }
  };
}
function $g(i, o, t, e, A, g, n, I, a, r) {
  var B, C, x, Q, E, d, u, c, h, m, R, M, J, w, q, dA, V = o.type;
  if (o.constructor !== void 0) return null;
  13 * -479 + -5248 + 11603 & t.__u && (a = !!(2445 * -2 + -5 * -1403 + -299 * 7 & t.__u), g = [I = o.__e = t.__e]), (B = G.__b) && B(o);
  A: if (typeof V == "function") try {
    if (c = o.props, h = "prototype" in V && V.prototype.render, m = (B = V.contextType) && e[B.__c], R = B ? m ? m.props.value : B.__ : e, t.__c ? u = (C = o.__c = t.__c).__ = C.__E : (h ? o.__c = C = new V(c, R) : (o.__c = C = new JA(c, R), C.constructor = V, C.render = ur), m && m.sub(C), C.props = c, C.state || (C.state = {}), C.context = R, C.__n = e, x = C.__d = !(328 + 4 * -82), C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && V.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = ie({}, C.__s)), ie(C.__s, V.getDerivedStateFromProps(c, C.__s))), Q = C.props, E = C.state, C.__v = o, x) h && V.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && V.getDerivedStateFromProps == null && c !== Q && C.componentWillReceiveProps != null && C.componentWillReceiveProps(c, R), !C.__e && (C.shouldComponentUpdate != null && !(-10837 + 1 * 10838) === C.shouldComponentUpdate(c, C.__s, R) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (C.props = c, C.state = C.__s, C.__d = !(2613 + 2612 * -1)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(pA) {
          pA && (pA.__ = o);
        }), M = -1 * 8581 + -4351 * -2 + -121; M < C._sb.length; M++) C.__h.push(C._sb[M]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(c, C.__s, R), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(Q, E, d);
      });
    }
    if (C.context = R, C.props = c, C.__P = i, C.__e = !(8456 + 1 * -8455), J = G.__r, w = -9209 + 1 * 2017 + 7192, h) {
      for (C.state = C.__s, C.__d = !(1 * -6457 + -9887 * 1 + 16345), J && J(o), B = C.render(C.props, C.state, C.context), q = 0; q < C._sb.length; q++) C.__h.push(C._sb[q]);
      C._sb = [];
    } else do
      C.__d = !(35 * 209 + -1 * 9773 + -2459 * -1), J && J(o), B = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++w < -5527 + 347 * 16);
    C.state = C.__s, C.getChildContext != null && (e = ie(ie({}, e), C.getChildContext())), h && !x && C.getSnapshotBeforeUpdate != null && (d = C.getSnapshotBeforeUpdate(Q, E)), rI(i, ui(dA = B != null && B.type === YA && B.key == null ? B.props.children : B) ? dA : [dA], o, t, e, A, g, n, I, a, r), C.base = o.__e, o.__u &= -(8690 + -977 * -4 + -12437), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (pA) {
    o.__v = null, a || g != null ? (o.__e = I, o.__u |= a ? -4285 + -3279 * -2 + -2113 : 255 * 10 + 2 * 2207 + -6932, g[g.indexOf(I)] = null) : (o.__e = t.__e, o.__k = t.__k), G.__e(pA, o, t);
  }
  else g == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = lr(t.__e, o, t, e, A, g, n, a, r);
  (B = G.diffed) && B(o);
}
function BI(i, o, t) {
  o.__d = void (-284 * 4 + 4705 + -1 * 3569);
  for (var e = -1 * 7631 + 3 * 1411 + -1699 * -2; e < t.length; e++) An(t[e], t[++e], t[++e]);
  G.__c && G.__c(o, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(g) {
        g.call(A);
      });
    } catch (g) {
      G.__e(g, A.__v);
    }
  });
}
function lr(i, o, t, e, A, g, n, I, a) {
  var r, B, C, x, Q, E, d, u = t.props, c = o.props, h = o.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), g != null) {
    for (r = 0; r < g.length; r++) if ((Q = g[r]) && "setAttribute" in Q == !!h && (h ? Q.localName === h : 1280 + 2 * -2767 + 4257 === Q.nodeType)) {
      i = Q, g[r] = null;
      break;
    }
  }
  if (i == null) {
    if (h === null) return document.createTextNode(c);
    i = document.createElementNS(A, h, c.is && c), g = null, I = !(-726 * 4 + 5671 + -2766);
  }
  if (h === null) u === c || I && i.data === c || (i.data = c);
  else {
    if (g = g && no.call(i.childNodes), u = t.props || Lt, !I && g != null)
      for (u = {}, r = 7034 + -2846 * 1 + 3 * -1396; r < i.attributes.length; r++) u[(Q = i.attributes[r]).name] = Q.value;
    for (r in u) if (Q = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = Q;
      else if (r !== "key" && !(r in c)) {
        if (r == "value" && "defaultValue" in c || r == "checked" && "defaultChecked" in c) continue;
        Qo(i, r, null, Q, A);
      }
    }
    for (r in c) Q = c[r], r == "children" ? x = Q : r == "dangerouslySetInnerHTML" ? B = Q : r == "value" ? E = Q : r == "checked" ? d = Q : r === "key" || I && typeof Q != "function" || u[r] === Q || Qo(i, r, Q, u[r], A);
    if (B) I || C && (B.__html === C.__html || B.__html === i.innerHTML) || (i.innerHTML = B.__html), o.__k = [];
    else if (C && (i.innerHTML = ""), rI(i, ui(x) ? x : [x], o, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, g, n, g ? g[-2297 * -4 + 9336 + -18524] : t.__k && ve(t, -3633 + 1 * 4441 + -808), I, a), g != null)
      for (r = g.length; r--; ) g[r] != null && II(g[r]);
    I || (r = "value", void (2 * -3739 + 9903 + -2425) !== E && (E !== i[r] || h === "progress" && !E || h === "option" && E !== u[r]) && Qo(i, r, E, u[r], A), r = "checked", void (-2 * 4239 + -5033 * -1 + 13 * 265) !== d && d !== i[r] && Qo(i, r, d, u[r], A));
  }
  return i;
}
function An(i, o, t) {
  try {
    typeof i == "function" ? i(o) : i.current = o;
  } catch (e) {
    G.__e(e, t);
  }
}
function rg(i, o, t) {
  var e, A;
  if (G.unmount && G.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || An(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (g) {
      G.__e(g, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -87 * 103 + 5792 + -1 * -3169; A < e.length; A++) e[A] && rg(e[A], o, t || typeof i.type != "function");
  t || i.__e == null || II(i.__e), i.__c = i.__ = i.__e = i.__d = void (-7828 + -22 * 84 + -164 * -59);
}
function ur(i, o, t) {
  return this.constructor(i, t);
}
function ce(i, o, t) {
  var e, A, g, n;
  G.__ && G.__(i, o), A = (e = typeof t == "function") ? null : t && t.__k || o.__k, g = [], n = [], $g(o, i = (!e && t || o).__k = hA(YA, null, [i]), A || Lt, Lt, o.namespaceURI, !e && t ? [t] : A ? null : o.firstChild ? no.call(o.childNodes) : null, g, !e && t ? t : A ? A.__e : o.firstChild, e, n), BI(g, i, n);
}
function en(i, o) {
  ce(i, o, en);
}
function tn(i, o, t) {
  var e, A, g, n, I = ie({}, i.props);
  for (g in i.type && i.type.defaultProps && (n = i.type.defaultProps), o) g == "key" ? e = o[g] : g == "ref" ? A = o[g] : I[g] = void (68 * -142 + 3803 + -5853 * -1) === o[g] && n !== void 0 ? n[g] : o[g];
  return arguments.length > 14 * 269 + 7417 + -11181 && (I.children = arguments.length > 719 + 358 * -2 ? no.call(arguments, 9 * 153 + 5642 + -3 * 2339) : t), Ft(i.type, I, e || i.key, A || i.ref, null);
}
function at(i, o) {
  var t = { __c: o = "__cC" + gI++, __: i, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, g;
    return this.getChildContext || (A = [], (g = {})[o] = this, this.getChildContext = function() {
      return g;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, ag(I);
      });
    }, this.sub = function(n) {
      A.push(n);
      var I = n.componentWillUnmount;
      n.componentWillUnmount = function() {
        A && A.splice(A.indexOf(n), 1), I && I.call(n);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
no = nI.slice, G = { __e: function(i, o, t, e) {
  for (var A, g, n; o = o.__; ) if ((A = o.__c) && !A.__) try {
    if ((g = A.constructor) && g.getDerivedStateFromError != null && (A.setState(g.getDerivedStateFromError(i)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    i = I;
  }
  throw i;
} }, tI = 4 * -2269 + -3 * -1127 + 17 * 335, oI = function(i) {
  return i != null && i.constructor == null;
}, JA.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ie({}, this.state), typeof i == "function" && (i = i(ie({}, t), this.props)), i && ie(t, i), i != null && this.__v && (o && this._sb.push(o), ag(this));
}, JA.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(-10798 + 10798 * 1), i && this.__h.push(i), ag(this));
}, JA.prototype.render = YA, ye = [], iI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, gg = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, Yo.__r = 1415 * -1 + -471 + 1886, zg = 0, ng = Ln(!(1 * -4913 + 187 + 29 * 163)), Ig = Ln(!(-9050 + -18 * -364 + 2498 * 1)), gI = 10491 + -3497 * 3;
function on() {
  return (on = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = -16 * 212 + -4966 + 8359; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var hr = ["context", "children"];
function fr(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = function(e, A) {
    if (e == null) return {};
    var g, n, I = {}, a = Object.keys(e);
    for (n = -14 * -194 + -523 * -1 + -79 * 41; n < a.length; n++) A.indexOf(g = a[n]) >= 3739 * 2 + 8 * 1139 + -7 * 2370 || (I[g] = e[g]);
    return I;
  }(i, hr);
  return tn(o, t);
}
function pr() {
  var i = {};
  i.detail = {}, i.bubbles = !(9380 + -67 * 140), i.cancelable = !(-92 * -23 + 6222 + -2 * 4169);
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = hA(fr, on({}, this._props, { context: o.detail.context }), function t(e, A) {
    if (-4 * 919 + 3958 + 31 * -9 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var g = [], n = {}, I = -121 * -37 + 5152 + -9629 * 1, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[sI(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var B = t(r[I], null), C = r[I].slot;
      C ? n[C] = hA(Jn, { name: C }, B) : g[I] = B;
    }
    var x = A ? hA(Jn, null, g) : g;
    return hA(A || e.nodeName.toLowerCase(), n, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? en : ce)(this._vdom, this._root);
}
function sI(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function yr(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void (-2013 + 9 * 28 + 1761), e[sI(i)] = t, this._vdom = tn(this._vdom, e), ce(this._vdom, this._root);
  }
}
function Dr() {
  ce(this._vdom = null, this._root);
}
function Jn(i, o) {
  var t = this;
  return hA("slot", on({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function wr(i, o, t, e) {
  function A() {
    var g = Reflect.construct(HTMLElement, [], A);
    return g._vdomComponent = i, g._root = g, g;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = pr, A.prototype.attributeChangedCallback = yr, A.prototype.disconnectedCallback = Dr, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(g) {
    Object.defineProperty(A.prototype, g, { get: function() {
      return this._vdom.props[g];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(g, null, n) : (this._props || (this._props = {}), this._props[g] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(g, n);
    } });
  }), customElements.define(o, A);
}
var mr = 9077 * 1 + -94 * -16 + -10581;
function y(i, o, t, e, A, g) {
  o || (o = {});
  var n, I, a = o;
  if ("ref" in a)
    for (I in a = {}, o) I == "ref" ? n = o[I] : a[I] = o[I];
  var r = {};
  r.type = i, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (1322 * -2 + -9034 + 11678), r.__c = null, r.constructor = void (1208 + 2 * 326 + -1 * 1860), r.__v = --mr, r.__i = -(-1 * -4171 + 6332 + -10502), r.__u = 0, r.__source = A, r.__self = g;
  var B = r;
  if (typeof i == "function" && (n = i.defaultProps))
    for (I in n) void (1116 + 393 * -12 + 900 * 4) === a[I] && (a[I] = n[I]);
  return G.vnode && G.vnode(B), B;
}
var mA = function() {
  return mA = Object.assign || function(o) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var g in t) Object.prototype.hasOwnProperty.call(t, g) && (o[g] = t[g]);
    }
    return o;
  }, mA.apply(this, arguments);
};
function et(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, A = o.length, g; e < A; e++)
    (g || !(e in o)) && (g || (g = Array.prototype.slice.call(o, 0, e)), g[e] = o[e]);
  return i.concat(g || Array.prototype.slice.call(o));
}
function br(i) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var kr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gr = br(function(i) {
  return kr.test(i) || i.charCodeAt(202 * 38 + -95 + 399 * -19) === -3304 + 881 * -1 + 1 * 4296 && i.charCodeAt(1 * -7747 + -8992 * -1 + -1244) === 1 * 2501 + -9517 + -509 * -14 && i.charCodeAt(287 * -2 + 1 * 1303 + -1 * 727) < -5379 * 1 + 1 * 4544 + 1 * 926;
}), xe, Z, Yi, Un, tt = -720 + -347 * -27 + -8649, QI = [], _ = G, Yn = _.__b, Wn = _.__r, On = _.diffed, Hn = _.__c, Kn = _.unmount, Tn = _.__;
function rt(i, o) {
  _.__h && _.__h(Z, i, tt || o), tt = 9 * -81 + 87 * -29 + 3252;
  var t = {};
  t.__ = [], t.__h = [];
  var e = Z.__H || (Z.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function rA(i) {
  return tt = 2288 * -1 + 6437 + -4148, gn(EI, i);
}
function gn(i, o, t) {
  var e = rt(xe++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : EI(void (-5887 + -29 * -203), o), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[-9203 + -1534 * -6]], e.__c.setState({}));
  }], e.__c = Z, !Z.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var B = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (B.every(function(x) {
        return !x.__N;
      })) return !g || g.call(this, I, a, r);
      var C = !(-6523 * 1 + 15 * -288 + -10844 * -1);
      return B.forEach(function(x) {
        if (x.__N) {
          var Q = x.__[0];
          x.__ = x.__N, x.__N = void 0, Q !== x.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!g || g.call(this, I, a, r));
    };
    Z.u = !(2572 + 7 * 601 + -6779);
    var g = Z.shouldComponentUpdate, n = Z.componentWillUpdate;
    Z.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var B = g;
        g = void (-1 * 5101 + 535 * -1 + -2 * -2818), A(I, a, r), g = B;
      }
      n && n.call(this, I, a, r);
    }, Z.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function K(i, o) {
  var t = rt(xe++, 3);
  !_.__s && nn(t.__H, o) && (t.__ = i, t.i = o, Z.__H.__h.push(t));
}
function Ct(i, o) {
  var t = rt(xe++, 4);
  !_.__s && nn(t.__H, o) && (t.__ = i, t.i = o, Z.__h.push(t));
}
function z(i) {
  return tt = 5, fA(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function cI(i, o, t) {
  tt = 1480 + 1 * -1055 + -419, Ct(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (3833 * 2 + -1179 * -4 + 12382 * -1);
  }, t == null ? t : t.concat(i));
}
function fA(i, o) {
  var t = rt(xe++, 7);
  return nn(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function bA(i, o) {
  return tt = 8, fA(function() {
    return i;
  }, o);
}
function Ee(i) {
  var o = Z.context[i.__c], t = rt(xe++, 9);
  return t.c = i, o ? (t.__ == null && (t.__ = !(-6950 + -7559 * -1 + -1 * 609), o.sub(Z)), o.props.value) : i.__;
}
function Wo(i, o) {
  _.useDebugValue && _.useDebugValue(o ? o(i) : i);
}
function xI() {
  var i = rt(xe++, 11);
  if (!i.__) {
    for (var o = Z.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-2423 * -1 + 2029 + -4452, 0]);
    i.__ = "P" + t[-1 * 1928 + -2 * 3673 + -4637 * -2] + "-" + t[9933 + 37 * -80 + -6972]++;
  }
  return i.__;
}
function Nr() {
  for (var i; i = QI.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(po), i.__H.__h.forEach(Cg), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], _.__e(o, i.__v);
  }
}
_.__b = function(i) {
  Z = null, Yn && Yn(i);
}, _.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), Tn && Tn(i, o);
}, _.__r = function(i) {
  Wn && Wn(i), xe = -3594 + 1 * -5213 + 8807 * 1;
  var o = (Z = i.__c).__H;
  o && (Yi === Z ? (o.__h = [], Z.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (o.__h.forEach(po), o.__h.forEach(Cg), o.__h = [], xe = 1 * 1115 + 580 + -1695)), Yi = Z;
}, _.diffed = function(i) {
  On && On(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (4424 + -1 * -5398 + -161 * 61 !== QI.push(o) && Un === _.requestAnimationFrame || ((Un = _.requestAnimationFrame) || Fr)(Nr)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-3875 + 5 * 775);
  })), Yi = Z = null;
}, _.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(po), t.__h = t.__h.filter(function(e) {
        return !e.__ || Cg(e);
      });
    } catch (e) {
      o.some(function(A) {
        A.__h && (A.__h = []);
      }), o = [], _.__e(e, t.__v);
    }
  }), Hn && Hn(i, o);
}, _.unmount = function(i) {
  Kn && Kn(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      po(e);
    } catch (A) {
      o = A;
    }
  }), t.__H = void (-1 * -113 + 17 * 57 + -1082), o && _.__e(o, t.__v));
};
var Pn = typeof requestAnimationFrame == "function";
function Fr(i) {
  var o, t = function() {
    clearTimeout(e), Pn && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 100);
  Pn && (o = requestAnimationFrame(t));
}
function po(i) {
  var o = Z, t = i.__c;
  typeof t == "function" && (i.__c = void (4517 + 1 * -4517), t()), Z = o;
}
function Cg(i) {
  var o = Z;
  i.__c = i.__(), Z = o;
}
function nn(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function EI(i, o) {
  return typeof o == "function" ? o(i) : o;
}
function dI(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function Bg(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !(16551 + -1839 * 9);
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(11122 + 11122 * -1);
  return !(-330 + 2029 * 3 + -5756);
}
function sg(i, o) {
  this.props = i, this.context = o;
}
function Sr(i, o) {
  function t(A) {
    var g = this.props.ref, n = g == A.ref;
    return !n && g && (g.call ? g(null) : g.current = null), o ? !o(this.props, A) || !n : Bg(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, hA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(-10 * -967 + -2307 * -2 + 14284 * -1), e.__f = !(7 * 1262 + -12 * -788 + -10 * 1829), e;
}
(sg.prototype = new JA()).isPureReactComponent = !(784 * 3 + 6428 + -8780 * 1), sg.prototype.shouldComponentUpdate = function(i, o) {
  return Bg(this.props, i) || Bg(this.state, o);
};
var qn = G.__b;
G.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), qn && qn(i);
};
var Rr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -5582 + 25 * 131 + 6218;
function lI(i) {
  function o(t) {
    var e = dI({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = Rr, o.render = o, o.prototype.isReactComponent = o.__f = !(334 * 11 + 2267 + -5941), o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var jn = function(i, o) {
  return i == null ? null : ge(ge(i).map(o));
}, Mr = { map: jn, forEach: jn, count: function(i) {
  return i ? ge(i).length : -40 * 20 + -5 * 1261 + -7 * -1015;
}, only: function(i) {
  var o = ge(i);
  if (7386 * 1 + -586 * 16 + 1991 !== o.length) throw "Children.only";
  return o[3 * -265 + -6663 * -1 + 1956 * -3];
}, toArray: ge }, vr = G.__e;
G.__e = function(i, o, t, e) {
  if (i.then) {
    for (var A, g = o; g = g.__; ) if ((A = g.__c) && A.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), A.__c(i, o);
  }
  vr(i, o, t, e);
};
var Zn = G.unmount;
function uI(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = dI({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return uI(e, o, t);
  })), i;
}
function hI(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return hI(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !(-105 * 47 + -10 * 535 + 10285), i.__c.__P = t)), i;
}
function yo() {
  this.__u = -53 * 71 + -1951 + 2857 * 2, this.t = null, this.__b = null;
}
function fI(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function Lr(i) {
  var o, t, e;
  function A(g) {
    if (o || (o = i()).then(function(n) {
      t = n.default || n;
    }, function(n) {
      e = n;
    }), e) throw e;
    if (!t) throw o;
    return hA(t, g);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function yt() {
  this.u = null, this.o = null;
}
G.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && -2035 + -39 * -53 & i.__u && (i.type = null), Zn && Zn(i);
}, (yo.prototype = new JA()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = fI(e.__v), g = !(12809 + -2 * 6404), n = function() {
    g || (g = !(3229 + -397 * -15 + -56 * 164), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[5484 * -1 + -8563 * -1 + -1 * 3079] = hI(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || 2297 + 4513 * -1 + -1 * -2248 & o.__u || e.setState({ __a: e.__b = e.__v.__k[-772 * 5 + 7889 + -4029] }), i.then(n, n);
}, yo.prototype.componentWillUnmount = function() {
  this.t = [];
}, yo.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-1 * 4870 + 1 * 3977 + -893 * -1].__c;
      this.__v.__k[2567 * -1 + 728 * 6 + -1801] = uI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = o.__a && hA(YA, null, i.fallback);
  return A && (A.__u &= -(-127 * 48 + -3358 + 9487)), [hA(YA, null, o.__a ? null : i.children), A];
};
var Vn = function(i, o, t) {
  if (++t[23 * -373 + 66 * 23 + 7062] === t[1 * -2787 + 7449 + -4662] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[188 * -9 + 7655 + -5963] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > -5 * -1174 + 3442 * -2 + 1017 * 1; ) t.pop()();
    if (t[-1 * -9227 + 83 * -95 + -3 * 447] < t[5858 + 6309 * -1 + 451 * 1]) break;
    i.u = t = t[3 * -1567 + -6497 * -1 + -1794];
  }
};
function Jr(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function Ur(i) {
  var o = this, t = i.i;
  o.componentWillUnmount = function() {
    ce(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-2 * 2406 + 31 * -199 + 10981);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 259 + -3 * 86, -4003 * 2 + -1357 * 2 + 10721), o.i.removeChild(e);
  } }), ce(hA(Jr, { context: o.context }, i.__v), o.l);
}
function Yr(i, o) {
  var t = {};
  t.__v = i, t.i = o;
  var e = hA(Ur, t);
  return e.containerInfo = o, e;
}
(yt.prototype = new JA()).__a = function(i) {
  var o = this, t = fI(o.__v), e = o.o.get(i);
  return e[953 * 1 + 6273 + 1 * -7226]++, function(A) {
    var g = function() {
      o.props.revealOrder ? (e.push(A), Vn(o, i, e)) : A();
    };
    t ? t(g) : g();
  };
}, yt.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = ge(i.children);
  i.revealOrder && i.revealOrder[21 * 443 + -19 * 95 + 7498 * -1] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-206 * 43 + -1252 + 10111, 9 * 311 + 1 * -3208 + 409, this.u]);
  return i.children;
}, yt.prototype.componentDidUpdate = yt.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    Vn(i, t, o);
  });
};
var pI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -17502 + 3 * 31370 + -16505, Wr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Or = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Hr = /[A-Z0-9]/g, Kr = typeof document < "u", Tr = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function Pr(i, o, t) {
  return o.__k == null && (o.textContent = ""), ce(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function qr(i, o, t) {
  return en(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
JA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(JA.prototype, i, { configurable: !(7461 + 122 * -1 + -7339), get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !(-4181 + 1 * 5328 + -1147), t.writable = !(7766 + -82 * 27 + -694 * 8), t.value = o, Object.defineProperty(this, i, t);
  } });
});
var _n = G.event;
function jr() {
}
function Zr() {
  return this.cancelBubble;
}
function Vr() {
  return this.defaultPrevented;
}
G.event = function(i) {
  return _n && (i = _n(i)), i.persist = jr, i.isPropagationStopped = Zr, i.isDefaultPrevented = Vr, i.nativeEvent = i;
};
var Do = {};
Do.enumerable = !(7460 + 1 * -7609 + 150), Do.configurable = !0, Do.get = function() {
  return this.class;
};
var In, _r = Do, Xn = G.vnode;
G.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, A = {};
    for (var g in t) {
      var n = t[g];
      if (!(g === "value" && "defaultValue" in t && n == null || Kr && g === "children" && e === "noscript" || g === "class" || g === "className")) {
        var I = g.toLowerCase();
        g === "defaultValue" && "value" in t && t.value == null ? g = "value" : g === "download" && n === !0 ? n = "" : I === "translate" && n === "no" ? n = !(260 + -2539 * -1 + -2798 * 1) : I === "ondoubleclick" ? g = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || Tr(t.type) ? I === "onfocus" ? g = "onfocusin" : I === "onblur" ? g = "onfocusout" : Or.test(g) ? g = I : -(111 * -12 + -3734 + 5067) === e.indexOf("-") && Wr.test(g) ? g = g.replace(Hr, "-$&").toLowerCase() : n === null && (n = void 0) : I = g = "oninput", I === "oninput" && A[g = I] && (g = "oninputCapture"), A[g] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = ge(t.children).forEach(function(a) {
      a.props.selected = -(3228 + 41 * -18 + 1 * -2489) != A.value.indexOf(a.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = ge(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(-5407 * 1 + -4 * -1433 + -324) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", _r)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), o.props = A;
  }(i), i.$$typeof = pI, Xn && Xn(i);
};
var zn = G.__r;
G.__r = function(i) {
  zn && zn(i), In = i.__c;
};
var $n = G.diffed;
G.diffed = function(i) {
  $n && $n(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), In = null;
};
var BA = {};
BA.readContext = function(i) {
  return In.__n[i.__c].props.value;
}, BA.useCallback = bA, BA.useContext = Ee, BA.useDebugValue = Wo, BA.useDeferredValue = mI, BA.useEffect = K, BA.useId = xI, BA.useImperativeHandle = cI, BA.useInsertionEffect = kI, BA.useLayoutEffect = Ct, BA.useMemo = fA, BA.useReducer = gn, BA.useRef = z, BA.useState = rA, BA.useSyncExternalStore = GI, BA.useTransition = bI;
var yI = {};
yI.current = BA;
var DI = {};
DI.ReactCurrentDispatcher = yI;
var Xr = DI;
function zr(i) {
  return hA.bind(null, i);
}
function hi(i) {
  return !!i && i.$$typeof === pI;
}
function $r(i) {
  return hi(i) && i.type === YA;
}
function AC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function eC(i) {
  return hi(i) ? tn.apply(null, arguments) : i;
}
function tC(i) {
  return !!i.__k && (ce(null, i), !0);
}
function oC(i) {
  return i && (i.base || 4336 * -1 + 7216 * 1 + 1 * -2879 === i.nodeType && i) || null;
}
var iC = function(i, o) {
  return i(o);
}, gC = function(i, o) {
  return i(o);
}, nC = YA;
function wI(i) {
  i();
}
function mI(i) {
  return i;
}
function bI() {
  return [!(18 * 177 + 1649 + 2 * -2417), wI];
}
var kI = Ct, IC = hi;
function GI(i, o) {
  var t = o(), e = rA({ h: { __: t, v: o } }), A = e[-8683 + 7 * 240 + 7003].h, g = e[4684 + 223 * -21];
  return Ct(function() {
    A.__ = t, A.v = o, Wi(A) && g({ h: A });
  }, [i, t, o]), K(function() {
    return Wi(A) && g({ h: A }), i(function() {
      Wi(A) && g({ h: A });
    });
  }, [i]), t;
}
function Wi(i) {
  var o, t, e = i.v, A = i.__;
  try {
    var g = e();
    return !((o = A) === (t = g) && (3431 + 1 * 9787 + -6609 * 2 !== o || 1 / o == (-127 * -50 + -461 * -9 + -10498) / t) || o != o && t != t);
  } catch {
    return !0;
  }
}
var k = {};
k.useState = rA, k.useId = xI, k.useReducer = gn, k.useEffect = K, k.useLayoutEffect = Ct, k.useInsertionEffect = kI, k.useTransition = bI, k.useDeferredValue = mI, k.useSyncExternalStore = GI, k.startTransition = wI, k.useRef = z, k.useImperativeHandle = cI, k.useMemo = fA, k.useCallback = bA, k.useContext = Ee, k.useDebugValue = Wo, k.version = "17.0.2", k.Children = Mr, k.render = Pr, k.hydrate = qr, k.unmountComponentAtNode = tC, k.createPortal = Yr, k.createElement = hA, k.createContext = at, k.createFactory = zr, k.cloneElement = eC, k.createRef = xr, k.Fragment = YA, k.isValidElement = hi, k.isElement = IC, k.isFragment = $r, k.isMemo = AC, k.findDOMNode = oC, k.Component = JA, k.PureComponent = sg, k.memo = Sr, k.forwardRef = lI, k.flushSync = gC, k.unstable_batchedUpdates = iC, k.StrictMode = nC, k.Suspense = yo, k.SuspenseList = yt, k.lazy = Lr, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xr;
var Le = k, aC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function CC(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function BC(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function sC(i) {
  if (i.__esModule) return i;
  var o = i.default;
  if (typeof o == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(e) {
    var A = Object.getOwnPropertyDescriptor(i, e);
    Object.defineProperty(t, e, A.get ? A : {
      enumerable: !0,
      get: function() {
        return i[e];
      }
    });
  }), t;
}
const QC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: aC,
  getAugmentedNamespace: sC,
  getDefaultExportFromCjs: rC,
  getDefaultExportFromNamespaceIfNotNamed: BC,
  getDefaultExportFromNamespaceIfPresent: CC
}, Symbol.toStringTag, { value: "Module" }));
var cC = function(o, t, e, A) {
  var g = e ? e.call(A, o, t) : void 0;
  if (g !== void (-9571 + 3045 * 2 + 3481)) return !!g;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var n = Object.keys(o), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = 8400 + -9 * 965 + -5 * -57; r < n.length; r++) {
    var B = n[r];
    if (!a(B)) return !1;
    var C = o[B], x = t[B];
    if (g = e ? e.call(A, C, x, B) : void (-9986 * -1 + 1255 * 2 + -12496), g === !1 || g === void (11 * -64 + -167 * 3 + 1205) && C !== x) return !1;
  }
  return !0;
};
const xC = QC.getDefaultExportFromCjs(cC);
var j = "-ms-", St = "-moz-", H = "-webkit-", NI = "comm", fi = "rule", an = "decl", EC = "@import", FI = "@keyframes", dC = "@layer", SI = Math.abs, rn = String.fromCharCode, Qg = Object.assign;
function lC(i, o) {
  return IA(i, 2847 + 9157 * 1 + -12004) ^ -2333 * 1 + -676 + 3054 ? (((o << -4 * 178 + -3621 + -255 * -17 ^ IA(i, -669 + -71 * 67 + 5426)) << -445 * -18 + -158 + -5 * 1570 ^ IA(i, -7528 + -1 * -4298 + 9 * 359)) << -111 * 31 + -623 + 2 * 2033 ^ IA(i, 2586 * 3 + 16 * -484 + -12)) << 398 * 13 + -68 + -319 * 16 ^ IA(i, 307 + 645 * -5 + 23 * 127) : 2810 + 4 * 970 + 1 * -6690;
}
function RI(i) {
  return i.trim();
}
function ee(i, o) {
  return (i = o.exec(i)) ? i[9076 + 142 * 1 + 419 * -22] : i;
}
function N(i, o, t) {
  return i.replace(o, t);
}
function wo(i, o, t) {
  return i.indexOf(o, t);
}
function IA(i, o) {
  return i.charCodeAt(o) | 1 * -4481 + -29 * 246 + 5 * 2323;
}
function ot(i, o, t) {
  return i.slice(o, t);
}
function ZA(i) {
  return i.length;
}
function MI(i) {
  return i.length;
}
function Dt(i, o) {
  return o.push(i), i;
}
function uC(i, o) {
  return i.map(o).join("");
}
function A0(i, o) {
  return i.filter(function(t) {
    return !ee(t, o);
  });
}
var pi = 1993 * -5 + -1392 + -631 * -18, it = 1, vI = -4245 * -1 + -3991 + -254, WA = -1 * 7132 + 7 * 1249 + -1611, tA = 1 * -3734 + -8693 + 43 * 289, Bt = "";
function yi(i, o, t, e, A, g, n, I) {
  var a = {};
  return a.value = i, a.root = o, a.parent = t, a.type = e, a.props = A, a.children = g, a.line = pi, a.column = it, a.length = n, a.return = "", a.siblings = I, a;
}
function ae(i, o) {
  return Qg(yi("", null, null, "", null, null, -2033 + -1 * 344 + -2377 * -1, i.siblings), i, { length: -i.length }, o);
}
function Ke(i) {
  for (; i.root; ) i = ae(i.root, { children: [i] });
  Dt(i, i.siblings);
}
function hC() {
  return tA;
}
function fC() {
  return tA = WA > 29 * 223 + -3053 + -3414 ? IA(Bt, --WA) : 0, it--, tA === 10 && (it = 1418 * 1 + 863 * -9 + 10 * 635, pi--), tA;
}
function HA() {
  return tA = WA < vI ? IA(Bt, WA++) : 9187 + 1346 * -3 + -5149 * 1, it++, tA === 6940 + -3 * 453 + -5571 && (it = 53 * 127 + 30 * -249 + -74 * -10, pi++), tA;
}
function Re() {
  return IA(Bt, WA);
}
function mo() {
  return WA;
}
function Di(i, o) {
  return ot(Bt, i, o);
}
function cg(i) {
  switch (i) {
    case 8439 + 2813 * -3:
    case 3 * 801 + -3659 * 2 + 4924:
    case -932 + 2 * 471:
    case 7911 + 2 * -3949:
    case -7622 + -89 * -86:
      return -518 * -19 + 7504 + -1 * 17341;
    case 56 * 31 + 2 * -2098 + -9 * -277:
    case 3503 * 1 + -2 * -2111 + -7682:
    case -11489 + 11533 * 1:
    case -2018 + 7 * 295:
    case -3 * -2937 + 4 * 362 + 103 * -99:
    case 801 * -7 + 651 * 5 + 2416:
    case -9138 + -1019 * -1 + 17 * 485:
    case -26 * 128 + 2473 * -2 + 8333 * 1:
    case -8659 + -3763 * -1 + 5019:
    case 628 * -11 + 7985 + -238 * 4:
      return 4;
    case 4664 * 2 + 277 * -20 + 3730 * -1:
      return -9328 + -5212 * 1 + -14543 * -1;
    case -1019 * 7 + 7991 + 2 * -412:
    case 2686 * -3 + -1 * 9737 + 17834:
    case 1361 + -1 * -7129 + -8450:
    case -5 * 310 + -6221 + 7862:
      return 7154 + -12 * 596;
    case -3083 + -1 * 791 + 3915:
    case 12586 + -13 * 961:
      return 11 * 371 + 2743 * 1 + 1 * -6823;
  }
  return 1 * -6734 + -4399 + 3 * 3711;
}
function pC(i) {
  return pi = it = 1, vI = ZA(Bt = i), WA = -2773 + 1 * -785 + 3558, [];
}
function yC(i) {
  return Bt = "", i;
}
function Oi(i) {
  return RI(Di(WA - (4 * -2110 + 1 * 3548 + -4893 * -1), xg(i === 4778 + 109 * -43 ? i + (-10 * -862 + 9968 + -18586) : i === 40 ? i + (-316 * 2 + -561 * -3 + -1050) : i)));
}
function DC(i) {
  for (; (tA = Re()) && tA < -6181 + -2 * -4965 + -3716; ) HA();
  return cg(i) > 1 * -1553 + -5 * 1873 + 10920 || cg(tA) > 7177 + 422 * -17 ? "" : " ";
}
function wC(i, o) {
  for (; --o && HA() && !(tA < 600 + -4 * 138 || tA > 9547 * -1 + -5509 + 7579 * 2 || tA > 1 * -2063 + 4507 + -341 * 7 && tA < 39 * -208 + -2 * 1742 + 39 * 299 || tA > -267 * 11 + -3557 * -2 + -37 * 111 && tA < 122 * -69 + 2669 + 5846); ) ;
  return Di(i, mo() + (o < -6176 * -1 + 466 * -7 + -2908 && Re() == -7731 + -2989 * -3 + -602 * 2 && HA() == -167 * -16 + -1 * -8414 + -11054));
}
function xg(i) {
  for (; HA(); ) switch (tA) {
    case i:
      return WA;
    case -9859 + 1 * 2896 + 6997:
    case -4124 + 1340 * -1 + 5503:
      i !== -1 * 1173 + 6691 + -12 * 457 && i !== 1 * -5407 + -8459 + 13905 && xg(tA);
      break;
    case 40:
      i === 2054 + 61 * -33 && xg(i);
      break;
    case 290 * 4 + 8985 + -10053:
      HA();
      break;
  }
  return WA;
}
function mC(i, o) {
  for (; HA() && i + tA !== -7597 + 42 * -39 + 9282 + (-1761 + -30 * 271 + 1 * 9901); ) if (i + tA === 42 + (4913 + -842 * -9 + -12449) && Re() === 3394 * -2 + -1773 * -4 + -257) break;
  return "/*" + Di(o, WA - (97 * 38 + -321 * -17 + -9142)) + "*" + rn(i === 2906 * 3 + -6 * 285 + -6961 ? i : HA());
}
function bC(i) {
  for (; !cg(Re()); ) HA();
  return Di(i, WA);
}
function kC(i) {
  return yC(bo("", null, null, null, [""], i = pC(i), 0, [821 * 10 + -2314 * 4 + 1 * 1046], i));
}
function bo(i, o, t, e, A, g, n, I, a) {
  for (var r = 0, B = 6958 + -6958 * 1, C = n, x = 12514 + 12514 * -1, Q = 0, E = -3689 * 1 + 1 * -622 + -479 * -9, d = -9805 + -121 * -23 + -1 * -7023, u = -9859 + 986 * 10, c = -2537 + -9623 * 1 + -1 * -12161, h = 0, m = "", R = A, M = g, J = e, w = m; u; ) switch (E = h, h = HA()) {
    case -612 * 2 + 51 * 1 + 1213:
      if (E != -271 * 23 + 5621 + 12 * 60 && IA(w, C - (-3982 + -569 * -7)) == -9 * -429 + -1226 * -7 + 12385 * -1) {
        wo(w += N(Oi(h), "&", "&\f"), "&\f", SI(r ? I[r - (-191 * -23 + -17 * -351 + -10359)] : -6 * 934 + -304 + 5908)) != -(1579 * 4 + -26 * -226 + -12191) && (c = -(1024 + 1 * -4441 + -1 * -3418));
        break;
      }
    case 4561 + 1 * 5983 + -10510 * 1:
    case -137 * 19 + 7207 * -1 + 469 * 21:
    case 1 * 7849 + -226 * -15 + -11148:
      w += Oi(h);
      break;
    case 4493 + 3 * -2785 + 3871:
    case -101 * 29 + -1 * 6286 + 15 * 615:
    case -6610 + 2 * -2177 + 10977:
    case 5304 + -1171 * 2 + -2930:
      w += DC(E);
      break;
    case 3231 + -2819 * 1 + 4 * -80:
      w += wC(mo() - (-4 * 1757 + -61 * -107 + -2 * -251), -1319 * -1 + -3785 + -2473 * -1);
      continue;
    case -1143 * -8 + -887 * 6 + -151 * 25:
      switch (Re()) {
        case -7181 + 233 * 31:
        case -86 + 1 * -1266 + 1399 * 1:
          Dt(GC(mC(HA(), mo()), o, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (-1 * 3419 + 3297 + 245) * d:
      I[r++] = ZA(w) * c;
    case (8323 + 998 * 1 + -9196 * 1) * d:
    case -10865 + 4 * 2731:
    case 0:
      switch (h) {
        case 9311 * 1 + 8789 + -18100:
        case -42 * 43 + -9508 + 279 * 41:
          u = 0;
        case 8808 + -26 * 55 + -7319 + B:
          c == -(-1 * -1321 + -7453 + 6133) && (w = N(w, /\f/g, "")), Q > 10113 + 3 * -3371 && ZA(w) - C && Dt(Q > -2389 + 1 * 2421 ? t0(w + ";", e, t, C - (-3 * 3132 + 4217 + -140 * -37), a) : t0(N(w, " ", "") + ";", e, t, C - (-21 * 239 + -29 * 125 + 8646), a), a);
          break;
        case -2427 + -1763 * 4 + 38 * 251:
          w += ";";
        default:
          if (Dt(J = e0(w, o, t, r, B, A, I, m, R = [], M = [], C, g), g), h === -254 * -29 + -9652 + 2409)
            if (B === 13 * 258 + -2301 + -1053) bo(w, o, J, J, R, g, C, I, M);
            else switch (x === 98 * 59 + -2701 + -2982 && IA(w, -8632 + -1402 * 5 + 15645) === -1 * 1185 + 1493 * -4 + 7267 ? 527 * -10 + 1 * -398 + 5768 : x) {
              case 184 * 31 + 3858 + -9462:
              case -7748 + 491 * 16:
              case 1050 + -4719 * -1 + -5660:
              case 115:
                bo(i, J, J, e && Dt(e0(i, J, J, 7090 + 7090 * -1, 7 * 313 + 9053 + -3 * 3748, A, I, m, A, R = [], C, M), M), A, M, C, I, e ? R : M);
                break;
              default:
                bo(w, J, J, J, [""], M, 9053 + 1 * -9053, I, M);
            }
      }
      r = B = Q = -3137 * 1 + -534 * -1 + 2603, d = c = 11 * 677 + 7096 + -11 * 1322, m = w = "", C = n;
      break;
    case -2573 + -2631 * -1:
      C = 5 * -949 + 6078 + 1332 * -1 + ZA(w), Q = E;
    default:
      if (d < -8724 + 1 * 8725) {
        if (h == -1069 * 3 + 3307 * -3 + 13251) --d;
        else if (h == -3149 + 2518 * 1 + 756 && d++ == 24 * -239 + -1 * 9871 + -1 * -15607 && fC() == 19109 + -904 * 21) continue;
      }
      switch (w += rn(h), h * d) {
        case -1 * 1489 + -7 * 743 + 841 * 8:
          c = B > 11729 + 1 * -11729 ? 297 * 15 + 4751 + -7 * 1315 : (w += "\f", -1);
          break;
        case 601 * -3 + 10 * -839 + 10237:
          I[r++] = (ZA(w) - 1) * c, c = 1120 * -2 + 1 * 6637 + -4396;
          break;
        case 64:
          Re() === -12 * -492 + 26 * 351 + -81 * 185 && (w += Oi(HA())), x = Re(), B = C = ZA(m = w += bC(mo())), h++;
          break;
        case 7156 + -29 * -334 + -11 * 1527:
          E === 5693 + -2091 * -1 + -7739 && ZA(w) == 3904 * 2 + 1747 * -3 + -2565 && (d = 7 * -309 + 6025 + -1 * 3862);
      }
  }
  return g;
}
function e0(i, o, t, e, A, g, n, I, a, r, B, C) {
  for (var x = A - 1, Q = A === 0 ? g : [""], E = MI(Q), d = 2177 + -1 * 3559 + 691 * 2, u = 3386 + 1019 * -1 + -263 * 9, c = 11 * 82 + 43 * -139 + -203 * -25; d < e; ++d) for (var h = -8442 + 603 * 14, m = ot(i, x + (5561 + -1 * 5560), x = SI(u = n[d])), R = i; h < E; ++h) (R = RI(u > -5742 + -1 * -5742 ? Q[h] + " " + m : N(m, /&\f/g, Q[h]))) && (a[c++] = R);
  return yi(i, o, t, A === -1259 * 2 + -3537 + 6055 ? fi : I, a, r, B, C);
}
function GC(i, o, t, e) {
  return yi(i, o, t, NI, rn(hC()), ot(i, 7049 + -3023 * -2 + -1 * 13093, -(4 * -1193 + 1403 + 3371)), 5 * -463 + 6782 + -1489 * 3, e);
}
function t0(i, o, t, e, A) {
  return yi(i, o, t, an, ot(i, 4600 + -1 * -9913 + -631 * 23, e), ot(i, e + (2131 * 1 + 1 * -7813 + 5683), -(21 * 153 + 23 * 189 + -7559)), e, A);
}
function LI(i, o, t) {
  switch (lC(i, o)) {
    case 3561 * -2 + -9645 + 270 * 81:
      return H + "print-" + i + i;
    case -2874 * 3 + 4625 + 9734:
    case 2559 + -1 * -1642:
    case -2008 + 1 * 5557 + 4 * -93:
    case 3433:
    case -14542 + -1 * -16183:
    case 7023 + 1 * -2566:
    case 2921:
    case 5572:
    case -683 * -1 + -3217 + -35 * -254:
    case 4869 + -11287 * -1 + -10312:
    case -2 * -94 + 652 * 3 + 1047:
    case -1 * -12013 + 2885 * -1 + -1 * 2483:
    case 11 * -53 + 951 * -2 + 5490:
    case 6391:
    case 5879:
    case -10647 + 1 * -5807 + 22077:
    case 2495 + -52 * -70:
    case -4 * -1335 + 6634 + -59 * 125:
    case 6706 + -6794 * -1 + -8645:
    case 3997 + 4546 * 2 + -8874:
    case 1300 + 7 * 727:
    case -3160 + -8269 * -1:
    case 1733 * -1 + -5450 + 12548:
    case 5621:
    case 5 * 985 + -9102 + -1 * -8006:
      return H + i + i;
    case 4789:
      return St + i + i;
    case 1 * -8146 + 8966 + 4529:
    case -2091 + 6337 * 1:
    case -1 * 7097 + -33 * 96 + 1675 * 9:
    case 6968:
    case 8806 + 6107 * -1 + 3 * 19:
      return H + i + St + i + j + i + i;
    case 5936:
      switch (IA(i, o + (-2285 + -113 * -69 + 1 * -5501))) {
        case -6274 + -9319 * 1 + 15707 * 1:
          return H + i + j + N(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -16 * 194 + 82 * 97 + -4742:
          return H + i + j + N(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return H + i + j + N(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 5964 + 387 * 3 + 3 * -99:
    case 214 * -22 + 5059 + 3917:
    case -2265 + 1 * 5168:
      return H + i + j + i + i;
    case -7285 + -1 * -1195 + -12255 * -1:
      return H + i + j + "flex-" + i + i;
    case 2 * -823 + 5003 * -1 + 11836:
      return H + i + N(i, /(\w+).+(:[^]+)/, H + "box-$1$2" + j + "flex-$1$2") + i;
    case -3438 * 1 + -1640 + -10521 * -1:
      return H + i + j + "flex-item-" + N(i, /flex-|-self/g, "") + (ee(i, /flex-|baseline/) ? "" : j + "grid-row-" + N(i, /flex-|-self/g, "")) + i;
    case -3756 * 1 + -5 * 979 + 13326:
      return H + i + j + "flex-line-pack" + N(i, /align-content|flex-|-self/g, "") + i;
    case 6629 * -1 + 1931 + 10246:
      return H + i + j + N(i, "shrink", "negative") + i;
    case 6612 + 4 * -226 + -208 * 2:
      return H + i + j + N(i, "basis", "preferred-size") + i;
    case 17 * 87 + 375 + 2 * 2103:
      return H + "box-" + N(i, "-grow", "") + H + i + j + N(i, "grow", "positive") + i;
    case -307 * 7 + -7895 + 14598:
      return H + N(i, /([^-])(transform)/g, "$1" + H + "$2") + i;
    case 1 * 2674 + -7646 + 11159:
      return N(N(N(i, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), i, "") + i;
    case 9251 + 1 * -8957 + 5201:
    case 10143 + -6184 * 1:
      return N(i, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return N(N(i, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + i + i;
    case -2 * 313 + 1 * 5803 + -977:
      if (!ee(i, /flex-|baseline/)) return j + "grid-column-align" + ot(i, o) + i;
      break;
    case -6 * -79 + -5003 + 7121:
    case 3360:
      return j + N(i, "template-", "") + i;
    case 2395 * -1 + -8405 + 15184:
    case -1921 + -7 * -791:
      return t && t.some(function(e, A) {
        return o = A, ee(e.props, /grid-\w+-end/);
      }) ? ~wo(i + (t = t[o].value), "span", 547 * -1 + 704 * 7 + -4381) ? i : j + N(i, "-start", "") + i + j + "grid-row-span:" + (~wo(t, "span", 0) ? ee(t, /\d+/) : +ee(t, /\d+/) - +ee(i, /\d+/)) + ";" : j + N(i, "-start", "") + i;
    case 97 * 82 + 1026 + 4 * -1021:
    case 284 * 16 + -28 * -226 + 3 * -2248:
      return t && t.some(function(e) {
        return ee(e.props, /grid-\w+-start/);
      }) ? i : j + N(N(i, "-end", "-span"), "span ", "") + i;
    case 1601 * -2 + 167 * 9 + -2 * -2897:
    case 7531 * -1 + 8720 + 2394:
    case -4116 + 44 * 186:
    case 5537 + -1 * 3005:
      return N(i, /(.+)-inline(.+)/, H + "$1$2") + i;
    case 2 * 5871 + -14494 + 38 * 286:
    case -6182 + 2055 * -3 + -626 * -31:
    case 235 * 30 + -4524 + -461 * -7:
    case -878 * -3 + 118 * 43 + -2173:
    case 9389 * -1 + 7462 + 7372:
    case 2078 * 4 + 3257 + -5868:
    case -35 * -45 + 8328 + -4970:
    case 8649 + -1931 * -4 + -11696:
    case -905 * -3 + 1191 + -1627 * -1:
    case -387 * -18 + 4803 + -1196 * 5:
    case 1 * -5545 + 5431 + 5135 * 1:
    case 4765:
      if (ZA(i) - (13092 + 247 * -53) - o > 1 * 2446 + -2027 + -413) switch (IA(i, o + (-1 * 6297 + 1998 + 4300))) {
        case -7 * -1205 + 1 * -4801 + -3 * 1175:
          if (IA(i, o + (15 * 239 + -7618 + -4037 * -1)) !== 1768 + -1 * 1013 + 10 * -71) break;
        case 102:
          return N(i, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + St + (IA(i, o + (9671 + -9 * 457 + 5 * -1111)) == 267 + 2047 * -1 + -2 * -944 ? "$3" : "$2-$3")) + i;
        case 1017 * -2 + -1950 + 4099:
          return ~wo(i, "stretch", 0) ? LI(N(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case 1 * -3202 + 4135 * -1 + -543 * -23:
    case 11822 * -1 + -11347 + 1 * 29089:
      return N(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, g, n, I, a, r) {
        return j + A + ":" + g + r + (n ? j + A + "-span:" + (I ? a : +a - +g) + r : "") + i;
      });
    case 4949:
      if (IA(i, o + (289 * -3 + -294 * 3 + 1755)) === 7 * 705 + 6859 * 1 + 3 * -3891) return N(i, ":", ":" + H) + i;
      break;
    case -6838 + 7 * -100 + -13982 * -1:
      switch (IA(i, IA(i, 14) === 45 ? 4854 + 806 * -6 : 9427 * -1 + -3173 * -2 + 1 * 3092)) {
        case -2 * -521 + 8718 + -9640:
          return N(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (IA(i, 14) === -4449 + -69 * 115 + 1381 * 9 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + j + "$2box$3") + i;
        case 1 * 7388 + -6785 + -503:
          return N(i, ":", ":" + j) + i;
      }
      break;
    case -2 * 2958 + -103 * 53 + 17094:
    case 3 * 2612 + -6287 * 1 + 1098:
    case 339 + -1796 * -1:
    case 8835 + -1 * -9488 + -14396:
    case 3501 + -7 * 379 + 1543:
      return N(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Oo(i, o) {
  for (var t = "", e = 5610 * -1 + 6381 + -771; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function NC(i, o, t, e) {
  switch (i.type) {
    case dC:
      if (i.children.length) break;
    case EC:
    case an:
      return i.return = i.return || i.value;
    case NI:
      return "";
    case FI:
      return i.return = i.value + "{" + Oo(i.children, e) + "}";
    case fi:
      if (!ZA(i.value = i.props.join(","))) return "";
  }
  return ZA(t = Oo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function FC(i) {
  var o = MI(i);
  return function(t, e, A, g) {
    for (var n = "", I = -1 * -7160 + -3764 * 1 + -3396; I < o; I++) n += i[I](t, e, A, g) || "";
    return n;
  };
}
function SC(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function RC(i, o, t, e) {
  if (i.length > -(-20 * 180 + 1887 + 1714) && !i.return)
    switch (i.type) {
      case an:
        i.return = LI(i.value, i.length, t);
        return;
      case FI:
        return Oo([ae(i, { value: N(i.value, "@", "@" + H) })], e);
      case fi:
        if (i.length) return uC(t = i.props, function(A) {
          switch (ee(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Ke(ae(i, { props: [N(A, /:(read-\w+)/, ":" + St + "$1")] }));
              var g = {};
              g.props = [A], Ke(ae(i, g)), Qg(i, { props: A0(t, e) });
              break;
            case "::placeholder":
              Ke(ae(i, { props: [N(A, /:(plac\w+)/, ":" + H + "input-$1")] })), Ke(ae(i, { props: [N(A, /:(plac\w+)/, ":" + St + "$1")] })), Ke(ae(i, { props: [N(A, /:(plac\w+)/, j + "input-$1")] }));
              var n = {};
              n.props = [A], Ke(ae(i, n)), Qg(i, { props: A0(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var MC = b, O = {}, Je = typeof process < "u" && void (186 + 62 * -3) !== O && (O.REACT_APP_SC_ATTR || O.SC_ATTR) || "data-styled", JI = "active", UI = "data-styled-version", wi = "6.1.11", Cn = `/*!sc*/
`, Bn = typeof window < "u" && "HTMLElement" in window, vC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-143 * 55 + -1088 + 8953) !== O && void (-2 * -4418 + 5018 + 13854 * -1) !== O.REACT_APP_SC_DISABLE_SPEEDY && O.REACT_APP_SC_DISABLE_SPEEDY !== "" ? O.REACT_APP_SC_DISABLE_SPEEDY !== "false" && O.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && O !== void 0 && void (-1894 * 1 + -8819 + -3 * -3571) !== O.SC_DISABLE_SPEEDY && O.SC_DISABLE_SPEEDY !== "" ? O.SC_DISABLE_SPEEDY !== "false" && O.SC_DISABLE_SPEEDY : O.NODE_ENV !== "production"), o0 = /invalid hook call/i, co = /* @__PURE__ */ new Set(), LC = function(i, o) {
  if (O.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var g = !0;
      console.error = function(n) {
        for (var I = [], a = 43 * 223 + 2 * -1267 + -7054; a < arguments.length; a++) I[a - (5306 * 1 + -22 * 61 + 3 * -1321)] = arguments[a];
        o0.test(n) ? (g = !1, co.delete(e)) : A.apply(void 0, et([n], I, !1));
      }, z(), g && !co.has(e) && (console.warn(e), co.add(e));
    } catch (n) {
      o0.test(n.message) && co.delete(e);
    } finally {
      console.error = A;
    }
  }
}, mi = Object.freeze([]), gt = Object.freeze({});
function JC(i, o, t) {
  return void (-51 * -12 + -7291 + 1 * 6679) === t && (t = gt), i.theme !== t.theme && i.theme || o || t.theme;
}
var Eg = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), UC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, YC = /(^-|-$)/g;
function i0(i) {
  return i.replace(UC, "-").replace(YC, "");
}
var WC = /(a)(d)/gi, xo = 5406 + 31 * -232 + 2 * 919, g0 = function(i) {
  return String.fromCharCode(i + (i > 208 + -61 * 3 ? 11693 + -2 * 5827 : 73 * 70 + 7747 + 5 * -2552));
};
function dg(i) {
  var o, t = "";
  for (o = Math.abs(i); o > xo; o = o / xo | 1 * -9623 + 1 * 6011 + 3612) t = g0(o % xo) + t;
  return (g0(o % xo) + t).replace(WC, "$1-$2");
}
var Hi, YI = 1 * 2357 + 143 * 67 + 6557 * -1, De = function(i, o) {
  for (var t = o.length; t; ) i = (-1571 + -401 * -4) * i ^ o.charCodeAt(--t);
  return i;
}, WI = function(i) {
  return De(YI, i);
};
function OC(i) {
  return dg(WI(i) >>> -3 * 1837 + -9564 + 15 * 1005);
}
function OI(i) {
  return O.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Ki(i) {
  return typeof i == "string" && (O.NODE_ENV === "production" || i.charAt(1742 + -4573 * -2 + -10888) === i.charAt(-1 * -5997 + -6 * 287 + -5 * 855).toLowerCase());
}
var MA = {};
MA.childContextTypes = !0, MA.contextType = !0, MA.contextTypes = !0, MA.defaultProps = !0, MA.displayName = !0, MA.getDefaultProps = !0, MA.getDerivedStateFromError = !0, MA.getDerivedStateFromProps = !0, MA.mixins = !0, MA.propTypes = !0, MA.type = !0;
var re = {};
re.name = !0, re.length = !0, re.prototype = !0, re.caller = !0, re.callee = !0, re.arguments = !0, re.arity = !0;
var pe = {};
pe.$$typeof = !0, pe.compare = !0, pe.defaultProps = !0, pe.displayName = !0, pe.propTypes = !0, pe.type = !0;
var Pe = {};
Pe.$$typeof = !0, Pe.render = !0, Pe.defaultProps = !0, Pe.displayName = !0, Pe.propTypes = !0;
var HI = typeof Symbol == "function" && Symbol.for, KI = HI ? Symbol.for("react.memo") : -44 * -50 + -6442 * 5 + 90125, HC = HI ? Symbol.for("react.forward_ref") : 415 * -258 + 24683 + 142499, KC = MA, TC = re, TI = pe, PC = ((Hi = {})[HC] = Pe, Hi[KI] = TI, Hi);
function n0(i) {
  return ("type" in (o = i) && o.type.$$typeof) === KI ? TI : "$$typeof" in i ? PC[i.$$typeof] : KC;
  var o;
}
var qC = Object.defineProperty, jC = Object.getOwnPropertyNames, I0 = Object.getOwnPropertySymbols, ZC = Object.getOwnPropertyDescriptor, VC = Object.getPrototypeOf, a0 = Object.prototype;
function PI(i, o, t) {
  if (typeof o != "string") {
    if (a0) {
      var e = VC(o);
      e && e !== a0 && PI(i, e, t);
    }
    var A = jC(o);
    I0 && (A = A.concat(I0(o)));
    for (var g = n0(i), n = n0(o), I = 1 * -5923 + -2534 * -1 + 3389; I < A.length; ++I) {
      var a = A[I];
      if (!(a in TC || t && t[a] || n && a in n || g && a in g)) {
        var r = ZC(o, a);
        try {
          qC(i, a, r);
        } catch {
        }
      }
    }
  }
  return i;
}
function nt(i) {
  return typeof i == "function";
}
function sn(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function me(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function r0(i, o) {
  if (-23 * -257 + -5765 + -146 === i.length) return "";
  for (var t = i[-2789 * 1 + -1955 + 4744], e = -9586 + 9587 * 1; e < i.length; e++) t += i[e];
  return t;
}
function It(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function lg(i, o, t) {
  if (void (1701 + 87 * 25 + -3876) === t && (t = !1), !t && !It(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = -9076 * 1 + -7105 + 1471 * 11; e < o.length; e++) i[e] = lg(i[e], o[e]);
  else if (It(o))
    for (var e in o) i[e] = lg(i[e], o[e]);
  return i;
}
function Qn(i, o) {
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
var _C = O.NODE_ENV !== "production" ? iA : {};
function XC() {
  for (var i = [], o = -3 * 633 + 7761 + -5862; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[-3629 + -2953 * 3 + 12488], e = [], A = -6509 + 2342 * -1 + 8852, g = i.length; A < g; A += 3427 * 2 + -51 * -71 + -10474) e.push(i[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function st(i) {
  for (var o = [], t = -289 + 10 * 29; t < arguments.length; t++) o[t - (-6364 + -95 * -67)] = arguments[t];
  return O.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > 1032 + 72 * -119 + 7536 ? " Args: ".concat(o.join(", ")) : "")) : new Error(XC.apply(void (3419 + 2 * -1166 + 1087 * -1), et([_C[i]], o, !1)).trim());
}
var zC = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(3443 + 1844 * -4 + 4445), this.length = 512, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = 13 * -469 + -9891 + 28 * 571, e = 0; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, g = A; o >= g; ) if ((g <<= 5486 * -1 + -624 + 6111) < 0) throw st(-6839 + 1 * -7397 + -2 * -7126, "".concat(o));
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(e), this.length = g;
      for (var n = A; n < g; n++) this.groupSizes[n] = -733 * -1 + -297 * -27 + -8752;
    }
    for (var I = this.indexOfGroup(o + (-927 * 9 + 4936 + -3 * -1136)), a = (n = 1 * 1693 + 491 * -11 + 206 * 18, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[o]++, I++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), A = e + t;
      this.groupSizes[o] = 631 * 1 + 5116 + -5747;
      for (var g = e; g < A; g++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || 6716 + 1 * -6716 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], A = this.indexOfGroup(o), g = A + e, n = A; n < g; n++) t += "".concat(this.tag.getRule(n)).concat(Cn);
    return t;
  }, i;
}(), $C = 1 * 5155 + -5850 + -29 * -24 << 6542 + -7 * -233 + -17 * 479, ko = /* @__PURE__ */ new Map(), Ho = /* @__PURE__ */ new Map(), Go = 129 * 19 + -3889 * 1 + 1 * 1439, Eo = function(i) {
  if (ko.has(i)) return ko.get(i);
  for (; Ho.has(Go); ) Go++;
  var o = Go++;
  if (O.NODE_ENV !== "production" && ((-43 * -33 + 3573 + -4992 | o) < 7 * -1331 + -1793 + -55 * -202 || o > $C)) throw st(-3397 + -11 * -7 + 3336, "".concat(o));
  return ko.set(i, o), Ho.set(o, i), o;
}, AB = function(i, o) {
  Go = o + (3090 + -3089 * 1), ko.set(i, o), Ho.set(o, i);
}, eB = "style[".concat(Je, "][").concat(UI, '="').concat(wi, '"]'), tB = new RegExp("^".concat(Je, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), oB = function(i, o, t) {
  for (var e, A = t.split(","), g = 0, n = A.length; g < n; g++) (e = A[g]) && i.registerName(o, e);
}, iB = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-8039 + 458 * -4 + 9871) !== t ? t : "").split(Cn), A = [], g = -1742 + -2 * -2647 + 1776 * -2, n = e.length; g < n; g++) {
    var I = e[g].trim();
    if (I) {
      var a = I.match(tB);
      if (a) {
        var r = 0 | parseInt(a[1], 10), B = a[5258 + -9445 * -1 + -1 * 14701];
        -1 * -5454 + 7400 + -12854 !== r && (AB(B, r), oB(i, B, a[5196 + 1 * -5193]), i.getTag().insertRules(r, A)), A.length = 473 + -473 * 1;
      } else A.push(I);
    }
  }
};
function gB() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qI = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(Je, "]")));
    return a[a.length - (-1007 + 9 * 112)];
  }(t), g = void (4718 + 1956 * -3 + 1150) !== A ? A.nextSibling : null;
  e.setAttribute(Je, JI), e.setAttribute(UI, wi);
  var n = gB();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, g), e;
}, nB = function() {
  function i(o) {
    this.element = qI(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -1748 + 92 * 19, g = e.length; A < g; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw st(8130 + -1159 * 7);
    }(this.element), this.length = 3319 * 3 + -51 * 1 + -13 * 762;
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
}(), IB = function() {
  function i(o) {
    this.element = qI(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 9552 * -1 + 9070 + 482) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
}(), aB = function() {
  function i(o) {
    this.rules = [], this.length = 13 * -38 + 7077 + 227 * -29;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -37 * -51 + 208 + -1 * 2095, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, 1), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), C0 = Bn, rB = { isServer: !Bn, useCSSOMInjection: !vC }, jI = function() {
  function i(o, t, e) {
    void (-57 * -107 + 7297 + 17 * -788) === o && (o = gt), void (-9252 + -9 * 140 + 10512) === t && (t = {});
    var A = this;
    this.options = mA(mA({}, rB), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Bn && C0 && (C0 = !1, function(g) {
      for (var n = document.querySelectorAll(eB), I = -329 + 3 * 1589 + -4438, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(Je) !== JI && (iB(g, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), Qn(this, function() {
      return function(g) {
        for (var n = g.getTag(), I = n.length, a = "", r = function(C) {
          var x = function(c) {
            return Ho.get(c);
          }(C);
          if (void (3 * 1907 + -8986 + 3265) === x) return "continue";
          var Q = g.names.get(x), E = n.getGroup(C);
          if (void (-9872 + -101 * -75 + 1 * 2297) === Q || -12336 + 48 * 257 === E.length) return "continue";
          var d = "".concat(Je, ".g").concat(C, '[id="').concat(x, '"]'), u = "";
          void (7 * 419 + -7 * 1063 + 4508) !== Q && Q.forEach(function(c) {
            c.length > -53 * -129 + -1665 + -5172 && (u += "".concat(c, ","));
          }), a += "".concat(E).concat(d, '{content:"').concat(u, '"}').concat(Cn);
        }, B = 0; B < I; B++) r(B);
        return a;
      }(A);
    });
  }
  return i.registerId = function(o) {
    return Eo(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return void (-3 * 1086 + 8317 + -5059) === t && (t = !0), new i(mA(mA({}, this.options), o), this.gs, t && this.names || void (-886 * -7 + -6833 + 1 * 631));
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -1 * 5594 + -12 * -248 + 2618) + (127 * 5 + 7779 + -47 * 179);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new aB(A) : e ? new nB(A) : new IB(A);
    }(this.options), new zC(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (Eo(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(Eo(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(Eo(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), CB = /&/g, BB = /^\s*\/\/.*$/gm;
function ZI(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ZI(t.children, o)), t;
  });
}
function VI(i) {
  var o, t, e, A = i === void 0 ? gt : i, g = A.options, n = void (-38 * -261 + 1913 + 1 * -11831) === g ? gt : g, I = A.plugins, a = void (347 * 7 + -6324 + 19 * 205) === I ? mi : I, r = function(x, Q, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 0 ? ".".concat(o) : x;
  }, B = a.slice();
  B.push(function(x) {
    x.type === fi && x.value.includes("&") && (x.props[769 + -965 * 8 + 3 * 2317] = x.props[-7468 + 4 * 1447 + 1680].replace(CB, t).replace(e, r));
  }), n.prefix && B.push(RC), B.push(NC);
  var C = function(x, Q, E, d) {
    void (-6038 + -1 * -6038) === Q && (Q = ""), void (-9896 + -2633 * 2 + 15162) === E && (E = ""), void (-7878 * -1 + -8490 + 612) === d && (d = "&"), o = d, t = Q, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = x.replace(BB, ""), c = kC(E || Q ? "".concat(E, " ").concat(Q, " { ").concat(u, " }") : u);
    n.namespace && (c = ZI(c, n.namespace));
    var h = [];
    return Oo(c, FC(B.concat(SC(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(x, Q) {
    return Q.name || st(-5222 * -1 + -69 * -119 + 6709 * -2), De(x, Q.name);
  }, YI).toString() : "", C;
}
var sB = new jI(), ug = VI(), cn = Le.createContext({ shouldForwardProp: void (-9427 + -1 * 7509 + 16936), styleSheet: sB, stylis: ug });
cn.Consumer;
var QB = Le.createContext(void (-1 * 439 + -6507 + -6946 * -1));
function hg() {
  return Ee(cn);
}
function cB(i) {
  var o = rA(i.stylisPlugins), t = o[2 * -4783 + -59 * -150 + 4 * 179], e = o[1], A = hg().styleSheet, g = fA(function() {
    var B = A, C = {};
    return C.useCSSOMInjection = !1, i.sheet ? B = i.sheet : i.target && (B = B.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (B = B.reconstructWithOptions(C)), B;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), n = fA(function() {
    var B = {};
    B.namespace = i.namespace, B.prefix = i.enableVendorPrefixes;
    var C = {};
    return C.options = B, C.plugins = t, VI(C);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  K(function() {
    xC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var I = fA(function() {
    var B = {};
    return B.shouldForwardProp = i.shouldForwardProp, B.styleSheet = g, B.stylis = n, B;
  }, [i.shouldForwardProp, g, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, Le.createElement(cn.Provider, a, Le.createElement(QB.Provider, r, i.children));
}
var B0 = function() {
  function i(o, t) {
    var e = this;
    this.inject = function(A, g) {
      void (-2357 + -27 * 198 + 7703) === g && (g = ug);
      var n = e.name + g.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, g(e.rules, n, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, Qn(this, function() {
      throw st(-2677 * -2 + -7754 * -1 + -13096, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return void (13604 + -716 * 19) === o && (o = ug), this.name + o.hash;
  }, i;
}(), xB = function(i) {
  return i >= "A" && i <= "Z";
};
function s0(i) {
  for (var o = "", t = 0; t < i.length; t++) {
    var e = i[t];
    if (4807 + 1999 * 5 + 14801 * -1 === t && e === "-" && i[191 * -31 + -1848 + -1 * -7769] === "-") return i;
    xB(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var _I = function(i) {
  return i == null || i === !1 || i === "";
}, XI = function(i) {
  var o, t, e = [];
  for (var A in i) {
    var g = i[A];
    i.hasOwnProperty(A) && !_I(g) && (Array.isArray(g) && g.isCss || nt(g) ? e.push("".concat(s0(A), ":"), g, ";") : It(g) ? e.push.apply(e, et(et(["".concat(A, " {")], XI(g), !1), ["}"], !1)) : e.push("".concat(s0(A), ": ").concat((o = A, (t = g) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 3134 + 1 * 9857 + 11 * -1181 === t || o in MC || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Me(i, o, t, e) {
  if (_I(i)) return [];
  if (sn(i)) return [".".concat(i.styledComponentId)];
  if (nt(i)) {
    if (!nt(g = i) || g.prototype && g.prototype.isReactComponent || !o) return [i];
    var A = i(o);
    return O.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof B0 || It(A) || A === null || console.error("".concat(OI(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Me(A, o, t, e);
  }
  var g;
  return i instanceof B0 ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : It(i) ? XI(i) : Array.isArray(i) ? Array.prototype.concat.apply(mi, i.map(function(n) {
    return Me(n, o, t, e);
  })) : [i.toString()];
}
function EB(i) {
  for (var o = 5485 + 1097 * -5; o < i.length; o += -1 * 201 + -5563 * -1 + -5361 * 1) {
    var t = i[o];
    if (nt(t) && !sn(t)) return !1;
  }
  return !0;
}
var dB = WI(wi), lB = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = O.NODE_ENV === "production" && (void (-31 * 42 + 2751 * 3 + -21 * 331) === e || e.isStatic) && EB(o), this.componentId = t, this.baseHash = De(dB, t), this.baseStyle = e, jI.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = me(A, this.staticRulesId);
      else {
        var g = r0(Me(this.rules, o, t, e)), n = dg(De(this.baseHash, g) >>> 0);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(g, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = me(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = De(this.baseHash, e.hash), r = "", B = 3 * 2559 + 1 * 5190 + -4289 * 3; B < this.rules.length; B++) {
        var C = this.rules[B];
        if (typeof C == "string") r += C, O.NODE_ENV !== "production" && (a = De(a, C));
        else if (C) {
          var x = r0(Me(C, o, t, e));
          a = De(a, x + B), r += x;
        }
      }
      if (r) {
        var Q = dg(a >>> 0);
        t.hasNameForId(this.componentId, Q) || t.insertRules(this.componentId, Q, e(r, ".".concat(Q), void (-1 * -8799 + 417 + -9216), this.componentId)), A = me(A, Q);
      }
    }
    return A;
  }, i;
}(), zI = Le.createContext(void 0);
zI.Consumer;
var Ti = {}, Q0 = /* @__PURE__ */ new Set();
function uB(i, o, t) {
  var e = sn(i), A = i, g = !Ki(i), n = o.attrs, I = n === void 0 ? mi : n, a = o.componentId, r = a === void 0 ? function(M, J) {
    var w = typeof M != "string" ? "sc" : i0(M);
    Ti[w] = (Ti[w] || 0) + (-1 * -8941 + 8901 + -17841);
    var q = "".concat(w, "-").concat(OC(wi + w + Ti[w]));
    return J ? "".concat(J, "-").concat(q) : q;
  }(o.displayName, o.parentComponentId) : a, B = o.displayName, C = void (1767 * 4 + -4454 + -2614) === B ? function(M) {
    return Ki(M) ? "styled.".concat(M) : "Styled(".concat(OI(M), ")");
  }(i) : B, x = o.displayName && o.componentId ? "".concat(i0(o.displayName), "-").concat(o.componentId) : o.componentId || r, Q = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, E = o.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (o.shouldForwardProp) {
      var u = o.shouldForwardProp;
      E = function(M, J) {
        return d(M, J) && u(M, J);
      };
    } else E = d;
  }
  var c = new lB(t, x, e ? A.componentStyle : void (-1804 + -17 * -131 + -423));
  function h(M, J) {
    return function(w, q, dA) {
      var V = w.attrs, pA = w.componentStyle, P = w.defaultProps, SA = w.foldedComponentIds, de = w.styledComponentId, Ri = w.target, ro = Le.useContext(zI), Br = hg(), Mi = w.shouldForwardProp || Br.shouldForwardProp;
      O.NODE_ENV !== "production" && Wo(de);
      var Fn = JC(q, ro, P) || gt, Ae = function(Co, lt, Bo) {
        var He = {};
        He.className = void (1 * 7393 + 1 * -4957 + -2436), He.theme = Bo;
        for (var Ji, le = mA(mA({}, lt), He), Ui = -1 * 7233 + -9454 + 16687; Ui < Co.length; Ui += -7962 + -1 * -4309 + 3654) {
          var so = nt(Ji = Co[Ui]) ? Ji(le) : Ji;
          for (var Ie in so) le[Ie] = Ie === "className" ? me(le[Ie], so[Ie]) : Ie === "style" ? mA(mA({}, le[Ie]), so[Ie]) : so[Ie];
        }
        return lt.className && (le.className = me(le.className, lt.className)), le;
      }(V, q, Fn), Et = Ae.as || Ri, dt = {};
      for (var RA in Ae) void (-2775 + -555 * -5) === Ae[RA] || RA[403 + 24 * 172 + -4531] === "$" || RA === "as" || RA === "theme" && Ae.theme === Fn || (RA === "forwardedAs" ? dt.as = Ae.forwardedAs : Mi && !Mi(RA, Et) || (dt[RA] = Ae[RA], Mi || O.NODE_ENV !== "development" || Gr(RA) || Q0.has(RA) || !Eg.has(Et) || (Q0.add(RA), console.warn('styled-components: it looks like an unknown prop "'.concat(RA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var vi = function(Co, lt) {
        var Bo = hg(), He = Co.generateAndInjectStyles(lt, Bo.styleSheet, Bo.stylis);
        return O.NODE_ENV !== "production" && Wo(He), He;
      }(pA, Ae);
      O.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(vi);
      var Li = me(SA, de);
      return vi && (Li += " " + vi), Ae.className && (Li += " " + Ae.className), dt[Ki(Et) && !Eg.has(Et) ? "class" : "className"] = Li, dt.ref = dA, hA(Et, dt);
    }(m, M, J);
  }
  h.displayName = C;
  var m = Le.forwardRef(h), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, m.attrs = Q, m.componentStyle = c, m.displayName = C, m.shouldForwardProp = E, m.foldedComponentIds = e ? me(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : i, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(J) {
      for (var w = [], q = 1 * -8263 + 5510 + -81 * -34; q < arguments.length; q++) w[q - (1941 * -5 + 5 * -1811 + -18761 * -1)] = arguments[q];
      for (var dA = 501 + 9 * -17 + 6 * -58, V = w; dA < V.length; dA++) lg(J, V[dA], !0);
      return J;
    }({}, A.defaultProps, M) : M;
  } }), O.NODE_ENV !== "production" && (LC(C, x), m.warnTooManyClasses = /* @__PURE__ */ function(M, J) {
    var w = {}, q = !1;
    return function(dA) {
      if (!q && (w[dA] = !0, Object.keys(w).length >= -8982 * -1 + 4408 + -13190)) {
        var V = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(-25 * -380 + -69 * 82 + 3 * -1214, " classes were generated for component ").concat(M).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), q = !0, w = {};
      }
    };
  }(C, x)), Qn(m, function() {
    return ".".concat(m.styledComponentId);
  }), g && PI(m, i, R), m;
}
function c0(i, o) {
  for (var t = [i[-1430 + 1 * -3001 + 4431]], e = 41 * 95 + -8059 + 4164, A = o.length; e < A; e += -8597 + 23 * -114 + 11220) t.push(o[e], i[e + (-127 + 2 * 2626 + -21 * 244)]);
  return t;
}
var x0 = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function hB(i) {
  for (var o = [], t = 595 + 1307 * 2 + -802 * 4; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (nt(i) || It(i)) return x0(Me(c0(mi, et([i], o, !0))));
  var e = i;
  return 162 + 1 * 8598 + -8760 === o.length && 9 * 653 + 413 * 19 + -13723 === e.length && typeof e[-4365 + -23 * 111 + 6 * 1153] == "string" ? Me(e) : x0(Me(c0(e, o)));
}
function fg(i, o, t) {
  if (void (-11 * 484 + 6525 + -1201 * 1) === t && (t = gt), !o) throw st(-9863 + -101 * -64 + 3400, o);
  var e = function(A) {
    for (var g = [], n = -13958 + 1 * 13959; n < arguments.length; n++) g[n - (4 * 1551 + -1413 * -7 + -26 * 619)] = arguments[n];
    return i(o, t, hB.apply(void 0, et([A], g, !1)));
  };
  return e.attrs = function(A) {
    return fg(i, o, mA(mA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return fg(i, o, mA(mA({}, t), A));
  }, e;
}
var $I = function(i) {
  return fg(uB, i);
}, Io = $I;
Eg.forEach(function(i) {
  Io[i] = $I(i);
});
O.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var lo = "__sc-".concat(Je, "__");
O.NODE_ENV !== "production" && O.NODE_ENV !== "test" && typeof window < "u" && (window[lo] || (window[lo] = -12087 + 4029 * 3), -43 * -86 + -5656 + 1959 * 1 === window[lo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[lo] += 3787 + -6 * 631);
const fB = Io.div`
  position: relative;
`, pB = Io.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class Y extends Error {
  constructor(t, e) {
    super(t);
    D(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof Y) return t;
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
    return new Y(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof Y) return t;
    const e = "An unexpected error has occurred";
    return new Y(e);
  }
}
const No = {};
No.CONTINUE_DETECTION = "continue-detection", No.SWITCH_CAMERA = "switch-camera", No.TOGGLE_MIRROR = "toggle-mirror";
const Pi = No, pg = {};
pg.FIRST_FRAME = "first-frame", pg.FIRST_VALID_FRAME = "first-valid-frame";
const Fo = pg, Aa = {};
Aa.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const yg = Aa;
var ea = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(ea || {}), VA = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(VA || {}), yB = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(yB || {}), Jt = ((i) => (i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(Jt || {}), DB = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(DB || {}), wB = ((i) => (i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(wB || {});
const ta = {};
ta.EYE_NOT_PRESENT = "eye_not_present";
const E0 = ta, lA = {};
lA.CANDIDATE_SELECTION = "candidate_selection", lA.FACE_TOO_CLOSE = "face_too_close", lA.FACE_TOO_FAR = "face_too_far", lA.FACE_CENTERING = "face_centering", lA.FACE_NOT_PRESENT = "face_not_present", lA.SHARPNESS_TOO_LOW = "sharpness_too_low", lA.BRIGHTNESS_TOO_LOW = "brightness_too_low", lA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", lA.DEVICE_PITCHED = "device_pitched", lA.LEFT_EYE_NOT_PRESENT = "left_" + E0.EYE_NOT_PRESENT, lA.RIGHT_EYE_NOT_PRESENT = "right_" + E0.EYE_NOT_PRESENT, lA.MOUTH_NOT_PRESENT = "mouth_not_present", lA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", lA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const gA = lA, yA = {};
yA.isPresent = gA.FACE_NOT_PRESENT, yA.isNotPitched = gA.DEVICE_PITCHED, yA.isNotSmall = gA.FACE_TOO_FAR, yA.isNotLarge = gA.FACE_TOO_CLOSE, yA.isNotOutOfBounds = gA.FACE_CENTERING, yA.isNotDim = gA.BRIGHTNESS_TOO_LOW, yA.isNotBright = gA.BRIGHTNESS_TOO_HIGH, yA.isSharp = gA.SHARPNESS_TOO_LOW, yA.isLeftEyePresent = gA.LEFT_EYE_NOT_PRESENT, yA.isRightEyePresent = gA.RIGHT_EYE_NOT_PRESENT, yA.isMouthPresent = gA.MOUTH_NOT_PRESENT, yA.isMouthScoreNotTooHigh = gA.MOUTH_SCORE_TOO_HIGH, yA.isMouthScoreNotTooLow = gA.MOUTH_SCORE_TOO_LOW;
const mB = yA, Dg = {};
Dg.FRONT = "user", Dg.REAR = "environment";
const xn = Dg, wg = {};
wg.AUTO_CAPTURE = "AUTO_CAPTURE", wg.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Ko = wg, wt = {};
wt.LOADING = "LOADING", wt.ERROR = "ERROR", wt.WAITING = "WAITING", wt.RUNNING = "RUNNING";
const _A = wt;
({ ...gA });
var bB = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(bB || {});
({ ...gA });
const mg = {};
mg.NEUTRAL = "NEUTRAL", mg.SMILE = "SMILE";
const qA = mg, oa = { ..._A };
oa.DONE = "DONE";
const LA = oa;
({ ...gA });
const bi = at(void 0);
bi.displayName = "AppStateContext";
function Qt() {
  const i = Ee(bi);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const kB = bi.Provider, ia = Qt;
class ga extends JA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new Y("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === _A.ERROR ? null : this.props.children;
  }
}
D(ga, "contextType", bi);
const GB = Io.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, NB = Io.div`
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
function FB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const SB = lI(
  ({ detectionDetails: i, isImageMirror: o }, t) => FB() ? (console.log(i), /* @__PURE__ */ y(YA, { children: [
    /* @__PURE__ */ y(GB, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ y(NB, { children: /* @__PURE__ */ y("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), To = at(void 0);
To.displayName = "AnalyticsContext";
function ki() {
  const i = Ee(To);
  if (i === void 0)
    throw new Error(`${To.displayName} must be used within a AnalyticsProvider`);
  return i;
}
(function(i, o) {
  function t(I, a, r, B, C) {
    return QA(r - 460, C);
  }
  function e(I, a, r, B, C) {
    return QA(a - -743, B);
  }
  function A(I, a, r, B, C) {
    return QA(r - -806, I);
  }
  const g = i();
  function n(I, a, r, B, C) {
    return QA(I - 353, B);
  }
  for (; ; )
    try {
      if (-parseInt(n(769, 786, 787, "F7Jo", 751)) / 1 + -parseInt(n(761, 771, 780, "NVs&", 745)) / 2 * (-parseInt(e(-298, -311, -294, "AIGc", -296)) / 3) + parseInt(e(-327, -314, -318, "8wl%", -313)) / 4 * (parseInt(e(-331, -324, -323, "Zj$@", -341)) / 5) + -parseInt(t(860, 841, 855, 870, "uA*3")) / 6 + parseInt(e(-306, -318, -315, "Gnz9", -319)) / 7 * (parseInt(e(-333, -347, -339, "e2mQ", -361)) / 8) + parseInt(n(771, 787, 787, "NVs&", 765)) / 9 * (-parseInt(A("uA*3", -379, -396, -407, -414)) / 10) + -parseInt(n(752, 736, 751, "FtMN", 748)) / 11 * (-parseInt(t(864, 855, 873, 891, "iBlu")) / 12) === o) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(qo, 49 * -26474 + -10 * -162604 + 654761);
function na(i, o, t, e, A) {
  return QA(i - -767, e);
}
function qi(i, o, t, e, A) {
  return QA(t - 404, i);
}
function RB(i, o, t, e, A) {
  return QA(o - -320, i);
}
function ji(i, o, t, e, A) {
  return QA(e - -106, t);
}
const Po = at(void (632 + 1 * -901 + 269));
function MB(i, o, t, e, A) {
  return QA(i - 522, o);
}
function QA(i, o) {
  const t = qo();
  return QA = function(e, A) {
    e = e - (-11 * -67 + 9682 + 7 * -1432);
    let g = t[e];
    if (QA.VXMRFo === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      QA.jBkgau = B, i = arguments, QA.VXMRFo = !0;
    }
    const I = t[-6591 + -169 * -39], a = e + I, r = i[a];
    return r ? g = r : (QA.oPSlEs === void 0 && (QA.oPSlEs = !0), g = QA.jBkgau(g, A), i[a] = g), g;
  }, QA(i, o);
}
Po[ji(286, 275, "irvi", 292) + na(-346, -337, -331, "Hrp*") + "e"] = ji(327, 333, "2mvN", 318) + ji(319, 292, "F7Jo", 300) + MB(944, "fDAX");
function qo() {
  const i = ["Bx7cUG", "qSk4nSkRWRTcm8kvWQlcVWVcKq", "bNFdK1XQoNq2W5ddRq", "aCo+ag3dV8owW54ouSogaMbY", "W7rIftKIWQVcP8kDWRnfW4VdVH4", "WPDRW55RWPy", "WOhcN2DRWQi", "WO7cJ0ddHHhcQXqeW4XseW", "W4/dGCkRWQpdKSo9WQWdiCoqW6lcRLK", "WQBcPZ5qW6O", "CmkBW7lcPmoqW7ZcHCo3W7RcU8ozWRxdTq", "W4PppmojpG", "C8oYW6VcLmkJW4xcQYLFW5eL", "ESkrlmoMFmoeuLRdKmos", "WPNcUeZcHmoz", "W6iUWOFdN3W", "W4RdGSkKWQxcT8kTW6Wqg8oh", "madcM27cGmogW54/WRe", "b8oWa23dVSoqWOGsEmoHgMa", "BYngW7eAb3tcQSohDa", "WODeW5xdMSoiW4Lw", "nIldVNhdSCkKW5uHWPZcPCko", "CmkzW7JcPCoqWOhdUmo2W7dcJCoc", "umoGiSoxW6m", "W5VdQZBdNCkawZtdJCkZBvRdLSo0", "E8osWPZdPbJdUSoYESkFWRNcRSomWQW", "W4JdH8kPW7tcM8k4W4O5dW", "BwJcHezuW6NcNHD8DgS", "nSkVWPdcSgW", "grhcOSoJbG", "bmoKESoV", "FdNdKL4r", "W7WjWRVcOaa", "zCkoWPNcUetcJ8op", "k8k1WRddHCo9", "W6aYWQFdJxq", "y8o1W5FdSJJcRSoMiX1nWRm", "mx3dQa9GWQFdNCkQW6RcQq"];
  return qo = function() {
    return i;
  }, qo();
}
function ct() {
  const i = Ee(Po);
  function o(n, I, a, r, B) {
    return na(a - 561, I - 65, a - 278, I);
  }
  function t(n, I, a, r, B) {
    return qi(a, I - 367, B - -758);
  }
  function e(n, I, a, r, B) {
    return qi(n, I - 329, B - -1279);
  }
  if (i === void (17 * -329 + -1 * -2103 + 3490)) throw new Error(Po[o(211, "Gnz9", 214) + e("m1Gq", -464, -458, -457, -448) + "e"] + (g(31, "(nAh") + o(200, "Zj$@", 217) + A(-227, -222, "PlKs", -219) + g(54, "FNW!") + A(-203, -194, "fDAX", -201) + o(194, "m1Gq", 201) + t(35, 37, "W5s1", 42, 47) + t(80, 60, "12W0", 66, 76)));
  function A(n, I, a, r, B) {
    return RB(a, r - -296);
  }
  function g(n, I, a, r, B) {
    return qi(I, I - 20, n - -776);
  }
  return i;
}
const Ue = (i) => i.length < 3 * 155 + 5629 * -1 + 5165 ? 863 * 2 + 3655 + -1 * 5381 : i.reduce((t, e) => t + e, -48 + -2 * -1013 + -1978) / i.length, ne = (i) => Number.parseFloat(i.toFixed(-233 + 53 * 115 + -5859)), vB = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(0, 750 + 75 * -10, o.canvas.width, o.canvas.height);
}, Ia = 6464 * 1 + 3 * 2533 + 14063 * -1 + 0.75, LB = -2970 + -743 * -4, JB = 436 + -1 * -164, UB = -1 * 2851 + 1237 * -7 + 1 * 11510, YB = "dot-auto-capture-video", Gi = (i, o) => Math.min(i, o), aa = ({ height: i, width: o }, t) => {
  const e = Gi(o, i) * t, A = (o - e) / (-569 * 13 + 4060 + 3339), g = (i - e) / (1550 + -516 * 3), n = {};
  return n.shiftX = A, n.shiftY = g, n.width = e, n.height = e, n;
}, WB = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = aa(i, o), n = {};
  return n.shiftX = e / i.width, n.shiftY = A / i.height, n.width = g / i.width, n.height = t / i.height, n;
}, OB = ({ height: i, width: o }) => {
  const t = Gi(o, i), e = t / (48 * 20 + 2615 + -3572 * 1) * (-6 * 1537 + 1 * -5299 + 14525);
  if (o > i) {
    const g = {};
    return g.width = e, g.height = t, g;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, HB = (i, o) => {
  const t = Gi(o.width, o.height);
  return ne(i * t);
}, KB = ({ height: i, width: o }) => {
  const t = {};
  return t.height = i, t.width = o, aa(t, Ia);
}, TB = (i) => WB(i, Ia), PB = (i, o) => HB(i, o) * LB, qB = "@innovatrics/dot-common-auto-capture", jB = "7.2.1", ZB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, VB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, _B = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, XB = {
  name: qB,
  private: !0,
  version: jB,
  scripts: ZB,
  dependencies: VB,
  devDependencies: _B
}, zB = 658 + 2 * -329 + 0.4, $B = 137 * -67 + -6 * 873 + 1109 * 13 + 0.16, As = -238 * -5 + -4307 + -1 * -3117 + 0.2, es = 10535 + 49 * -215 + 0.05, ts = -16005 + 291 * 55, bg = {};
bg.min = -(49 * -105 + 64 * 106 + -18 * 91), bg.max = 1;
const d0 = bg, l0 = -2693 * 3 + -3245 + 11324 * 1, os = -19 * -258 + -4767 + -27 * 5 + 0.25, is = -346 * -28 + -7207 * -1 + -16895 * 1 + 0.2, gs = -2287 * 1 + -1 * 6863 + 9150 + 0.85, ns = 30, Is = 6382 + 3 * -2117 + 11 * -2 + 0.8100000000000005, So = {};
So.minDuration = 1e3, So.maxDuration = 2500, So.minFrames = 10;
const Zi = So, kg = {};
kg.max = 100, kg.min = 10;
const u0 = kg, as = 35 * 184 + -1 * 1125 + -1 * 4595, rs = 659 * 14 + -8515 + -511, Cs = -1 * -6899 + -5477 * 1 + -1418, mt = {};
mt.width = 200, mt.height = 200, mt.top = 50, mt.left = 50;
const Bs = mt, ra = "AES-CBC", Ca = "RSA-OAEP", ss = "SHA-256", Qs = "image/jpeg", cs = -7 * -914 + 3 * 2513 + 3 * -4643, xs = -53 * -181 + -5865 + 8 * -461, Ba = "/dot-assets", h0 = "dot_embedded_bg.wasm", sa = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), f0 = () => {
  const i = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return i && o;
}, Es = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
}, Gg = (i) => new Promise((o) => {
  setTimeout(o, i);
}), Qa = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? ne(t) : t)), ca = () => XB.version, xa = (i) => new URL(i).hostname.replace("www.", ""), ds = () => xa(window.location.href) === "localhost", uo = (i) => Object.entries(i).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), ls = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
function us(i, o) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, i(...e);
    };
    t === void (-8152 + 2830 * -1 + 10982 * 1) && (t = setTimeout(A, o));
  };
}
function hs(i) {
  return i.at(-1) === "/" ? i.slice(0, -(8215 + -303 * 1 + -9 * 879)) : i;
}
function Ea(i) {
  return "" + hs(i ?? "") + Ba;
}
const fs = () => "prod".toLowerCase() === "dev";
var Ce;
class Ut extends Array {
  constructor(t) {
    super();
    L(this, Ce);
    v(this, Ce, t);
  }
  get size() {
    return p(this, Ce);
  }
  pushFixed(...t) {
    if (t.length > p(this, Ce)) {
      const e = t.slice(-p(this, Ce));
      this.push(...e);
      return;
    }
    this.length === p(this, Ce) && this.splice(3623 * 1 + -6569 + 2946, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(1019 + -1 * 1019);
  }
}
Ce = new WeakMap();
const da = (i, o, t = Qs) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, o);
}), ps = async (i) => da(i, -1052 + 1142 * 1), ys = async (i) => da(i, -9662 + 23 * 157 + 6151 * 1, "image/png"), la = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, -509 * -19 + 1642 + -11313, -103 * -89 + 7772 + -16939, t.width, t.height), t;
}, Ds = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(3529 + 1 * -3529, 0, i.width, i.height);
  return t;
};
function p0(i, o, t) {
  return t - o / (9200 * -1 + 2 * -4031 + 17264) < 166 * -57 + 1 * -146 + -1 * -9608 ? 2706 + 1 * -8387 + 19 * 299 : t + o / (1907 + -6 * 1391 + 6441) > i ? i - o : t - o / (-4466 + 7495 * -1 + 11963);
}
function ws(i, o) {
  const t = i.width, e = i.height, A = t * (o.left / (-6 * -1538 + 1126 + 5127 * -2)), g = e * (o.top / (-7713 + -5158 * 1 + -763 * -17));
  return { width: o.width, height: o.height, shiftX: p0(t, o.width, A), shiftY: p0(e, o.height, g) };
}
async function ms(i, o) {
  const t = ws(i, o), e = la(i, t);
  return ys(e);
}
const ua = (i, o, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (A.strokeStyle = t, A.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), A.stroke());
}, Vi = (i, o, t) => {
  const { height: e, shiftX: A, shiftY: g, width: n } = o, I = {};
  I.x = A, I.y = g;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, ua(i, a, t);
}, Rt = (i, o, t, e = -1 * -2011 + 89 * 3 + -2278) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(o.x + e, o.y + e, 14101 + 162 * -87, 7), A.beginPath());
}, bs = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = o;
  return !(i.x < e || i.x > e + g || i.y < A || i.y > A + t);
}, ks = (i, o) => Object.values(i).every((t) => bs(t, o));
function jo(i) {
  const { height: o, width: t } = OB(i), e = (i.width - t) / (1808 + 15 * -38 + -1236), A = (i.height - o) / (-2994 + -1 * -4915 + 19 * -101), g = {};
  return g.shiftX = e, g.shiftY = A, g.width = t, g.height = o, g;
}
function ha(i, o, t) {
  const { height: e, width: A } = t, g = Gi(i.width, i.height), n = A - g * o * (-6606 + 1 * -4649 + -11257 * -1), I = e - g * o * (-1 * -5097 + -1 * 4349 + -1 * 746), a = (i.width - n) / (1 * 4954 + -87 * 113 + 1 * 4879), r = (i.height - I) / (-81 * 1 + 106 * 12 + 41 * -29), B = {};
  return B.shiftX = a, B.shiftY = r, B.width = n, B.height = I, B;
}
function Te(i, o) {
  const { shiftX: t, shiftY: e } = o, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
(function(i, o) {
  function t(a, r, B, C, x) {
    return cA(a - -362, B);
  }
  function e(a, r, B, C, x) {
    return cA(r - 16, B);
  }
  const A = i();
  function g(a, r, B, C, x) {
    return cA(x - 777, C);
  }
  function n(a, r, B, C, x) {
    return cA(x - -266, B);
  }
  function I(a, r, B, C, x) {
    return cA(B - 524, x);
  }
  for (; ; )
    try {
      if (-parseInt(I(833, 814, 829, 815, "Y2R(")) / 1 * (parseInt(I(820, 807, 815, 822, "5slC")) / 2) + -parseInt(e(312, 326, "t7)I", 313, 325)) / 3 + -parseInt(e(307, 316, "sOQb", 324, 316)) / 4 * (-parseInt(e(331, 325, "G8uS", 310, 315)) / 5) + -parseInt(I(808, 805, 816, 818, "PbJ)")) / 6 + parseInt(n(63, 52, "DYDT", 45, 50)) / 7 * (-parseInt(t(-68, -62, "OLJw", -69, -78)) / 8) + parseInt(g(1102, 1101, 1081, "X75k", 1089)) / 9 * (parseInt(I(824, 808, 819, 807, "pE#z")) / 10) + parseInt(I(810, 815, 813, 807, "HAQn")) / 11 === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Zo, -9 * -24989 + -391 * -445 + 15094);
function Zo() {
  const i = ["Eqb+WRDMEYGrWR8gmdi", "W498W5b4zmkwe2ZcKG", "WRZdUCoFW4WscmkyW5yJWPDd", "i8kcW7JdNe3dK8obDfBcKxNdGSk/AG", "vmksWQdcSeW", "WQ47iZNdTbRcHmoypSoUWQ3cIG", "dwRcKSkss8oesefCdmoAW58", "FmohWQmYW5JdOCkX", "kXZcMSogwHZdTfddJ8o8WRK", "EWCcW6iHkbi0", "s8kQW4jYW7pcLHG4dZ7cHXq", "o0iNW6C4", "WOVcHhZcNaa", "W4SOlmkblaVdRGJdV8kZu8kw", "uWjBW7yzW5JcMG", "W6DZW6yjWPm", "verdW7aeW5BcGSox", "v8ooW7z4WOD3W4K", "s8kUW4TWW7JcMXe+hItcJYi", "E8oyC8ojv8kbbq", "h8o5WPuXWQ8", "aSoaW6BdHbmXuCkskGVdUmkBWQa", "WRhdUCozWPfLlSkXW4Ch", "WPBcPmotW53cSmoJrHX9k8oJW6KF", "WOpdV1uJyCkdWRWbW5VdKa8t", "ACkwisy", "W71VBmkhmHPicXf5W5Dg", "W4z8W5uMfSoWyHJcLmkLW7zFW6hcGa", "WQuTWPrJsq"];
  return Zo = function() {
    return i;
  }, Zo();
}
function cA(i, o) {
  const t = Zo();
  return cA = function(e, A) {
    e = e - 288;
    let g = t[e];
    if (cA.Nyxabk === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      cA.gTyPQj = B, i = arguments, cA.Nyxabk = !0;
    }
    const I = t[0], a = e + I, r = i[a];
    return r ? g = r : (cA.aSdNHE === void 0 && (cA.aSdNHE = !0), g = cA.gTyPQj(g, A), i[a] = g), g;
  }, cA(i, o);
}
function Gs({ assetsDirectoryPath: i, bramble: o }) {
  const [t, e] = rA(), A = t !== void 0;
  K(() => {
    async function a() {
      await o[B(563, "p7#f")](Ea(i));
      function r(C, x, Q, E, d) {
        return cA(C - 852, Q);
      }
      function B(C, x, Q, E, d) {
        return cA(C - 252, x);
      }
      e(o[r(1142, 1141, "NNYB") + B(558, "d!eW") + B(566, "DYDT") + "t"]());
    }
    a();
  }, [o, i, e]);
  const g = {};
  function n(a, r, B, C, x) {
    return cA(C - -279, B);
  }
  g[n(19, 36, "oct]", 22) + n(24, 21, "KP)M", 19)] = t;
  function I(a, r, B, C, x) {
    return cA(a - -431, C);
  }
  return g[I(-134, -133, -138, "pE#z") + "sh"] = A, g;
}
var fa = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(fa || {});
const Ng = {};
Ng.SIMD = "simd", Ng.NO_SIMD = "no-simd";
const y0 = Ng, Fg = {};
Fg.Lower = "Lower", Fg.Higher = "Higher";
const Sg = Fg, Ro = {};
Ro.VISIBLE = "VISIBLE", Ro.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Ro.HIDDEN = "HIDDEN";
const Vo = Ro;
function uA(i, o) {
  var t = _o();
  return uA = function(e, A) {
    e = e - (-329 * 1 + -2559 + 464 * 7);
    var g = t[e];
    if (uA.zryWnK === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = Q.length; m < R; m++)
          E += "%" + ("00" + Q.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var Q = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      uA.bIUnlS = I, i = arguments, uA.zryWnK = !0;
    }
    var a = t[4 * 905 + -9418 + -446 * -13], r = e + a, B = i[r];
    return B ? g = B : (uA.CngeFk === void 0 && (uA.CngeFk = !0), g = uA.bIUnlS(g, A), i[r] = g), g;
  }, uA(i, o);
}
function _o() {
  var i = ["rvGXWPC/WP0CzM7dVSob", "WPKRWQ3dQLyAW5zTWPy", "s8ohb8o0awJcQaf4", "WOtcHxZdMXRcVeNdM1RcTCo4W7i", "ofNdJSoQW6LJW6NcH8oxjCkV", "pbWzpSkqumoPhW", "WR8BW7PKW6HXE1VcJ8kpWOxdQNC", "nSkWr0VdMNZcH8ok", "WORcKMvsz2nIWOnZW5BcLSk1BG", "ErJcGNKUWQWdW5PlWPeFymo3", "FbVcGNSQW49XW7b8WRS6", "WO7cJ3hcGwddRx3dGLS", "orvOrmoyk8kkbSorWQaBW5PV", "W4tcH8oTWOVcPxLyuW", "vCkgrWlcLW", "cIb7WRlcLCk1W5SbEtRcNv0", "mupcVgJcH3JdG8oeW6VdUaJdG2CF", "W4fnWRu2WQO", "hmo1kgJdSG", "W4FdKmk9Bs9mW7Ot", "fmkQW7HaWPddUsehWQeOWRJcRMC", "qKpdHxJcLrPOohizWOG", "WPSOWQBcVrP3WRexWQpcOM3cRCkCW5O", "mvJcJmodWPHwy8krW7/dSCkeBd4"];
  return _o = function() {
    return i;
  }, _o();
}
(function(i, o) {
  function t(r, B, C, x, Q) {
    return uA(x - -776, r);
  }
  function e(r, B, C, x, Q) {
    return uA(r - 82, C);
  }
  function A(r, B, C, x, Q) {
    return uA(C - 915, B);
  }
  function g(r, B, C, x, Q) {
    return uA(C - 294, Q);
  }
  function n(r, B, C, x, Q) {
    return uA(B - 258, x);
  }
  for (var I = i(); ; )
    try {
      var a = -parseInt(n(637, 630, 630, "1zAL", 619)) / 1 + parseInt(n(640, 639, 642, "(8J3", 650)) / 2 * (-parseInt(g(677, 667, 670, 677, "VmeL")) / 3) + -parseInt(n(644, 635, 630, "tX8w", 629)) / 4 * (parseInt(A(1283, "syHf", 1277, 1268, 1283)) / 5) + parseInt(g(662, 669, 662, 671, "$y77")) / 6 + parseInt(t("(8J3", -416, -404, -412, -405)) / 7 + -parseInt(e(442, 443, "CLz8", 446, 438)) / 8 * (parseInt(n(611, 623, 616, "2IWr", 615)) / 9) + -parseInt(e(449, 454, "^eie", 456, 460)) / 10 * (-parseInt(A(1286, "qgfW", 1278, 1268, 1280)) / 11);
      if (a === o) break;
      I.push(I.shift());
    } catch {
      I.push(I.shift());
    }
})(_o, -1 * -1036400 + 1037043 + -1121301 * 1);
function Ns({ crosshatch: i }) {
  function o(e, A, g, n, I) {
    return uA(A - 12, n);
  }
  function t(e, A, g, n, I) {
    return uA(e - 211, I);
  }
  return i != null && i[t(581, 580, 580, 571, "uYR[") + "id"] ? Sg[o(379, 378, 385, "Qb#4") + "r"] : Sg[o(372, 381, 383, "fYdO")];
}
function xA(i, o) {
  const t = Xo();
  return xA = function(e, A) {
    e = e - (47 * -94 + 118 * -7 + 1835 * 3);
    let g = t[e];
    if (xA.PeVSsE === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      xA.MkSFZp = B, i = arguments, xA.PeVSsE = !0;
    }
    const I = t[0], a = e + I, r = i[a];
    return r ? g = r : (xA.pdjLVN === void 0 && (xA.pdjLVN = !0), g = xA.MkSFZp(g, A), i[a] = g), g;
  }, xA(i, o);
}
(function(i, o) {
  function t(a, r, B, C, x) {
    return xA(r - 979, x);
  }
  function e(a, r, B, C, x) {
    return xA(B - -496, x);
  }
  function A(a, r, B, C, x) {
    return xA(C - -673, r);
  }
  function g(a, r, B, C, x) {
    return xA(a - 126, r);
  }
  function n(a, r, B, C, x) {
    return xA(B - 493, C);
  }
  const I = i();
  for (; ; )
    try {
      if (parseInt(n(767, 764, 763, "H)^*", 777)) / 1 + -parseInt(n(746, 760, 759, "v[)C", 767)) / 2 * (-parseInt(t(1247, 1241, 1229, 1237, "ezFH")) / 3) + parseInt(e(-219, -231, -222, -214, "ezFH")) / 4 * (parseInt(t(1262, 1255, 1246, 1251, "Ht%B")) / 5) + parseInt(g(414, "(mDc", 419, 412, 415)) / 6 + -parseInt(t(1235, 1247, 1246, 1245, "HAfO")) / 7 * (-parseInt(n(798, 793, 785, "H)^*", 798)) / 8) + -parseInt(g(409, "qR7c", 401, 420, 420)) / 9 * (parseInt(g(404, "0FCV", 413, 414, 418)) / 10) + -parseInt(A(-394, "(mDc", -383, -392, -375)) / 11 * (parseInt(g(401, "BhxS", 418, 400, 395)) / 12) === o) break;
      I.push(I.shift());
    } catch {
      I.push(I.shift());
    }
})(Xo, -1264 * 989 + 2427 * -471 + 3221451);
function Fs({ assetsDirectoryPath: i, children: o, bramble: t }) {
  const e = {};
  e[a(-71, -55, -73, -57, "53j3") + "le"] = t, e[B(1187, 1197, 1212, 1197, "vtUb") + B(1190, 1219, 1196, 1208, "hfC(") + B(1194, 1215, 1202, 1198, "e5h)") + r("ciFe", 244, 246, 235, 251)] = i;
  const { sunfish: A, crosshatch: g } = Gs(e), n = {};
  function I(Q, E, d, u, c) {
    return xA(d - -966, c);
  }
  n[a(-99, -106, -101, -107, "clWa") + I(-690, -668, -684, -679, "j(8b")] = g;
  function a(Q, E, d, u, c) {
    return xA(Q - -364, c);
  }
  function r(Q, E, d, u, c) {
    return xA(c - -45, Q);
  }
  function B(Q, E, d, u, c) {
    return xA(u - 918, c);
  }
  const C = fA(() => ({ redfin: Ns(n), sunfish: A, crosshatch: g, bramble: t }), [A, g, t]), x = {};
  return x[r("HAfO", 225, 239, 214, 227)] = C, x[B(1190, 1174, 1191, 1181, "e5h)") + B(1222, 1221, 1202, 1205, "sKHG")] = o, y(Po[I(-710, -710, -702, -699, "@ZUV") + B(1210, 1190, 1213, 1203, "cVOF")], x);
}
function Xo() {
  const i = ["WQRcKgRcMSoIj1xcJ3yWgmk1ua", "s8k1wHfc", "hmoRtIdcI8koW7ddVCkE", "B3XWrmknBcS", "pCkSxSkwWPS", "rSo1W6aBqSoXWQhdPSo0", "WOXaWP/cKCoHW4tdImoeCwuh", "WPjKd3C", "WR/dOSocx8khW7Ofp8kz", "WPSbW5fjwuNdHCoQdG", "omkSceTz", "lSkBW5FdQmkb", "wYhcKqZcSW", "abNcLmk7svnvW43dNf0", "W6mVhN7cKqKOW6dcVCkp", "WRJcSqFdLf7dT8k2W4xdUZxcISkDWOW", "WR3cUGpdKLZcHCoeW4tdUrhcOq", "zGOemCo9c0WmW7CUW74hWRS", "W6yVhhtdNvr5W4ZcOmkNtIO6", "W7/dOLVcKqK", "f3KUtmo/W7pdPw7cQXi5kCkA", "WP0iW5q4g17dGCogk8kmha", "rmkfWQFcGqXtWOJcG3PdwqlcMG", "eNeVfSkoWQ3cH1/cJa", "cmk1rYddNNxdHMtdLSoFiSk9WR4", "haGtW6qmW5lcGYhcPW", "W7RdKsNdJ8kK", "omkWdLve", "W6RcLqfQpCoJACk1W4e", "n8k6W65LFq", "j8ojWPHcW7lcLmodEmkaW4nV", "EvhdICorw8oOWQVdLvO", "tCotvG", "zmowf3iCW4VdSW", "m8o3FW", "W63cKaepFmkZgmkYW79pE8oozW"];
  return Xo = function() {
    return i;
  }, Xo();
}
function zo() {
  var i = ["WRyXW7BdGSk9ceVcMe3cPmoHoGi", "tvZdISoMWRpdK8o2W7b7wIq", "W4XAlSoYkmo8Bc4hemkQW482", "WR0/pNpcSMKPaCkAhmkhmCkW", "i0lcIebxyaXvW5fFdmoxdG", "ASoybmkwWRn8l8ozbgNcRa", "D8o7WQWBW7VdGmoXga", "W5VcSsK9WO5EkYddQIn4ymkV", "oIq5rSo1BmkaWPPdW6xdJs83", "W7dcQSoUW4dcKCokWRWWWPLRnSkZFW", "bxy3ACkMbYSr", "W77cQ8k7WRFdQmkmW50J", "W5hdI0dcJgPWiCoWW5TXqqO", "mMJdUJBdNmkqhqJcLeJcM8k/", "WRegfXinwmouoW", "WOFdQuXTW5VcHSonW7O", "W7BcRmkbWPRdRCkuW58B", "pmkyneG+ECobW4ddGmk8W4yL", "sddcM8ozW7jSWObZvf4+xa", "svNdJmoLWRlcTCkMW6XKEXFcR24"];
  return zo = function() {
    return i;
  }, zo();
}
(function(i, o) {
  var t = i();
  function e(r, B, C, x, Q) {
    return NA(Q - 277, r);
  }
  function A(r, B, C, x, Q) {
    return NA(B - -527, C);
  }
  function g(r, B, C, x, Q) {
    return NA(r - 431, B);
  }
  function n(r, B, C, x, Q) {
    return NA(C - -385, x);
  }
  function I(r, B, C, x, Q) {
    return NA(r - -724, C);
  }
  for (; ; )
    try {
      var a = -parseInt(g(699, "xXV0", 703, 703, 701)) / 1 + parseInt(I(-444, -452, "dLh6", -454, -453)) / 2 * (parseInt(A(-251, -258, "rElb", -268, -265)) / 3) + parseInt(g(705, "Emia", 703, 710, 698)) / 4 + parseInt(A(-241, -245, "3bcj", -254, -255)) / 5 + -parseInt(A(-247, -249, "uxr&", -241, -245)) / 6 * (parseInt(n(-120, -110, -114, "Lt*u", -109)) / 7) + -parseInt(n(-107, -107, -115, "ayC9", -123)) / 8 * (-parseInt(e("ukBz", 550, 556, 543, 550)) / 9) + -parseInt(g(695, "Lt*u", 700, 687, 685)) / 10;
      if (a === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(zo, 122663 + 22277 * 22);
function NA(i, o) {
  var t = zo();
  return NA = function(e, A) {
    e = e - (-4822 * -1 + 157 * 18 + -7384);
    var g = t[e];
    if (NA.vPrJQZ === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = Q.length; m < R; m++)
          E += "%" + ("00" + Q.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var Q = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      NA.QSSrsK = I, i = arguments, NA.vPrJQZ = !0;
    }
    var a = t[0], r = e + a, B = i[r];
    return B ? g = B : (NA.yhfcYK === void 0 && (NA.yhfcYK = !0), g = NA.QSSrsK(g, A), i[r] = g), g;
  }, NA(i, o);
}
function Ss({ analytics: i, crosshatch: o }) {
  return o !== void 0 && !o.isAnalyticsDisabled ? i : void (9835 + -538 * -9 + 13 * -1129);
}
function Rs({ analytics: i, appKey: o, redfin: t, crosshatch: e, bramble: A }) {
  const g = {};
  g.analytics = i, g.crosshatch = e;
  const n = Ss(g);
  return K(() => {
    n && n.init(o);
  }, [n, o]), K(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), n && n.walleye(t, A.getCustomerName()));
  }, [n, A, e, t]), K(() => {
    if (n)
      return window.addEventListener("beforeunload", n.endSession), () => {
        n.endSession(), window.removeEventListener("beforeunload", n.endSession);
      };
  }, [n]), n;
}
function Ms({
  analytics: i,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: g } = ct(), n = Rs({ analytics: i, redfin: e, appKey: o, crosshatch: A, bramble: g }), I = fA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ y(To.Provider, { value: I, children: t });
}
const $o = at(void 0);
$o.displayName = "CameraServiceContext";
function vs() {
  const i = Ee($o);
  if (i === void 0)
    throw new Error(`${$o.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function pa() {
  return navigator.mediaDevices.enumerateDevices();
}
async function _i() {
  return (await pa()).filter((o) => o.kind === "videoinput");
}
function Xi(i) {
  i.getTracks().forEach((t) => t.stop());
}
function D0(i) {
  return i.getVideoTracks()[-7407 + 213 * 34 + -55 * -3];
}
const Mo = {};
Mo.width = 1920, Mo.height = 1080, Mo.facingMode = xn.FRONT;
const Ls = Mo;
var be, Xe, OA;
class ya {
  constructor({ defaultVideoConstrains: o = Ls, minCameraShorterSide: t = as } = {}) {
    L(this, be);
    L(this, Xe, []);
    L(this, OA, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, v(this, be, e);
  }
  get availableCameraProperties() {
    return p(this, Xe);
  }
  get mediaStream() {
    return p(this, OA);
  }
  get videoTrack() {
    return p(this, OA) ? D0(p(this, OA)) : void (-6338 + -2 * -3169);
  }
  get isCameraActive() {
    var o;
    return !!((o = p(this, OA)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Xi(t);
  }
  async open(o = {}) {
    f0() && await Gg(135 * 71 + -8083 + -1052), v(this, OA, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await _i();
    if (o.length <= -7737 + -3 * 199 + -1667 * -5) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = o.findIndex((I) => I.deviceId === e.deviceId), g = o[A + (1734 + -4041 * 1 + 4 * 577)] ?? o[-1811 * 5 + -5 * -1403 + 2040], n = this.getConstraints(t, g);
    this.close(), await this.open(n);
  }
  close() {
    p(this, OA) && (Xi(p(this, OA)), v(this, OA, null));
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = o;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = p(this, Xe), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const o = this.getSettings();
    if (!o.width) throw new Y("Video width is undefined");
    if (!o.height) throw new Y("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await pa(), e = t.find((A) => A.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === xn.FRONT ? void (-901 + 901 * 1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return sa() ? (await _i()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-9799 + -45 * -201 + 754);
  }
  async collectAvailableCamerasInfo() {
    const o = await _i();
    for (const t of o) {
      f0() && await Gg(-19 * -28 + 89 * -75 + -347 * -19);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const g = await navigator.mediaDevices.getUserMedia(A), n = D0(g);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const B = r;
        p(this, Xe).push(B), Xi(g);
      } catch (e) {
        e instanceof Error && Y.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...p(this, be).defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (-6 * -455 + -3413 + 683 * 1);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new Y("Could not init camera settings");
    if (typeof p(this, be).minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < p(this, be).minCameraShorterSide)
      throw this.close(), new Y("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
be = new WeakMap(), Xe = new WeakMap(), OA = new WeakMap();
var Ht;
class Js {
  constructor(o, t, e) {
    L(this, Ht, !1);
    this.videoHandler = o, this.cameraHandler = t, this.keypressDetection = e;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    p(this, Ht) || (v(this, Ht, !0), await ya.requestPermission());
  }
  async startVideoStream(o = {}) {
    await this.requestCameraPermission(), this.keypressDetection.addKeydownListener(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), Es() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(o != null && o.width)) throw new Y("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new Y("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new Y("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 1801 * 5 + -2816 + -3 * 2063, 5225 + -757 * -1 + -5982), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.keypressDetection.removeKeydownListener();
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
Ht = new WeakMap();
var te;
class Us {
  constructor(o) {
    L(this, te);
    v(this, te, o);
  }
  get videoElement() {
    return p(this, te);
  }
  async play(o) {
    p(this, te).srcObject = o, await p(this, te).play();
  }
  stop() {
    p(this, te).srcObject = null;
  }
  hasSrcObject() {
    return !!p(this, te).srcObject;
  }
}
te = new WeakMap();
class Ys {
  constructor() {
    D(this, "keypressCount", 7459 + 2487 * -1 + -2486 * 2);
    D(this, "initializationTime");
    D(this, "timeToFirstKeypress", void (-4357 * -1 + -9229 + 4872 * 1));
    D(this, "handleKeyDown", () => {
      this.keypressCount++, this.keypressCount === 5 * -1765 + -9949 + 18775 && (this.timeToFirstKeypress = Date.now() - this.initializationTime);
    });
    this.initializationTime = Date.now();
  }
  removeKeydownListener() {
    this.keypressCount = -1 * -6268 + 4 * -565 + -4008, this.timeToFirstKeypress = void (-681 + -9001 * -1 + 2 * -4160), window.removeEventListener("keydown", this.handleKeyDown);
  }
  addKeydownListener() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  getKeypressCount() {
    return this.keypressCount;
  }
  getTimeToFirstKeypress() {
    return this.timeToFirstKeypress;
  }
  createResult() {
    if (!this.timeToFirstKeypress) {
      var o = {};
      return o.hasBeenDetected = !1, o;
    }
    return { hasBeenDetected: !0, keypressAmount: this.getKeypressCount(), timeToFirstKeypress: this.getTimeToFirstKeypress() };
  }
}
function Ws(i) {
  const o = z(null), [t, e] = rA(), [A, g] = rA(), { handleError: n, setIsCameraReady: I } = Qt(), a = bA((B) => {
    g((C) => ls(B, C));
  }, []);
  K(() => {
    if (!o.current) {
      n(new Y("Something went wrong during video initialization"));
      return;
    }
    const B = new Us(o.current), C = new ya(), x = new Ys(), Q = new Js(B, C, x);
    return (async () => {
      try {
        const d = {};
        d.facingMode = i, await Q.startVideoStream(d);
      } catch (d) {
        if (d instanceof Error) {
          n(Y.fromCameraError(d));
          return;
        }
      }
      e(Q), I(!0), a(Q.getCameraResolution());
    })(), () => {
      Q == null || Q.stopStreaming(), I(!1), e(void (81 * 100 + -1 * -3505 + -11605 * 1));
    };
  }, [i, n, I, o, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = o, r;
}
function Os({ cameraFacing: i, children: o }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: g } = Ws(i), n = fA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: g
    }),
    [e, t, A, g]
  );
  return /* @__PURE__ */ y($o.Provider, { value: n, children: o });
}
const En = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
};
function Hs(i) {
  const o = {};
  o.instruction = i;
  const t = o;
  En(yg.REQUEST_CAPTURE, t);
}
function Ks({ children: i, ...o }) {
  const t = o.cameraFacing ?? xn.FRONT;
  return /* @__PURE__ */ y(Os, { cameraFacing: t, children: i });
}
let F;
const oe = new Array(131 * 57 + -1220 + -6119).fill(void 0);
oe.push(void 0, null, !0, !1);
function Rg(i) {
  return oe[i];
}
let XA = 3065 + -2 * -3562 + -443 * 23, bt = null;
function vo() {
  return (bt === null || bt.byteLength === 2 * -2563 + 1259 * 1 + 3867) && (bt = new Uint8Array(F.memory.buffer)), bt;
}
const Lo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Ts = typeof Lo.encodeInto == "function" ? function(i, o) {
  return Lo.encodeInto(i, o);
} : function(i, o) {
  const t = Lo.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function Yt(i, o, t) {
  if (t === void 0) {
    const I = Lo.encode(i), a = o(I.length, -489 * 5 + 5 * -444 + 4666) >>> 56 * 139 + -797 * -1 + -1 * 8581;
    return vo().subarray(a, a + I.length).set(I), XA = I.length, a;
  }
  let e = i.length, A = o(e, 3862 * -1 + 5717 + -618 * 3) >>> -485 * 1 + 32 * 5 + -65 * -5;
  const g = vo();
  let n = 6 * -1247 + 33 * -166 + 12960;
  for (; n < e; n++) {
    const I = i.charCodeAt(n);
    if (I > -233 * 17 + 8960 + -4872) break;
    g[A + n] = I;
  }
  if (n !== e) {
    n !== 3 * -66 + -6752 + 6950 && (i = i.slice(n)), A = t(A, e, e = n + i.length * (1132 * 6 + -896 + -5893), 1) >>> -9981 + 3 * -1301 + 13884;
    const I = vo().subarray(A + n, A + e), a = Ts(i, I);
    n += a.written, A = t(A, e, n, -6906 + -4 * -47 + -1 * -6719) >>> -3370 * 2 + -196 * 2 + 7132;
  }
  return XA = n, A;
}
function Da(i) {
  return i == null;
}
let kt = null;
function PA() {
  return (kt === null || kt.byteLength === -12 * 394 + -9578 + 14306) && (kt = new Int32Array(F.memory.buffer)), kt;
}
let Mt = oe.length;
function Ps(i) {
  i < 5803 + 107 * -53 || (oe[i] = Mt, Mt = i);
}
function wa(i) {
  const o = Rg(i);
  return Ps(i), o;
}
const Mg = {};
Mg.ignoreBOM = !0, Mg.fatal = !0;
const ma = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Mg) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && ma.decode();
function Ai(i, o) {
  return i = i >>> 4945 + -1 * -4888 + 9833 * -1, ma.decode(vo().subarray(i, i + o));
}
function vg(i) {
  Mt === oe.length && oe.push(oe.length + 1);
  const o = Mt;
  return Mt = oe[o], oe[o] = i, o;
}
let Gt = null;
function ba() {
  return (Gt === null || Gt.byteLength === -2 * -1294 + 7633 + -10221) && (Gt = new Uint32Array(F.memory.buffer)), Gt;
}
function w0(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = ba();
  for (let A = -7687 * -1 + 7145 * -1 + 1 * -542; A < i.length; A++)
    e[t / (-2 * 4822 + 2475 + -9 * -797) + A] = vg(i[A]);
  return XA = i.length, t;
}
function m0(i, o) {
  i = i >>> -8757 + -1493 * 4 + 1339 * 11;
  const t = ba(), e = t.subarray(i / (-5480 + 5484 * 1), i / (-61 * -163 + -5948 + -13 * 307) + o), A = [];
  for (let g = -3056 + 761 * 11 + 1063 * -5; g < e.length; g++)
    A.push(wa(e[g]));
  return A;
}
function qs(i, o) {
  const t = Yt(i, F.__wbindgen_malloc, F.__wbindgen_realloc), e = XA, A = Yt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), g = XA, n = F.is_mobile_supported(t, e, A, g);
  return dn.__wrap(n);
}
const Lg = {};
Lg.register = () => {
}, Lg.unregister = () => {
};
const b0 = typeof FinalizationRegistry > "u" ? Lg : new FinalizationRegistry((i) => F.__wbg_licensevalidationresult_free(i >>> 881 * -7 + 7555 + -347 * 4));
class dn {
  static __wrap(o) {
    o = o >>> -8023 + 266 * -22 + -4625 * -3;
    const t = Object.create(dn.prototype);
    return t.__wbg_ptr = o, b0.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 2903 + 1 * -2903, b0.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, A, g) {
    var n = Da(t) ? 0 : Yt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), I = XA;
    const a = w0(e, F.__wbindgen_malloc), r = XA, B = w0(A, F.__wbindgen_malloc), C = XA, x = Yt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), Q = XA, E = F.licensevalidationresult_new(o, n, I, a, r, B, C, x, Q);
    return this.__wbg_ptr = E >>> -4862 + -26 * -187, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 6741 + -321 * 21;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = PA()[e / (9777 + 1 * -5861 + -1 * 3912) + (4 * 1819 + -312 * 1 + -6964)], t = PA()[e / 4 + (-3057 * -1 + 8778 + -11834)];
      let A;
      return o !== 7583 + -5153 * -1 + -64 * 199 && (A = Ai(o, t).slice(), F.__wbindgen_free(o, t * 1, -7 * -282 + 323 * -4 + -681)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(2725 + -1146 * 8 + -3 * -2153);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var o = PA()[A / 4 + (6877 + 6027 * 1 + -12904)], t = PA()[A / (-8129 * -1 + 8843 * 1 + 168 * -101) + (-6558 + 2221 * 1 + 4338)], e = m0(o, t).slice();
      return F.__wbindgen_free(o, t * (5076 + 335 * -2 + 4402 * -1), 1 * -4441 + -1 * -3003 + 1442), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(839 * 5 + -3 * 1842 + 449 * 3);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var o = PA()[A / 4 + (-499 * -7 + -5 * 1703 + 5022)], t = PA()[A / (-5188 + -59 * -88) + (-5969 * -1 + -887 * 1 + 1 * -5081)], e = m0(o, t).slice();
      return F.__wbindgen_free(o, t * (-8428 + 17 * 496), 94 * 73 + 6441 + -3 * 4433), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(276 * -23 + -23 * -379 + 1 * -2353);
    }
  }
  get customer() {
    let o, t;
    try {
      const g = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(g, this.__wbg_ptr);
      var e = PA()[g / (-23 * 71 + -3501 + 5138) + 0], A = PA()[g / (7853 * -1 + -8340 + 16197) + (1 * -9848 + -2444 + 12293)];
      return o = e, t = A, Ai(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(7328 + 5 * -1439 + 39 * -3), F.__wbindgen_free(o, t, -4386 + -551 * -2 + 45 * 73);
    }
  }
}
async function js(i, o) {
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
function Zs() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = Rg(t), A = typeof e == "string" ? e : void 0;
    var g = Da(A) ? -4 * -88 + 19 * 229 + -4703 : Yt(A, F.__wbindgen_malloc, F.__wbindgen_realloc), n = XA;
    PA()[o / 4 + 1] = n, PA()[o / (-283 * -12 + 3433 + -15 * 455) + (973 * 4 + 5403 + -5 * 1859)] = g;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    wa(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = Ai(o, t);
    return vg(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return vg(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return Rg(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(Ai(o, t));
  }, i;
}
function Vs(i, o) {
  return F = i.exports, ka.__wbindgen_wasm_module = o, kt = null, Gt = null, bt = null, F;
}
async function ka(i) {
  if (F !== void 0) return F;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcCACAAQQhqIARBCGooAgA2AgAgBEEQaiQAC48DAQF/IwBBMGsiAiQAAn8CQAJAAkACQCAALQAAQQFrDgMBAgMACyACIAAoAgQ2AgAgAiAALQABOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkEDNgIcIAJBoIzAADYCGCACQQk2AgwgAUEYaigCACEAIAIgAkEIajYCICACIAI2AhAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQeSMwAA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAiAAKAIENgIAIAIgAC0AAToAByACQSRqQgI3AgAgAkEUakEENgIAIAJBAzYCHCACQYCNwAA2AhggAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACNgIQIAIgAkEHajYCCCABKAIUIAAgAkEYahAvDAELIAJBJGpCADcCACACQQE2AhwgAkGojcAANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvCyACQTBqJAALhwMCBX8BfiMAQUBqIgUkAEEBIQcCQCAALQAEDQAgAC0ABSEJIAAoAgAiBigCHCIIQQRxRQRAIAYoAhRBhc/AAEGsqMAAIAkbQQJBAyAJGyAGQRhqKAIAKAIMEQAADQEgBigCFCABIAIgBigCGCgCDBEAAA0BIAYoAhRBj5/CAEECIAYoAhgoAgwRAAANASADIAYgBCgCDBEBACEHDAELIAlFBEAgBigCFEGvqMAAQQMgBkEYaigCACgCDBEAAA0BIAYoAhwhCAsgBUEBOgAbIAVBNGpBkKjAADYCACAFIAYpAhQ3AgwgBSAFQRtqNgIUIAUgBikCCDcCJCAGKQIAIQogBSAINgI4IAUgBigCEDYCLCAFIAYtACA6ADwgBSAKNwIcIAUgBUEMaiIINgIwIAggASACEDENACAIQY+fwgBBAhAxDQAgAyAFQRxqIAQoAgwRAQANACAFKAIwQbKowABBAiAFKAI0KAIMEQAAIQcLIABBAToABSAAIAc6AAQgBUFAayQAIAAL7QIBCH8jAEEQayIHJAAgB0EIaiAAIAEQkwECQAJAIAcoAggiAkGBgICAeEcEQCACRQ0BAAsgAEEoaiEIQQQhBAJ/IAAoAigiBkEETQRAIABBCGohAyAIIQUgBgwBCyAAQQRqIQUgACgCCCEDIAYhBCAAKAIECyECAkAgBSACIARJBH8gAyACQQN0aiEDA0AgAUUNAiADQgA3AwAgA0EIaiEDIAFBAWshASAEIAJBAWoiAkcNAAsgBAUgAgs2AgAgAUUNAiAAQQRqIQYgAEEIaiEJA0ACfyAIKAIAIgRBBUkEQCAEIQMgCSEFQQQhBCAIDAELIAYoAgAhAyAJKAIAIQUgBgshAiADIARGBEAgABCgASAAKAIEIQMgACgCCCEFIAYhAgsgBSADQQN0akIANwMAIAIgAigCAEEBajYCACABQQFrIgENAAsMAgsgBSACNgIADAELQezwwABBEUGA8cAAEN4BAAsgB0EQaiQAC9ECAQR/IABBjAJqIgggAUEMbGohBQJAIAFBAWoiBiAALwGSAyIHSwRAIAUgAikCADcCACAFQQhqIAJBCGooAgA2AgAMAQsgCCAGQQxsaiAFIAcgAWsiCEEMbBC9AiAFQQhqIAJBCGooAgA2AgAgBSACKQIANwIAIAAgBkEYbGogACABQRhsaiAIQRhsEL0CCyAAIAFBGGxqIgIgAykDADcDACACQRBqIANBEGopAwA3AwAgAkEIaiADQQhqKQMANwMAIABBmANqIQIgAUECaiIDIAdBAmoiBUkEQCACIANBAnRqIAIgBkECdGogByABa0ECdBC9AgsgAiAGQQJ0aiAENgIAIAAgB0EBaiIDOwGSAyAFIAZLBEAgAUECdCAAakGcA2ohAgNAIAIoAgAiBCABQQFqIgE7AZADIAQgADYCiAIgAkEEaiECIAEgA0cNAAsLC98CAQl/IwBBgAFrIgMkACADQQhqIAIQ4AEgAygCDCADKAIIIAEgAhC+AiEGIAJBAWshASACQQF2IQcDQCAEIAZqIgUtAAAhCCAFIAEgBmoiBS0AADoAACAFIAg6AAAgAUEBayEBIAcgBEEBaiIERw0ACwJAIAIEQCAAIAYgAhAsDAELIANBAjYCHCADQgQ3AhQgA0EANgIgIANBADYCSCADQSBqIgIgA0EUahAzIANB0ABqIgEgAkEwEL4CGiABQQRyIQcgA0HYAGohBSADQfgAaiEIIAMoAlghCgNAIAUhAiADKAJ4IgEhBCABQQVJIgtFBEAgAygCVCEEIAohAgsCQCAERQ0AIARBA3QgAmpBCGspAwBCAFINACAIIQQgC0UEQCAHIQQgAygCVCEBCyABRQ0BIAQgAUEBazYCAAwBCwsgACADQdAAakEwEL4CGgsEQCAGECILIANBgAFqJAALywICBX4GfyMAQSBrIgokACABIAMgASADSRsiDEEDdCENAkACQCAMRQ0AIAAgDWohCyACIQkgDCEOA0AgACAEIAApAwAiBCAJKQMAIgZ9Igd8Igg3AwAgByAIVq0gBSAEIAZUrX18IgRCP4chBSAAQQhqIQAgCUEIaiEJIA5BAWsiDg0ACyAEUA0AIAFBA3QgDEEDdGshAANAIAAEQCALIAQgCykDAHwiBjcDACAAQQhrIQAgC0EIaiELIAUgBCAGVq18IgRCP4chBSAEQgBSDQEMAgsLIAQgBYRQRQ0BCyACIA1qIQkgA0EDdCANayEAA0AgAARAIABBCGshACAJKQMAIAlBCGohCVANAQwCCwsgCkEgaiQADwsgCkEUakIANwIAIApBATYCDCAKQdz/wAA2AgggCkGMrMIANgIQIApBCGpB5P/AABDrAQAL7gcCCX4JfyMAQdAAayINJAAgASgCKCIOQQRNBH8gAUEIagUgASgCBCEOIAEoAggLIQwCQCAOBEAgAlANASAMQQhrIREgDkEDdCEOIA1BGGohEgNAIA4gEWoiEykDACILIQQjAEEgayIMJABCACEDQgAhBkIAIQdCACEKIwBBIGsiDyQAAkACQAJAAkAgBVBFBEAgAiAFVg0DIAIgBVENASAFIAUgAoAiCiACfn0hAyACQoCAgIAQWg0CIARC/////w+DIANCIIYgBEIgiIQiAyADIAKAIgMgAn59QiCGhCIFIAIgBSACgCIFfn0hBCADQiCGIAWEIQYgA0IgiCAKhCEKQgAhAwwECyAEIAQgAoAiBiACfn0hBAwDCyAEIAQgBYAiBiAFfn0hBEIBIQoMAgsgA1AgAiAEVnENASACQgGIIQggAkI/hiEJQoCAgICAgICAgH8hBQNAAkAgAyAIfSAEIAlUrX0iB0IAWQRAIAQgCX0hBCAFIAaEIQYgB1ANASAHIQMLIAhCP4YgCUIBiIQhCSAFQgGIIQUgCEIBiCEIDAELCyAEIAKAIgMgBoQhBiAEIAIgA359IQRCACEDDAELIAIhAwJAQT8gAnmnIhAgBXmnIhRrQUBrIBAgFEYbIhBBwABxRQRAIBBFDQFCACAQQT9xrSIDhiACQQAgEGtBP3GtiIQhByACIAOGIQMMAQsgAyAQQT9xrYYhB0IAIQMLIA8gAzcDACAPIAc3AwhCASAQQT9xrYYhAyAPQQhqKQMAIQggDykDACEJA0ACQCAFIAh9IAQgCVStfSIHQgBZBEAgBCAJfSEEIAMgBoQhBiAHUA0BIAchBQsgCEI/hiAJQgGIhCEJIANCAYghAyAIQgGIIQgMAQsLIAQgAoAiAyAGhCEGIAQgAiADfn0hBEIAIQMLIAwgBDcDECAMIAY3AwAgDEEYaiADNwMAIAwgCjcDCCAPQSBqJAAgDCkDACEDIA1BEGoiDyAMQQhqKQMANwMIIA8gAzcDACAMQSBqJAAgDSANKQMQIgMgEikDACACELABIBMgAzcDACALIA0pAwB9IQUgDkEIayIODQALCyANQSBqIgwgAUEwEL4CGiAMQQRyIQ8gDUEoaiEQIA1ByABqIREgDSgCKCESA0AgECEBIA0oAkgiDiEMIA5BBUkiE0UEQCANKAIkIQwgEiEBCwJAIAxFDQAgDEEDdCABakEIaykDAEIAUg0AIBEhDCATRQRAIA0oAiQhDiAPIQwLIA5FDQEgDCAOQQFrNgIADAELCyAAIA1BIGpBMBC+AiAFNwMwIA1B0ABqJAAPC0Hg+sAAQRlByPrAABDeAQAL1AIBBn8gASACQQF0aiEJIABBgP4DcUEIdiEKIABB/wFxIQwCQAJAAkACQANAIAFBAmohCyAHIAEtAAEiAmohCCAKIAEtAAAiAUcEQCABIApLDQQgCCEHIAsiASAJRw0BDAQLIAcgCEsNASAEIAhJDQIgAyAHaiEBA0AgAkUEQCAIIQcgCyIBIAlHDQIMBQsgAkEBayECIAEtAAAgAUEBaiEBIAxHDQALC0EAIQIMAwsgByAIQeCywAAQugEACyAIIARB4LLAABC4AQALIABB//8DcSEHIAUgBmohA0EBIQIDQCAFQQFqIQACQCAFLQAAIgHAIgRBAE4EQCAAIQUMAQsgACADRwRAIAUtAAEgBEH/AHFBCHRyIQEgBUECaiEFDAELQYCXwgBBK0HQssAAEN4BAAsgByABayIHQQBIDQEgAkEBcyECIAMgBUcNAAsLIAJBAXEL2AIBAX8jAEHwAGsiByQAIAcgAjYCDCAHIAE2AgggByAENgIUIAcgAzYCECAHQQI2AhwgB0H6psAAQfimwAAgAEH/AXEbNgIYAkAgBSgCAEUEQCAHQcwAakEGNgIAIAdBxABqQQY2AgAgB0HkAGpCAzcCACAHQQM2AlwgB0Gsp8AANgJYIAdBBzYCPCAHIAdBOGo2AmAgByAHQRBqNgJIIAcgB0EIajYCQAwBCyAHQTBqIAVBEGopAgA3AwAgB0EoaiAFQQhqKQIANwMAIAcgBSkCADcDICAHQeQAakIENwIAIAdB1ABqQQY2AgAgB0HMAGpBBjYCACAHQcQAakEKNgIAIAdBBDYCXCAHQeCnwAA2AlggB0EHNgI8IAcgB0E4ajYCYCAHIAdBEGo2AlAgByAHQQhqNgJIIAcgB0EgajYCQAsgByAHQRhqNgI4IAdB2ABqIAYQ6wEAC8ICAgd/AX4jAEEgayIDJAAgASACQQxsaiEGAkACfyACRQRAIANBADYCHCADIAI2AhggA0EENgIUIAEhBCACDAELQbixwgAtAAAaIAJBAnQQCiIFRQ0BIANBADYCHCADIAI2AhggAyAFNgIUIAEhBCAGAn8DQCAEQQxqIAQoAgAiCEUNARogCCAEKQIEIgpCIIinEAIhCSAKpwRAIAgQIgsgBSAJNgIAIAVBBGohBSAHQQFqIQcgBEEMaiIEIAZHDQALIAYLIgRrQQxuCyEFIAMgBzYCHCAEIAZHBEADQCAEQQRqKAIABEAgBCgCABAiCyAEQQxqIQQgBUEBayIFDQALCyACBEAgARAiCyADQRBqIANBHGooAgA2AgAgAyADKQIUNwMIIAMgA0EIahC8ASAAIAMpAwA3AwAgA0EgaiQADwsAC9kCAgR/AX4jAEEQayICJAAgAkEANgIEAn8CQAJAIAFBgAFPBEAgAUGAEEkNASABQYCABE8NAiACIAFBP3FBgAFyOgAGIAIgAUEMdkHgAXI6AAQgAiABQQZ2QT9xQYABcjoABUEDDAMLIAIgAToABEEBDAILIAIgAUE/cUGAAXI6AAUgAiABQQZ2QcABcjoABEECDAELIAIgAUE/cUGAAXI6AAcgAiABQQZ2QT9xQYABcjoABiACIAFBDHZBP3FBgAFyOgAFIAIgAUESdkEHcUHwAXI6AARBBAshASACQQhqIAAoAggoAgAgAkEEaiABECsgAi0ACCIEQQRHBEAgACgCBCEBIAIpAwghBiAALQAAIgNBBE0gA0EDR3FFBEAgASgCACIDIAFBBGooAgAiBSgCABEEACAFKAIEBEAgAxAiCyABECILIAAgBjcCAAsgAkEQaiQAIARBBEcL1gIBCn8jAEEQayIEJAAgAAJ/AkACQAJAAkAgASgCBCICIAEoAggiBkEEak8EQCACIAZrIgNBACACIANPGyEIIAEoAgAiCSAGaiEKQQAhAwNAIAMgBmohBSADIAhGDQIgASAFQQFqIgU2AgggAyAKai0AAEGYj8IAai0AACILQf8BRg0DIAdBBHQgC2ohByADQQFqIgNBBEcNAAsgACAHOwECQQAMBQsgASACNgIIIAQgASgCACACIAIQtgFBuLHCAC0AABogBCgCBCEDIAQoAgAhAkEUEAoiAUUNAiABIAI2AgwgAUEENgIADAMLIAUgAkH4jMIAELcBAAsgBEEIaiAJIAIgBRC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCECQRQQCiIBRQ0AIAEgAjYCDCABQQw2AgAMAQsACyAAIAE2AgQgASADNgIQQQELOwEAIARBEGokAAvOAgICfAJ/IwBBEGsiByQAIAO6IQUgAAJ/AkACQAJAAkAgBCAEQR91IghzIAhrIghBtQJPBEADQCAFRAAAAAAAAAAAYQ0FIARBAE4NAiAFRKDI64XzzOF/oyEFIARBtAJqIgQgBEEfdSIIcyAIayIIQbQCSw0ACwsgCEEDdEHI9sEAaisDACEGIARBAE4NASAFIAajIQUMAwsgByABKAIAIAEoAgQgASgCCBC2AUG4scIALQAAGiAHKAIEIQIgBygCACEEDAELIAUgBqIiBZlEAAAAAAAA8H9iDQEgB0EIaiABKAIAIAEoAgQgASgCCBC2AUG4scIALQAAGiAHKAIMIQIgBygCCCEEC0EUEAoiAQRAIAEgBDYCDCABQQ42AgAgACABNgIEIAEgAjYCEEEBDAILAAsgACAFIAWaIAIbOQMIQQALNgIAIAdBEGokAAv/AwEFfyMAQRBrIgMkAAJAAn8CQCABQYABTwRAIANBADYCDCABQYAQSQ0BIAFBgIAESQRAIAMgAUE/cUGAAXI6AA4gAyABQQx2QeABcjoADCADIAFBBnZBP3FBgAFyOgANQQMMAwsgAyABQT9xQYABcjoADyADIAFBBnZBP3FBgAFyOgAOIAMgAUEMdkE/cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhghAwJAAkAgACAAKAIMIgFGBEAgAEEUQRAgAEEUaiIBKAIAIgQbaigCACICDQFBACEBDAILIAAoAggiAiABNgIMIAEgAjYCCAwBCyABIABBEGogBBshBANAIAQhBSACIgFBFGoiAiABQRBqIAIoAgAiAhshBCABQRRBECACG2ooAgAiAg0ACyAFQQA2AgALAkAgA0UNAAJAIAAgACgCHEECdEHUrcIAaiICKAIARwRAIANBEEEUIAMoAhAgAEYbaiABNgIAIAENAQwCCyACIAE2AgAgAQ0AQfCwwgBB8LDCACgCAEF+IAAoAhx3cTYCAA8LIAEgAzYCGCAAKAIQIgIEQCABIAI2AhAgAiABNgIYCyAAQRRqKAIAIgBFDQAgAUEUaiAANgIAIAAgATYCGAsLrwIBBH9BHyECIABCADcCECABQf///wdNBEAgAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+aiECCyAAIAI2AhwgAkECdEHUrcIAaiEEAkBB8LDCACgCACIFQQEgAnQiA3FFBEBB8LDCACADIAVyNgIAIAQgADYCACAAIAQ2AhgMAQsCQAJAIAEgBCgCACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBH3FBACACQR9HG3QhBANAIAMgBEEddkEEcWpBEGoiBSgCACICRQ0CIARBAXQhBCACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBSAANgIAIAAgAzYCGAsgACAANgIMIAAgADYCCAvBAgIEfwF+IwBBQGoiAyQAQQEhBQJAIAAtAAQNACAALQAFIQUCQCAAKAIAIgQoAhwiBkEEcUUEQCAFRQ0BQQEhBSAEKAIUQYXPwABBAiAEQRhqKAIAKAIMEQAARQ0BDAILIAVFBEBBASEFIAQoAhRBuajAAEEBIARBGGooAgAoAgwRAAANAiAEKAIcIQYLQQEhBSADQQE6ABsgA0E0akGQqMAANgIAIAMgBCkCFDcCDCADIANBG2o2AhQgAyAEKQIINwIkIAQpAgAhByADIAY2AjggAyAEKAIQNgIsIAMgBC0AIDoAPCADIAc3AhwgAyADQQxqNgIwIAEgA0EcaiACEQEADQEgAygCMEGyqMAAQQIgAygCNCgCDBEAACEFDAELIAEgBCACEQEAIQULIABBAToABSAAIAU6AAQgA0FAayQAC8QCAgR/AX4jAEFAaiIDJAAgACgCACEFIAACf0EBIAAtAAgNABogACgCBCIEKAIcIgZBBHFFBEBBASAEKAIUQYXPwABBtqjAACAFG0ECQQEgBRsgBEEYaigCACgCDBEAAA0BGiABIAQgAigCDBEBAAwBCyAFRQRAQQEgBCgCFEG3qMAAQQIgBEEYaigCACgCDBEAAA0BGiAEKAIcIQYLIANBAToAGyADQTRqQZCowAA2AgAgAyAEKQIUNwIMIAMgA0EbajYCFCADIAQpAgg3AiQgBCkCACEHIAMgBjYCOCADIAQoAhA2AiwgAyAELQAgOgA8IAMgBzcCHCADIANBDGo2AjBBASABIANBHGogAigCDBEBAA0AGiADKAIwQbKowABBAiADKAI0KAIMEQAACzoACCAAIAVBAWo2AgAgA0FAayQAIAALkgIBAX8jAEEQayICJAAgACgCACEAAn8gASgCACABKAIIcgRAIAJBADYCDCABIAJBDGoCfwJAAkAgAEGAAU8EQCAAQYAQSQ0BIABBgIAETw0CIAIgAEE/cUGAAXI6AA4gAiAAQQx2QeABcjoADCACIABBBnZBP3FBgAFyOgANQQMMAwsgAiAAOgAMQQEMAgsgAiAAQT9xQYABcjoADSACIABBBnZBwAFyOgAMQQIMAQsgAiAAQT9xQYABcjoADyACIABBEnZB8AFyOgAMIAIgAEEGdkE/cUGAAXI6AA4gAiAAQQx2QT9xQYABcjoADUEECxARDAELIAEoAhQgACABQRhqKAIAKAIQEQEACyACQRBqJAALlgIBAn8jAEEQayICJAACQCAAIAJBDGoCfwJAIAFBgAFPBEAgAkEANgIMIAFBgBBJDQEgAUGAgARJBEAgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwDCyACIAFBP3FBgAFyOgAPIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADSACIAFBEnZBB3FB8AFyOgAMQQQMAgsgACgCCCIDIAAoAgRGBEAgACADEIoBIAAoAgghAwsgACADQQFqNgIIIAAoAgAgA2ogAToAAAwCCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgsQ5AELIAJBEGokAEEAC5YCAQJ/IwBBEGsiAiQAAkAgACACQQxqAn8CQCABQYABTwRAIAJBADYCDCABQYAQSQ0BIAFBgIAESQRAIAIgAUE/cUGAAXI6AA4gAiABQQx2QeABcjoADCACIAFBBnZBP3FBgAFyOgANQQMMAwsgAiABQT9xQYABcjoADyACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA0gAiABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAyAAKAIERgRAIAAgAxDhASAAKAIIIQMLIAAgA0EBajYCCCAAKAIAIANqIAE6AAAMAgsgAiABQT9xQYABcjoADSACIAFBBnZBwAFyOgAMQQILEOUBCyACQRBqJABBAAuuAgEFfyMAQdAAayICJAAgACgCACEDIAJBADYCOCACIAM2AkBBfyEAA0AgAEEBaiEAIAJBEGogAkE4ahA2IAIoAhBBAUYNAAsgAkEANgIoIAIgAzYCJCACQQA2AhwgAUEYaigCACEDIAEoAhQhAQNAAkAgAkEIaiACQRxqEDYgAigCCCIFRQ0AIAIoAgwhBiACIAIoAihBAWoiBDYCKCACIAY2AiwgAkEBNgI8IAJB1JfCADYCOCACQgE3AkQgAkEENgI0IAIgAkEwajYCQCACIAJBLGo2AjAgASADIAJBOGoQLw0AIARFIAAgBE1yDQEgAkEBNgI8IAJB1KTAADYCOCACQgA3AkQgAkGMrMIANgJAIAEgAyACQThqEC9FDQELCyACQdAAaiQAIAVBAEcL/wECAn8BfgJAIAJFBEAgAEEAOgABDAELAkACQAJAAkACQCABLQAAQStrDgMAAgECCyACQQFrIgJFDQIgAUEBaiEBDAELIAJBAUYNAQsCQCACQQlPBEADQCACRQ0CIAEtAABBMGsiBEEJSw0DIAOtQgp+IgVCIIinDQQgAUEBaiEBIAJBAWshAiAEIAWnIgRqIgMgBE8NAAsgAEECOgABDAQLA0AgAS0AAEEwayIEQQlLDQIgAUEBaiEBIAQgA0EKbGohAyACQQFrIgINAAsLIAAgAzYCBCAAQQA6AAAPCyAAQQE6AAEMAQsgAEECOgABIABBAToAAA8LIABBAToAAAumAgEDfyMAQTBrIgkkACABBH8gCSACNgIsIAkgAjYCKCAJIAE2AiQgCUEYaiAJQSRqEMQBIAkoAhwhASAJKAIYBUEACyEKIAlBEGogAyAEEDsgCSgCFCEDIAkoAhAhCyAJQQhqIAUgBhA7IAkoAgwhBCAJKAIIIQYgCSAINgIsIAkgCDYCKCAJIAc2AiQgCSAJQSRqEMQBQbixwgAtAAAaIAkoAgQhBSAJKAIAIQdBOBAKIgJFBEAACyACIAE2AjAgAiABNgIsIAIgCjYCKCACIAc2AhwgAiAGNgIQIAIgCzYCBCACQQA2AgAgAiAAQQBHOgA0IAIgBTYCJCACIAU2AiAgAiAENgIYIAIgBDYCFCACIAM2AgwgAiADNgIIIAlBMGokACACC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEEBIAAoAgAiACgCAEECayIDIANBBE8bQQFrDgMBAgMACyABKAIUQZiVwgBBJiABQRhqKAIAKAIMEQAADAMLIAIgADYCDCACQRxqQgE3AgAgAkEBNgIUIAJBzJXCADYCECACQSs2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwwCCyABKAIUQdSVwgBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJBnJbCADYCECACQRU2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEECIAAoAgAiACgCAEEEayIDIANBBE8bQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfiEwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEGAhcEAQRogAUEYaigCACgCDBEAAAwCCyACIAA2AgwgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEvNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAQsgASgCFEGahcEAQRQgAUEYaigCACgCDBEAAAsgAkEwaiQAC7ECAgJ/AX4jAEEgayICJAACQCABLQAAQQJGBEAgAUEQaikDACEEAkACQAJAIAEoAghBAWsOAgECAAsgAAJ/IARCgICAgAhaBEAgAkEBOgAIIAIgBDcDECAAIAJBCGogAkEfakGAgMAAEJwBNgIEQQEMAQsgACAEPgIEQQALNgIADAMLIAACfyAEQoCAgIAIfEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQYCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBgIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQYCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAuqAgICfwF+IwBBIGsiAiQAAkAgAS0AAEECRgRAIAFBEGopAwAhBAJAAkACQCABKAIIQQFrDgIBAgALIAACfyAEQoCAgIAQWgRAIAJBAToACCACIAQ3AxAgACACQQhqIAJBH2pBkIDAABCcATYCBEEBDAELIAAgBD4CBEEACzYCAAwDCyAAAn8gBEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQZCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBkIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQZCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAugAgEBfyMAQTBrIgIkAAJ/AkACQAJAAkAgACgCACIAKAIAQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfSFwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEH8hcEAQScgAUEYaigCACgCDBEAAAwCCyABKAIUQaOGwQBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJB3IbBADYCECACQSw2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC7kCAQF/IwBBEGsiAiQAAn8CQAJAAkACQAJAAkACQAJAIAAtAABBAWsOBwECAwQFBgcACyACIABBBGo2AgggAUHspMAAQQpB9qTAAEEDIAJBCGpB3KTAABCNAQwHCyABKAIUQfmkwABBCSABQRhqKAIAKAIMEQAADAYLIAEoAhRBgqXAAEEHIAFBGGooAgAoAgwRAAAMBQsgAiAAQQFqNgIMIAFBiaXAAEENQczTwABBBiACQQxqQfihwAAQjQEMBAsgASgCFEGWpcAAQQUgAUEYaigCACgCDBEAAAwDCyABKAIUQfqDwQBBBiABQRhqKAIAKAIMEQAADAILIAEoAhRBm6XAAEENIAFBGGooAgAoAgwRAAAMAQsgASgCFEGopcAAQQsgAUEYaigCACgCDBEAAAsgAkEQaiQAC40CAQJ/IwBBEGsiAiQAAkAgACgCACIDLQAARQRAIAEoAhRBsMbAAEEEIAFBGGooAgAoAgwRAAAhAAwBC0EBIQAgAiADQQFqNgIAIAIgASgCFEG0xsAAQQQgAUEYaigCACgCDBEAADoADCACIAE2AgggAkEAOgANIAJBADYCBCACQQRqIAJBvKjAABBiIAItAAwhASgCACIDRQRAIAFBAEchAAwBCyABDQAgAigCCCEBAkAgA0EBRw0AIAItAA1FDQAgAS0AHEEEcQ0AIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANAQsgASgCFEG0nsIAQQEgAUEYaigCACgCDBEAACEACyACQRBqJAAgAAvtAQEFfyMAQeAAayIFJAAgBSACIARqQQFqEHwgBSgCKCIGQQRNBH8gBUEIagUgBSgCBCEGIAUoAggLIAYgASACIAMgBBAGIAVBMGoiASAFQTAQvgIaIAFBBHIhByAFQThqIQggBUHYAGohAyAFKAI4IQEDQCAIIQYgBSgCWCIEIQIgBEEFSSIJRQRAIAEhBiAFKAI0IQILAkAgAkUNACACQQN0IAZqQQhrKQMAQgBSDQAgAyECIAlFBEAgBSgCNCEEIAchAgsgBEUNASACIARBAWs2AgAMAQsLIAAgBUEwakEwEL4CGiAFQeAAaiQAC4ECAQh/IwBBEGsiBCQAIAAoAggiAyAAKAIEIgUgAyAFSxshByAAKAIAIQYCQAJAAkACQANAIAJFBEBBACEDDAULIAMgB0YNASAAIANBAWoiCDYCCCACQQFrIQIgAyAGaiEJIAEtAAAgCCEDIAFBAWohASAJLQAARg0ACyAEQQhqIAYgBSADELYBQbixwgAtAAAaIAQoAgwhASAEKAIIIQJBFBAKIgNFDQEgA0EJNgIADAILIAQgBiAFIAcQtgFBuLHCAC0AABogBCgCBCEBIAQoAgAhAkEUEAoiA0UNACADQQU2AgAMAQsACyADIAI2AgwgAyABNgIQCyAEQRBqJAAgAwvoAQEEfyMAQeAAayIDJAAgASgCKCIFIQQgBUEFTwRAIAEoAgQhBAsCQAJAAn8gAigCKCIGQQVPBEAgBCACKAIETw0CIAIoAgQhBiACKAIIDAELIAQgBk8NASACQQhqCyECIANBADYCMCADQQA2AlggA0EwaiIEIAIgAiAGQQN0ahBDIAAgAyAEQTAQvgIgARAUDAELIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AjAgA0EANgJYIANBMGoiBCABIAEgBUEDdGoQQyAAIAMgBEEwEL4CIAIQFAsgA0HgAGokAAvgAQEHfwJAIAAtAABBBUcNACAAKAIEIgVFDQAgAEEIaigCACEGA0AgBUGMAmohACAFLwGSAyIJQQxsIQdBfyEDAkACQANAIAdFBEAgCSEDDAILIAAoAgghBCAAKAIAIQggA0EBaiEDIAdBDGshByAAQQxqIQBBfyABIAggAiAEIAIgBEkbELwCIgggAiAEayAIGyIEQQBHIARBAEgbIgRBAUYNAAsgBEH/AXFFDQELIAZFBEBBAA8LIAZBAWshBiAFIANBAnRqQZgDaigCACEFDAELCyAFIANBGGxqIQMLIAML9gECAn8CfiMAQRBrIgQkAAJAAkACQAJAAkACQCABKAIIIgUgASgCBEkEQCABKAIAIAVqLQAAIgVBLkYNASAFQcUARiAFQeUARnINAgtCASEGIAJFDQIgAyEHDAQLIAQgASACIANBABA9IAQoAgBFDQIgACAEKAIENgIIIABCAzcDAAwECyAEIAEgAiADQQAQNyAEKAIARQ0BIAAgBCgCBDYCCCAAQgM3AwAMAwtCACEGQgAgA30iB0IAUwRAQgIhBgwCCyADur1CgICAgICAgICAf4UhBwwBCyAEKQMIIQcLIAAgBzcDCCAAIAY3AwALIARBEGokAAvJAQEGfyAAQShqIQQgACgCKCICQQRNBH8gAEEIagUgACgCBCECIAAoAggLIAIgASgCKCIDQQRNBH8gAUEIagUgASgCBCEDIAEoAggLIAMQTCAAQQRqIQUgAEEIaiEDIAAoAgghBgNAIAMhAiAEKAIAIgAhASAAQQVJIgdFBEAgBiECIAUoAgAhAQsCQCABRQ0AIAFBA3QgAmpBCGspAwBCAFINACAEIQEgB0UEQCAFIgEoAgAhAAsgAEUNASABIABBAWs2AgAMAQsLC90BAQF/IwBBMGsiAiQAAn8gACgCACIALQAEBEAgAiAAQQVqLQAAOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkECNgIcIAJB6KzAADYCGCACIAA2AhAgAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAQsgAkEkakIBNwIAIAJBATYCHCACQaStwAA2AhggAkEENgIMIAIgADYCCCABQRhqKAIAIQAgAiACQQhqNgIgIAEoAhQgACACQRhqEC8LIAJBMGokAAvUAQEBfyAAAn8CQAJ/AkACQAJAIAEEQCACQQBIDQECQCADKAIEBEAgA0EIaigCACIERQRAIAJFDQZBuLHCAC0AABogAUEJSQ0CDAULIAMoAgAgBCABIAIQIwwGCyACRQ0EQbixwgAtAAAaIAFBCU8NAwsgAhAKDAQLIABBADYCBCAAQQhqIAI2AgAMBAsgAEEANgIEDAMLIAEgAhBADAELIAELIgMEQCAAIAM2AgQgAEEIaiACNgIAQQAMAgsgACABNgIEIABBCGogAjYCAAtBAQs2AgALvgECBH4CfyABIANPBEACQCADRQ0AIAAgA0EDdGohCCADIQkDQCAAIAQgACkDAHwiBSACKQMAfCIHNwMAIAQgBVatIAUgB1atfCEEIABBCGohACACQQhqIQIgCUEBayIJDQALIARQDQAgAUEDdCADQQN0ayEAA0AgAEUNASAIIAQgCCkDAHwiBTcDACAAQQhrIQAgCEEIaiEIIAYgBCAFVq18IQQgBEIAUg0ACwsPC0GJmMIAQSNB6PXAABDeAQAL2wEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogA0GwjcAAEGIgBEH0iMAAEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvLAQEHfyABBEADQCAAIARBDGxqIgcoAgAhBSAHKAIIIggEQCAFQRRqIQJBACEGA0ACQCACQQxqKAIAIgNFDQAgAkEQaigCAEUNACADECILAkACQAJAAkAgAkEEaygCAA4DAAEDAQsgAkEEaigCAEUNAiAFIAZBLGxqQRRqIQMMAQsgAiEDIAJBBGooAgBFDQELIAMoAgAQIgsgBkEBaiEGIAJBLGohAiAIQQFrIggNAAsLIAcoAgQEQCAFECILIARBAWoiBCABRw0ACwsL2QEBA38jAEEQayICJAAgACgCACEDIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhACACQQA6AAkgAiAAOgAIIAIgATYCBCADKAIoIgRBBE0EfyADQQhqBSADKAIEIQQgAygCCAshASAEBEAgBEEDdCEAA0AgAiABNgIMIAJBBGogAkEMakEqEGEgAUEIaiEBIABBCGsiAA0ACyACLQAIIQALQQEhASAAQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhAQsgAkEQaiQAIAEL0wEBA38jAEEwayIEJAACQAJAIAFBBE0EQCAEQQA2AgAgAQRAIARBCGohAiABIQMDQCACQgA3AwAgAkEIaiECIANBAWsiAw0ACwsgBCABNgIoIAAgBEEwEL4CGgwBCwJAAkACQCABQf////8ASw0AIAFBA3QiAkEASA0AIAINAUEIIQMMAgsQ6gEACyACEAoiA0UNAiADQQRrLQAAQQNxRQ0AIANBACACELsCGgsgACABNgIoIAAgAzYCCCAAIAE2AgQgAEEBNgIACyAEQTBqJAAPCwALzwEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogAyAEEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvbAgEEfyACKAIEIQMgASgCCCEFAkACQAJAAkACQAJAAkACQCACKAIAQQFrDgIBAgALIAMoAgAhBAwBCyADKAIAQQFqIgRFDQELIAJBDGooAgAhBiAFIQMgAigCCEEBaw4CAQMCCyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABBqKvAADYCCCAAQYyswgA2AhAgAEEIakHg5sAAEOsBAAsgBigCACEDDAELIAYoAgBBAWoiA0UNAQsCQCADIARPBEAgAyAFSw0BIAEgBDYCCCAAIAM2AgwgACABNgIIIAAgBSADazYCECAAIAEoAgAiASADajYCBCAAIAEgBGo2AgAPCyAEIANBjN3AABC6AQALIAMgBUGM3cAAELgBAAsjAEEgayIAJAAgAEEUakIANwIAIABBATYCDCAAQdyrwAA2AgggAEGMrMIANgIQIABBCGpB8ObAABDrAQAL3gEBAn8jAEEQayICJAAgAiAAKAIAIgA2AgQgASgCFEH/xcAAQQYgAUEYaigCACgCDBEAACEDIAJBADoADSACIAM6AAwgAiABNgIIIAJBCGpBhcbAAEEEIABBBGpB5L7AABBIQYnGwABBBSACQQRqQZDGwAAQSCEDIAItAAwhAAJ/IABBAEcgAi0ADUUNABpBASAADQAaIAMoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAJBEGokAAvNAQEEfyMAQRBrIgMkAANAAkAgA0EEaiAAEDwgAygCBCIBRQ0AIAEgAygCDCICQQxsaiIEQZACaigCAARAIARBjAJqKAIAECILAkACQAJAIAEgAkEYbGoiAS0AAA4FBAQEAQIACyABQQRqELIBDAMLIAFBCGooAgBFDQIgASgCBBAiDAILIAFBDGooAgAiBARAIAEoAgQhAgNAIAIQtAEgAkEYaiECIARBAWsiBA0ACwsgAUEIaigCAEUNASABKAIEECIMAQsLIANBEGokAAvJAQEEfyMAQSBrIgIkAAJAAkAgAUEBaiIBRQ0AQQQgACgCBCIEQQF0IgMgASABIANJGyIBIAFBBE0bIgNBBHQhASADQYCAgMAASUECdCEFAkAgBEUEQCACQQA2AhgMAQsgAiAAKAIANgIUIAJBBDYCGCACIARBBHQ2AhwLIAJBCGogBSABIAJBFGoQdyACKAIMIQEgAigCCEUEQCAAIAM2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgAkEgaiQAC8kBAQR/IwBBIGsiAiQAAkACQCABQQFqIgFFDQBBBCAAKAIEIgRBAXQiAyABIAEgA0kbIgEgAUEETRsiA0EMbCEBIANBq9Wq1QBJQQJ0IQUCQCAERQRAIAJBADYCGAwBCyACQQQ2AhggAiAEQQxsNgIcIAIgACgCADYCFAsgAkEIaiAFIAEgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALyQECA38BfiMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAAJ/AkACQCABQShqKAIAIgRFBEAgASADNgIADAELIAJBEGogBCABQTBqKAIAENYBIAIpAhQhBSACKAIQIQMgASABKAIAQQFrNgIAIAMNAQtBACEDQQAMAQsgAiAFNwIUIAIgAzYCECACQQhqIAJBEGoQxAEgAigCCCEDIAIoAgwLNgIEIAAgAzYCACACQSBqJAAPCxC1AgALELYCAAvEAQECfyMAQSBrIgQkAAJAIAIgA2oiAyACSQ0AQQggASgCBCICQQF0IgUgAyADIAVJGyIDIANBCE0bIgNBf3NBH3YhBQJAIAJFBEAgBEEANgIYDAELIAQgAjYCHCAEQQE2AhggBCABKAIANgIUCyAEQQhqIAUgAyAEQRRqEHcgBCgCDCEFIAQoAggEQCAEQRBqKAIAIQMMAQsgASADNgIEIAEgBTYCAEGBgICAeCEFCyAAIAM2AgQgACAFNgIAIARBIGokAAvJAQECfyMAQTBrIgIkACAAKAIAIQAgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEtNgIsIAIgAEEIajYCKCABQRhqKAIAIQMgAiACQShqNgIYAn9BASABKAIUIgEgAyACQRBqEC8NABpBACAAKAIARQ0AGiACIAAoAgQ2AgwgAkEcakIBNwIAIAJBATYCFCACQezJwAA2AhAgAkEuNgIsIAIgAkEoajYCGCACIAJBDGo2AiggASADIAJBEGoQLwsgAkEwaiQAC74BAQJ/IwBBIGsiAyQAAkACQCABIAEgAmoiAUsNAEEIIAAoAgQiAkEBdCIEIAEgASAESRsiASABQQhNGyIEQX9zQR92IQECQCACRQRAIANBADYCGAwBCyADIAI2AhwgA0EBNgIYIAMgACgCADYCFAsgA0EIaiABIAQgA0EUahCMASADKAIMIQEgAygCCEUEQCAAIAQ2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgA0EgaiQAC70BAQF/IwBBEGsiCyQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASALQQA6AA0gCyABOgAMIAsgADYCCCALQQhqIAMgBCAFIAYQSCAHIAggCSAKEEghAiALLQAMIQECfyABQQBHIAstAA1FDQAaQQEgAQ0AGiACKAIAIgAtABxBBHFFBEAgACgCFEG0qMAAQQIgACgCGCgCDBEAAAwBCyAAKAIUQdzswABBASAAKAIYKAIMEQAACyALQRBqJAAL0QIBA38jAEEgayIDJAACQAJAIAEgASACaiICSw0AQQggACgCBCIEQQF0IgEgAiABIAJLGyIBIAFBCE0bIgFBf3NBH3YhBQJAIARFBEAgA0EANgIYDAELIAMgBDYCHCADQQE2AhggAyAAKAIANgIUCyADQRRqIQQgA0EIaiICAn8CQCAFBEAgAUEASA0BAn8gBCgCBARAIARBCGooAgAiBQRAIAQoAgAgBUEBIAEQIwwCCwtBuLHCAC0AABogARAKCyIEBEAgAiAENgIEIAJBCGogATYCAEEADAMLIAJBATYCBCACQQhqIAE2AgBBAQwCCyACQQA2AgQgAkEIaiABNgIAQQEMAQsgAkEANgIEQQELNgIAIAMoAgwhAiADKAIIRQRAIAAgATYCBCAAIAI2AgAMAgsgAkGBgICAeEYNASACRQ0AAAsQ6gEACyADQSBqJAALuwEBBn8gACgCDCIBIAAoAggiBGtBGG4hBiABIARHBEADQAJAAkACQAJAIAQgAkEYbGoiAS0AAA4FAwMDAQIACyABQQRqELIBDAILIAFBCGooAgBFDQEgASgCBBAiDAELIAFBDGooAgAiBQRAIAEoAgQhAwNAIAMQtAEgA0EYaiEDIAVBAWsiBQ0ACwsgAUEIaigCAEUNACABKAIEECILIAJBAWoiAiAGRw0ACwsgACgCBARAIAAoAgAQIgsLuwEBA38jAEEgayICJAACQAJAIAFBAWoiAUUNAEEIIAAoAgQiBEEBdCIDIAEgASADSRsiASABQQhNGyIDQX9zQR92IQECQCAERQRAIAJBADYCGAwBCyACIAQ2AhwgAkEBNgIYIAIgACgCADYCFAsgAkEIaiABIAMgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALxwEBAX8CQCAFIAFBAWtGBEAgAC8BkgMiAUELTw0BIAAgAUEBaiIFOwGSAyAAIAFBDGxqIgZBlAJqIAJBCGooAgA2AgAgBkGMAmogAikCADcCACAAIAFBGGxqIgEgAykDADcDACABQQhqIANBCGopAwA3AwAgAUEQaiADQRBqKQMANwMAIAAgBUECdGpBmANqIAQ2AgAgBCAFOwGQAyAEIAA2AogCDwtB3OjBAEEwQYzpwQAQ3gEAC0HQ58EAQSBBnOnBABDeAQALngEAAkACQCABBEAgAkEASA0BAn8gAygCBARAAkAgA0EIaigCACIBRQRADAELIAMoAgAgAUEBIAIQIwwCCwtBuLHCAC0AABogAhAKCyIBBEAgACABNgIEIABBCGogAjYCACAAQQA2AgAPCyAAQQE2AgQMAgsgAEEANgIEDAELIABBADYCBCAAQQE2AgAPCyAAQQhqIAI2AgAgAEEBNgIAC7MBAQF/IwBBEGsiByQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASAHQQA6AA0gByABOgAMIAcgADYCCCAHQQhqIAMgBCAFIAYQSCECIActAAwhAQJ/IAFBAEcgBy0ADUUNABpBASABDQAaIAIoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAdBEGokAAvkAQACQAJAAkACQAJAAkACQCAALQAAQQFrDgYBAgMEBQYACyABKAIUQZiEwABBIiABQRhqKAIAKAIMEQAADwsgASgCFEG6hMAAQR0gAUEYaigCACgCDBEAAA8LIAEoAhRB14TAAEEgIAFBGGooAgAoAgwRAAAPCyABKAIUQfeEwABBHSABQRhqKAIAKAIMEQAADwsgASgCFEGUhcAAQRcgAUEYaigCACgCDBEAAA8LIAEoAhRBq4XAAEEqIAFBGGooAgAoAgwRAAAPCyABKAIUQdWFwABBICABQRhqKAIAKAIMEQAAC7cBAQR/IwBBEGsiAiQAIAAoAgghAyAAKAIAIQBBASEEIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhBSACQQA6AAkgAiAFOgAIIAIgATYCBCADBH8DQCACIAA2AgwgAkEEaiACQQxqQQgQYSAAQQFqIQAgA0EBayIDDQALIAItAAgFIAULQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhBAsgAkEQaiQAIAQLqwEBBn8jAEEgayIDJAAgA0EIaiACENUBIAMoAgghBgJAIAMoAgwiB0UNACACQQxsIQUgBiEEIAchCANAIAVFDQEgA0EQaiABKAIAIAFBCGooAgAQ1gEgBEEIaiADQRhqKAIANgIAIAQgAykDEDcCACAFQQxrIQUgBEEMaiEEIAFBDGohASAIQQFrIggNAAsLIAAgAjYCCCAAIAc2AgQgACAGNgIAIANBIGokAAuzAQEEfyAAKAIEIQEgAEGMrMIANgIEIAAoAgAhAyAAQYyswgA2AgAgACgCECECAkACQCABIANGBEAgAkUNAiAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0BIAEoAgAiASAAaiABIARqIAIQvQIMAQsgAkUNASAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0AIAEoAgAiASAAaiABIARqIAIQvQILIAMgACACajYCAAsLnQEBBX8gACACKAIAIAEoAgwiAyABKAIIIgQgASgCBCIFc3MgASgCACIBQQV3amoiBkEedyIHNgIMIAAgAigCBCADIAQgASAFQR53IgVzc2pqIAZBBXdqIgNBHnc2AgggACAEIAIoAghqIAUgAUEedyIBcyAGc2ogA0EFd2oiBDYCBCAAIAIoAgwgBWogASAHcyADc2ogBEEFd2o2AgALmwEBA38jAEEQayIFJAACQCABKAIoIgNBBUkEQCADIQRBBCEDDAELIAEoAgQhBAsCf0GBgICAeCACIAMgBGtNDQAaQQAgBCACIARqIgNLDQAaQQBBfyADQQFrZ3ZBACADQQJPG0EBaiIDRQ0AGiAFQQhqIAEgAxBBIAUoAgwhAyAFKAIICyEEIAAgAzYCBCAAIAQ2AgAgBUEQaiQAC6QBAQJ/AkAgAEGQA28iA0EfdUGQA3EgA2oiA0GQA0kEQAJAIAFBDEsgAkEfS3IgAEH//w9rQYKAYElyDQAgA0Gcl8AAai0AACACQQR0IAFBCXRyciIBQQN2IQIgAUGANE8NAiACQaibwABqLAAAIgJFDQAgASACQQN0ayAAQQ10ciEECyAEDwsgA0GQA0GYm8AAELcBAAsgAkHABkHoocAAELcBAAuhAQEKfwJAIAAEQCAAKAIADQEgAEEANgIAIAAoAgQhASAAKAIIIAAoAgwhBSAAKAIQIQIgACgCFCEGIAAoAhghByAAKAIcIQggACgCICEJIAAoAighAyAAKAIsIQogABAiIANFIApFckUEQCADECILIAEgBRDtAQRAIAEQIgsgAiAHEO0BIAYEQCACECILIAkEQCAIECILDwsQtQIACxC2AgALwAEBAn8jAEEQayICJAACfwJAAkACQAJAQQEgACgCACIAKAIAQQJrIgMgA0EETxtBAWsOAwECAwALIAEoAhRBpJbCAEEaIAFBGGooAgAoAgwRAAAMAwsgAiAANgIIIAFBvpbCAEEEIAJBCGpBxJbCABB9DAILIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAQsgAiAAQQRqNgIMIAFB4JbCAEEKQeqWwgBBAyACQQxqQfCWwgAQjQELIAJBEGokAAuUAQECfyAAQQBOBH8gAAUgAUEtOgAAIAFBAWohAUEAIABrCyICQeMATARAIAJBCUwEQCABIAJBMGo6AAAgAEEfdkEBag8LIAEgAkEBdEH6icIAai8AADsAACAAQR92QQJyDwsgASACQeQAbiIDQTBqOgAAIAEgAiADQeQAbGtBAXRB+onCAGovAAA7AAEgAEEfdkEDagu4AQECfyMAQRBrIgIkAAJ/AkACQAJAAkBBAiAAKAIAIgAoAgBBBGsiAyADQQRPG0EBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpBsIXBABB9DAMLIAEoAhRBwIXBAEEGIAFBGGooAgAoAgwRAAAMAgsgAiAANgIMIAFB8JDBAEEFIAJBDGpByIXBABB9DAELIAEoAhRB2IXBAEEHIAFBGGooAgAoAgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2AgAgACABNgIEIAJBIGokAA8LELUCAAsQtgIAC5MBAQJ/IwBBEGsiAiQAAkACQCAAKAIoIgFBBU8EfyAAKAIEBSABC0EBaiIBRQ0AQX8gAUEBa2d2QQAgAUECTxtBAWoiAUUNACACQQhqIAAgARBBIAIoAggiAEGBgICAeEcEQCAARQ0CAAsgAkEQaiQADwtB7PDAAEERQZDxwAAQ0QEAC0Hs8MAAQRFBgPHAABDeAQALlgEBA38jAEEQayICJAACQCAAAn8gASgCCCIDIAEoAgQiBE8EQCACQQhqIAEoAgAgBCADELYBQbixwgAtAAAaIAIoAgwhAyACKAIIIQRBFBAKIgFFDQIgASAENgIMIAFBBDYCACAAIAE2AgQgASADNgIQQQEMAQsgACABKAIAIANqLQAAOgABQQALOgAAIAJBEGokAA8LAAuLAQEFfyMAQYABayIEJAAgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLBEAgA0GAAUHoqMAAELkBAAsgAUEBQfiowABBAiAFQYABIANrEDAgBEGAAWokAAunAQMCfwF8AX4jAEEgayICJAACQAJAAkACQCABKAIAQQFrDgIBAgALIAErAwgiBJlEAAAAAAAA8H9jBEAgAkEAOgAIIAJBCGoQtAFBAiEDCyAAIAQ5AxAgAEICNwMIIAAgAzoAAAwCCyAAQgA3AwggAEECOgAAIAAgASkDCDcDEAwBCyAAQQI6AAAgACABKQMIIgU3AxAgACAFQj+INwMICyACQSBqJAALjgEBAX8jAEEwayICJAAgACgCACEAIAJBDGpCAjcCACACQSRqQQ42AgAgAiAAKAIAIgA2AiggAkEDNgIEIAJBvKXAADYCACACQQ82AhwgAiAAaDYCLCABQRhqKAIAIQAgAiACQRhqNgIIIAIgAkEsajYCICACIAJBKGo2AhggASgCFCAAIAIQLyACQTBqJAALiwECA38BfiMAQRBrIgMkACADQQhqIAAoAggoAgAgASACECsgAy0ACCICQQRHBEAgACgCBCEBIAMpAwghBiAALQAAIgRBBE0gBEEDR3FFBEAgASgCACIEIAFBBGooAgAiBSgCABEEACAFKAIEBEAgBBAiCyABECILIAAgBjcCAAsgA0EQaiQAIAJBBEcLfgEFfyMAQYABayIEJABB/wAhAgNAIAQgAiIDaiIFQTBBNyAAQQ9xIgJBCkkbIAJqOgAAIANBAWshAiAAQRBJIABBBHYhAEUNAAsgA0GAAUsEQCADQYABQeiowAAQuQEACyABQQFB+KjAAEECIAVBgAEgA2sQMCAEQYABaiQAC38BBX8jAEGAAWsiBCQAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABBEEkgAEEEdiEARQ0ACyADQYABSwRAIANBgAFB6KjAABC5AQALIAFBAUH4qMAAQQIgBUGAASADaxAwIARBgAFqJAALfAIBfwJ+AkACfwJAIAEgA0kNACABIANLDQIgA0EDdCEEIAJBCGshAiABQQN0IQMgAEEIayEAA0BBACADRSAERXINAhogACADaikDACIFIAIgBGopAwAiBlQNASAEQQhrIQQgA0EIayEDIAUgBlgNAAsMAgtB/wELDwtBAQuKAQEBfyABKAIQIgRFBEBB4OLAAEEZQcziwAAQ3gEACyAAQQA2AhwgACACNgIUIAAgASkCADcCACAAQRhqIAM2AgAgAEEIaiABQQhqKQIANwIAIABBEGogAUEQaigCADYCACAAIAFBDGooAgAgBG4iATYCJCAAIAEgAyACa0ECdiIAIAAgAUsbNgIgC5UBAQJ/IwBBIGsiASQAAkACQAJAAkAgAC0AEA4EAQMAAgALIAFBEGpCADcCACABQQE2AgggAUHQ6MAANgIEIAEgAUEcajYCDCABQQRqQbjpwAAQ6wEACyAAKAIAIgIgACgCCBB6IAAoAgRFDQEgAhAiDAELIAAoAgAiAiAAKAIIEHogACgCBEUNACACECILIAFBIGokAAt+AQF/IwBBQGoiAiQAIAJBvN3AADYCFCACIAE2AhAgAiAANgIMIAJBJGpCAjcCACACQTxqQQE2AgAgAkECNgIcIAJB5IHAADYCGCACQQQ2AjQgAiACQTBqNgIgIAIgAkEQajYCOCACIAJBDGo2AjAgAkEYahCZASACQUBrJAALfgECfyMAQTBrIgIkAAJAIAEoAgBBAkYEQAJ/IAEoAgQiASgCKCIDQQRNBEAgAUEIagwBCyABKAIEIQMgASgCCAshASACQQA2AgAgAkEANgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const o = Zs();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await js(await i, o);
  return Vs(t, e);
}
(function(i, o) {
  function t(I, a, r, B, C) {
    return EA(a - 480, B);
  }
  function e(I, a, r, B, C) {
    return EA(C - 875, I);
  }
  const A = i();
  function g(I, a, r, B, C) {
    return EA(I - 886, B);
  }
  function n(I, a, r, B, C) {
    return EA(a - 107, I);
  }
  for (; ; )
    try {
      if (parseInt(g(1092, 1079, 1106, "U7]k", 1099)) / 1 + parseInt(g(1134, 1150, 1125, "KaU%", 1156)) / 2 + -parseInt(t(684, 699, 709, "5F0F", 719)) / 3 * (-parseInt(e("G76D", 1092, 1089, 1073, 1098)) / 4) + parseInt(n("Wg@S", 312, 313, 310, 337)) / 5 + -parseInt(n("vq&h", 332, 307, 353, 329)) / 6 * (parseInt(n("8BjP", 352, 357, 340, 344)) / 7) + -parseInt(n("T0$L", 310, 300, 293, 287)) / 8 + -parseInt(e("jQbu", 1115, 1135, 1126, 1117)) / 9 * (parseInt(n("CusK", 331, 324, 319, 310)) / 10) === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ei, 7 * 83374 + -1 * -518611 + -553256);
function k0(i, o, t, e, A) {
  return EA(A - 632, t);
}
function ei() {
  const i = ["WOBdTrhcKCohW5H3W5DpDmoaWP0n", "eSoUzJZdKa", "WRBcMY1VwW", "v0DdW5RcPq", "W6ZcM8o3W7ZdLq", "W4HfDYNcSq", "cmosDq4P", "CsFdLL/dOq", "tSomjSkLW7G", "tXBcPZuO", "W7VcNdz0fa", "yCkya8oP", "W77cP8o2WQzK", "bSk8W6tdVmofnNJcMSo5WQ0GW6pcNG", "u8o5zZBdNq", "sGdcKsC+", "emk2WRCkWRTSWQHjC2Tftq", "D1WhamoHW5BcHa", "bXeVW5f9", "mSkhW6rBWRO", "WQqrmSoSumopsq", "WOOLWOFdSufACq", "vXVdId3cKfiyASkNkNHtACoB", "qWvbW59axSoCFCoCWQfeg8k+", "WPNdImoCWRpcO8oZWQ3cIxdcRCo8vmkj", "ceVcJghdIa", "F8k6qqK", "WO3cUKtdPMJdHSk+WRjv", "W5ZcMmkfW7tcQW", "BSklWObDnblcMCkKhsyAeW", "xmojDmoOW6e", "oSoVWOZdU1/dHNSMpSkhdSoUW40", "gKddV396WQ5NvYVcH8kayW", "W58pWRddOMS", "AI/dN1FdJa", "FCozfCoOWQO", "WR0Oov9g", "WO8OW6v3WQW9uM4HtSkOnG", "WRBcMYn0fW", "vgDzW5RcSa", "yWfMWQhcJJldUmkcWQqOka", "W5ddOGldPea", "g1CuWO8d", "W50pWR7dRM4", "rmoVW7fzWQK", "bY45WRrJp8ozWPOv", "WOFcIgxdG8kuWOik", "WOxcUMRdUGy", "o8ouW44oyG", "lNRcNa7cTuy1W4lcVv4p", "W4FcJJ5jg8kSWOj+ECkjWRVcOSkWtW"];
  return ei = function() {
    return i;
  }, ei();
}
function ue(i, o, t, e, A) {
  return EA(i - -56, o);
}
function G0(i, o, t, e, A) {
  return EA(e - 895, A);
}
function EA(i, o) {
  const t = ei();
  return EA = function(e, A) {
    e = e - (-6356 + -5 * -1182 + -12 * -54);
    let g = t[e];
    if (EA.MvDQmy === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      EA.rjPlHN = B, i = arguments, EA.MvDQmy = !0;
    }
    const I = t[2828 + 9 * -30 + -2558], a = e + I, r = i[a];
    return r ? g = r : (EA.KMUVbp === void 0 && (EA.KMUVbp = !0), g = EA.rjPlHN(g, A), i[a] = g), g;
  }, EA(i, o);
}
function N0(i, o, t, e, A) {
  return EA(i - -452, A);
}
function _s(i, o, t, e, A) {
  return EA(t - -220, o);
}
var z0;
class Xs {
  constructor() {
    D(this, z0, !1);
  }
  async [(z0 = ue(154, "S((T") + ue(161, "o#4O") + ue(165, "Tca&"), ue(195, "l5wb"))](o) {
    function t(I, a, r, B, C) {
      return k0(I - 104, a - 441, I, B - 333, a - -429);
    }
    function e(I, a, r, B, C) {
      return ue(C - 450, r);
    }
    function A(I, a, r, B, C) {
      return k0(I - 214, a - 451, a, B - 448, B - -1322);
    }
    function g(I, a, r, B, C) {
      return G0(I - 367, a - 437, r - 318, C - -690, B);
    }
    function n(I, a, r, B, C) {
      return ue(B - 859, I);
    }
    try {
      const I = o + (t("WUjZ", 433, 433, 431, 419) + "/") + h0;
      await ka(I), this[t("3j2i", 432, 435, 426, 414) + g(446, 432, 478, "UPE*", 455) + g(400, 415, 416, "o#4O", 412)] = !0;
    } catch {
      this[e(589, 574, "mA[M", 572, 598) + A(-482, "2([0", -472, -462) + g(447, 444, 439, "G76D", 437)] = !1, console[A(-442, "WgxK", -439, -454)](h0 + (g(469, 428, 441, "ropF", 448) + g(415, 432, 406, "KaU%", 421) + A(-458, "RO23", -464, -451) + A(-463, "xN)U", -486, -478) + e(633, 611, "mA[M", 642, 627) + g(448, 419, 463, "U7]k", 439) + n("RO23", 1026, 1042, 1029) + t("WgxK", 412, 434, 425) + t("UAWh", 405, 381, 416) + e(621, 622, "JVKS", 627, 625) + g(426, 414, 415, "xN)U", 432) + A(-498, "KCyM", -487, -472) + t("ikc1", 440, 434, 434) + t("xN)U", 438, 421, 417) + "n."));
    }
  }
  [_s(32, "U7]k", 20) + G0(1129, 1082, 1124, 1108, "2([0") + N0(-208, -230, -203, -207, "0$5v") + "ed"]() {
    function o(e, A, g, n, I) {
      return ue(I - -636, A);
    }
    function t(e, A, g, n, I) {
      return N0(e - 1042, A - 17, g - 186, n - 242, A);
    }
    return this[t(798, "G76D", 802, 790) + o(-477, "ePCS", -459, -455, -477) + t(812, "T0$L", 791, 803)];
  }
}
class zi extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function $i(i, o, t, e, A) {
  return $(t - 882, A);
}
function ut(i, o, t, e, A) {
  return $(t - 650, A);
}
function ht(i, o, t, e, A) {
  return $(o - 760, A);
}
function F0(i, o, t, e, A) {
  return $(o - -397, A);
}
function he(i, o, t, e, A) {
  return $(e - -334, o);
}
function $(i, o) {
  var t = ti();
  return $ = function(e, A) {
    e = e - (4091 * 1 + -7307 * 1 + 3619);
    var g = t[e];
    if ($.Hmnxer === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = Q.length; m < R; m++)
          E += "%" + ("00" + Q.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var Q = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      $.EKposG = I, i = arguments, $.Hmnxer = !0;
    }
    var a = t[3521 * -1 + 1111 * 1 + 2410], r = e + a, B = i[r];
    return B ? g = B : ($.kOABYh === void 0 && ($.kOABYh = !0), g = $.EKposG(g, A), i[r] = g), g;
  }, $(i, o);
}
(function(i, o) {
  function t(a, r, B, C, x) {
    return $(C - 421, B);
  }
  function e(a, r, B, C, x) {
    return $(x - -191, r);
  }
  function A(a, r, B, C, x) {
    return $(x - 21, C);
  }
  function g(a, r, B, C, x) {
    return $(C - 34, B);
  }
  for (var n = i(); ; )
    try {
      var I = parseInt(t(841, 829, "vr3j", 835, 815)) / 1 + -parseInt(t(859, 867, "!^oN", 884, 916)) / 2 * (-parseInt(e(253, "8Azz", 226, 207, 238)) / 3) + -parseInt(g(487, 489, ")]f#", 468, 478)) / 4 * (parseInt(A(424, 413, 426, "aE!R", 438)) / 5) + parseInt(A(429, 476, 460, "u()s", 460)) / 6 + -parseInt(g(479, 455, "wrMB", 450, 445)) / 7 * (-parseInt(e(208, "4dZo", 249, 246, 236)) / 8) + parseInt(g(470, 494, "Buq5", 492, 479)) / 9 * (parseInt(t(869, 863, "H&p$", 876, 873)) / 10) + -parseInt(t(841, 834, "uYst", 828, 809)) / 11;
      if (I === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ti, 176924 * -1 + 55844 * 1 + 372356);
var ze, Kt;
class S0 {
  constructor(o) {
    L(this, ze);
    L(this, Kt);
    this[g("mi^$", 376, 390) + e("dgY(", 497, 505, 502, 484)] = o;
    function t(n, I, a, r, B) {
      return $(I - 433, a);
    }
    function e(n, I, a, r, B) {
      return $(B - 64, n);
    }
    function A(n, I, a, r, B) {
      return $(B - -358, a);
    }
    function g(n, I, a, r, B) {
      return $(a - -51, n);
    }
    try {
      v(this, ze, o[t(859, 878, "!w9r", 909, 856) + e("4dZo", 503, 512, 535, 514) + e("0MSG", 516, 554, 518, 525)] && JSON[A(35, 74, "$O&F", 65, 51)](o[A(48, 44, "u()s", 44, 50) + e("YtPL", 495, 486, 454, 469) + A(106, 90, "sNw4", 90, 80)])), v(this, Kt, o[g("ebuW", 425, 415, 427, 436) + g("VZ@G", 369, 397, 424, 386)]);
    } catch (n) {
      console[A(74, 87, "IU5[", 39, 63)](n);
    }
  }
  get [he(109, "xA1y", 123, 101) + "id"]() {
    function o(e, A, g, n, I) {
      return he(e - 21, g, g - 446, A - 872);
    }
    function t(e, A, g, n, I) {
      return he(e - 498, A, g - 196, I - 646);
    }
    return this[o(993, 969, "YcFI") + o(974, 992, "B9[T")][t(775, "xbbo", 770, 778, 758) + o(985, 971, "B9[T")];
  }
  get [ut(1038, 1051, 1060, 1060, "u3*s") + "s"]() {
    function o(e, A, g, n, I) {
      return he(e - 13, g, g - 210, n - 293);
    }
    function t(e, A, g, n, I) {
      return he(e - 482, n, g - 73, g - 290);
    }
    return this[o(344, 385, "P^5E", 377) + o(445, 449, "HIjk", 416)][t(400, 379, 407, ")]f#") + "s"];
  }
  get [F0(28, 6, -12, 18, "rQJq") + he(108, "vr3j", 81, 108)]() {
    function o(A, g, n, I, a) {
      return $i(A - 411, g - 0, A - -1814, I - 378, g);
    }
    function t(A, g, n, I, a) {
      return ut(A - 320, g - 31, g - -324, I - 498, a);
    }
    function e(A, g, n, I, a) {
      return $i(A - 341, g - 95, n - -47, I - 470, a);
    }
    return this[t(758, 778, 779, 754, "ebuW") + e(1207, 1229, 1239, 1251, "UB$G")][o(-521, "Buq5", -518, -490) + t(741, 741, 745, 732, "fkE%")];
  }
  get [ht(1171, 1183, 1200, 1200, ")]f#") + "b"]() {
    return p(this, ze);
  }
  get [ut(1112, 1128, 1110, 1103, "MFJB") + he(98, "mi^$", 106, 103)]() {
    return p(this, Kt);
  }
  get [F0(29, 56, 49, 69, "qz4R") + $i(1265, 1274, 1294, 1324, "g4GR") + ut(1060, 1052, 1074, 1081, "mi^$") + ht(1224, 1209, 1228, 1205, "4t#&")]() {
    var g, n;
    function o(I, a, r, B, C) {
      return ht(I - 271, a - -506, r - 77, B - 387, B);
    }
    function t(I, a, r, B, C) {
      return ht(I - 146, r - -1413, r - 138, B - 119, C);
    }
    function e(I, a, r, B, C) {
      return ut(I - 254, a - 376, C - -161, B - 491, r);
    }
    function A(I, a, r, B, C) {
      return ht(I - 46, C - -1131, r - 7, B - 289, r);
    }
    return !!((n = (g = p(this, ze)) == null ? void 0 : g[e(915, 863, "MFJB", 907, 895) + o(691, 716, 683, "vr3j")]) != null && n[o(720, 697, 685, "wrMB") + o(730, 719, 738, "b)ZI") + e(920, 917, "g4GR", 947, 915) + e(945, 924, "xA1y", 918, 936) + t(-236, -215, -228, -226, "b)ZI") + A(70, 43, ")]f#", 25, 42) + o(646, 676, 690, "MFJB") + "d"]);
  }
}
ze = new WeakMap(), Kt = new WeakMap();
function ti() {
  var i = ["jKKDWOVdQa", "i8ozW69WWPtcISoXWQH+", "pmkJWRjBirRdOrTWWP/cQSkPFG", "WQtdONRcQmk+WQfPma", "WP9hj8kjW5jRC8oq", "W7pcMMjnW7G", "W5xcSCoelfPQWPKWv07cSW", "WOhdH8ka", "W7HYWRFdKhFcMGtcVG", "W4xdMY0kea", "W40LWQqLufZcOJtcLdyiWQCNW78", "WQRdPti", "eN7cIG", "W7VcNSkjf17cHbZdMIZdNYa", "W7dcShtcTcrQaCknW5dcJa", "WQtdSI/dSJy", "k8kgW7u", "ACkybgWy", "WQqbW7tdQSo8aCoX", "WRORWR19yW", "WO1AWQ14cG", "W5JdGrqflG", "WQRdS1e", "ec59Bq", "ymkmWQHTWPO", "WQqYWQZdMue", "gmk+W6XBtW", "AmkkWPJdN8ki", "WOxdJ8kqW5NcHq", "vCkRxSoYWP7cI3DNW5ddNcFdHmo3", "WPjabmkBW7L/DSo6", "WQRdMvfHW7S", "W4veW6r1gZpdPG", "W5FcTcNdSSkSW5nMWOvaW4Ow", "vfjloq4", "h23cHW", "n8keW7u", "WP9fvCoiWO9huSoOWOBdTSoH", "lvRcS8keoCk4WRvvsSoQmCki", "i8oVW7ddMhe", "gmk5W7bCuW", "W5BcSSockf8qWPejAL3cH8k8", "WRxcHSoGW4NcOW", "WOVdOMxcPmo2", "W68WW7hdNCoK", "uujzorq", "W6JdUb3dRqXEEeJdS8kyuZSJWPq", "WQZdI8oAvbK", "FmokW4/cGGS", "kSkEWO7dHNC", "WOTXW6bZaa", "k14AWOpdQa", "WQGUWRNdSLO", "CCotWRFdHSkXfSkeW5FcVJ3dKSoZ", "g8otFW", "kCooutn7WQCBw8oSFG3dQq", "smokW6RcNCkbWPvmW5pdKCou", "A8oOW64yyq", "cmkDrmoxW7H1AdddJq", "vCocauua", "E2Ltbq", "rezAiqq", "WQuVWQRdOvy", "WRtdHcNdSIq", "l8oYW7RdVNC"];
  return ti = function() {
    return i;
  }, ti();
}
function TA(i, o, t, e, A) {
  return eA(o - -2, e);
}
function oi() {
  const i = ["W5WLW7e", "WRpdISk4WPbz", "W4JdMSk7w8kB", "WR88WOZcHq", "eSo8uCo7", "W6pdNSk+WOTd", "W6bpW5tdTCkU", "mCoYgmoruW", "W5ddQmk2WQ98", "wmkbfgBdNW", "W4HKzfpcIG", "WPtcHeqGfmoruKlcMSoAWOpcU8kF", "ANdcG8oCxG", "W5m2W6FcGCkF", "zsfGfCkp", "q8oQFd3dJW", "W5BdO8ktW5qk", "WOJdS3ddK8kh", "WOKodSo/WRG", "wW18gCkc", "mXTLddO", "x8oVq8kh", "W7FcUwPlea", "hx3cKSkKW4vlBq", "WQ7dVstdTmkG", "rCkDcKNdJG", "jev1WR99", "WQeZWPJcHfi", "W6voEZdcQq", "WQZdKcz3qq", "r8k3yW", "W5hcN0ix", "vx1yaq4Ntx0", "FwFcNSoXxW", "WQH/lq", "WRO7WONcJ1u", "WQRcQmkluJ0", "sZ7cQ8khW7q", "WQH5kCkMjG", "WQCfiSkjW6e", "WPuWWRG", "W6RcP8k+dCoN", "xCkof0tdKG", "rfRdJCoeW5C", "hCoAoYJcRq", "WQOlx8k8W4e", "g8kXAmoxAW", "WQyhm8keW7O", "W6BdM8klCmkf", "uMVdIa", "v8o0rq", "zXHega", "WOldT2ddLmkk", "qanFoCkL", "W4nZjmklDW", "iCkLW5ddJSoj", "WOqvfCoLWQO", "aJtcMmkPWOFdTmkKFmoJiavs", "W6NdGmkhzSky", "W5aaW4ZdMCkG", "WQb1lSoT", "WOWzfCoVWQm", "W4/dGmkAESkz", "twRcG8o/WQy", "eCo0tmo8Fq", "WRu3WOtcMv4", "W50CW6FdQSkS", "WPu2WRZcQri", "W5tcK0ONnq", "vMPVW7OS", "WRRdOveErW", "W6tdGCkno8kh", "W4lcP8oSdmoj", "W6FcM1ClW6q", "WRRdP1eAxq", "xMFdHmoY", "W6RcHCkkmSo+", "W7DfW6HVjmkMtSoZWPqufeW", "yhhdPCkSW48", "W5NdOSkSW4Kg", "W5JcG8kKo8om", "tSkPdmkJlSoWWQz5W5NdKKG", "v8ocz8k5WOa", "u8kiBghcUq", "sCkQkCkleq", "W5/dS8k6WRLH", "W6tcJeqqW6m", "WONdVwO", "W4PIDa", "WO/cNcC", "W7uKFSo1ESo/W6WPBNJdJa", "WQFcMZrYW5y", "Fg3cMmo3sW", "W5VdU8kTWR9N", "W4dcUCkik8oJ", "uHDdfCob", "fIjn", "WQbiymoqW5JcNWq", "WQ3cNtT5W5y", "W6eNW7JcHMS", "WR8XWO/cHeG", "W4FdMarXDq", "n2TsW7ir", "dmoSt8oGvW", "WRq3WO7cJL4", "WO8+WRpcPrG", "WPCAvCkIW4S", "uLtdISozW5y", "WRxdUL0iwG", "WQ98kmkBDW", "eZhdKCkQW7f7wmkScYi2kee", "q3zZW6LL", "W5ldG8kxWO5w", "eKHQWOe4", "W5ldVSk5C8kC", "ExdcHCobwq", "WPhdNCkIWOTb", "WRz1oCkCiG", "FSkbjvZdPG", "WQxdISk0WPS", "WRRdP1u+wW", "lmkijs7cVa", "W5ddUmktW4u1", "xCk2A8ow", "W77cJwufh0VdImoqWRPRF8oC", "WQWwoCkzW7O", "W4akW4ddQa", "WRaCsW", "WOZdVwxdLmkJ", "WPeZiuxdMSo8WPmeWQ3dUgvc", "EtjGkmkv", "WOBcTmkCeYm", "W71wz8oAWRaiW4ldGdj0W7OcWQ0", "WQRdGtPa", "WPZcTCkx", "W5fAcCoGWPpdO8k6eu1UaxJdHa", "twZcQSkBW7m", "fuTZWRW5", "WPa+WRpcPqy", "iaVcQMq", "oJ5/uCkc", "W74RW6hcQmky", "eff1WQyY", "WPCAu8k6W5y", "fc0WWRLXWQNcHGmZWQ3cVtvI", "sWOwAYK", "W57dV8kR", "Btq5xc0", "CMpcNSorqG", "W6FcM0iCW7K", "m8kvW4/dTmof", "pJ5LBSko", "rwPVW782", "W5eWW63cVSkf", "W4/dVM3dK8kk", "hqtcHK9r", "qre2W6DPhrncW48+W7tcTCod", "hY7cOSkhW4fuBX0", "hs7cPhH3", "W63dL8kCuCke", "W4RdH2hcHmoKWPSJW6rx", "t2tcKW", "WQFdNCk1W5a", "fmohlG", "fSopoG", "eCo6sW", "WQxdOhBdN8kD", "WR8lWQBcP1W", "WOSFfq", "w8oPwCkBWPu", "uSk9BmonEq", "fefYWP40", "rrW9wsC", "WQb/pSkgjq", "qqW6AsC", "WOmhtSkrW48", "WQH/lCkgoG", "dsnzaq", "eLbUWQe", "tby9pse", "huxcOgjE", "WQKCWRuWzW", "xmk3FSonyG", "W6WtW5dcH2i", "W6nZjmklDW", "orFcPwvj", "W5VdSCkt", "WRRdP1mFzq", "n8kDW58", "pdvIr8oh", "WPldT3FdR8kf", "WOmnxmk1W5C", "W5SHW6FcO8kf", "WOfcemkHdG", "W4f1z8kQvG", "hmoVv8oMBW", "WO8HACk/W6C", "W6tdNLGqW6u", "at9nat0", "t3zPW7G", "CM3cMCogra", "hun1", "WRa9WPJcR1O", "W4RdLWn3tq", "WPC5juBdL8oWWOOpWP7dLMbL", "W50CW6/dVCk+", "C8kVDJxdMq", "W4bvhCknsW", "mtPLqCkp", "W5OJW7BcRSkE", "qrWNBI0", "W7xdLWv6ta", "W6tcL0Wfnq", "W49LEqC", "sCo6wCkAWO4", "nSk9W5xdVSoz", "WQWsWRO4Aq", "WPJcU8kluW", "W5ldRSk8WPbM", "asnmc28", "WPOocmoIWR8", "W6ZcT1GwW6u", "WOSbqmkXW4y", "gKDJWRWU", "W7ZcUwqidG", "W5ddPmksW48x", "WONcTCklEc4", "WQ/dJmkDWPDo", "WQD1jmkWlq", "qLRdK8oEW5y", "s8kncG", "WPWTWQ3cOW4", "f0fGWRmO", "CepdHSoFW7K", "pCkgW57dSG", "jWrQWRS+", "DMlcKSo0WQe", "d8ojoYK", "qSksC2hcJq", "rN/cSCklW6G", "W6NcUSk+j8o0", "u8kfpmkfha", "WRnXomkTiq", "wSk/FG", "WQ/dKCkYWPTd", "WQpcKsv4W5C", "wmkljSksbG", "WORcQmkluJ0", "W5BdTmkQWRKV", "WQRcKIBcR8ks", "WO4BBCk1W5e", "W6fMW57cRg3cHvtdSCom", "r8kbbNy", "W6lcM1GmW7q", "W7mfW7/cGuK", "uxLYW6iS", "WRJdGt1EsW", "rHWXW6rSg0fNW58pW7/cRa"];
  return oi = function() {
    return i;
  }, oi();
}
(function(i, o) {
  function t(a, r, B, C, x) {
    return eA(B - -645, r);
  }
  function e(a, r, B, C, x) {
    return eA(r - 674, C);
  }
  function A(a, r, B, C, x) {
    return eA(r - 378, a);
  }
  function g(a, r, B, C, x) {
    return eA(r - -885, C);
  }
  const n = i();
  function I(a, r, B, C, x) {
    return eA(x - -459, r);
  }
  for (; ; )
    try {
      if (-parseInt(t(-405, "[j8G", -438, -406, -310)) / 1 + parseInt(g(-408, -467, -375, "vPo*", -427)) / 2 + -parseInt(I(-149, "JqhU", 18, 0, -21)) / 3 * (-parseInt(A("QJBf", 829, 811, 793, 725)) / 4) + parseInt(t(-489, "Kcy*", -418, -431, -385)) / 5 + parseInt(t(-258, "vqVW", -358, -249, -309)) / 6 + parseInt(e(1221, 1105, 1162, "NPgA", 1073)) / 7 * (parseInt(I(-332, "cV)v", -252, -332, -216)) / 8) + parseInt(I(-200, "JBG&", -137, -183, -241)) / 9 * (-parseInt(A("!mjy", 751, 642, 773, 836)) / 10) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(oi, 13 * -51862 + -681006 + 1732631);
function kA(i, o, t, e, A) {
  return eA(i - 755, e);
}
function eA(i, o) {
  const t = oi();
  return eA = function(e, A) {
    e = e - (653 * 9 + -3022 + -2 * 1325);
    let g = t[e];
    if (eA.UzyVEN === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      eA.aPKNOl = B, i = arguments, eA.UzyVEN = !0;
    }
    const I = t[0], a = e + I, r = i[a];
    return r ? g = r : (eA.lWmcjH === void 0 && (eA.lWmcjH = !0), g = eA.aPKNOl(g, A), i[a] = g), g;
  }, eA(i, o);
}
function oA(i, o, t, e, A) {
  return eA(i - 586, o);
}
function CA(i, o, t, e, A) {
  return eA(e - 69, i);
}
function GA(i, o, t, e, A) {
  return eA(A - 609, t);
}
var $0, AI, eI;
class zs {
  constructor(o) {
    D(this, eI);
    D(this, AI, [GA(996, 887, "Dkeg", 930, 996) + CA("KSEX", 327, 376, 283) + "ic", oA(823, ")7T1") + CA("pI3k", 353, 560, 481) + "ic"]);
    D(this, $0);
    function t(A, g, n, I, a) {
      return eA(n - 918, I);
    }
    function e(A, g, n, I, a) {
      return eA(g - 673, a);
    }
    this[e(980, 931, 908, 845, "JBG&") + t(1299, 1411, 1363, "0@ft") + "d"] = o;
  }
  async [(eI = GA(1026, 1053, "m%^)", 1015, 936) + "se", AI = GA(845, 900, "JBG&", 770, 883) + GA(937, 1004, "m%^)", 922, 919) + oA(791, "q45]") + kA(1117, 1046, 1079, "7aNf"), $0 = CA("j44K", 479, 390, 518) + kA(986, 962, 1071, "0rdo"), TA(205, 280, 158, "Kcy*"))](o) {
    function t(a, r, B, C, x) {
      return oA(C - 6, a);
    }
    const e = await this[A(476, 332, 450, "pB0w") + A(419, 506, 489, "3PZl") + n(636, 614, "is6Z", 561)](o);
    function A(a, r, B, C, x) {
      return oA(B - -390, C);
    }
    await Promise[I(372, 409, "pB0w") + n(733, 710, "Pck$", 613)]([this[g(-69, 45, -170, -20, "JBG&") + I(311, 231, ")7T1") + "d"][g(-31, -36, -39, 76, "vqVW")](o), this[n(421, 434, "j44K", 459) + t("pB0w", 912, 964, 898) + "e"](e)]);
    function g(a, r, B, C, x) {
      return TA(a - 266, a - -325, B - 33, x);
    }
    function n(a, r, B, C, x) {
      return CA(B, r - 299, B - 306, C - 120);
    }
    function I(a, r, B, C, x) {
      return CA(B, r - 191, B - 11, a - -151);
    }
    this[t("Ckbv", 902, 898, 904) + g(27, 16, 106, -36, "UkUN") + A(378, 402, 507, "NPgA")]();
  }
  async [kA(987, 1049, 980, "is6Z") + CA("fL%)", 542, 573, 464) + "se"](o) {
    function t(I, a, r, B, C) {
      return GA(I - 193, a - 151, r, B - 49, a - -346);
    }
    function e(I, a, r, B, C) {
      return oA(a - 242, I);
    }
    function A(I, a, r, B, C) {
      return oA(B - -32, I);
    }
    function g(I, a, r, B, C) {
      return CA(r, a - 17, r - 319, I - 214);
    }
    function n(I, a, r, B, C) {
      return CA(a, a - 280, r - 297, r - 429);
    }
    try {
      if (e("TQb*", 1287, 1372, 1171, 1366) !== t(524, 501, "9$e!", 573, 548)) _0x3272c7[t(599, 509, "C9a1", 470, 577)]();
      else {
        const I = await fetch(o);
        if (!I.ok)
          if (t(621, 632, "vqVW", 522, 650) !== g(599, 618, "&8yN", 543, 600)) {
            _0xfc9653 instanceof _0x50963f ? _0x18fa57[A("QsIV", 928, 846, 935, 884)]() : _0x1c4879 instanceof _0x5202bd && _0x4db0fb[A("!mjy", 858, 946, 835, 744)](_0x16962f);
            const a = {};
            a[t(688, 670, "416g", 771, 556) + A("KbLL", 851, 874, 825, 857)] = !1, a[t(603, 571, "q45]", 565, 617) + "s"] = [], a[n(776, "NPgA", 823, 740, 800) + e("Dkeg", 1154, 1065, 1077, 1201)] = [], a[t(555, 677, "is6Z", 778, 699) + A(")7T1", 734, 910, 827, 885) + n(607, "KSEX", 715, 586, 756)] = void (6477 + 127 * -51), a[e("KbLL", 1145, 1059, 1218, 1091)] = function() {
            }, a[A("pB0w", 905, 759, 779, 776) + A("$vPI", 687, 805, 783, 667)] = "", this[A("an5D", 877, 890, 913, 891) + e("ENC4", 1208, 1304, 1142, 1275)] = new _0x113ea7(a);
          } else throw new Error(A("pB0w", 980, 1074, 997, 1073) + A("UkUN", 705, 773, 829, 776) + g(661, 742, "veak", 564, 678) + A("fL%)", 948, 987, 1004, 1120) + "d.");
        this[g(694, 582, "j44K", 651, 585) + "se"] = await I[t(547, 472, "416g", 519, 347)]();
      }
    } catch (I) {
      if (e("$vPI", 1281) !== e("CvYY", 1041)) this[A("$vPI", 1100, 906, 980) + "se"] = void (11 * 23 + -9557 + 9304), console[n(1010, "is6Z", 925)](I);
      else return;
    }
  }
  async [GA(906, 780, ")7T1", 721, 820) + oA(974, "ENC4") + "e"](o) {
    function t(I, a, r, B, C) {
      return GA(I - 233, a - 254, a, B - 84, B - 373);
    }
    this[g(1159, 1037, 1170, 1265, "veak") + e(1009, 885, "KbLL")] = void (-2 * 3418 + 153 * -53 + 14945);
    function e(I, a, r, B, C) {
      return CA(r, a - 53, r - 79, a - 583);
    }
    function A(I, a, r, B, C) {
      return kA(a - -1668, a - 371, r - 351, B);
    }
    function g(I, a, r, B, C) {
      return kA(I - 185, a - 445, r - 387, C);
    }
    function n(I, a, r, B, C) {
      return GA(I - 164, a - 278, B, B - 490, C - -1509);
    }
    if (!o)
      if (g(1361, 1426, 1239, 1356, "3evk") === n(-644, -716, -765, "9$e!", -659)) {
        console[A(-698, -569, -467, "0@ft")](g(1217, 1236, 1169, 1253, "fL%)") + n(-607, -506, -497, "416g", -553) + t(1266, "$vPI", 1438, 1313) + n(-462, -491, -560, "JBG&", -453) + n(-498, -386, -389, "NPgA", -499)), this[t(1265, "fL%)", 1154, 1249) + "se"] = void (1 * -3247 + 1999 * -1 + 5246);
        return;
      } else _0x28394e[t(1349, "0rdo", 1448, 1415) + "ch"]((I) => _0x5d9c0a[A(-493, -593, -587, "C9a1")](I));
    await this[n(-508, -378, -558, "an5D", -498) + g(1164, 1102, 1203, 1151, "UkUN") + "se"](o);
  }
  async [oA(820, "#W^[") + GA(1061, 1020, "is6Z", 841, 945) + TA(364, 390, 426, "CvYY")](o) {
    function t(a, r, B, C, x) {
      return CA(x, r - 90, B - 217, r - 78);
    }
    const e = await fetch("" + o + this[A(-145, "pB0w", -185) + I(1207, 1272, 1053, "CvYY", 1170) + A(-77, "g6U&", -58) + t(482, 363, 304, 330, "[j8G")][0]);
    function A(a, r, B, C, x) {
      return oA(B - -1086, r);
    }
    function g(a, r, B, C, x) {
      return kA(r - -1693, r - 188, B - 181, a);
    }
    const n = e.ok ? -360 + 4 * 90 : -1 * 8166 + -7057 + 1903 * 8;
    function I(a, r, B, C, x) {
      return TA(a - 311, x - 812, B - 289, C);
    }
    return "" + o + this[g("!UI@", -582, -511) + I(1300, 1198, 1265, "q45]", 1230) + t(401, 468, 473, 524, "Pck$") + t(469, 408, 292, 402, "pB0w")][n];
  }
  [oA(854, "9$e!") + oA(963, "KSEX") + "s"](o) {
    function t(A, g, n, I, a) {
      return kA(I - -754, g - 419, n - 93, g);
    }
    function e(A, g, n, I, a) {
      return CA(n, g - 498, n - 141, g - -829);
    }
    o[t(218, "0@ft", 162, 286) + "ch"]((A) => console[e(-577, -460, "KSEX")](A));
  }
  [oA(889, "an5D") + CA("mKF#", 333, 459, 364) + TA(356, 282, 189, "pB0w")](o) {
    function t(e, A, g, n, I) {
      return CA(A, A - 367, g - 460, I - 747);
    }
    o[t(1179, "3evk", 1217, 1200, 1198) + "ch"]((e) => console[t(1139, "9$e!", 916, 1102, 1038)](e));
  }
  [kA(997, 961, 994, "pI3k") + GA(1016, 971, "TQb*", 1025, 944)]() {
    function o(A, g, n, I, a) {
      return CA(n, g - 385, n - 330, A - 889);
    }
    function t(A, g, n, I, a) {
      return CA(g, g - 183, n - 134, A - -83);
    }
    function e(A, g, n, I, a) {
      return kA(A - -1062, g - 445, n - 323, I);
    }
    return window[t(285, "vPo*", 230) + o(1386, 1291, ")7T1")][t(251, "Dkeg", 220) + e(6, -57, 134, "TQb*")];
  }
  [oA(1032, "QsIV") + oA(887, "$vPI") + kA(1161, 1145, 1216, "0@ft")]() {
    function o(n, I, a, r, B) {
      return oA(a - -1574, n);
    }
    function t(n, I, a, r, B) {
      return oA(n - 35, I);
    }
    function e(n, I, a, r, B) {
      return TA(n - 343, n - 397, a - 472, r);
    }
    function A(n, I, a, r, B) {
      return oA(I - -238, n);
    }
    function g(n, I, a, r, B) {
      return TA(n - 437, n - -290, a - 381, a);
    }
    try {
      if (e(791, 781, 745, "KbLL", 810) !== o("JBG&", -718, -602, -495, -571)) {
        if (!this[o("QsIV", -458, -580, -647, -549) + "se"]) {
          if (o("mKF#", -690, -681, -641, -678) === g(-2, 103, "fL%)", -130, 125)) throw new zi(t(969, "x3RI", 1027, 982, 1019) + A("9$e!", 611, 535, 527, 551) + t(923, "!mjy", 975, 835, 893) + o("pB0w", -708, -768, -796, -865) + ".");
          _0x4fd18b[o("Dkeg", -720, -782, -891, -715)](A("veak", 767, 816, 810, 749) + e(684, 584, 565, "!UI@", 791) + o("#W^[", -676, -716, -641, -630) + g(118, 79, "Kcy*", -3, 23) + g(-47, 68, "m%^)", -125, -3)), this[g(116, 82, "QsIV", -5, 90) + "se"] = void (32 * -193 + 6155 + 21);
          return;
        }
        if (!this[A("NPgA", 604, 698, 634, 706) + g(36, 64, "G]F4", -51, 95) + "d"][e(683, 717, 663, "416g", 682) + g(12, -38, "is6Z", -54, 140) + o("vPo*", -706, -724, -622, -814) + "ed"]())
          throw t(887, "h5U*", 821, 909, 997) === e(732, 825, 817, "h5U*", 687) ? new _0x2ddf00(A("mKF#", 711, 666, 808, 710) + e(836, 779, 746, "0@ft", 961) + A("is6Z", 628, 686, 624, 565) + g(54, 0, "m%^)", 53, 17) + "d.") : new zi(g(40, 19, "cV)v", -61, 54) + A("3PZl", 610, 631, 527, 524) + A("an5D", 745, 867, 652, 717) + g(13, -48, "JBG&", 115, 55) + ".");
        this[e(744, 636, 854, "$vPI", 626) + t(913, "UkUN", 923, 1014, 1039)] = new S0(qs(this[t(1010, "pI3k", 1049, 949, 1085) + "se"], this[g(-37, -133, "3PZl", 89, 7) + o("x3RI", -635, -643, -639, -591)]())), this[A("JBG&", 574, 540, 481, 553) + g(-43, 7, ")7T1", 7, -156) + "s"](this[g(164, 130, "0rdo", 249, 289) + t(1001, "ENC4", 929, 1084, 880)][A("QsIV", 662, 746, 612, 720) + "s"]), this[o("0rdo", -605, -635, -648, -581) + o("QJBf", -752, -669, -639, -767) + g(49, -23, "UkUN", 174, 39)](this[g(-57, 68, "Kcy*", -162, -100) + e(829, 762, 804, "$vPI", 774)][g(46, 17, "Kcy*", -34, 34) + e(664, 769, 790, "q45]", 720)]);
      } else return _0x2c3ce9[e(810, 717, 843, "j44K", 804) + o("7aNf", -685, -597, -664, -580)][g(-9, -113, "0rdo", 30, -75) + A("&8yN", 738, 804, 795, 674)];
    } catch (n) {
      if (e(830, 755, 752, "3evk") !== A("!mjy", 709)) {
        if (n instanceof zi)
          if (e(671, 774, 557, "NPgA") !== g(102, 115, "CvYY")) n[t(996, "NPgA")]();
          else {
            if (!this[t(1e3, "NPgA") + "se"]) throw new _0x5cd3e9(e(808, 835, 792, "3evk") + g(170, 215, "C9a1") + o("Kcy*", -663, -536) + e(843, 733, 925, "Ckbv") + ".");
            if (!this[e(795, 790, 804, "416g") + o("h5U*", -578, -548) + "d"][e(728, 623, 667, "JBG&") + t(919, "KbLL") + e(616, 488, 684, "QsIV") + "ed"]()) throw new _0x21ad9e(A("pB0w", 715) + A("vqVW", 699) + e(800, 717, 747, "x3RI") + o("G]F4", -438, -549) + ".");
            this[e(603, 611, 693, "ENC4") + t(1004, "aWpO")] = new _0x1b37cf(_0x13f16c(this[t(997, "0@ft") + "se"], this[e(765, 714, 737, "[j8G") + o("&8yN", -666, -572)]())), this[g(74, 80, "aWpO") + t(1024, "pI3k") + "s"](this[g(107, 227, "pI3k") + o("veak", -667, -666)][e(718, 665, 646, "3evk") + "s"]), this[e(737, 858, 684, "m%^)") + g(2, 19, "g6U&") + t(865, "QJBf")](this[A("Kcy*", 583) + t(979, ")7T1")][A("7aNf", 645) + o("C9a1", -779, -741)]);
          }
        else n instanceof Error && (g(51, 143, "pI3k") === g(-62, -168, "3PZl") ? (this[e(799, 779, 909, "QJBf") + "se"] = void (-1 * -3856 + 104 * 61 + -10200), _0x19ff7a[g(38, 105, "KSEX")](_0x353dec)) : console[g(-40, 63, "7aNf")](n));
        const I = {};
        I[o("3PZl", -811, -760) + A("vqVW", 777)] = !1, I[o("7aNf", -775, -736) + "s"] = [], I[e(763, 685, 724, "0@ft") + t(869, "x3RI")] = [], I[t(874, "Dkeg") + g(166, 77, "NPgA") + g(79, 155, "Dkeg")] = void (4233 + 3 * -1411), I[g(168, 107, "m%^)")] = function() {
        }, I[A("q45]", 705) + o("bXYs", -846, -778)] = "", this[A("UkUN", 584) + t(907, "g6U&")] = new S0(I);
      } else return this[A("$vPI", 697) + o("#W^[", -725, -697)];
    }
  }
  [CA("mKF#", 531, 492, 478) + kA(978, 925, 925, "#W^[") + GA(1106, 1093, "m%^)", 1135, 1066) + "t"]() {
    function o(e, A, g, n, I) {
      return kA(n - -1307, A - 23, g - 193, I);
    }
    function t(e, A, g, n, I) {
      return GA(e - 342, A - 244, g, n - 465, A - -966);
    }
    return this[o(-386, -222, -351, -274, "x3RI") + t(-4, -33, "O0KK", -41)];
  }
  [CA("0rdo", 386, 498, 443) + TA(314, 337, 292, "[j8G") + oA(1011, "O0KK")]() {
    var n;
    function o(I, a, r, B, C) {
      return kA(I - -19, a - 312, r - 14, B);
    }
    function t(I, a, r, B, C) {
      return GA(I - 349, a - 493, C, B - 166, I - -738);
    }
    if (!this[g("m%^)", 65, 119) + "se"])
      if (A("bXYs", -310, -216, -404, -343) !== A("CvYY", -167, -155, -172, -267)) _0x200b00[t(256, 239, 379, 301, "C9a1")](_0x1a77e8);
      else return;
    function e(I, a, r, B, C) {
      return TA(I - 491, C - -881, r - 350, r);
    }
    function A(I, a, r, B, C) {
      return oA(C - -1208, I);
    }
    function g(I, a, r, B, C) {
      return TA(I - 39, a - -260, r - 189, I);
    }
    try {
      if (A("0@ft", -475, -368, -397, -372) !== e(-389, -426, "7aNf", -390, -460)) throw new _0x32a9ca(g(")7T1", 103, 155, -3, 195) + t(189, 239, 173, 122, "pB0w") + g("CvYY", 174, 52, 51, 65) + g("G]F4", 170, 114, 189, 259) + ".");
      {
        const I = JSON[o(1120, 1243, 1113, "Ckbv", 1090)](this[A("NPgA", -115, -343, -116, -243) + "se"]);
        return (n = I == null ? void 0 : I[t(200, 271, 248, 100, "O0KK") + o(987, 1068, 1055, "an5D", 1053)]) == null ? void 0 : n[A("3PZl", -432, -262, -465, -365) + t(81, 113, 117, 95, "bXYs")];
      }
    } catch (I) {
      if (g("aWpO", 88, 9) === g("3evk", 155, 43)) _0x539e26[g("KSEX", 47, 145) + "ch"]((a) => _0x3ef2e7[o(996, 989, 961, "!mjy")](a));
      else {
        if (I instanceof Error)
          if (t(326, 432, 359, 285, "pI3k") !== e(-517, -463, "x3RI", -463, -439)) Y[A("NPgA", -373, -260, -329, -363) + A("cV)v", -74, -314, -106, -192)](I);
          else {
            _0x6608f9 instanceof _0x57500a && _0x298746[e(-514, -353, "j44K", -535, -422) + o(1173, 1251, 1195, "!mjy")](_0x462360);
            return;
          }
        return;
      }
    }
  }
}
const Ei = class Ei extends zs {
  static getInstance() {
    if (!this._instance) {
      const o = new Xs();
      this._instance = new Ei(o);
    }
    return this._instance;
  }
};
D(Ei, "_instance");
let Jg = Ei;
const di = class di {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", 811 * 1 + -6050 + 5239);
  }
  static getInstance() {
    return !this._instance && (this._instance = new di()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -6851 + 15 * -331 + 56 * 211;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && En(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = A);
  }
};
D(di, "_instance");
let Wt = di;
const xt = Wt.getInstance(), Ga = (i, o, t = JB) => {
  const e = {};
  e.instructionCode = o.code, e.isEscalated = o.isEscalated ?? !1;
  const A = e;
  xt.dispatchDelayedCustomEventOnChange(i, A, t);
}, $s = (i, o) => {
  xt.dispatchCustomEventOnChange(i, o);
}, AQ = (i, o) => {
  const t = {};
  t.size = o;
  const e = t;
  xt.dispatchCustomEventOnChange(i, e);
}, eQ = (i, o, t) => {
  const e = o.confidence < t ? void 0 : o, A = {};
  A.detectedObject = e;
  const g = A;
  xt.dispatchCustomEventOnChange(i, g);
}, tQ = (i, { detection: o, fps: t, image: e, invalidValidators: A, isInCandidateSelection: g }) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = o, n.data.fps = t, n.data.isInCandidateSelection = g, n.data.invalidValidators = A, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const I = n;
  xt.dispatchCustomEventOnChange(i, I);
};
function oQ(i, o) {
  const t = {};
  t.instructionCode = o;
  const e = t;
  xt.dispatchCustomEventOnChange(i, e);
}
const Ug = (i, o) => {
  En(i, o);
}, iQ = (i, o) => {
  const { cameraResolution: t, shouldCameraMirror: e } = o;
  K(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, $s(i, A);
  }, [t, e, i]);
}, gQ = (i) => i === ea.CONTROL ? !sa() : !0, nQ = (i, o) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: g } = Qt(), [n, I] = rA(), a = fA(() => {
    const B = g && o && o.isStreaming && o.getCameraSettings().facingMode;
    return B ? n ?? B === "user" : n ?? gQ(i);
  }, [o, n, i, g]);
  K(() => {
    const B = () => {
      t !== _A.LOADING && e(_A.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, x = async () => {
      if (o) {
        e(_A.LOADING);
        try {
          await o.switchCamera(), e(_A.RUNNING);
        } catch (E) {
          if (E instanceof Error) {
            A(Y.fromCameraError(E));
            return;
          }
        }
        I(void 0);
      }
    }, Q = (E) => {
      var d;
      switch ((d = E.detail) == null ? void 0 : d["instruction"]) {
        case Pi.CONTINUE_DETECTION:
          B();
          break;
        case Pi.TOGGLE_MIRROR:
          C();
          break;
        case Pi.SWITCH_CAMERA:
          x();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(i, Q), () => {
      document.removeEventListener(i, Q);
    };
  }, [t, o, A, n, e, a, i]);
  const r = {};
  return r.shouldCameraMirror = a, r;
};
function IQ(i, o) {
  K(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      AQ(o, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, o]);
}
function aQ(i) {
  return ne(Math.abs(i));
}
const rQ = () => {
  const [i, o] = rA(null), t = z(new Ut(-9544 + 3 * 208 + 8925));
  function e(g) {
    const { z: n } = g.accelerationIncludingGravity || {};
    if (!n) return;
    t.current.pushFixed(aQ(n));
    const I = ne(Ue(t.current)), a = {};
    a.z = I, o(a);
  }
  K(() => (window.addEventListener("devicemotion", us(e, xs), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
}, ln = (i, o) => {
  const t = z(o);
  K(() => {
    t.current = o;
  }, [o]), K(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
var CQ = Symbol.for("preact-signals");
function un() {
  if (Ve > -1 * 4533 + -73 * 8 + 5118)
    Ve--;
  else {
    for (var i, o = !1; vt !== void 0; ) {
      var t = vt;
      for (vt = void (-1 * 5919 + 9948 + -4029), Yg++; void (1546 * 2 + -3 * 2515 + 4453) !== t; ) {
        var e = t.o;
        if (t.o = void 0, t.f &= -(50 * -25 + 22 * 23 + 747), !(2138 + 6 * -355 & t.f) && Sa(t)) try {
          t.c();
        } catch (A) {
          !o && (i = A, o = !(-1455 + 485 * 3));
        }
        t = e;
      }
    }
    if (Yg = 2 * -3573 + -2 * 4342 + -7915 * -2, Ve--, o) throw i;
  }
}
var T = void (2 * -1291 + -1 * 4685 + -43 * -169), vt = void (-907 + -1 * -2969 + -2062), Ve = -2 * 2194 + 67 * 49 + -17 * -65, Yg = 0, ii = -401 * 16 + 7865 + -69 * 21;
function Na(i) {
  if (void (14874 + -111 * 134) !== T) {
    var o = i.n;
    if (void (-1 * 9931 + 248 * 31 + -1 * -2243) === o || o.t !== T)
      return o = { i: 0, S: i, p: T.s, n: void (7889 * 1 + 6559 * -1 + -133 * 10), t: T, e: void 0, x: void (-247 * -1 + 778 * -1 + 531 * 1), r: o }, void (503 * 6 + 42 * 110 + -7638) !== T.s && (T.s.n = o), T.s = o, i.n = o, 3 * -505 + -408 + 1955 & T.f && i.S(o), o;
    if (-(-1795 * 2 + 1 * 3386 + -5 * -41) === o.i)
      return o.i = -2588 + -6313 * -1 + -3725, void (-1 * 6282 + -377 + 6659) !== o.n && (o.n.p = o.p, void (-11 * 867 + 4247 + 2645 * 2) !== o.p && (o.p.n = o.n), o.p = T.s, o.n = void (-7343 + -1 * -2501 + 4842), T.s.n = o, T.s = o), o;
  }
}
function sA(i) {
  this.v = i, this.i = -2288 + -26 * -88, this.n = void (-2402 * 4 + -54 * -52 + 6800), this.t = void (1699 * 2 + 1 * -1099 + -2299);
}
sA.prototype.brand = CQ, sA.prototype.h = function() {
  return !(-5309 * 1 + 5 * -167 + 8 * 768);
}, sA.prototype.S = function(i) {
  this.t !== i && void (-8775 + 585 * -17 + 18720) === i.e && (i.x = this.t, void (1885 + -5 * -941 + -2 * 3295) !== this.t && (this.t.e = i), this.t = i);
}, sA.prototype.U = function(i) {
  if (void (-2 * -1261 + 9412 + -11934 * 1) !== this.t) {
    var o = i.e, t = i.x;
    void (-188 * -1 + 293 * 21 + -6341) !== o && (o.x = t, i.e = void (-7846 * 1 + 4933 * -2 + -1476 * -12)), void (183 * -53 + -13 * 28 + 10063 * 1) !== t && (t.e = o, i.x = void (-1 * 8423 + -1 * -9949 + 109 * -14)), i === this.t && (this.t = t);
  }
}, sA.prototype.subscribe = function(i) {
  var o = this;
  return fn(function() {
    var t = o.value, e = T;
    T = void (2194 * -1 + 7897 * 1 + -1901 * 3);
    try {
      i(t);
    } finally {
      T = e;
    }
  });
}, sA.prototype.valueOf = function() {
  return this.value;
}, sA.prototype.toString = function() {
  return this.value + "";
}, sA.prototype.toJSON = function() {
  return this.value;
}, sA.prototype.peek = function() {
  var i = T;
  T = void (1 * 6537 + -5360 + -1177);
  try {
    return this.value;
  } finally {
    T = i;
  }
}, Object.defineProperty(sA.prototype, "value", { get: function() {
  var i = Na(this);
  return void (4841 + -5327 * 1 + 486) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Yg > -6743 * 1 + -10 * -436 + 2483) throw new Error("Cycle detected");
    this.v = i, this.i++, ii++, Ve++;
    try {
      for (var o = this.t; void (-6076 + 3038 * 2) !== o; o = o.x) o.t.N();
    } finally {
      un();
    }
  }
} });
function Fa(i) {
  return new sA(i);
}
function Sa(i) {
  for (var o = i.s; void (-1199 * -7 + 4799 * 1 + -8 * 1649) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(174 + -1285 * 5 + -7 * -893);
  return !(4342 * -1 + -211 * -23 + 10 * -51);
}
function Ra(i) {
  for (var o = i.s; void (-8133 + -254 * 31 + -1 * -16007) !== o; o = o.n) {
    var t = o.S.n;
    if (void (-4 * -208 + -47 * -141 + -7459) !== t && (o.r = t), o.S.n = o, o.i = -(23 * 23 + 3716 + -4244), void (6126 + 6 * -1021) === o.n) {
      i.s = o;
      break;
    }
  }
}
function Ma(i) {
  for (var o = i.s, t = void (-8023 + 9865 * 1 + -307 * 6); void (1 * -5102 + 2446 + 2656) !== o; ) {
    var e = o.p;
    -(9075 + 931 * -5 + -4419) === o.i ? (o.S.U(o), void (6 * 624 + 19 * 4 + -3820) !== e && (e.n = o.n), void (-3432 + 83 * -94 + 11234 * 1) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (9 * -567 + 747 * 11 + 519 * -6) !== o.r && (o.r = void 0), o = e;
  }
  i.s = t;
}
function qe(i) {
  sA.call(this, void (4939 * 1 + -8207 + 3268)), this.x = i, this.s = void (-4608 + 36 * 128), this.g = ii - (-6175 + 1 * 8282 + -2106), this.f = 561 + 3 * -93 + -139 * 2;
}
(qe.prototype = new sA()).h = function() {
  if (this.f &= -(188 * 4 + 9819 + 2 * -5284), -7422 + -977 * 1 + 8400 & this.f) return !1;
  if (-25 * 355 + 5413 + -1 * -3494 == (-11140 + -1 * -11176 & this.f)) return !(1 * 3307 + -9794 + 6487);
  if (this.f &= -(7757 * 1 + -52 * -143 + -15188), this.g === ii) return !(7533 + 279 * -27);
  if (this.g = ii, this.f |= 8476 + 1 * 8762 + -17237 * 1, this.i > -11076 + 71 * 156 && !Sa(this)) return this.f &= -2, !(-2857 + -2894 * -1 + -37);
  var i = T;
  try {
    Ra(this), T = this;
    var o = this.x();
    (-6351 * -1 + -1 * 3870 + 2465 * -1 & this.f || this.v !== o || -98 * -102 + 1113 * -7 + -2205 === this.i) && (this.v = o, this.f &= -(5743 + -2863 * 2), this.i++);
  } catch (t) {
    this.v = t, this.f |= -5048 + -1 * 4377 + -9 * -1049, this.i++;
  }
  return T = i, Ma(this), this.f &= -(-3 * 419 + -6 * -1063 + -1 * 5119), !0;
}, qe.prototype.S = function(i) {
  if (void (1244 * -6 + 28 * 2 + 7408 * 1) === this.t) {
    this.f |= 2 * 4937 + 8145 + 367 * -49;
    for (var o = this.s; void (-2402 + 456 * -8 + 6050) !== o; o = o.n) o.S.S(o);
  }
  sA.prototype.S.call(this, i);
}, qe.prototype.U = function(i) {
  if (void (19 * -358 + -7937 + 14739) !== this.t && (sA.prototype.U.call(this, i), void (4 * 319 + -1 * -5263 + 1 * -6539) === this.t)) {
    this.f &= -(7719 + 89 * -61 + -2257);
    for (var o = this.s; void (-1610 + 230 * 7) !== o; o = o.n) o.S.U(o);
  }
}, qe.prototype.N = function() {
  if (!(-5727 + 1 * 4441 + -28 * -46 & this.f)) {
    this.f |= -2572 + -1 * -2578;
    for (var i = this.t; void (-3011 * 2 + 581 * 14 + 33 * -64) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(qe.prototype, "value", { get: function() {
  if (-2 * 2598 + -3690 + -8887 * -1 & this.f) throw new Error("Cycle detected");
  var i = Na(this);
  if (this.h(), i !== void 0 && (i.i = this.i), -12462 + -1 * -12478 & this.f) throw this.v;
  return this.v;
} });
function BQ(i) {
  return new qe(i);
}
function va(i) {
  var o = i.u;
  if (i.u = void (-364 * 4 + 383 * 5 + -459), typeof o == "function") {
    Ve++;
    var t = T;
    T = void (-3318 + 32 * 59 + 5 * 286);
    try {
      o();
    } catch (e) {
      throw i.f &= -(11016 + 11014 * -1), i.f |= 9286 + 60 * 8 + -41 * 238, hn(i), e;
    } finally {
      T = t, un();
    }
  }
}
function hn(i) {
  for (var o = i.s; void (35 * 41 + 3543 + -4978) !== o; o = o.n) o.S.U(o);
  i.x = void (-21 * 161 + -8555 + -4 * -2984), i.s = void (-58 * 23 + 1 * 389 + -315 * -3), va(i);
}
function sQ(i) {
  if (T !== this) throw new Error("Out-of-order effect");
  Ma(this), T = i, this.f &= -(5001 + -4 * -8 + -5031), -2 * -2025 + 626 * 2 + -5294 & this.f && hn(this), un();
}
function Nt(i) {
  this.x = i, this.u = void (6296 + 6296 * -1), this.s = void 0, this.o = void (533 * 1 + 79 * 1 + 6 * -102), this.f = -8353 + 1 * 4618 + 3767;
}
Nt.prototype.c = function() {
  var i = this.S();
  try {
    if (-11 * 157 + 5123 * -1 + 6858 & this.f || void (3 * 2414 + -3782 + -3460) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, Nt.prototype.S = function() {
  if (-11607 + -1 * -11608 & this.f) throw new Error("Cycle detected");
  this.f |= 4218 + -4217 * 1, this.f &= -(2367 + 7 * -482 + 1016), va(this), Ra(this), Ve++;
  var i = T;
  return T = this, sQ.bind(this, i);
}, Nt.prototype.N = function() {
  !(2 & this.f) && (this.f |= 5471 + -91 * -74 + -12203, this.o = vt, vt = this);
}, Nt.prototype.d = function() {
  this.f |= 8, -11818 + 1 * 11819 & this.f || hn(this);
};
function fn(i) {
  var o = new Nt(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Ag;
function Ze(i, o) {
  G[i] = o.bind(null, G[i] || function() {
  });
}
function ho(i) {
  Ag && Ag(), Ag = i && i.S();
}
function La(i) {
  var o = this, t = i.data, e = _e(t);
  e.value = t;
  var A = fA(function() {
    for (var g = o.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= 1 * -1783 + -6963 * -1 + -2588 * 2;
      break;
    }
    return o.__$u.c = function() {
      var n;
      !oI(A.peek()) && ((n = o.base) == null ? void (2702 * -2 + 6947 + -1 * 1543) : n.nodeType) === 3 ? o.base.data = A.peek() : (o.__$f |= -977 * -3 + 2 * 2040 + -7010 * 1, o.setState({}));
    }, BQ(function() {
      var n = e.value.value;
      return -17714 + -8857 * -2 === n ? 0 : !(-57 * -85 + 2 * -985 + 5 * -575) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
La.displayName = "_st";
var Wg = {};
Wg.configurable = !(-9558 + 1052 * -1 + 10610 * 1), Wg.value = void (-379 * 4 + 4344 * 2 + -1793 * 4);
var Og = {};
Og.configurable = !(-1688 * 1 + -4480 + 6168), Og.value = La;
var Hg = {};
Hg.configurable = !(-20 * 254 + -8982 + 14062), Hg.get = function() {
  var i = {};
  return i.data = this, i;
};
var Kg = {};
Kg.configurable = !0, Kg.value = 1;
var ft = {};
ft.constructor = Wg, ft.type = Og, ft.props = Hg, ft.__b = Kg, Object.defineProperties(sA.prototype, ft), Ze("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var A in e) if (A !== "children") {
      var g = e[A];
      g instanceof sA && (t || (o.__np = t = {}), t[A] = g, e[A] = g.peek());
    }
  }
  i(o);
}), Ze("__r", function(i, o) {
  ho();
  var t, e = o.__c;
  e && (e.__$f &= -(709 + -101 * 7), void (3343 + 2 * -1999 + 131 * 5) === (t = e.__$u) && (e.__$u = t = function(A) {
    var g;
    return fn(function() {
      g = this;
    }), g.c = function() {
      e.__$f |= -872 * -2 + -1053 + -690, e.setState({});
    }, g;
  }())), ho(t), i(o);
}), Ze("__e", function(i, o, t, e) {
  ho(), i(o, t, e);
}), Ze("diffed", function(i, o) {
  ho();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, A = o.props;
    if (e) {
      var g = t.U;
      if (g) for (var n in g) {
        var I = g[n];
        void (-1 * 870 + -1209 * -1 + 113 * -3) !== I && !(n in e) && (I.d(), g[n] = void (-3107 + -239 * -13));
      }
      else t.U = g = {};
      for (var a in e) {
        var r = g[a], B = e[a];
        void (-1484 + 3 * 626 + -394 * 1) === r ? (r = QQ(t, a, B, A), g[a] = r) : r.o(B, A);
      }
    }
  }
  i(o);
});
function QQ(i, o, t, e) {
  var A = o in i && i.ownerSVGElement === void 0, g = Fa(t);
  return { o: function(n, I) {
    g.value = n, e = I;
  }, d: fn(function() {
    var n = g.value.value;
    e[o] !== n && (e[o] = n, A ? i[o] = n : n ? i.setAttribute(o, n) : i.removeAttribute(o));
  }) };
}
Ze("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (87 * -29 + 37 * 246 + -3 * 2193);
        for (var A in e) {
          var g = e[A];
          g && g.d();
        }
      }
    }
  } else {
    var n = o.__c;
    if (n) {
      var I = n.__$u;
      I && (n.__$u = void (-8711 + 1 * 2179 + -4 * -1633), I.d());
    }
  }
  i(o);
}), Ze("__h", function(i, o, t, e) {
  (e < -9172 + 8443 * 1 + 732 || -47 + -8 * -7 === e) && (o.__$f |= 2 * -61 + -1495 + -1619 * -1), i(o, t, e);
}), JA.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && void (155 * 45 + -9925 + 59 * 50) !== t.s || -19 * -79 + -5013 + -3516 * -1 & this.__$f)) return !(-229 * 34 + -9294 + -3416 * -5);
  if (623 * 9 + -1 * 6594 + 3 * 330 & this.__$f) return !(5150 + 1 * 4490 + -9640);
  for (var e in o) return !(18 * -144 + -1 * -314 + -2278 * -1);
  for (var A in i) if (A !== "__source" && i[A] !== this.props[A]) return !(1 * 7294 + -2414 + -4880);
  for (var g in this.props) if (!(g in i)) return !0;
  return !(7 * -1366 + 3233 + 6330);
};
function _e(i) {
  return fA(function() {
    return Fa(i);
  }, []);
}
const cQ = async () => WebAssembly.validate(new Uint8Array([4284 + -87 * 66 + 1 * 1458, 97, 264 * -33 + -8 * -922 + 1451 * 1, -720 + 4891 * -1 + 5720, 2 * 1108 + 1472 + -3687, 1972 + 116 * -17, 0, -1678 + 839 * 2, 1, -2 * 186 + 1 * -3459 + 3836, 1 * -5435 + -142 * -42 + 11 * -48, 4158 + 2 * 4426 + -12914, 0, 1 * 8933 + -1037 * 9 + -1 * -401, -3624 + -1 * 8206 + 11953, 176 * -11 + 423 * -10 + -199 * -31, -4550 + 1 * 4742 + 2 * -95, -9251 + -1542 * -6, -11552 + -2888 * -4, -11 * -722 + 4714 * -2 + -2 * -748, -9278 + 7 * 67 + 8819, 5172 + 17 * 103 + -6922, 5550 + -245 * -25 + -1 * 11667, -7567 * -1 + -4131 + -3436, -2756 + -2 * 324 + 1 * 3469, 2341 * 1 + 187 * 24 + -6829, 4992 + 7 * -677, 83 * 21 + 6500 + -8228, -223 * -43 + 8198 + 11 * -1594, 3018 + -1460 * 2, 740 + -3259 * -1 + -3988]));
function xQ() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(-423 + 3493 * 1 + 3054 * -1);
}
function EQ() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = xQ();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function dQ(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
const Tg = {};
Tg.label = ">1m", Tg.time = 60;
const Pg = {};
Pg.label = ">45", Pg.time = 45;
const qg = {};
qg.label = ">30", qg.time = 30;
function R0(i, o = [Tg, Pg, qg]) {
  const t = o.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (i > e.time) return e.label;
  return "" + i;
}
const M0 = (i) => Math.round(i / 500) * 500 / (16230 + -2 * 7615), v0 = (i) => i ? i <= 1 ? Math.round(i * (-9251 + 191 * -4 + 223 * 45)) / (-1415 + -938 * 5 + 6125) : Math.round(i / (5 * -977 + -6123 + 11058)) * (-9347 * 1 + -8673 * -1 + 724) : 23 * 101 + -1 * -1688 + -4011, lQ = (i) => Math.round(i * 2) / 2;
async function Ja() {
  return await cQ() ? y0.SIMD : y0.NO_SIMD;
}
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ua = {}, L0 = {}, uQ = hQ;
function hQ(i, o) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, g = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(n, I) {
    t[e] = function(a) {
      if (g)
        if (g = !1, a)
          I(a);
        else {
          for (var r = new Array(arguments.length - 1), B = 0; B < r.length; )
            r[B++] = arguments[B];
          n.apply(null, r);
        }
    };
    try {
      i.apply(o || null, t);
    } catch (a) {
      g && (g = !1, I(a));
    }
  });
}
var Ya = {};
(function(i) {
  var o = i;
  o.length = function(n) {
    var I = n.length;
    if (!I)
      return 0;
    for (var a = 0; --I % 4 > 1 && n.charAt(I) === "="; )
      ++a;
    return Math.ceil(n.length * 3) / 4 - a;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  o.encode = function(n, I, a) {
    for (var r = null, B = [], C = 0, x = 0, Q; I < a; ) {
      var E = n[I++];
      switch (x) {
        case 0:
          B[C++] = t[E >> 2], Q = (E & 3) << 4, x = 1;
          break;
        case 1:
          B[C++] = t[Q | E >> 4], Q = (E & 15) << 2, x = 2;
          break;
        case 2:
          B[C++] = t[Q | E >> 6], B[C++] = t[E & 63], x = 0;
          break;
      }
      C > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, B)), C = 0);
    }
    return x && (B[C++] = t[Q], B[C++] = 61, x === 1 && (B[C++] = 61)), r ? (C && r.push(String.fromCharCode.apply(String, B.slice(0, C))), r.join("")) : String.fromCharCode.apply(String, B.slice(0, C));
  };
  var g = "invalid encoding";
  o.decode = function(n, I, a) {
    for (var r = a, B = 0, C, x = 0; x < n.length; ) {
      var Q = n.charCodeAt(x++);
      if (Q === 61 && B > 1)
        break;
      if ((Q = e[Q]) === void 0)
        throw Error(g);
      switch (B) {
        case 0:
          C = Q, B = 1;
          break;
        case 1:
          I[a++] = C << 2 | (Q & 48) >> 4, C = Q, B = 2;
          break;
        case 2:
          I[a++] = (C & 15) << 4 | (Q & 60) >> 2, C = Q, B = 3;
          break;
        case 3:
          I[a++] = (C & 3) << 6 | Q, B = 0;
          break;
      }
    }
    if (B === 1)
      throw Error(g);
    return a - r;
  }, o.test = function(n) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n);
  };
})(Ya);
var fQ = Ni;
function Ni() {
  this._listeners = {};
}
Ni.prototype.on = function(i, o, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
Ni.prototype.off = function(i, o) {
  if (i === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
Ni.prototype.emit = function(i) {
  var o = this._listeners[i];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var pQ = J0(J0);
function J0(i) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function A(a, r, B) {
      o[0] = a, r[B] = t[0], r[B + 1] = t[1], r[B + 2] = t[2], r[B + 3] = t[3];
    }
    function g(a, r, B) {
      o[0] = a, r[B] = t[3], r[B + 1] = t[2], r[B + 2] = t[1], r[B + 3] = t[0];
    }
    i.writeFloatLE = e ? A : g, i.writeFloatBE = e ? g : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], o[0];
    }
    function I(a, r) {
      return t[3] = a[r], t[2] = a[r + 1], t[1] = a[r + 2], t[0] = a[r + 3], o[0];
    }
    i.readFloatLE = e ? n : I, i.readFloatBE = e ? I : n;
  }() : function() {
    function o(e, A, g, n) {
      var I = A < 0 ? 1 : 0;
      if (I && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), g, n);
      else if (isNaN(A))
        e(2143289344, g, n);
      else if (A > 34028234663852886e22)
        e((I << 31 | 2139095040) >>> 0, g, n);
      else if (A < 11754943508222875e-54)
        e((I << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, g, n);
      else {
        var a = Math.floor(Math.log(A) / Math.LN2), r = Math.round(A * Math.pow(2, -a) * 8388608) & 8388607;
        e((I << 31 | a + 127 << 23 | r) >>> 0, g, n);
      }
    }
    i.writeFloatLE = o.bind(null, U0), i.writeFloatBE = o.bind(null, Y0);
    function t(e, A, g) {
      var n = e(A, g), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    i.readFloatLE = t.bind(null, W0), i.readFloatBE = t.bind(null, O0);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function A(a, r, B) {
      o[0] = a, r[B] = t[0], r[B + 1] = t[1], r[B + 2] = t[2], r[B + 3] = t[3], r[B + 4] = t[4], r[B + 5] = t[5], r[B + 6] = t[6], r[B + 7] = t[7];
    }
    function g(a, r, B) {
      o[0] = a, r[B] = t[7], r[B + 1] = t[6], r[B + 2] = t[5], r[B + 3] = t[4], r[B + 4] = t[3], r[B + 5] = t[2], r[B + 6] = t[1], r[B + 7] = t[0];
    }
    i.writeDoubleLE = e ? A : g, i.writeDoubleBE = e ? g : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], t[4] = a[r + 4], t[5] = a[r + 5], t[6] = a[r + 6], t[7] = a[r + 7], o[0];
    }
    function I(a, r) {
      return t[7] = a[r], t[6] = a[r + 1], t[5] = a[r + 2], t[4] = a[r + 3], t[3] = a[r + 4], t[2] = a[r + 5], t[1] = a[r + 6], t[0] = a[r + 7], o[0];
    }
    i.readDoubleLE = e ? n : I, i.readDoubleBE = e ? I : n;
  }() : function() {
    function o(e, A, g, n, I, a) {
      var r = n < 0 ? 1 : 0;
      if (r && (n = -n), n === 0)
        e(0, I, a + A), e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), I, a + g);
      else if (isNaN(n))
        e(0, I, a + A), e(2146959360, I, a + g);
      else if (n > 17976931348623157e292)
        e(0, I, a + A), e((r << 31 | 2146435072) >>> 0, I, a + g);
      else {
        var B;
        if (n < 22250738585072014e-324)
          B = n / 5e-324, e(B >>> 0, I, a + A), e((r << 31 | B / 4294967296) >>> 0, I, a + g);
        else {
          var C = Math.floor(Math.log(n) / Math.LN2);
          C === 1024 && (C = 1023), B = n * Math.pow(2, -C), e(B * 4503599627370496 >>> 0, I, a + A), e((r << 31 | C + 1023 << 20 | B * 1048576 & 1048575) >>> 0, I, a + g);
        }
      }
    }
    i.writeDoubleLE = o.bind(null, U0, 0, 4), i.writeDoubleBE = o.bind(null, Y0, 4, 0);
    function t(e, A, g, n, I) {
      var a = e(n, I + A), r = e(n, I + g), B = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, x = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? x ? NaN : B * (1 / 0) : C === 0 ? B * 5e-324 * x : B * Math.pow(2, C - 1075) * (x + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, W0, 0, 4), i.readDoubleBE = t.bind(null, O0, 4, 0);
  }(), i;
}
function U0(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
function Y0(i, o, t) {
  o[t] = i >>> 24, o[t + 1] = i >>> 16 & 255, o[t + 2] = i >>> 8 & 255, o[t + 3] = i & 255;
}
function W0(i, o) {
  return (i[o] | i[o + 1] << 8 | i[o + 2] << 16 | i[o + 3] << 24) >>> 0;
}
function O0(i, o) {
  return (i[o] << 24 | i[o + 1] << 16 | i[o + 2] << 8 | i[o + 3]) >>> 0;
}
function H0(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var yQ = DQ;
function DQ(i) {
  try {
    if (typeof H0 != "function")
      return null;
    var o = H0(i);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Wa = {};
(function(i) {
  var o = i;
  o.length = function(t) {
    for (var e = 0, A = 0, g = 0; g < t.length; ++g)
      A = t.charCodeAt(g), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(g + 1) & 64512) === 56320 ? (++g, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, A) {
    var g = A - e;
    if (g < 1)
      return "";
    for (var n = null, I = [], a = 0, r; e < A; )
      r = t[e++], r < 128 ? I[a++] = r : r > 191 && r < 224 ? I[a++] = (r & 31) << 6 | t[e++] & 63 : r > 239 && r < 365 ? (r = ((r & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, I[a++] = 55296 + (r >> 10), I[a++] = 56320 + (r & 1023)) : I[a++] = (r & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, I)), a = 0);
    return n ? (a && n.push(String.fromCharCode.apply(String, I.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, I.slice(0, a));
  }, o.write = function(t, e, A) {
    for (var g = A, n, I, a = 0; a < t.length; ++a)
      n = t.charCodeAt(a), n < 128 ? e[A++] = n : n < 2048 ? (e[A++] = n >> 6 | 192, e[A++] = n & 63 | 128) : (n & 64512) === 55296 && ((I = t.charCodeAt(a + 1)) & 64512) === 56320 ? (n = 65536 + ((n & 1023) << 10) + (I & 1023), ++a, e[A++] = n >> 18 | 240, e[A++] = n >> 12 & 63 | 128, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128) : (e[A++] = n >> 12 | 224, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128);
    return A - g;
  };
})(Wa);
var wQ = mQ;
function mQ(i, o, t) {
  var e = t || 8192, A = e >>> 1, g = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return i(I);
    n + I > e && (g = i(e), n = 0);
    var a = o.call(g, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var eg, K0;
function bQ() {
  if (K0)
    return eg;
  K0 = 1, eg = o;
  var i = Oe();
  function o(g, n) {
    this.lo = g >>> 0, this.hi = n >>> 0;
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
  o.fromNumber = function(g) {
    if (g === 0)
      return t;
    var n = g < 0;
    n && (g = -g);
    var I = g >>> 0, a = (g - I) / 4294967296 >>> 0;
    return n && (a = ~a >>> 0, I = ~I >>> 0, ++I > 4294967295 && (I = 0, ++a > 4294967295 && (a = 0))), new o(I, a);
  }, o.from = function(g) {
    if (typeof g == "number")
      return o.fromNumber(g);
    if (i.isString(g))
      if (i.Long)
        g = i.Long.fromString(g);
      else
        return o.fromNumber(parseInt(g, 10));
    return g.low || g.high ? new o(g.low >>> 0, g.high >>> 0) : t;
  }, o.prototype.toNumber = function(g) {
    if (!g && this.hi >>> 31) {
      var n = ~this.lo + 1 >>> 0, I = ~this.hi >>> 0;
      return n || (I = I + 1 >>> 0), -(n + I * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(g) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!g) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!g };
  };
  var A = String.prototype.charCodeAt;
  return o.fromHash = function(g) {
    return g === e ? t : new o(
      (A.call(g, 0) | A.call(g, 1) << 8 | A.call(g, 2) << 16 | A.call(g, 3) << 24) >>> 0,
      (A.call(g, 4) | A.call(g, 5) << 8 | A.call(g, 6) << 16 | A.call(g, 7) << 24) >>> 0
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
    var g = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ g) >>> 0, this.lo = (this.lo << 1 ^ g) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var g = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ g) >>> 0, this.hi = (this.hi >>> 1 ^ g) >>> 0, this;
  }, o.prototype.length = function() {
    var g = this.lo, n = (this.lo >>> 28 | this.hi << 4) >>> 0, I = this.hi >>> 24;
    return I === 0 ? n === 0 ? g < 16384 ? g < 128 ? 1 : 2 : g < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : I < 128 ? 9 : 10;
  }, eg;
}
var T0;
function Oe() {
  return T0 || (T0 = 1, function(i) {
    var o = i;
    o.asPromise = uQ, o.base64 = Ya, o.EventEmitter = fQ, o.float = pQ, o.inquire = yQ, o.utf8 = Wa, o.pool = wQ, o.LongBits = bQ(), o.isNode = !!(typeof fe < "u" && fe && fe.process && fe.process.versions && fe.process.versions.node), o.global = o.isNode && fe || typeof window < "u" && window || typeof self < "u" && self || fe, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    o.isSet = function(A, g) {
      var n = A[g];
      return n != null && A.hasOwnProperty(g) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
    }, o.Buffer = function() {
      try {
        var A = o.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(A) {
      return typeof A == "number" ? o.Buffer ? o._Buffer_allocUnsafe(A) : new o.Array(A) : o.Buffer ? o._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(A) {
      return A ? o.LongBits.from(A).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(A, g) {
      var n = o.LongBits.fromHash(A);
      return o.Long ? o.Long.fromBits(n.lo, n.hi, g) : n.toNumber(!!g);
    };
    function t(A, g, n) {
      for (var I = Object.keys(g), a = 0; a < I.length; ++a)
        (A[I[a]] === void 0 || !n) && (A[I[a]] = g[I[a]]);
      return A;
    }
    o.merge = t, o.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function g(n, I) {
        if (!(this instanceof g))
          return new g(n, I);
        Object.defineProperty(this, "message", { get: function() {
          return n;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, g) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), I && t(this, I);
      }
      return g.prototype = Object.create(Error.prototype, {
        constructor: {
          value: g,
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
      }), g;
    }
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(A) {
      for (var g = {}, n = 0; n < A.length; ++n)
        g[A[n]] = 1;
      return function() {
        for (var I = Object.keys(this), a = I.length - 1; a > -1; --a)
          if (g[I[a]] === 1 && this[I[a]] !== void 0 && this[I[a]] !== null)
            return I[a];
      };
    }, o.oneOfSetter = function(A) {
      return function(g) {
        for (var n = 0; n < A.length; ++n)
          A[n] !== g && delete this[A[n]];
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
      function(g, n) {
        return new A(g, n);
      }, o._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(g) {
        return new A(g);
      };
    };
  }(L0)), L0;
}
var Oa = W, UA = Oe(), jg, Fi = UA.LongBits, P0 = UA.base64, q0 = UA.utf8;
function ao(i, o, t) {
  this.fn = i, this.len = o, this.next = void 0, this.val = t;
}
function pn() {
}
function kQ(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function W() {
  this.len = 0, this.head = new ao(pn, 0, 0), this.tail = this.head, this.states = null;
}
var Ha = function() {
  return UA.Buffer ? function() {
    return (W.create = function() {
      return new jg();
    })();
  } : function() {
    return new W();
  };
};
W.create = Ha();
W.alloc = function(i) {
  return new UA.Array(i);
};
UA.Array !== Array && (W.alloc = UA.pool(W.alloc, UA.Array.prototype.subarray));
W.prototype._push = function(i, o, t) {
  return this.tail = this.tail.next = new ao(i, o, t), this.len += o, this;
};
function yn(i, o, t) {
  o[t] = i & 255;
}
function GQ(i, o, t) {
  for (; i > 127; )
    o[t++] = i & 127 | 128, i >>>= 7;
  o[t] = i;
}
function Dn(i, o) {
  this.len = i, this.next = void 0, this.val = o;
}
Dn.prototype = Object.create(ao.prototype);
Dn.prototype.fn = GQ;
W.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new Dn(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
W.prototype.int32 = function(i) {
  return i < 0 ? this._push(wn, 10, Fi.fromNumber(i)) : this.uint32(i);
};
W.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function wn(i, o, t) {
  for (; i.hi; )
    o[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    o[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  o[t++] = i.lo;
}
W.prototype.uint64 = function(i) {
  var o = Fi.from(i);
  return this._push(wn, o.length(), o);
};
W.prototype.int64 = W.prototype.uint64;
W.prototype.sint64 = function(i) {
  var o = Fi.from(i).zzEncode();
  return this._push(wn, o.length(), o);
};
W.prototype.bool = function(i) {
  return this._push(yn, 1, i ? 1 : 0);
};
function Zg(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
W.prototype.fixed32 = function(i) {
  return this._push(Zg, 4, i >>> 0);
};
W.prototype.sfixed32 = W.prototype.fixed32;
W.prototype.fixed64 = function(i) {
  var o = Fi.from(i);
  return this._push(Zg, 4, o.lo)._push(Zg, 4, o.hi);
};
W.prototype.sfixed64 = W.prototype.fixed64;
W.prototype.float = function(i) {
  return this._push(UA.float.writeFloatLE, 4, i);
};
W.prototype.double = function(i) {
  return this._push(UA.float.writeDoubleLE, 8, i);
};
var NQ = UA.Array.prototype.set ? function(i, o, t) {
  o.set(i, t);
} : function(i, o, t) {
  for (var e = 0; e < i.length; ++e)
    o[t + e] = i[e];
};
W.prototype.bytes = function(i) {
  var o = i.length >>> 0;
  if (!o)
    return this._push(yn, 1, 0);
  if (UA.isString(i)) {
    var t = W.alloc(o = P0.length(i));
    P0.decode(i, t, 0), i = t;
  }
  return this.uint32(o)._push(NQ, o, i);
};
W.prototype.string = function(i) {
  var o = q0.length(i);
  return o ? this.uint32(o)._push(q0.write, o, i) : this._push(yn, 1, 0);
};
W.prototype.fork = function() {
  return this.states = new kQ(this), this.head = this.tail = new ao(pn, 0, 0), this.len = 0, this;
};
W.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new ao(pn, 0, 0), this.len = 0), this;
};
W.prototype.ldelim = function() {
  var i = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = o, this.len += t), this;
};
W.prototype.finish = function() {
  for (var i = this.head.next, o = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, o, t), t += i.len, i = i.next;
  return o;
};
W._configure = function(i) {
  jg = i, W.create = Ha(), jg._configure();
};
var FQ = zA, Ka = Oa;
(zA.prototype = Object.create(Ka.prototype)).constructor = zA;
var Qe = Oe();
function zA() {
  Ka.call(this);
}
zA._configure = function() {
  zA.alloc = Qe._Buffer_allocUnsafe, zA.writeBytesBuffer = Qe.Buffer && Qe.Buffer.prototype instanceof Uint8Array && Qe.Buffer.prototype.set.name === "set" ? function(i, o, t) {
    o.set(i, t);
  } : function(i, o, t) {
    if (i.copy)
      i.copy(o, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        o[t++] = i[e++];
  };
};
zA.prototype.bytes = function(i) {
  Qe.isString(i) && (i = Qe._Buffer_from(i, "base64"));
  var o = i.length >>> 0;
  return this.uint32(o), o && this._push(zA.writeBytesBuffer, o, i), this;
};
function SQ(i, o, t) {
  i.length < 40 ? Qe.utf8.write(i, o, t) : o.utf8Write ? o.utf8Write(i, t) : o.write(i, t);
}
zA.prototype.string = function(i) {
  var o = Qe.Buffer.byteLength(i);
  return this.uint32(o), o && this._push(SQ, o, i), this;
};
zA._configure();
var Ta = AA, $A = Oe(), Vg, Pa = $A.LongBits, RQ = $A.utf8;
function KA(i, o) {
  return RangeError("index out of range: " + i.pos + " + " + (o || 1) + " > " + i.len);
}
function AA(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var j0 = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new AA(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new AA(i);
  throw Error("illegal buffer");
}, qa = function() {
  return $A.Buffer ? function(i) {
    return (AA.create = function(o) {
      return $A.Buffer.isBuffer(o) ? new Vg(o) : j0(o);
    })(i);
  } : j0;
};
AA.create = qa();
AA.prototype._slice = $A.Array.prototype.subarray || /* istanbul ignore next */
$A.Array.prototype.slice;
AA.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, KA(this, 10);
    return i;
  };
}();
AA.prototype.int32 = function() {
  return this.uint32() | 0;
};
AA.prototype.sint32 = function() {
  var i = this.uint32();
  return i >>> 1 ^ -(i & 1) | 0;
};
function tg() {
  var i = new Pa(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    if (i.lo = (i.lo | (this.buf[this.pos] & 127) << 28) >>> 0, i.hi = (i.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return i;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw KA(this);
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
    return i.lo = (i.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, i;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw KA(this);
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
  throw Error("invalid varint encoding");
}
AA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function gi(i, o) {
  return (i[o - 4] | i[o - 3] << 8 | i[o - 2] << 16 | i[o - 1] << 24) >>> 0;
}
AA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw KA(this, 4);
  return gi(this.buf, this.pos += 4);
};
AA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw KA(this, 4);
  return gi(this.buf, this.pos += 4) | 0;
};
function Z0() {
  if (this.pos + 8 > this.len)
    throw KA(this, 8);
  return new Pa(gi(this.buf, this.pos += 4), gi(this.buf, this.pos += 4));
}
AA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw KA(this, 4);
  var i = $A.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
AA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw KA(this, 4);
  var i = $A.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
AA.prototype.bytes = function() {
  var i = this.uint32(), o = this.pos, t = this.pos + i;
  if (t > this.len)
    throw KA(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
AA.prototype.string = function() {
  var i = this.bytes();
  return RQ.read(i, 0, i.length);
};
AA.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw KA(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw KA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
AA.prototype.skipType = function(i) {
  switch (i) {
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
      for (; (i = this.uint32() & 7) !== 4; )
        this.skipType(i);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + i + " at offset " + this.pos);
  }
  return this;
};
AA._configure = function(i) {
  Vg = i, AA.create = qa(), Vg._configure();
  var o = $A.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  $A.merge(AA.prototype, {
    int64: function() {
      return tg.call(this)[o](!1);
    },
    uint64: function() {
      return tg.call(this)[o](!0);
    },
    sint64: function() {
      return tg.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Z0.call(this)[o](!0);
    },
    sfixed64: function() {
      return Z0.call(this)[o](!1);
    }
  });
};
var MQ = Ye, ja = Ta;
(Ye.prototype = Object.create(ja.prototype)).constructor = Ye;
var V0 = Oe();
function Ye(i) {
  ja.call(this, i);
}
Ye._configure = function() {
  V0.Buffer && (Ye.prototype._slice = V0.Buffer.prototype.slice);
};
Ye.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Ye._configure();
var Za = {}, vQ = Ot, mn = Oe();
(Ot.prototype = Object.create(mn.EventEmitter.prototype)).constructor = Ot;
function Ot(i, o, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  mn.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
Ot.prototype.rpcCall = function i(o, t, e, A, g) {
  if (!A)
    throw TypeError("request must be specified");
  var n = this;
  if (!g)
    return mn.asPromise(i, n, o, t, e, A);
  if (!n.rpcImpl) {
    setTimeout(function() {
      g(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return n.rpcImpl(
      o,
      t[n.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(I, a) {
        if (I)
          return n.emit("error", I, o), g(I);
        if (a === null) {
          n.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(a instanceof e))
          try {
            a = e[n.responseDelimited ? "decodeDelimited" : "decode"](a);
          } catch (r) {
            return n.emit("error", r, o), g(r);
          }
        return n.emit("data", a, o), g(null, a);
      }
    );
  } catch (I) {
    n.emit("error", I, o), setTimeout(function() {
      g(I);
    }, 0);
    return;
  }
};
Ot.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var o = i;
  o.Service = vQ;
})(Za);
var LQ = {};
(function(i) {
  var o = i;
  o.build = "minimal", o.Writer = Oa, o.BufferWriter = FQ, o.Reader = Ta, o.BufferReader = MQ, o.util = Oe(), o.rpc = Za, o.roots = LQ, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(Ua);
var S = Ua;
const f = S.Reader, U = S.Writer, l = S.util, s = S.roots.default || (S.roots.default = {}), We = s.dot = (() => {
  const i = {};
  return i.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.token = l.newBuffer([]), o.prototype.iv = l.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = U.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new s.dot.Content();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            g.token = t.bytes();
            break;
          }
          case 2: {
            g.iv = t.bytes();
            break;
          }
          case 3: {
            g.schemaVersion = t.int32();
            break;
          }
          case 4: {
            g.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return g;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof s.dot.Content)
        return t;
      let e = new s.dot.Content();
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
  }(), i.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.images = l.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = U.create()), e.images != null && e.images.length)
          for (let g = 0; g < e.images.length; ++g)
            s.dot.Image.encode(e.images[g], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.images && n.images.length || (n.images = []), n.images.push(s.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              n.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let A = 0; A < e.images.length; ++A) {
            let g = s.dot.Image.verify(e.images[A]);
            if (g)
              return "images." + g;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new s.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let g = 0; g < e.images.length; ++g) {
            if (typeof e.images[g] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[g] = s.dot.Image.fromObject(e.images[g]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        if ((A.arrays || A.defaults) && (g.images = []), A.defaults && (g.metadata = null), e.images && e.images.length) {
          g.images = [];
          for (let n = 0; n < e.images.length; ++n)
            g.images[n] = s.dot.Image.toObject(e.images[n], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && g.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && s.dot.v4.WebMetadata.encode(A.web, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && s.dot.v4.AndroidMetadata.encode(A.android, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && s.dot.v4.IosMetadata.encode(A.ios, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.Metadata();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.platform = A.int32();
              break;
            }
            case 5: {
              I.sessionToken = A.string();
              break;
            }
            case 6: {
              I.componentVersion = A.string();
              break;
            }
            case 2: {
              I.web = s.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.android = s.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.ios = s.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let g = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (g._sessionToken = 1, !l.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !l.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          g.metadata = 1;
          {
            let n = s.dot.v4.WebMetadata.verify(A.web);
            if (n)
              return "web." + n;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (g.metadata === 1)
            return "metadata: multiple values";
          g.metadata = 1;
          {
            let n = s.dot.v4.AndroidMetadata.verify(A.android);
            if (n)
              return "android." + n;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (g.metadata === 1)
            return "metadata: multiple values";
          g.metadata = 1;
          {
            let n = s.dot.v4.IosMetadata.verify(A.ios);
            if (n)
              return "ios." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Metadata)
          return A;
        let g = new s.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              g.platform = A.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            g.platform = 0;
            break;
          case "ANDROID":
          case 1:
            g.platform = 1;
            break;
          case "IOS":
          case 2:
            g.platform = 2;
            break;
        }
        if (A.sessionToken != null && (g.sessionToken = String(A.sessionToken)), A.componentVersion != null && (g.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          g.web = s.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          g.android = s.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          g.ios = s.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.platform = g.enums === String ? "WEB" : 0, n.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (n.platform = g.enums === String ? s.dot.Platform[A.platform] === void 0 ? A.platform : s.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (n.web = s.dot.v4.WebMetadata.toObject(A.web, g), g.oneofs && (n.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (n.android = s.dot.v4.AndroidMetadata.toObject(A.android, g), g.oneofs && (n.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (n.ios = s.dot.v4.IosMetadata.toObject(A.ios, g), g.oneofs && (n.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n.sessionToken = A.sessionToken, g.oneofs && (n._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (n.componentVersion = A.componentVersion), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.supportedAbis = l.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.dynamicCameraFrameProperties = l.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null;
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
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        if (g || (g = U.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let n = 0; n < A.supportedAbis.length; ++n)
            g.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[n]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let n = 0; n < A.digests.length; ++n)
            g.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[n]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I)
            g.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n[I]), s.dot.Int32List.encode(A.dynamicCameraFrameProperties[n[I]], g.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            s.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && s.dot.v4.AndroidCamera.encode(A.camera, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && s.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && g.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && s.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.AndroidMetadata(), a, r;
        for (; A.pos < n; ) {
          let B = A.uint32();
          switch (B >>> 3) {
            case 1: {
              I.supportedAbis && I.supportedAbis.length || (I.supportedAbis = []), I.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              I.device = A.string();
              break;
            }
            case 6: {
              I.camera = s.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = s.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(s.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.dynamicCameraFrameProperties === l.emptyObject && (I.dynamicCameraFrameProperties = {});
              let C = A.uint32() + A.pos;
              for (a = "", r = null; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = s.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              I.dynamicCameraFrameProperties[a] = r;
              break;
            }
            case 8: {
              I.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              I.croppedYuv420Image = s.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(B & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let g = 0; g < A.supportedAbis.length; ++g)
            if (!l.isString(A.supportedAbis[g]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !l.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let g = s.dot.v4.AndroidCamera.verify(A.camera);
          if (g)
            return "camera." + g;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let g = s.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (g)
            return "detectionNormalizedRectangle." + g;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let g = 0; g < A.digests.length; ++g)
            if (!(A.digests[g] && typeof A.digests[g].length == "number" || l.isString(A.digests[g])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            let n = s.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[g]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let g = Object.keys(A.dynamicCameraFrameProperties);
          for (let n = 0; n < g.length; ++n) {
            let I = s.dot.Int32List.verify(A.dynamicCameraFrameProperties[g[n]]);
            if (I)
              return "dynamicCameraFrameProperties." + I;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let g = s.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (g)
            return "croppedYuv420Image." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.AndroidMetadata)
          return A;
        let g = new s.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          g.supportedAbis = [];
          for (let n = 0; n < A.supportedAbis.length; ++n)
            g.supportedAbis[n] = String(A.supportedAbis[n]);
        }
        if (A.device != null && (g.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          g.camera = s.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          g.detectionNormalizedRectangle = s.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          g.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? l.base64.decode(A.digests[n], g.digests[n] = l.newBuffer(l.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (g.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          g.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            g.digestsWithTimestamp[n] = s.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          g.dynamicCameraFrameProperties = {};
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I) {
            if (typeof A.dynamicCameraFrameProperties[n[I]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            g.dynamicCameraFrameProperties[n[I]] = s.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[n[I]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, g.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (g.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          g.croppedYuv420Image = s.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.supportedAbis = [], n.digests = [], n.digestsWithTimestamp = []), (g.objects || g.defaults) && (n.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          n.supportedAbis = [];
          for (let a = 0; a < A.supportedAbis.length; ++a)
            n.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (n.device = A.device, g.oneofs && (n._device = "device")), A.digests && A.digests.length) {
          n.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            n.digests[a] = g.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : g.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let I;
        if (A.dynamicCameraFrameProperties && (I = Object.keys(A.dynamicCameraFrameProperties)).length) {
          n.dynamicCameraFrameProperties = {};
          for (let a = 0; a < I.length; ++a)
            n.dynamicCameraFrameProperties[I[a]] = s.dot.Int32List.toObject(A.dynamicCameraFrameProperties[I[a]], g);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = s.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], g);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = s.dot.v4.AndroidCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = s.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (n.tamperingIndicators = g.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : g.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, g.oneofs && (n._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (n.croppedYuv420Image = s.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, g), g.oneofs && (n._croppedYuv420Image = "croppedYuv420Image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), o.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && s.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.AndroidCamera();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = s.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = s.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.AndroidCamera)
          return e;
        let A = new s.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = s.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.resolution = null, g.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (g.resolution = s.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (g.rotationDegrees = e.rotationDegrees), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), o.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && s.dot.ImageSize.encode(e.size, A.uint32(
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
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.Yuv420Image();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.size = s.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.yPlane = e.bytes();
              break;
            }
            case 3: {
              n.uPlane = e.bytes();
              break;
            }
            case 4: {
              n.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = s.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.Yuv420Image)
          return e;
        let A = new s.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = s.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.size = null, A.bytes === String ? g.yPlane = "" : (g.yPlane = [], A.bytes !== Array && (g.yPlane = l.newBuffer(g.yPlane))), A.bytes === String ? g.uPlane = "" : (g.uPlane = [], A.bytes !== Array && (g.uPlane = l.newBuffer(g.uPlane))), A.bytes === String ? g.vPlane = "" : (g.vPlane = [], A.bytes !== Array && (g.vPlane = l.newBuffer(g.vPlane)))), e.size != null && e.hasOwnProperty("size") && (g.size = s.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (g.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (g.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (g.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), o.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = l.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.isoValues = l.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: l.oneOfGetter(e = ["camera"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: l.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        if (g || (g = U.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let n = Object.keys(A.architectureInfo), I = 0; I < n.length; ++I)
            g.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n[I]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[n[I]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let n = 0; n < A.digests.length; ++n)
            g.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[n]);
        if (A.isoValues != null && A.isoValues.length) {
          g.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let n = 0; n < A.isoValues.length; ++n)
            g.int32(A.isoValues[n]);
          g.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            s.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && s.dot.v4.IosCamera.encode(A.camera, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && s.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.IosMetadata(), a, r;
        for (; A.pos < n; ) {
          let B = A.uint32();
          switch (B >>> 3) {
            case 1: {
              I.cameraModelId = A.string();
              break;
            }
            case 2: {
              I.architectureInfo === l.emptyObject && (I.architectureInfo = {});
              let C = A.uint32() + A.pos;
              for (a = "", r = !1; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = A.bool();
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              I.architectureInfo[a] = r;
              break;
            }
            case 6: {
              I.camera = s.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = s.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(s.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (I.isoValues && I.isoValues.length || (I.isoValues = []), (B & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  I.isoValues.push(A.int32());
              } else
                I.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(B & 7);
              break;
          }
        }
        return I;
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
          let g = Object.keys(A.architectureInfo);
          for (let n = 0; n < g.length; ++n)
            if (typeof A.architectureInfo[g[n]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let g = s.dot.v4.IosCamera.verify(A.camera);
          if (g)
            return "camera." + g;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let g = s.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (g)
            return "detectionNormalizedRectangle." + g;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let g = 0; g < A.digests.length; ++g)
            if (!(A.digests[g] && typeof A.digests[g].length == "number" || l.isString(A.digests[g])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            let n = s.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[g]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let g = 0; g < A.isoValues.length; ++g)
            if (!l.isInteger(A.isoValues[g]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.IosMetadata)
          return A;
        let g = new s.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (g.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          g.architectureInfo = {};
          for (let n = Object.keys(A.architectureInfo), I = 0; I < n.length; ++I)
            g.architectureInfo[n[I]] = !!A.architectureInfo[n[I]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          g.camera = s.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          g.detectionNormalizedRectangle = s.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          g.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? l.base64.decode(A.digests[n], g.digests[n] = l.newBuffer(l.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (g.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          g.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            g.digestsWithTimestamp[n] = s.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          g.isoValues = [];
          for (let n = 0; n < A.isoValues.length; ++n)
            g.isoValues[n] = A.isoValues[n] | 0;
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        (g.arrays || g.defaults) && (n.digests = [], n.isoValues = [], n.digestsWithTimestamp = []), (g.objects || g.defaults) && (n.architectureInfo = {}), g.defaults && (n.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (n.cameraModelId = A.cameraModelId);
        let I;
        if (A.architectureInfo && (I = Object.keys(A.architectureInfo)).length) {
          n.architectureInfo = {};
          for (let a = 0; a < I.length; ++a)
            n.architectureInfo[I[a]] = A.architectureInfo[I[a]];
        }
        if (A.digests && A.digests.length) {
          n.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            n.digests[a] = g.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : g.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          n.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            n.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = s.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], g);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = s.dot.v4.IosCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = s.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), o.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && s.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.IosCamera();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = s.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = s.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.IosCamera)
          return e;
        let A = new s.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = s.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.resolution = null, g.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (g.resolution = s.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (g.rotationDegrees = e.rotationDegrees), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), o.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: l.oneOfGetter(e = ["croppedImage"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        if (g || (g = U.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && s.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let n = 0; n < A.availableCameraProperties.length; ++n)
            s.dot.v4.CameraProperties.encode(A.availableCameraProperties[n], g.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            g.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[n]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let n = 0; n < A.detectionRecord.length; ++n)
            s.dot.v4.DetectedObject.encode(A.detectionRecord[n], g.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n)
            s.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && s.dot.Image.encode(A.croppedImage, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.WebMetadata();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.currentCameraProperties = s.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.availableCameraProperties && I.availableCameraProperties.length || (I.availableCameraProperties = []), I.availableCameraProperties.push(s.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              I.hashedDetectedImages && I.hashedDetectedImages.length || (I.hashedDetectedImages = []), I.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              I.hashedDetectedImagesWithTimestamp && I.hashedDetectedImagesWithTimestamp.length || (I.hashedDetectedImagesWithTimestamp = []), I.hashedDetectedImagesWithTimestamp.push(s.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.detectionRecord && I.detectionRecord.length || (I.detectionRecord = []), I.detectionRecord.push(s.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              I.croppedImage = s.dot.Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let g = s.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (g)
            return "currentCameraProperties." + g;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let g = 0; g < A.availableCameraProperties.length; ++g) {
            let n = s.dot.v4.CameraProperties.verify(A.availableCameraProperties[g]);
            if (n)
              return "availableCameraProperties." + n;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            if (!l.isString(A.hashedDetectedImages[g]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g) {
            let n = s.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[g]);
            if (n)
              return "hashedDetectedImagesWithTimestamp." + n;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let g = 0; g < A.detectionRecord.length; ++g) {
            let n = s.dot.v4.DetectedObject.verify(A.detectionRecord[g]);
            if (n)
              return "detectionRecord." + n;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let g = s.dot.Image.verify(A.croppedImage);
          if (g)
            return "croppedImage." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.WebMetadata)
          return A;
        let g = new s.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          g.currentCameraProperties = s.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          g.availableCameraProperties = [];
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            if (typeof A.availableCameraProperties[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            g.availableCameraProperties[n] = s.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[n]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          g.hashedDetectedImages = [];
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            g.hashedDetectedImages[n] = String(A.hashedDetectedImages[n]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          g.hashedDetectedImagesWithTimestamp = [];
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            if (typeof A.hashedDetectedImagesWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            g.hashedDetectedImagesWithTimestamp[n] = s.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[n]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          g.detectionRecord = [];
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            if (typeof A.detectionRecord[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            g.detectionRecord[n] = s.dot.v4.DetectedObject.fromObject(A.detectionRecord[n]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          g.croppedImage = s.dot.Image.fromObject(A.croppedImage);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.availableCameraProperties = [], n.hashedDetectedImages = [], n.detectionRecord = [], n.hashedDetectedImagesWithTimestamp = []), g.defaults && (n.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (n.currentCameraProperties = s.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, g)), A.availableCameraProperties && A.availableCameraProperties.length) {
          n.availableCameraProperties = [];
          for (let I = 0; I < A.availableCameraProperties.length; ++I)
            n.availableCameraProperties[I] = s.dot.v4.CameraProperties.toObject(A.availableCameraProperties[I], g);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          n.hashedDetectedImages = [];
          for (let I = 0; I < A.hashedDetectedImages.length; ++I)
            n.hashedDetectedImages[I] = A.hashedDetectedImages[I];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          n.detectionRecord = [];
          for (let I = 0; I < A.detectionRecord.length; ++I)
            n.detectionRecord[I] = s.dot.v4.DetectedObject.toObject(A.detectionRecord[I], g);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          n.hashedDetectedImagesWithTimestamp = [];
          for (let I = 0; I < A.hashedDetectedImagesWithTimestamp.length; ++I)
            n.hashedDetectedImagesWithTimestamp[I] = s.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[I], g);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (n.croppedImage = s.dot.Image.toObject(A.croppedImage, g), g.oneofs && (n._croppedImage = "croppedImage")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), o.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.imageHash = e.string();
              break;
            }
            case 2: {
              n.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !l.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new s.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        if (A.defaults)
          if (g.imageHash = "", l.Long) {
            let n = new l.Long(0, 0, !0);
            g.timestampMillis = A.longs === String ? n.toString() : A.longs === Number ? n.toNumber() : n;
          } else
            g.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (g.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? g.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : g.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && g.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && g.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && g.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && g.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && g.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && g.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && g.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && g.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && g.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && g.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && g.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.MediaTrackSettings();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.aspectRatio = A.double();
              break;
            }
            case 2: {
              I.autoGainControl = A.bool();
              break;
            }
            case 3: {
              I.channelCount = A.int32();
              break;
            }
            case 4: {
              I.deviceId = A.string();
              break;
            }
            case 5: {
              I.displaySurface = A.string();
              break;
            }
            case 6: {
              I.echoCancellation = A.bool();
              break;
            }
            case 7: {
              I.facingMode = A.string();
              break;
            }
            case 8: {
              I.frameRate = A.double();
              break;
            }
            case 9: {
              I.groupId = A.string();
              break;
            }
            case 10: {
              I.height = A.int32();
              break;
            }
            case 11: {
              I.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              I.sampleRate = A.int32();
              break;
            }
            case 13: {
              I.sampleSize = A.int32();
              break;
            }
            case 14: {
              I.width = A.int32();
              break;
            }
            case 15: {
              I.deviceName = A.string();
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !l.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !l.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !l.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !l.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !l.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !l.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !l.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !l.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.MediaTrackSettings)
          return A;
        let g = new s.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (g.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (g.autoGainControl = !!A.autoGainControl), A.channelCount != null && (g.channelCount = A.channelCount | 0), A.deviceId != null && (g.deviceId = String(A.deviceId)), A.displaySurface != null && (g.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (g.echoCancellation = !!A.echoCancellation), A.facingMode != null && (g.facingMode = String(A.facingMode)), A.frameRate != null && (g.frameRate = Number(A.frameRate)), A.groupId != null && (g.groupId = String(A.groupId)), A.height != null && (g.height = A.height | 0), A.noiseSuppression != null && (g.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (g.sampleRate = A.sampleRate | 0), A.sampleSize != null && (g.sampleSize = A.sampleSize | 0), A.width != null && (g.width = A.width | 0), A.deviceName != null && (g.deviceName = String(A.deviceName)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (n.aspectRatio = g.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, g.oneofs && (n._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (n.autoGainControl = A.autoGainControl, g.oneofs && (n._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (n.channelCount = A.channelCount, g.oneofs && (n._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (n.deviceId = A.deviceId, g.oneofs && (n._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (n.displaySurface = A.displaySurface, g.oneofs && (n._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (n.echoCancellation = A.echoCancellation, g.oneofs && (n._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (n.facingMode = A.facingMode, g.oneofs && (n._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (n.frameRate = g.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, g.oneofs && (n._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (n.groupId = A.groupId, g.oneofs && (n._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (n.height = A.height, g.oneofs && (n._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (n.noiseSuppression = A.noiseSuppression, g.oneofs && (n._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (n.sampleRate = A.sampleRate, g.oneofs && (n._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (n.sampleSize = A.sampleSize, g.oneofs && (n._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (n.width = A.width, g.oneofs && (n._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (n.deviceName = A.deviceName, g.oneofs && (n._deviceName = "deviceName")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), o.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.ImageBitmap();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.width = e.int32();
              break;
            }
            case 2: {
              n.height = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.ImageBitmap)
          return e;
        let A = new s.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.width = 0, g.height = 0), e.width != null && e.hasOwnProperty("width") && (g.width = e.width), e.height != null && e.hasOwnProperty("height") && (g.height = e.height), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), o.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && s.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && s.dot.v4.MediaTrackSettings.encode(A.cameraProperties, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.CameraProperties();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.cameraInitFrameResolution = s.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.cameraProperties = s.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let g = s.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (g)
            return "cameraInitFrameResolution." + g;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let g = s.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (g)
            return "cameraProperties." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.CameraProperties)
          return A;
        let g = new s.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          g.cameraInitFrameResolution = s.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          g.cameraProperties = s.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (n.cameraInitFrameResolution = s.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, g), g.oneofs && (n._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (n.cameraProperties = s.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, g)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), o.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && s.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && s.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && s.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && s.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && s.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.DetectedObject();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.brightness = e.float();
              break;
            }
            case 2: {
              n.sharpness = e.float();
              break;
            }
            case 3: {
              n.hotspots = e.float();
              break;
            }
            case 4: {
              n.confidence = e.float();
              break;
            }
            case 5: {
              n.faceSize = e.float();
              break;
            }
            case 6: {
              n.faceCenter = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              n.smallestEdge = e.float();
              break;
            }
            case 8: {
              n.bottomLeft = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              n.bottomRight = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              n.topLeft = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              n.topRight = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
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
          let A = s.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = s.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = s.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = s.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = s.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DetectedObject)
          return e;
        let A = new s.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = s.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = s.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = s.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = s.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = s.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.brightness = 0, g.sharpness = 0, g.hotspots = 0, g.confidence = 0, g.faceSize = 0, g.faceCenter = null, g.smallestEdge = 0, g.bottomLeft = null, g.bottomRight = null, g.topLeft = null, g.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (g.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (g.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (g.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (g.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (g.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (g.faceCenter = s.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (g.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (g.bottomLeft = s.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (g.bottomRight = s.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (g.topLeft = s.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (g.topRight = s.dot.v4.Point.toObject(e.topRight, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), o.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.Point();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.x = e.float();
              break;
            }
            case 2: {
              n.y = e.float();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.Point)
          return e;
        let A = new s.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.x = 0, g.y = 0), e.x != null && e.hasOwnProperty("x") && (g.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (g.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), o.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.FaceContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.FaceContent)
          return e;
        let A = new s.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), o.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.DocumentContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DocumentContent)
          return e;
        let A = new s.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && s.dot.v4.DocumentContent.encode(A.documentContent, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && s.dot.v4.FaceContent.encode(A.faceContent, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && s.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && s.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && s.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && s.dot.v4.PalmContent.encode(A.palmContent, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && s.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.Blob();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.documentContent = s.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.faceContent = s.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.smileLivenessContent = s.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.palmContent = s.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.travelDocumentContent = s.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let g = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          g.blob = 1;
          {
            let n = s.dot.v4.DocumentContent.verify(A.documentContent);
            if (n)
              return "documentContent." + n;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = s.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (n)
              return "eyeGazeLivenessContent." + n;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = s.dot.v4.FaceContent.verify(A.faceContent);
            if (n)
              return "faceContent." + n;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = s.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (n)
              return "magnifeyeLivenessContent." + n;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = s.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (n)
              return "smileLivenessContent." + n;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = s.dot.v4.PalmContent.verify(A.palmContent);
            if (n)
              return "palmContent." + n;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = s.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (n)
              return "travelDocumentContent." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Blob)
          return A;
        let g = new s.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          g.documentContent = s.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          g.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          g.faceContent = s.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          g.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          g.smileLivenessContent = s.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          g.palmContent = s.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          g.travelDocumentContent = s.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (n.documentContent = s.dot.v4.DocumentContent.toObject(A.documentContent, g), g.oneofs && (n.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (n.faceContent = s.dot.v4.FaceContent.toObject(A.faceContent, g), g.oneofs && (n.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (n.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, g), g.oneofs && (n.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (n.smileLivenessContent = s.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, g), g.oneofs && (n.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (n.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, g), g.oneofs && (n.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (n.palmContent = s.dot.v4.PalmContent.toObject(A.palmContent, g), g.oneofs && (n.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (n.travelDocumentContent = s.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, g), g.oneofs && (n.blob = "travelDocumentContent")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), o.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && s.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && s.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.TravelDocumentContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.ldsMasterFile = s.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              n.authenticationStatus = s.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              n.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = s.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = s.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.TravelDocumentContent)
          return e;
        let A = new s.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = s.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = s.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.ldsMasterFile = null, g.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, g.authenticationStatus = null, g.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (g.ldsMasterFile = s.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (g.accessControlProtocolUsed = A.enums === String ? s.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : s.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (g.authenticationStatus = s.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), o.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && s.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.LdsMasterFile();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = s.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.LdsMasterFile)
          return e;
        let A = new s.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (g.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), o.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && s.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && s.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && s.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && s.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && s.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && s.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && s.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && s.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, g.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, g.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, g.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, g.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, g.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, g.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && s.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, g.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && s.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, g.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && s.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, g.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              I.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              I.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              I.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              I.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              I.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              I.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              I.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              I.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              I.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              I.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (g)
            return "comHeaderAndDataGroupPresenceInformation." + g;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (g)
            return "sodDocumentSecurityObject." + g;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (g)
            return "dg1MachineReadableZoneInformation." + g;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (g)
            return "dg2EncodedIdentificationFeaturesFace." + g;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (g)
            return "dg3AdditionalIdentificationFeatureFingers." + g;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (g)
            return "dg4AdditionalIdentificationFeatureIrises." + g;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (g)
            return "dg5DisplayedPortrait." + g;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (g)
            return "dg7DisplayedSignatureOrUsualMark." + g;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (g)
            return "dg8DataFeatures." + g;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (g)
            return "dg9StructureFeatures." + g;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (g)
            return "dg10SubstanceFeatures." + g;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (g)
            return "dg11AdditionalPersonalDetails." + g;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (g)
            return "dg12AdditionalDocumentDetails." + g;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (g)
            return "dg13OptionalDetails." + g;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (g)
            return "dg14SecurityOptions." + g;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (g)
            return "dg15ActiveAuthenticationPublicKeyInfo." + g;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let g = s.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (g)
            return "dg16PersonsToNotify." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Lds1eMrtdApplication)
          return A;
        let g = new s.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          g.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          g.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          g.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          g.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          g.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          g.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          g.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          g.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          g.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          g.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          g.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          g.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          g.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          g.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          g.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          g.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          g.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.comHeaderAndDataGroupPresenceInformation = null, n.sodDocumentSecurityObject = null, n.dg1MachineReadableZoneInformation = null, n.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (n.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, g)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (n.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, g)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (n.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, g)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (n.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, g)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (n.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, g), g.oneofs && (n._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (n.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, g), g.oneofs && (n._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (n.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, g), g.oneofs && (n._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (n.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, g), g.oneofs && (n._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (n.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, g), g.oneofs && (n._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (n.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, g), g.oneofs && (n._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (n.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, g), g.oneofs && (n._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (n.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, g), g.oneofs && (n._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (n.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, g), g.oneofs && (n._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (n.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, g), g.oneofs && (n._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (n.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, g), g.oneofs && (n._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (n.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, g), g.oneofs && (n._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (n.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, g), g.oneofs && (n._dg16PersonsToNotify = "dg16PersonsToNotify")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), o.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: l.oneOfGetter(e = ["bytes"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && g.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.Lds1ElementaryFile();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.id = A.int32();
              break;
            }
            case 2: {
              I.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
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
        if (A instanceof s.dot.v4.Lds1ElementaryFile)
          return A;
        let g = new s.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              g.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            g.id = 0;
            break;
          case "ID_COM":
          case 1:
            g.id = 1;
            break;
          case "ID_SOD":
          case 2:
            g.id = 2;
            break;
          case "ID_DG1":
          case 3:
            g.id = 3;
            break;
          case "ID_DG2":
          case 4:
            g.id = 4;
            break;
          case "ID_DG3":
          case 5:
            g.id = 5;
            break;
          case "ID_DG4":
          case 6:
            g.id = 6;
            break;
          case "ID_DG5":
          case 7:
            g.id = 7;
            break;
          case "ID_DG7":
          case 8:
            g.id = 8;
            break;
          case "ID_DG8":
          case 9:
            g.id = 9;
            break;
          case "ID_DG9":
          case 10:
            g.id = 10;
            break;
          case "ID_DG10":
          case 11:
            g.id = 11;
            break;
          case "ID_DG11":
          case 12:
            g.id = 12;
            break;
          case "ID_DG12":
          case 13:
            g.id = 13;
            break;
          case "ID_DG13":
          case 14:
            g.id = 14;
            break;
          case "ID_DG14":
          case 15:
            g.id = 15;
            break;
          case "ID_DG15":
          case 16:
            g.id = 16;
            break;
          case "ID_DG16":
          case 17:
            g.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, g.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (g.bytes = A.bytes)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.id = g.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (n.id = g.enums === String ? s.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : s.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (n.bytes = g.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : g.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, g.oneofs && (n._bytes = "bytes")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, g = Object.create(A);
        return g[A[0] = "ID_UNSPECIFIED"] = 0, g[A[1] = "ID_COM"] = 1, g[A[2] = "ID_SOD"] = 2, g[A[3] = "ID_DG1"] = 3, g[A[4] = "ID_DG2"] = 4, g[A[5] = "ID_DG3"] = 5, g[A[6] = "ID_DG4"] = 6, g[A[7] = "ID_DG5"] = 7, g[A[8] = "ID_DG7"] = 8, g[A[9] = "ID_DG8"] = 9, g[A[10] = "ID_DG9"] = 10, g[A[11] = "ID_DG10"] = 11, g[A[12] = "ID_DG11"] = 12, g[A[13] = "ID_DG12"] = 13, g[A[14] = "ID_DG13"] = 14, g[A[15] = "ID_DG14"] = 15, g[A[16] = "ID_DG15"] = 16, g[A[17] = "ID_DG16"] = 17, g;
      }(), t;
    }(), o.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), o.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && s.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && s.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.AuthenticationStatus();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.data = s.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.chip = s.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = s.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = s.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.AuthenticationStatus)
          return e;
        let A = new s.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = s.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = s.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.data = null, g.chip = null), e.data != null && e.hasOwnProperty("data") && (g.data = s.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (g.chip = s.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), o.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.DataAuthenticationStatus();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.status = e.int32();
              break;
            }
            case 2: {
              n.protocol = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
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
        if (e instanceof s.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new s.dot.v4.DataAuthenticationStatus();
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
        let g = {};
        return A.defaults && (g.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, g.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (g.status = A.enums === String ? s.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : s.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (g.protocol = A.enums === String ? s.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : s.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      }(), t.Protocol = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      }(), t;
    }(), o.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = U.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && g.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && g.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.status = A.int32();
              break;
            }
            case 2: {
              I.protocol = A.int32();
              break;
            }
            case 3: {
              I.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
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
        if (A instanceof s.dot.v4.ChipAuthenticationStatus)
          return A;
        let g = new s.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              g.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            g.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            g.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            g.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            g.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              g.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            g.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            g.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            g.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            g.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, g.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (g.activeAuthenticationResponse = A.activeAuthenticationResponse)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.status = g.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (n.status = g.enums === String ? s.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : s.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (n.protocol = g.enums === String ? s.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : s.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, g.oneofs && (n._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (n.activeAuthenticationResponse = g.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : g.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, g.oneofs && (n._activeAuthenticationResponse = "activeAuthenticationResponse")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, g = Object.create(A);
        return g[A[0] = "STATUS_UNSPECIFIED"] = 0, g[A[1] = "STATUS_AUTHENTICATED"] = 1, g[A[2] = "STATUS_DENIED"] = 2, g[A[3] = "STATUS_NOT_SUPPORTED"] = 3, g;
      }(), t.Protocol = function() {
        const A = {}, g = Object.create(A);
        return g[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, g[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, g[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, g[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, g;
      }(), t;
    }(), o.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.image = null, t.prototype.segments = l.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: l.oneOfGetter(e = ["image"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        if (g || (g = U.create()), A.segments != null && A.segments.length)
          for (let n = 0; n < A.segments.length; ++n)
            s.dot.v4.EyeGazeLivenessSegment.encode(A.segments[n], g.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && s.dot.v4.Metadata.encode(A.metadata, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && s.dot.Image.encode(A.image, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new s.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 3: {
              I.image = s.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              I.segments && I.segments.length || (I.segments = []), I.segments.push(s.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              I.metadata = s.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let g = s.dot.Image.verify(A.image);
          if (g)
            return "image." + g;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let g = 0; g < A.segments.length; ++g) {
            let n = s.dot.v4.EyeGazeLivenessSegment.verify(A.segments[g]);
            if (n)
              return "segments." + n;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let g = s.dot.v4.Metadata.verify(A.metadata);
          if (g)
            return "metadata." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.EyeGazeLivenessContent)
          return A;
        let g = new s.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          g.image = s.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          g.segments = [];
          for (let n = 0; n < A.segments.length; ++n) {
            if (typeof A.segments[n] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            g.segments[n] = s.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[n]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          g.metadata = s.dot.v4.Metadata.fromObject(A.metadata);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.segments = []), g.defaults && (n.metadata = null), A.segments && A.segments.length) {
          n.segments = [];
          for (let I = 0; I < A.segments.length; ++I)
            n.segments[I] = s.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[I], g);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(A.metadata, g)), A.image != null && A.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(A.image, g), g.oneofs && (n._image = "image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), o.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.corner = e.int32();
              break;
            }
            case 2: {
              n.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
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
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new s.dot.v4.EyeGazeLivenessSegment();
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
          A.image = s.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.corner = A.enums === String ? "TOP_LEFT" : 0, g.image = null), e.corner != null && e.hasOwnProperty("corner") && (g.corner = A.enums === String ? s.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : s.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (g.image = s.dot.Image.toObject(e.image, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), o.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), o.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && s.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && s.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.SmileLivenessContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.neutralExpressionFaceImage = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.smileExpressionFaceImage = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              n.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let A = s.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = s.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.SmileLivenessContent)
          return e;
        let A = new s.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = s.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = s.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.neutralExpressionFaceImage = null, g.smileExpressionFaceImage = null, g.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (g.neutralExpressionFaceImage = s.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (g.smileExpressionFaceImage = s.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = U.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new s.dot.v4.PalmContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.PalmContent)
          return e;
        let A = new s.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), o;
  }(), i.Image = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = U.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new s.dot.Image();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            g.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return g;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof s.dot.Image)
        return t;
      let e = new s.dot.Image();
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
  }(), i.ImageSize = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.width = 0, o.prototype.height = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = U.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new s.dot.ImageSize();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            g.width = t.int32();
            break;
          }
          case 2: {
            g.height = t.int32();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return g;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof s.dot.ImageSize)
        return t;
      let e = new s.dot.ImageSize();
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
  }(), i.Int32List = function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.items = l.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = U.create()), t.items != null && t.items.length) {
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
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new s.dot.Int32List();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            if (g.items && g.items.length || (g.items = []), (n & 7) === 2) {
              let I = t.uint32() + t.pos;
              for (; t.pos < I; )
                g.items.push(t.int32());
            } else
              g.items.push(t.int32());
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return g;
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
      if (t instanceof s.dot.Int32List)
        return t;
      let e = new s.dot.Int32List();
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
        for (let g = 0; g < t.items.length; ++g)
          A.items[g] = t.items[g];
      }
      return A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  }(), i.Platform = function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  }(), i.RectangleDouble = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.left = 0, o.prototype.top = 0, o.prototype.right = 0, o.prototype.bottom = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = U.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new s.dot.RectangleDouble();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            g.left = t.double();
            break;
          }
          case 2: {
            g.top = t.double();
            break;
          }
          case 3: {
            g.right = t.double();
            break;
          }
          case 4: {
            g.bottom = t.double();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return g;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof s.dot.RectangleDouble)
        return t;
      let e = new s.dot.RectangleDouble();
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
  }(), i.DigestWithTimestamp = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.digest = l.newBuffer([]), o.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = U.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new s.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            g.digest = t.bytes();
            break;
          }
          case 2: {
            g.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return g;
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof s.dot.DigestWithTimestamp)
        return t;
      let e = new s.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, e.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = l.newBuffer(A.digest))), l.Long) {
          let g = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? g.toString() : e.longs === Number ? g.toNumber() : g;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), i;
})();
(function(i, o) {
  function t(a, r, B, C, x) {
    return X(C - -68, r);
  }
  function e(a, r, B, C, x) {
    return X(x - -88, C);
  }
  function A(a, r, B, C, x) {
    return X(x - 227, B);
  }
  function g(a, r, B, C, x) {
    return X(x - -617, C);
  }
  function n(a, r, B, C, x) {
    return X(x - -314, a);
  }
  const I = i();
  for (; ; )
    try {
      if (parseInt(n("B*XZ", 29, 65, 23, 45)) / 1 + -parseInt(n("sHfT", 39, 53, 28, 51)) / 2 * (parseInt(n("87H8", 36, 15, 35, 34)) / 3) + -parseInt(e(267, 264, 288, "USP#", 278)) / 4 * (parseInt(t(337, "sHfT", 316, 320, 298)) / 5) + -parseInt(t(290, "n6nW", 296, 304, 302)) / 6 + parseInt(n("87H8", 64, 60, 94, 70)) / 7 * (parseInt(e(310, 290, 286, "VcD%", 286)) / 8) + -parseInt(A(638, 610, "%k37", 638, 614)) / 9 * (parseInt(e(280, 278, 245, "B[nQ", 259)) / 10) + parseInt(g(-245, -248, -247, "jhTo", -265)) / 11 * (parseInt(t(291, "TrbA", 309, 300, 309)) / 12) === o) break;
      I.push(I.shift());
    } catch {
      I.push(I.shift());
    }
})(ni, -47251 * 5 + 299799 + 837739 * 1);
function ni() {
  const i = ["mCoLW5lcSmoc", "zbBcNcPMWPZdKd/dS3RcS8knWP0", "BXtcNcLGWP3dLc7dG33cR8kcWRC", "i8oEW4NdHeG", "xCoFBfWrfJ1zkmkF", "gCkygSktEW", "WP1lsr1TnNfjnsRdT8oUFG", "dSo5xsi", "WQ3dH3DHW7nzpmkrzrixEW", "dSkfpbyC", "cmkzjHqr", "n0NdI8kfWRu", "W4ZdSsZcL8o4bqH4W68", "W4dcQ8oSDCoKgSoGz8kBvSk6W7xdNq", "nqGQg8oYqmoNW7NdUW", "EmoFFvbPc2FcNX3dGXPJWOdcHG", "Frbm", "oSoGWRZcHSoP", "DXLausm", "qSo5sYv6tSkMAXxdLqldJmo8", "W4FdKCkOmmkKESk5", "t8oesCkvzN7cMCkVtq", "W5rjWPmqeCkMWOO/D8kVWRFcMbq", "W701xmkMqW", "n8k7WRKw", "lCozWQdcJW", "WOLTAIjR", "ov7cLqO", "n0ZdICkn", "AdOh", "WRW6W5LekrtdQCkn", "WQmgW47dP14CWPD9W6ucfdC", "WQBdSSovWOfQWQaVaCkng3xcM8ksW7q", "omo+DrSs", "W7uyW7/dUSokpXxdR8opW4GdW7m5", "W43cHg7cRCozfIO", "cxZcQmondW", "WPvaqHLHnxDKaItdISoprG", "WQxdTCkNW6yAW7DSFa", "mKFcIaaK", "W7tcKdS", "iSk8WRqpW4S", "wIZcQr7cLq", "j0vmubDzWRNdKq", "WQCaW4JdRXXpWOXGW5qb", "bMVcV8oAdW", "xCo5cLdcRW", "g8ktdCkZyW", "ymo4WPmRW6bnWR91"];
  return ni = function() {
    return i;
  }, ni();
}
async function JQ() {
  const i = {};
  i[g(1146, 1124, "4nJw", 1159, 1134)] = ra, i[g(1102, 1098, "pTC9", 1126, 1103) + "h"] = 256;
  const o = await window[a(509, 530, "pTC9", 508, 517) + "o"][a(457, 485, "kNRy", 465, 478) + "e"][g(1143, 1120, "Grds", 1145, 1130) + g(1103, 1097, "xS2[", 1129, 1110) + "y"](i, !0, [I(1171, 1187, 1191, 1175, "VcD%") + "pt", g(1111, 1101, "sT*q", 1116, 1107) + "pt"]);
  function t(B, C, x, Q, E) {
    return X(C - 597, B);
  }
  const e = Uint8Array[r("jhTo", 254, 255, 278, 268)](Array(5533 + -2 * 4954 + 4391)[g(1106, 1122, "xk$v", 1108, 1114)](0)), A = window[I(1185, 1192, 1176, 1196, "^Zj!") + "o"][r("VcD%", 251, 251, 266, 242) + g(1120, 1128, "Y8VU", 1134, 1118) + I(1176, 1195, 1173, 1188, "B[nQ")](e);
  function g(B, C, x, Q, E) {
    return X(E - 754, x);
  }
  const n = {};
  function I(B, C, x, Q, E) {
    return X(Q - 817, E);
  }
  function a(B, C, x, Q, E) {
    return X(E - 128, x);
  }
  function r(B, C, x, Q, E) {
    return X(E - -109, B);
  }
  return n[t("nWJ$", 941)] = o, n.iv = A, n;
}
function X(i, o) {
  const t = ni();
  return X = function(e, A) {
    e = e - (-4034 + -1 * 7924 + 12299);
    let g = t[e];
    if (X.gvGbtF === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      X.EYwPrj = B, i = arguments, X.gvGbtF = !0;
    }
    const I = t[-6662 * -1 + 7 * -710 + -1692], a = e + I, r = i[a];
    return r ? g = r : (X.asaIcF === void 0 && (X.asaIcF = !0), g = X.EYwPrj(g, A), i[a] = g), g;
  }, X(i, o);
}
async function UQ(i) {
  const { iv: o, key: t } = await JQ(), e = {};
  function A(x, Q, E, d, u) {
    return X(E - 770, d);
  }
  function g(x, Q, E, d, u) {
    return X(d - 236, E);
  }
  e[C("Y8VU", -15, -16, -10, -24)] = ra, e.iv = o;
  const n = await window[C("GC2&", -56, -34, -65, -42) + "o"][C("zL[U", -9, -34, -21, -19) + "e"][r(1205, 1196, "GC2&", 1193, 1199) + "pt"](e, t, i);
  function I(x, Q, E, d, u) {
    return X(u - -888, x);
  }
  const a = await window[g(614, 597, "Pfs&", 606) + "o"][A(1095, 1110, 1115, "jhTo") + "e"][I("4nJw", -521, -544, -535, -545) + C("Pfs&", -35, -26, -47, -27)](g(637, 597, "CjL#", 618), t);
  function r(x, Q, E, d, u) {
    return X(u - 837, E);
  }
  const B = {};
  function C(x, Q, E, d, u) {
    return X(u - -405, x);
  }
  return B[r(1201, 1177, "EsxD", 1188, 1183) + "ge"] = n, B[r(1205, 1230, "B[nQ", 1201, 1206)] = a, B.iv = o, B;
}
(function(i, o) {
  function t(I, a, r, B, C) {
    return DA(a - -489, C);
  }
  const e = i();
  function A(I, a, r, B, C) {
    return DA(C - -696, r);
  }
  function g(I, a, r, B, C) {
    return DA(a - -458, C);
  }
  function n(I, a, r, B, C) {
    return DA(C - -95, I);
  }
  for (; ; )
    try {
      if (parseInt(A(-525, -508, "0ecK", -516, -516)) / 1 + parseInt(g(-270, -262, -263, -264, "mo(A")) / 2 + -parseInt(A(-515, -504, "tv#y", -500, -509)) / 3 + -parseInt(g(-266, -267, -257, -263, "#p2v")) / 4 + parseInt(t(-305, -305, -315, -311, "3LDj")) / 5 + -parseInt(A(-510, -514, "SirU", -529, -520)) / 6 * (-parseInt(n(")8Hv", 90, 100, 87, 91)) / 7) + -parseInt(t(-304, -300, -289, -301, "QGAU")) / 8 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ii, 746731 + -2719 * 167);
function DA(i, o) {
  const t = Ii();
  return DA = function(e, A) {
    e = e - (4339 * -2 + 3 * -232 + 25 * 382);
    let g = t[e];
    if (DA.lejhVn === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      DA.ZOVVDL = B, i = arguments, DA.lejhVn = !0;
    }
    const I = t[0], a = e + I, r = i[a];
    return r ? g = r : (DA.tsdOIj === void 0 && (DA.tsdOIj = !0), g = DA.ZOVVDL(g, A), i[a] = g), g;
  }, DA(i, o);
}
function Ii() {
  const i = ["hwDJWQDkms7cMeGuWOOXka", "W7u6sSoEWOdcISksE2lcHSkEav0", "WQHVfmkpW4u", "W6NcHWFcKhOQWPG", "BK/cQHlcKSoaqWrsFtJcUq", "ycddHSkwW5TEsmkjk8kjW7yH", "gN7dU8kCohmTWQ1GW4tcUSkQWQa", "exRdSSkqm3vCWPvOW6VcNmkq", "pCoTW50zW7FcKG7cNHFcQ8oTmSkv", "WO3dOmoTp2WwfNNdRmofWRXj", "wdZcOhfE", "FuxcQSoEWOq", "W7BcL8kwEc3dRvO", "p8kdW7ldTCkDtCoJoSoLi3pdSW", "uXNdTxDRdmk/WO4PWQ8tW7KV", "WOFdOSoPnwCCCuldGSoCWQf2vq", "CdJdNCkC", "B8k1WOLAWOW", "ytXzoCoE", "hMvLWQLln1/cSvqvWPqf", "vI/cVv9Y", "W4FcSCk4CJC"];
  return Ii = function() {
    return i;
  }, Ii();
}
function YQ(i) {
  function o(g, n, I, a, r) {
    return DA(a - -378, n);
  }
  function t(g, n, I, a, r) {
    return DA(g - -740, I);
  }
  const e = new ArrayBuffer(i[t(-561, -568, "jejp") + "h"]), A = new Uint8Array(e);
  for (let g = 0, n = i[t(-555, -548, "3LDj") + "h"]; g < n; g++)
    A[g] = i[t(-562, -569, "#p2v") + o(-189, "D&GV", -194, -184)](g);
  return e;
}
(function(i, o) {
  const t = i();
  function e(I, a, r, B, C) {
    return nA(B - 115, a);
  }
  function A(I, a, r, B, C) {
    return nA(r - 672, C);
  }
  function g(I, a, r, B, C) {
    return nA(I - 13, a);
  }
  function n(I, a, r, B, C) {
    return nA(C - -878, r);
  }
  for (; ; )
    try {
      if (-parseInt(g(335, "N43c", 391, 348, 371)) / 1 * (-parseInt(g(342, "N43c", 276, 452, 254)) / 2) + parseInt(A(1148, 1084, 1176, 1074, "%EKY")) / 3 + -parseInt(e(759, "l*O)", 553, 651, 571)) / 4 + -parseInt(e(565, "a9Bn", 459, 480, 421)) / 5 * (-parseInt(n(-416, -603, "yey$", -432, -491)) / 6) + parseInt(e(508, "zZwn", 582, 544, 640)) / 7 + -parseInt(g(366, "biN1", 359, 404, 275)) / 8 * (-parseInt(e(467, "l*O)", 424, 439, 476)) / 9) + -parseInt(e(599, "rg$#", 488, 501, 513)) / 10 * (parseInt(n(-380, -501, "qz2a", -505, -423)) / 11) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ai, 886203);
function ai() {
  const i = ["BSoYWOC7W67dO8kAya", "WPJcMGdcOgG", "WQVcJSoqdSke", "Fw3dPmkhoq", "W7NcQdHkWQC", "W4hcSaDaWQ0", "WRbTA8ofgG", "WQxcTG4pWQm", "W67dISo7W63dLa", "W7/cK8oIW5z3", "uXddQmk6mW", "WPDosSkhhCkzgCkRWRmNW4aFDG", "a8ksW6v/W7m", "rXpcTSkDmG", "CmksWRrAba", "WPGgW5/dRrq", "pCoNWRVcHfG", "vueBwXW", "ud5mCaG", "WRRdUIBcONa", "rtK1WPP6", "y2apzbukWPRcMSkgWQvoW4LC", "WO5DW4pdTwFcUCotW7VdLSosW4ZcIa", "WPFcJSkIoCoD", "sSo/WPObWP8", "AZmam8or", "WQ4ZvmkbEW", "WPy0W4ZdPu4", "qSk6aMiq", "W77cLd8QW5O", "W6FcVCkbW5v1", "wvKKswu", "BKeKEtq", "Dc8KwHm", "gSo3WQbNBG", "hqnVare", "WO7dNapcOhS", "AeWNErG", "FCovWPi9WQG", "WOJdSrtcUgq", "saCNmCod", "WQRdGSkUWPRdHG", "WRdcNwCIWQP2b8oNyhNdLmkWgW", "A2VcG8ooia", "AIiQaSkr", "W6tcMmktW7nZ", "WR8NnSkCuW", "ovZcOW7cUq", "W4BcSSoNW6j8", "x8o/WPNdPKS", "dWCQDhm", "j37dGt/dQq", "W6BdPv7dJG", "W7qOi8kcqW", "wwWGWQfQ", "tmooW7xcMvG", "ycSfWReF", "WQ7dTsqOWRC", "t17dUqVdMa", "f8kJWO8wWPW", "s3TJFJi", "W6NcM8o6cq4", "E298WQLr", "yrCAe8oc", "Dg7cTHNdJ8o3WRhcRmkev2hdOc8", "AebRW7xcSq", "CCkXW7iLWQG", "gZhcKmkGgG", "CWNcKmkMW54", "WRGxhmkbFq", "dCoxWPbMEW", "uIlcSSk6dG", "kSkJWR8ADa", "e0SQW5/cNG", "CSouWRKcBq", "F23dP8kAhq", "Ct8bp8oo", "W4ZcQJusW5m", "W5NdTwnuW7i", "u3ZdS8kKiq", "WOFdKq3cIxW", "yCoEh2aD", "WQZcUmo9bSkU", "sf7dMCkT", "W5FcN8oiDGW", "zf9qWOCB", "WR4lbSkdCa", "auS9hCo2W7L6WQW", "WO5FfSolmG", "C3ajFd8", "W7fXW5ZdGx/dJmklWP8", "WRJcOWaXW4C", "qdeKh8oX", "WPzbDmogea", "lSkVW7bbia", "CbldVNVcKa", "iSoGWRCBBq", "vtVcSCkTW6a", "ahz/Fh3dUgXVWOHWWO/dGSoX", "WQtdG8o7W4pdJW", "xSo+WOvBWQy", "waFcKmosbq", "srFdHCkXvG", "FIS5oSkF", "WPmjnCk8wG", "W5VdS8kJW5hdQW", "WR/cKwCNWQGuuSo5ANhdTq", "lvXBWQtcIq", "W5FdRmkeW4NdIa", "lcPdlMuXW7BdNI1RyLWd", "W6NdH8ohfMq", "scVcV8kLlW", "W5pcUSolW6RdKW", "CI3cHCkRmW", "W4lcJ8k8W5Sx", "vJtcOSo8W6i", "wWWmWQ0", "hv1KWQRcHa", "WO8oW4dcIWu", "WQpcN2VdVqtdPCkCW4m", "EHddHCobdG", "bd3cHGxcMq", "AvTIpW0", "l8kOW6DwmG", "W6JdVSoVdqC", "vbWZa8oa", "W6PTvmoOba", "lSoFWOKoeG", "qmk7C28V", "qMBdJeRdIq", "dd42WO0e", "WRm1W63dVuK", "WO5qeColpW", "sMCwW5lcPa", "E1qjWRfX", "W5DfF8kJda", "W4HIvmo3pG", "WRCmp8k5qW", "W5WQW7aEjq", "ufhcTmoevfVdSCopf8oKW6BcTNq", "BSoBW7RdQe4", "sXNdSmo6oq", "tsBcNSo2", "fMZcPSk1oG", "W5ZdQIfhW4K", "WO/cHa4CWPO", "ht7cI8kfcq", "W5ddQGv+WR4", "zJVdVmk7va", "W4JdPmoqW67dMq", "W7ldGmoNeGa", "W5FcTSoUl8kY", "WPJcHGW0WQe", "WOWXcCobwW", "W5ldNmkcW7JdTa", "W48PWOmaqa", "W5dcO8ozW5ldRW", "W7uteSoCEG", "DmkQW6SOWOe", "W77cV8oiW67dPG", "xIu+iq", "amkDWR4fW6O", "rZ7cPmo1mq", "z3ldRmkjoa", "d8kMWQ07W40", "mWRcTmkyW64", "hwnBW5JcGq", "zvHfW4pcPW", "W5pdH8kyWRtcO8oZfsGRWPr/rG", "W4/dMmomW7pdQW", "WPPjoCoExW", "iaFcM07cPCogpmovWOPJWR7cMq4", "WRrrqCoJnG", "ld3dQuK", "kaRcHmkgpa", "zSkCp0Gn", "tgxcKHldGa", "zSoeWP3cKhC", "W5SJW7LRW4W", "vmk0e1q3", "sM7cTSkhaa", "DhVdLmoRqG", "vCoaW7JcTNC", "WQFdJZBcKuu", "cYLTbu4", "W4NdOWuBWO8", "Br7cHCoPwa", "kmoaWRygtG", "v8oYWQ0DWP0", "WQBcLW3cHuldImkbW7ddRKaw", "W5LrW7GEqa", "DvTxubO", "ESo1WRP2mSkrW4HOWQS", "w17cGWNcNmoWud4", "WRTsWPiDt8oPW4fR", "lahcKWldICkzA8oKWOe", "FqRcHmoSuW", "W4hcT8oZgCkj", "W5ddHCo9W63dMW", "cYLQdxS", "xfRdP3BdMSoBrdiqyCoP", "z2eQWPnq", "W5SvWPGbuW", "W6rAtCoida", "h37dM8o6lG", "CX5IW7FcQG", "WQNdM8oYW4pdUG", "DKrRWORcMa", "BGRcVmomeq", "tMvtW7FdUW", "cJPtWOddUW", "r3L2W5FcNG", "gSo2WOuHW7W", "hsL+gxa", "q8kPW610WO8", "smo0W5RdRfG", "W67dMtiHWOO", "fCkaW65yja", "lcVdJmk9BG", "WQZdJXKPWRy", "yCoJWOtcHhC", "WOdcNWtdH00", "zblcISkEW6e", "grBcQ8kRwG", "kYjhl2fqWQNdGY5mqq", "oqBdK8kKea", "fSkOWQ4yW7O", "rxb6WPaZ", "W4NdQmk4W7O", "uf43uWy", "BYOvWP4e", "CbdcL8o8W54", "jdtcR8kSwa", "W4pcNgRdJsa", "W67dNCokW67cIa", "W6G2W7artW"];
  return ai = function() {
    return i;
  }, ai();
}
function nA(i, o) {
  const t = ai();
  return nA = function(e, A) {
    e = e - (5766 + 1 * 5505 + -10954);
    let g = t[e];
    if (nA.XFwNsT === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      nA.FNHsZz = B, i = arguments, nA.XFwNsT = !0;
    }
    const I = t[0], a = e + I, r = i[a];
    return r ? g = r : (nA.pYwwjb === void 0 && (nA.pYwwjb = !0), g = nA.FNHsZz(g, A), i[a] = g), g;
  }, nA(i, o);
}
function WQ() {
  const i = e(554, "L@jl", 556, 485, 472) + g(430, 448, "Z%3G", 471, 452) + e(429, "47]Z", 379, 511, 483) + e(568, "&]Gp", 459, 366, 482) + n("@CXX", 442, 261, 357) + I(284, "u#w3", 160, 194) + g(527, 558, "I2^M", 586, 511) + I(186, "w5w[", 211, 117) + I(-85, "biN1", 72, 32) + I(112, "L@jl", 105, 149) + g(493, 309, "RW^[", 407, 414) + n("N43c", 452, 531, 474) + g(650, 507, "%$8o", 645, 593) + g(609, 513, "L@jl", 489, 497) + I(173, "tN6H", 33, 85) + o("CsR#", -355, -404, -563, -450) + g(629, 643, "BBua", 556, 576) + g(476, 452, "rg$#", 290, 399) + g(553, 483, "#4]N", 515, 561) + o("QBWS", -413, -347, -511, -417) + g(573, 608, "L@jl", 547, 586) + o("u#w3", -433, -470, -403, -425) + g(442, 542, "$wtr", 630, 537) + o("f3]N", -408, -380, -434, -430) + e(268, "Df$r", 436, 313, 382) + n("@f5b", 566, 491, 481) + n("@f5b", 365, 495, 434) + o("QBWS", -615, -621, -596, -574) + o("[C@3", -431, -526, -416, -448) + o("8Mw^", -632, -562, -615, -580) + n("]uQr", 462, 315, 389) + I(48, "biN1", 157, 56) + n("l*O)", 566, 459, 529) + I(80, "Jfjr", 215, 133) + g(387, 445, "#4]N", 557, 480) + e(374, "W!Bu", 317, 363, 396) + n("$]%7", 463, 519, 409) + n("w5w[", 523, 469, 497) + o("XGwY", -364, -433, -346, -418) + o("yey$", -344, -432, -367, -445) + n("Rk0w", 525, 469, 531) + n("RhWv", 447, 428, 509) + I(174, "%$8o", 109, 92) + I(168, "Z%3G", 311, 221) + o("44SQ", -493, -511, -514, -500) + o("asr%", -541, -588, -448, -540) + I(320, "QBWS", 325, 219) + g(544, 528, "biN1", 496, 473) + e(295, "$]%7", 358, 370, 342) + I(131, "CsR#", -77, 21) + I(190, "YovK", 300, 193) + o("0K)e", -412, -477, -435, -427) + I(90, "!NXl", 98, 188) + I(183, "W!Bu", 162, 84) + n("[C@3", 389, 269, 348) + I(48, "HW]m", 48, 121) + e(510, "8Mw^", 529, 517, 495) + n("tN6H", 560, 533, 457) + g(568, 578, "47]Z", 430, 529) + g(460, 494, "I2^M", 586, 515) + e(474, "!NXl", 518, 470, 517) + o("$wtr", -397, -416, -546, -443) + n("RhWv", 340, 334, 452) + I(-78, "aqC4", 37, -9) + e(305, "Jfjr", 442, 447, 329) + o("8Mw^", -586, -508, -415, -506) + e(262, "BBua", 394, 241, 327) + o("&]Gp", -517, -496, -405, -509) + I(57, "I2^M", 109, 42) + I(325, "rg$#", 294, 223) + o("I2^M", -407, -368, -355, -400) + I(255, "CsR#", 199, 225) + I(-31, "47]Z", 0, 45) + o("f3]N", -500, -507, -441, -396) + g(522, 529, "Df$r", 420, 506) + o("QBWS", -663, -480, -579, -550) + n("&]Gp", 215, 215, 318) + e(414, "Jfjr", 289, 331, 362) + e(317, "Y@C%", 385, 438, 367) + g(419, 393, "$]%7", 458, 456) + e(490, "aqC4", 343, 437, 372) + g(315, 354, "Z%3G", 320, 420) + I(54, "$wtr", 190, 150) + I(173, "a9Bn", 314, 203) + e(251, "u#w3", 458, 388, 347) + e(329, "rg$#", 387, 342, 325) + e(608, "%$8o", 502, 564, 518) + o("Df$r", -393, -367, -304, -376) + n("QBWS", 543, 531, 527) + e(451, "CsR#", 488, 568, 496) + o("#4]N", -606, -459, -473, -523) + I(180, "!NXl", 148, 80) + I(176, "$]%7", 165, 124) + I(19, "#4]N", 30, 115) + n("CsR#", 620, 624, 534) + o("RW^[", -493, -463, -326, -405) + n("f3]N", 336, 306, 322) + n("rg$#", 279, 313, 388) + n("Z%3G", 429, 504, 402) + n("n)rn", 252, 337, 308) + g(428, 458, "l*O)", 512, 494) + e(340, "D0vU", 252, 297, 319) + g(390, 359, "XGwY", 552, 443) + e(395, "D0vU", 534, 372, 465) + o("QBWS", -450, -442, -375, -420) + I(152, "[C@3", 100, 204) + g(462, 509, "Y@C%", 551, 516) + n("@CXX", 411, 422, 358) + o("CsR#", -512, -514, -499, -461) + I(163, "aqC4", 99, 77) + e(240, "X0Zu", 316, 369, 345) + e(542, "@f5b", 494, 454, 527) + o("!NXl", -397, -461, -419, -404) + I(45, "qz2a", 98, 54) + n("L@jl", 432, 465, 437) + o("Y@C%", -636, -464, -639, -524) + o("tN6H", -528, -403, -472, -410) + I(141, "$wtr", 116, 201) + I(223, "44SQ", 170, 142) + n("XGwY", 473, 394, 444) + n("HW]m", 360, 420, 314) + I(-41, "a9Bn", -85, 29) + o("$wtr", -602, -554, -550, -591) + I(185, "0K)e", 100, 165) + e(449, "Df$r", 543, 516, 444) + n("HW]m", 265, 247, 355) + g(562, 607, "Jfjr", 459, 559) + g(437, 374, "biN1", 435, 468) + e(244, "u#w3", 360, 311, 302) + g(591, 619, "47]Z", 639, 568) + I(119, "@CXX", 47, 116) + e(373, "W!Bu", 546, 349, 462) + n("CsR#", 231, 327, 313) + g(467, 372, "QBWS", 461, 432) + I(146, "RhWv", 95, 151) + I(308, "8Mw^", 314, 224) + g(417, 499, "W!Bu", 500, 445) + e(347, "biN1", 338, 332, 437) + I(96, "Y@C%", 83, 40) + g(383, 523, "!NXl", 493, 434) + g(493, 665, "47]Z", 514, 608) + n("Df$r", 372, 533, 425) + n("!NXl", 274, 279, 361) + n("tN6H", 371, 418, 379) + n("#4]N", 382, 357, 445) + e(398, "&]Gp", 397, 287, 339) + I(-3, "a9Bn", -93, 15) + I(105, "44SQ", 99, 64) + g(665, 510, "D0vU", 556, 602) + n("[C@3", 560, 444, 450) + I(20, "!NXl", -78, 1) + e(333, "Df$r", 450, 323, 422) + n("a9Bn", 313, 296, 365) + n("@CXX", 422, 445, 382) + e(311, "8Mw^", 279, 367, 328) + o("@CXX", -438, -475, -502, -411) + n("I2^M", 450, 514, 494) + n("Df$r", 382, 379, 480) + o("f3]N", -478, -453, -541, -498) + e(311, "@f5b", 466, 351, 376) + n("aqC4", 366, 562, 453) + n("YovK", 493, 496, 461) + e(302, "u#w3", 273, 380, 314) + I(187, "HW]m", 151, 190) + g(487, 612, "n)rn", 571, 558) + n("%EKY", 418, 313, 424) + n("tN6H", 497, 529, 490) + o("]uQr", -289, -426, -469, -380) + n("YovK", 510, 363, 458) + o("f3]N", -648, -699, -584, -590) + n("BBua", 467, 412, 408) + n("47]Z", 550, 418, 441) + g(295, 506, "f3]N", 367, 411) + g(422, 523, "[C@3", 425, 422) + e(320, "[C@3", 497, 380, 416) + o("l*O)", -569, -583, -579, -512) + n("N43c", 429, 295, 400) + n("QBWS", 440, 350, 340) + n("n)rn", 450, 338, 371) + I(295, "a9Bn", 83, 200) + e(333, "]uQr", 256, 232, 333) + I(174, "$wtr", 28, 82) + o("$]%7", -548, -529, -518, -433) + o("Z%3G", -288, -485, -435, -386) + I(71, "RW^[", 165, 105) + n("%EKY", 410, 440, 363) + e(395, "D0vU", 356, 355, 322) + e(484, "&]Gp", 495, 404, 410) + e(435, "l*O)", 569, 541, 477) + g(591, 464, "D0vU", 599, 543) + o("qz2a", -589, -453, -521, -536) + e(308, "!NXl", 314, 386, 318) + o("W!Bu", -528, -530, -504, -533) + I(142, "zZwn", 155, 134) + g(396, 543, "biN1", 398, 469) + o("I2^M", -659, -559, -609, -595) + g(580, 428, "D0vU", 603, 509) + e(299, "RW^[", 463, 410, 407) + I(-13, "biN1", 20, 70) + I(26, "I@b6", -2, 89);
  function o(B, C, x, Q, E) {
    return nA(E - -928, B);
  }
  const t = window[o("I2^M", -366, -525, -436, -480)](i);
  function e(B, C, x, Q, E) {
    return nA(E - -17, C);
  }
  const A = window[o("$wtr", -438, -443, -502, -421)](t);
  function g(B, C, x, Q, E) {
    return nA(E - 71, x);
  }
  function n(B, C, x, Q, E) {
    return nA(Q - -12, B);
  }
  function I(B, C, x, Q, E) {
    return nA(Q - -326, C);
  }
  const a = YQ(A), r = {};
  return r[I(160, "$]%7", 143, 155)] = Ca, r[I(236, "I@b6", 151, 199)] = ss, window[o("tN6H", -499, -475, -567, -494) + "o"][o("qz2a", -433, -371, -486, -432) + "e"][I(87, "QBWS", 193, 106) + n("X0Zu", 487, 331, 405)](e(270, "YovK", 236, 331, 340), a, r, !0, [o("tN6H", -361, -476, -380, -477) + "pt"]);
}
async function OQ(i) {
  function o(g, n, I, a, r) {
    return nA(n - 613, I);
  }
  const t = await WQ(), e = {};
  e[A(736, 632, "zZwn")] = Ca;
  function A(g, n, I, a, r) {
    return nA(n - 94, I);
  }
  return window[o(1173, 1153, "@f5b") + "o"][o(1036, 1038, "n)rn") + "e"][o(923, 945, "0K)e") + "pt"](e, t, i);
}
(function(i, o) {
  function t(a, r, B, C, x) {
    return wA(B - 204, C);
  }
  const e = i();
  function A(a, r, B, C, x) {
    return wA(a - 340, x);
  }
  function g(a, r, B, C, x) {
    return wA(B - -94, a);
  }
  function n(a, r, B, C, x) {
    return wA(a - -526, x);
  }
  function I(a, r, B, C, x) {
    return wA(r - 939, C);
  }
  for (; ; )
    try {
      if (-parseInt(n(-288, -298, -284, -295, "HAoO")) / 1 * (parseInt(n(-296, -308, -310, -302, "lKUH")) / 2) + -parseInt(I(1178, 1176, 1180, "QS3N", 1190)) / 3 * (-parseInt(g("wA&)", 142, 133, 143, 119)) / 4) + -parseInt(g("2F(l", 158, 149, 159, 157)) / 5 * (-parseInt(n(-294, -302, -306, -285, "l[DP")) / 6) + parseInt(I(1185, 1173, 1178, "^]O$", 1184)) / 7 * (-parseInt(A(561, 557, 566, 558, "VcRK")) / 8) + parseInt(I(1193, 1180, 1194, "@AM6", 1182)) / 9 + parseInt(t(439, 444, 443, "A@hs", 433)) / 10 * (parseInt(g("fV2N", 122, 130, 136, 119)) / 11) + parseInt(t(429, 427, 440, "vbmS", 426)) / 12 * (-parseInt(g("hvPv", 137, 125, 138, 128)) / 13) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ri, 899054 + 658437 * -1 + -15188 * -31);
function ri() {
  const i = ["wbVdTSkAWP7dOmkyW7zLbq", "W6xdN8ovkdRcRbqUbmoo", "WPVcVCopgSodWQdcLmkubG", "WOZdMq7dPtOOxWS", "pMzTgaZdI1nVdNVdIq", "C3FcJWLnW5FdTG", "aL92mY4op8kvh8k/W6q", "qLbgo0JcL8otra", "b19ZnLqAomkDfmka", "W53cMhvBc8oaWRNdICoEgCk0CXm", "DJldL3rSW47dKXiBnW", "sfRcJx3dQCkOBNbwW4O", "srNdNahdLCkKCq", "W4tcQKDAiq", "W6ZcG8o5WQTUWO3cKXO", "W5hcJSoKWPzZW4OUqtrg", "W67dOSksW7KkW6vUW6/cSwxdJmo0kmok", "WOVdNfJcUb4Pyqq6kG", "W7pdNrpcTmklWOa8WPrBW5y+W77dPG", "WQJdMKrfWO4RD8kaW6XPW4a3W7K", "dryVmb45Dcq1mH7cLSoUWQu", "WPRdVaCAD0xcKe5LW6DO", "DSo6aCkBWRZdUSkfW4ldHwS/", "WPqiW6eLDmoLW6ldL8oCodeRWRq", "zmkIl8oCWOqLWQRdKWm", "bgbDabBcI8ouWRpcQCoB", "WRboFHtcJCkthCkX", "W6tdQZy"];
  return ri = function() {
    return i;
  }, ri();
}
function wA(i, o) {
  const t = ri();
  return wA = function(e, A) {
    e = e - (386 * -1 + -3725 + 4330);
    let g = t[e];
    if (wA.NBIpJe === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      wA.KMHuiY = B, i = arguments, wA.NBIpJe = !0;
    }
    const I = t[0], a = e + I, r = i[a];
    return r ? g = r : (wA.zUIhrx === void 0 && (wA.zUIhrx = !0), g = wA.KMHuiY(g, A), i[a] = g), g;
  }, wA(i, o);
}
async function HQ(i) {
  const { iv: o, key: t, message: e } = await UQ(i), A = await OQ(t), g = {};
  function n(I, a, r, B, C) {
    return wA(r - 994, B);
  }
  return g[n(1220, 1234, 1225, "FMld")] = A, g.iv = o, g[n(1227, 1228, 1239, "wCTu") + "ge"] = e, g;
}
(function(i, o) {
  const t = i();
  function e(a, r, B, C, x) {
    return aA(a - 683, x);
  }
  function A(a, r, B, C, x) {
    return aA(B - -999, x);
  }
  function g(a, r, B, C, x) {
    return aA(a - 546, r);
  }
  function n(a, r, B, C, x) {
    return aA(C - -392, x);
  }
  function I(a, r, B, C, x) {
    return aA(r - 203, B);
  }
  for (; ; )
    try {
      if (parseInt(A(-713, -693, -701, -685, "2Lgn")) / 1 * (parseInt(I(498, 502, "^sDI", 489, 519)) / 2) + -parseInt(n(-87, -90, -71, -79, "o)qs")) / 3 * (-parseInt(e(997, 1001, 1015, 999, "rsj%")) / 4) + parseInt(n(-79, -76, -68, -83, "n@r%")) / 5 + parseInt(e(1e3, 998, 993, 1009, "*J89")) / 6 * (-parseInt(A(-664, -693, -677, -679, "b(*e")) / 7) + parseInt(g(846, "T68K", 830, 864, 844)) / 8 * (parseInt(g(875, "hsUI", 878, 863, 884)) / 9) + parseInt(g(853, "lvUC", 865, 864, 863)) / 10 * (parseInt(I(518, 515, "*J89", 521, 530)) / 11) + -parseInt(I(507, 500, "h%Tg", 497, 508)) / 12 * (parseInt(g(865, ")tbX", 878, 866, 851)) / 13) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ci, 655843 + 333 * 1037 + 3 * -218151);
function Ci() {
  const i = ["m8oglI8qdCoVqxK", "WO7dOCoqz3uYCsq", "vgqZw18", "WORcTbuafW", "zmk6FCk8C8kUea1YWPL9BG", "WP3cQt8eeq", "Fc9Lb3pcMCotWQFcHvm5wq", "b1ZcMSkItsVdPSo+oCopW7RdHX/dTa", "W7JcVY5EwSohW6StWRRdVW", "ncFdMIVcOuTxFKa", "WQRdUZJdKHPqxLu", "WQPYWR8", "FmoiWOKYFmoZdCo7", "W516h0HcjCoWaq/cSG", "W7JdSSkZF24", "W7GXWONdIxG", "nCkUp37dKJtcMSoolxW6WPZcRr4", "WRVdNJVdGJiCW7pcI8kf", "W7FdSmovnLldNSoMn1xdTCkkW5X/", "emkrW6VdQxJdMuuoebddKCoRWOa", "uSofWRNcIt4", "ng9S", "W4vCW7yneruGWPRcOJRdRG0", "W7OWW7VcL8oNWRWPb8kTywiq", "t8o4dSkau2iDFa", "rmowWRlcTW", "FCkqW77cTmkRqmoIWQ5agmoRra", "W4DDW70lA2SLWPZcKIi", "FsKusqJdRSoWWOi", "W4a+gKVcKCkHW4hcUW", "W7FdSCoBmaRcOSk0h2JdIG", "WP8/W4rGtCkGwxX2CYCx", "q0LwWPeaW5pdT8k1lW", "BSoZzcu", "wW/dMa"];
  return Ci = function() {
    return i;
  }, Ci();
}
function aA(i, o) {
  const t = Ci();
  return aA = function(e, A) {
    e = e - (-5706 + -4799 * 2 + 15600);
    let g = t[e];
    if (aA.HbjsWK === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let Q = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      aA.ojowvF = B, i = arguments, aA.HbjsWK = !0;
    }
    const I = t[0 + 127 * -26 + 3302], a = e + I, r = i[a];
    return r ? g = r : (aA.XqUrnt === void 0 && (aA.XqUrnt = !0), g = aA.ojowvF(g, A), i[a] = g), g;
  }, aA(i, o);
}
async function KQ(i) {
  function o(I, a, r, B, C) {
    return aA(I - -100, r);
  }
  function t(I, a, r, B, C) {
    return aA(B - -309, C);
  }
  function e(I, a, r, B, C) {
    return aA(B - 82, I);
  }
  const A = await window[e("BDQu", 411, 397, 412) + "o"][o(227, 211, "P^wl") + "e"][o(204, 210, "$F9p") + "t"](t(-10, -20, -7, -4, "7^6a"), i);
  function g(I, a, r, B, C) {
    return aA(a - 734, B);
  }
  function n(I, a, r, B, C) {
    return aA(a - -336, C);
  }
  return Array[e("n@r%", 391, 381, 397)](new Uint8Array(A))[n(-29, -12, -27, -23, "h%Tg")]((I) => I[t(26, 5, 9, 19, "BDQu") + t(-16, 2, 15, 2, "kJCG")](16)[n(-21, -26, -34, -24, "n@r%") + g(1035, 1035, 1026, "o)qs")](2169 + 29 * 307 + -11070, "0"))[g(1041, 1057, 1057, "LhpD")]("");
}
(function(i, o) {
  function t(a, r, B, C, x) {
    return vA(a - -116, r);
  }
  var e = i();
  function A(a, r, B, C, x) {
    return vA(a - -179, x);
  }
  function g(a, r, B, C, x) {
    return vA(r - -538, a);
  }
  function n(a, r, B, C, x) {
    return vA(x - 769, C);
  }
  for (; ; )
    try {
      var I = parseInt(g("#)kF", -265, -274, -270, -268)) / 1 + parseInt(t(168, "&Ce(", 159, 166, 166)) / 2 * (-parseInt(n(1052, 1038, 1061, "O16[", 1050)) / 3) + parseInt(t(159, "w1VW", 168, 165, 149)) / 4 * (parseInt(n(1046, 1023, 1029, "&r(R", 1034)) / 5) + parseInt(n(1044, 1039, 1063, "J^yk", 1051)) / 6 + -parseInt(A(99, 91, 106, 109, "66y3")) / 7 * (-parseInt(A(89, 78, 81, 89, "8eK2")) / 8) + -parseInt(g("v0EY", -258, -264, -261, -269)) / 9 * (-parseInt(g("1xOd", -267, -258, -273, -269)) / 10) + parseInt(n(1039, 1042, 1038, "QtHk", 1033)) / 11 * (-parseInt(t(167, "iHzC", 161, 169, 179)) / 12);
      if (I === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Bi, 1022390 + 1073 * -519 + -3 * -28716);
function vA(i, o) {
  var t = Bi();
  return vA = function(e, A) {
    e = e - (-12637 + -3225 * -4);
    var g = t[e];
    if (vA.HhYeRp === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = Q.length; m < R; m++)
          E += "%" + ("00" + Q.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var Q = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          Q[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + Q[c] + x.charCodeAt(c % x.length)) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + Q[c]) % 256, d = Q[c], Q[c] = Q[E], Q[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ Q[(Q[c] + Q[E]) % 256]);
        return u;
      };
      vA.JDefcX = I, i = arguments, vA.HhYeRp = !0;
    }
    var a = t[13 * -398 + 6872 + -1698], r = e + a, B = i[r];
    return B ? g = B : (vA.EMEFzF === void 0 && (vA.EMEFzF = !0), g = vA.JDefcX(g, A), i[r] = g), g;
  }, vA(i, o);
}
function Bi() {
  var i = ["W7BcVmkXW67dULSSpxddS8oUdKm", "W7PJfLnTWO/dIsldL8k2WOO", "WRldNSkecmooW7VcUW", "WP4udb9GW7jPl8oUCa", "omkRW6ZcOmkdWQRcOCoXjSkDC8oEkq", "B8kLW7mRWP/dPLmgWQ/cLCo2o8oG", "uaxdJLPrWRe6WQJdQG", "kfVcLSosExGK", "lqGHiIbaWQuDW61kW7FcG8o3", "W4dcKSkIEuqIb8kBfr4fWP4", "c8khvSo+W5RcJ8kYjXXWW6O", "BSkMW6X4x8oPW67dJCogD3VdQa", "bJBcGtactNldJXFcOu5fmG", "nMj5FSkdWPP6pLWXnCoiWOC", "W7dcUmkXWRhcRY1Mm04", "m296CmoAW4y+kM44", "CmkJW4GVW4pcTCoQqSkUWOq", "zfP1W73cJ8kYySkhuSkcw1a", "WPhdGCoRACkLWQldHgJcRmkv", "WRP/gSk+WOZcTGxcTKBcJG", "W77cKmkRCI40BheIW6Suwq", "W7ZcKCkRCvj6tfKCW4e", "ja1wcXOsWPS", "W78/omkQc8oYWOm"];
  return Bi = function() {
    return i;
  }, Bi();
}
async function si(i) {
  const { Image: o } = We, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const g = o.verify(A);
  if (g) throw Error(g);
  const n = {};
  return n.bytes = e, o.create(n);
}
async function Va(i) {
  const { v4: { Metadata: o } } = We, t = { ...i };
  t.platform = We.Platform.WEB;
  const e = t, A = o.verify(e);
  if (A) throw Error(A);
  return o.create(e);
}
async function _a(i) {
  const { Content: o } = We, { iv: t, key: e, message: A } = await HQ(i), g = { token: new Uint8Array(e), iv: t, schemaVersion: Cs, bytes: new Uint8Array(A) }, n = o.verify(g);
  if (n) throw Error(n);
  const I = o.create(g);
  return o.encode(I).finish();
}
function Xa(i) {
  const { Blob: o } = We.v4, t = o.verify(i);
  if (t) throw Error(t);
  const e = o.create(i);
  return o.encode(e).finish();
}
var Tt, li;
class za {
  constructor(o) {
    L(this, Tt, !0);
    L(this, li, Date.now());
    D(this, "analytics");
    D(this, "samVersion");
    D(this, "sessionToken");
    D(this, "onDetectionCallback");
    D(this, "onCaptureCallback");
    D(this, "createProtoMessage");
    D(this, "fpsOfAllImages", new Ut(30));
    D(this, "cameraService");
    D(this, "imageProcessor");
    D(this, "instructionEscalation");
    D(this, "imageCropSettings");
    this.cameraService = o.cameraService, this.imageProcessor = o.imageProcessor, this.analytics = o.analytics, this.samVersion = o.samVersion, this.sessionToken = o.sessionToken, this.createProtoMessage = o.createProtoMessage, this.onDetectionCallback = o.onDetectionCallback, this.onCaptureCallback = o.onCaptureCallback, this.instructionEscalation = o.instructionEscalation, this.imageCropSettings = o.imageCropSettings;
  }
  async run() {
    for (; p(this, Tt); )
      await this.iterate();
    return this;
  }
  stop() {
    v(this, Tt, !1);
  }
  async trackCaptureProcess(o, t) {
    var n;
    const e = Date.now(), A = Ue(this.fpsOfAllImages), g = {};
    g.width = t.width, g.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: o, imageResolution: g, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - p(this, li), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Ja() });
  }
  onDetection(o, t) {
    this.onDetectionCallback({ ...o, avgFps: ne(Ue(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: o, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const g = A, n = await ps(t), I = await ms(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await si(I) }, B = {};
    B.sessionToken = this.sessionToken, B.web = r;
    const C = B, x = await this.createProtoMessage(n, C), Q = {};
    Q.detection = e, Q.imageResolution = g;
    const E = {};
    E.image = n, E.data = Q;
    const d = E;
    this.stop();
    const u = {};
    u.imageData = d, u.protoMessage = x, u.webMetadata = r, u.candidateSelectionImages = o, this.onCaptureCallback(u);
  }
  collectAndEscalate(o) {
    if (!this.instructionEscalation) return !1;
    const t = o;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(o) {
    return Date.now() - o;
  }
  getInvalidInstructions(o, t) {
    const e = [];
    return Array.from(o).forEach(([A, g]) => {
      !g && e.push(t[A]);
    }), e;
  }
  async sleep(o) {
    await Gg(Math.max(u0.max - o, u0.min));
  }
}
Tt = new WeakMap(), li = new WeakMap();
class TQ extends za {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...g }) {
    super(g);
    D(this, "candidateSelectionTime", 1771 + -4 * -2213 + -10623);
    D(this, "candidatesSelectionFramesCount", -1898 + -1 * -6074 + 12 * -348);
    D(this, "isInCandidateSelection", !1);
    D(this, "lastImage", null);
    D(this, "bestImage", null);
    D(this, "candidateSelectionImages", []);
    D(this, "fallbackInstruction");
    D(this, "instructionCodeMap");
    D(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.instructionCodeMap = A, this.checkToInstructionCodeMap = t;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.isInCandidateSelection ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const A = {};
    A.takenPhoto = t, A.imageProcessorResult = e;
    const g = this.getDetectionDetails(A);
    this.onDetection(g, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const n = {};
    n.instructionCode = g.processedImage.instructionCode, n.isValid = e.isValid, n.image = t.image, n.detection = e.detection, this.lastImage = n, await this.sleep(g.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? Y.fromCameraError(e) : Y.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const g = {};
    g.image = t.image, g.detection = e.detection;
    const n = g;
    this.bestImage = n, this.candidateSelectionImages.push(n);
  }
  tryInitCandidatePhase(t, e) {
    var I;
    if (!(((I = this.lastImage) == null ? void 0 : I.isValid) && e.isValid)) return;
    const g = {};
    g.image = t.image, g.detection = e.detection;
    const n = g;
    this.isNewImageBetter(this.lastImage.detection, n.detection) ? this.bestImage = n : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, n), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 23 * -393 + -247 * -9 + 96 * 71 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Zi.minFrames ? t > Zi.minDuration : t > Zi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new Y("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), g = ne((-4286 + -67 * 123 + 13527) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[6054 + -3027 * 2];
    const B = this.getInstructionCode(r), C = this.collectAndEscalate(B), x = {};
    return x.detection = t.detection, x.instructionCode = B, x.isEscalated = C, x.invalidValidators = a, x.isInCandidateSelection = this.isInCandidateSelection, { processedImage: x, detectionTime: A, fps: g, avgFps: ne(Ue(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Be, ke;
class PQ extends za {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...A }) {
    super(A);
    L(this, Be, void (-8445 + -8054 * 1 + 16499));
    L(this, ke);
    D(this, "fallbackInstruction");
    D(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Fo).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    v(this, ke, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && v(this, Be, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(yg.REQUEST_CAPTURE, p(this, ke));
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
    return p(this, Be) ? p(this, Be) === Fo.FIRST_FRAME ? !0 : p(this, Be) === Fo.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? Y.fromCameraError(e) : Y.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), v(this, Be, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), g = ne((-9540 + 25 * -341 + 3813 * 5) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[-958 + -958 * -1]), B = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = B, { processedImage: C, detectionTime: A, fps: g, avgFps: ne(Ue(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), p(this, ke) && document.removeEventListener(yg.REQUEST_CAPTURE, p(this, ke));
  }
}
Be = new WeakMap(), ke = new WeakMap();
function qQ({ captureMode: i, ...o }) {
  return i === Ko.AUTO_CAPTURE ? new TQ(o) : new PQ(o);
}
function jQ({ cameraResolution: i, cameraService: o, customEvent: t }) {
  const { shouldCameraMirror: e } = nQ(t.CONTROL, o), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, iQ(t.CAMERA_PROPS_CHANGED, A), K(() => () => {
    Wt.getInstance().restart();
  }, []);
  const g = {};
  return g.shouldCameraMirror = e, g;
}
function ZQ(i) {
  K(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function VQ({ captureMode: i, checkToInstructionCodeMap: o, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: g, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: B }) {
  ZQ(() => {
    t && t.destroy();
  });
  const C = z(!1), { appState: x, handleAppStateChange: Q, isCameraReady: E } = Qt(), { sunfish: d } = ct(), { analytics: u } = ki(), { cameraResolution: c, cameraService: h, onCameraResolutionChange: m, videoRef: R } = vs(), M = {};
  M.cameraResolution = c, M.cameraService = h, M.customEvent = A;
  const { shouldCameraMirror: J } = jQ(M), w = _e(void (4245 * 1 + -102 * 84 + 4323)), q = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && E, dA = bA((P) => {
    Q(_A.WAITING), a(P);
  }, [a, Q]), V = bA((P, SA) => {
    m(P.resolution), w.value = P, r(P, SA);
  }, [r, w, m]);
  K(() => {
    !C.current && q && (C.current = !0, Q(_A.RUNNING));
  }, [q, Q]), K(() => {
    if (x !== _A.RUNNING || !q) return;
    if (!h || !t) throw new Y("Cannot start detection");
    t.imageProcessor.reset();
    const P = {};
    P.captureMode = i, P.analytics = u, P.cameraService = h, P.imageProcessor = t.imageProcessor, P.fallbackInstruction = g, P.instructionCodeMap = I, P.checkToInstructionCodeMap = o, P.sessionToken = B, P.samVersion = t.samVersion, P.createProtoMessage = e, P.onCaptureCallback = dA, P.onDetectionCallback = V, P.instructionEscalation = t.instructionEscalation, P.imageCropSettings = n;
    const SA = qQ(P);
    return t.runDetectionLoop(SA), () => {
      t.stopDetectionLoop();
    };
  }, [x, q, t, h, dA, V, B, w, u, e, I, o, g, i, n]);
  const pA = {};
  return pA.videoRef = R, pA.cameraResolution = c, pA.detectionDetails = w, pA.shouldCameraMirror = J, pA;
}
function $a({ callback: i, delay: o, skip: t = !1 }) {
  const [e, A] = rA(!1), g = z(i), n = z(null);
  K(() => {
    g.current = i;
  }, [i]);
  const I = bA(() => {
    n.current && (clearTimeout(n.current), n.current = null), A(!1);
  }, []), a = bA(() => {
    t || (I(), A(!0), n.current = setTimeout(() => {
      g.current(), A(!1);
    }, o));
  }, [o, I, t]);
  K(() => {
    a();
  }, [o, I, a]);
  const r = {};
  return r.isActive = e, r.reset = a, r.clear = I, r;
}
function Ar(i) {
  const o = z([]);
  return K(() => {
    o.current.forEach((t) => t()), o.current = [];
  }, [i]), (t) => {
    o.current.push(t);
  };
}
const _Q = () => typeof document < "u" && document.hasFocus();
function XQ(i = {}) {
  const o = z(i), t = z(_Q()), [e, A] = rA(t.current);
  K(() => {
    o.current = i;
  }), K(() => {
    function n(B) {
      t.current = B, A(B);
    }
    function I() {
      Promise.resolve().then(() => {
        var B, C, x, Q;
        !t.current && ((C = (B = o.current).onFocus) == null || C.call(B), (Q = (x = o.current).onChange) == null || Q.call(x, !0)), n(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var B, C, x, Q;
        t.current && ((C = (B = o.current).onBlur) == null || C.call(B), (Q = (x = o.current).onChange) == null || Q.call(x, !1)), n(!1);
      });
    }
    function r() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", I), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", r), () => {
      window.removeEventListener("focus", I), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", r);
    };
  }, []);
  const g = {};
  return g.isWindowFocused = e, g;
}
function zQ(i, o) {
  if (!i) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const A = { ...i };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function $Q() {
  const i = _e(null);
  function o({ cameraProperties: e }) {
    i.value = zQ(i.value, e);
  }
  const t = {};
  return t.cameraProperties = i, t.mergeCameraProperties = o, t;
}
const er = at(null), bn = () => {
  const i = Ee(er);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}, Ac = ({
  assetsDirectoryPath: i,
  captureMode: o,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => {
  var g, n, I;
  return {
    onPhotoTaken: t,
    captureMode: o ?? Ko.AUTO_CAPTURE,
    assetsDirectoryPath: Ea(i),
    sessionToken: e,
    thresholds: {
      faceConfidence: (A == null ? void 0 : A.faceConfidence) ?? zB,
      minFaceSizeRatio: (A == null ? void 0 : A.minFaceSizeRatio) ?? $B,
      maxFaceSizeRatio: (A == null ? void 0 : A.maxFaceSizeRatio) ?? As,
      sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? os,
      brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? is,
      brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? gs,
      outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? es,
      devicePitchAngleThreshold: (A == null ? void 0 : A.devicePitchAngleThreshold) ?? ns,
      mouth: {
        confidence: ((g = A == null ? void 0 : A.mouth) == null ? void 0 : g.confidence) ?? ts,
        status: {
          min: ((n = A == null ? void 0 : A.mouth) == null ? void 0 : n.status.min) ?? d0.min,
          max: ((I = A == null ? void 0 : A.mouth) == null ? void 0 : I.status.max) ?? d0.max
        }
      },
      leftEye: (A == null ? void 0 : A.leftEye) ?? {
        confidence: l0
      },
      rightEye: (A == null ? void 0 : A.rightEye) ?? {
        confidence: l0
      }
    }
  };
};
function ec({
  cameraOptions: i,
  children: o
}) {
  const t = fA(() => Ac(i), [i]);
  return /* @__PURE__ */ y(er.Provider, { value: t, children: o });
}
function tc({ onFaceTrackingLost: i, skipOutsideOfCandidateSelection: o }) {
  const t = z(i);
  K(() => {
    t.current = i;
  }, [i]);
  const e = bA((g) => {
    if (!g.detail) return;
    const { data: n } = g.detail;
    o && !n.isInCandidateSelection || n.invalidValidators.includes(gA.FACE_NOT_PRESENT) && t.current();
  }, [o]), A = {};
  return A.handleFaceDetection = e, A;
}
function oc(i) {
  return function(t) {
    const { handleFaceDetection: e } = i(t);
    ln(VA.FACE_DETECTION, e);
  };
}
const ic = ({ children: i }) => {
  const o = z(null);
  return IQ(o, VA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ y(fB, { ref: o, children: i });
}, kn = 0 + 0.5;
function gc() {
  const i = {};
  i.max = kn;
  const o = {};
  o.confidence = 0.3, o.status = i;
  const t = {};
  return t.mouth = o, t;
}
const nc = 1 * -1942 + -3659 * -1 + -101 * 17 + 0.4;
function Ic(i) {
  const o = {};
  o.min = nc + i;
  const t = {};
  t.confidence = 0.3, t.status = o;
  const e = {};
  return e.brightnessHighThreshold = 1, e.brightnessLowThreshold = -(-6779 * 1 + -7376 + 7078 * 2), e.sharpnessThreshold = -(-1958 + -1145 * -2 + -331), e.outOfBoundsThreshold = -(-24 * -9 + 2549 * 1 + -2764), e.minFaceSizeRatio = 0.1, e.mouth = t, e;
}
const ac = 1e4, _0 = -1934 + 1949 * 1, Jo = {};
Jo.timeout = 4e3, Jo.threshold = 0.7, Jo.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const og = Jo, rc = (i, o) => ({ ...i, leftEye: { ...i.leftEye, center: Te(i.leftEye.center, o) }, rightEye: { ...i.rightEye, center: Te(i.rightEye.center, o) }, mouth: { ...i.mouth, center: Te(i.mouth.center, o) }, topLeft: Te(i.topLeft, o), bottomRight: Te(i.bottomRight, o), faceCenter: Te(i.faceCenter, o) }), tr = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, A = PB(e, o), g = {};
  g.x = t.x, g.y = t.y - A;
  const n = {};
  n.x = t.x + A, n.y = t.y;
  const I = {};
  I.x = t.x, I.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const r = {};
  return r.top = g, r.right = n, r.bottom = I, r.left = a, Qa(r);
}, Cc = (i, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = o, g = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  ua(i, g, "rgba(255, 0, 0, 0.3)", !0), Rt(i, e, "lime");
}, Bc = (i, o, t) => {
  const e = tr(o, t);
  Object.values(e).map((A) => Rt(i, A, "orange"));
};
function sc({ cameraResolution: i, detectionDetails: o, isImageMirror: t }) {
  const { thresholds: e } = bn(), { redfin: A } = ct(), g = z(null);
  if (K(() => {
    if (!g.current)
      return;
    g.current.width = i.width, g.current.height = i.height, vB(g.current);
    const u = jo(i), c = ha(
      i,
      e.outOfBoundsThreshold,
      u
    ), h = KB(i);
    o.value && (Cc(g.current, o.value.processedImage.detection), Bc(
      g.current,
      o.value.processedImage.detection,
      i
    ), Vi(g.current, u, "lime"), Vi(g.current, c, "yellow"), Vi(g.current, h, "blue"), Rt(g.current, o.value.processedImage.detection.leftEye.center, "cyan"), Rt(g.current, o.value.processedImage.detection.rightEye.center, "cyan"), Rt(g.current, o.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, o.value]), !o.value)
    return null;
  const {
    avgFps: n,
    detectionTime: I,
    fps: a,
    processedImage: { detection: r, instructionCode: B, invalidValidators: C, isEscalated: x },
    resolution: Q,
    samVersion: E
  } = o.value, d = {
    Confidence: r.confidence,
    Brightness: r.brightness,
    Sharpness: r.sharpness,
    "Face size": r.faceSize,
    "Left eye confidence": r.leftEye.confidence,
    "Left eye status": r.leftEye.status,
    "Right eye confidence": r.rightEye.confidence,
    "Right eye status": r.rightEye.status,
    "Mouth confidence": r.mouth.confidence,
    "Mouth status": r.mouth.status,
    "Detection time": I,
    FPS: a,
    "Avg FPS": n,
    Tier: A,
    Instruction: B,
    Resolution: Q,
    "Escalated instruction": x,
    "Component version": "7.2.1"
  };
  return E && (d["SAM version"] = E), C.length > 0 && (d["Invalid validators"] = C), /* @__PURE__ */ y(
    SB,
    {
      ref: g,
      cameraResolution: i,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function Qc(i) {
  return /* @__PURE__ */ y("rect", { fill: "#000", ...i, rx: "50%" });
}
function cc(i, o) {
  const [t, e] = rA(!1), A = () => e((I) => !I), g = "" + t;
  Ct(() => {
    function I() {
      if (!i.current) return;
      const C = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, C.observe(i.current, x), C;
    }
    function a() {
      var Q;
      if (!((Q = i.current) != null && Q["parentElement"])) return;
      const C = new MutationObserver((E) => {
        E.find((u) => {
          for (const c of u.removedNodes)
            if (c !== (o == null ? void 0 : o.current) && c === i.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((c) => {
            var h;
            c !== (o == null ? void 0 : o.current) && ((h = c.parentElement) == null || h.removeChild(c));
          });
        });
      }), x = {};
      return x.childList = !0, C.observe(i.current.parentElement, x), C;
    }
    const r = I(), B = a();
    return () => {
      B == null || B.disconnect(), r == null || r.disconnect();
    };
  });
  const n = {};
  return n.key = g, n;
}
const xc = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Ec({ cutOut: i, height: o, ignoreElement: t, width: e }) {
  const A = z(null), { key: g } = cc(A, t);
  return /* @__PURE__ */ y("div", { ref: A, style: xc, children: /* @__PURE__ */ y("svg", { viewBox: `0 0 ${e} ${o}`, children: [
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
  ] }) }, g);
}
function dc({ fullOverlay: i, ignoreElement: o, resolution: t }) {
  const e = TB(t), A = `${e.height * 100}%`, g = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ y(
    Ec,
    {
      cutOut: i || /* @__PURE__ */ y(Qc, { height: A, width: g, x: n, y: I }),
      height: t.height,
      ignoreElement: o,
      width: t.width
    }
  );
}
function lc({ cameraResolution: i, children: o, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = ct(), { appState: g, freemiumOverlayState: n } = Qt(), I = z(null), a = n !== Vo.HIDDEN && A !== Sg.Higher && i, r = n === Vo.VISIBLE, B = i && g === _A.RUNNING;
  return /* @__PURE__ */ y(YA, { children: [
    a && /* @__PURE__ */ y(
      dc,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: i
      }
    ),
    o,
    B && /* @__PURE__ */ y("div", { ref: I, children: /* @__PURE__ */ y(
      sc,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const uc = (i, o) => {
  if (fs()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    Wt.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
async function hc(i, o) {
  const { FaceContent: t } = We.v4, e = await si(i), A = await Va(o), g = {};
  g.image = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.faceContent = a, Xa(r);
}
async function fc(i, o) {
  const t = await hc(i, o);
  return _a(t);
}
function pc({ controller: i, onPhotoTakenInternal: o }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = bn(), g = bA(({ candidateSelectionImages: a, imageData: r, protoMessage: B, webMetadata: C }) => {
    uc(fa.FACE, a), e(r, B);
    const x = {};
    x.cameraProperties = C, o == null || o(x);
  }, [o, e]), n = bA(({ fps: a, processedImage: r }, B) => {
    const C = {};
    C.code = r.instructionCode, C.isEscalated = r.isEscalated, Ga(VA.INSTRUCTION_CHANGED, C), i && eQ(VA.DETECTED_FACE_CHANGED, r.detection, i.imageProcessor.validationService.getThresholds().faceConfidence);
    const x = {};
    x.detection = r.detection, x.fps = a, x.image = B, x.isInCandidateSelection = r.isInCandidateSelection, x.invalidValidators = r.invalidValidators, tQ(VA.FACE_DETECTION, x);
  }, [i]), I = {};
  return I.captureMode = t, I.controller = i, I.createProtoMessage = fc, I.onCapture = g, I.onDetection = n, I.sessionToken = A, I.customEvent = VA, I.fallbackInstruction = gA.FACE_NOT_PRESENT, I.instructionCodeMap = gA, I.checkToInstructionCodeMap = mB, I.imageCropSettings = Bs, VQ(I);
}
var jA;
class yc {
  constructor(o, t) {
    L(this, jA);
    this.instructionCodeCollector = o, this.config = t, v(this, jA, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return p(this, jA);
  }
  canEscalate(o) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(o) ? !1 : t.filter((A) => A === o).length / t.length >= this.config.threshold;
  }
  collect(o) {
    this.instructionCodeCollector.pushWithTimestamp(o);
  }
  isEscalated(o) {
    return p(this, jA).get(o) ?? !1;
  }
  escalate() {
    for (const [o, t] of p(this, jA).entries())
      !t && this.canEscalate(o) && (this.config.onEscalate(o), p(this, jA).set(o, !0));
  }
  reset() {
    p(this, jA).forEach((o, t) => {
      p(this, jA).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
jA = new WeakMap();
var Pt, se, $e;
class Dc extends Array {
  constructor(t) {
    super();
    L(this, Pt, -6415 + -913 * 8 + 13719);
    L(this, se, []);
    L(this, $e, !1);
    v(this, Pt, t);
  }
  clearAfterTimeout() {
    if (p(this, se).length === 1422 * 1 + 9410 + 10832 * -1) return;
    const t = Date.now(), e = p(this, se).findLastIndex((A) => t - A > p(this, Pt));
    e !== -(-53 * 72 + 1011 + -1403 * -2) && (v(this, $e, !0), this.splice(-5 * -1041 + 6281 + -5743 * 2, e + (11 * -517 + -4516 * 1 + 10204)), p(this, se).splice(587 * 17 + -1756 * 3 + -4711, e + (-1 * -2910 + 2 * 4022 + 9 * -1217)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), p(this, se).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return p(this, $e);
  }
  clear() {
    this.splice(0), p(this, se).splice(-216 + -5693 * -1 + 1 * -5477), v(this, $e, !1);
  }
}
Pt = new WeakMap(), se = new WeakMap(), $e = new WeakMap();
class wc {
  constructor(o, t, e, A, g) {
    D(this, "isDetectorInitialized", !1);
    D(this, "samVersion", null);
    D(this, "detection");
    this.imageProcessor = o, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = g;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new Y("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  runDetectionLoop(o) {
    this.detection && this.detection.stop(), this.detection = o, this.detection.run();
  }
  stopDetectionLoop() {
    var o, t;
    (o = this.detection) == null || o.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(o) {
    this.imageProcessor.validationService.thresholds = o;
  }
  areVersionsCompatible(o) {
    return o === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(o, t) {
    return "" + t.replace(Ba, "") + o;
  }
}
class mc {
  constructor() {
    D(this, "imageProcessor");
    D(this, "assetsDirectoryPath");
    D(this, "instructionEscalation");
    D(this, "compatibleSamVersion");
    D(this, "validationService");
    D(this, "detector");
  }
  setImageProcessor(o) {
    return this.imageProcessor = o, this;
  }
  setAssetsDirectoryPath(o) {
    return this.assetsDirectoryPath = o, this;
  }
  setCompatibleSamVersion(o) {
    return this.compatibleSamVersion = o, this;
  }
  setInstructionEscalation(o) {
    return this.instructionEscalation = o, this;
  }
  setValidationService(o) {
    return this.validationService = o, this;
  }
  setDetector(o) {
    return this.detector = o, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new Y("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new Y("AssetsDirectoryPath is required");
    if (!this.detector) throw new Y("Detector is required");
    if (!this.compatibleSamVersion) throw new Y("CompatibleSamVersion is required");
    if (!this.validationService) throw new Y("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void (-454 * -11 + -588 * 3 + -3230), this.instructionEscalation = void (-2 * -2377 + -1 * -718 + -5472), this.compatibleSamVersion = void (8933 * 1 + -6841 + -2092), this.detector = void (-99 * -9 + -226 * 26 + -1 * -4985), this.validationService = void (-959 + 115 * -55 + 1214 * 6), this;
  }
}
class bc {
  constructor() {
    D(this, "detectionRecord", []);
    D(this, "imagesWithTimestampForDuplicateDetection", new Ut(rs));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / cs, A = e / 2, g = o.length / (-3 * 2033 + 3203 + 42 * 69), n = await KQ(o.slice(g - A, g + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(o) {
    return { data: Ds(o), resolution: { width: o.width, height: o.height } };
  }
  async processDetectedObject({ detectedObject: o, image: t, imageData: e, timestamp: A }) {
    const g = Qa(o), n = this.validationService.validateDetectedObject(g, t);
    if (n.result.get("isPresent")) {
      const I = {};
      I.image = e, I.timestamp = A, this.collectImagesForDuplicateDetection(I);
    }
    return this.detectionRecord.push(o), { detection: g, validationResult: n.result, isValid: n.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class kc {
  constructor() {
    D(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new Y("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Gn extends wc {
  constructor(t, e, A, g, n, I) {
    super(A, g, n, e, I);
    D(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Ga(VA.INSTRUCTION_CHANGED, t, UB);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
D(Gn, "_instance");
class Gc extends mc {
  build() {
    return this.validateDependencies(), new Gn(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
class Nc extends bc {
  constructor(t, e) {
    super();
    D(this, "className", "FaceImageProcessor");
    D(this, "detector");
    D(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = jo(t), A = la(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), g = {};
    g.height = t.height, g.width = t.width;
    let n = await this.detector.detect(A.data, A.resolution, g);
    n = rc(n, jo(t));
    const I = {};
    return I.detectedObject = n, I.image = t, I.imageData = A.data, I.timestamp = e, this.processDetectedObject(I);
  }
}
var At, Ge, Ne;
class Fc {
  constructor(o) {
    L(this, At);
    L(this, Ge);
    L(this, Ne);
    v(this, At, o), v(this, Ge, /* @__PURE__ */ new Map());
  }
  validate() {
    p(this, At).forEach((o) => {
      p(this, Ge).set(o.name, o.evaluate());
    }), v(this, Ne, void (720 * 5 + 3485 + -1 * 7085));
  }
  isValid() {
    return p(this, Ne) === void (-1 * 6682 + -17 * 397 + 13431) && v(this, Ne, Array.from(p(this, Ge).values()).every((o) => o)), p(this, Ne);
  }
  get result() {
    return p(this, Ge);
  }
  get validators() {
    return p(this, At);
  }
}
At = new WeakMap(), Ge = new WeakMap(), Ne = new WeakMap();
var qt, Fe;
class FA {
  constructor(o, t) {
    L(this, qt);
    L(this, Fe);
    v(this, qt, o), v(this, Fe, t);
  }
  get threshold() {
    return p(this, Fe);
  }
  get name() {
    return p(this, qt);
  }
  isValueBelowThreshold(o) {
    return o < p(this, Fe);
  }
  isValueAboveThreshold(o) {
    return o > p(this, Fe);
  }
}
qt = new WeakMap(), Fe = new WeakMap();
const Sc = "isNotDim";
var jt;
class Rc extends FA {
  constructor(t, e) {
    super(Sc, t);
    L(this, jt);
    v(this, jt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, jt));
  }
}
jt = new WeakMap();
const Mc = "isNotSmall";
var Zt;
class vc extends FA {
  constructor(t, e) {
    super(Mc, t);
    L(this, Zt);
    v(this, Zt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, Zt));
  }
}
Zt = new WeakMap();
const Lc = "isNotBright";
var Vt;
class Jc extends FA {
  constructor(t, e) {
    super(Lc, t);
    L(this, Vt);
    v(this, Vt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(p(this, Vt));
  }
}
Vt = new WeakMap();
const Uc = "isPresent";
var _t;
class Yc extends FA {
  constructor(t, e) {
    super(Uc, t);
    L(this, _t);
    v(this, _t, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, _t));
  }
}
_t = new WeakMap();
const Wc = "isSharp";
var Xt;
class Oc extends FA {
  constructor(t, e) {
    super(Wc, t);
    L(this, Xt);
    v(this, Xt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, Xt));
  }
}
Xt = new WeakMap();
const Hc = "isLeftEyePresent";
var zt;
class Kc extends FA {
  constructor(t, e) {
    super(Hc, t);
    L(this, zt);
    v(this, zt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, zt));
  }
}
zt = new WeakMap();
const Tc = "isMouthPresent";
var $t;
class Pc extends FA {
  constructor(t, e) {
    super(Tc, t);
    L(this, $t);
    v(this, $t, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, $t));
  }
}
$t = new WeakMap();
const qc = "isMouthScoreNotTooLow";
var Ao;
class jc extends FA {
  constructor(t, e) {
    super(qc, t);
    L(this, Ao);
    v(this, Ao, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, Ao));
  }
}
Ao = new WeakMap();
const Zc = "isMouthScoreNotTooHigh";
var eo;
class Vc extends FA {
  constructor(t, e) {
    super(Zc, t);
    L(this, eo);
    v(this, eo, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(p(this, eo));
  }
}
eo = new WeakMap();
const _c = "isNotLarge";
var to;
class Xc extends FA {
  constructor(t, e) {
    super(_c, t);
    L(this, to);
    v(this, to, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(p(this, to));
  }
}
to = new WeakMap();
const zc = "isNotPitched";
var oo;
const Nn = class Nn extends FA {
  constructor(t, e) {
    super(zc, Nn.calculatePitchAngleAccelerationThreshold(t));
    L(this, oo);
    v(this, oo, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Is * Math.sin(t * (Math.PI / (-1 * -6961 + -506 + -6275)));
  }
  evaluate() {
    const { z: t } = p(this, oo) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
oo = new WeakMap();
let _g = Nn;
const $c = "isRightEyePresent";
var io;
class Ax extends FA {
  constructor(t, e) {
    super($c, t);
    L(this, io);
    v(this, io, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(p(this, io));
  }
}
io = new WeakMap();
const ex = "isNotOutOfBounds";
var go, Se;
class tx extends FA {
  constructor(t, e, A) {
    super(ex, t);
    L(this, go);
    L(this, Se);
    v(this, go, e), v(this, Se, A);
  }
  evaluate() {
    const t = ha(p(this, Se), this.threshold, jo(p(this, Se))), e = tr(p(this, go), p(this, Se));
    return ks(e, t);
  }
}
go = new WeakMap(), Se = new WeakMap();
class ox {
  static getFaceValidationInstance(o, t, e, A) {
    return new Fc([new Yc(o.faceConfidence, t.confidence), new Kc(o.leftEye.confidence, t.leftEye.confidence), new Ax(o.rightEye.confidence, t.rightEye.confidence), new vc(o.minFaceSizeRatio, t.faceSize), new Xc(o.maxFaceSizeRatio, t.faceSize), new Oc(o.sharpnessThreshold, t.sharpness), new Rc(o.brightnessLowThreshold, t.brightness), new Jc(o.brightnessHighThreshold, t.brightness), new tx(o.outOfBoundsThreshold, t, e), new _g(o.devicePitchAngleThreshold, A), new Pc(o.mouth.confidence, t.mouth.confidence), new Vc(o.mouth.status.max, t.mouth.status), new jc(o.mouth.status.min, t.mouth.status)]);
  }
}
class ix extends kc {
  constructor() {
    super(...arguments);
    D(this, "className", "FaceValidationService");
    D(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = ox.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const or = Symbol("Comlink.proxy"), gx = Symbol("Comlink.endpoint"), nx = Symbol("Comlink.releaseProxy"), ig = Symbol("Comlink.finalizer"), Uo = Symbol("Comlink.thrown"), ir = (i) => typeof i == "object" && i !== null || typeof i == "function", Ix = {
  canHandle: (i) => ir(i) && i[or],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return nr(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), ar(i);
  }
}, ax = {
  canHandle: (i) => ir(i) && Uo in i,
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
}, gr = /* @__PURE__ */ new Map([
  ["proxy", Ix],
  ["throw", ax]
]);
function rx(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function nr(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!rx(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: g, type: n, path: I } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(we);
    let r;
    try {
      const B = I.slice(0, -1).reduce((x, Q) => x[Q], i), C = I.reduce((x, Q) => x[Q], i);
      switch (n) {
        case "GET":
          r = C;
          break;
        case "SET":
          B[I.slice(-1)[0]] = we(A.data.value), r = !0;
          break;
        case "APPLY":
          r = C.apply(B, a);
          break;
        case "CONSTRUCT":
          {
            const x = new C(...a);
            r = xx(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: Q } = new MessageChannel();
            nr(i, Q), r = cx(x, [x]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (B) {
      r = { value: B, [Uo]: 0 };
    }
    Promise.resolve(r).catch((B) => ({ value: B, [Uo]: 0 })).then((B) => {
      const [C, x] = xi(B);
      o.postMessage(Object.assign(Object.assign({}, C), { id: g }), x), n === "RELEASE" && (o.removeEventListener("message", e), Ir(o), ig in i && typeof i[ig] == "function" && i[ig]());
    }).catch((B) => {
      const [C, x] = xi({
        value: new TypeError("Unserializable return value"),
        [Uo]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, C), { id: g }), x);
    });
  }), o.start && o.start();
}
function Cx(i) {
  return i.constructor.name === "MessagePort";
}
function Ir(i) {
  Cx(i) && i.close();
}
function ar(i, o) {
  return Xg(i, [], o);
}
function fo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function rr(i) {
  return je(i, {
    type: "RELEASE"
  }).then(() => {
    Ir(i);
  });
}
const Qi = /* @__PURE__ */ new WeakMap(), ci = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (Qi.get(i) || 0) - 1;
  Qi.set(i, o), o === 0 && rr(i);
});
function Bx(i, o) {
  const t = (Qi.get(o) || 0) + 1;
  Qi.set(o, t), ci && ci.register(i, o, i);
}
function sx(i) {
  ci && ci.unregister(i);
}
function Xg(i, o = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(g, n) {
      if (fo(e), n === nx)
        return () => {
          sx(A), rr(i), e = !0;
        };
      if (n === "then") {
        if (o.length === 0)
          return { then: () => A };
        const I = je(i, {
          type: "GET",
          path: o.map((a) => a.toString())
        }).then(we);
        return I.then.bind(I);
      }
      return Xg(i, [...o, n]);
    },
    set(g, n, I) {
      fo(e);
      const [a, r] = xi(I);
      return je(i, {
        type: "SET",
        path: [...o, n].map((B) => B.toString()),
        value: a
      }, r).then(we);
    },
    apply(g, n, I) {
      fo(e);
      const a = o[o.length - 1];
      if (a === gx)
        return je(i, {
          type: "ENDPOINT"
        }).then(we);
      if (a === "bind")
        return Xg(i, o.slice(0, -1));
      const [r, B] = X0(I);
      return je(i, {
        type: "APPLY",
        path: o.map((C) => C.toString()),
        argumentList: r
      }, B).then(we);
    },
    construct(g, n) {
      fo(e);
      const [I, a] = X0(n);
      return je(i, {
        type: "CONSTRUCT",
        path: o.map((r) => r.toString()),
        argumentList: I
      }, a).then(we);
    }
  });
  return Bx(A, i), A;
}
function Qx(i) {
  return Array.prototype.concat.apply([], i);
}
function X0(i) {
  const o = i.map(xi);
  return [o.map((t) => t[0]), Qx(o.map((t) => t[1]))];
}
const Cr = /* @__PURE__ */ new WeakMap();
function cx(i, o) {
  return Cr.set(i, o), i;
}
function xx(i) {
  return Object.assign(i, { [or]: !0 });
}
function xi(i) {
  for (const [o, t] of gr)
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
    Cr.get(i) || []
  ];
}
function we(i) {
  switch (i.type) {
    case "HANDLER":
      return gr.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function je(i, o, t) {
  return new Promise((e) => {
    const A = Ex();
    i.addEventListener("message", function g(n) {
      !n.data || !n.data.id || n.data.id !== A || (i.removeEventListener("message", g), e(n.data));
    }), i.start && i.start(), i.postMessage(Object.assign({ id: A }, o), t);
  });
}
function Ex() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const dx = "SAM v1.44.6 for idcards", lx = "/dot-assets/smile/dot-Dk4zHcWg.js";
function ux() {
  const { handleError: i } = Qt(), { acceleration: o } = rQ(), { assetsDirectoryPath: t, thresholds: e } = bn(), { analytics: A } = ki(), [g, n] = rA();
  K(() => {
    (async () => {
      const r = Gn.getWorkerPath(lx, t), B = {};
      B.type = "module";
      const C = new Worker(new URL(r, import.meta.url), B), x = ar(C), Q = await new x(), E = new ix(), d = new Nc(Q, E), u = new yc(new Dc(og.timeout), { threshold: og.threshold, instructions: og.instructions, onEscalate: (h) => {
        oQ(Jt.INSTRUCTION_ESCALATED, h), A == null || A.trackEscalated(h);
      } }), c = new Gc().setDetector(Q).setValidationService(E).setImageProcessor(d).setCompatibleSamVersion(dx).setAssetsDirectoryPath(t).setInstructionEscalation(u).build();
      try {
        await c.init(), n(c);
      } catch (h) {
        if (h instanceof Error) {
          i(Y.fromError(h));
          return;
        }
      }
    })();
  }, [A, i, t]), K(() => {
    g && g.setThresholds(e);
  }, [g, e]), K(() => {
    g && g.setAcceleration(o);
  }, [o, g]);
  const I = {};
  return I.controller = g, I;
}
function hx({ onPhotoTakenInternal: i }) {
  const { isCameraReady: o } = ia(), { sunfish: t } = ct(), { controller: e } = ux(), { cameraResolution: A, detectionDetails: g, shouldCameraMirror: n, videoRef: I } = pc({
    controller: e,
    onPhotoTakenInternal: i
  });
  return /* @__PURE__ */ y(YA, { children: /* @__PURE__ */ y(
    lc,
    {
      cameraResolution: A,
      detectionDetails: g,
      shouldMirror: n,
      children: /* @__PURE__ */ y(
        pB,
        {
          ref: I,
          $isImageMirror: n,
          $isVisible: t && o,
          autoPlay: !0,
          id: YB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function fx(i, o, t) {
  const { SmileLivenessContent: e } = We.v4, A = await si(i), g = await si(o), n = await Va(t), I = {};
  I.neutralExpressionFaceImage = A, I.smileExpressionFaceImage = g, I.metadata = n;
  const a = I, r = e.verify(a);
  if (r) throw Error(r);
  const B = e.create(a), C = {};
  return C.smileLivenessContent = B, Xa(C);
}
async function px(i, o, t) {
  const e = await fx(i, o, t);
  return _a(e);
}
function yx() {
  return { images: { fps: new Ut(65 * -6 + -7033 + -1 * -7453), mouthStatus: new Ut(1053 * -1 + -1 * 725 + 1783 * 1) }, imageResolution: void (-467 * 1 + -536 * -17 + -8645) };
}
function Dx({ skip: i }) {
  const o = z(yx()), { analytics: t } = ki(), { crosshatch: e } = ct(), A = z(!1);
  function g() {
    const r = o.current, B = Ue(r.images.fps), C = Ue(r.images.mouthStatus);
    A.current = !0;
    const x = {};
    x.customer = e == null ? void 0 : e.customer, x.duration = _0, x.averageFps = B, x.imageResolution = r.imageResolution, x.averageExpressionScore = C, t == null || t.trackLongCapture(x);
  }
  const n = {};
  n.callback = g, n.delay = _0 * (-293 * 5 + -2742 + 5207), n.skip = i || A.current, $a(n);
  const I = bA((r) => {
    if (!r.detail) return;
    const { data: B } = r.detail;
    o.current.images.fps.pushFixed(B.fps), o.current.images.mouthStatus.pushFixed(B.detection.mouth.status), o.current.imageResolution = B.imageResolution;
  }, []);
  ln(VA.FACE_DETECTION, I);
  const a = {};
  return a.wasEventTriggered = A, a;
}
function wx(i) {
  const o = i.sort((A, g) => A - g), t = Math.floor(o.length / (-3523 * -2 + -6042 + -1002));
  return o.length % (1 * -622 + -3 * -2253 + -3 * 2045) === 7611 + 1 * -3092 + 4519 * -1 ? (o[t - (5 * -1382 + 3134 * 2 + 643 * 1)] + o[t]) / (3 * 1366 + 1613 * -1 + 2483 * -1) : o[t];
}
function mx() {
  const [i, o] = rA(void 0), t = z(!0), e = z([]), A = bA((a) => {
    if (!a.detail || !t.current) return;
    const { data: r } = a.detail;
    if (!r.isInCandidateSelection) return;
    const B = r.detection.mouth.status;
    B < kn && e.current.push(B);
  }, []);
  function g() {
    e.current = [], t.current = !0, o(void (-2 * 1049 + -775 * -3 + -227));
  }
  function n() {
    t.current = !1, o(wx(e.current));
  }
  const I = {};
  return I.median = i, I.reset = g, I.stop = n, I.handleFaceDetection = A, I;
}
function bx(i) {
  return function() {
    const { handleFaceDetection: t, median: e, reset: A, stop: g } = i();
    ln(VA.FACE_DETECTION, t);
    const n = {};
    return n.median = e, n.reset = A, n.stop = g, n;
  };
}
function kx({ phase: i }) {
  const [o, t] = rA(Ko.AUTO_CAPTURE), e = Ar(o);
  function A() {
    t(Ko.WAIT_FOR_REQUEST), e(() => Hs(Fo.FIRST_FRAME));
  }
  const g = {};
  g.callback = A, g.delay = ac, g.skip = i === qA.NEUTRAL;
  const { clear: n, isActive: I, reset: a } = $a(g), r = {};
  return r.captureMode = o, r.restart = a, r.stop = n, r.isActive = I, r;
}
function Gx(i, o, t) {
  switch (i) {
    case qA.SMILE:
      return { ...Ic(o), ...t };
    case qA.NEUTRAL:
    default:
      return { ...gc(), ...t };
  }
}
const Nx = ({
  assetsDirectoryPath: i,
  onComplete: o,
  sessionToken: t,
  thresholds: e
}) => {
  var P;
  const { analytics: A } = ki(), { appState: g, handleAppStateChange: n, handleError: I, setIsCameraReady: a } = ia(), { cameraProperties: r, mergeCameraProperties: B } = $Q(), C = Ar(g), x = _e(qA.NEUTRAL), Q = _e(null), E = _e(null), { captureMode: d, stop: u } = kx({ phase: x.value }), {
    median: c,
    reset: h,
    stop: m
  } = bx(mx)();
  Dx({
    skip: x.value !== qA.NEUTRAL || g !== LA.RUNNING
  });
  function R(SA) {
    x.value = SA, Ug(Jt.STATUS_CHANGED, { phase: SA });
  }
  function M() {
    u(), h(), R(qA.NEUTRAL), Q.value = null, E.value = null, A == null || A.reset();
  }
  oc(tc)({
    onFaceTrackingLost: () => {
      n(LA.WAITING), M(), C(() => n(LA.RUNNING));
    },
    skipOutsideOfCandidateSelection: x.value === qA.NEUTRAL
  }), XQ({
    onBlur: () => {
      a(!1), n(LA.LOADING), M();
    },
    onFocus: () => {
      a(!0), n(LA.RUNNING);
    }
  });
  function J(SA) {
    Q.value = SA, m(), R(qA.SMILE), n(LA.RUNNING);
  }
  async function w(SA) {
    u(), E.value = SA;
    try {
      if (!Q.value || !E.value)
        throw new Y("Missing face data");
      const de = {
        sessionToken: t,
        web: r.value
      }, Ri = await px(
        Q.value.image,
        E.value.image,
        de
      ), ro = [Q.value, E.value];
      o(ro, Ri), A == null || A.trackLivenessProcess(ro), n(LA.DONE);
    } catch (de) {
      de instanceof Error && I(Y.fromError(de));
      return;
    }
  }
  const q = {
    [qA.NEUTRAL]: J,
    [qA.SMILE]: w
  }, dA = ((P = Q.value) == null ? void 0 : P.data.detection.mouth.status) ?? kn, V = Gx(
    x.value,
    c ?? dA,
    e
  ), pA = fA(
    () => ({
      assetsDirectoryPath: i,
      captureMode: d,
      onPhotoTaken: q[x.value],
      thresholds: V
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, d, x.value, V]
  );
  return /* @__PURE__ */ y(ic, { children: /* @__PURE__ */ y(ec, { cameraOptions: pA, children: /* @__PURE__ */ y(hx, { onPhotoTakenInternal: B }) }) });
};
function Fx({ initAppState: i, onError: o }) {
  const [t, e] = rA(i), [A, g] = rA(), [n, I] = rA(!1), a = z(o);
  K(() => {
    a.current = o;
  }, [o]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = g, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function Sx(i) {
  return i !== LA.RUNNING && i !== LA.WAITING ? Vo.VISIBLE : Vo.VISIBLE_WITH_MASK;
}
function Rx({ onError: i }) {
  const { appState: o, error: t, isCameraReady: e, onErrorRef: A, setAppState: g, setError: n, setIsCameraReady: I } = Fx({
    initAppState: LA.LOADING,
    onError: i
  }), a = Sx(o), r = bA(
    (C) => {
      Ug(Jt.STATUS_CHANGED, { state: LA.ERROR, error: C }), I(!1), A.current(C), n(C), g(LA.ERROR);
    },
    [I, A, n, g]
  ), B = bA(
    (C) => {
      g(C), Ug(Jt.STATUS_CHANGED, { state: C });
    },
    [g]
  );
  return {
    appState: o,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: I,
    handleAppStateChange: B,
    handleError: r,
    error: t
  };
}
var Si = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(Si || {});
class Mx {
  constructor() {
    D(this, "appKey", "");
    D(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, g = "https://innovatrics.count.ly/i?", n = {};
    n.app_key = this.appKey, n.device_id = this.deviceId;
    const I = uo(n);
    try {
      await fetch("" + g + I + "&" + o, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: ca() }, A = { organization: xa(window.location.href) }, g = uo({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(g);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = uo(o);
    await this.countlyFetch(t);
  }
  async sendEvent(o, t, e) {
    const A = {};
    A.key = o, A.count = 1, A.dur = e, A.segmentation = t;
    const g = [A], n = uo({ events: JSON.stringify(g) });
    await this.countlyFetch(n);
  }
  async sendAutoCaptureEvent(o, t) {
    await this.sendEvent(Si.AUTO_CAPTURE, o, t);
  }
}
const pt = new Mx();
class vx {
  constructor() {
    D(this, "countly", pt);
  }
  createSegmentation(o) {
    return { appVersion: ca(), ...o };
  }
  init(o) {
    if (ds()) return;
    const t = EQ();
    pt.init(t, o);
  }
  endSession() {
    pt.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const A = this.createSegmentation(e);
    pt.sendAutoCaptureEvent(A);
  }
  trackEscalated(o) {
    const t = {};
    t.instructionCode = o;
    const e = this.createSegmentation(t);
    pt.sendEvent(Si.ESCALATION_TRIGGER, e);
  }
}
class Lx extends vx {
  constructor() {
    super(...arguments);
    D(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class Jx extends Lx {
  trackLivenessProcess(o) {
    var B, C, x, Q, E, d;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = o, [A, g] = this.captureProcessAnalytics, n = lQ(A.averageFps + (g == null ? void 0 : g.averageFps)) / (-1172 + 1 * 1174), I = M0(A.captureProcessDurationInMs), a = M0(g.captureProcessDurationInMs), r = this.createSegmentation({ faceSize: v0((B = e.data.detection) == null ? void 0 : B.faceSize), confidence: v0((C = t.data.detection) == null ? void 0 : C.confidence), imageResolution: ((Q = (x = t.data) == null ? void 0 : x["imageResolution"]) == null ? void 0 : Q.width) + "x" + ((d = (E = t.data) == null ? void 0 : E["imageResolution"]) == null ? void 0 : d.height), averageFps: n, captureTimeNeutral: R0(I), captureTimeSmile: R0(a), camera: dQ(A == null ? void 0 : A.deviceName, A.facingMode), instructionSet: A.instructionSet });
    this.countly.sendAutoCaptureEvent(r, I + a), this.reset();
  }
  async trackLongCapture(o) {
    const { averageExpressionScore: t, averageFps: e, customer: A, duration: g, imageResolution: n } = o, I = this.createSegmentation({ imageResolution: n, averageFps: e, instructionSet: await Ja(), expressionScore: t, ...A && { customer: A } });
    this.countly.sendEvent(Si.LONG_CAPTURE_SMILE, I, g);
  }
}
const Ux = new Jx(), Yx = ({ props: i }) => i ? /* @__PURE__ */ y(cB, { target: i.styleTarget, children: /* @__PURE__ */ y(
  Fs,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: Jg.getInstance(),
    children: /* @__PURE__ */ y(Ms, { analytics: Ux, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ y(
      kB,
      {
        value: Rx({
          onError: i.onError
        }),
        children: /* @__PURE__ */ y(ga, { children: /* @__PURE__ */ y(Ks, { children: /* @__PURE__ */ y(Nx, { ...i }) }) })
      }
    ) })
  }
) }) : null;
wr(Yx, "x-dot-smile-liveness", ["props"]);
