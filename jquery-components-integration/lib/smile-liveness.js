var AB = Object.defineProperty;
var fo = (g) => {
  throw TypeError(g);
};
var eB = (g, I, t) => I in g ? AB(g, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[I] = t;
var p = (g, I, t) => eB(g, typeof I != "symbol" ? I + "" : I, t), Do = (g, I, t) => I.has(g) || fo("Cannot " + t);
var m = (g, I, t) => (Do(g, I, "read from private field"), t ? t.call(g) : I.get(g)), H = (g, I, t) => I.has(g) ? fo("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, t), Y = (g, I, t, A) => (Do(g, I, "write to private field"), A ? A.call(g, t) : I.set(g, t), t);
var qt, b, qi, Zi, he, yo, Pi, TI, W0, qI, ZI, ji, wt = {}, Vi = [], tB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, QI = Array.isArray;
function Ae(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function _i(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function uA(g, I, t) {
  var A, e, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : i[o] = I[o];
  if (arguments.length > 6223 * -1 + -9500 + 925 * 17 && (i.children = arguments.length > -9543 + -1302 * 7 + -1555 * -12 ? qt.call(arguments, 607 * 1 + -1927 + 1322) : t), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) void (-4654 + -3 * 1512 + 5 * 1838) === i[o] && (i[o] = g.defaultProps[o]);
  return ht(g, i, A, e, null);
}
function ht(g, I, t, A, e) {
  var o = {};
  o.type = g, o.props = I, o.key = t, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (-13236 + 13236 * 1), o.__c = null, o.constructor = void (-14 * -519 + 1268 * -7 + 46 * 35), o.__v = e ?? ++qi, o.__i = -(-1022 * 5 + -6114 * -1 + 1 * -1003), o.__u = 0;
  var i = o;
  return e == null && b.vnode != null && b.vnode(i), i;
}
function gB() {
  var g = {};
  return g.current = null, g;
}
function LA(g) {
  return g.children;
}
function SA(g, I) {
  this.props = g, this.context = I;
}
function be(g, I) {
  if (I == null) return g.__ ? be(g.__, g.__i + (-23 * 87 + 9711 + 593 * -13)) : null;
  for (var t; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) return t.__e;
  return typeof g.type == "function" ? be(g) : null;
}
function Xi(g) {
  var I, t;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = 438 * -15 + -1110 + 7680; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) {
      g.__e = g.__c.base = t.__e;
      break;
    }
    return Xi(g);
  }
}
function PI(g) {
  (!g.__d && (g.__d = !(-277 * 5 + 4826 + -111 * 31)) && he.push(g) && !bg.__r++ || yo !== b.debounceRendering) && ((yo = b.debounceRendering) || Pi)(bg);
}
function bg() {
  var g, I, t, A, e, o, i, C;
  for (he.sort(TI); g = he.shift(); ) g.__d && (I = he.length, A = void (6797 * -1 + 2 * -1714 + -1 * -10225), o = (e = (t = g).__v).__e, i = [], C = [], t.__P && ((A = Ae({}, e)).__v = e.__v + (1 * 9966 + 59 * -53 + -6838), b.vnode && b.vnode(A), U0(t.__P, A, e, t.__n, t.__P.namespaceURI, -7523 + 1874 * 1 + -19 * -299 & e.__u ? [o] : null, i, o ?? be(e), !!(-610 + -475 * 18 + 9192 & e.__u), C), A.__v = e.__v, A.__.__k[A.__i] = A, AC(i, A, C), A.__e != o && Xi(A)), he.length > I && he.sort(TI));
  bg.__r = 0;
}
function zi(g, I, t, A, e, o, i, C, n, B, a) {
  var Q, E, r, s, d, h = A && A.__k || Vi, x = I.length;
  for (t.__d = n, IB(t, I, h), n = t.__d, Q = 6521 + 1 * -6521; Q < x; Q++) (r = t.__k[Q]) != null && typeof r != "boolean" && typeof r != "function" && (E = -(8231 + -2189 * 3 + -1663 * 1) === r.__i ? wt : h[r.__i] || wt, r.__i = Q, U0(g, r, E, e, o, i, C, n, B, a), s = r.__e, r.ref && E.ref != r.ref && (E.ref && H0(E.ref, null, r), a.push(r.ref, r.__c || s, r)), d == null && s != null && (d = s), 67950 + 47479 * -1 + 5 * 9013 & r.__u || E.__k === r.__k ? (n && typeof r.type == "string" && !g.contains(n) && (n = be(E)), n = $i(r, n, g)) : typeof r.type == "function" && void (-1918 + 19 * 323 + -4219) !== r.__d ? n = r.__d : s && (n = s.nextSibling), r.__d = void (439 * 6 + 6553 + -9187 * 1), r.__u &= -(38 * -8315 + -384436 + 897015));
  t.__d = n, t.__e = d;
}
function IB(g, I, t) {
  var A, e, o, i, C, n = I.length, B = t.length, a = B, Q = -1200 + 4150 * -2 + 9500;
  for (g.__k = [], A = -7 * 1169 + 5233 * -1 + 13416; A < n; A++) i = A + Q, (e = g.__k[A] = (e = I[A]) == null || typeof e == "boolean" || typeof e == "function" ? null : typeof e == "string" || typeof e == "number" || typeof e == "bigint" || e.constructor == String ? ht(null, e, null, null, null) : QI(e) ? ht(LA, { children: e }, null, null, null) : void (3121 * -1 + -461 + 3582) === e.constructor && e.__b > -2 * 2463 + -2744 + 590 * 13 ? ht(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v) : e) != null ? (e.__ = g, e.__b = g.__b + (-9450 + -1 * -9451), C = oB(e, t, i, a), e.__i = C, o = null, -(-3 * 575 + -106 + 1832) !== C && (a--, (o = t[C]) && (o.__u |= 132676 * 1 + 73928 + -75532)), o == null || o.__v === null ? (C == -1 && Q--, typeof e.type != "function" && (e.__u |= -76707 * -1 + -424 * -211 + -3 * 33545)) : C !== i && (C == i - (8 * 121 + -3629 + 2662) ? Q = C - i : C == i + 1 ? Q++ : C > i ? a > n - i ? Q += C - i : Q-- : C < i && Q++, C !== A + Q && (e.__u |= -43 * -1783 + 82454 + -93587))) : (o = t[i]) && o.key == null && o.__e && -7773 + 3 * 2591 == (-1 * -135350 + 41885 + -871 * 53 & o.__u) && (o.__e == g.__d && (g.__d = be(o)), jI(o, o, !(639 + -159 * 1 + -1 * 479)), t[i] = null, a--);
  if (a)
    for (A = -6 * -1489 + -503 * -7 + -12455; A < B; A++) (o = t[A]) != null && !(-92130 + -50674 * 1 + -91292 * -3 & o.__u) && (o.__e == g.__d && (g.__d = be(o)), jI(o, o));
}
function $i(g, I, t) {
  var A, e;
  if (typeof g.type == "function") {
    for (A = g.__k, e = -53 * -149 + -2011 + -5886; A && e < A.length; e++) A[e] && (A[e].__ = g, I = $i(A[e], I, t));
    return I;
  }
  g.__e != I && (t.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && -107 + -3799 * -2 + -7483 === I.nodeType);
  return I;
}
function ee(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || (QI(g) ? g.some(function(t) {
    ee(t, I);
  }) : I.push(g)), I;
}
function oB(g, I, t, A) {
  var e = g.key, o = g.type, i = t - (-2145 + 37 * 58), C = t + 1, n = I[t];
  if (n === null || n && e == n.key && o === n.type && !(1 * -75920 + 244126 + 1 * -37134 & n.__u)) return t;
  if (A > (n != null && !(-17 * 4857 + -110911 + -24 * -13523 & n.__u) ? 12855 + -1 * 12854 : 2479 + 2003 * 4 + 1 * -10491)) for (; i >= 1 * -3335 + -8704 + 12039 || C < I.length; ) {
    if (i >= 7630 + 13 * -449 + -1793) {
      if ((n = I[i]) && 12112 + -12112 * 1 == (131072 & n.__u) && e == n.key && o === n.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((n = I[C]) && -1 * -7667 + -34 * -35 + -8857 * 1 == (19827 * -2 + 115326 + 55400 & n.__u) && e == n.key && o === n.type) return C;
      C++;
    }
  }
  return -(-5764 + -5765 * -1);
}
function wo(g, I, t) {
  I[-12665 + 149 * 85] === "-" ? g.setProperty(I, t ?? "") : g[I] = t == null ? "" : typeof t != "number" || tB.test(I) ? t : t + "px";
}
function eg(g, I, t, A, e) {
  var o;
  A: if (I === "style")
    if (typeof t == "string") g.style.cssText = t;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) t && I in t || wo(g.style, I, "");
      if (t)
        for (I in t) A && t[I] === A[I] || wo(g.style, I, t[I]);
    }
  else if (I[0] === "o" && I[-936 + -150 * -40 + 5063 * -1] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(65 * 49 + -6357 + 3174) : I.slice(7176 + -7174 * 1), g.l || (g.l = {}), g.l[I + o] = t, t ? A ? t.u = A.u : (t.u = W0, g.addEventListener(I, o ? ZI : qI, o)) : g.removeEventListener(I, o ? ZI : qI, o);
  else {
    if (e == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-6866 + -7 * -981) === t && I[-11111 + 285 * 39] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && 4913 + -697 * 5 + -1427 == t ? "" : t));
  }
}
function po(g) {
  return function(I) {
    if (this.l) {
      var t = this.l[I.type + g];
      if (I.t == null) I.t = W0++;
      else if (I.t < t.u) return;
      return t(b.event ? b.event(I) : I);
    }
  };
}
function U0(g, I, t, A, e, o, i, C, n, B) {
  var a, Q, E, r, s, d, h, x, u, w, R, S, M, y, q, L, j = I.type;
  if (void (-1 * -6971 + -125 * 67 + -4 * -351) !== I.constructor) return null;
  7430 + 2291 * -1 + -5011 & t.__u && (n = !!(-4338 * -1 + -55 * 25 + 977 * -3 & t.__u), o = [C = I.__e = t.__e]), (a = b.__b) && a(I);
  A: if (typeof j == "function") try {
    if (x = I.props, u = "prototype" in j && j.prototype.render, w = (a = j.contextType) && A[a.__c], R = a ? w ? w.props.value : a.__ : A, t.__c ? h = (Q = I.__c = t.__c).__ = Q.__E : (u ? I.__c = Q = new j(x, R) : (I.__c = Q = new SA(x, R), Q.constructor = j, Q.render = CB), w && w.sub(Q), Q.props = x, Q.state || (Q.state = {}), Q.context = R, Q.__n = A, E = Q.__d = !(56 * 124 + 8733 + 15677 * -1), Q.__h = [], Q._sb = []), u && Q.__s == null && (Q.__s = Q.state), u && j.getDerivedStateFromProps != null && (Q.__s == Q.state && (Q.__s = Ae({}, Q.__s)), Ae(Q.__s, j.getDerivedStateFromProps(x, Q.__s))), r = Q.props, s = Q.state, Q.__v = I, E) u && j.getDerivedStateFromProps == null && Q.componentWillMount != null && Q.componentWillMount(), u && Q.componentDidMount != null && Q.__h.push(Q.componentDidMount);
    else {
      if (u && j.getDerivedStateFromProps == null && x !== r && Q.componentWillReceiveProps != null && Q.componentWillReceiveProps(x, R), !Q.__e && (Q.shouldComponentUpdate != null && !(767 + 10 * 457 + -5336) === Q.shouldComponentUpdate(x, Q.__s, R) || I.__v === t.__v)) {
        for (I.__v !== t.__v && (Q.props = x, Q.state = Q.__s, Q.__d = !(3296 + 4728 * 2 + -311 * 41)), I.__e = t.__e, I.__k = t.__k, I.__k.forEach(function(ge) {
          ge && (ge.__ = I);
        }), S = 8056 + 214 * -9 + -6130; S < Q._sb.length; S++) Q.__h.push(Q._sb[S]);
        Q._sb = [], Q.__h.length && i.push(Q);
        break A;
      }
      Q.componentWillUpdate != null && Q.componentWillUpdate(x, Q.__s, R), u && Q.componentDidUpdate != null && Q.__h.push(function() {
        Q.componentDidUpdate(r, s, d);
      });
    }
    if (Q.context = R, Q.props = x, Q.__P = g, Q.__e = !(2981 + -2 * 235 + -2510), M = b.__r, y = -710 * -5 + -861 * -5 + -7855, u) {
      for (Q.state = Q.__s, Q.__d = !(16 * -40 + 399 * 1 + -1 * -242), M && M(I), a = Q.render(Q.props, Q.state, Q.context), q = 8 * 428 + -5573 + -1 * -2149; q < Q._sb.length; q++) Q.__h.push(Q._sb[q]);
      Q._sb = [];
    } else do
      Q.__d = !(-235 * 2 + -7 * -1115 + -7334), M && M(I), a = Q.render(Q.props, Q.state, Q.context), Q.state = Q.__s;
    while (Q.__d && ++y < 25);
    Q.state = Q.__s, Q.getChildContext != null && (A = Ae(Ae({}, A), Q.getChildContext())), u && !E && Q.getSnapshotBeforeUpdate != null && (d = Q.getSnapshotBeforeUpdate(r, s)), zi(g, QI(L = a != null && a.type === LA && a.key == null ? a.props.children : a) ? L : [L], I, t, A, e, o, i, C, n, B), Q.base = I.__e, I.__u &= -(-9397 * 1 + 992 * -6 + -705 * -22), Q.__h.length && i.push(Q), h && (Q.__E = Q.__ = null);
  } catch (ge) {
    I.__v = null, n || o != null ? (I.__e = C, I.__u |= n ? 8427 + 241 * -41 + 3 * 538 : 32, o[o.indexOf(C)] = null) : (I.__e = t.__e, I.__k = t.__k), b.__e(ge, I, t);
  }
  else o == null && I.__v === t.__v ? (I.__k = t.__k, I.__e = t.__e) : I.__e = iB(t.__e, I, t, A, e, o, i, n, B);
  (a = b.diffed) && a(I);
}
function AC(g, I, t) {
  I.__d = void (-8261 * 1 + -6085 + 2391 * 6);
  for (var A = -3098 * 2 + 519 * 19 + -3665 * 1; A < t.length; A++) H0(t[A], t[++A], t[++A]);
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
function iB(g, I, t, A, e, o, i, C, n) {
  var B, a, Q, E, r, s, d, h = t.props, x = I.props, u = I.type;
  if (u === "svg" ? e = "http://www.w3.org/2000/svg" : u === "math" ? e = "http://www.w3.org/1998/Math/MathML" : e || (e = "http://www.w3.org/1999/xhtml"), o != null) {
    for (B = 231 + 2 * -1465 + -2699 * -1; B < o.length; B++) if ((r = o[B]) && "setAttribute" in r == !!u && (u ? r.localName === u : 12 * -542 + -913 + 7420 === r.nodeType)) {
      g = r, o[B] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(x);
    g = document.createElementNS(e, u, x.is && x), o = null, C = !(-9427 + 2 * 4714);
  }
  if (u === null) h === x || C && g.data === x || (g.data = x);
  else {
    if (o = o && qt.call(g.childNodes), h = t.props || wt, !C && o != null)
      for (h = {}, B = 0; B < g.attributes.length; B++) h[(r = g.attributes[B]).name] = r.value;
    for (B in h) if (r = h[B], B != "children") {
      if (B == "dangerouslySetInnerHTML") Q = r;
      else if (B !== "key" && !(B in x)) {
        if (B == "value" && "defaultValue" in x || B == "checked" && "defaultChecked" in x) continue;
        eg(g, B, null, r, e);
      }
    }
    for (B in x) r = x[B], B == "children" ? E = r : B == "dangerouslySetInnerHTML" ? a = r : B == "value" ? s = r : B == "checked" ? d = r : B === "key" || C && typeof r != "function" || h[B] === r || eg(g, B, r, h[B], e);
    if (a) C || Q && (a.__html === Q.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (Q && (g.innerHTML = ""), zi(g, QI(E) ? E : [E], I, t, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e, o, i, o ? o[17 * -74 + 2238 + -980] : t.__k && be(t, -11 * 207 + -21 * -405 + -6228), C, n), o != null)
      for (B = o.length; B--; ) o[B] != null && _i(o[B]);
    C || (B = "value", void (1 * -9148 + -931 + 10079) !== s && (s !== g[B] || u === "progress" && !s || u === "option" && s !== h[B]) && eg(g, B, s, h[B], e), B = "checked", void (8695 + -1 * 7169 + -1526) !== d && d !== g[B] && eg(g, B, d, h[B], e));
  }
  return g;
}
function H0(g, I, t) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    b.__e(A, t);
  }
}
function jI(g, I, t) {
  var A, e;
  if (b.unmount && b.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || H0(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      b.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (e = -4177 * -1 + -1081 + -3096; e < A.length; e++) A[e] && jI(A[e], I, t || typeof g.type != "function");
  t || g.__e == null || _i(g.__e), g.__c = g.__ = g.__e = g.__d = void (-1 * -1548 + -1028 + -520);
}
function CB(g, I, t) {
  return this.constructor(g, t);
}
function ae(g, I, t) {
  var A, e, o, i;
  b.__ && b.__(g, I), e = (A = typeof t == "function") ? null : t && t.__k || I.__k, o = [], i = [], U0(I, g = (!A && t || I).__k = uA(LA, null, [g]), e || wt, wt, I.namespaceURI, !A && t ? [t] : e ? null : I.firstChild ? qt.call(I.childNodes) : null, o, !A && t ? t : e ? e.__e : I.firstChild, A, i), AC(o, g, i);
}
function K0(g, I) {
  ae(g, I, K0);
}
function O0(g, I, t) {
  var A, e, o, i, C = Ae({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : C[o] = void (-200 + 2979 * 3 + -8737) === I[o] && void (-414 + 1 * -7858 + -4 * -2068) !== i ? i[o] : I[o];
  return arguments.length > 2744 + 914 * -3 && (C.children = arguments.length > 3 ? qt.call(arguments, 7704 + 1297 * -1 + 7 * -915) : t), ht(g.type, C, A || g.key, e || g.ref, null);
}
function Zt(g, I) {
  var t = { __c: I = "__cC" + ji++, __: g, Consumer: function(A, e) {
    return A.children(e);
  }, Provider: function(A) {
    var e, o;
    return this.getChildContext || (e = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && e.some(function(C) {
        C.__e = !0, PI(C);
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
qt = Vi.slice, b = { __e: function(g, I, t, A) {
  for (var e, o, i; I = I.__; ) if ((e = I.__c) && !e.__) try {
    if ((o = e.constructor) && o.getDerivedStateFromError != null && (e.setState(o.getDerivedStateFromError(g)), i = e.__d), e.componentDidCatch != null && (e.componentDidCatch(g, A || {}), i = e.__d), i) return e.__E = e;
  } catch (C) {
    g = C;
  }
  throw g;
} }, qi = -3 * -2983 + 2678 + -11627, Zi = function(g) {
  return g != null && g.constructor == null;
}, SA.prototype.setState = function(g, I) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof g == "function" && (g = g(Ae({}, t), this.props)), g && Ae(t, g), g != null && this.__v && (I && this._sb.push(I), PI(this));
}, SA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(-10 * 205 + 74 * -122 + 29 * 382), g && this.__h.push(g), PI(this));
}, SA.prototype.render = LA, he = [], Pi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, TI = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, bg.__r = 19 + 25 * -119 + 739 * 4, W0 = 2340 * 1 + -2881 * -1 + 5221 * -1, qI = po(!1), ZI = po(!(-12 * 576 + -51 * 8 + 2440 * 3)), ji = 0;
function T0() {
  return (T0 = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = -4525 + -1 * -6158 + 102 * -16; I < arguments.length; I++) {
      var t = arguments[I];
      for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (g[A] = t[A]);
    }
    return g;
  }).apply(this, arguments);
}
var nB = ["context", "children"];
function BB(g) {
  this.getChildContext = function() {
    return g.context;
  };
  var I = g.children, t = function(A, e) {
    if (A == null) return {};
    var o, i, C = {}, n = Object.keys(A);
    for (i = 6225 + -1 * -3845 + -10070; i < n.length; i++) e.indexOf(o = n[i]) >= 1 * 436 + 29 * -262 + 7162 || (C[o] = A[o]);
    return C;
  }(g, nB);
  return O0(I, t);
}
function QB() {
  var g = {};
  g.detail = {}, g.bubbles = !(167 * -21 + -334 * -24 + -4509), g.cancelable = !(-5023 + -3 * -866 + -5 * -485);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = uA(BB, T0({}, this._props, { context: I.detail.context }), function t(A, e) {
    if (-2267 * 3 + 1 * -6271 + 13075 === A.nodeType) return A.data;
    if (-3779 * 2 + 1 * 8075 + 12 * -43 !== A.nodeType) return null;
    var o = [], i = {}, C = -7905 + 26 * 302 + 53, n = A.attributes, B = A.childNodes;
    for (C = n.length; C--; ) n[C].name !== "slot" && (i[n[C].name] = n[C].value, i[eC(n[C].name)] = n[C].value);
    for (C = B.length; C--; ) {
      var a = t(B[C], null), Q = B[C].slot;
      Q ? i[Q] = uA(mo, { name: Q }, a) : o[C] = a;
    }
    var E = e ? uA(mo, null, o) : o;
    return uA(e || A.nodeName.toLowerCase(), i, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? K0 : ae)(this._vdom, this._root);
}
function eC(g) {
  return g.replace(/-(\w)/g, function(I, t) {
    return t ? t.toUpperCase() : "";
  });
}
function aB(g, I, t) {
  if (this._vdom) {
    var A = {};
    A[g] = t = t ?? void (7355 + -562 * -11 + -13537 * 1), A[eC(g)] = t, this._vdom = O0(this._vdom, A), ae(this._vdom, this._root);
  }
}
function xB() {
  ae(this._vdom = null, this._root);
}
function mo(g, I) {
  var t = this;
  return uA("slot", T0({}, g, { ref: function(A) {
    A ? (t.ref = A, t._listener || (t._listener = function(e) {
      e.stopPropagation(), e.detail.context = I;
    }, A.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function rB(g, I, t, A) {
  function e() {
    var o = Reflect.construct(HTMLElement, [], e);
    return o._vdomComponent = g, o._root = o, o;
  }
  return (e.prototype = Object.create(HTMLElement.prototype)).constructor = e, e.prototype.connectedCallback = QB, e.prototype.attributeChangedCallback = aB, e.prototype.disconnectedCallback = xB, t = t || g.observedAttributes || Object.keys(g.propTypes || {}), e.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(e.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var C = typeof i;
      i != null && C !== "string" && C !== "boolean" && C !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(I, e);
}
var EB = 24 * 358 + -4619 + -29 * 137;
function D(g, I, t, A, e, o) {
  I || (I = {});
  var i, C, n = I;
  if ("ref" in n)
    for (C in n = {}, I) C == "ref" ? i = I[C] : n[C] = I[C];
  var B = {};
  B.type = g, B.props = n, B.key = t, B.ref = i, B.__k = null, B.__ = null, B.__b = 0, B.__e = null, B.__d = void (-19 * 371 + -1 * 8885 + 15934), B.__c = null, B.constructor = void (7914 + 345 * -7 + -5499), B.__v = --EB, B.__i = -(-54 * -23 + -7796 + 6555), B.__u = 0, B.__source = e, B.__self = o;
  var a = B;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (30 * 299 + 8220 + -17190) === n[C] && (n[C] = i[C]);
  return b.vnode && b.vnode(a), a;
}
var pA = function() {
  return pA = Object.assign || function(I) {
    for (var t, A = 1, e = arguments.length; A < e; A++) {
      t = arguments[A];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (I[o] = t[o]);
    }
    return I;
  }, pA.apply(this, arguments);
};
function je(g, I, t) {
  if (t || arguments.length === 2) for (var A = 0, e = I.length, o; A < e; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function sB(g) {
  var I = Object.create(null);
  return function(t) {
    return I[t] === void 0 && (I[t] = g(t)), I[t];
  };
}
var cB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dB = sB(function(g) {
  return cB.test(g) || g.charCodeAt(3 * -209 + -1418 * 1 + -2045 * -1) === -645 + 6870 * 1 + -6114 && g.charCodeAt(1) === 3691 * 2 + -286 + -6986 && g.charCodeAt(5277 * -1 + -3553 + 8832) < 870 + 43 * -13 + -44 * 5;
}), xe, P, kI, Go, Ve = -5391 + -3 * -1797, tC = [], V = b, ko = V.__b, bo = V.__r, No = V.diffed, Fo = V.__c, Ro = V.unmount, So = V.__;
function et(g, I) {
  V.__h && V.__h(P, g, Ve || I), Ve = 2806 + -1 * 9121 + -3 * -2105;
  var t = {};
  t.__ = [], t.__h = [];
  var A = P.__H || (P.__H = t);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function cA(g) {
  return Ve = -2523 + 1262 * 2, q0(oC, g);
}
function q0(g, I, t) {
  var A = et(xe++, 2);
  if (A.t = g, !A.__c && (A.__ = [t ? t(I) : oC(void (3594 + -136 * -56 + 1 * -11210), I), function(C) {
    var n = A.__N ? A.__N[0] : A.__[0], B = A.t(n, C);
    n !== B && (A.__N = [B, A.__[-4 * -1634 + 9802 + -16337]], A.__c.setState({}));
  }], A.__c = P, !P.u)) {
    var e = function(C, n, B) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (a.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, C, n, B);
      var Q = !(-2464 + -85 * -29);
      return a.forEach(function(E) {
        if (E.__N) {
          var r = E.__[0];
          E.__ = E.__N, E.__N = void 0, r !== E.__[0] && (Q = !0);
        }
      }), !(!Q && A.__c.props === C) && (!o || o.call(this, C, n, B));
    };
    P.u = !(-1 * -2462 + 844 + -3306);
    var o = P.shouldComponentUpdate, i = P.componentWillUpdate;
    P.componentWillUpdate = function(C, n, B) {
      if (this.__e) {
        var a = o;
        o = void (-4038 + -2 * -62 + 3914), e(C, n, B), o = a;
      }
      i && i.call(this, C, n, B);
    }, P.shouldComponentUpdate = e;
  }
  return A.__N || A.__;
}
function T(g, I) {
  var t = et(xe++, 3);
  !V.__s && Z0(t.__H, I) && (t.__ = g, t.i = I, P.__H.__h.push(t));
}
function tt(g, I) {
  var t = et(xe++, 4);
  !V.__s && Z0(t.__H, I) && (t.__ = g, t.i = I, P.__h.push(t));
}
function eA(g) {
  return Ve = 739 * 7 + 1 * 3662 + 883 * -10, mA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function gC(g, I, t) {
  Ve = 4248 + -4 * -2312 + -13490, tt(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void (7591 * -1 + -7767 + 15358);
  }, t == null ? t : t.concat(g));
}
function mA(g, I) {
  var t = et(xe++, 7);
  return Z0(t.__H, I) && (t.__ = g(), t.__H = I, t.__h = g), t.__;
}
function GA(g, I) {
  return Ve = 6251 + 83 * -45 + -2508, mA(function() {
    return g;
  }, I);
}
function Le(g) {
  var I = P.context[g.__c], t = et(xe++, -1628 + -1637 * -1);
  return t.c = g, I ? (t.__ == null && (t.__ = !(-4 * -13 + 1007 * -4 + -2 * -1988), I.sub(P)), I.props.value) : g.__;
}
function Ng(g, I) {
  V.useDebugValue && V.useDebugValue(I ? I(g) : g);
}
function IC() {
  var g = et(xe++, 11);
  if (!g.__) {
    for (var I = P.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var t = I.__m || (I.__m = [-2726 + -29 * -94, 1 * 7823 + -6910 + -913]);
    g.__ = "P" + t[-5 * -820 + 317 * 22 + -11074] + "-" + t[-4 * 1688 + -4942 + -2339 * -5]++;
  }
  return g.__;
}
function hB() {
  for (var g; g = tC.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach(rg), g.__H.__h.forEach(VI), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], V.__e(I, g.__v);
  }
}
V.__b = function(g) {
  P = null, ko && ko(g);
}, V.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), So && So(g, I);
}, V.__r = function(g) {
  bo && bo(g), xe = 0;
  var I = (P = g.__c).__H;
  I && (kI === P ? (I.__h = [], P.__h = [], I.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (5484 + -3518 * 2 + 97 * 16);
  })) : (I.__h.forEach(rg), I.__h.forEach(VI), I.__h = [], xe = 821 * 7 + 9 * 811 + -593 * 22)), kI = P;
}, V.diffed = function(g) {
  No && No(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (679 * 2 + 19 * -463 + 186 * 40 !== tC.push(I) && Go === V.requestAnimationFrame || ((Go = V.requestAnimationFrame) || lB)(hB)), I.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-93 + -31 * -3);
  })), kI = P = null;
}, V.__c = function(g, I) {
  I.some(function(t) {
    try {
      t.__h.forEach(rg), t.__h = t.__h.filter(function(A) {
        return !A.__ || VI(A);
      });
    } catch (A) {
      I.some(function(e) {
        e.__h && (e.__h = []);
      }), I = [], V.__e(A, t.__v);
    }
  }), Fo && Fo(g, I);
}, V.unmount = function(g) {
  Ro && Ro(g);
  var I, t = g.__c;
  t && t.__H && (t.__H.__.forEach(function(A) {
    try {
      rg(A);
    } catch (e) {
      I = e;
    }
  }), t.__H = void (-4 * 1461 + 8885 * -1 + 14729 * 1), I && V.__e(I, t.__v));
};
var Mo = typeof requestAnimationFrame == "function";
function lB(g) {
  var I, t = function() {
    clearTimeout(A), Mo && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(t, 100);
  Mo && (I = requestAnimationFrame(t));
}
function rg(g) {
  var I = P, t = g.__c;
  typeof t == "function" && (g.__c = void 0, t()), P = I;
}
function VI(g) {
  var I = P;
  g.__c = g.__(), P = I;
}
function Z0(g, I) {
  return !g || g.length !== I.length || I.some(function(t, A) {
    return t !== g[A];
  });
}
function oC(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function iC(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function _I(g, I) {
  for (var t in g) if (t !== "__source" && !(t in I)) return !(-2913 + 60 * -131 + 10773);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(2129 + -2137 * 2 + 2145);
  return !(1 * -1017 + -5803 + 6821 * 1);
}
function XI(g, I) {
  this.props = g, this.context = I;
}
function uB(g, I) {
  function t(e) {
    var o = this.props.ref, i = o == e.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, e) || !i : _I(this.props, e);
  }
  function A(e) {
    return this.shouldComponentUpdate = t, uA(g, e);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(-1 * -1885 + 79 * -87 + 86 * 58), A.__f = !(-1 * -8586 + -2325 + 1 * -6261), A;
}
(XI.prototype = new SA()).isPureReactComponent = !(-4 * -1811 + -116 + 2376 * -3), XI.prototype.shouldComponentUpdate = function(g, I) {
  return _I(this.props, g) || _I(this.state, I);
};
var Lo = b.__b;
b.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), Lo && Lo(g);
};
var fB = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 2967 + 12 * -51 + -4 * -389;
function CC(g) {
  function I(t) {
    var A = iC({}, t);
    return delete A.ref, g(A, t.ref || null);
  }
  return I.$$typeof = fB, I.render = I, I.prototype.isReactComponent = I.__f = !(-394 * -11 + -2 * -4058 + 249 * -50), I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var Jo = function(g, I) {
  return g == null ? null : ee(ee(g).map(I));
}, DB = { map: Jo, forEach: Jo, count: function(g) {
  return g ? ee(g).length : 6358 + -1 * 759 + -5599;
}, only: function(g) {
  var I = ee(g);
  if (-2246 + 1790 * -2 + 5827 !== I.length) throw "Children.only";
  return I[-8333 + -112 * 39 + 12701 * 1];
}, toArray: ee }, yB = b.__e;
b.__e = function(g, I, t, A) {
  if (g.then) {
    for (var e, o = I; o = o.__; ) if ((e = o.__c) && e.__c) return I.__e == null && (I.__e = t.__e, I.__k = t.__k), e.__c(g, I);
  }
  yB(g, I, t, A);
};
var vo = b.unmount;
function nC(g, I, t) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = iC({}, g)).__c != null && (g.__c.__P === t && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return nC(A, I, t);
  })), g;
}
function BC(g, I, t) {
  return g && t && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return BC(A, I, t);
  }), g.__c && g.__c.__P === I && (g.__e && t.appendChild(g.__e), g.__c.__e = !(-8158 + 8158 * 1), g.__c.__P = t)), g;
}
function Eg() {
  this.__u = 282 + 282 * -1, this.t = null, this.__b = null;
}
function QC(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function wB(g) {
  var I, t, A;
  function e(o) {
    if (I || (I = g()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!t) throw I;
    return uA(t, o);
  }
  return e.displayName = "Lazy", e.__f = !(1659 * -4 + -1 * -614 + -3011 * -2), e;
}
function at() {
  this.u = null, this.o = null;
}
b.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && 6 * 349 + 62 * -31 + 140 * -1 & g.__u && (g.type = null), vo && vo(g);
}, (Eg.prototype = new SA()).__c = function(g, I) {
  var t = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(t);
  var e = QC(A.__v), o = !1, i = function() {
    o || (o = !(-18 * -114 + 5292 + -54 * 136), t.__R = null, e ? e(C) : C());
  };
  t.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var n = A.state.__a;
        A.__v.__k[7 * -951 + -6 * -1541 + -863 * 3] = BC(n, n.__c.__P, n.__c.__O);
      }
      var B;
      for (A.setState({ __a: A.__b = null }); B = A.t.pop(); ) B.forceUpdate();
    }
  };
  A.__u++ || 271 * -5 + -1 * -1666 + 3 * -93 & I.__u || A.setState({ __a: A.__b = A.__v.__k[-2 * 3088 + 946 * 1 + 5230] }), g.then(i, i);
}, Eg.prototype.componentWillUnmount = function() {
  this.t = [];
}, Eg.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), A = this.__v.__k[-4751 + 2194 * -1 + 6945].__c;
      this.__v.__k[97 * 53 + -6921 + -1780 * -1] = nC(this.__b, t, A.__O = A.__P);
    }
    this.__b = null;
  }
  var e = I.__a && uA(LA, null, g.fallback);
  return e && (e.__u &= -(676 + -1 * -4583 + -5226)), [uA(LA, null, I.__a ? null : g.children), e];
};
var Yo = function(g, I, t) {
  if (++t[-800 + 622 * -8 + 109 * 53] === t[4 * -2201 + 3728 + 108 * 47] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[3814 + 1 * 9838 + -13652] !== "t" || !g.o.size)) for (t = g.u; t; ) {
    for (; t.length > -6 * 1004 + -1 * 7642 + 13669 * 1; ) t.pop()();
    if (t[-137 * 51 + -11 * 868 + 3 * 5512] < t[3861 + -1 * -487 + -4348]) break;
    g.u = t = t[-5 * -545 + -4705 + -1 * -1982];
  }
};
function pB(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function mB(g) {
  var I = this, t = g.i;
  I.componentWillUnmount = function() {
    ae(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== t && I.componentWillUnmount(), I.l || (I.i = t, I.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(3407 * 1 + 2 * 1996 + -7399);
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, e) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> 1, 3 * 2383 + -2209 * -1 + -9357), I.i.removeChild(A);
  } }), ae(uA(pB, { context: I.context }, g.__v), I.l);
}
function GB(g, I) {
  var t = {};
  t.__v = g, t.i = I;
  var A = uA(mB, t);
  return A.containerInfo = I, A;
}
(at.prototype = new SA()).__a = function(g) {
  var I = this, t = QC(I.__v), A = I.o.get(g);
  return A[2 * 462 + -5031 + 1369 * 3]++, function(e) {
    var o = function() {
      I.props.revealOrder ? (A.push(e), Yo(I, g, A)) : e();
    };
    t ? t(o) : o();
  };
}, at.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = ee(g.children);
  g.revealOrder && g.revealOrder[-3786 + 631 * 6] === "b" && I.reverse();
  for (var t = I.length; t--; ) this.o.set(I[t], this.u = [157 * 43 + -4785 + -15 * 131, -7279 * -1 + -6601 + -1 * 678, this.u]);
  return g.children;
}, at.prototype.componentDidUpdate = at.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, t) {
    Yo(g, t, I);
  });
};
var aC = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 7 * -12763 + 64 * 60 + 178 * 818, kB = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, bB = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, NB = /[A-Z0-9]/g, FB = typeof document < "u", RB = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function SB(g, I, t) {
  return I.__k == null && (I.textContent = ""), ae(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
function MB(g, I, t) {
  return K0(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
SA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(SA.prototype, g, { configurable: !(8824 + 5 * -710 + -5274), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var t = {};
    t.configurable = !(1 * -5843 + -7924 * -1 + 1 * -2081), t.writable = !(1367 * -2 + -8108 + -3 * -3614), t.value = I, Object.defineProperty(this, g, t);
  } });
});
var Wo = b.event;
function LB() {
}
function JB() {
  return this.cancelBubble;
}
function vB() {
  return this.defaultPrevented;
}
b.event = function(g) {
  return Wo && (g = Wo(g)), g.persist = LB, g.isPropagationStopped = JB, g.isDefaultPrevented = vB, g.nativeEvent = g;
};
var sg = {};
sg.enumerable = !(787 * -10 + -1006 + 8877 * 1), sg.configurable = !(5679 * 1 + -9335 + -4 * -914), sg.get = function() {
  return this.class;
};
var P0, YB = sg, Uo = b.vnode;
b.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var t = I.props, A = I.type, e = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || FB && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : C === "translate" && i === "no" ? i = !1 : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || RB(t.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : bB.test(o) ? o = C : -(5054 + -461 * 1 + -4592) === A.indexOf("-") && kB.test(o) ? o = o.replace(NB, "-$&").toLowerCase() : i === null && (i = void (-101 * -27 + -473 + 2 * -1127)) : C = o = "oninput", C === "oninput" && e[o = C] && (o = "oninputCapture"), e[o] = i;
      }
    }
    A == "select" && e.multiple && Array.isArray(e.value) && (e.value = ee(t.children).forEach(function(n) {
      n.props.selected = -(-578 + -32 * 274 + 9347) != e.value.indexOf(n.props.value);
    })), A == "select" && e.defaultValue != null && (e.value = ee(t.children).forEach(function(n) {
      n.props.selected = e.multiple ? -(5700 + -6469 * 1 + 154 * 5) != e.defaultValue.indexOf(n.props.value) : e.defaultValue == n.props.value;
    })), t.class && !t.className ? (e.class = t.class, Object.defineProperty(e, "className", YB)) : (t.className && !t.class || t.class && t.className) && (e.class = e.className = t.className), I.props = e;
  }(g), g.$$typeof = aC, Uo && Uo(g);
};
var Ho = b.__r;
b.__r = function(g) {
  Ho && Ho(g), P0 = g.__c;
};
var Ko = b.diffed;
b.diffed = function(g) {
  Ko && Ko(g);
  var I = g.props, t = g.__e;
  t != null && g.type === "textarea" && "value" in I && I.value !== t.value && (t.value = I.value == null ? "" : I.value), P0 = null;
};
var BA = {};
BA.readContext = function(g) {
  return P0.__n[g.__c].props.value;
}, BA.useCallback = GA, BA.useContext = Le, BA.useDebugValue = Ng, BA.useDeferredValue = sC, BA.useEffect = T, BA.useId = IC, BA.useImperativeHandle = gC, BA.useInsertionEffect = dC, BA.useLayoutEffect = tt, BA.useMemo = mA, BA.useReducer = q0, BA.useRef = eA, BA.useState = cA, BA.useSyncExternalStore = hC, BA.useTransition = cC;
var xC = {};
xC.current = BA;
var rC = {};
rC.ReactCurrentDispatcher = xC;
var WB = rC;
function UB(g) {
  return uA.bind(null, g);
}
function aI(g) {
  return !!g && g.$$typeof === aC;
}
function HB(g) {
  return aI(g) && g.type === LA;
}
function KB(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function OB(g) {
  return aI(g) ? O0.apply(null, arguments) : g;
}
function TB(g) {
  return !!g.__k && (ae(null, g), !(3819 * -2 + -1786 + -496 * -19));
}
function qB(g) {
  return g && (g.base || -8688 * -1 + 6 * -271 + -1 * 7061 === g.nodeType && g) || null;
}
var ZB = function(g, I) {
  return g(I);
}, PB = function(g, I) {
  return g(I);
}, jB = LA;
function EC(g) {
  g();
}
function sC(g) {
  return g;
}
function cC() {
  return [!(-6449 + -2 * -2515 + 10 * 142), EC];
}
var dC = tt, VB = aI;
function hC(g, I) {
  var t = I(), A = cA({ h: { __: t, v: I } }), e = A[-1 * 7027 + -1 * 5734 + 12761].h, o = A[-4224 + -7594 * 1 + 223 * 53];
  return tt(function() {
    e.__ = t, e.v = I, bI(e) && o({ h: e });
  }, [g, t, I]), T(function() {
    return bI(e) && o({ h: e }), g(function() {
      bI(e) && o({ h: e });
    });
  }, [g]), t;
}
function bI(g) {
  var I, t, A = g.v, e = g.__;
  try {
    var o = A();
    return !((I = e) === (t = o) && (47 * -5 + -28 + 263 !== I || (-22 * -399 + -5878 + -2899) / I == (1075 * 1 + -1999 * -2 + -5072) / t) || I != I && t != t);
  } catch {
    return !(-3730 + -40 * -8 + 3410);
  }
}
var k = {};
k.useState = cA, k.useId = IC, k.useReducer = q0, k.useEffect = T, k.useLayoutEffect = tt, k.useInsertionEffect = dC, k.useTransition = cC, k.useDeferredValue = sC, k.useSyncExternalStore = hC, k.startTransition = EC, k.useRef = eA, k.useImperativeHandle = gC, k.useMemo = mA, k.useCallback = GA, k.useContext = Le, k.useDebugValue = Ng, k.version = "17.0.2", k.Children = DB, k.render = SB, k.hydrate = MB, k.unmountComponentAtNode = TB, k.createPortal = GB, k.createElement = uA, k.createContext = Zt, k.createFactory = UB, k.cloneElement = OB, k.createRef = gB, k.Fragment = LA, k.isValidElement = aI, k.isElement = VB, k.isFragment = HB, k.isMemo = KB, k.findDOMNode = qB, k.Component = SA, k.PureComponent = XI, k.memo = uB, k.forwardRef = CC, k.flushSync = PB, k.unstable_batchedUpdates = ZB, k.StrictMode = jB, k.Suspense = Eg, k.SuspenseList = at, k.lazy = wB, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WB;
var Ne = k, _B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function XB(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function zB(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function $B(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") && Object.keys(g).length === 1 ? g.default : g;
}
function AQ(g) {
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
const eQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: _B,
  getAugmentedNamespace: AQ,
  getDefaultExportFromCjs: XB,
  getDefaultExportFromNamespaceIfNotNamed: $B,
  getDefaultExportFromNamespaceIfPresent: zB
}, Symbol.toStringTag, { value: "Module" }));
var tQ = function(I, t, A, e) {
  var o = A ? A.call(e, I, t) : void 0;
  if (o !== void (-8350 + 59 * -127 + 15843)) return !!o;
  if (I === t) return !0;
  if (typeof I != "object" || !I || typeof t != "object" || !t) return !1;
  var i = Object.keys(I), C = Object.keys(t);
  if (i.length !== C.length) return !1;
  for (var n = Object.prototype.hasOwnProperty.bind(t), B = 2 * 3557 + 6475 + 1 * -13589; B < i.length; B++) {
    var a = i[B];
    if (!n(a)) return !1;
    var Q = I[a], E = t[a];
    if (o = A ? A.call(e, Q, E, a) : void (9757 + 83 * 47 + -13658), o === !1 || o === void (1 * -7213 + -8 * 586 + 11901) && Q !== E) return !1;
  }
  return !0;
};
const gQ = eQ.getDefaultExportFromCjs(tQ);
var Z = "-ms-", lt = "-moz-", W = "-webkit-", lC = "comm", xI = "rule", j0 = "decl", IQ = "@import", uC = "@keyframes", oQ = "@layer", fC = Math.abs, V0 = String.fromCharCode, zI = Object.assign;
function iQ(g, I) {
  return IA(g, 2251 * 4 + 7696 + -4175 * 4) ^ 45 ? (((I << -831 * -3 + 92 * -88 + 5 * 1121 ^ IA(g, 0)) << 6989 + 2329 * -3 ^ IA(g, 5389 + 8125 * -1 + -161 * -17)) << -5480 + 811 * -10 + 13592 * 1 ^ IA(g, -6856 + -5492 * 1 + -19 * -650)) << 907 * -7 + -5416 + 41 * 287 ^ IA(g, -2020 + -1 * -7112 + -727 * 7) : -4232 + -4352 * -1 + -120;
}
function DC(g) {
  return g.trim();
}
function XA(g, I) {
  return (g = I.exec(g)) ? g[-1 * -1509 + 1 * -8467 + 497 * 14] : g;
}
function N(g, I, t) {
  return g.replace(I, t);
}
function cg(g, I, t) {
  return g.indexOf(I, t);
}
function IA(g, I) {
  return g.charCodeAt(I) | 11436 + 4 * -2859;
}
function _e(g, I, t) {
  return g.slice(I, t);
}
function OA(g) {
  return g.length;
}
function yC(g) {
  return g.length;
}
function xt(g, I) {
  return I.push(g), g;
}
function CQ(g, I) {
  return g.map(I).join("");
}
function Oo(g, I) {
  return g.filter(function(t) {
    return !XA(t, I);
  });
}
var rI = 6666 + -3171 * 2 + 19 * -17, Xe = 5515 + -2757 * 2, wC = -7626 + 3 * -2878 + -60 * -271, JA = -21 * -218 + -1258 * 1 + 8 * -415, AA = 16512 + 86 * -192, gt = "";
function EI(g, I, t, A, e, o, i, C) {
  var n = {};
  return n.value = g, n.root = I, n.parent = t, n.type = A, n.props = e, n.children = o, n.line = rI, n.column = Xe, n.length = i, n.return = "", n.siblings = C, n;
}
function Ce(g, I) {
  return zI(EI("", null, null, "", null, null, 0, g.siblings), g, { length: -g.length }, I);
}
function Ye(g) {
  for (; g.root; ) g = Ce(g.root, { children: [g] });
  xt(g, g.siblings);
}
function nQ() {
  return AA;
}
function BQ() {
  return AA = JA > -29 * -79 + -70 * -29 + -29 * 149 ? IA(gt, --JA) : -1064 + 419 * -1 + -1483 * -1, Xe--, AA === -8914 + 2 * -4789 + -29 * -638 && (Xe = -4779 + -31 * -301 + -4551, rI--), AA;
}
function WA() {
  return AA = JA < wC ? IA(gt, JA++) : 3480 + -3673 * -1 + -7153, Xe++, AA === -3 * 1923 + -913 + -3346 * -2 && (Xe = -1670 + -1 * -3557 + -1886, rI++), AA;
}
function Ge() {
  return IA(gt, JA);
}
function dg() {
  return JA;
}
function sI(g, I) {
  return _e(gt, g, I);
}
function $I(g) {
  switch (g) {
    case -11 * 365 + 33 * -61 + 6028:
    case 1 * 9733 + -12 * -253 + 4 * -3190:
    case 1 * -9893 + -7279 * 1 + 17182:
    case 13:
    case 4971 + -122 * 27 + -1645:
      return -1586 * -3 + 2 * -199 + -4355;
    case -1 * -6131 + 1613 * 6 + -1972 * 8:
    case 43:
    case -134 * -25 + 3 * 677 + -3 * 1779:
    case 47:
    case 1 * -2573 + 626 + 2009:
    case 64:
    case 7021 + -1 * 6251 + -46 * 14:
    case 1 * 9489 + 3967 + 13397 * -1:
    case -1209 * 7 + -10 * -498 + 3606:
    case -1899 + -3 * -1839 + -3493:
      return 479 * 9 + -3555 * -1 + -3931 * 2;
    case 82 * -71 + 521 + 5359:
      return 4017 + -446 * 9;
    case 34:
    case 9 * -1069 + -9576 + 19236:
    case -79 * -5 + -8722 + -8367 * -1:
    case 16456 + 16365 * -1:
      return -1 * 1685 + -919 + 2606;
    case -4157 + -3 * 674 + -1 * -6220:
    case -3 * -1011 + -6642 + 3702:
      return -4 * -1179 + 7664 + -1 * 12379;
  }
  return 7982 * 1 + -24 * -346 + -16286;
}
function QQ(g) {
  return rI = Xe = -6572 + 3 * 2191, wC = OA(gt = g), JA = 6358 + -269 * 37 + 1 * 3595, [];
}
function aQ(g) {
  return gt = "", g;
}
function NI(g) {
  return DC(sI(JA - (7 * 295 + 4 * 781 + 1 * -5188), A0(g === -66 * 48 + -4858 * 2 + 173 * 75 ? g + (2638 + 1 * 7046 + -47 * 206) : g === 4 * -123 + -11 * 539 + 6461 ? g + (-179 * 37 + -1999 + -1 * -8623) : g)));
}
function xQ(g) {
  for (; (AA = Ge()) && AA < -6 * 1571 + 6746 * -1 + 1 * 16205; ) WA();
  return $I(g) > -2 * -824 + 3161 * 1 + -11 * 437 || $I(AA) > 3 * -1039 + -6983 + 10103 ? "" : " ";
}
function rQ(g, I) {
  for (; --I && WA() && !(AA < 1108 * 8 + 1 * 5659 + -14475 || AA > 102 || AA > 6737 * -1 + 1492 + -241 * -22 && AA < 65 || AA > 624 + -2 * 277 && AA < 3402 + -47 * 83 + -298 * -2); ) ;
  return sI(g, dg() + (I < 8501 * -1 + 49 * 10 + -8017 * -1 && Ge() == 6841 * -1 + -207 + 7080 && WA() == -459 + 491 * 1));
}
function A0(g) {
  for (; WA(); ) switch (AA) {
    case g:
      return JA;
    case -2922 + 4471 * 1 + 1 * -1515:
    case -2764 + 35 * -119 + 6968:
      g !== -21 * 210 + 7132 * 1 + -2688 && g !== 14580 + 131 * -111 && A0(AA);
      break;
    case -1 * -7702 + -46 * -173 + -15620:
      g === -62 * -103 + -1889 * -1 + 179 * -46 && A0(g);
      break;
    case -2689 + 2277 * 1 + -56 * -9:
      WA();
      break;
  }
  return JA;
}
function EQ(g, I) {
  for (; WA() && g + AA !== 3921 * -1 + -1 * 889 + -1 * -4857 + (381 * -9 + 2935 + 504); ) if (g + AA === -608 * -16 + 19 * -511 + -1 * -23 + (1131 + -1 * 1089) && Ge() === 47) break;
  return "/*" + sI(I, JA - (7613 + -23 * 67 + -6071)) + "*" + V0(g === 706 + 45 * 39 + -142 * 17 ? g : WA());
}
function sQ(g) {
  for (; !$I(Ge()); ) WA();
  return sI(g, JA);
}
function cQ(g) {
  return aQ(hg("", null, null, null, [""], g = QQ(g), 0, [8529 + -3093 * -2 + -14715], g));
}
function hg(g, I, t, A, e, o, i, C, n) {
  for (var B = 0, a = 0, Q = i, E = 0, r = 6371 + 1 * -6371, s = 1311 * -1 + 1968 + 219 * -3, d = 1, h = 27 * -125 + 3876 + -500, x = -9 * 633 + -4 * -876 + 2194, u = 1876 * -1 + 7135 + 3 * -1753, w = "", R = e, S = o, M = A, y = w; h; ) switch (s = u, u = WA()) {
    case -6022 * 1 + 3 * -1102 + 9368:
      if (s != 1 * 9749 + 3721 + -13362 && IA(y, Q - (-3726 + -1 * -1577 + 2150)) == 4461 + 1259 * -7 + -294 * -15) {
        cg(y += N(NI(u), "&", "&\f"), "&\f", fC(B ? C[B - (106 * -17 + -6644 + -1 * -8447)] : 65 * -5 + -771 * 1 + 137 * 8)) != -(79 * -5 + 7081 + -6685) && (x = -(-5976 + 2281 * 3 + 1 * -866));
        break;
      }
    case 9696 + -6051 * 1 + -157 * 23:
    case 39:
    case 113 * -77 + 8947 + -155:
      y += NI(u);
      break;
    case 6762 + -57 * -167 + 678 * -24:
    case 571 * 13 + -3008 + -881 * 5:
    case -1 * -453 + -4 * -85 + 78 * -10:
    case 8916 + -1433 * 3 + -4585:
      y += xQ(s);
      break;
    case 92:
      y += rQ(dg() - 1, 401 * 15 + 3191 * -3 + 3565);
      continue;
    case -3079 + -3 * -1042:
      switch (Ge()) {
        case 42:
        case 47:
          xt(dQ(EQ(WA(), dg()), I, t, n), n);
          break;
        default:
          y += "/";
      }
      break;
    case (4681 + -3697 * -1 + -8255) * d:
      C[B++] = OA(y) * x;
    case (26 * 202 + 2 * -181 + -4765) * d:
    case 7 * 661 + -2795 + -591 * 3:
    case -5946 + -29 * 194 + 2 * 5786:
      switch (u) {
        case -4150 + -2075 * -2:
        case 951 * -7 + 2406 + -8 * -547:
          h = 1627 * -1 + -1244 * 2 + 4115 * 1;
        case -5561 + 5 * 1124 + a:
          x == -(518 * 1 + -6331 * 1 + -18 * -323) && (y = N(y, /\f/g, "")), r > 7 * -1369 + -59 + -1 * -9642 && OA(y) - Q && xt(r > -13 * -115 + -3 * 1200 + -2137 * -1 ? qo(y + ";", A, t, Q - (3 * 2197 + 1 * 2111 + 8701 * -1), n) : qo(N(y, " ", "") + ";", A, t, Q - (4 * -334 + -1 * 6189 + 13 * 579), n), n);
          break;
        case 2162 + -479 * -14 + -1 * 8809:
          y += ";";
        default:
          if (xt(M = To(y, I, t, B, a, e, C, w, R = [], S = [], Q, o), o), u === -5 * -1952 + 1032 + -10669)
            if (a === -5972 + 1493 * 4) hg(y, I, M, M, R, o, Q, C, S);
            else switch (E === 99 && IA(y, -6307 + 1 * -8063 + -1597 * -9) === -3 * 2955 + -430 * 5 + 11125 ? -12908 + 4 * 3252 : E) {
              case 100:
              case 9 * -178 + 5942 + -1058 * 4:
              case -5608 + -4 * 1984 + 1 * 13653:
              case -7419 * -1 + 9530 + -16834:
                hg(g, M, M, A && xt(To(g, M, M, 2889 * -1 + -8435 + 76 * 149, -7422 * -1 + 2467 + -31 * 319, e, C, w, e, R = [], Q, S), S), e, S, Q, C, A ? R : S);
                break;
              default:
                hg(y, M, M, M, [""], S, -7340 + 2365 * 2 + -15 * -174, C, S);
            }
      }
      B = a = r = 0, d = x = 1, w = y = "", Q = i;
      break;
    case 58:
      Q = -9149 * -1 + 4489 + -13637 + OA(y), r = s;
    default:
      if (d < -5951 + -424 * -2 + 638 * 8) {
        if (u == -3309 * 3 + -6260 * -1 + 3790) --d;
        else if (u == -8003 + 3 * -1847 + 1 * 13669 && d++ == 1 * 9397 + -3060 + -6337 * 1 && BQ() == -149 * -11 + -4 * 1516 + 4550) continue;
      }
      switch (y += V0(u), u * d) {
        case -4990 + 1924 * 1 + -8 * -388:
          x = a > -302 * 25 + -5646 + -1 * -13196 ? 1 : (y += "\f", -(3910 * 1 + -38 * -58 + -6113));
          break;
        case 1 * -6105 + -6264 + -1 * -12413:
          C[B++] = (OA(y) - (2488 + 1646 * -1 + -841)) * x, x = -4779 + -24 * 365 + 13540;
          break;
        case -10271 + 159 * 65:
          Ge() === -4 * -59 + 2951 * -3 + -61 * -142 && (y += NI(WA())), E = Ge(), a = Q = OA(w = y += sQ(dg())), u++;
          break;
        case 5 * -1097 + -3967 + 9497:
          s === 13 * 55 + -1204 + 534 && OA(y) == 2 && (d = 1 * -2821 + -634 * 5 + -5991 * -1);
      }
  }
  return o;
}
function To(g, I, t, A, e, o, i, C, n, B, a, Q) {
  for (var E = e - 1, r = e === -320 + -1 * 893 + -1213 * -1 ? o : [""], s = yC(r), d = 2 * -230 + 7401 * -1 + 7861, h = 8 * 47 + -1 * -2150 + -2526, x = -1823 + -691 * 2 + 5 * 641; d < A; ++d) for (var u = -7611 * -1 + 1 * 7 + 586 * -13, w = _e(g, E + (-8918 + 3 * 1232 + 5223), E = fC(h = i[d])), R = g; u < s; ++u) (R = DC(h > -70 * -31 + 8677 * -1 + -241 * -27 ? r[u] + " " + w : N(w, /&\f/g, r[u]))) && (n[x++] = R);
  return EI(g, I, t, e === 2 * -2084 + 632 + 3536 ? xI : C, n, B, a, Q);
}
function dQ(g, I, t, A) {
  return EI(g, I, t, lC, V0(nQ()), _e(g, 5 * -1339 + 8494 * 1 + -599 * 3, -2), -8392 + -2 * 404 + -10 * -920, A);
}
function qo(g, I, t, A, e) {
  return EI(g, I, t, j0, _e(g, 9552 + -1 * 5657 + -95 * 41, A), _e(g, A + (-1 * -2648 + 12 * 810 + -12367), -(1 * 1057 + -6814 + 5758)), A, e);
}
function pC(g, I, t) {
  switch (iQ(g, I)) {
    case -2788 * 3 + 481 * 19 + -1082 * -4:
      return W + "print-" + g + g;
    case 2 * -1167 + 3280 + -1 * -4791:
    case 4201:
    case 7382 + -24 * 313 + 3307:
    case 16736 + -251 * 53:
    case 1641:
    case -35 * 277 + -1081 + 15233:
    case -3 * -3115 + -97 * -79 + -14087:
    case -5648 + 4503 * 2 + -246 * -9:
    case -5168 + -883 * 1 + 19 * 653:
    case 14324 + 848 * -10:
    case 3674 + -69 * 7:
    case -2538 + -612 * -5 + 6123:
    case 593 * -7 + 9815 + 2659 * -1:
    case -8836 + -39 * -291 + 3878:
    case 5879:
    case -11362 + 215 * 79:
    case -1 * -9883 + 423 * 15 + -1 * 10093:
    case 107 * 38 + 6440 + 1 * -5907:
    case 111 * -41 + 4948 + 4458:
    case 5781 + 412 * 6 + -673 * 6:
    case 3535 + -1033 * -1 + 607 * 3:
    case 4683 + 1 * 7835 + -1 * 7409:
    case 4326 + -488 * -7 + -2377:
    case 8465 + 4 * -711:
    case 7960 + 106 * 4 + -4555:
      return W + g + g;
    case 6287 + 2 * -151 + -1196:
      return lt + g + g;
    case 5 * -114 + 5275 + 644:
    case -88 * -111 + 3566 + -9088:
    case 5 * -247 + -5297 + 11342:
    case 6679 + 289 * 1:
    case 1 * 3295 + 7526 + -5 * 1613:
      return W + g + lt + g + Z + g + g;
    case -2753 + -1 * -9553 + -864:
      switch (IA(g, I + (-113 * -31 + -3 * 97 + -3201))) {
        case -5 * 401 + -35 * 46 + -3729 * -1:
          return W + g + Z + N(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case -5381 * 1 + 6327 + -838:
          return W + g + Z + N(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case 1453 + 22 * -302 + -68 * -77:
          return W + g + Z + N(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case 1931 * -6 + -10714 * 1 + 29128:
    case 787 * -8 + 38 * 69 + 7942:
    case -379 * -25 + -615 * 1 + 23 * -259:
      return W + g + Z + g + g;
    case 6165:
      return W + g + Z + "flex-" + g + g;
    case 1 * -3161 + -10247 + 18595:
      return W + g + N(g, /(\w+).+(:[^]+)/, W + "box-$1$2" + Z + "flex-$1$2") + g;
    case -10102 * 1 + -6212 + 21757:
      return W + g + Z + "flex-item-" + N(g, /flex-|-self/g, "") + (XA(g, /flex-|baseline/) ? "" : Z + "grid-row-" + N(g, /flex-|-self/g, "")) + g;
    case 3036 + 1639 * 1:
      return W + g + Z + "flex-line-pack" + N(g, /align-content|flex-|-self/g, "") + g;
    case -3620 + 6139 * -1 + 15307:
      return W + g + Z + N(g, "shrink", "negative") + g;
    case 38 * 16 + 7728 + 1522 * -2:
      return W + g + Z + N(g, "basis", "preferred-size") + g;
    case 6060:
      return W + "box-" + N(g, "-grow", "") + W + g + Z + N(g, "grow", "positive") + g;
    case 9127 + 5883 * 1 + -10456:
      return W + N(g, /([^-])(transform)/g, "$1" + W + "$2") + g;
    case -1 * -3118 + -1 * 9089 + 12158:
      return N(N(N(g, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), g, "") + g;
    case 5495:
    case 496 * -12 + 1115 * 6 + 3221:
      return N(g, /(image-set\([^]*)/, W + "$1$`$1");
    case 706 * -1 + -133 * -5 + 5009:
      return N(N(g, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + g + g;
    case 10276 + 14 * -434:
      if (!XA(g, /flex-|baseline/)) return Z + "grid-column-align" + _e(g, I) + g;
      break;
    case -3121 * 2 + 1 * 7057 + 1777:
    case 4286 + 15 * -11 + -761:
      return Z + N(g, "template-", "") + g;
    case -7585 * -1 + 5017 + -8218:
    case 73 * 9 + 1 * -9393 + 12352:
      return t && t.some(function(A, e) {
        return I = e, XA(A.props, /grid-\w+-end/);
      }) ? ~cg(g + (t = t[I].value), "span", 2599 * -3 + 9128 + -1331) ? g : Z + N(g, "-start", "") + g + Z + "grid-row-span:" + (~cg(t, "span", 8366 + 1 * 593 + -289 * 31) ? XA(t, /\d+/) : +XA(t, /\d+/) - +XA(g, /\d+/)) + ";" : Z + N(g, "-start", "") + g;
    case -1 * 1297 + 1518 + -275 * -17:
    case 4728 * 1 + -5081 * 1 + 4481:
      return t && t.some(function(A) {
        return XA(A.props, /grid-\w+-start/);
      }) ? g : Z + N(N(g, "-end", "-span"), "span ", "") + g;
    case -9452 + -3236 * 2 + -1 * -20019:
    case -9767 + -1 * 537 + -3 * -4629:
    case 2147 + -608 * -2 + 15 * 47:
    case 9494 * 1 + -4369 * -2 + -15700:
      return N(g, /(.+)-inline(.+)/, W + "$1$2") + g;
    case 22016 + 3475 * -4:
    case 13244 + 1 * -9151 + 1 * 2966:
    case -2483 + -2 * -5006 + 16 * -111:
    case 8964 + -3539 * -2 + -1501 * 7:
    case 8795 + 1 * 3110 + 1615 * -4:
    case -487 * -13 + 26 * -59 + -8 * -113:
    case 3601 + -36 * -37:
    case -1538 + 5483 * 1 + -183 * -4:
    case -5 * -1345 + 1638 + 283 * -10:
    case -8 * -72 + -3543 + 44 * 199:
    case -125 * -77 + -8416 + 1 * 3812:
    case 4765:
      if (OA(g) - (-97 * -1 + 6404 + 52 * -125) - I > -123 * -61 + 610 * 7 + -11767 * 1) switch (IA(g, I + (668 * 1 + 2655 + -3322))) {
        case 236 * -22 + 1241 + 4060:
          if (IA(g, I + (-8507 + -1 * 7546 + -1 * -16057)) !== -2 * 1618 + -3815 * -1 + -2 * 267) break;
        case -3275 + -3 * 1027 + 2 * 3229:
          return N(g, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + lt + (IA(g, I + (462 + 27 * -17)) == 178 * -29 + 7630 + 20 * -118 ? "$3" : "$2-$3")) + g;
        case -4 * -1504 + -4706 + -239 * 5:
          return ~cg(g, "stretch", 3602 + 2 * -1801) ? pC(N(g, "stretch", "fill-available"), I, t) + g : g;
      }
      break;
    case 4621 * -1 + 1552 + 8221 * 1:
    case -2 * 1286 + -1 * -7963 + 529:
      return N(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, e, o, i, C, n, B) {
        return Z + e + ":" + o + B + (i ? Z + e + "-span:" + (C ? n : +n - +o) + B : "") + g;
      });
    case -132 * -21 + -25 * -353 + -6648:
      if (IA(g, I + (1 * -4149 + -7595 * 1 + 50 * 235)) === 1 * -1788 + 5 * 1842 + -149 * 49) return N(g, ":", ":" + W) + g;
      break;
    case -5233 + 1 * -1165 + -1 * -12842:
      switch (IA(g, IA(g, -1 * 8609 + -2494 + 11117) === -74 * -111 + -65 * -109 + -2 * 7627 ? 18 : 4719 + 11 * -428)) {
        case -3551 * 2 + -3676 + 10898:
          return N(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (IA(g, -2943 * -2 + -9455 + 1 * 3583) === -7288 * 1 + 43 * 143 + 1184 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Z + "$2box$3") + g;
        case -3595 + -4 * 1809 + -643 * -17:
          return N(g, ":", ":" + Z) + g;
      }
      break;
    case 5719:
    case 1 * -457 + -2923 + -861 * -7:
    case 8121 * -1 + 4532 + -36 * -159:
    case 3927:
    case -72 * -102 + 7402 * -1 + 2449 * 1:
      return N(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function Fg(g, I) {
  for (var t = "", A = 45 * 149 + -16 + -6689; A < g.length; A++) t += I(g[A], A, g, I) || "";
  return t;
}
function hQ(g, I, t, A) {
  switch (g.type) {
    case oQ:
      if (g.children.length) break;
    case IQ:
    case j0:
      return g.return = g.return || g.value;
    case lC:
      return "";
    case uC:
      return g.return = g.value + "{" + Fg(g.children, A) + "}";
    case xI:
      if (!OA(g.value = g.props.join(","))) return "";
  }
  return OA(t = Fg(g.children, A)) ? g.return = g.value + "{" + t + "}" : "";
}
function lQ(g) {
  var I = yC(g);
  return function(t, A, e, o) {
    for (var i = "", C = -1 * 347 + -1074 * -7 + -7171; C < I; C++) i += g[C](t, A, e, o) || "";
    return i;
  };
}
function uQ(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function fQ(g, I, t, A) {
  if (g.length > -1 && !g.return)
    switch (g.type) {
      case j0:
        g.return = pC(g.value, g.length, t);
        return;
      case uC:
        return Fg([Ce(g, { value: N(g.value, "@", "@" + W) })], A);
      case xI:
        if (g.length) return CQ(t = g.props, function(e) {
          switch (XA(e, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Ye(Ce(g, { props: [N(e, /:(read-\w+)/, ":" + lt + "$1")] }));
              var o = {};
              o.props = [e], Ye(Ce(g, o)), zI(g, { props: Oo(t, A) });
              break;
            case "::placeholder":
              Ye(Ce(g, { props: [N(e, /:(plac\w+)/, ":" + W + "input-$1")] })), Ye(Ce(g, { props: [N(e, /:(plac\w+)/, ":" + lt + "$1")] })), Ye(Ce(g, { props: [N(e, /:(plac\w+)/, Z + "input-$1")] }));
              var i = {};
              i.props = [e], Ye(Ce(g, i)), zI(g, { props: Oo(t, A) });
              break;
          }
          return "";
        });
    }
}
var G = {};
G.animationIterationCount = 1, G.aspectRatio = 1, G.borderImageOutset = 1, G.borderImageSlice = 1, G.borderImageWidth = 1, G.boxFlex = 1, G.boxFlexGroup = 1, G.boxOrdinalGroup = 1, G.columnCount = 1, G.columns = 1, G.flex = 1, G.flexGrow = 1, G.flexPositive = 1, G.flexShrink = 1, G.flexNegative = 1, G.flexOrder = 1, G.gridRow = 1, G.gridRowEnd = 1, G.gridRowSpan = 1, G.gridRowStart = 1, G.gridColumn = 1, G.gridColumnEnd = 1, G.gridColumnSpan = 1, G.gridColumnStart = 1, G.msGridRow = 1, G.msGridRowSpan = 1, G.msGridColumn = 1, G.msGridColumnSpan = 1, G.fontWeight = 1, G.lineHeight = 1, G.opacity = 1, G.order = 1, G.orphans = 1, G.tabSize = 1, G.widows = 1, G.zIndex = 1, G.zoom = 1, G.WebkitLineClamp = 1, G.fillOpacity = 1, G.floodOpacity = 1, G.stopOpacity = 1, G.strokeDasharray = 1, G.strokeDashoffset = 1, G.strokeMiterlimit = 1, G.strokeOpacity = 1, G.strokeWidth = 1;
var DQ = G, v = {}, Fe = typeof process < "u" && void (-4139 * -1 + -4 * 1687 + 2609) !== v && (v.REACT_APP_SC_ATTR || v.SC_ATTR) || "data-styled", mC = "active", GC = "data-styled-version", cI = "6.1.11", _0 = `/*!sc*/
`, X0 = typeof window < "u" && "HTMLElement" in window, yQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-2 * -3151 + -1775 + -4527) !== v && void (-5886 + -1 * -3949 + 1937) !== v.REACT_APP_SC_DISABLE_SPEEDY && v.REACT_APP_SC_DISABLE_SPEEDY !== "" ? v.REACT_APP_SC_DISABLE_SPEEDY !== "false" && v.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (2 * -4231 + 6460 + -143 * -14) !== v && void (-8208 + 408 * -23 + 17592) !== v.SC_DISABLE_SPEEDY && v.SC_DISABLE_SPEEDY !== "" ? v.SC_DISABLE_SPEEDY !== "false" && v.SC_DISABLE_SPEEDY : v.NODE_ENV !== "production"), Zo = /invalid hook call/i, tg = /* @__PURE__ */ new Set(), wQ = function(g, I) {
  if (v.NODE_ENV !== "production") {
    var t = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], n = -1 * 764 + -2687 + 3452; n < arguments.length; n++) C[n - (-17077 + -8539 * -2)] = arguments[n];
        Zo.test(i) ? (o = !1, tg.delete(A)) : e.apply(void 0, je([i], C, !1));
      }, eA(), o && !tg.has(A) && (console.warn(A), tg.add(A));
    } catch (i) {
      Zo.test(i.message) && tg.delete(A);
    } finally {
      console.error = e;
    }
  }
}, dI = Object.freeze([]), ze = Object.freeze({});
function pQ(g, I, t) {
  return t === void 0 && (t = ze), g.theme !== t.theme && g.theme || I || t.theme;
}
var e0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), mQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, GQ = /(^-|-$)/g;
function Po(g) {
  return g.replace(mQ, "-").replace(GQ, "");
}
var kQ = /(a)(d)/gi, gg = -1877 * 1 + -8449 + 2 * 5189, jo = function(g) {
  return String.fromCharCode(g + (g > -14690 + 109 * 135 ? 2443 + 7 * -325 + -129 : 2 * 2706 + 4997 * 1 + 4 * -2578));
};
function t0(g) {
  var I, t = "";
  for (I = Math.abs(g); I > gg; I = I / gg | -14 * -529 + -4987 * 1 + -2419) t = jo(I % gg) + t;
  return (jo(I % gg) + t).replace(kQ, "$1-$2");
}
var FI, kC = -206 * -2 + 1919 + 3050, le = function(g, I) {
  for (var t = I.length; t; ) g = (-103 * 87 + -8477 + 17471) * g ^ I.charCodeAt(--t);
  return g;
}, bC = function(g) {
  return le(kC, g);
};
function bQ(g) {
  return t0(bC(g) >>> -6715 + 274 * -9 + 9181);
}
function NC(g) {
  return v.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function RI(g) {
  return typeof g == "string" && (v.NODE_ENV === "production" || g.charAt(-7123 + -17 * -419) === g.charAt(-16885 + -1535 * -11).toLowerCase());
}
var NA = {};
NA.childContextTypes = !0, NA.contextType = !0, NA.contextTypes = !0, NA.defaultProps = !0, NA.displayName = !0, NA.getDefaultProps = !0, NA.getDerivedStateFromError = !0, NA.getDerivedStateFromProps = !0, NA.mixins = !0, NA.propTypes = !0, NA.type = !0;
var ne = {};
ne.name = !0, ne.length = !0, ne.prototype = !0, ne.caller = !0, ne.callee = !0, ne.arguments = !0, ne.arity = !0;
var de = {};
de.$$typeof = !0, de.compare = !0, de.defaultProps = !0, de.displayName = !0, de.propTypes = !0, de.type = !0;
var Ue = {};
Ue.$$typeof = !0, Ue.render = !0, Ue.defaultProps = !0, Ue.displayName = !0, Ue.propTypes = !0;
var FC = typeof Symbol == "function" && Symbol.for, RC = FC ? Symbol.for("react.memo") : -381 * -42 + 75201 + -31088, NQ = FC ? Symbol.for("react.forward_ref") : -8557 * -7 + -7 * 10505 + 73748, FQ = NA, RQ = ne, SC = de, SQ = ((FI = {})[NQ] = Ue, FI[RC] = SC, FI);
function Vo(g) {
  return ("type" in (I = g) && I.type.$$typeof) === RC ? SC : "$$typeof" in g ? SQ[g.$$typeof] : FQ;
  var I;
}
var MQ = Object.defineProperty, LQ = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, JQ = Object.getOwnPropertyDescriptor, vQ = Object.getPrototypeOf, Xo = Object.prototype;
function MC(g, I, t) {
  if (typeof I != "string") {
    if (Xo) {
      var A = vQ(I);
      A && A !== Xo && MC(g, A, t);
    }
    var e = LQ(I);
    _o && (e = e.concat(_o(I)));
    for (var o = Vo(g), i = Vo(I), C = 1 * 4859 + -61 * 61 + -1138 * 1; C < e.length; ++C) {
      var n = e[C];
      if (!(n in RQ || t && t[n] || i && n in i || o && n in o)) {
        var B = JQ(I, n);
        try {
          MQ(g, n, B);
        } catch {
        }
      }
    }
  }
  return g;
}
function $e(g) {
  return typeof g == "function";
}
function z0(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function fe(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function zo(g, I) {
  if (-2016 + -1 * 5587 + 7603 === g.length) return "";
  for (var t = g[-731 * 3 + -1 * -323 + -2 * -935], A = 1 * -887 + -8818 + 1 * 9706; A < g.length; A++) t += g[A];
  return t;
}
function At(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function g0(g, I, t) {
  if (void (4 * -115 + -2311 * -3 + -6473) === t && (t = !1), !t && !At(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = 2 * -439 + 110 * -29 + 678 * 6; A < I.length; A++) g[A] = g0(g[A], I[A]);
  else if (At(I))
    for (var A in I) g[A] = g0(g[A], I[A]);
  return g;
}
function $0(g, I) {
  var t = {};
  t.value = I, Object.defineProperty(g, "toString", t);
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
var YQ = v.NODE_ENV !== "production" ? tA : {};
function WQ() {
  for (var g = [], I = 6642 + 209 * 33 + -13539; I < arguments.length; I++) g[I] = arguments[I];
  for (var t = g[-833 * -5 + 121 * -7 + -474 * 7], A = [], e = 11 * -379 + 6406 + 2 * -1118, o = g.length; e < o; e += 1) A.push(g[e]);
  return A.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function It(g) {
  for (var I = [], t = 1; t < arguments.length; t++) I[t - (-4965 * 1 + 3199 + 1 * 1767)] = arguments[t];
  return v.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > -282 * 35 + -4621 * -1 + 5249 ? " Args: ".concat(I.join(", ")) : "")) : new Error(WQ.apply(void (260 * -8 + 2999 + 1 * -919), je([YQ[g]], I, !1)).trim());
}
var UQ = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(2557 * -1 + -3566 + 6635), this.length = -89 * -59 + -14 * 13 + 21 * -217, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var t = -8173 * -1 + -776 + -569 * 13, A = 4959 + 338 * 9 + -8001; A < I; A++) t += this.groupSizes[A];
    return t;
  }, g.prototype.insertRules = function(I, t) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, e = A.length, o = e; I >= o; ) if ((o <<= 1) < 3271 * -2 + -1 * -5282 + 35 * 36) throw It(-6346 + -30 * 113 + 9752, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = e; i < o; i++) this.groupSizes[i] = 0;
    }
    for (var C = this.indexOfGroup(I + (-2034 + 38 * 5 + 1845)), n = (i = -2201 * -1 + -808 + 1 * -1393, t.length); i < n; i++) this.tag.insertRule(C, t[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var t = this.groupSizes[I], A = this.indexOfGroup(I), e = A + t;
      this.groupSizes[I] = 1 * 8486 + 3966 + -12452;
      for (var o = A; o < e; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var t = "";
    if (I >= this.length || 175 * 23 + 8387 * 1 + -12412 === this.groupSizes[I]) return t;
    for (var A = this.groupSizes[I], e = this.indexOfGroup(I), o = e + A, i = e; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(_0);
    return t;
  }, g;
}(), HQ = 3065 * 2 + -333 * -16 + -11457 << -2 * -1672 + -19 * 71 + -3 * 655, lg = /* @__PURE__ */ new Map(), Rg = /* @__PURE__ */ new Map(), ug = 5212 + 47 * -22 + 4177 * -1, Ig = function(g) {
  if (lg.has(g)) return lg.get(g);
  for (; Rg.has(ug); ) ug++;
  var I = ug++;
  if (v.NODE_ENV !== "production" && ((3918 + -2226 * -1 + 3072 * -2 | I) < -5 * 345 + -328 * -19 + -4507 || I > HQ)) throw It(-1230 + 623 * 2, "".concat(I));
  return lg.set(g, I), Rg.set(I, g), I;
}, KQ = function(g, I) {
  ug = I + (2 * -4675 + 40 * 112 + 4871), lg.set(g, I), Rg.set(I, g);
}, OQ = "style[".concat(Fe, "][").concat(GC, '="').concat(cI, '"]'), TQ = new RegExp("^".concat(Fe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), qQ = function(g, I, t) {
  for (var A, e = t.split(","), o = 1467 + 9 * -163, i = e.length; o < i; o++) (A = e[o]) && g.registerName(I, A);
}, ZQ = function(g, I) {
  for (var t, A = ((t = I.textContent) !== null && void (2642 * -1 + -7 * -46 + 5 * 464) !== t ? t : "").split(_0), e = [], o = 0, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var n = C.match(TQ);
      if (n) {
        var B = 0 | parseInt(n[1], 10), a = n[-3 * -2931 + -4870 + -3921];
        B !== 0 && (KQ(a, B), qQ(g, a, n[-11 * -719 + 7 * 931 + -14423]), g.getTag().insertRules(B, e)), e.length = 34 * -79 + -1 * 6229 + -1 * -8915;
      } else e.push(C);
    }
  }
};
function PQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var LC = function(g) {
  var I = document.head, t = g || I, A = document.createElement("style"), e = function(C) {
    var n = Array.from(C.querySelectorAll("style[".concat(Fe, "]")));
    return n[n.length - (1 * 6668 + 3826 * -1 + -2841)];
  }(t), o = void (1413 + 3742 * 2 + -1 * 8897) !== e ? e.nextSibling : null;
  A.setAttribute(Fe, mC), A.setAttribute(GC, cI);
  var i = PQ();
  return i && A.setAttribute("nonce", i), t.insertBefore(A, o), A;
}, jQ = function() {
  function g(I) {
    this.element = LC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var A = document.styleSheets, e = 240 + -443 * 15 + 6405, o = A.length; e < o; e++) {
        var i = A[e];
        if (i.ownerNode === t) return i;
      }
      throw It(2901 * -1 + 4256 + -223 * 6);
    }(this.element), this.length = 470 * 9 + -139 * -9 + -5481;
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
}(), VQ = function() {
  function g(I) {
    this.element = LC(I), this.nodes = this.element.childNodes, this.length = -305 * -1 + 9 * -691 + -2 * -2957;
  }
  return g.prototype.insertRule = function(I, t) {
    if (I <= this.length && I >= -1 * 6316 + 46 * -35 + 2 * 3963) {
      var A = document.createTextNode(t);
      return this.element.insertBefore(A, this.nodes[I] || null), this.length++, !0;
    }
    return !1;
  }, g.prototype.deleteRule = function(I) {
    this.element.removeChild(this.nodes[I]), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.nodes[I].textContent : "";
  }, g;
}(), _Q = function() {
  function g(I) {
    this.rules = [], this.length = 17251 + 1 * -17251;
  }
  return g.prototype.insertRule = function(I, t) {
    return I <= this.length && (this.rules.splice(I, -5332 + 5949 * -1 + 29 * 389, t), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, 1), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), $o = X0, XQ = { isServer: !X0, useCSSOMInjection: !yQ }, JC = function() {
  function g(I, t, A) {
    void (1 * -5673 + 6678 + -1005) === I && (I = ze), void (8723 + 2 * 3151 + 601 * -25) === t && (t = {});
    var e = this;
    this.options = pA(pA({}, XQ), I), this.gs = t, this.names = new Map(A), this.server = !!I.isServer, !this.server && X0 && $o && ($o = !1, function(o) {
      for (var i = document.querySelectorAll(OQ), C = -1649 + 1284 * -2 + 1 * 4217, n = i.length; C < n; C++) {
        var B = i[C];
        B && B.getAttribute(Fe) !== mC && (ZQ(o, B), B.parentNode && B.parentNode.removeChild(B));
      }
    }(this)), $0(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, n = "", B = function(Q) {
          var E = function(x) {
            return Rg.get(x);
          }(Q);
          if (E === void 0) return "continue";
          var r = o.names.get(E), s = i.getGroup(Q);
          if (void (1 * 9124 + -1 * 6023 + -3101) === r || 43 * 14 + -392 + -210 === s.length) return "continue";
          var d = "".concat(Fe, ".g").concat(Q, '[id="').concat(E, '"]'), h = "";
          void (-614 * -5 + 709 * -10 + -12 * -335) !== r && r.forEach(function(x) {
            x.length > 9033 + 38 * -1 + -8995 && (h += "".concat(x, ","));
          }), n += "".concat(s).concat(d, '{content:"').concat(h, '"}').concat(_0);
        }, a = -8 * -68 + -147 * 17 + 1955; a < C; a++) B(a);
        return n;
      }(e);
    });
  }
  return g.registerId = function(I) {
    return Ig(I);
  }, g.prototype.reconstructWithOptions = function(I, t) {
    return void (5892 + 9421 * -1 + 3529 * 1) === t && (t = !0), new g(pA(pA({}, this.options), I), this.gs, t && this.names || void (6083 * 1 + -5 * -37 + 4 * -1567));
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || -1333 * -1 + -73 * -18 + -2647) + (-101 * 61 + 8306 * 1 + -2144);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(t) {
      var A = t.useCSSOMInjection, e = t.target;
      return t.isServer ? new _Q(e) : A ? new jQ(e) : new VQ(e);
    }(this.options), new UQ(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, t) {
    return this.names.has(I) && this.names.get(I).has(t);
  }, g.prototype.registerName = function(I, t) {
    if (Ig(I), this.names.has(I)) this.names.get(I).add(t);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(t), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, t, A) {
    this.registerName(I, t), this.getTag().insertRules(Ig(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(Ig(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void 0;
  }, g;
}(), zQ = /&/g, $Q = /^\s*\/\/.*$/gm;
function vC(g, I) {
  return g.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(I, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(I, " ")), t.props = t.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = vC(t.children, I)), t;
  });
}
function YC(g) {
  var I, t, A, e = g === void 0 ? ze : g, o = e.options, i = void (-9623 + -2036 * 4 + 17767) === o ? ze : o, C = e.plugins, n = C === void 0 ? dI : C, B = function(E, r, s) {
    return s.startsWith(t) && s.endsWith(t) && s.replaceAll(t, "").length > -2124 + 118 * 18 ? ".".concat(I) : E;
  }, a = n.slice();
  a.push(function(E) {
    E.type === xI && E.value.includes("&") && (E.props[143 * -69 + -245 + 10112] = E.props[4 * 720 + -9927 * 1 + 29 * 243].replace(zQ, t).replace(A, B));
  }), i.prefix && a.push(fQ), a.push(hQ);
  var Q = function(E, r, s, d) {
    void (-69 * -6 + -70 * 131 + 8756) === r && (r = ""), void (-1 * 1103 + -1109 + 2 * 1106) === s && (s = ""), d === void 0 && (d = "&"), I = d, t = r, A = new RegExp("\\".concat(t, "\\b"), "g");
    var h = E.replace($Q, ""), x = cQ(s || r ? "".concat(s, " ").concat(r, " { ").concat(h, " }") : h);
    i.namespace && (x = vC(x, i.namespace));
    var u = [];
    return Fg(x, lQ(a.concat(uQ(function(w) {
      return u.push(w);
    })))), u;
  };
  return Q.hash = n.length ? n.reduce(function(E, r) {
    return r.name || It(2 * -2923 + 2646 + 3215), le(E, r.name);
  }, kC).toString() : "", Q;
}
var Aa = new JC(), I0 = YC(), Ao = Ne.createContext({ shouldForwardProp: void (2 * 3452 + 1 * -2699 + -4205), styleSheet: Aa, stylis: I0 });
Ao.Consumer;
var ea = Ne.createContext(void (2071 + -538 * -2 + -3147));
function o0() {
  return Le(Ao);
}
function ta(g) {
  var I = cA(g.stylisPlugins), t = I[-1163 * 1 + -4718 * -2 + -8273], A = I[-654 * 1 + -87 * 34 + 3613 * 1], e = o0().styleSheet, o = mA(function() {
    var a = e, Q = {};
    return Q.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(Q)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, e]), i = mA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var Q = {};
    return Q.options = a, Q.plugins = t, YC(Q);
  }, [g.enableVendorPrefixes, g.namespace, t]);
  T(function() {
    gQ(t, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = mA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), n = {};
  n.value = C;
  var B = {};
  return B.value = i, Ne.createElement(Ao.Provider, n, Ne.createElement(ea.Provider, B, g.children));
}
var Ai = function() {
  function g(I, t) {
    var A = this;
    this.inject = function(e, o) {
      void (4996 + 4 * -887 + -4 * 362) === o && (o = I0);
      var i = A.name + o.hash;
      e.hasNameForId(A.id, i) || e.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = t, $0(this, function() {
      throw It(-2 * -847 + -4161 + 2479, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return void (-8321 + -1 * -9697 + -1376) === I && (I = I0), this.name + I.hash;
  }, g;
}(), ga = function(g) {
  return g >= "A" && g <= "Z";
};
function ei(g) {
  for (var I = "", t = 4660 + 299 * 17 + -9743 * 1; t < g.length; t++) {
    var A = g[t];
    if (-232 * -14 + -212 * -4 + 13 * -315 === t && A === "-" && g[9815 + 3 * -1795 + -4430] === "-") return g;
    ga(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var WC = function(g) {
  return g == null || g === !1 || g === "";
}, UC = function(g) {
  var I, t, A = [];
  for (var e in g) {
    var o = g[e];
    g.hasOwnProperty(e) && !WC(o) && (Array.isArray(o) && o.isCss || $e(o) ? A.push("".concat(ei(e), ":"), o, ";") : At(o) ? A.push.apply(A, je(je(["".concat(e, " {")], UC(o), !1), ["}"], !1)) : A.push("".concat(ei(e), ": ").concat((I = e, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -21 * 424 + 2 * 2361 + 4182 === t || I in DQ || I.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return A;
};
function ke(g, I, t, A) {
  if (WC(g)) return [];
  if (z0(g)) return [".".concat(g.styledComponentId)];
  if ($e(g)) {
    if (!$e(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var e = g(I);
    return v.NODE_ENV === "production" || typeof e != "object" || Array.isArray(e) || e instanceof Ai || At(e) || e === null || console.error("".concat(NC(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ke(e, I, t, A);
  }
  var o;
  return g instanceof Ai ? t ? (g.inject(t, A), [g.getName(A)]) : [g] : At(g) ? UC(g) : Array.isArray(g) ? Array.prototype.concat.apply(dI, g.map(function(i) {
    return ke(i, I, t, A);
  })) : [g.toString()];
}
function Ia(g) {
  for (var I = -13582 + 13582 * 1; I < g.length; I += 9014 + 5 * -847 + 4778 * -1) {
    var t = g[I];
    if ($e(t) && !z0(t)) return !1;
  }
  return !0;
}
var oa = bC(cI), ia = function() {
  function g(I, t, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = v.NODE_ENV === "production" && (A === void 0 || A.isStatic) && Ia(I), this.componentId = t, this.baseHash = le(oa, t), this.baseStyle = A, JC.registerId(t);
  }
  return g.prototype.generateAndInjectStyles = function(I, t, A) {
    var e = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, t, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) e = fe(e, this.staticRulesId);
      else {
        var o = zo(ke(this.rules, I, t, A)), i = t0(le(this.baseHash, o) >>> -30 * -281 + 50 * -97 + -3580);
        if (!t.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, C);
        }
        e = fe(e, i), this.staticRulesId = i;
      }
    else {
      for (var n = le(this.baseHash, A.hash), B = "", a = 7877 * 1 + -9691 + 1814; a < this.rules.length; a++) {
        var Q = this.rules[a];
        if (typeof Q == "string") B += Q, v.NODE_ENV !== "production" && (n = le(n, Q));
        else if (Q) {
          var E = zo(ke(Q, I, t, A));
          n = le(n, E + a), B += E;
        }
      }
      if (B) {
        var r = t0(n >>> 0);
        t.hasNameForId(this.componentId, r) || t.insertRules(this.componentId, r, A(B, ".".concat(r), void (285 * 25 + 4916 + -12041), this.componentId)), e = fe(e, r);
      }
    }
    return e;
  }, g;
}(), HC = Ne.createContext(void (2060 * -3 + -2326 * -2 + -764 * -2));
HC.Consumer;
var SI = {}, ti = /* @__PURE__ */ new Set();
function Ca(g, I, t) {
  var A = z0(g), e = g, o = !RI(g), i = I.attrs, C = void (9319 + 2 * 1753 + -12825) === i ? dI : i, n = I.componentId, B = void (-5065 + -828 * -3 + 2581) === n ? function(S, M) {
    var y = typeof S != "string" ? "sc" : Po(S);
    SI[y] = (SI[y] || -6058 + -3 * 883 + 8707) + 1;
    var q = "".concat(y, "-").concat(bQ(cI + y + SI[y]));
    return M ? "".concat(M, "-").concat(q) : q;
  }(I.displayName, I.parentComponentId) : n, a = I.displayName, Q = void (-7694 + -2 * 2251 + 12196) === a ? function(S) {
    return RI(S) ? "styled.".concat(S) : "Styled(".concat(NC(S), ")");
  }(g) : a, E = I.displayName && I.componentId ? "".concat(Po(I.displayName), "-").concat(I.componentId) : I.componentId || B, r = A && e.attrs ? e.attrs.concat(C).filter(Boolean) : C, s = I.shouldForwardProp;
  if (A && e.shouldForwardProp) {
    var d = e.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      s = function(S, M) {
        return d(S, M) && h(S, M);
      };
    } else s = d;
  }
  var x = new ia(t, E, A ? e.componentStyle : void (8 * -554 + -5443 * 1 + -1 * -9875));
  function u(S, M) {
    return function(y, q, L) {
      var j = y.attrs, ge = y.componentStyle, _t = y.defaultProps, Ie = y.foldedComponentIds, re = y.styledComponentId, DI = y.target, Xt = Ne.useContext(HC), $n = o0(), yI = y.shouldForwardProp || $n.shouldForwardProp;
      v.NODE_ENV !== "production" && Ng(re);
      var uo = pQ(q, Xt, _t) || ze, _A = function(zt, Bt, $t) {
        var ve = {};
        ve.className = void 0, ve.theme = $t;
        for (var mI, Ee = pA(pA({}, Bt), ve), GI = 17 * -251 + 1480 + -2787 * -1; GI < zt.length; GI += 1) {
          var Ag = $e(mI = zt[GI]) ? mI(Ee) : mI;
          for (var oe in Ag) Ee[oe] = oe === "className" ? fe(Ee[oe], Ag[oe]) : oe === "style" ? pA(pA({}, Ee[oe]), Ag[oe]) : Ag[oe];
        }
        return Bt.className && (Ee.className = fe(Ee.className, Bt.className)), Ee;
      }(j, q, uo), Ct = _A.as || DI, nt = {};
      for (var bA in _A) void (2851 + 1 * 6239 + -9090) === _A[bA] || bA[3413 * -2 + 116 * -23 + 9494] === "$" || bA === "as" || bA === "theme" && _A.theme === uo || (bA === "forwardedAs" ? nt.as = _A.forwardedAs : yI && !yI(bA, Ct) || (nt[bA] = _A[bA], yI || v.NODE_ENV !== "development" || dB(bA) || ti.has(bA) || !e0.has(Ct) || (ti.add(bA), console.warn('styled-components: it looks like an unknown prop "'.concat(bA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var wI = function(zt, Bt) {
        var $t = o0(), ve = zt.generateAndInjectStyles(Bt, $t.styleSheet, $t.stylis);
        return v.NODE_ENV !== "production" && Ng(ve), ve;
      }(ge, _A);
      v.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(wI);
      var pI = fe(Ie, re);
      return wI && (pI += " " + wI), _A.className && (pI += " " + _A.className), nt[RI(Ct) && !e0.has(Ct) ? "class" : "className"] = pI, nt.ref = L, uA(Ct, nt);
    }(w, S, M);
  }
  u.displayName = Q;
  var w = Ne.forwardRef(u), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, w.attrs = r, w.componentStyle = x, w.displayName = Q, w.shouldForwardProp = s, w.foldedComponentIds = A ? fe(e.foldedComponentIds, e.styledComponentId) : "", w.styledComponentId = E, w.target = A ? e.target : g, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = A ? function(M) {
      for (var y = [], q = 3734 * -1 + 149 * 14 + -97 * -17; q < arguments.length; q++) y[q - (-2 * 2357 + -6598 + 3771 * 3)] = arguments[q];
      for (var L = -2079 + 7 * 297, j = y; L < j.length; L++) g0(M, j[L], !0);
      return M;
    }({}, e.defaultProps, S) : S;
  } }), v.NODE_ENV !== "production" && (wQ(Q, E), w.warnTooManyClasses = /* @__PURE__ */ function(S, M) {
    var y = {}, q = !1;
    return function(L) {
      if (!q && (y[L] = !0, Object.keys(y).length >= -1654 * -4 + 1 * -8377 + -53 * -37)) {
        var j = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(4938 * -1 + 1 * 4058 + 1080, " classes were generated for component ").concat(S).concat(j, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), q = !0, y = {};
      }
    };
  }(Q, E)), $0(w, function() {
    return ".".concat(w.styledComponentId);
  }), o && MC(w, g, R), w;
}
function gi(g, I) {
  for (var t = [g[0]], A = -271 * 10 + 9669 + -6959, e = I.length; A < e; A += 7271 + -5 * 1454) t.push(I[A], g[A + (-8352 + -14 * 393 + -163 * -85)]);
  return t;
}
var Ii = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function na(g) {
  for (var I = [], t = -7810 + 34 * 145 + 2881; t < arguments.length; t++) I[t - (-5 * -1335 + 8821 * -1 + -2147 * -1)] = arguments[t];
  if ($e(g) || At(g)) return Ii(ke(gi(dI, je([g], I, !0))));
  var A = g;
  return 10938 + 1 * -10938 === I.length && 1 * 3175 + -4305 + 1131 === A.length && typeof A[-15 * 166 + 19 * 386 + -7 * 692] == "string" ? ke(A) : Ii(ke(gi(A, I)));
}
function i0(g, I, t) {
  if (void (-7397 * -1 + -7163 + 1 * -234) === t && (t = ze), !I) throw It(1, I);
  var A = function(e) {
    for (var o = [], i = -56 * 1 + -22 * -12 + -207; i < arguments.length; i++) o[i - (2394 * -1 + 206 * 2 + 1983)] = arguments[i];
    return g(I, t, na.apply(void (511 + 5 * 1181 + -6416), je([e], o, !1)));
  };
  return A.attrs = function(e) {
    return i0(g, I, pA(pA({}, t), { attrs: Array.prototype.concat(t.attrs, e).filter(Boolean) }));
  }, A.withConfig = function(e) {
    return i0(g, I, pA(pA({}, t), e));
  }, A;
}
var KC = function(g) {
  return i0(Ca, g);
}, Pt = KC;
e0.forEach(function(g) {
  Pt[g] = KC(g);
});
v.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var og = "__sc-".concat(Fe, "__");
v.NODE_ENV !== "production" && v.NODE_ENV !== "test" && typeof window < "u" && (window[og] || (window[og] = 3273 + -3 * 857 + -702), -4778 + -3 * -1593 === window[og] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[og] += -79 + -10 * -8);
const Ba = Pt.div`
  position: relative;
`, Qa = Pt.video`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(g) => g.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class U extends Error {
  constructor(t, A) {
    super(t);
    p(this, "cause");
    this.name = "AutoCaptureError", this.cause = A;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof U) return t;
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
    return new U(A, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof U) return t;
    const A = "An unexpected error has occurred";
    return new U(A);
  }
}
const fg = {};
fg.CONTINUE_DETECTION = "continue-detection", fg.SWITCH_CAMERA = "switch-camera", fg.TOGGLE_MIRROR = "toggle-mirror";
const MI = fg, C0 = {};
C0.FIRST_FRAME = "first-frame", C0.FIRST_VALID_FRAME = "first-valid-frame";
const Dg = C0, OC = {};
OC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const n0 = OC;
var TC = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))(TC || {}), qA = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(qA || {}), aa = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(aa || {}), Sg = ((g) => (g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(Sg || {}), xa = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(xa || {}), ra = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(ra || {});
const qC = {};
qC.EYE_NOT_PRESENT = "eye_not_present";
const oi = qC, dA = {};
dA.CANDIDATE_SELECTION = "candidate_selection", dA.FACE_TOO_CLOSE = "face_too_close", dA.FACE_TOO_FAR = "face_too_far", dA.FACE_CENTERING = "face_centering", dA.FACE_NOT_PRESENT = "face_not_present", dA.SHARPNESS_TOO_LOW = "sharpness_too_low", dA.BRIGHTNESS_TOO_LOW = "brightness_too_low", dA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", dA.DEVICE_PITCHED = "device_pitched", dA.LEFT_EYE_NOT_PRESENT = "left_" + oi.EYE_NOT_PRESENT, dA.RIGHT_EYE_NOT_PRESENT = "right_" + oi.EYE_NOT_PRESENT, dA.MOUTH_NOT_PRESENT = "mouth_not_present", dA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", dA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const gA = dA, yA = {};
yA.isPresent = gA.FACE_NOT_PRESENT, yA.isNotPitched = gA.DEVICE_PITCHED, yA.isNotSmall = gA.FACE_TOO_FAR, yA.isNotLarge = gA.FACE_TOO_CLOSE, yA.isNotOutOfBounds = gA.FACE_CENTERING, yA.isNotDim = gA.BRIGHTNESS_TOO_LOW, yA.isNotBright = gA.BRIGHTNESS_TOO_HIGH, yA.isSharp = gA.SHARPNESS_TOO_LOW, yA.isLeftEyePresent = gA.LEFT_EYE_NOT_PRESENT, yA.isRightEyePresent = gA.RIGHT_EYE_NOT_PRESENT, yA.isMouthPresent = gA.MOUTH_NOT_PRESENT, yA.isMouthScoreNotTooHigh = gA.MOUTH_SCORE_TOO_HIGH, yA.isMouthScoreNotTooLow = gA.MOUTH_SCORE_TOO_LOW;
const Ea = yA, B0 = {};
B0.FRONT = "user", B0.REAR = "environment";
const eo = B0, Q0 = {};
Q0.AUTO_CAPTURE = "AUTO_CAPTURE", Q0.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Mg = Q0, rt = {};
rt.LOADING = "LOADING", rt.ERROR = "ERROR", rt.WAITING = "WAITING", rt.RUNNING = "RUNNING";
const ZA = rt;
({ ...gA });
var sa = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(sa || {});
({ ...gA });
const a0 = {};
a0.NEUTRAL = "NEUTRAL", a0.SMILE = "SMILE";
const KA = a0, ZC = { ...ZA };
ZC.DONE = "DONE";
const TA = ZC;
({ ...gA });
const hI = Zt(void 0);
hI.displayName = "AppStateContext";
function ot() {
  const g = Le(hI);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const ca = hI.Provider, da = ot;
class PC extends SA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const I = new U("An unknown error has occurred");
    (t = this.context) == null || t.handleError(I);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var I;
    return ((I = this.context) == null ? void 0 : I.appState) === ZA.ERROR ? null : this.props.children;
  }
}
p(PC, "contextType", hI);
const ha = Pt.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, la = Pt.div`
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
function ua() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const fa = CC(
  ({ detectionDetails: g, isImageMirror: I }, t) => ua() ? (console.log(g), /* @__PURE__ */ D(LA, { children: [
    /* @__PURE__ */ D(ha, { ref: t, $isImageMirror: I }),
    /* @__PURE__ */ D(la, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), Lg = Zt(void 0);
Lg.displayName = "AnalyticsContext";
function to() {
  const g = Le(Lg);
  if (g === void 0)
    throw new Error(`${Lg.displayName} must be used within a AnalyticsProvider`);
  return g;
}
function Da(g, I, t, A, e) {
  return aA(I - -375, A);
}
function ii(g, I, t, A, e) {
  return aA(e - 640, A);
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return aA(C - -697, n);
  }
  function A(C, n, B, a, Q) {
    return aA(Q - -563, B);
  }
  function e(C, n, B, a, Q) {
    return aA(B - 198, C);
  }
  function o(C, n, B, a, Q) {
    return aA(Q - 587, n);
  }
  const i = g();
  for (; ; )
    try {
      if (-parseInt(t(-487, "i0[^", -503, -472, -491)) / 1 * (-parseInt(t(-473, "WKpJ", -490, -490, -460)) / 2) + parseInt(A(-322, -345, "n$2Z", -334, -329)) / 3 * (-parseInt(e("vjkZ", 393, 407, 418, 397)) / 4) + parseInt(e("*aVC", 401, 415, 407, 423)) / 5 + parseInt(A(-341, -328, "8%!V", -337, -337)) / 6 + parseInt(o(812, "v45i", 812, 805, 820)) / 7 + -parseInt(o(798, "YXFb", 810, 807, 815)) / 8 + parseInt(t(-494, "v45i", -488, -480, -491)) / 9 * (-parseInt(o(802, "u!X#", 797, 809, 809)) / 10) === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Jg, 866 * -407 + 671296 + 90765);
function ya(g, I, t, A, e) {
  return aA(A - 511, g);
}
function Jg() {
  const g = ["W7pdP8kbWPue", "W4KMW6VcH1e5t17dJh0", "v8k9WR/dISkt", "e8k2WQNcMSkk", "W7JdM8kWWRXcW6KWmMJdMSoLgx4", "dIFdQW", "WPXnWQRcVmoX", "W7FdHX7cRmoz", "WQ0deXFdICo5W63cJSoTw8obW5BdQG", "W6K4imo3bmoQWROMW7NdGbxdNCkG", "cbRcHtFdTSkCW7W", "dHf7WRBcNuxdUb/dIsu", "i8o/W60RW7dcPK18", "fmkjevTJW5jCD1bSWR3dPaW", "iwtcRmorWRWnzhq6", "fwVdLmkRCrddUqBdR3dcRJfK", "csFdT8kJWPa", "W55+bNK", "W7/dUwG8eq", "amouxr8J", "kb5BW4D+xSoHkdtcMGPXWPi", "W6tcTSkrW65CgSopWQiqm8kB", "xNlcOmoNW4fVWOv8dgldPmkpwG", "wt7dVmoqWQa", "juqsWOCLlmkz", "f1LyhYy", "W70Wtg3cHq", "teWkW6VcUq", "WR/dMYpcLvO", "WR8OW7BcLcdcNmo0nmkFW7LLzhS", "W4TZxI1GWR3cV8oC", "imk4oSkfWRpcLmoFyhS", "W60/iSo1aSoOWROOW67dJZBdOmkY", "krTAW4z4wSoJgdZcPc9kWQ0"];
  return Jg = function() {
    return g;
  }, Jg();
}
function aA(g, I) {
  const t = Jg();
  return aA = function(A, e) {
    A = A - (-285 * 13 + -743 * 5 + 7623);
    let o = t[A];
    if (aA.qIEYvM === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      aA.cZXCOf = a, g = arguments, aA.qIEYvM = !0;
    }
    const C = t[0], n = A + C, B = g[n];
    return B ? o = B : (aA.ubQqSz === void 0 && (aA.ubQqSz = !0), o = aA.cZXCOf(o, e), g[n] = o), o;
  }, aA(g, I);
}
const vg = Zt(void (5391 + -19 * -163 + -8488));
vg[ii(868, 864, 870, "gRXF", 855) + x0("Kj%e", 789, 805) + "e"] = ii(867, 870, 882, "uM08", 876) + ya("WKpJ", 732, 734, 717) + x0("5N!Y", 799, 804);
function Ci(g, I, t, A, e) {
  return aA(t - 101, A);
}
function x0(g, I, t, A, e) {
  return aA(t - 574, g);
}
function it() {
  function g(o, i, C, n, B) {
    return Ci(o - 374, i - 444, C - 102, n);
  }
  const I = Le(vg);
  function t(o, i, C, n, B) {
    return x0(B, i - 160, o - -767);
  }
  if (I === void (4973 + -8024 * -1 + -12997)) throw new Error(vg[t(12, 12, 2, 10, "Rq!l") + t(26, 11, 10, 13, "eJ*v") + "e"] + (t(39, 39, 35, 24, "8%!V") + e(-53, "gRXF") + A(-340, -331, "WsXV", -323) + e(-65, "D6)n") + e(-56, "n$2Z") + g(441, 447, 432, "!X*s") + A(-302, -326, "SAU0", -310) + e(-51, "!X*s")));
  function A(o, i, C, n, B) {
    return Da(o - 122, n - -155, C - 454, C);
  }
  function e(o, i, C, n, B) {
    return Ci(o - 96, i - 21, o - -370, i);
  }
  return I;
}
const Re = (g) => g.length < 15 * -571 + 4800 + -538 * -7 ? -9038 * -1 + 9684 + -18722 : g.reduce((t, A) => t + A, 6 * 1207 + 1231 * 5 + 1 * -13397) / g.length, te = (g) => Number.parseFloat(g.toFixed(-8047 + 2 * 4025)), wa = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(3074 * -2 + 6458 * 1 + -155 * 2, -199 + -3 * 1931 + -56 * -107, I.canvas.width, I.canvas.height);
}, jC = -8599 + 1171 * -2 + 10941 + 0.75, pa = -13851 + -7 * -1979, ma = -9659 + -201 * -28 + 4631, Ga = 2633 + -5277 * 1 + 2644, ka = "dot-auto-capture-video", lI = (g, I) => Math.min(g, I), VC = ({ height: g, width: I }, t) => {
  const A = lI(I, g) * t, e = (I - A) / (-66 * -24 + 1 * 3958 + -5540), o = (g - A) / (-241 * 1 + -3246 + 1163 * 3), i = {};
  return i.shiftX = e, i.shiftY = o, i.width = A, i.height = A, i;
}, ba = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = VC(g, I), i = {};
  return i.shiftX = A / g.width, i.shiftY = e / g.height, i.width = o / g.width, i.height = t / g.height, i;
}, Na = ({ height: g, width: I }) => {
  const t = lI(I, g), A = t / (8564 * -1 + 2 * 1029 + 23 * 283) * 4;
  if (I > g) {
    const o = {};
    return o.width = A, o.height = t, o;
  }
  const e = {};
  return e.width = t, e.height = A, e;
}, Fa = (g, I) => {
  const t = lI(I.width, I.height);
  return te(g * t);
}, Ra = ({ height: g, width: I }) => {
  const t = {};
  return t.height = g, t.width = I, VC(t, jC);
}, Sa = (g) => ba(g, jC), Ma = (g, I) => Fa(g, I) * pa, La = "@innovatrics/dot-common-auto-capture", Ja = "7.0.1", va = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Ya = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Wa = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, Ua = {
  name: La,
  private: !0,
  version: Ja,
  scripts: va,
  dependencies: Ya,
  devDependencies: Wa
}, Ha = -3 * -719 + -770 + -1387 * 1 + 0.4, Ka = 0 + 0.16, Oa = 0 + 0.2, Ta = 0 + 0.05, qa = 9426 + 34 * -284 + 230, r0 = {};
r0.min = -1, r0.max = 1;
const ni = r0, Bi = 2437 * -2 + 694 * 14 + -4842, Za = -5941 + 326 * -13 + 10179 + 0.25, Pa = 317 * -22 + -382 + 1839 * 4 + 0.2, ja = 8947 * -1 + 1 * -2161 + 11108 * 1 + 0.85, Va = 3025 + -2748 * -3 + -1 * 11239, _a = 7891 + -1945 * -2 + -11772 + 0.8100000000000005, yg = {};
yg.minDuration = 1e3, yg.maxDuration = 2500, yg.minFrames = 10;
const LI = yg, E0 = {};
E0.max = 100, E0.min = 10;
const Qi = E0, Xa = -6292 + 7012 * 1, za = 2056 + -3803 * 1 + -1947 * -1, $a = 2975 + 872 * -8 + 4005, _C = "AES-CBC", XC = "RSA-OAEP", Ax = "SHA-256", ex = "image/jpeg", tx = 6423 + -1839 * -1 + -8254, gx = -14 * -535 + 7757 + -15207, zC = "/dot-assets", ai = "dot_embedded_bg.wasm", $C = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), xi = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, Ix = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, s0 = (g) => new Promise((I) => {
  setTimeout(I, g);
}), An = (g) => JSON.parse(JSON.stringify(g, (I, t) => typeof t == "number" ? te(t) : t)), en = () => Ua.version, tn = (g) => new URL(g).hostname.replace("www.", ""), ox = () => tn(window.location.href) === "localhost", ig = (g) => Object.entries(g).map(([I, t]) => encodeURIComponent(I) + "=" + encodeURIComponent(t)).join("&"), ix = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g;
function Cx(g, I) {
  let t;
  return (...A) => {
    const e = () => {
      clearTimeout(t), t = void 0, g(...A);
    };
    t === void (7652 + -6973 * 1 + -679) && (t = setTimeout(e, I));
  };
}
function nx(g) {
  return g.at(-(-8375 + 23 * 337 + 625)) === "/" ? g.slice(-6420 + 1 * -2797 + -1 * -9217, -(1 * -5243 + 3067 + -311 * -7)) : g;
}
function gn(g) {
  return "" + nx(g ?? "") + zC;
}
const Bx = () => "prod".toLowerCase() === "dev";
class pt extends Array {
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
    this.length === this.size && this.splice(-22 * -184 + -6431 + 2383 * 1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-86 * 31 + -4803 * -1 + -2137);
  }
}
const Qx = (g, I, t = ex) => new Promise((A) => {
  g.toBlob((e) => {
    if (!e) throw new Error("Canvas to Blob failed");
    A(e);
  }, t, I);
}), ax = async (g) => Qx(g, 4603 + -4513 * 1), xx = (g, I) => {
  const t = document.createElement("canvas");
  t.width = I.width, t.height = I.height;
  const A = t.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, 0, -2 * 977 + 2589 * 1 + -635, t.width, t.height), t;
}, rx = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: t } = I.getImageData(1 * -4694 + -31 * 228 + -5881 * -2, 471 * -2 + -106 * -85 + 2 * -4034, g.width, g.height);
  return t;
}, In = (g, I, t, A) => {
  const e = g.getContext("2d");
  e && (e.beginPath(), A ? (e.fillStyle = t, e.fillRect(I.topLeft.x, I.topLeft.y, I.width, I.height)) : (e.strokeStyle = t, e.rect(I.topLeft.x, I.topLeft.y, I.width, I.height)), e.stroke());
}, JI = (g, I, t) => {
  const { height: A, shiftX: e, shiftY: o, width: i } = I, C = {};
  C.x = e, C.y = o;
  const n = {};
  n.topLeft = C, n.width = i, n.height = A, n.color = t, In(g, n, t);
}, ut = (g, I, t, A = 1 * 4985 + -4968 + -1 * 17) => {
  const e = g.getContext("2d");
  e && (e.fillStyle = t, e.fillRect(I.x + A, I.y + A, -1191 + -599 * -2, 133 * 47 + -5975 + -269 * 1), e.beginPath());
}, Ex = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < e || g.y > e + t);
}, sx = (g, I) => Object.values(g).every((t) => Ex(t, I));
function Yg(g) {
  const { height: I, width: t } = Na(g), A = (g.width - t) / 2, e = (g.height - I) / (-241 * -37 + 1939 + -10854), o = {};
  return o.shiftX = A, o.shiftY = e, o.width = t, o.height = I, o;
}
function on(g, I, t) {
  const { height: A, width: e } = t, o = lI(g.width, g.height), i = e - o * I * 2, C = A - o * I * (5414 * 1 + -2935 + -2477 * 1), n = (g.width - i) / (1047 + -1031 * -5 + -6200), B = (g.height - C) / (-425 * 10 + -16 * 235 + -1 * -8012), a = {};
  return a.shiftX = n, a.shiftY = B, a.width = i, a.height = C, a;
}
function We(g, I) {
  const { shiftX: t, shiftY: A } = I, e = {};
  return e.x = g.x + t, e.y = g.y + A, e;
}
function oA(g, I) {
  const t = Wg();
  return oA = function(A, e) {
    A = A - (3 * -116 + 1 * 1069 + -579);
    let o = t[A];
    if (oA.zDtSfL === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      oA.ZcscMT = a, g = arguments, oA.zDtSfL = !0;
    }
    const C = t[9265 + -4 * 1255 + -4245], n = A + C, B = g[n];
    return B ? o = B : (oA.tcimSZ === void 0 && (oA.tcimSZ = !0), o = oA.ZcscMT(o, e), g[n] = o), o;
  }, oA(g, I);
}
function Wg() {
  const g = ["W6NdUX/dSg7cQbpdSmkhufFcOq", "k2ddOSkmo8keWQbx", "WQeWW7n4W6P+pb8", "vmkBhHhdVY5VumoZWPhdRW", "p0tcSCoYfmoDW4FcHeJcRq", "amklW6vvWQe", "yw5up8oRrZRcVSkEd8kAW5a", "s8ogWR0gWO14W6FdM8olWRu", "WP5JW4DhWRiFiYnzkWa", "yZy6EfpcRt5vCSo9WQm", "W5JcT3K0WOK", "nKNcTCo0nCoiW67cV1pcVW", "y8o+vN3dRGlcN3dcSwGRW7u", "W4BcVSkMzCkbEsPPW4nR", "ofv4W4ddLG", "WOtdRMuBW4lcUG0QW7TuWPBdTq", "W6NdUr7dVgddUdRdOmkQDwG", "W57dKx8HtW", "W6fVWO4fW5LoW57cT0TPsG", "ySoEWQLuWRVcVs3dIvxdNvm", "zwjuqSkwdtRcJmkC", "W6VdUHJdSapdKGtdOmkhvW", "wmoHWQjJ", "W45AWQ4AWP8", "W4y0WPxdGsWAqSoOD2S", "bSkFWOepCG", "lhOgW4lcP8kRtfxdVCoJ", "WQG6WOumW5vjiYybtW", "sxxcGSovW5ZcMKSPWPi"];
  return Wg = function() {
    return g;
  }, Wg();
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return oA(Q - 593, n);
  }
  function A(n, B, a, Q, E) {
    return oA(E - 207, n);
  }
  const e = g();
  function o(n, B, a, Q, E) {
    return oA(Q - 82, a);
  }
  function i(n, B, a, Q, E) {
    return oA(n - -134, E);
  }
  function C(n, B, a, Q, E) {
    return oA(E - 512, Q);
  }
  for (; ; )
    try {
      if (-parseInt(o(256, 263, "LefK", 248, 259)) / 1 + parseInt(o(230, 236, "!jC@", 245, 256)) / 2 + parseInt(o(249, 237, "TEpu", 247, 240)) / 3 * (parseInt(A("K9y)", 363, 356, 361, 366)) / 4) + -parseInt(C(669, 662, 677, "Q$Jf", 669)) / 5 + parseInt(t("P$wv", 731, 726, 739, 740)) / 6 * (-parseInt(C(663, 670, 646, "!jC@", 660)) / 7) + parseInt(i(36, 39, 45, 30, "0$RB")) / 8 * (-parseInt(C(675, 664, 654, "P*0j", 664)) / 9) + -parseInt(o(254, 244, "yT]a", 250, 253)) / 10 * (-parseInt(C(660, 655, 653, "hBrU", 666)) / 11) === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Wg, 203828 + 11987 * -25 + 250946);
function cx({ assetsDirectoryPath: g, bramble: I }) {
  const [t, A] = cA();
  function e(B, a, Q, E, r) {
    return oA(r - -883, B);
  }
  const o = t !== void (1 * 3319 + -1936 + 1 * -1383);
  function i(B, a, Q, E, r) {
    return oA(r - 763, a);
  }
  T(() => {
    async function B() {
      function a(E, r, s, d, h) {
        return oA(s - 128, r);
      }
      function Q(E, r, s, d, h) {
        return oA(d - 171, h);
      }
      await I[a(270, "@z)%", 278)](gn(g)), A(I[Q(317, 315, 312, 313, "JVbk") + Q(309, 327, 326, 322, "YuYM") + a(268, "w4Wc", 281) + "t"]());
    }
    B();
  }, [I, g, A]);
  const C = {};
  C[n("Pw&6", -721) + e("(VIA", -725, -743, -724, -738)] = t;
  function n(B, a, Q, E, r) {
    return oA(a - -888, B);
  }
  return C[i(938, "iryF", 924, 925, 925) + "sh"] = o, C;
}
var Cn = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(Cn || {});
const c0 = {};
c0.SIMD = "simd", c0.NO_SIMD = "no-simd";
const ri = c0, d0 = {};
d0.Lower = "Lower", d0.Higher = "Higher";
const h0 = d0, wg = {};
wg.VISIBLE = "VISIBLE", wg.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", wg.HIDDEN = "HIDDEN";
const Ug = wg;
(function(g, I) {
  function t(B, a, Q, E, r) {
    return hA(E - 814, B);
  }
  function A(B, a, Q, E, r) {
    return hA(r - -989, Q);
  }
  function e(B, a, Q, E, r) {
    return hA(a - -346, Q);
  }
  var o = g();
  function i(B, a, Q, E, r) {
    return hA(a - -549, Q);
  }
  function C(B, a, Q, E, r) {
    return hA(B - -396, E);
  }
  for (; ; )
    try {
      var n = parseInt(A(-819, -834, "&DLF", -823, -827)) / 1 * (-parseInt(A(-818, -821, "v8Xv", -815, -821)) / 2) + -parseInt(A(-810, -823, "ErDC", -824, -812)) / 3 + parseInt(A(-793, -814, "*Ra5", -818, -806)) / 4 * (parseInt(t("7kI7", 987, 999, 994, 993)) / 5) + parseInt(e(-186, -176, "cdbs", -179, -179)) / 6 + -parseInt(t("EmBY", 988, 982, 983, 993)) / 7 * (-parseInt(i(-357, -367, "3BeF", -370, -367)) / 8) + parseInt(A(-822, -802, "*Ra5", -804, -811)) / 9 + -parseInt(C(-215, -225, -227, "[ROW", -219)) / 10 * (parseInt(i(-395, -388, "hT61", -384, -380)) / 11);
      if (n === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Hg, 830136);
function hA(g, I) {
  var t = Hg();
  return hA = function(A, e) {
    A = A - (1712 + 5 * -434 + 618);
    var o = t[A];
    if (hA.rkAYLA === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      hA.jxNyQL = C, g = arguments, hA.rkAYLA = !0;
    }
    var n = t[0], B = A + n, a = g[B];
    return a ? o = a : (hA.OiqtQY === void 0 && (hA.OiqtQY = !0), o = hA.jxNyQL(o, e), g[B] = o), o;
  }, hA(g, I);
}
function Hg() {
  var g = ["jCkOhZyWW41PW4qUW789WP0", "W7xcJefGW4BcTSk3WPVdOMHTgxW", "W7xcGcOWWPpdNSoSWQi", "WOrsWQhcPcdcLmkucCkzW4pdKeXq", "W75Bu8ovzW3dSaddQ0hcMCoZW5S", "W4juW6FcO2/cSMZdNmk9WOe", "W7ddTqSrWR/dI8oJ", "WPRcMmoVW4VcGa", "W5JcL3hdHvLRgG", "xbFcM8kBdeNcN1K", "ySouExBcPtlcMSoqmmoaWQddNG", "wr/dICoJzsJdRLqlW71tkSk6", "B8ktg8o0ECooWR3cV8kAWQW9W5z0", "WOhdH8kLvY8", "W50hWO5GWRnuivO9Fb88", "W7JcN8o3dxGwCCkqWQ3cOhK", "W7/dTmoaWQzbFmk9Ba", "W645WOtcPSkBp8oWzmoLWRvJ", "W590W4BcN0XXW5hcJvvqW54E", "WPnNW4BdSCoB", "WOpcOSkYC8kgy8ohj8kUgtG+", "W7Xyu8orpf3cRa/dTfa", "WOnXnXJdQMeWW6uMW4hdQGb+", "W5dcNsmuW5FcGJBdPCoyWPtdNCkt", "ySovlGRdI1VcS8oJ"];
  return Hg = function() {
    return g;
  }, Hg();
}
function dx({ crosshatch: g }) {
  function I(A, e, o, i, C) {
    return hA(e - -904, i);
  }
  function t(A, e, o, i, C) {
    return hA(A - 352, e);
  }
  return g != null && g[t(536, "JPpI") + "id"] ? h0[I(-742, -739, -731, "L5^$") + "r"] : h0[I(-745, -733, -731, "EmBY")];
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return xA(Q - 904, a);
  }
  function A(n, B, a, Q, E) {
    return xA(a - -441, n);
  }
  const e = g();
  function o(n, B, a, Q, E) {
    return xA(B - -396, Q);
  }
  function i(n, B, a, Q, E) {
    return xA(a - 890, Q);
  }
  function C(n, B, a, Q, E) {
    return xA(E - -85, a);
  }
  for (; ; )
    try {
      if (parseInt(A("#TR4", -11, -25, -38, -27)) / 1 * (parseInt(A("3O4w", -51, -50, -59, -63)) / 2) + -parseInt(o(15, -1, -11, "oG0$", -8)) / 3 + parseInt(A("Vi]L", -49, -36, -42, -46)) / 4 * (parseInt(i(1313, 1309, 1311, "WdUp", 1321)) / 5) + -parseInt(C(340, 323, "OU5a", 333, 330)) / 6 * (parseInt(t(1320, 1318, "nWMJ", 1311, 1303)) / 7) + parseInt(i(1325, 1317, 1312, "@Xvj", 1315)) / 8 + parseInt(i(1301, 1298, 1302, "0HL8", 1301)) / 9 + -parseInt(t(1313, 1312, "$KC4", 1322, 1319)) / 10 === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kg, 649778);
function xA(g, I) {
  const t = Kg();
  return xA = function(A, e) {
    A = A - (-17276 + -1359 * -13);
    let o = t[A];
    if (xA.SDsnof === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      xA.CwioDc = a, g = arguments, xA.SDsnof = !0;
    }
    const C = t[-6935 + -365 * -19], n = A + C, B = g[n];
    return B ? o = B : (xA.CuLLOV === void 0 && (xA.CuLLOV = !0), o = xA.CwioDc(o, e), g[n] = o), o;
  }, xA(g, I);
}
function hx({ assetsDirectoryPath: g, children: I, bramble: t }) {
  const A = {};
  A[e(658, 653, "$BOx") + "le"] = t;
  function e(r, s, d, h, x) {
    return xA(r - 247, d);
  }
  A[a(280, 268, "H^mf") + e(667, 657, "#TR4") + Q("YJew", 836) + e(650, 637, "EawK")] = g;
  const { sunfish: o, crosshatch: i } = cx(A), C = {};
  C[E(910, 927, 900, "H^mf", 912) + E(891, 893, 906, "E*]y", 903)] = i;
  const n = mA(() => ({ redfin: dx(C), sunfish: o, crosshatch: i, bramble: t }), [o, i, t]), B = {};
  function a(r, s, d, h, x) {
    return xA(s - -132, d);
  }
  B[a(247, 261, "CX*i")] = n, B[E(879, 887, 878, "$UiS", 892) + Q("@Xvj", 825)] = I;
  function Q(r, s, d, h, x) {
    return xA(s - 428, r);
  }
  function E(r, s, d, h, x) {
    return xA(x - 493, h);
  }
  return D(vg[e(639, 654, "0HL8") + a(280, 272, "$BOx")], B);
}
function Kg() {
  const g = ["W7FdNMNcHSoGvhG", "W7uTW6CRW5ldICkmW40DWQBdM8oraW", "WP7dNvzxWQ7cLmkiqG", "W43cUtqAna", "zhXxW40B", "b8o2WQzBWP5dW73dMI7cKbNcIq", "dmoWWQfzWPHgWQFdIc/cGIlcKeS", "W43dHCodWPjYW6RdUa", "WR55WRS", "gSo7dZdcS8khW4qKW5NdTmok", "dYpcG8kssW", "xYZcV8k0dG", "emo4cdNcUCoxWOiSW6ZdS8oqn8oJ", "rYzmdSkgWQych8ofWR7cGmoM", "WQ/dNvj7", "W6KqWRe", "vSo7WOSDEdtcU8o8nCoGf8k4", "sbqwsKpcU0VcPq", "zCoKWRZdHNaXWRz0EmoKWQBcO8kv", "ewCArCon", "sH9WprpdVMxcRCkCW49ZWO0", "WRBdHG4iWOi", "W68hWQlcGu4", "WQRdUgPAzcpdISkLj0NcU8oh", "W7bRpJzvWP4+g8oJemoYW5NcHG", "W43cIHuLW7fKWQldUca1kr59", "W4uABCo8WRTvxIe", "bCkhW7G4p1VcKmouqSoHmG", "iY90W5mxzCkCWQ4", "W53dVmkonIxdMSklW6rTpwxdSG", "xs3cO8kIcq", "rCoXWQr6Aq"];
  return Kg = function() {
    return g;
  }, Kg();
}
(function(g, I) {
  var t = g();
  function A(n, B, a, Q, E) {
    return FA(a - -136, Q);
  }
  function e(n, B, a, Q, E) {
    return FA(B - -827, n);
  }
  function o(n, B, a, Q, E) {
    return FA(E - 422, n);
  }
  function i(n, B, a, Q, E) {
    return FA(E - -149, n);
  }
  for (; ; )
    try {
      var C = parseInt(A(70, 59, 62, "dMsu", 63)) / 1 + parseInt(A(54, 46, 56, "I)H1", 51)) / 2 + parseInt(e("RQtF", -625, -616, -635, -623)) / 3 + parseInt(i("%#gu", 50, 70, 66, 60)) / 4 * (parseInt(o("pS#(", 615, 605, 616, 615)) / 5) + parseInt(o("^ZRh", 629, 629, 630, 621)) / 6 + parseInt(e("(tAF", -621, -622, -615, -624)) / 7 * (-parseInt(i("(tAF", 55, 40, 44, 45)) / 8) + parseInt(A(54, 57, 64, "kFkv", 60)) / 9 * (-parseInt(A(53, 49, 55, "AbD8", 62)) / 10);
      if (C === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Og, -42057 + -1 * -674554);
function Og() {
  var g = ["lmofE2eyW6xcRmk+W70+rNW", "W65eusJdVfVcImoK", "WRaVW5lcQmoiW6zuWQ8bcmk6WOldRG", "W643wI7cLCoHB2JcJq", "CMi+W5pdIJpdH8kuW7dcIqVdJq", "WP4ZjbhdJ8oVWP9cW7FcISkOW6P2", "W4S/W5BdTxaZf07cNqpdQ2pdHq", "C8odsHVdGftcRCkIzG", "W6nRomocqXdcLYezcaTP", "W5KfhCkEWOaYWP3cOCkGWPhcTXTK", "deCkW7DgwSolWQVcVfddPbWO", "W6tdSSk3W7FdTmk0W61aWOFcUmkn", "WOztWRTdfXXXW7u5yXJdN8oC", "WRaPW5hcRSojW68iWPaQcCkeWPW", "m8kcCttcOCoAfrO0W5bmW45C", "x3OLsNbIW55ara", "Cge8WOZcGg7dJSkxW7m", "WO3dV8omy1hcHmo6WOy", "W50cfSkDWOC6WPVcM8k7WQhcIsHd", "jfZdRJa4tJxcU2nAWQW"];
  return Og = function() {
    return g;
  }, Og();
}
function FA(g, I) {
  var t = Og();
  return FA = function(A, e) {
    A = A - (4 * 673 + -9223 + 6721);
    var o = t[A];
    if (FA.nJXAeS === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      FA.lPveQn = C, g = arguments, FA.nJXAeS = !0;
    }
    var n = t[0], B = A + n, a = g[B];
    return a ? o = a : (FA.hQedKy === void 0 && (FA.hQedKy = !0), o = FA.lPveQn(o, e), g[B] = o), o;
  }, FA(g, I);
}
function lx({ analytics: g, crosshatch: I }) {
  return I !== void (-9075 + -16 * -444 + 3 * 657) && !I.isAnalyticsDisabled ? g : void (6417 + 2139 * -3);
}
function ux({ analytics: g, appKey: I, redfin: t, crosshatch: A, bramble: e }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = lx(o);
  return T(() => {
    i && i.init(I);
  }, [i, I]), T(() => {
    A && (console.info("Analytics is " + (A.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, e.getCustomerName()));
  }, [i, e, A, t]), T(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function fx({
  analytics: g,
  appKey: I,
  children: t
}) {
  const { redfin: A, crosshatch: e, bramble: o } = it(), i = ux({ analytics: g, redfin: A, appKey: I, crosshatch: e, bramble: o }), C = mA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ D(Lg.Provider, { value: C, children: t });
}
let F;
const $A = new Array(128).fill(void 0);
$A.push(void 0, null, !0, !1);
function l0(g) {
  return $A[g];
}
let PA = -5330 + -5330 * -1, Et = null;
function pg() {
  return (Et === null || Et.byteLength === 6161 + 1297 * 4 + -11349) && (Et = new Uint8Array(F.memory.buffer)), Et;
}
const mg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Dx = typeof mg.encodeInto == "function" ? function(g, I) {
  return mg.encodeInto(g, I);
} : function(g, I) {
  const t = mg.encode(g);
  I.set(t);
  const A = {};
  return A.read = g.length, A.written = t.length, A;
};
function mt(g, I, t) {
  if (t === void 0) {
    const C = mg.encode(g), n = I(C.length, 3552 * -1 + 487 * 5 + 1118) >>> -2605 + 5 * 521;
    return pg().subarray(n, n + C.length).set(C), PA = C.length, n;
  }
  let A = g.length, e = I(A, 4717 + -524 * 9) >>> -6908 + -4737 * -1 + -167 * -13;
  const o = pg();
  let i = -1 * -7522 + -830 + -6692;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > 8497 + 1 * 2043 + -10413) break;
    o[e + i] = C;
  }
  if (i !== A) {
    i !== 1 * 8031 + -9623 + 1592 && (g = g.slice(i)), e = t(e, A, A = i + g.length * (4 * 205 + -5680 + 4863 * 1), 1621 * 2 + -3008 + -233 * 1) >>> -3731 + -113 * -73 + -4518;
    const C = pg().subarray(e + i, e + A), n = Dx(g, C);
    i += n.written, e = t(e, A, i, 2 * -3787 + -8188 + 15763) >>> 9707 * 1 + -8664 + -7 * 149;
  }
  return PA = i, e;
}
function nn(g) {
  return g == null;
}
let st = null;
function HA() {
  return (st === null || st.byteLength === -13075 + -13075 * -1) && (st = new Int32Array(F.memory.buffer)), st;
}
let ft = $A.length;
function yx(g) {
  g < 17841 + 17709 * -1 || ($A[g] = ft, ft = g);
}
function Bn(g) {
  const I = l0(g);
  return yx(g), I;
}
const u0 = {};
u0.ignoreBOM = !0, u0.fatal = !0;
const Qn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", u0) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Qn.decode();
function Tg(g, I) {
  return g = g >>> 0, Qn.decode(pg().subarray(g, g + I));
}
function f0(g) {
  ft === $A.length && $A.push($A.length + 1);
  const I = ft;
  return ft = $A[I], $A[I] = g, I;
}
let ct = null;
function an() {
  return (ct === null || ct.byteLength === -6627 + -3 * -1447 + 2286) && (ct = new Uint32Array(F.memory.buffer)), ct;
}
function Ei(g, I) {
  const t = I(g.length * 4, 4) >>> 0, A = an();
  for (let e = 3 * -1483 + 2757 + -1 * -1692; e < g.length; e++)
    A[t / (2838 + 218 * -13) + e] = f0(g[e]);
  return PA = g.length, t;
}
function si(g, I) {
  g = g >>> 8689 + 1 * -8689;
  const t = an(), A = t.subarray(g / (8069 + -1 * 9065 + -40 * -25), g / (-824 + -218 * -19 + -3314) + I), e = [];
  for (let o = -4924 + 4 * -2017 + 12992; o < A.length; o++)
    e.push(Bn(A[o]));
  return e;
}
function wx(g, I) {
  const t = mt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), A = PA, e = mt(I, F.__wbindgen_malloc, F.__wbindgen_realloc), o = PA, i = F.is_mobile_supported(t, A, e, o);
  return go.__wrap(i);
}
const D0 = {};
D0.register = () => {
}, D0.unregister = () => {
};
const ci = typeof FinalizationRegistry > "u" ? D0 : new FinalizationRegistry((g) => F.__wbg_licensevalidationresult_free(g >>> 973 * 9 + -9174 + 417 * 1));
class go {
  static __wrap(I) {
    I = I >>> 3198 + -2 * -1423 + -1 * 6044;
    const t = Object.create(go.prototype);
    return t.__wbg_ptr = I, ci.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = -6524 * -1 + -2818 * 1 + -3706, ci.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, t, A, e, o) {
    var i = nn(t) ? 0 : mt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), C = PA;
    const n = Ei(A, F.__wbindgen_malloc), B = PA, a = Ei(e, F.__wbindgen_malloc), Q = PA, E = mt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), r = PA, s = F.licensevalidationresult_new(I, i, C, n, B, a, Q, E, r);
    return this.__wbg_ptr = s >>> -989 + -347 * 4 + 2377, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== -2095 + 7559 * 1 + -5464;
  }
  get features_json() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = HA()[A / (-8559 + -1 * -8563) + 0], t = HA()[A / 4 + (7079 * -1 + 3716 * -1 + -2699 * -4)];
      let e;
      return I !== 868 + 62 * -14 && (e = Tg(I, t).slice(), F.__wbindgen_free(I, t * (8336 + 11 * 283 + -11448), 1)), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-3418 + 17 * 202);
    }
  }
  get errors() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(e, this.__wbg_ptr);
      var I = HA()[e / (-607 * -3 + 5881 + -7698) + 0], t = HA()[e / (-5153 * 1 + 4173 + -164 * -6) + (270 * 25 + -1762 + -4987 * 1)], A = si(I, t).slice();
      return F.__wbindgen_free(I, t * (31 * -108 + -521 + -1 * -3873), -3045 + 1 * -6507 + -4 * -2389), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-9741 + -6673 * 1 + 265 * 62);
    }
  }
  get warnings() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(e, this.__wbg_ptr);
      var I = HA()[e / (-1 * 6421 + -850 + 7275 * 1) + (-9712 + -8 * -1214)], t = HA()[e / (-7921 + 1585 * 5) + (1 * 3754 + 1 * 2076 + -1943 * 3)], A = si(I, t).slice();
      return F.__wbindgen_free(I, t * (-3535 + 3961 * 1 + 211 * -2), -4053 + 4057 * 1), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(6193 * -1 + 1371 + 4838 * 1);
    }
  }
  get customer() {
    let I, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = HA()[o / (-1847 * -5 + -1 * 9498 + 267) + (8068 * -1 + -3 * 2705 + 16183)], e = HA()[o / (-1 * 7739 + 2395 + 5348) + (-2 * 53 + 6846 + -6739)];
      return I = A, t = e, Tg(A, e);
    } finally {
      F.__wbindgen_add_to_stack_pointer(-1733 * -5 + -5041 + -3608), F.__wbindgen_free(I, t, 4 * -1698 + -573 * -14 + -1229 * 1);
    }
  }
}
async function px(g, I) {
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
function mx() {
  const g = {};
  return g.wbg = {}, g.wbg.__wbindgen_string_get = function(I, t) {
    const A = l0(t), e = typeof A == "string" ? A : void 0;
    var o = nn(e) ? 8261 + 2537 * -3 + 50 * -13 : mt(e, F.__wbindgen_malloc, F.__wbindgen_realloc), i = PA;
    HA()[I / (9219 + 5 * 955 + -13990) + (409 * 21 + -1 * 1913 + 267 * -25)] = i, HA()[I / (-6825 + -1 * -6829) + 0] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    Bn(I);
  }, g.wbg.__wbindgen_string_new = function(I, t) {
    const A = Tg(I, t);
    return f0(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return f0(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return l0(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, t) {
    throw new Error(Tg(I, t));
  }, g;
}
function Gx(g, I) {
  return F = g.exports, xn.__wbindgen_wasm_module = I, st = null, ct = null, Et = null, F;
}
async function xn(g) {
  if (F !== void 0) return F;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIgA0UNAiADQQFrIQMgAkGYA2ohAgwACwALQYCXwgBBK0GYksIAEN4BAAsgAUIANwIIIAEgAjYCBCABQQE2AgBBAAsiBSACLwGSA0kEQCACIQMMAQsDQCACKAKIAiIDBEAgAi8BkAMhBSACECIgBEEBaiEEIAMiAi8BkgMgBU0NAQwCCwsgAhAiQYCXwgBBK0H4kcIAEN4BAAsgBUEBaiEGAkAgBEUEQCADIQIMAQsgAyAGQQJ0akGYA2ooAgAhAkEAIQYgBEEBayIHRQ0AA0AgAigCmAMhAiAHQQFrIgcNAAsLIAEgBjYCDCABQQA2AgggASACNgIEIAAgBTYCCCAAIAQ2AgQgACADNgIAC7MEAQl/IwBBEGsiCCQAIAEgASgCCCIGQQFqIgc2AggCQAJAIAEoAgQiBSAHSwRAIAcgBWshCiABKAIAIQlBACEGAkACfwNAIAcgCWotAAAiC0EwayIMQf8BcSINQQpPBEAgBgRAIAQgBmoiBCALQSByQeUARw0DGiAAIAEgAiADIAQQNwwGCyAIIAkgBSAFIAdBAWoiASABIAVLGxC2AUG4scIALQAAGiAIKAIEIQIgCCgCACEEQRQQCiIBRQ0GIAEgBDYCDCABQQ02AgAgACABNgIEIABBATYCACABIAI2AhAMBQsgDUEFSyADQpmz5syZs+bMGVJyIANCmLPmzJmz5swZVnENAiABIAdBAWoiBzYCCCAGQQFrIQYgA0IKfiAMrUL/AYN8IQMgBSAHRw0ACyAEIApqCyEEIAAgASACIAMgBBBTDAILIAQgBmohBQJAAkACQCABKAIIIgQgASgCBCIHTw0AIAEoAgAhBgNAIAQgBmotAAAiCUEwa0H/AXFBCU0EQCABIARBAWoiBDYCCCAEIAdHDQEMAgsLIAlBIHJB5QBGDQELIAAgASACIAMgBRBTDAELIAAgASACIAMgBRA3CwwBCyAIQQhqIAEoAgAgBSAFIAZBAmoiASABIAVLGxC2AUG4scIALQAAGiAIKAIMIQIgCCgCCCEEQRQQCiIBRQ0BIAEgBDYCDCABQQU2AgAgACABNgIEIABBATYCACABIAI2AhALIAhBEGokAA8LAAu5AwEFfwJAIABCgICAgBBUBEAgASECDAELIAFBCGsiAiAAIABCgMLXL4AiAEKAvqjQD358pyIDQZDOAG4iBEGQzgBwIgVB5ABuIgZBAXRB+onCAGovAAA7AAAgAUEEayADIARBkM4AbGsiA0H//wNxQeQAbiIEQQF0QfqJwgBqLwAAOwAAIAFBBmsgBSAGQeQAbGtB//8DcUEBdEH6icIAai8AADsAACABQQJrIAMgBEHkAGxrQf//A3FBAXRB+onCAGovAAA7AAALAkAgAKciAUGQzgBJBEAgASEDDAELIAJBBGshAgNAIAIgAUGQzgBuIgNB8LF/bCABaiIEQeQAbiIFQQF0QfqJwgBqLwAAOwAAIAJBAmogBCAFQeQAbGtBAXRB+onCAGovAAA7AAAgAkEEayECIAFB/8HXL0sgAyEBDQALIAJBBGohAgsCQCADQeMATQRAIAMhAQwBCyACQQJrIgIgAyADQf//A3FB5ABuIgFB5ABsa0H//wNxQQF0QfqJwgBqLwAAOwAACyABQQlNBEAgAkEBayABQTBqOgAADwsgAkECayABQQF0QfqJwgBqLwAAOwAAC+ADAQF/IwBBMGsiAiQAAn8CQAJAAkACQAJAAkACQAJAAkACQCAAKAIAIgAtAABBAWsOCQECAwQFBgcICQALIAIgAEEBajYCDCACQRxqQgE3AgAgAkEBNgIUIAJB7IDBADYCECACQRk2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwwJCyABKAIUQfSAwQBBHCABQRhqKAIAKAIMEQAADAgLIAEoAhRBkIHBAEEeIAFBGGooAgAoAgwRAAAMBwsgASgCFEGugcEAQSEgAUEYaigCACgCDBEAAAwGCyABKAIUQc+BwQBBFiABQRhqKAIAKAIMEQAADAULIAEoAhRB5YHBAEESIAFBGGooAgAoAgwRAAAMBAsgASgCFEH3gcEAQS0gAUEYaigCACgCDBEAAAwDCyABKAIUQaSCwQBBJyABQRhqKAIAKAIMEQAADAILIAEoAhRBy4LBAEEoIAFBGGooAgAoAgwRAAAMAQsgAiAAQQRqNgIMIAJBHGpCATcCACACQQI2AhQgAkGcg8EANgIQIAJBGjYCLCABQRhqKAIAIQAgAiACQShqNgIYIAIgAkEMajYCKCABKAIUIAAgAkEQahAvCyACQTBqJAAL5wIBBX8CQEHN/3tBECAAIABBEE0bIgBrIAFNDQAgAEEQIAFBC2pBeHEgAUELSRsiBGpBDGoQCiICRQ0AIAJBCGshAQJAIABBAWsiAyACcUUEQCABIQAMAQsgAkEEayIFKAIAIgZBeHEgAiADakEAIABrcUEIayICIABBACACIAFrQRBNG2oiACABayICayEDIAZBA3EEQCAAIAAoAgRBAXEgA3JBAnI2AgQgACADaiIDIAMoAgRBAXI2AgQgBSAFKAIAQQFxIAJyQQJyNgIAIAEgAmoiAyADKAIEQQFyNgIEIAEgAhAyDAELIAEoAgAhASAAIAM2AgQgACABIAJqNgIACwJAIAAoAgQiAUEDcUUNACABQXhxIgIgBEEQak0NACAAIAFBAXEgBHJBAnI2AgQgACAEaiIBIAIgBGsiBEEDcjYCBCAAIAJqIgIgAigCBEEBcjYCBCABIAQQMgsgAEEIaiEDCyADC68DAQd/IwBBEGsiByQAQQQhBAJAAkACfyABKAIoIgNBBE0EQCABQQhqIQYgAwwBCyABKAIIIQYgAyEEIAEoAgQLIgggAk0EQAJAAkACQAJAIAJBBU8EQEGBgICAeCEFIAIgBEYNB0EAIQUgAkH/////AUsgAkEDdCIJQfj///8HS3INByADQQVJDQIgBEEDdCEDIARB/////wFNDQEMBgtBgYCAgHghBSADQQRNDQYgAUEANgIAIAFBCGogBiAIQQN0EL4CGiABIAg2AiggBEEDdCIBQfn///8HSSAEQf////8BTXENAyAHIAE2AgwgB0EANgIIQbzvwABBKyAHQQhqQejvwABB3PDAABCuAQALIANB+P///wdLDQRBCCEFIAYgA0EIIAkQIyIDDQEMBQtBuLHCAC0AABogCRAKIgNFBEBBCCEFDAULIAMgBiAIQQN0EL4CGgsgASACNgIoIAEgAzYCCCABIAg2AgQgAUEBNgIAQYGAgIB4IQUMAwsgBhAiDAILQaDxwABBIEHA8cAAEN4BAAsgAyEJCyAAIAk2AgQgACAFNgIAIAdBEGokAAuBAwEJfyMAQfAAayIEJAACQAJ/IAFB/wFxQQFHBEAgAUEBIAIoAigiA0EFTwR/IAIoAgQFIAMLGwwBCyAEQoCAgIAgNwI4IARBjKzCADYCNCAEQQA2AkAgBEEANgJoIARBQGsiASAEQTRqEDMCfyAEIAFBMBC+AiIGKAIoIgFBBE0EQCAGQQhqDAELIAYoAgQhASAGKAIICyEFIAIgARDQASACKAIoIgNBBE0EfyACQQhqBSACKAIEIQMgAigCCAsgASADRw0BIAJBKGohCCAFIAFBA3QQvgIaIAJBBGohCSACQQhqIQogAigCCCEHA0AgCiEFIAgoAgAiASEDIAFBBUkiC0UEQCAJKAIAIQMgByEFCwJAIANFDQAgA0EDdCAFakEIaykDAEIAUg0AIAghAyALRQRAIAkiAygCACEBCyABRQ0BIAMgAUEBazYCAAwBCwsgBhCPAkEBCyEBIAAgAkEwEL4CIAE6ADAgBEHwAGokAA8LIAMgAUH88cAAELsBAAuBAwIIfwF+IwBBEGsiCCQAIAhBCGogACACIAFrQQN2EJMBAkAgCCgCCCIDQYGAgIB4RwRAIANFDQEACyAAQShqIQlBBCEFAn8gACgCKCIHQQRNBEAgAEEIaiEEIAkhBiAHDAELIABBBGohBiAAKAIIIQQgByEFIAAoAgQLIQMCQAJAIAYgAyAFSQR/IAQgA0EDdGohBANAIAEgAkYNAiAEIAEpAwA3AwAgBEEIaiEEIAFBCGohASAFIANBAWoiA0cNAAsgBQUgAws2AgAgAEEEaiEHIABBCGohCgNAIAEgAkYNAgJ/IAkoAgAiBUEFTwRAIAcoAgAhBCAKKAIAIQYgBwwBCyAFIQQgCiEGQQQhBSAJCyEDIAEpAwAhCyAEIAVGBEAgABCgASAAKAIEIQQgACgCCCEGIAchAwsgAUEIaiEBIAYgBEEDdGogCzcDACADIAMoAgBBAWo2AgAMAAsACyAGIAM2AgALIAhBEGokAA8LQezwwABBEUGA8cAAEN4BAAuCAwEFfwJAIAEoAiAiAwR/IAEgA0EBazYCIAJAAn8CQAJAQQAgASgCACIDIAEoAgQiAhtFBEAgA0UNASABQQhqKAIAIQQgAUEMaigCAAwDCyABQQhqIQIgAUEMaigCACEDA0AgAigCACECIANFDQIgA0EBayEDIAJBmANqIQIMAAsAC0GAl8IAQStBqJLCABDeAQALIAFCADcCCCABIAI2AgQgAUEBNgIAQQALIgUgAi8BkgNJBEAgAiEDDAELA0AgAigCiAIiA0UNAyAEQQFqIQQgAi8BkAMhBSAFIAMiAi8BkgNPDQALCyAFQQFqIQYCQCAERQRAIAMhAgwBCyADIAZBAnRqQZgDaigCACECQQAhBiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAICAAAhAAAAfHkQAGcAAAALAgAAKgAAAHx5EABnAAAADwIAACwAAAAwMTIzNDU2Nzg5YWJjZGVmdXV1dXV1dXVidG51ZnJ1dXV1dXV1dXV1dXV1dXV1dXUAACIAQaD1wQALAVwAQc72wQAL3RbwPwAAAAAAACRAAAAAAAAAWUAAAAAAAECPQAAAAAAAiMNAAAAAAABq+EAAAAAAgIQuQQAAAADQEmNBAAAAAITXl0EAAAAAZc3NQQAAACBfoAJCAAAA6HZIN0IAAACilBptQgAAQOWcMKJCAACQHsS81kIAADQm9WsMQwCA4Dd5w0FDAKDYhVc0dkMAyE5nbcGrQwA9kWDkWOFDQIy1eB2vFURQ7+LW5BpLRJLVTQbP8IBE9krhxwIttUS0ndl5Q3jqRJECKCwqiyBFNQMyt/StVEUChP7kcdmJRYESHy/nJ8BFIdfm+uAx9EXqjKA5WT4pRiSwCIjvjV9GF24FtbW4k0acyUYi46bIRgN82Oqb0P5Ggk3HcmFCM0fjIHnP+RJoRxtpV0O4F55HsaEWKtPO0kcdSpz0h4IHSKVcw/EpYz1I5xkaN/pdckhhoODEePWmSHnIGPbWstxITH3PWcbvEUmeXEPwt2tGScYzVOylBnxJXKC0syeEsUlzyKGgMeXlSY86ygh+XhtKmmR+xQ4bUUrA/d120mGFSjB9lRRHurpKPm7dbGy08ErOyRSIh+EkS0H8GWrpGVpLqT1Q4jFQkEsTTeRaPmTES1dgnfFNfflLbbgEbqHcL0xE88Lk5OljTBWw8x1e5JhMG5xwpXUdz0yRYWaHaXIDTfX5P+kDTzhNcviP48Ribk1H+zkOu/2iTRl6yNEpvddNn5g6RnSsDU5kn+SryItCTj3H3da6LndODDmVjGn6rE6nQ933gRziTpGU1HWioxZPtblJE4tMTE8RFA7s1q+BTxaZEafMG7ZPW//V0L+i60+Zv4Xit0UhUH8vJ9sll1VQX/vwUe/8ilAbnTaTFd7AUGJEBPiaFfVQe1UFtgFbKlFtVcMR4XhgUcgqNFYZl5RRejXBq9+8yVFswVjLCxYAUsfxLr6OGzRSOa66bXIiaVLHWSkJD2ufUh3YuWXpotNSJE4ov6OLCFOtYfKujK4+Uwx9V+0XLXNTT1yt6F34p1Njs9hidfbdUx5wx10JuhJUJUw5tYtoR1Qun4eirkJ9VH3DlCWtSbJUXPT5bhjc5lRzcbiKHpMcVehGsxbz21FVohhg3O9ShlXKHnjTq+e7VT8TK2TLcPFVDtg1Pf7MJVYSToPMPUBbVssQ0p8mCJFW/pTGRzBKxVY9OrhZvJz6VmYkE7j1oTBXgO0XJnPKZFfg6J3vD/2ZV4yxwvUpPtBX710zc7RNBFhrNQCQIWE5WMVCAPRpuW9YuymAOOLTo1gqNKDG2sjYWDVBSHgR+w5ZwSgt6+pcQ1nxcvilJTR4Wa2Pdg8vQa5ZzBmqab3o4lk/oBTE7KIXWk/IGfWni01aMh0w+Uh3glp+JHw3GxW3Wp4tWwVi2uxagvxYQ30IIlujOy+UnIpWW4wKO7lDLYxbl+bEU0qcwVs9ILboXAP2W02o4yI0hCtcMEnOlaAyYVx820G7SH+VXFtSEuoa38pceXNL0nDLAF1XUN4GTf40XW3klUjgPWpdxK5dLaxmoF11GrU4V4DUXRJh4gZtoAleq3xNJEQEQF7W22AtVQV0XswSuXiqBqlef1fnFlVI316vllAuNY0TX1u85HmCcEhfcutdGKOMfl8nszrv5RezX/FfCWvf3edf7bfLRVfVHWD0Up+LVqVSYLEnhy6sTodgnfEoOlcivWACl1mEdjXyYMP8byXUwiZh9PvLLolzXGF4fT+9NciRYdZcjyxDOsZhDDSz99PI+2GHANB6hF0xYqkAhJnltGVi1ADl/x4im2KEIO9fU/XQYqXo6jeoMgVjz6LlRVJ/OmPBha9rk49wYzJnm0Z4s6Rj/kBCWFbg2WOfaCn3NSwQZMbC83RDN0RkeLMwUhRFeWRW4LxmWZavZDYMNuD3veNkQ49D2HWtGGUUc1RO09hOZezH9BCER4Nl6PkxFWUZuGVheH5avh/uZT0Lj/jW0yJmDM6ytsyIV2aPgV/k/2qNZvmwu+7fYsJmOJ1q6pf79maGRAXlfbosZ9RKI6+O9GFniR3sWrJxlmfrJKfxHg7MZxN3CFfTiAFo15TKLAjrNWgNOv03ymVraEhE/mKeH6FoWtW9+4Vn1WixSq16Z8EKaa9OrKzguEBpWmLX1xjndGnxOs0N3yCqadZEoGiLVOBpDFbIQq5pFGqPa3rTGYRJanMGWUgg5X9qCKQ3LTTvs2oKjYU4AevoakzwpobBJR9rMFYo9Jh3U2u7azIxf1WIa6oGf/3ear5rKmRvXssC82s1PQs2fsMnbIIMjsNdtF1s0cc4mrqQkmzG+cZA6TTHbDe4+JAjAv1sI3ObOlYhMm3rT0LJq6lmbebjkrsWVJxtcM47NY600W0MworCsSEGbo9yLTMeqjtumWf831JKcW5/gfuX55ylbt9h+n0hBNtuLH287pTiEG92nGsqOhtFb5SDBrUIYnpvPRIkcUV9sG/MFm3Nlpzkb39cyIC8wxlwzzl90FUaUHBDiJxE6yCEcFSqwxUmKblw6ZQ0m29z73AR3QDBJagjcVYUQTEvklhxa1mR/bq2jnHj13reNDLDcdyNGRbC/vdxU/Gfm3L+LXLU9kOhB79icon0lInJbpdyqzH663tKzXILX3xzjU4Cc812W9Aw4jZzgVRyBL2abHPQdMcituChcwRSeavjWNZzhqZXlhzvC3QUyPbdcXVBdBh6dFXO0nV0npjR6oFHq3Rj/8IysQzhdDy/c3/dTxV1C69Q39SjSnVnbZILZaaAdcAId07+z7R18coU4v0D6nXW/kytfkIgdow+oFgeU1R2L07I7uVniXa7YXpq38G/dhV9jKIr2fN2Wpwvi3bPKHdwg/stVANfdyYyvZwUYpN3sH7sw5k6yHdcnuc0QEn+d/nCECHI7TJ4uPNUKTqpZ3ilMKqziJOdeGdeSnA1fNJ4AfZczEIbB3mCM3R/E+I8eTGgqC9MDXJ5PciSO5+QpnlNencKxzTceXCsimb8oBF6jFctgDsJRnpvrThgiot7emVsI3w2N7F6f0csGwSF5XpeWfchReYae9uXOjXrz1B70j2JAuYDhXtGjSuD30S6e0w4+7ELa/B7XwZ6ns6FJHz2hxhGQqdZfPpUz2uJCJB8OCrDxqsKxHzH9HO4Vg35fPjxkGasUC99O5cawGuSY30KPSGwBneYfUyMKVzIlM59sPeZOf0cA36cdQCIPOQ3fgOTAKpL3W1+4ltASk+qon7actAc41TXfpCPBOQbKg1/utmCblE6Qn8pkCPK5ch2fzN0rDwfe6x/oMjrhfPM4X91bGxydWVhbHNlMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = mx();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: t, module: A } = await px(await g, I);
  return Gx(t, A);
}
function Cg(g, I, t, A, e) {
  return rA(e - 99, A);
}
(function(g, I) {
  const t = g();
  function A(n, B, a, Q, E) {
    return rA(n - 616, B);
  }
  function e(n, B, a, Q, E) {
    return rA(B - -12, E);
  }
  function o(n, B, a, Q, E) {
    return rA(E - -928, B);
  }
  function i(n, B, a, Q, E) {
    return rA(a - 128, Q);
  }
  function C(n, B, a, Q, E) {
    return rA(n - 875, Q);
  }
  for (; ; )
    try {
      if (-parseInt(i(463, 468, 481, "lFDr", 488)) / 1 * (-parseInt(i(509, 494, 504, "iOv3", 529)) / 2) + parseInt(o(-553, "qBiX", -586, -597, -570)) / 3 * (parseInt(e(356, 365, 391, 360, "Yhfx")) / 4) + parseInt(A(983, "ZzBj", 968, 961, 986)) / 5 * (-parseInt(o(-519, "3yEi", -504, -551, -524)) / 6) + parseInt(C(1275, 1252, 1287, "Yhfx", 1278)) / 7 * (-parseInt(A(977, "i6)V", 962, 957, 981)) / 8) + -parseInt(C(1271, 1288, 1250, "vg$!", 1277)) / 9 + parseInt(i(523, 522, 526, "(LYH", 538)) / 10 + parseInt(A(982, "iOv3", 989, 971, 983)) / 11 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(qg, -14 * -48299 + -734857 + -15598 * -32);
function ng(g, I, t, A, e) {
  return rA(g - -798, e);
}
function Bg(g, I, t, A, e) {
  return rA(A - -32, e);
}
function di(g, I, t, A, e) {
  return rA(g - -801, e);
}
function qg() {
  const g = ["W7KlW4pcNJzLW4NdQCkQvSkvW6Hf", "lMldHCouWRVdUmkDww8", "kmoHWOhdM2RcH8orlJxdK8kXdvK", "W4bMWP7dVam", "W4ldQCk4bJruW7ddO8oyWQhcGSoB", "AdlcHmoGWPa", "WRaWW6nUx8kUW7i", "rSoEFmkuAG", "W7pdGCo0W7fEW63dHsC", "WRtcJxWDW6O", "DmktW73cTSkTtX8", "jwD0gh4", "q8kTWRVcRSkKksze", "ASouW7eV", "rSo7bhzQW6ahW5NdGHLaW6GR", "whxcJ8o1W7HHWRpdIv7cV8oWW5DC", "W5y2W4pcVrPqkcemW7THdCol", "FL9Jc8ka", "WRJdIJKurcOaWObW", "rwTdbwVdJbZdQSkdiCoAAW", "omkyWQrrjW", "amoiCCkoFq", "hIldISkQWOe", "W5JcNePQj8k+ChbRW5j1W64Ivq", "n8klWQHQWOOIjd/dRCkFySoP", "WQzoWQBdJhW", "W6xcKNeOqG", "pZdcIr5s", "W6tcP8oPWQnD", "lwiHuue", "W7mAW6Hz", "WQnyWPddNMO", "fc9jW5pcOq", "W5RcNKLUimk+fI50W5vAW6G", "W4FcKSo4ANaqW5m", "gmoWWOJcKCkp", "nmkLWQnxpq", "nZdcQ33dQYxdHCknWQuRWQ3dUxvy", "g8o2WO7cNCoo", "W7xcGmkyW7xcQq", "W61Edmk2WRq", "W4ldR8k3atfCWP7dJSoRWO7cOCoCW5q", "kmkXW5JcOrRdO8kP", "W6tcQmoMWQnf", "WP3dTCkxWRRdKG", "W63cUSooWOldPW", "W6/cTSoyWOhdMG", "DhpcK8oIWRO", "WQxcUSoUWQvh", "WQqdW5RcImkn", "WPRdVCkpWRRdIq", "W7xdVSk+W78CcCk3tMJdGNrd", "BCkYWQj7WQxdOHyVx8k4W7FcUa"];
  return qg = function() {
    return g;
  }, qg();
}
function rA(g, I) {
  const t = qg();
  return rA = function(A, e) {
    A = A - (-39 * -6 + -2554 + 2673);
    let o = t[A];
    if (rA.SKnzOW === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      rA.dVRQXg = a, g = arguments, rA.SKnzOW = !0;
    }
    const C = t[-134 * -5 + -199 * 31 + -39 * -141], n = A + C, B = g[n];
    return B ? o = B : (rA.WREgMY === void 0 && (rA.WREgMY = !0), o = rA.dVRQXg(o, e), g[n] = o), o;
  }, rA(g, I);
}
var Hi;
class kx {
  constructor() {
    p(this, Hi, !1);
  }
  async [(Hi = di(-436, -425, -447, -421, "qBiX") + Bg(347, 358, 356, 350, "GXwz") + Cg(454, 455, 494, "i6)V", 468), ng(-442, -439, -423, -418, "ZzBj"))](I) {
    function t(C, n, B, a, Q) {
      return ng(C - 427, n - 263, B - 36, a - 404, a);
    }
    function A(C, n, B, a, Q) {
      return ng(a - 95, n - 39, B - 360, a - 17, C);
    }
    function e(C, n, B, a, Q) {
      return Cg(C - 326, n - 372, B - 248, B, C - -431);
    }
    function o(C, n, B, a, Q) {
      return Bg(C - 13, n - 86, B - 488, C - -918, B);
    }
    function i(C, n, B, a, Q) {
      return Cg(C - 450, n - 334, B - 23, a, n - -91);
    }
    try {
      const C = I + (t(32, 51, 8, "7zR%", 22) + "/") + ai;
      await xn(C), this[A("hz$%", -276, -323, -298, -302) + o(-567, -576, "y]98", -581, -586) + A("i6)V", -332, -332, -334, -354)] = !0;
    } catch {
      this[i(389, 397, 410, "8zP&") + o(-572, -572, "*]W3") + e(60, 79, "^1UG")] = !1, console[t(2, 20, -18, "rTIq")](ai + (e(39, 25, "ONYM") + i(389, 372, 370, "7zR%") + e(59, 59, "ONYM") + o(-564, -567, "ONYM") + A("O55q", -352, -352, -349) + t(3, 17, -16, "vg$!") + o(-575, -589, "8B9E") + o(-560, -540, "MB0)") + o(-562, -572, "8zP&") + t(8, 16, 5, "^E51") + t(28, 42, 33, "Wj$)") + e(49, 65, "*]W3") + A("ij]4", -307, -313, -333) + i(376, 380, 390, "O55q") + "n."));
    }
  }
  [Bg(328, 335, 331, 336, "vg$!") + ng(-435, -420, -429, -414, "^E51") + Bg(364, 355, 348, 361, "o@l8") + "ed"]() {
    function I(A, e, o, i, C) {
      return di(o - 832, e - 231, o - 224, i - 18, i);
    }
    function t(A, e, o, i, C) {
      return Cg(A - 300, e - 278, o - 206, i, o - 142);
    }
    return this[I(408, 450, 432, "MB0)") + t(617, 653, 628, "o@l8") + I(418, 386, 391, "^^^d")];
  }
}
class vI extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return $(B - -376, a);
  }
  var A = g();
  function e(n, B, a, Q, E) {
    return $(Q - 915, a);
  }
  function o(n, B, a, Q, E) {
    return $(a - -627, B);
  }
  function i(n, B, a, Q, E) {
    return $(n - 268, a);
  }
  for (; ; )
    try {
      var C = parseInt(t(-60, -83, "*U4]", -59, -97)) / 1 * (parseInt(e(1196, 1217, "CD!M", 1216, 1194)) / 2) + parseInt(e(1211, 1229, "Zoa#", 1214, 1228)) / 3 * (parseInt(t(-31, -51, "ym)T", -41, -32)) / 4) + parseInt(i(550, 558, "tOq0", 547, 545)) / 5 + -parseInt(o(-368, "eSj7", -337, -313, -328)) / 6 * (-parseInt(o(-286, "I1LB", -310, -282, -301)) / 7) + -parseInt(o(-292, "sXW4", -294, -309, -294)) / 8 * (parseInt(t(-54, -85, "tOq0", -73, -75)) / 9) + -parseInt(o(-351, "eSj7", -348, -346, -341)) / 10 + parseInt(i(578, 602, "27yS", 578, 564)) / 11 * (-parseInt(o(-320, "meMy", -304, -313, -325)) / 12);
      if (C === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Zg, 360049 + 17 * -37043 + -1 * -606358);
function Zg() {
  var g = ["WQRdHxTQWQm", "WP7dL8oAW4/cNG", "crHJWQldTW", "l1KrEdq", "W6/dTMnwW78", "aSkMs1XJgSoZzCohW5nHq8ou", "WPTUrtqy", "W4ZdO8kNW5itWPtcQJ3cHmkXWO/cLCky", "qHBdO8oWA8kLaCk5vCo6sSkk", "x8o3WPu", "W4afWRldMcddSdeMswpcN8kE", "W60sW5ZdNmoR", "WQKHBa7dKW5LWQ/dHmkCWO/dUWa", "Deq2yXxdPCoo", "W60cW40", "amk4WQRdMCo8", "amoIpWilECk1", "sHpdOCkplSoYlSkBvq", "uI/cUwdcMW", "WQv/fvFcSfe9", "eCk8WRNdG8oG", "WP/cVSoYWOq", "tCoBuby4", "W6CbWRWlW5m", "WOJdUd7dUf4", "WOBdQZj+W6ymWQ3cScdcKSk+lCkU", "WO99wcKc", "hCkTW4HebgPWWQTiCLK1", "WRRdMhe", "iCo3uW", "W7r9ogVcKa", "W691lMdcIa", "WQH3WRHoWPmbpG", "W4iMbq", "W7FdTJ0KW5K", "W5RdRCoVWRnx", "atGCWQldN2hcLs1y", "W6ezW50", "W7mjw0W3", "rCoRWQ0Cxa", "WQGEBCoLka", "j8oXvdxdJW", "WQj3W6iVW7f1W5NdGSk6", "fSkqj0HTf3VdPSk+WRJdSWLa", "W47dPSkKW5quWPxdUbdcPCkAWR3cHW", "WOJdHSoxW5hcJW", "imkbwmoPW4W", "W5GIaMlcUG", "WQddG1DOWQ0", "W47cKmkmWONdKSoxW5ZdU8oLW7SV", "uIJcPwFcHW", "W7GsWPJdTtBdPCol", "B8kLWOPOsG", "cuFcT8kVcW", "p0qq", "WR5eWPNcJCk8W5e5z2ZdVCkYEg4", "W4pdOSo7WQ8", "WQe2WR8", "vSonyICZ", "FX9np3FcVCoepSolla4J", "nYpdQYqWmghdIvXnCCos", "tmojzrSX", "WP7dLCohW5lcMa", "W5xdLWZdSwiWW58", "WPFcP8o6df/cO8kSmM8"];
  return Zg = function() {
    return g;
  }, Zg();
}
function bx(g, I, t, A, e) {
  return $(e - 851, I);
}
function se(g, I, t, A, e) {
  return $(A - -695, e);
}
function $(g, I) {
  var t = Zg();
  return $ = function(A, e) {
    A = A - (-2 * 734 + -1 * -2406 + -669);
    var o = t[A];
    if ($.cVvvEE === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      $.vCcVpv = C, g = arguments, $.cVvvEE = !0;
    }
    var n = t[2137 * 2 + -1468 + -1403 * 2], B = A + n, a = g[B];
    return a ? o = a : ($.OjLCff === void 0 && ($.OjLCff = !0), o = $.vCcVpv(o, e), g[B] = o), o;
  }, $(g, I);
}
function hi(g, I, t, A, e) {
  return $(A - -361, I);
}
function vA(g, I, t, A, e) {
  return $(g - -754, t);
}
function li(g, I, t, A, e) {
  return $(g - -102, A);
}
var Ze, bt;
class ui {
  constructor(I) {
    H(this, Ze);
    H(this, bt);
    function t(o, i, C, n, B) {
      return $(C - 887, n);
    }
    function A(o, i, C, n, B) {
      return $(C - 733, n);
    }
    function e(o, i, C, n, B) {
      return $(i - 859, o);
    }
    this[t(1217, 1219, 1187, "z*53") + t(1234, 1228, 1202, "IAT7")] = I;
    try {
      Y(this, Ze, I[A(1002, 1020, 1009, ")Wc$", 1024) + A(1060, 1091, 1065, "I1LB", 1039) + e("CD!M", 1142, 1139, 1122, 1110)] && JSON[e("CRof", 1168, 1195, 1187, 1188)](I[A(1032, 1055, 1053, "K0ZN", 1027) + e("*U4]", 1164, 1138, 1187, 1131) + A(1067, 1058, 1061, "sXW4", 1070)])), Y(this, bt, I[t(1213, 1190, 1211, "zusB", 1218) + t(1182, 1210, 1198, "DjIp", 1183)]);
    } catch (o) {
      console[t(1228, 1194, 1217, "CRof")](o);
    }
  }
  get [vA(-441, -420, "CD!M") + "id"]() {
    function I(e, o, i, C, n) {
      return vA(i - 127, o - 368, n);
    }
    function t(e, o, i, C, n) {
      return vA(C - 513, o - 451, i);
    }
    function A(e, o, i, C, n) {
      return vA(o - 1292, o - 491, e);
    }
    return this[A("63d$", 850) + t(25, 50, "I1LB", 29)][t(15, 42, "ep(C", 33) + I(-333, -312, -325, -318, "c5Q4")];
  }
  get [vA(-428, -447, "BQvB") + "s"]() {
    function I(A, e, o, i, C) {
      return vA(A - 1754, e - 249, e);
    }
    function t(A, e, o, i, C) {
      return se(A - 198, e - 9, o - 134, i - 69, C);
    }
    return this[I(1277, "sXW4") + I(1321, "bL&P")][t(-359, -351, -379, -355, "meMy") + "s"];
  }
  get [se(-413, -399, -447, -415, "z*53") + se(-370, -395, -398, -392, "IAT7")]() {
    function I(e, o, i, C, n) {
      return vA(i - 1450, o - 364, e);
    }
    function t(e, o, i, C, n) {
      return li(C - 222, o - 320, i - 154, o);
    }
    function A(e, o, i, C, n) {
      return se(e - 21, o - 353, i - 349, o - -178, i);
    }
    return this[t(395, "zusB", 385, 412) + I("IAT7", 1004, 1011)][t(398, "8zvO", 389, 414) + A(-559, -585, "Mvd0")];
  }
  get [vA(-440, -431, "1@In") + "b"]() {
    return m(this, Ze);
  }
  get [hi(-11, "ep(C", -46, -39) + se(-388, -376, -382, -364, "ym)T")]() {
    return m(this, bt);
  }
  get [hi(-34, "I1LB", -43, -65) + se(-446, -401, -425, -417, "EI6c") + vA(-457, -462, "zpx)") + bx(1121, "4(b6", 1128, 1163, 1146)]() {
    var o, i;
    function I(C, n, B, a, Q) {
      return vA(C - 1072, n - 300, a);
    }
    function t(C, n, B, a, Q) {
      return vA(B - 335, n - 86, C);
    }
    function A(C, n, B, a, Q) {
      return se(C - 212, n - 118, B - 142, n - 873, a);
    }
    function e(C, n, B, a, Q) {
      return li(C - -396, n - 184, B - 286, Q);
    }
    return !!((i = (o = m(this, Ze)) == null ? void 0 : o[I(607, 626, 582, "8zvO") + t("bL&P", -142, -112)]) != null && i[t("tOq0", -113, -92) + I(622, 601, 611, "*U4]") + A(467, 463, 430, "DjIp") + t("Bf0P", -91, -111) + e(-223, -200, -245, -253, "meMy") + e(-200, -216, -182, -182, "$a3Q") + t("meMy", -85, -100) + "d"]);
  }
}
Ze = new WeakMap(), bt = new WeakMap();
function sA(g, I, t, A, e) {
  return EA(g - 10, e);
}
function nA(g, I, t, A, e) {
  return EA(I - 481, A);
}
(function(g, I) {
  function t(i, C, n, B, a) {
    return EA(i - -682, B);
  }
  function A(i, C, n, B, a) {
    return EA(n - -207, a);
  }
  function e(i, C, n, B, a) {
    return EA(B - 762, a);
  }
  const o = g();
  for (; ; )
    try {
      if (parseInt(e(1189, 1257, 1218, 1196, "3cw1")) / 1 + -parseInt(A(255, 108, 147, 154, "JN3P")) / 2 + -parseInt(A(428, 271, 323, 259, "x6pa")) / 3 * (parseInt(e(1134, 1187, 1070, 1184, "x6pa")) / 4) + parseInt(t(-286, -359, -391, "GiT5", -351)) / 5 + parseInt(A(178, 216, 208, 114, "C]^7")) / 6 + -parseInt(A(126, 249, 143, 45, "l)f4")) / 7 + -parseInt(t(-133, -235, -100, "YJjv", -20)) / 8 * (-parseInt(e(1115, 1179, 1101, 1114, "GiT5")) / 9) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Pg, 48623 * -27 + -971463 + -17 * -173249);
function Pg() {
  const g = ["dGSM", "j8k/F8kuW6C", "E8kSySo4W40", "nCkbW5hdRmo9", "WO81W43dGte", "WRZdSmkQsCk8", "mCkOrx/dGG", "nmktWPvpffCkWOBdImkIFmod", "FxqZW6tdUq", "WRZdJLXtWPCEsSonWQX4WPVdIa", "pMaZW6ldPa", "kmo/rCkPrW", "WRiXWOX1f21BDea", "WPtcJfK/", "xSosW4WxxG", "W4SSWR4r", "v8oCW5e8", "WQtdUmkweCo3", "W6S3EeC", "W4XkccHW", "wtLb", "iSkOsuG", "W7hdL8km", "bWFdSCocrq", "W4f1WRxcG8kk", "vCoymwG4", "WRZdHtNcO8oE", "W6ZcNqCwW4a", "WP3cV1q0WRm", "W6hcKr0mW4q", "p8oPW7S", "WRVdSIVcTCox", "W4Dlh2LU", "WPy/jq", "W4SOfmoIW4VcRIzQW6NdQCk7W43dUa", "WPZdImoS", "afzoW7RdGa", "W6RcIHSkW5C", "WRNdQSkEtCkH", "WOJdLCofW6e", "bmkiW5C", "ymohW5uzrq", "oqxdP8obfG", "y8kcW48vwq", "hCkPW6RdNmos", "qmoxa24y", "W7iRD0yk", "eepcLGBdLG", "WOhdQCoNjCkJ", "W4LZra", "xmoyW4WXwW", "m8kvW5FcGs0", "W5HDWOFcV8kL", "W5nZC8koWQ0", "W6ZcIGywW5y", "zCoRyCkXiG", "WRxcKSo8WPldNa", "W48PWQddGZq", "jCo+vmocrG", "WPO5iW", "WPNdH30SdG", "f8keW5e", "ySkcuSofW4a", "W4HiWOZdTq", "gSkoW4BcIZe", "zSo2yCkBmq", "W6xcVLivba", "WRVdQdBcTCok", "sSolW4iFqW", "iLyjW7VdVq", "CmoRFmkOoq", "WQpdISotgmkb", "W4ndWOhdPsG", "WQtcH8oGWP3dOa", "rrbtW6VdTG", "W6PNW59wca", "WRtdQd/cHmok", "W6VcNq8eW5a", "h0FcLINdLW", "W49JycblAGZdOI/cPSow", "fG05CSkz", "l1ucW63dQG", "WRBdTSkoxmkG", "WOxdTMWnpq", "W77cNCkgECoK", "W648rJ7dMq", "dfBcJGddMG", "kCk7z8k5W7i", "dmkZAmk1W6y", "ySo8D8k6nq", "lmkZAmk1W6y", "omkiWOxcQHa", "W6xcTSkj", "nhW6W74", "WPdcLKiPWQS", "bWKHx8ks", "W5bWWOFcUCkp", "WR7cGmoyWQhdNG", "o8kcW7xdJCop", "W6eRCvSn", "WQeUWPayCa", "WQiXte3cPG", "W7HUDCobWRy", "DCkOf8kZhv7dQLNdJSkgWPq", "WO8fW4VdJbW", "W4SOWQu", "W4u/WRGmrW", "WOHIs8kGWPq", "C8opWPK8eW", "WOldOSkprSkM", "iGpdSSkbW7JcMHSldmoAW7P8xG", "tmo9WQTFWO8", "WQxdSCkurSk7", "imoLsmo0", "WPBdImoSk8k1", "W4uYWP7dRZy", "WRxcICoGWRBdQa", "n8oIW7RcVqa", "W48Yn8kLW7VcJCkZFq", "jSocW6ZcOKq", "W4Pygwv0", "W7xdLmkAruy", "WRPQlXXhC8o4sr9vW4RcVq", "yCo8fg0v", "DSkOza", "WP3dHSo2pmkV", "W5DaWONcQmkA", "W5fHW4LnfW", "iSoJt8o0wa", "BSo9sCoKtG", "W7XtFGddSW", "WPBdGSoSlmkI", "W6dcSmkermoV", "W7/cMrSwW4a", "WRhcT2vSWRC", "WR7dQc3cR8oC", "W5HBWOxcVSkh", "W6RcLHOaWOu", "o8oIW6/cTW", "WRu1WOW", "A8oWbMub", "WPbKfSkJW5W", "cWRdP8ojfG", "W6hcNxpcTmkp", "W4JcK1/cLCkm", "WPOUmLGu", "e8kjW5BcIW8", "W6pcKqOaW4S", "W53cHSkqW75qrJxdSZZcV8oJnmo7", "fCksW5BcMJa", "k0SCW5hdVq", "W79IzmkpWQW", "WR/dOCoxfCk3W7H3bxldQt0XW5y", "W7zhWPBdRg0", "WPBdR0dcU8kQW58Cba", "W69RW50", "W4PSzIvnkKZdLsxcNCouCHe", "WRtdRIlcPmoC", "gv0iWRhdMW", "mmk/vfK", "W63cNq0bW4a", "aapdPW", "W6O2BvWq", "W7dcG3ixmW", "W67cVmkdrCoK", "kmoYrCoPwa", "W6z2W4Hxcq", "zulcRSoBWRW", "WP51rCkIWOG", "BSkDW5q7ua", "rmoZBa", "W5zZsZpdTG", "WOFdI3qwaa", "W79YxSkxWR4", "WQhdOSk8fW", "eCkcW5hcOJy", "W67cKNO2dW", "rcPDW6VdTG", "bGVdP8oywa", "W6lcVSku", "WOqXW5FdKtW", "W5xdImkotNe", "WRySuwBcVW", "W7VcUmkvt8oO", "FmkYWRnZWOe", "W6rfymk5WRO", "omkPzvpdLa", "nmkiW7ZdU8oy", "smkeamoZW6i", "WQldHSoWmCkU", "WRqXsG", "WQOXxW", "aSkoWOLMcSkBW7RdG0ldUWdcSW", "CSkRCSo4WOm", "oSoTW73cU0G", "W6S3D1W", "WQxdJ3mH", "W555tNK", "WPZdOchdPCoBWPK+eJ3cV0BdTq", "WRVcLXeiWRq", "W4flaNvV", "WPvUdCk+W50", "vCkOWPCcbq", "wZfrW6FdPW", "WQ87WOOAtq", "tGldU8ozwa", "WQpcH8oGWOddRa", "W67cSKu8aW", "ymk5hgmu", "W6jWW590eG", "WPv5dmk+W4S", "kCoWvmoKqW", "WPTcdCkKW4W", "WQqWnCouW6ypEaLiFsVcSa", "BCoOB8kxW5O", "WPNdH2qSba", "Fmk4WQfxWPK", "h8kPpConWO04W5ddR33dT8owpt0", "W5RdH2iNdq", "W6FcMr0gW40", "WRtdQdVcOmom", "WOpdJ2SGdG", "B8k8WRvy", "smonWOe+yG", "CmkKfSokr2VdVeldSa", "z8owW4Kj", "WPVcL0vSWPi", "W7/cT2dcUW", "W69TW5LDfq"];
  return Pg = function() {
    return g;
  }, Pg();
}
function fA(g, I, t, A, e) {
  return EA(e - -240, A);
}
function ie(g, I, t, A, e) {
  return EA(I - 904, e);
}
function EA(g, I) {
  const t = Pg();
  return EA = function(A, e) {
    A = A - (111 * 73 + 931 + -8699);
    let o = t[A];
    if (EA.gCerVv === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      EA.HFzAXo = a, g = arguments, EA.gCerVv = !0;
    }
    const C = t[332 + 29 * 121 + -3841 * 1], n = A + C, B = g[n];
    return B ? o = B : (EA.NHkLip === void 0 && (EA.NHkLip = !0), o = EA.HFzAXo(o, e), g[n] = o), o;
  }, EA(g, I);
}
function DA(g, I, t, A, e) {
  return EA(I - 185, t);
}
var Ki, Oi, Ti;
class Nx {
  constructor(I) {
    p(this, Ti);
    p(this, Oi, [ie(1338, 1320, 1257, 1279, "(&Ln") + sA(448, 481, 496, 503, "x6pa") + "ic", DA(696, 741, "x6pa") + nA(1021, 927, 964, "2gMj") + "ic"]);
    p(this, Ki);
    function t(A, e, o, i, C) {
      return EA(i - -62, C);
    }
    this[t(425, 342, 432, 379, "0Z8C") + t(347, 386, 425, 454, "2sls") + "d"] = I;
  }
  async [(Ti = nA(882, 907, 963, "$*KY") + "se", Oi = sA(424, 364, 342, 410, "B5ez") + sA(396, 325, 436, 379, "7#9v") + sA(558, 479, 460, 465, "hMhL") + nA(1034, 1021, 1084, "x6pa"), Ki = nA(920, 1007, 1098, "YJjv") + ie(1351, 1321, 1337, 1286, "yZ!E"), ie(1187, 1297, 1215, 1253, "YJjv"))](I) {
    function t(C, n, B, a, Q) {
      return sA(n - -250, n - 355, B - 480, a - 474, C);
    }
    function A(C, n, B, a, Q) {
      return fA(C - 304, n - 249, B - 376, a, C - -231);
    }
    function e(C, n, B, a, Q) {
      return nA(C - 291, C - -370, B - 165, a);
    }
    const o = await this[A(34, 148, -23, "r(jJ") + A(54, 142, 43, "#hN]") + t("GiT5", 185, 262, 190)](I);
    function i(C, n, B, a, Q) {
      return fA(C - 62, n - 355, B - 235, B, C - 630);
    }
    await Promise[e(619, 653, 584, ")gim") + A(42, 14, 28, "r(jJ")]([this[t("B5ez", 142, 105, 234) + i(752, 670, "l)f4") + "d"][A(19, 78, -28, "G(RL")](I), this[e(480, 553, 590, "wZCI") + i(840, 771, "j7tg") + "e"](o)]), this[A(-52, -76, -22, "(&Ln") + A(-128, -223, -129, "JN3P") + e(669, 760, 554, "ablz")]();
  }
  async [sA(487, 499, 435, 584, "0Z8C") + sA(525, 424, 518, 575, "4W7a") + "se"](I) {
    function t(C, n, B, a, Q) {
      return DA(C - 438, a - 686, n);
    }
    function A(C, n, B, a, Q) {
      return DA(C - 26, C - 205, a);
    }
    function e(C, n, B, a, Q) {
      return DA(C - 348, B - 121, Q);
    }
    function o(C, n, B, a, Q) {
      return sA(B - 629, n - 183, B - 471, a - 391, Q);
    }
    function i(C, n, B, a, Q) {
      return sA(B - 411, n - 377, B - 328, a - 47, C);
    }
    try {
      if (e(920, 873, 852, 898, "iEx!") === e(851, 742, 781, 686, "ablz")) {
        const C = await fetch(I);
        if (!C.ok)
          throw e(693, 862, 758, 680, "FN[F") !== A(790, 693, 841, "!i2@", 817) ? new Error(t(1337, "U71#", 1256, 1227, 1115) + A(739, 657, 756, "4r5v", 665) + o(1009, 996, 1045, 945, "FN[F") + o(1140, 1138, 1042, 1063, "j7tg") + "d.") : new _0x4917d7(A(741, 794, 793, "G(RL", 689) + i("4r5v", 894, 950, 845, 928) + A(846, 733, 945, "yZ!E", 933) + o(1219, 1151, 1126, 1020, "(&Ln") + ".");
        this[A(803, 856, 826, "(&Ln", 813) + "se"] = await C[A(838, 921, 813, "T@wV", 873)]();
      } else return this[o(1295, 1116, 1194, 1196, "x6pa") + A(782, 800, 860, "iEx!", 874)];
    } catch (C) {
      if (i("%pbj", 987, 904, 906) === A(917, 918, 976, "#mDy")) this[i("OAw2", 1038, 984, 980) + "se"] = void (-9078 * -1 + 2544 + 447 * -26), console[t(1253, "$*KY", 1163, 1235)](C);
      else throw new _0x50729a(t(1385, "@Ftg", 1280, 1389) + o(1145, 1087, 1151, 1139, "wZCI") + o(957, 1012, 1030, 963, "7wO@") + e(835, 758, 868, 850, "&Zc0") + ".");
    }
  }
  async [nA(1070, 960, 936, "OAw2") + sA(373, 438, 375, 414, "x6pa") + "e"](I) {
    this[e(980, "OAw2", 1074) + t(865, 802, 773, "#mDy")] = void (5647 * 1 + 5430 + 11 * -1007);
    function t(C, n, B, a, Q) {
      return fA(C - 13, n - 0, B - 436, a, C - 703);
    }
    if (!I)
      if (i("cpYa", 268, 266, 175) !== e(1067, "(&Ln", 1031)) {
        console[A(748, 679, 738, "U71#", 724)](e(897, ")gim", 984) + i("!i2@", 217, 187, 255) + A(564, 652, 480, "yZ!E", 539) + A(656, 597, 651, "2sls", 701) + e(987, "wZCI", 916)), this[t(954, 949, 893, "@Ftg") + "se"] = void 0;
        return;
      } else return _0x3bf0ee[i("zCcj", 137, 94, 121) + o(821, 838, 898, 888, "l)f4")][e(825, "j7tg", 897) + o(853, 754, 944, 821, "7wO@")];
    function A(C, n, B, a, Q) {
      return DA(C - 396, Q - 19, a);
    }
    function e(C, n, B, a, Q) {
      return nA(C - 82, B - 40, B - 303, n);
    }
    function o(C, n, B, a, Q) {
      return fA(C - 401, n - 79, B - 175, Q, C - 542);
    }
    function i(C, n, B, a, Q) {
      return ie(C - 190, a - -1184, B - 450, a - 462, C);
    }
    await this[t(931, 847, 965, "3cw1") + e(960, "3cw1", 1016) + "se"](I);
  }
  async [nA(775, 854, 878, "@Ftg") + fA(181, 166, 88, "RUsE", 159) + nA(801, 875, 767, "(&Ln")](I) {
    function t(n, B, a, Q, E) {
      return nA(n - 439, n - 366, a - 346, B);
    }
    const A = await fetch("" + I + this[C(-257, -191, -210, "FN[F") + o(492, "RQ9C", 464) + o(233, "@Ftg", 266) + i(543, 497, 610, 594, "cpYa")][0]), e = A.ok ? -1 + -1 * -2714 + 2713 * -1 : -1 * -5442 + -6093 + 652;
    function o(n, B, a, Q, E) {
      return DA(n - 447, a - -263, B);
    }
    function i(n, B, a, Q, E) {
      return ie(n - 282, B - -847, a - 228, Q - 227, E);
    }
    function C(n, B, a, Q, E) {
      return fA(n - 104, B - 119, a - 392, Q, B - -501);
    }
    return "" + I + this[t(1351, "yZ!E", 1407) + o(299, "h)R9", 366) + C(-219, -220, -215, "cpYa") + i(594, 480, 395, 485, "3cw1")][e];
  }
  [fA(42, 145, 203, "lr42", 125) + nA(938, 961, 929, "4r5v") + "s"](I) {
    function t(A, e, o, i, C) {
      return sA(o - -253, e - 326, o - 427, i - 141, i);
    }
    I[t(250, 370, 300, "%pbj") + "ch"]((A) => console[t(103, 173, 177, "B5ez")](A));
  }
  [DA(477, 565, "RnNS") + nA(774, 868, 823, "ablz") + nA(767, 840, 862, "j7tg")](I) {
    function t(e, o, i, C, n) {
      return fA(e - 174, o - 414, i - 285, o, e - 642);
    }
    function A(e, o, i, C, n) {
      return nA(e - 332, n - 5, i - 331, C);
    }
    I[A(962, 925, 1042, "2sls", 978) + "ch"]((e) => console[t(738, "iEx!", 727)](e));
  }
  [sA(532, 537, 513, 604, "E[ZW") + nA(1006, 924, 925, "0Z8C")]() {
    function I(A, e, o, i, C) {
      return DA(A - 131, i - 282, e);
    }
    function t(A, e, o, i, C) {
      return sA(C - -631, e - 221, o - 22, i - 300, o);
    }
    return window[I(804, "&Zc0", 771, 885) + I(982, "ablz", 909, 929)][t(-180, -279, "YJjv", -321, -261) + t(-67, -253, "hMhL", -213, -172)];
  }
  [DA(663, 692, "E[ZW") + DA(690, 592, "$*KY") + nA(977, 935, 1004, "yZ!E")]() {
    function I(i, C, n, B, a) {
      return fA(i - 341, C - 347, n - 402, i, C - 381);
    }
    function t(i, C, n, B, a) {
      return sA(B - 388, C - 390, n - 296, B - 270, n);
    }
    function A(i, C, n, B, a) {
      return fA(i - 467, C - 106, n - 133, a, B - 527);
    }
    function e(i, C, n, B, a) {
      return ie(i - 479, i - -1700, n - 226, B - 63, C);
    }
    function o(i, C, n, B, a) {
      return sA(C - 49, C - 302, n - 141, B - 322, a);
    }
    try {
      if (e(-422, "S5X^", -487, -443, -351) === I("GiT5", 483, 484, 554, 481)) {
        if (!this[e(-279, "4W7a", -357, -239, -225) + "se"]) {
          if (A(596, 609, 722, 671, "T@wV") !== I("wZCI", 698, 750, 715, 807)) throw new vI(A(607, 599, 817, 708, "3cw1") + I("0Z8C", 508, 479, 448, 480) + e(-252, "iEx!", -230, -244, -291) + e(-457, "RUsE", -344, -468, -508) + ".");
          _0x4eb417 instanceof _0xaddc0e && _0x1ce228[A(627, 723, 582, 672, "#hN]") + e(-329, "@Ftg", -256, -241, -444)](_0x28af6c);
          return;
        }
        if (!this[A(728, 761, 852, 815, "RnNS") + I("yZ!E", 499, 488, 525, 571) + "d"][I("Ax]f", 573, 583, 479, 495) + t(721, 857, "RUsE", 808, 901) + e(-282, "4W7a", -249, -228, -256) + "ed"]()) {
          if (A(832, 713, 832, 798, "l)f4") === A(711, 686, 628, 670, "4r5v")) throw new vI(A(782, 704, 860, 756, "j7tg") + e(-372, "cpYa", -312, -346, -304) + e(-458, "FN[F", -432, -408, -453) + I("&Zc0", 496, 486, 567, 503) + ".");
          _0x49335f[A(810, 843, 719, 771, "RQ9C") + "ch"]((i) => _0x137d5e[o(552, 504, 557, 500, "YJjv")](i));
        }
        this[o(502, 496, 411, 400, "U71#") + e(-244, "ablz", -141, -279, -248)] = new ui(wx(this[A(591, 657, 657, 632, "yZ!E") + "se"], this[I("4W7a", 569, 508, 579, 653) + e(-354, "Kpry", -402, -311, -338)]())), this[o(461, 532, 621, 573, "YJjv") + o(589, 537, 431, 641, "@Ftg") + "s"](this[A(791, 595, 790, 695, "RUsE") + t(879, 931, "2]sN", 829, 884)][A(773, 765, 706, 769, "2sls") + "s"]), this[I("Ax]f", 680, 600, 778, 678) + t(841, 1032, "Ax]f", 934, 876) + t(866, 909, "E[ZW", 825, 744)](this[A(827, 666, 857, 768, "yZ!E") + I("r(jJ", 615, 720, 570, 507)][I("%pbj", 641, 577, 552, 617) + e(-349, "zCcj", -248, -303, -437)]);
      } else _0x5b2f43[I(")gim", 489, 530, 535, 549)](_0x2b8701);
    } catch (i) {
      if (o(476, 557, 653, 477, "ablz") !== e(-435, "S5X^", -377, -470)) {
        i instanceof vI ? t(855, 891, "2]sN", 929) === I("GiT5", 482, 569) ? _0x1f303f[A(697, 774, 893, 790, "&Zc0") + e(-408, "RnNS", -370, -514)](_0x2480f8) : i[I("RnNS", 530, 499)]() : i instanceof Error && (o(592, 548, 601, 461, "7wO@") !== o(574, 510, 612, 473, "OAw2") ? this[o(631, 544, 511, 624, "x6pa") + e(-297, "G(RL", -299, -297) + "d"] = _0x7194e1 : console[t(818, 899, "yZ!E", 862)](i));
        const C = {};
        C[t(801, 834, "4r5v", 769) + I("C]^7", 509, 417)] = !1, C[e(-337, "2gMj", -306, -325) + "s"] = [], C[o(444, 440, 545, 340, "l)f4") + A(712, 725, 725, 664, "l)f4")] = [], C[t(862, 830, "Pf1Q", 764) + I("(&Ln", 511, 496) + e(-320, "wZCI", -338, -315)] = void (-1 * -7564 + 1 * -1283 + 11 * -571), C[e(-439, "T@wV", -445, -381)] = function() {
        }, C[A(655, 752, 719, 745, "&Zc0") + o(545, 519, 560, 548, "JN3P")] = "", this[I("Kpry", 674, 711) + e(-387, "x6pa", -317, -463)] = new ui(C);
      } else return;
    }
  }
  [fA(273, 202, 64, "S5X^", 165) + DA(565, 563, "2]sN") + DA(811, 739, "$*KY") + "t"]() {
    function I(t, A, e, o, i) {
      return nA(t - 90, A - -1472, e - 159, o);
    }
    return this[I(-687, -593, -495, "2gMj") + I(-455, -444, -507, "2gMj")];
  }
  [fA(279, 163, 158, "T@wV", 193) + DA(583, 560, "zCcj") + ie(1462, 1405, 1494, 1308, "zCcj")]() {
    var i, C;
    function I(n, B, a, Q, E) {
      return ie(n - 439, a - -318, a - 66, Q - 266, n);
    }
    if (!this[e(-87, -152, -67, -61, "l)f4") + "se"])
      if (e(-89, -187, -103, -2, "OAw2") !== e(-250, -95, -173, -273, "&Zc0")) {
        const n = _0x1efec4[A(-395, -392, -330, "%pbj")](this[e(-231, -21, -133, -118, "S5X^") + "se"]);
        return (i = n == null ? void 0 : n[A(-258, -354, -263, "ablz") + A(-313, -283, -250, "JN3P")]) == null ? void 0 : i[e(-344, -337, -279, -277, "@Ftg") + t(719, 610, 638, 611, "iEx!")];
      } else return;
    function t(n, B, a, Q, E) {
      return DA(n - 375, a - -4, E);
    }
    function A(n, B, a, Q, E) {
      return fA(n - 213, B - 404, a - 475, Q, n - -559);
    }
    function e(n, B, a, Q, E) {
      return sA(a - -636, B - 266, a - 240, Q - 251, E);
    }
    function o(n, B, a, Q, E) {
      return fA(n - 425, B - 446, a - 33, B, a - 661);
    }
    try {
      if (A(-328, -409, -396, "#hN]", -372) !== e(-131, -209, -154, -54, "FN[F")) throw new _0x598ee6(o(994, "cpYa", 982, 977, 951) + t(632, 611, 683, 735, "$*KY") + t(729, 620, 651, 566, "3cw1") + I("U71#", 954, 1021, 927, 1097) + "d.");
      {
        const n = JSON[I("yZ!E", 1230, 1146, 1211, 1168)](this[e(-77, -120, -161, -139, "Ax]f") + "se"]);
        return (C = n == null ? void 0 : n[o(1027, "&Zc0", 915, 826, 917) + A(-311, -255, -219, "@Ftg", -324)]) == null ? void 0 : C[I("Ax]f", 1166, 1095, 1129, 1177) + I("Kpry", 1131, 1118, 1168, 1165)];
      }
    } catch (n) {
      if (e(-147, -167, -214, -256, "C]^7") !== e(-259, -310, -247, -243, "hMhL")) _0x1ca4d5[I("$*KY", 825, 939, 871)]();
      else {
        if (n instanceof Error)
          if (e(-162, -192, -102, -116, "%pbj") === I("#hN]", 919, 1016, 1086)) U[I(")gim", 972, 1082, 1009) + I("#mDy", 1013, 923, 999)](n);
          else {
            _0xfb9978[t(504, 467, 553, 477, "h)R9")](I("cpYa", 948, 983, 901) + A(-261, -259, -369, "B5ez") + I("j7tg", 990, 926, 990) + A(-265, -370, -280, "Pf1Q") + A(-333, -262, -444, "hCot")), this[A(-370, -311, -270, "7wO@") + "se"] = void (7 * -945 + -1 * -1883 + 1 * 4732);
            return;
          }
        return;
      }
    }
  }
}
const CI = class CI extends Nx {
  static getInstance() {
    if (!this._instance) {
      const I = new kx();
      this._instance = new CI(I);
    }
    return this._instance;
  }
};
p(CI, "_instance");
let y0 = CI;
const Io = (g, I) => {
  const t = {};
  t.detail = I, document.dispatchEvent(new CustomEvent(g, t));
}, nI = class nI {
  constructor() {
    p(this, "lastDetails", {});
    p(this, "delayedTime", -1 * -8753 + -1 * 7961 + 33 * -24);
  }
  static getInstance() {
    return !this._instance && (this._instance = new nI()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1061 * 3 + -74 * 109 + 4883;
  }
  isDetailChanged(I, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(I, t) {
    this.isDetailChanged(I, t) && Io(I, t);
  }
  dispatchDelayedCustomEventOnChange(I, t, A) {
    const e = performance.now();
    e - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, t), this.delayedTime = e);
  }
};
p(nI, "_instance");
let Gt = nI;
const jt = Gt.getInstance(), rn = (g, I, t = ma) => {
  const A = {};
  A.instructionCode = I;
  const e = A;
  jt.dispatchDelayedCustomEventOnChange(g, e, t);
}, Fx = (g, I) => {
  jt.dispatchCustomEventOnChange(g, I);
}, Rx = (g, I) => {
  const t = {};
  t.size = I;
  const A = t;
  jt.dispatchCustomEventOnChange(g, A);
}, Sx = (g, I, t) => {
  const A = I.confidence < t ? void 0 : I, e = {};
  e.detectedObject = A;
  const o = e;
  jt.dispatchCustomEventOnChange(g, o);
}, Mx = (g, { detection: I, fps: t, image: A, invalidValidators: e, isInCandidateSelection: o }) => {
  const i = {};
  i.image = A, i.data = {}, i.data.detection = I, i.data.fps = t, i.data.isInCandidateSelection = o, i.data.invalidValidators = e, i.data.imageResolution = {}, i.data.imageResolution.width = A.width, i.data.imageResolution.height = A.height;
  const C = i;
  jt.dispatchCustomEventOnChange(g, C);
};
function Lx(g) {
  const I = {};
  I.instruction = g;
  const t = I;
  Io(n0.REQUEST_CAPTURE, t);
}
const w0 = (g, I) => {
  Io(g, I);
}, Jx = (g, I) => {
  const { cameraResolution: t, shouldCameraMirror: A } = I;
  T(() => {
    if (!t) return;
    const e = {};
    e.cameraResolution = t, e.isMirroring = A, Fx(g, e);
  }, [t, A, g]);
}, vx = (g) => g === TC.CONTROL ? !$C() : !0, Yx = (g, I) => {
  const { appState: t, handleAppStateChange: A, handleError: e, isCameraReady: o } = ot(), [i, C] = cA(), n = mA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? vx(g);
  }, [I, i, g, o]);
  T(() => {
    const a = () => {
      t !== ZA.LOADING && A(ZA.RUNNING);
    }, Q = () => {
      C(i === void 0 ? !n : !i);
    }, E = async () => {
      if (I) {
        A(ZA.LOADING);
        try {
          await I.switchCamera(), A(ZA.RUNNING);
        } catch (s) {
          if (s instanceof Error) {
            e(U.fromCameraError(s));
            return;
          }
        }
        C(void 0);
      }
    }, r = (s) => {
      var d;
      switch ((d = s.detail) == null ? void 0 : d["instruction"]) {
        case MI.CONTINUE_DETECTION:
          a();
          break;
        case MI.TOGGLE_MIRROR:
          Q();
          break;
        case MI.SWITCH_CAMERA:
          E();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(g, r), () => {
      document.removeEventListener(g, r);
    };
  }, [t, I, e, i, A, n, g]);
  const B = {};
  return B.shouldCameraMirror = n, B;
};
async function En() {
  return navigator.mediaDevices.enumerateDevices();
}
async function YI() {
  return (await En()).filter((I) => I.kind === "videoinput");
}
function WI(g) {
  g.getTracks().forEach((t) => t.stop());
}
function fi(g) {
  return g.getVideoTracks()[-3910 + 16 * -207 + -46 * -157];
}
const Gg = {};
Gg.width = 1920, Gg.height = 1080, Gg.facingMode = eo.FRONT;
const Wx = Gg;
var YA;
class sn {
  constructor({ defaultVideoConstrains: I = Wx, minCameraShorterSide: t = Xa } = {}) {
    p(this, "options");
    p(this, "availableCameraProperties", []);
    H(this, YA, null);
    const A = {};
    A.defaultVideoConstrains = I, A.minCameraShorterSide = t, this.options = A;
  }
  get mediaStream() {
    return m(this, YA);
  }
  get videoTrack() {
    return m(this, YA) ? fi(m(this, YA)) : void (-1744 * -5 + -4145 + -4575 * 1);
  }
  get isCameraActive() {
    var I;
    return !!((I = m(this, YA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(I);
    WI(t);
  }
  async open(I = {}) {
    xi() && await s0(3 * -1851 + 1987 * -2 + 907 * 11), Y(this, YA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await YI();
    if (I.length <= 6803 * 1 + 1783 * 1 + -8585) return;
    const t = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), e = I.findIndex((C) => C.deviceId === A.deviceId), o = I[e + (-1 * 5359 + -9643 + 5001 * 3)] ?? I[-4 * -1690 + 8983 + 1 * -15743], i = this.getConstraints(t, o);
    this.close(), await this.open(i);
  }
  close() {
    m(this, YA) && (WI(m(this, YA)), Y(this, YA, null));
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
    if (!I.width) throw new U("Video width is undefined");
    if (!I.height) throw new U("Video height is undefined");
    const t = {};
    return t.width = I.width, t.height = I.height, t;
  }
  async getDeviceName() {
    const I = this.getSettings(), t = await En(), A = t.find((e) => e.deviceId === I.deviceId);
    return A == null ? void 0 : A.label;
  }
  async getBestCameraInfo(I) {
    return I === eo.FRONT ? void (-3792 + -21 * 424 + 1 * 12696) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return $C() ? (await YI()).find((A) => A.label.includes("back") && A.label.includes("0")) : void (-32 * -242 + 446 * 5 + -9974);
  }
  async collectAvailableCamerasInfo() {
    const I = await YI();
    for (const t of I) {
      xi() && await s0(-1 * -3467 + -4 * 73 + -2725);
      try {
        const A = {};
        A.deviceId = t.deviceId, A.width = 480;
        const e = {};
        e.video = A;
        const o = await navigator.mediaDevices.getUserMedia(e), i = fi(o);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const C = i.getSettings(), n = { ...C };
        n.deviceName = i.label;
        const B = {};
        B.cameraProperties = n;
        const a = B;
        this.availableCameraProperties.push(a), WI(o);
      } catch (A) {
        A instanceof Error && U.logError(A);
      }
    }
  }
  getConstraints(I, t) {
    const A = { ...this.options.defaultVideoConstrains, ...I };
    A.deviceId = t ? { exact: t.deviceId } : void (-3571 * 1 + 4144 * 1 + -573);
    const e = {};
    return e.video = A, e.audio = !1, e;
  }
  checkVideoTrackSettings() {
    var A;
    const I = (A = this.videoTrack) == null ? void 0 : A.getSettings();
    if (!(I != null && I.height) || !(I != null && I.width))
      throw this.close(), new U("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(I == null ? void 0 : I.width, I == null ? void 0 : I.height) < this.options.minCameraShorterSide)
      throw this.close(), new U("Could not init video because of low camera resolution: " + I.width + "x" + I.height + ".");
  }
}
YA = new WeakMap();
class Ux {
  constructor(I, t) {
    this.videoHandler = I, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(I = {}) {
    await sn.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, t);
    await this.cameraHandler.open(A), Ix() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
  }
  takePhoto() {
    var e;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const I = (e = this.cameraHandler.videoTrack) == null ? void 0 : e.getSettings();
    if (!(I != null && I.width)) throw new U("Cant take photo - video width is undefined");
    if (!(I != null && I.height)) throw new U("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = I.width, t.height = I.height;
    const A = t.getContext("2d");
    if (!A) throw new U("Cant take photo - cant create context");
    return A.drawImage(this.videoHandler.videoElement, 0, 8721 + -4 * -1346 + -14105), { image: t, timestamp: Date.now() };
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
var zA;
class Hx {
  constructor(I) {
    H(this, zA);
    Y(this, zA, I);
  }
  get videoElement() {
    return m(this, zA);
  }
  async play(I) {
    m(this, zA).srcObject = I, await m(this, zA).play();
  }
  stop() {
    m(this, zA).srcObject = null;
  }
  hasSrcObject() {
    return !!m(this, zA).srcObject;
  }
}
zA = new WeakMap();
function Kx(g) {
  const I = eA(null), t = eA(), { handleError: A, setIsCameraReady: e } = ot(), [o, i] = cA(), C = GA((B) => {
    i((a) => ix(B, a));
  }, []);
  T(() => ((async () => {
    if (!I.current) {
      A(new U("Something went wrong during video initialization"));
      return;
    }
    const a = new Hx(I.current), Q = new sn(), E = new Ux(a, Q);
    try {
      const r = {};
      r.facingMode = g, await E.startVideoStream(r);
    } catch (r) {
      if (r instanceof Error) {
        A(U.fromCameraError(r));
        return;
      }
    }
    e(!0), C(E.getCameraResolution()), t.current = E;
  })(), function() {
    t.current && t.current.stopStreaming(), e(!1);
  }), [g, A, e, I, C]);
  const n = {};
  return n.cameraService = t.current, n.cameraResolution = o, n.onCameraResolutionChange = C, n.videoRef = I, n;
}
function Ox(g, I) {
  T(() => {
    if (!g.current) return;
    const t = new ResizeObserver((A) => {
      const [e] = A;
      Rx(I, e.contentRect);
    });
    return t.observe(g.current), () => {
      t.disconnect();
    };
  }, [g, I]);
}
function Tx(g) {
  return te(Math.abs(g));
}
const qx = () => {
  const [g, I] = cA(null), t = eA(new pt(8452 * -1 + 1 * -9276 + 17733));
  function A(o) {
    const { z: i } = o.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(Tx(i));
    const C = te(Re(t.current)), n = {};
    n.z = C, I(n);
  }
  T(() => (window.addEventListener("devicemotion", Cx(A, gx), !0), () => {
    window.removeEventListener("devicemotion", A, !0);
  }), []);
  const e = {};
  return e.acceleration = g, e;
}, oo = (g, I) => {
  const t = eA(I);
  T(() => {
    t.current = I;
  }, [I]), T(() => {
    const A = (e) => t.current(e);
    return document.addEventListener(g, A), () => {
      document.removeEventListener(g, A);
    };
  }, [g]);
};
var Zx = Symbol.for("preact-signals");
function io() {
  if (Te > -7274 + -4 * 829 + 10591)
    Te--;
  else {
    for (var g, I = !1; void (-2 * -1519 + 2642 * -3 + 4888) !== Dt; ) {
      var t = Dt;
      for (Dt = void (5 * -1637 + 2905 + 5280), p0++; void (5275 + 139 * 22 + -8333) !== t; ) {
        var A = t.o;
        if (t.o = void (7846 + -2 * 3923), t.f &= -(13 * -467 + -4916 + 10990 * 1), !(80 * 99 + -47 * -68 + -11108 & t.f) && hn(t)) try {
          t.c();
        } catch (e) {
          !I && (g = e, I = !(-1712 + 4712 * -1 + 6424));
        }
        t = A;
      }
    }
    if (p0 = 115 * -34 + -4765 + 8675, Te--, I) throw g;
  }
}
var O = void (1 * 941 + -19 * -226 + 5235 * -1), Dt = void (7123 + -24 * -259 + -13339), Te = -58 * -67 + -2535 + 7 * -193, p0 = -1 * 9404 + 8922 + 1 * 482, jg = 3919 * 1 + -1 * 241 + 613 * -6;
function cn(g) {
  if (void (1 * -6086 + -8642 + 14728) !== O) {
    var I = g.n;
    if (void (2251 * 3 + -6704 + -49) === I || I.t !== O)
      return I = { i: 0, S: g, p: O.s, n: void (1 * -5774 + -4 * -1171 + 1090), t: O, e: void (11 * -523 + 1168 * 3 + 2249 * 1), x: void 0, r: I }, void (7746 + -2 * 3873) !== O.s && (O.s.n = I), O.s = I, g.n = I, 32 & O.f && g.S(I), I;
    if (-(2014 + -1 * -937 + -2950) === I.i)
      return I.i = -8517 + -501 * -17, void (-4513 + 519 * -7 + 8146) !== I.n && (I.n.p = I.p, void (6410 + -641 * 10) !== I.p && (I.p.n = I.n), I.p = O.s, I.n = void (1263 + 127 * -58 + 17 * 359), O.s.n = I, O.s = I), I;
  }
}
function QA(g) {
  this.v = g, this.i = 18 * -509 + -46 * 131 + 15188, this.n = void (-3 * -2506 + -6765 + -753 * 1), this.t = void (-5561 + -3413 * -1 + 2148);
}
QA.prototype.brand = Zx, QA.prototype.h = function() {
  return !(-5769 + -2339 * 3 + -1 * -12786);
}, QA.prototype.S = function(g) {
  this.t !== g && void (-436 * -3 + -359 * -14 + -6334) === g.e && (g.x = this.t, void (-167 * 43 + 1 * 2663 + 1506 * 3) !== this.t && (this.t.e = g), this.t = g);
}, QA.prototype.U = function(g) {
  if (void (208 * 46 + 525 * 11 + -15343) !== this.t) {
    var I = g.e, t = g.x;
    I !== void 0 && (I.x = t, g.e = void (4169 + 172 * -34 + -23 * -73)), void (23 * 265 + 7106 + -13201) !== t && (t.e = I, g.x = void (8444 + 723 * 9 + -14951)), g === this.t && (this.t = t);
  }
}, QA.prototype.subscribe = function(g) {
  var I = this;
  return no(function() {
    var t = I.value, A = O;
    O = void (822 + -4 * 1911 + 2 * 3411);
    try {
      g(t);
    } finally {
      O = A;
    }
  });
}, QA.prototype.valueOf = function() {
  return this.value;
}, QA.prototype.toString = function() {
  return this.value + "";
}, QA.prototype.toJSON = function() {
  return this.value;
}, QA.prototype.peek = function() {
  var g = O;
  O = void (-3 * 989 + 5083 + -2 * 1058);
  try {
    return this.value;
  } finally {
    O = g;
  }
}, Object.defineProperty(QA.prototype, "value", { get: function() {
  var g = cn(this);
  return void (-3547 + 27 * 167 + -2 * 481) !== g && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if (p0 > -2 * 541 + 1540 + -358) throw new Error("Cycle detected");
    this.v = g, this.i++, jg++, Te++;
    try {
      for (var I = this.t; void (119 * 3 + -6932 + -1 * -6575) !== I; I = I.x) I.t.N();
    } finally {
      io();
    }
  }
} });
function dn(g) {
  return new QA(g);
}
function hn(g) {
  for (var I = g.s; void (-2859 * -3 + 4871 * -2 + 1165) !== I; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !(-33 * 37 + -1832 + 1 * 3053);
  return !(13719 + 722 * -19);
}
function ln(g) {
  for (var I = g.s; void (5677 + -115 * 51 + 188) !== I; I = I.n) {
    var t = I.S.n;
    if (void (106 * -73 + -6662 * 1 + -288 * -50) !== t && (I.r = t), I.S.n = I, I.i = -(113 * 23 + 16 * -129 + 3 * -178), void (-932 * 1 + 1 * -956 + 2 * 944) === I.n) {
      g.s = I;
      break;
    }
  }
}
function un(g) {
  for (var I = g.s, t = void (-4 * 923 + 506 + 3186); void (-1 * 5660 + 4455 + -1 * -1205) !== I; ) {
    var A = I.p;
    -(-11158 + -11159 * -1) === I.i ? (I.S.U(I), void (9677 * -1 + 7595 + 2082) !== A && (A.n = I.n), void (-6 * -38 + -79 + -149 * 1) !== I.n && (I.n.p = A)) : t = I, I.S.n = I.r, void (-1321 * -7 + 3518 + -12765) !== I.r && (I.r = void 0), I = A;
  }
  g.s = t;
}
function He(g) {
  QA.call(this, void (1 * -307 + 7207 + 46 * -150)), this.x = g, this.s = void (-133 * -49 + 6019 + 1567 * -8), this.g = jg - 1, this.f = -703 * 8 + 9030 + -21 * 162;
}
(He.prototype = new QA()).h = function() {
  if (this.f &= -(-1 * -7345 + -2861 * 1 + -4481), 49 * 161 + 1 * 9637 + -17525 & this.f) return !(-2288 + 1559 * -4 + 8525);
  if (-8201 * -1 + -6550 * 1 + -1619 == (18 * -350 + -5693 + 12029 & this.f)) return !(-4 * -1757 + -1680 + -5348);
  if (this.f &= -(-1 * 886 + 1578 + -687), this.g === jg) return !(1 * 5499 + -595 + -1 * 4904);
  if (this.g = jg, this.f |= 101 * 17 + 2970 + -213 * 22, this.i > 4567 + 4567 * -1 && !hn(this)) return this.f &= -(3412 + -30 * 97 + -50 * 10), !(-21 * -6 + 9037 + -7 * 1309);
  var g = O;
  try {
    ln(this), O = this;
    var I = this.x();
    (-25 * 305 + 48 * -20 + 61 * 141 & this.f || this.v !== I || -565 * 10 + 6959 * 1 + -1309 === this.i) && (this.v = I, this.f &= -(-1097 * -7 + -6679 * 1 + -1 * 983), this.i++);
  } catch (t) {
    this.v = t, this.f |= -133 * -5 + 3579 + -4228, this.i++;
  }
  return O = g, un(this), this.f &= -(-7479 + -1 * -7481), !(-1 * 2065 + 7053 * 1 + -2494 * 2);
}, He.prototype.S = function(g) {
  if (void (5454 + -202 * 27) === this.t) {
    this.f |= 17 * -39 + -229 * 37 + 9172;
    for (var I = this.s; I !== void 0; I = I.n) I.S.S(I);
  }
  QA.prototype.S.call(this, g);
}, He.prototype.U = function(g) {
  if (void (7529 + -1648 * -6 + 17417 * -1) !== this.t && (QA.prototype.U.call(this, g), void (4475 + -5674 * -1 + 17 * -597) === this.t)) {
    this.f &= -(-10 * 162 + -47 * -114 + -3705);
    for (var I = this.s; void (-2665 + 13 * 205) !== I; I = I.n) I.S.U(I);
  }
}, He.prototype.N = function() {
  if (!(227 * -7 + -6662 + 8253 * 1 & this.f)) {
    this.f |= 6;
    for (var g = this.t; void (-5 * 233 + -4312 + -1 * -5477) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(He.prototype, "value", { get: function() {
  if (3 * -2540 + 1039 + 6582 & this.f) throw new Error("Cycle detected");
  var g = cn(this);
  if (this.h(), void (-1 * 4634 + -961 * -4 + -2 * -395) !== g && (g.i = this.i), -1134 * -3 + 1 * -8273 + 3 * 1629 & this.f) throw this.v;
  return this.v;
} });
function Px(g) {
  return new He(g);
}
function fn(g) {
  var I = g.u;
  if (g.u = void 0, typeof I == "function") {
    Te++;
    var t = O;
    O = void (-5889 + -3713 * -2 + -1537 * 1);
    try {
      I();
    } catch (A) {
      throw g.f &= -(8105 + -6640 * 1 + -1463), g.f |= -6437 * -1 + 179 * 13 + -8756, Co(g), A;
    } finally {
      O = t, io();
    }
  }
}
function Co(g) {
  for (var I = g.s; void (-2341 + 63 * 1 + 2278) !== I; I = I.n) I.S.U(I);
  g.x = void (9123 + 2029 * 1 + -11152), g.s = void (-7446 + -17 * -438), fn(g);
}
function jx(g) {
  if (O !== this) throw new Error("Out-of-order effect");
  un(this), O = g, this.f &= -(3016 * 2 + -1829 + -4201 * 1), -3336 + -3443 * 2 + 3 * 3410 & this.f && Co(this), io();
}
function dt(g) {
  this.x = g, this.u = void (-7772 + 19 * -102 + -1 * -9710), this.s = void (-2 * -2947 + -2352 + 23 * -154), this.o = void 0, this.f = -21 * 413 + -3805 * -1 + 245 * 20;
}
dt.prototype.c = function() {
  var g = this.S();
  try {
    if (-4615 + 3 * 1541 & this.f || void (-1422 + 1 * -5658 + -10 * -708) === this.x) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, dt.prototype.S = function() {
  if (1 * 8447 + 2762 + -1 * 11208 & this.f) throw new Error("Cycle detected");
  this.f |= -195 * 5 + -7652 + -3 * -2876, this.f &= -(4573 + 1 * -7135 + 2571), fn(this), ln(this), Te++;
  var g = O;
  return O = this, jx.bind(this, g);
}, dt.prototype.N = function() {
  !(-245 + -217 * 4 + 1115 & this.f) && (this.f |= 1502 * 4 + 149 + 1231 * -5, this.o = Dt, Dt = this);
}, dt.prototype.d = function() {
  this.f |= 8, -2333 * -2 + -7806 + 349 * 9 & this.f || Co(this);
};
function no(g) {
  var I = new dt(g);
  try {
    I.c();
  } catch (t) {
    throw I.d(), t;
  }
  return I.d.bind(I);
}
var UI;
function Oe(g, I) {
  b[g] = I.bind(null, b[g] || function() {
  });
}
function Qg(g) {
  UI && UI(), UI = g && g.S();
}
function Dn(g) {
  var I = this, t = g.data, A = qe(t);
  A.value = t;
  var e = mA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 4;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !Zi(e.peek()) && 6729 + -864 * -7 + -1 * 12774 === ((i = I.base) == null ? void 0 : i.nodeType) ? I.base.data = e.peek() : (I.__$f |= 3245 + -5225 * -1 + -8469 * 1, I.setState({}));
    }, Px(function() {
      var i = A.value.value;
      return 1056 + 652 * -13 + 7420 === i ? 7529 + 7529 * -1 : !(7534 + 341 * -11 + -3783) === i ? "" : i || "";
    });
  }, []);
  return e.value;
}
Dn.displayName = "_st";
var m0 = {};
m0.configurable = !(-10 * -467 + -4059 + -47 * 13), m0.value = void (6362 * -1 + 835 * 1 + -1 * -5527);
var G0 = {};
G0.configurable = !(22 * 235 + -3274 + 948 * -2), G0.value = Dn;
var k0 = {};
k0.configurable = !(1 * -4519 + -13 * -247 + 218 * 6), k0.get = function() {
  var g = {};
  return g.data = this, g;
};
var b0 = {};
b0.configurable = !0, b0.value = 1;
var Qt = {};
Qt.constructor = m0, Qt.type = G0, Qt.props = k0, Qt.__b = b0, Object.defineProperties(QA.prototype, Qt), Oe("__b", function(g, I) {
  if (typeof I.type == "string") {
    var t, A = I.props;
    for (var e in A) if (e !== "children") {
      var o = A[e];
      o instanceof QA && (t || (I.__np = t = {}), t[e] = o, A[e] = o.peek());
    }
  }
  g(I);
}), Oe("__r", function(g, I) {
  Qg();
  var t, A = I.__c;
  A && (A.__$f &= -(-129 * -31 + 1783 + -289 * 20), (t = A.__$u) === void 0 && (A.__$u = t = function(e) {
    var o;
    return no(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= 3938 + 176 * 28 + -8865, A.setState({});
    }, o;
  }())), Qg(t), g(I);
}), Oe("__e", function(g, I, t, A) {
  Qg(), g(I, t, A);
}), Oe("diffed", function(g, I) {
  Qg();
  var t;
  if (typeof I.type == "string" && (t = I.__e)) {
    var A = I.__np, e = I.props;
    if (A) {
      var o = t.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (243 + 9 * -27) !== C && !(i in A) && (C.d(), o[i] = void (4778 + -1 * 2305 + -2473));
      }
      else t.U = o = {};
      for (var n in A) {
        var B = o[n], a = A[n];
        void (-2765 + -37 * 10 + 3135) === B ? (B = Vx(t, n, a, e), o[n] = B) : B.o(a, e);
      }
    }
  }
  g(I);
});
function Vx(g, I, t, A) {
  var e = I in g && g.ownerSVGElement === void 0, o = dn(t);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: no(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, e ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
Oe("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var t = I.__e;
    if (t) {
      var A = t.U;
      if (A) {
        t.U = void (53 * 112 + -7184 + 1248);
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
      C && (i.__$u = void (-6133 * -1 + 23 * 292 + 1 * -12849), C.d());
    }
  }
  g(I);
}), Oe("__h", function(g, I, t, A) {
  (A < -13008 + -1 * -13011 || -2 * -1575 + -10 * -625 + -1 * 9391 === A) && (I.__$f |= 8435 + 1409 * 7 + -2287 * 8), g(I, t, A);
}), SA.prototype.shouldComponentUpdate = function(g, I) {
  var t = this.__$u;
  if (!(t && void (-7417 * -1 + -7403 + -14) !== t.s || 4 & this.__$f)) return !(-1892 + -22 * -86);
  if (67 * 3 + 628 * 8 + 2611 * -2 & this.__$f) return !(-6084 + 5 * 659 + 2789);
  for (var A in I) return !0;
  for (var e in g) if (e !== "__source" && g[e] !== this.props[e]) return !(-1 * 4101 + 1 * -4531 + -26 * -332);
  for (var o in this.props) if (!(o in g)) return !0;
  return !(-1786 + 1 * 1787);
};
function qe(g) {
  return mA(function() {
    return dn(g);
  }, []);
}
const _x = async () => WebAssembly.validate(new Uint8Array([1 * -1942 + -7539 + 9481, 31 * -233 + -1343 * -2 + -2317 * -2, -1953 + -6191 * 1 + 8259, 109, 80 * 43 + 2 * -3934 + -103 * -43, 2 * -712 + -3958 + 5382, 4337 + -1 * 4337, -526 * -3 + 1925 + -3503 * 1, 7384 + 961 * -4 + -3539, -201 * 5 + 1 * -8078 + 8 * 1136, -645 * -2 + 1066 + -2355, -1 * 7723 + 3 * 1166 + -29 * -149, 1 * 6685 + 8545 + 2 * -7615, 1 * -2269 + 3 * 1834 + 32 * -101, 2491 * -3 + 626 * 4 + 2 * 2546, 5291 + -2 * 3308 + 1328, -1 * -1954 + -181 + -1771, -19 * -1 + -9917 * 1 + -9899 * -1, -5545 * 1 + -1 * -7351 + -301 * 6, -2715 + 545 * 5, 10, 2511 + -1 * 2510, -5547 + -55 * -101, 0, 3943 + 3878 * -1, -257 * 1 + 8362 + -8105, 761 * 1 + 7576 + -8084, 709 * -3 + -4201 + -1 * -6343, -61 * -147 + -9751 + 1037, -19 * -397 + 9549 * -1 + 8 * 263, 11]));
function Xx() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(6852 * -1 + 5787 + -1081 * -1);
}
function zx() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = Xx();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function $x(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const N0 = {};
N0.label = ">1m", N0.time = 60;
const F0 = {};
F0.label = ">45", F0.time = 45;
const R0 = {};
R0.label = ">30", R0.time = 30;
function Di(g, I = [N0, F0, R0]) {
  const t = I.sort((A, e) => e.time - A.time);
  for (const A of t)
    if (g > A.time) return A.label;
  return "" + g;
}
const yi = (g) => Math.round(g / 500) * 500 / (-5301 + -6301 * -1), wi = (g) => g ? g <= -6218 + -151 * -52 + -1 * 1633 ? Math.round(g * (-5709 + 173 * -28 + -10573 * -1)) / (2443 * 2 + 4399 * 1 + -9265) : Math.round(g / 50) * (12807 + -1 * 12757) : 0, Ar = (g) => Math.round(g * (3 * 272 + 13 * -331 + -1163 * -3)) / (-618 * 10 + -1022 * -1 + -645 * -8);
async function yn() {
  return await _x() ? ri.SIMD : ri.NO_SIMD;
}
var Nt, BI;
class wn {
  constructor(I) {
    H(this, Nt, !0);
    H(this, BI, Date.now());
    p(this, "analytics");
    p(this, "samVersion");
    p(this, "sessionToken");
    p(this, "onDetectionCallback");
    p(this, "onCaptureCallback");
    p(this, "createProtoMessage");
    p(this, "fpsOfAllImages", new pt(339 * 12 + 5342 + -9380));
    p(this, "cameraService");
    p(this, "imageProcessor");
    this.cameraService = I.cameraService, this.imageProcessor = I.imageProcessor, this.analytics = I.analytics, this.samVersion = I.samVersion, this.sessionToken = I.sessionToken, this.createProtoMessage = I.createProtoMessage, this.onDetectionCallback = I.onDetectionCallback, this.onCaptureCallback = I.onCaptureCallback;
  }
  async run() {
    for (; m(this, Nt); )
      await this.iterate();
    return this;
  }
  stop() {
    Y(this, Nt, !1);
  }
  async trackCaptureProcess(I, t) {
    var i;
    const A = Date.now(), e = Re(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: e, captureProcessDurationInMs: A - m(this, BI), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await yn() });
  }
  onDetection(I, t) {
    this.onDetectionCallback({ ...I, avgFps: te(Re(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: t, detection: A }) {
    const e = {};
    e.width = t.width, e.height = t.height;
    const o = e, i = await ax(t), C = await this.cameraService.getCameraProperties(), n = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, B = {};
    B.sessionToken = this.sessionToken, B.web = n;
    const a = B, Q = await this.createProtoMessage(i, a), E = {};
    E.detection = A, E.imageResolution = o;
    const r = {};
    r.image = i, r.data = E;
    const s = r;
    this.stop();
    const d = {};
    d.imageData = s, d.protoMessage = Q, d.webMetadata = n, d.candidateSelectionImages = I, this.onCaptureCallback(d);
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
    await s0(Math.max(Qi.max - I, Qi.min));
  }
}
Nt = new WeakMap(), BI = new WeakMap();
class er extends wn {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, instructionCodeMap: e, ...o }) {
    super(o);
    p(this, "candidateSelectionTime", 0);
    p(this, "candidatesSelectionFramesCount", -1710 + 342 * 5);
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
      throw A instanceof Error ? U.fromCameraError(A) : U.fromError(A);
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
    this.candidateSelectionTime === 0 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= LI.minFrames ? t > LI.minDuration : t > LI.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: A } = this.bestImage || {};
    if (A && t) this.trackCaptureProcess(t, A), await this.onCapture({ canvasImage: A, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new U("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: A }) {
    const e = this.getDetectionEndTime(A.timestamp), o = te(1e3 / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, n = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), B = {};
    B.isNewDetectionValid = t.isValid, B.newInvalidInstruction = n[-1 * 9893 + -2 * -1427 + 1 * 7039];
    const a = this.getInstructionCode(B), Q = {};
    return Q.detection = t.detection, Q.instructionCode = a, Q.invalidValidators = n, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: e, fps: o, avgFps: te(Re(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: A }) {
    var e;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (e = this.lastImage) != null && e.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, A) {
    return A.sharpness > t.sharpness;
  }
}
var Be, De;
class tr extends wn {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, ...e }) {
    super(e);
    H(this, Be, void (-2313 + 2313 * 1));
    H(this, De);
    p(this, "fallbackInstruction");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var A, e;
    return (A = t.detail) != null && A["instruction"] ? Object.values(Dg).includes((e = t.detail) == null ? void 0 : e["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    Y(this, De, (t) => {
      var A;
      this.isRequestCaptureEventValid(t) && Y(this, Be, (A = t.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(n0.REQUEST_CAPTURE, m(this, De));
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
    return m(this, Be) ? m(this, Be) === Dg.FIRST_FRAME ? !0 : m(this, Be) === Dg.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (A) {
      throw A instanceof Error ? U.fromCameraError(A) : U.fromError(A);
    }
  }
  async onCaptureDone(t, A) {
    this.trackCaptureProcess(A, t);
    const e = {};
    e.canvasImage = t, e.detection = A, e.candidateSelectionImages = [], await this.onCapture(e), Y(this, Be, void 0), this.imageProcessor.reset();
  }
  getDetectionDetails(t, A) {
    const e = this.getDetectionEndTime(t.timestamp), o = te((-4910 + 1 * 8337 + -2427) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = t.image.width, i.height = t.image.height;
    const C = i, n = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), B = this.getInstructionCode(n[-122 * -68 + 6774 + 2 * -7535]), a = {};
    return a.detection = A.detection, a.instructionCode = B, a.invalidValidators = n, a.isInCandidateSelection = !1, { processedImage: a, detectionTime: e, fps: o, avgFps: te(Re(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), m(this, De) && document.removeEventListener(n0.REQUEST_CAPTURE, m(this, De));
  }
}
Be = new WeakMap(), De = new WeakMap();
function gr({ captureMode: g, ...I }) {
  return g === Mg.AUTO_CAPTURE ? new er(I) : new tr(I);
}
function Ir({ cameraResolution: g, cameraService: I, customEvent: t }) {
  const { shouldCameraMirror: A } = Yx(t.CONTROL, I), e = {};
  e.cameraResolution = g, e.shouldCameraMirror = A, Jx(t.CAMERA_PROPS_CHANGED, e), T(() => () => {
    Gt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function or({ cameraFacing: g, captureMode: I, checkToInstructionCodeMap: t, controller: A, createProtoMessage: e, customEvent: o, fallbackInstruction: i, instructionCodeMap: C, onCapture: n, onDetection: B, sessionToken: a }) {
  const { appState: Q, handleAppStateChange: E } = ot(), { sunfish: r } = it(), { analytics: s } = to(), { cameraResolution: d, cameraService: h, onCameraResolutionChange: x, videoRef: u } = Kx(g), w = {};
  w.cameraResolution = d, w.cameraService = h, w.customEvent = o;
  const { shouldCameraMirror: R } = Ir(w), S = qe(void (1 * -6841 + -6742 + 13583)), M = GA((L) => {
    E(ZA.WAITING), n(L);
  }, [n, E]), y = GA((L, j) => {
    x(L.resolution), S.value = L, B(L, j);
  }, [B, S, x]);
  T(() => {
    h != null && h["isStreaming"] && (A != null && A["isDetectorInitialized"]) && r && E(ZA.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], A == null ? void 0 : A["isDetectorInitialized"], E, r]), T(() => {
    if (Q !== ZA.RUNNING) return;
    if (!h || !A) throw new U("Cannot start detection");
    const L = {};
    L.captureMode = I, L.analytics = s, L.cameraService = h, L.imageProcessor = A.imageProcessor, L.fallbackInstruction = i, L.instructionCodeMap = C, L.checkToInstructionCodeMap = t, L.sessionToken = a, L.samVersion = A.samVersion, L.createProtoMessage = e, L.onCaptureCallback = M, L.onDetectionCallback = y;
    const j = gr(L);
    return A.runDetectionLoop(j), () => {
      A.stopDetectionLoop();
    };
  }, [Q, A, h, M, y, a, S, s, e, C, t, i, I]);
  const q = {};
  return q.videoRef = u, q.cameraResolution = d, q.detectionDetails = S, q.shouldCameraMirror = R, q;
}
function pn({ callback: g, delay: I, skip: t = !1 }) {
  const [A, e] = cA(!1), o = eA(g), i = eA(null);
  T(() => {
    o.current = g;
  }, [g]);
  const C = GA(() => {
    i.current && (clearTimeout(i.current), i.current = null), e(!1);
  }, []), n = GA(() => {
    t || (C(), e(!0), i.current = setTimeout(() => {
      o.current(), e(!1);
    }, I));
  }, [I, C, t]);
  T(() => {
    n();
  }, [I, C, n]);
  const B = {};
  return B.isActive = A, B.reset = n, B.clear = C, B;
}
function mn(g) {
  const I = eA([]);
  return T(() => {
    I.current.forEach((t) => t()), I.current = [];
  }, [g]), (t) => {
    I.current.push(t);
  };
}
function ir(g, I) {
  if (!g) return I;
  const { detectionRecord: t, hashedDetectedImages: A } = g;
  I.hashedDetectedImages && (A == null || A.push(...I.hashedDetectedImages)), I.detectionRecord && (t == null || t.push(...I.detectionRecord));
  const e = { ...g };
  return e.hashedDetectedImages = A, e.detectionRecord = t, e;
}
function Cr() {
  const g = qe(null);
  function I({ cameraProperties: A }) {
    g.value = ir(g.value, A);
  }
  const t = {};
  return t.cameraProperties = g, t.mergeCameraProperties = I, t;
}
const Gn = Zt(null), Bo = () => {
  const g = Le(Gn);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, nr = ({
  assetsDirectoryPath: g,
  cameraFacing: I,
  captureMode: t,
  onPhotoTaken: A,
  sessionToken: e,
  thresholds: o
}) => {
  var i, C, n;
  return {
    onPhotoTaken: A,
    cameraFacing: I ?? eo.FRONT,
    captureMode: t ?? Mg.AUTO_CAPTURE,
    assetsDirectoryPath: gn(g),
    sessionToken: e,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? Ha,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? Ka,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? Oa,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? Za,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? Pa,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? ja,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? Ta,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? Va,
      mouth: {
        confidence: ((i = o == null ? void 0 : o.mouth) == null ? void 0 : i.confidence) ?? qa,
        status: {
          min: ((C = o == null ? void 0 : o.mouth) == null ? void 0 : C.status.min) ?? ni.min,
          max: ((n = o == null ? void 0 : o.mouth) == null ? void 0 : n.status.max) ?? ni.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: Bi
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: Bi
      }
    }
  };
}, Br = ({
  cameraOptions: g,
  children: I
}) => {
  const t = mA(() => nr(g), [g]);
  return /* @__PURE__ */ D(Gn.Provider, { value: t, children: I });
};
function Qr({ onFaceTrackingLost: g, skipOutsideOfCandidateSelection: I }) {
  const t = eA(g);
  T(() => {
    t.current = g;
  }, [g]);
  const A = GA((o) => {
    if (!o.detail) return;
    const { data: i } = o.detail;
    I && !i.isInCandidateSelection || i.invalidValidators.includes(gA.FACE_NOT_PRESENT) && t.current();
  }, [I]), e = {};
  return e.handleFaceDetection = A, e;
}
function ar(g) {
  return function(t) {
    const { handleFaceDetection: A } = g(t);
    oo(qA.FACE_DETECTION, A);
  };
}
const xr = ({ children: g }) => {
  const I = eA(null);
  return Ox(I, qA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(Ba, { ref: I, children: g });
}, Qo = -471 * 15 + 7964 + 29 * -31 + 0.5;
function rr() {
  const g = {};
  g.max = Qo;
  const I = {};
  I.confidence = 0.3, I.status = g;
  const t = {};
  return t.mouth = I, t;
}
const Er = 9784 + 2186 * -4 + -1040 + 0.4;
function sr(g) {
  const I = {};
  I.min = Er + g;
  const t = {};
  t.confidence = 0.3, t.status = I;
  const A = {};
  return A.brightnessHighThreshold = 1, A.brightnessLowThreshold = -(-8e3 + -319 * -7 + 5768), A.sharpnessThreshold = -(7820 + -2 * -4317 + -16453), A.outOfBoundsThreshold = -(-2581 + -1 * 5443 + 107 * 75), A.minFaceSizeRatio = 0.1, A.mouth = t, A;
}
const cr = 1e4, pi = -6728 + -232 * 12 + 9527, dr = (g, I) => ({ ...g, leftEye: { ...g.leftEye, center: We(g.leftEye.center, I) }, rightEye: { ...g.rightEye, center: We(g.rightEye.center, I) }, mouth: { ...g.mouth, center: We(g.mouth.center, I) }, topLeft: We(g.topLeft, I), bottomRight: We(g.bottomRight, I), faceCenter: We(g.faceCenter, I) }), kn = (g, I) => {
  const { faceCenter: t, faceSize: A } = g, e = Ma(A, I), o = {};
  o.x = t.x, o.y = t.y - e;
  const i = {};
  i.x = t.x + e, i.y = t.y;
  const C = {};
  C.x = t.x, C.y = t.y + e;
  const n = {};
  n.x = t.x - e, n.y = t.y;
  const B = {};
  return B.top = o, B.right = i, B.bottom = C, B.left = n, An(B);
}, hr = (g, I) => {
  const { bottomRight: t, faceCenter: A, topLeft: e } = I, o = {
    topLeft: e,
    width: t.x - e.x,
    height: t.y - e.y
  };
  In(g, o, "rgba(255, 0, 0, 0.3)", !0), ut(g, A, "lime");
}, lr = (g, I, t) => {
  const A = kn(I, t);
  Object.values(A).map((e) => ut(g, e, "orange"));
};
function ur({ cameraResolution: g, detectionDetails: I, isImageMirror: t }) {
  const { thresholds: A } = Bo(), { redfin: e } = it(), o = eA(null);
  if (T(() => {
    if (!o.current)
      return;
    o.current.width = g.width, o.current.height = g.height, wa(o.current);
    const d = Yg(g), h = on(
      g,
      A.outOfBoundsThreshold,
      d
    ), x = Ra(g);
    I.value && (hr(o.current, I.value.processedImage.detection), lr(
      o.current,
      I.value.processedImage.detection,
      g
    ), JI(o.current, d, "lime"), JI(o.current, h, "yellow"), JI(o.current, x, "blue"), ut(o.current, I.value.processedImage.detection.leftEye.center, "cyan"), ut(o.current, I.value.processedImage.detection.rightEye.center, "cyan"), ut(o.current, I.value.processedImage.detection.mouth.center, "cyan"));
  }, [g, A, I.value]), !I.value)
    return null;
  const {
    avgFps: i,
    detectionTime: C,
    fps: n,
    processedImage: { detection: B, instructionCode: a, invalidValidators: Q },
    resolution: E,
    samVersion: r
  } = I.value, s = {
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
    Resolution: E,
    "Component version": "7.0.1"
  };
  return r && (s["SAM version"] = r), Q.length > 0 && (s["Invalid validators"] = Q), /* @__PURE__ */ D(
    fa,
    {
      ref: o,
      cameraResolution: g,
      detectionDetails: s,
      isImageMirror: t
    }
  );
}
function fr(g) {
  return /* @__PURE__ */ D("rect", { fill: "#000", ...g, rx: "50%" });
}
function Dr(g, I) {
  const [t, A] = cA(!1), e = () => A((C) => !C), o = "" + t;
  tt(() => {
    function C() {
      if (!g.current) return;
      const Q = new MutationObserver(() => {
        e();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, Q.observe(g.current, E), Q;
    }
    function n() {
      var r;
      if (!((r = g.current) != null && r["parentElement"])) return;
      const Q = new MutationObserver((s) => {
        s.find((h) => {
          for (const x of h.removedNodes)
            if (x !== (I == null ? void 0 : I.current) && x === g.current)
              return !0;
        }) && e(), s.forEach((h) => {
          h.addedNodes.forEach((x) => {
            var u;
            x !== (I == null ? void 0 : I.current) && ((u = x.parentElement) == null || u.removeChild(x));
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
const yr = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function wr({ cutOut: g, height: I, ignoreElement: t, width: A }) {
  const e = eA(null), { key: o } = Dr(e, t);
  return /* @__PURE__ */ D("div", { ref: e, style: yr, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${A} ${I}`, children: [
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
function pr({ fullOverlay: g, ignoreElement: I, resolution: t }) {
  const A = Sa(t), e = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    wr,
    {
      cutOut: g || /* @__PURE__ */ D(fr, { height: e, width: o, x: i, y: C }),
      height: t.height,
      ignoreElement: I,
      width: t.width
    }
  );
}
function mr({ cameraResolution: g, children: I, detectionDetails: t, shouldMirror: A }) {
  const { redfin: e } = it(), { appState: o, freemiumOverlayState: i } = ot(), C = eA(null), n = i !== Ug.HIDDEN && e !== h0.Higher && g, B = i === Ug.VISIBLE, a = g && o === ZA.RUNNING;
  return /* @__PURE__ */ D(LA, { children: [
    n && /* @__PURE__ */ D(
      pr,
      {
        fullOverlay: B,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ D("div", { ref: C, children: /* @__PURE__ */ D(
      ur,
      {
        cameraResolution: g,
        detectionDetails: t,
        isImageMirror: A
      }
    ) })
  ] });
}
const Gr = (g, I) => {
  if (Bx()) {
    const t = {};
    t.candidateSelectionImages = I;
    const A = t;
    Gt.getInstance().dispatchCustomEventOnChange(g, A);
  }
};
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bn = {}, mi = {}, kr = br;
function br(g, I) {
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
var Nn = {};
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
    for (var B = null, a = [], Q = 0, E = 0, r; C < n; ) {
      var s = i[C++];
      switch (E) {
        case 0:
          a[Q++] = t[s >> 2], r = (s & 3) << 4, E = 1;
          break;
        case 1:
          a[Q++] = t[r | s >> 4], r = (s & 15) << 2, E = 2;
          break;
        case 2:
          a[Q++] = t[r | s >> 6], a[Q++] = t[s & 63], E = 0;
          break;
      }
      Q > 8191 && ((B || (B = [])).push(String.fromCharCode.apply(String, a)), Q = 0);
    }
    return E && (a[Q++] = t[r], a[Q++] = 61, E === 1 && (a[Q++] = 61)), B ? (Q && B.push(String.fromCharCode.apply(String, a.slice(0, Q))), B.join("")) : String.fromCharCode.apply(String, a.slice(0, Q));
  };
  var o = "invalid encoding";
  I.decode = function(i, C, n) {
    for (var B = n, a = 0, Q, E = 0; E < i.length; ) {
      var r = i.charCodeAt(E++);
      if (r === 61 && a > 1)
        break;
      if ((r = A[r]) === void 0)
        throw Error(o);
      switch (a) {
        case 0:
          Q = r, a = 1;
          break;
        case 1:
          C[n++] = Q << 2 | (r & 48) >> 4, Q = r, a = 2;
          break;
        case 2:
          C[n++] = (Q & 15) << 4 | (r & 60) >> 2, Q = r, a = 3;
          break;
        case 3:
          C[n++] = (Q & 3) << 6 | r, a = 0;
          break;
      }
    }
    if (a === 1)
      throw Error(o);
    return n - B;
  }, I.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(Nn);
var Nr = uI;
function uI() {
  this._listeners = {};
}
uI.prototype.on = function(g, I, t) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: t || this
  }), this;
};
uI.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var t = this._listeners[g], A = 0; A < t.length; )
      t[A].fn === I ? t.splice(A, 1) : ++A;
  return this;
};
uI.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var t = [], A = 1; A < arguments.length; )
      t.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, t);
  }
  return this;
};
var Fr = Gi(Gi);
function Gi(g) {
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
    g.writeFloatLE = I.bind(null, ki), g.writeFloatBE = I.bind(null, bi);
    function t(A, e, o) {
      var i = A(e, o), C = (i >> 31) * 2 + 1, n = i >>> 23 & 255, B = i & 8388607;
      return n === 255 ? B ? NaN : C * (1 / 0) : n === 0 ? C * 1401298464324817e-60 * B : C * Math.pow(2, n - 150) * (B + 8388608);
    }
    g.readFloatLE = t.bind(null, Ni), g.readFloatBE = t.bind(null, Fi);
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
    g.writeDoubleLE = I.bind(null, ki, 0, 4), g.writeDoubleBE = I.bind(null, bi, 4, 0);
    function t(A, e, o, i, C) {
      var n = A(i, C + e), B = A(i, C + o), a = (B >> 31) * 2 + 1, Q = B >>> 20 & 2047, E = 4294967296 * (B & 1048575) + n;
      return Q === 2047 ? E ? NaN : a * (1 / 0) : Q === 0 ? a * 5e-324 * E : a * Math.pow(2, Q - 1075) * (E + 4503599627370496);
    }
    g.readDoubleLE = t.bind(null, Ni, 0, 4), g.readDoubleBE = t.bind(null, Fi, 4, 0);
  }(), g;
}
function ki(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
function bi(g, I, t) {
  I[t] = g >>> 24, I[t + 1] = g >>> 16 & 255, I[t + 2] = g >>> 8 & 255, I[t + 3] = g & 255;
}
function Ni(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function Fi(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function Ri(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Rr = Sr;
function Sr(g) {
  try {
    if (typeof Ri != "function")
      return null;
    var I = Ri(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var Fn = {};
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
})(Fn);
var Mr = Lr;
function Lr(g, I, t) {
  var A = t || 8192, e = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > e)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var n = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), n;
  };
}
var HI, Si;
function Jr() {
  if (Si)
    return HI;
  Si = 1, HI = I;
  var g = Je();
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
  }, HI;
}
var Mi;
function Je() {
  return Mi || (Mi = 1, function(g) {
    var I = g;
    I.asPromise = kr, I.base64 = Nn, I.EventEmitter = Nr, I.float = Fr, I.inquire = Rr, I.utf8 = Fn, I.pool = Mr, I.LongBits = Jr(), I.isNode = !!(typeof ce < "u" && ce && ce.process && ce.process.versions && ce.process.versions.node), I.global = I.isNode && ce || typeof window < "u" && window || typeof self < "u" && self || ce, I.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(mi)), mi;
}
var Rn = J, MA = Je(), S0, fI = MA.LongBits, Li = MA.base64, Ji = MA.utf8;
function Vt(g, I, t) {
  this.fn = g, this.len = I, this.next = void 0, this.val = t;
}
function ao() {
}
function vr(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function J() {
  this.len = 0, this.head = new Vt(ao, 0, 0), this.tail = this.head, this.states = null;
}
var Sn = function() {
  return MA.Buffer ? function() {
    return (J.create = function() {
      return new S0();
    })();
  } : function() {
    return new J();
  };
};
J.create = Sn();
J.alloc = function(g) {
  return new MA.Array(g);
};
MA.Array !== Array && (J.alloc = MA.pool(J.alloc, MA.Array.prototype.subarray));
J.prototype._push = function(g, I, t) {
  return this.tail = this.tail.next = new Vt(g, I, t), this.len += I, this;
};
function xo(g, I, t) {
  I[t] = g & 255;
}
function Yr(g, I, t) {
  for (; g > 127; )
    I[t++] = g & 127 | 128, g >>>= 7;
  I[t] = g;
}
function ro(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
ro.prototype = Object.create(Vt.prototype);
ro.prototype.fn = Yr;
J.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new ro(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
J.prototype.int32 = function(g) {
  return g < 0 ? this._push(Eo, 10, fI.fromNumber(g)) : this.uint32(g);
};
J.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function Eo(g, I, t) {
  for (; g.hi; )
    I[t++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[t++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[t++] = g.lo;
}
J.prototype.uint64 = function(g) {
  var I = fI.from(g);
  return this._push(Eo, I.length(), I);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(g) {
  var I = fI.from(g).zzEncode();
  return this._push(Eo, I.length(), I);
};
J.prototype.bool = function(g) {
  return this._push(xo, 1, g ? 1 : 0);
};
function M0(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
J.prototype.fixed32 = function(g) {
  return this._push(M0, 4, g >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(g) {
  var I = fI.from(g);
  return this._push(M0, 4, I.lo)._push(M0, 4, I.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(g) {
  return this._push(MA.float.writeFloatLE, 4, g);
};
J.prototype.double = function(g) {
  return this._push(MA.float.writeDoubleLE, 8, g);
};
var Wr = MA.Array.prototype.set ? function(g, I, t) {
  I.set(g, t);
} : function(g, I, t) {
  for (var A = 0; A < g.length; ++A)
    I[t + A] = g[A];
};
J.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(xo, 1, 0);
  if (MA.isString(g)) {
    var t = J.alloc(I = Li.length(g));
    Li.decode(g, t, 0), g = t;
  }
  return this.uint32(I)._push(Wr, I, g);
};
J.prototype.string = function(g) {
  var I = Ji.length(g);
  return I ? this.uint32(I)._push(Ji.write, I, g) : this._push(xo, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new vr(this), this.head = this.tail = new Vt(ao, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Vt(ao, 0, 0), this.len = 0), this;
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
  S0 = g, J.create = Sn(), S0._configure();
};
var Ur = jA, Mn = Rn;
(jA.prototype = Object.create(Mn.prototype)).constructor = jA;
var Qe = Je();
function jA() {
  Mn.call(this);
}
jA._configure = function() {
  jA.alloc = Qe._Buffer_allocUnsafe, jA.writeBytesBuffer = Qe.Buffer && Qe.Buffer.prototype instanceof Uint8Array && Qe.Buffer.prototype.set.name === "set" ? function(g, I, t) {
    I.set(g, t);
  } : function(g, I, t) {
    if (g.copy)
      g.copy(I, t, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[t++] = g[A++];
  };
};
jA.prototype.bytes = function(g) {
  Qe.isString(g) && (g = Qe._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(jA.writeBytesBuffer, I, g), this;
};
function Hr(g, I, t) {
  g.length < 40 ? Qe.utf8.write(g, I, t) : I.utf8Write ? I.utf8Write(g, t) : I.write(g, t);
}
jA.prototype.string = function(g) {
  var I = Qe.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(Hr, I, g), this;
};
jA._configure();
var Ln = z, VA = Je(), L0, Jn = VA.LongBits, Kr = VA.utf8;
function UA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function z(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var vi = typeof Uint8Array < "u" ? function(g) {
  if (g instanceof Uint8Array || Array.isArray(g))
    return new z(g);
  throw Error("illegal buffer");
} : function(g) {
  if (Array.isArray(g))
    return new z(g);
  throw Error("illegal buffer");
}, vn = function() {
  return VA.Buffer ? function(g) {
    return (z.create = function(I) {
      return VA.Buffer.isBuffer(I) ? new L0(I) : vi(I);
    })(g);
  } : vi;
};
z.create = vn();
z.prototype._slice = VA.Array.prototype.subarray || /* istanbul ignore next */
VA.Array.prototype.slice;
z.prototype.uint32 = /* @__PURE__ */ function() {
  var g = 4294967295;
  return function() {
    if (g = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (g = (g | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return g;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, UA(this, 10);
    return g;
  };
}();
z.prototype.int32 = function() {
  return this.uint32() | 0;
};
z.prototype.sint32 = function() {
  var g = this.uint32();
  return g >>> 1 ^ -(g & 1) | 0;
};
function KI() {
  var g = new Jn(0, 0), I = 0;
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
z.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Vg(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
z.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  return Vg(this.buf, this.pos += 4);
};
z.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  return Vg(this.buf, this.pos += 4) | 0;
};
function Yi() {
  if (this.pos + 8 > this.len)
    throw UA(this, 8);
  return new Jn(Vg(this.buf, this.pos += 4), Vg(this.buf, this.pos += 4));
}
z.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  var g = VA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
z.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw UA(this, 4);
  var g = VA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
z.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, t = this.pos + g;
  if (t > this.len)
    throw UA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, t) : I === t ? new this.buf.constructor(0) : this._slice.call(this.buf, I, t);
};
z.prototype.string = function() {
  var g = this.bytes();
  return Kr.read(g, 0, g.length);
};
z.prototype.skip = function(g) {
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
z.prototype.skipType = function(g) {
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
z._configure = function(g) {
  L0 = g, z.create = vn(), L0._configure();
  var I = VA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  VA.merge(z.prototype, {
    int64: function() {
      return KI.call(this)[I](!1);
    },
    uint64: function() {
      return KI.call(this)[I](!0);
    },
    sint64: function() {
      return KI.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return Yi.call(this)[I](!0);
    },
    sfixed64: function() {
      return Yi.call(this)[I](!1);
    }
  });
};
var Or = Se, Yn = Ln;
(Se.prototype = Object.create(Yn.prototype)).constructor = Se;
var Wi = Je();
function Se(g) {
  Yn.call(this, g);
}
Se._configure = function() {
  Wi.Buffer && (Se.prototype._slice = Wi.Buffer.prototype.slice);
};
Se.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
Se._configure();
var Wn = {}, Tr = kt, so = Je();
(kt.prototype = Object.create(so.EventEmitter.prototype)).constructor = kt;
function kt(g, I, t) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  so.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!t;
}
kt.prototype.rpcCall = function g(I, t, A, e, o) {
  if (!e)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return so.asPromise(g, i, I, t, A, e);
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
kt.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = Tr;
})(Wn);
var qr = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = Rn, I.BufferWriter = Ur, I.Reader = Ln, I.BufferReader = Or, I.util = Je(), I.rpc = Wn, I.roots = qr, I.configure = t;
  function t() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  t();
})(bn);
var K = bn;
const f = K.Reader, _ = K.Writer, l = K.util, c = K.roots.default || (K.roots.default = {}), Me = c.dot = (() => {
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
      return A || (A = _.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && A.uint32(
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
      return this.constructor.toObject(this, K.util.toJSONOptions);
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
        if (e || (e = _.create()), A.images != null && A.images.length)
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return o || (o = _.create()), e.platform != null && Object.hasOwnProperty.call(e, "platform") && o.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        if (o || (o = _.create()), e.supportedAbis != null && e.supportedAbis.length)
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        if (e || (e = _.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        if (e || (e = _.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.imageHash != null && Object.hasOwnProperty.call(A, "imageHash") && e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return o || (o = _.create()), e.aspectRatio != null && Object.hasOwnProperty.call(e, "aspectRatio") && o.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.width != null && Object.hasOwnProperty.call(A, "width") && e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return o || (o = _.create()), e.cameraInitFrameResolution != null && Object.hasOwnProperty.call(e, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(e.cameraInitFrameResolution, o.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.brightness != null && Object.hasOwnProperty.call(A, "brightness") && e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.x != null && Object.hasOwnProperty.call(A, "x") && e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return o || (o = _.create()), e.documentContent != null && Object.hasOwnProperty.call(e, "documentContent") && c.dot.v4.DocumentContent.encode(e.documentContent, o.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        if (e || (e = _.create()), A.segments != null && A.segments.length)
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.corner != null && Object.hasOwnProperty.call(A, "corner") && e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
        return e || (e = _.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
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
        return this.constructor.toObject(this, K.util.toJSONOptions);
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
      return A || (A = _.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && A.uint32(
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
      return this.constructor.toObject(this, K.util.toJSONOptions);
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
      if (A || (A = _.create()), t.items != null && t.items.length) {
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
      return this.constructor.toObject(this, K.util.toJSONOptions);
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
      return A || (A = _.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && A.uint32(
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
      return this.constructor.toObject(this, K.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, I;
  }(), g;
})();
(function(g, I) {
  function t(n, B, a, Q, E) {
    return X(B - 296, Q);
  }
  function A(n, B, a, Q, E) {
    return X(B - -668, n);
  }
  function e(n, B, a, Q, E) {
    return X(E - 218, a);
  }
  function o(n, B, a, Q, E) {
    return X(E - 918, Q);
  }
  function i(n, B, a, Q, E) {
    return X(B - -247, n);
  }
  const C = g();
  for (; ; )
    try {
      if (parseInt(i("SaWx", 194, 219, 169, 172)) / 1 * (parseInt(o(1339, 1341, 1352, "G[YX", 1344)) / 2) + parseInt(i("*2Sr", 171, 181, 184, 195)) / 3 * (-parseInt(i("k$tJ", 164, 152, 144, 144)) / 4) + -parseInt(A("VKpV", -268, -261, -252, -248)) / 5 + parseInt(o(1345, 1298, 1339, "%k5g", 1322)) / 6 + parseInt(i("bRQ9", 165, 143, 171, 163)) / 7 * (parseInt(t(725, 704, 721, "*2Sr", 723)) / 8) + parseInt(i("%k5g", 149, 170, 161, 169)) / 9 * (-parseInt(t(694, 711, 728, "kb[m", 715)) / 10) + parseInt(t(722, 729, 707, "vnX#", 747)) / 11 * (-parseInt(e(612, 632, "wtwa", 603, 628)) / 12) === I) break;
      C.push(C.shift());
    } catch {
      C.push(C.shift());
    }
})(_g, 156238);
function X(g, I) {
  const t = _g();
  return X = function(A, e) {
    A = A - (8188 + -1451 * 1 + -373 * 17);
    let o = t[A];
    if (X.oBQyhU === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      X.qqDWmg = a, g = arguments, X.oBQyhU = !0;
    }
    const C = t[-1861 * -1 + 684 + -509 * 5], n = A + C, B = g[n];
    return B ? o = B : (X.AWKtSU === void 0 && (X.AWKtSU = !0), o = X.qqDWmg(o, e), g[n] = o), o;
  }, X(g, I);
}
async function Zr() {
  const g = {};
  g[e(1297, "F0iT", 1288, 1278)] = _C, g[e(1305, "$p81", 1287, 1287) + "h"] = 256;
  const I = await window[n(-73, -69, -68, "xy^i") + "o"][e(1264, "*2Sr", 1254, 1264) + "e"][n(-75, -82, -66, "gbB5") + o(248, 265, 258, 263, "9]0J") + "y"](g, !0, [o(252, 271, 236, 273, "L3nt") + "pt", o(245, 230, 241, 230, "G[YX") + "pt"]);
  function t(B, a, Q, E, r) {
    return X(B - 440, E);
  }
  const A = Uint8Array[n(-72, -88, -91, "5&OE")](Array(8343 + 923 * -3 + -5558)[n(-70, -90, -92, "70&C")](-6 * 481 + 8669 + -5783));
  function e(B, a, Q, E, r) {
    return X(E - 847, a);
  }
  function o(B, a, Q, E, r) {
    return X(B - -154, r);
  }
  const i = window[e(1284, "DZ8l", 1251, 1266) + "o"][t(869, 859, 892, "ls^F") + t(849, 830, 838, "dXwX") + e(1270, "3nui", 1255, 1248)](A), C = {};
  function n(B, a, Q, E, r) {
    return X(Q - -505, E);
  }
  return C[o(243, 223, 265, 256, "%RVl")] = I, C.iv = i, C;
}
function _g() {
  const g = ["WRRdQZK2WRa", "WOtcLZHNWOG", "sgvVWQmlWQyP", "i23dJeLFWRf/W6vNlqy", "o8kiphjAwr4IpxPtW7G", "mmoRxberhJ4", "e0uxWPdcPdvqaCoAn8oYW7G", "kaJcJdKGWOfn", "nZxdPG", "W4qWnmopWQhcOmoR", "W55TzCkNqa", "sJFcLbKttmk2BqpdN0ldGa", "mSo4AcDJ", "jSkPiqtdHa", "rmkQWOitW5S", "kg7dI0XEW5XeW5nkaHxdGq", "cK3dGLC", "W5NdJ388WPK", "mCkmmhfExq4Sl2TOW74", "W7OxWQRdS8oJzCopua", "sCkGl8ouWP0", "W7xdGmovgNtdKsdcKG", "W4tdR8oHgCoelmk0", "ffaMWR8pCCofirPhWP1+", "W5XrqYm", "mCo5WPxcRG", "W4BcRe5sWOfYdmozASk1WQZdMq", "WPVcHZr0WPa", "WRHuWOtdNSo9", "W7KtW5xcMmkIDSoLv8okW6rp", "W5/dT2JcHsi", "WPmpjWeb", "W7iqW5lcN8kGf8ohC8ocW4blsa", "WO7dPCo/", "vdNcGb/dRW", "WP0epq", "wSk6WPmuW5y", "WOS6mmoHahdcTmoGW4CBpsW", "q8ozmG3cRG", "WQHtWP/dMSoL", "o8oRWQ7dTCk/", "WOJcTcldGMFdRNCXWP7dVc7cLW", "W5hdMCoQoq", "eSoMWR3cPbPKFG", "heuAWPpcPZTEjCoWcCo+W4O", "W45VnSo8WOBcGmotWRy", "uIOXv1BdJSozwa", "DSoVCNVcMmoJW5NdNZ7dKWlcRG", "WO46WRhcMWe", "W5ldGheR"];
  return _g = function() {
    return g;
  }, _g();
}
async function Pr(g) {
  const { iv: I, key: t } = await Zr(), A = {};
  A[e(1297, 1322, 1341, 1325, "L3nt")] = _C, A.iv = I;
  function e(Q, E, r, s, d) {
    return X(E - 884, d);
  }
  const o = await window[i(438, 434, 422, "*2Sr") + "o"][i(426, 429, 424, "$p81") + "e"][B(1227, 1247, 1233, "[H3[") + "pt"](A, t, g);
  function i(Q, E, r, s, d) {
    return X(Q - 10, s);
  }
  const C = await window[a(643, 620, 628, 619, "tYXg") + "o"][i(413, 409, 407, "xsNI") + "e"][i(433, 436, 441, "JwM0") + a(617, 598, 597, 592, "VKpV")](e(1298, 1306, 1330, 1330, "k$tJ"), t), n = {};
  n[a(613, 618, 628, 625, "xsNI") + "ge"] = o, n[B(1223, 1259, 1237, "[H3[")] = C;
  function B(Q, E, r, s, d) {
    return X(r - 813, s);
  }
  function a(Q, E, r, s, d) {
    return X(E - 193, d);
  }
  return n.iv = I, n;
}
function lA(g, I) {
  const t = Xg();
  return lA = function(A, e) {
    A = A - (7 * 1397 + -3517 + -3 * 1991);
    let o = t[A];
    if (lA.GRRloT === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      lA.UXZlvP = a, g = arguments, lA.GRRloT = !0;
    }
    const C = t[-1 * 6139 + -4460 + 10599], n = A + C, B = g[n];
    return B ? o = B : (lA.jbKPpi === void 0 && (lA.jbKPpi = !0), o = lA.UXZlvP(o, e), g[n] = o), o;
  }, lA(g, I);
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return lA(C - 740, n);
  }
  function A(C, n, B, a, Q) {
    return lA(C - 279, a);
  }
  function e(C, n, B, a, Q) {
    return lA(a - -47, B);
  }
  const o = g();
  function i(C, n, B, a, Q) {
    return lA(B - -387, a);
  }
  for (; ; )
    try {
      if (-parseInt(i(-84, -87, -85, "*dDr", -76)) / 1 + -parseInt(A(576, 575, 569, "Iz9M", 583)) / 2 * (parseInt(i(-96, -90, -88, "rTfg", -100)) / 3) + -parseInt(e(253, 250, "TJv2", 246, 239)) / 4 * (-parseInt(i(-104, -97, -93, "u414", -81)) / 5) + -parseInt(A(593, 589, 586, "DZGd", 599)) / 6 + parseInt(t(1029, "X0OZ", 1034, 1027, 1018)) / 7 + parseInt(e(241, 261, "T6ll", 253, 247)) / 8 + -parseInt(t(1041, "OQeh", 1035, 1035, 1050)) / 9 * (-parseInt(t(1045, "*sp)", 1050, 1045, 1058)) / 10) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Xg, 355062);
function Xg() {
  const g = ["WO3cJSo+WPT4fSk1rCkKWP/cOa", "FSolWPFdKCkHp8oL", "CCkRnSkBvW", "pmkbhMJdU8oTCq", "W7VdPuryW6rAWQ3cI2L7", "p8oAW6xdH8oteX7cLmoDW4nEoCkq", "nvldQ19p", "k8oTW7CpurmkW5FdT8omBri4", "rCkMpSkroghcL8orumoXWO4thW", "WRDyW695W6uhc8kgDatdHSkt", "W4a4ohxdJLddUMDgW4LBwSo3", "gfH3WPi", "DCkVkSk/ta", "B8oRW7pdUmkdivldTLVcISojWPtdQW", "AmoVW7hcT8odrJVdO1m", "pCoFW67dHCkqDwlcV8o5W7e", "lmoPW7vaexrJW4ldVW", "jmonWP7dTmkX", "AZRdMmkIW5OHW6RcSrxcJSk0", "l3ldMJ3cUG", "hmkKvJmHB8od", "W6xdQCotWRbMWOzbWQaytSkFWP0J", "ArpdSxyXWQzR", "wc9IxSorhCoIWPz2W5bNaa", "DCkuW4FcVSolqmkqWO8dtxz5zW", "W59Tsmo3W4O", "a8keWRxdUdjdWO3dHgpcKCkkoeO", "WPdcTmo2pZe"];
  return Xg = function() {
    return g;
  }, Xg();
}
function jr(g) {
  function I(i, C, n, B, a) {
    return lA(a - -204, B);
  }
  function t(i, C, n, B, a) {
    return lA(i - -272, a);
  }
  function A(i, C, n, B, a) {
    return lA(C - 341, i);
  }
  const e = new ArrayBuffer(g[I(96, 109, 105, "uaMb", 102) + "h"]), o = new Uint8Array(e);
  for (let i = 16956 + 4 * -4239, C = g[t(19, 5, 24, 18, "OzvU") + "h"]; i < C; i++)
    o[i] = g[I(82, 100, 90, "ZsI$", 92) + A("FUmc", 645)](i);
  return e;
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return iA(Q - -668, a);
  }
  function A(C, n, B, a, Q) {
    return iA(C - 784, B);
  }
  function e(C, n, B, a, Q) {
    return iA(Q - 428, a);
  }
  const o = g();
  function i(C, n, B, a, Q) {
    return iA(C - 954, Q);
  }
  for (; ; )
    try {
      if (-parseInt(e(527, 562, 493, "GpV$", 601)) / 1 + -parseInt(A(1095, 990, "2buk", 1189, 993)) / 2 * (parseInt(t(-524, -535, -461, "6)OH", -552)) / 3) + -parseInt(t(-435, -282, -440, "gf6R", -328)) / 4 * (-parseInt(i(1283, 1276, 1303, 1261, "k%Yg")) / 5) + parseInt(e(542, 726, 560, "!ea@", 635)) / 6 * (-parseInt(t(-255, -447, -261, "fVgi", -356)) / 7) + -parseInt(A(946, 900, "fVgi", 893, 1e3)) / 8 + parseInt(e(737, 605, 660, "5^UQ", 712)) / 9 + parseInt(i(1136, 1209, 1167, 1248, "o7TW")) / 10 * (parseInt(A(989, 903, "Zq@8", 1088, 889)) / 11) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(zg, -3259 * -109 + 1275529 + -660320);
function Vr() {
  const g = A(612, 653, 731, "o7TW") + A(760, 756, 830, "Psp^") + A(807, 810, 757, "Rk*!") + A(925, 815, 741, "aeHZ") + B(-604, -688, -777, -805, "fVgi") + n(603, 587, 542, "G&Ji") + C(-399, -433, "]t0W", -385) + A(724, 757, 727, "ZYMh") + A(692, 697, 670, "55lG") + n(657, 650, 573, "orPv") + B(-674, -697, -677, -601, "55lG") + A(716, 667, 605, "k%Yg") + B(-634, -605, -528, -717, "]zcF") + C(-107, -104, "55lG", -219) + i(-235, -300, -192, "6)OH") + B(-488, -594, -528, -539, "GpV$") + i(-346, -298, -282, "!4tU") + B(-541, -524, -506, -443, "5^UQ") + n(502, 601, 526, "k%Yg") + C(-269, -175, "6ClA", -246) + i(-423, -362, -331, "3)XR") + i(-323, -252, -327, "GpV$") + A(645, 636, 571, "Rk*!") + A(873, 848, 946, "GG]2") + C(-422, -507, "6ClA", -423) + n(607, 459, 561, "Yfti") + i(-194, -227, -158, "2buk") + i(-392, -244, -280, "FJ6M") + i(-325, -472, -354, "p2#!") + i(-287, -278, -323, "Rk*!") + n(560, 641, 553, "6ClA") + C(-452, -276, "[y0C", -380) + n(576, 573, 629, "DseB") + i(-224, -178, -295, "FJ6M") + i(-258, -279, -217, "FJ6M") + C(-268, -195, "[y0C", -281) + n(466, 361, 471, "ZYMh") + A(713, 704, 793, "Rk*!") + C(-368, -330, "[y0C", -280) + C(-314, -370, "aeHZ", -273) + i(-184, -238, -256, "J2Ro") + i(-201, -302, -199, "rXEZ") + C(-288, -341, "I7hw", -235) + B(-719, -647, -754, -550, "I7hw") + A(742, 645, 746, "o7TW") + B(-739, -725, -741, -625, "]zcF") + i(-315, -206, -237, "gf6R") + C(-202, -146, "zWgO", -207) + n(506, 345, 433, "DseB") + A(789, 675, 741, "Rk*!") + C(-206, -305, "GpV$", -233) + A(580, 692, 801, "FJ6M") + i(-338, -277, -229, "aeHZ") + A(786, 742, 696, "Psp^") + B(-671, -607, -569, -691, "]zcF") + C(-271, -249, "rXEZ", -308) + i(-212, -394, -285, "#h2J") + A(721, 833, 846, "!ea@") + n(441, 523, 432, "]zcF") + B(-468, -562, -527, -493, "Yfti") + i(-333, -296, -319, "Emv0") + i(-122, -162, -141, "Rk*!") + i(-289, -238, -314, "!ea@") + B(-637, -636, -578, -600, "zWgO") + C(-516, -461, "ZFxT", -411) + B(-640, -530, -471, -541, "C0Rf") + B(-826, -712, -669, -684, "orPv") + A(793, 860, 944, "GpV$") + A(836, 741, 746, "rXEZ") + i(-411, -373, -371, "73]@") + i(-282, -211, -222, "FJ6M") + B(-673, -701, -786, -605, "Zq@8") + i(-186, -120, -184, "C0Rf") + B(-600, -717, -612, -690, "aeHZ") + i(-319, -209, -251, "I7hw") + C(-246, -282, "55lG", -300) + A(794, 681, 612, "GpV$") + n(461, 583, 562, "gf6R") + i(-152, -64, -157, "Psp^") + i(-128, -242, -213, "W2cI") + B(-772, -672, -721, -650, "[y0C") + C(-456, -358, "[y0C", -407) + B(-695, -585, -685, -679, "C0Rf") + B(-796, -734, -648, -772, "DseB") + A(652, 767, 784, "G&Ji") + B(-640, -595, -644, -701, "]t0W") + i(-199, -256, -208, "I7hw") + A(611, 671, 596, "1BmN") + n(520, 456, 519, "6)OH") + C(-139, -268, "#h2J", -242) + A(880, 844, 889, "6)OH") + n(491, 324, 427, "GG]2") + n(539, 580, 572, "EDwH") + n(597, 428, 486, "fOvQ") + C(-197, -326, "C0Rf", -266) + i(-426, -436, -338, "Yfti") + C(-386, -461, "Psp^", -421) + n(539, 409, 518, "CChs") + B(-752, -723, -625, -791, "FJ6M") + i(-338, -266, -373, "k%Yg") + B(-681, -634, -609, -607, "Udzt") + A(830, 801, 811, "Psp^") + C(-192, -195, "[y0C", -262) + B(-582, -597, -485, -481, "miJb") + C(-252, -397, "JoaR", -315) + C(-229, -396, "3)XR", -304) + n(321, 407, 429, "Jxsh") + i(-466, -323, -363, "FJ6M") + C(-222, -147, "!4tU", -232) + C(-201, -258, "G&Ji", -287) + C(-301, -172, "o7TW", -236) + i(-273, -363, -294, "5^UQ") + C(-371, -391, "DseB", -282) + C(-343, -343, "J2Ro", -227) + A(717, 691, 783, "iLB1") + C(-414, -349, "W2cI", -400) + i(-364, -179, -287, "o7TW") + i(-158, -71, -156, "Psp^") + B(-511, -619, -691, -701, "GG]2") + i(-275, -324, -212, "Zq@8") + A(720, 820, 708, "]zcF") + C(-339, -300, "GG]2", -228) + C(-293, -206, "Yfti", -205) + A(882, 828, 897, "fVgi") + n(481, 362, 425, "zWgO") + n(389, 531, 442, "Rk*!") + i(-209, -406, -300, "DseB") + n(572, 548, 472, "fVgi") + B(-821, -706, -786, -591, "55lG") + C(-359, -431, "1BmN", -347) + A(812, 744, 668, "Udzt") + i(-359, -244, -315, "5^UQ") + C(-151, -257, "Zq@8", -241) + A(926, 829, 858, "[y0C") + i(-357, -232, -297, "Emv0") + B(-588, -517, -485, -630, "Rk*!") + C(-296, -369, "[y0C", -319) + C(-288, -233, "JoaR", -351) + B(-692, -580, -474, -482, "miJb") + B(-708, -629, -515, -663, "Rk*!") + A(725, 725, 658, "W]%p") + C(-270, -295, "fOvQ", -364) + B(-724, -666, -707, -566, "Udzt") + n(300, 397, 414, "pN8F") + B(-506, -618, -516, -674, "DseB") + A(628, 702, 789, "J2Ro") + i(-289, -445, -341, "aeHZ") + B(-709, -685, -740, -628, "6ClA") + A(620, 737, 853, "k%Yg") + n(489, 595, 483, "k%Yg") + A(799, 861, 823, "CChs") + C(-281, -330, "GpV$", -217) + n(589, 542, 492, "Zq@8") + i(-220, -245, -281, "6)OH") + B(-564, -608, -724, -491, "EDwH") + A(672, 764, 852, "BNf7") + n(437, 395, 404, "W2cI") + C(-424, -299, "zWgO", -395) + B(-452, -535, -460, -430, "fVgi") + i(-137, -201, -190, "]zcF") + C(-287, -228, "GpV$", -201) + n(619, 709, 597, "pN8F") + n(574, 553, 566, "Rk*!") + n(616, 467, 579, "!4tU") + i(-287, -432, -320, "FJ6M") + i(-39, -263, -148, "zWgO") + A(638, 727, 684, "orPv") + B(-600, -703, -697, -632, "FJ6M") + C(-226, -216, "Yfti", -303) + C(-352, -231, "GpV$", -290) + A(746, 690, 709, "Udzt") + B(-728, -627, -708, -586, "miJb") + C(-166, -126, "6ClA", -218) + C(-293, -332, "GpV$", -255) + A(629, 712, 696, "W2cI") + C(-318, -219, "5^UQ", -283) + A(701, 717, 688, "gf6R") + C(-322, -362, "I7hw", -332) + C(-407, -360, "k%Yg", -358) + C(-318, -313, "6)OH", -250) + C(-305, -167, "ZFxT", -279) + n(515, 609, 505, "orPv") + C(-444, -437, "73]@", -412) + A(701, 765, 687, "W]%p") + C(-399, -352, "o7TW", -371) + B(-487, -508, -465, -479, "C0Rf") + C(-274, -232, "]zcF", -260) + B(-718, -674, -624, -716, "GG]2") + C(-281, -223, "EDwH", -244) + n(493, 513, 575, "]zcF") + n(393, 391, 507, "#h2J") + i(-261, -315, -360, "2buk") + n(518, 556, 502, "5^UQ") + A(776, 836, 902, "73]@") + n(705, 711, 615, "]zcF") + i(-200, -265, -220, "#h2J") + n(606, 525, 631, "Yfti") + n(344, 509, 411, "BNf7") + C(-467, -485, "Emv0", -410) + C(-247, -320, "zWgO", -237), I = window[n(686, 538, 600, "3)XR")](g), t = window[i(-190, -268, -176, "3)XR")](I);
  function A(a, Q, E, r, s) {
    return iA(Q - 523, r);
  }
  const e = jr(t), o = {};
  function i(a, Q, E, r, s) {
    return iA(E - -480, r);
  }
  function C(a, Q, E, r, s) {
    return iA(r - -535, E);
  }
  function n(a, Q, E, r, s) {
    return iA(E - 296, r);
  }
  o[B(-769, -733, -849, -732, "Psp^")] = XC;
  function B(a, Q, E, r, s) {
    return iA(Q - -844, s);
  }
  return o[C(-366, -320, "BNf7", -401)] = Ax, window[C(-250, -164, "GG]2", -209) + "o"][n(473, 646, 536, "pN8F") + "e"][C(-352, -267, "#h2J", -322) + i(-310, -349, -242, "C0Rf")](C(-480, -436, "I7hw", -381), e, o, !0, [C(-312, -431, "fOvQ", -343) + "pt"]);
}
async function _r(g) {
  const I = await Vr(), t = {};
  function A(e, o, i, C, n) {
    return iA(e - -115, i);
  }
  return t[A(216, 165, "[y0C")] = XC, window[A(113, 199, "!4tU") + "o"][A(180, 85, "I7hw") + "e"][A(97, 96, "J2Ro") + "pt"](t, I, g);
}
function iA(g, I) {
  const t = zg();
  return iA = function(A, e) {
    A = A - 106;
    let o = t[A];
    if (iA.JjwXdz === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      iA.uATYbw = a, g = arguments, iA.JjwXdz = !0;
    }
    const C = t[1 * 1002 + -6 * 1382 + 405 * 18], n = A + C, B = g[n];
    return B ? o = B : (iA.PCinbH === void 0 && (iA.PCinbH = !0), o = iA.uATYbw(o, e), g[n] = o), o;
  }, iA(g, I);
}
function zg() {
  const g = ["ggtdJctdOq", "k8k4WPVcOSkV", "AmkDWRRdQMuqCd8uW5u9WQ8Soq", "WOb0WR3cLMu", "ECk+W77cJsddHx7cHSkRW5ZcVCoMwG", "xNm4uCkq", "WRnSWOtcSwS", "W7tcSJaJWPi", "W6OTAH3cGq", "FSkCW7OSsa", "W5j2r8kSWRi", "mCo6WO/dL0q", "gCoNFsGI", "W5tcJNxcLSo5", "BMlcPmoJW4W", "W7qSzb3cVq", "W5pdKNyAW50", "l8otaWSo", "W7hcQK7dK8o9", "W6jOW5tcNmo8", "lSkScvTw", "mSk0WRZcP8kx", "W6GbW5hcTG", "sCogWQ/dSSkr", "z8kYW43dPYi", "WPXICtVcIq", "wSkgWPFcRmos", "AmoZWPRdT8ky", "wx1QWPVdPG", "W6uWBSkwWO7cTCo3W7v+iq", "emkNW6ZcLCotW70HxNvOCmolDG", "rCkWFMVdVG", "dh3cNSosW4u", "FSoaWQpdU0lcIJ0", "WQz4uHldGG", "W77cHqKCWQq", "D8kMegzC", "W4znEWdcRG", "cmoDW5JcGq8", "WRTIWPNcHfy", "WRmXbSo6WOm", "hKvpW7dcVq", "bxH/W7/cKq", "WRvgorZcOa", "WR5/CHZcUq", "pfi3nCk3", "WP3dHKDdWQ0", "W54MsSkeWQ/cISo6uq", "igRdHbFdGq", "x8k7W6/dOq", "W5VdKYvQWOO", "W6xdJmkSW7PQ", "c8kfnWjZ", "nNFcVxVdIG", "dhNcHmo6W7K", "hmkXnLr7", "sCkWattdTG", "pxjwnSkH", "ASoKW5CkWPj5WOxcP8kmu8kgoa", "WRyPWRBdSmk0WO4+WRpdRmk9Du0", "WQjdBCkTWPm", "lY3dS8k5Fa", "jSkouM3dVW", "W6tdUmoSW6zk", "ahvhW7S", "W4lcVqPAWRW", "h2udjCkQ", "pYzSW4VcIa", "W4noj8ofWQe", "W6mDW6FdQvlcM8k3cCkTnq", "W6xcQdeKoq", "W7PkWRlcTSo0", "W6u/rWNcGW", "W6rvm8okWQe", "W53cVJeUoa", "j8kijGS8", "tSkTu3NdNa", "WO7dKSkweCko", "W5nnW5Wojq", "W4DQdY/dRG", "W61JyCk5WQW", "xCkYW4ZdLwG", "WOVdQ1DOWQW", "kSk0pJSj", "W61ao13cTW", "W6VcScD5WPS", "WQKKbCoTW54", "WPTPz8o/", "d0tdOSo4xa", "W5K+FXdcGa", "W6BdNSoHW4r3", "WQb6eHFdJW", "W6CMuCk2WOa", "WOFdLgL9W5m", "W6tcQdr5la", "mx3dNIpdKW", "cCoZFc0P", "WOfeBSkXWQa", "WPXng3xdKvRcOmk4WQ3dOSoRWR3cTrC", "wfWllSk8", "WPCeEMZdNa", "W6JdKCkGW7NcQG", "W4CEW5RcGCk3", "W69GW4dcHmki", "W74yfSkpBJOeuSkcWOtdHCoE", "wfqBbSkk", "emkHAxSG", "W5tcI3ZcIW", "E8kaW6JdGLS", "CmoLWRNcK8kT", "wx4Rb8ko", "iSk8pgzb", "W4JcNtuZWOq", "W57cNWeOlq", "W4byW5ScqG", "e8kRW6dcKSozW7OQaMrmqSoMuKS", "WPBdIYtdKmkNWOGBW5SfWQvvWOrzWOO", "kmk1hba5", "k8o0W6lcKwq", "vYDOWPhdRW", "W4tcKmouW7VcJG", "WQqEBCkhaq", "W4BcNbHqnq", "WQvxoqdcNq", "WRPxWRJcPSkT", "Amk2W7ldReG", "F8oDBqyIdwisWPPHW7/cQG", "WRWnBrldIq", "W7/cSmo+EbO", "u8ofWOddHmkb", "WOCMDSknWOe", "W4tcRCovW7NcPa", "rmkfW7pcNCor", "W5ddTCoWW4PJ", "pN4qnSkX", "t8orAKHOWRxdHCoEW7hcPd1EWR8", "WQraW6S0uW", "WPBcLCkkWQVcHa", "W6lcOrbsnG", "cmo3W5ZcTbK", "WRLptmkwWOe", "W6/dNCotW7hcGG", "pxxdO8oMDG", "WOyAWP7cVSks", "fX8RW6hcG8kSW6m4W6VdL1hcMmoj", "WRyaWPxcMSkb", "kCk1pKek", "cmoLWPD+W7a", "bSoLWPpcH3i", "l8o3FsW8", "W7/cScxcGCoV", "mSkbWQFdU8kv", "WOjOWRZcJWe", "W4tcKff2bG", "ASoMWPzaW58mWRJcVW", "W7m+fJJcMa", "W4ZcSvZcHSkN", "W7FcMZyaWPm", "t8kxFu4uWPBdTSkmlG", "dSogW5/cNWy", "j19FWPNdPWBdRq", "WQ7dSfztWRG", "W5ZdIX4sWRi", "W6RcHSoIW47cHW", "hSo6WOxdMhS", "z8kUWQtcUSkA", "iCoJWRBdM2i", "WRv7FSoeWPK", "h2i2jSoq", "FSkFWRFdGee", "z8olcmo3WOm", "cgv5WP5V", "oLPUW7/cVa", "WP7dJSk0WRdcVa", "W5FcKmorW5tdTq", "rmkGnIFcOW", "WO14WRpcLwu", "zSkUWQ/cV8kc", "WPTyxd/dTa", "W5JdO8oyW6rS", "AhHVWPn/", "b8kEWRxcVSk1", "W6NcTNBdKmop", "WP9byCkDWRm", "WRKDW4ZcGmk5", "a1NdUq3dGG", "xNHBW4/cVG", "W7RcP8kQrYe", "W4yhFq7dGa", "wCksW79Wra", "W54lF3FcGa", "selcJ8oo", "W7OtrIJcUq", "W7XPW6hcSSoQ", "W4bCtmoAWR8", "W44Mjq/cRa", "y8oKWRf7W48", "r3iJWPddQG", "kSkHl2uI", "yg1qWOhdPq", "uCobqCoSWOi", "s2fQWOddNq", "W75xW5tcNmkD", "k8kkAemJ", "W7H8tSkDWQC", "A8oJW6pcNs0", "W5JcQCodW5DJ", "r8k+WRldTeO", "qCkyW5tdGxK", "WPtcPmkEDCky", "W5NcOtG8WP8", "W4hcKJHBhq", "whdcPmkgW4O", "FSoAWQVcGwu", "B8oLW5CgW4qxWQpcPSk+FG", "WPP2mSkwWPy", "W4hcOYf2sW", "wCkJEmobWOC", "j2FcVbJdJq", "AmkaW5fNW4S", "puRdOCoElG", "pmohfhrh", "vZ3cI8keW6W", "oKy7n8kI", "W7SFf8oKpMaKtSka", "WP/dI1tcJ8oH", "A8kQW5tdKKa", "BHmAW6jKWO9XWQ89WO8", "W6bnyYZdNa", "Emo4WQXtqW", "W47cNIGzW6S", "x15FW7/cVa", "W4CRAWJcRG", "iCkyfgjh", "BNrBWOb3"];
  return zg = function() {
    return g;
  }, zg();
}
function $g() {
  const g = ["oCooW5b+fxVdLCkBcG", "CeuUW6ZcMSobtCkjW7ddO8orW6uo", "pmojW58EqqJdJ8kDpZmrWRy", "W7DCxa", "WQOohmkmECkOpg0PW6tcJx8", "ztpdHCkdCSkQC8oygW", "afldICkhmCo9caxcKd8TW78", "smo5BSk/WQZcQNddM8kQW5HqCa", "dSoNyxNcS8kLE1JdGa", "E8o3WPOtW7FdNdxdVSoyWPCEva", "W5RdI8oHW7NdKW", "WQOBW594W7/dL2nfEW", "lg92W4dcKSk0WO8oWPddPCoLW6i", "W4qjWRzuW4BdICkVW79a", "WQddP00gW4qlWP17xSoldq", "WRVdTaiUn8o/WP8Jrq", "WQmFW5KhWOBcL25fq8kxq3G", "s8oey8oJWQzuW4W/ma", "lSoqWRqWd8kSBsODWQiJ", "W6dcJCkaWQ0zWRFdLwDU", "oSohW54CrWRcNCkgjIqbWQCc", "z2ZcRCoKjWXxW7xcKmoUBSkL"];
  return $g = function() {
    return g;
  }, $g();
}
(function(g, I) {
  const t = g();
  function A(C, n, B, a, Q) {
    return wA(a - 216, n);
  }
  function e(C, n, B, a, Q) {
    return wA(n - 422, Q);
  }
  function o(C, n, B, a, Q) {
    return wA(n - 220, Q);
  }
  function i(C, n, B, a, Q) {
    return wA(a - 470, n);
  }
  for (; ; )
    try {
      if (parseInt(e(594, 592, 597, 601, "&get")) / 1 * (parseInt(o(398, 397, 399, 396, "zUE1")) / 2) + -parseInt(o(391, 381, 376, 381, "F(3K")) / 3 + -parseInt(i(649, "wKzy", 654, 644, 634)) / 4 + -parseInt(o(390, 388, 390, 389, "XA6C")) / 5 + -parseInt(A(371, "pl3T", 385, 374, 374)) / 6 * (-parseInt(i(651, "NZMi", 640, 649, 638)) / 7) + parseInt(e(598, 593, 587, 600, "1qwJ")) / 8 * (-parseInt(o(397, 387, 392, 382, "wTj$")) / 9) + parseInt(A(374, "dIT7", 390, 379, 377)) / 10 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})($g, 59 * 1883 + 161562 + 60034);
function wA(g, I) {
  const t = $g();
  return wA = function(A, e) {
    A = A - (1 * 6438 + -1 * -1457 + -7737);
    let o = t[A];
    if (wA.PYatfk === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      wA.TrTgYE = a, g = arguments, wA.PYatfk = !0;
    }
    const C = t[0], n = A + C, B = g[n];
    return B ? o = B : (wA.KBhSdC === void 0 && (wA.KBhSdC = !0), o = wA.TrTgYE(o, e), g[n] = o), o;
  }, wA(g, I);
}
async function Xr(g) {
  function I(n, B, a, Q, E) {
    return wA(B - 262, Q);
  }
  const { iv: t, key: A, message: e } = await Pr(g);
  function o(n, B, a, Q, E) {
    return wA(Q - 277, a);
  }
  const i = await _r(A), C = {};
  return C[I(435, 427, 438, "h(tf")] = i, C.iv = t, C[o(440, 441, "x^^O", 449) + "ge"] = e, C;
}
function CA(g, I) {
  const t = AI();
  return CA = function(A, e) {
    A = A - (-227 * 27 + -1655 + 1 * 8152);
    let o = t[A];
    if (CA.jdiTAx === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      CA.oKBWhI = a, g = arguments, CA.jdiTAx = !0;
    }
    const C = t[5050 + 3 * -2771 + 3263], n = A + C, B = g[n];
    return B ? o = B : (CA.KEVbxc === void 0 && (CA.KEVbxc = !0), o = CA.oKBWhI(o, e), g[n] = o), o;
  }, CA(g, I);
}
(function(g, I) {
  const t = g();
  function A(n, B, a, Q, E) {
    return CA(n - 43, a);
  }
  function e(n, B, a, Q, E) {
    return CA(B - -372, E);
  }
  function o(n, B, a, Q, E) {
    return CA(a - 440, E);
  }
  function i(n, B, a, Q, E) {
    return CA(Q - -328, E);
  }
  function C(n, B, a, Q, E) {
    return CA(n - -5, Q);
  }
  for (; ; )
    try {
      if (-parseInt(C(377, 362, 363, "AN01", 378)) / 1 + -parseInt(C(367, 382, 360, "*zFI", 354)) / 2 + parseInt(e(13, 21, 35, 18, "t(6I")) / 3 + -parseInt(A(437, 433, "y7Xf", 435, 440)) / 4 * (-parseInt(i(64, 52, 53, 59, "4Trb")) / 5) + parseInt(C(368, 373, 362, "xBCm", 379)) / 6 * (parseInt(e(4, 8, -5, 0, "7sHO")) / 7) + -parseInt(i(83, 76, 54, 69, "wrJV")) / 8 + parseInt(A(417, 427, "oJXC", 417, 407)) / 9 * (-parseInt(o(819, 835, 829, 834, "oJXC")) / 10) === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(AI, 826158 + 29 * -46896 + 1351807);
async function zr(g) {
  const I = await window[o("t(6I", 39, 36, 35) + "o"][A(67, 73, 74, "JjU%") + "e"][A(61, 73, 66, "t(6I") + "t"](o("mXuh", 60, 30, 45), g);
  function t(C, n, B, a, Q) {
    return CA(C - -995, a);
  }
  function A(C, n, B, a, Q) {
    return CA(C - -325, a);
  }
  function e(C, n, B, a, Q) {
    return CA(n - -188, a);
  }
  function o(C, n, B, a, Q) {
    return CA(a - -334, C);
  }
  function i(C, n, B, a, Q) {
    return CA(Q - -260, B);
  }
  return Array[t(-607, -622, -618, "t(6I")](new Uint8Array(I))[t(-617, -622, -632, "D9vw")]((C) => C[i(99, 104, "OtL#", 112, 108) + o("SgZV", 53, 51, 43)](9551 + -173 * 28 + -4691)[e(184, 182, 186, "Ei3Y") + t(-619, -604, -611, "SgZV")](13039 + -13037 * 1, "0"))[A(58, 61, 64, "qmVF")]("");
}
function AI() {
  const g = ["W4hcTmk/W4e", "WP3dQmkbW57cNSo7W5P9", "WRqlvCoMACkWW6aW", "A8o+dhT2", "WPldT8kLv8k5W787FNWx", "ACoLbhm", "o1XPAW3dU1ic", "mmomWOBcIduoWOlcV1T7", "WR1RburDW61Lj8kt", "lLmyc8oM", "pmkJxcG9lwldMCoUeCoCWRpcLq", "W4lcHCouWPZdLHqkW5j/", "o0xcPSkzWPZcS8kwkCo0BCoqWQq", "aSk3a0FdTa/dISkaWRJdPtLkW70", "WRfmW7TCb8kqgeiQW4D4sa", "W5/cHHFdLmo0", "BmoLeM5X", "CcVcLKZdSG", "o1O3nh/cMxiTbmkLnwe", "WOaAsNxdQX1hjCocamommq", "WRPTbHyzWRHPdmkAzd7dTa", "ovW2nxNcNGKypSkKp1uX", "W5pcLSkyW5xcVCkenmkRfSkTWRHu", "AmklW4O", "ymkxW5K", "WRJcQSka", "W5lcV8kJzWO", "ymkmWRnYWP3dOmonjW", "outcOmkuWP7cTSoommoXzSoWWPNcRW", "WRBcVXdcIfRdVCkVW78cWQGGxG"];
  return AI = function() {
    return g;
  }, AI();
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return RA(n - -219, E);
  }
  function A(n, B, a, Q, E) {
    return RA(n - 479, E);
  }
  var e = g();
  function o(n, B, a, Q, E) {
    return RA(B - -328, a);
  }
  function i(n, B, a, Q, E) {
    return RA(B - -217, E);
  }
  for (; ; )
    try {
      var C = -parseInt(A(666, 670, 659, 666, "LkYI")) / 1 + parseInt(o(-149, -140, "TFth", -141, -132)) / 2 * (-parseInt(A(665, 675, 659, 658, "rpqc")) / 3) + parseInt(i(-26, -26, -16, -16, "8PvH")) / 4 + parseInt(o(-157, -147, "eAdM", -147, -152)) / 5 + parseInt(t(-25, -25, -24, -24, "bhx#")) / 6 * (parseInt(A(664, 658, 668, 656, "bhx#")) / 7) + parseInt(o(-139, -145, "NA7X", -155, -155)) / 8 + -parseInt(t(-26, -18, -27, -34, "w8Vh")) / 9 * (parseInt(i(-29, -39, -49, -30, "Jr9m")) / 10);
      if (C === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(eI, 149511);
function RA(g, I) {
  var t = eI();
  return RA = function(A, e) {
    A = A - (9534 + -1 * 9857 + 501);
    var o = t[A];
    if (RA.pvqMGv === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      RA.HqNMfQ = C, g = arguments, RA.pvqMGv = !0;
    }
    var n = t[0], B = A + n, a = g[B];
    return a ? o = a : (RA.kwzPaq === void 0 && (RA.kwzPaq = !0), o = RA.HqNMfQ(o, e), g[B] = o), o;
  }, RA(g, I);
}
function eI() {
  var g = ["pdhcHaD2WOL3WPG1", "WPxcVwTjtdJcIG", "FatcGJi3zXRcVG", "W6xcT8oVWPZdVghcSa", "WOBcTqn6W4JdPqPIB1K+WPi", "W6D3iCoKpcLFW4zBWPpdV8kC", "WOZdVH/dRSorvSkZWPZdT2GxW7KI", "W4FcGCk3kCkEW7ldMSkvW608nG", "D0HiWRdcU8o+WP10WRNcOG", "r8kIs8o4WQdcU8kzWQhcSSoAomo4", "iSo7amkqWOjytCo7W6yTecxdUq", "W47dH1G6W7lcQ8o1WQ3cUSoEWQTmWOS", "r8kGkSkpW7ldQmkRWRO", "DahdPe5KmZ7cHxlcLCohWPK", "rmoaWQ3dK2/cLt9zWPS", "WRfWW5/cUCoiWOVdNrKbW6ZdIW", "pmo7WOtcUdj5smoKW7uJ", "D8k8ktVdQCkVv8k2WO8ClCkUWOS", "h8k5lmo5uCkSWQTiFcSMfq", "WPVcHcddMSkFkxi+WP84F8oT"];
  return eI = function() {
    return g;
  }, eI();
}
async function J0(g) {
  const { Image: I } = Me, t = await g.arrayBuffer(), A = new Uint8Array(t), e = {};
  e.bytes = A;
  const o = I.verify(e);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function Un(g) {
  const { v4: { Metadata: I } } = Me, t = { ...g };
  t.platform = Me.Platform.WEB;
  const A = t, e = I.verify(A);
  if (e) throw Error(e);
  return I.create(A);
}
async function Hn(g) {
  const { Content: I } = Me, { iv: t, key: A, message: e } = await Xr(g), o = { token: new Uint8Array(A), iv: t, schemaVersion: $a, bytes: new Uint8Array(e) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function Kn(g) {
  const { Blob: I } = Me.v4, t = I.verify(g);
  if (t) throw Error(t);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function $r(g, I) {
  const { FaceContent: t } = Me.v4, A = await J0(g), e = await Un(I), o = {};
  o.image = A, o.metadata = e;
  const i = o, C = t.verify(i);
  if (C) throw Error(C);
  const n = t.create(i), B = {};
  return B.faceContent = n, Kn(B);
}
async function AE(g, I) {
  const t = await $r(g, I);
  return Hn(t);
}
function eE({ controller: g, onPhotoTakenInternal: I }) {
  const { cameraFacing: t, captureMode: A, onPhotoTaken: e, sessionToken: o } = Bo(), i = GA(({ candidateSelectionImages: B, imageData: a, protoMessage: Q, webMetadata: E }) => {
    Gr(Cn.FACE, B), e(a, Q);
    const r = {};
    r.cameraProperties = E, I == null || I(r);
  }, [I, e]), C = GA(({ fps: B, processedImage: a }, Q) => {
    rn(qA.INSTRUCTION_CHANGED, a.instructionCode), g && Sx(qA.DETECTED_FACE_CHANGED, a.detection, g.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = a.detection, E.fps = B, E.image = Q, E.isInCandidateSelection = a.isInCandidateSelection, E.invalidValidators = a.invalidValidators, Mx(qA.FACE_DETECTION, E);
  }, [g]), n = {};
  return n.captureMode = A, n.cameraFacing = t, n.controller = g, n.createProtoMessage = AE, n.onCapture = i, n.onDetection = C, n.sessionToken = o, n.customEvent = qA, n.fallbackInstruction = gA.FACE_NOT_PRESENT, n.instructionCodeMap = gA, n.checkToInstructionCodeMap = Ea, or(n);
}
class tE {
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new U("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
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
    return "" + t.replace(zC, "") + I;
  }
}
class gE {
  constructor() {
    p(this, "detectionRecord", []);
    p(this, "imagesWithTimestampForDuplicateDetection", new pt(za));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: t }) {
    const A = I.length / tx, e = A / (16 * -341 + -2 * -1895 + 1668), o = I.length / (-5857 * -1 + 1600 + -7455), i = await zr(I.slice(o - e, o + e)), C = {};
    C.imageHash = i, C.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: rx(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: t, imageData: A, timestamp: e }) {
    const o = An(I), i = this.validationService.validateDetectedObject(o, t);
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
class IE {
  constructor() {
    p(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new U("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const On = Symbol("Comlink.proxy"), oE = Symbol("Comlink.endpoint"), iE = Symbol("Comlink.releaseProxy"), OI = Symbol("Comlink.finalizer"), kg = Symbol("Comlink.thrown"), Tn = (g) => typeof g == "object" && g !== null || typeof g == "function", CE = {
  canHandle: (g) => Tn(g) && g[On],
  serialize(g) {
    const { port1: I, port2: t } = new MessageChannel();
    return Zn(g, I), [t, [t]];
  },
  deserialize(g) {
    return g.start(), co(g);
  }
}, nE = {
  canHandle: (g) => Tn(g) && kg in g,
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
}, qn = /* @__PURE__ */ new Map([
  ["proxy", CE],
  ["throw", nE]
]);
function BE(g, I) {
  for (const t of g)
    if (I === t || t === "*" || t instanceof RegExp && t.test(I))
      return !0;
  return !1;
}
function Zn(g, I = globalThis, t = ["*"]) {
  I.addEventListener("message", function A(e) {
    if (!e || !e.data)
      return;
    if (!BE(t, e.origin)) {
      console.warn(`Invalid origin '${e.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, e.data), n = (e.data.argumentList || []).map(ue);
    let B;
    try {
      const a = C.slice(0, -1).reduce((E, r) => E[r], g), Q = C.reduce((E, r) => E[r], g);
      switch (i) {
        case "GET":
          B = Q;
          break;
        case "SET":
          a[C.slice(-1)[0]] = ue(e.data.value), B = !0;
          break;
        case "APPLY":
          B = Q.apply(a, n);
          break;
        case "CONSTRUCT":
          {
            const E = new Q(...n);
            B = sE(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: r } = new MessageChannel();
            Zn(g, r), B = EE(E, [E]);
          }
          break;
        case "RELEASE":
          B = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      B = { value: a, [kg]: 0 };
    }
    Promise.resolve(B).catch((a) => ({ value: a, [kg]: 0 })).then((a) => {
      const [Q, E] = II(a);
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E), i === "RELEASE" && (I.removeEventListener("message", A), Pn(I), OI in g && typeof g[OI] == "function" && g[OI]());
    }).catch((a) => {
      const [Q, E] = II({
        value: new TypeError("Unserializable return value"),
        [kg]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E);
    });
  }), I.start && I.start();
}
function QE(g) {
  return g.constructor.name === "MessagePort";
}
function Pn(g) {
  QE(g) && g.close();
}
function co(g, I) {
  return v0(g, [], I);
}
function ag(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function jn(g) {
  return Ke(g, {
    type: "RELEASE"
  }).then(() => {
    Pn(g);
  });
}
const tI = /* @__PURE__ */ new WeakMap(), gI = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (tI.get(g) || 0) - 1;
  tI.set(g, I), I === 0 && jn(g);
});
function aE(g, I) {
  const t = (tI.get(I) || 0) + 1;
  tI.set(I, t), gI && gI.register(g, I, g);
}
function xE(g) {
  gI && gI.unregister(g);
}
function v0(g, I = [], t = function() {
}) {
  let A = !1;
  const e = new Proxy(t, {
    get(o, i) {
      if (ag(A), i === iE)
        return () => {
          xE(e), jn(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => e };
        const C = Ke(g, {
          type: "GET",
          path: I.map((n) => n.toString())
        }).then(ue);
        return C.then.bind(C);
      }
      return v0(g, [...I, i]);
    },
    set(o, i, C) {
      ag(A);
      const [n, B] = II(C);
      return Ke(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: n
      }, B).then(ue);
    },
    apply(o, i, C) {
      ag(A);
      const n = I[I.length - 1];
      if (n === oE)
        return Ke(g, {
          type: "ENDPOINT"
        }).then(ue);
      if (n === "bind")
        return v0(g, I.slice(0, -1));
      const [B, a] = Ui(C);
      return Ke(g, {
        type: "APPLY",
        path: I.map((Q) => Q.toString()),
        argumentList: B
      }, a).then(ue);
    },
    construct(o, i) {
      ag(A);
      const [C, n] = Ui(i);
      return Ke(g, {
        type: "CONSTRUCT",
        path: I.map((B) => B.toString()),
        argumentList: C
      }, n).then(ue);
    }
  });
  return aE(e, g), e;
}
function rE(g) {
  return Array.prototype.concat.apply([], g);
}
function Ui(g) {
  const I = g.map(II);
  return [I.map((t) => t[0]), rE(I.map((t) => t[1]))];
}
const Vn = /* @__PURE__ */ new WeakMap();
function EE(g, I) {
  return Vn.set(g, I), g;
}
function sE(g) {
  return Object.assign(g, { [On]: !0 });
}
function II(g) {
  for (const [I, t] of qn)
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
    Vn.get(g) || []
  ];
}
function ue(g) {
  switch (g.type) {
    case "HANDLER":
      return qn.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function Ke(g, I, t) {
  return new Promise((A) => {
    const e = cE();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== e || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: e }, I), t);
  });
}
function cE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const dE = "SAM v1.44.0 for idcards", hE = "/dot-assets/smile/dot-CCz7p721.js";
class _n extends gE {
  constructor(t, A) {
    super();
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  optimizeImageBeforeDetection(t) {
    const A = Yg(t), e = xx(t, A);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: t, timestamp: A }) {
    const e = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let i = await this.detector.detect(e.data, e.resolution, o);
    i = dr(i, Yg(t));
    const C = {};
    return C.detectedObject = i, C.image = t, C.imageData = e.data, C.timestamp = A, this.processDetectedObject(C);
  }
}
var Pe, ye, we;
class lE {
  constructor(I) {
    H(this, Pe);
    H(this, ye);
    H(this, we);
    Y(this, Pe, I), Y(this, ye, /* @__PURE__ */ new Map());
  }
  validate() {
    m(this, Pe).forEach((I) => {
      m(this, ye).set(I.name, I.evaluate());
    }), Y(this, we, void (6149 + 43 * -143));
  }
  isValid() {
    return m(this, we) === void (9201 + 1164 * 4 + -13857) && Y(this, we, Array.from(m(this, ye).values()).every((I) => I)), m(this, we);
  }
  get result() {
    return m(this, ye);
  }
  get validators() {
    return m(this, Pe);
  }
}
Pe = new WeakMap(), ye = new WeakMap(), we = new WeakMap();
var Ft, pe;
class kA {
  constructor(I, t) {
    H(this, Ft);
    H(this, pe);
    Y(this, Ft, I), Y(this, pe, t);
  }
  get threshold() {
    return m(this, pe);
  }
  get name() {
    return m(this, Ft);
  }
  isValueBelowThreshold(I) {
    return I < m(this, pe);
  }
  isValueAboveThreshold(I) {
    return I > m(this, pe);
  }
}
Ft = new WeakMap(), pe = new WeakMap();
const uE = "isNotDim";
var Rt;
class fE extends kA {
  constructor(t, A) {
    super(uE, t);
    H(this, Rt);
    Y(this, Rt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Rt));
  }
}
Rt = new WeakMap();
const DE = "isNotSmall";
var St;
class yE extends kA {
  constructor(t, A) {
    super(DE, t);
    H(this, St);
    Y(this, St, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, St));
  }
}
St = new WeakMap();
const wE = "isNotBright";
var Mt;
class pE extends kA {
  constructor(t, A) {
    super(wE, t);
    H(this, Mt);
    Y(this, Mt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Mt));
  }
}
Mt = new WeakMap();
const mE = "isPresent";
var Lt;
class GE extends kA {
  constructor(t, A) {
    super(mE, t);
    H(this, Lt);
    Y(this, Lt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Lt));
  }
}
Lt = new WeakMap();
const kE = "isSharp";
var Jt;
class bE extends kA {
  constructor(t, A) {
    super(kE, t);
    H(this, Jt);
    Y(this, Jt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Jt));
  }
}
Jt = new WeakMap();
const NE = "isLeftEyePresent";
var vt;
class FE extends kA {
  constructor(t, A) {
    super(NE, t);
    H(this, vt);
    Y(this, vt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, vt));
  }
}
vt = new WeakMap();
const RE = "isMouthPresent";
var Yt;
class SE extends kA {
  constructor(t, A) {
    super(RE, t);
    H(this, Yt);
    Y(this, Yt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Yt));
  }
}
Yt = new WeakMap();
const ME = "isMouthScoreNotTooLow";
var Wt;
class LE extends kA {
  constructor(t, A) {
    super(ME, t);
    H(this, Wt);
    Y(this, Wt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Wt));
  }
}
Wt = new WeakMap();
const JE = "isMouthScoreNotTooHigh";
var Ut;
class vE extends kA {
  constructor(t, A) {
    super(JE, t);
    H(this, Ut);
    Y(this, Ut, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Ut));
  }
}
Ut = new WeakMap();
const YE = "isNotLarge";
var Ht;
class WE extends kA {
  constructor(t, A) {
    super(YE, t);
    H(this, Ht);
    Y(this, Ht, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Ht));
  }
}
Ht = new WeakMap();
const UE = "isNotPitched";
var Kt;
const lo = class lo extends kA {
  constructor(t, A) {
    super(UE, lo.calculatePitchAngleAccelerationThreshold(t));
    H(this, Kt);
    Y(this, Kt, A);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return _a * Math.sin(t * (Math.PI / (8509 + 2 * -2372 + -15 * 239)));
  }
  evaluate() {
    const { z: t } = m(this, Kt) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Kt = new WeakMap();
let Y0 = lo;
const HE = "isRightEyePresent";
var Ot;
class KE extends kA {
  constructor(t, A) {
    super(HE, t);
    H(this, Ot);
    Y(this, Ot, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ot));
  }
}
Ot = new WeakMap();
const OE = "isNotOutOfBounds";
var Tt, me;
class TE extends kA {
  constructor(t, A, e) {
    super(OE, t);
    H(this, Tt);
    H(this, me);
    Y(this, Tt, A), Y(this, me, e);
  }
  evaluate() {
    const t = on(m(this, me), this.threshold, Yg(m(this, me))), A = kn(m(this, Tt), m(this, me));
    return sx(A, t);
  }
}
Tt = new WeakMap(), me = new WeakMap();
class qE {
  static getFaceValidationInstance(I, t, A, e) {
    return new lE([new GE(I.faceConfidence, t.confidence), new FE(I.leftEye.confidence, t.leftEye.confidence), new KE(I.rightEye.confidence, t.rightEye.confidence), new yE(I.minFaceSizeRatio, t.faceSize), new WE(I.maxFaceSizeRatio, t.faceSize), new bE(I.sharpnessThreshold, t.sharpness), new fE(I.brightnessLowThreshold, t.brightness), new pE(I.brightnessHighThreshold, t.brightness), new TE(I.outOfBoundsThreshold, t, A), new Y0(I.devicePitchAngleThreshold, e), new SE(I.mouth.confidence, t.mouth.confidence), new vE(I.mouth.status.max, t.mouth.status), new LE(I.mouth.status.min, t.mouth.status)]);
  }
}
class Xn extends IE {
  constructor() {
    super(...arguments);
    p(this, "className", "FaceValidationService");
    p(this, "acceleration", null);
  }
  validateDetectedObject(t, A) {
    const e = qE.getFaceValidationInstance(this.getThresholds(), t, A, this.acceleration);
    return e.validate(), e;
  }
}
const yt = class yt extends tE {
  constructor(t, A, e, o) {
    super(e, o);
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  static async createInstance(t) {
    const A = yt.getWorkerPath(hE, t), e = {};
    e.type = "module";
    const o = new Worker(new URL(A, import.meta.url), e), i = co(o), C = await new i(), n = new Xn(), B = new _n(C, n);
    return new yt(C, n, B, t);
  }
  static async getInstance(t) {
    return !this._instance && (this._instance = await this.createInstance(t)), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), rn(qA.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], Ga);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
  areVersionsCompatible(t) {
    return t === dE;
  }
};
p(yt, "_instance");
let oI = yt;
const zn = {};
zn.controllerClass = oI;
function ZE({ controllerClass: g } = zn) {
  const { handleError: I } = ot(), { acceleration: t } = qx(), { assetsDirectoryPath: A, thresholds: e } = Bo(), [o, i] = cA();
  T(() => {
    (async () => {
      const B = await g.getInstance(A);
      try {
        await B.init(), i(B);
      } catch (a) {
        if (a instanceof Error) {
          I(U.fromError(a));
          return;
        }
      }
    })();
  }, [g, I, A]), T(() => {
    o && o.setThresholds(e);
  }, [o, e]), T(() => {
    o && o.setAcceleration(t);
  }, [t, o]);
  const C = {};
  return C.controller = o, C;
}
const PE = "SAM v1.44.0 for idcards", jE = "/dot-assets/smile/dot-DnN28Ay4.js";
class iI extends oI {
  static async createInstance(I) {
    const t = iI.getWorkerPath(jE, I), A = {};
    A.type = "module";
    const e = new Worker(new URL(t, import.meta.url), A), o = co(e), i = await new o(), C = new Xn(), n = new _n(i, C);
    return new iI(i, C, n, I);
  }
  areVersionsCompatible(I) {
    return I === PE;
  }
}
function VE({ onPhotoTakenInternal: g }) {
  const { sunfish: I } = it(), { controller: t } = ZE({ controllerClass: iI }), { cameraResolution: A, detectionDetails: e, shouldCameraMirror: o, videoRef: i } = eE({
    controller: t,
    onPhotoTakenInternal: g
  });
  return /* @__PURE__ */ D(LA, { children: /* @__PURE__ */ D(
    mr,
    {
      cameraResolution: A,
      detectionDetails: e,
      shouldMirror: o,
      children: /* @__PURE__ */ D(
        Qa,
        {
          ref: i,
          $isImageMirror: o,
          $isVisible: I,
          autoPlay: !0,
          id: ka,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function _E(g, I, t) {
  const { SmileLivenessContent: A } = Me.v4, e = await J0(g), o = await J0(I), i = await Un(t), C = {};
  C.neutralExpressionFaceImage = e, C.smileExpressionFaceImage = o, C.metadata = i;
  const n = C, B = A.verify(n);
  if (B) throw Error(B);
  const a = A.create(n), Q = {};
  return Q.smileLivenessContent = a, Kn(Q);
}
async function XE(g, I, t) {
  const A = await _E(g, I, t);
  return Hn(A);
}
function zE() {
  return { images: { fps: new pt(30), mouthStatus: new pt(53 * 93 + -8936 + -236 * -17) }, imageResolution: void (-7394 + 1987 * 1 + 5407) };
}
function $E({ skip: g }) {
  const I = eA(zE()), { analytics: t } = to(), { crosshatch: A } = it(), e = eA(!1);
  function o() {
    const B = I.current, a = Re(B.images.fps), Q = Re(B.images.mouthStatus);
    e.current = !0;
    const E = {};
    E.customer = A == null ? void 0 : A.customer, E.duration = pi, E.averageFps = a, E.imageResolution = B.imageResolution, E.averageExpressionScore = Q, t == null || t.trackLongCapture(E);
  }
  const i = {};
  i.callback = o, i.delay = pi * 1e3, i.skip = g || e.current, pn(i);
  const C = GA((B) => {
    if (!B.detail) return;
    const { data: a } = B.detail;
    I.current.images.fps.pushFixed(a.fps), I.current.images.mouthStatus.pushFixed(a.detection.mouth.status), I.current.imageResolution = a.imageResolution;
  }, []);
  oo(qA.FACE_DETECTION, C);
  const n = {};
  return n.wasEventTriggered = e, n;
}
function As(g) {
  const I = g.sort((e, o) => e - o), t = Math.floor(I.length / (3 * 2831 + -1084 + 3 * -2469));
  return I.length % (-12018 + -20 * -601) === -459 * -3 + -1455 + 78 ? (I[t - (-4255 + 9313 * 1 + 5057 * -1)] + I[t]) / (-287 + 1 * 289) : I[t];
}
function es() {
  const [g, I] = cA(void 0), t = eA(!0), A = eA([]), e = GA((n) => {
    if (!n.detail || !t.current) return;
    const { data: B } = n.detail;
    if (!B.isInCandidateSelection) return;
    const a = B.detection.mouth.status;
    a < Qo && A.current.push(a);
  }, []);
  function o() {
    A.current = [], t.current = !0, I(void (-335 * 27 + 6 * -51 + 9351));
  }
  function i() {
    t.current = !1, I(As(A.current));
  }
  const C = {};
  return C.median = g, C.reset = o, C.stop = i, C.handleFaceDetection = e, C;
}
function ts(g) {
  return function() {
    const { handleFaceDetection: t, median: A, reset: e, stop: o } = g();
    oo(qA.FACE_DETECTION, t);
    const i = {};
    return i.median = A, i.reset = e, i.stop = o, i;
  };
}
function gs({ phase: g }) {
  const [I, t] = cA(Mg.AUTO_CAPTURE), A = mn(I);
  function e() {
    t(Mg.WAIT_FOR_REQUEST), A(() => Lx(Dg.FIRST_FRAME));
  }
  const o = {};
  o.callback = e, o.delay = cr, o.skip = g === KA.NEUTRAL;
  const { clear: i, isActive: C, reset: n } = pn(o), B = {};
  return B.captureMode = I, B.restart = n, B.stop = i, B.isActive = C, B;
}
function Is(g, I, t) {
  switch (g) {
    case KA.SMILE:
      return { ...sr(I), ...t };
    case KA.NEUTRAL:
    default:
      return { ...rr(), ...t };
  }
}
const os = ({
  assetsDirectoryPath: g,
  onComplete: I,
  sessionToken: t,
  thresholds: A
}) => {
  var _t;
  const { analytics: e } = to(), { appState: o, handleAppStateChange: i, handleError: C } = da(), { cameraProperties: n, mergeCameraProperties: B } = Cr(), a = mn(o), Q = qe(KA.NEUTRAL), E = qe(null), r = qe(null), { captureMode: s, stop: d } = gs({ phase: Q.value }), {
    median: h,
    reset: x,
    stop: u
  } = ts(es)();
  $E({
    skip: Q.value !== KA.NEUTRAL || o !== TA.RUNNING
  });
  function w(Ie) {
    Q.value = Ie, w0(Sg.STATUS_CHANGED, { phase: Ie });
  }
  function R() {
    i(TA.WAITING), a(() => i(TA.RUNNING));
  }
  function S() {
    d(), x(), R(), w(KA.NEUTRAL), E.value = null, r.value = null, e == null || e.reset();
  }
  ar(Qr)({
    onFaceTrackingLost: S,
    skipOutsideOfCandidateSelection: Q.value === KA.NEUTRAL
  });
  function M(Ie) {
    E.value = Ie, u(), w(KA.SMILE), i(TA.RUNNING);
  }
  async function y(Ie) {
    d(), r.value = Ie;
    try {
      if (!E.value || !r.value)
        throw new U("Missing face data");
      const re = {
        sessionToken: t,
        web: n.value
      }, DI = await XE(
        E.value.image,
        r.value.image,
        re
      ), Xt = [E.value, r.value];
      I(Xt, DI), e == null || e.trackLivenessProcess(Xt), i(TA.DONE);
    } catch (re) {
      re instanceof Error && C(U.fromError(re));
      return;
    }
  }
  const q = {
    [KA.NEUTRAL]: M,
    [KA.SMILE]: y
  }, L = ((_t = E.value) == null ? void 0 : _t.data.detection.mouth.status) ?? Qo, j = Is(
    Q.value,
    h ?? L,
    A
  ), ge = mA(
    () => ({
      assetsDirectoryPath: g,
      captureMode: s,
      onPhotoTaken: q[Q.value],
      thresholds: j
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, s, Q.value, j]
  );
  return /* @__PURE__ */ D(xr, { children: /* @__PURE__ */ D(Br, { cameraOptions: ge, children: /* @__PURE__ */ D(VE, { onPhotoTakenInternal: B }) }) });
};
function is({ initAppState: g, onError: I }) {
  const [t, A] = cA(g), [e, o] = cA(), [i, C] = cA(!1), n = eA(I);
  T(() => {
    n.current = I;
  }, [I]);
  const B = {};
  return B.appState = t, B.setAppState = A, B.error = e, B.setError = o, B.isCameraReady = i, B.setIsCameraReady = C, B.onErrorRef = n, B;
}
function Cs(g) {
  return g !== TA.RUNNING && g !== TA.WAITING ? Ug.VISIBLE : Ug.VISIBLE_WITH_MASK;
}
function ns({ onError: g }) {
  const { appState: I, error: t, isCameraReady: A, onErrorRef: e, setAppState: o, setError: i, setIsCameraReady: C } = is({
    initAppState: TA.LOADING,
    onError: g
  }), n = Cs(I), B = GA(
    (Q) => {
      w0(Sg.STATUS_CHANGED, { state: TA.ERROR, error: Q }), C(!1), e.current(Q), i(Q), o(TA.ERROR);
    },
    [C, e, i, o]
  ), a = GA(
    (Q) => {
      o(Q), w0(Sg.STATUS_CHANGED, { state: Q });
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
var ho = ((g) => (g.AUTO_CAPTURE = "auto-capture", g.LONG_CAPTURE_SMILE = "long-capture-smile", g))(ho || {});
class Bs {
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
    const C = ig(i);
    try {
      await fetch("" + o + C + "&" + I, e);
    } catch (n) {
      console.error("Countly Error", n);
    }
  }
  async init(I, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = I;
    const A = { _app_version: en() }, e = { organization: tn(window.location.href) }, o = ig({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(e) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const t = ig(I);
    await this.countlyFetch(t);
  }
  async sendEvent(I, t, A) {
    const e = {};
    e.key = I, e.count = 1, e.dur = A, e.segmentation = t;
    const o = [e], i = ig({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, t) {
    await this.sendEvent(ho.AUTO_CAPTURE, I, t);
  }
}
const xg = new Bs();
class Qs {
  constructor() {
    p(this, "countly", xg);
  }
  createSegmentation(I) {
    return { appVersion: en(), ...I };
  }
  init(I) {
    if (ox()) return;
    const t = zx();
    xg.init(t, I);
  }
  endSession() {
    xg.endSession();
  }
  walleye(I, t) {
    const A = {};
    A.nocturne = I, A.customer = t;
    const e = this.createSegmentation(A);
    xg.sendAutoCaptureEvent(e);
  }
}
class as extends Qs {
  constructor() {
    super(...arguments);
    p(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class xs extends as {
  trackLivenessProcess(I) {
    var a, Q, E, r, s, d;
    if (!I.length || !this.captureProcessAnalytics.length) return;
    const [t, A] = I, [e, o] = this.captureProcessAnalytics, i = Ar(e.averageFps + (o == null ? void 0 : o.averageFps)) / (5 + -5393 * -1 + -142 * 38), C = yi(e.captureProcessDurationInMs), n = yi(o.captureProcessDurationInMs), B = this.createSegmentation({ faceSize: wi((a = A.data.detection) == null ? void 0 : a.faceSize), confidence: wi((Q = t.data.detection) == null ? void 0 : Q.confidence), imageResolution: ((r = (E = t.data) == null ? void 0 : E["imageResolution"]) == null ? void 0 : r.width) + "x" + ((d = (s = t.data) == null ? void 0 : s["imageResolution"]) == null ? void 0 : d.height), averageFps: i, captureTimeNeutral: Di(C), captureTimeSmile: Di(n), camera: $x(e == null ? void 0 : e.deviceName, e.facingMode), instructionSet: e.instructionSet });
    this.countly.sendAutoCaptureEvent(B, C + n), this.reset();
  }
  async trackLongCapture(I) {
    const { averageExpressionScore: t, averageFps: A, customer: e, duration: o, imageResolution: i } = I, C = this.createSegmentation({ imageResolution: i, averageFps: A, instructionSet: await yn(), expressionScore: t, ...e && { customer: e } });
    this.countly.sendEvent(ho.LONG_CAPTURE_SMILE, C, o);
  }
}
const rs = new xs(), Es = ({ props: g }) => g ? /* @__PURE__ */ D(ta, { target: g.styleTarget, children: /* @__PURE__ */ D(
  hx,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: y0.getInstance(),
    children: /* @__PURE__ */ D(fx, { analytics: rs, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ D(
      ca,
      {
        value: ns({
          onError: g.onError
        }),
        children: /* @__PURE__ */ D(PC, { children: /* @__PURE__ */ D(os, { ...g }) })
      }
    ) })
  }
) }) : null;
rB(Es, "x-dot-smile-liveness", ["props"]);
