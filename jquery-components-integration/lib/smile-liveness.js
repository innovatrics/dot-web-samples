var $n = Object.defineProperty;
var wo = (g) => {
  throw TypeError(g);
};
var AB = (g, I, t) => I in g ? $n(g, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[I] = t;
var p = (g, I, t) => AB(g, typeof I != "symbol" ? I + "" : I, t), po = (g, I, t) => I.has(g) || wo("Cannot " + t);
var m = (g, I, t) => (po(g, I, "read from private field"), t ? t.call(g) : I.get(g)), H = (g, I, t) => I.has(g) ? wo("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, t), Y = (g, I, t, A) => (po(g, I, "write to private field"), A ? A.call(g, t) : I.set(g, t), t);
var Zt, b, Oi, Ti, de, mo, qi, P0, KI, V0, _0, Zi, pt = {}, ji = [], eB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Q0 = Array.isArray;
function ee(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function Pi(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function fA(g, I, t) {
  var A, e, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : i[o] = I[o];
  if (arguments.length > -1688 + -5147 * -1 + -3457 && (i.children = arguments.length > 2344 * -3 + -1 * -9126 + -2091 ? Zt.call(arguments, 3785 + 39 * -97) : t), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) void (-1313 * 3 + -453 + 8 * 549) === i[o] && (i[o] = g.defaultProps[o]);
  return lt(g, i, A, e, null);
}
function lt(g, I, t, A, e) {
  var o = {};
  o.type = g, o.props = I, o.key = t, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (5822 * -1 + -2963 * -3 + -1 * 3067), o.__c = null, o.constructor = void (-3161 * 2 + 346 * -23 + 680 * 21), o.__v = e ?? ++Oi, o.__i = -(-17 * -177 + 5347 + 1671 * -5), o.__u = 0;
  var i = o;
  return e == null && b.vnode != null && b.vnode(i), i;
}
function tB() {
  var g = {};
  return g.current = null, g;
}
function MA(g) {
  return g.children;
}
function RA(g, I) {
  this.props = g, this.context = I;
}
function ke(g, I) {
  if (I == null) return g.__ ? ke(g.__, g.__i + (-10040 + -1 * -10041)) : null;
  for (var t; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) return t.__e;
  return typeof g.type == "function" ? ke(g) : null;
}
function Vi(g) {
  var I, t;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = 4881 + -1175 * -3 + -8406; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) {
      g.__e = g.__c.base = t.__e;
      break;
    }
    return Vi(g);
  }
}
function X0(g) {
  (!g.__d && (g.__d = !(5552 + 2776 * -2)) && de.push(g) && !kg.__r++ || mo !== b.debounceRendering) && ((mo = b.debounceRendering) || qi)(kg);
}
function kg() {
  var g, I, t, A, e, o, i, C;
  for (de.sort(P0); g = de.shift(); ) g.__d && (I = de.length, A = void (-9967 + -9967 * -1), o = (e = (t = g).__v).__e, i = [], C = [], t.__P && ((A = ee({}, e)).__v = e.__v + (-6722 * 1 + 3452 + 3271 * 1), b.vnode && b.vnode(A), OI(t.__P, A, e, t.__n, t.__P.namespaceURI, 82 * -83 + 4517 + -1 * -2321 & e.__u ? [o] : null, i, o ?? ke(e), !!(1209 + 3 * -531 + 1 * 416 & e.__u), C), A.__v = e.__v, A.__.__k[A.__i] = A, zi(i, A, C), A.__e != o && Vi(A)), de.length > I && de.sort(P0));
  kg.__r = -61 * 109 + 1 * -3032 + -3 * -3227;
}
function _i(g, I, t, A, e, o, i, C, n, B, a) {
  var Q, E, r, s, d, h = A && A.__k || ji, x = I.length;
  for (t.__d = n, gB(t, I, h), n = t.__d, Q = 4 * -1534 + -117 * -50 + 286; Q < x; Q++) (r = t.__k[Q]) != null && typeof r != "boolean" && typeof r != "function" && (E = -(96 * -7 + -3202 * 1 + 3875) === r.__i ? pt : h[r.__i] || pt, r.__i = Q, OI(g, r, E, e, o, i, C, n, B, a), s = r.__e, r.ref && E.ref != r.ref && (E.ref && TI(E.ref, null, r), a.push(r.ref, r.__c || s, r)), d == null && s != null && (d = s), 67756 + -28 * 1316 + -4 * -8657 & r.__u || E.__k === r.__k ? (n && typeof r.type == "string" && !g.contains(n) && (n = ke(E)), n = Xi(r, n, g)) : typeof r.type == "function" && r.__d !== void 0 ? n = r.__d : s && (n = s.nextSibling), r.__d = void (38 * -119 + -9018 + -6770 * -2), r.__u &= -(-632031 + -8 * -103580));
  t.__d = n, t.__e = d;
}
function gB(g, I, t) {
  var A, e, o, i, C, n = I.length, B = t.length, a = B, Q = -4969 * -1 + 269 * -1 + -4700;
  for (g.__k = [], A = -161 * -8 + 1 * 269 + -1557; A < n; A++) i = A + Q, (e = g.__k[A] = (e = I[A]) == null || typeof e == "boolean" || typeof e == "function" ? null : typeof e == "string" || typeof e == "number" || typeof e == "bigint" || e.constructor == String ? lt(null, e, null, null, null) : Q0(e) ? lt(MA, { children: e }, null, null, null) : e.constructor === void 0 && e.__b > 1202 * -7 + 29 + 8385 ? lt(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v) : e) != null ? (e.__ = g, e.__b = g.__b + (46 * -31 + -1 * 4405 + -108 * -54), C = IB(e, t, i, a), e.__i = C, o = null, -(7388 + -2 * 1978 + 73 * -47) !== C && (a--, (o = t[C]) && (o.__u |= -19 * 12004 + -753 * -301 + 132495)), o == null || o.__v === null ? (-(-42 * 226 + 8112 + 1381) == C && Q--, typeof e.type != "function" && (e.__u |= -5773 * -19 + -7462 * -4 + -73999)) : C !== i && (C == i - (167 * -9 + 4289 * 1 + -2785) ? Q = C - i : C == i + 1 ? Q++ : C > i ? a > n - i ? Q += C - i : Q-- : C < i && Q++, C !== A + Q && (e.__u |= -10 * -10675 + -128842 + 87628))) : (o = t[i]) && o.key == null && o.__e && 84 * 53 + -19 * 457 + 4231 == (131072 & o.__u) && (o.__e == g.__d && (g.__d = ke(o)), z0(o, o, !(-8 * -32 + -9281 + 9026 * 1)), t[i] = null, a--);
  if (a)
    for (A = 8281 + -1 * 8861 + 580; A < B; A++) (o = t[A]) != null && 2471 + 6172 * -1 + 3701 == (-5 * 22613 + 159837 * 1 + -3 * -28100 & o.__u) && (o.__e == g.__d && (g.__d = ke(o)), z0(o, o));
}
function Xi(g, I, t) {
  var A, e;
  if (typeof g.type == "function") {
    for (A = g.__k, e = 3795 + 3022 * 1 + 1 * -6817; A && e < A.length; e++) A[e] && (A[e].__ = g, I = Xi(A[e], I, t));
    return I;
  }
  g.__e != I && (t.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && 313 * 14 + 6813 + -33 * 339 === I.nodeType);
  return I;
}
function te(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || (Q0(g) ? g.some(function(t) {
    te(t, I);
  }) : I.push(g)), I;
}
function IB(g, I, t, A) {
  var e = g.key, o = g.type, i = t - (-7 * 605 + 3796 + 440), C = t + (4975 * -2 + -5151 + -9 * -1678), n = I[t];
  if (n === null || n && e == n.key && o === n.type && -320 + 491 * 2 + -662 == (28 * 370 + -141507 * -1 + -20795 & n.__u)) return t;
  if (A > (n != null && -149 * -42 + -6339 + -9 * -9 == (97534 + -31 * -7209 + -11173 * 17 & n.__u) ? -2443 + 94 * 26 : -1 * -601 + -1 * -7537 + -8138)) for (; i >= 2 * 4609 + -6510 * 1 + 4 * -677 || C < I.length; ) {
    if (i >= 1604 + 2885 * 1 + -4489) {
      if ((n = I[i]) && -3 * 67 + 6679 + -6478 == (-135877 * -1 + 5 * -38351 + 186950 & n.__u) && e == n.key && o === n.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((n = I[C]) && -1 * 4084 + 26 * -137 + 2 * 3823 == (131072 & n.__u) && e == n.key && o === n.type) return C;
      C++;
    }
  }
  return -(-4804 + 1 * 3037 + 52 * 34);
}
function Go(g, I, t) {
  I[0] === "-" ? g.setProperty(I, t ?? "") : g[I] = t == null ? "" : typeof t != "number" || eB.test(I) ? t : t + "px";
}
function tg(g, I, t, A, e) {
  var o;
  A: if (I === "style")
    if (typeof t == "string") g.style.cssText = t;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) t && I in t || Go(g.style, I, "");
      if (t)
        for (I in t) A && t[I] === A[I] || Go(g.style, I, t[I]);
    }
  else if (I[-5169 + -83 * -114 + -4293] === "o" && I[6429 + -1 * 6428] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(27 * -136 + -3754 * 1 + 7428) : I.slice(3090 + 1 * -5101 + 1 * 2013), g.l || (g.l = {}), g.l[I + o] = t, t ? A ? t.u = A.u : (t.u = KI, g.addEventListener(I, o ? _0 : V0, o)) : g.removeEventListener(I, o ? _0 : V0, o);
  else {
    if (e == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(198 * -43 + -777 * 12 + -1 * -17839) === t && I[8373 * -1 + -5719 + 14096] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && 2519 + 4678 * -1 + -144 * -15 == t ? "" : t));
  }
}
function ko(g) {
  return function(I) {
    if (this.l) {
      var t = this.l[I.type + g];
      if (I.t == null) I.t = KI++;
      else if (I.t < t.u) return;
      return t(b.event ? b.event(I) : I);
    }
  };
}
function OI(g, I, t, A, e, o, i, C, n, B) {
  var a, Q, E, r, s, d, h, x, u, w, R, S, M, y, q, L, P = I.type;
  if (void (-16409 + -61 * -269) !== I.constructor) return null;
  56 * 13 + 703 * -13 + -1 * -8539 & t.__u && (n = !!(13 * -739 + -2030 + 11669 & t.__u), o = [C = I.__e = t.__e]), (a = b.__b) && a(I);
  A: if (typeof P == "function") try {
    if (x = I.props, u = "prototype" in P && P.prototype.render, w = (a = P.contextType) && A[a.__c], R = a ? w ? w.props.value : a.__ : A, t.__c ? h = (Q = I.__c = t.__c).__ = Q.__E : (u ? I.__c = Q = new P(x, R) : (I.__c = Q = new RA(x, R), Q.constructor = P, Q.render = iB), w && w.sub(Q), Q.props = x, Q.state || (Q.state = {}), Q.context = R, Q.__n = A, E = Q.__d = !(-9043 * -1 + 8927 + -17970), Q.__h = [], Q._sb = []), u && Q.__s == null && (Q.__s = Q.state), u && P.getDerivedStateFromProps != null && (Q.__s == Q.state && (Q.__s = ee({}, Q.__s)), ee(Q.__s, P.getDerivedStateFromProps(x, Q.__s))), r = Q.props, s = Q.state, Q.__v = I, E) u && P.getDerivedStateFromProps == null && Q.componentWillMount != null && Q.componentWillMount(), u && Q.componentDidMount != null && Q.__h.push(Q.componentDidMount);
    else {
      if (u && P.getDerivedStateFromProps == null && x !== r && Q.componentWillReceiveProps != null && Q.componentWillReceiveProps(x, R), !Q.__e && (Q.shouldComponentUpdate != null && !(5231 + -33 * 151 + -247) === Q.shouldComponentUpdate(x, Q.__s, R) || I.__v === t.__v)) {
        for (I.__v !== t.__v && (Q.props = x, Q.state = Q.__s, Q.__d = !(-2 * 556 + -1483 * -3 + -3336)), I.__e = t.__e, I.__k = t.__k, I.__k.forEach(function(Ie) {
          Ie && (Ie.__ = I);
        }), S = -5782 + -8 * 520 + -1657 * -6; S < Q._sb.length; S++) Q.__h.push(Q._sb[S]);
        Q._sb = [], Q.__h.length && i.push(Q);
        break A;
      }
      Q.componentWillUpdate != null && Q.componentWillUpdate(x, Q.__s, R), u && Q.componentDidUpdate != null && Q.__h.push(function() {
        Q.componentDidUpdate(r, s, d);
      });
    }
    if (Q.context = R, Q.props = x, Q.__P = g, Q.__e = !(-4346 + -1 * -9895 + -5548), M = b.__r, y = 6558 + 14 * -138 + 1542 * -3, u) {
      for (Q.state = Q.__s, Q.__d = !(-761 * -9 + -6573 * -1 + -1 * 13421), M && M(I), a = Q.render(Q.props, Q.state, Q.context), q = 12 * -585 + 2 * -2081 + -5591 * -2; q < Q._sb.length; q++) Q.__h.push(Q._sb[q]);
      Q._sb = [];
    } else do
      Q.__d = !(89 * 67 + -7775 + 7 * 259), M && M(I), a = Q.render(Q.props, Q.state, Q.context), Q.state = Q.__s;
    while (Q.__d && ++y < 3877 + -524 * 14 + -52 * -67);
    Q.state = Q.__s, Q.getChildContext != null && (A = ee(ee({}, A), Q.getChildContext())), u && !E && Q.getSnapshotBeforeUpdate != null && (d = Q.getSnapshotBeforeUpdate(r, s)), _i(g, Q0(L = a != null && a.type === MA && a.key == null ? a.props.children : a) ? L : [L], I, t, A, e, o, i, C, n, B), Q.base = I.__e, I.__u &= -(1322 * 4 + -1 * -8993 + 14120 * -1), Q.__h.length && i.push(Q), h && (Q.__E = Q.__ = null);
  } catch (Ie) {
    I.__v = null, n || o != null ? (I.__e = C, I.__u |= n ? -1 * 8697 + -291 * -26 + -1 * -1291 : 4 * 1553 + -4376 * -2 + -14932, o[o.indexOf(C)] = null) : (I.__e = t.__e, I.__k = t.__k), b.__e(Ie, I, t);
  }
  else o == null && I.__v === t.__v ? (I.__k = t.__k, I.__e = t.__e) : I.__e = oB(t.__e, I, t, A, e, o, i, n, B);
  (a = b.diffed) && a(I);
}
function zi(g, I, t) {
  I.__d = void 0;
  for (var A = 148 * 61 + -7 * -273 + -10939; A < t.length; A++) TI(t[A], t[++A], t[++A]);
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
function oB(g, I, t, A, e, o, i, C, n) {
  var B, a, Q, E, r, s, d, h = t.props, x = I.props, u = I.type;
  if (u === "svg" ? e = "http://www.w3.org/2000/svg" : u === "math" ? e = "http://www.w3.org/1998/Math/MathML" : e || (e = "http://www.w3.org/1999/xhtml"), o != null) {
    for (B = -1 * 8991 + -4879 * 2 + 18749; B < o.length; B++) if ((r = o[B]) && "setAttribute" in r == !!u && (u ? r.localName === u : -2460 + 1 * 2463 === r.nodeType)) {
      g = r, o[B] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(x);
    g = document.createElementNS(e, u, x.is && x), o = null, C = !(2 * -3602 + -6703 + 13908);
  }
  if (u === null) h === x || C && g.data === x || (g.data = x);
  else {
    if (o = o && Zt.call(g.childNodes), h = t.props || pt, !C && o != null)
      for (h = {}, B = -41 * 121 + 6372 + 1 * -1411; B < g.attributes.length; B++) h[(r = g.attributes[B]).name] = r.value;
    for (B in h) if (r = h[B], B != "children") {
      if (B == "dangerouslySetInnerHTML") Q = r;
      else if (B !== "key" && !(B in x)) {
        if (B == "value" && "defaultValue" in x || B == "checked" && "defaultChecked" in x) continue;
        tg(g, B, null, r, e);
      }
    }
    for (B in x) r = x[B], B == "children" ? E = r : B == "dangerouslySetInnerHTML" ? a = r : B == "value" ? s = r : B == "checked" ? d = r : B === "key" || C && typeof r != "function" || h[B] === r || tg(g, B, r, h[B], e);
    if (a) C || Q && (a.__html === Q.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (Q && (g.innerHTML = ""), _i(g, Q0(E) ? E : [E], I, t, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e, o, i, o ? o[4407 + 3 * -1941 + -24 * -59] : t.__k && ke(t, 4381 * -1 + 4407 + -26), C, n), o != null)
      for (B = o.length; B--; ) o[B] != null && Pi(o[B]);
    C || (B = "value", void (3 * 2594 + 1 * 7121 + 14903 * -1) !== s && (s !== g[B] || u === "progress" && !s || u === "option" && s !== h[B]) && tg(g, B, s, h[B], e), B = "checked", void (-605 * -3 + -2 * -2378 + -6571) !== d && d !== g[B] && tg(g, B, d, h[B], e));
  }
  return g;
}
function TI(g, I, t) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    b.__e(A, t);
  }
}
function z0(g, I, t) {
  var A, e;
  if (b.unmount && b.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || TI(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      b.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (e = -1487 + 64 * -57 + 5135 * 1; e < A.length; e++) A[e] && z0(A[e], I, t || typeof g.type != "function");
  t || g.__e == null || Pi(g.__e), g.__c = g.__ = g.__e = g.__d = void 0;
}
function iB(g, I, t) {
  return this.constructor(g, t);
}
function ae(g, I, t) {
  var A, e, o, i;
  b.__ && b.__(g, I), e = (A = typeof t == "function") ? null : t && t.__k || I.__k, o = [], i = [], OI(I, g = (!A && t || I).__k = fA(MA, null, [g]), e || pt, pt, I.namespaceURI, !A && t ? [t] : e ? null : I.firstChild ? Zt.call(I.childNodes) : null, o, !A && t ? t : e ? e.__e : I.firstChild, A, i), zi(o, g, i);
}
function qI(g, I) {
  ae(g, I, qI);
}
function ZI(g, I, t) {
  var A, e, o, i, C = ee({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : C[o] = void (6 * 1361 + 230 + -8396) === I[o] && void (3791 * 1 + -1 * -5691 + -9482) !== i ? i[o] : I[o];
  return arguments.length > 4892 + 5 * -1547 + 2845 * 1 && (C.children = arguments.length > 993 * 5 + -2555 + 29 * -83 ? Zt.call(arguments, -11 * 3 + 5735 + -5700) : t), lt(g.type, C, A || g.key, e || g.ref, null);
}
function jt(g, I) {
  var t = { __c: I = "__cC" + Zi++, __: g, Consumer: function(A, e) {
    return A.children(e);
  }, Provider: function(A) {
    var e, o;
    return this.getChildContext || (e = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && e.some(function(C) {
        C.__e = !0, X0(C);
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
Zt = ji.slice, b = { __e: function(g, I, t, A) {
  for (var e, o, i; I = I.__; ) if ((e = I.__c) && !e.__) try {
    if ((o = e.constructor) && o.getDerivedStateFromError != null && (e.setState(o.getDerivedStateFromError(g)), i = e.__d), e.componentDidCatch != null && (e.componentDidCatch(g, A || {}), i = e.__d), i) return e.__E = e;
  } catch (C) {
    g = C;
  }
  throw g;
} }, Oi = 0, Ti = function(g) {
  return g != null && g.constructor == null;
}, RA.prototype.setState = function(g, I) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof g == "function" && (g = g(ee({}, t), this.props)), g && ee(t, g), g != null && this.__v && (I && this._sb.push(I), X0(this));
}, RA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(-2384 * 2 + -1519 + -6287 * -1), g && this.__h.push(g), X0(this));
}, RA.prototype.render = MA, de = [], qi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, P0 = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, kg.__r = 5 * 1941 + 1 * 8089 + -574 * 31, KI = 5628 + 1876 * -3, V0 = ko(!(-3626 + 13 * 279)), _0 = ko(!(-6963 * 1 + 4664 + 2299)), Zi = -54 * 8 + -1584 * -1 + 1152 * -1;
function jI() {
  return (jI = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = -1 * -5961 + -8753 * -1 + -14713; I < arguments.length; I++) {
      var t = arguments[I];
      for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (g[A] = t[A]);
    }
    return g;
  }).apply(this, arguments);
}
var CB = ["context", "children"];
function nB(g) {
  this.getChildContext = function() {
    return g.context;
  };
  var I = g.children, t = function(A, e) {
    if (A == null) return {};
    var o, i, C = {}, n = Object.keys(A);
    for (i = -9317 + -6563 * -1 + 2754; i < n.length; i++) e.indexOf(o = n[i]) >= -218 * 14 + -188 * -40 + -4468 || (C[o] = A[o]);
    return C;
  }(g, CB);
  return ZI(I, t);
}
function BB() {
  var g = {};
  g.detail = {}, g.bubbles = !(719 * -1 + -1513 + -4 * -558), g.cancelable = !(-9 * 636 + 7783 + -29 * 71);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = fA(nB, jI({}, this._props, { context: I.detail.context }), function t(A, e) {
    if (17 * -461 + -113 * -17 + 5919 === A.nodeType) return A.data;
    if (A.nodeType !== 1) return null;
    var o = [], i = {}, C = 0, n = A.attributes, B = A.childNodes;
    for (C = n.length; C--; ) n[C].name !== "slot" && (i[n[C].name] = n[C].value, i[$i(n[C].name)] = n[C].value);
    for (C = B.length; C--; ) {
      var a = t(B[C], null), Q = B[C].slot;
      Q ? i[Q] = fA(bo, { name: Q }, a) : o[C] = a;
    }
    var E = e ? fA(bo, null, o) : o;
    return fA(e || A.nodeName.toLowerCase(), i, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? qI : ae)(this._vdom, this._root);
}
function $i(g) {
  return g.replace(/-(\w)/g, function(I, t) {
    return t ? t.toUpperCase() : "";
  });
}
function QB(g, I, t) {
  if (this._vdom) {
    var A = {};
    A[g] = t = t ?? void (710 + -2 * 355), A[$i(g)] = t, this._vdom = ZI(this._vdom, A), ae(this._vdom, this._root);
  }
}
function aB() {
  ae(this._vdom = null, this._root);
}
function bo(g, I) {
  var t = this;
  return fA("slot", jI({}, g, { ref: function(A) {
    A ? (t.ref = A, t._listener || (t._listener = function(e) {
      e.stopPropagation(), e.detail.context = I;
    }, A.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function xB(g, I, t, A) {
  function e() {
    var o = Reflect.construct(HTMLElement, [], e);
    return o._vdomComponent = g, o._root = o, o;
  }
  return (e.prototype = Object.create(HTMLElement.prototype)).constructor = e, e.prototype.connectedCallback = BB, e.prototype.attributeChangedCallback = QB, e.prototype.disconnectedCallback = aB, t = t || g.observedAttributes || Object.keys(g.propTypes || {}), e.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(e.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var C = typeof i;
      i != null && C !== "string" && C !== "boolean" && C !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(I, e);
}
var rB = -2 * -1604 + -7695 + 4487;
function D(g, I, t, A, e, o) {
  I || (I = {});
  var i, C, n = I;
  if ("ref" in n)
    for (C in n = {}, I) C == "ref" ? i = I[C] : n[C] = I[C];
  var B = {};
  B.type = g, B.props = n, B.key = t, B.ref = i, B.__k = null, B.__ = null, B.__b = 0, B.__e = null, B.__d = void 0, B.__c = null, B.constructor = void (-6381 + -1 * 9742 + 16123), B.__v = --rB, B.__i = -1, B.__u = 0, B.__source = e, B.__self = o;
  var a = B;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (-310 * 4 + 1 * -4778 + 6018) === n[C] && (n[C] = i[C]);
  return b.vnode && b.vnode(a), a;
}
var wA = function() {
  return wA = Object.assign || function(I) {
    for (var t, A = 1, e = arguments.length; A < e; A++) {
      t = arguments[A];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (I[o] = t[o]);
    }
    return I;
  }, wA.apply(this, arguments);
};
function je(g, I, t) {
  if (t || arguments.length === 2) for (var A = 0, e = I.length, o; A < e; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function EB(g) {
  var I = Object.create(null);
  return function(t) {
    return I[t] === void 0 && (I[t] = g(t)), I[t];
  };
}
var sB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cB = EB(function(g) {
  return sB.test(g) || g.charCodeAt(307 * -31 + -2551 * -1 + -81 * -86) === 662 * 1 + -251 * 30 + 1 * 6979 && g.charCodeAt(7072 + 2357 * -3) === 42 * -135 + -5668 + -1431 * -8 && g.charCodeAt(1 * -3473 + -13 * 369 + 8272) < 91;
}), xe, j, k0, No, Pe = 9545 + 6 * 483 + 23 * -541, AC = [], V = b, Fo = V.__b, Ro = V.__r, So = V.diffed, Mo = V.__c, Lo = V.unmount, Jo = V.__;
function At(g, I) {
  V.__h && V.__h(j, g, Pe || I), Pe = -39 * -108 + -9 * 47 + -3789;
  var t = {};
  t.__ = [], t.__h = [];
  var A = j.__H || (j.__H = t);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function EA(g) {
  return Pe = 287 * 19 + -4499 + -953, PI(gC, g);
}
function PI(g, I, t) {
  var A = At(xe++, 2);
  if (A.t = g, !A.__c && (A.__ = [t ? t(I) : gC(void (3461 * 1 + 844 + -4305), I), function(C) {
    var n = A.__N ? A.__N[0] : A.__[0], B = A.t(n, C);
    n !== B && (A.__N = [B, A.__[9835 + 298 * -33]], A.__c.setState({}));
  }], A.__c = j, !j.u)) {
    var e = function(C, n, B) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (a.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, C, n, B);
      var Q = !(-6810 + -3 * -1346 + 2773);
      return a.forEach(function(E) {
        if (E.__N) {
          var r = E.__[0];
          E.__ = E.__N, E.__N = void 0, r !== E.__[0] && (Q = !0);
        }
      }), !(!Q && A.__c.props === C) && (!o || o.call(this, C, n, B));
    };
    j.u = !(-9701 + 8 * 65 + -1 * -9181);
    var o = j.shouldComponentUpdate, i = j.componentWillUpdate;
    j.componentWillUpdate = function(C, n, B) {
      if (this.__e) {
        var a = o;
        o = void (-431 * -14 + -64 * 112 + 9 * 126), e(C, n, B), o = a;
      }
      i && i.call(this, C, n, B);
    }, j.shouldComponentUpdate = e;
  }
  return A.__N || A.__;
}
function T(g, I) {
  var t = At(xe++, 3);
  !V.__s && VI(t.__H, I) && (t.__ = g, t.i = I, j.__H.__h.push(t));
}
function et(g, I) {
  var t = At(xe++, 4);
  !V.__s && VI(t.__H, I) && (t.__ = g, t.i = I, j.__h.push(t));
}
function tA(g) {
  return Pe = 4859 + 1618 * -3, pA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function eC(g, I, t) {
  Pe = 7034 + -154 * 57 + 1750, et(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(g));
}
function pA(g, I) {
  var t = At(xe++, 7);
  return VI(t.__H, I) && (t.__ = g(), t.__H = I, t.__h = g), t.__;
}
function mA(g, I) {
  return Pe = -13 * 350 + -4 * 1490 + 10518, pA(function() {
    return g;
  }, I);
}
function Me(g) {
  var I = j.context[g.__c], t = At(xe++, 5645 + -5636 * 1);
  return t.c = g, I ? (t.__ == null && (t.__ = !(5936 + -1 * -7954 + 6945 * -2), I.sub(j)), I.props.value) : g.__;
}
function bg(g, I) {
  V.useDebugValue && V.useDebugValue(I ? I(g) : g);
}
function tC() {
  var g = At(xe++, 11);
  if (!g.__) {
    for (var I = j.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var t = I.__m || (I.__m = [-73 * -104 + -6437 * -1 + -1 * 14029, 137 * -24 + -1799 + 1 * 5087]);
    g.__ = "P" + t[0] + "-" + t[-51 * 132 + -2168 + 8901]++;
  }
  return g.__;
}
function dB() {
  for (var g; g = AC.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach(xg), g.__H.__h.forEach($0), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], V.__e(I, g.__v);
  }
}
V.__b = function(g) {
  j = null, Fo && Fo(g);
}, V.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), Jo && Jo(g, I);
}, V.__r = function(g) {
  Ro && Ro(g), xe = -905 + -599 * 4 + -3301 * -1;
  var I = (j = g.__c).__H;
  I && (k0 === j ? (I.__h = [], j.__h = [], I.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (1 * -6686 + 343 * -7 + 9087);
  })) : (I.__h.forEach(xg), I.__h.forEach($0), I.__h = [], xe = 8227 * -1 + -7977 + 4 * 4051)), k0 = j;
}, V.diffed = function(g) {
  So && So(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (1577 * -1 + 2942 + 1 * -1364 !== AC.push(I) && No === V.requestAnimationFrame || ((No = V.requestAnimationFrame) || hB)(dB)), I.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-30 * 79 + 394 + -4 * -494);
  })), k0 = j = null;
}, V.__c = function(g, I) {
  I.some(function(t) {
    try {
      t.__h.forEach(xg), t.__h = t.__h.filter(function(A) {
        return !A.__ || $0(A);
      });
    } catch (A) {
      I.some(function(e) {
        e.__h && (e.__h = []);
      }), I = [], V.__e(A, t.__v);
    }
  }), Mo && Mo(g, I);
}, V.unmount = function(g) {
  Lo && Lo(g);
  var I, t = g.__c;
  t && t.__H && (t.__H.__.forEach(function(A) {
    try {
      xg(A);
    } catch (e) {
      I = e;
    }
  }), t.__H = void 0, I && V.__e(I, t.__v));
};
var vo = typeof requestAnimationFrame == "function";
function hB(g) {
  var I, t = function() {
    clearTimeout(A), vo && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(t, 100);
  vo && (I = requestAnimationFrame(t));
}
function xg(g) {
  var I = j, t = g.__c;
  typeof t == "function" && (g.__c = void (-3938 + -1 * 8761 + 1 * 12699), t()), j = I;
}
function $0(g) {
  var I = j;
  g.__c = g.__(), j = I;
}
function VI(g, I) {
  return !g || g.length !== I.length || I.some(function(t, A) {
    return t !== g[A];
  });
}
function gC(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function IC(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function AI(g, I) {
  for (var t in g) if (t !== "__source" && !(t in I)) return !(-8681 + 193 * 47 + 26 * -15);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(897 * 1 + -7036 * -1 + -7933);
  return !(-292 * -20 + -4597 * -2 + -15033);
}
function eI(g, I) {
  this.props = g, this.context = I;
}
function lB(g, I) {
  function t(e) {
    var o = this.props.ref, i = o == e.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, e) || !i : AI(this.props, e);
  }
  function A(e) {
    return this.shouldComponentUpdate = t, fA(g, e);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(-578 + -578 * -1), A.__f = !(-1 * 3259 + -1 * -6265 + -334 * 9), A;
}
(eI.prototype = new RA()).isPureReactComponent = !(8264 + -5055 * 1 + -3209), eI.prototype.shouldComponentUpdate = function(g, I) {
  return AI(this.props, g) || AI(this.state, I);
};
var Yo = b.__b;
b.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), Yo && Yo(g);
};
var uB = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 7307 + 3 * -1132;
function oC(g) {
  function I(t) {
    var A = IC({}, t);
    return delete A.ref, g(A, t.ref || null);
  }
  return I.$$typeof = uB, I.render = I, I.prototype.isReactComponent = I.__f = !(49 * -77 + -2961 + 37 * 182), I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var Wo = function(g, I) {
  return g == null ? null : te(te(g).map(I));
}, fB = { map: Wo, forEach: Wo, count: function(g) {
  return g ? te(g).length : 0;
}, only: function(g) {
  var I = te(g);
  if (-194 * -11 + 1 * 4801 + -6934 !== I.length) throw "Children.only";
  return I[4566 + -4566 * 1];
}, toArray: te }, DB = b.__e;
b.__e = function(g, I, t, A) {
  if (g.then) {
    for (var e, o = I; o = o.__; ) if ((e = o.__c) && e.__c) return I.__e == null && (I.__e = t.__e, I.__k = t.__k), e.__c(g, I);
  }
  DB(g, I, t, A);
};
var Uo = b.unmount;
function iC(g, I, t) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = IC({}, g)).__c != null && (g.__c.__P === t && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return iC(A, I, t);
  })), g;
}
function CC(g, I, t) {
  return g && t && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return CC(A, I, t);
  }), g.__c && g.__c.__P === I && (g.__e && t.appendChild(g.__e), g.__c.__e = !(2 * -4216 + 8430 + 2), g.__c.__P = t)), g;
}
function rg() {
  this.__u = 0, this.t = null, this.__b = null;
}
function nC(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function yB(g) {
  var I, t, A;
  function e(o) {
    if (I || (I = g()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!t) throw I;
    return fA(t, o);
  }
  return e.displayName = "Lazy", e.__f = !(-3145 + 17 * 185), e;
}
function xt() {
  this.u = null, this.o = null;
}
b.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && -5543 * -1 + 1037 + 6548 * -1 & g.__u && (g.type = null), Uo && Uo(g);
}, (rg.prototype = new RA()).__c = function(g, I) {
  var t = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(t);
  var e = nC(A.__v), o = !(1714 * 5 + -7045 + 381 * -4), i = function() {
    o || (o = !(5 * -43 + -161 * -9 + -1234), t.__R = null, e ? e(C) : C());
  };
  t.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var n = A.state.__a;
        A.__v.__k[334 + -1 * 334] = CC(n, n.__c.__P, n.__c.__O);
      }
      var B;
      for (A.setState({ __a: A.__b = null }); B = A.t.pop(); ) B.forceUpdate();
    }
  };
  A.__u++ || -585 + -617 * -1 & I.__u || A.setState({ __a: A.__b = A.__v.__k[427 + 427 * -1] }), g.then(i, i);
}, rg.prototype.componentWillUnmount = function() {
  this.t = [];
}, rg.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), A = this.__v.__k[0].__c;
      this.__v.__k[2 * 2635 + 2756 + -8026] = iC(this.__b, t, A.__O = A.__P);
    }
    this.__b = null;
  }
  var e = I.__a && fA(MA, null, g.fallback);
  return e && (e.__u &= -(-13682 + 13715 * 1)), [fA(MA, null, I.__a ? null : g.children), e];
};
var Ho = function(g, I, t) {
  if (++t[3580 + -3 * 1193] === t[1580 * 5 + -5333 * 1 + -2567 * 1] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[-447 * 2 + 9671 * -1 + 10565 * 1] !== "t" || !g.o.size)) for (t = g.u; t; ) {
    for (; t.length > -134 * 47 + -3996 + 10297; ) t.pop()();
    if (t[1] < t[0]) break;
    g.u = t = t[-18 * 182 + -4311 + 7589 * 1];
  }
};
function wB(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function pB(g) {
  var I = this, t = g.i;
  I.componentWillUnmount = function() {
    ae(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== t && I.componentWillUnmount(), I.l || (I.i = t, I.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(489 * -3 + -7 * 5 + 1502);
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, e) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> -7274 + -5 * 451 + 9530, 1449 + -671 * -4 + 4 * -1033), I.i.removeChild(A);
  } }), ae(fA(wB, { context: I.context }, g.__v), I.l);
}
function mB(g, I) {
  var t = {};
  t.__v = g, t.i = I;
  var A = fA(pB, t);
  return A.containerInfo = I, A;
}
(xt.prototype = new RA()).__a = function(g) {
  var I = this, t = nC(I.__v), A = I.o.get(g);
  return A[0]++, function(e) {
    var o = function() {
      I.props.revealOrder ? (A.push(e), Ho(I, g, A)) : e();
    };
    t ? t(o) : o();
  };
}, xt.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = te(g.children);
  g.revealOrder && g.revealOrder[8777 + -13 * 252 + 5501 * -1] === "b" && I.reverse();
  for (var t = I.length; t--; ) this.o.set(I[t], this.u = [1 * -6763 + 4 * -2209 + 15600, -2847 + -1 * 7336 + 10183, this.u]);
  return g.children;
}, xt.prototype.componentDidUpdate = xt.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, t) {
    Ho(g, t, I);
  });
};
var BC = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -582 * 75 + -49178 + 152931, GB = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, kB = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, bB = /[A-Z0-9]/g, NB = typeof document < "u", FB = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function RB(g, I, t) {
  return I.__k == null && (I.textContent = ""), ae(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
function SB(g, I, t) {
  return qI(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
RA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(RA.prototype, g, { configurable: !(6443 + -379 * 17), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var t = {};
    t.configurable = !(-2363 + 7829 * -1 + 10192), t.writable = !(5901 + -121 * 45 + -456), t.value = I, Object.defineProperty(this, g, t);
  } });
});
var Ko = b.event;
function MB() {
}
function LB() {
  return this.cancelBubble;
}
function JB() {
  return this.defaultPrevented;
}
b.event = function(g) {
  return Ko && (g = Ko(g)), g.persist = MB, g.isPropagationStopped = LB, g.isDefaultPrevented = JB, g.nativeEvent = g;
};
var Eg = {};
Eg.enumerable = !(-14277 + 242 * 59), Eg.configurable = !(1286 + -9006 * 1 + 8 * 965), Eg.get = function() {
  return this.class;
};
var _I, vB = Eg, Oo = b.vnode;
b.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var t = I.props, A = I.type, e = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || NB && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-8140 + -1 * -3847 + -27 * -159) === i ? i = "" : C === "translate" && i === "no" ? i = !(7485 + -2264 * 4 + 6 * 262) : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || FB(t.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : kB.test(o) ? o = C : -(1 * -6109 + -461 * 7 + 9337) === A.indexOf("-") && GB.test(o) ? o = o.replace(bB, "-$&").toLowerCase() : i === null && (i = void (-18 * 241 + -5 * -911 + -1 * 217)) : C = o = "oninput", C === "oninput" && e[o = C] && (o = "oninputCapture"), e[o] = i;
      }
    }
    A == "select" && e.multiple && Array.isArray(e.value) && (e.value = te(t.children).forEach(function(n) {
      n.props.selected = e.value.indexOf(n.props.value) != -1;
    })), A == "select" && e.defaultValue != null && (e.value = te(t.children).forEach(function(n) {
      n.props.selected = e.multiple ? -(4 * -1489 + 13 * -285 + 9662) != e.defaultValue.indexOf(n.props.value) : e.defaultValue == n.props.value;
    })), t.class && !t.className ? (e.class = t.class, Object.defineProperty(e, "className", vB)) : (t.className && !t.class || t.class && t.className) && (e.class = e.className = t.className), I.props = e;
  }(g), g.$$typeof = BC, Oo && Oo(g);
};
var To = b.__r;
b.__r = function(g) {
  To && To(g), _I = g.__c;
};
var qo = b.diffed;
b.diffed = function(g) {
  qo && qo(g);
  var I = g.props, t = g.__e;
  t != null && g.type === "textarea" && "value" in I && I.value !== t.value && (t.value = I.value == null ? "" : I.value), _I = null;
};
var CA = {};
CA.readContext = function(g) {
  return _I.__n[g.__c].props.value;
}, CA.useCallback = mA, CA.useContext = Me, CA.useDebugValue = bg, CA.useDeferredValue = rC, CA.useEffect = T, CA.useId = tC, CA.useImperativeHandle = eC, CA.useInsertionEffect = sC, CA.useLayoutEffect = et, CA.useMemo = pA, CA.useReducer = PI, CA.useRef = tA, CA.useState = EA, CA.useSyncExternalStore = cC, CA.useTransition = EC;
var QC = {};
QC.current = CA;
var aC = {};
aC.ReactCurrentDispatcher = QC;
var YB = aC;
function WB(g) {
  return fA.bind(null, g);
}
function a0(g) {
  return !!g && g.$$typeof === BC;
}
function UB(g) {
  return a0(g) && g.type === MA;
}
function HB(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function KB(g) {
  return a0(g) ? ZI.apply(null, arguments) : g;
}
function OB(g) {
  return !!g.__k && (ae(null, g), !(-1 * -5955 + 1879 * -1 + 1 * -4076));
}
function TB(g) {
  return g && (g.base || g.nodeType === 1 && g) || null;
}
var qB = function(g, I) {
  return g(I);
}, ZB = function(g, I) {
  return g(I);
}, jB = MA;
function xC(g) {
  g();
}
function rC(g) {
  return g;
}
function EC() {
  return [!(187 * 3 + -2186 + 1626), xC];
}
var sC = et, PB = a0;
function cC(g, I) {
  var t = I(), A = EA({ h: { __: t, v: I } }), e = A[-15212 + -2 * -7606].h, o = A[4786 + -1595 * 3];
  return et(function() {
    e.__ = t, e.v = I, b0(e) && o({ h: e });
  }, [g, t, I]), T(function() {
    return b0(e) && o({ h: e }), g(function() {
      b0(e) && o({ h: e });
    });
  }, [g]), t;
}
function b0(g) {
  var I, t, A = g.v, e = g.__;
  try {
    var o = A();
    return !((I = e) === (t = o) && (I !== 0 || (-5740 + -1 * -397 + 5344) / I == 1 / t) || I != I && t != t);
  } catch {
    return !(14240 + -712 * 20);
  }
}
var k = {};
k.useState = EA, k.useId = tC, k.useReducer = PI, k.useEffect = T, k.useLayoutEffect = et, k.useInsertionEffect = sC, k.useTransition = EC, k.useDeferredValue = rC, k.useSyncExternalStore = cC, k.startTransition = xC, k.useRef = tA, k.useImperativeHandle = eC, k.useMemo = pA, k.useCallback = mA, k.useContext = Me, k.useDebugValue = bg, k.version = "17.0.2", k.Children = fB, k.render = RB, k.hydrate = SB, k.unmountComponentAtNode = OB, k.createPortal = mB, k.createElement = fA, k.createContext = jt, k.createFactory = WB, k.cloneElement = KB, k.createRef = tB, k.Fragment = MA, k.isValidElement = a0, k.isElement = PB, k.isFragment = UB, k.isMemo = HB, k.findDOMNode = TB, k.Component = RA, k.PureComponent = eI, k.memo = lB, k.forwardRef = oC, k.flushSync = ZB, k.unstable_batchedUpdates = qB, k.StrictMode = jB, k.Suspense = rg, k.SuspenseList = xt, k.lazy = yB, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = YB;
var be = k, VB = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _B(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function XB(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function zB(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") && Object.keys(g).length === 1 ? g.default : g;
}
function $B(g) {
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
const AQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: VB,
  getAugmentedNamespace: $B,
  getDefaultExportFromCjs: _B,
  getDefaultExportFromNamespaceIfNotNamed: zB,
  getDefaultExportFromNamespaceIfPresent: XB
}, Symbol.toStringTag, { value: "Module" }));
var eQ = function(I, t, A, e) {
  var o = A ? A.call(e, I, t) : void 0;
  if (o !== void (-6564 * -1 + 1 * 2904 + -9468)) return !!o;
  if (I === t) return !0;
  if (typeof I != "object" || !I || typeof t != "object" || !t) return !1;
  var i = Object.keys(I), C = Object.keys(t);
  if (i.length !== C.length) return !1;
  for (var n = Object.prototype.hasOwnProperty.bind(t), B = -748 * -11 + -1508 + -24 * 280; B < i.length; B++) {
    var a = i[B];
    if (!n(a)) return !1;
    var Q = I[a], E = t[a];
    if (o = A ? A.call(e, Q, E, a) : void (-7 * 83 + -48 * 111 + 5909 * 1), o === !1 || o === void (-3818 + -1 * 2965 + 6783) && Q !== E) return !1;
  }
  return !0;
};
const tQ = AQ.getDefaultExportFromCjs(eQ);
var Z = "-ms-", ut = "-moz-", W = "-webkit-", dC = "comm", x0 = "rule", XI = "decl", gQ = "@import", hC = "@keyframes", IQ = "@layer", lC = Math.abs, zI = String.fromCharCode, tI = Object.assign;
function oQ(g, I) {
  return iA(g, 0) ^ -313 * 13 + 5120 + -1006 * 1 ? (((I << 7571 * -1 + -1263 + 8836 ^ iA(g, 9792 + 13 * -3 + 9753 * -1)) << 5367 * 1 + 35 * 5 + -5540 ^ iA(g, 1)) << -1317 * 1 + 3492 + -2173 ^ iA(g, 2705 + -3 * 901)) << 2 ^ iA(g, -52 * -151 + 1 * 5138 + -12987) : -7 * 463 + -7643 * 1 + 1814 * 6;
}
function uC(g) {
  return g.trim();
}
function zA(g, I) {
  return (g = I.exec(g)) ? g[0] : g;
}
function N(g, I, t) {
  return g.replace(I, t);
}
function sg(g, I, t) {
  return g.indexOf(I, t);
}
function iA(g, I) {
  return g.charCodeAt(I) | 0;
}
function Ve(g, I, t) {
  return g.slice(I, t);
}
function OA(g) {
  return g.length;
}
function fC(g) {
  return g.length;
}
function rt(g, I) {
  return I.push(g), g;
}
function iQ(g, I) {
  return g.map(I).join("");
}
function Zo(g, I) {
  return g.filter(function(t) {
    return !zA(t, I);
  });
}
var r0 = -6645 + 3323 * 2, _e = -647 * 1 + -3 * 761 + 2931, DC = -5 * -1910 + -7083 + -2467 * 1, LA = 3014 * -2 + 1 * 2969 + -133 * -23, eA = 6210 + -5 * 1242, tt = "";
function E0(g, I, t, A, e, o, i, C) {
  var n = {};
  return n.value = g, n.root = I, n.parent = t, n.type = A, n.props = e, n.children = o, n.line = r0, n.column = _e, n.length = i, n.return = "", n.siblings = C, n;
}
function Ce(g, I) {
  return tI(E0("", null, null, "", null, null, -677 * 8 + -4802 + 10218, g.siblings), g, { length: -g.length }, I);
}
function ve(g) {
  for (; g.root; ) g = Ce(g.root, { children: [g] });
  rt(g, g.siblings);
}
function CQ() {
  return eA;
}
function nQ() {
  return eA = LA > 50 * 49 + -7591 + 5141 ? iA(tt, --LA) : 8842 + 108 * 74 + -16834, _e--, eA === 17839 + 21 * -849 && (_e = 7558 * 1 + -8795 + 1238, r0--), eA;
}
function WA() {
  return eA = LA < DC ? iA(tt, LA++) : 0, _e++, eA === 3663 + -1 * 3449 + -204 && (_e = 363 * 4 + 311 * -25 + -186 * -34, r0++), eA;
}
function me() {
  return iA(tt, LA);
}
function cg() {
  return LA;
}
function s0(g, I) {
  return Ve(tt, g, I);
}
function gI(g) {
  switch (g) {
    case 139 * -39 + 8377 + -2956 * 1:
    case 9:
    case -228 * -28 + -2349 * -1 + -8723:
    case 13:
    case -2 * 4153 + -4605 + -301 * -43:
      return -398 * 22 + -7014 * -1 + 1747;
    case -1425 + -7314 * -1 + -5856:
    case 28 * -307 + 4 * 2481 + -1285 * 1:
    case 11076 + 394 * -28:
    case -6 * 263 + -2993 + -1 * -4618:
    case -68 * 89 + 4270 + 1844:
    case -3119 + -86 * 4 + -3527 * -1:
    case 126:
    case 7 * 1402 + 27 * -15 + -55 * 170:
    case 7314 + -403 * 14 + -1549 * 1:
    case -12 * 525 + -1288 * -7 + -2591:
      return -3066 + 9445 * -1 + -5 * -2503;
    case -9743 * -1 + 4586 + -67 * 213:
      return -1035 + -6 * -173;
    case 31 * -233 + -6040 + 13297:
    case 39:
    case 7811 + 1 * 1686 + 1 * -9457:
    case 3253 * -1 + 1107 * 1 + 2237:
      return 9121 + 71 * 79 + 526 * -28;
    case 1 * -7717 + 971 * -8 + 15526:
    case -9352 + -6 * -734 + 71 * 71:
      return -367 * -17 + 19 * 105 + 1 * -8233;
  }
  return 1469 * -6 + 1469 * -3 + -113 * -117;
}
function BQ(g) {
  return r0 = _e = -1617 * 2 + 445 + 2790, DC = OA(tt = g), LA = -6389 * -1 + -2133 + -4256, [];
}
function QQ(g) {
  return tt = "", g;
}
function N0(g) {
  return uC(s0(LA - (3786 * 1 + 4814 * 2 + -13413), II(g === 11 * 757 + -381 * 22 + 146 ? g + (-11747 + -31 * -379) : g === -9 * 492 + 1 * 8693 + 325 * -13 ? g + (-7244 + 19 * 19 + -2 * -3442) : g)));
}
function aQ(g) {
  for (; (eA = me()) && eA < -4 * 2435 + -9739 * 1 + 19512; ) WA();
  return gI(g) > 6901 + 3 * 2155 + -13364 || gI(eA) > 3 ? "" : " ";
}
function xQ(g, I) {
  for (; --I && WA() && !(eA < -6547 * -1 + -1943 + 4 * -1139 || eA > -17 * 174 + -9169 + 1 * 12229 || eA > -15 * 6 + -7131 + 7278 && eA < -1178 * 2 + -6718 + 9139 || eA > -17536 + -8803 * -2 && eA < -5344 * 1 + 6268 + 827 * -1); ) ;
  return s0(g, cg() + (I < -31 * -319 + -5740 + -1381 * 3 && me() == -4 * 1527 + -4868 + 11008 && WA() == 165 + -1 * -3533 + -47 * 78));
}
function II(g) {
  for (; WA(); ) switch (eA) {
    case g:
      return LA;
    case -2 * 3918 + 5666 + 2204:
    case -2329 + -3 * -365 + -19 * -67:
      g !== 1 * 5391 + 191 * 9 + -7076 && g !== -6488 + 3929 * 1 + 2598 && II(eA);
      break;
    case -10559 + -3 * -3533:
      g === -3165 * 3 + -6821 + 16357 && II(g);
      break;
    case 92:
      WA();
      break;
  }
  return LA;
}
function rQ(g, I) {
  for (; WA() && g + eA !== 6532 + 983 * -6 + 1 * -587 + (9877 * 1 + -1 * 7531 + -2336); ) if (g + eA === 373 * -18 + 3005 * 3 + -1 * 2259 + (4986 * -2 + 710 * 11 + -19 * -116) && me() === -4371 + -47 * -94) break;
  return "/*" + s0(I, LA - (-434 + 1216 * 2 + 1997 * -1)) + "*" + zI(g === -1 * -8735 + -1771 + -6917 ? g : WA());
}
function EQ(g) {
  for (; !gI(me()); ) WA();
  return s0(g, LA);
}
function sQ(g) {
  return QQ(dg("", null, null, null, [""], g = BQ(g), 4 * 379 + -14 * 598 + 6856, [3507 + 1 * 8951 + 12458 * -1], g));
}
function dg(g, I, t, A, e, o, i, C, n) {
  for (var B = 0, a = 0, Q = i, E = 0, r = -2325 + 189 * -1 + 2514, s = 2 * 1005 + 621 * 11 + -8841, d = -28 * 39 + 5154 + -131 * 31, h = 7417 * 1 + -301 * 26 + 410, x = 1997 + -94 * -13 + -3218, u = -6248 + -938 * -5 + 1558, w = "", R = e, S = o, M = A, y = w; h; ) switch (s = u, u = WA()) {
    case -3 * -1551 + 96 * 39 + -8357 * 1:
      if (s != 108 && iA(y, Q - (3294 + 1 * -3293)) == -18 + 1 * -9286 + -9362 * -1) {
        sg(y += N(N0(u), "&", "&\f"), "&\f", lC(B ? C[B - (9323 + 4917 * -2 + 1 * 512)] : -1047 * 7 + -103 * -72 + -87 * 1)) != -(5106 + -1021 * 5) && (x = -1);
        break;
      }
    case -5 * 1123 + 9144 + 5 * -699:
    case 31 * 40 + -4275 + -106 * -29:
    case 33 * 227 + 79 * 55 + -3 * 3915:
      y += N0(u);
      break;
    case 9890 + 5 * -323 + 1 * -8266:
    case -7522 + -65 * -37 + 5127:
    case 6656 + 1 * -6643:
    case -8562 + 1 * 6638 + -1 * -1956:
      y += aQ(s);
      break;
    case -1 * 5081 + -6592 + 11765:
      y += xQ(cg() - 1, -4228 + -5 * -847);
      continue;
    case -19 * -289 + 6 * 24 + -5588:
      switch (me()) {
        case -537 * 9 + 9902 + -5027:
        case -17 * 170 + -9128 + -19 * -635:
          rt(cQ(rQ(WA(), cg()), I, t, n), n);
          break;
        default:
          y += "/";
      }
      break;
    case 123 * d:
      C[B++] = OA(y) * x;
    case (-9009 + -206 * 5 + 7 * 1452) * d:
    case -6801 * -1 + -1 * -7937 + -14679:
    case -8363 * -1 + -5 * 1867 + -3 * -324:
      switch (u) {
        case 69 * -107 + 2627 * -3 + 24 * 636:
        case 7290 + 111 * -55 + -2 * 530:
          h = -10691 + 10691 * 1;
        case 3290 * 1 + 2 * 2207 + -7645 + a:
          x == -(1 * 2753 + 2803 * 3 + -11161) && (y = N(y, /\f/g, "")), r > 607 * 9 + 9469 + -14932 && OA(y) - Q && rt(r > 2344 * 4 + -2182 * -3 + -15890 ? Po(y + ";", A, t, Q - (2 * 4204 + -6133 + -2274), n) : Po(N(y, " ", "") + ";", A, t, Q - (7957 + -5 * -27 + -8090), n), n);
          break;
        case 59:
          y += ";";
        default:
          if (rt(M = jo(y, I, t, B, a, e, C, w, R = [], S = [], Q, o), o), u === -7720 + 7629 * -1 + 15472)
            if (a === -771 + 3 * 257) dg(y, I, M, M, R, o, Q, C, S);
            else switch (E === -3258 * 1 + 11 * 10 + 17 * 191 && iA(y, 566 + 6133 * 1 + -6696) === 3097 * 2 + -17 * -271 + 1 * -10691 ? -13 * -361 + -2308 + -2285 : E) {
              case 8940 + -419 * 15 + -2555:
              case -823 + -19 * -49:
              case 4 * -2472 + 2 * -22 + -10041 * -1:
              case 48 * -131 + -9976 + 1489 * 11:
                dg(g, M, M, A && rt(jo(g, M, M, 25 * -56 + -487 + 3 * 629, 4258 * 2 + -1 * -1618 + 3378 * -3, e, C, w, e, R = [], Q, S), S), e, S, Q, C, A ? R : S);
                break;
              default:
                dg(y, M, M, M, [""], S, 5617 * 1 + -2874 * 3 + 1 * 3005, C, S);
            }
      }
      B = a = r = 33 * -257 + 7 * -448 + -11617 * -1, d = x = -6834 + -3 * 971 + -4874 * -2, w = y = "", Q = i;
      break;
    case 149 * -39 + -1765 * 1 + 7634:
      Q = 1 + OA(y), r = s;
    default:
      if (d < 1) {
        if (u == 7266 + 1 * -7143) --d;
        else if (u == -1 * -2539 + -1 * 6609 + 4195 && d++ == -3658 + -5 * -781 + -247 && nQ() == -7754 + 217 * 13 + 5058) continue;
      }
      switch (y += zI(u), u * d) {
        case -80 * 41 + 59 * 69 + -753:
          x = a > -13 * 386 + -2515 + 7533 ? -34 * -152 + -4498 + 1 * -669 : (y += "\f", -(9224 * -1 + -4414 + 13639));
          break;
        case -4110 + -880 * -1 + 3274:
          C[B++] = (OA(y) - (-2252 * -2 + -6888 + 2385)) * x, x = 1517 * 3 + -8177 + 3627;
          break;
        case -7829 * 1 + 9388 + -299 * 5:
          me() === 33 * 4 + 627 + -714 && (y += N0(WA())), E = me(), a = Q = OA(w = y += EQ(cg())), u++;
          break;
        case -69 * -18 + 5979 + 1794 * -4:
          s === -9822 + 143 * 69 && OA(y) == -15686 + 37 * 424 && (d = 1 * -2528 + -84 + 2612);
      }
  }
  return o;
}
function jo(g, I, t, A, e, o, i, C, n, B, a, Q) {
  for (var E = e - 1, r = e === -7 * -217 + 1 * 343 + -2 * 931 ? o : [""], s = fC(r), d = 1099 * -5 + -354 + -1 * -5849, h = -501 * -11 + -492 * 2 + -4527, x = -5 * -635 + -6726 + 1 * 3551; d < A; ++d) for (var u = -1 * 9605 + 9922 + 317 * -1, w = Ve(g, E + (-10365 + 5183 * 2), E = lC(h = i[d])), R = g; u < s; ++u) (R = uC(h > -1 * -5081 + 8642 + 1 * -13723 ? r[u] + " " + w : N(w, /&\f/g, r[u]))) && (n[x++] = R);
  return E0(g, I, t, e === -5834 + 1 * 359 + 5475 ? x0 : C, n, B, a, Q);
}
function cQ(g, I, t, A) {
  return E0(g, I, t, dC, zI(CQ()), Ve(g, -5618 + -1405 * -4, -(-1 * 1322 + -9290 + -183 * -58)), 0, A);
}
function Po(g, I, t, A, e) {
  return E0(g, I, t, XI, Ve(g, 83 * 104 + 374 + 114 * -79, A), Ve(g, A + (7 * -339 + 9935 + 1 * -7561), -(-2287 * 1 + 2 * 2719 + -3150)), A, e);
}
function yC(g, I, t) {
  switch (oQ(g, I)) {
    case 27 * -197 + 13 * 321 + 6249:
      return W + "print-" + g + g;
    case 4 * 1193 + 1841 + -146 * 6:
    case 1138 * 2 + 2018 * 2 + -2111:
    case -3561 + 3358 * 1 + -169 * -20:
    case 3433:
    case -5 * 369 + 3317 + 169:
    case -189 * 21 + -9794 + 18220:
    case 3475 * 2 + 397 * 18 + -3725 * 3:
    case -979 * 2 + -26 * -284 + -2 * -73:
    case 337 * 34 + 268 + -5370:
    case -8512 + 17 * -131 + 721 * 23:
    case 3191:
    case 6645:
    case -6965 + 37 * 233 + -71 * -19:
    case -8436 + -1 * -5667 + -4580 * -2:
    case 11541 + -298 * 19:
    case -6759 + -349 * -5 + 11 * 967:
    case -10218 + 48 * -67 + 19569:
    case -4284 + 189 * 47:
    case -118 + 5218 * 1 + -5 * 49:
    case 2 * -1216 + 9810 + -3163 * 1:
    case 8516 + -1 * -3235 + -5362:
    case -41 * 5 + 56 * -62 + 8786:
    case -3342 + 1 * 9179 + -472:
    case -6941 * 1 + -5029 * -2 + 2504:
    case 3367 + 1 * -7828 + 8290:
      return W + g + g;
    case -14398 + -7 * -2741:
      return ut + g + g;
    case -17 * 173 + 142 * 27 + 8 * 557:
    case -753 * -2 + 4675 + -1935:
    case 789 * 4 + -1 * 6640 + 8294:
    case -10883 + 3471 * 1 + 14380:
    case -7062 + -1053 * -3 + 6659:
      return W + g + ut + g + Z + g + g;
    case -172 * 19 + -4741 + 13945:
      switch (iA(g, I + (-3765 + 3970 * -1 + -3 * -2582))) {
        case 1 * 922 + -1 * 1567 + 759:
          return W + g + Z + N(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 108:
          return W + g + Z + N(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case -6684 + -624 * 8 + -3 * -3907:
          return W + g + Z + N(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case -5288 * -1 + -3345 * -3 + -8495:
    case 2547 + 9721 * -1 + 3 * 3814:
    case 756 + -1 * -2147:
      return W + g + Z + g + g;
    case 1125 + 420 * 12:
      return W + g + Z + "flex-" + g + g;
    case 431 * -13 + -9437 + 20227:
      return W + g + N(g, /(\w+).+(:[^]+)/, W + "box-$1$2" + Z + "flex-$1$2") + g;
    case -2 * 2911 + 553 + 10712:
      return W + g + Z + "flex-item-" + N(g, /flex-|-self/g, "") + (zA(g, /flex-|baseline/) ? "" : Z + "grid-row-" + N(g, /flex-|-self/g, "")) + g;
    case -11 * 173 + 417 + 61 * 101:
      return W + g + Z + "flex-line-pack" + N(g, /align-content|flex-|-self/g, "") + g;
    case -9 * -108 + -4415 + 8991:
      return W + g + Z + N(g, "shrink", "negative") + g;
    case 5292:
      return W + g + Z + N(g, "basis", "preferred-size") + g;
    case 3527 + 293 * -9 + 5170:
      return W + "box-" + N(g, "-grow", "") + W + g + Z + N(g, "grow", "positive") + g;
    case 1 * -1483 + 99 * -100 + 1 * 15937:
      return W + N(g, /([^-])(transform)/g, "$1" + W + "$2") + g;
    case 2 * -3619 + -4582 + 18007:
      return N(N(N(g, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), g, "") + g;
    case -4892 * 2 + -1 * 4613 + 19892:
    case 3959:
      return N(g, /(image-set\([^]*)/, W + "$1$`$1");
    case 3129 * 3 + 854 * -3 + -1857:
      return N(N(g, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + g + g;
    case 4200:
      if (!zA(g, /flex-|baseline/)) return Z + "grid-column-align" + Ve(g, I) + g;
      break;
    case -1 * -3646 + 20 * 355 + -8154:
    case 3360:
      return Z + N(g, "template-", "") + g;
    case 8200 + -1 * -3667 + -7 * 1069:
    case 3616:
      return t && t.some(function(A, e) {
        return I = e, zA(A.props, /grid-\w+-end/);
      }) ? ~sg(g + (t = t[I].value), "span", 0) ? g : Z + N(g, "-start", "") + g + Z + "grid-row-span:" + (~sg(t, "span", 7186 + 2801 * 1 + -9987) ? zA(t, /\d+/) : +zA(t, /\d+/) - +zA(g, /\d+/)) + ";" : Z + N(g, "-start", "") + g;
    case 1 * 6403 + 1914 + -3421:
    case 323 * 14 + 1087 * -1 + 693:
      return t && t.some(function(A) {
        return zA(A.props, /grid-\w+-start/);
      }) ? g : Z + N(N(g, "-end", "-span"), "span ", "") + g;
    case 4095:
    case -8083 + 1 * -13 + 11679:
    case -7433 * -1 + 3 * 1659 + -8342:
    case 2365 * -3 + 3044 + -6583 * -1:
      return N(g, /(.+)-inline(.+)/, W + "$1$2") + g;
    case 9274 + 5233 * -1 + 4075 * 1:
    case -1 * -10111 + -3482 + 10 * 43:
    case 2 * 4879 + 1317 * -1 + 192 * -14:
    case 413 * 16 + 6764 + -7837 * 1:
    case 12522 + -7077 * 1:
    case -43 * 41 + 8674 * -1 + 16138:
    case -19 * -463 + 419 + -4283:
    case 1 * -1832 + -1407 + 7916:
    case -257 * -23 + -4625 + -1 * -4247:
    case 8619 + -566 * 5:
    case 10026 * -1 + 5 * -1090 + -199 * -103:
    case -33 * -62 + -1 * -8241 + -5522:
      if (OA(g) - (5 * -1047 + -264 + 100 * 55) - I > 4 * -979 + -7305 + -1 * -11227) switch (iA(g, I + (23 * -214 + -5 * 289 + 6368))) {
        case -412 + -553 * -18 + -9433:
          if (iA(g, I + (-8522 * 1 + 103 * -93 + 15 * 1207)) !== -1 * -7769 + 3159 * -3 + -1753 * -1) break;
        case -695 * 4 + -99 * -5 + 2387:
          return N(g, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + ut + (iA(g, I + (-5020 + 5023 * 1)) == -2483 + 21 * 27 + -2 * -1012 ? "$3" : "$2-$3")) + g;
        case 1453 * -6 + -35 * 131 + 13418:
          return ~sg(g, "stretch", -404 + 1 * -402 + 806) ? yC(N(g, "stretch", "fill-available"), I, t) + g : g;
      }
      break;
    case -7 * 1313 + 1843 + 12500:
    case 3627 + 2 * 2357 + -2421:
      return N(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, e, o, i, C, n, B) {
        return Z + e + ":" + o + B + (i ? Z + e + "-span:" + (C ? n : +n - +o) + B : "") + g;
      });
    case 4949:
      if (iA(g, I + (4971 + 87 * 17 + -6444)) === -459 * 15 + 9841 + -2835) return N(g, ":", ":" + W) + g;
      break;
    case 10346 + 2 * -1951:
      switch (iA(g, iA(g, 14) === 45 ? 953 * -7 + -2 * -3475 + 9 * -29 : 11)) {
        case 1 * -4430 + -6381 + 10931:
          return N(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + W + (iA(g, 25 * 237 + -3401 * 1 + -2510) === 2587 * 2 + -9313 + 523 * 8 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Z + "$2box$3") + g;
        case -2215 + 13 * 717 + -7006:
          return N(g, ":", ":" + Z) + g;
      }
      break;
    case 7756 + -1987 * -1 + 2012 * -2:
    case -2605 * -2 + 5 * 205 + -3588:
    case 1511 * 3 + -9424 + -3 * -2342:
    case 6464 + 43 * -59:
    case -7004 + 4903 * -1 + -6 * -2383:
      return N(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function Ng(g, I) {
  for (var t = "", A = 1 * 5266 + -9789 * 1 + 4523 * 1; A < g.length; A++) t += I(g[A], A, g, I) || "";
  return t;
}
function dQ(g, I, t, A) {
  switch (g.type) {
    case IQ:
      if (g.children.length) break;
    case gQ:
    case XI:
      return g.return = g.return || g.value;
    case dC:
      return "";
    case hC:
      return g.return = g.value + "{" + Ng(g.children, A) + "}";
    case x0:
      if (!OA(g.value = g.props.join(","))) return "";
  }
  return OA(t = Ng(g.children, A)) ? g.return = g.value + "{" + t + "}" : "";
}
function hQ(g) {
  var I = fC(g);
  return function(t, A, e, o) {
    for (var i = "", C = 7954 + -226 * 28 + -1 * 1626; C < I; C++) i += g[C](t, A, e, o) || "";
    return i;
  };
}
function lQ(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function uQ(g, I, t, A) {
  if (g.length > -(-8987 + -5321 * -1 + -19 * -193) && !g.return)
    switch (g.type) {
      case XI:
        g.return = yC(g.value, g.length, t);
        return;
      case hC:
        return Ng([Ce(g, { value: N(g.value, "@", "@" + W) })], A);
      case x0:
        if (g.length) return iQ(t = g.props, function(e) {
          switch (zA(e, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ve(Ce(g, { props: [N(e, /:(read-\w+)/, ":" + ut + "$1")] }));
              var o = {};
              o.props = [e], ve(Ce(g, o)), tI(g, { props: Zo(t, A) });
              break;
            case "::placeholder":
              ve(Ce(g, { props: [N(e, /:(plac\w+)/, ":" + W + "input-$1")] })), ve(Ce(g, { props: [N(e, /:(plac\w+)/, ":" + ut + "$1")] })), ve(Ce(g, { props: [N(e, /:(plac\w+)/, Z + "input-$1")] }));
              var i = {};
              i.props = [e], ve(Ce(g, i)), tI(g, { props: Zo(t, A) });
              break;
          }
          return "";
        });
    }
}
var G = {};
G.animationIterationCount = 1, G.aspectRatio = 1, G.borderImageOutset = 1, G.borderImageSlice = 1, G.borderImageWidth = 1, G.boxFlex = 1, G.boxFlexGroup = 1, G.boxOrdinalGroup = 1, G.columnCount = 1, G.columns = 1, G.flex = 1, G.flexGrow = 1, G.flexPositive = 1, G.flexShrink = 1, G.flexNegative = 1, G.flexOrder = 1, G.gridRow = 1, G.gridRowEnd = 1, G.gridRowSpan = 1, G.gridRowStart = 1, G.gridColumn = 1, G.gridColumnEnd = 1, G.gridColumnSpan = 1, G.gridColumnStart = 1, G.msGridRow = 1, G.msGridRowSpan = 1, G.msGridColumn = 1, G.msGridColumnSpan = 1, G.fontWeight = 1, G.lineHeight = 1, G.opacity = 1, G.order = 1, G.orphans = 1, G.tabSize = 1, G.widows = 1, G.zIndex = 1, G.zoom = 1, G.WebkitLineClamp = 1, G.fillOpacity = 1, G.floodOpacity = 1, G.stopOpacity = 1, G.strokeDasharray = 1, G.strokeDashoffset = 1, G.strokeMiterlimit = 1, G.strokeOpacity = 1, G.strokeWidth = 1;
var fQ = G, v = {}, Ne = typeof process < "u" && void (-8157 + -711 * 1 + 8868) !== v && (v.REACT_APP_SC_ATTR || v.SC_ATTR) || "data-styled", wC = "active", pC = "data-styled-version", c0 = "6.1.11", $I = `/*!sc*/
`, Ao = typeof window < "u" && "HTMLElement" in window, DQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && v !== void 0 && void (4062 + 1878 * -2 + -306) !== v.REACT_APP_SC_DISABLE_SPEEDY && v.REACT_APP_SC_DISABLE_SPEEDY !== "" ? v.REACT_APP_SC_DISABLE_SPEEDY !== "false" && v.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-1404 * -2 + -2971 + 163) !== v && void (-4212 + 4 * -823 + 1 * 7504) !== v.SC_DISABLE_SPEEDY && v.SC_DISABLE_SPEEDY !== "" ? v.SC_DISABLE_SPEEDY !== "false" && v.SC_DISABLE_SPEEDY : v.NODE_ENV !== "production"), Vo = /invalid hook call/i, gg = /* @__PURE__ */ new Set(), yQ = function(g, I) {
  if (v.NODE_ENV !== "production") {
    var t = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], n = -5061 + -199 * 3 + 1 * 5659; n < arguments.length; n++) C[n - (3599 * -2 + 1087 * -7 + -14808 * -1)] = arguments[n];
        Vo.test(i) ? (o = !1, gg.delete(A)) : e.apply(void (2 * -4454 + -3822 + -134 * -95), je([i], C, !1));
      }, tA(), o && !gg.has(A) && (console.warn(A), gg.add(A));
    } catch (i) {
      Vo.test(i.message) && gg.delete(A);
    } finally {
      console.error = e;
    }
  }
}, d0 = Object.freeze([]), Xe = Object.freeze({});
function wQ(g, I, t) {
  return void (1 * -8477 + 3364 + 5113) === t && (t = Xe), g.theme !== t.theme && g.theme || I || t.theme;
}
var oI = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), pQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, mQ = /(^-|-$)/g;
function _o(g) {
  return g.replace(pQ, "-").replace(mQ, "");
}
var GQ = /(a)(d)/gi, Ig = -6911 * -1 + 1 * 9879 + 8369 * -2, Xo = function(g) {
  return String.fromCharCode(g + (g > -9877 * -1 + 197 * -7 + -8473 ? 6686 * -1 + -107 * 45 + -2 * -5770 : -6532 + 7513 * 1 + 4 * -221));
};
function iI(g) {
  var I, t = "";
  for (I = Math.abs(g); I > Ig; I = I / Ig | 14481 + 14481 * -1) t = Xo(I % Ig) + t;
  return (Xo(I % Ig) + t).replace(GQ, "$1-$2");
}
var F0, mC = -1 * 3574 + -7 * -758 + 3649, he = function(g, I) {
  for (var t = I.length; t; ) g = (1 * -6514 + 2813 * 3 + -1892) * g ^ I.charCodeAt(--t);
  return g;
}, GC = function(g) {
  return he(mC, g);
};
function kQ(g) {
  return iI(GC(g) >>> 465 * 1 + -2 * -4737 + -3 * 3313);
}
function kC(g) {
  return v.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function R0(g) {
  return typeof g == "string" && (v.NODE_ENV === "production" || g.charAt(8875 + 3 * -2285 + -2020) === g.charAt(9845 + 2217 * -4 + -977 * 1).toLowerCase());
}
var NA = {};
NA.childContextTypes = !0, NA.contextType = !0, NA.contextTypes = !0, NA.defaultProps = !0, NA.displayName = !0, NA.getDefaultProps = !0, NA.getDerivedStateFromError = !0, NA.getDerivedStateFromProps = !0, NA.mixins = !0, NA.propTypes = !0, NA.type = !0;
var ne = {};
ne.name = !0, ne.length = !0, ne.prototype = !0, ne.caller = !0, ne.callee = !0, ne.arguments = !0, ne.arity = !0;
var ce = {};
ce.$$typeof = !0, ce.compare = !0, ce.defaultProps = !0, ce.displayName = !0, ce.propTypes = !0, ce.type = !0;
var We = {};
We.$$typeof = !0, We.render = !0, We.defaultProps = !0, We.displayName = !0, We.propTypes = !0;
var bC = typeof Symbol == "function" && Symbol.for, NC = bC ? Symbol.for("react.memo") : -1 * -92401 + 56709 * 1 + 3 * -29665, bQ = bC ? Symbol.for("react.forward_ref") : 1 * -56876 + 16686 * -3 + 167046, NQ = NA, FQ = ne, FC = ce, RQ = ((F0 = {})[bQ] = We, F0[NC] = FC, F0);
function zo(g) {
  return ("type" in (I = g) && I.type.$$typeof) === NC ? FC : "$$typeof" in g ? RQ[g.$$typeof] : NQ;
  var I;
}
var SQ = Object.defineProperty, MQ = Object.getOwnPropertyNames, $o = Object.getOwnPropertySymbols, LQ = Object.getOwnPropertyDescriptor, JQ = Object.getPrototypeOf, Ai = Object.prototype;
function RC(g, I, t) {
  if (typeof I != "string") {
    if (Ai) {
      var A = JQ(I);
      A && A !== Ai && RC(g, A, t);
    }
    var e = MQ(I);
    $o && (e = e.concat($o(I)));
    for (var o = zo(g), i = zo(I), C = 179 * 11 + -5310 + 3341; C < e.length; ++C) {
      var n = e[C];
      if (!(n in FQ || t && t[n] || i && n in i || o && n in o)) {
        var B = LQ(I, n);
        try {
          SQ(g, n, B);
        } catch {
        }
      }
    }
  }
  return g;
}
function ze(g) {
  return typeof g == "function";
}
function eo(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function ue(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function ei(g, I) {
  if (2828 + -707 * 4 === g.length) return "";
  for (var t = g[3412 * -1 + 15 * 135 + 1387], A = -1 * 821 + -19 * 5 + 917; A < g.length; A++) t += g[A];
  return t;
}
function $e(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function CI(g, I, t) {
  if (t === void 0 && (t = !1), !t && !$e(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = 7962 + -2654 * 3; A < I.length; A++) g[A] = CI(g[A], I[A]);
  else if ($e(I))
    for (var A in I) g[A] = CI(g[A], I[A]);
  return g;
}
function to(g, I) {
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
var vQ = v.NODE_ENV !== "production" ? gA : {};
function YQ() {
  for (var g = [], I = -7828 + 412 * 19; I < arguments.length; I++) g[I] = arguments[I];
  for (var t = g[141 * -1 + -195 + 336], A = [], e = 1, o = g.length; e < o; e += -7271 + 3 * -2089 + 13539) A.push(g[e]);
  return A.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function gt(g) {
  for (var I = [], t = 1; t < arguments.length; t++) I[t - (-11 * 374 + -6018 + 10133)] = arguments[t];
  return v.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > 0 ? " Args: ".concat(I.join(", ")) : "")) : new Error(YQ.apply(void (1 * 1208 + -9942 + 8734), je([vQ[g]], I, !1)).trim());
}
var WQ = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(1224 * -7 + 8757 + 19 * 17), this.length = -3613 + -3 * -2930 + -4665, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var t = 6472 + -2 * 3236, A = -2179 + -24 * -219 + -3077; A < I; A++) t += this.groupSizes[A];
    return t;
  }, g.prototype.insertRules = function(I, t) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, e = A.length, o = e; I >= o; ) if ((o <<= 1) < -714 * -3 + 4 * 1245 + -7122) throw gt(43 * 162 + 1028 * 5 + -12090, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = e; i < o; i++) this.groupSizes[i] = 239 * -7 + 1556 * 3 + -2995;
    }
    for (var C = this.indexOfGroup(I + (4 * 2271 + 245 * -39 + 472 * 1)), n = (i = 1963 + -177 * -32 + -7627, t.length); i < n; i++) this.tag.insertRule(C, t[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var t = this.groupSizes[I], A = this.indexOfGroup(I), e = A + t;
      this.groupSizes[I] = 1420 * 2 + 1434 * 1 + 2 * -2137;
      for (var o = A; o < e; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var t = "";
    if (I >= this.length || this.groupSizes[I] === 0) return t;
    for (var A = this.groupSizes[I], e = this.indexOfGroup(I), o = e + A, i = e; i < o; i++) t += "".concat(this.tag.getRule(i)).concat($I);
    return t;
  }, g;
}(), UQ = 1 << 2 * 478 + -9781 + -385 * -23, hg = /* @__PURE__ */ new Map(), Fg = /* @__PURE__ */ new Map(), lg = 1, og = function(g) {
  if (hg.has(g)) return hg.get(g);
  for (; Fg.has(lg); ) lg++;
  var I = lg++;
  if (v.NODE_ENV !== "production" && ((7 * -976 + -9755 + -9 * -1843 | I) < 938 * -2 + -5108 + -12 * -582 || I > UQ)) throw gt(-157 * -40 + 9191 + -15455, "".concat(I));
  return hg.set(g, I), Fg.set(I, g), I;
}, HQ = function(g, I) {
  lg = I + (497 * 16 + 3856 + -11807), hg.set(g, I), Fg.set(I, g);
}, KQ = "style[".concat(Ne, "][").concat(pC, '="').concat(c0, '"]'), OQ = new RegExp("^".concat(Ne, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), TQ = function(g, I, t) {
  for (var A, e = t.split(","), o = 4901 + 377 * -13, i = e.length; o < i; o++) (A = e[o]) && g.registerName(I, A);
}, qQ = function(g, I) {
  for (var t, A = ((t = I.textContent) !== null && void (-9894 + 1 * -7324 + 8609 * 2) !== t ? t : "").split($I), e = [], o = -8182 + 1 * 8182, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var n = C.match(OQ);
      if (n) {
        var B = 0 | parseInt(n[1], 10), a = n[-1269 + 2 * -3159 + -7589 * -1];
        2 * -4741 + 7 * -1157 + 17581 !== B && (HQ(a, B), TQ(g, a, n[-2 * 2773 + 1561 * -4 + 11793]), g.getTag().insertRules(B, e)), e.length = -2259 + 9 * 251;
      } else e.push(C);
    }
  }
};
function ZQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var SC = function(g) {
  var I = document.head, t = g || I, A = document.createElement("style"), e = function(C) {
    var n = Array.from(C.querySelectorAll("style[".concat(Ne, "]")));
    return n[n.length - (5 * -1553 + 4656 + 3110)];
  }(t), o = void (6761 + 14 * -366 + 1637 * -1) !== e ? e.nextSibling : null;
  A.setAttribute(Ne, wC), A.setAttribute(pC, c0);
  var i = ZQ();
  return i && A.setAttribute("nonce", i), t.insertBefore(A, o), A;
}, jQ = function() {
  function g(I) {
    this.element = SC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var A = document.styleSheets, e = 6399 * -1 + 3217 * 3 + -3252, o = A.length; e < o; e++) {
        var i = A[e];
        if (i.ownerNode === t) return i;
      }
      throw gt(4 * 2297 + 1326 + -3 * 3499);
    }(this.element), this.length = 1620 + -18 * 90;
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
}(), PQ = function() {
  function g(I) {
    this.element = SC(I), this.nodes = this.element.childNodes, this.length = -541 * 5 + 4799 * -1 + 7504;
  }
  return g.prototype.insertRule = function(I, t) {
    if (I <= this.length && I >= -87 * 67 + 3895 + 1934) {
      var A = document.createTextNode(t);
      return this.element.insertBefore(A, this.nodes[I] || null), this.length++, !0;
    }
    return !1;
  }, g.prototype.deleteRule = function(I) {
    this.element.removeChild(this.nodes[I]), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.nodes[I].textContent : "";
  }, g;
}(), VQ = function() {
  function g(I) {
    this.rules = [], this.length = -1 * -5947 + 5733 + -11680;
  }
  return g.prototype.insertRule = function(I, t) {
    return I <= this.length && (this.rules.splice(I, 1 * -9596 + -1642 + 11238, t), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, 5 * -223 + 188 * -37 + -4 * -2018), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), ti = Ao, _Q = { isServer: !Ao, useCSSOMInjection: !DQ }, MC = function() {
  function g(I, t, A) {
    void (106 * 77 + -1466 + 24 * -279) === I && (I = Xe), void (-23 * 170 + 6201 + -2291) === t && (t = {});
    var e = this;
    this.options = wA(wA({}, _Q), I), this.gs = t, this.names = new Map(A), this.server = !!I.isServer, !this.server && Ao && ti && (ti = !1, function(o) {
      for (var i = document.querySelectorAll(KQ), C = 757 + -757 * 1, n = i.length; C < n; C++) {
        var B = i[C];
        B && B.getAttribute(Ne) !== wC && (qQ(o, B), B.parentNode && B.parentNode.removeChild(B));
      }
    }(this)), to(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, n = "", B = function(Q) {
          var E = function(x) {
            return Fg.get(x);
          }(Q);
          if (void (6101 * 1 + 4 * -140 + -5541) === E) return "continue";
          var r = o.names.get(E), s = i.getGroup(Q);
          if (void (2479 + 5 * -1061 + 2826) === r || 8565 + -23 * 157 + 4954 * -1 === s.length) return "continue";
          var d = "".concat(Ne, ".g").concat(Q, '[id="').concat(E, '"]'), h = "";
          void (6 * 1339 + 2579 + 1 * -10613) !== r && r.forEach(function(x) {
            x.length > 1 * -4109 + -1 * -3251 + -78 * -11 && (h += "".concat(x, ","));
          }), n += "".concat(s).concat(d, '{content:"').concat(h, '"}').concat($I);
        }, a = 0; a < C; a++) B(a);
        return n;
      }(e);
    });
  }
  return g.registerId = function(I) {
    return og(I);
  }, g.prototype.reconstructWithOptions = function(I, t) {
    return void (317 * -31 + -8447 + 1 * 18274) === t && (t = !0), new g(wA(wA({}, this.options), I), this.gs, t && this.names || void (4859 + -4859 * 1));
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || -8077 + -197 * -41) + (2414 + 2 * 3453 + -1 * 9319);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(t) {
      var A = t.useCSSOMInjection, e = t.target;
      return t.isServer ? new VQ(e) : A ? new jQ(e) : new PQ(e);
    }(this.options), new WQ(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, t) {
    return this.names.has(I) && this.names.get(I).has(t);
  }, g.prototype.registerName = function(I, t) {
    if (og(I), this.names.has(I)) this.names.get(I).add(t);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(t), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, t, A) {
    this.registerName(I, t), this.getTag().insertRules(og(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(og(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void (-16 * 347 + -1 * 2710 + 17 * 486);
  }, g;
}(), XQ = /&/g, zQ = /^\s*\/\/.*$/gm;
function LC(g, I) {
  return g.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(I, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(I, " ")), t.props = t.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = LC(t.children, I)), t;
  });
}
function JC(g) {
  var I, t, A, e = g === void 0 ? Xe : g, o = e.options, i = void (523 * -13 + 5741 * -1 + -114 * -110) === o ? Xe : o, C = e.plugins, n = void (3 * 2383 + 100 * -15 + -1883 * 3) === C ? d0 : C, B = function(E, r, s) {
    return s.startsWith(t) && s.endsWith(t) && s.replaceAll(t, "").length > -3933 + 3 * -2199 + 10530 ? ".".concat(I) : E;
  }, a = n.slice();
  a.push(function(E) {
    E.type === x0 && E.value.includes("&") && (E.props[-7973 + 1948 * 4 + 181] = E.props[8172 + -5 * 1387 + -1237].replace(XQ, t).replace(A, B));
  }), i.prefix && a.push(uQ), a.push(dQ);
  var Q = function(E, r, s, d) {
    void (-1 * 4269 + 19 * 330 + 3 * -667) === r && (r = ""), void (9 * 22 + 3680 + 1939 * -2) === s && (s = ""), d === void 0 && (d = "&"), I = d, t = r, A = new RegExp("\\".concat(t, "\\b"), "g");
    var h = E.replace(zQ, ""), x = sQ(s || r ? "".concat(s, " ").concat(r, " { ").concat(h, " }") : h);
    i.namespace && (x = LC(x, i.namespace));
    var u = [];
    return Ng(x, hQ(a.concat(lQ(function(w) {
      return u.push(w);
    })))), u;
  };
  return Q.hash = n.length ? n.reduce(function(E, r) {
    return r.name || gt(-1470 + 5 * 1462 + -5825), he(E, r.name);
  }, mC).toString() : "", Q;
}
var $Q = new MC(), nI = JC(), go = be.createContext({ shouldForwardProp: void (-3327 + -56 * -112 + 95 * -31), styleSheet: $Q, stylis: nI });
go.Consumer;
var Aa = be.createContext(void (-1702 + 23 * 74));
function BI() {
  return Me(go);
}
function ea(g) {
  var I = EA(g.stylisPlugins), t = I[-3 * 2258 + 4081 + 2693], A = I[-1601 * 6 + -8760 + -18367 * -1], e = BI().styleSheet, o = pA(function() {
    var a = e, Q = {};
    return Q.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(Q)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, e]), i = pA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var Q = {};
    return Q.options = a, Q.plugins = t, JC(Q);
  }, [g.enableVendorPrefixes, g.namespace, t]);
  T(function() {
    tQ(t, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = pA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), n = {};
  n.value = C;
  var B = {};
  return B.value = i, be.createElement(go.Provider, n, be.createElement(Aa.Provider, B, g.children));
}
var gi = function() {
  function g(I, t) {
    var A = this;
    this.inject = function(e, o) {
      void (-1 * 1652 + -1 * -4762 + -3110) === o && (o = nI);
      var i = A.name + o.hash;
      e.hasNameForId(A.id, i) || e.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = t, to(this, function() {
      throw gt(-8992 + -1 * 8447 + -1 * -17451, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return void (-1 * -8407 + 1 * 3019 + -11426) === I && (I = nI), this.name + I.hash;
  }, g;
}(), ta = function(g) {
  return g >= "A" && g <= "Z";
};
function Ii(g) {
  for (var I = "", t = -24 * 344 + -5327 + 1 * 13583; t < g.length; t++) {
    var A = g[t];
    if (-6441 + 537 * -10 + 11812 === t && A === "-" && g[1 * 7430 + -4047 + -3383] === "-") return g;
    ta(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var vC = function(g) {
  return g == null || g === !1 || g === "";
}, YC = function(g) {
  var I, t, A = [];
  for (var e in g) {
    var o = g[e];
    g.hasOwnProperty(e) && !vC(o) && (Array.isArray(o) && o.isCss || ze(o) ? A.push("".concat(Ii(e), ":"), o, ";") : $e(o) ? A.push.apply(A, je(je(["".concat(e, " {")], YC(o), !1), ["}"], !1)) : A.push("".concat(Ii(e), ": ").concat((I = e, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 1 * 4999 + -1 * -4217 + -9216 === t || I in fQ || I.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return A;
};
function Ge(g, I, t, A) {
  if (vC(g)) return [];
  if (eo(g)) return [".".concat(g.styledComponentId)];
  if (ze(g)) {
    if (!ze(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var e = g(I);
    return v.NODE_ENV === "production" || typeof e != "object" || Array.isArray(e) || e instanceof gi || $e(e) || e === null || console.error("".concat(kC(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ge(e, I, t, A);
  }
  var o;
  return g instanceof gi ? t ? (g.inject(t, A), [g.getName(A)]) : [g] : $e(g) ? YC(g) : Array.isArray(g) ? Array.prototype.concat.apply(d0, g.map(function(i) {
    return Ge(i, I, t, A);
  })) : [g.toString()];
}
function ga(g) {
  for (var I = 9629 * 1 + -211 * 46 + 77; I < g.length; I += -4486 + -2377 * -4 + -1 * 5021) {
    var t = g[I];
    if (ze(t) && !eo(t)) return !1;
  }
  return !0;
}
var Ia = GC(c0), oa = function() {
  function g(I, t, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = v.NODE_ENV === "production" && (void (-5001 + -1 * 441 + 5442) === A || A.isStatic) && ga(I), this.componentId = t, this.baseHash = he(Ia, t), this.baseStyle = A, MC.registerId(t);
  }
  return g.prototype.generateAndInjectStyles = function(I, t, A) {
    var e = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, t, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) e = ue(e, this.staticRulesId);
      else {
        var o = ei(Ge(this.rules, I, t, A)), i = iI(he(this.baseHash, o) >>> -8224 + -1 * -1935 + 6289);
        if (!t.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, C);
        }
        e = ue(e, i), this.staticRulesId = i;
      }
    else {
      for (var n = he(this.baseHash, A.hash), B = "", a = 9124 + 127 * 19 + -11537; a < this.rules.length; a++) {
        var Q = this.rules[a];
        if (typeof Q == "string") B += Q, v.NODE_ENV !== "production" && (n = he(n, Q));
        else if (Q) {
          var E = ei(Ge(Q, I, t, A));
          n = he(n, E + a), B += E;
        }
      }
      if (B) {
        var r = iI(n >>> 0);
        t.hasNameForId(this.componentId, r) || t.insertRules(this.componentId, r, A(B, ".".concat(r), void (2 * -3523 + -1 * 3951 + 1 * 10997), this.componentId)), e = ue(e, r);
      }
    }
    return e;
  }, g;
}(), WC = be.createContext(void (7795 + 74 * 109 + -5287 * 3));
WC.Consumer;
var S0 = {}, oi = /* @__PURE__ */ new Set();
function ia(g, I, t) {
  var A = eo(g), e = g, o = !R0(g), i = I.attrs, C = void (5123 + 8182 * 1 + -887 * 15) === i ? d0 : i, n = I.componentId, B = void (-1585 + -317 * -5) === n ? function(S, M) {
    var y = typeof S != "string" ? "sc" : _o(S);
    S0[y] = (S0[y] || -173 * -39 + -17 * -133 + 2252 * -4) + (-1259 * -1 + 2515 + -3773);
    var q = "".concat(y, "-").concat(kQ(c0 + y + S0[y]));
    return M ? "".concat(M, "-").concat(q) : q;
  }(I.displayName, I.parentComponentId) : n, a = I.displayName, Q = void (-4418 * -2 + -7043 + 163 * -11) === a ? function(S) {
    return R0(S) ? "styled.".concat(S) : "Styled(".concat(kC(S), ")");
  }(g) : a, E = I.displayName && I.componentId ? "".concat(_o(I.displayName), "-").concat(I.componentId) : I.componentId || B, r = A && e.attrs ? e.attrs.concat(C).filter(Boolean) : C, s = I.shouldForwardProp;
  if (A && e.shouldForwardProp) {
    var d = e.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      s = function(S, M) {
        return d(S, M) && h(S, M);
      };
    } else s = d;
  }
  var x = new oa(t, E, A ? e.componentStyle : void (-6434 * -1 + -5162 * 1 + -1272));
  function u(S, M) {
    return function(y, q, L) {
      var P = y.attrs, Ie = y.componentStyle, Xt = y.defaultProps, oe = y.foldedComponentIds, re = y.styledComponentId, D0 = y.target, zt = be.useContext(WC), zn = BI(), y0 = y.shouldForwardProp || zn.shouldForwardProp;
      v.NODE_ENV !== "production" && bg(re);
      var yo = wQ(q, zt, Xt) || Xe, _A = function($t, nt, Ag) {
        var Je = {};
        Je.className = void 0, Je.theme = Ag;
        for (var m0, Ee = wA(wA({}, nt), Je), G0 = 1273 * -7 + 2 * 58 + -1759 * -5; G0 < $t.length; G0 += 14 * -247 + -6580 + 10039) {
          var eg = ze(m0 = $t[G0]) ? m0(Ee) : m0;
          for (var ie in eg) Ee[ie] = ie === "className" ? ue(Ee[ie], eg[ie]) : ie === "style" ? wA(wA({}, Ee[ie]), eg[ie]) : eg[ie];
        }
        return nt.className && (Ee.className = ue(Ee.className, nt.className)), Ee;
      }(P, q, yo), it = _A.as || D0, Ct = {};
      for (var bA in _A) void (-4793 + 1 * 4793) === _A[bA] || bA[13 * 178 + -1117 + -399 * 3] === "$" || bA === "as" || bA === "theme" && _A.theme === yo || (bA === "forwardedAs" ? Ct.as = _A.forwardedAs : y0 && !y0(bA, it) || (Ct[bA] = _A[bA], y0 || v.NODE_ENV !== "development" || cB(bA) || oi.has(bA) || !oI.has(it) || (oi.add(bA), console.warn('styled-components: it looks like an unknown prop "'.concat(bA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var w0 = function($t, nt) {
        var Ag = BI(), Je = $t.generateAndInjectStyles(nt, Ag.styleSheet, Ag.stylis);
        return v.NODE_ENV !== "production" && bg(Je), Je;
      }(Ie, _A);
      v.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(w0);
      var p0 = ue(oe, re);
      return w0 && (p0 += " " + w0), _A.className && (p0 += " " + _A.className), Ct[R0(it) && !oI.has(it) ? "class" : "className"] = p0, Ct.ref = L, fA(it, Ct);
    }(w, S, M);
  }
  u.displayName = Q;
  var w = be.forwardRef(u), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, w.attrs = r, w.componentStyle = x, w.displayName = Q, w.shouldForwardProp = s, w.foldedComponentIds = A ? ue(e.foldedComponentIds, e.styledComponentId) : "", w.styledComponentId = E, w.target = A ? e.target : g, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = A ? function(M) {
      for (var y = [], q = -2 * -2642 + -4 * -1953 + 1 * -13095; q < arguments.length; q++) y[q - (9550 + -4075 * -2 + -17699)] = arguments[q];
      for (var L = 0, P = y; L < P.length; L++) CI(M, P[L], !0);
      return M;
    }({}, e.defaultProps, S) : S;
  } }), v.NODE_ENV !== "production" && (yQ(Q, E), w.warnTooManyClasses = /* @__PURE__ */ function(S, M) {
    var y = {}, q = !1;
    return function(L) {
      if (!q && (y[L] = !0, Object.keys(y).length >= -2 * -3837 + 7212 + 14686 * -1)) {
        var P = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(9661 + 9 * 29 + -9722, " classes were generated for component ").concat(S).concat(P, `.
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
  }(Q, E)), to(w, function() {
    return ".".concat(w.styledComponentId);
  }), o && RC(w, g, R), w;
}
function ii(g, I) {
  for (var t = [g[11 * -100 + 3399 + 121 * -19]], A = -7806 + -449 * 2 + 8704, e = I.length; A < e; A += 711 * 12 + -81 * -50 + 547 * -23) t.push(I[A], g[A + (-7981 + -641 * 3 + 5 * 1981)]);
  return t;
}
var Ci = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function Ca(g) {
  for (var I = [], t = 1; t < arguments.length; t++) I[t - (-1 * 8899 + 1 * 2453 + 6447)] = arguments[t];
  if (ze(g) || $e(g)) return Ci(Ge(ii(d0, je([g], I, !0))));
  var A = g;
  return 5698 + 3 * -1828 + -214 * 1 === I.length && -2252 + 3 * -1489 + 6720 === A.length && typeof A[2838 + 86 * -33] == "string" ? Ge(A) : Ci(Ge(ii(A, I)));
}
function QI(g, I, t) {
  if (void (-13 * 401 + -5388 + 10601 * 1) === t && (t = Xe), !I) throw gt(1069 * -1 + 515 * -10 + 1555 * 4, I);
  var A = function(e) {
    for (var o = [], i = 793 + -396 * 2; i < arguments.length; i++) o[i - (18 * 415 + 2538 * 3 + -15083)] = arguments[i];
    return g(I, t, Ca.apply(void (6 * 773 + 59 * 9 + -1723 * 3), je([e], o, !1)));
  };
  return A.attrs = function(e) {
    return QI(g, I, wA(wA({}, t), { attrs: Array.prototype.concat(t.attrs, e).filter(Boolean) }));
  }, A.withConfig = function(e) {
    return QI(g, I, wA(wA({}, t), e));
  }, A;
}
var UC = function(g) {
  return QI(ia, g);
}, Pt = UC;
oI.forEach(function(g) {
  Pt[g] = UC(g);
});
v.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ig = "__sc-".concat(Ne, "__");
v.NODE_ENV !== "production" && v.NODE_ENV !== "test" && typeof window < "u" && (window[ig] || (window[ig] = -2 * -362 + 199 * -4 + 72), 4996 + -147 * -42 + -11169 === window[ig] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ig] += 16345 + 227 * -72);
const na = Pt.div`
  position: relative;
`, Ba = Pt.video`
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
const ug = {};
ug.CONTINUE_DETECTION = "continue-detection", ug.SWITCH_CAMERA = "switch-camera", ug.TOGGLE_MIRROR = "toggle-mirror";
const M0 = ug, aI = {};
aI.FIRST_FRAME = "first-frame", aI.FIRST_VALID_FRAME = "first-valid-frame";
const fg = aI, HC = {};
HC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const xI = HC;
var KC = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))(KC || {}), qA = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(qA || {}), Qa = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(Qa || {}), Rg = ((g) => (g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(Rg || {}), aa = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(aa || {}), xa = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(xa || {});
const OC = {};
OC.EYE_NOT_PRESENT = "eye_not_present";
const ni = OC, cA = {};
cA.CANDIDATE_SELECTION = "candidate_selection", cA.FACE_TOO_CLOSE = "face_too_close", cA.FACE_TOO_FAR = "face_too_far", cA.FACE_CENTERING = "face_centering", cA.FACE_NOT_PRESENT = "face_not_present", cA.SHARPNESS_TOO_LOW = "sharpness_too_low", cA.BRIGHTNESS_TOO_LOW = "brightness_too_low", cA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", cA.DEVICE_PITCHED = "device_pitched", cA.LEFT_EYE_NOT_PRESENT = "left_" + ni.EYE_NOT_PRESENT, cA.RIGHT_EYE_NOT_PRESENT = "right_" + ni.EYE_NOT_PRESENT, cA.MOUTH_NOT_PRESENT = "mouth_not_present", cA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", cA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const IA = cA, yA = {};
yA.isPresent = IA.FACE_NOT_PRESENT, yA.isNotPitched = IA.DEVICE_PITCHED, yA.isNotSmall = IA.FACE_TOO_FAR, yA.isNotLarge = IA.FACE_TOO_CLOSE, yA.isNotOutOfBounds = IA.FACE_CENTERING, yA.isNotDim = IA.BRIGHTNESS_TOO_LOW, yA.isNotBright = IA.BRIGHTNESS_TOO_HIGH, yA.isSharp = IA.SHARPNESS_TOO_LOW, yA.isLeftEyePresent = IA.LEFT_EYE_NOT_PRESENT, yA.isRightEyePresent = IA.RIGHT_EYE_NOT_PRESENT, yA.isMouthPresent = IA.MOUTH_NOT_PRESENT, yA.isMouthScoreNotTooHigh = IA.MOUTH_SCORE_TOO_HIGH, yA.isMouthScoreNotTooLow = IA.MOUTH_SCORE_TOO_LOW;
const ra = yA, rI = {};
rI.FRONT = "user", rI.REAR = "environment";
const Io = rI, EI = {};
EI.AUTO_CAPTURE = "AUTO_CAPTURE", EI.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Sg = EI, Et = {};
Et.LOADING = "LOADING", Et.ERROR = "ERROR", Et.WAITING = "WAITING", Et.RUNNING = "RUNNING";
const ZA = Et;
({ ...IA });
var Ea = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(Ea || {});
({ ...IA });
const sI = {};
sI.NEUTRAL = "NEUTRAL", sI.SMILE = "SMILE";
const KA = sI, TC = { ...ZA };
TC.DONE = "DONE";
const TA = TC;
({ ...IA });
const h0 = jt(void 0);
h0.displayName = "AppStateContext";
function It() {
  const g = Me(h0);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const sa = h0.Provider, ca = It;
class qC extends RA {
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
p(qC, "contextType", h0);
const da = Pt.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, ha = Pt.div`
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
function la() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const ua = oC(
  ({ detectionDetails: g, isImageMirror: I }, t) => la() ? (console.log(g), /* @__PURE__ */ D(MA, { children: [
    /* @__PURE__ */ D(da, { ref: t, $isImageMirror: I }),
    /* @__PURE__ */ D(ha, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), Mg = jt(void 0);
Mg.displayName = "AnalyticsContext";
function oo() {
  const g = Me(Mg);
  if (g === void 0)
    throw new Error(`${Mg.displayName} must be used within a AnalyticsProvider`);
  return g;
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return dA(Q - 793, n);
  }
  function A(C, n, B, a, Q) {
    return dA(a - -727, Q);
  }
  const e = g();
  function o(C, n, B, a, Q) {
    return dA(a - -285, C);
  }
  function i(C, n, B, a, Q) {
    return dA(n - 38, a);
  }
  for (; ; )
    try {
      if (parseInt(t(1072, "Izk!", 1075, 1072, 1056)) / 1 * (-parseInt(t(1041, "5@sG", 1038, 1066, 1055)) / 2) + -parseInt(i(317, 310, 302, "7[rt", 324)) / 3 * (-parseInt(A(-465, -500, -477, -481, "C3s^")) / 4) + parseInt(A(-494, -497, -484, -488, "*S&p")) / 5 + parseInt(t(1041, "Jg)U", 1054, 1045, 1049)) / 6 * (parseInt(A(-460, -470, -459, -468, "^VTi")) / 7) + -parseInt(A(-464, -468, -467, -472, "leM5")) / 8 * (-parseInt(i(282, 280, 277, "w^8N", 294)) / 9) + -parseInt(o("J3IA", -9, -8, -25, -22)) / 10 * (parseInt(i(294, 305, 303, "26[k", 296)) / 11) + -parseInt(i(277, 283, 290, "((yM", 264)) / 12 === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(vg, 1 * -67495 + 1321042 * 1 + -400976);
function Lg(g, I, t, A, e) {
  return dA(I - 747, e);
}
function dA(g, I) {
  const t = vg();
  return dA = function(A, e) {
    A = A - 238;
    let o = t[A];
    if (dA.bflxci === void 0) {
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
      dA.dBQDAL = a, g = arguments, dA.bflxci = !0;
    }
    const C = t[46 * -98 + -8111 + -12619 * -1], n = A + C, B = g[n];
    return B ? o = B : (dA.fxhKvQ === void 0 && (dA.fxhKvQ = !0), o = dA.dBQDAL(o, e), g[n] = o), o;
  }, dA(g, I);
}
function ZC(g, I, t, A, e) {
  return dA(A - -357, e);
}
function Bi(g, I, t, A, e) {
  return dA(e - -235, g);
}
const Jg = jt(void (10950 + 438 * -25));
function vg() {
  const g = ["WQbtWOxdImk8hcS", "pSkiW5iHlG", "D8kXhW4A", "Aa84v2PfWPKNgsnOW4OU", "nGbea8oyWPaCW4ddT8kLuSoxW5ex", "hCkiW6OYW6FdOHDUlmkvvcL/", "dftdO8o2WQVdLSolyH0+W64B", "WRn0WOpdQ8kvfmk/WQq", "W7VcJGn2W49AW6dcQ2jzzWnybW", "W6yIWRZcIGWKW4VdVmo8", "Av7cP8kDrq", "dMhcU8oLEKuGaW", "tSoAcmoNEW", "W5JdMwlcJCo1", "W5DcW5ruW4tdImoq", "qhddOwVcOb1UW5mrWQZcVmk6W5i", "WP7cUCooW6tdVaPL", "rLdcQ8k+WRi", "cmobkG", "a3rgA8ocW6xcUW", "W6v9WRldTSkh", "CfeBW45sk8o4h8oVW6blW7ZdRq", "WQhcP3DiEGfbWQNcQ8knWP8fvW", "D8oCWORdImkS", "W4JcQmklr8oQWOpcTSoceSo3hfC", "WQRdOmoljKDkWR7dTmoS", "EJlcIdfAW4dcU1JcHd7dQmkDDa", "oLRdO8oXwW", "WPDTW7nuW5dcLI3cRxpdRqzSuW", "qCoqWOr1DGFcOCkheXmzW7v0", "WPf0iNJdGSkqFca", "WQCPW4pcQ8oBqaZcV8oCmYSG", "FLlcSmonxG", "W4ZcSSoPW5pdMG", "sZxcSmo9", "bSkelXfGDbP8", "ECkxBSkbWOC", "WO/dRx4qsG", "CLeEW4DwkCknpSodW4XtW7W"];
  return vg = function() {
    return g;
  }, vg();
}
Jg[Lg(976, 996, 981, 985, "Y1&U") + Lg(1014, 997, 1001, 1013, "7[rt") + "e"] = Bi("C3s^", 41, 18, 17, 22) + ZC(-79, -90, -101, -81, "Jg)U") + Bi("26[k", 10, 25, 4, 16);
function ot() {
  const g = Me(Jg);
  if (g === void (101 + 1 * -101)) throw new Error(Jg[A(742, 757, 726, 729, "$8wm") + t(-388, -384, "#VE#") + "e"] + (A(743, 726, 733, 760, "#Xw#") + I(419, 397, 427, "FSfX", 411) + A(740, 726, 734, 734, "Y1&U") + A(727, 720, 728, 729, "4QOZ") + A(718, 702, 700, 733, "Y1&U") + A(714, 723, 697, 714, "bqy5") + I(379, 400, 398, "0v!1", 396) + I(409, 427, 432, "TN#Q", 412)));
  function I(e, o, i, C, n) {
    return Lg(e - 478, n - -609, i - 261, C - 388, C);
  }
  function t(e, o, i, C, n) {
    return ZC(e - 440, o - 47, i - 226, o - -281, i);
  }
  function A(e, o, i, C, n) {
    return Lg(e - 125, e - -273, i - 434, C - 358, n);
  }
  return g;
}
const Fe = (g) => g.length < -3673 * -1 + 3765 + -7437 ? -148 * -41 + -6839 * 1 + 771 : g.reduce((t, A) => t + A, 0) / g.length, ge = (g) => Number.parseFloat(g.toFixed(1513 + 583 * -17 + 1 * 8401)), fa = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(4877 + 4877 * -1, 0, I.canvas.width, I.canvas.height);
}, jC = 0 + 0.75, Da = 581 + 1399 * 1 + -1978, ya = 1 * -8071 + 49 * 83 + 1 * 4604, wa = 7470 + -4927 * -1 + -12397, pa = "dot-auto-capture-video", l0 = (g, I) => Math.min(g, I), PC = ({ height: g, width: I }, t) => {
  const A = l0(I, g) * t, e = (I - A) / 2, o = (g - A) / (6807 + 3 * -1601 + -2002), i = {};
  return i.shiftX = e, i.shiftY = o, i.width = A, i.height = A, i;
}, ma = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = PC(g, I), i = {};
  return i.shiftX = A / g.width, i.shiftY = e / g.height, i.width = o / g.width, i.height = t / g.height, i;
}, Ga = ({ height: g, width: I }) => {
  const t = l0(I, g), A = t / (6794 + -538 * -12 + -1019 * 13) * (-6616 + -2011 * -1 + 4609);
  if (I > g) {
    const o = {};
    return o.width = A, o.height = t, o;
  }
  const e = {};
  return e.width = t, e.height = A, e;
}, ka = (g, I) => {
  const t = l0(I.width, I.height);
  return ge(g * t);
}, ba = ({ height: g, width: I }) => {
  const t = {};
  return t.height = g, t.width = I, PC(t, jC);
}, Na = (g) => ma(g, jC), Fa = (g, I) => ka(g, I) * Da, Ra = "@innovatrics/dot-common-auto-capture", Sa = "7.0.0", Ma = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, La = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Ja = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, va = {
  name: Ra,
  private: !0,
  version: Sa,
  scripts: Ma,
  dependencies: La,
  devDependencies: Ja
}, Ya = -4937 * -1 + -7930 + -41 * -73 + 0.4, Wa = -9858 + -1 * -4531 + 761 * 7 + 0.16, Ua = -699 + -1 * -7305 + 6606 * -1 + 0.2, Ha = 1302 + 1 * 2110 + -3412 + 0.05, Ka = -10209 + -3403 * -3, cI = {};
cI.min = -(6686 + 995 * -1 + 5 * -1138), cI.max = 1;
const Qi = cI, ai = -3518 + -38 * 10 + 1 * 3898, Oa = 39 * -105 + -3145 + 7240 + 0.25, Ta = 205 * -31 + 1251 * -3 + -266 * -38 + 0.2, qa = 7790 + 67 * 78 + 8 * -1627 + 0.85, Za = -46 * 61 + 1365 + 1471 * 1, ja = 1435 + -1 * -6379 + -7805 + 0.8100000000000005, Dg = {};
Dg.minDuration = 1e3, Dg.maxDuration = 2500, Dg.minFrames = 10;
const L0 = Dg, dI = {};
dI.max = 100, dI.min = 10;
const xi = dI, Pa = -2341 * 4 + -3608 + 13692, Va = -1922 * -3 + 2549 + -8115 * 1, _a = 318 * 31 + -1495 * 5 + -3 * 793, VC = "AES-CBC", _C = "RSA-OAEP", Xa = "SHA-256", za = "image/jpeg", $a = -9403 * -1 + 1 * -6818 + -2577, Ax = 1 * -5705 + 9569 * -1 + -1178 * -13, XC = "/dot-assets", ri = "dot_embedded_bg.wasm", zC = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Ei = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, ex = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, hI = (g) => new Promise((I) => {
  setTimeout(I, g);
}), $C = (g) => JSON.parse(JSON.stringify(g, (I, t) => typeof t == "number" ? ge(t) : t)), An = () => va.version, en = (g) => new URL(g).hostname.replace("www.", ""), tx = () => en(window.location.href) === "localhost", Cg = (g) => Object.entries(g).map(([I, t]) => encodeURIComponent(I) + "=" + encodeURIComponent(t)).join("&"), gx = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g;
function Ix(g, I) {
  let t;
  return (...A) => {
    const e = () => {
      clearTimeout(t), t = void 0, g(...A);
    };
    t === void (1997 * -1 + -4390 + 6387) && (t = setTimeout(e, I));
  };
}
function ox(g) {
  return g.at(-(1557 + -12 * 418 + 865 * 4)) === "/" ? g.slice(0, -(-7733 + 6 * 1289)) : g;
}
function tn(g) {
  return "" + ox(g ?? "") + XC;
}
const ix = () => "prod".toLowerCase() === "dev";
class mt extends Array {
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
    this.length === this.size && this.splice(-831 + 23 * 249 + 48 * -102, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(8 * 439 + 4747 + 2753 * -3);
  }
}
const Cx = (g, I, t = za) => new Promise((A) => {
  g.toBlob((e) => {
    if (!e) throw new Error("Canvas to Blob failed");
    A(e);
  }, t, I);
}), nx = async (g) => Cx(g, 1 * -2959 + -79 * 11 + -6 * -653), Bx = (g, I) => {
  const t = document.createElement("canvas");
  t.width = I.width, t.height = I.height;
  const A = t.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, -5282 + -997 * 9 + -2851 * -5, -1360 + -650 * 4 + 198 * 20, t.width, t.height), t;
}, Qx = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: t } = I.getImageData(9142 + -1 * 9142, 29 * 226 + -35 * -235 + -14779, g.width, g.height);
  return t;
}, gn = (g, I, t, A) => {
  const e = g.getContext("2d");
  e && (e.beginPath(), A ? (e.fillStyle = t, e.fillRect(I.topLeft.x, I.topLeft.y, I.width, I.height)) : (e.strokeStyle = t, e.rect(I.topLeft.x, I.topLeft.y, I.width, I.height)), e.stroke());
}, J0 = (g, I, t) => {
  const { height: A, shiftX: e, shiftY: o, width: i } = I, C = {};
  C.x = e, C.y = o;
  const n = {};
  n.topLeft = C, n.width = i, n.height = A, n.color = t, gn(g, n, t);
}, ft = (g, I, t, A = 7644 + 37 * -252 + -336 * -5) => {
  const e = g.getContext("2d");
  e && (e.fillStyle = t, e.fillRect(I.x + A, I.y + A, -14 * 613 + -1678 * -5 + -1 * -199, -1607 * -3 + 29 * 249 + 5 * -2407), e.beginPath());
}, ax = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < e || g.y > e + t);
}, xx = (g, I) => Object.values(g).every((t) => ax(t, I));
function Yg(g) {
  const { height: I, width: t } = Ga(g), A = (g.width - t) / (-1 * -9985 + 4411 + -14394), e = (g.height - I) / (-3361 * 1 + -2099 * -3 + -2934), o = {};
  return o.shiftX = A, o.shiftY = e, o.width = t, o.height = I, o;
}
function In(g, I, t) {
  const { height: A, width: e } = t, o = l0(g.width, g.height), i = e - o * I * (683 * 4 + -5510 + -5 * -556), C = A - o * I * 2, n = (g.width - i) / (2551 + 21 * -155 + 706), B = (g.height - C) / 2, a = {};
  return a.shiftX = n, a.shiftY = B, a.width = i, a.height = C, a;
}
function Ye(g, I) {
  const { shiftX: t, shiftY: A } = I, e = {};
  return e.x = g.x + t, e.y = g.y + A, e;
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return BA(n - 426, E);
  }
  function A(n, B, a, Q, E) {
    return BA(E - 277, n);
  }
  function e(n, B, a, Q, E) {
    return BA(a - -41, E);
  }
  function o(n, B, a, Q, E) {
    return BA(E - 118, a);
  }
  function i(n, B, a, Q, E) {
    return BA(E - 948, Q);
  }
  const C = g();
  for (; ; )
    try {
      if (parseInt(i(1080, 1075, 1081, "51RF", 1079)) / 1 * (parseInt(i(1072, 1061, 1069, "JS^2", 1071)) / 2) + -parseInt(t(555, 542, 542, 552, "JDap")) / 3 * (parseInt(o(240, 239, "@7P6", 250, 246)) / 4) + parseInt(o(268, 260, "fYYM", 265, 257)) / 5 + parseInt(e(90, 85, 89, 86, "MWks")) / 6 * (parseInt(i(1073, 1061, 1066, "n8mS", 1072)) / 7) + -parseInt(t(570, 569, 578, 561, "pouo")) / 8 + parseInt(A("VkFg", 412, 398, 405, 412)) / 9 + -parseInt(o(275, 258, "*&i%", 274, 264)) / 10 === I) break;
      C.push(C.shift());
    } catch {
      C.push(C.shift());
    }
})(Wg, 795732);
function Wg() {
  const g = ["W5hcKabvCG", "WRdcI8o9ea", "W7RdNab9xa", "nCo5W79hWO7dSSkTESo1sSkRymkU", "W6NdNXGXWPNcJZG", "FupdISoMqKyhWOZdPCopWRumW61Z", "W6JcISona0iDWQK", "ASkzWO7cG8k3zSkJDHX3Eti/", "pv4Eqdm", "WPNcIuuWb1v8WOCCqCo/W5NcQG", "kSoADrlcO0ldOZlcLrXb", "iCo1v8kaymoSEdVdU8oEW5mbW4O", "WRefWR0sySkeWORdTmofESoAj8ks", "bWtcQgFdUmkGW57dOJddK8k/W7NdOW", "z8obW6ZdO8oKnSog", "cCksqYu5W44hCaVdK8oapq", "pSorWPNcNHxcQSkXa3FdMa", "WRhcKcJdLCkQW4dcOW", "edyfySkL", "l17dSJxcOa", "F8k7WQiqW5i", "DCkKWOpdSmk7eSkxWOVdPxX5W6xcUG", "amkqrYO5W49kbaVdM8oIcSoPDW", "isBdHq/dVGhdMaLRW7HJoG", "rxfBi8oUm8klW4BdQN9F", "bSobWRddMSkkW4OwA8kaWOhcJW5O", "WRhdJ0pcGSk7W7lcISocqqi"];
  return Wg = function() {
    return g;
  }, Wg();
}
function BA(g, I) {
  const t = Wg();
  return BA = function(A, e) {
    A = A - 121;
    let o = t[A];
    if (BA.cdFjhj === void 0) {
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
      BA.rmHRGs = a, g = arguments, BA.cdFjhj = !0;
    }
    const C = t[6055 + 4 * 466 + 7919 * -1], n = A + C, B = g[n];
    return B ? o = B : (BA.MAmjfx === void 0 && (BA.MAmjfx = !0), o = BA.rmHRGs(o, e), g[n] = o), o;
  }, BA(g, I);
}
function rx({ assetsDirectoryPath: g, bramble: I }) {
  const [t, A] = EA(), e = t !== void (-1087 + -871 * 2 + -943 * -3);
  T(() => {
    async function n() {
      function B(Q, E, r, s, d) {
        return BA(Q - 716, E);
      }
      await I[B(858, "LiR$")](tn(g));
      function a(Q, E, r, s, d) {
        return BA(Q - 112, E);
      }
      A(I[B(838, "zB&*") + a(253, "[Yl!") + B(859, "JS^2") + "t"]());
    }
    n();
  }, [I, g, A]);
  function o(n, B, a, Q, E) {
    return BA(E - 183, a);
  }
  const i = {};
  i[o(304, 301, "pC06", 313, 315) + C(-460, "^IC@", -471)] = t;
  function C(n, B, a, Q, E) {
    return BA(a - -604, B);
  }
  return i[o(327, 322, "pouo", 308, 317) + "sh"] = e, i;
}
var on = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(on || {});
const lI = {};
lI.SIMD = "simd", lI.NO_SIMD = "no-simd";
const si = lI, uI = {};
uI.Lower = "Lower", uI.Higher = "Higher";
const fI = uI, yg = {};
yg.VISIBLE = "VISIBLE", yg.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", yg.HIDDEN = "HIDDEN";
const Ug = yg;
(function(g, I) {
  function t(B, a, Q, E, r) {
    return hA(r - 213, E);
  }
  function A(B, a, Q, E, r) {
    return hA(Q - -625, a);
  }
  function e(B, a, Q, E, r) {
    return hA(r - 791, a);
  }
  var o = g();
  function i(B, a, Q, E, r) {
    return hA(r - 793, B);
  }
  function C(B, a, Q, E, r) {
    return hA(a - -925, B);
  }
  for (; ; )
    try {
      var n = -parseInt(C("hipW", -429, -435, -420, -432)) / 1 * (parseInt(A(-143, "q^uI", -132, -144, -130)) / 2) + -parseInt(t(704, 696, 685, "K2st", 694)) / 3 * (parseInt(i("TntM", 1270, 1284, 1283, 1277)) / 4) + parseInt(e(1276, "Nw[v", 1295, 1291, 1286)) / 5 + -parseInt(e(1284, "9q%z", 1291, 1286, 1280)) / 6 + -parseInt(i("#d@B", 1294, 1278, 1283, 1290)) / 7 + -parseInt(e(1290, "%@IX", 1291, 1283, 1290)) / 8 * (parseInt(A(-128, "@giD", -125, -119, -133)) / 9) + parseInt(A(-155, "@giD", -145, -148, -150)) / 10;
      if (n === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Hg, 194 * -3707 + -275931 + 5 * 288714);
function hA(g, I) {
  var t = Hg();
  return hA = function(A, e) {
    A = A - (1702 * -2 + 5 * 1993 + -6083);
    var o = t[A];
    if (hA.YvzaRl === void 0) {
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
      hA.TASFeI = C, g = arguments, hA.YvzaRl = !0;
    }
    var n = t[228 + -4222 * 1 + 3994 * 1], B = A + n, a = g[B];
    return a ? o = a : (hA.jnSQzv === void 0 && (hA.jnSQzv = !0), o = hA.TASFeI(o, e), g[B] = o), o;
  }, hA(g, I);
}
function Hg() {
  var g = ["nSk2sehdMG", "W6O8Emk4fsnmnCom", "W6SWCSoozNidsSo/WQyaW70GWOG", "vCoJlJvFW61Ufmkm", "W41iW6hdJxHDWRj9WPtdOZS+W74", "W5ZcRJdcUSopi8k+aSoIWO7cUsm8", "ACoFW7P6CSkimNVcHa87", "rSoVrepdMLaQgG", "t8oSgX3cH0GRpSoMWOrB", "WP7dU8kkdh8UxWhdUCow", "W7TuoSkoCa", "W45jW6pdGNDCWRjfWR7dUJOIW6O", "c8otu8kxF8oPW60Tt8kAW5z8W6ddIa", "W5/cQdtdG8kZymoTa8oW", "t8o5FCk4WOu5oZRdMxu4ea", "w8k7WOmEWP7dT8ohW5ldRCke", "ArpcKCoiAq", "ucjnW6rHnmkUWPhcNmkWoSorDW", "W4RcMdqpWRb1WRpdJc0", "r8kAWPldGxNdNCkqnaWej08Z", "uYzmW6TNo8kTWQNcOSkjh8oZra", "j8kLzuVdUCkgW7b/", "W649FCobyN1Xl8omWRuGW4G"];
  return Hg = function() {
    return g;
  }, Hg();
}
function Ex({ crosshatch: g }) {
  function I(A, e, o, i, C) {
    return hA(C - -730, o);
  }
  function t(A, e, o, i, C) {
    return hA(i - -801, e);
  }
  return g != null && g[t(-299, "0EH0", -309, -307) + "id"] ? fI[I(-243, -245, "()@M", -248, -252) + "r"] : fI[I(-238, -252, "zZ*t", -232, -242)];
}
(function(g, I) {
  const t = g();
  function A(C, n, B, a, Q) {
    return QA(n - 660, a);
  }
  function e(C, n, B, a, Q) {
    return QA(C - -351, B);
  }
  function o(C, n, B, a, Q) {
    return QA(C - -791, a);
  }
  function i(C, n, B, a, Q) {
    return QA(n - 315, Q);
  }
  for (; ; )
    try {
      if (-parseInt(o(-460, -455, -450, "cR9g", -457)) / 1 + parseInt(e(-36, -27, "wWGc", -52, -34)) / 2 + -parseInt(o(-486, -492, -476, "yJ7R", -498)) / 3 * (-parseInt(o(-455, -466, -464, "jH9I", -442)) / 4) + -parseInt(e(-37, -50, "nG[p", -50, -32)) / 5 + -parseInt(A(960, 970, 980, "O9(]", 956)) / 6 * (-parseInt(o(-466, -471, -482, "0scl", -455)) / 7) + -parseInt(o(-482, -487, -485, "]fLZ", -498)) / 8 * (parseInt(o(-462, -452, -467, "tD4%", -455)) / 9) + parseInt(i(618, 622, 610, 628, "wWGc")) / 10 === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Kg, -7481 * -25 + -620 * 641 + 479686);
function Kg() {
  const g = ["WRyZr8k9WQb/W7BdKaNcJ8ol", "WOK0W4DAwa", "uH57WQ0+DCoJo8otlSkbw8oB", "cIX6jmoY", "b8oBW7hcI3G", "sfhdOX0u", "ctH1", "W7naW7JcRq", "tflcV37dSLtdICkwW7iQDIq", "W5lcPuK5WOyWhq", "WPBdQ8kgfCk5x8oaBWijqW7dJW", "WOGkW43cLWa", "W60/tG", "WRBcNrznlaaSuq", "WRPObuO8WQtdHmoTWPtdN3C", "W6PMW6qJlMeZW6ZdGYldJG", "W64nWPvcwNGG", "WRxcJM4CWQm", "dtX3DG0", "WRaXrmkXWQCrW7NdOG7cSSoCiG", "jLjGWPhdKSkwkSoy", "WRHVceeXWPldSSopWPtdUem", "WOyFW749v8kyAWi", "ug0QECkHrSksc8kZW5VcNSkj", "WQJcI8k7W5r8", "WPivWRZdSWddUs81bSocW6HVW7i", "WQxdP0/dPx3cOd3dVIRdJSoKW4dcKG", "WPWfBCojpSkAnCoYWOhcVmkLW4Gm", "W53cOSkQW444", "FSkHW6pcH3uXW4tdIq", "BYdcKr3dRmoIWOhcUelcT8kXFSou", "x2KSFmkIqSkIamktW77cTSkD"];
  return Kg = function() {
    return g;
  }, Kg();
}
function QA(g, I) {
  const t = Kg();
  return QA = function(A, e) {
    A = A - (-9971 + -8059 * 1 + -1 * -18335);
    let o = t[A];
    if (QA.cpePdr === void 0) {
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
      QA.rrYXED = a, g = arguments, QA.cpePdr = !0;
    }
    const C = t[-82 * -75 + 9951 + -16101], n = A + C, B = g[n];
    return B ? o = B : (QA.zkgYGO === void 0 && (QA.zkgYGO = !0), o = QA.rrYXED(o, e), g[n] = o), o;
  }, QA(g, I);
}
function sx({ assetsDirectoryPath: g, children: I, bramble: t }) {
  const A = {};
  A[n(1102, "wWGc", 1104) + "le"] = t;
  function e(s, d, h, x, u) {
    return QA(x - 896, s);
  }
  A[e("Dqnq", 1211, 1197, 1204) + n(1114, "8ZiR", 1112) + E(-409, -424, -419, -407, "8i4H") + a(-435, -428, "]fLZ")] = g;
  function o(s, d, h, x, u) {
    return QA(x - 966, u);
  }
  const { sunfish: i, crosshatch: C } = rx(A);
  function n(s, d, h, x, u) {
    return QA(h - 785, d);
  }
  const B = {};
  B[a(-446, -435, "#z1U") + e("Tjjt", 1218, 1208, 1216)] = C;
  function a(s, d, h, x, u) {
    return QA(s - -758, h);
  }
  const Q = pA(() => ({ redfin: Ex(B), sunfish: i, crosshatch: C, bramble: t }), [i, C, t]);
  function E(s, d, h, x, u) {
    return QA(s - -730, u);
  }
  const r = {};
  return r[o(1298, 1289, 1290, 1300, "hHJ%")] = Q, r[o(1274, 1276, 1297, 1283, "&z$q") + n(1118, "hHJ%", 1107)] = I, D(Jg[e("0scl", 1224, 1239, 1229) + a(-430, -414, "yJ7R")], r);
}
function Og() {
  var g = ["ed/cSHaYW4riW5HzESkzWPFcRG", "W7akW7z4W5xdHSkZbCo5WQW", "W5vXDXaBhmoytCoAcmoC", "iHb/WOSuimkTx3pcOGTFW5O", "BdCLva4WW7DkW5v2", "WOaEW6PXtwK+hCkVW48", "W5DUsSkmW67cISk6tSojmq", "FSkvdxpcKWhcICkP", "WR3dJmkQWQFdGGCBlCo6fG", "WOiRW5jVWQ1ZnfnTW4i", "WObOyxVdRmklWQa", "b8ozifhcHmk9WPBdGmkeWOC", "W6niW5i7dru0WQr9oc8xiq", "W7qbW7jZWOpcQmogk8oOWPpdGsPK", "W5nOs8kfW5/cPCkVF8oBoa", "AdiGxdC0W79qW51n", "x344m8kuWOrzW7rEWQK", "W5DUtCkhWR7cSmkzqCo2c8kK", "W5zOtCkmW6VcH8kxBSo+pa", "WRxcLSkXAmo0dtiH", "aCoFkvJcTCkAWQldJSkJWOu", "jHH3WOqFk8kPtLhcQZ92W6i", "aSo9W4umoL/dMW", "WOqgoJtcT8orW4hdVCo7B8kNsSkU"];
  return Og = function() {
    return g;
  }, Og();
}
function FA(g, I) {
  var t = Og();
  return FA = function(A, e) {
    A = A - (2015 + 1 * 3625 + -5457);
    var o = t[A];
    if (FA.bbEnqp === void 0) {
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
      FA.axZlxb = C, g = arguments, FA.bbEnqp = !0;
    }
    var n = t[5009 + -7 * -581 + -1 * 9076], B = A + n, a = g[B];
    return a ? o = a : (FA.ymzzSz === void 0 && (FA.ymzzSz = !0), o = FA.axZlxb(o, e), g[B] = o), o;
  }, FA(g, I);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return FA(a - 813, E);
  }
  function A(n, B, a, Q, E) {
    return FA(n - -608, Q);
  }
  var e = g();
  function o(n, B, a, Q, E) {
    return FA(Q - -415, B);
  }
  function i(n, B, a, Q, E) {
    return FA(E - 899, B);
  }
  for (; ; )
    try {
      var C = parseInt(o(-216, "4C[g", -225, -221, -210)) / 1 * (parseInt(o(-224, "TN5y", -229, -231, -235)) / 2) + parseInt(o(-222, "xv[(", -223, -226, -224)) / 3 + parseInt(A(-422, -428, -421, "iEr%", -413)) / 4 * (-parseInt(A(-417, -425, -413, "4C[g", -423)) / 5) + -parseInt(t(1021, 1018, 1011, 1019, "A3Z#")) / 6 * (-parseInt(i(1088, "Qq*]", 1080, 1088, 1086)) / 7) + -parseInt(t(1011, 1003, 1006, 1013, "!op2")) / 8 * (parseInt(i(1097, "4C[g", 1090, 1089, 1094)) / 9) + -parseInt(t(991, 996, 998, 990, "5zuX")) / 10 * (parseInt(A(-425, -426, -430, "4C[g", -425)) / 11) + -parseInt(i(1113, "A3Z#", 1100, 1103, 1103)) / 12;
      if (C === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Og, -1010618 + 2 * 839037);
function cx({ analytics: g, crosshatch: I }) {
  return I !== void (1620 + -60 * 27) && !I.isAnalyticsDisabled ? g : void (-1 * -4568 + 7830 + -12398);
}
function dx({ analytics: g, appKey: I, redfin: t, crosshatch: A, bramble: e }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = cx(o);
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
function hx({
  analytics: g,
  appKey: I,
  children: t
}) {
  const { redfin: A, crosshatch: e, bramble: o } = ot(), i = dx({ analytics: g, redfin: A, appKey: I, crosshatch: e, bramble: o }), C = pA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ D(Mg.Provider, { value: C, children: t });
}
let F;
const Ae = new Array(128).fill(void 0);
Ae.push(void 0, null, !0, !1);
function DI(g) {
  return Ae[g];
}
let jA = 0, st = null;
function wg() {
  return (st === null || st.byteLength === -5 * -241 + -1 * -5117 + -6322) && (st = new Uint8Array(F.memory.buffer)), st;
}
const pg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, lx = typeof pg.encodeInto == "function" ? function(g, I) {
  return pg.encodeInto(g, I);
} : function(g, I) {
  const t = pg.encode(g);
  I.set(t);
  const A = {};
  return A.read = g.length, A.written = t.length, A;
};
function Gt(g, I, t) {
  if (t === void 0) {
    const C = pg.encode(g), n = I(C.length, 18435 + 2 * -9217) >>> 2234 + -1117 * 2;
    return wg().subarray(n, n + C.length).set(C), jA = C.length, n;
  }
  let A = g.length, e = I(A, 356 * 6 + -3907 + 1772) >>> -2560 + -109 * -11 + 1361;
  const o = wg();
  let i = -1380 + -233 * 29 + 1 * 8137;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > 127) break;
    o[e + i] = C;
  }
  if (i !== A) {
    i !== 0 && (g = g.slice(i)), e = t(e, A, A = i + g.length * (134 * -43 + -2142 + 7907), -3298 + 4863 * 1 + -1564) >>> -987 * -8 + -83 * 96 + 24 * 3;
    const C = wg().subarray(e + i, e + A), n = lx(g, C);
    i += n.written, e = t(e, A, i, -3950 + 2759 * 3 + -14 * 309) >>> 114 * -34 + -7806 + 11682;
  }
  return jA = i, e;
}
function Cn(g) {
  return g == null;
}
let ct = null;
function HA() {
  return (ct === null || ct.byteLength === 395 + -1 * 395) && (ct = new Int32Array(F.memory.buffer)), ct;
}
let Dt = Ae.length;
function ux(g) {
  g < 39 * -71 + 117 + 2784 || (Ae[g] = Dt, Dt = g);
}
function nn(g) {
  const I = DI(g);
  return ux(g), I;
}
const yI = {};
yI.ignoreBOM = !0, yI.fatal = !0;
const Bn = typeof TextDecoder < "u" ? new TextDecoder("utf-8", yI) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Bn.decode();
function Tg(g, I) {
  return g = g >>> -2 * -3676 + -7203 + 149 * -1, Bn.decode(wg().subarray(g, g + I));
}
function wI(g) {
  Dt === Ae.length && Ae.push(Ae.length + (-650 * 10 + 5381 * 1 + 1120));
  const I = Dt;
  return Dt = Ae[I], Ae[I] = g, I;
}
let dt = null;
function Qn() {
  return (dt === null || dt.byteLength === -3418 * -1 + 1 * 7117 + -10535) && (dt = new Uint32Array(F.memory.buffer)), dt;
}
function ci(g, I) {
  const t = I(g.length * 4, 4) >>> 0, A = Qn();
  for (let e = -14 * -318 + -1 * 8767 + 4315; e < g.length; e++)
    A[t / (-39 * -151 + -1 * -4729 + 1769 * -6) + e] = wI(g[e]);
  return jA = g.length, t;
}
function di(g, I) {
  g = g >>> 193 + 193 * -1;
  const t = Qn(), A = t.subarray(g / (-9885 + -29 * -341), g / (-6294 + -794 * 3 + 8680) + I), e = [];
  for (let o = 7311 + -7829 * -1 + -10 * 1514; o < A.length; o++)
    e.push(nn(A[o]));
  return e;
}
function fx(g, I) {
  const t = Gt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), A = jA, e = Gt(I, F.__wbindgen_malloc, F.__wbindgen_realloc), o = jA, i = F.is_mobile_supported(t, A, e, o);
  return io.__wrap(i);
}
const pI = {};
pI.register = () => {
}, pI.unregister = () => {
};
const hi = typeof FinalizationRegistry > "u" ? pI : new FinalizationRegistry((g) => F.__wbg_licensevalidationresult_free(g >>> 6003 + 598 * 5 + 17 * -529));
class io {
  static __wrap(I) {
    I = I >>> -2 * -3532 + 533 + 1 * -7597;
    const t = Object.create(io.prototype);
    return t.__wbg_ptr = I, hi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = -9247 + -25 * -284 + 1 * 2147, hi.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, t, A, e, o) {
    var i = Cn(t) ? 0 : Gt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), C = jA;
    const n = ci(A, F.__wbindgen_malloc), B = jA, a = ci(e, F.__wbindgen_malloc), Q = jA, E = Gt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), r = jA, s = F.licensevalidationresult_new(I, i, C, n, B, a, Q, E, r);
    return this.__wbg_ptr = s >>> -22 * -127 + -3 * -1795 + -8179, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== -34 * -120 + -6511 + -221 * -11;
  }
  get features_json() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = HA()[A / (423 * -7 + -24 * -354 + -5531) + (11 * -564 + 5593 + 611)], t = HA()[A / (-9277 + 9281 * 1) + (-1 * -6218 + -6130 + 1 * -87)];
      let e;
      return I !== -1 * 3224 + -2313 + -7 * -791 && (e = Tg(I, t).slice(), F.__wbindgen_free(I, t * (163 * 13 + 1 * -3968 + 1850), 5 * 97 + -9943 + 9459)), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-6 * 298 + -479 * -15 + -5381 * 1);
    }
  }
  get errors() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(e, this.__wbg_ptr);
      var I = HA()[e / (67 * -147 + 6180 + 3673) + (-2 * -4831 + 1539 + -11201)], t = HA()[e / (7417 + -2471 * 3) + (-4092 + -1 * -4093)], A = di(I, t).slice();
      return F.__wbindgen_free(I, t * (-226 * -26 + 8793 + -2933 * 5), 6098 + -2 * 1789 + -2516), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(7123 + -528 * 2 + -6051);
    }
  }
  get warnings() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(e, this.__wbg_ptr);
      var I = HA()[e / (-3695 * 1 + -37 * -79 + -776 * -1) + (-1361 * -7 + -1 * 5791 + -3736)], t = HA()[e / (-218 * -1 + 1 * 9992 + 378 * -27) + (-3619 + -637 * 11 + 10627)], A = di(I, t).slice();
      return F.__wbindgen_free(I, t * (-3 * 1877 + -47 * 26 + 6857), -9862 + -19 * -317 + 7 * 549), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(2324 + 1 * -7621 + 5313);
    }
  }
  get customer() {
    let I, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = HA()[o / (3453 + 47 * -86 + 593) + (-29 * -40 + -1060 + 50 * -2)], e = HA()[o / (-3 * 431 + 2579 + 1282 * -1) + 1];
      return I = A, t = e, Tg(A, e);
    } finally {
      F.__wbindgen_add_to_stack_pointer(9073 + 7109 * 1 + 274 * -59), F.__wbindgen_free(I, t, 1);
    }
  }
}
async function Dx(g, I) {
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
function yx() {
  const g = {};
  return g.wbg = {}, g.wbg.__wbindgen_string_get = function(I, t) {
    const A = DI(t), e = typeof A == "string" ? A : void 0;
    var o = Cn(e) ? 9923 + 3068 * -1 + -6855 : Gt(e, F.__wbindgen_malloc, F.__wbindgen_realloc), i = jA;
    HA()[I / (-3726 + -2269 * 1 + 5999) + (-1 * -2221 + 411 + -2631)] = i, HA()[I / 4 + (-4488 + 41 * 237 + -1743 * 3)] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    nn(I);
  }, g.wbg.__wbindgen_string_new = function(I, t) {
    const A = Tg(I, t);
    return wI(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return wI(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return DI(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, t) {
    throw new Error(Tg(I, t));
  }, g;
}
function wx(g, I) {
  return F = g.exports, an.__wbindgen_wasm_module = I, ct = null, dt = null, st = null, F;
}
async function an(g) {
  if (F !== void 0) return F;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = yx();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: t, module: A } = await Dx(await g, I);
  return wx(t, A);
}
function Bt(g, I, t, A, e) {
  return aA(g - 665, t);
}
function aA(g, I) {
  const t = qg();
  return aA = function(A, e) {
    A = A - 424;
    let o = t[A];
    if (aA.yQvFeh === void 0) {
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
      aA.kOHKDx = a, g = arguments, aA.yQvFeh = !0;
    }
    const C = t[-1589 + 7 * 227], n = A + C, B = g[n];
    return B ? o = B : (aA.ZXsCbw === void 0 && (aA.ZXsCbw = !0), o = aA.kOHKDx(o, e), g[n] = o), o;
  }, aA(g, I);
}
function v0(g, I, t, A, e) {
  return aA(I - 442, e);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return aA(Q - 737, B);
  }
  const A = g();
  function e(n, B, a, Q, E) {
    return aA(a - 575, n);
  }
  function o(n, B, a, Q, E) {
    return aA(n - 324, E);
  }
  function i(n, B, a, Q, E) {
    return aA(Q - 276, E);
  }
  function C(n, B, a, Q, E) {
    return aA(Q - -350, a);
  }
  for (; ; )
    try {
      if (parseInt(o(799, 824, 818, 813, "uC1L")) / 1 * (-parseInt(t(1180, "toLP", 1164, 1171, 1180)) / 2) + parseInt(o(749, 754, 760, 724, "Y)NK")) / 3 + parseInt(i(707, 686, 721, 702, "3@1B")) / 4 * (parseInt(e("tWsc", 1051, 1035, 1052, 1012)) / 5) + parseInt(t(1164, "(p5g", 1180, 1165, 1185)) / 6 * (-parseInt(C(114, 115, "%Pc@", 96, 106)) / 7) + -parseInt(t(1209, "$#hA", 1169, 1185, 1178)) / 8 * (-parseInt(C(94, 133, "ZKB@", 118, 140)) / 9) + -parseInt(t(1193, "15)Y", 1160, 1187, 1160)) / 10 * (-parseInt(e("%Pc@", 1034, 1031, 1037, 1007)) / 11) + -parseInt(o(756, 771, 762, 776, "VG)]")) / 12 === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(qg, 611416 + 25 * 6326);
function ng(g, I, t, A, e) {
  return aA(e - -24, I);
}
function qg() {
  const g = ["b8oUW6ugWQW", "cmoPW5RdGWO", "D8kcwaxcLxL5A0xcPx1p", "WRijvgenw8k+d1pdGumoya", "cHilq8kcWO7cJmoJW73dKMtdQa", "zSotW7JdSryLWOaEW5bsW5BcIq", "C8o0W5xdNCkS", "cM3cMCobtq", "nSofW57cGCoG", "tmkRW6nXbq", "obBcNLtcKW", "yw8JqCo2WRNdPSoaWOtdVG", "m8oseL/dQq", "W5ddPCowWROm", "gSoPwvyq", "EmofW4tcGCo1", "WORcR8kiALS", "wG7dQtvAjSktW4FdQhDK", "W6LrhZuu", "WQOfWR1+FafHW6TztehcJG", "yrDFfCo9WQpdJG", "W5xdT8oem3v+WPrfW7Lt", "WQqJWQ/cV10", "eXXZW54GWP1RWPqv", "mCocW4pcNa", "cSkOW5ldHrm", "WOxcSSkvBfq", "uWBdQdeGmSkkW6pdK0K", "hrvwWOtdHsiBWPjAWOXnysS", "m8ose1W", "i8kcWRpcR20", "WRTmWPdcI8k0sSotumkB", "wH/dN2LB", "ye3dI1lcOMurCmoL", "jHNcI1BcQa", "W5dcNCkRg8kP", "W4T6W5ddNCoCfqCwymo/W6tdRSkC", "bNRdR8kaBG", "s8k3WQdcISkH", "WRldMSkPWPxdL8kLthNcJW", "iCkUuCoIaq", "mhjrdW7cS0iwk8o0uW", "cCoUnty0", "pGJdO3To", "FmkkwqxdRXLyrwFcMW", "W6iwW5/cL8kL", "bt/dR2r+WRnX", "emoGW7tdKCkqWO8KW7BcOcu", "WRPUWPxcNLK", "WQhdSSkthCkA", "vmkYEwTNWOPFWP/dOgxcIeiz", "d0isW63cQ8k9xmoPmSof", "W5hdOCodWQag", "usJdTSksDCoPkrK6pG"];
  return qg = function() {
    return g;
  }, qg();
}
function Y0(g, I, t, A, e) {
  return aA(I - 719, A);
}
var Wi;
class px {
  constructor() {
    p(this, Wi, !1);
  }
  async [(Wi = ng(430, "fTNV", 423, 444, 439) + Y0(1145, 1156, 1163, "Bcya") + Y0(1181, 1170, 1169, "cWn["), Bt(1118, 1123, "Bcya"))](I) {
    function t(C, n, B, a, Q) {
      return v0(C - 307, a - -494, B - 78, a - 37, B);
    }
    function A(C, n, B, a, Q) {
      return Y0(C - 112, C - -420, B - 244, Q);
    }
    function e(C, n, B, a, Q) {
      return Bt(a - -1134, n - 100, Q);
    }
    function o(C, n, B, a, Q) {
      return Bt(n - 23, n - 20, a);
    }
    function i(C, n, B, a, Q) {
      return v0(C - 49, a - -781, B - 339, a - 266, C);
    }
    try {
      const C = I + (e(29, -7, -10, 8, "YM(Z") + "/") + ri;
      await an(C), this[o(1130, 1152, 1132, "]MD7", 1167) + e(-40, -4, -27, -24, "15)Y") + A(737, 715, 758, 761, "Z[zt")] = !0;
    } catch {
      this[t(398, 403, "toLP", 407) + e(29, -23, -18, 2, "Y)NK") + o(1138, 1139, 1145, "cWn[")] = !1, console[t(384, 385, "5%OW", 406)](ri + (i("Bcya", 115, 125, 105) + e(17, 21, 25, -2, "O24F") + e(-64, -24, -46, -40, "KQ#A") + o(1120, 1123, 1125, "t8@J") + t(425, 400, "(p5g", 414) + t(367, 362, "r%tK", 375) + o(1183, 1160, 1137, "VOrO") + o(1120, 1118, 1127, "hs0Q") + e(-16, -18, -33, -26, "%BAV") + i("15)Y", 123, 131, 116) + A(768, 790, 759, 747, "CSV)") + o(1126, 1135, 1151, "VG)]") + A(738, 731, 744, 744, "fTNV") + o(1126, 1130, 1121, "r%tK") + "n."));
    }
  }
  [ng(408, "(p5g", 422, 388, 412) + ng(374, "mrO*", 382, 376, 400) + Bt(1119, 1114, "hs0Q") + "ed"]() {
    function I(e, o, i, C, n) {
      return Bt(n - -48, o - 324, C);
    }
    function t(e, o, i, C, n) {
      return ng(e - 151, C, i - 413, C - 82, o - -180);
    }
    function A(e, o, i, C, n) {
      return v0(e - 382, C - -699, i - 257, C - 56, e);
    }
    return this[A("5%OW", 184, 203, 184) + t(236, 257, 277, "uC1L") + I(1065, 1105, 1112, "tWsc", 1091)];
  }
}
class W0 extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function XA(g, I, t, A, e) {
  return X(t - 294, I);
}
function U0(g, I, t, A, e) {
  return X(t - 374, A);
}
function Qt(g, I, t, A, e) {
  return X(I - -222, e);
}
function X(g, I) {
  var t = Zg();
  return X = function(A, e) {
    A = A - 156;
    var o = t[A];
    if (X.eXrvTz === void 0) {
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
      X.ivPqxf = C, g = arguments, X.eXrvTz = !0;
    }
    var n = t[-11 * 7 + -1137 + 1214], B = A + n, a = g[B];
    return a ? o = a : (X.zBktDV === void 0 && (X.zBktDV = !0), o = X.ivPqxf(o, e), g[B] = o), o;
  }, X(g, I);
}
function li(g, I, t, A, e) {
  return X(A - 537, I);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return X(n - -48, a);
  }
  function A(n, B, a, Q, E) {
    return X(E - -88, Q);
  }
  var e = g();
  function o(n, B, a, Q, E) {
    return X(n - 601, B);
  }
  function i(n, B, a, Q, E) {
    return X(n - -16, Q);
  }
  for (; ; )
    try {
      var C = parseInt(i(176, 155, 163, "NoR2", 190)) / 1 * (parseInt(t(134, 111, "(Za0", 147, 152)) / 2) + parseInt(t(123, 122, "N[LE", 98, 126)) / 3 + parseInt(i(200, 172, 193, "Q)9M", 183)) / 4 * (parseInt(t(136, 159, "0JAr", 144, 129)) / 5) + -parseInt(A(117, 120, 109, "N[LE", 93)) / 6 * (parseInt(o(764, "W!3P", 748, 751, 782)) / 7) + -parseInt(t(153, 183, "Nk!O", 158, 165)) / 8 + parseInt(t(120, 124, "@RE#", 106, 90)) / 9 + -parseInt(i(189, 212, 193, "neW!", 185)) / 10;
      if (C === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zg, 519179 + 66908 * -15 + -5 * -286863);
function H0(g, I, t, A, e) {
  return X(I - 862, g);
}
var qe, Nt;
class ui {
  constructor(I) {
    H(this, qe);
    H(this, Nt);
    function t(C, n, B, a, Q) {
      return X(Q - 581, a);
    }
    function A(C, n, B, a, Q) {
      return X(a - 765, Q);
    }
    function e(C, n, B, a, Q) {
      return X(B - 642, C);
    }
    function o(C, n, B, a, Q) {
      return X(a - -921, C);
    }
    this[A(970, 950, 945, 968, "bjaK") + t(764, 742, 755, "4EJq", 761)] = I;
    function i(C, n, B, a, Q) {
      return X(Q - -871, B);
    }
    try {
      Y(this, qe, I[t(811, 782, 754, "6))@", 781) + t(711, 729, 730, "NoR2", 742) + o("XiK8", -785, -748, -757, -778)] && JSON[i(-647, -649, "J2!c", -650, -678)](I[e("Kex1", 823, 820, 826, 832) + A(897, 930, 950, 927, "(7W4") + A(927, 929, 926, 929, "XiK8")])), Y(this, Nt, I[A(945, 990, 947, 960, "TbJ2") + A(956, 980, 973, 951, "pB6o")]);
    } catch (C) {
      console[e("7q5D", 780, 800)](C);
    }
  }
  get [XA(457, "W!3P", 451) + "id"]() {
    function I(A, e, o, i, C) {
      return XA(A - 223, e, o - -630);
    }
    function t(A, e, o, i, C) {
      return XA(A - 244, e, i - -852);
    }
    return this[I(-163, "@RE#", -137) + I(-115, "bjaK", -127)][t(-354, "0JI0", -371, -379) + t(-358, "7q5D", -362, -345)];
  }
  get [XA(490, "T&wK", 490) + "s"]() {
    function I(A, e, o, i, C) {
      return Qt(A - 120, e - -304, o - 298, i - 129, A);
    }
    function t(A, e, o, i, C) {
      return Qt(A - 118, i - 178, o - 336, i - 55, A);
    }
    return this[t("^sFx", 136, 169, 147) + t("v0]N", 121, 137, 128)][I("3u%B", -350, -330, -333) + "s"];
  }
  get [Qt(-67, -56, -29, -52, "3u%B") + H0("7q5D", 1077)]() {
    function I(e, o, i, C, n) {
      return li(e - 365, i, i - 429, e - -1285);
    }
    function t(e, o, i, C, n) {
      return H0(e, i - -1145);
    }
    function A(e, o, i, C, n) {
      return XA(e - 61, i, o - 669);
    }
    return this[A(1182, 1165, "BcMR") + A(1177, 1160, "0JI0")][I(-578, -601, "J70P") + t("Cgmh", -129, -116)];
  }
  get [Qt(-33, -62, -86, -73, "3u%B") + "b"]() {
    return m(this, qe);
  }
  get [U0(582, 571, 572, "c2Ai") + XA(453, "3MM$", 484)]() {
    return m(this, Nt);
  }
  get [H0("6*Rb", 1051) + Qt(-78, -63, -72, -55, "G6X8") + U0(614, 568, 584, "[Vvs") + XA(507, "v0]N", 502)]() {
    var o, i;
    function I(C, n, B, a, Q) {
      return XA(C - 302, B, a - -609);
    }
    function t(C, n, B, a, Q) {
      return li(C - 328, a, B - 435, Q - 158);
    }
    function A(C, n, B, a, Q) {
      return U0(C - 323, n - 419, B - 619, n);
    }
    function e(C, n, B, a, Q) {
      return XA(C - 211, Q, n - 272);
    }
    return !!((i = (o = m(this, qe)) == null ? void 0 : o[e(810, 780, 787, 752, "(7W4") + t(822, 873, 835, "$xZg", 851)]) != null && i[t(900, 886, 858, "ad0e", 880) + I(-70, -119, "v0]N", -98) + A(1193, "pB6o", 1187) + A(1209, "0JI0", 1199) + e(799, 773, 746, 795, "BcMR") + e(768, 743, 765, 761, "Cgmh") + t(843, 877, 860, "Kex1", 868) + "d"]);
  }
}
qe = new WeakMap(), Nt = new WeakMap();
function Zg() {
  var g = ["W48+ua", "W4yXWQNcGvffDJ7cUfP7WOyPdW", "WOVcVcNdKmkSuqVdJG12tHlcRG", "j8k2w8o9oW", "sSkwCG", "W5NdUhBcLmoR", "WOmDF8kwkdJcLG", "bCodW6FdPmoj", "W4m1uqdcSa", "W5mRW6hdMM0", "W6DjpSojbG", "DXFdKt5X", "u8o1WOJcHmkX", "sJT1rCoX", "W4JdG8oAari", "W7KAvwldGtqGhmooWPH4WPVcKG", "WQbehSkfbW", "WPr0W7BdGXe", "Ab8HWP7cUCkIyq", "w8kolCoQztBdVhbWr8oEtsFdTq", "AX/dIJnl", "WQzghSkeaa", "gMtdItO", "WP9NW63dKWO", "W5HzeSoGzG", "hCopW7ZdVmkiiCo6CK7dUr0", "eSkYW4FdIhBcSCk5fCkLv8oyW5PO", "WPtdJSks", "k3FcQ8oGna", "WPBdGmkf", "W7NcLCkVlmoSdrdcJSolW5HJ", "ewxdIqPP", "amoJoq", "WRuhpCoamq", "WPhdICkqW4a", "mWmnWQtcVq", "W78jW6NdQmoo", "W4yuECknlq", "p3FcUColkW", "W6Srm8oYoSk6mG", "W5FcISkQ", "W5KXWRPehmo4ggLqW6tdUmk2W6i", "W6WhW6/dKCoc", "imofW5a", "gh4Qb8kXWQOprSoBWRySc8kStW", "W5GXWRK2s8kyBwn9", "WOWDnJKv", "smo2WQjHW59DoSkPW6rwtrub", "egNdMd1Z", "WR9+fmkTWR8", "W7iprSogqXBcSqldGJ8voq", "W5W7WRXjf8oXfJHyW6VdOSkhW65/", "W74uW6/dKmoz", "j8omW4rbWOW", "WQP6f8k1WQ8", "DGxdUIT4", "hbZdImodWRG", "s8o5WQbJW5jypmkvW4vCFH80", "WOzzlmoCWP3dSSognZpdOMe/", "xSorAmkwowBcJq", "FdhcKSkeW6/dGJjnWPa", "WRBcUSkZWOZcNa"];
  return Zg = function() {
    return g;
  }, Zg();
}
function jg() {
  const g = ["WP49W6RdSmkw", "bKtcVY0N", "vvtdNcCc", "cNVcNq", "W7TqWODjW4bgkCom", "DSkgEeT4", "rmkCWOhdMCop", "FSkDix4k", "WQDfse7dGa", "WRxdLLVdPSk3", "WRrBW74RDG", "erVdJCk1W58", "WOxdILbmWQ4", "ESkcAKLL", "WPhdHmksW6zM", "W656WQJcJHy", "W4RdPSouESkJ", "W7/cSrhdLSkP", "CuVdIW", "W5Luja", "W6nMWOpcVrO", "BSkgAMxcSW", "tSonlq", "WP/cTmkuW5/cQa", "WO8UWPddUCkj", "WQagW5BdRSka", "CCkrCvL+", "BSk+t8k3W5S", "W73cKuxcNSoh", "W7usfqZcLahdLSo7WRP8WOddRq", "W69IWRtcUrO", "WPyNW6ldGSkq", "WQCeWQa", "WOBdICksW5XN", "DCkgAML4", "qCoqjCo4W7G", "WOxcUSks", "amoPrmkTFW", "rCkvmxze", "zKFdGIeu", "WRqFpSkmqq", "W6BcVt/cHdBcUCovW47cLG", "WP7cU8kgW5m", "W7lcRaRcHCkZ", "WRNcHu9rWQm", "WQStW77cUmkg", "W6ZcHCkV", "W5OTWOHWjG", "W41fWOFdGti", "DmkgAKLL", "WPpcUSkuW7NcRq", "zCo+lCkyAa", "W7ddJmoyWRVdPG", "WR9uttFcRq", "cgj6y2q", "W5nkWPZdMW", "W5ldU8oBESkP", "WR8vi8klsG", "WRWGWPBdKSkn", "DepdIcKf", "W6ZcHCkOWOVdHG", "WQjNiCoPpa/cO8opmmonWQ0gWQW", "W59wWOFdGcK", "FSkxuKnU", "W4CMW4BcMNddJCoQW57cPCo1jG", "W789BCkWzq", "qqxdIwtcOG", "WOjjFHtcKW", "a8oQWQRdLeG", "W5tdJSoGWO3dOG", "sCk/cCkC", "WPr0WPxdLZu", "WRy6WPJdOmkh", "W7tdRMlcKY8", "iIldS8o/W5O", "WRqip8kmvW", "WP3dL0XoWQK", "e3NcTCkhba", "DSkrjhOr", "bhhcGCkwaq", "C1pdNtWF", "WQ3dMgldPSkU", "W5SGgZXj", "vMtcTmkOWPLryN9bWQfAW5xdRW", "WPaQWP57eq", "WPBdKhpdRCkP", "D8kgmhqw", "W5XifmkcCG", "WOzzEstcKW", "W5RcNLjXjG", "BaxcH1tcNW", "WQyXWPJdIIm", "CmkgEK5O", "bCoIWQRdNKe", "WP7cU8kjW4G", "W6NcJ8kUWOddMW", "W7NdL8ojWRhdUG", "WQ8UWPddUq", "rmonomooW6O", "d8oMWRRdMuW", "WOpdH8kq", "WRxdLhNdTW", "CSkDF3BcVG", "W45Yhd1j", "W7pdQrBdLmkH", "W6vpySkDu1FdMtdcNG", "mmoGeCoRW7K", "cxNcNa", "WPWaWRBcT8kS", "W4FdM8ozWQhdUa", "WR8Om8knqW", "gSoIWQZdK0a", "F8oYEa", "dSoXWRhdJLO", "WQecWQDeW5S", "juRdTGC", "WRiui8kADa", "WQ3dMhVdPSkK", "W5r5eJb1", "WPTYWPhdJtm", "W4vAmCkqza", "cJxdSW", "WQtdG3pdRmkY", "CSoPmmk6Dq", "W7xcR8kTWPtdHq", "WRhdG2JdRCk0", "n8oTrmkb", "dwZdTbmA", "cYtdJCo5W4S", "w8owtmooW48", "FCoTmmkvDa", "W5TYbZXp", "W74BWQ1eaW", "j8ocCcXqtmkxgJilvCoH", "FmkBnJSn", "C1tdGtSd", "WQFdICknW5GJ", "WR95W4aqxW", "fMjR", "W4FcVSomgCoV", "D8kvAxRcOa", "W4HaWOtdPs4", "W7JcJfJcQmov", "WQfJxNdcSa", "c8oSWQVdK00", "WPOPW53cNCkE", "W5xcMLjwiq", "s8onja", "tmorl8kLW6C", "W7nOkrS", "W5VdVmolESoN", "CSowqCo3W6C", "s8khWO3dJ8os", "WPn8WPe", "thrv", "WQ3dKbldNCkmWOBcOSk3W6KrW54SWOW", "o8o3W77dNCo5", "W6mXqSoDW7zoWRDZDSoDf38", "WR3dU1lcKca", "WPe8W7xdI8ky", "W7ldU8oBESkP", "W6hdL27dTSkU", "WOfjBN4", "WRT3W5m2rq", "W5bjmCkmCW", "W4GIWRbMla", "kZpdKCkYW4i", "nSoRdmo9WRW", "c8oSWQZdUeG", "WPZdGCkDW5bT", "WQdcTmktW5hdOa", "W47cPCoDe8oZ", "WRiiiSkqvG", "W5/dPSoqBa", "WOxcSmktW6pcQG", "WRWjWQhdSSk0", "W717lWBdIG", "W7G6Fmo3Aa", "hCoXWRFdK10", "t3zu", "s8obl8oLW7G", "fCocuCkeDq", "W5RcLmkmWONdUq", "dwX1A2O", "ECoLia", "WQmeW77cMSkC", "WRFdRwpcLsq", "aN98zW", "i8ogCsPvs8kwfZmIy8og", "W7CJWOVdTmkf", "WPzyzt3cMq", "W5xcMLjEjW", "W4XKbbLi", "bmo5q8kDFW", "WRKSWPy", "imk6DSobkbHIW4zVqaldMq", "WPhcSmkbW4JcTq", "W4OGWR16mq", "WR5MemkOWRy", "WQigW6/cL8kh", "W7ldJXNdMCkz", "WR4unSkq", "cvVdLtaE", "FCkrA2dcVW", "W7K1BCk6Ba", "WRKrWRPjW4C", "WOddICkmW4zM", "WOxdHfDBWQG", "WRT6imkmWRC", "imkKoCkwWPr/hKhcKCkZWQTkW4e", "WRSTW6NdU0NdRCoiWRiJCMNcLa", "eL3cICkyhG", "W7nSmG", "W7HxW6yFWOifzmo8cmkltrRcIa", "hSoSWRa", "W709y8k8ya", "WOS/W43cPCkA", "l8ofnYRdQmozW5ZcIbRdMMj+lq", "m8kSxmkaCW", "dZhdTCoZW4a", "W7DMlG", "WRxdMSkmW5PX", "tSk+g8otW70", "W5rdWOy", "fHVdI8kZ", "BmkrDKZcSa", "W6pcMCk4WPRdHW", "W67dKHhdK8kH", "WQHjrvJdIW", "W7lcJeVcICo4", "rCohpSohW6i", "W4jAmCkn", "bxVcI8kgfG", "xSkDix4k", "FeNdJsKe", "W7xcSrhcS8kT", "DmoXa8kAW7C", "WOTlEq", "W5bvmmkgiq", "iLldUaOG", "WPCXWPRdJdq", "WRPOa8koWQW", "WQGcW7/cKmkk", "WQHuALtdHG", "umkSexOs", "WPnLWPZdKa", "W7pdKCoFWRRdSa", "WR49WOFdSG", "oCoMW6u", "WRJdOw7cGY8", "W73cTWBcK8kU", "W710WQ7cPri", "bMRcH8kr", "WOvWWOBdJsK", "tCkBWPhdMCoX", "FK/dMIer", "DSkrjJu", "WObEEd/cJG", "b392Cwm", "W6BcICk/WO3dGa", "W6a6i8kdWRClWQXT", "bmoTWRJdKG", "ymk5umk3W6NcJ8oOWO7cG8kveq"];
  return jg = function() {
    return g;
  }, jg();
}
function DA(g, I, t, A, e) {
  return xA(t - -899, e);
}
(function(g, I) {
  function t(i, C, n, B, a) {
    return xA(a - 47, i);
  }
  const A = g();
  function e(i, C, n, B, a) {
    return xA(B - 256, C);
  }
  function o(i, C, n, B, a) {
    return xA(B - 407, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(590, "JBK%", 731, 673, 691)) / 1 * (-parseInt(o(904, "QTJe", 691, 819, 852)) / 2) + -parseInt(e(461, "7#Tz", 467, 563, 556)) / 3 + -parseInt(o(842, "vjqB", 650, 766, 643)) / 4 + -parseInt(t("M*rf", 289, 208, 380, 330)) / 5 + parseInt(o(887, "JBK%", 732, 770, 844)) / 6 + -parseInt(o(748, "#B$$", 642, 712, 586)) / 7 + parseInt(o(728, "Aed]", 858, 849, 818)) / 8 * (parseInt(t("sB[F", 342, 417, 343, 302)) / 9) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jg, -590194 + -20 * 317 + 77 * 12854);
function JA(g, I, t, A, e) {
  return xA(g - -513, e);
}
function sA(g, I, t, A, e) {
  return xA(t - 884, A);
}
function vA(g, I, t, A, e) {
  return xA(g - 621, t);
}
function xA(g, I) {
  const t = jg();
  return xA = function(A, e) {
    A = A - (13 * 581 + 4349 * -1 + -2996);
    let o = t[A];
    if (xA.WPTrzP === void 0) {
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
      xA.CCWDRx = a, g = arguments, xA.WPTrzP = !0;
    }
    const C = t[2061 + 6807 * -1 + -4746 * -1], n = A + C, B = g[n];
    return B ? o = B : (xA.daawGc === void 0 && (xA.daawGc = !0), o = xA.CCWDRx(o, e), g[n] = o), o;
  }, xA(g, I);
}
function oA(g, I, t, A, e) {
  return xA(e - -937, A);
}
var Ui, Hi, Ki;
class mx {
  constructor(I) {
    p(this, Ki);
    p(this, Hi, [DA(-646, -676, -665, -689, "8ckY") + sA(1169, 1138, 1211, "%(!^") + "ic", vA(960, 988, "ob(L") + vA(919, 935, "Xs&P") + "ic"]);
    p(this, Ui);
    function t(A, e, o, i, C) {
      return xA(i - -320, C);
    }
    this[t(89, 20, 64, 65, "n*9f") + t(-184, 41, -156, -78, "ZRa&") + "d"] = I;
  }
  async [(Ki = oA(-504, -512, -450, "T#H!", -538) + "se", Hi = sA(1095, 1110, 1112, "M*rf") + oA(-540, -580, -727, "@FKY", -659) + oA(-590, -460, -648, "4IPV", -533) + oA(-515, -605, -649, "#tBl", -542), Ui = sA(1110, 1332, 1210, "enTM") + sA(1237, 1389, 1310, "ZRa&"), oA(-808, -786, -820, "bBKW", -693))](I) {
    const t = await this[i(-180, -81, -196, -267, "Xs&P") + C("Aed]", 1127, 1141, 1204) + C("w6XE", 982, 1070, 1104)](I);
    await Promise[i(-133, -56, -174, -77, "LfH^") + e(1205, 1128, 1227, 1191, "ie4)")]([this[o(634, 645, 718, 637, "jT2m") + A("c%Kw", 749, 812, 793, 760) + "d"][A("^wtl", 812, 838, 772, 846)](I), this[i(-210, -209, -274, -226, "uUNB") + i(-315, -422, -296, -257, "ccKX") + "e"](t)]);
    function A(n, B, a, Q, E) {
      return JA(E - 891, B - 297, a - 31, Q - 137, n);
    }
    function e(n, B, a, Q, E) {
      return sA(n - 66, B - 279, Q - -122, E);
    }
    function o(n, B, a, Q, E) {
      return oA(n - 172, B - 0, a - 120, E, n - 1143);
    }
    function i(n, B, a, Q, E) {
      return vA(n - -1181, B - 335, E);
    }
    function C(n, B, a, Q, E) {
      return DA(n - 176, B - 155, B - 1605, Q - 165, n);
    }
    this[i(-114, -64, -84, -131, "LfH^") + e(1157, 1096, 1161, 1220, "ukgL") + A("sB[F", 783, 941, 945, 831)]();
  }
  async [oA(-581, -452, -472, "ccKX", -528) + vA(931, 896, "ie4)") + "se"](I) {
    function t(C, n, B, a, Q) {
      return oA(C - 227, n - 161, B - 147, a, B - 67);
    }
    function A(C, n, B, a, Q) {
      return vA(C - -1265, n - 88, a);
    }
    function e(C, n, B, a, Q) {
      return oA(C - 151, n - 470, B - 86, n, C - 1052);
    }
    function o(C, n, B, a, Q) {
      return sA(C - 183, n - 343, B - -729, a);
    }
    function i(C, n, B, a, Q) {
      return sA(C - 397, n - 308, n - -1574, C);
    }
    try {
      if (A(-255, -193, -138, "lz$P", -343) === e(383, "4V2L", 326, 492, 259)) {
        const C = await fetch(I);
        if (!C.ok)
          if (e(342, "c%Kw", 290, 351, 455) !== e(537, "7@ZL", 587, 555, 608)) this[i("ie4)", -221, -208, -287, -95) + "se"] = void (-7190 + -1 * 5857 + 13047), _0x3b5f37[e(327, "^wtl", 329, 249, 233)](_0x5de58f);
          else throw new Error(i("ob(L", -432, -339, -408, -372) + A(-309, -271, -354, "ukgL", -311) + i("#tBl", -300, -252, -227, -407) + t(-552, -542, -559, "7@ZL", -596) + "d.");
        this[i("LfH^", -371, -432, -421, -497) + "se"] = await C[t(-494, -699, -619, "7@ZL", -739)]();
      } else {
        _0x2c6946[i("DYje", -470, -406, -482, -571)](A(-204, -274, -287, "DYje", -230) + o(483, 635, 523, "w6XE", 423) + t(-745, -511, -614, "QTJe", -552) + A(-418, -340, -327, "X41C", -303) + e(427, "Pcc9", 371, 427, 492)), this[A(-434, -546, -388, "ccKX", -310) + "se"] = void 0;
        return;
      }
    } catch (C) {
      i("c%Kw", -329) !== A(-370, -332, -323, "ccKX") ? _0x2d221a[o(558, 538, 562, "Pcc9")](_0x3b107e) : (this[i("M*rf", -270) + "se"] = void (-62 * 1 + -6494 + 6556), console[t(-482, -386, -405, "OTxY")](C));
    }
  }
  async [oA(-559, -636, -442, "#B$$", -558) + JA(-244, -318, -157, -363, "#tBl") + "e"](I) {
    this[A(540, "m^u)", 541, 538) + A(305, "JBK%", 315, 394)] = void (-12503 + -1 * -12503);
    function t(C, n, B, a, Q) {
      return DA(C - 444, n - 378, B - -7, a - 126, a);
    }
    if (!I) {
      if (A(412, "8ckY", 369, 445) === t(-574, -435, -463, "jT2m")) return this[t(-598, -566, -467, "ZRa&") + e(-539, -478, -387, -471, "7#Tz")];
      console[i(1273, 1377, 1259, 1179, "bBKW")](e(-606, -629, -725, -529, "vWBS") + e(-595, -628, -573, -541, "#tBl") + e(-398, -481, -417, -542, "^]0)") + e(-497, -435, -558, -561, "xz&d") + o(848, 905, "M*rf", 970)), this[t(-622, -640, -675, "7@ZL") + "se"] = void (373 * -7 + 1413 * -3 + 6850);
      return;
    }
    function A(C, n, B, a, Q) {
      return sA(C - 45, n - 458, a - -754, n);
    }
    function e(C, n, B, a, Q) {
      return oA(C - 324, n - 232, B - 391, Q, n - 68);
    }
    function o(C, n, B, a, Q) {
      return JA(a - 1077, n - 99, B - 394, a - 321, B);
    }
    function i(C, n, B, a, Q) {
      return JA(B - 1317, n - 464, B - 157, a - 304, Q);
    }
    await this[o(1104, 936, "ZRa&", 1026) + t(-412, -520, -523, "M*rf") + "se"](I);
  }
  async [JA(-172, -248, -227, -260, "wQjz") + vA(957, 1079, "T#H!") + DA(-640, -605, -525, -535, "TMuo")](I) {
    function t(n, B, a, Q, E) {
      return sA(n - 3, B - 134, B - -1286, n);
    }
    const A = await fetch("" + I + this[e(-400, -477, -382, -471, "DEpp") + e(-396, -426, -508, -398, "ZRa&") + t("8ckY", 58) + i(1176, 1125, "ie4)")][0]);
    function e(n, B, a, Q, E) {
      return sA(n - 405, B - 428, n - -1493, E);
    }
    function o(n, B, a, Q, E) {
      return DA(n - 4, B - 271, E - 1486, Q - 250, n);
    }
    function i(n, B, a, Q, E) {
      return sA(n - 438, B - 99, B - -82, a);
    }
    const C = A.ok ? -5045 * -1 + -2800 + 1 * -2245 : 6086 + -1 * -9284 + -15369;
    return "" + I + this[i(1187, 1220, "ZRa&") + o("Aed]", 977, 1097, 872, 980) + e(-343, -407, -327, -307, "sB[F") + e(-207, -258, -96, -164, "c%Kw")][C];
  }
  [DA(-484, -414, -522, -444, "uUNB") + JA(-289, -418, -342, -376, "@FKY") + "s"](I) {
    function t(A, e, o, i, C) {
      return oA(A - 424, e - 450, o - 25, e, C - 1864);
    }
    I[t(1119, "Xs&P", 1248, 1117, 1175) + "ch"]((A) => console[t(1165, "ob(L", 1105, 1299, 1174)](A));
  }
  [DA(-658, -612, -624, -599, "7@ZL") + sA(1243, 1326, 1308, "TMuo") + DA(-771, -750, -642, -712, "c%Kw")](I) {
    function t(A, e, o, i, C) {
      return DA(A - 475, e - 451, e - 1671, i - 119, C);
    }
    I[t(1031, 1090, 1009, 1164, "nt($") + "ch"]((A) => console[t(1295, 1183, 1197, 1066, "nt($")](A));
  }
  [JA(-63, 7, 25, -66, "w6XE") + DA(-750, -692, -634, -562, "lz$P")]() {
    function I(A, e, o, i, C) {
      return DA(A - 289, e - 209, A - 1538, i - 413, i);
    }
    function t(A, e, o, i, C) {
      return oA(A - 386, e - 9, o - 356, e, i - 1706);
    }
    return window[I(1023, 975, 959, "DEpp") + t(1117, "enTM", 1062, 1139)][t(1098, "X41C", 1099, 1194) + t(1277, "DEpp", 1211, 1200)];
  }
  [oA(-498, -605, -551, "DEpp", -485) + DA(-479, -480, -590, -549, "Osk1") + sA(1085, 1235, 1201, "QTJe")]() {
    function I(i, C, n, B, a) {
      return vA(a - -1265, C - 336, i);
    }
    function t(i, C, n, B, a) {
      return oA(i - 63, C - 439, n - 347, C, a - 1107);
    }
    function A(i, C, n, B, a) {
      return DA(i - 261, C - 329, n - 362, B - 112, C);
    }
    function e(i, C, n, B, a) {
      return vA(a - -24, C - 145, n);
    }
    function o(i, C, n, B, a) {
      return sA(i - 337, C - 75, n - -1340, a);
    }
    try {
      if (t(545, "Osk1", 639, 607, 608) === t(336, "ukgL", 538, 566, 465)) {
        if (!this[t(698, "n*9f", 538, 523, 570) + "se"])
          throw o(-219, -85, -177, -66, "vjqB") === e(987, 877, "sB[F", 838, 857) ? new _0x50e44c(t(547, "LfH^", 483, 377, 456) + A(-205, "DYje", -165, -77, -257) + A(-334, "%(!^", -322, -330, -196) + o(-329, -171, -204, -174, "xz&d") + ".") : new W0(I("lz$P", -215, -307, -174, -230) + I("DYje", -280, -193, -303, -258) + I("^]0)", -264, -307, -264, -256) + t(650, "OTxY", 641, 652, 566) + ".");
        if (!this[t(553, "bBKW", 597, 633, 633) + e(781, 777, "nt($", 972, 846) + "d"][I("7#Tz", -194, -410, -340, -286) + I("uUNB", -325, -520, -474, -390) + o(-99, -26, -123, -130, "m^u)") + "ed"]()) {
          if (A(-169, "S4%(", -114, -212, -172) === I("vjqB", -332, -468, -306, -343)) throw new W0(o(-73, -112, -136, -147, "bBKW") + e(853, 784, "M*rf", 980, 881) + e(1023, 965, "DEpp", 986, 1002) + t(555, "7@ZL", 526, 503, 437) + ".");
          return _0x314d72[e(1066, 942, "m^u)", 1169, 1064) + I("Xs&P", -218, -383, -274, -347)][I("sB[F", -165, -215, -258, -174) + e(957, 817, "#tBl", 791, 900)];
        }
        this[t(554, "DEpp", 512, 323, 455) + t(600, "@FKY", 636, 594, 539)] = new ui(fx(this[A(-124, "^5Ch", -216, -125, -333) + "se"], this[e(683, 878, "Pcc9", 765, 814) + I("enTM", -255, -357, -319, -345)]())), this[I("RMwU", -298, -191, -131, -180) + I("LfH^", -296, -393, -307, -273) + "s"](this[A(-338, "oBLz", -231, -212, -198) + t(513, "RMwU", 372, 357, 450)][e(985, 831, "^5Ch", 814, 886) + "s"]), this[t(433, "4V2L", 415, 525, 423) + e(960, 1102, "ob(L", 1105, 1034) + e(945, 751, "vjqB", 802, 859)](this[t(507, "sB[F", 318, 461, 395) + o(-149, 9, -99, 18, "X41C")][e(956, 1075, "#tBl", 1e3, 1e3) + I("Pcc9", -205, -159, -261, -257)]);
      } else _0x189b9a[e(1046, 1152, "Osk1", 1172, 1041) + "ch"]((i) => _0x4d7df2[I("sB[F", -201, -224, -298, -293)](i));
    } catch (i) {
      if (o(-108, 86, -43, 51, "Osk1") === A(-213, "ob(L", -315, -424)) {
        if (i instanceof W0) e(909, 869, "ob(L", 973, 922) === I("8ckY", -187, -277, -243, -297) ? _0x4aab40[o(-93, -123, -143, -88, "S4%(") + o(52, 22, -7, 28, "bBKW")](_0x59827f) : i[o(-91, -124, -24, 18, "^]0)")]();
        else if (i instanceof Error)
          if (I("Pcc9", -121, -122, -128, -178) === A(-152, "ccKX", -205, -124)) console[I("4V2L", -266, -468, -459, -363)](i);
          else {
            if (!this[I("Aed]", -180, -175, -169, -266) + "se"]) throw new _0x3e7001(A(-82, "DYje", -97, -220) + o(-106, -40, 1, 42, "X41C") + I("ie4)", -344, -400, -364, -344) + e(874, 973, "nt($", 862, 891) + ".");
            if (!this[e(846, 934, "ob(L", 685, 805) + o(35, -98, -64, -181, "ukgL") + "d"][A(-175, "^]0)", -300, -277) + e(791, 916, "TMuo", 817, 913) + o(-35, -271, -166, -263, "xz&d") + "ed"]()) throw new _0x51140f(e(1081, 1095, "M*rf", 1032, 1048) + I("n*9f", -268, -165, -288, -214) + A(-279, "nt($", -319, -417) + o(-105, 11, -91, -7, "%(!^") + ".");
            this[t(632, "n*9f", 683, 577, 626) + o(-310, -225, -213, -237, "nt($")] = new _0x306cb6(_0x24b8cf(this[t(634, "4IPV", 502, 603, 589) + "se"], this[t(563, "wQjz", 597, 384, 466) + I("lz$P", -419, -508, -503, -379)]())), this[e(852, 808, "nt($", 1041, 925) + e(949, 1074, "DEpp", 1024, 1012) + "s"](this[A(-254, "oBLz", -231, -154) + t(479, "wQjz", 456, 504, 409)][A(-244, "7@ZL", -265, -157) + "s"]), this[o(-179, -67, -101, -112, "JBK%") + I("7@ZL", -394, -442, -392, -409) + I("c%Kw", -382, -400, -259, -387)](this[A(-355, "nt($", -274, -195) + e(896, 927, "ukgL", 988, 946)][o(-148, -22, -55, -86, "jT2m") + A(-318, "EjgI", -208, -239)]);
          }
        const C = {};
        C[t(388, "T#H!", 406, 462, 478) + A(-132, "RMwU", -203, -100)] = !1, C[t(523, "^]0)", 448, 435, 484) + "s"] = [], C[e(956, 1158, "^wtl", 1024, 1058) + t(480, "^wtl", 474, 561, 543)] = [], C[t(429, "#tBl", 331, 367, 391) + e(972, 806, "bBKW", 854, 921) + t(405, "nt($", 660, 635, 534)] = void (-5854 * -1 + -930 + -1231 * 4), C[o(14, 62, -59, 25, "ob(L")] = function() {
        }, C[e(999, 1007, "w6XE", 858, 940) + A(-114, "EjgI", -233, -244)] = "", this[t(364, "4IPV", 471, 556, 472) + A(-321, "S4%(", -250, -133)] = new ui(C);
      } else return;
    }
  }
  [sA(1084, 1281, 1157, "RMwU") + oA(-574, -572, -660, "xz&d", -584) + vA(880, 957, "OTxY") + "t"]() {
    function I(t, A, e, o, i) {
      return oA(t - 363, A - 215, e - 423, i, t - 1196);
    }
    return this[I(700, 763, 593, 705, "#B$$") + I(695, 647, 819, 784, "bBKW")];
  }
  [JA(-66, -130, -116, -129, "ZRa&") + vA(961, 949, "Pcc9") + JA(-182, -94, -149, -232, "w6XE")]() {
    var i, C;
    if (!this[A(-738, -818, -750, -680, "OTxY") + "se"]) {
      if (I(1200, "^wtl", 1119) === o("4V2L", 676, 649, 604)) return;
      {
        const n = _0x474dfc[o("LfH^", 537, 663, 633)](this[o("T#H!", 772, 706, 651) + "se"]);
        return (i = n == null ? void 0 : n[e(381, 385, "vWBS", 263) + t(1208, 1374, 1278, 1322, "oBLz")]) == null ? void 0 : i[e(451, 398, "ccKX", 423) + t(1256, 1242, 1153, 1195, "@FKY")];
      }
    }
    function I(n, B, a, Q, E) {
      return oA(n - 189, B - 256, a - 196, B, a - 1765);
    }
    function t(n, B, a, Q, E) {
      return JA(Q - 1437, B - 458, a - 261, Q - 21, E);
    }
    function A(n, B, a, Q, E) {
      return vA(a - -1617, B - 309, E);
    }
    function e(n, B, a, Q, E) {
      return JA(Q - 560, B - 23, a - 109, Q - 237, a);
    }
    function o(n, B, a, Q, E) {
      return DA(n - 417, B - 223, a - 1206, Q - 112, n);
    }
    try {
      if (t(1215, 1414, 1315, 1318, "M*rf") === o("lz$P", 540, 584, 571, 547)) {
        _0x1fb7a4 instanceof _0xd74f1e ? _0x41955d[I(1324, "Xs&P", 1263, 1316, 1328)]() : _0x5db57b instanceof _0x2dd888 && _0x2b5888[e(304, 303, "sB[F", 369, 418)](_0x3eab27);
        const n = {};
        n[A(-473, -638, -563, -587, "jT2m") + A(-564, -493, -537, -549, "ccKX")] = !1, n[A(-709, -809, -760, -731, "M*rf") + "s"] = [], n[o("nt($", 692, 568, 440, 694) + t(1265, 1493, 1427, 1369, "JBK%")] = [], n[e(483, 486, "bBKW", 393, 414) + o("xz&d", 790, 682, 811, 720) + e(185, 222, "LfH^", 297, 246)] = void 0, n[t(1382, 1375, 1350, 1261, "m^u)")] = function() {
        }, n[A(-889, -889, -758, -851, "Pcc9") + A(-674, -522, -580, -609, "c%Kw")] = "", this[e(537, 544, "Xs&P", 495, 372) + A(-635, -527, -642, -605, "%(!^")] = new _0x4d9fbf(n);
      } else {
        const n = JSON[o("^]0)", 613, 577, 477, 566)](this[o("ccKX", 575, 517, 583, 545) + "se"]);
        return (C = n == null ? void 0 : n[A(-744, -760, -767, -646, "c%Kw") + A(-544, -611, -652, -553, "ob(L")]) == null ? void 0 : C[I(1160, "DEpp", 1058, 1043, 1141) + o("enTM", 691, 669, 611, 577)];
      }
    } catch (n) {
      if (I(1165, "ukgL", 1194) !== A(-754, -692, -714, -782, "8ckY")) throw new _0x5391e9(o("Pcc9", 649, 600, 611) + o("Xs&P", 609, 637, 652) + I(1021, "4V2L", 1060) + e(261, 278, "T#H!", 270) + "d.");
      n instanceof Error && (t(1164, 1160, 1113, 1143, "OTxY") !== t(1380, 1405, 1340, 1276, "lz$P") ? _0x48bf12[t(1215, 1084, 1295, 1216, "#B$$") + "ch"]((B) => _0x4866f3[t(1388, 1186, 1382, 1305, "^]0)")](B)) : U[t(1342, 1182, 1350, 1272, "7#Tz") + A(-710, -821, -708, -585, "m^u)")](n));
      return;
    }
  }
}
const C0 = class C0 extends mx {
  static getInstance() {
    if (!this._instance) {
      const I = new px();
      this._instance = new C0(I);
    }
    return this._instance;
  }
};
p(C0, "_instance");
let mI = C0;
const Co = (g, I) => {
  const t = {};
  t.detail = I, document.dispatchEvent(new CustomEvent(g, t));
}, n0 = class n0 {
  constructor() {
    p(this, "lastDetails", {});
    p(this, "delayedTime", 0);
  }
  static getInstance() {
    return !this._instance && (this._instance = new n0()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 4098 + 1 * -4098;
  }
  isDetailChanged(I, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(I, t) {
    this.isDetailChanged(I, t) && Co(I, t);
  }
  dispatchDelayedCustomEventOnChange(I, t, A) {
    const e = performance.now();
    e - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, t), this.delayedTime = e);
  }
};
p(n0, "_instance");
let kt = n0;
const Vt = kt.getInstance(), xn = (g, I, t = ya) => {
  const A = {};
  A.instructionCode = I;
  const e = A;
  Vt.dispatchDelayedCustomEventOnChange(g, e, t);
}, Gx = (g, I) => {
  Vt.dispatchCustomEventOnChange(g, I);
}, kx = (g, I) => {
  const t = {};
  t.size = I;
  const A = t;
  Vt.dispatchCustomEventOnChange(g, A);
}, bx = (g, I, t) => {
  const A = I.confidence < t ? void 0 : I, e = {};
  e.detectedObject = A;
  const o = e;
  Vt.dispatchCustomEventOnChange(g, o);
}, Nx = (g, { detection: I, fps: t, image: A, invalidValidators: e, isInCandidateSelection: o }) => {
  const i = {};
  i.image = A, i.data = {}, i.data.detection = I, i.data.fps = t, i.data.isInCandidateSelection = o, i.data.invalidValidators = e, i.data.imageResolution = {}, i.data.imageResolution.width = A.width, i.data.imageResolution.height = A.height;
  const C = i;
  Vt.dispatchCustomEventOnChange(g, C);
};
function Fx(g) {
  const I = {};
  I.instruction = g;
  const t = I;
  Co(xI.REQUEST_CAPTURE, t);
}
const GI = (g, I) => {
  Co(g, I);
}, Rx = (g, I) => {
  const { cameraResolution: t, shouldCameraMirror: A } = I;
  T(() => {
    if (!t) return;
    const e = {};
    e.cameraResolution = t, e.isMirroring = A, Gx(g, e);
  }, [t, A, g]);
}, Sx = (g) => g === KC.CONTROL ? !zC() : !0, Mx = (g, I) => {
  const { appState: t, handleAppStateChange: A, handleError: e, isCameraReady: o } = It(), [i, C] = EA(), n = pA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? Sx(g);
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
        case M0.CONTINUE_DETECTION:
          a();
          break;
        case M0.TOGGLE_MIRROR:
          Q();
          break;
        case M0.SWITCH_CAMERA:
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
async function rn() {
  return navigator.mediaDevices.enumerateDevices();
}
async function K0() {
  return (await rn()).filter((I) => I.kind === "videoinput");
}
function O0(g) {
  g.getTracks().forEach((t) => t.stop());
}
function fi(g) {
  return g.getVideoTracks()[0];
}
const mg = {};
mg.width = 1920, mg.height = 1080, mg.facingMode = Io.FRONT;
const Lx = mg;
var YA;
class En {
  constructor({ defaultVideoConstrains: I = Lx, minCameraShorterSide: t = Pa } = {}) {
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
    return m(this, YA) ? fi(m(this, YA)) : void (2439 * 2 + 4221 + 9099 * -1);
  }
  get isCameraActive() {
    var I;
    return !!((I = m(this, YA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(I);
    O0(t);
  }
  async open(I = {}) {
    Ei() && await hI(-1061 * -5 + 7735 + -2518 * 5), Y(this, YA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await K0();
    if (I.length <= -1 * 8737 + -59 * -11 + -8089 * -1) return;
    const t = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), e = I.findIndex((C) => C.deviceId === A.deviceId), o = I[e + (31 * 93 + 11 * 863 + -1375 * 9)] ?? I[-1 * -5263 + -8988 + -3725 * -1], i = this.getConstraints(t, o);
    this.close(), await this.open(i);
  }
  close() {
    m(this, YA) && (O0(m(this, YA)), Y(this, YA, null));
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
    const I = this.getSettings(), t = await rn(), A = t.find((e) => e.deviceId === I.deviceId);
    return A == null ? void 0 : A.label;
  }
  async getBestCameraInfo(I) {
    return I === Io.FRONT ? void (789 + -789 * 1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return zC() ? (await K0()).find((A) => A.label.includes("back") && A.label.includes("0")) : void (-2354 * -3 + 188 * 35 + 6821 * -2);
  }
  async collectAvailableCamerasInfo() {
    const I = await K0();
    for (const t of I) {
      Ei() && await hI(19 * -484 + -4058 * 2 + 1 * 17762);
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
        this.availableCameraProperties.push(a), O0(o);
      } catch (A) {
        A instanceof Error && U.logError(A);
      }
    }
  }
  getConstraints(I, t) {
    const A = { ...this.options.defaultVideoConstrains, ...I };
    A.deviceId = t ? { exact: t.deviceId } : void (-461 * -19 + 334 * 21 + -15773 * 1);
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
class Jx {
  constructor(I, t) {
    this.videoHandler = I, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(I = {}) {
    await En.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, t);
    await this.cameraHandler.open(A), ex() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
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
    return A.drawImage(this.videoHandler.videoElement, -2 * 4246 + 140 * 46 + 684 * 3, 1 * -1402 + -6713 + -5 * -1623), { image: t, timestamp: Date.now() };
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
var $A;
class vx {
  constructor(I) {
    H(this, $A);
    Y(this, $A, I);
  }
  get videoElement() {
    return m(this, $A);
  }
  async play(I) {
    m(this, $A).srcObject = I, await m(this, $A).play();
  }
  stop() {
    m(this, $A).srcObject = null;
  }
  hasSrcObject() {
    return !!m(this, $A).srcObject;
  }
}
$A = new WeakMap();
function Yx(g) {
  const I = tA(null), t = tA(), { handleError: A, setIsCameraReady: e } = It(), [o, i] = EA(), C = mA((B) => {
    i((a) => gx(B, a));
  }, []);
  T(() => ((async () => {
    if (!I.current) {
      A(new U("Something went wrong during video initialization"));
      return;
    }
    const a = new vx(I.current), Q = new En(), E = new Jx(a, Q);
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
function Wx(g, I) {
  T(() => {
    if (!g.current) return;
    const t = new ResizeObserver((A) => {
      const [e] = A;
      kx(I, e.contentRect);
    });
    return t.observe(g.current), () => {
      t.disconnect();
    };
  }, [g, I]);
}
function Ux(g) {
  return ge(Math.abs(g));
}
const Hx = () => {
  const [g, I] = EA(null), t = tA(new mt(6177 + -4 * 1543));
  function A(o) {
    const { z: i } = o.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(Ux(i));
    const C = ge(Fe(t.current)), n = {};
    n.z = C, I(n);
  }
  T(() => (window.addEventListener("devicemotion", Ix(A, Ax), !0), () => {
    window.removeEventListener("devicemotion", A, !0);
  }), []);
  const e = {};
  return e.acceleration = g, e;
}, no = (g, I) => {
  const t = tA(I);
  T(() => {
    t.current = I;
  }, [I]), T(() => {
    const A = (e) => t.current(e);
    return document.addEventListener(g, A), () => {
      document.removeEventListener(g, A);
    };
  }, [g]);
};
var Kx = Symbol.for("preact-signals");
function Bo() {
  if (Oe > -1 * 3613 + 3 * -487 + 725 * 7)
    Oe--;
  else {
    for (var g, I = !1; void (-9913 + 1 * -523 + 10436) !== yt; ) {
      var t = yt;
      for (yt = void (1536 * 5 + 1 * 8041 + 1 * -15721), kI++; void (365 * -18 + 34 * -26 + 1 * 7454) !== t; ) {
        var A = t.o;
        if (t.o = void 0, t.f &= -(4804 + 2 * -765 + -1 * 3271), !(4364 + 297 * 14 + -129 * 66 & t.f) && dn(t)) try {
          t.c();
        } catch (e) {
          !I && (g = e, I = !(-5894 + 1 * 5894));
        }
        t = A;
      }
    }
    if (kI = 8 * -1039 + -10 * 27 + 8582, Oe--, I) throw g;
  }
}
var O = void (-6414 + 4626 * 1 + -596 * -3), yt = void 0, Oe = -2 * -4273 + 7291 + -1 * 15837, kI = 7933 + 976 * 5 + 4271 * -3, Pg = 0;
function sn(g) {
  if (void (-8574 * -1 + 8107 + -1 * 16681) !== O) {
    var I = g.n;
    if (void (8730 * -1 + -1484 + 2 * 5107) === I || I.t !== O)
      return I = { i: 0, S: g, p: O.s, n: void 0, t: O, e: void (-9554 + 562 * 17), x: void (445 * 19 + 119 + -3 * 2858), r: I }, void (-9916 + -2 * -4958) !== O.s && (O.s.n = I), O.s = I, g.n = I, 5218 * -1 + -1413 + -6663 * -1 & O.f && g.S(I), I;
    if (-(-2256 + -2518 * -1 + -261 * 1) === I.i)
      return I.i = 2622 + -1 * 8523 + -1 * -5901, void (29 * 55 + 9773 + -11368) !== I.n && (I.n.p = I.p, void (4420 * -2 + -1 * 1543 + 10383) !== I.p && (I.p.n = I.n), I.p = O.s, I.n = void (-6 * 919 + -2139 * -2 + -4 * -309), O.s.n = I, O.s = I), I;
  }
}
function nA(g) {
  this.v = g, this.i = -4314 + 23 * 359 + -3943 * 1, this.n = void (7546 + 98 * -77), this.t = void 0;
}
nA.prototype.brand = Kx, nA.prototype.h = function() {
  return !(1979 * 2 + 71 * -51 + -1 * 337);
}, nA.prototype.S = function(g) {
  this.t !== g && void (5027 * -1 + 163 * 53 + -3612) === g.e && (g.x = this.t, void (13 * 10 + 1797 + 41 * -47) !== this.t && (this.t.e = g), this.t = g);
}, nA.prototype.U = function(g) {
  if (void (6038 * -1 + -1 * -5918 + 40 * 3) !== this.t) {
    var I = g.e, t = g.x;
    I !== void 0 && (I.x = t, g.e = void 0), void (-756 + -7 * -108) !== t && (t.e = I, g.x = void (-11 * 376 + -1151 * -6 + 1385 * -2)), g === this.t && (this.t = t);
  }
}, nA.prototype.subscribe = function(g) {
  var I = this;
  return ao(function() {
    var t = I.value, A = O;
    O = void (1 * 5486 + 5866 + -11352);
    try {
      g(t);
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
  O = void (-7981 + 2 * -4030 + 16041);
  try {
    return this.value;
  } finally {
    O = g;
  }
}, Object.defineProperty(nA.prototype, "value", { get: function() {
  var g = sn(this);
  return void (-223 * 19 + -1 * -8717 + -4480) !== g && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if (kI > -5 * -655 + 3774 + -6949) throw new Error("Cycle detected");
    this.v = g, this.i++, Pg++, Oe++;
    try {
      for (var I = this.t; void (-3 * -1819 + 5191 + 968 * -11) !== I; I = I.x) I.t.N();
    } finally {
      Bo();
    }
  }
} });
function cn(g) {
  return new nA(g);
}
function dn(g) {
  for (var I = g.s; void (-2155 * -1 + -6427 * -1 + -8582) !== I; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !(1993 * 3 + -3 * 953 + -3120);
  return !(-13 * -484 + -2 * 2687 + -917);
}
function hn(g) {
  for (var I = g.s; void (-1 * 4605 + 2511 + 2094) !== I; I = I.n) {
    var t = I.S.n;
    if (void (-1 * 9102 + 7197 + -635 * -3) !== t && (I.r = t), I.S.n = I, I.i = -(6241 * -1 + -93 * 44 + 10334), void (-9 * 798 + 3379 + 3803) === I.n) {
      g.s = I;
      break;
    }
  }
}
function ln(g) {
  for (var I = g.s, t = void (-3902 + -73 * -77 + -1719); void (-1 * -399 + -33 * 141 + 1 * 4254) !== I; ) {
    var A = I.p;
    -(3 * -1469 + 495 + 3913) === I.i ? (I.S.U(I), void (-5 * 642 + 3014 + 196) !== A && (A.n = I.n), void (-9922 * -1 + -1 * -9764 + -19686) !== I.n && (I.n.p = A)) : t = I, I.S.n = I.r, void (1 * -1181 + 3962 + -2781) !== I.r && (I.r = void (79 * -53 + -4969 + 3 * 3052)), I = A;
  }
  g.s = t;
}
function Ue(g) {
  nA.call(this, void (9 * -898 + 1 * 2515 + 5567)), this.x = g, this.s = void (-9 * -1095 + 7465 * -1 + -2390), this.g = Pg - (-998 * 5 + 5651 + -660), this.f = -8455 + 401 * 3 + 7256;
}
(Ue.prototype = new nA()).h = function() {
  if (this.f &= -(-5045 + -4589 * 1 + 9637), 1 & this.f) return !(-5334 + -5 * -1067);
  if (-1 * -6011 + 39 * -27 + -4926 == (36 & this.f)) return !(1553 * 5 + 1093 * 4 + -12137);
  if (this.f &= -(1322 + -439 * 3), this.g === Pg) return !(13 * -352 + -1 * -7655 + -3079);
  if (this.g = Pg, this.f |= -2 * -3127 + -7895 * -1 + -14148, this.i > -1 * 2611 + 5407 * 1 + -2796 && !dn(this)) return this.f &= -(7564 * -1 + -413 * -19 + 281 * -1), !(-7671 + -42 * 21 + 8553);
  var g = O;
  try {
    hn(this), O = this;
    var I = this.x();
    (16 & this.f || this.v !== I || -122 * -37 + 2300 + 2 * -3407 === this.i) && (this.v = I, this.f &= -(-2 * -3398 + -89 * 42 + -3041 * 1), this.i++);
  } catch (t) {
    this.v = t, this.f |= -1 * -2503 + -3 * -2468 + 3 * -3297, this.i++;
  }
  return O = g, ln(this), this.f &= -(-5531 + 3 * -249 + 6280), !0;
}, Ue.prototype.S = function(g) {
  if (void (1 * 9151 + 8434 + -17585) === this.t) {
    this.f |= -3 * -2780 + 313 * -10 + -5174;
    for (var I = this.s; void (14678 + -14678 * 1) !== I; I = I.n) I.S.S(I);
  }
  nA.prototype.S.call(this, g);
}, Ue.prototype.U = function(g) {
  if (void (-8669 + -1 * 1321 + 9990) !== this.t && (nA.prototype.U.call(this, g), void (18 * -77 + -1744 * -5 + -7334) === this.t)) {
    this.f &= -(-7309 + 7342 * 1);
    for (var I = this.s; I !== void 0; I = I.n) I.S.U(I);
  }
}, Ue.prototype.N = function() {
  if (!(-6337 + 367 * 11 + -2302 * -1 & this.f)) {
    this.f |= 97 * 26 + 9653 + -12169;
    for (var g = this.t; void (-32 * 11 + 3639 + -3287 * 1) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(Ue.prototype, "value", { get: function() {
  if (3010 + -1 * 8774 + 1 * 5765 & this.f) throw new Error("Cycle detected");
  var g = sn(this);
  if (this.h(), void (971 * -2 + -3 * 2643 + 9871) !== g && (g.i = this.i), -15 * -623 + 9311 * 1 + 932 * -20 & this.f) throw this.v;
  return this.v;
} });
function Ox(g) {
  return new Ue(g);
}
function un(g) {
  var I = g.u;
  if (g.u = void (1203 * 5 + -3758 + 61 * -37), typeof I == "function") {
    Oe++;
    var t = O;
    O = void 0;
    try {
      I();
    } catch (A) {
      throw g.f &= -(1426 + -178 * 8), g.f |= -8137 * -1 + -5201 + -6 * 488, Qo(g), A;
    } finally {
      O = t, Bo();
    }
  }
}
function Qo(g) {
  for (var I = g.s; I !== void 0; I = I.n) I.S.U(I);
  g.x = void (-7061 * 1 + 4952 * -1 + 12013), g.s = void (-68 * 28 + -5 * 71 + -3 * -753), un(g);
}
function Tx(g) {
  if (O !== this) throw new Error("Out-of-order effect");
  ln(this), O = g, this.f &= -2, 82 * 113 + 26 * 328 + 8893 * -2 & this.f && Qo(this), Bo();
}
function ht(g) {
  this.x = g, this.u = void (-1804 + 7991 * 1 + -6187), this.s = void (5656 + 1414 * -4), this.o = void (8339 + -111 * 57 + -503 * 4), this.f = 20 * 324 + 8249 + -14697;
}
ht.prototype.c = function() {
  var g = this.S();
  try {
    if (-5314 * 1 + 7092 + 1 * -1770 & this.f || void (11 * 53 + -916 + 333) === this.x) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, ht.prototype.S = function() {
  if (-1275 + -5144 * 1 + 6420 & this.f) throw new Error("Cycle detected");
  this.f |= 3825 + -16 * 239, this.f &= -(1 * -5169 + -4244 + -14 * -673), un(this), hn(this), Oe++;
  var g = O;
  return O = this, Tx.bind(this, g);
}, ht.prototype.N = function() {
  !(6094 + -4 * 1523 & this.f) && (this.f |= 29 * -288 + 7066 + -1288 * -1, this.o = yt, yt = this);
}, ht.prototype.d = function() {
  this.f |= -1 * -3491 + -7959 + -6 * -746, 6 * -534 + -2153 * 1 + 5358 & this.f || Qo(this);
};
function ao(g) {
  var I = new ht(g);
  try {
    I.c();
  } catch (t) {
    throw I.d(), t;
  }
  return I.d.bind(I);
}
var T0;
function Ke(g, I) {
  b[g] = I.bind(null, b[g] || function() {
  });
}
function Bg(g) {
  T0 && T0(), T0 = g && g.S();
}
function fn(g) {
  var I = this, t = g.data, A = Te(t);
  A.value = t;
  var e = pA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -349 * 5 + 4723 * -1 + 6472;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !Ti(e.peek()) && ((i = I.base) == null ? void (-3258 + 181 * 18) : i.nodeType) === 3 ? I.base.data = e.peek() : (I.__$f |= -4805 + -299 * -23 + 19 * -109, I.setState({}));
    }, Ox(function() {
      var i = A.value.value;
      return 2936 + -2 * 1468 === i ? 1 * 6857 + -1872 + -4985 * 1 : !(-6 * 449 + 5 * -1811 + 11749) === i ? "" : i || "";
    });
  }, []);
  return e.value;
}
fn.displayName = "_st";
var bI = {};
bI.configurable = !(9743 + 1 * 3674 + -13417 * 1), bI.value = void (-2844 + 28 * -178 + 7828);
var NI = {};
NI.configurable = !(-499 * -14 + 457 * 9 + 1009 * -11), NI.value = fn;
var FI = {};
FI.configurable = !0, FI.get = function() {
  var g = {};
  return g.data = this, g;
};
var RI = {};
RI.configurable = !(7695 + -13 * 141 + -3 * 1954), RI.value = 1;
var at = {};
at.constructor = bI, at.type = NI, at.props = FI, at.__b = RI, Object.defineProperties(nA.prototype, at), Ke("__b", function(g, I) {
  if (typeof I.type == "string") {
    var t, A = I.props;
    for (var e in A) if (e !== "children") {
      var o = A[e];
      o instanceof nA && (t || (I.__np = t = {}), t[e] = o, A[e] = o.peek());
    }
  }
  g(I);
}), Ke("__r", function(g, I) {
  Bg();
  var t, A = I.__c;
  A && (A.__$f &= -(-4 * -1532 + -4 * -398 + -7718), void (-134 * 2 + -107 * 6 + 10 * 91) === (t = A.__$u) && (A.__$u = t = function(e) {
    var o;
    return ao(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= 6770 + 1 * -6359 + 41 * -10, A.setState({});
    }, o;
  }())), Bg(t), g(I);
}), Ke("__e", function(g, I, t, A) {
  Bg(), g(I, t, A);
}), Ke("diffed", function(g, I) {
  Bg();
  var t;
  if (typeof I.type == "string" && (t = I.__e)) {
    var A = I.__np, e = I.props;
    if (A) {
      var o = t.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (1110 * -1 + -2400 + -26 * -135) !== C && !(i in A) && (C.d(), o[i] = void (3 * -1861 + 4628 + 955));
      }
      else t.U = o = {};
      for (var n in A) {
        var B = o[n], a = A[n];
        void (7234 + 222 * 19 + -11452) === B ? (B = qx(t, n, a, e), o[n] = B) : B.o(a, e);
      }
    }
  }
  g(I);
});
function qx(g, I, t, A) {
  var e = I in g && g.ownerSVGElement === void 0, o = cn(t);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: ao(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, e ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
Ke("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var t = I.__e;
    if (t) {
      var A = t.U;
      if (A) {
        t.U = void (-2019 * -4 + 98 * -98 + -191 * -8);
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
      C && (i.__$u = void (8128 + -1 * 7468 + -132 * 5), C.d());
    }
  }
  g(I);
}), Ke("__h", function(g, I, t, A) {
  (A < -7560 + 2311 * -3 + 14496 || 79 * 113 + -2524 + -6394 === A) && (I.__$f |= 6007 * -1 + 11 * -540 + 11949), g(I, t, A);
}), RA.prototype.shouldComponentUpdate = function(g, I) {
  var t = this.__$u;
  if (!(t && void (-18 * -21 + 13 * 38 + 1 * -872) !== t.s || -1 * -2339 + -5109 + 2774 & this.__$f)) return !(-11053 + 7 * 1579);
  if (-1487 * -3 + 3 * -2953 + 4401 & this.__$f) return !(-5044 + 265 * 7 + -1063 * -3);
  for (var A in I) return !(8483 + -713 * -9 + -14900);
  for (var e in g) if (e !== "__source" && g[e] !== this.props[e]) return !(1 * 2337 + -9434 + 151 * 47);
  for (var o in this.props) if (!(o in g)) return !(3920 + -19 * 426 + 4174);
  return !1;
};
function Te(g) {
  return pA(function() {
    return cn(g);
  }, []);
}
const Zx = async () => WebAssembly.validate(new Uint8Array([-604 + 4 * 151, -9497 * -1 + -6221 + -3179, 115, 5581 * 1 + 6 * 921 + -10998, 1, -193 * -30 + -9167 + 3377, -6 * 1562 + 907 * -1 + -10279 * -1, -3388 + -2 * -2391 + -1394, -1 * -9977 + -4742 + 1 * -5234, 139 * -4 + 9836 + -9275, 3627 + -3626 * 1, -7137 + 2411 * 3, -8647 * 1 + -7141 + 4 * 3947, 1663 * -1 + 2453 + 789 * -1, 2234 * -2 + 6470 + 1879 * -1, 1548 + -1514 * -1 + -3059, 2, -6911 + 108 * 64, 1843 + 1 * -93 + -14 * 125, 3379 + 72 * 48 + -6825, 37 * -47 + -2362 + 4111 * 1, 7055 + -3 * 2282 + -208, -101 * -7 + 9802 + 10501 * -1, 142 * -2 + 8811 * 1 + 1 * -8527, 1 * -2516 + -5023 + 3802 * 2, -335 * 1 + 6 * -525 + 3485, 253, 8097 + 2 * -4041, -8 * -421 + 95 * 67 + 3 * -3160, 7310 + -7363 * 1 + 151, -5977 + 7905 * 1 + -9 * 213]));
function jx() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(1565 + -101 * 46 + 3097);
}
function Px() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = jx();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function Vx(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const SI = {};
SI.label = ">1m", SI.time = 60;
const MI = {};
MI.label = ">45", MI.time = 45;
const LI = {};
LI.label = ">30", LI.time = 30;
function _x(g, I = [SI, MI, LI]) {
  const t = I.sort((A, e) => e.time - A.time);
  for (const A of t)
    if (g > A.time) return A.label;
  return "" + g;
}
const Xx = (g) => Math.round(g / 500) * 500 / (-1 * 5903 + -8865 + -1752 * -9), Di = (g) => g ? g <= -32 * 100 + -5078 * -1 + -1877 * 1 ? Math.round(g * (-1 * 8966 + -2 * -1769 + 5448)) / (-7121 + -3 * -3191 + -2432) : Math.round(g / (1 * -7201 + 6839 * -1 + 14090)) * 50 : 0, zx = (g) => Math.round(g * (-1 * 5494 + 1 * -1523 + -1 * -7019)) / (1971 * -5 + 1 * -878 + 10735 * 1);
async function Dn() {
  return await Zx() ? si.SIMD : si.NO_SIMD;
}
var Ft, B0;
class yn {
  constructor(I) {
    H(this, Ft, !0);
    H(this, B0, Date.now());
    p(this, "analytics");
    p(this, "samVersion");
    p(this, "sessionToken");
    p(this, "onDetectionCallback");
    p(this, "onCaptureCallback");
    p(this, "createProtoMessage");
    p(this, "fpsOfAllImages", new mt(-7649 + -1 * -7679));
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
  async trackCaptureProcess(I, t) {
    var i;
    const A = Date.now(), e = Fe(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: e, captureProcessDurationInMs: A - m(this, B0), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Dn() });
  }
  onDetection(I, t) {
    this.onDetectionCallback({ ...I, avgFps: ge(Fe(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: t, detection: A }) {
    const e = {};
    e.width = t.width, e.height = t.height;
    const o = e, i = await nx(t), C = await this.cameraService.getCameraProperties(), n = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, B = {};
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
    await hI(Math.max(xi.max - I, xi.min));
  }
}
Ft = new WeakMap(), B0 = new WeakMap();
class $x extends yn {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, instructionCodeMap: e, ...o }) {
    super(o);
    p(this, "candidateSelectionTime", 0);
    p(this, "candidatesSelectionFramesCount", 1106 * -9 + -4416 + 14370);
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
    this.candidateSelectionTime === -7452 + 6 * -1346 + 15528 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= L0.minFrames ? t > L0.minDuration : t > L0.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: A } = this.bestImage || {};
    if (A && t) this.trackCaptureProcess(t, A), await this.onCapture({ canvasImage: A, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new U("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: A }) {
    const e = this.getDetectionEndTime(A.timestamp), o = ge((-42 * -7 + -3917 + 4623) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, n = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), B = {};
    B.isNewDetectionValid = t.isValid, B.newInvalidInstruction = n[-1669 + -1669 * -1];
    const a = this.getInstructionCode(B), Q = {};
    return Q.detection = t.detection, Q.instructionCode = a, Q.invalidValidators = n, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: e, fps: o, avgFps: ge(Fe(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: A }) {
    var e;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (e = this.lastImage) != null && e.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, A) {
    return A.sharpness > t.sharpness;
  }
}
var Be, fe;
class Ar extends yn {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, ...e }) {
    super(e);
    H(this, Be, void (114 + -10 * 939 + -2 * -4638));
    H(this, fe);
    p(this, "fallbackInstruction");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var A, e;
    return (A = t.detail) != null && A["instruction"] ? Object.values(fg).includes((e = t.detail) == null ? void 0 : e["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    Y(this, fe, (t) => {
      var A;
      this.isRequestCaptureEventValid(t) && Y(this, Be, (A = t.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(xI.REQUEST_CAPTURE, m(this, fe));
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
    return m(this, Be) ? m(this, Be) === fg.FIRST_FRAME ? !0 : m(this, Be) === fg.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    e.canvasImage = t, e.detection = A, e.candidateSelectionImages = [], await this.onCapture(e), Y(this, Be, void (-2221 * -1 + -9750 + 7529)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, A) {
    const e = this.getDetectionEndTime(t.timestamp), o = ge((-7570 + -4673 * 1 + 13243) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = t.image.width, i.height = t.image.height;
    const C = i, n = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), B = this.getInstructionCode(n[-1410 + 141 * 10]), a = {};
    return a.detection = A.detection, a.instructionCode = B, a.invalidValidators = n, a.isInCandidateSelection = !1, { processedImage: a, detectionTime: e, fps: o, avgFps: ge(Fe(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), m(this, fe) && document.removeEventListener(xI.REQUEST_CAPTURE, m(this, fe));
  }
}
Be = new WeakMap(), fe = new WeakMap();
function er({ captureMode: g, ...I }) {
  return g === Sg.AUTO_CAPTURE ? new $x(I) : new Ar(I);
}
function tr({ cameraResolution: g, cameraService: I, customEvent: t }) {
  const { shouldCameraMirror: A } = Mx(t.CONTROL, I), e = {};
  e.cameraResolution = g, e.shouldCameraMirror = A, Rx(t.CAMERA_PROPS_CHANGED, e), T(() => () => {
    kt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function gr({ cameraFacing: g, captureMode: I, checkToInstructionCodeMap: t, controller: A, createProtoMessage: e, customEvent: o, fallbackInstruction: i, instructionCodeMap: C, onCapture: n, onDetection: B, sessionToken: a }) {
  const { appState: Q, handleAppStateChange: E } = It(), { sunfish: r } = ot(), { analytics: s } = oo(), { cameraResolution: d, cameraService: h, onCameraResolutionChange: x, videoRef: u } = Yx(g), w = {};
  w.cameraResolution = d, w.cameraService = h, w.customEvent = o;
  const { shouldCameraMirror: R } = tr(w), S = Te(void (-15916 + 173 * 92)), M = mA((L) => {
    E(ZA.WAITING), n(L);
  }, [n, E]), y = mA((L, P) => {
    x(L.resolution), S.value = L, B(L, P);
  }, [B, S, x]);
  T(() => {
    h != null && h["isStreaming"] && (A != null && A["isDetectorInitialized"]) && r && E(ZA.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], A == null ? void 0 : A["isDetectorInitialized"], E, r]), T(() => {
    if (Q !== ZA.RUNNING) return;
    if (!h || !A) throw new U("Cannot start detection");
    const L = {};
    L.captureMode = I, L.analytics = s, L.cameraService = h, L.imageProcessor = A.imageProcessor, L.fallbackInstruction = i, L.instructionCodeMap = C, L.checkToInstructionCodeMap = t, L.sessionToken = a, L.samVersion = A.samVersion, L.createProtoMessage = e, L.onCaptureCallback = M, L.onDetectionCallback = y;
    const P = er(L);
    return A.runDetectionLoop(P), () => {
      A.stopDetectionLoop();
    };
  }, [Q, A, h, M, y, a, S, s, e, C, t, i, I]);
  const q = {};
  return q.videoRef = u, q.cameraResolution = d, q.detectionDetails = S, q.shouldCameraMirror = R, q;
}
function wn({ callback: g, delay: I, skip: t = !1 }) {
  const [A, e] = EA(!1), o = tA(g), i = tA(null);
  T(() => {
    o.current = g;
  }, [g]);
  const C = mA(() => {
    i.current && (clearTimeout(i.current), i.current = null), e(!1);
  }, []), n = mA(() => {
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
function pn(g) {
  const I = tA([]);
  return T(() => {
    I.current.forEach((t) => t()), I.current = [];
  }, [g]), (t) => {
    I.current.push(t);
  };
}
function Ir(g, I) {
  if (!g) return I;
  const { detectionRecord: t, hashedDetectedImages: A } = g;
  I.hashedDetectedImages && (A == null || A.push(...I.hashedDetectedImages)), I.detectionRecord && (t == null || t.push(...I.detectionRecord));
  const e = { ...g };
  return e.hashedDetectedImages = A, e.detectionRecord = t, e;
}
function or() {
  const g = Te(null);
  function I({ cameraProperties: A }) {
    g.value = Ir(g.value, A);
  }
  const t = {};
  return t.cameraProperties = g, t.mergeCameraProperties = I, t;
}
const mn = jt(null), xo = () => {
  const g = Me(mn);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, ir = ({
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
    cameraFacing: I ?? Io.FRONT,
    captureMode: t ?? Sg.AUTO_CAPTURE,
    assetsDirectoryPath: tn(g),
    sessionToken: e,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? Ya,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? Wa,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? Ua,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? Oa,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? Ta,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? qa,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? Ha,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? Za,
      mouth: {
        confidence: ((i = o == null ? void 0 : o.mouth) == null ? void 0 : i.confidence) ?? Ka,
        status: {
          min: ((C = o == null ? void 0 : o.mouth) == null ? void 0 : C.status.min) ?? Qi.min,
          max: ((n = o == null ? void 0 : o.mouth) == null ? void 0 : n.status.max) ?? Qi.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: ai
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: ai
      }
    }
  };
}, Cr = ({
  cameraOptions: g,
  children: I
}) => {
  const t = pA(() => ir(g), [g]);
  return /* @__PURE__ */ D(mn.Provider, { value: t, children: I });
};
function nr({ onFaceTrackingLost: g, skipOutsideOfCandidateSelection: I }) {
  const t = tA(g);
  T(() => {
    t.current = g;
  }, [g]);
  const A = mA((o) => {
    if (!o.detail) return;
    const { data: i } = o.detail;
    I && !i.isInCandidateSelection || i.invalidValidators.includes(IA.FACE_NOT_PRESENT) && t.current();
  }, [I]), e = {};
  return e.handleFaceDetection = A, e;
}
function Br(g) {
  return function(t) {
    const { handleFaceDetection: A } = g(t);
    no(qA.FACE_DETECTION, A);
  };
}
const Qr = ({ children: g }) => {
  const I = tA(null);
  return Wx(I, qA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(na, { ref: I, children: g });
}, ro = -2 * 1406 + -5085 + 1 * 7897 + 0.5;
function ar() {
  const g = {};
  g.max = ro;
  const I = {};
  I.confidence = 0.3, I.status = g;
  const t = {};
  return t.mouth = I, t;
}
const xr = 795 * -7 + 1705 + 3860 + 0.4;
function rr(g) {
  const I = {};
  I.min = xr + g;
  const t = {};
  t.confidence = 0.3, t.status = I;
  const A = {};
  return A.brightnessHighThreshold = 1, A.brightnessLowThreshold = -(192 + -9 * 506 + 1 * 4363), A.sharpnessThreshold = -(-1359 * 6 + -8307 + -1 * -16462), A.outOfBoundsThreshold = -(3342 + 3341 * -1), A.minFaceSizeRatio = 0.1, A.mouth = t, A;
}
const Er = 31147 + -21 * 1007, yi = -3771 + 563 * -16 + 6397 * 2, sr = (g, I) => ({ ...g, leftEye: { ...g.leftEye, center: Ye(g.leftEye.center, I) }, rightEye: { ...g.rightEye, center: Ye(g.rightEye.center, I) }, mouth: { ...g.mouth, center: Ye(g.mouth.center, I) }, topLeft: Ye(g.topLeft, I), bottomRight: Ye(g.bottomRight, I), faceCenter: Ye(g.faceCenter, I) }), Gn = (g, I) => {
  const { faceCenter: t, faceSize: A } = g, e = Fa(A, I), o = {};
  o.x = t.x, o.y = t.y - e;
  const i = {};
  i.x = t.x + e, i.y = t.y;
  const C = {};
  C.x = t.x, C.y = t.y + e;
  const n = {};
  n.x = t.x - e, n.y = t.y;
  const B = {};
  return B.top = o, B.right = i, B.bottom = C, B.left = n, $C(B);
}, cr = (g, I) => {
  const { bottomRight: t, faceCenter: A, topLeft: e } = I, o = {
    topLeft: e,
    width: t.x - e.x,
    height: t.y - e.y
  };
  gn(g, o, "rgba(255, 0, 0, 0.3)", !0), ft(g, A, "lime");
}, dr = (g, I, t) => {
  const A = Gn(I, t);
  Object.values(A).map((e) => ft(g, e, "orange"));
};
function hr({ cameraResolution: g, detectionDetails: I, isImageMirror: t }) {
  const { thresholds: A } = xo(), { redfin: e } = ot(), o = tA(null);
  if (T(() => {
    if (!o.current)
      return;
    o.current.width = g.width, o.current.height = g.height, fa(o.current);
    const d = Yg(g), h = In(
      g,
      A.outOfBoundsThreshold,
      d
    ), x = ba(g);
    I.value && (cr(o.current, I.value.processedImage.detection), dr(
      o.current,
      I.value.processedImage.detection,
      g
    ), J0(o.current, d, "lime"), J0(o.current, h, "yellow"), J0(o.current, x, "blue"), ft(o.current, I.value.processedImage.detection.leftEye.center, "cyan"), ft(o.current, I.value.processedImage.detection.rightEye.center, "cyan"), ft(o.current, I.value.processedImage.detection.mouth.center, "cyan"));
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
    "Component version": "7.0.0"
  };
  return r && (s["SAM version"] = r), Q.length > 0 && (s["Invalid validators"] = Q), /* @__PURE__ */ D(
    ua,
    {
      ref: o,
      cameraResolution: g,
      detectionDetails: s,
      isImageMirror: t
    }
  );
}
function lr(g) {
  return /* @__PURE__ */ D("rect", { fill: "#000", ...g, rx: "50%" });
}
function ur(g, I) {
  const [t, A] = EA(!1), e = () => A((C) => !C), o = "" + t;
  et(() => {
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
const fr = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Dr({ cutOut: g, height: I, ignoreElement: t, width: A }) {
  const e = tA(null), { key: o } = ur(e, t);
  return /* @__PURE__ */ D("div", { ref: e, style: fr, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${A} ${I}`, children: [
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
function yr({ fullOverlay: g, ignoreElement: I, resolution: t }) {
  const A = Na(t), e = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    Dr,
    {
      cutOut: g || /* @__PURE__ */ D(lr, { height: e, width: o, x: i, y: C }),
      height: t.height,
      ignoreElement: I,
      width: t.width
    }
  );
}
function wr({ cameraResolution: g, children: I, detectionDetails: t, shouldMirror: A }) {
  const { redfin: e } = ot(), { appState: o, freemiumOverlayState: i } = It(), C = tA(null), n = i !== Ug.HIDDEN && e !== fI.Higher && g, B = i === Ug.VISIBLE, a = g && o === ZA.RUNNING;
  return /* @__PURE__ */ D(MA, { children: [
    n && /* @__PURE__ */ D(
      yr,
      {
        fullOverlay: B,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ D("div", { ref: C, children: /* @__PURE__ */ D(
      hr,
      {
        cameraResolution: g,
        detectionDetails: t,
        isImageMirror: A
      }
    ) })
  ] });
}
const pr = (g, I) => {
  if (ix()) {
    const t = {};
    t.candidateSelectionImages = I;
    const A = t;
    kt.getInstance().dispatchCustomEventOnChange(g, A);
  }
};
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kn = {}, wi = {}, mr = Gr;
function Gr(g, I) {
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
var bn = {};
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
})(bn);
var kr = u0;
function u0() {
  this._listeners = {};
}
u0.prototype.on = function(g, I, t) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: t || this
  }), this;
};
u0.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var t = this._listeners[g], A = 0; A < t.length; )
      t[A].fn === I ? t.splice(A, 1) : ++A;
  return this;
};
u0.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var t = [], A = 1; A < arguments.length; )
      t.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, t);
  }
  return this;
};
var br = pi(pi);
function pi(g) {
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
    g.writeFloatLE = I.bind(null, mi), g.writeFloatBE = I.bind(null, Gi);
    function t(A, e, o) {
      var i = A(e, o), C = (i >> 31) * 2 + 1, n = i >>> 23 & 255, B = i & 8388607;
      return n === 255 ? B ? NaN : C * (1 / 0) : n === 0 ? C * 1401298464324817e-60 * B : C * Math.pow(2, n - 150) * (B + 8388608);
    }
    g.readFloatLE = t.bind(null, ki), g.readFloatBE = t.bind(null, bi);
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
    g.writeDoubleLE = I.bind(null, mi, 0, 4), g.writeDoubleBE = I.bind(null, Gi, 4, 0);
    function t(A, e, o, i, C) {
      var n = A(i, C + e), B = A(i, C + o), a = (B >> 31) * 2 + 1, Q = B >>> 20 & 2047, E = 4294967296 * (B & 1048575) + n;
      return Q === 2047 ? E ? NaN : a * (1 / 0) : Q === 0 ? a * 5e-324 * E : a * Math.pow(2, Q - 1075) * (E + 4503599627370496);
    }
    g.readDoubleLE = t.bind(null, ki, 0, 4), g.readDoubleBE = t.bind(null, bi, 4, 0);
  }(), g;
}
function mi(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
function Gi(g, I, t) {
  I[t] = g >>> 24, I[t + 1] = g >>> 16 & 255, I[t + 2] = g >>> 8 & 255, I[t + 3] = g & 255;
}
function ki(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function bi(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function Ni(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Nr = Fr;
function Fr(g) {
  try {
    if (typeof Ni != "function")
      return null;
    var I = Ni(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var Nn = {};
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
})(Nn);
var Rr = Sr;
function Sr(g, I, t) {
  var A = t || 8192, e = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > e)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var n = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), n;
  };
}
var q0, Fi;
function Mr() {
  if (Fi)
    return q0;
  Fi = 1, q0 = I;
  var g = Le();
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
  }, q0;
}
var Ri;
function Le() {
  return Ri || (Ri = 1, function(g) {
    var I = g;
    I.asPromise = mr, I.base64 = bn, I.EventEmitter = kr, I.float = br, I.inquire = Nr, I.utf8 = Nn, I.pool = Rr, I.LongBits = Mr(), I.isNode = !!(typeof se < "u" && se && se.process && se.process.versions && se.process.versions.node), I.global = I.isNode && se || typeof window < "u" && window || typeof self < "u" && self || se, I.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(wi)), wi;
}
var Fn = J, SA = Le(), JI, f0 = SA.LongBits, Si = SA.base64, Mi = SA.utf8;
function _t(g, I, t) {
  this.fn = g, this.len = I, this.next = void 0, this.val = t;
}
function Eo() {
}
function Lr(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function J() {
  this.len = 0, this.head = new _t(Eo, 0, 0), this.tail = this.head, this.states = null;
}
var Rn = function() {
  return SA.Buffer ? function() {
    return (J.create = function() {
      return new JI();
    })();
  } : function() {
    return new J();
  };
};
J.create = Rn();
J.alloc = function(g) {
  return new SA.Array(g);
};
SA.Array !== Array && (J.alloc = SA.pool(J.alloc, SA.Array.prototype.subarray));
J.prototype._push = function(g, I, t) {
  return this.tail = this.tail.next = new _t(g, I, t), this.len += I, this;
};
function so(g, I, t) {
  I[t] = g & 255;
}
function Jr(g, I, t) {
  for (; g > 127; )
    I[t++] = g & 127 | 128, g >>>= 7;
  I[t] = g;
}
function co(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
co.prototype = Object.create(_t.prototype);
co.prototype.fn = Jr;
J.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new co(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
J.prototype.int32 = function(g) {
  return g < 0 ? this._push(ho, 10, f0.fromNumber(g)) : this.uint32(g);
};
J.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function ho(g, I, t) {
  for (; g.hi; )
    I[t++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[t++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[t++] = g.lo;
}
J.prototype.uint64 = function(g) {
  var I = f0.from(g);
  return this._push(ho, I.length(), I);
};
J.prototype.int64 = J.prototype.uint64;
J.prototype.sint64 = function(g) {
  var I = f0.from(g).zzEncode();
  return this._push(ho, I.length(), I);
};
J.prototype.bool = function(g) {
  return this._push(so, 1, g ? 1 : 0);
};
function vI(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
J.prototype.fixed32 = function(g) {
  return this._push(vI, 4, g >>> 0);
};
J.prototype.sfixed32 = J.prototype.fixed32;
J.prototype.fixed64 = function(g) {
  var I = f0.from(g);
  return this._push(vI, 4, I.lo)._push(vI, 4, I.hi);
};
J.prototype.sfixed64 = J.prototype.fixed64;
J.prototype.float = function(g) {
  return this._push(SA.float.writeFloatLE, 4, g);
};
J.prototype.double = function(g) {
  return this._push(SA.float.writeDoubleLE, 8, g);
};
var vr = SA.Array.prototype.set ? function(g, I, t) {
  I.set(g, t);
} : function(g, I, t) {
  for (var A = 0; A < g.length; ++A)
    I[t + A] = g[A];
};
J.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(so, 1, 0);
  if (SA.isString(g)) {
    var t = J.alloc(I = Si.length(g));
    Si.decode(g, t, 0), g = t;
  }
  return this.uint32(I)._push(vr, I, g);
};
J.prototype.string = function(g) {
  var I = Mi.length(g);
  return I ? this.uint32(I)._push(Mi.write, I, g) : this._push(so, 1, 0);
};
J.prototype.fork = function() {
  return this.states = new Lr(this), this.head = this.tail = new _t(Eo, 0, 0), this.len = 0, this;
};
J.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new _t(Eo, 0, 0), this.len = 0), this;
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
  JI = g, J.create = Rn(), JI._configure();
};
var Yr = PA, Sn = Fn;
(PA.prototype = Object.create(Sn.prototype)).constructor = PA;
var Qe = Le();
function PA() {
  Sn.call(this);
}
PA._configure = function() {
  PA.alloc = Qe._Buffer_allocUnsafe, PA.writeBytesBuffer = Qe.Buffer && Qe.Buffer.prototype instanceof Uint8Array && Qe.Buffer.prototype.set.name === "set" ? function(g, I, t) {
    I.set(g, t);
  } : function(g, I, t) {
    if (g.copy)
      g.copy(I, t, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[t++] = g[A++];
  };
};
PA.prototype.bytes = function(g) {
  Qe.isString(g) && (g = Qe._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(PA.writeBytesBuffer, I, g), this;
};
function Wr(g, I, t) {
  g.length < 40 ? Qe.utf8.write(g, I, t) : I.utf8Write ? I.utf8Write(g, t) : I.write(g, t);
}
PA.prototype.string = function(g) {
  var I = Qe.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(Wr, I, g), this;
};
PA._configure();
var Mn = $, VA = Le(), YI, Ln = VA.LongBits, Ur = VA.utf8;
function UA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function $(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var Li = typeof Uint8Array < "u" ? function(g) {
  if (g instanceof Uint8Array || Array.isArray(g))
    return new $(g);
  throw Error("illegal buffer");
} : function(g) {
  if (Array.isArray(g))
    return new $(g);
  throw Error("illegal buffer");
}, Jn = function() {
  return VA.Buffer ? function(g) {
    return ($.create = function(I) {
      return VA.Buffer.isBuffer(I) ? new YI(I) : Li(I);
    })(g);
  } : Li;
};
$.create = Jn();
$.prototype._slice = VA.Array.prototype.subarray || /* istanbul ignore next */
VA.Array.prototype.slice;
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
function Z0() {
  var g = new Ln(0, 0), I = 0;
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
function Vg(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
$.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  return Vg(this.buf, this.pos += 4);
};
$.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  return Vg(this.buf, this.pos += 4) | 0;
};
function Ji() {
  if (this.pos + 8 > this.len)
    throw UA(this, 8);
  return new Ln(Vg(this.buf, this.pos += 4), Vg(this.buf, this.pos += 4));
}
$.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw UA(this, 4);
  var g = VA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
$.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw UA(this, 4);
  var g = VA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
$.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, t = this.pos + g;
  if (t > this.len)
    throw UA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, t) : I === t ? new this.buf.constructor(0) : this._slice.call(this.buf, I, t);
};
$.prototype.string = function() {
  var g = this.bytes();
  return Ur.read(g, 0, g.length);
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
  YI = g, $.create = Jn(), YI._configure();
  var I = VA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  VA.merge($.prototype, {
    int64: function() {
      return Z0.call(this)[I](!1);
    },
    uint64: function() {
      return Z0.call(this)[I](!0);
    },
    sint64: function() {
      return Z0.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return Ji.call(this)[I](!0);
    },
    sfixed64: function() {
      return Ji.call(this)[I](!1);
    }
  });
};
var Hr = Re, vn = Mn;
(Re.prototype = Object.create(vn.prototype)).constructor = Re;
var vi = Le();
function Re(g) {
  vn.call(this, g);
}
Re._configure = function() {
  vi.Buffer && (Re.prototype._slice = vi.Buffer.prototype.slice);
};
Re.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
Re._configure();
var Yn = {}, Kr = bt, lo = Le();
(bt.prototype = Object.create(lo.EventEmitter.prototype)).constructor = bt;
function bt(g, I, t) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  lo.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!t;
}
bt.prototype.rpcCall = function g(I, t, A, e, o) {
  if (!e)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return lo.asPromise(g, i, I, t, A, e);
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
bt.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = Kr;
})(Yn);
var Or = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = Fn, I.BufferWriter = Yr, I.Reader = Mn, I.BufferReader = Hr, I.util = Le(), I.rpc = Yn, I.roots = Or, I.configure = t;
  function t() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  t();
})(kn);
var K = kn;
const f = K.Reader, _ = K.Writer, l = K.util, c = K.roots.default || (K.roots.default = {}), Se = c.dot = (() => {
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
  function t(C, n, B, a, Q) {
    return z(C - 41, Q);
  }
  const A = g();
  function e(C, n, B, a, Q) {
    return z(n - -227, a);
  }
  function o(C, n, B, a, Q) {
    return z(C - 596, a);
  }
  function i(C, n, B, a, Q) {
    return z(n - -661, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(236, 239, 247, "#HFE", 262)) / 1 + parseInt(t(496, 473, 489, 499, "rj$o")) / 2 * (parseInt(i("kICz", -201, -191, -194, -193)) / 3) + parseInt(i("1)Ck", -196, -198, -206, -204)) / 4 * (-parseInt(o(1086, 1099, 1083, "$U!I", 1100)) / 5) + parseInt(o(1052, 1032, 1035, "$WjJ", 1031)) / 6 + parseInt(t(508, 520, 532, 522, "5fn!")) / 7 * (parseInt(o(1054, 1042, 1048, "$WjJ", 1047)) / 8) + -parseInt(i("p^9y", -202, -208, -201, -185)) / 9 + -parseInt(o(1049, 1027, 1067, "8&yz", 1063)) / 10 * (-parseInt(t(522, 499, 500, 534, "*SnG")) / 11) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(_g, -134 * 631 + 294809 + 44093);
function z(g, I) {
  const t = _g();
  return z = function(A, e) {
    A = A - (1 * -4657 + -1698 + 6801 * 1);
    let o = t[A];
    if (z.QVMTgw === void 0) {
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
      z.gVlKWJ = a, g = arguments, z.QVMTgw = !0;
    }
    const C = t[9137 * 1 + 17 * -449 + -376 * 4], n = A + C, B = g[n];
    return B ? o = B : (z.yOQlku === void 0 && (z.yOQlku = !0), o = z.gVlKWJ(o, e), g[n] = o), o;
  }, z(g, I);
}
async function Tr() {
  function g(a, Q, E, r, s) {
    return z(a - 54, Q);
  }
  const I = {};
  I[g(538, "Ap8D")] = VC, I[g(530, "nyLy") + "h"] = 256;
  function t(a, Q, E, r, s) {
    return z(a - -883, s);
  }
  function A(a, Q, E, r, s) {
    return z(s - 680, a);
  }
  const e = await window[A("]g7Z", 1163, 1172, 1144, 1148) + "o"][n(373, 366, "PN@s", 369, 365) + "e"][B(948, 960, 945, "yY*7", 959) + t(-436, -442, -458, -428, "Ap8D") + "y"](I, !0, [g(503, "zQSY") + "pt", g(527, "nyLy") + "pt"]), o = Uint8Array[B(941, 962, 919, "kICz", 942)](Array(1 * -6569 + -2678 + 157 * 59)[B(990, 956, 950, "2TNy", 973)](0)), i = window[t(-411, -433, -413, -423, "&sWw") + "o"][B(955, 966, 947, "rj$o", 965) + A("$WjJ", 1136, 1152, 1144, 1144) + A("nyLy", 1123, 1153, 1151, 1131)](o), C = {};
  C[n(389, 390, "[c@m", 392, 372)] = e, C.iv = i;
  function n(a, Q, E, r, s) {
    return z(s - -117, E);
  }
  function B(a, Q, E, r, s) {
    return z(s - 490, r);
  }
  return C;
}
async function qr(g) {
  const { iv: I, key: t } = await Tr();
  function A(E, r, s, d, h) {
    return z(h - -718, d);
  }
  const e = {};
  e[C(-225, -201, -214, -179, "$U!I")] = VC, e.iv = I;
  function o(E, r, s, d, h) {
    return z(E - 938, s);
  }
  function i(E, r, s, d, h) {
    return z(d - -794, E);
  }
  function C(E, r, s, d, h) {
    return z(r - -658, h);
  }
  const n = await window[A(-262, -246, -277, "$WjJ", -270) + "o"][A(-246, -236, -239, "tEE]", -230) + "e"][o(1388, 1369, "p^9y") + "pt"](e, t, g), B = await window[A(-225, -250, -220, "8&yz", -231) + "o"][A(-264, -240, -241, "AgES", -264) + "e"][o(1384, 1377, "LGGZ") + Q(200, 188, 172, 203, "SHLr")](A(-235, -214, -204, "Sfym", -227), t), a = {};
  a[i("AgES", -315, -349, -331) + "ge"] = n, a[A(-228, -207, -241, "0dBV", -225)] = B;
  function Q(E, r, s, d, h) {
    return z(r - -292, h);
  }
  return a.iv = I, a;
}
function _g() {
  const g = ["WQKkt8keWRLSWO8r", "W4tdI8knb8oFoZfScKRdJJy", "WOj6W6Xs", "W43dJmocAmksFZTw", "x8oVh8kTW4JdSvnhW5GGW7/cLmol", "W5FcT8kjW73cKXBdQZxdGrG", "Bg3dQWDPW6b1BSosW7hdLhPn", "pCoVW54EW4jbWPVdMW", "WRCkW6qYWQO", "WPlcNSoxxmk9", "omo+W7HyESkjc8ogv8oWW6hdKa", "WRuYqY9vFSo4WOyoWRy2WOW", "ySoPrIXdWQtdNhpdK8oHWRWsrG", "W4hcKmkuWQBcQG", "u8kxWRVcVSor", "smoVySkDW6xcOCoWWQm", "W75VWQqjW6FdKK5Y", "nIVdGCkmdq", "E8kbhb4i", "tSoHlSo3W6xcKColWOldMhK", "W79BCmkoWOK", "C8kbeqSf", "WOhcRSkTWOTlW5f6wG", "W67cScO5C8omzx5hASogcW", "WPfSptxdTwCvymoMmvGXWRu", "AHBcUmoB", "gL1rWPVcOb7cPSkX", "WRWRWPWhW4K", "W7bLWOVcSa", "WRldQxnO", "WQaWW75krvNdUgOaWPTPoG", "W6HwWQj5W73dNZpcLJGeW5HDdG", "WOqNWRBdJmoh", "ymozWOPPWOi", "rCkLkq", "W50UW4TVWRmWWRrb", "WO3cGmoO", "WRGEgblcUqjIW5BdU8kSBIu", "W6Tkva", "WPxdNIeYeG", "WR3dVhTgjG", "WP/cImobqCkF", "W593oLXi", "cmk4sCoNWOC", "FSkicGKc", "WOBdVCoqWQm", "W5nIW7JcHCkgBmkgW6DVW699W4xdKa", "WQKAW7u1WQC"];
  return _g = function() {
    return g;
  }, _g();
}
function Xg() {
  const g = ["gtXzsCoRWRpcLvdcUSo6x8k8WPq", "W7CsACoKW7BdU8oRfSkKWOhdI8o+FvG", "W5yrDJyPW7ZdTCoLwSkoW7q+xNa", "WR/cUgpcUSo4tSo4WOZdNYJdSH5cEW", "zGv2WRtdPW", "qCkqgmk9WRxcJZBdJmo9lmoHWP3cTG", "BqaRW63dImkycWddV3DOWRS", "W7uzwN9t", "W4L1BxrMt8o8yJBcISowWP0", "W6NdJayUW4xcJ8opWPfbFa", "qCkwsSo0W4ldRuddKa", "CmkhE8k4W7XlW5a", "jCk9WRnWESo/WO7dGW", "ruBcL1ZdVSokW4ldNNed", "oCkPW7G+WQDiWQy", "DSk6AmkQWQTMCG4aD2/cUmoKqW", "W6GYFWO1fCoGWRNdSfBdOmkW", "fmoCWR06WRe", "tCkoW7TaW69CWPpdOSkhWRybWRmLjW", "iSkmg0vWW7tcRfW", "A8oQWOddJG", "fmoSemoJw8kDW4CB", "WO4SW5JcL8ojW47dRmo1W6pcPmoVEG", "W7qFgCk3WR7cK8kqEq", "W64eW7HeW7FcNmoyWOG", "xJFdIqKZ", "jmoJo8oPW5S", "WR0zACo9kg3dVmo5", "BmkVW5uJWRC", "W4ZcQHjVt8o/lL8", "E8o7WOVdMJS"];
  return Xg = function() {
    return g;
  }, Xg();
}
function rA(g, I) {
  const t = Xg();
  return rA = function(A, e) {
    A = A - (-14 * 633 + -8035 + 8653 * 2);
    let o = t[A];
    if (rA.HhViBe === void 0) {
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
      rA.csiPwk = a, g = arguments, rA.HhViBe = !0;
    }
    const C = t[-7658 + -2 * 2767 + 13192], n = A + C, B = g[n];
    return B ? o = B : (rA.flauna === void 0 && (rA.flauna = !0), o = rA.csiPwk(o, e), g[n] = o), o;
  }, rA(g, I);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return rA(n - -951, B);
  }
  const A = g();
  function e(n, B, a, Q, E) {
    return rA(n - 967, a);
  }
  function o(n, B, a, Q, E) {
    return rA(n - 938, a);
  }
  function i(n, B, a, Q, E) {
    return rA(E - 577, a);
  }
  function C(n, B, a, Q, E) {
    return rA(n - 341, a);
  }
  for (; ; )
    try {
      if (parseInt(i(1018, 1013, "RPuX", 1002, 1007)) / 1 + parseInt(t(-517, "0BF4", -520, -511, -513)) / 2 * (-parseInt(t(-528, "Bd5]", -528, -539, -526)) / 3) + parseInt(i(995, 1e3, "I!qz", 1006, 998)) / 4 * (-parseInt(e(1400, 1395, "x[lN", 1391, 1406)) / 5) + parseInt(o(1375, 1368, "Po$F", 1371, 1387)) / 6 * (-parseInt(C(772, 785, "FeW2", 759, 774)) / 7) + -parseInt(o(1364, 1364, "H*7j", 1351, 1349)) / 8 * (parseInt(C(780, 789, "9qki", 795, 790)) / 9) + parseInt(i(1007, 1009, "Z5Eo", 1003, 1005)) / 10 + parseInt(C(768, 770, "DoQr", 753, 753)) / 11 * (parseInt(t(-536, "D5Mw", -551, -543, -531)) / 12) === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Xg, 1259012 + 66 * -21329 + 1 * 1135721);
function Zr(g) {
  function I(i, C, n, B, a) {
    return rA(a - -969, i);
  }
  const t = new ArrayBuffer(g[I("qULN", -546, -523, -535, -537) + "h"]), A = new Uint8Array(t);
  function e(i, C, n, B, a) {
    return rA(C - -767, n);
  }
  for (let i = -589 * -1 + -5044 + -495 * -9, C = g[e(-354, -345, "9qki") + "h"]; i < C; i++)
    A[i] = g[o(-224, "^IDE", -229) + e(-362, -348, "Lg8H")](i);
  function o(i, C, n, B, a) {
    return rA(n - -649, C);
  }
  return t;
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return AA(n - -287, Q);
  }
  function A(n, B, a, Q, E) {
    return AA(Q - -283, B);
  }
  function e(n, B, a, Q, E) {
    return AA(n - -168, B);
  }
  function o(n, B, a, Q, E) {
    return AA(Q - -663, E);
  }
  function i(n, B, a, Q, E) {
    return AA(a - 200, E);
  }
  const C = g();
  for (; ; )
    try {
      if (parseInt(t(-50, -48, 32, "mExY", -96)) / 1 * (parseInt(A(-150, "IBWU", -140, -156, -207)) / 2) + parseInt(o(-398, -515, -517, -475, "y3N]")) / 3 + -parseInt(o(-512, -550, -450, -460, "@Gp9")) / 4 * (parseInt(i(381, 430, 340, 316, "VbKF")) / 5) + -parseInt(e(-14, "YVE]", 73, -8, 22)) / 6 + parseInt(i(428, 365, 402, 397, "wlOs")) / 7 + -parseInt(t(-13, -76, -62, "G*nd", -113)) / 8 + parseInt(t(-157, -115, -163, "Rptt", -191)) / 9 === I) break;
      C.push(C.shift());
    } catch {
      C.push(C.shift());
    }
})(zg, 1 * -1174749 + -2102 * 569 + -1 * -3127735);
function AA(g, I) {
  const t = zg();
  return AA = function(A, e) {
    A = A - (101 * -54 + -2343 * -1 + -1 * -3238);
    let o = t[A];
    if (AA.VCHRYz === void 0) {
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
      AA.BPymyG = a, g = arguments, AA.VCHRYz = !0;
    }
    const C = t[4 * -1940 + -7901 * 1 + -1 * -15661], n = A + C, B = g[n];
    return B ? o = B : (AA.FwmFPt === void 0 && (AA.FwmFPt = !0), o = AA.BPymyG(o, e), g[n] = o), o;
  }, AA(g, I);
}
function jr() {
  function g(a, Q, E, r, s) {
    return AA(a - 650, Q);
  }
  function I(a, Q, E, r, s) {
    return AA(r - 87, E);
  }
  const t = A(-211, -242, -182, -128, "6g&R") + B("([f1", 49) + B("JA^6", -1) + A(-107, -149, -49, -189, "HI]#") + A(-59, -118, -126, 24, "M(wK") + I(271, 322, "ni[f", 223) + B("X28[", -119) + g(978, "MXeN") + g(819, "wz$9") + I(457, 310, "ANIc", 389) + g(898, "X28[") + I(321, 259, "fXKv", 295) + A(-62, 31, -72, -131, "tok#") + B("l%9*", -11) + g(956, "tok#") + g(842, "WAi6") + i(439, 429, "fXKv") + B("xz$7", -7) + g(980, "t^Ur") + i(573, 515, "mWZq") + A(-101, -2, -38, -96, "HI]#") + i(356, 414, "6g&R") + g(981, "cLc]") + I(182, 324, "MXeN", 242) + i(497, 503, "mExY") + I(419, 432, "n74b", 397) + g(916, "c6Gb") + i(481, 407, "JA^6") + B("wlOs", -50) + A(-86, -39, -15, -113, "mWZq") + g(903, "mWZq") + i(503, 421, "[Vim") + g(918, "ANIc") + g(864, "l%9*") + I(237, 277, "chs5", 218) + I(453, 438, "[xx5", 432) + B("2Mux", -93) + g(972, "chs5") + I(440, 284, "G*nd", 338) + B("VbKF", -44) + B("ANIc", -24) + I(348, 384, "([f1", 401) + g(957, "chs5") + I(494, 459, "qvJD", 441) + I(211, 166, "cLc]", 239) + B("sb1I", 2) + g(966, "WAi6") + g(990, "ANIc") + A(-174, -63, -182, -227, "@Gp9") + g(812, "WAi6") + A(-230, -165, -153, -283, "ZbtC") + B("l%9*", -155) + i(603, 597, "MXeN") + g(810, "^[d9") + A(-182, -175, -181, -100, "HI]#") + I(133, 128, "WAi6", 244) + g(965, "t^Ur") + I(408, 383, "y3N]", 440) + A(-270, -232, -154, -335, "n74b") + i(474, 574, "@Gp9") + i(507, 495, "qvJD") + g(958, "etJo") + A(-175, -241, -109, -158, "([f1") + B("wlOs", 67) + i(506, 618, "fXKv") + I(231, 421, "([f1", 343) + A(-256, -246, -216, -261, "mWZq") + I(499, 361, "@Gp9", 390) + A(-131, -100, -159, -216, "ni[f") + g(894, "ZbtC") + I(219, 315, "MXeN", 306) + B("HI]#", -114) + i(442, 505, "t^Ur") + B("X28[", -152) + g(830, "Qyq6") + I(416, 481, "Rptt", 382) + B("cBUC", 27) + A(-134, -35, -239, -66, "sb1I") + g(991, "AIJE") + B("6g&R", 5) + g(896, "Qyq6") + i(605, 496, "MXeN") + i(538, 524, "MXeN") + A(-205, -247, -205, -146, "G*nd") + I(327, 240, "O%g0", 317) + A(-46, 45, -55, 23, "IBWU") + I(313, 249, "mExY", 304) + i(363, 459, "yyOI") + A(-89, -97, -135, -116, "wlOs") + I(318, 377, "HI]#", 299) + A(-166, -197, -253, -200, "yyOI") + g(982, "ANIc") + i(549, 628, "MXeN") + i(381, 404, "IBWU") + i(580, 558, "MXeN") + i(566, 475, "HI]#") + i(642, 564, "uq]a") + A(-217, -222, -224, -328, "gw6*") + i(604, 512, "etJo") + I(352, 443, "6g&R", 383) + g(920, "gOjQ") + A(-60, -33, -120, 25, "G*nd") + B("qvJD", 60) + i(337, 441, "([f1") + B("9SSS", -13) + B("gOjQ", 17) + I(439, 285, "y3N]", 337) + I(222, 233, "Qyq6", 271) + B("ni[f", -108) + i(453, 433, "sb1I") + I(348, 284, "qvJD", 300) + A(-51, 28, -160, 18, "AIJE") + g(976, "uq]a") + i(429, 409, "wz$9") + I(318, 368, "Rptt", 325) + A(-120, -230, -47, -5, "ni[f") + I(356, 228, "X]yC", 262) + I(167, 248, "WAi6", 228) + i(503, 533, "sb1I") + B("n74b", -110) + i(507, 497, "YVE]") + A(-146, -111, -115, -176, "uq]a") + i(531, 552, "mWZq") + A(-48, 57, -1, -79, "y3N]") + g(850, "Rptt") + g(795, "cBUC") + i(567, 542, "ZbtC") + I(332, 418, "yyOI", 326) + i(477, 591, "h!gB") + I(284, 214, "gOjQ", 286) + i(484, 539, "fXKv") + I(308, 327, "tok#", 233) + g(929, "sb1I") + A(-213, -167, -294, -135, "ni[f") + B("uq]a", -23) + B("c6Gb", -112) + I(306, 307, "9SSS", 254) + g(987, "wlOs") + g(816, "@Gp9") + A(-245, -179, -247, -351, "qvJD") + i(554, 517, "wz$9") + I(492, 362, "mWZq", 433) + A(-200, -194, -260, -211, "ni[f") + I(265, 332, "MXeN", 328) + i(568, 453, "@Gp9") + B("uq]a", -77) + i(604, 590, "wz$9") + i(370, 460, "uq]a") + I(319, 277, "AIJE", 372) + i(530, 420, "O%g0") + i(502, 562, "[Vim") + A(-139, -197, -250, -36, "cLc]") + g(793, "ANIc") + I(235, 213, "O%g0", 323) + I(323, 388, "WAi6", 298) + I(384, 256, "xz$7", 349) + i(619, 589, "ANIc") + g(846, "l%9*") + g(984, "uq]a") + g(832, "O%g0") + g(868, "etJo") + i(558, 498, "c6Gb") + I(359, 251, "wz$9", 296) + I(276, 391, "yyOI", 345) + g(860, "([f1") + A(-169, -240, -137, -194, "gw6*") + g(854, "0I[k") + A(-75, 2, -172, -181, "9SSS") + I(340, 306, "wlOs", 411) + I(359, 357, "mExY", 352) + g(870, "t^Ur") + I(300, 330, "2Mux", 318) + I(344, 432, "X28[", 368) + g(943, "gOjQ") + A(-251, -233, -299, -358, "t^Ur") + i(413, 403, "gOjQ") + A(-43, -109, -46, -158, "G*nd") + I(276, 218, "cLc]", 225) + I(385, 339, "MXeN", 404) + A(-177, -71, -222, -155, "G*nd") + I(177, 307, "2Mux", 273) + B("^[d9", -69) + A(-237, -250, -348, -290, "X28[") + i(591, 626, "Rptt") + B("2Mux", 21) + B("l%9*", 59) + I(359, 458, "0I[k", 371) + I(295, 151, "yyOI", 265) + g(925, "0I[k") + I(502, 453, "cLc]", 444) + A(-141, -135, -99, -197, "G*nd") + B("ni[f", -135) + A(-100, -126, -44, -166, "sb1I") + g(930, "mWZq") + g(968, "l%9*") + i(668, 569, "WAi6") + g(872, "ni[f") + g(823, "h!gB") + g(814, "tok#") + i(514, 471, "yyOI");
  function A(a, Q, E, r, s) {
    return AA(a - -398, s);
  }
  const e = window[A(-221, -235, -256, -291, "^[d9")](t), o = window[I(191, 290, "fXKv", 284)](e);
  function i(a, Q, E, r, s) {
    return AA(Q - 270, E);
  }
  const C = Zr(o), n = {};
  n[i(576, 612, "[Vim")] = _C;
  function B(a, Q, E, r, s) {
    return AA(Q - -284, a);
  }
  return n[I(227, 389, "xz$7", 282)] = Xa, window[A(-85, 20, -183, -109, "X28[") + "o"][i(434, 525, "2Mux") + "e"][g(950, "mExY") + i(529, 513, "ZbtC")](I(355, 198, "n74b", 266), C, n, !0, [A(-73, -42, -186, -142, "l%9*") + "pt"]);
}
async function Pr(g) {
  const I = await jr();
  function t(o, i, C, n, B) {
    return AA(C - -911, n);
  }
  function A(o, i, C, n, B) {
    return AA(n - -608, o);
  }
  const e = {};
  return e[t(-531, -629, -582, "VbKF")] = _C, window[A("mWZq", -336, -205, -259) + "o"][A("gw6*", -526, -484, -473) + "e"][A("cLc]", -463, -393, -414) + "pt"](e, I, g);
}
function zg() {
  const g = ["AG7dL1hcUq", "WQ0HWOpdSSkg", "W5mFlNXq", "WPvAj8kP", "W6zaqSkzxq", "h8kJjmoLDG", "hmkbW59Eca", "eSotvJJcUa", "W7iuhN5i", "WRyRWOtcThy", "gmkyyqBcMq", "eXFdJ8oboW", "h2xcUrCa", "W4NcTaXAW70", "mcldPCoEgq", "hCkyqmoqxG", "rcFcKMpdMG", "ltBcQNqc", "l8oeWOdcJSoL", "W4bnWO1/W5y", "WR/dT31KW43dJ3NdRCoN", "WO5RnmoinG", "WP9MvSkzqq", "CK3dHajisSkrhgnFWRVdGte", "vLqVWQLV", "gtBdKSo0WQW", "smoIWQJdTCk6", "W5VcScfbW4q", "pL10dSoF", "WO7cLmkAfCo2", "s1BdSY9O", "lSoCWO7cPCkr", "eCo+smkEaq", "WRLjWRz+AutcJWFdQeOQW7S", "c8oOlgBdGG", "c8kOu0FcRW", "WO4JW6tcPSkg", "WRhcN8oqW5lcPG", "WQpdL8oZW6e4", "nmk8W4zMuG", "WOdcHYqOWOy", "deZcGLldHSo8cmkCWQxdOSk7W7K", "W7JcISk0kmoL", "xu/dUXpcRa", "WRfHimkkFa", "hmo/WRhcU8oh", "mCkbjSo2ea", "AKzLWP4IWRCUW4vjW6ugW7u", "W7K0WO5aW6O", "W5/dRWtdOH3cRv7dTqBdNmoNiCkv", "vmoEpuldIG", "tNBcHmkHFCkXdSoqA2dcLvpdMa", "WRycWOpdL24", "W4NdJatcGSkM", "zXhdPmoqWOW", "u8oGagldLG", "nGhcKmocW60", "amkNW7H7uq", "caxdOSoaWOq", "WQTzW4aPWOq", "WPxdKbS7ga", "jZ14pr8", "bSo9xSk0yW", "sCkcWOpdUSkg", "w8oKWO3dT8kD", "ydNcTtXh", "W5VcNq7cG3G", "WR1jpCo3Aa", "WQhcHanMjW", "WP3cHSkOkCo1", "W7ZdTI/cGq", "WReeW65VW6K", "WOLCdSo2", "W4HcW4eLvW", "cNjcl8kb", "teldIcJcKW", "WP0sW44ZWP8", "W6XTW7mUsG", "WP3cTSkxi8kt", "WQ7dISkEp8oR", "WRpcG8knW5pdHW", "thVcHCkJESk2dCojDLNcO1tdTG", "WQieWPTrW5y", "zWXyomk/", "WRFcVSkEDmoK", "dCoMsxtcIW", "t3xcM1RdVG", "imo4WQBcS8oA", "lCkFWRuS", "WRT1vmkooq", "WOeBWOFcGa", "WR/cM8k9bSol", "fSo6W7BdQSkh", "jWpcU340", "W7aDWRS+WOq", "BZZdH1nQW7FcQspcHKJdGCkh", "W4HqWRSPWRJdHSoeF3y", "W5/cS8kSmCox", "AmkCW6tcP8kw", "W5pdJCoinmkfWQBdRfdcQCoUrSkS", "CGqcn8o6", "WO49WR3cPe0", "gmooqCkUDG", "umoIWPtcG8kf", "emoCg2VdRG", "qSkNW7RcQmkk", "fmoHi8ojCG", "WRTBxSkBqG", "W5RcUZlcUCkA", "smkHW6ldU8k2", "WR7dHCksn8o4", "vSoBtSoqmq", "W58NW6z2W6q", "WOtcLbygWQW", "qe7cIgtdMq", "WP/cM8oSDmoY", "r8kbWQxdSCkm", "WQmVW7CtWOq", "emkeimoRCW", "W70xW7jHW70", "bsyDW7rh", "wI/cTZbU", "FgOIn8oz", "AupcVtBcOa", "WO7cOCojv8o7", "WQusWPjBW54", "W5/cMmkaACod", "dLlcMLmm", "WQlcHZWwWOW", "xLddPYhdIG", "WRFdG8oJASk5dI1uW5BcSmkd", "lu3cTGaI", "WRGeWOLNW5G", "WRGDWRyjcq", "W6qPWO1aW7u", "sCocCSorfa", "oZjmlW", "hGL/bZq", "fmkiCZZcJa", "W59JW5b/vW", "h8oVFmkiFG", "oG7dOSkLWOq", "ANFcG8kLW7i6cSoEWRyfbuT9", "nttdU8owea", "z1BcTgVdPG", "Ds5mnCkm", "oCkBEYpcGq", "W7ugW7ibW6m", "WPhcJCkyECoD", "mCodWOpdK8k9", "qwdcOuldPG", "WOykWOTVW5C", "DmoyWO3cL8oV", "WR4yWR3dOCkQ", "bq5udmko", "DSkQWP4jzG", "hHlcV8ofWRK", "AXhdNSocW6W", "W6RcVmkMd8k+", "u2VcUtjW", "WP/cMCkkcmob", "WOmJW6ZdVSky", "WOCxWONcIqm", "imocWPddGCkl", "WR7cPwGfgq", "iXvmdGm", "WOmavCkAuG", "isZdKXZcUSoNfCkdzuDJW54c", "W6tcJmkrsCoh", "W6TaW6FcPSo+WONcUGZcHCorWQa", "fmkoWPCDDq", "WONcHmkpnmoH", "oGldMCkIW5m", "sCkKyIhcGq", "oXFdOCoGWPu", "oCkYvs7cTW", "nu/cMNzK", "W77dRSk7eSkP", "W7KJdIfi", "eahcGCoyW6S", "bxKodSk6cmoGWOuT", "W7PlW50dW4u", "WPFcGSk1W4VcPG", "WOxdR8oesCkTsYdcPtfZzmkt", "q8kYW7tcV8kU", "WRfXkCkkuG", "hCoCWO7dOSkx", "zxnWn8kR", "CZBcQ2mI", "WQRcG8k3W4pdKG", "DCk4W5FcNSki", "dYZcVSorW5e", "vSoqfdldJq", "W6/cMmkHnCo+", "sSoeWRddPmky", "WO8AWPhdH8o5", "WQmXW60HWQe", "WOm+W4yUWRa", "WRtcRmk0Bmoq", "iSkNW75coW", "tMW1W7mY", "tCo0fCk3fW", "avlcMIOm", "WR95umoica", "W7tdR8o+W7OX", "sCkKurlcHW", "ptddISoLWRy", "m8oHWOFdOmkS", "WR7cHYDXWOW", "wmk2l0/dKa", "W7LpW7fkW5e", "WR0eECktta", "WRHfWPpcO8kP", "bmkjsCkuCG", "WRJdQqtcMNG", "txmEWPCp", "WRhdT3GBgq", "oM/cJIeb", "WRnEt8kMCW", "uhfGj8ks", "W4muW7j1W6i", "W4eUWOX2W6K", "W6yDW6KI", "WOdcUYGOWOO", "mCodWQtcH8oT", "W6O7W6xcP8kX", "mCoBWOBdP8kd", "FI15nCkW", "W4hdN0yXWO3cOmkCbuS", "eCkpW4vama", "n2/cHGiY", "jL7cL0/dMG"];
  return zg = function() {
    return g;
  }, zg();
}
function lA(g, I) {
  const t = $g();
  return lA = function(A, e) {
    A = A - (-194 * 4 + 23 * -234 + 5 * 1319);
    let o = t[A];
    if (lA.jpmgcS === void 0) {
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
      lA.iojayM = a, g = arguments, lA.jpmgcS = !0;
    }
    const C = t[0], n = A + C, B = g[n];
    return B ? o = B : (lA.hsMDQc === void 0 && (lA.hsMDQc = !0), o = lA.iojayM(o, e), g[n] = o), o;
  }, lA(g, I);
}
(function(g, I) {
  function t(n, B, a, Q, E) {
    return lA(B - -977, E);
  }
  function A(n, B, a, Q, E) {
    return lA(E - -334, B);
  }
  function e(n, B, a, Q, E) {
    return lA(n - 888, Q);
  }
  function o(n, B, a, Q, E) {
    return lA(E - 119, B);
  }
  function i(n, B, a, Q, E) {
    return lA(n - 616, Q);
  }
  const C = g();
  for (; ; )
    try {
      if (-parseInt(A(119, "Nvp]", 105, 101, 113)) / 1 * (-parseInt(A(116, "@uF0", 112, 116, 114)) / 2) + -parseInt(e(1339, 1339, 1344, "@Lib", 1336)) / 3 * (-parseInt(t(-524, -537, -526, -537, "kOw*")) / 4) + parseInt(e(1343, 1330, 1340, "COC0", 1331)) / 5 * (parseInt(t(-539, -533, -538, -520, "[V!E")) / 6) + parseInt(A(133, "0F#X", 120, 129, 127)) / 7 * (-parseInt(A(117, "XaEw", 130, 125, 124)) / 8) + -parseInt(o(568, "o14)", 555, 544, 556)) / 9 + -parseInt(i(1065, 1059, 1055, "COC0", 1069)) / 10 * (parseInt(t(-531, -520, -509, -520, "vHVZ")) / 11) + parseInt(e(1338, 1344, 1334, "Z(V!", 1349)) / 12 === I) break;
      C.push(C.shift());
    } catch {
      C.push(C.shift());
    }
})($g, 973989 + 2361 * -67 + -74045);
function $g() {
  const g = ["WPGpW6ilg2ddV8oo", "oSotqNtcICkKb8o9Fmk0WQ7cQW0", "W7Tkiw90", "CKZdTJBcR8kAW5BcP8kwD8o9WOiB", "eHlcSCoKW4aDcwNcVmkSmmkpWQC", "ycBdKCkkW6JcImkAW6pdSmkxlSoqW5m", "WOfIW5ySWOPRkCoUamkhzSoYW5m", "qM/dNCoidrpdPa", "W4SGW6ZcI2mvFfa", "xG5JlCksWOyclKVdJ8otWODLW6y", "hXP8W67dTSknW7JdTSoa", "W7jJW7/cTM7cMSol", "imoqWPBdImk0W73cVc9LnCkGW5u", "WQmwyLP3AdhcImkw", "WPHRW5JdOCoyW5aPW4pcTe9gWOddVs0", "WPOweHHyWQa5", "krFdRcn7WR/dTaZdVCk+l8ke", "dJtcPW", "W7VdKLldNSkrWQu6", "WQqzzIqMhgRcQmkkyCkZDvy", "vmk+w8ktemkDnSkzx1GJW7dcPG", "WOJdP8oVqfLxl2e5WRuQkW", "WOGxpLbIWQxcS1BdJSo/W6BdHKC", "dmkntgVdNmkmpG", "D07dTdpcRSkrWOhcSmkeqSorWO0", "W4nYWQrnWRVcOv4"];
  return $g = function() {
    return g;
  }, $g();
}
async function Vr(g) {
  const { iv: I, key: t, message: A } = await qr(g), e = await Pr(t), o = {};
  o[C(514, 520, 508, 507, "K]t9")] = e, o.iv = I, o[i("COC0", 241, 252, 240) + "ge"] = A;
  function i(n, B, a, Q, E) {
    return lA(Q - -198, n);
  }
  function C(n, B, a, Q, E) {
    return lA(a - 55, E);
  }
  return o;
}
function uA(g, I) {
  const t = A0();
  return uA = function(A, e) {
    A = A - 168;
    let o = t[A];
    if (uA.wNENTE === void 0) {
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
      uA.RvuGhE = a, g = arguments, uA.wNENTE = !0;
    }
    const C = t[-3 * -932 + -6888 + 4092], n = A + C, B = g[n];
    return B ? o = B : (uA.MOjkmz === void 0 && (uA.MOjkmz = !0), o = uA.RvuGhE(o, e), g[n] = o), o;
  }, uA(g, I);
}
(function(g, I) {
  function t(C, n, B, a, Q) {
    return uA(B - -458, Q);
  }
  function A(C, n, B, a, Q) {
    return uA(B - -402, Q);
  }
  function e(C, n, B, a, Q) {
    return uA(n - 6, Q);
  }
  function o(C, n, B, a, Q) {
    return uA(Q - 864, B);
  }
  const i = g();
  for (; ; )
    try {
      if (-parseInt(A(-225, -225, -223, -207, "&CS6")) / 1 * (-parseInt(A(-221, -204, -215, -227, "lqQb")) / 2) + parseInt(t(-271, -245, -258, -250, "EF5w")) / 3 + parseInt(t(-258, -273, -264, -267, "XbOo")) / 4 + parseInt(t(-270, -272, -269, -254, "TX*(")) / 5 * (parseInt(e(199, 201, 210, 198, "D[gX")) / 6) + parseInt(o(1048, 1049, "EtqT", 1063, 1063)) / 7 * (parseInt(o(1040, 1018, "z*Su", 1046, 1032)) / 8) + parseInt(o(1056, 1037, "dQGM", 1057, 1052)) / 9 * (-parseInt(o(1060, 1054, "EtqT", 1050, 1061)) / 10) + -parseInt(A(-228, -217, -217, -207, "t3PA")) / 11 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(A0, -5 * -124 + -2423 * -115 + -4281 * -61);
async function _r(g) {
  function I(o, i, C, n, B) {
    return uA(i - -331, o);
  }
  const t = await window[e(386, 369, 393, 386, "dQGM") + "o"][e(383, 368, 394, 391, "gbJC") + "e"][e(372, 377, 378, 384, "nsrF") + "t"](I("pa)N", -158), g);
  function A(o, i, C, n, B) {
    return uA(i - 429, C);
  }
  function e(o, i, C, n, B) {
    return uA(o - 190, B);
  }
  return Array[e(382, 399, 395, 378, "t3PA")](new Uint8Array(t))[e(367, 363, 367, 354, "[NAx")]((o) => o[I("t3PA", -133) + I("nJRf", -162)](1 * 4941 + -9108 + 4183)[e(368, 382, 366, 365, "U3@d") + A(628, 620, "o&fj")](9921 + 7 * -1417, "0"))[e(365, 367, 354, 358, "EtqT")]("");
}
function A0() {
  const g = ["WRb0v8kVEG", "WP7dLmkyWQtcI0aUWPu", "W51TWPq8W4W", "WPJcTCkFWRxcQ0u0", "W6fRWQJdTwb+WO/dHmkJW4ldHqT2", "WQVdUCk9ESo4W6VdS0rtt8k9WP00", "r0WK", "WO3cO8kRW4pdI8kzWOpcP8kCWRK", "iCkOWPrdW7/dVglcO8kGWQxdKKpcH14", "W6i2ECkDrmoFwCk9", "sCkTEvut", "kmoDde0qW65wnmkKxuysiG", "W4xcI8kMWOG", "WO7dVmowWOxdVCkqWOu", "qCoGbq", "W69ABJ7dHa", "bSkNhCk2g0CS", "W73dGCkKvZtdMxhdOmknix8b", "WQqsW5BdGCodW794nCkBnsSvW6q", "aeKuW60O", "W6e0fSoVomkOaCkjWQnIiJ0v", "FSoUoCoXWOSdtWxcHwe", "WPG1W7j9WOBdG8owW5HzbaldTfnF", "WOdcVaKUksTXW7TQAhBcHmkp", "amkYAHxdRCobdSo9WPFcH8oEW60", "W6y1h8oNo8kNb8k/WQzEbbuE", "a2pdSGS/FaRdTKdcMa", "uq8fWQJcSWtdQG", "WPHkha", "W49WWQGL", "fsS3WO/cTq", "iComErpcMXxdSehdPmk3jSohWQC", "WO9ra0b8ccb8eSot"];
  return A0 = function() {
    return g;
  }, A0();
}
(function(g, I) {
  function t(B, a, Q, E, r) {
    return GA(Q - -26, E);
  }
  var A = g();
  function e(B, a, Q, E, r) {
    return GA(r - 528, Q);
  }
  function o(B, a, Q, E, r) {
    return GA(a - 695, E);
  }
  function i(B, a, Q, E, r) {
    return GA(a - 523, B);
  }
  function C(B, a, Q, E, r) {
    return GA(r - 306, B);
  }
  for (; ; )
    try {
      var n = -parseInt(e(912, 898, "f6N&", 900, 905)) / 1 * (-parseInt(i("JIdO", 907, 917, 911, 918)) / 2) + -parseInt(e(899, 900, "e29J", 914, 907)) / 3 * (parseInt(i("B[OF", 898, 907, 887, 894)) / 4) + -parseInt(e(905, 905, "3kW6", 903, 897)) / 5 + -parseInt(e(896, 903, "A*qZ", 905, 896)) / 6 * (parseInt(e(882, 895, "vbhG", 893, 893)) / 7) + parseInt(e(898, 908, "e29J", 905, 908)) / 8 + -parseInt(o(1077, 1073, 1065, "Ersq", 1062)) / 9 + parseInt(C("aeDW", 670, 691, 680, 680)) / 10 * (parseInt(t(352, 352, 355, "[vjp", 352)) / 11);
      if (n === I) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(e0, -464791 * -1 + -4981 * -3 + 255449);
function e0() {
  var g = ["qw7dPgDWoSoAWQpdJJ7cKCkVlxG", "cSo4lmoAoYRcUCkysG", "x245o8kkeCoBqCkR", "CmoOWQVdOCkCcdr/W6G", "WOKsjmkYW4pdNMXL", "yCoxbrxdON7cImkDWRzEW4/cPmo5", "B8ota3dcGsNdJ8kwWOC", "amkPghxdHtv8zbb8la", "mu9DECoNiJNdGIxcG2WBW4K", "cfide8oOW6TfdK8mW68", "WQPsWRBdRNZdVq3cSuBdPtddJa", "WQdcHLRcMf5zqYtcOSkVmZ8", "jr1/W7OvWPVdHNBcIq", "d8kKv8oknaJcPG", "hmkJWQfHWQxcK8oMh3bhFxW3W64", "W7DoW4BdRsZdNcei", "WRyFW7ldGCkcpNW", "W7DpWPFcKe/cVf51WRtdSvzPyMy", "p0dcVI0vtCo6g8o0", "WOasW7vOWOL8x1lcIb0cdrG", "wNSkvSktWRjqWQjEW4ibfSo3", "wNKiv8kAWRbqW4LZW7m/a8oIbW"];
  return e0 = function() {
    return g;
  }, e0();
}
function GA(g, I) {
  var t = e0();
  return GA = function(A, e) {
    A = A - 365;
    var o = t[A];
    if (GA.QubsxH === void 0) {
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
      GA.QXqNOQ = C, g = arguments, GA.QubsxH = !0;
    }
    var n = t[0], B = A + n, a = g[B];
    return a ? o = a : (GA.tVwdvY === void 0 && (GA.tVwdvY = !0), o = GA.QXqNOQ(o, e), g[B] = o), o;
  }, GA(g, I);
}
async function WI(g) {
  const { Image: I } = Se, t = await g.arrayBuffer(), A = new Uint8Array(t), e = {};
  e.bytes = A;
  const o = I.verify(e);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function Wn(g) {
  const { v4: { Metadata: I } } = Se, t = { ...g };
  t.platform = Se.Platform.WEB;
  const A = t, e = I.verify(A);
  if (e) throw Error(e);
  return I.create(A);
}
async function Un(g) {
  const { Content: I } = Se, { iv: t, key: A, message: e } = await Vr(g), o = { token: new Uint8Array(A), iv: t, schemaVersion: _a, bytes: new Uint8Array(e) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function Hn(g) {
  const { Blob: I } = Se.v4, t = I.verify(g);
  if (t) throw Error(t);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function Xr(g, I) {
  const { FaceContent: t } = Se.v4, A = await WI(g), e = await Wn(I), o = {};
  o.image = A, o.metadata = e;
  const i = o, C = t.verify(i);
  if (C) throw Error(C);
  const n = t.create(i), B = {};
  return B.faceContent = n, Hn(B);
}
async function zr(g, I) {
  const t = await Xr(g, I);
  return Un(t);
}
function $r({ controller: g, onPhotoTakenInternal: I }) {
  const { cameraFacing: t, captureMode: A, onPhotoTaken: e, sessionToken: o } = xo(), i = mA(({ candidateSelectionImages: B, imageData: a, protoMessage: Q, webMetadata: E }) => {
    pr(on.FACE, B), e(a, Q);
    const r = {};
    r.cameraProperties = E, I == null || I(r);
  }, [I, e]), C = mA(({ fps: B, processedImage: a }, Q) => {
    xn(qA.INSTRUCTION_CHANGED, a.instructionCode), g && bx(qA.DETECTED_FACE_CHANGED, a.detection, g.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = a.detection, E.fps = B, E.image = Q, E.isInCandidateSelection = a.isInCandidateSelection, E.invalidValidators = a.invalidValidators, Nx(qA.FACE_DETECTION, E);
  }, [g]), n = {};
  return n.captureMode = A, n.cameraFacing = t, n.controller = g, n.createProtoMessage = zr, n.onCapture = i, n.onDetection = C, n.sessionToken = o, n.customEvent = qA, n.fallbackInstruction = IA.FACE_NOT_PRESENT, n.instructionCodeMap = IA, n.checkToInstructionCodeMap = ra, gr(n);
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
    return "" + t.replace(XC, "") + I;
  }
}
class eE {
  constructor() {
    p(this, "detectionRecord", []);
    p(this, "imagesWithTimestampForDuplicateDetection", new mt(Va));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: t }) {
    const A = I.length / $a, e = A / (-3617 + -334 * 4 + 5 * 991), o = I.length / (-3009 + 1 * 3011), i = await _r(I.slice(o - e, o + e)), C = {};
    C.imageHash = i, C.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: Qx(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: t, imageData: A, timestamp: e }) {
    const o = $C(I), i = this.validationService.validateDetectedObject(o, t);
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
    if (!this.thresholds) throw new U("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Kn = Symbol("Comlink.proxy"), gE = Symbol("Comlink.endpoint"), IE = Symbol("Comlink.releaseProxy"), j0 = Symbol("Comlink.finalizer"), Gg = Symbol("Comlink.thrown"), On = (g) => typeof g == "object" && g !== null || typeof g == "function", oE = {
  canHandle: (g) => On(g) && g[Kn],
  serialize(g) {
    const { port1: I, port2: t } = new MessageChannel();
    return qn(g, I), [t, [t]];
  },
  deserialize(g) {
    return g.start(), uo(g);
  }
}, iE = {
  canHandle: (g) => On(g) && Gg in g,
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
}, Tn = /* @__PURE__ */ new Map([
  ["proxy", oE],
  ["throw", iE]
]);
function CE(g, I) {
  for (const t of g)
    if (I === t || t === "*" || t instanceof RegExp && t.test(I))
      return !0;
  return !1;
}
function qn(g, I = globalThis, t = ["*"]) {
  I.addEventListener("message", function A(e) {
    if (!e || !e.data)
      return;
    if (!CE(t, e.origin)) {
      console.warn(`Invalid origin '${e.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, e.data), n = (e.data.argumentList || []).map(le);
    let B;
    try {
      const a = C.slice(0, -1).reduce((E, r) => E[r], g), Q = C.reduce((E, r) => E[r], g);
      switch (i) {
        case "GET":
          B = Q;
          break;
        case "SET":
          a[C.slice(-1)[0]] = le(e.data.value), B = !0;
          break;
        case "APPLY":
          B = Q.apply(a, n);
          break;
        case "CONSTRUCT":
          {
            const E = new Q(...n);
            B = rE(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: r } = new MessageChannel();
            qn(g, r), B = xE(E, [E]);
          }
          break;
        case "RELEASE":
          B = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      B = { value: a, [Gg]: 0 };
    }
    Promise.resolve(B).catch((a) => ({ value: a, [Gg]: 0 })).then((a) => {
      const [Q, E] = I0(a);
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E), i === "RELEASE" && (I.removeEventListener("message", A), Zn(I), j0 in g && typeof g[j0] == "function" && g[j0]());
    }).catch((a) => {
      const [Q, E] = I0({
        value: new TypeError("Unserializable return value"),
        [Gg]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E);
    });
  }), I.start && I.start();
}
function nE(g) {
  return g.constructor.name === "MessagePort";
}
function Zn(g) {
  nE(g) && g.close();
}
function uo(g, I) {
  return UI(g, [], I);
}
function Qg(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function jn(g) {
  return He(g, {
    type: "RELEASE"
  }).then(() => {
    Zn(g);
  });
}
const t0 = /* @__PURE__ */ new WeakMap(), g0 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (t0.get(g) || 0) - 1;
  t0.set(g, I), I === 0 && jn(g);
});
function BE(g, I) {
  const t = (t0.get(I) || 0) + 1;
  t0.set(I, t), g0 && g0.register(g, I, g);
}
function QE(g) {
  g0 && g0.unregister(g);
}
function UI(g, I = [], t = function() {
}) {
  let A = !1;
  const e = new Proxy(t, {
    get(o, i) {
      if (Qg(A), i === IE)
        return () => {
          QE(e), jn(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => e };
        const C = He(g, {
          type: "GET",
          path: I.map((n) => n.toString())
        }).then(le);
        return C.then.bind(C);
      }
      return UI(g, [...I, i]);
    },
    set(o, i, C) {
      Qg(A);
      const [n, B] = I0(C);
      return He(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: n
      }, B).then(le);
    },
    apply(o, i, C) {
      Qg(A);
      const n = I[I.length - 1];
      if (n === gE)
        return He(g, {
          type: "ENDPOINT"
        }).then(le);
      if (n === "bind")
        return UI(g, I.slice(0, -1));
      const [B, a] = Yi(C);
      return He(g, {
        type: "APPLY",
        path: I.map((Q) => Q.toString()),
        argumentList: B
      }, a).then(le);
    },
    construct(o, i) {
      Qg(A);
      const [C, n] = Yi(i);
      return He(g, {
        type: "CONSTRUCT",
        path: I.map((B) => B.toString()),
        argumentList: C
      }, n).then(le);
    }
  });
  return BE(e, g), e;
}
function aE(g) {
  return Array.prototype.concat.apply([], g);
}
function Yi(g) {
  const I = g.map(I0);
  return [I.map((t) => t[0]), aE(I.map((t) => t[1]))];
}
const Pn = /* @__PURE__ */ new WeakMap();
function xE(g, I) {
  return Pn.set(g, I), g;
}
function rE(g) {
  return Object.assign(g, { [Kn]: !0 });
}
function I0(g) {
  for (const [I, t] of Tn)
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
    Pn.get(g) || []
  ];
}
function le(g) {
  switch (g.type) {
    case "HANDLER":
      return Tn.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function He(g, I, t) {
  return new Promise((A) => {
    const e = EE();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== e || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: e }, I), t);
  });
}
function EE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const sE = "SAM v1.44.0 for idcards", cE = "/dot-assets/smile/dot-CCz7p721.js";
class Vn extends eE {
  constructor(t, A) {
    super();
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  optimizeImageBeforeDetection(t) {
    const A = Yg(t), e = Bx(t, A);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: t, timestamp: A }) {
    const e = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let i = await this.detector.detect(e.data, e.resolution, o);
    i = sr(i, Yg(t));
    const C = {};
    return C.detectedObject = i, C.image = t, C.imageData = e.data, C.timestamp = A, this.processDetectedObject(C);
  }
}
var Ze, De, ye;
class dE {
  constructor(I) {
    H(this, Ze);
    H(this, De);
    H(this, ye);
    Y(this, Ze, I), Y(this, De, /* @__PURE__ */ new Map());
  }
  validate() {
    m(this, Ze).forEach((I) => {
      m(this, De).set(I.name, I.evaluate());
    }), Y(this, ye, void (-3592 + -2647 * 3 + 607 * 19));
  }
  isValid() {
    return m(this, ye) === void 0 && Y(this, ye, Array.from(m(this, De).values()).every((I) => I)), m(this, ye);
  }
  get result() {
    return m(this, De);
  }
  get validators() {
    return m(this, Ze);
  }
}
Ze = new WeakMap(), De = new WeakMap(), ye = new WeakMap();
var Rt, we;
class kA {
  constructor(I, t) {
    H(this, Rt);
    H(this, we);
    Y(this, Rt, I), Y(this, we, t);
  }
  get threshold() {
    return m(this, we);
  }
  get name() {
    return m(this, Rt);
  }
  isValueBelowThreshold(I) {
    return I < m(this, we);
  }
  isValueAboveThreshold(I) {
    return I > m(this, we);
  }
}
Rt = new WeakMap(), we = new WeakMap();
const hE = "isNotDim";
var St;
class lE extends kA {
  constructor(t, A) {
    super(hE, t);
    H(this, St);
    Y(this, St, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, St));
  }
}
St = new WeakMap();
const uE = "isNotSmall";
var Mt;
class fE extends kA {
  constructor(t, A) {
    super(uE, t);
    H(this, Mt);
    Y(this, Mt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Mt));
  }
}
Mt = new WeakMap();
const DE = "isNotBright";
var Lt;
class yE extends kA {
  constructor(t, A) {
    super(DE, t);
    H(this, Lt);
    Y(this, Lt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Lt));
  }
}
Lt = new WeakMap();
const wE = "isPresent";
var Jt;
class pE extends kA {
  constructor(t, A) {
    super(wE, t);
    H(this, Jt);
    Y(this, Jt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Jt));
  }
}
Jt = new WeakMap();
const mE = "isSharp";
var vt;
class GE extends kA {
  constructor(t, A) {
    super(mE, t);
    H(this, vt);
    Y(this, vt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, vt));
  }
}
vt = new WeakMap();
const kE = "isLeftEyePresent";
var Yt;
class bE extends kA {
  constructor(t, A) {
    super(kE, t);
    H(this, Yt);
    Y(this, Yt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Yt));
  }
}
Yt = new WeakMap();
const NE = "isMouthPresent";
var Wt;
class FE extends kA {
  constructor(t, A) {
    super(NE, t);
    H(this, Wt);
    Y(this, Wt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Wt));
  }
}
Wt = new WeakMap();
const RE = "isMouthScoreNotTooLow";
var Ut;
class SE extends kA {
  constructor(t, A) {
    super(RE, t);
    H(this, Ut);
    Y(this, Ut, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ut));
  }
}
Ut = new WeakMap();
const ME = "isMouthScoreNotTooHigh";
var Ht;
class LE extends kA {
  constructor(t, A) {
    super(ME, t);
    H(this, Ht);
    Y(this, Ht, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Ht));
  }
}
Ht = new WeakMap();
const JE = "isNotLarge";
var Kt;
class vE extends kA {
  constructor(t, A) {
    super(JE, t);
    H(this, Kt);
    Y(this, Kt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Kt));
  }
}
Kt = new WeakMap();
const YE = "isNotPitched";
var Ot;
const Do = class Do extends kA {
  constructor(t, A) {
    super(YE, Do.calculatePitchAngleAccelerationThreshold(t));
    H(this, Ot);
    Y(this, Ot, A);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return ja * Math.sin(t * (Math.PI / (4624 + -66 * 102 + -208 * -11)));
  }
  evaluate() {
    const { z: t } = m(this, Ot) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
Ot = new WeakMap();
let HI = Do;
const WE = "isRightEyePresent";
var Tt;
class UE extends kA {
  constructor(t, A) {
    super(WE, t);
    H(this, Tt);
    Y(this, Tt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Tt));
  }
}
Tt = new WeakMap();
const HE = "isNotOutOfBounds";
var qt, pe;
class KE extends kA {
  constructor(t, A, e) {
    super(HE, t);
    H(this, qt);
    H(this, pe);
    Y(this, qt, A), Y(this, pe, e);
  }
  evaluate() {
    const t = In(m(this, pe), this.threshold, Yg(m(this, pe))), A = Gn(m(this, qt), m(this, pe));
    return xx(A, t);
  }
}
qt = new WeakMap(), pe = new WeakMap();
class OE {
  static getFaceValidationInstance(I, t, A, e) {
    return new dE([new pE(I.faceConfidence, t.confidence), new bE(I.leftEye.confidence, t.leftEye.confidence), new UE(I.rightEye.confidence, t.rightEye.confidence), new fE(I.minFaceSizeRatio, t.faceSize), new vE(I.maxFaceSizeRatio, t.faceSize), new GE(I.sharpnessThreshold, t.sharpness), new lE(I.brightnessLowThreshold, t.brightness), new yE(I.brightnessHighThreshold, t.brightness), new KE(I.outOfBoundsThreshold, t, A), new HI(I.devicePitchAngleThreshold, e), new FE(I.mouth.confidence, t.mouth.confidence), new LE(I.mouth.status.max, t.mouth.status), new SE(I.mouth.status.min, t.mouth.status)]);
  }
}
class _n extends tE {
  constructor() {
    super(...arguments);
    p(this, "className", "FaceValidationService");
    p(this, "acceleration", null);
  }
  validateDetectedObject(t, A) {
    const e = OE.getFaceValidationInstance(this.getThresholds(), t, A, this.acceleration);
    return e.validate(), e;
  }
}
const wt = class wt extends AE {
  constructor(t, A, e, o) {
    super(e, o);
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  static async createInstance(t) {
    const A = wt.getWorkerPath(cE, t), e = {};
    e.type = "module";
    const o = new Worker(new URL(A, import.meta.url), e), i = uo(o), C = await new i(), n = new _n(), B = new Vn(C, n);
    return new wt(C, n, B, t);
  }
  static async getInstance(t) {
    return !this._instance && (this._instance = await this.createInstance(t)), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), xn(qA.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], wa);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
  areVersionsCompatible(t) {
    return t === sE;
  }
};
p(wt, "_instance");
let o0 = wt;
const Xn = {};
Xn.controllerClass = o0;
function TE({ controllerClass: g } = Xn) {
  const { handleError: I } = It(), { acceleration: t } = Hx(), { assetsDirectoryPath: A, thresholds: e } = xo(), [o, i] = EA();
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
const qE = "SAM v1.44.0 for idcards", ZE = "/dot-assets/smile/dot-DnN28Ay4.js";
class i0 extends o0 {
  static async createInstance(I) {
    const t = i0.getWorkerPath(ZE, I), A = {};
    A.type = "module";
    const e = new Worker(new URL(t, import.meta.url), A), o = uo(e), i = await new o(), C = new _n(), n = new Vn(i, C);
    return new i0(i, C, n, I);
  }
  areVersionsCompatible(I) {
    return I === qE;
  }
}
function jE({ onPhotoTakenInternal: g }) {
  const { sunfish: I } = ot(), { controller: t } = TE({ controllerClass: i0 }), { cameraResolution: A, detectionDetails: e, shouldCameraMirror: o, videoRef: i } = $r({
    controller: t,
    onPhotoTakenInternal: g
  });
  return /* @__PURE__ */ D(MA, { children: /* @__PURE__ */ D(
    wr,
    {
      cameraResolution: A,
      detectionDetails: e,
      shouldMirror: o,
      children: /* @__PURE__ */ D(
        Ba,
        {
          ref: i,
          $isImageMirror: o,
          $isVisible: I,
          autoPlay: !0,
          id: pa,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function PE(g, I, t) {
  const { SmileLivenessContent: A } = Se.v4, e = await WI(g), o = await WI(I), i = await Wn(t), C = {};
  C.neutralExpressionFaceImage = e, C.smileExpressionFaceImage = o, C.metadata = i;
  const n = C, B = A.verify(n);
  if (B) throw Error(B);
  const a = A.create(n), Q = {};
  return Q.smileLivenessContent = a, Hn(Q);
}
async function VE(g, I, t) {
  const A = await PE(g, I, t);
  return Un(A);
}
function _E() {
  return { images: { fps: new mt(937 + -1 * 1191 + 284), mouthStatus: new mt(1 * 158 + 2 * 3856 + -11 * 715) }, imageResolution: void (-2055 + 137 * 15) };
}
function XE({ skip: g }) {
  const I = tA(_E()), { analytics: t } = oo(), { crosshatch: A } = ot(), e = tA(!1);
  function o() {
    const B = I.current, a = Fe(B.images.fps), Q = Fe(B.images.mouthStatus);
    e.current = !0;
    const E = {};
    E.customer = A == null ? void 0 : A.customer, E.duration = yi, E.averageFps = a, E.imageResolution = B.imageResolution, E.averageExpressionScore = Q, t == null || t.trackLongCapture(E);
  }
  const i = {};
  i.callback = o, i.delay = yi * (10135 + 1305 * -7), i.skip = g || e.current, wn(i);
  const C = mA((B) => {
    if (!B.detail) return;
    const { data: a } = B.detail;
    I.current.images.fps.pushFixed(a.fps), I.current.images.mouthStatus.pushFixed(a.detection.mouth.status), I.current.imageResolution = a.imageResolution;
  }, []);
  no(qA.FACE_DETECTION, C);
  const n = {};
  return n.wasEventTriggered = e, n;
}
function zE(g) {
  const I = g.sort((e, o) => e - o), t = Math.floor(I.length / (7865 * -1 + 30 * 283 + 623 * -1));
  return I.length % 2 === -151 * -2 + -1 * 932 + -315 * -2 ? (I[t - (1171 * -1 + -163 * 11 + 2965)] + I[t]) / (-2103 + -6 * -321 + 179) : I[t];
}
function $E() {
  const [g, I] = EA(void 0), t = tA(!0), A = tA([]), e = mA((n) => {
    if (!n.detail || !t.current) return;
    const { data: B } = n.detail;
    if (!B.isInCandidateSelection) return;
    const a = B.detection.mouth.status;
    a < ro && A.current.push(a);
  }, []);
  function o() {
    A.current = [], t.current = !0, I(void (34 * 193 + 7309 * -1 + 747));
  }
  function i() {
    t.current = !1, I(zE(A.current));
  }
  const C = {};
  return C.median = g, C.reset = o, C.stop = i, C.handleFaceDetection = e, C;
}
function As(g) {
  return function() {
    const { handleFaceDetection: t, median: A, reset: e, stop: o } = g();
    no(qA.FACE_DETECTION, t);
    const i = {};
    return i.median = A, i.reset = e, i.stop = o, i;
  };
}
function es({ phase: g }) {
  const [I, t] = EA(Sg.AUTO_CAPTURE), A = pn(I);
  function e() {
    t(Sg.WAIT_FOR_REQUEST), A(() => Fx(fg.FIRST_FRAME));
  }
  const o = {};
  o.callback = e, o.delay = Er, o.skip = g === KA.NEUTRAL;
  const { clear: i, isActive: C, reset: n } = wn(o), B = {};
  return B.captureMode = I, B.restart = n, B.stop = i, B.isActive = C, B;
}
function ts(g, I, t) {
  switch (g) {
    case KA.SMILE:
      return { ...rr(I), ...t };
    case KA.NEUTRAL:
    default:
      return { ...ar(), ...t };
  }
}
const gs = ({
  assetsDirectoryPath: g,
  onComplete: I,
  sessionToken: t,
  thresholds: A
}) => {
  var Xt;
  const { analytics: e } = oo(), { appState: o, handleAppStateChange: i, handleError: C } = ca(), { cameraProperties: n, mergeCameraProperties: B } = or(), a = pn(o), Q = Te(KA.NEUTRAL), E = Te(null), r = Te(null), { captureMode: s, stop: d } = es({ phase: Q.value }), {
    median: h,
    reset: x,
    stop: u
  } = As($E)();
  XE({
    skip: Q.value !== KA.NEUTRAL || o !== TA.RUNNING
  });
  function w(oe) {
    Q.value = oe, GI(Rg.STATUS_CHANGED, { phase: oe });
  }
  function R() {
    i(TA.WAITING), a(() => i(TA.RUNNING));
  }
  function S() {
    d(), x(), R(), w(KA.NEUTRAL), E.value = null, r.value = null, e == null || e.reset();
  }
  Br(nr)({
    onFaceTrackingLost: S,
    skipOutsideOfCandidateSelection: Q.value === KA.NEUTRAL
  });
  function M(oe) {
    E.value = oe, u(), w(KA.SMILE), i(TA.RUNNING);
  }
  async function y(oe) {
    d(), r.value = oe;
    try {
      if (!E.value || !r.value)
        throw new U("Missing face data");
      const re = {
        sessionToken: t,
        web: n.value
      }, D0 = await VE(
        E.value.image,
        r.value.image,
        re
      ), zt = [E.value, r.value];
      I(zt, D0), e == null || e.trackLivenessProcess(zt), i(TA.DONE);
    } catch (re) {
      re instanceof Error && C(U.fromError(re));
      return;
    }
  }
  const q = {
    [KA.NEUTRAL]: M,
    [KA.SMILE]: y
  }, L = ((Xt = E.value) == null ? void 0 : Xt.data.detection.mouth.status) ?? ro, P = ts(
    Q.value,
    h ?? L,
    A
  ), Ie = pA(
    () => ({
      assetsDirectoryPath: g,
      captureMode: s,
      onPhotoTaken: q[Q.value],
      thresholds: P
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, s, Q.value, P]
  );
  return /* @__PURE__ */ D(Qr, { children: /* @__PURE__ */ D(Cr, { cameraOptions: Ie, children: /* @__PURE__ */ D(jE, { onPhotoTakenInternal: B }) }) });
};
function Is({ initAppState: g, onError: I }) {
  const [t, A] = EA(g), [e, o] = EA(), [i, C] = EA(!1), n = tA(I);
  T(() => {
    n.current = I;
  }, [I]);
  const B = {};
  return B.appState = t, B.setAppState = A, B.error = e, B.setError = o, B.isCameraReady = i, B.setIsCameraReady = C, B.onErrorRef = n, B;
}
function os(g) {
  return g !== TA.RUNNING && g !== TA.WAITING ? Ug.VISIBLE : Ug.VISIBLE_WITH_MASK;
}
function is({ onError: g }) {
  const { appState: I, error: t, isCameraReady: A, onErrorRef: e, setAppState: o, setError: i, setIsCameraReady: C } = Is({
    initAppState: TA.LOADING,
    onError: g
  }), n = os(I), B = mA(
    (Q) => {
      GI(Rg.STATUS_CHANGED, { state: TA.ERROR, error: Q }), C(!1), e.current(Q), i(Q), o(TA.ERROR);
    },
    [C, e, i, o]
  ), a = mA(
    (Q) => {
      o(Q), GI(Rg.STATUS_CHANGED, { state: Q });
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
var fo = ((g) => (g.AUTO_CAPTURE = "auto-capture", g.LONG_CAPTURE_SMILE = "long-capture-smile", g))(fo || {});
class Cs {
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
    const C = Cg(i);
    try {
      await fetch("" + o + C + "&" + I, e);
    } catch (n) {
      console.error("Countly Error", n);
    }
  }
  async init(I, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = I;
    const A = { _app_version: An() }, e = { organization: en(window.location.href) }, o = Cg({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(e) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const t = Cg(I);
    await this.countlyFetch(t);
  }
  async sendEvent(I, t, A) {
    const e = {};
    e.key = I, e.count = 1, e.dur = A, e.segmentation = t;
    const o = [e], i = Cg({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, t) {
    await this.sendEvent(fo.AUTO_CAPTURE, I, t);
  }
}
const ag = new Cs();
class ns {
  constructor() {
    p(this, "countly", ag);
  }
  createSegmentation(I) {
    return { appVersion: An(), ...I };
  }
  init(I) {
    if (tx()) return;
    const t = Px();
    ag.init(t, I);
  }
  endSession() {
    ag.endSession();
  }
  walleye(I, t) {
    const A = {};
    A.nocturne = I, A.customer = t;
    const e = this.createSegmentation(A);
    ag.sendAutoCaptureEvent(e);
  }
}
class Bs extends ns {
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
class Qs extends Bs {
  trackLivenessProcess(I) {
    var a, Q, E, r, s, d;
    if (!I.length || !this.captureProcessAnalytics.length) return;
    const [t, A] = I, [e, o] = this.captureProcessAnalytics, i = zx(e.averageFps + (o == null ? void 0 : o.averageFps)) / (-3 * 2557 + -7835 + 15508), C = Xx(e.captureProcessDurationInMs), n = -9776 + 3 * 1146 + 17 * 373, B = this.createSegmentation({ faceSize: Di((a = A.data.detection) == null ? void 0 : a.faceSize), confidence: Di((Q = t.data.detection) == null ? void 0 : Q.confidence), imageResolution: ((r = (E = t.data) == null ? void 0 : E["imageResolution"]) == null ? void 0 : r.width) + "x" + ((d = (s = t.data) == null ? void 0 : s["imageResolution"]) == null ? void 0 : d.height), averageFps: i, captureTimeNeutral: _x(C), captureTimeSmile: "" + n, camera: Vx(e == null ? void 0 : e.deviceName, e.facingMode), instructionSet: e.instructionSet });
    this.countly.sendAutoCaptureEvent(B, C + n), this.reset();
  }
  async trackLongCapture(I) {
    const { averageExpressionScore: t, averageFps: A, customer: e, duration: o, imageResolution: i } = I, C = this.createSegmentation({ imageResolution: i, averageFps: A, instructionSet: await Dn(), expressionScore: t, ...e && { customer: e } });
    this.countly.sendEvent(fo.LONG_CAPTURE_SMILE, C, o);
  }
}
const as = new Qs(), xs = ({ props: g }) => g ? /* @__PURE__ */ D(ea, { target: g.styleTarget, children: /* @__PURE__ */ D(
  sx,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: mI.getInstance(),
    children: /* @__PURE__ */ D(hx, { analytics: as, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ D(
      sa,
      {
        value: is({
          onError: g.onError
        }),
        children: /* @__PURE__ */ D(qC, { children: /* @__PURE__ */ D(gs, { ...g }) })
      }
    ) })
  }
) }) : null;
xB(xs, "x-dot-smile-liveness", ["props"]);
