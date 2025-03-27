var N0 = Object.defineProperty;
var Cn = (o) => {
  throw TypeError(o);
};
var F0 = (o, i, t) => i in o ? N0(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var D = (o, i, t) => F0(o, typeof i != "symbol" ? i + "" : i, t), Bn = (o, i, t) => i.has(o) || Cn("Cannot " + t);
var y = (o, i, t) => (Bn(o, i, "read from private field"), t ? t.call(o) : i.get(o)), O = (o, i, t) => i.has(o) ? Cn("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), Y = (o, i, t, e) => (Bn(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var jt, G, bI, kI, Ee, Qn, GI, Ti, Rg, Pi, qi, NI, Ft = {}, FI = [], S0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ii = Array.isArray;
function XA(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function SI(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function EA(o, i, t) {
  var e, A, g, n = {};
  for (g in i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : n[g] = i[g];
  if (arguments.length > -461 * 9 + -9394 + 13545 && (n.children = arguments.length > 3 ? jt.call(arguments, -1 * 1860 + -3917 + -1 * -5779) : t), typeof o == "function" && o.defaultProps != null)
    for (g in o.defaultProps) void (26 * -265 + 7474 + -584) === n[g] && (n[g] = o.defaultProps[g]);
  return mt(o, n, e, A, null);
}
function mt(o, i, t, e, A) {
  var g = {};
  g.type = o, g.props = i, g.key = t, g.ref = e, g.__k = null, g.__ = null, g.__b = 0, g.__e = null, g.__d = void 0, g.__c = null, g.constructor = void (8 * 128 + 1360 + -2384), g.__v = A ?? ++bI, g.__i = -1, g.__u = 0;
  var n = g;
  return A == null && G.vnode != null && G.vnode(n), n;
}
function R0() {
  var o = {};
  return o.current = null, o;
}
function FA(o) {
  return o.children;
}
function GA(o, i) {
  this.props = o, this.context = i;
}
function be(o, i) {
  if (i == null) return o.__ ? be(o.__, o.__i + (1861 * 5 + 7317 + 1 * -16621)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? be(o) : null;
}
function RI(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = -418 * 18 + 3863 + 3661; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return RI(o);
  }
}
function ji(o) {
  (!o.__d && (o.__d = !0) && Ee.push(o) && !bo.__r++ || Qn !== G.debounceRendering) && ((Qn = G.debounceRendering) || GI)(bo);
}
function bo() {
  var o, i, t, e, A, g, n, I;
  for (Ee.sort(Ti); o = Ee.shift(); ) o.__d && (i = Ee.length, e = void (-8518 + -1 * 1171 + 9689), g = (A = (t = o).__v).__e, n = [], I = [], t.__P && ((e = XA({}, A)).__v = A.__v + (-8740 + -10 * 263 + 137 * 83), G.vnode && G.vnode(e), Mg(t.__P, e, A, t.__n, t.__P.namespaceURI, -9978 + -1 * -3323 + -6687 * -1 & A.__u ? [g] : null, n, g ?? be(A), !!(2 * 274 + -5 * -683 + -3931 * 1 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, LI(n, e, I), e.__e != g && RI(e)), Ee.length > i && Ee.sort(Ti));
  bo.__r = -6697 + 196 * -18 + -5 * -2045;
}
function MI(o, i, t, e, A, g, n, I, a, r, B) {
  var C, x, s, E, l, u = e && e.__k || FI, c = i.length;
  for (t.__d = a, M0(t, i, u), a = t.__d, C = -1 * 7188 + -5268 + -4 * -3114; C < c; C++) (s = t.__k[C]) != null && typeof s != "boolean" && typeof s != "function" && (x = s.__i === -1 ? Ft : u[s.__i] || Ft, s.__i = C, Mg(o, s, x, A, g, n, I, a, r, B), E = s.__e, s.ref && x.ref != s.ref && (x.ref && vg(x.ref, null, s), B.push(s.ref, s.__c || E, s)), l == null && E != null && (l = E), -5 * -6953 + -123792 + 154563 & s.__u || x.__k === s.__k ? (a && typeof s.type == "string" && !o.contains(a) && (a = be(x)), a = vI(s, a, o)) : typeof s.type == "function" && s.__d !== void 0 ? a = s.__d : E && (a = E.nextSibling), s.__d = void (2425 + -16 * 353 + 3223), s.__u &= -(188178 * -2 + 30771 + 542194));
  t.__d = a, t.__e = l;
}
function M0(o, i, t) {
  var e, A, g, n, I, a = i.length, r = t.length, B = r, C = -1 * 3761 + -4032 + -7793 * -1;
  for (o.__k = [], e = 3931 + 3931 * -1; e < a; e++) n = e + C, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? mt(null, A, null, null, null) : Ii(A) ? mt(FA, { children: A }, null, null, null) : void (-1 * 6947 + -7 * -69 + 6464) === A.constructor && A.__b > 0 ? mt(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (-5 * -7 + -7963 + 7929), I = v0(A, t, n, B), A.__i = I, g = null, -(-2084 + 6 * -467 + 4887) !== I && (B--, (g = t[I]) && (g.__u |= 29767 + 1903 * 21 + 61342)), g == null || g.__v === null ? (I == -1 && C--, typeof A.type != "function" && (A.__u |= 119207 + 53671 * -1)) : I !== n && (I == n - (-13 * 478 + 1233 + 53 * 94) ? C = I - n : I == n + (-4 * 423 + -9598 + 7 * 1613) ? C++ : I > n ? B > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= 65536))) : (g = t[n]) && g.key == null && g.__e && -2 * 4989 + 8327 * 1 + -127 * -13 == (-1487 * 9 + 2271 * 61 + -5924 * -1 & g.__u) && (g.__e == o.__d && (o.__d = be(g)), Zi(g, g, !(5581 + 107 * 13 + -6971)), t[n] = null, B--);
  if (B)
    for (e = 0; e < r; e++) (g = t[e]) != null && 26 * 262 + 4707 + 1 * -11519 == (-1 * -38487 + 172356 + -241 * 331 & g.__u) && (g.__e == o.__d && (o.__d = be(g)), Zi(g, g));
}
function vI(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = 10776 + -1 * 10776; e && A < e.length; A++) e[A] && (e[A].__ = o, i = vI(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && 6795 + 1714 * 1 + 8501 * -1 === i.nodeType);
  return i;
}
function $A(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (Ii(o) ? o.some(function(t) {
    $A(t, i);
  }) : i.push(o)), i;
}
function v0(o, i, t, e) {
  var A = o.key, g = o.type, n = t - (-2149 + -430 * -5), I = t + (-3171 + 2 * 1586), a = i[t];
  if (a === null || a && A == a.key && g === a.type && !(-272134 + -67201 * -6 & a.__u)) return t;
  if (e > (a != null && -1069 * -2 + 1885 + -4023 == (-7 * 23044 + -26809 + -13 * -24553 & a.__u) ? 781 * 5 + -4196 * 1 + 292 : 5 * 353 + 7216 + -8981)) for (; n >= -1240 + 2 * 620 || I < i.length; ) {
    if (n >= 1 * -8542 + -1 * -7098 + 38 * 38) {
      if ((a = i[n]) && 1 * 853 + -3 * 209 + -226 == (-215357 + 39 * -4281 + 513388 & a.__u) && A == a.key && g === a.type) return n;
      n--;
    }
    if (I < i.length) {
      if ((a = i[I]) && 3038 + -1 * -9872 + -12910 == (11105 * -18 + 122445 + 208517 & a.__u) && A == a.key && g === a.type) return I;
      I++;
    }
  }
  return -(227 * 3 + -3617 + 2937);
}
function sn(o, i, t) {
  i[0] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || S0.test(i) ? t : t + "px";
}
function Ao(o, i, t, e, A) {
  var g;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || sn(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || sn(o.style, i, t[i]);
    }
  else if (i[-5793 * 1 + -8430 + 33 * 431] === "o" && i[11 * 898 + 1468 * -5 + 43 * -59] === "n") g = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(1 * -6639 + 2264 + 4377) : i.slice(467 * -6 + -1 * -1929 + 875), o.l || (o.l = {}), o.l[i + g] = t, t ? e ? t.u = e.u : (t.u = Rg, o.addEventListener(i, g ? qi : Pi, g)) : o.removeEventListener(i, g ? qi : Pi, g);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(2633 * 1 + 1406 * -2 + 180) === t && i[-19 * 467 + 7 * 1 + 8870 * 1] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && -9514 * 1 + -6283 + 15798 == t ? "" : t));
  }
}
function cn(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = Rg++;
      else if (i.t < t.u) return;
      return t(G.event ? G.event(i) : i);
    }
  };
}
function Mg(o, i, t, e, A, g, n, I, a, r) {
  var B, C, x, s, E, l, u, c, h, m, R, M, J, w, q, lA, AA = i.type;
  if (void (-1 * 39 + -96 * 27 + 2631) !== i.constructor) return null;
  -1407 * -6 + 2 * -2369 + -3576 & t.__u && (a = !!(4 * 346 + 1 * 7178 + -8530 & t.__u), g = [I = i.__e = t.__e]), (B = G.__b) && B(i);
  A: if (typeof AA == "function") try {
    if (c = i.props, h = "prototype" in AA && AA.prototype.render, m = (B = AA.contextType) && e[B.__c], R = B ? m ? m.props.value : B.__ : e, t.__c ? u = (C = i.__c = t.__c).__ = C.__E : (h ? i.__c = C = new AA(c, R) : (i.__c = C = new GA(c, R), C.constructor = AA, C.render = J0), m && m.sub(C), C.props = c, C.state || (C.state = {}), C.context = R, C.__n = e, x = C.__d = !0, C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && AA.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = XA({}, C.__s)), XA(C.__s, AA.getDerivedStateFromProps(c, C.__s))), s = C.props, E = C.state, C.__v = i, x) h && AA.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && AA.getDerivedStateFromProps == null && c !== s && C.componentWillReceiveProps != null && C.componentWillReceiveProps(c, R), !C.__e && (C.shouldComponentUpdate != null && !(123 * -11 + -10 * -944 + -8086) === C.shouldComponentUpdate(c, C.__s, R) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (C.props = c, C.state = C.__s, C.__d = !(-6748 + -2 * -1366 + 4017)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(wA) {
          wA && (wA.__ = i);
        }), M = -4582 + 1157 * 2 + 12 * 189; M < C._sb.length; M++) C.__h.push(C._sb[M]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(c, C.__s, R), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(s, E, l);
      });
    }
    if (C.context = R, C.props = c, C.__P = o, C.__e = !(9486 + 2317 * -4 + -217 * 1), J = G.__r, w = 29 * -123 + -301 * -1 + 3266, h) {
      for (C.state = C.__s, C.__d = !(2375 * 1 + 2363 * 1 + 3 * -1579), J && J(i), B = C.render(C.props, C.state, C.context), q = 5140 + 14 * -648 + 3932; q < C._sb.length; q++) C.__h.push(C._sb[q]);
      C._sb = [];
    } else do
      C.__d = !(3 * -2474 + -2427 + 9850), J && J(i), B = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++w < 52 * 44 + -3653 * 1 + 1390);
    C.state = C.__s, C.getChildContext != null && (e = XA(XA({}, e), C.getChildContext())), h && !x && C.getSnapshotBeforeUpdate != null && (l = C.getSnapshotBeforeUpdate(s, E)), MI(o, Ii(lA = B != null && B.type === FA && B.key == null ? B.props.children : B) ? lA : [lA], i, t, e, A, g, n, I, a, r), C.base = i.__e, i.__u &= -(105 * -87 + -2039 * 3 + 15413 * 1), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (wA) {
    i.__v = null, a || g != null ? (i.__e = I, i.__u |= a ? 3 * 2952 + 1150 + -547 * 18 : 8091 + -2017 * -2 + -12093, g[g.indexOf(I)] = null) : (i.__e = t.__e, i.__k = t.__k), G.__e(wA, i, t);
  }
  else g == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = L0(t.__e, i, t, e, A, g, n, a, r);
  (B = G.diffed) && B(i);
}
function LI(o, i, t) {
  i.__d = void (-4550 + -26 * -175);
  for (var e = 9489 * 1 + 3736 + -13225; e < t.length; e++) vg(t[e], t[++e], t[++e]);
  G.__c && G.__c(i, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(g) {
        g.call(A);
      });
    } catch (g) {
      G.__e(g, A.__v);
    }
  });
}
function L0(o, i, t, e, A, g, n, I, a) {
  var r, B, C, x, s, E, l, u = t.props, c = i.props, h = i.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), g != null) {
    for (r = -3 * -196 + -11 * -193 + -2711; r < g.length; r++) if ((s = g[r]) && "setAttribute" in s == !!h && (h ? s.localName === h : -8652 + -13 * 335 + -10 * -1301 === s.nodeType)) {
      o = s, g[r] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(c);
    o = document.createElementNS(A, h, c.is && c), g = null, I = !(6371 + -897 * -6 + 226 * -52);
  }
  if (h === null) u === c || I && o.data === c || (o.data = c);
  else {
    if (g = g && jt.call(o.childNodes), u = t.props || Ft, !I && g != null)
      for (u = {}, r = -5767 * 1 + 8596 + -2829; r < o.attributes.length; r++) u[(s = o.attributes[r]).name] = s.value;
    for (r in u) if (s = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = s;
      else if (r !== "key" && !(r in c)) {
        if (r == "value" && "defaultValue" in c || r == "checked" && "defaultChecked" in c) continue;
        Ao(o, r, null, s, A);
      }
    }
    for (r in c) s = c[r], r == "children" ? x = s : r == "dangerouslySetInnerHTML" ? B = s : r == "value" ? E = s : r == "checked" ? l = s : r === "key" || I && typeof s != "function" || u[r] === s || Ao(o, r, s, u[r], A);
    if (B) I || C && (B.__html === C.__html || B.__html === o.innerHTML) || (o.innerHTML = B.__html), i.__k = [];
    else if (C && (o.innerHTML = ""), MI(o, Ii(x) ? x : [x], i, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, g, n, g ? g[-1465 * -3 + 5778 + -10173] : t.__k && be(t, 5914 * 1 + -7686 + 886 * 2), I, a), g != null)
      for (r = g.length; r--; ) g[r] != null && SI(g[r]);
    I || (r = "value", E !== void 0 && (E !== o[r] || h === "progress" && !E || h === "option" && E !== u[r]) && Ao(o, r, E, u[r], A), r = "checked", void (-1088 + 544 * 2) !== l && l !== o[r] && Ao(o, r, l, u[r], A));
  }
  return o;
}
function vg(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    G.__e(e, t);
  }
}
function Zi(o, i, t) {
  var e, A;
  if (G.unmount && G.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || vg(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (g) {
      G.__e(g, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = -4425 + -4425 * -1; A < e.length; A++) e[A] && Zi(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || SI(o.__e), o.__c = o.__ = o.__e = o.__d = void (-101 * 28 + -5575 + 1 * 8403);
}
function J0(o, i, t) {
  return this.constructor(o, t);
}
function Ce(o, i, t) {
  var e, A, g, n;
  G.__ && G.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, g = [], n = [], Mg(i, o = (!e && t || i).__k = EA(FA, null, [o]), A || Ft, Ft, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? jt.call(i.childNodes) : null, g, !e && t ? t : A ? A.__e : i.firstChild, e, n), LI(g, o, n);
}
function Lg(o, i) {
  Ce(o, i, Lg);
}
function Jg(o, i, t) {
  var e, A, g, n, I = XA({}, o.props);
  for (g in o.type && o.type.defaultProps && (n = o.type.defaultProps), i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : I[g] = void (7935 * 1 + -7740 * -1 + -15675) === i[g] && void (8621 + -1 * 8621) !== n ? n[g] : i[g];
  return arguments.length > -17047 + 1 * 17049 && (I.children = arguments.length > 1 * 3022 + -5650 * 1 + -877 * -3 ? jt.call(arguments, 7578 + 826 * 6 + -12532) : t), mt(o.type, I, e || o.key, A || o.ref, null);
}
function ot(o, i) {
  var t = { __c: i = "__cC" + NI++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, g;
    return this.getChildContext || (A = [], (g = {})[i] = this, this.getChildContext = function() {
      return g;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, ji(I);
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
jt = FI.slice, G = { __e: function(o, i, t, e) {
  for (var A, g, n; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((g = A.constructor) && g.getDerivedStateFromError != null && (A.setState(g.getDerivedStateFromError(o)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    o = I;
  }
  throw o;
} }, bI = 1 * -2879 + -982 * 10 + 249 * 51, kI = function(o) {
  return o != null && o.constructor == null;
}, GA.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = XA({}, this.state), typeof o == "function" && (o = o(XA({}, t), this.props)), o && XA(t, o), o != null && this.__v && (i && this._sb.push(i), ji(this));
}, GA.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(-3721 + -8408 * -1 + -4687), o && this.__h.push(o), ji(this));
}, GA.prototype.render = FA, Ee = [], GI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ti = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, bo.__r = -546 + -2 * -273, Rg = -5730 + -1 * -5730, Pi = cn(!(-39 * 66 + 13 * 268 + -909)), qi = cn(!0), NI = 6933 + -16 * -329 + -12197;
function Ug() {
  return (Ug = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = -387 + 2 * 194; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var U0 = ["context", "children"];
function Y0(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var g, n, I = {}, a = Object.keys(e);
    for (n = 581 * 9 + 5101 + -10330; n < a.length; n++) A.indexOf(g = a[n]) >= 0 || (I[g] = e[g]);
    return I;
  }(o, U0);
  return Jg(i, t);
}
function W0() {
  var o = {};
  o.detail = {}, o.bubbles = !(8 * -289 + 332 * 23 + -5324), o.cancelable = !(8056 + -103 * -61 + -1 * 14339);
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = EA(Y0, Ug({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (92 * 88 + 628 + 1 * -8721 === e.nodeType) return e.data;
    if (70 * -59 + 107 * 47 + -898 * 1 !== e.nodeType) return null;
    var g = [], n = {}, I = -3312 + -1 * 7636 + 10948, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[JI(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var B = t(r[I], null), C = r[I].slot;
      C ? n[C] = EA(xn, { name: C }, B) : g[I] = B;
    }
    var x = A ? EA(xn, null, g) : g;
    return EA(A || e.nodeName.toLowerCase(), n, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Lg : Ce)(this._vdom, this._root);
}
function JI(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function O0(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (9554 + 1 * -8686 + -868), e[JI(o)] = t, this._vdom = Jg(this._vdom, e), Ce(this._vdom, this._root);
  }
}
function H0() {
  Ce(this._vdom = null, this._root);
}
function xn(o, i) {
  var t = this;
  return EA("slot", Ug({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function K0(o, i, t, e) {
  function A() {
    var g = Reflect.construct(HTMLElement, [], A);
    return g._vdomComponent = o, g._root = g, g;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = W0, A.prototype.attributeChangedCallback = O0, A.prototype.disconnectedCallback = H0, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(g) {
    Object.defineProperty(A.prototype, g, { get: function() {
      return this._vdom.props[g];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(g, null, n) : (this._props || (this._props = {}), this._props[g] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(g, n);
    } });
  }), customElements.define(i, A);
}
var T0 = 9446 * 1 + -8452 + -994;
function p(o, i, t, e, A, g) {
  i || (i = {});
  var n, I, a = i;
  if ("ref" in a)
    for (I in a = {}, i) I == "ref" ? n = i[I] : a[I] = i[I];
  var r = {};
  r.type = o, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-7901 + 14 * 599 + -97 * 5), r.__c = null, r.constructor = void (2017 * -1 + 1248 + 769), r.__v = --T0, r.__i = -(-1958 * -5 + 1800 + -11589), r.__u = 0, r.__source = A, r.__self = g;
  var B = r;
  if (typeof o == "function" && (n = o.defaultProps))
    for (I in n) void (-1 * -6609 + 6489 * -1 + -120) === a[I] && (a[I] = n[I]);
  return G.vnode && G.vnode(B), B;
}
var hA = function() {
  return hA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var g in t) Object.prototype.hasOwnProperty.call(t, g) && (i[g] = t[g]);
    }
    return i;
  }, hA.apply(this, arguments);
};
function Ze(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, g; e < A; e++)
    (g || !(e in i)) && (g || (g = Array.prototype.slice.call(i, 0, e)), g[e] = i[e]);
  return o.concat(g || Array.prototype.slice.call(i));
}
function P0(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var q0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, j0 = P0(function(o) {
  return q0.test(o) || o.charCodeAt(-298 * -10 + -85 * -75 + -9355) === 2777 * -3 + 81 * -104 + 9 * 1874 && o.charCodeAt(220 * 5 + -2663 + 4 * 391) === 7527 + 149 * -13 + -5480 && o.charCodeAt(11 * -473 + -2377 + -1 * -7582) < -4249 + 155 * 28;
}), Be, P, yi, En, Ve = 4246 * 2 + 873 * -5 + -4127, UI = [], Z = G, dn = Z.__b, ln = Z.__r, un = Z.diffed, hn = Z.__c, fn = Z.unmount, pn = Z.__;
function it(o, i) {
  Z.__h && Z.__h(P, o, Ve || i), Ve = -1 * -1421 + 4 * -2396 + -3 * -2721;
  var t = {};
  t.__ = [], t.__h = [];
  var e = P.__H || (P.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function fA(o) {
  return Ve = -7927 + -79 * 115 + 17013, Yg(OI, o);
}
function Yg(o, i, t) {
  var e = it(Be++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : OI(void (-1 * 79 + -2480 + 2559), i), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[1527 + 47 * -1 + -1479]], e.__c.setState({}));
  }], e.__c = P, !P.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var B = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (B.every(function(x) {
        return !x.__N;
      })) return !g || g.call(this, I, a, r);
      var C = !(8316 + -1 * 8315);
      return B.forEach(function(x) {
        if (x.__N) {
          var s = x.__[0];
          x.__ = x.__N, x.__N = void 0, s !== x.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!g || g.call(this, I, a, r));
    };
    P.u = !(-5536 * 1 + -894 * -1 + 4642);
    var g = P.shouldComponentUpdate, n = P.componentWillUpdate;
    P.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var B = g;
        g = void (-27 * 249 + -149 + 8 * 859), A(I, a, r), g = B;
      }
      n && n.call(this, I, a, r);
    }, P.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function z(o, i) {
  var t = it(Be++, 3);
  !Z.__s && Wg(t.__H, i) && (t.__ = o, t.i = i, P.__H.__h.push(t));
}
function gt(o, i) {
  var t = it(Be++, 4);
  !Z.__s && Wg(t.__H, i) && (t.__ = o, t.i = i, P.__h.push(t));
}
function SA(o) {
  return Ve = -1 * 6107 + 8282 + -1085 * 2, pA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function YI(o, i, t) {
  Ve = 1709 + -2485 * 1 + 782, gt(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void (-6177 + 4 * 83 + -1169 * -5);
  }, t == null ? t : t.concat(o));
}
function pA(o, i) {
  var t = it(Be++, 7);
  return Wg(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function Ae(o, i) {
  return Ve = -7027 * 1 + -1 * -6495 + 540, pA(function() {
    return o;
  }, i);
}
function Qe(o) {
  var i = P.context[o.__c], t = it(Be++, -9873 * -1 + 16 * -31 + -9368);
  return t.c = o, i ? (t.__ == null && (t.__ = !(4743 + 2 * -834 + 3 * -1025), i.sub(P)), i.props.value) : o.__;
}
function ko(o, i) {
  Z.useDebugValue && Z.useDebugValue(i ? i(o) : o);
}
function WI() {
  var o = it(Be++, 11);
  if (!o.__) {
    for (var i = P.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [-17 * 171 + 1886 + 1021, -991 + 255 * 13 + -2324]);
    o.__ = "P" + t[414 * -22 + 3 * 298 + 8214] + "-" + t[184 + -3 * 61]++;
  }
  return o.__;
}
function Z0() {
  for (var o; o = UI.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(Co), o.__H.__h.forEach(Vi), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], Z.__e(i, o.__v);
  }
}
Z.__b = function(o) {
  P = null, dn && dn(o);
}, Z.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), pn && pn(o, i);
}, Z.__r = function(o) {
  ln && ln(o), Be = -737 * 9 + -7906 + 14539;
  var i = (P = o.__c).__H;
  i && (yi === P ? (i.__h = [], P.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (269 * 14 + -1721 + -2045);
  })) : (i.__h.forEach(Co), i.__h.forEach(Vi), i.__h = [], Be = -4422 + 125 * 47 + -1453)), yi = P;
}, Z.diffed = function(o) {
  un && un(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (UI.push(i) !== 1 && En === Z.requestAnimationFrame || ((En = Z.requestAnimationFrame) || V0)(Z0)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), yi = P = null;
}, Z.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(Co), t.__h = t.__h.filter(function(e) {
        return !e.__ || Vi(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], Z.__e(e, t.__v);
    }
  }), hn && hn(o, i);
}, Z.unmount = function(o) {
  fn && fn(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Co(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void (3932 + 8403 * -1 + 4471), i && Z.__e(i, t.__v));
};
var yn = typeof requestAnimationFrame == "function";
function V0(o) {
  var i, t = function() {
    clearTimeout(e), yn && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  yn && (i = requestAnimationFrame(t));
}
function Co(o) {
  var i = P, t = o.__c;
  typeof t == "function" && (o.__c = void (12257 + 103 * -119), t()), P = i;
}
function Vi(o) {
  var i = P;
  o.__c = o.__(), P = i;
}
function Wg(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function OI(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function HI(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function _i(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !(159 * 15 + -2492 + 107);
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(-1 * -3588 + -855 + -2733);
  return !1;
}
function zi(o, i) {
  this.props = o, this.context = i;
}
function _0(o, i) {
  function t(A) {
    var g = this.props.ref, n = g == A.ref;
    return !n && g && (g.call ? g(null) : g.current = null), i ? !i(this.props, A) || !n : _i(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, EA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(-1 * -3771 + 7131 + -10902), e.__f = !(9237 * 1 + 5857 + -15094), e;
}
(zi.prototype = new GA()).isPureReactComponent = !(1585 * 3 + 7484 + -12239), zi.prototype.shouldComponentUpdate = function(o, i) {
  return _i(this.props, o) || _i(this.state, i);
};
var Dn = G.__b;
G.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), Dn && Dn(o);
};
var z0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -2133 + 93 * 43 + 2045;
function KI(o) {
  function i(t) {
    var e = HI({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = z0, i.render = i, i.prototype.isReactComponent = i.__f = !(-2 * 1888 + -2 * -2971 + -2166), i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var wn = function(o, i) {
  return o == null ? null : $A($A(o).map(i));
}, X0 = { map: wn, forEach: wn, count: function(o) {
  return o ? $A(o).length : 22 * -143 + -134 * 20 + 5826;
}, only: function(o) {
  var i = $A(o);
  if (-5220 + -23 * -227 !== i.length) throw "Children.only";
  return i[-1739 * -2 + -629 * -12 + 298 * -37];
}, toArray: $A }, $0 = G.__e;
G.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, g = i; g = g.__; ) if ((A = g.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  $0(o, i, t, e);
};
var mn = G.unmount;
function TI(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = HI({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return TI(e, i, t);
  })), o;
}
function PI(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return PI(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(89 * 27 + 9127 * -1 + 6724), o.__c.__P = t)), o;
}
function Bo() {
  this.__u = -1 * 4979 + -2 * -472 + 4035, this.t = null, this.__b = null;
}
function qI(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function Ar(o) {
  var i, t, e;
  function A(g) {
    if (i || (i = o()).then(function(n) {
      t = n.default || n;
    }, function(n) {
      e = n;
    }), e) throw e;
    if (!t) throw i;
    return EA(t, g);
  }
  return A.displayName = "Lazy", A.__f = !(845 * -9 + -2825 * -3 + -3 * 290), A;
}
function lt() {
  this.u = null, this.o = null;
}
G.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && 2035 + 4993 * 2 + 11989 * -1 & o.__u && (o.type = null), mn && mn(o);
}, (Bo.prototype = new GA()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = qI(e.__v), g = !(9311 + -100 * -75 + -16810), n = function() {
    g || (g = !(-401 * 7 + 135 * 33 + -1648), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-3455 + -5 * -691] = PI(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || -2476 + -1 * 9871 + 12379 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-8624 + 37 * -189 + 15617] }), o.then(n, n);
}, Bo.prototype.componentWillUnmount = function() {
  this.t = [];
}, Bo.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[111 * -38 + -4028 + -38 * -217].__c;
      this.__v.__k[-6612 + 2 * -3270 + 4384 * 3] = TI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && EA(FA, null, o.fallback);
  return A && (A.__u &= -(295 * 11 + 195 + 1 * -3407)), [EA(FA, null, i.__a ? null : o.children), A];
};
var bn = function(o, i, t) {
  if (++t[9096 * -1 + -2798 + 11895] === t[17276 + -7 * 2468] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[4 * -1804 + 9051 + -1835] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1 * 4196 + 9811 * 1 + -14006] < t[6186 + -50 * -124 + -12386]) break;
    o.u = t = t[2];
  }
};
function er(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function tr(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    Ce(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-5100 + -5 * -1020);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -5065 + 313 * -22 + 11952, -53 * 43 + 2 * 427 + 1426), i.i.removeChild(e);
  } }), Ce(EA(er, { context: i.context }, o.__v), i.l);
}
function or(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = EA(tr, t);
  return e.containerInfo = i, e;
}
(lt.prototype = new GA()).__a = function(o) {
  var i = this, t = qI(i.__v), e = i.o.get(o);
  return e[-7209 + -201 * 7 + -4 * -2154]++, function(A) {
    var g = function() {
      i.props.revealOrder ? (e.push(A), bn(i, o, e)) : A();
    };
    t ? t(g) : g();
  };
}, lt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = $A(o.children);
  o.revealOrder && o.revealOrder[-8960 + -6287 * 1 + -193 * -79] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-1709 + -1 * 6837 + -33 * -259, -2 * 4271 + -149 * -1 + 763 * 11, this.u]);
  return o.children;
}, lt.prototype.componentDidUpdate = lt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    bn(o, t, i);
  });
};
var jI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -130777 + -95440 * -2, ir = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, gr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, nr = /[A-Z0-9]/g, Ir = typeof document < "u", ar = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function rr(o, i, t) {
  return i.__k == null && (i.textContent = ""), Ce(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function Cr(o, i, t) {
  return Lg(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
GA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(GA.prototype, o, { configurable: !0, get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(3664 + 33 * 262 + 2 * -6155), t.writable = !(1444 + -76 * 19), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var kn = G.event;
function Br() {
}
function Qr() {
  return this.cancelBubble;
}
function sr() {
  return this.defaultPrevented;
}
G.event = function(o) {
  return kn && (o = kn(o)), o.persist = Br, o.isPropagationStopped = Qr, o.isDefaultPrevented = sr, o.nativeEvent = o;
};
var Qo = {};
Qo.enumerable = !(1 * -1563 + -13 * 388 + 4 * 1652), Qo.configurable = !(-8503 + 1 * 8503), Qo.get = function() {
  return this.class;
};
var Og, cr = Qo, Gn = G.vnode;
G.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var g in t) {
      var n = t[g];
      if (!(g === "value" && "defaultValue" in t && n == null || Ir && g === "children" && e === "noscript" || g === "class" || g === "className")) {
        var I = g.toLowerCase();
        g === "defaultValue" && "value" in t && t.value == null ? g = "value" : g === "download" && !(4993 + -11 * -791 + -13694) === n ? n = "" : I === "translate" && n === "no" ? n = !(-367 * -12 + 6066 + -10469) : I === "ondoubleclick" ? g = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || ar(t.type) ? I === "onfocus" ? g = "onfocusin" : I === "onblur" ? g = "onfocusout" : gr.test(g) ? g = I : -(1 * 4476 + -1333 * -1 + 2 * -2904) === e.indexOf("-") && ir.test(g) ? g = g.replace(nr, "-$&").toLowerCase() : n === null && (n = void (-2200 + -39 * -54 + 94)) : I = g = "oninput", I === "oninput" && A[g = I] && (g = "oninputCapture"), A[g] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = $A(t.children).forEach(function(a) {
      a.props.selected = -(-9 * 108 + 1242 + 1 * -269) != A.value.indexOf(a.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = $A(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(743 * 1 + -1 * 1982 + 1240) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", cr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = jI, Gn && Gn(o);
};
var Nn = G.__r;
G.__r = function(o) {
  Nn && Nn(o), Og = o.__c;
};
var Fn = G.diffed;
G.diffed = function(o) {
  Fn && Fn(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), Og = null;
};
var nA = {};
nA.readContext = function(o) {
  return Og.__n[o.__c].props.value;
}, nA.useCallback = Ae, nA.useContext = Qe, nA.useDebugValue = ko, nA.useDeferredValue = zI, nA.useEffect = z, nA.useId = WI, nA.useImperativeHandle = YI, nA.useInsertionEffect = $I, nA.useLayoutEffect = gt, nA.useMemo = pA, nA.useReducer = Yg, nA.useRef = SA, nA.useState = fA, nA.useSyncExternalStore = Aa, nA.useTransition = XI;
var ZI = {};
ZI.current = nA;
var VI = {};
VI.ReactCurrentDispatcher = ZI;
var xr = VI;
function Er(o) {
  return EA.bind(null, o);
}
function ai(o) {
  return !!o && o.$$typeof === jI;
}
function dr(o) {
  return ai(o) && o.type === FA;
}
function lr(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function ur(o) {
  return ai(o) ? Jg.apply(null, arguments) : o;
}
function hr(o) {
  return !!o.__k && (Ce(null, o), !(8271 * -1 + -9704 + -5 * -3595));
}
function fr(o) {
  return o && (o.base || 2465 + 16 * -20 + -2144 === o.nodeType && o) || null;
}
var pr = function(o, i) {
  return o(i);
}, yr = function(o, i) {
  return o(i);
}, Dr = FA;
function _I(o) {
  o();
}
function zI(o) {
  return o;
}
function XI() {
  return [!(6091 * -1 + 3668 * -2 + 18 * 746), _I];
}
var $I = gt, wr = ai;
function Aa(o, i) {
  var t = i(), e = fA({ h: { __: t, v: i } }), A = e[-5430 * 1 + -3047 + 8477].h, g = e[1725 + -1463 * 1 + -261];
  return gt(function() {
    A.__ = t, A.v = i, Di(A) && g({ h: A });
  }, [o, t, i]), z(function() {
    return Di(A) && g({ h: A }), o(function() {
      Di(A) && g({ h: A });
    });
  }, [o]), t;
}
function Di(o) {
  var i, t, e = o.v, A = o.__;
  try {
    var g = e();
    return !((i = A) === (t = g) && (-7 * -433 + -2377 * -2 + -5 * 1557 !== i || (6301 + 895 * 7 + -12565) / i == (-727 * 11 + -19 * 257 + 12881 * 1) / t) || i != i && t != t);
  } catch {
    return !(3167 + 5 * -823 + -474 * -2);
  }
}
var k = {};
k.useState = fA, k.useId = WI, k.useReducer = Yg, k.useEffect = z, k.useLayoutEffect = gt, k.useInsertionEffect = $I, k.useTransition = XI, k.useDeferredValue = zI, k.useSyncExternalStore = Aa, k.startTransition = _I, k.useRef = SA, k.useImperativeHandle = YI, k.useMemo = pA, k.useCallback = Ae, k.useContext = Qe, k.useDebugValue = ko, k.version = "17.0.2", k.Children = X0, k.render = rr, k.hydrate = Cr, k.unmountComponentAtNode = hr, k.createPortal = or, k.createElement = EA, k.createContext = ot, k.createFactory = Er, k.cloneElement = ur, k.createRef = R0, k.Fragment = FA, k.isValidElement = ai, k.isElement = wr, k.isFragment = dr, k.isMemo = lr, k.findDOMNode = fr, k.Component = GA, k.PureComponent = zi, k.memo = _0, k.forwardRef = KI, k.flushSync = yr, k.unstable_batchedUpdates = pr, k.StrictMode = Dr, k.Suspense = Bo, k.SuspenseList = lt, k.lazy = Ar, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xr;
var ke = k, mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function br(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function kr(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Gr(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function Nr(o) {
  if (o.__esModule) return o;
  var i = o.default;
  if (typeof i == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    t.prototype = i.prototype;
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
const Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: mr,
  getAugmentedNamespace: Nr,
  getDefaultExportFromCjs: br,
  getDefaultExportFromNamespaceIfNotNamed: Gr,
  getDefaultExportFromNamespaceIfPresent: kr
}, Symbol.toStringTag, { value: "Module" }));
var Sr = function(i, t, e, A) {
  var g = e ? e.call(A, i, t) : void 0;
  if (g !== void (8615 + -5 * 353 + -274 * 25)) return !!g;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var n = Object.keys(i), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = 2 * -121 + 2163 + -1921 * 1; r < n.length; r++) {
    var B = n[r];
    if (!a(B)) return !1;
    var C = i[B], x = t[B];
    if (g = e ? e.call(A, C, x, B) : void (688 * 11 + 8127 * -1 + -43 * -13), g === !1 || g === void (12 * -797 + -3517 + 13081) && C !== x) return !1;
  }
  return !0;
};
const Rr = Fr.getDefaultExportFromCjs(Sr);
var T = "-ms-", bt = "-moz-", H = "-webkit-", ea = "comm", ri = "rule", Hg = "decl", Mr = "@import", ta = "@keyframes", vr = "@layer", oa = Math.abs, Kg = String.fromCharCode, Xi = Object.assign;
function Lr(o, i) {
  return gA(o, 8575 * 1 + 1149 * -3 + -641 * 8) ^ -2990 * 2 + 8479 + 6 * -409 ? (((i << -449 * -1 + -2153 * -3 + -6906 * 1 ^ gA(o, 8635 + 1 * -9597 + -481 * -2)) << -27 * 7 + -4598 + -1 * -4789 ^ gA(o, 3 * -221 + -9119 + 3 * 3261)) << -4299 + 6 * -209 + 5555 * 1 ^ gA(o, -1274 + -1 * -1846 + -570)) << -7572 + 1 * -1250 + 8824 ^ gA(o, 5975 + -1 * 5972) : -13273 + 1 * 13273;
}
function ia(o) {
  return o.trim();
}
function ZA(o, i) {
  return (o = i.exec(o)) ? o[-7612 + 16 * 380 + 1532] : o;
}
function N(o, i, t) {
  return o.replace(i, t);
}
function so(o, i, t) {
  return o.indexOf(i, t);
}
function gA(o, i) {
  return o.charCodeAt(i) | -4639 + -6411 * 1 + -34 * -325;
}
function _e(o, i, t) {
  return o.slice(i, t);
}
function OA(o) {
  return o.length;
}
function ga(o) {
  return o.length;
}
function ut(o, i) {
  return i.push(o), o;
}
function Jr(o, i) {
  return o.map(i).join("");
}
function Sn(o, i) {
  return o.filter(function(t) {
    return !ZA(t, i);
  });
}
var Ci = -3087 + 1 * 4531 + -481 * 3, ze = 63 * -93 + 5763 + -1 * -97, na = 1 * 6719 + -6824 + 105, RA = 1 * 9942 + -8959 + -983, eA = 764 * -4 + -1 * -4538 + 78 * -19, nt = "";
function Bi(o, i, t, e, A, g, n, I) {
  var a = {};
  return a.value = o, a.root = i, a.parent = t, a.type = e, a.props = A, a.children = g, a.line = Ci, a.column = ze, a.length = n, a.return = "", a.siblings = I, a;
}
function oe(o, i) {
  return Xi(Bi("", null, null, "", null, null, 1 * -807 + -16 * -602 + -8825, o.siblings), o, { length: -o.length }, i);
}
function ve(o) {
  for (; o.root; ) o = oe(o.root, { children: [o] });
  ut(o, o.siblings);
}
function Ur() {
  return eA;
}
function Yr() {
  return eA = RA > -2038 + 1 * -4955 + -111 * -63 ? gA(nt, --RA) : 201 * -4 + 11 * 875 + -1 * 8821, ze--, eA === 7099 + -2363 * 3 && (ze = 2273 * -4 + 1 * 3338 + 5755, Ci--), eA;
}
function LA() {
  return eA = RA < na ? gA(nt, RA++) : 1783 * 1 + -4326 + 2543, ze++, eA === 5248 + -116 * -4 + -5702 && (ze = -3166 * -2 + -9796 + -21 * -165, Ci++), eA;
}
function we() {
  return gA(nt, RA);
}
function co() {
  return RA;
}
function Qi(o, i) {
  return _e(nt, o, i);
}
function $i(o) {
  switch (o) {
    case -7176 + 76 * -79 + 13180:
    case -5431 * 1 + 9873 + -4433:
    case -556 * 7 + -592 * 3 + 5678 * 1:
    case 13:
    case -5561 + 399 * -13 + 10780:
      return -9035 + -313 * 1 + 9353;
    case -189 + 1 * 222:
    case -7749 + -1 * -9323 + -1531 * 1:
    case -235 * -5 + -1646 + -1 * -515:
    case 3 * 2929 + -9775 + 3 * 345:
    case 6730 + -4 * 1667:
    case 1369 + -2 * 3293 + 5281:
    case -2 * -787 + 2552 + -125 * 32:
    case 59:
    case 1 * -1487 + -7061 * 1 + 8671:
    case 7125 + -673 * -7 + -11711:
      return -8480 + 1 * -3947 + 12431;
    case -6583 * 1 + -971 * 2 + -8583 * -1:
      return -4085 + 91 * -10 + -147 * -34;
    case 34:
    case 9179 + -457 * 20:
    case -8022 + 1129 * -3 + -1 * -11449:
    case -8147 + -1 * 5603 + 13841:
      return 1649 * -3 + 3 * -2141 + 5686 * 2;
    case 1631 + 1 * -1687 + 97:
    case -4973 * -1 + -27 * -333 + -143 * 97:
      return -559 * 12 + -9876 + 5 * 3317;
  }
  return -6036 + 573 * -2 + 7182;
}
function Wr(o) {
  return Ci = ze = -4244 * 2 + 4683 + -3806 * -1, na = OA(nt = o), RA = -1 * -8531 + -4171 + -4360 * 1, [];
}
function Or(o) {
  return nt = "", o;
}
function wi(o) {
  return ia(Qi(RA - (-2306 + -1 * 9102 + 11409), Ag(o === 3678 + 9553 * 1 + 90 * -146 ? o + (-3389 + -1 * -8726 + -5335) : o === 14811 + -14771 * 1 ? o + (101 * -79 + 3814 + -1 * -4166) : o)));
}
function Hr(o) {
  for (; (eA = we()) && eA < 5758 + 355 * 21 + 1318 * -10; ) LA();
  return $i(o) > -922 + 66 * 14 || $i(eA) > 13529 + -2 * 6763 ? "" : " ";
}
function Kr(o, i) {
  for (; --i && LA() && !(eA < -2 * -1301 + 3 * -3292 + 7322 || eA > -6518 * 1 + -4 * 833 + 9952 || eA > -599 * 14 + 5046 + 79 * 43 && eA < -10868 + -29 * -377 || eA > 6930 + -661 * -4 + -9504 && eA < 7331 + -2 * -509 + 1 * -8252); ) ;
  return Qi(o, co() + (i < 6800 + -9494 * -1 + -16288 && we() == -1 * 9644 + 1 * -9863 + -2171 * -9 && LA() == 9039 * -1 + 6795 + -1138 * -2));
}
function Ag(o) {
  for (; LA(); ) switch (eA) {
    case o:
      return RA;
    case -1115 * -2 + -3017 * -1 + 401 * -13:
    case -9304 * 1 + 2495 * -4 + 19323:
      o !== 9193 + 5106 * -1 + -4053 && o !== 3422 + -14 * -267 + -1 * 7121 && Ag(eA);
      break;
    case -6370 + 2 * 1829 + 64 * 43:
      o === -5 * 853 + 356 * -3 + -2687 * -2 && Ag(o);
      break;
    case 92:
      LA();
      break;
  }
  return RA;
}
function Tr(o, i) {
  for (; LA() && o + eA !== 6531 + -4415 * 1 + 2069 * -1 + (3 * 2224 + -5667 + -995); ) if (o + eA === -7012 + 7054 * 1 + 42 && we() === -12499 + -738 * -17) break;
  return "/*" + Qi(i, RA - 1) + "*" + Kg(o === -1479 + -6493 * 1 + 8019 ? o : LA());
}
function Pr(o) {
  for (; !$i(we()); ) LA();
  return Qi(o, RA);
}
function qr(o) {
  return Or(xo("", null, null, null, [""], o = Wr(o), 8611 + -1 * -6640 + 15251 * -1, [-3572 + 47 * 76], o));
}
function xo(o, i, t, e, A, g, n, I, a) {
  for (var r = 0, B = 0, C = n, x = 1949 * -5 + 1033 * 6 + -1 * -3547, s = 0, E = -648 + 5 * 1427 + -6487, l = 2937 + -5 * -1862 + 6 * -2041, u = 1059 + -2 * 529, c = -1 * 5419 + -5171 * -1 + 249 * 1, h = -2086 + 1 * 2086, m = "", R = A, M = g, J = e, w = m; u; ) switch (E = h, h = LA()) {
    case 892 * -5 + 2 * 2813 + -1 * 1126:
      if (E != -1 * -6969 + 85 * 83 + 994 * -14 && gA(w, C - (218 * 4 + 206 * -6 + 365)) == -2947 + 1 * 6398 + -3393) {
        so(w += N(wi(h), "&", "&\f"), "&\f", oa(r ? I[r - (-168 * -17 + -1093 * 7 + 11 * 436)] : 4 * -1896 + 8698 + -1114)) != -(3053 * -2 + 7083 + -976) && (c = -(-6713 + -2 * 3992 + 14698));
        break;
      }
    case 31 * -263 + 1 * -6001 + 14188:
    case 10375 + 2584 * -4:
    case 91:
      w += wi(h);
      break;
    case -3318 + -1 * -7001 + -3674:
    case 2931 + -43 * -123 + -8210:
    case -7 * -281 + 16 * -562 + 7038:
    case 5 * 268 + -4156 + 32 * 89:
      w += Hr(E);
      break;
    case 347 * 2 + 693 + -1295:
      w += Kr(co() - (1 * -5473 + -1 * -8332 + 2858 * -1), -18 * 83 + -1 * -9111 + -7610);
      continue;
    case -2909 + 3023 * -1 + 5979:
      switch (we()) {
        case 8040 + 2 * -3999:
        case -2 * 4339 + 20 * -228 + 13285:
          ut(jr(Tr(LA(), co()), i, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (-6652 * -1 + 6771 + -10 * 1330) * l:
      I[r++] = OA(w) * c;
    case (-7868 + -7993 * -1) * l:
    case 1 * -8669 + 1745 + -1 * -6983:
    case 419 + -1 * -9491 + 2 * -4955:
      switch (h) {
        case -2 * -3257 + -751 * 8 + -11 * 46:
        case -1 * 2764 + -9831 + 12720:
          u = -2857 * -1 + -6354 + 1 * 3497;
        case -1 * -2153 + -9251 + 1 * 7157 + B:
          c == -(-64 * -40 + 6574 + 1 * -9133) && (w = N(w, /\f/g, "")), s > -9 * 410 + 10 * -13 + 3820 && OA(w) - C && ut(s > -1 * 7174 + -6787 + -1999 * -7 ? Mn(w + ";", e, t, C - (1031 * 4 + 24 * -383 + 5069), a) : Mn(N(w, " ", "") + ";", e, t, C - (1717 + 14 * 1 + 13 * -133), a), a);
          break;
        case 59:
          w += ";";
        default:
          if (ut(J = Rn(w, i, t, r, B, A, I, m, R = [], M = [], C, g), g), h === -8434 + -11 * 593 + 15080)
            if (B === -1474 + 29 * 308 + -7458) xo(w, i, J, J, R, g, C, I, M);
            else switch (x === -1384 + 1483 * 1 && gA(w, 3) === -1 * 1039 + -1793 + 2942 ? 100 : x) {
              case 1 * -6922 + 4347 + 2675:
              case -7989 * 1 + -2 * -3418 + 1261:
              case -163 * 1 + -1690 + -327 * -6:
              case 62 * 47 + 1151 + -25 * 158:
                xo(o, J, J, e && ut(Rn(o, J, J, -49 * 191 + -8223 * -1 + 1136, 4283 * 2 + 5972 + -14538 * 1, A, I, m, A, R = [], C, M), M), A, M, C, I, e ? R : M);
                break;
              default:
                xo(w, J, J, J, [""], M, 3 * 693 + 8234 + -10313, I, M);
            }
      }
      r = B = s = 0, l = c = 1, m = w = "", C = n;
      break;
    case 17587 + 1 * -17529:
      C = 1 + OA(w), s = E;
    default:
      if (l < 1) {
        if (h == 123) --l;
        else if (h == 712 + -1297 * -2 + -3181 && l++ == 2999 * -1 + -8722 * 1 + -3907 * -3 && Yr() == 125) continue;
      }
      switch (w += Kg(h), h * l) {
        case 3479 + 2 * 3690 + -10821:
          c = B > 2059 * 1 + -3765 * 1 + 1706 ? 2675 + 478 * 1 + 1 * -3152 : (w += "\f", -(7151 + 5 * 1790 + 23 * -700));
          break;
        case -1198 + 3 * -349 + 2289:
          I[r++] = (OA(w) - (1320 + -1319 * 1)) * c, c = 1;
          break;
        case 1 * -6367 + 6244 * 1 + 1 * 187:
          we() === -5507 * -1 + 1 * 2174 + 1 * -7636 && (w += wi(LA())), x = we(), B = C = OA(m = w += Pr(co())), h++;
          break;
        case 45:
          E === 1704 + -21 * 79 && OA(w) == 4878 + -1174 * 4 + -180 && (l = -5104 + -12 * 434 + -4 * -2578);
      }
  }
  return g;
}
function Rn(o, i, t, e, A, g, n, I, a, r, B, C) {
  for (var x = A - 1, s = A === -2471 * -1 + -5855 + 4 * 846 ? g : [""], E = ga(s), l = 0, u = -3947 + 1 * 3947, c = -521 * 13 + -13 * 116 + 8281; l < e; ++l) for (var h = -6581 * -1 + 158 * 47 + 14007 * -1, m = _e(o, x + 1, x = oa(u = n[l])), R = o; h < E; ++h) (R = ia(u > -3 * -2243 + 1686 * 5 + -15159 ? s[h] + " " + m : N(m, /&\f/g, s[h]))) && (a[c++] = R);
  return Bi(o, i, t, A === 0 ? ri : I, a, r, B, C);
}
function jr(o, i, t, e) {
  return Bi(o, i, t, ea, Kg(Ur()), _e(o, -4262 + -104 * -41, -(359 * 3 + 1 * 6705 + -7780)), 124 * -61 + -8684 + -8 * -2031, e);
}
function Mn(o, i, t, e, A) {
  return Bi(o, i, t, Hg, _e(o, 2267 * -3 + -3885 + 10686, e), _e(o, e + (9590 + -1 * -1493 + 6 * -1847), -(14 * -293 + -7 * 523 + 12 * 647)), e, A);
}
function Ia(o, i, t) {
  switch (Lr(o, i)) {
    case -1 * -4009 + -19 * -166 + -2060:
      return H + "print-" + o + o;
    case -2493 * 3 + -4206 + -562 * -31:
    case -2 * -1707 + -6594 + 7381:
    case -1 * 8839 + 5721 * 1 + 6295:
    case 4534 + -36 * 38 + 3 * 89:
    case 6638 + -4997 * 1:
    case -234 * -37 + 3587 + -7788:
    case 952 * -1 + -1 * -1831 + -1021 * -2:
    case -2 * 497 + -8736 + 15302:
    case 6356:
    case 7253 * -1 + -1 * -9358 + 3739:
    case 5092 + 1 * -1901:
    case -2 * 3391 + 6540 + 6887:
    case 4019 * 2 + 5415 + -4 * 2612:
    case 5718 + 1 * 673:
    case 5879:
    case -1916 + -245 * -13 + 4354:
    case 1 * -8986 + 1034 * 1 + 14087 * 1:
    case -3 * -2858 + 2051 + -6026:
    case 377 * -16 + -18 * -356 + 4479:
    case -7961 * 1 + 761 * 1 + 11415:
    case -575 + 3482 * 2:
    case -7351 + 25 * 25 + 263 * 45:
    case 5365:
    case -817 * -9 + -10454 + -7 * -1246:
    case -6728 + 9 * 1173:
      return H + o + o;
    case -4322 * -1 + 1908 + -131 * 11:
      return bt + o + o;
    case 62 * -91 + 50 * -113 + 5547 * 3:
    case 1 * -8231 + -2849 + -97 * -158:
    case 4 * -628 + 1 * -3926 + 11248:
    case -3 * 3529 + 392 + 17163:
    case 115 * -29 + -5730 + 11821 * 1:
      return H + o + bt + o + T + o + o;
    case -624 * -16 + -2314 * -2 + -4 * 2169:
      switch (gA(o, i + (-613 * 13 + 3250 + 4730))) {
        case 972 + 1 * 1747 + -2605:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 7597 + -1 * -9523 + -17012:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 8231 * -1 + -5365 + 3 * 4547:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 13 * -185 + 1 * 8867 + 1 * 366:
    case -1529 + -2909 * -1 + -1444 * -2:
    case -23 + 115 * -73 + 11321:
      return H + o + T + o + o;
    case 5482 * -2 + 10716 + 121 * 53:
      return H + o + T + "flex-" + o + o;
    case -7962 + -239 * 39 + -22470 * -1:
      return H + o + N(o, /(\w+).+(:[^]+)/, H + "box-$1$2" + T + "flex-$1$2") + o;
    case 16 * 313 + 3481 + -3046:
      return H + o + T + "flex-item-" + N(o, /flex-|-self/g, "") + (ZA(o, /flex-|baseline/) ? "" : T + "grid-row-" + N(o, /flex-|-self/g, "")) + o;
    case -1 * -7779 + -3917 * -1 + -7021:
      return H + o + T + "flex-line-pack" + N(o, /align-content|flex-|-self/g, "") + o;
    case 4 * -1787 + 6 * 1097 + -3057 * -2:
      return H + o + T + N(o, "shrink", "negative") + o;
    case -4369 + -56 * -143 + 1653:
      return H + o + T + N(o, "basis", "preferred-size") + o;
    case 207 * -31 + -7839 + 20316:
      return H + "box-" + N(o, "-grow", "") + H + o + T + N(o, "grow", "positive") + o;
    case 6031 + 3941 * -2 + -305 * -21:
      return H + N(o, /([^-])(transform)/g, "$1" + H + "$2") + o;
    case 5265 + 3 * 1226 + 13 * -212:
      return N(N(N(o, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), o, "") + o;
    case -74 * 10 + 2 * -1693 + 9621:
    case -50 + 1201 * -7 + 12416:
      return N(o, /(image-set\([^]*)/, H + "$1$`$1");
    case -1 * -8139 + 727 * 3 + -8 * 669:
      return N(N(o, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + o + o;
    case 11 * -796 + -8381 * -1 + 183 * 25:
      if (!ZA(o, /flex-|baseline/)) return T + "grid-column-align" + _e(o, i) + o;
      break;
    case -23 * 122 + -6875 + 4091 * 3:
    case 732 + -23 * -30 + -114 * -17:
      return T + N(o, "template-", "") + o;
    case 1 * -9220 + 13 * 157 + 11563:
    case -15461 + 1 * 19077:
      return t && t.some(function(e, A) {
        return i = A, ZA(e.props, /grid-\w+-end/);
      }) ? ~so(o + (t = t[i].value), "span", -6497 + -1343 * 1 + 7840) ? o : T + N(o, "-start", "") + o + T + "grid-row-span:" + (~so(t, "span", 663 + 3 * -221) ? ZA(t, /\d+/) : +ZA(t, /\d+/) - +ZA(o, /\d+/)) + ";" : T + N(o, "-start", "") + o;
    case 9662 + -61 * 145 + -4079 * -1:
    case 4128:
      return t && t.some(function(e) {
        return ZA(e.props, /grid-\w+-start/);
      }) ? o : T + N(N(o, "-end", "-span"), "span ", "") + o;
    case -87 + -4873 * 2 + -3482 * -4:
    case 3583:
    case -273 * -27 + -5132 + 1829:
    case 2705 * 1 + -6060 * 1 + 5887:
      return N(o, /(.+)-inline(.+)/, H + "$1$2") + o;
    case -8344 + 4 * 734 + -12 * -1127:
    case 357 * 2 + -844 * -8 + -11 * 37:
    case 12657 + 863 * -8:
    case -334 + -3 * 654 + 7831:
    case -9892 * -1 + 10257 + -16 * 919:
    case 6782 + -23 * 47:
    case -8939 + 2 * -4430 + 22732:
    case 127 * -47 + -7619 + 18265:
    case 36 * -303 + -1527 + 8984 * 2:
    case -1144 + 1 * 6933:
    case 5021:
    case -3455 + 2 * 149 + 7922:
      if (OA(o) - (-5906 + 1835 * 4 + -1433) - i > 2 * -3152 + -2728 + -2 * -4519) switch (gA(o, i + (648 + -187 * -37 + 291 * -26))) {
        case 1 * 491 + -4 * 1655 + 6238:
          if (gA(o, i + (8963 * -1 + 2499 + 6468)) !== -2854 * -1 + 2790 + -1 * 5599) break;
        case -1 * 7673 + -2513 + -5144 * -2:
          return N(o, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + bt + (gA(o, i + (2 * 1981 + -2816 + -1143)) == 3163 * 2 + 747 + -6965 ? "$3" : "$2-$3")) + o;
        case -2028 + 1 * -4434 + 6577:
          return ~so(o, "stretch", -7346 * -1 + 2530 + -9876) ? Ia(N(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case -3216 * 1 + 653 * 11 + -3 * -395:
    case -22 * 459 + -3 * 3305 + 25933:
      return N(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, g, n, I, a, r) {
        return T + A + ":" + g + r + (n ? T + A + "-span:" + (I ? a : +a - +g) + r : "") + o;
      });
    case 15707 + 163 * -66:
      if (gA(o, i + (5166 + -10 * -610 + -11260)) === 121) return N(o, ":", ":" + H) + o;
      break;
    case 8561 + -3 * 2131 + 2 * 2138:
      switch (gA(o, gA(o, -9337 * 1 + -6668 + -83 * -193) === 8432 + -8387 * 1 ? -41 * 205 + 358 * 8 + -17 * -327 : 11)) {
        case 2039 * -1 + 3264 + 65 * -17:
          return N(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (gA(o, 14) === 129 * 43 + 5734 + -4 * 2809 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + T + "$2box$3") + o;
        case -6314 + 5 * 642 + 3204:
          return N(o, ":", ":" + T) + o;
      }
      break;
    case 5719:
    case 2647:
    case 6411 + -2 * 2138:
    case -8952 + -2974 * -2 + 6931:
    case 6096 + 1 * -7135 + 3430:
      return N(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function Go(o, i) {
  for (var t = "", e = 5259 + -2108 * -1 + -7367; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function Zr(o, i, t, e) {
  switch (o.type) {
    case vr:
      if (o.children.length) break;
    case Mr:
    case Hg:
      return o.return = o.return || o.value;
    case ea:
      return "";
    case ta:
      return o.return = o.value + "{" + Go(o.children, e) + "}";
    case ri:
      if (!OA(o.value = o.props.join(","))) return "";
  }
  return OA(t = Go(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function Vr(o) {
  var i = ga(o);
  return function(t, e, A, g) {
    for (var n = "", I = -4155 * -1 + 47 * 29 + -5518; I < i; I++) n += o[I](t, e, A, g) || "";
    return n;
  };
}
function _r(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function zr(o, i, t, e) {
  if (o.length > -(-83 * -91 + 1569 * 5 + -15397) && !o.return)
    switch (o.type) {
      case Hg:
        o.return = Ia(o.value, o.length, t);
        return;
      case ta:
        return Go([oe(o, { value: N(o.value, "@", "@" + H) })], e);
      case ri:
        if (o.length) return Jr(t = o.props, function(A) {
          switch (ZA(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ve(oe(o, { props: [N(A, /:(read-\w+)/, ":" + bt + "$1")] }));
              var g = {};
              g.props = [A], ve(oe(o, g)), Xi(o, { props: Sn(t, e) });
              break;
            case "::placeholder":
              ve(oe(o, { props: [N(A, /:(plac\w+)/, ":" + H + "input-$1")] })), ve(oe(o, { props: [N(A, /:(plac\w+)/, ":" + bt + "$1")] })), ve(oe(o, { props: [N(A, /:(plac\w+)/, T + "input-$1")] }));
              var n = {};
              n.props = [A], ve(oe(o, n)), Xi(o, { props: Sn(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var Xr = b, W = {}, Ge = typeof process < "u" && W !== void 0 && (W.REACT_APP_SC_ATTR || W.SC_ATTR) || "data-styled", aa = "active", ra = "data-styled-version", si = "6.1.11", Tg = `/*!sc*/
`, Pg = typeof window < "u" && "HTMLElement" in window, $r = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-5483 + -1 * -5483) !== W && void (-7513 + -75 * -23 + -4 * -1447) !== W.REACT_APP_SC_DISABLE_SPEEDY && W.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-7022 + -1 * 2768 + 890 * 11) !== W && void (5 * 1507 + -1 * -5885 + -13420) !== W.SC_DISABLE_SPEEDY && W.SC_DISABLE_SPEEDY !== "" ? W.SC_DISABLE_SPEEDY !== "false" && W.SC_DISABLE_SPEEDY : W.NODE_ENV !== "production"), vn = /invalid hook call/i, eo = /* @__PURE__ */ new Set(), AC = function(o, i) {
  if (W.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var g = !0;
      console.error = function(n) {
        for (var I = [], a = 6745 + 86 * 111 + -181 * 90; a < arguments.length; a++) I[a - (-757 * -5 + -3897 + 113 * 1)] = arguments[a];
        vn.test(n) ? (g = !1, eo.delete(e)) : A.apply(void (-1962 * 1 + 4634 + 2 * -1336), Ze([n], I, !1));
      }, SA(), g && !eo.has(e) && (console.warn(e), eo.add(e));
    } catch (n) {
      vn.test(n.message) && eo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, ci = Object.freeze([]), Xe = Object.freeze({});
function eC(o, i, t) {
  return void (-3169 * -1 + 101 * 75 + -10744) === t && (t = Xe), o.theme !== t.theme && o.theme || i || t.theme;
}
var eg = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), tC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oC = /(^-|-$)/g;
function Ln(o) {
  return o.replace(tC, "-").replace(oC, "");
}
var iC = /(a)(d)/gi, to = 1 * 9098 + -135 + -8911, Jn = function(o) {
  return String.fromCharCode(o + (o > -4936 + 33 * 130 + 61 * 11 ? 731 + -4 * 173 : 4693 + 2 * -4257 + -1 * -3918));
};
function tg(o) {
  var i, t = "";
  for (i = Math.abs(o); i > to; i = i / to | -2302 + -3 * 24 + 2374) t = Jn(i % to) + t;
  return (Jn(i % to) + t).replace(iC, "$1-$2");
}
var mi, Ca = -11004 + -16385 * -1, de = function(o, i) {
  for (var t = i.length; t; ) o = (-5211 + 1133 * -3 + 3 * 2881) * o ^ i.charCodeAt(--t);
  return o;
}, Ba = function(o) {
  return de(Ca, o);
};
function gC(o) {
  return tg(Ba(o) >>> 1727 + -16 * -207 + -5039);
}
function Qa(o) {
  return W.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function bi(o) {
  return typeof o == "string" && (W.NODE_ENV === "production" || o.charAt(494 * 16 + -6968 + -12 * 78) === o.charAt(-4605 * 1 + 5162 + 557 * -1).toLowerCase());
}
var bA = {};
bA.childContextTypes = !0, bA.contextType = !0, bA.contextTypes = !0, bA.defaultProps = !0, bA.displayName = !0, bA.getDefaultProps = !0, bA.getDerivedStateFromError = !0, bA.getDerivedStateFromProps = !0, bA.mixins = !0, bA.propTypes = !0, bA.type = !0;
var ie = {};
ie.name = !0, ie.length = !0, ie.prototype = !0, ie.caller = !0, ie.callee = !0, ie.arguments = !0, ie.arity = !0;
var xe = {};
xe.$$typeof = !0, xe.compare = !0, xe.defaultProps = !0, xe.displayName = !0, xe.propTypes = !0, xe.type = !0;
var Ue = {};
Ue.$$typeof = !0, Ue.render = !0, Ue.defaultProps = !0, Ue.displayName = !0, Ue.propTypes = !0;
var sa = typeof Symbol == "function" && Symbol.for, ca = sa ? Symbol.for("react.memo") : -2 * -24485 + -56785 + 67930, nC = sa ? Symbol.for("react.forward_ref") : 60112, IC = bA, aC = ie, xa = xe, rC = ((mi = {})[nC] = Ue, mi[ca] = xa, mi);
function Un(o) {
  return ("type" in (i = o) && i.type.$$typeof) === ca ? xa : "$$typeof" in o ? rC[o.$$typeof] : IC;
  var i;
}
var CC = Object.defineProperty, BC = Object.getOwnPropertyNames, Yn = Object.getOwnPropertySymbols, QC = Object.getOwnPropertyDescriptor, sC = Object.getPrototypeOf, Wn = Object.prototype;
function Ea(o, i, t) {
  if (typeof i != "string") {
    if (Wn) {
      var e = sC(i);
      e && e !== Wn && Ea(o, e, t);
    }
    var A = BC(i);
    Yn && (A = A.concat(Yn(i)));
    for (var g = Un(o), n = Un(i), I = 0; I < A.length; ++I) {
      var a = A[I];
      if (!(a in aC || t && t[a] || n && a in n || g && a in g)) {
        var r = QC(i, a);
        try {
          CC(o, a, r);
        } catch {
        }
      }
    }
  }
  return o;
}
function $e(o) {
  return typeof o == "function";
}
function qg(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function ue(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function On(o, i) {
  if (3269 + 467 * -7 === o.length) return "";
  for (var t = o[14477 + 14477 * -1], e = 2 * 4856 + -7103 + 16 * -163; e < o.length; e++) t += o[e];
  return t;
}
function At(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function og(o, i, t) {
  if (void (355 * -3 + -83 * -109 + -307 * 26) === t && (t = !1), !t && !At(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = 0; e < i.length; e++) o[e] = og(o[e], i[e]);
  else if (At(i))
    for (var e in i) o[e] = og(o[e], i[e]);
  return o;
}
function jg(o, i) {
  var t = {};
  t.value = i, Object.defineProperty(o, "toString", t);
}
var oA = {};
oA[1] = `Cannot create styled-component for component: %s.

`, oA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, oA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, oA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, oA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, oA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, oA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', oA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, oA[9] = "Missing document `<head>`\n\n", oA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, oA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, oA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", oA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, oA[14] = `ThemeProvider: "theme" prop is required.

`, oA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", oA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, oA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, oA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var cC = W.NODE_ENV !== "production" ? oA : {};
function xC() {
  for (var o = [], i = -7 * 793 + 3327 + 278 * 8; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[-16822 + -1 * -16822], e = [], A = -3912 + -37 * 161 + 9870, g = o.length; A < g; A += -6857 * 1 + 389 + 6469) e.push(o[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function It(o) {
  for (var i = [], t = 5039 * 1 + 8398 + -13436; t < arguments.length; t++) i[t - (4 * 2291 + -332 * 13 + -4847)] = arguments[t];
  return W.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > 226 * -8 + 6769 + -4961 ? " Args: ".concat(i.join(", ")) : "")) : new Error(xC.apply(void (10125 + -225 * 45), Ze([cC[o]], i, !1)).trim());
}
var EC = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(512), this.length = 7572 + 15 * 393 + -12955 * 1, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = 0, e = 0; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, g = A; i >= g; ) if ((g <<= 611 + -3 * -2168 + 1 * -7114) < 2 * 4611 + -1 * -6047 + -15269 * 1) throw It(4786 + -6 * 942 + -3 * -294, "".concat(i));
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(e), this.length = g;
      for (var n = A; n < g; n++) this.groupSizes[n] = 681 + 2654 * 3 + -201 * 43;
    }
    for (var I = this.indexOfGroup(i + (7111 + -1 * 5267 + -1843)), a = (n = -38 * -199 + -9749 + 2187, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[i]++, I++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 7781 + -9 * 559 + 250 * -11;
      for (var g = e; g < A; g++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || 9757 + -16 * -184 + -12701 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), g = A + e, n = A; n < g; n++) t += "".concat(this.tag.getRule(n)).concat(Tg);
    return t;
  }, o;
}(), dC = 1 * -4818 + 98 * -3 + 5113 * 1 << 4945 + -1 * 9602 + 4687, Eo = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), lo = -8838 + -987 * -2 + 6865, oo = function(o) {
  if (Eo.has(o)) return Eo.get(o);
  for (; No.has(lo); ) lo++;
  var i = lo++;
  if (W.NODE_ENV !== "production" && ((-4910 + -2455 * -2 | i) < -8671 + 534 * 18 + -941 * 1 || i > dC)) throw It(-1985 + 667 * 3, "".concat(i));
  return Eo.set(o, i), No.set(i, o), i;
}, lC = function(o, i) {
  lo = i + (-8230 + 8231 * 1), Eo.set(o, i), No.set(i, o);
}, uC = "style[".concat(Ge, "][").concat(ra, '="').concat(si, '"]'), hC = new RegExp("^".concat(Ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), fC = function(o, i, t) {
  for (var e, A = t.split(","), g = 1 * 3921 + 7546 + 11467 * -1, n = A.length; g < n; g++) (e = A[g]) && o.registerName(i, e);
}, pC = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (-7697 + 11 * 614 + -943 * -1) !== t ? t : "").split(Tg), A = [], g = 7 * -1037 + -6422 + -1 * -13681, n = e.length; g < n; g++) {
    var I = e[g].trim();
    if (I) {
      var a = I.match(hC);
      if (a) {
        var r = 0 | parseInt(a[1], 10), B = a[-628 * 9 + 6482 + -9 * 92];
        -7 * -1427 + 3845 + -13834 !== r && (lC(B, r), fC(o, B, a[3]), o.getTag().insertRules(r, A)), A.length = -8828 * 1 + 8952 + -124;
      } else A.push(I);
    }
  }
};
function yC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var da = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(Ge, "]")));
    return a[a.length - (-5 * -934 + -1 * 5925 + 1256)];
  }(t), g = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(Ge, aa), e.setAttribute(ra, si);
  var n = yC();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, g), e;
}, DC = function() {
  function o(i) {
    this.element = da(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -1 * -5585 + -522 * -5 + -8195, g = e.length; A < g; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw It(-38 * 7 + 11 * -344 + 4067);
    }(this.element), this.length = 0;
  }
  return o.prototype.insertRule = function(i, t) {
    try {
      return this.sheet.insertRule(t, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, o.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, o.prototype.getRule = function(i) {
    var t = this.sheet.cssRules[i];
    return t && t.cssText ? t.cssText : "";
  }, o;
}(), wC = function() {
  function o(i) {
    this.element = da(i), this.nodes = this.element.childNodes, this.length = -560 + -7 * -214 + 938 * -1;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -1019 * 2 + -342 + 2380) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), mC = function() {
  function o(i) {
    this.rules = [], this.length = -9213 + 111 * 83;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, 4951 + -2 * -892 + -5 * 1347, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, -1 * -2434 + 1458 + -3891), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), Hn = Pg, bC = { isServer: !Pg, useCSSOMInjection: !$r }, la = function() {
  function o(i, t, e) {
    void (1 * -5507 + -4231 + 9738) === i && (i = Xe), void (-4 * 779 + -903 + 4019) === t && (t = {});
    var A = this;
    this.options = hA(hA({}, bC), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Pg && Hn && (Hn = !1, function(g) {
      for (var n = document.querySelectorAll(uC), I = 787 * -9 + 8848 + 1 * -1765, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(Ge) !== aa && (pC(g, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), jg(this, function() {
      return function(g) {
        for (var n = g.getTag(), I = n.length, a = "", r = function(C) {
          var x = function(c) {
            return No.get(c);
          }(C);
          if (x === void 0) return "continue";
          var s = g.names.get(x), E = n.getGroup(C);
          if (void (-2740 + -2723 * -1 + 17) === s || -3715 + 5158 * -1 + -1 * -8873 === E.length) return "continue";
          var l = "".concat(Ge, ".g").concat(C, '[id="').concat(x, '"]'), u = "";
          void (3772 + 3 * 2423 + 61 * -181) !== s && s.forEach(function(c) {
            c.length > -13 * 557 + 7610 * 1 + 9 * -41 && (u += "".concat(c, ","));
          }), a += "".concat(E).concat(l, '{content:"').concat(u, '"}').concat(Tg);
        }, B = -2 * -2361 + 1150 * 5 + -2 * 5236; B < I; B++) r(B);
        return a;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return oo(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return void (-7859 + -46 * -59 + 5145) === t && (t = !0), new o(hA(hA({}, this.options), i), this.gs, t && this.names || void (-17 * 91 + 66 * 113 + -23 * 257));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 3303 + -1 * 5383 + -26 * -80) + (-1618 + 9941 * 1 + 146 * -57);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new mC(A) : e ? new DC(A) : new wC(A);
    }(this.options), new EC(i)));
    var i;
  }, o.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, o.prototype.registerName = function(i, t) {
    if (oo(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, o.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(oo(i), e);
  }, o.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, o.prototype.clearRules = function(i) {
    this.getTag().clearGroup(oo(i)), this.clearNames(i);
  }, o.prototype.clearTag = function() {
    this.tag = void (-806 + 8453 * -1 + 9259);
  }, o;
}(), kC = /&/g, GC = /^\s*\/\/.*$/gm;
function ua(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ua(t.children, i)), t;
  });
}
function ha(o) {
  var i, t, e, A = o === void 0 ? Xe : o, g = A.options, n = void (1 * 6629 + 2889 + -4759 * 2) === g ? Xe : g, I = A.plugins, a = void (1 * 4987 + 1 * 8039 + -13 * 1002) === I ? ci : I, r = function(x, s, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > -16 * 191 + -277 * 14 + 6934 ? ".".concat(i) : x;
  }, B = a.slice();
  B.push(function(x) {
    x.type === ri && x.value.includes("&") && (x.props[-3079 * 2 + 1130 + 5028] = x.props[2070 + 1 * -9305 + 1447 * 5].replace(kC, t).replace(e, r));
  }), n.prefix && B.push(zr), B.push(Zr);
  var C = function(x, s, E, l) {
    s === void 0 && (s = ""), void (-519 * 7 + 1793 * 2 + -47 * -1) === E && (E = ""), void (-2 * -538 + -3785 + -9 * -301) === l && (l = "&"), i = l, t = s, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = x.replace(GC, ""), c = qr(E || s ? "".concat(E, " ").concat(s, " { ").concat(u, " }") : u);
    n.namespace && (c = ua(c, n.namespace));
    var h = [];
    return Go(c, Vr(B.concat(_r(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(x, s) {
    return s.name || It(5887 * 1 + -3 * -1175 + 9397 * -1), de(x, s.name);
  }, Ca).toString() : "", C;
}
var NC = new la(), ig = ha(), Zg = ke.createContext({ shouldForwardProp: void (6437 + 41 * -157), styleSheet: NC, stylis: ig });
Zg.Consumer;
var FC = ke.createContext(void (-1185 + 1 * 1185));
function gg() {
  return Qe(Zg);
}
function SC(o) {
  var i = fA(o.stylisPlugins), t = i[1439 * 5 + -8794 + 1599], e = i[-8802 + -7425 * 1 + 16228], A = gg().styleSheet, g = pA(function() {
    var B = A, C = {};
    return C.useCSSOMInjection = !1, o.sheet ? B = o.sheet : o.target && (B = B.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (B = B.reconstructWithOptions(C)), B;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), n = pA(function() {
    var B = {};
    B.namespace = o.namespace, B.prefix = o.enableVendorPrefixes;
    var C = {};
    return C.options = B, C.plugins = t, ha(C);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  z(function() {
    Rr(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var I = pA(function() {
    var B = {};
    return B.shouldForwardProp = o.shouldForwardProp, B.styleSheet = g, B.stylis = n, B;
  }, [o.shouldForwardProp, g, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, ke.createElement(Zg.Provider, a, ke.createElement(FC.Provider, r, o.children));
}
var Kn = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, g) {
      void (2840 + -7964 * -1 + -10804 * 1) === g && (g = ig);
      var n = e.name + g.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, g(e.rules, n, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, jg(this, function() {
      throw It(-5131 + 43 * 29 + 3896, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return void (-5904 + 8 * 738) === i && (i = ig), this.name + i.hash;
  }, o;
}(), RC = function(o) {
  return o >= "A" && o <= "Z";
};
function Tn(o) {
  for (var i = "", t = -5 * -1598 + -5002 + 166 * -18; t < o.length; t++) {
    var e = o[t];
    if (t === 1 && e === "-" && o[4795 * 1 + -6998 + 2203] === "-") return o;
    RC(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var fa = function(o) {
  return o == null || o === !1 || o === "";
}, pa = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var g = o[A];
    o.hasOwnProperty(A) && !fa(g) && (Array.isArray(g) && g.isCss || $e(g) ? e.push("".concat(Tn(A), ":"), g, ";") : At(g) ? e.push.apply(e, Ze(Ze(["".concat(A, " {")], pa(g), !1), ["}"], !1)) : e.push("".concat(Tn(A), ": ").concat((i = A, (t = g) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -14658 + -4886 * -3 === t || i in Xr || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function me(o, i, t, e) {
  if (fa(o)) return [];
  if (qg(o)) return [".".concat(o.styledComponentId)];
  if ($e(o)) {
    if (!$e(g = o) || g.prototype && g.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return W.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Kn || At(A) || A === null || console.error("".concat(Qa(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(A, i, t, e);
  }
  var g;
  return o instanceof Kn ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : At(o) ? pa(o) : Array.isArray(o) ? Array.prototype.concat.apply(ci, o.map(function(n) {
    return me(n, i, t, e);
  })) : [o.toString()];
}
function MC(o) {
  for (var i = 78 * -89 + -29 * 1 + 6971 * 1; i < o.length; i += -417 * 1 + 1 * 6913 + -6495) {
    var t = o[i];
    if ($e(t) && !qg(t)) return !1;
  }
  return !0;
}
var vC = Ba(si), LC = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = W.NODE_ENV === "production" && (void (-6734 + -25 * -35 + 5859) === e || e.isStatic) && MC(i), this.componentId = t, this.baseHash = de(vC, t), this.baseStyle = e, la.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ue(A, this.staticRulesId);
      else {
        var g = On(me(this.rules, i, t, e)), n = tg(de(this.baseHash, g) >>> 1 * -5449 + -1 * -9859 + -4410);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(g, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = ue(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = de(this.baseHash, e.hash), r = "", B = -6423 + 3 * 2141; B < this.rules.length; B++) {
        var C = this.rules[B];
        if (typeof C == "string") r += C, W.NODE_ENV !== "production" && (a = de(a, C));
        else if (C) {
          var x = On(me(C, i, t, e));
          a = de(a, x + B), r += x;
        }
      }
      if (r) {
        var s = tg(a >>> 0);
        t.hasNameForId(this.componentId, s) || t.insertRules(this.componentId, s, e(r, ".".concat(s), void (-22 * -289 + 1 * 8387 + -14745), this.componentId)), A = ue(A, s);
      }
    }
    return A;
  }, o;
}(), ya = ke.createContext(void (-1 * 2647 + -7546 + 10193));
ya.Consumer;
var ki = {}, Pn = /* @__PURE__ */ new Set();
function JC(o, i, t) {
  var e = qg(o), A = o, g = !bi(o), n = i.attrs, I = void (-3923 + -732 * -1 + 3191) === n ? ci : n, a = i.componentId, r = void (-5 * -1943 + -8574 + -1141) === a ? function(M, J) {
    var w = typeof M != "string" ? "sc" : Ln(M);
    ki[w] = (ki[w] || 2 * -4637 + 9976 + -6 * 117) + (10973 + -1 * 10972);
    var q = "".concat(w, "-").concat(gC(si + w + ki[w]));
    return J ? "".concat(J, "-").concat(q) : q;
  }(i.displayName, i.parentComponentId) : a, B = i.displayName, C = void (12652 + 2 * -6326) === B ? function(M) {
    return bi(M) ? "styled.".concat(M) : "Styled(".concat(Qa(M), ")");
  }(o) : B, x = i.displayName && i.componentId ? "".concat(Ln(i.displayName), "-").concat(i.componentId) : i.componentId || r, s = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, E = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var l = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var u = i.shouldForwardProp;
      E = function(M, J) {
        return l(M, J) && u(M, J);
      };
    } else E = l;
  }
  var c = new LC(t, x, e ? A.componentStyle : void (461 * 4 + -3016 + 1172));
  function h(M, J) {
    return function(w, q, lA) {
      var AA = w.attrs, wA = w.componentStyle, j = w.defaultProps, rt = w.foldedComponentIds, an = w.styledComponentId, b0 = w.target, k0 = ke.useContext(ya), G0 = gg(), li = w.shouldForwardProp || G0.shouldForwardProp;
      W.NODE_ENV !== "production" && ko(an);
      var rn = eC(q, k0, j) || Xe, qA = function(zt, Qt, Xt) {
        var Me = {};
        Me.className = void (-1 * -2192 + 7866 + -10058), Me.theme = Xt;
        for (var fi, se = hA(hA({}, Qt), Me), pi = 214 * 46 + 595 + -11 * 949; pi < zt.length; pi += 14939 + 1 * -14938) {
          var $t = $e(fi = zt[pi]) ? fi(se) : fi;
          for (var ee in $t) se[ee] = ee === "className" ? ue(se[ee], $t[ee]) : ee === "style" ? hA(hA({}, se[ee]), $t[ee]) : $t[ee];
        }
        return Qt.className && (se.className = ue(se.className, Qt.className)), se;
      }(AA, q, rn), Ct = qA.as || b0, Bt = {};
      for (var mA in qA) void (1 * -2027 + -1283 * -7 + -6954) === qA[mA] || mA[-1872 + -127 * -52 + -1183 * 4] === "$" || mA === "as" || mA === "theme" && qA.theme === rn || (mA === "forwardedAs" ? Bt.as = qA.forwardedAs : li && !li(mA, Ct) || (Bt[mA] = qA[mA], li || W.NODE_ENV !== "development" || j0(mA) || Pn.has(mA) || !eg.has(Ct) || (Pn.add(mA), console.warn('styled-components: it looks like an unknown prop "'.concat(mA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ui = function(zt, Qt) {
        var Xt = gg(), Me = zt.generateAndInjectStyles(Qt, Xt.styleSheet, Xt.stylis);
        return W.NODE_ENV !== "production" && ko(Me), Me;
      }(wA, qA);
      W.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(ui);
      var hi = ue(rt, an);
      return ui && (hi += " " + ui), qA.className && (hi += " " + qA.className), Bt[bi(Ct) && !eg.has(Ct) ? "class" : "className"] = hi, Bt.ref = lA, EA(Ct, Bt);
    }(m, M, J);
  }
  h.displayName = C;
  var m = ke.forwardRef(h), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, m.attrs = s, m.componentStyle = c, m.displayName = C, m.shouldForwardProp = E, m.foldedComponentIds = e ? ue(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : o, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(J) {
      for (var w = [], q = 5 * 734 + 6842 + 457 * -23; q < arguments.length; q++) w[q - (-8874 + -157 * -16 + -9 * -707)] = arguments[q];
      for (var lA = -5918 + -7597 * 1 + 13515, AA = w; lA < AA.length; lA++) og(J, AA[lA], !0);
      return J;
    }({}, A.defaultProps, M) : M;
  } }), W.NODE_ENV !== "production" && (AC(C, x), m.warnTooManyClasses = /* @__PURE__ */ function(M, J) {
    var w = {}, q = !1;
    return function(lA) {
      if (!q && (w[lA] = !0, Object.keys(w).length >= 5175 * -1 + 5588 + 3 * -71)) {
        var AA = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(-9387 + 223 * 25 + 4012, " classes were generated for component ").concat(M).concat(AA, `.
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
  }(C, x)), jg(m, function() {
    return ".".concat(m.styledComponentId);
  }), g && Ea(m, o, R), m;
}
function qn(o, i) {
  for (var t = [o[6071 + 1 * -873 + -5198]], e = -6966 + -6387 * 1 + 13353, A = i.length; e < A; e += -4300 + 11 * 391) t.push(i[e], o[e + (539 + 3331 * -1 + -399 * -7)]);
  return t;
}
var jn = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function UC(o) {
  for (var i = [], t = 7841 + 1 * -3053 + -4787 * 1; t < arguments.length; t++) i[t - (-8402 * -1 + -1313 * 1 + -7088)] = arguments[t];
  if ($e(o) || At(o)) return jn(me(qn(ci, Ze([o], i, !0))));
  var e = o;
  return -1 * -6019 + 2773 + 56 * -157 === i.length && 215 * -41 + 1283 * -1 + 10099 === e.length && typeof e[4850 + 2 * 1709 + -8268] == "string" ? me(e) : jn(me(qn(e, i)));
}
function ng(o, i, t) {
  if (void (5464 + 995 * 10 + -15414) === t && (t = Xe), !i) throw It(13 * 227 + 268 * -16 + 1338, i);
  var e = function(A) {
    for (var g = [], n = -2419 * -4 + -4 * 953 + 41 * -143; n < arguments.length; n++) g[n - 1] = arguments[n];
    return o(i, t, UC.apply(void (-3919 + 14 * 31 + 85 * 41), Ze([A], g, !1)));
  };
  return e.attrs = function(A) {
    return ng(o, i, hA(hA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return ng(o, i, hA(hA({}, t), A));
  }, e;
}
var Da = function(o) {
  return ng(JC, o);
}, Zt = Da;
eg.forEach(function(o) {
  Zt[o] = Da(o);
});
W.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var io = "__sc-".concat(Ge, "__");
W.NODE_ENV !== "production" && W.NODE_ENV !== "test" && typeof window < "u" && (window[io] || (window[io] = 0), -5854 + 545 * 1 + -59 * -90 === window[io] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[io] += -275 * 19 + -3 * -37 + -11 * -465);
const YC = Zt.div`
  position: relative;
`, WC = Zt.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class U extends Error {
  constructor(t, e) {
    super(t);
    D(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof U) return t;
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
    return new U(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof U) return t;
    const e = "An unexpected error has occurred";
    return new U(e);
  }
}
const uo = {};
uo.CONTINUE_DETECTION = "continue-detection", uo.SWITCH_CAMERA = "switch-camera", uo.TOGGLE_MIRROR = "toggle-mirror";
const Gi = uo, Ig = {};
Ig.FIRST_FRAME = "first-frame", Ig.FIRST_VALID_FRAME = "first-valid-frame";
const Ni = Ig, wa = {};
wa.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Zn = wa;
var KA = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(KA || {}), OC = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(OC || {}), HC = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(HC || {}), KC = ((o) => (o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(KC || {}), TC = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(TC || {}), PC = ((o) => (o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(PC || {});
const jA = {};
jA.CANDIDATE_SELECTION = "candidate_selection", jA.DOCUMENT_CENTERING = "document_centering", jA.DOCUMENT_NOT_PRESENT = "document_not_present", jA.DOCUMENT_TOO_FAR = "document_too_far", jA.SHARPNESS_TOO_LOW = "sharpness_too_low", jA.BRIGHTNESS_TOO_LOW = "brightness_too_low", jA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", jA.HOTSPOTS_PRESENT = "hotspots_present";
const VA = jA, ge = {};
ge.isPresent = VA.DOCUMENT_NOT_PRESENT, ge.isNotSmall = VA.DOCUMENT_TOO_FAR, ge.isNotOutOfBounds = VA.DOCUMENT_CENTERING, ge.isSharp = VA.SHARPNESS_TOO_LOW, ge.isNotDim = VA.BRIGHTNESS_TOO_LOW, ge.isNotBright = VA.BRIGHTNESS_TOO_HIGH, ge.noHotspots = VA.HOTSPOTS_PRESENT;
const qC = ge, ag = {};
ag.FRONT = "user", ag.REAR = "environment";
const Fo = ag, rg = {};
rg.AUTO_CAPTURE = "AUTO_CAPTURE", rg.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const ma = rg, ht = {};
ht.LOADING = "LOADING", ht.ERROR = "ERROR", ht.WAITING = "WAITING", ht.RUNNING = "RUNNING";
const dA = ht;
var jC = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(jC || {});
const xi = ot(void 0);
xi.displayName = "AppStateContext";
function Fe() {
  const o = Qe(xi);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const ZC = xi.Provider;
class ba extends GA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new U("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === dA.ERROR ? null : this.props.children;
  }
}
D(ba, "contextType", xi);
const VC = Zt.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, _C = Zt.div`
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
function zC() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const XC = KI(
  ({ detectionDetails: o, isImageMirror: i }, t) => zC() ? (console.log(o), /* @__PURE__ */ p(FA, { children: [
    /* @__PURE__ */ p(VC, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ p(_C, { children: /* @__PURE__ */ p("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), So = ot(void 0);
So.displayName = "AnalyticsContext";
function ka() {
  const o = Qe(So);
  if (o === void 0)
    throw new Error(`${So.displayName} must be used within a AnalyticsProvider`);
  return o;
}
(function(o, i) {
  const t = o();
  function e(I, a, r, B, C) {
    return cA(C - -777, r);
  }
  function A(I, a, r, B, C) {
    return cA(C - 134, B);
  }
  function g(I, a, r, B, C) {
    return cA(B - -537, a);
  }
  function n(I, a, r, B, C) {
    return cA(a - -222, I);
  }
  for (; ; )
    try {
      if (-parseInt(n("4cps", -31, -20, -41, -45)) / 1 * (-parseInt(n("TA^S", -52, -64, -43, -69)) / 2) + parseInt(n("Q*YG", -53, -49, -46, -42)) / 3 + -parseInt(e(-609, -604, "d8*f", -610, -609)) / 4 + parseInt(A(333, 339, 327, "Egf[", 327)) / 5 + parseInt(g(-355, "w48r", -355, -358, -359)) / 6 + parseInt(e(-596, -610, "DMLO", -604, -600)) / 7 + -parseInt(A(337, 319, 327, "TA^S", 321)) / 8 * (parseInt(e(-586, -595, "06FY", -603, -587)) / 9) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mo, 995 * -415 + -2 * -230151 + -185438 * -1);
function Cg(o, i, t, e, A) {
  return cA(A - 674, i);
}
const Ro = ot(void (5 * 1289 + 5812 + -12257));
function kt(o, i, t, e, A) {
  return cA(e - -381, i);
}
Ro[kt(-214, "Q*YG", -213, -206) + kt(-197, "Eps]", -217, -209) + "e"] = kt(-184, "06FY", -186, -186) + $C(-85, -74, -75, -67, "MDL3") + Cg(855, "Egf[", 868, 847, 859);
function $C(o, i, t, e, A) {
  return cA(t - -255, A);
}
function Vt() {
  const o = Qe(Ro);
  function i(g, n, I, a, r) {
    return Cg(g - 293, a, I - 128, a - 343, I - -554);
  }
  function t(g, n, I, a, r) {
    return kt(g - 260, I, I - 151, r - 1353);
  }
  function e(g, n, I, a, r) {
    return Cg(g - 35, r, I - 220, a - 392, n - -593);
  }
  if (o === void (2077 + 1201 * -1 + -876)) throw new Error(Ro[i(312, 302, 301, "x4uV") + e(260, 263, 257, 276, "x4uV") + "e"] + (i(324, 319, 316, "9SH$") + t(1172, 1158, "%tfw", 1159, 1164) + t(1169, 1169, "![^V", 1173, 1169) + t(1157, 1157, "iWU*", 1160, 1150) + i(308, 299, 306, "xRo$") + i(304, 288, 303, "NmNe") + A(491, 507, 497, "Eps]") + e(283, 279, 273, 282, "QCcG")));
  function A(g, n, I, a, r) {
    return kt(g - 402, a, I - 437, I - 702);
  }
  return o;
}
function cA(o, i) {
  const t = Mo();
  return cA = function(e, A) {
    e = e - 167;
    let g = t[e];
    if (cA.dDrnKn === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      cA.VuhAUS = B, o = arguments, cA.dDrnKn = !0;
    }
    const I = t[181 * -49 + -1 * -9886 + -1017 * 1], a = e + I, r = o[a];
    return r ? g = r : (cA.gqeBDf === void 0 && (cA.gqeBDf = !0), g = cA.VuhAUS(g, A), o[a] = g), g;
  }, cA(o, i);
}
function Mo() {
  const o = ["W7hdLM8", "W7HJWRjbWOpcIMhcNaKlWPNdJq", "xsNdS8olWOBdRCkt", "eYJcM8oHnSoiW4xdKrFcKcRcVq", "wmoIW73cICkKW4NcG14geSopW6m", "wSkHm1COWPVdISkGWP0MWPW", "WOKbfxpdHZa8W6vTW4FdPCkHgq", "WRrdF0jw", "nCoZiHa6ifmAWODAgSoq", "W5pcGSk8WOL7zdvM", "cmk9WRZdICo4", "WOvixLvs", "WQ7dOSk9DWSigCoElSo6CcNcJq", "cSoPWRJcSCo7", "BrhcH8kHbLxdVL5uW7LUWPW", "BSoSyHRcMa", "W7FcVmo8WPre", "W7lcRmobWOvf", "fCkNamkuW50", "v8kRW6ldQmkLm8oDWPLHWRTzkG", "iSoaWObx", "W4ldLCoiWQHA", "xmkNuW1yWR3dOSkv", "rSo9WPRcMr7cQXHRlSkLWReQcW", "W7bRWRzbWOZcGtxcGWqVWOhdQSo1", "ASoqW6lcOGvMWRddG0FcPbNcT8kF", "W5ddJ8kaWRDOWPyv", "W5NcGmkLWOOy", "z8kvW4WrWQDtnmkME2G8W6BcOa", "W58AW6zYyIymWQrDndm", "fmkpWRpdT1K", "v8kHW5JdKLm", "WPtcKSk/W4mo"];
  return Mo = function() {
    return o;
  }, Mo();
}
const go = (o, i) => Math.hypot(i.x - o.x, i.y - o.y), vo = (o) => o.length < 1 ? 8022 * -1 + 383 * -3 + 3057 * 3 : o.reduce((t, e) => t + e, -1 * -3229 + -206 * 46 + 1 * 6247) / o.length, et = (o) => Number.parseFloat(o.toFixed(3)), AB = (o) => {
  const { bottomLeft: i, bottomRight: t, topLeft: e, topRight: A } = o, g = go(e, A), n = go(A, t), I = go(i, t), a = go(e, i);
  return Math.min(g, n, I, a);
}, eB = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(-1 * -1999 + -2094 + 95, 1 * 1614 + -8156 + 6542 * 1, i.canvas.width, i.canvas.height);
}, tB = -3796 + -227 * -7 + 69 * 32 + 0.5, oB = -9028 + -9 * 727 + 15571 + 0.85, Fi = 18 * -341 + 2 * 1310 + 4518, iB = 7 * -1157 + 7033 * 1 + 1666, gB = -2193 + -313 * -19 + 3754 * -1, nB = "dot-auto-capture-video";
function IB(o, i) {
  return o < Fi && i >= Fi ? Fi : o;
}
function aB(o, i) {
  return o < i ? o : i;
}
function Ga({ height: o, width: i }) {
  let t;
  return i > o ? t = IB(o, i) : t = i, { width: t, height: aB(o, t) };
}
const rB = (o, i) => Math.min(o, i), Na = (o) => {
  const i = Ga(o).width, t = i * oB, e = (o.width - t) / (-7958 * 1 + 2232 + 5728), A = t / tB, g = (o.height - A) / (10 * -410 + -137 * 29 + 8075), n = {};
  return n.shiftX = e, n.shiftY = g, n.width = t, n.height = A, n;
}, CB = (o) => {
  const { height: i, shiftX: t, shiftY: e, width: A } = Na(o), g = {};
  return g.shiftX = t / o.width, g.shiftY = e / o.height, g.width = A / o.width, g.height = i / o.height, g;
}, BB = "@innovatrics/dot-common-auto-capture", QB = "7.2.1", sB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, cB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, xB = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, EB = {
  name: BB,
  private: !0,
  version: QB,
  scripts: sB,
  dependencies: cB,
  devDependencies: xB
}, dB = 1 * -7411 + -7545 + 14956 + 0.8, lB = 2329 * 1 + 9 * 85 + -3094 + 0.43, uB = 4 * -1966 + -3 * 2099 + 14161 + 0.03, hB = 1906 * -1 + -6195 + 8101 + 0.5, fB = -4572 + 2187 * -1 + -2253 * -3 + 0.25, pB = -1 * 8189 + 2746 + 5443 + 0.9, yB = -1 * -4718 + 229 * 19 + 9069 * -1 + 0.1, ho = {};
ho.minDuration = 1e3, ho.maxDuration = 2500, ho.minFrames = 10;
const Si = ho, Bg = {};
Bg.max = 100, Bg.min = 10;
const Vn = Bg, DB = -9769 + 10489 * 1, wB = -9756 + 1 * -5408 + -668 * -23, mB = 4, ft = {};
ft.width = 200, ft.height = 200, ft.top = 50, ft.left = 50;
const bB = ft, Fa = "AES-CBC", Sa = "RSA-OAEP", kB = "SHA-256", GB = "image/jpeg", NB = 2546 + 2 * -664 + 10 * -121, Ra = "/dot-assets", _n = "dot_embedded_bg.wasm", Vg = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), zn = () => {
  const o = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return o && i;
}, FB = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, Qg = (o) => new Promise((i) => {
  setTimeout(i, o);
}), SB = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? et(t) : t)), Ma = () => EB.version, va = (o) => new URL(o).hostname.replace("www.", ""), RB = () => va(window.location.href) === "localhost", no = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), MB = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o;
function vB(o) {
  return o.at(-1) === "/" ? o.slice(5713 * -1 + -5834 + 11547, -(217 + -16 * -56 + -1112)) : o;
}
function La(o) {
  return "" + vB(o ?? "") + Ra;
}
const LB = () => "prod".toLowerCase() === "dev";
var ne;
class Ja extends Array {
  constructor(t) {
    super();
    O(this, ne);
    Y(this, ne, t);
  }
  get size() {
    return y(this, ne);
  }
  pushFixed(...t) {
    if (t.length > y(this, ne)) {
      const e = t.slice(-y(this, ne));
      this.push(...e);
      return;
    }
    this.length === y(this, ne) && this.splice(-916 * 10 + 1437 * 3 + 4849, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
  }
}
ne = new WeakMap();
const Ua = (o, i, t = GB) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), JB = async (o) => Ua(o, 1843 * -1 + 1 * -2222 + -1385 * -3), UB = async (o) => Ua(o, -89 * -33 + -1107 + 5 * -346, "image/png"), Ya = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, -2 * 4443 + 2 * 3917 + 526 * 2, -7656 + -232 * -33, t.width, t.height), t;
}, YB = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(-1912 + 2 * 509 + 894, -4969 + 4969 * 1, o.width, o.height);
  return t;
};
function Xn(o, i, t) {
  return t - i / 2 < 1 * 8780 + -3490 + 115 * -46 ? 14 * -346 + -381 * -23 + -1 * 3919 : t + i / (-4828 * -2 + 27 * -357 + -15) > o ? o - i : t - i / (-13 * 31 + 3691 + -3286);
}
function WB(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / (8195 + 1 * -6623 + 368 * -4)), g = e * (i.top / (-1 * 895 + 1 * -5659 + 6 * 1109));
  return { width: i.width, height: i.height, shiftX: Xn(t, i.width, A), shiftY: Xn(e, i.height, g) };
}
async function OB(o, i) {
  const t = WB(o, i), e = Ya(o, t);
  return UB(e);
}
const HB = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height), A.stroke());
}, Ri = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: g, width: n } = i, I = {};
  I.x = A, I.y = g;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, HB(o, a, t);
};
function KB({ canvas: o, color: i, fill: t, offset: e = -3603 + -1 * -3603, polygon: A }) {
  const g = o.getContext("2d");
  if (!g) return;
  const { bottomLeft: n, bottomRight: I, topLeft: a, topRight: r } = A;
  t ? g.fillStyle = i : g.strokeStyle = i, g.beginPath(), g.moveTo(a.x + e, a.y + e), g.lineTo(r.x + e, r.y + e), g.lineTo(I.x + e, I.y + e), g.lineTo(n.x + e, n.y + e), g.closePath(), t ? g.fill() : g.stroke();
}
const TB = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = i;
  return !(o.x < e || o.x > e + g || o.y < A || o.y > A + t);
}, PB = (o, i) => Object.values(o).every((t) => TB(t, i));
function Lo(o) {
  const { height: i, width: t } = Ga(o), e = (o.width - t) / (1 * 9309 + -4697 + -922 * 5), A = (o.height - i) / (-1 * 4565 + -7879 + 12446), g = {};
  return g.shiftX = e, g.shiftY = A, g.width = t, g.height = i, g;
}
function Wa(o, i, t) {
  const { height: e, width: A } = t, g = rB(o.width, o.height), n = A - g * i * (-1998 * -5 + 1243 + -11 * 1021), I = e - g * i * (-1 * 6221 + 1330 * -3 + 10213), a = (o.width - n) / (1041 * -2 + -8449 + 10533), r = (o.height - I) / (14 * -48 + 9444 * -1 + 10118), B = {};
  return B.shiftX = a, B.shiftY = r, B.width = n, B.height = I, B;
}
function Io(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
function qB(o, i) {
  return { ...o, topLeft: Io(o.topLeft, i), topRight: Io(o.topRight, i), bottomRight: Io(o.bottomRight, i), bottomLeft: Io(o.bottomLeft, i) };
}
function jB(o, i) {
  const t = AB(o), e = t / i.width, A = { ...o };
  return A.smallestEdge = e, A;
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return aA(B - 270, a);
  }
  function e(a, r, B, C, x) {
    return aA(C - 605, r);
  }
  const A = o();
  function g(a, r, B, C, x) {
    return aA(x - 757, C);
  }
  function n(a, r, B, C, x) {
    return aA(r - 667, B);
  }
  function I(a, r, B, C, x) {
    return aA(a - -879, x);
  }
  for (; ; )
    try {
      if (-parseInt(I(-680, -679, -696, -674, "(U*a")) / 1 * (parseInt(I(-679, -688, -671, -667, "4TjT")) / 2) + parseInt(t("0^5u", 488, 472, 474, 485)) / 3 * (parseInt(I(-682, -682, -684, -670, "@pIq")) / 4) + -parseInt(e(788, "@pIq", 785, 796, 808)) / 5 * (parseInt(n(875, 874, "YmMq", 862, 887)) / 6) + parseInt(t("xiA&", 479, 480, 486, 495)) / 7 * (parseInt(e(821, "*K4Z", 830, 823, 821)) / 8) + parseInt(I(-686, -694, -688, -685, "QenV")) / 9 + -parseInt(e(819, "2qtE", 815, 808, 820)) / 10 + -parseInt(t("Jqae", 472, 465, 468, 473)) / 11 * (parseInt(g(956, 961, 982, "4TjT", 970)) / 12) === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Jo, 441132 + 2 * 835699 + -1246605);
function Jo() {
  const o = ["WORcHSkCWO8FWPyeF2KsWPO", "W79TWR9SW6FcKx09WQNcIxK", "nXbZALq3aXpcPCo4pmon", "W63cImoJCCkvWQNcIe1jW4NcQt4", "W5alW6NcHmk2W4Lu", "WRtcKeFdMY0kW4nwpfOn", "imksW7RcS8kZz8ockvm", "WO4cW6/cSmkj", "WQZcGX8epq", "vs5qkCoS", "WOZcRSort33dTSk/WPnJ", "WQ/cL8kqW7mlcW85j8k2WQ0", "WRJcKWuUpq", "fX5wWOW", "a3Oly8k4W7hdJSkhymorW5uP", "aCoNWQKLea", "WO/cGmkFWOOCW6XchfaLWQzDxJO", "WPRdRfblWRDFWROTW6pdRCktW51NWOK", "cHiJfmo2nmoceSk3W45t", "WQBcVMKGWRaOWOFcJLxdGwaK", "b38knSoeWPddJ8krAa", "W7zsbSo1W7JcHLRdRSk2", "kSoXD8kLkG/dJNRcKuvJ", "WRFcMY/cPLqkW7bB", "WPuaq8ocW6e", "WR/cU8k2Ff18W4SIjJWY", "WQC3f8kCfSksW4NcKSkzWQiRW4BdT3C", "WOuyW6hdLSkfWRFdUCkA", "b3GgACk/WR7dVCkCy8onW78", "m8o3A00nl8oEW63cThOgWPxdPCk/", "nmkVksLTy8k6"];
  return Jo = function() {
    return o;
  }, Jo();
}
function aA(o, i) {
  const t = Jo();
  return aA = function(e, A) {
    e = e - (7798 + 7609 * -1);
    let g = t[e];
    if (aA.GcUkLk === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      aA.RVDIla = B, o = arguments, aA.GcUkLk = !0;
    }
    const I = t[1 * -1409 + 7689 + -2 * 3140], a = e + I, r = o[a];
    return r ? g = r : (aA.kTmSsC === void 0 && (aA.kTmSsC = !0), g = aA.RVDIla(g, A), o[a] = g), g;
  }, aA(o, i);
}
function ZB({ assetsDirectoryPath: o, bramble: i }) {
  const [t, e] = fA();
  function A(a, r, B, C, x) {
    return aA(B - -283, C);
  }
  function g(a, r, B, C, x) {
    return aA(a - 927, r);
  }
  const n = t !== void (-1 * 9391 + -25 * 45 + -956 * -11);
  z(() => {
    async function a() {
      function r(C, x, s, E, l) {
        return aA(E - 242, x);
      }
      function B(C, x, s, E, l) {
        return aA(C - 327, x);
      }
      await i[B(517, "^NSU")](La(o)), e(i[r(422, "rJ55", 427, 431) + B(544, "@pIq") + B(528, "bwMs") + "t"]());
    }
    a();
  }, [i, o, e]);
  const I = {};
  return I[g(1119, "mc@6") + A(-70, -73, -68, "epDM")] = t, I[g(1143, "rJ55") + "sh"] = n, I;
}
var Oa = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(Oa || {});
const sg = {};
sg.SIMD = "simd", sg.NO_SIMD = "no-simd";
const $n = sg, cg = {};
cg.Lower = "Lower", cg.Higher = "Higher";
const xg = cg, fo = {};
fo.VISIBLE = "VISIBLE", fo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", fo.HIDDEN = "HIDDEN";
const Uo = fo;
(function(o, i) {
  function t(r, B, C, x, s) {
    return xA(x - 930, r);
  }
  function e(r, B, C, x, s) {
    return xA(s - -241, C);
  }
  var A = o();
  function g(r, B, C, x, s) {
    return xA(x - -949, C);
  }
  function n(r, B, C, x, s) {
    return xA(B - -969, s);
  }
  function I(r, B, C, x, s) {
    return xA(s - -688, B);
  }
  for (; ; )
    try {
      var a = -parseInt(t("sGo&", 1298, 1284, 1291, 1302)) / 1 + -parseInt(I(-317, "9AVe", -322, -325, -319)) / 2 * (-parseInt(e(120, 115, "c)uH", 116, 122)) / 3) + -parseInt(I(-333, "*lI5", -339, -327, -331)) / 4 + -parseInt(e(114, 114, "ARMc", 98, 111)) / 5 * (parseInt(I(-320, "Jd0u", -334, -325, -324)) / 6) + parseInt(n(-608, -599, -596, -609, "msDx")) / 7 * (-parseInt(t(")!rZ", 1294, 1287, 1289, 1277)) / 8) + parseInt(e(120, 123, "*lI5", 134, 125)) / 9 * (parseInt(g(-591, -598, "231w", -593, -590)) / 10) + parseInt(t("9AVe", 1306, 1286, 1297, 1294)) / 11;
      if (a === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Yo, -454906 + 55 * 23053);
function xA(o, i) {
  var t = Yo();
  return xA = function(e, A) {
    e = e - (3 * -2045 + 515 + 5968);
    var g = t[e];
    if (xA.ccONjG === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, l, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      xA.dtXXTV = I, o = arguments, xA.ccONjG = !0;
    }
    var a = t[0], r = e + a, B = o[r];
    return B ? g = B : (xA.yVLwfk === void 0 && (xA.yVLwfk = !0), g = xA.dtXXTV(g, A), o[r] = g), g;
  }, xA(o, i);
}
function Yo() {
  var o = ["j8oFW7BdOCkCq3mp", "i8k7WQ5iWPNdGeD5", "uePdteevWOn1EKddSey", "W4/cVL7dH2xdLSkcW59wWRzwAmkVWQC", "B8oIW63dQmk/tSo+sLeBW7hcIW", "W43cTv7dH2RcICogWRLxWOj0", "D8kPCGTupgnJW51XW5JdLCkY", "WPBcGCoSeSk7lSoyW54", "WPtcISk0CmoLuSoHW68SFSouW4S", "WQHZp8o8WQW", "xmoIW4BdOre", "WOpcS8oCWR/cL8k6WRTJaCklWRHuw2a", "WOqbW498FqanDW", "jMZdMComhSk4W7pcNhpdHJblcq", "W5eUACoYWOf3DZio", "W7JcSmoLkMNcGrldGSocwNC", "fCo/DSo7mW", "iSk9W4NdQY8kW6ddQq", "uK5hquauW71YxKJdJNPS", "AmoJW6ddP8k9sCkhB2OrW4lcNfe", "W4upW5m4WRpdPh9V", "W49iimowaXLRW7O2vNhdR8oI", "WO1EW5ntnCkauCoxpSoxlYW", "jCoCwCkwW4FcRmkbtf/dOa1vW78", "WPBcJCkYiCkEc8obW74e"];
  return Yo = function() {
    return o;
  }, Yo();
}
function VB({ crosshatch: o }) {
  function i(e, A, g, n, I) {
    return xA(e - -917, A);
  }
  function t(e, A, g, n, I) {
    return xA(I - -730, g);
  }
  return o != null && o[t(-370, -384, "izfD", -364, -375) + "id"] ? xg[t(-370, -377, "c%T[", -392, -382) + "r"] : xg[i(-568, "231w")];
}
function QA(o, i) {
  const t = Wo();
  return QA = function(e, A) {
    e = e - (4977 + 1 * -3867 + -986);
    let g = t[e];
    if (QA.axEaAh === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      QA.BBhdIg = B, o = arguments, QA.axEaAh = !0;
    }
    const I = t[9825 + -2 * 1249 + -7327], a = e + I, r = o[a];
    return r ? g = r : (QA.IlPOVU === void 0 && (QA.IlPOVU = !0), g = QA.BBhdIg(g, A), o[a] = g), g;
  }, QA(o, i);
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return QA(a - -625, C);
  }
  function e(a, r, B, C, x) {
    return QA(C - 251, B);
  }
  const A = o();
  function g(a, r, B, C, x) {
    return QA(r - 451, x);
  }
  function n(a, r, B, C, x) {
    return QA(C - 748, r);
  }
  function I(a, r, B, C, x) {
    return QA(a - 680, C);
  }
  for (; ; )
    try {
      if (parseInt(g(591, 579, 590, 577, ")^!%")) / 1 * (parseInt(g(593, 606, 603, 589, "SB8b")) / 2) + -parseInt(g(580, 578, 579, 567, "xqP6")) / 3 + parseInt(n(897, "atNO", 909, 904, 918)) / 4 + -parseInt(g(618, 608, 593, 618, "&Itu")) / 5 * (parseInt(I(809, 804, 809, "Mk3!", 816)) / 6) + parseInt(e(394, 377, "!5!n", 389, 403)) / 7 * (-parseInt(I(831, 846, 847, "o*Tm", 822)) / 8) + -parseInt(t(-472, -468, -469, "LE0h", -455)) / 9 * (-parseInt(g(590, 595, 580, 594, "ravT")) / 10) + parseInt(I(815, 817, 801, "z[6x", 828)) / 11 === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Wo, 782380 + -20929 * 23);
function Wo() {
  const o = ["vwSSoSkDoSkiW7i9W5umWPZdKa", "gmkPWP0CldldO8k6W4xcUHa", "W7hcNmofmCkD", "hSo7W49JEZNdMq", "W6RdG8oaWQnkWQhdMmk2WRSZ", "uLz6", "W6VcHMeEzSobWPNcQCkapwrvha", "W4xdNfmqAqxdPqhcOgdcGCoKW5e", "W43dL1CsAqtdPrJcSeRcHSolW6m", "q3NcQCogkraviGTbhW", "qCouW7zmda", "FSojW451ACooW6y", "wmosW7ZdPsW", "W4xdHuVcHCoS", "lIhcOd8o", "n8oiWO87jW", "scJdQSo3WOHRihXxuCoEfmkO", "tCoyWRqWv0m9W60FWRW", "eqqTiXddSSofgues", "W5bKq19DgbS", "WOqyW7ldG1tdL8kF", "AxBdUNjzie/cRSo7wf7cGSow", "imkvWQ4pdg/cV3tdP8kk", "uGVcSfhcJfZcSfBcPqCf", "gCodW5Lv", "W5OtWRBdVCk8WRf6W5ZcLHddKa", "ue4seNFcSSoIrgbFWR7cGSoS", "y8oRW4xcM8kFxaPppSkVqG", "iLVcKCovDcmgcCo3AhK", "WQf8W7m4Ba", "faqIj0VcS8kWi2ybWRKpWOm", "hmkAn8kymG", "b1/dTq", "iCodW5LEzG"];
  return Wo = function() {
    return o;
  }, Wo();
}
function _B({ assetsDirectoryPath: o, children: i, bramble: t }) {
  const e = {};
  function A(x, s, E, l, u) {
    return QA(E - -756, x);
  }
  e[a(43, 55, "q!9l") + "le"] = t, e[a(54, 45, "z7b7") + A("$wY2", -620, -606) + B(564, 577, "%)[B", 566) + A("pNUG", -614, -631)] = o;
  const { sunfish: g, crosshatch: n } = ZB(e), I = {};
  I[a(53, 62, "fuZ]") + a(40, 53, "pNUG")] = n;
  function a(x, s, E, l, u) {
    return QA(x - -94, E);
  }
  const r = pA(() => ({ redfin: VB(I), sunfish: g, crosshatch: n, bramble: t }), [g, n, t]);
  function B(x, s, E, l, u) {
    return QA(l - 436, E);
  }
  const C = {};
  return C[A("atNO", -592, -607)] = r, C[B(556, 584, "0BMs", 568) + a(46, 39, "LE0h")] = i, p(Ro[B(593, 575, "&Itu", 581) + A("ixb@", -629, -623)], C);
}
(function(o, i) {
  function t(r, B, C, x, s) {
    return DA(r - 512, C);
  }
  function e(r, B, C, x, s) {
    return DA(B - -981, x);
  }
  var A = o();
  function g(r, B, C, x, s) {
    return DA(s - 246, C);
  }
  function n(r, B, C, x, s) {
    return DA(s - -977, x);
  }
  function I(r, B, C, x, s) {
    return DA(x - 68, r);
  }
  for (; ; )
    try {
      var a = parseInt(g(501, 514, "DGEK", 514, 506)) / 1 + -parseInt(n(-712, -701, -705, "3!2T", -707)) / 2 + parseInt(g(523, 524, "J9FZ", 514, 518)) / 3 + -parseInt(g(512, 513, "tJ*u", 513, 517)) / 4 + -parseInt(I("Yu%C", 319, 330, 327, 330)) / 5 + parseInt(t(774, 769, "5jsZ", 774, 769)) / 6 + parseInt(e(-720, -714, -720, "$H%q", -708)) / 7 * (parseInt(g(519, 508, "%%Gk", 517, 515)) / 8);
      if (a === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Oo, -8266 * -5 + 25823 + 164458);
function DA(o, i) {
  var t = Oo();
  return DA = function(e, A) {
    e = e - 257;
    var g = t[e];
    if (DA.NZAYSj === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, l, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      DA.HYDGEM = I, o = arguments, DA.NZAYSj = !0;
    }
    var a = t[0], r = e + a, B = o[r];
    return B ? g = B : (DA.MNgspQ === void 0 && (DA.MNgspQ = !0), g = DA.HYDGEM(g, A), o[r] = g), g;
  }, DA(o, i);
}
function Oo() {
  var o = ["EaiFW7BcIXtcIhlcJbPRzCkY", "WQDujSk8WQpdVtPufXmtDCo8", "WPzXWPKgBLqS", "yKG2WPTqCCo9zSoQW6FdPh4", "CuldJSkzWRJdPCosWRZdTCkMWPdcGW", "WQzwjSk6WQxcM21Vcb4Y", "zmouWRmcWRxcSmkK", "FhWDWPRcKmoyWQrcW65wnCkT", "vmkXg8k2WR1VWRjWWRZcSWZdLCkm", "BSkXW5jDW4VdSCkzW5hdVmkDq0q", "FWatW7lcHHBdNuJcPWjAAG", "WRFdJmo1WQTDWQSnDCktkSkNfCk/", "WOVcJaNdNCopWPXiWPpcIg/cVLBdTW", "WP17W60zWPFcJ8o1W77dKW3dNa", "WQaZxmoLnYtdGv3dK399EGq", "EqCqW7xcHH7dQNRcIYvita"];
  return Oo = function() {
    return o;
  }, Oo();
}
function zB({ analytics: o, crosshatch: i }) {
  return i !== void (11 * 746 + 3083 * -1 + 1 * -5123) && !i.isAnalyticsDisabled ? o : void (-2 * -3417 + 777 + 43 * -177);
}
function XB({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const g = {};
  g.analytics = o, g.crosshatch = e;
  const n = zB(g);
  return z(() => {
    n && n.init(i);
  }, [n, i]), z(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), n && n.walleye(t, A.getCustomerName()));
  }, [n, A, e, t]), z(() => {
    if (n)
      return window.addEventListener("beforeunload", n.endSession), () => {
        n.endSession(), window.removeEventListener("beforeunload", n.endSession);
      };
  }, [n]), n;
}
function $B({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: g } = Vt(), n = XB({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: g }), I = pA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ p(So.Provider, { value: I, children: t });
}
const AQ = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
}, ii = class ii {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", 2188 * 2 + 2194 + -6570);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ii()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 8503 + 773 * -11;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && AQ(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
D(ii, "_instance");
let St = ii;
const at = St.getInstance(), Ha = (o, i, t = iB) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  at.dispatchDelayedCustomEventOnChange(o, A, t);
}, AI = (o, i) => {
  at.dispatchCustomEventOnChange(o, i);
}, eQ = (o, i) => {
  at.dispatchCustomEventOnChange(o, i);
}, tQ = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  at.dispatchCustomEventOnChange(o, e);
}, oQ = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const g = A;
  at.dispatchCustomEventOnChange(o, g);
};
function iQ(o, i) {
  const t = {};
  t.instructionCode = i;
  const e = t;
  at.dispatchCustomEventOnChange(o, e);
}
const gQ = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  z(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, eQ(o, A);
  }, [t, e, o]);
}, nQ = (o) => o === KA.CONTROL ? !Vg() : !0, IQ = (o, i) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: g } = Fe(), [n, I] = fA(), a = pA(() => {
    const B = g && i && i.isStreaming && i.getCameraSettings().facingMode;
    return B ? n ?? B === "user" : n ?? nQ(o);
  }, [i, n, o, g]);
  z(() => {
    const B = () => {
      t !== dA.LOADING && e(dA.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, x = async () => {
      if (i) {
        e(dA.LOADING);
        try {
          await i.switchCamera(), e(dA.RUNNING);
        } catch (E) {
          if (E instanceof Error) {
            A(U.fromCameraError(E));
            return;
          }
        }
        I(void 0);
      }
    }, s = (E) => {
      var l;
      switch ((l = E.detail) == null ? void 0 : l["instruction"]) {
        case Gi.CONTINUE_DETECTION:
          B();
          break;
        case Gi.TOGGLE_MIRROR:
          C();
          break;
        case Gi.SWITCH_CAMERA:
          x();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(o, s), () => {
      document.removeEventListener(o, s);
    };
  }, [t, i, A, n, e, a, o]);
  const r = {};
  return r.shouldCameraMirror = a, r;
};
function aQ(o, i) {
  z(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      tQ(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
var rQ = Symbol.for("preact-signals");
function _g() {
  if (He > 1 * 9294 + 2735 * 1 + -12028)
    He--;
  else {
    for (var o, i = !1; void (226 * 14 + 9 * -787 + 1 * 3919) !== Gt; ) {
      var t = Gt;
      for (Gt = void (-11 * -593 + 1953 + -8476 * 1), Eg++; void (7995 + -19 * -53 + -9002) !== t; ) {
        var e = t.o;
        if (t.o = void (1611 + -11 * -563 + 3902 * -2), t.f &= -(-1393 * -1 + 31 * -255 + 6515), !(9882 + 5391 * 1 + -43 * 355 & t.f) && Pa(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !(5866 + -2933 * 2));
        }
        t = e;
      }
    }
    if (Eg = 586 * 2 + -8480 + 21 * 348, He--, i) throw o;
  }
}
var K = void 0, Gt = void (-610 + 61 * 10), He = 6572 + -2 * 2011 + -2550, Eg = 0, Ho = -2 * -2058 + 5865 + -9981;
function Ka(o) {
  if (void (-7502 + 341 * 22) !== K) {
    var i = o.n;
    if (void (7910 + -12 * -447 + -13274) === i || i.t !== K)
      return i = { i: 0, S: o, p: K.s, n: void (-1 * -2799 + -17 * -337 + -8528), t: K, e: void (-2890 + 1 * -4542 + -1858 * -4), x: void (8 * -871 + 3470 + 1166 * 3), r: i }, void (-3 * -1917 + 35 * 142 + -10721) !== K.s && (K.s.n = i), K.s = i, o.n = i, 9307 + 1325 * -7 & K.f && o.S(i), i;
    if (-(1 * -1201 + 6914 + -5712) === i.i)
      return i.i = 0, void (14979 + -3 * 4993) !== i.n && (i.n.p = i.p, void (-3 * -279 + -7191 + 6354) !== i.p && (i.p.n = i.n), i.p = K.s, i.n = void (39 * -76 + 4868 + 68 * -28), K.s.n = i, K.s = i), i;
  }
}
function IA(o) {
  this.v = o, this.i = 0, this.n = void (6697 + 1 * -6697), this.t = void (-16 * 136 + -2731 + -1 * -4907);
}
IA.prototype.brand = rQ, IA.prototype.h = function() {
  return !(1611 + 2 * 571 + -2753);
}, IA.prototype.S = function(o) {
  this.t !== o && void (-119 * -23 + -2629 + -108) === o.e && (o.x = this.t, void (-3 * 1741 + 9181 + -3958) !== this.t && (this.t.e = o), this.t = o);
}, IA.prototype.U = function(o) {
  if (void (186 * -51 + 7 * -3 + 3 * 3169) !== this.t) {
    var i = o.e, t = o.x;
    void (15 * 378 + 3849 + -9519) !== i && (i.x = t, o.e = void (-79 * 17 + -6316 + 7659)), void (2826 + -16 * -427 + 2 * -4829) !== t && (t.e = i, o.x = void (-1354 * -3 + 57 * 101 + -9819)), o === this.t && (this.t = t);
  }
}, IA.prototype.subscribe = function(o) {
  var i = this;
  return Xg(function() {
    var t = i.value, e = K;
    K = void (-2 * -2557 + -6673 + 1559);
    try {
      o(t);
    } finally {
      K = e;
    }
  });
}, IA.prototype.valueOf = function() {
  return this.value;
}, IA.prototype.toString = function() {
  return this.value + "";
}, IA.prototype.toJSON = function() {
  return this.value;
}, IA.prototype.peek = function() {
  var o = K;
  K = void (16488 + -18 * 916);
  try {
    return this.value;
  } finally {
    K = o;
  }
}, Object.defineProperty(IA.prototype, "value", { get: function() {
  var o = Ka(this);
  return o !== void 0 && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (Eg > 3 * -1336 + -949 * 1 + 5057) throw new Error("Cycle detected");
    this.v = o, this.i++, Ho++, He++;
    try {
      for (var i = this.t; void (-589 * -10 + -9577 + -3 * -1229) !== i; i = i.x) i.t.N();
    } finally {
      _g();
    }
  }
} });
function Ta(o) {
  return new IA(o);
}
function Pa(o) {
  for (var i = o.s; void (-118 * -37 + -176 * 19 + -1022) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !0;
  return !(-1 * -4010 + 1 * -4183 + 2 * 87);
}
function qa(o) {
  for (var i = o.s; void (-515 * 8 + 8024 + -3904) !== i; i = i.n) {
    var t = i.S.n;
    if (void (-479 + -3 * -1543 + 1 * -4150) !== t && (i.r = t), i.S.n = i, i.i = -(5599 + 1 * -5598), void (9323 + 6 * 641 + -1013 * 13) === i.n) {
      o.s = i;
      break;
    }
  }
}
function ja(o) {
  for (var i = o.s, t = void (244 * -15 + -12 * -502 + -2364); i !== void 0; ) {
    var e = i.p;
    -(-221 * -39 + 9554 + -18172) === i.i ? (i.S.U(i), void (8453 + -2357 * -1 + -10810) !== e && (e.n = i.n), void (877 * 1 + -1 * 3461 + 2584) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, i.r !== void 0 && (i.r = void (-178 * -29 + 6567 + -11729)), i = e;
  }
  o.s = t;
}
function Ye(o) {
  IA.call(this, void (3 * -493 + 17 * -523 + 10370)), this.x = o, this.s = void (-446 + 1 * -3547 + 3993), this.g = Ho - (-1 * -4409 + 9144 + -13552), this.f = 5 * 1262 + -2 * 1867 + -2 * 1286;
}
(Ye.prototype = new IA()).h = function() {
  if (this.f &= -(-5048 + -5051 * -1), -9631 * -1 + -106 * -29 + -12704 & this.f) return !(2638 + 1 * -4881 + 2244);
  if (-811 * 1 + 223 * 22 + -4063 * 1 == (-759 + 795 * 1 & this.f)) return !(-1475 + -143 * 6 + 2333);
  if (this.f &= -(1383 * 7 + -1 * -2443 + 12119 * -1), this.g === Ho) return !(1583 + 1 * -1583);
  if (this.g = Ho, this.f |= 172 * -11 + -3372 + 5265, this.i > 0 && !Pa(this)) return this.f &= -(226 + 16 * -14), !(39 * -181 + 329 + 6730);
  var o = K;
  try {
    qa(this), K = this;
    var i = this.x();
    (-11584 + -20 * -580 & this.f || this.v !== i || this.i === 0) && (this.v = i, this.f &= -(-6374 * 1 + -17 * 149 + -2231 * -4), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return K = o, ja(this), this.f &= -(-503 * -10 + -3663 + 21 * -65), !(6134 + -6134 * 1);
}, Ye.prototype.S = function(o) {
  if (void (2620 + -10 * 262) === this.t) {
    this.f |= -2958 + 8552 * -1 + 502 * 23;
    for (var i = this.s; void (-165 * -38 + -3 * 1109 + -2943) !== i; i = i.n) i.S.S(i);
  }
  IA.prototype.S.call(this, o);
}, Ye.prototype.U = function(o) {
  if (void (-3409 + -281 * -24 + 115 * -29) !== this.t && (IA.prototype.U.call(this, o), void (14 * -145 + 3389 * 2 + -4748) === this.t)) {
    this.f &= -(6 * 977 + 1 * 5606 + 5 * -2287);
    for (var i = this.s; void (-1203 * 2 + -3027 + 5433) !== i; i = i.n) i.S.U(i);
  }
}, Ye.prototype.N = function() {
  if (!(-2 * 3863 + 1563 + 685 * 9 & this.f)) {
    this.f |= 5 * -1585 + 13 * -439 + 13638;
    for (var o = this.t; void (-1 * -5726 + 9163 + 14889 * -1) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(Ye.prototype, "value", { get: function() {
  if (462 * 9 + 2348 + -1 * 6505 & this.f) throw new Error("Cycle detected");
  var o = Ka(this);
  if (this.h(), void (-1622 * -2 + -2 * -1127 + 2 * -2749) !== o && (o.i = this.i), 47 * 19 + -6065 + 5188 & this.f) throw this.v;
  return this.v;
} });
function CQ(o) {
  return new Ye(o);
}
function Za(o) {
  var i = o.u;
  if (o.u = void (-1 * 9781 + 5566 + -4215 * -1), typeof i == "function") {
    He++;
    var t = K;
    K = void (1 * 8817 + -7 * 1157 + 718 * -1);
    try {
      i();
    } catch (e) {
      throw o.f &= -(13 * 255 + -9 * -681 + -9442), o.f |= -7687 * -1 + 8697 + 2 * -8188, zg(o), e;
    } finally {
      K = t, _g();
    }
  }
}
function zg(o) {
  for (var i = o.s; void (-1 * -5978 + 6302 + -307 * 40) !== i; i = i.n) i.S.U(i);
  o.x = void 0, o.s = void (-1 * -3690 + -1 * 8647 + 4957 * 1), Za(o);
}
function BQ(o) {
  if (K !== this) throw new Error("Out-of-order effect");
  ja(this), K = o, this.f &= -(1 * 1003 + 8963 * 1 + -188 * 53), 3060 + -55 * 73 + 963 & this.f && zg(this), _g();
}
function pt(o) {
  this.x = o, this.u = void (932 + -45 * -3 + -1 * 1067), this.s = void (-9365 * -1 + -1 * -3202 + -1 * 12567), this.o = void (35 * -8 + -1157 + 1437), this.f = 32;
}
pt.prototype.c = function() {
  var o = this.S();
  try {
    if (-2193 + -3117 * 1 + -2 * -2659 & this.f || void (3040 + 8 * -380) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, pt.prototype.S = function() {
  if (-819 + 10 * -908 + -150 * -66 & this.f) throw new Error("Cycle detected");
  this.f |= -883 * -5 + -16 * 607 + -5298 * -1, this.f &= -9, Za(this), qa(this), He++;
  var o = K;
  return K = this, BQ.bind(this, o);
}, pt.prototype.N = function() {
  !(7346 + 567 * -12 + 540 * -1 & this.f) && (this.f |= -5893 + -88 * 43 + 9679, this.o = Gt, Gt = this);
}, pt.prototype.d = function() {
  this.f |= 8, 8502 + 2 * 2060 + -12621 & this.f || zg(this);
};
function Xg(o) {
  var i = new pt(o);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Mi;
function Oe(o, i) {
  G[o] = i.bind(null, G[o] || function() {
  });
}
function ao(o) {
  Mi && Mi(), Mi = o && o.S();
}
function Va(o) {
  var i = this, t = o.data, e = _a(t);
  e.value = t;
  var A = pA(function() {
    for (var g = i.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -2986 * 2 + 7 * 587 + 1867;
      break;
    }
    return i.__$u.c = function() {
      var n;
      !kI(A.peek()) && -1024 + 1166 * 8 + -8301 === ((n = i.base) == null ? void (547 * -10 + -11 * 737 + 13577) : n.nodeType) ? i.base.data = A.peek() : (i.__$f |= 41 * 55 + -3449 + -1195 * -1, i.setState({}));
    }, CQ(function() {
      var n = e.value.value;
      return -6241 * 1 + 4323 * 1 + 1918 === n ? -3001 + 193 * -25 + 7826 : !(9730 + -973 * 10) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
Va.displayName = "_st";
var dg = {};
dg.configurable = !0, dg.value = void (-1 * 7217 + 6759 + -1 * -458);
var lg = {};
lg.configurable = !(289 + 7 * 1173 + -8500), lg.value = Va;
var ug = {};
ug.configurable = !(2605 * 1 + 7 * -330 + -1 * 295), ug.get = function() {
  var o = {};
  return o.data = this, o;
};
var hg = {};
hg.configurable = !(6697 + -1 * -2163 + 4 * -2215), hg.value = 1;
var st = {};
st.constructor = dg, st.type = lg, st.props = ug, st.__b = hg, Object.defineProperties(IA.prototype, st), Oe("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var g = e[A];
      g instanceof IA && (t || (i.__np = t = {}), t[A] = g, e[A] = g.peek());
    }
  }
  o(i);
}), Oe("__r", function(o, i) {
  ao();
  var t, e = i.__c;
  e && (e.__$f &= -(2 * -649 + 4 * -1455 + 7120), void (86 * 83 + -8195 + 1057) === (t = e.__$u) && (e.__$u = t = function(A) {
    var g;
    return Xg(function() {
      g = this;
    }), g.c = function() {
      e.__$f |= -227 * 25 + 8820 * -1 + 14496, e.setState({});
    }, g;
  }())), ao(t), o(i);
}), Oe("__e", function(o, i, t, e) {
  ao(), o(i, t, e);
}), Oe("diffed", function(o, i) {
  ao();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var g = t.U;
      if (g) for (var n in g) {
        var I = g[n];
        void (8907 * -1 + -8360 + 17267) !== I && !(n in e) && (I.d(), g[n] = void (-17 * 289 + -2573 + -394 * -19));
      }
      else t.U = g = {};
      for (var a in e) {
        var r = g[a], B = e[a];
        void (6068 + -3 * -3013 + -15107) === r ? (r = QQ(t, a, B, A), g[a] = r) : r.o(B, A);
      }
    }
  }
  o(i);
});
function QQ(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, g = Ta(t);
  return { o: function(n, I) {
    g.value = n, e = I;
  }, d: Xg(function() {
    var n = g.value.value;
    e[i] !== n && (e[i] = n, A ? o[i] = n : n ? o.setAttribute(i, n) : o.removeAttribute(i));
  }) };
}
Oe("unmount", function(o, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (8501 + 1 * -457 + 2011 * -4);
        for (var A in e) {
          var g = e[A];
          g && g.d();
        }
      }
    }
  } else {
    var n = i.__c;
    if (n) {
      var I = n.__$u;
      I && (n.__$u = void (-3 * -1214 + 6 * 1345 + 366 * -32), I.d());
    }
  }
  o(i);
}), Oe("__h", function(o, i, t, e) {
  (e < -9998 + -937 * -4 + 6253 || e === 9) && (i.__$f |= -7603 + -65 * -117), o(i, t, e);
}), GA.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && void (1732 + 7057 * -1 + -71 * -75) !== t.s || -2 * 4460 + -1 * 1049 + 9973 & this.__$f)) return !(-1 * 5071 + -5386 + -10457 * -1);
  if (1053 + 4685 * 2 + -10420 & this.__$f) return !(331 * 16 + -3928 + -76 * 18);
  for (var e in i) return !(2871 + -9978 * -1 + -12849);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(-19 * 122 + 4 * -614 + 4774);
  for (var g in this.props) if (!(g in o)) return !(3199 * -1 + 7901 * 1 + -4702);
  return !(-2 * -2613 + 1 * -6773 + 3 * 516);
};
function _a(o) {
  return pA(function() {
    return Ta(o);
  }, []);
}
const Ko = ot(void 0);
Ko.displayName = "CameraServiceContext";
function sQ() {
  const o = Qe(Ko);
  if (o === void 0)
    throw new Error(`${Ko.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function za() {
  return navigator.mediaDevices.enumerateDevices();
}
async function vi() {
  return (await za()).filter((i) => i.kind === "videoinput");
}
function Li(o) {
  o.getTracks().forEach((t) => t.stop());
}
function eI(o) {
  return o.getVideoTracks()[-13457 + 1 * 13457];
}
const po = {};
po.width = 1920, po.height = 1080, po.facingMode = Fo.FRONT;
const cQ = po;
var he, Ke, vA;
class Xa {
  constructor({ defaultVideoConstrains: i = cQ, minCameraShorterSide: t = DB } = {}) {
    O(this, he);
    O(this, Ke, []);
    O(this, vA, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, Y(this, he, e);
  }
  get availableCameraProperties() {
    return y(this, Ke);
  }
  get mediaStream() {
    return y(this, vA);
  }
  get videoTrack() {
    return y(this, vA) ? eI(y(this, vA)) : void (-3543 + -13 * -121 + 197 * 10);
  }
  get isCameraActive() {
    var i;
    return !!((i = y(this, vA)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    Li(t);
  }
  async open(i = {}) {
    zn() && await Qg(-842 * -10 + -1461 + 283 * -23), Y(this, vA, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await vi();
    if (i.length <= 1 * 6899 + -3109 * -1 + -1 * 10007) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = i.findIndex((I) => I.deviceId === e.deviceId), g = i[A + (-2818 + -1 * -3649 + -830)] ?? i[-681 * 1 + 1009 * 3 + -138 * 17], n = this.getConstraints(t, g);
    this.close(), await this.open(n);
  }
  close() {
    y(this, vA) && (Li(y(this, vA)), Y(this, vA, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = y(this, Ke), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const i = this.getSettings();
    if (!i.width) throw new U("Video width is undefined");
    if (!i.height) throw new U("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await za(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === Fo.FRONT ? void (-6743 + -4456 * -1 + 2287 * 1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Vg() ? (await vi()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (307 * -2 + 4 * -21 + 2 * 349);
  }
  async collectAvailableCamerasInfo() {
    const i = await vi();
    for (const t of i) {
      zn() && await Qg(3 * -307 + -1442 + 2813);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const g = await navigator.mediaDevices.getUserMedia(A), n = eI(g);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const B = r;
        y(this, Ke).push(B), Li(g);
      } catch (e) {
        e instanceof Error && U.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...y(this, he).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (851 + 7 * -378 + -359 * -5);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new U("Could not init camera settings");
    if (typeof y(this, he).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < y(this, he).minCameraShorterSide)
      throw this.close(), new U("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
he = new WeakMap(), Ke = new WeakMap(), vA = new WeakMap();
var vt;
class xQ {
  constructor(i, t, e) {
    O(this, vt, !1);
    this.videoHandler = i, this.cameraHandler = t, this.keypressDetection = e;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    y(this, vt) || (Y(this, vt, !0), await Xa.requestPermission());
  }
  async startVideoStream(i = {}) {
    await this.requestCameraPermission(), this.keypressDetection.addKeydownListener(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), FB() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(i != null && i.width)) throw new U("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new U("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new U("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 0, -7 * -834 + -5 * 420 + -3738 * 1), { image: t, timestamp: Date.now() };
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
vt = new WeakMap();
var _A;
class EQ {
  constructor(i) {
    O(this, _A);
    Y(this, _A, i);
  }
  get videoElement() {
    return y(this, _A);
  }
  async play(i) {
    y(this, _A).srcObject = i, await y(this, _A).play();
  }
  stop() {
    y(this, _A).srcObject = null;
  }
  hasSrcObject() {
    return !!y(this, _A).srcObject;
  }
}
_A = new WeakMap();
class dQ {
  constructor() {
    D(this, "keypressCount", 0);
    D(this, "initializationTime");
    D(this, "timeToFirstKeypress", void (-17 * 571 + 16 * -513 + 17915));
    D(this, "handleKeyDown", () => {
      this.keypressCount++, this.keypressCount === 6782 * 1 + -37 * 97 + -3192 && (this.timeToFirstKeypress = Date.now() - this.initializationTime);
    });
    this.initializationTime = Date.now();
  }
  removeKeydownListener() {
    this.keypressCount = 7 * 493 + -7 * 565 + 36 * 14, this.timeToFirstKeypress = void 0, window.removeEventListener("keydown", this.handleKeyDown);
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
      var i = {};
      return i.hasBeenDetected = !1, i;
    }
    return { hasBeenDetected: !0, keypressAmount: this.getKeypressCount(), timeToFirstKeypress: this.getTimeToFirstKeypress() };
  }
}
function lQ(o) {
  const i = SA(null), [t, e] = fA(), [A, g] = fA(), { handleError: n, setIsCameraReady: I } = Fe(), a = Ae((B) => {
    g((C) => MB(B, C));
  }, []);
  z(() => {
    if (!i.current) {
      n(new U("Something went wrong during video initialization"));
      return;
    }
    const B = new EQ(i.current), C = new Xa(), x = new dQ(), s = new xQ(B, C, x);
    return (async () => {
      try {
        const l = {};
        l.facingMode = o, await s.startVideoStream(l);
      } catch (l) {
        if (l instanceof Error) {
          n(U.fromCameraError(l));
          return;
        }
      }
      e(s), I(!0), a(s.getCameraResolution());
    })(), () => {
      s == null || s.stopStreaming(), I(!1), e(void (-526 * 17 + 1 * -2843 + -11785 * -1));
    };
  }, [o, n, I, i, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = i, r;
}
function uQ({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: g } = lQ(o), n = pA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: g
    }),
    [e, t, A, g]
  );
  return /* @__PURE__ */ p(Ko.Provider, { value: n, children: i });
}
const hQ = async () => WebAssembly.validate(new Uint8Array([223 * 31 + 6291 + -13204, -328 * -21 + -3 * 1929 + -1004, 115, -1867 * -2 + -2868 + -757 * 1, 1, -7728 * -1 + 1487 * -2 + -4754, 3560 + -1 * 583 + 1 * -2977, -164 * 59 + -73 * -70 + 3 * 1522, 1368 + 239 * 34 + -9493, 5, -463 * -7 + 3828 + -7068, 96, 984 * -4 + 8082 + -4146, 2934 * -1 + 5098 * -1 + 8033, 4364 * -1 + -7 * -1363 + -361 * 14, -9034 + -4041 * -1 + 4996, 1010 + 5 * 1583 + -8923, -11 * 97 + 61 * 19 + -91, -931 * 9 + 58 + 157 * 53, 14965 + 3 * -4985, -2 * -1174 + -389 * 6 + 2 * -2, -1 * -2543 + -1229 * -8 + -12374, -4557 + -13 * 49 + 5202, 9151 * -1 + 3888 + 19 * 277, 4007 * -1 + 1 * 6407 + -2335, -2 * 3373 + -1 * -4537 + 2209, 8212 + 1 * 965 + -8924, 15, -657 + 91 * 10, 6995 + 363 * -19, 953 + 1 * 2072 + 22 * -137]));
function fQ() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(5822 + -1 * 5806);
}
function pQ() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = fQ();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function yQ(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const fg = {};
fg.label = ">1m", fg.time = 60;
const pg = {};
pg.label = ">45", pg.time = 45;
const yg = {};
yg.label = ">30", yg.time = 30;
function DQ(o, i = [fg, pg, yg]) {
  const t = i.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (o > e.time) return e.label;
  return "" + o;
}
const wQ = (o) => Math.round(o / 500) * 500 / 1e3, ct = (o) => o ? o <= 9621 * 1 + 34 * -123 + -5438 ? Math.round(o * (-7570 + 1685 * -1 + 9275)) / (-6232 + -751 * -1 + 1 * 5501) : Math.round(o / (19 * 227 + -73 * -91 + -10906)) * (2386 + -3 * -2959 + -11213) : 65 * 152 + -8 * -487 + -13776, mQ = (o) => Math.round(o * (-3183 + 9364 * 1 + -6179)) / (-20 * -185 + 3527 + -85 * 85);
function bQ(o) {
  return o !== dA.RUNNING ? Uo.VISIBLE : Uo.VISIBLE_WITH_MASK;
}
async function kQ() {
  return await hQ() ? $n.SIMD : $n.NO_SIMD;
}
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $a = {}, tI = {}, GQ = NQ;
function NQ(o, i) {
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
      o.apply(i || null, t);
    } catch (a) {
      g && (g = !1, I(a));
    }
  });
}
var A0 = {};
(function(o) {
  var i = o;
  i.length = function(n) {
    var I = n.length;
    if (!I)
      return 0;
    for (var a = 0; --I % 4 > 1 && n.charAt(I) === "="; )
      ++a;
    return Math.ceil(n.length * 3) / 4 - a;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  i.encode = function(n, I, a) {
    for (var r = null, B = [], C = 0, x = 0, s; I < a; ) {
      var E = n[I++];
      switch (x) {
        case 0:
          B[C++] = t[E >> 2], s = (E & 3) << 4, x = 1;
          break;
        case 1:
          B[C++] = t[s | E >> 4], s = (E & 15) << 2, x = 2;
          break;
        case 2:
          B[C++] = t[s | E >> 6], B[C++] = t[E & 63], x = 0;
          break;
      }
      C > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, B)), C = 0);
    }
    return x && (B[C++] = t[s], B[C++] = 61, x === 1 && (B[C++] = 61)), r ? (C && r.push(String.fromCharCode.apply(String, B.slice(0, C))), r.join("")) : String.fromCharCode.apply(String, B.slice(0, C));
  };
  var g = "invalid encoding";
  i.decode = function(n, I, a) {
    for (var r = a, B = 0, C, x = 0; x < n.length; ) {
      var s = n.charCodeAt(x++);
      if (s === 61 && B > 1)
        break;
      if ((s = e[s]) === void 0)
        throw Error(g);
      switch (B) {
        case 0:
          C = s, B = 1;
          break;
        case 1:
          I[a++] = C << 2 | (s & 48) >> 4, C = s, B = 2;
          break;
        case 2:
          I[a++] = (C & 15) << 4 | (s & 60) >> 2, C = s, B = 3;
          break;
        case 3:
          I[a++] = (C & 3) << 6 | s, B = 0;
          break;
      }
    }
    if (B === 1)
      throw Error(g);
    return a - r;
  }, i.test = function(n) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n);
  };
})(A0);
var FQ = Ei;
function Ei() {
  this._listeners = {};
}
Ei.prototype.on = function(o, i, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
Ei.prototype.off = function(o, i) {
  if (o === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
Ei.prototype.emit = function(o) {
  var i = this._listeners[o];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var SQ = oI(oI);
function oI(o) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function A(a, r, B) {
      i[0] = a, r[B] = t[0], r[B + 1] = t[1], r[B + 2] = t[2], r[B + 3] = t[3];
    }
    function g(a, r, B) {
      i[0] = a, r[B] = t[3], r[B + 1] = t[2], r[B + 2] = t[1], r[B + 3] = t[0];
    }
    o.writeFloatLE = e ? A : g, o.writeFloatBE = e ? g : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], i[0];
    }
    function I(a, r) {
      return t[3] = a[r], t[2] = a[r + 1], t[1] = a[r + 2], t[0] = a[r + 3], i[0];
    }
    o.readFloatLE = e ? n : I, o.readFloatBE = e ? I : n;
  }() : function() {
    function i(e, A, g, n) {
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
    o.writeFloatLE = i.bind(null, iI), o.writeFloatBE = i.bind(null, gI);
    function t(e, A, g) {
      var n = e(A, g), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    o.readFloatLE = t.bind(null, nI), o.readFloatBE = t.bind(null, II);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function A(a, r, B) {
      i[0] = a, r[B] = t[0], r[B + 1] = t[1], r[B + 2] = t[2], r[B + 3] = t[3], r[B + 4] = t[4], r[B + 5] = t[5], r[B + 6] = t[6], r[B + 7] = t[7];
    }
    function g(a, r, B) {
      i[0] = a, r[B] = t[7], r[B + 1] = t[6], r[B + 2] = t[5], r[B + 3] = t[4], r[B + 4] = t[3], r[B + 5] = t[2], r[B + 6] = t[1], r[B + 7] = t[0];
    }
    o.writeDoubleLE = e ? A : g, o.writeDoubleBE = e ? g : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], t[4] = a[r + 4], t[5] = a[r + 5], t[6] = a[r + 6], t[7] = a[r + 7], i[0];
    }
    function I(a, r) {
      return t[7] = a[r], t[6] = a[r + 1], t[5] = a[r + 2], t[4] = a[r + 3], t[3] = a[r + 4], t[2] = a[r + 5], t[1] = a[r + 6], t[0] = a[r + 7], i[0];
    }
    o.readDoubleLE = e ? n : I, o.readDoubleBE = e ? I : n;
  }() : function() {
    function i(e, A, g, n, I, a) {
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
    o.writeDoubleLE = i.bind(null, iI, 0, 4), o.writeDoubleBE = i.bind(null, gI, 4, 0);
    function t(e, A, g, n, I) {
      var a = e(n, I + A), r = e(n, I + g), B = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, x = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? x ? NaN : B * (1 / 0) : C === 0 ? B * 5e-324 * x : B * Math.pow(2, C - 1075) * (x + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, nI, 0, 4), o.readDoubleBE = t.bind(null, II, 4, 0);
  }(), o;
}
function iI(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function gI(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function nI(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function II(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function aI(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var RQ = MQ;
function MQ(o) {
  try {
    if (typeof aI != "function")
      return null;
    var i = aI(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var e0 = {};
(function(o) {
  var i = o;
  i.length = function(t) {
    for (var e = 0, A = 0, g = 0; g < t.length; ++g)
      A = t.charCodeAt(g), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(g + 1) & 64512) === 56320 ? (++g, e += 4) : e += 3;
    return e;
  }, i.read = function(t, e, A) {
    var g = A - e;
    if (g < 1)
      return "";
    for (var n = null, I = [], a = 0, r; e < A; )
      r = t[e++], r < 128 ? I[a++] = r : r > 191 && r < 224 ? I[a++] = (r & 31) << 6 | t[e++] & 63 : r > 239 && r < 365 ? (r = ((r & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, I[a++] = 55296 + (r >> 10), I[a++] = 56320 + (r & 1023)) : I[a++] = (r & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, I)), a = 0);
    return n ? (a && n.push(String.fromCharCode.apply(String, I.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, I.slice(0, a));
  }, i.write = function(t, e, A) {
    for (var g = A, n, I, a = 0; a < t.length; ++a)
      n = t.charCodeAt(a), n < 128 ? e[A++] = n : n < 2048 ? (e[A++] = n >> 6 | 192, e[A++] = n & 63 | 128) : (n & 64512) === 55296 && ((I = t.charCodeAt(a + 1)) & 64512) === 56320 ? (n = 65536 + ((n & 1023) << 10) + (I & 1023), ++a, e[A++] = n >> 18 | 240, e[A++] = n >> 12 & 63 | 128, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128) : (e[A++] = n >> 12 | 224, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128);
    return A - g;
  };
})(e0);
var vQ = LQ;
function LQ(o, i, t) {
  var e = t || 8192, A = e >>> 1, g = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return o(I);
    n + I > e && (g = o(e), n = 0);
    var a = i.call(g, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var Ji, rI;
function JQ() {
  if (rI)
    return Ji;
  rI = 1, Ji = i;
  var o = Se();
  function i(g, n) {
    this.lo = g >>> 0, this.hi = n >>> 0;
  }
  var t = i.zero = new i(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = i.zeroHash = "\0\0\0\0\0\0\0\0";
  i.fromNumber = function(g) {
    if (g === 0)
      return t;
    var n = g < 0;
    n && (g = -g);
    var I = g >>> 0, a = (g - I) / 4294967296 >>> 0;
    return n && (a = ~a >>> 0, I = ~I >>> 0, ++I > 4294967295 && (I = 0, ++a > 4294967295 && (a = 0))), new i(I, a);
  }, i.from = function(g) {
    if (typeof g == "number")
      return i.fromNumber(g);
    if (o.isString(g))
      if (o.Long)
        g = o.Long.fromString(g);
      else
        return i.fromNumber(parseInt(g, 10));
    return g.low || g.high ? new i(g.low >>> 0, g.high >>> 0) : t;
  }, i.prototype.toNumber = function(g) {
    if (!g && this.hi >>> 31) {
      var n = ~this.lo + 1 >>> 0, I = ~this.hi >>> 0;
      return n || (I = I + 1 >>> 0), -(n + I * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, i.prototype.toLong = function(g) {
    return o.Long ? new o.Long(this.lo | 0, this.hi | 0, !!g) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!g };
  };
  var A = String.prototype.charCodeAt;
  return i.fromHash = function(g) {
    return g === e ? t : new i(
      (A.call(g, 0) | A.call(g, 1) << 8 | A.call(g, 2) << 16 | A.call(g, 3) << 24) >>> 0,
      (A.call(g, 4) | A.call(g, 5) << 8 | A.call(g, 6) << 16 | A.call(g, 7) << 24) >>> 0
    );
  }, i.prototype.toHash = function() {
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
  }, i.prototype.zzEncode = function() {
    var g = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ g) >>> 0, this.lo = (this.lo << 1 ^ g) >>> 0, this;
  }, i.prototype.zzDecode = function() {
    var g = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ g) >>> 0, this.hi = (this.hi >>> 1 ^ g) >>> 0, this;
  }, i.prototype.length = function() {
    var g = this.lo, n = (this.lo >>> 28 | this.hi << 4) >>> 0, I = this.hi >>> 24;
    return I === 0 ? n === 0 ? g < 16384 ? g < 128 ? 1 : 2 : g < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : I < 128 ? 9 : 10;
  }, Ji;
}
var CI;
function Se() {
  return CI || (CI = 1, function(o) {
    var i = o;
    i.asPromise = GQ, i.base64 = A0, i.EventEmitter = FQ, i.float = SQ, i.inquire = RQ, i.utf8 = e0, i.pool = vQ, i.LongBits = JQ(), i.isNode = !!(typeof ce < "u" && ce && ce.process && ce.process.versions && ce.process.versions.node), i.global = i.isNode && ce || typeof window < "u" && window || typeof self < "u" && self || ce, i.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), i.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), i.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, i.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, i.isObject = function(A) {
      return A && typeof A == "object";
    }, i.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    i.isSet = function(A, g) {
      var n = A[g];
      return n != null && A.hasOwnProperty(g) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
    }, i.Buffer = function() {
      try {
        var A = i.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), i._Buffer_from = null, i._Buffer_allocUnsafe = null, i.newBuffer = function(A) {
      return typeof A == "number" ? i.Buffer ? i._Buffer_allocUnsafe(A) : new i.Array(A) : i.Buffer ? i._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, i.Array = typeof Uint8Array < "u" ? Uint8Array : Array, i.Long = /* istanbul ignore next */
    i.global.dcodeIO && /* istanbul ignore next */
    i.global.dcodeIO.Long || /* istanbul ignore next */
    i.global.Long || i.inquire("long"), i.key2Re = /^true|false|0|1$/, i.key32Re = /^-?(?:0|[1-9][0-9]*)$/, i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, i.longToHash = function(A) {
      return A ? i.LongBits.from(A).toHash() : i.LongBits.zeroHash;
    }, i.longFromHash = function(A, g) {
      var n = i.LongBits.fromHash(A);
      return i.Long ? i.Long.fromBits(n.lo, n.hi, g) : n.toNumber(!!g);
    };
    function t(A, g, n) {
      for (var I = Object.keys(g), a = 0; a < I.length; ++a)
        (A[I[a]] === void 0 || !n) && (A[I[a]] = g[I[a]]);
      return A;
    }
    i.merge = t, i.lcFirst = function(A) {
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
    i.newError = e, i.ProtocolError = e("ProtocolError"), i.oneOfGetter = function(A) {
      for (var g = {}, n = 0; n < A.length; ++n)
        g[A[n]] = 1;
      return function() {
        for (var I = Object.keys(this), a = I.length - 1; a > -1; --a)
          if (g[I[a]] === 1 && this[I[a]] !== void 0 && this[I[a]] !== null)
            return I[a];
      };
    }, i.oneOfSetter = function(A) {
      return function(g) {
        for (var n = 0; n < A.length; ++n)
          A[n] !== g && delete this[A[n]];
      };
    }, i.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, i._configure = function() {
      var A = i.Buffer;
      if (!A) {
        i._Buffer_from = i._Buffer_allocUnsafe = null;
        return;
      }
      i._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(g, n) {
        return new A(g, n);
      }, i._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(g) {
        return new A(g);
      };
    };
  }(tI)), tI;
}
var t0 = L, NA = Se(), Dg, di = NA.LongBits, BI = NA.base64, QI = NA.utf8;
function _t(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function $g() {
}
function UQ(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function L() {
  this.len = 0, this.head = new _t($g, 0, 0), this.tail = this.head, this.states = null;
}
var o0 = function() {
  return NA.Buffer ? function() {
    return (L.create = function() {
      return new Dg();
    })();
  } : function() {
    return new L();
  };
};
L.create = o0();
L.alloc = function(o) {
  return new NA.Array(o);
};
NA.Array !== Array && (L.alloc = NA.pool(L.alloc, NA.Array.prototype.subarray));
L.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new _t(o, i, t), this.len += i, this;
};
function An(o, i, t) {
  i[t] = o & 255;
}
function YQ(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function en(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
en.prototype = Object.create(_t.prototype);
en.prototype.fn = YQ;
L.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new en(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
L.prototype.int32 = function(o) {
  return o < 0 ? this._push(tn, 10, di.fromNumber(o)) : this.uint32(o);
};
L.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function tn(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
L.prototype.uint64 = function(o) {
  var i = di.from(o);
  return this._push(tn, i.length(), i);
};
L.prototype.int64 = L.prototype.uint64;
L.prototype.sint64 = function(o) {
  var i = di.from(o).zzEncode();
  return this._push(tn, i.length(), i);
};
L.prototype.bool = function(o) {
  return this._push(An, 1, o ? 1 : 0);
};
function wg(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
L.prototype.fixed32 = function(o) {
  return this._push(wg, 4, o >>> 0);
};
L.prototype.sfixed32 = L.prototype.fixed32;
L.prototype.fixed64 = function(o) {
  var i = di.from(o);
  return this._push(wg, 4, i.lo)._push(wg, 4, i.hi);
};
L.prototype.sfixed64 = L.prototype.fixed64;
L.prototype.float = function(o) {
  return this._push(NA.float.writeFloatLE, 4, o);
};
L.prototype.double = function(o) {
  return this._push(NA.float.writeDoubleLE, 8, o);
};
var WQ = NA.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
L.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(An, 1, 0);
  if (NA.isString(o)) {
    var t = L.alloc(i = BI.length(o));
    BI.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(WQ, i, o);
};
L.prototype.string = function(o) {
  var i = QI.length(o);
  return i ? this.uint32(i)._push(QI.write, i, o) : this._push(An, 1, 0);
};
L.prototype.fork = function() {
  return this.states = new UQ(this), this.head = this.tail = new _t($g, 0, 0), this.len = 0, this;
};
L.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new _t($g, 0, 0), this.len = 0), this;
};
L.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
L.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
L._configure = function(o) {
  Dg = o, L.create = o0(), Dg._configure();
};
var OQ = TA, i0 = t0;
(TA.prototype = Object.create(i0.prototype)).constructor = TA;
var re = Se();
function TA() {
  i0.call(this);
}
TA._configure = function() {
  TA.alloc = re._Buffer_allocUnsafe, TA.writeBytesBuffer = re.Buffer && re.Buffer.prototype instanceof Uint8Array && re.Buffer.prototype.set.name === "set" ? function(o, i, t) {
    i.set(o, t);
  } : function(o, i, t) {
    if (o.copy)
      o.copy(i, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        i[t++] = o[e++];
  };
};
TA.prototype.bytes = function(o) {
  re.isString(o) && (o = re._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(TA.writeBytesBuffer, i, o), this;
};
function HQ(o, i, t) {
  o.length < 40 ? re.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
TA.prototype.string = function(o) {
  var i = re.Buffer.byteLength(o);
  return this.uint32(i), i && this._push(HQ, i, o), this;
};
TA._configure();
var g0 = $, PA = Se(), mg, n0 = PA.LongBits, KQ = PA.utf8;
function JA(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function $(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var sI = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new $(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new $(o);
  throw Error("illegal buffer");
}, I0 = function() {
  return PA.Buffer ? function(o) {
    return ($.create = function(i) {
      return PA.Buffer.isBuffer(i) ? new mg(i) : sI(i);
    })(o);
  } : sI;
};
$.create = I0();
$.prototype._slice = PA.Array.prototype.subarray || /* istanbul ignore next */
PA.Array.prototype.slice;
$.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, JA(this, 10);
    return o;
  };
}();
$.prototype.int32 = function() {
  return this.uint32() | 0;
};
$.prototype.sint32 = function() {
  var o = this.uint32();
  return o >>> 1 ^ -(o & 1) | 0;
};
function Ui() {
  var o = new n0(0, 0), i = 0;
  if (this.len - this.pos > 4) {
    for (; i < 4; ++i)
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    if (o.lo = (o.lo | (this.buf[this.pos] & 127) << 28) >>> 0, o.hi = (o.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return o;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (this.pos >= this.len)
        throw JA(this);
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
    return o.lo = (o.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0, o;
  }
  if (this.len - this.pos > 4) {
    for (; i < 5; ++i)
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
  } else
    for (; i < 5; ++i) {
      if (this.pos >= this.len)
        throw JA(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
$.prototype.bool = function() {
  return this.uint32() !== 0;
};
function To(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
$.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw JA(this, 4);
  return To(this.buf, this.pos += 4);
};
$.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw JA(this, 4);
  return To(this.buf, this.pos += 4) | 0;
};
function cI() {
  if (this.pos + 8 > this.len)
    throw JA(this, 8);
  return new n0(To(this.buf, this.pos += 4), To(this.buf, this.pos += 4));
}
$.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw JA(this, 4);
  var o = PA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
$.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw JA(this, 4);
  var o = PA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
$.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw JA(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
$.prototype.string = function() {
  var o = this.bytes();
  return KQ.read(o, 0, o.length);
};
$.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw JA(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw JA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
$.prototype.skipType = function(o) {
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
$._configure = function(o) {
  mg = o, $.create = I0(), mg._configure();
  var i = PA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  PA.merge($.prototype, {
    int64: function() {
      return Ui.call(this)[i](!1);
    },
    uint64: function() {
      return Ui.call(this)[i](!0);
    },
    sint64: function() {
      return Ui.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return cI.call(this)[i](!0);
    },
    sfixed64: function() {
      return cI.call(this)[i](!1);
    }
  });
};
var TQ = Ne, a0 = g0;
(Ne.prototype = Object.create(a0.prototype)).constructor = Ne;
var xI = Se();
function Ne(o) {
  a0.call(this, o);
}
Ne._configure = function() {
  xI.Buffer && (Ne.prototype._slice = xI.Buffer.prototype.slice);
};
Ne.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
Ne._configure();
var r0 = {}, PQ = Rt, on = Se();
(Rt.prototype = Object.create(on.EventEmitter.prototype)).constructor = Rt;
function Rt(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  on.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
Rt.prototype.rpcCall = function o(i, t, e, A, g) {
  if (!A)
    throw TypeError("request must be specified");
  var n = this;
  if (!g)
    return on.asPromise(o, n, i, t, e, A);
  if (!n.rpcImpl) {
    setTimeout(function() {
      g(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return n.rpcImpl(
      i,
      t[n.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(I, a) {
        if (I)
          return n.emit("error", I, i), g(I);
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
            return n.emit("error", r, i), g(r);
          }
        return n.emit("data", a, i), g(null, a);
      }
    );
  } catch (I) {
    n.emit("error", I, i), setTimeout(function() {
      g(I);
    }, 0);
    return;
  }
};
Rt.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var i = o;
  i.Service = PQ;
})(r0);
var qQ = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = t0, i.BufferWriter = OQ, i.Reader = g0, i.BufferReader = TQ, i.util = Se(), i.rpc = r0, i.roots = qQ, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})($a);
var S = $a;
const f = S.Reader, v = S.Writer, d = S.util, Q = S.roots.default || (S.roots.default = {}), tt = Q.dot = (() => {
  const o = {};
  return o.Content = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.token = d.newBuffer([]), i.prototype.iv = d.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = d.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
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
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new Q.dot.Content();
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
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.Content)
        return t;
      let e = new Q.dot.Content();
      return t.token != null && (typeof t.token == "string" ? d.base64.decode(t.token, e.token = d.newBuffer(d.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? d.base64.decode(t.iv, e.iv = d.newBuffer(d.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = d.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = d.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? d.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? d.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, i;
  }(), o.v4 = function() {
    const i = {};
    return i.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.images = d.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = v.create()), e.images != null && e.images.length)
          for (let g = 0; g < e.images.length; ++g)
            Q.dot.Image.encode(e.images[g], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && Q.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.images && n.images.length || (n.images = []), n.images.push(Q.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              n.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
            let g = Q.dot.Image.verify(e.images[A]);
            if (g)
              return "images." + g;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = Q.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new Q.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let g = 0; g < e.images.length; ++g) {
            if (typeof e.images[g] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[g] = Q.dot.Image.fromObject(e.images[g]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = Q.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        if ((A.arrays || A.defaults) && (g.images = []), A.defaults && (g.metadata = null), e.images && e.images.length) {
          g.images = [];
          for (let n = 0; n < e.images.length; ++n)
            g.images[n] = Q.dot.Image.toObject(e.images[n], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), i.Metadata = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && g.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && Q.dot.v4.WebMetadata.encode(A.web, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && Q.dot.v4.AndroidMetadata.encode(A.android, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && Q.dot.v4.IosMetadata.encode(A.ios, g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.Metadata();
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
              I.web = Q.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.android = Q.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.ios = Q.dot.v4.IosMetadata.decode(A, A.uint32());
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (g._sessionToken = 1, !d.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !d.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          g.metadata = 1;
          {
            let n = Q.dot.v4.WebMetadata.verify(A.web);
            if (n)
              return "web." + n;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (g.metadata === 1)
            return "metadata: multiple values";
          g.metadata = 1;
          {
            let n = Q.dot.v4.AndroidMetadata.verify(A.android);
            if (n)
              return "android." + n;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (g.metadata === 1)
            return "metadata: multiple values";
          g.metadata = 1;
          {
            let n = Q.dot.v4.IosMetadata.verify(A.ios);
            if (n)
              return "ios." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Metadata)
          return A;
        let g = new Q.dot.v4.Metadata();
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
          g.web = Q.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          g.android = Q.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          g.ios = Q.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.platform = g.enums === String ? "WEB" : 0, n.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (n.platform = g.enums === String ? Q.dot.Platform[A.platform] === void 0 ? A.platform : Q.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (n.web = Q.dot.v4.WebMetadata.toObject(A.web, g), g.oneofs && (n.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (n.android = Q.dot.v4.AndroidMetadata.toObject(A.android, g), g.oneofs && (n.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (n.ios = Q.dot.v4.IosMetadata.toObject(A.ios, g), g.oneofs && (n.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n.sessionToken = A.sessionToken, g.oneofs && (n._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (n.componentVersion = A.componentVersion), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), i.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        if (g || (g = v.create()), A.supportedAbis != null && A.supportedAbis.length)
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
            ).string(n[I]), Q.dot.Int32List.encode(A.dynamicCameraFrameProperties[n[I]], g.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            Q.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && Q.dot.v4.AndroidCamera.encode(A.camera, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && Q.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && g.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && Q.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.AndroidMetadata(), a, r;
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
              I.camera = Q.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = Q.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(Q.dot.DigestWithTimestamp.decode(A, A.uint32()));
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
                    r = Q.dot.Int32List.decode(A, A.uint32());
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
              I.croppedYuv420Image = Q.dot.v4.Yuv420Image.decode(A, A.uint32());
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
            if (!d.isString(A.supportedAbis[g]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !d.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let g = Q.dot.v4.AndroidCamera.verify(A.camera);
          if (g)
            return "camera." + g;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let g = Q.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (g)
            return "detectionNormalizedRectangle." + g;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let g = 0; g < A.digests.length; ++g)
            if (!(A.digests[g] && typeof A.digests[g].length == "number" || d.isString(A.digests[g])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            let n = Q.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[g]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let g = Object.keys(A.dynamicCameraFrameProperties);
          for (let n = 0; n < g.length; ++n) {
            let I = Q.dot.Int32List.verify(A.dynamicCameraFrameProperties[g[n]]);
            if (I)
              return "dynamicCameraFrameProperties." + I;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let g = Q.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (g)
            return "croppedYuv420Image." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.AndroidMetadata)
          return A;
        let g = new Q.dot.v4.AndroidMetadata();
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
          g.camera = Q.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          g.detectionNormalizedRectangle = Q.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          g.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? d.base64.decode(A.digests[n], g.digests[n] = d.newBuffer(d.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (g.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          g.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            g.digestsWithTimestamp[n] = Q.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          g.dynamicCameraFrameProperties = {};
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I) {
            if (typeof A.dynamicCameraFrameProperties[n[I]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            g.dynamicCameraFrameProperties[n[I]] = Q.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[n[I]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, g.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (g.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          g.croppedYuv420Image = Q.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
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
            n.digests[a] = g.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : g.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let I;
        if (A.dynamicCameraFrameProperties && (I = Object.keys(A.dynamicCameraFrameProperties)).length) {
          n.dynamicCameraFrameProperties = {};
          for (let a = 0; a < I.length; ++a)
            n.dynamicCameraFrameProperties[I[a]] = Q.dot.Int32List.toObject(A.dynamicCameraFrameProperties[I[a]], g);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = Q.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], g);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = Q.dot.v4.AndroidCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (n.tamperingIndicators = g.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : g.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, g.oneofs && (n._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (n.croppedYuv420Image = Q.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, g), g.oneofs && (n._croppedYuv420Image = "croppedYuv420Image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), i.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.AndroidCamera();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = Q.dot.ImageSize.decode(e, e.uint32());
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
          let A = Q.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.AndroidCamera)
          return e;
        let A = new Q.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = Q.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.resolution = null, g.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (g.resolution = Q.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (g.rotationDegrees = e.rotationDegrees), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), i.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uPlane = d.newBuffer([]), t.prototype.vPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && Q.dot.ImageSize.encode(e.size, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.Yuv420Image();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.size = Q.dot.ImageSize.decode(e, e.uint32());
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
          let A = Q.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.Yuv420Image)
          return e;
        let A = new Q.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = Q.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.size = null, A.bytes === String ? g.yPlane = "" : (g.yPlane = [], A.bytes !== Array && (g.yPlane = d.newBuffer(g.yPlane))), A.bytes === String ? g.uPlane = "" : (g.uPlane = [], A.bytes !== Array && (g.uPlane = d.newBuffer(g.uPlane))), A.bytes === String ? g.vPlane = "" : (g.vPlane = [], A.bytes !== Array && (g.vPlane = d.newBuffer(g.vPlane)))), e.size != null && e.hasOwnProperty("size") && (g.size = Q.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (g.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (g.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (g.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), i.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        if (g || (g = v.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && g.uint32(
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
            Q.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && Q.dot.v4.IosCamera.encode(A.camera, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && Q.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.IosMetadata(), a, r;
        for (; A.pos < n; ) {
          let B = A.uint32();
          switch (B >>> 3) {
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
              I.camera = Q.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = Q.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(Q.dot.DigestWithTimestamp.decode(A, A.uint32()));
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
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !d.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!d.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let g = Object.keys(A.architectureInfo);
          for (let n = 0; n < g.length; ++n)
            if (typeof A.architectureInfo[g[n]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let g = Q.dot.v4.IosCamera.verify(A.camera);
          if (g)
            return "camera." + g;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let g = Q.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (g)
            return "detectionNormalizedRectangle." + g;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let g = 0; g < A.digests.length; ++g)
            if (!(A.digests[g] && typeof A.digests[g].length == "number" || d.isString(A.digests[g])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            let n = Q.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[g]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let g = 0; g < A.isoValues.length; ++g)
            if (!d.isInteger(A.isoValues[g]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.IosMetadata)
          return A;
        let g = new Q.dot.v4.IosMetadata();
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
          g.camera = Q.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          g.detectionNormalizedRectangle = Q.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          g.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? d.base64.decode(A.digests[n], g.digests[n] = d.newBuffer(d.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (g.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          g.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            g.digestsWithTimestamp[n] = Q.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
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
            n.digests[a] = g.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : g.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          n.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            n.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = Q.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], g);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = Q.dot.v4.IosCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), i.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.IosCamera();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = Q.dot.ImageSize.decode(e, e.uint32());
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
          let A = Q.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.IosCamera)
          return e;
        let A = new Q.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = Q.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.resolution = null, g.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (g.resolution = Q.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (g.rotationDegrees = e.rotationDegrees), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), i.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = d.emptyArray, t.prototype.hashedDetectedImages = d.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = d.emptyArray, t.prototype.detectionRecord = d.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: d.oneOfGetter(e = ["croppedImage"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        if (g || (g = v.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let n = 0; n < A.availableCameraProperties.length; ++n)
            Q.dot.v4.CameraProperties.encode(A.availableCameraProperties[n], g.uint32(
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
            Q.dot.v4.DetectedObject.encode(A.detectionRecord[n], g.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n)
            Q.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && Q.dot.Image.encode(A.croppedImage, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.WebMetadata();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.currentCameraProperties = Q.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.availableCameraProperties && I.availableCameraProperties.length || (I.availableCameraProperties = []), I.availableCameraProperties.push(Q.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              I.hashedDetectedImages && I.hashedDetectedImages.length || (I.hashedDetectedImages = []), I.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              I.hashedDetectedImagesWithTimestamp && I.hashedDetectedImagesWithTimestamp.length || (I.hashedDetectedImagesWithTimestamp = []), I.hashedDetectedImagesWithTimestamp.push(Q.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.detectionRecord && I.detectionRecord.length || (I.detectionRecord = []), I.detectionRecord.push(Q.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              I.croppedImage = Q.dot.Image.decode(A, A.uint32());
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
          let g = Q.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (g)
            return "currentCameraProperties." + g;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let g = 0; g < A.availableCameraProperties.length; ++g) {
            let n = Q.dot.v4.CameraProperties.verify(A.availableCameraProperties[g]);
            if (n)
              return "availableCameraProperties." + n;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            if (!d.isString(A.hashedDetectedImages[g]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g) {
            let n = Q.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[g]);
            if (n)
              return "hashedDetectedImagesWithTimestamp." + n;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let g = 0; g < A.detectionRecord.length; ++g) {
            let n = Q.dot.v4.DetectedObject.verify(A.detectionRecord[g]);
            if (n)
              return "detectionRecord." + n;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let g = Q.dot.Image.verify(A.croppedImage);
          if (g)
            return "croppedImage." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.WebMetadata)
          return A;
        let g = new Q.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          g.currentCameraProperties = Q.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          g.availableCameraProperties = [];
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            if (typeof A.availableCameraProperties[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            g.availableCameraProperties[n] = Q.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[n]);
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
            g.hashedDetectedImagesWithTimestamp[n] = Q.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[n]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          g.detectionRecord = [];
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            if (typeof A.detectionRecord[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            g.detectionRecord[n] = Q.dot.v4.DetectedObject.fromObject(A.detectionRecord[n]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          g.croppedImage = Q.dot.Image.fromObject(A.croppedImage);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.availableCameraProperties = [], n.hashedDetectedImages = [], n.detectionRecord = [], n.hashedDetectedImagesWithTimestamp = []), g.defaults && (n.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (n.currentCameraProperties = Q.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, g)), A.availableCameraProperties && A.availableCameraProperties.length) {
          n.availableCameraProperties = [];
          for (let I = 0; I < A.availableCameraProperties.length; ++I)
            n.availableCameraProperties[I] = Q.dot.v4.CameraProperties.toObject(A.availableCameraProperties[I], g);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          n.hashedDetectedImages = [];
          for (let I = 0; I < A.hashedDetectedImages.length; ++I)
            n.hashedDetectedImages[I] = A.hashedDetectedImages[I];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          n.detectionRecord = [];
          for (let I = 0; I < A.detectionRecord.length; ++I)
            n.detectionRecord[I] = Q.dot.v4.DetectedObject.toObject(A.detectionRecord[I], g);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          n.hashedDetectedImagesWithTimestamp = [];
          for (let I = 0; I < A.hashedDetectedImagesWithTimestamp.length; ++I)
            n.hashedDetectedImagesWithTimestamp[I] = Q.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[I], g);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (n.croppedImage = Q.dot.Image.toObject(A.croppedImage, g), g.oneofs && (n._croppedImage = "croppedImage")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), i.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.HashedDetectedImageWithTimestamp();
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new Q.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        if (A.defaults)
          if (g.imageHash = "", d.Long) {
            let n = new d.Long(0, 0, !0);
            g.timestampMillis = A.longs === String ? n.toString() : A.longs === Number ? n.toNumber() : n;
          } else
            g.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (g.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? g.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : g.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), i.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.MediaTrackSettings();
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
        if (A instanceof Q.dot.v4.MediaTrackSettings)
          return A;
        let g = new Q.dot.v4.MediaTrackSettings();
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
    }(), i.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.ImageBitmap();
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.ImageBitmap)
          return e;
        let A = new Q.dot.v4.ImageBitmap();
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
    }(), i.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: d.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && Q.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.cameraProperties, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.CameraProperties();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.cameraProperties = Q.dot.v4.MediaTrackSettings.decode(A, A.uint32());
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
          let g = Q.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (g)
            return "cameraInitFrameResolution." + g;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let g = Q.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (g)
            return "cameraProperties." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.CameraProperties)
          return A;
        let g = new Q.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          g.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          g.cameraProperties = Q.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (n.cameraInitFrameResolution = Q.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, g), g.oneofs && (n._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (n.cameraProperties = Q.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, g)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), i.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && Q.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && Q.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && Q.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && Q.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && Q.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.DetectedObject();
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
              n.faceCenter = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              n.smallestEdge = e.float();
              break;
            }
            case 8: {
              n.bottomLeft = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              n.bottomRight = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              n.topLeft = Q.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              n.topRight = Q.dot.v4.Point.decode(e, e.uint32());
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
          let A = Q.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = Q.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = Q.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = Q.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = Q.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.DetectedObject)
          return e;
        let A = new Q.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = Q.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = Q.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = Q.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = Q.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = Q.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.brightness = 0, g.sharpness = 0, g.hotspots = 0, g.confidence = 0, g.faceSize = 0, g.faceCenter = null, g.smallestEdge = 0, g.bottomLeft = null, g.bottomRight = null, g.topLeft = null, g.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (g.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (g.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (g.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (g.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (g.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (g.faceCenter = Q.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (g.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (g.bottomLeft = Q.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (g.bottomRight = Q.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (g.topLeft = Q.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (g.topRight = Q.dot.v4.Point.toObject(e.topRight, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), i.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.Point();
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
        if (e instanceof Q.dot.v4.Point)
          return e;
        let A = new Q.dot.v4.Point();
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
    }(), i.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && Q.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.FaceContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = Q.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = Q.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.FaceContent)
          return e;
        let A = new Q.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = Q.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = Q.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = Q.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), i.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && Q.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.DocumentContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = Q.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = Q.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.DocumentContent)
          return e;
        let A = new Q.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = Q.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = Q.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = Q.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), i.Blob = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: d.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && Q.dot.v4.DocumentContent.encode(A.documentContent, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && Q.dot.v4.FaceContent.encode(A.faceContent, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && Q.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && Q.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && Q.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && Q.dot.v4.PalmContent.encode(A.palmContent, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && Q.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.Blob();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.documentContent = Q.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.faceContent = Q.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.smileLivenessContent = Q.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.palmContent = Q.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.travelDocumentContent = Q.dot.v4.TravelDocumentContent.decode(A, A.uint32());
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
            let n = Q.dot.v4.DocumentContent.verify(A.documentContent);
            if (n)
              return "documentContent." + n;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = Q.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (n)
              return "eyeGazeLivenessContent." + n;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = Q.dot.v4.FaceContent.verify(A.faceContent);
            if (n)
              return "faceContent." + n;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = Q.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (n)
              return "magnifeyeLivenessContent." + n;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = Q.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (n)
              return "smileLivenessContent." + n;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = Q.dot.v4.PalmContent.verify(A.palmContent);
            if (n)
              return "palmContent." + n;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = Q.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (n)
              return "travelDocumentContent." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Blob)
          return A;
        let g = new Q.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          g.documentContent = Q.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          g.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          g.faceContent = Q.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          g.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          g.smileLivenessContent = Q.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          g.palmContent = Q.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          g.travelDocumentContent = Q.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (n.documentContent = Q.dot.v4.DocumentContent.toObject(A.documentContent, g), g.oneofs && (n.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (n.faceContent = Q.dot.v4.FaceContent.toObject(A.faceContent, g), g.oneofs && (n.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (n.magnifeyeLivenessContent = Q.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, g), g.oneofs && (n.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (n.smileLivenessContent = Q.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, g), g.oneofs && (n.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (n.eyeGazeLivenessContent = Q.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, g), g.oneofs && (n.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (n.palmContent = Q.dot.v4.PalmContent.toObject(A.palmContent, g), g.oneofs && (n.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (n.travelDocumentContent = Q.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, g), g.oneofs && (n.blob = "travelDocumentContent")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), i.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && Q.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && Q.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && Q.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.TravelDocumentContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.ldsMasterFile = Q.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              n.authenticationStatus = Q.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              n.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = Q.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = Q.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = Q.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.TravelDocumentContent)
          return e;
        let A = new Q.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = Q.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = Q.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = Q.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.ldsMasterFile = null, g.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, g.authenticationStatus = null, g.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (g.ldsMasterFile = Q.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (g.accessControlProtocolUsed = A.enums === String ? Q.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : Q.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (g.authenticationStatus = Q.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), i.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && Q.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.LdsMasterFile();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
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
          let A = Q.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.LdsMasterFile)
          return e;
        let A = new Q.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (g.lds1eMrtdApplication = Q.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), i.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && Q.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, g.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, g.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, g.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, g.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, g.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, g.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, g.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, g.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && Q.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, g.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              I.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              I.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              I.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              I.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              I.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              I.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              I.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              I.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              I.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              I.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
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
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (g)
            return "comHeaderAndDataGroupPresenceInformation." + g;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (g)
            return "sodDocumentSecurityObject." + g;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (g)
            return "dg1MachineReadableZoneInformation." + g;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (g)
            return "dg2EncodedIdentificationFeaturesFace." + g;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (g)
            return "dg3AdditionalIdentificationFeatureFingers." + g;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (g)
            return "dg4AdditionalIdentificationFeatureIrises." + g;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (g)
            return "dg5DisplayedPortrait." + g;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (g)
            return "dg7DisplayedSignatureOrUsualMark." + g;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (g)
            return "dg8DataFeatures." + g;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (g)
            return "dg9StructureFeatures." + g;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (g)
            return "dg10SubstanceFeatures." + g;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (g)
            return "dg11AdditionalPersonalDetails." + g;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (g)
            return "dg12AdditionalDocumentDetails." + g;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (g)
            return "dg13OptionalDetails." + g;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (g)
            return "dg14SecurityOptions." + g;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (g)
            return "dg15ActiveAuthenticationPublicKeyInfo." + g;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let g = Q.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (g)
            return "dg16PersonsToNotify." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.Lds1eMrtdApplication)
          return A;
        let g = new Q.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          g.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          g.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          g.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          g.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          g.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          g.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          g.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          g.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          g.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          g.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          g.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          g.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          g.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          g.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          g.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          g.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          g.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.comHeaderAndDataGroupPresenceInformation = null, n.sodDocumentSecurityObject = null, n.dg1MachineReadableZoneInformation = null, n.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (n.comHeaderAndDataGroupPresenceInformation = Q.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, g)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (n.sodDocumentSecurityObject = Q.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, g)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (n.dg1MachineReadableZoneInformation = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, g)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (n.dg2EncodedIdentificationFeaturesFace = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, g)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (n.dg3AdditionalIdentificationFeatureFingers = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, g), g.oneofs && (n._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (n.dg4AdditionalIdentificationFeatureIrises = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, g), g.oneofs && (n._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (n.dg5DisplayedPortrait = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, g), g.oneofs && (n._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (n.dg7DisplayedSignatureOrUsualMark = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, g), g.oneofs && (n._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (n.dg8DataFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, g), g.oneofs && (n._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (n.dg9StructureFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, g), g.oneofs && (n._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (n.dg10SubstanceFeatures = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, g), g.oneofs && (n._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (n.dg11AdditionalPersonalDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, g), g.oneofs && (n._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (n.dg12AdditionalDocumentDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, g), g.oneofs && (n._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (n.dg13OptionalDetails = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, g), g.oneofs && (n._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (n.dg14SecurityOptions = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, g), g.oneofs && (n._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (n.dg15ActiveAuthenticationPublicKeyInfo = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, g), g.oneofs && (n._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (n.dg16PersonsToNotify = Q.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, g), g.oneofs && (n._dg16PersonsToNotify = "dg16PersonsToNotify")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), i.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: d.oneOfGetter(e = ["bytes"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.Lds1ElementaryFile();
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
        if (A instanceof Q.dot.v4.Lds1ElementaryFile)
          return A;
        let g = new Q.dot.v4.Lds1ElementaryFile();
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
        return A.bytes != null && (typeof A.bytes == "string" ? d.base64.decode(A.bytes, g.bytes = d.newBuffer(d.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (g.bytes = A.bytes)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.id = g.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (n.id = g.enums === String ? Q.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : Q.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (n.bytes = g.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : g.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, g.oneofs && (n._bytes = "bytes")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, g = Object.create(A);
        return g[A[0] = "ID_UNSPECIFIED"] = 0, g[A[1] = "ID_COM"] = 1, g[A[2] = "ID_SOD"] = 2, g[A[3] = "ID_DG1"] = 3, g[A[4] = "ID_DG2"] = 4, g[A[5] = "ID_DG3"] = 5, g[A[6] = "ID_DG4"] = 6, g[A[7] = "ID_DG5"] = 7, g[A[8] = "ID_DG7"] = 8, g[A[9] = "ID_DG8"] = 9, g[A[10] = "ID_DG9"] = 10, g[A[11] = "ID_DG10"] = 11, g[A[12] = "ID_DG11"] = 12, g[A[13] = "ID_DG12"] = 13, g[A[14] = "ID_DG13"] = 14, g[A[15] = "ID_DG14"] = 15, g[A[16] = "ID_DG15"] = 16, g[A[17] = "ID_DG16"] = 17, g;
      }(), t;
    }(), i.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), i.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && Q.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && Q.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.AuthenticationStatus();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.data = Q.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.chip = Q.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
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
          let A = Q.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = Q.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.AuthenticationStatus)
          return e;
        let A = new Q.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = Q.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = Q.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.data = null, g.chip = null), e.data != null && e.hasOwnProperty("data") && (g.data = Q.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (g.chip = Q.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), i.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
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
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.DataAuthenticationStatus();
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
        if (e instanceof Q.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new Q.dot.v4.DataAuthenticationStatus();
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
        return A.defaults && (g.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, g.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (g.status = A.enums === String ? Q.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : Q.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (g.protocol = A.enums === String ? Q.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : Q.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), g;
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
    }(), i.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
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
      }, t.encode = function(A, g) {
        return g || (g = v.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.ChipAuthenticationStatus();
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
        if (A instanceof Q.dot.v4.ChipAuthenticationStatus)
          return A;
        let g = new Q.dot.v4.ChipAuthenticationStatus();
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? d.base64.decode(A.activeAuthenticationResponse, g.activeAuthenticationResponse = d.newBuffer(d.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (g.activeAuthenticationResponse = A.activeAuthenticationResponse)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.status = g.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (n.status = g.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : Q.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (n.protocol = g.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, g.oneofs && (n._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (n.activeAuthenticationResponse = g.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : g.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, g.oneofs && (n._activeAuthenticationResponse = "activeAuthenticationResponse")), n;
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
    }(), i.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let g = Object.keys(A), n = 0; n < g.length; ++n)
            A[g[n]] != null && (this[g[n]] = A[g[n]]);
      }
      t.prototype.image = null, t.prototype.segments = d.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: d.oneOfGetter(e = ["image"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, g) {
        if (g || (g = v.create()), A.segments != null && A.segments.length)
          for (let n = 0; n < A.segments.length; ++n)
            Q.dot.v4.EyeGazeLivenessSegment.encode(A.segments[n], g.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && Q.dot.v4.Metadata.encode(A.metadata, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && Q.dot.Image.encode(A.image, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new Q.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 3: {
              I.image = Q.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              I.segments && I.segments.length || (I.segments = []), I.segments.push(Q.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              I.metadata = Q.dot.v4.Metadata.decode(A, A.uint32());
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
          let g = Q.dot.Image.verify(A.image);
          if (g)
            return "image." + g;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let g = 0; g < A.segments.length; ++g) {
            let n = Q.dot.v4.EyeGazeLivenessSegment.verify(A.segments[g]);
            if (n)
              return "segments." + n;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let g = Q.dot.v4.Metadata.verify(A.metadata);
          if (g)
            return "metadata." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof Q.dot.v4.EyeGazeLivenessContent)
          return A;
        let g = new Q.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          g.image = Q.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          g.segments = [];
          for (let n = 0; n < A.segments.length; ++n) {
            if (typeof A.segments[n] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            g.segments[n] = Q.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[n]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          g.metadata = Q.dot.v4.Metadata.fromObject(A.metadata);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.segments = []), g.defaults && (n.metadata = null), A.segments && A.segments.length) {
          n.segments = [];
          for (let I = 0; I < A.segments.length; ++I)
            n.segments[I] = Q.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[I], g);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (n.metadata = Q.dot.v4.Metadata.toObject(A.metadata, g)), A.image != null && A.hasOwnProperty("image") && (n.image = Q.dot.Image.toObject(A.image, g), g.oneofs && (n._image = "image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), i.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.corner = e.int32();
              break;
            }
            case 2: {
              n.image = Q.dot.Image.decode(e, e.uint32());
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
          let A = Q.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new Q.dot.v4.EyeGazeLivenessSegment();
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
          A.image = Q.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.corner = A.enums === String ? "TOP_LEFT" : 0, g.image = null), e.corner != null && e.hasOwnProperty("corner") && (g.corner = A.enums === String ? Q.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : Q.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (g.image = Q.dot.Image.toObject(e.image, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), i.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), i.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && Q.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && Q.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && Q.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.SmileLivenessContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.neutralExpressionFaceImage = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.smileExpressionFaceImage = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              n.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = Q.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = Q.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = Q.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.SmileLivenessContent)
          return e;
        let A = new Q.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = Q.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = Q.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = Q.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.neutralExpressionFaceImage = null, g.smileExpressionFaceImage = null, g.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (g.neutralExpressionFaceImage = Q.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (g.smileExpressionFaceImage = Q.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), i.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), g = 0; g < A.length; ++g)
            e[A[g]] != null && (this[A[g]] = e[A[g]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && Q.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new Q.dot.v4.PalmContent();
        for (; e.pos < g; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = Q.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = Q.dot.v4.Metadata.decode(e, e.uint32());
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
          let A = Q.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = Q.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.PalmContent)
          return e;
        let A = new Q.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = Q.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = Q.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = Q.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = Q.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, S.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), i;
  }(), o.Image = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.bytes = d.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = v.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new Q.dot.Image();
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
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.Image)
        return t;
      let e = new Q.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, i;
  }(), o.ImageSize = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.width = 0, i.prototype.height = 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = v.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new Q.dot.ImageSize();
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
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.ImageSize)
        return t;
      let e = new Q.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, i;
  }(), o.Int32List = function() {
    function i(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.items = d.emptyArray, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
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
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new Q.dot.Int32List();
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
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
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
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.Int32List)
        return t;
      let e = new Q.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let A = 0; A < t.items.length; ++A)
          e.items[A] = t.items[A] | 0;
      }
      return e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let g = 0; g < t.items.length; ++g)
          A.items[g] = t.items[g];
      }
      return A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, i;
  }(), o.Platform = function() {
    const i = {}, t = Object.create(i);
    return t[i[0] = "WEB"] = 0, t[i[1] = "ANDROID"] = 1, t[i[2] = "IOS"] = 2, t;
  }(), o.RectangleDouble = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.left = 0, i.prototype.top = 0, i.prototype.right = 0, i.prototype.bottom = 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
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
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new Q.dot.RectangleDouble();
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
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.RectangleDouble)
        return t;
      let e = new Q.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, i;
  }(), o.DigestWithTimestamp = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.digest = d.newBuffer([]), i.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = v.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new Q.dot.DigestWithTimestamp();
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
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.DigestWithTimestamp)
        return t;
      let e = new Q.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? d.base64.decode(t.digest, e.digest = d.newBuffer(d.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = d.newBuffer(A.digest))), d.Long) {
          let g = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? g.toString() : e.longs === Number ? g.toNumber() : g;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? d.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), o;
})();
(function(o, i) {
  function t(a, r, B, C, x) {
    return V(x - -272, a);
  }
  function e(a, r, B, C, x) {
    return V(x - 872, a);
  }
  function A(a, r, B, C, x) {
    return V(B - -384, x);
  }
  function g(a, r, B, C, x) {
    return V(r - 424, C);
  }
  const n = o();
  function I(a, r, B, C, x) {
    return V(a - 304, C);
  }
  for (; ; )
    try {
      if (-parseInt(t("sRgJ", 240, 231, 240, 229)) / 1 + parseInt(e("1fak", 1395, 1399, 1401, 1410)) / 2 * (-parseInt(e("eEAF", 1415, 1392, 1411, 1409)) / 3) + -parseInt(A(119, 124, 126, 103, "YXyp")) / 4 + -parseInt(g(908, 926, 941, "sRgJ", 905)) / 5 + parseInt(t("GHJv", 270, 243, 254, 261)) / 6 * (-parseInt(I(836, 828, 847, "2LF9", 852)) / 7) + parseInt(A(115, 137, 129, 115, "hhe4")) / 8 + parseInt(e("hhe4", 1415, 1425, 1415, 1412)) / 9 * (parseInt(g(943, 965, 947, "eEAF", 980)) / 10) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Po, 360310 + 50569 * -3 + 60249);
function Po() {
  const o = ["W7pdGXFcN2W", "WPSWW7uLWO0", "c3xdOColuY7cVGmMCfu1W6i", "CXq4W4pdVG", "wJxcOCkohG", "WQ9WWR7cUmoK", "W5X6W73dQmk9j8o/zwnYumozaG", "W6yJW7jF", "rND8uxu", "FWFdVvuXucO", "kIpcI0qu", "WQehWPtcJ8k3", "WOVdLJ9GEG", "rCo6WRNdV8kNaIZdNfaHBc8", "uCkVoq", "W5qLWORdLKBcQ8ofv8owc8k9WPi0", "WOtdLIu", "g8ksnMNcUmkDW5/cTG", "lYpcNvK", "WQmgWPxcHCkv", "W4lcPctdQmoX", "vr8sWOtcQ37cLmkS", "vMS9iCobW6RcUWH7WOvubG", "qCo6t8oJ", "WPhdUgxcTmk0Auu/rthdRSkMW7C", "d0WUWOy", "W596W7ddQmk0j8kWwwLGCSok", "pmowoSoRC8oMpG", "eLGHWPFcRa", "ad7cGmkgiu3dVW", "W598W7BdRCkWimoWbLvEASoenmoV", "WQVcJKK", "WObbuSoBsG", "ub57W5RdTXhcTCkhtmoltCo/", "r8o+WRxdSSkKatNdNv8BvJi", "W7NdGWRcIx8", "pCkKhmomWQX7WRxcHSo9xeWj", "p8kQhmoaWQ52W6FcN8oZFwmmba", "mComW5ddQmoT", "kb3dUgmd", "c23dQmkQWPe", "WQ/cKLBdNdNdPSozuvjtBG8sFq", "ugX9v2a", "W6dcLMBcKGddL8kd", "otJdVMG", "W53cG2GRnuRcLHNdTSkLoCk6W6y"];
  return Po = function() {
    return o;
  }, Po();
}
function V(o, i) {
  const t = Po();
  return V = function(e, A) {
    e = e - (-8583 + -465 * -11 + 3966 * 1);
    let g = t[e];
    if (V.aQtCQj === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      V.XaVIQL = B, o = arguments, V.aQtCQj = !0;
    }
    const I = t[-6657 + 734 * 10 + 683 * -1], a = e + I, r = o[a];
    return r ? g = r : (V.UQtvSt === void 0 && (V.UQtvSt = !0), g = V.XaVIQL(g, A), o[a] = g), g;
  }, V(o, i);
}
async function jQ() {
  const o = {};
  o[r("EFEc", 251, 220, 238, 234)] = Fa;
  function i(B, C, x, s, E) {
    return V(E - -527, s);
  }
  o[a("YmyS", 942) + "h"] = 256;
  const t = await window[r("mj]H", 251, 243, 214, 237) + "o"][a("2LF9", 951) + "e"][a("%7l9", 912) + a("jbOz", 915) + "y"](o, !0, [i(-8, -31, -6, "UI(j", -23) + "pt", a("YXyp", 935) + "pt"]), e = Uint8Array[i(22, 20, 19, "mj]H", 2)](Array(3266 + -1748 * 1 + -1502)[i(25, 11, 18, "1&S#", 7)](3337 + -3408 * -2 + -10153));
  function A(B, C, x, s, E) {
    return V(x - 174, C);
  }
  function g(B, C, x, s, E) {
    return V(B - 998, x);
  }
  const n = window[A(678, "KHZB", 679) + "o"][i(-6, 33, -2, "]HY7", 16) + A(717, "YmyS", 696) + g(1529, 1550, "Pq^B")](e), I = {};
  I[A(720, "pB2F", 699)] = t;
  function a(B, C, x, s, E) {
    return V(C - 412, B);
  }
  function r(B, C, x, s, E) {
    return V(E - -284, B);
  }
  return I.iv = n, I;
}
async function ZQ(o) {
  const { iv: i, key: t } = await jQ(), e = {};
  e[n("2LF9", 154, 166, 155, 155)] = Fa, e.iv = i;
  function A(x, s, E, l, u) {
    return V(x - 722, l);
  }
  const g = await window[C("hhe4", 169) + "o"][C("YaGg", 173) + "e"][C("YaGg", 161) + "pt"](e, t, o);
  function n(x, s, E, l, u) {
    return V(u - -381, x);
  }
  const I = await window[r(1070, 1074, "f05w", 1079, 1092) + "o"][r(1065, 1094, "UO3R", 1093, 1088) + "e"][B(1175, 1197, 1185, "]0Sk") + n("UI(j", 121, 116, 136, 128)](A(1264, 1243, 1274, "1g#i"), t), a = {};
  function r(x, s, E, l, u) {
    return V(u - 576, E);
  }
  a[n("%7l9", 124, 107, 148, 130) + "ge"] = g, a[C("YXyp", 181)] = I;
  function B(x, s, E, l, u) {
    return V(x - 661, l);
  }
  function C(x, s, E, l, u) {
    return V(s - -346, x);
  }
  return a.iv = i, a;
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return sA(x - 509, a);
  }
  const e = o();
  function A(a, r, B, C, x) {
    return sA(B - -724, x);
  }
  function g(a, r, B, C, x) {
    return sA(C - 554, r);
  }
  function n(a, r, B, C, x) {
    return sA(C - -172, a);
  }
  function I(a, r, B, C, x) {
    return sA(B - -37, r);
  }
  for (; ; )
    try {
      if (-parseInt(t("d0vD", 839, 855, 847, 849)) / 1 + -parseInt(I(282, "bt!O", 284, 276, 281)) / 2 + -parseInt(I(288, "t#c]", 287, 292, 280)) / 3 + parseInt(t("aT&k", 823, 835, 825, 829)) / 4 + parseInt(A(-378, -379, -381, -371, "h2pi")) / 5 + -parseInt(I(292, "1[y)", 302, 300, 296)) / 6 * (parseInt(n("[c5Q", 162, 165, 157, 154)) / 7) + -parseInt(g(890, "OljD", 902, 890, 886)) / 8 * (-parseInt(g(885, "guy1", 884, 892, 894)) / 9) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(qo, -715 * -1943 + -733441 * 1 + -91753 * -1);
function qo() {
  const o = ["eftdI3pcNSkLE8o6W5ldUa", "kuiHqwL5iG", "Cmo1x8o+W6jrhJFdISkz", "W5mlmZKuWPjiACoIW6ldHaCv", "yJ7dICoNWRqjW4eCjmkcW6Da", "W7a9W7tcVYbOoW", "WRNdIGvkW5SZWQP4W4ZdIHVcOJO", "jhe0WQFcTG", "W4ddPZ/dILu", "ur4EW5ebW4mJrGxcOSo2prS", "W7RcH8owWORdQmomqmklASkiWRnTyW", "g8kRj0FdOLXBW4meD8khWPnL", "EeK4jSodWP5qDCkVD8oiW4BcRa", "eLZdHxddVColpSo+W67dNMPUWPi", "WQxcSGa3WQNdUSoFW4dcVeZcQmk7", "x8oaW47cPdJdJKhdP8kLC8o3bfa", "iMVcNmkGW6m", "WP3cU2dcNbLMWOpcMYWwbx7dOa", "fCkVWQFcV2G", "pSobW5tdLCoXWQWMggrPW609BW", "CCo4mdJcRK3dSItcSCotW6tcMZW", "W6RcJL8t", "lwC+WOVcGq", "mmkOdqesWQRdJmkXk1GZAsC", "WOGNWRP3aW"];
  return qo = function() {
    return o;
  }, qo();
}
function sA(o, i) {
  const t = qo();
  return sA = function(e, A) {
    e = e - (6 * 1283 + -1 * -4319 + 11697 * -1);
    let g = t[e];
    if (sA.PSUPCB === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      sA.wqRNTA = B, o = arguments, sA.PSUPCB = !0;
    }
    const I = t[16748 + -106 * 158], a = e + I, r = o[a];
    return r ? g = r : (sA.ybRkxe === void 0 && (sA.ybRkxe = !0), g = sA.wqRNTA(g, A), o[a] = g), g;
  }, sA(o, i);
}
function VQ(o) {
  function i(n, I, a, r, B) {
    return sA(n - 234, B);
  }
  function t(n, I, a, r, B) {
    return sA(a - 653, B);
  }
  const e = new ArrayBuffer(o[g(892, 874, "bL5M", 891, 881) + "h"]), A = new Uint8Array(e);
  function g(n, I, a, r, B) {
    return sA(B - 539, a);
  }
  for (let n = -1 * 3621 + 494 * -17 + -119 * -101, I = o[g(882, 893, "bL5M", 886, 881) + "h"]; n < I; n++)
    A[n] = o[i(561, 558, 568, 557, "ZH6t") + t(983, 995, 984, 987, "zJUU")](n);
  return e;
}
function X(o, i) {
  const t = jo();
  return X = function(e, A) {
    e = e - (2362 * 1 + 4218 + -6276);
    let g = t[e];
    if (X.eVRgdk === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      X.abozzB = B, o = arguments, X.eVRgdk = !0;
    }
    const I = t[0], a = e + I, r = o[a];
    return r ? g = r : (X.eSDfwX === void 0 && (X.eSDfwX = !0), g = X.abozzB(g, A), o[a] = g), g;
  }, X(o, i);
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return X(r - 543, a);
  }
  function e(a, r, B, C, x) {
    return X(x - -61, r);
  }
  function A(a, r, B, C, x) {
    return X(C - 859, r);
  }
  const g = o();
  function n(a, r, B, C, x) {
    return X(a - -182, C);
  }
  function I(a, r, B, C, x) {
    return X(x - -130, B);
  }
  for (; ; )
    try {
      if (-parseInt(t("xf&2", 910, 842, 867, 964)) / 1 + -parseInt(t("(%1]", 916, 981, 942, 907)) / 2 * (parseInt(A(1283, "lK&T", 1252, 1306, 1271)) / 3) + parseInt(I(251, 280, "wTxy", 308, 302)) / 4 * (parseInt(n(299, 264, 284, "EB#J", 282)) / 5) + parseInt(A(1363, "[lVT", 1273, 1387, 1370)) / 6 + parseInt(e(397, "eUxe", 389, 301, 380)) / 7 * (-parseInt(I(478, 469, "zi(#", 496, 402)) / 8) + parseInt(A(1389, "xuLI", 1482, 1390, 1507)) / 9 + parseInt(n(246, 234, 282, "X2oS", 189)) / 10 * (parseInt(A(1312, "4@1r", 1405, 1388, 1303)) / 11) === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(jo, 208549 * 1 + 49348 + 16427 * 1);
function jo() {
  const o = ["WPSxjSkpWPG", "WQ/cIqpcSmo/", "sXFcRNRcUW", "WRFcHmk2W5RdSW", "W4FcRmkbWPtcGG", "n8k2WORcQcG", "WOZcRmoLdbK", "WO/dJSoxW5hdOa", "Cs0pnXK", "W65cWOf9ma", "W7tdIslcKSos", "WP3dOXqtWPS", "WOxcG8obWPWx", "WQ9ebCojWRi", "WPLof8koWQa", "aejyW5ZdKq", "W5ddU8oItCoj", "WR90WPZcHCot", "W7hcRXhcJr8", "W6WusL4Jjxr6", "W6ywW5WuwCoiC8oBWPy4W44ZW6m", "W4akgcFdTCkeW51Xtum", "WQfxwSk8W7K", "eZ/dI8oJzW7cMGORWPFdKSk2EG", "W6/dImoLW4BdI3XJnq", "W5FcSCkbreS", "WPldPexcHGldHZXHWQldHG", "iuJdJMn2", "W5qsDSo4fq", "DutdPfjZ", "bSkNqCoCaq", "W6tdRmkrWOv9", "WPpcHmoPgXC", "WRpdQCkzzcq", "W6raW4T6fq", "W7TKW5FcKSo1", "W5m7W57dSmoV", "WOHTkuf4", "W7yrtCoypW", "WQrkWO3cTSkX", "xwBdG8kTW6u", "W6PQj3/cHq", "W4tdL1ldJhK", "pSkvWRBcGXq", "WPb1crldLa", "W6ddR8kqWQmO", "W47dRSoUWONcHq", "tmkblmk2W7W", "WPZdHaqPWOu", "W64Uzmoiyq", "WPxcOmo/imoU", "W4TChq3dSG", "cd8Ad2m", "W6OfW7pcHJS", "W7ZcOSknaSol", "WOpdN8opF8oA", "W6ddK8krWQf5", "f8kiWP/dOmk+", "BKtdOfve", "iHyPWQO", "W6b/WQ5NhG", "WPBcGSkLWR/dOa", "WQD5feRdOa", "uKtdJ8kYW5S", "v8kBCCoihW", "ewFdPsjD", "W7xdUtWNWOG", "DmkabCk3W5C", "fsj9WQFdVa", "WOnRtSkcW78", "W7VcO8kmxhe", "phj8W6BdRG", "WQ/dKmo9DCo2", "WOD7rCk/W7m", "w8kDlCokiq", "W7ZcQmk4WQa", "WP5zs1xdHa", "WP3cH8kHWOnK", "W49bW57dSNq", "WPP3WPRcJ8k0", "W4ddO8oVWRba", "W6mvC8keW7ipWRZcPvtdJMy", "W6ddOSobFCot", "nLtdSKqe", "WP/cNeDjW6xcSdjxfSkAWQO", "W74tWO/cSGW", "WPfWt2yM", "W4JcSmktWPpdOG", "WPhcUCkeWR/dMq", "r1RdIvGa", "W6r7e2NdUG", "WR1XDCoAW4e", "WRvgtM4A", "W5jClMG", "rtNcNan/ofddGSogW4/cTeq", "W4/cTSkJkLm", "W7NdOGqOWOG", "WRFdJWFdH8or", "lrW0WO3dTG", "WRBcOCoqWPrW", "aSormmkow8oZW6mbWQddKbrc", "W7BdQmk2W7hcKG", "umoTW4Lnza", "WPBcOCkoEJC", "W4mifINcKmowWQbBvwlcPCkjWRC", "W4NcG8o8uxi", "BH3dGGWt", "W6BcGgpdI8oA", "W7u7W7tdV8on", "bxNdUSohla", "WR9ExKue", "wmkXpmo9jq", "DepdPWH2", "WQddISkowcC", "cmksWR7cUHu", "WRChW7xcIba", "r3aCcdC", "q2Oqga", "W4xcOHhdL8od", "W4xcVCkUWRBcOW", "W5JdPXme", "W6tdGSohvCoh", "W4PUrW3dJW", "cmkIW5FcQbu", "WRtdVWdcSSos", "i8oKWOhdS8oz", "iu5MW4ZcHG", "WQaeW4BdOSoz", "W7TjiMZcPq", "htFdQ34t", "rSo3aSkNW4S", "rCk/nCkjWQG", "WRv5imk9WQK", "zCoaW6/cHCk8", "W67cRZpdUWG", "oMyadxy", "WO/dHCoUjdG", "WQKDmcZdQW", "WPxcQmoBW6Hh", "bbSuWOldVa", "uxddPc4u", "sNrDWPxcGa", "cKewWOJdTq", "nwjTW7VcHa", "WPXpD0xdNW", "WPX8vvis", "WQHJjcZdRq", "WPZcLmoTWOmq", "WQrOEmoyW4K", "amolWR3cQJS", "W6r+W7qiea", "W5ZdVrmtWOS", "WR/cQ8o8W6RdRW", "fMRdLvvt", "W4RdNSoBBmomW7hdLW", "emkFWQtdQ8oiWRtcGxTjDSkj", "tSo9WP88za", "W4f2ec7dNW", "WOJcISo9WQZdVG", "ebNcVLmFW5VcSmkMWRGpjG", "tSoyWQ1qBW", "W4VcMmk7WPtcNa", "WP9/W5Ljfa", "BmkPW7FcJmoO", "g1zjW4a", "WOnGDSkjWPm", "W59poN3cVW", "f14WEhC", "WOlcTCoTW7eVAmkkqSkJcJfi", "W6TfW5ulcG", "WPhdQmoiuI4", "WQJdK8oFEmoU", "W7FcVSkeW7VcLW", "W4xcL8oLWQhcQG", "v8kSWRxcIJn9Fa", "cuFdPSoApW", "W4NdR8kPuJChW4WcWPZcSmkqWPm", "AMFcTdhcRW", "iL/dVaeU", "WPulzMxdTW", "WRLoWPHTja", "WQ3dTSkwAbi", "sgBdMcjD", "smoQg8oXhq", "x3NdVCk8W54", "csjXWPJdUq", "sCoWWOXGyq", "WQ9+tw4P", "WP1sW5ZdPhS", "W7BdQWiRWPm", "l2RcQvlcTW", "smk2mCodqa", "D1VcMCoNda", "WP/cNKnjW6ZdO3b3jCkOWQazsa", "peT1W6FcJq", "WQJdQSkCWPVcOZrLW5K", "W4SCW6VcHbG", "y8k7j8o6da", "W6aktmoEkG", "WOFcJ8k1WQldLW", "WPXCpXldSG", "WPtcU8oebx0", "WOJcPCoCWRP3", "WODbW77cRSk3", "WRTSnCoOW7a", "uKVdHCkFW6q", "WOXfW4fTja", "W7b4W5vUca", "W4pdOCohWO1iWPr6Cq", "W4xdGqysWQ8", "u8odW5dcVmoQ", "WRyirSoHcW", "p8kyWP/dSSo5", "WRBcSCoAdbi", "W6ldV8oEW5NcJmksW73cI117iZ0", "cfewBfy", "WQddKmkDaSoL", "WPb/fSoOW7a", "WOpcGmkLW6H7", "pLtdJ3yp", "rmkcxSosaW", "A0GfnWu", "WOxcOmo7ebm", "v8kFWP3cLZe", "vCkRW7ZcO8oD", "WO1fWODVmG", "pmkRW6ZcVSow", "WRblWOjvdq", "rCo2WR3dH8oh", "WRvGC8kjWPe", "W58LW43cTGy", "W43cMCoRm2S", "nmo1W4VcP8oR", "WRHoWPjdbG", "ehS6vW"];
  return jo = function() {
    return o;
  }, jo();
}
function _Q() {
  const o = t(748, 598, 651, "5B9d") + r(-333, -322, "sGq9") + r(-406, -401, "wTxy") + t(624, 652, 718, "R7ct") + r(-288, -301, "N^81") + r(-390, -493, "hQAf") + a(-203, -161, -220, -89, "*ccd") + i(746, 634, 675, 755, "[5UF") + I(1184, 1084, "x$p7") + I(1200, 1181, "Z(Tb") + t(611, 817, 708, "hQAf") + t(585, 529, 527, "f[nK") + i(614, 696, 603, 537, "wTxy") + i(744, 760, 673, 659, "zi(#") + i(718, 632, 736, 681, "@n9)") + I(1316, 1312, "(xHe") + a(-6, 59, 87, 93, "wTxy") + I(1273, 1282, "^fpD") + I(1182, 1078, "kWIk") + i(578, 565, 637, 644, "4@1r") + a(-63, -77, -87, -45, "[5UF") + t(395, 392, 507, "@uzP") + r(-421, -387, "BzZg") + r(-454, -384, "5B9d") + t(569, 528, 605, "BzZg") + a(-85, -121, -178, -191, "K8z5") + I(1262, 1299, "lK&T") + a(-108, -40, 0, -73, "[lVT") + t(524, 717, 639, "[5UF") + t(850, 827, 735, "(%1]") + t(577, 607, 558, "hQAf") + r(-369, -335, "xf&2") + r(-403, -486, "K8z5") + a(-90, -168, -48, -36, "[lVT") + r(-470, -515, "(xHe") + I(1193, 1116, "eUxe") + i(627, 544, 655, 550, "#IRB") + r(-530, -458, "UTRV") + t(536, 568, 594, "AUx5") + I(1208, 1233, "fk*G") + t(663, 643, 697, "[lVT") + t(624, 789, 676, "[5UF") + t(757, 663, 648, "xf&2") + t(581, 557, 643, "Z(Tb") + r(-404, -441, "5B9d") + t(714, 834, 730, "U]MT") + r(-341, -328, "sGq9") + a(-144, -210, -61, -218, "8pvi") + a(-81, -49, -49, -12, "UTRV") + a(-47, -15, -22, -36, "lK&T") + r(-511, -445, "owiu") + r(-305, -333, "jqZe") + I(1144, 1247, "eUxe") + a(-196, -186, -85, -109, "1qU3") + t(596, 539, 567, "AUx5") + i(562, 586, 561, 678, "[lVT") + r(-403, -305, "R7ct") + t(558, 562, 609, "K8z5") + a(-197, -80, -134, -97, "kWIk") + I(1168, 1285, "mULQ") + i(754, 814, 746, 848, "(xHe") + I(1175, 1099, "4@1r") + I(1255, 1314, "K8z5") + r(-336, -303, "M$^$") + a(-109, -112, -197, -5, "Z(Tb") + I(1358, 1464, "AUx5") + I(1290, 1296, "p))h") + a(-65, -121, -57, -76, "Kp8m") + I(1312, 1364, "hQAf") + a(-238, -205, -352, -355, "0ckh") + I(1354, 1299, "0ckh") + r(-315, -336, "EB#J") + a(-13, -90, -48, 36, "kWIk") + r(-404, -426, "DA4O") + i(593, 615, 535, 582, "kWIk") + t(685, 544, 660, "p))h") + a(-200, -127, -191, -313, "U]MT") + I(1338, 1276, "[5UF") + t(512, 596, 621, "UTRV") + r(-379, -475, "(xHe") + I(1343, 1457, "Pky&") + r(-432, -357, "1qU3") + a(-132, -171, -114, -43, "EB#J") + i(621, 605, 672, 727, "Z(Tb") + i(690, 798, 608, 731, "iC$2") + t(590, 549, 569, "EB#J") + t(428, 450, 524, "@n9)") + t(756, 687, 685, "BzZg") + r(-400, -491, "Kp8m") + i(704, 609, 618, 743, "EB#J") + I(1166, 1153, "Pky&") + a(-113, -143, -181, -66, "4@1r") + I(1163, 1142, "@n9)") + i(542, 649, 656, 627, "Kp8m") + a(-169, -242, -254, -192, "Z(Tb") + a(-124, -55, -141, -207, "KvOl") + t(652, 760, 694, "sGq9") + r(-350, -337, "R7ct") + I(1271, 1344, "zi(#") + t(601, 721, 666, "Pky&") + i(545, 640, 581, 615, "lK&T") + t(478, 528, 512, "hm*U") + r(-286, -315, "Z(Tb") + I(1147, 1119, "[5UF") + r(-304, -375, "4@1r") + i(550, 632, 467, 564, "UTRV") + I(1247, 1209, "N^81") + a(-98, -129, 13, -89, "Z(Tb") + I(1299, 1287, "^fpD") + I(1160, 1056, "*ccd") + t(813, 589, 707, "p))h") + a(-99, -133, -167, -78, "mULQ") + I(1243, 1130, "*ccd") + r(-574, -464, "DA4O") + a(-218, -170, -148, -260, "BzZg") + I(1196, 1294, "xf&2") + a(-122, -69, -83, -46, "kWIk") + t(570, 568, 671, "fk*G") + t(588, 730, 613, "x$p7") + I(1304, 1210, "1qU3") + t(559, 419, 536, "UTRV") + i(635, 742, 683, 652, "X2oS") + a(-125, -21, -225, -75, "@uzP") + i(546, 634, 662, 628, "KvOl") + i(612, 718, 721, 654, "@uzP") + a(-59, 31, -2, -100, "DbOv") + a(-162, -163, -52, -144, "(Evy") + i(689, 762, 783, 796, "@uzP") + r(-573, -508, "Z(Tb") + I(1190, 1269, "EB#J") + a(-139, -44, -83, -50, "*ccd") + i(642, 632, 581, 647, "wTxy") + a(-41, -149, 40, -38, "R7ct") + I(1158, 1212, "eUxe") + i(748, 745, 829, 755, "UTRV") + i(613, 535, 497, 538, "1qU3") + t(458, 609, 572, "^fpD") + I(1346, 1318, "[lVT") + t(538, 559, 607, "KvOl") + a(-23, -62, -80, -130, "EB#J") + t(563, 542, 511, "DA4O") + i(631, 746, 527, 724, "xf&2") + i(715, 750, 650, 650, "0ckh") + I(1231, 1191, "qSTv") + i(677, 651, 730, 786, "owiu") + r(-396, -422, "kWIk") + i(638, 667, 532, 748, "0ckh") + I(1353, 1335, "lK&T") + a(-120, -142, -176, -132, "[5UF") + t(526, 449, 542, "mULQ") + r(-516, -521, "5B9d") + I(1228, 1268, "Pky&") + t(655, 533, 573, "0ckh") + i(764, 741, 882, 708, "xf&2") + a(-149, -142, -81, -198, "M$^$") + r(-226, -326, "#IRB") + i(537, 509, 452, 456, "(Evy") + I(1260, 1282, "EB#J") + I(1149, 1141, "(Evy") + I(1335, 1255, "0ckh") + i(560, 506, 561, 546, "wTxy") + t(686, 674, 614, "4@1r") + a(-7, -75, -9, 18, "DbOv") + I(1199, 1300, "@uzP") + a(-114, -38, -114, -60, "^fpD") + a(-148, -96, -137, -113, "KvOl") + i(616, 582, 536, 637, "lK&T") + t(525, 603, 562, "@uzP") + a(-172, -106, -263, -281, "K8z5") + I(1317, 1358, "R7ct") + t(540, 637, 552, "M$^$") + r(-337, -431, "lK&T") + t(551, 739, 622, "zi(#") + t(584, 683, 670, "KvOl") + t(601, 676, 690, "(%1]") + t(512, 619, 535, "wTxy") + t(713, 753, 713, "jqZe") + a(-221, -193, -232, -229, "DbOv") + t(539, 742, 633, "sGq9") + t(722, 695, 680, "sGq9") + i(737, 848, 734, 754, "R7ct") + r(-297, -371, "1qU3") + t(671, 537, 597, "(Evy") + t(738, 543, 652, "wTxy") + t(519, 630, 526, "eUxe") + i(553, 654, 575, 568, "KvOl") + t(674, 499, 576, "wTxy") + a(-185, -231, -196, -291, "Pky&") + i(694, 703, 711, 720, "xuLI") + t(644, 782, 664, "8pvi") + t(567, 465, 577, "qSTv") + I(1202, 1242, "xf&2") + a(-86, -131, -86, 24, "Kp8m") + t(663, 816, 701, "fk*G") + i(738, 625, 836, 746, "AUx5") + i(607, 623, 668, 695, "fk*G") + i(667, 734, 559, 579, "R7ct") + r(-382, -476, "iC$2") + r(-300, -342, "f[nK") + t(715, 712, 611, "x$p7");
  function i(B, C, x, s, E) {
    return X(B - 229, E);
  }
  function t(B, C, x, s, E) {
    return X(x - 197, s);
  }
  const e = window[i(577, 592, 613, 476, "Z(Tb")](o), A = window[a(-153, -237, -227, -154, "jqZe")](e), g = VQ(A), n = {};
  function I(B, C, x, s, E) {
    return X(B - 840, x);
  }
  function a(B, C, x, s, E) {
    return X(B - -543, E);
  }
  n[I(1206, 1120, "DA4O")] = Sa;
  function r(B, C, x, s, E) {
    return X(C - -827, x);
  }
  return n[t(726, 531, 634, "x$p7")] = kB, window[i(668, 677, 655, 563, "DA4O") + "o"][t(432, 568, 508, "DbOv") + "e"][r(-249, -345, "UTRV") + a(-150, -182, -42, -49, "UTRV")](I(1347, 1365, "BzZg"), g, n, !0, [i(700, 797, 593, 673, "DbOv") + "pt"]);
}
async function zQ(o) {
  const i = await _Q();
  function t(n, I, a, r, B) {
    return X(n - 486, r);
  }
  const e = {};
  function A(n, I, a, r, B) {
    return X(B - 547, a);
  }
  e[g(493, 629, 562, "K8z5")] = Sa;
  function g(n, I, a, r, B) {
    return X(a - 230, r);
  }
  return window[t(823, 887, 762, "(%1]") + "o"][t(1009, 937, 911, "x$p7") + "e"][A(896, 850, "jqZe", 956, 936) + "pt"](e, i, o);
}
function uA(o, i) {
  const t = Zo();
  return uA = function(e, A) {
    e = e - 244;
    let g = t[e];
    if (uA.DQnlto === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      uA.TBLDri = B, o = arguments, uA.DQnlto = !0;
    }
    const I = t[10 * -670 + 2 * -3373 + 1 * 13446], a = e + I, r = o[a];
    return r ? g = r : (uA.wSyGkN === void 0 && (uA.wSyGkN = !0), g = uA.TBLDri(g, A), o[a] = g), g;
  }, uA(o, i);
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return uA(r - 71, a);
  }
  function e(a, r, B, C, x) {
    return uA(B - 608, C);
  }
  function A(a, r, B, C, x) {
    return uA(a - -927, r);
  }
  function g(a, r, B, C, x) {
    return uA(B - 275, x);
  }
  const n = o();
  function I(a, r, B, C, x) {
    return uA(r - -744, B);
  }
  for (; ; )
    try {
      if (-parseInt(I(-480, -481, "F$Qf", -473, -482)) / 1 + -parseInt(A(-683, "vi[y", -688, -673, -689)) / 2 + -parseInt(t("sUMG", 321, 315, 314, 323)) / 3 * (parseInt(e(870, 867, 860, "dAtZ", 859)) / 4) + parseInt(e(854, 847, 856, "IJQ%", 847)) / 5 + -parseInt(g(532, 545, 535, 529, "3BoM")) / 6 + -parseInt(A(-682, "^6)8", -676, -678, -687)) / 7 * (parseInt(I(-493, -491, "rqlJ", -498, -487)) / 8) + parseInt(A(-681, "3Eka", -690, -691, -687)) / 9 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Zo, 1 * -38292 + -541376 + 1056885);
function Zo() {
  const o = ["W5vvW7PWhIhcH8kZBd45", "uCkCiJHlW587WR9jW7WrnSkOiG", "fJJdTCksW7niWQxcJSkVW6igAhK", "i3VcHmo6W5pdTSokWRxdISoRpXuy", "W4ldSmkSjbKEWPCoWROjWRyhlYK", "WPVdL33dLmkfWRLpEKnZ", "WO7cTcqkW7hdOmkRW7hcSmkllq", "W53dNe/cR0qak8kHWOhdSG", "W4lcPhVcNSkTWPf0W6tcICkT", "fYetW5/dJmkCcCkyaaRdQ0u", "umkwjZ8zWQzeW69XW5u", "Fc/dHmk/WOy", "W4tcGde", "WRKiW5aVxv3dRZBdVbe", "W4b1zCkjW5qcm8ogl2FcTGzo", "WOBdMG90W4uyFwRcM2HlWOZcRW", "W4hdUSkTj2z+W6TyWRC3", "ymo4WPyFWRfrW77dKa92WPGPW7S", "W57cSSoYt8kFW67dLbddVKFdGmo8", "WQNdLW7dUCkejwuIWRuFrSoHW6a"];
  return Zo = function() {
    return o;
  }, Zo();
}
async function XQ(o) {
  const { iv: i, key: t, message: e } = await ZQ(o), A = await zQ(t);
  function g(I, a, r, B, C) {
    return uA(r - 51, a);
  }
  const n = {};
  return n[g(311, "sUMG", 308)] = A, n.iv = i, n[g(309, "IJQ%", 307) + "ge"] = e, n;
}
function rA(o, i) {
  const t = Vo();
  return rA = function(e, A) {
    e = e - (841 + 679 * -1);
    let g = t[e];
    if (rA.oEhijh === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      rA.IXNmEX = B, o = arguments, rA.oEhijh = !0;
    }
    const I = t[565 + 1 * 4 + 1 * -569], a = e + I, r = o[a];
    return r ? g = r : (rA.QLmMlW === void 0 && (rA.QLmMlW = !0), g = rA.IXNmEX(g, A), o[a] = g), g;
  }, rA(o, i);
}
(function(o, i) {
  const t = o();
  function e(I, a, r, B, C) {
    return rA(a - 982, C);
  }
  function A(I, a, r, B, C) {
    return rA(a - -813, B);
  }
  function g(I, a, r, B, C) {
    return rA(C - -464, a);
  }
  function n(I, a, r, B, C) {
    return rA(B - 800, C);
  }
  for (; ; )
    try {
      if (parseInt(e(1155, 1161, 1146, 1151, "hHMr")) / 1 + -parseInt(g(-297, "QAVs", -279, -292, -290)) / 2 * (parseInt(A(-635, -626, -611, "14lT", -628)) / 3) + -parseInt(e(1160, 1170, 1155, 1169, "kJj1")) / 4 + -parseInt(g(-291, "gRZ9", -269, -266, -279)) / 5 * (parseInt(e(1155, 1162, 1148, 1170, "hHMr")) / 6) + -parseInt(A(-650, -650, -642, "5JVM", -638)) / 7 * (parseInt(n(974, 963, 982, 971, "ssdG")) / 8) + -parseInt(g(-307, "ewva", -301, -306, -298)) / 9 * (-parseInt(A(-640, -638, -651, "0&)Q", -651)) / 10) + parseInt(g(-283, "kfko", -266, -266, -275)) / 11 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Vo, 126098 + -3214 * 25 + 956 * 369);
async function $Q(o) {
  function i(I, a, r, B, C) {
    return rA(r - -333, I);
  }
  const t = await window[A(916, 943, 927, "ewva") + "o"][A(905, 893, 900, "l&#Z") + "e"][n("#98w", 1043, 1040, 1051) + "t"](n("qi)o", 1049, 1061, 1054), o);
  function e(I, a, r, B, C) {
    return rA(r - -599, C);
  }
  function A(I, a, r, B, C) {
    return rA(r - 735, B);
  }
  function g(I, a, r, B, C) {
    return rA(a - -589, C);
  }
  function n(I, a, r, B, C) {
    return rA(B - 861, I);
  }
  return Array[A(921, 893, 907, "5JVM")](new Uint8Array(t))[n("^kEM", 1015, 1028, 1028)]((I) => I[i("l&#Z", -174, -160) + e(-421, -431, -430, -415, "xLg3")](-5546 + 103 * -44 + 5047 * 2)[g(-388, -398, -389, -413, "(WH9") + i("%Ny$", -144, -155)](2, "0"))[g(-427, -413, -421, -413, "l&#Z")]("");
}
function Vo() {
  const o = ["W7e6WPWWAW", "W4/cOCkjrfG", "WQ3dN8o8uvf/vdtcGSo5W4C", "zSolmCoPWQCKd3y", "WQtdM8kjpJLQFGW", "W4FdH8kqWQbs", "WQn+W5f4jZb1W4tcSCkDaG", "bbBcKW", "BSkfW7S/W70AfSkYc8kvdt4P", "uftcRa", "sCkZuSo4W5Wyomk7", "WPmUFCkWiCoMfetcQKqCW7O", "mCkng8oG", "W4ddNCkHWQbm", "pmkwW6alW6DmhKu", "jJCyW7LpW6/dTaHo", "W57dNCkBWRO", "WQBcRmkxW5lcUCoYvmk9", "fSoKua", "CCkfEaRdOCkkjCk4WQCOWOOd", "CSkgouVcI8oaf8kP", "WOxcG8oaW60pWQKBWQtcVIJdQ8o8rHC", "W7hcSeldQMJdPmkhcwG", "W7hcSuVcQsdcImkucK43W4LY", "dq3dVmkdW5WFuNFcUq", "Ac3cQ8kDE8oYWRldOtJcIrdcMdu", "W7pcTetcRsRcI8oojLiKW7zGBW", "W7RcPCoqW4SIW5xdI8ksaq", "sCk0h8k6WRvxr8kBWOFdImoPhSkq", "WOz7idummZGNWQddOqPOW6zs", "WO3dOmobdCoH", "WPRdU8k1WOpdGq"];
  return Vo = function() {
    return o;
  }, Vo();
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return kA(B - -887, r);
  }
  function e(a, r, B, C, x) {
    return kA(x - 553, a);
  }
  function A(a, r, B, C, x) {
    return kA(B - 65, a);
  }
  function g(a, r, B, C, x) {
    return kA(B - 567, C);
  }
  for (var n = o(); ; )
    try {
      var I = parseInt(A("K5AJ", 498, 499, 506, 509)) / 1 * (-parseInt(A("fzt&", 515, 506, 506, 497)) / 2) + parseInt(g(1002, 991, 994, "C[N6", 997)) / 3 + parseInt(e("8VV4", 1003, 1e3, 989, 993)) / 4 + parseInt(A("]E@B", 490, 494, 502, 497)) / 5 * (-parseInt(g(985, 1001, 991, "1yOS", 991)) / 6) + parseInt(e("xJew", 993, 987, 983, 990)) / 7 + parseInt(e("TINf", 975, 986, 990, 983)) / 8 * (parseInt(t(-444, "TD*8", -449, -444, -446)) / 9) + -parseInt(t(-439, "CZG$", -445, -453, -450)) / 10;
      if (I === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_o, 685815);
function kA(o, i) {
  var t = _o();
  return kA = function(e, A) {
    e = e - (6 * 1433 + 1289 * -2 + -5596 * 1);
    var g = t[e];
    if (kA.ibpWwx === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, l, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      kA.QHqsci = I, o = arguments, kA.ibpWwx = !0;
    }
    var a = t[-1 * -2779 + -7233 * 1 + -2 * -2227], r = e + a, B = o[r];
    return B ? g = B : (kA.gwqoaD === void 0 && (kA.gwqoaD = !0), g = kA.QHqsci(g, A), o[r] = g), g;
  }, kA(o, i);
}
function _o() {
  var o = ["WRBcM8kdW63cTSkygSkrhG", "W6tdISkOW4FcJSkEW7hdJZH1mSoh", "n8kmW7RcIwJcMmoVcSkKWOXeCG", "W63cHHGNwI5uW6qnF2GVoG", "WPLommkQvCo6W5yOW4y", "be3cGWLbkCoNvCkNBCkOWPi", "W4PPnCoCAtjr", "WRldMI7dRsu1cSoGW4f6WOCQoa", "WPq0Er5oqdVdNmoGcxCVW4y", "WRJdLIRdPIqYdSo4W4XfWPW8kq", "BtPBhmoQWPlcHcBcGKnJW64", "ymonq8oWW5pcLmkL", "WOW3W5RdTmoPiqO", "WQNdMConfmkcWPW+gtpcR2LhW58", "m8kmW7tcIwlcN8kWfmk7WPLDCtC", "WOZdImkItb44WOuxWRirmmoUCa", "WO1SWQdcLmkIzLlcKmk4WQ5aW5yh", "WPaEW7hdR8klWR9Y", "a1hdUCoAnCoLq8kXW5CIWR3cI8k4ya", "WOZcP8o6W4r5W69ZW4NdUX8esCksW4O"];
  return _o = function() {
    return o;
  }, _o();
}
async function C0(o) {
  const { Image: i } = tt, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const g = i.verify(A);
  if (g) throw Error(g);
  const n = {};
  return n.bytes = e, i.create(n);
}
async function As(o) {
  const { v4: { Metadata: i } } = tt, t = { ...o };
  t.platform = tt.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function es(o) {
  const { Content: i } = tt, { iv: t, key: e, message: A } = await XQ(o), g = { token: new Uint8Array(e), iv: t, schemaVersion: mB, bytes: new Uint8Array(A) }, n = i.verify(g);
  if (n) throw Error(n);
  const I = i.create(g);
  return i.encode(I).finish();
}
function ts(o) {
  const { Blob: i } = tt.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var Lt, gi;
class B0 {
  constructor(i) {
    O(this, Lt, !0);
    O(this, gi, Date.now());
    D(this, "analytics");
    D(this, "samVersion");
    D(this, "sessionToken");
    D(this, "onDetectionCallback");
    D(this, "onCaptureCallback");
    D(this, "createProtoMessage");
    D(this, "fpsOfAllImages", new Ja(9298 + -3218 * 1 + -6050));
    D(this, "cameraService");
    D(this, "imageProcessor");
    D(this, "instructionEscalation");
    D(this, "imageCropSettings");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback, this.instructionEscalation = i.instructionEscalation, this.imageCropSettings = i.imageCropSettings;
  }
  async run() {
    for (; y(this, Lt); )
      await this.iterate();
    return this;
  }
  stop() {
    Y(this, Lt, !1);
  }
  async trackCaptureProcess(i, t) {
    var n;
    const e = Date.now(), A = vo(this.fpsOfAllImages), g = {};
    g.width = t.width, g.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: i, imageResolution: g, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - y(this, gi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await kQ() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: et(vo(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const g = A, n = await JB(t), I = await OB(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await C0(I) }, B = {};
    B.sessionToken = this.sessionToken, B.web = r;
    const C = B, x = await this.createProtoMessage(n, C), s = {};
    s.detection = e, s.imageResolution = g;
    const E = {};
    E.image = n, E.data = s;
    const l = E;
    this.stop();
    const u = {};
    u.imageData = l, u.protoMessage = x, u.webMetadata = r, u.candidateSelectionImages = i, this.onCaptureCallback(u);
  }
  collectAndEscalate(i) {
    if (!this.instructionEscalation) return !1;
    const t = i;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(i) {
    return Date.now() - i;
  }
  getInvalidInstructions(i, t) {
    const e = [];
    return Array.from(i).forEach(([A, g]) => {
      !g && e.push(t[A]);
    }), e;
  }
  async sleep(i) {
    await Qg(Math.max(Vn.max - i, Vn.min));
  }
}
Lt = new WeakMap(), gi = new WeakMap();
class os extends B0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...g }) {
    super(g);
    D(this, "candidateSelectionTime", 2127 + -709 * 3);
    D(this, "candidatesSelectionFramesCount", -9771 + 1994 * 3 + 3789);
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
      throw e instanceof Error ? U.fromCameraError(e) : U.fromError(e);
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
    this.candidateSelectionTime === 0 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Si.minFrames ? t > Si.minDuration : t > Si.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new U("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), g = et((2607 + -4358 * -2 + -9 * 1147) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[-46 + -59 * 131 + 1555 * 5];
    const B = this.getInstructionCode(r), C = this.collectAndEscalate(B), x = {};
    return x.detection = t.detection, x.instructionCode = B, x.isEscalated = C, x.invalidValidators = a, x.isInCandidateSelection = this.isInCandidateSelection, { processedImage: x, detectionTime: A, fps: g, avgFps: et(vo(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Ie, fe;
class is extends B0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...A }) {
    super(A);
    O(this, Ie, void (-1688 + 67 * -16 + 690 * 4));
    O(this, fe);
    D(this, "fallbackInstruction");
    D(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ni).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    Y(this, fe, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && Y(this, Ie, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Zn.REQUEST_CAPTURE, y(this, fe));
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
    return y(this, Ie) ? y(this, Ie) === Ni.FIRST_FRAME ? !0 : y(this, Ie) === Ni.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? U.fromCameraError(e) : U.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), Y(this, Ie, void (270 * -9 + 71 * 125 + -6445));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), g = et(1e3 / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[-9598 + 1 * -9338 + -1 * -18936]), B = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = B, { processedImage: C, detectionTime: A, fps: g, avgFps: et(vo(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), y(this, fe) && document.removeEventListener(Zn.REQUEST_CAPTURE, y(this, fe));
  }
}
Ie = new WeakMap(), fe = new WeakMap();
function gs({ captureMode: o, ...i }) {
  return o === ma.AUTO_CAPTURE ? new os(i) : new is(i);
}
function ns({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = IQ(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, gQ(t.CAMERA_PROPS_CHANGED, A), z(() => () => {
    St.getInstance().restart();
  }, []);
  const g = {};
  return g.shouldCameraMirror = e, g;
}
function Is(o) {
  z(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function as({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: g, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: B }) {
  Is(() => {
    t && t.destroy();
  });
  const C = SA(!1), { appState: x, handleAppStateChange: s, isCameraReady: E } = Fe(), { sunfish: l } = Vt(), { analytics: u } = ka(), { cameraResolution: c, cameraService: h, onCameraResolutionChange: m, videoRef: R } = sQ(), M = {};
  M.cameraResolution = c, M.cameraService = h, M.customEvent = A;
  const { shouldCameraMirror: J } = ns(M), w = _a(void (2252 * -2 + 3051 * -1 + 7555)), q = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && l && E, lA = Ae((j) => {
    s(dA.WAITING), a(j);
  }, [a, s]), AA = Ae((j, rt) => {
    m(j.resolution), w.value = j, r(j, rt);
  }, [r, w, m]);
  z(() => {
    !C.current && q && (C.current = !0, s(dA.RUNNING));
  }, [q, s]), z(() => {
    if (x !== dA.RUNNING || !q) return;
    if (!h || !t) throw new U("Cannot start detection");
    t.imageProcessor.reset();
    const j = {};
    j.captureMode = o, j.analytics = u, j.cameraService = h, j.imageProcessor = t.imageProcessor, j.fallbackInstruction = g, j.instructionCodeMap = I, j.checkToInstructionCodeMap = i, j.sessionToken = B, j.samVersion = t.samVersion, j.createProtoMessage = e, j.onCaptureCallback = lA, j.onDetectionCallback = AA, j.instructionEscalation = t.instructionEscalation, j.imageCropSettings = n;
    const rt = gs(j);
    return t.runDetectionLoop(rt), () => {
      t.stopDetectionLoop();
    };
  }, [x, q, t, h, lA, AA, B, w, u, e, I, i, g, o, n]);
  const wA = {};
  return wA.videoRef = R, wA.cameraResolution = c, wA.detectionDetails = w, wA.shouldCameraMirror = J, wA;
}
const rs = () => typeof document < "u" && document.hasFocus();
function Cs(o = {}) {
  const i = SA(o), t = SA(rs()), [e, A] = fA(t.current);
  z(() => {
    i.current = o;
  }), z(() => {
    function n(B) {
      t.current = B, A(B);
    }
    function I() {
      Promise.resolve().then(() => {
        var B, C, x, s;
        !t.current && ((C = (B = i.current).onFocus) == null || C.call(B), (s = (x = i.current).onChange) == null || s.call(x, !0)), n(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var B, C, x, s;
        t.current && ((C = (B = i.current).onBlur) == null || C.call(B), (s = (x = i.current).onChange) == null || s.call(x, !1)), n(!1);
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
const Q0 = ot(null), gn = () => {
  const o = Qe(Q0);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}, Bs = ({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => ({
  onPhotoTaken: t,
  captureMode: i ?? ma.AUTO_CAPTURE,
  assetsDirectoryPath: La(o),
  sessionToken: e,
  thresholds: {
    confidenceThreshold: (A == null ? void 0 : A.confidenceThreshold) ?? dB,
    sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? hB,
    brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? fB,
    brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? pB,
    hotspotsScoreThreshold: (A == null ? void 0 : A.hotspotsScoreThreshold) ?? yB,
    sizeSmallThreshold: (A == null ? void 0 : A.sizeSmallThreshold) ?? lB,
    outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? uB
  }
}), Qs = ({
  cameraOptions: o,
  children: i
}) => {
  const t = pA(() => Bs(o), [o]);
  return /* @__PURE__ */ p(Q0.Provider, { value: t, children: i });
};
function ss({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e } = gn(), { redfin: A } = Vt(), g = SA(null);
  if (z(() => {
    if (!(g != null && g.current))
      return;
    g.current.width = o.width, g.current.height = o.height, eB(g.current);
    const u = Lo(o), c = Wa(
      o,
      e.outOfBoundsThreshold,
      u
    ), h = Na(o);
    i.value && (KB({
      canvas: g.current,
      polygon: i.value.processedImage.detection,
      color: "red"
    }), Ri(g.current, u, "lime"), Ri(g.current, c, "yellow"), Ri(g.current, h, "blue"));
  }, [o, i.value, e.outOfBoundsThreshold]), !i.value)
    return null;
  const {
    avgFps: n,
    detectionTime: I,
    fps: a,
    processedImage: { detection: r, instructionCode: B, invalidValidators: C, isEscalated: x },
    resolution: s,
    samVersion: E
  } = i.value, l = {
    Confidence: r.confidence,
    "Smallest edge": r.smallestEdge,
    Brightness: r.brightness,
    Hotspots: r.hotspots,
    Sharpness: r.sharpness,
    "Detection time": I,
    FPS: a,
    "Avg FPS": n,
    Tier: A,
    Instruction: B,
    Resolution: s,
    "Escalated instruction": x,
    "Component version": "7.2.1"
  };
  return E && (l["SAM version"] = E), C.length > 0 && (l["Invalid validators"] = C), /* @__PURE__ */ p(
    XC,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function cs(o) {
  return /* @__PURE__ */ p("rect", { fill: "#000", ...o, rx: "2%" });
}
function xs(o, i) {
  const [t, e] = fA(!1), A = () => e((I) => !I), g = "" + t;
  gt(() => {
    function I() {
      if (!o.current) return;
      const C = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, C.observe(o.current, x), C;
    }
    function a() {
      var s;
      if (!((s = o.current) != null && s["parentElement"])) return;
      const C = new MutationObserver((E) => {
        E.find((u) => {
          for (const c of u.removedNodes)
            if (c !== (i == null ? void 0 : i.current) && c === o.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((c) => {
            var h;
            c !== (i == null ? void 0 : i.current) && ((h = c.parentElement) == null || h.removeChild(c));
          });
        });
      }), x = {};
      return x.childList = !0, C.observe(o.current.parentElement, x), C;
    }
    const r = I(), B = a();
    return () => {
      B == null || B.disconnect(), r == null || r.disconnect();
    };
  });
  const n = {};
  return n.key = g, n;
}
const Es = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function ds({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = SA(null), { key: g } = xs(A, t);
  return /* @__PURE__ */ p("div", { ref: A, style: Es, children: /* @__PURE__ */ p("svg", { viewBox: `0 0 ${e} ${i}`, children: [
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
  ] }) }, g);
}
function ls({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = CB(t), A = `${e.height * 100}%`, g = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ p(
    ds,
    {
      cutOut: o || /* @__PURE__ */ p(cs, { height: A, width: g, x: n, y: I }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function us({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = Vt(), { appState: g, freemiumOverlayState: n } = Fe(), I = SA(null), a = n !== Uo.HIDDEN && A !== xg.Higher && o, r = n === Uo.VISIBLE, B = o && g === dA.RUNNING;
  return /* @__PURE__ */ p(FA, { children: [
    a && /* @__PURE__ */ p(
      ls,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: o
      }
    ),
    i,
    B && /* @__PURE__ */ p("div", { ref: I, children: /* @__PURE__ */ p(
      ss,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const hs = (o, i) => {
  if (LB()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    St.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function fs(o, i) {
  const { DocumentContent: t } = tt.v4, e = await C0(o), A = await As(i), g = {};
  g.image = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.documentContent = a, ts(r);
}
async function ps(o, i) {
  const t = await fs(o, i);
  return es(t);
}
function ys({ controller: o }) {
  const { captureMode: i, onPhotoTaken: t, sessionToken: e } = gn(), A = Ae(({ candidateSelectionImages: I, imageData: a, protoMessage: r }) => {
    hs(Oa.DOCUMENT, I), t(a, r);
  }, [t]), g = Ae(({ processedImage: I }) => {
    const a = {};
    a.code = I.instructionCode, a.isEscalated = I.isEscalated, Ha(KA.INSTRUCTION_CHANGED, a), o && oQ(KA.DETECTED_DOCUMENT_CHANGED, I.detection, o.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [o]), n = {};
  return n.captureMode = i, n.controller = o, n.createProtoMessage = ps, n.onCapture = A, n.onDetection = g, n.sessionToken = e, n.customEvent = KA, n.fallbackInstruction = VA.DOCUMENT_NOT_PRESENT, n.instructionCodeMap = VA, n.checkToInstructionCodeMap = qC, n.imageCropSettings = bB, as(n);
}
var WA;
class Ds {
  constructor(i, t) {
    O(this, WA);
    this.instructionCodeCollector = i, this.config = t, Y(this, WA, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return y(this, WA);
  }
  canEscalate(i) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(i) ? !1 : t.filter((A) => A === i).length / t.length >= this.config.threshold;
  }
  collect(i) {
    this.instructionCodeCollector.pushWithTimestamp(i);
  }
  isEscalated(i) {
    return y(this, WA).get(i) ?? !1;
  }
  escalate() {
    for (const [i, t] of y(this, WA).entries())
      !t && this.canEscalate(i) && (this.config.onEscalate(i), y(this, WA).set(i, !0));
  }
  reset() {
    y(this, WA).forEach((i, t) => {
      y(this, WA).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
WA = new WeakMap();
var Jt, ae, Te;
class ws extends Array {
  constructor(t) {
    super();
    O(this, Jt, 1 * 3419 + -7999 + 4580);
    O(this, ae, []);
    O(this, Te, !1);
    Y(this, Jt, t);
  }
  clearAfterTimeout() {
    if (y(this, ae).length === 4868 + -26 * 20 + 2 * -2174) return;
    const t = Date.now(), e = y(this, ae).findLastIndex((A) => t - A > y(this, Jt));
    e !== -(-7721 + -19 * 218 + 11864) && (Y(this, Te, !0), this.splice(0, e + (-2 * -1615 + -2766 * -1 + 109 * -55)), y(this, ae).splice(-1 * -346 + 1104 + 29 * -50, e + (-381 + 266 * -4 + 3 * 482)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), y(this, ae).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return y(this, Te);
  }
  clear() {
    this.splice(219 + 1 * -9139 + 8920), y(this, ae).splice(0), Y(this, Te, !1);
  }
}
Jt = new WeakMap(), ae = new WeakMap(), Te = new WeakMap();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const s0 = Symbol("Comlink.proxy"), ms = Symbol("Comlink.endpoint"), bs = Symbol("Comlink.releaseProxy"), Yi = Symbol("Comlink.finalizer"), yo = Symbol("Comlink.thrown"), c0 = (o) => typeof o == "object" && o !== null || typeof o == "function", ks = {
  canHandle: (o) => c0(o) && o[s0],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return E0(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), l0(o);
  }
}, Gs = {
  canHandle: (o) => c0(o) && yo in o,
  serialize({ value: o }) {
    let i;
    return o instanceof Error ? i = {
      isError: !0,
      value: {
        message: o.message,
        name: o.name,
        stack: o.stack
      }
    } : i = { isError: !1, value: o }, [i, []];
  },
  deserialize(o) {
    throw o.isError ? Object.assign(new Error(o.value.message), o.value) : o.value;
  }
}, x0 = /* @__PURE__ */ new Map([
  ["proxy", ks],
  ["throw", Gs]
]);
function Ns(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function E0(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Ns(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: g, type: n, path: I } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(le);
    let r;
    try {
      const B = I.slice(0, -1).reduce((x, s) => x[s], o), C = I.reduce((x, s) => x[s], o);
      switch (n) {
        case "GET":
          r = C;
          break;
        case "SET":
          B[I.slice(-1)[0]] = le(A.data.value), r = !0;
          break;
        case "APPLY":
          r = C.apply(B, a);
          break;
        case "CONSTRUCT":
          {
            const x = new C(...a);
            r = Ls(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: s } = new MessageChannel();
            E0(o, s), r = vs(x, [x]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (B) {
      r = { value: B, [yo]: 0 };
    }
    Promise.resolve(r).catch((B) => ({ value: B, [yo]: 0 })).then((B) => {
      const [C, x] = $o(B);
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), x), n === "RELEASE" && (i.removeEventListener("message", e), d0(i), Yi in o && typeof o[Yi] == "function" && o[Yi]());
    }).catch((B) => {
      const [C, x] = $o({
        value: new TypeError("Unserializable return value"),
        [yo]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), x);
    });
  }), i.start && i.start();
}
function Fs(o) {
  return o.constructor.name === "MessagePort";
}
function d0(o) {
  Fs(o) && o.close();
}
function l0(o, i) {
  return bg(o, [], i);
}
function ro(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function u0(o) {
  return We(o, {
    type: "RELEASE"
  }).then(() => {
    d0(o);
  });
}
const zo = /* @__PURE__ */ new WeakMap(), Xo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (zo.get(o) || 0) - 1;
  zo.set(o, i), i === 0 && u0(o);
});
function Ss(o, i) {
  const t = (zo.get(i) || 0) + 1;
  zo.set(i, t), Xo && Xo.register(o, i, o);
}
function Rs(o) {
  Xo && Xo.unregister(o);
}
function bg(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(g, n) {
      if (ro(e), n === bs)
        return () => {
          Rs(A), u0(o), e = !0;
        };
      if (n === "then") {
        if (i.length === 0)
          return { then: () => A };
        const I = We(o, {
          type: "GET",
          path: i.map((a) => a.toString())
        }).then(le);
        return I.then.bind(I);
      }
      return bg(o, [...i, n]);
    },
    set(g, n, I) {
      ro(e);
      const [a, r] = $o(I);
      return We(o, {
        type: "SET",
        path: [...i, n].map((B) => B.toString()),
        value: a
      }, r).then(le);
    },
    apply(g, n, I) {
      ro(e);
      const a = i[i.length - 1];
      if (a === ms)
        return We(o, {
          type: "ENDPOINT"
        }).then(le);
      if (a === "bind")
        return bg(o, i.slice(0, -1));
      const [r, B] = EI(I);
      return We(o, {
        type: "APPLY",
        path: i.map((C) => C.toString()),
        argumentList: r
      }, B).then(le);
    },
    construct(g, n) {
      ro(e);
      const [I, a] = EI(n);
      return We(o, {
        type: "CONSTRUCT",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, a).then(le);
    }
  });
  return Ss(A, o), A;
}
function Ms(o) {
  return Array.prototype.concat.apply([], o);
}
function EI(o) {
  const i = o.map($o);
  return [i.map((t) => t[0]), Ms(i.map((t) => t[1]))];
}
const h0 = /* @__PURE__ */ new WeakMap();
function vs(o, i) {
  return h0.set(o, i), o;
}
function Ls(o) {
  return Object.assign(o, { [s0]: !0 });
}
function $o(o) {
  for (const [i, t] of x0)
    if (t.canHandle(o)) {
      const [e, A] = t.serialize(o);
      return [
        {
          type: "HANDLER",
          name: i,
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
    h0.get(o) || []
  ];
}
function le(o) {
  switch (o.type) {
    case "HANDLER":
      return x0.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function We(o, i, t) {
  return new Promise((e) => {
    const A = Js();
    o.addEventListener("message", function g(n) {
      !n.data || !n.data.id || n.data.id !== A || (o.removeEventListener("message", g), e(n.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function Js() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Do = {};
Do.timeout = 4e3, Do.threshold = 0.7, Do.instructions = ["brightness_too_high", "brightness_too_low", "document_too_far", "sharpness_too_low"];
const Wi = Do, Us = "SAM v1.44.6 for idcards";
class Ys {
  constructor(i, t, e, A, g) {
    D(this, "isDetectorInitialized", !1);
    D(this, "samVersion", null);
    D(this, "detection");
    this.imageProcessor = i, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = g;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(i) {
    if (!i || !this.areVersionsCompatible(i))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new U("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = i;
  }
  runDetectionLoop(i) {
    this.detection && this.detection.stop(), this.detection = i, this.detection.run();
  }
  stopDetectionLoop() {
    var i, t;
    (i = this.detection) == null || i.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
  areVersionsCompatible(i) {
    return i === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(i, t) {
    return "" + t.replace(Ra, "") + i;
  }
}
class Ws {
  constructor() {
    D(this, "imageProcessor");
    D(this, "assetsDirectoryPath");
    D(this, "instructionEscalation");
    D(this, "compatibleSamVersion");
    D(this, "validationService");
    D(this, "detector");
  }
  setImageProcessor(i) {
    return this.imageProcessor = i, this;
  }
  setAssetsDirectoryPath(i) {
    return this.assetsDirectoryPath = i, this;
  }
  setCompatibleSamVersion(i) {
    return this.compatibleSamVersion = i, this;
  }
  setInstructionEscalation(i) {
    return this.instructionEscalation = i, this;
  }
  setValidationService(i) {
    return this.validationService = i, this;
  }
  setDetector(i) {
    return this.detector = i, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new U("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new U("AssetsDirectoryPath is required");
    if (!this.detector) throw new U("Detector is required");
    if (!this.compatibleSamVersion) throw new U("CompatibleSamVersion is required");
    if (!this.validationService) throw new U("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (9357 + -689 * -1 + -2 * 5023), this.assetsDirectoryPath = void (7359 + 223 * -33), this.instructionEscalation = void (2 * -2663 + 5383 + -57), this.compatibleSamVersion = void (673 + -8011 * 1 + 7338), this.detector = void (-7849 + 7849 * 1), this.validationService = void 0, this;
  }
}
class Os {
  constructor() {
    D(this, "detectionRecord", []);
    D(this, "imagesWithTimestampForDuplicateDetection", new Ja(wB));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / NB, A = e / 2, g = i.length / (-1061 * -1 + 2913 + -3972), n = await $Q(i.slice(g - A, g + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(i) {
    return { data: YB(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const g = SB(i), n = this.validationService.validateDetectedObject(g, t);
    if (n.result.get("isPresent")) {
      const I = {};
      I.image = e, I.timestamp = A, this.collectImagesForDuplicateDetection(I);
    }
    return this.detectionRecord.push(i), { detection: g, validationResult: n.result, isValid: n.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Hs {
  constructor() {
    D(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new U("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class f0 extends Ys {
  constructor(t, e, A, g, n, I) {
    super(A, g, n, e, I);
    D(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Ha(KA.INSTRUCTION_CHANGED, t, gB);
  }
}
class Ks extends Ws {
  build() {
    return this.validateDependencies(), new f0(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const Ts = "/dot-assets/document/dot-BgYT9b0k.js";
class Ps extends Os {
  constructor(t, e) {
    super();
    D(this, "className", "DocumentImageProcessor");
    D(this, "detector");
    D(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Lo(t), A = Ya(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t);
    let g = await this.detector.detect(A.data, A.resolution);
    g = qB(g, Lo(t)), g = jB(g, A.resolution);
    const n = {};
    return n.image = t, n.timestamp = e, n.imageData = A.data, n.detectedObject = g, this.processDetectedObject(n);
  }
}
var Pe, pe, ye;
class qs {
  constructor(i) {
    O(this, Pe);
    O(this, pe);
    O(this, ye);
    Y(this, Pe, i), Y(this, pe, /* @__PURE__ */ new Map());
  }
  validate() {
    y(this, Pe).forEach((i) => {
      y(this, pe).set(i.name, i.evaluate());
    }), Y(this, ye, void (-4374 + -27 * -162));
  }
  isValid() {
    return y(this, ye) === void 0 && Y(this, ye, Array.from(y(this, pe).values()).every((i) => i)), y(this, ye);
  }
  get result() {
    return y(this, pe);
  }
  get validators() {
    return y(this, Pe);
  }
}
Pe = new WeakMap(), pe = new WeakMap(), ye = new WeakMap();
var Ut, De;
class Re {
  constructor(i, t) {
    O(this, Ut);
    O(this, De);
    Y(this, Ut, i), Y(this, De, t);
  }
  get threshold() {
    return y(this, De);
  }
  get name() {
    return y(this, Ut);
  }
  isValueBelowThreshold(i) {
    return i < y(this, De);
  }
  isValueAboveThreshold(i) {
    return i > y(this, De);
  }
}
Ut = new WeakMap(), De = new WeakMap();
const js = "isNotDim";
var Yt;
class Zs extends Re {
  constructor(t, e) {
    super(js, t);
    O(this, Yt);
    Y(this, Yt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Yt));
  }
}
Yt = new WeakMap();
const Vs = "isNotSmall";
var Wt;
class _s extends Re {
  constructor(t, e) {
    super(Vs, t);
    O(this, Wt);
    Y(this, Wt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Wt));
  }
}
Wt = new WeakMap();
const zs = "isNotBright";
var Ot;
class Xs extends Re {
  constructor(t, e) {
    super(zs, t);
    O(this, Ot);
    Y(this, Ot, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Ot));
  }
}
Ot = new WeakMap();
const $s = "isPresent";
var Ht;
class Ac extends Re {
  constructor(t, e) {
    super($s, t);
    O(this, Ht);
    Y(this, Ht, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Ht));
  }
}
Ht = new WeakMap();
const ec = "isSharp";
var Kt;
class tc extends Re {
  constructor(t, e) {
    super(ec, t);
    O(this, Kt);
    Y(this, Kt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Kt));
  }
}
Kt = new WeakMap();
var Tt;
class oc extends Re {
  constructor(t, e) {
    super("noHotspots", t);
    O(this, Tt);
    Y(this, Tt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Tt));
  }
}
Tt = new WeakMap();
const ic = "isNotOutOfBounds";
var Pt, qe;
class gc extends Re {
  constructor(t, e, A) {
    super(ic, t);
    O(this, Pt);
    O(this, qe);
    Y(this, Pt, e), Y(this, qe, A);
  }
  evaluate() {
    const t = Wa(y(this, qe), this.threshold, Lo(y(this, qe))), { bottomLeft: e, bottomRight: A, topLeft: g, topRight: n } = y(this, Pt), I = {};
    return I.topLeft = g, I.topRight = n, I.bottomLeft = e, I.bottomRight = A, PB(I, t);
  }
}
Pt = new WeakMap(), qe = new WeakMap();
class nc {
  static getDocumentValidationInstance(i, t, e) {
    return new qs([new Ac(i.confidenceThreshold, t.confidence), new tc(i.sharpnessThreshold, t.sharpness), new Zs(i.brightnessLowThreshold, t.brightness), new Xs(i.brightnessHighThreshold, t.brightness), new oc(i.hotspotsScoreThreshold, t.hotspots), new gc(i.outOfBoundsThreshold, t, e), new _s(i.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class Ic extends Hs {
  constructor() {
    super(...arguments);
    D(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, e) {
    const A = nc.getDocumentValidationInstance(this.getThresholds(), t, e);
    return A.validate(), A;
  }
}
const ac = () => {
  const { handleError: o } = Fe(), { assetsDirectoryPath: i, thresholds: t } = gn(), { analytics: e } = ka(), [A, g] = fA();
  z(() => {
    (async () => {
      const a = f0.getWorkerPath(Ts, i), r = {};
      r.type = "module";
      const B = new Worker(new URL(a, import.meta.url), r), C = l0(B), x = await new C(), s = new Ic(), E = new Ps(x, s), l = new Ds(new ws(Wi.timeout), { threshold: Wi.threshold, instructions: Wi.instructions, onEscalate: (c) => {
        iQ(KA.INSTRUCTION_ESCALATED, c), e == null || e.trackEscalated(c);
      } }), u = new Ks().setDetector(x).setValidationService(s).setImageProcessor(E).setAssetsDirectoryPath(i).setCompatibleSamVersion(Us).setInstructionEscalation(l).build();
      try {
        await u.init(), g(u);
      } catch (c) {
        if (c instanceof Error) {
          o(U.fromError(c));
          return;
        }
      }
    })();
  }, [o, i, e]), z(() => {
    A && A.setThresholds(t);
  }, [A, t]);
  const n = {};
  return n.controller = A, n;
}, rc = () => {
  const { isCameraReady: o } = Fe(), { sunfish: i } = Vt(), { controller: t } = ac(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: g, videoRef: n } = ys({ controller: t });
  return /* @__PURE__ */ p(FA, { children: /* @__PURE__ */ p(
    us,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: g,
      children: /* @__PURE__ */ p(
        WC,
        {
          ref: n,
          $isImageMirror: g,
          $isVisible: i && o,
          autoPlay: !0,
          id: nB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, Cc = (o) => {
  const { handleAppStateChange: i, setIsCameraReady: t } = Fe();
  return Cs({
    onBlur: () => {
      t(!1), i(dA.LOADING);
    },
    onFocus: async () => {
      t(!0), i(dA.RUNNING);
    }
  }), /* @__PURE__ */ p(Qs, { cameraOptions: o, children: /* @__PURE__ */ p(rc, {}) });
};
function Bc({ children: o, ...i }) {
  const t = i.cameraFacing ?? Vg() ? Fo.REAR : Fo.FRONT;
  return /* @__PURE__ */ p(uQ, { cameraFacing: t, children: o });
}
function Qc({ initAppState: o, onError: i }) {
  const [t, e] = fA(o), [A, g] = fA(), [n, I] = fA(!1), a = SA(i);
  z(() => {
    a.current = i;
  }, [i]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = g, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function sc({ onError: o }) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: g, setError: n, setIsCameraReady: I } = Qc({
    initAppState: dA.LOADING,
    onError: o
  }), a = bQ(i), r = Ae(
    (C) => {
      AI(KA.STATE_CHANGED, { appState: dA.ERROR, error: C }), I(!1), A.current(C), n(C), g(dA.ERROR);
    },
    [A, n, g, I]
  ), B = Ae(
    (C) => {
      AI(KA.STATE_CHANGED, { appState: C }), g(C);
    },
    [g]
  );
  return {
    appState: i,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: I,
    handleAppStateChange: B,
    handleError: r,
    error: t
  };
}
var nn = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(nn || {});
class cc {
  constructor() {
    D(this, "appKey", "");
    D(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, g = "https://innovatrics.count.ly/i?", n = {};
    n.app_key = this.appKey, n.device_id = this.deviceId;
    const I = no(n);
    try {
      await fetch("" + g + I + "&" + i, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Ma() }, A = { organization: va(window.location.href) }, g = no({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(g);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = no(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const A = {};
    A.key = i, A.count = 1, A.dur = e, A.segmentation = t;
    const g = [A], n = no({ events: JSON.stringify(g) });
    await this.countlyFetch(n);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(nn.AUTO_CAPTURE, i, t);
  }
}
const xt = new cc();
class xc {
  constructor() {
    D(this, "countly", xt);
  }
  createSegmentation(i) {
    return { appVersion: Ma(), ...i };
  }
  init(i) {
    if (RB()) return;
    const t = pQ();
    xt.init(t, i);
  }
  endSession() {
    xt.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const A = this.createSegmentation(e);
    xt.sendAutoCaptureEvent(A);
  }
  trackEscalated(i) {
    const t = {};
    t.instructionCode = i;
    const e = this.createSegmentation(t);
    xt.sendEvent(nn.ESCALATION_TRIGGER, e);
  }
}
class Ec extends xc {
  trackCaptureProcess({ averageFps: i, captureProcessDurationInMs: t, detection: e, deviceName: A, facingMode: g, imageResolution: n, instructionSet: I }) {
    if (!e) return;
    const a = wQ(t), r = this.createSegmentation({ hotspots: ct(e.hotspots), brightness: ct(e.brightness), confidence: ct(e.confidence), sharpness: ct(e.sharpness), smallestEdge: ct(e.smallestEdge), camera: yQ(A, g), imageResolution: n.width + "x" + n.height, averageFps: mQ(i), captureTime: DQ(a), instructionSet: I });
    this.countly.sendAutoCaptureEvent(r, a);
  }
}
const dc = new Ec();
let F;
const zA = new Array(-172 + -1 * -300).fill(void 0);
zA.push(void 0, null, !0, !1);
function kg(o) {
  return zA[o];
}
let HA = 107 * -43 + -17 * 139 + 6964, yt = null;
function wo() {
  return (yt === null || yt.byteLength === 13 * 91 + 4847 * -1 + -16 * -229) && (yt = new Uint8Array(F.memory.buffer)), yt;
}
const mo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, lc = typeof mo.encodeInto == "function" ? function(o, i) {
  return mo.encodeInto(o, i);
} : function(o, i) {
  const t = mo.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function Mt(o, i, t) {
  if (t === void 0) {
    const I = mo.encode(o), a = i(I.length, -78 * -113 + -1343 + -7470) >>> 5126 + -5126 * 1;
    return wo().subarray(a, a + I.length).set(I), HA = I.length, a;
  }
  let e = o.length, A = i(e, 196 * 48 + 1066 * 2 + -11539) >>> 0;
  const g = wo();
  let n = -451 * 1 + 3685 + 22 * -147;
  for (; n < e; n++) {
    const I = o.charCodeAt(n);
    if (I > 1 * 3466 + -5987 + 2648) break;
    g[A + n] = I;
  }
  if (n !== e) {
    n !== 3747 * 1 + -1 * -5146 + -8893 * 1 && (o = o.slice(n)), A = t(A, e, e = n + o.length * (193 * -7 + 8418 + -7064), -49 * 199 + -2309 * 1 + -1723 * -7) >>> -5801 + -5801 * -1;
    const I = wo().subarray(A + n, A + e), a = lc(o, I);
    n += a.written, A = t(A, e, n, 1 * -4369 + 3 * -554 + 8 * 754) >>> -9317 + 9 * 1109 + -664;
  }
  return HA = n, A;
}
function p0(o) {
  return o == null;
}
let Dt = null;
function YA() {
  return (Dt === null || Dt.byteLength === 34 * 113 + -1026 + -11 * 256) && (Dt = new Int32Array(F.memory.buffer)), Dt;
}
let Nt = zA.length;
function uc(o) {
  o < -8750 + 8882 * 1 || (zA[o] = Nt, Nt = o);
}
function y0(o) {
  const i = kg(o);
  return uc(o), i;
}
const Gg = {};
Gg.ignoreBOM = !0, Gg.fatal = !0;
const D0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Gg) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && D0.decode();
function Ai(o, i) {
  return o = o >>> 5367 * 1 + 2 * 1667 + -8701, D0.decode(wo().subarray(o, o + i));
}
function Ng(o) {
  Nt === zA.length && zA.push(zA.length + (5570 * -1 + 7051 + -2 * 740));
  const i = Nt;
  return Nt = zA[i], zA[i] = o, i;
}
let wt = null;
function w0() {
  return (wt === null || wt.byteLength === -5 * 1713 + 2680 + -5 * -1177) && (wt = new Uint32Array(F.memory.buffer)), wt;
}
function dI(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = w0();
  for (let A = 3174 + 2 * -1587; A < o.length; A++)
    e[t / (-8010 + 1236 * -5 + -2 * -7097) + A] = Ng(o[A]);
  return HA = o.length, t;
}
function lI(o, i) {
  o = o >>> 9709 * 1 + 895 * 1 + 22 * -482;
  const t = w0(), e = t.subarray(o / (620 + 11 * -56), o / (-1599 + 703 * -5 + 5118) + i), A = [];
  for (let g = 0; g < e.length; g++)
    A.push(y0(e[g]));
  return A;
}
function hc(o, i) {
  const t = Mt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), e = HA, A = Mt(i, F.__wbindgen_malloc, F.__wbindgen_realloc), g = HA, n = F.is_mobile_supported(t, e, A, g);
  return In.__wrap(n);
}
const Fg = {};
Fg.register = () => {
}, Fg.unregister = () => {
};
const uI = typeof FinalizationRegistry > "u" ? Fg : new FinalizationRegistry((o) => F.__wbg_licensevalidationresult_free(o >>> 0));
class In {
  static __wrap(i) {
    i = i >>> 10888 + -2 * 5444;
    const t = Object.create(In.prototype);
    return t.__wbg_ptr = i, uI.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = -7449 + -514 * -16 + -775, uI.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, g) {
    var n = p0(t) ? 0 : Mt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), I = HA;
    const a = dI(e, F.__wbindgen_malloc), r = HA, B = dI(A, F.__wbindgen_malloc), C = HA, x = Mt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), s = HA, E = F.licensevalidationresult_new(i, n, I, a, r, B, C, x, s);
    return this.__wbg_ptr = E >>> -1 * 9961 + 4 * -1171 + 2929 * 5, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== 527 * 14 + -29 * 23 + -6711;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = YA()[e / (6766 + 1226 * -5 + 632 * -1) + 0], t = YA()[e / (5860 + -33 * 75 + -3 * 1127) + (-9612 + 2 * 1013 + 7587)];
      let A;
      return i !== -1 * 592 + -77 * -115 + 1 * -8263 && (A = Ai(i, t).slice(), F.__wbindgen_free(i, t * 1, 6 * -634 + -162 * -39 + -2513)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-2094 + -1982 * 1 + 4092);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = YA()[A / 4 + (9949 + 1 * -9949)], t = YA()[A / 4 + (-11156 + 3 * 3719)], e = lI(i, t).slice();
      return F.__wbindgen_free(i, t * (217 * 1 + -9777 * 1 + -3188 * -3), 1 * 9732 + 90 * -67 + -3698), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = YA()[A / (-8205 + 4982 * -2 + 18173) + (-853 + 853 * 1)], t = YA()[A / (1954 + 3 * 1499 + -6447) + 1], e = lI(i, t).slice();
      return F.__wbindgen_free(i, t * (5577 + 57 * -25 + -4148), 4), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(2671 * -3 + 1 * 6569 + 1460);
    }
  }
  get customer() {
    let i, t;
    try {
      const g = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(g, this.__wbg_ptr);
      var e = YA()[g / (699 + 2798 * -1 + 2103) + (-733 * -13 + 3305 * -2 + -2919)], A = YA()[g / (-113 * 25 + -6183 + 9012) + (-6231 + -76 * -82)];
      return i = e, t = A, Ai(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(1 * -7703 + -495 + 8214), F.__wbindgen_free(i, t, 1 * -4523 + 1231 * -1 + 5755);
    }
  }
}
async function fc(o, i) {
  if (typeof Response == "function" && o instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(o, i);
    } catch (e) {
      if (o.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await o.arrayBuffer();
    return await WebAssembly.instantiate(t, i);
  } else {
    const t = await WebAssembly.instantiate(o, i);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = o, e;
    } else return t;
  }
}
function pc() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = kg(t), A = typeof e == "string" ? e : void 0;
    var g = p0(A) ? 0 : Mt(A, F.__wbindgen_malloc, F.__wbindgen_realloc), n = HA;
    YA()[i / (2818 + 46 * -149 + -20 * -202) + (-15 * 460 + -618 * -11 + 103 * 1)] = n, YA()[i / (-4393 * -1 + -389 * -15 + -10224) + (640 * -2 + 1252 * -2 + -344 * -11)] = g;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    y0(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = Ai(i, t);
    return Ng(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ng(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return kg(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Ai(i, t));
  }, o;
}
function yc(o, i) {
  return F = o.exports, m0.__wbindgen_wasm_module = i, Dt = null, wt = null, yt = null, F;
}
async function m0(o) {
  if (F !== void 0) return F;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2lzX3ZhbGlkAPYBJWxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2ZlYXR1cmVzX2pzb24AgwEebGljZW5zZXZhbGlkYXRpb25yZXN1bHRfZXJyb3JzAJ4BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X3dhcm5pbmdzAJ8BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2N1c3RvbWVyALEBE2lzX21vYmlsZV9zdXBwb3J0ZWQABxFfX3diaW5kZ2VuX21hbGxvYwDXARJfX3diaW5kZ2VuX3JlYWxsb2MA8QEfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgCvAg9fX3diaW5kZ2VuX2ZyZWUAqAIJjAIBAEEBC5IBmAIcnQKpAqsCmAKdAuYBqgKVAosCwwFdXPQBHqIBzwGfAvIBZj+zAnb1AZYC7AFFpgL9AdkB/AH9AfsBgwKCAvwB/AH+Af8BgAJYhQFpDqkCbWqTAvkBpgKBAqwC+gFjkgLAAokCigKNApQC4gGUAt8BVLACwAKMAsACsQKUAo8BwALmAegBbuMBngIx2wGyAllvpAE67wEmzgHwAcEBW8AC0gGxApQCrQJktwKEAvMBxwEqmgKnApsCjgGaAUc1Fo4CnAKlAoUCoAKgAoYCoQKhAocCogKiAo4CkAKjAqMCkQKkAqQCe9QB9wGIAt0BmwGWAZgBrgJluAJ/uQLaAaUBUboCCqjWCLsCkUQCD38FfiMAQbAJayIGJAAgAiAEIAMgBUkiCBshDCAEIAIgCBshDiADIAUgAyAFSxshCQJAAkACQAJAIAMgBSAIGyINQSFPBEACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDUGBAk8EQEEAIQggBkEANgKACCAGQQA2AqgIIAZBgAhqIgIgDCAMIA0gCUEDbiISQQFqIgogCiANSxsiD0EDdGoiEBBDIAZB+AhqIAJBMBC+AhogDSAPayICIAogAiAKSRshESAGQYAJaiELIAYoAvgIIRMCQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyIHRQ0AIAYoAoAJIRQDQCADIAUgBEEBcSIEGyECIAdBA3QgFCALIAQbakEIaykDAFBFBEAgAiEIDAILIAIEQCAGQfgIakEEQSggBBtqIAJBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALCyAGQTBqIAtBGGopAwA3AwAgBkEoaiALQRBqKQMANwMAIAZBIGogC0EIaikDADcDACAGIAspAwA3AxggBiAGKAKkCTYCPCAGIAU2AjggBiADNgIUIAYgEzYCECAGQQJBASAIGzoAQCAPIBFqIgcgDUsNAUEAIQIgBkEANgKACCAGQQA2AqgIIAZBgAhqIgMgECAQIBFBA3RqEEMgBkH4CGogA0EwEL4CGiAGQYAJaiEIIAYoAvgIIRACQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyILBEAgBigCgAkhEQNAIAMgBSAEQQFxIg8bIQQgC0EDdCARIAggDxtqQQhrKQMAQgBSDQIgBARAIAZB+AhqQQRBKCAPG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgsNAAsLQQAhBAsgBkHoAGogCEEYaiILKQMANwMAIAZB4ABqIAhBEGoiDykDADcDACAGQdgAaiAIQQhqKQMANwMAIAYgCCkDADcDUCAGIAYoAqQJNgJ0IAYgBTYCcCAGIAM2AkwgBiAQNgJIIAZBAkEBIAQbOgB4IAZBADYCgAggBkEANgKoCCAGQYAIaiIDIAwgB0EDdGogDCANQQN0ahBDIAZB+AhqIANBMBC+AhogBigC+AghDQJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgxFDQAgBigCgAkhEANAIAMgBSAEQQFxIgcbIQQgDEEDdCAQIAggBxtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAHG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgwNAAsLIAZBoAFqIAspAwA3AwAgBkGYAWogDykDADcDACAGQZABaiAIQQhqKQMANwMAIAYgCCkDADcDiAEgBiAGKAKkCTYCrAEgBiAFNgKoASAGIAM2AoQBIAYgDTYCgAEgBkECQQEgAhs6ALABIAkgEk0NAiAJIAprIgIgCiACIApJGyEMQQAhAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA4gCkEDdGoiDRBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCEPAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiB0UNACAGKAKACSEQA0AgAyAFIARBAXEiCxshBCAHQQN0IBAgCCALG2pBCGspAwBQRQRAIAQhAgwCCyAEBEAgBkH4CGpBBEEoIAsbaiAEQQFrNgIAIAYoAqAJIQUgBigC/AghAwsgAyAFIAVBBEsiBBsiBw0ACwsgBkHYAWogCEEYaikDADcDACAGQdABaiAIQRBqKQMANwMAIAZByAFqIAhBCGopAwA3AwAgBiAIKQMANwPAASAGIAYoAqQJNgLkASAGIAU2AuABIAYgAzYCvAEgBiAPNgK4ASAGQQJBASACGzoA6AEgCiAMaiIPIAlLDQNBACECIAZBADYCgAggBkEANgKoCCAGQYAIaiIDIA0gDSAMQQN0ahBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCENAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiBwRAIAYoAoAJIQsDQCADIAUgBEEBcSIMGyEEIAdBA3QgCyAIIAwbakEIaykDAEIAUg0CIAQEQCAGQfgIakEEQSggDBtqIARBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALC0EAIQQLIAZBkAJqIAhBGGopAwA3AwAgBkGIAmogCEEQaikDADcDACAGQYACaiAIQQhqKQMANwMAIAYgCCkDADcD+AEgBiAGKAKkCTYCnAIgBiAFNgKYAiAGIAM2AvQBIAYgDTYC8AFBASELIAZBAkEBIAQbOgCgAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA9BA3RqIA4gCUEDdGoQQyAGQfgIaiADQTAQvgIaIAZBgAlqIQkgBigC+AghDgJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgdFDQAgBigCgAkhDANAIAMgBSAEQQFxIggbIQQgB0EDdCAMIAkgCBtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAIG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgcNAAsLIAZByAJqIAlBGGopAwA3AwAgBkHAAmogCUEQaikDADcDACAGQbgCaiAJQQhqKQMANwMAIAYgCSkDADcDsAIgBiAGKAKkCTYC1AIgBiAFNgLQAiAGIAM2AqwCIAYgDjYCqAIgBkECQQEgAhs6ANgCIAZB4AJqIgIgBkEQaiAGQYABahAhIAZBmANqIgMgBkG4AWogBkGoAmoQISAGQdADaiACIAZByABqEB8gBkGIBGogAyAGQfABahAfAkAgBi0AQCICQQFGDQACQAJAAkAgBi0A6AEiC0EBaw4CAwEACyACDQFBAiELDAILQQIhCyACDQELQQAhCwsgBkH4CGoiAiAGKAI4IgVBBUkEfyAGQRhqBSAGKAIUIQUgBigCGAsgBSAGKALgASIDQQVJBH8gBkHAAWoFIAYoArwBIQMgBigCwAELIAMQcCAGQcAEaiALIAIQQkEBIQUCQCAGLQCwASICQQFGDQACQAJAAkAgBi0A2AIiBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAKoASIDQQVJBH8gBkGIAWoFIAYoAoQBIQMgBigCiAELIAMgBigC0AIiBEEFSQR/IAZBsAJqBSAGKAKsAiEEIAYoArACCyAEEHAgBkH4BGogBSACEEIgBkGACGoiAyAGQeACakE4EL4CGiACIAZByABqQTgQvgIaIAZBkAdqIAMgAhApIAMgBkGYA2pBOBC+AhogAiAGQfABakE4EL4CGiAGQcgHaiADIAIQKUEBIQUCQCAGLQDAByICQQFGDQACQAJAAkAgBi0A+AciBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAK4ByIDQQRNBH8gBkGYB2oFIAYoApQHIQMgBigCmAcLIAMgBigC8AciBEEETQR/IAZB0AdqBSAGKALMByEEIAYoAtAHCyAEEHAgBkGwBWogBSACEEIgBkGQB2oQjwIgBkHIB2oQjwJBASEFAkAgBi0AgAQiAkEBRg0AAkACQAJAIAYtALgEIgVBAWsOAgMBAAsgAg0BQQIhBQwCC0ECIQUgAg0BC0EAIQULIAZB+AhqIgIgBigC+AMiA0EETQR/IAZB2ANqBSAGKALUAyEDIAYoAtgDCyADIAYoArAEIgRBBE0EfyAGQZAEagUgBigCjAQhBCAGKAKQBAsgBBBwIAZB6AVqIAUgAhBCIAZBgAhqIgMgBkHQA2pBOBC+AhogAiAGQYABakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQMDQCAFIBUgBSkDACIVQgGGIhd8IhY3AwAgFiAXVK0gFUI/iHwhFSAFQQhqIQUgA0EIayIDDQALIBVQDQBBBCEDAn8gBigCoAkiBEEETQRAIAZBgAlqIQcgBAwBCyAGQfgIakEEciECIAYoAoAJIQcgBCEDIAYoAvwICyEFIAMgBUYEQCAGQfgIaiICEKABIAYoAvwIIQUgBigCgAkhByACQQRyIQILIAcgBUEDdGogFTcDACACIAIoAgBBAWo2AgALIAZBkAdqIgQgBkH4CGoiAkEwEL4CGiAGQYAIaiIDIAkgBBBCIAIgBkEQakE4EL4CGiAEIAMgAhAlIAMgBkGIBGpBOBC+AhogAiAGQagCakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQdgGaiIDIAZB+AhqIgJBMBC+AhogBkGACGoiBCAJIAMQQiACIAZBuAFqQTgQvgIaIAZByAdqIAQgAhAlQQEhBQJAIAYtAMAHIgJBAUYNAAJAAkACQCAGLQD4ByIFQQFrDgIDAQALIAINAUECIQUMAgtBAiEFIAINAQtBACEFCyAGQYAIaiIJIAYoArgHIgNBBE0EfyAGQZgHagUgBigClAchAyAGKAKYBwsgAyAGKALwByIEQQRNBH8gBkHQB2oFIAYoAswHIQQgBigC0AcLIAQQcCAGQfgIaiIDIAUgCRBCIAZBkAdqIgQQjwIgBkHIB2oiBRCPAiAJIAMgBkGwBWoiCBAtIAYtALAIIQIgBSAJQTAQvgIaIAMgBUIDEE0gBCADQTAQvgIaIAZBoAZqIgcgAiAEEEIgAyAIQTgQvgIaIAkgAyAGQegFaiIJEC0gBi0AsAghAiAGQcgHaiAGQYAIakEwEL4CGiADIAVCAhBNIAZBkAdqIAZB+AhqQTAQvgIaIAZB2AZqIAIgBBBCIAMgCUE4EL4CGiAEIAMgBkHABGoQLSADIAdBOBC+AhogBi0AqAkiAkEBRgRAIAYtAMAHIQIgBigCuAciA0EETQR/IAZBmAdqBSAGKAKUByEDIAYoApgHCyEFIAZBADYCyAcgBkEANgLwByAGQcgHaiIEIAUgBSADQQN0ahBDIAZBgAhqIARBMBC+AhogBiACOgCwCAwLCwJAAkACQAJAIAYtAMAHIgNBAWsOAgABAgsgBkGACGogBkGgBmpBMBC+AhogBkG0CGogBkGsCWooAAA2AAAgBkECIAJrOgCwCCAGIAYoAKkJNgCxCAwOCyACRQ0BDAsLIAJFDQoLIAZBgAhqIgIgBkGgBmpBMBC+AhogBkHIB2oiBCACIAZBkAdqEBQgAiADIAQQQgwLCyAJIA1BAXYiCkkNAyAMIApBA3QiAmohECAGQfgIaiIDIAkgCmsiESANIAprIhJqQQFqIhMQfCAGQZAHaiADQTAQvgIaIAIgDmohFCAGQbgHaiEJIAYoArgHIgVBBE0EfyAGQZgHagUgBigClAchBSAGKAKYBwsgBSAQIBIgFCAREAYgBkGQB2pBBHIhCCAGQZgHaiEEIAYoApgHIQcDQCAEIQIgBigCuAciBSEDIAVBBUkiC0UEQCAGKAKUByEDIAchAgsCQCADRQ0AIANBA3QgAmpBCGspAwBCAFINACAJIQMgC0UEQCAGKAKUByEFIAghAwsgBUUNASADIAVBAWs2AgAMAQsLIAEgCkkNBCAEIQMgACAKQQN0aiIPIAEgCmsiCyAFQQVPBH8gBigClAchBSAHBSADCyAFEHggASANQX5xIgJJDQUgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAAgAkEDdGogASACayAFIAMQeCAJIQMgBigCuAciBUEFTwRAIAYoApQHIQUgCCEDCyAFBEAgA0EANgIACyAGQZAHaiATEEkgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAUgAyAMIAogDiAKEAYgBigCmAchBwNAIAQhAiAGKAK4ByIFIQMgBUEFSSINRQRAIAYoApQHIQMgByECCwJAIANFDQAgA0EDdCACakEIaykDAEIAUg0AIAkhAyANRQRAIAYoApQHIQUgCCEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBCEDIAAgASAFQQVPBH8gBigClAchBSAHBSADCyAFEHggBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIA8gCyAFIAMQeCAGQfgIaiICIBAgEiAMIAoQGyAGLQD4CCEAIAZByAdqIAZBgAlqIgFBMBC+AhogAiAUIBEgDiAKEBsgBi0A+AghAiAGQYAIaiABQTAQvgIaIABBAUYNBwJAAkACQCACQQFrDgIKAAELIAANAQwICyAADQcLIAkhAyAGKAK4ByIFQQVPBEAgBigClAchBSAIIQMLIAUEQCADQQA2AgALIAZBkAdqIBMQSSAEIQUgBigCuAciA0EFTwRAIAYoApgHIQUgBigClAchAwsgBSADIAYoAvAHIgBBBE0EfyAGQdAHagUgBigCzAchACAGKALQBwsgACAGKAKoCCICQQRNBH8gBkGICGoFIAYoAoQIIQIgBigCiAgLIAIQBiAGKAKYByEBA0AgBCEAIAYoArgHIgUhAyAFQQVJIgJFBEAgBigClAchAyABIQALAkAgA0UNACADQQN0IABqQQhrKQMAQgBSDQAgCSEDIAJFBEAgBigClAchBSAIIQMLIAVFDQEgAyAFQQFrNgIADAELCyAPIAsgBUEFTwR/IAYoApQHIQUgAQUgBAsgBRBMDAcLIAcgDUGI9MAAELgBAAsgCiAJQZj0wAAQuAEACyAPIAlBqPTAABC4AQALQYmYwgBBI0HY88AAEN4BAAsgCiABQejzwAAQuQEACyACIAFB+PPAABC5AQALIA8gCyAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIAUgBigCqAgiA0EETQR/IAZBiAhqBSAGKAKECCEDIAYoAogICyADEAYLIAZBgAhqEI8CIAZByAdqEI8CIAZBkAdqEI8CDAgLAkACQAJAAkAgBigCuAciBUEETQR/IAZBmAdqBSAGKAKUByEFIAYoApgHCyAFIAYoAqAJIgRBBE0EfyAGQYAJagUgBigC/AghBCAGKAKACQsgBBCoAUH/AXEOAgECAAsgBkGACGoiAiAGQaAGakEwEL4CGiACIAZBkAdqEHUgBkHIB2oiBCACQTAQvgIaIAJBAiADayAEEEIMBAsgBkECNgLACCAGQgQ3ArgIIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAZBuAhqEDMgBkGACGoiAyACQTAQvgIaIANBBHIhAiAGQYgIaiEJIAZBqAhqIQggBigCiAghBwNAIAkhBCAGKAKoCCIFIQMgBUEFSSIORQRAIAchBCAGKAKECCEDCwJAIANFDQAgA0EDdCAEakEIaykDAEIAUg0AIAghAyAORQRAIAYoAoQIIQUgAiEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBkG4CGogBkGACGoiAkEwEL4CGiAGQoCAgIAgNwLwCCAGQYyswgA2AuwIIAZBADYCgAggBkEANgKoCCACIAZB7AhqEDMgBkHIB2ogAkEwEL4CGiAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIQQgBkG4CGogBRDQASAGKALgCCIDQQRNBH8gBkHACGoFIAYoArwIIQMgBigCwAgLIAMgBUcNBCAGQeAIaiEJIAQgBUEDdBC+AhogBkG4CGpBBHIhAiAGQcAIaiEIIAYoAsAIIQcDQCAIIQQgBigC4AgiBSEDIAVBBUkiDkUEQCAHIQQgBigCvAghAwsgA0UNAiADQQN0IARqQQhrKQMAQgBSDQIgCSEDIA5FBEAgBigCvAghBSACIQMLIAVFDQAgAyAFQQFrNgIADAALAAsgBkGACGoiAiAGQaAGakEwEL4CGiAGQcgHaiIEIAZBkAdqIAIQGiACIAMgBBBCDAILIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CCyAGLQCwCCECIAZByAdqIgMgBkGACGpBMBC+AhogBkH4CGoiBCADQgIQTSAGQbgIaiIFIARBMBC+AhogAyACIAUQQiAGKAKgBSIDQQRNBH8gBkGABWoFIAYoAvwEIQMgBigCgAULIQUgBi0AqAUhCSAGQQA2AoAIIAZBADYCqAggBkGACGoiAiAFIAUgA0EDdGoQQyAGQfgIaiACQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQYAIaiIDIAZB+AhqIgJBMBC+AhogAiAJIAMQQiAGQaAGaiAGQcgHaiACECkgAiAGQZAHaiICQTgQvgIaIAYtAIgHIgVBAUYEQCADIAJBOBC+AhoMBAsCQAJAAkACQAJAIAYtAKgJIgNBAWsOAgABAgsgBigCgAciBEEETQR/IAZB4AZqBSAGKALcBiEEIAYoAuAGCyEDIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAMgAyAEQQN0ahBDIAZBgAhqIAJBMBC+AhogBiAFOgCwCAwDCyAFRQ0BDAULIAVFDQQLAkACQAJAAkAgBigCoAkiBEEETQR/IAZBgAlqBSAGKAL8CCEEIAYoAoAJCyAEIAYoAoAHIgJBBE0EfyAGQeAGagUgBigC3AYhAiAGKALgBgsgAhCoAUH/AXEOAgECAAsgBkGACGoiAiAGQZAHakEwEL4CGiAGQcgHaiIDIAZB2AZqIAIQGiACIAUgAxBCDAcLIAZBAjYCwAggBkIENwK4CCAGQQA2AsgHIAZBADYC8AcgBkHIB2oiAiAGQbgIahAzIAZBgAhqIgMgAkEwEL4CGiADQQRyIQIgBkGICGohCSAGQagIaiEIIAYoAogIIQcDQCAJIQQgBigCqAgiBSEDIAVBBUkiDkUEQCAHIQQgBigChAghAwsCQCADRQ0AIANBA3QgBGpBCGspAwBCAFINACAIIQMgDkUEQCAGKAKECCEFIAIhAwsgBUUNASADIAVBAWs2AgAMAQsLIAZBuAhqIAZBgAhqIgJBMBC+AhogBkKAgICAIDcC8AggBkGMrMIANgLsCCAGQQA2AoAIIAZBADYCqAggAiAGQewIahAzIAZByAdqIAJBMBC+AhogBigC8AciBUEETQR/IAZB0AdqBSAGKALMByEFIAYoAtAHCyEEIAZBuAhqIAUQ0AEgBigC4AgiA0EETQR/IAZBwAhqBSAGKAK8CCEDIAYoAsAICyADIAVHDQQgBkHgCGohCSAEIAVBA3QQvgIaIAZBuAhqQQRyIQIgBkHACGohCCAGKALACCEHA0AgCCEEIAYoAuAIIgUhAyAFQQVJIg5FBEAgByEEIAYoArwIIQMLIANFDQIgA0EDdCAEakEIaykDAEIAUg0CIAkhAyAORQRAIAYoArwIIQUgAiEDCyAFRQ0AIAMgBUEBazYCAAwACwALIAZBgAhqIgIgBkGQB2pBMBC+AhogAiAGQdgGahB1IAZByAdqIgQgAkEwEL4CGiACIAMgBBBCDAULIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CDAMLIAMgBUH88cAAELsBAAsgAyAFQfzxwAAQuwEACyAGQYAIaiICIAZBkAdqQTAQvgIaIAZByAdqIgQgAiAGQdgGahAUIAIgAyAEEEILIAZB+AhqIgIgBkGACGoiAyAGQfgEahAtIAZBkAdqIAJBOBC+AhogAiAGQdgGaiIEQTgQvgIaIAMgAiAGQaAGahAtIAQgA0E4EL4CGiAAIAEgBigC6AQiBUEETQR/IAZByARqBSAGKALEBCEFIAYoAsgECyAFEHggBkH4CGoiAiAGQdgGakE4EL4CGiAGQYAIaiACIApBBnQQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZBkAdqQTgQvgIaIAIgAyAKQQd0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqIgIQjwIgBkH4CGoiAyAGQaAGakE4EL4CGiACIAMgCkHAAWwQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZB+ARqQTgQvgIaIAIgAyAKQQh0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqEI8CIAZBwARqEI8CDAELIA1FDQAgDCANQQN0aiEKIAFBA3QhAiAJQQN0IQgDQCABIAdJDQICQCAMKQMAIhhQDQAgCSABIAdrSw0EIAlFDQAgACEFIA4hAyAJIQRCACEVA0AgBiADKQMAQgAgGBCwASAFIBUgBSkDAHwiFiAGKQMAfCIZNwMAIBYgGVatIAZBCGopAwAgFSAWVq18fCEVIAVBCGohBSADQQhqIQMgBEEBayIEDQALIBVQDQAgCCEFA0AgAiAFRg0GIAAgBWoiAyAVIAMpAwB8IhY3AwAgBUEIaiEFIBcgFSAWVq18IRUgFUIAUg0ACwsgB0EBaiEHIAJBCGshAiAAQQhqIQAgDEEIaiIMIApHDQALCyAGQbAJaiQADwsgByABQcjzwAAQuQEAC0GJmMIAQSNBgPPAABDeAQALQZDzwABBJUG488AAENEBAAuxtQEDIH8IfgF8IwBBoANrIgUkACAFIAE2AsgBIAUgATYCxAEgBSAANgLAASAFQSBqIAVBwAFqIgAQxAEgBSgCICEbIAUoAiQhHCAFIAM2AsgBIAUgAzYCxAEgBSACNgLAASAFQRhqIAAQxAEgBSgCGCEdIAVBEGogBSgCHCIVEOABIAUoAhQhIyAFKAIQIB0gFRC+AiEZIAVB0AFqQgA3AgAgBUGAAToA2AEgBUKAgICAEDcCyAEgBSAcNgLEASAFIBs2AsABIAVB4ABqIAAQCQJAAkACfwJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAIAUtAGBBBkcEQCAFQfACaiAFQfAAaikDADcDACAFQegCaiAFQegAaikDADcDACAFIAUpA2A3A+ACAkAgBSgCyAEiASAFKALEASIDSQRAIAUoAsABIQIDQCABIAJqLQAAQQlrIgBBF0tBASAAdEGTgIAEcUVyDQIgAyABQQFqIgFHDQALIAUgAzYCyAELIAVB0AJqIAVB8AJqKQMANwMAIAUgBS8B4gI7AbACIAUgBSkD6AI3A8gCIAUtAOECIQAgBS0A4AIhAiAFKALkAiEBIAUoAtABBEAgBSgCzAEQIgsgAkEGRg0EIAVBQGsgBUHQAmopAwA3AwAgBSABNgI0IAUgBS8BsAI7ATIgBSAFKQPIAjcDOCAFIAA6ADEgBSACOgAwIAVBMGoiEyEMIwBBkAdrIgQkACAEQYAGaiIAQZzWwABBgAEQSyAEQeAGaiIIQZzXwABBBBBLIARBsAZqIABBMBC+AhogBCgCsAYhDQJAAkACQAJAAkACfyAEKALYBiIBQQVPBEAgBCgCtAYiAkUNAiAEKAK4BgwBCyABRQ0BIAEhAiAEQbgGagshACACQQZ0IAJBA3QgAGpBCGspAwB5p2tBgCBNDQBBCyEADAELIARB6AZqIgYhAiAEQYgHaigCACIHIQAgB0EFTwRAIAQoAugGIQIgBEHkBmooAgAhAAsgAARAIABBA3QhA0EBIQADQCAAQQFxRQRAQQ0hAAwDCyACKQMAICV8ISVBACEAIAJBCGohAiADQQhrIgMNAAsLIAYhAiAHIgNBBU8EQCAEQeQGaigCACEDIAQoAugGIQILAn8CQCABQQVPBEAgAiADIAQoArgGIAQoArQGEKgBQf8BcUECTw0BQQghAAwDC0EIIQAgAiADIARBuAZqIgIgARCoAUH/AXFBAkkNAiACDAELIAQoArQGIQEgBCgCuAYLQQghACABRQ0ALQAAQQFxRQ0AQQkhACAHQQVPBH8gBCgC6AYhBiAEQeQGaigCAAUgBwtFDQAgBi0AAEEBcUUNACAlQgJUBEBBDCEADAELICVCgICAgCBUDQFBDSEACyAEQbAGaiIBEI8CIAgQjwJBuLHCAC0AABpBPBAKIgJFDQEgAiAlNwIEIAIgADYCACACQQxqIARBmAJqQTAQvgIaIARCBDcCuAYgBEGY5cAANgK0BiAEIAI2ArAGIAFBoNfAABAuQbDXwAAQWiECDAILIAQoArQGIQIgBCkDuAYhJCAEQZgCaiIAIARBwAZqQdAAEL4CGiAEQcgBaiIBIABB0AAQvgIaIARB+ABqIgAgAUHQABC+AhogBCAkNwMgIARBKGogAEHQABC+AhogBCACNgIcIAQgDTYCGAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDEHA18AAQRIQcyIBBEAgAS0AAEEDRiIARQ0HIAEoAgRBACAAGyEKIARBsAZqIAFBDGooAgAiC0ECdiALQQNxQQBHakEDbBDMASAEKAK4BiEQIAQoArAGIRYgC0EHcSIAIQMgAA4GAQIDBAUCBgtBuLHCAC0AABpBARAKIgBFDQ4gAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQaTYwAAQLiECDA0LQQghAwwEC0IBISUgC0UNCiAKIAtBAWsiAGotAAAiAUE9Rg0KIAFBkNrAAGotAABB/wFHDQogAa1CCIYgAK1CIIaEISUMCgtBCiEDDAILQQshAwwBC0EMIQMLIAtBA3YgAEEAR2ohEUEAIQEgCyADayIAQQAgACALTRsiDUEgSQRAQQAhAwwGCyANQSBrIQJBACEDQQAhCAJAA0AgCEFgRg0DIAhBIGoiASALSw0EIANBGmoiACAQSw0FAkACQCAIIApqIg4tAAAiB0GQ2sAAajEAACIpQv8BUQ0AIA5BAWotAAAiB0GQ2sAAajEAACIoQv8BUQRAIAhBAXIhCAwBCyAOQQJqLQAAIgdBkNrAAGoxAAAiJUL/AVEEQCAIQQJyIQgMAQsgDkEDai0AACIHQZDawABqMQAAIipC/wFRBEAgCEEDciEIDAELIA5BBGotAAAiB0GQ2sAAajEAACImQv8BUQRAIAhBBHIhCAwBCyAOQQVqLQAAIgdBkNrAAGoxAAAiJEL/AVEEQCAIQQVyIQgMAQsgDkEGai0AACIHQZDawABqMQAAIitC/wFRBEAgCEEGciEIDAELIA5BB2otAAAiB0GQ2sAAajEAACInQv8BUg0BIAhBB3IhCAsgB61CCIYgCK1CIIaEISUMCQsgAyAWaiIAIChCNIYgKUI6hoQiKCAlQi6GhCIlICpCKIaEICZCIoaEIiYgJEIchoQiJCArQhaGhCAnQhCGhCInQoD+A4NCKIYgJ0KAgPwHg0IYhiAnQoCAgPgPg0IIhoSEICRCCIhCgICA+A+DICZCGIhCgID8B4OEICVCKIhCgP4DgyAoQjiIhISENwAAQQghByAOQQhqLQAAIgZBkNrAAGoxAAAiKUL/AVENBkEJIQcgDkEJai0AACIGQZDawABqMQAAIihC/wFRDQZBCiEHIA5BCmotAAAiBkGQ2sAAajEAACIlQv8BUQ0GQQshByAOQQtqLQAAIgZBkNrAAGoxAAAiKkL/AVENBkEMIQcgDkEMai0AACIGQZDawABqMQAAIiZC/wFRDQZBDSEHIA5BDWotAAAiBkGQ2sAAajEAACIkQv8BUQ0GQQ4hByAOQQ5qLQAAIgZBkNrAAGoxAAAiK0L/AVENBkEPIQcgDkEPai0AACIGQZDawABqMQAAIidC/wFRDQYgAEEGaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEQIQcCQCAOQRBqLQAAIgZBkNrAAGoxAAAiKUL/AVENAEERIQcgDkERai0AACIGQZDawABqMQAAIihC/wFRDQBBEiEHIA5BEmotAAAiBkGQ2sAAajEAACIlQv8BUQ0AQRMhByAOQRNqLQAAIgZBkNrAAGoxAAAiKkL/AVENAEEUIQcgDkEUai0AACIGQZDawABqMQAAIiZC/wFRDQBBFSEHIA5BFWotAAAiBkGQ2sAAajEAACIkQv8BUQ0AQRYhByAOQRZqLQAAIgZBkNrAAGoxAAAiK0L/AVENAEEXIQcgDkEXai0AACIGQZDawABqMQAAIidC/wFRDQAgAEEMaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEYIQcgDkEYai0AACIGQZDawABqMQAAIilC/wFRDQJBGSEHIA5BGWotAAAiBkGQ2sAAajEAACIoQv8BUQ0CQRohByAOQRpqLQAAIgZBkNrAAGoxAAAiJUL/AVENAkEbIQcgDkEbai0AACIGQZDawABqMQAAIipC/wFRDQJBHCEHIA5BHGotAAAiBkGQ2sAAajEAACImQv8BUQ0CQR0hByAOQR1qLQAAIgZBkNrAAGoxAAAiJEL/AVENAkEeIQcgDkEeai0AACIGQZDawABqMQAAIitC/wFRDQJBHyEHIA5BH2otAAAiBkGQ2sAAajEAACInQv8BUQ0CIABBEmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEEayERIANBGGohAyABIQggASACSw0IDAELCyAGrUIIhiAHIAhyrUIghoQhJQwHCyAGrUIIhiAHIAhyrUIghoQhJQwGC0G4scIALQAAGkEBEAoiAEUNByAAQQE6AAAgBEIENwK4BiAEQbDlwAA2ArQGIAQgADYCsAYgBEGwBmpBpNjAABAuIQIMBgtBYEEAQeSOwAAQugEACyABIAtB5I7AABC4AQALIAAgEEH0jsAAELgBAAsgBq1CCIYgByAIcq1CIIaEISUMAQsCQAJAIA1BCEkNACABIA1BCGsiAE8NAAJAAkACQAJAAkADQCABQQhqIQYgAUF4Rg0CIAYgC0sNAyADQQhqIQIgA0F3Sw0EIAIgEEsNBSABIApqIgctAAAiAkGQ2sAAajEAACIpQv8BUQ0BIAdBAWotAAAiAkGQ2sAAajEAACIoQv8BUQRAIAFBAXIhAQwCCyAHQQJqLQAAIgJBkNrAAGoxAAAiJUL/AVEEQCABQQJyIQEMAgsgB0EDai0AACICQZDawABqMQAAIipC/wFRBEAgAUEDciEBDAILIAdBBGotAAAiAkGQ2sAAajEAACImQv8BUQRAIAFBBHIhAQwCCyAHQQVqLQAAIgJBkNrAAGoxAAAiJEL/AVEEQCABQQVyIQEMAgsgB0EGai0AACICQZDawABqMQAAIitC/wFRBEAgAUEGciEBDAILIAdBB2otAAAiAkGQ2sAAajEAACInQv8BUgRAIAMgFmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEBayERIANBBmohAyAAIAYiAU0NCAwBCwsgAUEHciEBCyABrUIghiACrUIIhoQhJQwGC0F4IAZBhI/AABC6AQALIAYgC0GEj8AAELgBAAsgAyACQZSPwAAQugEACyACIBBBlI/AABC4AQALIAEhBgsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBFBAkkEQCADIQcMAQsgEUEBayEIQQAgBmshEQNAIAYgC0sNBSADQQZqIQcgA0F5Sw0GIAcgEEsNByAGIAtGDQggBiAKaiIBLQAAIgJBkNrAAGoxAAAiKUL/AVENFSALIBFqIgBBAkkNCSABQQFqLQAAIgJBkNrAAGoxAAAiKkL/AVENAyAAQQJNDQogAUECai0AACICQZDawABqMQAAIitC/wFRDQsgAEEDTQ0MIAFBA2otAAAiAkGQ2sAAajEAACInQv8BUQ0NIABBBE0NDiABQQRqLQAAIgJBkNrAAGoxAAAiKEL/AVENDyAAQQVNDRAgAUEFai0AACICQZDawABqMQAAIiVC/wFRDREgAEEGTQ0SIAFBBmotAAAiAkGQ2sAAajEAACImQv8BUQ0TIABBB00NFCABQQdqLQAAIgJBkNrAAGoxAAAiJEL/AVENAiADIBZqIgAgKkI0hiApQjqGhCArQi6GhCAnQiiGhCAoQiKGhCAlQhyGhCAmQhaGhCImQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAmQiiIQoD+A4MgJkI4iISEPgAAIABBBGogJiAkQhCGhCIkQoCA/AeDQhiGICRCgICA+A+DQgiGhEIgiD0AACARQQhrIREgBkEIaiEGIAchAyAIQQFrIggNAAsLIAYgC0sNAiAGIAtGBEBCACEmQQAhAEEAIRFBACECDBYLIAogC2ohCyAGIApqIQNBACERQgAhJkEAIQFBACENQQAhCANAQQAhAgNAIAIgCGohDiACIANqIgotAAAiAEE9RwRAAkAgAkUEQCAAQZDawABqMQAAIiRC/wFRDQEgDkEBaiEIICQgEUEBaiIRQTpsQT5xrYYgJoQhJkEAIQIgACENIApBAWoiAyALRw0EDBoLIAEgBmqtQiCGQoD6AIQhJQwaCyAArUIIhiAGIA5qrUIghoQhJQwZCyABIA4gAhshASAOQQJxBEAgAyACQQFqIgJqIAtGDRcMAQsLCyABIAZqrUIghkKA+gCEISUMFgsgBkEHaiEGDBILIAZBAWohBgwRCyAGIAtBiIrAABC5AQALIAYgC0Gkj8AAELkBAAsgAyAHQbSPwAAQugEACyAHIBBBtI/AABC4AQALQQBBAEHEj8AAELcBAAtBAUEBQdSPwAAQtwEAC0ECQQJB5I/AABC3AQALIAZBAmohBgwJC0EDQQNB9I/AABC3AQALIAZBA2ohBgwHC0EEQQRBhJDAABC3AQALIAZBBGohBgwFC0EFQQVBlJDAABC3AQALIAZBBWohBgwDC0EGQQZBpJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANBA3EiCkUNACACIQEDQCAIIAEsAABBv39KaiEIIAFBAWohASAKQQFrIgoNAAsLIAcgCGohBwsCQAJAIAAoAgBFBEBBASEBIAAoAhQiBiAAKAIYIgAgCSACIAMQ6QENAQwCCyAHIAAoAgQiCE8EQEEBIQEgACgCFCIGIAAoAhgiACAJIAIgAxDpAQ0BDAILIAZBCHEEQCAAKAIQIQsgAEEwNgIQIAAtACAhDEEBIQEgAEEBOgAgIAAoAhQiBiAAKAIYIgogCSACIAMQ6QENASAIIAdrQQFqIQECQANAIAFBAWsiAUUNASAGQTAgCigCEBEBAEUNAAtBAQ8LQQEhASAGIAQgBSAKKAIMEQAADQEgACAMOgAgIAAgCzYCEEEAIQEMAQsgCCAHayEGAkACQAJAIAAtACAiAUEBaw4DAAEAAgsgBiEBQQAhBgwBCyAGQQF2IQEgBkEBakEBdiEGCyABQQFqIQEgAEEYaigCACEHIAAoAhAhCCAAKAIUIQACQANAIAFBAWsiAUUNASAAIAggBygCEBEBAEUNAAtBAQ8LQQEhASAAIAcgCSACIAMQ6QENACAAIAQgBSAHKAIMEQAADQBBACEBA0AgASAGRgRAQQAPCyABQQFqIQEgACAIIAcoAhARAQBFDQALIAFBAWsgBkkPCyABDwsgBiAEIAUgACgCDBEAAAuvBAELfyAAKAIEIQogACgCACELIAAoAgghDAJAA0AgBA0BAkACQCACIANJDQADQCABIANqIQUCQAJAAkACQCACIANrIgZBCE8EQCAFQQNqQXxxIgAgBUYNASAAIAVrIgRFDQFBACEAA0AgACAFai0AAEEKRg0FIAQgAEEBaiIARw0ACyAEIAZBCGsiB0sNAwwCCyACIANGBEAgAiEDDAYLQQAhAANAIAAgBWotAABBCkYNBCAGIABBAWoiAEcNAAsgAiEDDAULIAZBCGshB0EAIQQLA0AgBCAFaiIAQQRqKAIAIglBipSo0ABzQYGChAhrIAlBf3NxIAAoAgAiAEGKlKjQAHNBgYKECGsgAEF/c3FyQYCBgoR4cQ0BIARBCGoiBCAHTQ0ACwsgBCAGRgRAIAIhAwwDCyAEIAVqIQcgAiAEayADayEFQQAhAAJAA0AgACAHai0AAEEKRg0BIAUgAEEBaiIARw0ACyACIQMMAwsgACAEaiEACyAAIANqIgBBAWohAwJAIAAgAk8NACAAIAFqLQAAQQpHDQBBACEEIAMhByADIQAMAwsgAiADTw0ACwtBASEEIAghByAIIAIiAEYNAgsCQCAMLQAABEAgC0GoqMAAQQQgCigCDBEAAA0BCyABIAhqIQUgACAIayEGQQAhCSAMIAAgCEcEfyAFIAZqQQFrLQAAQQpGBSAJCzoAACAHIQggCyAFIAYgCigCDBEAAEUNAQsLQQEhDQsgDQuQBQEEfyAAIAFqIQICQAJAAkAgACgCBCIDQQFxDQAgA0EDcUUNASAAKAIAIgMgAWohASAAIANrIgBB/LDCACgCAEYEQCACKAIEQQNxQQNHDQFB9LDCACABNgIAIAIgAigCBEF+cTYCBCAAIAFBAXI2AgQgAiABNgIADwsgA0GAAk8EQCAAEF8MAQsgAEEMaigCACIEIABBCGooAgAiBUcEQCAFIAQ2AgwgBCAFNgIIDAELQeywwgBB7LDCACgCAEF+IANBA3Z3cTYCAAsCQAJAIAIoAgQiA0ECcUUEQCACQYCxwgAoAgBGDQIgAkH8sMIAKAIARg0EIANBeHEiBCABaiEBAkAgBEGAAk8EQCACEF8MAQsgAkEMaigCACIEIAJBCGooAgAiAkcEQCACIAQ2AgwgBCACNgIIDAELQeywwgBB7LDCACgCAEF+IANBA3Z3cTYCAAsgACABQQFyNgIEIAAgAWogATYCACAAQfywwgAoAgBHDQFB9LDCACABNgIADwsgAiADQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALIAFBgAJPBEAgACABEGAPCyABQXhxQeSuwgBqIQICf0HssMIAKAIAIgNBASABQQN2dCIBcUUEQEHssMIAIAEgA3I2AgAgAgwBCyACKAIICyEBIAIgADYCCCABIAA2AgwgACACNgIMIAAgATYCCA8LQYCxwgAgADYCAEH4sMIAQfiwwgAoAgAgAWoiATYCACAAIAFBAXI2AgQgAEH8sMIAKAIARw0AQfSwwgBBADYCAEH8sMIAQQA2AgALDwtB/LDCACAANgIAQfSwwgBB9LDCACgCACABaiIBNgIAIAAgAUEBcjYCBCAAIAFqIAE2AgALtwQCC38BfiMAQRBrIgkkACABKAIIIQcgASgCACEFAkACQAJAAkAgCUEIaiAAIAEoAgQiAQR/IAdFDQEgASAHbiICIAEgAiAHbEdqBUEACxCTASAJKAIIIgJBgYCAgHhHBEAgAkUNAgALIABBKGohCkEEIQYCfyAAKAIoIgRBBE0EQCAAQQhqIQMgCiEIIAQMAQsgAEEEaiEIIAAoAgghAyAEIQYgACgCBAshAiACIAZPDQIgAyACQQN0aiEDA0AgAUUEQCAIIAI2AgAMBQsCfiABIAcgASAHSRsiBEEBTQRAIARBAUYEQCAFNQIADAILQQBBAEHo7sAAELcBAAsgBSkCAAshDSABIARrIQEgBSAEQQJ0aiEFIAMgDTcDACADQQhqIQMgBiACQQFqIgJHDQALIAYhAgwCC0Hg8cAAQRlB0PHAABDeAQALQezwwABBEUGA8cAAEN4BAAsgCCACNgIAIAFFDQAgAEEEaiEEIABBCGohDANAAn4gASAHIAEgB0kbIgtBAU0EQCALQQFGBEAgBTUCAAwCC0EAQQBB6O7AABC3AQALIAUpAgALIQ0CfyAKKAIAIgZBBUkEQCAGIQMgDCEIQQQhBiAKDAELIAQoAgAhAyAMKAIAIQggBAshAiABIAtrIQEgAyAGRgRAIAAQoAEgACgCBCEDIAAoAgghCCAEIQILIAtBAnQgBWohBSAIIANBA3RqIA03AwAgAiACKAIAQQFqNgIAIAENAAsLIAlBEGokAAv4BQIHfwF+IwBBMGsiBCQAIAEoAgAhBwJAAkACQAJAAkAgASgCCCIFIAEoAgQiA0kEQCABIAVBAWoiBjYCCCAFIAdqLQAAIghBMEcNAiADIAZLBEAgBiAHai0AAEEwa0H/AXFBCkkNAgsgACABIAJCABB0DAULIARBGGogByADIAUQtgFBuLHCAC0AABogBCgCHCECIAQoAhghA0EUEAoiAUUNAiABIAM2AgwgAUEFNgIAIAAgATYCCCAAQgM3AwAgASACNgIQDAQLIARBCGogByADIAMgBUECaiIBIAEgA0sbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQEgASADNgIMIAFBDTYCACAAIAE2AgggAEIDNwMAIAEgAjYCEAwDCyAIQTFrQf8BcUEJTwRAIARBEGogByADIAYQtgFBuLHCAC0AABogBCgCFCECIAQoAhAhA0EUEAoiAUUNASABIAM2AgwgAUENNgIAIAAgATYCCCAAQgM3AwAgASACNgIQDAMLIAhBMGutQv8BgyEKIAMgBk0NAQNAIAYgB2otAABBMGsiBUH/AXEiCEEKTw0CIAhBBUsgCkKZs+bMmbPmzBlSciAKQpmz5syZs+bMGVpxRQRAIAEgBkEBaiIGNgIIIApCCn4gBa1C/wGDfCEKIAMgBkcNAQwDCwsgBEEgaiEHIAIhA0EAIQICQAJAAkAgASgCBCIGIAEoAggiBU0NACAFQQFqIQggBiAFayEGIAEoAgAgBWohCQNAIAIgCWotAAAiBUEwa0H/AXFBCk8EQCAFQS5GDQMgBUHFAEcgBUHlAEdxDQIgByABIAMgCiACEDcMBAsgASACIAhqNgIIIAYgAkEBaiICRw0ACyAGIQILIAcgASADIAogAhBTDAELIAcgASADIAogAhA9CyAAAn4gBCgCIEUEQCAAIAQrAyg5AwhCAAwBCyAAIAQoAiQ2AghCAws3AwAMAgsACyAAIAEgAiAKEHQLIARBMGokAAupBQEBfyMAQRBrIgIkAAJ/AkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIAQQFrDhMBAgMEBQYHCAkKCwwNDg8QERITAAsgASgCFEGEj8EAQRQgAUEYaigCACgCDBEAAAwTCyABKAIUQZiPwQBBCiABQRhqKAIAKAIMEQAADBILIAEoAhRBoo/BAEEMIAFBGGooAgAoAgwRAAAMEQsgASgCFEGuj8EAQQ4gAUEYaigCACgCDBEAAAwQCyABKAIUQbyPwQBBDiABQRhqKAIAKAIMEQAADA8LIAEoAhRByo/BAEEPIAFBGGooAgAoAgwRAAAMDgsgASgCFEHZj8EAQQwgAUEYaigCACgCDBEAAAwNCyABKAIUQeWPwQBBDCABQRhqKAIAKAIMEQAADAwLIAEoAhRB8Y/BAEEOIAFBGGooAgAoAgwRAAAMCwsgASgCFEH/j8EAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQY6QwQBBEiABQRhqKAIAKAIMEQAADAkLIAEoAhRBoJDBAEEPIAFBGGooAgAoAgwRAAAMCAsgASgCFEGvkMEAQRYgAUEYaigCACgCDBEAAAwHCyABKAIUQcWQwQBBFiABQRhqKAIAKAIMEQAADAYLIAIgAEEEajYCCCABQduQwQBBBSACQQhqQeCQwQAQfQwFCyACIABBBGo2AgwgAUHwkMEAQQUgAkEMakH4kMEAEH0MBAsgASgCFEGIkcEAQQggAUEYaigCACgCDBEAAAwDCyABKAIUQZCRwQBBDCABQRhqKAIAKAIMEQAADAILIAEoAhRBnJHBAEENIAFBGGooAgAoAgwRAAAMAQsgASgCFEGpkcEAQRAgAUEYaigCACgCDBEAAAsgAkEQaiQAC+sDAgl/AX4jAEEQayIGJAACQAJAAkAgBgJ+AkACQAJAAkAgASgCAEUEQCABKAIIIgMtAAAiAkEoTw0BIAJFDQggAy0AASICQShuIQMgAkH3AEsNBCABQgE3AgAgAkEobq1CIIZCAYQhCwwGCyABKAIIIQIgASgCBCIDRQ0CIAItAAAiBSADayIEQQAgBCAFTRshCCACIANqQQFqIQkgBUEoSSEKQQAhBEEAIQIDQCAKRQ0CIAIgCEYEQCADIAVPDQdCAgwGC0IBIAJBBEkgAiAJai0AACIHQQ9NckUNBRogB0H/AHEgBEEHdHIhBCACQQFqIQIgB8BBAEgNAAtCBSADIAIgA2oiAksNBBogASACNgIEIAFBATYCACAErUIghkIBhCELDAULIAJBJ0GgpMAAELgBAAsgBUEnQaCkwAAQuAEACyACLQAAIgNBKE8NAyADBEAgAi0AASICQShuIQMgAkH3AEsNASABQoGAgIAQNwIAIAJBKHCtQiCGQgGEIQsMAwtBAEEAQYyjwAAQtwEACyADrUIghgs3AwhBnKPAAEENIAZBCGpBiKLAAEGso8AAEK4BAAsgACALPgIAIAAgC0IgiD4CBCAGQRBqJAAPCyADQSdBoKTAABC4AQALQQBBAEH8osAAELcBAAvVBQEHfyMAQRBrIgckAEEBIQogASABKAIIIgZBAWoiBTYCCAJAIAUgASgCBCIITw0AAkACQCABKAIAIAVqLQAAQStrDgMBAgACC0EAIQoLIAEgBkECaiIFNgIICyABKAIAIQkCQAJAAkAgACABIAIgAwJ/AkACQCAFIAhJBEAgASAFQQFqIgY2AgggBSAJai0AAEEwa0H/AXEiBUEKTw0BAkAgBiAITw0AA0AgBiAJai0AAEEwa0H/AXEiC0EKTw0BIAEgBkEBaiIGNgIIIAVBzJmz5gBHIAtBB0tyIAVBy5mz5gBKcQ0GIAVBCmwgC2ohBSAGIAhHDQALCyAKDQIgBCAFayIAQR91QYCAgIB4cyAAIAAgBEggBUEASnMbDAMLIAdBCGogCSAIIAUQtgFBuLHCAC0AABogBygCDCECIAcoAgghBEEUEAoiAUUNBCABIAQ2AgwgAUEFNgIAIAAgATYCBCAAQQE2AgAgASACNgIQDAULIAcgCSAIIAYQtgFBuLHCAC0AABogBygCBCECIAcoAgAhBEEUEAoiAUUNAyABIAQ2AgwgAUENNgIAIAAgATYCBCAAQQE2AgAgASACNgIQDAQLIAQgBWoiAEEfdUGAgICAeHMgACAFQQBIIAAgBEhzGwsQUwwCCyMAQRBrIgQkACAAAn8CQEEAIAogA1AbRQRAIAEoAggiBSABKAIEIgZPDQEgASgCACEIA0AgBSAIai0AAEEwa0H/AXFBCk8NAiABIAVBAWoiBTYCCCAFIAZHDQALDAELIARBCGogASgCACABKAIEIAEoAggQtgFBuLHCAC0AABogBCgCDCECIAQoAgghBUEUEAoiAQRAIAEgBTYCDCABQQ42AgAgACABNgIEIAEgAjYCEEEBDAILAAsgAEQAAAAAAAAAAEQAAAAAAAAAgCACGzkDCEEACzYCACAEQRBqJAAMAQsACyAHQRBqJAAL8AMBDX8jAEEwayICJAACQAJAAkAgASgCCCIERQRAQQghCAwBCyAEQdWq1SpLDQEgBEEYbCIHQQBIDQEgASgCACEKQQghCCAHBEBBuLHCAC0AABogBxAKIghFDQMLIARBGGwhCyACQRRqIQkgAkEQaiEFQQAhASACQRZqIQwgAkEcaiENIAQhBwNAIAEgC0YNAUEAIQYCQAJAAkACQAJAAkAgASAKaiIDLQAAQQFrDgUAAQIDBAULQQEhBiADQQFqLQAAIQ4MBAsgCUEIaiADQRBqKQEANwEAIAkgA0EIaikBADcBAEECIQYMAwsgAkEkaiADQQRqKAIAIANBDGooAgAQ1gEgBUEIaiACQSxqKAIANgEAIAUgAikCJDcBAEEDIQYMAgtBBCEGIAJBJGogA0EEahA4IAVBCGogAkEsaigCADYBACAFIAIpAiQ3AQAMAQsgAkEkaiADQQRqEOcBIAVBCGogAkEsaigCADYBACAFIAIpAiQ3AQBBBSEGCyABIAhqIgMgBjoAACADQQFqIA46AAAgA0ECaiACKQEONwEAIANBCmogDCkBADcBACADQRBqIA0pAQA3AQAgAUEYaiEBIAdBAWsiBw0ACwsgACAENgIIIAAgBDYCBCAAIAg2AgAgAkEwaiQADwsQ6gEACwALlgQBCX8jAEEQayIEJAAgAEGZg8EAQQEQ5AEgASACaiELIAEhCQNAIAghA0EAIQUCQAJAAkADQCALIAUgCWoiCEYEQCACIANHBEAgACABIANqIAMEfyACIANNDQQgASADaiwAAEG/f0wNBCACIANrBSACCxDkAQsgAEGZg8EAQQEQ5AEgBEEQaiQADwsgBUEBaiEFIAgtAAAiCkHE9MEAai0AACIGRQ0ACyADIAVqIghBAWsiByADTQ0CAkACQCADRQ0AIAIgA00EQCACIANGDQEMAgsgASADaiwAAEFASA0BCyACIAdNBEAgAiAHRw0BDAMLIAEgB2osAABBv39KDQILIAEgAiADIAdBzOzAABCZAgALIAEgAiADIAJBvOzAABCZAgALIAAgASADaiAHIANrEOQBCyAFIAlqIQkgAAJ/AkACQAJAAkACQCAGQe0ATQRAAkACQAJAIAZB4gBrDgUCBAQEAQALQenswAAgBkEiRg0IGiAGQdwARw0DQevswAAMCAtB7+zAAAwHC0Ht7MAADAYLIAZB7gBrDggEAAAAAwACAQALQZzrwABBKEGs7MAAEN4BAAsgBEHc6sGBAzYACiAEIApBD3FBtPTBAGotAAA6AA8gBCAKQQR2QbT0wQBqLQAAOgAOIAAgBEEKakEGEOQBDAQLQfXswAAMAgtB8+zAAAwBC0Hx7MAAC0ECEOQBDAALAAuQBAEDfyMAQfAAayICJAAgAiAAKAIAIgM2AgBBwAAhBEEBIQACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAMvAAAgA0ECai0AAEEQdHIiA0H/AXFBAWsOFgABAgMEBQYHCAkKCwwNDg8QERIVExQWC0ECIQAMFQtBAyEADBQLQQQhAAwTC0EFIQAMEgtBBiEADBELQQkhAAwQC0EKIQAMDwtBDCEADA4LQTAhAAwNC0ExIQAMDAtBEiEADAsLQRMhAAwKC0EUIQAMCQtBFSEADAgLQRYhAAwHC0EXIQAMBgtBGCEADAULQRohAAwEC0EeIQAMAwtBgAEhBAwBC0HAASEECyADQQt2QSBxIANBCHZyIARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = pc();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await fc(await o, i);
  return yc(t, e);
}
function Et(o, i, t, e, A) {
  return CA(A - -564, e);
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return CA(r - 520, C);
  }
  function e(a, r, B, C, x) {
    return CA(a - 933, B);
  }
  function A(a, r, B, C, x) {
    return CA(x - -726, r);
  }
  const g = o();
  function n(a, r, B, C, x) {
    return CA(C - 724, B);
  }
  function I(a, r, B, C, x) {
    return CA(x - -387, r);
  }
  for (; ; )
    try {
      if (-parseInt(I(86, "s]8r", 83, 79, 75)) / 1 * (-parseInt(A(-258, "%FZ@", -293, -259, -270)) / 2) + -parseInt(t(990, 984, 974, "%eQr", 986)) / 3 * (parseInt(I(39, "x*k2", 29, 48, 47)) / 4) + -parseInt(e(1403, 1393, "%FZ@", 1391, 1399)) / 5 * (parseInt(I(66, "$wtY", 69, 20, 44)) / 6) + -parseInt(e(1361, 1358, "kuDy", 1356, 1336)) / 7 + parseInt(I(89, "tlno", 88, 48, 68)) / 8 + -parseInt(A(-293, "IAwt", -320, -289, -297)) / 9 * (-parseInt(n(1171, 1142, "$Eo)", 1154, 1162)) / 10) + parseInt(t(959, 985, 959, "%8KC", 996)) / 11 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(ei, -186362 + -90 * -3407);
function Oi(o, i, t, e, A) {
  return CA(e - -395, t);
}
function CA(o, i) {
  const t = ei();
  return CA = function(e, A) {
    e = e - 424;
    let g = t[e];
    if (CA.wOrMrh === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      CA.XZEoSF = B, o = arguments, CA.wOrMrh = !0;
    }
    const I = t[-3734 + 9 * -631 + 9413], a = e + I, r = o[a];
    return r ? g = r : (CA.OiiFeJ === void 0 && (CA.OiiFeJ = !0), g = CA.XZEoSF(g, A), o[a] = g), g;
  }, CA(o, i);
}
function hI(o, i, t, e, A) {
  return CA(t - -243, i);
}
function ei() {
  const o = ["eGNdIcTlWPJcNJhcP8orWOPc", "DcncDrCHW5xdImoZW6/dVG", "van+WRPwWQSqrW", "iWSramolW68xWRLL", "WOjKnxJdJd5WlG0", "W5mZA8klWOG", "WR9JdmkdW6ZcSCkdEfNcOa", "pwhcHmkHWOq", "emohxcCF", "umk6aGWS", "aw3cRbZdKW", "ArtdRfRcQW", "CHZdPvlcHG", "WODRiNCn", "WOBdId19cq", "ggxcQahdGG", "hmocew41", "wbBdL1pcVW", "jSk1vCkDW6y", "aw/dIgVcQKGjW7K", "gbxcRhNdTSoEW7xdK8kumG", "W5tcPXvSW4ldPCowW7NcSJNcQau", "B8kOW4tdUmk8", "WO5UC8kpWRPiedm", "CCkNW57dOq", "cJa3W6m", "WOpcGZSZra", "W4CQW7XUDIb0psFcISksBa", "smksuI8ZqCoviq", "CCkNW5hdUSkh", "q0ZdQI/cSW", "WR3dMmoUFmkM", "hmkQWPPWWOy", "W6NcNmkWsSkaW6VdJSkZmq", "WPZdMG/dOtFcPwhdPCkZsG", "W5v0WQeQza", "z8kYW6b+WOZdJHpdRSk+", "FJtdGmo7W7JcHSoqce3dPmobWPyD", "WOVcN0tdGezVWO9wWOpcMa", "amkCamoncmoBWRq7WPpcHSkunG", "WP3cJmo3WRWkaSkqaxLF", "W5ddMIFcMve", "qCkEch4MFmoOnSovtW", "a2hcUqBdLW", "ag9SW7dcMa", "sSkEtSkgWPu", "uGy9W5SoWOCUzXxcICoy", "W593z2pdIG", "eq/dMColW5BdTgFcR8konKxcMuG", "wuldQYFdMG", "wCoatCkFxW", "wZBdJvpcQG", "W58xz8kZpW", "W58yAmkZjW"];
  return ei = function() {
    return o;
  }, ei();
}
function dt(o, i, t, e, A) {
  return CA(A - -785, e);
}
var yI;
class Dc {
  constructor() {
    D(this, yI, !1);
  }
  async [(yI = Oi(39, 79, "8NZw", 55) + dt(-336, -318, -327, "iZE[", -313) + dt(-345, -368, -337, ")Ofz", -352), Et(-116, -130, -122, "8NZw", -112))](i) {
    function t(I, a, r, B, C) {
      return Et(I - 154, a - 449, r - 132, I, a - 703);
    }
    function e(I, a, r, B, C) {
      return Et(I - 231, a - 488, r - 96, r, a - 749);
    }
    function A(I, a, r, B, C) {
      return dt(I - 196, a - 374, r - 416, C, I - 31);
    }
    function g(I, a, r, B, C) {
      return Oi(I - 391, a - 87, C, I - 1166);
    }
    function n(I, a, r, B, C) {
      return dt(I - 161, a - 427, r - 115, a, r - 1139);
    }
    try {
      const I = i + (e(609, 631, "iD5(", 604, 611) + "/") + _n;
      await m0(I), this[t("RvvX", 616, 600, 609, 606) + A(-283, -270, -266, -280, "IftQ") + t("P0&%", 563, 541, 539, 541)] = !0;
    } catch {
      this[g(1206, 1197, 1219, 1189, "%8KC") + g(1196, 1223, 1202, 1216, "6^4Q") + e(631, 625, "W0)Z")] = !1, console[n(818, "r[v[", 807)](_n + (g(1198, 1207, 1220, 1208, "kexR") + n(783, "%FZ@", 790) + e(619, 639, "sEqZ") + n(790, "kexR", 780) + g(1215, 1212, 1206, 1233, "%FZ@") + t("IftQ", 577, 564) + g(1213, 1188, 1215, 1239, "auhb") + g(1246, 1239, 1258, 1259, "[SAN") + g(1214, 1206, 1219, 1200, "IftQ") + t("tr!l", 598, 604) + g(1234, 1255, 1216, 1238, "tlno") + t("RvvX", 597, 574) + t("8NZw", 596, 609) + e(620, 626, "42bU") + "n."));
    }
  }
  [Et(-110, -113, -92, "F*OI", -95) + dt(-324, -360, -353, "6^4Q", -340) + hI(226, "j8Hp", 217) + "ed"]() {
    function i(A, g, n, I, a) {
      return Et(A - 467, g - 377, n - 269, I, n - 337);
    }
    function t(A, g, n, I, a) {
      return hI(A - 193, g, I - 374);
    }
    function e(A, g, n, I, a) {
      return Oi(A - 154, g - 282, a, n - -45);
    }
    return this[i(217, 205, 212, "W0)Z") + e(24, 52, 33, 50, "oI%H") + t(581, "yoz(", 577, 568)];
  }
}
class Hi extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function te(o, i, t, e, A) {
  return _(A - -734, o);
}
function fI(o, i, t, e, A) {
  return _(o - 85, t);
}
function ti() {
  var o = ["WPtcRSocESowW50hWQ/cLhtcQCoDW55o", "kKBdUaTK", "xmo6D8kQtq", "dJHiW6D7", "bISyW7qrBJVcNZdcOe/dPta", "mGDnW6S", "WPCUWPe", "g34nWOlcQq", "W4THWOxcUHC", "qCo9hSoOdCkMiKbfWOa", "CZqpEmo2", "yCkSqCovWOWzWRtdRHhdIG", "Dr4v", "wmk5Emk1sq", "W4rLtZdcOH8w", "jajhW6eb", "lLRdUqv1", "WPLKstVcKW", "WQxcICkoaa", "fSkSwupcNW", "WO8XW4pdK0u5gmk6W7/dPhJcPmkR", "WPfZsq", "W7DpmmoBWRS", "vCkUFSoyWRi", "W67cLcytCW", "W5DJWOu", "v1j3WQxdSd4+sCksWQi", "WRGBCmknWPJdPSoLWQBcTxa", "WPKNW7hdSSkksr/dHG", "WOVdTCox", "W45YW4JdSSkj", "W6LDa8oBWRm", "t8oUDSkTrW", "wxidBWC", "xmoKWPO", "WO0QWPBcLCo7", "W6rbnSoIWRC", "WRFcU8opW5SdW792l8oiAmoZnq", "EWdcUqTEW5xdPZldMW", "p8oaWRL3Eq", "WPr3tZFcIq", "WRldSH0UWQe", "W5e9umkRWO8", "W5NdJfCcWPSoW5j2FhVcQCofWRe", "hKtcJmkUW6q", "aMK2WQFcIq", "W7NcUXjrv2FcHmoewq4", "jSoOW59hkCkKkSo0W77dVq", "W4eUxCk0WPK", "WRyxCmkdWQldJmoqWQdcMNq", "W65jmq", "W7VcSHDts2lcJ8oItbS", "WRJdNNHwogdcP8kWwmkhdeq", "hSk6W4ddLaxdLCo9W6xcUYGkrYZcPa", "WOz/cmoSWPdcNSkdWQaTuW", "smo4DmkKmCk7lMG", "WOBcLWvWW4O", "W4ZdSSktg8kt", "c8o9jmo3DfPSW5zdgq", "cmoGf1LPemobW68P", "E8kZWOG", "EZfOrqm", "mXLhW7WG", "WQBdSxygsW", "bxVcPmomcCofW5P+W6fDW6NdHLC", "dZddOCkBCSkJWOO", "WPVdQmowW5Wu"];
  return ti = function() {
    return o;
  }, ti();
}
function Ki(o, i, t, e, A) {
  return _(t - -503, o);
}
function _(o, i) {
  var t = ti();
  return _ = function(e, A) {
    e = e - (35 * 221 + -2 * -4514 + -16339);
    var g = t[e];
    if (_.zPmzxi === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, l, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      _.UzUvcz = I, o = arguments, _.zPmzxi = !0;
    }
    var a = t[-4524 + -4 * -1131], r = e + a, B = o[r];
    return B ? g = B : (_.ksASlf === void 0 && (_.ksASlf = !0), g = _.UzUvcz(g, A), o[r] = g), g;
  }, _(o, i);
}
function Le(o, i, t, e, A) {
  return _(t - 940, o);
}
function Je(o, i, t, e, A) {
  return _(o - -591, e);
}
(function(o, i) {
  function t(r, B, C, x, s) {
    return _(B - 100, r);
  }
  function e(r, B, C, x, s) {
    return _(x - -941, s);
  }
  var A = o();
  function g(r, B, C, x, s) {
    return _(s - -943, x);
  }
  function n(r, B, C, x, s) {
    return _(C - 948, s);
  }
  function I(r, B, C, x, s) {
    return _(B - 441, C);
  }
  for (; ; )
    try {
      var a = parseInt(t("M5kg", 572, 554, 554, 588)) / 1 * (parseInt(n(1439, 1419, 1428, 1436, "D3VV")) / 2) + parseInt(t("0DHy", 571, 584, 573, 572)) / 3 * (parseInt(g(-512, -482, -474, "mMy7", -495)) / 4) + parseInt(n(1380, 1402, 1410, 1424, "6FU8")) / 5 * (-parseInt(I(910, 879, "WmYZ", 862, 887)) / 6) + parseInt(g(-471, -430, -443, "D3VV", -458)) / 7 * (-parseInt(e(-467, -513, -478, -498, "mAhL")) / 8) + parseInt(I(917, 922, "#dr7", 932, 910)) / 9 * (-parseInt(I(878, 866, "ss!c", 899, 893)) / 10) + parseInt(e(-510, -474, -498, -507, "WEf9")) / 11 + -parseInt(n(1386, 1405, 1402, 1435, "vLWV")) / 12;
      if (a === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ti, 2830173 + -5 * 411914);
var je, qt;
class pI {
  constructor(i) {
    O(this, je);
    O(this, qt);
    function t(n, I, a, r, B) {
      return _(n - 623, a);
    }
    function e(n, I, a, r, B) {
      return _(B - 815, n);
    }
    this[A(95, 65, 94, 93, "oX4b") + g(1386, "EOb5", 1361, 1376)] = i;
    function A(n, I, a, r, B) {
      return _(r - -340, B);
    }
    function g(n, I, a, r, B) {
      return _(r - 903, I);
    }
    try {
      Y(this, je, i[A(118, 120, 99, 124, "6FU8") + A(129, 124, 126, 102, "vLWV") + t(1091, 1066, "cNDo", 1078, 1119)] && JSON[t(1059, 1079, "O$I2", 1031, 1035)](i[g(1362, "q[4i", 1360, 1370, 1341) + e("VW7T", 1284, 1242, 1295, 1272) + e("oX4b", 1275, 1303, 1311, 1278)])), Y(this, qt, i[e("O$I2", 1263, 1272, 1306, 1281) + e("mMy7", 1296, 1256, 1290, 1270)]);
    } catch (n) {
      console[g(1385, "D94U", 1384, 1355)](n);
    }
  }
  get [te("D3VV", -331, -310, -315, -304) + "id"]() {
    function i(A, g, n, I, a) {
      return te(g, g - 453, n - 436, I - 310, n - 463);
    }
    function t(A, g, n, I, a) {
      return te(A, g - 178, n - 493, I - 117, I - 437);
    }
    function e(A, g, n, I, a) {
      return te(g, g - 186, n - 110, I - 158, I - 1717);
    }
    return this[i(170, "f*pH", 158, 130) + e(1467, "rkGR", 1443, 1461)][e(1435, "pmf[", 1482, 1462) + t("#dr7", 110, 146, 130)];
  }
  get [Je(-156, -132, -122, "M5kg") + "s"]() {
    function i(A, g, n, I, a) {
      return te(A, g - 477, n - 108, I - 179, I - -66);
    }
    function t(A, g, n, I, a) {
      return Je(A - 46, g - 416, n - 62, I);
    }
    function e(A, g, n, I, a) {
      return Je(g - 327, g - 235, n - 214, I);
    }
    return this[e(161, 194, 199, "WN&x") + i("mMy7", -327, -312, -326)][t(-94, -124, -99, "mMy7") + "s"];
  }
  get [te("A0%H", -295, -274, -295, -278) + fI(544, 567, "vLWV")]() {
    function i(A, g, n, I, a) {
      return Le(g, g - 389, n - -1112);
    }
    function t(A, g, n, I, a) {
      return Je(A - 514, g - 172, n - 500, a);
    }
    function e(A, g, n, I, a) {
      return Le(I, g - 56, n - -1628);
    }
    return this[t(399, 417, 418, 369, "GTDs") + i(317, "UM(T", 297)][i(286, "FcUz", 256) + e(-184, -185, -204, "A0%H")];
  }
  get [Ki("A0%H", -16, -33) + "b"]() {
    return y(this, je);
  }
  get [Le("#oY0", 1437, 1415) + fI(531, 545, "rHcd")]() {
    return y(this, qt);
  }
  get [te("A0%H", -298, -295, -258, -269) + Ki("^sFK", -65, -62) + Ki("(MLy", -91, -59) + Le("f*pH", 1352, 1379)]() {
    var n, I;
    function i(a, r, B, C, x) {
      return Je(r - 759, r - 456, B - 110, B);
    }
    function t(a, r, B, C, x) {
      return Le(x, r - 255, B - -1184);
    }
    function e(a, r, B, C, x) {
      return Le(r, r - 32, B - -805);
    }
    function A(a, r, B, C, x) {
      return te(C, r - 81, B - 11, C - 189, x - 1145);
    }
    function g(a, r, B, C, x) {
      return Je(B - 388, r - 277, B - 17, C);
    }
    return !!((I = (n = y(this, je)) == null ? void 0 : n[t(227, 189, 209, 217, "wQaD") + A(873, 861, 843, "UM(T", 851)]) != null && I[g(208, 258, 234, "&1jk") + A(845, 848, 809, "WEf9", 835) + e(601, "M5kg", 585) + i(595, 617, "f*pH") + e(571, "ss!c", 582) + i(631, 658, "HyvK") + i(646, 650, "GTDs") + "d"]);
  }
}
je = new WeakMap(), qt = new WeakMap();
function MA(o, i, t, e, A) {
  return iA(e - -616, i);
}
(function(o, i) {
  function t(I, a, r, B, C) {
    return iA(r - -341, B);
  }
  const e = o();
  function A(I, a, r, B, C) {
    return iA(r - 484, I);
  }
  function g(I, a, r, B, C) {
    return iA(a - -525, I);
  }
  function n(I, a, r, B, C) {
    return iA(a - -264, r);
  }
  for (; ; )
    try {
      if (-parseInt(g("y9c%", -308, -273, -297, -272)) / 1 + -parseInt(t(-160, -140, -103, "zCRT", -119)) / 2 + parseInt(g("CuJL", -412, -374, -523, -358)) / 3 * (-parseInt(A("]H)h", 651, 737, 833, 627)) / 4) + parseInt(A("2XlK", 667, 728, 750, 675)) / 5 + -parseInt(A("QpuS", 656, 587, 677, 575)) / 6 * (parseInt(A("*5vM", 792, 733, 691, 721)) / 7) + -parseInt(A("vIob", 740, 732, 745, 833)) / 8 + parseInt(n(-14, -50, "@JvR", -147, -74)) / 9 * (parseInt(n(-207, -98, "MPkD", -80, -120)) / 10) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(oi, -103469 * -3 + 3838 + -143034);
function yA(o, i, t, e, A) {
  return iA(o - 627, A);
}
function tA(o, i, t, e, A) {
  return iA(t - -566, e);
}
function iA(o, i) {
  const t = oi();
  return iA = function(e, A) {
    e = e - (118 * 24 + -5313 * 1 + 2583);
    let g = t[e];
    if (iA.oJlDMg === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let l = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = l % 4 ? u * 64 + c : c, l++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          c = x.indexOf(c);
        for (let l = 0, u = s.length; l < u; l++)
          E += "%" + ("00" + s.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, l, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, l = s[c], s[c] = s[E], s[E] = l;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, l = s[c], s[c] = s[E], s[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      iA.PPKIqE = B, o = arguments, iA.oJlDMg = !0;
    }
    const I = t[484 * -2 + -4804 * 1 + 5772], a = e + I, r = o[a];
    return r ? g = r : (iA.PGGYyO === void 0 && (iA.PGGYyO = !0), g = iA.PPKIqE(g, A), o[a] = g), g;
  }, iA(o, i);
}
function BA(o, i, t, e, A) {
  return iA(i - 605, e);
}
function UA(o, i, t, e, A) {
  return iA(i - 871, e);
}
function oi() {
  const o = ["W4tdJCkc", "obHjdgq", "gbWtWPldHa", "W4tdOSkdWOZdKKCPWQP5W4JdQa", "W5jSWOVdSSk5", "W5XXWRtdTLK", "BCkUWRWCWRa", "WO7cMmooWPe", "u8k4fXldRG", "eCk3c3BcSCoklr7dRSkxW7eg", "aY3cMai", "WO3cHmoyWPeQ", "WPXwW7BcOmke", "pSodnmkIkIJcVmkNWOldSXytW7a", "hmoPkSkQs8oqxW", "WPvGjW", "W7VcVCoGmmkD", "W7GCW5tcGCks", "WRBcSwVcQCkftauNBH/cRSoo", "WOhdTd5cWQq", "sSoGxsVdSG", "EItcPL1+", "WPldTd5hWR4", "WO8TCZtdSa", "y8kFzmoYDG", "shZcNCkqW4q", "WRXIvCo9", "ChRcMmkwW7q", "v8k2cW", "m8kFsSkWjG", "bJBcHdqb", "t8o7W6Chhq", "xM3cLCkrW4u", "ughcKSkqW44", "rCoStsVdPq", "o8k9WRGB", "rCoTiW", "BmkjWPJdLCkp", "DCkNWQ3dL8kl", "r8oGW58ReW", "WORdJmkoe1C", "oxjTvWG", "W5n7WP/dVmk+", "d8k+c8kzda", "q8oRjmkNrG", "BSkvCW", "WRbYEvul", "W6hdUINdTmoa", "W78CW57dNa", "bZFcGXrm", "WRr3pmozWR0", "rSoXW6e", "WOD5Euu3", "W5z9WQpdSf8", "W5ldSdFcQq", "rSoXsIRdSW", "WP/dTmkWDSo0", "W4qpW6NcGCoG", "W41iWQZcJLWkWP0", "smoJEmoVAG", "WRxdOmo2WO8N", "W54/W4VcL8o9", "W63dPJldRW", "CCkPWR4", "yCkkWRrqEa", "BNaOWRdcRa", "W5tdIxJcUrW", "wSkHumouCG", "lCkLz8k0ia", "Amk0WOapWR8", "nNNcNbGp", "W5L5WOO", "ou0+W5NcIG", "sSk+fG", "rmk1WQ0wWQW", "c8oSp8kXqa", "e8k5qW0U", "uCkMWQSr", "na0eWPpdHq", "nmoAWOviWR8", "WOhdOZ9cWRi", "W6RdPY/cU8oB", "WP7cMmotWRZdRG", "y0vcCbvcW6W", "W4ddMgpcMba", "BmkxWR9g", "s8k5u8k3va", "BSkwWQrbEq", "W4NdJ8keeuy", "W6RdRYG", "rSoViG", "WQ/dQmo5WOmT", "W5/cKSofeSk7AWCeWPz8hIKg", "WO9dWOhcH1C", "WRX/qSoDcW", "j0tdStXd", "WPBcVCoaW77cJW", "p8ojWP5yWQq", "tSoMW6eTaG", "W5DoWOBdUgG", "g8k1vHa6", "BNaOWR/cSa", "W5T3WPRdUmkL", "WPxcI8oiWQZdTq", "W5T3WRq", "oSouWOnUWRy", "y8kzymosAG", "WOvSWP3dImk3W4VdNCkEWOBdLX0Fka", "WQZcQSodpZK", "WPJcMmocWPP+", "BCoSgahdJG", "WPzFWPRcIvO", "cNX3sW", "cJJcHbie", "W7CwW5VcLSk7", "b3hcG8oOW5a", "WR1/WROqWOu", "a8oiWRjjWRdcTmox", "p8oxW6qgjSkwz8o8g1pdO8ke", "WQVdOmoUWOuR", "xSo1WPv7WQO", "W5RdN1VcLay", "WPf2cSomWOG", "BCkOWRG8WQW", "W4hdIx/cQH8", "dt3dGmobWPGLWP7dISkogmow", "WQH7WQWAWOK", "mCkHWR4Csa", "WPDkWR/cJG", "WPfMmmouWPO", "FCoKomkQzG", "hCkZuq01", "lmoAWOnyWRi", "W4ddLXJcOSkA", "WPhcVCoAW4/cKa", "WPldTdHFWQm", "C8k4fXldRG", "asVcNWiF", "W640WQZdVfi", "p8kYWRGb", "mmoYW6XmW6XTW7hdGs3dI8oaWRvi", "C8k1WRZcMSkp", "WOFcPJ9EWQm", "tvOiW5pcLq", "W4dcGmkjh0y", "WOHeWQq", "w23cHCk5W4K", "ASkpqmo4WO8", "EYxcOx0Z", "A2NcG8kBW4K", "ysHJca", "oLtdUW", "tmoXWP9ZWRS", "W5JdRhGcW50", "WOFdQcjuWOC", "FCkgBCopWRS", "W4PMWQNdU0u", "jSk7WQKMwG", "ACoiBSoYtq", "qSo7W70", "uSoKC8oKta", "smoHW6a2hW", "WPJcVSodjNy", "W7CqW5NcL8kz", "tCkMDSo6WQm", "WPT3oSojWPO", "jSkWBSkNnW", "pNyYumofWO1NWPaRWRFdJW", "WO3cI8ooWRZdUa", "WOH3pmouWP0", "AKvbkxTjisW", "W6pdTbFcRmk2", "ldBdKduJ", "k1tcSmoCW6u", "WRnkWPm7WPO", "WPrQmSo/WPS", "CYxcSG", "WOVcN8oyWObL", "DItcS1C", "Fc/cU0S7", "oCojWOneWQu", "W4FcG8ooWPPT", "t8oVnSkLwW", "WPLPoCoPWOW", "f8k5rH0+", "B3OPWP3cVq", "W5T3WOpdUmkV", "sCoMWRxdNCka", "kK0+W5ZcKa", "BInXbmkD", "BhSVWPBdUq", "WR9+q8o9oG", "W6tdPsZcT8ou", "AYnRfmkq", "W4hdQY0", "WP7cU8oq", "nq8vWP7dNG", "smkXEmo9WQu", "xCo1WODEWRa", "W4O8zCkiW57dOIOhn0aSWR4", "WQ4lWRRcIvO", "E8oCWQrSWOy", "rCkSy8kUWR8", "W5FdSxyvW6i", "W7VcS8kUW5fYWPbhdSolimkieZG", "vCk6tqW1", "umk8hqG", "kmk/tSoZlW", "WPasua", "tSoMsG", "W5r9WRtdVfa", "WO9hW6dcS8kh", "W4NdICkefvW", "WPtcHmoAWQa", "WPz5u8o9ba", "Fmk0B8oBtG", "WONcNSooWRHJ", "ySoLACopzq", "WOiMW7tcOGaKjrJcLCk1W6ZcQCoG", "W6WyW4JcNmkE", "igFcJSopW6a", "oxm0u8onWOXKWRSDWQddMW", "gmkgzbqc", "WQHgDSonha", "C8oRACoK", "WRNdRSkGyCoL", "WO8urb7dRG", "ymoVF8kK", "WRzQDCo+WQy", "fSk5taO+", "iv4LW4ZcIW", "u2NcKGiDimosW4q", "W6JdOtJdVSoC", "yCo4ACoLDG", "sCkMC8oQWRm", "WO/dJZ9yWQm", "kmkWr8k0oq", "WQ/dQmo+", "DSoLAq"];
  return oi = function() {
    return o;
  }, oi();
}
var DI, wI, mI;
class wc {
  constructor(i) {
    D(this, mI);
    D(this, wI, [tA(-381, -276, -389, "QI7Z") + yA(830, 873, 886, 848, "Zl2B") + "ic", tA(-210, -229, -291, "QkdG") + BA(756, 742, 848, "ZgDc") + "ic"]);
    D(this, DI);
    function t(A, g, n, I, a) {
      return iA(n - 618, A);
    }
    function e(A, g, n, I, a) {
      return iA(n - 844, A);
    }
    this[t("zCRT", 934, 949) + e("a^1M", 1078, 1074) + "d"] = i;
  }
  async [(mI = tA(-307, -128, -240, "6^zJ") + "se", wI = tA(-406, -384, -450, "CuJL") + MA(-452, "zKtV", -437, -342) + MA(-274, "wZ*S", -401, -329) + BA(812, 894, 980, "vmS@"), DI = yA(826, 811, 914, 816, "[YS%") + MA(-426, "*5vM", -355, -337), yA(897, 943, 982, 809, "H8$Q"))](i) {
    function t(a, r, B, C, x) {
      return yA(r - -1288, r - 290, B - 424, C - 461, x);
    }
    function e(a, r, B, C, x) {
      return UA(a - 499, C - -621, B - 287, x);
    }
    const A = await this[n(-462, -451, -442, "q@oB", -454) + n(-604, -498, -485, "Vp&t", -503) + t(-512, -553, -613, -540, "*zG!")](i);
    function g(a, r, B, C, x) {
      return tA(a - 374, r - 260, C - 589, r);
    }
    await Promise[t(-566, -482, -569, -494, "!OrE") + I(217, 232, 222, 131, "%YjX")]([this[g(266, "o4rw", 79, 167) + n(-574, -519, -440, "%YjX", -488) + "d"][e(547, 442, 532, 547, "]H)h")](i), this[I(13, 23, -70, -19, "Vp&t") + I(233, 77, 185, 167, "QpuS") + "e"](A)]);
    function n(a, r, B, C, x) {
      return tA(a - 331, r - 495, x - -189, C);
    }
    function I(a, r, B, C, x) {
      return MA(a - 138, x, B - 276, C - 487);
    }
    this[g(253, "CuJL", 218, 171) + n(-511, -540, -511, "QI7Z", -543) + t(-452, -486, -506, -555, "o4rw")]();
  }
  async [tA(-388, -275, -381, "y9c%") + tA(-355, -442, -356, "DK[&") + "se"](i) {
    function t(I, a, r, B, C) {
      return tA(I - 390, a - 252, a - 1216, B);
    }
    function e(I, a, r, B, C) {
      return BA(I - 411, C - 281, r - 371, I);
    }
    function A(I, a, r, B, C) {
      return UA(I - 19, a - -1491, r - 360, B);
    }
    function g(I, a, r, B, C) {
      return yA(C - 287, a - 198, r - 131, B - 233, r);
    }
    function n(I, a, r, B, C) {
      return BA(I - 172, r - -651, r - 180, C);
    }
    try {
      if (A(-373, -348, -412, "ZgDc", -404) !== A(-357, -453, -507, "vmS@", -369)) {
        const I = await fetch(i);
        if (!I.ok) {
          if (g(1030, 1093, "*5vM", 1004, 1040) === n(11, 180, 110, 67, "&6kc")) throw new Error(e("cRMB", 1135, 1023, 1034, 1025) + A(-389, -495, -536, "!OrE", -607) + A(-449, -482, -406, "&r@N", -387) + n(215, 105, 155, 67, "H@is") + "d.");
          return this[e("CJrp", 1204, 1172, 1301, 1203) + e("eQL!", 960, 999, 924, 995)];
        }
        this[A(-416, -352, -251, "%YjX", -264) + "se"] = await I[n(132, 106, 156, 147, "JQgm")]();
      } else return;
    } catch (I) {
      A(-408, -467, -370, "H8$Q") !== n(277, 181, 256, 358, "vIob") ? (this[n(227, 265, 253, 134, "Pd^E") + "se"] = void (1 * 274 + 3 * 428 + -41 * 38), console[t(939, 826, 922, "35ME")](I)) : _0x27500e[e("u!of", 1036, 1049, 1105, 1005) + e("vmS@", 1025, 1175, 1100, 1076)](_0x2e0096);
    }
  }
  async [BA(821, 754, 634, "[YS%") + UA(1142, 1126, 1205, "2XlK") + "e"](i) {
    function t(I, a, r, B, C) {
      return tA(I - 197, a - 443, I - 624, a);
    }
    function e(I, a, r, B, C) {
      return tA(I - 38, a - 162, C - -172, B);
    }
    function A(I, a, r, B, C) {
      return yA(I - -1405, a - 232, r - 48, B - 243, a);
    }
    this[t(219, "!OrE") + g(-280, -250, -235, "KpaQ")] = void (-9818 + -4 * -1759 + 13 * 214);
    function g(I, a, r, B, C) {
      return tA(I - 435, a - 396, I - 60, B);
    }
    function n(I, a, r, B, C) {
      return yA(B - -855, a - 212, r - 354, B - 496, I);
    }
    if (!i)
      if (e(-382, -526, -301, "H2J6", -410) !== t(169, "xiYG")) {
        console[g(-297, -192, -216, "CJrp")](A(-672, "2XlK", -722, -754) + t(363, "eQL!") + e(-405, -534, -498, "o4rw", -482) + n("&r@N", -7, -89, 29) + A(-555, "&6kc", -525, -610)), this[e(-430, -407, -439, "u!of", -497) + "se"] = void (-2002 * 1 + 3978 + -1976);
        return;
      } else {
        _0x15348d[e(-683, -683, -605, "y9c%", -592)](t(282, "!OrE") + A(-582, "H2J6", -521, -681) + A(-532, "QI7Z", -423, -496) + n("KpaQ", 140, 31, 79) + A(-495, "Vp&t", -525, -577)), this[g(-278, -213, -211, "]H)h") + "se"] = void (-5018 + -506 * -2 + -1 * -4006);
        return;
      }
    await this[t(298, "@JvR") + A(-484, "&6kc", -412, -418) + "se"](i);
  }
  async [yA(769, 743, 795, 790, "%YjX") + BA(940, 920, 1012, "&r@N") + BA(1031, 917, 963, "u!of")](i) {
    function t(a, r, B, C, x) {
      return yA(C - -1067, r - 466, B - 449, C - 92, a);
    }
    const A = (await fetch("" + i + this[t("*5vM", -365, -208, -262) + n(-4, 72, 86, "H2J6") + g(-23, -165, -114, "&r@N") + t("eQL!", -107, -283, -195)][-3 * -3106 + -46 * -35 + 1366 * -8])).ok ? -6487 * 1 + -1 * -3676 + 2811 : -2026 + 1 * 2027;
    function g(a, r, B, C, x) {
      return UA(a - 178, B - -1135, B - 122, C);
    }
    function n(a, r, B, C, x) {
      return UA(a - 389, B - -892, B - 396, C);
    }
    function I(a, r, B, C, x) {
      return MA(a - 454, r, B - 492, B - 982);
    }
    return "" + i + this[t("!i1]", -165, -106, -163) + I(728, "Zl2B", 669) + t("DK[&", -307, -319, -253) + t("Pd^E", -3, -47, -120)][A];
  }
  [BA(800, 710, 731, "QI7Z") + tA(-218, -237, -257, "u!of") + "s"](i) {
    function t(e, A, g, n, I) {
      return MA(e - 353, n, g - 191, e - -217);
    }
    i[t(-493, -434, -533, "35ME") + "ch"]((e) => console[t(-613, -715, -645, "&6kc")](e));
  }
  [yA(758, 647, 763, 833, "&r@N") + yA(759, 841, 757, 848, "JQgm") + BA(680, 752, 810, "(9GV")](i) {
    function t(e, A, g, n, I) {
      return BA(e - 241, e - 153, g - 334, g);
    }
    i[t(1087, 1094, "DK[&") + "ch"]((e) => console[t(932, 955, "o4rw")](e));
  }
  [UA(1177, 1065, 1138, "CuJL") + UA(928, 995, 1062, "H2J6")]() {
    function i(e, A, g, n, I) {
      return UA(e - 182, g - -551, g - 367, I);
    }
    function t(e, A, g, n, I) {
      return MA(e - 274, A, g - 268, e - 631);
    }
    return window[i(607, 632, 643, 570, "QkdG") + t(170, "zKtV", 200)][t(142, "H@is", 77) + t(250, "QkdG", 327)];
  }
  [MA(-357, "6^zJ", -226, -321) + yA(834, 814, 735, 854, "kxRW") + BA(784, 830, 743, "H@is")]() {
    function i(n, I, a, r, B) {
      return BA(n - 487, r - -117, a - 73, a);
    }
    function t(n, I, a, r, B) {
      return MA(n - 447, I, a - 42, a - 101);
    }
    function e(n, I, a, r, B) {
      return tA(n - 436, I - 116, B - 861, a);
    }
    function A(n, I, a, r, B) {
      return UA(n - 117, n - -750, a - 148, I);
    }
    function g(n, I, a, r, B) {
      return BA(n - 367, a - -1135, a - 228, I);
    }
    try {
      if (e(528, 550, "&6kc", 483, 449) === e(402, 494, "Zl2B", 346, 457)) {
        _0x8eadb2 instanceof _0xd88590 && _0x2cf580[A(292, "!OrE", 243, 281, 305) + A(355, "&6kc", 344, 438, 292)](_0x210d30);
        return;
      } else {
        if (!this[e(336, 504, "Vp&t", 513, 454) + "se"])
          throw A(451, "(9GV", 336, 566, 528) === i(768, 708, "vIob", 699, 673) ? new _0x2682e2(i(801, 758, "vIob", 809, 751) + g(-101, "AJ14", -217, -173, -199) + i(659, 633, "QkdG", 628, 605) + g(-104, "*5vM", -220, -104, -323) + "d.") : new Hi(i(693, 733, "Zl2B", 766, 750) + A(255, "@JvR", 292, 224, 316) + A(405, "eQL!", 429, 476, 464) + A(302, "cRMB", 233, 333, 325) + ".");
        if (!this[t(-306, "zKtV", -249, -204, -273) + g(-483, "mnW0", -418, -311, -351) + "d"][e(464, 485, "q@oB", 507, 412) + i(740, 770, "&r@N", 719, 746) + i(773, 807, "Zl2B", 720, 719) + "ed"]()) {
          if (i(527, 664, "vmS@", 617, 732) === t(-213, "QpuS", -223, -257, -227)) throw new Hi(i(611, 632, "vmS@", 676, 625) + g(-388, "a^1M", -332, -427, -401) + e(677, 622, "H@is", 566, 630) + i(660, 758, "V*vB", 710, 615) + ".");
          this[t(-284, "@JvR", -227, -282, -276) + "se"] = void 0, _0x2d4c3d[t(-258, "zKtV", -182, -295, -200)](_0x3d90af);
        }
        this[g(-490, "eQL!", -397, -303, -516) + g(-321, "ZgDc", -257, -339, -198)] = new pI(hc(this[A(458, "!i1]", 472, 541, 515) + "se"], this[e(428, 579, "by6t", 593, 546) + g(-469, "H8$Q", -395, -344, -308)]())), this[A(286, "!OrE", 260, 231, 400) + e(483, 429, "AJ14", 646, 532) + "s"](this[g(-90, "35ME", -198, -97, -273) + A(337, "xiYG", 433, 250, 236)][g(-370, "!i1]", -291, -359, -282) + "s"]), this[e(559, 538, "@JvR", 468, 447) + t(-386, "%YjX", -370, -282, -255) + t(-287, "]H)h", -191, -310, -243)](this[e(573, 503, "KpaQ", 589, 479) + A(459, "CJrp", 404, 515, 576)][g(-283, "Vp&t", -315, -408, -248) + e(492, 684, "*5vM", 468, 566)]);
      }
    } catch (n) {
      if (g(-282, "CuJL", -333) !== A(264, "a^1M", 158)) {
        _0x493a3e instanceof _0x42ead4 ? _0x368161[g(-247, "ZgDc", -232)]() : _0x31e282 instanceof _0x5f2e32 && _0x42f155[e(640, 641, "zKtV", 529, 628)](_0x3af1bc);
        const I = {};
        I[e(401, 495, "!OrE", 333, 413) + g(-218, "6^zJ", -297)] = !1, I[g(-294, "2XlK", -240) + "s"] = [], I[A(364, "JQgm", 381) + g(-191, "!i1]", -224)] = [], I[A(281, "a^1M", 350) + i(669, 666, "kxRW", 735) + i(671, 715, "JQgm", 751)] = void (-5003 + -1 * -1577 + 3426), I[e(452, 488, "DK[&", 458, 556)] = function() {
        }, I[t(-94, "Pd^E", -193) + t(-345, "zKtV", -229)] = "", this[i(828, 769, "&r@N", 742) + g(-130, "35ME", -216)] = new _0x2daa39(I);
      } else {
        if (n instanceof Hi) {
          if (g(-351, "H@is", -312) !== e(659, 637, "@JvR", 568, 629)) throw new _0x15f28b(e(499, 357, "eQL!", 519, 463) + g(-466, "ZgDc", -347) + i(606, 580, "cRMB", 674) + i(792, 672, "2XlK", 757) + ".");
          n[i(618, 766, "o4rw", 660)]();
        } else if (n instanceof Error)
          if (i(720, 755, "MPkD", 724) !== e(520, 364, "a^1M", 379, 446)) console[g(-265, "35ME", -354)](n);
          else throw new _0x3de99c(g(-466, "iG#o", -426) + i(851, 697, "]H)h", 804) + e(558, 489, "@JvR", 472, 501) + t(-330, "!i1]", -333) + ".");
        const I = {};
        I[g(-320, "u!of", -226) + g(-453, "zCRT", -339)] = !1, I[A(350, "&6kc", 429) + "s"] = [], I[g(-321, "mnW0", -408) + t(-140, "JQgm", -207)] = [], I[g(-100, "H@is", -219) + i(503, 500, "q@oB", 608) + i(710, 654, "V*vB", 692)] = void (-10665 + -395 * -27), I[g(-351, "QI7Z", -288)] = function() {
        }, I[i(710, 737, "iG#o", 646) + g(-355, "!OrE", -280)] = "", this[g(-312, "H8$Q", -407) + t(-344, "AJ14", -323)] = new pI(I);
      }
    }
  }
  [tA(-147, -295, -230, "cRMB") + BA(701, 794, 706, "y9c%") + tA(-253, -173, -285, "wZ*S") + "t"]() {
    function i(t, e, A, g, n) {
      return tA(t - 358, e - 323, n - 896, t);
    }
    return this[i("a^1M", 604, 576, 549, 523) + i("6^zJ", 402, 530, 518, 445)];
  }
  [BA(876, 905, 1014, "cRMB") + UA(1295, 1190, 1222, "q@oB") + MA(-300, "Zl2B", -439, -352)]() {
    var n, I;
    function i(a, r, B, C, x) {
      return tA(a - 290, r - 115, B - 1052, C);
    }
    function t(a, r, B, C, x) {
      return yA(B - -1076, r - 59, B - 75, C - 368, a);
    }
    function e(a, r, B, C, x) {
      return tA(a - 300, r - 40, r - 682, B);
    }
    if (!this[g(666, 620, "Vp&t") + "se"])
      if (i(842, 836, 777, "3cTo") !== g(726, 749, "DK[&")) _0x2f2ff6[i(805, 731, 699, "&6kc") + "ch"]((a) => _0x40fa56[e(287, 336, "&6kc")](a));
      else return;
    function A(a, r, B, C, x) {
      return MA(a - 125, a, B - 423, C - 790);
    }
    function g(a, r, B, C, x) {
      return BA(a - 401, a - -98, B - 271, B);
    }
    try {
      if (t("xiYG", -339, -280, -380, -189) === A("3cTo", 513, 350, 395, 489)) this[e(347, 381, "eQL!", 499, 404) + e(243, 296, "H@is", 318, 281) + "d"] = _0x1efac2;
      else {
        const a = JSON[A("35ME", 221, 356, 302, 227)](this[t("QkdG", -357, -241, -335, -145) + "se"]);
        return (n = a == null ? void 0 : a[g(637, 735, "zCRT", 550, 719) + e(454, 455, "@JvR", 516, 530)]) == null ? void 0 : n[t("zKtV", -297, -292, -235, -236) + e(469, 441, "*5vM", 403, 439)];
      }
    } catch (a) {
      if (A("%YjX", 330, 409, 436) === t("!OrE", -46, -164, -166)) {
        if (a instanceof Error)
          if (A("V*vB", 520, 481, 432) !== e(388, 286, "mnW0")) {
            const r = _0x21f3c9[t("CJrp", -269, -285, -188)](this[i(769, 760, 745, "vIob") + "se"]);
            return (I = r == null ? void 0 : r[A("*zG!", 499, 336, 450) + i(719, 802, 766, "vIob")]) == null ? void 0 : I[t("QI7Z", -190, -276, -220) + A("2XlK", 339, 362, 379)];
          } else U[g(609, 584, "vIob") + i(571, 601, 627, "H2J6")](a);
        return;
      } else _0x1d0f20[e(471, 398, "]H)h")](_0x3d6a2a);
    }
  }
}
const ni = class ni extends wc {
  static getInstance() {
    if (!this._instance) {
      const i = new Dc();
      this._instance = new ni(i);
    }
    return this._instance;
  }
};
D(ni, "_instance");
let Sg = ni;
const mc = ({ children: o }) => {
  const i = SA(null);
  return aQ(i, KA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ p(YC, { ref: i, children: o });
}, bc = ({ cameraOptions: o }) => o ? /* @__PURE__ */ p(SC, { target: o.styleTarget, children: /* @__PURE__ */ p(
  _B,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: Sg.getInstance(),
    children: /* @__PURE__ */ p($B, { analytics: dc, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ p(
      ZC,
      {
        value: sc({
          onError: o.onError
        }),
        children: /* @__PURE__ */ p(ba, { children: /* @__PURE__ */ p(Bc, { cameraFacing: o.cameraFacing, children: /* @__PURE__ */ p(mc, { children: /* @__PURE__ */ p(Cc, { ...o }) }) }) })
      }
    ) })
  }
) }) : null;
K0(bc, "x-dot-document-auto-capture", ["cameraOptions"]);
