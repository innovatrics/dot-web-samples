var XB = Object.defineProperty;
var no = (g) => {
  throw TypeError(g);
};
var _B = (g, I, e) => I in g ? XB(g, I, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[I] = e;
var p = (g, I, e) => _B(g, typeof I != "symbol" ? I + "" : I, e), Qo = (g, I, e) => I.has(g) || no("Cannot " + e);
var m = (g, I, e) => (Qo(g, I, "read from private field"), e ? e.call(g) : I.get(g)), U = (g, I, e) => I.has(g) ? no("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, e), Y = (g, I, e, A) => (Qo(g, I, "write to private field"), A ? A.call(g, e) : I.set(g, e), e);
var jt, R, Ri, Fi, Ee, ao, Si, U0, RI, H0, K0, Mi, pt = {}, Li = [], zB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, I0 = Array.isArray;
function zA(g, I) {
  for (var e in I) g[e] = I[e];
  return g;
}
function Ji(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function dA(g, I, e) {
  var A, t, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? t = I[o] : i[o] = I[o];
  if (arguments.length > 1 * -8473 + 363 + 8112 && (i.children = arguments.length > 103 * -14 + -5263 + 6708 ? jt.call(arguments, -9778 + -1 * -3061 + 6719) : e), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) void (3830 + -1 * 3830) === i[o] && (i[o] = g.defaultProps[o]);
  return ht(g, i, A, t, null);
}
function ht(g, I, e, A, t) {
  var o = {};
  o.type = g, o.props = I, o.key = e, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (10 * -244 + 3518 + -98 * 11), o.__c = null, o.constructor = void (-53 * 90 + 2 * 101 + 4568), o.__v = t ?? ++Ri, o.__i = -(-1 * 8769 + 3131 + -1 * -5639), o.__u = 0;
  var i = o;
  return t == null && R.vnode != null && R.vnode(i), i;
}
function $B() {
  var g = {};
  return g.current = null, g;
}
function MA(g) {
  return g.children;
}
function FA(g, I) {
  this.props = g, this.context = I;
}
function me(g, I) {
  if (I == null) return g.__ ? me(g.__, g.__i + (2 * 4174 + 3939 + -12286)) : null;
  for (var e; I < g.__k.length; I++) if ((e = g.__k[I]) != null && e.__e != null) return e.__e;
  return typeof g.type == "function" ? me(g) : null;
}
function vi(g) {
  var I, e;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = -1989 + -79 * -11 + 8 * 140; I < g.__k.length; I++) if ((e = g.__k[I]) != null && e.__e != null) {
      g.__e = g.__c.base = e.__e;
      break;
    }
    return vi(g);
  }
}
function O0(g) {
  (!g.__d && (g.__d = !(-2 * -3012 + -1 * -9191 + 179 * -85)) && Ee.push(g) && !mg.__r++ || ao !== R.debounceRendering) && ((ao = R.debounceRendering) || Si)(mg);
}
function mg() {
  var g, I, e, A, t, o, i, C;
  for (Ee.sort(U0); g = Ee.shift(); ) g.__d && (I = Ee.length, A = void (-7725 + 1484 * 2 + 4757), o = (t = (e = g).__v).__e, i = [], C = [], e.__P && ((A = zA({}, t)).__v = t.__v + (-2 * -1046 + -39 * 103 + 1926), R.vnode && R.vnode(A), FI(e.__P, A, t, e.__n, e.__P.namespaceURI, 2371 * 3 + -6704 + 377 * -1 & t.__u ? [o] : null, i, o ?? me(t), !!(46 * 162 + -292 * -1 + 1928 * -4 & t.__u), C), A.__v = t.__v, A.__.__k[A.__i] = A, Ui(i, A, C), A.__e != o && vi(A)), Ee.length > I && Ee.sort(U0));
  mg.__r = -5877 + 1 * 5477 + 400;
}
function Yi(g, I, e, A, t, o, i, C, B, n, a) {
  var Q, E, x, s, d, h = A && A.__k || Li, r = I.length;
  for (e.__d = B, An(e, I, h), B = e.__d, Q = 4597 * -1 + 1324 * -3 + -779 * -11; Q < r; Q++) (x = e.__k[Q]) != null && typeof x != "boolean" && typeof x != "function" && (E = -(-2890 * -2 + 1337 * 4 + 3709 * -3) === x.__i ? pt : h[x.__i] || pt, x.__i = Q, FI(g, x, E, t, o, i, C, B, n, a), s = x.__e, x.ref && E.ref != x.ref && (E.ref && SI(E.ref, null, x), a.push(x.ref, x.__c || s, x)), d == null && s != null && (d = s), 40100 * -3 + 67782 + 118054 & x.__u || E.__k === x.__k ? (B && typeof x.type == "string" && !g.contains(B) && (B = me(E)), B = Wi(x, B, g)) : typeof x.type == "function" && void (6512 + 5 * -1663 + 3 * 601) !== x.__d ? B = x.__d : s && (B = s.nextSibling), x.__d = void (-7 * 221 + -5821 * -1 + -4274), x.__u &= -(118168 + 26147 * 3));
  e.__d = B, e.__e = d;
}
function An(g, I, e) {
  var A, t, o, i, C, B = I.length, n = e.length, a = n, Q = 1 * -9313 + 1350 * -4 + 14713;
  for (g.__k = [], A = 8545 + -5 * 1039 + -3350; A < B; A++) i = A + Q, (t = g.__k[A] = (t = I[A]) == null || typeof t == "boolean" || typeof t == "function" ? null : typeof t == "string" || typeof t == "number" || typeof t == "bigint" || t.constructor == String ? ht(null, t, null, null, null) : I0(t) ? ht(MA, { children: t }, null, null, null) : void (-3420 + -1543 * -5 + -4295) === t.constructor && t.__b > -1 * -1861 + -3974 * 1 + 2113 ? ht(t.type, t.props, t.key, t.ref ? t.ref : null, t.__v) : t) != null ? (t.__ = g, t.__b = g.__b + 1, C = en(t, e, i, a), t.__i = C, o = null, -(-1 * -4968 + 524 * -1 + -4443) !== C && (a--, (o = e[C]) && (o.__u |= 68537 + -28 * -7058 + -135089)), o == null || o.__v === null ? (-(-3 * 1811 + 8270 + -4 * 709) == C && Q--, typeof t.type != "function" && (t.__u |= -44982 + -1 * 90430 + 4567 * 44)) : C !== i && (C == i - (9182 + 1 * -9181) ? Q = C - i : C == i + (8026 + -1406 * -6 + -16461) ? Q++ : C > i ? a > B - i ? Q += C - i : Q-- : C < i && Q++, C !== A + Q && (t.__u |= -38811 + -56 * -1013 + 33 * 1443))) : (o = e[i]) && o.key == null && o.__e && 1873 * -2 + 5 * 707 + -211 * -1 == (131072 & o.__u) && (o.__e == g.__d && (g.__d = me(o)), T0(o, o, !(2 * 2041 + -1181 + -2900)), e[i] = null, a--);
  if (a)
    for (A = -575 * -1 + -9779 + -156 * -59; A < n; A++) (o = e[A]) != null && -328 * -29 + -521 * 8 + -8 * 668 == (1 * -116719 + -160 * -1545 + 591 * 1 & o.__u) && (o.__e == g.__d && (g.__d = me(o)), T0(o, o));
}
function Wi(g, I, e) {
  var A, t;
  if (typeof g.type == "function") {
    for (A = g.__k, t = -9482 + 7001 * 1 + 2481; A && t < A.length; t++) A[t] && (A[t].__ = g, I = Wi(A[t], I, e));
    return I;
  }
  g.__e != I && (e.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && 2272 * -2 + -149 * 8 + 2872 * 2 === I.nodeType);
  return I;
}
function $A(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || (I0(g) ? g.some(function(e) {
    $A(e, I);
  }) : I.push(g)), I;
}
function en(g, I, e, A) {
  var t = g.key, o = g.type, i = e - (-4971 + -22 * -226), C = e + (1 * 6938 + -6729 + -208), B = I[e];
  if (B === null || B && t == B.key && o === B.type && 18 * 214 + 1817 + 1 * -5669 == (26 * 556 + -211977 + -51 * -6443 & B.__u)) return e;
  if (A > (B != null && -44 * 28 + -3469 + 4701 == (2 * 72691 + -166 * 971 + 146876 & B.__u) ? -4 * 1364 + 2552 + -581 * -5 : 1 * 1033 + 5966 + 6999 * -1)) for (; i >= 0 || C < I.length; ) {
    if (i >= -1 * -3361 + -7810 + 4449) {
      if ((B = I[i]) && 620 * 13 + 569 * -2 + -6922 == (199 * -745 + -98991 + 63053 * 6 & B.__u) && t == B.key && o === B.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((B = I[C]) && -8090 + -89 * 1 + 8179 == (-20347 + -51 * -2969 & B.__u) && t == B.key && o === B.type) return C;
      C++;
    }
  }
  return -(13 * -206 + -9085 * 1 + 11764);
}
function xo(g, I, e) {
  I[0] === "-" ? g.setProperty(I, e ?? "") : g[I] = e == null ? "" : typeof e != "number" || zB.test(I) ? e : e + "px";
}
function eg(g, I, e, A, t) {
  var o;
  A: if (I === "style")
    if (typeof e == "string") g.style.cssText = e;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) e && I in e || xo(g.style, I, "");
      if (e)
        for (I in e) A && e[I] === A[I] || xo(g.style, I, e[I]);
    }
  else if (I[-6678 + -6678 * -1] === "o" && I[1] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(571 * -17 + -5963 * -1 + 3746) : I.slice(1879 * -3 + 2210 + 3429), g.l || (g.l = {}), g.l[I + o] = e, e ? A ? e.u = A.u : (e.u = RI, g.addEventListener(I, o ? K0 : H0, o)) : g.removeEventListener(I, o ? K0 : H0, o);
  else {
    if (t == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = e ?? "";
      break A;
    } catch {
    }
    typeof e == "function" || (e == null || !(9515 * 1 + -19 * -207 + -13447) === e && I[-7457 + 61 * -153 + 16794] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && -3570 + -1016 * -4 + -493 == e ? "" : e));
  }
}
function ro(g) {
  return function(I) {
    if (this.l) {
      var e = this.l[I.type + g];
      if (I.t == null) I.t = RI++;
      else if (I.t < e.u) return;
      return e(R.event ? R.event(I) : I);
    }
  };
}
function FI(g, I, e, A, t, o, i, C, B, n) {
  var a, Q, E, x, s, d, h, r, u, y, G, N, M, w, Z, J, z = I.type;
  if (void (10657 + 10657 * -1) !== I.constructor) return null;
  3925 + -1 * -6703 + -10500 & e.__u && (B = !!(6256 + -4505 * -1 + 10729 * -1 & e.__u), o = [C = I.__e = e.__e]), (a = R.__b) && a(I);
  A: if (typeof z == "function") try {
    if (r = I.props, u = "prototype" in z && z.prototype.render, y = (a = z.contextType) && A[a.__c], G = a ? y ? y.props.value : a.__ : A, e.__c ? h = (Q = I.__c = e.__c).__ = Q.__E : (u ? I.__c = Q = new z(r, G) : (I.__c = Q = new FA(r, G), Q.constructor = z, Q.render = gn), y && y.sub(Q), Q.props = r, Q.state || (Q.state = {}), Q.context = G, Q.__n = A, E = Q.__d = !(-2027 * -4 + -5302 + -61 * 46), Q.__h = [], Q._sb = []), u && Q.__s == null && (Q.__s = Q.state), u && z.getDerivedStateFromProps != null && (Q.__s == Q.state && (Q.__s = zA({}, Q.__s)), zA(Q.__s, z.getDerivedStateFromProps(r, Q.__s))), x = Q.props, s = Q.state, Q.__v = I, E) u && z.getDerivedStateFromProps == null && Q.componentWillMount != null && Q.componentWillMount(), u && Q.componentDidMount != null && Q.__h.push(Q.componentDidMount);
    else {
      if (u && z.getDerivedStateFromProps == null && r !== x && Q.componentWillReceiveProps != null && Q.componentWillReceiveProps(r, G), !Q.__e && (Q.shouldComponentUpdate != null && !(4 * 1074 + 2 * 641 + -5577) === Q.shouldComponentUpdate(r, Q.__s, G) || I.__v === e.__v)) {
        for (I.__v !== e.__v && (Q.props = r, Q.state = Q.__s, Q.__d = !1), I.__e = e.__e, I.__k = e.__k, I.__k.forEach(function(Se) {
          Se && (Se.__ = I);
        }), N = 4123 + 4123 * -1; N < Q._sb.length; N++) Q.__h.push(Q._sb[N]);
        Q._sb = [], Q.__h.length && i.push(Q);
        break A;
      }
      Q.componentWillUpdate != null && Q.componentWillUpdate(r, Q.__s, G), u && Q.componentDidUpdate != null && Q.__h.push(function() {
        Q.componentDidUpdate(x, s, d);
      });
    }
    if (Q.context = G, Q.props = r, Q.__P = g, Q.__e = !(-11 * -57 + 8198 * 1 + -8824), M = R.__r, w = 5 * 1324 + -2 * -1583 + -9786, u) {
      for (Q.state = Q.__s, Q.__d = !(1198 * -6 + 3975 + -1 * -3214), M && M(I), a = Q.render(Q.props, Q.state, Q.context), Z = 7283 + -282 * -2 + -7 * 1121; Z < Q._sb.length; Z++) Q.__h.push(Q._sb[Z]);
      Q._sb = [];
    } else do
      Q.__d = !(-1 * -6582 + -1 * 2372 + -4209), M && M(I), a = Q.render(Q.props, Q.state, Q.context), Q.state = Q.__s;
    while (Q.__d && ++w < -7 * 939 + 8901 + -2303);
    Q.state = Q.__s, Q.getChildContext != null && (A = zA(zA({}, A), Q.getChildContext())), u && !E && Q.getSnapshotBeforeUpdate != null && (d = Q.getSnapshotBeforeUpdate(x, s)), Yi(g, I0(J = a != null && a.type === MA && a.key == null ? a.props.children : a) ? J : [J], I, e, A, t, o, i, C, B, n), Q.base = I.__e, I.__u &= -(-5519 + 1823 * -4 + 46 * 282), Q.__h.length && i.push(Q), h && (Q.__E = Q.__ = null);
  } catch (Se) {
    I.__v = null, B || o != null ? (I.__e = C, I.__u |= B ? -1 * 1307 + 2230 + 7 * -109 : 197 + -9 * -181 + -1794, o[o.indexOf(C)] = null) : (I.__e = e.__e, I.__k = e.__k), R.__e(Se, I, e);
  }
  else o == null && I.__v === e.__v ? (I.__k = e.__k, I.__e = e.__e) : I.__e = tn(e.__e, I, e, A, t, o, i, B, n);
  (a = R.diffed) && a(I);
}
function Ui(g, I, e) {
  I.__d = void (61 * -79 + 8771 + -988 * 4);
  for (var A = -1578 + 1 * -3917 + 5495; A < e.length; A++) SI(e[A], e[++A], e[++A]);
  R.__c && R.__c(I, g), g.some(function(t) {
    try {
      g = t.__h, t.__h = [], g.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      R.__e(o, t.__v);
    }
  });
}
function tn(g, I, e, A, t, o, i, C, B) {
  var n, a, Q, E, x, s, d, h = e.props, r = I.props, u = I.type;
  if (u === "svg" ? t = "http://www.w3.org/2000/svg" : u === "math" ? t = "http://www.w3.org/1998/Math/MathML" : t || (t = "http://www.w3.org/1999/xhtml"), o != null) {
    for (n = 1 * -3679 + 1149 * -7 + 11722; n < o.length; n++) if ((x = o[n]) && "setAttribute" in x == !!u && (u ? x.localName === u : -1 * 9395 + -2896 * 2 + 62 * 245 === x.nodeType)) {
      g = x, o[n] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(r);
    g = document.createElementNS(t, u, r.is && r), o = null, C = !(5681 + -4 * -991 + -9644);
  }
  if (u === null) h === r || C && g.data === r || (g.data = r);
  else {
    if (o = o && jt.call(g.childNodes), h = e.props || pt, !C && o != null)
      for (h = {}, n = 7 * 14 + 1135 * -3 + 3307; n < g.attributes.length; n++) h[(x = g.attributes[n]).name] = x.value;
    for (n in h) if (x = h[n], n != "children") {
      if (n == "dangerouslySetInnerHTML") Q = x;
      else if (n !== "key" && !(n in r)) {
        if (n == "value" && "defaultValue" in r || n == "checked" && "defaultChecked" in r) continue;
        eg(g, n, null, x, t);
      }
    }
    for (n in r) x = r[n], n == "children" ? E = x : n == "dangerouslySetInnerHTML" ? a = x : n == "value" ? s = x : n == "checked" ? d = x : n === "key" || C && typeof x != "function" || h[n] === x || eg(g, n, x, h[n], t);
    if (a) C || Q && (a.__html === Q.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (Q && (g.innerHTML = ""), Yi(g, I0(E) ? E : [E], I, e, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t, o, i, o ? o[0] : e.__k && me(e, 0), C, B), o != null)
      for (n = o.length; n--; ) o[n] != null && Ji(o[n]);
    C || (n = "value", void (8900 + 4450 * -2) !== s && (s !== g[n] || u === "progress" && !s || u === "option" && s !== h[n]) && eg(g, n, s, h[n], t), n = "checked", void (2654 + 2705 * 3 + -10769) !== d && d !== g[n] && eg(g, n, d, h[n], t));
  }
  return g;
}
function SI(g, I, e) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    R.__e(A, e);
  }
}
function T0(g, I, e) {
  var A, t;
  if (R.unmount && R.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || SI(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      R.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (t = 9 * 269 + -668 * -12 + 497 * -21; t < A.length; t++) A[t] && T0(A[t], I, e || typeof g.type != "function");
  e || g.__e == null || Ji(g.__e), g.__c = g.__ = g.__e = g.__d = void (-2 * -501 + 2458 + -3460);
}
function gn(g, I, e) {
  return this.constructor(g, e);
}
function ne(g, I, e) {
  var A, t, o, i;
  R.__ && R.__(g, I), t = (A = typeof e == "function") ? null : e && e.__k || I.__k, o = [], i = [], FI(I, g = (!A && e || I).__k = dA(MA, null, [g]), t || pt, pt, I.namespaceURI, !A && e ? [e] : t ? null : I.firstChild ? jt.call(I.childNodes) : null, o, !A && e ? e : t ? t.__e : I.firstChild, A, i), Ui(o, g, i);
}
function MI(g, I) {
  ne(g, I, MI);
}
function LI(g, I, e) {
  var A, t, o, i, C = zA({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? t = I[o] : C[o] = void (1 * -6159 + -7912 + 14071 * 1) === I[o] && void (4668 * 1 + -7 * 895 + 1597) !== i ? i[o] : I[o];
  return arguments.length > 726 + -585 * -2 + -1894 && (C.children = arguments.length > 1949 * -3 + 5094 + 756 ? jt.call(arguments, -7093 * 1 + 5140 + 115 * 17) : e), ht(g.type, C, A || g.key, t || g.ref, null);
}
function Pt(g, I) {
  var e = { __c: I = "__cC" + Mi++, __: g, Consumer: function(A, t) {
    return A.children(t);
  }, Provider: function(A) {
    var t, o;
    return this.getChildContext || (t = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      t = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && t.some(function(C) {
        C.__e = !0, O0(C);
      });
    }, this.sub = function(i) {
      t.push(i);
      var C = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        t && t.splice(t.indexOf(i), 1), C && C.call(i);
      };
    }), A.children;
  } };
  return e.Provider.__ = e.Consumer.contextType = e;
}
jt = Li.slice, R = { __e: function(g, I, e, A) {
  for (var t, o, i; I = I.__; ) if ((t = I.__c) && !t.__) try {
    if ((o = t.constructor) && o.getDerivedStateFromError != null && (t.setState(o.getDerivedStateFromError(g)), i = t.__d), t.componentDidCatch != null && (t.componentDidCatch(g, A || {}), i = t.__d), i) return t.__E = t;
  } catch (C) {
    g = C;
  }
  throw g;
} }, Ri = 1579 + 137 * -3 + -1168, Fi = function(g) {
  return g != null && g.constructor == null;
}, FA.prototype.setState = function(g, I) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zA({}, this.state), typeof g == "function" && (g = g(zA({}, e), this.props)), g && zA(e, g), g != null && this.__v && (I && this._sb.push(I), O0(this));
}, FA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(-3919 + -2776 * -1 + 3 * 381), g && this.__h.push(g), O0(this));
}, FA.prototype.render = MA, Ee = [], Si = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, U0 = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, mg.__r = -10 * -761 + 79 * -1 + 1 * -7531, RI = 7774 + 1 * 6491 + -14265, H0 = ro(!(-7296 + -1 * -7297)), K0 = ro(!(-55 * -21 + -3522 + -1 * -2367)), Mi = 1 * -9883 + 5 * -937 + -2 * -7284;
function JI() {
  return (JI = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = 1; I < arguments.length; I++) {
      var e = arguments[I];
      for (var A in e) Object.prototype.hasOwnProperty.call(e, A) && (g[A] = e[A]);
    }
    return g;
  }).apply(this, arguments);
}
var In = ["context", "children"];
function on(g) {
  this.getChildContext = function() {
    return g.context;
  };
  var I = g.children, e = function(A, t) {
    if (A == null) return {};
    var o, i, C = {}, B = Object.keys(A);
    for (i = 5520 + -3 * 1286 + -1662; i < B.length; i++) t.indexOf(o = B[i]) >= -42 * 32 + 7 * -926 + 7 * 1118 || (C[o] = A[o]);
    return C;
  }(g, In);
  return LI(I, e);
}
function Cn() {
  var g = {};
  g.detail = {}, g.bubbles = !(2 * 4308 + -4322 + -226 * 19), g.cancelable = !(-7867 * -1 + -2856 + -1 * 5011);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = dA(on, JI({}, this._props, { context: I.detail.context }), function e(A, t) {
    if (-31 * 58 + -5391 * -1 + -3590 === A.nodeType) return A.data;
    if (204 * -39 + 7611 + 346 !== A.nodeType) return null;
    var o = [], i = {}, C = -59 * 109 + 697 * -6 + 10613 * 1, B = A.attributes, n = A.childNodes;
    for (C = B.length; C--; ) B[C].name !== "slot" && (i[B[C].name] = B[C].value, i[Hi(B[C].name)] = B[C].value);
    for (C = n.length; C--; ) {
      var a = e(n[C], null), Q = n[C].slot;
      Q ? i[Q] = dA(Eo, { name: Q }, a) : o[C] = a;
    }
    var E = t ? dA(Eo, null, o) : o;
    return dA(t || A.nodeName.toLowerCase(), i, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? MI : ne)(this._vdom, this._root);
}
function Hi(g) {
  return g.replace(/-(\w)/g, function(I, e) {
    return e ? e.toUpperCase() : "";
  });
}
function Bn(g, I, e) {
  if (this._vdom) {
    var A = {};
    A[g] = e = e ?? void (6798 * 1 + -1 * -3009 + -1 * 9807), A[Hi(g)] = e, this._vdom = LI(this._vdom, A), ne(this._vdom, this._root);
  }
}
function nn() {
  ne(this._vdom = null, this._root);
}
function Eo(g, I) {
  var e = this;
  return dA("slot", JI({}, g, { ref: function(A) {
    A ? (e.ref = A, e._listener || (e._listener = function(t) {
      t.stopPropagation(), t.detail.context = I;
    }, A.addEventListener("_preact", e._listener))) : e.ref.removeEventListener("_preact", e._listener);
  } }));
}
function Qn(g, I, e, A) {
  function t() {
    var o = Reflect.construct(HTMLElement, [], t);
    return o._vdomComponent = g, o._root = o, o;
  }
  return (t.prototype = Object.create(HTMLElement.prototype)).constructor = t, t.prototype.connectedCallback = Cn, t.prototype.attributeChangedCallback = Bn, t.prototype.disconnectedCallback = nn, e = e || g.observedAttributes || Object.keys(g.propTypes || {}), t.observedAttributes = e, e.forEach(function(o) {
    Object.defineProperty(t.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var C = typeof i;
      i != null && C !== "string" && C !== "boolean" && C !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(I, t);
}
var an = 3263 * 1 + 6023 * -1 + 184 * 15;
function D(g, I, e, A, t, o) {
  I || (I = {});
  var i, C, B = I;
  if ("ref" in B)
    for (C in B = {}, I) C == "ref" ? i = I[C] : B[C] = I[C];
  var n = {};
  n.type = g, n.props = B, n.key = e, n.ref = i, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__d = void (3007 * -3 + -3735 + 4252 * 3), n.__c = null, n.constructor = void (-1465 + 293 * 5), n.__v = --an, n.__i = -(9193 + 1 * -6982 + 442 * -5), n.__u = 0, n.__source = t, n.__self = o;
  var a = n;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (-3 * 3083 + -10 * -350 + -5749 * -1) === B[C] && (B[C] = i[C]);
  return R.vnode && R.vnode(a), a;
}
var DA = function() {
  return DA = Object.assign || function(I) {
    for (var e, A = 1, t = arguments.length; A < t; A++) {
      e = arguments[A];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (I[o] = e[o]);
    }
    return I;
  }, DA.apply(this, arguments);
};
function qe(g, I, e) {
  if (e || arguments.length === 2) for (var A = 0, t = I.length, o; A < t; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function xn(g) {
  var I = Object.create(null);
  return function(e) {
    return I[e] === void 0 && (I[e] = g(e)), I[e];
  };
}
var rn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, En = xn(function(g) {
  return rn.test(g) || g.charCodeAt(2796 + 6775 * 1 + -9571) === 111 && g.charCodeAt(1) === 110 && g.charCodeAt(2911 + 2909 * -1) < 91;
}), Qe, q, f0, so, Ze = -38 * 47 + 5467 + -3681, Ki = [], j = R, co = j.__b, ho = j.__r, lo = j.diffed, uo = j.__c, fo = j.unmount, Do = j.__;
function ze(g, I) {
  j.__h && j.__h(q, g, Ze || I), Ze = -8391 + 9629 * -1 + -4505 * -4;
  var e = {};
  e.__ = [], e.__h = [];
  var A = q.__H || (q.__H = e);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function yA(g) {
  return Ze = 1855 * 3 + 3547 + -9111, vI(qi, g);
}
function vI(g, I, e) {
  var A = ze(Qe++, 2);
  if (A.t = g, !A.__c && (A.__ = [e ? e(I) : qi(void (-1 * -4143 + 8965 + -3277 * 4), I), function(C) {
    var B = A.__N ? A.__N[0] : A.__[0], n = A.t(B, C);
    B !== n && (A.__N = [n, A.__[1 * -8158 + 1 * 1829 + 5 * 1266]], A.__c.setState({}));
  }], A.__c = q, !q.u)) {
    var t = function(C, B, n) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (a.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, C, B, n);
      var Q = !(-6896 + -363 * -19);
      return a.forEach(function(E) {
        if (E.__N) {
          var x = E.__[0];
          E.__ = E.__N, E.__N = void 0, x !== E.__[0] && (Q = !0);
        }
      }), !(!Q && A.__c.props === C) && (!o || o.call(this, C, B, n));
    };
    q.u = !(-3608 + -6 * -1613 + 1214 * -5);
    var o = q.shouldComponentUpdate, i = q.componentWillUpdate;
    q.componentWillUpdate = function(C, B, n) {
      if (this.__e) {
        var a = o;
        o = void (3338 + 3338 * -1), t(C, B, n), o = a;
      }
      i && i.call(this, C, B, n);
    }, q.shouldComponentUpdate = t;
  }
  return A.__N || A.__;
}
function V(g, I) {
  var e = ze(Qe++, 3);
  !j.__s && YI(e.__H, I) && (e.__ = g, e.i = I, q.__H.__h.push(e));
}
function $e(g, I) {
  var e = ze(Qe++, 4);
  !j.__s && YI(e.__H, I) && (e.__ = g, e.i = I, q.__h.push(e));
}
function LA(g) {
  return Ze = 5, wA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function Oi(g, I, e) {
  Ze = 1 * -8191 + 9750 + -1553, $e(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void (-6865 + 1 * 6865);
  }, e == null ? e : e.concat(g));
}
function wA(g, I) {
  var e = ze(Qe++, 7);
  return YI(e.__H, I) && (e.__ = g(), e.__H = I, e.__h = g), e.__;
}
function Ae(g, I) {
  return Ze = 3555 * 2 + -3219 * 1 + -3883, wA(function() {
    return g;
  }, I);
}
function Re(g) {
  var I = q.context[g.__c], e = ze(Qe++, -2707 + -4384 * 2 + 33 * 348);
  return e.c = g, I ? (e.__ == null && (e.__ = !(384 + 1 * -384), I.sub(q)), I.props.value) : g.__;
}
function Gg(g, I) {
  j.useDebugValue && j.useDebugValue(I ? I(g) : g);
}
function Ti() {
  var g = ze(Qe++, 11);
  if (!g.__) {
    for (var I = q.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var e = I.__m || (I.__m = [-263 * -7 + -9670 + -7829 * -1, 8073 + -2 * 2034 + 45 * -89]);
    g.__ = "P" + e[2551 + -760 * -5 + -6351] + "-" + e[1604 * -5 + 684 + 7337]++;
  }
  return g.__;
}
function sn() {
  for (var g; g = Ki.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach(ag), g.__H.__h.forEach(q0), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], j.__e(I, g.__v);
  }
}
j.__b = function(g) {
  q = null, co && co(g);
}, j.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), Do && Do(g, I);
}, j.__r = function(g) {
  ho && ho(g), Qe = 3543 + -1 * 3543;
  var I = (q = g.__c).__H;
  I && (f0 === q ? (I.__h = [], q.__h = [], I.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.i = e.__N = void (7 * 237 + -116 * -16 + -1 * 3515);
  })) : (I.__h.forEach(ag), I.__h.forEach(q0), I.__h = [], Qe = 6703 + -2 * -3709 + -1569 * 9)), f0 = q;
}, j.diffed = function(g) {
  lo && lo(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (-83 * -52 + -557 * 1 + -3758 !== Ki.push(I) && so === j.requestAnimationFrame || ((so = j.requestAnimationFrame) || cn)(sn)), I.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.i = void (7580 + -285 * 7 + -5585);
  })), f0 = q = null;
}, j.__c = function(g, I) {
  I.some(function(e) {
    try {
      e.__h.forEach(ag), e.__h = e.__h.filter(function(A) {
        return !A.__ || q0(A);
      });
    } catch (A) {
      I.some(function(t) {
        t.__h && (t.__h = []);
      }), I = [], j.__e(A, e.__v);
    }
  }), uo && uo(g, I);
}, j.unmount = function(g) {
  fo && fo(g);
  var I, e = g.__c;
  e && e.__H && (e.__H.__.forEach(function(A) {
    try {
      ag(A);
    } catch (t) {
      I = t;
    }
  }), e.__H = void (-2 * 4223 + -9683 + 18129), I && j.__e(I, e.__v));
};
var yo = typeof requestAnimationFrame == "function";
function cn(g) {
  var I, e = function() {
    clearTimeout(A), yo && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(e, 100);
  yo && (I = requestAnimationFrame(e));
}
function ag(g) {
  var I = q, e = g.__c;
  typeof e == "function" && (g.__c = void (-10 * 123 + -3481 + 4711), e()), q = I;
}
function q0(g) {
  var I = q;
  g.__c = g.__(), q = I;
}
function YI(g, I) {
  return !g || g.length !== I.length || I.some(function(e, A) {
    return e !== g[A];
  });
}
function qi(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function Zi(g, I) {
  for (var e in I) g[e] = I[e];
  return g;
}
function Z0(g, I) {
  for (var e in g) if (e !== "__source" && !(e in I)) return !(-10138 + -5069 * -2);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(1 * 5269 + -3 * 833 + 1385 * -2);
  return !(-3 * 3183 + -9757 + 19307);
}
function j0(g, I) {
  this.props = g, this.context = I;
}
function dn(g, I) {
  function e(t) {
    var o = this.props.ref, i = o == t.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, t) || !i : Z0(this.props, t);
  }
  function A(t) {
    return this.shouldComponentUpdate = e, dA(g, t);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(-5041 * 1 + 178 + 4863), A.__f = !(17 * 345 + 1680 * -1 + -4185), A;
}
(j0.prototype = new FA()).isPureReactComponent = !(-2360 + -1180 * -2), j0.prototype.shouldComponentUpdate = function(g, I) {
  return Z0(this.props, g) || Z0(this.state, I);
};
var wo = R.__b;
R.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), wo && wo(g);
};
var hn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -462 + -1 * 6869 + 11242;
function ji(g) {
  function I(e) {
    var A = Zi({}, e);
    return delete A.ref, g(A, e.ref || null);
  }
  return I.$$typeof = hn, I.render = I, I.prototype.isReactComponent = I.__f = !0, I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var po = function(g, I) {
  return g == null ? null : $A($A(g).map(I));
}, ln = { map: po, forEach: po, count: function(g) {
  return g ? $A(g).length : -14371 + -1 * -14371;
}, only: function(g) {
  var I = $A(g);
  if (-1 * 2951 + -206 * -11 + 686 !== I.length) throw "Children.only";
  return I[-5046 + 8 * -1091 + 2 * 6887];
}, toArray: $A }, un = R.__e;
R.__e = function(g, I, e, A) {
  if (g.then) {
    for (var t, o = I; o = o.__; ) if ((t = o.__c) && t.__c) return I.__e == null && (I.__e = e.__e, I.__k = e.__k), t.__c(g, I);
  }
  un(g, I, e, A);
};
var mo = R.unmount;
function Pi(g, I, e) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = Zi({}, g)).__c != null && (g.__c.__P === e && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return Pi(A, I, e);
  })), g;
}
function Vi(g, I, e) {
  return g && e && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return Vi(A, I, e);
  }), g.__c && g.__c.__P === I && (g.__e && e.appendChild(g.__e), g.__c.__e = !0, g.__c.__P = e)), g;
}
function xg() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Xi(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function fn(g) {
  var I, e, A;
  function t(o) {
    if (I || (I = g()).then(function(i) {
      e = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!e) throw I;
    return dA(e, o);
  }
  return t.displayName = "Lazy", t.__f = !(5889 + 1963 * -3), t;
}
function at() {
  this.u = null, this.o = null;
}
R.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && 103 * 74 + 1214 * 3 + 3 * -3744 & g.__u && (g.type = null), mo && mo(g);
}, (xg.prototype = new FA()).__c = function(g, I) {
  var e = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(e);
  var t = Xi(A.__v), o = !(7104 + 181 * 13 + 3152 * -3), i = function() {
    o || (o = !0, e.__R = null, t ? t(C) : C());
  };
  e.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var B = A.state.__a;
        A.__v.__k[-4541 * -1 + 1299 * 7 + -13634 * 1] = Vi(B, B.__c.__P, B.__c.__O);
      }
      var n;
      for (A.setState({ __a: A.__b = null }); n = A.t.pop(); ) n.forceUpdate();
    }
  };
  A.__u++ || -47 * -51 + -19 * 473 + 6622 & I.__u || A.setState({ __a: A.__b = A.__v.__k[-4080 + 9501 * -1 + 9 * 1509] }), g.then(i, i);
}, xg.prototype.componentWillUnmount = function() {
  this.t = [];
}, xg.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"), A = this.__v.__k[-3010 + 8 * -778 + 18 * 513].__c;
      this.__v.__k[-5 * 625 + 2089 * -4 + -11481 * -1] = Pi(this.__b, e, A.__O = A.__P);
    }
    this.__b = null;
  }
  var t = I.__a && dA(MA, null, g.fallback);
  return t && (t.__u &= -(-1621 * 2 + -2372 + 5647)), [dA(MA, null, I.__a ? null : g.children), t];
};
var Go = function(g, I, e) {
  if (++e[-16 * 122 + -1908 + 3861 * 1] === e[-9771 * 1 + 146 * -17 + -1 * -12253] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[-3 * -1493 + -7395 + 2916] !== "t" || !g.o.size)) for (e = g.u; e; ) {
    for (; e.length > -6601 + -3 * 727 + 8785; ) e.pop()();
    if (e[-9285 + -1902 * 1 + 11188] < e[7 * 1226 + -2509 + -6073]) break;
    g.u = e = e[-9980 + -4 * -982 + -2018 * -3];
  }
};
function Dn(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function yn(g) {
  var I = this, e = g.i;
  I.componentWillUnmount = function() {
    ne(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== e && I.componentWillUnmount(), I.l || (I.i = e, I.l = { nodeType: 1, parentNode: e, childNodes: [], contains: function() {
    return !(-3 * 3148 + -1 * 3879 + 13323);
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, t) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> 1034 * 1 + -3437 + 2404, 1), I.i.removeChild(A);
  } }), ne(dA(Dn, { context: I.context }, g.__v), I.l);
}
function wn(g, I) {
  var e = {};
  e.__v = g, e.i = I;
  var A = dA(yn, e);
  return A.containerInfo = I, A;
}
(at.prototype = new FA()).__a = function(g) {
  var I = this, e = Xi(I.__v), A = I.o.get(g);
  return A[2504 * -1 + -2 * -4939 + 1229 * -6]++, function(t) {
    var o = function() {
      I.props.revealOrder ? (A.push(t), Go(I, g, A)) : t();
    };
    e ? e(o) : o();
  };
}, at.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = $A(g.children);
  g.revealOrder && g.revealOrder[9284 + 13 * -1 + -9271] === "b" && I.reverse();
  for (var e = I.length; e--; ) this.o.set(I[e], this.u = [4714 + 754 * -1 + 3959 * -1, -10021 + -10021 * -1, this.u]);
  return g.children;
}, at.prototype.componentDidUpdate = at.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, e) {
    Go(g, e, I);
  });
};
var _i = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -6176 * 19 + 51739 + 125708, pn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, mn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Gn = /[A-Z0-9]/g, kn = typeof document < "u", bn = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function Nn(g, I, e) {
  return I.__k == null && (I.textContent = ""), ne(g, I), typeof e == "function" && e(), g ? g.__c : null;
}
function Rn(g, I, e) {
  return MI(g, I), typeof e == "function" && e(), g ? g.__c : null;
}
FA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(FA.prototype, g, { configurable: !(1627 * 4 + 39 * -48 + -1159 * 4), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var e = {};
    e.configurable = !(6565 + 101 * -65), e.writable = !(1 * 8524 + 6987 + 15511 * -1), e.value = I, Object.defineProperty(this, g, e);
  } });
});
var ko = R.event;
function Fn() {
}
function Sn() {
  return this.cancelBubble;
}
function Mn() {
  return this.defaultPrevented;
}
R.event = function(g) {
  return ko && (g = ko(g)), g.persist = Fn, g.isPropagationStopped = Sn, g.isDefaultPrevented = Mn, g.nativeEvent = g;
};
var rg = {};
rg.enumerable = !1, rg.configurable = !(-3 * -227 + 7920 + 1 * -8601), rg.get = function() {
  return this.class;
};
var WI, Ln = rg, bo = R.vnode;
R.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var e = I.props, A = I.type, t = {};
    for (var o in e) {
      var i = e[o];
      if (!(o === "value" && "defaultValue" in e && i == null || kn && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in e && e.value == null ? o = "value" : o === "download" && !(-2592 + -216 * -12) === i ? i = "" : C === "translate" && i === "no" ? i = !(1946 + -2222 * 4 + -6943 * -1) : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || bn(e.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : mn.test(o) ? o = C : A.indexOf("-") === -1 && pn.test(o) ? o = o.replace(Gn, "-$&").toLowerCase() : i === null && (i = void 0) : C = o = "oninput", C === "oninput" && t[o = C] && (o = "oninputCapture"), t[o] = i;
      }
    }
    A == "select" && t.multiple && Array.isArray(t.value) && (t.value = $A(e.children).forEach(function(B) {
      B.props.selected = -(111 * -77 + 5403 * 1 + 3145 * 1) != t.value.indexOf(B.props.value);
    })), A == "select" && t.defaultValue != null && (t.value = $A(e.children).forEach(function(B) {
      B.props.selected = t.multiple ? -(4974 + 1 * -9278 + 4305) != t.defaultValue.indexOf(B.props.value) : t.defaultValue == B.props.value;
    })), e.class && !e.className ? (t.class = e.class, Object.defineProperty(t, "className", Ln)) : (e.className && !e.class || e.class && e.className) && (t.class = t.className = e.className), I.props = t;
  }(g), g.$$typeof = _i, bo && bo(g);
};
var No = R.__r;
R.__r = function(g) {
  No && No(g), WI = g.__c;
};
var Ro = R.diffed;
R.diffed = function(g) {
  Ro && Ro(g);
  var I = g.props, e = g.__e;
  e != null && g.type === "textarea" && "value" in I && I.value !== e.value && (e.value = I.value == null ? "" : I.value), WI = null;
};
var BA = {};
BA.readContext = function(g) {
  return WI.__n[g.__c].props.value;
}, BA.useCallback = Ae, BA.useContext = Re, BA.useDebugValue = Gg, BA.useDeferredValue = eC, BA.useEffect = V, BA.useId = Ti, BA.useImperativeHandle = Oi, BA.useInsertionEffect = gC, BA.useLayoutEffect = $e, BA.useMemo = wA, BA.useReducer = vI, BA.useRef = LA, BA.useState = yA, BA.useSyncExternalStore = IC, BA.useTransition = tC;
var zi = {};
zi.current = BA;
var $i = {};
$i.ReactCurrentDispatcher = zi;
var Jn = $i;
function vn(g) {
  return dA.bind(null, g);
}
function o0(g) {
  return !!g && g.$$typeof === _i;
}
function Yn(g) {
  return o0(g) && g.type === MA;
}
function Wn(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function Un(g) {
  return o0(g) ? LI.apply(null, arguments) : g;
}
function Hn(g) {
  return !!g.__k && (ne(null, g), !0);
}
function Kn(g) {
  return g && (g.base || 2270 + -1 * 2269 === g.nodeType && g) || null;
}
var On = function(g, I) {
  return g(I);
}, Tn = function(g, I) {
  return g(I);
}, qn = MA;
function AC(g) {
  g();
}
function eC(g) {
  return g;
}
function tC() {
  return [!(-13 * -507 + -7664 + 1 * 1074), AC];
}
var gC = $e, Zn = o0;
function IC(g, I) {
  var e = I(), A = yA({ h: { __: e, v: I } }), t = A[0].h, o = A[1];
  return $e(function() {
    t.__ = e, t.v = I, D0(t) && o({ h: t });
  }, [g, e, I]), V(function() {
    return D0(t) && o({ h: t }), g(function() {
      D0(t) && o({ h: t });
    });
  }, [g]), e;
}
function D0(g) {
  var I, e, A = g.v, t = g.__;
  try {
    var o = A();
    return !((I = t) === (e = o) && (8242 * -1 + 95 * 102 + 181 * -8 !== I || (1 * 8463 + 2852 + -11314) / I == (-3764 * -1 + 25 * 134 + -7113) / e) || I != I && e != e);
  } catch {
    return !(3589 * -1 + -50 + 3639);
  }
}
var b = {};
b.useState = yA, b.useId = Ti, b.useReducer = vI, b.useEffect = V, b.useLayoutEffect = $e, b.useInsertionEffect = gC, b.useTransition = tC, b.useDeferredValue = eC, b.useSyncExternalStore = IC, b.startTransition = AC, b.useRef = LA, b.useImperativeHandle = Oi, b.useMemo = wA, b.useCallback = Ae, b.useContext = Re, b.useDebugValue = Gg, b.version = "17.0.2", b.Children = ln, b.render = Nn, b.hydrate = Rn, b.unmountComponentAtNode = Hn, b.createPortal = wn, b.createElement = dA, b.createContext = Pt, b.createFactory = vn, b.cloneElement = Un, b.createRef = $B, b.Fragment = MA, b.isValidElement = o0, b.isElement = Zn, b.isFragment = Yn, b.isMemo = Wn, b.findDOMNode = Kn, b.Component = FA, b.PureComponent = j0, b.memo = dn, b.forwardRef = ji, b.flushSync = Tn, b.unstable_batchedUpdates = On, b.StrictMode = qn, b.Suspense = xg, b.SuspenseList = at, b.lazy = fn, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jn;
var Ge = b, jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pn(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function Vn(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function Xn(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") && Object.keys(g).length === 1 ? g.default : g;
}
function _n(g) {
  if (g.__esModule) return g;
  var I = g.default;
  if (typeof I == "function") {
    var e = function A() {
      return this instanceof A ? Reflect.construct(I, arguments, this.constructor) : I.apply(this, arguments);
    };
    e.prototype = I.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(g).forEach(function(A) {
    var t = Object.getOwnPropertyDescriptor(g, A);
    Object.defineProperty(e, A, t.get ? t : {
      enumerable: !0,
      get: function() {
        return g[A];
      }
    });
  }), e;
}
const zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: jn,
  getAugmentedNamespace: _n,
  getDefaultExportFromCjs: Pn,
  getDefaultExportFromNamespaceIfNotNamed: Xn,
  getDefaultExportFromNamespaceIfPresent: Vn
}, Symbol.toStringTag, { value: "Module" }));
var $n = function(I, e, A, t) {
  var o = A ? A.call(t, I, e) : void 0;
  if (o !== void 0) return !!o;
  if (I === e) return !0;
  if (typeof I != "object" || !I || typeof e != "object" || !e) return !1;
  var i = Object.keys(I), C = Object.keys(e);
  if (i.length !== C.length) return !1;
  for (var B = Object.prototype.hasOwnProperty.bind(e), n = 744 + 1 * -8019 + 291 * 25; n < i.length; n++) {
    var a = i[n];
    if (!B(a)) return !1;
    var Q = I[a], E = e[a];
    if (o = A ? A.call(t, Q, E, a) : void (-1 * -323 + 5742 + -6065), o === !1 || o === void (-1791 + -1861 * 3 + 2 * 3687) && Q !== E) return !1;
  }
  return !0;
};
const AQ = zn.getDefaultExportFromCjs($n);
var T = "-ms-", lt = "-moz-", W = "-webkit-", oC = "comm", i0 = "rule", UI = "decl", eQ = "@import", iC = "@keyframes", tQ = "@layer", CC = Math.abs, HI = String.fromCharCode, P0 = Object.assign;
function gQ(g, I) {
  return iA(g, -2 * -1437 + -6516 + 6 * 607) ^ 3546 * -2 + 6753 + 384 ? (((I << -66 * -100 + -2202 * 4 + 2210 * 1 ^ iA(g, -233 * 39 + 1021 * 2 + 7045)) << 8697 + 4969 * 2 + -6211 * 3 ^ iA(g, -9 * 501 + 4865 + -355)) << 9866 + -8 * 1233 ^ iA(g, -246 * -2 + 2309 * -3 + 6437)) << 5497 * 1 + -6521 * -1 + 8 * -1502 ^ iA(g, 8073 + -3 * 2690) : 79 * 53 + -2357 * -1 + 818 * -8;
}
function BC(g) {
  return g.trim();
}
function VA(g, I) {
  return (g = I.exec(g)) ? g[-30 * -9 + 32 * -101 + 2962] : g;
}
function F(g, I, e) {
  return g.replace(I, e);
}
function Eg(g, I, e) {
  return g.indexOf(I, e);
}
function iA(g, I) {
  return g.charCodeAt(I) | 2401 + 23 * -73 + -722;
}
function je(g, I, e) {
  return g.slice(I, e);
}
function OA(g) {
  return g.length;
}
function nC(g) {
  return g.length;
}
function xt(g, I) {
  return I.push(g), g;
}
function IQ(g, I) {
  return g.map(I).join("");
}
function Fo(g, I) {
  return g.filter(function(e) {
    return !VA(e, I);
  });
}
var C0 = 1, Pe = 4382 + 337 * -13, QC = 571 * 2 + 6585 + -7727, JA = -571 + 1 * 571, eA = 389 * 15 + -246 * 4 + -9 * 539, At = "";
function B0(g, I, e, A, t, o, i, C) {
  var B = {};
  return B.value = g, B.root = I, B.parent = e, B.type = A, B.props = t, B.children = o, B.line = C0, B.column = Pe, B.length = i, B.return = "", B.siblings = C, B;
}
function ge(g, I) {
  return P0(B0("", null, null, "", null, null, -3087 + -4 * -1126 + -1417, g.siblings), g, { length: -g.length }, I);
}
function Le(g) {
  for (; g.root; ) g = ge(g.root, { children: [g] });
  xt(g, g.siblings);
}
function oQ() {
  return eA;
}
function iQ() {
  return eA = JA > 9931 + -89 * -94 + 1 * -18297 ? iA(At, --JA) : -2879 + -1 * 8245 + 2781 * 4, Pe--, eA === -6994 + 4 * 1751 && (Pe = 1, C0--), eA;
}
function WA() {
  return eA = JA < QC ? iA(At, JA++) : 29 * 59 + -169 * 58 + 279 * 29, Pe++, eA === 10 && (Pe = 13261 + 1105 * -12, C0++), eA;
}
function we() {
  return iA(At, JA);
}
function sg() {
  return JA;
}
function n0(g, I) {
  return je(At, g, I);
}
function V0(g) {
  switch (g) {
    case 0:
    case -7269 + 1 * -3932 + -1121 * -10:
    case 1 * -3140 + -13 * 239 + 1 * 6257:
    case -4597 * -1 + 7869 + -12453:
    case 8867 + -95 * 93:
      return 2758 + 2753 * -1;
    case 6338 + -506 * -4 + -8329 * 1:
    case 7497 + 3 * -1011 + -4421:
    case -12476 + -5 * -2504:
    case 47:
    case 62:
    case 94 * 45 + -7726 + 10 * 356:
    case 2 * 172 + 1 * -6613 + 1279 * 5:
    case 4449 * 1 + -1 * -8699 + -13089:
    case -6354 * -1 + 3265 + -9496:
    case -5049 * -1 + 2726 * -3 + -1 * -3254:
      return 4577 + 5311 * -1 + 369 * 2;
    case 7760 + -4 * 2297 + 1486:
      return 15246 + 15243 * -1;
    case -2 * -4918 + -3830 + -5972:
    case -4466 + -53 * -85:
    case 6036 * 1 + 4595 + -10591:
    case 91:
      return 78 * 1 + 873 * 1 + -949;
    case 8539 + -193 * 2 + 312 * -26:
    case 3 * 3137 + 3266 + 44 * -286:
      return 3 * 1931 + -395 + 1 * -5397;
  }
  return 4874 + 1 * -4874;
}
function CQ(g) {
  return C0 = Pe = 2 * 673 + 8913 * 1 + -10258 * 1, QC = OA(At = g), JA = 2 * -1832 + -4496 + -1 * -8160, [];
}
function BQ(g) {
  return At = "", g;
}
function y0(g) {
  return BC(n0(JA - (6005 + -149 * -15 + -8239), X0(g === -1 * -9677 + 521 + -10107 * 1 ? g + (2280 + -107 * 26 + 504) : g === -4789 + -439 * -11 ? g + (-9622 + -15 * -654 + -11 * 17) : g)));
}
function nQ(g) {
  for (; (eA = we()) && eA < 33; ) WA();
  return V0(g) > 2 || V0(eA) > 2 * -633 + 1 * 2927 + -829 * 2 ? "" : " ";
}
function QQ(g, I) {
  for (; --I && WA() && !(eA < 4587 * -1 + -1391 + 131 * 46 || eA > -2983 + -4434 * 1 + -7519 * -1 || eA > 57 && eA < 65 || eA > 4 * -1577 + 1 * -8839 + -15217 * -1 && eA < 5045 + 274 * -17 + 58 * -5); ) ;
  return n0(g, sg() + (I < -701 * 1 + -9672 + -97 * -107 && we() == 32 && WA() == -1362 + -41 * -34));
}
function X0(g) {
  for (; WA(); ) switch (eA) {
    case g:
      return JA;
    case -7823 + 3 * -2564 + 71 * 219:
    case -3923 * 2 + 7152 + -1 * -733:
      g !== -876 + 823 * 5 + -3205 && g !== -3631 * 2 + -790 + -2697 * -3 && X0(eA);
      break;
    case 6761 + 7 * -866 + -659:
      g === -6183 * 1 + 9930 + -3706 && X0(g);
      break;
    case 8 * -98 + 3153 + 99 * -23:
      WA();
      break;
  }
  return JA;
}
function aQ(g, I) {
  for (; WA() && g + eA !== 8675 + -8458 * -1 + -17086 + 10; ) if (g + eA === -5246 + 1322 * 4 + 42 && we() === -5086 + 487 * -10 + 10003) break;
  return "/*" + n0(I, JA - (1265 * 1 + -6453 + -1 * -5189)) + "*" + HI(g === -1 * 8573 + 6 * 396 + 6244 * 1 ? g : WA());
}
function xQ(g) {
  for (; !V0(we()); ) WA();
  return n0(g, JA);
}
function rQ(g) {
  return BQ(cg("", null, null, null, [""], g = CQ(g), 7278 * 1 + 1160 + -8438, [0], g));
}
function cg(g, I, e, A, t, o, i, C, B) {
  for (var n = 0, a = 0, Q = i, E = -8387 * 1 + 3741 + 4646, x = -11 * -134 + -509 + -965, s = -3621 + -5130 * 1 + 8751, d = 244 * -25 + -3 * -1597 + 1310, h = 7 * 1214 + 1572 + -1 * 10069, r = 1, u = 965 * 7 + -3696 + -3059, y = "", G = t, N = o, M = A, w = y; h; ) switch (s = u, u = WA()) {
    case -12522 + -1142 * -11:
      if (s != -5640 + 10 * -181 + 7558 && iA(w, Q - (-1389 * -1 + -4080 * -1 + -2734 * 2)) == -3231 * -2 + -2267 + -1379 * 3) {
        Eg(w += F(y0(u), "&", "&\f"), "&\f", CC(n ? C[n - (8581 + -53 * 62 + -2647 * 2)] : 1604 * 6 + 192 * 35 + -16344)) != -(-28 * -100 + 4938 + 3 * -2579) && (r = -(828 + 1 * -5759 + 274 * 18));
        break;
      }
    case 34:
    case 39:
    case 47 * 38 + 706 * -6 + 2541:
      w += y0(u);
      break;
    case -1 * -5048 + -7 * 300 + -2939:
    case -4 * -313 + 4227 + 5469 * -1:
    case 7217 + 1 * 4528 + -7 * 1676:
    case -143 * -48 + 1093 * -7 + 819:
      w += nQ(s);
      break;
    case 613 * 12 + -4176 + -772 * 4:
      w += QQ(sg() - (-1 * 706 + 3772 + 613 * -5), -3500 + -1 * 9663 + 439 * 30);
      continue;
    case -65 * -58 + 4 * -389 + -2167:
      switch (we()) {
        case 14934 + -292 * 51:
        case 47:
          xt(EQ(aQ(WA(), sg()), I, e, B), B);
          break;
        default:
          w += "/";
      }
      break;
    case (697 * -9 + -1 * 6863 + 13259 * 1) * d:
      C[n++] = OA(w) * r;
    case (4679 * 2 + -5911 * -1 + -15144) * d:
    case -2648 + -1 * -2707:
    case 4755 + -23 * 385 + 5 * 820:
      switch (u) {
        case 5379 + 1 * -538 + -4841 * 1:
        case -2359 * 2 + -2278 * -2 + 7 * 41:
          h = -3092 + -3092 * -1;
        case -4 * 2304 + 1 * 7800 + 1475 + a:
          r == -(545 * 18 + -3076 + -6733) && (w = F(w, /\f/g, "")), x > -2 * -516 + -6119 + -5087 * -1 && OA(w) - Q && xt(x > 2 * 3673 + 4609 * -2 + 1904 ? Mo(w + ";", A, e, Q - (3422 + 461 * -3 + -2038), B) : Mo(F(w, " ", "") + ";", A, e, Q - (4 * 2417 + -8621 + -1045), B), B);
          break;
        case -1047 + -14 * -79:
          w += ";";
        default:
          if (xt(M = So(w, I, e, n, a, t, C, y, G = [], N = [], Q, o), o), u === 1853 * -1 + 7385 + -5409 * 1)
            if (a === 8196 + -1 * -4846 + 13042 * -1) cg(w, I, M, M, G, o, Q, C, N);
            else switch (E === -149 * -31 + -3382 + -1138 && iA(w, 29 * 50 + -3547 + -2100 * -1) === 1 * 8259 + 5 * 563 + 10964 * -1 ? -1 * 1363 + 3186 + -1 * 1723 : E) {
              case 8990 + 11 * 433 + -13653:
              case 108:
              case 233 * -25 + 9193 + -3259:
              case 565 * 1 + 9244 + -4847 * 2:
                cg(g, M, M, A && xt(So(g, M, M, 0, 8 * 89 + 8752 + -4 * 2366, t, C, y, t, G = [], Q, N), N), t, N, Q, C, A ? G : N);
                break;
              default:
                cg(w, M, M, M, [""], N, 0, C, N);
            }
      }
      n = a = x = -11441 + -17 * -673, d = r = 14389 + 11 * -1308, y = w = "", Q = i;
      break;
    case 18440 + 26 * -707:
      Q = 6726 + 2686 * -1 + -577 * 7 + OA(w), x = s;
    default:
      if (d < -2 * 2535 + -3877 + -1 * -8948) {
        if (u == 7477 * 1 + -1046 + -6308) --d;
        else if (u == -363 * -8 + -428 + 2351 * -1 && d++ == -6255 + 139 * -55 + -556 * -25 && iQ() == 3929 * -2 + 2845 + 5138) continue;
      }
      switch (w += HI(u), u * d) {
        case -1 * 8870 + -2630 + 11538:
          r = a > -1 * -9285 + -9575 + -1 * -290 ? -1 * 9977 + 2 * 4886 + 2 * 103 : (w += "\f", -(3718 * 2 + -395 + -1 * 7040));
          break;
        case -2204 + 11 * -34 + 2 * 1311:
          C[n++] = (OA(w) - (1 * -470 + -5 * -67 + 136)) * r, r = -3905 * -1 + 672 + 104 * -44;
          break;
        case 64:
          we() === 5042 + -1 * 5077 + -2 * -40 && (w += y0(WA())), E = we(), a = Q = OA(y = w += xQ(sg())), u++;
          break;
        case -5 * -482 + 2981 + -5346:
          s === -438 * 12 + 2642 + -1 * -2659 && OA(w) == 227 * -1 + -1 * -5289 + -5060 && (d = 165 * 59 + -7 * 1341 + -348);
      }
  }
  return o;
}
function So(g, I, e, A, t, o, i, C, B, n, a, Q) {
  for (var E = t - 1, x = t === -4517 + 7409 * -1 + 11926 ? o : [""], s = nC(x), d = -1607 + -1 * -1607, h = -4467 + 3908 * 2 + 197 * -17, r = 2 * 4409 + 1 * -3068 + -5 * 1150; d < A; ++d) for (var u = 0, y = je(g, E + (-8673 + -81 * 94 + -1018 * -16), E = CC(h = i[d])), G = g; u < s; ++u) (G = BC(h > -21 * 79 + -84 * -14 + 483 ? x[u] + " " + y : F(y, /&\f/g, x[u]))) && (B[r++] = G);
  return B0(g, I, e, t === 16976 + -1 * 16976 ? i0 : C, B, n, a, Q);
}
function EQ(g, I, e, A) {
  return B0(g, I, e, oC, HI(oQ()), je(g, 2, -(6547 + -11 * 595)), -3011 * 1 + -8560 + 29 * 399, A);
}
function Mo(g, I, e, A, t) {
  return B0(g, I, e, UI, je(g, 2 * 1703 + 1 * 1439 + -51 * 95, A), je(g, A + (-1906 * 3 + 1 * 5249 + 1 * 470), -(9370 + 27 * -347)), A, t);
}
function aC(g, I, e) {
  switch (gQ(g, I)) {
    case 1 * -7958 + 6 * 439 + 10427:
      return W + "print-" + g + g;
    case -5576 + -2950 * 1 + 14263:
    case 4 * 158 + -1116 + 937 * 5:
    case -873 + 7 * -520 + 7690 * 1:
    case 5842 + 3 * -649 + -462:
    case -1 * -4612 + 2813 + -5784:
    case -5 * -657 + 7510 + -6338:
    case -1328 + 406 * 19 + -3465:
    case 13 * -482 + 489 * 22 + 1080:
    case 6356:
    case -1 * -3734 + -988 * 8 + 3 * 3338:
    case 67 * -65 + -5509 + 13055:
    case 7 * -799 + -7 * -147 + -11209 * -1:
    case 7560 + -16 * -507 + 1 * -12667:
    case 9023 + 658 * -4:
    case 5367 + 256 * 2:
    case -6909 + -1 * -314 + 12218:
    case 236 * -37 + 1 * 1624 + 13243:
    case -12 * 194 + 1 * -8751 + -26 * -603:
    case 4855:
    case 4215:
    case 1366 * -1 + -6 * -195 + 6585:
    case 10555 + -5446 * 1:
    case 5365:
    case 5621:
    case 51 * 167 + 172 * 43 + 12 * -1007:
      return W + g + g;
    case -4232 * -1 + -6089 + 6646:
      return lt + g + g;
    case -889 + -428 * 13 + 11802:
    case 8467 * -1 + 481 + 44 * 278:
    case -3055 * 1 + 5024 + -947 * -3:
    case 1 * 11079 + -1822 * -6 + -15043:
    case -2 * 623 + -8897 + 1 * 12899:
      return W + g + lt + g + T + g + g;
    case 25 * -155 + -9967 + -899 * -22:
      switch (iA(g, I + (-4005 + 1 * 1051 + 2965))) {
        case -5741 * -1 + 5492 + -11119:
          return W + g + T + F(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 123 * 18 + 8278 + 649 * -16:
          return W + g + T + F(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case 615 + -44 * -1 + -614:
          return W + g + T + F(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case -1 * -2804 + -4 * -1592 + -4 * 586:
    case 4612 + 1 * -344:
    case 2903:
      return W + g + T + g + g;
    case -938 + -1 * -7103:
      return W + g + T + "flex-" + g + g;
    case -5087 * -1 + 221 + -121:
      return W + g + F(g, /(\w+).+(:[^]+)/, W + "box-$1$2" + T + "flex-$1$2") + g;
    case 5793 * 1 + 5966 + -6316:
      return W + g + T + "flex-item-" + F(g, /flex-|-self/g, "") + (VA(g, /flex-|baseline/) ? "" : T + "grid-row-" + F(g, /flex-|-self/g, "")) + g;
    case -83 * -89 + 73 * 1 + -2785:
      return W + g + T + "flex-line-pack" + F(g, /align-content|flex-|-self/g, "") + g;
    case -7 * -809 + 10975 + -11090:
      return W + g + T + F(g, "shrink", "negative") + g;
    case -6259 + -5 * -1933 + 1886:
      return W + g + T + F(g, "basis", "preferred-size") + g;
    case -2 * 3631 + -5308 + -1863 * -10:
      return W + "box-" + F(g, "-grow", "") + W + g + T + F(g, "grow", "positive") + g;
    case 2617 + -1 * -459 + 1478:
      return W + F(g, /([^-])(transform)/g, "$1" + W + "$2") + g;
    case 119 * 12 + -10108 + 14867 * 1:
      return F(F(F(g, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), g, "") + g;
    case 4 * 604 + -3098 + 6177 * 1:
    case 6358 + -25 * 85 + 2 * -137:
      return F(g, /(image-set\([^]*)/, W + "$1$`$1");
    case 1 * -6229 + -9040 + -7 * -2891:
      return F(F(g, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + g + g;
    case 4200:
      if (!VA(g, /flex-|baseline/)) return T + "grid-column-align" + je(g, I) + g;
      break;
    case 2592:
    case 15333 + -39 * 307:
      return T + F(g, "template-", "") + g;
    case 267 * 27 + -7536 + 4711:
    case -7 * 695 + 8262 + 219:
      return e && e.some(function(A, t) {
        return I = t, VA(A.props, /grid-\w+-end/);
      }) ? ~Eg(g + (e = e[I].value), "span", 2662 + -1 * 2662) ? g : T + F(g, "-start", "") + g + T + "grid-row-span:" + (~Eg(e, "span", 1 * -1889 + -2599 + -66 * -68) ? VA(e, /\d+/) : +VA(e, /\d+/) - +VA(g, /\d+/)) + ";" : T + F(g, "-start", "") + g;
    case -9773 + 14669 * 1:
    case -3081 + 835 * -2 + 8879:
      return e && e.some(function(A) {
        return VA(A.props, /grid-\w+-start/);
      }) ? g : T + F(F(g, "-end", "-span"), "span ", "") + g;
    case 7450 + 4045 * 1 + -7400:
    case 1718 + 2 * 1229 + -593 * 1:
    case -6 * 669 + -1 * -9119 + -61 * 17:
    case -7639 * 1 + 1 * 9687 + 484:
      return F(g, /(.+)-inline(.+)/, W + "$1$2") + g;
    case 91 * 149 + 11813 + -17256:
    case 3439 * -1 + 1057 + 9441:
    case 8097 * -1 + -31 * -354 + 2876:
    case 9156 + 1 * 7993 + -2 * 5807:
    case -207 * -2 + 1 * 439 + 4592:
    case 16756 + 11055 * -1:
    case -4 * 1208 + 326 * 29 + 311:
    case 407 * -1 + -2 * -1159 + 2766:
    case 7739 + 47 * 6 + -2488:
    case -10678 + -131 * -59 + 8738:
    case -4 * 81 + 1931 * 1 + -3 * -1138:
    case 9107 + 7 * -997 + 2637 * 1:
      if (OA(g) - (2 * 439 + -5818 + 549 * 9) - I > -6 * -1294 + -7834 + -76 * -1) switch (iA(g, I + (3314 + -4650 * 1 + 1337))) {
        case 9295 + 2 * -4166 + 854 * -1:
          if (iA(g, I + (146 * -1 + -6659 * 1 + 6809)) !== 5688 + -29 * -253 + 118 * -110) break;
        case 259 * -15 + 5778 + -1791:
          return F(g, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + lt + (iA(g, I + (19 * -3 + 164 * 48 + -7812)) == -384 + 1922 * -3 + 894 * 7 ? "$3" : "$2-$3")) + g;
        case 115:
          return ~Eg(g, "stretch", -8212 + -6208 * -1 + 2004) ? aC(F(g, "stretch", "fill-available"), I, e) + g : g;
      }
      break;
    case 3725 * -2 + -2 * -3061 + 180 * 36:
    case -7649 * -1 + 2 * -2859 + 3989:
      return F(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, t, o, i, C, B, n) {
        return T + t + ":" + o + n + (i ? T + t + "-span:" + (C ? B : +B - +o) + n : "") + g;
      });
    case 9794 + 255 * -19:
      if (iA(g, I + (-1 * 5575 + -7880 + 13461)) === 2019 * 3 + 3689 + -77 * 125) return F(g, ":", ":" + W) + g;
      break;
    case 7 * -675 + 11742 + 191 * -3:
      switch (iA(g, iA(g, 14) === 2963 + -2 * 1459 ? 372 * -13 + 2 * -4159 + -89 * -148 : 11)) {
        case -1 * 5717 + -1916 + -1 * -7753:
          return F(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (iA(g, -1 * 1129 + -7554 * 1 + 8697) === 3053 + -2 * -4727 + -12462 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + T + "$2box$3") + g;
        case 1028 * 8 + -2287 * 4 + -8 * -128:
          return F(g, ":", ":" + T) + g;
      }
      break;
    case -19 * 205 + -1 * 7527 + 17141:
    case 6 * -1011 + -1985 + 10698:
    case -1 * -2849 + 2 * 3079 + -6872:
    case -25 * -243 + -9176 + 7028:
    case 1 * -4188 + -7466 + -14045 * -1:
      return F(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function kg(g, I) {
  for (var e = "", A = -7475 + 1 * -3541 + 11016; A < g.length; A++) e += I(g[A], A, g, I) || "";
  return e;
}
function sQ(g, I, e, A) {
  switch (g.type) {
    case tQ:
      if (g.children.length) break;
    case eQ:
    case UI:
      return g.return = g.return || g.value;
    case oC:
      return "";
    case iC:
      return g.return = g.value + "{" + kg(g.children, A) + "}";
    case i0:
      if (!OA(g.value = g.props.join(","))) return "";
  }
  return OA(e = kg(g.children, A)) ? g.return = g.value + "{" + e + "}" : "";
}
function cQ(g) {
  var I = nC(g);
  return function(e, A, t, o) {
    for (var i = "", C = 7593 + 251 * 32 + 15625 * -1; C < I; C++) i += g[C](e, A, t, o) || "";
    return i;
  };
}
function dQ(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function hQ(g, I, e, A) {
  if (g.length > -(-17 * 294 + 46 * -125 + 10749) && !g.return)
    switch (g.type) {
      case UI:
        g.return = aC(g.value, g.length, e);
        return;
      case iC:
        return kg([ge(g, { value: F(g.value, "@", "@" + W) })], A);
      case i0:
        if (g.length) return IQ(e = g.props, function(t) {
          switch (VA(t, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Le(ge(g, { props: [F(t, /:(read-\w+)/, ":" + lt + "$1")] }));
              var o = {};
              o.props = [t], Le(ge(g, o)), P0(g, { props: Fo(e, A) });
              break;
            case "::placeholder":
              Le(ge(g, { props: [F(t, /:(plac\w+)/, ":" + W + "input-$1")] })), Le(ge(g, { props: [F(t, /:(plac\w+)/, ":" + lt + "$1")] })), Le(ge(g, { props: [F(t, /:(plac\w+)/, T + "input-$1")] }));
              var i = {};
              i.props = [t], Le(ge(g, i)), P0(g, { props: Fo(e, A) });
              break;
          }
          return "";
        });
    }
}
var k = {};
k.animationIterationCount = 1, k.aspectRatio = 1, k.borderImageOutset = 1, k.borderImageSlice = 1, k.borderImageWidth = 1, k.boxFlex = 1, k.boxFlexGroup = 1, k.boxOrdinalGroup = 1, k.columnCount = 1, k.columns = 1, k.flex = 1, k.flexGrow = 1, k.flexPositive = 1, k.flexShrink = 1, k.flexNegative = 1, k.flexOrder = 1, k.gridRow = 1, k.gridRowEnd = 1, k.gridRowSpan = 1, k.gridRowStart = 1, k.gridColumn = 1, k.gridColumnEnd = 1, k.gridColumnSpan = 1, k.gridColumnStart = 1, k.msGridRow = 1, k.msGridRowSpan = 1, k.msGridColumn = 1, k.msGridColumnSpan = 1, k.fontWeight = 1, k.lineHeight = 1, k.opacity = 1, k.order = 1, k.orphans = 1, k.tabSize = 1, k.widows = 1, k.zIndex = 1, k.zoom = 1, k.WebkitLineClamp = 1, k.fillOpacity = 1, k.floodOpacity = 1, k.stopOpacity = 1, k.strokeDasharray = 1, k.strokeDashoffset = 1, k.strokeMiterlimit = 1, k.strokeOpacity = 1, k.strokeWidth = 1;
var lQ = k, v = {}, ke = typeof process < "u" && void (-7698 + -6 * 1409 + -2019 * -8) !== v && (v.REACT_APP_SC_ATTR || v.SC_ATTR) || "data-styled", xC = "active", rC = "data-styled-version", Q0 = "6.1.11", KI = `/*!sc*/
`, OI = typeof window < "u" && "HTMLElement" in window, uQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (9547 + -268 * -27 + -16783) !== v && void (-3 * 155 + -5926 + -7 * -913) !== v.REACT_APP_SC_DISABLE_SPEEDY && v.REACT_APP_SC_DISABLE_SPEEDY !== "" ? v.REACT_APP_SC_DISABLE_SPEEDY !== "false" && v.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (1926 * 1 + 5 * -1199 + 4069) !== v && void (-19 + -1 * -1763 + -1744) !== v.SC_DISABLE_SPEEDY && v.SC_DISABLE_SPEEDY !== "" ? v.SC_DISABLE_SPEEDY !== "false" && v.SC_DISABLE_SPEEDY : v.NODE_ENV !== "production"), Lo = /invalid hook call/i, tg = /* @__PURE__ */ new Set(), fQ = function(g, I) {
  if (v.NODE_ENV !== "production") {
    var e = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, t = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], B = -31 * 232 + 5700 + -1 * -1493; B < arguments.length; B++) C[B - (-69 * -66 + -6038 * -1 + -17 * 623)] = arguments[B];
        Lo.test(i) ? (o = !1, tg.delete(A)) : t.apply(void (-1 * 109 + -5249 * 1 + 5358), qe([i], C, !1));
      }, LA(), o && !tg.has(A) && (console.warn(A), tg.add(A));
    } catch (i) {
      Lo.test(i.message) && tg.delete(A);
    } finally {
      console.error = t;
    }
  }
}, a0 = Object.freeze([]), Ve = Object.freeze({});
function DQ(g, I, e) {
  return void (-4689 + 3484 * -2 + 11657) === e && (e = Ve), g.theme !== e.theme && g.theme || I || e.theme;
}
var _0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), yQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wQ = /(^-|-$)/g;
function Jo(g) {
  return g.replace(yQ, "-").replace(wQ, "");
}
var pQ = /(a)(d)/gi, gg = -8109 + -8 * 929 + 15593, vo = function(g) {
  return String.fromCharCode(g + (g > -12910 + 199 * 65 ? 6285 * -1 + 7221 + 1 * -897 : 3 * 1119 + 10 * 801 + -11270));
};
function z0(g) {
  var I, e = "";
  for (I = Math.abs(g); I > gg; I = I / gg | 6715 + 11 * -864 + 1 * 2789) e = vo(I % gg) + e;
  return (vo(I % gg) + e).replace(pQ, "$1-$2");
}
var w0, EC = 5244 + -4 * 1840 + 441 * 17, se = function(g, I) {
  for (var e = I.length; e; ) g = (-153 + 2 * 3245 + 16 * -394) * g ^ I.charCodeAt(--e);
  return g;
}, sC = function(g) {
  return se(EC, g);
};
function mQ(g) {
  return z0(sC(g) >>> 0);
}
function cC(g) {
  return v.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function p0(g) {
  return typeof g == "string" && (v.NODE_ENV === "production" || g.charAt(5932 + 2 * -3385 + 1 * 838) === g.charAt(8474 + -8 * 1229 + 1358).toLowerCase());
}
var bA = {};
bA.childContextTypes = !0, bA.contextType = !0, bA.contextTypes = !0, bA.defaultProps = !0, bA.displayName = !0, bA.getDefaultProps = !0, bA.getDerivedStateFromError = !0, bA.getDerivedStateFromProps = !0, bA.mixins = !0, bA.propTypes = !0, bA.type = !0;
var Ie = {};
Ie.name = !0, Ie.length = !0, Ie.prototype = !0, Ie.caller = !0, Ie.callee = !0, Ie.arguments = !0, Ie.arity = !0;
var re = {};
re.$$typeof = !0, re.compare = !0, re.defaultProps = !0, re.displayName = !0, re.propTypes = !0, re.type = !0;
var Ye = {};
Ye.$$typeof = !0, Ye.render = !0, Ye.defaultProps = !0, Ye.displayName = !0, Ye.propTypes = !0;
var dC = typeof Symbol == "function" && Symbol.for, hC = dC ? Symbol.for("react.memo") : -22858 * -3 + -9 * -2402 + 19 * -1583, GQ = dC ? Symbol.for("react.forward_ref") : -8 * 8731 + -45409 * 2 + -110389 * -2, kQ = bA, bQ = Ie, lC = re, NQ = ((w0 = {})[GQ] = Ye, w0[hC] = lC, w0);
function Yo(g) {
  return ("type" in (I = g) && I.type.$$typeof) === hC ? lC : "$$typeof" in g ? NQ[g.$$typeof] : kQ;
  var I;
}
var RQ = Object.defineProperty, FQ = Object.getOwnPropertyNames, Wo = Object.getOwnPropertySymbols, SQ = Object.getOwnPropertyDescriptor, MQ = Object.getPrototypeOf, Uo = Object.prototype;
function uC(g, I, e) {
  if (typeof I != "string") {
    if (Uo) {
      var A = MQ(I);
      A && A !== Uo && uC(g, A, e);
    }
    var t = FQ(I);
    Wo && (t = t.concat(Wo(I)));
    for (var o = Yo(g), i = Yo(I), C = 1168 * -4 + -82 * -11 + 13 * 290; C < t.length; ++C) {
      var B = t[C];
      if (!(B in bQ || e && e[B] || i && B in i || o && B in o)) {
        var n = SQ(I, B);
        try {
          RQ(g, B, n);
        } catch {
        }
      }
    }
  }
  return g;
}
function Xe(g) {
  return typeof g == "function";
}
function TI(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function de(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function Ho(g, I) {
  if (4 * -818 + -1 * -6171 + -13 * 223 === g.length) return "";
  for (var e = g[5380 + 3 * -283 + -4531], A = 830 + -695 * 2 + 561; A < g.length; A++) e += g[A];
  return e;
}
function _e(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function $0(g, I, e) {
  if (void (-2482 + -2607 * -1 + -125) === e && (e = !1), !e && !_e(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = 8 * 85 + -5077 * 1 + 4397; A < I.length; A++) g[A] = $0(g[A], I[A]);
  else if (_e(I))
    for (var A in I) g[A] = $0(g[A], I[A]);
  return g;
}
function qI(g, I) {
  var e = {};
  e.value = I, Object.defineProperty(g, "toString", e);
}
var gA = {};
gA[1] = `Cannot create styled-component for component: %s.

`, gA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, gA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, gA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, gA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, gA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, gA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', gA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, gA[9] = "Missing document `<head>`\n\n", gA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, gA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, gA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", gA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, gA[14] = `ThemeProvider: "theme" prop is required.

`, gA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", gA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, gA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, gA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var LQ = v.NODE_ENV !== "production" ? gA : {};
function JQ() {
  for (var g = [], I = 2 * 4887 + 89 * 69 + -5305 * 3; I < arguments.length; I++) g[I] = arguments[I];
  for (var e = g[-1 * 7814 + -341 * 17 + 13 * 1047], A = [], t = -1593 * 1 + 7358 + -5764, o = g.length; t < o; t += 8507 + 3316 * 3 + -18454 * 1) A.push(g[t]);
  return A.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function et(g) {
  for (var I = [], e = 1 * 6001 + -9 * 932 + 2388; e < arguments.length; e++) I[e - (-2 * 2987 + 2787 + -1594 * -2)] = arguments[e];
  return v.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > 26 * -122 + 2319 + 853 ? " Args: ".concat(I.join(", ")) : "")) : new Error(JQ.apply(void (77 * -18 + -2273 * 1 + -1 * -3659), qe([LQ[g]], I, !1)).trim());
}
var vQ = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(28 * -316 + -1887 + 11247), this.length = 1 * -9344 + -358 * 2 + -10572 * -1, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var e = 123 * -13 + 8506 + -6907, A = 0; A < I; A++) e += this.groupSizes[A];
    return e;
  }, g.prototype.insertRules = function(I, e) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, t = A.length, o = t; I >= o; ) if ((o <<= -6742 + 1 * -8940 + 15683) < -7179 * 1 + -559 + -1 * -7738) throw et(-2 * -1955 + -17 * -241 + -7991 * 1, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = t; i < o; i++) this.groupSizes[i] = -1 * 9439 + 5618 + 3821;
    }
    for (var C = this.indexOfGroup(I + (-16615 + -8 * -2077)), B = (i = 0, e.length); i < B; i++) this.tag.insertRule(C, e[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var e = this.groupSizes[I], A = this.indexOfGroup(I), t = A + e;
      this.groupSizes[I] = 0;
      for (var o = A; o < t; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var e = "";
    if (I >= this.length || -1 * 4313 + -3158 * -2 + 2003 * -1 === this.groupSizes[I]) return e;
    for (var A = this.groupSizes[I], t = this.indexOfGroup(I), o = t + A, i = t; i < o; i++) e += "".concat(this.tag.getRule(i)).concat(KI);
    return e;
  }, g;
}(), YQ = -43 * 111 + 1933 + -3 * -947 << 7660 + -66 * 26 + -5914, dg = /* @__PURE__ */ new Map(), bg = /* @__PURE__ */ new Map(), hg = -636 * -12 + 4447 + -12078, Ig = function(g) {
  if (dg.has(g)) return dg.get(g);
  for (; bg.has(hg); ) hg++;
  var I = hg++;
  if (v.NODE_ENV !== "production" && ((-39 * 33 + 2 * -1702 + 1 * 4691 | I) < -13 * -163 + 8751 + -10870 || I > YQ)) throw et(-7811 + -1933 * 3 + 13626, "".concat(I));
  return dg.set(g, I), bg.set(I, g), I;
}, WQ = function(g, I) {
  hg = I + (2 * 1801 + 8405 + -12006), dg.set(g, I), bg.set(I, g);
}, UQ = "style[".concat(ke, "][").concat(rC, '="').concat(Q0, '"]'), HQ = new RegExp("^".concat(ke, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), KQ = function(g, I, e) {
  for (var A, t = e.split(","), o = -1 * 9833 + 20 * -43 + -17 * -629, i = t.length; o < i; o++) (A = t[o]) && g.registerName(I, A);
}, OQ = function(g, I) {
  for (var e, A = ((e = I.textContent) !== null && void (6365 + -163 * -3 + -6854) !== e ? e : "").split(KI), t = [], o = -3963 * -2 + 6309 + -14235, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var B = C.match(HQ);
      if (B) {
        var n = 0 | parseInt(B[1], 10), a = B[1 * 3424 + 9002 * -1 + 155 * 36];
        -4198 + 38 * 3 + 4084 * 1 !== n && (WQ(a, n), KQ(g, a, B[7700 + -43 * 179]), g.getTag().insertRules(n, t)), t.length = 1e4 + 2 * -1737 + -6526;
      } else t.push(C);
    }
  }
};
function TQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var fC = function(g) {
  var I = document.head, e = g || I, A = document.createElement("style"), t = function(C) {
    var B = Array.from(C.querySelectorAll("style[".concat(ke, "]")));
    return B[B.length - (-5077 + -2633 * -1 + -15 * -163)];
  }(e), o = void (-67 * -26 + 4481 + 1 * -6223) !== t ? t.nextSibling : null;
  A.setAttribute(ke, xC), A.setAttribute(rC, Q0);
  var i = TQ();
  return i && A.setAttribute("nonce", i), e.insertBefore(A, o), A;
}, qQ = function() {
  function g(I) {
    this.element = fC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var A = document.styleSheets, t = -179 * -12 + -5319 + 3171, o = A.length; t < o; t++) {
        var i = A[t];
        if (i.ownerNode === e) return i;
      }
      throw et(-5606 * -1 + -801 + -4788);
    }(this.element), this.length = 0;
  }
  return g.prototype.insertRule = function(I, e) {
    try {
      return this.sheet.insertRule(e, I), this.length++, !0;
    } catch {
      return !1;
    }
  }, g.prototype.deleteRule = function(I) {
    this.sheet.deleteRule(I), this.length--;
  }, g.prototype.getRule = function(I) {
    var e = this.sheet.cssRules[I];
    return e && e.cssText ? e.cssText : "";
  }, g;
}(), ZQ = function() {
  function g(I) {
    this.element = fC(I), this.nodes = this.element.childNodes, this.length = -7637 + -124 * -12 + 6149;
  }
  return g.prototype.insertRule = function(I, e) {
    if (I <= this.length && I >= 0) {
      var A = document.createTextNode(e);
      return this.element.insertBefore(A, this.nodes[I] || null), this.length++, !0;
    }
    return !1;
  }, g.prototype.deleteRule = function(I) {
    this.element.removeChild(this.nodes[I]), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.nodes[I].textContent : "";
  }, g;
}(), jQ = function() {
  function g(I) {
    this.rules = [], this.length = 4226 * -2 + -1511 + 9963;
  }
  return g.prototype.insertRule = function(I, e) {
    return I <= this.length && (this.rules.splice(I, 3463 + 1 * -3463, e), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, -5332 + 583 * -7 + -1569 * -6), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), Ko = OI, PQ = { isServer: !OI, useCSSOMInjection: !uQ }, DC = function() {
  function g(I, e, A) {
    void (-1979 * 3 + -7109 + 13046) === I && (I = Ve), void (1 * -3723 + 307 + 3416) === e && (e = {});
    var t = this;
    this.options = DA(DA({}, PQ), I), this.gs = e, this.names = new Map(A), this.server = !!I.isServer, !this.server && OI && Ko && (Ko = !1, function(o) {
      for (var i = document.querySelectorAll(UQ), C = 39 * -64 + 2 * -3859 + 10214, B = i.length; C < B; C++) {
        var n = i[C];
        n && n.getAttribute(ke) !== xC && (OQ(o, n), n.parentNode && n.parentNode.removeChild(n));
      }
    }(this)), qI(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, B = "", n = function(Q) {
          var E = function(r) {
            return bg.get(r);
          }(Q);
          if (void (-199 * -29 + 356 * 14 + -10755) === E) return "continue";
          var x = o.names.get(E), s = i.getGroup(Q);
          if (void (-261 + -49 * 5 + 506) === x || 4776 + -1 * -5529 + -10305 === s.length) return "continue";
          var d = "".concat(ke, ".g").concat(Q, '[id="').concat(E, '"]'), h = "";
          void (7 * 811 + -8157 * -1 + 1 * -13834) !== x && x.forEach(function(r) {
            r.length > -1537 + 57 * -74 + 5755 && (h += "".concat(r, ","));
          }), B += "".concat(s).concat(d, '{content:"').concat(h, '"}').concat(KI);
        }, a = 641 * -3 + -5728 + 7651; a < C; a++) n(a);
        return B;
      }(t);
    });
  }
  return g.registerId = function(I) {
    return Ig(I);
  }, g.prototype.reconstructWithOptions = function(I, e) {
    return e === void 0 && (e = !0), new g(DA(DA({}, this.options), I), this.gs, e && this.names || void (1621 + 4 * 2381 + 3 * -3715));
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || 1409 * -7 + 6436 + 23 * 149) + (-8983 + 9 * -1013 + 18101);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(e) {
      var A = e.useCSSOMInjection, t = e.target;
      return e.isServer ? new jQ(t) : A ? new qQ(t) : new ZQ(t);
    }(this.options), new vQ(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, e) {
    return this.names.has(I) && this.names.get(I).has(e);
  }, g.prototype.registerName = function(I, e) {
    if (Ig(I), this.names.has(I)) this.names.get(I).add(e);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(e), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, e, A) {
    this.registerName(I, e), this.getTag().insertRules(Ig(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(Ig(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void (80 * -10 + -461 * 3 + 2183);
  }, g;
}(), VQ = /&/g, XQ = /^\s*\/\/.*$/gm;
function yC(g, I) {
  return g.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(I, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(I, " ")), e.props = e.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = yC(e.children, I)), e;
  });
}
function wC(g) {
  var I, e, A, t = g === void 0 ? Ve : g, o = t.options, i = void (9289 * 1 + -79 * 37 + -6366) === o ? Ve : o, C = t.plugins, B = void (3734 + 412 * -17 + 30 * 109) === C ? a0 : C, n = function(E, x, s) {
    return s.startsWith(e) && s.endsWith(e) && s.replaceAll(e, "").length > -2841 + -1 * -9955 + -7114 ? ".".concat(I) : E;
  }, a = B.slice();
  a.push(function(E) {
    E.type === i0 && E.value.includes("&") && (E.props[0] = E.props[-1333 * 1 + 3437 + -2 * 1052].replace(VQ, e).replace(A, n));
  }), i.prefix && a.push(hQ), a.push(sQ);
  var Q = function(E, x, s, d) {
    void (1 * 8861 + -3630 + -5231) === x && (x = ""), void (1959 * -1 + -1 * 5969 + 7928) === s && (s = ""), d === void 0 && (d = "&"), I = d, e = x, A = new RegExp("\\".concat(e, "\\b"), "g");
    var h = E.replace(XQ, ""), r = rQ(s || x ? "".concat(s, " ").concat(x, " { ").concat(h, " }") : h);
    i.namespace && (r = yC(r, i.namespace));
    var u = [];
    return kg(r, cQ(a.concat(dQ(function(y) {
      return u.push(y);
    })))), u;
  };
  return Q.hash = B.length ? B.reduce(function(E, x) {
    return x.name || et(14648 + 14633 * -1), se(E, x.name);
  }, EC).toString() : "", Q;
}
var _Q = new DC(), AI = wC(), ZI = Ge.createContext({ shouldForwardProp: void (1 * 7262 + -3927 + 1 * -3335), styleSheet: _Q, stylis: AI });
ZI.Consumer;
var zQ = Ge.createContext(void 0);
function eI() {
  return Re(ZI);
}
function $Q(g) {
  var I = yA(g.stylisPlugins), e = I[103 * 50 + 56 * -169 + 4314], A = I[3873 * -1 + 1 * -2439 + 6313], t = eI().styleSheet, o = wA(function() {
    var a = t, Q = {};
    return Q.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(Q)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, t]), i = wA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var Q = {};
    return Q.options = a, Q.plugins = e, wC(Q);
  }, [g.enableVendorPrefixes, g.namespace, e]);
  V(function() {
    AQ(e, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = wA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), B = {};
  B.value = C;
  var n = {};
  return n.value = i, Ge.createElement(ZI.Provider, B, Ge.createElement(zQ.Provider, n, g.children));
}
var Oo = function() {
  function g(I, e) {
    var A = this;
    this.inject = function(t, o) {
      void (-5161 * -1 + -597 * -3 + -6952) === o && (o = AI);
      var i = A.name + o.hash;
      t.hasNameForId(A.id, i) || t.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = e, qI(this, function() {
      throw et(-4 * 2495 + 9293 + 699, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return void (552 + 138 * -4) === I && (I = AI), this.name + I.hash;
  }, g;
}(), Aa = function(g) {
  return g >= "A" && g <= "Z";
};
function To(g) {
  for (var I = "", e = -1 * 5989 + 2 * 4304 + -2619; e < g.length; e++) {
    var A = g[e];
    if (25 * -383 + -2928 * 2 + 15432 === e && A === "-" && g[436 * 5 + 4219 + 6399 * -1] === "-") return g;
    Aa(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var pC = function(g) {
  return g == null || g === !1 || g === "";
}, mC = function(g) {
  var I, e, A = [];
  for (var t in g) {
    var o = g[t];
    g.hasOwnProperty(t) && !pC(o) && (Array.isArray(o) && o.isCss || Xe(o) ? A.push("".concat(To(t), ":"), o, ";") : _e(o) ? A.push.apply(A, qe(qe(["".concat(t, " {")], mC(o), !1), ["}"], !1)) : A.push("".concat(To(t), ": ").concat((I = t, (e = o) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || -1856 * 3 + 9257 + -3689 === e || I in lQ || I.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return A;
};
function pe(g, I, e, A) {
  if (pC(g)) return [];
  if (TI(g)) return [".".concat(g.styledComponentId)];
  if (Xe(g)) {
    if (!Xe(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var t = g(I);
    return v.NODE_ENV === "production" || typeof t != "object" || Array.isArray(t) || t instanceof Oo || _e(t) || t === null || console.error("".concat(cC(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(t, I, e, A);
  }
  var o;
  return g instanceof Oo ? e ? (g.inject(e, A), [g.getName(A)]) : [g] : _e(g) ? mC(g) : Array.isArray(g) ? Array.prototype.concat.apply(a0, g.map(function(i) {
    return pe(i, I, e, A);
  })) : [g.toString()];
}
function ea(g) {
  for (var I = 6902 + -1 * -3621 + 10523 * -1; I < g.length; I += -1 * -1571 + -9406 + 2612 * 3) {
    var e = g[I];
    if (Xe(e) && !TI(e)) return !1;
  }
  return !0;
}
var ta = sC(Q0), ga = function() {
  function g(I, e, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = v.NODE_ENV === "production" && (A === void 0 || A.isStatic) && ea(I), this.componentId = e, this.baseHash = se(ta, e), this.baseStyle = A, DC.registerId(e);
  }
  return g.prototype.generateAndInjectStyles = function(I, e, A) {
    var t = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, e, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) t = de(t, this.staticRulesId);
      else {
        var o = Ho(pe(this.rules, I, e, A)), i = z0(se(this.baseHash, o) >>> 22 * -198 + 2 * -349 + 5054);
        if (!e.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          e.insertRules(this.componentId, i, C);
        }
        t = de(t, i), this.staticRulesId = i;
      }
    else {
      for (var B = se(this.baseHash, A.hash), n = "", a = -4547 + 624 * -10 + 67 * 161; a < this.rules.length; a++) {
        var Q = this.rules[a];
        if (typeof Q == "string") n += Q, v.NODE_ENV !== "production" && (B = se(B, Q));
        else if (Q) {
          var E = Ho(pe(Q, I, e, A));
          B = se(B, E + a), n += E;
        }
      }
      if (n) {
        var x = z0(B >>> 0);
        e.hasNameForId(this.componentId, x) || e.insertRules(this.componentId, x, A(n, ".".concat(x), void (-8303 + -8305 * 1 + 16608), this.componentId)), t = de(t, x);
      }
    }
    return t;
  }, g;
}(), GC = Ge.createContext(void (1 * 6802 + -4659 + -2143));
GC.Consumer;
var m0 = {}, qo = /* @__PURE__ */ new Set();
function Ia(g, I, e) {
  var A = TI(g), t = g, o = !p0(g), i = I.attrs, C = i === void 0 ? a0 : i, B = I.componentId, n = void (-2821 + 823 * -1 + -4 * -911) === B ? function(N, M) {
    var w = typeof N != "string" ? "sc" : Jo(N);
    m0[w] = (m0[w] || -278 * 4 + 8958 + 1 * -7846) + 1;
    var Z = "".concat(w, "-").concat(mQ(Q0 + w + m0[w]));
    return M ? "".concat(M, "-").concat(Z) : Z;
  }(I.displayName, I.parentComponentId) : B, a = I.displayName, Q = void (8863 * -1 + 1885 + 6978) === a ? function(N) {
    return p0(N) ? "styled.".concat(N) : "Styled(".concat(cC(N), ")");
  }(g) : a, E = I.displayName && I.componentId ? "".concat(Jo(I.displayName), "-").concat(I.componentId) : I.componentId || n, x = A && t.attrs ? t.attrs.concat(C).filter(Boolean) : C, s = I.shouldForwardProp;
  if (A && t.shouldForwardProp) {
    var d = t.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      s = function(N, M) {
        return d(N, M) && h(N, M);
      };
    } else s = d;
  }
  var r = new ga(e, E, A ? t.componentStyle : void (-1 * 615 + 2 * 3691 + 6767 * -1));
  function u(N, M) {
    return function(w, Z, J) {
      var z = w.attrs, Se = w.componentStyle, qB = w.defaultProps, ZB = w.foldedComponentIds, Co = w.styledComponentId, jB = w.target, PB = Ge.useContext(GC), VB = eI(), c0 = w.shouldForwardProp || VB.shouldForwardProp;
      v.NODE_ENV !== "production" && Gg(Co);
      var Bo = DQ(Z, PB, qB) || Ve, PA = function(zt, Ct, $t) {
        var Me = {};
        Me.className = void (1 * 6418 + 56 * -10 + -5858), Me.theme = $t;
        for (var l0, ae = DA(DA({}, Ct), Me), u0 = -6312 * 1 + -19 * -21 + 5913; u0 < zt.length; u0 += -5001 + -677 * -2 + -456 * -8) {
          var Ag = Xe(l0 = zt[u0]) ? l0(ae) : l0;
          for (var te in Ag) ae[te] = te === "className" ? de(ae[te], Ag[te]) : te === "style" ? DA(DA({}, ae[te]), Ag[te]) : Ag[te];
        }
        return Ct.className && (ae.className = de(ae.className, Ct.className)), ae;
      }(z, Z, Bo), ot = PA.as || jB, it = {};
      for (var GA in PA) void (2 * 193 + 7 * -570 + 901 * 4) === PA[GA] || GA[10782 + 1797 * -6] === "$" || GA === "as" || GA === "theme" && PA.theme === Bo || (GA === "forwardedAs" ? it.as = PA.forwardedAs : c0 && !c0(GA, ot) || (it[GA] = PA[GA], c0 || v.NODE_ENV !== "development" || En(GA) || qo.has(GA) || !_0.has(ot) || (qo.add(GA), console.warn('styled-components: it looks like an unknown prop "'.concat(GA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var d0 = function(zt, Ct) {
        var $t = eI(), Me = zt.generateAndInjectStyles(Ct, $t.styleSheet, $t.stylis);
        return v.NODE_ENV !== "production" && Gg(Me), Me;
      }(Se, PA);
      v.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(d0);
      var h0 = de(ZB, Co);
      return d0 && (h0 += " " + d0), PA.className && (h0 += " " + PA.className), it[p0(ot) && !_0.has(ot) ? "class" : "className"] = h0, it.ref = J, dA(ot, it);
    }(y, N, M);
  }
  u.displayName = Q;
  var y = Ge.forwardRef(u), G = {};
  return G.attrs = !0, G.componentStyle = !0, G.displayName = !0, G.foldedComponentIds = !0, G.shouldForwardProp = !0, G.styledComponentId = !0, G.target = !0, y.attrs = x, y.componentStyle = r, y.displayName = Q, y.shouldForwardProp = s, y.foldedComponentIds = A ? de(t.foldedComponentIds, t.styledComponentId) : "", y.styledComponentId = E, y.target = A ? t.target : g, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = A ? function(M) {
      for (var w = [], Z = 2046 + 1 * -1581 + -464; Z < arguments.length; Z++) w[Z - (-888 + -7 * -127)] = arguments[Z];
      for (var J = -16103 + 1 * 16103, z = w; J < z.length; J++) $0(M, z[J], !0);
      return M;
    }({}, t.defaultProps, N) : N;
  } }), v.NODE_ENV !== "production" && (fQ(Q, E), y.warnTooManyClasses = /* @__PURE__ */ function(N, M) {
    var w = {}, Z = !1;
    return function(J) {
      if (!Z && (w[J] = !0, Object.keys(w).length >= -1 * -1111 + -6507 + 2798 * 2)) {
        var z = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(-2 * 2087 + 4854 + -480, " classes were generated for component ").concat(N).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Z = !0, w = {};
      }
    };
  }(Q, E)), qI(y, function() {
    return ".".concat(y.styledComponentId);
  }), o && uC(y, g, G), y;
}
function Zo(g, I) {
  for (var e = [g[7 * 1376 + 1 * 9554 + -19186 * 1]], A = 0, t = I.length; A < t; A += -7 * -1109 + 1570 + 2333 * -4) e.push(I[A], g[A + (-1826 + 6789 * 1 + -4962)]);
  return e;
}
var jo = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function kC(g) {
  for (var I = [], e = -4065 + 1 * 301 + 3765; e < arguments.length; e++) I[e - (1 * 2405 + 8065 * 1 + -551 * 19)] = arguments[e];
  if (Xe(g) || _e(g)) return jo(pe(Zo(a0, qe([g], I, !0))));
  var A = g;
  return -1 * -5154 + 4283 * -1 + 67 * -13 === I.length && -6616 + -31 * -111 + -794 * -4 === A.length && typeof A[-9 * 1079 + 2 * 2801 + 4109] == "string" ? pe(A) : jo(pe(Zo(A, I)));
}
function tI(g, I, e) {
  if (void (-1235 + -1395 * -5 + 41 * -140) === e && (e = Ve), !I) throw et(-67 * -46 + 2076 + -5157, I);
  var A = function(t) {
    for (var o = [], i = 1; i < arguments.length; i++) o[i - (-1 * -6547 + -2595 + -3951)] = arguments[i];
    return g(I, e, kC.apply(void (367 * -13 + -1315 * 1 + -358 * -17), qe([t], o, !1)));
  };
  return A.attrs = function(t) {
    return tI(g, I, DA(DA({}, e), { attrs: Array.prototype.concat(e.attrs, t).filter(Boolean) }));
  }, A.withConfig = function(t) {
    return tI(g, I, DA(DA({}, e), t));
  }, A;
}
var bC = function(g) {
  return tI(Ia, g);
}, tt = bC;
_0.forEach(function(g) {
  tt[g] = bC(g);
});
v.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var og = "__sc-".concat(ke, "__");
v.NODE_ENV !== "production" && v.NODE_ENV !== "test" && typeof window < "u" && (window[og] || (window[og] = -193 * 1 + 7 * -277 + 533 * 4), -2102 + -99 * -83 + -6114 === window[og] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[og] += 685 + -4616 * 1 + -3932 * -1);
const oa = tt.div`
  position: relative;
`, ia = tt.video`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(g) => g.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class H extends Error {
  constructor(e, A) {
    super(e);
    p(this, "cause");
    this.name = "AutoCaptureError", this.cause = A;
  }
  static logError(e) {
  }
  static fromCameraError(e) {
    if (this.logError(e), e instanceof H) return e;
    let A;
    switch (e.name) {
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
    return new H(A, e);
  }
  static fromError(e) {
    if (this.logError(e), e instanceof H) return e;
    const A = "An unexpected error has occurred";
    return new H(A);
  }
}
const lg = {};
lg.CONTINUE_DETECTION = "continue-detection", lg.SWITCH_CAMERA = "switch-camera", lg.TOGGLE_MIRROR = "toggle-mirror";
const G0 = lg, gI = {};
gI.FIRST_FRAME = "first-frame", gI.FIRST_VALID_FRAME = "first-valid-frame";
const k0 = gI, NC = {};
NC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Po = NC;
var RC = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))(RC || {}), Ce = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(Ce || {}), mt = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(mt || {}), Ca = ((g) => (g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(Ca || {}), Ba = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(Ba || {}), na = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(na || {});
const FC = {};
FC.EYE_NOT_PRESENT = "eye_not_present";
const Vo = FC, sA = {};
sA.CANDIDATE_SELECTION = "candidate_selection", sA.FACE_TOO_CLOSE = "face_too_close", sA.FACE_TOO_FAR = "face_too_far", sA.FACE_CENTERING = "face_centering", sA.FACE_NOT_PRESENT = "face_not_present", sA.SHARPNESS_TOO_LOW = "sharpness_too_low", sA.BRIGHTNESS_TOO_LOW = "brightness_too_low", sA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", sA.DEVICE_PITCHED = "device_pitched", sA.LEFT_EYE_NOT_PRESENT = "left_" + Vo.EYE_NOT_PRESENT, sA.RIGHT_EYE_NOT_PRESENT = "right_" + Vo.EYE_NOT_PRESENT, sA.MOUTH_NOT_PRESENT = "mouth_not_present", sA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", sA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const oA = sA, uA = {};
uA.isPresent = oA.FACE_NOT_PRESENT, uA.isNotPitched = oA.DEVICE_PITCHED, uA.isNotSmall = oA.FACE_TOO_FAR, uA.isNotLarge = oA.FACE_TOO_CLOSE, uA.isNotOutOfBounds = oA.FACE_CENTERING, uA.isNotDim = oA.BRIGHTNESS_TOO_LOW, uA.isNotBright = oA.BRIGHTNESS_TOO_HIGH, uA.isSharp = oA.SHARPNESS_TOO_LOW, uA.isLeftEyePresent = oA.LEFT_EYE_NOT_PRESENT, uA.isRightEyePresent = oA.RIGHT_EYE_NOT_PRESENT, uA.isMouthPresent = oA.MOUTH_NOT_PRESENT, uA.isMouthScoreNotTooHigh = oA.MOUTH_SCORE_TOO_HIGH, uA.isMouthScoreNotTooLow = oA.MOUTH_SCORE_TOO_LOW;
const Qa = uA, II = {};
II.FRONT = "user", II.REAR = "environment";
const jI = II, oI = {};
oI.AUTO_CAPTURE = "AUTO_CAPTURE", oI.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const SC = oI, rt = {};
rt.LOADING = "LOADING", rt.ERROR = "ERROR", rt.WAITING = "WAITING", rt.RUNNING = "RUNNING";
const TA = rt;
({ ...oA });
var pA = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(pA || {});
const MC = { ...TA };
MC.DONE = "DONE";
const he = MC;
({ ...oA });
({ ...oA });
const x0 = Pt(void 0);
x0.displayName = "AppStateContext";
function gt() {
  const g = Re(x0);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const aa = x0.Provider, xa = gt;
class LC extends FA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var e;
    const I = new H("An unknown error has occurred");
    (e = this.context) == null || e.handleError(I);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var I;
    return ((I = this.context) == null ? void 0 : I.appState) === TA.ERROR ? null : this.props.children;
  }
}
p(LC, "contextType", x0);
const ra = tt.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Ea = tt.div`
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
function sa() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const ca = ji(
  ({ detectionDetails: g, isImageMirror: I }, e) => sa() ? (console.log(g), /* @__PURE__ */ D(MA, { children: [
    /* @__PURE__ */ D(ra, { ref: e, $isImageMirror: I }),
    /* @__PURE__ */ D(Ea, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), Ng = Pt(void 0);
Ng.displayName = "AnalyticsContext";
function JC() {
  const g = Re(Ng);
  if (g === void 0)
    throw new Error(`${Ng.displayName} must be used within a AnalyticsProvider`);
  return g;
}
function iI(g, I, e, A, t) {
  return CA(e - 594, g);
}
function da(g, I, e, A, t) {
  return CA(e - -361, I);
}
function vC(g, I, e, A, t) {
  return CA(A - 464, e);
}
(function(g, I) {
  function e(B, n, a, Q, E) {
    return CA(n - 704, E);
  }
  const A = g();
  function t(B, n, a, Q, E) {
    return CA(a - -621, n);
  }
  function o(B, n, a, Q, E) {
    return CA(B - 778, E);
  }
  function i(B, n, a, Q, E) {
    return CA(E - -166, Q);
  }
  function C(B, n, a, Q, E) {
    return CA(n - 416, B);
  }
  for (; ; )
    try {
      if (parseInt(C("2lqF", 763, 769, 765, 772)) / 1 * (parseInt(C("l]P!", 775, 776, 784, 783)) / 2) + -parseInt(e(1029, 1042, 1055, 1036, "(Njp")) / 3 * (parseInt(i(155, 159, 183, "JBT&", 169)) / 4) + -parseInt(C("5J67", 746, 726, 753, 763)) / 5 * (-parseInt(t(-267, "3$^b", -266, -265, -270)) / 6) + parseInt(C("eYjJ", 765, 750, 754, 767)) / 7 * (parseInt(i(201, 195, 192, "m]H4", 197)) / 8) + -parseInt(C("1)ho", 760, 764, 764, 753)) / 9 * (parseInt(e(1065, 1055, 1062, 1061, "2lqF")) / 10) + parseInt(o(1143, 1160, 1129, 1139, "2k!4")) / 11 + -parseInt(t(-294, "2lqF", -278, -263, -278)) / 12 * (parseInt(C("m)9Y", 783, 765, 801, 784)) / 13) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Rg, 282597 + -1 * -67289 + 246628);
function Rg() {
  const g = ["WRZcN8oZW7bA", "W7ZcSMtcKGRdJCkjpq", "AmoqWPKsu8o3WRi", "W7RcHCkyWOTgoaFdKXVdUSkXza", "WOFdNComW5KF", "WQ9uymoqAmkSBG3cPq", "W6VcICkxxea", "cmoxWQxcHq", "WPmIxdXxWQakW6q", "WOC+WOzKWOBcVH1f", "W6VcRmkzgam", "WQxdOmkFmmkIWPCAWOyHmIbW", "W5ayWRXQfW", "dCkZq3eUgWG", "iCkhjCotWQS", "WPpdL17dQYtcT8knW6iud8oDWPmm", "WPqCWRPPdW", "jmk6sSkrt23dV0T3WQi", "amoVW6y4jbbj", "j8k5sSkznHBcPgvOWOpcVe/cGq", "dCk9wmo1qCkjtSkjfhvk", "W5vDW4H2W6/cNCkIWO/dQH7cGa", "Ftrk", "D8o2nmojAG", "WQtdOCkZeHa", "hmkJr0aHrmkUtSk/aCoiWPdcVq", "rSkXCX0k", "eaVdJJhcGItdSf0AdmkoFa", "WRZcOCkXw3tcVSo2", "g8kKtXzBp8omtmkM", "haddH1/dK8kRWPffsCkN", "W7xcPCopA8o8", "W5vtW53cKZzKlCoN", "W7tcTsldT23dUCkucmkSWPxdPW", "W7lcHCkxWO5bot3dSaBdOSkCxG", "C1b7jW0", "CCovkcTwvGBdOmoJW5jcW7yW", "W7ZcSYddSgRcL8kxmSkWWRVdMSk7", "CSkdrSoWWQW", "dSoEW6vgrCkRuryUB8kIxq"];
  return Rg = function() {
    return g;
  }, Rg();
}
function ha(g, I, e, A, t) {
  return CA(t - -938, g);
}
const Fg = Pt(void (1 * -5144 + 1391 * -3 + 9317));
function CA(g, I) {
  const e = Rg();
  return CA = function(A, t) {
    A = A - (-8357 + 2 * 3521 + 7 * 235);
    let o = e[A];
    if (CA.QWYNAk === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      CA.CLfAjS = a, g = arguments, CA.QWYNAk = !0;
    }
    const C = e[-94 * -6 + -6827 + 6263], B = A + C, n = g[B];
    return n ? o = n : (CA.CrGufg === void 0 && (CA.CrGufg = !0), o = CA.CLfAjS(o, t), g[B] = o), o;
  }, CA(g, I);
}
function CI(g, I, e, A, t) {
  return CA(g - 887, A);
}
Fg[CI(1249, 1245, 1237, "WzK8") + iI("(Njp", 963, 950) + "e"] = CI(1241, 1225, 1247, "1)ho") + iI("u6SR", 946, 958) + vC(819, 828, "X8dI", 821);
function Vt() {
  function g(i, C, B, n, a) {
    return CI(i - -695, C - 163, B - 468, B);
  }
  const I = Re(Fg);
  function e(i, C, B, n, a) {
    return iI(i, C - 348, n - -788);
  }
  function A(i, C, B, n, a) {
    return da(i - 142, n, i - 595);
  }
  if (I === void (1 * 6659 + 869 + 2 * -3764)) throw new Error(Fg[e("FsIZ", 135, 141, 151) + g(525, 539, "m)9Y") + "e"] + (o("WzK8", -549, -545, -565, -551) + o("nQ!U", -545, -543, -568, -557) + A(570, 559, 567, "m]H4") + t("Rl)L", 1172, 1189, 1189) + e("u6SR", 168, 157, 154) + g(542, 553, "MRDW") + A(568, 568, 576, "TjAc") + g(524, 512, "4m2O")));
  function t(i, C, B, n, a) {
    return ha(i, C - 297, B - 132, n - 475, C - 1769);
  }
  function o(i, C, B, n, a) {
    return vC(i - 312, C - 287, i, a - -1381);
  }
  return I;
}
const Gt = (g) => g.length < -1 * -244 + -1 * -8209 + -8452 ? 1 * -6223 + 3276 + 2947 : g.reduce((e, A) => e + A, -214 * 31 + -7127 + -11 * -1251) / g.length, ee = (g) => Number.parseFloat(g.toFixed(-17995 + 1 * 17998)), la = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(-4525 + 8 * 1037 + -3771, 425 + 2 * -1223 + 43 * 47, I.canvas.width, I.canvas.height);
}, YC = 6270 + -1637 * 5 + -383 * -5 + 0.75, ua = -17 * -419 + -71 * 95 + -376 * 1, fa = 600, Da = -6641 * -1 + 1985 + -8626, ya = "dot-auto-capture-video", r0 = (g, I) => Math.min(g, I), WC = ({ height: g, width: I }, e) => {
  const A = r0(I, g) * e, t = (I - A) / (-3651 * 1 + 1 * -2097 + 5750), o = (g - A) / (1 * -4211 + 2627 + 1586), i = {};
  return i.shiftX = t, i.shiftY = o, i.width = A, i.height = A, i;
}, wa = (g, I) => {
  const { height: e, shiftX: A, shiftY: t, width: o } = WC(g, I), i = {};
  return i.shiftX = A / g.width, i.shiftY = t / g.height, i.width = o / g.width, i.height = e / g.height, i;
}, pa = ({ height: g, width: I }) => {
  const e = r0(I, g), A = e / (76 * -28 + -1187 * 1 + 3318) * (-3 * 3022 + -935 * -7 + 2525);
  if (I > g) {
    const o = {};
    return o.width = A, o.height = e, o;
  }
  const t = {};
  return t.width = e, t.height = A, t;
}, ma = (g, I) => {
  const e = r0(I.width, I.height);
  return ee(g * e);
}, Ga = ({ height: g, width: I }) => {
  const e = {};
  return e.height = g, e.width = I, WC(e, YC);
}, ka = (g) => wa(g, YC), ba = (g, I) => ma(g, I) * ua, Na = "@innovatrics/dot-common-auto-capture", Ra = "7.0.1", Fa = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Sa = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Ma = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, La = {
  name: Na,
  private: !0,
  version: Ra,
  scripts: Fa,
  dependencies: Sa,
  devDependencies: Ma
}, Ja = -2827 * -3 + -4320 + 1387 * -3 + 0.4, va = -16 * 106 + -2614 * 2 + -4 * -1731 + 0.16, Ya = -1 * 12 + 5038 + -1 * 5026 + 0.2, Wa = -2 * 1298 + 7543 * 1 + -4947 + 0.05, Ua = -36 * 226 + -583 + -1 * -8719, BI = {};
BI.min = -(-191 * -5 + -8213 + -119 * -61), BI.max = 1;
const Xo = BI, _o = 845 + -5 * 169, Ha = 0 + 0.25, Ka = 0 + 0.2, Oa = -195 * 34 + 171 * 22 + -1434 * -2 + 0.85, Ta = 8569 + 1 * -8539, qa = 1 * 8151 + 625 * -1 + -7517 + 0.8100000000000005, ug = {};
ug.minDuration = 1e3, ug.maxDuration = 2500, ug.minFrames = 10;
const b0 = ug, nI = {};
nI.max = 100, nI.min = 10;
const zo = nI, Za = -8921 + -31 * -19 + 4 * 2263, ja = -8256 * -1 + 4 * -1052 + -481 * 8, Pa = 7509 + 953 * 6 + -1 * 13223, UC = "AES-CBC", HC = "RSA-OAEP", Va = "SHA-256", Xa = "image/jpeg", _a = 9181 + 9298 * 1 + 47 * -393, za = 4689 + 79 * 21 + -6308, KC = "/dot-assets", $o = "dot_embedded_bg.wasm", OC = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ai = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, $a = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, QI = (g) => new Promise((I) => {
  setTimeout(I, g);
}), TC = (g) => JSON.parse(JSON.stringify(g, (I, e) => typeof e == "number" ? ee(e) : e)), qC = () => La.version, ZC = (g) => new URL(g).hostname.replace("www.", ""), Ax = () => ZC(window.location.href) === "localhost", ig = (g) => Object.entries(g).map(([I, e]) => encodeURIComponent(I) + "=" + encodeURIComponent(e)).join("&"), ex = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g, ei = (g, I) => Math.abs(g - I);
function tx(g, I) {
  let e;
  return (...A) => {
    const t = () => {
      clearTimeout(e), e = void 0, g(...A);
    };
    e === void (-37 * -267 + 7971 + 3 * -5950) && (e = setTimeout(t, I));
  };
}
function gx(g) {
  return g.at(-(-4178 * 2 + -9773 + 18130)) === "/" ? g.slice(1 * -9871 + 8591 + -1 * -1280, -(-3 * 281 + -15 * 454 + 7654)) : g;
}
function jC(g) {
  return "" + gx(g ?? "") + KC;
}
const Ix = () => "prod".toLowerCase() === "dev";
class PI extends Array {
  constructor(e) {
    super();
    p(this, "size");
    this.size = e;
  }
  pushFixed(...e) {
    if (e.length > this.size) {
      const A = e.slice(-this.size);
      this.push(...A);
      return;
    }
    this.length === this.size && this.splice(5627 + -5 * -1531 + -13282, e.length), this.push(...e);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4292 + 26 * -223 + -10090 * -1);
  }
}
const ox = (g, I, e = Xa) => new Promise((A) => {
  g.toBlob((t) => {
    if (!t) throw new Error("Canvas to Blob failed");
    A(t);
  }, e, I);
}), PC = async (g) => ox(g, 6923 + 6833 * -1), ix = (g, I) => {
  const e = document.createElement("canvas");
  e.width = I.width, e.height = I.height;
  const A = e.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, -8 * 50 + -7279 * 1 + -7 * -1097, -75 * -30 + 2424 + -82 * 57, e.width, e.height), e;
}, Cx = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: e } = I.getImageData(132 + 12 * -11, -334 + -334 * -1, g.width, g.height);
  return e;
}, VC = (g, I, e, A) => {
  const t = g.getContext("2d");
  t && (t.beginPath(), A ? (t.fillStyle = e, t.fillRect(I.topLeft.x, I.topLeft.y, I.width, I.height)) : (t.strokeStyle = e, t.rect(I.topLeft.x, I.topLeft.y, I.width, I.height)), t.stroke());
}, N0 = (g, I, e) => {
  const { height: A, shiftX: t, shiftY: o, width: i } = I, C = {};
  C.x = t, C.y = o;
  const B = {};
  B.topLeft = C, B.width = i, B.height = A, B.color = e, VC(g, B, e);
}, ut = (g, I, e, A = -3203 * 1 + 171 + 3032) => {
  const t = g.getContext("2d");
  t && (t.fillStyle = e, t.fillRect(I.x + A, I.y + A, -2631 + 2638 * 1, -9 * 415 + 6122 + 238 * -10), t.beginPath());
}, Bx = (g, I) => {
  const { height: e, shiftX: A, shiftY: t, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < t || g.y > t + e);
}, nx = (g, I) => Object.values(g).every((e) => Bx(e, I));
function Sg(g) {
  const { height: I, width: e } = pa(g), A = (g.width - e) / (-163 * 22 + 8110 + 323 * -14), t = (g.height - I) / (602 * 5 + -2693 * -3 + -11087 * 1), o = {};
  return o.shiftX = A, o.shiftY = t, o.width = e, o.height = I, o;
}
function XC(g, I, e) {
  const { height: A, width: t } = e, o = r0(g.width, g.height), i = t - o * I * (-1418 + -3 * 1481 + 451 * 13), C = A - o * I * (1 * 4961 + 4506 + -9465), B = (g.width - i) / (-1005 * -1 + -8596 + 7593), n = (g.height - C) / (-4588 + -1 * 1486 + 6076), a = {};
  return a.shiftX = B, a.shiftY = n, a.width = i, a.height = C, a;
}
function Je(g, I) {
  const { shiftX: e, shiftY: A } = I, t = {};
  return t.x = g.x + e, t.y = g.y + A, t;
}
(function(g, I) {
  function e(C, B, n, a, Q) {
    return QA(Q - 921, n);
  }
  const A = g();
  function t(C, B, n, a, Q) {
    return QA(C - -603, Q);
  }
  function o(C, B, n, a, Q) {
    return QA(n - -656, a);
  }
  function i(C, B, n, a, Q) {
    return QA(C - 415, B);
  }
  for (; ; )
    try {
      if (-parseInt(e(1421, 1410, "3kSe", 1397, 1411)) / 1 * (parseInt(o(-173, -172, -175, "#y1G", -176)) / 2) + parseInt(i(906, "(#@*", 913, 919, 897)) / 3 + parseInt(i(899, "sT^B", 906, 889, 889)) / 4 + -parseInt(t(-115, -126, -121, -112, "2s)n")) / 5 * (-parseInt(e(1416, 1389, "D[KO", 1390, 1404)) / 6) + parseInt(t(-118, -116, -127, -106, "Q^]H")) / 7 + -parseInt(t(-107, -94, -122, -94, "(xTm")) / 8 * (-parseInt(i(910, "fc]4", 920, 900, 913)) / 9) + parseInt(t(-106, -100, -118, -103, "V(nW")) / 10 * (-parseInt(i(904, "tS*5", 894, 917, 895)) / 11) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Mg, -4 * 162821 + 2 * 500597 + 590663);
function QA(g, I) {
  const e = Mg();
  return QA = function(A, t) {
    A = A - (148 * -41 + -295 * -23 + -243);
    let o = e[A];
    if (QA.lfuTHT === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      QA.ThvNIb = a, g = arguments, QA.lfuTHT = !0;
    }
    const C = e[-1 * 6649 + -1 * 2733 + 4691 * 2], B = A + C, n = g[B];
    return n ? o = n : (QA.KBVgar === void 0 && (QA.KBVgar = !0), o = QA.ThvNIb(o, t), g[B] = o), o;
  }, QA(g, I);
}
function Mg() {
  const g = ["W5HXmCoIW48", "WOLuWOFdL8oBW6NdIMqHBhLxha", "W7ybW4VcQ2jbWQe", "EaxdNCoOW4/dJLZdM8o4oCkUW7a", "WQXbWPZdLqhdL3pdOWW", "W4RcKSkLWRj3W5BdOSkbpGxdOCopg20", "W7JcOKldNqRcN8oHgKu", "W4NdUaGnW6ZdSSkQWRymdfVcPmkCdG", "W7JcPuRcIM/dISkxsw0Jnc1fxW", "WQRdSrZdGdG", "EGFdNSoRW4ddIGNdV8oMe8k4W5uF", "WQDPDrpcSW", "W5GZWPBcOCkL", "qXhcIMmrCILAnXjzia", "nsOrquODWOlcUq", "WRxcPhFcG8oUl8kWW7tdN8kXWPJcSG", "wmk9WRxdLmkz", "FGFcKSk7", "WOOxW5FcHCk6WQ7cHG", "gJbTWRRcUW", "W5dcKNFdNeCOWRDKja", "ACoahbjWWPBcRCkJWR02FHTS", "aCoTW7hcHCohW5uRWPZdQCkCW4ZdTCkmWR4", "f2iWp8o9WQxdRSkiW4tdOuC", "W7JcPeddMWRcPCowpuO", "ewu9o8o9W4ldH8kVW6ddKwlcNq", "W73cOcldLXNcKmo0mW", "cCo0FSoJvmkuaCkFWRhcL8oi", "gmoCW4e8sCkmxCksuMbbWP3dVG"];
  return Mg = function() {
    return g;
  }, Mg();
}
function Qx({ assetsDirectoryPath: g, bramble: I }) {
  const [e, A] = yA(), t = e !== void (218 * -16 + -6684 + 10172);
  function o(B, n, a, Q, E) {
    return QA(E - 333, n);
  }
  V(() => {
    async function B() {
      function n(Q, E, x, s, d) {
        return QA(E - -812, x);
      }
      function a(Q, E, x, s, d) {
        return QA(d - 764, Q);
      }
      await I[n(-327, -332, "Sp1)")](jC(g)), A(I[n(-326, -337, "JN!m") + n(-308, -311, "tS*5") + a("TvtW", 1229, 1229, 1226, 1238) + "t"]());
    }
    B();
  }, [I, g, A]);
  const i = {};
  i[C(-168, -180, -173, -189, "JSlK") + o(816, "Q^]H", 805, 813, 812)] = e;
  function C(B, n, a, Q, E) {
    return QA(n - -672, E);
  }
  return i[C(-193, -190, -200, -204, "fIcM") + "sh"] = t, i;
}
var _C = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(_C || {});
const aI = {};
aI.SIMD = "simd", aI.NO_SIMD = "no-simd";
const ti = aI, xI = {};
xI.Lower = "Lower", xI.Higher = "Higher";
const rI = xI, fg = {};
fg.VISIBLE = "VISIBLE", fg.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", fg.HIDDEN = "HIDDEN";
const ft = fg;
(function(g, I) {
  function e(n, a, Q, E, x) {
    return cA(a - -50, E);
  }
  function A(n, a, Q, E, x) {
    return cA(x - 640, E);
  }
  var t = g();
  function o(n, a, Q, E, x) {
    return cA(n - -238, x);
  }
  function i(n, a, Q, E, x) {
    return cA(E - -509, n);
  }
  function C(n, a, Q, E, x) {
    return cA(Q - -830, a);
  }
  for (; ; )
    try {
      var B = -parseInt(A(1142, 1155, 1133, "45(#", 1145)) / 1 + -parseInt(A(1135, 1125, 1146, "tbvQ", 1136)) / 2 * (-parseInt(A(1138, 1122, 1140, "B92$", 1133)) / 3) + -parseInt(i("WnWJ", -6, -17, -9, -9)) / 4 + -parseInt(C(-326, "LW%R", -327, -339, -322)) / 5 * (-parseInt(i("jP)Q", -5, -12, -7, -19)) / 6) + parseInt(e(444, 449, 450, "0C9k", 457)) / 7 + -parseInt(C(-330, "WnWJ", -324, -327, -317)) / 8 * (-parseInt(e(444, 440, 437, "yTC4", 433)) / 9) + -parseInt(e(430, 438, 426, "i2Tr", 442)) / 10 * (parseInt(o(266, 268, 263, 263, "2vaA")) / 11);
      if (B === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Lg, -963118 * 1 + -3 * 258684 + 2238170);
function cA(g, I) {
  var e = Lg();
  return cA = function(A, t) {
    A = A - 486;
    var o = e[A];
    if (cA.EEBMBs === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var y = 0, G = x.length; y < G; y++)
          s += "%" + ("00" + x.charCodeAt(y).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var x = [], s = 0, d, h = "";
        Q = i(Q);
        var r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      cA.xRvYWt = C, g = arguments, cA.EEBMBs = !0;
    }
    var B = e[-9651 * 1 + -6 * 1296 + 17427], n = A + B, a = g[n];
    return a ? o = a : (cA.ZnvvRX === void 0 && (cA.ZnvvRX = !0), o = cA.xRvYWt(o, t), g[n] = o), o;
  }, cA(g, I);
}
function Lg() {
  var g = ["WOdcT8ktWQdcQmkqfci", "WQNcUrPhi8opyGK", "WRFcNXRcStGdax09W47dIhtdKW", "WP3cQ0FcNbfqzvhdJM3cQcxcMG", "W7hdJNdcRZi", "W79xbGhcVuLjWPtcI17cQfi", "Fb7cVSoDFmorySouW6mJDtS", "WR0iW5BcR1y7wsK", "xspdTmkNzwBdMCo5y8kSW4C", "W5XLwSo9WRddIgddVtNdGWG", "WP7cQ0lcMHrqBuxdMv3cOaRcVq", "WQ7cJxdcIZeVoCoA", "W5FdOcTQkq", "WRakWP7dSa9CrXDdW5b+aq", "W4DtaeRdJCk2W4LEWRu6Ct/dRW", "tw8xyb8jvwFdOCoRF0y", "W58NW7tdMga", "hb7cLtldM18AWRtcLmk1W7X4kq", "FmkOwmkpW5HYFG", "lWZdLCkPWQakiSkR", "CH9nqJ3cPSkgnYK8W6ZcGW", "s2TvoKnQthO", "WRRdKYGBW5RcO8ocw8oJcv3cUW", "gexdHKJcTYvy"];
  return Lg = function() {
    return g;
  }, Lg();
}
function ax({ crosshatch: g }) {
  function I(A, t, o, i, C) {
    return cA(i - -654, C);
  }
  function e(A, t, o, i, C) {
    return cA(t - -217, A);
  }
  return g != null && g[I(-176, -170, -160, -165, "tbvQ") + "id"] ? rI[I(-154, -163, -153, -157, "vUp^") + "r"] : rI[e("n847", 284)];
}
function aA(g, I) {
  const e = Jg();
  return aA = function(A, t) {
    A = A - (101 * -28 + 2195 * -4 + -11 * -1094);
    let o = e[A];
    if (aA.vfIcuN === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      aA.nMPCrj = a, g = arguments, aA.vfIcuN = !0;
    }
    const C = e[151 * 59 + -13 * -634 + -17151], B = A + C, n = g[B];
    return n ? o = n : (aA.WUDAkc === void 0 && (aA.WUDAkc = !0), o = aA.nMPCrj(o, t), g[B] = o), o;
  }, aA(g, I);
}
(function(g, I) {
  function e(C, B, n, a, Q) {
    return aA(a - -92, Q);
  }
  function A(C, B, n, a, Q) {
    return aA(B - 119, C);
  }
  function t(C, B, n, a, Q) {
    return aA(B - 771, Q);
  }
  function o(C, B, n, a, Q) {
    return aA(a - -21, C);
  }
  const i = g();
  for (; ; )
    try {
      if (-parseInt(A("n01M", 548, 547, 535, 541)) / 1 + parseInt(A("9urf", 558, 556, 545, 547)) / 2 * (-parseInt(o("B1VK", 447, 446, 433, 434)) / 3) + parseInt(t(1219, 1220, 1223, 1229, "S!18")) / 4 * (-parseInt(t(1214, 1202, 1214, 1191, "Ofp%")) / 5) + -parseInt(A("Qkj#", 571, 559, 572, 559)) / 6 + parseInt(o("fzii", 426, 406, 416, 417)) / 7 + -parseInt(t(1221, 1206, 1208, 1199, "r&Xs")) / 8 + parseInt(e(354, 353, 349, 355, "]1z^")) / 9 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Jg, -99853 * 13 + -590834 + 2689864);
function Jg() {
  const g = ["dSoMWPJcIfG", "WQCiW78mW40tyq1IWRK", "iCo/uttcM8k2mM8", "W7hdM8kJAYi", "cCoCW5u7a8kpWO07W50twwi0lW", "W47cVmkIW6FcLZbPW4lcSmozWPij", "W47cVmkVW63cLJbUW6pcO8o/WRuD", "s8ouW6b2cG", "WOnMmwVcKuNdNmoWg3dcS8kKW64", "CseMWQRcR8kVWRJdGwiqrwXd", "neNcPGpdSq", "W4KdtGrEtmkgWRddQJG", "bCkllmoo", "jq0J", "tSoUo0lcPW", "ACodW6e", "h8kXzHBdSH/dHMpdLsy7DW", "wCkyWO19sa", "W7pdL8kdW7u8b8kwWR0", "t3ThWPVcK8obWQvfWO8uWQ7cQLRdOq", "WP3dUmoLWRRdKG", "WQVdMcJdSIBdRmoTW4CnkSoIWOBdGW", "gg7dOd7cNmkMWOObW7yUg8kPWRq", "p8o6WONcUmkx", "FmoMbCoiW5i6WPFdGmkcWOKsW7Gi", "W4xcUCkUWRpdQe12W5/cOG", "W4ObW6yfW5rcf1VcOq", "WODweKj9", "CfHJW5fchSkQWQe8WP7dRuxdUW", "ESoHc8opW5CYW7NdVmkrWQWxW60"];
  return Jg = function() {
    return g;
  }, Jg();
}
function xx({ assetsDirectoryPath: g, children: I, bramble: e }) {
  const A = {};
  function t(x, s, d, h, r) {
    return aA(r - -673, x);
  }
  function o(x, s, d, h, r) {
    return aA(h - -637, r);
  }
  A[o(-196, -185, -203, -191, "^vg&") + "le"] = e;
  function i(x, s, d, h, r) {
    return aA(d - 890, x);
  }
  A[a(-112, -127, "S!18", -116, -114) + o(-198, -205, -190, -201, "4CsH") + a(-103, -130, "]1z^", -127, -117) + o(-175, -168, -169, -182, "QY1V")] = g;
  const { sunfish: C, crosshatch: B } = Qx(A), n = {};
  function a(x, s, d, h, r) {
    return aA(r - -547, d);
  }
  n[o(-186, -173, -183, -184, "es7Y") + a(-90, -118, "iCxY", -110, -104)] = B;
  const Q = wA(() => ({ redfin: ax(n), sunfish: C, crosshatch: B, bramble: e }), [C, B, e]), E = {};
  return E[a(-114, -93, "B1VK", -107, -107)] = Q, E[t("n01M", -240, -258, -244, -246) + o(-203, -205, -220, -209, "ZFPz")] = I, D(Fg[a(-111, -90, "ZFPz", -95, -97) + i("UY@v", 1307, 1316)], E);
}
(function(g, I) {
  function e(B, n, a, Q, E) {
    return NA(E - 313, n);
  }
  var A = g();
  function t(B, n, a, Q, E) {
    return NA(E - 780, Q);
  }
  function o(B, n, a, Q, E) {
    return NA(E - -198, Q);
  }
  function i(B, n, a, Q, E) {
    return NA(a - 863, B);
  }
  for (; ; )
    try {
      var C = parseInt(o(-44, -45, -53, "q6vK", -53)) / 1 + parseInt(o(-40, -34, -57, "gwG0", -46)) / 2 * (parseInt(t(939, 928, 929, "fPIR", 937)) / 3) + parseInt(i("ijnJ", 999, 1011, 1022, 1001)) / 4 + parseInt(i("ijnJ", 1002, 1003, 991, 1002)) / 5 * (-parseInt(t(949, 948, 939, "gh3u", 941)) / 6) + parseInt(i("#9Nx", 1006, 1010, 1002, 1017)) / 7 * (parseInt(t(941, 923, 925, "3f*2", 934)) / 8) + -parseInt(e(476, "ucAV", 487, 472, 475)) / 9 * (parseInt(i("C8*e", 1012, 1012, 1018, 1003)) / 10) + -parseInt(o(-59, -41, -45, "tMj2", -48)) / 11 * (parseInt(i("q6vK", 1026, 1022, 1011, 1028)) / 12);
      if (C === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(vg, 1087288 + -561061 * -2 + 40 * -36560);
function NA(g, I) {
  var e = vg();
  return NA = function(A, t) {
    A = A - (4801 + 5 * 1799 + -13657);
    var o = e[A];
    if (NA.OnYaxC === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var y = 0, G = x.length; y < G; y++)
          s += "%" + ("00" + x.charCodeAt(y).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var x = [], s = 0, d, h = "";
        Q = i(Q);
        var r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      NA.UCQTqU = C, g = arguments, NA.OnYaxC = !0;
    }
    var B = e[-8645 + 3083 * -1 + 11728], n = A + B, a = g[n];
    return a ? o = a : (NA.XyNlZf === void 0 && (NA.XyNlZf = !0), o = NA.UCQTqU(o, t), g[n] = o), o;
  }, NA(g, I);
}
function vg() {
  var g = ["W7q5bSokWRBdVLu", "dCokg8kbuSomW4VdJZdcSCoz", "W5BdGSoOWQhcUY1azSktWPNdTwa2", "EG9YWOCXW4O0W5ZcO8kfeuRcUW", "W7ulWO3cGCo1WQ4Xztj9v2y", "WQtcRteXFs5YW4NdQmkMWO/dRq", "W6TrtCoTi8k/lSoEW5fOWRBcRa", "W5aVW57cH8kQWOVdIc4ohmkqWP4", "W7jRvSkkW7lcJGWtW7rrx08N", "W6zrb8keDSoPl8o0", "bcj1WRRcVWjJW4SNFc4", "W6SOBxtcQmoqW6xdPmo0", "WRJcPmoEDtWtWOBcGW", "WP8SW4BdHSosW4uuWRzwW4tcKXS", "W6nCFs0QWONdJM4", "W7GdW4pdQ8kVW74CzW", "jWO6xqSPltq", "jSonWPBdQSk7t3RcQ8kUc8kL", "WQNdKcXcpWf1veRcUbe", "WQxcRJ9Ahf98W6VdMW", "W6btc8knCmoKnSoq", "W5NcOCofW5xcNgBcU0hdJWjUW78", "WOZcU3FcPSo6icySWQvoW6jEma", "tqbaWONcHmkvgW"];
  return vg = function() {
    return g;
  }, vg();
}
function rx({ analytics: g, crosshatch: I }) {
  return I !== void (5513 * 1 + -2568 + -2945) && !I.isAnalyticsDisabled ? g : void (590 + 1837 * -1 + -1247 * -1);
}
function Ex({ analytics: g, appKey: I, redfin: e, crosshatch: A, bramble: t }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = rx(o);
  return V(() => {
    i && i.init(I);
  }, [i, I]), V(() => {
    A && (console.info("Analytics is " + (A.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(e, t.getCustomerName()));
  }, [i, t, A, e]), V(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function sx({
  analytics: g,
  appKey: I,
  children: e
}) {
  const { redfin: A, crosshatch: t, bramble: o } = Vt(), i = Ex({ analytics: g, redfin: A, appKey: I, crosshatch: t, bramble: o }), C = wA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ D(Ng.Provider, { value: C, children: e });
}
let S;
const _A = new Array(1735 * -1 + 6968 + -5105).fill(void 0);
_A.push(void 0, null, !0, !1);
function EI(g) {
  return _A[g];
}
let qA = 3283 + 3283 * -1, Et = null;
function Dg() {
  return (Et === null || Et.byteLength === 179 * 3 + 449 * -1 + -88) && (Et = new Uint8Array(S.memory.buffer)), Et;
}
const yg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, cx = typeof yg.encodeInto == "function" ? function(g, I) {
  return yg.encodeInto(g, I);
} : function(g, I) {
  const e = yg.encode(g);
  I.set(e);
  const A = {};
  return A.read = g.length, A.written = e.length, A;
};
function kt(g, I, e) {
  if (e === void 0) {
    const C = yg.encode(g), B = I(C.length, 1) >>> 2305 + -461 * 5;
    return Dg().subarray(B, B + C.length).set(C), qA = C.length, B;
  }
  let A = g.length, t = I(A, -8286 + -1 * -9190 + -903) >>> -87 * -42 + 1 * 9514 + -13168;
  const o = Dg();
  let i = 2014 * -3 + -4453 + 5 * 2099;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > 127) break;
    o[t + i] = C;
  }
  if (i !== A) {
    i !== -1223 * -3 + 1075 + -4744 && (g = g.slice(i)), t = e(t, A, A = i + g.length * 3, -1896 + 271 * 7) >>> 8282 + -41 * 202;
    const C = Dg().subarray(t + i, t + A), B = cx(g, C);
    i += B.written, t = e(t, A, i, -53 * -142 + 754 + 487 * -17) >>> 2127 * -3 + 2909 * -2 + 12199;
  }
  return qA = i, t;
}
function zC(g) {
  return g == null;
}
let st = null;
function KA() {
  return (st === null || st.byteLength === 8 * 491 + 1466 + 899 * -6) && (st = new Int32Array(S.memory.buffer)), st;
}
let Dt = _A.length;
function dx(g) {
  g < -7344 + 65 * -13 + 157 * 53 || (_A[g] = Dt, Dt = g);
}
function $C(g) {
  const I = EI(g);
  return dx(g), I;
}
const sI = {};
sI.ignoreBOM = !0, sI.fatal = !0;
const AB = typeof TextDecoder < "u" ? new TextDecoder("utf-8", sI) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && AB.decode();
function Yg(g, I) {
  return g = g >>> 3167 * -3 + 8 * -291 + 11829, AB.decode(Dg().subarray(g, g + I));
}
function cI(g) {
  Dt === _A.length && _A.push(_A.length + 1);
  const I = Dt;
  return Dt = _A[I], _A[I] = g, I;
}
let ct = null;
function eB() {
  return (ct === null || ct.byteLength === 1727 + -43 * -141 + 1558 * -5) && (ct = new Uint32Array(S.memory.buffer)), ct;
}
function gi(g, I) {
  const e = I(g.length * 4, 4) >>> 0, A = eB();
  for (let t = 0; t < g.length; t++)
    A[e / (-2661 * 1 + 9523 * 1 + -2286 * 3) + t] = cI(g[t]);
  return qA = g.length, e;
}
function Ii(g, I) {
  g = g >>> -3029 * -1 + -7283 + 4254;
  const e = eB(), A = e.subarray(g / (4056 + 4 * -1013), g / (-20 * 332 + 7111 + -467 * 1) + I), t = [];
  for (let o = -9137 + -1 * -697 + 8440; o < A.length; o++)
    t.push($C(A[o]));
  return t;
}
function hx(g, I) {
  const e = kt(g, S.__wbindgen_malloc, S.__wbindgen_realloc), A = qA, t = kt(I, S.__wbindgen_malloc, S.__wbindgen_realloc), o = qA, i = S.is_mobile_supported(e, A, t, o);
  return VI.__wrap(i);
}
const dI = {};
dI.register = () => {
}, dI.unregister = () => {
};
const oi = typeof FinalizationRegistry > "u" ? dI : new FinalizationRegistry((g) => S.__wbg_licensevalidationresult_free(g >>> 1769 * 1 + -9063 + 14 * 521));
class VI {
  static __wrap(I) {
    I = I >>> 3429 + 135 * -37 + 261 * 6;
    const e = Object.create(VI.prototype);
    return e.__wbg_ptr = I, oi.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = -93 * 24 + 2 * 3636 + -72 * 70, oi.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    S.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, e, A, t, o) {
    var i = zC(e) ? 0 : kt(e, S.__wbindgen_malloc, S.__wbindgen_realloc), C = qA;
    const B = gi(A, S.__wbindgen_malloc), n = qA, a = gi(t, S.__wbindgen_malloc), Q = qA, E = kt(o, S.__wbindgen_malloc, S.__wbindgen_realloc), x = qA, s = S.licensevalidationresult_new(I, i, C, B, n, a, Q, E, x);
    return this.__wbg_ptr = s >>> -2223 + -1 * 3619 + 5842, this;
  }
  get is_valid() {
    return S.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1184 * -3 + 641 * -11 + 10603;
  }
  get features_json() {
    try {
      const A = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = KA()[A / (-3314 * -3 + -303 + -9635) + (1 * -3527 + 8086 + -4559)], e = KA()[A / (2 * 2459 + 2009 * -4 + 3122) + (-5398 + 4415 * -1 + -4907 * -2)];
      let t;
      return I !== 1 * 2527 + 493 + -2 * 1510 && (t = Yg(I, e).slice(), S.__wbindgen_free(I, e * (694 * -1 + -6150 + 6845), 1)), t;
    } finally {
      S.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const t = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_errors(t, this.__wbg_ptr);
      var I = KA()[t / (-1 * -1765 + -6844 + 13 * 391) + (-2787 + -10 * -933 + -6543)], e = KA()[t / (-2 * 118 + 4681 + -4441) + (-1755 + -439 * -4)], A = Ii(I, e).slice();
      return S.__wbindgen_free(I, e * 4, 4), A;
    } finally {
      S.__wbindgen_add_to_stack_pointer(-3886 * -2 + 1093 * -5 + 2291 * -1);
    }
  }
  get warnings() {
    try {
      const t = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_warnings(t, this.__wbg_ptr);
      var I = KA()[t / (-1 * -7127 + 1 * 1673 + 3 * -2932) + (-1790 * -3 + 1 * 1747 + 7117 * -1)], e = KA()[t / (8788 + -2373 * -4 + -18276) + (-2038 * 1 + 9917 + -7878)], A = Ii(I, e).slice();
      return S.__wbindgen_free(I, e * (-2062 * 4 + 7166 + 1086), 4), A;
    } finally {
      S.__wbindgen_add_to_stack_pointer(586 * 5 + 5279 + -8193);
    }
  }
  get customer() {
    let I, e;
    try {
      const o = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = KA()[o / (590 + -8186 * -1 + -8772) + (-5 * 1384 + 8066 * -1 + -14986 * -1)], t = KA()[o / (-1160 * -2 + 301 * 26 + -10142 * 1) + (9543 + -1 * 9413 + -129)];
      return I = A, e = t, Yg(A, t);
    } finally {
      S.__wbindgen_add_to_stack_pointer(-9 * 542 + -208 * -6 + 3646), S.__wbindgen_free(I, e, 9 * 871 + 1147 + -8985);
    }
  }
}
async function lx(g, I) {
  if (typeof Response == "function" && g instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(g, I);
    } catch (A) {
      if (g.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", A);
      else throw A;
    }
    const e = await g.arrayBuffer();
    return await WebAssembly.instantiate(e, I);
  } else {
    const e = await WebAssembly.instantiate(g, I);
    if (e instanceof WebAssembly.Instance) {
      const A = {};
      return A.instance = e, A.module = g, A;
    } else return e;
  }
}
function ux() {
  const g = {};
  return g.wbg = {}, g.wbg.__wbindgen_string_get = function(I, e) {
    const A = EI(e), t = typeof A == "string" ? A : void 0;
    var o = zC(t) ? 1 * -4206 + -2118 + -51 * -124 : kt(t, S.__wbindgen_malloc, S.__wbindgen_realloc), i = qA;
    KA()[I / (11 * -883 + 1118 + -8599 * -1) + (1 * -8374 + 202 * -4 + 3 * 3061)] = i, KA()[I / (269 * 22 + 1486 * 3 + 10372 * -1) + (-6245 + 3494 * 1 + 2751)] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    $C(I);
  }, g.wbg.__wbindgen_string_new = function(I, e) {
    const A = Yg(I, e);
    return cI(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return cI(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return EI(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, e) {
    throw new Error(Yg(I, e));
  }, g;
}
function fx(g, I) {
  return S = g.exports, tB.__wbindgen_wasm_module = I, st = null, ct = null, Et = null, S;
}
async function tB(g) {
  if (S !== void 0) return S;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAAAEkAAAAEAAAABAAAAIcAAABJbnRlcm5hbExhYmVsVG9vTG9uZ0ludmFsaWRQYWRMZW5JbnZhbGlkQXJndW1lbnRzaW5mLWluZk5hTgAAAAAAAQBB15HBAAvRKiCamZmZmZmZmZmZmZmZmZkZFa5H4XoUrkfhehSuR+F6FN4kBoGVQ4ts5/up8dJNYhCW1AloImx4eqUsQxzr4jYaq0Nuhhvw+WGE8GjjiLX4FCI2WDhJ88e0No3ttaD3xhBqI43ADlKmh1dIr7ya8tcaiE/XZqVBuJ/fOYww4o55FQemEh9RAS3mspTWJugLLhGkCVHLgWiu1re6vdfZ33wb6jqnojTt8d5flWR54X/9FbvIhej28Cd/GRHqLYGZlxH4DdZAvrQMZcKBdklowiUck3HeM5iQcOoBmyuhhpuEFkPBfingpvMhmxVW556vAxI3NTEPzdeFaSu8idiXstIc+ZBaP9ffNyGJltRGRvUOF/pzSMxF5l/noKtD0tFdchJdhg16PD1mpTSs0rZPyYMdsZ7XlGOXHlFdI0KSDKGcF8FLed2C337afU+bDgq04xJorFti0ZhkKpblXhcQIDkeU/Digafgtu5EUbISQLMtGKkmT85STZJYaqeOqJnCVxNBpH6wt3tQJ6rYfdr10PIeNFBlwF/JplK7E8uuxEDCGJCm6plM1OsOyQ888jaazhOAChHDrVN5sUEZYFC+9rAfZwh0AovcLcFnR7Om/l5aGVKgKTVvsCQ0hp/C6/5LSBTbGe6Q8lkdkJ5/aIll1jkQXymwtB3D+0yXMqeo1SP2GbK6WV2xNZY9rFsfunfpxBQoYuF9J16rl1ZJTPuSh50QDZ1oydjJq/LwDnr4t6WVGj4Xujp6obxbWnIuLZOERBXLRfsuyBrKr66Oi4pCnQMRRQmSsab33LJK5Hiqnfs4GwShQcHrkn31boMtVbEvxxUDtGdniXVkxFicV3cnJmwR0uyl2NuIbW30xiXyCz3gG9sj60YWB76KwzgeKKP9TBZJtlXSEWz+bpxgS1NPMdcRDorvtk8Tl7FgZ0WFGIKLHKWhv/hyD6wnGrlqN60B1hYeTplgwnJWueFgVSwkzkQSlRbCzQMeV/U1zrsTbeM6HaurAQsDGKwqK9gvdopPYhdWiTRvAuC8u1UT88RuDLUSiajtsdDMx5LvHrjUSnruHQe6V45ACtPb8kuTEG/78RcGyN9xANWofPVvD9pY/CcT1gxm6TO7p/q7TLIpjmCmHhHXhIcp/FKVyaOOVAsahRgOrNDSusmoqgeD2HZvrp0T46waHl7c2t2l0cBXsrBiH0+KSEtLsEh+UUGarI7AGxnZodPV1Vlty9rN4ValMxYUe4HcdxF7Vzzi1+er6sIRECrPYFmCXvLGNiamrKoEthm7pYBHaBj1a8VR61ZVnZEUloQABu15KiPRpyLf3X10EFYHNKPhj93RgQzRMZb8UxpFbPboGnPkpzQ9p/RE/Q8Vnlb4U+IoHVNdl1JdapfZEGJXjbkD22HrLvJQlRC/9RroRaTHz0hOvFhb2t2mZZEVIGuDbNnTcWOt4uEXHx5BEc0Rn60ohhyfSAQD82RjmxsL2xi+U2uw5QadNY8d6RUWohVHyw+J8+prSpFy5CCrETe8cXhM27hERqobhG0BRRxfY8HG1hXHAwVVSQO+mp0WGenNa0XeODY3dwdp/q4XEsFBFkaiY8FWWFhyDpex8hzOZ6vRgRwB33kT9XESjigXpexVQc4WNH9h3JDBDtiGEm5HVjV9JCBlAsfnaOSMpB0lOXj3MB2A6gFsuSAd17YXhPos+fOwmbs0I2FNF6z4Ejn3RyhTTlxfVDhoFfKsWh4uLNO5dQt9f0NgU0RbikgYWCPcx/fVMJnPGak2fDttEybS+XKMibSOso8O8fkrFR+4QS6PowcqciimC/THvN0Y+pq+pU85u8GGHtZcBpfkE/b3MAkZwl6c1zDw+tYk1B/4X1oHFGjlSXmNJi/fg3YZYObhBRAgUW7HClK/5c9eFBqFgdEMgNrxBW8OmYTZSxD11GiCFADET9bk4/Sg9RIaK3ftAaqZadkRtxz3s/fbFLzFigGIFO6tdJKwxVz5rxAsCd5opu18SVTqgG+UKLMaJNTkU7hXyjoQVZq/diBcFYN2HUNgeTtic6qu/16AFhGevcjRZvUrnbgQsTLLM1cbf2RtQVLEvH1gDfSOolzfFcy2imfbaf3K5j3D2E59fxHfindyxQ8vq9cvBY7kLv8bgNWSWwRz8oisjGo+Hb9lFmZEQknQKPXTVj1VmEr/6hGjoANCTUGIuVeVu/MQMqsc6eYCaNfNOWF5d/zCQFvvFlRSAiB5cWHnLfnJaM0VWRKGUJ2ZjrVopXxbdnQVVlsd0qZK4T6RIFH9FcX23UR8Fw4fohr/QE2nykQ3krHQyRJKy2n3ZM6uCxFuWFBPtA8eOzzuxVDYizyn8XlzP5AMGMnJ8TfaeQnKhfTHwjJAPRPbQum/9sKoqW+6DJ63Zsge45u6zCvPUyEmlXB+LFKgGIJJlXCJcqkauN0mZfB0sxOddYgaD4R194wvPgjnh4UfF16ge3I2kV8KJpgG7J83Gd/kGZZb+EAZ1YRGBfB/LBRM6kerr8YA4RA3BdGMmSMQR90/RUykZ87nJNW0R4/SGQaxzJ3W6VLYH7fdw59yqBQ4JwpLRe7beRksfmkZwoYQWdipEaLjXymPRjAPjzZxGnoTu6eBHLO6pWvz2NheJxUvqZXsmuMoYlGJj63gS+wQF3Xv4Pc4Dp3oDkyvmqwTG3kqWRqTLdiwU3LWJeJWqRUuVUdID755jdzB3reBRVQRfLsL2n6WjxWUnJeMzwi6G5cv1hT/EaZ3drDf1nJtLhZ5jN5D/6dR+ZHzsnj1vb4Rjq390v4/HMIc7LdaImNkHNiKZEIyM7ABF/BfFbW1thZGooObjsJZAaxZ5t2QxCsSowM5XxcE9s6swqP8GtQSHYOcLUysaV5yvZscykhDQhec44rWiVQY9f3iFggHaZsSxgWrvQ9Uje4va/EM2HTFHQVrIv5ydte+jCLBcEYq0RcEvE7LKMUS/9ZOZ41ruw0ToPl9eHQ7Ucskfth7El98Hk1h/vkpyQ0JtzGt/EF/YxgKgcuUIdTXoMUnJMo0zIITd854VM+5v2dvDG1DIa03H/lxLd2llMwfWXCKz01X+RjH9L19Ud3Wf3rzoT8+rPoTC+4vyeguvv/DuJwy/Xn3H9Yk86AgvzFmNvoWwv3Hkhl4HVwaGswnuF77qwHLbHUUYOR8e64JU5MYybxnovBdEJmglMWwQuse9HSUP2rnLxrh5nYEJwKJ5Vwq3TKIH/MU5+srnYXOoLew7rAooH/CENjf32FvSgFZtEpOdDPM0BqtTObnJdXN4CmiPpCP1nMV8dZRhlF3cU3utMvZcngpEehX6dbovuh7sFSsj4SNdRsgEyHfUzK6/FndiQxqpPcVgELnGEMoyGOuSm5w7umSEWZq2Cc4DQ0GFxFKGhdDHhzrIa3sLKQ9axJ0bnsSnH4WVk5XvfAc/ojbXFj8QeP+ESNKJWK0lJZBX2GNYDYFyxzp1B3oKaqrZ3/nPU340AgXh90XILshVrkyuWTX+XNtEqWVjGYraSPC6sE68sLsex0d3tYeibqCzrs0YlsCV5YXGBjfSwdiNaX89rTiAazeElnzZHnYnIg7lPGHNzYTMR7h9YPHRkpt/NxaBsaRQicYGisDBp9uVzAXr57Rp5tSE5De0TzLfSUaJRgxHKaS6h5A5acwPP4dSLd5WuOEqLsYAFGGwMkxS9PFx66CnVPJE820o81C6RFSCaYX0ciFqB+kkBw+AiHbdAe430A6nlMZUA1KywG0FfcFYBln++RCFKcKCAmbKd74N7N6UvyDNRDX3QyokUIwjlm4KreTOe8ZE0sKIA4CjT7h+e74QmG/FA88CIA+mz1l58dY+psamRDkLA0AZPjIbqUMjpD5kI4a6iOkmen504u3o3FAYdo+FbscUOG6lKk8+YL0mRoV/xArYbObxLp1x47RIMNduzEbiRopFmqVxNILDudosWLBFaF7uhGId9Dbbz4fhyeCZxGbkl0cQL+ALOZjmD4/0NgbSXXkSTPMM71RtkZl/wxHFtRdUG6P1o/Kp14FUcxw0hFTybPjS1cZRNn9bk6t54McqTr2ggl5RwPhlyWliuzPFrr7xGjUYGzPgHmE6m7wPxIq+QcOhzR65Zr10xBLGjMdIpQ5C2yQLlHiKkPaCBVcF7Wpx9W8povagVXP4dMQsBKHD9kiLnHfkJxV5QJTgeYdbAwUT4taTNoW3h3PqJrrF4qjqaWie6OueH6xpSDiIhOpBamial/SfSeXtaKaNp4eVNEggoh/25cfrPdOFZJ+GHengM4GZnx5TCPG2N10mBPxCwHkCnAtj61royeWVFofWtYAUKJZJAy+77UfeBAVGRVFmtmBFB1w/vL3svnZEBR3ansUm0MXwP5bxiguew0Q8kOS7cQF8szKLAoOfSuvGcKcDr7QN1sKb72hccoijBTO4z7Lc/lICIyXtCfVG3AQsJ9keOxbDtqsJVQMVflMGsB/UGDwrz57vbep1hBhChUzZkCA87/LlZcs7t5zGtUQUnDNZlJmrO9YR7BkuZDuGttZpLgOhSMmR2zztvqmixVJrraT2NCCHmwjKV+VhTwRdbCKH/Qanv2sOKj+7giUG/dZ1bIpr7GXvZOGmCUHEBYse3f1uiWOrJfcnhMebKYRE8VYIisJfXq/Lf64yXk9HHZqrU7voP1hzFfLYKGUlxbF7r0LWRr+5wkTCedN3RISOrH8RVtdY6bchA7Yr/vqHMiNMGuvShyFsNA+E/NiIhfU1ya88m7j0Cbay3XC6IEShoykxuoXn7TXKUaJnaecHWtwUAXv3xgqRu4EoReGsBeJ89mdJbPgVGuLnU15nvMSdFL2Ym/rzYd4RS98KJdSHl2oXoK/IgvTxmq/yYYSQhjkuUtozBs8D5+I/zrSDmgTbSl5QHosYBiY2piRg+QMHyQhlDPIVrNGE+ITDjYd1xi2TUMpoHiPONy03KSRSt8Tiq9rqGYnf1pgIWGhgqrLH6K/77nrhTIVTbRNtJu7bxlOmYxhidGOqj2QpPbiYlkUDOHWGqGn2O7K2bYrT4JHEEWbJF6bcid+EfaK37EDDBoESR0YSfWF/g34OxlbadYU0KBKE9Rdnsuk+S8UfIerEE0BEVJTyWPfOlzmufkLrBpxZ9p0D6EcGS+wHvv6b1YVwVJIKtmAsK0lwEsvL/MRETRRDaqONOcVCc0Ssn7rTxvEDXHuPl0fq20KDygyidkVnaSNi2UXGbxXCAwgKNR6EZQ6fBI88vQsWQ3gzNm59xtDlZbb/PTD8OA9s3Dhx18WAxESFpddNloay/UmgTnmEQToHPAk/FaQkN4iCzWPoxzQ7OOMHTDf2aZLgqJdP+kW2iODPbFZf+Hros5OsTJUElw5OC+1wstoedF95E6EUx3jLWC/XTXWU5SnZFByA3YXHIvmZbEqeKl27Lamjs/EEvpE12+1qiYP8ROL132yBx5iat+/KiJSPydDb6xkKAYYToh/mYhO22UfnPKJUCA4E0oNzCh0SsVvZZPqD7QzwB47pAmH9qFqWYQPInP2wpkYlrYHbPjn7q022bT1kTWuE1ZXDODzP35JJPW6IoMifR9FrNZM9v9k1OmQleho6DAZ0Yl4Pfj/g0Puc0TtUyAnFHShk5fGzJzP8Y8D8Q9NHxBSArklpEdhfxyzBeh/rssZDzXHt+nSTcwWXNHs//GiFNmQ0l8hDws9ErDaIzNbghDB51CZaEurYVCzKgaFK2oaZ7lAFLqiIk5AXFVrarwhFVOUAN2U6E4LzUlEvO7J5xBR7QDIh9oXEkip08ZKdgwb2r0AoGxIRttsh9xr1ZGjFa9kzUy9BgVJip/j792nTxGxOuJ6yAoIqEP/OOYvprIb9C7o+zmiOVNp/5Me84QoFl3y7C/7tMd1h/8PsvUDuhEu6kfmkSHZIj//f7Yi01wc8lQGhUGBerVl//+R6KiwFvVDODcBAWLEtzIz24btJhLun/PxAWg2OlmE65GkFQsdixn2J5u5Xvvgabx0UBE8F9Z6Xobi+n4v54djXUB0lhJWkf3W0PeX5XHZOGLNhr0dq9rKeA2TeYTBei3oPdLKF1YVby1xQmHQmsiKhjGoCBMiIhivTmpoTZHaqj1PQHQe6LR58j6IU6TarohkPwBdGIddYSj/bNzprlhtUMyZfROklWgNZa5gqeSNSBp6XC8fg0TtPbe+s7qDcaCuYbDyGDadijEsMvYuNsHmvudZ9RPwYXeCEx295Imb15c/9u4fWk4sNal9yoOhr9/fMviLGRWlVvcg/qGc5/KyTML5bxSqHRL5szEbSrkoj3CblFkQ3ZW2wey1XkP1DeWAxe0oGkreXgFXXuU1xKQdZwSL7RTVsRgBrH63xGkdflLQCL4QIrZam3mXJaEPLzC3s6fJGoFeFUlhrLdN2Vjz+MIfbhWbS0QHgSPG163g9ZM15iQRK6zTPpsFPVlJNFaGIj1uG7yJ3MsVnv3gbcMRBYLK8RVjoeNvERj+syRpQTebO44R0ZvSf7VZY4YHdTUlxcUWHA7jDjORFOnR0pD3UDeeeBYLHD+P2na6dHUNxkAsGPoReMYx5ZAk9+27SKNn4FnDHC0FW7dAHSyLydO1H02uAhckBHxfzX1Wb9QPK+Zwi2gSBm3GmEjJ8H7tshE9ThJ0HZ+9nuAGocCYV8Kn/aQOkBfmyktN0oAAR3mb7MpQpdkSokR5SB3OANiOxa1EgQgpHoLQLW0X2DMTP9FXnZrTIBjOpiQkeUb2qGWnrEoVdk0TfaQ6oI49vXRvpXp3iFbiHmRQleY+MWRdjLf7xQYStRi3pqrry422SnAsltFrDsQTV6SqEhMWJBEaR/DoEhegH9/p7g7cRIPaFGzzU0LfTBmAIb/YfJ0C4kMjKUNofz0UM4Eyev19aE42HFTPuTIxELjOUJCVyUBKvca5SylR6BnGC6emd9QzCDHSx2+H2rkUawnsHsZ2KaCNDtO/0q6UEN/brGSjV0IASRe4/x1+hxoZ4yPqtd8BzaASYJmxMTkVrrUciJFMznBNdeatJ476EOJVlKa1reMar7twSQx9Khvod0OFxFfpe/JijQc9l7sVh/k1BGp5h8mOtQoGZN9iEXHCvAYQj6V15Ih31mxl0RsnNcprpqW39+nTkqvwHUEWH8ShvB4exl/uDw9WjbHNEWXTAmFkY6P/FrOxiUhPfBxR3JtNUBzpMt8ojtQG2ckWDn1JcXPjII+yINh2BRQ7EnwuD4KFBZt+6s1Z8TtTKx3KvqUBnjevy+7XR/Qv3FUXoZiENEv5WAm/rGzDjBarEgBBt7zBAAsBEABBx7zBAAsBFABB17zBAAsBGQBB5rzBAAsCQB8AQfa8wQALAogTAEGGvcEACwJqGABBlb3BAAsDgIQeAEGlvcEACwPQEhMAQbW9wQALA4TXFwBBxb3BAAsDZc0dAEHUvcEACwQgX6ASAEHkvcEACwTodkgXAEH0vcEACwSilBodAEGDvsEACwVA5ZwwEgBBk77BAAsFkB7EvBYAQaO+wQALBTQm9WscAEGyvsEACwaA4Dd5wxEAQcK+wQALBqDYhVc0FgBB0r7BAAsGyE5nbcEbAEHivsEACwY9kWDkWBEAQfG+wQALB0CMtXgdrxUAQYG/wQALB1Dv4tbkGhsAQZG/wQAL1jWS1U0Gz/AQAAAAAAAAAACA9krhxwItFQAAAAAAAAAAILSd2XlDeBoAAAAAAAAAAJSQAigsKosQAAAAAAAAAAC5NAMyt/StFAAAAAAAAABA5wGE/uRx2RkAAAAAAAAAiDCBEh8v5ycQAAAAAAAAAKp8Idfm+uAxFAAAAAAAAIDU2+mMoDlZPhkAAAAAAACgyVIksAiI740fAAAAAAAABL6zFm4FtbW4EwAAAAAAAIWtYJzJRiLjphgAAAAAAEDm2HgDfNjqm9AeAAAAAADoj4crgk3HcmFCEwAAAAAA4nNptuIgec/5EhgAAAAAgNrQA2QbaVdDuBceAAAAAJCIYoIesaEWKtPOEgAAAAC0KvsiZh1KnPSHghcAAAAAYfW5q7+kXMPxKWMdAAAAoFw5VMv35hkaN/pdEgAAAMizRym+tWCg4MR49RYAAAC6oJmzLeN4yBj21rIcAABAdARAkPyNS33PWcbvEQAAUJEFULR7cZ5cQ/C3axYAAKT1BmSh2g3GM1TspQYcAICGWYTepKjIW6C0syeEEQAg6G8lFs7SunLIoaAx5RUAKOLLrpuBh2mPOsoIfl4bAFltP00BsfShmWR+xQ4bEUCvSI+gQd1xCsD93XbSYRUQ2xqzCJJUDg0wfZUUR7oa6sjwb0Xb9CgIPm7dbGy0ECT77MsWEjIzis3JFIiH4RTtOeh+nJb+v+xA/Blq6RkaNCRRzyEe//eTqD1Q4jFQEEFtJUOq5f71uBJN5Fo+ZBSSyO7TFJ9+M2dXYJ3xTX0ZtnrqCNpGXgBBbbgEbqHcH7KMkkVI7DqgSETzwuTk6RPeL/dWWqdJyFoVsPMdXuQY1vu07DARXHqxGpxwpXUdH2Ud8ZO+innsrpBhZodpchO/ZO04bu2Xp9r0+T/pA08Y770ox8nofVERcviP48RiHrV2eRx+se7SSkf7OQ67/RJi1Jej3V2qhx0ZesjRKb0Xe8l9DFX1lOlkn5g6RnSsHe2dzidVGf0Rn2Of5KvIixJoRcJxql981oY8x93Wui4XwtYyDpV3G4yoCzmVjGn6HDnG3yi9KpFXSadD3feBHBLItxdzbHV1rRuRlNR1oqMWuqXdj8fS0phitblJE4tMHJSH6rm8w4OfXREUDuzWrxF5KWXoq7RkB7UVmRGnzBsW13N+4tbhPUkiW//V0L+iG2YIj00mrcZt9Zi/heK3RRGAyvLgb1g4yTJ/LyfbJZcVIH0v2Ytuhnv/XvvwUe/8GjSuvWcXBTStXxudNpMV3hDBGa1BXQaBmDdiRAT4mhUVMmAYkvRHoX7FelUFtgFbGh88T9v4zCRvu2xVwxHheBAnCyMSNwDuSurHKjRWGZcU8M2r1kSAqd3keTXBq9+8GbZgKwYr8IkKL2zBWMsLFhDkOLbHNWwszTrH8S6+jhsUHcejOUOHd4AJOa66bXIiGeS4DAgUaZXgS8dZKQkPax+O8weFrGFdbI8c2Lll6aITcvBJphe6dEezI04ov6OLGI9s3I+d6FEZoKxh8q6Mrh7Zw+l5YjHTD+QLfVftFy0TzzRkGLv9xxPdTlyt6F34FwNCfd4p/blYlGKz2GJ19h1CSQ4rOj50t5wdcMddCboSktvRtchNUeUDJUw5tYtoF3dSRuM6oaXeRC6fh6KuQh2K8wvOxIQnC+t8w5QlrUkSbfCOAfZl8c0lXPT5bhjcFois8oFzv21BL3NxuIoekxzVqzcxqJfkiP3nRrMW89sRypaFPZK9Hev8oRhg3O9SFn385sz2LOUlfMoeeNOr5xvOXRBAGjyvl40+Eytky3ARQnUU0CALm/0wDtg1Pf7MFZKSGQTpzQE9vRFOg8w9QBub+4+isSAhRhbLENKfJggRgvozC95oqdfb/ZTGRzBKFSP5AI4Vw5PNUj06uFm8nBq2m8B47Vl8wFNmJBO49aEQo8Lw1mhwm7Dof+0XJnPKFEzzrAyDTMLc4t/one8P/RkPGOzn0W/5ye2LscL1KT4QEx7nYcbLdzzp7l0zc7RNFJjlYPq3vpWLo2o1AJAhYRn+Hvn4ZS57bkzFQgD0abkfX7Obu//8DMVPuymAOOLTEzeggqo/PFC2Iyo0oMbayBhESCOVT0vko6w0QUh4EfseKw02vRGvbubrwCgt6+pcE3WQgyzWWgrgJvFy+KUlNBiTdKS3i/EMmHCtj3YPL0Ee3MjGUvcWCF9mzBmqab3oEhN7eCe1HMr2fz+gFMTsohfXmVZx4qN89F9PyBn1p4sdJiDWhm3mzfibMR0w+Uh3EjCoi+gIYAH3An4kfDcbFRc8kq4iC7jBtIOdLVsFYtocZRut9QYT+VBygvxYQ30IEj9iGLPIVzflDqM7L5ScihbPet7fui2FntKLCju5Qy0cwQzry5Q8E6Njl+bEU0qcEfHP5f65C9iLPD0gtuhcAxbuQ59+qA7OrotMqOMiNIQbdYojTynJQE3XL0nOlaAyERJt7KJz+5AgzXvbQbtIfxVWiKeLUDq1aMBaUhLqGt8aNrVIV3JEcUG4eHNL0nDLEIPiGu2Olc1R5lZQ3gZN/hQkm2Go8vpA5p9s5JVI4D0a9wA9qdec6O/jw65dLaxmEDRBjJMNxOLr3HQatThXgBSBUW/4EHXbJhQSYeIGbaAZ8ZJFmyopSZhMq3xNJEQEEK33FkJ1c1u+H9bbYC1VBRSYtZySUlDyrafLErl4qgYZ/+JDN2fkbpmRflfnFlVIH99tioLATuX/Gq+WUC41jRNXCS2jcKLev+FavOR5gnAYrUv4ywxL1i+acetdGKOMHkwve//n7uVdACezOu/lFxMf+1n/oWpfdcDwXwlr390X53kwf0pFt5Lw7LfLRVfVHTBMfo9Oi7JbFvRSn4tWpRI8310zIi6f8huxJ4curE4XC1c1wKr5Ru9infEoOlciHWdWIbgKXIzVXQKXWYR2NRIBrClmDXPvSvXC/G8l1MIWARe0v9BPq52y8/vLLolzHGCO0HfiEYuiT3h9P701yBH5scQVW9Yti2PWXI8sQzoWd9412/FL+W38CzSz99PIGwqrASl3z7vEfYcA0HqEXRHNFULzVMPqNV2pAISZ5bQVQJsSMCp0ZYO00wDl/x4iGwihC16aaB/SUIQg719T9RBKiY71wEKnBmWl6Oo3qDIVnSvyMnETUUi+zqLlRVJ/GkJb178mrDLtNsGFr2uTjxASMs1vMFd/qIQxZ5tGeLMUl37Ai/wsn9Ll/UBCWFbgGR5PWNcdfKOjr55oKfc1LBDmYi5NJVuMjFvGwvN0QzcUn/t5oO5xr2/yd7MwUhRFGYd6mEhqTpsL71XgvGZZlh+UTF9tAhFBZ7U1DDbg970Tuh+3CENVEcEiQ49D2HWtGKjn5MqTqlVx6xNzVE7T2B7JEM9enIrVJnPsx/QQhEcT+9SCdkPtivCP5/kxFWUZGDqKI1SUqK3sc2F4flq+Hx5kNpa0XInsc+g8C4/41tMS/cO74bOr55AiDM6ytsyIF/20KtqgliE1K4+BX+T/ah0esVqIJP40AXv5sLvu32ISZV1xqq09gsHZN51q6pf7Fr+0DRUZzeIx0IVEBeV9uhz3kCitL8AtH6LTSiOvjvQRNbVymDsw+aaKiB3sWrJxFoJij35KfLdQreokp/EeDhyRnRmPrq1yUqwSdwhX04gR9gTgMhpZD2dX15TKLAjrFTMGmL9gL9NALQ06/TfKZRvgA793nP2DSDxIRP5inh8R2MSulQP9pFpLWtW9+4VnFQ52GntEPE4x3rBKrXpnwRrJifDMquXQ3oquTqys4LgQO6wsgBUfhZYtWmLX1xjnFErXN+DaZib8uPA6zQ3fIBqO5iLMSACYnXPWRKBoi1QQMqAr/1oA/oQQDFbIQq5pFD6I9r5xgD2mFI9retMZhBlOKrQujuDMz9lyBllIIOUfcJow3VgM4CHIB6Q3LTTvEw3BfBRvD1gqugmNhTgB6xhQ8ZvZShPutChM8KaGwSUf0nYByA7MFHGZL1Yo9Jh3E4bUAXoS/1nNf7trMjF/VRioSYIY136wwF+qBn/93moeCW5Rb0ZPbth7KmRvXssCE4vJJQsY44nOGjU9CzZ+wxfuO+8N3lssgmGCDI7DXbQddYW1yGq5W/F80cc4mrqQEtLm4nrFp7It3MX5xkDpNBeGoJvZtlEfOVM3uPiQIwIdVEQBSBKTswOUInObOlYhEmmVAdrWd6AEOetPQsmrqRbD+oGQzJXIRQfm45K7FlQcujxR2p9dnYvEb847NY60EeiL5dAHtYSutQvCisKxIRbj7h7FSeIlGqOOci0zHqobTVUzG26tV/AlmWf831JKEaEqAKLJmG1sb3+B+5fnnBVJNYAK/P6IR0vfYfp9IQQbTiGQhl2ftQyPK3287pTiEKEpNOg0B+PPcnacayo6GxUKNEEiAsnbgw+Ugwa1CGIahsBoVaFdabKJPBIkcUV9EKfwwqoJtQMfrMsWbc2WnBTRrHMVTKLEJpd+XMiAvMMZA0xojW/lOngezzl90FUaEANfwnDLnkkW5kKInETrIBTE9vJMfgbcm59TqsMVJikZdrQv4B0I04KH6JQ0m29zH8nQHawS5cOxVBHdAMElqBP8RCVXV9403qlVFEExL5IYO5buLO0VwlUUa1mR/bq2HuUdFTy0TZm17OLXet40MhNeZRpLIaH/4qfbjRkWwv4Xtv7gnWmJv9uRUvGfm3L+HTGfrALitVcpm9P2Q6EHvxL+xleDWqOt84GI9JSJyW4XvbgtJDEMmXCiqjH663tKHXaTnLaep1+GpQpffHONThJUuENkhpH3507NdlvQMOIWaaZU/ed19aGigFRyBL2aHAHoVP6waTmlZdB0xyK24BECIuo9HcSHDn8EUnmr41gWgqpkjSS1KdKehaZXlhzvG5HqXtg2EVpDgxPI9t1xdRE2pXaOhJUwFGQYenRVztIVg04UsuW6PBl9npjR6oFHGxKxTI/P9MUvDmP/wjKxDBFW3R9zA3K3u9E7v3N/3U8VrNTnT4ROpSrGCq9Q39SjGuvk8LESUafau2ZtkgtlphAmHm1eVyVR0WrACHdO/s8UsGUINq1upYWF8MoU4v0DGo4/xUEsZYdzU9b+TK1+QhBxjzZSdz5pUOiLPqBYHlMUTjPEJhWOg2TiLk7I7uVnGSJAdXCacaT9mrphemrfwR8VSEmGAMeG3qAUfYyiK9kTGprbp8B4KBbJWZwvi3bPGKGA0tHwlrJbO3CD+y1UAx9kkCODVp5PGSUmMr2cFGITfnTsI+yFo1+ur37sw5k6GJ2R5yxnZ4z3mVue5zRASR4CuxB8oMC3OkD5whAhyO0Sw+kUm8iwZUmQt/NUKTqpFzMk2sH6HL9bdKUwqrOIkx2gVii5HHJXuWhnXkpwNXwSSGxy56NOredCAfZczEIbF1oHT+FMopihk4EzdH8T4hyYZNEMcGX/RPwwoKgvTA0Svr0FEMw+P1Y7PciSO5+QFi4tBxR/Ds8rikx6dwrHNBw9fIRsD2lhW9ZvrIpm/KARTJulR1PDOfLLi1ctgDsJFh8CjxkoNMjuvm6tOGCKixtTYfkPmSA9VTdlbCN8NjcRqLn3U79ojCqFfkcsGwSFFRKo9Sjvgi91Jl5Z9yFF5hoLiZl51bE9Cdjalzo1688QTuv/10oejQuO0T2JAuYDFSLm/43dZXCO8UWNK4PfRBrV7794qj8G+bZLOPuxC2sQyuvvFpXPR7ekXgZ6ns6FFL3mq1x6wxnlTfaHGEZCpxk2cOt5LBowr/D5VM9riQgQQ0xmmLcg/NpsOCrDxqsKFFTff37lKLsRiMb0c7hWDRkq1x/eHvMpFir48ZBmrFAfeubTSvM32k0aO5cawGuSExngiB3wxVDh4Ak9IbAGdxgfGOskbPekGVlMjClcyJQeE+8Sl6MaB7C3r/eZOf0cE9iq13xM4QicpZt1AIg85BeOlQ2cnxkLA48CkwCqS90deX2IwQPw5mGZ4VtASk+qEtec6rEErGC6/9ly0BzjVBcNRGXeBdf4qH+QjwTkGyodiEr/qmOGm8lPutmCblE6Eiodv5X8ZwK84yiQI8rlyBZ05C67+wEDqxwzdKw8H3scyU79VD3h4erxn8jrhfPMEXuiPKqMWZpl7se6ZmcwQBYay8vU7+8A/+l5aUCBPNAb8F7/5PWVYD8y7EHI0CViEaw2P15zuzjPPmdS+kSvuhVXBM81UOoGgw4B5zgWWykbtmKhIXJS5BGpYJDj7dj5EGS7CaoOZ11W03h0XClPOBU9KoxU0sD0KwiXkbPzYoYaZprXdIP4eBtl/jpQ2P2TEACBDVKkNldi/r1JZE79uBRA4ZBmTQTt+n0tXP2hPOcZyIwaYLAi1LxunFk+5YUwEPovIXhcKwlsigPwjV6nPBT4eymWM3YLB20EbDE20UsZ9tqze8BTzkiIBce9g8WeH9poUE1Y9IAtdWOcVnI7wxMQg6RgbjHheFJ8Q+xOCrQYMC4waTMydTMyYm9vbGVhbiBgAACRchAACQAAAGR5EAABAAAAaW50ZWdlciBgAAAArHIQAAkAAABkeRAAAQAAAGNoYXJhY3RlciBgAMhyEAALAAAAZHkQAAEAAABzdHJpbmcgAORyEAAHAAAAYnl0ZSBhcnJheU9wdGlvbiB2YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = ux();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: e, module: A } = await lx(await g, I);
  return fx(e, A);
}
function Dx(g, I, e, A, t) {
  return xA(A - -340, I);
}
(function(g, I) {
  function e(i, C, B, n, a) {
    return xA(a - 767, n);
  }
  function A(i, C, B, n, a) {
    return xA(B - 20, C);
  }
  const t = g();
  function o(i, C, B, n, a) {
    return xA(B - -929, a);
  }
  for (; ; )
    try {
      if (-parseInt(e(1186, 1181, 1223, "vaiD", 1204)) / 1 * (parseInt(e(1167, 1169, 1190, "c^]y", 1183)) / 2) + parseInt(e(1174, 1204, 1186, "vWfn", 1179)) / 3 + parseInt(e(1220, 1177, 1209, "Hby9", 1201)) / 4 + parseInt(o(-483, -482, -504, -511, "tNG5")) / 5 * (parseInt(A(412, "vaiD", 437, 452, 422)) / 6) + -parseInt(e(1219, 1194, 1192, "EPn[", 1203)) / 7 + parseInt(e(1173, 1203, 1176, "rXRs", 1188)) / 8 * (parseInt(o(-488, -492, -488, -489, "rXRs")) / 9) + -parseInt(A(406, "iG8O", 423, 426, 397)) / 10 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Wg, -529126 * 1 + 75393 + 745248);
function xA(g, I) {
  const e = Wg();
  return xA = function(A, t) {
    A = A - (-3031 + 4211 * 1 + -779);
    let o = e[A];
    if (xA.nURuCz === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      xA.kYiUza = a, g = arguments, xA.nURuCz = !0;
    }
    const C = e[-7907 + -1245 * 8 + -1 * -17867], B = A + C, n = g[B];
    return n ? o = n : (xA.dQhznn === void 0 && (xA.dQhznn = !0), o = xA.kYiUza(o, t), g[B] = o), o;
  }, xA(g, I);
}
function Wg() {
  const g = ["tSonwSkTW4u", "WOxcVH9nCG", "teaZW5RdIq", "WPxcJmkDEqpcSYpdTM3cOJ42WPm", "twNcI8kUfW", "WPxcJCkDDaBcVIBdPMZcNtqdWRu", "eCoRW7LpkW", "z8oVdLubxmkIWRGKA8ka", "WPT+DSocic3cJ8keW7VdOXddLW", "xCkRWRm+ja", "fSoXW5Phoq", "WPTNCCk3W7VcJSkaAa", "tCk2W7XrkwuxoW", "WPLKW77cIge", "W57dMSkpz8o8", "gs3cTSkMl3PDWRi", "W4e4W47cT3jabYS", "fSoOWR80ja", "W7ZcOeRdU8oV", "fSoJW6fpma", "W7VcMg1qyCk2CmkrzmoEfbe", "obOGWRNdSejkWOTRWRn1q8oG", "aSkkWRnRdW", "W5VdJ8o/W58p", "WOX6gsHY", "E04VW5JcKNO8WQddPSoxoMb5", "vCknWQfVkG", "otLQW7iLWQ9ZWPVdTmkfFgK", "WP1+fCksqM3cGmkK", "umocqmk0", "WOXwyIa", "W4JcLCkICCoZ", "sSk7WRGtFYm7fSo3yKzJ", "tSk0WROFEg4zpSosyxa", "WQzRDwFcHG", "mCkAiCoTBSkZW5xdGSo+uCkksW", "WQLSW7ilW4pdKehcJG", "d14OW4ZdGa", "WO1WcJ43", "ws/dImomEG", "WPpdM1BdImoJ", "dCk4nKfV", "pIm/WPVdQG", "WRCPWPFcRwNdPmkwo8oyWRrMW7q", "mCoXASooWPu", "fSoAW6C6ucpcJ8o0rCoOy8oKkG", "W5vKW6RcHhe", "W63dT0NcT8kv", "W5O7vmoiW6u", "WP/cLGjjtW", "tSkYWRGEEc1VjmoyEervW5e"];
  return Wg = function() {
    return g;
  }, Wg();
}
function R0(g, I, e, A, t) {
  return xA(g - 58, A);
}
function Bt(g, I, e, A, t) {
  return xA(e - 25, A);
}
function yx(g, I, e, A, t) {
  return xA(e - -662, g);
}
function F0(g, I, e, A, t) {
  return xA(t - 320, g);
}
var Gi;
class wx {
  constructor() {
    p(this, Gi, !1);
  }
  async [(Gi = R0(493, 504, 503, "iG8O") + R0(508, 522, 531, "QqF%") + Dx(60, "tNG5", 79, 82), Bt(489, 442, 463, "ICbM"))](I) {
    function e(C, B, n, a, Q) {
      return Bt(C - 163, B - 348, Q - -327, a);
    }
    function A(C, B, n, a, Q) {
      return Bt(C - 174, B - 309, n - 758, a);
    }
    function t(C, B, n, a, Q) {
      return F0(n, B - 444, n - 51, a - 76, C - 298);
    }
    function o(C, B, n, a, Q) {
      return R0(n - -150, B - 238, n - 379, C);
    }
    function i(C, B, n, a, Q) {
      return F0(Q, B - 35, n - 4, a - 491, B - -992);
    }
    try {
      const C = I + (o("]u3C", 331, 354, 373, 360) + "/") + $o;
      await tB(C), this[A(1186, 1200, 1192, "ICbM", 1168) + o("G^Kc", 332, 356, 363, 372) + o("vTW$", 357, 340, 334, 343)] = !0;
    } catch {
      this[e(108, 118, 127, "(awu", 105) + A(1207, 1194, 1198, "rXRs") + e(131, 102, 84, "]u3C", 109)] = !1, console[A(1205, 1208, 1222, "8%Y7")]($o + (i(-261, -268, -291, -283, "tNG5") + i(-240, -244, -230, -256, "rXRs") + i(-287, -267, -286, -249, "AYMz") + i(-223, -241, -242, -220, "iG8O") + t(1061, 1063, "%F)h", 1039) + o("6HY*", 367, 355) + i(-255, -246, -234, -222, "vXFu") + A(1193, 1202, 1201, "vXFu") + i(-273, -249, -262, -237, "X#1u") + i(-284, -259, -236, -273, ")tWw") + o("LM&r", 369, 357) + e(133, 119, 122, "6HY*", 131) + t(1069, 1061, "K9[2", 1092) + t(1045, 1024, "(FG@", 1051) + "n."));
    }
  }
  [Bt(466, 441, 444, "rXRs") + yx("(awu", -249, -252) + Bt(417, 432, 427, "t3*X") + "ed"]() {
    function I(e, A, t, o, i) {
      return F0(t, A - 486, t - 468, o - 461, i - -1253);
    }
    return this[I(-487, -472, "iG8O", -490, -498) + I(-487, -508, "rhiN", -497, -493) + I(-532, -515, "0(m@", -523, -527)];
  }
}
class S0 extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function _(g, I) {
  var e = Ug();
  return _ = function(A, t) {
    A = A - (-2 * 4497 + 7810 + 482 * 3);
    var o = e[A];
    if (_.JCHofZ === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var y = 0, G = x.length; y < G; y++)
          s += "%" + ("00" + x.charCodeAt(y).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var x = [], s = 0, d, h = "";
        Q = i(Q);
        var r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      _.oEtmPp = C, g = arguments, _.JCHofZ = !0;
    }
    var B = e[-3095 + -1 * 5507 + 8602], n = A + B, a = g[n];
    return a ? o = a : (_.WObcWH === void 0 && (_.WObcWH = !0), o = _.oEtmPp(o, t), g[n] = o), o;
  }, _(g, I);
}
function nt(g, I, e, A, t) {
  return _(e - -920, t);
}
function ii(g, I, e, A, t) {
  return _(e - -527, t);
}
function Ug() {
  var g = ["WP/dISkpqJzYECo/", "vZb2W4CtWRDj", "WQdcSSkKWR9v", "WRjdqGHc", "W4jDW41LmG", "WQxcGmot", "W5/dJ8ojWOhdSW", "kCo6DmolDNxcLCkqur9GW63dVq", "dqLVW6uQ", "CSoaW6Wsva", "WQ7cHCkYW7LB", "WQdcMSo2W6W1", "ymkqW6RcNru", "W7RcPSoAW5iaW6tdIa", "WOSzWPddVtZdS8k6", "vHxcSMVdOa", "W59BW5W", "vSoUjdtdKG/dOmkDWPD8jHJcVq", "WPPxxhhcOKNdRuajg8kqnG", "vmoTktddKaRcQmkaWR1raJy", "D8oxW6ivuG", "mSotWRpdM1bljWpcGtNdSYi", "W53cUSkUbYBdJxfg", "DSkHjmk5jG", "WRGYWORdVCkO", "xG96WR8", "fcuiuCkfeqPsoCk5WPZcLWm", "rmkfcCkJWRK", "xI7cUsJcGq", "W53cTmo7CehcSI5/W6zhW51kW60", "W5HCWOuVgMmEo3acWQuc", "W6RdI8kl", "W4VdLmkUlbVdKCoq", "e8kXtNbC", "WRVcL8k5WQ9C", "ECoAm8oFCG", "eSk+yMRcJG", "W67dG8kCW6NcLq", "W5a3WONdJGa", "WQJcHCkVW6vA", "WP9sxhlcO0BdPNqMd8kzpa", "WPZcL8o1W5an", "lKtdKG", "W4jtW4e", "xu0OWQfWW6S7W78je2nSWR8", "WRe9WO3dV8kJ", "WQ1FW6VcSmkB", "mSoqWRZdMLfmbrhcVdtdUY8", "W51zWOuSg2Wvd18wWQWi", "tSo3WO5LDNzHFfFcHdWKW5C", "puT3W7q3", "bXvYjSopW5fh", "WRRcTSkJ", "E8oEmSoZFq", "WQnciXK4", "W54ZWPZdMr0", "A8oxjmoi", "W7ddJ8klW5pcJG", "n8kIvZ1m", "m0ZdJW", "imkdWRvuex8lbCk2wemp", "rSknW5uafsKr", "cHnOW4yG", "jSkYrsv3", "WOhdP8k4"];
  return Ug = function() {
    return g;
  }, Ug();
}
(function(g, I) {
  var e = g();
  function A(n, a, Q, E, x) {
    return _(E - 312, a);
  }
  function t(n, a, Q, E, x) {
    return _(Q - 149, E);
  }
  function o(n, a, Q, E, x) {
    return _(Q - -860, n);
  }
  function i(n, a, Q, E, x) {
    return _(Q - 223, x);
  }
  function C(n, a, Q, E, x) {
    return _(E - 449, Q);
  }
  for (; ; )
    try {
      var B = parseInt(t(460, 465, 461, "nZFs", 442)) / 1 + parseInt(t(448, 425, 450, "&vTR", 476)) / 2 + parseInt(C(718, 729, "RRC$", 745, 740)) / 3 * (parseInt(o("OvC)", -575, -560, -570, -582)) / 4) + -parseInt(t(407, 453, 426, "&bs%", 444)) / 5 * (parseInt(i(492, 483, 505, 516, "P^NZ")) / 6) + -parseInt(t(490, 487, 460, "VT]%", 476)) / 7 * (-parseInt(o("oB^v", -582, -592, -615, -560)) / 8) + parseInt(o("%wu(", -547, -577, -575, -604)) / 9 * (parseInt(A(625, "%wu(", 629, 638, 619)) / 10) + -parseInt(o("Nt7*", -601, -571, -598, -554)) / 11;
      if (B === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ug, -3 * -42281 + 10345 + 76939);
function HA(g, I, e, A, t) {
  return _(e - -752, I);
}
function Cg(g, I, e, A, t) {
  return _(A - 371, e);
}
function Ci(g, I, e, A, t) {
  return _(I - 909, t);
}
var Oe, Rt;
class Bi {
  constructor(I) {
    U(this, Oe);
    U(this, Rt);
    function e(i, C, B, n, a) {
      return _(i - -769, B);
    }
    this[o(289, 286, 256, 298, "nFXP") + A(-4, -9, "RRC$", -11)] = I;
    function A(i, C, B, n, a) {
      return _(n - -331, B);
    }
    function t(i, C, B, n, a) {
      return _(C - -198, i);
    }
    function o(i, C, B, n, a) {
      return _(C - -35, a);
    }
    try {
      Y(this, Oe, I[t("RRC$", 74, 87, 82, 55) + e(-499, -530, "Tk6i", -523, -479) + A(20, -34, "#7(k", -6, -14)] && JSON[t("Tk6i", 119, 137, 128, 87)](I[e(-467, -492, "&bs%", -471, -474) + o(261, 288, 307, 303, "vrNn") + t("39tm", 78, 50, 79, 52)])), Y(this, Rt, I[o(242, 255, 253, 240, "%wu(") + e(-456, -425, "9c6B", -473, -432)]);
    } catch (i) {
      console[t("rSbu", 109)](i);
    }
  }
  get [HA(-481, "9zIg", -467) + "id"]() {
    function I(t, o, i, C, B) {
      return HA(t - 261, C, B - 1408);
    }
    function e(t, o, i, C, B) {
      return HA(t - 377, C, t - 1002);
    }
    function A(t, o, i, C, B) {
      return HA(t - 85, o, t - -243);
    }
    return this[e(538, 559, 512, "dufl") + e(534, 528, 502, "4h$]")][A(-680, "jZ1k") + I(930, 975, 949, "19ei", 943)];
  }
  get [HA(-515, "DOMs", -485) + "s"]() {
    function I(A, t, o, i, C) {
      return HA(A - 367, i, o - 563);
    }
    function e(A, t, o, i, C) {
      return HA(A - 358, A, i - 408);
    }
    return this[I(123, 92, 102, "&bs%") + I(118, 113, 120, "D2)z")][e("nFXP", -34, -43, -52) + "s"];
  }
  get [HA(-456, "9c6B", -478) + nt(-609, -609, -622, -651, "#7(k")]() {
    function I(t, o, i, C, B) {
      return Cg(t - 15, o - 176, B, i - 226);
    }
    function e(t, o, i, C, B) {
      return Cg(t - 259, o - 85, C, o - -148);
    }
    function A(t, o, i, C, B) {
      return Cg(t - 61, o - 94, o, i - -869);
    }
    return this[I(901, 884, 891, 882, "hm75") + I(843, 889, 859, 875, "k!NX")][A(-170, "&vTR", -180) + e(552, 547, 540, "39tm")];
  }
  get [nt(-665, -647, -641, -651, "%wu(") + "b"]() {
    return m(this, Oe);
  }
  get [HA(-500, "S8ha", -472) + Ci(1210, 1190, 1200, 1211, "VT]%")]() {
    return m(this, Rt);
  }
  get [nt(-637, -608, -627, -617, "19ei") + HA(-443, "8SAQ", -455) + ii(-243, -197, -211, -240, "4h$]") + ii(-238, -229, -254, -239, "Tk6i")]() {
    var o, i;
    function I(C, B, n, a, Q) {
      return Cg(C - 438, B - 393, Q, n - -957);
    }
    function e(C, B, n, a, Q) {
      return Ci(C - 173, B - -1484, n - 364, a - 192, a);
    }
    function A(C, B, n, a, Q) {
      return nt(C - 25, B - 428, Q - 720, a - 489, n);
    }
    function t(C, B, n, a, Q) {
      return nt(C - 51, B - 100, C - 500, a - 168, B);
    }
    return !!((i = (o = m(this, Oe)) == null ? void 0 : o[e(-239, -265, -261, "*m^$") + e(-303, -306, -288, "4h$]")]) != null && i[e(-314, -300, -282, "S8ha") + A(115, 112, "9c6B", 149, 119) + I(-266, -253, -280, -251, "k!NX") + e(-309, -312, -334, "PB(^") + I(-285, -337, -315, -308, "he*n") + t(-115, "Nt7*", -110, -98) + e(-287, -289, -281, "#7(k") + "d"]);
  }
}
Oe = new WeakMap(), Rt = new WeakMap();
function Hg() {
  const g = ["W6dcOx1vWPe", "AtStWOG2", "e8oGwSkeWQ0", "W6akdSoKW4q", "pfWjdbmxAG", "W60SxCoOrW", "W6dcG3JcLSoeW5xcQmonW5OlWPldLhFcVW", "W7hcVmo0W4JcRa", "W5BcKGm", "bmovCSoysG", "WQNdPCkrWQ5I", "WQ9DWQzwlW", "BvGhhrK", "WO1ZemoJW7VdR8odjNhdTw/cJq", "W6lcMCo9W6hcLq", "ACodtIlcSW", "W6LmWRrT", "WO8mW7zwha", "W48bWPNcNCok", "gKDZWRBdHW", "W5/cOxPBW5K", "C8kPvCkGWOy", "W6FcJxDTW6e", "W4KqWOJcLCom", "WOLiW4/dR1SVWR3dUfGGWPVdNSksW6u", "gSozE8oIra", "WRFcJhtcRIK", "wfWrfXu", "wMJdSmkgW40", "WQXuWQ5HlW", "zXlcM8k+WOe", "h8kNW7SwaW", "WOWyW7NcL8khsmoabWj3rfPv", "gSoFuCoWya", "W5PnWQ7cIq", "WQzEWRLXja", "nCkGsmkqWOK", "zLmkdq", "WPldS8kWexm", "rSkKnmoUcW", "WRuiW7y", "WRLqWRHR", "mCo7WQxdHmk9", "W6xcJx8", "tc0OWP09", "WR57cmk1gNb6FdT+c8opw1a", "jXraWQNdHq", "CmkYWQO", "zINdQmkmW4y", "W606AXH2", "ymocwGldOq", "W7KswrPm", "WR0FW7zxbW", "AYBdR8kkWO4", "fSorWP/cL8ku", "WQjyWQLGja", "WQpdRSomW78S", "zLin", "W5CvjSkPW5a", "y8oyWPXmq1rCW6P4veLFWOi", "rZ4ZWO0M", "WRldGcFdLCkb", "WR4cW7z9fa", "t8k/jCoKfW", "W4hdOaJcUfG", "ECkPqmkGWPu", "hgDuWPBdTW", "yIFdUW", "WQldHIFdI8kx", "W5tcNbpdNSkg", "WPtdUmkTbZy", "FK5r", "E8omtYK", "pmkgW4Wzbq", "W4NdPHG", "WOhcSLT5ia", "WQRdQ8kmW6a", "WOhdVmkVhtC", "lr1p", "W7RdLJfLWOK", "WONdPCofW4Pe", "W4G1s8kMWQm", "WQ/dN8owWRFcKq", "W77dGbq", "y8kDWPtdU8kE", "W5hcLbZdKSks", "DSkZvmkrWOG", "W6fYamkBia", "ymoexIldVq", "WRddNCkXEq", "Emk/WRJdJG", "W65jWR7dJW", "kmk4cSkwWPC", "aSoQua", "W4RcKapdPmkc", "zCkdW6JcKWW", "W6GWCq9S", "W54fWOhcSmob", "WRuuW6S1WRDJWPLsicTvhW", "W7vYbW", "h8oQcCkmWOC", "W4KqWOxcQG", "rCkKi8oK", "W78fWP7cTmkf", "W6voWQK", "rmkiWPNdSSks", "W6LjWRNdISkv", "pCoLt8oUrW", "WPtcNe9gla", "iGbhk3a", "W6DcWRn3W7C", "W5uMtCk+", "WRqeW6DDgW", "WOpdKCoAW5Wv", "WRFdNmkJnNa", "qKXrrSo/", "WRJdMZ8XAa0+WQ7cHhVcG8kjpq", "sZOHWO87", "qCoMs8kmWOq", "W6uSELvY", "qSkIlSoY", "WRz0WR0UWOa", "W4VdPGJcLfq", "W7dcLSo8W6RcRa", "WPxdMSk0C3C", "bCo1zSouwG", "W7DVhmkBma", "WRRdKZOZAaTcWRFcQfhcHSk4", "W5GfWP/cQSoa", "W65UkSkdjq", "CeqFBdCiW7CMxNaroZaj", "hmoGta", "mCkDW4O0ga", "h1Tl", "W60wWP/cTSox", "ACkSW6tcUCk6", "gCoDWOVcGCkv", "WRxcJghdQGW", "WPCRtCkZWQ8", "WRtdUCoxW4uS", "WO7dTwvXW7uaW4xdRW", "WR5LWPCMWPy", "WR5dWQnRpG", "gSoWqSoNsW", "WRdcGgxdOdm", "sG/dLmkjWR0", "qINdLSktWOK", "FCkNu8kgWO8", "W5ZcI35RmW", "mqbbnNC", "i8kReCkgWOW", "WPvauCoZWQ3cGYBdRWqPDxa", "eSorWOxcP8ke", "W7BcUmouWRCZz8kyWRTpoH7dRfdcMG", "mmogWOpcI8kd", "W4NdPH/cMfS", "W6tdHbrQWPm", "W45jWRJdLmoq", "h8kvW68Pcq", "d8kOW57cGmkIWPCp", "WPtdGdRdICka", "WRZcJxpdQ2a", "E8omtYNdUG", "W77cVWDXda", "W5e0C8kXWRK", "A1ixpbe", "b8oBWOm", "FCk4WR3dHmkv", "W5tcGtZdKSkl", "WR/dTCoaW6WR", "DvTqxmoH", "W5eKqCk+WRK", "oCkhW4Kx", "amoybG", "gLPfWRq", "r8kHW4/cGJ4", "WOxcL8kLhCkC", "W5qacCkLW7G", "hCovWOxcH8kz", "dX0iheW", "WPrVW5edWQW", "W73cQaf9fG", "l8kLeCkGWOK", "W4SrWP7cRCok", "W4ydWP4", "bmoirmoutq", "uSkUW4C", "wX0peb8", "ACoFtYJdOq", "W6/cLSo6W6FcRq", "WRrPWOuUWOi", "sI01WOe8", "EeHwumo7", "Cmk0vCkkWPu", "WRFcHhm", "W5pcR3P9W5W", "W6GyWOVcTW", "ySkNzmkmWQS", "W6C2Fb5W", "gJi+WPnQ", "W61dWRGTW6K", "W73dUH19ea", "y1qahbi", "hvnF", "W4hcJtJdJ8kF", "j8kJbSkaWOO", "EfWrfXu", "A8ocWO9Cq2RdIIb7DmobWO7dSa", "W7BdMSkYEh4", "WOFcUuzVfq", "WOLpW4JdQ1KIWRZdVw89WQldGSkTW4u", "W5SCWPhcRaG", "WPNdVCobW50w", "W5WbWPxcRq", "WRldSCog", "W606FG9R", "W6mkhmobW54", "W6W8sSo4tq", "zrtdMmkFWQa", "W5TgWRNdGSoL", "W5NcGrJdIa", "fmoshbJcRa", "WR8iW7b0ha", "W6xcKSoQW6dcOa", "emofbYFcTG", "lmkVeCkHWOS", "jSkdc8kmWPa", "W7uIpmobW7K", "WO3dPSkVW6fc", "W6C2EW", "W4pdOaNcK1e", "DezwDSo+", "ss0IWOS", "W6jVb8kAnG", "jCoeqSojAq", "W4xdJcfgWR0", "W45AWQpdICob", "W64BrCkeW5m", "WOfYt8kzWO7cPmobea", "W5xdVrxcK0e", "lbDA", "WP7dVmkVhsK", "FaBdVCkcW4S", "sSkTW5xcMdO", "DSk0smkwWPq", "WQS5Ca5W", "ymoerYldTW", "WQRdK8osWR3cRG", "qSo/sIVdGq", "W4BdVrpcJKy", "WO/cHSkVamkC", "f8osdhO", "W4mGlSkaW6C", "WR8kW61Ypa", "W6jiWRX3W7a", "WOdcISk4k8ko"];
  return Hg = function() {
    return g;
  }, Hg();
}
function kA(g, I, e, A, t) {
  return IA(A - -915, t);
}
(function(g, I) {
  function e(B, n, a, Q, E) {
    return IA(E - -798, n);
  }
  function A(B, n, a, Q, E) {
    return IA(Q - 632, B);
  }
  function t(B, n, a, Q, E) {
    return IA(n - 567, B);
  }
  function o(B, n, a, Q, E) {
    return IA(Q - 381, a);
  }
  const i = g();
  function C(B, n, a, Q, E) {
    return IA(a - 827, E);
  }
  for (; ; )
    try {
      if (-parseInt(o(698, 736, "S[fR", 694, 633)) / 1 + parseInt(A("JUt7", 900, 962, 964, 871)) / 2 * (parseInt(e(-344, "LWFa", -228, -358, -339)) / 3) + -parseInt(t("MlLt", 926, 866, 1e3, 904)) / 4 + -parseInt(C(1301, 1261, 1267, 1196, "cGxy")) / 5 * (parseInt(o(797, 725, "xMl&", 808, 745)) / 6) + -parseInt(e(-591, "kNzL", -447, -386, -474)) / 7 + parseInt(C(1340, 1389, 1280, 1194, "(&SM")) / 8 + parseInt(t("hAx^", 997, 921, 1008, 1005)) / 9 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Hg, 456968 + 15 * 28043);
function hA(g, I, e, A, t) {
  return IA(g - -453, t);
}
function vA(g, I, e, A, t) {
  return IA(A - 33, t);
}
function IA(g, I) {
  const e = Hg();
  return IA = function(A, t) {
    A = A - (6968 + -1 * -7852 + -14571);
    let o = e[A];
    if (IA.qAwArh === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      IA.wdCbTg = a, g = arguments, IA.qAwArh = !0;
    }
    const C = e[1831 * -1 + 9223 * -1 + 5527 * 2], B = A + C, n = g[B];
    return n ? o = n : (IA.zRiYDc === void 0 && (IA.zRiYDc = !0), o = IA.wdCbTg(o, t), g[B] = o), o;
  }, IA(g, I);
}
function tA(g, I, e, A, t) {
  return IA(A - -818, e);
}
function lA(g, I, e, A, t) {
  return IA(e - 412, g);
}
var ki, bi, Ni;
class px {
  constructor(I) {
    p(this, Ni);
    p(this, bi, [hA(-201, -269, -165, -189, "Oh7i") + tA(-431, -429, "eMR!", -318) + "ic", lA("S[fR", 738, 850) + vA(511, 471, 417, 452, "PgHv") + "ic"]);
    p(this, ki);
    function e(A, t, o, i, C) {
      return IA(C - -41, i);
    }
    this[e(439, 356, 498, "r5yY", 441) + e(332, 260, 248, "gA*n", 271) + "d"] = I;
  }
  async [(Ni = hA(-90, -184, -131, 28, "J7(k") + "se", bi = tA(-464, -478, "s3EX", -558) + hA(-32, 34, 56, -91, "PIpN") + tA(-677, -644, "JUt7", -555) + tA(-510, -618, "UB)r", -554), ki = tA(-431, -466, "tpBN", -550) + hA(-6, 18, 93, 55, "qp9j"), tA(-477, -468, "gA*n", -481))](I) {
    function e(C, B, n, a, Q) {
      return tA(C - 266, B - 299, B, Q - 1674);
    }
    const A = await this[i("F54K", 1155, 1344, 1278, 1282) + t(1027, 1117, "kNzL", 1144, 1139) + o(1133, "JUt7", 1360, 1180, 1253)](I);
    await Promise[o(1145, "Bopw", 1285, 1237, 1173) + t(1348, 1296, "UsPa", 1417, 1361)]([this[t(1252, 1221, "Rs7T", 1328, 1248) + e(1054, "IRqZ", 1162, 1250, 1158) + "d"][t(1406, 1415, "i@xb", 1372, 1358)](I), this[t(1443, 1298, "U)6N", 1226, 1321) + o(1068, "aLI(", 1190, 1044, 1153) + "e"](A)]);
    function t(C, B, n, a, Q) {
      return lA(n, B - 209, Q - 472);
    }
    function o(C, B, n, a, Q) {
      return vA(C - 368, B - 494, n - 21, Q - 829, B);
    }
    function i(C, B, n, a, Q) {
      return lA(C, B - 452, Q - 431);
    }
    this[o(1349, "sVJE", 1324, 1142, 1239) + i("fi8E", 1039, 1097, 1044, 1166) + i("rStu", 1414, 1388, 1365, 1318)]();
  }
  async [hA(-104, -195, -12, -73, "PgHv") + hA(-29, -152, -30, -26, "Oh7i") + "se"](I) {
    function e(C, B, n, a, Q) {
      return lA(C, B - 116, B - 377);
    }
    function A(C, B, n, a, Q) {
      return lA(C, B - 151, n - -1234);
    }
    function t(C, B, n, a, Q) {
      return vA(C - 29, B - 493, n - 307, a - 822, Q);
    }
    function o(C, B, n, a, Q) {
      return tA(C - 100, B - 400, B, C - 1356);
    }
    function i(C, B, n, a, Q) {
      return vA(C - 420, B - 403, n - 156, a - 735, n);
    }
    try {
      if (A("MlLt", -391, -491, -532, -536) !== e("i@xb", 1155, 1136, 1108, 1105)) {
        const C = await fetch(I);
        if (!C.ok) {
          if (A("XaPM", -379, -323, -308, -243) === e("3gss", 1247, 1121, 1214, 1178)) throw new Error(A(")@YE", -523, -480, -474, -402) + e("S[fR", 1260, 1375, 1202, 1175) + t(1446, 1377, 1458, 1356, "iu0[") + o(874, "qp9j", 917, 841, 901) + "d.");
          {
            _0x5c9185 instanceof _0x26e007 ? _0x5005b0[A("hAx^", -365, -444, -526, -471)]() : _0x1c1d77 instanceof _0x8b92a6 && _0x39392c[A("XkVI", -557, -545, -523, -485)](_0x2b7835);
            const B = {};
            B[A("XkVI", -416, -393, -386, -400) + o(811, "PgHv", 800, 804, 724)] = !1, B[e("iu0[", 1270, 1203, 1183, 1266) + "s"] = [], B[e("WQ8S", 1251, 1234, 1210, 1179) + A("i@xb", -440, -319, -387, -247)] = [], B[i(965, 1062, "eMR!", 1066, 1187) + o(932, "UB)r", 899, 1057, 912) + e("tpBN", 1262, 1310, 1372, 1323)] = void 0, B[A("!m4C", -463, -546, -556, -648)] = function() {
            }, B[A("fi8E", -268, -339, -217, -399) + A("hAx^", -586, -538, -580, -551)] = "", this[t(1332, 1361, 1188, 1264, "hAx^") + e("!m4C", 1149, 1047, 1219, 1235)] = new _0x23731a(B);
          }
        }
        this[i(1172, 1067, "WQ8S", 1156, 1221) + "se"] = await C[t(1216, 1090, 1216, 1112, "fi8E")]();
      } else {
        _0x179baf[t(1259, 1164, 1232, 1245, "K)$0")](o(918, "(&SM", 863, 795, 849) + i(1224, 1142, "gA*n", 1255, 1287) + e("WQ8S", 1104, 1135, 1077, 1045) + i(1032, 1259, "S[fR", 1149, 1125) + o(872, "JUt7", 847, 831, 775)), this[i(1165, 1347, "Rs7T", 1223, 1137) + "se"] = void (-167 * -7 + -9259 + -4045 * -2);
        return;
      }
    } catch (C) {
      if (e("cGxy", 1111) !== A("F54K", -423, -409)) throw new _0x1ab569(A("%UNL", -457, -492) + e("r5yY", 1189) + o(999, "U)6N") + t(1137, 1112, 1035, 1129, "Rs7T") + ".");
      this[t(1273, 1118, 1159, 1218, "J7(k") + "se"] = void (-29 * -23 + 1433 * -3 + 454 * 8), console[A("J7(k", -468, -483)](C);
    }
  }
  async [kA(-630, -661, -643, -533, "aLI(") + hA(-9, 35, -59, -46, "U)6N") + "e"](I) {
    var C;
    function e(B, n, a, Q, E) {
      return tA(B - 260, n - 415, B, E - 1669);
    }
    function A(B, n, a, Q, E) {
      return vA(B - 245, n - 185, a - 446, E - 282, Q);
    }
    this[A(620, 617, 521, "Rs7T", 608) + A(846, 718, 789, "r5yY", 765)] = void (13923 + -273 * 51);
    function t(B, n, a, Q, E) {
      return kA(B - 438, n - 127, a - 186, a - 624, Q);
    }
    function o(B, n, a, Q, E) {
      return tA(B - 221, n - 137, E, Q - 186);
    }
    function i(B, n, a, Q, E) {
      return hA(Q - 241, n - 67, a - 116, Q - 469, n);
    }
    if (!I)
      if (A(581, 498, 524, "C9f#", 593) !== t(21, -87, 1, "WQ8S")) {
        console[t(80, 54, 181, "MlLt")](A(813, 813, 895, "PIpN", 795) + t(-10, 9, 37, "G3#3") + i(185, "sVJE", 208, 126) + A(715, 677, 565, "F54K", 671) + o(-277, -312, -359, -337, "tpBN")), this[A(696, 760, 701, "PgHv", 813) + "se"] = void (-1279 * -5 + -1138 * -7 + -4787 * 3);
        return;
      } else {
        const B = _0x4bef2c[o(-52, -90, -220, -175, "JUt7")](this[o(-137, -144, -168, -220, "4d@e") + "se"]);
        return (C = B == null ? void 0 : B[e("PgHv", 1165, 1287, 1266, 1247) + e("eMR!", 1178, 1163, 1244, 1255)]) == null ? void 0 : C[o(-331, -434, -279, -371, "[@eO") + o(-186, -239, -348, -249, "IN&L")];
      }
    await this[t(46, 200, 172, "iu0[") + o(-338, -450, -297, -370, "%UNL") + "se"](I);
  }
  async [hA(-187, -183, -211, -123, "4d@e") + lA(")@YE", 853, 766) + kA(-525, -394, -353, -419, "kNzL")](I) {
    const e = await fetch("" + I + this[C(749, "!m4C", 814, 742) + C(885, "UB)r", 823, 793) + C(495, "MVou", 679, 578) + i(718, 607, "J7(k", 750)][0]), A = e.ok ? 0 : -6342 + -6343 * -1;
    function t(B, n, a, Q, E) {
      return vA(B - 169, n - 125, a - 316, Q - 867, B);
    }
    function o(B, n, a, Q, E) {
      return kA(B - 233, n - 233, a - 57, Q - -10, a);
    }
    function i(B, n, a, Q, E) {
      return hA(B - 751, n - 82, a - 99, Q - 202, a);
    }
    function C(B, n, a, Q, E) {
      return kA(B - 488, n - 199, a - 165, Q - 1240, n);
    }
    return "" + I + this[C(694, "PIpN", 798, 766) + t("C9f#", 1350, 1269, 1385) + o(-552, -624, "[za9", -611) + i(699, 799, "fi8E", 739)][A];
  }
  [vA(285, 196, 413, 313, "JUt7") + tA(-261, -281, ")@YE", -364) + "s"](I) {
    function e(t, o, i, C, B) {
      return lA(C, o - 347, i - -1104);
    }
    function A(t, o, i, C, B) {
      return hA(t - 734, o - 325, i - 37, C - 12, o);
    }
    I[e(-446, -447, -330, "4d@e") + "ch"]((t) => console[A(622, "Bopw", 681, 521)](t));
  }
  [tA(-262, -278, "Bopw", -376) + lA("4d@e", 660, 729) + vA(427, 267, 423, 376, "xMl&")](I) {
    function e(A, t, o, i, C) {
      return kA(A - 422, t - 41, o - 143, C - 690, o);
    }
    I[e(11, 78, "qp9j", 53, 96) + "ch"]((A) => console[e(150, 116, "Oh7i", 256, 164)](A));
  }
  [lA("fi8E", 714, 730) + hA(-42, -88, 17, -36, "S[fR")]() {
    function I(t, o, i, C, B) {
      return kA(t - 96, o - 334, i - 192, B - 1480, i);
    }
    function e(t, o, i, C, B) {
      return kA(t - 132, o - 342, i - 414, o - 1037, C);
    }
    function A(t, o, i, C, B) {
      return vA(t - 34, o - 221, i - 173, t - 168, i);
    }
    return window[A(574, 523, "MlLt") + e(400, 479, 421, "gA*n")][I(908, 812, "Bopw", 892, 900) + e(328, 380, 262, "F54K")];
  }
  [hA(-56, -119, -145, -84, "fi8E") + kA(-448, -407, -602, -483, "MlLt") + lA("sVJE", 664, 782)]() {
    function I(i, C, B, n, a) {
      return tA(i - 423, C - 148, i, B - 1357);
    }
    function e(i, C, B, n, a) {
      return tA(i - 13, C - 250, B, C - 837);
    }
    function A(i, C, B, n, a) {
      return vA(i - 121, C - 442, B - 353, n - -800, a);
    }
    function t(i, C, B, n, a) {
      return kA(i - 60, C - 160, B - 458, B - 771, i);
    }
    function o(i, C, B, n, a) {
      return tA(i - 321, C - 383, i, a - -88);
    }
    try {
      if (o("C9f#", -517, -569, -409, -499) === A(-460, -373, -316, -362, "K)$0")) {
        if (!this[o("J7(k", -460, -435, -546, -543) + "se"]) {
          if (A(-333, -382, -166, -263, "UB)r") !== e(299, 320, "!m4C", 326, 328)) throw new S0(A(-577, -370, -446, -486, "UsPa") + A(-382, -328, -397, -349, "qp9j") + e(280, 372, "G3#3", 445, 271) + t("XkVI", 346, 243, 338, 153) + ".");
          this[e(567, 521, "gA*n", 583, 527) + "se"] = void (1 * 3053 + 4520 + -7573 * 1), _0x5aec3e[A(-188, -209, -391, -279, "WQ8S")](_0x53d0a2);
        }
        if (!this[A(-210, -289, -323, -302, "gA*n") + A(-520, -549, -416, -462, "[@eO") + "d"][e(478, 483, "S[fR", 539, 464) + e(402, 289, "r5yY", 310, 319) + I("sVJE", 717, 824, 766, 898) + "ed"]())
          throw I("C9f#", 883, 872, 825, 851) === t("LWFa", 234, 291, 382, 339) ? new _0x568812(e(359, 315, "s3EX", 419, 287) + e(418, 313, "aU9w", 231, 430) + o("iu0[", -448, -356, -381, -405) + A(-408, -479, -428, -478, "PgHv") + "d.") : new S0(t("cGxy", 143, 156, 142, 209) + A(-542, -435, -402, -441, "U)6N") + o("PIpN", -347, -360, -306, -416) + A(-424, -376, -420, -477, "WQ8S") + ".");
        this[t("r5yY", 309, 248, 338, 303) + I("[za9", 1042, 1028, 983, 1005)] = new Bi(hx(this[e(283, 374, "Bopw", 390, 412) + "se"], this[t("s3EX", 109, 159, 211, 165) + o("(&SM", -481, -473, -615, -530)]())), this[I("XkVI", 1056, 965, 968, 969) + A(-238, -407, -387, -307, "w5K[") + "s"](this[t("qp9j", 103, 144, 141, 142) + e(347, 339, "cGxy", 295, 431)][o("XkVI", -582, -736, -733, -629) + "s"]), this[o("hAx^", -363, -484, -416, -457) + A(-335, -562, -316, -440, "gA*n") + I("^V4G", 965, 910, 943, 792)](this[e(387, 380, "w5K[", 414, 308) + A(-442, -541, -334, -419, "G3#3")][t("IN&L", 201, 312, 240, 347) + e(538, 513, "U)6N", 467, 557)]);
      } else this[o("^V4G", -524, -622, -585, -631) + o("Bopw", -694, -461, -563, -577) + "d"] = _0x2af672;
    } catch (i) {
      if (t("IN&L", 262, 135) === e(497, 465, "%UNL")) _0x4a610a[I("G3#3", 996, 906)]();
      else {
        if (i instanceof S0)
          if (A(-266, -330, -369, -270, "qp9j") === A(-493, -452, -352, -409, "UsPa")) i[e(490, 452, "i@xb")]();
          else {
            if (!this[o("K)$0", -453, -372, -429, -439) + "se"]) throw new _0x5d1bcb(A(-186, -409, -297, -288, "hAx^") + o("i@xb", -574, -667, -435, -560) + e(531, 480, "U)6N") + A(-333, -297, -508, -380, "XkVI") + ".");
            if (!this[o("cGxy", -444, -437, -297, -411) + t("[za9", -5, 123) + "d"][I("IN&L", 920, 918) + I("C9f#", 918, 964) + I("UB)r", 816, 924) + "ed"]()) throw new _0x22453f(I("fi8E", 989, 942) + I("Oh7i", 870, 953) + I("Rs7T", 1005, 961) + A(-388, -478, -363, -458, "C9f#") + ".");
            this[t("aU9w", 312, 332) + t("^V4G", 221, 348)] = new _0x1549c0(_0x274f20(this[A(-252, -256, -386, -298, "F54K") + "se"], this[I("r5yY", 794, 808) + t("eMR!", 256, 172)]())), this[o("Rs7T", -637, -749, -710, -623) + I("fi8E", 1003, 973) + "s"](this[e(325, 287, "tpBN") + A(-370, -218, -312, -278, "[za9")][A(-323, -389, -477, -415, "4d@e") + "s"]), this[o("XkVI", -598, -589, -471, -480) + A(-362, -207, -235, -319, "xMl&") + A(-430, -365, -538, -459, "UB)r")](this[e(383, 411, "r5yY") + A(-500, -389, -519, -447, "cGxy")][e(209, 269, "gA*n") + I("fi8E", 953, 1023)]);
          }
        else i instanceof Error && (e(316, 275, "F54K") !== A(-434, -366, -446, -470, "4d@e") ? console[e(579, 489, "^V4G")](i) : _0x1354a4[I("aU9w", 873, 838) + "ch"]((B) => _0x2b81d4[t("WQ8S", 275, 228)](B)));
        const C = {};
        C[e(449, 338, "i@xb") + I("Rs7T", 825, 913)] = !1, C[e(622, 512, "qp9j") + "s"] = [], C[o("[za9", -459, -458, -373, -483) + e(494, 505, "LWFa")] = [], C[e(365, 278, "PgHv") + e(381, 344, "C9f#") + A(-315, -287, -262, -374, "IRqZ")] = void (-6550 + 262 * 25), C[o("J7(k", -429, -426, -530, -504)] = function() {
        }, C[I("qp9j", 944, 925) + t("IRqZ", 237, 287)] = "", this[I("!m4C", 902, 883) + e(569, 497, ")@YE")] = new Bi(C);
      }
    }
  }
  [vA(349, 222, 405, 298, "tpBN") + lA("MVou", 853, 787) + tA(-412, -406, "^V4G", -403) + "t"]() {
    function I(e, A, t, o, i) {
      return lA(t, A - 236, o - -285);
    }
    return this[I(487, 534, "%UNL", 572) + I(467, 483, "cGxy", 447)];
  }
  [tA(-338, -289, ")@YE", -366) + lA("w5K[", 718, 780) + kA(-704, -545, -521, -629, "G3#3")]() {
    var i;
    function I(C, B, n, a, Q) {
      return lA(Q, B - 469, n - 352);
    }
    function e(C, B, n, a, Q) {
      return tA(C - 480, B - 114, n, a - 293);
    }
    function A(C, B, n, a, Q) {
      return tA(C - 57, B - 204, a, B - 6);
    }
    function t(C, B, n, a, Q) {
      return kA(C - 320, B - 245, n - 468, a - 1332, n);
    }
    if (!this[I(980, 987, 1013, 886, "r5yY") + "se"])
      return A(-588, -541, -574, "s3EX") !== A(-461, -461, -405, "PgHv"), void 0;
    function o(C, B, n, a, Q) {
      return hA(C - -394, B - 410, n - 187, a - 54, B);
    }
    try {
      if (o(-452, "rStu", -580, -517, -555) !== t(754, 767, "(&SM", 689, 616)) {
        const C = JSON[t(829, 950, "fi8E", 845, 856)](this[t(888, 750, "UB)r", 786, 696) + "se"]);
        return (i = C == null ? void 0 : C[e(-195, -69, "eMR!", -115, -195) + I(1167, 1211, 1111, 1153, "K)$0")]) == null ? void 0 : i[I(1143, 985, 1025, 1062, "[@eO") + o(-507, "4d@e", -547, -585, -618)];
      } else throw new _0x15895c(o(-441, "JUt7", -328, -525, -474) + e(-191, -221, "(&SM", -215, -216) + t(676, 746, "rStu", 704, 630) + A(-351, -376, -422, ")@YE", -409) + ".");
    } catch (C) {
      if (e(-85, -99, "K)$0", -141) === I(1284, 1109, 1207, 1235, "C9f#")) {
        C instanceof Error && (A(-428, -505, -378, "[za9") !== A(-316, -404, -517, "MVou") ? _0xdee51a[I(1270, 1341, 1255, 1365, "!m4C")](_0xbcab4e) : H[e(-243, -197, "qp9j", -160) + I(1106, 1134, 1230, 1262, ")@YE")](C));
        return;
      } else {
        _0x38b2fc instanceof _0x4eb588 && _0x3fc2cc[A(-544, -462, -541, "WQ8S") + o(-448, "XkVI", -499, -407)](_0x523365);
        return;
      }
    }
  }
}
const e0 = class e0 extends px {
  static getInstance() {
    if (!this._instance) {
      const I = new wx();
      this._instance = new e0(I);
    }
    return this._instance;
  }
};
p(e0, "_instance");
let hI = e0;
var mx = Symbol.for("preact-signals");
function XI() {
  if (Ke > -10399 + -65 * -160)
    Ke--;
  else {
    for (var g, I = !1; void (3690 + 49 * 29 + -5111) !== yt; ) {
      var e = yt;
      for (yt = void (-5689 + -1 * 157 + 74 * 79), lI++; void (212 * 45 + 1 * 3307 + -12847) !== e; ) {
        var A = e.o;
        if (e.o = void 0, e.f &= -(-7221 + -11 * 604 + 1 * 13868), !(3274 * -2 + 3437 * -1 + -3331 * -3 & e.f) && oB(e)) try {
          e.c();
        } catch (t) {
          !I && (g = t, I = !(6 * 1290 + -6896 + -844));
        }
        e = A;
      }
    }
    if (lI = 0, Ke--, I) throw g;
  }
}
var O = void (9579 + 309 * -31), yt = void (5109 + 353 * -9 + 2 * -966), Ke = 13 * -606 + -528 * -14 + 54 * 9, lI = 107 * -17 + -2198 + 4017 * 1, Kg = -2284 * 4 + 128 + 9008;
function gB(g) {
  if (void (1 * -2479 + -276 * -6 + 823) !== O) {
    var I = g.n;
    if (void (3 * -1591 + -6461 + 11234) === I || I.t !== O)
      return I = { i: 0, S: g, p: O.s, n: void (554 + -32 * 241 + 7158), t: O, e: void (481 * 3 + -1 * -1900 + 1 * -3343), x: void 0, r: I }, void (2647 + 641 * -7 + 1840) !== O.s && (O.s.n = I), O.s = I, g.n = I, 5801 * -1 + -9279 + 7556 * 2 & O.f && g.S(I), I;
    if (-(-8654 + -5244 * 1 + 3 * 4633) === I.i)
      return I.i = -2698 * -3 + -2 * 992 + 1222 * -5, void (-24 * 310 + -601 * 6 + -1578 * -7) !== I.n && (I.n.p = I.p, void (-6668 * -1 + -1 * -8369 + -15037 * 1) !== I.p && (I.p.n = I.n), I.p = O.s, I.n = void 0, O.s.n = I, O.s = I), I;
  }
}
function nA(g) {
  this.v = g, this.i = 9697 * -1 + -3119 + 3 * 4272, this.n = void (10861 + 10861 * -1), this.t = void (-7 * 625 + -5852 + 10227);
}
nA.prototype.brand = mx, nA.prototype.h = function() {
  return !(95 * 8 + 7986 + -8746);
}, nA.prototype.S = function(g) {
  this.t !== g && void (-19 * 225 + 5279 + -2 * 502) === g.e && (g.x = this.t, this.t !== void 0 && (this.t.e = g), this.t = g);
}, nA.prototype.U = function(g) {
  if (void (3625 + 7 * -431 + -19 * 32) !== this.t) {
    var I = g.e, e = g.x;
    I !== void 0 && (I.x = e, g.e = void (-3035 + 1 * -7225 + 10260)), void (1 * -5411 + 1 * -3013 + 8424) !== e && (e.e = I, g.x = void (5697 + -1 * -972 + -117 * 57)), g === this.t && (this.t = e);
  }
}, nA.prototype.subscribe = function(g) {
  var I = this;
  return zI(function() {
    var e = I.value, A = O;
    O = void (-6674 + 1 * -2293 + 49 * 183);
    try {
      g(e);
    } finally {
      O = A;
    }
  });
}, nA.prototype.valueOf = function() {
  return this.value;
}, nA.prototype.toString = function() {
  return this.value + "";
}, nA.prototype.toJSON = function() {
  return this.value;
}, nA.prototype.peek = function() {
  var g = O;
  O = void (797 * -6 + 8712 + -655 * 6);
  try {
    return this.value;
  } finally {
    O = g;
  }
}, Object.defineProperty(nA.prototype, "value", { get: function() {
  var g = gB(this);
  return void (-3504 + 543 * -1 + 4047) !== g && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if (lI > -626 * 1 + 3 * -1429 + 5013) throw new Error("Cycle detected");
    this.v = g, this.i++, Kg++, Ke++;
    try {
      for (var I = this.t; void (-5507 + 1 * 5507) !== I; I = I.x) I.t.N();
    } finally {
      XI();
    }
  }
} });
function IB(g) {
  return new nA(g);
}
function oB(g) {
  for (var I = g.s; void (-261 * -5 + 8603 * 1 + -2477 * 4) !== I; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !(130 * 29 + -9427 * 1 + 5657);
  return !(2528 + 29 * -271 + 5332);
}
function iB(g) {
  for (var I = g.s; void (-2 * 784 + 5008 + -3440) !== I; I = I.n) {
    var e = I.S.n;
    if (void (6753 + -19 * 74 + 5347 * -1) !== e && (I.r = e), I.S.n = I, I.i = -(-1312 * -1 + -577 * 15 + 7344), void (5818 + 2 * -2909) === I.n) {
      g.s = I;
      break;
    }
  }
}
function CB(g) {
  for (var I = g.s, e = void (-4431 + 1 * 7506 + 1 * -3075); void (-5535 + -6 * -1207 + -1707) !== I; ) {
    var A = I.p;
    -(-2395 + -2594 * 2 + 96 * 79) === I.i ? (I.S.U(I), A !== void 0 && (A.n = I.n), void (-9 * -941 + -5596 + 169 * -17) !== I.n && (I.n.p = A)) : e = I, I.S.n = I.r, void (-324 * -17 + 9029 + -14537) !== I.r && (I.r = void (6997 + -1 * -5896 + 12893 * -1)), I = A;
  }
  g.s = e;
}
function We(g) {
  nA.call(this, void (-7928 + 1 * 577 + 7351)), this.x = g, this.s = void (-8202 * -1 + 3122 + -11324), this.g = Kg - (-412 + -253 * 17 + 4714), this.f = -5 * -1153 + 1764 + -7525;
}
(We.prototype = new nA()).h = function() {
  if (this.f &= -(9812 + -1 * 9809), -9491 + 4353 * -2 + 18198 & this.f) return !1;
  if ((-51 * -2 + 11 * 509 + 55 * -103 & this.f) == 32) return !(-16 * 389 + -4 * -1106 + 120 * 15);
  if (this.f &= -(3 * 2084 + -547 * -13 + 13358 * -1), this.g === Kg) return !0;
  if (this.g = Kg, this.f |= 5 * -787 + -4688 + 8624, this.i > -81 * -67 + -19 * 397 + 92 * 23 && !oB(this)) return this.f &= -2, !(-7055 + 9739 * -1 + 16794);
  var g = O;
  try {
    iB(this), O = this;
    var I = this.x();
    (16 & this.f || this.v !== I || 3792 * -1 + 3335 + -1 * -457 === this.i) && (this.v = I, this.f &= -(-861 * -8 + 93 * -17 + -46 * 115), this.i++);
  } catch (e) {
    this.v = e, this.f |= -5574 + 712 * -6 + 9862 * 1, this.i++;
  }
  return O = g, CB(this), this.f &= -(-4126 * -2 + -6057 + 129 * -17), !(-2539 + 241 * -28 + 9287 * 1);
}, We.prototype.S = function(g) {
  if (void (-11910 + -2 * -5955) === this.t) {
    this.f |= -3134 * -1 + 1 * -8839 + -5741 * -1;
    for (var I = this.s; void (4686 + 5378 * -1 + 692) !== I; I = I.n) I.S.S(I);
  }
  nA.prototype.S.call(this, g);
}, We.prototype.U = function(g) {
  if (void (7 * -977 + -5122 + 3 * 3987) !== this.t && (nA.prototype.U.call(this, g), void (-5537 + -49 * -113) === this.t)) {
    this.f &= -(-8679 + 3 * 1116 + -447 * -12);
    for (var I = this.s; void (14 * 17 + -650 + 412) !== I; I = I.n) I.S.U(I);
  }
}, We.prototype.N = function() {
  if (!(195 * -27 + -8211 + 2 * 6739 & this.f)) {
    this.f |= -6789 + 453 * 15;
    for (var g = this.t; void (4973 * -1 + -1 * -2683 + 1145 * 2) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(We.prototype, "value", { get: function() {
  if (-3488 + -47 * -71 + -2 * -76 & this.f) throw new Error("Cycle detected");
  var g = gB(this);
  if (this.h(), void (1 * 3779 + -7794 + 4015) !== g && (g.i = this.i), 10373 + 1 * -10357 & this.f) throw this.v;
  return this.v;
} });
function Gx(g) {
  return new We(g);
}
function BB(g) {
  var I = g.u;
  if (g.u = void (375 * 1 + -1 * -4413 + -4788), typeof I == "function") {
    Ke++;
    var e = O;
    O = void (8382 + 1 * -5647 + -2735 * 1);
    try {
      I();
    } catch (A) {
      throw g.f &= -(-4626 + 3 * -1724 + 350 * 28), g.f |= 8, _I(g), A;
    } finally {
      O = e, XI();
    }
  }
}
function _I(g) {
  for (var I = g.s; void (137 + -1 * 137) !== I; I = I.n) I.S.U(I);
  g.x = void (-11562 + -246 * -47), g.s = void (-226 * -29 + -4157 * -1 + -1 * 10711), BB(g);
}
function kx(g) {
  if (O !== this) throw new Error("Out-of-order effect");
  CB(this), O = g, this.f &= -(1086 + -1 * 1084), 8 & this.f && _I(this), XI();
}
function dt(g) {
  this.x = g, this.u = void (-3322 * -1 + -2 * -2758 + -8838), this.s = void (-1733 * -1 + -3931 * -1 + 3 * -1888), this.o = void 0, this.f = 173 * -1 + 6543 + -6338;
}
dt.prototype.c = function() {
  var g = this.S();
  try {
    if (4450 + -1 * -9874 + -14316 & this.f || void (3642 + -3642 * 1) === this.x) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, dt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -3 * -861 + -6546 + 3964, this.f &= -(-8790 + -3206 * -1 + -7 * -799), BB(this), iB(this), Ke++;
  var g = O;
  return O = this, kx.bind(this, g);
}, dt.prototype.N = function() {
  !(-778 * 3 + 6370 + 4034 * -1 & this.f) && (this.f |= -3 * 1440 + 7469 + -3147, this.o = yt, yt = this);
}, dt.prototype.d = function() {
  this.f |= 87 * -6 + 1162 + -632, 1 * -7022 + -4251 + 1 * 11274 & this.f || _I(this);
};
function zI(g) {
  var I = new dt(g);
  try {
    I.c();
  } catch (e) {
    throw I.d(), e;
  }
  return I.d.bind(I);
}
var M0;
function He(g, I) {
  R[g] = I.bind(null, R[g] || function() {
  });
}
function Bg(g) {
  M0 && M0(), M0 = g && g.S();
}
function nB(g) {
  var I = this, e = g.data, A = It(e);
  A.value = e;
  var t = wA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 4;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !Fi(t.peek()) && ((i = I.base) == null ? void (-2104 + -52 * 55 + -2 * -2482) : i.nodeType) === 3 ? I.base.data = t.peek() : (I.__$f |= 2503 * 1 + 389 + -2891 * 1, I.setState({}));
    }, Gx(function() {
      var i = A.value.value;
      return 998 * 2 + 1 * 7798 + 166 * -59 === i ? 3461 + 3461 * -1 : !(-1 * 5113 + -3 * -739 + 2896) === i ? "" : i || "";
    });
  }, []);
  return t.value;
}
nB.displayName = "_st";
var uI = {};
uI.configurable = !(1 * 3770 + -3173 * -1 + -6943), uI.value = void (9857 + 1 * 9093 + -1895 * 10);
var fI = {};
fI.configurable = !(-4064 + 1 * 4064), fI.value = nB;
var DI = {};
DI.configurable = !(9994 + 3 * -689 + 1 * -7927), DI.get = function() {
  var g = {};
  return g.data = this, g;
};
var yI = {};
yI.configurable = !(-342 + 1 * 8231 + -7889), yI.value = 1;
var Qt = {};
Qt.constructor = uI, Qt.type = fI, Qt.props = DI, Qt.__b = yI, Object.defineProperties(nA.prototype, Qt), He("__b", function(g, I) {
  if (typeof I.type == "string") {
    var e, A = I.props;
    for (var t in A) if (t !== "children") {
      var o = A[t];
      o instanceof nA && (e || (I.__np = e = {}), e[t] = o, A[t] = o.peek());
    }
  }
  g(I);
}), He("__r", function(g, I) {
  Bg();
  var e, A = I.__c;
  A && (A.__$f &= -(8959 + 53 * -169), void (-1357 * 7 + -8030 + 17529) === (e = A.__$u) && (A.__$u = e = function(t) {
    var o;
    return zI(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= 8535 * -1 + 169 * -25 + 12761, A.setState({});
    }, o;
  }())), Bg(e), g(I);
}), He("__e", function(g, I, e, A) {
  Bg(), g(I, e, A);
}), He("diffed", function(g, I) {
  Bg();
  var e;
  if (typeof I.type == "string" && (e = I.__e)) {
    var A = I.__np, t = I.props;
    if (A) {
      var o = e.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (1 * -1977 + -7 * 1233 + 10608) !== C && !(i in A) && (C.d(), o[i] = void (239 * -27 + -219 * 27 + 12366));
      }
      else e.U = o = {};
      for (var B in A) {
        var n = o[B], a = A[B];
        void (772 * -2 + 145 * -56 + 9664) === n ? (n = bx(e, B, a, t), o[B] = n) : n.o(a, t);
      }
    }
  }
  g(I);
});
function bx(g, I, e, A) {
  var t = I in g && g.ownerSVGElement === void 0, o = IB(e);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: zI(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, t ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
He("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var e = I.__e;
    if (e) {
      var A = e.U;
      if (A) {
        e.U = void (-5255 + -9546 * 1 + -19 * -779);
        for (var t in A) {
          var o = A[t];
          o && o.d();
        }
      }
    }
  } else {
    var i = I.__c;
    if (i) {
      var C = i.__$u;
      C && (i.__$u = void 0, C.d());
    }
  }
  g(I);
}), He("__h", function(g, I, e, A) {
  (A < -8354 * 1 + -637 + 8994 || 2741 * 2 + 9968 + -5147 * 3 === A) && (I.__$f |= 2), g(I, e, A);
}), FA.prototype.shouldComponentUpdate = function(g, I) {
  var e = this.__$u;
  if (!(e && void (-9637 * -1 + -7640 + -1997) !== e.s || -14 * -452 + 2820 + -9144 & this.__$f)) return !(-132 * -6 + 641 * -2 + 10 * 49);
  if (-2 * 369 + -367 * -1 + 374 & this.__$f) return !(-1 * -4093 + -3844 + -83 * 3);
  for (var A in I) return !(9884 + 6 * 1371 + 3622 * -5);
  for (var t in g) if (t !== "__source" && g[t] !== this.props[t]) return !(-7469 + 11 * 679);
  for (var o in this.props) if (!(o in g)) return !(2651 + -2 * 1059 + -13 * 41);
  return !(3993 + -5363 * 1 + -1 * -1371);
};
function It(g) {
  return wA(function() {
    return IB(g);
  }, []);
}
function Nx(g, I) {
  if (!g) return I;
  const { detectionRecord: e, hashedDetectedImages: A } = g;
  I.hashedDetectedImages && (A == null || A.push(...I.hashedDetectedImages)), I.detectionRecord && (e == null || e.push(...I.detectionRecord));
  const t = { ...g };
  return t.hashedDetectedImages = A, t.detectionRecord = e, t;
}
function Rx() {
  const g = It(null);
  function I({ cameraProperties: A }) {
    g.value = Nx(g.value, A);
  }
  const e = {};
  return e.cameraProperties = g, e.mergeCameraProperties = I, e;
}
const QB = (g, I) => {
  const e = LA(I);
  V(() => {
    e.current = I;
  }, [I]), V(() => {
    const A = (t) => e.current(t);
    return document.addEventListener(g, A), () => {
      document.removeEventListener(g, A);
    };
  }, [g]);
}, Fx = (g) => {
  const I = It(!1);
  return QB(g, (A) => {
    A.detail && (I.value = A.detail.animationEnd);
  }), I;
}, aB = Pt(null), $I = () => {
  const g = Re(aB);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, Sx = ({
  assetsDirectoryPath: g,
  cameraFacing: I,
  captureMode: e,
  onPhotoTaken: A,
  sessionToken: t,
  thresholds: o
}) => {
  var i, C, B;
  return {
    onPhotoTaken: A,
    cameraFacing: I ?? jI.FRONT,
    captureMode: e ?? SC.AUTO_CAPTURE,
    assetsDirectoryPath: jC(g),
    sessionToken: t,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? Ja,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? va,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? Ya,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? Ha,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? Ka,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? Oa,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? Wa,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? Ta,
      mouth: {
        confidence: ((i = o == null ? void 0 : o.mouth) == null ? void 0 : i.confidence) ?? Ua,
        status: {
          min: ((C = o == null ? void 0 : o.mouth) == null ? void 0 : C.status.min) ?? Xo.min,
          max: ((B = o == null ? void 0 : o.mouth) == null ? void 0 : B.status.max) ?? Xo.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: _o
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: _o
      }
    }
  };
}, Mx = ({
  cameraOptions: g,
  children: I
}) => {
  const e = wA(() => Sx(g), [g]);
  return /* @__PURE__ */ D(aB.Provider, { value: e, children: I });
}, xB = (g, I) => {
  const e = {};
  e.detail = I, document.dispatchEvent(new CustomEvent(g, e));
}, t0 = class t0 {
  constructor() {
    p(this, "lastDetails", {});
    p(this, "delayedTime", 1 * -571 + 215 * 22 + -1 * 4159);
  }
  static getInstance() {
    return !this._instance && (this._instance = new t0()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 9082 + -38 * 239;
  }
  isDetailChanged(I, e) {
    return JSON.stringify(e) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = e, !0) : !1;
  }
  dispatchCustomEventOnChange(I, e) {
    this.isDetailChanged(I, e) && xB(I, e);
  }
  dispatchDelayedCustomEventOnChange(I, e, A) {
    const t = performance.now();
    t - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, e), this.delayedTime = t);
  }
};
p(t0, "_instance");
let bt = t0;
const Xt = bt.getInstance(), rB = (g, I, e = fa) => {
  const A = {};
  A.instructionCode = I;
  const t = A;
  Xt.dispatchDelayedCustomEventOnChange(g, t, e);
}, Lx = (g, I) => {
  Xt.dispatchCustomEventOnChange(g, I);
}, Jx = (g, I) => {
  const e = {};
  e.size = I;
  const A = e;
  Xt.dispatchCustomEventOnChange(g, A);
}, vx = (g, I, e) => {
  const A = I.confidence < e ? void 0 : I, t = {};
  t.detectedObject = A;
  const o = t;
  Xt.dispatchCustomEventOnChange(g, o);
}, Yx = (g, { detection: I, fps: e, image: A, invalidValidators: t, isInCandidateSelection: o }) => {
  const i = {};
  i.image = A, i.data = {}, i.data.detection = I, i.data.fps = e, i.data.isInCandidateSelection = o, i.data.invalidValidators = t, i.data.imageResolution = {}, i.data.imageResolution.width = A.width, i.data.imageResolution.height = A.height;
  const C = i;
  Xt.dispatchCustomEventOnChange(g, C);
}, wI = (g, I) => {
  xB(g, I);
}, Wx = (g, I) => {
  const { cameraResolution: e, shouldCameraMirror: A } = I;
  V(() => {
    if (!e) return;
    const t = {};
    t.cameraResolution = e, t.isMirroring = A, Lx(g, t);
  }, [e, A, g]);
}, Ux = (g) => g === RC.CONTROL ? !OC() : !0, Hx = (g, I) => {
  const { appState: e, handleAppStateChange: A, handleError: t, isCameraReady: o } = gt(), [i, C] = yA(), B = wA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? Ux(g);
  }, [I, i, g, o]);
  V(() => {
    const a = () => {
      e !== TA.LOADING && A(TA.RUNNING);
    }, Q = () => {
      C(i === void 0 ? !B : !i);
    }, E = async () => {
      if (I) {
        A(TA.LOADING);
        try {
          await I.switchCamera(), A(TA.RUNNING);
        } catch (s) {
          if (s instanceof Error) {
            t(H.fromCameraError(s));
            return;
          }
        }
        C(void 0);
      }
    }, x = (s) => {
      var d;
      switch ((d = s.detail) == null ? void 0 : d["instruction"]) {
        case G0.CONTINUE_DETECTION:
          a();
          break;
        case G0.TOGGLE_MIRROR:
          Q();
          break;
        case G0.SWITCH_CAMERA:
          E();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(g, x), () => {
      document.removeEventListener(g, x);
    };
  }, [e, I, t, i, A, B, g]);
  const n = {};
  return n.shouldCameraMirror = B, n;
};
async function EB() {
  return navigator.mediaDevices.enumerateDevices();
}
async function L0() {
  return (await EB()).filter((I) => I.kind === "videoinput");
}
function J0(g) {
  g.getTracks().forEach((e) => e.stop());
}
function ni(g) {
  return g.getVideoTracks()[0];
}
const wg = {};
wg.width = 1920, wg.height = 1080, wg.facingMode = jI.FRONT;
const Kx = wg;
var YA;
class sB {
  constructor({ defaultVideoConstrains: I = Kx, minCameraShorterSide: e = Za } = {}) {
    p(this, "options");
    p(this, "availableCameraProperties", []);
    U(this, YA, null);
    const A = {};
    A.defaultVideoConstrains = I, A.minCameraShorterSide = e, this.options = A;
  }
  get mediaStream() {
    return m(this, YA);
  }
  get videoTrack() {
    return m(this, YA) ? ni(m(this, YA)) : void (-306 * 19 + 80 * 49 + 1894);
  }
  get isCameraActive() {
    var I;
    return !!((I = m(this, YA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const e = await navigator.mediaDevices.getUserMedia(I);
    J0(e);
  }
  async open(I = {}) {
    Ai() && await QI(-8055 + -27 * -315), Y(this, YA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await L0();
    if (I.length <= 2613 + 3 * 756 + -4880) return;
    const e = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), t = I.findIndex((C) => C.deviceId === A.deviceId), o = I[t + (20 * -250 + 8241 + 40 * -81)] ?? I[1 * -1067 + -3500 + -4567 * -1], i = this.getConstraints(e, o);
    this.close(), await this.open(i);
  }
  close() {
    m(this, YA) && (J0(m(this, YA)), Y(this, YA, null));
  }
  async getProperties() {
    const I = await this.getDeviceName(), e = this.getSettings(), A = { ...e };
    A.deviceName = I;
    const t = {};
    return t.currentCameraProperties = A, t.availableCameraProperties = this.availableCameraProperties, t;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const I = this.getSettings();
    if (!I.width) throw new H("Video width is undefined");
    if (!I.height) throw new H("Video height is undefined");
    const e = {};
    return e.width = I.width, e.height = I.height, e;
  }
  async getDeviceName() {
    const I = this.getSettings(), e = await EB(), A = e.find((t) => t.deviceId === I.deviceId);
    return A == null ? void 0 : A.label;
  }
  async getBestCameraInfo(I) {
    return I === jI.FRONT ? void (291 + 4 * -229 + -25 * -25) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return OC() ? (await L0()).find((A) => A.label.includes("back") && A.label.includes("0")) : void (-2969 * -1 + 3757 + -6726);
  }
  async collectAvailableCamerasInfo() {
    const I = await L0();
    for (const e of I) {
      Ai() && await QI(58 * 102 + 2781 + 2749 * -3);
      try {
        const A = {};
        A.deviceId = e.deviceId, A.width = 480;
        const t = {};
        t.video = A;
        const o = await navigator.mediaDevices.getUserMedia(t), i = ni(o);
        if (!i) throw new Error("Video track not found! (device id: " + e.deviceId + ")");
        const C = i.getSettings(), B = { ...C };
        B.deviceName = i.label;
        const n = {};
        n.cameraProperties = B;
        const a = n;
        this.availableCameraProperties.push(a), J0(o);
      } catch (A) {
        A instanceof Error && H.logError(A);
      }
    }
  }
  getConstraints(I, e) {
    const A = { ...this.options.defaultVideoConstrains, ...I };
    A.deviceId = e ? { exact: e.deviceId } : void (-35 * 259 + 8340 + 725 * 1);
    const t = {};
    return t.video = A, t.audio = !1, t;
  }
  checkVideoTrackSettings() {
    var A;
    const I = (A = this.videoTrack) == null ? void 0 : A.getSettings();
    if (!(I != null && I.height) || !(I != null && I.width))
      throw this.close(), new H("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(I == null ? void 0 : I.width, I == null ? void 0 : I.height) < this.options.minCameraShorterSide)
      throw this.close(), new H("Could not init video because of low camera resolution: " + I.width + "x" + I.height + ".");
  }
}
YA = new WeakMap();
class Ox {
  constructor(I, e) {
    this.videoHandler = I, this.cameraHandler = e;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(I = {}) {
    await sB.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const e = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, e);
    await this.cameraHandler.open(A), $a() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const I = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(I != null && I.width)) throw new H("Cant take photo - video width is undefined");
    if (!(I != null && I.height)) throw new H("Cant take photo - video height is undefined");
    const e = document.createElement("canvas");
    e.width = I.width, e.height = I.height;
    const A = e.getContext("2d");
    if (!A) throw new H("Cant take photo - cant create context");
    return A.drawImage(this.videoHandler.videoElement, 1 * -5273 + -2841 + -8114 * -1, -9510 * -1 + -2954 + 596 * -11), { image: e, timestamp: Date.now() };
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
var XA;
class Tx {
  constructor(I) {
    U(this, XA);
    Y(this, XA, I);
  }
  get videoElement() {
    return m(this, XA);
  }
  async play(I) {
    m(this, XA).srcObject = I, await m(this, XA).play();
  }
  stop() {
    m(this, XA).srcObject = null;
  }
  hasSrcObject() {
    return !!m(this, XA).srcObject;
  }
}
XA = new WeakMap();
function qx(g) {
  const I = LA(null), e = LA(), { handleError: A, setIsCameraReady: t } = gt(), [o, i] = yA(), C = Ae((n) => {
    i((a) => ex(n, a));
  }, []);
  V(() => ((async () => {
    if (!I.current) {
      A(new H("Something went wrong during video initialization"));
      return;
    }
    const a = new Tx(I.current), Q = new sB(), E = new Ox(a, Q);
    try {
      const x = {};
      x.facingMode = g, await E.startVideoStream(x);
    } catch (x) {
      if (x instanceof Error) {
        A(H.fromCameraError(x));
        return;
      }
    }
    t(!0), C(E.getCameraResolution()), e.current = E;
  })(), function() {
    e.current && e.current.stopStreaming(), t(!1);
  }), [g, A, t, I, C]);
  const B = {};
  return B.cameraService = e.current, B.cameraResolution = o, B.onCameraResolutionChange = C, B.videoRef = I, B;
}
function Zx(g, I) {
  V(() => {
    if (!g.current) return;
    const e = new ResizeObserver((A) => {
      const [t] = A;
      Jx(I, t.contentRect);
    });
    return e.observe(g.current), () => {
      e.disconnect();
    };
  }, [g, I]);
}
function jx(g) {
  return ee(Math.abs(g));
}
const Px = () => {
  const [g, I] = yA(null), e = LA(new PI(491 * 13 + 7039 + -1 * 13417));
  function A(o) {
    const { z: i } = o.accelerationIncludingGravity || {};
    if (!i) return;
    e.current.pushFixed(jx(i));
    const C = ee(Gt(e.current)), B = {};
    B.z = C, I(B);
  }
  V(() => (window.addEventListener("devicemotion", tx(A, za), !0), () => {
    window.removeEventListener("devicemotion", A, !0);
  }), []);
  const t = {};
  return t.acceleration = g, t;
}, Vx = async () => WebAssembly.validate(new Uint8Array([-458 * -3 + 9820 + 2 * -5597, 97, -6735 + 1340 * 1 + -190 * -29, 70 * 122 + -1704 + -6727, 8799 + 1019 * -7 + 5 * -333, 1452 + -2 * 904 + -1 * -356, 4252 + 4252 * -1, -5591 + -7943 * 1 + 2 * 6767, 5434 + 4 * 369 + -6909, -794 * 10 + 2164 * 3 + 1453, -5 * 571 + 27 * -79 + 4989, -818 * -5 + -2 * 425 + -8 * 393, 54 * -36 + 8718 + -3 * 2258, -122 * 38 + -4 * -1034 + 501, 6971 * 1 + 967 + 7815 * -1, -2944 + 1 * 2947, 762 + -8811 * 1 + 8051, 1 * -6397 + 3251 * 1 + -1049 * -3, -3 * -3091 + 2761 * 3 + -17556, 5037 + -1942 * -3 + -10853, 4026 + -1 * 3229 + 1 * -787, -3017 * 1 + -3 * 23 + -7 * -441, -332 + -5 * -68, 3156 + 1 * 391 + -3547, 1 * -6482 + -2 * 4739 + -3205 * -5, -10718 + 466 * 23, 1721 + -1 * 1468, 15, 253, 98, 2038 * 1 + 6887 + -8914]));
function Xx() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(1555 + -3 * -2571 + -9252);
}
function _x() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = Xx();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function zx(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const Qi = (g) => Math.round(g / 500) * 500 / (-3148 + -1028 * 4 + -118 * -70), ve = (g) => g ? g <= -1 * -7879 + -356 * 22 + -23 * 2 ? Math.round(g * (2 * 2537 + 1 * 3686 + -230 * 38)) / (-596 * -1 + 7945 + -8521 * 1) : Math.round(g / 50) * 50 : 6135 + -1263 * 3 + -2 * 1173, $x = (g) => Math.round(g * (-1 * -1423 + -538 + 1 * -883)) / (4 * 2447 + 3041 * -3 + 663 * -1);
async function Ar() {
  return await Vx() ? ti.SIMD : ti.NO_SIMD;
}
var Ft, g0;
class cB {
  constructor(I) {
    U(this, Ft, !0);
    U(this, g0, Date.now());
    p(this, "analytics");
    p(this, "samVersion");
    p(this, "sessionToken");
    p(this, "onDetectionCallback");
    p(this, "onCaptureCallback");
    p(this, "createProtoMessage");
    p(this, "fpsOfAllImages", new PI(-1 * 4297 + 41 * 187 + -835 * 4));
    p(this, "cameraService");
    p(this, "imageProcessor");
    this.cameraService = I.cameraService, this.imageProcessor = I.imageProcessor, this.analytics = I.analytics, this.samVersion = I.samVersion, this.sessionToken = I.sessionToken, this.createProtoMessage = I.createProtoMessage, this.onDetectionCallback = I.onDetectionCallback, this.onCaptureCallback = I.onCaptureCallback;
  }
  async run() {
    for (; m(this, Ft); )
      await this.iterate();
    return this;
  }
  stop() {
    Y(this, Ft, !1);
  }
  async trackCaptureProcess(I, e) {
    var i;
    const A = Date.now(), t = Gt(this.fpsOfAllImages), o = {};
    o.width = e.width, o.height = e.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: t, captureProcessDurationInMs: A - m(this, g0), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Ar() });
  }
  onDetection(I, e) {
    this.onDetectionCallback({ ...I, avgFps: ee(Gt(this.fpsOfAllImages)), samVersion: this.samVersion }, e);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: e, detection: A }) {
    const t = {};
    t.width = e.width, t.height = e.height;
    const o = t, i = await PC(e), C = await this.cameraService.getCameraProperties(), B = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, n = {};
    n.sessionToken = this.sessionToken, n.web = B;
    const a = n, Q = await this.createProtoMessage(i, a), E = {};
    E.detection = A, E.imageResolution = o;
    const x = {};
    x.image = i, x.data = E;
    const s = x;
    this.stop();
    const d = {};
    d.imageData = s, d.protoMessage = Q, d.webMetadata = B, d.candidateSelectionImages = I, this.onCaptureCallback(d);
  }
  getDetectionEndTime(I) {
    return Date.now() - I;
  }
  getInvalidInstructions(I, e) {
    const A = [];
    return Array.from(I).forEach(([t, o]) => {
      !o && A.push(e[t]);
    }), A;
  }
  async sleep(I) {
    await QI(Math.max(zo.max - I, zo.min));
  }
}
Ft = new WeakMap(), g0 = new WeakMap();
class er extends cB {
  constructor({ checkToInstructionCodeMap: e, fallbackInstruction: A, instructionCodeMap: t, ...o }) {
    super(o);
    p(this, "candidateSelectionTime", 4077 + 719 * 12 + -12705);
    p(this, "candidatesSelectionFramesCount", 0);
    p(this, "isInCandidateSelection", !1);
    p(this, "lastImage", null);
    p(this, "bestImage", null);
    p(this, "candidateSelectionImages", []);
    p(this, "fallbackInstruction");
    p(this, "instructionCodeMap");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.instructionCodeMap = t, this.checkToInstructionCodeMap = e;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const e = this.cameraService.takePhoto(), A = await this.processTakenPhoto(e);
    this.isInCandidateSelection ? this.saveBetterImage(e, A) : this.tryInitCandidatePhase(e, A);
    const t = {};
    t.takenPhoto = e, t.imageProcessorResult = A;
    const o = this.getDetectionDetails(t);
    this.onDetection(o, e.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const i = {};
    i.instructionCode = o.processedImage.instructionCode, i.isValid = A.isValid, i.image = e.image, i.detection = A.detection, this.lastImage = i, await this.sleep(o.detectionTime);
  }
  async processTakenPhoto(e) {
    try {
      return await this.imageProcessor.process(e);
    } catch (A) {
      throw A instanceof Error ? H.fromCameraError(A) : H.fromError(A);
    }
  }
  saveBetterImage(e, A) {
    if (!(this.bestImage && A.isValid && this.isNewImageBetter(this.bestImage.detection, A.detection))) return;
    const o = {};
    o.image = e.image, o.detection = A.detection;
    const i = o;
    this.bestImage = i, this.candidateSelectionImages.push(i);
  }
  tryInitCandidatePhase(e, A) {
    var C;
    if (!(((C = this.lastImage) == null ? void 0 : C.isValid) && A.isValid)) return;
    const o = {};
    o.image = e.image, o.detection = A.detection;
    const i = o;
    this.isNewImageBetter(this.lastImage.detection, i.detection) ? this.bestImage = i : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, i), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 2 * -778 + 1073 + 1 * 483 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const e = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= b0.minFrames ? e > b0.minDuration : e > b0.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: e, image: A } = this.bestImage || {};
    if (A && e) this.trackCaptureProcess(e, A), await this.onCapture({ canvasImage: A, detection: e, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new H("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: e, takenPhoto: A }) {
    const t = this.getDetectionEndTime(A.timestamp), o = ee((621 * -3 + -3798 + 6661) / t);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, B = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), n = {};
    n.isNewDetectionValid = e.isValid, n.newInvalidInstruction = B[-2 * -1119 + 484 + -2722];
    const a = this.getInstructionCode(n), Q = {};
    return Q.detection = e.detection, Q.instructionCode = a, Q.invalidValidators = B, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: t, fps: o, avgFps: ee(Gt(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: e, newInvalidInstruction: A }) {
    var t;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (t = this.lastImage) != null && t.isValid && e ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && e ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(e, A) {
    return A.sharpness > e.sharpness;
  }
}
var ie, le;
class tr extends cB {
  constructor({ checkToInstructionCodeMap: e, fallbackInstruction: A, ...t }) {
    super(t);
    U(this, ie, void (7380 + -4911 * 1 + -2469));
    U(this, le);
    p(this, "fallbackInstruction");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = e, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(e) {
    var A, t;
    return (A = e.detail) != null && A["instruction"] ? Object.values(k0).includes((t = e.detail) == null ? void 0 : t["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    Y(this, le, (e) => {
      var A;
      this.isRequestCaptureEventValid(e) && Y(this, ie, (A = e.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(Po.REQUEST_CAPTURE, m(this, le));
  }
  async iterate() {
    const e = this.cameraService.takePhoto(), A = await this.processTakenPhoto(e), t = this.getDetectionDetails(e, A);
    if (this.onDetection(t, e.image), this.isCaptureDone(A)) {
      await this.onCaptureDone(e.image, A.detection);
      return;
    }
    await this.sleep(t.detectionTime);
  }
  isCaptureDone(e) {
    return m(this, ie) ? m(this, ie) === k0.FIRST_FRAME ? !0 : m(this, ie) === k0.FIRST_VALID_FRAME ? e.isValid : !1 : !1;
  }
  async processTakenPhoto(e) {
    try {
      return await this.imageProcessor.process(e);
    } catch (A) {
      throw A instanceof Error ? H.fromCameraError(A) : H.fromError(A);
    }
  }
  async onCaptureDone(e, A) {
    this.trackCaptureProcess(A, e);
    const t = {};
    t.canvasImage = e, t.detection = A, t.candidateSelectionImages = [], await this.onCapture(t), Y(this, ie, void (7411 * -1 + -5063 + 12474)), this.imageProcessor.reset();
  }
  getDetectionDetails(e, A) {
    const t = this.getDetectionEndTime(e.timestamp), o = ee((-7045 * -1 + 125 * 47 + -11920) / t);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = e.image.width, i.height = e.image.height;
    const C = i, B = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), n = this.getInstructionCode(B[4865 + 918 * -5 + -275]), a = {};
    return a.detection = A.detection, a.instructionCode = n, a.invalidValidators = B, a.isInCandidateSelection = !1, { processedImage: a, detectionTime: t, fps: o, avgFps: ee(Gt(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(e) {
    return e ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), m(this, le) && document.removeEventListener(Po.REQUEST_CAPTURE, m(this, le));
  }
}
ie = new WeakMap(), le = new WeakMap();
function gr({ captureMode: g, ...I }) {
  return g === SC.AUTO_CAPTURE ? new er(I) : new tr(I);
}
function Ir({ cameraResolution: g, cameraService: I, customEvent: e }) {
  const { shouldCameraMirror: A } = Hx(e.CONTROL, I), t = {};
  t.cameraResolution = g, t.shouldCameraMirror = A, Wx(e.CAMERA_PROPS_CHANGED, t), V(() => () => {
    bt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function or({ cameraFacing: g, captureMode: I, checkToInstructionCodeMap: e, controller: A, createProtoMessage: t, customEvent: o, fallbackInstruction: i, instructionCodeMap: C, onCapture: B, onDetection: n, sessionToken: a }) {
  const { appState: Q, handleAppStateChange: E } = gt(), { sunfish: x } = Vt(), { analytics: s } = JC(), { cameraResolution: d, cameraService: h, onCameraResolutionChange: r, videoRef: u } = qx(g), y = {};
  y.cameraResolution = d, y.cameraService = h, y.customEvent = o;
  const { shouldCameraMirror: G } = Ir(y), N = It(void (1421 + -1421 * 1)), M = Ae((J) => {
    E(TA.WAITING), B(J);
  }, [B, E]), w = Ae((J, z) => {
    r(J.resolution), N.value = J, n(J, z);
  }, [n, N, r]);
  V(() => {
    h != null && h["isStreaming"] && (A != null && A["isDetectorInitialized"]) && x && E(TA.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], A == null ? void 0 : A["isDetectorInitialized"], E, x]), V(() => {
    if (Q !== TA.RUNNING) return;
    if (!h || !A) throw new H("Cannot start detection");
    const J = {};
    J.captureMode = I, J.analytics = s, J.cameraService = h, J.imageProcessor = A.imageProcessor, J.fallbackInstruction = i, J.instructionCodeMap = C, J.checkToInstructionCodeMap = e, J.sessionToken = a, J.samVersion = A.samVersion, J.createProtoMessage = t, J.onCaptureCallback = M, J.onDetectionCallback = w;
    const z = gr(J);
    return A.runDetectionLoop(z), () => {
      A.stopDetectionLoop();
    };
  }, [Q, A, h, M, w, a, N, s, t, C, e, i, I]);
  const Z = {};
  return Z.videoRef = u, Z.cameraResolution = d, Z.detectionDetails = N, Z.shouldCameraMirror = G, Z;
}
const ir = ({ children: g }) => {
  const I = LA(null);
  return Zx(I, Ce.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(oa, { ref: I, children: g });
}, pI = {};
pI.minFaceSizeRatio = 0.135, pI.maxFaceSizeRatio = 0.21;
const dB = {};
dB.faceConfidence = 1;
const oe = {};
oe.minFaceSizeRatio = 0.3, oe.maxFaceSizeRatio = 1, oe.brightnessHighThreshold = 1, oe.brightnessLowThreshold = -(-5467 + 235 * 19 + 1003), oe.faceConfidence = 0.15, oe.sharpnessThreshold = -(-7001 + -3 * -2334), oe.outOfBoundsThreshold = -(-1975 + 2 * -199 + -1187 * -2);
const Cr = { [pA.DISTANT]: pI, [pA.MIDDLE]: dB, [pA.CLOSEUP]: oe }, Br = Cr, ai = 462 * -20 + -373 * 17 + 1 * 15581 + 0.255, nr = (g, I) => ({ ...g, leftEye: { ...g.leftEye, center: Je(g.leftEye.center, I) }, rightEye: { ...g.rightEye, center: Je(g.rightEye.center, I) }, mouth: { ...g.mouth, center: Je(g.mouth.center, I) }, topLeft: Je(g.topLeft, I), bottomRight: Je(g.bottomRight, I), faceCenter: Je(g.faceCenter, I) }), hB = (g, I) => {
  const { faceCenter: e, faceSize: A } = g, t = ba(A, I), o = {};
  o.x = e.x, o.y = e.y - t;
  const i = {};
  i.x = e.x + t, i.y = e.y;
  const C = {};
  C.x = e.x, C.y = e.y + t;
  const B = {};
  B.x = e.x - t, B.y = e.y;
  const n = {};
  return n.top = o, n.right = i, n.bottom = C, n.left = B, TC(n);
}, Qr = (g, I) => {
  const { bottomRight: e, faceCenter: A, topLeft: t } = I, o = {
    topLeft: t,
    width: e.x - t.x,
    height: e.y - t.y
  };
  VC(g, o, "rgba(255, 0, 0, 0.3)", !0), ut(g, A, "lime");
}, ar = (g, I, e) => {
  const A = hB(I, e);
  Object.values(A).map((t) => ut(g, t, "orange"));
};
function xr({ cameraResolution: g, detectionDetails: I, isImageMirror: e }) {
  const { thresholds: A } = $I(), { redfin: t } = Vt(), o = LA(null);
  if (V(() => {
    if (!o.current)
      return;
    o.current.width = g.width, o.current.height = g.height, la(o.current);
    const d = Sg(g), h = XC(
      g,
      A.outOfBoundsThreshold,
      d
    ), r = Ga(g);
    I.value && (Qr(o.current, I.value.processedImage.detection), ar(
      o.current,
      I.value.processedImage.detection,
      g
    ), N0(o.current, d, "lime"), N0(o.current, h, "yellow"), N0(o.current, r, "blue"), ut(o.current, I.value.processedImage.detection.leftEye.center, "cyan"), ut(o.current, I.value.processedImage.detection.rightEye.center, "cyan"), ut(o.current, I.value.processedImage.detection.mouth.center, "cyan"));
  }, [g, A, I.value]), !I.value)
    return null;
  const {
    avgFps: i,
    detectionTime: C,
    fps: B,
    processedImage: { detection: n, instructionCode: a, invalidValidators: Q },
    resolution: E,
    samVersion: x
  } = I.value, s = {
    Confidence: n.confidence,
    Brightness: n.brightness,
    Sharpness: n.sharpness,
    "Face size": n.faceSize,
    "Left eye confidence": n.leftEye.confidence,
    "Left eye status": n.leftEye.status,
    "Right eye confidence": n.rightEye.confidence,
    "Right eye status": n.rightEye.status,
    "Mouth confidence": n.mouth.confidence,
    "Mouth status": n.mouth.status,
    "Detection time": C,
    FPS: B,
    "Avg FPS": i,
    Tier: t,
    Instruction: a,
    Resolution: E,
    "Component version": "7.0.1"
  };
  return x && (s["SAM version"] = x), Q.length > 0 && (s["Invalid validators"] = Q), /* @__PURE__ */ D(
    ca,
    {
      ref: o,
      cameraResolution: g,
      detectionDetails: s,
      isImageMirror: e
    }
  );
}
function rr(g) {
  return /* @__PURE__ */ D("rect", { fill: "#000", ...g, rx: "50%" });
}
function Er(g, I) {
  const [e, A] = yA(!1), t = () => A((C) => !C), o = "" + e;
  $e(() => {
    function C() {
      if (!g.current) return;
      const Q = new MutationObserver(() => {
        t();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, Q.observe(g.current, E), Q;
    }
    function B() {
      var x;
      if (!((x = g.current) != null && x["parentElement"])) return;
      const Q = new MutationObserver((s) => {
        s.find((h) => {
          for (const r of h.removedNodes)
            if (r !== (I == null ? void 0 : I.current) && r === g.current)
              return !0;
        }) && t(), s.forEach((h) => {
          h.addedNodes.forEach((r) => {
            var u;
            r !== (I == null ? void 0 : I.current) && ((u = r.parentElement) == null || u.removeChild(r));
          });
        });
      }), E = {};
      return E.childList = !0, Q.observe(g.current.parentElement, E), Q;
    }
    const n = C(), a = B();
    return () => {
      a == null || a.disconnect(), n == null || n.disconnect();
    };
  });
  const i = {};
  return i.key = o, i;
}
const sr = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function cr({ cutOut: g, height: I, ignoreElement: e, width: A }) {
  const t = LA(null), { key: o } = Er(t, e);
  return /* @__PURE__ */ D("div", { ref: t, style: sr, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${A} ${I}`, children: [
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
function dr({ fullOverlay: g, ignoreElement: I, resolution: e }) {
  const A = ka(e), t = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    cr,
    {
      cutOut: g || /* @__PURE__ */ D(rr, { height: t, width: o, x: i, y: C }),
      height: e.height,
      ignoreElement: I,
      width: e.width
    }
  );
}
function hr({ cameraResolution: g, children: I, detectionDetails: e, shouldMirror: A }) {
  const { redfin: t } = Vt(), { appState: o, freemiumOverlayState: i } = gt(), C = LA(null), B = i !== ft.HIDDEN && t !== rI.Higher && g, n = i === ft.VISIBLE, a = g && o === TA.RUNNING;
  return /* @__PURE__ */ D(MA, { children: [
    B && /* @__PURE__ */ D(
      dr,
      {
        fullOverlay: n,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ D("div", { ref: C, children: /* @__PURE__ */ D(
      xr,
      {
        cameraResolution: g,
        detectionDetails: e,
        isImageMirror: A
      }
    ) })
  ] });
}
const lr = (g, I) => {
  if (Ix()) {
    const e = {};
    e.candidateSelectionImages = I;
    const A = e;
    bt.getInstance().dispatchCustomEventOnChange(g, A);
  }
};
var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, lB = {}, xi = {}, ur = fr;
function fr(g, I) {
  for (var e = new Array(arguments.length - 1), A = 0, t = 2, o = !0; t < arguments.length; )
    e[A++] = arguments[t++];
  return new Promise(function(i, C) {
    e[A] = function(B) {
      if (o)
        if (o = !1, B)
          C(B);
        else {
          for (var n = new Array(arguments.length - 1), a = 0; a < n.length; )
            n[a++] = arguments[a];
          i.apply(null, n);
        }
    };
    try {
      g.apply(I || null, e);
    } catch (B) {
      o && (o = !1, C(B));
    }
  });
}
var uB = {};
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
  for (var e = new Array(64), A = new Array(123), t = 0; t < 64; )
    A[e[t] = t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t - 59 | 43] = t++;
  I.encode = function(i, C, B) {
    for (var n = null, a = [], Q = 0, E = 0, x; C < B; ) {
      var s = i[C++];
      switch (E) {
        case 0:
          a[Q++] = e[s >> 2], x = (s & 3) << 4, E = 1;
          break;
        case 1:
          a[Q++] = e[x | s >> 4], x = (s & 15) << 2, E = 2;
          break;
        case 2:
          a[Q++] = e[x | s >> 6], a[Q++] = e[s & 63], E = 0;
          break;
      }
      Q > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, a)), Q = 0);
    }
    return E && (a[Q++] = e[x], a[Q++] = 61, E === 1 && (a[Q++] = 61)), n ? (Q && n.push(String.fromCharCode.apply(String, a.slice(0, Q))), n.join("")) : String.fromCharCode.apply(String, a.slice(0, Q));
  };
  var o = "invalid encoding";
  I.decode = function(i, C, B) {
    for (var n = B, a = 0, Q, E = 0; E < i.length; ) {
      var x = i.charCodeAt(E++);
      if (x === 61 && a > 1)
        break;
      if ((x = A[x]) === void 0)
        throw Error(o);
      switch (a) {
        case 0:
          Q = x, a = 1;
          break;
        case 1:
          C[B++] = Q << 2 | (x & 48) >> 4, Q = x, a = 2;
          break;
        case 2:
          C[B++] = (Q & 15) << 4 | (x & 60) >> 2, Q = x, a = 3;
          break;
        case 3:
          C[B++] = (Q & 3) << 6 | x, a = 0;
          break;
      }
    }
    if (a === 1)
      throw Error(o);
    return B - n;
  }, I.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(uB);
var Dr = E0;
function E0() {
  this._listeners = {};
}
E0.prototype.on = function(g, I, e) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: e || this
  }), this;
};
E0.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var e = this._listeners[g], A = 0; A < e.length; )
      e[A].fn === I ? e.splice(A, 1) : ++A;
  return this;
};
E0.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var e = [], A = 1; A < arguments.length; )
      e.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, e);
  }
  return this;
};
var yr = ri(ri);
function ri(g) {
  return typeof Float32Array < "u" ? function() {
    var I = new Float32Array([-0]), e = new Uint8Array(I.buffer), A = e[3] === 128;
    function t(B, n, a) {
      I[0] = B, n[a] = e[0], n[a + 1] = e[1], n[a + 2] = e[2], n[a + 3] = e[3];
    }
    function o(B, n, a) {
      I[0] = B, n[a] = e[3], n[a + 1] = e[2], n[a + 2] = e[1], n[a + 3] = e[0];
    }
    g.writeFloatLE = A ? t : o, g.writeFloatBE = A ? o : t;
    function i(B, n) {
      return e[0] = B[n], e[1] = B[n + 1], e[2] = B[n + 2], e[3] = B[n + 3], I[0];
    }
    function C(B, n) {
      return e[3] = B[n], e[2] = B[n + 1], e[1] = B[n + 2], e[0] = B[n + 3], I[0];
    }
    g.readFloatLE = A ? i : C, g.readFloatBE = A ? C : i;
  }() : function() {
    function I(A, t, o, i) {
      var C = t < 0 ? 1 : 0;
      if (C && (t = -t), t === 0)
        A(1 / t > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, i);
      else if (isNaN(t))
        A(2143289344, o, i);
      else if (t > 34028234663852886e22)
        A((C << 31 | 2139095040) >>> 0, o, i);
      else if (t < 11754943508222875e-54)
        A((C << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, o, i);
      else {
        var B = Math.floor(Math.log(t) / Math.LN2), n = Math.round(t * Math.pow(2, -B) * 8388608) & 8388607;
        A((C << 31 | B + 127 << 23 | n) >>> 0, o, i);
      }
    }
    g.writeFloatLE = I.bind(null, Ei), g.writeFloatBE = I.bind(null, si);
    function e(A, t, o) {
      var i = A(t, o), C = (i >> 31) * 2 + 1, B = i >>> 23 & 255, n = i & 8388607;
      return B === 255 ? n ? NaN : C * (1 / 0) : B === 0 ? C * 1401298464324817e-60 * n : C * Math.pow(2, B - 150) * (n + 8388608);
    }
    g.readFloatLE = e.bind(null, ci), g.readFloatBE = e.bind(null, di);
  }(), typeof Float64Array < "u" ? function() {
    var I = new Float64Array([-0]), e = new Uint8Array(I.buffer), A = e[7] === 128;
    function t(B, n, a) {
      I[0] = B, n[a] = e[0], n[a + 1] = e[1], n[a + 2] = e[2], n[a + 3] = e[3], n[a + 4] = e[4], n[a + 5] = e[5], n[a + 6] = e[6], n[a + 7] = e[7];
    }
    function o(B, n, a) {
      I[0] = B, n[a] = e[7], n[a + 1] = e[6], n[a + 2] = e[5], n[a + 3] = e[4], n[a + 4] = e[3], n[a + 5] = e[2], n[a + 6] = e[1], n[a + 7] = e[0];
    }
    g.writeDoubleLE = A ? t : o, g.writeDoubleBE = A ? o : t;
    function i(B, n) {
      return e[0] = B[n], e[1] = B[n + 1], e[2] = B[n + 2], e[3] = B[n + 3], e[4] = B[n + 4], e[5] = B[n + 5], e[6] = B[n + 6], e[7] = B[n + 7], I[0];
    }
    function C(B, n) {
      return e[7] = B[n], e[6] = B[n + 1], e[5] = B[n + 2], e[4] = B[n + 3], e[3] = B[n + 4], e[2] = B[n + 5], e[1] = B[n + 6], e[0] = B[n + 7], I[0];
    }
    g.readDoubleLE = A ? i : C, g.readDoubleBE = A ? C : i;
  }() : function() {
    function I(A, t, o, i, C, B) {
      var n = i < 0 ? 1 : 0;
      if (n && (i = -i), i === 0)
        A(0, C, B + t), A(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), C, B + o);
      else if (isNaN(i))
        A(0, C, B + t), A(2146959360, C, B + o);
      else if (i > 17976931348623157e292)
        A(0, C, B + t), A((n << 31 | 2146435072) >>> 0, C, B + o);
      else {
        var a;
        if (i < 22250738585072014e-324)
          a = i / 5e-324, A(a >>> 0, C, B + t), A((n << 31 | a / 4294967296) >>> 0, C, B + o);
        else {
          var Q = Math.floor(Math.log(i) / Math.LN2);
          Q === 1024 && (Q = 1023), a = i * Math.pow(2, -Q), A(a * 4503599627370496 >>> 0, C, B + t), A((n << 31 | Q + 1023 << 20 | a * 1048576 & 1048575) >>> 0, C, B + o);
        }
      }
    }
    g.writeDoubleLE = I.bind(null, Ei, 0, 4), g.writeDoubleBE = I.bind(null, si, 4, 0);
    function e(A, t, o, i, C) {
      var B = A(i, C + t), n = A(i, C + o), a = (n >> 31) * 2 + 1, Q = n >>> 20 & 2047, E = 4294967296 * (n & 1048575) + B;
      return Q === 2047 ? E ? NaN : a * (1 / 0) : Q === 0 ? a * 5e-324 * E : a * Math.pow(2, Q - 1075) * (E + 4503599627370496);
    }
    g.readDoubleLE = e.bind(null, ci, 0, 4), g.readDoubleBE = e.bind(null, di, 4, 0);
  }(), g;
}
function Ei(g, I, e) {
  I[e] = g & 255, I[e + 1] = g >>> 8 & 255, I[e + 2] = g >>> 16 & 255, I[e + 3] = g >>> 24;
}
function si(g, I, e) {
  I[e] = g >>> 24, I[e + 1] = g >>> 16 & 255, I[e + 2] = g >>> 8 & 255, I[e + 3] = g & 255;
}
function ci(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function di(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function hi(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var wr = pr;
function pr(g) {
  try {
    if (typeof hi != "function")
      return null;
    var I = hi(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var fB = {};
(function(g) {
  var I = g;
  I.length = function(e) {
    for (var A = 0, t = 0, o = 0; o < e.length; ++o)
      t = e.charCodeAt(o), t < 128 ? A += 1 : t < 2048 ? A += 2 : (t & 64512) === 55296 && (e.charCodeAt(o + 1) & 64512) === 56320 ? (++o, A += 4) : A += 3;
    return A;
  }, I.read = function(e, A, t) {
    var o = t - A;
    if (o < 1)
      return "";
    for (var i = null, C = [], B = 0, n; A < t; )
      n = e[A++], n < 128 ? C[B++] = n : n > 191 && n < 224 ? C[B++] = (n & 31) << 6 | e[A++] & 63 : n > 239 && n < 365 ? (n = ((n & 7) << 18 | (e[A++] & 63) << 12 | (e[A++] & 63) << 6 | e[A++] & 63) - 65536, C[B++] = 55296 + (n >> 10), C[B++] = 56320 + (n & 1023)) : C[B++] = (n & 15) << 12 | (e[A++] & 63) << 6 | e[A++] & 63, B > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, C)), B = 0);
    return i ? (B && i.push(String.fromCharCode.apply(String, C.slice(0, B))), i.join("")) : String.fromCharCode.apply(String, C.slice(0, B));
  }, I.write = function(e, A, t) {
    for (var o = t, i, C, B = 0; B < e.length; ++B)
      i = e.charCodeAt(B), i < 128 ? A[t++] = i : i < 2048 ? (A[t++] = i >> 6 | 192, A[t++] = i & 63 | 128) : (i & 64512) === 55296 && ((C = e.charCodeAt(B + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (C & 1023), ++B, A[t++] = i >> 18 | 240, A[t++] = i >> 12 & 63 | 128, A[t++] = i >> 6 & 63 | 128, A[t++] = i & 63 | 128) : (A[t++] = i >> 12 | 224, A[t++] = i >> 6 & 63 | 128, A[t++] = i & 63 | 128);
    return t - o;
  };
})(fB);
var mr = Gr;
function Gr(g, I, e) {
  var A = e || 8192, t = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > t)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var B = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), B;
  };
}
var v0, li;
function kr() {
  if (li)
    return v0;
  li = 1, v0 = I;
  var g = Fe();
  function I(o, i) {
    this.lo = o >>> 0, this.hi = i >>> 0;
  }
  var e = I.zero = new I(0, 0);
  e.toNumber = function() {
    return 0;
  }, e.zzEncode = e.zzDecode = function() {
    return this;
  }, e.length = function() {
    return 1;
  };
  var A = I.zeroHash = "\0\0\0\0\0\0\0\0";
  I.fromNumber = function(o) {
    if (o === 0)
      return e;
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
    return o.low || o.high ? new I(o.low >>> 0, o.high >>> 0) : e;
  }, I.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var i = ~this.lo + 1 >>> 0, C = ~this.hi >>> 0;
      return i || (C = C + 1 >>> 0), -(i + C * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, I.prototype.toLong = function(o) {
    return g.Long ? new g.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var t = String.prototype.charCodeAt;
  return I.fromHash = function(o) {
    return o === A ? e : new I(
      (t.call(o, 0) | t.call(o, 1) << 8 | t.call(o, 2) << 16 | t.call(o, 3) << 24) >>> 0,
      (t.call(o, 4) | t.call(o, 5) << 8 | t.call(o, 6) << 16 | t.call(o, 7) << 24) >>> 0
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
  }, v0;
}
var ui;
function Fe() {
  return ui || (ui = 1, function(g) {
    var I = g;
    I.asPromise = ur, I.base64 = uB, I.EventEmitter = Dr, I.float = yr, I.inquire = wr, I.utf8 = fB, I.pool = mr, I.LongBits = kr(), I.isNode = !!(typeof xe < "u" && xe && xe.process && xe.process.versions && xe.process.versions.node), I.global = I.isNode && xe || typeof window < "u" && window || typeof self < "u" && self || xe, I.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), I.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), I.isInteger = Number.isInteger || /* istanbul ignore next */
    function(t) {
      return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
    }, I.isString = function(t) {
      return typeof t == "string" || t instanceof String;
    }, I.isObject = function(t) {
      return t && typeof t == "object";
    }, I.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    I.isSet = function(t, o) {
      var i = t[o];
      return i != null && t.hasOwnProperty(o) ? typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1;
    }, I.Buffer = function() {
      try {
        var t = I.inquire("buffer").Buffer;
        return t.prototype.utf8Write ? t : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), I._Buffer_from = null, I._Buffer_allocUnsafe = null, I.newBuffer = function(t) {
      return typeof t == "number" ? I.Buffer ? I._Buffer_allocUnsafe(t) : new I.Array(t) : I.Buffer ? I._Buffer_from(t) : typeof Uint8Array > "u" ? t : new Uint8Array(t);
    }, I.Array = typeof Uint8Array < "u" ? Uint8Array : Array, I.Long = /* istanbul ignore next */
    I.global.dcodeIO && /* istanbul ignore next */
    I.global.dcodeIO.Long || /* istanbul ignore next */
    I.global.Long || I.inquire("long"), I.key2Re = /^true|false|0|1$/, I.key32Re = /^-?(?:0|[1-9][0-9]*)$/, I.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, I.longToHash = function(t) {
      return t ? I.LongBits.from(t).toHash() : I.LongBits.zeroHash;
    }, I.longFromHash = function(t, o) {
      var i = I.LongBits.fromHash(t);
      return I.Long ? I.Long.fromBits(i.lo, i.hi, o) : i.toNumber(!!o);
    };
    function e(t, o, i) {
      for (var C = Object.keys(o), B = 0; B < C.length; ++B)
        (t[C[B]] === void 0 || !i) && (t[C[B]] = o[C[B]]);
      return t;
    }
    I.merge = e, I.lcFirst = function(t) {
      return t.charAt(0).toLowerCase() + t.substring(1);
    };
    function A(t) {
      function o(i, C) {
        if (!(this instanceof o))
          return new o(i, C);
        Object.defineProperty(this, "message", { get: function() {
          return i;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), C && e(this, C);
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
            return t;
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
    I.newError = A, I.ProtocolError = A("ProtocolError"), I.oneOfGetter = function(t) {
      for (var o = {}, i = 0; i < t.length; ++i)
        o[t[i]] = 1;
      return function() {
        for (var C = Object.keys(this), B = C.length - 1; B > -1; --B)
          if (o[C[B]] === 1 && this[C[B]] !== void 0 && this[C[B]] !== null)
            return C[B];
      };
    }, I.oneOfSetter = function(t) {
      return function(o) {
        for (var i = 0; i < t.length; ++i)
          t[i] !== o && delete this[t[i]];
      };
    }, I.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, I._configure = function() {
      var t = I.Buffer;
      if (!t) {
        I._Buffer_from = I._Buffer_allocUnsafe = null;
        return;
      }
      I._Buffer_from = t.from !== Uint8Array.from && t.from || /* istanbul ignore next */
      function(o, i) {
        return new t(o, i);
      }, I._Buffer_allocUnsafe = t.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new t(o);
      };
    };
  }(xi)), xi;
}
var DB = L, SA = Fe(), mI, s0 = SA.LongBits, fi = SA.base64, Di = SA.utf8;
function _t(g, I, e) {
  this.fn = g, this.len = I, this.next = void 0, this.val = e;
}
function Ao() {
}
function br(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function L() {
  this.len = 0, this.head = new _t(Ao, 0, 0), this.tail = this.head, this.states = null;
}
var yB = function() {
  return SA.Buffer ? function() {
    return (L.create = function() {
      return new mI();
    })();
  } : function() {
    return new L();
  };
};
L.create = yB();
L.alloc = function(g) {
  return new SA.Array(g);
};
SA.Array !== Array && (L.alloc = SA.pool(L.alloc, SA.Array.prototype.subarray));
L.prototype._push = function(g, I, e) {
  return this.tail = this.tail.next = new _t(g, I, e), this.len += I, this;
};
function eo(g, I, e) {
  I[e] = g & 255;
}
function Nr(g, I, e) {
  for (; g > 127; )
    I[e++] = g & 127 | 128, g >>>= 7;
  I[e] = g;
}
function to(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
to.prototype = Object.create(_t.prototype);
to.prototype.fn = Nr;
L.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new to(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
L.prototype.int32 = function(g) {
  return g < 0 ? this._push(go, 10, s0.fromNumber(g)) : this.uint32(g);
};
L.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function go(g, I, e) {
  for (; g.hi; )
    I[e++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[e++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[e++] = g.lo;
}
L.prototype.uint64 = function(g) {
  var I = s0.from(g);
  return this._push(go, I.length(), I);
};
L.prototype.int64 = L.prototype.uint64;
L.prototype.sint64 = function(g) {
  var I = s0.from(g).zzEncode();
  return this._push(go, I.length(), I);
};
L.prototype.bool = function(g) {
  return this._push(eo, 1, g ? 1 : 0);
};
function GI(g, I, e) {
  I[e] = g & 255, I[e + 1] = g >>> 8 & 255, I[e + 2] = g >>> 16 & 255, I[e + 3] = g >>> 24;
}
L.prototype.fixed32 = function(g) {
  return this._push(GI, 4, g >>> 0);
};
L.prototype.sfixed32 = L.prototype.fixed32;
L.prototype.fixed64 = function(g) {
  var I = s0.from(g);
  return this._push(GI, 4, I.lo)._push(GI, 4, I.hi);
};
L.prototype.sfixed64 = L.prototype.fixed64;
L.prototype.float = function(g) {
  return this._push(SA.float.writeFloatLE, 4, g);
};
L.prototype.double = function(g) {
  return this._push(SA.float.writeDoubleLE, 8, g);
};
var Rr = SA.Array.prototype.set ? function(g, I, e) {
  I.set(g, e);
} : function(g, I, e) {
  for (var A = 0; A < g.length; ++A)
    I[e + A] = g[A];
};
L.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(eo, 1, 0);
  if (SA.isString(g)) {
    var e = L.alloc(I = fi.length(g));
    fi.decode(g, e, 0), g = e;
  }
  return this.uint32(I)._push(Rr, I, g);
};
L.prototype.string = function(g) {
  var I = Di.length(g);
  return I ? this.uint32(I)._push(Di.write, I, g) : this._push(eo, 1, 0);
};
L.prototype.fork = function() {
  return this.states = new br(this), this.head = this.tail = new _t(Ao, 0, 0), this.len = 0, this;
};
L.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new _t(Ao, 0, 0), this.len = 0), this;
};
L.prototype.ldelim = function() {
  var g = this.head, I = this.tail, e = this.len;
  return this.reset().uint32(e), e && (this.tail.next = g.next, this.tail = I, this.len += e), this;
};
L.prototype.finish = function() {
  for (var g = this.head.next, I = this.constructor.alloc(this.len), e = 0; g; )
    g.fn(g.val, I, e), e += g.len, g = g.next;
  return I;
};
L._configure = function(g) {
  mI = g, L.create = yB(), mI._configure();
};
var Fr = ZA, wB = DB;
(ZA.prototype = Object.create(wB.prototype)).constructor = ZA;
var Be = Fe();
function ZA() {
  wB.call(this);
}
ZA._configure = function() {
  ZA.alloc = Be._Buffer_allocUnsafe, ZA.writeBytesBuffer = Be.Buffer && Be.Buffer.prototype instanceof Uint8Array && Be.Buffer.prototype.set.name === "set" ? function(g, I, e) {
    I.set(g, e);
  } : function(g, I, e) {
    if (g.copy)
      g.copy(I, e, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[e++] = g[A++];
  };
};
ZA.prototype.bytes = function(g) {
  Be.isString(g) && (g = Be._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(ZA.writeBytesBuffer, I, g), this;
};
function Sr(g, I, e) {
  g.length < 40 ? Be.utf8.write(g, I, e) : I.utf8Write ? I.utf8Write(g, e) : I.write(g, e);
}
ZA.prototype.string = function(g) {
  var I = Be.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(Sr, I, g), this;
};
ZA._configure();
var pB = $, jA = Fe(), kI, mB = jA.LongBits, Mr = jA.utf8;
function UA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function $(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var yi = typeof Uint8Array < "u" ? function(g) {
  if (g instanceof Uint8Array || Array.isArray(g))
    return new $(g);
  throw Error("illegal buffer");
} : function(g) {
  if (Array.isArray(g))
    return new $(g);
  throw Error("illegal buffer");
}, GB = function() {
  return jA.Buffer ? function(g) {
    return ($.create = function(I) {
      return jA.Buffer.isBuffer(I) ? new kI(I) : yi(I);
    })(g);
  } : yi;
};
$.create = GB();
$.prototype._slice = jA.Array.prototype.subarray || /* istanbul ignore next */
jA.Array.prototype.slice;
$.prototype.uint32 = /* @__PURE__ */ function() {
  var g = 4294967295;
  return function() {
    if (g = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (g = (g | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return g;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, UA(this, 10);
    return g;
  };
}();
$.prototype.int32 = function() {
  return this.uint32() | 0;
};
$.prototype.sint32 = function() {
  var g = this.uint32();
  return g >>> 1 ^ -(g & 1) | 0;
};
function Y0() {
  var g = new mB(0, 0), I = 0;
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
        throw UA(this);
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
        throw UA(this);
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
  throw Error("invalid varint encoding");
}
$.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Og(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
$.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  return Og(this.buf, this.pos += 4);
};
$.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  return Og(this.buf, this.pos += 4) | 0;
};
function wi() {
  if (this.pos + 8 > this.len)
    throw UA(this, 8);
  return new mB(Og(this.buf, this.pos += 4), Og(this.buf, this.pos += 4));
}
$.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  var g = jA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
$.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw UA(this, 4);
  var g = jA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
$.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, e = this.pos + g;
  if (e > this.len)
    throw UA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, e) : I === e ? new this.buf.constructor(0) : this._slice.call(this.buf, I, e);
};
$.prototype.string = function() {
  var g = this.bytes();
  return Mr.read(g, 0, g.length);
};
$.prototype.skip = function(g) {
  if (typeof g == "number") {
    if (this.pos + g > this.len)
      throw UA(this, g);
    this.pos += g;
  } else
    do
      if (this.pos >= this.len)
        throw UA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
$.prototype.skipType = function(g) {
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
$._configure = function(g) {
  kI = g, $.create = GB(), kI._configure();
  var I = jA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  jA.merge($.prototype, {
    int64: function() {
      return Y0.call(this)[I](!1);
    },
    uint64: function() {
      return Y0.call(this)[I](!0);
    },
    sint64: function() {
      return Y0.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return wi.call(this)[I](!0);
    },
    sfixed64: function() {
      return wi.call(this)[I](!1);
    }
  });
};
var Lr = be, kB = pB;
(be.prototype = Object.create(kB.prototype)).constructor = be;
var pi = Fe();
function be(g) {
  kB.call(this, g);
}
be._configure = function() {
  pi.Buffer && (be.prototype._slice = pi.Buffer.prototype.slice);
};
be.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
be._configure();
var bB = {}, Jr = Nt, Io = Fe();
(Nt.prototype = Object.create(Io.EventEmitter.prototype)).constructor = Nt;
function Nt(g, I, e) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  Io.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!e;
}
Nt.prototype.rpcCall = function g(I, e, A, t, o) {
  if (!t)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return Io.asPromise(g, i, I, e, A, t);
  if (!i.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return i.rpcImpl(
      I,
      e[i.requestDelimited ? "encodeDelimited" : "encode"](t).finish(),
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
          } catch (n) {
            return i.emit("error", n, I), o(n);
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
Nt.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = Jr;
})(bB);
var vr = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = DB, I.BufferWriter = Fr, I.Reader = pB, I.BufferReader = Lr, I.util = Fe(), I.rpc = bB, I.roots = vr, I.configure = e;
  function e() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  e();
})(lB);
var K = lB;
const f = K.Reader, X = K.Writer, l = K.util, c = K.roots.default || (K.roots.default = {}), Ne = c.dot = (() => {
  const g = {};
  return g.Content = function() {
    function I(e) {
      if (e)
        for (let A = Object.keys(e), t = 0; t < A.length; ++t)
          e[A[t]] != null && (this[A[t]] = e[A[t]]);
    }
    return I.prototype.token = l.newBuffer([]), I.prototype.iv = l.newBuffer([]), I.prototype.schemaVersion = 0, I.prototype.bytes = l.newBuffer([]), I.create = function(e) {
      return new I(e);
    }, I.encode = function(e, A) {
      return A || (A = X.create()), e.token != null && Object.hasOwnProperty.call(e, "token") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.token), e.iv != null && Object.hasOwnProperty.call(e, "iv") && A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(e.iv), e.schemaVersion != null && Object.hasOwnProperty.call(e, "schemaVersion") && A.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(e.schemaVersion), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(e.bytes), A;
    }, I.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, I.decode = function(e, A) {
      e instanceof f || (e = f.create(e));
      let t = A === void 0 ? e.len : e.pos + A, o = new c.dot.Content();
      for (; e.pos < t; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1: {
            o.token = e.bytes();
            break;
          }
          case 2: {
            o.iv = e.bytes();
            break;
          }
          case 3: {
            o.schemaVersion = e.int32();
            break;
          }
          case 4: {
            o.bytes = e.bytes();
            break;
          }
          default:
            e.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, I.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.token != null && e.hasOwnProperty("token") && !(e.token && typeof e.token.length == "number" || l.isString(e.token)) ? "token: buffer expected" : e.iv != null && e.hasOwnProperty("iv") && !(e.iv && typeof e.iv.length == "number" || l.isString(e.iv)) ? "iv: buffer expected" : e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && !l.isInteger(e.schemaVersion) ? "schemaVersion: integer expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || l.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, I.fromObject = function(e) {
      if (e instanceof c.dot.Content)
        return e;
      let A = new c.dot.Content();
      return e.token != null && (typeof e.token == "string" ? l.base64.decode(e.token, A.token = l.newBuffer(l.base64.length(e.token)), 0) : e.token.length >= 0 && (A.token = e.token)), e.iv != null && (typeof e.iv == "string" ? l.base64.decode(e.iv, A.iv = l.newBuffer(l.base64.length(e.iv)), 0) : e.iv.length >= 0 && (A.iv = e.iv)), e.schemaVersion != null && (A.schemaVersion = e.schemaVersion | 0), e.bytes != null && (typeof e.bytes == "string" ? l.base64.decode(e.bytes, A.bytes = l.newBuffer(l.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), A;
    }, I.toObject = function(e, A) {
      A || (A = {});
      let t = {};
      return A.defaults && (A.bytes === String ? t.token = "" : (t.token = [], A.bytes !== Array && (t.token = l.newBuffer(t.token))), A.bytes === String ? t.iv = "" : (t.iv = [], A.bytes !== Array && (t.iv = l.newBuffer(t.iv))), t.schemaVersion = 0, A.bytes === String ? t.bytes = "" : (t.bytes = [], A.bytes !== Array && (t.bytes = l.newBuffer(t.bytes)))), e.token != null && e.hasOwnProperty("token") && (t.token = A.bytes === String ? l.base64.encode(e.token, 0, e.token.length) : A.bytes === Array ? Array.prototype.slice.call(e.token) : e.token), e.iv != null && e.hasOwnProperty("iv") && (t.iv = A.bytes === String ? l.base64.encode(e.iv, 0, e.iv.length) : A.bytes === Array ? Array.prototype.slice.call(e.iv) : e.iv), e.schemaVersion != null && e.hasOwnProperty("schemaVersion") && (t.schemaVersion = e.schemaVersion), e.bytes != null && e.hasOwnProperty("bytes") && (t.bytes = A.bytes === String ? l.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), t;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, K.util.toJSONOptions);
    }, I.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Content";
    }, I;
  }(), g.v4 = function() {
    const I = {};
    return I.MagnifEyeLivenessContent = function() {
      function e(A) {
        if (this.images = [], A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.images = l.emptyArray, e.prototype.metadata = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        if (t || (t = X.create()), A.images != null && A.images.length)
          for (let o = 0; o < A.images.length; ++o)
            c.dot.Image.encode(A.images[o], t.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.MagnifEyeLivenessContent();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let t = 0; t < A.images.length; ++t) {
            let o = c.dot.Image.verify(A.images[t]);
            if (o)
              return "images." + o;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let t = c.dot.v4.Metadata.verify(A.metadata);
          if (t)
            return "metadata." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.MagnifEyeLivenessContent)
          return A;
        let t = new c.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          t.images = [];
          for (let o = 0; o < A.images.length; ++o) {
            if (typeof A.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            t.images[o] = c.dot.Image.fromObject(A.images[o]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          t.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        if ((t.arrays || t.defaults) && (o.images = []), t.defaults && (o.metadata = null), A.images && A.images.length) {
          o.images = [];
          for (let i = 0; i < A.images.length; ++i)
            o.images[i] = c.dot.Image.toObject(A.images[i], t);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, e;
    }(), I.Metadata = function() {
      function e(t) {
        if (t)
          for (let o = Object.keys(t), i = 0; i < o.length; ++i)
            t[o[i]] != null && (this[o[i]] = t[o[i]]);
      }
      e.prototype.platform = 0, e.prototype.sessionToken = null, e.prototype.componentVersion = "", e.prototype.web = null, e.prototype.android = null, e.prototype.ios = null;
      let A;
      return Object.defineProperty(e.prototype, "_sessionToken", {
        get: l.oneOfGetter(A = ["sessionToken"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "metadata", {
        get: l.oneOfGetter(A = ["web", "android", "ios"]),
        set: l.oneOfSetter(A)
      }), e.create = function(t) {
        return new e(t);
      }, e.encode = function(t, o) {
        return o || (o = X.create()), t.platform != null && Object.hasOwnProperty.call(t, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(t.platform), t.web != null && Object.hasOwnProperty.call(t, "web") && c.dot.v4.WebMetadata.encode(t.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t.android != null && Object.hasOwnProperty.call(t, "android") && c.dot.v4.AndroidMetadata.encode(t.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), t.ios != null && Object.hasOwnProperty.call(t, "ios") && c.dot.v4.IosMetadata.encode(t.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), t.sessionToken != null && Object.hasOwnProperty.call(t, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(t.sessionToken), t.componentVersion != null && Object.hasOwnProperty.call(t, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(t.componentVersion), o;
      }, e.encodeDelimited = function(t, o) {
        return this.encode(t, o).ldelim();
      }, e.decode = function(t, o) {
        t instanceof f || (t = f.create(t));
        let i = o === void 0 ? t.len : t.pos + o, C = new c.dot.v4.Metadata();
        for (; t.pos < i; ) {
          let B = t.uint32();
          switch (B >>> 3) {
            case 1: {
              C.platform = t.int32();
              break;
            }
            case 5: {
              C.sessionToken = t.string();
              break;
            }
            case 6: {
              C.componentVersion = t.string();
              break;
            }
            case 2: {
              C.web = c.dot.v4.WebMetadata.decode(t, t.uint32());
              break;
            }
            case 3: {
              C.android = c.dot.v4.AndroidMetadata.decode(t, t.uint32());
              break;
            }
            case 4: {
              C.ios = c.dot.v4.IosMetadata.decode(t, t.uint32());
              break;
            }
            default:
              t.skipType(B & 7);
              break;
          }
        }
        return C;
      }, e.decodeDelimited = function(t) {
        return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
      }, e.verify = function(t) {
        if (typeof t != "object" || t === null)
          return "object expected";
        let o = {};
        if (t.platform != null && t.hasOwnProperty("platform"))
          switch (t.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (t.sessionToken != null && t.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !l.isString(t.sessionToken)))
          return "sessionToken: string expected";
        if (t.componentVersion != null && t.hasOwnProperty("componentVersion") && !l.isString(t.componentVersion))
          return "componentVersion: string expected";
        if (t.web != null && t.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let i = c.dot.v4.WebMetadata.verify(t.web);
            if (i)
              return "web." + i;
          }
        }
        if (t.android != null && t.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = c.dot.v4.AndroidMetadata.verify(t.android);
            if (i)
              return "android." + i;
          }
        }
        if (t.ios != null && t.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = c.dot.v4.IosMetadata.verify(t.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, e.fromObject = function(t) {
        if (t instanceof c.dot.v4.Metadata)
          return t;
        let o = new c.dot.v4.Metadata();
        switch (t.platform) {
          default:
            if (typeof t.platform == "number") {
              o.platform = t.platform;
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
        if (t.sessionToken != null && (o.sessionToken = String(t.sessionToken)), t.componentVersion != null && (o.componentVersion = String(t.componentVersion)), t.web != null) {
          if (typeof t.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = c.dot.v4.WebMetadata.fromObject(t.web);
        }
        if (t.android != null) {
          if (typeof t.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = c.dot.v4.AndroidMetadata.fromObject(t.android);
        }
        if (t.ios != null) {
          if (typeof t.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = c.dot.v4.IosMetadata.fromObject(t.ios);
        }
        return o;
      }, e.toObject = function(t, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.platform = o.enums === String ? "WEB" : 0, i.componentVersion = ""), t.platform != null && t.hasOwnProperty("platform") && (i.platform = o.enums === String ? c.dot.Platform[t.platform] === void 0 ? t.platform : c.dot.Platform[t.platform] : t.platform), t.web != null && t.hasOwnProperty("web") && (i.web = c.dot.v4.WebMetadata.toObject(t.web, o), o.oneofs && (i.metadata = "web")), t.android != null && t.hasOwnProperty("android") && (i.android = c.dot.v4.AndroidMetadata.toObject(t.android, o), o.oneofs && (i.metadata = "android")), t.ios != null && t.hasOwnProperty("ios") && (i.ios = c.dot.v4.IosMetadata.toObject(t.ios, o), o.oneofs && (i.metadata = "ios")), t.sessionToken != null && t.hasOwnProperty("sessionToken") && (i.sessionToken = t.sessionToken, o.oneofs && (i._sessionToken = "sessionToken")), t.componentVersion != null && t.hasOwnProperty("componentVersion") && (i.componentVersion = t.componentVersion), i;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(t) {
        return t === void 0 && (t = "type.googleapis.com"), t + "/dot.v4.Metadata";
      }, e;
    }(), I.AndroidMetadata = function() {
      function e(t) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, t)
          for (let o = Object.keys(t), i = 0; i < o.length; ++i)
            t[o[i]] != null && (this[o[i]] = t[o[i]]);
      }
      e.prototype.supportedAbis = l.emptyArray, e.prototype.device = null, e.prototype.digests = l.emptyArray, e.prototype.digestsWithTimestamp = l.emptyArray, e.prototype.dynamicCameraFrameProperties = l.emptyObject;
      let A;
      return Object.defineProperty(e.prototype, "_device", {
        get: l.oneOfGetter(A = ["device"]),
        set: l.oneOfSetter(A)
      }), e.create = function(t) {
        return new e(t);
      }, e.encode = function(t, o) {
        if (o || (o = X.create()), t.supportedAbis != null && t.supportedAbis.length)
          for (let i = 0; i < t.supportedAbis.length; ++i)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(t.supportedAbis[i]);
        if (t.device != null && Object.hasOwnProperty.call(t, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(t.device), t.digests != null && t.digests.length)
          for (let i = 0; i < t.digests.length; ++i)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(t.digests[i]);
        if (t.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(t, "dynamicCameraFrameProperties"))
          for (let i = Object.keys(t.dynamicCameraFrameProperties), C = 0; C < i.length; ++C)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[C]), c.dot.Int32List.encode(t.dynamicCameraFrameProperties[i[C]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (t.digestsWithTimestamp != null && t.digestsWithTimestamp.length)
          for (let i = 0; i < t.digestsWithTimestamp.length; ++i)
            c.dot.DigestWithTimestamp.encode(t.digestsWithTimestamp[i], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, e.encodeDelimited = function(t, o) {
        return this.encode(t, o).ldelim();
      }, e.decode = function(t, o) {
        t instanceof f || (t = f.create(t));
        let i = o === void 0 ? t.len : t.pos + o, C = new c.dot.v4.AndroidMetadata(), B, n;
        for (; t.pos < i; ) {
          let a = t.uint32();
          switch (a >>> 3) {
            case 1: {
              C.supportedAbis && C.supportedAbis.length || (C.supportedAbis = []), C.supportedAbis.push(t.string());
              break;
            }
            case 2: {
              C.device = t.string();
              break;
            }
            case 3: {
              C.digests && C.digests.length || (C.digests = []), C.digests.push(t.bytes());
              break;
            }
            case 5: {
              C.digestsWithTimestamp && C.digestsWithTimestamp.length || (C.digestsWithTimestamp = []), C.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(t, t.uint32()));
              break;
            }
            case 4: {
              C.dynamicCameraFrameProperties === l.emptyObject && (C.dynamicCameraFrameProperties = {});
              let Q = t.uint32() + t.pos;
              for (B = "", n = null; t.pos < Q; ) {
                let E = t.uint32();
                switch (E >>> 3) {
                  case 1:
                    B = t.string();
                    break;
                  case 2:
                    n = c.dot.Int32List.decode(t, t.uint32());
                    break;
                  default:
                    t.skipType(E & 7);
                    break;
                }
              }
              C.dynamicCameraFrameProperties[B] = n;
              break;
            }
            default:
              t.skipType(a & 7);
              break;
          }
        }
        return C;
      }, e.decodeDelimited = function(t) {
        return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
      }, e.verify = function(t) {
        if (typeof t != "object" || t === null)
          return "object expected";
        if (t.supportedAbis != null && t.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(t.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < t.supportedAbis.length; ++o)
            if (!l.isString(t.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (t.device != null && t.hasOwnProperty("device") && !l.isString(t.device))
          return "device: string expected";
        if (t.digests != null && t.hasOwnProperty("digests")) {
          if (!Array.isArray(t.digests))
            return "digests: array expected";
          for (let o = 0; o < t.digests.length; ++o)
            if (!(t.digests[o] && typeof t.digests[o].length == "number" || l.isString(t.digests[o])))
              return "digests: buffer[] expected";
        }
        if (t.digestsWithTimestamp != null && t.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(t.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < t.digestsWithTimestamp.length; ++o) {
            let i = c.dot.DigestWithTimestamp.verify(t.digestsWithTimestamp[o]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (t.dynamicCameraFrameProperties != null && t.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(t.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(t.dynamicCameraFrameProperties);
          for (let i = 0; i < o.length; ++i) {
            let C = c.dot.Int32List.verify(t.dynamicCameraFrameProperties[o[i]]);
            if (C)
              return "dynamicCameraFrameProperties." + C;
          }
        }
        return null;
      }, e.fromObject = function(t) {
        if (t instanceof c.dot.v4.AndroidMetadata)
          return t;
        let o = new c.dot.v4.AndroidMetadata();
        if (t.supportedAbis) {
          if (!Array.isArray(t.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let i = 0; i < t.supportedAbis.length; ++i)
            o.supportedAbis[i] = String(t.supportedAbis[i]);
        }
        if (t.device != null && (o.device = String(t.device)), t.digests) {
          if (!Array.isArray(t.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let i = 0; i < t.digests.length; ++i)
            typeof t.digests[i] == "string" ? l.base64.decode(t.digests[i], o.digests[i] = l.newBuffer(l.base64.length(t.digests[i])), 0) : t.digests[i].length >= 0 && (o.digests[i] = t.digests[i]);
        }
        if (t.digestsWithTimestamp) {
          if (!Array.isArray(t.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let i = 0; i < t.digestsWithTimestamp.length; ++i) {
            if (typeof t.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[i] = c.dot.DigestWithTimestamp.fromObject(t.digestsWithTimestamp[i]);
          }
        }
        if (t.dynamicCameraFrameProperties) {
          if (typeof t.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(t.dynamicCameraFrameProperties), C = 0; C < i.length; ++C) {
            if (typeof t.dynamicCameraFrameProperties[i[C]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[i[C]] = c.dot.Int32List.fromObject(t.dynamicCameraFrameProperties[i[C]]);
          }
        }
        return o;
      }, e.toObject = function(t, o) {
        o || (o = {});
        let i = {};
        if ((o.arrays || o.defaults) && (i.supportedAbis = [], i.digests = [], i.digestsWithTimestamp = []), (o.objects || o.defaults) && (i.dynamicCameraFrameProperties = {}), t.supportedAbis && t.supportedAbis.length) {
          i.supportedAbis = [];
          for (let B = 0; B < t.supportedAbis.length; ++B)
            i.supportedAbis[B] = t.supportedAbis[B];
        }
        if (t.device != null && t.hasOwnProperty("device") && (i.device = t.device, o.oneofs && (i._device = "device")), t.digests && t.digests.length) {
          i.digests = [];
          for (let B = 0; B < t.digests.length; ++B)
            i.digests[B] = o.bytes === String ? l.base64.encode(t.digests[B], 0, t.digests[B].length) : o.bytes === Array ? Array.prototype.slice.call(t.digests[B]) : t.digests[B];
        }
        let C;
        if (t.dynamicCameraFrameProperties && (C = Object.keys(t.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let B = 0; B < C.length; ++B)
            i.dynamicCameraFrameProperties[C[B]] = c.dot.Int32List.toObject(t.dynamicCameraFrameProperties[C[B]], o);
        }
        if (t.digestsWithTimestamp && t.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let B = 0; B < t.digestsWithTimestamp.length; ++B)
            i.digestsWithTimestamp[B] = c.dot.DigestWithTimestamp.toObject(t.digestsWithTimestamp[B], o);
        }
        return i;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(t) {
        return t === void 0 && (t = "type.googleapis.com"), t + "/dot.v4.AndroidMetadata";
      }, e;
    }(), I.IosMetadata = function() {
      function e(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.cameraModelId = "", e.prototype.architectureInfo = l.emptyObject, e.prototype.digests = l.emptyArray, e.prototype.digestsWithTimestamp = l.emptyArray, e.prototype.isoValues = l.emptyArray, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        if (t || (t = X.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let o = Object.keys(A.architectureInfo), i = 0; i < o.length; ++i)
            t.uint32(
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
            t.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[o]);
        if (A.isoValues != null && A.isoValues.length) {
          t.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let o = 0; o < A.isoValues.length; ++o)
            t.int32(A.isoValues[o]);
          t.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o)
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[o], t.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.IosMetadata(), C, B;
        for (; A.pos < o; ) {
          let n = A.uint32();
          switch (n >>> 3) {
            case 1: {
              i.cameraModelId = A.string();
              break;
            }
            case 2: {
              i.architectureInfo === l.emptyObject && (i.architectureInfo = {});
              let a = A.uint32() + A.pos;
              for (C = "", B = !1; A.pos < a; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    C = A.string();
                    break;
                  case 2:
                    B = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
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
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (n & 7) === 2) {
                let a = A.uint32() + A.pos;
                for (; A.pos < a; )
                  i.isoValues.push(A.int32());
              } else
                i.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(n & 7);
              break;
          }
        }
        return i;
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !l.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!l.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let t = Object.keys(A.architectureInfo);
          for (let o = 0; o < t.length; ++o)
            if (typeof A.architectureInfo[t[o]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let t = 0; t < A.digests.length; ++t)
            if (!(A.digests[t] && typeof A.digests[t].length == "number" || l.isString(A.digests[t])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let t = 0; t < A.digestsWithTimestamp.length; ++t) {
            let o = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[t]);
            if (o)
              return "digestsWithTimestamp." + o;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let t = 0; t < A.isoValues.length; ++t)
            if (!l.isInteger(A.isoValues[t]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.IosMetadata)
          return A;
        let t = new c.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (t.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          t.architectureInfo = {};
          for (let o = Object.keys(A.architectureInfo), i = 0; i < o.length; ++i)
            t.architectureInfo[o[i]] = !!A.architectureInfo[o[i]];
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          t.digests = [];
          for (let o = 0; o < A.digests.length; ++o)
            typeof A.digests[o] == "string" ? l.base64.decode(A.digests[o], t.digests[o] = l.newBuffer(l.base64.length(A.digests[o])), 0) : A.digests[o].length >= 0 && (t.digests[o] = A.digests[o]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          t.digestsWithTimestamp = [];
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            if (typeof A.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            t.digestsWithTimestamp[o] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[o]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          t.isoValues = [];
          for (let o = 0; o < A.isoValues.length; ++o)
            t.isoValues[o] = A.isoValues[o] | 0;
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        (t.arrays || t.defaults) && (o.digests = [], o.isoValues = [], o.digestsWithTimestamp = []), (t.objects || t.defaults) && (o.architectureInfo = {}), t.defaults && (o.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (o.cameraModelId = A.cameraModelId);
        let i;
        if (A.architectureInfo && (i = Object.keys(A.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let C = 0; C < i.length; ++C)
            o.architectureInfo[i[C]] = A.architectureInfo[i[C]];
        }
        if (A.digests && A.digests.length) {
          o.digests = [];
          for (let C = 0; C < A.digests.length; ++C)
            o.digests[C] = t.bytes === String ? l.base64.encode(A.digests[C], 0, A.digests[C].length) : t.bytes === Array ? Array.prototype.slice.call(A.digests[C]) : A.digests[C];
        }
        if (A.isoValues && A.isoValues.length) {
          o.isoValues = [];
          for (let C = 0; C < A.isoValues.length; ++C)
            o.isoValues[C] = A.isoValues[C];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let C = 0; C < A.digestsWithTimestamp.length; ++C)
            o.digestsWithTimestamp[C] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[C], t);
        }
        return o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, e;
    }(), I.WebMetadata = function() {
      function e(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.currentCameraProperties = null, e.prototype.availableCameraProperties = l.emptyArray, e.prototype.hashedDetectedImages = l.emptyArray, e.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, e.prototype.detectionRecord = l.emptyArray, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        if (t || (t = X.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let o = 0; o < A.availableCameraProperties.length; ++o)
            c.dot.v4.CameraProperties.encode(A.availableCameraProperties[o], t.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            t.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[o]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let o = 0; o < A.detectionRecord.length; ++o)
            c.dot.v4.DetectedObject.encode(A.detectionRecord[o], t.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o)
            c.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[o], t.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.WebMetadata();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let t = c.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (t)
            return "currentCameraProperties." + t;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let t = 0; t < A.availableCameraProperties.length; ++t) {
            let o = c.dot.v4.CameraProperties.verify(A.availableCameraProperties[t]);
            if (o)
              return "availableCameraProperties." + o;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let t = 0; t < A.hashedDetectedImages.length; ++t)
            if (!l.isString(A.hashedDetectedImages[t]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let t = 0; t < A.hashedDetectedImagesWithTimestamp.length; ++t) {
            let o = c.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[t]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let t = 0; t < A.detectionRecord.length; ++t) {
            let o = c.dot.v4.DetectedObject.verify(A.detectionRecord[t]);
            if (o)
              return "detectionRecord." + o;
          }
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.WebMetadata)
          return A;
        let t = new c.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          t.currentCameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          t.availableCameraProperties = [];
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            if (typeof A.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            t.availableCameraProperties[o] = c.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[o]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          t.hashedDetectedImages = [];
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            t.hashedDetectedImages[o] = String(A.hashedDetectedImages[o]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          t.hashedDetectedImagesWithTimestamp = [];
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o) {
            if (typeof A.hashedDetectedImagesWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            t.hashedDetectedImagesWithTimestamp[o] = c.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          t.detectionRecord = [];
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            if (typeof A.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            t.detectionRecord[o] = c.dot.v4.DetectedObject.fromObject(A.detectionRecord[o]);
          }
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        if ((t.arrays || t.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), t.defaults && (o.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, t)), A.availableCameraProperties && A.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let i = 0; i < A.availableCameraProperties.length; ++i)
            o.availableCameraProperties[i] = c.dot.v4.CameraProperties.toObject(A.availableCameraProperties[i], t);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let i = 0; i < A.hashedDetectedImages.length; ++i)
            o.hashedDetectedImages[i] = A.hashedDetectedImages[i];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          o.detectionRecord = [];
          for (let i = 0; i < A.detectionRecord.length; ++i)
            o.detectionRecord[i] = c.dot.v4.DetectedObject.toObject(A.detectionRecord[i], t);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < A.hashedDetectedImagesWithTimestamp.length; ++i)
            o.hashedDetectedImagesWithTimestamp[i] = c.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[i], t);
        }
        return o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, e;
    }(), I.HashedDetectedImageWithTimestamp = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.imageHash = "", e.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.imageHash != null && Object.hasOwnProperty.call(A, "imageHash") && t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.imageHash), A.timestampMillis != null && Object.hasOwnProperty.call(A, "timestampMillis") && t.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(A.timestampMillis), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.HashedDetectedImageWithTimestamp();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.imageHash != null && A.hasOwnProperty("imageHash") && !l.isString(A.imageHash) ? "imageHash: string expected" : A.timestampMillis != null && A.hasOwnProperty("timestampMillis") && !l.isInteger(A.timestampMillis) && !(A.timestampMillis && l.isInteger(A.timestampMillis.low) && l.isInteger(A.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return A;
        let t = new c.dot.v4.HashedDetectedImageWithTimestamp();
        return A.imageHash != null && (t.imageHash = String(A.imageHash)), A.timestampMillis != null && (l.Long ? (t.timestampMillis = l.Long.fromValue(A.timestampMillis)).unsigned = !0 : typeof A.timestampMillis == "string" ? t.timestampMillis = parseInt(A.timestampMillis, 10) : typeof A.timestampMillis == "number" ? t.timestampMillis = A.timestampMillis : typeof A.timestampMillis == "object" && (t.timestampMillis = new l.LongBits(A.timestampMillis.low >>> 0, A.timestampMillis.high >>> 0).toNumber(!0))), t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        if (t.defaults)
          if (o.imageHash = "", l.Long) {
            let i = new l.Long(0, 0, !0);
            o.timestampMillis = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i;
          } else
            o.timestampMillis = t.longs === String ? "0" : 0;
        return A.imageHash != null && A.hasOwnProperty("imageHash") && (o.imageHash = A.imageHash), A.timestampMillis != null && A.hasOwnProperty("timestampMillis") && (typeof A.timestampMillis == "number" ? o.timestampMillis = t.longs === String ? String(A.timestampMillis) : A.timestampMillis : o.timestampMillis = t.longs === String ? l.Long.prototype.toString.call(A.timestampMillis) : t.longs === Number ? new l.LongBits(A.timestampMillis.low >>> 0, A.timestampMillis.high >>> 0).toNumber(!0) : A.timestampMillis), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, e;
    }(), I.MediaTrackSettings = function() {
      function e(t) {
        if (t)
          for (let o = Object.keys(t), i = 0; i < o.length; ++i)
            t[o[i]] != null && (this[o[i]] = t[o[i]]);
      }
      e.prototype.aspectRatio = null, e.prototype.autoGainControl = null, e.prototype.channelCount = null, e.prototype.deviceId = null, e.prototype.displaySurface = null, e.prototype.echoCancellation = null, e.prototype.facingMode = null, e.prototype.frameRate = null, e.prototype.groupId = null, e.prototype.height = null, e.prototype.noiseSuppression = null, e.prototype.sampleRate = null, e.prototype.sampleSize = null, e.prototype.width = null, e.prototype.deviceName = null;
      let A;
      return Object.defineProperty(e.prototype, "_aspectRatio", {
        get: l.oneOfGetter(A = ["aspectRatio"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_autoGainControl", {
        get: l.oneOfGetter(A = ["autoGainControl"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_channelCount", {
        get: l.oneOfGetter(A = ["channelCount"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_deviceId", {
        get: l.oneOfGetter(A = ["deviceId"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_displaySurface", {
        get: l.oneOfGetter(A = ["displaySurface"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_echoCancellation", {
        get: l.oneOfGetter(A = ["echoCancellation"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_facingMode", {
        get: l.oneOfGetter(A = ["facingMode"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_frameRate", {
        get: l.oneOfGetter(A = ["frameRate"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_groupId", {
        get: l.oneOfGetter(A = ["groupId"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_height", {
        get: l.oneOfGetter(A = ["height"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_noiseSuppression", {
        get: l.oneOfGetter(A = ["noiseSuppression"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_sampleRate", {
        get: l.oneOfGetter(A = ["sampleRate"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_sampleSize", {
        get: l.oneOfGetter(A = ["sampleSize"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_width", {
        get: l.oneOfGetter(A = ["width"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(e.prototype, "_deviceName", {
        get: l.oneOfGetter(A = ["deviceName"]),
        set: l.oneOfSetter(A)
      }), e.create = function(t) {
        return new e(t);
      }, e.encode = function(t, o) {
        return o || (o = X.create()), t.aspectRatio != null && Object.hasOwnProperty.call(t, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(t.aspectRatio), t.autoGainControl != null && Object.hasOwnProperty.call(t, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(t.autoGainControl), t.channelCount != null && Object.hasOwnProperty.call(t, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(t.channelCount), t.deviceId != null && Object.hasOwnProperty.call(t, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(t.deviceId), t.displaySurface != null && Object.hasOwnProperty.call(t, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(t.displaySurface), t.echoCancellation != null && Object.hasOwnProperty.call(t, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(t.echoCancellation), t.facingMode != null && Object.hasOwnProperty.call(t, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(t.facingMode), t.frameRate != null && Object.hasOwnProperty.call(t, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(t.frameRate), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(t.groupId), t.height != null && Object.hasOwnProperty.call(t, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(t.height), t.noiseSuppression != null && Object.hasOwnProperty.call(t, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(t.noiseSuppression), t.sampleRate != null && Object.hasOwnProperty.call(t, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(t.sampleRate), t.sampleSize != null && Object.hasOwnProperty.call(t, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(t.sampleSize), t.width != null && Object.hasOwnProperty.call(t, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(t.width), t.deviceName != null && Object.hasOwnProperty.call(t, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(t.deviceName), o;
      }, e.encodeDelimited = function(t, o) {
        return this.encode(t, o).ldelim();
      }, e.decode = function(t, o) {
        t instanceof f || (t = f.create(t));
        let i = o === void 0 ? t.len : t.pos + o, C = new c.dot.v4.MediaTrackSettings();
        for (; t.pos < i; ) {
          let B = t.uint32();
          switch (B >>> 3) {
            case 1: {
              C.aspectRatio = t.double();
              break;
            }
            case 2: {
              C.autoGainControl = t.bool();
              break;
            }
            case 3: {
              C.channelCount = t.int32();
              break;
            }
            case 4: {
              C.deviceId = t.string();
              break;
            }
            case 5: {
              C.displaySurface = t.string();
              break;
            }
            case 6: {
              C.echoCancellation = t.bool();
              break;
            }
            case 7: {
              C.facingMode = t.string();
              break;
            }
            case 8: {
              C.frameRate = t.double();
              break;
            }
            case 9: {
              C.groupId = t.string();
              break;
            }
            case 10: {
              C.height = t.int32();
              break;
            }
            case 11: {
              C.noiseSuppression = t.bool();
              break;
            }
            case 12: {
              C.sampleRate = t.int32();
              break;
            }
            case 13: {
              C.sampleSize = t.int32();
              break;
            }
            case 14: {
              C.width = t.int32();
              break;
            }
            case 15: {
              C.deviceName = t.string();
              break;
            }
            default:
              t.skipType(B & 7);
              break;
          }
        }
        return C;
      }, e.decodeDelimited = function(t) {
        return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
      }, e.verify = function(t) {
        return typeof t != "object" || t === null ? "object expected" : t.aspectRatio != null && t.hasOwnProperty("aspectRatio") && typeof t.aspectRatio != "number" ? "aspectRatio: number expected" : t.autoGainControl != null && t.hasOwnProperty("autoGainControl") && typeof t.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : t.channelCount != null && t.hasOwnProperty("channelCount") && !l.isInteger(t.channelCount) ? "channelCount: integer expected" : t.deviceId != null && t.hasOwnProperty("deviceId") && !l.isString(t.deviceId) ? "deviceId: string expected" : t.displaySurface != null && t.hasOwnProperty("displaySurface") && !l.isString(t.displaySurface) ? "displaySurface: string expected" : t.echoCancellation != null && t.hasOwnProperty("echoCancellation") && typeof t.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : t.facingMode != null && t.hasOwnProperty("facingMode") && !l.isString(t.facingMode) ? "facingMode: string expected" : t.frameRate != null && t.hasOwnProperty("frameRate") && typeof t.frameRate != "number" ? "frameRate: number expected" : t.groupId != null && t.hasOwnProperty("groupId") && !l.isString(t.groupId) ? "groupId: string expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : t.noiseSuppression != null && t.hasOwnProperty("noiseSuppression") && typeof t.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : t.sampleRate != null && t.hasOwnProperty("sampleRate") && !l.isInteger(t.sampleRate) ? "sampleRate: integer expected" : t.sampleSize != null && t.hasOwnProperty("sampleSize") && !l.isInteger(t.sampleSize) ? "sampleSize: integer expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.deviceName != null && t.hasOwnProperty("deviceName") && !l.isString(t.deviceName) ? "deviceName: string expected" : null;
      }, e.fromObject = function(t) {
        if (t instanceof c.dot.v4.MediaTrackSettings)
          return t;
        let o = new c.dot.v4.MediaTrackSettings();
        return t.aspectRatio != null && (o.aspectRatio = Number(t.aspectRatio)), t.autoGainControl != null && (o.autoGainControl = !!t.autoGainControl), t.channelCount != null && (o.channelCount = t.channelCount | 0), t.deviceId != null && (o.deviceId = String(t.deviceId)), t.displaySurface != null && (o.displaySurface = String(t.displaySurface)), t.echoCancellation != null && (o.echoCancellation = !!t.echoCancellation), t.facingMode != null && (o.facingMode = String(t.facingMode)), t.frameRate != null && (o.frameRate = Number(t.frameRate)), t.groupId != null && (o.groupId = String(t.groupId)), t.height != null && (o.height = t.height | 0), t.noiseSuppression != null && (o.noiseSuppression = !!t.noiseSuppression), t.sampleRate != null && (o.sampleRate = t.sampleRate | 0), t.sampleSize != null && (o.sampleSize = t.sampleSize | 0), t.width != null && (o.width = t.width | 0), t.deviceName != null && (o.deviceName = String(t.deviceName)), o;
      }, e.toObject = function(t, o) {
        o || (o = {});
        let i = {};
        return t.aspectRatio != null && t.hasOwnProperty("aspectRatio") && (i.aspectRatio = o.json && !isFinite(t.aspectRatio) ? String(t.aspectRatio) : t.aspectRatio, o.oneofs && (i._aspectRatio = "aspectRatio")), t.autoGainControl != null && t.hasOwnProperty("autoGainControl") && (i.autoGainControl = t.autoGainControl, o.oneofs && (i._autoGainControl = "autoGainControl")), t.channelCount != null && t.hasOwnProperty("channelCount") && (i.channelCount = t.channelCount, o.oneofs && (i._channelCount = "channelCount")), t.deviceId != null && t.hasOwnProperty("deviceId") && (i.deviceId = t.deviceId, o.oneofs && (i._deviceId = "deviceId")), t.displaySurface != null && t.hasOwnProperty("displaySurface") && (i.displaySurface = t.displaySurface, o.oneofs && (i._displaySurface = "displaySurface")), t.echoCancellation != null && t.hasOwnProperty("echoCancellation") && (i.echoCancellation = t.echoCancellation, o.oneofs && (i._echoCancellation = "echoCancellation")), t.facingMode != null && t.hasOwnProperty("facingMode") && (i.facingMode = t.facingMode, o.oneofs && (i._facingMode = "facingMode")), t.frameRate != null && t.hasOwnProperty("frameRate") && (i.frameRate = o.json && !isFinite(t.frameRate) ? String(t.frameRate) : t.frameRate, o.oneofs && (i._frameRate = "frameRate")), t.groupId != null && t.hasOwnProperty("groupId") && (i.groupId = t.groupId, o.oneofs && (i._groupId = "groupId")), t.height != null && t.hasOwnProperty("height") && (i.height = t.height, o.oneofs && (i._height = "height")), t.noiseSuppression != null && t.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = t.noiseSuppression, o.oneofs && (i._noiseSuppression = "noiseSuppression")), t.sampleRate != null && t.hasOwnProperty("sampleRate") && (i.sampleRate = t.sampleRate, o.oneofs && (i._sampleRate = "sampleRate")), t.sampleSize != null && t.hasOwnProperty("sampleSize") && (i.sampleSize = t.sampleSize, o.oneofs && (i._sampleSize = "sampleSize")), t.width != null && t.hasOwnProperty("width") && (i.width = t.width, o.oneofs && (i._width = "width")), t.deviceName != null && t.hasOwnProperty("deviceName") && (i.deviceName = t.deviceName, o.oneofs && (i._deviceName = "deviceName")), i;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(t) {
        return t === void 0 && (t = "type.googleapis.com"), t + "/dot.v4.MediaTrackSettings";
      }, e;
    }(), I.ImageBitmap = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.width = 0, e.prototype.height = 0, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.width != null && Object.hasOwnProperty.call(A, "width") && t.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.width), A.height != null && Object.hasOwnProperty.call(A, "height") && t.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.height), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.ImageBitmap();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.ImageBitmap)
          return A;
        let t = new c.dot.v4.ImageBitmap();
        return A.width != null && (t.width = A.width | 0), A.height != null && (t.height = A.height | 0), t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.width = 0, o.height = 0), A.width != null && A.hasOwnProperty("width") && (o.width = A.width), A.height != null && A.hasOwnProperty("height") && (o.height = A.height), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ImageBitmap";
      }, e;
    }(), I.CameraProperties = function() {
      function e(t) {
        if (t)
          for (let o = Object.keys(t), i = 0; i < o.length; ++i)
            t[o[i]] != null && (this[o[i]] = t[o[i]]);
      }
      e.prototype.cameraInitFrameResolution = null, e.prototype.cameraProperties = null;
      let A;
      return Object.defineProperty(e.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(A = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(A)
      }), e.create = function(t) {
        return new e(t);
      }, e.encode = function(t, o) {
        return o || (o = X.create()), t.cameraInitFrameResolution != null && Object.hasOwnProperty.call(t, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(t.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), t.cameraProperties != null && Object.hasOwnProperty.call(t, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(t.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(t, o) {
        return this.encode(t, o).ldelim();
      }, e.decode = function(t, o) {
        t instanceof f || (t = f.create(t));
        let i = o === void 0 ? t.len : t.pos + o, C = new c.dot.v4.CameraProperties();
        for (; t.pos < i; ) {
          let B = t.uint32();
          switch (B >>> 3) {
            case 1: {
              C.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(t, t.uint32());
              break;
            }
            case 2: {
              C.cameraProperties = c.dot.v4.MediaTrackSettings.decode(t, t.uint32());
              break;
            }
            default:
              t.skipType(B & 7);
              break;
          }
        }
        return C;
      }, e.decodeDelimited = function(t) {
        return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
      }, e.verify = function(t) {
        if (typeof t != "object" || t === null)
          return "object expected";
        if (t.cameraInitFrameResolution != null && t.hasOwnProperty("cameraInitFrameResolution")) {
          let o = c.dot.v4.ImageBitmap.verify(t.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (t.cameraProperties != null && t.hasOwnProperty("cameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(t.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, e.fromObject = function(t) {
        if (t instanceof c.dot.v4.CameraProperties)
          return t;
        let o = new c.dot.v4.CameraProperties();
        if (t.cameraInitFrameResolution != null) {
          if (typeof t.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = c.dot.v4.ImageBitmap.fromObject(t.cameraInitFrameResolution);
        }
        if (t.cameraProperties != null) {
          if (typeof t.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = c.dot.v4.MediaTrackSettings.fromObject(t.cameraProperties);
        }
        return o;
      }, e.toObject = function(t, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.cameraProperties = null), t.cameraInitFrameResolution != null && t.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = c.dot.v4.ImageBitmap.toObject(t.cameraInitFrameResolution, o), o.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), t.cameraProperties != null && t.hasOwnProperty("cameraProperties") && (i.cameraProperties = c.dot.v4.MediaTrackSettings.toObject(t.cameraProperties, o)), i;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(t) {
        return t === void 0 && (t = "type.googleapis.com"), t + "/dot.v4.CameraProperties";
      }, e;
    }(), I.DetectedObject = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.brightness = 0, e.prototype.sharpness = 0, e.prototype.hotspots = 0, e.prototype.confidence = 0, e.prototype.faceSize = 0, e.prototype.faceCenter = null, e.prototype.smallestEdge = 0, e.prototype.bottomLeft = null, e.prototype.bottomRight = null, e.prototype.topLeft = null, e.prototype.topRight = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.brightness != null && Object.hasOwnProperty.call(A, "brightness") && t.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(A.brightness), A.sharpness != null && Object.hasOwnProperty.call(A, "sharpness") && t.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(A.sharpness), A.hotspots != null && Object.hasOwnProperty.call(A, "hotspots") && t.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(A.hotspots), A.confidence != null && Object.hasOwnProperty.call(A, "confidence") && t.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(A.confidence), A.faceSize != null && Object.hasOwnProperty.call(A, "faceSize") && t.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(A.faceSize), A.faceCenter != null && Object.hasOwnProperty.call(A, "faceCenter") && c.dot.v4.Point.encode(A.faceCenter, t.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.smallestEdge != null && Object.hasOwnProperty.call(A, "smallestEdge") && t.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(A.smallestEdge), A.bottomLeft != null && Object.hasOwnProperty.call(A, "bottomLeft") && c.dot.v4.Point.encode(A.bottomLeft, t.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.bottomRight != null && Object.hasOwnProperty.call(A, "bottomRight") && c.dot.v4.Point.encode(A.bottomRight, t.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.topLeft != null && Object.hasOwnProperty.call(A, "topLeft") && c.dot.v4.Point.encode(A.topLeft, t.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.topRight != null && Object.hasOwnProperty.call(A, "topRight") && c.dot.v4.Point.encode(A.topRight, t.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.DetectedObject();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
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
          let t = c.dot.v4.Point.verify(A.faceCenter);
          if (t)
            return "faceCenter." + t;
        }
        if (A.smallestEdge != null && A.hasOwnProperty("smallestEdge") && typeof A.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (A.bottomLeft != null && A.hasOwnProperty("bottomLeft")) {
          let t = c.dot.v4.Point.verify(A.bottomLeft);
          if (t)
            return "bottomLeft." + t;
        }
        if (A.bottomRight != null && A.hasOwnProperty("bottomRight")) {
          let t = c.dot.v4.Point.verify(A.bottomRight);
          if (t)
            return "bottomRight." + t;
        }
        if (A.topLeft != null && A.hasOwnProperty("topLeft")) {
          let t = c.dot.v4.Point.verify(A.topLeft);
          if (t)
            return "topLeft." + t;
        }
        if (A.topRight != null && A.hasOwnProperty("topRight")) {
          let t = c.dot.v4.Point.verify(A.topRight);
          if (t)
            return "topRight." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.DetectedObject)
          return A;
        let t = new c.dot.v4.DetectedObject();
        if (A.brightness != null && (t.brightness = Number(A.brightness)), A.sharpness != null && (t.sharpness = Number(A.sharpness)), A.hotspots != null && (t.hotspots = Number(A.hotspots)), A.confidence != null && (t.confidence = Number(A.confidence)), A.faceSize != null && (t.faceSize = Number(A.faceSize)), A.faceCenter != null) {
          if (typeof A.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          t.faceCenter = c.dot.v4.Point.fromObject(A.faceCenter);
        }
        if (A.smallestEdge != null && (t.smallestEdge = Number(A.smallestEdge)), A.bottomLeft != null) {
          if (typeof A.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          t.bottomLeft = c.dot.v4.Point.fromObject(A.bottomLeft);
        }
        if (A.bottomRight != null) {
          if (typeof A.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          t.bottomRight = c.dot.v4.Point.fromObject(A.bottomRight);
        }
        if (A.topLeft != null) {
          if (typeof A.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          t.topLeft = c.dot.v4.Point.fromObject(A.topLeft);
        }
        if (A.topRight != null) {
          if (typeof A.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          t.topRight = c.dot.v4.Point.fromObject(A.topRight);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), A.brightness != null && A.hasOwnProperty("brightness") && (o.brightness = t.json && !isFinite(A.brightness) ? String(A.brightness) : A.brightness), A.sharpness != null && A.hasOwnProperty("sharpness") && (o.sharpness = t.json && !isFinite(A.sharpness) ? String(A.sharpness) : A.sharpness), A.hotspots != null && A.hasOwnProperty("hotspots") && (o.hotspots = t.json && !isFinite(A.hotspots) ? String(A.hotspots) : A.hotspots), A.confidence != null && A.hasOwnProperty("confidence") && (o.confidence = t.json && !isFinite(A.confidence) ? String(A.confidence) : A.confidence), A.faceSize != null && A.hasOwnProperty("faceSize") && (o.faceSize = t.json && !isFinite(A.faceSize) ? String(A.faceSize) : A.faceSize), A.faceCenter != null && A.hasOwnProperty("faceCenter") && (o.faceCenter = c.dot.v4.Point.toObject(A.faceCenter, t)), A.smallestEdge != null && A.hasOwnProperty("smallestEdge") && (o.smallestEdge = t.json && !isFinite(A.smallestEdge) ? String(A.smallestEdge) : A.smallestEdge), A.bottomLeft != null && A.hasOwnProperty("bottomLeft") && (o.bottomLeft = c.dot.v4.Point.toObject(A.bottomLeft, t)), A.bottomRight != null && A.hasOwnProperty("bottomRight") && (o.bottomRight = c.dot.v4.Point.toObject(A.bottomRight, t)), A.topLeft != null && A.hasOwnProperty("topLeft") && (o.topLeft = c.dot.v4.Point.toObject(A.topLeft, t)), A.topRight != null && A.hasOwnProperty("topRight") && (o.topRight = c.dot.v4.Point.toObject(A.topRight, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DetectedObject";
      }, e;
    }(), I.Point = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.x = 0, e.prototype.y = 0, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.x != null && Object.hasOwnProperty.call(A, "x") && t.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(A.x), A.y != null && Object.hasOwnProperty.call(A, "y") && t.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(A.y), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.Point();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.x != null && A.hasOwnProperty("x") && typeof A.x != "number" ? "x: number expected" : A.y != null && A.hasOwnProperty("y") && typeof A.y != "number" ? "y: number expected" : null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.Point)
          return A;
        let t = new c.dot.v4.Point();
        return A.x != null && (t.x = Number(A.x)), A.y != null && (t.y = Number(A.y)), t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.x = 0, o.y = 0), A.x != null && A.hasOwnProperty("x") && (o.x = t.json && !isFinite(A.x) ? String(A.x) : A.x), A.y != null && A.hasOwnProperty("y") && (o.y = t.json && !isFinite(A.y) ? String(A.y) : A.y), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Point";
      }, e;
    }(), I.FaceContent = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.FaceContent();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let t = c.dot.Image.verify(A.image);
          if (t)
            return "image." + t;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let t = c.dot.v4.Metadata.verify(A.metadata);
          if (t)
            return "metadata." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.FaceContent)
          return A;
        let t = new c.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          t.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          t.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, t)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, e;
    }(), I.DocumentContent = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.DocumentContent();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let t = c.dot.Image.verify(A.image);
          if (t)
            return "image." + t;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let t = c.dot.v4.Metadata.verify(A.metadata);
          if (t)
            return "metadata." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.DocumentContent)
          return A;
        let t = new c.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          t.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          t.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, t)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, e;
    }(), I.Blob = function() {
      function e(t) {
        if (t)
          for (let o = Object.keys(t), i = 0; i < o.length; ++i)
            t[o[i]] != null && (this[o[i]] = t[o[i]]);
      }
      e.prototype.documentContent = null, e.prototype.eyeGazeLivenessContent = null, e.prototype.faceContent = null, e.prototype.magnifeyeLivenessContent = null, e.prototype.smileLivenessContent = null, e.prototype.palmContent = null;
      let A;
      return Object.defineProperty(e.prototype, "blob", {
        get: l.oneOfGetter(A = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: l.oneOfSetter(A)
      }), e.create = function(t) {
        return new e(t);
      }, e.encode = function(t, o) {
        return o || (o = X.create()), t.documentContent != null && Object.hasOwnProperty.call(t, "documentContent") && c.dot.v4.DocumentContent.encode(t.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), t.faceContent != null && Object.hasOwnProperty.call(t, "faceContent") && c.dot.v4.FaceContent.encode(t.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(t, "magnifeyeLivenessContent") && c.dot.v4.MagnifEyeLivenessContent.encode(t.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), t.smileLivenessContent != null && Object.hasOwnProperty.call(t, "smileLivenessContent") && c.dot.v4.SmileLivenessContent.encode(t.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), t.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(t, "eyeGazeLivenessContent") && c.dot.v4.EyeGazeLivenessContent.encode(t.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), t.palmContent != null && Object.hasOwnProperty.call(t, "palmContent") && c.dot.v4.PalmContent.encode(t.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, e.encodeDelimited = function(t, o) {
        return this.encode(t, o).ldelim();
      }, e.decode = function(t, o) {
        t instanceof f || (t = f.create(t));
        let i = o === void 0 ? t.len : t.pos + o, C = new c.dot.v4.Blob();
        for (; t.pos < i; ) {
          let B = t.uint32();
          switch (B >>> 3) {
            case 1: {
              C.documentContent = c.dot.v4.DocumentContent.decode(t, t.uint32());
              break;
            }
            case 5: {
              C.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.decode(t, t.uint32());
              break;
            }
            case 2: {
              C.faceContent = c.dot.v4.FaceContent.decode(t, t.uint32());
              break;
            }
            case 3: {
              C.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.decode(t, t.uint32());
              break;
            }
            case 4: {
              C.smileLivenessContent = c.dot.v4.SmileLivenessContent.decode(t, t.uint32());
              break;
            }
            case 6: {
              C.palmContent = c.dot.v4.PalmContent.decode(t, t.uint32());
              break;
            }
            default:
              t.skipType(B & 7);
              break;
          }
        }
        return C;
      }, e.decodeDelimited = function(t) {
        return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
      }, e.verify = function(t) {
        if (typeof t != "object" || t === null)
          return "object expected";
        let o = {};
        if (t.documentContent != null && t.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let i = c.dot.v4.DocumentContent.verify(t.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (t.eyeGazeLivenessContent != null && t.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.EyeGazeLivenessContent.verify(t.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (t.faceContent != null && t.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.FaceContent.verify(t.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (t.magnifeyeLivenessContent != null && t.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.MagnifEyeLivenessContent.verify(t.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (t.smileLivenessContent != null && t.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.SmileLivenessContent.verify(t.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        if (t.palmContent != null && t.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.PalmContent.verify(t.palmContent);
            if (i)
              return "palmContent." + i;
          }
        }
        return null;
      }, e.fromObject = function(t) {
        if (t instanceof c.dot.v4.Blob)
          return t;
        let o = new c.dot.v4.Blob();
        if (t.documentContent != null) {
          if (typeof t.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = c.dot.v4.DocumentContent.fromObject(t.documentContent);
        }
        if (t.eyeGazeLivenessContent != null) {
          if (typeof t.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.fromObject(t.eyeGazeLivenessContent);
        }
        if (t.faceContent != null) {
          if (typeof t.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = c.dot.v4.FaceContent.fromObject(t.faceContent);
        }
        if (t.magnifeyeLivenessContent != null) {
          if (typeof t.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.fromObject(t.magnifeyeLivenessContent);
        }
        if (t.smileLivenessContent != null) {
          if (typeof t.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = c.dot.v4.SmileLivenessContent.fromObject(t.smileLivenessContent);
        }
        if (t.palmContent != null) {
          if (typeof t.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = c.dot.v4.PalmContent.fromObject(t.palmContent);
        }
        return o;
      }, e.toObject = function(t, o) {
        o || (o = {});
        let i = {};
        return t.documentContent != null && t.hasOwnProperty("documentContent") && (i.documentContent = c.dot.v4.DocumentContent.toObject(t.documentContent, o), o.oneofs && (i.blob = "documentContent")), t.faceContent != null && t.hasOwnProperty("faceContent") && (i.faceContent = c.dot.v4.FaceContent.toObject(t.faceContent, o), o.oneofs && (i.blob = "faceContent")), t.magnifeyeLivenessContent != null && t.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.toObject(t.magnifeyeLivenessContent, o), o.oneofs && (i.blob = "magnifeyeLivenessContent")), t.smileLivenessContent != null && t.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = c.dot.v4.SmileLivenessContent.toObject(t.smileLivenessContent, o), o.oneofs && (i.blob = "smileLivenessContent")), t.eyeGazeLivenessContent != null && t.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.toObject(t.eyeGazeLivenessContent, o), o.oneofs && (i.blob = "eyeGazeLivenessContent")), t.palmContent != null && t.hasOwnProperty("palmContent") && (i.palmContent = c.dot.v4.PalmContent.toObject(t.palmContent, o), o.oneofs && (i.blob = "palmContent")), i;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(t) {
        return t === void 0 && (t = "type.googleapis.com"), t + "/dot.v4.Blob";
      }, e;
    }(), I.EyeGazeLivenessContent = function() {
      function e(A) {
        if (this.segments = [], A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.segments = l.emptyArray, e.prototype.metadata = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        if (t || (t = X.create()), A.segments != null && A.segments.length)
          for (let o = 0; o < A.segments.length; ++o)
            c.dot.v4.EyeGazeLivenessSegment.encode(A.segments[o], t.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.EyeGazeLivenessContent();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let t = 0; t < A.segments.length; ++t) {
            let o = c.dot.v4.EyeGazeLivenessSegment.verify(A.segments[t]);
            if (o)
              return "segments." + o;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let t = c.dot.v4.Metadata.verify(A.metadata);
          if (t)
            return "metadata." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessContent)
          return A;
        let t = new c.dot.v4.EyeGazeLivenessContent();
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          t.segments = [];
          for (let o = 0; o < A.segments.length; ++o) {
            if (typeof A.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            t.segments[o] = c.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[o]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          t.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        if ((t.arrays || t.defaults) && (o.segments = []), t.defaults && (o.metadata = null), A.segments && A.segments.length) {
          o.segments = [];
          for (let i = 0; i < A.segments.length; ++i)
            o.segments[i] = c.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[i], t);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, e;
    }(), I.EyeGazeLivenessSegment = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.corner = 0, e.prototype.image = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.corner != null && Object.hasOwnProperty.call(A, "corner") && t.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.corner), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.EyeGazeLivenessSegment();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
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
          let t = c.dot.Image.verify(A.image);
          if (t)
            return "image." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessSegment)
          return A;
        let t = new c.dot.v4.EyeGazeLivenessSegment();
        switch (A.corner) {
          default:
            if (typeof A.corner == "number") {
              t.corner = A.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            t.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            t.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            t.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            t.corner = 3;
            break;
        }
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          t.image = c.dot.Image.fromObject(A.image);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.corner = t.enums === String ? "TOP_LEFT" : 0, o.image = null), A.corner != null && A.hasOwnProperty("corner") && (o.corner = t.enums === String ? c.dot.v4.EyeGazeLivenessCorner[A.corner] === void 0 ? A.corner : c.dot.v4.EyeGazeLivenessCorner[A.corner] : A.corner), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessSegment";
      }, e;
    }(), I.EyeGazeLivenessCorner = function() {
      const e = {}, A = Object.create(e);
      return A[e[0] = "TOP_LEFT"] = 0, A[e[1] = "TOP_RIGHT"] = 1, A[e[2] = "BOTTOM_RIGHT"] = 2, A[e[3] = "BOTTOM_LEFT"] = 3, A;
    }(), I.SmileLivenessContent = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.neutralExpressionFaceImage = null, e.prototype.smileExpressionFaceImage = null, e.prototype.metadata = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && c.dot.Image.encode(A.smileExpressionFaceImage, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, t.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.SmileLivenessContent();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let t = c.dot.Image.verify(A.neutralExpressionFaceImage);
          if (t)
            return "neutralExpressionFaceImage." + t;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let t = c.dot.Image.verify(A.smileExpressionFaceImage);
          if (t)
            return "smileExpressionFaceImage." + t;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let t = c.dot.v4.Metadata.verify(A.metadata);
          if (t)
            return "metadata." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.SmileLivenessContent)
          return A;
        let t = new c.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          t.neutralExpressionFaceImage = c.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          t.smileExpressionFaceImage = c.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          t.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = c.dot.Image.toObject(A.neutralExpressionFaceImage, t)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = c.dot.Image.toObject(A.smileExpressionFaceImage, t)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, e;
    }(), I.PalmContent = function() {
      function e(A) {
        if (A)
          for (let t = Object.keys(A), o = 0; o < t.length; ++o)
            A[t[o]] != null && (this[t[o]] = A[t[o]]);
      }
      return e.prototype.image = null, e.prototype.metadata = null, e.create = function(A) {
        return new e(A);
      }, e.encode = function(A, t) {
        return t || (t = X.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, t.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, t.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), t;
      }, e.encodeDelimited = function(A, t) {
        return this.encode(A, t).ldelim();
      }, e.decode = function(A, t) {
        A instanceof f || (A = f.create(A));
        let o = t === void 0 ? A.len : A.pos + t, i = new c.dot.v4.PalmContent();
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
      }, e.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, e.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let t = c.dot.Image.verify(A.image);
          if (t)
            return "image." + t;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let t = c.dot.v4.Metadata.verify(A.metadata);
          if (t)
            return "metadata." + t;
        }
        return null;
      }, e.fromObject = function(A) {
        if (A instanceof c.dot.v4.PalmContent)
          return A;
        let t = new c.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          t.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          t.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return t;
      }, e.toObject = function(A, t) {
        t || (t = {});
        let o = {};
        return t.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, t)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, t)), o;
      }, e.prototype.toJSON = function() {
        return this.constructor.toObject(this, K.util.toJSONOptions);
      }, e.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, e;
    }(), I;
  }(), g.Image = function() {
    function I(e) {
      if (e)
        for (let A = Object.keys(e), t = 0; t < A.length; ++t)
          e[A[t]] != null && (this[A[t]] = e[A[t]]);
    }
    return I.prototype.bytes = l.newBuffer([]), I.create = function(e) {
      return new I(e);
    }, I.encode = function(e, A) {
      return A || (A = X.create()), e.bytes != null && Object.hasOwnProperty.call(e, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.bytes), A;
    }, I.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, I.decode = function(e, A) {
      e instanceof f || (e = f.create(e));
      let t = A === void 0 ? e.len : e.pos + A, o = new c.dot.Image();
      for (; e.pos < t; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1: {
            o.bytes = e.bytes();
            break;
          }
          default:
            e.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, I.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.bytes != null && e.hasOwnProperty("bytes") && !(e.bytes && typeof e.bytes.length == "number" || l.isString(e.bytes)) ? "bytes: buffer expected" : null;
    }, I.fromObject = function(e) {
      if (e instanceof c.dot.Image)
        return e;
      let A = new c.dot.Image();
      return e.bytes != null && (typeof e.bytes == "string" ? l.base64.decode(e.bytes, A.bytes = l.newBuffer(l.base64.length(e.bytes)), 0) : e.bytes.length >= 0 && (A.bytes = e.bytes)), A;
    }, I.toObject = function(e, A) {
      A || (A = {});
      let t = {};
      return A.defaults && (A.bytes === String ? t.bytes = "" : (t.bytes = [], A.bytes !== Array && (t.bytes = l.newBuffer(t.bytes)))), e.bytes != null && e.hasOwnProperty("bytes") && (t.bytes = A.bytes === String ? l.base64.encode(e.bytes, 0, e.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(e.bytes) : e.bytes), t;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, K.util.toJSONOptions);
    }, I.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Image";
    }, I;
  }(), g.Int32List = function() {
    function I(e) {
      if (this.items = [], e)
        for (let A = Object.keys(e), t = 0; t < A.length; ++t)
          e[A[t]] != null && (this[A[t]] = e[A[t]]);
    }
    return I.prototype.items = l.emptyArray, I.create = function(e) {
      return new I(e);
    }, I.encode = function(e, A) {
      if (A || (A = X.create()), e.items != null && e.items.length) {
        A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let t = 0; t < e.items.length; ++t)
          A.int32(e.items[t]);
        A.ldelim();
      }
      return A;
    }, I.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, I.decode = function(e, A) {
      e instanceof f || (e = f.create(e));
      let t = A === void 0 ? e.len : e.pos + A, o = new c.dot.Int32List();
      for (; e.pos < t; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (i & 7) === 2) {
              let C = e.uint32() + e.pos;
              for (; e.pos < C; )
                o.items.push(e.int32());
            } else
              o.items.push(e.int32());
            break;
          }
          default:
            e.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, I.verify = function(e) {
      if (typeof e != "object" || e === null)
        return "object expected";
      if (e.items != null && e.hasOwnProperty("items")) {
        if (!Array.isArray(e.items))
          return "items: array expected";
        for (let A = 0; A < e.items.length; ++A)
          if (!l.isInteger(e.items[A]))
            return "items: integer[] expected";
      }
      return null;
    }, I.fromObject = function(e) {
      if (e instanceof c.dot.Int32List)
        return e;
      let A = new c.dot.Int32List();
      if (e.items) {
        if (!Array.isArray(e.items))
          throw TypeError(".dot.Int32List.items: array expected");
        A.items = [];
        for (let t = 0; t < e.items.length; ++t)
          A.items[t] = e.items[t] | 0;
      }
      return A;
    }, I.toObject = function(e, A) {
      A || (A = {});
      let t = {};
      if ((A.arrays || A.defaults) && (t.items = []), e.items && e.items.length) {
        t.items = [];
        for (let o = 0; o < e.items.length; ++o)
          t.items[o] = e.items[o];
      }
      return t;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, K.util.toJSONOptions);
    }, I.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.Int32List";
    }, I;
  }(), g.Platform = function() {
    const I = {}, e = Object.create(I);
    return e[I[0] = "WEB"] = 0, e[I[1] = "ANDROID"] = 1, e[I[2] = "IOS"] = 2, e;
  }(), g.DigestWithTimestamp = function() {
    function I(e) {
      if (e)
        for (let A = Object.keys(e), t = 0; t < A.length; ++t)
          e[A[t]] != null && (this[A[t]] = e[A[t]]);
    }
    return I.prototype.digest = l.newBuffer([]), I.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, I.create = function(e) {
      return new I(e);
    }, I.encode = function(e, A) {
      return A || (A = X.create()), e.digest != null && Object.hasOwnProperty.call(e, "digest") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(e.digest), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(e.timestampMillis), A;
    }, I.encodeDelimited = function(e, A) {
      return this.encode(e, A).ldelim();
    }, I.decode = function(e, A) {
      e instanceof f || (e = f.create(e));
      let t = A === void 0 ? e.len : e.pos + A, o = new c.dot.DigestWithTimestamp();
      for (; e.pos < t; ) {
        let i = e.uint32();
        switch (i >>> 3) {
          case 1: {
            o.digest = e.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = e.uint64();
            break;
          }
          default:
            e.skipType(i & 7);
            break;
        }
      }
      return o;
    }, I.decodeDelimited = function(e) {
      return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
    }, I.verify = function(e) {
      return typeof e != "object" || e === null ? "object expected" : e.digest != null && e.hasOwnProperty("digest") && !(e.digest && typeof e.digest.length == "number" || l.isString(e.digest)) ? "digest: buffer expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, I.fromObject = function(e) {
      if (e instanceof c.dot.DigestWithTimestamp)
        return e;
      let A = new c.dot.DigestWithTimestamp();
      return e.digest != null && (typeof e.digest == "string" ? l.base64.decode(e.digest, A.digest = l.newBuffer(l.base64.length(e.digest)), 0) : e.digest.length >= 0 && (A.digest = e.digest)), e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
    }, I.toObject = function(e, A) {
      A || (A = {});
      let t = {};
      if (A.defaults)
        if (A.bytes === String ? t.digest = "" : (t.digest = [], A.bytes !== Array && (t.digest = l.newBuffer(t.digest))), l.Long) {
          let o = new l.Long(0, 0, !0);
          t.timestampMillis = A.longs === String ? o.toString() : A.longs === Number ? o.toNumber() : o;
        } else
          t.timestampMillis = A.longs === String ? "0" : 0;
      return e.digest != null && e.hasOwnProperty("digest") && (t.digest = A.bytes === String ? l.base64.encode(e.digest, 0, e.digest.length) : A.bytes === Array ? Array.prototype.slice.call(e.digest) : e.digest), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? t.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : t.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), t;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, K.util.toJSONOptions);
    }, I.getTypeUrl = function(e) {
      return e === void 0 && (e = "type.googleapis.com"), e + "/dot.DigestWithTimestamp";
    }, I;
  }(), g;
})();
function Tg() {
  const g = ["FNKwWQiu", "EvVcPmkhW64SisOxj1BcPSoaW7O", "ACoaW7mwW6O", "BMv3dHy", "W6tcVNygWOhcGHxdNLJdO2pcICoe", "nsRdQvPndmkIWPq9zCo2WP7dVG", "W7BcHmoug8oEW7u4WOVcH3u", "W7hdN8oBxmk0zfLhxrJdUaVcOa", "p8kqWQXfW6hdQ0xdK8kJdq", "WOL+vW", "tKZcOxi", "WQu4W6K", "W6PuW7DX", "W6HOCYFcQq", "WPm9WO9ppJZdNmkIfGbpWOZdPIy", "WQv4aSk4W4q", "ufbsaCoRWQKEn8ogW7Hlj3G", "FMjScG4", "wWKxzmky", "fs7dTrVdRHuPnSoAneVcK8os", "WPnkW5Kts03cIW", "aSkXDxVdRq", "trZdVSkKWQ0XWOK4WQpcOmkGmYa", "cZqjy8kMW6Ol", "Exv2cam", "FKdcIsZcNLSH", "W6pcUNqoWORcIbpdN0hdPLFcQCoP", "wbDpk8kEWQFcRWFcJGaK", "j8kplG", "gutcPmoNW60", "grjagSol", "W7qZtmoWWOlcUfHwW6aFWR/dSNW", "huiecX18cW", "ktBcQCkwWR4", "qhlcTNhcVq", "WPC8WOnppN3cNCodaIzP", "W61jW75wvG", "tmkBgMDg", "p8kFnCoFWRy", "srNdSmkKWQW8WOaUWOxcP8k/oYG", "farwb8oP", "d8oed8oS", "W757W6a6", "WRjbhSkX", "rueAtSkUW5ecW5ldUSkifZJdNG", "qmkshhfu"];
  return Tg = function() {
    return g;
  }, Tg();
}
(function(g, I) {
  function e(B, n, a, Q, E) {
    return P(E - -721, a);
  }
  const A = g();
  function t(B, n, a, Q, E) {
    return P(n - -663, B);
  }
  function o(B, n, a, Q, E) {
    return P(B - -185, Q);
  }
  function i(B, n, a, Q, E) {
    return P(B - 48, E);
  }
  function C(B, n, a, Q, E) {
    return P(n - -490, B);
  }
  for (; ; )
    try {
      if (-parseInt(e(-189, -201, "oY0C", -210, -211)) / 1 + -parseInt(e(-256, -227, "BG69", -256, -248)) / 2 + -parseInt(e(-258, -262, "0yEr", -254, -252)) / 3 * (parseInt(C("Fi$o", 6, -7, -14, 7)) / 4) + -parseInt(i(556, 558, 543, 569, "]fsI")) / 5 * (parseInt(t("oY0C", -182, -184, -162, -196)) / 6) + -parseInt(t("2tx2", -189, -212, -178, -169)) / 7 * (-parseInt(e(-223, -237, "F6NU", -246, -229)) / 8) + parseInt(e(-204, -225, "dP^f", -207, -226)) / 9 + parseInt(o(317, 294, 304, "]fsI", 306)) / 10 === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Tg, 5 * -154533 + -4 * 313619 + 2951467);
function P(g, I) {
  const e = Tg();
  return P = function(A, t) {
    A = A - (4336 + -1172 * 1 + -2698);
    let o = e[A];
    if (P.wmmamX === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      P.bWRApY = a, g = arguments, P.wmmamX = !0;
    }
    const C = e[-7 * -5 + -6844 + -619 * -11], B = A + C, n = g[B];
    return n ? o = n : (P.XnZPER === void 0 && (P.XnZPER = !0), o = P.bWRApY(o, t), g[B] = o), o;
  }, P(g, I);
}
async function Yr() {
  const g = {};
  g[C(1010, 1016, "VWgt")] = UC;
  function I(a, Q, E, x, s) {
    return P(s - -100, E);
  }
  function e(a, Q, E, x, s) {
    return P(Q - 307, E);
  }
  g[I(385, 390, "6LLN", 364, 375) + "h"] = 256;
  function A(a, Q, E, x, s) {
    return P(Q - -360, x);
  }
  const t = await window[C(1008, 1003, "DC%u") + "o"][I(371, 373, "4xOj", 386, 380) + "e"][I(410, 382, "Fi$o", 386, 390) + I(362, 372, "AZ3e", 364, 378) + "y"](g, !0, [I(383, 403, "vT2x", 385, 388) + "pt", e(756, 773, "PvBQ") + "pt"]), o = Uint8Array[I(389, 400, "6Z0J", 380, 383)](Array(-4 * -1797 + 4702 + 3958 * -3)[I(381, 417, "AZ3e", 405, 400)](-2 * -1361 + 2828 + -222 * 25)), i = window[C(1029, 1011, "BG69") + "o"][C(1002, 982, "@$FS") + A(118, 112, 91, "DC%u") + n("l76t", 132, 122, 131, 117)](o);
  function C(a, Q, E, x, s) {
    return P(a - 526, E);
  }
  const B = {};
  B[n("4xOj", 99, 89, 113, 100)] = t;
  function n(a, Q, E, x, s) {
    return P(s - -370, a);
  }
  return B.iv = i, B;
}
async function Wr(g) {
  function I(E, x, s, d, h) {
    return P(d - -267, x);
  }
  const { iv: e, key: A } = await Yr(), t = {};
  function o(E, x, s, d, h) {
    return P(E - -58, h);
  }
  t[i(957, 935, 953, 971, "%Oh4")] = UC, t.iv = e;
  function i(E, x, s, d, h) {
    return P(s - 455, h);
  }
  const C = await window[i(969, 973, 964, 985, "%!@8") + "o"][o(433, 442, 453, 429, "PvBQ") + "e"][Q(584, "oY0C", 565, 588) + "pt"](t, A, g), B = await window[o(447, 445, 461, 447, "PvBQ") + "o"][I(238, "14z1", 212, 234) + "e"][o(448, 430, 435, 436, "0cC#") + n(-103, -96, -132, "BG69", -109)](Q(636, "RY]a", 602, 616), A);
  function n(E, x, s, d, h) {
    return P(h - -594, d);
  }
  const a = {};
  function Q(E, x, s, d, h) {
    return P(d - 117, x);
  }
  return a[I(227, "l76t", 218, 212) + "ge"] = C, a[o(439, 445, 454, 437, "WV^S")] = B, a.iv = e, a;
}
(function(g, I) {
  function e(B, n, a, Q, E) {
    return rA(E - 837, a);
  }
  function A(B, n, a, Q, E) {
    return rA(n - -271, E);
  }
  function t(B, n, a, Q, E) {
    return rA(E - 68, Q);
  }
  const o = g();
  function i(B, n, a, Q, E) {
    return rA(Q - -791, n);
  }
  function C(B, n, a, Q, E) {
    return rA(E - 230, Q);
  }
  for (; ; )
    try {
      if (-parseInt(t(292, 294, 286, "CZ(g", 298)) / 1 + -parseInt(A(-34, -23, -35, -26, "@JR7")) / 2 + -parseInt(e(1090, 1077, "T*!o", 1075, 1076)) / 3 * (parseInt(i(-553, "NJLC", -560, -560, -559)) / 4) + -parseInt(e(1087, 1087, "M1Lp", 1080, 1073)) / 5 + -parseInt(t(283, 297, 288, "EPg7", 291)) / 6 * (parseInt(A(-49, -42, -38, -46, "DTB5")) / 7) + parseInt(C(450, 449, 446, "kw2!", 458)) / 8 + parseInt(t(297, 296, 296, "kw2!", 306)) / 9 * (parseInt(C(476, 458, 469, "$)TY", 470)) / 10) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(qg, 3959 * 158 + 166105 + -211895 * 2);
function qg() {
  const g = ["gmkhba3cMSo8ns0", "me83WOujWOrSDL16W7faW6m", "W47cPe46", "wLhdK8odW4vuwNNdKKjkW7zkDW", "DdzbWPSmn8kd", "W4LVortdOGldOx5KW4xcPG8", "WRGoWRO3sujgW4PoCCoBCG", "WQKtWQddQKS", "ASoTz8ktW6DUqdVcRSo6kSkz", "EreIW5NdNeRcNmkFW71fwCkVqW", "WRWlWRi0s0bcW5nCDSoNvW", "EZXZqaG", "W7VcGmktu8oEWQtcPmosuSk+WQK1W4q", "WQ/cPXKNtG", "W49OoHldPG3cSNvIW4BcQWVcTG", "WOVdLd3cVc3dK8kD", "WQvjWRFcLKdcMCo8W6XKWPfnCG", "WRu3W5lcNmoxjmkT", "WQ/cUSoFohq", "W5yPaSoBW4S", "jW/cMdKP", "W57cISklBwT7W5e", "DMmxW6PmzSkgW4ZcPSkZi8oU", "WRqsWQhdNLW", "W41VorFdPqlcTGr9W4lcTHJcV0e", "W73dUu5MpaBdVK/cTCkYrYS+", "ySkWWQVdG8oVsZCp", "kIRdI8kUW6OofeBdG8kZymkirq"];
  return qg = function() {
    return g;
  }, qg();
}
function rA(g, I) {
  const e = qg();
  return rA = function(A, t) {
    A = A - (389 * 7 + 3977 * 1 + -6478);
    let o = e[A];
    if (rA.HdHBXM === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      rA.GuvBEU = a, g = arguments, rA.HdHBXM = !0;
    }
    const C = e[-233 * -35 + 2272 + 10427 * -1], B = A + C, n = g[B];
    return n ? o = n : (rA.trHtPN === void 0 && (rA.trHtPN = !0), o = rA.GuvBEU(o, t), g[B] = o), o;
  }, rA(g, I);
}
function Ur(g) {
  const I = new ArrayBuffer(g[e(-12, -3, 8, -2, "udlC") + "h"]);
  function e(i, C, B, n, a) {
    return rA(C - -236, a);
  }
  const A = new Uint8Array(I);
  for (let i = -4 * 1384 + -4896 + 10432, C = g[o(-411, -395, -400, "o#9w") + "h"]; i < C; i++)
    A[i] = g[o(-397, -390, -398, "T*!o") + t(706, 715, "DtxN")](i);
  function t(i, C, B, n, a) {
    return rA(C - 466, B);
  }
  function o(i, C, B, n, a) {
    return rA(B - -625, n);
  }
  return I;
}
(function(g, I) {
  const e = g();
  function A(C, B, n, a, Q) {
    return AA(C - -764, Q);
  }
  function t(C, B, n, a, Q) {
    return AA(a - -581, n);
  }
  function o(C, B, n, a, Q) {
    return AA(n - -890, a);
  }
  function i(C, B, n, a, Q) {
    return AA(Q - 401, n);
  }
  for (; ; )
    try {
      if (parseInt(A(-161, -270, -94, -185, "KMTt")) / 1 + -parseInt(i(1027, 960, "7u8G", 876, 913)) / 2 + -parseInt(A(-122, -97, -151, -198, "bLoh")) / 3 + parseInt(t(88, 77, "I$F)", -3, -97)) / 4 + parseInt(A(-178, -260, -225, -223, "YOc7")) / 5 * (-parseInt(o(-216, -224, -195, "YOc7", -143)) / 6) + -parseInt(o(-214, -135, -223, "Hu[4", -119)) / 7 + -parseInt(t(-28, 91, "zJX@", 27, -66)) / 8 * (-parseInt(A(-96, -11, -168, -38, "rA3]")) / 9) === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zg, 112 * 8818 + 175682 + -1 * 659874);
function AA(g, I) {
  const e = Zg();
  return AA = function(A, t) {
    A = A - (1392 + -917 * 1);
    let o = e[A];
    if (AA.uyeSSW === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      AA.pkiGWc = a, g = arguments, AA.uyeSSW = !0;
    }
    const C = e[-5595 + -3 * -2561 + -2088], B = A + C, n = g[B];
    return n ? o = n : (AA.ZPtkiB === void 0 && (AA.ZPtkiB = !0), o = AA.pkiGWc(o, t), g[B] = o), o;
  }, AA(g, I);
}
function Hr() {
  function g(a, Q, E, x, s) {
    return AA(a - -393, x);
  }
  const I = o(1112, 1117, 1182, 1246, "IzDy") + o(1308, 1348, 1290, 1306, "NK1B") + e(946, 936, 863, 925, "&N)V") + n(652, 742, 733, 619, "7u8G") + g(199, 247, 280, "5#)7") + n(526, 591, 587, 643, "NK1B") + A(-7, -79, "5UzO", 24) + g(227, 276, 268, "zJX@") + g(250, 196, 299, "IzDy") + A(60, -8, "FLqD", 69) + A(-24, -104, "p7Nq", -44) + o(1383, 1190, 1275, 1350, "rLjW") + e(1047, 1128, 1091, 1134, "xDn)") + o(1285, 1373, 1268, 1163, "rA3]") + e(1095, 1057, 1098, 985, "bLoh") + g(89, 176, 161, "#69D") + A(-140, -73, "@I*o", -64) + A(8, 26, "B4T3", -68) + g(312, 268, 390, "rA3]") + n(771, 759, 736, 633, "B4T3") + e(1065, 1019, 1131, 1073, "p7Nq") + e(1176, 1169, 1032, 1087, "IzDy") + e(1079, 857, 1051, 971, "2h6P") + n(573, 651, 629, 524, "5UzO") + o(1121, 1093, 1181, 1235, "bLoh") + g(164, 84, 190, "xDn)") + A(-69, 16, "xDn)", -6) + n(636, 675, 677, 688, "5#)7") + o(1416, 1494, 1381, 1491, "T3TD") + o(1412, 1299, 1315, 1244, "KMTt") + e(913, 1056, 1040, 969, "9Df8") + e(998, 920, 930, 958, "&N)V") + o(1394, 1389, 1288, 1198, "syh%") + e(950, 941, 971, 935, "bLoh") + n(671, 647, 593, 547, "syh%") + o(1322, 1344, 1252, 1226, "B4T3") + e(999, 1098, 1099, 1067, "Hu[4") + g(260, 209, 222, "bLoh") + e(996, 838, 914, 924, "AcoJ") + g(159, 111, 113, "FLqD") + e(1139, 1217, 1152, 1123, "6iph") + n(551, 672, 601, 645, "I$F)") + A(12, 87, "Xjh)", 113) + n(478, 577, 560, 638, "[lc]") + g(272, 283, 188, "p7Nq") + g(149, 232, 82, "Hu[4") + A(37, 57, "rLjW", 22) + g(246, 286, 357, "6jar") + g(100, 79, 48, "5#)7") + n(698, 735, 725, 799, "n]Yx") + e(1003, 1105, 971, 1042, "2h6P") + n(650, 774, 740, 642, "7u8G") + A(-31, 4, "FN!i", 68) + A(19, -48, "9Df8", 63) + A(194, 95, "F(F5", 108) + A(-165, -42, "6jar", -75) + n(505, 737, 621, 669, "vS^x") + e(1072, 1245, 1085, 1132, "bLoh") + g(226, 230, 145, "p7Nq") + n(643, 775, 744, 800, "UkE&") + e(1081, 1150, 1244, 1153, "YOc7") + A(177, 90, "USos", 77) + g(174, 113, 147, "vS^x") + o(1364, 1426, 1310, 1306, "UkE&") + A(109, 76, "B4T3", 98) + A(-141, -148, "b*Zn", -89) + A(-64, 35, "5UzO", -45) + n(677, 616, 653, 650, "IzDy") + g(162, 84, 107, "rA3]") + o(1245, 1226, 1193, 1254, "&N)V") + g(208, 158, 107, "T3TD") + n(539, 574, 607, 542, "dtjI") + A(-87, -93, "6iph", 0) + g(241, 303, 237, "#69D") + e(1127, 1084, 1134, 1118, "*]tf") + e(1015, 1018, 895, 1007, "5#)7") + A(-152, -67, "KMTt", -104) + g(230, 154, 163, "n]Yx") + A(-13, 150, "p7Nq", 83) + e(1181, 997, 1204, 1094, "USos") + e(1022, 832, 924, 937, "zJX@") + e(959, 1074, 900, 976, "*]tf") + o(1386, 1267, 1300, 1394, "I$F)") + o(1253, 1290, 1254, 1233, "vS^x") + o(1151, 1296, 1263, 1340, "X8k!") + o(1173, 1174, 1211, 1243, "[lc]") + e(964, 915, 1043, 997, "B4T3") + A(43, 128, "p7Nq", 105) + o(1337, 1230, 1228, 1337, "bLoh") + A(71, 94, "NK1B", 109) + e(903, 957, 927, 946, "n]Yx") + n(551, 555, 594, 694, "Jm3T") + e(1141, 1018, 1120, 1037, "6C!v") + e(1087, 1248, 1074, 1148, "*]tf") + A(112, -3, "X8k!", 16) + g(280, 251, 245, "p7Nq") + o(1092, 1222, 1196, 1097, "*]tf") + A(14, 9, "b%R9", -55) + n(616, 736, 726, 668, "zJX@") + e(866, 991, 1048, 973, "wBc3") + e(960, 972, 1060, 1019, "6iph") + n(537, 562, 591, 547, "Hu[4") + A(199, 56, "Hu[4", 117) + g(205, 191, 266, "))EG") + n(643, 544, 580, 655, "7u8G") + o(1128, 1251, 1171, 1269, "Hu[4") + n(679, 618, 704, 621, "6C!v") + o(1123, 1187, 1214, 1269, "NK1B") + e(1011, 950, 980, 1015, "Xjh)") + n(812, 812, 727, 662, "7u8G") + g(262, 274, 246, "rA3]") + o(1233, 1229, 1166, 1152, "IzDy") + A(-66, -54, "6C!v", -24) + A(160, 51, "wBc3", 123) + g(197, 162, 220, "[lc]") + A(-2, 105, "&Lvg", 14) + n(582, 753, 680, 630, "zJX@") + A(-150, -38, "zJX@", -92) + g(87, 78, -17, "wBc3") + e(1040, 1095, 955, 1028, "UkE&") + A(17, 12, "#69D", 88) + A(-17, -34, "IzDy", 73) + e(915, 989, 872, 954, "wBc3") + A(44, 147, "[lc]", 42) + n(757, 739, 734, 724, "*]tf") + A(79, -70, "V!0O", 2) + g(106, 174, -9, "YOc7") + n(685, 600, 684, 680, "vS^x") + g(172, 102, 153, "M&@I") + e(1186, 1239, 1105, 1125, "#69D") + A(-68, -172, "5#)7", -76) + e(1138, 1118, 1089, 1084, "rLjW") + n(776, 663, 669, 737, "Hu[4") + n(660, 546, 628, 557, "X8k!") + g(90, 16, 19, "wBc3") + e(1054, 1081, 922, 1010, "rA3]") + e(1e3, 1110, 1066, 1099, "wBc3") + A(-43, -47, "B4T3", -87) + o(1264, 1094, 1189, 1177, "syh%") + A(198, 134, "M&@I", 92) + n(455, 453, 548, 638, "ox[f") + e(1182, 1095, 1055, 1111, "p7Nq") + e(950, 960, 875, 953, "6iph") + o(1272, 1245, 1361, 1337, "Jm3T") + n(702, 703, 619, 587, "IzDy") + g(235, 154, 337, "AcoJ") + A(76, 134, "Y0HQ", 118) + e(1104, 935, 1153, 1051, "YOc7") + A(-57, -72, "6C!v", 34) + e(1183, 1112, 1001, 1096, "rA3]") + o(1099, 1178, 1163, 1216, "))EG") + o(1299, 1236, 1340, 1432, "rLjW") + o(1232, 1341, 1230, 1279, "))EG") + n(595, 702, 641, 638, "vS^x") + n(641, 786, 710, 648, "M&@I") + n(745, 583, 647, 578, "ox[f") + e(1049, 1008, 990, 939, "X8k!") + o(1319, 1393, 1356, 1438, "rLjW") + g(187, 126, 112, "6jar") + A(-153, -38, "9Df8", -65) + g(141, 167, 205, "V!0O") + o(1350, 1409, 1382, 1324, "6jar") + e(851, 968, 927, 938, "FLqD") + A(-118, -42, "AcoJ", -53) + n(589, 537, 563, 661, "b*Zn") + g(233, 297, 336, "IzDy") + e(1090, 1005, 1012, 1011, "b%R9") + o(1215, 1230, 1220, 1260, "syh%") + n(583, 598, 660, 696, "b%R9") + o(1214, 1123, 1202, 1090, "V!0O") + e(1079, 1089, 1136, 1025, "wBc3") + g(85, 14, 98, "6iph") + A(50, 149, "T3TD", 61) + e(982, 973, 1083, 980, "#69D") + e(1198, 1050, 1150, 1097, "2h6P") + g(150, 86, 108, "bLoh") + n(690, 663, 659, 753, "dtjI") + e(930, 1035, 1085, 1012, "5#)7") + e(1044, 989, 933, 1036, "6C!v") + e(1072, 1169, 1114, 1147, "KMTt") + e(1051, 1096, 1077, 1098, "@I*o") + A(60, -11, "n]Yx", 101) + o(1294, 1243, 1289, 1192, "F(F5") + e(1062, 1100, 924, 986, "2h6P") + e(1026, 1060, 1047, 947, "YOc7") + e(1226, 1188, 1194, 1143, "&N)V") + g(175, 240, 227, "zJX@") + A(-7, 33, "@I*o", 75) + g(152, 208, 87, "wBc3") + A(29, -66, "AcoJ", -27) + e(974, 920, 1025, 930, "KMTt") + o(1209, 1192, 1200, 1208, "))EG") + n(574, 589, 600, 624, "&N)V") + o(1400, 1445, 1333, 1247, "bLoh") + A(90, 113, "X8k!", 76) + o(1162, 1140, 1208, 1095, "wBc3") + o(1294, 1348, 1306, 1359, "&Lvg") + n(491, 668, 572, 684, "Jm3T") + o(1341, 1298, 1248, 1316, "F(F5") + A(36, -21, "[lc]", 87);
  function e(a, Q, E, x, s) {
    return AA(x - 449, s);
  }
  function A(a, Q, E, x, s) {
    return AA(x - -583, E);
  }
  const t = window[n(784, 798, 711, 777, "FLqD")](I);
  function o(a, Q, E, x, s) {
    return AA(E - 679, s);
  }
  const i = window[g(297, 249, 379, "rLjW")](t), C = Ur(i), B = {};
  B[e(1113, 1157, 1003, 1063, "T3TD")] = HC;
  function n(a, Q, E, x, s) {
    return AA(E - 47, s);
  }
  return B[e(1174, 1040, 1082, 1090, "KMTt")] = Va, window[g(236, 318, 288, "rLjW") + "o"][e(1176, 1131, 1097, 1081, "Jm3T") + "e"][e(837, 988, 933, 944, "xDn)") + e(1028, 874, 910, 975, "FN!i")](o(1106, 1127, 1164, 1181, "p7Nq"), C, B, !0, [g(113, 183, 64, "vS^x") + "pt"]);
}
function Zg() {
  const g = ["bLiWW77cPa", "CeaXtMnVWPNcGSkGCCkUhW", "dKVcQICsWPtcP8kVWRGddSkTW6C", "W4xcR8o6W6tcTa", "FIT3qwO", "zcxcHfVdLa", "xSoIkGeECmokW4NdNa", "W5VdKHmqdW", "AmoXW4ZcImkW", "W5rpW7hdRCkZ", "WP/cRmoiWOJdRa", "WPxdVSo0W4RcTG", "W6SFtSkC", "W7NcRSkaW7tcI8oIWPhdNCkXWRLpiby", "WOfyWP8qW6G", "hf/dPSkXgG", "sCoXoSkzeq", "WQ/dJCk8z8kW", "pCkela8u", "hCo8fCkXsG", "FSoYB8oufW", "W5tcKCkWWRddJq", "WPxdOCkjzCko", "x8kLvIxdLa", "ftaTAgS", "dGtcVCosnG", "W4dcNbhdTsq", "WP7dR8ovW5ZcQa", "WQ4Yesyi", "w0ubumkA", "W43cILdcRmor", "oSkbChKO", "WRvzWPWfW6O", "WO/dHmohW6xdRW", "EZPahdO", "W4VdNmotWPNcOG", "CJSOBJe", "WQJdLKtcIa8", "vIuaW6ydWPGm", "irv6ea", "WRrdWQlcOCkgh3ddMCkPmCo1DSkg", "AZDFA1i", "W6aRCCkmWRu", "o8ojiriD", "W4tdKNmCW5i", "WRVcP3i0W6S", "kCoJW5eanW", "WOvMW4/cHbO", "rCkws0pcVa", "WPrXW7SvfW", "WRpcICo6FCoy", "W5m5W6pdGSoH", "WRq5W6VdGmoy", "WRZdJfqVW6S", "zr1JCKu", "c0JdRCohdG", "WReoWPNdMHa", "xCk0WR/cL0u", "hCoFqrvO", "W4ZdK8oKW7RcKa", "WRlcS8kJFSkn", "tYpdSxLY", "WOFcKCortG", "WOldO8kzsSk8", "WQVdM8kixSko", "kCkgzSorDb0JW4TDzNuvWR4", "W5/dJJrJWONcQ8kIWPnRwSoeka", "zbTYcfm", "dCk/s0RcMa", "WQT4WRC+W5e", "b8olgJ/dGCk2WOVdQ1e", "WOJdHCk6xmkq", "WRmWWOBdKKm", "sYNdH1aq", "WP57W4K+W4m", "WPddMmouW7BdRW", "W5tcO8o/WOhdJW", "p8kHt3O8", "W5jnWQq2BG", "rCoAm17cUW", "W4VcQqpcQmop", "W44BW4hdMSoN", "WQddVSo0WR7dIG", "W4ldKuvlW6K", "W4rQWPSwCW", "sYXvDuu", "WRddKmkQySk3", "Fmo8nelcLG", "WPZdQCodW44", "iSoqW4RdVCkw", "WP1xW4NdN8kY", "W7vDWQyVsa", "uYeGW5St", "zcHSWP3dPmokv8kJnf7cN8k5gG", "W4yfWQnmBa", "zxidt8k4", "hI5JmGq", "FYj7Bgm", "rSohcmk2fG", "W6TZvbhcKq", "W5aOr8ojWRy", "WRldTuxcTJG", "aeGmW7ZcHa", "WP3cQv8/W5K", "uSkvlMpdNG", "W7BcM3pdPx0", "vHiuWQqW", "W63cTshdMNa8hCkiW5ldTMVcJ8ov", "WRShW53dV2G", "lsbTlGe", "tmkgkvtdLG", "hWbkfdS", "WP9pW40xWRC", "o8kChgNcQq", "vqdcMgFdHq", "WQJdUSkgwq", "W6SCW6pdMmo8", "DsHmsu8", "nmk5BceG", "WRFcK8oNEmkS", "vmkZWQZdPwe", "bSk5ssGa", "lmoFlmk0ha", "WR8VvHS+", "gsTUW5/cNG", "W7ZdLL1lW4O", "F8o1j2NcNq", "WOVcI8oiWRZdHG", "a0SqW4xcSG", "oxm7W7ZcIq", "W47cQmkzWPJdQrRdQCkFW63dOmosa8oP", "W6hdHrmAW4a", "W58AW4dcPmo7", "CcD1B1a", "WQmBWOVdO0O", "smklm1/cTq", "W5/dQmoLWO/cUG", "WOiqqYzj", "W6VdM1BcQta", "kqSKW5an", "W5dcTMKueG", "vmoHjh9jjSo9W5JdShRdTuy", "WO07W6vqnuxdR1ZdLulcICkyuG", "Bmk3hHtdNW", "mIeyW4CP", "qSoUdLhcRW", "EaP5WO/cPG", "E2rvB2O", "W5FdIhmNW6W", "WP85W4dcGXq", "W5ldRvqOW6K", "lb7cL0NdPa", "lCoDW6ySeq", "gSoWyxBdSG", "r8kgkf3cQW", "WO7cUqhcISoO", "WRjrW5aP", "rJ5DA3m", "WRpdJ8oqW53dNq", "pmkheZlcMG", "W4NcJxldJhG", "WPvDWRe2W5m", "C8kmAtRdTG", "W5G7WPOyuq", "o8ouErhcOW", "WO5bW5pcHCkH", "W6i1W4ldUSoU", "mSohW5aVjq", "qIdcNJ/dKa", "WR/dHSk8amkE", "WQfPW4ldQCkZ", "W6NdPxWCdG", "vmoXn8kUlW", "WRq5W7VdKSoo", "lCo9k8kbeW", "xCkfgtFcTq", "W4ZdRMKtAq", "WO7cSGldQCoh", "k8kUhgxcGW", "W5WHW7xdNSoG", "W53cJuVcQmoj", "sX/dIHhdRW", "W5BcHmkmySk+", "ndOyW5ev", "s8otk8owva", "WRNcUvCDW58", "W6ZcI2ddR1a", "W5ddRHHZW64", "W5aNDb8Q", "iGldTCohdG", "WR7dJSkiW7tdOW", "WRRcNfadW64", "WPJdVmoEW4dcPq", "WO4IAsLc", "WONcPSoRWOe", "BeNcQL5X", "W4ymWOOuuG", "W7ZcSmouWRRcMq", "imoHusjo", "f8oGW47cMCoo", "WO0WWRZdLgK", "zY9VWPldP8oknCkgngxcLmkN", "qaHuu1q", "zCo6B3JcRW", "W7tdRCotW47cOq", "W6ldP8o/WONcSa", "FSkRgKpcRq", "W7hcI3r8W5W", "sSkWBSk0gXpcQ8o+t2pcIcZcLa", "weeEtmo0", "WPxdRv3cUZO", "ymoOWQxcSZm", "wINdP37dVW", "WOu1WQddSua", "vmovW5VcLfK", "rCovF27cMa", "ygSqW5tcLmkNdq", "lGldRSo4aG", "fWdcKSonbq", "WRJdJNWBW6u", "x8oiz0BdVW", "ECozpCkspq", "WRCstN49", "mComW5ybgq", "W6/dGmoTWQ7dSW", "lHn0hCo1W58pCmonrJNdImkY", "WPpdJ8o5W6RcQW", "gbVdNSksjq", "rrNcGwddQq", "xCk0WOVdO0e", "WOtdHI8LW4u", "W4SMECk/WOe"];
  return Zg = function() {
    return g;
  }, Zg();
}
async function Kr(g) {
  const I = await Hr();
  function e(i, C, B, n, a) {
    return AA(C - -506, a);
  }
  function A(i, C, B, n, a) {
    return AA(C - -144, a);
  }
  function t(i, C, B, n, a) {
    return AA(C - 249, B);
  }
  const o = {};
  return o[A(432, 420, 429, 315, "n]Yx")] = HC, window[A(409, 406, 350, 319, "Jm3T") + "o"][e(214, 110, 180, 8, "#69D") + "e"][t(882, 840, "Hu[4") + "pt"](o, I, g);
}
(function(g, I) {
  function e(C, B, n, a, Q) {
    return fA(B - -704, n);
  }
  const A = g();
  function t(C, B, n, a, Q) {
    return fA(n - 599, a);
  }
  function o(C, B, n, a, Q) {
    return fA(B - -264, C);
  }
  function i(C, B, n, a, Q) {
    return fA(B - 622, C);
  }
  for (; ; )
    try {
      if (parseInt(t(801, 811, 808, "*Osz", 801)) / 1 * (-parseInt(e(-473, -481, "KS@o", -491, -486)) / 2) + parseInt(i("SG8P", 828, 833, 818, 838)) / 3 + parseInt(e(-489, -486, "B#dA", -477, -490)) / 4 * (-parseInt(t(810, 818, 811, "frJ9", 806)) / 5) + parseInt(i("frJ9", 829, 826, 836, 829)) / 6 + -parseInt(e(-499, -489, "ad5A", -487, -487)) / 7 + -parseInt(i("WYBy", 836, 836, 838, 828)) / 8 + parseInt(o("Coiq", -59, -60, -63, -49)) / 9 === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jg, 1 * -868161 + -282264 + -534011 * -3);
function jg() {
  const g = ["rWTswqFcQSkA", "umkmWOFdUCoiW73dOmkYseFdQZxcIq", "dmoyW4FcUmkB", "W5q1W7ylW6P5zJ3cL1fKWPO0", "WRlcM8oRjKfXW7ZcM8kZh8orvSkI", "WPKFjXLEqL7cNmk9nmozECkh", "kmk1WRxcLSkCBSk2WQtcK8oTCCob", "W6bGhSoKgw/dTq", "luuPWPLsFCkIWOdcV8oPW4WmWPa", "B8kXxvxdLCkiWOZdImklW5vvtX4", "WPKAveKihI3cTq", "wduhiSkBWPHnW5e", "WPNcMatdSvdcTCovW58OWO3cSSk3", "gmk0WOlcKCkLb1KxWQtdHSk/WP7cKW", "WQHqhWRcUe7cVNFdJCokqCoXyW", "ymkVf2RdIHJcNCkJWPPoWOqvW4G", "W6xcG8o3r8kUD8kLpXycW7/cVG", "DXrI", "Amo3W4RdHSkQDmkcW7fKW4vMW6NdTq", "W5mWW7qfW6n8iYFcHNzGWQq"];
  return jg = function() {
    return g;
  }, jg();
}
function fA(g, I) {
  const e = jg();
  return fA = function(A, t) {
    A = A - (-4866 * -2 + -1 * -3955 + 63 * -214);
    let o = e[A];
    if (fA.mbqgIL === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      fA.NWkmZn = a, g = arguments, fA.mbqgIL = !0;
    }
    const C = e[778 + -778 * 1], B = A + C, n = g[B];
    return n ? o = n : (fA.cQmsgX === void 0 && (fA.cQmsgX = !0), o = fA.NWkmZn(o, t), g[B] = o), o;
  }, fA(g, I);
}
async function Or(g) {
  const { iv: I, key: e, message: A } = await Wr(g), t = await Kr(e);
  function o(B, n, a, Q, E) {
    return fA(B - 874, a);
  }
  const i = {};
  function C(B, n, a, Q, E) {
    return fA(n - -70, Q);
  }
  return i[o(1093, 1096, "y0oY")] = t, i.iv = I, i[C(162, 154, 153, "KS@o") + "ge"] = A, i;
}
(function(g, I) {
  function e(C, B, n, a, Q) {
    return EA(C - -795, B);
  }
  const A = g();
  function t(C, B, n, a, Q) {
    return EA(C - 731, n);
  }
  function o(C, B, n, a, Q) {
    return EA(C - 661, n);
  }
  function i(C, B, n, a, Q) {
    return EA(B - -861, a);
  }
  for (; ; )
    try {
      if (-parseInt(i(-387, -379, -392, "zr8X", -393)) / 1 + -parseInt(i(-391, -384, -394, "UnC!", -386)) / 2 + -parseInt(e(-312, "rZFH", -318, -304, -311)) / 3 * (-parseInt(i(-401, -392, -389, "7c4h", -388)) / 4) + parseInt(i(-387, -388, -394, "7c4h", -390)) / 5 + -parseInt(t(1197, 1196, "!%bn", 1190, 1192)) / 6 * (parseInt(i(-403, -401, -416, "[QRg", -409)) / 7) + -parseInt(o(1128, 1132, "pTzH", 1141, 1115)) / 8 + -parseInt(e(-317, "r&!^", -325, -318, -310)) / 9 * (-parseInt(i(-372, -380, -389, "yFKE", -376)) / 10) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Pg, 617752);
async function Tr(g) {
  function I(i, C, B, n, a) {
    return EA(C - -611, B);
  }
  function e(i, C, B, n, a) {
    return EA(a - -851, C);
  }
  function A(i, C, B, n, a) {
    return EA(C - -608, n);
  }
  function t(i, C, B, n, a) {
    return EA(n - 744, a);
  }
  const o = await window[t(1197, 1199, 1203, 1205, "^IJQ") + "o"][t(1213, 1223, 1219, 1220, ")KAn") + "e"][I(-134, -139, "d^Ip") + "t"](e(-372, "UnC!", -374, -373, -372), g);
  return Array[e(-393, "ogL6", -382, -379, -392)](new Uint8Array(o))[A(-135, -143, -148, ")KAn")]((i) => i[I(-125, -137, "PoGI") + e(-361, "[QRg", -360, -366, -367)](-25 * -191 + 19 * -316 + 1245)[e(-399, "7ZCF", -377, -374, -388) + A(-131, -128, -134, "o[q0")](-503 * -18 + 7213 + -5 * 3253, "0"))[I(-149, -147, "r&!^")]("");
}
function EA(g, I) {
  const e = Pg();
  return EA = function(A, t) {
    A = A - (-353 * 1 + 823 * -10 + 9040);
    let o = e[A];
    if (EA.WFKqvU === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", s = "";
        for (let d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (let d = 0, h = x.length; d < h; d++)
          s += "%" + ("00" + x.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let x = [], s = 0, d, h = "";
        Q = i(Q);
        let r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      EA.iwxRcR = a, g = arguments, EA.WFKqvU = !0;
    }
    const C = e[0], B = A + C, n = g[B];
    return n ? o = n : (EA.TtAZdz === void 0 && (EA.TtAZdz = !0), o = EA.iwxRcR(o, t), g[B] = o), o;
  }, EA(g, I);
}
function Pg() {
  const g = ["uwpdLCo5", "vHNdRG", "C3XuWQz2bSkMWQGXW6VdQXVdIa", "WPX9oSkppmoZWPHAhCokW6dcSmoG", "W7dcUx1NrCklWQz+sHSFW4O", "WR/cVmkFW5aleW7cOZaC", "WRHiz1xdP8k7pa", "W6v+W4m8WPzwBmonW7NcTN9wW58", "kZz/uSoc", "WR/cUSkBW59Kt0NcRXWvW5FdOmoW", "rbtcQ8kSW68", "dhVdPclcQCkVuvrLW6pdH8oWcG", "sa3dVelcJa", "WR4BjsFcI8oFFmkEx8onW58JWOu", "cdJcJSkLW5iQs8kuBSoXBqK", "W5XLvZNcGW", "W4SIW7C", "tCoIagpdP0D4WRxcPa", "W7RdKq/cKSk2W6OyWQzGDSomnG", "WQmra8okWP1bqmoGW5i", "WRr2dG", "WPX/omkcuSkPW5LBcSo8", "WRNcU8kAW55Rte/cTdufW5ldMCo7", "W6n5W4f4W50xcmoWW7S", "DmolWPqRerhcTNtdNmkseeP+", "jSouvx4", "W6P9gmoJWRm/la", "WRm7WO57W5O", "Dx1rW7OlsmoXWRCV", "aSkAWO5dWPi"];
  return Pg = function() {
    return g;
  }, Pg();
}
(function(g, I) {
  function e(B, n, a, Q, E) {
    return RA(Q - -134, a);
  }
  function A(B, n, a, Q, E) {
    return RA(B - 204, Q);
  }
  function t(B, n, a, Q, E) {
    return RA(a - 151, Q);
  }
  var o = g();
  function i(B, n, a, Q, E) {
    return RA(B - 36, E);
  }
  for (; ; )
    try {
      var C = -parseInt(e(337, 326, "JXqn", 337, 346)) / 1 + parseInt(e(328, 336, "%^8v", 339, 338)) / 2 + -parseInt(A(693, 700, 690, "iE@b", 693)) / 3 * (-parseInt(A(697, 709, 694, "bGOx", 704)) / 4) + -parseInt(t(620, 633, 631, "5lIf", 641)) / 5 * (parseInt(A(694, 696, 689, "5%#O", 696)) / 6) + parseInt(e(337, 353, "q*e]", 341, 335)) / 7 * (-parseInt(A(685, 679, 686, "P7*b", 697)) / 8) + -parseInt(t(622, 621, 627, "4JYT", 638)) / 9 * (parseInt(i(506, 509, 506, 512, "*zKN")) / 10) + parseInt(i(522, 510, 516, 526, "MyO)")) / 11 * (parseInt(A(687, 681, 698, "xF^y", 675)) / 12);
      if (C === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Vg, 217 * -853 + -705488 + 7234 * 212);
function RA(g, I) {
  var e = Vg();
  return RA = function(A, t) {
    A = A - (1929 * -1 + 4556 + -2157);
    var o = e[A];
    if (RA.PCPHDz === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var y = 0, G = x.length; y < G; y++)
          s += "%" + ("00" + x.charCodeAt(y).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var x = [], s = 0, d, h = "";
        Q = i(Q);
        var r;
        for (r = 0; r < 256; r++)
          x[r] = r;
        for (r = 0; r < 256; r++)
          s = (s + x[r] + E.charCodeAt(r % E.length)) % 256, d = x[r], x[r] = x[s], x[s] = d;
        r = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          r = (r + 1) % 256, s = (s + x[r]) % 256, d = x[r], x[r] = x[s], x[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ x[(x[r] + x[s]) % 256]);
        return h;
      };
      RA.dHYgfm = C, g = arguments, RA.PCPHDz = !0;
    }
    var B = e[-1610 * -2 + 7718 + -6 * 1823], n = A + B, a = g[n];
    return a ? o = a : (RA.XXWLhj === void 0 && (RA.XXWLhj = !0), o = RA.dHYgfm(o, t), g[n] = o), o;
  }, RA(g, I);
}
function Vg() {
  var g = ["W7Xau8kBW7Ghb8ogWPW", "hKqeW7XDpceP", "W5lcI0uefSk/WQqEWPLdkZuG", "WP7cOCopoXVdQ0/dRID1ga", "W5ZcGCohnZGzDXhdQLy", "r8ogW5X9W4JdHflcNmoQ", "oYZcOaHvbMldKqBcMGO", "WPJcMrdcLCk/kN/dKG", "mSkApSk9wINdUSoE", "ewhcHSkWpw7dUIpcPcv9WR4e", "j1T/WRqiuSo/", "hKz+WQCrqguHW4BcIcxdM8kZ", "r8ohW54jWRBdIeRcVCoubNS", "sCktW5pdLsmwW7lcRCkIq8oZFq", "WQmXjCo4WRegm8oWW6xdOCotW4rq", "WR8il0DMWReUjGKuW4tcNq", "fmoohCoNesWugG", "W5PEW7/dI3Kqn3bvwa", "W6SWW4WPW7/dICo+WONdGCkxeq", "W6pdHHtcGCk1Due", "WPFcQSonprpcMaBdQdnYg2zS", "CfaJdCoWBY1UW6O6pLRdKq", "nSoJWRakiSo4WRBcQSkoWQ/dSCkQsG", "WRWni0bSWRjpfJuOW4hcU8kR"];
  return Vg = function() {
    return g;
  }, Vg();
}
async function NB(g) {
  const { Image: I } = Ne, e = await g.arrayBuffer(), A = new Uint8Array(e), t = {};
  t.bytes = A;
  const o = I.verify(t);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function RB(g) {
  const { v4: { Metadata: I } } = Ne, e = { ...g };
  e.platform = Ne.Platform.WEB;
  const A = e, t = I.verify(A);
  if (t) throw Error(t);
  return I.create(A);
}
async function FB(g) {
  const { Content: I } = Ne, { iv: e, key: A, message: t } = await Or(g), o = { token: new Uint8Array(A), iv: e, schemaVersion: Pa, bytes: new Uint8Array(t) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function SB(g) {
  const { Blob: I } = Ne.v4, e = I.verify(g);
  if (e) throw Error(e);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function qr(g, I) {
  const { FaceContent: e } = Ne.v4, A = await NB(g), t = await RB(I), o = {};
  o.image = A, o.metadata = t;
  const i = o, C = e.verify(i);
  if (C) throw Error(C);
  const B = e.create(i), n = {};
  return n.faceContent = B, SB(n);
}
async function Zr(g, I) {
  const e = await qr(g, I);
  return FB(e);
}
function jr({ controller: g, onPhotoTakenInternal: I }) {
  const { cameraFacing: e, captureMode: A, onPhotoTaken: t, sessionToken: o } = $I(), i = Ae(({ candidateSelectionImages: n, imageData: a, protoMessage: Q, webMetadata: E }) => {
    lr(_C.FACE, n), t(a, Q);
    const x = {};
    x.cameraProperties = E, I == null || I(x);
  }, [I, t]), C = Ae(({ fps: n, processedImage: a }, Q) => {
    rB(Ce.INSTRUCTION_CHANGED, a.instructionCode), g && vx(Ce.DETECTED_FACE_CHANGED, a.detection, g.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = a.detection, E.fps = n, E.image = Q, E.isInCandidateSelection = a.isInCandidateSelection, E.invalidValidators = a.invalidValidators, Yx(Ce.FACE_DETECTION, E);
  }, [g]), B = {};
  return B.captureMode = A, B.cameraFacing = e, B.controller = g, B.createProtoMessage = Zr, B.onCapture = i, B.onDetection = C, B.sessionToken = o, B.customEvent = Ce, B.fallbackInstruction = oA.FACE_NOT_PRESENT, B.instructionCodeMap = oA, B.checkToInstructionCodeMap = Qa, or(B);
}
class Pr {
  constructor(I, e) {
    p(this, "isDetectorInitialized", !1);
    p(this, "samVersion", null);
    p(this, "detection");
    this.imageProcessor = I, this.assetsDirectoryPath = e;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(I) {
    await this.detector.initSamModule(location.href, I);
    const e = await this.detector.getSamVersion();
    this.setSamVersion(e), this.isDetectorInitialized = !0;
  }
  setSamVersion(I) {
    if (!I || !this.areVersionsCompatible(I))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new H("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
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
  static getWorkerPath(I, e) {
    return "" + e.replace(KC, "") + I;
  }
}
class Vr {
  constructor() {
    p(this, "detectionRecord", []);
    p(this, "imagesWithTimestampForDuplicateDetection", new PI(ja));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: e }) {
    const A = I.length / _a, t = A / (-1142 * -5 + -9841 + 4133), o = I.length / (-8665 + 82 * 31 + 6125), i = await Tr(I.slice(o - t, o + t)), C = {};
    C.imageHash = i, C.timestampMillis = e, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: Cx(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: e, imageData: A, timestamp: t }) {
    const o = TC(I), i = this.validationService.validateDetectedObject(o, e);
    if (i.result.get("isPresent")) {
      const C = {};
      C.image = A, C.timestamp = t, this.collectImagesForDuplicateDetection(C);
    }
    return this.detectionRecord.push(I), { detection: o, validationResult: i.result, isValid: i.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Xr {
  constructor() {
    p(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new H("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const MB = Symbol("Comlink.proxy"), _r = Symbol("Comlink.endpoint"), zr = Symbol("Comlink.releaseProxy"), W0 = Symbol("Comlink.finalizer"), pg = Symbol("Comlink.thrown"), LB = (g) => typeof g == "object" && g !== null || typeof g == "function", $r = {
  canHandle: (g) => LB(g) && g[MB],
  serialize(g) {
    const { port1: I, port2: e } = new MessageChannel();
    return vB(g, I), [e, [e]];
  },
  deserialize(g) {
    return g.start(), oo(g);
  }
}, AE = {
  canHandle: (g) => LB(g) && pg in g,
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
}, JB = /* @__PURE__ */ new Map([
  ["proxy", $r],
  ["throw", AE]
]);
function eE(g, I) {
  for (const e of g)
    if (I === e || e === "*" || e instanceof RegExp && e.test(I))
      return !0;
  return !1;
}
function vB(g, I = globalThis, e = ["*"]) {
  I.addEventListener("message", function A(t) {
    if (!t || !t.data)
      return;
    if (!eE(e, t.origin)) {
      console.warn(`Invalid origin '${t.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, t.data), B = (t.data.argumentList || []).map(ce);
    let n;
    try {
      const a = C.slice(0, -1).reduce((E, x) => E[x], g), Q = C.reduce((E, x) => E[x], g);
      switch (i) {
        case "GET":
          n = Q;
          break;
        case "SET":
          a[C.slice(-1)[0]] = ce(t.data.value), n = !0;
          break;
        case "APPLY":
          n = Q.apply(a, B);
          break;
        case "CONSTRUCT":
          {
            const E = new Q(...B);
            n = CE(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: x } = new MessageChannel();
            vB(g, x), n = iE(E, [E]);
          }
          break;
        case "RELEASE":
          n = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      n = { value: a, [pg]: 0 };
    }
    Promise.resolve(n).catch((a) => ({ value: a, [pg]: 0 })).then((a) => {
      const [Q, E] = zg(a);
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E), i === "RELEASE" && (I.removeEventListener("message", A), YB(I), W0 in g && typeof g[W0] == "function" && g[W0]());
    }).catch((a) => {
      const [Q, E] = zg({
        value: new TypeError("Unserializable return value"),
        [pg]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E);
    });
  }), I.start && I.start();
}
function tE(g) {
  return g.constructor.name === "MessagePort";
}
function YB(g) {
  tE(g) && g.close();
}
function oo(g, I) {
  return bI(g, [], I);
}
function ng(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function WB(g) {
  return Ue(g, {
    type: "RELEASE"
  }).then(() => {
    YB(g);
  });
}
const Xg = /* @__PURE__ */ new WeakMap(), _g = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (Xg.get(g) || 0) - 1;
  Xg.set(g, I), I === 0 && WB(g);
});
function gE(g, I) {
  const e = (Xg.get(I) || 0) + 1;
  Xg.set(I, e), _g && _g.register(g, I, g);
}
function IE(g) {
  _g && _g.unregister(g);
}
function bI(g, I = [], e = function() {
}) {
  let A = !1;
  const t = new Proxy(e, {
    get(o, i) {
      if (ng(A), i === zr)
        return () => {
          IE(t), WB(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => t };
        const C = Ue(g, {
          type: "GET",
          path: I.map((B) => B.toString())
        }).then(ce);
        return C.then.bind(C);
      }
      return bI(g, [...I, i]);
    },
    set(o, i, C) {
      ng(A);
      const [B, n] = zg(C);
      return Ue(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: B
      }, n).then(ce);
    },
    apply(o, i, C) {
      ng(A);
      const B = I[I.length - 1];
      if (B === _r)
        return Ue(g, {
          type: "ENDPOINT"
        }).then(ce);
      if (B === "bind")
        return bI(g, I.slice(0, -1));
      const [n, a] = mi(C);
      return Ue(g, {
        type: "APPLY",
        path: I.map((Q) => Q.toString()),
        argumentList: n
      }, a).then(ce);
    },
    construct(o, i) {
      ng(A);
      const [C, B] = mi(i);
      return Ue(g, {
        type: "CONSTRUCT",
        path: I.map((n) => n.toString()),
        argumentList: C
      }, B).then(ce);
    }
  });
  return gE(t, g), t;
}
function oE(g) {
  return Array.prototype.concat.apply([], g);
}
function mi(g) {
  const I = g.map(zg);
  return [I.map((e) => e[0]), oE(I.map((e) => e[1]))];
}
const UB = /* @__PURE__ */ new WeakMap();
function iE(g, I) {
  return UB.set(g, I), g;
}
function CE(g) {
  return Object.assign(g, { [MB]: !0 });
}
function zg(g) {
  for (const [I, e] of JB)
    if (e.canHandle(g)) {
      const [A, t] = e.serialize(g);
      return [
        {
          type: "HANDLER",
          name: I,
          value: A
        },
        t
      ];
    }
  return [
    {
      type: "RAW",
      value: g
    },
    UB.get(g) || []
  ];
}
function ce(g) {
  switch (g.type) {
    case "HANDLER":
      return JB.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function Ue(g, I, e) {
  return new Promise((A) => {
    const t = BE();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== t || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: t }, I), e);
  });
}
function BE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const nE = "SAM v1.44.0 for idcards", QE = "/dot-assets/magnifeye/dot-CCz7p721.js";
class HB extends Vr {
  constructor(e, A) {
    super();
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    p(this, "validationService");
    this.detector = e, this.validationService = A;
  }
  optimizeImageBeforeDetection(e) {
    const A = Sg(e), t = ix(e, A);
    return super.optimizeImageBeforeDetection(t);
  }
  async process({ image: e, timestamp: A }) {
    const t = this.optimizeImageBeforeDetection(e), o = {};
    o.height = e.height, o.width = e.width;
    let i = await this.detector.detect(t.data, t.resolution, o);
    i = nr(i, Sg(e));
    const C = {};
    return C.detectedObject = i, C.image = e, C.imageData = t.data, C.timestamp = A, this.processDetectedObject(C);
  }
}
var Te, ue, fe;
class aE {
  constructor(I) {
    U(this, Te);
    U(this, ue);
    U(this, fe);
    Y(this, Te, I), Y(this, ue, /* @__PURE__ */ new Map());
  }
  validate() {
    m(this, Te).forEach((I) => {
      m(this, ue).set(I.name, I.evaluate());
    }), Y(this, fe, void (-5141 + -5141 * -1));
  }
  isValid() {
    return m(this, fe) === void (9637 * -1 + 4035 + 1 * 5602) && Y(this, fe, Array.from(m(this, ue).values()).every((I) => I)), m(this, fe);
  }
  get result() {
    return m(this, ue);
  }
  get validators() {
    return m(this, Te);
  }
}
Te = new WeakMap(), ue = new WeakMap(), fe = new WeakMap();
var St, De;
class mA {
  constructor(I, e) {
    U(this, St);
    U(this, De);
    Y(this, St, I), Y(this, De, e);
  }
  get threshold() {
    return m(this, De);
  }
  get name() {
    return m(this, St);
  }
  isValueBelowThreshold(I) {
    return I < m(this, De);
  }
  isValueAboveThreshold(I) {
    return I > m(this, De);
  }
}
St = new WeakMap(), De = new WeakMap();
const xE = "isNotDim";
var Mt;
class rE extends mA {
  constructor(e, A) {
    super(xE, e);
    U(this, Mt);
    Y(this, Mt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Mt));
  }
}
Mt = new WeakMap();
const EE = "isNotSmall";
var Lt;
class sE extends mA {
  constructor(e, A) {
    super(EE, e);
    U(this, Lt);
    Y(this, Lt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Lt));
  }
}
Lt = new WeakMap();
const cE = "isNotBright";
var Jt;
class dE extends mA {
  constructor(e, A) {
    super(cE, e);
    U(this, Jt);
    Y(this, Jt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Jt));
  }
}
Jt = new WeakMap();
const hE = "isPresent";
var vt;
class lE extends mA {
  constructor(e, A) {
    super(hE, e);
    U(this, vt);
    Y(this, vt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, vt));
  }
}
vt = new WeakMap();
const uE = "isSharp";
var Yt;
class fE extends mA {
  constructor(e, A) {
    super(uE, e);
    U(this, Yt);
    Y(this, Yt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Yt));
  }
}
Yt = new WeakMap();
const DE = "isLeftEyePresent";
var Wt;
class yE extends mA {
  constructor(e, A) {
    super(DE, e);
    U(this, Wt);
    Y(this, Wt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Wt));
  }
}
Wt = new WeakMap();
const wE = "isMouthPresent";
var Ut;
class pE extends mA {
  constructor(e, A) {
    super(wE, e);
    U(this, Ut);
    Y(this, Ut, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ut));
  }
}
Ut = new WeakMap();
const mE = "isMouthScoreNotTooLow";
var Ht;
class GE extends mA {
  constructor(e, A) {
    super(mE, e);
    U(this, Ht);
    Y(this, Ht, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ht));
  }
}
Ht = new WeakMap();
const kE = "isMouthScoreNotTooHigh";
var Kt;
class bE extends mA {
  constructor(e, A) {
    super(kE, e);
    U(this, Kt);
    Y(this, Kt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Kt));
  }
}
Kt = new WeakMap();
const NE = "isNotLarge";
var Ot;
class RE extends mA {
  constructor(e, A) {
    super(NE, e);
    U(this, Ot);
    Y(this, Ot, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Ot));
  }
}
Ot = new WeakMap();
const FE = "isNotPitched";
var Tt;
const io = class io extends mA {
  constructor(e, A) {
    super(FE, io.calculatePitchAngleAccelerationThreshold(e));
    U(this, Tt);
    Y(this, Tt, A);
  }
  static calculatePitchAngleAccelerationThreshold(e) {
    return qa * Math.sin(e * (Math.PI / (10 * 607 + -7662 + 1772)));
  }
  evaluate() {
    const { z: e } = m(this, Tt) || {};
    return e ? this.isValueBelowThreshold(Math.abs(e)) : !0;
  }
};
Tt = new WeakMap();
let NI = io;
const SE = "isRightEyePresent";
var qt;
class ME extends mA {
  constructor(e, A) {
    super(SE, e);
    U(this, qt);
    Y(this, qt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, qt));
  }
}
qt = new WeakMap();
const LE = "isNotOutOfBounds";
var Zt, ye;
class JE extends mA {
  constructor(e, A, t) {
    super(LE, e);
    U(this, Zt);
    U(this, ye);
    Y(this, Zt, A), Y(this, ye, t);
  }
  evaluate() {
    const e = XC(m(this, ye), this.threshold, Sg(m(this, ye))), A = hB(m(this, Zt), m(this, ye));
    return nx(A, e);
  }
}
Zt = new WeakMap(), ye = new WeakMap();
class vE {
  static getFaceValidationInstance(I, e, A, t) {
    return new aE([new lE(I.faceConfidence, e.confidence), new yE(I.leftEye.confidence, e.leftEye.confidence), new ME(I.rightEye.confidence, e.rightEye.confidence), new sE(I.minFaceSizeRatio, e.faceSize), new RE(I.maxFaceSizeRatio, e.faceSize), new fE(I.sharpnessThreshold, e.sharpness), new rE(I.brightnessLowThreshold, e.brightness), new dE(I.brightnessHighThreshold, e.brightness), new JE(I.outOfBoundsThreshold, e, A), new NI(I.devicePitchAngleThreshold, t), new pE(I.mouth.confidence, e.mouth.confidence), new bE(I.mouth.status.max, e.mouth.status), new GE(I.mouth.status.min, e.mouth.status)]);
  }
}
class KB extends Xr {
  constructor() {
    super(...arguments);
    p(this, "className", "FaceValidationService");
    p(this, "acceleration", null);
  }
  validateDetectedObject(e, A) {
    const t = vE.getFaceValidationInstance(this.getThresholds(), e, A, this.acceleration);
    return t.validate(), t;
  }
}
const wt = class wt extends Pr {
  constructor(e, A, t, o) {
    super(t, o);
    p(this, "detector");
    p(this, "validationService");
    this.detector = e, this.validationService = A;
  }
  static async createInstance(e) {
    const A = wt.getWorkerPath(QE, e), t = {};
    t.type = "module";
    const o = new Worker(new URL(A, import.meta.url), t), i = oo(o), C = await new i(), B = new KB(), n = new HB(C, B);
    return new wt(C, B, n, e);
  }
  static async getInstance(e) {
    return !this._instance && (this._instance = await this.createInstance(e)), this._instance;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop(), rB(Ce.INSTRUCTION_CHANGED, (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Da);
  }
  setAcceleration(e) {
    this.validationService.acceleration = e;
  }
  areVersionsCompatible(e) {
    return e === nE;
  }
};
p(wt, "_instance");
let $g = wt;
const OB = {};
OB.controllerClass = $g;
function YE({ controllerClass: g } = OB) {
  const { handleError: I } = gt(), { acceleration: e } = Px(), { assetsDirectoryPath: A, thresholds: t } = $I(), [o, i] = yA();
  V(() => {
    (async () => {
      const n = await g.getInstance(A);
      try {
        await n.init(), i(n);
      } catch (a) {
        if (a instanceof Error) {
          I(H.fromError(a));
          return;
        }
      }
    })();
  }, [g, I, A]), V(() => {
    o && o.setThresholds(t);
  }, [o, t]), V(() => {
    o && o.setAcceleration(e);
  }, [e, o]);
  const C = {};
  return C.controller = o, C;
}
const WE = "SAM v1.44.0 for idcards", UE = "/dot-assets/magnifeye/dot-DaXw1Gwm.js";
class A0 extends $g {
  static async createInstance(I) {
    const e = A0.getWorkerPath(UE, I), A = {};
    A.type = "module";
    const t = new Worker(new URL(e, import.meta.url), A), o = oo(t), i = await new o(), C = new KB(), B = new HB(i, C);
    return new A0(i, C, B, I);
  }
  areVersionsCompatible(I) {
    return I === WE;
  }
}
function HE({ onPhotoTakenInternal: g }) {
  const { sunfish: I } = Vt(), { controller: e } = YE({ controllerClass: A0 }), { cameraResolution: A, detectionDetails: t, shouldCameraMirror: o, videoRef: i } = jr({
    controller: e,
    onPhotoTakenInternal: g
  });
  return /* @__PURE__ */ D(MA, { children: /* @__PURE__ */ D(
    hr,
    {
      cameraResolution: A,
      detectionDetails: t,
      shouldMirror: o,
      children: /* @__PURE__ */ D(
        ia,
        {
          ref: i,
          $isImageMirror: o,
          $isVisible: I,
          autoPlay: !0,
          id: ya,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function KE(g, I) {
  const { MagnifEyeLivenessContent: e } = Ne.v4, A = await Promise.all(g.map(async (a) => NB(a))), t = await RB(I), o = {};
  o.images = A, o.metadata = t;
  const i = o, C = e.verify(i);
  if (C) throw Error(C);
  const B = e.create(i), n = {};
  return n.magnifeyeLivenessContent = B, SB(n);
}
async function OE(g, I) {
  const e = g.map((t) => t.image), A = await KE(e, I);
  return FB(A);
}
function TE(g, I) {
  const e = ei(g.faceSize, ai);
  return ei(I.faceSize, ai) < e;
}
const qE = (g, I) => {
  const e = It(void 0), A = (o) => {
    if (!(!o.detail || g !== he.RUNNING || I !== pA.CLOSEUP)) {
      if (!e.value) {
        e.value = o.detail;
        return;
      }
      TE(e.value.data.detection, o.detail.data.detection) && (e.value = o.detail);
    }
  };
  QB(Ce.FACE_DETECTION, A);
  const t = {};
  return t.middleImageBestCandidate = e, t;
}, ZE = tt.div`
  ${(g) => g.$isSecondStep && kC`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, jE = ({
  assetsDirectoryPath: g,
  onComplete: I,
  sessionToken: e
}) => {
  const { analytics: A } = JC(), { appState: t, handleAppStateChange: o, handleError: i, magnifEyePhase: C, setMagnifEyePhase: B } = xa(), { cameraProperties: n, mergeCameraProperties: a } = Rx(), Q = It([]), { middleImageBestCandidate: E } = qE(t, C), x = Fx(mt.ANIMATION_END);
  function s(G) {
    Q.value = [...Q.value, G];
  }
  function d(G) {
    B(G), wI(mt.STATUS_CHANGED, { phase: G });
  }
  function h(G) {
    s(G), d(pA.MIDDLE);
  }
  x.value && d(pA.CLOSEUP);
  async function r(G) {
    if (E.value) {
      const M = { image: await PC(E.value.image), data: E.value.data };
      s(M);
    }
    s(G);
    try {
      const N = {
        sessionToken: e,
        web: n.value
      }, M = await OE(Q.value, N), [w] = Q.value;
      I(w, M), A == null || A.trackLivenessProcess(Q.value);
    } catch (N) {
      N instanceof Error && i(H.fromError(N));
      return;
    }
    o(he.DONE);
  }
  const u = {
    [pA.DISTANT]: h,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [pA.MIDDLE]: () => {
    },
    [pA.CLOSEUP]: r
  }, y = wA(
    () => ({
      assetsDirectoryPath: g,
      magnifEyePhase: C,
      onPhotoTaken: u[C],
      thresholds: Br[C]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, C]
  );
  return /* @__PURE__ */ D(ir, { children: /* @__PURE__ */ D(ZE, { $isSecondStep: C !== pA.DISTANT, children: /* @__PURE__ */ D(Mx, { cameraOptions: y, children: /* @__PURE__ */ D(HE, { onPhotoTakenInternal: a }) }) }) });
};
function PE({ initAppState: g, onError: I }) {
  const [e, A] = yA(g), [t, o] = yA(), [i, C] = yA(!1), B = LA(I);
  V(() => {
    B.current = I;
  }, [I]);
  const n = {};
  return n.appState = e, n.setAppState = A, n.error = t, n.setError = o, n.isCameraReady = i, n.setIsCameraReady = C, n.onErrorRef = B, n;
}
function VE(g, I) {
  return I !== pA.DISTANT ? ft.HIDDEN : g !== he.RUNNING ? ft.VISIBLE : ft.VISIBLE_WITH_MASK;
}
function XE({
  onError: g
}) {
  const { appState: I, error: e, isCameraReady: A, onErrorRef: t, setAppState: o, setError: i, setIsCameraReady: C } = PE({
    initAppState: he.LOADING,
    onError: g
  }), [B, n] = yA(pA.DISTANT), a = VE(I, B), Q = Ae(
    (x) => {
      wI(mt.STATUS_CHANGED, { state: he.ERROR, error: x }), C(!1), t.current(x), i(x), o(he.ERROR);
    },
    [C, t, i, o]
  ), E = Ae(
    (x) => {
      x !== he.WAITING && (o(x), wI(mt.STATUS_CHANGED, { state: x }));
    },
    [o]
  );
  return {
    appState: I,
    magnifEyePhase: B,
    setMagnifEyePhase: n,
    freemiumOverlayState: a,
    isCameraReady: A,
    setIsCameraReady: C,
    handleAppStateChange: E,
    handleError: Q,
    error: e
  };
}
var TB = ((g) => (g.AUTO_CAPTURE = "auto-capture", g.LONG_CAPTURE_SMILE = "long-capture-smile", g))(TB || {});
class _E {
  constructor() {
    p(this, "appKey", "");
    p(this, "deviceId", "");
  }
  async countlyFetch(I) {
    if (!this.appKey || !this.deviceId) return;
    const e = {};
    e.Accept = "application/json";
    const A = {};
    A.method = "GET", A.headers = e;
    const t = A, o = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const C = ig(i);
    try {
      await fetch("" + o + C + "&" + I, t);
    } catch (B) {
      console.error("Countly Error", B);
    }
  }
  async init(I, e) {
    if (!e) return;
    this.appKey = e, this.deviceId = I;
    const A = { _app_version: qC() }, t = { organization: ZC(window.location.href) }, o = ig({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(t) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const e = ig(I);
    await this.countlyFetch(e);
  }
  async sendEvent(I, e, A) {
    const t = {};
    t.key = I, t.count = 1, t.dur = A, t.segmentation = e;
    const o = [t], i = ig({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, e) {
    await this.sendEvent(TB.AUTO_CAPTURE, I, e);
  }
}
const Qg = new _E();
class zE {
  constructor() {
    p(this, "countly", Qg);
  }
  createSegmentation(I) {
    return { appVersion: qC(), ...I };
  }
  init(I) {
    if (Ax()) return;
    const e = _x();
    Qg.init(e, I);
  }
  endSession() {
    Qg.endSession();
  }
  walleye(I, e) {
    const A = {};
    A.nocturne = I, A.customer = e;
    const t = this.createSegmentation(A);
    Qg.sendAutoCaptureEvent(t);
  }
}
class $E extends zE {
  constructor() {
    super(...arguments);
    p(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(e) {
    this.captureProcessAnalytics.push(e);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class As extends $E {
  trackLivenessProcess(I) {
    var Q, E, x, s, d, h, r, u, y, G;
    if (!I.length || !this.captureProcessAnalytics.length) return;
    const [e, A, t] = I, [o, i] = this.captureProcessAnalytics, C = $x(o.averageFps + (i == null ? void 0 : i.averageFps)) / (1 * 6469 + -5 * -353 + -8232), B = Qi(o.captureProcessDurationInMs), n = Qi(i == null ? void 0 : i["captureProcessDurationInMs"]), a = this.createSegmentation({ faceSizeDistant: ve((Q = e.data.detection) == null ? void 0 : Q.faceSize), faceSizeCloseup: ve((E = t == null ? void 0 : t.data.detection) == null ? void 0 : E.faceSize), faceSizeMiddle: ve((x = A.data.detection) == null ? void 0 : x.faceSize), confidenceDistant: ve((s = e.data.detection) == null ? void 0 : s.confidence), confidenceCloseup: ve((d = t == null ? void 0 : t.data.detection) == null ? void 0 : d.confidence), confidenceMiddle: ve((h = A.data.detection) == null ? void 0 : h.confidence), imageResolution: ((u = (r = e.data) == null ? void 0 : r["imageResolution"]) == null ? void 0 : u.width) + "x" + ((G = (y = e.data) == null ? void 0 : y["imageResolution"]) == null ? void 0 : G.height), averageFps: C, captureTimeCloseup: n > 6 * -299 + -5758 + 7597 ? ">45" : "" + n, captureTimeDistant: B > -17640 + 31 * 570 ? ">30" : "" + B, camera: zx(o == null ? void 0 : o.deviceName, o == null ? void 0 : o.facingMode), instructionSet: o.instructionSet });
    this.countly.sendAutoCaptureEvent(a, B + n), this.reset();
  }
}
const es = new As(), ts = ({ props: g }) => g ? /* @__PURE__ */ D($Q, { target: g.styleTarget, children: /* @__PURE__ */ D(
  xx,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: hI.getInstance(),
    children: /* @__PURE__ */ D(sx, { analytics: es, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ D(
      aa,
      {
        value: XE({
          onError: g.onError
        }),
        children: /* @__PURE__ */ D(LC, { children: /* @__PURE__ */ D(jE, { ...g }) })
      }
    ) })
  }
) }) : null;
Qn(ts, "x-dot-magnifeye-liveness", ["props"]);
