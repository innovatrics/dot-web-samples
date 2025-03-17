var Y0 = Object.defineProperty;
var Bn = (o) => {
  throw TypeError(o);
};
var W0 = (o, g, t) => g in o ? Y0(o, g, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[g] = t;
var w = (o, g, t) => W0(o, typeof g != "symbol" ? g + "" : g, t), Qn = (o, g, t) => g.has(o) || Bn("Cannot " + t);
var y = (o, g, t) => (Qn(o, g, "read from private field"), t ? t.call(o) : g.get(o)), Y = (o, g, t) => g.has(o) ? Bn("Cannot add the same private member more than once") : g instanceof WeakSet ? g.add(o) : g.set(o, t), L = (o, g, t, e) => (Qn(o, g, "write to private field"), e ? e.call(o, t) : g.set(o, t), t);
var jt, k, RI, MI, Ee, sn, vI, Og, Fi, Hg, Kg, LI, wt = {}, JI = [], O0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ng = Array.isArray;
function $A(o, g) {
  for (var t in g) o[t] = g[t];
  return o;
}
function UI(o) {
  var g = o.parentNode;
  g && g.removeChild(o);
}
function lA(o, g, t) {
  var e, A, i, n = {};
  for (i in g) i == "key" ? e = g[i] : i == "ref" ? A = g[i] : n[i] = g[i];
  if (arguments.length > 2 && (n.children = arguments.length > 17 * 412 + -3779 + -3222 ? jt.call(arguments, 5209 + 79 * -33 + 10 * -260) : t), typeof o == "function" && o.defaultProps != null)
    for (i in o.defaultProps) void (12426 + -12426 * 1) === n[i] && (n[i] = o.defaultProps[i]);
  return ht(o, n, e, A, null);
}
function ht(o, g, t, e, A) {
  var i = {};
  i.type = o, i.props = g, i.key = t, i.ref = e, i.__k = null, i.__ = null, i.__b = 0, i.__e = null, i.__d = void 0, i.__c = null, i.constructor = void (-1 * 359 + -5438 + 11 * 527), i.__v = A ?? ++RI, i.__i = -(1 * 7579 + -17 * -571 + -1 * 17285), i.__u = 0;
  var n = i;
  return A == null && k.vnode != null && k.vnode(n), n;
}
function H0() {
  var o = {};
  return o.current = null, o;
}
function JA(o) {
  return o.children;
}
function vA(o, g) {
  this.props = o, this.context = g;
}
function Ge(o, g) {
  if (g == null) return o.__ ? Ge(o.__, o.__i + (2905 + -24 * 121)) : null;
  for (var t; g < o.__k.length; g++) if ((t = o.__k[g]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? Ge(o) : null;
}
function YI(o) {
  var g, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, g = -7323 + -1619 * 6 + 17037 * 1; g < o.__k.length; g++) if ((t = o.__k[g]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return YI(o);
  }
}
function Tg(o) {
  (!o.__d && (o.__d = !(-5 * 154 + -9145 + 1983 * 5)) && Ee.push(o) && !Go.__r++ || sn !== k.debounceRendering) && ((sn = k.debounceRendering) || vI)(Go);
}
function Go() {
  var o, g, t, e, A, i, n, I;
  for (Ee.sort(Og); o = Ee.shift(); ) o.__d && (g = Ee.length, e = void (10 * -371 + -1 * -4397 + -687), i = (A = (t = o).__v).__e, n = [], I = [], t.__P && ((e = $A({}, A)).__v = A.__v + (-14177 + 4726 * 3), k.vnode && k.vnode(e), Si(t.__P, e, A, t.__n, t.__P.namespaceURI, 1577 * -5 + 3 * -1658 + 12891 & A.__u ? [i] : null, n, i ?? Ge(A), !!(8 * -540 + -2695 + 9 * 783 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, HI(n, e, I), e.__e != i && YI(e)), Ee.length > g && Ee.sort(Og));
  Go.__r = 5917 + -5309 * -1 + -11226;
}
function WI(o, g, t, e, A, i, n, I, a, r, Q) {
  var C, x, c, E, l, u = e && e.__k || JI, s = g.length;
  for (t.__d = a, K0(t, g, u), a = t.__d, C = 0; C < s; C++) (c = t.__k[C]) != null && typeof c != "boolean" && typeof c != "function" && (x = -(1 * -2728 + -275 * -19 + -2496) === c.__i ? wt : u[c.__i] || wt, c.__i = C, Si(o, c, x, A, i, n, I, a, r, Q), E = c.__e, c.ref && x.ref != c.ref && (x.ref && Ri(x.ref, null, c), Q.push(c.ref, c.__c || E, c)), l == null && E != null && (l = E), -14539 * -1 + 101 * 743 + -24046 & c.__u || x.__k === c.__k ? (a && typeof c.type == "string" && !o.contains(a) && (a = Ge(x)), a = OI(c, a, o)) : typeof c.type == "function" && void (5 * -160 + 1867 + -11 * 97) !== c.__d ? a = c.__d : E && (a = E.nextSibling), c.__d = void (-3344 + -19 * -176), c.__u &= -(-261165 + -228887 * -2));
  t.__d = a, t.__e = l;
}
function K0(o, g, t) {
  var e, A, i, n, I, a = g.length, r = t.length, Q = r, C = 0;
  for (o.__k = [], e = -2 * -3261 + -2 * -1244 + -9010; e < a; e++) n = e + C, (A = o.__k[e] = (A = g[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? ht(null, A, null, null, null) : ng(A) ? ht(JA, { children: A }, null, null, null) : void (354 * 10 + 3468 + -7008) === A.constructor && A.__b > 11 * 610 + -39 * 249 + -1 * -3001 ? ht(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (29 * -165 + -3361 * -2 + -1936), I = T0(A, t, n, Q), A.__i = I, i = null, I !== -1 && (Q--, (i = t[I]) && (i.__u |= -17 * 6529 + 31999 + 210066)), i == null || i.__v === null ? (-(-507 * 11 + 34 * 115 + 1668) == I && C--, typeof A.type != "function" && (A.__u |= 18118 + -3 * -15806)) : I !== n && (I == n - (8467 * 1 + 2435 + -10901 * 1) ? C = I - n : I == n + (4304 * -2 + 7698 + 911) ? C++ : I > n ? Q > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= 65536))) : (i = t[n]) && i.key == null && i.__e && 3828 + 3 * -1276 == (1 * -93237 + 111141 + 113168 & i.__u) && (i.__e == o.__d && (o.__d = Ge(i)), Pg(i, i, !(-2124 * 4 + 3121 * 1 + 5376)), t[n] = null, Q--);
  if (Q)
    for (e = -1 * -8469 + 457 * -11 + -3442; e < r; e++) (i = t[e]) != null && -684 + 1 * 701 + 1 * -17 == (-1 * 5803 + -55162 + -192037 * -1 & i.__u) && (i.__e == o.__d && (o.__d = Ge(i)), Pg(i, i));
}
function OI(o, g, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = 0; e && A < e.length; A++) e[A] && (e[A].__ = o, g = OI(e[A], g, t));
    return g;
  }
  o.__e != g && (t.insertBefore(o.__e, g || null), g = o.__e);
  do
    g = g && g.nextSibling;
  while (g != null && -166 + -26 * 52 + 1526 === g.nodeType);
  return g;
}
function ee(o, g) {
  return g = g || [], o == null || typeof o == "boolean" || (ng(o) ? o.some(function(t) {
    ee(t, g);
  }) : g.push(o)), g;
}
function T0(o, g, t, e) {
  var A = o.key, i = o.type, n = t - (-7754 + 1 * 7755), I = t + 1, a = g[t];
  if (a === null || a && A == a.key && i === a.type && 1150 + -25 * 46 == (96861 + 43565 * -5 + -252036 * -1 & a.__u)) return t;
  if (e > (a != null && -3627 + -71 * 50 + -1 * -7177 == (-16847 * -2 + 11197 * -7 + -1 * -175757 & a.__u) ? -1 * 1187 + -1607 * 2 + -4402 * -1 : 0)) for (; n >= 8276 + 205 * -19 + -4381 * 1 || I < g.length; ) {
    if (n >= 2153 * 1 + 8989 * -1 + 2 * 3418) {
      if ((a = g[n]) && -3895 + -95 * -41 == (146537 + 3 * -58489 + -17778 * -9 & a.__u) && A == a.key && i === a.type) return n;
      n--;
    }
    if (I < g.length) {
      if ((a = g[I]) && -1 * 72 + 6036 + -3 * 1988 == (131072 & a.__u) && A == a.key && i === a.type) return I;
      I++;
    }
  }
  return -(-6483 * 1 + -1603 * 1 + 8087);
}
function cn(o, g, t) {
  g[0] === "-" ? o.setProperty(g, t ?? "") : o[g] = t == null ? "" : typeof t != "number" || O0.test(g) ? t : t + "px";
}
function Ao(o, g, t, e, A) {
  var i;
  A: if (g === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (g in e) t && g in t || cn(o.style, g, "");
      if (t)
        for (g in t) e && t[g] === e[g] || cn(o.style, g, t[g]);
    }
  else if (g[149 * 67 + 7725 + -17708] === "o" && g[6263 + -3 * -919 + -9019] === "n") i = g !== (g = g.replace(/(PointerCapture)$|Capture$/i, "$1")), g = g.toLowerCase() in o || g === "onFocusOut" || g === "onFocusIn" ? g.toLowerCase().slice(61 * 107 + 964 * -5 + -1705) : g.slice(43 * -94 + -2351 + 6395), o.l || (o.l = {}), o.l[g + i] = t, t ? e ? t.u = e.u : (t.u = Fi, o.addEventListener(g, i ? Kg : Hg, i)) : o.removeEventListener(g, i ? Kg : Hg, i);
  else {
    if (A == "http://www.w3.org/2000/svg") g = g.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (g != "width" && g != "height" && g != "href" && g != "list" && g != "form" && g != "tabIndex" && g != "download" && g != "rowSpan" && g != "colSpan" && g != "role" && g != "popover" && g in o) try {
      o[g] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(1619 * -1 + 154 + 1466) === t && g[-2658 * 3 + -286 + 8264] !== "-" ? o.removeAttribute(g) : o.setAttribute(g, g == "popover" && 5728 * -1 + 6835 + -1106 == t ? "" : t));
  }
}
function xn(o) {
  return function(g) {
    if (this.l) {
      var t = this.l[g.type + o];
      if (g.t == null) g.t = Fi++;
      else if (g.t < t.u) return;
      return t(k.event ? k.event(g) : g);
    }
  };
}
function Si(o, g, t, e, A, i, n, I, a, r) {
  var Q, C, x, c, E, l, u, s, h, m, R, M, U, D, j, fA, $ = g.type;
  if (void (-1 * 3299 + 9602 + -6303) !== g.constructor) return null;
  8233 + 1 * -8105 & t.__u && (a = !!(-1 * -5281 + -8283 + 74 * 41 & t.__u), i = [I = g.__e = t.__e]), (Q = k.__b) && Q(g);
  A: if (typeof $ == "function") try {
    if (s = g.props, h = "prototype" in $ && $.prototype.render, m = (Q = $.contextType) && e[Q.__c], R = Q ? m ? m.props.value : Q.__ : e, t.__c ? u = (C = g.__c = t.__c).__ = C.__E : (h ? g.__c = C = new $(s, R) : (g.__c = C = new vA(s, R), C.constructor = $, C.render = q0), m && m.sub(C), C.props = s, C.state || (C.state = {}), C.context = R, C.__n = e, x = C.__d = !(6549 + -6549 * 1), C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && $.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = $A({}, C.__s)), $A(C.__s, $.getDerivedStateFromProps(s, C.__s))), c = C.props, E = C.state, C.__v = g, x) h && $.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && $.getDerivedStateFromProps == null && s !== c && C.componentWillReceiveProps != null && C.componentWillReceiveProps(s, R), !C.__e && (C.shouldComponentUpdate != null && !(-21 * -7 + 3392 + -3538) === C.shouldComponentUpdate(s, C.__s, R) || g.__v === t.__v)) {
        for (g.__v !== t.__v && (C.props = s, C.state = C.__s, C.__d = !(9119 + -94 * 97)), g.__e = t.__e, g.__k = t.__k, g.__k.forEach(function(FA) {
          FA && (FA.__ = g);
        }), M = -7848 + -872 * -9; M < C._sb.length; M++) C.__h.push(C._sb[M]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(s, C.__s, R), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(c, E, l);
      });
    }
    if (C.context = R, C.props = s, C.__P = o, C.__e = !(-9681 + -2 * 2435 + 14552), U = k.__r, D = 3943 * -1 + 1148 + 65 * 43, h) {
      for (C.state = C.__s, C.__d = !(-6209 * 1 + 9609 + -103 * 33), U && U(g), Q = C.render(C.props, C.state, C.context), j = 14 * -635 + -8433 * 1 + -17 * -1019; j < C._sb.length; j++) C.__h.push(C._sb[j]);
      C._sb = [];
    } else do
      C.__d = !(1 * -2834 + -1 * -8222 + -5387), U && U(g), Q = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++D < -4415 + 8 * 555);
    C.state = C.__s, C.getChildContext != null && (e = $A($A({}, e), C.getChildContext())), h && !x && C.getSnapshotBeforeUpdate != null && (l = C.getSnapshotBeforeUpdate(c, E)), WI(o, ng(fA = Q != null && Q.type === JA && Q.key == null ? Q.props.children : Q) ? fA : [fA], g, t, e, A, i, n, I, a, r), C.base = g.__e, g.__u &= -(166 * 59 + 782 + 5 * -2083), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (FA) {
    g.__v = null, a || i != null ? (g.__e = I, g.__u |= a ? -4099 + 4486 * 1 + 227 * -1 : 2951 * -3 + 2 * 2458 + -1323 * -3, i[i.indexOf(I)] = null) : (g.__e = t.__e, g.__k = t.__k), k.__e(FA, g, t);
  }
  else i == null && g.__v === t.__v ? (g.__k = t.__k, g.__e = t.__e) : g.__e = P0(t.__e, g, t, e, A, i, n, a, r);
  (Q = k.diffed) && Q(g);
}
function HI(o, g, t) {
  g.__d = void (3325 * 2 + 2263 * 1 + 1 * -8913);
  for (var e = -2 * -587 + -3039 + 1865; e < t.length; e++) Ri(t[e], t[++e], t[++e]);
  k.__c && k.__c(g, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(i) {
        i.call(A);
      });
    } catch (i) {
      k.__e(i, A.__v);
    }
  });
}
function P0(o, g, t, e, A, i, n, I, a) {
  var r, Q, C, x, c, E, l, u = t.props, s = g.props, h = g.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), i != null) {
    for (r = 614 * -11 + -9577 + 1 * 16331; r < i.length; r++) if ((c = i[r]) && "setAttribute" in c == !!h && (h ? c.localName === h : -19366 + 19369 * 1 === c.nodeType)) {
      o = c, i[r] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(s);
    o = document.createElementNS(A, h, s.is && s), i = null, I = !(-332 * -10 + 2700 + -1 * 6019);
  }
  if (h === null) u === s || I && o.data === s || (o.data = s);
  else {
    if (i = i && jt.call(o.childNodes), u = t.props || wt, !I && i != null)
      for (u = {}, r = 0; r < o.attributes.length; r++) u[(c = o.attributes[r]).name] = c.value;
    for (r in u) if (c = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = c;
      else if (r !== "key" && !(r in s)) {
        if (r == "value" && "defaultValue" in s || r == "checked" && "defaultChecked" in s) continue;
        Ao(o, r, null, c, A);
      }
    }
    for (r in s) c = s[r], r == "children" ? x = c : r == "dangerouslySetInnerHTML" ? Q = c : r == "value" ? E = c : r == "checked" ? l = c : r === "key" || I && typeof c != "function" || u[r] === c || Ao(o, r, c, u[r], A);
    if (Q) I || C && (Q.__html === C.__html || Q.__html === o.innerHTML) || (o.innerHTML = Q.__html), g.__k = [];
    else if (C && (o.innerHTML = ""), WI(o, ng(x) ? x : [x], g, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, i, n, i ? i[43 * 149 + 6 * -676 + -2351] : t.__k && Ge(t, 0), I, a), i != null)
      for (r = i.length; r--; ) i[r] != null && UI(i[r]);
    I || (r = "value", void (5563 + 4007 * -1 + -1556) !== E && (E !== o[r] || h === "progress" && !E || h === "option" && E !== u[r]) && Ao(o, r, E, u[r], A), r = "checked", void (-6917 + -2025 * -2 + 2867 * 1) !== l && l !== o[r] && Ao(o, r, l, u[r], A));
  }
  return o;
}
function Ri(o, g, t) {
  try {
    typeof o == "function" ? o(g) : o.current = g;
  } catch (e) {
    k.__e(e, t);
  }
}
function Pg(o, g, t) {
  var e, A;
  if (k.unmount && k.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Ri(e, null, g)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (i) {
      k.__e(i, g);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = 31 * -317 + 6047 + 140 * 27; A < e.length; A++) e[A] && Pg(e[A], g, t || typeof o.type != "function");
  t || o.__e == null || UI(o.__e), o.__c = o.__ = o.__e = o.__d = void (-9455 + 1 * 863 + -2864 * -3);
}
function q0(o, g, t) {
  return this.constructor(o, t);
}
function Ce(o, g, t) {
  var e, A, i, n;
  k.__ && k.__(o, g), A = (e = typeof t == "function") ? null : t && t.__k || g.__k, i = [], n = [], Si(g, o = (!e && t || g).__k = lA(JA, null, [o]), A || wt, wt, g.namespaceURI, !e && t ? [t] : A ? null : g.firstChild ? jt.call(g.childNodes) : null, i, !e && t ? t : A ? A.__e : g.firstChild, e, n), HI(i, o, n);
}
function Mi(o, g) {
  Ce(o, g, Mi);
}
function vi(o, g, t) {
  var e, A, i, n, I = $A({}, o.props);
  for (i in o.type && o.type.defaultProps && (n = o.type.defaultProps), g) i == "key" ? e = g[i] : i == "ref" ? A = g[i] : I[i] = void (-4004 * -2 + 785 * -1 + 233 * -31) === g[i] && void (4 * -1310 + 1811 + -3 * -1143) !== n ? n[i] : g[i];
  return arguments.length > 873 * 9 + -7972 + -3 * -39 && (I.children = arguments.length > -1151 * -1 + 16 * -391 + 5108 ? jt.call(arguments, -5254 + 168 * -42 + 12312) : t), ht(o.type, I, e || o.key, A || o.ref, null);
}
function $e(o, g) {
  var t = { __c: g = "__cC" + LI++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, i;
    return this.getChildContext || (A = [], (i = {})[g] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, Tg(I);
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
jt = JI.slice, k = { __e: function(o, g, t, e) {
  for (var A, i, n; g = g.__; ) if ((A = g.__c) && !A.__) try {
    if ((i = A.constructor) && i.getDerivedStateFromError != null && (A.setState(i.getDerivedStateFromError(o)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    o = I;
  }
  throw o;
} }, RI = -95 * 73 + 430 * 19 + -1235, MI = function(o) {
  return o != null && o.constructor == null;
}, vA.prototype.setState = function(o, g) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $A({}, this.state), typeof o == "function" && (o = o($A({}, t), this.props)), o && $A(t, o), o != null && this.__v && (g && this._sb.push(g), Tg(this));
}, vA.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(-1 * -6103 + 5659 * 1 + -11762 * 1), o && this.__h.push(o), Tg(this));
}, vA.prototype.render = JA, Ee = [], vI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Og = function(o, g) {
  return o.__v.__b - g.__v.__b;
}, Go.__r = -6 * 1283 + -3609 + -3769 * -3, Fi = -2513 + 8965 * -1 + -6 * -1913, Hg = xn(!(-6617 + -3497 * 1 + -1445 * -7)), Kg = xn(!(-44 * -189 + 3275 + -11591)), LI = 0;
function Li() {
  return (Li = Object.assign ? Object.assign.bind() : function(o) {
    for (var g = -8387 * -1 + 8128 + -16514; g < arguments.length; g++) {
      var t = arguments[g];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var j0 = ["context", "children"];
function Z0(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var g = o.children, t = function(e, A) {
    if (e == null) return {};
    var i, n, I = {}, a = Object.keys(e);
    for (n = 1 * 9407 + 3839 + -13246; n < a.length; n++) A.indexOf(i = a[n]) >= -727 * -10 + 5483 + -13 * 981 || (I[i] = e[i]);
    return I;
  }(o, j0);
  return vi(g, t);
}
function V0() {
  var o = {};
  o.detail = {}, o.bubbles = !(4601 + -1 * -674 + -5275), o.cancelable = !(1e3 + 1 * 1979 + -9 * 331);
  var g = new CustomEvent("_preact", o);
  this.dispatchEvent(g), this._vdom = lA(Z0, Li({}, this._props, { context: g.detail.context }), function t(e, A) {
    if (14 * -119 + 2 * -1153 + 3 * 1325 === e.nodeType) return e.data;
    if (4283 + 8 * 119 + -5234 !== e.nodeType) return null;
    var i = [], n = {}, I = -28 * 263 + -1 * 8863 + -601 * -27, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[KI(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var Q = t(r[I], null), C = r[I].slot;
      C ? n[C] = lA(En, { name: C }, Q) : i[I] = Q;
    }
    var x = A ? lA(En, null, i) : i;
    return lA(A || e.nodeName.toLowerCase(), n, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Mi : Ce)(this._vdom, this._root);
}
function KI(o) {
  return o.replace(/-(\w)/g, function(g, t) {
    return t ? t.toUpperCase() : "";
  });
}
function _0(o, g, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (453 * 2 + -6168 + 2 * 2631), e[KI(o)] = t, this._vdom = vi(this._vdom, e), Ce(this._vdom, this._root);
  }
}
function z0() {
  Ce(this._vdom = null, this._root);
}
function En(o, g) {
  var t = this;
  return lA("slot", Li({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = g;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function X0(o, g, t, e) {
  function A() {
    var i = Reflect.construct(HTMLElement, [], A);
    return i._vdomComponent = o, i._root = i, i;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = V0, A.prototype.attributeChangedCallback = _0, A.prototype.disconnectedCallback = z0, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(i) {
    Object.defineProperty(A.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(i, null, n) : (this._props || (this._props = {}), this._props[i] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(i, n);
    } });
  }), customElements.define(g, A);
}
var $0 = 1864 * -3 + -481 * -11 + 301;
function p(o, g, t, e, A, i) {
  g || (g = {});
  var n, I, a = g;
  if ("ref" in a)
    for (I in a = {}, g) I == "ref" ? n = g[I] : a[I] = g[I];
  var r = {};
  r.type = o, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-5154 + -4003 * 1 + 9157), r.__c = null, r.constructor = void 0, r.__v = --$0, r.__i = -(141 * -63 + 7 * 36 + 52 * 166), r.__u = 0, r.__source = A, r.__self = i;
  var Q = r;
  if (typeof o == "function" && (n = o.defaultProps))
    for (I in n) void (-7053 + 5 * 669 + 309 * 12) === a[I] && (a[I] = n[I]);
  return k.vnode && k.vnode(Q), Q;
}
var mA = function() {
  return mA = Object.assign || function(g) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (g[i] = t[i]);
    }
    return g;
  }, mA.apply(this, arguments);
};
function Pe(o, g, t) {
  if (t || arguments.length === 2) for (var e = 0, A = g.length, i; e < A; e++)
    (i || !(e in g)) && (i || (i = Array.prototype.slice.call(g, 0, e)), i[e] = g[e]);
  return o.concat(i || Array.prototype.slice.call(g));
}
function Ar(o) {
  var g = Object.create(null);
  return function(t) {
    return g[t] === void 0 && (g[t] = o(t)), g[t];
  };
}
var er = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tr = Ar(function(o) {
  return er.test(o) || o.charCodeAt(5151 + 303 * -17) === 111 && o.charCodeAt(-481 * -15 + -8434 + 1220) === -21 * 41 + -9546 + 10517 && o.charCodeAt(1 * 1873 + -1262 + -609) < -6579 * 1 + 221 + 6449;
}), Be, P, yg, dn, qe = 7443 + -6 * -1231 + -14829, TI = [], V = k, ln = V.__b, un = V.__r, hn = V.diffed, fn = V.__c, pn = V.unmount, yn = V.__;
function At(o, g) {
  V.__h && V.__h(P, o, qe || g), qe = -6335 + 1438 * 3 + 1 * 2021;
  var t = {};
  t.__ = [], t.__h = [];
  var e = P.__H || (P.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function hA(o) {
  return qe = -133 * -34 + 2176 + 1 * -6697, Ji(jI, o);
}
function Ji(o, g, t) {
  var e = At(Be++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(g) : jI(void (2821 + 2 * -2087 + 1353), g), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[557 * 5 + 4936 + -7720]], e.__c.setState({}));
  }], e.__c = P, !P.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var Q = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (Q.every(function(x) {
        return !x.__N;
      })) return !i || i.call(this, I, a, r);
      var C = !1;
      return Q.forEach(function(x) {
        if (x.__N) {
          var c = x.__[0];
          x.__ = x.__N, x.__N = void 0, c !== x.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!i || i.call(this, I, a, r));
    };
    P.u = !(-4 * 394 + 2581 + 1005 * -1);
    var i = P.shouldComponentUpdate, n = P.componentWillUpdate;
    P.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var Q = i;
        i = void (-3405 * 2 + 6598 * -1 + -6704 * -2), A(I, a, r), i = Q;
      }
      n && n.call(this, I, a, r);
    }, P.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function q(o, g) {
  var t = At(Be++, 3);
  !V.__s && Ui(t.__H, g) && (t.__ = o, t.i = g, P.__H.__h.push(t));
}
function et(o, g) {
  var t = At(Be++, 4);
  !V.__s && Ui(t.__H, g) && (t.__ = o, t.i = g, P.__h.push(t));
}
function kA(o) {
  return qe = -3 * -2377 + -9969 + 2843, bA(function() {
    var g = {};
    return g.current = o, g;
  }, []);
}
function PI(o, g, t) {
  qe = -3380 + 3386 * 1, et(function() {
    return typeof o == "function" ? (o(g()), function() {
      return o(null);
    }) : o ? (o.current = g(), function() {
      return o.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(o));
}
function bA(o, g) {
  var t = At(Be++, 7);
  return Ui(t.__H, g) && (t.__ = o(), t.__H = g, t.__h = o), t.__;
}
function te(o, g) {
  return qe = -1883 + 85 * -99 + 1 * 10306, bA(function() {
    return o;
  }, g);
}
function Qe(o) {
  var g = P.context[o.__c], t = At(Be++, -1 * -3993 + -533 * -11 + -9847);
  return t.c = o, g ? (t.__ == null && (t.__ = !(2170 + -2 * 1085), g.sub(P)), g.props.value) : o.__;
}
function ko(o, g) {
  V.useDebugValue && V.useDebugValue(g ? g(o) : o);
}
function qI() {
  var o = At(Be++, 11);
  if (!o.__) {
    for (var g = P.__v; g !== null && !g.__m && g.__ !== null; ) g = g.__;
    var t = g.__m || (g.__m = [4227 * -1 + -7551 + 3926 * 3, 144 * 31 + -945 + 3 * -1173]);
    o.__ = "P" + t[-1 * 6101 + 2 * 2897 + 307] + "-" + t[-2171 + 2135 * -1 + 4307 * 1]++;
  }
  return o.__;
}
function or() {
  for (var o; o = TI.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(Qo), o.__H.__h.forEach(qg), o.__H.__h = [];
  } catch (g) {
    o.__H.__h = [], V.__e(g, o.__v);
  }
}
V.__b = function(o) {
  P = null, ln && ln(o);
}, V.__ = function(o, g) {
  o && g.__k && g.__k.__m && (o.__m = g.__k.__m), yn && yn(o, g);
}, V.__r = function(o) {
  un && un(o), Be = 0;
  var g = (P = o.__c).__H;
  g && (yg === P ? (g.__h = [], P.__h = [], g.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (g.__h.forEach(Qo), g.__h.forEach(qg), g.__h = [], Be = -5367 + 5367 * 1)), yg = P;
}, V.diffed = function(o) {
  hn && hn(o);
  var g = o.__c;
  g && g.__H && (g.__H.__h.length && (TI.push(g) !== 1 && dn === V.requestAnimationFrame || ((dn = V.requestAnimationFrame) || gr)(or)), g.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (1 * 6854 + 1084 * 9 + -16610);
  })), yg = P = null;
}, V.__c = function(o, g) {
  g.some(function(t) {
    try {
      t.__h.forEach(Qo), t.__h = t.__h.filter(function(e) {
        return !e.__ || qg(e);
      });
    } catch (e) {
      g.some(function(A) {
        A.__h && (A.__h = []);
      }), g = [], V.__e(e, t.__v);
    }
  }), fn && fn(o, g);
}, V.unmount = function(o) {
  pn && pn(o);
  var g, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Qo(e);
    } catch (A) {
      g = A;
    }
  }), t.__H = void (211 * 43 + -89 * -7 + 1 * -9696), g && V.__e(g, t.__v));
};
var Dn = typeof requestAnimationFrame == "function";
function gr(o) {
  var g, t = function() {
    clearTimeout(e), Dn && cancelAnimationFrame(g), setTimeout(o);
  }, e = setTimeout(t, 100);
  Dn && (g = requestAnimationFrame(t));
}
function Qo(o) {
  var g = P, t = o.__c;
  typeof t == "function" && (o.__c = void (2422 + -1 * -5657 + -8079), t()), P = g;
}
function qg(o) {
  var g = P;
  o.__c = o.__(), P = g;
}
function Ui(o, g) {
  return !o || o.length !== g.length || g.some(function(t, e) {
    return t !== o[e];
  });
}
function jI(o, g) {
  return typeof g == "function" ? g(o) : g;
}
function ZI(o, g) {
  for (var t in g) o[t] = g[t];
  return o;
}
function jg(o, g) {
  for (var t in o) if (t !== "__source" && !(t in g)) return !(-11002 + 1 * 11002);
  for (var e in g) if (e !== "__source" && o[e] !== g[e]) return !(2107 + -361 * 13 + 2586);
  return !(4446 + -4961 * 1 + -516 * -1);
}
function Zg(o, g) {
  this.props = o, this.context = g;
}
function ir(o, g) {
  function t(A) {
    var i = this.props.ref, n = i == A.ref;
    return !n && i && (i.call ? i(null) : i.current = null), g ? !g(this.props, A) || !n : jg(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, lA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(-3254 * -3 + -3461 * 1 + 1 * -6301), e.__f = !(-2756 + -56 * 131 + 6 * 1682), e;
}
(Zg.prototype = new vA()).isPureReactComponent = !(9070 + 149 * 7 + -10113), Zg.prototype.shouldComponentUpdate = function(o, g) {
  return jg(this.props, o) || jg(this.state, g);
};
var wn = k.__b;
k.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), wn && wn(o);
};
var nr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 1658 * 1 + -3257 + -2 * -2755;
function VI(o) {
  function g(t) {
    var e = ZI({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return g.$$typeof = nr, g.render = g, g.prototype.isReactComponent = g.__f = !(1 * 8273 + 1 * 4195 + -2078 * 6), g.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", g;
}
var mn = function(o, g) {
  return o == null ? null : ee(ee(o).map(g));
}, Ir = { map: mn, forEach: mn, count: function(o) {
  return o ? ee(o).length : 5777 + 109 * -53;
}, only: function(o) {
  var g = ee(o);
  if (7 * 265 + -2858 + 1 * 1004 !== g.length) throw "Children.only";
  return g[4 * -2423 + 2649 + 7043];
}, toArray: ee }, ar = k.__e;
k.__e = function(o, g, t, e) {
  if (o.then) {
    for (var A, i = g; i = i.__; ) if ((A = i.__c) && A.__c) return g.__e == null && (g.__e = t.__e, g.__k = t.__k), A.__c(o, g);
  }
  ar(o, g, t, e);
};
var bn = k.unmount;
function _I(o, g, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = ZI({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = g), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return _I(e, g, t);
  })), o;
}
function zI(o, g, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return zI(e, g, t);
  }), o.__c && o.__c.__P === g && (o.__e && t.appendChild(o.__e), o.__c.__e = !(43 * 125 + -4940 + -145 * 3), o.__c.__P = t)), o;
}
function so() {
  this.__u = -2789 + -2789 * -1, this.t = null, this.__b = null;
}
function XI(o) {
  var g = o.__.__c;
  return g && g.__a && g.__a(o);
}
function rr(o) {
  var g, t, e;
  function A(i) {
    if (g || (g = o()).then(function(n) {
      t = n.default || n;
    }, function(n) {
      e = n;
    }), e) throw e;
    if (!t) throw g;
    return lA(t, i);
  }
  return A.displayName = "Lazy", A.__f = !(-823 + 346 * -1 + 1169), A;
}
function Qt() {
  this.u = null, this.o = null;
}
k.unmount = function(o) {
  var g = o.__c;
  g && g.__R && g.__R(), g && 811 + 1 * -996 + 217 & o.__u && (o.type = null), bn && bn(o);
}, (so.prototype = new vA()).__c = function(o, g) {
  var t = g.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = XI(e.__v), i = !1, n = function() {
    i || (i = !(2747 + 8422 * -1 + 5675), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[5854 + -503 * 1 + 1 * -5351] = zI(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || 112 * 14 + 6939 + -8475 & g.__u || e.setState({ __a: e.__b = e.__v.__k[11 * 353 + -50 + -3833] }), o.then(n, n);
}, so.prototype.componentWillUnmount = function() {
  this.t = [];
}, so.prototype.render = function(o, g) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[17 * 521 + -712 * 2 + -1 * 7433].__c;
      this.__v.__k[5661 + -27 * 38 + -1545 * 3] = _I(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = g.__a && lA(JA, null, o.fallback);
  return A && (A.__u &= -33), [lA(JA, null, g.__a ? null : o.children), A];
};
var Gn = function(o, g, t) {
  if (++t[400 + 4 * 842 + -1 * 3767] === t[-9281 + 647 * -13 + -17692 * -1] && o.o.delete(g), o.props.revealOrder && (o.props.revealOrder[0] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 4 * -1466 + -99 * 33 + 9134; ) t.pop()();
    if (t[3984 + -4 * -267 + -5051] < t[-6825 + -13 * 249 + 10062]) break;
    o.u = t = t[2];
  }
};
function Cr(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function Br(o) {
  var g = this, t = o.i;
  g.componentWillUnmount = function() {
    Ce(null, g.l), g.l = null, g.i = null;
  }, g.i && g.i !== t && g.componentWillUnmount(), g.l || (g.i = t, g.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-1 * 6041 + 7592 + 517 * -3);
  }, appendChild: function(e) {
    this.childNodes.push(e), g.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), g.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -4 * 2359 + 535 + -8902 * -1, 1551 + 55 * 89 + -6445), g.i.removeChild(e);
  } }), Ce(lA(Cr, { context: g.context }, o.__v), g.l);
}
function Qr(o, g) {
  var t = {};
  t.__v = o, t.i = g;
  var e = lA(Br, t);
  return e.containerInfo = g, e;
}
(Qt.prototype = new vA()).__a = function(o) {
  var g = this, t = XI(g.__v), e = g.o.get(o);
  return e[-143 * -59 + 2602 + -1 * 11039]++, function(A) {
    var i = function() {
      g.props.revealOrder ? (e.push(A), Gn(g, o, e)) : A();
    };
    t ? t(i) : i();
  };
}, Qt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var g = ee(o.children);
  o.revealOrder && o.revealOrder[-9767 + 1 * -2957 + 4 * 3181] === "b" && g.reverse();
  for (var t = g.length; t--; ) this.o.set(g[t], this.u = [-5758 * 1 + 157 * -31 + 10626, -4846 + 1 * 2654 + -548 * -4, this.u]);
  return o.children;
}, Qt.prototype.componentDidUpdate = Qt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(g, t) {
    Gn(o, t, g);
  });
};
var $I = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -81968 + -19 * 883 + 158848, sr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, cr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, xr = /[A-Z0-9]/g, Er = typeof document < "u", dr = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function lr(o, g, t) {
  return g.__k == null && (g.textContent = ""), Ce(o, g), typeof t == "function" && t(), o ? o.__c : null;
}
function ur(o, g, t) {
  return Mi(o, g), typeof t == "function" && t(), o ? o.__c : null;
}
vA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(vA.prototype, o, { configurable: !(2666 + 8014 * -1 + 5348), get: function() {
    return this["UNSAFE_" + o];
  }, set: function(g) {
    var t = {};
    t.configurable = !(4 * -2017 + 1 * 2719 + 1783 * 3), t.writable = !(-13598 + 1046 * 13), t.value = g, Object.defineProperty(this, o, t);
  } });
});
var kn = k.event;
function hr() {
}
function fr() {
  return this.cancelBubble;
}
function pr() {
  return this.defaultPrevented;
}
k.event = function(o) {
  return kn && (o = kn(o)), o.persist = hr, o.isPropagationStopped = fr, o.isDefaultPrevented = pr, o.nativeEvent = o;
};
var co = {};
co.enumerable = !(3343 * -1 + 14 * 263 + -26 * 13), co.configurable = !(4503 * -2 + 262 + 4 * 2186), co.get = function() {
  return this.class;
};
var Yi, yr = co, Nn = k.vnode;
k.vnode = function(o) {
  typeof o.type == "string" && function(g) {
    var t = g.props, e = g.type, A = {};
    for (var i in t) {
      var n = t[i];
      if (!(i === "value" && "defaultValue" in t && n == null || Er && i === "children" && e === "noscript" || i === "class" || i === "className")) {
        var I = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && n === !0 ? n = "" : I === "translate" && n === "no" ? n = !(425 + 424 * -1) : I === "ondoubleclick" ? i = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || dr(t.type) ? I === "onfocus" ? i = "onfocusin" : I === "onblur" ? i = "onfocusout" : cr.test(i) ? i = I : -(-15 * -457 + 458 * 18 + -15098) === e.indexOf("-") && sr.test(i) ? i = i.replace(xr, "-$&").toLowerCase() : n === null && (n = void (-112 * -62 + -7545 + -1 * -601)) : I = i = "oninput", I === "oninput" && A[i = I] && (i = "oninputCapture"), A[i] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = ee(t.children).forEach(function(a) {
      a.props.selected = -(-2102 * 1 + 6199 + -4096) != A.value.indexOf(a.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = ee(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(3027 + 289 * 13 + 399 * -17) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", yr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), g.props = A;
  }(o), o.$$typeof = $I, Nn && Nn(o);
};
var Fn = k.__r;
k.__r = function(o) {
  Fn && Fn(o), Yi = o.__c;
};
var Sn = k.diffed;
k.diffed = function(o) {
  Sn && Sn(o);
  var g = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in g && g.value !== t.value && (t.value = g.value == null ? "" : g.value), Yi = null;
};
var rA = {};
rA.readContext = function(o) {
  return Yi.__n[o.__c].props.value;
}, rA.useCallback = te, rA.useContext = Qe, rA.useDebugValue = ko, rA.useDeferredValue = oa, rA.useEffect = q, rA.useId = qI, rA.useImperativeHandle = PI, rA.useInsertionEffect = ia, rA.useLayoutEffect = et, rA.useMemo = bA, rA.useReducer = Ji, rA.useRef = kA, rA.useState = hA, rA.useSyncExternalStore = na, rA.useTransition = ga;
var Aa = {};
Aa.current = rA;
var ea = {};
ea.ReactCurrentDispatcher = Aa;
var Dr = ea;
function wr(o) {
  return lA.bind(null, o);
}
function Ig(o) {
  return !!o && o.$$typeof === $I;
}
function mr(o) {
  return Ig(o) && o.type === JA;
}
function br(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function Gr(o) {
  return Ig(o) ? vi.apply(null, arguments) : o;
}
function kr(o) {
  return !!o.__k && (Ce(null, o), !(7491 + 3 * -2497));
}
function Nr(o) {
  return o && (o.base || 7578 + -297 * 23 + -746 === o.nodeType && o) || null;
}
var Fr = function(o, g) {
  return o(g);
}, Sr = function(o, g) {
  return o(g);
}, Rr = JA;
function ta(o) {
  o();
}
function oa(o) {
  return o;
}
function ga() {
  return [!(-67 * -69 + 173 * -9 + 1 * -3065), ta];
}
var ia = et, Mr = Ig;
function na(o, g) {
  var t = g(), e = hA({ h: { __: t, v: g } }), A = e[1 * 5071 + -757 + -4314].h, i = e[-3228 + 3229 * 1];
  return et(function() {
    A.__ = t, A.v = g, Dg(A) && i({ h: A });
  }, [o, t, g]), q(function() {
    return Dg(A) && i({ h: A }), o(function() {
      Dg(A) && i({ h: A });
    });
  }, [o]), t;
}
function Dg(o) {
  var g, t, e = o.v, A = o.__;
  try {
    var i = e();
    return !((g = A) === (t = i) && (-1 * -3095 + -59 * 146 + 5519 * 1 !== g || (91 * 1 + -3089 * 2 + -8 * -761) / g == (4281 + -6891 * -1 + -11171) / t) || g != g && t != t);
  } catch {
    return !(-5 * 1351 + -1566 + 157 * 53);
  }
}
var G = {};
G.useState = hA, G.useId = qI, G.useReducer = Ji, G.useEffect = q, G.useLayoutEffect = et, G.useInsertionEffect = ia, G.useTransition = ga, G.useDeferredValue = oa, G.useSyncExternalStore = na, G.startTransition = ta, G.useRef = kA, G.useImperativeHandle = PI, G.useMemo = bA, G.useCallback = te, G.useContext = Qe, G.useDebugValue = ko, G.version = "17.0.2", G.Children = Ir, G.render = lr, G.hydrate = ur, G.unmountComponentAtNode = kr, G.createPortal = Qr, G.createElement = lA, G.createContext = $e, G.createFactory = wr, G.cloneElement = Gr, G.createRef = H0, G.Fragment = JA, G.isValidElement = Ig, G.isElement = Mr, G.isFragment = mr, G.isMemo = br, G.findDOMNode = Nr, G.Component = vA, G.PureComponent = Zg, G.memo = ir, G.forwardRef = VI, G.flushSync = Sr, G.unstable_batchedUpdates = Fr, G.StrictMode = Rr, G.Suspense = so, G.SuspenseList = Qt, G.lazy = rr, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dr;
var ke = G, vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lr(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Jr(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Ur(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function Yr(o) {
  if (o.__esModule) return o;
  var g = o.default;
  if (typeof g == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(g, arguments, this.constructor) : g.apply(this, arguments);
    };
    t.prototype = g.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(o).forEach(function(e) {
    var A = Object.getOwnPropertyDescriptor(o, e);
    Object.defineProperty(t, e, A.get ? A : {
      enumerable: !0,
      get: function() {
        return o[e];
      }
    });
  }), t;
}
const Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: vr,
  getAugmentedNamespace: Yr,
  getDefaultExportFromCjs: Lr,
  getDefaultExportFromNamespaceIfNotNamed: Ur,
  getDefaultExportFromNamespaceIfPresent: Jr
}, Symbol.toStringTag, { value: "Module" }));
var Or = function(g, t, e, A) {
  var i = e ? e.call(A, g, t) : void 0;
  if (i !== void (1890 + -9112 * 1 + 7222)) return !!i;
  if (g === t) return !0;
  if (typeof g != "object" || !g || typeof t != "object" || !t) return !1;
  var n = Object.keys(g), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = -8710 + 2446 * -1 + -2 * -5578; r < n.length; r++) {
    var Q = n[r];
    if (!a(Q)) return !1;
    var C = g[Q], x = t[Q];
    if (i = e ? e.call(A, C, x, Q) : void 0, i === !1 || i === void (-2099 + -2 * 1594 + 5287) && C !== x) return !1;
  }
  return !0;
};
const Hr = Wr.getDefaultExportFromCjs(Or);
var T = "-ms-", ft = "-moz-", H = "-webkit-", Ia = "comm", ag = "rule", Wi = "decl", Kr = "@import", aa = "@keyframes", Tr = "@layer", ra = Math.abs, Oi = String.fromCharCode, Vg = Object.assign;
function Pr(o, g) {
  return iA(o, -4 * -2258 + -5567 + -77 * 45) ^ 8155 * -1 + 1 * 8475 + -275 * 1 ? (((g << 1 * -3014 + 6553 * 1 + -3537 ^ iA(o, 1226 + 193 * -27 + 3985)) << 29 * -101 + -2007 * -3 + -3090 ^ iA(o, -1563 * -3 + 5005 + 9 * -1077)) << 2 ^ iA(o, 2)) << 3 * 2683 + -1427 * 2 + -1 * 5193 ^ iA(o, -1909 * -1 + 3 * 405 + 3121 * -1) : 1 * -698 + 58 * 127 + -6668;
}
function Ca(o) {
  return o.trim();
}
function _A(o, g) {
  return (o = g.exec(o)) ? o[-13 * -72 + 8844 + -9780] : o;
}
function N(o, g, t) {
  return o.replace(g, t);
}
function xo(o, g, t) {
  return o.indexOf(g, t);
}
function iA(o, g) {
  return o.charCodeAt(g) | 1046 * -2 + 1 * -1801 + 3893;
}
function je(o, g, t) {
  return o.slice(g, t);
}
function PA(o) {
  return o.length;
}
function Ba(o) {
  return o.length;
}
function st(o, g) {
  return g.push(o), o;
}
function qr(o, g) {
  return o.map(g).join("");
}
function Rn(o, g) {
  return o.filter(function(t) {
    return !_A(t, g);
  });
}
var rg = -1 * -5319 + -14 * -335 + 9 * -1112, Ze = -3 * -3021 + -1890 + 1 * -7172, Qa = 0, UA = 6465 * 1 + -1021 + 1 * -5444, eA = 0, tt = "";
function Cg(o, g, t, e, A, i, n, I) {
  var a = {};
  return a.value = o, a.root = g, a.parent = t, a.type = e, a.props = A, a.children = i, a.line = rg, a.column = Ze, a.length = n, a.return = "", a.siblings = I, a;
}
function ie(o, g) {
  return Vg(Cg("", null, null, "", null, null, -1 * 6544 + -4349 * 2 + 15242, o.siblings), o, { length: -o.length }, g);
}
function ve(o) {
  for (; o.root; ) o = ie(o.root, { children: [o] });
  st(o, o.siblings);
}
function jr() {
  return eA;
}
function Zr() {
  return eA = UA > 5529 + 1 * -1849 + 46 * -80 ? iA(tt, --UA) : -43 * 18 + 1565 + 791 * -1, Ze--, eA === 10 && (Ze = -5 * -1828 + 9140 + 6093 * -3, rg--), eA;
}
function OA() {
  return eA = UA < Qa ? iA(tt, UA++) : 4 * -1992 + 2128 + 20 * 292, Ze++, eA === 2 * 494 + -4379 + 3401 && (Ze = 11 * 83 + -1282 * -1 + -2194, rg++), eA;
}
function me() {
  return iA(tt, UA);
}
function Eo() {
  return UA;
}
function Bg(o, g) {
  return je(tt, o, g);
}
function _g(o) {
  switch (o) {
    case 1849 * -1 + -4239 + 6088:
    case 9:
    case 17714 + -1 * 17704:
    case -1 * -811 + -1 * -4357 + -5155 * 1:
    case -286 * 29 + -13 * 327 + 12577 * 1:
      return 2178 + 3 * 1277 + -79 * 76;
    case 128 * -51 + -4822 * 1 + 11383:
    case -1906 + -1 * -1949:
    case -2539 + -1445 * -1 + 569 * 2:
    case 4327 * 1 + -1883 + -3 * 799:
    case 1 * 2776 + 1 * -4721 + 2007:
    case 137 * 67 + -1500 + -7615 * 1:
    case -15 * 647 + -593 * -5 + 1 * 6866:
    case 5935 + -191 * -1 + -6067 * 1:
    case 123:
    case -2357 + 761 * -8 + -1714 * -5:
      return -12904 + 4 * 3227;
    case 33 * -121 + -4 * -2473 + -5841:
      return -4427 * 2 + 1 * -6041 + -13 * -1146;
    case 2521 + -829 * 3:
    case 9832 + 28 * 232 + -1 * 16289:
    case 13 * -489 + -60 * 7 + -1 * -6817:
    case 91:
      return 4 * -1611 + 138 + -3154 * -2;
    case -4110 + 5 * -158 + 4941:
    case -27 * -171 + 6755 + 1 * -11279:
      return -12712 + 1 * 12713;
  }
  return 131 * 21 + -6 * 1602 + 3 * 2287;
}
function Vr(o) {
  return rg = Ze = -389 * 1 + -59 * -43 + -1 * 2147, Qa = PA(tt = o), UA = 0, [];
}
function _r(o) {
  return tt = "", o;
}
function wg(o) {
  return Ca(Bg(UA - (8671 + -85 * 102), zg(o === -1 * 5094 + 427 + 793 * 6 ? o + (8909 + -2 * 4903 + 899) : o === 1 * -3202 + -1540 + 4782 ? o + (7 * 941 + -9385 + -1 * -2799) : o)));
}
function zr(o) {
  for (; (eA = me()) && eA < 8821 * -1 + 3317 * 2 + -2 * -1110; ) OA();
  return _g(o) > 9 * -664 + 1106 + -84 * -58 || _g(eA) > -2 * 4993 + -9109 + 19098 ? "" : " ";
}
function Xr(o, g) {
  for (; --g && OA() && !(eA < 10 * -399 + 7420 + -3382 || eA > 1 * -664 + 1 * -1 + 767 || eA > -6174 + -1041 * 9 + -80 * -195 && eA < -7725 + -970 * -10 + -1910 || eA > -521 * 11 + -8 * 818 + -1 * -12345 && eA < -2 * 1701 + 5481 + 2 * -991); ) ;
  return Bg(o, Eo() + (g < -1693 * 1 + -2 * 2227 + 6153 && me() == -23 * 106 + 43 * -29 + 59 * 63 && OA() == 3662 * 2 + -173 * 4 + -6600));
}
function zg(o) {
  for (; OA(); ) switch (eA) {
    case o:
      return UA;
    case -46 * 37 + 1378 + 2 * 179:
    case 5354 + 5315 * -1:
      o !== -178 + -1 * 2694 + 2906 && o !== 5048 + -96 * -103 + -14897 && zg(eA);
      break;
    case 538 + 1 * 3183 + -3681:
      o === 1 * 796 + 1373 * -1 + 618 * 1 && zg(o);
      break;
    case -5046 + -2144 * -2 + 850:
      OA();
      break;
  }
  return UA;
}
function $r(o, g) {
  for (; OA() && o + eA !== 47 + (1 * 2470 + 2173 + -4633); ) if (o + eA === -2 * -1718 + 5941 + -9335 + 42 && me() === 7805 + -7134 * 1 + -78 * 8) break;
  return "/*" + Bg(g, UA - (-1 * -6859 + -3741 + -3117)) + "*" + Oi(o === -7 * 1375 + 1036 * -1 + -2677 * -4 ? o : OA());
}
function AC(o) {
  for (; !_g(me()); ) OA();
  return Bg(o, UA);
}
function eC(o) {
  return _r(lo("", null, null, null, [""], o = Vr(o), -1 * 1114 + 1568 + -454, [-9 * 107 + 176 + 787], o));
}
function lo(o, g, t, e, A, i, n, I, a) {
  for (var r = 0, Q = -7231 * 1 + 2085 + 5146, C = n, x = -8805 + 1 * 8805, c = -73 * -20 + -63 * 8 + 4 * -239, E = 4385 * -2 + 4550 * 1 + 4220, l = 7902 + -1 * 7901, u = 2 * 471 + 8739 + -242 * 40, s = 2861 * -1 + -855 * -4 + -558, h = 0, m = "", R = A, M = i, U = e, D = m; u; ) switch (E = h, h = OA()) {
    case 660 + 4 * -155:
      if (E != 8431 * -1 + 250 * 26 + 2039 * 1 && iA(D, C - (2038 * 3 + -2 * -134 + -6381)) == -9164 + 3331 * -1 + -1 * -12553) {
        xo(D += N(wg(h), "&", "&\f"), "&\f", ra(r ? I[r - (-4 * 2057 + 7 * -311 + 10406)] : 750 + 1 * -352 + 199 * -2)) != -(-1 * 2956 + 8962 + -1 * 6005) && (s = -(243 * -13 + 990 * -9 + 142 * 85));
        break;
      }
    case 1499 * 5 + 7 * 787 + 1 * -12970:
    case -3976 * -1 + -19 * -472 + -12905:
    case -2612 + -3901 * -2 + -5099:
      D += wg(h);
      break;
    case -7114 + -419 * -17:
    case 41 * 119 + 15 * 330 + -1091 * 9:
    case -9 * 595 + 4 * -455 + 7188:
    case 1079 * -5 + 1 * 1019 + -2204 * -2:
      D += zr(E);
      break;
    case 17 * -91 + -3347 * -1 + 7 * -244:
      D += Xr(Eo() - 1, -5402 + -2599 * -1 + -2810 * -1);
      continue;
    case -1 * -8191 + -2289 + -1 * 5855:
      switch (me()) {
        case 5027 + -5 * 997:
        case 2549 + -139 * 18:
          st(tC($r(OA(), Eo()), g, t, a), a);
          break;
        default:
          D += "/";
      }
      break;
    case (2786 + 1 * 2555 + -5218) * l:
      I[r++] = PA(D) * s;
    case 125 * l:
    case 59:
    case 9603 + -2 * 4444 + 5 * -143:
      switch (h) {
        case 141 * 29 + 1 * -1135 + -2954:
        case -2498 + -31 * 154 + 7397:
          u = -2 * -1912 + -6 * -104 + -2 * 2224;
        case -1275 + 41 * 47 + -593 + Q:
          s == -(20 * -29 + -7316 + 7897 * 1) && (D = N(D, /\f/g, "")), c > 4857 * 1 + -612 + -1 * 4245 && PA(D) - C && st(c > -3362 + 32 * 263 + -27 * 186 ? vn(D + ";", e, t, C - (3149 + 1174 * -1 + -42 * 47), a) : vn(N(D, " ", "") + ";", e, t, C - 2, a), a);
          break;
        case 59:
          D += ";";
        default:
          if (st(U = Mn(D, g, t, r, Q, A, I, m, R = [], M = [], C, i), i), h === 2 * -2364 + 8804 + 67 * -59)
            if (Q === 25 * 121 + 7908 + -10933) lo(D, g, U, U, R, i, C, I, M);
            else switch (x === -514 * 2 + -8095 + 9222 && iA(D, -8613 + 2013 * -1 + -3 * -3543) === -1 * -2186 + -8350 + -3137 * -2 ? -23 * 106 + -1215 * 3 + -1 * -6183 : x) {
              case -4153 * 1 + -764 + -173 * -29:
              case 121 * 1 + 1 * 7723 + -967 * 8:
              case 109:
              case 132 * -7 + 6307 + -4 * 1317:
                lo(o, U, U, e && st(Mn(o, U, U, 7 * -17 + -5666 + -1 * -5785, 0, A, I, m, A, R = [], C, M), M), A, M, C, I, e ? R : M);
                break;
              default:
                lo(D, U, U, U, [""], M, -2929 + 1 * -9484 + 12413, I, M);
            }
      }
      r = Q = c = 1 * 4175 + 1 * 6687 + -10862, l = s = 13 * 458 + 9926 + -15879, m = D = "", C = n;
      break;
    case 58:
      C = -62 * -108 + -1 * -857 + 1 * -7552 + PA(D), c = E;
    default:
      if (l < 47 * 25 + -2449 * -1 + 3623 * -1) {
        if (h == 293 * 19 + -2281 + -3163) --l;
        else if (h == 125 && l++ == 7531 + -1 * -9031 + -16562 && Zr() == 125) continue;
      }
      switch (D += Oi(h), h * l) {
        case -6991 * -1 + 9052 + -485 * 33:
          s = Q > -1759 + -373 * 10 + 5489 * 1 ? 1 : (D += "\f", -1);
          break;
        case 1 * -1409 + 8226 + 521 * -13:
          I[r++] = (PA(D) - (2663 * 2 + 7089 * 1 + 6207 * -2)) * s, s = 7212 + -7211 * 1;
          break;
        case -1397 * 2 + -1 * 8889 + -1 * -11747:
          me() === 1 * -4291 + -49 * 149 + 11637 && (D += wg(OA())), x = me(), Q = C = PA(m = D += AC(Eo())), h++;
          break;
        case 193 * -31 + 6925 + -23 * 39:
          E === 19247 + -2 * 9601 && PA(D) == 342 + -8487 * -1 + -8827 && (l = -14170 + -13 * -1090);
      }
  }
  return i;
}
function Mn(o, g, t, e, A, i, n, I, a, r, Q, C) {
  for (var x = A - 1, c = A === 181 * 4 + 530 * 17 + -9734 ? i : [""], E = Ba(c), l = 1132 * 1 + -5545 + 4413, u = 1 * 4075 + 1294 + -59 * 91, s = -2465 * 3 + -7687 * -1 + -292; l < e; ++l) for (var h = 0, m = je(o, x + (-1652 * 5 + -5298 + 13559), x = ra(u = n[l])), R = o; h < E; ++h) (R = Ca(u > 1 * 9482 + 3409 + -1 * 12891 ? c[h] + " " + m : N(m, /&\f/g, c[h]))) && (a[s++] = R);
  return Cg(o, g, t, A === 1 * 7397 + 554 + -7951 * 1 ? ag : I, a, r, Q, C);
}
function tC(o, g, t, e) {
  return Cg(o, g, t, Ia, Oi(jr()), je(o, -1460 + 17 * 86, -(-1 * 1375 + -2317 + 3694 * 1)), -2 * -3841 + -2727 + -4955, e);
}
function vn(o, g, t, e, A) {
  return Cg(o, g, t, Wi, je(o, -31 * 47 + 843 + 307 * 2, e), je(o, e + 1, -1), e, A);
}
function sa(o, g, t) {
  switch (Pr(o, g)) {
    case 7695 + -8723 * 1 + 6131 * 1:
      return H + "print-" + o + o;
    case -313 * 23 + 34 * -4 + -344 * -38:
    case 264 * -5 + -819 + 6340:
    case 3177:
    case -72 * -74 + 2 * -298 + -1299:
    case 8817 + 1359 * -7 + 2337:
    case -731 * 10 + -12 * -563 + 5011:
    case 78 * -26 + -9280 + 14229:
    case 9044 + 10223 * -1 + 157 * 43:
    case 6356:
    case -7003 + 1 * -303 + 13150:
    case -1 * -1267 + -46 * 203 + 11262:
    case -10357 + -4729 * 1 + 21731:
    case 3902 + 4666 * 2 + -10229:
    case -3950 + -2631 * 3 + 6078 * 3:
    case -7412 * 1 + -3685 + 16976:
    case -1327 * -3 + -743 + 2385:
    case 5801 + -11947 * 1 + 12281 * 1:
    case 2323 * -1 + 1 * 712 + 6210:
    case 106 * 22 + 1 * 9781 + -3629 * 2:
    case -8 * 569 + 6712 + 2055:
    case -6 * -1531 + -12133 * 1 + 9336:
    case -4 * -2374 + -814 + -3573:
    case -1493 * 7 + -9723 + 25539:
    case 2399 + -4 * -371 + 1738:
    case 14 * -433 + -217 * -41 + 1 * 994:
      return H + o + o;
    case 7711 + -5407 * 1 + -35 * -71:
      return ft + o + o;
    case -2084 * -1 + -7308 + 109 * 97:
    case 4246:
    case 4810:
    case -8201 + 719 * -8 + 20921:
    case 2756:
      return H + o + ft + o + T + o + o;
    case -79 * 59 + -4 * -1950 + 2797 * 1:
      switch (iA(o, g + (-1857 * 2 + -3697 + 7422))) {
        case 4772 + 1429 * 2 + -7516:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 108:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 2036 + 7457 * 1 + -9448:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 1759 * 1 + 277 * -19 + 10332:
    case -12 * 589 + -6600 + 17936:
    case 2903:
      return H + o + T + o + o;
    case -203 * 21 + 8656 + 1772:
      return H + o + T + "flex-" + o + o;
    case 4629 + 723 * 3 + 1 * -1611:
      return H + o + N(o, /(\w+).+(:[^]+)/, H + "box-$1$2" + T + "flex-$1$2") + o;
    case -3791 + 19 * 486:
      return H + o + T + "flex-item-" + N(o, /flex-|-self/g, "") + (_A(o, /flex-|baseline/) ? "" : T + "grid-row-" + N(o, /flex-|-self/g, "")) + o;
    case -1 * -2341 + -793 * 2 + 3920:
      return H + o + T + "flex-line-pack" + N(o, /align-content|flex-|-self/g, "") + o;
    case -10140 + 174 * 29 + 2 * 5321:
      return H + o + T + N(o, "shrink", "negative") + o;
    case 5292:
      return H + o + T + N(o, "basis", "preferred-size") + o;
    case 6060:
      return H + "box-" + N(o, "-grow", "") + H + o + T + N(o, "grow", "positive") + o;
    case 4554:
      return H + N(o, /([^-])(transform)/g, "$1" + H + "$2") + o;
    case 4262 + -537 * -2 + -1 * -851:
      return N(N(N(o, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), o, "") + o;
    case -1 * 1351 + 899 + -19 * -313:
    case 3959:
      return N(o, /(image-set\([^]*)/, H + "$1$`$1");
    case 510 + 13 * -309 + 8475:
      return N(N(o, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + o + o;
    case 329 * 17 + 89 * 37 + -4686:
      if (!_A(o, /flex-|baseline/)) return T + "grid-column-align" + je(o, g) + o;
      break;
    case 2592:
    case -3962 + -11 * 74 + 8136:
      return T + N(o, "template-", "") + o;
    case -629 * 1 + 7765 + 2 * -1376:
    case -667 * -1 + -1 * 337 + 1 * 3286:
      return t && t.some(function(e, A) {
        return g = A, _A(e.props, /grid-\w+-end/);
      }) ? ~xo(o + (t = t[g].value), "span", -1765 * -2 + 2350 + -5880) ? o : T + N(o, "-start", "") + o + T + "grid-row-span:" + (~xo(t, "span", -962 * -1 + 6682 + -7644) ? _A(t, /\d+/) : +_A(t, /\d+/) - +_A(o, /\d+/)) + ";" : T + N(o, "-start", "") + o;
    case -9935 + -5190 * -1 + -31 * -311:
    case -1633 + -7 * -823:
      return t && t.some(function(e) {
        return _A(e.props, /grid-\w+-start/);
      }) ? o : T + N(N(o, "-end", "-span"), "span ", "") + o;
    case 153 + -625 * 5 + 7067 * 1:
    case 125 * -1 + 2769 + 939:
    case -9824 + -1 * -5403 + 8489:
    case 8 * -797 + 21 * -397 + 17245:
      return N(o, /(.+)-inline(.+)/, H + "$1$2") + o;
    case -1479 * -5 + -499 * -19 + -584 * 15:
    case 369 * 37 + 146 * 2 + -6886:
    case 2117 * -1 + -113 * -19 + -1 * -5723:
    case -10393 + 1 * -7985 + 3 * 7971:
    case 2 * -1079 + -191 * 23 + 11996:
    case 5701:
    case 4413 * -1 + 51 * 101 + 4195:
    case 9601 * -1 + 9 * -441 + 18247:
    case 9674 + 1 * -4109 + -32:
    case 5789:
    case 5 * 544 + -4062 + 6363:
    case -2531 + 17 * -19 + 7619:
      if (PA(o) - 1 - g > -5931 + -1399 * 5 + 12932) switch (iA(o, g + (11231 + -1123 * 10))) {
        case 1 * 446 + 1308 + -1645:
          if (iA(o, g + (2 * -1367 + -2 * 2659 + 4 * 2014)) !== -8147 * 1 + 755 + -2479 * -3) break;
        case 947 * -4 + 79 * 103 + -137 * 31:
          return N(o, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + ft + (iA(o, g + (11 * 454 + -3598 + -1393)) == 1 * -8139 + 223 * 1 + 8024 ? "$3" : "$2-$3")) + o;
        case 355 * -19 + -1901 + 8761:
          return ~xo(o, "stretch", -7299 + -9067 * 1 + 16366) ? sa(N(o, "stretch", "fill-available"), g, t) + o : o;
      }
      break;
    case -5200 + -461 * -4 + 8508:
    case 2 * -5889 + 3590 + 7054 * 2:
      return N(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, i, n, I, a, r) {
        return T + A + ":" + i + r + (n ? T + A + "-span:" + (I ? a : +a - +i) + r : "") + o;
      });
    case 9 * 269 + -2103 + 1 * 4631:
      if (iA(o, g + 6) === -915 * -6 + -5443 * -1 + 10812 * -1) return N(o, ":", ":" + H) + o;
      break;
    case -162 * -69 + 1643 + -6377:
      switch (iA(o, iA(o, 2032 + 181 * 1 + 3 * -733) === -9213 + -5 * 1455 + 16533 ? -1 * 6637 + -2239 * 3 + -6686 * -2 : 8623 * 1 + -2468 + -6144)) {
        case 3055 + 5 * -587:
          return N(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (iA(o, 3511 * -1 + 22 * -212 + -19 * -431) === 4151 * -1 + -2975 + -1 * -7171 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + T + "$2box$3") + o;
        case 9494 + -662 * -9 + -15352:
          return N(o, ":", ":" + T) + o;
      }
      break;
    case 5719:
    case -271 * -23 + 17 * -167 + -249 * 3:
    case -17404 + -501 * -39:
    case -8 * 192 + 1643 + -1910 * -2:
    case 7198 + 937 * -5 + -1 * 122:
      return N(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function No(o, g) {
  for (var t = "", e = 8250 * -1 + -10 * -482 + 3430; e < o.length; e++) t += g(o[e], e, o, g) || "";
  return t;
}
function oC(o, g, t, e) {
  switch (o.type) {
    case Tr:
      if (o.children.length) break;
    case Kr:
    case Wi:
      return o.return = o.return || o.value;
    case Ia:
      return "";
    case aa:
      return o.return = o.value + "{" + No(o.children, e) + "}";
    case ag:
      if (!PA(o.value = o.props.join(","))) return "";
  }
  return PA(t = No(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function gC(o) {
  var g = Ba(o);
  return function(t, e, A, i) {
    for (var n = "", I = 2251 + -2251 * 1; I < g; I++) n += o[I](t, e, A, i) || "";
    return n;
  };
}
function iC(o) {
  return function(g) {
    g.root || (g = g.return) && o(g);
  };
}
function nC(o, g, t, e) {
  if (o.length > -(3859 + 11 * -338 + 140 * -1) && !o.return)
    switch (o.type) {
      case Wi:
        o.return = sa(o.value, o.length, t);
        return;
      case aa:
        return No([ie(o, { value: N(o.value, "@", "@" + H) })], e);
      case ag:
        if (o.length) return qr(t = o.props, function(A) {
          switch (_A(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ve(ie(o, { props: [N(A, /:(read-\w+)/, ":" + ft + "$1")] }));
              var i = {};
              i.props = [A], ve(ie(o, i)), Vg(o, { props: Rn(t, e) });
              break;
            case "::placeholder":
              ve(ie(o, { props: [N(A, /:(plac\w+)/, ":" + H + "input-$1")] })), ve(ie(o, { props: [N(A, /:(plac\w+)/, ":" + ft + "$1")] })), ve(ie(o, { props: [N(A, /:(plac\w+)/, T + "input-$1")] }));
              var n = {};
              n.props = [A], ve(ie(o, n)), Vg(o, { props: Rn(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var IC = b, O = {}, Ne = typeof process < "u" && void (3648 + 1 * 6987 + 3 * -3545) !== O && (O.REACT_APP_SC_ATTR || O.SC_ATTR) || "data-styled", ca = "active", xa = "data-styled-version", Qg = "6.1.11", Hi = `/*!sc*/
`, Ki = typeof window < "u" && "HTMLElement" in window, aC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (3 * -37 + 1881 + 1770 * -1) !== O && void (1 * -4903 + 7761 + -2858) !== O.REACT_APP_SC_DISABLE_SPEEDY && O.REACT_APP_SC_DISABLE_SPEEDY !== "" ? O.REACT_APP_SC_DISABLE_SPEEDY !== "false" && O.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (2 * 4409 + 1982 + -10800) !== O && void (19 * 201 + -5267 + 1448) !== O.SC_DISABLE_SPEEDY && O.SC_DISABLE_SPEEDY !== "" ? O.SC_DISABLE_SPEEDY !== "false" && O.SC_DISABLE_SPEEDY : O.NODE_ENV !== "production"), Ln = /invalid hook call/i, eo = /* @__PURE__ */ new Set(), rC = function(o, g) {
  if (O.NODE_ENV !== "production") {
    var t = g ? ' with the id of "'.concat(g, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var i = !0;
      console.error = function(n) {
        for (var I = [], a = -7719 + -4861 * 1 + -1 * -12581; a < arguments.length; a++) I[a - (31 * -287 + -3 * -1515 + 4353)] = arguments[a];
        Ln.test(n) ? (i = !1, eo.delete(e)) : A.apply(void (6221 * 1 + 1272 * -2 + -3677), Pe([n], I, !1));
      }, kA(), i && !eo.has(e) && (console.warn(e), eo.add(e));
    } catch (n) {
      Ln.test(n.message) && eo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, sg = Object.freeze([]), Ve = Object.freeze({});
function CC(o, g, t) {
  return void (2 * -3068 + -6164 + -2460 * -5) === t && (t = Ve), o.theme !== t.theme && o.theme || g || t.theme;
}
var Xg = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), BC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, QC = /(^-|-$)/g;
function Jn(o) {
  return o.replace(BC, "-").replace(QC, "");
}
var sC = /(a)(d)/gi, to = 1 * -6949 + 1575 + 5426, Un = function(o) {
  return String.fromCharCode(o + (o > 25 ? -4392 + -27 * -39 + 3378 : 1 * -4397 + 1 * 3559 + -17 * -55));
};
function $g(o) {
  var g, t = "";
  for (g = Math.abs(o); g > to; g = g / to | 4619 + -1 * -6763 + -11382) t = Un(g % to) + t;
  return (Un(g % to) + t).replace(sC, "$1-$2");
}
var mg, Ea = 484 * -3 + 9472 + 377 * -7, de = function(o, g) {
  for (var t = g.length; t; ) o = (1 * -635 + 6952 + -6284) * o ^ g.charCodeAt(--t);
  return o;
}, da = function(o) {
  return de(Ea, o);
};
function cC(o) {
  return $g(da(o) >>> 0);
}
function la(o) {
  return O.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function bg(o) {
  return typeof o == "string" && (O.NODE_ENV === "production" || o.charAt(-7310 + -407 * -14 + 1612) === o.charAt(11246 + 11246 * -1).toLowerCase());
}
var MA = {};
MA.childContextTypes = !0, MA.contextType = !0, MA.contextTypes = !0, MA.defaultProps = !0, MA.displayName = !0, MA.getDefaultProps = !0, MA.getDerivedStateFromError = !0, MA.getDerivedStateFromProps = !0, MA.mixins = !0, MA.propTypes = !0, MA.type = !0;
var ne = {};
ne.name = !0, ne.length = !0, ne.prototype = !0, ne.caller = !0, ne.callee = !0, ne.arguments = !0, ne.arity = !0;
var xe = {};
xe.$$typeof = !0, xe.compare = !0, xe.defaultProps = !0, xe.displayName = !0, xe.propTypes = !0, xe.type = !0;
var Je = {};
Je.$$typeof = !0, Je.render = !0, Je.defaultProps = !0, Je.displayName = !0, Je.propTypes = !0;
var ua = typeof Symbol == "function" && Symbol.for, ha = ua ? Symbol.for("react.memo") : -74294 + -29 * 1587 + -144 * -1253, xC = ua ? Symbol.for("react.forward_ref") : 100565 * -1 + 80922 * 1 + 2045 * 39, EC = MA, dC = ne, fa = xe, lC = ((mg = {})[xC] = Je, mg[ha] = fa, mg);
function Yn(o) {
  return ("type" in (g = o) && g.type.$$typeof) === ha ? fa : "$$typeof" in o ? lC[o.$$typeof] : EC;
  var g;
}
var uC = Object.defineProperty, hC = Object.getOwnPropertyNames, Wn = Object.getOwnPropertySymbols, fC = Object.getOwnPropertyDescriptor, pC = Object.getPrototypeOf, On = Object.prototype;
function pa(o, g, t) {
  if (typeof g != "string") {
    if (On) {
      var e = pC(g);
      e && e !== On && pa(o, e, t);
    }
    var A = hC(g);
    Wn && (A = A.concat(Wn(g)));
    for (var i = Yn(o), n = Yn(g), I = -4559 + 8510 * 1 + -3951; I < A.length; ++I) {
      var a = A[I];
      if (!(a in dC || t && t[a] || n && a in n || i && a in i)) {
        var r = fC(g, a);
        try {
          uC(o, a, r);
        } catch {
        }
      }
    }
  }
  return o;
}
function _e(o) {
  return typeof o == "function";
}
function Ti(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function ue(o, g) {
  return o && g ? "".concat(o, " ").concat(g) : o || g || "";
}
function Hn(o, g) {
  if (-1 * 3373 + -12 * -504 + 2675 * -1 === o.length) return "";
  for (var t = o[8338 + -11 * 758], e = 2 * -1379 + 8689 + -1186 * 5; e < o.length; e++) t += o[e];
  return t;
}
function ze(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function Ai(o, g, t) {
  if (void (5752 + -7 * -1e3 + -12752) === t && (t = !1), !t && !ze(o) && !Array.isArray(o)) return g;
  if (Array.isArray(g))
    for (var e = -8165 + 7 * -1214 + 16663; e < g.length; e++) o[e] = Ai(o[e], g[e]);
  else if (ze(g))
    for (var e in g) o[e] = Ai(o[e], g[e]);
  return o;
}
function Pi(o, g) {
  var t = {};
  t.value = g, Object.defineProperty(o, "toString", t);
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
var yC = O.NODE_ENV !== "production" ? tA : {};
function DC() {
  for (var o = [], g = -5817 * 1 + 6078 + 3 * -87; g < arguments.length; g++) o[g] = arguments[g];
  for (var t = o[-3456 + -128 * -27], e = [], A = 331 * -9 + -9183 + 12163 * 1, i = o.length; A < i; A += 1) e.push(o[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function ot(o) {
  for (var g = [], t = -6520 + -1 * -6521; t < arguments.length; t++) g[t - (-225 * -17 + 1597 * -2 + 18 * -35)] = arguments[t];
  return O.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(g.length > -1 * 514 + 6910 * 1 + -1599 * 4 ? " Args: ".concat(g.join(", ")) : "")) : new Error(DC.apply(void (1 * 1204 + 163 * -36 + 11 * 424), Pe([yC[o]], g, !1)).trim());
}
var wC = function() {
  function o(g) {
    this.groupSizes = new Uint32Array(584 * 1 + 44 * -202 + 8 * 1102), this.length = -7176 + 2 * 3844, this.tag = g;
  }
  return o.prototype.indexOfGroup = function(g) {
    for (var t = 1381 * 1 + 4121 * 1 + -14 * 393, e = 38 * 146 + -1 * -5813 + -11361; e < g; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(g, t) {
    if (g >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, i = A; g >= i; ) if ((i <<= 1) < -12606 + -6303 * -2) throw ot(-449 * 22 + 9440 + 1 * 454, "".concat(g));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(e), this.length = i;
      for (var n = A; n < i; n++) this.groupSizes[n] = 1 * -5419 + -1 * -65 + 5354;
    }
    for (var I = this.indexOfGroup(g + (-6439 + 2053 * -1 + 1 * 8493)), a = (n = 0, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[g]++, I++);
  }, o.prototype.clearGroup = function(g) {
    if (g < this.length) {
      var t = this.groupSizes[g], e = this.indexOfGroup(g), A = e + t;
      this.groupSizes[g] = -5746 + 2873 * 2;
      for (var i = e; i < A; i++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(g) {
    var t = "";
    if (g >= this.length || 3733 + 5403 * -1 + 1670 === this.groupSizes[g]) return t;
    for (var e = this.groupSizes[g], A = this.indexOfGroup(g), i = A + e, n = A; n < i; n++) t += "".concat(this.tag.getRule(n)).concat(Hi);
    return t;
  }, o;
}(), mC = -2415 + 137 * 17 + -87 * -1 << 30, uo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), ho = 1, oo = function(o) {
  if (uo.has(o)) return uo.get(o);
  for (; Fo.has(ho); ) ho++;
  var g = ho++;
  if (O.NODE_ENV !== "production" && ((0 | g) < 0 || g > mC)) throw ot(-20 * -457 + -8640 + 242 * -2, "".concat(g));
  return uo.set(o, g), Fo.set(g, o), g;
}, bC = function(o, g) {
  ho = g + (12497 + -8 * 1562), uo.set(o, g), Fo.set(g, o);
}, GC = "style[".concat(Ne, "][").concat(xa, '="').concat(Qg, '"]'), kC = new RegExp("^".concat(Ne, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), NC = function(o, g, t) {
  for (var e, A = t.split(","), i = -108 * -49 + 119 * 51 + -11361, n = A.length; i < n; i++) (e = A[i]) && o.registerName(g, e);
}, FC = function(o, g) {
  for (var t, e = ((t = g.textContent) !== null && void (-1 * 2493 + 607 * -11 + 9170) !== t ? t : "").split(Hi), A = [], i = -5561 + -3427 * 1 + 8988, n = e.length; i < n; i++) {
    var I = e[i].trim();
    if (I) {
      var a = I.match(kC);
      if (a) {
        var r = 0 | parseInt(a[1], 10), Q = a[-657 * -10 + 1 * -7173 + -11 * -55];
        -5668 + 436 * 13 !== r && (bC(Q, r), NC(o, Q, a[5264 + -1 * -6302 + -11563]), o.getTag().insertRules(r, A)), A.length = 445 * -16 + -313 * 1 + 7433;
      } else A.push(I);
    }
  }
};
function SC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ya = function(o) {
  var g = document.head, t = o || g, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(Ne, "]")));
    return a[a.length - (-8402 * 1 + -8821 * -1 + 38 * -11)];
  }(t), i = void (-1249 * -4 + -8164 + -3 * -1056) !== A ? A.nextSibling : null;
  e.setAttribute(Ne, ca), e.setAttribute(xa, Qg);
  var n = SC();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, i), e;
}, RC = function() {
  function o(g) {
    this.element = ya(g), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 845 * 7 + 64 * -146 + 3429 * 1, i = e.length; A < i; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw ot(286 * 20 + 8899 + 1 * -14602);
    }(this.element), this.length = -1058 * -2 + -4112 + 1996;
  }
  return o.prototype.insertRule = function(g, t) {
    try {
      return this.sheet.insertRule(t, g), this.length++, !0;
    } catch {
      return !1;
    }
  }, o.prototype.deleteRule = function(g) {
    this.sheet.deleteRule(g), this.length--;
  }, o.prototype.getRule = function(g) {
    var t = this.sheet.cssRules[g];
    return t && t.cssText ? t.cssText : "";
  }, o;
}(), MC = function() {
  function o(g) {
    this.element = ya(g), this.nodes = this.element.childNodes, this.length = -26 * 295 + -7642 + 15312;
  }
  return o.prototype.insertRule = function(g, t) {
    if (g <= this.length && g >= 0) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[g] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(g) {
    this.element.removeChild(this.nodes[g]), this.length--;
  }, o.prototype.getRule = function(g) {
    return g < this.length ? this.nodes[g].textContent : "";
  }, o;
}(), vC = function() {
  function o(g) {
    this.rules = [], this.length = -264 + -33 * -8;
  }
  return o.prototype.insertRule = function(g, t) {
    return g <= this.length && (this.rules.splice(g, 8988 + -170 * -2 + 88 * -106, t), this.length++, !0);
  }, o.prototype.deleteRule = function(g) {
    this.rules.splice(g, 3077 + -4 * 769), this.length--;
  }, o.prototype.getRule = function(g) {
    return g < this.length ? this.rules[g] : "";
  }, o;
}(), Kn = Ki, LC = { isServer: !Ki, useCSSOMInjection: !aC }, Da = function() {
  function o(g, t, e) {
    void (-9 * -195 + 121 * 38 + -6353) === g && (g = Ve), void (2267 + 1 * 9778 + 73 * -165) === t && (t = {});
    var A = this;
    this.options = mA(mA({}, LC), g), this.gs = t, this.names = new Map(e), this.server = !!g.isServer, !this.server && Ki && Kn && (Kn = !1, function(i) {
      for (var n = document.querySelectorAll(GC), I = -46 * 62 + -9434 + 1 * 12286, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(Ne) !== ca && (FC(i, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), Pi(this, function() {
      return function(i) {
        for (var n = i.getTag(), I = n.length, a = "", r = function(C) {
          var x = function(s) {
            return Fo.get(s);
          }(C);
          if (void (10169 + -10169 * 1) === x) return "continue";
          var c = i.names.get(x), E = n.getGroup(C);
          if (void (-10 * 122 + 4435 * -2 + 5 * 2018) === c || 11 * 878 + 3215 + 21 * -613 === E.length) return "continue";
          var l = "".concat(Ne, ".g").concat(C, '[id="').concat(x, '"]'), u = "";
          void (11058 + 57 * -194) !== c && c.forEach(function(s) {
            s.length > 2409 + 3 * -1731 + 2784 && (u += "".concat(s, ","));
          }), a += "".concat(E).concat(l, '{content:"').concat(u, '"}').concat(Hi);
        }, Q = 0; Q < I; Q++) r(Q);
        return a;
      }(A);
    });
  }
  return o.registerId = function(g) {
    return oo(g);
  }, o.prototype.reconstructWithOptions = function(g, t) {
    return void (-1451 * 2 + -4211 + -7113 * -1) === t && (t = !0), new o(mA(mA({}, this.options), g), this.gs, t && this.names || void (-7523 * -1 + 2 * 2436 + -12395));
  }, o.prototype.allocateGSInstance = function(g) {
    return this.gs[g] = (this.gs[g] || 8972 * -1 + -373 + 9345) + (62 * 11 + 9958 + 1 * -10639);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (g = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new vC(A) : e ? new RC(A) : new MC(A);
    }(this.options), new wC(g)));
    var g;
  }, o.prototype.hasNameForId = function(g, t) {
    return this.names.has(g) && this.names.get(g).has(t);
  }, o.prototype.registerName = function(g, t) {
    if (oo(g), this.names.has(g)) this.names.get(g).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(g, e);
    }
  }, o.prototype.insertRules = function(g, t, e) {
    this.registerName(g, t), this.getTag().insertRules(oo(g), e);
  }, o.prototype.clearNames = function(g) {
    this.names.has(g) && this.names.get(g).clear();
  }, o.prototype.clearRules = function(g) {
    this.getTag().clearGroup(oo(g)), this.clearNames(g);
  }, o.prototype.clearTag = function() {
    this.tag = void (9075 + -4939 * -2 + -1723 * 11);
  }, o;
}(), JC = /&/g, UC = /^\s*\/\/.*$/gm;
function wa(o, g) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(g, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(g, " ")), t.props = t.props.map(function(e) {
      return "".concat(g, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = wa(t.children, g)), t;
  });
}
function ma(o) {
  var g, t, e, A = o === void 0 ? Ve : o, i = A.options, n = void (2 * 887 + 588 + 2 * -1181) === i ? Ve : i, I = A.plugins, a = void (-5369 + -59 * -91) === I ? sg : I, r = function(x, c, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 0 ? ".".concat(g) : x;
  }, Q = a.slice();
  Q.push(function(x) {
    x.type === ag && x.value.includes("&") && (x.props[7 * -167 + 1 * -2537 + 3706] = x.props[5637 + 1 * 2407 + 2011 * -4].replace(JC, t).replace(e, r));
  }), n.prefix && Q.push(nC), Q.push(oC);
  var C = function(x, c, E, l) {
    void (-9564 + -3319 * 3 + -19521 * -1) === c && (c = ""), void (1942 + 2 * -971) === E && (E = ""), void (-5 * 1322 + -5593 + -12203 * -1) === l && (l = "&"), g = l, t = c, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = x.replace(UC, ""), s = eC(E || c ? "".concat(E, " ").concat(c, " { ").concat(u, " }") : u);
    n.namespace && (s = wa(s, n.namespace));
    var h = [];
    return No(s, gC(Q.concat(iC(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(x, c) {
    return c.name || ot(-2558 * -1 + -16 * -566 + -11599), de(x, c.name);
  }, Ea).toString() : "", C;
}
var YC = new Da(), ei = ma(), qi = ke.createContext({ shouldForwardProp: void (-12950 + -74 * -175), styleSheet: YC, stylis: ei });
qi.Consumer;
var WC = ke.createContext(void 0);
function ti() {
  return Qe(qi);
}
function OC(o) {
  var g = hA(o.stylisPlugins), t = g[-467 * 11 + -125 * -63 + 1 * -2738], e = g[-3259 + 2 * 1937 + -614], A = ti().styleSheet, i = bA(function() {
    var Q = A, C = {};
    return C.useCSSOMInjection = !1, o.sheet ? Q = o.sheet : o.target && (Q = Q.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (Q = Q.reconstructWithOptions(C)), Q;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), n = bA(function() {
    var Q = {};
    Q.namespace = o.namespace, Q.prefix = o.enableVendorPrefixes;
    var C = {};
    return C.options = Q, C.plugins = t, ma(C);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  q(function() {
    Hr(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var I = bA(function() {
    var Q = {};
    return Q.shouldForwardProp = o.shouldForwardProp, Q.styleSheet = i, Q.stylis = n, Q;
  }, [o.shouldForwardProp, i, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, ke.createElement(qi.Provider, a, ke.createElement(WC.Provider, r, o.children));
}
var Tn = function() {
  function o(g, t) {
    var e = this;
    this.inject = function(A, i) {
      void (187 + -1 * 187) === i && (i = ei);
      var n = e.name + i.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, i(e.rules, n, "@keyframes"));
    }, this.name = g, this.id = "sc-keyframes-".concat(g), this.rules = t, Pi(this, function() {
      throw ot(1414 + -1402 * 1, String(e.name));
    });
  }
  return o.prototype.getName = function(g) {
    return void (7307 + 1 * -9831 + -4 * -631) === g && (g = ei), this.name + g.hash;
  }, o;
}(), HC = function(o) {
  return o >= "A" && o <= "Z";
};
function Pn(o) {
  for (var g = "", t = -8084 + 683 * -11 + 15597; t < o.length; t++) {
    var e = o[t];
    if (-3346 + -471 * -11 + -2 * 917 === t && e === "-" && o[-328 * -7 + 1278 + -3574] === "-") return o;
    HC(e) ? g += "-" + e.toLowerCase() : g += e;
  }
  return g.startsWith("ms-") ? "-" + g : g;
}
var ba = function(o) {
  return o == null || o === !1 || o === "";
}, Ga = function(o) {
  var g, t, e = [];
  for (var A in o) {
    var i = o[A];
    o.hasOwnProperty(A) && !ba(i) && (Array.isArray(i) && i.isCss || _e(i) ? e.push("".concat(Pn(A), ":"), i, ";") : ze(i) ? e.push.apply(e, Pe(Pe(["".concat(A, " {")], Ga(i), !1), ["}"], !1)) : e.push("".concat(Pn(A), ": ").concat((g = A, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -4337 * 1 + -6101 + 10438 === t || g in IC || g.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function be(o, g, t, e) {
  if (ba(o)) return [];
  if (Ti(o)) return [".".concat(o.styledComponentId)];
  if (_e(o)) {
    if (!_e(i = o) || i.prototype && i.prototype.isReactComponent || !g) return [o];
    var A = o(g);
    return O.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Tn || ze(A) || A === null || console.error("".concat(la(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), be(A, g, t, e);
  }
  var i;
  return o instanceof Tn ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : ze(o) ? Ga(o) : Array.isArray(o) ? Array.prototype.concat.apply(sg, o.map(function(n) {
    return be(n, g, t, e);
  })) : [o.toString()];
}
function KC(o) {
  for (var g = -1287 + -4 * 1794 + -8463 * -1; g < o.length; g += 3877 + 10 * 398 + -7856) {
    var t = o[g];
    if (_e(t) && !Ti(t)) return !1;
  }
  return !0;
}
var TC = da(Qg), PC = function() {
  function o(g, t, e) {
    this.rules = g, this.staticRulesId = "", this.isStatic = O.NODE_ENV === "production" && (void (-10 * 939 + -5681 + 15071) === e || e.isStatic) && KC(g), this.componentId = t, this.baseHash = de(TC, t), this.baseStyle = e, Da.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(g, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(g, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ue(A, this.staticRulesId);
      else {
        var i = Hn(be(this.rules, g, t, e)), n = $g(de(this.baseHash, i) >>> -953 * 8 + -1044 + 8668);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(i, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = ue(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = de(this.baseHash, e.hash), r = "", Q = -3723 + -1 * -3723; Q < this.rules.length; Q++) {
        var C = this.rules[Q];
        if (typeof C == "string") r += C, O.NODE_ENV !== "production" && (a = de(a, C));
        else if (C) {
          var x = Hn(be(C, g, t, e));
          a = de(a, x + Q), r += x;
        }
      }
      if (r) {
        var c = $g(a >>> 0);
        t.hasNameForId(this.componentId, c) || t.insertRules(this.componentId, c, e(r, ".".concat(c), void (-11 * 22 + 1171 * -1 + -3 * -471), this.componentId)), A = ue(A, c);
      }
    }
    return A;
  }, o;
}(), ka = ke.createContext(void (1404 + 1663 * -4 + 5248));
ka.Consumer;
var Gg = {}, qn = /* @__PURE__ */ new Set();
function qC(o, g, t) {
  var e = Ti(o), A = o, i = !bg(o), n = g.attrs, I = n === void 0 ? sg : n, a = g.componentId, r = a === void 0 ? function(M, U) {
    var D = typeof M != "string" ? "sc" : Jn(M);
    Gg[D] = (Gg[D] || -8214 + 6 * 1369) + 1;
    var j = "".concat(D, "-").concat(cC(Qg + D + Gg[D]));
    return U ? "".concat(U, "-").concat(j) : j;
  }(g.displayName, g.parentComponentId) : a, Q = g.displayName, C = void (-9275 + -265 * -35) === Q ? function(M) {
    return bg(M) ? "styled.".concat(M) : "Styled(".concat(la(M), ")");
  }(o) : Q, x = g.displayName && g.componentId ? "".concat(Jn(g.displayName), "-").concat(g.componentId) : g.componentId || r, c = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, E = g.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var l = A.shouldForwardProp;
    if (g.shouldForwardProp) {
      var u = g.shouldForwardProp;
      E = function(M, U) {
        return l(M, U) && u(M, U);
      };
    } else E = l;
  }
  var s = new PC(t, x, e ? A.componentStyle : void (-4499 + 2294 * 3 + -2383));
  function h(M, U) {
    return function(D, j, fA) {
      var $ = D.attrs, FA = D.componentStyle, Z = D.defaultProps, it = D.foldedComponentIds, rn = D.styledComponentId, L0 = D.target, J0 = ke.useContext(ka), U0 = ti(), lg = D.shouldForwardProp || U0.shouldForwardProp;
      O.NODE_ENV !== "production" && ko(rn);
      var Cn = CC(j, J0, Z) || Ve, VA = function(zt, at, Xt) {
        var Me = {};
        Me.className = void (-6795 + -509 * -2 + 109 * 53), Me.theme = Xt;
        for (var fg, se = mA(mA({}, at), Me), pg = 330 * 13 + 1 * -473 + 1 * -3817; pg < zt.length; pg += 9641 + -9 * -461 + -1 * 13789) {
          var $t = _e(fg = zt[pg]) ? fg(se) : fg;
          for (var ge in $t) se[ge] = ge === "className" ? ue(se[ge], $t[ge]) : ge === "style" ? mA(mA({}, se[ge]), $t[ge]) : $t[ge];
        }
        return at.className && (se.className = ue(se.className, at.className)), se;
      }($, j, Cn), nt = VA.as || L0, It = {};
      for (var SA in VA) void (1 * -3643 + 7 * 919 + 93 * -30) === VA[SA] || SA[-6055 + 21 * -131 + 8806] === "$" || SA === "as" || SA === "theme" && VA.theme === Cn || (SA === "forwardedAs" ? It.as = VA.forwardedAs : lg && !lg(SA, nt) || (It[SA] = VA[SA], lg || O.NODE_ENV !== "development" || tr(SA) || qn.has(SA) || !Xg.has(nt) || (qn.add(SA), console.warn('styled-components: it looks like an unknown prop "'.concat(SA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ug = function(zt, at) {
        var Xt = ti(), Me = zt.generateAndInjectStyles(at, Xt.styleSheet, Xt.stylis);
        return O.NODE_ENV !== "production" && ko(Me), Me;
      }(FA, VA);
      O.NODE_ENV !== "production" && D.warnTooManyClasses && D.warnTooManyClasses(ug);
      var hg = ue(it, rn);
      return ug && (hg += " " + ug), VA.className && (hg += " " + VA.className), It[bg(nt) && !Xg.has(nt) ? "class" : "className"] = hg, It.ref = fA, lA(nt, It);
    }(m, M, U);
  }
  h.displayName = C;
  var m = ke.forwardRef(h), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, m.attrs = c, m.componentStyle = s, m.displayName = C, m.shouldForwardProp = E, m.foldedComponentIds = e ? ue(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : o, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(U) {
      for (var D = [], j = 233 * -29 + -37 + 6795; j < arguments.length; j++) D[j - (1078 * -5 + 670 * 5 + -13 * -157)] = arguments[j];
      for (var fA = 8 * 181 + 2 * 157 + -881 * 2, $ = D; fA < $.length; fA++) Ai(U, $[fA], !0);
      return U;
    }({}, A.defaultProps, M) : M;
  } }), O.NODE_ENV !== "production" && (rC(C, x), m.warnTooManyClasses = /* @__PURE__ */ function(M, U) {
    var D = {}, j = !1;
    return function(fA) {
      if (!j && (D[fA] = !0, Object.keys(D).length >= 200)) {
        var $ = U ? ' with the id of "'.concat(U, '"') : "";
        console.warn("Over ".concat(-2643 * -1 + -36 * -8 + -2731, " classes were generated for component ").concat(M).concat($, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), j = !0, D = {};
      }
    };
  }(C, x)), Pi(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && pa(m, o, R), m;
}
function jn(o, g) {
  for (var t = [o[-6 * -853 + -9945 + 4827]], e = 7741 * -1 + 161 * -20 + 10961, A = g.length; e < A; e += 178 * 22 + 3043 + 994 * -7) t.push(g[e], o[e + (4148 + -377 * 11)]);
  return t;
}
var Zn = function(o) {
  var g = {};
  return g.isCss = !0, Object.assign(o, g);
};
function jC(o) {
  for (var g = [], t = 381 * 16 + 9539 * -1 + 3444; t < arguments.length; t++) g[t - (6143 + 37 * -166)] = arguments[t];
  if (_e(o) || ze(o)) return Zn(be(jn(sg, Pe([o], g, !0))));
  var e = o;
  return 7082 * -1 + 3531 + -67 * -53 === g.length && 214 + 213 * -38 + -213 * -37 === e.length && typeof e[-2412 + 3 * 2273 + -4407] == "string" ? be(e) : Zn(be(jn(e, g)));
}
function oi(o, g, t) {
  if (void (-1408 * -4 + 185 * -31 + -1 * -103) === t && (t = Ve), !g) throw ot(13519 + 13518 * -1, g);
  var e = function(A) {
    for (var i = [], n = -7068 + -394 * -22 + 123 * -13; n < arguments.length; n++) i[n - (1542 * -1 + -429 + 1972)] = arguments[n];
    return o(g, t, jC.apply(void (2 * 1147 + -8734 + 6440), Pe([A], i, !1)));
  };
  return e.attrs = function(A) {
    return oi(o, g, mA(mA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return oi(o, g, mA(mA({}, t), A));
  }, e;
}
var Na = function(o) {
  return oi(qC, o);
}, Zt = Na;
Xg.forEach(function(o) {
  Zt[o] = Na(o);
});
O.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var go = "__sc-".concat(Ne, "__");
O.NODE_ENV !== "production" && O.NODE_ENV !== "test" && typeof window < "u" && (window[go] || (window[go] = -8912 + -53 * -112 + 2976), -2833 * 3 + -6401 + -4967 * -3 === window[go] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[go] += -2612 + -39 * -67);
const ZC = Zt.div`
  position: relative;
`, VC = Zt.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class W extends Error {
  constructor(t, e) {
    super(t);
    w(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof W) return t;
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
    return new W(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof W) return t;
    const e = "An unexpected error has occurred";
    return new W(e);
  }
}
const fo = {};
fo.CONTINUE_DETECTION = "continue-detection", fo.SWITCH_CAMERA = "switch-camera", fo.TOGGLE_MIRROR = "toggle-mirror";
const kg = fo, gi = {};
gi.FIRST_FRAME = "first-frame", gi.FIRST_VALID_FRAME = "first-valid-frame";
const Ng = gi, Fa = {};
Fa.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Vn = Fa;
var Sa = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(Sa || {}), Ae = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(Ae || {}), _C = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(_C || {}), zC = ((o) => (o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(zC || {}), XC = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(XC || {}), $C = ((o) => (o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))($C || {});
const Ra = {};
Ra.EYE_NOT_PRESENT = "eye_not_present";
const _n = Ra, xA = {};
xA.CANDIDATE_SELECTION = "candidate_selection", xA.FACE_TOO_CLOSE = "face_too_close", xA.FACE_TOO_FAR = "face_too_far", xA.FACE_CENTERING = "face_centering", xA.FACE_NOT_PRESENT = "face_not_present", xA.SHARPNESS_TOO_LOW = "sharpness_too_low", xA.BRIGHTNESS_TOO_LOW = "brightness_too_low", xA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", xA.DEVICE_PITCHED = "device_pitched", xA.LEFT_EYE_NOT_PRESENT = "left_" + _n.EYE_NOT_PRESENT, xA.RIGHT_EYE_NOT_PRESENT = "right_" + _n.EYE_NOT_PRESENT, xA.MOUTH_NOT_PRESENT = "mouth_not_present", xA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", xA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const gA = xA, DA = {};
DA.isPresent = gA.FACE_NOT_PRESENT, DA.isNotPitched = gA.DEVICE_PITCHED, DA.isNotSmall = gA.FACE_TOO_FAR, DA.isNotLarge = gA.FACE_TOO_CLOSE, DA.isNotOutOfBounds = gA.FACE_CENTERING, DA.isNotDim = gA.BRIGHTNESS_TOO_LOW, DA.isNotBright = gA.BRIGHTNESS_TOO_HIGH, DA.isSharp = gA.SHARPNESS_TOO_LOW, DA.isLeftEyePresent = gA.LEFT_EYE_NOT_PRESENT, DA.isRightEyePresent = gA.RIGHT_EYE_NOT_PRESENT, DA.isMouthPresent = gA.MOUTH_NOT_PRESENT, DA.isMouthScoreNotTooHigh = gA.MOUTH_SCORE_TOO_HIGH, DA.isMouthScoreNotTooLow = gA.MOUTH_SCORE_TOO_LOW;
const AB = DA, ii = {};
ii.FRONT = "user", ii.REAR = "environment";
const ji = ii, ni = {};
ni.AUTO_CAPTURE = "AUTO_CAPTURE", ni.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Ma = ni, ct = {};
ct.LOADING = "LOADING", ct.ERROR = "ERROR", ct.WAITING = "WAITING", ct.RUNNING = "RUNNING";
const uA = ct;
({ ...gA });
var eB = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(eB || {});
({ ...gA });
({ ...gA });
const cg = $e(void 0);
cg.displayName = "AppStateContext";
function Se() {
  const o = Qe(cg);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const tB = cg.Provider;
class va extends vA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const g = new W("An unknown error has occurred");
    (t = this.context) == null || t.handleError(g);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var g;
    return ((g = this.context) == null ? void 0 : g.appState) === uA.ERROR ? null : this.props.children;
  }
}
w(va, "contextType", cg);
const oB = Zt.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, gB = Zt.div`
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
function iB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const nB = VI(
  ({ detectionDetails: o, isImageMirror: g }, t) => iB() ? (console.log(o), /* @__PURE__ */ p(JA, { children: [
    /* @__PURE__ */ p(oB, { ref: t, $isImageMirror: g }),
    /* @__PURE__ */ p(gB, { children: /* @__PURE__ */ p("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), So = $e(void 0);
So.displayName = "AnalyticsContext";
function IB() {
  const o = Qe(So);
  if (o === void 0)
    throw new Error(`${So.displayName} must be used within a AnalyticsProvider`);
  return o;
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return BA(C - -588, r);
  }
  function e(a, r, Q, C, x) {
    return BA(a - -675, x);
  }
  function A(a, r, Q, C, x) {
    return BA(C - -625, a);
  }
  const i = o();
  function n(a, r, Q, C, x) {
    return BA(C - -444, r);
  }
  function I(a, r, Q, C, x) {
    return BA(C - -150, Q);
  }
  for (; ; )
    try {
      if (-parseInt(I(123, 108, "]OV2", 119, 120)) / 1 * (parseInt(I(111, 137, "POZ[", 121, 114)) / 2) + parseInt(t(-327, "k9Oo", -335, -335, -329)) / 3 + parseInt(t(-332, "MhKO", -328, -320, -337)) / 4 + -parseInt(e(-405, -391, -414, -405, "Itj@")) / 5 + parseInt(A("VJm]", -348, -347, -349, -366)) / 6 * (parseInt(I(113, 121, "fnj5", 125, 136)) / 7) + parseInt(A("q$U]", -347, -336, -342, -343)) / 8 + parseInt(n(-171, "EV1J", -168, -170, -176)) / 9 * (-parseInt(I(146, 132, "g4TO", 130, 141)) / 10) === g) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Ro, -482291 * -1 + -778634 + -1201399 * -1);
function BA(o, g) {
  const t = Ro();
  return BA = function(e, A) {
    e = e - (-8103 + -457 * -19 + -328);
    let i = t[e];
    if (BA.yxDbzG === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      BA.lRfLNH = Q, o = arguments, BA.yxDbzG = !0;
    }
    const I = t[-6059 + 2 * -3376 + 12811], a = e + I, r = o[a];
    return r ? i = r : (BA.MJqgdV === void 0 && (BA.MJqgdV = !0), i = BA.lRfLNH(i, A), o[a] = i), i;
  }, BA(o, g);
}
function io(o, g, t, e, A) {
  return BA(t - 491, g);
}
function Ro() {
  const o = ["WPrbWRtdTmoJ", "bu3cMw7cN8o3WO3dIG", "WQ4cEHn4vez4W57cNCo6", "i8ottmkaWOVcMSopW70", "WRmwiJKQWOztnCk2tCkcW43dJa", "E0n5W77dLG", "hSo4W6f0", "D8kAh8oEW60mWO5/jmkd", "kv1aWQDob3JdJe7cRa", "lLreWQqbFcFdTelcISo+i8kh", "FCkygSoyWQzYW5nOcSk+cSkUWRW", "WPtdVCk2uhhcLtNdIhRcV8k7W4r1", "W6FdGqm", "xmkeWRWyWQS", "fSoHnL/cJCoxW6OPpb7dSW", "DL5IW6FdLa", "fmoMmv7cJmkXWP4tmH7dG8ouW5a", "p0HVWQ7dJW", "i8kiumkjWQJcTSoY", "m1zQjCom", "W6mbWQTcWQSds8olimkLufRcPa", "CSoLnxZdIG", "ACkQAs3cKq", "WQz5WOPcuSk/Bg/cVs51WQD+", "WR7cRLqcjW", "umoPwCoovemlWRFcNcpcRgv4", "WQ1nWO5GjW", "aIqtWOpdUW", "WRGWWOddLCoWWRWiW4C2WPaPkCoY", "dCk3prFdRa", "W7jFW6ycW6C", "WOqSW6SjW5RdK8o8wH3dR8kaDCkY", "WR1SW5hcNCkSW6L6", "wqX/x0BcGmo8D0zqnCoiW70", "W5yxW6JdP8kSWOfNW5TWE1VcMCoI"];
  return Ro = function() {
    return o;
  }, Ro();
}
function aB(o, g, t, e, A) {
  return BA(A - -552, o);
}
const Mo = $e(void 0);
function rB(o, g, t, e, A) {
  return BA(o - 967, e);
}
Mo[no("^#Ew", 532, 530, 515) + no("zv5a", 541, 546, 537) + "e"] = aB("kdT]", -290, -295, -293, -288) + no("pHOx", 497, 525, 511) + no("$(Yy", 517, 513, 530);
function no(o, g, t, e, A) {
  return BA(e - 252, o);
}
function Vt() {
  function o(n, I, a, r, Q) {
    return rB(n - -971, I - 12, a - 124, a);
  }
  const g = Qe(Mo);
  if (g === void 0) throw new Error(Mo[e(751, 754, 754, "6O@U") + t(767, "*IFq", 766) + "e"] + (t(760, "*BGN", 772) + e(728, 738, 713, "6O@U") + o(268, 280, "POZ[") + A(-576, "6O@U", -567, -561) + i("29hD", 322, 321) + t(767, "Ud43", 763) + o(262, 265, "7@MT") + t(797, "1Lyk", 789)));
  function t(n, I, a, r, Q) {
    return io(n - 308, I, a - 14);
  }
  function e(n, I, a, r, Q) {
    return io(n - 313, r, n - -17);
  }
  function A(n, I, a, r, Q) {
    return io(n - 457, I, r - -1304);
  }
  function i(n, I, a, r, Q) {
    return io(n - 210, n, a - -426);
  }
  return g;
}
const mt = (o) => o.length < 7750 + 1 * -4143 + 1 * -3606 ? 24 * -109 + 7661 + 5045 * -1 : o.reduce((t, e) => t + e, 6040 * 1 + 1087 + -7127 * 1) / o.length, oe = (o) => Number.parseFloat(o.toFixed(-5 * 1143 + 7768 + -2050)), CB = (o) => {
  const g = o.getContext("2d");
  g && g.clearRect(6646 + 3457 * 1 + -10103, 7668 + 995 * -5 + 2693 * -1, g.canvas.width, g.canvas.height);
}, La = -7029 + 71 * 99 + 0.75, BB = 7322 + -1 * -1937 + 1 * -9257, QB = -3397 * -1 + -2188 + -609, sB = 3 * 469 + -94 * 3 + -1125, cB = "dot-auto-capture-video", xg = (o, g) => Math.min(o, g), Ja = ({ height: o, width: g }, t) => {
  const e = xg(g, o) * t, A = (g - e) / 2, i = (o - e) / (-5667 + -1 * -1007 + 4662), n = {};
  return n.shiftX = A, n.shiftY = i, n.width = e, n.height = e, n;
}, xB = (o, g) => {
  const { height: t, shiftX: e, shiftY: A, width: i } = Ja(o, g), n = {};
  return n.shiftX = e / o.width, n.shiftY = A / o.height, n.width = i / o.width, n.height = t / o.height, n;
}, EB = ({ height: o, width: g }) => {
  const t = xg(g, o), e = t / (-138 * 1 + 1 * 6896 + -35 * 193) * 4;
  if (g > o) {
    const i = {};
    return i.width = e, i.height = t, i;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, dB = (o, g) => {
  const t = xg(g.width, g.height);
  return oe(o * t);
}, lB = ({ height: o, width: g }) => {
  const t = {};
  return t.height = o, t.width = g, Ja(t, La);
}, uB = (o) => xB(o, La), hB = (o, g) => dB(o, g) * BB, fB = "@innovatrics/dot-common-auto-capture", pB = "7.1.2", yB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, DB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, wB = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, mB = {
  name: fB,
  private: !0,
  version: pB,
  scripts: yB,
  dependencies: DB,
  devDependencies: wB
}, bB = -7969 + 13 * 613 + 0.4, GB = 10188 + 3396 * -3 + 0.16, kB = -8136 * 1 + -269 + 8405 + 0.2, NB = 7111 + -31 * 285 + 1724 + 0.05, FB = 141 * 43 + -1 * 5026 + 1 * -1037, Ii = {};
Ii.min = -(4786 + -2 * -3329 + -11443), Ii.max = 1;
const zn = Ii, Xn = 6022 + 7 * -366 + -3460, SB = 9899 + -521 * 19 + 0.25, RB = 2 * 246 + 562 * 13 + -7798 + 0.2, MB = 0 + 0.85, vB = 1 * 1081 + 7996 + 1 * -9047, LB = 8521 * -1 + 4531 * -2 + 17592 + 0.8100000000000005, po = {};
po.minDuration = 1e3, po.maxDuration = 2500, po.minFrames = 10;
const Fg = po, ai = {};
ai.max = 100, ai.min = 10;
const $n = ai, JB = -1 * 82 + -4399 + 5201, UB = -9530 + -1145 * -2 + 7440, YB = 13 * -167 + -1 * 3513 + 12 * 474, xt = {};
xt.width = 200, xt.height = 200, xt.top = 50, xt.left = 50;
const WB = xt, Ua = "AES-CBC", Ya = "RSA-OAEP", OB = "SHA-256", HB = "image/jpeg", KB = -332 * -22 + -215 * 10 + -5146, TB = 40, Wa = "/dot-assets", AI = "dot_embedded_bg.wasm", Oa = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), eI = () => {
  const o = /Android/i.test(navigator.userAgent), g = /Firefox/i.test(navigator.userAgent);
  return o && g;
}, PB = () => {
  const o = navigator.userAgent.includes("Chrome"), g = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && g ? !1 : g;
}, ri = (o) => new Promise((g) => {
  setTimeout(g, o);
}), Ha = (o) => JSON.parse(JSON.stringify(o, (g, t) => typeof t == "number" ? oe(t) : t)), Ka = () => mB.version, Ta = (o) => new URL(o).hostname.replace("www.", ""), qB = () => Ta(window.location.href) === "localhost", Io = (o) => Object.entries(o).map(([g, t]) => encodeURIComponent(g) + "=" + encodeURIComponent(t)).join("&"), jB = (o, g) => JSON.stringify(o) === JSON.stringify(g) ? g : o;
function ZB(o, g) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, o(...e);
    };
    t === void (-7523 * -1 + -1 * -2434 + -9957) && (t = setTimeout(A, g));
  };
}
function VB(o) {
  return o.at(-1) === "/" ? o.slice(7688 + -62 * 124, -(-3862 * 2 + 4 * 523 + -1 * -5633)) : o;
}
function Pa(o) {
  return "" + VB(o ?? "") + Wa;
}
const _B = () => "prod".toLowerCase() === "dev";
var Ie;
class Zi extends Array {
  constructor(t) {
    super();
    Y(this, Ie);
    L(this, Ie, t);
  }
  get size() {
    return y(this, Ie);
  }
  pushFixed(...t) {
    if (t.length > y(this, Ie)) {
      const e = t.slice(-y(this, Ie));
      this.push(...e);
      return;
    }
    this.length === y(this, Ie) && this.splice(3229 * -1 + -8140 + 11369, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4 * 1663 + 2099 + 4553);
  }
}
Ie = new WeakMap();
const qa = (o, g, t = HB) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, g);
}), zB = async (o) => qa(o, 1 * 1803 + -932 * -4 + -5441 * 1), XB = async (o) => qa(o, -1 * -457 + -334 + -23, "image/png"), ja = (o, g) => {
  const t = document.createElement("canvas");
  t.width = g.width, t.height = g.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, g.shiftX, g.shiftY, g.width, g.height, -4053 * 1 + -9196 + 13249, -1 * 8132 + -708 + 8840, t.width, t.height), t;
}, $B = (o) => {
  const g = o.getContext("2d");
  if (!g) throw new Error("getImageDataForSam ctx error");
  const { data: t } = g.getImageData(-7911 + 5619 * -1 + 13530, 0, o.width, o.height);
  return t;
};
function tI(o, g, t) {
  return t - g / (4204 + 1 * 7980 + -2 * 6091) < 0 ? -7581 * 1 + 3832 + 3749 : t + g / (-7856 + -1388 * 1 + 9246) > o ? o - g : t - g / (-408 + 150 * 18 + -2290);
}
function AQ(o, g) {
  const t = o.width, e = o.height, A = t * (g.left / (6870 + -1 * 6770)), i = e * (g.top / (7541 + -1 * -5029 + -12470));
  return { width: g.width, height: g.height, shiftX: tI(t, g.width, A), shiftY: tI(e, g.height, i) };
}
async function eQ(o, g) {
  const t = AQ(o, g), e = ja(o, t);
  return XB(e);
}
const Za = (o, g, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(g.topLeft.x, g.topLeft.y, g.width, g.height)) : (A.strokeStyle = t, A.rect(g.topLeft.x, g.topLeft.y, g.width, g.height)), A.stroke());
}, Sg = (o, g, t) => {
  const { height: e, shiftX: A, shiftY: i, width: n } = g, I = {};
  I.x = A, I.y = i;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, Za(o, a, t);
}, pt = (o, g, t, e = -455 * 21 + 6730 + 2825) => {
  const A = o.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(g.x + e, g.y + e, -5980 + -3 * -3313 + -3952, 5925 + -1 * -3287 + -1315 * 7), A.beginPath());
}, tQ = (o, g) => {
  const { height: t, shiftX: e, shiftY: A, width: i } = g;
  return !(o.x < e || o.x > e + i || o.y < A || o.y > A + t);
}, oQ = (o, g) => Object.values(o).every((t) => tQ(t, g));
function vo(o) {
  const { height: g, width: t } = EB(o), e = (o.width - t) / (9957 + -19 * 268 + -4863), A = (o.height - g) / (-162 * -2 + -547 * -16 + -9074), i = {};
  return i.shiftX = e, i.shiftY = A, i.width = t, i.height = g, i;
}
function Va(o, g, t) {
  const { height: e, width: A } = t, i = xg(o.width, o.height), n = A - i * g * (37 * 263 + 1607 * 5 + -17764), I = e - i * g * (1015 * 7 + 1 * 9121 + -16224), a = (o.width - n) / 2, r = (o.height - I) / (-223 * -41 + 5782 + -14923), Q = {};
  return Q.shiftX = a, Q.shiftY = r, Q.width = n, Q.height = I, Q;
}
function Le(o, g) {
  const { shiftX: t, shiftY: e } = g, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return nA(x - 186, C);
  }
  const e = o();
  function A(a, r, Q, C, x) {
    return nA(x - -23, a);
  }
  function i(a, r, Q, C, x) {
    return nA(Q - 961, x);
  }
  function n(a, r, Q, C, x) {
    return nA(a - -889, x);
  }
  function I(a, r, Q, C, x) {
    return nA(x - 725, r);
  }
  for (; ; )
    try {
      if (parseInt(i(1377, 1385, 1372, 1362, "MWG4")) / 1 * (-parseInt(I(1161, "mXHC", 1147, 1158, 1151)) / 2) + -parseInt(A("6&YY", 397, 414, 416, 407)) / 3 * (parseInt(I(1134, "O(sn", 1138, 1145, 1144)) / 4) + parseInt(i(1372, 1368, 1378, 1383, "jfb1")) / 5 + -parseInt(A("qLoj", 396, 404, 401, 400)) / 6 + -parseInt(t(616, 608, 599, "BOe7", 604)) / 7 + parseInt(A("Pm4v", 406, 393, 403, 405)) / 8 + parseInt(n(-457, -445, -466, -449, "8mgv")) / 9 === g) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Lo, 1646988 + -119123 * -8 + -1615906);
function nA(o, g) {
  const t = Lo();
  return nA = function(e, A) {
    e = e - (-2259 + -127 * -41 + 43 * -59);
    let i = t[e];
    if (nA.sCNIjl === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      nA.kyhFRN = Q, o = arguments, nA.sCNIjl = !0;
    }
    const I = t[-9446 + -3333 * 3 + -3889 * -5], a = e + I, r = o[a];
    return r ? i = r : (nA.nUAaKe === void 0 && (nA.nUAaKe = !0), i = nA.kyhFRN(i, A), o[a] = i), i;
  }, nA(o, g);
}
function gQ({ assetsDirectoryPath: o, bramble: g }) {
  const [t, e] = hA(), A = t !== void (179 * -5 + -14 * -229 + -2311);
  function i(r, Q, C, x, c) {
    return nA(Q - -358, c);
  }
  function n(r, Q, C, x, c) {
    return nA(x - -52, r);
  }
  q(() => {
    async function r() {
      function Q(x, c, E, l, u) {
        return nA(l - 952, E);
      }
      function C(x, c, E, l, u) {
        return nA(x - 145, u);
      }
      await g[Q(1374, 1381, "JHXg", 1376)](Pa(o)), e(g[C(560, 549, 570, 559, "BeoO") + C(574, 584, 574, 582, "jfb1") + Q(1365, 1358, "xAFa", 1368) + "t"]());
    }
    r();
  }, [g, o, e]);
  const I = {};
  function a(r, Q, C, x, c) {
    return nA(Q - -297, x);
  }
  return I[i(82, 75, 65, 69, "P^2$") + n("xAFa", 366, 357, 369)] = t, I[a(134, 138, 137, "WaaM") + "sh"] = A, I;
}
function Lo() {
  const o = ["WPPEDSkV", "CYuHWRbKWOVdSq", "WOJcUhujvmoCWO4", "WPVdLmk6W7pdNXio", "WRtdHmkOBxvkdYu6W5FcLSo3WO/dLG", "WOFcT8oMW7uZ", "W6u8W510zCoxW6Opn8koW6G4", "hvZdVmkRW6/cVmoFW78XWPXvxa", "n0jrimk5gmkMWPRcLq/cMcaY", "WQpdIsTifW", "WRddGCkQBNbibv8GW7pcKmorWRi", "WOZdSIVcQ0m", "W7tdHgDKW4RcUmofamohlCo3WQ4", "mujvkSk+hCo3WR7cIbBcUZ8", "AGzzoSkXr8ouk8otW6BdTCk8W5tdLq", "tNTrWRWrzHX/c8kQzWJcGG", "WPWmWQhdLqe", "kSkCWRtcTYa", "W5xdPmkWWR5HWQGiW6yCACkFqmoz", "fsWyWQJdQmkUWRT0W5i5WRPX", "W5tcOrtcOSoJu8op", "WPNcTCoAW63dLCo2dmoQhHXaWOFcSG", "emkyWRpcOsq", "Amo4x8kcWOhcTa/dRCouWQhcRvC", "sNLrWRexBr19dCkaEZJcVW"];
  return Lo = function() {
    return o;
  }, Lo();
}
var _a = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(_a || {});
const Ci = {};
Ci.SIMD = "simd", Ci.NO_SIMD = "no-simd";
const oI = Ci, Bi = {};
Bi.Lower = "Lower", Bi.Higher = "Higher";
const Qi = Bi, yo = {};
yo.VISIBLE = "VISIBLE", yo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", yo.HIDDEN = "HIDDEN";
const Jo = yo;
(function(o, g) {
  function t(a, r, Q, C, x) {
    return wA(a - -4, r);
  }
  function e(a, r, Q, C, x) {
    return wA(x - 727, Q);
  }
  function A(a, r, Q, C, x) {
    return wA(r - -587, x);
  }
  function i(a, r, Q, C, x) {
    return wA(C - -607, r);
  }
  for (var n = o(); ; )
    try {
      var I = -parseInt(e(1046, 1032, "lamq", 1047, 1036)) / 1 * (parseInt(i(-269, "2#Cd", -265, -273, -261)) / 2) + parseInt(e(1046, 1053, "RNOX", 1056, 1045)) / 3 + -parseInt(i(-287, "A)3L", -294, -285, -286)) / 4 + parseInt(e(1056, 1052, "XDOH", 1063, 1057)) / 5 * (parseInt(A(-265, -254, -244, -258, "(20!")) / 6) + -parseInt(A(-250, -256, -262, -244, "]M78")) / 7 * (parseInt(A(-282, -274, -269, -274, "R!6s")) / 8) + -parseInt(i(-292, "T$#*", -287, -293, -297)) / 9 * (parseInt(i(-272, "(20!", -276, -283, -290)) / 10) + -parseInt(i(-269, "4Vos", -282, -278, -291)) / 11 * (-parseInt(t(317, "2P3u", 306, 317, 330)) / 12);
      if (I === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Uo, -19 * -37129 + 145 * -4260 + 583128);
function iQ({ crosshatch: o }) {
  function g(e, A, i, n, I) {
    return wA(I - -827, A);
  }
  function t(e, A, i, n, I) {
    return wA(e - -341, i);
  }
  return o != null && o[t(-30, -20, "(3kj") + "id"] ? Qi[t(-15, -27, "XDOH") + "r"] : Qi[g(-492, "o8g#", -500, -505, -495)];
}
function wA(o, g) {
  var t = Uo();
  return wA = function(e, A) {
    e = e - (4746 + 1601 * -1 + -2836);
    var i = t[e];
    if (wA.QIOpxx === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      wA.PSywLE = I, o = arguments, wA.QIOpxx = !0;
    }
    var a = t[-3734 * 1 + 4922 * 1 + -1188], r = e + a, Q = o[r];
    return Q ? i = Q : (wA.KKbOjq === void 0 && (wA.KKbOjq = !0), i = wA.PSywLE(i, A), o[r] = i), i;
  }, wA(o, g);
}
function Uo() {
  var o = ["lrKGpSk8WP3dMq", "WRiYW41Dx8kiWOS", "WRlcVYPTWQS4W5uYwW", "kSkcDtddRsv5", "lmkpW6RcVtNcN8oLWR7cICoJhmkD", "W4lcU8kPxmoR", "i8kohCo0sHWDdmkOW7tdHSob", "W5RdHSoqW4JcL8kDW5C", "W6yAW4xcIWddKmosW4X1WQlcQYK", "WR/dPmkPFSosW4pcHvm", "iCk/W6FcLZ8", "W7/dUceCW59YB8kC", "FmkEW4y7WQ3cT8oLWPq", "ymk9q8kFkSkGu8kzW6BcOConqMa", "W4JcHL0HWPBdGvXTW58vW6NcMW", "W6yyW4/cIGZdN8kvW6LVWQZcUJFcHa", "WP4ZrCoKC8kjWQBdPfi", "Bfm1twK7W5vBW7fmWPBdP3C", "A1a/s2qYWPrhW6PoWO/dGG", "W6VcN8khWRxcUSkDW4WaoJz1W7/cVq", "tSkvWO3dV1iLWOxcNhJdGmozW7dcMq", "W4VcMxTVemotcCotvhZcLCkLW6u", "W6CyW43cJGZdN8o1W55wWQ3cGqC", "jSkpwSkanwqbpW", "W69XDCkLt8kCCSkSnXvCrqK", "v8krvX/dQq"];
  return Uo = function() {
    return o;
  }, Uo();
}
(function(o, g) {
  const t = o();
  function e(I, a, r, Q, C) {
    return QA(C - 773, I);
  }
  function A(I, a, r, Q, C) {
    return QA(a - 598, r);
  }
  function i(I, a, r, Q, C) {
    return QA(C - 656, Q);
  }
  function n(I, a, r, Q, C) {
    return QA(a - -481, C);
  }
  for (; ; )
    try {
      if (parseInt(e("$)Bz", 1023, 1038, 1016, 1025)) / 1 + parseInt(e("v6To", 1033, 1016, 1022, 1023)) / 2 + parseInt(A(849, 857, "hmFN", 848, 856)) / 3 * (parseInt(n(-232, -226, -213, -231, "jOGh")) / 4) + parseInt(e("W)6w", 1019, 1036, 1043, 1029)) / 5 + -parseInt(n(-223, -215, -210, -202, "u6G$")) / 6 + parseInt(A(856, 856, "47Ay", 865, 857)) / 7 + -parseInt(i(924, 902, 913, "u6G$", 913)) / 8 === g) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Yo, 1014492 + -2798 * 191);
function Yo() {
  const o = ["WQBcLSkFWPqNjLKTvfRdQmkudmkC", "W45iWRSzW7NdTCkwECkHWPGoWPlcNW", "zNL1", "W5VcU8kLWOpcSq", "tmodWQ7cN08RW7Thne1zWRK", "WQLydWJdIq", "WQtdQNqhWPxcGmo1ySkAW63dKspdTa", "bmkjuL8", "W5SKWOLoW54", "WRLvWOK", "WPmCW7PdWQC", "bxvDW4az", "WP0pW5D/EW", "jM/dOGTDdsWzWQpcOfRcIw4", "WRpdICoXrSkk", "oZlcU8keW57cH2FcI8oICgZcI2m", "j8kSt0v7", "pdpcUmkdW53cJMBcVmo/shRcQh4", "hHJdJuZcLmoVW6/dG8oDBmkyd8kE", "W4VcSaldPry/w8kMgNuj", "W6FcLfLBWOtdQCkqW4PhjmoOoa", "W4zTCmodtSkgWOxcQG", "WRXwW4hcPuO", "bmo4WR9LW7ldLSkUaq", "BHVcVmoulv0gWOVcJHvTjuO", "WQddQNapWPxcG8o7dmkJW6ZdKrFdGIu", "WRuABSorWRtcQuD8FY/cOmkrhG", "A8otvcDfjSktELxcKCkl"];
  return Yo = function() {
    return o;
  }, Yo();
}
function QA(o, g) {
  const t = Yo();
  return QA = function(e, A) {
    e = e - (1 * 8203 + -9480 + 1521);
    let i = t[e];
    if (QA.tOaSFq === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      QA.rTYDqp = Q, o = arguments, QA.tOaSFq = !0;
    }
    const I = t[1552 + -42 * -22 + -2476], a = e + I, r = o[a];
    return r ? i = r : (QA.CqLHMU === void 0 && (QA.CqLHMU = !0), i = QA.rTYDqp(i, A), o[a] = i), i;
  }, QA(o, g);
}
function nQ({ assetsDirectoryPath: o, children: g, bramble: t }) {
  function e(E, l, u, s, h) {
    return QA(s - -103, l);
  }
  function A(E, l, u, s, h) {
    return QA(u - 7, E);
  }
  const i = {};
  i[c(1260, 1249, 1269, 1256, "uW47") + "le"] = t, i[e(164, "7r@X", 174, 168) + e(133, "*GyE", 135, 145) + A("mu5j", 248, 261) + c(1255, 1266, 1252, 1260, "*GyE")] = o;
  function n(E, l, u, s, h) {
    return QA(h - -814, E);
  }
  const { sunfish: I, crosshatch: a } = gQ(i), r = {};
  r[x(1237, "G&Dj", 1236, 1236, 1228) + n("jrzs", -533, -550, -530, -544)] = a;
  const Q = bA(() => ({ redfin: iQ(r), sunfish: I, crosshatch: a, bramble: t }), [I, a, t]), C = {};
  C[e(156, "ntQZ", 173, 165)] = Q, C[A("Bt3u", 273, 272) + x(1258, "xh%L", 1263, 1253, 1251)] = g;
  function x(E, l, u, s, h) {
    return QA(h - 982, l);
  }
  function c(E, l, u, s, h) {
    return QA(s - 993, h);
  }
  return p(Mo[n("!RWt", -563, -581, -571, -570) + A("9db%", 272, 269)], C);
}
(function(o, g) {
  function t(r, Q, C, x, c) {
    return GA(x - 456, C);
  }
  var e = o();
  function A(r, Q, C, x, c) {
    return GA(r - -304, x);
  }
  function i(r, Q, C, x, c) {
    return GA(C - -154, Q);
  }
  function n(r, Q, C, x, c) {
    return GA(Q - 735, C);
  }
  function I(r, Q, C, x, c) {
    return GA(C - 331, x);
  }
  for (; ; )
    try {
      var a = -parseInt(A(-95, -95, -94, "kvQy", -99)) / 1 + -parseInt(A(-73, -76, -72, "Ysja", -84)) / 2 * (-parseInt(I(550, 533, 541, "32lA", 533)) / 3) + parseInt(i(63, "cQET", 68, 59, 76)) / 4 * (-parseInt(n(973, 964, "kvQy", 975, 952)) / 5) + parseInt(I(552, 556, 557, "NnbP", 561)) / 6 * (parseInt(I(568, 554, 561, "NVu*", 556)) / 7) + parseInt(i(71, "FsSM", 71, 69, 82)) / 8 * (parseInt(I(562, 562, 551, "W6ut", 546)) / 9) + -parseInt(i(63, "KUPg", 65, 76, 54)) / 10 + -parseInt(t(672, 678, "WSe3", 683, 687)) / 11 * (-parseInt(t(656, 670, "#Kw]", 668, 672)) / 12);
      if (a === g) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Wo, -2733 * 6 + -768040 + 1261988);
function Wo() {
  var o = ["omkqnLBdQmkxWQtdJXddQXddNW", "prdcJmo+WPhdSCoPW6FdVdHPqG", "FCkmbmkYWRlcSCkCWOxcMb4RWO1N", "W4nQWR5CW74/Fr4n", "W7pcRCoMvCkudmo9sSkZWQ8JWPBcGW", "WRe8fmoztmoglCkQqG", "WRBcHmoZWQldMGCUxW0XWPmAaa", "W7NcGJpcTCkGW7JcOhTvqvtcPmkh", "W5ahWRq/eeOlWR7cGmkv", "W5BdQCozESoNWRldPa", "kubGWOH1WQhcQCkUW5PRWOys", "WRXLWQ4PW59BWOJcIt8", "WQRcINZcSxe0BCo1r8oOcmoV", "WRxcJwz1u8o+WRNcKhy", "WRmHWQTeW4ehW5i", "z8oNjr3dOrtcUmo1W4PK", "kqfLc8kxWP5m", "WRBcGw4hm8kGW6dcMuVdJfxcJxG", "WR5dW6S+WOvNW4GtWOddMWhdRW", "t8oCWOVcLamOvaRcS8oucSocaW", "hCkkW6VdUZZcUCo5", "WPHbW4lcIfTWu3C0", "tcuyW4GctgRdJxi1W4eN", "WQtdVNqcWQZcPSkgmIe"];
  return Wo = function() {
    return o;
  }, Wo();
}
function GA(o, g) {
  var t = Wo();
  return GA = function(e, A) {
    e = e - (-2481 * 1 + -893 + 3582);
    var i = t[e];
    if (GA.MCVaoY === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      GA.DkHctJ = I, o = arguments, GA.MCVaoY = !0;
    }
    var a = t[2481 + -6 * -9 + -2535], r = e + a, Q = o[r];
    return Q ? i = Q : (GA.mHUMge === void 0 && (GA.mHUMge = !0), i = GA.DkHctJ(i, A), o[r] = i), i;
  }, GA(o, g);
}
function IQ({ analytics: o, crosshatch: g }) {
  return g !== void (-31 * 134 + 332 * -5 + -969 * -6) && !g.isAnalyticsDisabled ? o : void (1045 + -1045 * 1);
}
function aQ({ analytics: o, appKey: g, redfin: t, crosshatch: e, bramble: A }) {
  const i = {};
  i.analytics = o, i.crosshatch = e;
  const n = IQ(i);
  return q(() => {
    n && n.init(g);
  }, [n, g]), q(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), n && n.walleye(t, A.getCustomerName()));
  }, [n, A, e, t]), q(() => {
    if (n)
      return window.addEventListener("beforeunload", n.endSession), () => {
        n.endSession(), window.removeEventListener("beforeunload", n.endSession);
      };
  }, [n]), n;
}
function rQ({
  analytics: o,
  appKey: g,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: i } = Vt(), n = aQ({ analytics: o, redfin: e, appKey: g, crosshatch: A, bramble: i }), I = bA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ p(So.Provider, { value: I, children: t });
}
const CQ = (o, g) => {
  const t = {};
  t.detail = g, document.dispatchEvent(new CustomEvent(o, t));
}, og = class og {
  constructor() {
    w(this, "lastDetails", {});
    w(this, "delayedTime", -2 * -775 + 3119 * -2 + -4688 * -1);
  }
  static getInstance() {
    return !this._instance && (this._instance = new og()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -3 * -991 + -4159 * -2 + 7 * -1613;
  }
  isDetailChanged(g, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[g]) ? (this.lastDetails[g] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(g, t) {
    this.isDetailChanged(g, t) && CQ(g, t);
  }
  dispatchDelayedCustomEventOnChange(g, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(g, t), this.delayedTime = A);
  }
};
w(og, "_instance");
let bt = og;
const gt = bt.getInstance(), za = (o, g, t = QB) => {
  const e = {};
  e.instructionCode = g.code, e.isEscalated = g.isEscalated ?? !1;
  const A = e;
  gt.dispatchDelayedCustomEventOnChange(o, A, t);
}, gI = (o, g) => {
  gt.dispatchCustomEventOnChange(o, g);
}, BQ = (o, g) => {
  gt.dispatchCustomEventOnChange(o, g);
}, QQ = (o, g) => {
  const t = {};
  t.size = g;
  const e = t;
  gt.dispatchCustomEventOnChange(o, e);
}, sQ = (o, g, t) => {
  const e = g.confidence < t ? void 0 : g, A = {};
  A.detectedObject = e;
  const i = A;
  gt.dispatchCustomEventOnChange(o, i);
}, cQ = (o, { detection: g, fps: t, image: e, invalidValidators: A, isInCandidateSelection: i }) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = g, n.data.fps = t, n.data.isInCandidateSelection = i, n.data.invalidValidators = A, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const I = n;
  gt.dispatchCustomEventOnChange(o, I);
}, xQ = (o, g) => {
  const { cameraResolution: t, shouldCameraMirror: e } = g;
  q(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, BQ(o, A);
  }, [t, e, o]);
}, EQ = (o) => o === Sa.CONTROL ? !Oa() : !0, dQ = (o, g) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: i } = Se(), [n, I] = hA(), a = bA(() => {
    const Q = i && g && g.isStreaming && g.getCameraSettings().facingMode;
    return Q ? n ?? Q === "user" : n ?? EQ(o);
  }, [g, n, o, i]);
  q(() => {
    const Q = () => {
      t !== uA.LOADING && e(uA.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, x = async () => {
      if (g) {
        e(uA.LOADING);
        try {
          await g.switchCamera(), e(uA.RUNNING);
        } catch (E) {
          if (E instanceof Error) {
            A(W.fromCameraError(E));
            return;
          }
        }
        I(void 0);
      }
    }, c = (E) => {
      var l;
      switch ((l = E.detail) == null ? void 0 : l["instruction"]) {
        case kg.CONTINUE_DETECTION:
          Q();
          break;
        case kg.TOGGLE_MIRROR:
          C();
          break;
        case kg.SWITCH_CAMERA:
          x();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(o, c), () => {
      document.removeEventListener(o, c);
    };
  }, [t, g, A, n, e, a, o]);
  const r = {};
  return r.shouldCameraMirror = a, r;
};
function lQ(o, g) {
  q(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      QQ(g, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, g]);
}
function uQ(o) {
  return oe(Math.abs(o));
}
const hQ = () => {
  const [o, g] = hA(null), t = kA(new Zi(5474 + -1823 * 3));
  function e(i) {
    const { z: n } = i.accelerationIncludingGravity || {};
    if (!n) return;
    t.current.pushFixed(uQ(n));
    const I = oe(mt(t.current)), a = {};
    a.z = I, g(a);
  }
  q(() => (window.addEventListener("devicemotion", ZB(e, TB), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = o, A;
};
var fQ = Symbol.for("preact-signals");
function Vi() {
  if (Oe > -463 * -9 + 2322 + -6488)
    Oe--;
  else {
    for (var o, g = !1; void (-5627 + 331 * 17) !== yt; ) {
      var t = yt;
      for (yt = void (-1029 * -3 + 2 * -3721 + 4355), si++; void (5 * -645 + -4526 + 7751) !== t; ) {
        var e = t.o;
        if (t.o = void (-2 * 413 + 3 * 701 + 1277 * -1), t.f &= -(3735 * 2 + 1 * -466 + -7001), !(-19 * 227 + -1185 + 5506 & t.f) && A0(t)) try {
          t.c();
        } catch (A) {
          !g && (o = A, g = !(-2719 + -1 * -2719));
        }
        t = e;
      }
    }
    if (si = -5991 * -1 + -6346 + -355 * -1, Oe--, g) throw o;
  }
}
var K = void 0, yt = void (1 * 2423 + 66 * -40 + 217), Oe = -547 * -3 + -7481 * -1 + 1 * -9122, si = -139 * 31 + -1 * 6148 + 10457, Oo = 0;
function Xa(o) {
  if (void (7 * 717 + -106 * 94 + 215 * 23) !== K) {
    var g = o.n;
    if (g === void 0 || g.t !== K)
      return g = { i: 0, S: o, p: K.s, n: void (-601 * -15 + 6806 * 1 + -15821), t: K, e: void (-1979 * -1 + -5853 * -1 + 1 * -7832), x: void (2528 * 2 + -1 * -1699 + 965 * -7), r: g }, void (7152 + 10 * -901 + 1858) !== K.s && (K.s.n = g), K.s = g, o.n = g, 1 * 4076 + 1 * 8625 + 12669 * -1 & K.f && o.S(g), g;
    if (g.i === -1)
      return g.i = -5218 + 59 * 11 + -1523 * -3, g.n !== void 0 && (g.n.p = g.p, void (1 * 541 + -2 * -3214 + -23 * 303) !== g.p && (g.p.n = g.n), g.p = K.s, g.n = void (-21 * 103 + -24 * -314 + -5373), K.s.n = g, K.s = g), g;
  }
}
function CA(o) {
  this.v = o, this.i = 6123 + 9357 * 1 + -15480, this.n = void (1282 + -8198 * 1 + 6916), this.t = void (-1 * -8104 + 762 + 1 * -8866);
}
CA.prototype.brand = fQ, CA.prototype.h = function() {
  return !(4080 + -40 * 102);
}, CA.prototype.S = function(o) {
  this.t !== o && void (-1 * 4832 + 5 * -109 + -283 * -19) === o.e && (o.x = this.t, void (602 + -129 * 26 + 2752) !== this.t && (this.t.e = o), this.t = o);
}, CA.prototype.U = function(o) {
  if (void (9928 + 1390 * -3 + 2 * -2879) !== this.t) {
    var g = o.e, t = o.x;
    g !== void 0 && (g.x = t, o.e = void 0), void (35 * 18 + -2167 * -3 + -7131) !== t && (t.e = g, o.x = void (-6433 + -1059 * -3 + 296 * 11)), o === this.t && (this.t = t);
  }
}, CA.prototype.subscribe = function(o) {
  var g = this;
  return zi(function() {
    var t = g.value, e = K;
    K = void (-306 + -2 * -153);
    try {
      o(t);
    } finally {
      K = e;
    }
  });
}, CA.prototype.valueOf = function() {
  return this.value;
}, CA.prototype.toString = function() {
  return this.value + "";
}, CA.prototype.toJSON = function() {
  return this.value;
}, CA.prototype.peek = function() {
  var o = K;
  K = void (4172 + 28 * 63 + -2968 * 2);
  try {
    return this.value;
  } finally {
    K = o;
  }
}, Object.defineProperty(CA.prototype, "value", { get: function() {
  var o = Xa(this);
  return void (-9854 + 13 * -507 + 715 * 23) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (si > 14924 + -136 * 109) throw new Error("Cycle detected");
    this.v = o, this.i++, Oo++, Oe++;
    try {
      for (var g = this.t; void (-4289 * -1 + -4287 + 2 * -1) !== g; g = g.x) g.t.N();
    } finally {
      Vi();
    }
  }
} });
function $a(o) {
  return new CA(o);
}
function A0(o) {
  for (var g = o.s; void (-5401 + -7529 * 1 + -2586 * -5) !== g; g = g.n) if (g.S.i !== g.i || !g.S.h() || g.S.i !== g.i) return !0;
  return !(233 * 30 + -6603 * -1 + 8 * -1699);
}
function e0(o) {
  for (var g = o.s; void (-29 * 103 + -5063 * -1 + 346 * -6) !== g; g = g.n) {
    var t = g.S.n;
    if (void (-11 * 241 + -8910 + 11561) !== t && (g.r = t), g.S.n = g, g.i = -(73 * -41 + -3331 + 6325), void (-428 * -2 + -397 * -9 + -4429) === g.n) {
      o.s = g;
      break;
    }
  }
}
function t0(o) {
  for (var g = o.s, t = void 0; g !== void 0; ) {
    var e = g.p;
    -(-9649 + 10 * 965) === g.i ? (g.S.U(g), void (449 * -19 + 3252 + -5279 * -1) !== e && (e.n = g.n), void (5052 * 1 + 1327 * 5 + 13 * -899) !== g.n && (g.n.p = e)) : t = g, g.S.n = g.r, void (-6223 + -31 * 71 + 72 * 117) !== g.r && (g.r = void (-3461 + -22 * 83 + 5287)), g = e;
  }
  o.s = t;
}
function Ue(o) {
  CA.call(this, void 0), this.x = o, this.s = void (1106 + 5653 * -1 + 1 * 4547), this.g = Oo - (6921 + 1 * -4007 + 3 * -971), this.f = 7938 + -1 * 2391 + -5543;
}
(Ue.prototype = new CA()).h = function() {
  if (this.f &= -(-9263 * -1 + 2181 + 673 * -17), -5939 * -1 + -157 * -8 + -7194 & this.f) return !(5243 + -3 * 1847 + 299);
  if (-4364 + 248 * -24 + 10348 == (6589 + -6553 * 1 & this.f)) return !0;
  if (this.f &= -(-1789 * 2 + -31 * -303 + -5810), this.g === Oo) return !(-3901 + 1 * 5090 + -1189);
  if (this.g = Oo, this.f |= 1 * -3752 + -9944 + 13697, this.i > 0 && !A0(this)) return this.f &= -(650 + 1 * 2823 + -3471), !(-1975 + -165 * -13 + -17 * 10);
  var o = K;
  try {
    e0(this), K = this;
    var g = this.x();
    (-5236 + -127 * -61 + -5 * 499 & this.f || this.v !== g || -2 * -1006 + -1 * 3273 + -1261 * -1 === this.i) && (this.v = g, this.f &= -(6250 + -461 * 11 + -1 * 1162), this.i++);
  } catch (t) {
    this.v = t, this.f |= 10 * -341 + -1 * 5743 + 9169, this.i++;
  }
  return K = o, t0(this), this.f &= -(13505 + 13503 * -1), !(-8487 + -8487 * -1);
}, Ue.prototype.S = function(o) {
  if (void (-53 * -3 + 253 + -412) === this.t) {
    this.f |= -213 * -7 + -3160 + 11 * 155;
    for (var g = this.s; void (3312 + -368 * 9) !== g; g = g.n) g.S.S(g);
  }
  CA.prototype.S.call(this, o);
}, Ue.prototype.U = function(o) {
  if (this.t !== void 0 && (CA.prototype.U.call(this, o), void (-85 * -93 + 8862 + 729 * -23) === this.t)) {
    this.f &= -(-9395 + 4441 * -1 + 23 * 603);
    for (var g = this.s; void (2741 * -1 + -23 * 395 + -657 * -18) !== g; g = g.n) g.S.U(g);
  }
}, Ue.prototype.N = function() {
  if (!(557 + 14 * -5 + 1 * -485 & this.f)) {
    this.f |= 1128 * -1 + -55 * -81 + -3321;
    for (var o = this.t; void (-6242 + 3121 * 2) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(Ue.prototype, "value", { get: function() {
  if (3 * -662 + 5169 + -1591 * 2 & this.f) throw new Error("Cycle detected");
  var o = Xa(this);
  if (this.h(), void (-13 * 733 + -9460 + 18989) !== o && (o.i = this.i), -1 * -9715 + -2667 + -6 * 1172 & this.f) throw this.v;
  return this.v;
} });
function pQ(o) {
  return new Ue(o);
}
function o0(o) {
  var g = o.u;
  if (o.u = void (7391 + -1 * -9283 + -16674), typeof g == "function") {
    Oe++;
    var t = K;
    K = void 0;
    try {
      g();
    } catch (e) {
      throw o.f &= -2, o.f |= 8, _i(o), e;
    } finally {
      K = t, Vi();
    }
  }
}
function _i(o) {
  for (var g = o.s; void (-1021 + -126 * 57 + 631 * 13) !== g; g = g.n) g.S.U(g);
  o.x = void (1183 + -7 * 169), o.s = void (-13 * 119 + -3126 * -3 + 191 * -41), o0(o);
}
function yQ(o) {
  if (K !== this) throw new Error("Out-of-order effect");
  t0(this), K = o, this.f &= -(5074 + 90 * -45 + -1022), 3391 + 795 * -1 + 2588 * -1 & this.f && _i(this), Vi();
}
function Et(o) {
  this.x = o, this.u = void (7223 * -1 + -5700 + 1 * 12923), this.s = void 0, this.o = void (4733 + 4733 * -1), this.f = 3754 * -1 + 1079 * -3 + 7023;
}
Et.prototype.c = function() {
  var o = this.S();
  try {
    if (5 * -1765 + -7205 + -22 * -729 & this.f || this.x === void 0) return;
    var g = this.x();
    typeof g == "function" && (this.u = g);
  } finally {
    o();
  }
}, Et.prototype.S = function() {
  if (-4271 * 2 + 8086 * 1 + -1 * -457 & this.f) throw new Error("Cycle detected");
  this.f |= 7899 + -6 * -1481 + -8392 * 2, this.f &= -(423 * 6 + 6895 * 1 + -9424), o0(this), e0(this), Oe++;
  var o = K;
  return K = this, yQ.bind(this, o);
}, Et.prototype.N = function() {
  !(46 * 29 + -2020 + 688 & this.f) && (this.f |= 14 * -313 + 66 * -45 + 7354, this.o = yt, yt = this);
}, Et.prototype.d = function() {
  this.f |= -12147 + 2431 * 5, -7769 + 3 * 49 + -2541 * -3 & this.f || _i(this);
};
function zi(o) {
  var g = new Et(o);
  try {
    g.c();
  } catch (t) {
    throw g.d(), t;
  }
  return g.d.bind(g);
}
var Rg;
function We(o, g) {
  k[o] = g.bind(null, k[o] || function() {
  });
}
function ao(o) {
  Rg && Rg(), Rg = o && o.S();
}
function g0(o) {
  var g = this, t = o.data, e = i0(t);
  e.value = t;
  var A = bA(function() {
    for (var i = g.__v; i = i.__; ) if (i.__c) {
      i.__c.__$f |= 7234 + 6 * -1205;
      break;
    }
    return g.__$u.c = function() {
      var n;
      !MI(A.peek()) && 4936 * -2 + -278 * 1 + 13 * 781 === ((n = g.base) == null ? void (13 * -563 + -2997 + 5158 * 2) : n.nodeType) ? g.base.data = A.peek() : (g.__$f |= 14655 + -431 * 34, g.setState({}));
    }, pQ(function() {
      var n = e.value.value;
      return n === 0 ? 1 * -7189 + -1312 + 8501 : !(1280 + -10 * 128) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
g0.displayName = "_st";
var ci = {};
ci.configurable = !(-9375 + 9375 * 1), ci.value = void (1 * -5228 + -4714 + 9942);
var xi = {};
xi.configurable = !(-1871 * -5 + -5 * 106 + -8825), xi.value = g0;
var Ei = {};
Ei.configurable = !(-710 * 1 + 5404 + -4694), Ei.get = function() {
  var o = {};
  return o.data = this, o;
};
var di = {};
di.configurable = !(1 * -1087 + -5867 * -1 + -4780), di.value = 1;
var rt = {};
rt.constructor = ci, rt.type = xi, rt.props = Ei, rt.__b = di, Object.defineProperties(CA.prototype, rt), We("__b", function(o, g) {
  if (typeof g.type == "string") {
    var t, e = g.props;
    for (var A in e) if (A !== "children") {
      var i = e[A];
      i instanceof CA && (t || (g.__np = t = {}), t[A] = i, e[A] = i.peek());
    }
  }
  o(g);
}), We("__r", function(o, g) {
  ao();
  var t, e = g.__c;
  e && (e.__$f &= -(3401 + 728 * -8 + 2425), (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var i;
    return zi(function() {
      i = this;
    }), i.c = function() {
      e.__$f |= -29 * 316 + -5170 + 1 * 14335, e.setState({});
    }, i;
  }())), ao(t), o(g);
}), We("__e", function(o, g, t, e) {
  ao(), o(g, t, e);
}), We("diffed", function(o, g) {
  ao();
  var t;
  if (typeof g.type == "string" && (t = g.__e)) {
    var e = g.__np, A = g.props;
    if (e) {
      var i = t.U;
      if (i) for (var n in i) {
        var I = i[n];
        void (-987 * 2 + 2 * -3650 + -4637 * -2) !== I && !(n in e) && (I.d(), i[n] = void (4845 + -41 * -197 + -12922));
      }
      else t.U = i = {};
      for (var a in e) {
        var r = i[a], Q = e[a];
        void (22 * 203 + -7167 + -37 * -73) === r ? (r = DQ(t, a, Q, A), i[a] = r) : r.o(Q, A);
      }
    }
  }
  o(g);
});
function DQ(o, g, t, e) {
  var A = g in o && o.ownerSVGElement === void 0, i = $a(t);
  return { o: function(n, I) {
    i.value = n, e = I;
  }, d: zi(function() {
    var n = i.value.value;
    e[g] !== n && (e[g] = n, A ? o[g] = n : n ? o.setAttribute(g, n) : o.removeAttribute(g));
  }) };
}
We("unmount", function(o, g) {
  if (typeof g.type == "string") {
    var t = g.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void 0;
        for (var A in e) {
          var i = e[A];
          i && i.d();
        }
      }
    }
  } else {
    var n = g.__c;
    if (n) {
      var I = n.__$u;
      I && (n.__$u = void 0, I.d());
    }
  }
  o(g);
}), We("__h", function(o, g, t, e) {
  (e < 3 || 2 * 3989 + -53 * 37 + -6008 === e) && (g.__$f |= 14 * -225 + 1 * 7837 + -5 * 937), o(g, t, e);
}), vA.prototype.shouldComponentUpdate = function(o, g) {
  var t = this.__$u;
  if (!(t && void (-11 * 419 + 798 * -8 + 10993 * 1) !== t.s || 4843 + -1613 * 3 & this.__$f)) return !(7268 + -1 * -4820 + -12088);
  if (-178 * -23 + 6040 + 307 * -33 & this.__$f) return !(-2 * -4457 + -1182 + -7732);
  for (var e in g) return !(570 * 12 + 2 * -3761 + 682);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(-3221 + -227 * 10 + 5491);
  for (var i in this.props) if (!(i in o)) return !(2741 * -3 + -1531 * 5 + 15878 * 1);
  return !(-6024 + -6121 * -1 + 12 * -8);
};
function i0(o) {
  return bA(function() {
    return $a(o);
  }, []);
}
const Ho = $e(void 0);
Ho.displayName = "CameraServiceContext";
function wQ() {
  const o = Qe(Ho);
  if (o === void 0)
    throw new Error(`${Ho.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function n0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Mg() {
  return (await n0()).filter((g) => g.kind === "videoinput");
}
function vg(o) {
  o.getTracks().forEach((t) => t.stop());
}
function iI(o) {
  return o.getVideoTracks()[-7004 + 1 * 6947 + 3 * 19];
}
const Do = {};
Do.width = 1920, Do.height = 1080, Do.facingMode = ji.FRONT;
const mQ = Do;
var he, He, WA;
class I0 {
  constructor({ defaultVideoConstrains: g = mQ, minCameraShorterSide: t = JB } = {}) {
    Y(this, he);
    Y(this, He, []);
    Y(this, WA, null);
    const e = {};
    e.defaultVideoConstrains = g, e.minCameraShorterSide = t, L(this, he, e);
  }
  get availableCameraProperties() {
    return y(this, He);
  }
  get mediaStream() {
    return y(this, WA);
  }
  get videoTrack() {
    if (y(this, WA)) return iI(y(this, WA));
  }
  get isCameraActive() {
    var g;
    return !!((g = y(this, WA)) != null && g.active);
  }
  static async requestPermission() {
    const g = {};
    g.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(g);
    vg(t);
  }
  async open(g = {}) {
    eI() && await ri(5 * -205 + -1 * -5273 + -6 * 633), L(this, WA, await navigator.mediaDevices.getUserMedia(g)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const g = await Mg();
    if (g.length <= -17 * 103 + 337 * -17 + 7481) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = g.findIndex((I) => I.deviceId === e.deviceId), i = g[A + (-309 * -23 + -7 * -793 + 3 * -4219)] ?? g[-257 * -5 + -8796 + 7511], n = this.getConstraints(t, i);
    this.close(), await this.open(n);
  }
  close() {
    y(this, WA) && (vg(y(this, WA)), L(this, WA, null));
  }
  async getProperties() {
    const g = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = g;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = y(this, He), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const g = this.getSettings();
    if (!g.width) throw new W("Video width is undefined");
    if (!g.height) throw new W("Video height is undefined");
    const t = {};
    return t.width = g.width, t.height = g.height, t;
  }
  async getDeviceName() {
    const g = this.getSettings(), t = await n0(), e = t.find((A) => A.deviceId === g.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(g) {
    return g === ji.FRONT ? void (31 * -90 + -3391 + -7 * -883) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Oa() ? (await Mg()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (3672 + -43 * -227 + -13433);
  }
  async collectAvailableCamerasInfo() {
    const g = await Mg();
    for (const t of g) {
      eI() && await ri(1 * -2309 + 1 * -1154 + -559 * -7);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const i = await navigator.mediaDevices.getUserMedia(A), n = iI(i);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const Q = r;
        y(this, He).push(Q), vg(i);
      } catch (e) {
        e instanceof Error && W.logError(e);
      }
    }
  }
  getConstraints(g, t) {
    const e = { ...y(this, he).defaultVideoConstrains, ...g };
    e.deviceId = t ? { exact: t.deviceId } : void (4 * 1793 + 62 * -137 + 1 * 1322);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const g = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(g != null && g.height) || !(g != null && g.width))
      throw this.close(), new W("Could not init camera settings");
    if (typeof y(this, he).minCameraShorterSide != "number") return;
    if (Math.min(g == null ? void 0 : g.width, g == null ? void 0 : g.height) < y(this, he).minCameraShorterSide)
      throw this.close(), new W("Could not init video because of low camera resolution: " + g.width + "x" + g.height + ".");
  }
}
he = new WeakMap(), He = new WeakMap(), WA = new WeakMap();
var Nt;
class bQ {
  constructor(g, t) {
    Y(this, Nt, !1);
    this.videoHandler = g, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    y(this, Nt) || (L(this, Nt, !0), await I0.requestPermission());
  }
  async startVideoStream(g = {}) {
    await this.requestCameraPermission(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(g.facingMode), e = this.cameraHandler.getConstraints(g, t);
    await this.cameraHandler.open(e), PB() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const g = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(g != null && g.width)) throw new W("Cant take photo - video width is undefined");
    if (!(g != null && g.height)) throw new W("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = g.width, t.height = g.height;
    const e = t.getContext("2d");
    if (!e) throw new W("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -7987 + -7987 * -1, 7864 + -1 * -7457 + -15321), { image: t, timestamp: Date.now() };
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
Nt = new WeakMap();
var zA;
class GQ {
  constructor(g) {
    Y(this, zA);
    L(this, zA, g);
  }
  get videoElement() {
    return y(this, zA);
  }
  async play(g) {
    y(this, zA).srcObject = g, await y(this, zA).play();
  }
  stop() {
    y(this, zA).srcObject = null;
  }
  hasSrcObject() {
    return !!y(this, zA).srcObject;
  }
}
zA = new WeakMap();
function kQ(o) {
  const g = kA(null), [t, e] = hA(), [A, i] = hA(), { handleError: n, setIsCameraReady: I } = Se(), a = te((Q) => {
    i((C) => jB(Q, C));
  }, []);
  q(() => {
    if (!g.current) {
      n(new W("Something went wrong during video initialization"));
      return;
    }
    const Q = new GQ(g.current), C = new I0(), x = new bQ(Q, C);
    return (async () => {
      try {
        const E = {};
        E.facingMode = o, await x.startVideoStream(E);
      } catch (E) {
        if (E instanceof Error) {
          n(W.fromCameraError(E));
          return;
        }
      }
      e(x), I(!0), a(x.getCameraResolution());
    })(), () => {
      x == null || x.stopStreaming(), I(!1), e(void 0);
    };
  }, [o, n, I, g, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = g, r;
}
function NQ({ cameraFacing: o, children: g }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: i } = kQ(o), n = bA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: i
    }),
    [e, t, A, i]
  );
  return /* @__PURE__ */ p(Ho.Provider, { value: n, children: g });
}
const FQ = async () => WebAssembly.validate(new Uint8Array([3372 + 1 * -2436 + -9 * 104, -694 * 9 + -2827 * 1 + 9170, 1 * -6551 + 1 * -7039 + 13705, 7628 + -64 * -31 + -9503, -1366 + -1 * -1367, -8660 + 72 * -108 + 16436, 2 * 3367 + -2676 * -2 + -12086 * 1, 2443 * -4 + -64 * 81 + 14956, -10396 + 10397 * 1, 5, -7624 + -16 * -392 + -41 * -33, -1 * -8444 + 3964 + -12312, 1185 * -5 + 13 * 83 + 4846, 3452 + -5 * 635 + -138 * 2, -3102 + 582 * -17 + 13119 * 1, -41 * 53 + 2290 + -114, -3312 + 849 * -2 + -716 * -7, -15 * -628 + 219 * -1 + -25 * 368, 2144 * -2 + 2498 + 358 * 5, 10, 10, 834 + 7 * -119, 938 * -5 + 7425 + -2727, -1 * 6581 + -8139 + 14720, 1 * 6845 + -2682 * -1 + -4731 * 2, 8074 + 59 * -123 + -817, 7 * -435 + -5921 * 1 + 9219, 8572 + -7 * 643 + -2028 * 2, 9224 + 2 * -2956 + -437 * 7, 98, -4769 + -4885 * 1 + 9665 * 1]));
function SQ() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(16);
}
function RQ() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const g = SQ();
  return sessionStorage.setItem("dot-user-id", g), g;
}
function MQ(o, g) {
  return g ? g === "user" ? "Front Camera" : "Back Camera" : o;
}
const li = {};
li.label = ">1m", li.time = 60;
const ui = {};
ui.label = ">45", ui.time = 45;
const hi = {};
hi.label = ">30", hi.time = 30;
function vQ(o, g = [li, ui, hi]) {
  const t = g.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (o > e.time) return e.label;
  return "" + o;
}
const LQ = (o) => Math.round(o / 500) * 500 / (-1592 + 2 * -4643 + 2 * 5939), nI = (o) => o ? o <= -9765 + -2 * -2621 + 156 * 29 ? Math.round(o * (3 * 1063 + 2643 + -5812)) / 20 : Math.round(o / (-27 * 195 + -7098 + 12413)) * (4 * 203 + 1823 * -5 + 8353) : 0, JQ = (o) => Math.round(o * (643 * -7 + 3006 + -499 * -3)) / (355 + -1 * 353);
function UQ(o) {
  return o !== uA.RUNNING ? Jo.VISIBLE : Jo.VISIBLE_WITH_MASK;
}
async function YQ() {
  return await FQ() ? oI.SIMD : oI.NO_SIMD;
}
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, a0 = {}, II = {}, WQ = OQ;
function OQ(o, g) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, i = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(n, I) {
    t[e] = function(a) {
      if (i)
        if (i = !1, a)
          I(a);
        else {
          for (var r = new Array(arguments.length - 1), Q = 0; Q < r.length; )
            r[Q++] = arguments[Q];
          n.apply(null, r);
        }
    };
    try {
      o.apply(g || null, t);
    } catch (a) {
      i && (i = !1, I(a));
    }
  });
}
var r0 = {};
(function(o) {
  var g = o;
  g.length = function(n) {
    var I = n.length;
    if (!I)
      return 0;
    for (var a = 0; --I % 4 > 1 && n.charAt(I) === "="; )
      ++a;
    return Math.ceil(n.length * 3) / 4 - a;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  g.encode = function(n, I, a) {
    for (var r = null, Q = [], C = 0, x = 0, c; I < a; ) {
      var E = n[I++];
      switch (x) {
        case 0:
          Q[C++] = t[E >> 2], c = (E & 3) << 4, x = 1;
          break;
        case 1:
          Q[C++] = t[c | E >> 4], c = (E & 15) << 2, x = 2;
          break;
        case 2:
          Q[C++] = t[c | E >> 6], Q[C++] = t[E & 63], x = 0;
          break;
      }
      C > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, Q)), C = 0);
    }
    return x && (Q[C++] = t[c], Q[C++] = 61, x === 1 && (Q[C++] = 61)), r ? (C && r.push(String.fromCharCode.apply(String, Q.slice(0, C))), r.join("")) : String.fromCharCode.apply(String, Q.slice(0, C));
  };
  var i = "invalid encoding";
  g.decode = function(n, I, a) {
    for (var r = a, Q = 0, C, x = 0; x < n.length; ) {
      var c = n.charCodeAt(x++);
      if (c === 61 && Q > 1)
        break;
      if ((c = e[c]) === void 0)
        throw Error(i);
      switch (Q) {
        case 0:
          C = c, Q = 1;
          break;
        case 1:
          I[a++] = C << 2 | (c & 48) >> 4, C = c, Q = 2;
          break;
        case 2:
          I[a++] = (C & 15) << 4 | (c & 60) >> 2, C = c, Q = 3;
          break;
        case 3:
          I[a++] = (C & 3) << 6 | c, Q = 0;
          break;
      }
    }
    if (Q === 1)
      throw Error(i);
    return a - r;
  }, g.test = function(n) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n);
  };
})(r0);
var HQ = Eg;
function Eg() {
  this._listeners = {};
}
Eg.prototype.on = function(o, g, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: g,
    ctx: t || this
  }), this;
};
Eg.prototype.off = function(o, g) {
  if (o === void 0)
    this._listeners = {};
  else if (g === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === g ? t.splice(e, 1) : ++e;
  return this;
};
Eg.prototype.emit = function(o) {
  var g = this._listeners[o];
  if (g) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < g.length; )
      g[e].fn.apply(g[e++].ctx, t);
  }
  return this;
};
var KQ = aI(aI);
function aI(o) {
  return typeof Float32Array < "u" ? function() {
    var g = new Float32Array([-0]), t = new Uint8Array(g.buffer), e = t[3] === 128;
    function A(a, r, Q) {
      g[0] = a, r[Q] = t[0], r[Q + 1] = t[1], r[Q + 2] = t[2], r[Q + 3] = t[3];
    }
    function i(a, r, Q) {
      g[0] = a, r[Q] = t[3], r[Q + 1] = t[2], r[Q + 2] = t[1], r[Q + 3] = t[0];
    }
    o.writeFloatLE = e ? A : i, o.writeFloatBE = e ? i : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], g[0];
    }
    function I(a, r) {
      return t[3] = a[r], t[2] = a[r + 1], t[1] = a[r + 2], t[0] = a[r + 3], g[0];
    }
    o.readFloatLE = e ? n : I, o.readFloatBE = e ? I : n;
  }() : function() {
    function g(e, A, i, n) {
      var I = A < 0 ? 1 : 0;
      if (I && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), i, n);
      else if (isNaN(A))
        e(2143289344, i, n);
      else if (A > 34028234663852886e22)
        e((I << 31 | 2139095040) >>> 0, i, n);
      else if (A < 11754943508222875e-54)
        e((I << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, i, n);
      else {
        var a = Math.floor(Math.log(A) / Math.LN2), r = Math.round(A * Math.pow(2, -a) * 8388608) & 8388607;
        e((I << 31 | a + 127 << 23 | r) >>> 0, i, n);
      }
    }
    o.writeFloatLE = g.bind(null, rI), o.writeFloatBE = g.bind(null, CI);
    function t(e, A, i) {
      var n = e(A, i), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    o.readFloatLE = t.bind(null, BI), o.readFloatBE = t.bind(null, QI);
  }(), typeof Float64Array < "u" ? function() {
    var g = new Float64Array([-0]), t = new Uint8Array(g.buffer), e = t[7] === 128;
    function A(a, r, Q) {
      g[0] = a, r[Q] = t[0], r[Q + 1] = t[1], r[Q + 2] = t[2], r[Q + 3] = t[3], r[Q + 4] = t[4], r[Q + 5] = t[5], r[Q + 6] = t[6], r[Q + 7] = t[7];
    }
    function i(a, r, Q) {
      g[0] = a, r[Q] = t[7], r[Q + 1] = t[6], r[Q + 2] = t[5], r[Q + 3] = t[4], r[Q + 4] = t[3], r[Q + 5] = t[2], r[Q + 6] = t[1], r[Q + 7] = t[0];
    }
    o.writeDoubleLE = e ? A : i, o.writeDoubleBE = e ? i : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], t[4] = a[r + 4], t[5] = a[r + 5], t[6] = a[r + 6], t[7] = a[r + 7], g[0];
    }
    function I(a, r) {
      return t[7] = a[r], t[6] = a[r + 1], t[5] = a[r + 2], t[4] = a[r + 3], t[3] = a[r + 4], t[2] = a[r + 5], t[1] = a[r + 6], t[0] = a[r + 7], g[0];
    }
    o.readDoubleLE = e ? n : I, o.readDoubleBE = e ? I : n;
  }() : function() {
    function g(e, A, i, n, I, a) {
      var r = n < 0 ? 1 : 0;
      if (r && (n = -n), n === 0)
        e(0, I, a + A), e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), I, a + i);
      else if (isNaN(n))
        e(0, I, a + A), e(2146959360, I, a + i);
      else if (n > 17976931348623157e292)
        e(0, I, a + A), e((r << 31 | 2146435072) >>> 0, I, a + i);
      else {
        var Q;
        if (n < 22250738585072014e-324)
          Q = n / 5e-324, e(Q >>> 0, I, a + A), e((r << 31 | Q / 4294967296) >>> 0, I, a + i);
        else {
          var C = Math.floor(Math.log(n) / Math.LN2);
          C === 1024 && (C = 1023), Q = n * Math.pow(2, -C), e(Q * 4503599627370496 >>> 0, I, a + A), e((r << 31 | C + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, I, a + i);
        }
      }
    }
    o.writeDoubleLE = g.bind(null, rI, 0, 4), o.writeDoubleBE = g.bind(null, CI, 4, 0);
    function t(e, A, i, n, I) {
      var a = e(n, I + A), r = e(n, I + i), Q = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, x = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? x ? NaN : Q * (1 / 0) : C === 0 ? Q * 5e-324 * x : Q * Math.pow(2, C - 1075) * (x + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, BI, 0, 4), o.readDoubleBE = t.bind(null, QI, 4, 0);
  }(), o;
}
function rI(o, g, t) {
  g[t] = o & 255, g[t + 1] = o >>> 8 & 255, g[t + 2] = o >>> 16 & 255, g[t + 3] = o >>> 24;
}
function CI(o, g, t) {
  g[t] = o >>> 24, g[t + 1] = o >>> 16 & 255, g[t + 2] = o >>> 8 & 255, g[t + 3] = o & 255;
}
function BI(o, g) {
  return (o[g] | o[g + 1] << 8 | o[g + 2] << 16 | o[g + 3] << 24) >>> 0;
}
function QI(o, g) {
  return (o[g] << 24 | o[g + 1] << 16 | o[g + 2] << 8 | o[g + 3]) >>> 0;
}
function sI(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var TQ = PQ;
function PQ(o) {
  try {
    if (typeof sI != "function")
      return null;
    var g = sI(o);
    return g && (g.length || Object.keys(g).length) ? g : null;
  } catch {
    return null;
  }
}
var C0 = {};
(function(o) {
  var g = o;
  g.length = function(t) {
    for (var e = 0, A = 0, i = 0; i < t.length; ++i)
      A = t.charCodeAt(i), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(i + 1) & 64512) === 56320 ? (++i, e += 4) : e += 3;
    return e;
  }, g.read = function(t, e, A) {
    var i = A - e;
    if (i < 1)
      return "";
    for (var n = null, I = [], a = 0, r; e < A; )
      r = t[e++], r < 128 ? I[a++] = r : r > 191 && r < 224 ? I[a++] = (r & 31) << 6 | t[e++] & 63 : r > 239 && r < 365 ? (r = ((r & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, I[a++] = 55296 + (r >> 10), I[a++] = 56320 + (r & 1023)) : I[a++] = (r & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, I)), a = 0);
    return n ? (a && n.push(String.fromCharCode.apply(String, I.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, I.slice(0, a));
  }, g.write = function(t, e, A) {
    for (var i = A, n, I, a = 0; a < t.length; ++a)
      n = t.charCodeAt(a), n < 128 ? e[A++] = n : n < 2048 ? (e[A++] = n >> 6 | 192, e[A++] = n & 63 | 128) : (n & 64512) === 55296 && ((I = t.charCodeAt(a + 1)) & 64512) === 56320 ? (n = 65536 + ((n & 1023) << 10) + (I & 1023), ++a, e[A++] = n >> 18 | 240, e[A++] = n >> 12 & 63 | 128, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128) : (e[A++] = n >> 12 | 224, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128);
    return A - i;
  };
})(C0);
var qQ = jQ;
function jQ(o, g, t) {
  var e = t || 8192, A = e >>> 1, i = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return o(I);
    n + I > e && (i = o(e), n = 0);
    var a = g.call(i, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var Lg, cI;
function ZQ() {
  if (cI)
    return Lg;
  cI = 1, Lg = g;
  var o = Re();
  function g(i, n) {
    this.lo = i >>> 0, this.hi = n >>> 0;
  }
  var t = g.zero = new g(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = g.zeroHash = "\0\0\0\0\0\0\0\0";
  g.fromNumber = function(i) {
    if (i === 0)
      return t;
    var n = i < 0;
    n && (i = -i);
    var I = i >>> 0, a = (i - I) / 4294967296 >>> 0;
    return n && (a = ~a >>> 0, I = ~I >>> 0, ++I > 4294967295 && (I = 0, ++a > 4294967295 && (a = 0))), new g(I, a);
  }, g.from = function(i) {
    if (typeof i == "number")
      return g.fromNumber(i);
    if (o.isString(i))
      if (o.Long)
        i = o.Long.fromString(i);
      else
        return g.fromNumber(parseInt(i, 10));
    return i.low || i.high ? new g(i.low >>> 0, i.high >>> 0) : t;
  }, g.prototype.toNumber = function(i) {
    if (!i && this.hi >>> 31) {
      var n = ~this.lo + 1 >>> 0, I = ~this.hi >>> 0;
      return n || (I = I + 1 >>> 0), -(n + I * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, g.prototype.toLong = function(i) {
    return o.Long ? new o.Long(this.lo | 0, this.hi | 0, !!i) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!i };
  };
  var A = String.prototype.charCodeAt;
  return g.fromHash = function(i) {
    return i === e ? t : new g(
      (A.call(i, 0) | A.call(i, 1) << 8 | A.call(i, 2) << 16 | A.call(i, 3) << 24) >>> 0,
      (A.call(i, 4) | A.call(i, 5) << 8 | A.call(i, 6) << 16 | A.call(i, 7) << 24) >>> 0
    );
  }, g.prototype.toHash = function() {
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
  }, g.prototype.zzEncode = function() {
    var i = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ i) >>> 0, this.lo = (this.lo << 1 ^ i) >>> 0, this;
  }, g.prototype.zzDecode = function() {
    var i = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ i) >>> 0, this.hi = (this.hi >>> 1 ^ i) >>> 0, this;
  }, g.prototype.length = function() {
    var i = this.lo, n = (this.lo >>> 28 | this.hi << 4) >>> 0, I = this.hi >>> 24;
    return I === 0 ? n === 0 ? i < 16384 ? i < 128 ? 1 : 2 : i < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : I < 128 ? 9 : 10;
  }, Lg;
}
var xI;
function Re() {
  return xI || (xI = 1, function(o) {
    var g = o;
    g.asPromise = WQ, g.base64 = r0, g.EventEmitter = HQ, g.float = KQ, g.inquire = TQ, g.utf8 = C0, g.pool = qQ, g.LongBits = ZQ(), g.isNode = !!(typeof ce < "u" && ce && ce.process && ce.process.versions && ce.process.versions.node), g.global = g.isNode && ce || typeof window < "u" && window || typeof self < "u" && self || ce, g.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), g.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), g.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, g.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, g.isObject = function(A) {
      return A && typeof A == "object";
    }, g.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    g.isSet = function(A, i) {
      var n = A[i];
      return n != null && A.hasOwnProperty(i) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
    }, g.Buffer = function() {
      try {
        var A = g.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), g._Buffer_from = null, g._Buffer_allocUnsafe = null, g.newBuffer = function(A) {
      return typeof A == "number" ? g.Buffer ? g._Buffer_allocUnsafe(A) : new g.Array(A) : g.Buffer ? g._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, g.Array = typeof Uint8Array < "u" ? Uint8Array : Array, g.Long = /* istanbul ignore next */
    g.global.dcodeIO && /* istanbul ignore next */
    g.global.dcodeIO.Long || /* istanbul ignore next */
    g.global.Long || g.inquire("long"), g.key2Re = /^true|false|0|1$/, g.key32Re = /^-?(?:0|[1-9][0-9]*)$/, g.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, g.longToHash = function(A) {
      return A ? g.LongBits.from(A).toHash() : g.LongBits.zeroHash;
    }, g.longFromHash = function(A, i) {
      var n = g.LongBits.fromHash(A);
      return g.Long ? g.Long.fromBits(n.lo, n.hi, i) : n.toNumber(!!i);
    };
    function t(A, i, n) {
      for (var I = Object.keys(i), a = 0; a < I.length; ++a)
        (A[I[a]] === void 0 || !n) && (A[I[a]] = i[I[a]]);
      return A;
    }
    g.merge = t, g.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function i(n, I) {
        if (!(this instanceof i))
          return new i(n, I);
        Object.defineProperty(this, "message", { get: function() {
          return n;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, i) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), I && t(this, I);
      }
      return i.prototype = Object.create(Error.prototype, {
        constructor: {
          value: i,
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
      }), i;
    }
    g.newError = e, g.ProtocolError = e("ProtocolError"), g.oneOfGetter = function(A) {
      for (var i = {}, n = 0; n < A.length; ++n)
        i[A[n]] = 1;
      return function() {
        for (var I = Object.keys(this), a = I.length - 1; a > -1; --a)
          if (i[I[a]] === 1 && this[I[a]] !== void 0 && this[I[a]] !== null)
            return I[a];
      };
    }, g.oneOfSetter = function(A) {
      return function(i) {
        for (var n = 0; n < A.length; ++n)
          A[n] !== i && delete this[A[n]];
      };
    }, g.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, g._configure = function() {
      var A = g.Buffer;
      if (!A) {
        g._Buffer_from = g._Buffer_allocUnsafe = null;
        return;
      }
      g._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(i, n) {
        return new A(i, n);
      }, g._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(i) {
        return new A(i);
      };
    };
  }(II)), II;
}
var B0 = J, LA = Re(), fi, dg = LA.LongBits, EI = LA.base64, dI = LA.utf8;
function _t(o, g, t) {
  this.fn = o, this.len = g, this.next = void 0, this.val = t;
}
function Xi() {
}
function VQ(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function J() {
  this.len = 0, this.head = new _t(Xi, 0, 0), this.tail = this.head, this.states = null;
}
var Q0 = function() {
  return LA.Buffer ? function() {
    return (J.create = function() {
      return new fi();
    })();
  } : function() {
    return new J();
  };
};
J.create = Q0();
J.alloc = function(o) {
  return new LA.Array(o);
};
LA.Array !== Array && (J.alloc = LA.pool(J.alloc, LA.Array.prototype.subarray));
J.prototype._push = function(o, g, t) {
  return this.tail = this.tail.next = new _t(o, g, t), this.len += g, this;
};
function $i(o, g, t) {
  g[t] = o & 255;
}
function _Q(o, g, t) {
  for (; o > 127; )
    g[t++] = o & 127 | 128, o >>>= 7;
  g[t] = o;
}
function An(o, g) {
  this.len = o, this.next = void 0, this.val = g;
}
An.prototype = Object.create(_t.prototype);
An.prototype.fn = _Q;
J.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new An(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
J.prototype.int32 = function(o) {
  return o < 0 ? this._push(en, 10, dg.fromNumber(o)) : this.uint32(o);
};
J.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function en(o, g, t) {
  for (; o.hi; )
    g[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    g[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  g[t++] = o.lo;
}
J.prototype.uint64 = function(o) {
  var g = dg.from(o);
  return this._push(en, g.length(), g);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(o) {
  var g = dg.from(o).zzEncode();
  return this._push(en, g.length(), g);
};
J.prototype.bool = function(o) {
  return this._push($i, 1, o ? 1 : 0);
};
function pi(o, g, t) {
  g[t] = o & 255, g[t + 1] = o >>> 8 & 255, g[t + 2] = o >>> 16 & 255, g[t + 3] = o >>> 24;
}
J.prototype.fixed32 = function(o) {
  return this._push(pi, 4, o >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(o) {
  var g = dg.from(o);
  return this._push(pi, 4, g.lo)._push(pi, 4, g.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(o) {
  return this._push(LA.float.writeFloatLE, 4, o);
};
J.prototype.double = function(o) {
  return this._push(LA.float.writeDoubleLE, 8, o);
};
var zQ = LA.Array.prototype.set ? function(o, g, t) {
  g.set(o, t);
} : function(o, g, t) {
  for (var e = 0; e < o.length; ++e)
    g[t + e] = o[e];
};
J.prototype.bytes = function(o) {
  var g = o.length >>> 0;
  if (!g)
    return this._push($i, 1, 0);
  if (LA.isString(o)) {
    var t = J.alloc(g = EI.length(o));
    EI.decode(o, t, 0), o = t;
  }
  return this.uint32(g)._push(zQ, g, o);
};
J.prototype.string = function(o) {
  var g = dI.length(o);
  return g ? this.uint32(g)._push(dI.write, g, o) : this._push($i, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new VQ(this), this.head = this.tail = new _t(Xi, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new _t(Xi, 0, 0), this.len = 0), this;
};
J.prototype.ldelim = function() {
  var o = this.head, g = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = g, this.len += t), this;
};
J.prototype.finish = function() {
  for (var o = this.head.next, g = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, g, t), t += o.len, o = o.next;
  return g;
};
J._configure = function(o) {
  fi = o, J.create = Q0(), fi._configure();
};
var XQ = jA, s0 = B0;
(jA.prototype = Object.create(s0.prototype)).constructor = jA;
var re = Re();
function jA() {
  s0.call(this);
}
jA._configure = function() {
  jA.alloc = re._Buffer_allocUnsafe, jA.writeBytesBuffer = re.Buffer && re.Buffer.prototype instanceof Uint8Array && re.Buffer.prototype.set.name === "set" ? function(o, g, t) {
    g.set(o, t);
  } : function(o, g, t) {
    if (o.copy)
      o.copy(g, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        g[t++] = o[e++];
  };
};
jA.prototype.bytes = function(o) {
  re.isString(o) && (o = re._Buffer_from(o, "base64"));
  var g = o.length >>> 0;
  return this.uint32(g), g && this._push(jA.writeBytesBuffer, g, o), this;
};
function $Q(o, g, t) {
  o.length < 40 ? re.utf8.write(o, g, t) : g.utf8Write ? g.utf8Write(o, t) : g.write(o, t);
}
jA.prototype.string = function(o) {
  var g = re.Buffer.byteLength(o);
  return this.uint32(g), g && this._push($Q, g, o), this;
};
jA._configure();
var c0 = X, ZA = Re(), yi, x0 = ZA.LongBits, As = ZA.utf8;
function HA(o, g) {
  return RangeError("index out of range: " + o.pos + " + " + (g || 1) + " > " + o.len);
}
function X(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var lI = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new X(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new X(o);
  throw Error("illegal buffer");
}, E0 = function() {
  return ZA.Buffer ? function(o) {
    return (X.create = function(g) {
      return ZA.Buffer.isBuffer(g) ? new yi(g) : lI(g);
    })(o);
  } : lI;
};
X.create = E0();
X.prototype._slice = ZA.Array.prototype.subarray || /* istanbul ignore next */
ZA.Array.prototype.slice;
X.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, HA(this, 10);
    return o;
  };
}();
X.prototype.int32 = function() {
  return this.uint32() | 0;
};
X.prototype.sint32 = function() {
  var o = this.uint32();
  return o >>> 1 ^ -(o & 1) | 0;
};
function Jg() {
  var o = new x0(0, 0), g = 0;
  if (this.len - this.pos > 4) {
    for (; g < 4; ++g)
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << g * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    if (o.lo = (o.lo | (this.buf[this.pos] & 127) << 28) >>> 0, o.hi = (o.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return o;
    g = 0;
  } else {
    for (; g < 3; ++g) {
      if (this.pos >= this.len)
        throw HA(this);
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << g * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
    return o.lo = (o.lo | (this.buf[this.pos++] & 127) << g * 7) >>> 0, o;
  }
  if (this.len - this.pos > 4) {
    for (; g < 5; ++g)
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << g * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
  } else
    for (; g < 5; ++g) {
      if (this.pos >= this.len)
        throw HA(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << g * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
X.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Ko(o, g) {
  return (o[g - 4] | o[g - 3] << 8 | o[g - 2] << 16 | o[g - 1] << 24) >>> 0;
}
X.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  return Ko(this.buf, this.pos += 4);
};
X.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  return Ko(this.buf, this.pos += 4) | 0;
};
function uI() {
  if (this.pos + 8 > this.len)
    throw HA(this, 8);
  return new x0(Ko(this.buf, this.pos += 4), Ko(this.buf, this.pos += 4));
}
X.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  var o = ZA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
X.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw HA(this, 4);
  var o = ZA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
X.prototype.bytes = function() {
  var o = this.uint32(), g = this.pos, t = this.pos + o;
  if (t > this.len)
    throw HA(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(g, t) : g === t ? new this.buf.constructor(0) : this._slice.call(this.buf, g, t);
};
X.prototype.string = function() {
  var o = this.bytes();
  return As.read(o, 0, o.length);
};
X.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw HA(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw HA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
X.prototype.skipType = function(o) {
  switch (o) {
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
      for (; (o = this.uint32() & 7) !== 4; )
        this.skipType(o);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + o + " at offset " + this.pos);
  }
  return this;
};
X._configure = function(o) {
  yi = o, X.create = E0(), yi._configure();
  var g = ZA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ZA.merge(X.prototype, {
    int64: function() {
      return Jg.call(this)[g](!1);
    },
    uint64: function() {
      return Jg.call(this)[g](!0);
    },
    sint64: function() {
      return Jg.call(this).zzDecode()[g](!1);
    },
    fixed64: function() {
      return uI.call(this)[g](!0);
    },
    sfixed64: function() {
      return uI.call(this)[g](!1);
    }
  });
};
var es = Fe, d0 = c0;
(Fe.prototype = Object.create(d0.prototype)).constructor = Fe;
var hI = Re();
function Fe(o) {
  d0.call(this, o);
}
Fe._configure = function() {
  hI.Buffer && (Fe.prototype._slice = hI.Buffer.prototype.slice);
};
Fe.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
Fe._configure();
var l0 = {}, ts = Gt, tn = Re();
(Gt.prototype = Object.create(tn.EventEmitter.prototype)).constructor = Gt;
function Gt(o, g, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  tn.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!g, this.responseDelimited = !!t;
}
Gt.prototype.rpcCall = function o(g, t, e, A, i) {
  if (!A)
    throw TypeError("request must be specified");
  var n = this;
  if (!i)
    return tn.asPromise(o, n, g, t, e, A);
  if (!n.rpcImpl) {
    setTimeout(function() {
      i(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return n.rpcImpl(
      g,
      t[n.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(I, a) {
        if (I)
          return n.emit("error", I, g), i(I);
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
            return n.emit("error", r, g), i(r);
          }
        return n.emit("data", a, g), i(null, a);
      }
    );
  } catch (I) {
    n.emit("error", I, g), setTimeout(function() {
      i(I);
    }, 0);
    return;
  }
};
Gt.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var g = o;
  g.Service = ts;
})(l0);
var os = {};
(function(o) {
  var g = o;
  g.build = "minimal", g.Writer = B0, g.BufferWriter = XQ, g.Reader = c0, g.BufferReader = es, g.util = Re(), g.rpc = l0, g.roots = os, g.configure = t;
  function t() {
    g.util._configure(), g.Writer._configure(g.BufferWriter), g.Reader._configure(g.BufferReader);
  }
  t();
})(a0);
var S = a0;
const f = S.Reader, v = S.Writer, d = S.util, B = S.roots.default || (S.roots.default = {}), Xe = B.dot = (() => {
  const o = {};
  return o.Content = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.token = d.newBuffer([]), g.prototype.iv = d.newBuffer([]), g.prototype.schemaVersion = 0, g.prototype.bytes = d.newBuffer([]), g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.Content();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.token = t.bytes();
            break;
          }
          case 2: {
            i.iv = t.bytes();
            break;
          }
          case 3: {
            i.schemaVersion = t.int32();
            break;
          }
          case 4: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? d.base64.decode(t.token, e.token = d.newBuffer(d.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? d.base64.decode(t.iv, e.iv = d.newBuffer(d.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = d.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = d.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? d.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? d.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, g;
  }(), o.v4 = function() {
    const g = {};
    return g.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.images = d.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = v.create()), e.images != null && e.images.length)
          for (let i = 0; i < e.images.length; ++i)
            B.dot.Image.encode(e.images[i], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.images && n.images.length || (n.images = []), n.images.push(B.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
            let i = B.dot.Image.verify(e.images[A]);
            if (i)
              return "images." + i;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new B.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let i = 0; i < e.images.length; ++i) {
            if (typeof e.images[i] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[i] = B.dot.Image.fromObject(e.images[i]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        if ((A.arrays || A.defaults) && (i.images = []), A.defaults && (i.metadata = null), e.images && e.images.length) {
          i.images = [];
          for (let n = 0; n < e.images.length; ++n)
            i.images[n] = B.dot.Image.toObject(e.images[n], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), g.Metadata = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
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
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && B.dot.v4.WebMetadata.encode(A.web, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && B.dot.v4.AndroidMetadata.encode(A.android, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && B.dot.v4.IosMetadata.encode(A.ios, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Metadata();
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
              I.web = B.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.android = B.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.ios = B.dot.v4.IosMetadata.decode(A, A.uint32());
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
        let i = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (i._sessionToken = 1, !d.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !d.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          i.metadata = 1;
          {
            let n = B.dot.v4.WebMetadata.verify(A.web);
            if (n)
              return "web." + n;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let n = B.dot.v4.AndroidMetadata.verify(A.android);
            if (n)
              return "android." + n;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let n = B.dot.v4.IosMetadata.verify(A.ios);
            if (n)
              return "ios." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Metadata)
          return A;
        let i = new B.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              i.platform = A.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            i.platform = 0;
            break;
          case "ANDROID":
          case 1:
            i.platform = 1;
            break;
          case "IOS":
          case 2:
            i.platform = 2;
            break;
        }
        if (A.sessionToken != null && (i.sessionToken = String(A.sessionToken)), A.componentVersion != null && (i.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          i.web = B.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          i.android = B.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          i.ios = B.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.platform = i.enums === String ? "WEB" : 0, n.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (n.platform = i.enums === String ? B.dot.Platform[A.platform] === void 0 ? A.platform : B.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (n.web = B.dot.v4.WebMetadata.toObject(A.web, i), i.oneofs && (n.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (n.android = B.dot.v4.AndroidMetadata.toObject(A.android, i), i.oneofs && (n.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (n.ios = B.dot.v4.IosMetadata.toObject(A.ios, i), i.oneofs && (n.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n.sessionToken = A.sessionToken, i.oneofs && (n._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (n.componentVersion = A.componentVersion), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), g.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.supportedAbis = d.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.dynamicCameraFrameProperties = d.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null;
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
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let n = 0; n < A.supportedAbis.length; ++n)
            i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[n]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let n = 0; n < A.digests.length; ++n)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[n]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I)
            i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n[I]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[n[I]], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.AndroidCamera.encode(A.camera, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && i.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.AndroidMetadata(), a, r;
        for (; A.pos < n; ) {
          let Q = A.uint32();
          switch (Q >>> 3) {
            case 1: {
              I.supportedAbis && I.supportedAbis.length || (I.supportedAbis = []), I.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              I.device = A.string();
              break;
            }
            case 6: {
              I.camera = B.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.dynamicCameraFrameProperties === d.emptyObject && (I.dynamicCameraFrameProperties = {});
              let C = A.uint32() + A.pos;
              for (a = "", r = null; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = B.dot.Int32List.decode(A, A.uint32());
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
              I.croppedYuv420Image = B.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(Q & 7);
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
          for (let i = 0; i < A.supportedAbis.length; ++i)
            if (!d.isString(A.supportedAbis[i]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !d.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let i = B.dot.v4.AndroidCamera.verify(A.camera);
          if (i)
            return "camera." + i;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let i = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (i)
            return "detectionNormalizedRectangle." + i;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let i = 0; i < A.digests.length; ++i)
            if (!(A.digests[i] && typeof A.digests[i].length == "number" || d.isString(A.digests[i])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let i = 0; i < A.digestsWithTimestamp.length; ++i) {
            let n = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[i]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let i = Object.keys(A.dynamicCameraFrameProperties);
          for (let n = 0; n < i.length; ++n) {
            let I = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[i[n]]);
            if (I)
              return "dynamicCameraFrameProperties." + I;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let i = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (i)
            return "croppedYuv420Image." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.AndroidMetadata)
          return A;
        let i = new B.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          i.supportedAbis = [];
          for (let n = 0; n < A.supportedAbis.length; ++n)
            i.supportedAbis[n] = String(A.supportedAbis[n]);
        }
        if (A.device != null && (i.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          i.camera = B.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          i.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          i.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? d.base64.decode(A.digests[n], i.digests[n] = d.newBuffer(d.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (i.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          i.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            i.digestsWithTimestamp[n] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          i.dynamicCameraFrameProperties = {};
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I) {
            if (typeof A.dynamicCameraFrameProperties[n[I]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            i.dynamicCameraFrameProperties[n[I]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[n[I]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, i.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (i.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          i.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        if ((i.arrays || i.defaults) && (n.supportedAbis = [], n.digests = [], n.digestsWithTimestamp = []), (i.objects || i.defaults) && (n.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          n.supportedAbis = [];
          for (let a = 0; a < A.supportedAbis.length; ++a)
            n.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (n.device = A.device, i.oneofs && (n._device = "device")), A.digests && A.digests.length) {
          n.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            n.digests[a] = i.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let I;
        if (A.dynamicCameraFrameProperties && (I = Object.keys(A.dynamicCameraFrameProperties)).length) {
          n.dynamicCameraFrameProperties = {};
          for (let a = 0; a < I.length; ++a)
            n.dynamicCameraFrameProperties[I[a]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[I[a]], i);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], i);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = B.dot.v4.AndroidCamera.toObject(A.camera, i), i.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, i), i.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (n.tamperingIndicators = i.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : i.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, i.oneofs && (n._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (n.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, i), i.oneofs && (n._croppedYuv420Image = "croppedYuv420Image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), g.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.AndroidCamera();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let i = {};
        return A.defaults && (i.resolution = null, i.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (i.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (i.rotationDegrees = e.rotationDegrees), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), g.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uPlane = d.newBuffer([]), t.prototype.vPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.Yuv420Image();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.size = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.size = null, A.bytes === String ? i.yPlane = "" : (i.yPlane = [], A.bytes !== Array && (i.yPlane = d.newBuffer(i.yPlane))), A.bytes === String ? i.uPlane = "" : (i.uPlane = [], A.bytes !== Array && (i.uPlane = d.newBuffer(i.uPlane))), A.bytes === String ? i.vPlane = "" : (i.vPlane = [], A.bytes !== Array && (i.vPlane = d.newBuffer(i.vPlane)))), e.size != null && e.hasOwnProperty("size") && (i.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (i.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (i.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (i.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), g.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = d.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.isoValues = d.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let n = Object.keys(A.architectureInfo), I = 0; I < n.length; ++I)
            i.uint32(
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
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[n]);
        if (A.isoValues != null && A.isoValues.length) {
          i.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let n = 0; n < A.isoValues.length; ++n)
            i.int32(A.isoValues[n]);
          i.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.IosCamera.encode(A.camera, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.IosMetadata(), a, r;
        for (; A.pos < n; ) {
          let Q = A.uint32();
          switch (Q >>> 3) {
            case 1: {
              I.cameraModelId = A.string();
              break;
            }
            case 2: {
              I.architectureInfo === d.emptyObject && (I.architectureInfo = {});
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
              I.camera = B.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (I.isoValues && I.isoValues.length || (I.isoValues = []), (Q & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  I.isoValues.push(A.int32());
              } else
                I.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(Q & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !d.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!d.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let i = Object.keys(A.architectureInfo);
          for (let n = 0; n < i.length; ++n)
            if (typeof A.architectureInfo[i[n]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let i = B.dot.v4.IosCamera.verify(A.camera);
          if (i)
            return "camera." + i;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let i = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (i)
            return "detectionNormalizedRectangle." + i;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let i = 0; i < A.digests.length; ++i)
            if (!(A.digests[i] && typeof A.digests[i].length == "number" || d.isString(A.digests[i])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let i = 0; i < A.digestsWithTimestamp.length; ++i) {
            let n = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[i]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let i = 0; i < A.isoValues.length; ++i)
            if (!d.isInteger(A.isoValues[i]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let i = new B.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (i.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          i.architectureInfo = {};
          for (let n = Object.keys(A.architectureInfo), I = 0; I < n.length; ++I)
            i.architectureInfo[n[I]] = !!A.architectureInfo[n[I]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          i.camera = B.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          i.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          i.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? d.base64.decode(A.digests[n], i.digests[n] = d.newBuffer(d.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (i.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          i.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            i.digestsWithTimestamp[n] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          i.isoValues = [];
          for (let n = 0; n < A.isoValues.length; ++n)
            i.isoValues[n] = A.isoValues[n] | 0;
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        (i.arrays || i.defaults) && (n.digests = [], n.isoValues = [], n.digestsWithTimestamp = []), (i.objects || i.defaults) && (n.architectureInfo = {}), i.defaults && (n.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (n.cameraModelId = A.cameraModelId);
        let I;
        if (A.architectureInfo && (I = Object.keys(A.architectureInfo)).length) {
          n.architectureInfo = {};
          for (let a = 0; a < I.length; ++a)
            n.architectureInfo[I[a]] = A.architectureInfo[I[a]];
        }
        if (A.digests && A.digests.length) {
          n.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            n.digests[a] = i.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          n.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            n.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], i);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = B.dot.v4.IosCamera.toObject(A.camera, i), i.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, i), i.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), g.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.IosCamera();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = B.dot.ImageSize.decode(e, e.uint32());
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
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let i = {};
        return A.defaults && (i.resolution = null, i.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (i.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (i.rotationDegrees = e.rotationDegrees), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), g.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = d.emptyArray, t.prototype.hashedDetectedImages = d.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = d.emptyArray, t.prototype.detectionRecord = d.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: d.oneOfGetter(e = ["croppedImage"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let n = 0; n < A.availableCameraProperties.length; ++n)
            B.dot.v4.CameraProperties.encode(A.availableCameraProperties[n], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[n]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let n = 0; n < A.detectionRecord.length; ++n)
            B.dot.v4.DetectedObject.encode(A.detectionRecord[n], i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n)
            B.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[n], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && B.dot.Image.encode(A.croppedImage, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.WebMetadata();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.currentCameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.availableCameraProperties && I.availableCameraProperties.length || (I.availableCameraProperties = []), I.availableCameraProperties.push(B.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              I.hashedDetectedImages && I.hashedDetectedImages.length || (I.hashedDetectedImages = []), I.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              I.hashedDetectedImagesWithTimestamp && I.hashedDetectedImagesWithTimestamp.length || (I.hashedDetectedImagesWithTimestamp = []), I.hashedDetectedImagesWithTimestamp.push(B.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.detectionRecord && I.detectionRecord.length || (I.detectionRecord = []), I.detectionRecord.push(B.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              I.croppedImage = B.dot.Image.decode(A, A.uint32());
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
          let i = B.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (i)
            return "currentCameraProperties." + i;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let i = 0; i < A.availableCameraProperties.length; ++i) {
            let n = B.dot.v4.CameraProperties.verify(A.availableCameraProperties[i]);
            if (n)
              return "availableCameraProperties." + n;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let i = 0; i < A.hashedDetectedImages.length; ++i)
            if (!d.isString(A.hashedDetectedImages[i]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let i = 0; i < A.hashedDetectedImagesWithTimestamp.length; ++i) {
            let n = B.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[i]);
            if (n)
              return "hashedDetectedImagesWithTimestamp." + n;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let i = 0; i < A.detectionRecord.length; ++i) {
            let n = B.dot.v4.DetectedObject.verify(A.detectionRecord[i]);
            if (n)
              return "detectionRecord." + n;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let i = B.dot.Image.verify(A.croppedImage);
          if (i)
            return "croppedImage." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.WebMetadata)
          return A;
        let i = new B.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          i.currentCameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          i.availableCameraProperties = [];
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            if (typeof A.availableCameraProperties[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            i.availableCameraProperties[n] = B.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[n]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          i.hashedDetectedImages = [];
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            i.hashedDetectedImages[n] = String(A.hashedDetectedImages[n]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          i.hashedDetectedImagesWithTimestamp = [];
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            if (typeof A.hashedDetectedImagesWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            i.hashedDetectedImagesWithTimestamp[n] = B.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[n]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          i.detectionRecord = [];
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            if (typeof A.detectionRecord[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            i.detectionRecord[n] = B.dot.v4.DetectedObject.fromObject(A.detectionRecord[n]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          i.croppedImage = B.dot.Image.fromObject(A.croppedImage);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        if ((i.arrays || i.defaults) && (n.availableCameraProperties = [], n.hashedDetectedImages = [], n.detectionRecord = [], n.hashedDetectedImagesWithTimestamp = []), i.defaults && (n.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (n.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, i)), A.availableCameraProperties && A.availableCameraProperties.length) {
          n.availableCameraProperties = [];
          for (let I = 0; I < A.availableCameraProperties.length; ++I)
            n.availableCameraProperties[I] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[I], i);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          n.hashedDetectedImages = [];
          for (let I = 0; I < A.hashedDetectedImages.length; ++I)
            n.hashedDetectedImages[I] = A.hashedDetectedImages[I];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          n.detectionRecord = [];
          for (let I = 0; I < A.detectionRecord.length; ++I)
            n.detectionRecord[I] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[I], i);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          n.hashedDetectedImagesWithTimestamp = [];
          for (let I = 0; I < A.hashedDetectedImagesWithTimestamp.length; ++I)
            n.hashedDetectedImagesWithTimestamp[I] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[I], i);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (n.croppedImage = B.dot.Image.toObject(A.croppedImage, i), i.oneofs && (n._croppedImage = "croppedImage")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), g.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < i; ) {
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        if (A.defaults)
          if (i.imageHash = "", d.Long) {
            let n = new d.Long(0, 0, !0);
            i.timestampMillis = A.longs === String ? n.toString() : A.longs === Number ? n.toNumber() : n;
          } else
            i.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (i.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? i.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : i.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), g.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
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
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && i.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && i.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && i.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && i.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && i.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && i.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && i.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && i.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && i.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && i.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.MediaTrackSettings();
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
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !d.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !d.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !d.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !d.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !d.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !d.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !d.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !d.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !d.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !d.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MediaTrackSettings)
          return A;
        let i = new B.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (i.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (i.autoGainControl = !!A.autoGainControl), A.channelCount != null && (i.channelCount = A.channelCount | 0), A.deviceId != null && (i.deviceId = String(A.deviceId)), A.displaySurface != null && (i.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (i.echoCancellation = !!A.echoCancellation), A.facingMode != null && (i.facingMode = String(A.facingMode)), A.frameRate != null && (i.frameRate = Number(A.frameRate)), A.groupId != null && (i.groupId = String(A.groupId)), A.height != null && (i.height = A.height | 0), A.noiseSuppression != null && (i.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (i.sampleRate = A.sampleRate | 0), A.sampleSize != null && (i.sampleSize = A.sampleSize | 0), A.width != null && (i.width = A.width | 0), A.deviceName != null && (i.deviceName = String(A.deviceName)), i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (n.aspectRatio = i.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, i.oneofs && (n._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (n.autoGainControl = A.autoGainControl, i.oneofs && (n._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (n.channelCount = A.channelCount, i.oneofs && (n._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (n.deviceId = A.deviceId, i.oneofs && (n._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (n.displaySurface = A.displaySurface, i.oneofs && (n._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (n.echoCancellation = A.echoCancellation, i.oneofs && (n._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (n.facingMode = A.facingMode, i.oneofs && (n._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (n.frameRate = i.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, i.oneofs && (n._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (n.groupId = A.groupId, i.oneofs && (n._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (n.height = A.height, i.oneofs && (n._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (n.noiseSuppression = A.noiseSuppression, i.oneofs && (n._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (n.sampleRate = A.sampleRate, i.oneofs && (n._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (n.sampleSize = A.sampleSize, i.oneofs && (n._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (n.width = A.width, i.oneofs && (n._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (n.deviceName = A.deviceName, i.oneofs && (n._deviceName = "deviceName")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), g.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.ImageBitmap();
        for (; e.pos < i; ) {
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.width = 0, i.height = 0), e.width != null && e.hasOwnProperty("width") && (i.width = e.width), e.height != null && e.hasOwnProperty("height") && (i.height = e.height), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), g.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: d.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.CameraProperties();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
          let i = B.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (i)
            return "cameraInitFrameResolution." + i;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let i = B.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (i)
            return "cameraProperties." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.CameraProperties)
          return A;
        let i = new B.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          i.cameraInitFrameResolution = B.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          i.cameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (n.cameraInitFrameResolution = B.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, i), i.oneofs && (n._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (n.cameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, i)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), g.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DetectedObject();
        for (; e.pos < i; ) {
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
              n.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              n.smallestEdge = e.float();
              break;
            }
            case 8: {
              n.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              n.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              n.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              n.topRight = B.dot.v4.Point.decode(e, e.uint32());
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
        let i = {};
        return A.defaults && (i.brightness = 0, i.sharpness = 0, i.hotspots = 0, i.confidence = 0, i.faceSize = 0, i.faceCenter = null, i.smallestEdge = 0, i.bottomLeft = null, i.bottomRight = null, i.topLeft = null, i.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (i.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (i.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (i.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (i.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (i.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (i.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (i.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (i.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (i.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (i.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (i.topRight = B.dot.v4.Point.toObject(e.topRight, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), g.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.Point();
        for (; e.pos < i; ) {
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
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.x = 0, i.y = 0), e.x != null && e.hasOwnProperty("x") && (i.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (i.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), g.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.FaceContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceContent)
          return e;
        let A = new B.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), g.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DocumentContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.DocumentContent)
          return e;
        let A = new B.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), g.Blob = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: d.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && B.dot.v4.FaceContent.encode(A.faceContent, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && B.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && B.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && B.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && B.dot.v4.PalmContent.encode(A.palmContent, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && B.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Blob();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.documentContent = B.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.faceContent = B.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.smileLivenessContent = B.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.palmContent = B.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.travelDocumentContent = B.dot.v4.TravelDocumentContent.decode(A, A.uint32());
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
        let i = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          i.blob = 1;
          {
            let n = B.dot.v4.DocumentContent.verify(A.documentContent);
            if (n)
              return "documentContent." + n;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (n)
              return "eyeGazeLivenessContent." + n;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.FaceContent.verify(A.faceContent);
            if (n)
              return "faceContent." + n;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (n)
              return "magnifeyeLivenessContent." + n;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (n)
              return "smileLivenessContent." + n;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.PalmContent.verify(A.palmContent);
            if (n)
              return "palmContent." + n;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (n)
              return "travelDocumentContent." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Blob)
          return A;
        let i = new B.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          i.documentContent = B.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          i.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          i.faceContent = B.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          i.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          i.smileLivenessContent = B.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          i.palmContent = B.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          i.travelDocumentContent = B.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (n.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, i), i.oneofs && (n.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (n.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, i), i.oneofs && (n.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (n.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, i), i.oneofs && (n.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (n.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, i), i.oneofs && (n.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (n.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, i), i.oneofs && (n.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (n.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, i), i.oneofs && (n.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (n.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, i), i.oneofs && (n.blob = "travelDocumentContent")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), g.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              n.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
        let i = {};
        return A.defaults && (i.ldsMasterFile = null, i.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, i.authenticationStatus = null, i.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (i.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (i.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (i.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), g.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.LdsMasterFile();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
        let i = {};
        return A.defaults && (i.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (i.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), g.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
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
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && B.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && B.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && B.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && B.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && B.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && B.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, i.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, i.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, i.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, i.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, i.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, i.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && B.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, i.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && B.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, i.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && B.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, i.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              I.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              I.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              I.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              I.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              I.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              I.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              I.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              I.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              I.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              I.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
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
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (i)
            return "comHeaderAndDataGroupPresenceInformation." + i;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (i)
            return "sodDocumentSecurityObject." + i;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (i)
            return "dg1MachineReadableZoneInformation." + i;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (i)
            return "dg2EncodedIdentificationFeaturesFace." + i;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (i)
            return "dg3AdditionalIdentificationFeatureFingers." + i;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (i)
            return "dg4AdditionalIdentificationFeatureIrises." + i;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (i)
            return "dg5DisplayedPortrait." + i;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (i)
            return "dg7DisplayedSignatureOrUsualMark." + i;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (i)
            return "dg8DataFeatures." + i;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (i)
            return "dg9StructureFeatures." + i;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (i)
            return "dg10SubstanceFeatures." + i;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (i)
            return "dg11AdditionalPersonalDetails." + i;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (i)
            return "dg12AdditionalDocumentDetails." + i;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (i)
            return "dg13OptionalDetails." + i;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (i)
            return "dg14SecurityOptions." + i;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (i)
            return "dg15ActiveAuthenticationPublicKeyInfo." + i;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (i)
            return "dg16PersonsToNotify." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1eMrtdApplication)
          return A;
        let i = new B.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          i.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          i.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          i.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          i.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          i.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          i.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          i.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          i.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          i.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          i.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          i.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          i.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          i.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          i.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          i.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          i.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          i.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.comHeaderAndDataGroupPresenceInformation = null, n.sodDocumentSecurityObject = null, n.dg1MachineReadableZoneInformation = null, n.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (n.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, i)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (n.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, i)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (n.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, i)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (n.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, i)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (n.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, i), i.oneofs && (n._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (n.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, i), i.oneofs && (n._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (n.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, i), i.oneofs && (n._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (n.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, i), i.oneofs && (n._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (n.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, i), i.oneofs && (n._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (n.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, i), i.oneofs && (n._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (n.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, i), i.oneofs && (n._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (n.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, i), i.oneofs && (n._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (n.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, i), i.oneofs && (n._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (n.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, i), i.oneofs && (n._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (n.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, i), i.oneofs && (n._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (n.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, i), i.oneofs && (n._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (n.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, i), i.oneofs && (n._dg16PersonsToNotify = "dg16PersonsToNotify")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), g.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: d.oneOfGetter(e = ["bytes"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Lds1ElementaryFile();
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || d.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1ElementaryFile)
          return A;
        let i = new B.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              i.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            i.id = 0;
            break;
          case "ID_COM":
          case 1:
            i.id = 1;
            break;
          case "ID_SOD":
          case 2:
            i.id = 2;
            break;
          case "ID_DG1":
          case 3:
            i.id = 3;
            break;
          case "ID_DG2":
          case 4:
            i.id = 4;
            break;
          case "ID_DG3":
          case 5:
            i.id = 5;
            break;
          case "ID_DG4":
          case 6:
            i.id = 6;
            break;
          case "ID_DG5":
          case 7:
            i.id = 7;
            break;
          case "ID_DG7":
          case 8:
            i.id = 8;
            break;
          case "ID_DG8":
          case 9:
            i.id = 9;
            break;
          case "ID_DG9":
          case 10:
            i.id = 10;
            break;
          case "ID_DG10":
          case 11:
            i.id = 11;
            break;
          case "ID_DG11":
          case 12:
            i.id = 12;
            break;
          case "ID_DG12":
          case 13:
            i.id = 13;
            break;
          case "ID_DG13":
          case 14:
            i.id = 14;
            break;
          case "ID_DG14":
          case 15:
            i.id = 15;
            break;
          case "ID_DG15":
          case 16:
            i.id = 16;
            break;
          case "ID_DG16":
          case 17:
            i.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? d.base64.decode(A.bytes, i.bytes = d.newBuffer(d.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (i.bytes = A.bytes)), i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.id = i.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (n.id = i.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (n.bytes = i.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : i.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, i.oneofs && (n._bytes = "bytes")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, i = Object.create(A);
        return i[A[0] = "ID_UNSPECIFIED"] = 0, i[A[1] = "ID_COM"] = 1, i[A[2] = "ID_SOD"] = 2, i[A[3] = "ID_DG1"] = 3, i[A[4] = "ID_DG2"] = 4, i[A[5] = "ID_DG3"] = 5, i[A[6] = "ID_DG4"] = 6, i[A[7] = "ID_DG5"] = 7, i[A[8] = "ID_DG7"] = 8, i[A[9] = "ID_DG8"] = 9, i[A[10] = "ID_DG9"] = 10, i[A[11] = "ID_DG10"] = 11, i[A[12] = "ID_DG11"] = 12, i[A[13] = "ID_DG12"] = 13, i[A[14] = "ID_DG13"] = 14, i[A[15] = "ID_DG14"] = 15, i[A[16] = "ID_DG15"] = 16, i[A[17] = "ID_DG16"] = 17, i;
      }(), t;
    }(), g.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), g.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
        let i = {};
        return A.defaults && (i.data = null, i.chip = null), e.data != null && e.hasOwnProperty("data") && (i.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (i.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), g.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DataAuthenticationStatus();
        for (; e.pos < i; ) {
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
        let i = {};
        return A.defaults && (i.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, i.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (i.status = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : B.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (i.protocol = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), i;
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
    }(), g.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
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
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.ChipAuthenticationStatus();
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || d.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.ChipAuthenticationStatus)
          return A;
        let i = new B.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              i.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            i.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            i.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            i.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            i.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              i.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            i.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            i.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            i.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            i.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? d.base64.decode(A.activeAuthenticationResponse, i.activeAuthenticationResponse = d.newBuffer(d.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (i.activeAuthenticationResponse = A.activeAuthenticationResponse)), i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.status = i.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (n.status = i.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (n.protocol = i.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, i.oneofs && (n._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (n.activeAuthenticationResponse = i.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : i.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, i.oneofs && (n._activeAuthenticationResponse = "activeAuthenticationResponse")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, i = Object.create(A);
        return i[A[0] = "STATUS_UNSPECIFIED"] = 0, i[A[1] = "STATUS_AUTHENTICATED"] = 1, i[A[2] = "STATUS_DENIED"] = 2, i[A[3] = "STATUS_NOT_SUPPORTED"] = 3, i;
      }(), t.Protocol = function() {
        const A = {}, i = Object.create(A);
        return i[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, i[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, i[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, i[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, i;
      }(), t;
    }(), g.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.image = null, t.prototype.segments = d.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: d.oneOfGetter(e = ["image"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.segments != null && A.segments.length)
          for (let n = 0; n < A.segments.length; ++n)
            B.dot.v4.EyeGazeLivenessSegment.encode(A.segments[n], i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 3: {
              I.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              I.segments && I.segments.length || (I.segments = []), I.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              I.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
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
          let i = B.dot.Image.verify(A.image);
          if (i)
            return "image." + i;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let i = 0; i < A.segments.length; ++i) {
            let n = B.dot.v4.EyeGazeLivenessSegment.verify(A.segments[i]);
            if (n)
              return "segments." + n;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let i = B.dot.v4.Metadata.verify(A.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.EyeGazeLivenessContent)
          return A;
        let i = new B.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          i.image = B.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          i.segments = [];
          for (let n = 0; n < A.segments.length; ++n) {
            if (typeof A.segments[n] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            i.segments[n] = B.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[n]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          i.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        if ((i.arrays || i.defaults) && (n.segments = []), i.defaults && (n.metadata = null), A.segments && A.segments.length) {
          n.segments = [];
          for (let I = 0; I < A.segments.length; ++I)
            n.segments[I] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[I], i);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(A.metadata, i)), A.image != null && A.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(A.image, i), i.oneofs && (n._image = "image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), g.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.corner = e.int32();
              break;
            }
            case 2: {
              n.image = B.dot.Image.decode(e, e.uint32());
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
        let i = {};
        return A.defaults && (i.corner = A.enums === String ? "TOP_LEFT" : 0, i.image = null), e.corner != null && e.hasOwnProperty("corner") && (i.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), g.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), g.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && B.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && B.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.SmileLivenessContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.neutralExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.smileExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = B.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = B.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.SmileLivenessContent)
          return e;
        let A = new B.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = B.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = B.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.neutralExpressionFaceImage = null, i.smileExpressionFaceImage = null, i.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (i.neutralExpressionFaceImage = B.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (i.smileExpressionFaceImage = B.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), g.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.PalmContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.PalmContent)
          return e;
        let A = new B.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), g;
  }(), o.Image = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.bytes = d.newBuffer([]), g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.Image();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, g;
  }(), o.ImageSize = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.width = 0, g.prototype.height = 0, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.ImageSize();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.width = t.int32();
            break;
          }
          case 2: {
            i.height = t.int32();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, g;
  }(), o.Int32List = function() {
    function g(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.items = d.emptyArray, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      if (e || (e = v.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.Int32List();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            if (i.items && i.items.length || (i.items = []), (n & 7) === 2) {
              let I = t.uint32() + t.pos;
              for (; t.pos < I; )
                i.items.push(t.int32());
            } else
              i.items.push(t.int32());
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
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
    }, g.fromObject = function(t) {
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
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let i = 0; i < t.items.length; ++i)
          A.items[i] = t.items[i];
      }
      return A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, g;
  }(), o.Platform = function() {
    const g = {}, t = Object.create(g);
    return t[g[0] = "WEB"] = 0, t[g[1] = "ANDROID"] = 1, t[g[2] = "IOS"] = 2, t;
  }(), o.RectangleDouble = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.left = 0, g.prototype.top = 0, g.prototype.right = 0, g.prototype.bottom = 0, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.RectangleDouble();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.left = t.double();
            break;
          }
          case 2: {
            i.top = t.double();
            break;
          }
          case 3: {
            i.right = t.double();
            break;
          }
          case 4: {
            i.bottom = t.double();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, g;
  }(), o.DigestWithTimestamp = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.digest = d.newBuffer([]), g.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.digest = t.bytes();
            break;
          }
          case 2: {
            i.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? d.base64.decode(t.digest, e.digest = d.newBuffer(d.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = d.newBuffer(A.digest))), d.Long) {
          let i = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? d.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, g;
  }(), o;
})();
(function(o, g) {
  function t(I, a, r, Q, C) {
    return _(Q - -395, I);
  }
  function e(I, a, r, Q, C) {
    return _(r - -9, Q);
  }
  function A(I, a, r, Q, C) {
    return _(I - 891, a);
  }
  function i(I, a, r, Q, C) {
    return _(C - -511, r);
  }
  const n = o();
  for (; ; )
    try {
      if (parseInt(i(-322, -357, "nIj)", -369, -344)) / 1 * (parseInt(i(-338, -381, "D9]K", -387, -362)) / 2) + -parseInt(i(-333, -342, "eBa0", -345, -354)) / 3 * (parseInt(e(180, 180, 159, "l%k8", 160)) / 4) + -parseInt(i(-354, -372, "L)1S", -326, -347)) / 5 * (-parseInt(i(-373, -390, ")d!E", -361, -367)) / 6) + parseInt(i(-377, -366, "tR5l", -402, -378)) / 7 * (parseInt(A(1037, "dYg9", 1028, 1029, 1043)) / 8) + -parseInt(i(-375, -369, "fRgn", -348, -351)) / 9 + parseInt(t("gHer", -273, -242, -260, -250)) / 10 * (-parseInt(A(1047, "aeZx", 1064, 1064, 1035)) / 11) + parseInt(e(164, 170, 152, "bLjX", 153)) / 12 === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(To, -9602 * 16 + -48333 + 402282);
async function gs() {
  function o(Q, C, x, c, E) {
    return _(c - 893, E);
  }
  const g = {};
  g[t(")b(s", 47)] = Ua;
  function t(Q, C, x, c, E) {
    return _(C - -104, Q);
  }
  function e(Q, C, x, c, E) {
    return _(Q - 571, E);
  }
  g[t("gQQs", 35) + "h"] = 256;
  const A = await window[n(498, 491, 510, 484, "&pPO") + "o"][n(472, 486, 464, 496, "FmyP") + "e"][n(545, 522, 533, 525, "b%Sk") + r(873, 880, "kqHU", 881) + "y"](g, !0, [t("cqWy", 46) + "pt", t("gQQs", 71) + "pt"]), i = Uint8Array[n(524, 518, 529, 518, "gHer")](Array(-7440 * 1 + 4 * 635 + 4916)[e(734, 709, 722, 713, "&pPO")](-4983 * -1 + 727 + -5710));
  function n(Q, C, x, c, E) {
    return _(C - 346, E);
  }
  const I = window[e(753, 762, 741, 759, "d7n9") + "o"][t("eBY5", 32) + o(1034, 1062, 1017, 1040, "&pPO") + t("@2L]", 70)](i), a = {};
  a[n(473, 487, 496, 478, "D9]K")] = A;
  function r(Q, C, x, c, E) {
    return _(c - 715, x);
  }
  return a.iv = I, a;
}
async function is(o) {
  const { iv: g, key: t } = await gs(), e = {};
  function A(x, c, E, l, u) {
    return _(x - -679, u);
  }
  function i(x, c, E, l, u) {
    return _(c - -108, l);
  }
  function n(x, c, E, l, u) {
    return _(c - -166, l);
  }
  e[A(-537, -552, -518, -541, "VDb&")] = Ua, e.iv = g;
  const I = await window[C(93, 142, "D9]K", 118) + "o"][C(125, 137, "eBY5", 114) + "e"][A(-526, -537, -507, -536, "01RD") + "pt"](e, t, o), a = await window[C(87, 102, "@lE]", 102) + "o"][n(6, -12, -28, "01RD") + "e"][C(145, 136, "gQQs", 132) + i(26, 30, 49, "gvrw")](Q(412, 406, 434, "d7n9", 421), t), r = {};
  r[i(70, 54, 68, "!uc(") + "ge"] = I;
  function Q(x, c, E, l, u) {
    return _(u - 251, l);
  }
  r[i(66, 50, 61, "gHer")] = a, r.iv = g;
  function C(x, c, E, l, u) {
    return _(l - -41, E);
  }
  return r;
}
function _(o, g) {
  const t = To();
  return _ = function(e, A) {
    e = e - 133;
    let i = t[e];
    if (_.FhcJdf === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      _.jtsJoY = Q, o = arguments, _.FhcJdf = !0;
    }
    const I = t[-326 * -4 + -73 * -97 + -8385], a = e + I, r = o[a];
    return r ? i = r : (_.HCEPfj === void 0 && (_.HCEPfj = !0), i = _.jtsJoY(i, A), o[a] = i), i;
  }, _(o, g);
}
function To() {
  const o = ["EGRcHSk/", "nNDHW5KE", "EmoJW77dO8otW47cSCo6WQhdPSoLBJC", "W4lcICk/kmkI", "W5zAW7VdPWNcOgNdVG", "W4/cN8kPnCka", "E8oTW7hcVCkMWRldGCo8WRK", "w8oyd8kccmoUWQ51WPmi", "zaffWRy+", "sXTHW6u", "dNVdQ8kYW7KWW5S0W5SD", "DM7cGG0F", "yhxcGWSk", "rCoAW4lcGg8", "W4faWRC9FmkfuhDIW5mAWOiX", "W5RcSsyEW6VdK2aLW6e", "ngu5", "c8kFqSogoq", "W4dcSNtcP8oQW4zdW5JdKuBcQCkOW4i", "WRZdLa87Cmk0gt9rW67dKmoUmG", "WOhdHSkqW4RcOq", "W4FcKSkQna", "lmoXWPddSCoAimke", "e2f/eColdrC/WPlcGrFcRIG", "WRRdMSkfkbm", "W4ddHXWtWRVdRCkp", "W6xcSmoDj8ojW4ntW53cIGC", "W6RcUcKPdINcTqi", "W6BcRq8", "W59CbmoaWPJcON5GW6hcPq", "oxiVaW", "pCkbW5LYqG", "eWKHW7BdGW", "pmkCW4PVsq", "WPGCh1rp", "W5rEWO3cSLddUI/dLmoqW7BdQKbB", "mmkHW4bZzmofkezMBCkpBue", "k8kYW7dcQ8kAzCkSjCotW43dJmos", "W53cK8kvW4pcHexcI8kq", "WPW5W5PRoeSPFSo6mbP4ka", "W7FcVGhdKcu", "d3VdR8kXWOrtW7WFW4SVqYe", "ir3cU8k3W4FcJGG", "BJa2fa/cHCoLW78", "uCokW5tcPMi", "erqVD8k4tLm", "vH0UwG", "nmkCW4D6ra", "W71nWROuWPu", "a8kiqG"];
  return To = function() {
    return o;
  }, To();
}
function Po() {
  const o = ["WPrpzmkjjNTl", "W755WOnDmSoHwCozW4e", "nKZcGCo7uW", "b1XiWQlcIa", "WOCfArm5W5VdS2vxaYxcUCkB", "hKRdLXpdR8oMaSkHW6iUDrlcHW", "qmkJjColyIzqWPxcJWdcK8o8", "W7L8WOaMvmkieSo8W5VdOCkpW75h", "mbRdGfnS", "WQ4rW5RcMCoh", "W6ZdOKVdNSoWyIu", "yKFcLHuwzc/cMtpcIK3cK8kd", "W5pdPgFdHCkVWQtcKCoDW7P/", "WOufAH4XW5RdVwzWnWJcU8kq", "W7zUW5GaW58", "rIuFBCkEw8kHiSkzhZDw", "W6BcNWZcImk4aMNcTqvWWQ3cPmod", "q8kHi8k4bu5uWPBcJW", "W7X5W5KkW6G", "WOhcM8kFDmo+WQJdNmoTkYRdQqZcIW", "e8ohWQm3WQG", "gXxcKmkJdSoCWPJcQG", "yuxcKXaAyIdcRY3cILpcS8k1", "tSoVW7Smp8kAgCog", "W4PBWQ0ly1pcJSoAfHby", "hCowWQiX", "s8oPWOfUh8kZkmoXW5/dUa"];
  return Po = function() {
    return o;
  }, Po();
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return EA(C - 277, Q);
  }
  function e(a, r, Q, C, x) {
    return EA(C - 845, x);
  }
  function A(a, r, Q, C, x) {
    return EA(Q - 505, x);
  }
  function i(a, r, Q, C, x) {
    return EA(x - 535, a);
  }
  const n = o();
  function I(a, r, Q, C, x) {
    return EA(C - 258, r);
  }
  for (; ; )
    try {
      if (parseInt(e(1223, 1239, 1237, 1229, "#kZh")) / 1 * (-parseInt(i("DT7r", 910, 927, 914, 914)) / 2) + parseInt(e(1214, 1228, 1231, 1222, "VQZW")) / 3 * (parseInt(I(617, "#kZh", 627, 631, 642)) / 4) + parseInt(I(610, "AZP#", 614, 621, 615)) / 5 * (parseInt(t(647, 643, "Jlq$", 641, 643)) / 6) + parseInt(A(864, 883, 876, 877, "m#*&")) / 7 + -parseInt(A(881, 899, 885, 888, "m#*&")) / 8 + -parseInt(t(649, 646, "x4Nw", 651, 651)) / 9 + parseInt(t(639, 637, "!SJO", 636, 642)) / 10 === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Po, 343069 + 5110 * 11);
function EA(o, g) {
  const t = Po();
  return EA = function(e, A) {
    e = e - (28 * 223 + -1494 * -5 + -2671 * 5);
    let i = t[e];
    if (EA.eQAKWl === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      EA.HmVZxm = Q, o = arguments, EA.eQAKWl = !0;
    }
    const I = t[3690 + 8618 * -1 + 4928], a = e + I, r = o[a];
    return r ? i = r : (EA.PFlnRi === void 0 && (EA.PFlnRi = !0), i = EA.HmVZxm(i, A), o[a] = i), i;
  }, EA(o, g);
}
function ns(o) {
  function g(i, n, I, a, r) {
    return EA(I - 905, a);
  }
  const t = new ArrayBuffer(o[e("p4yl", 675) + "h"]);
  function e(i, n, I, a, r) {
    return EA(n - 315, i);
  }
  const A = new Uint8Array(t);
  for (let i = 33 * 72 + -1688 + -172 * 4, n = o[g(1283, 1303, 1290, "o7ow") + "h"]; i < n; i++)
    A[i] = o[g(1283, 1280, 1280, "^CqQ") + g(1266, 1270, 1275, "sH]D")](i);
  return t;
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return AA(I - 965, C);
  }
  function e(I, a, r, Q, C) {
    return AA(r - 46, a);
  }
  function A(I, a, r, Q, C) {
    return AA(I - -440, C);
  }
  function i(I, a, r, Q, C) {
    return AA(C - 92, r);
  }
  const n = o();
  for (; ; )
    try {
      if (-parseInt(A(83, 33, 30, 34, "e2*S")) / 1 * (-parseInt(A(141, 36, 58, 155, "ozKc")) / 2) + parseInt(i(557, 642, "GHzR", 649, 556)) / 3 + -parseInt(i(487, 550, "R14x", 537, 591)) / 4 + -parseInt(A(120, 212, 100, 134, "J3cN")) / 5 * (parseInt(t(1523, 1486, 1493, 1453, "kiHq")) / 6) + -parseInt(A(-51, -1, -145, -90, "%zlr")) / 7 + parseInt(i(706, 577, "J3cN", 613, 617)) / 8 * (parseInt(i(550, 577, "T1A[", 593, 619)) / 9) + parseInt(e(623, "%zlr", 600, 664, 563)) / 10 * (parseInt(e(426, "tHa(", 544, 627, 452)) / 11) === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qo, -303 * -443 + -1029182 + 178009 * 8);
function Is() {
  const o = I("2Dnw", 1254, 1280) + a(1113, 958, 984, "8)KV", 1012) + a(1050, 1054, 1069, "Uw02", 970) + A(999, 1116, "0Yqj") + A(1158, 1113, "9rHB") + g(-340, -275, -273, "F8E3") + A(992, 1070, "J3cN") + I("R14x", 1333, 1274) + i("vcVf", 848, 734, 797) + I("2Dnw", 1431, 1437) + i("xJcl", 848, 930, 831) + g(-479, -499, -574, "T1A[") + A(1093, 1098, "2Dnw") + a(1118, 1215, 1063, "3n5K", 1178) + A(1137, 1137, "xVQ1") + I("Pw$C", 1338, 1295) + A(1339, 1277, "*vNk") + g(-402, -328, -456, "!a[i") + A(1178, 1073, "APcN") + i("ZiD^", 807, 1014, 902) + A(1261, 1242, "R14x") + g(-442, -511, -333, "ZiD^") + I("9rHB", 1371, 1347) + A(1069, 1084, "GHzR") + A(1181, 1216, "%)i$") + g(-462, -426, -378, "xJcl") + I("tHa(", 1505, 1388) + a(1025, 986, 1183, "%%[]", 1100) + I("ZiD^", 1437, 1417) + A(1176, 1203, "Pw$C") + A(1149, 1199, "Uw02") + I("J3cN", 1281, 1312) + g(-521, -421, -506, "^*DK") + i("ewXU", 1033, 1035, 982) + i("xJcl", 817, 930, 862) + I("8)KV", 1209, 1273) + I("%%[]", 1449, 1431) + a(1191, 967, 1083, "!a[i", 1079) + g(-484, -419, -381, "9rHB") + a(1141, 1065, 1062, "%%[]", 1111) + g(-506, -572, -535, "GHzR") + a(1186, 1014, 1142, "xVQ1", 1078) + i("GHzR", 945, 1e3, 949) + A(1145, 1140, "TeG&") + g(-331, -384, -213, "3LEY") + I("zNlk", 1510, 1408) + A(1107, 1190, "9rHB") + g(-381, -318, -408, "R14x") + i("%)i$", 801, 985, 887) + i("9rHB", 757, 895, 802) + a(946, 972, 947, "^*DK", 982) + i("APcN", 963, 841, 880) + a(983, 1106, 1016, "9rHB", 1045) + g(-508, -501, -559, "R14x") + I("T1A[", 1194, 1246) + i("X5Gz", 895, 892, 965) + i("xJcl", 1008, 818, 909) + A(1181, 1186, "0Yqj") + a(945, 1103, 966, "Pw$C", 1026) + g(-369, -261, -404, "rej)") + a(1037, 1080, 938, "0Yqj", 1050) + A(1292, 1175, "%)i$") + I("%)i$", 1161, 1234) + a(1138, 1124, 1141, "J3cN", 1176) + I("ozKc", 1397, 1306) + i("3n5K", 995, 994, 912) + g(-430, -441, -529, "rej)") + I("ewXU", 1162, 1257) + i("rej)", 993, 1011, 904) + i("T1A[", 805, 923, 867) + a(1229, 1272, 1277, "zNlk", 1166) + I("!a[i", 1552, 1448) + i("2Dnw", 975, 884, 892) + i("K7rN", 964, 933, 849) + A(1080, 1076, "*vNk") + A(1113, 1164, "gy!i") + i("GHzR", 802, 829, 886) + I("xJcl", 1400, 1395) + a(1131, 1211, 1260, "%zlr", 1164) + A(1334, 1217, "gy!i") + I("vcVf", 1416, 1328) + i("!a[i", 960, 806, 894) + A(1277, 1231, "H4Gh") + I("K7rN", 1250, 1271) + g(-354, -461, -358, "!a[i") + g(-460, -526, -530, "H4Gh") + a(918, 914, 932, "8)KV", 1017) + i("9rHB", 802, 970, 910) + i("^*DK", 930, 1037, 929) + i("R14x", 690, 839, 803) + A(1055, 1091, "GHzR") + g(-347, -361, -257, "ewXU") + I("%%[]", 1359, 1415) + A(1280, 1291, "rej)") + A(1165, 1205, "QlJ%") + i("xJcl", 972, 1050, 962) + a(1233, 1068, 1232, "F8E3", 1185) + g(-525, -416, -470, "APcN") + g(-342, -373, -238, "ZiD^") + g(-485, -560, -420, "mK^X") + I("X5Gz", 1492, 1434) + g(-374, -449, -295, "9X9c") + i("8)KV", 880, 694, 801) + a(1004, 972, 1189, "vcVf", 1086) + a(1068, 1064, 926, "ozKc", 985) + i("APcN", 959, 936, 980) + A(1265, 1160, "cjep") + I("5OKh", 1221, 1317) + i("!4fG", 899, 863, 978) + a(1310, 1289, 1183, "kiHq", 1198) + I("!4fG", 1274, 1339) + a(1123, 1096, 1105, "%%[]", 1034) + g(-387, -425, -408, "ZiD^") + I("GHzR", 1280, 1244) + A(1314, 1227, "9rHB") + g(-337, -386, -378, "e2*S") + I("CumC", 1381, 1286) + g(-423, -454, -328, "tHa(") + i("e2*S", 732, 663, 752) + I("3LEY", 1284, 1231) + i("!4fG", 867, 945, 970) + a(1104, 963, 1013, "2Dnw", 1049) + I("!kQL", 1293, 1283) + a(1044, 1198, 985, "TeG&", 1080) + i("Pw$C", 950, 952, 918) + a(1110, 1262, 1125, "e2*S", 1161) + g(-471, -582, -469, "%zlr") + g(-348, -325, -275, "2Dnw") + i("8)KV", 822, 850, 836) + I("xJcl", 1332, 1291) + i("2Dnw", 646, 675, 757) + I("5OKh", 1264, 1224) + A(1010, 1081, "Mm!x") + g(-362, -296, -468, "vcVf") + I("8)KV", 1198, 1263) + A(1312, 1247, "xJcl") + i("*vNk", 762, 946, 854) + a(1233, 1055, 1252, "ozKc", 1137) + g(-461, -567, -500, "zNlk") + i("gy!i", 827, 799, 859) + I("vcVf", 1398, 1316) + g(-519, -554, -466, "3LEY") + g(-420, -531, -316, "H4Gh") + g(-316, -253, -265, "tHa(") + A(1093, 1152, "!4fG") + A(1179, 1085, "TeG&") + I("5OKh", 1507, 1425) + a(1064, 1124, 1150, "%)i$", 1159) + I("Uw02", 1210, 1284) + I("3n5K", 1175, 1238) + g(-458, -559, -417, "Uw02") + i("rej)", 787, 885, 786) + a(1127, 1026, 986, "mK^X", 1013) + A(1092, 1088, "X5Gz") + A(1247, 1297, "cjep") + g(-523, -569, -431, "0Yqj") + a(1067, 1101, 1056, "J3cN", 1002) + I("*vNk", 1257, 1279) + g(-473, -534, -508, "!4fG") + A(1217, 1210, "9X9c") + A(1172, 1189, "9rHB") + A(1147, 1082, "TeG&") + I("!kQL", 1332, 1310) + a(1242, 1182, 1173, "xJcl", 1146) + g(-537, -650, -483, "%zlr") + i("^*DK", 789, 945, 891) + a(969, 1058, 968, "3LEY", 973) + g(-370, -379, -401, "%%[]") + g(-395, -299, -304, "xJcl") + i("%)i$", 780, 726, 838) + i("0Yqj", 1048, 994, 935) + a(1123, 1082, 1093, "2Dnw", 1029) + a(1105, 1171, 1100, "xVQ1", 1065) + a(1097, 1143, 1084, "J3cN", 1138) + g(-414, -297, -394, "vcVf") + I("cjep", 1409, 1360) + a(967, 1003, 1066, "%%[]", 1070) + a(1114, 1314, 1114, "%zlr", 1203) + A(1211, 1233, "tHa(") + i("e2*S", 919, 860, 934) + A(1178, 1208, "gy!i") + A(1176, 1069, "kiHq") + i("F8E3", 885, 961, 968) + I("xVQ1", 1158, 1248) + a(1185, 1163, 1218, ")kkr", 1150) + I("2Dnw", 1239, 1259) + I("%VyP", 1312, 1416) + g(-378, -406, -470, "0Yqj") + I("ozKc", 1314, 1405) + i("e2*S", 848, 818, 777) + a(1144, 1133, 1234, "CumC", 1168) + g(-427, -503, -521, "R14x") + I("T1A[", 1546, 1432) + i("d4zD", 756, 821, 785) + A(1109, 1226, "Mm!x") + i("QlJ%", 1070, 908, 974) + g(-411, -371, -313, "H4Gh") + A(1198, 1133, "rej)") + g(-397, -321, -388, "xJcl") + g(-490, -406, -488, "X5Gz");
  function g(Q, C, x, c, E) {
    return AA(Q - -917, c);
  }
  const t = window[A(1064, 1075, "d4zD")](o), e = window[a(1101, 1051, 993, "3n5K", 1082)](t);
  function A(Q, C, x, c, E) {
    return AA(C - 698, x);
  }
  function i(Q, C, x, c, E) {
    return AA(c - 378, Q);
  }
  const n = ns(e);
  function I(Q, C, x, c, E) {
    return AA(x - 843, Q);
  }
  function a(Q, C, x, c, E) {
    return AA(E - 600, c);
  }
  const r = {};
  return r[A(1147, 1219, "9rHB")] = Ya, r[I("X5Gz", 1242, 1294)] = OB, window[a(1104, 1081, 886, "kiHq", 1004) + "o"][g(-376, -309, -338, "3n5K") + "e"][A(1252, 1265, "Vgx6") + a(910, 1114, 916, "Mm!x", 1021)](a(1109, 980, 1092, "9X9c", 1022), n, r, !0, [I("5OKh", 1212, 1240) + "pt"]);
}
function AA(o, g) {
  const t = qo();
  return AA = function(e, A) {
    e = e - (8080 + -1 * 789 + -6921);
    let i = t[e];
    if (AA.vmEBsl === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      AA.JOPdBK = Q, o = arguments, AA.vmEBsl = !0;
    }
    const I = t[-1 * 4567 + -764 * 5 + 8387 * 1], a = e + I, r = o[a];
    return r ? i = r : (AA.MRnNzb === void 0 && (AA.MRnNzb = !0), i = AA.JOPdBK(i, A), o[a] = i), i;
  }, AA(o, g);
}
function qo() {
  const o = ["AGlcNKqE", "ErDKWO3dSSo6k8ksWORdQvG", "bxqZW7vz", "be/dMCoMha", "u2SsWQTJ", "tmkLWO9qwW", "bJ8Cc8oo", "WQT1W5GGW6q", "vmktWO1QzG", "W6FdLYflW7m", "lM3cJ24i", "mmkNW65Owq", "W6TMtmoXWRFdV8ojWP/cJwPbWQa", "WOxcPwnDWPZcSa1MW5H6W7LV", "yCosWQ1sjG", "exldG09b", "W5pdLebjbW", "WRRcMCkIwCk4sCkEm8k4W5VdGa", "WOJcPrz5W4K", "rmozu3njWQRcUmkAqW", "DutdGeHn", "WQBdLhHarG", "W6GPtCopaa", "W4tdHtmlW70", "n8opySonWQa", "mCoruCofWQG", "i2ZcTmkOW5m", "nCkFW5qhWRK", "emo1c2fW", "g8orW6L1iq", "W5bvmCoMtW", "pg97imon", "WOKkWRWrja", "gxy3WOZcKG", "hLqaWO/cGa", "nmkljhzB", "WO8chbnH", "teFcHx4Q", "W4zUDmkPDG", "bhldVNfx", "W4pdLhCtvCk/W5e", "W71IWRlcIxq", "qSozuda3W6JdL8kuFIvACmkl", "umk+WO9qFq", "WPT6gbnx", "Cw9Ae8k9", "BMiWDxC", "obSUfSoj", "WQFcPCkekCoc", "W7mBcqn6", "afyMqu4", "WQTRCWVcQq", "WOrxW7uDW7q", "nmodgLqJ", "naXXlSkW", "W4vFz8ogW44", "W5FdPI8vW58", "W6hdQmoTpmoH", "AJddMSk7EW", "WQrMstJcQG", "qG16WOn1", "iX8NW4NdGq", "W5/dNH0bWPK", "rSo3WQSleW", "W7GTtmk6aG", "aSo4W70VbW", "W4JcL8oNmSoN", "jSkTmLDf", "rg90iCkt", "ah3dVLyS", "yYapW7FdVq", "Dh7dGwzCWPfW", "tYBdPKi", "W55oFSkUEa", "bSoxp24O", "W6xdGtvqW7G", "W4ikWOJcRGu", "hh/cUKWA", "jtWIBSkp", "WOPRd1pcPG", "WPxcSLKktG", "W65pwSkNsG", "WQfABfZdRG", "B2n2aCoV", "WOFcOMzsWP/cS19hW6DYW4j/W4e", "d34FyZu", "WP3dNIPKW6q", "vc0bW4JcQW", "W6PijSkpqa", "WPtdUhXadG", "tY7cI1eK", "lw7dKK8p", "W5u9WOdcLu8", "qt9Gj8km", "lhRdRePt", "nSofnMPa", "W55comkZfG", "eSozjtDH", "WOpcVmkdxSo7", "W6ZdNmoSgmo4", "WOBcKLNcSSoq", "AW1nbuhdPZSpW6BdQa", "hbZdS3Dm", "W6bTW5uDW5i", "hMRdUCoshq", "wCoAW4P4", "W6jQamkGrG", "jhxdI8oJqG", "u2xdP3FcMa", "CCofWRCGma", "e8kYWQJdVSkf", "uCoFmeHg", "lcNdUCoFyW", "W5/dJwn5nq", "Emo/WQr/rq", "jvBdMmoCuq", "mZj2iW", "r04TW70", "tMNdRmoKrq", "CSkSWR3cQmkM", "m1ddTmoqhG", "omkyWPXTha", "y3StdtG", "W67cJCorp8oR", "dCo2Bv9B", "yN3cISoctW", "gNxcJCo1ja", "sMxcGb3cKq", "mCkkWPlcImkJ", "paCFa8os", "W6fLWQ4zW4S", "W71gz8ogeq", "nCo6mK9a", "WP7cNmkhkmoK", "WONcN13cMSoW", "W4BdRW/cNNK", "BCowW6iUpq", "WR9uAMRcPG", "nmk/W7TBWOa", "WRHsDGBcHa", "e8kJWORcImkT", "W5JdUdm9W7e", "WPtcMHq6CxJdRSoJuColW5nVW78", "B8kNW6XMCG", "imoajfjv", "W7ldU3zveG", "mLKhwa", "iCk9W71jrW", "z8k9WOKmCW", "WPzeDcFcQq", "rSkKW61RyW", "lCk4smoVWOu", "WOOjF2f7", "rYVcG8o5qG", "FCoXW4rBfa", "WRFcOq92WOW", "W6RdMK0xWOVdLxyLBhehtbG", "vXldTSksDW", "WQFdHNmMua", "WRCXx8oGf8kHWOqojSklWPdcOG", "WOJcIfZcGSo9", "W6SrkmkuW54", "W5xdGrVcKMu", "W7ulW4zniaRdQeVcGmojW78q", "oSkWcurk", "pM46iSol", "W7hcMmojkSo2", "DCo7W7tcVmkcWQRcN8kwba", "yCoTWOzdwa", "W5OXWRddNNe", "gMLIW7FdTG", "W59gkSoyCq", "WO3cQKX2W7S", "W5/cI37cOCoq", "W58YdSoEdW", "WOXgiLVcRq", "WQOmkSkdWRa", "EapcK1i", "bSkfW7qzWQS", "tCkyWPTxaa", "BSowWPjzta", "BCoPWPHWxq", "WQfHW5z6W5W", "W6/dGhrafG", "WQhcVSkep8o+", "ExddKCoBda", "dmkLWQVdV8kR", "ECo6WPlcHCkG", "DKGMySoRW7/cM8kEtSk0WOZdKG", "xdCEWPj9", "WOZdGYyiW4pdOG8", "WQmmAcVcQG", "WRK8x2Pa", "bM5YW4zdW73dRCkZBt8", "EbFcJSkbFHjxqCosjSo9W5hcNq", "jGD5bmoK", "DCokW4rihW", "wIeVW5ddKG", "r8orWRrBFG", "nCkDWQxcI8kg", "FSkrWOrEhG", "WPK8dHH5", "WPG/A8oaW7K", "W6jqdmkbDG", "WOhcRWX1W7a", "WPjSgSo0W54", "xtX4iCoi", "C2OcW45N", "rxNdN2O2", "m8oeeffZ", "W5SmlCosaG", "W6yumSoAia", "kcBdKSksvW", "WOlcHsKqW7e", "WQ4kkSkuWRq", "rCkZWO1Obq", "l8kPWQNcQa", "ySkAWQH+Ba", "CXdcMZiMW7rFWPfyvmkxcW", "i0i4W7BcPW", "smk9e29RWRNcHW", "WOvKW48dW7W", "W4hdVmoNwSkMvavHC2aSW6tdUq", "le1ghCkA", "kSo8WO/dVmks", "kbafW7NcNa", "tCkAWO0pvW", "kSksWOpcN8kN", "WQKaDb1m", "kqpcIfuz", "x2SgWOLr", "pxpdQ8oxbW", "WP3dQwCrDG", "f8kAl1bu", "W5/dTHzHfq", "lCkLWOT1oa"];
  return qo = function() {
    return o;
  }, qo();
}
async function as(o) {
  function g(n, I, a, r, Q) {
    return AA(Q - -638, n);
  }
  function t(n, I, a, r, Q) {
    return AA(n - 430, a);
  }
  const e = await Is(), A = {};
  function i(n, I, a, r, Q) {
    return AA(n - 977, r);
  }
  return A[i(1387, 1387, 1306, "Uw02")] = Ya, window[g("%zlr", 65, -12, 57, -41) + "o"][i(1572, 1639, 1600, "Mm!x") + "e"][t(913, 981, "CumC") + "pt"](A, e, o);
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return dA(x - 940, Q);
  }
  const e = o();
  function A(a, r, Q, C, x) {
    return dA(r - -20, Q);
  }
  function i(a, r, Q, C, x) {
    return dA(r - -634, C);
  }
  function n(a, r, Q, C, x) {
    return dA(Q - -402, x);
  }
  function I(a, r, Q, C, x) {
    return dA(x - -743, r);
  }
  for (; ; )
    try {
      if (-parseInt(I(-482, "%ruV", -481, -481, -476)) / 1 * (-parseInt(t(1217, 1200, "lQ9w", 1218, 1209)) / 2) + parseInt(I(-468, "[f9H", -464, -465, -471)) / 3 + parseInt(n(-128, -115, -125, -130, "aP0[")) / 4 + -parseInt(n(-124, -124, -132, -126, "(SdZ")) / 5 * (parseInt(A(266, 259, "F&64", 259, 248)) / 6) + parseInt(i(-380, -375, -373, "A2#G", -371)) / 7 + -parseInt(n(-147, -147, -141, -148, "%brA")) / 8 * (parseInt(t(1193, 1194, "dDTs", 1194, 1203)) / 9) + -parseInt(I(-472, "eTUL", -468, -455, -465)) / 10 === g) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(jo, -63 * 15129 + -1610873 + 1169023 * 3);
function dA(o, g) {
  const t = jo();
  return dA = function(e, A) {
    e = e - (-2985 + -1 * 5741 + 599 * 15);
    let i = t[e];
    if (dA.GyWbjc === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      dA.PKAjVC = Q, o = arguments, dA.GyWbjc = !0;
    }
    const I = t[-1 * -8152 + -823 * 2 + -6506], a = e + I, r = o[a];
    return r ? i = r : (dA.ythLtg === void 0 && (dA.ythLtg = !0), i = dA.PKAjVC(i, A), o[a] = i), i;
  }, dA(o, g);
}
function jo() {
  const o = ["be9VospdLCopWPBcPSkJWRe", "WPRcQCkTWRmYAqFdKmop", "WPbEFmkMzmoVr8oooq", "sIbgESkYawnhBWHjW7W", "W4SzD8ojlSoWW5lcLX8iuXq", "WQZdV8oEBMpdS8ogx28", "W645cfWfWRWNWPO", "r8kkqSo1W5SAtshdHmkkW6m", "F8oyW4efmJFdHCkemSo6DcVdLa", "FSksWPFcRKxdPwbUyw/dMCkHB8o2", "WQFdHLOyg11KzY1pFq", "C8opFwJcTmoEv3zGvbBdR8ocdG", "xbGU", "wmkfnSkem8k5WO5ACINcVG", "ku3dTXaD", "jZ4VmCoGkSkzha", "W4WAF8ogl8o1WORdRd8mEsXIea", "DHZcT1DfW4dcLCoTW44YWRK9na", "WPfsCmoofSouCCoihJ0I", "WRpdJfFdPYersZT8", "lGmdtqNdQa9fdxCp"];
  return jo = function() {
    return o;
  }, jo();
}
async function rs(o) {
  const { iv: g, key: t, message: e } = await is(o), A = await as(t), i = {};
  i[I(822, 817, 816, 824, "lQ9w")] = A, i.iv = g;
  function n(a, r, Q, C, x) {
    return dA(r - 851, C);
  }
  function I(a, r, Q, C, x) {
    return dA(C - 564, x);
  }
  return i[n(1113, 1113, 1105, "k7We") + "ge"] = e, i;
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return sA(Q - -266, x);
  }
  function e(a, r, Q, C, x) {
    return sA(C - -184, r);
  }
  const A = o();
  function i(a, r, Q, C, x) {
    return sA(a - -596, C);
  }
  function n(a, r, Q, C, x) {
    return sA(C - 305, a);
  }
  function I(a, r, Q, C, x) {
    return sA(a - 602, r);
  }
  for (; ; )
    try {
      if (-parseInt(e(96, "@r&)", 97, 94, 104)) / 1 + parseInt(e(91, "TD2N", 101, 100, 92)) / 2 * (-parseInt(e(95, "8PQ1", 94, 91, 77)) / 3) + parseInt(t(-5, 4, 8, 17, "Nh&U")) / 4 + parseInt(t(14, 33, 21, 7, "3Fhp")) / 5 + parseInt(I(881, "9^2g", 879, 892, 893)) / 6 + parseInt(n("dYLB", 576, 597, 585, 578)) / 7 + -parseInt(t(12, 12, 3, 1, "IqTn")) / 8 * (parseInt(i(-324, -330, -319, "3zFK", -321)) / 9) === g) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Zo, -1 * -1182184 + 919 * -1187 + 7 * 123777);
function Zo() {
  const o = ["bdfmW5tcGSkOWR7cKceTcwyB", "fvCcW5WqW5hcN8k5kZHeWOm4", "W5/cSmkdW7qjW7iIWQehk3TlBW", "e8kpoCkrcG", "WRZdIh8h", "fSk/WRBdPsG", "W53dUmotnCoQ", "hSkLW5ePeSoOlNlcVSk6kCoagW", "v2BcVNzJWQTNoCka", "fSoDW7DLdWOqymoZrCkKi8o2", "v8o+WPf8mq", "r8kEWROHsq", "qSo+WOa", "zCk8bSo7WPzzWO/dOg8", "gczHWPpdMa", "kCojW48", "f8oFW7DGcGr+tmowACk2fq", "gmkJW5mHeCoOqL3cGCkog8od", "uSoJW4tcSX7dS0aGj8kLj8kBAW", "bfSzWO7dOSoEW68", "zfWwW63dOeXH", "iftdSKvUW4ldHSonzxvvWPhcTSoB", "W5ZdO8oWW71rW7tcV8kUbCoPWPGg", "WO8sz0hdLCorWPldT8kKWRhcL8oMW6rR", "fSkKW7qXDZTwnvtcKmoiW4S9", "vSkXW7fZ", "WOf8lG", "W5TxoCkUq2pcNSoLWOLZje4", "WQHvemkgW4VdSmknz0/cKxj4W5i"];
  return Zo = function() {
    return o;
  }, Zo();
}
function sA(o, g) {
  const t = Zo();
  return sA = function(e, A) {
    e = e - (-7902 + 15 * -603 + 12 * 1434);
    let i = t[e];
    if (sA.xJhSXx === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      sA.SBnOtv = Q, o = arguments, sA.xJhSXx = !0;
    }
    const I = t[2 * 4354 + 9439 * 1 + -18147], a = e + I, r = o[a];
    return r ? i = r : (sA.rAABuu === void 0 && (sA.rAABuu = !0), i = sA.SBnOtv(i, A), o[a] = i), i;
  }, sA(o, g);
}
async function Cs(o) {
  function g(n, I, a, r, Q) {
    return sA(I - -270, n);
  }
  const t = await window[g("3zFK", -3) + "o"][i(50, 61, 36, "lSFf", 50) + "e"][e(989, 997, "59Ft", 985) + "t"](g("mcZM", 0), o);
  function e(n, I, a, r, Q) {
    return sA(r - 724, a);
  }
  function A(n, I, a, r, Q) {
    return sA(I - 997, Q);
  }
  function i(n, I, a, r, Q) {
    return sA(Q - -212, r);
  }
  return Array[g("6R4e", 19)](new Uint8Array(t))[i(76, 67, 60, "sbv)", 70)]((n) => n[g("dYLB", -4) + A(1260, 1265, 1262, 1263, "#NaZ")](-9779 + 4481 * -2 + 1 * 18757)[g("4aUn", 18) + g("hwGZ", 1)](-30 * 281 + 9 * 922 + 2 * 67, "0"))[i(56, 68, 57, "s*bR", 69)]("");
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return YA(Q - 822, I);
  }
  function e(I, a, r, Q, C) {
    return YA(I - -87, C);
  }
  function A(I, a, r, Q, C) {
    return YA(I - -644, C);
  }
  for (var i = o(); ; )
    try {
      var n = -parseInt(t("69s@", 1166, 1182, 1175, 1183)) / 1 * (-parseInt(e(268, 269, 271, 262, "kIp3")) / 2) + parseInt(A(-294, -296, -299, -290, "alSk")) / 3 * (parseInt(t("y6MZ", 1177, 1168, 1170, 1174)) / 4) + -parseInt(t("Uxtg", 1170, 1166, 1173, 1184)) / 5 * (-parseInt(A(-297, -296, -306, -299, "19IR")) / 6) + -parseInt(t("%)eX", 1168, 1157, 1166, 1160)) / 7 + -parseInt(e(269, 268, 268, 259, "ZI$c")) / 8 + -parseInt(e(272, 277, 282, 271, "!sst")) / 9 + parseInt(A(-282, -277, -286, -271, "6$!]")) / 10 * (-parseInt(t("%9g1", 1183, 1184, 1180, 1182)) / 11);
      if (n === g) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Vo, -20 * -34081 + 16053 + -93805);
function YA(o, g) {
  var t = Vo();
  return YA = function(e, A) {
    e = e - 341;
    var i = t[e];
    if (YA.EWFZpj === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      YA.RYstbK = I, o = arguments, YA.EWFZpj = !0;
    }
    var a = t[-4 * -1411 + 133 + -5777], r = e + a, Q = o[r];
    return Q ? i = Q : (YA.kMeykO === void 0 && (YA.kMeykO = !0), i = YA.RYstbK(i, A), o[r] = i), i;
  }, YA(o, g);
}
function Vo() {
  var o = ["smoKW7XFBCkXDgpdUSopsxFcKa", "vWVcLSouBmkUumkwW4a", "W7hcS1HXw8kJhwO5WRlcQCk+WQm", "W4NcO8k5W5q8WRWvC8kqW6SRW4e", "ccDnW7fMkdu", "l8oaW6JcRSkLWOeUW4XKmW", "W7dcSYddTXZdVMHtWQLSW67cU8ko", "d3e6WQOwwfZdT18UWPtdGMW", "zmkZW6VdJatdGqSh", "WPDAW7ldUmkNhKtdOG", "pHVcGmkTW7hdJuC", "W5xcSSkxBtVdKSkYW5G", "WPfwWQhcUmorxdFdOwtdJSocxIa", "WQdcJ8kFWOWyWRajfSklA0q+", "jmocW6JcQCo3W6niW5rCmSoXWQrU", "W7BcHYRdHmk5B8oBtmkJWPjsDa", "W4S4W4ldJSkAzSkoW6L/Cq", "W5bqhfC7g1K5c8oBE8oe", "FmodbeVcOmoOEdq", "lmoyW4ZdOWxcIMC7v8k7BuVdMq", "WQNcOCk7bSoOW6ikW6tcQ8k/W7Tgtq", "lq0znHRdL07dSCot"];
  return Vo = function() {
    return o;
  }, Vo();
}
async function u0(o) {
  const { Image: g } = Xe, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const i = g.verify(A);
  if (i) throw Error(i);
  const n = {};
  return n.bytes = e, g.create(n);
}
async function Bs(o) {
  const { v4: { Metadata: g } } = Xe, t = { ...o };
  t.platform = Xe.Platform.WEB;
  const e = t, A = g.verify(e);
  if (A) throw Error(A);
  return g.create(e);
}
async function Qs(o) {
  const { Content: g } = Xe, { iv: t, key: e, message: A } = await rs(o), i = { token: new Uint8Array(e), iv: t, schemaVersion: YB, bytes: new Uint8Array(A) }, n = g.verify(i);
  if (n) throw Error(n);
  const I = g.create(i);
  return g.encode(I).finish();
}
function ss(o) {
  const { Blob: g } = Xe.v4, t = g.verify(o);
  if (t) throw Error(t);
  const e = g.create(o);
  return g.encode(e).finish();
}
var Ft, gg;
class h0 {
  constructor(g) {
    Y(this, Ft, !0);
    Y(this, gg, Date.now());
    w(this, "analytics");
    w(this, "samVersion");
    w(this, "sessionToken");
    w(this, "onDetectionCallback");
    w(this, "onCaptureCallback");
    w(this, "createProtoMessage");
    w(this, "fpsOfAllImages", new Zi(-639 * -15 + -2510 + -1409 * 5));
    w(this, "cameraService");
    w(this, "imageProcessor");
    w(this, "instructionEscalation");
    w(this, "imageCropSettings");
    this.cameraService = g.cameraService, this.imageProcessor = g.imageProcessor, this.analytics = g.analytics, this.samVersion = g.samVersion, this.sessionToken = g.sessionToken, this.createProtoMessage = g.createProtoMessage, this.onDetectionCallback = g.onDetectionCallback, this.onCaptureCallback = g.onCaptureCallback, this.instructionEscalation = g.instructionEscalation, this.imageCropSettings = g.imageCropSettings;
  }
  async run() {
    for (; y(this, Ft); )
      await this.iterate();
    return this;
  }
  stop() {
    L(this, Ft, !1);
  }
  async trackCaptureProcess(g, t) {
    var n;
    const e = Date.now(), A = mt(this.fpsOfAllImages), i = {};
    i.width = t.width, i.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: g, imageResolution: i, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - y(this, gg), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await YQ() });
  }
  onDetection(g, t) {
    this.onDetectionCallback({ ...g, avgFps: oe(mt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: g, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const i = A, n = await zB(t), I = await eQ(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await u0(I) }, Q = {};
    Q.sessionToken = this.sessionToken, Q.web = r;
    const C = Q, x = await this.createProtoMessage(n, C), c = {};
    c.detection = e, c.imageResolution = i;
    const E = {};
    E.image = n, E.data = c;
    const l = E;
    this.stop();
    const u = {};
    u.imageData = l, u.protoMessage = x, u.webMetadata = r, u.candidateSelectionImages = g, this.onCaptureCallback(u);
  }
  collectAndEscalate(g) {
    if (!this.instructionEscalation) return !1;
    const t = g;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(g) {
    return Date.now() - g;
  }
  getInvalidInstructions(g, t) {
    const e = [];
    return Array.from(g).forEach(([A, i]) => {
      !i && e.push(t[A]);
    }), e;
  }
  async sleep(g) {
    await ri(Math.max($n.max - g, $n.min));
  }
}
Ft = new WeakMap(), gg = new WeakMap();
class cs extends h0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...i }) {
    super(i);
    w(this, "candidateSelectionTime", 0);
    w(this, "candidatesSelectionFramesCount", -2021 + -1 * 29 + 410 * 5);
    w(this, "isInCandidateSelection", !1);
    w(this, "lastImage", null);
    w(this, "bestImage", null);
    w(this, "candidateSelectionImages", []);
    w(this, "fallbackInstruction");
    w(this, "instructionCodeMap");
    w(this, "checkToInstructionCodeMap");
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
    const i = this.getDetectionDetails(A);
    this.onDetection(i, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const n = {};
    n.instructionCode = i.processedImage.instructionCode, n.isValid = e.isValid, n.image = t.image, n.detection = e.detection, this.lastImage = n, await this.sleep(i.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? W.fromCameraError(e) : W.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const i = {};
    i.image = t.image, i.detection = e.detection;
    const n = i;
    this.bestImage = n, this.candidateSelectionImages.push(n);
  }
  tryInitCandidatePhase(t, e) {
    var I;
    if (!(((I = this.lastImage) == null ? void 0 : I.isValid) && e.isValid)) return;
    const i = {};
    i.image = t.image, i.detection = e.detection;
    const n = i;
    this.isNewImageBetter(this.lastImage.detection, n.detection) ? this.bestImage = n : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, n), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 1009 * 4 + -22 * 29 + -3398 * 1 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Fg.minFrames ? t > Fg.minDuration : t > Fg.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new W("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), i = oe((4118 + 5157 * -1 + 2039) / A);
    this.fpsOfAllImages.pushFixed(i);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[-18 * 332 + 5257 + -719 * -1];
    const Q = this.getInstructionCode(r), C = this.collectAndEscalate(Q), x = {};
    return x.detection = t.detection, x.instructionCode = Q, x.isEscalated = C, x.invalidValidators = a, x.isInCandidateSelection = this.isInCandidateSelection, { processedImage: x, detectionTime: A, fps: i, avgFps: oe(mt(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var ae, fe;
class xs extends h0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...A }) {
    super(A);
    Y(this, ae, void (-7101 + -363 * 6 + 1 * 9279));
    Y(this, fe);
    w(this, "fallbackInstruction");
    w(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ng).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    L(this, fe, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && L(this, ae, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Vn.REQUEST_CAPTURE, y(this, fe));
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
    return y(this, ae) ? y(this, ae) === Ng.FIRST_FRAME ? !0 : y(this, ae) === Ng.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? W.fromCameraError(e) : W.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), L(this, ae, void (1601 * -1 + -4573 + 6174));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), i = oe(1e3 / A);
    this.fpsOfAllImages.pushFixed(i);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[5 + 229 * 1 + 78 * -3]), Q = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = Q, { processedImage: C, detectionTime: A, fps: i, avgFps: oe(mt(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), y(this, fe) && document.removeEventListener(Vn.REQUEST_CAPTURE, y(this, fe));
  }
}
ae = new WeakMap(), fe = new WeakMap();
function Es({ captureMode: o, ...g }) {
  return o === Ma.AUTO_CAPTURE ? new cs(g) : new xs(g);
}
function ds({ cameraResolution: o, cameraService: g, customEvent: t }) {
  const { shouldCameraMirror: e } = dQ(t.CONTROL, g), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, xQ(t.CAMERA_PROPS_CHANGED, A), q(() => () => {
    bt.getInstance().restart();
  }, []);
  const i = {};
  return i.shouldCameraMirror = e, i;
}
function ls(o) {
  q(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function us({ captureMode: o, checkToInstructionCodeMap: g, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: i, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: Q }) {
  ls(() => {
    t && t.destroy();
  });
  const C = kA(!1), { appState: x, handleAppStateChange: c, isCameraReady: E } = Se(), { sunfish: l } = Vt(), { analytics: u } = IB(), { cameraResolution: s, cameraService: h, onCameraResolutionChange: m, videoRef: R } = wQ(), M = {};
  M.cameraResolution = s, M.cameraService = h, M.customEvent = A;
  const { shouldCameraMirror: U } = ds(M), D = i0(void (37 * -122 + -7823 + 12337)), j = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && l && E, fA = te((Z) => {
    c(uA.WAITING), a(Z);
  }, [a, c]), $ = te((Z, it) => {
    m(Z.resolution), D.value = Z, r(Z, it);
  }, [r, D, m]);
  q(() => {
    !C.current && j && (C.current = !0, c(uA.RUNNING));
  }, [j, c]), q(() => {
    if (x !== uA.RUNNING || !j) return;
    if (!h || !t) throw new W("Cannot start detection");
    t.imageProcessor.reset();
    const Z = {};
    Z.captureMode = o, Z.analytics = u, Z.cameraService = h, Z.imageProcessor = t.imageProcessor, Z.fallbackInstruction = i, Z.instructionCodeMap = I, Z.checkToInstructionCodeMap = g, Z.sessionToken = Q, Z.samVersion = t.samVersion, Z.createProtoMessage = e, Z.onCaptureCallback = fA, Z.onDetectionCallback = $, Z.instructionEscalation = t.instructionEscalation, Z.imageCropSettings = n;
    const it = Es(Z);
    return t.runDetectionLoop(it), () => {
      t.stopDetectionLoop();
    };
  }, [x, j, t, h, fA, $, Q, D, u, e, I, g, i, o, n]);
  const FA = {};
  return FA.videoRef = R, FA.cameraResolution = s, FA.detectionDetails = D, FA.shouldCameraMirror = U, FA;
}
const hs = () => typeof document < "u" && document.hasFocus();
function fs(o = {}) {
  const g = kA(o), t = kA(hs()), [e, A] = hA(t.current);
  q(() => {
    g.current = o;
  }), q(() => {
    function n(Q) {
      t.current = Q, A(Q);
    }
    function I() {
      Promise.resolve().then(() => {
        var Q, C, x, c;
        !t.current && ((C = (Q = g.current).onFocus) == null || C.call(Q), (c = (x = g.current).onChange) == null || c.call(x, !0)), n(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var Q, C, x, c;
        t.current && ((C = (Q = g.current).onBlur) == null || C.call(Q), (c = (x = g.current).onChange) == null || c.call(x, !1)), n(!1);
      });
    }
    function r() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", I), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", r), () => {
      window.removeEventListener("focus", I), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", r);
    };
  }, []);
  const i = {};
  return i.isWindowFocused = e, i;
}
const f0 = $e(null), on = () => {
  const o = Qe(f0);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}, ps = ({
  assetsDirectoryPath: o,
  captureMode: g,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => {
  var i, n, I;
  return {
    onPhotoTaken: t,
    captureMode: g ?? Ma.AUTO_CAPTURE,
    assetsDirectoryPath: Pa(o),
    sessionToken: e,
    thresholds: {
      faceConfidence: (A == null ? void 0 : A.faceConfidence) ?? bB,
      minFaceSizeRatio: (A == null ? void 0 : A.minFaceSizeRatio) ?? GB,
      maxFaceSizeRatio: (A == null ? void 0 : A.maxFaceSizeRatio) ?? kB,
      sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? SB,
      brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? RB,
      brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? MB,
      outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? NB,
      devicePitchAngleThreshold: (A == null ? void 0 : A.devicePitchAngleThreshold) ?? vB,
      mouth: {
        confidence: ((i = A == null ? void 0 : A.mouth) == null ? void 0 : i.confidence) ?? FB,
        status: {
          min: ((n = A == null ? void 0 : A.mouth) == null ? void 0 : n.status.min) ?? zn.min,
          max: ((I = A == null ? void 0 : A.mouth) == null ? void 0 : I.status.max) ?? zn.max
        }
      },
      leftEye: (A == null ? void 0 : A.leftEye) ?? {
        confidence: Xn
      },
      rightEye: (A == null ? void 0 : A.rightEye) ?? {
        confidence: Xn
      }
    }
  };
};
function ys({
  cameraOptions: o,
  children: g
}) {
  const t = bA(() => ps(o), [o]);
  return /* @__PURE__ */ p(f0.Provider, { value: t, children: g });
}
const Ds = (o, g) => ({ ...o, leftEye: { ...o.leftEye, center: Le(o.leftEye.center, g) }, rightEye: { ...o.rightEye, center: Le(o.rightEye.center, g) }, mouth: { ...o.mouth, center: Le(o.mouth.center, g) }, topLeft: Le(o.topLeft, g), bottomRight: Le(o.bottomRight, g), faceCenter: Le(o.faceCenter, g) }), p0 = (o, g) => {
  const { faceCenter: t, faceSize: e } = o, A = hB(e, g), i = {};
  i.x = t.x, i.y = t.y - A;
  const n = {};
  n.x = t.x + A, n.y = t.y;
  const I = {};
  I.x = t.x, I.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const r = {};
  return r.top = i, r.right = n, r.bottom = I, r.left = a, Ha(r);
}, ws = (o, g) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = g, i = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  Za(o, i, "rgba(255, 0, 0, 0.3)", !0), pt(o, e, "lime");
}, ms = (o, g, t) => {
  const e = p0(g, t);
  Object.values(e).map((A) => pt(o, A, "orange"));
};
function bs({ cameraResolution: o, detectionDetails: g, isImageMirror: t }) {
  const { thresholds: e } = on(), { redfin: A } = Vt(), i = kA(null);
  if (q(() => {
    if (!i.current)
      return;
    i.current.width = o.width, i.current.height = o.height, CB(i.current);
    const u = vo(o), s = Va(
      o,
      e.outOfBoundsThreshold,
      u
    ), h = lB(o);
    g.value && (ws(i.current, g.value.processedImage.detection), ms(
      i.current,
      g.value.processedImage.detection,
      o
    ), Sg(i.current, u, "lime"), Sg(i.current, s, "yellow"), Sg(i.current, h, "blue"), pt(i.current, g.value.processedImage.detection.leftEye.center, "cyan"), pt(i.current, g.value.processedImage.detection.rightEye.center, "cyan"), pt(i.current, g.value.processedImage.detection.mouth.center, "cyan"));
  }, [o, e, g.value]), !g.value)
    return null;
  const {
    avgFps: n,
    detectionTime: I,
    fps: a,
    processedImage: { detection: r, instructionCode: Q, invalidValidators: C, isEscalated: x },
    resolution: c,
    samVersion: E
  } = g.value, l = {
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
    Instruction: Q,
    Resolution: c,
    "Escalated instruction": x,
    "Component version": "7.1.2"
  };
  return E && (l["SAM version"] = E), C.length > 0 && (l["Invalid validators"] = C), /* @__PURE__ */ p(
    nB,
    {
      ref: i,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function Gs(o) {
  return /* @__PURE__ */ p("rect", { fill: "#000", ...o, rx: "50%" });
}
function ks(o, g) {
  const [t, e] = hA(!1), A = () => e((I) => !I), i = "" + t;
  et(() => {
    function I() {
      if (!o.current) return;
      const C = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, C.observe(o.current, x), C;
    }
    function a() {
      var c;
      if (!((c = o.current) != null && c["parentElement"])) return;
      const C = new MutationObserver((E) => {
        E.find((u) => {
          for (const s of u.removedNodes)
            if (s !== (g == null ? void 0 : g.current) && s === o.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((s) => {
            var h;
            s !== (g == null ? void 0 : g.current) && ((h = s.parentElement) == null || h.removeChild(s));
          });
        });
      }), x = {};
      return x.childList = !0, C.observe(o.current.parentElement, x), C;
    }
    const r = I(), Q = a();
    return () => {
      Q == null || Q.disconnect(), r == null || r.disconnect();
    };
  });
  const n = {};
  return n.key = i, n;
}
const Ns = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Fs({ cutOut: o, height: g, ignoreElement: t, width: e }) {
  const A = kA(null), { key: i } = ks(A, t);
  return /* @__PURE__ */ p("div", { ref: A, style: Ns, children: /* @__PURE__ */ p("svg", { viewBox: `0 0 ${e} ${g}`, children: [
    /* @__PURE__ */ p("defs", { children: [
      /* @__PURE__ */ p("mask", { id: "placeholder", children: [
        /* @__PURE__ */ p("rect", { fill: "#fff", height: "100%", width: "100%" }),
        o
      ] }),
      /* @__PURE__ */ p(
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
            /* @__PURE__ */ p("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ p("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
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
    /* @__PURE__ */ p("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, i);
}
function Ss({ fullOverlay: o, ignoreElement: g, resolution: t }) {
  const e = uB(t), A = `${e.height * 100}%`, i = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ p(
    Fs,
    {
      cutOut: o || /* @__PURE__ */ p(Gs, { height: A, width: i, x: n, y: I }),
      height: t.height,
      ignoreElement: g,
      width: t.width
    }
  );
}
function Rs({ cameraResolution: o, children: g, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = Vt(), { appState: i, freemiumOverlayState: n } = Se(), I = kA(null), a = n !== Jo.HIDDEN && A !== Qi.Higher && o, r = n === Jo.VISIBLE, Q = o && i === uA.RUNNING;
  return /* @__PURE__ */ p(JA, { children: [
    a && /* @__PURE__ */ p(
      Ss,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: o
      }
    ),
    g,
    Q && /* @__PURE__ */ p("div", { ref: I, children: /* @__PURE__ */ p(
      bs,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const Ms = (o, g) => {
  if (_B()) {
    const t = {};
    t.candidateSelectionImages = g;
    const e = t;
    bt.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function vs(o, g) {
  const { FaceContent: t } = Xe.v4, e = await u0(o), A = await Bs(g), i = {};
  i.image = e, i.metadata = A;
  const n = i, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.faceContent = a, ss(r);
}
async function Ls(o, g) {
  const t = await vs(o, g);
  return Qs(t);
}
function Js({ controller: o, onPhotoTakenInternal: g }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = on(), i = te(({ candidateSelectionImages: a, imageData: r, protoMessage: Q, webMetadata: C }) => {
    Ms(_a.FACE, a), e(r, Q);
    const x = {};
    x.cameraProperties = C, g == null || g(x);
  }, [g, e]), n = te(({ fps: a, processedImage: r }, Q) => {
    const C = {};
    C.code = r.instructionCode, C.isEscalated = r.isEscalated, za(Ae.INSTRUCTION_CHANGED, C), o && sQ(Ae.DETECTED_FACE_CHANGED, r.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const x = {};
    x.detection = r.detection, x.fps = a, x.image = Q, x.isInCandidateSelection = r.isInCandidateSelection, x.invalidValidators = r.invalidValidators, cQ(Ae.FACE_DETECTION, x);
  }, [o]), I = {};
  return I.captureMode = t, I.controller = o, I.createProtoMessage = Ls, I.onCapture = i, I.onDetection = n, I.sessionToken = A, I.customEvent = Ae, I.fallbackInstruction = gA.FACE_NOT_PRESENT, I.instructionCodeMap = gA, I.checkToInstructionCodeMap = AB, I.imageCropSettings = WB, us(I);
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const y0 = Symbol("Comlink.proxy"), Us = Symbol("Comlink.endpoint"), Ys = Symbol("Comlink.releaseProxy"), Ug = Symbol("Comlink.finalizer"), wo = Symbol("Comlink.thrown"), D0 = (o) => typeof o == "object" && o !== null || typeof o == "function", Ws = {
  canHandle: (o) => D0(o) && o[y0],
  serialize(o) {
    const { port1: g, port2: t } = new MessageChannel();
    return m0(o, g), [t, [t]];
  },
  deserialize(o) {
    return o.start(), G0(o);
  }
}, Os = {
  canHandle: (o) => D0(o) && wo in o,
  serialize({ value: o }) {
    let g;
    return o instanceof Error ? g = {
      isError: !0,
      value: {
        message: o.message,
        name: o.name,
        stack: o.stack
      }
    } : g = { isError: !1, value: o }, [g, []];
  },
  deserialize(o) {
    throw o.isError ? Object.assign(new Error(o.value.message), o.value) : o.value;
  }
}, w0 = /* @__PURE__ */ new Map([
  ["proxy", Ws],
  ["throw", Os]
]);
function Hs(o, g) {
  for (const t of o)
    if (g === t || t === "*" || t instanceof RegExp && t.test(g))
      return !0;
  return !1;
}
function m0(o, g = globalThis, t = ["*"]) {
  g.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Hs(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: i, type: n, path: I } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(le);
    let r;
    try {
      const Q = I.slice(0, -1).reduce((x, c) => x[c], o), C = I.reduce((x, c) => x[c], o);
      switch (n) {
        case "GET":
          r = C;
          break;
        case "SET":
          Q[I.slice(-1)[0]] = le(A.data.value), r = !0;
          break;
        case "APPLY":
          r = C.apply(Q, a);
          break;
        case "CONSTRUCT":
          {
            const x = new C(...a);
            r = Zs(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: c } = new MessageChannel();
            m0(o, c), r = js(x, [x]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (Q) {
      r = { value: Q, [wo]: 0 };
    }
    Promise.resolve(r).catch((Q) => ({ value: Q, [wo]: 0 })).then((Q) => {
      const [C, x] = Xo(Q);
      g.postMessage(Object.assign(Object.assign({}, C), { id: i }), x), n === "RELEASE" && (g.removeEventListener("message", e), b0(g), Ug in o && typeof o[Ug] == "function" && o[Ug]());
    }).catch((Q) => {
      const [C, x] = Xo({
        value: new TypeError("Unserializable return value"),
        [wo]: 0
      });
      g.postMessage(Object.assign(Object.assign({}, C), { id: i }), x);
    });
  }), g.start && g.start();
}
function Ks(o) {
  return o.constructor.name === "MessagePort";
}
function b0(o) {
  Ks(o) && o.close();
}
function G0(o, g) {
  return Di(o, [], g);
}
function ro(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function k0(o) {
  return Ye(o, {
    type: "RELEASE"
  }).then(() => {
    b0(o);
  });
}
const _o = /* @__PURE__ */ new WeakMap(), zo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const g = (_o.get(o) || 0) - 1;
  _o.set(o, g), g === 0 && k0(o);
});
function Ts(o, g) {
  const t = (_o.get(g) || 0) + 1;
  _o.set(g, t), zo && zo.register(o, g, o);
}
function Ps(o) {
  zo && zo.unregister(o);
}
function Di(o, g = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(i, n) {
      if (ro(e), n === Ys)
        return () => {
          Ps(A), k0(o), e = !0;
        };
      if (n === "then") {
        if (g.length === 0)
          return { then: () => A };
        const I = Ye(o, {
          type: "GET",
          path: g.map((a) => a.toString())
        }).then(le);
        return I.then.bind(I);
      }
      return Di(o, [...g, n]);
    },
    set(i, n, I) {
      ro(e);
      const [a, r] = Xo(I);
      return Ye(o, {
        type: "SET",
        path: [...g, n].map((Q) => Q.toString()),
        value: a
      }, r).then(le);
    },
    apply(i, n, I) {
      ro(e);
      const a = g[g.length - 1];
      if (a === Us)
        return Ye(o, {
          type: "ENDPOINT"
        }).then(le);
      if (a === "bind")
        return Di(o, g.slice(0, -1));
      const [r, Q] = fI(I);
      return Ye(o, {
        type: "APPLY",
        path: g.map((C) => C.toString()),
        argumentList: r
      }, Q).then(le);
    },
    construct(i, n) {
      ro(e);
      const [I, a] = fI(n);
      return Ye(o, {
        type: "CONSTRUCT",
        path: g.map((r) => r.toString()),
        argumentList: I
      }, a).then(le);
    }
  });
  return Ts(A, o), A;
}
function qs(o) {
  return Array.prototype.concat.apply([], o);
}
function fI(o) {
  const g = o.map(Xo);
  return [g.map((t) => t[0]), qs(g.map((t) => t[1]))];
}
const N0 = /* @__PURE__ */ new WeakMap();
function js(o, g) {
  return N0.set(o, g), o;
}
function Zs(o) {
  return Object.assign(o, { [y0]: !0 });
}
function Xo(o) {
  for (const [g, t] of w0)
    if (t.canHandle(o)) {
      const [e, A] = t.serialize(o);
      return [
        {
          type: "HANDLER",
          name: g,
          value: e
        },
        A
      ];
    }
  return [
    {
      type: "RAW",
      value: o
    },
    N0.get(o) || []
  ];
}
function le(o) {
  switch (o.type) {
    case "HANDLER":
      return w0.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function Ye(o, g, t) {
  return new Promise((e) => {
    const A = Vs();
    o.addEventListener("message", function i(n) {
      !n.data || !n.data.id || n.data.id !== A || (o.removeEventListener("message", i), e(n.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, g), t);
  });
}
function Vs() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const _s = "SAM v1.44.6 for idcards";
class zs {
  constructor(g, t, e, A, i) {
    w(this, "isDetectorInitialized", !1);
    w(this, "samVersion", null);
    w(this, "detection");
    this.imageProcessor = g, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = i;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(g) {
    await this.detector.initSamModule(location.href, g);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(g) {
    if (!g || !this.areVersionsCompatible(g))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new W("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = g;
  }
  runDetectionLoop(g) {
    this.detection && this.detection.stop(), this.detection = g, this.detection.run();
  }
  stopDetectionLoop() {
    var g, t;
    (g = this.detection) == null || g.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(g) {
    this.imageProcessor.validationService.thresholds = g;
  }
  areVersionsCompatible(g) {
    return g === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(g, t) {
    return "" + t.replace(Wa, "") + g;
  }
}
class Xs {
  constructor() {
    w(this, "imageProcessor");
    w(this, "assetsDirectoryPath");
    w(this, "instructionEscalation");
    w(this, "compatibleSamVersion");
    w(this, "validationService");
    w(this, "detector");
  }
  setImageProcessor(g) {
    return this.imageProcessor = g, this;
  }
  setAssetsDirectoryPath(g) {
    return this.assetsDirectoryPath = g, this;
  }
  setCompatibleSamVersion(g) {
    return this.compatibleSamVersion = g, this;
  }
  setInstructionEscalation(g) {
    return this.instructionEscalation = g, this;
  }
  setValidationService(g) {
    return this.validationService = g, this;
  }
  setDetector(g) {
    return this.detector = g, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new W("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new W("AssetsDirectoryPath is required");
    if (!this.detector) throw new W("Detector is required");
    if (!this.compatibleSamVersion) throw new W("CompatibleSamVersion is required");
    if (!this.validationService) throw new W("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (2061 * 1 + -3020 + 959), this.assetsDirectoryPath = void (-10 * -604 + 7553 + 591 * -23), this.instructionEscalation = void (9645 + -98 * 66 + -353 * 9), this.compatibleSamVersion = void (373 * -20 + 2038 + 5422), this.detector = void (7835 + 1567 * -5), this.validationService = void (-4 * 1468 + 7475 + 1 * -1603), this;
  }
}
class $s {
  constructor() {
    w(this, "detectionRecord", []);
    w(this, "imagesWithTimestampForDuplicateDetection", new Zi(UB));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: g, timestamp: t }) {
    const e = g.length / KB, A = e / (7 * 1247 + 8655 + 3 * -5794), i = g.length / (669 + 78 * -89 + -1255 * -5), n = await Cs(g.slice(i - A, i + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(g) {
    return { data: $B(g), resolution: { width: g.width, height: g.height } };
  }
  async processDetectedObject({ detectedObject: g, image: t, imageData: e, timestamp: A }) {
    const i = Ha(g), n = this.validationService.validateDetectedObject(i, t);
    if (n.result.get("isPresent")) {
      const I = {};
      I.image = e, I.timestamp = A, this.collectImagesForDuplicateDetection(I);
    }
    return this.detectionRecord.push(g), { detection: i, validationResult: n.result, isValid: n.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Ac {
  constructor() {
    w(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new W("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class gn extends zs {
  constructor(t, e, A, i, n, I) {
    super(A, i, n, e, I);
    w(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], za(Ae.INSTRUCTION_CHANGED, t, sB);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
w(gn, "_instance");
class ec extends Xs {
  build() {
    return this.validateDependencies(), new gn(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const tc = "/dot-assets/face/dot-CJjgvBNx.js";
class oc extends $s {
  constructor(t, e) {
    super();
    w(this, "className", "FaceImageProcessor");
    w(this, "detector");
    w(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = vo(t), A = ja(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), i = {};
    i.height = t.height, i.width = t.width;
    let n = await this.detector.detect(A.data, A.resolution, i);
    n = Ds(n, vo(t));
    const I = {};
    return I.detectedObject = n, I.image = t, I.imageData = A.data, I.timestamp = e, this.processDetectedObject(I);
  }
}
var Ke, pe, ye;
class gc {
  constructor(g) {
    Y(this, Ke);
    Y(this, pe);
    Y(this, ye);
    L(this, Ke, g), L(this, pe, /* @__PURE__ */ new Map());
  }
  validate() {
    y(this, Ke).forEach((g) => {
      y(this, pe).set(g.name, g.evaluate());
    }), L(this, ye, void (2040 + -120 * 17));
  }
  isValid() {
    return y(this, ye) === void (91 * 62 + -4 * -1444 + 346 * -33) && L(this, ye, Array.from(y(this, pe).values()).every((g) => g)), y(this, ye);
  }
  get result() {
    return y(this, pe);
  }
  get validators() {
    return y(this, Ke);
  }
}
Ke = new WeakMap(), pe = new WeakMap(), ye = new WeakMap();
var St, De;
class NA {
  constructor(g, t) {
    Y(this, St);
    Y(this, De);
    L(this, St, g), L(this, De, t);
  }
  get threshold() {
    return y(this, De);
  }
  get name() {
    return y(this, St);
  }
  isValueBelowThreshold(g) {
    return g < y(this, De);
  }
  isValueAboveThreshold(g) {
    return g > y(this, De);
  }
}
St = new WeakMap(), De = new WeakMap();
const ic = "isNotDim";
var Rt;
class nc extends NA {
  constructor(t, e) {
    super(ic, t);
    Y(this, Rt);
    L(this, Rt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Rt));
  }
}
Rt = new WeakMap();
const Ic = "isNotSmall";
var Mt;
class ac extends NA {
  constructor(t, e) {
    super(Ic, t);
    Y(this, Mt);
    L(this, Mt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Mt));
  }
}
Mt = new WeakMap();
const rc = "isNotBright";
var vt;
class Cc extends NA {
  constructor(t, e) {
    super(rc, t);
    Y(this, vt);
    L(this, vt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, vt));
  }
}
vt = new WeakMap();
const Bc = "isPresent";
var Lt;
class Qc extends NA {
  constructor(t, e) {
    super(Bc, t);
    Y(this, Lt);
    L(this, Lt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Lt));
  }
}
Lt = new WeakMap();
const sc = "isSharp";
var Jt;
class cc extends NA {
  constructor(t, e) {
    super(sc, t);
    Y(this, Jt);
    L(this, Jt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Jt));
  }
}
Jt = new WeakMap();
const xc = "isLeftEyePresent";
var Ut;
class Ec extends NA {
  constructor(t, e) {
    super(xc, t);
    Y(this, Ut);
    L(this, Ut, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Ut));
  }
}
Ut = new WeakMap();
const dc = "isMouthPresent";
var Yt;
class lc extends NA {
  constructor(t, e) {
    super(dc, t);
    Y(this, Yt);
    L(this, Yt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Yt));
  }
}
Yt = new WeakMap();
const uc = "isMouthScoreNotTooLow";
var Wt;
class hc extends NA {
  constructor(t, e) {
    super(uc, t);
    Y(this, Wt);
    L(this, Wt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Wt));
  }
}
Wt = new WeakMap();
const fc = "isMouthScoreNotTooHigh";
var Ot;
class pc extends NA {
  constructor(t, e) {
    super(fc, t);
    Y(this, Ot);
    L(this, Ot, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Ot));
  }
}
Ot = new WeakMap();
const yc = "isNotLarge";
var Ht;
class Dc extends NA {
  constructor(t, e) {
    super(yc, t);
    Y(this, Ht);
    L(this, Ht, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Ht));
  }
}
Ht = new WeakMap();
const wc = "isNotPitched";
var Kt;
const an = class an extends NA {
  constructor(t, e) {
    super(wc, an.calculatePitchAngleAccelerationThreshold(t));
    Y(this, Kt);
    L(this, Kt, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return LB * Math.sin(t * (Math.PI / 180));
  }
  evaluate() {
    const { z: t } = y(this, Kt) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Kt = new WeakMap();
let wi = an;
const mc = "isRightEyePresent";
var Tt;
class bc extends NA {
  constructor(t, e) {
    super(mc, t);
    Y(this, Tt);
    L(this, Tt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Tt));
  }
}
Tt = new WeakMap();
const Gc = "isNotOutOfBounds";
var Pt, we;
class kc extends NA {
  constructor(t, e, A) {
    super(Gc, t);
    Y(this, Pt);
    Y(this, we);
    L(this, Pt, e), L(this, we, A);
  }
  evaluate() {
    const t = Va(y(this, we), this.threshold, vo(y(this, we))), e = p0(y(this, Pt), y(this, we));
    return oQ(e, t);
  }
}
Pt = new WeakMap(), we = new WeakMap();
class Nc {
  static getFaceValidationInstance(g, t, e, A) {
    return new gc([new Qc(g.faceConfidence, t.confidence), new Ec(g.leftEye.confidence, t.leftEye.confidence), new bc(g.rightEye.confidence, t.rightEye.confidence), new ac(g.minFaceSizeRatio, t.faceSize), new Dc(g.maxFaceSizeRatio, t.faceSize), new cc(g.sharpnessThreshold, t.sharpness), new nc(g.brightnessLowThreshold, t.brightness), new Cc(g.brightnessHighThreshold, t.brightness), new kc(g.outOfBoundsThreshold, t, e), new wi(g.devicePitchAngleThreshold, A), new lc(g.mouth.confidence, t.mouth.confidence), new pc(g.mouth.status.max, t.mouth.status), new hc(g.mouth.status.min, t.mouth.status)]);
  }
}
class Fc extends Ac {
  constructor() {
    super(...arguments);
    w(this, "className", "FaceValidationService");
    w(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = Nc.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
function Sc() {
  const { handleError: o } = Se(), { acceleration: g } = hQ(), { assetsDirectoryPath: t, thresholds: e } = on(), [A, i] = hA();
  q(() => {
    (async () => {
      const a = gn.getWorkerPath(tc, t), r = {};
      r.type = "module";
      const Q = new Worker(new URL(a, import.meta.url), r), C = G0(Q), x = await new C(), c = new Fc(), E = new oc(x, c), l = new ec().setDetector(x).setValidationService(c).setImageProcessor(E).setCompatibleSamVersion(_s).setAssetsDirectoryPath(t).build();
      try {
        await l.init(), i(l);
      } catch (u) {
        if (u instanceof Error) {
          o(W.fromError(u));
          return;
        }
      }
    })();
  }, [o, t]), q(() => {
    A && A.setThresholds(e);
  }, [A, e]), q(() => {
    A && A.setAcceleration(g);
  }, [g, A]);
  const n = {};
  return n.controller = A, n;
}
function Rc() {
  const { isCameraReady: o } = Se(), { sunfish: g } = Vt(), { controller: t } = Sc(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: i, videoRef: n } = Js({
    controller: t
  });
  return /* @__PURE__ */ p(JA, { children: /* @__PURE__ */ p(
    Rs,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: i,
      children: /* @__PURE__ */ p(
        VC,
        {
          ref: n,
          $isImageMirror: i,
          $isVisible: g && o,
          autoPlay: !0,
          id: cB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
function Mc({ ...o }) {
  const { handleAppStateChange: g, setIsCameraReady: t } = Se();
  return fs({
    onBlur: () => {
      t(!1), g(uA.LOADING);
    },
    onFocus: () => {
      t(!0), g(uA.RUNNING);
    }
  }), /* @__PURE__ */ p(ys, { cameraOptions: o, children: /* @__PURE__ */ p(Rc, {}) });
}
function vc({ children: o, ...g }) {
  const t = g.cameraFacing ?? ji.FRONT;
  return /* @__PURE__ */ p(NQ, { cameraFacing: t, children: o });
}
function Lc({ initAppState: o, onError: g }) {
  const [t, e] = hA(o), [A, i] = hA(), [n, I] = hA(!1), a = kA(g);
  q(() => {
    a.current = g;
  }, [g]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = i, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function Jc({ onError: o }) {
  const { appState: g, error: t, isCameraReady: e, onErrorRef: A, setAppState: i, setError: n, setIsCameraReady: I } = Lc({
    initAppState: uA.LOADING,
    onError: o
  }), a = UQ(g), r = te(
    (C) => {
      gI(Ae.STATE_CHANGED, { appState: uA.ERROR, error: C }), I(!1), A.current(C), n(C), i(uA.ERROR);
    },
    [I, A, n, i]
  ), Q = te(
    (C) => {
      gI(Ae.STATE_CHANGED, { appState: C }), i(C);
    },
    [i]
  );
  return {
    appState: g,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: I,
    handleAppStateChange: Q,
    handleError: r,
    error: t
  };
}
var nn = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(nn || {});
class Uc {
  constructor() {
    w(this, "appKey", "");
    w(this, "deviceId", "");
  }
  async countlyFetch(g) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, i = "https://innovatrics.count.ly/i?", n = {};
    n.app_key = this.appKey, n.device_id = this.deviceId;
    const I = Io(n);
    try {
      await fetch("" + i + I + "&" + g, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(g, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = g;
    const e = { _app_version: Ka() }, A = { organization: Ta(window.location.href) }, i = Io({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(i);
  }
  async endSession() {
    const g = {};
    g.end_session = "1";
    const t = Io(g);
    await this.countlyFetch(t);
  }
  async sendEvent(g, t, e) {
    const A = {};
    A.key = g, A.count = 1, A.dur = e, A.segmentation = t;
    const i = [A], n = Io({ events: JSON.stringify(i) });
    await this.countlyFetch(n);
  }
  async sendAutoCaptureEvent(g, t) {
    await this.sendEvent(nn.AUTO_CAPTURE, g, t);
  }
}
const Ct = new Uc();
class Yc {
  constructor() {
    w(this, "countly", Ct);
  }
  createSegmentation(g) {
    return { appVersion: Ka(), ...g };
  }
  init(g) {
    if (qB()) return;
    const t = RQ();
    Ct.init(t, g);
  }
  endSession() {
    Ct.endSession();
  }
  walleye(g, t) {
    const e = {};
    e.nocturne = g, e.customer = t;
    const A = this.createSegmentation(e);
    Ct.sendAutoCaptureEvent(A);
  }
  trackEscalated(g) {
    const t = {};
    t.instructionCode = g;
    const e = this.createSegmentation(t);
    Ct.sendEvent(nn.ESCALATION_TRIGGER, e);
  }
}
class Wc extends Yc {
  trackCaptureProcess({ averageFps: g, captureProcessDurationInMs: t, detection: e, deviceName: A, facingMode: i, imageResolution: n, instructionSet: I }) {
    if (!e) return;
    const a = LQ(t), r = this.createSegmentation({ faceSize: nI(e.faceSize), confidence: nI(e.confidence), camera: MQ(A, i), imageResolution: n.width + "x" + n.height, averageFps: JQ(g), captureTime: vQ(a), instructionSet: I });
    this.countly.sendAutoCaptureEvent(r, a);
  }
}
const Oc = new Wc();
let F;
const XA = new Array(17 * 421 + -970 * 10 + 2671 * 1).fill(void 0);
XA.push(void 0, null, !0, !1);
function mi(o) {
  return XA[o];
}
let qA = -4161 * -2 + 3813 + -12135, dt = null;
function mo() {
  return (dt === null || dt.byteLength === -853 * 2 + 1035 * 1 + 671) && (dt = new Uint8Array(F.memory.buffer)), dt;
}
const bo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Hc = typeof bo.encodeInto == "function" ? function(o, g) {
  return bo.encodeInto(o, g);
} : function(o, g) {
  const t = bo.encode(o);
  g.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function kt(o, g, t) {
  if (t === void 0) {
    const I = bo.encode(o), a = g(I.length, 12556 + -837 * 15) >>> -6601 * -1 + -7327 + 726;
    return mo().subarray(a, a + I.length).set(I), qA = I.length, a;
  }
  let e = o.length, A = g(e, -239 * 19 + 1 * 9173 + -4631) >>> 0;
  const i = mo();
  let n = 1 * -9543 + -7502 + 17045;
  for (; n < e; n++) {
    const I = o.charCodeAt(n);
    if (I > 141 * -29 + -3211 + 7427) break;
    i[A + n] = I;
  }
  if (n !== e) {
    n !== 6 * 75 + 4 * 2266 + 142 * -67 && (o = o.slice(n)), A = t(A, e, e = n + o.length * (-373 * 20 + 590 + 6873), -6 * 1063 + -7837 + -7108 * -2) >>> 2302 + -1 * 2302;
    const I = mo().subarray(A + n, A + e), a = Hc(o, I);
    n += a.written, A = t(A, e, n, 8906 * -1 + 5847 + -3060 * -1) >>> -4099 * 2 + 5051 + -3 * -1049;
  }
  return qA = n, A;
}
function F0(o) {
  return o == null;
}
let lt = null;
function TA() {
  return (lt === null || lt.byteLength === 1 * -1933 + -6226 + 199 * 41) && (lt = new Int32Array(F.memory.buffer)), lt;
}
let Dt = XA.length;
function Kc(o) {
  o < -5954 + 3209 * 1 + 411 * 7 || (XA[o] = Dt, Dt = o);
}
function S0(o) {
  const g = mi(o);
  return Kc(o), g;
}
const bi = {};
bi.ignoreBOM = !0, bi.fatal = !0;
const R0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", bi) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && R0.decode();
function $o(o, g) {
  return o = o >>> 2125 + -2125 * 1, R0.decode(mo().subarray(o, o + g));
}
function Gi(o) {
  Dt === XA.length && XA.push(XA.length + (5 * -1912 + -9847 + 19408));
  const g = Dt;
  return Dt = XA[g], XA[g] = o, g;
}
let ut = null;
function M0() {
  return (ut === null || ut.byteLength === -427 * -19 + 194 * 19 + -1 * 11799) && (ut = new Uint32Array(F.memory.buffer)), ut;
}
function pI(o, g) {
  const t = g(o.length * 4, 4) >>> 0, e = M0();
  for (let A = -4264 * 2 + -33 * 211 + 15491; A < o.length; A++)
    e[t / (-7044 + 7048 * 1) + A] = Gi(o[A]);
  return qA = o.length, t;
}
function yI(o, g) {
  o = o >>> 3428 * -1 + -239 * 1 + 193 * 19;
  const t = M0(), e = t.subarray(o / (-3354 + -2 * -4411 + 2732 * -2), o / (2971 + 2 * -4349 + 5731) + g), A = [];
  for (let i = -5573 + 1 * -2789 + 8362 * 1; i < e.length; i++)
    A.push(S0(e[i]));
  return A;
}
function Tc(o, g) {
  const t = kt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), e = qA, A = kt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), i = qA, n = F.is_mobile_supported(t, e, A, i);
  return In.__wrap(n);
}
const ki = {};
ki.register = () => {
}, ki.unregister = () => {
};
const DI = typeof FinalizationRegistry > "u" ? ki : new FinalizationRegistry((o) => F.__wbg_licensevalidationresult_free(o >>> 283 * 13 + 9721 + -13400));
class In {
  static __wrap(g) {
    g = g >>> -9775 + 654 * 15 + -35;
    const t = Object.create(In.prototype);
    return t.__wbg_ptr = g, DI.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const g = this.__wbg_ptr;
    return this.__wbg_ptr = -7559 + -11 * 13 + -2 * -3851, DI.unregister(this), g;
  }
  free() {
    const g = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(g);
  }
  constructor(g, t, e, A, i) {
    var n = F0(t) ? 0 : kt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), I = qA;
    const a = pI(e, F.__wbindgen_malloc), r = qA, Q = pI(A, F.__wbindgen_malloc), C = qA, x = kt(i, F.__wbindgen_malloc, F.__wbindgen_realloc), c = qA, E = F.licensevalidationresult_new(g, n, I, a, r, Q, C, x, c);
    return this.__wbg_ptr = E >>> -1 * -1046 + -1 * -6666 + -7712, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 7969 * 1 + -27 * -328 + 3365 * -5;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var g = TA()[e / (2576 * -1 + -193 * -4 + 1808) + (-1619 * -6 + -1286 + -7 * 1204)], t = TA()[e / (-7577 + -8771 * -1 + -1190) + (-3086 + -1 * 5557 + 8644)];
      let A;
      return g !== 0 && (A = $o(g, t).slice(), F.__wbindgen_free(g, t * (-3581 + -3879 * -1 + 33 * -9), 6 * 1163 + 7187 + -14164)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var g = TA()[A / (8431 * 1 + -3329 + 5098 * -1) + (-1141 * -3 + -2131 * 2 + -839 * -1)], t = TA()[A / (6115 + -291 * 21) + (7886 + 335 * 13 + 85 * -144)], e = yI(g, t).slice();
      return F.__wbindgen_free(g, t * (-439 * 2 + 18 * -179 + 456 * 9), -190 + 3 * -1884 + 5846), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-1948 + -982 * -2);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var g = TA()[A / (-3128 + 29 * 108) + (37 * -89 + -96 + 3389 * 1)], t = TA()[A / 4 + (499 * 17 + 7e3 + -15482 * 1)], e = yI(g, t).slice();
      return F.__wbindgen_free(g, t * 4, 1 * 7559 + 1 * 2759 + 191 * -54), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-4245 + -11 * 502 + 9783 * 1);
    }
  }
  get customer() {
    let g, t;
    try {
      const i = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(i, this.__wbg_ptr);
      var e = TA()[i / 4 + (-5455 + -1091 * -5)], A = TA()[i / (1492 * -4 + -2506 + 8478) + (4997 * 1 + 5437 + 1 * -10433)];
      return g = e, t = A, $o(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-2875 + 7 * -1003 + -177 * -56), F.__wbindgen_free(g, t, -5074 + -127 * -30 + 1265);
    }
  }
}
async function Pc(o, g) {
  if (typeof Response == "function" && o instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(o, g);
    } catch (e) {
      if (o.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await o.arrayBuffer();
    return await WebAssembly.instantiate(t, g);
  } else {
    const t = await WebAssembly.instantiate(o, g);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = o, e;
    } else return t;
  }
}
function qc() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(g, t) {
    const e = mi(t), A = typeof e == "string" ? e : void 0;
    var i = F0(A) ? 8063 * 1 + 9392 + -3491 * 5 : kt(A, F.__wbindgen_malloc, F.__wbindgen_realloc), n = qA;
    TA()[g / (2 * 1756 + 3 * -109 + 3181 * -1) + (1407 + 4226 * -2 + 7046)] = n, TA()[g / (3 * 3061 + 1315 + -10494) + (-5907 + 103 * -31 + 9100)] = i;
  }, o.wbg.__wbindgen_object_drop_ref = function(g) {
    S0(g);
  }, o.wbg.__wbindgen_string_new = function(g, t) {
    const e = $o(g, t);
    return Gi(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Gi(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(g) {
    return mi(g).getTime();
  }, o.wbg.__wbindgen_throw = function(g, t) {
    throw new Error($o(g, t));
  }, o;
}
function jc(o, g) {
  return F = o.exports, v0.__wbindgen_wasm_module = g, lt = null, ut = null, dt = null, F;
}
async function v0(o) {
  if (F !== void 0) return F;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcCACAAQQhqIARBCGooAgA2AgAgBEEQaiQAC48DAQF/IwBBMGsiAiQAAn8CQAJAAkACQCAALQAAQQFrDgMBAgMACyACIAAoAgQ2AgAgAiAALQABOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkEDNgIcIAJBoIzAADYCGCACQQk2AgwgAUEYaigCACEAIAIgAkEIajYCICACIAI2AhAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQeSMwAA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAiAAKAIENgIAIAIgAC0AAToAByACQSRqQgI3AgAgAkEUakEENgIAIAJBAzYCHCACQYCNwAA2AhggAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACNgIQIAIgAkEHajYCCCABKAIUIAAgAkEYahAvDAELIAJBJGpCADcCACACQQE2AhwgAkGojcAANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvCyACQTBqJAALhwMCBX8BfiMAQUBqIgUkAEEBIQcCQCAALQAEDQAgAC0ABSEJIAAoAgAiBigCHCIIQQRxRQRAIAYoAhRBhc/AAEGsqMAAIAkbQQJBAyAJGyAGQRhqKAIAKAIMEQAADQEgBigCFCABIAIgBigCGCgCDBEAAA0BIAYoAhRBj5/CAEECIAYoAhgoAgwRAAANASADIAYgBCgCDBEBACEHDAELIAlFBEAgBigCFEGvqMAAQQMgBkEYaigCACgCDBEAAA0BIAYoAhwhCAsgBUEBOgAbIAVBNGpBkKjAADYCACAFIAYpAhQ3AgwgBSAFQRtqNgIUIAUgBikCCDcCJCAGKQIAIQogBSAINgI4IAUgBigCEDYCLCAFIAYtACA6ADwgBSAKNwIcIAUgBUEMaiIINgIwIAggASACEDENACAIQY+fwgBBAhAxDQAgAyAFQRxqIAQoAgwRAQANACAFKAIwQbKowABBAiAFKAI0KAIMEQAAIQcLIABBAToABSAAIAc6AAQgBUFAayQAIAAL7QIBCH8jAEEQayIHJAAgB0EIaiAAIAEQkwECQAJAIAcoAggiAkGBgICAeEcEQCACRQ0BAAsgAEEoaiEIQQQhBAJ/IAAoAigiBkEETQRAIABBCGohAyAIIQUgBgwBCyAAQQRqIQUgACgCCCEDIAYhBCAAKAIECyECAkAgBSACIARJBH8gAyACQQN0aiEDA0AgAUUNAiADQgA3AwAgA0EIaiEDIAFBAWshASAEIAJBAWoiAkcNAAsgBAUgAgs2AgAgAUUNAiAAQQRqIQYgAEEIaiEJA0ACfyAIKAIAIgRBBUkEQCAEIQMgCSEFQQQhBCAIDAELIAYoAgAhAyAJKAIAIQUgBgshAiADIARGBEAgABCgASAAKAIEIQMgACgCCCEFIAYhAgsgBSADQQN0akIANwMAIAIgAigCAEEBajYCACABQQFrIgENAAsMAgsgBSACNgIADAELQezwwABBEUGA8cAAEN4BAAsgB0EQaiQAC9ECAQR/IABBjAJqIgggAUEMbGohBQJAIAFBAWoiBiAALwGSAyIHSwRAIAUgAikCADcCACAFQQhqIAJBCGooAgA2AgAMAQsgCCAGQQxsaiAFIAcgAWsiCEEMbBC9AiAFQQhqIAJBCGooAgA2AgAgBSACKQIANwIAIAAgBkEYbGogACABQRhsaiAIQRhsEL0CCyAAIAFBGGxqIgIgAykDADcDACACQRBqIANBEGopAwA3AwAgAkEIaiADQQhqKQMANwMAIABBmANqIQIgAUECaiIDIAdBAmoiBUkEQCACIANBAnRqIAIgBkECdGogByABa0ECdBC9AgsgAiAGQQJ0aiAENgIAIAAgB0EBaiIDOwGSAyAFIAZLBEAgAUECdCAAakGcA2ohAgNAIAIoAgAiBCABQQFqIgE7AZADIAQgADYCiAIgAkEEaiECIAEgA0cNAAsLC98CAQl/IwBBgAFrIgMkACADQQhqIAIQ4AEgAygCDCADKAIIIAEgAhC+AiEGIAJBAWshASACQQF2IQcDQCAEIAZqIgUtAAAhCCAFIAEgBmoiBS0AADoAACAFIAg6AAAgAUEBayEBIAcgBEEBaiIERw0ACwJAIAIEQCAAIAYgAhAsDAELIANBAjYCHCADQgQ3AhQgA0EANgIgIANBADYCSCADQSBqIgIgA0EUahAzIANB0ABqIgEgAkEwEL4CGiABQQRyIQcgA0HYAGohBSADQfgAaiEIIAMoAlghCgNAIAUhAiADKAJ4IgEhBCABQQVJIgtFBEAgAygCVCEEIAohAgsCQCAERQ0AIARBA3QgAmpBCGspAwBCAFINACAIIQQgC0UEQCAHIQQgAygCVCEBCyABRQ0BIAQgAUEBazYCAAwBCwsgACADQdAAakEwEL4CGgsEQCAGECILIANBgAFqJAALywICBX4GfyMAQSBrIgokACABIAMgASADSRsiDEEDdCENAkACQCAMRQ0AIAAgDWohCyACIQkgDCEOA0AgACAEIAApAwAiBCAJKQMAIgZ9Igd8Igg3AwAgByAIVq0gBSAEIAZUrX18IgRCP4chBSAAQQhqIQAgCUEIaiEJIA5BAWsiDg0ACyAEUA0AIAFBA3QgDEEDdGshAANAIAAEQCALIAQgCykDAHwiBjcDACAAQQhrIQAgC0EIaiELIAUgBCAGVq18IgRCP4chBSAEQgBSDQEMAgsLIAQgBYRQRQ0BCyACIA1qIQkgA0EDdCANayEAA0AgAARAIABBCGshACAJKQMAIAlBCGohCVANAQwCCwsgCkEgaiQADwsgCkEUakIANwIAIApBATYCDCAKQdz/wAA2AgggCkGMrMIANgIQIApBCGpB5P/AABDrAQAL7gcCCX4JfyMAQdAAayINJAAgASgCKCIOQQRNBH8gAUEIagUgASgCBCEOIAEoAggLIQwCQCAOBEAgAlANASAMQQhrIREgDkEDdCEOIA1BGGohEgNAIA4gEWoiEykDACILIQQjAEEgayIMJABCACEDQgAhBkIAIQdCACEKIwBBIGsiDyQAAkACQAJAAkAgBVBFBEAgAiAFVg0DIAIgBVENASAFIAUgAoAiCiACfn0hAyACQoCAgIAQWg0CIARC/////w+DIANCIIYgBEIgiIQiAyADIAKAIgMgAn59QiCGhCIFIAIgBSACgCIFfn0hBCADQiCGIAWEIQYgA0IgiCAKhCEKQgAhAwwECyAEIAQgAoAiBiACfn0hBAwDCyAEIAQgBYAiBiAFfn0hBEIBIQoMAgsgA1AgAiAEVnENASACQgGIIQggAkI/hiEJQoCAgICAgICAgH8hBQNAAkAgAyAIfSAEIAlUrX0iB0IAWQRAIAQgCX0hBCAFIAaEIQYgB1ANASAHIQMLIAhCP4YgCUIBiIQhCSAFQgGIIQUgCEIBiCEIDAELCyAEIAKAIgMgBoQhBiAEIAIgA359IQRCACEDDAELIAIhAwJAQT8gAnmnIhAgBXmnIhRrQUBrIBAgFEYbIhBBwABxRQRAIBBFDQFCACAQQT9xrSIDhiACQQAgEGtBP3GtiIQhByACIAOGIQMMAQsgAyAQQT9xrYYhB0IAIQMLIA8gAzcDACAPIAc3AwhCASAQQT9xrYYhAyAPQQhqKQMAIQggDykDACEJA0ACQCAFIAh9IAQgCVStfSIHQgBZBEAgBCAJfSEEIAMgBoQhBiAHUA0BIAchBQsgCEI/hiAJQgGIhCEJIANCAYghAyAIQgGIIQgMAQsLIAQgAoAiAyAGhCEGIAQgAiADfn0hBEIAIQMLIAwgBDcDECAMIAY3AwAgDEEYaiADNwMAIAwgCjcDCCAPQSBqJAAgDCkDACEDIA1BEGoiDyAMQQhqKQMANwMIIA8gAzcDACAMQSBqJAAgDSANKQMQIgMgEikDACACELABIBMgAzcDACALIA0pAwB9IQUgDkEIayIODQALCyANQSBqIgwgAUEwEL4CGiAMQQRyIQ8gDUEoaiEQIA1ByABqIREgDSgCKCESA0AgECEBIA0oAkgiDiEMIA5BBUkiE0UEQCANKAIkIQwgEiEBCwJAIAxFDQAgDEEDdCABakEIaykDAEIAUg0AIBEhDCATRQRAIA0oAiQhDiAPIQwLIA5FDQEgDCAOQQFrNgIADAELCyAAIA1BIGpBMBC+AiAFNwMwIA1B0ABqJAAPC0Hg+sAAQRlByPrAABDeAQAL1AIBBn8gASACQQF0aiEJIABBgP4DcUEIdiEKIABB/wFxIQwCQAJAAkACQANAIAFBAmohCyAHIAEtAAEiAmohCCAKIAEtAAAiAUcEQCABIApLDQQgCCEHIAsiASAJRw0BDAQLIAcgCEsNASAEIAhJDQIgAyAHaiEBA0AgAkUEQCAIIQcgCyIBIAlHDQIMBQsgAkEBayECIAEtAAAgAUEBaiEBIAxHDQALC0EAIQIMAwsgByAIQeCywAAQugEACyAIIARB4LLAABC4AQALIABB//8DcSEHIAUgBmohA0EBIQIDQCAFQQFqIQACQCAFLQAAIgHAIgRBAE4EQCAAIQUMAQsgACADRwRAIAUtAAEgBEH/AHFBCHRyIQEgBUECaiEFDAELQYCXwgBBK0HQssAAEN4BAAsgByABayIHQQBIDQEgAkEBcyECIAMgBUcNAAsLIAJBAXEL2AIBAX8jAEHwAGsiByQAIAcgAjYCDCAHIAE2AgggByAENgIUIAcgAzYCECAHQQI2AhwgB0H6psAAQfimwAAgAEH/AXEbNgIYAkAgBSgCAEUEQCAHQcwAakEGNgIAIAdBxABqQQY2AgAgB0HkAGpCAzcCACAHQQM2AlwgB0Gsp8AANgJYIAdBBzYCPCAHIAdBOGo2AmAgByAHQRBqNgJIIAcgB0EIajYCQAwBCyAHQTBqIAVBEGopAgA3AwAgB0EoaiAFQQhqKQIANwMAIAcgBSkCADcDICAHQeQAakIENwIAIAdB1ABqQQY2AgAgB0HMAGpBBjYCACAHQcQAakEKNgIAIAdBBDYCXCAHQeCnwAA2AlggB0EHNgI8IAcgB0E4ajYCYCAHIAdBEGo2AlAgByAHQQhqNgJIIAcgB0EgajYCQAsgByAHQRhqNgI4IAdB2ABqIAYQ6wEAC8ICAgd/AX4jAEEgayIDJAAgASACQQxsaiEGAkACfyACRQRAIANBADYCHCADIAI2AhggA0EENgIUIAEhBCACDAELQbixwgAtAAAaIAJBAnQQCiIFRQ0BIANBADYCHCADIAI2AhggAyAFNgIUIAEhBCAGAn8DQCAEQQxqIAQoAgAiCEUNARogCCAEKQIEIgpCIIinEAIhCSAKpwRAIAgQIgsgBSAJNgIAIAVBBGohBSAHQQFqIQcgBEEMaiIEIAZHDQALIAYLIgRrQQxuCyEFIAMgBzYCHCAEIAZHBEADQCAEQQRqKAIABEAgBCgCABAiCyAEQQxqIQQgBUEBayIFDQALCyACBEAgARAiCyADQRBqIANBHGooAgA2AgAgAyADKQIUNwMIIAMgA0EIahC8ASAAIAMpAwA3AwAgA0EgaiQADwsAC9kCAgR/AX4jAEEQayICJAAgAkEANgIEAn8CQAJAIAFBgAFPBEAgAUGAEEkNASABQYCABE8NAiACIAFBP3FBgAFyOgAGIAIgAUEMdkHgAXI6AAQgAiABQQZ2QT9xQYABcjoABUEDDAMLIAIgAToABEEBDAILIAIgAUE/cUGAAXI6AAUgAiABQQZ2QcABcjoABEECDAELIAIgAUE/cUGAAXI6AAcgAiABQQZ2QT9xQYABcjoABiACIAFBDHZBP3FBgAFyOgAFIAIgAUESdkEHcUHwAXI6AARBBAshASACQQhqIAAoAggoAgAgAkEEaiABECsgAi0ACCIEQQRHBEAgACgCBCEBIAIpAwghBiAALQAAIgNBBE0gA0EDR3FFBEAgASgCACIDIAFBBGooAgAiBSgCABEEACAFKAIEBEAgAxAiCyABECILIAAgBjcCAAsgAkEQaiQAIARBBEcL1gIBCn8jAEEQayIEJAAgAAJ/AkACQAJAAkAgASgCBCICIAEoAggiBkEEak8EQCACIAZrIgNBACACIANPGyEIIAEoAgAiCSAGaiEKQQAhAwNAIAMgBmohBSADIAhGDQIgASAFQQFqIgU2AgggAyAKai0AAEGYj8IAai0AACILQf8BRg0DIAdBBHQgC2ohByADQQFqIgNBBEcNAAsgACAHOwECQQAMBQsgASACNgIIIAQgASgCACACIAIQtgFBuLHCAC0AABogBCgCBCEDIAQoAgAhAkEUEAoiAUUNAiABIAI2AgwgAUEENgIADAMLIAUgAkH4jMIAELcBAAsgBEEIaiAJIAIgBRC2AUG4scIALQAAGiAEKAIMIQMgBCgCCCECQRQQCiIBRQ0AIAEgAjYCDCABQQw2AgAMAQsACyAAIAE2AgQgASADNgIQQQELOwEAIARBEGokAAvOAgICfAJ/IwBBEGsiByQAIAO6IQUgAAJ/AkACQAJAAkAgBCAEQR91IghzIAhrIghBtQJPBEADQCAFRAAAAAAAAAAAYQ0FIARBAE4NAiAFRKDI64XzzOF/oyEFIARBtAJqIgQgBEEfdSIIcyAIayIIQbQCSw0ACwsgCEEDdEHI9sEAaisDACEGIARBAE4NASAFIAajIQUMAwsgByABKAIAIAEoAgQgASgCCBC2AUG4scIALQAAGiAHKAIEIQIgBygCACEEDAELIAUgBqIiBZlEAAAAAAAA8H9iDQEgB0EIaiABKAIAIAEoAgQgASgCCBC2AUG4scIALQAAGiAHKAIMIQIgBygCCCEEC0EUEAoiAQRAIAEgBDYCDCABQQ42AgAgACABNgIEIAEgAjYCEEEBDAILAAsgACAFIAWaIAIbOQMIQQALNgIAIAdBEGokAAv/AwEFfyMAQRBrIgMkAAJAAn8CQCABQYABTwRAIANBADYCDCABQYAQSQ0BIAFBgIAESQRAIAMgAUE/cUGAAXI6AA4gAyABQQx2QeABcjoADCADIAFBBnZBP3FBgAFyOgANQQMMAwsgAyABQT9xQYABcjoADyADIAFBBnZBP3FBgAFyOgAOIAMgAUEMdkE/cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const g = qc();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await Pc(await o, g);
  return jc(t, e);
}
function wI(o, g, t, e, A) {
  return IA(e - 536, o);
}
function IA(o, g) {
  const t = Ag();
  return IA = function(e, A) {
    e = e - (4665 + 8183 * 1 + -12420);
    let i = t[e];
    if (IA.GItNVK === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      IA.jnahof = Q, o = arguments, IA.GItNVK = !0;
    }
    const I = t[9317 + 1 * -886 + 8431 * -1], a = e + I, r = o[a];
    return r ? i = r : (IA.CwHahx === void 0 && (IA.CwHahx = !0), i = IA.jnahof(i, A), o[a] = i), i;
  }, IA(o, g);
}
function Ag() {
  const o = ["mdH/W5fdW4JdRSkSWPG7W7VcIG", "WPj/hczvWPStW61IaSkaWQdcLW", "vCoCwNtdQmoaWOtcPu8Uma", "wmoErfddKmksqvpdTbqHW7ih", "Ar8SW6ukBvS", "WRldMCoejCosWOlcNa3dRKpdKmksyG", "WPFcIqldGSk3", "W4W/uCo0za", "CbSKWQn8W6n6ggS", "BNPslq", "WPvGemkUne7cOcidWQ3cPru/", "W7yOzmkXW5ZcGeTua8kS", "k8kVW5f2hW", "r8oRWPxdUCkI", "W5bZhxyT", "d8kBW70FW4y", "kfL1WQb5", "xgZcGepdTxyAW6W", "W44Ov3ve", "Ab/cGr/cSW", "Fs/dRmobWPldQ8kbkW", "hSooWOBdRmkOg2C", "eCkehYG", "lu3dGeddICoSiHOSbH8fW5q", "W4vfWRhcV1m", "WPqbWPTqqW", "W4a+W63cJ8oAdCkSWQldOmoq", "mSk8WQGddq", "jwruWPmU", "ySo5x8kQW7W", "W4OMsxKE", "j03dHuddJmoLkH84cbaGW6G", "W6acWPhdU0K", "W4zLWQVcV0y", "jKJdIH7cKCkEuWqs", "CH/cHHVcLq", "nSk+lJrB", "lwRdVComWPO", "ySk6W6LLta", "cmosW6mvW4e", "ymo1sSkWW7G", "WPNcNZpdJtTFWPFcTLq8W6pcPei", "WPZcImohnhCDW6ldM8k/oN4", "vCkIcSopW6m", "ymo5uCkMW7K", "omofW5OYrSk7W7VcQCkBCa", "W74cWO7dV3O", "WQKkWPpdU0C", "WRPKWQSYW5S", "WPRcMJpdHJTyW77cHgqpW5VcGW", "WPnUhmkRneRcPHiwWRFcGdy2", "WPyGvYSxCmkUFWjm", "baWdm8kd", "ChvinfS"];
  return Ag = function() {
    return o;
  }, Ag();
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return IA(r - 85, Q);
  }
  function e(a, r, Q, C, x) {
    return IA(Q - -777, r);
  }
  function A(a, r, Q, C, x) {
    return IA(C - -585, r);
  }
  function i(a, r, Q, C, x) {
    return IA(r - 743, C);
  }
  const n = o();
  function I(a, r, Q, C, x) {
    return IA(C - -982, r);
  }
  for (; ; )
    try {
      if (-parseInt(e(-312, "6OIM", -302, -314, -324)) / 1 + parseInt(e(-327, "1erh", -301, -318, -326)) / 2 + parseInt(I(-489, "Pk(n", -519, -516, -498)) / 3 * (parseInt(I(-530, "oKXm", -543, -550, -572)) / 4) + parseInt(t(518, 527, "SSkU", 536, 546)) / 5 * (parseInt(A(-87, "GF2@", -101, -105, -128)) / 6) + -parseInt(i(1215, 1220, 1239, "L*xg", 1195)) / 7 * (-parseInt(I(-546, "JdxY", -541, -527, -538)) / 8) + -parseInt(t(521, 516, "kiih", 492, 510)) / 9 + parseInt(i(1192, 1195, 1215, "JdxY", 1181)) / 10 * (-parseInt(t(508, 523, "6N^L", 517, 541)) / 11) === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ag, -516952 + 184882 * 2 + 755904);
function Bt(o, g, t, e, A) {
  return IA(e - -540, o);
}
function Zc(o, g, t, e, A) {
  return IA(A - -714, e);
}
function Yg(o, g, t, e, A) {
  return IA(o - 668, t);
}
function mI(o, g, t, e, A) {
  return IA(e - 187, A);
}
var kI;
class Vc {
  constructor() {
    w(this, kI, !1);
  }
  async [(kI = Yg(1135, 1147, "WWxw") + Bt("l#4a", -96, -104, -90) + Bt("NTMk", -51, -82, -59), Yg(1098, 1081, "$d)("))](g) {
    function t(I, a, r, Q, C) {
      return wI(Q, a - 180, r - 227, C - -253);
    }
    function e(I, a, r, Q, C) {
      return Zc(I - 189, a - 233, r - 66, C, I - 156);
    }
    function A(I, a, r, Q, C) {
      return Bt(I, a - 74, r - 309, Q - 264);
    }
    function i(I, a, r, Q, C) {
      return Bt(a, a - 294, r - 146, r - 667);
    }
    function n(I, a, r, Q, C) {
      return Yg(Q - 143, a - 107, a);
    }
    try {
      const I = g + (n(1276, "3glp", 1243, 1257, 1243) + "/") + AI;
      await v0(I), this[n(1245, "JdxY", 1269, 1251, 1277) + n(1239, "kiih", 1232, 1239, 1264) + t(701, 733, 694, "SSkU", 717)] = !0;
    } catch {
      this[i(542, "k(nQ", 562) + e(-94, -86, -73, -97, "m*T]") + A("l#4a", 173, 203, 189)] = !1, console[i(583, "L*xg", 570)](AI + (n(1275, "WWxw", 1254, 1279) + A("1erh", 188, 179, 175) + n(1246, "v78O", 1237, 1248) + i(571, "aExx", 584) + i(567, "dh0i", 575) + i(576, "l#4a", 588) + e(-109, -98, -113, -116, "HmuU") + e(-122, -141, -133, -116, "09@6") + i(619, "y(dj", 600) + A("pDUO", 196, 184, 182) + i(608, "jhOq", 586) + t(710, 712, 714, "1erh", 722) + e(-89, -106, -108, -95, "#nB[") + i(577, "JdxY", 583) + "n."));
    }
  }
  [mI(594, 626, 628, 620, "jhOq") + mI(648, 637, 630, 641, "bmbV") + wI("WWxw", 993, 993, 989) + "ed"]() {
    function g(t, e, A, i, n) {
      return Bt(t, e - 130, A - 111, n - 217);
    }
    return this[g("$d)(", 129, 166, 168, 151) + g("bmbV", 149, 130, 142, 122) + g("09@6", 164, 143, 136, 137)];
  }
}
class Wg extends Error {
  constructor() {
    super(...arguments);
    w(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function RA(o, g, t, e, A) {
  return z(t - -156, g);
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return z(x - -125, a);
  }
  function e(a, r, Q, C, x) {
    return z(r - 705, a);
  }
  function A(a, r, Q, C, x) {
    return z(Q - -353, C);
  }
  function i(a, r, Q, C, x) {
    return z(C - -845, a);
  }
  for (var n = o(); ; )
    try {
      var I = -parseInt(i("j7bC", -345, -309, -314, -323)) / 1 * (parseInt(e("zU3H", 1205, 1237, 1209, 1177)) / 2) + -parseInt(e("(9JR", 1192, 1172, 1185, 1165)) / 3 * (-parseInt(A(122, 159, 140, "5]6m", 128)) / 4) + parseInt(t("]liW", 437, 382, 429, 413)) / 5 + -parseInt(A(173, 145, 165, "eJok", 158)) / 6 + parseInt(t("Y)^X", 374, 335, 380, 366)) / 7 + parseInt(e("bon3", 1183, 1189, 1205, 1204)) / 8 * (-parseInt(i("zBwQ", -387, -334, -365, -368)) / 9) + parseInt(e("Qhzf", 1240, 1225, 1272, 1256)) / 10;
      if (I === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(eg, 99759 * -5 + -40343 * 9 + -1143958 * -1);
function eg() {
  var o = ["qSkyDIr4", "W7S5vsaf", "qConWQlcLXfMWRFcQhlcKcW9", "WQVcJmklW7DT", "uZTDW53dNq", "WRLKqmkJW7VcJabfW5eWW6JcGCo2", "B8k8W5jmcq", "W4xcUmkrEmobW7q2", "WPybfq", "WOPXs8kqDmkXvSo0DmoUWPtcUmom", "D8k8W5rCba", "CXVcLSoBWOGlWODOdSkqrua", "W7GXsca+", "dSo2W5e8gG", "fCkrW6SEWPnEWQpcGhNcKa", "ECkeahFdSW", "F8o+W5hcKKi", "WRJdHchdR3S", "xKpcGCotebpdMxqSa8oCWPC", "WQtdQsrpsG", "z8oFWPuAW6TqgSoiWPj9", "lCkAW68", "W5z1W5JcQeO8W6/cGSk8r2lcHmkN", "WPKAhSounq", "h8oMWQqLp3DEWQbv", "hmoQWP/cMG", "WQ/dHdS", "W5qhBtlcH3RdPmk9mG", "WRhdJIC", "WO0SWPJdUHi", "W6e9vq", "A8k6WOlcKCoL", "Fa0PW6VdJCoiyW", "WRdcMSkNW55M", "WOHtka", "W6mwWORcHSkN", "kZqRlmk/", "W7m1bmkvW44", "smorWP5aDa", "W640qIO", "W4ShfCoAja", "DSoXW5BcKeK", "W5D9W53cQsHRWQVcKmkBwW", "qmooWQJcLH9KW77cINVcGtm6ua", "F8kPWP/cJmo/", "CCopWQVcK2ayWRSIWR5HuCk5oa", "q8o8WP0UWRG", "hSkwW60yW6aZWO3cSfJcKSkhBG", "WRxdHtldVhC", "qIXbW7hdHa", "WPVcUHOcW68", "g8kjW6pdLKK", "z8kybW", "W6iQW6ZdOmoTWOFcT8o9W5SN", "yCk7WQZcJmo3", "WRTpW53dQSktWP7dGhVcV8ow", "m03dGSkhW5u", "W54MhCoDma", "W7ddNmkbWRVcS8ovl8kOp3G", "jSknW7pdMcu", "W5jYeCoaW54", "WQnZWRy", "fCoNWQPyFHmGWPvxW4RdMbav"];
  return eg = function() {
    return o;
  }, eg();
}
function bI(o, g, t, e, A) {
  return z(A - -340, g);
}
function z(o, g) {
  var t = eg();
  return z = function(e, A) {
    e = e - (-629 * 4 + 6752 + -3758);
    var i = t[e];
    if (z.lzDzyZ === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      z.AXqynm = I, o = arguments, z.lzDzyZ = !0;
    }
    var a = t[-1 * 7302 + 3985 + -3317 * -1], r = e + a, Q = o[r];
    return Q ? i = Q : (z.RMnSJZ === void 0 && (z.RMnSJZ = !0), i = z.AXqynm(i, A), o[r] = i), i;
  }, z(o, g);
}
function Co(o, g, t, e, A) {
  return z(A - 794, e);
}
function Bo(o, g, t, e, A) {
  return z(o - -161, A);
}
var Te, qt;
class GI {
  constructor(g) {
    Y(this, Te);
    Y(this, qt);
    function t(I, a, r, Q, C) {
      return z(I - -60, Q);
    }
    this[e(-42, -76, "C2@Q", -67, -50) + e(-102, -104, "]fm@", -72, -100)] = g;
    function e(I, a, r, Q, C) {
      return z(C - -583, r);
    }
    function A(I, a, r, Q, C) {
      return z(I - 318, C);
    }
    function i(I, a, r, Q, C) {
      return z(I - 158, C);
    }
    function n(I, a, r, Q, C) {
      return z(Q - -219, C);
    }
    try {
      L(this, Te, g[i(688, 687, 675, 662, "Z3Bv") + A(857, 882, 852, 834, "&#%e") + i(657, 672, 687, 633, "PzvY")] && JSON[t(419, 418, 410, "]fm@", 447)](g[i(677, 685, 674, 682, "Hq4j") + A(858, 846, 854, 829, "Z5@o") + t(474, 461, 463, "%H19", 464)])), L(this, qt, g[n(313, 303, 304, 304, "U!wu") + e(-93, -81, "(RCU", -72, -80)]);
    } catch (I) {
      console[A(816, 844, 811, 796, "RjBA")](I);
    }
  }
  get [RA(322, "@vSW", 330) + "id"]() {
    function g(e, A, i, n, I) {
      return RA(e - 158, e, n - 154);
    }
    function t(e, A, i, n, I) {
      return RA(e - 357, I, i - -64);
    }
    return this[g("%rz%", 509, 518, 502) + g("!&oB", 531, 494, 507)][t(299, 290, 286, 260, "&#%e") + g("&OD$", 497, 447, 479)];
  }
  get [RA(373, "nr9X", 354) + "s"]() {
    function g(A, i, n, I, a) {
      return Co(A - 12, i - 486, n - 498, i, I - -645);
    }
    function t(A, i, n, I, a) {
      return Co(A - 495, i - 412, n - 485, I, i - -1038);
    }
    function e(A, i, n, I, a) {
      return RA(A - 372, a, i - 1088);
    }
    return this[t(247, 252, 222, "&OD$") + e(1462, 1446, 1449, 1415, "6L*r")][g(652, "vGOC", 677, 660) + "s"];
  }
  get [Bo(376, 390, 344, 384, "(RCU") + RA(360, "zU3H", 351)]() {
    function g(A, i, n, I, a) {
      return RA(A - 335, I, A - 509);
    }
    function t(A, i, n, I, a) {
      return Co(A - 482, i - 24, n - 274, i, I - -1667);
    }
    function e(A, i, n, I, a) {
      return RA(A - 97, i, A - 415);
    }
    return this[g(875, 863, 883, "Z5@o") + t(-367, "6FJu", -365, -371)][e(776, "%rz%") + t(-349, "eJok", -348, -379)];
  }
  get [RA(342, "PzvY", 334) + "b"]() {
    return y(this, Te);
  }
  get [RA(379, "]liW", 368) + Co(1289, 1276, 1272, "PzvY", 1295)]() {
    return y(this, qt);
  }
  get [RA(340, "%rz%", 371) + RA(314, "N4o#", 332) + bI(201, "Z3Bv", 187, 162, 173) + bI(192, "(RCU", 184, 182, 172)]() {
    var A, i;
    function g(n, I, a, r, Q) {
      return Bo(r - -607, I - 155, a - 489, r - 191, n);
    }
    function t(n, I, a, r, Q) {
      return Bo(n - -231, I - 265, a - 443, r - 19, r);
    }
    function e(n, I, a, r, Q) {
      return Bo(a - -73, I - 429, a - 453, r - 450, r);
    }
    return !!((i = (A = y(this, Te)) == null ? void 0 : A[g("sHyI", -220, -256, -232) + e(272, 275, 291, "N4o#")]) != null && i[g("LhaM", -261, -273, -276) + g("df%l", -254, -236, -260) + t(97, 102, 79, "6L*r") + g("(RCU", -289, -264, -283) + g("eJok", -239, -220, -236) + g("PzvY", -271, -221, -247) + e(298, 292, 295, "7yJh") + "d"]);
  }
}
Te = new WeakMap(), qt = new WeakMap();
function KA(o, g, t, e, A) {
  return aA(o - 368, t);
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return aA(Q - -664, a);
  }
  function e(I, a, r, Q, C) {
    return aA(Q - -801, a);
  }
  function A(I, a, r, Q, C) {
    return aA(C - 245, a);
  }
  function i(I, a, r, Q, C) {
    return aA(a - 95, r);
  }
  const n = o();
  for (; ; )
    try {
      if (parseInt(t(-591, "Ekya", -521, -516, -622)) / 1 + -parseInt(A(462, "d7lQ", 489, 653, 541)) / 2 * (-parseInt(A(575, "gsjE", 407, 421, 497)) / 3) + -parseInt(t(-287, "sPOQ", -234, -347, -234)) / 4 * (parseInt(t(-503, "6eqm", -318, -432, -451)) / 5) + -parseInt(A(398, "LMbB", 412, 359, 386)) / 6 + -parseInt(i(372, 343, "Qaly", 254, 379)) / 7 * (parseInt(t(-361, "gsjE", -476, -405, -499)) / 8) + parseInt(t(-509, "w9h[", -481, -446, -452)) / 9 * (parseInt(e(-443, "u@PU", -627, -561, -657)) / 10) + parseInt(t(-364, "tHwC", -313, -379, -379)) / 11 === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(tg, -123983 * 2 + -477991 * -1 + 272616);
function oA(o, g, t, e, A) {
  return aA(g - -370, A);
}
function aA(o, g) {
  const t = tg();
  return aA = function(e, A) {
    e = e - (17 * 237 + -4144 + 23 * 11);
    let i = t[e];
    if (aA.vkFRcX === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      aA.LwmtmF = Q, o = arguments, aA.vkFRcX = !0;
    }
    const I = t[3097 + -37 * 47 + -1358 * 1], a = e + I, r = o[a];
    return r ? i = r : (aA.kKPubK === void 0 && (aA.kKPubK = !0), i = aA.LwmtmF(i, A), o[a] = i), i;
  }, aA(o, g);
}
function pA(o, g, t, e, A) {
  return aA(e - -602, g);
}
function cA(o, g, t, e, A) {
  return aA(e - -63, t);
}
function tg() {
  const o = ["ngVcNCouW7i", "Dw3cRYNcUa", "WPfaW61rgW", "dbdcNGJcSG", "cCkwDSkGWQ8", "WPr5W4tcNZW", "zdNcSvldHG", "W4vNemkXyG", "bSk0EX/dTq", "WQWMWO0", "Ff7dKmk8W50", "hSkGWR1SnG", "W4/cMqVcN8oz", "W74Bc1mh", "qqdcUdS3", "wCoQa07cQmoLpqRcUYxdI8k5bCo8", "C0ldTCkyW48", "EHpcVN8p", "BsdcOSkQur0JWQJdNmo2WPFdR1y", "zSo6WQDHWPzDW70", "WRbvW5tcOW", "v8kjc1bh", "W5pdVfmYoa", "pxhcOSoyW4e", "ySo9pa", "W4z6f8kWDa", "W7xcHNO4WO3dVmoG", "qCk6WP7dNG", "WRDsW4BcPrO", "BspcPSkRwrLZWOldMConWPFdPG", "omoTsbhcPG", "W5BdNM7dP34", "AZ8HBgi", "yYdcPLe", "BZC2AMq", "W57dOWRcKxK", "jCofvaVcTW", "bmk3vrZdVW", "WRDuW4BdRbi", "WRvsW5hcQru", "q3RdJmkmEa", "odpcPrpcTq", "n8oPW7vQW58", "WOSaW5/cPKu", "jxdcOSo8W6O", "omkrWOH3jG", "FXlcU3e", "bCoEmgzSdSkjoG", "W7JcMYlcQfq", "WPTgWPviW6m", "qZpcVu/dMG", "W5fgbmkYyW", "rCkiewr0", "AmkWWQi6WQpdLKbIzIBdLf8", "W49mqCkXWOG", "qZpcU1FdHW", "dSoVqaOE", "mqdcG3W", "o8olWPHkWRy", "vmkuc3Pu", "mxhdT8oEbW", "nCoVW6bNW7i", "lSomCCkNba", "otJcSbFcKa", "cCkkD8kQW70", "na7cMwBcTa", "fSoIWOddOCol", "WRbuW5W", "W4fTaCk7yW", "qxZdGSojDq", "W5CXBGxcPa", "WRbyW5FcOGG", "W45TfW", "W5lcH8kOlJa", "WRBdVLvVoG", "mtFcQHW", "WOKCW53dJvS", "lCk4WQldQ1y", "FmoUW79s", "kWpcHqJcRW", "pColWOvwWRC", "yKZdTCkZ", "ymoghHVdPW", "oCocuW", "WONcIMnCWPm", "rxtdJmopEq", "udpcVuRdGa", "WQCVWO1VBW", "W6xdKCkximkr", "vwVcQWNcPa", "W77cRq7cIuG", "W78urcVcJG", "aCkDDW", "C8o9imkDW4u", "oJpcTXhcQa", "pMddU8oG", "f1iB", "WP5mWPndW74", "W7aLyZBcOG", "jeJdRYPjWPtdUfNdQmkVnSos", "CW7cR3ej", "WQ7cOfKpWRO", "WRdcT8o6z8kWWRiNxmoojCkIeSo/", "EHxcVNSv", "sqBcRXS0", "kCoyWPHlWQ0", "W4bTc8kSyW", "EutdPmk4W4a", "kSomA8kqdG", "W7RdPSkjmSke", "jCkRF8oBWOnbWOBcRW9SW4f0WOO", "WPRcPeqrW78", "W6/dQCkV", "ECony27dLG", "D8onhIhdNq", "eCkafMbi", "hLGDWPKM", "AeFdMLldQ0nhWOT2WPOuWQe", "W4NcO8krh8ki", "W6/dQCkVfmoZ", "rqJcRZ0X", "W5jZx8kBWPS", "p8oTsaZcQG", "W5NdP0WY", "n3xdP8oWca", "z8owWOnZWQLkW6O", "DKJdQCkUW4S", "raFcSIO", "wCkhdxzo", "WO/dSaDfha", "eJNdOZBcJW", "W4/dHcv6ggGU", "yb3cSxCF", "W5lcN8kHmtW", "DCkTWOJdJGO", "W5pdOwu+pW", "jCozxMnT", "pXpcHwhcQq", "f8oVW7DRW70", "W5hdSLO", "WRvpW77cPrG", "lmomWP/dJ3a", "W73dSutdU3C", "WR0PyJZcOa", "d8kkASk2W7W", "lSklWPr/yW", "amoqWOpdQ8oA", "umksewy", "WQVcQKu5WR4", "EmoZoSkkW58", "lmo9WQJcQG", "WRvsW5y", "mmklwwjT", "rIWNyhG", "DCody0JdKW", "r8oMsb0o", "zv/dQmkRW4C", "lrdcGa/cVW", "W5nabSk0Ca", "WQPebs7dIW", "WRHpW5FcGbi", "cvGh", "h0uBWRm5", "W6FdO8kSFW", "ghegWRm+", "lvyBWRiI", "WPZdVGfUga", "p8ouWO8", "WQxcPemFWRC", "v8oub8kqW5a", "DX/cQq", "WPfhW7fwbW", "W57dOueK", "W5dcHSk+fJy", "vctcPNxdMG", "W797ACkOWO8", "AM3cPG", "A0LjW5BcT8oFxNK", "W5NdHwldSwm", "WPhdVXXF", "CwpcGCoeW4W", "ysJcUu4n", "W7eLAshcOG", "DmoghCkIW6u", "lmoBD8kmgq", "omoqWQ/dR1q", "l8kszrRdLG", "W54aW5hcTvRcMmk3", "dmk7ubJdPa", "W7SJyJZcTa", "WOvaWOq", "W7tdMc3dHL8", "iCoot3K", "ACohcG", "WP9ehI/dJq", "WRbAW57cPqe", "ECoXk8khW4q", "cSkzWOzmWQC", "lGtcMu3cSa", "WPTCW6rn", "cSo3WPJdP8oh", "ACkYWQy6WQhdLNLPDHJdSv0", "W7BdNKddS0C", "W7JcNqVcUW", "nMdcMSoYW5C", "WRbiW63cUHO", "EGJcQdn5", "zCogfxXf", "FSoqEfJdIa", "WQ7cSSopqmoAW7ldISo7W7KjrxNcJG", "ntJcPLZcRa", "WQqKWP9+oG", "h8k/rbC", "D2xcUW", "j8ooDG", "EmkDmmouuSoEp8kkW6LrW6j1WQddMq", "W47cMqVcSmoy", "ySo+z1X0oHq", "WQqUWOTKkW", "W73dMehdRLe", "c8kPuqRdMG", "axBdPWhcIGddL8k0rLJdSH8", "gSkXra", "W5NdGN7dTN8", "WRvuW5u", "mmofrgG5", "rbRcHcG4", "WOqDW5FcKeq", "axxdOWdcGGtcH8kEq2pdSHBdQa", "tW5yW65/w8ouDsFdI8kCr04", "pbtcMcRcSG", "W53cLmk+", "yConcX/dGG", "ECoVW7HzoG", "b8ogjCkNja", "c8oIW6nfW54", "ytSXA28", "W49HbSk6Aa", "ENdcPX/cUq"];
  return tg = function() {
    return o;
  }, tg();
}
function yA(o, g, t, e, A) {
  return aA(A - 759, g);
}
var NI, FI, SI;
class _c {
  constructor(g) {
    w(this, SI);
    w(this, FI, [pA(-548, "jXxC", -434, -428) + KA(609, 638, "U4kx") + "ic", pA(-334, "@v@%", -336, -276) + yA(1045, "w9h[", 1165, 1109, 1105) + "ic"]);
    w(this, NI);
    function t(e, A, i, n, I) {
      return aA(e - 633, i);
    }
    this[t(780, 703, "&8)3") + t(1001, 1086, "jXxC") + "d"] = g;
  }
  async [(SI = oA(-139, -61, -166, 32, "YDza") + "se", FI = oA(-70, -107, -181, -103, "xDQF") + KA(539, 591, "YDza") + yA(1052, "xDQF", 1050, 1035, 1111) + KA(733, 672, "Bw^i"), NI = yA(1038, "Iav2", 1019, 1050, 998) + yA(1021, "sPOQ", 982, 854, 918), yA(990, "3@#[", 984, 911, 917))](g) {
    function t(I, a, r, Q, C) {
      return cA(I - 134, a - 165, r, Q - -801);
    }
    function e(I, a, r, Q, C) {
      return oA(I - 74, r - 57, r - 377, Q - 62, a);
    }
    const A = await this[t(-644, -657, "gsjE", -659) + e(20, "d7lQ", 58, 65) + n(929, 904, 872, "gsjE")](g);
    await Promise[n(646, 765, 721, "WXo6") + n(946, 937, 936, "$QWj")]([this[n(682, 745, 863, "Iav2") + n(770, 868, 834, "fKJd") + "d"][t(-736, -575, "%32^", -654)](g), this[e(-58, "6eqm", -1, -95) + t(-390, -600, "mgd]", -497) + "e"](A)]);
    function i(I, a, r, Q, C) {
      return KA(r - -970, a - 57, Q);
    }
    function n(I, a, r, Q, C) {
      return oA(I - 312, a - 971, r - 456, Q - 195, Q);
    }
    this[e(-234, "Ekya", -125, -123) + t(-770, -636, "YDza", -673) + i(-301, -226, -226, "@*fG")]();
  }
  async [yA(1125, "U4kx", 1101, 1112, 1123) + oA(-242, -201, -217, -318, "6eqm") + "se"](g) {
    function t(I, a, r, Q, C) {
      return cA(I - 172, a - 7, r, a - -684);
    }
    function e(I, a, r, Q, C) {
      return yA(I - 462, C, r - 463, Q - 177, a - -467);
    }
    function A(I, a, r, Q, C) {
      return KA(a - -1074, a - 137, Q);
    }
    function i(I, a, r, Q, C) {
      return KA(C - 312, a - 292, a);
    }
    function n(I, a, r, Q, C) {
      return cA(I - 297, a - 271, I, Q - 889);
    }
    try {
      if (i(905, "S$Xq", 965, 744, 853) !== A(-601, -506, -427, "LMbB", -593)) {
        _0x3ac75c[t(-497, -431, "*x^6", -540, -422)](t(-414, -403, "%32^", -470, -513) + e(413, 520, 639, 595, "g@*S") + A(-509, -530, -541, "edYn", -531) + A(-271, -386, -373, "gsjE", -406) + e(403, 473, 436, 374, "POrz")), this[n("S$Xq", 1165, 1204, 1127, 1185) + "se"] = void 0;
        return;
      } else {
        const I = await fetch(g);
        if (!I.ok)
          if (n("edYn", 1129, 1069, 1107, 1044) !== A(-584, -500, -436, "y9%Z", -507)) _0x3a28b3[n("d7lQ", 946, 906, 1005, 997) + "ch"]((a) => _0x164b0b[i(1111, "HHbW", 1002, 1105, 1028)](a));
          else throw new Error(i(935, "d7lQ", 1052, 1140, 1034) + t(-486, -520, "LMbB", -406, -587) + A(-391, -359, -468, "POrz", -380) + e(389, 438, 395, 452, "sPOQ") + "d.");
        this[n("*x^6", 1313, 1243, 1199, 1293) + "se"] = await I[t(-465, -524, "Qaly", -539, -545)]();
      }
    } catch (I) {
      if (n("POrz", 1068, 963, 998) === t(-622, -533, "LMbB")) this[t(-351, -464, ")yYh") + "se"] = void (8191 + -197 * 35 + -1296), console[n("qUr8", 1192, 1083, 1160)](I);
      else throw new _0x327493(e(498, 453, 418, 451, "U4kx") + n("sPOQ", 992, 1011, 1064) + A(-343, -450, -511, "Qaly") + t(-566, -498, "NwH1") + ".");
    }
  }
  async [KA(632, 666, "HHbW") + pA(-327, "YDza", -313, -261) + "e"](g) {
    function t(I, a, r, Q, C) {
      return yA(I - 224, C, r - 77, Q - 176, a - -326);
    }
    function e(I, a, r, Q, C) {
      return cA(I - 305, a - 441, I, r - 300);
    }
    this[A(-806, "qUr8", -776, -921) + n(-468, -430, "LMbB", -356, -359)] = void (97 * 23 + -10 * 733 + -5099 * -1);
    function A(I, a, r, Q, C) {
      return oA(I - 135, I - -611, r - 356, Q - 182, a);
    }
    if (!g)
      if (n(-331, -197, "tHwC", -281, -261) !== n(-224, -264, "*x^6", -380, -327)) {
        console[A(-751, "ykoc", -688, -665)](n(-176, -238, "!Sa#", -335, -274) + i(-397, -397, -452, "OvFl") + e("NwH1", 515, 594) + i(-518, -638, -570, "7HeZ") + A(-787, "mFgW", -801, -835)), this[t(683, 737, 804, 767, "fKJd") + "se"] = void (-2 * 47 + 1777 * -4 + -26 * -277);
        return;
      } else _0x4f6ec0[t(820, 719, 765, 778, "7HeZ") + "ch"]((I) => _0x1a50c2[A(-630, "7HeZ", -741, -606)](I));
    function i(I, a, r, Q, C) {
      return pA(I - 108, Q, r - 436, r - -155);
    }
    function n(I, a, r, Q, C) {
      return cA(I - 438, a - 447, r, C - -476);
    }
    await this[e(")E3x", 584, 484) + i(-315, -318, -398, "Ehoi") + "se"](g);
  }
  async [KA(629, 666, "Ekya") + cA(207, 1, "7HeZ", 94) + yA(1068, ")E3x", 955, 989, 993)](g) {
    function t(a, r, Q, C, x) {
      return pA(a - 85, Q, Q - 457, a - 1e3);
    }
    function e(a, r, Q, C, x) {
      return pA(a - 63, x, Q - 17, a - 1152);
    }
    function A(a, r, Q, C, x) {
      return cA(a - 220, r - 23, r, a - -589);
    }
    const i = await fetch("" + g + this[t(709, 693, "U4kx") + e(843, 904, 752, 738, "d*Xi") + t(668, 578, "d*Xi") + A(-474, "sPOQ")][-1059 * -7 + -597 * 5 + -246 * 18]), n = i.ok ? 1 * 6778 + 639 + -7417 : 3 * -869 + 424 * -23 + -3 * -4120;
    function I(a, r, Q, C, x) {
      return pA(a - 156, x, Q - 60, Q - -377);
    }
    return "" + g + this[A(-433, "tHwC") + A(-486, "T(aN") + I(-736, -601, -646, -547, "U4kx") + t(601, 704, "T(aN")][n];
  }
  [yA(855, "Qaly", 953, 878, 926) + yA(960, "g%On", 932, 885, 984) + "s"](g) {
    function t(A, i, n, I, a) {
      return KA(i - 58, i - 42, n);
    }
    function e(A, i, n, I, a) {
      return oA(A - 367, n - 1269, n - 316, I - 357, A);
    }
    g[t(726, 717, "sPOQ") + "ch"]((A) => console[e("tHwC", 1077, 1142, 1166)](A));
  }
  [oA(-119, -21, -98, 76, "Ekya") + cA(124, 319, "Ekya", 210) + yA(968, "NwH1", 1003, 1030, 1038)](g) {
    function t(A, i, n, I, a) {
      return oA(A - 151, I - 1017, n - 441, I - 85, n);
    }
    function e(A, i, n, I, a) {
      return pA(A - 295, a, n - 75, A - -148);
    }
    g[e(-571, -523, -512, -642, "d7lQ") + "ch"]((A) => console[t(1026, 824, "YDza", 937)](A));
  }
  [oA(73, -38, -37, -70, "!Sa#") + oA(76, -43, 51, 60, "My0M")]() {
    function g(A, i, n, I, a) {
      return yA(A - 61, A, n - 363, I - 269, n - -124);
    }
    function t(A, i, n, I, a) {
      return cA(A - 252, i - 210, a, I - 534);
    }
    function e(A, i, n, I, a) {
      return oA(A - 293, a - 1170, n - 267, I - 71, A);
    }
    return window[e("*x^6", 987, 1079, 1015, 1087) + g("YDza", 990, 972, 892)][e("My0M", 1186, 1018, 1212, 1135) + t(560, 635, 782, 669, "g@*S")];
  }
  [cA(-11, 121, "*x^6", 100) + oA(-103, -27, -122, -62, "WXo6") + oA(-166, -231, -167, -326, "!Sa#")]() {
    function g(n, I, a, r, Q) {
      return oA(n - 98, I - 1222, a - 199, r - 403, n);
    }
    function t(n, I, a, r, Q) {
      return pA(n - 42, r, a - 421, n - 1111);
    }
    function e(n, I, a, r, Q) {
      return oA(n - 166, a - 330, a - 82, r - 175, I);
    }
    function A(n, I, a, r, Q) {
      return cA(n - 283, I - 189, Q, I - -184);
    }
    function i(n, I, a, r, Q) {
      return pA(n - 373, n, a - 327, r - 1277);
    }
    try {
      if (e(235, "6eqm", 226, 174, 191) === e(133, "tHwC", 177, 74, 263)) throw new _0x49ea35(A(-35, -10, -79, -14, "3@#[") + i("Yo92", 912, 995, 985, 1027) + t(807, 813, 714, "YDza", 719) + A(10, 92, 168, 51, "Yo92") + ".");
      if (!this[i("mgd]", 1094, 883, 994, 1052) + "se"]) {
        if (e(217, "Bw^i", 290, 323, 309) === g("jXxC", 1192, 1168, 1178, 1220)) return this[A(113, 11, 22, 99, "w9h[") + t(864, 834, 925, "Yo92", 931)];
        throw new Wg(A(-75, -25, -111, 54, "S$Xq") + e(19, "u@PU", 109, 18, 27) + g("qUr8", 1126, 1031, 1164, 1220) + t(786, 841, 703, "@*fG", 804) + ".");
      }
      if (!this[i("3@#[", 1168, 981, 1049, 1130) + t(877, 758, 796, "jXxC", 878) + "d"][e(122, "7HeZ", 240, 192, 234) + g("ohwj", 1158, 1117, 1215, 1175) + t(735, 728, 779, "YDza", 729) + "ed"]()) {
        if (e(202, "tHwC", 211, 182, 249) !== g("jXxC", 1213, 1131, 1220, 1192)) throw new Wg(t(651, 661, 766, "d7lQ", 612) + t(817, 873, 722, "YDza", 750) + i("6eqm", 997, 1028, 1006, 971) + A(143, 45, -34, 37, "T(aN") + ".");
        this[i("tHwC", 972, 977, 982, 928) + "se"] = void (6270 + 10 * -627), _0x3fec3c[g("g@*S", 1180, 1239, 1201, 1279)](_0x27e31c);
      }
      this[e(278, "Ehoi", 229, 169, 160) + e(279, "$QWj", 191, 284, 85)] = new GI(Tc(this[g("@*fG", 1120, 1210, 1219, 1149) + "se"], this[A(-83, -107, -47, -113, "u@PU") + g("U4kx", 1197, 1258, 1239, 1114)]())), this[t(699, 678, 693, "g%On", 621) + e(37, "fKJd", 144, 115, 155) + "s"](this[A(31, 109, 4, 135, "gsjE") + i("Iav2", 862, 885, 860, 893)][A(167, 48, 150, -24, "@*fG") + "s"]), this[i("gsjE", 1104, 1033, 1e3, 1020) + A(24, -51, 10, -170, "&8)3") + i("T(aN", 854, 773, 845, 808)](this[t(781, 707, 703, "ykoc", 825) + g("Bw^i", 1007, 1052, 1030, 1004)][g("g@*S", 1227, 1145, 1334, 1143) + A(90, 15, -66, 7, "WXo6")]);
    } catch (n) {
      if (e(182, "OvFl", 278, 248) === g("gsjE", 1128, 1102, 1180)) _0x28cd97[i("xDQF", 902, 892, 899)]();
      else {
        if (n instanceof Wg) t(742, 722, 667, "S$Xq") === e(340, "d*Xi", 274, 157) ? _0x12a07e[e(254, "w9h[", 273, 256) + g("LMbB", 1146, 1100, 1208)](_0x4519ce) : n[i("YDza", 956, 903, 930)]();
        else if (n instanceof Error) {
          if (t(759, 643, 712, "S$Xq") === i("u@PU", 993, 921, 1033)) throw new _0xd9b352(g("d7lQ", 1206, 1217, 1279) + i("jXxC", 822, 916, 895) + i("Qaly", 940, 887, 858) + i("d*Xi", 934, 834, 886) + "d.");
          console[e(294, "*x^6", 330, 387)](n);
        }
        const I = {};
        I[t(766, 754, 766, "3@#[") + t(691, 673, 611, "YDza")] = !1, I[A(-134, -54, 47, 2, "&8)3") + "s"] = [], I[A(-174, -94, -196, -130, "ohwj") + i("!Sa#", 1006, 933, 920)] = [], I[e(272, "NwH1", 202, 164) + i("My0M", 861, 834, 904) + A(17, -40, -39, -31, "Ehoi")] = void (3166 * -1 + -5445 + 109 * 79), I[A(27, 50, 133, 77, "S6o0")] = function() {
        }, I[e(278, "S$Xq", 214, 273) + t(851, 759, 897, "@*fG")] = "", this[A(-108, -38, -145, -78, "S$Xq") + g("d7lQ", 1051, 939, 1026)] = new GI(I);
      }
    }
  }
  [cA(318, 192, ")E3x", 219) + cA(200, 110, "jXxC", 150) + pA(-354, "S6o0", -417, -437) + "t"]() {
    function g(t, e, A, i, n) {
      return oA(t - 198, n - -221, A - 27, i - 216, A);
    }
    return this[g(-514, -388, "My0M", -460, -423) + g(-235, -325, "fKJd", -267, -289)];
  }
  [cA(137, 72, "d*Xi", 172) + oA(-10, -55, -118, -93, "edYn") + yA(1097, "@*fG", 1172, 986, 1080)]() {
    var n;
    function g(I, a, r, Q, C) {
      return pA(I - 411, I, r - 217, a - 691);
    }
    function t(I, a, r, Q, C) {
      return pA(I - 467, C, r - 106, r - 819);
    }
    function e(I, a, r, Q, C) {
      return KA(Q - -119, a - 17, C);
    }
    if (!this[A(856, 701, 747, 753, "7HeZ") + "se"])
      if (A(986, 1008, 946, 890, "YDza") === e(388, 422, 368, 401, "y9%Z")) {
        _0x5aedd7 instanceof _0x223bee && _0x531edc[A(770, 759, 733, 765, "mFgW") + g("tHwC", 342, 445)](_0x4ffe09);
        return;
      } else return;
    function A(I, a, r, Q, C) {
      return cA(I - 91, a - 116, C, Q - 678);
    }
    function i(I, a, r, Q, C) {
      return pA(I - 297, r, r - 203, a - 1196);
    }
    try {
      if (A(986, 1079, 876, 975, "OvFl") !== g("sPOQ", 411, 409, 370, 384)) _0x2b6154[g("!Sa#", 304, 353, 306, 375)](_0x4d6e23);
      else {
        const I = JSON[e(653, 638, 430, 549, "ohwj")](this[e(602, 551, 551, 533, "3@#[") + "se"]);
        return (n = I == null ? void 0 : I[A(982, 970, 911, 978, "LMbB") + A(887, 723, 743, 816, "*x^6")]) == null ? void 0 : n[t(478, 416, 421, 302, "WXo6") + A(961, 997, 1032, 977, "qUr8")];
      }
    } catch (I) {
      if (t(394, 331, 406, 491, "@*fG") !== A(763, 932, 909, 831, "POrz")) {
        _0x5ae173 instanceof _0x126de5 ? _0x42c4d3[e(406, 350, 336, 392, "mFgW")]() : _0xe0d942 instanceof _0x5844cf && _0x9f3e50[g("sPOQ", 418, 436)](_0x3a8537);
        const a = {};
        a[i(731, 830, "YDza") + i(1054, 947, "Qaly")] = !1, a[i(890, 918, "y9%Z") + "s"] = [], a[t(372, 415, 377, 449, "%32^") + g("Ehoi", 333, 304)] = [], a[e(453, 525, 541, 435, "@v@%") + A(830, 706, 832, 760, "xDQF") + t(399, 337, 409, 291, "&8)3")] = void (6578 + 2 * -2588 + 1402 * -1), a[i(769, 748, "T(aN")] = function() {
        }, a[i(757, 796, "ykoc") + g("&8)3", 455, 495)] = "", this[g("g@*S", 439, 442) + g("3@#[", 240, 274)] = new _0x51683d(a);
      } else {
        I instanceof Error && (g("&8)3", 284, 377) !== g("$QWj", 266, 185) ? this[g("%32^", 286, 188) + g("@*fG", 427, 501) + "d"] = _0x437a0c : W[t(434, 381, 488, 522, "Ehoi") + e(585, 422, 508, 470, "mgd]")](I));
        return;
      }
    }
  }
}
const ig = class ig extends _c {
  static getInstance() {
    if (!this._instance) {
      const g = new Vc();
      this._instance = new ig(g);
    }
    return this._instance;
  }
};
w(ig, "_instance");
let Ni = ig;
const zc = ({ children: o }) => {
  const g = kA(null);
  return lQ(g, Ae.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ p(ZC, { ref: g, children: o });
}, Xc = ({ cameraOptions: o }) => o ? /* @__PURE__ */ p(OC, { target: o.styleTarget, children: /* @__PURE__ */ p(
  nQ,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: Ni.getInstance(),
    children: /* @__PURE__ */ p(rQ, { analytics: Oc, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ p(
      tB,
      {
        value: Jc({
          onError: o.onError
        }),
        children: /* @__PURE__ */ p(va, { children: /* @__PURE__ */ p(vc, { cameraFacing: o.cameraFacing, children: /* @__PURE__ */ p(zc, { children: /* @__PURE__ */ p(Mc, { ...o }) }) }) })
      }
    ) })
  }
) }) : null;
X0(Xc, "x-dot-face-auto-capture", ["cameraOptions"]);
