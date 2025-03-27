var W0 = Object.defineProperty;
var Qn = (o) => {
  throw TypeError(o);
};
var Y0 = (o, i, t) => i in o ? W0(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var D = (o, i, t) => Y0(o, typeof i != "symbol" ? i + "" : i, t), sn = (o, i, t) => i.has(o) || Qn("Cannot " + t);
var y = (o, i, t) => (sn(o, i, "read from private field"), t ? t.call(o) : i.get(o)), W = (o, i, t) => i.has(o) ? Qn("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), L = (o, i, t, e) => (sn(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var jt, k, SI, RI, Ee, cn, MI, Oi, Sg, Hi, Ki, vI, wt = {}, LI = [], O0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oi = Array.isArray;
function $A(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function JI(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function uA(o, i, t) {
  var e, A, g, n = {};
  for (g in i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : n[g] = i[g];
  if (arguments.length > -2258 + 4 * 565 && (n.children = arguments.length > 4561 * 2 + -2 * 2323 + -4473 ? jt.call(arguments, 4072 + 335 * 1 + 5 * -881) : t), typeof o == "function" && o.defaultProps != null)
    for (g in o.defaultProps) void (-2778 * 1 + 4552 + -1774) === n[g] && (n[g] = o.defaultProps[g]);
  return ht(o, n, e, A, null);
}
function ht(o, i, t, e, A) {
  var g = {};
  g.type = o, g.props = i, g.key = t, g.ref = e, g.__k = null, g.__ = null, g.__b = 0, g.__e = null, g.__d = void (-1944 + 38 * -239 + 11026), g.__c = null, g.constructor = void (-7 * -277 + -1122 + -817), g.__v = A ?? ++SI, g.__i = -(2169 + 1023 * -1 + -1145), g.__u = 0;
  var n = g;
  return A == null && k.vnode != null && k.vnode(n), n;
}
function H0() {
  var o = {};
  return o.current = null, o;
}
function WA(o) {
  return o.children;
}
function JA(o, i) {
  this.props = o, this.context = i;
}
function Ge(o, i) {
  if (i == null) return o.__ ? Ge(o.__, o.__i + (-9802 + -9803 * -1)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? Ge(o) : null;
}
function UI(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = -6341 + 1095 * -3 + -9626 * -1; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return UI(o);
  }
}
function Ti(o) {
  (!o.__d && (o.__d = !0) && Ee.push(o) && !wo.__r++ || cn !== k.debounceRendering) && ((cn = k.debounceRendering) || MI)(wo);
}
function wo() {
  var o, i, t, e, A, g, n, I;
  for (Ee.sort(Oi); o = Ee.shift(); ) o.__d && (i = Ee.length, e = void (-902 + 78 * -86 + 7610 * 1), g = (A = (t = o).__v).__e, n = [], I = [], t.__P && ((e = $A({}, A)).__v = A.__v + 1, k.vnode && k.vnode(e), Rg(t.__P, e, A, t.__n, t.__P.namespaceURI, -984 + -465 * -1 + 1 * 551 & A.__u ? [g] : null, n, g ?? Ge(A), !!(32 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, OI(n, e, I), e.__e != g && UI(e)), Ee.length > i && Ee.sort(Oi));
  wo.__r = 1 * 2498 + -83 + -483 * 5;
}
function WI(o, i, t, e, A, g, n, I, a, r, B) {
  var C, x, s, E, d, u = e && e.__k || LI, c = i.length;
  for (t.__d = a, K0(t, i, u), a = t.__d, C = 3113 + 101 * 86 + 207 * -57; C < c; C++) (s = t.__k[C]) != null && typeof s != "boolean" && typeof s != "function" && (x = -(-3020 + -3 * -2587 + -12 * 395) === s.__i ? wt : u[s.__i] || wt, s.__i = C, Rg(o, s, x, A, g, n, I, a, r, B), E = s.__e, s.ref && x.ref != s.ref && (x.ref && Mg(x.ref, null, s), B.push(s.ref, s.__c || E, s)), d == null && E != null && (d = E), -10 * 10663 + -24391 * -1 + 147775 & s.__u || x.__k === s.__k ? (a && typeof s.type == "string" && !o.contains(a) && (a = Ge(x)), a = YI(s, a, o)) : typeof s.type == "function" && void (-8192 + -808 * -5 + -4152 * -1) !== s.__d ? a = s.__d : E && (a = E.nextSibling), s.__d = void (1 * 954 + 86 * -91 + 1718 * 4), s.__u &= -(4443 * -5 + -11181 * -7 + 140557));
  t.__d = a, t.__e = d;
}
function K0(o, i, t) {
  var e, A, g, n, I, a = i.length, r = t.length, B = r, C = -481 * -5 + 1533 + -3938;
  for (o.__k = [], e = -7819 + -7 * -1117; e < a; e++) n = e + C, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? ht(null, A, null, null, null) : oi(A) ? ht(WA, { children: A }, null, null, null) : void (-269 * 27 + -3558 + 10821) === A.constructor && A.__b > -6529 * -1 + -5985 + 16 * -34 ? ht(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (-1976 + 142 * -3 + 2403), I = T0(A, t, n, B), A.__i = I, g = null, -(-2 * 4498 + 1 * 8519 + 478) !== I && (B--, (g = t[I]) && (g.__u |= -150337 + 106534 * 2 + 91 * 751)), g == null || g.__v === null ? (-(-229 * -2 + -4076 + 77 * 47) == I && C--, typeof A.type != "function" && (A.__u |= -1 * -66925 + -11900 + 10511)) : I !== n && (I == n - (-9224 + 432 * 11 + 4473) ? C = I - n : I == n + (-9917 + -114 * -87) ? C++ : I > n ? B > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= -41354 + -9 * 7687 + 176073))) : (g = t[n]) && g.key == null && g.__e && -1453 * -1 + 2529 * -2 + 3605 == (277 * -613 + 1 * -259807 + 856 * 655 & g.__u) && (g.__e == o.__d && (o.__d = Ge(g)), Pi(g, g, !(2285 + 2 * -3214 + 148 * 28)), t[n] = null, B--);
  if (B)
    for (e = 0; e < r; e++) (g = t[e]) != null && 4 * -538 + 2 * 2609 + -2 * 1533 == (3522 * -26 + -18743 * 2 + -1 * -260130 & g.__u) && (g.__e == o.__d && (o.__d = Ge(g)), Pi(g, g));
}
function YI(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = -6323 + 6323 * 1; e && A < e.length; A++) e[A] && (e[A].__ = o, i = YI(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && -8038 + 514 * -1 + -2 * -4280 === i.nodeType);
  return i;
}
function ee(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (oi(o) ? o.some(function(t) {
    ee(t, i);
  }) : i.push(o)), i;
}
function T0(o, i, t, e) {
  var A = o.key, g = o.type, n = t - (-2463 * -1 + 40 * 112 + -6942), I = t + (4929 + 7989 * -1 + 1 * 3061), a = i[t];
  if (a === null || a && A == a.key && g === a.type && 16252 + 478 * -34 == (-260846 + 195959 * 2 & a.__u)) return t;
  if (e > (a != null && -6895 + 1 * 1706 + -5189 * -1 == (230332 + -116735 * -1 + -5 * 43199 & a.__u) ? 3 * -626 + -5821 + 7700 : 17 * 362 + -5779 + -15 * 25)) for (; n >= 0 || I < i.length; ) {
    if (n >= 15 * -263 + -419 * 23 + -1 * -13582) {
      if ((a = i[n]) && -8958 + 806 * -4 + -2 * -6091 == (157828 + 2 * -91253 + 155750 & a.__u) && A == a.key && g === a.type) return n;
      n--;
    }
    if (I < i.length) {
      if ((a = i[I]) && 1 * -1983 + -4795 + 6778 == (138218 + -121579 * -1 + -128725 & a.__u) && A == a.key && g === a.type) return I;
      I++;
    }
  }
  return -(662 * 12 + 173 * -23 + 1 * -3964);
}
function xn(o, i, t) {
  i[0] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || O0.test(i) ? t : t + "px";
}
function Ao(o, i, t, e, A) {
  var g;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || xn(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || xn(o.style, i, t[i]);
    }
  else if (i[188 * 9 + 1 * 4485 + -2059 * 3] === "o" && i[-2522 + -1 * -2523] === "n") g = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(10156 + -1 * 10154) : i.slice(1 * 5549 + -1145 * -5 + -11272), o.l || (o.l = {}), o.l[i + g] = t, t ? e ? t.u = e.u : (t.u = Sg, o.addEventListener(i, g ? Ki : Hi, g)) : o.removeEventListener(i, g ? Ki : Hi, g);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-7514 + -4 * -394 + 5939) === t && i[11 * 479 + 53 * -163 + 7 * 482] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && -1895 + 151 * 35 + -3389 == t ? "" : t));
  }
}
function En(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = Sg++;
      else if (i.t < t.u) return;
      return t(k.event ? k.event(i) : i);
    }
  };
}
function Rg(o, i, t, e, A, g, n, I, a, r) {
  var B, C, x, s, E, d, u, c, h, m, R, M, U, w, j, pA, AA = i.type;
  if (void (9 * 629 + -2338 + -3323) !== i.constructor) return null;
  -3859 + 3987 * 1 & t.__u && (a = !!(14 * 25 + 9002 + -1864 * 5 & t.__u), g = [I = i.__e = t.__e]), (B = k.__b) && B(i);
  A: if (typeof AA == "function") try {
    if (c = i.props, h = "prototype" in AA && AA.prototype.render, m = (B = AA.contextType) && e[B.__c], R = B ? m ? m.props.value : B.__ : e, t.__c ? u = (C = i.__c = t.__c).__ = C.__E : (h ? i.__c = C = new AA(c, R) : (i.__c = C = new JA(c, R), C.constructor = AA, C.render = q0), m && m.sub(C), C.props = c, C.state || (C.state = {}), C.context = R, C.__n = e, x = C.__d = !(2 * 1552 + -6606 + -1751 * -2), C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && AA.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = $A({}, C.__s)), $A(C.__s, AA.getDerivedStateFromProps(c, C.__s))), s = C.props, E = C.state, C.__v = i, x) h && AA.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && AA.getDerivedStateFromProps == null && c !== s && C.componentWillReceiveProps != null && C.componentWillReceiveProps(c, R), !C.__e && (C.shouldComponentUpdate != null && C.shouldComponentUpdate(c, C.__s, R) === !1 || i.__v === t.__v)) {
        for (i.__v !== t.__v && (C.props = c, C.state = C.__s, C.__d = !(-2 * 287 + 221 + 354)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(SA) {
          SA && (SA.__ = i);
        }), M = 6565 + 3 * -618 + -1 * 4711; M < C._sb.length; M++) C.__h.push(C._sb[M]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(c, C.__s, R), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(s, E, d);
      });
    }
    if (C.context = R, C.props = c, C.__P = o, C.__e = !(1 * -9069 + 4745 + 4325), U = k.__r, w = -7 * 945 + 7 * -1211 + 1078 * 14, h) {
      for (C.state = C.__s, C.__d = !(-8518 + -2685 * -3 + 4 * 116), U && U(i), B = C.render(C.props, C.state, C.context), j = -14 * 186 + -9566 + 5 * 2434; j < C._sb.length; j++) C.__h.push(C._sb[j]);
      C._sb = [];
    } else do
      C.__d = !(-1 * 5889 + 1 * -3277 + -1 * -9167), U && U(i), B = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++w < -1921 + 1 * 1946);
    C.state = C.__s, C.getChildContext != null && (e = $A($A({}, e), C.getChildContext())), h && !x && C.getSnapshotBeforeUpdate != null && (d = C.getSnapshotBeforeUpdate(s, E)), WI(o, oi(pA = B != null && B.type === WA && B.key == null ? B.props.children : B) ? pA : [pA], i, t, e, A, g, n, I, a, r), C.base = i.__e, i.__u &= -(5560 + 1 * -5015 + 12 * -32), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (SA) {
    i.__v = null, a || g != null ? (i.__e = I, i.__u |= a ? -6871 + -4162 * -1 + 1 * 2869 : -1 * 8553 + -4642 + -4409 * -3, g[g.indexOf(I)] = null) : (i.__e = t.__e, i.__k = t.__k), k.__e(SA, i, t);
  }
  else g == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = P0(t.__e, i, t, e, A, g, n, a, r);
  (B = k.diffed) && B(i);
}
function OI(o, i, t) {
  i.__d = void (-4006 + 2003 * 2);
  for (var e = -8106 + -123 * -41 + 3063; e < t.length; e++) Mg(t[e], t[++e], t[++e]);
  k.__c && k.__c(i, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(g) {
        g.call(A);
      });
    } catch (g) {
      k.__e(g, A.__v);
    }
  });
}
function P0(o, i, t, e, A, g, n, I, a) {
  var r, B, C, x, s, E, d, u = t.props, c = i.props, h = i.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), g != null) {
    for (r = -7199 + -313 * -23; r < g.length; r++) if ((s = g[r]) && "setAttribute" in s == !!h && (h ? s.localName === h : -7211 * 1 + -29 * -40 + 6054 === s.nodeType)) {
      o = s, g[r] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(c);
    o = document.createElementNS(A, h, c.is && c), g = null, I = !(-4 * 1206 + 25 * -74 + 6675);
  }
  if (h === null) u === c || I && o.data === c || (o.data = c);
  else {
    if (g = g && jt.call(o.childNodes), u = t.props || wt, !I && g != null)
      for (u = {}, r = -9541 + 999 * -9 + 18532; r < o.attributes.length; r++) u[(s = o.attributes[r]).name] = s.value;
    for (r in u) if (s = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = s;
      else if (r !== "key" && !(r in c)) {
        if (r == "value" && "defaultValue" in c || r == "checked" && "defaultChecked" in c) continue;
        Ao(o, r, null, s, A);
      }
    }
    for (r in c) s = c[r], r == "children" ? x = s : r == "dangerouslySetInnerHTML" ? B = s : r == "value" ? E = s : r == "checked" ? d = s : r === "key" || I && typeof s != "function" || u[r] === s || Ao(o, r, s, u[r], A);
    if (B) I || C && (B.__html === C.__html || B.__html === o.innerHTML) || (o.innerHTML = B.__html), i.__k = [];
    else if (C && (o.innerHTML = ""), WI(o, oi(x) ? x : [x], i, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, g, n, g ? g[-558 + 2 * -4859 + 10276] : t.__k && Ge(t, -2055 * -4 + -9660 + 1440), I, a), g != null)
      for (r = g.length; r--; ) g[r] != null && JI(g[r]);
    I || (r = "value", void (10200 + 2550 * -4) !== E && (E !== o[r] || h === "progress" && !E || h === "option" && E !== u[r]) && Ao(o, r, E, u[r], A), r = "checked", void (-380 * 26 + -1 * -2203 + 7677) !== d && d !== o[r] && Ao(o, r, d, u[r], A));
  }
  return o;
}
function Mg(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    k.__e(e, t);
  }
}
function Pi(o, i, t) {
  var e, A;
  if (k.unmount && k.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Mg(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (g) {
      k.__e(g, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = 801 * -6 + -473 + 5279 * 1; A < e.length; A++) e[A] && Pi(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || JI(o.__e), o.__c = o.__ = o.__e = o.__d = void (5 * -1035 + -2549 + 7724);
}
function q0(o, i, t) {
  return this.constructor(o, t);
}
function Ce(o, i, t) {
  var e, A, g, n;
  k.__ && k.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, g = [], n = [], Rg(i, o = (!e && t || i).__k = uA(WA, null, [o]), A || wt, wt, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? jt.call(i.childNodes) : null, g, !e && t ? t : A ? A.__e : i.firstChild, e, n), OI(g, o, n);
}
function vg(o, i) {
  Ce(o, i, vg);
}
function Lg(o, i, t) {
  var e, A, g, n, I = $A({}, o.props);
  for (g in o.type && o.type.defaultProps && (n = o.type.defaultProps), i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : I[g] = void (-1 * 8930 + -3780 + 410 * 31) === i[g] && void (-6 * 953 + 2970 + 2748) !== n ? n[g] : i[g];
  return arguments.length > 26 * -350 + -19 * -397 + 1559 * 1 && (I.children = arguments.length > -7 * -1199 + -2591 * -1 + 79 * -139 ? jt.call(arguments, 1725 + -2 * -1589 + -4901) : t), ht(o.type, I, e || o.key, A || o.ref, null);
}
function At(o, i) {
  var t = { __c: i = "__cC" + vI++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, g;
    return this.getChildContext || (A = [], (g = {})[i] = this, this.getChildContext = function() {
      return g;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, Ti(I);
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
jt = LI.slice, k = { __e: function(o, i, t, e) {
  for (var A, g, n; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((g = A.constructor) && g.getDerivedStateFromError != null && (A.setState(g.getDerivedStateFromError(o)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    o = I;
  }
  throw o;
} }, SI = -6494 + 361 * -14 + 11548 * 1, RI = function(o) {
  return o != null && o.constructor == null;
}, JA.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $A({}, this.state), typeof o == "function" && (o = o($A({}, t), this.props)), o && $A(t, o), o != null && this.__v && (i && this._sb.push(i), Ti(this));
}, JA.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(2 * 4042 + -1172 * 8 + -4 * -323), o && this.__h.push(o), Ti(this));
}, JA.prototype.render = WA, Ee = [], MI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oi = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, wo.__r = -8540 * 1 + -1542 + 10082, Sg = 0, Hi = En(!(-5866 + 1347 * 7 + 26 * -137)), Ki = En(!(-5835 + 16 * -613 + 1 * 15643)), vI = -5876 + 22 * -351 + 13598;
function Jg() {
  return (Jg = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = 761 * -12 + 45 * -121 + -37 * -394; i < arguments.length; i++) {
      var t = arguments[i];
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
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var g, n, I = {}, a = Object.keys(e);
    for (n = 127 * -17 + 7765 + -5606; n < a.length; n++) A.indexOf(g = a[n]) >= -879 + -486 * -19 + -15 * 557 || (I[g] = e[g]);
    return I;
  }(o, j0);
  return Lg(i, t);
}
function V0() {
  var o = {};
  o.detail = {}, o.bubbles = !(-12685 + -295 * -43), o.cancelable = !(-8817 + 1 * 6850 + 1967);
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = uA(Z0, Jg({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (1 * 7507 + -4329 + 25 * -127 === e.nodeType) return e.data;
    if (4523 + 133 * -34 !== e.nodeType) return null;
    var g = [], n = {}, I = -4321 + 149 * 29, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[HI(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var B = t(r[I], null), C = r[I].slot;
      C ? n[C] = uA(dn, { name: C }, B) : g[I] = B;
    }
    var x = A ? uA(dn, null, g) : g;
    return uA(A || e.nodeName.toLowerCase(), n, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? vg : Ce)(this._vdom, this._root);
}
function HI(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function _0(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (1017 * 7 + 4 * 2293 + 1481 * -11), e[HI(o)] = t, this._vdom = Lg(this._vdom, e), Ce(this._vdom, this._root);
  }
}
function z0() {
  Ce(this._vdom = null, this._root);
}
function dn(o, i) {
  var t = this;
  return uA("slot", Jg({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function X0(o, i, t, e) {
  function A() {
    var g = Reflect.construct(HTMLElement, [], A);
    return g._vdomComponent = o, g._root = g, g;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = V0, A.prototype.attributeChangedCallback = _0, A.prototype.disconnectedCallback = z0, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(g) {
    Object.defineProperty(A.prototype, g, { get: function() {
      return this._vdom.props[g];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(g, null, n) : (this._props || (this._props = {}), this._props[g] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(g, n);
    } });
  }), customElements.define(i, A);
}
var $0 = -4544 + 16 * 284;
function p(o, i, t, e, A, g) {
  i || (i = {});
  var n, I, a = i;
  if ("ref" in a)
    for (I in a = {}, i) I == "ref" ? n = i[I] : a[I] = i[I];
  var r = {};
  r.type = o, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-5396 + 3 * -643 + -7325 * -1), r.__c = null, r.constructor = void 0, r.__v = --$0, r.__i = -(719 * 5 + 8395 + -11989), r.__u = 0, r.__source = A, r.__self = g;
  var B = r;
  if (typeof o == "function" && (n = o.defaultProps))
    for (I in n) void (10 * -719 + 949 * -3 + 10037) === a[I] && (a[I] = n[I]);
  return k.vnode && k.vnode(B), B;
}
var mA = function() {
  return mA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var g in t) Object.prototype.hasOwnProperty.call(t, g) && (i[g] = t[g]);
    }
    return i;
  }, mA.apply(this, arguments);
};
function qe(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, g; e < A; e++)
    (g || !(e in i)) && (g || (g = Array.prototype.slice.call(i, 0, e)), g[e] = i[e]);
  return o.concat(g || Array.prototype.slice.call(i));
}
function Ar(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var er = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tr = Ar(function(o) {
  return er.test(o) || o.charCodeAt(-8981 + -818 * -2 + 7345) === -4181 * -1 + -6264 + -2194 * -1 && o.charCodeAt(8843 * -1 + 12 * 805 + 1 * -816) === -5320 + -2715 * -2 && o.charCodeAt(-5908 + -6 * -985) < 1509 + 43 * 62 + -4084;
}), Be, P, hi, ln, je = -205 * 23 + -9133 + -4616 * -3, KI = [], V = k, un = V.__b, hn = V.__r, fn = V.diffed, pn = V.__c, yn = V.unmount, Dn = V.__;
function et(o, i) {
  V.__h && V.__h(P, o, je || i), je = 23 * -258 + -5947 * 1 + 11881;
  var t = {};
  t.__ = [], t.__h = [];
  var e = P.__H || (P.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function fA(o) {
  return je = -17 * -100 + 7734 + 9433 * -1, Ug(qI, o);
}
function Ug(o, i, t) {
  var e = et(Be++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : qI(void (3945 + 9759 * 1 + -4568 * 3), i), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[-4 * 2138 + -66 * -20 + 7233]], e.__c.setState({}));
  }], e.__c = P, !P.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var B = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (B.every(function(x) {
        return !x.__N;
      })) return !g || g.call(this, I, a, r);
      var C = !(9513 + -8445 * 1 + -1067);
      return B.forEach(function(x) {
        if (x.__N) {
          var s = x.__[0];
          x.__ = x.__N, x.__N = void 0, s !== x.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!g || g.call(this, I, a, r));
    };
    P.u = !0;
    var g = P.shouldComponentUpdate, n = P.componentWillUpdate;
    P.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var B = g;
        g = void (-29 * 7 + 666 + -1 * 463), A(I, a, r), g = B;
      }
      n && n.call(this, I, a, r);
    }, P.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function q(o, i) {
  var t = et(Be++, 3);
  !V.__s && Wg(t.__H, i) && (t.__ = o, t.i = i, P.__H.__h.push(t));
}
function tt(o, i) {
  var t = et(Be++, 4);
  !V.__s && Wg(t.__H, i) && (t.__ = o, t.i = i, P.__h.push(t));
}
function NA(o) {
  return je = 750 + 53 * -97 + 4396, bA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function TI(o, i, t) {
  je = -1 * 7101 + -764 + 7871, tt(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(o));
}
function bA(o, i) {
  var t = et(Be++, 7);
  return Wg(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function te(o, i) {
  return je = -302 * 16 + -7475 + -5 * -2463, bA(function() {
    return o;
  }, i);
}
function Qe(o) {
  var i = P.context[o.__c], t = et(Be++, 21 * 371 + 6676 + -14458);
  return t.c = o, i ? (t.__ == null && (t.__ = !(-5557 + -109 * 27 + 8500), i.sub(P)), i.props.value) : o.__;
}
function mo(o, i) {
  V.useDebugValue && V.useDebugValue(i ? i(o) : o);
}
function PI() {
  var o = et(Be++, 11);
  if (!o.__) {
    for (var i = P.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [1 * -3646 + 2213 + 1433, -14394 + -1 * -14394]);
    o.__ = "P" + t[3 * -274 + -9263 * -1 + 8441 * -1] + "-" + t[-4 * -859 + 9 * 489 + 3 * -2612]++;
  }
  return o.__;
}
function or() {
  for (var o; o = KI.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(ao), o.__H.__h.forEach(qi), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], V.__e(i, o.__v);
  }
}
V.__b = function(o) {
  P = null, un && un(o);
}, V.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), Dn && Dn(o, i);
}, V.__r = function(o) {
  hn && hn(o), Be = -1 * 3845 + -1 * 3505 + 294 * 25;
  var i = (P = o.__c).__H;
  i && (hi === P ? (i.__h = [], P.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-6285 + 1 * 6285);
  })) : (i.__h.forEach(ao), i.__h.forEach(qi), i.__h = [], Be = -758 * -2 + 1 * -2763 + -1247 * -1)), hi = P;
}, V.diffed = function(o) {
  fn && fn(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (1723 + 8011 * -1 + -19 * -331 !== KI.push(i) && ln === V.requestAnimationFrame || ((ln = V.requestAnimationFrame) || ir)(or)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-4901 * 1 + -5507 * -1 + -303 * 2);
  })), hi = P = null;
}, V.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(ao), t.__h = t.__h.filter(function(e) {
        return !e.__ || qi(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], V.__e(e, t.__v);
    }
  }), pn && pn(o, i);
}, V.unmount = function(o) {
  yn && yn(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      ao(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void (7915 * 1 + 139 * -1 + -7776), i && V.__e(i, t.__v));
};
var wn = typeof requestAnimationFrame == "function";
function ir(o) {
  var i, t = function() {
    clearTimeout(e), wn && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  wn && (i = requestAnimationFrame(t));
}
function ao(o) {
  var i = P, t = o.__c;
  typeof t == "function" && (o.__c = void 0, t()), P = i;
}
function qi(o) {
  var i = P;
  o.__c = o.__(), P = i;
}
function Wg(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function qI(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function jI(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function ji(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !(7174 * 1 + -3068 * -1 + -569 * 18);
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(1434 + -199 * 29 + 4337);
  return !1;
}
function Zi(o, i) {
  this.props = o, this.context = i;
}
function gr(o, i) {
  function t(A) {
    var g = this.props.ref, n = g == A.ref;
    return !n && g && (g.call ? g(null) : g.current = null), i ? !i(this.props, A) || !n : ji(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, uA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(31 * -257 + 9970 + -2003), e.__f = !(-3 * -3226 + 51 + 1081 * -9), e;
}
(Zi.prototype = new JA()).isPureReactComponent = !(8430 + 1 * 8332 + -16762), Zi.prototype.shouldComponentUpdate = function(o, i) {
  return ji(this.props, o) || ji(this.state, i);
};
var mn = k.__b;
k.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), mn && mn(o);
};
var nr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -251 + -1 * 5264 + 9426;
function ZI(o) {
  function i(t) {
    var e = jI({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = nr, i.render = i, i.prototype.isReactComponent = i.__f = !(107 * -7 + 6 * 1049 + -5545), i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var bn = function(o, i) {
  return o == null ? null : ee(ee(o).map(i));
}, Ir = { map: bn, forEach: bn, count: function(o) {
  return o ? ee(o).length : -10 * -985 + 8221 + -18071 * 1;
}, only: function(o) {
  var i = ee(o);
  if (1206 * -1 + -5776 + 1 * 6983 !== i.length) throw "Children.only";
  return i[-7572 + 1 * 4657 + 2915];
}, toArray: ee }, ar = k.__e;
k.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, g = i; g = g.__; ) if ((A = g.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  ar(o, i, t, e);
};
var Gn = k.unmount;
function VI(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = jI({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return VI(e, i, t);
  })), o;
}
function _I(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return _I(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(-945 + 945 * 1), o.__c.__P = t)), o;
}
function ro() {
  this.__u = -8869 + 1 * 7789 + 1080, this.t = null, this.__b = null;
}
function zI(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function rr(o) {
  var i, t, e;
  function A(g) {
    if (i || (i = o()).then(function(n) {
      t = n.default || n;
    }, function(n) {
      e = n;
    }), e) throw e;
    if (!t) throw i;
    return uA(t, g);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function Qt() {
  this.u = null, this.o = null;
}
k.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && 29 * 89 + -409 * -14 + -8275 & o.__u && (o.type = null), Gn && Gn(o);
}, (ro.prototype = new JA()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = zI(e.__v), g = !(66 * 93 + 484 + -6621), n = function() {
    g || (g = !(-9182 * -1 + 4288 + 3 * -4490), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[0] = _I(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || 1377 + -3 * -2383 + -8494 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-4 * 2298 + -55 * 37 + 1 * 11227] }), o.then(n, n);
}, ro.prototype.componentWillUnmount = function() {
  this.t = [];
}, ro.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-5269 + -3946 * -2 + 1 * -2623].__c;
      this.__v.__k[13 * -23 + -333 + 316 * 2] = VI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && uA(WA, null, o.fallback);
  return A && (A.__u &= -(407 * -19 + -1070 + -94 * -94)), [uA(WA, null, i.__a ? null : o.children), A];
};
var kn = function(o, i, t) {
  if (++t[1] === t[1 * 2980 + -4641 + 1661] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[1 * -5213 + -6664 + 11877] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[-2 * -3639 + 2411 + -9688] < t[979 + 2644 * 1 + -3623]) break;
    o.u = t = t[-7224 + -14 * 354 + 12182];
  }
};
function Cr(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function Br(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    Ce(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(9 * -844 + 4344 + 271 * 12);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, -1 * -8133 + -33 * 203 + 1433 * -1), i.i.removeChild(e);
  } }), Ce(uA(Cr, { context: i.context }, o.__v), i.l);
}
function Qr(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = uA(Br, t);
  return e.containerInfo = i, e;
}
(Qt.prototype = new JA()).__a = function(o) {
  var i = this, t = zI(i.__v), e = i.o.get(o);
  return e[0]++, function(A) {
    var g = function() {
      i.props.revealOrder ? (e.push(A), kn(i, o, e)) : A();
    };
    t ? t(g) : g();
  };
}, Qt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = ee(o.children);
  o.revealOrder && o.revealOrder[-7863 + 2087 * 3 + -178 * -9] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [1 * 836 + 1 * -9657 + 8822, 8661 + 1069 * 5 + -14006, this.u]);
  return o.children;
}, Qt.prototype.componentDidUpdate = Qt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    kn(o, t, i);
  });
};
var XI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 32945 + -367 * -74, sr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, cr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, xr = /[A-Z0-9]/g, Er = typeof document < "u", dr = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function lr(o, i, t) {
  return i.__k == null && (i.textContent = ""), Ce(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function ur(o, i, t) {
  return vg(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
JA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(JA.prototype, o, { configurable: !(9 * 419 + -5593 + 911 * 2), get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-2390 * -1 + 212 * 13 + 83 * -62), t.writable = !(-1 * -9140 + -4898 + -4242), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var Nn = k.event;
function hr() {
}
function fr() {
  return this.cancelBubble;
}
function pr() {
  return this.defaultPrevented;
}
k.event = function(o) {
  return Nn && (o = Nn(o)), o.persist = hr, o.isPropagationStopped = fr, o.isDefaultPrevented = pr, o.nativeEvent = o;
};
var Co = {};
Co.enumerable = !(3818 * -2 + -2449 + 10086), Co.configurable = !(8166 + -3253 * -2 + 7336 * -2), Co.get = function() {
  return this.class;
};
var Yg, yr = Co, Fn = k.vnode;
k.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var g in t) {
      var n = t[g];
      if (!(g === "value" && "defaultValue" in t && n == null || Er && g === "children" && e === "noscript" || g === "class" || g === "className")) {
        var I = g.toLowerCase();
        g === "defaultValue" && "value" in t && t.value == null ? g = "value" : g === "download" && !(-4408 + -1 * -9848 + -1088 * 5) === n ? n = "" : I === "translate" && n === "no" ? n = !(-2226 + -131 * -17) : I === "ondoubleclick" ? g = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || dr(t.type) ? I === "onfocus" ? g = "onfocusin" : I === "onblur" ? g = "onfocusout" : cr.test(g) ? g = I : -(-8 * -1114 + 116 * -54 + -2647) === e.indexOf("-") && sr.test(g) ? g = g.replace(xr, "-$&").toLowerCase() : n === null && (n = void (-1 * 3412 + 2208 + -1204 * -1)) : I = g = "oninput", I === "oninput" && A[g = I] && (g = "oninputCapture"), A[g] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = ee(t.children).forEach(function(a) {
      a.props.selected = A.value.indexOf(a.props.value) != -1;
    })), e == "select" && A.defaultValue != null && (A.value = ee(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(7635 + 66 * 19 + -8888) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", yr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = XI, Fn && Fn(o);
};
var Sn = k.__r;
k.__r = function(o) {
  Sn && Sn(o), Yg = o.__c;
};
var Rn = k.diffed;
k.diffed = function(o) {
  Rn && Rn(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), Yg = null;
};
var rA = {};
rA.readContext = function(o) {
  return Yg.__n[o.__c].props.value;
}, rA.useCallback = te, rA.useContext = Qe, rA.useDebugValue = mo, rA.useDeferredValue = ta, rA.useEffect = q, rA.useId = PI, rA.useImperativeHandle = TI, rA.useInsertionEffect = ia, rA.useLayoutEffect = tt, rA.useMemo = bA, rA.useReducer = Ug, rA.useRef = NA, rA.useState = fA, rA.useSyncExternalStore = ga, rA.useTransition = oa;
var $I = {};
$I.current = rA;
var Aa = {};
Aa.ReactCurrentDispatcher = $I;
var Dr = Aa;
function wr(o) {
  return uA.bind(null, o);
}
function ii(o) {
  return !!o && o.$$typeof === XI;
}
function mr(o) {
  return ii(o) && o.type === WA;
}
function br(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function Gr(o) {
  return ii(o) ? Lg.apply(null, arguments) : o;
}
function kr(o) {
  return !!o.__k && (Ce(null, o), !(466 * 3 + 2985 + 487 * -9));
}
function Nr(o) {
  return o && (o.base || -3069 + 20 * -385 + 10770 === o.nodeType && o) || null;
}
var Fr = function(o, i) {
  return o(i);
}, Sr = function(o, i) {
  return o(i);
}, Rr = WA;
function ea(o) {
  o();
}
function ta(o) {
  return o;
}
function oa() {
  return [!(-6 * 1459 + 4014 + 431 * 11), ea];
}
var ia = tt, Mr = ii;
function ga(o, i) {
  var t = i(), e = fA({ h: { __: t, v: i } }), A = e[116 * 68 + 5670 + -6779 * 2].h, g = e[1 * -7567 + -938 + 2 * 4253];
  return tt(function() {
    A.__ = t, A.v = i, fi(A) && g({ h: A });
  }, [o, t, i]), q(function() {
    return fi(A) && g({ h: A }), o(function() {
      fi(A) && g({ h: A });
    });
  }, [o]), t;
}
function fi(o) {
  var i, t, e = o.v, A = o.__;
  try {
    var g = e();
    return !((i = A) === (t = g) && (-421 * 19 + 451 * 21 + -1472 !== i || (-8702 + -1 * -8703) / i == (8195 + -1 * 4471 + 3 * -1241) / t) || i != i && t != t);
  } catch {
    return !(-7128 + 69 * -45 + -9 * -1137);
  }
}
var G = {};
G.useState = fA, G.useId = PI, G.useReducer = Ug, G.useEffect = q, G.useLayoutEffect = tt, G.useInsertionEffect = ia, G.useTransition = oa, G.useDeferredValue = ta, G.useSyncExternalStore = ga, G.startTransition = ea, G.useRef = NA, G.useImperativeHandle = TI, G.useMemo = bA, G.useCallback = te, G.useContext = Qe, G.useDebugValue = mo, G.version = "17.0.2", G.Children = Ir, G.render = lr, G.hydrate = ur, G.unmountComponentAtNode = kr, G.createPortal = Qr, G.createElement = uA, G.createContext = At, G.createFactory = wr, G.cloneElement = Gr, G.createRef = H0, G.Fragment = WA, G.isValidElement = ii, G.isElement = Mr, G.isFragment = mr, G.isMemo = br, G.findDOMNode = Nr, G.Component = JA, G.PureComponent = Zi, G.memo = gr, G.forwardRef = ZI, G.flushSync = Sr, G.unstable_batchedUpdates = Fr, G.StrictMode = Rr, G.Suspense = ro, G.SuspenseList = Qt, G.lazy = rr, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dr;
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
function Wr(o) {
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
const Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: vr,
  getAugmentedNamespace: Wr,
  getDefaultExportFromCjs: Lr,
  getDefaultExportFromNamespaceIfNotNamed: Ur,
  getDefaultExportFromNamespaceIfPresent: Jr
}, Symbol.toStringTag, { value: "Module" }));
var Or = function(i, t, e, A) {
  var g = e ? e.call(A, i, t) : void 0;
  if (g !== void (257 + -308 * 9 + 2515)) return !!g;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var n = Object.keys(i), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = 5216 + -1514 * -1 + -6730; r < n.length; r++) {
    var B = n[r];
    if (!a(B)) return !1;
    var C = i[B], x = t[B];
    if (g = e ? e.call(A, C, x, B) : void (-73 * -27 + 8103 + 23 * -438), g === !1 || g === void (3 * -498 + 613 * -1 + 2107) && C !== x) return !1;
  }
  return !0;
};
const Hr = Yr.getDefaultExportFromCjs(Or);
var T = "-ms-", ft = "-moz-", H = "-webkit-", na = "comm", gi = "rule", Og = "decl", Kr = "@import", Ia = "@keyframes", Tr = "@layer", aa = Math.abs, Hg = String.fromCharCode, Vi = Object.assign;
function Pr(o, i) {
  return iA(o, 6103 + 1 * 4363 + 5233 * -2) ^ 256 * 10 + -7399 + 4884 ? (((i << -3247 + -171 * -19 ^ iA(o, 13 * -449 + 8824 * -1 + 14661)) << 2 ^ iA(o, -7 * 697 + 3881 + 3 * 333)) << -9031 + -26 * -14 + -8669 * -1 ^ iA(o, 170 * 41 + 9012 * 1 + -15980)) << -1 * -6163 + 9752 + -15913 ^ iA(o, -1 * 4749 + -4376 * 1 + -4564 * -2) : -5144 * 1 + -5578 * -1 + 14 * -31;
}
function ra(o) {
  return o.trim();
}
function _A(o, i) {
  return (o = i.exec(o)) ? o[61 * -136 + 4010 + 4286] : o;
}
function N(o, i, t) {
  return o.replace(i, t);
}
function Bo(o, i, t) {
  return o.indexOf(i, t);
}
function iA(o, i) {
  return o.charCodeAt(i) | 43 * -19 + -2854 + 3671;
}
function Ze(o, i, t) {
  return o.slice(i, t);
}
function PA(o) {
  return o.length;
}
function Ca(o) {
  return o.length;
}
function st(o, i) {
  return i.push(o), o;
}
function qr(o, i) {
  return o.map(i).join("");
}
function Mn(o, i) {
  return o.filter(function(t) {
    return !_A(t, i);
  });
}
var ni = -7396 + 179 * 4 + 6681, Ve = 5586 + 1 * -7671 + 2086, Ba = 9124 * 1 + -5572 + -3552, YA = 112 * -1 + -82 * -98 + -28 * 283, eA = -7855 + 369 * 1 + 7486, ot = "";
function Ii(o, i, t, e, A, g, n, I) {
  var a = {};
  return a.value = o, a.root = i, a.parent = t, a.type = e, a.props = A, a.children = g, a.line = ni, a.column = Ve, a.length = n, a.return = "", a.siblings = I, a;
}
function ge(o, i) {
  return Vi(Ii("", null, null, "", null, null, 59 * -163 + 895 * 10 + 667 * 1, o.siblings), o, { length: -o.length }, i);
}
function ve(o) {
  for (; o.root; ) o = ge(o.root, { children: [o] });
  st(o, o.siblings);
}
function jr() {
  return eA;
}
function Zr() {
  return eA = YA > 3491 * -1 + -1104 + 4595 ? iA(ot, --YA) : -172 * 58 + -1 * -4633 + 13 * 411, Ve--, eA === 1 * 4379 + -6514 + 39 * 55 && (Ve = 2427 + -1 * 5948 + 3522, ni--), eA;
}
function HA() {
  return eA = YA < Ba ? iA(ot, YA++) : 6469 + 1500 * 5 + -13969, Ve++, eA === 11 * 94 + 2206 + -3230 && (Ve = 7133 + -1783 * 4, ni++), eA;
}
function me() {
  return iA(ot, YA);
}
function Qo() {
  return YA;
}
function ai(o, i) {
  return Ze(ot, o, i);
}
function _i(o) {
  switch (o) {
    case 3 * 2695 + -3839 + 22 * -193:
    case 5478 + -29 * 339 + 6 * 727:
    case -27 * 285 + -2789 * 2 + 13283:
    case 4095 + -3 * -1549 + -8729:
    case -8951 * -1 + -4198 + -4721:
      return -6662 + 2599 * -1 + -113 * -82;
    case -11246 + -1 * -11279:
    case 43:
    case -2726 + 277 * 10:
    case 1972 + -9369 * 1 + 7444:
    case -1 * -5377 + 7017 + -12332:
    case -2 * -3073 + 317 * -19 + -59:
    case -1 * -7835 + -109 * 55 + 1 * -1714:
    case 9808 + -591 * -13 + -17432:
    case -8551 + 19 * -18 + -644 * -14:
    case 60 * 116 + -1478 * 2 + -3879:
      return -3 * -1490 + -8125 + 3659;
    case -4403 * -1 + -9008 + -4663 * -1:
      return 3;
    case 3835 + 1337 * 2 + 175 * -37:
    case 565 * -5 + 6767 * -1 + -9631 * -1:
    case -157 * 57 + 8913 * 1 + 2 * 38:
    case 5452 + 1 * -5559 + 198 * 1:
      return -45 * 61 + -4797 + -328 * -23;
    case 8 * 197 + -118 * 32 + -83 * -27:
    case 201 * 30 + 5651 * 1 + -11588:
      return 1;
  }
  return -3 * 122 + 4738 + 4372 * -1;
}
function Vr(o) {
  return ni = Ve = 5011 + -6 * 835, Ba = PA(ot = o), YA = 4322 + -2161 * 2, [];
}
function _r(o) {
  return ot = "", o;
}
function pi(o) {
  return ra(ai(YA - (-2 * 4618 + -4982 + 14219), zi(o === 4138 + -17 * 29 + -3554 * 1 ? o + (6615 + 289 * -20 + 7 * -119) : o === 3707 * 1 + -23 * 391 + -2663 * -2 ? o + (-4981 * 1 + -516 + 2 * 2749) : o)));
}
function zr(o) {
  for (; (eA = me()) && eA < -4247 * -1 + 103 * 91 + -4529 * 3; ) HA();
  return _i(o) > -10954 + 10956 * 1 || _i(eA) > 9065 + 881 * -3 + -917 * 7 ? "" : " ";
}
function Xr(o, i) {
  for (; --i && HA() && !(eA < 48 || eA > 2 * -2951 + -1205 + 7209 || eA > 57 && eA < -6 * -33 + 2277 + 482 * -5 || eA > 70 && eA < 7621 + -2 * -4058 + 391 * -40); ) ;
  return ai(o, Qo() + (i < 324 * -12 + 5046 + 18 * -64 && me() == -1239 * 1 + 191 * 11 + 10 * -83 && HA() == 1334 + -434 * 3));
}
function zi(o) {
  for (; HA(); ) switch (eA) {
    case o:
      return YA;
    case 34:
    case 6654 + -2354 * 2 + -1907:
      o !== -1592 * 3 + 6670 + -1860 && o !== -5976 + 760 * 8 + -1 * 65 && zi(eA);
      break;
    case -7 * 1367 + 3653 + 4 * 1489:
      o === -71 * 109 + -1 * 7033 + 14813 && zi(o);
      break;
    case -7639 * 1 + 436 + 7295:
      HA();
      break;
  }
  return YA;
}
function $r(o, i) {
  for (; HA() && o + eA !== 1 * 5725 + -1120 + -4558 + 10; ) if (o + eA === -1355 + -6445 * 1 + -2614 * -3 + (-2 * -2109 + 2072 + -44 * 142) && me() === 7666 + -4479 * -2 + -16577) break;
  return "/*" + ai(i, YA - (-4 * 2360 + -3193 * 1 + 6317 * 2)) + "*" + Hg(o === 47 ? o : HA());
}
function AC(o) {
  for (; !_i(me()); ) HA();
  return ai(o, YA);
}
function eC(o) {
  return _r(so("", null, null, null, [""], o = Vr(o), 49 * -36 + 71 * -77 + -7231 * -1, [-2062 * -2 + -6678 + 2 * 1277], o));
}
function so(o, i, t, e, A, g, n, I, a) {
  for (var r = 0, B = -2098 * -4 + -5062 + -3330, C = n, x = 137 * 66 + -8716 + -1 * 326, s = 3095 * 2 + -3 * 3001 + 2813, E = 3068 + -424 * -2 + -3916, d = 1, u = -562 * 3 + -1 * -8567 + -6880, c = 1 * -2128 + 2819 + -230 * 3, h = 0, m = "", R = A, M = g, U = e, w = m; u; ) switch (E = h, h = HA()) {
    case -399 * 19 + 1 * 5766 + 1855:
      if (E != -2703 * -3 + 1946 + 203 * -49 && iA(w, C - (3 * 358 + 1 * 7843 + 8916 * -1)) == -9886 + -296 * 24 + 8524 * 2) {
        Bo(w += N(pi(h), "&", "&\f"), "&\f", aa(r ? I[r - (-23 * -42 + 9222 + -61 * 167)] : -1 * -6392 + -5398 + -994)) != -(-3 * -3314 + 4698 + 14639 * -1) && (c = -(-9567 * -1 + 4207 + -13773 * 1));
        break;
      }
    case 1252 * 1 + 7574 + 7 * -1256:
    case -4092 + 7 * -145 + 5146:
    case 208 + 11 * 670 + 7487 * -1:
      w += pi(h);
      break;
    case -3 * 3083 + -4753 + -14011 * -1:
    case 883 * -3 + 9391 + 33 * -204:
    case -4309 + 168 * 41 + 1 * -2566:
    case 65 * 40 + -8851 + -61 * -103:
      w += zr(E);
      break;
    case -14879 + -1361 * -11:
      w += Xr(Qo() - 1, 1 * -272 + -215 * 6 + 1569);
      continue;
    case -6146 + -9031 * -1 + 6 * -473:
      switch (me()) {
        case -9655 + 436 * 1 + -49 * -189:
        case -3261 + -9 * -918 + -4954:
          st(tC($r(HA(), Qo()), i, t, a), a);
          break;
        default:
          w += "/";
      }
      break;
    case (3 * 1002 + -3760 * -2 + 1 * -10403) * d:
      I[r++] = PA(w) * c;
    case 125 * d:
    case 59:
    case -5281 * 1 + 94 * -61 + 11015:
      switch (h) {
        case 27 * -367 + 9852 + 57:
        case 4892 + -4767 * 1:
          u = 1 * 4781 + 1 * -2785 + -1996;
        case 3 * 3092 + -1512 * -1 + -10729 + B:
          c == -(1397 + -11 * 411 + -3125 * -1) && (w = N(w, /\f/g, "")), s > -8326 + 8326 * 1 && PA(w) - C && st(s > 1621 * 5 + 3409 * -1 + -4664 ? Ln(w + ";", e, t, C - (-348 * 13 + -593 * -1 + 3932), a) : Ln(N(w, " ", "") + ";", e, t, C - (-16869 + 16871 * 1), a), a);
          break;
        case -1732 + -218 * -1 + 1573:
          w += ";";
        default:
          if (st(U = vn(w, i, t, r, B, A, I, m, R = [], M = [], C, g), g), h === 2606 * -1 + 2179 + -275 * -2)
            if (B === -5094 + 146 * 1 + -4948 * -1) so(w, i, U, U, R, g, C, I, M);
            else switch (x === 99 && iA(w, -7736 + -9 * 76 + -8423 * -1) === 110 ? 41 * 105 + 1 * -7734 + -3529 * -1 : x) {
              case -6331 * -1 + -1 * 7022 + -7 * -113:
              case -9879 + 1381 * -1 + 11368:
              case 8740 + -2 * -3544 + -15719:
              case 115:
                so(o, U, U, e && st(vn(o, U, U, -10391 + 1 * 10391, 0, A, I, m, A, R = [], C, M), M), A, M, C, I, e ? R : M);
                break;
              default:
                so(w, U, U, U, [""], M, -5790 + 7937 * 1 + -2147, I, M);
            }
      }
      r = B = s = 35 * 193 + -15 * -225 + -10130, d = c = 4441 * -1 + 20 * 221 + -11 * -2, m = w = "", C = n;
      break;
    case 596 * 6 + -7164 + 3646:
      C = -7256 + 4 * -409 + 8893 + PA(w), s = E;
    default:
      if (d < 1 * 5197 + 6801 + -11997) {
        if (h == -1431 * -2 + -5353 + -1307 * -2) --d;
        else if (h == -1 * 5538 + -31 * 201 + 11894 && d++ == 0 && Zr() == 1618 + -1 * 1493) continue;
      }
      switch (w += Hg(h), h * d) {
        case 38:
          c = B > -3614 * 2 + -282 * 31 + 7985 * 2 ? -7928 + -169 * 2 + 8267 : (w += "\f", -(13195 + -18 * 733));
          break;
        case 5795 * -1 + 4 * 2171 + -2845:
          I[r++] = (PA(w) - (-8053 + -5 * 1543 + 1 * 15769)) * c, c = -8859 + 1807 * -1 + 10667;
          break;
        case 64:
          me() === -1283 * 1 + -7968 + 9296 && (w += pi(HA())), x = me(), B = C = PA(m = w += AC(Qo())), h++;
          break;
        case -13535 + -70 * -194:
          E === -1 * -2918 + -1 * -1709 + -4582 && PA(w) == -2 * 2578 + -13 * -159 + 11 * 281 && (d = 8485 + 1 * -4087 + -4398 * 1);
      }
  }
  return g;
}
function vn(o, i, t, e, A, g, n, I, a, r, B, C) {
  for (var x = A - 1, s = A === 1 * -958 + 7165 + -6207 ? g : [""], E = Ca(s), d = 17 * 167 + -2 * 640 + 1559 * -1, u = 1 * -233 + 12 * -405 + 11 * 463, c = -134 * 12 + -3608 + -32 * -163; d < e; ++d) for (var h = 12393 + 4131 * -3, m = Ze(o, x + (-9583 + -86 * -14 + -20 * -419), x = aa(u = n[d])), R = o; h < E; ++h) (R = ra(u > 7 * -1187 + -18 * 319 + 1 * 14051 ? s[h] + " " + m : N(m, /&\f/g, s[h]))) && (a[c++] = R);
  return Ii(o, i, t, A === -2042 * 4 + 991 * 5 + 3213 ? gi : I, a, r, B, C);
}
function tC(o, i, t, e) {
  return Ii(o, i, t, na, Hg(jr()), Ze(o, 3 * -1803 + -9410 + 14821, -(-1765 * 1 + -5346 * -1 + -1 * 3579)), 3026 + 1 * -3026, e);
}
function Ln(o, i, t, e, A) {
  return Ii(o, i, t, Og, Ze(o, -7044 + 219 * 29 + 693, e), Ze(o, e + (-2 * -2448 + -3910 + -985 * 1), -(-6318 + -2 * -3199 + -79)), e, A);
}
function Qa(o, i, t) {
  switch (Pr(o, i)) {
    case 4534 + -1 * -7377 + 74 * -92:
      return H + "print-" + o + o;
    case -2 * 3841 + -7957 + 21376:
    case 1201 * -1 + 3394 + 1004 * 2:
    case 1 * -3011 + 5573 * 1 + 3 * 205:
    case 2321 * 1 + 798 + 314:
    case 2660 + 2 * -4933 + -2949 * -3:
    case 2546 + -7 * -273:
    case -1 * 71 + 13 * -23 + 3291:
    case 5572:
    case -856 + 1 * 7212:
    case -2750 + -1 * -2581 + 6013:
    case -3359 * -1 + 8049 * -1 + -111 * -71:
    case -8913 * -1 + 3634 + -5902:
    case 3005:
    case 1647 * 4 + -4916 + -13 * -363:
    case 10354 + -2 * -4754 + -59 * 237:
    case 5623:
    case 1423 * 1 + 1 * -8807 + -1229 * -11:
    case 17421 + 6411 * -2:
    case 4855:
    case 4215:
    case -2 * -5123 + 953 + -26 * 185:
    case -6513 + 59 * 29 + 9911:
    case 1536 + 1802 * 4 + -3379:
    case -9845 + -13 * -1 + 5151 * 3:
    case -2484 * -1 + -2252 + 3597:
      return H + o + o;
    case 1 * -5282 + 139 + 9932:
      return ft + o + o;
    case 5349:
    case -290 * 21 + -4749 + 1 * 15085:
    case -8 * 996 + 7854 + 1231 * 4:
    case 11263 + 13421 * -1 + 78 * 117:
    case -567 * -7 + 9842 + -11055:
      return H + o + ft + o + T + o + o;
    case 8408 + -3413 * 1 + 941:
      switch (iA(o, i + (1 * 5739 + -3 * -705 + -7843))) {
        case -946 * 1 + -415 * -18 + -6410:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case -9543 + -9651 * -1:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 1 * 8557 + 2217 + -1 * 10729:
          return H + o + T + N(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 1427 + 31 * -13 + 5804:
    case -68 * -23 + 2867 + 163 * -1:
    case 2903:
      return H + o + T + o + o;
    case -8957 + 1 * -4359 + 161 * 121:
      return H + o + T + "flex-" + o + o;
    case -279 * -37 + -7203 + 13 * 159:
      return H + o + N(o, /(\w+).+(:[^]+)/, H + "box-$1$2" + T + "flex-$1$2") + o;
    case 27 * -50 + -485 * -15 + -482:
      return H + o + T + "flex-item-" + N(o, /flex-|-self/g, "") + (_A(o, /flex-|baseline/) ? "" : T + "grid-row-" + N(o, /flex-|-self/g, "")) + o;
    case -1 * 2557 + -8235 + 15467:
      return H + o + T + "flex-line-pack" + N(o, /align-content|flex-|-self/g, "") + o;
    case -1103 + 71 * 1 + 940 * 7:
      return H + o + T + N(o, "shrink", "negative") + o;
    case 5292:
      return H + o + T + N(o, "basis", "preferred-size") + o;
    case 1723 * 3 + 10136 + 1849 * -5:
      return H + "box-" + N(o, "-grow", "") + H + o + T + N(o, "grow", "positive") + o;
    case 4554:
      return H + N(o, /([^-])(transform)/g, "$1" + H + "$2") + o;
    case -46 + -1226 * 7 + 14815:
      return N(N(N(o, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), o, "") + o;
    case 4084 + -3 * -1437 + -2900:
    case 3959:
      return N(o, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return N(N(o, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + o + o;
    case 3 * 1981 + 3935 * 1 + -17 * 334:
      if (!_A(o, /flex-|baseline/)) return T + "grid-column-align" + Ze(o, i) + o;
      break;
    case 3311 + 17 * 274 + -5377:
    case -9583 + 951 * 2 + 11041:
      return T + N(o, "template-", "") + o;
    case 4384:
    case 9809 * -1 + -4 * 2281 + -1 * -22549:
      return t && t.some(function(e, A) {
        return i = A, _A(e.props, /grid-\w+-end/);
      }) ? ~Bo(o + (t = t[i].value), "span", 4435 * -1 + -335 * -27 + 10 * -461) ? o : T + N(o, "-start", "") + o + T + "grid-row-span:" + (~Bo(t, "span", 1270 + 601 * -14 + 7144) ? _A(t, /\d+/) : +_A(t, /\d+/) - +_A(o, /\d+/)) + ";" : T + N(o, "-start", "") + o;
    case 123 + -1591 * -3:
    case -3418 + -14 * -539:
      return t && t.some(function(e) {
        return _A(e.props, /grid-\w+-start/);
      }) ? o : T + N(N(o, "-end", "-span"), "span ", "") + o;
    case -310 * 31 + 2847 + 2 * 5429:
    case 5542 * -1 + -7842 + 19 * 893:
    case 1738 + 1 * -980 + 10 * 331:
    case -1 * -2873 + -6685 + -6344 * -1:
      return N(o, /(.+)-inline(.+)/, H + "$1$2") + o;
    case 8293 * 1 + 12152 * -1 + 11975 * 1:
    case -7398 + 1 * -4226 + 18683:
    case -5 * -1629 + -1255 * 3 + -1373 * -1:
    case 7493 + -178 * 11:
    case 2349 + 6 * 516:
    case 2482 + 7 * 1289 + 4 * -1451:
    case 3 * 644 + 407 * -11 + 7478:
    case 8431 + -1877 * 2:
    case 792 + -27 * 212 + -35 * -299:
    case -368 * 2 + -18 * -1 + 6507:
    case 7721 + -135 * 20:
    case 2734 * 3 + 9730 + 627 * -21:
      if (PA(o) - (4967 * -1 + 2608 + 2360) - i > -10 * -202 + 9090 + -11104) switch (iA(o, i + (-2268 + 5455 * 1 + -3 * 1062))) {
        case -192 + -7 * -43:
          if (iA(o, i + (-11578 + -11582 * -1)) !== 2304 + -823 * 7 + -3502 * -1) break;
        case 102:
          return N(o, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + ft + (iA(o, i + (-9812 + 5 * 1026 + 4685)) == -2885 + -1 * 6358 + -9351 * -1 ? "$3" : "$2-$3")) + o;
        case 307 * -13 + -2376 + 14 * 463:
          return ~Bo(o, "stretch", 0) ? Qa(N(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case -5 * 773 + -7356 + -1 * -16373:
    case 719 * 2 + -8538 * -1 + -3 * 1352:
      return N(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, g, n, I, a, r) {
        return T + A + ":" + g + r + (n ? T + A + "-span:" + (I ? a : +a - +g) + r : "") + o;
      });
    case -9686 * 1 + -675 * 14 + 4817 * 5:
      if (iA(o, i + (6229 * 1 + 8850 + -15073)) === -11282 + 3 * 3801) return N(o, ":", ":" + H) + o;
      break;
    case 2 * -1511 + -2308 + 5887 * 2:
      switch (iA(o, iA(o, 8124 + -211 * 35 + -725) === -11 * 874 + -2 * 4393 + 18445 ? 13 * 6 + 1 * 5084 + -4 * 1286 : -1803 + 68 * -35 + 2 * 2097)) {
        case -2 * 1627 + 15 * 183 + 629:
          return N(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (iA(o, 1 * 8978 + -83 * 101 + -83 * 7) === 3752 * -1 + -2 * 3767 + -3 * -3777 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + T + "$2box$3") + o;
        case 100:
          return N(o, ":", ":" + T) + o;
      }
      break;
    case -2607 + 89 * -14 + 9572:
    case 251 * 5 + -8927 + 10319:
    case 255 + 8 * 235:
    case 8057 + -413 * 10:
    case 2391:
      return N(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function bo(o, i) {
  for (var t = "", e = -1 * -4679 + 4231 * -1 + 224 * -2; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function oC(o, i, t, e) {
  switch (o.type) {
    case Tr:
      if (o.children.length) break;
    case Kr:
    case Og:
      return o.return = o.return || o.value;
    case na:
      return "";
    case Ia:
      return o.return = o.value + "{" + bo(o.children, e) + "}";
    case gi:
      if (!PA(o.value = o.props.join(","))) return "";
  }
  return PA(t = bo(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function iC(o) {
  var i = Ca(o);
  return function(t, e, A, g) {
    for (var n = "", I = 3881 + 1 * -7058 + 3177; I < i; I++) n += o[I](t, e, A, g) || "";
    return n;
  };
}
function gC(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function nC(o, i, t, e) {
  if (o.length > -(-7825 * -1 + 3772 + -11596) && !o.return)
    switch (o.type) {
      case Og:
        o.return = Qa(o.value, o.length, t);
        return;
      case Ia:
        return bo([ge(o, { value: N(o.value, "@", "@" + H) })], e);
      case gi:
        if (o.length) return qr(t = o.props, function(A) {
          switch (_A(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ve(ge(o, { props: [N(A, /:(read-\w+)/, ":" + ft + "$1")] }));
              var g = {};
              g.props = [A], ve(ge(o, g)), Vi(o, { props: Mn(t, e) });
              break;
            case "::placeholder":
              ve(ge(o, { props: [N(A, /:(plac\w+)/, ":" + H + "input-$1")] })), ve(ge(o, { props: [N(A, /:(plac\w+)/, ":" + ft + "$1")] })), ve(ge(o, { props: [N(A, /:(plac\w+)/, T + "input-$1")] }));
              var n = {};
              n.props = [A], ve(ge(o, n)), Vi(o, { props: Mn(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var IC = b, O = {}, Ne = typeof process < "u" && void (-79 * 83 + 8299 + -1742) !== O && (O.REACT_APP_SC_ATTR || O.SC_ATTR) || "data-styled", sa = "active", ca = "data-styled-version", ri = "6.1.11", Kg = `/*!sc*/
`, Tg = typeof window < "u" && "HTMLElement" in window, aC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-6079 * 1 + 18 * -409 + 13441) !== O && O.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && O.REACT_APP_SC_DISABLE_SPEEDY !== "" ? O.REACT_APP_SC_DISABLE_SPEEDY !== "false" && O.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-9105 + 9415 * -1 + 10 * 1852) !== O && void (-3501 * 1 + 1 * 2038 + 1463) !== O.SC_DISABLE_SPEEDY && O.SC_DISABLE_SPEEDY !== "" ? O.SC_DISABLE_SPEEDY !== "false" && O.SC_DISABLE_SPEEDY : O.NODE_ENV !== "production"), Jn = /invalid hook call/i, eo = /* @__PURE__ */ new Set(), rC = function(o, i) {
  if (O.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var g = !0;
      console.error = function(n) {
        for (var I = [], a = 390 * 25 + -3416 + 3 * -2111; a < arguments.length; a++) I[a - (4039 + 2 * -1987 + -64)] = arguments[a];
        Jn.test(n) ? (g = !1, eo.delete(e)) : A.apply(void (30 + -644 * -11 + -7114), qe([n], I, !1));
      }, NA(), g && !eo.has(e) && (console.warn(e), eo.add(e));
    } catch (n) {
      Jn.test(n.message) && eo.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Ci = Object.freeze([]), _e = Object.freeze({});
function CC(o, i, t) {
  return void (-7554 + 7554 * 1) === t && (t = _e), o.theme !== t.theme && o.theme || i || t.theme;
}
var Xi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), BC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, QC = /(^-|-$)/g;
function Un(o) {
  return o.replace(BC, "-").replace(QC, "");
}
var sC = /(a)(d)/gi, to = -276 + -3 * -1417 + -3923 * 1, Wn = function(o) {
  return String.fromCharCode(o + (o > -19 * -329 + 4 * -1390 + 333 * -2 ? 3 * 1003 + -8276 + 5306 : 2 * -389 + -508 * 1 + 1383));
};
function $i(o) {
  var i, t = "";
  for (i = Math.abs(o); i > to; i = i / to | -1976 + 12 * -811 + 5854 * 2) t = Wn(i % to) + t;
  return (Wn(i % to) + t).replace(sC, "$1-$2");
}
var yi, xa = 537 * 13 + 786 + -2386, de = function(o, i) {
  for (var t = i.length; t; ) o = 33 * o ^ i.charCodeAt(--t);
  return o;
}, Ea = function(o) {
  return de(xa, o);
};
function cC(o) {
  return $i(Ea(o) >>> 3 * -2549 + 2870 + -1 * -4777);
}
function da(o) {
  return O.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Di(o) {
  return typeof o == "string" && (O.NODE_ENV === "production" || o.charAt(4922 * 2 + 6994 + -1 * 16838) === o.charAt(-3 * 2087 + 2706 + -45 * -79).toLowerCase());
}
var LA = {};
LA.childContextTypes = !0, LA.contextType = !0, LA.contextTypes = !0, LA.defaultProps = !0, LA.displayName = !0, LA.getDefaultProps = !0, LA.getDerivedStateFromError = !0, LA.getDerivedStateFromProps = !0, LA.mixins = !0, LA.propTypes = !0, LA.type = !0;
var ne = {};
ne.name = !0, ne.length = !0, ne.prototype = !0, ne.caller = !0, ne.callee = !0, ne.arguments = !0, ne.arity = !0;
var xe = {};
xe.$$typeof = !0, xe.compare = !0, xe.defaultProps = !0, xe.displayName = !0, xe.propTypes = !0, xe.type = !0;
var Ue = {};
Ue.$$typeof = !0, Ue.render = !0, Ue.defaultProps = !0, Ue.displayName = !0, Ue.propTypes = !0;
var la = typeof Symbol == "function" && Symbol.for, ua = la ? Symbol.for("react.memo") : -101308 + -1 * 31269 + -4 * -48173, xC = la ? Symbol.for("react.forward_ref") : -41 * 139 + -35477 * -2 + -5143, EC = LA, dC = ne, ha = xe, lC = ((yi = {})[xC] = Ue, yi[ua] = ha, yi);
function Yn(o) {
  return ("type" in (i = o) && i.type.$$typeof) === ua ? ha : "$$typeof" in o ? lC[o.$$typeof] : EC;
  var i;
}
var uC = Object.defineProperty, hC = Object.getOwnPropertyNames, On = Object.getOwnPropertySymbols, fC = Object.getOwnPropertyDescriptor, pC = Object.getPrototypeOf, Hn = Object.prototype;
function fa(o, i, t) {
  if (typeof i != "string") {
    if (Hn) {
      var e = pC(i);
      e && e !== Hn && fa(o, e, t);
    }
    var A = hC(i);
    On && (A = A.concat(On(i)));
    for (var g = Yn(o), n = Yn(i), I = 1 * -7699 + 2394 + 5305; I < A.length; ++I) {
      var a = A[I];
      if (!(a in dC || t && t[a] || n && a in n || g && a in g)) {
        var r = fC(i, a);
        try {
          uC(o, a, r);
        } catch {
        }
      }
    }
  }
  return o;
}
function ze(o) {
  return typeof o == "function";
}
function Pg(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function ue(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function Kn(o, i) {
  if (-52 * 38 + -3497 * 1 + -1 * -5473 === o.length) return "";
  for (var t = o[-7654 + -43 * -178], e = 19 * -17 + -8743 * 1 + 9067; e < o.length; e++) t += o[e];
  return t;
}
function Xe(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function Ag(o, i, t) {
  if (void (9541 + 14 * -659 + -315) === t && (t = !1), !t && !Xe(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = 18 * -541 + -536 * 5 + 1 * 12418; e < i.length; e++) o[e] = Ag(o[e], i[e]);
  else if (Xe(i))
    for (var e in i) o[e] = Ag(o[e], i[e]);
  return o;
}
function qg(o, i) {
  var t = {};
  t.value = i, Object.defineProperty(o, "toString", t);
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
  for (var o = [], i = 107 * 87 + 23 * 101 + -11632; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[-3204 + -4591 * 1 + -7795 * -1], e = [], A = 2004 + -1 * 5779 + 3776, g = o.length; A < g; A += 1) e.push(o[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function it(o) {
  for (var i = [], t = 7 * -439 + -7321 + -10395 * -1; t < arguments.length; t++) i[t - (-3383 * 1 + 3 * 1706 + -1734)] = arguments[t];
  return O.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > -8839 + 1 * 5987 + -62 * -46 ? " Args: ".concat(i.join(", ")) : "")) : new Error(DC.apply(void (-5215 + 2734 * 3 + 103 * -29), qe([yC[o]], i, !1)).trim());
}
var wC = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(-1 * -634 + -3016 + 2894), this.length = 5016 + -219 * 32 + 2504, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = 6133 + 1927 * 1 + -155 * 52, e = 3 * -2437 + -2098 + 9409; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, g = A; i >= g; ) if ((g <<= 1 * -305 + -7192 + 7498) < 6 * -1555 + -5 * 87 + 3255 * 3) throw it(7113 * 1 + 1678 + -8775, "".concat(i));
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(e), this.length = g;
      for (var n = A; n < g; n++) this.groupSizes[n] = -475 * 11 + 1 * 8179 + -2954;
    }
    for (var I = this.indexOfGroup(i + (-3076 + -1 * -3077)), a = (n = 1 * -3345 + -4423 * -2 + -1 * 5501, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[i]++, I++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 0;
      for (var g = e; g < A; g++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -7897 * 1 + 83 * 107 + -328 * 3 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), g = A + e, n = A; n < g; n++) t += "".concat(this.tag.getRule(n)).concat(Kg);
    return t;
  }, o;
}(), mC = 3137 + 1763 * 2 + -6662 << 2 * -3724 + 3081 + -4397 * -1, co = /* @__PURE__ */ new Map(), Go = /* @__PURE__ */ new Map(), xo = -11 * 566 + 7767 * -1 + 2 * 6997, oo = function(o) {
  if (co.has(o)) return co.get(o);
  for (; Go.has(xo); ) xo++;
  var i = xo++;
  if (O.NODE_ENV !== "production" && ((460 * -11 + 9039 + -3979 | i) < -13 * 224 + -9138 + 12050 || i > mC)) throw it(-1 * 6113 + -127 * -12 + 4605, "".concat(i));
  return co.set(o, i), Go.set(i, o), i;
}, bC = function(o, i) {
  xo = i + 1, co.set(o, i), Go.set(i, o);
}, GC = "style[".concat(Ne, "][").concat(ca, '="').concat(ri, '"]'), kC = new RegExp("^".concat(Ne, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), NC = function(o, i, t) {
  for (var e, A = t.split(","), g = 4481 * 1 + -5845 + -124 * -11, n = A.length; g < n; g++) (e = A[g]) && o.registerName(i, e);
}, FC = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (9 * -227 + -14 * 137 + 3961) !== t ? t : "").split(Kg), A = [], g = -1 * -7441 + -932 + -6509, n = e.length; g < n; g++) {
    var I = e[g].trim();
    if (I) {
      var a = I.match(kC);
      if (a) {
        var r = 0 | parseInt(a[1], 10), B = a[1415 + -1 * -3071 + -1121 * 4];
        62 * -46 + -7257 + -919 * -11 !== r && (bC(B, r), NC(o, B, a[3857 + -1 * 2026 + -1828]), o.getTag().insertRules(r, A)), A.length = -1 * 4594 + -2953 * 3 + 11 * 1223;
      } else A.push(I);
    }
  }
};
function SC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var pa = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(Ne, "]")));
    return a[a.length - (4 * -1203 + 2215 + 433 * 6)];
  }(t), g = void (6420 + -1605 * 4) !== A ? A.nextSibling : null;
  e.setAttribute(Ne, sa), e.setAttribute(ca, ri);
  var n = SC();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, g), e;
}, RC = function() {
  function o(i) {
    this.element = pa(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, g = e.length; A < g; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw it(-1629 + -4001 * 2 + 1206 * 8);
    }(this.element), this.length = 19 * -97 + 5196 * -1 + 1 * 7039;
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
}(), MC = function() {
  function o(i) {
    this.element = pa(i), this.nodes = this.element.childNodes, this.length = -4629 + 1125 * 8 + -4371;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= 19 * 507 + 3649 + -13282) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), vC = function() {
  function o(i) {
    this.rules = [], this.length = -2568 + -321 * -8;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -43 * -68 + 9228 + 1 * -12152, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, 19 * 46 + 1976 * 1 + -2849), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), Tn = Tg, LC = { isServer: !Tg, useCSSOMInjection: !aC }, ya = function() {
  function o(i, t, e) {
    void (3586 * 1 + -2863 * -1 + -6449) === i && (i = _e), void (6339 + -8426 * -1 + -14765) === t && (t = {});
    var A = this;
    this.options = mA(mA({}, LC), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Tg && Tn && (Tn = !1, function(g) {
      for (var n = document.querySelectorAll(GC), I = -9783 + 3261 * 3, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(Ne) !== sa && (FC(g, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), qg(this, function() {
      return function(g) {
        for (var n = g.getTag(), I = n.length, a = "", r = function(C) {
          var x = function(c) {
            return Go.get(c);
          }(C);
          if (void (-5190 + -34 * -289 + -4636) === x) return "continue";
          var s = g.names.get(x), E = n.getGroup(C);
          if (void (-9073 + -403 * -12 + -19 * -223) === s || -5293 * 1 + -9101 + 14394 === E.length) return "continue";
          var d = "".concat(Ne, ".g").concat(C, '[id="').concat(x, '"]'), u = "";
          void (710 * 13 + 7883 * -1 + -1347) !== s && s.forEach(function(c) {
            c.length > 3713 * -2 + 3902 + 3524 && (u += "".concat(c, ","));
          }), a += "".concat(E).concat(d, '{content:"').concat(u, '"}').concat(Kg);
        }, B = -2070 + 2 * 1035; B < I; B++) r(B);
        return a;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return oo(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return void (401 * 8 + -3997 + 263 * 3) === t && (t = !0), new o(mA(mA({}, this.options), i), this.gs, t && this.names || void (-17 * -43 + -1810 + 1079));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || -9172 + -3262 * 1 + -1 * -12434) + (-2 * -2102 + 125 * -49 + 961 * 2);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new vC(A) : e ? new RC(A) : new MC(A);
    }(this.options), new wC(i)));
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
    this.tag = void 0;
  }, o;
}(), JC = /&/g, UC = /^\s*\/\/.*$/gm;
function Da(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Da(t.children, i)), t;
  });
}
function wa(o) {
  var i, t, e, A = o === void 0 ? _e : o, g = A.options, n = void (8524 * 1 + -9166 + 642) === g ? _e : g, I = A.plugins, a = void (-11 * 877 + 2305 * 2 + 5037) === I ? Ci : I, r = function(x, s, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > -11848 + -4 * -2962 ? ".".concat(i) : x;
  }, B = a.slice();
  B.push(function(x) {
    x.type === gi && x.value.includes("&") && (x.props[0] = x.props[-9484 + -2 * -4103 + 1278].replace(JC, t).replace(e, r));
  }), n.prefix && B.push(nC), B.push(oC);
  var C = function(x, s, E, d) {
    void (49 * -139 + 6983 + -2 * 86) === s && (s = ""), void (-8134 + -1 * 6894 + 52 * 289) === E && (E = ""), void (-6629 * 1 + 3017 + 3612) === d && (d = "&"), i = d, t = s, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = x.replace(UC, ""), c = eC(E || s ? "".concat(E, " ").concat(s, " { ").concat(u, " }") : u);
    n.namespace && (c = Da(c, n.namespace));
    var h = [];
    return bo(c, iC(B.concat(gC(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(x, s) {
    return s.name || it(1590 + 1 * -6871 + 5296), de(x, s.name);
  }, xa).toString() : "", C;
}
var WC = new ya(), eg = wa(), jg = ke.createContext({ shouldForwardProp: void (-7137 * 1 + -8169 + 15306), styleSheet: WC, stylis: eg });
jg.Consumer;
var YC = ke.createContext(void (-21 * -203 + 6964 + -11227));
function tg() {
  return Qe(jg);
}
function OC(o) {
  var i = fA(o.stylisPlugins), t = i[-526 + 8 * 301 + -1882], e = i[1], A = tg().styleSheet, g = bA(function() {
    var B = A, C = {};
    return C.useCSSOMInjection = !1, o.sheet ? B = o.sheet : o.target && (B = B.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (B = B.reconstructWithOptions(C)), B;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), n = bA(function() {
    var B = {};
    B.namespace = o.namespace, B.prefix = o.enableVendorPrefixes;
    var C = {};
    return C.options = B, C.plugins = t, wa(C);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  q(function() {
    Hr(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var I = bA(function() {
    var B = {};
    return B.shouldForwardProp = o.shouldForwardProp, B.styleSheet = g, B.stylis = n, B;
  }, [o.shouldForwardProp, g, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, ke.createElement(jg.Provider, a, ke.createElement(YC.Provider, r, o.children));
}
var Pn = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, g) {
      void (-1 * -3117 + 2458 + -5575) === g && (g = eg);
      var n = e.name + g.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, g(e.rules, n, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, qg(this, function() {
      throw it(-4 * 877 + 107 * -89 + 13043, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return void (-903 + 5 * -641 + -52 * -79) === i && (i = eg), this.name + i.hash;
  }, o;
}(), HC = function(o) {
  return o >= "A" && o <= "Z";
};
function qn(o) {
  for (var i = "", t = 7439 + -543 * -3 + -2267 * 4; t < o.length; t++) {
    var e = o[t];
    if (t === 1 && e === "-" && o[-2999 * -1 + 2171 + -5170] === "-") return o;
    HC(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var ma = function(o) {
  return o == null || o === !1 || o === "";
}, ba = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var g = o[A];
    o.hasOwnProperty(A) && !ma(g) && (Array.isArray(g) && g.isCss || ze(g) ? e.push("".concat(qn(A), ":"), g, ";") : Xe(g) ? e.push.apply(e, qe(qe(["".concat(A, " {")], ba(g), !1), ["}"], !1)) : e.push("".concat(qn(A), ": ").concat((i = A, (t = g) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 4987 * 2 + -2 * 4681 + -18 * 34 === t || i in IC || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function be(o, i, t, e) {
  if (ma(o)) return [];
  if (Pg(o)) return [".".concat(o.styledComponentId)];
  if (ze(o)) {
    if (!ze(g = o) || g.prototype && g.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return O.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Pn || Xe(A) || A === null || console.error("".concat(da(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), be(A, i, t, e);
  }
  var g;
  return o instanceof Pn ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : Xe(o) ? ba(o) : Array.isArray(o) ? Array.prototype.concat.apply(Ci, o.map(function(n) {
    return be(n, i, t, e);
  })) : [o.toString()];
}
function KC(o) {
  for (var i = -277 + -83 * -83 + -19 * 348; i < o.length; i += 4875 + -1 * 4874) {
    var t = o[i];
    if (ze(t) && !Pg(t)) return !1;
  }
  return !0;
}
var TC = Ea(ri), PC = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = O.NODE_ENV === "production" && (e === void 0 || e.isStatic) && KC(i), this.componentId = t, this.baseHash = de(TC, t), this.baseStyle = e, ya.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ue(A, this.staticRulesId);
      else {
        var g = Kn(be(this.rules, i, t, e)), n = $i(de(this.baseHash, g) >>> -91 * -29 + -9893 + 7254);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(g, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = ue(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = de(this.baseHash, e.hash), r = "", B = 0; B < this.rules.length; B++) {
        var C = this.rules[B];
        if (typeof C == "string") r += C, O.NODE_ENV !== "production" && (a = de(a, C));
        else if (C) {
          var x = Kn(be(C, i, t, e));
          a = de(a, x + B), r += x;
        }
      }
      if (r) {
        var s = $i(a >>> 0);
        t.hasNameForId(this.componentId, s) || t.insertRules(this.componentId, s, e(r, ".".concat(s), void (-2 * -3137 + -126 + -4 * 1537), this.componentId)), A = ue(A, s);
      }
    }
    return A;
  }, o;
}(), Ga = ke.createContext(void (-4621 + -4621 * -1));
Ga.Consumer;
var wi = {}, jn = /* @__PURE__ */ new Set();
function qC(o, i, t) {
  var e = Pg(o), A = o, g = !Di(o), n = i.attrs, I = void (-7689 * -1 + 9521 + -17210) === n ? Ci : n, a = i.componentId, r = void (-6719 + 3 * 2433 + 4 * -145) === a ? function(M, U) {
    var w = typeof M != "string" ? "sc" : Un(M);
    wi[w] = (wi[w] || 1 * -7481 + 2648 + 537 * 9) + (-1 * 1879 + 4116 + 4 * -559);
    var j = "".concat(w, "-").concat(cC(ri + w + wi[w]));
    return U ? "".concat(U, "-").concat(j) : j;
  }(i.displayName, i.parentComponentId) : a, B = i.displayName, C = B === void 0 ? function(M) {
    return Di(M) ? "styled.".concat(M) : "Styled(".concat(da(M), ")");
  }(o) : B, x = i.displayName && i.componentId ? "".concat(Un(i.displayName), "-").concat(i.componentId) : i.componentId || r, s = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, E = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var u = i.shouldForwardProp;
      E = function(M, U) {
        return d(M, U) && u(M, U);
      };
    } else E = d;
  }
  var c = new PC(t, x, e ? A.componentStyle : void 0);
  function h(M, U) {
    return function(w, j, pA) {
      var AA = w.attrs, SA = w.componentStyle, Z = w.defaultProps, nt = w.foldedComponentIds, Cn = w.styledComponentId, L0 = w.target, J0 = ke.useContext(Ga), U0 = tg(), xi = w.shouldForwardProp || U0.shouldForwardProp;
      O.NODE_ENV !== "production" && mo(Cn);
      var Bn = CC(j, J0, Z) || _e, VA = function(zt, rt, Xt) {
        var Me = {};
        Me.className = void (-5 * 1453 + 4283 * 2 + -1301 * 1), Me.theme = Xt;
        for (var li, se = mA(mA({}, rt), Me), ui = -1 * -3865 + 6991 + -5428 * 2; ui < zt.length; ui += 4868 + -349 * 25 + 3858) {
          var $t = ze(li = zt[ui]) ? li(se) : li;
          for (var ie in $t) se[ie] = ie === "className" ? ue(se[ie], $t[ie]) : ie === "style" ? mA(mA({}, se[ie]), $t[ie]) : $t[ie];
        }
        return rt.className && (se.className = ue(se.className, rt.className)), se;
      }(AA, j, Bn), It = VA.as || L0, at = {};
      for (var RA in VA) void (5317 * -1 + 3558 + -1759 * -1) === VA[RA] || RA[0] === "$" || RA === "as" || RA === "theme" && VA.theme === Bn || (RA === "forwardedAs" ? at.as = VA.forwardedAs : xi && !xi(RA, It) || (at[RA] = VA[RA], xi || O.NODE_ENV !== "development" || tr(RA) || jn.has(RA) || !Xi.has(It) || (jn.add(RA), console.warn('styled-components: it looks like an unknown prop "'.concat(RA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ei = function(zt, rt) {
        var Xt = tg(), Me = zt.generateAndInjectStyles(rt, Xt.styleSheet, Xt.stylis);
        return O.NODE_ENV !== "production" && mo(Me), Me;
      }(SA, VA);
      O.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(Ei);
      var di = ue(nt, Cn);
      return Ei && (di += " " + Ei), VA.className && (di += " " + VA.className), at[Di(It) && !Xi.has(It) ? "class" : "className"] = di, at.ref = pA, uA(It, at);
    }(m, M, U);
  }
  h.displayName = C;
  var m = ke.forwardRef(h), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, m.attrs = s, m.componentStyle = c, m.displayName = C, m.shouldForwardProp = E, m.foldedComponentIds = e ? ue(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : o, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(U) {
      for (var w = [], j = 7 * -958 + 5790 + 917; j < arguments.length; j++) w[j - (-6357 + -74 * -17 + -12 * -425)] = arguments[j];
      for (var pA = -1 * 6692 + -1619 + 8311, AA = w; pA < AA.length; pA++) Ag(U, AA[pA], !0);
      return U;
    }({}, A.defaultProps, M) : M;
  } }), O.NODE_ENV !== "production" && (rC(C, x), m.warnTooManyClasses = /* @__PURE__ */ function(M, U) {
    var w = {}, j = !1;
    return function(pA) {
      if (!j && (w[pA] = !0, Object.keys(w).length >= 200)) {
        var AA = U ? ' with the id of "'.concat(U, '"') : "";
        console.warn("Over ".concat(-10 * 206 + 5137 + -2877, " classes were generated for component ").concat(M).concat(AA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), j = !0, w = {};
      }
    };
  }(C, x)), qg(m, function() {
    return ".".concat(m.styledComponentId);
  }), g && fa(m, o, R), m;
}
function Zn(o, i) {
  for (var t = [o[9 * -607 + -6848 + -13 * -947]], e = -13 * 108 + 31 * -257 + -9371 * -1, A = i.length; e < A; e += 10 * -814 + 2506 + -115 * -49) t.push(i[e], o[e + (-3935 + -123 * -32)]);
  return t;
}
var Vn = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function jC(o) {
  for (var i = [], t = 1 * 8344 + 5940 + 14283 * -1; t < arguments.length; t++) i[t - (-660 + 3517 * 1 + -84 * 34)] = arguments[t];
  if (ze(o) || Xe(o)) return Vn(be(Zn(Ci, qe([o], i, !0))));
  var e = o;
  return 13 * 557 + -7916 + 675 === i.length && -2 * -2359 + -1 * 4106 + 1 * -611 === e.length && typeof e[3057 + 11 * -740 + 23 * 221] == "string" ? be(e) : Vn(be(Zn(e, i)));
}
function og(o, i, t) {
  if (void (179 * -33 + 9 * -1047 + 15330) === t && (t = _e), !i) throw it(11 * -331 + 4276 + -317 * 2, i);
  var e = function(A) {
    for (var g = [], n = -3 * 3301 + 9 * 359 + -1 * -6673; n < arguments.length; n++) g[n - (-474 + 411 * 8 + 2813 * -1)] = arguments[n];
    return o(i, t, jC.apply(void (-3 * 563 + 1 * -8387 + 10076), qe([A], g, !1)));
  };
  return e.attrs = function(A) {
    return og(o, i, mA(mA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return og(o, i, mA(mA({}, t), A));
  }, e;
}
var ka = function(o) {
  return og(qC, o);
}, Zt = ka;
Xi.forEach(function(o) {
  Zt[o] = ka(o);
});
O.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var io = "__sc-".concat(Ne, "__");
O.NODE_ENV !== "production" && O.NODE_ENV !== "test" && typeof window < "u" && (window[io] || (window[io] = -2957 * -1 + 2102 * 3 + -157 * 59), -6063 * 1 + 4 * 2402 + -3544 * 1 === window[io] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[io] += -346 * 7 + -8014 * 1 + 71 * 147);
const ZC = Zt.div`
  position: relative;
`, VC = Zt.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
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
const Eo = {};
Eo.CONTINUE_DETECTION = "continue-detection", Eo.SWITCH_CAMERA = "switch-camera", Eo.TOGGLE_MIRROR = "toggle-mirror";
const mi = Eo, ig = {};
ig.FIRST_FRAME = "first-frame", ig.FIRST_VALID_FRAME = "first-valid-frame";
const bi = ig, Na = {};
Na.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const _n = Na;
var Fa = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(Fa || {}), Ae = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(Ae || {}), _C = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(_C || {}), zC = ((o) => (o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(zC || {}), XC = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(XC || {}), $C = ((o) => (o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))($C || {});
const Sa = {};
Sa.EYE_NOT_PRESENT = "eye_not_present";
const zn = Sa, dA = {};
dA.CANDIDATE_SELECTION = "candidate_selection", dA.FACE_TOO_CLOSE = "face_too_close", dA.FACE_TOO_FAR = "face_too_far", dA.FACE_CENTERING = "face_centering", dA.FACE_NOT_PRESENT = "face_not_present", dA.SHARPNESS_TOO_LOW = "sharpness_too_low", dA.BRIGHTNESS_TOO_LOW = "brightness_too_low", dA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", dA.DEVICE_PITCHED = "device_pitched", dA.LEFT_EYE_NOT_PRESENT = "left_" + zn.EYE_NOT_PRESENT, dA.RIGHT_EYE_NOT_PRESENT = "right_" + zn.EYE_NOT_PRESENT, dA.MOUTH_NOT_PRESENT = "mouth_not_present", dA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", dA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const oA = dA, wA = {};
wA.isPresent = oA.FACE_NOT_PRESENT, wA.isNotPitched = oA.DEVICE_PITCHED, wA.isNotSmall = oA.FACE_TOO_FAR, wA.isNotLarge = oA.FACE_TOO_CLOSE, wA.isNotOutOfBounds = oA.FACE_CENTERING, wA.isNotDim = oA.BRIGHTNESS_TOO_LOW, wA.isNotBright = oA.BRIGHTNESS_TOO_HIGH, wA.isSharp = oA.SHARPNESS_TOO_LOW, wA.isLeftEyePresent = oA.LEFT_EYE_NOT_PRESENT, wA.isRightEyePresent = oA.RIGHT_EYE_NOT_PRESENT, wA.isMouthPresent = oA.MOUTH_NOT_PRESENT, wA.isMouthScoreNotTooHigh = oA.MOUTH_SCORE_TOO_HIGH, wA.isMouthScoreNotTooLow = oA.MOUTH_SCORE_TOO_LOW;
const AB = wA, gg = {};
gg.FRONT = "user", gg.REAR = "environment";
const Zg = gg, ng = {};
ng.AUTO_CAPTURE = "AUTO_CAPTURE", ng.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Ra = ng, ct = {};
ct.LOADING = "LOADING", ct.ERROR = "ERROR", ct.WAITING = "WAITING", ct.RUNNING = "RUNNING";
const hA = ct;
({ ...oA });
var eB = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(eB || {});
({ ...oA });
({ ...oA });
const Bi = At(void 0);
Bi.displayName = "AppStateContext";
function Se() {
  const o = Qe(Bi);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const tB = Bi.Provider;
class Ma extends JA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new Y("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === hA.ERROR ? null : this.props.children;
  }
}
D(Ma, "contextType", Bi);
const oB = Zt.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, iB = Zt.div`
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
function gB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const nB = ZI(
  ({ detectionDetails: o, isImageMirror: i }, t) => gB() ? (console.log(o), /* @__PURE__ */ p(WA, { children: [
    /* @__PURE__ */ p(oB, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ p(iB, { children: /* @__PURE__ */ p("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), ko = At(void 0);
ko.displayName = "AnalyticsContext";
function IB() {
  const o = Qe(ko);
  if (o === void 0)
    throw new Error(`${ko.displayName} must be used within a AnalyticsProvider`);
  return o;
}
function lo(o, i, t, e, A) {
  return sA(t - -286, A);
}
function sA(o, i) {
  const t = Fo();
  return sA = function(e, A) {
    e = e - (-1 * -8266 + -7 * -919 + -4 * 3571);
    let g = t[e];
    if (sA.ElkTYz === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      sA.dByTqK = B, o = arguments, sA.ElkTYz = !0;
    }
    const I = t[7953 + -1 * 8650 + 697], a = e + I, r = o[a];
    return r ? g = r : (sA.Undlvv === void 0 && (sA.Undlvv = !0), g = sA.dByTqK(g, A), o[a] = g), g;
  }, sA(o, i);
}
(function(o, i) {
  function t(I, a, r, B, C) {
    return sA(C - 420, B);
  }
  const e = o();
  function A(I, a, r, B, C) {
    return sA(I - -672, B);
  }
  function g(I, a, r, B, C) {
    return sA(a - 137, r);
  }
  function n(I, a, r, B, C) {
    return sA(a - 132, B);
  }
  for (; ; )
    try {
      if (-parseInt(t(835, 853, 831, "sdUD", 849)) / 1 + parseInt(t(847, 841, 826, "32eo", 836)) / 2 * (parseInt(t(848, 852, 838, "y9(4", 842)) / 3) + parseInt(t(885, 852, 862, "5f$b", 869)) / 4 * (-parseInt(t(873, 880, 849, "UWv1", 868)) / 5) + parseInt(g(555, 560, "(#QB", 560, 568)) / 6 + -parseInt(A(-240, -257, -230, "T!zB", -245)) / 7 * (-parseInt(A(-231, -218, -243, "&Yh9", -216)) / 8) + -parseInt(t(842, 853, 851, "1&wQ", 844)) / 9 + -parseInt(A(-257, -255, -274, "#hQT", -254)) / 10 * (-parseInt(n(574, 563, 550, "1&wQ", 561)) / 11) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fo, -619 * 347 + -1806144 + -777 * -3812);
function Ig(o, i, t, e, A) {
  return sA(e - 726, o);
}
function va(o, i, t, e, A) {
  return sA(i - -447, o);
}
const No = At(void (-1021 + 1021 * 1));
function aB(o, i, t, e, A) {
  return sA(t - -301, i);
}
No[lo(138, 157, 149, 151, "tyy)") + lo(138, 144, 140, 128, "&]n8") + "e"] = va("y1Ud", -8) + Ig("C(^s", 1156, 1168, 1160) + lo(142, 146, 150, 148, "nzqe");
function Vt() {
  function o(n, I, a, r, B) {
    return Ig(a, I - 392, a - 297, I - -604);
  }
  const i = Qe(No);
  if (i === void (14 + -14 * 1)) throw new Error(No[g(-115, "C(^s", -97, -114, -97) + t(-371, -384, "6k3S") + "e"] + (t(-396, -401, "hAW)") + g(-136, "nzqe", -113, -106, -117) + e(-236, -238, "IVC4", -247) + g(-108, "2V]u", -102, -103, -104) + A(-311, -302, -302, "T!zB") + t(-392, -399, "g^!&") + o(523, 541, "geEE") + o(545, 559, "&]n8")));
  function t(n, I, a, r, B) {
    return aB(n - 464, a, I - -528);
  }
  function e(n, I, a, r, B) {
    return Ig(a, I - 388, a - 224, r - -1420);
  }
  function A(n, I, a, r, B) {
    return va(r, a - -299);
  }
  function g(n, I, a, r, B) {
    return lo(n - 312, I - 199, B - -251, r - 288, I);
  }
  return i;
}
function Fo() {
  const o = ["wIBcLvncW6dcIHVdGNa", "WRPXW6NdPGu", "W5XrWPDmyW", "WP/dU8k8WPrH", "mmkiW73dUW", "cCkvra", "WRSaWQjqaSk7veqyWR/dIG", "hepcQmk0Fq", "W4TDWQDtyq", "DX5mWQhdKSoUW6D+kda", "W4NcPmo8W5m7W58KgSo7WQZcNCoYWQq", "BmoFW47dH8orxmkiWORdJCoIW6fgW4Ob", "qNtcHIHC", "WRxdNSouWOKu", "xNFdLqS0qCov", "WPuxW7ldSsC", "pdKImSk9WRVcNuxdT8kNW7ZdSYS", "BSo6W4xdQq83iW", "uYdcLfaeWRRdSbNdSLeRWRn8", "FHvoWQddJmoeW6nyiri", "W53dNCoWWO0mW49kWQi", "lG1hW7NcPSkjC8kYy3Ob", "kaGKWOldJ8kmvSkZ", "oJ0Qm8kWWR/cN3VdL8krW43dNdq", "BSk8xmossG", "zmkpW6dcR8ok", "AqNdL8oLW4tcMIpcIudcRq", "WOtdNmo1WRn1WPDHWQe", "W6KeWRJcJZVcUCk7WOjDW5tdKMSv", "ASozy0BdM8khdmoTcmoZtSkRqq", "C8oyWRtcT8kkhNxdJCkzvZHuzG", "dmkjEfqv", "WR7cG8knW59JWOddISkt", "WQXSBL4U", "dmkSjctdTSoKWOqtW7q5W55CWRy", "W6FdUCoWjCoH", "ACovyetdMSkgdCkAomoSvCkPDCow"];
  return Fo = function() {
    return o;
  }, Fo();
}
const mt = (o) => o.length < -502 * 17 + 1676 + 6859 ? 1 * 6295 + -6416 + 121 : o.reduce((t, e) => t + e, 0) / o.length, oe = (o) => Number.parseFloat(o.toFixed(15489 + -3 * 5162)), rB = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(-3857 + -2567 * -3 + -2 * 1922, 7 * 1124 + -4894 + -2974, i.canvas.width, i.canvas.height);
}, La = -513 + 19 * 27 + 0.75, CB = -692 * -7 + 2843 + -7685, BB = 600, QB = 1252 + -1252 * 1, sB = "dot-auto-capture-video", Qi = (o, i) => Math.min(o, i), Ja = ({ height: o, width: i }, t) => {
  const e = Qi(i, o) * t, A = (i - e) / (1 * -6473 + -6134 + 12609), g = (o - e) / (-20 * -424 + 702 + -9180), n = {};
  return n.shiftX = A, n.shiftY = g, n.width = e, n.height = e, n;
}, cB = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = Ja(o, i), n = {};
  return n.shiftX = e / o.width, n.shiftY = A / o.height, n.width = g / o.width, n.height = t / o.height, n;
}, xB = ({ height: o, width: i }) => {
  const t = Qi(i, o), e = t / (1187 * 7 + -8394 + -8 * -11) * (1535 * 5 + -3707 + 1 * -3964);
  if (i > o) {
    const g = {};
    return g.width = e, g.height = t, g;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, EB = (o, i) => {
  const t = Qi(i.width, i.height);
  return oe(o * t);
}, dB = ({ height: o, width: i }) => {
  const t = {};
  return t.height = o, t.width = i, Ja(t, La);
}, lB = (o) => cB(o, La), uB = (o, i) => EB(o, i) * CB, hB = "@innovatrics/dot-common-auto-capture", fB = "7.2.1", pB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, yB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, DB = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, wB = {
  name: hB,
  private: !0,
  version: fB,
  scripts: pB,
  dependencies: yB,
  devDependencies: DB
}, mB = 1 * 934 + -1 * -3254 + 1396 * -3 + 0.4, bB = -6774 + 2 * 3387 + 0.16, GB = 0 + 0.2, kB = -4531 + 45 * 6 + -4261 * -1 + 0.05, NB = 1113 + 1 * 9341 + -10454, ag = {};
ag.min = -(-9934 + -1 * -9935), ag.max = 1;
const Xn = ag, $n = 0, FB = -82 * -76 + -1015 + -5217 * 1 + 0.25, SB = 7497 + -296 * -32 + -71 * 239 + 0.2, RB = -5305 + -54 * -162 + 3443 * -1 + 0.85, MB = 9871 + 181 * 20 + -21 * 641, vB = -2 * 1606 + 547 * -7 + 7050 + 0.8100000000000005, uo = {};
uo.minDuration = 1e3, uo.maxDuration = 2500, uo.minFrames = 10;
const Gi = uo, rg = {};
rg.max = 100, rg.min = 10;
const AI = rg, LB = -9568 + 1 * -3559 + 13847, JB = -3363 + 1619 * 3 + 1294 * -1, UB = 4, xt = {};
xt.width = 200, xt.height = 200, xt.top = 50, xt.left = 50;
const WB = xt, Ua = "AES-CBC", Wa = "RSA-OAEP", YB = "SHA-256", OB = "image/jpeg", HB = 353 * -12 + 8332 + -4088, KB = 9475 + 2 * 4129 + 13 * -1361, Ya = "/dot-assets", eI = "dot_embedded_bg.wasm", Oa = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), tI = () => {
  const o = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return o && i;
}, TB = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, Cg = (o) => new Promise((i) => {
  setTimeout(i, o);
}), Ha = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? oe(t) : t)), Ka = () => wB.version, Ta = (o) => new URL(o).hostname.replace("www.", ""), PB = () => Ta(window.location.href) === "localhost", go = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), qB = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o;
function jB(o, i) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, o(...e);
    };
    t === void (14 * -3 + -2451 + -831 * -3) && (t = setTimeout(A, i));
  };
}
function ZB(o) {
  return o.at(-1) === "/" ? o.slice(0, -(-2174 + -229 * -26 + -3779)) : o;
}
function Pa(o) {
  return "" + ZB(o ?? "") + Ya;
}
const VB = () => "prod".toLowerCase() === "dev";
var Ie;
class Vg extends Array {
  constructor(t) {
    super();
    W(this, Ie);
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
    this.length === y(this, Ie) && this.splice(-3415 + -5 * -683, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(2 * -199 + -2810 + -4 * -802);
  }
}
Ie = new WeakMap();
const qa = (o, i, t = OB) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), _B = async (o) => qa(o, 90), zB = async (o) => qa(o, 5174 + 191 * 47 + 14051 * -1, "image/png"), ja = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, 1012 + 23 * -44, -5351 * 1 + 1 * 4664 + 687, t.width, t.height), t;
}, XB = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(-5 * -401 + -6193 + 4188, -15 * -228 + -3629 + -19 * -11, o.width, o.height);
  return t;
};
function oI(o, i, t) {
  return t - i / (8857 * 1 + 754 + 9609 * -1) < -4337 * -1 + -219 * -7 + -5 * 1174 ? -1809 + -6746 * 1 + 8555 : t + i / (-8 * -1068 + -8584 + 6 * 7) > o ? o - i : t - i / (62 * 55 + -1 * 3786 + -126 * -3);
}
function $B(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / (-5906 + 2002 * 3)), g = e * (i.top / (9 * -851 + -5087 + 6 * 2141));
  return { width: i.width, height: i.height, shiftX: oI(t, i.width, A), shiftY: oI(e, i.height, g) };
}
async function AQ(o, i) {
  const t = $B(o, i), e = ja(o, t);
  return zB(e);
}
const Za = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), A.stroke());
}, ki = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: g, width: n } = i, I = {};
  I.x = A, I.y = g;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, Za(o, a, t);
}, pt = (o, i, t, e = 2 * 2572 + 1471 * -1 + -3673 * 1) => {
  const A = o.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(i.x + e, i.y + e, -4649 + -8 * -582, -11030 + -11037 * -1), A.beginPath());
}, eQ = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = i;
  return !(o.x < e || o.x > e + g || o.y < A || o.y > A + t);
}, tQ = (o, i) => Object.values(o).every((t) => eQ(t, i));
function So(o) {
  const { height: i, width: t } = xB(o), e = (o.width - t) / (-13 * -387 + -6858 + 1829), A = (o.height - i) / (-7276 * -1 + 9 * 425 + -1009 * 11), g = {};
  return g.shiftX = e, g.shiftY = A, g.width = t, g.height = i, g;
}
function Va(o, i, t) {
  const { height: e, width: A } = t, g = Qi(o.width, o.height), n = A - g * i * (7670 + -5 * 155 + 1 * -6893), I = e - g * i * (7794 + -1 * -583 + -8375), a = (o.width - n) / (933 + -1 * -2443 + -3374), r = (o.height - I) / (-1 * -9283 + -422 * -2 + -1125 * 9), B = {};
  return B.shiftX = a, B.shiftY = r, B.width = n, B.height = I, B;
}
function Le(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
function gA(o, i) {
  const t = Ro();
  return gA = function(e, A) {
    e = e - (9659 * -1 + 6264 + 3609);
    let g = t[e];
    if (gA.RMaUIO === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      gA.nwXnyL = B, o = arguments, gA.RMaUIO = !0;
    }
    const I = t[11 * 453 + 283 * -7 + -3002], a = e + I, r = o[a];
    return r ? g = r : (gA.hCzDOz === void 0 && (gA.hCzDOz = !0), g = gA.nwXnyL(g, A), o[a] = g), g;
  }, gA(o, i);
}
function Ro() {
  const o = ["emkfFmourh9ufrVcUsHiWRe", "kmk7f2jmhZTYW6G", "WQddTZ1XgSoGwSoEmSoQW5hdIN0N", "W7m2W6FdS2eUW44", "vmoSwmogkG", "W5BdGL3cMSkZzqP+WOpdICkLWQzkWQS", "qCkWkmoQk8onmsNcJSoi", "pCkrDSowedyGAYLQrSoWxWi", "WPiOW5JdU8kh", "W7dcUgWAW6hdQSoUiWPNW6e", "mSknWOxdPCkMW77cPNBdO8kz", "AapcT8oZWR0", "oHBcMqe", "WR/cJSoGjmk0WO5SgMSxW6O6", "nmoHa8kdzvjY", "zCkKWODRr8kvkW", "WPrRWQxdJmoAWRbB", "WQSrW5iKWPScWOtdGu7dR2VdS3W", "BSorW7nPF8kgpNvP", "saNcPIaV", "qSk8l8oGASkulqtcTSomWR/dQG", "W68QWPBdTfhdUvSxp8kYWPC", "WRBcPtOXWO0", "W4vOWQ/dQSogW7mo", "lSohfSo9WQNcN3ddN8o/W5FdPbxdNq", "W7eXW57dI2KTW6W", "w3TSpuhdLW/cVwNcSmo0", "W7yUW5FdS8oL", "rmk0lmoRB8osmtxcS8ooWRS", "gSo/WPddOCoGm03dJ2hdSg/cPGzl", "WQxcIcSvWQvJW6/cQhaGWPVcQmk9"];
  return Ro = function() {
    return o;
  }, Ro();
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return gA(B - 480, a);
  }
  function e(a, r, B, C, x) {
    return gA(r - 700, B);
  }
  function A(a, r, B, C, x) {
    return gA(C - -245, a);
  }
  const g = o();
  function n(a, r, B, C, x) {
    return gA(r - 474, a);
  }
  function I(a, r, B, C, x) {
    return gA(r - -183, C);
  }
  for (; ; )
    try {
      if (-parseInt(I(38, 43, 33, "O*vj", 48)) / 1 * (parseInt(I(49, 44, 43, "p89)", 59)) / 2) + parseInt(A("vIkq", -26, -28, -26, -15)) / 3 * (-parseInt(t("Gd&(", 710, 696, 691, 706)) / 4) + -parseInt(A("gCB6", -18, -4, -10, 4)) / 5 * (-parseInt(n("YNJI", 717, 715, 721, 729)) / 6) + -parseInt(e(945, 933, "Ym&1", 918, 925)) / 7 * (parseInt(n("X*)I", 692, 696, 701, 677)) / 8) + parseInt(A("!j$N", -5, -23, -9, -23)) / 9 + parseInt(A("%ybL", -18, -24, -14, 1)) / 10 * (-parseInt(I(67, 61, 63, "[m#R", 56)) / 11) + parseInt(e(942, 941, "20wM", 940, 936)) / 12 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Ro, 829681);
function oQ({ assetsDirectoryPath: o, bramble: i }) {
  const [t, e] = fA(), A = t !== void (-8208 + 6 * 1368);
  function g(a, r, B, C, x) {
    return gA(x - 105, C);
  }
  function n(a, r, B, C, x) {
    return gA(x - 129, a);
  }
  q(() => {
    async function a() {
      function r(x, s, E, d, u) {
        return gA(E - 588, d);
      }
      function B(x, s, E, d, u) {
        return gA(u - 550, E);
      }
      await i[r(797, 808, 803, "K0wr")](Pa(o));
      function C(x, s, E, d, u) {
        return gA(E - -468, s);
      }
      e(i[B(780, 801, "SK%O", 804, 792) + r(788, 814, 802, "pTRZ") + C(-254, "xm[K", -243) + "t"]());
    }
    a();
  }, [i, o, e]);
  const I = {};
  return I[n("[R#B", 382, 380, 359, 367) + g(332, 339, 322, "upRz", 335)] = t, I[g(318, 336, 333, "^O]o", 327) + "sh"] = A, I;
}
var _a = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(_a || {});
const Bg = {};
Bg.SIMD = "simd", Bg.NO_SIMD = "no-simd";
const iI = Bg, Qg = {};
Qg.Lower = "Lower", Qg.Higher = "Higher";
const sg = Qg, ho = {};
ho.VISIBLE = "VISIBLE", ho.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", ho.HIDDEN = "HIDDEN";
const Mo = ho;
(function(o, i) {
  function t(r, B, C, x, s) {
    return cA(s - -303, x);
  }
  function e(r, B, C, x, s) {
    return cA(B - 940, r);
  }
  function A(r, B, C, x, s) {
    return cA(x - -250, r);
  }
  var g = o();
  function n(r, B, C, x, s) {
    return cA(B - -773, r);
  }
  function I(r, B, C, x, s) {
    return cA(s - 868, r);
  }
  for (; ; )
    try {
      var a = -parseInt(t(-59, -61, -50, "DbvO", -62)) / 1 + -parseInt(t(-59, -71, -68, "DUja", -63)) / 2 + -parseInt(A("^hp5", 4, -20, -7, -3)) / 3 * (parseInt(t(-75, -89, -67, "fwXs", -76)) / 4) + parseInt(A("6fSc", -1, -25, -12, -8)) / 5 * (parseInt(I("^j8k", 1089, 1089, 1115, 1102)) / 6) + parseInt(e("6fSc", 1182, 1177, 1171, 1179)) / 7 * (parseInt(A("]o8Z", -30, -16, -22, -11)) / 8) + parseInt(I("Os#W", 1082, 1096, 1080, 1092)) / 9 * (-parseInt(A("Vdvd", -28, -37, -24, -32)) / 10) + -parseInt(n("gF9L", -538, -549, -549, -540)) / 11 * (-parseInt(A("Jp6E", -20, -20, -17, -26)) / 12);
      if (a === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(vo, -2705 * 123 + 427816 + -4 * -49492);
function vo() {
  var o = ["gmoTWRyIW6hcIxBcKa", "bZpdHgZdJSkfWQldImoEehet", "sSoFWQFcVIldGgFdVb40sG", "WPvxWQxcIh0gW6RdUa", "WQ9KWRldGCkZW7dcJa", "W6PGzmkSwfORW6mgn8kMAa", "h8oUW5fKWOhdLZdcHmo2W5JdV8onWQe", "Be7cH8o/WOS", "xNr5W4NcJW", "WOFdQwyoW5C", "l8k3iXNdRmk5uIpcG8oPoG", "jY9QW4ZcM0BdPLa", "WPlcVSkOWQXOCCo4bHLq", "Cw7cUmoUdSoxC8k3WQ53la", "WO3dPW/cVCodWPldKa", "er3cTcWYj1ZdLJldKmo9W5jX", "WPjvWOBcLLOlW4BdUW", "d8oezHtdN8kHW4ZcShbnWPj9", "W5RcQWzFWOLDxYGCmZFdKG", "fXNdH21JxrxdJW", "eCkQemkbWQuInGhdHmoItq", "qmoxWQBcVu7dTv/dNr4t", "heLTW4fIrmkWpmoWW5DHeq", "l8k5krRdQCoHtrVcMmopnvC", "sWxdPaH8W6vNtG", "W5D5ACk3eNmKW7uhwmklua"];
  return vo = function() {
    return o;
  }, vo();
}
function cA(o, i) {
  var t = vo();
  return cA = function(e, A) {
    e = e - (4024 + -622 * 7 + -2 * -275);
    var g = t[e];
    if (cA.JYCouu === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      cA.PWmPtw = I, o = arguments, cA.JYCouu = !0;
    }
    var a = t[-693 * 2 + 1 * 2657 + -1271], r = e + a, B = o[r];
    return B ? g = B : (cA.jDiafV === void 0 && (cA.jDiafV = !0), g = cA.PWmPtw(g, A), o[r] = g), g;
  }, cA(o, i);
}
function iQ({ crosshatch: o }) {
  function i(A, g, n, I, a) {
    return cA(n - 403, a);
  }
  function t(A, g, n, I, a) {
    return cA(A - -697, n);
  }
  function e(A, g, n, I, a) {
    return cA(a - 488, A);
  }
  return o != null && o[i(636, 627, 635, 641, "DbvO") + "id"] ? sg[e("^j8k", 716, 706, 715, 719) + "r"] : sg[t(-467, -472, "WQ$L")];
}
(function(o, i) {
  function t(I, a, r, B, C) {
    return BA(C - 216, I);
  }
  function e(I, a, r, B, C) {
    return BA(B - 896, a);
  }
  const A = o();
  function g(I, a, r, B, C) {
    return BA(C - 324, I);
  }
  function n(I, a, r, B, C) {
    return BA(a - -980, I);
  }
  for (; ; )
    try {
      if (parseInt(t("7QS[", 556, 553, 557, 548)) / 1 + -parseInt(g("rHOm", 637, 641, 650, 635)) / 2 * (-parseInt(e(1213, "sz]O", 1203, 1194, 1201)) / 3) + parseInt(e(1208, "aZIX", 1219, 1201, 1192)) / 4 * (-parseInt(e(1202, "af1Y", 1237, 1221, 1215)) / 5) + -parseInt(n("NmFP", -680, -678, -690, -668)) / 6 * (-parseInt(n("66@t", -666, -672, -681, -662)) / 7) + -parseInt(g("Dlyu", 636, 658, 641, 653)) / 8 * (parseInt(g("2@NM", 659, 635, 657, 651)) / 9) + parseInt(t("$tng", 548, 534, 530, 529)) / 10 * (parseInt(g("gIPv", 654, 650, 653, 655)) / 11) + parseInt(e(1215, "gyxK", 1212, 1224, 1236)) / 12 * (-parseInt(e(1201, "idMB", 1201, 1206, 1193)) / 13) === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Lo, 410904 + -9 * 26121);
function BA(o, i) {
  const t = Lo();
  return BA = function(e, A) {
    e = e - (1937 + 7 * 1234 + -10279);
    let g = t[e];
    if (BA.nbnbiw === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      BA.kVnROe = B, o = arguments, BA.nbnbiw = !0;
    }
    const I = t[673 * -9 + -5398 + 395 * 29], a = e + I, r = o[a];
    return r ? g = r : (BA.tDdmza === void 0 && (BA.tDdmza = !0), g = BA.kVnROe(g, A), o[a] = g), g;
  }, BA(o, i);
}
function Lo() {
  const o = ["WQuRW4pcQSkHWQL6B0WDW7CCW4i", "W4LQWPVdTfi", "WQuTW4JcQmkKWQuat0C/W5mn", "hG9MW6GIW5baW5i", "j2C6WQCNW58EjW", "AcpcOX9+", "b8k4WRlcJCkrCmo4p8oWW4VcOW", "p8kSWQm5WRJcJ2a", "gCknBSkgW7CEW6u5", "W74eW4PYxw44CSkmWO3cUvO", "adRdG2X+W7jSW6OAW7uJWPa", "W4hcJmo6", "W7VdU8o5WOGU", "vNPtwu8", "W7ddQ8kok3u", "oCowWPmYWRVcRNFdIa", "WRbIW47cSmo/", "rSkPlM7cRmoSW4a", "WQepWPrcy03dGq", "WRtcJHBcLMXNWRGyW6VdTmotW4iK", "pmkDWQqJW6mhE8oZW4PXamk8WO8", "aW47W5VdM8ovsSkYzglcQfBcMG", "WQpcSSoNFmktWRXIbq", "WPujhGG", "W4JdN2qICmkUW7lcOcm", "FbFdTvmoW47dSSklWQddR8ovWPa", "W4RdUSoLWPSZ", "WPWHW4hcTHJdQfzWhSohia", "pwxcRHDz", "W49UjvzjWO/cOMWVCCoE", "W7FdM00", "ox/dS0eIoIjvW4euBCk6", "WPdcS8oeWRBdUbpcNG", "WPfWWOhcIum", "W6vsW6NdKaNcHv1buW", "WOWyWOtdTCoWW7BdO8oSiSo0W5C", "W68lW4uSW4RdNSkmv8outIdcNG", "WR/cNHtcM8kVB3hdUa"];
  return Lo = function() {
    return o;
  }, Lo();
}
function gQ({ assetsDirectoryPath: o, children: i, bramble: t }) {
  const e = {};
  function A(E, d, u, c, h) {
    return BA(c - 584, E);
  }
  e[r("@)X6", 209) + "le"] = t, e[s(85, 91, 91, 66, "]ZqX") + r("7QS[", 186) + s(54, 55, 64, 36, "%RU#") + s(82, 80, 100, 82, "1clL")] = o;
  const { sunfish: g, crosshatch: n } = oQ(e), I = {};
  function a(E, d, u, c, h) {
    return BA(c - 431, u);
  }
  I[a(734, 743, "[s69", 739) + A("l%k#", 922, 918, 907)] = n;
  function r(E, d, u, c, h) {
    return BA(d - -111, E);
  }
  const B = bA(() => ({ redfin: iQ(I), sunfish: g, crosshatch: n, bramble: t }), [g, n, t]), C = {};
  C[s(73, 82, 88, 61, "rrAA")] = B;
  function x(E, d, u, c, h) {
    return BA(h - 673, E);
  }
  function s(E, d, u, c, h) {
    return BA(E - -248, h);
  }
  return C[x("NmFP", 998, 1001, 979, 985) + A("FVnF", 889, 870, 883)] = i, p(No[A("]ZqX", 887, 918, 903) + a(764, 736, ")]9B", 749)], C);
}
(function(o, i) {
  function t(r, B, C, x, s) {
    return GA(B - -102, C);
  }
  function e(r, B, C, x, s) {
    return GA(x - 963, B);
  }
  function A(r, B, C, x, s) {
    return GA(r - 5, B);
  }
  function g(r, B, C, x, s) {
    return GA(C - 643, B);
  }
  var n = o();
  function I(r, B, C, x, s) {
    return GA(r - 345, s);
  }
  for (; ; )
    try {
      var a = parseInt(I(632, 625, 633, 634, "CilQ")) / 1 * (-parseInt(I(634, 627, 630, 629, "FM!A")) / 2) + parseInt(A(302, "mvuZ", 303, 304, 292)) / 3 + -parseInt(I(641, 641, 640, 650, "&6gz")) / 4 + parseInt(A(295, "HaAT", 294, 303, 292)) / 5 * (-parseInt(t(189, 190, "*D5t", 187, 199)) / 6) + parseInt(g(947, "78I#", 937, 926, 930)) / 7 * (-parseInt(e(1275, "GlEy", 1264, 1269, 1269)) / 8) + -parseInt(t(196, 186, "ZT7Z", 177, 177)) / 9 * (parseInt(A(308, "GlEy", 304, 315, 311)) / 10) + -parseInt(I(653, 657, 652, 662, "C1I^")) / 11 * (-parseInt(t(201, 198, "HaAT", 203, 206)) / 12);
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Jo, 169576 + 153 * -60 + -11451);
function GA(o, i) {
  var t = Jo();
  return GA = function(e, A) {
    e = e - (-3329 * 1 + 5 * -1367 + -1 * -10451);
    var g = t[e];
    if (GA.ZKZXEM === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      GA.OxBgBS = I, o = arguments, GA.ZKZXEM = !0;
    }
    var a = t[-7273 * -1 + -18 * -361 + -13771], r = e + a, B = o[r];
    return B ? g = B : (GA.sGyWsn === void 0 && (GA.sGyWsn = !0), g = GA.OxBgBS(g, A), o[r] = g), g;
  }, GA(o, i);
}
function Jo() {
  var o = ["mCkAW4xdJmkVW6tcPftcTh4", "fK7cGYOxWP9Ee8oDke8", "W7GiWP/dGwVcUuaX", "WRCdWPddN8kYyCkNoCku", "WORdSvFcICoWeSoJlwu", "g8oWW7XHBxRdMCkmW7jYAW", "jCoRWOJcSclcIghdQ8kyW6W", "W6boW68ZW5ddJYRdHSkxlmkaWRy", "BJO0WQ5pqttdHe/cOa", "WQFcP1xcJgS5WRRdHSo0qrdcKW", "W4RcQ8k9WP7dQt7cSCogWRZdOSoQtq", "W5/cGdJcLCoQWQuib8kW", "tCk7W4TciYVcVH7cUu/dUW", "WRCcWPxcMCoNwCkhemkGWQ1G", "l8oiWP3cOCo5WONdU053nYi", "WRy/emknW6vQWOPKv23dOcK", "mSo3Dv7dMhTZzHu", "WRNcJmklwCkOWR7cQCoV", "WR/dMmoUWORdRIlcQ3PfFCkcW6a", "m8k+nfddINr3", "mmkFW4ddISolWOZcH3/cR1yncG", "CCkAlmoBW4dcUCoDWP4uW6G"];
  return Jo = function() {
    return o;
  }, Jo();
}
function nQ({ analytics: o, crosshatch: i }) {
  return i !== void (1 * 569 + -8042 + 7473) && !i.isAnalyticsDisabled ? o : void (1 * 607 + 5780 * 1 + 2129 * -3);
}
function IQ({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const g = {};
  g.analytics = o, g.crosshatch = e;
  const n = nQ(g);
  return q(() => {
    n && n.init(i);
  }, [n, i]), q(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), n && n.walleye(t, A.getCustomerName()));
  }, [n, A, e, t]), q(() => {
    if (n)
      return window.addEventListener("beforeunload", n.endSession), () => {
        n.endSession(), window.removeEventListener("beforeunload", n.endSession);
      };
  }, [n]), n;
}
function aQ({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: g } = Vt(), n = IQ({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: g }), I = bA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ p(ko.Provider, { value: I, children: t });
}
const rQ = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
}, Ai = class Ai {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", -718 * 3 + -1811 * 5 + 11209);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ai()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 30 * 295 + 5286 + -14136;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && rQ(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
D(Ai, "_instance");
let bt = Ai;
const gt = bt.getInstance(), za = (o, i, t = BB) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  gt.dispatchDelayedCustomEventOnChange(o, A, t);
}, gI = (o, i) => {
  gt.dispatchCustomEventOnChange(o, i);
}, CQ = (o, i) => {
  gt.dispatchCustomEventOnChange(o, i);
}, BQ = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  gt.dispatchCustomEventOnChange(o, e);
}, QQ = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const g = A;
  gt.dispatchCustomEventOnChange(o, g);
}, sQ = (o, { detection: i, fps: t, image: e, invalidValidators: A, isInCandidateSelection: g }) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = i, n.data.fps = t, n.data.isInCandidateSelection = g, n.data.invalidValidators = A, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const I = n;
  gt.dispatchCustomEventOnChange(o, I);
}, cQ = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  q(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, CQ(o, A);
  }, [t, e, o]);
}, xQ = (o) => o === Fa.CONTROL ? !Oa() : !0, EQ = (o, i) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: g } = Se(), [n, I] = fA(), a = bA(() => {
    const B = g && i && i.isStreaming && i.getCameraSettings().facingMode;
    return B ? n ?? B === "user" : n ?? xQ(o);
  }, [i, n, o, g]);
  q(() => {
    const B = () => {
      t !== hA.LOADING && e(hA.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, x = async () => {
      if (i) {
        e(hA.LOADING);
        try {
          await i.switchCamera(), e(hA.RUNNING);
        } catch (E) {
          if (E instanceof Error) {
            A(Y.fromCameraError(E));
            return;
          }
        }
        I(void 0);
      }
    }, s = (E) => {
      var d;
      switch ((d = E.detail) == null ? void 0 : d["instruction"]) {
        case mi.CONTINUE_DETECTION:
          B();
          break;
        case mi.TOGGLE_MIRROR:
          C();
          break;
        case mi.SWITCH_CAMERA:
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
function dQ(o, i) {
  q(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      BQ(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
function lQ(o) {
  return oe(Math.abs(o));
}
const uQ = () => {
  const [o, i] = fA(null), t = NA(new Vg(-288 + 17 * 17 + 4));
  function e(g) {
    const { z: n } = g.accelerationIncludingGravity || {};
    if (!n) return;
    t.current.pushFixed(lQ(n));
    const I = oe(mt(t.current)), a = {};
    a.z = I, i(a);
  }
  q(() => (window.addEventListener("devicemotion", jB(e, KB), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = o, A;
};
var hQ = Symbol.for("preact-signals");
function _g() {
  if (He > 2 * -673 + -3478 + 5 * 965)
    He--;
  else {
    for (var o, i = !1; void (-82 * 26 + -4132 + 6264) !== yt; ) {
      var t = yt;
      for (yt = void (7970 * 1 + 1467 * 1 + 9437 * -1), cg++; void (-89 * 99 + -11 * -43 + 8338) !== t; ) {
        var e = t.o;
        if (t.o = void (4639 * 1 + -5326 + 687), t.f &= -(-23 * 323 + 4104 + 3328), !(-5594 + -1 * 46 + 5648 & t.f) && A0(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !0);
        }
        t = e;
      }
    }
    if (cg = 19 * 391 + -3 * -869 + -4 * 2509, He--, i) throw o;
  }
}
var K = void (1322 + 2 * -661), yt = void (911 * 1 + 20 * -11 + -691), He = 10 * 733 + -3010 * 2 + -1310, cg = 0, Uo = -1 * 6229 + 2049 * -1 + 8278 * 1;
function Xa(o) {
  if (void (129 * -8 + -1 * 1 + 1033 * 1) !== K) {
    var i = o.n;
    if (void (191 + -1024 * -6 + -6335) === i || i.t !== K)
      return i = { i: 0, S: o, p: K.s, n: void (2 * -1438 + -15 * 4 + 2936), t: K, e: void (5699 + 10 * -152 + -4179), x: void (-5016 + 14 * -562 + 12884), r: i }, void (4439 + -2 * 1471 + -3 * 499) !== K.s && (K.s.n = i), K.s = i, o.n = i, 12143 + -1 * 12111 & K.f && o.S(i), i;
    if (-(8073 + 1 * 232 + 4152 * -2) === i.i)
      return i.i = 183 * 41 + -3143 + -4360, i.n !== void 0 && (i.n.p = i.p, i.p !== void 0 && (i.p.n = i.n), i.p = K.s, i.n = void (675 * -12 + -7548 + -32 * -489), K.s.n = i, K.s = i), i;
  }
}
function CA(o) {
  this.v = o, this.i = -87 * 1 + 11 * 569 + 1543 * -4, this.n = void 0, this.t = void (47 + -1 * 5232 + -1 * -5185);
}
CA.prototype.brand = hQ, CA.prototype.h = function() {
  return !(2 * 3904 + -4454 + 78 * -43);
}, CA.prototype.S = function(o) {
  this.t !== o && void (-16184 + 1 * 16184) === o.e && (o.x = this.t, void (14658 + -2094 * 7) !== this.t && (this.t.e = o), this.t = o);
}, CA.prototype.U = function(o) {
  if (void (9193 + 1 * -4251 + 706 * -7) !== this.t) {
    var i = o.e, t = o.x;
    void (-1 * 4297 + -1 * -3329 + 968) !== i && (i.x = t, o.e = void (-6 * -1386 + -4366 + -3950)), void (576 * 17 + -1145 * 7 + 1 * -1777) !== t && (t.e = i, o.x = void (7768 * -1 + 7159 * 1 + 3 * 203)), o === this.t && (this.t = t);
  }
}, CA.prototype.subscribe = function(o) {
  var i = this;
  return Xg(function() {
    var t = i.value, e = K;
    K = void (-7975 + 319 * 25);
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
  K = void (1 * 3461 + 1483 + -4944);
  try {
    return this.value;
  } finally {
    K = o;
  }
}, Object.defineProperty(CA.prototype, "value", { get: function() {
  var o = Xa(this);
  return void (1094 + 70 * -65 + 2 * 1728) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (cg > -1 * -2287 + -3411 + 1224) throw new Error("Cycle detected");
    this.v = o, this.i++, Uo++, He++;
    try {
      for (var i = this.t; void (2 * 3843 + 7887 + -15573 * 1) !== i; i = i.x) i.t.N();
    } finally {
      _g();
    }
  }
} });
function $a(o) {
  return new CA(o);
}
function A0(o) {
  for (var i = o.s; void (-1619 + 9747 * 1 + -8128) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(5067 + 1151 * 1 + -1 * 6218);
  return !(1120 + 8419 * 1 + -9538);
}
function e0(o) {
  for (var i = o.s; void (-17968 + 4492 * 4) !== i; i = i.n) {
    var t = i.S.n;
    if (t !== void 0 && (i.r = t), i.S.n = i, i.i = -(3 * 1357 + -348 * -6 + -6158), void (3152 + 16 * -197) === i.n) {
      o.s = i;
      break;
    }
  }
}
function t0(o) {
  for (var i = o.s, t = void (-6 * -1210 + 9641 * 1 + -16901); void (3244 + -1 * 3244) !== i; ) {
    var e = i.p;
    -(16 * -593 + -147 * 10 + -3653 * -3) === i.i ? (i.S.U(i), void (-1858 + -21 * -443 + -7445) !== e && (e.n = i.n), void (1981 + -1 * 1981) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (1 * -6811 + 29 * -205 + 3 * 4252) !== i.r && (i.r = void (-7002 + -61 * -109 + 353)), i = e;
  }
  o.s = t;
}
function We(o) {
  CA.call(this, void (-1219 + -1219 * -1)), this.x = o, this.s = void (97 * 89 + -11 * -141 + 1 * -10184), this.g = Uo - (-9038 + -25 * -227 + -841 * -4), this.f = 8317 * 1 + 6 * -934 + -2709;
}
(We.prototype = new CA()).h = function() {
  if (this.f &= -(-6208 + -1 * -6211), 6565 * -1 + -546 + 7112 & this.f) return !(7445 + -5805 * -1 + 1 * -13249);
  if ((-12 * -324 + 462 * -1 + -5 * 678 & this.f) == 32) return !(-254 + -15 * 521 + 8069 * 1);
  if (this.f &= -(-2957 * -1 + 4102 * -1 + 1150), this.g === Uo) return !(-1250 * 1 + 1319 + -69);
  if (this.g = Uo, this.f |= -218 + -1 * -219, this.i > -8844 + -7066 * 1 + -1591 * -10 && !A0(this)) return this.f &= -(1 * 479 + -7713 + 7236), !(1259 * -7 + -3121 * 1 + 3 * 3978);
  var o = K;
  try {
    e0(this), K = this;
    var i = this.x();
    (-1 * -7825 + 6749 * -1 + 5 * -212 & this.f || this.v !== i || 1002 * 3 + -3 * 1999 + 2991 === this.i) && (this.v = i, this.f &= -(-3489 * -1 + 5261 + 71 * -123), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return K = o, t0(this), this.f &= -(-723 * 13 + -3830 + 13231), !(221 * 41 + -8422 * 1 + -639);
}, We.prototype.S = function(o) {
  if (void (-94 * -90 + 9629 * -1 + 1169) === this.t) {
    this.f |= 36;
    for (var i = this.s; void (-1559 + -1 * -1559) !== i; i = i.n) i.S.S(i);
  }
  CA.prototype.S.call(this, o);
}, We.prototype.U = function(o) {
  if (void (-104 * 42 + 15 * 423 + -1977) !== this.t && (CA.prototype.U.call(this, o), void (-5905 * 1 + 1456 + 4449) === this.t)) {
    this.f &= -(-4745 + -189 * 48 + 13850 * 1);
    for (var i = this.s; void (32 * 281 + 9497 + -18489) !== i; i = i.n) i.S.U(i);
  }
}, We.prototype.N = function() {
  if (!(1 * 6369 + -5940 + -427 * 1 & this.f)) {
    this.f |= 9 * 1011 + 307 * 4 + 10321 * -1;
    for (var o = this.t; void (-263 * -25 + -2189 * -1 + -4 * 2191) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(We.prototype, "value", { get: function() {
  if (-4736 + 7 * 1301 + -4370 & this.f) throw new Error("Cycle detected");
  var o = Xa(this);
  if (this.h(), void (905 + 622 * 1 + 509 * -3) !== o && (o.i = this.i), 5 * 389 + 6931 + -8860 & this.f) throw this.v;
  return this.v;
} });
function fQ(o) {
  return new We(o);
}
function o0(o) {
  var i = o.u;
  if (o.u = void (12 * 431 + 3713 + -5 * 1777), typeof i == "function") {
    He++;
    var t = K;
    K = void (-5062 + 2 * -2636 + -2 * -5167);
    try {
      i();
    } catch (e) {
      throw o.f &= -(-5139 + 223 * 14 + 2019), o.f |= 19 * 515 + 4422 * -1 + -5355, zg(o), e;
    } finally {
      K = t, _g();
    }
  }
}
function zg(o) {
  for (var i = o.s; void (-13431 + -111 * -121) !== i; i = i.n) i.S.U(i);
  o.x = void 0, o.s = void (5886 * 1 + 382 * -14 + -538), o0(o);
}
function pQ(o) {
  if (K !== this) throw new Error("Out-of-order effect");
  t0(this), K = o, this.f &= -(5071 + 638 * -1 + -4431 * 1), -7216 + -9 * -457 + -1037 * -3 & this.f && zg(this), _g();
}
function Et(o) {
  this.x = o, this.u = void (701 * -1 + 398 * -16 + 7069), this.s = void (10 * 619 + -1863 + -4327), this.o = void (7638 + -114 * 67), this.f = -2426 * 3 + 799 * -9 + 14501;
}
Et.prototype.c = function() {
  var o = this.S();
  try {
    if (8 & this.f || void (-1 * 8422 + -3852 + 34 * 361) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, Et.prototype.S = function() {
  if (5492 + 14 * 163 + -7773 & this.f) throw new Error("Cycle detected");
  this.f |= -5903 + -656 * -9, this.f &= -(479 + -1 * -8298 + -4 * 2192), o0(this), e0(this), He++;
  var o = K;
  return K = this, pQ.bind(this, o);
}, Et.prototype.N = function() {
  !(9103 * 1 + -2 * -2333 + -13767 & this.f) && (this.f |= 15 * -129 + 4 * 2318 + -3 * 2445, this.o = yt, yt = this);
}, Et.prototype.d = function() {
  this.f |= 9601 + 53 * -181, -4 * -147 + -7772 + 7185 & this.f || zg(this);
};
function Xg(o) {
  var i = new Et(o);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Ni;
function Oe(o, i) {
  k[o] = i.bind(null, k[o] || function() {
  });
}
function no(o) {
  Ni && Ni(), Ni = o && o.S();
}
function i0(o) {
  var i = this, t = o.data, e = g0(t);
  e.value = t;
  var A = bA(function() {
    for (var g = i.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= 23 * 182 + 1021 * 2 + -6224;
      break;
    }
    return i.__$u.c = function() {
      var n;
      !RI(A.peek()) && -5 * -1670 + -11 * -821 + -17378 === ((n = i.base) == null ? void (7446 + -10 * -489 + -12336) : n.nodeType) ? i.base.data = A.peek() : (i.__$f |= 1282 + -11 * 28 + 1 * -973, i.setState({}));
    }, fQ(function() {
      var n = e.value.value;
      return -8477 + -125 * -53 + 1852 === n ? -1432 + 57 * -29 + 3085 : !(-3 * -379 + -2 * -4554 + -10245) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
i0.displayName = "_st";
var xg = {};
xg.configurable = !(-1 * 778 + -4073 * -2 + -7368), xg.value = void (9591 + 26 * -118 + 11 * -593);
var Eg = {};
Eg.configurable = !0, Eg.value = i0;
var dg = {};
dg.configurable = !(-1359 + -1 * -123 + 1236), dg.get = function() {
  var o = {};
  return o.data = this, o;
};
var lg = {};
lg.configurable = !(1340 * 1 + -17 * -362 + 6 * -1249), lg.value = 1;
var Ct = {};
Ct.constructor = xg, Ct.type = Eg, Ct.props = dg, Ct.__b = lg, Object.defineProperties(CA.prototype, Ct), Oe("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var g = e[A];
      g instanceof CA && (t || (i.__np = t = {}), t[A] = g, e[A] = g.peek());
    }
  }
  o(i);
}), Oe("__r", function(o, i) {
  no();
  var t, e = i.__c;
  e && (e.__$f &= -(-357 * 11 + -9344 + 13273 * 1), (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var g;
    return Xg(function() {
      g = this;
    }), g.c = function() {
      e.__$f |= 1 * -2185 + 25 * -73 + 1 * 4011, e.setState({});
    }, g;
  }())), no(t), o(i);
}), Oe("__e", function(o, i, t, e) {
  no(), o(i, t, e);
}), Oe("diffed", function(o, i) {
  no();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var g = t.U;
      if (g) for (var n in g) {
        var I = g[n];
        void (-9373 * 1 + 365 * -17 + 15578) !== I && !(n in e) && (I.d(), g[n] = void 0);
      }
      else t.U = g = {};
      for (var a in e) {
        var r = g[a], B = e[a];
        void (-1648 * -6 + -9 * -111 + -1 * 10887) === r ? (r = yQ(t, a, B, A), g[a] = r) : r.o(B, A);
      }
    }
  }
  o(i);
});
function yQ(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, g = $a(t);
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
        t.U = void 0;
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
      I && (n.__$u = void (-8348 + -677 * -2 + 6994), I.d());
    }
  }
  o(i);
}), Oe("__h", function(o, i, t, e) {
  (e < 5299 + 176 * 29 + -10400 || 97 * 86 + -419 + -7914 === e) && (i.__$f |= 6994 + 4441 * -1 + 2551 * -1), o(i, t, e);
}), JA.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && void (1450 + 8989 * -1 + 7539) !== t.s || 25 * 339 + 3751 * 1 + -21 * 582 & this.__$f)) return !(-9454 + -163 * -58);
  if (1 * -7271 + 6 * 49 + -10 * -698 & this.__$f) return !0;
  for (var e in i) return !0;
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(8699 * 1 + -5017 * 1 + -526 * 7);
  for (var g in this.props) if (!(g in o)) return !(13 * 575 + 5115 + -12590);
  return !(-9013 * 1 + 9856 + 421 * -2);
};
function g0(o) {
  return bA(function() {
    return $a(o);
  }, []);
}
const Wo = At(void 0);
Wo.displayName = "CameraServiceContext";
function DQ() {
  const o = Qe(Wo);
  if (o === void 0)
    throw new Error(`${Wo.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function n0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Fi() {
  return (await n0()).filter((i) => i.kind === "videoinput");
}
function Si(o) {
  o.getTracks().forEach((t) => t.stop());
}
function nI(o) {
  return o.getVideoTracks()[-6689 * -1 + 65 * 77 + 5847 * -2];
}
const fo = {};
fo.width = 1920, fo.height = 1080, fo.facingMode = Zg.FRONT;
const wQ = fo;
var he, Ke, OA;
class I0 {
  constructor({ defaultVideoConstrains: i = wQ, minCameraShorterSide: t = LB } = {}) {
    W(this, he);
    W(this, Ke, []);
    W(this, OA, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, L(this, he, e);
  }
  get availableCameraProperties() {
    return y(this, Ke);
  }
  get mediaStream() {
    return y(this, OA);
  }
  get videoTrack() {
    return y(this, OA) ? nI(y(this, OA)) : void (3 * -1499 + -4638 + -29 * -315);
  }
  get isCameraActive() {
    var i;
    return !!((i = y(this, OA)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    Si(t);
  }
  async open(i = {}) {
    tI() && await Cg(-731 * -2 + -11 * 342 + 22 * 125), L(this, OA, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await Fi();
    if (i.length <= -5711 + 115 * -53 + 11807) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = i.findIndex((I) => I.deviceId === e.deviceId), g = i[A + (754 + -753 * 1)] ?? i[-2281 + 1 * 2281], n = this.getConstraints(t, g);
    this.close(), await this.open(n);
  }
  close() {
    y(this, OA) && (Si(y(this, OA)), L(this, OA, null));
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
    if (!i.width) throw new Y("Video width is undefined");
    if (!i.height) throw new Y("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await n0(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    if (i !== Zg.FRONT)
      return this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Oa() ? (await Fi()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (1 * 2047 + -3470 + 1 * 1423);
  }
  async collectAvailableCamerasInfo() {
    const i = await Fi();
    for (const t of i) {
      tI() && await Cg(-1341 * 3 + 6942 + 3 * -823);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const g = await navigator.mediaDevices.getUserMedia(A), n = nI(g);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const B = r;
        y(this, Ke).push(B), Si(g);
      } catch (e) {
        e instanceof Error && Y.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...y(this, he).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (-411 * -2 + 1742 + 641 * -4);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new Y("Could not init camera settings");
    if (typeof y(this, he).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < y(this, he).minCameraShorterSide)
      throw this.close(), new Y("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
he = new WeakMap(), Ke = new WeakMap(), OA = new WeakMap();
var Nt;
class mQ {
  constructor(i, t, e) {
    W(this, Nt, !1);
    this.videoHandler = i, this.cameraHandler = t, this.keypressDetection = e;
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
  async startVideoStream(i = {}) {
    await this.requestCameraPermission(), this.keypressDetection.addKeydownListener(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), TB() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(i != null && i.width)) throw new Y("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new Y("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new Y("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, -7932 + 3966 * 2, -7136 + -1 * -7136), { image: t, timestamp: Date.now() };
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
Nt = new WeakMap();
var zA;
class bQ {
  constructor(i) {
    W(this, zA);
    L(this, zA, i);
  }
  get videoElement() {
    return y(this, zA);
  }
  async play(i) {
    y(this, zA).srcObject = i, await y(this, zA).play();
  }
  stop() {
    y(this, zA).srcObject = null;
  }
  hasSrcObject() {
    return !!y(this, zA).srcObject;
  }
}
zA = new WeakMap();
class GQ {
  constructor() {
    D(this, "keypressCount", 0);
    D(this, "initializationTime");
    D(this, "timeToFirstKeypress", void (-5182 + -1 * -5182));
    D(this, "handleKeyDown", () => {
      this.keypressCount++, this.keypressCount === 9 * 15 + 1 * -8261 + 8127 && (this.timeToFirstKeypress = Date.now() - this.initializationTime);
    });
    this.initializationTime = Date.now();
  }
  removeKeydownListener() {
    this.keypressCount = 1823 * -2 + -4621 + 1 * 8267, this.timeToFirstKeypress = void (5 * 1797 + -44 * 22 + -1 * 8017), window.removeEventListener("keydown", this.handleKeyDown);
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
function kQ(o) {
  const i = NA(null), [t, e] = fA(), [A, g] = fA(), { handleError: n, setIsCameraReady: I } = Se(), a = te((B) => {
    g((C) => qB(B, C));
  }, []);
  q(() => {
    if (!i.current) {
      n(new Y("Something went wrong during video initialization"));
      return;
    }
    const B = new bQ(i.current), C = new I0(), x = new GQ(), s = new mQ(B, C, x);
    return (async () => {
      try {
        const d = {};
        d.facingMode = o, await s.startVideoStream(d);
      } catch (d) {
        if (d instanceof Error) {
          n(Y.fromCameraError(d));
          return;
        }
      }
      e(s), I(!0), a(s.getCameraResolution());
    })(), () => {
      s == null || s.stopStreaming(), I(!1), e(void (1868 * -4 + -7217 + 14689));
    };
  }, [o, n, I, i, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = i, r;
}
function NQ({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: g } = kQ(o), n = bA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: g
    }),
    [e, t, A, g]
  );
  return /* @__PURE__ */ p(Wo.Provider, { value: n, children: i });
}
const FQ = async () => WebAssembly.validate(new Uint8Array([-8 * -820 + -91 * 21 + 4649 * -1, 97, -2267 * -1 + 1862 + 1338 * -3, -14 * -71 + -5431 * 1 + 4546, -5907 * -1 + -4602 + 163 * -8, 6931 * 1 + -2256 * 3 + 163 * -1, -1 * 827 + -9749 * -1 + -8922 * 1, 0, -559 * 11 + 5 * 1137 + -93 * -5, -3389 * -1 + -1 * 4035 + -7 * -93, 2741 + 2 * -1370, 4649 + 2 * -1472 + -1 * 1609, -1 * -4099 + -870 + -1 * 3229, -681 * 3 + 1 * 3785 + -1741, 3 * -141 + 353 * 2 + -160, 1 * 7205 + -5216 + -1986, 2, 8060 + 1 * -7341 + -359 * 2, -2917 + -5 * -178 + -2027 * -1, -1 * -9011 + 2186 * -2 + -4629, 635 + -5 * 125, 5278 + 3177 * 1 + -8454, -2210 * -3 + -228 * -25 + -101 * 122, -8338 + -22 * -379, -7129 + 4810 * -2 + 2 * 8407, 4685 + -773 * -4 + 707 * -11, 253, 4457 + 1 * -4442, 253, 2 * 8 + -8916 + -4499 * -2, 8399 + 4194 * -2]));
function SQ() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(3 * -3273 + 5782 + 4053);
}
function RQ() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = SQ();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function MQ(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const ug = {};
ug.label = ">1m", ug.time = 60;
const hg = {};
hg.label = ">45", hg.time = 45;
const fg = {};
fg.label = ">30", fg.time = 30;
function vQ(o, i = [ug, hg, fg]) {
  const t = i.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (o > e.time) return e.label;
  return "" + o;
}
const LQ = (o) => Math.round(o / 500) * 500 / (-1889 * -2 + 44 * 216 + -12282), II = (o) => o ? o <= 1 ? Math.round(o * (-2 * 332 + -2368 + 3052)) / (-19 * 358 + 6507 + 315) : Math.round(o / (-6095 + 143 * -26 + 9863)) * (5245 + 1039 * -5) : -3123 + -10 * -492 + -1797 * 1, JQ = (o) => Math.round(o * (859 * -2 + 110 * -4 + 2160)) / (1 * 2521 + 1750 + 4269 * -1);
function UQ(o) {
  return o !== hA.RUNNING ? Mo.VISIBLE : Mo.VISIBLE_WITH_MASK;
}
async function WQ() {
  return await FQ() ? iI.SIMD : iI.NO_SIMD;
}
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, a0 = {}, aI = {}, YQ = OQ;
function OQ(o, i) {
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
var r0 = {};
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
})(r0);
var HQ = si;
function si() {
  this._listeners = {};
}
si.prototype.on = function(o, i, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
si.prototype.off = function(o, i) {
  if (o === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
si.prototype.emit = function(o) {
  var i = this._listeners[o];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var KQ = rI(rI);
function rI(o) {
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
    o.writeFloatLE = i.bind(null, CI), o.writeFloatBE = i.bind(null, BI);
    function t(e, A, g) {
      var n = e(A, g), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    o.readFloatLE = t.bind(null, QI), o.readFloatBE = t.bind(null, sI);
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
    o.writeDoubleLE = i.bind(null, CI, 0, 4), o.writeDoubleBE = i.bind(null, BI, 4, 0);
    function t(e, A, g, n, I) {
      var a = e(n, I + A), r = e(n, I + g), B = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, x = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? x ? NaN : B * (1 / 0) : C === 0 ? B * 5e-324 * x : B * Math.pow(2, C - 1075) * (x + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, QI, 0, 4), o.readDoubleBE = t.bind(null, sI, 4, 0);
  }(), o;
}
function CI(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function BI(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function QI(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function sI(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function cI(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var TQ = PQ;
function PQ(o) {
  try {
    if (typeof cI != "function")
      return null;
    var i = cI(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var C0 = {};
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
})(C0);
var qQ = jQ;
function jQ(o, i, t) {
  var e = t || 8192, A = e >>> 1, g = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return o(I);
    n + I > e && (g = o(e), n = 0);
    var a = i.call(g, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var Ri, xI;
function ZQ() {
  if (xI)
    return Ri;
  xI = 1, Ri = i;
  var o = Re();
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
  }, Ri;
}
var EI;
function Re() {
  return EI || (EI = 1, function(o) {
    var i = o;
    i.asPromise = YQ, i.base64 = r0, i.EventEmitter = HQ, i.float = KQ, i.inquire = TQ, i.utf8 = C0, i.pool = qQ, i.LongBits = ZQ(), i.isNode = !!(typeof ce < "u" && ce && ce.process && ce.process.versions && ce.process.versions.node), i.global = i.isNode && ce || typeof window < "u" && window || typeof self < "u" && self || ce, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(aI)), aI;
}
var B0 = J, UA = Re(), pg, ci = UA.LongBits, dI = UA.base64, lI = UA.utf8;
function _t(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function $g() {
}
function VQ(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function J() {
  this.len = 0, this.head = new _t($g, 0, 0), this.tail = this.head, this.states = null;
}
var Q0 = function() {
  return UA.Buffer ? function() {
    return (J.create = function() {
      return new pg();
    })();
  } : function() {
    return new J();
  };
};
J.create = Q0();
J.alloc = function(o) {
  return new UA.Array(o);
};
UA.Array !== Array && (J.alloc = UA.pool(J.alloc, UA.Array.prototype.subarray));
J.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new _t(o, i, t), this.len += i, this;
};
function An(o, i, t) {
  i[t] = o & 255;
}
function _Q(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function en(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
en.prototype = Object.create(_t.prototype);
en.prototype.fn = _Q;
J.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new en(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
J.prototype.int32 = function(o) {
  return o < 0 ? this._push(tn, 10, ci.fromNumber(o)) : this.uint32(o);
};
J.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function tn(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
J.prototype.uint64 = function(o) {
  var i = ci.from(o);
  return this._push(tn, i.length(), i);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(o) {
  var i = ci.from(o).zzEncode();
  return this._push(tn, i.length(), i);
};
J.prototype.bool = function(o) {
  return this._push(An, 1, o ? 1 : 0);
};
function yg(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
J.prototype.fixed32 = function(o) {
  return this._push(yg, 4, o >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(o) {
  var i = ci.from(o);
  return this._push(yg, 4, i.lo)._push(yg, 4, i.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(o) {
  return this._push(UA.float.writeFloatLE, 4, o);
};
J.prototype.double = function(o) {
  return this._push(UA.float.writeDoubleLE, 8, o);
};
var zQ = UA.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
J.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(An, 1, 0);
  if (UA.isString(o)) {
    var t = J.alloc(i = dI.length(o));
    dI.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(zQ, i, o);
};
J.prototype.string = function(o) {
  var i = lI.length(o);
  return i ? this.uint32(i)._push(lI.write, i, o) : this._push(An, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new VQ(this), this.head = this.tail = new _t($g, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new _t($g, 0, 0), this.len = 0), this;
};
J.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
J.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
J._configure = function(o) {
  pg = o, J.create = Q0(), pg._configure();
};
var XQ = jA, s0 = B0;
(jA.prototype = Object.create(s0.prototype)).constructor = jA;
var re = Re();
function jA() {
  s0.call(this);
}
jA._configure = function() {
  jA.alloc = re._Buffer_allocUnsafe, jA.writeBytesBuffer = re.Buffer && re.Buffer.prototype instanceof Uint8Array && re.Buffer.prototype.set.name === "set" ? function(o, i, t) {
    i.set(o, t);
  } : function(o, i, t) {
    if (o.copy)
      o.copy(i, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        i[t++] = o[e++];
  };
};
jA.prototype.bytes = function(o) {
  re.isString(o) && (o = re._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(jA.writeBytesBuffer, i, o), this;
};
function $Q(o, i, t) {
  o.length < 40 ? re.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
jA.prototype.string = function(o) {
  var i = re.Buffer.byteLength(o);
  return this.uint32(i), i && this._push($Q, i, o), this;
};
jA._configure();
var c0 = $, ZA = Re(), Dg, x0 = ZA.LongBits, As = ZA.utf8;
function KA(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function $(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var uI = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new $(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new $(o);
  throw Error("illegal buffer");
}, E0 = function() {
  return ZA.Buffer ? function(o) {
    return ($.create = function(i) {
      return ZA.Buffer.isBuffer(i) ? new Dg(i) : uI(i);
    })(o);
  } : uI;
};
$.create = E0();
$.prototype._slice = ZA.Array.prototype.subarray || /* istanbul ignore next */
ZA.Array.prototype.slice;
$.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, KA(this, 10);
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
function Mi() {
  var o = new x0(0, 0), i = 0;
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
        throw KA(this);
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
        throw KA(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
$.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Yo(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
$.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw KA(this, 4);
  return Yo(this.buf, this.pos += 4);
};
$.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw KA(this, 4);
  return Yo(this.buf, this.pos += 4) | 0;
};
function hI() {
  if (this.pos + 8 > this.len)
    throw KA(this, 8);
  return new x0(Yo(this.buf, this.pos += 4), Yo(this.buf, this.pos += 4));
}
$.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw KA(this, 4);
  var o = ZA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
$.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw KA(this, 4);
  var o = ZA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
$.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw KA(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
$.prototype.string = function() {
  var o = this.bytes();
  return As.read(o, 0, o.length);
};
$.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw KA(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw KA(this);
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
  Dg = o, $.create = E0(), Dg._configure();
  var i = ZA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ZA.merge($.prototype, {
    int64: function() {
      return Mi.call(this)[i](!1);
    },
    uint64: function() {
      return Mi.call(this)[i](!0);
    },
    sint64: function() {
      return Mi.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return hI.call(this)[i](!0);
    },
    sfixed64: function() {
      return hI.call(this)[i](!1);
    }
  });
};
var es = Fe, d0 = c0;
(Fe.prototype = Object.create(d0.prototype)).constructor = Fe;
var fI = Re();
function Fe(o) {
  d0.call(this, o);
}
Fe._configure = function() {
  fI.Buffer && (Fe.prototype._slice = fI.Buffer.prototype.slice);
};
Fe.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
Fe._configure();
var l0 = {}, ts = Gt, on = Re();
(Gt.prototype = Object.create(on.EventEmitter.prototype)).constructor = Gt;
function Gt(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  on.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
Gt.prototype.rpcCall = function o(i, t, e, A, g) {
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
Gt.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var i = o;
  i.Service = ts;
})(l0);
var os = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = B0, i.BufferWriter = XQ, i.Reader = c0, i.BufferReader = es, i.util = Re(), i.rpc = l0, i.roots = os, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(a0);
var S = a0;
const f = S.Reader, v = S.Writer, l = S.util, Q = S.roots.default || (S.roots.default = {}), $e = Q.dot = (() => {
  const o = {};
  return o.Content = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.token = l.newBuffer([]), i.prototype.iv = l.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = l.newBuffer([]), i.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.Content)
        return t;
      let e = new Q.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
      return t.prototype.images = l.emptyArray, t.prototype.metadata = null, t.create = function(e) {
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
        get: l.oneOfGetter(e = ["sessionToken"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: l.oneOfGetter(e = ["web", "android", "ios"]),
        set: l.oneOfSetter(e)
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
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (g._sessionToken = 1, !l.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !l.isString(A.componentVersion))
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
              I.dynamicCameraFrameProperties === l.emptyObject && (I.dynamicCameraFrameProperties = {});
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
            if (!l.isString(A.supportedAbis[g]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !l.isString(A.device))
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
            if (!(A.digests[g] && typeof A.digests[g].length == "number" || l.isString(A.digests[g])))
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
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let g = Object.keys(A.dynamicCameraFrameProperties);
          for (let n = 0; n < g.length; ++n) {
            let I = Q.dot.Int32List.verify(A.dynamicCameraFrameProperties[g[n]]);
            if (I)
              return "dynamicCameraFrameProperties." + I;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
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
            typeof A.digests[n] == "string" ? l.base64.decode(A.digests[n], g.digests[n] = l.newBuffer(l.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (g.digests[n] = A.digests[n]);
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
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, g.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (g.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
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
            n.digests[a] = g.bytes === String ? l.base64.encode(A.digests[a], 0, A.digests[a].length) : g.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
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
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = Q.dot.v4.AndroidCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = Q.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (n.tamperingIndicators = g.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : g.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, g.oneofs && (n._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (n.croppedYuv420Image = Q.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, g), g.oneofs && (n._croppedYuv420Image = "croppedYuv420Image")), n;
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
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
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
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.Yuv420Image)
          return e;
        let A = new Q.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = Q.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.size = null, A.bytes === String ? g.yPlane = "" : (g.yPlane = [], A.bytes !== Array && (g.yPlane = l.newBuffer(g.yPlane))), A.bytes === String ? g.uPlane = "" : (g.uPlane = [], A.bytes !== Array && (g.uPlane = l.newBuffer(g.uPlane))), A.bytes === String ? g.vPlane = "" : (g.vPlane = [], A.bytes !== Array && (g.vPlane = l.newBuffer(g.vPlane)))), e.size != null && e.hasOwnProperty("size") && (g.size = Q.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (g.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (g.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (g.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), g;
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
            if (!(A.digests[g] && typeof A.digests[g].length == "number" || l.isString(A.digests[g])))
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
            if (!l.isInteger(A.isoValues[g]))
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
            typeof A.digests[n] == "string" ? l.base64.decode(A.digests[n], g.digests[n] = l.newBuffer(l.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (g.digests[n] = A.digests[n]);
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
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: l.oneOfGetter(e = ["croppedImage"]),
        set: l.oneOfSetter(e)
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
            if (!l.isString(A.hashedDetectedImages[g]))
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
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !l.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof Q.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new Q.dot.v4.HashedDetectedImageWithTimestamp();
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
    }(), i.MediaTrackSettings = function() {
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
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !l.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !l.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !l.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !l.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !l.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !l.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !l.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !l.isString(A.deviceName) ? "deviceName: string expected" : null;
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : null;
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
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
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
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: l.oneOfSetter(e)
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
        get: l.oneOfGetter(e = ["bytes"]),
        set: l.oneOfSetter(e)
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || l.isString(A.bytes)) ? "bytes: buffer expected" : null;
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
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, g.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (g.bytes = A.bytes)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.id = g.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (n.id = g.enums === String ? Q.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : Q.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (n.bytes = g.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : g.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, g.oneofs && (n._bytes = "bytes")), n;
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
        get: l.oneOfGetter(e = ["protocol"]),
        set: l.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: l.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: l.oneOfSetter(e)
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || l.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
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
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, g.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (g.activeAuthenticationResponse = A.activeAuthenticationResponse)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.status = g.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (n.status = g.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : Q.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (n.protocol = g.enums === String ? Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : Q.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, g.oneofs && (n._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (n.activeAuthenticationResponse = g.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : g.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, g.oneofs && (n._activeAuthenticationResponse = "activeAuthenticationResponse")), n;
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
      t.prototype.image = null, t.prototype.segments = l.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: l.oneOfGetter(e = ["image"]),
        set: l.oneOfSetter(e)
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
    return i.prototype.bytes = l.newBuffer([]), i.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.Image)
        return t;
      let e = new Q.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
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
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : null;
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
    return i.prototype.items = l.emptyArray, i.create = function(t) {
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
          if (!l.isInteger(t.items[e]))
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
    return i.prototype.digest = l.newBuffer([]), i.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, i.create = function(t) {
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
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof Q.dot.DigestWithTimestamp)
        return t;
      let e = new Q.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, e.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = l.newBuffer(A.digest))), l.Long) {
          let g = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? g.toString() : e.longs === Number ? g.toNumber() : g;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, S.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), o;
})();
(function(o, i) {
  function t(a, r, B, C, x) {
    return _(a - 120, C);
  }
  function e(a, r, B, C, x) {
    return _(a - 783, C);
  }
  function A(a, r, B, C, x) {
    return _(x - -722, r);
  }
  const g = o();
  function n(a, r, B, C, x) {
    return _(B - 324, r);
  }
  function I(a, r, B, C, x) {
    return _(a - 719, B);
  }
  for (; ; )
    try {
      if (parseInt(I(1162, 1175, "lfMv", 1140, 1181)) / 1 + parseInt(A(-271, "3MqJ", -271, -290, -274)) / 2 + -parseInt(n(806, "gzSO", 784, 761, 802)) / 3 * (parseInt(e(1248, 1263, 1239, "llAE", 1259)) / 4) + -parseInt(e(1228, 1210, 1220, "tz(k", 1239)) / 5 * (-parseInt(n(762, "jxND", 764, 787, 757)) / 6) + parseInt(I(1145, 1150, "6@$h", 1144, 1130)) / 7 + -parseInt(e(1240, 1251, 1231, "OOaH", 1240)) / 8 * (parseInt(n(769, "hBX5", 775, 769, 781)) / 9) + -parseInt(t(545, 566, 543, "zjPq", 533)) / 10 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Oo, 658092);
function _(o, i) {
  const t = Oo();
  return _ = function(e, A) {
    e = e - 423;
    let g = t[e];
    if (_.KhsNLT === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      _.vQZcgx = B, o = arguments, _.KhsNLT = !0;
    }
    const I = t[8612 + -1 * 6746 + -933 * 2], a = e + I, r = o[a];
    return r ? g = r : (_.UtNrEa === void 0 && (_.UtNrEa = !0), g = _.vQZcgx(g, A), o[a] = g), g;
  }, _(o, i);
}
async function is() {
  function o(B, C, x, s, E) {
    return _(E - -618, x);
  }
  const i = {};
  i[A(1285, 1288, 1295, "a8C4", 1284)] = Ua, i[A(1283, 1283, 1281, "fxQE", 1272) + "h"] = 256;
  const t = await window[o(-151, -141, "hG8W", -163, -150) + "o"][g(367, 356, "zjPq") + "e"][I(1018, 1004, 989, 998, "(KY&") + r(1348, 1347, "F*&@", 1339) + "y"](i, !0, [o(-216, -208, "nuY&", -212, -194) + "pt", o(-180, -203, "jxND", -168, -185) + "pt"]), e = Uint8Array[I(1033, 1012, 1018, 998, "F*&@")](Array(16)[r(1342, 1362, "qPOG", 1356)](-1115 + -5 * 131 + 1770));
  function A(B, C, x, s, E) {
    return _(E - 834, s);
  }
  function g(B, C, x, s, E) {
    return _(C - -98, x);
  }
  const n = window[g(363, 343, "Xy!B") + "o"][I(1049, 1045, 1044, 1065, "*4Cc") + g(372, 355, "u*M)") + I(1010, 1010, 1027, 993, "a8C4")](e);
  function I(B, C, x, s, E) {
    return _(C - 581, E);
  }
  const a = {};
  a[r(1354, 1364, "g&@8", 1353)] = t;
  function r(B, C, x, s, E) {
    return _(s - 907, x);
  }
  return a.iv = n, a;
}
function Oo() {
  const o = ["W5hdNCkCAmowW6H6o8ktFmkfr8oK", "W7pdJuLSW5RdOgafW7/dGgCc", "wvpdLSkC", "EG7cPmoE", "zrNcO11tASkx", "AfKtFXy", "oCkMgSkRra", "cItcICo4sq", "A8oZWP91WPyiW48CWOjMW5RdO8ob", "jsddTJ7cHa", "nSouW6OFz1jOoweSmwZcGW", "o8odCSo4zI5S", "WRBdGmo3W6lcLq", "W6tcGmk+WQFdLHWKWP0iWOBdUuFdSW", "W6ZcQc3dKa", "iCkCiW", "i8kAWO/cQmk8pwXqW5FdVZ0dW4C", "e8kWWOJcVIS", "W47cGv0ACmovoW", "W6BcPtKSDd3dNCoNgINcQCkvWOS", "WQ7dOCosWQ8PC8oiW7vWWPuVWP8", "W7NcOmkDW61U", "g8k3WR51bW", "W4ZdSsKdpq", "tgFdMmk6e8oeW4OPWOvEW6OrtG", "WRZdQSoZW5hcPW8AWO8KWQZcU8kHra", "uvVdL8kv", "W6T6WRpdUhu", "DqpcVmoEia", "WP4iECkBWPS", "D8kMW6xdQG", "CmkGW6/dJmkF", "g8oDW7GjWOK", "WReQW7FcUcFdQLFdOwa2W7pdIW", "W5dcQSk/", "WRu7W4hdU8kR", "W4i8qmktWO1BW6u", "xmkVchlcGa", "zSoWrCoZjCksd8kjW4HLi8ocW5q", "tCkpWQTpW4BdKLCri1/dG8o6ka", "W6vTWRNdU2a", "W6CvcqldKG", "WO8+BmkNiCo8wmoeaSkMW5vU", "qqH1W7eBzxe", "ct3dTCkQW5VdMue", "W58kWRC"];
  return Oo = function() {
    return o;
  }, Oo();
}
async function gs(o) {
  function i(x, s, E, d, u) {
    return _(d - 764, E);
  }
  const { iv: t, key: e } = await is(), A = {};
  A[C(267, 266, 264, "qPOG", 276)] = Ua, A.iv = t;
  const g = await window[i(1214, 1193, "hri%", 1206) + "o"][r(1293, "5@#l", 1259, 1280) + "e"][a(302, "oG[r", 300, 326, 311) + "pt"](A, e, o), n = await window[B("gzSO", 351, 323, 341) + "o"][r(1315, "uFh*", 1315, 1300) + "e"][r(1295, "y6pG", 1299, 1296) + i(1229, 1218, "XRUo", 1225)](B("nD]M", 301, 296, 317), e), I = {};
  I[B("Xy!B", 293, 310, 310) + "ge"] = g;
  function a(x, s, E, d, u) {
    return _(u - -119, s);
  }
  function r(x, s, E, d, u) {
    return _(d - 844, s);
  }
  function B(x, s, E, d, u) {
    return _(d - -118, x);
  }
  I[r(1308, "uGsy", 1291, 1306)] = n;
  function C(x, s, E, d, u) {
    return _(u - -151, d);
  }
  return I.iv = t, I;
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return xA(a - 759, B);
  }
  function e(a, r, B, C, x) {
    return xA(a - -398, B);
  }
  function A(a, r, B, C, x) {
    return xA(r - 169, a);
  }
  function g(a, r, B, C, x) {
    return xA(B - 414, r);
  }
  const n = o();
  function I(a, r, B, C, x) {
    return xA(x - -531, C);
  }
  for (; ; )
    try {
      if (-parseInt(g(820, "T)Tz", 827, 819, 837)) / 1 + parseInt(A("Zrcw", 559, 546, 570, 552)) / 2 * (-parseInt(t(1148, 1139, "3d8x", 1147, 1160)) / 3) + -parseInt(e(6, 14, "o9[4", 3, 19)) / 4 * (parseInt(e(16, 31, "2yni", 9, 11)) / 5) + parseInt(A("l0hO", 572, 576, 576, 570)) / 6 * (-parseInt(A("b8yC", 561, 570, 566, 551)) / 7) + parseInt(e(-2, 1, "w(9p", 5, 13)) / 8 * (-parseInt(I(-124, -132, -122, "OQyu", -131)) / 9) + -parseInt(e(0, -16, "ZGwJ", -8, -13)) / 10 + -parseInt(t(1150, 1150, "I4*n", 1137, 1137)) / 11 * (-parseInt(I(-126, -111, -115, "%@K@", -122)) / 12) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ho, 1427797 + 201665 * -5);
function xA(o, i) {
  const t = Ho();
  return xA = function(e, A) {
    e = e - (3 * -1106 + 1201 * -3 + 26 * 281);
    let g = t[e];
    if (xA.dmWMjN === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      xA.aSFtXb = B, o = arguments, xA.dmWMjN = !0;
    }
    const I = t[-9015 + -1803 * -5], a = e + I, r = o[a];
    return r ? g = r : (xA.eZSwPL === void 0 && (xA.eZSwPL = !0), g = xA.aSFtXb(g, A), o[a] = g), g;
  }, xA(o, i);
}
function Ho() {
  const o = ["W7T0t8ozWQLdemkaCCkjW6qE", "W63dOtBdJ8kkuSklWQi3vCkbW6xdQa", "AmoaobVcNCkNv8oYW4/cNSkDW4NdJa", "W7uZW7SRcrxcJxJdPNDxfa", "FSkEzXG5W5FdVq", "ygpcSt3dN2hcK8o2WPNcQ2tcRG", "gqlcPfSW", "W5hcJCoeq8kZFIFdGG", "z8oxW4TDWRFcSMNcL8knWPtdNe7dSG", "W73dSKldKqFcGmkK", "iddcML/cSdWNWOdcQmoZWQ/dISkBW7q", "WQCeWQJdHvFdJdFcM8kOdGdcPa", "W5pcJCk5cCompG7dRwuXWPnk", "WRpcSg7cNCop", "etiJamo8", "p8ogW6iNWQ11xvWJwstdTq", "lHxcQrZcNGFcTq", "q0rdeSkhW6jTW5BcGCoJW61qwG", "rKTdumoIWPuCW4lcIq", "fwPCihSztcRdVW", "C0bMc2RdH8ksna", "WPxdR8k/WPX1", "vXXlFmokBH3cTW", "WQhdKd47F8oCia", "jfK2DLaPaeX8xmkeymoz", "W7L/tCorWQjmr8oCsmkvW4i1WQ3cPq", "lCoTWR/cPgqEWOrUWPz8sCouW5S", "lSk5CJm", "WPRcOmouqCkul8o4WRy", "rtqejgK", "grGuqCoh", "jJddPxJcJW"];
  return Ho = function() {
    return o;
  }, Ho();
}
function ns(o) {
  function i(n, I, a, r, B) {
    return xA(I - 962, r);
  }
  function t(n, I, a, r, B) {
    return xA(r - -839, a);
  }
  function e(n, I, a, r, B) {
    return xA(a - 342, r);
  }
  const A = new ArrayBuffer(o[t(-436, -449, "2yni", -445) + "h"]), g = new Uint8Array(A);
  for (let n = -1 * 7543 + -4610 + -4051 * -3, I = o[t(-435, -429, "ZGwJ", -428) + "h"]; n < I; n++)
    g[n] = o[e(756, 739, 752, "OQyu") + i(1365, 1349, 1339, "@)ny")](n);
  return A;
}
function Ko() {
  const o = ["W6xdTMFcINu", "W5O/sIBdMa", "WP3dImo2fmkD", "ndejWONcRG", "BCkLo2xcMH7dRCkghw8", "ESokW7P4WRi", "W5pcR1ZdNSod", "WQDTW5K3WRO", "W7VcJmoLrHe", "W5xcQCostG", "AMNdVmoYzSoOhmolW6BcGCoqsfW", "WODPhSoWeW", "W7VcPt4cWQe", "W7W3d0ZdLG", "WQZdTLRcJeO", "zftdTXzB", "kSonWQVdTSkK", "WP9AW7hdUgK", "q0f4f8kc", "yM/dIrT2", "gdjpW4HR", "ySoIW40OWOW", "WR7cTNldNfW", "W7udBSkdWRK", "W5ZcGqSK", "WP9kwmozWRq", "WR9KW7iPWRu", "qNtdNc4", "W6nwW68gWRq", "WPD6n8oVW70kyCoRWOZcU8o8WPjI", "WQ46AmolmG", "hcC2sLu", "W4xcQqemAW", "W4lcO8k/sSkd", "W41TWOBdTa4", "bSo8W65WWPm", "W6/cUSoTCtK", "WOBcSwpcOKK", "AY3cPCkjaG", "DColimktnq", "W4/cSmoICs0", "cmojqdZcSq", "bmodWO43W6q", "wSoTWOq3W5e", "W7FcTCotrrq", "fSo1W5JcRmoj", "W5bxWO5XDG", "W5LOWQBdJqK", "W6VcK8oKW53dSW", "xdRcRdFcPW", "bmo8W7fQWRG", "WRfxW4eOrq", "W7FcU8oavGW", "W79ygCopEW", "aSofW7xcO8kx", "WRXdWRSuha", "W6tcHepcOmoN", "W6JcKM7dH8ob", "WQivimk6", "W43cTmkdBr0", "WPFdML7cT0q", "WPZcLSothmk2", "WPRdLW3cKG0", "WRjGWQvowW", "WPv2nCoHWOr3b8oYWOZcIq", "cCobctBcRG", "WReGzmoAWQC", "iYRcMcuYo8obW7i", "W4/dVSkahXe", "W59nkmkjia", "WQ80sSo9WRK", "W73dMmofuCkt", "W6RcOIKssq", "B2JdS8oWomk0CCobW6BcHW", "WRLkW69iWPu", "W7HFxe3dLW", "WP8ol8kgWOC", "DSoMimkldW", "W6T6tCkYW7O", "W4VcISk6nNC", "WOLxW780DW", "iSo7W4zCWQO", "nSosm8k2da", "EMZdGYrO", "WOqRoCkgWOq", "DXiJvMa", "ySogWPDwW6G", "W7lcTs8FW4S", "W6hdKaecWQO", "W43cSZuKAa", "W5/cUJ8EWP0", "WQPsWORdKYBcH8kb", "wSoqEtddSSorvgy", "W61sg8kDuW", "pWNcR8ksba", "jSohpdhcGa", "t0f6gSkt", "lXFcLCotW74", "WQZdRmkgEvq", "W4/cUCoXW7uU", "C8ksWO45W5C", "W7nZaSkmFa", "W7/cTSkhW5VdIa", "W5JcJCoqWRddSG", "vmkpaCklfW", "WPpdQCoci8kE", "o8kqyY7dRG", "W74gWOOXWQO", "W6tdIvZcPf3cJsi", "kc7cItxdRq", "W6rxFSkyWRP+W7FcVuC", "W5dcRcL8WRq", "WQxdTCobW6pdVW", "W65xW58Foq", "E0VcGs9i", "W4ZdKmkKlXe", "BNRdVqLO", "WQFcJCoewmkC", "WO/dSKxcUuW", "WOJdKgRdOZu", "bdjrWRv0", "iSoMdrdcRW", "WQhcRSoDtCkC", "W7/cUhxcO8oS", "WPK8WPZdVKNdRSoJoWS", "FdxcLConWPi", "W4VcNSkGvSoDncfgW5iGCmoA", "hHaRD3i", "W4RcIgCssW", "W5GFndBdQG", "iftcVsiz", "W6RdR8kXjKu", "mGuaqmos", "W6XoWPpdVcG", "zfRdPXKa", "W594WOldRd0", "emoKAbldTq", "hHFcICkraa", "WRKYW6a7csaPuW", "cSoMW7FdTmkX", "W7yFmmkFWQa", "W4NdT8k8igK", "WOBdLbq9WQJcUSohra", "nH8KDXu", "fCo5BchdVa", "WPm+x8o3WQG", "A8kKWQ7dT8ofj8kxuf7cJ3v2", "W7ddQSkUa2C", "WPCZECojW5W", "WR8ejSk2", "W7rfnmoDwq", "ztBdOqTO", "W6nlWPZdSxe", "pYFcHSkYaa", "W6hcI8oOW5aw", "Dhj4pmkn", "W6xcKcKvWQO", "W74iumk9W78", "WQmRWPpdKa0", "itvqW6T2", "AX8gWOi", "W5z4WQrpBa", "WQtdNSkgW4ZdVa", "umo6lSkXfq", "kc8vDMW", "WQhdVmoUWRddNa", "uCoQlSoxcW", "W63cIqW2WPy", "nszMW6H6", "WRKUECkJWRW", "WPHAvthcTSorWQldJCo7WOFdTG", "qcBcNCofWRC", "W4jkoCkKW5XFEc3cTdlcSCkx", "WRnzW5aVja", "caLKWRzV", "W4dcON/dIYO", "WPSRvLtdLW", "hNldOCobW7S", "kcOQzNW", "W6FdJhNcQMq", "WQOVWQNdSaFcLSk/WRq", "WPRdQmoxwSkT", "WRixmSkJWQu", "jIJdHerGBmogW7VdQmkIECk7", "ECkIWO8nW7xdHZ7dHCo4tMSI", "WQz0nCo8rq", "W57cQ8oOwCkH", "sXf6t8oa", "W5yOWPtdTIC", "WQiqkCkNWR0", "W6JcImo8W4NdUW", "W7FcLmklWPaf", "kSoLAHNcKG", "WQZdS8o5lmk1", "W6GLvCoQWQW", "WPZdVftdKt8", "W7BcMwGnsq", "W6/cRrmBqG", "fmoiBY/dTq", "yCogi8kmya", "W4hcOGVcNMX1W6PGqKldOSoP", "Ff/cJs5M", "W4/cRrOerG", "hISkdwG", "WRPaWRKNba", "W6hcPHW1WQC", "WPRdQtONs8kOW6PH", "WQWSACkSWRq", "WQNcJ8oBEXuDWOzMW6TfdG", "W57cMSo8WR3dUG", "WOfdW7iLWRa", "WRGMWQ8zka", "tNm7d8kr", "WOmrgmoGWPC", "W5XOW6ufpW", "x8oszXddPSo9FLG", "tX8Esmow", "WP8OkSoHWOS", "WRnhWPmnaa", "oJ1pW5Dr", "DsO/WRxdMa", "W4u3W6WBWRy", "WQFcT8k9s8kQ", "d8oRvWNcLG", "EI7cVKup", "W6VcPKWNdW", "WQ7cJmkzbfCJWO1p", "W40IvCk4WRq", "cGFcNSkOgW", "WODJgSkiFa", "W69NwLtdQW", "W6RdUSkGFwm", "W4VdRCkiExi", "vN/cRrXJ", "WQNdLmkcaxK", "W6jUf8kll8o2omkWW7H9", "W5lcIXm9AW", "omkJwI3dGG"];
  return Ko = function() {
    return o;
  }, Ko();
}
(function(o, i) {
  const t = o();
  function e(a, r, B, C, x) {
    return X(x - 600, B);
  }
  function A(a, r, B, C, x) {
    return X(a - 193, B);
  }
  function g(a, r, B, C, x) {
    return X(C - -186, a);
  }
  function n(a, r, B, C, x) {
    return X(x - -119, B);
  }
  function I(a, r, B, C, x) {
    return X(r - 905, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(1273, 1165, "lj**", 1264, 1185)) / 1 * (-parseInt(I("o2JG", 1396, 1355, 1401, 1453)) / 2) + -parseInt(n(388, 344, "bTex", 324, 345)) / 3 * (parseInt(n(329, 289, "bTex", 368, 363)) / 4) + parseInt(A(716, 613, "JjgI", 785, 647)) / 5 + -parseInt(n(414, 353, "2yDT", 478, 379)) / 6 * (-parseInt(e(1220, 1233, "XQTi", 1315, 1204)) / 7) + -parseInt(I("LQmj", 1376, 1282, 1272, 1353)) / 8 * (-parseInt(n(410, 314, "Jvq&", 233, 321)) / 9) + parseInt(g("v7n6", 540, 391, 446, 531)) / 10 * (-parseInt(n(450, 621, "m3WM", 500, 521)) / 11) + parseInt(I("wc6r", 1367, 1389, 1387, 1300)) / 12 * (-parseInt(I("Axbt", 1361, 1447, 1472, 1273)) / 13) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ko, -10967 + 410 * 533 + -47165);
function X(o, i) {
  const t = Ko();
  return X = function(e, A) {
    e = e - (-6143 * 1 + -2511 + 9085);
    let g = t[e];
    if (X.OOzBdJ === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      X.WiznZe = B, o = arguments, X.OOzBdJ = !0;
    }
    const I = t[-2936 * 1 + 7042 + -4106], a = e + I, r = o[a];
    return r ? g = r : (X.WvwisA === void 0 && (X.WvwisA = !0), g = X.WiznZe(g, A), o[a] = g), g;
  }, X(o, i);
}
function Is() {
  function o(B, C, x, s, E) {
    return X(x - 141, C);
  }
  function i(B, C, x, s, E) {
    return X(B - -561, s);
  }
  const t = i(-112, 2, -8, "g*jb") + i(15, -79, 123, "qvyS") + e(313, "nk@s") + i(-37, 17, -96, "o2JG") + i(72, 1, 105, "m3WM") + o(689, "snpZ", 772) + g("LQmj", 702, 583) + e(288, "JjgI") + i(-55, -37, -72, "3[2L") + o(802, "i[Mq", 808) + I(808, "3[2L", 920, 925) + g("1P0P", 717, 624) + g("v7n6", 656, 560) + e(236, "3[2L") + e(316, "1ok5") + i(-2, -120, -120, ")Uy#") + g("ApbA", 774, 670) + e(304, "3[2L") + e(279, "bTex") + e(228, "i[Mq") + e(224, "XQTi") + i(-46, 50, -11, "ApbA") + g("GVwB", 760, 709) + I(1088, "XQTi", 958, 983) + I(880, "1ok5", 963, 988) + g("LC5j", 612, 686) + o(671, "askT", 578) + g("vcmc", 466, 533) + i(53, 81, 128, "1ok5") + i(65, 36, 37, "vcmc") + g("lj**", 648, 631) + i(-1, -106, -96, "4GvC") + o(540, ")20c", 574) + g("@UI@", 796, 680) + I(933, "m3WM", 933, 859) + e(255, "qnN!") + i(-100, 6, -50, "3[2L") + o(715, "XQTi", 719) + o(781, "Axbt", 754) + I(1089, "nk@s", 960, 976) + g("Axbt", 500, 541) + o(630, "gt*Z", 744) + g("8XHt", 572, 640) + i(47, 73, -55, "ILgt") + g("3[2L", 716, 751) + o(894, "GVwB", 806) + i(91, 140, 18, "lj**") + i(66, 105, 102, "lj**") + e(205, "8XHt") + e(139, "LCc%") + i(78, 26, -21, "4GvC") + g("1ok5", 585, 604) + e(100, "LC5j") + e(218, "4GvC") + i(62, 115, 147, "L0G7") + e(153, "Jvq&") + g("JjgI", 474, 540) + g("Jvq&", 721, 619) + g(")Uy#", 752, 720) + i(-69, -89, -145, "wc6r") + o(641, "FNi#", 690) + g("1pX7", 602, 617) + g("ILgt", 843, 735) + e(283, "lj**") + o(777, "qvyS", 798) + o(650, "q9xb", 635) + e(141, "bTex") + e(202, "m3WM") + i(26, 105, -78, "Xw##") + I(813, "LC5j", 951, 862) + i(-31, 8, -78, "1P0P") + o(762, "m3WM", 651) + g("A($]", 464, 556) + I(932, "LCc%", 993, 915) + i(-88, 16, 11, "XQTi") + I(823, "1pX7", 1053, 936) + e(242, "snpZ") + o(513, "1pX7", 619) + e(307, "1ok5") + e(130, "RITF") + I(1010, "ILgt", 894, 897) + o(737, "SDIn", 734) + i(-96, -34, -49, "LC5j") + I(846, "aW(]", 956, 845) + I(889, "wc6r", 871, 942) + o(534, "wc6r", 594) + i(-130, -57, -207, "Axbt") + o(680, "3[2L", 725) + o(757, "aW(]", 762) + I(852, "q9xb", 779, 828) + e(174, "A($]") + I(999, "i[Mq", 1034, 975) + o(555, "o2JG", 646) + g("LQmj", 727, 690) + g("q9xb", 487, 606) + e(289, "bTex") + i(-94, -4, 5, "FNi#") + o(735, "ILgt", 769) + i(-92, -183, -77, "XQTi") + i(-84, -116, -128, "qnN!") + e(156, "1P0P") + i(45, 45, 22, "nk@s") + I(954, "q9xb", 900, 932) + o(683, "FNi#", 615) + g("g*jb", 670, 645) + I(967, "ApbA", 755, 856) + i(49, 76, 6, "ILgt") + I(798, "A($]", 985, 888) + g("@UI@", 629, 739) + i(-24, 54, -142, "ApbA") + i(12, -34, -58, "bTex") + o(647, "snpZ", 625) + e(173, "4GvC") + o(844, "JjgI", 792) + o(560, "Jfh[", 621) + I(905, "SDIn", 868, 968) + o(845, "qvyS", 801) + g("JjgI", 484, 573) + g("3[2L", 663, 671) + o(550, "Jfh[", 630) + i(50, 125, 109, "askT") + I(927, "ILgt", 798, 833) + I(796, "q9xb", 866, 874) + i(-86, -37, -45, "1ok5") + o(590, "8XHt", 641) + g("bTex", 466, 580) + o(628, "aW(]", 575) + o(724, ")Uy#", 779) + e(223, "L0G7") + g("1P0P", 636, 643) + e(109, "qvyS") + i(76, 185, 47, "aW(]") + I(823, "Axbt", 980, 876) + e(263, "bTex") + I(870, "RITF", 934, 817) + o(680, "i[Mq", 686) + g("SLUq", 633, 736) + o(629, "Jvq&", 716) + i(37, -76, 142, "qvyS") + o(680, "$lbv", 622) + i(-23, 75, 50, "1P0P") + g("1pX7", 611, 655) + i(-60, -122, -63, "A($]") + I(989, "$lbv", 816, 886) + o(874, "snpZ", 788) + e(269, ")Uy#") + e(98, "lj**") + i(-44, -7, 39, "JjgI") + o(674, "aW(]", 600) + e(200, "1P0P") + I(734, "1pX7", 860, 762) + i(63, 139, 103, "Jfh[") + o(734, "i[Mq", 698) + o(722, "bTex", 703) + g("qvyS", 779, 661) + o(561, "SLUq", 652) + i(-66, 2, 25, "&0o[") + g("Jfh[", 596, 547) + g("Jvq&", 713, 634) + i(-52, 39, 22, "ILgt") + i(56, -26, 52, "8XHt") + e(180, "wc6r") + e(133, "2yDT") + o(685, "vcmc", 613) + e(142, "bTex") + e(114, "v7n6") + g("aW(]", 630, 748) + e(95, "X]Aw") + o(569, "@UI@", 653) + g("4GvC", 705, 732) + g("2yDT", 635, 538) + i(-93, -25, -32, "@UI@") + o(840, "v7n6", 748) + i(-103, -61, 9, "wc6r") + o(502, ")Uy#", 595) + i(-126, -131, -53, "q9xb") + I(789, "q9xb", 732, 851) + e(217, "LCc%") + o(709, ")20c", 732) + e(161, "L0G7") + i(36, 151, 99, "nk@s") + i(33, 22, 39, "ApbA") + I(915, "X]Aw", 957, 964) + g("g*jb", 749, 689) + o(754, "2yDT", 676) + i(-29, -116, 43, "snpZ") + I(860, "JjgI", 923, 892) + o(846, "2yDT", 730) + g("4GvC", 575, 553) + i(80, -31, 112, "bTex") + o(719, "lj**", 669) + e(233, "aW(]") + g("&0o[", 570, 576) + i(-14, -36, -55, "X]Aw") + o(551, "qnN!", 663) + e(246, "bTex") + o(518, "SDIn", 588) + i(-129, -49, -112, "L0G7") + o(758, "gt*Z", 684) + e(194, "FNi#");
  function e(B, C, x, s, E) {
    return X(B - -346, C);
  }
  const A = window[I(803, "ILgt", 767, 841)](t);
  function g(B, C, x, s, E) {
    return X(x - 90, B);
  }
  const n = window[g("ILgt", 641, 611)](A);
  function I(B, C, x, s, E) {
    return X(s - 320, C);
  }
  const a = ns(n), r = {};
  return r[I(938, "XQTi", 972, 963)] = Wa, r[o(743, "3[2L", 659)] = YB, window[i(-123, -162, -173, "XQTi") + "o"][I(772, "XQTi", 862, 765) + "e"][o(538, "$lbv", 593) + o(526, "1P0P", 644)](e(206, "XQTi"), a, r, !0, [e(150, "g*jb") + "pt"]);
}
async function as(o) {
  const i = await Is();
  function t(n, I, a, r, B) {
    return X(B - 109, I);
  }
  const e = {};
  e[g(6, -87, -170, "RITF")] = Wa;
  function A(n, I, a, r, B) {
    return X(r - 156, n);
  }
  function g(n, I, a, r, B) {
    return X(I - -741, r);
  }
  return window[A("XQTi", 693, 564, 594) + "o"][t(668, "qvyS", 690, 545, 642) + "e"][t(637, "wc6r", 614, 683, 692) + "pt"](e, i, o);
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return lA(B - 654, a);
  }
  function e(a, r, B, C, x) {
    return lA(B - 924, r);
  }
  function A(a, r, B, C, x) {
    return lA(a - 685, x);
  }
  function g(a, r, B, C, x) {
    return lA(a - 400, C);
  }
  const n = o();
  function I(a, r, B, C, x) {
    return lA(B - -987, a);
  }
  for (; ; )
    try {
      if (parseInt(g(835, 835, 836, "yMVl", 825)) / 1 * (-parseInt(g(816, 813, 810, "Cmhm", 815)) / 2) + parseInt(e(1339, "CGY1", 1337, 1342, 1345)) / 3 * (parseInt(I("L#qp", -564, -556, -568, -562)) / 4) + parseInt(e(1341, "Cmhm", 1343, 1346, 1332)) / 5 + -parseInt(t("d*![", 1080, 1076, 1087, 1085)) / 6 * (-parseInt(A(1106, 1105, 1112, 1111, "k^P#")) / 7) + -parseInt(e(1344, "CGY1", 1352, 1355, 1343)) / 8 + parseInt(g(815, 803, 807, "%(%H", 813)) / 9 + parseInt(e(1364, "Ei68", 1357, 1366, 1351)) / 10 * (-parseInt(e(1337, "Ll5a", 1342, 1335, 1353)) / 11) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(To, 137 * -1115 + 1 * 330567 + 41263);
function To() {
  const o = ["eXybbL8SWPn2tW", "ySogW4eDqHZcSI3dJmo/W6fjnq", "DCkRWPmJjdtdSqG", "xSk7W6a6WPqeWOFdQYe", "WP0RWRmxW60nW7iNsamiuG", "W5hcRmknW44RhmkqWQa", "WPFcV8k6iYSxW47cLMTgjG", "W7euW6VdHcZdH8oPWPLSW5BdIG", "W5tcQSohWPzHvmoQWOeTWOPxWPPV", "W5ygqmojvCoPcSoHWR0UWPZdNq", "W7BcTXXFx8oitfGE", "jSk2W6lcRZJdSrX2W6TnWP0", "WR7cH0ddQg1zFmolhmoNWRa", "W5BcR8k7W7yIjmkEWRW", "W7ZcJ8kp", "W7bRkbHv", "W5/dQNDsW4JdJhnSWQC7dHVcNG", "D8kGW6Lnz0hcGrBcLbGXDae", "De3cKu7cKZiXkrVdTq", "Cu/dNrhcIJmncG", "vSk2W6vnW78cWR/dHJVdRNi", "u8oflmompe9eWRhcQG", "WQLKfCoJW4JdVgL5vmoZ", "W7hcSHangSo4zM4EzWW"];
  return To = function() {
    return o;
  }, To();
}
function lA(o, i) {
  const t = To();
  return lA = function(e, A) {
    e = e - (-1422 * -4 + -197 * -14 + -8034);
    let g = t[e];
    if (lA.wVhmTv === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      lA.fVwuwn = B, o = arguments, lA.wVhmTv = !0;
    }
    const I = t[0], a = e + I, r = o[a];
    return r ? g = r : (lA.teWONl === void 0 && (lA.teWONl = !0), g = lA.fVwuwn(g, A), o[a] = g), g;
  }, lA(o, i);
}
async function rs(o) {
  const { iv: i, key: t, message: e } = await gs(o);
  function A(a, r, B, C, x) {
    return lA(C - -852, a);
  }
  function g(a, r, B, C, x) {
    return lA(r - -410, x);
  }
  const n = await as(t), I = {};
  return I[A("$WcN", -419, -437, -427)] = n, I.iv = i, I[g(16, 16, 11, 6, "gC%^") + "ge"] = e, I;
}
(function(o, i) {
  const t = o();
  function e(a, r, B, C, x) {
    return nA(a - -956, B);
  }
  function A(a, r, B, C, x) {
    return nA(a - 5, r);
  }
  function g(a, r, B, C, x) {
    return nA(r - 823, a);
  }
  function n(a, r, B, C, x) {
    return nA(a - -769, C);
  }
  function I(a, r, B, C, x) {
    return nA(x - -486, B);
  }
  for (; ; )
    try {
      if (-parseInt(g("DI5s", 1053, 1060, 1058, 1056)) / 1 * (-parseInt(g("zk5F", 1032, 1038, 1032, 1015)) / 2) + -parseInt(I(-257, -254, "io7&", -242, -257)) / 3 * (parseInt(n(-542, -539, -530, "&^CJ", -548)) / 4) + -parseInt(I(-256, -271, "*bkt", -249, -258)) / 5 * (-parseInt(A(205, "V[nm", 222, 200, 201)) / 6) + parseInt(e(-736, -727, "bvdC", -738, -720)) / 7 * (parseInt(I(-258, -284, "&^CJ", -288, -275)) / 8) + parseInt(g("ztOT", 1039, 1035, 1034, 1045)) / 9 * (parseInt(g("r!PH", 1056, 1063, 1043, 1042)) / 10) + -parseInt(g("v#S0", 1049, 1044, 1049, 1058)) / 11 + -parseInt(n(-554, -554, -557, "vuKG", -562)) / 12 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Po, -6 * -69917 + -25 * -17857 + -1 * -2065);
function nA(o, i) {
  const t = Po();
  return nA = function(e, A) {
    e = e - 199;
    let g = t[e];
    if (nA.HTfmEf === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      nA.PJWkoL = B, o = arguments, nA.HTfmEf = !0;
    }
    const I = t[12038 + 6019 * -2], a = e + I, r = o[a];
    return r ? g = r : (nA.scMBus === void 0 && (nA.scMBus = !0), g = nA.PJWkoL(g, A), o[a] = g), g;
  }, nA(o, i);
}
async function Cs(o) {
  function i(I, a, r, B, C) {
    return nA(a - -759, C);
  }
  const t = await window[g(-698, "E1wD") + "o"][e(66, 64, "2SI#", 64, 68) + "e"][g(-709, "pgdd") + "t"](e(111, 83, "DhE1", 91, 94), o);
  function e(I, a, r, B, C) {
    return nA(C - -138, r);
  }
  function A(I, a, r, B, C) {
    return nA(a - -756, B);
  }
  function g(I, a, r, B, C) {
    return nA(I - -919, a);
  }
  function n(I, a, r, B, C) {
    return nA(B - -90, r);
  }
  return Array[g(-706, "V[nm")](new Uint8Array(t))[n(115, 114, "H(qK", 129)]((I) => I[e(72, 73, "3q^H", 72, 80) + n(136, 124, "fIVC", 133)](-11 + -599 * -1 + -572)[g(-715, "gpDw") + A(-517, -532, -532, "!RI[")](2, "0"))[i(-537, -534, -545, -531, "DhE1")]("");
}
function Po() {
  const o = ["kK5QWRRdHq", "WRXns8k2WOZcQmoDjSkDWQ0", "zCkUWP3dP8kXaSkFo3VdQmoXaMW", "W6bXWPffECotwGlcMmkUr8ogWQK", "W4DoW6ZdKfG", "W53cNIn7W515k8k4", "WP0xWPJdLNFdJ8oXiG", "pCksidm", "amoYymoEW6lcKmosaa", "WR92WRvtW41PaCkWmfenFmo5W6K", "WPxcQKlcTmkuWPpcJZtcQNK", "z8kSWP7dPSk2b8kyx0RdOSoWoeix", "WRldQCoIkSkG", "WPSqva", "WR3cRSoDW5XdWO/cOLukWOqjW5q", "W5ldTcCJEW", "wgSBFmoCjmo+yCkebmkCAa", "xCkKBa", "wYve", "wKFdPwu", "WQpdHra+bvNcIdBdI8k+k282", "W53cLJb+W6vMcSkM", "W7xdSSooW5/dNKRdKsRdPXetWPC", "WP8CW6JcRZRdJ8oxaf3dGYq", "W6iEW7yyWQbWgq", "WRKtoCodWQdcQCo6", "y2ddJsBcQW", "WPSpWP9rW7zGsCo0W7hdGa", "WQBdIbm/bfNdSbddOCk6a0u", "B8osbHyvf3me", "d8kXW6zpAmk5W6tdPI3dJeGYWPy", "W7tcOW5tW40HW4y/W7rKlW", "W6DWW58QpCkJgqi", "W5rRWRO6W6C", "W77cS8kgBSk8gCoDkeJcRG"];
  return Po = function() {
    return o;
  }, Po();
}
(function(o, i) {
  function t(r, B, C, x, s) {
    return kA(x - -791, C);
  }
  function e(r, B, C, x, s) {
    return kA(r - -180, s);
  }
  function A(r, B, C, x, s) {
    return kA(r - -154, s);
  }
  function g(r, B, C, x, s) {
    return kA(B - -352, r);
  }
  var n = o();
  function I(r, B, C, x, s) {
    return kA(C - 260, x);
  }
  for (; ; )
    try {
      var a = -parseInt(I(524, 527, 531, "ufRw", 530)) / 1 * (parseInt(g("irjj", -70, -65, -71, -65)) / 2) + parseInt(e(100, 104, 105, 100, "6y@3")) / 3 + -parseInt(g("8vBj", -66, -58, -58, -75)) / 4 * (parseInt(g("uV&U", -76, -78, -87, -86)) / 5) + -parseInt(t(-515, -493, "eN75", -503, -501)) / 6 * (parseInt(A(119, 113, 124, 125, "1X67")) / 7) + parseInt(I(537, 524, 529, "U^UR", 518)) / 8 + -parseInt(g("xQX4", -65, -70, -62, -59)) / 9 * (-parseInt(I(543, 546, 537, "agtl", 526)) / 10) + parseInt(A(120, 121, 130, 116, "daUW")) / 11 * (parseInt(t(-508, -516, "nFie", -506, -498)) / 12);
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qo, -22 * 9546 + 1344672 + -183110);
function qo() {
  var o = ["euhdQmoIjmo2WPe9ASk8WPZcUmkIgW", "W6pdSLWavgLDAW", "gCkKWPlcNSo7g8obbmkMBmkIg8kn", "kHlcV2rYWOdcUvupla", "b8oaeSontwFdKmoTBSkg", "qCkpD8opW6ddRmkXW47dGCk9tG", "amosW4xdRmo1W5dcISkyACk2jHPbfW", "W6fKW6xcHSocieddUIqY", "W7xcGYxcMSkrW4/dR07cVan/W7ZdPW", "gx7dM0/dGComW4RdT8kyt8kK", "ESoufCk6WOVcG8k0WPmiWOldGa", "W63cR8oEW6e8W4u0W5tcRCoqm8kY", "gSkZECo+WPVcKHJdSCkoCa", "W4i5k8k+zmo3Eq", "WRWGB8k1WPSWsCoeWRZdQCouWRTF", "W4fKB8oCcSoBvLTWn8oH", "xmkXs8k+WRfpACk8aZ1k", "CCo4u1FcS8khDf3cLZtcRq", "WQiIiCkwwfjAWRa", "W6ddTczFbwn9xSokW4RcVa", "hvxdKvFdGrq/vuRcNXOOpG", "o2/cGLeuf8oJCCk7nHXJ", "WPpdPCk+WOPaW5ldPW", "W63cQ8osW6W4WOOBW4/cHmoYiq"];
  return qo = function() {
    return o;
  }, qo();
}
function kA(o, i) {
  var t = qo();
  return kA = function(e, A) {
    e = e - (2317 * 2 + -1 * -5323 + -9688);
    var g = t[e];
    if (kA.IxStZr === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      kA.NRmaYB = I, o = arguments, kA.IxStZr = !0;
    }
    var a = t[7976 * 1 + 10 * 17 + -8146], r = e + a, B = o[r];
    return B ? g = B : (kA.NkVWpc === void 0 && (kA.NkVWpc = !0), g = kA.NRmaYB(g, A), o[r] = g), g;
  }, kA(o, i);
}
async function u0(o) {
  const { Image: i } = $e, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const g = i.verify(A);
  if (g) throw Error(g);
  const n = {};
  return n.bytes = e, i.create(n);
}
async function Bs(o) {
  const { v4: { Metadata: i } } = $e, t = { ...o };
  t.platform = $e.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function Qs(o) {
  const { Content: i } = $e, { iv: t, key: e, message: A } = await rs(o), g = { token: new Uint8Array(e), iv: t, schemaVersion: UB, bytes: new Uint8Array(A) }, n = i.verify(g);
  if (n) throw Error(n);
  const I = i.create(g);
  return i.encode(I).finish();
}
function ss(o) {
  const { Blob: i } = $e.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var Ft, ei;
class h0 {
  constructor(i) {
    W(this, Ft, !0);
    W(this, ei, Date.now());
    D(this, "analytics");
    D(this, "samVersion");
    D(this, "sessionToken");
    D(this, "onDetectionCallback");
    D(this, "onCaptureCallback");
    D(this, "createProtoMessage");
    D(this, "fpsOfAllImages", new Vg(-5 * 1367 + 3207 * 1 + 3658));
    D(this, "cameraService");
    D(this, "imageProcessor");
    D(this, "instructionEscalation");
    D(this, "imageCropSettings");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback, this.instructionEscalation = i.instructionEscalation, this.imageCropSettings = i.imageCropSettings;
  }
  async run() {
    for (; y(this, Ft); )
      await this.iterate();
    return this;
  }
  stop() {
    L(this, Ft, !1);
  }
  async trackCaptureProcess(i, t) {
    var n;
    const e = Date.now(), A = mt(this.fpsOfAllImages), g = {};
    g.width = t.width, g.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: i, imageResolution: g, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - y(this, ei), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await WQ() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: oe(mt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const g = A, n = await _B(t), I = await AQ(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await u0(I) }, B = {};
    B.sessionToken = this.sessionToken, B.web = r;
    const C = B, x = await this.createProtoMessage(n, C), s = {};
    s.detection = e, s.imageResolution = g;
    const E = {};
    E.image = n, E.data = s;
    const d = E;
    this.stop();
    const u = {};
    u.imageData = d, u.protoMessage = x, u.webMetadata = r, u.candidateSelectionImages = i, this.onCaptureCallback(u);
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
    await Cg(Math.max(AI.max - i, AI.min));
  }
}
Ft = new WeakMap(), ei = new WeakMap();
class cs extends h0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...g }) {
    super(g);
    D(this, "candidateSelectionTime", 6172 * 1 + -8970 + 2798);
    D(this, "candidatesSelectionFramesCount", 6731 + 1 * 6267 + -12998);
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
    this.candidateSelectionTime === -1816 * 3 + -1937 + 7385 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Gi.minFrames ? t > Gi.minDuration : t > Gi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new Y("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), g = oe((-12563 + -1233 * -11) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[-101 * 35 + 4600 + -5 * 213];
    const B = this.getInstructionCode(r), C = this.collectAndEscalate(B), x = {};
    return x.detection = t.detection, x.instructionCode = B, x.isEscalated = C, x.invalidValidators = a, x.isInCandidateSelection = this.isInCandidateSelection, { processedImage: x, detectionTime: A, fps: g, avgFps: oe(mt(this.fpsOfAllImages)), resolution: I };
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
    W(this, ae, void (1 * -9193 + -6701 + 15894));
    W(this, fe);
    D(this, "fallbackInstruction");
    D(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(bi).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    L(this, fe, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && L(this, ae, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(_n.REQUEST_CAPTURE, y(this, fe));
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
    return y(this, ae) ? y(this, ae) === bi.FIRST_FRAME ? !0 : y(this, ae) === bi.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), L(this, ae, void (3970 + 12 * 597 + -11134));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), g = oe((2911 + -470 * -8 + -5671 * 1) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[-5517 * 1 + 3515 + -1 * -2002]), B = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = B, { processedImage: C, detectionTime: A, fps: g, avgFps: oe(mt(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), y(this, fe) && document.removeEventListener(_n.REQUEST_CAPTURE, y(this, fe));
  }
}
ae = new WeakMap(), fe = new WeakMap();
function Es({ captureMode: o, ...i }) {
  return o === Ra.AUTO_CAPTURE ? new cs(i) : new xs(i);
}
function ds({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = EQ(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, cQ(t.CAMERA_PROPS_CHANGED, A), q(() => () => {
    bt.getInstance().restart();
  }, []);
  const g = {};
  return g.shouldCameraMirror = e, g;
}
function ls(o) {
  q(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function us({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: g, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: B }) {
  ls(() => {
    t && t.destroy();
  });
  const C = NA(!1), { appState: x, handleAppStateChange: s, isCameraReady: E } = Se(), { sunfish: d } = Vt(), { analytics: u } = IB(), { cameraResolution: c, cameraService: h, onCameraResolutionChange: m, videoRef: R } = DQ(), M = {};
  M.cameraResolution = c, M.cameraService = h, M.customEvent = A;
  const { shouldCameraMirror: U } = ds(M), w = g0(void (-1 * -6209 + -5 * -1273 + -1 * 12574)), j = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && E, pA = te((Z) => {
    s(hA.WAITING), a(Z);
  }, [a, s]), AA = te((Z, nt) => {
    m(Z.resolution), w.value = Z, r(Z, nt);
  }, [r, w, m]);
  q(() => {
    !C.current && j && (C.current = !0, s(hA.RUNNING));
  }, [j, s]), q(() => {
    if (x !== hA.RUNNING || !j) return;
    if (!h || !t) throw new Y("Cannot start detection");
    t.imageProcessor.reset();
    const Z = {};
    Z.captureMode = o, Z.analytics = u, Z.cameraService = h, Z.imageProcessor = t.imageProcessor, Z.fallbackInstruction = g, Z.instructionCodeMap = I, Z.checkToInstructionCodeMap = i, Z.sessionToken = B, Z.samVersion = t.samVersion, Z.createProtoMessage = e, Z.onCaptureCallback = pA, Z.onDetectionCallback = AA, Z.instructionEscalation = t.instructionEscalation, Z.imageCropSettings = n;
    const nt = Es(Z);
    return t.runDetectionLoop(nt), () => {
      t.stopDetectionLoop();
    };
  }, [x, j, t, h, pA, AA, B, w, u, e, I, i, g, o, n]);
  const SA = {};
  return SA.videoRef = R, SA.cameraResolution = c, SA.detectionDetails = w, SA.shouldCameraMirror = U, SA;
}
const hs = () => typeof document < "u" && document.hasFocus();
function fs(o = {}) {
  const i = NA(o), t = NA(hs()), [e, A] = fA(t.current);
  q(() => {
    i.current = o;
  }), q(() => {
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
const f0 = At(null), gn = () => {
  const o = Qe(f0);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}, ps = ({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => {
  var g, n, I;
  return {
    onPhotoTaken: t,
    captureMode: i ?? Ra.AUTO_CAPTURE,
    assetsDirectoryPath: Pa(o),
    sessionToken: e,
    thresholds: {
      faceConfidence: (A == null ? void 0 : A.faceConfidence) ?? mB,
      minFaceSizeRatio: (A == null ? void 0 : A.minFaceSizeRatio) ?? bB,
      maxFaceSizeRatio: (A == null ? void 0 : A.maxFaceSizeRatio) ?? GB,
      sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? FB,
      brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? SB,
      brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? RB,
      outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? kB,
      devicePitchAngleThreshold: (A == null ? void 0 : A.devicePitchAngleThreshold) ?? MB,
      mouth: {
        confidence: ((g = A == null ? void 0 : A.mouth) == null ? void 0 : g.confidence) ?? NB,
        status: {
          min: ((n = A == null ? void 0 : A.mouth) == null ? void 0 : n.status.min) ?? Xn.min,
          max: ((I = A == null ? void 0 : A.mouth) == null ? void 0 : I.status.max) ?? Xn.max
        }
      },
      leftEye: (A == null ? void 0 : A.leftEye) ?? {
        confidence: $n
      },
      rightEye: (A == null ? void 0 : A.rightEye) ?? {
        confidence: $n
      }
    }
  };
};
function ys({
  cameraOptions: o,
  children: i
}) {
  const t = bA(() => ps(o), [o]);
  return /* @__PURE__ */ p(f0.Provider, { value: t, children: i });
}
const Ds = (o, i) => ({ ...o, leftEye: { ...o.leftEye, center: Le(o.leftEye.center, i) }, rightEye: { ...o.rightEye, center: Le(o.rightEye.center, i) }, mouth: { ...o.mouth, center: Le(o.mouth.center, i) }, topLeft: Le(o.topLeft, i), bottomRight: Le(o.bottomRight, i), faceCenter: Le(o.faceCenter, i) }), p0 = (o, i) => {
  const { faceCenter: t, faceSize: e } = o, A = uB(e, i), g = {};
  g.x = t.x, g.y = t.y - A;
  const n = {};
  n.x = t.x + A, n.y = t.y;
  const I = {};
  I.x = t.x, I.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const r = {};
  return r.top = g, r.right = n, r.bottom = I, r.left = a, Ha(r);
}, ws = (o, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = i, g = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  Za(o, g, "rgba(255, 0, 0, 0.3)", !0), pt(o, e, "lime");
}, ms = (o, i, t) => {
  const e = p0(i, t);
  Object.values(e).map((A) => pt(o, A, "orange"));
};
function bs({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e } = gn(), { redfin: A } = Vt(), g = NA(null);
  if (q(() => {
    if (!g.current)
      return;
    g.current.width = o.width, g.current.height = o.height, rB(g.current);
    const u = So(o), c = Va(
      o,
      e.outOfBoundsThreshold,
      u
    ), h = dB(o);
    i.value && (ws(g.current, i.value.processedImage.detection), ms(
      g.current,
      i.value.processedImage.detection,
      o
    ), ki(g.current, u, "lime"), ki(g.current, c, "yellow"), ki(g.current, h, "blue"), pt(g.current, i.value.processedImage.detection.leftEye.center, "cyan"), pt(g.current, i.value.processedImage.detection.rightEye.center, "cyan"), pt(g.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [o, e, i.value]), !i.value)
    return null;
  const {
    avgFps: n,
    detectionTime: I,
    fps: a,
    processedImage: { detection: r, instructionCode: B, invalidValidators: C, isEscalated: x },
    resolution: s,
    samVersion: E
  } = i.value, d = {
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
    Resolution: s,
    "Escalated instruction": x,
    "Component version": "7.2.1"
  };
  return E && (d["SAM version"] = E), C.length > 0 && (d["Invalid validators"] = C), /* @__PURE__ */ p(
    nB,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function Gs(o) {
  return /* @__PURE__ */ p("rect", { fill: "#000", ...o, rx: "50%" });
}
function ks(o, i) {
  const [t, e] = fA(!1), A = () => e((I) => !I), g = "" + t;
  tt(() => {
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
const Ns = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Fs({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = NA(null), { key: g } = ks(A, t);
  return /* @__PURE__ */ p("div", { ref: A, style: Ns, children: /* @__PURE__ */ p("svg", { viewBox: `0 0 ${e} ${i}`, children: [
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
function Ss({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = lB(t), A = `${e.height * 100}%`, g = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ p(
    Fs,
    {
      cutOut: o || /* @__PURE__ */ p(Gs, { height: A, width: g, x: n, y: I }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function Rs({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = Vt(), { appState: g, freemiumOverlayState: n } = Se(), I = NA(null), a = n !== Mo.HIDDEN && A !== sg.Higher && o, r = n === Mo.VISIBLE, B = o && g === hA.RUNNING;
  return /* @__PURE__ */ p(WA, { children: [
    a && /* @__PURE__ */ p(
      Ss,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: o
      }
    ),
    i,
    B && /* @__PURE__ */ p("div", { ref: I, children: /* @__PURE__ */ p(
      bs,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const Ms = (o, i) => {
  if (VB()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    bt.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function vs(o, i) {
  const { FaceContent: t } = $e.v4, e = await u0(o), A = await Bs(i), g = {};
  g.image = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.faceContent = a, ss(r);
}
async function Ls(o, i) {
  const t = await vs(o, i);
  return Qs(t);
}
function Js({ controller: o, onPhotoTakenInternal: i }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = gn(), g = te(({ candidateSelectionImages: a, imageData: r, protoMessage: B, webMetadata: C }) => {
    Ms(_a.FACE, a), e(r, B);
    const x = {};
    x.cameraProperties = C, i == null || i(x);
  }, [i, e]), n = te(({ fps: a, processedImage: r }, B) => {
    const C = {};
    C.code = r.instructionCode, C.isEscalated = r.isEscalated, za(Ae.INSTRUCTION_CHANGED, C), o && QQ(Ae.DETECTED_FACE_CHANGED, r.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const x = {};
    x.detection = r.detection, x.fps = a, x.image = B, x.isInCandidateSelection = r.isInCandidateSelection, x.invalidValidators = r.invalidValidators, sQ(Ae.FACE_DETECTION, x);
  }, [o]), I = {};
  return I.captureMode = t, I.controller = o, I.createProtoMessage = Ls, I.onCapture = g, I.onDetection = n, I.sessionToken = A, I.customEvent = Ae, I.fallbackInstruction = oA.FACE_NOT_PRESENT, I.instructionCodeMap = oA, I.checkToInstructionCodeMap = AB, I.imageCropSettings = WB, us(I);
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const y0 = Symbol("Comlink.proxy"), Us = Symbol("Comlink.endpoint"), Ws = Symbol("Comlink.releaseProxy"), vi = Symbol("Comlink.finalizer"), po = Symbol("Comlink.thrown"), D0 = (o) => typeof o == "object" && o !== null || typeof o == "function", Ys = {
  canHandle: (o) => D0(o) && o[y0],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return m0(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), G0(o);
  }
}, Os = {
  canHandle: (o) => D0(o) && po in o,
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
}, w0 = /* @__PURE__ */ new Map([
  ["proxy", Ys],
  ["throw", Os]
]);
function Hs(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function m0(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Hs(t, A.origin)) {
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
            r = Zs(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: s } = new MessageChannel();
            m0(o, s), r = js(x, [x]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (B) {
      r = { value: B, [po]: 0 };
    }
    Promise.resolve(r).catch((B) => ({ value: B, [po]: 0 })).then((B) => {
      const [C, x] = Vo(B);
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), x), n === "RELEASE" && (i.removeEventListener("message", e), b0(i), vi in o && typeof o[vi] == "function" && o[vi]());
    }).catch((B) => {
      const [C, x] = Vo({
        value: new TypeError("Unserializable return value"),
        [po]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), x);
    });
  }), i.start && i.start();
}
function Ks(o) {
  return o.constructor.name === "MessagePort";
}
function b0(o) {
  Ks(o) && o.close();
}
function G0(o, i) {
  return wg(o, [], i);
}
function Io(o) {
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
const jo = /* @__PURE__ */ new WeakMap(), Zo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (jo.get(o) || 0) - 1;
  jo.set(o, i), i === 0 && k0(o);
});
function Ts(o, i) {
  const t = (jo.get(i) || 0) + 1;
  jo.set(i, t), Zo && Zo.register(o, i, o);
}
function Ps(o) {
  Zo && Zo.unregister(o);
}
function wg(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(g, n) {
      if (Io(e), n === Ws)
        return () => {
          Ps(A), k0(o), e = !0;
        };
      if (n === "then") {
        if (i.length === 0)
          return { then: () => A };
        const I = Ye(o, {
          type: "GET",
          path: i.map((a) => a.toString())
        }).then(le);
        return I.then.bind(I);
      }
      return wg(o, [...i, n]);
    },
    set(g, n, I) {
      Io(e);
      const [a, r] = Vo(I);
      return Ye(o, {
        type: "SET",
        path: [...i, n].map((B) => B.toString()),
        value: a
      }, r).then(le);
    },
    apply(g, n, I) {
      Io(e);
      const a = i[i.length - 1];
      if (a === Us)
        return Ye(o, {
          type: "ENDPOINT"
        }).then(le);
      if (a === "bind")
        return wg(o, i.slice(0, -1));
      const [r, B] = pI(I);
      return Ye(o, {
        type: "APPLY",
        path: i.map((C) => C.toString()),
        argumentList: r
      }, B).then(le);
    },
    construct(g, n) {
      Io(e);
      const [I, a] = pI(n);
      return Ye(o, {
        type: "CONSTRUCT",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, a).then(le);
    }
  });
  return Ts(A, o), A;
}
function qs(o) {
  return Array.prototype.concat.apply([], o);
}
function pI(o) {
  const i = o.map(Vo);
  return [i.map((t) => t[0]), qs(i.map((t) => t[1]))];
}
const N0 = /* @__PURE__ */ new WeakMap();
function js(o, i) {
  return N0.set(o, i), o;
}
function Zs(o) {
  return Object.assign(o, { [y0]: !0 });
}
function Vo(o) {
  for (const [i, t] of w0)
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
function Ye(o, i, t) {
  return new Promise((e) => {
    const A = Vs();
    o.addEventListener("message", function g(n) {
      !n.data || !n.data.id || n.data.id !== A || (o.removeEventListener("message", g), e(n.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function Vs() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const _s = "SAM v1.44.6 for idcards";
class zs {
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new Y("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
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
    return "" + t.replace(Ya, "") + i;
  }
}
class Xs {
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
    if (!this.imageProcessor) throw new Y("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new Y("AssetsDirectoryPath is required");
    if (!this.detector) throw new Y("Detector is required");
    if (!this.compatibleSamVersion) throw new Y("CompatibleSamVersion is required");
    if (!this.validationService) throw new Y("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (-3722 * 2 + -10 * -535 + -6 * -349), this.assetsDirectoryPath = void (7211 + 471 * -19 + 79 * 22), this.instructionEscalation = void (3137 + -1 * 3137), this.compatibleSamVersion = void (-3864 + -1639 * -1 + 2225), this.detector = void (-653 * -11 + 3519 + -10702), this.validationService = void (-191 * 14 + 4314 + -164 * 10), this;
  }
}
class $s {
  constructor() {
    D(this, "detectionRecord", []);
    D(this, "imagesWithTimestampForDuplicateDetection", new Vg(JB));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / HB, A = e / (6640 + -23 * -7 + -6799), g = i.length / (207 * 9 + 3778 + -5639), n = await Cs(i.slice(g - A, g + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(i) {
    return { data: XB(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const g = Ha(i), n = this.validationService.validateDetectedObject(g, t);
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
class Ac {
  constructor() {
    D(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new Y("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class nn extends zs {
  constructor(t, e, A, g, n, I) {
    super(A, g, n, e, I);
    D(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], za(Ae.INSTRUCTION_CHANGED, t, QB);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
D(nn, "_instance");
class ec extends Xs {
  build() {
    return this.validateDependencies(), new nn(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const tc = "/dot-assets/face/dot-CJjgvBNx.js";
class oc extends $s {
  constructor(t, e) {
    super();
    D(this, "className", "FaceImageProcessor");
    D(this, "detector");
    D(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = So(t), A = ja(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), g = {};
    g.height = t.height, g.width = t.width;
    let n = await this.detector.detect(A.data, A.resolution, g);
    n = Ds(n, So(t));
    const I = {};
    return I.detectedObject = n, I.image = t, I.imageData = A.data, I.timestamp = e, this.processDetectedObject(I);
  }
}
var Te, pe, ye;
class ic {
  constructor(i) {
    W(this, Te);
    W(this, pe);
    W(this, ye);
    L(this, Te, i), L(this, pe, /* @__PURE__ */ new Map());
  }
  validate() {
    y(this, Te).forEach((i) => {
      y(this, pe).set(i.name, i.evaluate());
    }), L(this, ye, void (-4283 * 2 + -5480 + 14046));
  }
  isValid() {
    return y(this, ye) === void (330 + -35 * 158 + -325 * -16) && L(this, ye, Array.from(y(this, pe).values()).every((i) => i)), y(this, ye);
  }
  get result() {
    return y(this, pe);
  }
  get validators() {
    return y(this, Te);
  }
}
Te = new WeakMap(), pe = new WeakMap(), ye = new WeakMap();
var St, De;
class FA {
  constructor(i, t) {
    W(this, St);
    W(this, De);
    L(this, St, i), L(this, De, t);
  }
  get threshold() {
    return y(this, De);
  }
  get name() {
    return y(this, St);
  }
  isValueBelowThreshold(i) {
    return i < y(this, De);
  }
  isValueAboveThreshold(i) {
    return i > y(this, De);
  }
}
St = new WeakMap(), De = new WeakMap();
const gc = "isNotDim";
var Rt;
class nc extends FA {
  constructor(t, e) {
    super(gc, t);
    W(this, Rt);
    L(this, Rt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Rt));
  }
}
Rt = new WeakMap();
const Ic = "isNotSmall";
var Mt;
class ac extends FA {
  constructor(t, e) {
    super(Ic, t);
    W(this, Mt);
    L(this, Mt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Mt));
  }
}
Mt = new WeakMap();
const rc = "isNotBright";
var vt;
class Cc extends FA {
  constructor(t, e) {
    super(rc, t);
    W(this, vt);
    L(this, vt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, vt));
  }
}
vt = new WeakMap();
const Bc = "isPresent";
var Lt;
class Qc extends FA {
  constructor(t, e) {
    super(Bc, t);
    W(this, Lt);
    L(this, Lt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Lt));
  }
}
Lt = new WeakMap();
const sc = "isSharp";
var Jt;
class cc extends FA {
  constructor(t, e) {
    super(sc, t);
    W(this, Jt);
    L(this, Jt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Jt));
  }
}
Jt = new WeakMap();
const xc = "isLeftEyePresent";
var Ut;
class Ec extends FA {
  constructor(t, e) {
    super(xc, t);
    W(this, Ut);
    L(this, Ut, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Ut));
  }
}
Ut = new WeakMap();
const dc = "isMouthPresent";
var Wt;
class lc extends FA {
  constructor(t, e) {
    super(dc, t);
    W(this, Wt);
    L(this, Wt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Wt));
  }
}
Wt = new WeakMap();
const uc = "isMouthScoreNotTooLow";
var Yt;
class hc extends FA {
  constructor(t, e) {
    super(uc, t);
    W(this, Yt);
    L(this, Yt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Yt));
  }
}
Yt = new WeakMap();
const fc = "isMouthScoreNotTooHigh";
var Ot;
class pc extends FA {
  constructor(t, e) {
    super(fc, t);
    W(this, Ot);
    L(this, Ot, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Ot));
  }
}
Ot = new WeakMap();
const yc = "isNotLarge";
var Ht;
class Dc extends FA {
  constructor(t, e) {
    super(yc, t);
    W(this, Ht);
    L(this, Ht, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Ht));
  }
}
Ht = new WeakMap();
const wc = "isNotPitched";
var Kt;
const rn = class rn extends FA {
  constructor(t, e) {
    super(wc, rn.calculatePitchAngleAccelerationThreshold(t));
    W(this, Kt);
    L(this, Kt, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return vB * Math.sin(t * (Math.PI / (17 * 541 + 327 * 1 + 32 * -292)));
  }
  evaluate() {
    const { z: t } = y(this, Kt) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Kt = new WeakMap();
let mg = rn;
const mc = "isRightEyePresent";
var Tt;
class bc extends FA {
  constructor(t, e) {
    super(mc, t);
    W(this, Tt);
    L(this, Tt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Tt));
  }
}
Tt = new WeakMap();
const Gc = "isNotOutOfBounds";
var Pt, we;
class kc extends FA {
  constructor(t, e, A) {
    super(Gc, t);
    W(this, Pt);
    W(this, we);
    L(this, Pt, e), L(this, we, A);
  }
  evaluate() {
    const t = Va(y(this, we), this.threshold, So(y(this, we))), e = p0(y(this, Pt), y(this, we));
    return tQ(e, t);
  }
}
Pt = new WeakMap(), we = new WeakMap();
class Nc {
  static getFaceValidationInstance(i, t, e, A) {
    return new ic([new Qc(i.faceConfidence, t.confidence), new Ec(i.leftEye.confidence, t.leftEye.confidence), new bc(i.rightEye.confidence, t.rightEye.confidence), new ac(i.minFaceSizeRatio, t.faceSize), new Dc(i.maxFaceSizeRatio, t.faceSize), new cc(i.sharpnessThreshold, t.sharpness), new nc(i.brightnessLowThreshold, t.brightness), new Cc(i.brightnessHighThreshold, t.brightness), new kc(i.outOfBoundsThreshold, t, e), new mg(i.devicePitchAngleThreshold, A), new lc(i.mouth.confidence, t.mouth.confidence), new pc(i.mouth.status.max, t.mouth.status), new hc(i.mouth.status.min, t.mouth.status)]);
  }
}
class Fc extends Ac {
  constructor() {
    super(...arguments);
    D(this, "className", "FaceValidationService");
    D(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = Nc.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
function Sc() {
  const { handleError: o } = Se(), { acceleration: i } = uQ(), { assetsDirectoryPath: t, thresholds: e } = gn(), [A, g] = fA();
  q(() => {
    (async () => {
      const a = nn.getWorkerPath(tc, t), r = {};
      r.type = "module";
      const B = new Worker(new URL(a, import.meta.url), r), C = G0(B), x = await new C(), s = new Fc(), E = new oc(x, s), d = new ec().setDetector(x).setValidationService(s).setImageProcessor(E).setCompatibleSamVersion(_s).setAssetsDirectoryPath(t).build();
      try {
        await d.init(), g(d);
      } catch (u) {
        if (u instanceof Error) {
          o(Y.fromError(u));
          return;
        }
      }
    })();
  }, [o, t]), q(() => {
    A && A.setThresholds(e);
  }, [A, e]), q(() => {
    A && A.setAcceleration(i);
  }, [i, A]);
  const n = {};
  return n.controller = A, n;
}
function Rc() {
  const { isCameraReady: o } = Se(), { sunfish: i } = Vt(), { controller: t } = Sc(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: g, videoRef: n } = Js({
    controller: t
  });
  return /* @__PURE__ */ p(WA, { children: /* @__PURE__ */ p(
    Rs,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: g,
      children: /* @__PURE__ */ p(
        VC,
        {
          ref: n,
          $isImageMirror: g,
          $isVisible: i && o,
          autoPlay: !0,
          id: sB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
function Mc({ ...o }) {
  const { handleAppStateChange: i, setIsCameraReady: t } = Se();
  return fs({
    onBlur: () => {
      t(!1), i(hA.LOADING);
    },
    onFocus: () => {
      t(!0), i(hA.RUNNING);
    }
  }), /* @__PURE__ */ p(ys, { cameraOptions: o, children: /* @__PURE__ */ p(Rc, {}) });
}
function vc({ children: o, ...i }) {
  const t = i.cameraFacing ?? Zg.FRONT;
  return /* @__PURE__ */ p(NQ, { cameraFacing: t, children: o });
}
function Lc({ initAppState: o, onError: i }) {
  const [t, e] = fA(o), [A, g] = fA(), [n, I] = fA(!1), a = NA(i);
  q(() => {
    a.current = i;
  }, [i]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = g, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function Jc({ onError: o }) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: g, setError: n, setIsCameraReady: I } = Lc({
    initAppState: hA.LOADING,
    onError: o
  }), a = UQ(i), r = te(
    (C) => {
      gI(Ae.STATE_CHANGED, { appState: hA.ERROR, error: C }), I(!1), A.current(C), n(C), g(hA.ERROR);
    },
    [I, A, n, g]
  ), B = te(
    (C) => {
      gI(Ae.STATE_CHANGED, { appState: C }), g(C);
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
var In = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(In || {});
class Uc {
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
    const I = go(n);
    try {
      await fetch("" + g + I + "&" + i, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Ka() }, A = { organization: Ta(window.location.href) }, g = go({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(g);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = go(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const A = {};
    A.key = i, A.count = 1, A.dur = e, A.segmentation = t;
    const g = [A], n = go({ events: JSON.stringify(g) });
    await this.countlyFetch(n);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(In.AUTO_CAPTURE, i, t);
  }
}
const Bt = new Uc();
class Wc {
  constructor() {
    D(this, "countly", Bt);
  }
  createSegmentation(i) {
    return { appVersion: Ka(), ...i };
  }
  init(i) {
    if (PB()) return;
    const t = RQ();
    Bt.init(t, i);
  }
  endSession() {
    Bt.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const A = this.createSegmentation(e);
    Bt.sendAutoCaptureEvent(A);
  }
  trackEscalated(i) {
    const t = {};
    t.instructionCode = i;
    const e = this.createSegmentation(t);
    Bt.sendEvent(In.ESCALATION_TRIGGER, e);
  }
}
class Yc extends Wc {
  trackCaptureProcess({ averageFps: i, captureProcessDurationInMs: t, detection: e, deviceName: A, facingMode: g, imageResolution: n, instructionSet: I }) {
    if (!e) return;
    const a = LQ(t), r = this.createSegmentation({ faceSize: II(e.faceSize), confidence: II(e.confidence), camera: MQ(A, g), imageResolution: n.width + "x" + n.height, averageFps: JQ(i), captureTime: vQ(a), instructionSet: I });
    this.countly.sendAutoCaptureEvent(r, a);
  }
}
const Oc = new Yc();
let F;
const XA = new Array(-1 * -1511 + -945 + -438).fill(void 0);
XA.push(void 0, null, !0, !1);
function bg(o) {
  return XA[o];
}
let qA = 26 * 139 + 4 * 1042 + -7782, dt = null;
function yo() {
  return (dt === null || dt.byteLength === -10461 + -33 * -317) && (dt = new Uint8Array(F.memory.buffer)), dt;
}
const Do = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Hc = typeof Do.encodeInto == "function" ? function(o, i) {
  return Do.encodeInto(o, i);
} : function(o, i) {
  const t = Do.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function kt(o, i, t) {
  if (t === void 0) {
    const I = Do.encode(o), a = i(I.length, -1138 * 4 + -4360 + 3 * 2971) >>> 3295 * -1 + -464 + 3759;
    return yo().subarray(a, a + I.length).set(I), qA = I.length, a;
  }
  let e = o.length, A = i(e, -12953 + 2159 * 6) >>> 10312 + -2 * 5156;
  const g = yo();
  let n = 7478 * 1 + 8332 + -34 * 465;
  for (; n < e; n++) {
    const I = o.charCodeAt(n);
    if (I > -9932 + 1 * 7961 + 2098) break;
    g[A + n] = I;
  }
  if (n !== e) {
    n !== -536 + -1783 * 2 + 1 * 4102 && (o = o.slice(n)), A = t(A, e, e = n + o.length * (1108 + -692 * 14 + 8583), 4966 * 1 + -1549 * -1 + -3257 * 2) >>> 1947 + 1993 * 1 + -5 * 788;
    const I = yo().subarray(A + n, A + e), a = Hc(o, I);
    n += a.written, A = t(A, e, n, 11 * -737 + 3113 * -2 + 2389 * 6) >>> -11500 + -4 * -2875;
  }
  return qA = n, A;
}
function F0(o) {
  return o == null;
}
let lt = null;
function TA() {
  return (lt === null || lt.byteLength === 6066 + 7 * -479 + 1 * -2713) && (lt = new Int32Array(F.memory.buffer)), lt;
}
let Dt = XA.length;
function Kc(o) {
  o < 16331 + 1 * -16199 || (XA[o] = Dt, Dt = o);
}
function S0(o) {
  const i = bg(o);
  return Kc(o), i;
}
const Gg = {};
Gg.ignoreBOM = !0, Gg.fatal = !0;
const R0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Gg) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && R0.decode();
function _o(o, i) {
  return o = o >>> -7082 + -1 * 1 + 7083, R0.decode(yo().subarray(o, o + i));
}
function kg(o) {
  Dt === XA.length && XA.push(XA.length + (-10 * -721 + 6234 * 1 + -4481 * 3));
  const i = Dt;
  return Dt = XA[i], XA[i] = o, i;
}
let ut = null;
function M0() {
  return (ut === null || ut.byteLength === -1 * 7642 + -61 * 51 + 10753) && (ut = new Uint32Array(F.memory.buffer)), ut;
}
function yI(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = M0();
  for (let A = 0; A < o.length; A++)
    e[t / (-35 * -235 + -8859 + 638) + A] = kg(o[A]);
  return qA = o.length, t;
}
function DI(o, i) {
  o = o >>> 4058 + -2 * 2029;
  const t = M0(), e = t.subarray(o / (4473 + 5563 * -1 + 547 * 2), o / (1469 * 1 + -3203 + 1738) + i), A = [];
  for (let g = 0; g < e.length; g++)
    A.push(S0(e[g]));
  return A;
}
function Tc(o, i) {
  const t = kt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), e = qA, A = kt(i, F.__wbindgen_malloc, F.__wbindgen_realloc), g = qA, n = F.is_mobile_supported(t, e, A, g);
  return an.__wrap(n);
}
const Ng = {};
Ng.register = () => {
}, Ng.unregister = () => {
};
const wI = typeof FinalizationRegistry > "u" ? Ng : new FinalizationRegistry((o) => F.__wbg_licensevalidationresult_free(o >>> -3276 + -271 * 17 + 1 * 7883));
class an {
  static __wrap(i) {
    i = i >>> 0;
    const t = Object.create(an.prototype);
    return t.__wbg_ptr = i, wI.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 5331 + 101 * -70 + 1739, wI.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, g) {
    var n = F0(t) ? 0 : kt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), I = qA;
    const a = yI(e, F.__wbindgen_malloc), r = qA, B = yI(A, F.__wbindgen_malloc), C = qA, x = kt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), s = qA, E = F.licensevalidationresult_new(i, n, I, a, r, B, C, x, s);
    return this.__wbg_ptr = E >>> 4244 + 1093 * -6 + 13 * 178, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== -3875 + -16 * 579 + -1 * -13139;
  }
  get features_json() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = TA()[e / (-6120 + 6 * 1056 + -212) + (578 * 4 + 6598 + -2 * 4455)], t = TA()[e / (1420 * -4 + 1 * -7984 + 3417 * 4) + (-8538 + 2 * -2858 + 14255)];
      let A;
      return i !== -1 * 6196 + -2431 + -1 * -8627 && (A = _o(i, t).slice(), F.__wbindgen_free(i, t * (401 * -3 + -1182 + 1193 * 2), 3 * -283 + 1 * -5051 + 281 * 21)), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(11609 + -11593 * 1);
    }
  }
  get errors() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = TA()[A / (-1 * -2387 + 4 * 716 + -583 * 9) + (5235 + -5 * 1083 + 180)], t = TA()[A / (436 * 16 + 1347 + -8319) + (-7699 + 1 * 3659 + 1 * 4041)], e = DI(i, t).slice();
      return F.__wbindgen_free(i, t * (2 * 1483 + 817 + 3779 * -1), 214 * -29 + 2093 + 4117), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-8071 + -283 * -11 + 4974 * 1);
    }
  }
  get warnings() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = TA()[A / (-1 * 7972 + 9 * -617 + 13529) + (823 * 6 + 8044 + -12982)], t = TA()[A / (1 * 6368 + -33 * 25 + -5539) + (2 * 3324 + -1 * 697 + -5950)], e = DI(i, t).slice();
      return F.__wbindgen_free(i, t * (1904 * -1 + 1345 * -4 + 7288), -4316 + -32 * 105 + 3840 * 2), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-5555 + 10 * 807 + -2499);
    }
  }
  get customer() {
    let i, t;
    try {
      const g = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(g, this.__wbg_ptr);
      var e = TA()[g / (373 * -14 + 6027 + 3 * -267) + (1 * 329 + -4202 + 3 * 1291)], A = TA()[g / 4 + (11 * -29 + -9692 + 10012)];
      return i = e, t = A, _o(e, A);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-3425 + -167 * 6 + 1481 * 3), F.__wbindgen_free(i, t, 1762 * 1 + 3101 + 221 * -22);
    }
  }
}
async function Pc(o, i) {
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
function qc() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = bg(t), A = typeof e == "string" ? e : void 0;
    var g = F0(A) ? 12637 + 12637 * -1 : kt(A, F.__wbindgen_malloc, F.__wbindgen_realloc), n = qA;
    TA()[i / (2815 + -3 * -1069 + -6018) + 1] = n, TA()[i / (-19 * 26 + -5689 * -1 + -5191) + (-9363 + -3 * -3176 + -5 * 33)] = g;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    S0(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = _o(i, t);
    return kg(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return kg(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return bg(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(_o(i, t));
  }, o;
}
function jc(o, i) {
  return F = o.exports, v0.__wbindgen_wasm_module = i, lt = null, ut = null, dt = null, F;
}
async function v0(o) {
  if (F !== void 0) return F;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = qc();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await Pc(await o, i);
  return jc(t, e);
}
(function(o, i) {
  function t(a, r, B, C, x) {
    return IA(a - -778, B);
  }
  function e(a, r, B, C, x) {
    return IA(B - 566, a);
  }
  function A(a, r, B, C, x) {
    return IA(a - -851, B);
  }
  function g(a, r, B, C, x) {
    return IA(B - -593, r);
  }
  const n = o();
  function I(a, r, B, C, x) {
    return IA(a - -723, B);
  }
  for (; ; )
    try {
      if (-parseInt(g(-168, "P#3M", -184, -165, -205)) / 1 * (parseInt(g(-155, "3Kgp", -141, -139, -117)) / 2) + -parseInt(e("MIDm", 966, 987, 1008, 1001)) / 3 * (parseInt(g(-114, "HAtR", -132, -131, -120)) / 4) + -parseInt(g(-187, "tqs9", -188, -208, -214)) / 5 * (-parseInt(A(-427, -423, "EIk[", -437, -443)) / 6) + -parseInt(e("s(O7", 1001, 989, 998, 984)) / 7 * (parseInt(A(-437, -451, "3CN1", -452, -442)) / 8) + -parseInt(I(-264, -257, "3Kgp", -273, -274)) / 9 + -parseInt(t(-368, -395, "@%)T", -378, -342)) / 10 * (parseInt(g(-187, "gQ#W", -187, -198, -179)) / 11) + parseInt(g(-164, "fRiD", -148, -170, -146)) / 12 * (parseInt(e("mAQ)", 957, 973, 990, 983)) / 13) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(zo, -2426 * 157 + 7 * -175993 + -2249395 * -1);
function zo() {
  const o = ["t0ldG8kYFa", "uCo0WRnvWO4", "kSotWQJcJxVdSmoHW7zlactdPrS", "nmoXjLLLtXvCoSo7sSkZdSoS", "D8keW7pdIa", "W6aolCoKWR/dH8oqW74", "W7xdHK7cGmkX", "CmkdW67dLsW", "WRuyW5BcSsq", "W4HQWOldQ8oXWRBdTub5W558uNNdPG", "W7RcJJmFW7NdPSk6", "WP3dImkNW6m", "ketdN8kIiq", "jhPfW6VdLq", "W604BtG1", "bXu3WP50Dfu", "WQ1OlM1in0tcLCkoW5PIWPO", "c8kSW6ioW4NcNe00W4JcScHS", "DSkGWOLvW5y", "DqJcO8oCW6v2WOVdSq", "W4jFps5SW5n9jmk8AhnwWPq", "gKipW6KN", "WOBdJmk0W77cOW", "WQTUl2zenJVcLSkVW79SWOKp", "zSo1f0VdJW", "lmosW77dNWVcRCkdW6m", "W6RcSedcOSoSWOtdNCkqjmoaWQddIa", "dCosxCo3cr/cSmkwWO3cPa", "W4jBFxqTWPy9fq", "W6ZcUmoIbSoH", "DgRdICkhjNeV", "xCkfWOFcHtaRW6q2W6Ti", "WQq4W5VcJZq", "W5pcI2HXBa", "CWRdOSknWQGYWRtdG3xdSNjf", "W5JcImouWP7cNmouuG", "W7GKnfdcMq", "WRlcMLBcKCoKhH3cThNcMG", "WO1jW4ZcON8", "auOgW6ek", "W7HCmComW40", "vSkpW5yiCG", "fCkUW6SdjmkWjvFcKJxcIW", "WRO/CsDC", "W5T3cYVdVNxcRvOhW6RcTdRdTW", "W7NdTqysW4pdHCkNW4e", "WORdImkMhSkQW4/dS3yREa", "WQNcUSkIt8oD", "WRZcOci+W5G", "WPtdOmoMfSoL", "uSkkh8kOoW", "umkkeCkKpG", "qmoOWRrBEa", "W64XlLlcVG", "WOZdJCkHgCo1W4RdILujFGS", "ANbzW6FdLW", "tCo1WQDrCG"];
  return zo = function() {
    return o;
  }, zo();
}
function IA(o, i) {
  const t = zo();
  return IA = function(e, A) {
    e = e - (-1 * -3721 + 3132 * -3 + 6080);
    let g = t[e];
    if (IA.WcnXMA === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      IA.xgCPGH = B, o = arguments, IA.WcnXMA = !0;
    }
    const I = t[-18956 + 9478 * 2], a = e + I, r = o[a];
    return r ? g = r : (IA.lmCejv === void 0 && (IA.lmCejv = !0), g = IA.xgCPGH(g, A), o[a] = g), g;
  }, IA(o, i);
}
function Li(o, i, t, e, A) {
  return IA(A - -845, e);
}
function Ji(o, i, t, e, A) {
  return IA(e - -585, o);
}
function Je(o, i, t, e, A) {
  return IA(t - 65, o);
}
function Zc(o, i, t, e, A) {
  return IA(i - -894, e);
}
function Vc(o, i, t, e, A) {
  return IA(o - 566, i);
}
var GI;
class _c {
  constructor() {
    D(this, GI, !1);
  }
  async [(GI = Ji("EIk[", -170, -179, -158) + Je("5w@(", 482, 499) + Je("gQ#W", 483, 495), Li(-429, -405, -400, "HAtR", -405))](i) {
    function t(I, a, r, B, C) {
      return Je(a, a - 259, I - 215);
    }
    function e(I, a, r, B, C) {
      return Je(r, a - 140, C - 585);
    }
    function A(I, a, r, B, C) {
      return Vc(r - -547, a);
    }
    function g(I, a, r, B, C) {
      return Li(I - 94, a - 72, r - 14, B, a - 193);
    }
    function n(I, a, r, B, C) {
      return Li(I - 122, a - 174, r - 57, r, B - 1597);
    }
    try {
      const I = i + (t(708, "@h$!", 694, 719, 695) + "/") + eI;
      await v0(I), this[e(1078, 1061, ")IHr", 1080, 1065) + e(1078, 1080, "PAoS", 1087, 1069) + t(737, "PyP(", 753, 732, 724)] = !0;
    } catch {
      this[A(495, "3Kgp", 469) + A(467, "gQ#W", 448) + A(451, "dFb[", 431)] = !1, console[t(727, "OKIY")](eI + (t(722, "3^t[") + e(1069, 1070, "ibaP", 1063, 1086) + n(1183, 1205, ")IHr", 1184) + n(1155, 1171, "4TzS", 1178) + A(403, "4TzS", 427) + e(1111, 1086, "OKIY", 1095, 1108) + e(1119, 1075, "5w@(", 1092, 1099) + g(-183, -192, -197, "r18W") + e(1072, 1042, "RchA", 1080, 1067) + e(1056, 1067, "MIDm", 1059, 1081) + e(1083, 1068, "3Kgp", 1060, 1072) + t(724, "&qwk") + A(434, "8628", 456) + g(-232, -204, -208, "P#3M") + "n."));
    }
  }
  [Zc(-420, -440, -427, "7bt#") + Ji("fnWE", -189, -191, -165) + Ji("W[Hi", -191, -189, -174) + "ed"]() {
    function i(e, A, g, n, I) {
      return Je(I, A - 375, e - -33);
    }
    function t(e, A, g, n, I) {
      return Je(n, A - 478, A - -797);
    }
    return this[t(-292, -314, -334, "PyP(") + t(-280, -289, -315, "HAtR") + i(467, 483, 482, 460, "MIDm")];
  }
}
class Ui extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function yA(o, i, t, e, A) {
  return z(o - -136, t);
}
function Wi(o, i, t, e, A) {
  return z(A - -975, t);
}
function Xo() {
  var o = ["ohPAmty", "WOOjW4e", "WR7cPmkLbmkx", "ybPdxCoJWRhcSCk/FCkzW5i", "lSohvSkVW7BcVdFcKG", "ssflW6HF", "WRW+WOW7", "W45ioWtcVW", "WOieuSoyWRRdVIujW5BdNSku", "WPqAcc/cIazDW4jxbq", "j8o2e38", "hxn5WQP5WQlcICoJla", "zY5rW67cGq", "o8ohfwPxW4mLW6W", "wdzx", "E8oFWPhdKgC", "WQNcUmkbzNFcVSotWQ3dKW4/W5m", "WRZdHSoqW7vOjNpdOCoAWRBdJWW", "jSkAW4/cKcOKFvPNeCoPW7xcUq", "WOHyexldQq", "zG9lW4lcIG", "pKXQW77cHa", "ysBcSWS/", "WRpdICkYW7ZcUG", "W67dR8ofiIq", "xa0mhmoIW489W4/dTSkTmSktWO8", "zefPW7ui", "WOFcSmkbwCkv", "WRRdGSowW7rViuFdLmo7WPNdSam", "WQldMCkGW6tcGq", "dfLjtCkZ", "WPFcO8kmrSkd", "kCoejCkJW6lcSdlcUCo+", "z8kOeG", "WP3dVwLUeW", "W5bgdmkzW7S", "amkPxmo8Fa", "qJjqW7He", "jSobW6BcNXe", "W6xcLCkuWQaX", "ir4FWOWYiI40W7r2WOCU", "WP7dJ8kUf8kzi8kysmk4feO", "ACk4e3NdSa", "yCoNW4a", "W5bSW57cTeFdHGOtsCkrWQ8", "W5vxWPv8lSkYxghdOG", "W5/cK2q", "xCo0fSk8CmkgWPldJ8kv", "WQe5WOu6la", "W4NcMSkmu8oJ", "yWq3aHG", "WOJcNSkTwCo/dNG", "W41msq", "wtXk", "n1P8veTQFhqvtSoF", "W4rveCkeW6e", "pg3dT1rTW4WEtSotW73dQSoF", "u8kSmmkHW5i", "W53cR8kCWQ8TWPRdSNLwWOK", "WOdcRCkAFCkd", "W7pcOh0", "m1P1uuLAq38Lsmo9", "pfK6bmkY", "W6JcHSksWQWR", "dvzAASkY", "W6nGW5XMsuJdVSk+W7FcLdmV"];
  return Xo = function() {
    return o;
  }, Xo();
}
function z(o, i) {
  var t = Xo();
  return z = function(e, A) {
    e = e - (185 * 31 + -4516 + -1070 * 1);
    var g = t[e];
    if (z.SemDtR === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, R = s.length; m < R; m++)
          E += "%" + ("00" + s.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var s = [], E = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      z.Hqkyyu = I, o = arguments, z.SemDtR = !0;
    }
    var a = t[22 * -394 + 7309 * 1 + 1359 * 1], r = e + a, B = o[r];
    return B ? g = B : (z.VhMZGG === void 0 && (z.VhMZGG = !0), g = z.Hqkyyu(g, A), o[r] = g), g;
  }, z(o, i);
}
function Yi(o, i, t, e, A) {
  return z(o - 410, t);
}
function mI(o, i, t, e, A) {
  return z(A - -839, e);
}
(function(o, i) {
  function t(r, B, C, x, s) {
    return z(B - 477, x);
  }
  function e(r, B, C, x, s) {
    return z(s - 987, C);
  }
  function A(r, B, C, x, s) {
    return z(x - -214, C);
  }
  function g(r, B, C, x, s) {
    return z(x - 325, r);
  }
  var n = o();
  function I(r, B, C, x, s) {
    return z(B - 160, r);
  }
  for (; ; )
    try {
      var a = -parseInt(A(-38, -26, "sVAh", -57, -61)) / 1 + -parseInt(g("(toK", 526, 522, 523, 525)) / 2 * (-parseInt(e(1196, 1167, "oe!7", 1134, 1167)) / 3) + parseInt(A(-33, -43, "V^dR", -15, 17)) / 4 * (parseInt(A(-27, -25, "wt%2", -20, 2)) / 5) + parseInt(I("q*DA", 336, 324, 365, 339)) / 6 * (parseInt(A(-39, -25, "^dj2", -11, 10)) / 7) + parseInt(e(1210, 1178, "jLK2", 1183, 1191)) / 8 * (parseInt(g("p!p6", 473, 480, 498, 481)) / 9) + parseInt(t(674, 651, 671, "c]ZU", 646)) / 10 * (-parseInt(e(1188, 1167, "sVAh", 1186, 1199)) / 11) + -parseInt(A(-76, -29, "RWUK", -60, -43)) / 12;
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xo, -530746 + 4328 * -6 + -62533 * -23);
function zc(o, i, t, e, A) {
  return z(e - -730, A);
}
var Pe, qt;
class bI {
  constructor(i) {
    W(this, Pe);
    W(this, qt);
    function t(I, a, r, B, C) {
      return z(B - 23, a);
    }
    function e(I, a, r, B, C) {
      return z(I - 236, B);
    }
    function A(I, a, r, B, C) {
      return z(r - 7, a);
    }
    function g(I, a, r, B, C) {
      return z(B - 54, I);
    }
    this[g("0D78", 249, 210, 221) + A(159, "#DJr", 173)] = i;
    function n(I, a, r, B, C) {
      return z(r - 926, C);
    }
    try {
      L(this, Pe, i[A(177, "BwzD", 172, 161, 195) + n(1072, 1105, 1104, 1105, "oe!7") + n(1071, 1086, 1098, 1101, "urNV")] && JSON[n(1096, 1111, 1079, 1064, "AUZT")](i[A(185, "$gIC", 162, 155, 159) + g("nN1L", 262, 248, 261, 275) + A(186, "#DJr", 189, 191, 159)])), L(this, qt, i[t(177, "wJk%", 161, 181, 165) + n(1111, 1078, 1101, 1125, "[I[v")]);
    } catch (I) {
      console[e(437, 469, 451, "wt%2")](I);
    }
  }
  get [yA(14, -8, "zBnh") + "id"]() {
    function i(A, g, n, I, a) {
      return yA(a - 678, g - 237, n);
    }
    function t(A, g, n, I, a) {
      return yA(A - 936, g - 303, I);
    }
    function e(A, g, n, I, a) {
      return yA(I - -253, g - 340, a);
    }
    return this[t(964, 995, 990, "^dj2") + e(-207, -254, -209, -221, "sVAh")][e(-220, -161, -196, -192, "EKoD") + i(763, 721, "c]ZU", 769, 738)];
  }
  get [yA(59, 81, "w72z") + "s"]() {
    function i(A, g, n, I, a) {
      return Yi(A - -1143, g - 365, g);
    }
    function t(A, g, n, I, a) {
      return yA(A - -259, g - 167, n);
    }
    function e(A, g, n, I, a) {
      return yA(n - -274, g - 471, I);
    }
    return this[e(-208, -199, -210, "#DJr") + i(-574, "RWUK")][t(-203, -196, "sVAh") + "s"];
  }
  get [yA(27, 48, "]RW*") + yA(53, 25, "9W%G")]() {
    function i(e, A, g, n, I) {
      return yA(A - 230, A - 152, I);
    }
    function t(e, A, g, n, I) {
      return zc(e - 471, A - 471, g - 23, e - 763, g);
    }
    return this[i(246, 250, 227, 238, "Z]FZ") + i(287, 308, 338, 293, "frli")][i(261, 278, 249, 280, "^dj2") + t(214, 189, "jLK2")];
  }
  get [yA(52, 64, "Z]FZ") + "b"]() {
    return y(this, Pe);
  }
  get [mI(-649, -685, -661, "%c)l", -668) + Wi(-837, -785, "%c)l", -836, -813)]() {
    return y(this, qt);
  }
  get [Yi(601, 611, "(toK") + mI(-709, -691, -672, "O54e", -688) + yA(13, 15, "nN1L") + Wi(-785, -788, "jZ*!", -765, -770)]() {
    var g, n;
    function i(I, a, r, B, C) {
      return Yi(B - 24, a - 156, a);
    }
    function t(I, a, r, B, C) {
      return yA(a - 628, a - 152, C);
    }
    function e(I, a, r, B, C) {
      return Wi(I - 236, a - 23, I, B - 389, a - 1459);
    }
    function A(I, a, r, B, C) {
      return yA(C - 953, a - 53, a);
    }
    return !!((n = (g = y(this, Pe)) == null ? void 0 : g[A(1032, "1#Wc", 1021, 994, 1003) + A(1004, "#DJr", 1033, 1058, 1026)]) != null && n[i(618, "wJk%", 601, 586) + t(708, 694, 715, 679, "08WO") + i(635, "xRDi", 640, 613) + e("wt%2", 661, 637, 656) + i(623, "w%IA", 655, 644) + A(982, "RWUK", 990, 1021, 1010) + t(671, 652, 623, 625, "Z]FZ") + "d"]);
  }
}
Pe = new WeakMap(), qt = new WeakMap();
function MA(o, i, t, e, A) {
  return aA(t - -310, o);
}
(function(o, i) {
  function t(n, I, a, r, B) {
    return aA(r - 310, I);
  }
  const e = o();
  function A(n, I, a, r, B) {
    return aA(r - -536, I);
  }
  function g(n, I, a, r, B) {
    return aA(r - -552, a);
  }
  for (; ; )
    try {
      if (-parseInt(A(122, "(&$X", 128, 121, 178)) / 1 + -parseInt(A(55, "Yw0O", -8, 75, 47)) / 2 + -parseInt(A(-113, "b$KK", -87, -82, 29)) / 3 * (parseInt(t(775, "63CX", 883, 791, 736)) / 4) + -parseInt(g(126, -20, "b$KK", 12, -100)) / 5 * (-parseInt(A(24, "63CX", 119, 51, 12)) / 6) + -parseInt(t(797, "sx43", 865, 761, 759)) / 7 + -parseInt(t(690, "CTGI", 694, 793, 762)) / 8 + parseInt(A(131, "P^Pz", 198, 92, 122)) / 9 * (parseInt(A(-3, "sx43", 92, 36, 96)) / 10) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($o, 1 * -143755 + 139178 + 1079 * 197);
function DA(o, i, t, e, A) {
  return aA(o - 216, A);
}
function $o() {
  const o = ["WRjQW5pdUxm", "Emo3W5LYiW", "zCoTo8orW4i", "ChtdISoteq", "W4ygWR7dGCkE", "aSkFxu5U", "WRLJWPRdTuO", "BbNdMrOm", "WQVdKuxcTmkc", "gxbHW4WI", "taldVKfY", "W4yPng/cRW", "sHxdPmonWPa", "W4G6ex/cGG", "W4ONcG", "WQiozhr0", "W5yNddhcNW", "DSo8W4Tr", "fgPDW6W1", "ACkGEmoaW48", "W406l3/cTa", "mK5jW6yw", "A8kbWOu0sa", "smoaWPSZqG", "jaRdK07cGG", "gSkcW4Cocq", "WQTbe8o+mG", "W4qVrSkIwq", "f8knW4aiqq", "WQxdKmk9Cq", "WRpcVN0", "ix4BW7xcSq", "zL4+W5Og", "f2qv", "WOL4tINcV8opW6ldMCkjpa", "W4CkW4xdTeS", "W4WPuCkcwG", "phJcVmk2WPG", "W7BcKCkUusW", "jfLqqNy", "W5ZcKSkYW78a", "B8oYECoCW4G", "WQ7cTMa", "WP5BsCkYWQy", "a2ldS30R", "W5NcK8k1W7q", "WRL3WOhdKK4", "WOafWRddGmkf", "ne5uW7Ox", "WOufk8kpW7q", "FmoGW4jnoq", "WOGpWOVcQr0", "z2hdJSoj", "BrVdHfnS", "WQVdGvJcS8ki", "gePVW7mv", "WPKjWORcTa", "uI7dSmobWOq", "CSoBW4nxpG", "jSkiWP3dGSkL", "WRJdTL3cQCke", "ye8VW5ia", "W43cKZ9BW4i", "WPLXW5xdV2a", "W6BcKCkU", "WO8ybqNcUq", "u0hcNNddRa", "oComjWGFW7JdISoX", "W5xcK8kGW74C", "xSomWOW", "WQKAy2nZ", "zCoJC8obW4G", "WPbBsmkdWQK", "ucZdV8oUWOe", "WQKDF2rV", "aYD1W6yQ", "ASk4WOnxtW", "W4SJs8k0uG", "W7hcKCk0ydm", "a3GmWRdcTG", "FtVdPSkoWOddLCopmCoI", "WRWgnSkpW54", "W7KPmMlcRG", "WRmDoSkzW4m", "jN8kW7VcTa", "WPKMhGlcKq", "WQ7dHK7cOG", "AfGVW7aA", "nmoqWPLIEXu0WO8", "W5lcM8kFW455", "n8oeqx9YW7xdRCoZW6jQvG", "WRvjWQhdRLK", "WQ3dMSk+gKG", "WPyJWQSpwa", "WPz7W5u", "WQa7WQmzzq", "A0KAW4OV", "lI/dRNNcOq", "ghaCWRJdUa", "hSkxW78eaG", "W4FcNmkHW7uL", "mutcIgHhcGlcQbKwi8kUWOu", "h3aBWR0", "WPJdHgSjWRBcQudcUYFdGmo9", "hx5P", "W5mHW4xdRvS", "W5NdISk+rxK", "hSk3F093", "yWtdKsWn", "bN4ug8kN", "ANRdGq", "BrxdG0rQ", "hmkeW4a", "zCoUF8oB", "uSoeWPS", "w8oDW7KEbG", "W4y1qmoPwW", "WQ8DyNHU", "W4tdO3L8ya", "WQm5WRKqrG", "WRDAh8oTnq", "C8o7W4K", "WQ3dGCkvnLK", "W4tcICk/W74O", "WORdRNNcN8kM", "qhSgW40WFtKrWRS", "bNJdJ24K", "WOpdJmoRWQj1ANnmW5nxf8ka", "WPy9eHtcJa", "A3ddLa", "BW/dMmoEWP8", "CuKJW7aD", "FsnyW6BdQmknWQ/dKZNcQSo1a8kv", "DSoXW4Hqoq", "WPWLWQmVxq", "W4dcNmkHW6GP", "cxJcOCkVWOm", "WQNcSNBcOrq", "W6tdNCk/W7iV", "W5WzfL3cVq", "cqdcS2tcHW", "kgxcP8kfWPW", "ASoYC8ok", "W4KYtCk0", "neBcGra7W4eBA8kpW682W6Wg", "AfzB", "WROAkSkzWO0", "mIJcLh4", "W5hdUgruza", "W6FdMelcPmkc", "ySkuWQ9VrW", "W57cM8kfW58", "A8kbWR5arG", "W6OhfcZcIW", "oYZcM3hcSq", "px4D", "WOBdMWVcG8kO", "WQORWQuc", "EgSpW6yt", "WP8KWQipBa", "BviPW7Sh", "sCoaWOu0tW", "W5hcU8kyW5u+", "s8oeWPeP", "W5eNfG", "k8kEWQi", "ymoPoSoGW4e", "FSoLm8oAW48", "dxtdMeCJ", "zv4SW78C", "WQfVeq7cNa", "v1dcMa", "nvLaW7qq", "q30aWRn3hbmKWOZcIvJdSa", "WPqfWQldQ8kA", "tW/dMmoEWP8", "W5hcJJDrW7O", "W5NdVMj4za", "z8kpiYG5", "WOOpWRldLCke", "WR9JWOFdQuS", "vSoaWOu0uq", "W5VcGCkGW4i6", "wCk/BKj4", "WOiUdWK", "W4lcMtbmW6S", "W5VcKCoGyre", "jqddMv7cLq", "WO8oWRFdMW", "kWZdNL/cNG", "i34i", "W5RcKmkE", "l8kvWOZdJmkJ", "WOOpWRBdSCkc", "WPTvu8kO", "WOGvkSkrWO0", "WPr9W4/dPwq", "WOmsWQpdM8kc", "mmo0W6m2W6a", "D8oTWQ4eBa", "W5VdNCk4BMq", "dwOtdmkG", "qGVdNG", "F8oPoW", "mCosW70qhKrKWQJdImkjW4m7iG", "emkZF093", "W5ZdISkUzxm", "FtZdPCoYWQJdSmo2pSoEWQa", "mSo/W6qqW4u", "ySkmWQzWsW", "mMOvaCkH", "nvpcUCkpWPu", "W4ufaSo/W7fbWQVdLSk4CbFcUW", "WQFdJSoWeM7cNd9UhHS7jqG", "osBcIh7cOa", "fY9hW6aP", "W53dISkKCNm", "uWFdICoiWPq", "FszCW6xdRSkmW6pdJa3cR8oOha", "W4iLW5BdTW", "WP95W5xdTwK", "eCkFWPZdMmk7", "CH/dV8oYWR4", "WPfHpSoVhW", "zhddGSoEea", "kMxcOCkfWPa", "eJ9aW7CU", "Bvfzwa", "q1jEEw4", "j8kFWOVcGW", "nqKjbuhdHXZdSh5V", "rHtdICouWOm", "rf7cQNRdTq", "WO4cFwrz", "WPddJgGhW4FcKwtcMrBdOq", "ixyC", "W4D/tvddJYldS3HrxCkXW7pdQa"];
  return $o = function() {
    return o;
  }, $o();
}
function aA(o, i) {
  const t = $o();
  return aA = function(e, A) {
    e = e - 425;
    let g = t[e];
    if (aA.zAOIry === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const B = function(C, x) {
        let s = [], E = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + x.charCodeAt(c % x.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(C.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      aA.RrCKQn = B, o = arguments, aA.zAOIry = !0;
    }
    const I = t[11359 + -1 * 11359], a = e + I, r = o[a];
    return r ? g = r : (aA.QnTlSH === void 0 && (aA.QnTlSH = !0), g = aA.RrCKQn(g, A), o[a] = g), g;
  }, aA(o, i);
}
function QA(o, i, t, e, A) {
  return aA(t - 219, i);
}
function vA(o, i, t, e, A) {
  return aA(o - 598, t);
}
function EA(o, i, t, e, A) {
  return aA(e - -195, o);
}
var kI, NI, FI;
class Xc {
  constructor(i) {
    D(this, FI);
    D(this, NI, [DA(646, 548, 667, 610, "@60W") + QA(739, "S7gI", 787) + "ic", QA(968, "])q1", 852) + DA(816, 742, 892, 884, "!J[x") + "ic"]);
    D(this, kI);
    function t(A, g, n, I, a) {
      return aA(a - 902, I);
    }
    function e(A, g, n, I, a) {
      return aA(I - 732, g);
    }
    this[t(1437, 1486, 1546, "b$KK", 1527) + e(1245, "GZYG", 1231, 1203) + "d"] = i;
  }
  async [(FI = QA(737, "SmGt", 829) + "se", NI = EA("SVQd", 524, 571, 458) + EA("!9Ko", 430, 457, 388) + DA(768, 668, 851, 806, "Yw0O") + QA(648, "GZYG", 755), kI = EA("5VBH", 237, 314, 339) + vA(1189, 1108, "@60W"), MA("boGq", 417, 325))](i) {
    function t(a, r, B, C, x) {
      return QA(a - 23, a, x - -507);
    }
    function e(a, r, B, C, x) {
      return EA(a, r - 433, B - 376, x - -801);
    }
    function A(a, r, B, C, x) {
      return vA(B - -1249, r - 414, r);
    }
    const g = await this[I(192, 216, 101, 205, "SmGt") + t("NVV8", 81, 121, 158, 155) + I(247, 187, 197, 194, ")]F^")](i);
    function n(a, r, B, C, x) {
      return vA(x - 24, r - 184, a);
    }
    await Promise[n("sx43", 1137, 1191, 1083, 1078) + e("Yw0O", -277, -440, -284, -389)]([this[t("2aF0", 355, 372, 183, 274) + A(-90, "zfY(", -198) + "d"][e("xqzH", -298, -355, -503, -399)](i), this[n("Yw0O", 1261, 1173, 1080, 1146) + t("SVQd", 350, 303, 359, 283) + "e"](g)]);
    function I(a, r, B, C, x) {
      return QA(a - 169, x, C - -666);
    }
    this[n("cE9G", 1206, 1221, 1224, 1267) + e("SVQd", -528, -364, -421, -451) + t("])q1", 213, 126, 161, 204)]();
  }
  async [MA("@60W", 156, 142) + MA("S7gI", 328, 253) + "se"](i) {
    function t(I, a, r, B, C) {
      return EA(r, a - 249, r - 260, a - 794);
    }
    function e(I, a, r, B, C) {
      return DA(r - -103, a - 394, r - 54, B - 397, I);
    }
    function A(I, a, r, B, C) {
      return EA(I, a - 92, r - 354, C - -487);
    }
    function g(I, a, r, B, C) {
      return DA(B - 377, a - 53, r - 395, B - 294, r);
    }
    function n(I, a, r, B, C) {
      return MA(I, a - 22, C - -344);
    }
    try {
      if (t(986, 1079, "&dW!", 1041, 1140) === A("TZ$h", -200, -291, -121, -207)) this[t(1257, 1166, "H57m", 1076, 1149) + "se"] = void (6968 + -26 * 268), _0x4c40f8[A("zfY(", -268, -271, -260, -235)](_0x133c5d);
      else {
        const I = await fetch(i);
        if (!I.ok)
          throw n("SVQd", 37, 35, -90, -74) !== A("eXMV", -54, -45, 10, -101) ? new Error(A("(kT%", -24, -8, -106, -45) + A("xqzH", -38, -37, -103, -127) + e("xqzH", 684, 616, 510, 564) + A("kd9g", -144, -138, -288, -194) + "d.") : new _0x4529b0(n("S7gI", -87, -147, -92, -72) + g(1177, 1139, "j^CB", 1093, 1133) + A("h0s]", -67, -63, -114, -21) + g(1139, 1141, ")]F^", 1170, 1216) + ".");
        this[t(1139, 1243, "SVQd", 1162, 1315) + "se"] = await I[g(1203, 1122, "cE9G", 1240, 1225)]();
      }
    } catch (I) {
      if (A("zNH1", -48, -57, -129, -143) === n("P^Pz", -242, -61, -69, -160)) this[A("isj9", -226, -111, -122, -172) + "se"] = void (-9074 * 1 + -9954 + 19028 * 1), console[e("zNH1", 646, 645, 597)](I);
      else throw new _0x32d211(A("5VBH", -120, -71, -25, -83) + t(1111, 1220, "6&F7") + A("(&$X", -268, -138, -103, -180) + e("TZ$h", 719, 636, 673) + "d.");
    }
  }
  async [QA(735, "63CX", 765) + QA(812, "5VBH", 836) + "e"](i) {
    function t(n, I, a, r, B) {
      return QA(n - 126, I, n - -1075);
    }
    this[A(1058, 1057, 1060, "&dW!") + e("P^Pz", -144, -96, -161, -167)] = void (1155 * -1 + -119 * 1 + 1274);
    function e(n, I, a, r, B) {
      return QA(n - 409, n, B - -981);
    }
    function A(n, I, a, r, B) {
      return EA(r, I - 203, a - 247, I - 694);
    }
    function g(n, I, a, r, B) {
      return DA(a - -285, I - 480, a - 443, r - 164, r);
    }
    if (!i) {
      if (e("&xOg", -294, -300, -106, -205) === A(1028, 1048, 1113, "CTGI")) return;
      console[t(-382, "TZ$h")](A(972, 1029, 972, "NVV8") + g(695, 600, 585, "CTGI") + e("boGq", -157, -102, -210, -189) + e("isj9", -257, -229, -115, -158) + t(-380, "KDEN")), this[e("&xOg", -126, -204, -85, -103) + "se"] = void (-3866 + -759 * -6 + -688);
      return;
    }
    await this[A(1007, 961, 891, "(&$X") + A(1195, 1113, 1083, "&xOg") + "se"](i);
  }
  async [DA(868, 782, 780, 908, "SmGt") + EA("63CX", 175, 321, 237) + QA(717, "S7gI", 805)](i) {
    function t(r, B, C, x, s) {
      return MA(s, B - 170, B - 487);
    }
    const e = await fetch("" + i + this[I(-293, -207, "$aSL", -241) + t(896, 783, 873, 845, "nD!M") + t(631, 632, 601, 654, "muV3") + a(-272, -244, "rAzN")][88 * 9 + 8861 + -1379 * 7]);
    function A(r, B, C, x, s) {
      return vA(C - -790, B - 360, x);
    }
    function g(r, B, C, x, s) {
      return EA(r, B - 354, C - 135, s - 233);
    }
    const n = e.ok ? 0 : -6879 + 9181 * 1 + -39 * 59;
    function I(r, B, C, x, s) {
      return vA(x - -1477, B - 102, C);
    }
    function a(r, B, C, x, s) {
      return EA(C, B - 466, C - 317, B - -589);
    }
    return "" + i + this[a(-144, -128, "zNH1") + A(205, 187, 237, "boGq") + g(")]F^", 658, 771, 755, 681) + I(-366, -366, "!J[x", -252)][n];
  }
  [MA("rAzN", 280, 225) + DA(700, 603, 725, 757, "NVV8") + "s"](i) {
    function t(e, A, g, n, I) {
      return vA(n - -118, A - 133, e);
    }
    i[t("b$KK", 941, 901, 952) + "ch"]((e) => console[t("BmPe", 934, 835, 946)](e));
  }
  [DA(876, 949, 854, 789, "63CX") + DA(782, 822, 719, 862, "(kT%") + vA(1194, 1094, "!9Ko")](i) {
    function t(e, A, g, n, I) {
      return DA(g - -526, A - 65, g - 321, n - 168, A);
    }
    i[t(248, "MwGm", 246, 219) + "ch"]((e) => console[t(71, "kd9g", 125, 43)](e));
  }
  [QA(703, "zfY(", 809) + EA("$aSL", 470, 553, 436)]() {
    function i(e, A, g, n, I) {
      return QA(e - 216, n, I - 372);
    }
    function t(e, A, g, n, I) {
      return vA(g - -887, A - 105, A);
    }
    return window[t(124, "kd9g", 137) + t(410, "j^CB", 359)][i(1072, 1206, 1202, "P^Pz", 1128) + i(1253, 1102, 1063, "cE9G", 1144)];
  }
  [vA(1085, 1067, "GZYG") + QA(772, "sx43", 853) + vA(1159, 1162, "!J[x")]() {
    function i(n, I, a, r, B) {
      return EA(I, I - 195, a - 37, a - 595);
    }
    function t(n, I, a, r, B) {
      return MA(I, I - 174, a - 293);
    }
    function e(n, I, a, r, B) {
      return DA(B - -580, I - 196, a - 209, r - 63, r);
    }
    function A(n, I, a, r, B) {
      return EA(a, I - 25, a - 412, n - -115);
    }
    function g(n, I, a, r, B) {
      return vA(I - -271, I - 286, r);
    }
    try {
      if (A(298, 409, "])q1", 404, 410) === i(997, "j^CB", 1023, 1022, 1022)) _0x2ce28f[A(181, 131, "dwts", 67, 84) + g(770, 825, 722, "j^CB", 776)](_0x29488a);
      else {
        if (!this[t(537, "!J[x", 494, 486, 400) + "se"]) {
          if (i(974, ")]F^", 1003, 979, 956) !== g(876, 868, 850, "&xOg", 952)) throw new Ui(A(330, 413, "])q1", 437, 247) + t(536, "Yw0O", 605, 623, 595) + t(519, "H57m", 613, 507, 498) + e(17, 106, 118, "$aSL", 97) + ".");
          _0x28b188[A(191, 108, "5VBH", 226, 77)](A(123, 138, "2aF0", 112, 153) + t(489, "cE9G", 489, 602, 484) + i(818, "!9Ko", 912, 1015, 956) + i(889, "b$KK", 921, 822, 1037) + i(880, "nD!M", 913, 925, 1010)), this[i(1066, "CTGI", 969, 870, 946) + "se"] = void 0;
          return;
        }
        if (!this[e(166, 101, 121, "!J[x", 156) + t(428, "eXMV", 417, 381, 494) + "d"][t(336, "b38v", 408, 432, 431) + e(113, 202, 205, "5VBH", 178) + g(784, 755, 810, "cE9G", 644) + "ed"]())
          if (i(837, "@60W", 889, 829, 894) === e(105, 5, 34, "&xOg", 105)) _0x2d928a[e(215, 139, 192, ")]F^", 254) + "ch"]((n) => _0x26ab03[A(121, 115, "CTGI", 230, 39)](n));
          else throw new Ui(t(543, "H57m", 425, 492, 402) + g(823, 842, 923, "S7gI", 944) + e(249, 252, 192, "NVV8", 183) + A(341, 244, "pG*Y", 301, 403) + ".");
        this[t(468, "dwts", 575, 484, 472) + t(392, "(kT%", 478, 410, 452)] = new bI(Tc(this[A(300, 411, "SmGt", 246, 251) + "se"], this[e(168, 95, 154, "SVQd", 152) + i(739, "MwGm", 841, 819, 866)]())), this[i(1028, "SVQd", 1015, 933, 1026) + t(634, "b$KK", 603, 541, 683) + "s"](this[i(870, "PT98", 827, 769, 755) + A(157, 269, "NVV8", 172, 212)][i(900, "kd9g", 844, 898, 765) + "s"]), this[A(187, 145, "j^CB", 198, 210) + A(147, 95, "LEU(", 85, 156) + g(964, 853, 912, "6&F7", 775)](this[t(586, "CTGI", 595, 698, 678) + t(528, "LEU(", 431, 378, 496)][A(274, 349, "Yw0O", 189, 375) + t(573, "S7gI", 465, 408, 486)]);
      }
    } catch (n) {
      if (g(869, 951, 917, "$aSL") !== g(888, 797, 833, "isj9")) _0x513ba1[A(233, 321, "KDEN")](_0x366e82);
      else {
        if (n instanceof Ui) {
          if (e(6, 101, 116, "Par0", 115) !== i(947, "(&$X", 959)) return _0x59599c[i(894, "KDEN", 839) + g(1076, 976, 961, "6njw")][e(149, 173, 267, "MwGm", 163) + A(139, 141, "&xOg")];
          n[i(1063, "GZYG", 994)]();
        } else if (n instanceof Error)
          if (i(981, "zNH1", 893) === i(792, "cE9G", 846)) console[g(796, 877, 894, "Par0")](n);
          else {
            _0x3dd0c7 instanceof _0x4ba1cd ? _0x32ed28[A(127, 172, "S7gI")]() : _0x4df199 instanceof _0x185fc0 && _0x521e58[t(660, "&dW!", 584)](_0x3ed582);
            const a = {};
            a[i(1004, "&xOg", 896) + A(295, 285, "5VBH")] = !1, a[g(716, 817, 777, "PT98") + "s"] = [], a[A(197, 229, "cE9G") + A(286, 210, "!9Ko")] = [], a[e(144, 120, 186, "kd9g", 167) + e(270, 172, 284, "pG*Y", 286) + g(857, 875, 907, "2aF0")] = void 0, a[i(1060, "])q1", 970)] = function() {
            }, a[e(202, 300, 88, "&dW!", 190) + g(844, 777, 891, "pG*Y")] = "", this[g(963, 852, 815, "xqzH") + t(468, "!9Ko", 492)] = new _0x311dc2(a);
          }
        const I = {};
        I[g(793, 855, 791, "SmGt") + e(340, 330, 222, "TZ$h", 265)] = !1, I[g(703, 805, 712, "&xOg") + "s"] = [], I[g(800, 813, 860, "pG*Y") + i(904, "B9Rz", 988)] = [], I[e(251, 139, 266, "BmPe", 225) + i(1164, "kd9g", 1058) + t(554, "6&F7", 497)] = void (8741 + 3 * 424 + -10013), I[i(987, "xqzH", 1026)] = function() {
        }, I[t(548, "LEU(", 576) + t(560, "cE9G", 581)] = "", this[i(826, "zNH1", 905) + i(1077, "P^Pz", 995)] = new bI(I);
      }
    }
  }
  [EA("5VBH", 243, 405, 290) + MA("zfY(", 166, 153) + QA(641, "KDEN", 687) + "t"]() {
    function i(t, e, A, g, n) {
      return EA(n, e - 21, A - 105, t - 1078);
    }
    return this[i(1448, 1496, 1455, 1469, "H57m") + i(1519, 1490, 1504, 1524, "sx43")];
  }
  [DA(661, 607, 682, 545, "muV3") + MA("h0s]", 177, 292) + DA(735, 727, 712, 775, "BmPe")]() {
    var n, I;
    function i(a, r, B, C, x) {
      return MA(B, r - 217, r - 370);
    }
    function t(a, r, B, C, x) {
      return MA(B, r - 160, C - 1191);
    }
    if (!this[g(681, "SVQd", 681) + "se"])
      return t(1426, 1515, "SVQd", 1523) !== A("b$KK", 1304, 1348) ? void 0 : this[A("(kT%", 1330, 1394) + e(1071, 952, 1014, "&dW!")];
    function e(a, r, B, C, x) {
      return MA(C, r - 91, a - 882);
    }
    function A(a, r, B, C, x) {
      return vA(B - 292, r - 437, a);
    }
    function g(a, r, B, C, x) {
      return QA(a - 410, r, B - -182);
    }
    try {
      if (i(739, 639, ")]F^", 581, 743) !== e(1105, 1042, 1183, "H57m", 1192)) _0x505409[g(622, "h0s]", 669, 635, 681) + "ch"]((a) => _0x5cff55[g(553, "Yw0O", 566, 639, 649)](a));
      else {
        const a = JSON[e(1036, 982, 1155, "&xOg", 963)](this[g(618, "!J[x", 548, 592, 584) + "se"]);
        return (n = a == null ? void 0 : a[e(1094, 1113, 979, "2aF0", 1199) + i(697, 638, "NVV8", 719, 741)]) == null ? void 0 : n[A("(&$X", 1311, 1363, 1282, 1293) + t(1405, 1202, "boGq", 1319, 1212)];
      }
    } catch (a) {
      if (t(1627, 1572, "Yw0O", 1527) === e(1116, 1176, 1074, "])q1")) {
        _0x3140cc instanceof _0x27ead3 && _0x45bfbe[t(1535, 1462, "nD!M", 1457) + t(1479, 1512, "S7gI", 1520)](_0x52b630);
        return;
      } else {
        if (a instanceof Error)
          if (t(1489, 1476, "sx43", 1441) !== g(700, "PT98", 612)) {
            const r = _0x2de135[A("Yw0O", 1557, 1509)](this[t(1233, 1224, "eXMV", 1317) + "se"]);
            return (I = r == null ? void 0 : r[g(444, "eXMV", 545) + i(635, 715, "Par0")]) == null ? void 0 : I[i(505, 598, "])q1") + i(713, 673, "GZYG")];
          } else Y[t(1434, 1293, "kd9g", 1321) + e(1089, 1131, 1081, "LEU(")](a);
        return;
      }
    }
  }
}
const ti = class ti extends Xc {
  static getInstance() {
    if (!this._instance) {
      const i = new _c();
      this._instance = new ti(i);
    }
    return this._instance;
  }
};
D(ti, "_instance");
let Fg = ti;
const $c = ({ children: o }) => {
  const i = NA(null);
  return dQ(i, Ae.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ p(ZC, { ref: i, children: o });
}, Ax = ({ cameraOptions: o }) => o ? /* @__PURE__ */ p(OC, { target: o.styleTarget, children: /* @__PURE__ */ p(
  gQ,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: Fg.getInstance(),
    children: /* @__PURE__ */ p(aQ, { analytics: Oc, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ p(
      tB,
      {
        value: Jc({
          onError: o.onError
        }),
        children: /* @__PURE__ */ p(Ma, { children: /* @__PURE__ */ p(vc, { cameraFacing: o.cameraFacing, children: /* @__PURE__ */ p($c, { children: /* @__PURE__ */ p(Mc, { ...o }) }) }) })
      }
    ) })
  }
) }) : null;
X0(Ax, "x-dot-face-auto-capture", ["cameraOptions"]);
