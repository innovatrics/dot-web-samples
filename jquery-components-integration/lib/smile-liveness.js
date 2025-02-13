var QB = Object.defineProperty;
var Lo = (g) => {
  throw TypeError(g);
};
var aB = (g, I, t) => I in g ? QB(g, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[I] = t;
var m = (g, I, t) => aB(g, typeof I != "symbol" ? I + "" : I, t), vo = (g, I, t) => I.has(g) || Lo("Cannot " + t);
var D = (g, I, t) => (vo(g, I, "read from private field"), t ? t.call(g) : I.get(g)), L = (g, I, t) => I.has(g) ? Lo("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, t), M = (g, I, t, A) => (vo(g, I, "write to private field"), A ? A.call(g, t) : I.set(g, t), t);
var og, N, AC, eC, De, Jo, tC, II, $I, oI, iI, gC, Lt = {}, IC = [], rB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, f0 = Array.isArray;
function ee(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function oC(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function lA(g, I, t) {
  var A, e, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : i[o] = I[o];
  if (arguments.length > -2 * 4079 + -2 * 3359 + 14878 && (i.children = arguments.length > -10117 + 40 * 253 ? og.call(arguments, 1655 + -3 * 551) : t), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) void (2773 * -3 + -1 * -4595 + 3724) === i[o] && (i[o] = g.defaultProps[o]);
  return bt(g, i, A, e, null);
}
function bt(g, I, t, A, e) {
  var o = {};
  o.type = g, o.props = I, o.key = t, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (-3807 * -1 + -5607 * 1 + 8 * 225), o.__c = null, o.constructor = void (3441 + -41 * 111 + -2 * -555), o.__v = e ?? ++AC, o.__i = -1, o.__u = 0;
  var i = o;
  return e == null && N.vnode != null && N.vnode(i), i;
}
function xB() {
  var g = {};
  return g.current = null, g;
}
function LA(g) {
  return g.children;
}
function SA(g, I) {
  this.props = g, this.context = I;
}
function Me(g, I) {
  if (I == null) return g.__ ? Me(g.__, g.__i + (-3 * 2481 + 6979 * 1 + 465)) : null;
  for (var t; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) return t.__e;
  return typeof g.type == "function" ? Me(g) : null;
}
function iC(g) {
  var I, t;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = 4087 * 1 + -12 * 3 + -4051; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) {
      g.__e = g.__c.base = t.__e;
      break;
    }
    return iC(g);
  }
}
function CI(g) {
  (!g.__d && (g.__d = !(-12415 + -65 * -191)) && De.push(g) && !Ug.__r++ || Jo !== N.debounceRendering) && ((Jo = N.debounceRendering) || tC)(Ug);
}
function Ug() {
  var g, I, t, A, e, o, i, C;
  for (De.sort(II); g = De.shift(); ) g.__d && (I = De.length, A = void 0, o = (e = (t = g).__v).__e, i = [], C = [], t.__P && ((A = ee({}, e)).__v = e.__v + 1, N.vnode && N.vnode(A), Ao(t.__P, A, e, t.__n, t.__P.namespaceURI, -3373 * -1 + -524 + -2817 & e.__u ? [o] : null, i, o ?? Me(e), !!(8569 + 8537 * -1 & e.__u), C), A.__v = e.__v, A.__.__k[A.__i] = A, BC(i, A, C), A.__e != o && iC(A)), De.length > I && De.sort(II));
  Ug.__r = 0;
}
function CC(g, I, t, A, e, o, i, C, n, B, a) {
  var Q, E, x, s, d, h = A && A.__k || IC, r = I.length;
  for (t.__d = n, EB(t, I, h), n = t.__d, Q = -173 * 12 + 7414 + -5338; Q < r; Q++) (x = t.__k[Q]) != null && typeof x != "boolean" && typeof x != "function" && (E = -(5581 * -1 + -5821 + 11403) === x.__i ? Lt : h[x.__i] || Lt, x.__i = Q, Ao(g, x, E, e, o, i, C, n, B, a), s = x.__e, x.ref && E.ref != x.ref && (E.ref && eo(E.ref, null, x), a.push(x.ref, x.__c || s, x)), d == null && s != null && (d = s), 65536 & x.__u || E.__k === x.__k ? (n && typeof x.type == "string" && !g.contains(n) && (n = Me(E)), n = nC(x, n, g)) : typeof x.type == "function" && void (-129 * -33 + -4 * -425 + 161 * -37) !== x.__d ? n = x.__d : s && (n = s.nextSibling), x.__d = void (29 * -3 + 437 * -6 + 7 * 387), x.__u &= -(6 * 13773 + 623 * -67 + 155712));
  t.__d = n, t.__e = d;
}
function EB(g, I, t) {
  var A, e, o, i, C, n = I.length, B = t.length, a = B, Q = -6728 + 11 * -835 + 1 * 15913;
  for (g.__k = [], A = 4587 + -5 * 353 + -2 * 1411; A < n; A++) i = A + Q, (e = g.__k[A] = (e = I[A]) == null || typeof e == "boolean" || typeof e == "function" ? null : typeof e == "string" || typeof e == "number" || typeof e == "bigint" || e.constructor == String ? bt(null, e, null, null, null) : f0(e) ? bt(LA, { children: e }, null, null, null) : void (5771 + 29 * -199) === e.constructor && e.__b > -17 * -279 + 3760 * 1 + 1 * -8503 ? bt(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v) : e) != null ? (e.__ = g, e.__b = g.__b + (-7930 + -7931 * -1), C = sB(e, t, i, a), e.__i = C, o = null, -(-748 * 10 + -95 * 11 + 8526) !== C && (a--, (o = t[C]) && (o.__u |= -9 * -22962 + -201080 + 125494)), o == null || o.__v === null ? (-(-5 * -1783 + -1 * -4474 + 3347 * -4) == C && Q--, typeof e.type != "function" && (e.__u |= -17 * 5609 + 31923 + 128966)) : C !== i && (C == i - (-2894 * 3 + -871 * 7 + 14780) ? Q = C - i : C == i + (4 * -368 + -199 * -39 + 8 * -786) ? Q++ : C > i ? a > n - i ? Q += C - i : Q-- : C < i && Q++, C !== A + Q && (e.__u |= 89 * 799 + -334 * 303 + 19 * 5033))) : (o = t[i]) && o.key == null && o.__e && 1504 + 16 * -94 == (1 * -114971 + 254243 * 1 + -8200 & o.__u) && (o.__e == g.__d && (g.__d = Me(o)), nI(o, o, !(14472 + -14471 * 1)), t[i] = null, a--);
  if (a)
    for (A = 8776 + 9091 * -1 + 5 * 63; A < B; A++) (o = t[A]) != null && 1 * -4687 + 10 * -791 + 12597 == (451761 + 1 * -320689 & o.__u) && (o.__e == g.__d && (g.__d = Me(o)), nI(o, o));
}
function nC(g, I, t) {
  var A, e;
  if (typeof g.type == "function") {
    for (A = g.__k, e = 0; A && e < A.length; e++) A[e] && (A[e].__ = g, I = nC(A[e], I, t));
    return I;
  }
  g.__e != I && (t.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && 382 * 2 + -4261 + 701 * 5 === I.nodeType);
  return I;
}
function te(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || (f0(g) ? g.some(function(t) {
    te(t, I);
  }) : I.push(g)), I;
}
function sB(g, I, t, A) {
  var e = g.key, o = g.type, i = t - 1, C = t + 1, n = I[t];
  if (n === null || n && e == n.key && o === n.type && !(-4289 * -53 + -13105 * 15 + 100330 * 1 & n.__u)) return t;
  if (A > (n != null && !(264189 + -1 * 133117 & n.__u) ? 1 : -9743 * 1 + 1 * -177 + 2 * 4960)) for (; i >= -7493 * 1 + -5835 + 13328 || C < I.length; ) {
    if (i >= -807 + 253 * 1 + 277 * 2) {
      if ((n = I[i]) && -1 * -6493 + 12 * -678 + 31 * 53 == (36694 + -89 * -2677 + -1 * 143875 & n.__u) && e == n.key && o === n.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((n = I[C]) && -353 * -19 + -45 * 147 + 1 * -92 == (-221477 * 1 + -82548 + 435097 & n.__u) && e == n.key && o === n.type) return C;
      C++;
    }
  }
  return -(-263 * 1 + 216 + 48);
}
function Wo(g, I, t) {
  I[0] === "-" ? g.setProperty(I, t ?? "") : g[I] = t == null ? "" : typeof t != "number" || rB.test(I) ? t : t + "px";
}
function rg(g, I, t, A, e) {
  var o;
  A: if (I === "style")
    if (typeof t == "string") g.style.cssText = t;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) t && I in t || Wo(g.style, I, "");
      if (t)
        for (I in t) A && t[I] === A[I] || Wo(g.style, I, t[I]);
    }
  else if (I[9302 + 6691 * -1 + -2611] === "o" && I[3 * -3023 + 9709 + 71 * -9] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(-8579 + -1 * 844 + 9425) : I.slice(9821 + -1 * 2615 + -7204), g.l || (g.l = {}), g.l[I + o] = t, t ? A ? t.u = A.u : (t.u = $I, g.addEventListener(I, o ? iI : oI, o)) : g.removeEventListener(I, o ? iI : oI, o);
  else {
    if (e == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(1 * -4091 + 3 * -863 + 6681 * 1) === t && I[-1871 + -3 * 614 + 3717] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && 7842 + 2 * 1095 + -10031 == t ? "" : t));
  }
}
function Yo(g) {
  return function(I) {
    if (this.l) {
      var t = this.l[I.type + g];
      if (I.t == null) I.t = $I++;
      else if (I.t < t.u) return;
      return t(N.event ? N.event(I) : I);
    }
  };
}
function Ao(g, I, t, A, e, o, i, C, n, B) {
  var a, Q, E, x, s, d, h, r, u, p, b, v, S, w, V, EA, q = I.type;
  if (void (2696 + -3779 * 1 + 1083) !== I.constructor) return null;
  128 & t.__u && (n = !!(13024 + 224 * -58 & t.__u), o = [C = I.__e = t.__e]), (a = N.__b) && a(I);
  A: if (typeof q == "function") try {
    if (r = I.props, u = "prototype" in q && q.prototype.render, p = (a = q.contextType) && A[a.__c], b = a ? p ? p.props.value : a.__ : A, t.__c ? h = (Q = I.__c = t.__c).__ = Q.__E : (u ? I.__c = Q = new q(r, b) : (I.__c = Q = new SA(r, b), Q.constructor = q, Q.render = dB), p && p.sub(Q), Q.props = r, Q.state || (Q.state = {}), Q.context = b, Q.__n = A, E = Q.__d = !0, Q.__h = [], Q._sb = []), u && Q.__s == null && (Q.__s = Q.state), u && q.getDerivedStateFromProps != null && (Q.__s == Q.state && (Q.__s = ee({}, Q.__s)), ee(Q.__s, q.getDerivedStateFromProps(r, Q.__s))), x = Q.props, s = Q.state, Q.__v = I, E) u && q.getDerivedStateFromProps == null && Q.componentWillMount != null && Q.componentWillMount(), u && Q.componentDidMount != null && Q.__h.push(Q.componentDidMount);
    else {
      if (u && q.getDerivedStateFromProps == null && r !== x && Q.componentWillReceiveProps != null && Q.componentWillReceiveProps(r, b), !Q.__e && (Q.shouldComponentUpdate != null && !(9243 + 1853 * 3 + -41 * 361) === Q.shouldComponentUpdate(r, Q.__s, b) || I.__v === t.__v)) {
        for (I.__v !== t.__v && (Q.props = r, Q.state = Q.__s, Q.__d = !(1 * 9829 + 6231 + 16059 * -1)), I.__e = t.__e, I.__k = t.__k, I.__k.forEach(function(U) {
          U && (U.__ = I);
        }), v = 9493 * -1 + -1 * 4409 + 3 * 4634; v < Q._sb.length; v++) Q.__h.push(Q._sb[v]);
        Q._sb = [], Q.__h.length && i.push(Q);
        break A;
      }
      Q.componentWillUpdate != null && Q.componentWillUpdate(r, Q.__s, b), u && Q.componentDidUpdate != null && Q.__h.push(function() {
        Q.componentDidUpdate(x, s, d);
      });
    }
    if (Q.context = b, Q.props = r, Q.__P = g, Q.__e = !(3 * -1093 + -3871 + -1 * -7151), S = N.__r, w = -2337 + 779 * 3, u) {
      for (Q.state = Q.__s, Q.__d = !(83 * 53 + 1511 * 5 + -11953), S && S(I), a = Q.render(Q.props, Q.state, Q.context), V = 0; V < Q._sb.length; V++) Q.__h.push(Q._sb[V]);
      Q._sb = [];
    } else do
      Q.__d = !(-129 * 29 + -8182 + -44 * -271), S && S(I), a = Q.render(Q.props, Q.state, Q.context), Q.state = Q.__s;
    while (Q.__d && ++w < 119 * 51 + -23 * 38 + -11 * 470);
    Q.state = Q.__s, Q.getChildContext != null && (A = ee(ee({}, A), Q.getChildContext())), u && !E && Q.getSnapshotBeforeUpdate != null && (d = Q.getSnapshotBeforeUpdate(x, s)), CC(g, f0(EA = a != null && a.type === LA && a.key == null ? a.props.children : a) ? EA : [EA], I, t, A, e, o, i, C, n, B), Q.base = I.__e, I.__u &= -(3050 * 1 + 6 * -19 + 75 * -37), Q.__h.length && i.push(Q), h && (Q.__E = Q.__ = null);
  } catch (U) {
    I.__v = null, n || o != null ? (I.__e = C, I.__u |= n ? -15 * 32 + 5261 + 4621 * -1 : -1319 * -2 + -1469 + -1137, o[o.indexOf(C)] = null) : (I.__e = t.__e, I.__k = t.__k), N.__e(U, I, t);
  }
  else o == null && I.__v === t.__v ? (I.__k = t.__k, I.__e = t.__e) : I.__e = cB(t.__e, I, t, A, e, o, i, n, B);
  (a = N.diffed) && a(I);
}
function BC(g, I, t) {
  I.__d = void (2 * 3114 + -3 * -1647 + -11169);
  for (var A = -4 * -879 + 502 * 7 + -7030; A < t.length; A++) eo(t[A], t[++A], t[++A]);
  N.__c && N.__c(I, g), g.some(function(e) {
    try {
      g = e.__h, e.__h = [], g.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      N.__e(o, e.__v);
    }
  });
}
function cB(g, I, t, A, e, o, i, C, n) {
  var B, a, Q, E, x, s, d, h = t.props, r = I.props, u = I.type;
  if (u === "svg" ? e = "http://www.w3.org/2000/svg" : u === "math" ? e = "http://www.w3.org/1998/Math/MathML" : e || (e = "http://www.w3.org/1999/xhtml"), o != null) {
    for (B = 3393 + -1 * -945 + -2169 * 2; B < o.length; B++) if ((x = o[B]) && "setAttribute" in x == !!u && (u ? x.localName === u : 3 * 373 + 9321 * -1 + 2735 * 3 === x.nodeType)) {
      g = x, o[B] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(r);
    g = document.createElementNS(e, u, r.is && r), o = null, C = !(2613 + -1 * -8682 + -11294);
  }
  if (u === null) h === r || C && g.data === r || (g.data = r);
  else {
    if (o = o && og.call(g.childNodes), h = t.props || Lt, !C && o != null)
      for (h = {}, B = -5608 + 994 * -7 + -122 * -103; B < g.attributes.length; B++) h[(x = g.attributes[B]).name] = x.value;
    for (B in h) if (x = h[B], B != "children") {
      if (B == "dangerouslySetInnerHTML") Q = x;
      else if (B !== "key" && !(B in r)) {
        if (B == "value" && "defaultValue" in r || B == "checked" && "defaultChecked" in r) continue;
        rg(g, B, null, x, e);
      }
    }
    for (B in r) x = r[B], B == "children" ? E = x : B == "dangerouslySetInnerHTML" ? a = x : B == "value" ? s = x : B == "checked" ? d = x : B === "key" || C && typeof x != "function" || h[B] === x || rg(g, B, x, h[B], e);
    if (a) C || Q && (a.__html === Q.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (Q && (g.innerHTML = ""), CC(g, f0(E) ? E : [E], I, t, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e, o, i, o ? o[8038 + 2 * 1689 + -8 * 1427] : t.__k && Me(t, -3307 * 1 + 7395 + 4 * -1022), C, n), o != null)
      for (B = o.length; B--; ) o[B] != null && oC(o[B]);
    C || (B = "value", void (8004 + 11 * 791 + -16705) !== s && (s !== g[B] || u === "progress" && !s || u === "option" && s !== h[B]) && rg(g, B, s, h[B], e), B = "checked", void (6152 + 1 * -6152) !== d && d !== g[B] && rg(g, B, d, h[B], e));
  }
  return g;
}
function eo(g, I, t) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    N.__e(A, t);
  }
}
function nI(g, I, t) {
  var A, e;
  if (N.unmount && N.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || eo(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      N.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (e = 2548 + -67 * -29 + -4491; e < A.length; e++) A[e] && nI(A[e], I, t || typeof g.type != "function");
  t || g.__e == null || oC(g.__e), g.__c = g.__ = g.__e = g.__d = void (916 * -6 + 1738 + 3758);
}
function dB(g, I, t) {
  return this.constructor(g, t);
}
function xe(g, I, t) {
  var A, e, o, i;
  N.__ && N.__(g, I), e = (A = typeof t == "function") ? null : t && t.__k || I.__k, o = [], i = [], Ao(I, g = (!A && t || I).__k = lA(LA, null, [g]), e || Lt, Lt, I.namespaceURI, !A && t ? [t] : e ? null : I.firstChild ? og.call(I.childNodes) : null, o, !A && t ? t : e ? e.__e : I.firstChild, A, i), BC(o, g, i);
}
function to(g, I) {
  xe(g, I, to);
}
function go(g, I, t) {
  var A, e, o, i, C = ee({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : C[o] = void (-7324 * 1 + -8713 + 16037) === I[o] && void (-26 * -375 + 416 * -12 + -793 * 6) !== i ? i[o] : I[o];
  return arguments.length > 65 * 110 + 4206 + -11354 && (C.children = arguments.length > 289 * 3 + 579 * -17 + 2993 * 3 ? og.call(arguments, 1 * -8111 + -3016 + -31 * -359) : t), bt(g.type, C, A || g.key, e || g.ref, null);
}
function nt(g, I) {
  var t = { __c: I = "__cC" + gC++, __: g, Consumer: function(A, e) {
    return A.children(e);
  }, Provider: function(A) {
    var e, o;
    return this.getChildContext || (e = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && e.some(function(C) {
        C.__e = !0, CI(C);
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
og = IC.slice, N = { __e: function(g, I, t, A) {
  for (var e, o, i; I = I.__; ) if ((e = I.__c) && !e.__) try {
    if ((o = e.constructor) && o.getDerivedStateFromError != null && (e.setState(o.getDerivedStateFromError(g)), i = e.__d), e.componentDidCatch != null && (e.componentDidCatch(g, A || {}), i = e.__d), i) return e.__E = e;
  } catch (C) {
    g = C;
  }
  throw g;
} }, AC = 9689 + -1 * 9689, eC = function(g) {
  return g != null && g.constructor == null;
}, SA.prototype.setState = function(g, I) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof g == "function" && (g = g(ee({}, t), this.props)), g && ee(t, g), g != null && this.__v && (I && this._sb.push(I), CI(this));
}, SA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(-1 * 8318 + 2218 + 100 * 61), g && this.__h.push(g), CI(this));
}, SA.prototype.render = LA, De = [], tC = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, II = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, Ug.__r = 2212 + 191 * 43 + -10425, $I = -799 * -10 + -33 * 257 + 491, oI = Yo(!(-2807 + -312 * -9)), iI = Yo(!(-49 * 183 + -38 * -263 + -1027)), gC = -8669 + 1084 * 9 + 1 * -1087;
function Io() {
  return (Io = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = 8812 + -1 * 1909 + -6902; I < arguments.length; I++) {
      var t = arguments[I];
      for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (g[A] = t[A]);
    }
    return g;
  }).apply(this, arguments);
}
var hB = ["context", "children"];
function lB(g) {
  this.getChildContext = function() {
    return g.context;
  };
  var I = g.children, t = function(A, e) {
    if (A == null) return {};
    var o, i, C = {}, n = Object.keys(A);
    for (i = -5979 + -1747 * 1 + 7726; i < n.length; i++) e.indexOf(o = n[i]) >= -4 * 614 + 1578 + -878 * -1 || (C[o] = A[o]);
    return C;
  }(g, hB);
  return go(I, t);
}
function uB() {
  var g = {};
  g.detail = {}, g.bubbles = !(-15528 + -12 * -1294), g.cancelable = !(1 * -6081 + 9530 + -3449);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = lA(lB, Io({}, this._props, { context: I.detail.context }), function t(A, e) {
    if (5468 * -1 + 1 * -1546 + 7017 === A.nodeType) return A.data;
    if (-1 * -1165 + -1 * -4121 + 7 * -755 !== A.nodeType) return null;
    var o = [], i = {}, C = -4153 + -4033 * -1 + -2 * -60, n = A.attributes, B = A.childNodes;
    for (C = n.length; C--; ) n[C].name !== "slot" && (i[n[C].name] = n[C].value, i[QC(n[C].name)] = n[C].value);
    for (C = B.length; C--; ) {
      var a = t(B[C], null), Q = B[C].slot;
      Q ? i[Q] = lA(Uo, { name: Q }, a) : o[C] = a;
    }
    var E = e ? lA(Uo, null, o) : o;
    return lA(e || A.nodeName.toLowerCase(), i, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? to : xe)(this._vdom, this._root);
}
function QC(g) {
  return g.replace(/-(\w)/g, function(I, t) {
    return t ? t.toUpperCase() : "";
  });
}
function fB(g, I, t) {
  if (this._vdom) {
    var A = {};
    A[g] = t = t ?? void (1248 * 5 + 2951 * 2 + -26 * 467), A[QC(g)] = t, this._vdom = go(this._vdom, A), xe(this._vdom, this._root);
  }
}
function DB() {
  xe(this._vdom = null, this._root);
}
function Uo(g, I) {
  var t = this;
  return lA("slot", Io({}, g, { ref: function(A) {
    A ? (t.ref = A, t._listener || (t._listener = function(e) {
      e.stopPropagation(), e.detail.context = I;
    }, A.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function yB(g, I, t, A) {
  function e() {
    var o = Reflect.construct(HTMLElement, [], e);
    return o._vdomComponent = g, o._root = o, o;
  }
  return (e.prototype = Object.create(HTMLElement.prototype)).constructor = e, e.prototype.connectedCallback = uB, e.prototype.attributeChangedCallback = fB, e.prototype.disconnectedCallback = DB, t = t || g.observedAttributes || Object.keys(g.propTypes || {}), e.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(e.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var C = typeof i;
      i != null && C !== "string" && C !== "boolean" && C !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(I, e);
}
var wB = -1874 + -1874 * -1;
function y(g, I, t, A, e, o) {
  I || (I = {});
  var i, C, n = I;
  if ("ref" in n)
    for (C in n = {}, I) C == "ref" ? i = I[C] : n[C] = I[C];
  var B = {};
  B.type = g, B.props = n, B.key = t, B.ref = i, B.__k = null, B.__ = null, B.__b = 0, B.__e = null, B.__d = void (-1 * -6556 + -19 + -6537), B.__c = null, B.constructor = void (-1 * 5128 + -4701 + -9829 * -1), B.__v = --wB, B.__i = -(-1138 * -1 + -380 * 24 + 7983), B.__u = 0, B.__source = e, B.__self = o;
  var a = B;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (-1559 * 5 + -3997 * 1 + 536 * 22) === n[C] && (n[C] = i[C]);
  return N.vnode && N.vnode(a), a;
}
var mA = function() {
  return mA = Object.assign || function(I) {
    for (var t, A = 1, e = arguments.length; A < e; A++) {
      t = arguments[A];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (I[o] = t[o]);
    }
    return I;
  }, mA.apply(this, arguments);
};
function et(g, I, t) {
  if (t || arguments.length === 2) for (var A = 0, e = I.length, o; A < e; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function pB(g) {
  var I = Object.create(null);
  return function(t) {
    return I[t] === void 0 && (I[t] = g(t)), I[t];
  };
}
var mB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, GB = pB(function(g) {
  return mB.test(g) || g.charCodeAt(-3683 + -903 * -3 + 974 * 1) === -3023 * -1 + -273 + -2639 * 1 && g.charCodeAt(4839 + -4229 * 2 + 3620) === 110 && g.charCodeAt(9485 + 7594 * 1 + -1 * 17077) < 1 * -2098 + -1130 + -1 * -3319;
}), Ee, P, Y0, Ho, tt = 5555 * -1 + 82 * -60 + -1 * -10475, aC = [], _ = N, Ko = _.__b, Oo = _.__r, To = _.diffed, qo = _.__c, Zo = _.unmount, Po = _.__;
function Bt(g, I) {
  _.__h && _.__h(P, g, tt || I), tt = -60 * -158 + -9146 + 1 * -334;
  var t = {};
  t.__ = [], t.__h = [];
  var A = P.__H || (P.__H = t);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function nA(g) {
  return tt = -1723 * -1 + 6273 + -7995, oo(EC, g);
}
function oo(g, I, t) {
  var A = Bt(Ee++, 2);
  if (A.t = g, !A.__c && (A.__ = [t ? t(I) : EC(void (-373 * -2 + 7800 + -8546), I), function(C) {
    var n = A.__N ? A.__N[0] : A.__[0], B = A.t(n, C);
    n !== B && (A.__N = [B, A.__[-1 * -3543 + 5892 + 53 * -178]], A.__c.setState({}));
  }], A.__c = P, !P.u)) {
    var e = function(C, n, B) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (a.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, C, n, B);
      var Q = !(-4366 + 2881 * -2 + 10129);
      return a.forEach(function(E) {
        if (E.__N) {
          var x = E.__[0];
          E.__ = E.__N, E.__N = void 0, x !== E.__[0] && (Q = !0);
        }
      }), !(!Q && A.__c.props === C) && (!o || o.call(this, C, n, B));
    };
    P.u = !(4767 * -1 + -7592 + 17 * 727);
    var o = P.shouldComponentUpdate, i = P.componentWillUpdate;
    P.componentWillUpdate = function(C, n, B) {
      if (this.__e) {
        var a = o;
        o = void (-29 * -139 + -1 * -3847 + -3 * 2626), e(C, n, B), o = a;
      }
      i && i.call(this, C, n, B);
    }, P.shouldComponentUpdate = e;
  }
  return A.__N || A.__;
}
function K(g, I) {
  var t = Bt(Ee++, 3);
  !_.__s && io(t.__H, I) && (t.__ = g, t.i = I, P.__H.__h.push(t));
}
function Qt(g, I) {
  var t = Bt(Ee++, 4);
  !_.__s && io(t.__H, I) && (t.__ = g, t.i = I, P.__h.push(t));
}
function AA(g) {
  return tt = 5, uA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function rC(g, I, t) {
  tt = 6, Qt(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void (-6089 * -1 + -6 * -293 + -413 * 19);
  }, t == null ? t : t.concat(g));
}
function uA(g, I) {
  var t = Bt(Ee++, 7);
  return io(t.__H, I) && (t.__ = g(), t.__H = I, t.__h = g), t.__;
}
function GA(g, I) {
  return tt = 1368 + -3254 * -1 + -4614, uA(function() {
    return g;
  }, I);
}
function se(g) {
  var I = P.context[g.__c], t = Bt(Ee++, -1277 * -7 + -7606 + -331 * 4);
  return t.c = g, I ? (t.__ == null && (t.__ = !(-5165 + -5165 * -1), I.sub(P)), I.props.value) : g.__;
}
function Hg(g, I) {
  _.useDebugValue && _.useDebugValue(I ? I(g) : g);
}
function xC() {
  var g = Bt(Ee++, 11);
  if (!g.__) {
    for (var I = P.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var t = I.__m || (I.__m = [12961 + -1 * 12961, -2019 * -3 + -1848 + -4209]);
    g.__ = "P" + t[-41 * 211 + 173 * 27 + -995 * -4] + "-" + t[-7670 + -5693 * 1 + 6682 * 2]++;
  }
  return g.__;
}
function kB() {
  for (var g; g = aC.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach(yg), g.__H.__h.forEach(BI), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], _.__e(I, g.__v);
  }
}
_.__b = function(g) {
  P = null, Ko && Ko(g);
}, _.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), Po && Po(g, I);
}, _.__r = function(g) {
  Oo && Oo(g), Ee = -28 * -211 + -3562 + -2346;
  var I = (P = g.__c).__H;
  I && (Y0 === P ? (I.__h = [], P.__h = [], I.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-3 * -2467 + -6608 + 61 * -13);
  })) : (I.__h.forEach(yg), I.__h.forEach(BI), I.__h = [], Ee = 1 * 5827 + -2480 + -1 * 3347)), Y0 = P;
}, _.diffed = function(g) {
  To && To(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (-2546 + 3 * 3091 + -6726 !== aC.push(I) && Ho === _.requestAnimationFrame || ((Ho = _.requestAnimationFrame) || bB)(kB)), I.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), Y0 = P = null;
}, _.__c = function(g, I) {
  I.some(function(t) {
    try {
      t.__h.forEach(yg), t.__h = t.__h.filter(function(A) {
        return !A.__ || BI(A);
      });
    } catch (A) {
      I.some(function(e) {
        e.__h && (e.__h = []);
      }), I = [], _.__e(A, t.__v);
    }
  }), qo && qo(g, I);
}, _.unmount = function(g) {
  Zo && Zo(g);
  var I, t = g.__c;
  t && t.__H && (t.__H.__.forEach(function(A) {
    try {
      yg(A);
    } catch (e) {
      I = e;
    }
  }), t.__H = void 0, I && _.__e(I, t.__v));
};
var jo = typeof requestAnimationFrame == "function";
function bB(g) {
  var I, t = function() {
    clearTimeout(A), jo && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(t, 100);
  jo && (I = requestAnimationFrame(t));
}
function yg(g) {
  var I = P, t = g.__c;
  typeof t == "function" && (g.__c = void (2 * 3117 + 9 * 228 + 6 * -1381), t()), P = I;
}
function BI(g) {
  var I = P;
  g.__c = g.__(), P = I;
}
function io(g, I) {
  return !g || g.length !== I.length || I.some(function(t, A) {
    return t !== g[A];
  });
}
function EC(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function sC(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function QI(g, I) {
  for (var t in g) if (t !== "__source" && !(t in I)) return !(-5064 + -236 * -4 + -515 * -8);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(-604 * 1 + 48 * -77 + 4300);
  return !1;
}
function aI(g, I) {
  this.props = g, this.context = I;
}
function NB(g, I) {
  function t(e) {
    var o = this.props.ref, i = o == e.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, e) || !i : QI(this.props, e);
  }
  function A(e) {
    return this.shouldComponentUpdate = t, lA(g, e);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(-3384 + 193 * 47 + -5687), A.__f = !0, A;
}
(aI.prototype = new SA()).isPureReactComponent = !(8016 + 155 * 10 + -9566), aI.prototype.shouldComponentUpdate = function(g, I) {
  return QI(this.props, g) || QI(this.state, I);
};
var Vo = N.__b;
N.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), Vo && Vo(g);
};
var FB = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function cC(g) {
  function I(t) {
    var A = sC({}, t);
    return delete A.ref, g(A, t.ref || null);
  }
  return I.$$typeof = FB, I.render = I, I.prototype.isReactComponent = I.__f = !(-7148 + 1 * -8663 + 97 * 163), I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var _o = function(g, I) {
  return g == null ? null : te(te(g).map(I));
}, RB = { map: _o, forEach: _o, count: function(g) {
  return g ? te(g).length : 19 * 214 + -887 * 3 + 281 * -5;
}, only: function(g) {
  var I = te(g);
  if (4083 + 1 * 4924 + -3 * 3002 !== I.length) throw "Children.only";
  return I[4 * 1817 + -19 * -336 + -2 * 6826];
}, toArray: te }, SB = N.__e;
N.__e = function(g, I, t, A) {
  if (g.then) {
    for (var e, o = I; o = o.__; ) if ((e = o.__c) && e.__c) return I.__e == null && (I.__e = t.__e, I.__k = t.__k), e.__c(g, I);
  }
  SB(g, I, t, A);
};
var Xo = N.unmount;
function dC(g, I, t) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = sC({}, g)).__c != null && (g.__c.__P === t && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return dC(A, I, t);
  })), g;
}
function hC(g, I, t) {
  return g && t && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return hC(A, I, t);
  }), g.__c && g.__c.__P === I && (g.__e && t.appendChild(g.__e), g.__c.__e = !(-971 + -419 * 3 + -557 * -4), g.__c.__P = t)), g;
}
function wg() {
  this.__u = 54 * -1 + -31 * -185 + -13 * 437, this.t = null, this.__b = null;
}
function lC(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function MB(g) {
  var I, t, A;
  function e(o) {
    if (I || (I = g()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!t) throw I;
    return lA(t, o);
  }
  return e.displayName = "Lazy", e.__f = !(199 * -9 + -3177 + 4968), e;
}
function Dt() {
  this.u = null, this.o = null;
}
N.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && 3 * 109 + 8516 + 99 * -89 & g.__u && (g.type = null), Xo && Xo(g);
}, (wg.prototype = new SA()).__c = function(g, I) {
  var t = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(t);
  var e = lC(A.__v), o = !(-734 * 2 + 3158 * 3 + -8005), i = function() {
    o || (o = !(-1 * 8017 + 5 * 1674 + -353), t.__R = null, e ? e(C) : C());
  };
  t.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var n = A.state.__a;
        A.__v.__k[-5199 * -1 + -511 + 293 * -16] = hC(n, n.__c.__P, n.__c.__O);
      }
      var B;
      for (A.setState({ __a: A.__b = null }); B = A.t.pop(); ) B.forceUpdate();
    }
  };
  A.__u++ || 1 * -6256 + -8850 + -6 * -2523 & I.__u || A.setState({ __a: A.__b = A.__v.__k[1625 * -4 + -64 * -8 + -1497 * -4] }), g.then(i, i);
}, wg.prototype.componentWillUnmount = function() {
  this.t = [];
}, wg.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), A = this.__v.__k[9236 + -9236 * 1].__c;
      this.__v.__k[-3147 + -11 * 680 + 10627] = dC(this.__b, t, A.__O = A.__P);
    }
    this.__b = null;
  }
  var e = I.__a && lA(LA, null, g.fallback);
  return e && (e.__u &= -(-13 * -53 + 1 * -9961 + 9305)), [lA(LA, null, I.__a ? null : g.children), e];
};
var zo = function(g, I, t) {
  if (++t[9 * 1081 + 5513 * -1 + -4215] === t[160 * 3 + -4534 + 4054 * 1] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[116 * 80 + -4 * -23 + -9372] !== "t" || !g.o.size)) for (t = g.u; t; ) {
    for (; t.length > 178 * -49 + 8899 + -3 * 58; ) t.pop()();
    if (t[-26 * -12 + -1 * 2321 + -1005 * -2] < t[-3035 + -607 * -5]) break;
    g.u = t = t[3844 + -439 * -19 + -12183 * 1];
  }
};
function LB(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function vB(g) {
  var I = this, t = g.i;
  I.componentWillUnmount = function() {
    xe(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== t && I.componentWillUnmount(), I.l || (I.i = t, I.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, e) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> 358 * -9 + -3877 + -50 * -142, 13 * -403 + 7662 + -2422), I.i.removeChild(A);
  } }), xe(lA(LB, { context: I.context }, g.__v), I.l);
}
function JB(g, I) {
  var t = {};
  t.__v = g, t.i = I;
  var A = lA(vB, t);
  return A.containerInfo = I, A;
}
(Dt.prototype = new SA()).__a = function(g) {
  var I = this, t = lC(I.__v), A = I.o.get(g);
  return A[12 * -283 + -3 * -3275 + 3 * -2143]++, function(e) {
    var o = function() {
      I.props.revealOrder ? (A.push(e), zo(I, g, A)) : e();
    };
    t ? t(o) : o();
  };
}, Dt.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = te(g.children);
  g.revealOrder && g.revealOrder[-8044 + -1 * -628 + 7416] === "b" && I.reverse();
  for (var t = I.length; t--; ) this.o.set(I[t], this.u = [1, 5523 + 548 * -1 + -4975, this.u]);
  return g.children;
}, Dt.prototype.componentDidUpdate = Dt.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, t) {
    zo(g, t, I);
  });
};
var uC = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 74421 * -1 + 1727 * 48 + 51628, WB = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, YB = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, UB = /[A-Z0-9]/g, HB = typeof document < "u", KB = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function OB(g, I, t) {
  return I.__k == null && (I.textContent = ""), xe(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
function TB(g, I, t) {
  return to(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
SA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(SA.prototype, g, { configurable: !(-8294 + -1 * -2906 + 5388), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var t = {};
    t.configurable = !(-3802 * 1 + -584 * 12 + 10810 * 1), t.writable = !(-48 * -197 + 9414 + -18870), t.value = I, Object.defineProperty(this, g, t);
  } });
});
var $o = N.event;
function qB() {
}
function ZB() {
  return this.cancelBubble;
}
function PB() {
  return this.defaultPrevented;
}
N.event = function(g) {
  return $o && (g = $o(g)), g.persist = qB, g.isPropagationStopped = ZB, g.isDefaultPrevented = PB, g.nativeEvent = g;
};
var pg = {};
pg.enumerable = !(-1184 * -4 + -7663 + -488 * -6), pg.configurable = !(-7546 * -1 + 2815 + 10361 * -1), pg.get = function() {
  return this.class;
};
var Co, jB = pg, Ai = N.vnode;
N.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var t = I.props, A = I.type, e = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || HB && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-1 * -4729 + -1711 + -3018) === i ? i = "" : C === "translate" && i === "no" ? i = !(361 * -19 + 2 * 193 + -26 * -249) : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || KB(t.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : YB.test(o) ? o = C : A.indexOf("-") === -1 && WB.test(o) ? o = o.replace(UB, "-$&").toLowerCase() : i === null && (i = void (-816 + -19 * -437 + -7487)) : C = o = "oninput", C === "oninput" && e[o = C] && (o = "oninputCapture"), e[o] = i;
      }
    }
    A == "select" && e.multiple && Array.isArray(e.value) && (e.value = te(t.children).forEach(function(n) {
      n.props.selected = -(-693 * -5 + 5 * -177 + -2579) != e.value.indexOf(n.props.value);
    })), A == "select" && e.defaultValue != null && (e.value = te(t.children).forEach(function(n) {
      n.props.selected = e.multiple ? -(-7223 + -2529 * -1 + 1565 * 3) != e.defaultValue.indexOf(n.props.value) : e.defaultValue == n.props.value;
    })), t.class && !t.className ? (e.class = t.class, Object.defineProperty(e, "className", jB)) : (t.className && !t.class || t.class && t.className) && (e.class = e.className = t.className), I.props = e;
  }(g), g.$$typeof = uC, Ai && Ai(g);
};
var ei = N.__r;
N.__r = function(g) {
  ei && ei(g), Co = g.__c;
};
var ti = N.diffed;
N.diffed = function(g) {
  ti && ti(g);
  var I = g.props, t = g.__e;
  t != null && g.type === "textarea" && "value" in I && I.value !== t.value && (t.value = I.value == null ? "" : I.value), Co = null;
};
var BA = {};
BA.readContext = function(g) {
  return Co.__n[g.__c].props.value;
}, BA.useCallback = GA, BA.useContext = se, BA.useDebugValue = Hg, BA.useDeferredValue = wC, BA.useEffect = K, BA.useId = xC, BA.useImperativeHandle = rC, BA.useInsertionEffect = mC, BA.useLayoutEffect = Qt, BA.useMemo = uA, BA.useReducer = oo, BA.useRef = AA, BA.useState = nA, BA.useSyncExternalStore = GC, BA.useTransition = pC;
var fC = {};
fC.current = BA;
var DC = {};
DC.ReactCurrentDispatcher = fC;
var VB = DC;
function _B(g) {
  return lA.bind(null, g);
}
function D0(g) {
  return !!g && g.$$typeof === uC;
}
function XB(g) {
  return D0(g) && g.type === LA;
}
function zB(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function $B(g) {
  return D0(g) ? go.apply(null, arguments) : g;
}
function AQ(g) {
  return !!g.__k && (xe(null, g), !(2099 * 1 + 122 * -46 + 3513));
}
function eQ(g) {
  return g && (g.base || 8891 + -1193 * -8 + -18434 === g.nodeType && g) || null;
}
var tQ = function(g, I) {
  return g(I);
}, gQ = function(g, I) {
  return g(I);
}, IQ = LA;
function yC(g) {
  g();
}
function wC(g) {
  return g;
}
function pC() {
  return [!(-34 * 224 + -3188 * -1 + 4429), yC];
}
var mC = Qt, oQ = D0;
function GC(g, I) {
  var t = I(), A = nA({ h: { __: t, v: I } }), e = A[3828 + 12 * -319].h, o = A[1906 + 1 * -1905];
  return Qt(function() {
    e.__ = t, e.v = I, U0(e) && o({ h: e });
  }, [g, t, I]), K(function() {
    return U0(e) && o({ h: e }), g(function() {
      U0(e) && o({ h: e });
    });
  }, [g]), t;
}
function U0(g) {
  var I, t, A = g.v, e = g.__;
  try {
    var o = A();
    return !((I = e) === (t = o) && (-131 * 37 + -7795 + 12642 !== I || (-173 * -18 + 8754 + -11867) / I == 1 / t) || I != I && t != t);
  } catch {
    return !(-8 * 731 + -4 * 842 + 4608 * 2);
  }
}
var k = {};
k.useState = nA, k.useId = xC, k.useReducer = oo, k.useEffect = K, k.useLayoutEffect = Qt, k.useInsertionEffect = mC, k.useTransition = pC, k.useDeferredValue = wC, k.useSyncExternalStore = GC, k.startTransition = yC, k.useRef = AA, k.useImperativeHandle = rC, k.useMemo = uA, k.useCallback = GA, k.useContext = se, k.useDebugValue = Hg, k.version = "17.0.2", k.Children = RB, k.render = OB, k.hydrate = TB, k.unmountComponentAtNode = AQ, k.createPortal = JB, k.createElement = lA, k.createContext = nt, k.createFactory = _B, k.cloneElement = $B, k.createRef = xB, k.Fragment = LA, k.isValidElement = D0, k.isElement = oQ, k.isFragment = XB, k.isMemo = zB, k.findDOMNode = eQ, k.Component = SA, k.PureComponent = aI, k.memo = NB, k.forwardRef = cC, k.flushSync = gQ, k.unstable_batchedUpdates = tQ, k.StrictMode = IQ, k.Suspense = wg, k.SuspenseList = Dt, k.lazy = MB, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VB;
var Le = k, iQ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function CQ(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function nQ(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function BQ(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") && Object.keys(g).length === 1 ? g.default : g;
}
function QQ(g) {
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
const aQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: iQ,
  getAugmentedNamespace: QQ,
  getDefaultExportFromCjs: CQ,
  getDefaultExportFromNamespaceIfNotNamed: BQ,
  getDefaultExportFromNamespaceIfPresent: nQ
}, Symbol.toStringTag, { value: "Module" }));
var rQ = function(I, t, A, e) {
  var o = A ? A.call(e, I, t) : void 0;
  if (o !== void (53 * -35 + -1 * -4363 + -836 * 3)) return !!o;
  if (I === t) return !0;
  if (typeof I != "object" || !I || typeof t != "object" || !t) return !1;
  var i = Object.keys(I), C = Object.keys(t);
  if (i.length !== C.length) return !1;
  for (var n = Object.prototype.hasOwnProperty.bind(t), B = 0; B < i.length; B++) {
    var a = i[B];
    if (!n(a)) return !1;
    var Q = I[a], E = t[a];
    if (o = A ? A.call(e, Q, E, a) : void (-1 * 2287 + -3 * -2048 + -19 * 203), o === !1 || o === void (18133 + -1 * 18133) && Q !== E) return !1;
  }
  return !0;
};
const xQ = aQ.getDefaultExportFromCjs(rQ);
var Z = "-ms-", Nt = "-moz-", Y = "-webkit-", kC = "comm", y0 = "rule", no = "decl", EQ = "@import", bC = "@keyframes", sQ = "@layer", NC = Math.abs, Bo = String.fromCharCode, rI = Object.assign;
function cQ(g, I) {
  return iA(g, 2275 + -5 * -581 + 1036 * -5) ^ 45 ? (((I << 1 * 4561 + 8802 + -13361 * 1 ^ iA(g, 0)) << 1 * 5981 + -2241 + 14 * -267 ^ iA(g, 2086 * -1 + -64 * 141 + 11111)) << -2135 * 1 + 2829 + 2 * -346 ^ iA(g, 28 * -266 + -7495 + 14945)) << -1 * 1738 + -1290 + 15 * 202 ^ iA(g, 3) : 4146 + 8141 * 1 + -1117 * 11;
}
function FC(g) {
  return g.trim();
}
function zA(g, I) {
  return (g = I.exec(g)) ? g[0] : g;
}
function F(g, I, t) {
  return g.replace(I, t);
}
function mg(g, I, t) {
  return g.indexOf(I, t);
}
function iA(g, I) {
  return g.charCodeAt(I) | 4429 + 2 * -2908 + -1 * -1387;
}
function gt(g, I, t) {
  return g.slice(I, t);
}
function qA(g) {
  return g.length;
}
function RC(g) {
  return g.length;
}
function yt(g, I) {
  return I.push(g), g;
}
function dQ(g, I) {
  return g.map(I).join("");
}
function gi(g, I) {
  return g.filter(function(t) {
    return !zA(t, I);
  });
}
var w0 = 1 * -2134 + 5040 + -2905 * 1, It = 9945 * -1 + 7 * 501 + 6439, SC = 5214 + -6 * 869, vA = -7770 + 349 * 7 + 1 * 5327, tA = 2995 + -14 * 431 + 3039, at = "";
function p0(g, I, t, A, e, o, i, C) {
  var n = {};
  return n.value = g, n.root = I, n.parent = t, n.type = A, n.props = e, n.children = o, n.line = w0, n.column = It, n.length = i, n.return = "", n.siblings = C, n;
}
function Ce(g, I) {
  return rI(p0("", null, null, "", null, null, 126 * 42 + 4684 + 2494 * -4, g.siblings), g, { length: -g.length }, I);
}
function Ke(g) {
  for (; g.root; ) g = Ce(g.root, { children: [g] });
  yt(g, g.siblings);
}
function hQ() {
  return tA;
}
function lQ() {
  return tA = vA > 3 * -2237 + 5761 + 950 * 1 ? iA(at, --vA) : 9690 + -5 * 527 + 1 * -7055, It--, tA === -9444 + -1 * 6529 + 15983 && (It = 16355 + 629 * -26, w0--), tA;
}
function UA() {
  return tA = vA < SC ? iA(at, vA++) : 1 * 2815 + -2879 + 64, It++, tA === -19 * -51 + -6354 + -415 * -13 && (It = -31 * 5 + 468 + -4 * 78, w0++), tA;
}
function Re() {
  return iA(at, vA);
}
function Gg() {
  return vA;
}
function m0(g, I) {
  return gt(at, g, I);
}
function xI(g) {
  switch (g) {
    case 0:
    case 10575 + 5283 * -2:
    case 3317 * -1 + 37 * -101 + -1766 * -4:
    case 13:
    case 32:
      return 5;
    case 6496 + 1 * 3252 + 145 * -67:
    case 11 * -284 + -2089 * 1 + -6 * -876:
    case 90 * -67 + 6745 + -671:
    case -1 * -98 + -2 * -605 + 1261 * -1:
    case 5172 + 2 * 4363 + -13836:
    case -6175 + 6239 * 1:
    case 2131 * -2 + 163 * 38 + 42 * -43:
    case 4549 + -9137 * 1 + 4647:
    case -7414 + -7537 * -1:
    case -827 * 2 + 1013 + 766:
      return 2053 * -1 + 45 + 4 * 503;
    case 923 * 6 + -10 * 818 + 2700:
      return -8 * 216 + -1 * -2999 + -1268;
    case 8723 + -1 * 2327 + 3181 * -2:
    case 4122 + 1 * 2791 + -6874:
    case 40:
    case -2615 * -1 + -2170 * -1 + -4694:
      return -1637 * -4 + -1 * 2093 + -4453;
    case -5293 + -5587 * 1 + -10921 * -1:
    case 135 + 9194 * 1 + -9236 * 1:
      return -4919 + -492 * -10;
  }
  return -8482 + -1335 * -5 + 1807;
}
function uQ(g) {
  return w0 = It = 12 * 319 + 5218 + -9045, SC = qA(at = g), vA = 1978 * 4 + -6516 + 4 * -349, [];
}
function fQ(g) {
  return at = "", g;
}
function H0(g) {
  return FC(m0(vA - (-11763 + 4 * 2941), EI(g === -5951 + -38 * -159 ? g + (-277 * 13 + 11 + 3592) : g === -2 * 619 + -4 * 1747 + -4133 * -2 ? g + (2113 * -2 + -9159 + 6 * 2231) : g)));
}
function DQ(g) {
  for (; (tA = Re()) && tA < 5893 * 1 + -5337 + 523 * -1; ) UA();
  return xI(g) > -6089 * -1 + -1 * 9543 + 3456 || xI(tA) > 8914 + 2777 * 3 + -74 * 233 ? "" : " ";
}
function yQ(g, I) {
  for (; --I && UA() && !(tA < 331 * -1 + -10 * -178 + -1401 || tA > -1658 + -5 * -352 || tA > -3370 + -89 * -51 + -1112 && tA < -3839 + -8 * -488 || tA > 70 && tA < 8215 + 18 * -478 + 486); ) ;
  return m0(g, Gg() + (I < 6 && Re() == -115 * -1 + 2085 * 1 + -271 * 8 && UA() == 5279 + -1749 * 3));
}
function EI(g) {
  for (; UA(); ) switch (tA) {
    case g:
      return vA;
    case 34:
    case 5558 + 22 * 199 + -3299 * 3:
      g !== -2164 * 4 + -2 * 2091 + 12872 && g !== -4361 * -1 + 16 * -5 + -101 * 42 && EI(tA);
      break;
    case -9666 + -4853 * -2:
      g === -1 * -8878 + -3017 + 1940 * -3 && EI(g);
      break;
    case 197 * 35 + -2 * 2217 + -2369:
      UA();
      break;
  }
  return vA;
}
function wQ(g, I) {
  for (; UA() && g + tA !== -7039 * -1 + 41 * 241 + -16873 + 10; ) if (g + tA === 42 + (1034 + -2 * 496) && Re() === 47) break;
  return "/*" + m0(I, vA - (-2348 + 9 * 261)) + "*" + Bo(g === -6519 + 717 * -3 + 379 * 23 ? g : UA());
}
function pQ(g) {
  for (; !xI(Re()); ) UA();
  return m0(g, vA);
}
function mQ(g) {
  return fQ(kg("", null, null, null, [""], g = uQ(g), -67 * -47 + -25 * -1 + -3174, [541 * 13 + -4861 + -543 * 4], g));
}
function kg(g, I, t, A, e, o, i, C, n) {
  for (var B = 0, a = 1 * -2851 + 1053 * 1 + -29 * -62, Q = i, E = -3191 + 101 * -94 + -2537 * -5, x = -4130 + 5675 * 1 + -1545, s = -5868 + 489 * 12, d = -4 * -1075 + -5148 + -849 * -1, h = 6324 + -1 * 2567 + -3756, r = 1 * 9897 + -438 + 1 * -9458, u = -8195 * -1 + 57 * 78 + -12641, p = "", b = e, v = o, S = A, w = p; h; ) switch (s = u, u = UA()) {
    case 22 * 176 + -5428 * -1 + -9260:
      if (s != 8841 + 2911 * -3 && iA(w, Q - (-1 * -9861 + 9169 + -19029 * 1)) == 3 * -2172 + 9983 + -487 * 7) {
        mg(w += F(H0(u), "&", "&\f"), "&\f", NC(B ? C[B - 1] : 6 * 759 + -5699 * -1 + 10253 * -1)) != -(3999 * 1 + 687 * -1 + -3311) && (r = -(4723 + -8214 * 1 + -18 * -194));
        break;
      }
    case 126 * -24 + -6177 + 9235:
    case 354 + 7 * -45:
    case 91:
      w += H0(u);
      break;
    case -491 * 17 + 3064 + 21 * 252:
    case 4974 + -4358 * -2 + 20 * -684:
    case 323 * -6 + -7633 * 1 + 2 * 4792:
    case 3105 + 4073 * 1 + -7146:
      w += DQ(s);
      break;
    case 755 * -7 + -5925 + 11302:
      w += yQ(Gg() - (3339 + 12 * -257 + -254), 127 * -55 + -6553 + 13545);
      continue;
    case 5305 + 2 * -2629:
      switch (Re()) {
        case 6411 + -5 * -1427 + -13504:
        case 10705 + -5329 * 2:
          yt(GQ(wQ(UA(), Gg()), I, t, n), n);
          break;
        default:
          w += "/";
      }
      break;
    case (1153 + 1789 * -4 + 6126) * d:
      C[B++] = qA(w) * r;
    case (2 * -4747 + -5755 + 15374) * d:
    case 809 + -15 * 50:
    case -3203 * -3 + 701 * 4 + -1 * 12413:
      switch (u) {
        case 4 * 2317 + 170 + -9438:
        case 221 * -31 + 830 + -3073 * -2:
          h = -5561 + -1 * -1065 + -2248 * -2;
        case -6112 + -1643 * 1 + 7814 + a:
          r == -(-2094 + -6346 * 1 + 23 * 367) && (w = F(w, /\f/g, "")), x > -5849 * 1 + 4035 + 1814 && qA(w) - Q && yt(x > -14015 + -1277 * -11 ? oi(w + ";", A, t, Q - (-11 * -831 + 8751 + -1 * 17891), n) : oi(F(w, " ", "") + ";", A, t, Q - (16280 + 2713 * -6), n), n);
          break;
        case 59:
          w += ";";
        default:
          if (yt(S = Ii(w, I, t, B, a, e, C, p, b = [], v = [], Q, o), o), u === -8209 * 1 + 1 * -1673 + -23 * -435)
            if (a === 0) kg(w, I, S, S, b, o, Q, C, v);
            else switch (E === 222 * 10 + 1199 * -5 + 3874 && iA(w, 154 * 30 + 66 + -4683) === -2077 + 556 * 1 + -7 * -233 ? -125 + -33 * -231 + 1 * -7398 : E) {
              case -105 * 5 + 1402 + 111 * -7:
              case -19 * -484 + 2311 * 1 + 1 * -11399:
              case 4561 + -742 * 6:
              case 3930 + -3107 * -1 + -6922:
                kg(g, S, S, A && yt(Ii(g, S, S, -37 * -113 + 1942 * -4 + 3587, 252 * -33 + 1 * 7459 + -857 * -1, e, C, p, e, b = [], Q, v), v), e, v, Q, C, A ? b : v);
                break;
              default:
                kg(w, S, S, S, [""], v, 2379 + -1993 * 2 + 1607, C, v);
            }
      }
      B = a = x = -50 * -38 + -2 * -1248 + -28 * 157, d = r = -1492 + 3858 * -1 + 1 * 5351, p = w = "", Q = i;
      break;
    case -7907 + 313 * 20 + 1705:
      Q = -193 * -14 + 2314 + -1 * 5015 + qA(w), x = s;
    default:
      if (d < 2522 * 3 + -863 * 1 + -6702) {
        if (u == 123) --d;
        else if (u == -1 * -9283 + 20 * 110 + -11358 && d++ == 1 * 6461 + 4296 + 10757 * -1 && lQ() == -5358 + -3 * 1779 + 2164 * 5) continue;
      }
      switch (w += Bo(u), u * d) {
        case 6266 + 31 * 134 + -10382:
          r = a > -3985 * -1 + 9090 + 13075 * -1 ? 5501 * 1 + 2671 * -1 + -69 * 41 : (w += "\f", -(-9 * -459 + -41 * -123 + -1 * 9173));
          break;
        case 853 * 1 + -9 * 787 + 6274 * 1:
          C[B++] = (qA(w) - (1 * -3051 + 5035 + -3 * 661)) * r, r = -2 * 3019 + -6146 + -1 * -12185;
          break;
        case 64:
          Re() === -1 * -8579 + 39 * -81 + -5375 && (w += H0(UA())), E = Re(), a = Q = qA(p = w += pQ(Gg())), u++;
          break;
        case 3 * -1967 + -3725 + -9671 * -1:
          s === -8 * 146 + -39 * 62 + 3631 && qA(w) == -9697 * 1 + -439 + -5069 * -2 && (d = -2 * 52 + 23 * -149 + -3 * -1177);
      }
  }
  return o;
}
function Ii(g, I, t, A, e, o, i, C, n, B, a, Q) {
  for (var E = e - 1, x = e === 0 ? o : [""], s = RC(x), d = -4343 + -2353 * -2 + -363, h = 106 * -11 + 8859 + -7693, r = 7734 + -86 * 46 + -3778; d < A; ++d) for (var u = 10256 + -1282 * 8, p = gt(g, E + (1157 * 7 + 7985 + -16083 * 1), E = NC(h = i[d])), b = g; u < s; ++u) (b = FC(h > 10 * 96 + 8647 + -9607 * 1 ? x[u] + " " + p : F(p, /&\f/g, x[u]))) && (n[r++] = b);
  return p0(g, I, t, e === -6901 + 532 * 4 + 4773 ? y0 : C, n, B, a, Q);
}
function GQ(g, I, t, A) {
  return p0(g, I, t, kC, Bo(hQ()), gt(g, 2902 + 12 * 521 + -9152, -(1 * 7817 + -9638 + 1823)), -1 * 4543 + 1516 + 3027, A);
}
function oi(g, I, t, A, e) {
  return p0(g, I, t, no, gt(g, -11501 + -11501 * -1, A), gt(g, A + 1, -1), A, e);
}
function MC(g, I, t) {
  switch (cQ(g, I)) {
    case 5392 + 8 * -292 + -2047 * -1:
      return Y + "print-" + g + g;
    case -5834 * 1 + 2616 + 8955:
    case 573 * 4 + 2 * -804 + 3517:
    case -2305 + -606 * -11 + -1184:
    case -8546 + 363 * 33:
    case -2412 + 1 * -6038 + 10091:
    case -4269 + 1 * 8726:
    case 2921:
    case -14941 + -1 * -20513:
    case 1701 + -587 * 11 + 11112:
    case -13117 + 67 * 283:
    case 3191:
    case 2 * -3942 + 69 * -75 + 19704:
    case -6152 * -1 + -7765 + 4618:
    case 5452 + -482 * 26 + -13471 * -1:
    case -4995 + 2 * 5506 + 6 * -23:
    case -1 * 5801 + 27 * 179 + -507 * -13:
    case -11652 + -1710 * 5 + 8779 * 3:
    case -7103 * -1 + 2323 + -4827:
    case 1 * 3561 + 817 * -1 + 2111:
    case 1223 * -6 + -957 + 12510:
    case 6389:
    case 176 * 37 + -5105 + -1 * -3702:
    case -6237 + 865 * 6 + -2 * -3206:
    case 10531 + 491 * -10:
    case 1364 * -5 + 1294 + 9355:
      return Y + g + g;
    case 4789:
      return Nt + g + g;
    case 6 * 712 + -9210 + 10287:
    case 4246:
    case 9 * -289 + -3205 * -1 + 4206:
    case -7816 + 231 * 64:
    case -1282 + -1 * -293 + -1 * -3745:
      return Y + g + Nt + g + Z + g + g;
    case 5936:
      switch (iA(g, I + (-1 * -9934 + 7890 + 379 * -47))) {
        case -8 * -919 + -8320 + -2 * -541:
          return Y + g + Z + F(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 571 * -5 + 1 * -9437 + 20 * 620:
          return Y + g + Z + F(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case 45:
          return Y + g + Z + F(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case -4 * -2192 + -897 * 3 + 751:
    case -8775 + -226 * -17 + 9201:
    case 8451 + 146 * -38:
      return Y + g + Z + g + g;
    case 426 * 3 + -10123 * -1 + -5236:
      return Y + g + Z + "flex-" + g + g;
    case -393 * -5 + 5370 * -1 + 537 * 16:
      return Y + g + F(g, /(\w+).+(:[^]+)/, Y + "box-$1$2" + Z + "flex-$1$2") + g;
    case -9529 * -1 + -1563 * -6 + -13464:
      return Y + g + Z + "flex-item-" + F(g, /flex-|-self/g, "") + (zA(g, /flex-|baseline/) ? "" : Z + "grid-row-" + F(g, /flex-|-self/g, "")) + g;
    case 4675:
      return Y + g + Z + "flex-line-pack" + F(g, /align-content|flex-|-self/g, "") + g;
    case 1280 + -44 * -97:
      return Y + g + Z + F(g, "shrink", "negative") + g;
    case 5292:
      return Y + g + Z + F(g, "basis", "preferred-size") + g;
    case 4855 * 2 + 6551 + -10201 * 1:
      return Y + "box-" + F(g, "-grow", "") + Y + g + Z + F(g, "grow", "positive") + g;
    case 2 * -3482 + -5510 + 4257 * 4:
      return Y + F(g, /([^-])(transform)/g, "$1" + Y + "$2") + g;
    case 1 * -8042 + 1 * 1675 + -2 * -6277:
      return F(F(F(g, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), g, "") + g;
    case 2416 * -4 + 9064 + 6095:
    case -281 * 18 + 2026 + 6991:
      return F(g, /(image-set\([^]*)/, Y + "$1$`$1");
    case -1514 + 7 * 926:
      return F(F(g, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + Z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + g + g;
    case 15 * -402 + -7797 + -2003 * -9:
      if (!zA(g, /flex-|baseline/)) return Z + "grid-column-align" + gt(g, I) + g;
      break;
    case -4723 + -55 * 23 + 8580:
    case 173 * -37 + 1 * -614 + 10375:
      return Z + F(g, "template-", "") + g;
    case 4384:
    case -7757 + 1228 * 4 + 6461:
      return t && t.some(function(A, e) {
        return I = e, zA(A.props, /grid-\w+-end/);
      }) ? ~mg(g + (t = t[I].value), "span", 4 * -2079 + 9093 + -3 * 259) ? g : Z + F(g, "-start", "") + g + Z + "grid-row-span:" + (~mg(t, "span", 68 * -1 + -15 * -546 + 2 * -4061) ? zA(t, /\d+/) : +zA(t, /\d+/) - +zA(g, /\d+/)) + ";" : Z + F(g, "-start", "") + g;
    case 76 * 102 + -2503 + -353:
    case 1803 + -1 * -2325:
      return t && t.some(function(A) {
        return zA(A.props, /grid-\w+-start/);
      }) ? g : Z + F(F(g, "-end", "-span"), "span ", "") + g;
    case -7425 + -24 * -480:
    case 3583:
    case -43 * -211 + 6480 + -5 * 2297:
    case 2532:
      return F(g, /(.+)-inline(.+)/, Y + "$1$2") + g;
    case 8333 * 1 + -10802 + 10585:
    case 4 * -2731 + -11948 + 29931:
    case -5 * 302 + 1 * -8721 + 222 * 72:
    case 107 * 29 + -5239 + -7671 * -1:
    case 5 * -650 + 3655 + -360 * -14:
    case -11 * -330 + 4681 + 5 * -522:
    case -1 * -5701 + 1478 + -2246 * 1:
    case -1 * -9329 + -661 * -12 + -44 * 286:
    case 512 * -16 + -542 * -19 + 1 * 3427:
    case -13 * -718 + -2443 * -4 + -13317 * 1:
    case -1 * 5223 + -3963 + 14207:
    case 1 * -6353 + -6371 * -1 + -1 * -4747:
      if (qA(g) - (2024 * 3 + 8555 + -14626) - I > -8389 * -1 + 4958 + -13341) switch (iA(g, I + (3503 * 1 + 1 * -7907 + -5 * -881))) {
        case 765 + 1585 * 1 + 3 * -747:
          if (iA(g, I + 4) !== 45) break;
        case -934 * -8 + 463 * 16 + 6 * -2463:
          return F(g, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + Nt + (iA(g, I + (8069 + 977 * -1 + -2363 * 3)) == 1 * -4154 + -6251 * -1 + -1989 ? "$3" : "$2-$3")) + g;
        case -1 * -4101 + -8566 + 458 * 10:
          return ~mg(g, "stretch", -7295 + 111 * 19 + -2 * -2593) ? MC(F(g, "stretch", "fill-available"), I, t) + g : g;
      }
      break;
    case -2 * -2307 + -1 * -4413 + 3875 * -1:
    case 5920:
      return F(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, e, o, i, C, n, B) {
        return Z + e + ":" + o + B + (i ? Z + e + "-span:" + (C ? n : +n - +o) + B : "") + g;
      });
    case 4949:
      if (iA(g, I + (5228 + 9 * 211 + 1 * -7121)) === 1 * 5224 + -2389 + -118 * 23) return F(g, ":", ":" + Y) + g;
      break;
    case -8223 + -1 * 12493 + -28 * -970:
      switch (iA(g, iA(g, 14) === 826 * -11 + 1 * 1770 + 7361 ? 18 : 1 * 6951 + -5204 + -4 * 434)) {
        case 120:
          return F(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Y + (iA(g, -5 * 1319 + 409 + 6200) === -1031 * 4 + 5788 + -1619 * 1 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + Z + "$2box$3") + g;
        case -211 * -5 + 56 * -90 + 4085:
          return F(g, ":", ":" + Z) + g;
      }
      break;
    case 19 * 342 + 864 + -1643:
    case -2 * -1868 + 985 * -6 + 4821:
    case -2670 + 961 * 5:
    case 101 * 59 + -7548 + 5516:
    case 6 * 1636 + 9229 + -16654:
      return F(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function Kg(g, I) {
  for (var t = "", A = 1 * -35 + 52 * 98 + -5061; A < g.length; A++) t += I(g[A], A, g, I) || "";
  return t;
}
function kQ(g, I, t, A) {
  switch (g.type) {
    case sQ:
      if (g.children.length) break;
    case EQ:
    case no:
      return g.return = g.return || g.value;
    case kC:
      return "";
    case bC:
      return g.return = g.value + "{" + Kg(g.children, A) + "}";
    case y0:
      if (!qA(g.value = g.props.join(","))) return "";
  }
  return qA(t = Kg(g.children, A)) ? g.return = g.value + "{" + t + "}" : "";
}
function bQ(g) {
  var I = RC(g);
  return function(t, A, e, o) {
    for (var i = "", C = 7051 * 1 + -462 + -6589; C < I; C++) i += g[C](t, A, e, o) || "";
    return i;
  };
}
function NQ(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function FQ(g, I, t, A) {
  if (g.length > -(-7505 + -9 * -3 + 7479) && !g.return)
    switch (g.type) {
      case no:
        g.return = MC(g.value, g.length, t);
        return;
      case bC:
        return Kg([Ce(g, { value: F(g.value, "@", "@" + Y) })], A);
      case y0:
        if (g.length) return dQ(t = g.props, function(e) {
          switch (zA(e, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Ke(Ce(g, { props: [F(e, /:(read-\w+)/, ":" + Nt + "$1")] }));
              var o = {};
              o.props = [e], Ke(Ce(g, o)), rI(g, { props: gi(t, A) });
              break;
            case "::placeholder":
              Ke(Ce(g, { props: [F(e, /:(plac\w+)/, ":" + Y + "input-$1")] })), Ke(Ce(g, { props: [F(e, /:(plac\w+)/, ":" + Nt + "$1")] })), Ke(Ce(g, { props: [F(e, /:(plac\w+)/, Z + "input-$1")] }));
              var i = {};
              i.props = [e], Ke(Ce(g, i)), rI(g, { props: gi(t, A) });
              break;
          }
          return "";
        });
    }
}
var G = {};
G.animationIterationCount = 1, G.aspectRatio = 1, G.borderImageOutset = 1, G.borderImageSlice = 1, G.borderImageWidth = 1, G.boxFlex = 1, G.boxFlexGroup = 1, G.boxOrdinalGroup = 1, G.columnCount = 1, G.columns = 1, G.flex = 1, G.flexGrow = 1, G.flexPositive = 1, G.flexShrink = 1, G.flexNegative = 1, G.flexOrder = 1, G.gridRow = 1, G.gridRowEnd = 1, G.gridRowSpan = 1, G.gridRowStart = 1, G.gridColumn = 1, G.gridColumnEnd = 1, G.gridColumnSpan = 1, G.gridColumnStart = 1, G.msGridRow = 1, G.msGridRowSpan = 1, G.msGridColumn = 1, G.msGridColumnSpan = 1, G.fontWeight = 1, G.lineHeight = 1, G.opacity = 1, G.order = 1, G.orphans = 1, G.tabSize = 1, G.widows = 1, G.zIndex = 1, G.zoom = 1, G.WebkitLineClamp = 1, G.fillOpacity = 1, G.floodOpacity = 1, G.stopOpacity = 1, G.strokeDasharray = 1, G.strokeDashoffset = 1, G.strokeMiterlimit = 1, G.strokeOpacity = 1, G.strokeWidth = 1;
var RQ = G, W = {}, ve = typeof process < "u" && void (-1591 * -2 + 4661 + -7843) !== W && (W.REACT_APP_SC_ATTR || W.SC_ATTR) || "data-styled", LC = "active", vC = "data-styled-version", G0 = "6.1.11", Qo = `/*!sc*/
`, ao = typeof window < "u" && "HTMLElement" in window, SQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (3 * -48 + -1390 * 1 + 767 * 2) !== W && void (1 * -9739 + 5 * 582 + 6829 * 1) !== W.REACT_APP_SC_DISABLE_SPEEDY && W.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (5297 + 439 * -3 + 3980 * -1) !== W && void (702 * 2 + -9775 + 8371) !== W.SC_DISABLE_SPEEDY && W.SC_DISABLE_SPEEDY !== "" ? W.SC_DISABLE_SPEEDY !== "false" && W.SC_DISABLE_SPEEDY : W.NODE_ENV !== "production"), ii = /invalid hook call/i, xg = /* @__PURE__ */ new Set(), MQ = function(g, I) {
  if (W.NODE_ENV !== "production") {
    var t = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], n = -4916 + -18 * 383 + 11811; n < arguments.length; n++) C[n - (5 * -379 + -4362 + 6258)] = arguments[n];
        ii.test(i) ? (o = !1, xg.delete(A)) : e.apply(void (7099 + 1121 * 1 + -6 * 1370), et([i], C, !1));
      }, AA(), o && !xg.has(A) && (console.warn(A), xg.add(A));
    } catch (i) {
      ii.test(i.message) && xg.delete(A);
    } finally {
      console.error = e;
    }
  }
}, k0 = Object.freeze([]), ot = Object.freeze({});
function LQ(g, I, t) {
  return void (1299 * -2 + -4360 + -14 * -497) === t && (t = ot), g.theme !== t.theme && g.theme || I || t.theme;
}
var sI = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), vQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, JQ = /(^-|-$)/g;
function Ci(g) {
  return g.replace(vQ, "-").replace(JQ, "");
}
var WQ = /(a)(d)/gi, Eg = 1659 + -1 * 1607, ni = function(g) {
  return String.fromCharCode(g + (g > -1 * 601 + 613 + 13 ? -6 * -1279 + -2 * 446 + 613 * -11 : 1006 * -1 + 4258 * 1 + -3155 * 1));
};
function cI(g) {
  var I, t = "";
  for (I = Math.abs(g); I > Eg; I = I / Eg | -8462 * 1 + -4491 + -1 * -12953) t = ni(I % Eg) + t;
  return (ni(I % Eg) + t).replace(WQ, "$1-$2");
}
var K0, JC = -2166 + 1 * -8066 + -1201 * -13, ye = function(g, I) {
  for (var t = I.length; t; ) g = (-4 * 1518 + 4437 + 6 * 278) * g ^ I.charCodeAt(--t);
  return g;
}, WC = function(g) {
  return ye(JC, g);
};
function YQ(g) {
  return cI(WC(g) >>> -566 + 7 * 1289 + -8457);
}
function YC(g) {
  return W.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function O0(g) {
  return typeof g == "string" && (W.NODE_ENV === "production" || g.charAt(-71 * 134 + -2 * -1609 + 4 * 1574) === g.charAt(721 * -7 + 6425 * -1 + -8 * -1434).toLowerCase());
}
var NA = {};
NA.childContextTypes = !0, NA.contextType = !0, NA.contextTypes = !0, NA.defaultProps = !0, NA.displayName = !0, NA.getDefaultProps = !0, NA.getDerivedStateFromError = !0, NA.getDerivedStateFromProps = !0, NA.mixins = !0, NA.propTypes = !0, NA.type = !0;
var ne = {};
ne.name = !0, ne.length = !0, ne.prototype = !0, ne.caller = !0, ne.callee = !0, ne.arguments = !0, ne.arity = !0;
var fe = {};
fe.$$typeof = !0, fe.compare = !0, fe.defaultProps = !0, fe.displayName = !0, fe.propTypes = !0, fe.type = !0;
var qe = {};
qe.$$typeof = !0, qe.render = !0, qe.defaultProps = !0, qe.displayName = !0, qe.propTypes = !0;
var UC = typeof Symbol == "function" && Symbol.for, HC = UC ? Symbol.for("react.memo") : 1 * 98920 + 3 * -34757 + -3637 * -18, UQ = UC ? Symbol.for("react.forward_ref") : 68817 + 94 * -326 + 21939, HQ = NA, KQ = ne, KC = fe, OQ = ((K0 = {})[UQ] = qe, K0[HC] = KC, K0);
function Bi(g) {
  return ("type" in (I = g) && I.type.$$typeof) === HC ? KC : "$$typeof" in g ? OQ[g.$$typeof] : HQ;
  var I;
}
var TQ = Object.defineProperty, qQ = Object.getOwnPropertyNames, Qi = Object.getOwnPropertySymbols, ZQ = Object.getOwnPropertyDescriptor, PQ = Object.getPrototypeOf, ai = Object.prototype;
function OC(g, I, t) {
  if (typeof I != "string") {
    if (ai) {
      var A = PQ(I);
      A && A !== ai && OC(g, A, t);
    }
    var e = qQ(I);
    Qi && (e = e.concat(Qi(I)));
    for (var o = Bi(g), i = Bi(I), C = 5932 + -344 * -10 + -9372; C < e.length; ++C) {
      var n = e[C];
      if (!(n in KQ || t && t[n] || i && n in i || o && n in o)) {
        var B = ZQ(I, n);
        try {
          TQ(g, n, B);
        } catch {
        }
      }
    }
  }
  return g;
}
function it(g) {
  return typeof g == "function";
}
function ro(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function pe(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function ri(g, I) {
  if (7648 + -13 * 271 + -4125 === g.length) return "";
  for (var t = g[-1762 + 4 * -1999 + 9758], A = 1; A < g.length; A++) t += g[A];
  return t;
}
function Ct(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function dI(g, I, t) {
  if (void (-164 * 19 + 9769 + 6653 * -1) === t && (t = !1), !t && !Ct(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = 1 * -8513 + -2581 * -2 + 3351; A < I.length; A++) g[A] = dI(g[A], I[A]);
  else if (Ct(I))
    for (var A in I) g[A] = dI(g[A], I[A]);
  return g;
}
function xo(g, I) {
  var t = {};
  t.value = I, Object.defineProperty(g, "toString", t);
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
var jQ = W.NODE_ENV !== "production" ? gA : {};
function VQ() {
  for (var g = [], I = -1 * -2713 + 3 * -2689 + 5354; I < arguments.length; I++) g[I] = arguments[I];
  for (var t = g[-109 * 49 + 5946 * -1 + 11287], A = [], e = -1523 * -1 + -2250 + -52 * -14, o = g.length; e < o; e += -8348 + 4 * 606 + 5925) A.push(g[e]);
  return A.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function rt(g) {
  for (var I = [], t = 3 * 2123 + 10 * 758 + 22 * -634; t < arguments.length; t++) I[t - (1 * 43 + -3884 + 3842)] = arguments[t];
  return W.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > -6610 + -279 * -15 + 2425 ? " Args: ".concat(I.join(", ")) : "")) : new Error(VQ.apply(void (-677 * 1 + -118 * 71 + 9055), et([jQ[g]], I, !1)).trim());
}
var _Q = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(856 + -1 * 4282 + 3938), this.length = -125 * 65 + -3685 + 12322, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var t = 6380 + 1276 * -5, A = -231 * -41 + 8009 * 1 + -17480; A < I; A++) t += this.groupSizes[A];
    return t;
  }, g.prototype.insertRules = function(I, t) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, e = A.length, o = e; I >= o; ) if ((o <<= -9406 + -1 * -9407) < 4400 + 3 * 1471 + 1 * -8813) throw rt(7584 + 1 * -9735 + 2167, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = e; i < o; i++) this.groupSizes[i] = 9369 + 2793 * 3 + -493 * 36;
    }
    for (var C = this.indexOfGroup(I + (-18 + -2 * -3616 + -1 * 7213)), n = (i = -620 * -4 + 2 * 2384 + -151 * 48, t.length); i < n; i++) this.tag.insertRule(C, t[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var t = this.groupSizes[I], A = this.indexOfGroup(I), e = A + t;
      this.groupSizes[I] = 7993 * 1 + -2859 + -1 * 5134;
      for (var o = A; o < e; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var t = "";
    if (I >= this.length || -8072 + 2 * 4036 === this.groupSizes[I]) return t;
    for (var A = this.groupSizes[I], e = this.indexOfGroup(I), o = e + A, i = e; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(Qo);
    return t;
  }, g;
}(), XQ = 8566 + -8565 * 1 << 2 * -1439 + 2893 + -5 * -3, bg = /* @__PURE__ */ new Map(), Og = /* @__PURE__ */ new Map(), Ng = 4788 + -195 * -19 + -8492, sg = function(g) {
  if (bg.has(g)) return bg.get(g);
  for (; Og.has(Ng); ) Ng++;
  var I = Ng++;
  if (W.NODE_ENV !== "production" && ((-9343 + -9343 * -1 | I) < 7871 + 2 * -260 + -7351 || I > XQ)) throw rt(43 * 11 + -81 * -66 + -5803, "".concat(I));
  return bg.set(g, I), Og.set(I, g), I;
}, zQ = function(g, I) {
  Ng = I + (-5274 + -1 * -2429 + 2846), bg.set(g, I), Og.set(I, g);
}, $Q = "style[".concat(ve, "][").concat(vC, '="').concat(G0, '"]'), Aa = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ea = function(g, I, t) {
  for (var A, e = t.split(","), o = 1661 * 1 + 9692 + -11353, i = e.length; o < i; o++) (A = e[o]) && g.registerName(I, A);
}, ta = function(g, I) {
  for (var t, A = ((t = I.textContent) !== null && void (2083 * -1 + -957 + 32 * 95) !== t ? t : "").split(Qo), e = [], o = 6094 + 136 * 14 + -7998, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var n = C.match(Aa);
      if (n) {
        var B = 0 | parseInt(n[1], 10), a = n[-90 * -18 + -961 * -9 + -10267];
        -4603 * -2 + 8656 + -17862 !== B && (zQ(a, B), ea(g, a, n[-2169 + 5 * -307 + 3707 * 1]), g.getTag().insertRules(B, e)), e.length = -17 * 4 + -1738 * -1 + -10 * 167;
      } else e.push(C);
    }
  }
};
function ga() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var TC = function(g) {
  var I = document.head, t = g || I, A = document.createElement("style"), e = function(C) {
    var n = Array.from(C.querySelectorAll("style[".concat(ve, "]")));
    return n[n.length - (2286 + -7 * -199 + 1 * -3678)];
  }(t), o = void (2309 + -6269 * -1 + -2 * 4289) !== e ? e.nextSibling : null;
  A.setAttribute(ve, LC), A.setAttribute(vC, G0);
  var i = ga();
  return i && A.setAttribute("nonce", i), t.insertBefore(A, o), A;
}, Ia = function() {
  function g(I) {
    this.element = TC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var A = document.styleSheets, e = 0, o = A.length; e < o; e++) {
        var i = A[e];
        if (i.ownerNode === t) return i;
      }
      throw rt(-2837 + 4291 * -2 + -2 * -5718);
    }(this.element), this.length = 58 * -139 + 573 + 7489;
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
}(), oa = function() {
  function g(I) {
    this.element = TC(I), this.nodes = this.element.childNodes, this.length = -186 * 37 + 8255 + -1 * 1373;
  }
  return g.prototype.insertRule = function(I, t) {
    if (I <= this.length && I >= 1 * -9047 + -6939 + 7993 * 2) {
      var A = document.createTextNode(t);
      return this.element.insertBefore(A, this.nodes[I] || null), this.length++, !0;
    }
    return !1;
  }, g.prototype.deleteRule = function(I) {
    this.element.removeChild(this.nodes[I]), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.nodes[I].textContent : "";
  }, g;
}(), ia = function() {
  function g(I) {
    this.rules = [], this.length = 10961 + 97 * -113;
  }
  return g.prototype.insertRule = function(I, t) {
    return I <= this.length && (this.rules.splice(I, -4054 + -223 * -23 + 1075 * -1, t), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, 9340 + 7 * 478 + 2537 * -5), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), xi = ao, Ca = { isServer: !ao, useCSSOMInjection: !SQ }, qC = function() {
  function g(I, t, A) {
    void (1559 * -5 + 2352 * 4 + -1613) === I && (I = ot), void (-3282 * -3 + 89 * 107 + -19369) === t && (t = {});
    var e = this;
    this.options = mA(mA({}, Ca), I), this.gs = t, this.names = new Map(A), this.server = !!I.isServer, !this.server && ao && xi && (xi = !1, function(o) {
      for (var i = document.querySelectorAll($Q), C = 82 + -3 * -1423 + -1 * 4351, n = i.length; C < n; C++) {
        var B = i[C];
        B && B.getAttribute(ve) !== LC && (ta(o, B), B.parentNode && B.parentNode.removeChild(B));
      }
    }(this)), xo(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, n = "", B = function(Q) {
          var E = function(r) {
            return Og.get(r);
          }(Q);
          if (void (-3 * -1233 + -6 * -239 + 3 * -1711) === E) return "continue";
          var x = o.names.get(E), s = i.getGroup(Q);
          if (void (-1 * 8813 + -5550 + 1 * 14363) === x || -6609 * 1 + 322 * 5 + 4999 === s.length) return "continue";
          var d = "".concat(ve, ".g").concat(Q, '[id="').concat(E, '"]'), h = "";
          void (72 * 130 + 7223 + -161 * 103) !== x && x.forEach(function(r) {
            r.length > 0 && (h += "".concat(r, ","));
          }), n += "".concat(s).concat(d, '{content:"').concat(h, '"}').concat(Qo);
        }, a = 1 * 4457 + -8457 + 4e3; a < C; a++) B(a);
        return n;
      }(e);
    });
  }
  return g.registerId = function(I) {
    return sg(I);
  }, g.prototype.reconstructWithOptions = function(I, t) {
    return void (5799 + -6521 * 1 + 2 * 361) === t && (t = !0), new g(mA(mA({}, this.options), I), this.gs, t && this.names || void (6295 + -1 * -752 + -7047));
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || 0) + (1 * 8296 + -7405 + 178 * -5);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(t) {
      var A = t.useCSSOMInjection, e = t.target;
      return t.isServer ? new ia(e) : A ? new Ia(e) : new oa(e);
    }(this.options), new _Q(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, t) {
    return this.names.has(I) && this.names.get(I).has(t);
  }, g.prototype.registerName = function(I, t) {
    if (sg(I), this.names.has(I)) this.names.get(I).add(t);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(t), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, t, A) {
    this.registerName(I, t), this.getTag().insertRules(sg(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(sg(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void 0;
  }, g;
}(), na = /&/g, Ba = /^\s*\/\/.*$/gm;
function ZC(g, I) {
  return g.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(I, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(I, " ")), t.props = t.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ZC(t.children, I)), t;
  });
}
function PC(g) {
  var I, t, A, e = g === void 0 ? ot : g, o = e.options, i = void (4 * -694 + -17 * -13 + 2555) === o ? ot : o, C = e.plugins, n = void (203 * 47 + -12 * -42 + -10045) === C ? k0 : C, B = function(E, x, s) {
    return s.startsWith(t) && s.endsWith(t) && s.replaceAll(t, "").length > 4 * 941 + 1571 * -4 + 2520 ? ".".concat(I) : E;
  }, a = n.slice();
  a.push(function(E) {
    E.type === y0 && E.value.includes("&") && (E.props[-3926 + -190 * -18 + 506] = E.props[-4740 + -237 * -20].replace(na, t).replace(A, B));
  }), i.prefix && a.push(FQ), a.push(kQ);
  var Q = function(E, x, s, d) {
    void (-4 * 2463 + -3131 + 12983) === x && (x = ""), void (-529 * 16 + 1 * 5056 + -852 * -4) === s && (s = ""), void (606 * 9 + -4328 + 2 * -563) === d && (d = "&"), I = d, t = x, A = new RegExp("\\".concat(t, "\\b"), "g");
    var h = E.replace(Ba, ""), r = mQ(s || x ? "".concat(s, " ").concat(x, " { ").concat(h, " }") : h);
    i.namespace && (r = ZC(r, i.namespace));
    var u = [];
    return Kg(r, bQ(a.concat(NQ(function(p) {
      return u.push(p);
    })))), u;
  };
  return Q.hash = n.length ? n.reduce(function(E, x) {
    return x.name || rt(-8978 + 5771 * 1 + 6 * 537), ye(E, x.name);
  }, JC).toString() : "", Q;
}
var Qa = new qC(), hI = PC(), Eo = Le.createContext({ shouldForwardProp: void (-7 * 98 + -4578 + -658 * -8), styleSheet: Qa, stylis: hI });
Eo.Consumer;
var aa = Le.createContext(void (7702 * 1 + 6437 + -14139));
function lI() {
  return se(Eo);
}
function ra(g) {
  var I = nA(g.stylisPlugins), t = I[1 * -2956 + 48 * -104 + 7948], A = I[70 * -10 + -2224 + 585 * 5], e = lI().styleSheet, o = uA(function() {
    var a = e, Q = {};
    return Q.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(Q)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, e]), i = uA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var Q = {};
    return Q.options = a, Q.plugins = t, PC(Q);
  }, [g.enableVendorPrefixes, g.namespace, t]);
  K(function() {
    xQ(t, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = uA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), n = {};
  n.value = C;
  var B = {};
  return B.value = i, Le.createElement(Eo.Provider, n, Le.createElement(aa.Provider, B, g.children));
}
var Ei = function() {
  function g(I, t) {
    var A = this;
    this.inject = function(e, o) {
      void (157 * -17 + -1 * 3399 + 6068) === o && (o = hI);
      var i = A.name + o.hash;
      e.hasNameForId(A.id, i) || e.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = t, xo(this, function() {
      throw rt(1423 + 83 * -17, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return void (-349 * 17 + 7516 + 1583 * -1) === I && (I = hI), this.name + I.hash;
  }, g;
}(), xa = function(g) {
  return g >= "A" && g <= "Z";
};
function si(g) {
  for (var I = "", t = -11 * 475 + -9160 + -14385 * -1; t < g.length; t++) {
    var A = g[t];
    if (7130 * -1 + 581 + 6550 === t && A === "-" && g[3022 * 3 + -8172 + 6 * -149] === "-") return g;
    xa(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var jC = function(g) {
  return g == null || g === !1 || g === "";
}, VC = function(g) {
  var I, t, A = [];
  for (var e in g) {
    var o = g[e];
    g.hasOwnProperty(e) && !jC(o) && (Array.isArray(o) && o.isCss || it(o) ? A.push("".concat(si(e), ":"), o, ";") : Ct(o) ? A.push.apply(A, et(et(["".concat(e, " {")], VC(o), !1), ["}"], !1)) : A.push("".concat(si(e), ": ").concat((I = e, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 3257 * 2 + 2 * -3092 + 2 * -165 === t || I in RQ || I.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return A;
};
function Se(g, I, t, A) {
  if (jC(g)) return [];
  if (ro(g)) return [".".concat(g.styledComponentId)];
  if (it(g)) {
    if (!it(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var e = g(I);
    return W.NODE_ENV === "production" || typeof e != "object" || Array.isArray(e) || e instanceof Ei || Ct(e) || e === null || console.error("".concat(YC(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Se(e, I, t, A);
  }
  var o;
  return g instanceof Ei ? t ? (g.inject(t, A), [g.getName(A)]) : [g] : Ct(g) ? VC(g) : Array.isArray(g) ? Array.prototype.concat.apply(k0, g.map(function(i) {
    return Se(i, I, t, A);
  })) : [g.toString()];
}
function Ea(g) {
  for (var I = -4 * -586 + 4105 * -1 + -1 * -1761; I < g.length; I += -2768 * -2 + 4 * -1877 + 1973) {
    var t = g[I];
    if (it(t) && !ro(t)) return !1;
  }
  return !0;
}
var sa = WC(G0), ca = function() {
  function g(I, t, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = W.NODE_ENV === "production" && (void (-22 * -12 + -2 * -3605 + -2 * 3737) === A || A.isStatic) && Ea(I), this.componentId = t, this.baseHash = ye(sa, t), this.baseStyle = A, qC.registerId(t);
  }
  return g.prototype.generateAndInjectStyles = function(I, t, A) {
    var e = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, t, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) e = pe(e, this.staticRulesId);
      else {
        var o = ri(Se(this.rules, I, t, A)), i = cI(ye(this.baseHash, o) >>> 1 * 271 + 59 * 167 + -10124);
        if (!t.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, C);
        }
        e = pe(e, i), this.staticRulesId = i;
      }
    else {
      for (var n = ye(this.baseHash, A.hash), B = "", a = 0; a < this.rules.length; a++) {
        var Q = this.rules[a];
        if (typeof Q == "string") B += Q, W.NODE_ENV !== "production" && (n = ye(n, Q));
        else if (Q) {
          var E = ri(Se(Q, I, t, A));
          n = ye(n, E + a), B += E;
        }
      }
      if (B) {
        var x = cI(n >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, A(B, ".".concat(x), void (7776 + 432 * -18), this.componentId)), e = pe(e, x);
      }
    }
    return e;
  }, g;
}(), _C = Le.createContext(void (2 * -4115 + 6410 + 1820));
_C.Consumer;
var T0 = {}, ci = /* @__PURE__ */ new Set();
function da(g, I, t) {
  var A = ro(g), e = g, o = !O0(g), i = I.attrs, C = void (4281 * 1 + -7025 + 2744) === i ? k0 : i, n = I.componentId, B = void (4679 + 4679 * -1) === n ? function(v, S) {
    var w = typeof v != "string" ? "sc" : Ci(v);
    T0[w] = (T0[w] || 0) + (8623 * 1 + 4113 + -12735);
    var V = "".concat(w, "-").concat(YQ(G0 + w + T0[w]));
    return S ? "".concat(S, "-").concat(V) : V;
  }(I.displayName, I.parentComponentId) : n, a = I.displayName, Q = void (225 * 30 + -47 * 55 + -4165) === a ? function(v) {
    return O0(v) ? "styled.".concat(v) : "Styled(".concat(YC(v), ")");
  }(g) : a, E = I.displayName && I.componentId ? "".concat(Ci(I.displayName), "-").concat(I.componentId) : I.componentId || B, x = A && e.attrs ? e.attrs.concat(C).filter(Boolean) : C, s = I.shouldForwardProp;
  if (A && e.shouldForwardProp) {
    var d = e.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      s = function(v, S) {
        return d(v, S) && h(v, S);
      };
    } else s = d;
  }
  var r = new ca(t, E, A ? e.componentStyle : void (23 * -11 + 4826 + -4573 * 1));
  function u(v, S) {
    return function(w, V, EA) {
      var q = w.attrs, U = w.componentStyle, Ie = w.defaultProps, oe = w.foldedComponentIds, ce = w.styledComponentId, S0 = w.target, ng = Le.useContext(_C), BB = lI(), M0 = w.shouldForwardProp || BB.shouldForwardProp;
      W.NODE_ENV !== "production" && Hg(ce);
      var Mo = LQ(V, ng, Ie) || ot, XA = function(Bg, ht, Qg) {
        var He = {};
        He.className = void (-9598 * -1 + 2154 + -1469 * 8), He.theme = Qg;
        for (var J0, de = mA(mA({}, ht), He), W0 = 50 * -4 + -1 * 5147 + 5347; W0 < Bg.length; W0 += -2 * -2011 + 1 * 8198 + -12219) {
          var ag = it(J0 = Bg[W0]) ? J0(de) : J0;
          for (var ie in ag) de[ie] = ie === "className" ? pe(de[ie], ag[ie]) : ie === "style" ? mA(mA({}, de[ie]), ag[ie]) : ag[ie];
        }
        return ht.className && (de.className = pe(de.className, ht.className)), de;
      }(q, V, Mo), ct = XA.as || S0, dt = {};
      for (var bA in XA) void (-6693 * -1 + 4833 + -1 * 11526) === XA[bA] || bA[-41 * -199 + 1 * 5622 + 1 * -13781] === "$" || bA === "as" || bA === "theme" && XA.theme === Mo || (bA === "forwardedAs" ? dt.as = XA.forwardedAs : M0 && !M0(bA, ct) || (dt[bA] = XA[bA], M0 || W.NODE_ENV !== "development" || GB(bA) || ci.has(bA) || !sI.has(ct) || (ci.add(bA), console.warn('styled-components: it looks like an unknown prop "'.concat(bA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var L0 = function(Bg, ht) {
        var Qg = lI(), He = Bg.generateAndInjectStyles(ht, Qg.styleSheet, Qg.stylis);
        return W.NODE_ENV !== "production" && Hg(He), He;
      }(U, XA);
      W.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(L0);
      var v0 = pe(oe, ce);
      return L0 && (v0 += " " + L0), XA.className && (v0 += " " + XA.className), dt[O0(ct) && !sI.has(ct) ? "class" : "className"] = v0, dt.ref = EA, lA(ct, dt);
    }(p, v, S);
  }
  u.displayName = Q;
  var p = Le.forwardRef(u), b = {};
  return b.attrs = !0, b.componentStyle = !0, b.displayName = !0, b.foldedComponentIds = !0, b.shouldForwardProp = !0, b.styledComponentId = !0, b.target = !0, p.attrs = x, p.componentStyle = r, p.displayName = Q, p.shouldForwardProp = s, p.foldedComponentIds = A ? pe(e.foldedComponentIds, e.styledComponentId) : "", p.styledComponentId = E, p.target = A ? e.target : g, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = A ? function(S) {
      for (var w = [], V = -2559 + 5 * -959 + 7355; V < arguments.length; V++) w[V - (7315 + -2 * 2281 + -2752)] = arguments[V];
      for (var EA = -3393 + 9333 * 1 + 60 * -99, q = w; EA < q.length; EA++) dI(S, q[EA], !0);
      return S;
    }({}, e.defaultProps, v) : v;
  } }), W.NODE_ENV !== "production" && (MQ(Q, E), p.warnTooManyClasses = /* @__PURE__ */ function(v, S) {
    var w = {}, V = !1;
    return function(EA) {
      if (!V && (w[EA] = !0, Object.keys(w).length >= -311 + -4441 * -1 + -393 * 10)) {
        var q = S ? ' with the id of "'.concat(S, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(v).concat(q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), V = !0, w = {};
      }
    };
  }(Q, E)), xo(p, function() {
    return ".".concat(p.styledComponentId);
  }), o && OC(p, g, b), p;
}
function di(g, I) {
  for (var t = [g[-3598 + -3631 * -1 + -33]], A = -1 * 2351 + -1038 + 3389, e = I.length; A < e; A += 1) t.push(I[A], g[A + (2957 * -1 + 4932 + -1974)]);
  return t;
}
var hi = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function ha(g) {
  for (var I = [], t = 679 * -14 + 381 * 4 + 3 * 2661; t < arguments.length; t++) I[t - (-1066 * -1 + 2315 + -3380)] = arguments[t];
  if (it(g) || Ct(g)) return hi(Se(di(k0, et([g], I, !0))));
  var A = g;
  return 2599 + -4721 * -1 + -7320 === I.length && A.length === 1 && typeof A[-8718 + 6 * 1453] == "string" ? Se(A) : hi(Se(di(A, I)));
}
function uI(g, I, t) {
  if (void (-5134 + -71 * 17 + 6341) === t && (t = ot), !I) throw rt(250 + 734 * -9 + 163 * 39, I);
  var A = function(e) {
    for (var o = [], i = 593 * 3 + 4034 + 1 * -5812; i < arguments.length; i++) o[i - (-6411 + -7 * -916)] = arguments[i];
    return g(I, t, ha.apply(void 0, et([e], o, !1)));
  };
  return A.attrs = function(e) {
    return uI(g, I, mA(mA({}, t), { attrs: Array.prototype.concat(t.attrs, e).filter(Boolean) }));
  }, A.withConfig = function(e) {
    return uI(g, I, mA(mA({}, t), e));
  }, A;
}
var XC = function(g) {
  return uI(da, g);
}, ig = XC;
sI.forEach(function(g) {
  ig[g] = XC(g);
});
W.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var cg = "__sc-".concat(ve, "__");
W.NODE_ENV !== "production" && W.NODE_ENV !== "test" && typeof window < "u" && (window[cg] || (window[cg] = 437 + 437 * -1), 7732 * 1 + -1124 * 7 + -137 * -1 === window[cg] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[cg] += 1);
const la = ig.div`
  position: relative;
`, ua = ig.video`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(g) => g.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class H extends Error {
  constructor(t, A) {
    super(t);
    m(this, "cause");
    this.name = "AutoCaptureError", this.cause = A;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof H) return t;
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
    return new H(A, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof H) return t;
    const A = "An unexpected error has occurred";
    return new H(A);
  }
}
const Fg = {};
Fg.CONTINUE_DETECTION = "continue-detection", Fg.SWITCH_CAMERA = "switch-camera", Fg.TOGGLE_MIRROR = "toggle-mirror";
const q0 = Fg, fI = {};
fI.FIRST_FRAME = "first-frame", fI.FIRST_VALID_FRAME = "first-valid-frame";
const Rg = fI, zC = {};
zC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const DI = zC;
var $C = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))($C || {}), ZA = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(ZA || {}), fa = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(fa || {}), vt = ((g) => (g.INSTRUCTION_ESCALATED = "smile:instruction-escalated", g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(vt || {}), Da = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(Da || {}), ya = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(ya || {});
const An = {};
An.EYE_NOT_PRESENT = "eye_not_present";
const li = An, dA = {};
dA.CANDIDATE_SELECTION = "candidate_selection", dA.FACE_TOO_CLOSE = "face_too_close", dA.FACE_TOO_FAR = "face_too_far", dA.FACE_CENTERING = "face_centering", dA.FACE_NOT_PRESENT = "face_not_present", dA.SHARPNESS_TOO_LOW = "sharpness_too_low", dA.BRIGHTNESS_TOO_LOW = "brightness_too_low", dA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", dA.DEVICE_PITCHED = "device_pitched", dA.LEFT_EYE_NOT_PRESENT = "left_" + li.EYE_NOT_PRESENT, dA.RIGHT_EYE_NOT_PRESENT = "right_" + li.EYE_NOT_PRESENT, dA.MOUTH_NOT_PRESENT = "mouth_not_present", dA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", dA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const IA = dA, yA = {};
yA.isPresent = IA.FACE_NOT_PRESENT, yA.isNotPitched = IA.DEVICE_PITCHED, yA.isNotSmall = IA.FACE_TOO_FAR, yA.isNotLarge = IA.FACE_TOO_CLOSE, yA.isNotOutOfBounds = IA.FACE_CENTERING, yA.isNotDim = IA.BRIGHTNESS_TOO_LOW, yA.isNotBright = IA.BRIGHTNESS_TOO_HIGH, yA.isSharp = IA.SHARPNESS_TOO_LOW, yA.isLeftEyePresent = IA.LEFT_EYE_NOT_PRESENT, yA.isRightEyePresent = IA.RIGHT_EYE_NOT_PRESENT, yA.isMouthPresent = IA.MOUTH_NOT_PRESENT, yA.isMouthScoreNotTooHigh = IA.MOUTH_SCORE_TOO_HIGH, yA.isMouthScoreNotTooLow = IA.MOUTH_SCORE_TOO_LOW;
const wa = yA, yI = {};
yI.FRONT = "user", yI.REAR = "environment";
const so = yI, wI = {};
wI.AUTO_CAPTURE = "AUTO_CAPTURE", wI.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Tg = wI, wt = {};
wt.LOADING = "LOADING", wt.ERROR = "ERROR", wt.WAITING = "WAITING", wt.RUNNING = "RUNNING";
const PA = wt;
({ ...IA });
var pa = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(pa || {});
({ ...IA });
const pI = {};
pI.NEUTRAL = "NEUTRAL", pI.SMILE = "SMILE";
const OA = pI, en = { ...PA };
en.DONE = "DONE";
const RA = en;
({ ...IA });
const b0 = nt(void 0);
b0.displayName = "AppStateContext";
function xt() {
  const g = se(b0);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const ma = b0.Provider, tn = xt;
class gn extends SA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const I = new H("An unknown error has occurred");
    (t = this.context) == null || t.handleError(I);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var I;
    return ((I = this.context) == null ? void 0 : I.appState) === PA.ERROR ? null : this.props.children;
  }
}
m(gn, "contextType", b0);
const Ga = ig.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, ka = ig.div`
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
function ba() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Na = cC(
  ({ detectionDetails: g, isImageMirror: I }, t) => ba() ? (console.log(g), /* @__PURE__ */ y(LA, { children: [
    /* @__PURE__ */ y(Ga, { ref: t, $isImageMirror: I }),
    /* @__PURE__ */ y(ka, { children: /* @__PURE__ */ y("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), qg = nt(void 0);
qg.displayName = "AnalyticsContext";
function co() {
  const g = se(qg);
  if (g === void 0)
    throw new Error(`${qg.displayName} must be used within a AnalyticsProvider`);
  return g;
}
function Zg() {
  const g = ["W6xcJt18eW", "W4hdICo1WQxcNa", "feBdH8k5W5W", "ksddScxcPq", "W7/dKvq+mJZdQG", "WPJdICkrW74", "oSkFwJ/cPqZdH8o9pSknW499", "raWTWPLIiXtdL8kUfchdOG", "l8kgga1c", "WQVcNCk6iwerWPmGWPRdGq", "WQ/cUmkMW4nQ", "nWXGtmoMWQhcVKXtW4FdG1a", "W5HKW6pdHwPxW40RW7KsWPddVCoK", "Fq91jSk0", "W6e6pCoDcmomhxVcJs5j", "WOnHW4zUfG", "BMCtW5FcRSoOfKC", "WRdcGmkuWRG0gYXlhSkQCCo2WRS", "pSksxd7cOWRcQ8oEiSkSW5Dlpq", "WPpdRe3cRSkx", "W7JdO8oSWOzSoHz6W7RdTG", "WP3dOvefpW", "WO/dSSkiamkNW4JdQbpdSqtcHW", "s8o7W5WuW7BdQSo+W5tdNCk6g0e", "vMZcTCo/gG", "W7pcQSoUDY82WQq", "BmoGi8okhW", "urufWRFdQ2BdN0D9qXTIWO0L", "WOlcSqZdQSotWOCughCHW5mLi8oG", "ASoAsr8flSkvW4FdHXrtACk7", "WQ/cN8k1jd5mWPe7WQJdM27dIG", "rmoSmG", "W6ZcIuRcIg8", "WOlcSWJcRmk0W5DNENu", "ASk1WPxcSwpcRZ3cQG", "F2NcIhtdVrxdUCkgW4VdMCk+AW", "xGerW4qHW4TsWRZdOq"];
  return Zg = function() {
    return g;
  }, Zg();
}
function Fa(g, I, t, A, e) {
  return sA(t - -98, A);
}
(function(g, I) {
  const t = g();
  function A(C, n, B, a, Q) {
    return sA(C - 375, a);
  }
  function e(C, n, B, a, Q) {
    return sA(B - -231, C);
  }
  function o(C, n, B, a, Q) {
    return sA(B - 489, C);
  }
  function i(C, n, B, a, Q) {
    return sA(C - 113, n);
  }
  for (; ; )
    try {
      if (-parseInt(o("SJsv", 925, 941, 923, 959)) / 1 * (parseInt(o("k0TY", 894, 910, 917, 929)) / 2) + parseInt(A(798, 783, 792, "SHnA", 801)) / 3 * (parseInt(i(564, "si[R", 567, 561, 548)) / 4) + parseInt(i(550, "K4dz", 533, 550, 542)) / 5 * (parseInt(i(552, "NVRO", 559, 540, 541)) / 6) + parseInt(e("tagD", 187, 198, 192, 201)) / 7 + parseInt(o("E44e", 940, 939, 940, 939)) / 8 * (-parseInt(i(553, "h6dr", 544, 534, 534)) / 9) + parseInt(A(821, 827, 828, "gV&h", 834)) / 10 + -parseInt(o("E44e", 929, 934, 921, 933)) / 11 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Zg, 1270 * 321 + 38561 + -55 * -8005);
function Ra(g, I, t, A, e) {
  return sA(A - -808, e);
}
function sA(g, I) {
  const t = Zg();
  return sA = function(A, e) {
    A = A - (-5656 + 44 * 138);
    let o = t[A];
    if (sA.BGKQRt === void 0) {
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
      sA.ViqGiA = a, g = arguments, sA.BGKQRt = !0;
    }
    const C = t[-1 * -3626 + -991 + -2635], n = A + C, B = g[n];
    return B ? o = B : (sA.QTVBcj === void 0 && (sA.QTVBcj = !0), o = sA.ViqGiA(o, e), g[n] = o), o;
  }, sA(g, I);
}
function Z0(g, I, t, A, e) {
  return sA(I - -652, A);
}
const Pg = nt(void (-37 * -65 + 42 * -5 + 439 * -5));
function mI(g, I, t, A, e) {
  return sA(g - -142, t);
}
Pg[Z0(-243, -225, -207, "K4dz") + Z0(-243, -232, -216, "SJsv") + "e"] = mI(301, 291, "y*h9") + mI(276, 294, "lDBw") + Z0(-212, -230, -228, "2nh2");
function Et() {
  function g(e, o, i, C, n) {
    return Fa(e - 228, o - 318, n - 271, C);
  }
  function I(e, o, i, C, n) {
    return mI(C - -84, o - 418, o);
  }
  function t(e, o, i, C, n) {
    return Ra(e - 460, o - 203, i - 113, i - 1741, o);
  }
  const A = se(Pg);
  if (A === void 0) throw new Error(Pg[I(219, "WUKw", 215, 206) + t(1363, "[)Qh", 1352) + "e"] + (t(1382, "E44e", 1369) + g(589, 581, 607, "Z#FL", 590) + t(1362, "gV&h", 1358) + I(214, "squE", 211, 215) + g(619, 587, 603, "Mw8*", 603) + I(221, "#@BN", 238, 223) + t(1359, "k0TY", 1371) + g(631, 630, 627, "y*h9", 621)));
  return A;
}
const Je = (g) => g.length < 9449 * -1 + 4172 + -406 * -13 ? 0 : g.reduce((t, A) => t + A, 1322 * -6 + -34 * 127 + -1 * -12250) / g.length, ge = (g) => Number.parseFloat(g.toFixed(-1 * -3281 + 7508 + -5393 * 2)), Sa = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(0, 0, I.canvas.width, I.canvas.height);
}, In = 6327 + -111 * -6 + -6993 + 0.75, Ma = 12 * -529 + -170 * 58 + -1621 * -10, La = 195 * -33 + 7283 + -124 * 2, va = -814 + -8627 * -1 + -7813 * 1, Ja = "dot-auto-capture-video", N0 = (g, I) => Math.min(g, I), on = ({ height: g, width: I }, t) => {
  const A = N0(I, g) * t, e = (I - A) / (174 * 38 + 50 * 152 + 1 * -14210), o = (g - A) / (-117 * -77 + -1 * 5594 + 1 * -3413), i = {};
  return i.shiftX = e, i.shiftY = o, i.width = A, i.height = A, i;
}, Wa = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = on(g, I), i = {};
  return i.shiftX = A / g.width, i.shiftY = e / g.height, i.width = o / g.width, i.height = t / g.height, i;
}, Ya = ({ height: g, width: I }) => {
  const t = N0(I, g), A = t / (-5900 * -1 + 3552 + 11 * -859) * (2 * -2694 + 3 * 674 + 10 * 337);
  if (I > g) {
    const o = {};
    return o.width = A, o.height = t, o;
  }
  const e = {};
  return e.width = t, e.height = A, e;
}, Ua = (g, I) => {
  const t = N0(I.width, I.height);
  return ge(g * t);
}, Ha = ({ height: g, width: I }) => {
  const t = {};
  return t.height = g, t.width = I, on(t, In);
}, Ka = (g) => Wa(g, In), Oa = (g, I) => Ua(g, I) * Ma, Ta = "@innovatrics/dot-common-auto-capture", qa = "7.1.0", Za = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Pa = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, ja = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, Va = {
  name: Ta,
  private: !0,
  version: qa,
  scripts: Za,
  dependencies: Pa,
  devDependencies: ja
}, _a = -2416 + -96 * -53 + 167 * -16 + 0.4, Xa = -1 * -395 + -4647 + 4 * 1063 + 0.16, za = -2756 * 1 + 2579 + 177 + 0.2, $a = 0 + 0.05, Ar = 1 * -1297 + 249 * -23 + 7024, GI = {};
GI.min = -(581 + 13 * -422 + 4906), GI.max = 1;
const ui = GI, fi = -3338 + -1 * 2461 + -5799 * -1, er = -7884 + 1 * 1158 + 6726 + 0.25, tr = 2368 * -2 + 9523 + -4787 + 0.2, gr = 0 + 0.85, Ir = 30, or = 442 + -19 * 254 + -1 * -4393 + 0.8100000000000005, Sg = {};
Sg.minDuration = 1e3, Sg.maxDuration = 2500, Sg.minFrames = 10;
const P0 = Sg, kI = {};
kI.max = 100, kI.min = 10;
const Di = kI, ir = 5534 + -2 * -4011 + -12836, Cr = 1 * 5501 + -5207 + -94, nr = 9605 + -1 * -4471 + -14072, Cn = "AES-CBC", nn = "RSA-OAEP", Br = "SHA-256", Qr = "image/jpeg", ar = 9055 + 9047 * -1, rr = -1957 * -5 + -113 * 13 + -1 * 8276, Bn = "/dot-assets", yi = "dot_embedded_bg.wasm", Qn = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), wi = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, xr = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, bI = (g) => new Promise((I) => {
  setTimeout(I, g);
}), an = (g) => JSON.parse(JSON.stringify(g, (I, t) => typeof t == "number" ? ge(t) : t)), rn = () => Va.version, xn = (g) => new URL(g).hostname.replace("www.", ""), Er = () => xn(window.location.href) === "localhost", dg = (g) => Object.entries(g).map(([I, t]) => encodeURIComponent(I) + "=" + encodeURIComponent(t)).join("&"), sr = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g;
function cr(g, I) {
  let t;
  return (...A) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, g(...A);
    }, I));
  };
}
function dr(g) {
  return g.at(-(33 * -6 + -17 * -395 + -6516)) === "/" ? g.slice(-540 + 5 * 317 + -11 * 95, -(467 * 8 + -113 * -21 + 1 * -6108)) : g;
}
function En(g) {
  return "" + dr(g ?? "") + Bn;
}
const hr = () => "prod".toLowerCase() === "dev";
var Be;
class Jt extends Array {
  constructor(t) {
    super();
    L(this, Be);
    M(this, Be, t);
  }
  get size() {
    return D(this, Be);
  }
  pushFixed(...t) {
    if (t.length > D(this, Be)) {
      const A = t.slice(-D(this, Be));
      this.push(...A);
      return;
    }
    this.length === D(this, Be) && this.splice(-7567 + 9 * 36 + -7243 * -1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-15544 + -15544 * -1);
  }
}
Be = new WeakMap();
const lr = (g, I, t = Qr) => new Promise((A) => {
  g.toBlob((e) => {
    if (!e) throw new Error("Canvas to Blob failed");
    A(e);
  }, t, I);
}), ur = async (g) => lr(g, -2885 * 1 + -2089 * -2 + -1203), fr = (g, I) => {
  const t = document.createElement("canvas");
  t.width = I.width, t.height = I.height;
  const A = t.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, -158 * -27 + 83 * 118 + -5 * 2812, 4 * -754 + -6864 + 9880, t.width, t.height), t;
}, Dr = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: t } = I.getImageData(-8755 + 5879 * 1 + -4 * -719, -9035 + -435 * -13 + 3380, g.width, g.height);
  return t;
}, sn = (g, I, t, A) => {
  const e = g.getContext("2d");
  e && (e.beginPath(), A ? (e.fillStyle = t, e.fillRect(I.topLeft.x, I.topLeft.y, I.width, I.height)) : (e.strokeStyle = t, e.rect(I.topLeft.x, I.topLeft.y, I.width, I.height)), e.stroke());
}, j0 = (g, I, t) => {
  const { height: A, shiftX: e, shiftY: o, width: i } = I, C = {};
  C.x = e, C.y = o;
  const n = {};
  n.topLeft = C, n.width = i, n.height = A, n.color = t, sn(g, n, t);
}, Ft = (g, I, t, A = -9307 + -7 * -1238 + 641) => {
  const e = g.getContext("2d");
  e && (e.fillStyle = t, e.fillRect(I.x + A, I.y + A, 1869 * 1 + 194 + -1028 * 2, 3391 + 72 * -47), e.beginPath());
}, yr = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < e || g.y > e + t);
}, wr = (g, I) => Object.values(g).every((t) => yr(t, I));
function jg(g) {
  const { height: I, width: t } = Ya(g), A = (g.width - t) / 2, e = (g.height - I) / (860 * 8 + -10 * -886 + 86 * -183), o = {};
  return o.shiftX = A, o.shiftY = e, o.width = t, o.height = I, o;
}
function cn(g, I, t) {
  const { height: A, width: e } = t, o = N0(g.width, g.height), i = e - o * I * (2221 * -3 + 4 * 1373 + 1173), C = A - o * I * (-7078 + 5 * -436 + -20 * -463), n = (g.width - i) / (-2 * 4605 + -251 * -1 + 8961), B = (g.height - C) / (3144 + 1329 * -7 + 6161), a = {};
  return a.shiftX = n, a.shiftY = B, a.width = i, a.height = C, a;
}
function Oe(g, I) {
  const { shiftX: t, shiftY: A } = I, e = {};
  return e.x = g.x + t, e.y = g.y + A, e;
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return CA(Q - -722, a);
  }
  function A(C, n, B, a, Q) {
    return CA(Q - 224, B);
  }
  const e = g();
  function o(C, n, B, a, Q) {
    return CA(B - -556, n);
  }
  function i(C, n, B, a, Q) {
    return CA(Q - 808, B);
  }
  for (; ; )
    try {
      if (parseInt(A(368, 369, "FMvt", 375, 369)) / 1 + -parseInt(A(355, 359, "cLOj", 359, 368)) / 2 * (-parseInt(A(370, 360, "ignQ", 361, 365)) / 3) + -parseInt(i(951, 953, "03Uf", 959, 958)) / 4 + -parseInt(o(-423, "hf3p", -421, -410, -416)) / 5 + parseInt(o(-407, "03Uf", -416, -413, -423)) / 6 + parseInt(t(-583, -559, -573, "FVA(", -571)) / 7 * (parseInt(o(-415, "nzCV", -420, -423, -422)) / 8) + -parseInt(A(355, 362, "0WYL", 365, 361)) / 9 === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vg, 32 * 15299 + 2 * -235402 + 249806);
function CA(g, I) {
  const t = Vg();
  return CA = function(A, e) {
    A = A - 135;
    let o = t[A];
    if (CA.haXpnf === void 0) {
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
      CA.ujsxHP = a, g = arguments, CA.haXpnf = !0;
    }
    const C = t[-2198 + -48 * -162 + 1 * -5578], n = A + C, B = g[n];
    return B ? o = B : (CA.LAibYa === void 0 && (CA.LAibYa = !0), o = CA.ujsxHP(o, e), g[n] = o), o;
  }, CA(g, I);
}
function Vg() {
  const g = ["WQddTmoGW74bv8kZW6eMW5JdTNby", "WRmuW7CuW5JdUtu6DSkLw8o3WRu", "WQRcJSkuWPhdQCkIomkj", "W4KiWRWxWO0", "WQddSmoKW7Ghv8kYW7WhW5NdIMzm", "W6BcRCogdwq", "DrbkW5/dMq", "WOpcKXRdTKq", "W4tdN0tcOrqee0nIWP1Xoq", "WO8NWQFcK8o8", "ACoWrMZcIfxdQujDkSoFwxO", "W5ZdQxddJCkomeVcMSoewmkBebG", "umkEW7DHo2/dISkBW5mbCrO", "zCkuWO5voSk4pmkYqqldJSo1BG", "sCo8WOpdIZa5W67dT8kaAbpdHK4", "W5/dRJdcVCorBd3cHa", "WRaxW7etW5hdVZuetCkBD8oLWOe", "lNLeWOVcHCordKu", "Cmkhtvzv", "avPlW4xdQMtcI8oObMldRCoD", "kXFdTH0WWOddHCkIWP8dW7xcLW", "a33dICk5W6VdUN/dP0RcRCkFWR8", "WPpcHISw", "W7iTW5LuDSk0dJ9fWO/dMLm", "W7ePWO0UpCohoZu"];
  return Vg = function() {
    return g;
  }, Vg();
}
function pr({ assetsDirectoryPath: g, bramble: I }) {
  const [t, A] = nA();
  function e(n, B, a, Q, E) {
    return CA(E - 536, Q);
  }
  const o = t !== void (-2 * 556 + 9909 + -1 * 8797);
  K(() => {
    async function n() {
      await I[B(-444, -436, -437, "Tiub")](En(g));
      function B(x, s, d, h, r) {
        return CA(s - -582, h);
      }
      function a(x, s, d, h, r) {
        return CA(h - -856, d);
      }
      function Q(x, s, d, h, r) {
        return CA(h - -535, r);
      }
      function E(x, s, d, h, r) {
        return CA(r - -244, x);
      }
      A(I[E("5DuJ", -86, -84, -95, -89) + Q(-405, -401, -400, -393, "a3tx") + a(-710, -704, "u(po", -704) + "t"]());
    }
    n();
  }, [I, g, A]);
  const i = {};
  function C(n, B, a, Q, E) {
    return CA(Q - -800, a);
  }
  return i[e(692, 694, 695, "t[f!", 694) + C(-648, -642, "bO%1", -646)] = t, i[C(-640, -653, "FErg", -644) + "sh"] = o, i;
}
var dn = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(dn || {});
const NI = {};
NI.SIMD = "simd", NI.NO_SIMD = "no-simd";
const pi = NI, FI = {};
FI.Lower = "Lower", FI.Higher = "Higher";
const RI = FI, Mg = {};
Mg.VISIBLE = "VISIBLE", Mg.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Mg.HIDDEN = "HIDDEN";
const _g = Mg;
(function(g, I) {
  function t(B, a, Q, E, x) {
    return hA(B - -537, E);
  }
  function A(B, a, Q, E, x) {
    return hA(Q - -814, E);
  }
  function e(B, a, Q, E, x) {
    return hA(a - -869, x);
  }
  function o(B, a, Q, E, x) {
    return hA(Q - -899, B);
  }
  function i(B, a, Q, E, x) {
    return hA(B - -706, x);
  }
  for (var C = g(); ; )
    try {
      var n = parseInt(A(-641, -658, -647, "dLZ[", -639)) / 1 * (-parseInt(A(-644, -626, -631, "dLZ[", -620)) / 2) + -parseInt(t(-373, -377, -371, "c1Sp", -370)) / 3 * (parseInt(t(-372, -368, -369, "i$]P", -384)) / 4) + -parseInt(t(-371, -363, -375, "Zsgj", -363)) / 5 + parseInt(A(-642, -640, -644, "PxfB", -649)) / 6 * (parseInt(i(-527, -535, -522, -540, "Rc4C")) / 7) + -parseInt(A(-651, -652, -655, "ONG(", -646)) / 8 + parseInt(i(-531, -519, -540, -535, "ze#&")) / 9 * (parseInt(A(-642, -663, -651, "M[7R", -641)) / 10) + parseInt(e(-701, -701, -701, -690, "Y1J@")) / 11 * (parseInt(o("i$]P", -726, -722, -724, -708)) / 12);
      if (n === I) break;
      C.push(C.shift());
    } catch {
      C.push(C.shift());
    }
})(Xg, -1558230 * -1 + -41750 * 31 + 40928 * 16);
function hA(g, I) {
  var t = Xg();
  return hA = function(A, e) {
    A = A - (11429 + -8 * 1409);
    var o = t[A];
    if (hA.oFiDYp === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var p = 0, b = x.length; p < b; p++)
          s += "%" + ("00" + x.charCodeAt(p).toString(16)).slice(-2);
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
      hA.yEXeXe = C, g = arguments, hA.oFiDYp = !0;
    }
    var n = t[0], B = A + n, a = g[B];
    return a ? o = a : (hA.aXJwxI === void 0 && (hA.aXJwxI = !0), o = hA.yEXeXe(o, e), g[B] = o), o;
  }, hA(g, I);
}
function mr({ crosshatch: g }) {
  function I(A, e, o, i, C) {
    return hA(A - -249, o);
  }
  function t(A, e, o, i, C) {
    return hA(C - -184, e);
  }
  return g != null && g[I(-77, -87, "FML!") + "id"] ? RI[I(-76, -74, "Jg2D") + "r"] : RI[t(-27, "M[7R", -16, -8, -22)];
}
function Xg() {
  var g = ["W7RcSehdISoWWP9OW6vCW4/dR8o/Bq", "W63cHmkSwfBcVCkzWPtcO8oUWOZdQW", "WOFdRmkNWPbxtXny", "pCoouuT1FCkFW5K4", "r8kZWRBdR8kJjHuZfq", "WPdcHeTudSkcffWduSoXsa", "WPXXWP7cHMHBcG", "Awiiqty", "yCoCchz7", "hciOWO3dRfpdUmoiwSkKnrhdVG", "EuFdG17cPmkeW6q", "W6qByX9QvJNcLM0gkW", "W7BcSe3dJSo1W7i1W5HpW6xdKq", "WQ3dQSouoCkAWP4QW6y", "W7aBhCkaW5LCW41vBq", "W6LNWOXNWQ57WOewFWBcNaBcLNu", "WOhdQSokW6uvpHLyg8khWRJcVq", "dK8UW6xdJW9IzWNcSmk7", "WOldQmolW6qxFqn4emkEWPm", "WOhdH8oEEMZcP8orW6bWW4KEEq", "emono2HpWOhcNW", "fsaOW71ybbpdLCkEdCoKw8kD", "W6qvzHbSpMlcQe43bSo+W4u", "CCormgXIW5iVW6ddSq", "W5ddG29CW5u", "WQ3cMcSnWPDIW6etpSorWQNcVhvF", "w8kRlspcVmkBbq"];
  return Xg = function() {
    return g;
  }, Xg();
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return aA(B - -496, a);
  }
  function A(n, B, a, Q, E) {
    return aA(B - -785, Q);
  }
  function e(n, B, a, Q, E) {
    return aA(n - -52, a);
  }
  function o(n, B, a, Q, E) {
    return aA(B - 968, n);
  }
  const i = g();
  function C(n, B, a, Q, E) {
    return aA(Q - 111, B);
  }
  for (; ; )
    try {
      if (-parseInt(e(260, 275, "fT0C", 277, 254)) / 1 * (-parseInt(t(-196, -209, "U$QR", -194, -212)) / 2) + parseInt(C(384, "@bZI", 410, 400, 408)) / 3 + -parseInt(e(253, 270, "FHMU", 240, 246)) / 4 * (parseInt(o("e[pu", 1260, 1246, 1258, 1246)) / 5) + -parseInt(A(-493, -491, -477, "8i)!", -503)) / 6 + parseInt(C(398, "50#a", 422, 408, 407)) / 7 * (-parseInt(A(-499, -484, -486, "Eua0", -475)) / 8) + -parseInt(t(-177, -188, "drpT", -191, -177)) / 9 * (parseInt(A(-490, -489, -478, "drpT", -476)) / 10) + parseInt(t(-174, -189, "jbKO", -206, -178)) / 11 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(zg, -7 * -33703 + 455955 + -353756);
function aA(g, I) {
  const t = zg();
  return aA = function(A, e) {
    A = A - (4104 + 3823 * -1);
    let o = t[A];
    if (aA.HAAAbK === void 0) {
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
      aA.TCXZeH = a, g = arguments, aA.HAAAbK = !0;
    }
    const C = t[-1 * 5354 + 8514 + -4 * 790], n = A + C, B = g[n];
    return B ? o = B : (aA.QjcNWL === void 0 && (aA.QjcNWL = !0), o = aA.TCXZeH(o, e), g[n] = o), o;
  }, aA(g, I);
}
function zg() {
  const g = ["kdFdMsiaj8ketmkR", "kh1A", "DmoSEhBdSW", "zCoIWQrTW5a", "jsBcMmoqW4SkWOVdQgPUda", "pwpcLu3cLSk/i8kAWRTPtG", "aSk1tKNdKG", "CgddJ8kBWOa", "FSoNWOpcHb4brmo5ha", "W5ldP2/dTHO", "W73dS8kgWO7cUCoWq8oTW4rKWOpcLmo+W5C", "WQlcM04QWRRdNWXHW4BcHSo6AW", "WQZdQJ7cIZ8", "WQ03W7RcK8ojfXZdQCoKo8oZWP1fWOG", "emoEWPBcGvW", "sH0zuYlcSr0cASkWsq", "C8o3lmoIW4DpBmkGWRHyW79LWRa", "FwtcMG", "WPRcImoPWRJcOCoytmkztSo/e3G", "WQFcVf9SW7/dOgFdSmkB", "WRxcNSkAW6WIW7fPWOlcMa", "bCoEWQHvAmkzFclcJ2/dJW", "cftdVu/dSs3dMmkjwsJcLmo0", "W7ZdTSkcW5xdQmktaSk3W58", "WOb8cGrpbbW", "q3pdLmka", "WOpcOZBcVfyPW4S2wJddOSoI", "CSkey8kpWOyjeq", "W4xdOc/cL3W", "WQxcU18EWQFdOxldV8kmW4tcKW", "lZddNvvCoCkbwCksW4vK", "r8oIfqxcJ8oOw8kWkSkXWRn+wq", "AItdNHddMG", "WQhcMKDmW6xcJrjvW5W"];
  return zg = function() {
    return g;
  }, zg();
}
function Gr({ assetsDirectoryPath: g, children: I, bramble: t }) {
  const A = {};
  A[B("CXhU", 294, 311, 301) + "le"] = t;
  function e(x, s, d, h, r) {
    return aA(s - -181, d);
  }
  A[E(967, 965, "1iu9", 978) + E(996, 994, "chod", 992) + E(996, 981, "@bZI", 989) + e(108, 107, "Eua0")] = g;
  const { sunfish: o, crosshatch: i } = pr(A);
  function C(x, s, d, h, r) {
    return aA(s - -232, d);
  }
  const n = {};
  n[e(132, 123, "Eua0") + B("tBP6", 296, 298, 290)] = i;
  function B(x, s, d, h, r) {
    return aA(h - -10, x);
  }
  const a = uA(() => ({ redfin: mr(n), sunfish: o, crosshatch: i, bramble: t }), [o, i, t]), Q = {};
  function E(x, s, d, h, r) {
    return aA(h - 683, d);
  }
  return Q[E(995, 990, "8i)!", 986)] = a, Q[E(980, 979, "q*Wg", 982) + B("BKIL", 279, 284, 288)] = I, y(Pg[E(989, 984, "AR@#", 974) + C(66, 82, "50#a")], Q);
}
function $g() {
  var g = ["W5hcTKNdPxddNCkewCoNWQ09", "cedcGcKEptJdVW", "ACorqIRcHCkWW4NcNW", "cehdReb0nbVdNSoCsKW", "cmo5hZDzneqBW4uZWRtdJW", "EJ7dUdLCqYzAW5VcU8oEW70", "WQJcR1NcN8kNFmoatq", "WQ/cQ1xcUCk3yCodDa", "W47dJSkFqLTIW6yr", "W6NdGSoMoSoOgmkPWPWRW6BdI21Z", "eJ/cGN9DWQtdUmkL", "WRpcUwjqWP5QFXm", "wCo/WPn0WQZcStXqi8kHxmoJxG", "nmo4WOpdHSoVhXhdHmo4WOlcVa", "W4hdIH8NW7L1t3JcV8ovW7pdO8ky", "FhNcI8oxWOfDWOJcShXeWQLd", "u8oBmCkRWPNcRtfQW7vQW5ZdPa", "WR/dG8oBtZtcPqS", "BCkBheJcNIaVWQ0wmMe8", "ddVcS2xdGbJdTdVdP8otW4VdVCkw", "WO9mnrqIlSkCsa", "zCoPvXddNMi7", "hSoVW7RcJmofvMPmWRqbCh0"];
  return $g = function() {
    return g;
  }, $g();
}
function FA(g, I) {
  var t = $g();
  return FA = function(A, e) {
    A = A - (-1 * 828 + 3548 * -2 + 8161);
    var o = t[A];
    if (FA.ZcpcEU === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var p = 0, b = x.length; p < b; p++)
          s += "%" + ("00" + x.charCodeAt(p).toString(16)).slice(-2);
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
      FA.qDBRbm = C, g = arguments, FA.ZcpcEU = !0;
    }
    var n = t[-1835 * 3 + -8951 + -104 * -139], B = A + n, a = g[B];
    return a ? o = a : (FA.FniolN === void 0 && (FA.FniolN = !0), o = FA.qDBRbm(o, e), g[B] = o), o;
  }, FA(g, I);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return FA(Q - -79, E);
  }
  function A(n, B, a, Q, E) {
    return FA(a - -492, Q);
  }
  var e = g();
  function o(n, B, a, Q, E) {
    return FA(E - -451, a);
  }
  function i(n, B, a, Q, E) {
    return FA(B - -215, Q);
  }
  for (; ; )
    try {
      var C = parseInt(o(-216, -206, "0l$o", -204, -214)) / 1 * (-parseInt(A(-251, -260, -249, "srW0", -247)) / 2) + -parseInt(i(18, 27, 35, "Oum#", 32)) / 3 + parseInt(A(-245, -251, -248, "1QTP", -244)) / 4 * (-parseInt(t(161, 165, 171, 169, "#p(6")) / 5) + -parseInt(o(-209, -223, "^*lD", -211, -212)) / 6 * (parseInt(o(-191, -196, "nWuO", -200, -198)) / 7) + -parseInt(A(-238, -228, -234, "LYHQ", -238)) / 8 + parseInt(t(184, 176, 181, 177, "!r1d")) / 9 * (parseInt(o(-219, -219, "(!sn", -200, -211)) / 10) + -parseInt(o(-201, -200, "Y[rh", -202, -196)) / 11 * (-parseInt(A(-252, -244, -247, "O2Mb", -252)) / 12);
      if (C === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($g, -52035 * -1 + 448855 + -61526);
function kr({ analytics: g, crosshatch: I }) {
  return I !== void (-8603 + 8231 * -1 + 16834) && !I.isAnalyticsDisabled ? g : void 0;
}
function br({ analytics: g, appKey: I, redfin: t, crosshatch: A, bramble: e }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = kr(o);
  return K(() => {
    i && i.init(I);
  }, [i, I]), K(() => {
    A && (console.info("Analytics is " + (A.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, e.getCustomerName()));
  }, [i, e, A, t]), K(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function Nr({
  analytics: g,
  appKey: I,
  children: t
}) {
  const { redfin: A, crosshatch: e, bramble: o } = Et(), i = br({ analytics: g, redfin: A, appKey: I, crosshatch: e, bramble: o }), C = uA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ y(qg.Provider, { value: C, children: t });
}
const A0 = nt(void 0);
A0.displayName = "CameraServiceContext";
function Fr() {
  const g = se(A0);
  if (g === void 0)
    throw new Error(`${A0.displayName} must be used within a CameraServiceProvider`);
  return g;
}
async function hn() {
  return navigator.mediaDevices.enumerateDevices();
}
async function V0() {
  return (await hn()).filter((I) => I.kind === "videoinput");
}
function _0(g) {
  g.getTracks().forEach((t) => t.stop());
}
function mi(g) {
  return g.getVideoTracks()[1812 + 1 * -4633 + -2821 * -1];
}
const Lg = {};
Lg.width = 1920, Lg.height = 1080, Lg.facingMode = so.FRONT;
const Rr = Lg;
var me, Xe, YA;
class ln {
  constructor({ defaultVideoConstrains: I = Rr, minCameraShorterSide: t = ir } = {}) {
    L(this, me);
    L(this, Xe, []);
    L(this, YA, null);
    const A = {};
    A.defaultVideoConstrains = I, A.minCameraShorterSide = t, M(this, me, A);
  }
  get availableCameraProperties() {
    return D(this, Xe);
  }
  get mediaStream() {
    return D(this, YA);
  }
  get videoTrack() {
    return D(this, YA) ? mi(D(this, YA)) : void (1166 + -9 * 191 + 553 * 1);
  }
  get isCameraActive() {
    var I;
    return !!((I = D(this, YA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(I);
    _0(t);
  }
  async open(I = {}) {
    wi() && await bI(1938 + -124 * 12), M(this, YA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await V0();
    if (I.length <= 1) return;
    const t = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), e = I.findIndex((C) => C.deviceId === A.deviceId), o = I[e + (-1 * 3923 + -11 * -551 + -2137)] ?? I[351 * -25 + 9887 + -2 * 556], i = this.getConstraints(t, o);
    this.close(), await this.open(i);
  }
  close() {
    D(this, YA) && (_0(D(this, YA)), M(this, YA, null));
  }
  async getProperties() {
    const I = await this.getDeviceName(), t = this.getSettings(), A = { ...t };
    A.deviceName = I;
    const e = {};
    return e.currentCameraProperties = A, e.availableCameraProperties = D(this, Xe), e;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const I = this.getSettings();
    if (!I.width) throw new H("Video width is undefined");
    if (!I.height) throw new H("Video height is undefined");
    const t = {};
    return t.width = I.width, t.height = I.height, t;
  }
  async getDeviceName() {
    const I = this.getSettings(), t = await hn(), A = t.find((e) => e.deviceId === I.deviceId);
    return A == null ? void 0 : A.label;
  }
  async getBestCameraInfo(I) {
    return I === so.FRONT ? void (6 * 947 + 7499 * 1 + -1883 * 7) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Qn() ? (await V0()).find((A) => A.label.includes("back") && A.label.includes("0")) : void (3 * -78 + -5438 * -1 + -1301 * 4);
  }
  async collectAvailableCamerasInfo() {
    const I = await V0();
    for (const t of I) {
      wi() && await bI(-1399 * 7 + 22 * 4 + -3 * -3385);
      try {
        const A = {};
        A.deviceId = t.deviceId, A.width = 480;
        const e = {};
        e.video = A;
        const o = await navigator.mediaDevices.getUserMedia(e), i = mi(o);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const C = i.getSettings(), n = { ...C };
        n.deviceName = i.label;
        const B = {};
        B.cameraProperties = n;
        const a = B;
        D(this, Xe).push(a), _0(o);
      } catch (A) {
        A instanceof Error && H.logError(A);
      }
    }
  }
  getConstraints(I, t) {
    const A = { ...D(this, me).defaultVideoConstrains, ...I };
    A.deviceId = t ? { exact: t.deviceId } : void (8315 * -1 + 7451 + 18 * 48);
    const e = {};
    return e.video = A, e.audio = !1, e;
  }
  checkVideoTrackSettings() {
    var A;
    const I = (A = this.videoTrack) == null ? void 0 : A.getSettings();
    if (!(I != null && I.height) || !(I != null && I.width))
      throw this.close(), new H("Could not init camera settings");
    if (typeof D(this, me).minCameraShorterSide != "number") return;
    if (Math.min(I == null ? void 0 : I.width, I == null ? void 0 : I.height) < D(this, me).minCameraShorterSide)
      throw this.close(), new H("Could not init video because of low camera resolution: " + I.width + "x" + I.height + ".");
  }
}
me = new WeakMap(), Xe = new WeakMap(), YA = new WeakMap();
var Ht;
class Sr {
  constructor(I, t) {
    L(this, Ht, !1);
    this.videoHandler = I, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    D(this, Ht) || (M(this, Ht, !0), await ln.requestPermission());
  }
  async startVideoStream(I = {}) {
    await this.requestCameraPermission(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, t);
    await this.cameraHandler.open(A), xr() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
  }
  takePhoto() {
    var e;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const I = (e = this.cameraHandler.videoTrack) == null ? void 0 : e.getSettings();
    if (!(I != null && I.width)) throw new H("Cant take photo - video width is undefined");
    if (!(I != null && I.height)) throw new H("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = I.width, t.height = I.height;
    const A = t.getContext("2d");
    if (!A) throw new H("Cant take photo - cant create context");
    return A.drawImage(this.videoHandler.videoElement, 2294 * -1 + 2 * 3571 + -4848, 0), { image: t, timestamp: Date.now() };
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
Ht = new WeakMap();
var $A;
class Mr {
  constructor(I) {
    L(this, $A);
    M(this, $A, I);
  }
  get videoElement() {
    return D(this, $A);
  }
  async play(I) {
    D(this, $A).srcObject = I, await D(this, $A).play();
  }
  stop() {
    D(this, $A).srcObject = null;
  }
  hasSrcObject() {
    return !!D(this, $A).srcObject;
  }
}
$A = new WeakMap();
function Lr(g) {
  const I = AA(null), [t, A] = nA(), [e, o] = nA(), { handleError: i, setIsCameraReady: C } = xt(), n = GA((a) => {
    o((Q) => sr(a, Q));
  }, []);
  K(() => {
    if (!I.current) {
      i(new H("Something went wrong during video initialization"));
      return;
    }
    const a = new Mr(I.current), Q = new ln(), E = new Sr(a, Q);
    return (async () => {
      try {
        const s = {};
        s.facingMode = g, await E.startVideoStream(s);
      } catch (s) {
        if (s instanceof Error) {
          i(H.fromCameraError(s));
          return;
        }
      }
      A(E), C(!0), n(E.getCameraResolution());
    })(), () => {
      E == null || E.stopStreaming(), C(!1), A(void (-1877 * -4 + -3280 + -4228));
    };
  }, [g, i, C, I, n]);
  const B = {};
  return B.cameraService = t, B.cameraResolution = e, B.onCameraResolutionChange = n, B.videoRef = I, B;
}
function vr({ cameraFacing: g, children: I }) {
  const { cameraResolution: t, cameraService: A, onCameraResolutionChange: e, videoRef: o } = Lr(g), i = uA(
    () => ({
      cameraService: A,
      cameraResolution: t,
      onCameraResolutionChange: e,
      videoRef: o
    }),
    [A, t, e, o]
  );
  return /* @__PURE__ */ y(A0.Provider, { value: i, children: I });
}
const ho = (g, I) => {
  const t = {};
  t.detail = I, document.dispatchEvent(new CustomEvent(g, t));
};
function Jr(g) {
  const I = {};
  I.instruction = g;
  const t = I;
  ho(DI.REQUEST_CAPTURE, t);
}
function Wr({ children: g, ...I }) {
  const t = I.cameraFacing ?? so.FRONT;
  return /* @__PURE__ */ y(vr, { cameraFacing: t, children: g });
}
let R;
const Ae = new Array(7468 * 1 + 839 * -4 + 3 * -1328).fill(void 0);
Ae.push(void 0, null, !0, !1);
function SI(g) {
  return Ae[g];
}
let jA = -144 + -36 * -4, pt = null;
function vg() {
  return (pt === null || pt.byteLength === -754 * -1 + 6575 + -1 * 7329) && (pt = new Uint8Array(R.memory.buffer)), pt;
}
const Jg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Yr = typeof Jg.encodeInto == "function" ? function(g, I) {
  return Jg.encodeInto(g, I);
} : function(g, I) {
  const t = Jg.encode(g);
  I.set(t);
  const A = {};
  return A.read = g.length, A.written = t.length, A;
};
function Wt(g, I, t) {
  if (t === void 0) {
    const C = Jg.encode(g), n = I(C.length, 1) >>> 14979 + 3 * -4993;
    return vg().subarray(n, n + C.length).set(C), jA = C.length, n;
  }
  let A = g.length, e = I(A, 1 * -6277 + -116 + -3197 * -2) >>> -7176 + 1 * -1979 + 9155;
  const o = vg();
  let i = -164 * -2 + 6299 + -6627;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > -4960 + -11 * 218 + 1 * 7485) break;
    o[e + i] = C;
  }
  if (i !== A) {
    i !== 1 * -7784 + 2 * -2147 + 12078 && (g = g.slice(i)), e = t(e, A, A = i + g.length * (4 * 1465 + -4068 + 1789 * -1), 1) >>> 13 * -463 + -3068 + -233 * -39;
    const C = vg().subarray(e + i, e + A), n = Yr(g, C);
    i += n.written, e = t(e, A, i, 1) >>> -6883 + 1 * 6883;
  }
  return jA = i, e;
}
function un(g) {
  return g == null;
}
let mt = null;
function KA() {
  return (mt === null || mt.byteLength === -9 * 937 + 1 * 8747 + -314 * 1) && (mt = new Int32Array(R.memory.buffer)), mt;
}
let Rt = Ae.length;
function Ur(g) {
  g < 10191 + 3353 * -3 || (Ae[g] = Rt, Rt = g);
}
function fn(g) {
  const I = SI(g);
  return Ur(g), I;
}
const MI = {};
MI.ignoreBOM = !0, MI.fatal = !0;
const Dn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", MI) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Dn.decode();
function e0(g, I) {
  return g = g >>> 258 * -23 + 2 * 1828 + 2278, Dn.decode(vg().subarray(g, g + I));
}
function LI(g) {
  Rt === Ae.length && Ae.push(Ae.length + (729 * 6 + -5617 + 1244));
  const I = Rt;
  return Rt = Ae[I], Ae[I] = g, I;
}
let Gt = null;
function yn() {
  return (Gt === null || Gt.byteLength === 0) && (Gt = new Uint32Array(R.memory.buffer)), Gt;
}
function Gi(g, I) {
  const t = I(g.length * 4, 4) >>> 0, A = yn();
  for (let e = 39 * 194 + 9605 + -17171 * 1; e < g.length; e++)
    A[t / 4 + e] = LI(g[e]);
  return jA = g.length, t;
}
function ki(g, I) {
  g = g >>> -8664 + -2 * 634 + -764 * -13;
  const t = yn(), A = t.subarray(g / (-216 * -27 + -11 * 297 + -197 * 13), g / (-1903 + -195 * -19 + 58 * -31) + I), e = [];
  for (let o = 8939 + 9 * -917 + -686; o < A.length; o++)
    e.push(fn(A[o]));
  return e;
}
function Hr(g, I) {
  const t = Wt(g, R.__wbindgen_malloc, R.__wbindgen_realloc), A = jA, e = Wt(I, R.__wbindgen_malloc, R.__wbindgen_realloc), o = jA, i = R.is_mobile_supported(t, A, e, o);
  return lo.__wrap(i);
}
const vI = {};
vI.register = () => {
}, vI.unregister = () => {
};
const bi = typeof FinalizationRegistry > "u" ? vI : new FinalizationRegistry((g) => R.__wbg_licensevalidationresult_free(g >>> -323 * -15 + -2290 * 1 + -7 * 365));
class lo {
  static __wrap(I) {
    I = I >>> -9120 + -15 * -93 + 7725;
    const t = Object.create(lo.prototype);
    return t.__wbg_ptr = I, bi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = 64 * -120 + -216 * -19 + -298 * -12, bi.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    R.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, t, A, e, o) {
    var i = un(t) ? 0 : Wt(t, R.__wbindgen_malloc, R.__wbindgen_realloc), C = jA;
    const n = Gi(A, R.__wbindgen_malloc), B = jA, a = Gi(e, R.__wbindgen_malloc), Q = jA, E = Wt(o, R.__wbindgen_malloc, R.__wbindgen_realloc), x = jA, s = R.licensevalidationresult_new(I, i, C, n, B, a, Q, E, x);
    return this.__wbg_ptr = s >>> 1 * 837 + 2 * -755 + -673 * -1, this;
  }
  get is_valid() {
    return R.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1126 + -1 * 6707 + 5581;
  }
  get features_json() {
    try {
      const A = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = KA()[A / (-3335 * 1 + 2143 + 1196) + (128 * -62 + 5965 + 1971)], t = KA()[A / 4 + (2 * -414 + 5955 * -1 + 6784)];
      let e;
      return I !== -2345 * 1 + -1990 + 4335 && (e = e0(I, t).slice(), R.__wbindgen_free(I, t * (9979 + 2 * -4989), -3719 * 1 + 1153 * -5 + -271 * -35)), e;
    } finally {
      R.__wbindgen_add_to_stack_pointer(8 * -367 + -3242 + 6194);
    }
  }
  get errors() {
    try {
      const e = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_errors(e, this.__wbg_ptr);
      var I = KA()[e / (1867 + 6473 * -1 + 4610) + (2553 + -3659 * 1 + 79 * 14)], t = KA()[e / (12977 + -1 * 12973) + (11 * -854 + 7031 + 2364)], A = ki(I, t).slice();
      return R.__wbindgen_free(I, t * (-3 * -1156 + 7116 + -2116 * 5), -2 * 3769 + 6566 + 976), A;
    } finally {
      R.__wbindgen_add_to_stack_pointer(1323 + -1307 * 1);
    }
  }
  get warnings() {
    try {
      const e = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_warnings(e, this.__wbg_ptr);
      var I = KA()[e / (-3 * -486 + 1 * -3133 + 1679) + (-6464 + -1 * 3516 + 499 * 20)], t = KA()[e / (-1706 + -4 * 821 + 4994) + (-18 * 509 + 2516 + 6647)], A = ki(I, t).slice();
      return R.__wbindgen_free(I, t * (1781 + -3979 * 2 + 6181), 4), A;
    } finally {
      R.__wbindgen_add_to_stack_pointer(-14602 + 1 * 14618);
    }
  }
  get customer() {
    let I, t;
    try {
      const o = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = KA()[o / (-3607 * 1 + 1 * 3304 + 307) + (7453 + 62 * -30 + -5593)], e = KA()[o / (4597 * -2 + 7 * 1097 + -217 * -7) + (1 * 4399 + 6850 + -11248)];
      return I = A, t = e, e0(A, e);
    } finally {
      R.__wbindgen_add_to_stack_pointer(-4399 + 4 * 396 + 2831), R.__wbindgen_free(I, t, 6581 + -9 * -983 + -15427);
    }
  }
}
async function Kr(g, I) {
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
function Or() {
  const g = {};
  return g.wbg = {}, g.wbg.__wbindgen_string_get = function(I, t) {
    const A = SI(t), e = typeof A == "string" ? A : void 0;
    var o = un(e) ? 85 * -19 + -9913 + 44 * 262 : Wt(e, R.__wbindgen_malloc, R.__wbindgen_realloc), i = jA;
    KA()[I / (1645 + 547 * -3) + (-1 * 6793 + -9083 + 15877 * 1)] = i, KA()[I / (9450 * -1 + 8235 + 1219) + (5928 + 9 * 357 + -9141)] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    fn(I);
  }, g.wbg.__wbindgen_string_new = function(I, t) {
    const A = e0(I, t);
    return LI(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return LI(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return SI(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, t) {
    throw new Error(e0(I, t));
  }, g;
}
function Tr(g, I) {
  return R = g.exports, wn.__wbindgen_wasm_module = I, mt = null, Gt = null, pt = null, R;
}
async function wn(g) {
  if (R !== void 0) return R;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhghAwJAAkAgACAAKAIMIgFGBEAgAEEUQRAgAEEUaiIBKAIAIgQbaigCACICDQFBACEBDAILIAAoAggiAiABNgIMIAEgAjYCCAwBCyABIABBEGogBBshBANAIAQhBSACIgFBFGoiAiABQRBqIAIoAgAiAhshBCABQRRBECACG2ooAgAiAg0ACyAFQQA2AgALAkAgA0UNAAJAIAAgACgCHEECdEHUrcIAaiICKAIARwRAIANBEEEUIAMoAhAgAEYbaiABNgIAIAENAQwCCyACIAE2AgAgAQ0AQfCwwgBB8LDCACgCAEF+IAAoAhx3cTYCAA8LIAEgAzYCGCAAKAIQIgIEQCABIAI2AhAgAiABNgIYCyAAQRRqKAIAIgBFDQAgAUEUaiAANgIAIAAgATYCGAsLrwIBBH9BHyECIABCADcCECABQf///wdNBEAgAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+aiECCyAAIAI2AhwgAkECdEHUrcIAaiEEAkBB8LDCACgCACIFQQEgAnQiA3FFBEBB8LDCACADIAVyNgIAIAQgADYCACAAIAQ2AhgMAQsCQAJAIAEgBCgCACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBH3FBACACQR9HG3QhBANAIAMgBEEddkEEcWpBEGoiBSgCACICRQ0CIARBAXQhBCACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBSAANgIAIAAgAzYCGAsgACAANgIMIAAgADYCCAvBAgIEfwF+IwBBQGoiAyQAQQEhBQJAIAAtAAQNACAALQAFIQUCQCAAKAIAIgQoAhwiBkEEcUUEQCAFRQ0BQQEhBSAEKAIUQYXPwABBAiAEQRhqKAIAKAIMEQAARQ0BDAILIAVFBEBBASEFIAQoAhRBuajAAEEBIARBGGooAgAoAgwRAAANAiAEKAIcIQYLQQEhBSADQQE6ABsgA0E0akGQqMAANgIAIAMgBCkCFDcCDCADIANBG2o2AhQgAyAEKQIINwIkIAQpAgAhByADIAY2AjggAyAEKAIQNgIsIAMgBC0AIDoAPCADIAc3AhwgAyADQQxqNgIwIAEgA0EcaiACEQEADQEgAygCMEGyqMAAQQIgAygCNCgCDBEAACEFDAELIAEgBCACEQEAIQULIABBAToABSAAIAU6AAQgA0FAayQAC8QCAgR/AX4jAEFAaiIDJAAgACgCACEFIAACf0EBIAAtAAgNABogACgCBCIEKAIcIgZBBHFFBEBBASAEKAIUQYXPwABBtqjAACAFG0ECQQEgBRsgBEEYaigCACgCDBEAAA0BGiABIAQgAigCDBEBAAwBCyAFRQRAQQEgBCgCFEG3qMAAQQIgBEEYaigCACgCDBEAAA0BGiAEKAIcIQYLIANBAToAGyADQTRqQZCowAA2AgAgAyAEKQIUNwIMIAMgA0EbajYCFCADIAQpAgg3AiQgBCkCACEHIAMgBjYCOCADIAQoAhA2AiwgAyAELQAgOgA8IAMgBzcCHCADIANBDGo2AjBBASABIANBHGogAigCDBEBAA0AGiADKAIwQbKowABBAiADKAI0KAIMEQAACzoACCAAIAVBAWo2AgAgA0FAayQAIAALkgIBAX8jAEEQayICJAAgACgCACEAAn8gASgCACABKAIIcgRAIAJBADYCDCABIAJBDGoCfwJAAkAgAEGAAU8EQCAAQYAQSQ0BIABBgIAETw0CIAIgAEE/cUGAAXI6AA4gAiAAQQx2QeABcjoADCACIABBBnZBP3FBgAFyOgANQQMMAwsgAiAAOgAMQQEMAgsgAiAAQT9xQYABcjoADSACIABBBnZBwAFyOgAMQQIMAQsgAiAAQT9xQYABcjoADyACIABBEnZB8AFyOgAMIAIgAEEGdkE/cUGAAXI6AA4gAiAAQQx2QT9xQYABcjoADUEECxARDAELIAEoAhQgACABQRhqKAIAKAIQEQEACyACQRBqJAALlgIBAn8jAEEQayICJAACQCAAIAJBDGoCfwJAIAFBgAFPBEAgAkEANgIMIAFBgBBJDQEgAUGAgARJBEAgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwDCyACIAFBP3FBgAFyOgAPIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADSACIAFBEnZBB3FB8AFyOgAMQQQMAgsgACgCCCIDIAAoAgRGBEAgACADEIoBIAAoAgghAwsgACADQQFqNgIIIAAoAgAgA2ogAToAAAwCCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgsQ5AELIAJBEGokAEEAC5YCAQJ/IwBBEGsiAiQAAkAgACACQQxqAn8CQCABQYABTwRAIAJBADYCDCABQYAQSQ0BIAFBgIAESQRAIAIgAUE/cUGAAXI6AA4gAiABQQx2QeABcjoADCACIAFBBnZBP3FBgAFyOgANQQMMAwsgAiABQT9xQYABcjoADyACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA0gAiABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAyAAKAIERgRAIAAgAxDhASAAKAIIIQMLIAAgA0EBajYCCCAAKAIAIANqIAE6AAAMAgsgAiABQT9xQYABcjoADSACIAFBBnZBwAFyOgAMQQILEOUBCyACQRBqJABBAAuuAgEFfyMAQdAAayICJAAgACgCACEDIAJBADYCOCACIAM2AkBBfyEAA0AgAEEBaiEAIAJBEGogAkE4ahA2IAIoAhBBAUYNAAsgAkEANgIoIAIgAzYCJCACQQA2AhwgAUEYaigCACEDIAEoAhQhAQNAAkAgAkEIaiACQRxqEDYgAigCCCIFRQ0AIAIoAgwhBiACIAIoAihBAWoiBDYCKCACIAY2AiwgAkEBNgI8IAJB1JfCADYCOCACQgE3AkQgAkEENgI0IAIgAkEwajYCQCACIAJBLGo2AjAgASADIAJBOGoQLw0AIARFIAAgBE1yDQEgAkEBNgI8IAJB1KTAADYCOCACQgA3AkQgAkGMrMIANgJAIAEgAyACQThqEC9FDQELCyACQdAAaiQAIAVBAEcL/wECAn8BfgJAIAJFBEAgAEEAOgABDAELAkACQAJAAkACQCABLQAAQStrDgMAAgECCyACQQFrIgJFDQIgAUEBaiEBDAELIAJBAUYNAQsCQCACQQlPBEADQCACRQ0CIAEtAABBMGsiBEEJSw0DIAOtQgp+IgVCIIinDQQgAUEBaiEBIAJBAWshAiAEIAWnIgRqIgMgBE8NAAsgAEECOgABDAQLA0AgAS0AAEEwayIEQQlLDQIgAUEBaiEBIAQgA0EKbGohAyACQQFrIgINAAsLIAAgAzYCBCAAQQA6AAAPCyAAQQE6AAEMAQsgAEECOgABIABBAToAAA8LIABBAToAAAumAgEDfyMAQTBrIgkkACABBH8gCSACNgIsIAkgAjYCKCAJIAE2AiQgCUEYaiAJQSRqEMQBIAkoAhwhASAJKAIYBUEACyEKIAlBEGogAyAEEDsgCSgCFCEDIAkoAhAhCyAJQQhqIAUgBhA7IAkoAgwhBCAJKAIIIQYgCSAINgIsIAkgCDYCKCAJIAc2AiQgCSAJQSRqEMQBQbixwgAtAAAaIAkoAgQhBSAJKAIAIQdBOBAKIgJFBEAACyACIAE2AjAgAiABNgIsIAIgCjYCKCACIAc2AhwgAiAGNgIQIAIgCzYCBCACQQA2AgAgAiAAQQBHOgA0IAIgBTYCJCACIAU2AiAgAiAENgIYIAIgBDYCFCACIAM2AgwgAiADNgIIIAlBMGokACACC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEEBIAAoAgAiACgCAEECayIDIANBBE8bQQFrDgMBAgMACyABKAIUQZiVwgBBJiABQRhqKAIAKAIMEQAADAMLIAIgADYCDCACQRxqQgE3AgAgAkEBNgIUIAJBzJXCADYCECACQSs2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwwCCyABKAIUQdSVwgBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJBnJbCADYCECACQRU2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEECIAAoAgAiACgCAEEEayIDIANBBE8bQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfiEwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEGAhcEAQRogAUEYaigCACgCDBEAAAwCCyACIAA2AgwgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEvNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAQsgASgCFEGahcEAQRQgAUEYaigCACgCDBEAAAsgAkEwaiQAC7ECAgJ/AX4jAEEgayICJAACQCABLQAAQQJGBEAgAUEQaikDACEEAkACQAJAIAEoAghBAWsOAgECAAsgAAJ/IARCgICAgAhaBEAgAkEBOgAIIAIgBDcDECAAIAJBCGogAkEfakGAgMAAEJwBNgIEQQEMAQsgACAEPgIEQQALNgIADAMLIAACfyAEQoCAgIAIfEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQYCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBgIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQYCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAuqAgICfwF+IwBBIGsiAiQAAkAgAS0AAEECRgRAIAFBEGopAwAhBAJAAkACQCABKAIIQQFrDgIBAgALIAACfyAEQoCAgIAQWgRAIAJBAToACCACIAQ3AxAgACACQQhqIAJBH2pBkIDAABCcATYCBEEBDAELIAAgBD4CBEEACzYCAAwDCyAAAn8gBEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQZCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBkIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQZCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAugAgEBfyMAQTBrIgIkAAJ/AkACQAJAAkAgACgCACIAKAIAQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfSFwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEH8hcEAQScgAUEYaigCACgCDBEAAAwCCyABKAIUQaOGwQBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJB3IbBADYCECACQSw2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC7kCAQF/IwBBEGsiAiQAAn8CQAJAAkACQAJAAkACQAJAIAAtAABBAWsOBwECAwQFBgcACyACIABBBGo2AgggAUHspMAAQQpB9qTAAEEDIAJBCGpB3KTAABCNAQwHCyABKAIUQfmkwABBCSABQRhqKAIAKAIMEQAADAYLIAEoAhRBgqXAAEEHIAFBGGooAgAoAgwRAAAMBQsgAiAAQQFqNgIMIAFBiaXAAEENQczTwABBBiACQQxqQfihwAAQjQEMBAsgASgCFEGWpcAAQQUgAUEYaigCACgCDBEAAAwDCyABKAIUQfqDwQBBBiABQRhqKAIAKAIMEQAADAILIAEoAhRBm6XAAEENIAFBGGooAgAoAgwRAAAMAQsgASgCFEGopcAAQQsgAUEYaigCACgCDBEAAAsgAkEQaiQAC40CAQJ/IwBBEGsiAiQAAkAgACgCACIDLQAARQRAIAEoAhRBsMbAAEEEIAFBGGooAgAoAgwRAAAhAAwBC0EBIQAgAiADQQFqNgIAIAIgASgCFEG0xsAAQQQgAUEYaigCACgCDBEAADoADCACIAE2AgggAkEAOgANIAJBADYCBCACQQRqIAJBvKjAABBiIAItAAwhASgCACIDRQRAIAFBAEchAAwBCyABDQAgAigCCCEBAkAgA0EBRw0AIAItAA1FDQAgAS0AHEEEcQ0AIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANAQsgASgCFEG0nsIAQQEgAUEYaigCACgCDBEAACEACyACQRBqJAAgAAvtAQEFfyMAQeAAayIFJAAgBSACIARqQQFqEHwgBSgCKCIGQQRNBH8gBUEIagUgBSgCBCEGIAUoAggLIAYgASACIAMgBBAGIAVBMGoiASAFQTAQvgIaIAFBBHIhByAFQThqIQggBUHYAGohAyAFKAI4IQEDQCAIIQYgBSgCWCIEIQIgBEEFSSIJRQRAIAEhBiAFKAI0IQILAkAgAkUNACACQQN0IAZqQQhrKQMAQgBSDQAgAyECIAlFBEAgBSgCNCEEIAchAgsgBEUNASACIARBAWs2AgAMAQsLIAAgBUEwakEwEL4CGiAFQeAAaiQAC4ECAQh/IwBBEGsiBCQAIAAoAggiAyAAKAIEIgUgAyAFSxshByAAKAIAIQYCQAJAAkACQANAIAJFBEBBACEDDAULIAMgB0YNASAAIANBAWoiCDYCCCACQQFrIQIgAyAGaiEJIAEtAAAgCCEDIAFBAWohASAJLQAARg0ACyAEQQhqIAYgBSADELYBQbixwgAtAAAaIAQoAgwhASAEKAIIIQJBFBAKIgNFDQEgA0EJNgIADAILIAQgBiAFIAcQtgFBuLHCAC0AABogBCgCBCEBIAQoAgAhAkEUEAoiA0UNACADQQU2AgAMAQsACyADIAI2AgwgAyABNgIQCyAEQRBqJAAgAwvoAQEEfyMAQeAAayIDJAAgASgCKCIFIQQgBUEFTwRAIAEoAgQhBAsCQAJAAn8gAigCKCIGQQVPBEAgBCACKAIETw0CIAIoAgQhBiACKAIIDAELIAQgBk8NASACQQhqCyECIANBADYCMCADQQA2AlggA0EwaiIEIAIgAiAGQQN0ahBDIAAgAyAEQTAQvgIgARAUDAELIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AjAgA0EANgJYIANBMGoiBCABIAEgBUEDdGoQQyAAIAMgBEEwEL4CIAIQFAsgA0HgAGokAAvgAQEHfwJAIAAtAABBBUcNACAAKAIEIgVFDQAgAEEIaigCACEGA0AgBUGMAmohACAFLwGSAyIJQQxsIQdBfyEDAkACQANAIAdFBEAgCSEDDAILIAAoAgghBCAAKAIAIQggA0EBaiEDIAdBDGshByAAQQxqIQBBfyABIAggAiAEIAIgBEkbELwCIgggAiAEayAIGyIEQQBHIARBAEgbIgRBAUYNAAsgBEH/AXFFDQELIAZFBEBBAA8LIAZBAWshBiAFIANBAnRqQZgDaigCACEFDAELCyAFIANBGGxqIQMLIAML9gECAn8CfiMAQRBrIgQkAAJAAkACQAJAAkACQCABKAIIIgUgASgCBEkEQCABKAIAIAVqLQAAIgVBLkYNASAFQcUARiAFQeUARnINAgtCASEGIAJFDQIgAyEHDAQLIAQgASACIANBABA9IAQoAgBFDQIgACAEKAIENgIIIABCAzcDAAwECyAEIAEgAiADQQAQNyAEKAIARQ0BIAAgBCgCBDYCCCAAQgM3AwAMAwtCACEGQgAgA30iB0IAUwRAQgIhBgwCCyADur1CgICAgICAgICAf4UhBwwBCyAEKQMIIQcLIAAgBzcDCCAAIAY3AwALIARBEGokAAvJAQEGfyAAQShqIQQgACgCKCICQQRNBH8gAEEIagUgACgCBCECIAAoAggLIAIgASgCKCIDQQRNBH8gAUEIagUgASgCBCEDIAEoAggLIAMQTCAAQQRqIQUgAEEIaiEDIAAoAgghBgNAIAMhAiAEKAIAIgAhASAAQQVJIgdFBEAgBiECIAUoAgAhAQsCQCABRQ0AIAFBA3QgAmpBCGspAwBCAFINACAEIQEgB0UEQCAFIgEoAgAhAAsgAEUNASABIABBAWs2AgAMAQsLC90BAQF/IwBBMGsiAiQAAn8gACgCACIALQAEBEAgAiAAQQVqLQAAOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkECNgIcIAJB6KzAADYCGCACIAA2AhAgAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAQsgAkEkakIBNwIAIAJBATYCHCACQaStwAA2AhggAkEENgIMIAIgADYCCCABQRhqKAIAIQAgAiACQQhqNgIgIAEoAhQgACACQRhqEC8LIAJBMGokAAvUAQEBfyAAAn8CQAJ/AkACQAJAIAEEQCACQQBIDQECQCADKAIEBEAgA0EIaigCACIERQRAIAJFDQZBuLHCAC0AABogAUEJSQ0CDAULIAMoAgAgBCABIAIQIwwGCyACRQ0EQbixwgAtAAAaIAFBCU8NAwsgAhAKDAQLIABBADYCBCAAQQhqIAI2AgAMBAsgAEEANgIEDAMLIAEgAhBADAELIAELIgMEQCAAIAM2AgQgAEEIaiACNgIAQQAMAgsgACABNgIEIABBCGogAjYCAAtBAQs2AgALvgECBH4CfyABIANPBEACQCADRQ0AIAAgA0EDdGohCCADIQkDQCAAIAQgACkDAHwiBSACKQMAfCIHNwMAIAQgBVatIAUgB1atfCEEIABBCGohACACQQhqIQIgCUEBayIJDQALIARQDQAgAUEDdCADQQN0ayEAA0AgAEUNASAIIAQgCCkDAHwiBTcDACAAQQhrIQAgCEEIaiEIIAYgBCAFVq18IQQgBEIAUg0ACwsPC0GJmMIAQSNB6PXAABDeAQAL2wEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogA0GwjcAAEGIgBEH0iMAAEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvLAQEHfyABBEADQCAAIARBDGxqIgcoAgAhBSAHKAIIIggEQCAFQRRqIQJBACEGA0ACQCACQQxqKAIAIgNFDQAgAkEQaigCAEUNACADECILAkACQAJAAkAgAkEEaygCAA4DAAEDAQsgAkEEaigCAEUNAiAFIAZBLGxqQRRqIQMMAQsgAiEDIAJBBGooAgBFDQELIAMoAgAQIgsgBkEBaiEGIAJBLGohAiAIQQFrIggNAAsLIAcoAgQEQCAFECILIARBAWoiBCABRw0ACwsL2QEBA38jAEEQayICJAAgACgCACEDIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhACACQQA6AAkgAiAAOgAIIAIgATYCBCADKAIoIgRBBE0EfyADQQhqBSADKAIEIQQgAygCCAshASAEBEAgBEEDdCEAA0AgAiABNgIMIAJBBGogAkEMakEqEGEgAUEIaiEBIABBCGsiAA0ACyACLQAIIQALQQEhASAAQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhAQsgAkEQaiQAIAEL0wEBA38jAEEwayIEJAACQAJAIAFBBE0EQCAEQQA2AgAgAQRAIARBCGohAiABIQMDQCACQgA3AwAgAkEIaiECIANBAWsiAw0ACwsgBCABNgIoIAAgBEEwEL4CGgwBCwJAAkACQCABQf////8ASw0AIAFBA3QiAkEASA0AIAINAUEIIQMMAgsQ6gEACyACEAoiA0UNAiADQQRrLQAAQQNxRQ0AIANBACACELsCGgsgACABNgIoIAAgAzYCCCAAIAE2AgQgAEEBNgIACyAEQTBqJAAPCwALzwEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogAyAEEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvbAgEEfyACKAIEIQMgASgCCCEFAkACQAJAAkACQAJAAkACQCACKAIAQQFrDgIBAgALIAMoAgAhBAwBCyADKAIAQQFqIgRFDQELIAJBDGooAgAhBiAFIQMgAigCCEEBaw4CAQMCCyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABBqKvAADYCCCAAQYyswgA2AhAgAEEIakHg5sAAEOsBAAsgBigCACEDDAELIAYoAgBBAWoiA0UNAQsCQCADIARPBEAgAyAFSw0BIAEgBDYCCCAAIAM2AgwgACABNgIIIAAgBSADazYCECAAIAEoAgAiASADajYCBCAAIAEgBGo2AgAPCyAEIANBjN3AABC6AQALIAMgBUGM3cAAELgBAAsjAEEgayIAJAAgAEEUakIANwIAIABBATYCDCAAQdyrwAA2AgggAEGMrMIANgIQIABBCGpB8ObAABDrAQAL3gEBAn8jAEEQayICJAAgAiAAKAIAIgA2AgQgASgCFEH/xcAAQQYgAUEYaigCACgCDBEAACEDIAJBADoADSACIAM6AAwgAiABNgIIIAJBCGpBhcbAAEEEIABBBGpB5L7AABBIQYnGwABBBSACQQRqQZDGwAAQSCEDIAItAAwhAAJ/IABBAEcgAi0ADUUNABpBASAADQAaIAMoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAJBEGokAAvNAQEEfyMAQRBrIgMkAANAAkAgA0EEaiAAEDwgAygCBCIBRQ0AIAEgAygCDCICQQxsaiIEQZACaigCAARAIARBjAJqKAIAECILAkACQAJAIAEgAkEYbGoiAS0AAA4FBAQEAQIACyABQQRqELIBDAMLIAFBCGooAgBFDQIgASgCBBAiDAILIAFBDGooAgAiBARAIAEoAgQhAgNAIAIQtAEgAkEYaiECIARBAWsiBA0ACwsgAUEIaigCAEUNASABKAIEECIMAQsLIANBEGokAAvJAQEEfyMAQSBrIgIkAAJAAkAgAUEBaiIBRQ0AQQQgACgCBCIEQQF0IgMgASABIANJGyIBIAFBBE0bIgNBBHQhASADQYCAgMAASUECdCEFAkAgBEUEQCACQQA2AhgMAQsgAiAAKAIANgIUIAJBBDYCGCACIARBBHQ2AhwLIAJBCGogBSABIAJBFGoQdyACKAIMIQEgAigCCEUEQCAAIAM2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgAkEgaiQAC8kBAQR/IwBBIGsiAiQAAkACQCABQQFqIgFFDQBBBCAAKAIEIgRBAXQiAyABIAEgA0kbIgEgAUEETRsiA0EMbCEBIANBq9Wq1QBJQQJ0IQUCQCAERQRAIAJBADYCGAwBCyACQQQ2AhggAiAEQQxsNgIcIAIgACgCADYCFAsgAkEIaiAFIAEgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALyQECA38BfiMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAAJ/AkACQCABQShqKAIAIgRFBEAgASADNgIADAELIAJBEGogBCABQTBqKAIAENYBIAIpAhQhBSACKAIQIQMgASABKAIAQQFrNgIAIAMNAQtBACEDQQAMAQsgAiAFNwIUIAIgAzYCECACQQhqIAJBEGoQxAEgAigCCCEDIAIoAgwLNgIEIAAgAzYCACACQSBqJAAPCxC1AgALELYCAAvEAQECfyMAQSBrIgQkAAJAIAIgA2oiAyACSQ0AQQggASgCBCICQQF0IgUgAyADIAVJGyIDIANBCE0bIgNBf3NBH3YhBQJAIAJFBEAgBEEANgIYDAELIAQgAjYCHCAEQQE2AhggBCABKAIANgIUCyAEQQhqIAUgAyAEQRRqEHcgBCgCDCEFIAQoAggEQCAEQRBqKAIAIQMMAQsgASADNgIEIAEgBTYCAEGBgICAeCEFCyAAIAM2AgQgACAFNgIAIARBIGokAAvJAQECfyMAQTBrIgIkACAAKAIAIQAgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEtNgIsIAIgAEEIajYCKCABQRhqKAIAIQMgAiACQShqNgIYAn9BASABKAIUIgEgAyACQRBqEC8NABpBACAAKAIARQ0AGiACIAAoAgQ2AgwgAkEcakIBNwIAIAJBATYCFCACQezJwAA2AhAgAkEuNgIsIAIgAkEoajYCGCACIAJBDGo2AiggASADIAJBEGoQLwsgAkEwaiQAC74BAQJ/IwBBIGsiAyQAAkACQCABIAEgAmoiAUsNAEEIIAAoAgQiAkEBdCIEIAEgASAESRsiASABQQhNGyIEQX9zQR92IQECQCACRQRAIANBADYCGAwBCyADIAI2AhwgA0EBNgIYIAMgACgCADYCFAsgA0EIaiABIAQgA0EUahCMASADKAIMIQEgAygCCEUEQCAAIAQ2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgA0EgaiQAC70BAQF/IwBBEGsiCyQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASALQQA6AA0gCyABOgAMIAsgADYCCCALQQhqIAMgBCAFIAYQSCAHIAggCSAKEEghAiALLQAMIQECfyABQQBHIAstAA1FDQAaQQEgAQ0AGiACKAIAIgAtABxBBHFFBEAgACgCFEG0qMAAQQIgACgCGCgCDBEAAAwBCyAAKAIUQdzswABBASAAKAIYKAIMEQAACyALQRBqJAAL0QIBA38jAEEgayIDJAACQAJAIAEgASACaiICSw0AQQggACgCBCIEQQF0IgEgAiABIAJLGyIBIAFBCE0bIgFBf3NBH3YhBQJAIARFBEAgA0EANgIYDAELIAMgBDYCHCADQQE2AhggAyAAKAIANgIUCyADQRRqIQQgA0EIaiICAn8CQCAFBEAgAUEASA0BAn8gBCgCBARAIARBCGooAgAiBQRAIAQoAgAgBUEBIAEQIwwCCwtBuLHCAC0AABogARAKCyIEBEAgAiAENgIEIAJBCGogATYCAEEADAMLIAJBATYCBCACQQhqIAE2AgBBAQwCCyACQQA2AgQgAkEIaiABNgIAQQEMAQsgAkEANgIEQQELNgIAIAMoAgwhAiADKAIIRQRAIAAgATYCBCAAIAI2AgAMAgsgAkGBgICAeEYNASACRQ0AAAsQ6gEACyADQSBqJAALuwEBBn8gACgCDCIBIAAoAggiBGtBGG4hBiABIARHBEADQAJAAkACQAJAIAQgAkEYbGoiAS0AAA4FAwMDAQIACyABQQRqELIBDAILIAFBCGooAgBFDQEgASgCBBAiDAELIAFBDGooAgAiBQRAIAEoAgQhAwNAIAMQtAEgA0EYaiEDIAVBAWsiBQ0ACwsgAUEIaigCAEUNACABKAIEECILIAJBAWoiAiAGRw0ACwsgACgCBARAIAAoAgAQIgsLuwEBA38jAEEgayICJAACQAJAIAFBAWoiAUUNAEEIIAAoAgQiBEEBdCIDIAEgASADSRsiASABQQhNGyIDQX9zQR92IQECQCAERQRAIAJBADYCGAwBCyACIAQ2AhwgAkEBNgIYIAIgACgCADYCFAsgAkEIaiABIAMgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALxwEBAX8CQCAFIAFBAWtGBEAgAC8BkgMiAUELTw0BIAAgAUEBaiIFOwGSAyAAIAFBDGxqIgZBlAJqIAJBCGooAgA2AgAgBkGMAmogAikCADcCACAAIAFBGGxqIgEgAykDADcDACABQQhqIANBCGopAwA3AwAgAUEQaiADQRBqKQMANwMAIAAgBUECdGpBmANqIAQ2AgAgBCAFOwGQAyAEIAA2AogCDwtB3OjBAEEwQYzpwQAQ3gEAC0HQ58EAQSBBnOnBABDeAQALngEAAkACQCABBEAgAkEASA0BAn8gAygCBARAAkAgA0EIaigCACIBRQRADAELIAMoAgAgAUEBIAIQIwwCCwtBuLHCAC0AABogAhAKCyIBBEAgACABNgIEIABBCGogAjYCACAAQQA2AgAPCyAAQQE2AgQMAgsgAEEANgIEDAELIABBADYCBCAAQQE2AgAPCyAAQQhqIAI2AgAgAEEBNgIAC7MBAQF/IwBBEGsiByQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASAHQQA6AA0gByABOgAMIAcgADYCCCAHQQhqIAMgBCAFIAYQSCECIActAAwhAQJ/IAFBAEcgBy0ADUUNABpBASABDQAaIAIoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAdBEGokAAvkAQACQAJAAkACQAJAAkACQCAALQAAQQFrDgYBAgMEBQYACyABKAIUQZiEwABBIiABQRhqKAIAKAIMEQAADwsgASgCFEG6hMAAQR0gAUEYaigCACgCDBEAAA8LIAEoAhRB14TAAEEgIAFBGGooAgAoAgwRAAAPCyABKAIUQfeEwABBHSABQRhqKAIAKAIMEQAADwsgASgCFEGUhcAAQRcgAUEYaigCACgCDBEAAA8LIAEoAhRBq4XAAEEqIAFBGGooAgAoAgwRAAAPCyABKAIUQdWFwABBICABQRhqKAIAKAIMEQAAC7cBAQR/IwBBEGsiAiQAIAAoAgghAyAAKAIAIQBBASEEIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhBSACQQA6AAkgAiAFOgAIIAIgATYCBCADBH8DQCACIAA2AgwgAkEEaiACQQxqQQgQYSAAQQFqIQAgA0EBayIDDQALIAItAAgFIAULQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhBAsgAkEQaiQAIAQLqwEBBn8jAEEgayIDJAAgA0EIaiACENUBIAMoAgghBgJAIAMoAgwiB0UNACACQQxsIQUgBiEEIAchCANAIAVFDQEgA0EQaiABKAIAIAFBCGooAgAQ1gEgBEEIaiADQRhqKAIANgIAIAQgAykDEDcCACAFQQxrIQUgBEEMaiEEIAFBDGohASAIQQFrIggNAAsLIAAgAjYCCCAAIAc2AgQgACAGNgIAIANBIGokAAuzAQEEfyAAKAIEIQEgAEGMrMIANgIEIAAoAgAhAyAAQYyswgA2AgAgACgCECECAkACQCABIANGBEAgAkUNAiAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0BIAEoAgAiASAAaiABIARqIAIQvQIMAQsgAkUNASAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0AIAEoAgAiASAAaiABIARqIAIQvQILIAMgACACajYCAAsLnQEBBX8gACACKAIAIAEoAgwiAyABKAIIIgQgASgCBCIFc3MgASgCACIBQQV3amoiBkEedyIHNgIMIAAgAigCBCADIAQgASAFQR53IgVzc2pqIAZBBXdqIgNBHnc2AgggACAEIAIoAghqIAUgAUEedyIBcyAGc2ogA0EFd2oiBDYCBCAAIAIoAgwgBWogASAHcyADc2ogBEEFd2o2AgALmwEBA38jAEEQayIFJAACQCABKAIoIgNBBUkEQCADIQRBBCEDDAELIAEoAgQhBAsCf0GBgICAeCACIAMgBGtNDQAaQQAgBCACIARqIgNLDQAaQQBBfyADQQFrZ3ZBACADQQJPG0EBaiIDRQ0AGiAFQQhqIAEgAxBBIAUoAgwhAyAFKAIICyEEIAAgAzYCBCAAIAQ2AgAgBUEQaiQAC6QBAQJ/AkAgAEGQA28iA0EfdUGQA3EgA2oiA0GQA0kEQAJAIAFBDEsgAkEfS3IgAEH//w9rQYKAYElyDQAgA0Gcl8AAai0AACACQQR0IAFBCXRyciIBQQN2IQIgAUGANE8NAiACQaibwABqLAAAIgJFDQAgASACQQN0ayAAQQ10ciEECyAEDwsgA0GQA0GYm8AAELcBAAsgAkHABkHoocAAELcBAAuhAQEKfwJAIAAEQCAAKAIADQEgAEEANgIAIAAoAgQhASAAKAIIIAAoAgwhBSAAKAIQIQIgACgCFCEGIAAoAhghByAAKAIcIQggACgCICEJIAAoAighAyAAKAIsIQogABAiIANFIApFckUEQCADECILIAEgBRDtAQRAIAEQIgsgAiAHEO0BIAYEQCACECILIAkEQCAIECILDwsQtQIACxC2AgALwAEBAn8jAEEQayICJAACfwJAAkACQAJAQQEgACgCACIAKAIAQQJrIgMgA0EETxtBAWsOAwECAwALIAEoAhRBpJbCAEEaIAFBGGooAgAoAgwRAAAMAwsgAiAANgIIIAFBvpbCAEEEIAJBCGpBxJbCABB9DAILIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAQsgAiAAQQRqNgIMIAFB4JbCAEEKQeqWwgBBAyACQQxqQfCWwgAQjQELIAJBEGokAAuUAQECfyAAQQBOBH8gAAUgAUEtOgAAIAFBAWohAUEAIABrCyICQeMATARAIAJBCUwEQCABIAJBMGo6AAAgAEEfdkEBag8LIAEgAkEBdEH6icIAai8AADsAACAAQR92QQJyDwsgASACQeQAbiIDQTBqOgAAIAEgAiADQeQAbGtBAXRB+onCAGovAAA7AAEgAEEfdkEDagu4AQECfyMAQRBrIgIkAAJ/AkACQAJAAkBBAiAAKAIAIgAoAgBBBGsiAyADQQRPG0EBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpBsIXBABB9DAMLIAEoAhRBwIXBAEEGIAFBGGooAgAoAgwRAAAMAgsgAiAANgIMIAFB8JDBAEEFIAJBDGpByIXBABB9DAELIAEoAhRB2IXBAEEHIAFBGGooAgAoAgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEOsBAAttAQR/AkAgASgCBCICIAEoAggiA0sEQCABKAIAIQQCQCADRQRAIAQQIkEEIQIMAQsgAyEFIAQgAkECdEEEIANBAnQQIyICRQ0CCyABIAU2AgQgASACNgIACyAAIAM2AgQgACABKAIANgIADwsAC20BBH8CQCABKAIEIgIgASgCCCIDSwRAIAEoAgAhBAJAIANFBEAgBBAiQQQhAgwBCyADIQUgBCACQQxsQQQgA0EMbBAjIgJFDQILIAEgBTYCBCABIAI2AgALIAAgAzYCBCAAIAEoAgA2AgAPCwALggEAAkACQAJ/AkACQAJAAkAgAkEDaw4DAQACAwsgASgAAEH5yoWTB0YNBAwCCyAAQQFqIgIgAUGx4sAAQQMQvAINAhogAkECOgAADAQLIAFBrOLAAEEFELwCDQAgAEEBOgABDAMLIABBAWoLQQM6AAAMAQsgAEEAOgABCyAAQQA6AAALdwEDfyMAQRBrIgIkACACQQhqIAAoAgAgACgCBCAAKAIIELYBQbixwgAtAAAaIAIoAgwhAyACKAIIIQRBFBAKIgBFBEAACyAAIAQ2AgwgACABKQIANwIAIAAgAzYCECAAQQhqIAFBCGooAgA2AgAgAkEQaiQAIAALYwEBfyABKAIoIgVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshAQJAIAIgA00EQCADIAVLDQEgACADIAJrNgIEIAAgASACQQN0ajYCAA8LIAIgAyAEELoBAAsgAyAFIAQQuAEAC2wBAX8jAEEwayICJAAgAiAAKAIANgIMIAJBHGpCATcCACACQQI2AhQgAkHEpMAANgIQIAJBFTYCLCABQRhqKAIAIQAgAiACQShqNgIYIAIgAkEMajYCKCABKAIUIAAgAkEQahAvIAJBMGokAAtoAQJ/IAEoAggiBEUgASgCBCIFIARrIANPckUEQCABQQA2AgggAUEAOgAMQQAhBAsgAyAFSQRAIAEoAgAgBGogAiADEL4CGiAAQQQ6AAAgASADIARqNgIIDwsgAEIENwIAIAFBADoADAtpAQF/IwBBIGsiAiQAAn9BASAAIAEQXA0AGiACQRRqQgA3AgAgAkEBNgIMIAJB9KXAADYCCCACQYyswgA2AhBBASABKAIUIAFBGGooAgAgAkEIahAvDQAaIABBBGogARBcCyACQSBqJAALZwEEfwJAIAEoAgQiAiABKAIIIgNLBEAgASgCACEEAkAgA0UEQCAEECJBASECDAELIAMhBSAEIAJBASADECMiAkUNAgsgASAFNgIEIAEgAjYCAAsgACADNgIEIAAgASgCADYCAA8LAAtmAQN/IAEoAgAhAgJAIAEoAgQiBCABKAIIIgNLBEACQCADRQRAIAIQIkEEIQIMAQsgAiAEQQR0QQQgA0EEdBAjIgJFDQILIAEgAzYCBCABIAI2AgALIAAgAzYCBCAAIAI2AgAPCwALXwECfyABBEADQCAAKAIAIgIgAEEEaigCACIDKAIAEQQAIAMoAgQEQCACECILIABBCGooAgAiAiAAQQxqKAIAIgMQxgEgAwRAIAIQIgsgAEEQaiEAIAFBAWsiAQ0ACwsLbQEDfwJAAkACQAJAIAAoAgAiACgCAA4CAAEDCyAAQQhqKAIARQ0CIAAoAgQhAQwBCyAALQAEQQNHDQEgAEEIaigCACIBKAIAIgIgASgCBCIDKAIAEQQAIAMoAgRFDQAgAhAiCyABECILIAAQIgtWAQF+AkAgA0HAAHFFBEAgA0UNASACQQAgA2tBP3GthiABIANBP3GtIgSIhCEBIAIgBIghAgwBCyACIANBP3GtiCEBQgAhAgsgACABNwMAIAAgAjcDCAtgAQF/IwBBMGsiAiQAIAIgATYCDCACIAA2AgggAkEcakIBNwIAIAJBAjYCFCACQcSBwAA2AhAgAkEDNgIsIAIgAkEoajYCGCACIAJBCGo2AiggAkEQahCZASACQTBqJAALYAEBfyMAQTBrIgIkACACIAE2AgwgAiAANgIIIAJBHGpCATcCACACQQI2AhQgAkGIgsAANgIQIAJBAzYCLCACIAJBKGo2AhggAiACQQhqNgIoIAJBEGoQmQEgAkEwaiQAC1kBAn8gAigCACEEIAEgAigCCCIDIAEgA0kbIgMEQCAEIQEDQCAAIAAtAAAgAS0AAHM6AAAgAEEBaiEAIAFBAWohASADQQFrIgMNAAsLIAIoAgQEQCAEECILC1wBAX8CQAJAAkAgAUUEQEEBIQIMAQsgAUEASA0BIAEQCiICRQ0CIAJBBGstAABBA3FFDQAgAkEAIAEQuwIaCyAAIAE2AgggACABNgIEIAAgAjYCAA8LEOoBAAsAC2gBA38CQAJAAkACQCAAKAIADgIAAQMLIABBCGooAgBFDQIgACgCBCEBDAELIAAtAARBA0cNASAAQQhqKAIAIgEoAgAiAiABKAIEIgMoAgARBAAgAygCBEUNACACECILIAEQIgsgABAiC2ABAX8jAEEQayICJAACfyAAKAIAIgAoAgBFBEAgASgCFEGwxsAAQQQgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG0xsAAQQQgAkEMakHIxsAAEH0LIAJBEGokAAtcAQF/IwBBIGsiAiQAIAJBDGpCATcCACACQQE2AgQgAkHUl8IANgIAIAJBCTYCHCACIAA2AhggAUEYaigCACEAIAIgAkEYajYCCCABKAIUIAAgAhAvIAJBIGokAAtPAQF/AkACQAJ/IAAoAigiAkEFTwRAIAAoAgQiAiABSQ0CIABBBGoMAQsgASACSw0BIABBKGoLIAEgAk8NASABNgIADwsgACABIAJrEEkLC1wBAX8jAEEwayIDJAAgAyABNgIMIAMgADYCCCADQRxqQgE3AgAgA0EBNgIUIANB1JfCADYCECADQQc2AiwgAyADQShqNgIYIAMgA0EIajYCKCADQRBqIAIQ6wEAC1oBAX8jAEEQayICJAACfyAALQAAQRdGBEAgASgCFEGwxsAAQQQgAUEYaigCACgCDBEAAAwBCyACIAA2AgwgAUG0xsAAQQQgAkEMakG4xsAAEH0LIAJBEGokAAtOAQF/IAEoAigiBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIAIgBEsEQCACIAQgAxC5AQALIAAgBCACazYCBCAAIAEgAkEDdGo2AgALYAEBfyMAQRBrIgIkAAJ/IAAoAgBFBEAgASgCFEHolMIAQRAgAUEYaigCACgCDBEAAAwBCyACIAA2AgwgAUH4lMIAQQhBgJXCAEEGIAJBDGpBiJXCABCNAQsgAkEQaiQAC1gBAn9BBCECAkACQAJAIAFFDQAgAUGq1arVAEsNASABQQxsIgNBAEgNASADRQ0AQbixwgAtAAAaIAMQCiICRQ0CCyAAIAE2AgQgACACNgIADwsQ6gEACwALWAEBfwJAAkACQCACRQRAQQEhAwwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIAMgASACEL4CIQEgACACNgIIIAAgAjYCBCAAIAE2AgAPCxDqAQALAAtIAAJAIAFpQQFHQYCAgIB4IAFrIABJcg0AIAAEQEG4scIALQAAGgJ/IAFBCU8EQCABIAAQQAwBCyAAEAoLIgFFDQELIAEPCwALTwEEfyABIAAoAggiAigCBCAAKAIQIgQgACgCDCIDaiIFa0sEQCACIAUgARCIAQsgAigCACICIAEgA2oiAWogAiADaiAEEL0CIAAgATYCDAtQAQJ/IwBBIGsiBiQAIAFFBEBB+ezAAEEyELQCAAsgBkEUaiIHIAEgAyAEIAUgAigCEBEGACAGQQhqIAcQvAEgACAGKQMINwMAIAZBIGokAAtGAQJ/IAAoAgQhASAALQAAIgBBBE0gAEEDR3FFBEAgASgCACIAIAFBBGooAgAiAigCABEEACACKAIEBEAgABAiCyABECILC08BAn8gACgCBCECIAAoAgAhAwJAIAAoAggiAC0AAEUNACADQaiowABBBCACKAIMEQAARQ0AQQEPCyAAIAFBCkY6AAAgAyABIAIoAhARAQALUgEBfyAAKAIAIQMgAC0ABEEBRwRAIAMoAgBB6OzAAEEBEOQBCyAAQQI6AAQgAygCACABKAIAIAEoAggQOSADKAIAQffswABBARDkASACIAMQFQtOAQF/IwBBEGsiAiQAIAIgACgCACIANgIMIAFB3NDAAEEFQeHQwABBBCAAQQhqQejQwABB+NDAAEEIIAJBDGpBgNHAABCHASACQRBqJAALSAEBfyMAQSBrIgMkACADQQxqQgA3AgAgA0EBNgIEIANBjKzCADYCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQ6wEAC0MBAX8gAiAAKAIEIAAoAggiA2tLBEAgACADIAIQhgEgACgCCCEDCyAAKAIAIANqIAEgAhC+AhogACACIANqNgIIQQALRgEBfwJAAkACQCABRQRAQQEhAgwBCyABQQBIDQFBuLHCAC0AABogARAKIgJFDQILIAAgATYCBCAAIAI2AgAPCxDqAQALAAtBAQF/IwBBEGsiAiQAIAJBCGogACABQQEQhAECQCACKAIIIgBBgYCAgHhHBEAgAEUNAQALIAJBEGokAA8LEOoBAAtJAQF/IwBBEGsiAiQAIAIgAEEMajYCDCABQdSIwABBDUG4iMAAQQUgAEHkiMAAQb2IwABBBSACQQxqQcSIwAAQhwEgAkEQaiQAC0MBAX8gACgCACEAIAEoAhwiAkEQcUUEQCACQSBxRQRAIAA1AgBBASABEFYPCyAAKAIAIAEQpgEPCyAAKAIAIAEQpwELQQEBfyACIAAoAgQgACgCCCIDa0sEQCAAIAMgAhCIASAAKAIIIQMLIAAoAgAgA2ogASACEL4CGiAAIAIgA2o2AggLeQECfyACIAAoAgQgACgCCCIDa0sEQCMAQRBrIgQkACAEQQhqIAAgAyACEIQBAkACQCAEKAIIIgNBgYCAgHhHBEAgA0UNAQALIARBEGokAAwBCxDqAQALIAAoAgghAwsgACgCACADaiABIAIQvgIaIAAgAiADajYCCAu4AQEFfyAAKAIAIQIgASgCHCIAQRBxRQRAIABBIHFFBEAgAjEAAEEBIAEQVg8LIAItAAAhAyMAQYABayIFJABB/wAhAgNAIAUgAiIEaiIGQTBBNyADQQ9xIgBBCkkbIABqOgAAIAJBAWshAiADIgBBBHYhAyAAQRBPDQALIARBgAFLBEAgBEGAAUHoqMAAELkBAAsgAUEBQfiowABBAiAGQYABIARrEDAgBUGAAWokAA8LIAIgARCiAQtCAQF/IAEoAghFBEAgAEEANgIIIABBADYCAA8LIAEoAgAiAgRAIAAgAiABKAIEEBcPC0GAl8IAQStBiITAABDeAQALPAEBfyABKAIcIgJBEHFFBEAgAkEgcUUEQCAANQIAQQEgARBWDwsgACgCACABEKYBDwsgACgCACABEKcBCzkAAkACfyACQYCAxABHBEBBASAAIAIgASgCEBEBAA0BGgsgAw0BQQALDwsgACADIAQgASgCDBEAAAtAAQF/IwBBIGsiACQAIABBFGpCADcCACAAQQE2AgwgAEG43MAANgIIIABBjKzCADYCECAAQQhqQbyHwAAQ6wEAC+gBAQF/IwBBIGsiAiQAIAJBATsBHCACIAE2AhggAiAANgIUIAJBpKbAADYCECACQYyswgA2AgwgAkEMaiIAKAIIIgFFBEBBgJfCAEErQfihwgAQ3gEACyABQQxqKAIAIQICQAJAIAEoAgQOAgAAAQsgAg0ACyAALQAQIQEgAC0AERpB0K3CAEHQrcIAKAIAIgBBAWo2AgACQCAAQQBIDQBBnLHCAC0AAEEBcQ0AQZyxwgBBAToAAEGYscIAQZixwgAoAgBBAWo2AgBBzK3CACgCAEEASA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = Or();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: t, module: A } = await Kr(await g, I);
  return Tr(t, A);
}
function hg(g, I, t, A, e) {
  return cA(e - -73, I);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return cA(B - -419, Q);
  }
  function A(n, B, a, Q, E) {
    return cA(n - 43, Q);
  }
  function e(n, B, a, Q, E) {
    return cA(B - -888, E);
  }
  function o(n, B, a, Q, E) {
    return cA(n - -939, Q);
  }
  const i = g();
  function C(n, B, a, Q, E) {
    return cA(a - -155, Q);
  }
  for (; ; )
    try {
      if (parseInt(t(-9, -13, -20, "xZ]k", -22)) / 1 * (parseInt(A(443, 419, 448, "nlPQ", 447)) / 2) + -parseInt(o(-523, -510, -514, "rnDl", -503)) / 3 + parseInt(A(441, 439, 449, "xZ]k", 425)) / 4 * (-parseInt(t(-56, -31, -33, "Khlq", -47)) / 5) + -parseInt(C(217, 240, 244, "f[ce", 265)) / 6 + -parseInt(t(-28, -22, -26, "rnDl", -32)) / 7 * (-parseInt(t(-50, -29, -6, "^np!", -30)) / 8) + parseInt(C(234, 253, 228, "bH[e", 241)) / 9 * (parseInt(e(-467, -475, -457, -502, "gfA$")) / 10) + parseInt(A(434, 413, 454, "Khlq", 410)) / 11 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(t0, 181 * -8029 + -683303 + -142 * -20457);
function lg(g, I, t, A, e) {
  return cA(g - 156, I);
}
function t0() {
  const g = ["eCoYW6ldNCoXW63dVI0", "dxqxW7/cQa", "WOVdKqpcRSkJwe/dRb4af2BdIW", "AmomW7brpa", "W4GLWQFdVrq", "errfDSkxW67dV8k2qgu", "CIJdIwH+", "ytRdGmoweSotdG", "grvbE8o7WQRcKSksrwuFW6iy", "nL1iWPK", "W7HbWQeVcXf7pSkpWROeyCoZ", "vWVdQSomWQW", "WQBcVqHogG", "WOyVWRVdSry", "wJBdJmkHCq3dUmkEWR/dRWqWWOO", "fSkMDN/cPr4IW7m4WRfl", "W4ldP8ottYHXW6SideP9W5Ci", "WOLbWQapDfRcRhZcV1q", "eCkKW4SeW4qsW7KcW6JdOqlcVHC", "WQuCW6nZwa", "W7bJebqv", "ySkIo8o0W5K", "WOmDog0D", "eSkJEZ/dNX8xW4m6", "ehORnmo2", "W64uWQ4Sja", "mfFcNCkzW64", "n1dcJ8kFW70", "WPRcTSoWymkopmk2", "W7LepvldKSoWW70/ECoWW7tdQSo0", "W5PWW7FcQ0tcNSkJvSoRDmoreWq", "W75kmfhdMCoZW7SOumoNW5xdTmot", "gHn+q8kCWOtdLmkQve0", "xdRdJ8kKEW7dVmkkWONdLI4bWOW", "WOTjWQLjuwZcK3VcNq", "W6CzW7vPea", "m1PBWOG9", "yrzDu1q", "CLqJxxeeW6pcKJRdNCkw", "WOaqWPiHkW", "AYZdLMnU", "WOKYWQBdTXK", "CMJcMhC7", "dMpcRSoOW6y", "WRWuW6r3Ca", "tmkJW6ddM8og", "qdXYBSomxSkCW5hcPmkW", "W4OzW6nuvG", "W5azW6rqCa", "W6StW7HOgq", "u8kJW5/dTxi", "tCkKuXqf", "s8kbW7aC"];
  return t0 = function() {
    return g;
  }, t0();
}
function cA(g, I) {
  const t = t0();
  return cA = function(A, e) {
    A = A - (-8088 + -1 * 4954 + 13419);
    let o = t[A];
    if (cA.koOLiW === void 0) {
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
      cA.EXxDmB = a, g = arguments, cA.koOLiW = !0;
    }
    const C = t[-9236 + 4618 * 2], n = A + C, B = g[n];
    return B ? o = B : (cA.tQrAmS === void 0 && (cA.tQrAmS = !0), o = cA.EXxDmB(o, e), g[n] = o), o;
  }, cA(g, I);
}
function Te(g, I, t, A, e) {
  return cA(A - -926, t);
}
var _i;
class qr {
  constructor() {
    m(this, _i, !1);
  }
  async [(_i = lg(583, "$aV[") + Te(-490, -475, "KtaJ", -500) + lg(584, "bH[e"), Te(-547, -559, "@0qv", -534))](I) {
    function t(i, C, n, B, a) {
      return lg(n - 600, i);
    }
    function A(i, C, n, B, a) {
      return hg(i - 419, a, n - 472, B - 433, i - 1019);
    }
    function e(i, C, n, B, a) {
      return Te(i - 45, C - 400, n, C - 1798);
    }
    function o(i, C, n, B, a) {
      return hg(i - 405, B, n - 150, B - 444, n - -393);
    }
    try {
      const i = I + (o(-102, -61, -80, "jxAE", -63) + "/") + yi;
      await wn(i), this[o(-45, -44, -41, "i5nc", -46) + A(1348, 1328, 1365, 1346, "$aV[") + A(1364, 1390, 1341, 1350, "8Eo2")] = !0;
    } catch {
      this[o(-79, -62, -86, "bhxa") + A(1356, 1339, 1348, 1370, "8[Rl") + o(-65, -44, -47, "@0qv")] = !1, console[o(-73, -110, -84, "79Ji")](yi + (o(-38, -38, -62, "$DB$") + t("ZjaL", 1125, 1140) + A(1353, 1345, 1331, 1327, "rgLN") + o(-48, -46, -44, "8jyS") + e(1279, 1280, "8Eo2") + o(-35, -64, -61, "qqUH") + A(1333, 1339, 1310, 1339, "gfA$") + e(1256, 1275, "UVVR") + t("yDGi", 1171, 1145) + t("gfA$", 1160, 1180) + o(-111, -86, -87, "$aV[") + t("SA)s", 1122, 1137) + e(1286, 1281, "8[Rl") + A(1324, 1349, 1302, 1325, "nlPQ") + "n."));
    }
  }
  [Te(-509, -511, "@air", -506) + Te(-542, -515, "rc61", -532) + hg(334, "Z&71", 344, 318, 322) + "ed"]() {
    function I(e, o, i, C, n) {
      return Te(e - 308, o - 388, o, C - 1504);
    }
    function t(e, o, i, C, n) {
      return hg(e - 338, i, i - 269, C - 376, e - 836);
    }
    function A(e, o, i, C, n) {
      return lg(n - -654, i);
    }
    return this[I(969, "nlPQ", 946, 955) + A(-79, -96, "gfA$", -85, -102) + t(1186, 1213, "yDGi", 1180)];
  }
}
class X0 extends Error {
  constructor() {
    super(...arguments);
    m(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function z(g, I) {
  var t = g0();
  return z = function(A, e) {
    A = A - (1 * 4031 + 541 + -4162);
    var o = t[A];
    if (z.xRnNol === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var p = 0, b = x.length; p < b; p++)
          s += "%" + ("00" + x.charCodeAt(p).toString(16)).slice(-2);
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
      z.oyliky = C, g = arguments, z.xRnNol = !0;
    }
    var n = t[7933 + 219 * -18 + -3991], B = A + n, a = g[B];
    return a ? o = a : (z.xpmucf === void 0 && (z.xpmucf = !0), o = z.oyliky(o, e), g[B] = o), o;
  }, z(g, I);
}
function g0() {
  var g = ["W55eW4LjW5xcHSkIW5NcOmod", "cabzWQ/cUG", "WR7dJLb7", "cCkVW6VdVmoD", "WOtdPSoGqSktdSkbz8k0eCkfdHy", "bKiquCkP", "mwmhDh4", "WQaJW5Gel8kptCoqW7OZeSoEW7xdGq", "WPThWP8", "uqZdKmkK", "cSonlCkcq8o+W4ddUa", "vqOnW5hdGIbrW4ZcJIBdJhGo", "WQZdPmobW6nKA8kSW7pcN8oo", "CgW5E8koau84oSkaWPO", "W73cQ1ldJCow", "WOvOo8oEW6e", "W6NcTSkeWRT9", "W7JcVfZdISoq", "pf/cL8k5lG", "vSoKWQClW4/cL8kyWPxcIHuJz8on", "nMOt", "jGxdPCkiW4W", "A8oOWP7cGmoh", "eKFdS2ZcTW", "eCkWW7fFWPK", "uZKtmCouahqVzSoTeedcHq", "wCoSW5u6WRiikSkRkmkZltBdSW", "urhdT8kLWQK", "aCkKW6bhWPm", "wXddMCk4WRS", "WOGyWOOOW4a", "xGFdL8k/WR0", "WPT0pa", "AMGurxviW6K", "zbhcIG", "s8k5kmk5Aq", "BJ9wbsyLWPxcMf3dOSowf8oU", "WR5PW4VdOmoje8ooEa", "uG4cW5ZdGc9vW5pcOWNdSh0j", "yaFcP8k9WO0", "WPhdIWO", "bb9oWPtcUG", "eSkWW6faWPK", "W6aWW4m", "ECo5WOpcNmoA", "bmkdysyJW6pcUq", "emk0W6bSWPy", "WOpcH8kPE8oeBSk2psdcOSkzAJq", "W7P2WP5ECG", "W6KRW5xdH8oW", "FCkWd2vw", "W6f4WOq", "WPpdSNunWOO", "W4ddKSo7i8kH", "Emk0cq", "vazggSoPgstdJdzrW6FdNSkP", "qCk3FSoUbXybWR5acdy", "egXyx8kg", "W7JdPCkrW7BdNheVe8krW7Ohr8kY", "W4pcRSkXW5Dx", "oG3dVSkfW7y", "c8kUWOL9W7a"];
  return g0 = function() {
    return g;
  }, g0();
}
function lt(g, I, t, A, e) {
  return z(t - -238, e);
}
(function(g, I) {
  var t = g();
  function A(n, B, a, Q, E) {
    return z(Q - -371, B);
  }
  function e(n, B, a, Q, E) {
    return z(E - -411, Q);
  }
  function o(n, B, a, Q, E) {
    return z(Q - -694, E);
  }
  function i(n, B, a, Q, E) {
    return z(B - -218, n);
  }
  for (; ; )
    try {
      var C = parseInt(i("e30O", 231, 219, 206, 256)) / 1 * (-parseInt(i("vYDR", 217, 223, 216, 226)) / 2) + -parseInt(e(11, 11, 30, "ryvU", 29)) / 3 + -parseInt(e(45, 43, 49, "CVFl", 28)) / 4 * (-parseInt(o(-236, -230, -243, -226, "bRYv")) / 5) + -parseInt(A(41, "vYDR", 92, 67, 52)) / 6 + parseInt(o(-281, -255, -288, -273, "!wVB")) / 7 + -parseInt(o(-288, -260, -256, -279, "yUcS")) / 8 * (parseInt(e(62, 36, 49, "@BZX", 53)) / 9) + parseInt(A(72, "PzIj", 81, 100, 115)) / 10;
      if (C === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(g0, -1196359 + 19 * -56866 + 2882183);
function he(g, I, t, A, e) {
  return z(A - 847, I);
}
function ut(g, I, t, A, e) {
  return z(t - 340, g);
}
function z0(g, I, t, A, e) {
  return z(t - -267, A);
}
function Zr(g, I, t, A, e) {
  return z(e - -502, t);
}
var ze, Kt;
class Ni {
  constructor(I) {
    L(this, ze);
    L(this, Kt);
    function t(C, n, B, a, Q) {
      return z(a - 630, C);
    }
    function A(C, n, B, a, Q) {
      return z(C - -551, B);
    }
    function e(C, n, B, a, Q) {
      return z(C - 866, a);
    }
    function o(C, n, B, a, Q) {
      return z(a - 906, Q);
    }
    this[o(1399, 1360, 1345, 1369, "%Rxx") + o(1372, 1380, 1330, 1358, "9(Zz")] = I;
    function i(C, n, B, a, Q) {
      return z(B - -297, C);
    }
    try {
      M(this, ze, I[t("YUE!", 1068, 1075, 1063, 1052) + i("!wVB", 125, 151, 173, 168) + t("yiPS", 1036, 1049, 1040, 1041)] && JSON[e(1310, 1315, 1316, "!wVB", 1322)](I[o(1311, 1315, 1343, 1331, "jl1O") + i(")@0O", 149, 162, 139, 146) + i("PzIj", 173, 156, 168, 163)])), M(this, Kt, I[A(-131, -149, "k&FB", -129, -131) + t("9(Zz", 1065, 1085, 1086, 1085)]);
    } catch (C) {
      console[t("YUE!", 1033, 1019, 1041)](C);
    }
  }
  get [he(1339, "#]I!", 1340, 1314) + "id"]() {
    function I(A, e, o, i, C) {
      return he(A - 111, e, o - 233, i - -1490);
    }
    function t(A, e, o, i, C) {
      return he(A - 120, i, o - 275, e - 13);
    }
    return this[I(-205, "bzp5", -145, -174) + I(-153, "7ry2", -184, -182)][t(1291, 1301, 1287, "A(UB") + t(1299, 1305, 1287, "CVFl")];
  }
  get [lt(208, 254, 227, 254, "!uO2") + "s"]() {
    function I(A, e, o, i, C) {
      return he(A - 135, C, o - 215, i - -537);
    }
    function t(A, e, o, i, C) {
      return lt(A - 115, e - 318, C - -735, i - 94, i);
    }
    return this[I(769, 760, 742, 741, "YUE!") + t(-498, -511, -487, "FneN", -511)][t(-512, -498, -517, "CVFl", -522) + "s"];
  }
  get [he(1245, "KdpT", 1294, 1271) + ut("vYDR", 763, 762)]() {
    function I(A, e, o, i, C) {
      return he(A - 258, o, o - 263, e - -754);
    }
    function t(A, e, o, i, C) {
      return lt(A - 369, e - 270, o - 779, i - 446, i);
    }
    return this[I(520, 509, "Ehn!") + I(563, 543, "PzIj")][I(489, 511, "rTHP") + t(999, 958, 983, "vL9c")];
  }
  get [he(1309, "@BZX", 1294, 1279) + "b"]() {
    return D(this, ze);
  }
  get [ut("!wVB", 756, 770) + z0(189, 145, 169, "A(UB")]() {
    return D(this, Kt);
  }
  get [Zr(-72, -58, "YUE!", -90, -73) + z0(157, 168, 150, "09@p") + z0(180, 145, 170, "Rwf[") + ut(")p$A", 779, 806)]() {
    var o, i;
    function I(C, n, B, a, Q) {
      return lt(C - 361, n - 263, Q - 880, a - 239, n);
    }
    function t(C, n, B, a, Q) {
      return ut(a, n - 2, C - 588);
    }
    function A(C, n, B, a, Q) {
      return lt(C - 322, n - 115, C - 926, a - 5, a);
    }
    function e(C, n, B, a, Q) {
      return ut(n, n - 245, C - -919);
    }
    return !!((i = (o = D(this, ze)) == null ? void 0 : o[I(1046, "Ehn!", 1092, 1037, 1061) + e(-145, "09@p")]) != null && i[t(1383, 1402, 1382, "e30O") + I(1088, "!uO2", 1060, 1060, 1085) + A(1142, 1172, 1129, "hbqc") + A(1111, 1106, 1111, "FneN") + e(-133, "KdpT") + A(1158, 1129, 1151, "vYDR") + A(1114, 1095, 1102, "!wVB") + "d"]);
  }
}
ze = new WeakMap(), Kt = new WeakMap();
(function(g, I) {
  function t(C, n, B, a, Q) {
    return oA(Q - 514, a);
  }
  function A(C, n, B, a, Q) {
    return oA(Q - -634, n);
  }
  const e = g();
  function o(C, n, B, a, Q) {
    return oA(Q - -112, B);
  }
  function i(C, n, B, a, Q) {
    return oA(Q - -247, a);
  }
  for (; ; )
    try {
      if (parseInt(A(-493, "qlFh", -345, -413, -386)) / 1 + parseInt(A(-309, "4U4j", -530, -429, -436)) / 2 * (parseInt(A(-347, "Hinw", -384, -475, -443)) / 3) + parseInt(i(-124, -43, 83, "w!Cx", -31)) / 4 * (parseInt(t(767, 759, 760, "CV4r", 882)) / 5) + -parseInt(o(176, 42, "c3X1", 45, 55)) / 6 + parseInt(A(-162, "k)Hk", -200, -387, -277)) / 7 + -parseInt(A(-378, "[3eB", -341, -569, -453)) / 8 + parseInt(t(925, 961, 856, "W%kh", 864)) / 9 * (-parseInt(A(-236, "A9tr", -463, -401, -356)) / 10) === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(I0, 3 * -510730 + 168125 * 11 + 675928);
function le(g, I, t, A, e) {
  return oA(g - 497, e);
}
function I0() {
  const g = ["E0HBWPFdRW", "WPnjWOlcTxu", "t8oJW63cMmo9", "WPXgyvpcVW", "W7GhWP/dP8kD", "W4ZcIgNdP3K", "smoPW7FcRSo1", "AhHmWRVdSG", "WPThp2C", "WRODiCojWPW", "W6ZdRI5RaG", "iwzGWRWx", "WQ3cJ8o0WP4k", "WRnrW5qSFW", "W5RdVCkbWR7cJW", "omo6W53cVsS", "WP53W4pdUdq", "WQjwW5/dRJ0", "WP5aW53dHq", "mrhdSGtcMG", "WRjyW4ldGcC", "WRfxW5mS", "W4FdHCosDva", "W6RdHGjVda", "lCksW6Kyqq", "WPfAW7xdNa", "samBWR8Q", "s8kXjmoGWQa", "nW3dRmkoWP0", "CCkxECkJWOO", "W5dcPYeUoW", "tSoJW6FcJ8o9", "W44hWQpcIWS3WQKctgOtzJG", "WQRcOSoMWRKM", "WRHmW4GRyG", "WPfhW4tdKK0", "nX/dGqac", "gs92WRaq", "oGRdNq", "W5SOWQFcRCkv", "W613vCoqWOS", "W47cSmklWO/dQu7dNCoezW", "WP7cRJP7pa", "A8ktFSkFWOG", "W6HgjMxcJq", "W7SPWOi", "WOlcRSoJWR09", "WOjBp305", "WPtcMmkrkevgc8kWW6ldGComW6f9", "W4JdObffaa", "xr8bWRr+", "W6VdPhFdMqC", "F8ktBmk0WPC", "WQvijx5T", "W4JdNmozW7z1", "nXNcTmkoCq", "WPpcNCkrkeHdw8k/W6pdHmoZW78", "ecH/WRaK", "W6/cMupdUxi", "amkgW6tdR8kyv8kTW7y", "W6C0g8k2gq", "W69rmg7cMG", "WRVdImoUW6tdQW", "qmoPW6q", "W7pdHZXGcW", "W5FdSSkgWRJdHW", "t8k5dSobWQq", "er/dNbWd", "W4FdKmojW7zI", "m8o+W4FcRsy", "imkqvmoLWQS", "p8oAWQlcKGK", "jYn/WQay", "brNdGGlcMG", "W7aPW7tcJmkk", "WPVdOSoEW6O", "A8kFW6hcTJxdIr4EWPu", "jmkEsG", "pLCHn8ov", "WOezvCk/xG", "d1dcOSkcDG", "jb/dSXVcKW", "W7KUW6tcJmk0", "a8kbWQ7cPmo5g8o8W79cqCkGn8kG", "W5ebWQxcRSkL", "ufujWRZdKG", "qaGA", "gsLTWRe4", "FN/cRmk8W50", "pHBdVCkeWOe", "W6vXqSoWWOG", "t8k0iCo+WPS", "W79rj1xcLq", "W6Tgmw8", "ww/dN8oAWPq", "WPrDW7C", "W6ddQMVdMq", "fG54WPmT", "WQbcW4KSAq", "WQHhWPBcNsC", "qmkQiSoMWRm", "pSoXWONcJc4", "WP0uW73dNeO", "WPFdPSooWQFdJW", "u8oPWOmAWOFcG8o1prZdQmk1FG", "CwlcPa", "n8kfxCoaWQy", "pCoWW4hcIY8", "cvvzWQRdHW", "W4vmW4ddNZG", "EbldQslcNG", "W613uG", "Cmo1EcpdJW", "W4tcJ17dOG", "yCoKCYRdJW", "e8knW5HiW4W", "WPXgyvVcUq", "W7K0bCkXcG", "lSooW5NcRdW", "W4HDASkEW5JcRmkdnhddO8okW5xcPq", "W6i6fSk7lW", "jr7dRmkpWOy", "nSobWRpcMbu", "WQFcQCoPWQW", "pfe2CSos", "WP5BW6BdNvO", "W4/dLSoiW7fN", "i8kUW4bfW4W", "buHf", "jbmRbsy", "ECk5p8odWPC", "s8kRnCkNWQ0", "WRPeW5hdMq", "WR7cUJRcG1lcLNVcNSkxW5dcUq0U", "WPtcRJOEoa", "WPfBowa+", "WQHbWOVcVte", "mSoXW5BdOci", "yCoedCk7W7yiW5nZESoGW6/cJq", "o0zzWQVdNa", "W4FcK3VdQvy", "WQDlW5tdVW", "W6iSoCkteG", "kG4FW4JcRCoQaNeUxgqs", "z8kWfCogWRG", "chrpW44", "W6aYba", "ESkeySkZWPe", "y8osW6xdSSkM", "WOO5jmoLWP4", "hCk0W6BcRCoAWPDtmW", "Ar3dHtldJq", "W6L/qSowWO0", "W5ldMCoozHK", "W7qTWOu", "W6dcVK7cMcO", "v8oUW5DSW7ZdTCoEaa", "wGWAWRrJ", "W4dcIutdVMO", "W77dPgW", "W6RcSKZcIte", "W7pdHZr3gq", "W6msWOnRpCkTWPNdVbvxD8oCW4a", "b1ZcVSkgzW", "rSk9pSo6WQq", "WQLjWPJcTG", "WPhdJKxdOK9BWPNcQG", "WO5aW4pdKcO", "WRLGqSoOwITrE043W6dcRW", "WPDkDNRcUa", "FSktECkeWO0", "WPrBW7tdTKW", "W61QESoCWOy", "W4ZdHmovmbK", "W65go3NcJa", "WOJdPSoiWQO", "WO/dTCotWQRdKW", "WOGoiCoiWOC", "nCkdv8o/WRW", "xmosW6pdV8kN", "mmkkpmoWEa", "pSohWQtcUby", "WQHbWPlcVtS", "tmk7nCoNWRi", "k8kWW6GzcW", "WQHAW5tdTdW", "WQ3cTCoVWQSG", "cKjFWQBdNq", "W4iMW7tcHmo6", "WPrBW7q", "WRLcW5C2DG", "r8oCW7K", "mbVdTa3cKG", "dvndWRy", "WPxcSZW0jW", "qxi6W6vey8oQESkHff/cQa", "rqWCWRLI", "WPzgzW", "WOujuSkhwa", "sHFcLW", "ldVdS8o3WPBdUapcNSoyzCkcWRS", "W5VdSSktWRi", "uCktW7NdS8k7", "s8oJW7FcR8o3", "W7NdGrH1fW", "W695rq", "WO0oF8kBxW", "ibddRa", "DgpcPCkG", "W6rSrmoAWPC", "WQzwW7O+wa", "thpdHCorWRa", "WQ4frCkUxW", "aKby", "hsD4WRyC", "a17dRcJcMa", "q8k9jmoQWQK", "W7RdQNddMq", "F8oXDsK", "WO8LsmkIrq", "jWZdRZFcKG", "W4pdMSoyW7XJ", "WQbnW5tdLIy", "ESkty8kZWOC", "CmkvAmkUWPe", "WPpdRSozWQhdIq", "oCkgpmoABa", "kmkXW6K5sG", "gs9VWRaA", "pKOoo8oy", "W7VdSSkXW6HQW7S2E8orWOLupq", "guDCWQpcKa", "dv7cQW", "F1Dm", "D8krFG", "W5/dOCovWRhdIq", "WPuzW53dSYW", "ACkezmkUWPy", "atjGWRaq", "WRnYF3tcLa", "ymoEFsRdJW", "d1veWRBdHG", "F2JcP8kRW4S", "W59tfKNcNG", "nXhdRCkeW48", "aH7dQSkj", "WPjlW74qDq", "W7yIW6NcMSk/", "gGlcJJC+", "WOLqW5BdHta", "W47dN8oTErm", "lmoIWPNcMI8", "WP5mWPSBqW", "sXVcHHpdRa", "W4CaW5hcGSkj", "W4xdPSoXzJ4", "wmoCW7tdVCk7", "WR4fW4NdMdW", "WPbvW6FdKfy", "oH7dQSkcWOC", "oSkyw8oPWQe"];
  return I0 = function() {
    return g;
  }, I0();
}
function fA(g, I, t, A, e) {
  return oA(I - -84, A);
}
function j(g, I, t, A, e) {
  return oA(g - 218, t);
}
function JA(g, I, t, A, e) {
  return oA(I - -657, t);
}
function oA(g, I) {
  const t = I0();
  return oA = function(A, e) {
    A = A - (4172 + 2 * 4342 + -12696);
    let o = t[A];
    if (oA.mWsrcQ === void 0) {
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
      oA.UNcoWN = a, g = arguments, oA.mWsrcQ = !0;
    }
    const C = t[1791 * 3 + 3270 + -3 * 2881], n = A + C, B = g[n];
    return B ? o = B : (oA.bzmZTS === void 0 && (oA.bzmZTS = !0), o = oA.UNcoWN(o, e), g[n] = o), o;
  }, oA(g, I);
}
function DA(g, I, t, A, e) {
  return oA(I - 267, e);
}
var Xi, zi, $i;
class Pr {
  constructor(I) {
    m(this, $i);
    m(this, zi, [fA(214, 334, 333, "2(do") + DA(523, 452, 538, 376, "S]Tu") + "ic", fA(242, 335, 260, "3(lq") + j(397, 294, "RTH(") + "ic"]);
    m(this, Xi);
    function t(e, o, i, C, n) {
      return oA(o - -504, C);
    }
    function A(e, o, i, C, n) {
      return oA(o - -367, e);
    }
    this[A("BH)K", -138) + t(-269, -214, -185, "qlFh") + "d"] = I;
  }
  async [($i = JA(-406, -356, "O4QM") + "se", zi = JA(-516, -446, "mUEg") + JA(-503, -437, "JAFY") + DA(775, 670, 603, 697, "Y00F") + fA(158, 157, 41, ")rNp"), Xi = DA(372, 489, 609, 390, "v2)W") + fA(168, 116, 175, "JAFY"), j(389, 435, "A9tr"))](I) {
    function t(C, n, B, a, Q) {
      return DA(C - 497, Q - -244, B - 72, a - 269, n);
    }
    function A(C, n, B, a, Q) {
      return j(Q - -624, n - 452, n);
    }
    function e(C, n, B, a, Q) {
      return j(Q - 493, n - 478, n);
    }
    const o = await this[i(1123, 982, "BqrX", 1044) + t(249, "JCzK", 214, 363, 294) + A(-200, "2(do", -186, -184, -226)](I);
    function i(C, n, B, a, Q) {
      return DA(C - 342, a - 465, B - 460, a - 76, B);
    }
    await Promise[e(1126, "oOAb", 1031, 1081, 1111) + t(228, "XG%P", 386, 436, 309)]([this[A(51, "JAFY", -41, -59, -7) + e(1059, "4U4j", 1141, 1179, 1051) + "d"][i(1130, 1163, "E(d$", 1049)](I), this[i(916, 959, "w!Cx", 900) + i(1108, 1030, "q7Gs", 1095) + "e"](o)]), this[e(1195, "63Nv", 960, 1061, 1090) + A(-21, "63Nv", -77, 38, 9) + t(431, "H0([", 244, 381, 318)]();
  }
  async [JA(-487, -393, "RTH(") + j(573, 455, "A9tr") + "se"](I) {
    function t(C, n, B, a, Q) {
      return j(n - -577, n - 177, a);
    }
    function A(C, n, B, a, Q) {
      return le(B - 318, n - 221, B - 15, a - 425, C);
    }
    function e(C, n, B, a, Q) {
      return j(B - -897, n - 145, n);
    }
    function o(C, n, B, a, Q) {
      return j(C - -623, n - 227, n);
    }
    function i(C, n, B, a, Q) {
      return JA(C - 354, n - 334, C);
    }
    try {
      if (A("BH)K", 1057, 1114, 1156, 1061) === A("H0([", 1045, 1117, 1143, 1161)) return this[o(-60, "(fV(", -49, -26, 52) + o(-143, "XG%P", -209, -222, -107)];
      {
        const C = await fetch(I);
        if (!C.ok)
          if (o(-23, "3(lq", -36, 98, -85) !== i("v2)W", -32, 82, -148, -157)) _0x23aa91[o(-163, "@ZQU", -244, -271, -178)](_0x4f2474);
          else throw new Error(t(15, 34, 99, "gMyf", -61) + A("JCzK", 1054, 1087, 1205, 967) + e(-444, "CV4r", -429, -544, -542) + A("W%kh", 1041, 1098, 1049, 974) + "d.");
        this[A("BqrX", 1043, 1032, 907, 1064) + "se"] = await C[e(-334, "2(do", -352, -378, -413)]();
      }
    } catch (C) {
      if (t(58, 51, 109, "BH)K") === e(-455, "[d@[", -491)) throw new _0xc807f4(e(-272, "vKgX", -379) + t(53, 5, -21, "mUEg") + i("[ye&", 12) + A("q7Gs", 1104, 1192, 1276) + ".");
      this[A("63Nv", 997, 1123, 1021) + "se"] = void (-1369 * 3 + -547 * 17 + 13406), console[i("P(TE", 14)](C);
    }
  }
  async [DA(720, 663, 722, 739, "XG%P") + DA(551, 498, 609, 570, "RTH(") + "e"](I) {
    function t(C, n, B, a, Q) {
      return le(a - -858, n - 154, B - 328, a - 108, Q);
    }
    function A(C, n, B, a, Q) {
      return j(Q - 464, n - 464, n);
    }
    function e(C, n, B, a, Q) {
      return j(C - -1141, n - 250, B);
    }
    function o(C, n, B, a, Q) {
      return JA(C - 48, C - 865, B);
    }
    if (this[e(-601, -615, "vKgX") + e(-616, -532, "P(TE")] = void (4149 * -2 + 1871 * 2 + 4556), !I)
      if (t(53, 38, -15, -32, "vurw") === o(598, 610, "3(lq")) {
        console[o(464, 587, "qlFh")](A(1082, "Hinw", 1075, 1157, 1076) + e(-603, -616, "XG%P") + A(987, "YG%D", 1052, 1152, 1056) + A(876, "3(lq", 1050, 1018, 950) + t(-88, 5, -77, 23, "W%kh")), this[e(-753, -740, "BH)K") + "se"] = void (-9407 + -23 * -409);
        return;
      } else {
        _0x266ba7 instanceof _0x83a5ac && _0x667171[e(-515, -586, "^34K") + e(-537, -635, "63Nv")](_0x580cf8);
        return;
      }
    function i(C, n, B, a, Q) {
      return DA(C - 267, C - -471, B - 253, a - 281, B);
    }
    await this[i(31, 99, ")rNp", 145) + A(998, "FdyU", 836, 832, 942) + "se"](I);
  }
  async [fA(285, 156, 100, "3(lq") + JA(-489, -445, "RTH(") + fA(241, 209, 160, "P(TE")](I) {
    const t = await fetch("" + I + this[n("2(do", -618, -648, -577) + n("%hmT", -478, -586, -569) + n("XG%P", -459, -497, -522) + o("[d@[", 986, 984, 1017)][0]), A = t.ok ? 0 : -3 * -1121 + -756 + -2606;
    function e(B, a, Q, E, x) {
      return JA(B - 301, Q - -289, B);
    }
    function o(B, a, Q, E, x) {
      return j(E - 638, a - 80, B);
    }
    function i(B, a, Q, E, x) {
      return fA(B - 467, x - -278, Q - 25, a);
    }
    function C(B, a, Q, E, x) {
      return j(E - 191, a - 477, a);
    }
    function n(B, a, Q, E, x) {
      return DA(B - 182, Q - -1130, Q - 82, E - 147, B);
    }
    return "" + I + this[e("A9tr", -523, -604) + n("k)Hk", -567, -565, -447) + C(770, "H0([", 776, 792) + i(-68, "vKgX", -9, -18, -32)][A];
  }
  [fA(160, 140, 25, "W%kh") + DA(705, 585, 590, 563, "c3X1") + "s"](I) {
    function t(e, o, i, C, n) {
      return j(o - -48, o - 280, n);
    }
    function A(e, o, i, C, n) {
      return j(o - -710, o - 64, C);
    }
    I[A(-183, -164, -50, "3(lq") + "ch"]((e) => console[t(321, 393, 414, 370, "W%kh")](e));
  }
  [j(577, 457, "[ye&") + j(396, 382, "oOAb") + JA(-303, -404, "JAFY")](I) {
    function t(A, e, o, i, C) {
      return j(e - -101, e - 196, C);
    }
    I[t(269, 392, 429, 451, "Zq%q") + "ch"]((A) => console[t(263, 366, 303, 247, "YG%D")](A));
  }
  [j(382, 378, "BqrX") + fA(237, 129, 254, "^34K")]() {
    function I(A, e, o, i, C) {
      return fA(A - 395, A - 120, o - 142, o);
    }
    function t(A, e, o, i, C) {
      return le(A - 236, e - 392, o - 94, i - 82, o);
    }
    return window[t(1037, 1137, "CV4r", 936) + I(212, 218, ")rNp")][I(379, 472, "vKgX") + t(1014, 1042, "Hinw", 898)];
  }
  [le(876, 946, 894, 763, "63Nv") + j(488, 552, "vurw") + j(529, 539, "4U4j")]() {
    function I(i, C, n, B, a) {
      return DA(i - 79, a - 714, n - 38, B - 210, B);
    }
    function t(i, C, n, B, a) {
      return JA(i - 427, B - -65, n);
    }
    function A(i, C, n, B, a) {
      return le(B - 149, C - 306, n - 42, B - 354, n);
    }
    function e(i, C, n, B, a) {
      return le(C - -1020, C - 17, n - 70, B - 87, n);
    }
    function o(i, C, n, B, a) {
      return j(B - 24, C - 448, i);
    }
    try {
      if (t(-623, -476, "RTH(", -530, -546) === t(-451, -497, "vKgX", -428, -348)) {
        if (!this[o("JAFY", 560, 704, 591, 533) + "se"])
          if (t(-527, -643, "c3X1", -525, -509) !== t(-320, -358, "JTu2", -443, -490)) _0x166d2d[I(1388, 1451, 1385, "4U4j", 1353)]();
          else throw new X0(e(-168, -175, "H0([", -92, -268) + e(-338, -218, "2(do", -237, -148) + I(1118, 1183, 1130, "Zq%q", 1213) + t(-284, -416, "[3eB", -362, -409) + ".");
        if (!this[A(759, 850, "B&Mr", 823, 714) + I(1228, 1221, 1275, "q7Gs", 1250) + "d"][A(1071, 995, "b4#Q", 990, 895) + t(-397, -496, "gMyf", -409, -490) + e(-99, -154, "w!Cx", -212, -178) + "ed"]())
          throw I(1217, 1355, 1327, "Hinw", 1297) !== I(1202, 1346, 1183, "k)Hk", 1284) ? new X0(t(-380, -508, "H0([", -486, -419) + t(-489, -427, "%hmT", -550, -609) + A(1039, 951, "RTH(", 982, 1036) + e(-282, -339, "^34K", -251, -228) + ".") : new _0x498773(A(980, 968, "E(d$", 1008, 939) + A(917, 881, "k)Hk", 867, 790) + I(1285, 1206, 1235, "Ig9M", 1209) + e(-208, -134, "mUEg", -32, -129) + ".");
        this[o("63Nv", 548, 508, 468, 516) + t(-488, -371, "JCzK", -384, -492)] = new Ni(Hr(this[o("P(TE", 694, 697, 640, 529) + "se"], this[t(-441, -602, "4U4j", -471, -389) + A(809, 873, "V#1F", 912, 855)]())), this[t(-483, -497, "I3rN", -390, -435) + o("(fV(", 502, 512, 618, 537) + "s"](this[I(1056, 1227, 1157, "JCzK", 1176) + o("W%kh", 546, 543, 654, 757)][A(964, 998, "v2)W", 999, 1063) + "s"]), this[I(1384, 1397, 1373, "E(d$", 1337) + e(-342, -336, ")rNp", -410, -267) + e(-193, -262, ")rNp", -301, -178)](this[A(873, 897, ")rNp", 935, 969) + e(-304, -200, "YG%D", -76, -250)][o("[ye&", 479, 411, 447, 355) + t(-366, -486, "gMyf", -368, -326)]);
      } else this[t(-478, -493, "@ZQU", -540, -645) + I(1300, 1321, 1319, "v2)W", 1351) + "d"] = _0x557e4a;
    } catch (i) {
      if (e(-154, -265, "vKgX", -136) === A(1088, 1110, "Zq%q", 979)) throw new _0x52db96(A(941, 955, "W%kh", 1017) + I(1263, 1179, 1202, "vurw", 1214) + t(-367, -327, "b4#Q", -311) + o("@ZQU", 643, 637, 581) + "d.");
      {
        if (i instanceof X0)
          if (o("A9tr", 501, 669, 563) === o("XG%P", 664, 714, 648)) i[A(958, 1058, "qlFh", 1060)]();
          else {
            _0x314073 instanceof _0x37a62a ? _0x521178[I(1233, 1326, 1116, "b4#Q", 1218)]() : _0x3b643e instanceof _0x2f27fe && _0x4709b9[I(1110, 1337, 1253, "JAFY", 1238)](_0x23778d);
            const n = {};
            n[e(-152, -209, "[d@[", -134) + I(1390, 1280, 1383, "JAFY", 1401)] = !1, n[I(1312, 1441, 1465, "BH)K", 1361) + "s"] = [], n[t(-374, -577, "c3X1", -497) + A(1027, 952, "JCzK", 928)] = [], n[t(-415, -413, "JCzK", -361) + I(1356, 1234, 1374, "JCzK", 1333) + t(-594, -536, "CV4r", -483)] = void (-9853 * -1 + -1952 + -7901), n[t(-215, -321, "v2)W", -320)] = function() {
            }, n[I(1282, 1459, 1486, "FdyU", 1369) + I(1347, 1262, 1119, "O4QM", 1228)] = "", this[o("vKgX", 692, 611, 564) + o("CV4r", 403, 534, 469)] = new _0x2c8753(n);
          }
        else if (i instanceof Error)
          if (o("oOAb", 503, 514, 617) === A(975, 978, "2(do", 971)) {
            if (!this[t(-483, -570, "W%kh", -449) + "se"]) throw new _0x23a843(e(-450, -324, "O4QM", -318) + I(1138, 1119, 1268, "3(lq", 1244) + t(-413, -321, "k)Hk", -391) + o("b4#Q", 332, 408, 415) + ".");
            if (!this[o("4U4j", 654, 526, 557) + A(924, 929, "V#1F", 806) + "d"][t(-270, -350, "I3rN", -349) + o("FdyU", 523, 500, 509) + A(986, 990, "vKgX", 884) + "ed"]()) throw new _0x5333c4(t(-533, -503, "^34K", -412) + I(1447, 1390, 1213, "@ZQU", 1332) + e(-361, -349, "q7Gs", -441) + A(1070, 1002, "XG%P", 992) + ".");
            this[t(-344, -406, "qlFh", -325) + e(-325, -279, "[ye&", -162)] = new _0x43beb0(_0x36c6ed(this[I(1152, 1196, 1141, "^34K", 1211) + "se"], this[e(-332, -305, "JCzK", -433) + t(-190, -187, "[3eB", -317)]())), this[e(-385, -264, "Y00F", -334) + I(1032, 1052, 1246, "XkC6", 1156) + "s"](this[A(924, 909, "63Nv", 872) + o("S]Tu", 622, 714, 620)][o(")rNp", 639, 664, 659) + "s"]), this[e(-340, -238, "JCzK", -124) + o("CV4r", 457, 535, 438) + t(-315, -311, "(fV(", -375)](this[A(828, 926, "A9tr", 880) + t(-601, -407, "CV4r", -495)][o("w!Cx", 359, 415, 407) + A(920, 724, "w!Cx", 840)]);
          } else console[t(-456, -438, "[d@[", -516)](i);
        const C = {};
        C[t(-568, -587, "I3rN", -513) + t(-273, -237, "b4#Q", -318)] = !1, C[t(-437, -326, "RTH(", -313) + "s"] = [], C[e(-434, -354, "P(TE", -233) + I(1311, 1199, 1381, "mUEg", 1261)] = [], C[o("WYXC", 422, 479, 450) + I(1317, 1507, 1448, "v2)W", 1382) + A(805, 772, "[3eB", 853)] = void (-6210 + 54 * 115), C[e(-397, -334, "vurw", -229)] = function() {
        }, C[I(1234, 1287, 1157, "I3rN", 1233) + o("BqrX", 422, 476, 487)] = "", this[e(-370, -328, "JCzK", -209) + A(1032, 1138, "S]Tu", 1024)] = new Ni(C);
      }
    }
  }
  [fA(91, 162, 178, "FdyU") + DA(667, 591, 716, 603, "S]Tu") + DA(569, 648, 586, 760, "XG%P") + "t"]() {
    function I(t, A, e, o, i) {
      return le(o - -1062, A - 129, e - 47, o - 358, e);
    }
    return this[I(-337, -437, "E(d$", -382) + I(-158, -225, "b4#Q", -259)];
  }
  [j(492, 478, "Ig9M") + j(380, 267, "V#1F") + JA(-261, -369, "V#1F")]() {
    var i;
    function I(C, n, B, a, Q) {
      return fA(C - 353, B - -712, B - 417, a);
    }
    function t(C, n, B, a, Q) {
      return DA(C - 101, C - -606, B - 124, a - 99, Q);
    }
    function A(C, n, B, a, Q) {
      return fA(C - 260, B - 287, B - 124, a);
    }
    function e(C, n, B, a, Q) {
      return fA(C - 112, B - -713, B - 182, a);
    }
    function o(C, n, B, a, Q) {
      return j(Q - -827, n - 262, C);
    }
    if (!this[o("%hmT", -237, -96, -123, -222) + "se"])
      return o("FdyU", -259, -377, -379, -355) === e(-593, -381, -478, "I3rN"), void 0;
    try {
      if (I(-342, -479, -438, "I3rN", -513) === t(28, -83, 97, -69, "[d@[")) this[e(-516, -290, -406, "H0([", -450) + "se"] = void (-18575 + 5 * 3715), _0x4088ec[t(-30, -15, 100, -104, "Hinw")](_0x494472);
      else {
        const C = JSON[o("vKgX", -308, -95, -315, -202)](this[I(-647, -595, -593, "WYXC", -666) + "se"]);
        return (i = C == null ? void 0 : C[I(-523, -535, -470, "vurw", -513) + e(-516, -509, -595, "gMyf", -583)]) == null ? void 0 : i[t(-42, -47, -137, 65, "2(do") + I(-298, -440, -401, "[ye&", -347)];
      }
    } catch (C) {
      if (o("XkC6", -570, -357, -532, -446) === A(353, 415, 369, "S]Tu")) {
        C instanceof Error && (e(-608, -404, -510, "BqrX") === I(-605, -723, -606, "w!Cx") ? _0x3742a2[I(-411, -432, -380, "S]Tu") + "ch"]((n) => _0x383cdd[t(-74, 12, 8, -165, "[3eB")](n)) : H[A(482, 365, 422, "b4#Q") + o("P(TE", -247, -310, -298, -354)](C));
        return;
      } else {
        _0x3959e2[t(-5, -77, 109, -132, "b4#Q")](I(-567, -408, -500, "(fV(") + e(-424, -535, -513, "vurw") + e(-624, -595, -505, "P(TE") + o("k)Hk", -515, -392, -389, -408) + o("JTu2", -474, -383, -527, -416)), this[e(-394, -541, -521, "XG%P") + "se"] = void (-6297 + -3 * -2099);
        return;
      }
    }
  }
}
const h0 = class h0 extends Pr {
  static getInstance() {
    if (!this._instance) {
      const I = new qr();
      this._instance = new h0(I);
    }
    return this._instance;
  }
};
m(h0, "_instance");
let JI = h0;
const l0 = class l0 {
  constructor() {
    m(this, "lastDetails", {});
    m(this, "delayedTime", 3429 * -1 + -1 * -2468 + 31 * 31);
  }
  static getInstance() {
    return !this._instance && (this._instance = new l0()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -922 * 5 + -2566 * -2 + -522;
  }
  isDetailChanged(I, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(I, t) {
    this.isDetailChanged(I, t) && ho(I, t);
  }
  dispatchDelayedCustomEventOnChange(I, t, A) {
    const e = performance.now();
    e - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, t), this.delayedTime = e);
  }
};
m(l0, "_instance");
let Yt = l0;
const st = Yt.getInstance(), pn = (g, I, t = La) => {
  const A = {};
  A.instructionCode = I.code, A.isEscalated = I.isEscalated ?? !1;
  const e = A;
  st.dispatchDelayedCustomEventOnChange(g, e, t);
}, jr = (g, I) => {
  st.dispatchCustomEventOnChange(g, I);
}, Vr = (g, I) => {
  const t = {};
  t.size = I;
  const A = t;
  st.dispatchCustomEventOnChange(g, A);
}, _r = (g, I, t) => {
  const A = I.confidence < t ? void 0 : I, e = {};
  e.detectedObject = A;
  const o = e;
  st.dispatchCustomEventOnChange(g, o);
}, Xr = (g, { detection: I, fps: t, image: A, invalidValidators: e, isInCandidateSelection: o }) => {
  const i = {};
  i.image = A, i.data = {}, i.data.detection = I, i.data.fps = t, i.data.isInCandidateSelection = o, i.data.invalidValidators = e, i.data.imageResolution = {}, i.data.imageResolution.width = A.width, i.data.imageResolution.height = A.height;
  const C = i;
  st.dispatchCustomEventOnChange(g, C);
};
function zr(g, I) {
  const t = {};
  t.instructionCode = I;
  const A = t;
  st.dispatchCustomEventOnChange(g, A);
}
const WI = (g, I) => {
  ho(g, I);
}, $r = (g, I) => {
  const { cameraResolution: t, shouldCameraMirror: A } = I;
  K(() => {
    if (!t) return;
    const e = {};
    e.cameraResolution = t, e.isMirroring = A, jr(g, e);
  }, [t, A, g]);
}, Ax = (g) => g === $C.CONTROL ? !Qn() : !0, ex = (g, I) => {
  const { appState: t, handleAppStateChange: A, handleError: e, isCameraReady: o } = xt(), [i, C] = nA(), n = uA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? Ax(g);
  }, [I, i, g, o]);
  K(() => {
    const a = () => {
      t !== PA.LOADING && A(PA.RUNNING);
    }, Q = () => {
      C(i === void 0 ? !n : !i);
    }, E = async () => {
      if (I) {
        A(PA.LOADING);
        try {
          await I.switchCamera(), A(PA.RUNNING);
        } catch (s) {
          if (s instanceof Error) {
            e(H.fromCameraError(s));
            return;
          }
        }
        C(void 0);
      }
    }, x = (s) => {
      var d;
      switch ((d = s.detail) == null ? void 0 : d["instruction"]) {
        case q0.CONTINUE_DETECTION:
          a();
          break;
        case q0.TOGGLE_MIRROR:
          Q();
          break;
        case q0.SWITCH_CAMERA:
          E();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(g, x), () => {
      document.removeEventListener(g, x);
    };
  }, [t, I, e, i, A, n, g]);
  const B = {};
  return B.shouldCameraMirror = n, B;
};
function tx(g, I) {
  K(() => {
    if (!g.current) return;
    const t = new ResizeObserver((A) => {
      const [e] = A;
      Vr(I, e.contentRect);
    });
    return t.observe(g.current), () => {
      t.disconnect();
    };
  }, [g, I]);
}
function gx(g) {
  return ge(Math.abs(g));
}
const Ix = () => {
  const [g, I] = nA(null), t = AA(new Jt(1 * -3436 + -3114 + -1 * -6555));
  function A(o) {
    const { z: i } = o.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(gx(i));
    const C = ge(Je(t.current)), n = {};
    n.z = C, I(n);
  }
  K(() => (window.addEventListener("devicemotion", cr(A, rr), !0), () => {
    window.removeEventListener("devicemotion", A, !0);
  }), []);
  const e = {};
  return e.acceleration = g, e;
}, uo = (g, I) => {
  const t = AA(I);
  K(() => {
    t.current = I;
  }, [I]), K(() => {
    const A = (e) => t.current(e);
    return document.addEventListener(g, A), () => {
      document.removeEventListener(g, A);
    };
  }, [g]);
};
var ox = Symbol.for("preact-signals");
function fo() {
  if (Ve > 1)
    Ve--;
  else {
    for (var g, I = !1; St !== void 0; ) {
      var t = St;
      for (St = void (2 * -1947 + -8738 + 12632), YI++; void (-1781 + -137 * -13) !== t; ) {
        var A = t.o;
        if (t.o = void (9407 + 6281 * -1 + -1042 * 3), t.f &= -(17 * 285 + 9024 + 2311 * -6), !(-2 * 3323 + 22 * 37 + 5840 & t.f) && kn(t)) try {
          t.c();
        } catch (e) {
          !I && (g = e, I = !(2 * 2834 + 6435 + -7 * 1729));
        }
        t = A;
      }
    }
    if (YI = 0, Ve--, I) throw g;
  }
}
var T = void (-107 * 53 + -3281 + 1119 * 8), St = void (-5804 + 2 * 3239 + -674), Ve = -3923 + 389 * -17 + -2634 * -4, YI = -61 * 14 + -7884 + -2 * -4369, o0 = 0;
function mn(g) {
  if (void (1 * 717 + -796 + 79) !== T) {
    var I = g.n;
    if (void (931 * -10 + 737 * -1 + 17 * 591) === I || I.t !== T)
      return I = { i: 0, S: g, p: T.s, n: void (1 * -227 + -929 * -10 + -9063), t: T, e: void (-1922 + -2903 * -3 + -6787), x: void (2412 + -1 * -838 + 2 * -1625), r: I }, void (-638 + -16 * 188 + 3646) !== T.s && (T.s.n = I), T.s = I, g.n = I, -1621 * 2 + 3 * 115 + 1 * 2929 & T.f && g.S(I), I;
    if (-(1 * 4303 + 2 * -927 + -2448) === I.i)
      return I.i = 569 + -1 * 569, void (306 * 25 + -6642 + -126 * 8) !== I.n && (I.n.p = I.p, void (-12 * 722 + 374 * 1 + 8290) !== I.p && (I.p.n = I.n), I.p = T.s, I.n = void (2 * 2360 + 2094 + -6814), T.s.n = I, T.s = I), I;
  }
}
function QA(g) {
  this.v = g, this.i = -2966 * 1 + 3949 + -983, this.n = void (1 * -3881 + 2 * 3061 + -2241), this.t = void 0;
}
QA.prototype.brand = ox, QA.prototype.h = function() {
  return !(2940 + -19 * -214 + 62 * -113);
}, QA.prototype.S = function(g) {
  this.t !== g && void (-1 * 9257 + -8977 + 2026 * 9) === g.e && (g.x = this.t, this.t !== void 0 && (this.t.e = g), this.t = g);
}, QA.prototype.U = function(g) {
  if (void (9823 + -1 * 334 + 1 * -9489) !== this.t) {
    var I = g.e, t = g.x;
    void (5462 + 6793 * -1 + 1331) !== I && (I.x = t, g.e = void (1376 + 1 * 9811 + -1017 * 11)), void (8314 + -8314 * 1) !== t && (t.e = I, g.x = void (-31 * 21 + 1 * 6043 + 5392 * -1)), g === this.t && (this.t = t);
  }
}, QA.prototype.subscribe = function(g) {
  var I = this;
  return yo(function() {
    var t = I.value, A = T;
    T = void 0;
    try {
      g(t);
    } finally {
      T = A;
    }
  });
}, QA.prototype.valueOf = function() {
  return this.value;
}, QA.prototype.toString = function() {
  return this.value + "";
}, QA.prototype.toJSON = function() {
  return this.value;
}, QA.prototype.peek = function() {
  var g = T;
  T = void (-1 * 5623 + 1258 + 4365);
  try {
    return this.value;
  } finally {
    T = g;
  }
}, Object.defineProperty(QA.prototype, "value", { get: function() {
  var g = mn(this);
  return void (-4 * -2177 + -366 * 17 + -2486) !== g && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if (YI > -1 * 4750 + 7450 + 1 * -2600) throw new Error("Cycle detected");
    this.v = g, this.i++, o0++, Ve++;
    try {
      for (var I = this.t; void (-1649 * 6 + -135 * 71 + 19479) !== I; I = I.x) I.t.N();
    } finally {
      fo();
    }
  }
} });
function Gn(g) {
  return new QA(g);
}
function kn(g) {
  for (var I = g.s; void (35 * -121 + -3895 + 8130) !== I; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !0;
  return !1;
}
function bn(g) {
  for (var I = g.s; void (19 * 319 + -6793 * 1 + 732) !== I; I = I.n) {
    var t = I.S.n;
    if (void (1 * -9169 + -12 * -541 + 2677) !== t && (I.r = t), I.S.n = I, I.i = -(-8779 * 1 + 4157 * 1 + 4623), void (6 * 305 + -10 * -139 + 161 * -20) === I.n) {
      g.s = I;
      break;
    }
  }
}
function Nn(g) {
  for (var I = g.s, t = void (-39 * 133 + 8430 + 141 * -23); void (4317 + -1439 * 3) !== I; ) {
    var A = I.p;
    -(6809 + -1 * 3011 + -3797) === I.i ? (I.S.U(I), void (7581 + -1 * -8893 + 2 * -8237) !== A && (A.n = I.n), void (1027 * 2 + -4420 + 2366) !== I.n && (I.n.p = A)) : t = I, I.S.n = I.r, void (417 * 2 + 691 * 12 + -9126) !== I.r && (I.r = void (1753 * -1 + 693 + 1060)), I = A;
  }
  g.s = t;
}
function Ze(g) {
  QA.call(this, void (-6644 + -7 * -181 + -1 * -5377)), this.x = g, this.s = void 0, this.g = o0 - 1, this.f = -7959 + -379 * 6 + 10237;
}
(Ze.prototype = new QA()).h = function() {
  if (this.f &= -(3 * -1987 + 4404 + 1560), -2 * 1439 + 68 * -142 + 12535 & this.f) return !(1 * 1371 + 7755 + -9125);
  if ((1 * 5340 + 1170 + -6474 & this.f) == 32) return !(-322 * 10 + 1 * -2789 + -6009 * -1);
  if (this.f &= -(-4011 + 6841 * 1 + -2825), this.g === o0) return !(-1 * -6 + 3023 * -1 + -1 * -3017);
  if (this.g = o0, this.f |= -2788 * 1 + 133 + 2656, this.i > 289 * -19 + -5792 + 11283 && !kn(this)) return this.f &= -(8224 * -1 + 9179 + -953), !(8526 + -58 * 147);
  var g = T;
  try {
    bn(this), T = this;
    var I = this.x();
    (10596 + 2 * -5290 & this.f || this.v !== I || -2625 + -1 * -2435 + -19 * -10 === this.i) && (this.v = I, this.f &= -(-9 * 337 + 9043 + -5993), this.i++);
  } catch (t) {
    this.v = t, this.f |= 394 * -4 + -6243 + -7835 * -1, this.i++;
  }
  return T = g, Nn(this), this.f &= -(-2 * -1187 + -4028 + -18 * -92), !(904 * 1 + -1147 + 243);
}, Ze.prototype.S = function(g) {
  if (void (6025 + 1 * -6619 + 22 * 27) === this.t) {
    this.f |= 8352 + 7078 * 1 + -86 * 179;
    for (var I = this.s; void (-1451 * -5 + 1 * 7941 + 15196 * -1) !== I; I = I.n) I.S.S(I);
  }
  QA.prototype.S.call(this, g);
}, Ze.prototype.U = function(g) {
  if (void (-8986 + 71 * 38 + 2 * 3144) !== this.t && (QA.prototype.U.call(this, g), void (-4849 + 193 * -16 + 7937) === this.t)) {
    this.f &= -(1067 * 1 + -5145 + -4111 * -1);
    for (var I = this.s; void (6109 * -1 + 3005 + 3104) !== I; I = I.n) I.S.U(I);
  }
}, Ze.prototype.N = function() {
  if (!(3 * 1397 + 9720 + 1987 * -7 & this.f)) {
    this.f |= -429 * -9 + -159 * 56 + 5049;
    for (var g = this.t; void (-3764 + 133 * -59 + 11611) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(Ze.prototype, "value", { get: function() {
  if (-9147 * -1 + 1621 * -4 + -2662 & this.f) throw new Error("Cycle detected");
  var g = mn(this);
  if (this.h(), void (-5900 + -317 * 19 + 11923) !== g && (g.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function ix(g) {
  return new Ze(g);
}
function Fn(g) {
  var I = g.u;
  if (g.u = void (309 * -27 + 8933 + 2 * -295), typeof I == "function") {
    Ve++;
    var t = T;
    T = void (-2396 + 1 * 2396);
    try {
      I();
    } catch (A) {
      throw g.f &= -2, g.f |= 8, Do(g), A;
    } finally {
      T = t, fo();
    }
  }
}
function Do(g) {
  for (var I = g.s; I !== void 0; I = I.n) I.S.U(I);
  g.x = void (-7485 + -953 * -5 + 8 * 340), g.s = void (7057 * -1 + -1 * -2370 + 4687), Fn(g);
}
function Cx(g) {
  if (T !== this) throw new Error("Out-of-order effect");
  Nn(this), T = g, this.f &= -(12688 + 2 * -6343), 3527 + -4 * 971 + -5 * -73 & this.f && Do(this), fo();
}
function kt(g) {
  this.x = g, this.u = void (-7902 * 1 + -31 * 236 + 2 * 7609), this.s = void (-47 * -44 + 11 * 311 + 11 * -499), this.o = void (-4255 + -113 * 32 + 7871), this.f = 1 * 7803 + 9453 + -1 * 17224;
}
kt.prototype.c = function() {
  var g = this.S();
  try {
    if (54 * 54 + 16 * -71 + 2 * -886 & this.f || this.x === void 0) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, kt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -7811 + 3 * 1153 + 1451 * 3, this.f &= -(4747 + 415 * -5 + -2663), Fn(this), bn(this), Ve++;
  var g = T;
  return T = this, Cx.bind(this, g);
}, kt.prototype.N = function() {
  !(-8247 * 1 + 9980 + -1731 & this.f) && (this.f |= 2, this.o = St, St = this);
}, kt.prototype.d = function() {
  this.f |= -3 * 1437 + 8761 * 1 + -2 * 2221, 1 * -2039 + 2 * 1764 + -496 * 3 & this.f || Do(this);
};
function yo(g) {
  var I = new kt(g);
  try {
    I.c();
  } catch (t) {
    throw I.d(), t;
  }
  return I.d.bind(I);
}
var $0;
function je(g, I) {
  N[g] = I.bind(null, N[g] || function() {
  });
}
function ug(g) {
  $0 && $0(), $0 = g && g.S();
}
function Rn(g) {
  var I = this, t = g.data, A = _e(t);
  A.value = t;
  var e = uA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -9799 + -1 * -9803;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !eC(e.peek()) && 5 * -786 + 283 * 23 + -2576 === ((i = I.base) == null ? void (-1 * -122 + 5962 + -26 * 234) : i.nodeType) ? I.base.data = e.peek() : (I.__$f |= -103 * -43 + 4433 + -8861, I.setState({}));
    }, ix(function() {
      var i = A.value.value;
      return 1030 * -5 + 1 * 4432 + 1 * 718 === i ? -1 * -5869 + -1911 * -3 + -2 * 5801 : !(-12959 + -1 * -12959) === i ? "" : i || "";
    });
  }, []);
  return e.value;
}
Rn.displayName = "_st";
var UI = {};
UI.configurable = !(8912 + -820 * 7 + -3172), UI.value = void 0;
var HI = {};
HI.configurable = !(-1350 + -270 * -5), HI.value = Rn;
var KI = {};
KI.configurable = !(8123 + 46 * 167 + -3161 * 5), KI.get = function() {
  var g = {};
  return g.data = this, g;
};
var OI = {};
OI.configurable = !(1 * -5254 + 163 * -26 + -42 * -226), OI.value = 1;
var ft = {};
ft.constructor = UI, ft.type = HI, ft.props = KI, ft.__b = OI, Object.defineProperties(QA.prototype, ft), je("__b", function(g, I) {
  if (typeof I.type == "string") {
    var t, A = I.props;
    for (var e in A) if (e !== "children") {
      var o = A[e];
      o instanceof QA && (t || (I.__np = t = {}), t[e] = o, A[e] = o.peek());
    }
  }
  g(I);
}), je("__r", function(g, I) {
  ug();
  var t, A = I.__c;
  A && (A.__$f &= -(-11 * -514 + 5330 + 5491 * -2), void (-3889 * -1 + -398 * 18 + 3275) === (t = A.__$u) && (A.__$u = t = function(e) {
    var o;
    return yo(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= -6734 + 2245 * 3, A.setState({});
    }, o;
  }())), ug(t), g(I);
}), je("__e", function(g, I, t, A) {
  ug(), g(I, t, A);
}), je("diffed", function(g, I) {
  ug();
  var t;
  if (typeof I.type == "string" && (t = I.__e)) {
    var A = I.__np, e = I.props;
    if (A) {
      var o = t.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (3 * -1374 + -17 * 358 + -1276 * -8) !== C && !(i in A) && (C.d(), o[i] = void (7232 + -1783 * 5 + -9 * -187));
      }
      else t.U = o = {};
      for (var n in A) {
        var B = o[n], a = A[n];
        B === void 0 ? (B = nx(t, n, a, e), o[n] = B) : B.o(a, e);
      }
    }
  }
  g(I);
});
function nx(g, I, t, A) {
  var e = I in g && g.ownerSVGElement === void 0, o = Gn(t);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: yo(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, e ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
je("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var t = I.__e;
    if (t) {
      var A = t.U;
      if (A) {
        t.U = void (-8081 * -1 + 9058 + -17139);
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
      C && (i.__$u = void (-7476 + 4277 * -2 + 16030), C.d());
    }
  }
  g(I);
}), je("__h", function(g, I, t, A) {
  (A < -49 * -49 + 308 + -2706 || 23 * -181 + 8693 * 1 + -1 * 4521 === A) && (I.__$f |= 2), g(I, t, A);
}), SA.prototype.shouldComponentUpdate = function(g, I) {
  var t = this.__$u;
  if (!(t && void (-5 * 1697 + 721 * -3 + 5324 * 2) !== t.s || 31 * -175 + 107 + -887 * -6 & this.__$f)) return !(-1 * 9057 + -2666 + 11723);
  if (-3 * -1387 + -33 * 139 + 429 & this.__$f) return !(-6133 * -1 + -9014 * -1 + 99 * -153);
  for (var A in I) return !(-7844 + -6668 * -1 + 1176);
  for (var e in g) if (e !== "__source" && g[e] !== this.props[e]) return !0;
  for (var o in this.props) if (!(o in g)) return !(8141 + -2 * -8 + -8157 * 1);
  return !(-1924 * -2 + -906 * 5 + 1 * 683);
};
function _e(g) {
  return uA(function() {
    return Gn(g);
  }, []);
}
const Bx = async () => WebAssembly.validate(new Uint8Array([11601 + 11601 * -1, -1 * -7493 + 1 * 5961 + -703 * 19, 1977 + 38 * -49, 2366 * -1 + 61 * -48 + 5403, -6055 + -38 * 148 + -40 * -292, 4 * -285 + -1 * -5503 + -4363 * 1, -9342 + 6 * -1290 + 17082, 11 * 887 + -5223 * 1 + -4534, -1 * -8152 + 2872 + -1 * 11023, 159 * 1 + 9240 + -9394, -7480 + -3 * -2843 + 2 * -524, 96, -11148 + -2 * -5574, -12431 + 3108 * 4, 2953 + -1 * -3828 + 3329 * -2, -140 * -17 + -53 * -83 + 44 * -154, 2, -5902 + 5 * -225 + -502 * -14, -8538 * -1 + 5 * -323 + -6923, 365 * 10 + 1 * 5374 + 9014 * -1, 1489 * -3 + 9 * -1042 + -5 * -2771, -4 * -1803 + -7268 + 57, 13 * 107 + -5953 + 2285 * 2, -8142 + -7874 * -1 + -1 * -268, 1793 + -24 * 72, 0, 1108 * -8 + 359 * 3 + 8040, 15, 253, 8897 + -4930 * -1 + -13729, -8101 * 1 + 9847 * -1 + -17959 * -1]));
function Qx() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(-3 * -43 + -9706 + 53 * 181);
}
function ax() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = Qx();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function rx(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const TI = {};
TI.label = ">1m", TI.time = 60;
const qI = {};
qI.label = ">45", qI.time = 45;
const ZI = {};
ZI.label = ">30", ZI.time = 30;
function Fi(g, I = [TI, qI, ZI]) {
  const t = I.sort((A, e) => e.time - A.time);
  for (const A of t)
    if (g > A.time) return A.label;
  return "" + g;
}
const Ri = (g) => Math.round(g / 500) * 500 / (5678 + -10 * -413 + -3 * 2936), Si = (g) => g ? g <= 8332 * -1 + -3106 + 369 * 31 ? Math.round(g * 20) / (2063 + -19 * -526 + -12037 * 1) : Math.round(g / (-12 * -8 + -23 * -346 + -4002 * 2)) * (-3987 * -1 + -8 * -1024 + -12129) : -139 * -8 + -9716 + -478 * -18, xx = (g) => Math.round(g * (3143 + 151 * 2 + -3443)) / (515 * -11 + 2 * -3154 + 11975);
async function Sn() {
  return await Bx() ? pi.SIMD : pi.NO_SIMD;
}
var Ot, u0;
class Mn {
  constructor(I) {
    L(this, Ot, !0);
    L(this, u0, Date.now());
    m(this, "analytics");
    m(this, "samVersion");
    m(this, "sessionToken");
    m(this, "onDetectionCallback");
    m(this, "onCaptureCallback");
    m(this, "createProtoMessage");
    m(this, "fpsOfAllImages", new Jt(8093 + -1047 * -7 + -15392));
    m(this, "cameraService");
    m(this, "imageProcessor");
    m(this, "instructionEscalation");
    this.cameraService = I.cameraService, this.imageProcessor = I.imageProcessor, this.analytics = I.analytics, this.samVersion = I.samVersion, this.sessionToken = I.sessionToken, this.createProtoMessage = I.createProtoMessage, this.onDetectionCallback = I.onDetectionCallback, this.onCaptureCallback = I.onCaptureCallback, this.instructionEscalation = I.instructionEscalation;
  }
  async run() {
    for (; D(this, Ot); )
      await this.iterate();
    return this;
  }
  stop() {
    M(this, Ot, !1);
  }
  async trackCaptureProcess(I, t) {
    var i;
    const A = Date.now(), e = Je(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: e, captureProcessDurationInMs: A - D(this, u0), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Sn() });
  }
  onDetection(I, t) {
    this.onDetectionCallback({ ...I, avgFps: ge(Je(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: t, detection: A }) {
    const e = {};
    e.width = t.width, e.height = t.height;
    const o = e, i = await ur(t), C = await this.cameraService.getCameraProperties(), n = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, B = {};
    B.sessionToken = this.sessionToken, B.web = n;
    const a = B, Q = await this.createProtoMessage(i, a), E = {};
    E.detection = A, E.imageResolution = o;
    const x = {};
    x.image = i, x.data = E;
    const s = x;
    this.stop();
    const d = {};
    d.imageData = s, d.protoMessage = Q, d.webMetadata = n, d.candidateSelectionImages = I, this.onCaptureCallback(d);
  }
  collectAndEscalate(I) {
    if (!this.instructionEscalation) return !1;
    const t = I;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
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
    await bI(Math.max(Di.max - I, Di.min));
  }
}
Ot = new WeakMap(), u0 = new WeakMap();
class Ex extends Mn {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, instructionCodeMap: e, ...o }) {
    super(o);
    m(this, "candidateSelectionTime", -250 * 19 + -9252 + 14002);
    m(this, "candidatesSelectionFramesCount", -9816 + 818 * 12);
    m(this, "isInCandidateSelection", !1);
    m(this, "lastImage", null);
    m(this, "bestImage", null);
    m(this, "candidateSelectionImages", []);
    m(this, "fallbackInstruction");
    m(this, "instructionCodeMap");
    m(this, "checkToInstructionCodeMap");
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
      throw A instanceof Error ? H.fromCameraError(A) : H.fromError(A);
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
    this.candidateSelectionTime === 35 * -49 + 4 * 310 + 5 * 95 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= P0.minFrames ? t > P0.minDuration : t > P0.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: A } = this.bestImage || {};
    if (A && t) this.trackCaptureProcess(t, A), await this.onCapture({ canvasImage: A, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new H("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: A }) {
    const e = this.getDetectionEndTime(A.timestamp), o = ge(1e3 / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, n = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), B = {};
    B.isNewDetectionValid = t.isValid, B.newInvalidInstruction = n[-1 * -7823 + 1823 + -14 * 689];
    const a = this.getInstructionCode(B), Q = this.collectAndEscalate(a), E = {};
    return E.detection = t.detection, E.instructionCode = a, E.isEscalated = Q, E.invalidValidators = n, E.isInCandidateSelection = this.isInCandidateSelection, { processedImage: E, detectionTime: e, fps: o, avgFps: ge(Je(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: A }) {
    var e;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (e = this.lastImage) != null && e.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, A) {
    return A.sharpness > t.sharpness;
  }
}
var Qe, Ge;
class sx extends Mn {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, ...e }) {
    super(e);
    L(this, Qe, void (6735 + 3194 * -2 + -347 * 1));
    L(this, Ge);
    m(this, "fallbackInstruction");
    m(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var A, e;
    return (A = t.detail) != null && A["instruction"] ? Object.values(Rg).includes((e = t.detail) == null ? void 0 : e["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    M(this, Ge, (t) => {
      var A;
      this.isRequestCaptureEventValid(t) && M(this, Qe, (A = t.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(DI.REQUEST_CAPTURE, D(this, Ge));
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
    return D(this, Qe) ? D(this, Qe) === Rg.FIRST_FRAME ? !0 : D(this, Qe) === Rg.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (A) {
      throw A instanceof Error ? H.fromCameraError(A) : H.fromError(A);
    }
  }
  async onCaptureDone(t, A) {
    this.trackCaptureProcess(A, t);
    const e = {};
    e.canvasImage = t, e.detection = A, e.candidateSelectionImages = [], await this.onCapture(e), M(this, Qe, void (2 * 3607 + -2 * -1793 + -10800));
  }
  getDetectionDetails(t, A) {
    const e = this.getDetectionEndTime(t.timestamp), o = ge((-1822 * 1 + -2230 + 5052) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = t.image.width, i.height = t.image.height;
    const C = i, n = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), B = this.getInstructionCode(n[-13 * -626 + 23 * -419 + -1499 * -1]), a = this.collectAndEscalate(B), Q = {};
    return Q.detection = A.detection, Q.instructionCode = B, Q.invalidValidators = n, Q.isInCandidateSelection = !1, Q.isEscalated = a, { processedImage: Q, detectionTime: e, fps: o, avgFps: ge(Je(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), D(this, Ge) && document.removeEventListener(DI.REQUEST_CAPTURE, D(this, Ge));
  }
}
Qe = new WeakMap(), Ge = new WeakMap();
function cx({ captureMode: g, ...I }) {
  return g === Tg.AUTO_CAPTURE ? new Ex(I) : new sx(I);
}
function dx({ cameraResolution: g, cameraService: I, customEvent: t }) {
  const { shouldCameraMirror: A } = ex(t.CONTROL, I), e = {};
  e.cameraResolution = g, e.shouldCameraMirror = A, $r(t.CAMERA_PROPS_CHANGED, e), K(() => () => {
    Yt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function hx({ captureMode: g, checkToInstructionCodeMap: I, controller: t, createProtoMessage: A, customEvent: e, fallbackInstruction: o, instructionCodeMap: i, onCapture: C, onDetection: n, sessionToken: B }) {
  const a = AA(!1), { appState: Q, handleAppStateChange: E, isCameraReady: x } = xt(), { sunfish: s } = Et(), { analytics: d } = co(), { cameraResolution: h, cameraService: r, onCameraResolutionChange: u, videoRef: p } = Fr(), b = {};
  b.cameraResolution = h, b.cameraService = r, b.customEvent = e;
  const { shouldCameraMirror: v } = dx(b), S = _e(void 0), w = (r == null ? void 0 : r["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && s && x, V = GA((U) => {
    E(PA.WAITING), C(U);
  }, [C, E]), EA = GA((U, Ie) => {
    u(U.resolution), S.value = U, n(U, Ie);
  }, [n, S, u]);
  K(() => {
    !a.current && w && (a.current = !0, E(PA.RUNNING));
  }, [w, E]), K(() => {
    if (Q !== PA.RUNNING || !w) return;
    if (!r || !t) throw new H("Cannot start detection");
    t.imageProcessor.reset();
    const U = {};
    U.captureMode = g, U.analytics = d, U.cameraService = r, U.imageProcessor = t.imageProcessor, U.fallbackInstruction = o, U.instructionCodeMap = i, U.checkToInstructionCodeMap = I, U.sessionToken = B, U.samVersion = t.samVersion, U.createProtoMessage = A, U.onCaptureCallback = V, U.onDetectionCallback = EA, U.instructionEscalation = t.instructionEscalation;
    const Ie = cx(U);
    return t.runDetectionLoop(Ie), () => {
      t.stopDetectionLoop();
    };
  }, [Q, w, t, r, V, EA, B, S, d, A, i, I, o, g]);
  const q = {};
  return q.videoRef = p, q.cameraResolution = h, q.detectionDetails = S, q.shouldCameraMirror = v, q;
}
function Ln({ callback: g, delay: I, skip: t = !1 }) {
  const [A, e] = nA(!1), o = AA(g), i = AA(null);
  K(() => {
    o.current = g;
  }, [g]);
  const C = GA(() => {
    i.current && (clearTimeout(i.current), i.current = null), e(!1);
  }, []), n = GA(() => {
    t || (C(), e(!0), i.current = setTimeout(() => {
      o.current(), e(!1);
    }, I));
  }, [I, C, t]);
  K(() => {
    n();
  }, [I, C, n]);
  const B = {};
  return B.isActive = A, B.reset = n, B.clear = C, B;
}
function vn(g) {
  const I = AA([]);
  return K(() => {
    I.current.forEach((t) => t()), I.current = [];
  }, [g]), (t) => {
    I.current.push(t);
  };
}
const lx = () => typeof document < "u" && document.hasFocus();
function ux(g = {}) {
  const I = AA(g), t = AA(lx()), [A, e] = nA(t.current);
  K(() => {
    I.current = g;
  }), K(() => {
    function i(a) {
      t.current = a, e(a);
    }
    function C() {
      Promise.resolve().then(() => {
        var a, Q, E, x;
        !t.current && ((Q = (a = I.current).onFocus) == null || Q.call(a), (x = (E = I.current).onChange) == null || x.call(E, !0)), i(!0);
      });
    }
    function n() {
      Promise.resolve().then(() => {
        var a, Q, E, x;
        t.current && ((Q = (a = I.current).onBlur) == null || Q.call(a), (x = (E = I.current).onChange) == null || x.call(E, !1)), i(!1);
      });
    }
    function B() {
      document.visibilityState === "hidden" && n();
    }
    return window.addEventListener("focus", C), window.addEventListener("blur", n), window.document.addEventListener("visibilitychange", B), () => {
      window.removeEventListener("focus", C), window.removeEventListener("blur", n), window.document.removeEventListener("visibilitychange", B);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = A, o;
}
function fx(g, I) {
  if (!g) return I;
  const { detectionRecord: t, hashedDetectedImages: A } = g;
  I.hashedDetectedImages && (A == null || A.push(...I.hashedDetectedImages)), I.detectionRecord && (t == null || t.push(...I.detectionRecord));
  const e = { ...g };
  return e.hashedDetectedImages = A, e.detectionRecord = t, e;
}
function Dx() {
  const g = _e(null);
  function I({ cameraProperties: A }) {
    g.value = fx(g.value, A);
  }
  const t = {};
  return t.cameraProperties = g, t.mergeCameraProperties = I, t;
}
const Jn = nt(null), wo = () => {
  const g = se(Jn);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, yx = ({
  assetsDirectoryPath: g,
  captureMode: I,
  onPhotoTaken: t,
  sessionToken: A,
  thresholds: e
}) => {
  var o, i, C;
  return {
    onPhotoTaken: t,
    captureMode: I ?? Tg.AUTO_CAPTURE,
    assetsDirectoryPath: En(g),
    sessionToken: A,
    thresholds: {
      faceConfidence: (e == null ? void 0 : e.faceConfidence) ?? _a,
      minFaceSizeRatio: (e == null ? void 0 : e.minFaceSizeRatio) ?? Xa,
      maxFaceSizeRatio: (e == null ? void 0 : e.maxFaceSizeRatio) ?? za,
      sharpnessThreshold: (e == null ? void 0 : e.sharpnessThreshold) ?? er,
      brightnessLowThreshold: (e == null ? void 0 : e.brightnessLowThreshold) ?? tr,
      brightnessHighThreshold: (e == null ? void 0 : e.brightnessHighThreshold) ?? gr,
      outOfBoundsThreshold: (e == null ? void 0 : e.outOfBoundsThreshold) ?? $a,
      devicePitchAngleThreshold: (e == null ? void 0 : e.devicePitchAngleThreshold) ?? Ir,
      mouth: {
        confidence: ((o = e == null ? void 0 : e.mouth) == null ? void 0 : o.confidence) ?? Ar,
        status: {
          min: ((i = e == null ? void 0 : e.mouth) == null ? void 0 : i.status.min) ?? ui.min,
          max: ((C = e == null ? void 0 : e.mouth) == null ? void 0 : C.status.max) ?? ui.max
        }
      },
      leftEye: (e == null ? void 0 : e.leftEye) ?? {
        confidence: fi
      },
      rightEye: (e == null ? void 0 : e.rightEye) ?? {
        confidence: fi
      }
    }
  };
};
function wx({
  cameraOptions: g,
  children: I
}) {
  const t = uA(() => yx(g), [g]);
  return /* @__PURE__ */ y(Jn.Provider, { value: t, children: I });
}
function px({ onFaceTrackingLost: g, skipOutsideOfCandidateSelection: I }) {
  const t = AA(g);
  K(() => {
    t.current = g;
  }, [g]);
  const A = GA((o) => {
    if (!o.detail) return;
    const { data: i } = o.detail;
    I && !i.isInCandidateSelection || i.invalidValidators.includes(IA.FACE_NOT_PRESENT) && t.current();
  }, [I]), e = {};
  return e.handleFaceDetection = A, e;
}
function mx(g) {
  return function(t) {
    const { handleFaceDetection: A } = g(t);
    uo(ZA.FACE_DETECTION, A);
  };
}
const Gx = ({ children: g }) => {
  const I = AA(null);
  return tx(I, ZA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ y(la, { ref: I, children: g });
}, po = 0 + 0.5;
function kx() {
  const g = {};
  g.max = po;
  const I = {};
  I.confidence = 0.3, I.status = g;
  const t = {};
  return t.mouth = I, t;
}
const bx = -2726 + -6 * 523 + -5864 * -1 + 0.4;
function Nx(g) {
  const I = {};
  I.min = bx + g;
  const t = {};
  t.confidence = 0.3, t.status = I;
  const A = {};
  return A.brightnessHighThreshold = 1, A.brightnessLowThreshold = -(2748 + -1756 * 4 + 4277), A.sharpnessThreshold = -(-7602 + 1 * 7603), A.outOfBoundsThreshold = -(5529 + 1 * 3561 + -61 * 149), A.minFaceSizeRatio = 0.1, A.mouth = t, A;
}
const Fx = 1236 * -11 + -11398 + 34994, Mi = 15, Wg = {};
Wg.timeout = 4e3, Wg.threshold = 0.7, Wg.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const AI = Wg, Rx = (g, I) => ({ ...g, leftEye: { ...g.leftEye, center: Oe(g.leftEye.center, I) }, rightEye: { ...g.rightEye, center: Oe(g.rightEye.center, I) }, mouth: { ...g.mouth, center: Oe(g.mouth.center, I) }, topLeft: Oe(g.topLeft, I), bottomRight: Oe(g.bottomRight, I), faceCenter: Oe(g.faceCenter, I) }), Wn = (g, I) => {
  const { faceCenter: t, faceSize: A } = g, e = Oa(A, I), o = {};
  o.x = t.x, o.y = t.y - e;
  const i = {};
  i.x = t.x + e, i.y = t.y;
  const C = {};
  C.x = t.x, C.y = t.y + e;
  const n = {};
  n.x = t.x - e, n.y = t.y;
  const B = {};
  return B.top = o, B.right = i, B.bottom = C, B.left = n, an(B);
}, Sx = (g, I) => {
  const { bottomRight: t, faceCenter: A, topLeft: e } = I, o = {
    topLeft: e,
    width: t.x - e.x,
    height: t.y - e.y
  };
  sn(g, o, "rgba(255, 0, 0, 0.3)", !0), Ft(g, A, "lime");
}, Mx = (g, I, t) => {
  const A = Wn(I, t);
  Object.values(A).map((e) => Ft(g, e, "orange"));
};
function Lx({ cameraResolution: g, detectionDetails: I, isImageMirror: t }) {
  const { thresholds: A } = wo(), { redfin: e } = Et(), o = AA(null);
  if (K(() => {
    if (!o.current)
      return;
    o.current.width = g.width, o.current.height = g.height, Sa(o.current);
    const h = jg(g), r = cn(
      g,
      A.outOfBoundsThreshold,
      h
    ), u = Ha(g);
    I.value && (Sx(o.current, I.value.processedImage.detection), Mx(
      o.current,
      I.value.processedImage.detection,
      g
    ), j0(o.current, h, "lime"), j0(o.current, r, "yellow"), j0(o.current, u, "blue"), Ft(o.current, I.value.processedImage.detection.leftEye.center, "cyan"), Ft(o.current, I.value.processedImage.detection.rightEye.center, "cyan"), Ft(o.current, I.value.processedImage.detection.mouth.center, "cyan"));
  }, [g, A, I.value]), !I.value)
    return null;
  const {
    avgFps: i,
    detectionTime: C,
    fps: n,
    processedImage: { detection: B, instructionCode: a, invalidValidators: Q, isEscalated: E },
    resolution: x,
    samVersion: s
  } = I.value, d = {
    Confidence: B.confidence,
    Brightness: B.brightness,
    Sharpness: B.sharpness,
    "Face size": B.faceSize,
    "Left eye confidence": B.leftEye.confidence,
    "Left eye status": B.leftEye.status,
    "Right eye confidence": B.rightEye.confidence,
    "Right eye status": B.rightEye.status,
    "Mouth confidence": B.mouth.confidence,
    "Mouth status": B.mouth.status,
    "Detection time": C,
    FPS: n,
    "Avg FPS": i,
    Tier: e,
    Instruction: a,
    Resolution: x,
    "Escalated instruction": E,
    "Component version": "7.1.0"
  };
  return s && (d["SAM version"] = s), Q.length > 0 && (d["Invalid validators"] = Q), /* @__PURE__ */ y(
    Na,
    {
      ref: o,
      cameraResolution: g,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function vx(g) {
  return /* @__PURE__ */ y("rect", { fill: "#000", ...g, rx: "50%" });
}
function Jx(g, I) {
  const [t, A] = nA(!1), e = () => A((C) => !C), o = "" + t;
  Qt(() => {
    function C() {
      if (!g.current) return;
      const Q = new MutationObserver(() => {
        e();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, Q.observe(g.current, E), Q;
    }
    function n() {
      var x;
      if (!((x = g.current) != null && x["parentElement"])) return;
      const Q = new MutationObserver((s) => {
        s.find((h) => {
          for (const r of h.removedNodes)
            if (r !== (I == null ? void 0 : I.current) && r === g.current)
              return !0;
        }) && e(), s.forEach((h) => {
          h.addedNodes.forEach((r) => {
            var u;
            r !== (I == null ? void 0 : I.current) && ((u = r.parentElement) == null || u.removeChild(r));
          });
        });
      }), E = {};
      return E.childList = !0, Q.observe(g.current.parentElement, E), Q;
    }
    const B = C(), a = n();
    return () => {
      a == null || a.disconnect(), B == null || B.disconnect();
    };
  });
  const i = {};
  return i.key = o, i;
}
const Wx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Yx({ cutOut: g, height: I, ignoreElement: t, width: A }) {
  const e = AA(null), { key: o } = Jx(e, t);
  return /* @__PURE__ */ y("div", { ref: e, style: Wx, children: /* @__PURE__ */ y("svg", { viewBox: `0 0 ${A} ${I}`, children: [
    /* @__PURE__ */ y("defs", { children: [
      /* @__PURE__ */ y("mask", { id: "placeholder", children: [
        /* @__PURE__ */ y("rect", { fill: "#fff", height: "100%", width: "100%" }),
        g
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
  ] }) }, o);
}
function Ux({ fullOverlay: g, ignoreElement: I, resolution: t }) {
  const A = Ka(t), e = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ y(
    Yx,
    {
      cutOut: g || /* @__PURE__ */ y(vx, { height: e, width: o, x: i, y: C }),
      height: t.height,
      ignoreElement: I,
      width: t.width
    }
  );
}
function Hx({ cameraResolution: g, children: I, detectionDetails: t, shouldMirror: A }) {
  const { redfin: e } = Et(), { appState: o, freemiumOverlayState: i } = xt(), C = AA(null), n = i !== _g.HIDDEN && e !== RI.Higher && g, B = i === _g.VISIBLE, a = g && o === PA.RUNNING;
  return /* @__PURE__ */ y(LA, { children: [
    n && /* @__PURE__ */ y(
      Ux,
      {
        fullOverlay: B,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ y("div", { ref: C, children: /* @__PURE__ */ y(
      Lx,
      {
        cameraResolution: g,
        detectionDetails: t,
        isImageMirror: A
      }
    ) })
  ] });
}
const Kx = (g, I) => {
  if (hr()) {
    const t = {};
    t.candidateSelectionImages = I;
    const A = t;
    Yt.getInstance().dispatchCustomEventOnChange(g, A);
  }
};
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yn = {}, Li = {}, Ox = Tx;
function Tx(g, I) {
  for (var t = new Array(arguments.length - 1), A = 0, e = 2, o = !0; e < arguments.length; )
    t[A++] = arguments[e++];
  return new Promise(function(i, C) {
    t[A] = function(n) {
      if (o)
        if (o = !1, n)
          C(n);
        else {
          for (var B = new Array(arguments.length - 1), a = 0; a < B.length; )
            B[a++] = arguments[a];
          i.apply(null, B);
        }
    };
    try {
      g.apply(I || null, t);
    } catch (n) {
      o && (o = !1, C(n));
    }
  });
}
var Un = {};
(function(g) {
  var I = g;
  I.length = function(i) {
    var C = i.length;
    if (!C)
      return 0;
    for (var n = 0; --C % 4 > 1 && i.charAt(C) === "="; )
      ++n;
    return Math.ceil(i.length * 3) / 4 - n;
  };
  for (var t = new Array(64), A = new Array(123), e = 0; e < 64; )
    A[t[e] = e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e - 59 | 43] = e++;
  I.encode = function(i, C, n) {
    for (var B = null, a = [], Q = 0, E = 0, x; C < n; ) {
      var s = i[C++];
      switch (E) {
        case 0:
          a[Q++] = t[s >> 2], x = (s & 3) << 4, E = 1;
          break;
        case 1:
          a[Q++] = t[x | s >> 4], x = (s & 15) << 2, E = 2;
          break;
        case 2:
          a[Q++] = t[x | s >> 6], a[Q++] = t[s & 63], E = 0;
          break;
      }
      Q > 8191 && ((B || (B = [])).push(String.fromCharCode.apply(String, a)), Q = 0);
    }
    return E && (a[Q++] = t[x], a[Q++] = 61, E === 1 && (a[Q++] = 61)), B ? (Q && B.push(String.fromCharCode.apply(String, a.slice(0, Q))), B.join("")) : String.fromCharCode.apply(String, a.slice(0, Q));
  };
  var o = "invalid encoding";
  I.decode = function(i, C, n) {
    for (var B = n, a = 0, Q, E = 0; E < i.length; ) {
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
          C[n++] = Q << 2 | (x & 48) >> 4, Q = x, a = 2;
          break;
        case 2:
          C[n++] = (Q & 15) << 4 | (x & 60) >> 2, Q = x, a = 3;
          break;
        case 3:
          C[n++] = (Q & 3) << 6 | x, a = 0;
          break;
      }
    }
    if (a === 1)
      throw Error(o);
    return n - B;
  }, I.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(Un);
var qx = F0;
function F0() {
  this._listeners = {};
}
F0.prototype.on = function(g, I, t) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: t || this
  }), this;
};
F0.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var t = this._listeners[g], A = 0; A < t.length; )
      t[A].fn === I ? t.splice(A, 1) : ++A;
  return this;
};
F0.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var t = [], A = 1; A < arguments.length; )
      t.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, t);
  }
  return this;
};
var Zx = vi(vi);
function vi(g) {
  return typeof Float32Array < "u" ? function() {
    var I = new Float32Array([-0]), t = new Uint8Array(I.buffer), A = t[3] === 128;
    function e(n, B, a) {
      I[0] = n, B[a] = t[0], B[a + 1] = t[1], B[a + 2] = t[2], B[a + 3] = t[3];
    }
    function o(n, B, a) {
      I[0] = n, B[a] = t[3], B[a + 1] = t[2], B[a + 2] = t[1], B[a + 3] = t[0];
    }
    g.writeFloatLE = A ? e : o, g.writeFloatBE = A ? o : e;
    function i(n, B) {
      return t[0] = n[B], t[1] = n[B + 1], t[2] = n[B + 2], t[3] = n[B + 3], I[0];
    }
    function C(n, B) {
      return t[3] = n[B], t[2] = n[B + 1], t[1] = n[B + 2], t[0] = n[B + 3], I[0];
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
        var n = Math.floor(Math.log(e) / Math.LN2), B = Math.round(e * Math.pow(2, -n) * 8388608) & 8388607;
        A((C << 31 | n + 127 << 23 | B) >>> 0, o, i);
      }
    }
    g.writeFloatLE = I.bind(null, Ji), g.writeFloatBE = I.bind(null, Wi);
    function t(A, e, o) {
      var i = A(e, o), C = (i >> 31) * 2 + 1, n = i >>> 23 & 255, B = i & 8388607;
      return n === 255 ? B ? NaN : C * (1 / 0) : n === 0 ? C * 1401298464324817e-60 * B : C * Math.pow(2, n - 150) * (B + 8388608);
    }
    g.readFloatLE = t.bind(null, Yi), g.readFloatBE = t.bind(null, Ui);
  }(), typeof Float64Array < "u" ? function() {
    var I = new Float64Array([-0]), t = new Uint8Array(I.buffer), A = t[7] === 128;
    function e(n, B, a) {
      I[0] = n, B[a] = t[0], B[a + 1] = t[1], B[a + 2] = t[2], B[a + 3] = t[3], B[a + 4] = t[4], B[a + 5] = t[5], B[a + 6] = t[6], B[a + 7] = t[7];
    }
    function o(n, B, a) {
      I[0] = n, B[a] = t[7], B[a + 1] = t[6], B[a + 2] = t[5], B[a + 3] = t[4], B[a + 4] = t[3], B[a + 5] = t[2], B[a + 6] = t[1], B[a + 7] = t[0];
    }
    g.writeDoubleLE = A ? e : o, g.writeDoubleBE = A ? o : e;
    function i(n, B) {
      return t[0] = n[B], t[1] = n[B + 1], t[2] = n[B + 2], t[3] = n[B + 3], t[4] = n[B + 4], t[5] = n[B + 5], t[6] = n[B + 6], t[7] = n[B + 7], I[0];
    }
    function C(n, B) {
      return t[7] = n[B], t[6] = n[B + 1], t[5] = n[B + 2], t[4] = n[B + 3], t[3] = n[B + 4], t[2] = n[B + 5], t[1] = n[B + 6], t[0] = n[B + 7], I[0];
    }
    g.readDoubleLE = A ? i : C, g.readDoubleBE = A ? C : i;
  }() : function() {
    function I(A, e, o, i, C, n) {
      var B = i < 0 ? 1 : 0;
      if (B && (i = -i), i === 0)
        A(0, C, n + e), A(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), C, n + o);
      else if (isNaN(i))
        A(0, C, n + e), A(2146959360, C, n + o);
      else if (i > 17976931348623157e292)
        A(0, C, n + e), A((B << 31 | 2146435072) >>> 0, C, n + o);
      else {
        var a;
        if (i < 22250738585072014e-324)
          a = i / 5e-324, A(a >>> 0, C, n + e), A((B << 31 | a / 4294967296) >>> 0, C, n + o);
        else {
          var Q = Math.floor(Math.log(i) / Math.LN2);
          Q === 1024 && (Q = 1023), a = i * Math.pow(2, -Q), A(a * 4503599627370496 >>> 0, C, n + e), A((B << 31 | Q + 1023 << 20 | a * 1048576 & 1048575) >>> 0, C, n + o);
        }
      }
    }
    g.writeDoubleLE = I.bind(null, Ji, 0, 4), g.writeDoubleBE = I.bind(null, Wi, 4, 0);
    function t(A, e, o, i, C) {
      var n = A(i, C + e), B = A(i, C + o), a = (B >> 31) * 2 + 1, Q = B >>> 20 & 2047, E = 4294967296 * (B & 1048575) + n;
      return Q === 2047 ? E ? NaN : a * (1 / 0) : Q === 0 ? a * 5e-324 * E : a * Math.pow(2, Q - 1075) * (E + 4503599627370496);
    }
    g.readDoubleLE = t.bind(null, Yi, 0, 4), g.readDoubleBE = t.bind(null, Ui, 4, 0);
  }(), g;
}
function Ji(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
function Wi(g, I, t) {
  I[t] = g >>> 24, I[t + 1] = g >>> 16 & 255, I[t + 2] = g >>> 8 & 255, I[t + 3] = g & 255;
}
function Yi(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function Ui(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function Hi(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Px = jx;
function jx(g) {
  try {
    if (typeof Hi != "function")
      return null;
    var I = Hi(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var Hn = {};
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
    for (var i = null, C = [], n = 0, B; A < e; )
      B = t[A++], B < 128 ? C[n++] = B : B > 191 && B < 224 ? C[n++] = (B & 31) << 6 | t[A++] & 63 : B > 239 && B < 365 ? (B = ((B & 7) << 18 | (t[A++] & 63) << 12 | (t[A++] & 63) << 6 | t[A++] & 63) - 65536, C[n++] = 55296 + (B >> 10), C[n++] = 56320 + (B & 1023)) : C[n++] = (B & 15) << 12 | (t[A++] & 63) << 6 | t[A++] & 63, n > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, C)), n = 0);
    return i ? (n && i.push(String.fromCharCode.apply(String, C.slice(0, n))), i.join("")) : String.fromCharCode.apply(String, C.slice(0, n));
  }, I.write = function(t, A, e) {
    for (var o = e, i, C, n = 0; n < t.length; ++n)
      i = t.charCodeAt(n), i < 128 ? A[e++] = i : i < 2048 ? (A[e++] = i >> 6 | 192, A[e++] = i & 63 | 128) : (i & 64512) === 55296 && ((C = t.charCodeAt(n + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (C & 1023), ++n, A[e++] = i >> 18 | 240, A[e++] = i >> 12 & 63 | 128, A[e++] = i >> 6 & 63 | 128, A[e++] = i & 63 | 128) : (A[e++] = i >> 12 | 224, A[e++] = i >> 6 & 63 | 128, A[e++] = i & 63 | 128);
    return e - o;
  };
})(Hn);
var Vx = _x;
function _x(g, I, t) {
  var A = t || 8192, e = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > e)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var n = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), n;
  };
}
var eI, Ki;
function Xx() {
  if (Ki)
    return eI;
  Ki = 1, eI = I;
  var g = Ue();
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
    var C = o >>> 0, n = (o - C) / 4294967296 >>> 0;
    return i && (n = ~n >>> 0, C = ~C >>> 0, ++C > 4294967295 && (C = 0, ++n > 4294967295 && (n = 0))), new I(C, n);
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
  }, eI;
}
var Oi;
function Ue() {
  return Oi || (Oi = 1, function(g) {
    var I = g;
    I.asPromise = Ox, I.base64 = Un, I.EventEmitter = qx, I.float = Zx, I.inquire = Px, I.utf8 = Hn, I.pool = Vx, I.LongBits = Xx(), I.isNode = !!(typeof ue < "u" && ue && ue.process && ue.process.versions && ue.process.versions.node), I.global = I.isNode && ue || typeof window < "u" && window || typeof self < "u" && self || ue, I.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      for (var C = Object.keys(o), n = 0; n < C.length; ++n)
        (e[C[n]] === void 0 || !i) && (e[C[n]] = o[C[n]]);
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
        for (var C = Object.keys(this), n = C.length - 1; n > -1; --n)
          if (o[C[n]] === 1 && this[C[n]] !== void 0 && this[C[n]] !== null)
            return C[n];
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
  }(Li)), Li;
}
var Kn = J, MA = Ue(), PI, R0 = MA.LongBits, Ti = MA.base64, qi = MA.utf8;
function Cg(g, I, t) {
  this.fn = g, this.len = I, this.next = void 0, this.val = t;
}
function mo() {
}
function zx(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function J() {
  this.len = 0, this.head = new Cg(mo, 0, 0), this.tail = this.head, this.states = null;
}
var On = function() {
  return MA.Buffer ? function() {
    return (J.create = function() {
      return new PI();
    })();
  } : function() {
    return new J();
  };
};
J.create = On();
J.alloc = function(g) {
  return new MA.Array(g);
};
MA.Array !== Array && (J.alloc = MA.pool(J.alloc, MA.Array.prototype.subarray));
J.prototype._push = function(g, I, t) {
  return this.tail = this.tail.next = new Cg(g, I, t), this.len += I, this;
};
function Go(g, I, t) {
  I[t] = g & 255;
}
function $x(g, I, t) {
  for (; g > 127; )
    I[t++] = g & 127 | 128, g >>>= 7;
  I[t] = g;
}
function ko(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
ko.prototype = Object.create(Cg.prototype);
ko.prototype.fn = $x;
J.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new ko(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
J.prototype.int32 = function(g) {
  return g < 0 ? this._push(bo, 10, R0.fromNumber(g)) : this.uint32(g);
};
J.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function bo(g, I, t) {
  for (; g.hi; )
    I[t++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[t++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[t++] = g.lo;
}
J.prototype.uint64 = function(g) {
  var I = R0.from(g);
  return this._push(bo, I.length(), I);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(g) {
  var I = R0.from(g).zzEncode();
  return this._push(bo, I.length(), I);
};
J.prototype.bool = function(g) {
  return this._push(Go, 1, g ? 1 : 0);
};
function jI(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
J.prototype.fixed32 = function(g) {
  return this._push(jI, 4, g >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(g) {
  var I = R0.from(g);
  return this._push(jI, 4, I.lo)._push(jI, 4, I.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(g) {
  return this._push(MA.float.writeFloatLE, 4, g);
};
J.prototype.double = function(g) {
  return this._push(MA.float.writeDoubleLE, 8, g);
};
var AE = MA.Array.prototype.set ? function(g, I, t) {
  I.set(g, t);
} : function(g, I, t) {
  for (var A = 0; A < g.length; ++A)
    I[t + A] = g[A];
};
J.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(Go, 1, 0);
  if (MA.isString(g)) {
    var t = J.alloc(I = Ti.length(g));
    Ti.decode(g, t, 0), g = t;
  }
  return this.uint32(I)._push(AE, I, g);
};
J.prototype.string = function(g) {
  var I = qi.length(g);
  return I ? this.uint32(I)._push(qi.write, I, g) : this._push(Go, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new zx(this), this.head = this.tail = new Cg(mo, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Cg(mo, 0, 0), this.len = 0), this;
};
J.prototype.ldelim = function() {
  var g = this.head, I = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = g.next, this.tail = I, this.len += t), this;
};
J.prototype.finish = function() {
  for (var g = this.head.next, I = this.constructor.alloc(this.len), t = 0; g; )
    g.fn(g.val, I, t), t += g.len, g = g.next;
  return I;
};
J._configure = function(g) {
  PI = g, J.create = On(), PI._configure();
};
var eE = VA, Tn = Kn;
(VA.prototype = Object.create(Tn.prototype)).constructor = VA;
var re = Ue();
function VA() {
  Tn.call(this);
}
VA._configure = function() {
  VA.alloc = re._Buffer_allocUnsafe, VA.writeBytesBuffer = re.Buffer && re.Buffer.prototype instanceof Uint8Array && re.Buffer.prototype.set.name === "set" ? function(g, I, t) {
    I.set(g, t);
  } : function(g, I, t) {
    if (g.copy)
      g.copy(I, t, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[t++] = g[A++];
  };
};
VA.prototype.bytes = function(g) {
  re.isString(g) && (g = re._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(VA.writeBytesBuffer, I, g), this;
};
function tE(g, I, t) {
  g.length < 40 ? re.utf8.write(g, I, t) : I.utf8Write ? I.utf8Write(g, t) : I.write(g, t);
}
VA.prototype.string = function(g) {
  var I = re.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(tE, I, g), this;
};
VA._configure();
var qn = eA, _A = Ue(), VI, Zn = _A.LongBits, gE = _A.utf8;
function HA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function eA(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var Zi = typeof Uint8Array < "u" ? function(g) {
  if (g instanceof Uint8Array || Array.isArray(g))
    return new eA(g);
  throw Error("illegal buffer");
} : function(g) {
  if (Array.isArray(g))
    return new eA(g);
  throw Error("illegal buffer");
}, Pn = function() {
  return _A.Buffer ? function(g) {
    return (eA.create = function(I) {
      return _A.Buffer.isBuffer(I) ? new VI(I) : Zi(I);
    })(g);
  } : Zi;
};
eA.create = Pn();
eA.prototype._slice = _A.Array.prototype.subarray || /* istanbul ignore next */
_A.Array.prototype.slice;
eA.prototype.uint32 = /* @__PURE__ */ function() {
  var g = 4294967295;
  return function() {
    if (g = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (g = (g | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return g;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, HA(this, 10);
    return g;
  };
}();
eA.prototype.int32 = function() {
  return this.uint32() | 0;
};
eA.prototype.sint32 = function() {
  var g = this.uint32();
  return g >>> 1 ^ -(g & 1) | 0;
};
function tI() {
  var g = new Zn(0, 0), I = 0;
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
        throw HA(this);
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
        throw HA(this);
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
  throw Error("invalid varint encoding");
}
eA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function i0(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
eA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  return i0(this.buf, this.pos += 4);
};
eA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  return i0(this.buf, this.pos += 4) | 0;
};
function Pi() {
  if (this.pos + 8 > this.len)
    throw HA(this, 8);
  return new Zn(i0(this.buf, this.pos += 4), i0(this.buf, this.pos += 4));
}
eA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  var g = _A.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
eA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw HA(this, 4);
  var g = _A.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
eA.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, t = this.pos + g;
  if (t > this.len)
    throw HA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, t) : I === t ? new this.buf.constructor(0) : this._slice.call(this.buf, I, t);
};
eA.prototype.string = function() {
  var g = this.bytes();
  return gE.read(g, 0, g.length);
};
eA.prototype.skip = function(g) {
  if (typeof g == "number") {
    if (this.pos + g > this.len)
      throw HA(this, g);
    this.pos += g;
  } else
    do
      if (this.pos >= this.len)
        throw HA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
eA.prototype.skipType = function(g) {
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
eA._configure = function(g) {
  VI = g, eA.create = Pn(), VI._configure();
  var I = _A.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  _A.merge(eA.prototype, {
    int64: function() {
      return tI.call(this)[I](!1);
    },
    uint64: function() {
      return tI.call(this)[I](!0);
    },
    sint64: function() {
      return tI.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return Pi.call(this)[I](!0);
    },
    sfixed64: function() {
      return Pi.call(this)[I](!1);
    }
  });
};
var IE = We, jn = qn;
(We.prototype = Object.create(jn.prototype)).constructor = We;
var ji = Ue();
function We(g) {
  jn.call(this, g);
}
We._configure = function() {
  ji.Buffer && (We.prototype._slice = ji.Buffer.prototype.slice);
};
We.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
We._configure();
var Vn = {}, oE = Ut, No = Ue();
(Ut.prototype = Object.create(No.EventEmitter.prototype)).constructor = Ut;
function Ut(g, I, t) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  No.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!t;
}
Ut.prototype.rpcCall = function g(I, t, A, e, o) {
  if (!e)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return No.asPromise(g, i, I, t, A, e);
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
      function(C, n) {
        if (C)
          return i.emit("error", C, I), o(C);
        if (n === null) {
          i.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(n instanceof A))
          try {
            n = A[i.responseDelimited ? "decodeDelimited" : "decode"](n);
          } catch (B) {
            return i.emit("error", B, I), o(B);
          }
        return i.emit("data", n, I), o(null, n);
      }
    );
  } catch (C) {
    i.emit("error", C, I), setTimeout(function() {
      o(C);
    }, 0);
    return;
  }
};
Ut.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = oE;
})(Vn);
var iE = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = Kn, I.BufferWriter = eE, I.Reader = qn, I.BufferReader = IE, I.util = Ue(), I.rpc = Vn, I.roots = iE, I.configure = t;
  function t() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  t();
})(Yn);
var O = Yn;
const f = O.Reader, X = O.Writer, l = O.util, c = O.roots.default || (O.roots.default = {}), Ye = c.dot = (() => {
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
      return A || (A = X.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && A.uint32(
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
        if (e || (e = X.create()), A.images != null && A.images.length)
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return o || (o = X.create()), e.platform != null && Object.hasOwnProperty.call(e, "platform") && o.uint32(
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
          let n = e.uint32();
          switch (n >>> 3) {
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
              e.skipType(n & 7);
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        if (o || (o = X.create()), e.supportedAbis != null && e.supportedAbis.length)
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
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.AndroidMetadata(), n, B;
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
              let Q = e.uint32() + e.pos;
              for (n = "", B = null; e.pos < Q; ) {
                let E = e.uint32();
                switch (E >>> 3) {
                  case 1:
                    n = e.string();
                    break;
                  case 2:
                    B = c.dot.Int32List.decode(e, e.uint32());
                    break;
                  default:
                    e.skipType(E & 7);
                    break;
                }
              }
              C.dynamicCameraFrameProperties[n] = B;
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
          for (let n = 0; n < e.supportedAbis.length; ++n)
            i.supportedAbis[n] = e.supportedAbis[n];
        }
        if (e.device != null && e.hasOwnProperty("device") && (i.device = e.device, o.oneofs && (i._device = "device")), e.digests && e.digests.length) {
          i.digests = [];
          for (let n = 0; n < e.digests.length; ++n)
            i.digests[n] = o.bytes === String ? l.base64.encode(e.digests[n], 0, e.digests[n].length) : o.bytes === Array ? Array.prototype.slice.call(e.digests[n]) : e.digests[n];
        }
        let C;
        if (e.dynamicCameraFrameProperties && (C = Object.keys(e.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let n = 0; n < C.length; ++n)
            i.dynamicCameraFrameProperties[C[n]] = c.dot.Int32List.toObject(e.dynamicCameraFrameProperties[C[n]], o);
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n)
            i.digestsWithTimestamp[n] = c.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[n], o);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        if (e || (e = X.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && e.uint32(
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
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.IosMetadata(), C, n;
        for (; A.pos < o; ) {
          let B = A.uint32();
          switch (B >>> 3) {
            case 1: {
              i.cameraModelId = A.string();
              break;
            }
            case 2: {
              i.architectureInfo === l.emptyObject && (i.architectureInfo = {});
              let a = A.uint32() + A.pos;
              for (C = "", n = !1; A.pos < a; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    C = A.string();
                    break;
                  case 2:
                    n = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              i.architectureInfo[C] = n;
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
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (B & 7) === 2) {
                let a = A.uint32() + A.pos;
                for (; A.pos < a; )
                  i.isoValues.push(A.int32());
              } else
                i.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(B & 7);
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        if (e || (e = X.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.imageHash != null && Object.hasOwnProperty.call(A, "imageHash") && e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return o || (o = X.create()), e.aspectRatio != null && Object.hasOwnProperty.call(e, "aspectRatio") && o.uint32(
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
          let n = e.uint32();
          switch (n >>> 3) {
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
              e.skipType(n & 7);
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.width != null && Object.hasOwnProperty.call(A, "width") && e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return o || (o = X.create()), e.cameraInitFrameResolution != null && Object.hasOwnProperty.call(e, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(e.cameraInitFrameResolution, o.uint32(
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
          let n = e.uint32();
          switch (n >>> 3) {
            case 1: {
              C.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(e, e.uint32());
              break;
            }
            case 2: {
              C.cameraProperties = c.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(n & 7);
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.brightness != null && Object.hasOwnProperty.call(A, "brightness") && e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.x != null && Object.hasOwnProperty.call(A, "x") && e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return o || (o = X.create()), e.documentContent != null && Object.hasOwnProperty.call(e, "documentContent") && c.dot.v4.DocumentContent.encode(e.documentContent, o.uint32(
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
          let n = e.uint32();
          switch (n >>> 3) {
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
              e.skipType(n & 7);
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        if (e || (e = X.create()), A.segments != null && A.segments.length)
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.corner != null && Object.hasOwnProperty.call(A, "corner") && e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
        return e || (e = X.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
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
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
      return A || (A = X.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && A.uint32(
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
      if (A || (A = X.create()), t.items != null && t.items.length) {
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
      return A || (A = X.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && A.uint32(
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, I;
  }(), g;
})();
(function(g, I) {
  function t(C, n, B, a, Q) {
    return $(Q - -505, C);
  }
  function A(C, n, B, a, Q) {
    return $(B - -490, n);
  }
  function e(C, n, B, a, Q) {
    return $(n - -749, B);
  }
  const o = g();
  function i(C, n, B, a, Q) {
    return $(B - 454, n);
  }
  for (; ; )
    try {
      if (-parseInt(t("7jJ@", -135, -163, -126, -149)) / 1 * (-parseInt(e(-384, -396, "ENB7", -410, -417)) / 2) + -parseInt(t("F(UV", -140, -168, -175, -160)) / 3 + parseInt(i(842, "uv2X", 841, 816, 855)) / 4 * (-parseInt(t("KAbi", -122, -116, -119, -132)) / 5) + -parseInt(i(830, "[fkv", 809, 827, 820)) / 6 * (parseInt(i(833, "*l@e", 822, 837, 807)) / 7) + parseInt(A(-140, "da8f", -140, -161, -121)) / 8 * (-parseInt(i(811, "da8f", 796, 809, 777)) / 9) + -parseInt(i(796, "f9!#", 815, 831, 808)) / 10 * (parseInt(t("H@Uz", -131, -97, -98, -117)) / 11) + -parseInt(i(816, "KAbi", 821, 819, 803)) / 12 * (-parseInt(t("53[t", -104, -127, -131, -128)) / 13) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(C0, 197362 + -381 * -1294);
function $(g, I) {
  const t = C0();
  return $ = function(A, e) {
    A = A - (-1 * -3035 + -7973 * -1 + -10670);
    let o = t[A];
    if ($.cnbgPs === void 0) {
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
      $.eOSxvo = a, g = arguments, $.cnbgPs = !0;
    }
    const C = t[172 * -43 + 25 * 305 + -1 * 229], n = A + C, B = g[n];
    return B ? o = B : ($.mHjNrV === void 0 && ($.mHjNrV = !0), o = $.eOSxvo(o, e), g[n] = o), o;
  }, $(g, I);
}
function C0() {
  const g = ["wmkbW5ddJmo/", "bY5Rdq", "WPJdHNu2", "D13cRsXGoSkrC8oCW6yzy8oE", "W4/dP8oQWR3dMK3cQ8kLcSofW4TQW5O", "WQ01WQfEA0mhA8kVrq", "W5WQW4PqAW", "DmoOW4JdT8o+qdJdJ8oRj8kHhmke", "mSk5WOC", "CcJdSeOBDCoQ", "xCoanCk+WPG", "W5/cL8oyg3O", "WRf7W6tcU2XtWOOPuc5sWOddMa", "iZKsECkXW4xcSmoGmW", "W644WPBcUW", "wmouW5Pwa8kZWQym", "wuZdOLLNWP7dImorWPbakW", "WQhcIGSwWQ4", "WPrvWQlcHmo0", "WPldLN7dIY8", "CCoGW4ldU8o+ttldNmo7bmk4i8kT", "xmolnCk+WPG", "W6BdJ1O4WOFcJc9jWPm", "WPVdUYJdPsjVWOJdQCkWW7BdPgZdOG", "wSkntSoLW6ldObNcVSkYm8o+WQy", "tmoLm8k1", "W5xdQub+lhSyyCod", "wxWQ", "W77cVmoNAG", "W580W4asW5S", "W61JbuNcMr3cPmk5tfud", "l8oKDSoVqG", "d8kqW6bvlG", "vxBcSSkbcCkYh8o5chNcSrHQ", "WPZcUCoRW6ZcHq", "W4FcLuW7vGNcG8kB", "WOhdG8kpsJ92WOFdJSkMWPzueSor", "WRNcMHa", "W6TGbe7dOsZcMmkTwKC", "WO7cQqL5hW", "WRXJW4JdPSkuCSk2ruVcGwS", "W4FcKYHIgt3cJmktwg3cSW", "dX3cVa0J", "W7ZcRSkqeG7cR0ix", "W5NdRtn6mLG5xG", "W7HHW6y6sW", "DSoMDI1y", "W7hcSCo/AJK", "n8oxqcBdVCoiB8k/brtcOCke", "ww40f148uSoZkW", "fh0OD2i", "WRCoWRNdNruBW78"];
  return C0 = function() {
    return g;
  }, C0();
}
async function CE() {
  const g = {};
  g[t("ENB7", -83, -117, -116, -98)] = Cn;
  function I(a, Q, E, x, s) {
    return $(x - 713, Q);
  }
  g[t("Bi!h", -107, -65, -86, -89) + "h"] = 256;
  function t(a, Q, E, x, s) {
    return $(s - -464, a);
  }
  const A = await window[B(114, 113, 124, "WjZ4") + "o"][n("gM3V", 693, 706) + "e"][t("dKtX", -97, -112, -96, -110) + I(1089, "yUqU", 1068, 1077) + "y"](g, !0, [B(156, 172, 153, "syMu") + "pt", C(1375, "q&JY") + "pt"]), e = Uint8Array[n("f9!#", 700, 690)](Array(1445 + 1429 * -1)[t("tK^r", -83, -74, -71, -86)](8612 + 85 * -49 + -1 * 4447)), o = window[B(145, 142, 134, "7jJ@") + "o"][t("D![F", -107, -97, -83, -107) + B(177, 166, 166, "Ssqu") + t("8wOt", -86, -112, -84, -105)](e), i = {};
  i[n("vZ#D", 680, 664)] = A, i.iv = o;
  function C(a, Q, E, x, s) {
    return $(a - 990, Q);
  }
  function n(a, Q, E, x, s) {
    return $(E - 325, a);
  }
  function B(a, Q, E, x, s) {
    return $(E - -217, x);
  }
  return i;
}
async function nE(g) {
  const { iv: I, key: t } = await CE();
  function A(E, x, s, d, h) {
    return $(h - -940, x);
  }
  const e = {};
  e[B(556, 548, 550, "8wOt", 565)] = Cn, e.iv = I;
  const o = await window[A(-585, "PWiS", -573, -602, -596) + "o"][B(561, 586, 590, "pm)a", 568) + "e"][A(-586, "q&JY", -574, -573, -566) + "pt"](e, t, g), i = await window[Q(897, "#(M8", 903, 937, 921) + "o"][a(1219, 1228, 1237, "nHX4", 1237) + "e"][A(-587, "[9oE", -577, -591, -582) + A(-577, "q&JY", -531, -553, -551)](a(1257, 1281, 1269, "rhzC", 1263), t);
  function C(E, x, s, d, h) {
    return $(s - -9, x);
  }
  const n = {};
  function B(E, x, s, d, h) {
    return $(h - 225, d);
  }
  n[C(388, "&2r5", 373) + "ge"] = o, n[B(589, 571, 559, "gM3V", 574)] = i;
  function a(E, x, s, d, h) {
    return $(h - 891, d);
  }
  n.iv = I;
  function Q(E, x, s, d, h) {
    return $(h - 559, x);
  }
  return n;
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return wA(Q - 547, B);
  }
  function A(C, n, B, a, Q) {
    return wA(a - 54, C);
  }
  function e(C, n, B, a, Q) {
    return wA(C - 56, Q);
  }
  const o = g();
  function i(C, n, B, a, Q) {
    return wA(C - -196, Q);
  }
  for (; ; )
    try {
      if (parseInt(i(-19, -28, -25, -18, "!vqn")) / 1 * (parseInt(i(-33, -34, -24, -40, "A*i4")) / 2) + -parseInt(i(-37, -24, -33, -41, "C8GI")) / 3 + parseInt(A("&GLe", 202, 197, 206, 203)) / 4 + parseInt(t(731, 735, "P%vG", 724, 723)) / 5 * (-parseInt(e(229, 235, 220, 236, "C8GI")) / 6) + parseInt(i(-22, -11, -29, -8, "vMLm")) / 7 + -parseInt(e(211, 206, 207, 205, "hHJf")) / 8 + parseInt(A("D[py", 228, 234, 223, 234)) / 9 * (parseInt(i(-28, -30, -18, -30, "obkH")) / 10) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(n0, -509523 + 742 * -1767 + -2 * -1380268);
function wA(g, I) {
  const t = n0();
  return wA = function(A, e) {
    A = A - (-14 + -467 * 2 + 1099);
    let o = t[A];
    if (wA.KvHBNu === void 0) {
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
      wA.rhoRiR = a, g = arguments, wA.KvHBNu = !0;
    }
    const C = t[-9774 + 18 * -77 + 11160], n = A + C, B = g[n];
    return B ? o = B : (wA.LDMvTV === void 0 && (wA.LDMvTV = !0), o = wA.rhoRiR(o, e), g[n] = o), o;
  }, wA(g, I);
}
function BE(g) {
  const I = new ArrayBuffer(g[t(48, 41, 48, "P1wD") + "h"]);
  function t(o, i, C, n, B) {
    return wA(i - -129, n);
  }
  function A(o, i, C, n, B) {
    return wA(C - 761, i);
  }
  const e = new Uint8Array(I);
  for (let o = -8011 * 1 + -9809 * -1 + -1798, i = g[t(36, 32, 29, "%0zF") + "h"]; o < i; o++)
    e[o] = g[A(936, "!vqn", 932) + t(49, 49, 35, "O5KX")](o);
  return I;
}
function n0() {
  const g = ["W7tcL3mUBvWnl3hdImogmcC", "WQRcLCoAWOVdVmoSW7ldQGjCW5BdVdO", "WPr1fxH1W7mw", "W6lcHchcTCo/W60BscOmi8oIDW", "W7i9mwiKWQOIegaTWOGJWRC", "lmolW6PZW5m", "zLmGCSkM", "WQJdLY3dK2mtW7qzWRvK", "oSkuWOzNW4xcJmo+WOPNW4mAW5eO", "W4GjxI0", "WPPwd0/cMa", "W797gq4GCqucW4/cIvC", "iKddICojmx1mtmkidw9Z", "j8k2kmowW6XUWQRcMsissIFcKG", "dmkeA8oPkCoUrSk9", "W6DMo8klEG", "oSogt8knWOddP1JdOSkOWR3dQwpdIG", "W7VdKh8BDcFdLSoHFaNcNW", "AXFcO8oPvCoIW7JdQmktWRK", "bJVdNSkkfG", "WPFcP35+tq", "WP/cV8kwrMNdUeBdJWmafSkd", "pmksWOjNW4/cJ8oYWQXcW7S8W4e4", "W61MWRBcNSkAWPucf04cdrBcMa", "xwZcGmoCvmkqF2HBgMe4WR4", "DmkGigKtgSoYpq", "W4ZcJv1TrhtcSG", "W5xdP8optCo4"];
  return n0 = function() {
    return g;
  }, n0();
}
(function(g, I) {
  const t = g();
  function A(o, i, C, n, B) {
    return rA(B - -161, C);
  }
  function e(o, i, C, n, B) {
    return rA(B - 271, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(661, 710, "LCFM", 628, 670)) / 1 * (-parseInt(e(792, 903, "[k4g", 735, 788)) / 2) + -parseInt(e(585, 601, "kBdw", 656, 611)) / 3 + parseInt(e(499, 605, "N]Rw", 619, 578)) / 4 + -parseInt(e(693, 639, "F(G6", 622, 722)) / 5 + -parseInt(A(280, 211, "1L&e", 56, 169)) / 6 * (parseInt(e(675, 661, "[k4g", 646, 623)) / 7) + -parseInt(A(309, 421, "[G!f", 398, 322)) / 8 + parseInt(A(273, 306, "LCFM", 250, 292)) / 9 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(B0, 1452264 + 3347 * -277);
function rA(g, I) {
  const t = B0();
  return rA = function(A, e) {
    A = A - 295;
    let o = t[A];
    if (rA.RWKwmI === void 0) {
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
      rA.xZPaZz = a, g = arguments, rA.RWKwmI = !0;
    }
    const C = t[13828 + 6914 * -2], n = A + C, B = g[n];
    return B ? o = B : (rA.KPvpGq === void 0 && (rA.KPvpGq = !0), o = rA.xZPaZz(o, e), g[n] = o), o;
  }, rA(g, I);
}
function B0() {
  const g = ["p8oHaCo/W67cRCkmpG", "xLBdT8k8W4G", "zCk1WRr4wq", "WOBcI3pcMhy", "fgHdeCot", "aeBdI8oIW7S", "WPfXr2vQ", "WOuhCMxdGa", "W75XW4nhW44", "WProWPFcUCoe", "jmkweZJcGmkjA8k0cYTftvO", "q0tcL8kNW7W", "WO7cKaCHxq", "WR02W57dGaS", "zKpcLSkrW6a", "emkSW71uW5u", "W6FcM8obW4/cNq", "WPDaWRBcTCka", "W5qTW43cOf0", "vhn+W5eM", "W5pcJmopW5pdIG", "bmooD2jp", "WOddSCkcW6hcMa0Bomk6wqhdUCk8", "sCoGzKrL", "W4e2y0BdGW", "g8kjxCoXW50", "W7NcKblcKMe", "wMm3W5jH", "eCoDW4FcUeK", "b8kIgCoHWQK", "f8kDf1Sw", "mLuEbd4", "kmk+FCoMWP4", "DZnSW4vB", "WOKUW6tdPJq", "AmoaWQ7dSbW", "umoQuxjm", "rCoioNdcPa", "Exrlw8kg", "W5/dImoLWP9Q", "EmkKW7VdQCof", "cmoAW4NcPSoC", "tCofxxZdGq", "W4VdT8o3WR5X", "W7xcOmo0WQZdSa", "F8o2yuFdTa", "f193imou", "CunsW7vI", "cmkIW5TwWO8", "WOeBW6xcRW4", "d8k9hvWy", "oqiIxLi", "W7VcIZldQHa", "W7NcRCoJWPxdUW", "WQFdQ8ovW73cSa", "WO7cMCkZW63cUa", "vCkeb8oOW7K", "lwmTy8k7", "W7rnhmkaW6a", "d8kmW4NdP8kA", "WO3cPuNdOLe", "W584a8kwW5C", "W7KPW7nyW5i", "Ct9GW68x", "Bcj6W5LY", "jIeQuLu", "z0JdS8k7W4a", "WR7dVNBdG8oG", "WRxdLmk5WRtdKq", "amoayej0WO3cPW", "jmoLzxRdK8ovmq", "rCk9W7/dQSop", "tXmGzCke", "rCkDWOqhEq", "W6VcKSojWPNdOW", "F2JcSSocrG", "W4FcGs3dQGC", "Bmo3W6NdGG", "WRrCWPJcQCke", "WR5BWPfQlG", "WOBcVd0YDG", "WRBdS8oEWQxdHG", "W7bWWORcJSo5", "tXjPy8kg", "rCk3jMXA", "W7NcGKhdMX99aCkOWPqrxCoVWR4", "DCo5DCkaWQ4", "bSkjWP3cImoY", "W6P4dmkFW54", "W6VcRmo2W6VdPG", "sYqGbba", "zmkjcfD0", "s3v1hSkd", "BCoVtxPd", "WQlcNSoXW7Ss", "t8oBaMX1", "jmoRrMBdTa", "eCkXCCoeWRa", "wx7dKSofmW", "uSoHESkCWPC", "WQr3WQeWWRPBWR9EBKlcVX9c", "W5dcLCkoW6hcHq", "kSolW6pcQNO", "WP0AW5ldScW", "tvfiD8kj", "W5VdVKpdG8kh", "WRJdM0NcQee", "W5JdHMRdN8kz", "uSo+W5xdIwS", "yvzJW5mC", "nCkMWQVcK2VcU8ocoSk2W77cMmkMW4e", "WPOBBxhdMq", "pmoLzxHy", "WP/cOCo8m8kl", "AhnnA8oL", "xNLuDSkl", "D8oVy0ZdTq", "W6tdKCkyW40", "WO7cMvtcGea", "W5rYW5hdNcu", "W77dPmkrWQ95gCkNWRXnWR8KW57cOG", "W7NcHKddMHP9b8kKWO40DCoUWPa", "W5dcOG3dIZy", "cCk5eGKKW5JdUSkqW5pcPIKzWQu", "W7hcVmoGg8oO", "nSkjF8kQW70", "CfTtW7rG", "WRHpAxvQ", "bxBdN8kYW6a", "W5iXW7DHW6y", "sCkncMfA", "WQdcNbyo", "W6FdSmogW6VcHW", "butcKmkdW6i", "fCkka8kPW5q", "DCkpWOfOBa", "WOZdGSkaW6BdPG", "W54FWQvRW7a", "amoBW6P5W68", "BmkfqSopWOS", "WR3dHNZdS8kZ", "W7fKfCkzW4S", "WOGqWP9Wnq", "W4ZcJsdcUZ8", "gSk8hSovWOu", "W7NcOq3cVWG", "E8kQW6yoCW", "W7pdMSo2WRzR", "WO9shSklW4e", "W4BcSmoCtq", "n8k6WQJdUCog", "s8o2FSkaWQK", "WR/cMCo8W6/dKq", "buyPhSoRWQ3dK8kBW7FcN8kpc8k+", "W6HVWRzzaq", "eJ5jBc4", "W7FcHmkhWO3cMG", "WPrTWQ3cT8o5", "WOLgimkzW58", "CmoUW77dRHK", "WPbYWR/cTSkv", "WRLqWRpcSSk6", "imoLWQVdPSop", "uYrBW6DK", "WR3dIKldU8ke", "gCkrsmkuW5i", "W5VdQ8kHWQtcTCoPW5nCWQxdR2RcTCkM", "W7xcUSkOs8kL", "WRpcS8oOW77dNG", "WO/cOMtdL8ki", "ACkQWObTbW", "WOFcIhxcTW", "W4RdSCkGW4pcSW", "p8kVuCkO", "CczBCmkW", "DHvvW4ve", "tWXMW5yx", "C8kMddG4", "nSoqDhjU", "W6TVWPrknW", "W6xcLmoFWPldUq", "hMLObSoR", "W5WtW6XnW4m", "WRJcTmowW4ldPG", "EwHeW4PN", "W5z8dCkuW4K", "vuq2WPub", "WOddTCkkW6RcMq0Am8k3CrpdP8kH", "W4jYw27dQSoiwCkI", "a0Lfm8oU", "WOZdJmk/W6BdRq", "wmojsZRdKq", "WOFcU03cLga", "bCo+WPNdO8kuW6ZdLbiTFwOeW5a", "mmkLW6HIW6O", "W7jUWPpcH8oO", "eWWiEsW", "lCkzjIyi", "lHuVgSoJWOpcKZZdRN9+hCkM", "W5ldJSkHW6JcJa", "rYn6rmkp", "W4ddOCo8uSoX", "WRTvWRn+", "WQuTW6ruW5a", "WRZcV3ZdOKm", "W7RdLKxcRx0", "WPv/W4VdM8o/", "WQ0OWRFcSSkm", "a8kAd8kfW5q", "e2qpWQS+BuD7m8oNu8kCiW", "WOpdPSowW5JdKq", "Dqn8F8k1", "tKJcLmk7W54", "fmk2fZ1Y", "ALnJWRad", "WP/cJsJcOK8", "zSoRsv9e", "sLJdV8oNDW", "mSkYW5TIW6S", "CurnBCkd", "WPRcTmooW7ZdRa", "gSkoy8oWW68", "WO7dVfhdOmkR", "hCkZFmo2WPe", "hfq8aWy", "W5/cLqJdTMu", "WOPSvMS8", "WOpcSSoOW7NdTG", "WPjCWONcS8kc", "gSkRECkTW6W", "xezug8kd", "m1PZlCoD"];
  return B0 = function() {
    return g;
  }, B0();
}
function QE() {
  const g = B(877, "[k4g", 975, 892) + C(-503, -330, -529, -423, "kEzF") + B(888, "]QgT", 742, 802) + n(-527, "LCFM") + C(-330, -314, -354, -392, "mV2f") + n(-389, "U(kU") + C(-579, -513, -587, -535, "wy[o") + C(-523, -565, -623, -514, ")5!h") + n(-492, "elB5") + B(731, "kEzF", 703, 779) + i(361, "rG[i", 205, 352, 246) + n(-358, "rG[i") + n(-566, "LCFM") + i(372, "mFcf", 364, 281, 287) + A("nm#G", 1201, 1093) + i(192, "$Til", 212, 118, 213) + n(-520, "3VyJ") + i(225, "O]2I", 272, 342, 290) + A("3iFx", 1034, 1005) + B(752, "rG[i", 663, 715) + C(-376, -387, -445, -352, "(Ksz") + A("o5$7", 1023, 1036) + C(-506, -411, -457, -442, "te7r") + i(228, "mV2f", 357, 319, 267) + n(-426, "6RH^") + C(-294, -385, -443, -384, "82v2") + C(-531, -504, -518, -467, "elB5") + A("ANM6", 1091, 1136) + B(747, "rG[i", 675, 684) + A("v8ig", 1114, 1017) + C(-518, -521, -659, -549, "[G!f") + n(-399, "te7r") + A("MjiL", 1079, 1133) + n(-354, "]QgT") + C(-395, -248, -255, -344, "$Til") + n(-567, "rG[i") + n(-398, "Rr6v") + n(-385, "MjiL") + n(-504, "ISYn") + C(-624, -494, -565, -555, "F(G6") + n(-434, "o5$7") + A("3VyJ", 1177, 1176) + B(657, "MjiL", 689, 701) + B(688, "82v2", 661, 741) + i(397, "3iFx", 244, 313, 313) + i(318, "U(kU", 174, 328, 264) + i(319, ")urf", 408, 236, 305) + C(-601, -578, -490, -496, "82v2") + A("([ro", 947, 1011) + B(952, ")5!h", 807, 840) + n(-549, ")5!h") + A("ANM6", 1180, 1181) + i(365, "([ro", 254, 150, 266) + B(852, "g2XF", 860, 906) + A("OPSn", 1102, 1070) + B(778, "elB5", 851, 860) + i(210, "OPSn", 252, 295, 226) + B(866, "[k4g", 653, 765) + C(-431, -532, -605, -513, "g2XF") + C(-311, -434, -356, -403, "MjiL") + n(-393, "UlOw") + B(881, "@hgf", 767, 787) + n(-563, "[G!f") + i(305, "[k4g", 155, 172, 230) + n(-375, "N]Rw") + n(-526, "OuZu") + A("wy[o", 960, 1025) + B(810, "0mkT", 848, 788) + C(-604, -626, -594, -529, "ISYn") + A("elB5", 1015, 1087) + i(376, "82v2", 383, 282, 283) + i(166, "rMW[", 174, 264, 227) + C(-255, -268, -286, -345, "Rr6v") + n(-421, "ANM6") + B(671, "3VyJ", 706, 762) + n(-529, "LCFM") + C(-311, -414, -357, -339, "ISYn") + B(819, ")5!h", 907, 845) + C(-566, -580, -614, -560, "[G!f") + B(880, "@hgf", 878, 810) + n(-382, "Rr6v") + B(838, "U(kU", 824, 872) + n(-405, "0mkT") + n(-508, "kBdw") + n(-418, "mFcf") + B(674, "7qGz", 675, 751) + n(-534, "lqaF") + i(192, "U(kU", 253, 198, 203) + i(408, "N)93", 340, 299, 299) + B(869, "ISYn", 943, 893) + B(744, "F%h0", 739, 814) + C(-260, -258, -255, -361, "N)93") + n(-495, "lqaF") + B(738, "UlOw", 795, 721) + C(-561, -447, -454, -546, "(Ksz") + C(-537, -381, -498, -485, "7qGz") + B(599, "U(kU", 702, 687) + A("$Til", 1012, 1125) + n(-360, "mV2f") + n(-466, "zbjr") + n(-388, "rMW[") + n(-468, "UlOw") + B(808, "#a*k", 911, 847) + C(-352, -451, -393, -454, "[k4g") + A("g2XF", 1155, 1137) + A("ANM6", 860, 970) + B(909, "0mkT", 917, 834) + C(-374, -529, -438, -455, "#a*k") + i(366, "kEzF", 362, 386, 350) + B(617, "U(kU", 775, 708) + C(-418, -500, -394, -422, "rG[i") + n(-484, ")5!h") + C(-266, -461, -460, -359, "kEzF") + B(777, "]QgT", 687, 777) + B(776, "[G!f", 809, 710) + i(66, "82v2", 90, 85, 177) + A("O]2I", 1048, 1091) + i(139, "mV2f", 200, 223, 254) + n(-380, "#a*k") + n(-499, "]QgT") + C(-543, -468, -435, -472, "1L&e") + C(-504, -418, -359, -398, "zbjr") + B(895, "O]2I", 762, 827) + i(303, "OuZu", 257, 291, 297) + i(372, "b$en", 265, 351, 298) + C(-459, -458, -400, -389, "82v2") + B(791, "ANM6", 767, 774) + C(-507, -536, -419, -425, ")urf") + C(-512, -376, -391, -456, "O]2I") + i(246, "98Hf", 142, 229, 221) + B(708, "v8ig", 689, 761) + n(-498, "wy[o") + C(-388, -324, -314, -342, "$Til") + C(-380, -450, -451, -420, "98Hf") + i(238, "kBdw", 242, 276, 282) + B(831, "N]Rw", 673, 745) + n(-574, "MjiL") + n(-459, "zbjr") + C(-307, -410, -336, -386, "A1q]") + B(733, "O]2I", 782, 826) + n(-441, "$Til") + A("Rr6v", 907, 977) + C(-549, -427, -536, -521, "OuZu") + i(206, ")5!h", 213, 87, 197) + B(830, "A1q]", 700, 791) + B(809, "[k4g", 890, 868) + A("rMW[", 1104, 1149) + C(-526, -451, -348, -429, "te7r") + i(371, "[k4g", 354, 167, 275) + C(-436, -433, -601, -542, "g2XF") + A("#a*k", 966, 1001) + C(-369, -459, -445, -349, "A1q]") + B(744, "#a*k", 916, 858) + i(78, "3VyJ", 218, 157, 167) + A("(Ksz", 1115, 1062) + B(847, "kEzF", 871, 819) + i(93, "]QgT", 168, 132, 178) + C(-399, -409, -355, -464, "(Ksz") + i(223, "elB5", 429, 340, 327) + A("[G!f", 1149, 1173) + n(-359, "kBdw") + B(911, "elB5", 890, 897) + i(182, ")urf", 145, 258, 199) + C(-262, -252, -330, -356, "mFcf") + B(751, "0mkT", 952, 855) + C(-489, -559, -414, -471, "O]2I") + A("3VyJ", 886, 964) + n(-403, "7qGz") + n(-514, "LCFM") + A("g2XF", 1100, 1047) + B(872, "98Hf", 859, 871) + B(914, "]QgT", 768, 867) + A("O]2I", 1002, 1037) + i(241, "rG[i", 192, 325, 304) + i(153, "Rr6v", 195, 88, 174) + B(919, "A1q]", 772, 866) + B(899, "O]2I", 855, 795) + C(-487, -575, -473, -534, "3iFx") + C(-634, -513, -586, -559, "6RH^") + i(285, "F%h0", 169, 310, 214) + B(825, "]QgT", 752, 743) + B(886, "zbjr", 861, 807) + n(-530, "Rr6v") + i(433, "b$en", 480, 462, 364) + B(936, "kEzF", 910, 852) + n(-457, "b$en") + A("Rr6v", 1068, 1053) + C(-475, -469, -616, -548, ")5!h") + B(779, "MjiL", 691, 737) + A("kBdw", 1158, 1044) + i(203, "MjiL", 269, 110, 183) + C(-251, -440, -423, -333, "UlOw") + A("mFcf", 1065, 966) + C(-267, -257, -259, -370, "elB5") + B(769, "ANM6", 683, 720) + B(700, ")5!h", 620, 717) + A("UlOw", 961, 973) + A("OPSn", 1089, 1086) + i(341, "$Til", 243, 339, 233) + n(-491, "OPSn"), I = window[i(291, "mFcf", 253, 390, 303)](g), t = window[i(200, "A1q]", 184, 85, 156)](I);
  function A(a, Q, E, x, s) {
    return rA(E - 669, a);
  }
  const e = BE(t), o = {};
  o[B(838, "6RH^", 959, 861)] = nn;
  function i(a, Q, E, x, s) {
    return rA(s - -144, Q);
  }
  function C(a, Q, E, x, s) {
    return rA(x - -858, s);
  }
  o[n(-473, "98Hf")] = Br;
  function n(a, Q, E, x, s) {
    return rA(a - -880, Q);
  }
  function B(a, Q, E, x, s) {
    return rA(x - 382, Q);
  }
  return window[C(-440, -529, -566, -509, "$Til") + "o"][A("N]Rw", 1100, 1162) + "e"][C(-494, -551, -600, -533, "Rr6v") + n(-419, "([ro")](C(-257, -376, -316, -355, "MjiL"), e, o, !0, [B(661, "kEzF", 586, 702) + "pt"]);
}
async function aE(g) {
  const I = await QE(), t = {};
  t[A(289, 231, "rG[i")] = nn;
  function A(o, i, C, n, B) {
    return rA(o - -212, C);
  }
  function e(o, i, C, n, B) {
    return rA(o - 774, B);
  }
  return window[A(103, 205, "@hgf") + "o"][e(1108, 1209, 1044, 1193, "ISYn") + "e"][A(152, 257, ")urf") + "pt"](t, I, g);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return pA(B - -819, n);
  }
  function A(n, B, a, Q, E) {
    return pA(E - -718, Q);
  }
  function e(n, B, a, Q, E) {
    return pA(E - -359, n);
  }
  function o(n, B, a, Q, E) {
    return pA(a - -729, Q);
  }
  const i = g();
  function C(n, B, a, Q, E) {
    return pA(B - 421, Q);
  }
  for (; ; )
    try {
      if (-parseInt(A(-466, -464, -471, "hL2@", -474)) / 1 + parseInt(A(-462, -472, -475, "@[$#", -465)) / 2 * (parseInt(C(683, 677, 681, "VlQP", 673)) / 3) + parseInt(t("NZ0n", -576, -581, -580, -581)) / 4 + -parseInt(t("mGMX", -580, -586, -579, -586)) / 5 * (parseInt(o(-490, -491, -484, "Rcw2", -491)) / 6) + parseInt(C(674, 670, 673, "6f!M", 670)) / 7 + -parseInt(C(664, 662, 653, "mGMX", 666)) / 8 + -parseInt(e("TIX$", -104, -114, -107, -111)) / 9 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Q0, -891 * 497 + -294287 + 1122900);
function Q0() {
  const g = ["WQG0sfRdU8ksW7FcUWtdPCoKW7Th", "eCosqmoDW5JcP8k/WOZcL8oLWPpdMmoL", "lSk7W7/cRuhcG8omWO3dGehdPG7dIW", "WR8TWPhdG8k5W7jtW70CiYK7WRC", "jxi1uSkWW6PUcq", "s2xdTchdHYVcR3G", "lCk9W7/cQuxcHCkTWQ/dTK3dSay", "W4iUW5hcQWpcNLBdGbuGW54Fyq", "W6Chmmo0kIldGCkgimojbSks", "W53dKmkFWO3cRK/dKSoYuKO", "W4uRW50", "hryCeJ1VW4BdR25f", "W6VdKx/cJwWMW7hdMmo7WPW", "hHCxee8pWPJdG1jIaLxcKG", "WP5GW7hdN8k3dcJcNIGW", "u8kscmkuWQKOWOxdTmocWR3cSY02", "W4SNW5lcR1ddMtddVY4a", "WRGUWPZdGmoGWOGzW5OrcG", "lSk9W7dcPeRcHCokWPxdOL/dKH7dPa", "WRFcHd7dI04"];
  return Q0 = function() {
    return g;
  }, Q0();
}
function pA(g, I) {
  const t = Q0();
  return pA = function(A, e) {
    A = A - 239;
    let o = t[A];
    if (pA.GyMLaV === void 0) {
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
      pA.woHygL = a, g = arguments, pA.GyMLaV = !0;
    }
    const C = t[-1538 + -1 * -1538], n = A + C, B = g[n];
    return B ? o = B : (pA.jmULYB === void 0 && (pA.jmULYB = !0), o = pA.woHygL(o, e), g[n] = o), o;
  }, pA(g, I);
}
async function rE(g) {
  const { iv: I, key: t, message: A } = await nE(g), e = await aE(t), o = {};
  function i(C, n, B, a, Q) {
    return pA(a - -917, Q);
  }
  return o[i(-664, -652, -666, -659, "^OMT")] = e, o.iv = I, o[i(-663, -679, -660, -670, "KMoW") + "ge"] = A, o;
}
function xA(g, I) {
  const t = a0();
  return xA = function(A, e) {
    A = A - (-11 * 521 + -6311 * -1 + -445);
    let o = t[A];
    if (xA.ivYqFZ === void 0) {
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
      xA.tWDpCB = a, g = arguments, xA.ivYqFZ = !0;
    }
    const C = t[1549 + -9176 * -1 + -10725], n = A + C, B = g[n];
    return B ? o = B : (xA.tHnoki === void 0 && (xA.tHnoki = !0), o = xA.tWDpCB(o, e), g[n] = o), o;
  }, xA(g, I);
}
function a0() {
  const g = ["mfhcO8kQWO4qWRHcWQpcSCoKkq", "lmo2W7NdIbC", "W5BcJ8oo", "c8k2WObDWQ/cNmo9", "BmoKu8onW70", "Fcisn8k2eINdPCohW6NcM8k1WObr", "W5tcUmkoWRxdJexcLwa", "W43cQmoUWOLIkLhcLG", "s8orA0RcLsRdS3Tqe2BcLSkkgW", "WQFcTCoZWOSv", "xCk7uhu", "nGpdPmovW5DKWPC", "wa/cQ20iWRysjGGgW4/dMmo9jG", "mCo3W40", "WQzepZxcLwKPrmoAWO/cTSkOW5u", "WQpcNSoxgxjUimoM", "oqZcLSkL", "WR/dU3ddOSozn8kCWONdU0/cKhlcIa", "W53dQ3SqW7qjW6f1f0FdVCoaeCkr", "btabW5uMWRz/EhvQWR1cW7G", "W47dNCk8W7XDzSoJW5NdHbRcQmoCW7e", "E8kOW4S", "xSk9WPf2WRa", "rmkHw2/dGW", "Bc7cQh8YW57dMY5MW7ldRJvf", "W47dM8oLWO8pjCk7W7O", "W4RcQ8k8W7KAuW/cH8oVm8kVWQ4N", "W7Lxe8oFW5RdKtTTWPmnCMvY", "FcCto8k2fsZcLmoOW5hcV8kDWOK", "W7vuW4z4W4xdHxJcLq", "W5FcV8kXWQpdLh3cJwy", "W4ldP8oXCq0", "W7bvWQeyWORcUgVcJSkAW5NdVGa"];
  return a0 = function() {
    return g;
  }, a0();
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return xA(Q - -817, B);
  }
  function A(n, B, a, Q, E) {
    return xA(n - 515, Q);
  }
  function e(n, B, a, Q, E) {
    return xA(a - 322, n);
  }
  const o = g();
  function i(n, B, a, Q, E) {
    return xA(a - -410, E);
  }
  function C(n, B, a, Q, E) {
    return xA(a - 599, Q);
  }
  for (; ; )
    try {
      if (parseInt(t(-682, "H))r", -677, -679, -668)) / 1 * (parseInt(t(-647, "DvB*", -661, -663, -672)) / 2) + parseInt(C(752, 748, 763, "3iNz", 768)) / 3 * (-parseInt(i(-241, -242, -243, -255, "3iNz")) / 4) + parseInt(t(-648, "6rS6", -641, -655, -655)) / 5 + -parseInt(t(-658, "#hQ4", -649, -658, -661)) / 6 * (parseInt(e("b$j7", 481, 464, 454, 464)) / 7) + parseInt(C(748, 763, 759, ")twW", 757)) / 8 * (-parseInt(t(-669, "tYsy", -658, -665, -674)) / 9) + -parseInt(A(658, 673, 652, "Qdu]", 652)) / 10 + parseInt(t(-660, "9FW4", -658, -670, -678)) / 11 === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(a0, 622162);
async function xE(g) {
  function I(i, C, n, B, a) {
    return xA(n - 116, B);
  }
  function t(i, C, n, B, a) {
    return xA(a - -771, i);
  }
  const A = await window[t("0]VA", -630, -620, -638, -632) + "o"][t("1Aka", -603, -613, -615, -613) + "e"][t("H))r", -626, -625, -612, -614) + "t"](e("XNEh", 763, 764, 756, 759), g);
  function e(i, C, n, B, a) {
    return xA(a - 593, i);
  }
  function o(i, C, n, B, a) {
    return xA(i - -144, B);
  }
  return Array[o(7, 22, 15, "qYfv")](new Uint8Array(A))[o(12, 27, 8, "awev")]((i) => i[t("PIfC", -651, -619, -651, -635) + I(272, 248, 264, "PIfC")](-1289 * 7 + 4145 + 4894)[o(0, -8, -5, "9KF*") + t("cHhl", -642, -628, -646, -634)](-1 * -3121 + 4831 + -7950, "0"))[o(1, 8, 16, "1Aka")]("");
}
function WA(g, I) {
  var t = r0();
  return WA = function(A, e) {
    A = A - (-4822 * 1 + 433 * -23 + -7496 * -2);
    var o = t[A];
    if (WA.nrfaeG === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", s = "", d = 0, h, r, u = 0; r = Q.charAt(u++); ~r && (h = d % 4 ? h * 64 + r : r, d++ % 4) ? x += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          r = E.indexOf(r);
        for (var p = 0, b = x.length; p < b; p++)
          s += "%" + ("00" + x.charCodeAt(p).toString(16)).slice(-2);
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
      WA.iSVLJp = C, g = arguments, WA.nrfaeG = !0;
    }
    var n = t[2385 + -29 * -110 + 25 * -223], B = A + n, a = g[B];
    return a ? o = a : (WA.qHtSOf === void 0 && (WA.qHtSOf = !0), o = WA.iSVLJp(o, e), g[B] = o), o;
  }, WA(g, I);
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return WA(B - 455, n);
  }
  function A(C, n, B, a, Q) {
    return WA(C - 912, B);
  }
  function e(C, n, B, a, Q) {
    return WA(a - -716, n);
  }
  for (var o = g(); ; )
    try {
      var i = parseInt(t(672, "g1Sr", 681, 676, 686)) / 1 + -parseInt(t(670, "BPnn", 672, 671, 668)) / 2 * (parseInt(t(687, "hHQp", 678, 682, 676)) / 3) + parseInt(t(674, "(Y2Q", 674, 668, 679)) / 4 + parseInt(A(1124, 1130, "(Y2Q", 1130, 1132)) / 5 + -parseInt(e(-508, "q2yg", -503, -501, -497)) / 6 * (-parseInt(t(678, "8CYj", 673, 664, 667)) / 7) + parseInt(A(1137, 1139, "g1t3", 1141, 1144)) / 8 + -parseInt(A(1126, 1121, "8CYj", 1134, 1130)) / 9;
      if (i === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(r0, -613060 + -430002 * -1 + -127 * -4957);
function r0() {
  var g = ["WPhcVSodhSkzxvmUtSojn8kB", "W4LxggddUJuLjCkPpCkTW6/cJW", "wCk5W7ZdI1yqhbVdHd/cOmokda", "WPizwhlcISoYeSoDAxfqW68", "W4xdHJhdUSkZtHvWab44jYb0", "nSkaW6j3lmosWPfIsSkuW7pcPG", "WOTQW53cLdJdVNC", "jCkXWOSbCSkppG", "EJqkW6FdO8oTWPX5WRbHDCka", "W7K2f8kwg8kqWQu6jcZcMCkd", "nmkFcSk4W7ZdLZJcO8ovWPnqjYy", "ACorE8kKb3RdLHL+WOu0WRNdOq", "o8oBW6aKWO94W4a", "xmk5W77dJ1athdFdVr/cMSoxka", "xCk7W7JdIfiqhYBdRGpcOCowaq", "W41vgwFdVteIy8kMnSkeW6JcOc8", "W4JcIZixgCowW40", "WPrmb8oEDSk9WOWIW5VdTuvm"];
  return r0 = function() {
    return g;
  }, r0();
}
async function _I(g) {
  const { Image: I } = Ye, t = await g.arrayBuffer(), A = new Uint8Array(t), e = {};
  e.bytes = A;
  const o = I.verify(e);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function _n(g) {
  const { v4: { Metadata: I } } = Ye, t = { ...g };
  t.platform = Ye.Platform.WEB;
  const A = t, e = I.verify(A);
  if (e) throw Error(e);
  return I.create(A);
}
async function Xn(g) {
  const { Content: I } = Ye, { iv: t, key: A, message: e } = await rE(g), o = { token: new Uint8Array(A), iv: t, schemaVersion: nr, bytes: new Uint8Array(e) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function zn(g) {
  const { Blob: I } = Ye.v4, t = I.verify(g);
  if (t) throw Error(t);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function EE(g, I) {
  const { FaceContent: t } = Ye.v4, A = await _I(g), e = await _n(I), o = {};
  o.image = A, o.metadata = e;
  const i = o, C = t.verify(i);
  if (C) throw Error(C);
  const n = t.create(i), B = {};
  return B.faceContent = n, zn(B);
}
async function sE(g, I) {
  const t = await EE(g, I);
  return Xn(t);
}
function cE({ controller: g, onPhotoTakenInternal: I }) {
  const { captureMode: t, onPhotoTaken: A, sessionToken: e } = wo(), o = GA(({ candidateSelectionImages: n, imageData: B, protoMessage: a, webMetadata: Q }) => {
    Kx(dn.FACE, n), A(B, a);
    const E = {};
    E.cameraProperties = Q, I == null || I(E);
  }, [I, A]), i = GA(({ fps: n, processedImage: B }, a) => {
    const Q = {};
    Q.code = B.instructionCode, Q.isEscalated = B.isEscalated, pn(ZA.INSTRUCTION_CHANGED, Q), g && _r(ZA.DETECTED_FACE_CHANGED, B.detection, g.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = B.detection, E.fps = n, E.image = a, E.isInCandidateSelection = B.isInCandidateSelection, E.invalidValidators = B.invalidValidators, Xr(ZA.FACE_DETECTION, E);
  }, [g]), C = {};
  return C.captureMode = t, C.controller = g, C.createProtoMessage = sE, C.onCapture = o, C.onDetection = i, C.sessionToken = e, C.customEvent = ZA, C.fallbackInstruction = IA.FACE_NOT_PRESENT, C.instructionCodeMap = IA, C.checkToInstructionCodeMap = wa, hx(C);
}
class dE {
  constructor(I, t, A) {
    m(this, "isDetectorInitialized", !1);
    m(this, "samVersion", null);
    m(this, "detection");
    this.imageProcessor = I, this.assetsDirectoryPath = t, this.instructionEscalation = A;
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new H("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = I;
  }
  runDetectionLoop(I) {
    this.detection && this.detection.stop(), this.detection = I, this.detection.run();
  }
  stopDetectionLoop() {
    var I, t;
    (I = this.detection) == null || I.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(I) {
    this.imageProcessor.validationService.thresholds = I;
  }
  static getWorkerPath(I, t) {
    return "" + t.replace(Bn, "") + I;
  }
}
class hE {
  constructor() {
    m(this, "detectionRecord", []);
    m(this, "imagesWithTimestampForDuplicateDetection", new Jt(Cr));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: t }) {
    const A = I.length / ar, e = A / (-93 + -5 * -19), o = I.length / 2, i = await xE(I.slice(o - e, o + e)), C = {};
    C.imageHash = i, C.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: Dr(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: t, imageData: A, timestamp: e }) {
    const o = an(I), i = this.validationService.validateDetectedObject(o, t);
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
class lE {
  constructor() {
    m(this, "thresholds", null);
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
const $n = Symbol("Comlink.proxy"), uE = Symbol("Comlink.endpoint"), fE = Symbol("Comlink.releaseProxy"), gI = Symbol("Comlink.finalizer"), Yg = Symbol("Comlink.thrown"), AB = (g) => typeof g == "object" && g !== null || typeof g == "function", DE = {
  canHandle: (g) => AB(g) && g[$n],
  serialize(g) {
    const { port1: I, port2: t } = new MessageChannel();
    return tB(g, I), [t, [t]];
  },
  deserialize(g) {
    return g.start(), Fo(g);
  }
}, yE = {
  canHandle: (g) => AB(g) && Yg in g,
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
}, eB = /* @__PURE__ */ new Map([
  ["proxy", DE],
  ["throw", yE]
]);
function wE(g, I) {
  for (const t of g)
    if (I === t || t === "*" || t instanceof RegExp && t.test(I))
      return !0;
  return !1;
}
function tB(g, I = globalThis, t = ["*"]) {
  I.addEventListener("message", function A(e) {
    if (!e || !e.data)
      return;
    if (!wE(t, e.origin)) {
      console.warn(`Invalid origin '${e.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, e.data), n = (e.data.argumentList || []).map(we);
    let B;
    try {
      const a = C.slice(0, -1).reduce((E, x) => E[x], g), Q = C.reduce((E, x) => E[x], g);
      switch (i) {
        case "GET":
          B = Q;
          break;
        case "SET":
          a[C.slice(-1)[0]] = we(e.data.value), B = !0;
          break;
        case "APPLY":
          B = Q.apply(a, n);
          break;
        case "CONSTRUCT":
          {
            const E = new Q(...n);
            B = NE(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: x } = new MessageChannel();
            tB(g, x), B = bE(E, [E]);
          }
          break;
        case "RELEASE":
          B = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      B = { value: a, [Yg]: 0 };
    }
    Promise.resolve(B).catch((a) => ({ value: a, [Yg]: 0 })).then((a) => {
      const [Q, E] = s0(a);
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E), i === "RELEASE" && (I.removeEventListener("message", A), gB(I), gI in g && typeof g[gI] == "function" && g[gI]());
    }).catch((a) => {
      const [Q, E] = s0({
        value: new TypeError("Unserializable return value"),
        [Yg]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E);
    });
  }), I.start && I.start();
}
function pE(g) {
  return g.constructor.name === "MessagePort";
}
function gB(g) {
  pE(g) && g.close();
}
function Fo(g, I) {
  return XI(g, [], I);
}
function fg(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function IB(g) {
  return Pe(g, {
    type: "RELEASE"
  }).then(() => {
    gB(g);
  });
}
const x0 = /* @__PURE__ */ new WeakMap(), E0 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (x0.get(g) || 0) - 1;
  x0.set(g, I), I === 0 && IB(g);
});
function mE(g, I) {
  const t = (x0.get(I) || 0) + 1;
  x0.set(I, t), E0 && E0.register(g, I, g);
}
function GE(g) {
  E0 && E0.unregister(g);
}
function XI(g, I = [], t = function() {
}) {
  let A = !1;
  const e = new Proxy(t, {
    get(o, i) {
      if (fg(A), i === fE)
        return () => {
          GE(e), IB(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => e };
        const C = Pe(g, {
          type: "GET",
          path: I.map((n) => n.toString())
        }).then(we);
        return C.then.bind(C);
      }
      return XI(g, [...I, i]);
    },
    set(o, i, C) {
      fg(A);
      const [n, B] = s0(C);
      return Pe(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: n
      }, B).then(we);
    },
    apply(o, i, C) {
      fg(A);
      const n = I[I.length - 1];
      if (n === uE)
        return Pe(g, {
          type: "ENDPOINT"
        }).then(we);
      if (n === "bind")
        return XI(g, I.slice(0, -1));
      const [B, a] = Vi(C);
      return Pe(g, {
        type: "APPLY",
        path: I.map((Q) => Q.toString()),
        argumentList: B
      }, a).then(we);
    },
    construct(o, i) {
      fg(A);
      const [C, n] = Vi(i);
      return Pe(g, {
        type: "CONSTRUCT",
        path: I.map((B) => B.toString()),
        argumentList: C
      }, n).then(we);
    }
  });
  return mE(e, g), e;
}
function kE(g) {
  return Array.prototype.concat.apply([], g);
}
function Vi(g) {
  const I = g.map(s0);
  return [I.map((t) => t[0]), kE(I.map((t) => t[1]))];
}
const oB = /* @__PURE__ */ new WeakMap();
function bE(g, I) {
  return oB.set(g, I), g;
}
function NE(g) {
  return Object.assign(g, { [$n]: !0 });
}
function s0(g) {
  for (const [I, t] of eB)
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
    oB.get(g) || []
  ];
}
function we(g) {
  switch (g.type) {
    case "HANDLER":
      return eB.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function Pe(g, I, t) {
  return new Promise((A) => {
    const e = FE();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== e || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: e }, I), t);
  });
}
function FE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const RE = "SAM v1.44.0 for idcards", SE = "/dot-assets/smile/dot-CCz7p721.js";
class iB extends hE {
  constructor(t, A) {
    super();
    m(this, "className", "FaceImageProcessor");
    m(this, "detector");
    m(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  optimizeImageBeforeDetection(t) {
    const A = jg(t), e = fr(t, A);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: t, timestamp: A }) {
    const e = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let i = await this.detector.detect(e.data, e.resolution, o);
    i = Rx(i, jg(t));
    const C = {};
    return C.detectedObject = i, C.image = t, C.imageData = e.data, C.timestamp = A, this.processDetectedObject(C);
  }
}
var $e, ke, be;
class ME {
  constructor(I) {
    L(this, $e);
    L(this, ke);
    L(this, be);
    M(this, $e, I), M(this, ke, /* @__PURE__ */ new Map());
  }
  validate() {
    D(this, $e).forEach((I) => {
      D(this, ke).set(I.name, I.evaluate());
    }), M(this, be, void 0);
  }
  isValid() {
    return D(this, be) === void (1531 + 7 * 1134 + 1 * -9469) && M(this, be, Array.from(D(this, ke).values()).every((I) => I)), D(this, be);
  }
  get result() {
    return D(this, ke);
  }
  get validators() {
    return D(this, $e);
  }
}
$e = new WeakMap(), ke = new WeakMap(), be = new WeakMap();
var Tt, Ne;
class kA {
  constructor(I, t) {
    L(this, Tt);
    L(this, Ne);
    M(this, Tt, I), M(this, Ne, t);
  }
  get threshold() {
    return D(this, Ne);
  }
  get name() {
    return D(this, Tt);
  }
  isValueBelowThreshold(I) {
    return I < D(this, Ne);
  }
  isValueAboveThreshold(I) {
    return I > D(this, Ne);
  }
}
Tt = new WeakMap(), Ne = new WeakMap();
const LE = "isNotDim";
var qt;
class vE extends kA {
  constructor(t, A) {
    super(LE, t);
    L(this, qt);
    M(this, qt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, qt));
  }
}
qt = new WeakMap();
const JE = "isNotSmall";
var Zt;
class WE extends kA {
  constructor(t, A) {
    super(JE, t);
    L(this, Zt);
    M(this, Zt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Zt));
  }
}
Zt = new WeakMap();
const YE = "isNotBright";
var Pt;
class UE extends kA {
  constructor(t, A) {
    super(YE, t);
    L(this, Pt);
    M(this, Pt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, Pt));
  }
}
Pt = new WeakMap();
const HE = "isPresent";
var jt;
class KE extends kA {
  constructor(t, A) {
    super(HE, t);
    L(this, jt);
    M(this, jt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, jt));
  }
}
jt = new WeakMap();
const OE = "isSharp";
var Vt;
class TE extends kA {
  constructor(t, A) {
    super(OE, t);
    L(this, Vt);
    M(this, Vt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Vt));
  }
}
Vt = new WeakMap();
const qE = "isLeftEyePresent";
var _t;
class ZE extends kA {
  constructor(t, A) {
    super(qE, t);
    L(this, _t);
    M(this, _t, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, _t));
  }
}
_t = new WeakMap();
const PE = "isMouthPresent";
var Xt;
class jE extends kA {
  constructor(t, A) {
    super(PE, t);
    L(this, Xt);
    M(this, Xt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Xt));
  }
}
Xt = new WeakMap();
const VE = "isMouthScoreNotTooLow";
var zt;
class _E extends kA {
  constructor(t, A) {
    super(VE, t);
    L(this, zt);
    M(this, zt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, zt));
  }
}
zt = new WeakMap();
const XE = "isMouthScoreNotTooHigh";
var $t;
class zE extends kA {
  constructor(t, A) {
    super(XE, t);
    L(this, $t);
    M(this, $t, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, $t));
  }
}
$t = new WeakMap();
const $E = "isNotLarge";
var Ag;
class As extends kA {
  constructor(t, A) {
    super($E, t);
    L(this, Ag);
    M(this, Ag, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, Ag));
  }
}
Ag = new WeakMap();
const es = "isNotPitched";
var eg;
const So = class So extends kA {
  constructor(t, A) {
    super(es, So.calculatePitchAngleAccelerationThreshold(t));
    L(this, eg);
    M(this, eg, A);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return or * Math.sin(t * (Math.PI / (-7493 + 1193 * 5 + 854 * 2)));
  }
  evaluate() {
    const { z: t } = D(this, eg) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
eg = new WeakMap();
let zI = So;
const ts = "isRightEyePresent";
var tg;
class gs extends kA {
  constructor(t, A) {
    super(ts, t);
    L(this, tg);
    M(this, tg, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, tg));
  }
}
tg = new WeakMap();
const Is = "isNotOutOfBounds";
var gg, Fe;
class os extends kA {
  constructor(t, A, e) {
    super(Is, t);
    L(this, gg);
    L(this, Fe);
    M(this, gg, A), M(this, Fe, e);
  }
  evaluate() {
    const t = cn(D(this, Fe), this.threshold, jg(D(this, Fe))), A = Wn(D(this, gg), D(this, Fe));
    return wr(A, t);
  }
}
gg = new WeakMap(), Fe = new WeakMap();
class is {
  static getFaceValidationInstance(I, t, A, e) {
    return new ME([new KE(I.faceConfidence, t.confidence), new ZE(I.leftEye.confidence, t.leftEye.confidence), new gs(I.rightEye.confidence, t.rightEye.confidence), new WE(I.minFaceSizeRatio, t.faceSize), new As(I.maxFaceSizeRatio, t.faceSize), new TE(I.sharpnessThreshold, t.sharpness), new vE(I.brightnessLowThreshold, t.brightness), new UE(I.brightnessHighThreshold, t.brightness), new os(I.outOfBoundsThreshold, t, A), new zI(I.devicePitchAngleThreshold, e), new jE(I.mouth.confidence, t.mouth.confidence), new zE(I.mouth.status.max, t.mouth.status), new _E(I.mouth.status.min, t.mouth.status)]);
  }
}
class CB extends lE {
  constructor() {
    super(...arguments);
    m(this, "className", "FaceValidationService");
    m(this, "acceleration", null);
  }
  validateDetectedObject(t, A) {
    const e = is.getFaceValidationInstance(this.getThresholds(), t, A, this.acceleration);
    return e.validate(), e;
  }
}
const Mt = class Mt extends dE {
  constructor(t, A, e, o, i) {
    super(e, o, i);
    m(this, "detector");
    m(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  static async createInstance(t) {
    const A = Mt.getWorkerPath(SE, t), e = {};
    e.type = "module";
    const o = new Worker(new URL(A, import.meta.url), e), i = Fo(o), C = await new i(), n = new CB(), B = new iB(C, n);
    return new Mt(C, n, B, t);
  }
  static async getInstance(t) {
    return !this._instance && (this._instance = await this.createInstance(t)), this._instance;
  }
  stopDetectionLoop() {
    var A;
    super.stopDetectionLoop();
    const t = {};
    t.code = (A = this.detection) == null ? void 0 : A["fallbackInstruction"], pn(ZA.INSTRUCTION_CHANGED, t, va);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
  areVersionsCompatible(t) {
    return t === RE;
  }
};
m(Mt, "_instance");
let c0 = Mt;
const nB = {};
nB.controllerClass = c0;
function Cs({ controllerClass: g } = nB) {
  const { handleError: I } = xt(), { acceleration: t } = Ix(), { assetsDirectoryPath: A, thresholds: e } = wo(), [o, i] = nA();
  K(() => {
    (async () => {
      const B = await g.getInstance(A);
      try {
        await B.init(), i(B);
      } catch (a) {
        if (a instanceof Error) {
          I(H.fromError(a));
          return;
        }
      }
    })();
  }, [g, I, A]), K(() => {
    o && o.setThresholds(e);
  }, [o, e]), K(() => {
    o && o.setAcceleration(t);
  }, [t, o]);
  const C = {};
  return C.controller = o, C;
}
var Ig, ae, At;
class ns extends Array {
  constructor(t) {
    super();
    L(this, Ig, 0);
    L(this, ae, []);
    L(this, At, !1);
    M(this, Ig, t);
  }
  clearAfterTimeout() {
    if (D(this, ae).length === -2236 * -4 + -2 * 1111 + 2 * -3361) return;
    const t = Date.now(), A = D(this, ae).findLastIndex((e) => t - e > D(this, Ig));
    A !== -(-3534 + 9 * -183 + 5182) && (M(this, At, !0), this.splice(-254 * -15 + 5389 + -9199, A + (4 * 2414 + 2 * -1088 + -7479)), D(this, ae).splice(-166 * 25 + 7225 + -75 * 41, A + (-1929 * 1 + 4 * -2133 + 10462)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const A = Array(t.length).fill(Date.now());
    this.push(...t), D(this, ae).push(...A);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return D(this, At);
  }
  clear() {
    this.splice(-5 * 475 + 8310 + -5935), D(this, ae).splice(-2923 + 79 * 37), M(this, At, !1);
  }
}
Ig = new WeakMap(), ae = new WeakMap(), At = new WeakMap();
var TA;
class Bs {
  constructor(I, t) {
    L(this, TA);
    this.instructionCodeCollector = I, this.config = t, M(this, TA, new Map(t.instructions.map((A) => [A, !1])));
  }
  get getInstructionCodes() {
    return D(this, TA);
  }
  canEscalate(I) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(I) ? !1 : t.filter((e) => e === I).length / t.length >= this.config.threshold;
  }
  collect(I) {
    this.instructionCodeCollector.pushWithTimestamp(I);
  }
  isEscalated(I) {
    return D(this, TA).get(I) ?? !1;
  }
  escalate() {
    for (const [I, t] of D(this, TA).entries())
      !t && this.canEscalate(I) && (this.config.onEscalate(I), D(this, TA).set(I, !0));
  }
  reset() {
    D(this, TA).forEach((I, t) => {
      D(this, TA).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
TA = new WeakMap();
const Qs = "SAM v1.44.0 for idcards", as = "/dot-assets/smile/dot-DnN28Ay4.js";
class d0 extends c0 {
  static async createInstance(I) {
    const t = d0.getWorkerPath(as, I), A = {};
    A.type = "module";
    const e = new Worker(new URL(t, import.meta.url), A), o = Fo(e), i = await new o(), C = new CB(), n = new iB(i, C), B = new Bs(new ns(AI.timeout), { threshold: AI.threshold, instructions: AI.instructions, onEscalate: (a) => zr(vt.INSTRUCTION_ESCALATED, a) });
    return new d0(i, C, n, I, B);
  }
  areVersionsCompatible(I) {
    return I === Qs;
  }
}
function rs({ onPhotoTakenInternal: g }) {
  const { isCameraReady: I } = tn(), { sunfish: t } = Et(), { controller: A } = Cs({ controllerClass: d0 }), { cameraResolution: e, detectionDetails: o, shouldCameraMirror: i, videoRef: C } = cE({
    controller: A,
    onPhotoTakenInternal: g
  });
  return /* @__PURE__ */ y(LA, { children: /* @__PURE__ */ y(
    Hx,
    {
      cameraResolution: e,
      detectionDetails: o,
      shouldMirror: i,
      children: /* @__PURE__ */ y(
        ua,
        {
          ref: C,
          $isImageMirror: i,
          $isVisible: t && I,
          autoPlay: !0,
          id: Ja,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function xs(g, I, t) {
  const { SmileLivenessContent: A } = Ye.v4, e = await _I(g), o = await _I(I), i = await _n(t), C = {};
  C.neutralExpressionFaceImage = e, C.smileExpressionFaceImage = o, C.metadata = i;
  const n = C, B = A.verify(n);
  if (B) throw Error(B);
  const a = A.create(n), Q = {};
  return Q.smileLivenessContent = a, zn(Q);
}
async function Es(g, I, t) {
  const A = await xs(g, I, t);
  return Xn(A);
}
function ss() {
  return { images: { fps: new Jt(-4882 + 8650 * -1 + 13562), mouthStatus: new Jt(4451 * 2 + -4833 * -1 + -13730) }, imageResolution: void (193 * -31 + 117 * -11 + 7270) };
}
function cs({ skip: g }) {
  const I = AA(ss()), { analytics: t } = co(), { crosshatch: A } = Et(), e = AA(!1);
  function o() {
    const B = I.current, a = Je(B.images.fps), Q = Je(B.images.mouthStatus);
    e.current = !0;
    const E = {};
    E.customer = A == null ? void 0 : A.customer, E.duration = Mi, E.averageFps = a, E.imageResolution = B.imageResolution, E.averageExpressionScore = Q, t == null || t.trackLongCapture(E);
  }
  const i = {};
  i.callback = o, i.delay = Mi * (21 * -301 + 2021 * -4 + 15405), i.skip = g || e.current, Ln(i);
  const C = GA((B) => {
    if (!B.detail) return;
    const { data: a } = B.detail;
    I.current.images.fps.pushFixed(a.fps), I.current.images.mouthStatus.pushFixed(a.detection.mouth.status), I.current.imageResolution = a.imageResolution;
  }, []);
  uo(ZA.FACE_DETECTION, C);
  const n = {};
  return n.wasEventTriggered = e, n;
}
function ds(g) {
  const I = g.sort((e, o) => e - o), t = Math.floor(I.length / (-4162 + -2 * -2082));
  return I.length % (5843 * -1 + 5890 + -45) === -3 * -121 + 1001 + -31 * 44 ? (I[t - (17557 + 14 * -1254)] + I[t]) / (-1604 + -7243 * -1 + -5637 * 1) : I[t];
}
function hs() {
  const [g, I] = nA(void 0), t = AA(!0), A = AA([]), e = GA((n) => {
    if (!n.detail || !t.current) return;
    const { data: B } = n.detail;
    if (!B.isInCandidateSelection) return;
    const a = B.detection.mouth.status;
    a < po && A.current.push(a);
  }, []);
  function o() {
    A.current = [], t.current = !0, I(void (-357 * -1 + 6221 * 1 + -299 * 22));
  }
  function i() {
    t.current = !1, I(ds(A.current));
  }
  const C = {};
  return C.median = g, C.reset = o, C.stop = i, C.handleFaceDetection = e, C;
}
function ls(g) {
  return function() {
    const { handleFaceDetection: t, median: A, reset: e, stop: o } = g();
    uo(ZA.FACE_DETECTION, t);
    const i = {};
    return i.median = A, i.reset = e, i.stop = o, i;
  };
}
function us({ phase: g }) {
  const [I, t] = nA(Tg.AUTO_CAPTURE), A = vn(I);
  function e() {
    t(Tg.WAIT_FOR_REQUEST), A(() => Jr(Rg.FIRST_FRAME));
  }
  const o = {};
  o.callback = e, o.delay = Fx, o.skip = g === OA.NEUTRAL;
  const { clear: i, isActive: C, reset: n } = Ln(o), B = {};
  return B.captureMode = I, B.restart = n, B.stop = i, B.isActive = C, B;
}
function fs(g, I, t) {
  switch (g) {
    case OA.SMILE:
      return { ...Nx(I), ...t };
    case OA.NEUTRAL:
    default:
      return { ...kx(), ...t };
  }
}
const Ds = ({
  assetsDirectoryPath: g,
  onComplete: I,
  sessionToken: t,
  thresholds: A
}) => {
  var Ie;
  const { analytics: e } = co(), { appState: o, handleAppStateChange: i, handleError: C, setIsCameraReady: n } = tn(), { cameraProperties: B, mergeCameraProperties: a } = Dx(), Q = vn(o), E = _e(OA.NEUTRAL), x = _e(null), s = _e(null), { captureMode: d, stop: h } = us({ phase: E.value }), {
    median: r,
    reset: u,
    stop: p
  } = ls(hs)();
  cs({
    skip: E.value !== OA.NEUTRAL || o !== RA.RUNNING
  });
  function b(oe) {
    E.value = oe, WI(vt.STATUS_CHANGED, { phase: oe });
  }
  function v() {
    h(), u(), b(OA.NEUTRAL), x.value = null, s.value = null, e == null || e.reset();
  }
  mx(px)({
    onFaceTrackingLost: () => {
      i(RA.WAITING), v(), Q(() => i(RA.RUNNING));
    },
    skipOutsideOfCandidateSelection: E.value === OA.NEUTRAL
  }), ux({
    onBlur: () => {
      n(!1), i(RA.LOADING), v();
    },
    onFocus: () => {
      n(!0), i(RA.RUNNING);
    }
  });
  function S(oe) {
    x.value = oe, p(), b(OA.SMILE), i(RA.RUNNING);
  }
  async function w(oe) {
    h(), s.value = oe;
    try {
      if (!x.value || !s.value)
        throw new H("Missing face data");
      const ce = {
        sessionToken: t,
        web: B.value
      }, S0 = await Es(
        x.value.image,
        s.value.image,
        ce
      ), ng = [x.value, s.value];
      I(ng, S0), e == null || e.trackLivenessProcess(ng), i(RA.DONE);
    } catch (ce) {
      ce instanceof Error && C(H.fromError(ce));
      return;
    }
  }
  const V = {
    [OA.NEUTRAL]: S,
    [OA.SMILE]: w
  }, EA = ((Ie = x.value) == null ? void 0 : Ie.data.detection.mouth.status) ?? po, q = fs(
    E.value,
    r ?? EA,
    A
  ), U = uA(
    () => ({
      assetsDirectoryPath: g,
      captureMode: d,
      onPhotoTaken: V[E.value],
      thresholds: q
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, d, E.value, q]
  );
  return /* @__PURE__ */ y(Gx, { children: /* @__PURE__ */ y(wx, { cameraOptions: U, children: /* @__PURE__ */ y(rs, { onPhotoTakenInternal: a }) }) });
};
function ys({ initAppState: g, onError: I }) {
  const [t, A] = nA(g), [e, o] = nA(), [i, C] = nA(!1), n = AA(I);
  K(() => {
    n.current = I;
  }, [I]);
  const B = {};
  return B.appState = t, B.setAppState = A, B.error = e, B.setError = o, B.isCameraReady = i, B.setIsCameraReady = C, B.onErrorRef = n, B;
}
function ws(g) {
  return g !== RA.RUNNING && g !== RA.WAITING ? _g.VISIBLE : _g.VISIBLE_WITH_MASK;
}
function ps({ onError: g }) {
  const { appState: I, error: t, isCameraReady: A, onErrorRef: e, setAppState: o, setError: i, setIsCameraReady: C } = ys({
    initAppState: RA.LOADING,
    onError: g
  }), n = ws(I), B = GA(
    (Q) => {
      WI(vt.STATUS_CHANGED, { state: RA.ERROR, error: Q }), C(!1), e.current(Q), i(Q), o(RA.ERROR);
    },
    [C, e, i, o]
  ), a = GA(
    (Q) => {
      o(Q), WI(vt.STATUS_CHANGED, { state: Q });
    },
    [o]
  );
  return {
    appState: I,
    freemiumOverlayState: n,
    isCameraReady: A,
    setIsCameraReady: C,
    handleAppStateChange: a,
    handleError: B,
    error: t
  };
}
var Ro = ((g) => (g.AUTO_CAPTURE = "auto-capture", g.LONG_CAPTURE_SMILE = "long-capture-smile", g))(Ro || {});
class ms {
  constructor() {
    m(this, "appKey", "");
    m(this, "deviceId", "");
  }
  async countlyFetch(I) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const A = {};
    A.method = "GET", A.headers = t;
    const e = A, o = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const C = dg(i);
    try {
      await fetch("" + o + C + "&" + I, e);
    } catch (n) {
      console.error("Countly Error", n);
    }
  }
  async init(I, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = I;
    const A = { _app_version: rn() }, e = { organization: xn(window.location.href) }, o = dg({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(e) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const t = dg(I);
    await this.countlyFetch(t);
  }
  async sendEvent(I, t, A) {
    const e = {};
    e.key = I, e.count = 1, e.dur = A, e.segmentation = t;
    const o = [e], i = dg({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, t) {
    await this.sendEvent(Ro.AUTO_CAPTURE, I, t);
  }
}
const Dg = new ms();
class Gs {
  constructor() {
    m(this, "countly", Dg);
  }
  createSegmentation(I) {
    return { appVersion: rn(), ...I };
  }
  init(I) {
    if (Er()) return;
    const t = ax();
    Dg.init(t, I);
  }
  endSession() {
    Dg.endSession();
  }
  walleye(I, t) {
    const A = {};
    A.nocturne = I, A.customer = t;
    const e = this.createSegmentation(A);
    Dg.sendAutoCaptureEvent(e);
  }
}
class ks extends Gs {
  constructor() {
    super(...arguments);
    m(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class bs extends ks {
  trackLivenessProcess(I) {
    var a, Q, E, x, s, d;
    if (!I.length || !this.captureProcessAnalytics.length) return;
    const [t, A] = I, [e, o] = this.captureProcessAnalytics, i = xx(e.averageFps + (o == null ? void 0 : o.averageFps)) / (-1269 + 6 * -1284 + 1795 * 5), C = Ri(e.captureProcessDurationInMs), n = Ri(o.captureProcessDurationInMs), B = this.createSegmentation({ faceSize: Si((a = A.data.detection) == null ? void 0 : a.faceSize), confidence: Si((Q = t.data.detection) == null ? void 0 : Q.confidence), imageResolution: ((x = (E = t.data) == null ? void 0 : E["imageResolution"]) == null ? void 0 : x.width) + "x" + ((d = (s = t.data) == null ? void 0 : s["imageResolution"]) == null ? void 0 : d.height), averageFps: i, captureTimeNeutral: Fi(C), captureTimeSmile: Fi(n), camera: rx(e == null ? void 0 : e.deviceName, e.facingMode), instructionSet: e.instructionSet });
    this.countly.sendAutoCaptureEvent(B, C + n), this.reset();
  }
  async trackLongCapture(I) {
    const { averageExpressionScore: t, averageFps: A, customer: e, duration: o, imageResolution: i } = I, C = this.createSegmentation({ imageResolution: i, averageFps: A, instructionSet: await Sn(), expressionScore: t, ...e && { customer: e } });
    this.countly.sendEvent(Ro.LONG_CAPTURE_SMILE, C, o);
  }
}
const Ns = new bs(), Fs = ({ props: g }) => g ? /* @__PURE__ */ y(ra, { target: g.styleTarget, children: /* @__PURE__ */ y(
  Gr,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: JI.getInstance(),
    children: /* @__PURE__ */ y(Nr, { analytics: Ns, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ y(
      ma,
      {
        value: ps({
          onError: g.onError
        }),
        children: /* @__PURE__ */ y(gn, { children: /* @__PURE__ */ y(Wr, { children: /* @__PURE__ */ y(Ds, { ...g }) }) })
      }
    ) })
  }
) }) : null;
yB(Fs, "x-dot-smile-liveness", ["props"]);
