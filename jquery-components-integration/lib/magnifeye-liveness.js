var gr = Object.defineProperty;
var En = (o) => {
  throw TypeError(o);
};
var nr = (o, i, t) => i in o ? gr(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var D = (o, i, t) => nr(o, typeof i != "symbol" ? i + "" : i, t), dn = (o, i, t) => i.has(o) || En("Cannot " + t);
var w = (o, i, t) => (dn(o, i, "read from private field"), t ? t.call(o) : i.get(o)), W = (o, i, t) => i.has(o) ? En("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), J = (o, i, t, e) => (dn(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var Ao, N, KI, TI, ue, ln, PI, ji, Lg, Zi, Vi, qI, Ft = {}, jI = [], Ir = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ai = Array.isArray;
function Ae(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function ZI(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function uA(o, i, t) {
  var e, A, g, n = {};
  for (g in i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : n[g] = i[g];
  if (arguments.length > -2542 + 3 * 848 && (n.children = arguments.length > -7043 * 1 + -1433 + 61 * 139 ? Ao.call(arguments, -10 * -727 + -2 * -2342 + 8 * -1494) : t), typeof o == "function" && o.defaultProps != null)
    for (g in o.defaultProps) void (20 * 327 + -4739 + 1801 * -1) === n[g] && (n[g] = o.defaultProps[g]);
  return wt(o, n, e, A, null);
}
function wt(o, i, t, e, A) {
  var g = {};
  g.type = o, g.props = i, g.key = t, g.ref = e, g.__k = null, g.__ = null, g.__b = 0, g.__e = null, g.__d = void (7790 + -8807 * -1 + -1 * 16597), g.__c = null, g.constructor = void (1 * -8503 + 8275 + 228), g.__v = A ?? ++KI, g.__i = -(-1089 * -3 + -9894 + 6628), g.__u = 0;
  var n = g;
  return A == null && N.vnode != null && N.vnode(n), n;
}
function ar() {
  var o = {};
  return o.current = null, o;
}
function YA(o) {
  return o.children;
}
function LA(o, i) {
  this.props = o, this.context = i;
}
function Fe(o, i) {
  if (i == null) return o.__ ? Fe(o.__, o.__i + (-26 * 52 + -1648 + 3001 * 1)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? Fe(o) : null;
}
function VI(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = -23 * 261 + -7274 * 1 + 13277; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return VI(o);
  }
}
function _i(o) {
  (!o.__d && (o.__d = !0) && ue.push(o) && !Fo.__r++ || ln !== N.debounceRendering) && ((ln = N.debounceRendering) || PI)(Fo);
}
function Fo() {
  var o, i, t, e, A, g, n, I;
  for (ue.sort(ji); o = ue.shift(); ) o.__d && (i = ue.length, e = void (-6728 + 3 * -1243 + 10457), g = (A = (t = o).__v).__e, n = [], I = [], t.__P && ((e = Ae({}, A)).__v = A.__v + (-10 * -349 + -1 * 1705 + -1784), N.vnode && N.vnode(e), Jg(t.__P, e, A, t.__n, t.__P.namespaceURI, 20 * -32 + -433 * -9 + -3225 & A.__u ? [g] : null, n, g ?? Fe(A), !!(2434 + -43 * 28 + -1198 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, XI(n, e, I), e.__e != g && VI(e)), ue.length > i && ue.sort(ji));
  Fo.__r = -15149 + -1 * -15149;
}
function _I(o, i, t, e, A, g, n, I, a, r, s) {
  var C, x, Q, E, d, u = e && e.__k || jI, c = i.length;
  for (t.__d = a, rr(t, i, u), a = t.__d, C = -10 * 943 + 8191 * -1 + -67 * -263; C < c; C++) (Q = t.__k[C]) != null && typeof Q != "boolean" && typeof Q != "function" && (x = -(-2 * -179 + 7397 + 2 * -3877) === Q.__i ? Ft : u[Q.__i] || Ft, Q.__i = C, Jg(o, Q, x, A, g, n, I, a, r, s), E = Q.__e, Q.ref && x.ref != Q.ref && (x.ref && Yg(x.ref, null, Q), s.push(Q.ref, Q.__c || E, Q)), d == null && E != null && (d = E), -1 * 75133 + 12 * -1623 + 160145 & Q.__u || x.__k === Q.__k ? (a && typeof Q.type == "string" && !o.contains(a) && (a = Fe(x)), a = zI(Q, a, o)) : typeof Q.type == "function" && void (-12 * 773 + -1 * -3229 + 6047 * 1) !== Q.__d ? a = Q.__d : E && (a = E.nextSibling), Q.__d = void (-338 * -27 + -5869 + 3257 * -1), Q.__u &= -(-1 * 338444 + 1 * -141014 + 96581 * 7));
  t.__d = a, t.__e = d;
}
function rr(o, i, t) {
  var e, A, g, n, I, a = i.length, r = t.length, s = r, C = 4715 * -1 + 4692 + 1 * 23;
  for (o.__k = [], e = -31 * -70 + 8387 + -10557; e < a; e++) n = e + C, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? wt(null, A, null, null, null) : ai(A) ? wt(YA, { children: A }, null, null, null) : void (-92 * 103 + -3393 + 12869) === A.constructor && A.__b > -1 * -8692 + -3 * 2981 + 251 ? wt(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (-1774 + 79 * -109 + 10386), I = Cr(A, t, n, s), A.__i = I, g = null, -(6573 + 1 * 2733 + -1 * 9305) !== I && (s--, (g = t[I]) && (g.__u |= 131072)), g == null || g.__v === null ? (-(-821 + -274 * -3) == I && C--, typeof A.type != "function" && (A.__u |= 65536)) : I !== n && (I == n - (9204 + 1 * 5426 + 14629 * -1) ? C = I - n : I == n + (29 * 42 + 1 * 3463 + 4680 * -1) ? C++ : I > n ? s > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= 2 * 56222 + 2 * -54734 + 62560))) : (g = t[n]) && g.key == null && g.__e && 17013 + 5671 * -3 == (109395 + -1 * -137623 + -115946 & g.__u) && (g.__e == o.__d && (o.__d = Fe(g)), zi(g, g, !(-523 * 11 + 35 * 194 + -1 * 1036)), t[n] = null, s--);
  if (s)
    for (e = -85 * -68 + 587 * 4 + 16 * -508; e < r; e++) (g = t[e]) != null && -9939 + 4 * 1123 + 5447 == (11 * 22823 + -43916 * -1 + -163897 & g.__u) && (g.__e == o.__d && (o.__d = Fe(g)), zi(g, g));
}
function zI(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = -4244 * -2 + -489 * -5 + -841 * 13; e && A < e.length; A++) e[A] && (e[A].__ = o, i = zI(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && i.nodeType === 8);
  return i;
}
function te(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (ai(o) ? o.some(function(t) {
    te(t, i);
  }) : i.push(o)), i;
}
function Cr(o, i, t, e) {
  var A = o.key, g = o.type, n = t - (-4488 + -1 * -601 + 8 * 486), I = t + (1309 * -4 + -2990 + 8227 * 1), a = i[t];
  if (a === null || a && A == a.key && g === a.type && 109 * -54 + 2300 + 1793 * 2 == (84635 * 3 + 137724 + -1 * 260557 & a.__u)) return t;
  if (e > (a != null && 32 * -32 + -9815 * -1 + 59 * -149 == (234071 + 7923 * -13 & a.__u) ? 6804 + 1 * -6803 : 1591 + 48 * -30 + -151)) for (; n >= -8449 + 1835 * 5 + -726 || I < i.length; ) {
    if (n >= -3237 + -2 * -3183 + -3129) {
      if ((a = i[n]) && 6370 + -1 * -5318 + -11688 == (-245647 + -1 * -376719 & a.__u) && A == a.key && g === a.type) return n;
      n--;
    }
    if (I < i.length) {
      if ((a = i[I]) && -173 * -38 + 1641 * 6 + -16420 == (432114 + -1 * 301042 & a.__u) && A == a.key && g === a.type) return I;
      I++;
    }
  }
  return -(-3196 * 1 + -1757 * -2 + -317);
}
function un(o, i, t) {
  i[1392 + 1 * -4481 + 3089] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || Ir.test(i) ? t : t + "px";
}
function Io(o, i, t, e, A) {
  var g;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || un(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || un(o.style, i, t[i]);
    }
  else if (i[89 * 25 + 2226 + 4451 * -1] === "o" && i[-1 * 452 + -9442 + 9895] === "n") g = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(-5566 + 2 * 3727 + -1886) : i.slice(137 * -3 + 80 * -55 + 4813 * 1), o.l || (o.l = {}), o.l[i + g] = t, t ? e ? t.u = e.u : (t.u = Lg, o.addEventListener(i, g ? Vi : Zi, g)) : o.removeEventListener(i, g ? Vi : Zi, g);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-5674 * -1 + 6249 + 2 * -5961) === t && i[-5488 + 22 * 415 + -1 * 3638] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && -1 * -2443 + 6997 + -1 * 9439 == t ? "" : t));
  }
}
function hn(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = Lg++;
      else if (i.t < t.u) return;
      return t(N.event ? N.event(i) : i);
    }
  };
}
function Jg(o, i, t, e, A, g, n, I, a, r) {
  var s, C, x, Q, E, d, u, c, h, m, F, v, k, y, K, QA, $ = i.type;
  if (void (-67 * 125 + 2206 + 6169 * 1) !== i.constructor) return null;
  1 * 9679 + -2380 + -7171 & t.__u && (a = !!(-3280 + -10 * 432 + 7632 & t.__u), g = [I = i.__e = t.__e]), (s = N.__b) && s(i);
  A: if (typeof $ == "function") try {
    if (c = i.props, h = "prototype" in $ && $.prototype.render, m = (s = $.contextType) && e[s.__c], F = s ? m ? m.props.value : s.__ : e, t.__c ? u = (C = i.__c = t.__c).__ = C.__E : (h ? i.__c = C = new $(c, F) : (i.__c = C = new LA(c, F), C.constructor = $, C.render = Qr), m && m.sub(C), C.props = c, C.state || (C.state = {}), C.context = F, C.__n = e, x = C.__d = !(12543 + -113 * 111), C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && $.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = Ae({}, C.__s)), Ae(C.__s, $.getDerivedStateFromProps(c, C.__s))), Q = C.props, E = C.state, C.__v = i, x) h && $.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && $.getDerivedStateFromProps == null && c !== Q && C.componentWillReceiveProps != null && C.componentWillReceiveProps(c, F), !C.__e && (C.shouldComponentUpdate != null && !(5 * -907 + 9449 + -4913) === C.shouldComponentUpdate(c, C.__s, F) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (C.props = c, C.state = C.__s, C.__d = !(1 * 7441 + 264 + -7704)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(RA) {
          RA && (RA.__ = i);
        }), v = 276 * 35 + -253 * 33 + -3 * 437; v < C._sb.length; v++) C.__h.push(C._sb[v]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(c, C.__s, F), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(Q, E, d);
      });
    }
    if (C.context = F, C.props = c, C.__P = o, C.__e = !(-8686 + 5087 * 1 + 100 * 36), k = N.__r, y = -3328 + -19 * 484 + -1 * -12524, h) {
      for (C.state = C.__s, C.__d = !(-8931 + -5667 * 1 + 14599), k && k(i), s = C.render(C.props, C.state, C.context), K = -9851 + 3121 * 2 + 3609; K < C._sb.length; K++) C.__h.push(C._sb[K]);
      C._sb = [];
    } else do
      C.__d = !(2086 * 2 + -1 * 425 + 1 * -3746), k && k(i), s = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++y < 7203 + -908 * -9 + 2 * -7675);
    C.state = C.__s, C.getChildContext != null && (e = Ae(Ae({}, e), C.getChildContext())), h && !x && C.getSnapshotBeforeUpdate != null && (d = C.getSnapshotBeforeUpdate(Q, E)), _I(o, ai(QA = s != null && s.type === YA && s.key == null ? s.props.children : s) ? QA : [QA], i, t, e, A, g, n, I, a, r), C.base = i.__e, i.__u &= -(-2876 + 1 * 3037), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (RA) {
    i.__v = null, a || g != null ? (i.__e = I, i.__u |= a ? 5 * 1788 + -8976 + 196 : -77 * -17 + 6089 + -7366, g[g.indexOf(I)] = null) : (i.__e = t.__e, i.__k = t.__k), N.__e(RA, i, t);
  }
  else g == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = Br(t.__e, i, t, e, A, g, n, a, r);
  (s = N.diffed) && s(i);
}
function XI(o, i, t) {
  i.__d = void 0;
  for (var e = -13417 + 1 * 13417; e < t.length; e++) Yg(t[e], t[++e], t[++e]);
  N.__c && N.__c(i, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(g) {
        g.call(A);
      });
    } catch (g) {
      N.__e(g, A.__v);
    }
  });
}
function Br(o, i, t, e, A, g, n, I, a) {
  var r, s, C, x, Q, E, d, u = t.props, c = i.props, h = i.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), g != null) {
    for (r = -2271 + -3 * -757; r < g.length; r++) if ((Q = g[r]) && "setAttribute" in Q == !!h && (h ? Q.localName === h : -3 * 492 + -1870 * 5 + 1 * 10829 === Q.nodeType)) {
      o = Q, g[r] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(c);
    o = document.createElementNS(A, h, c.is && c), g = null, I = !(-1150 + -1 * -1151);
  }
  if (h === null) u === c || I && o.data === c || (o.data = c);
  else {
    if (g = g && Ao.call(o.childNodes), u = t.props || Ft, !I && g != null)
      for (u = {}, r = -1 * -6116 + 3840 + -524 * 19; r < o.attributes.length; r++) u[(Q = o.attributes[r]).name] = Q.value;
    for (r in u) if (Q = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = Q;
      else if (r !== "key" && !(r in c)) {
        if (r == "value" && "defaultValue" in c || r == "checked" && "defaultChecked" in c) continue;
        Io(o, r, null, Q, A);
      }
    }
    for (r in c) Q = c[r], r == "children" ? x = Q : r == "dangerouslySetInnerHTML" ? s = Q : r == "value" ? E = Q : r == "checked" ? d = Q : r === "key" || I && typeof Q != "function" || u[r] === Q || Io(o, r, Q, u[r], A);
    if (s) I || C && (s.__html === C.__html || s.__html === o.innerHTML) || (o.innerHTML = s.__html), i.__k = [];
    else if (C && (o.innerHTML = ""), _I(o, ai(x) ? x : [x], i, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, g, n, g ? g[9593 * -1 + 5004 + 4589] : t.__k && Fe(t, 2534 * 1 + 4546 + -708 * 10), I, a), g != null)
      for (r = g.length; r--; ) g[r] != null && ZI(g[r]);
    I || (r = "value", void (-5097 * 1 + 7212 + -2115) !== E && (E !== o[r] || h === "progress" && !E || h === "option" && E !== u[r]) && Io(o, r, E, u[r], A), r = "checked", void (5 * -1989 + -2785 * 3 + 18300) !== d && d !== o[r] && Io(o, r, d, u[r], A));
  }
  return o;
}
function Yg(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    N.__e(e, t);
  }
}
function zi(o, i, t) {
  var e, A;
  if (N.unmount && N.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Yg(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (g) {
      N.__e(g, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = -1 * 5878 + 9172 + 1647 * -2; A < e.length; A++) e[A] && zi(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || ZI(o.__e), o.__c = o.__ = o.__e = o.__d = void (-9 * -116 + -5386 + 1 * 4342);
}
function Qr(o, i, t) {
  return this.constructor(o, t);
}
function se(o, i, t) {
  var e, A, g, n;
  N.__ && N.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, g = [], n = [], Jg(i, o = (!e && t || i).__k = uA(YA, null, [o]), A || Ft, Ft, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? Ao.call(i.childNodes) : null, g, !e && t ? t : A ? A.__e : i.firstChild, e, n), XI(g, o, n);
}
function Ug(o, i) {
  se(o, i, Ug);
}
function Wg(o, i, t) {
  var e, A, g, n, I = Ae({}, o.props);
  for (g in o.type && o.type.defaultProps && (n = o.type.defaultProps), i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : I[g] = i[g] === void 0 && void (1 * -2547 + 2 * 4462 + -6377 * 1) !== n ? n[g] : i[g];
  return arguments.length > 2615 + 871 * -3 && (I.children = arguments.length > 6400 + -49 * 71 + -2918 ? Ao.call(arguments, -8131 + -2657 * -3 + 162) : t), wt(o.type, I, e || o.key, A || o.ref, null);
}
function tt(o, i) {
  var t = { __c: i = "__cC" + qI++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, g;
    return this.getChildContext || (A = [], (g = {})[i] = this, this.getChildContext = function() {
      return g;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, _i(I);
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
Ao = jI.slice, N = { __e: function(o, i, t, e) {
  for (var A, g, n; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((g = A.constructor) && g.getDerivedStateFromError != null && (A.setState(g.getDerivedStateFromError(o)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    o = I;
  }
  throw o;
} }, KI = 6075 + 9059 * 1 + -15134, TI = function(o) {
  return o != null && o.constructor == null;
}, LA.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof o == "function" && (o = o(Ae({}, t), this.props)), o && Ae(t, o), o != null && this.__v && (i && this._sb.push(i), _i(this));
}, LA.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(3486 * 2 + -6686 + -143 * 2), o && this.__h.push(o), _i(this));
}, LA.prototype.render = YA, ue = [], PI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ji = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, Fo.__r = 693 * -2 + 1 * -4282 + 5668, Lg = 7018 * -1 + -4111 * -1 + 323 * 9, Zi = hn(!(2 * 4603 + 9517 + -18722)), Vi = hn(!(-619 * -11 + -1814 + -4995)), qI = 1733 * 4 + 3310 + -10242;
function Og() {
  return (Og = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = 246 + -35 * 7; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var sr = ["context", "children"];
function cr(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var g, n, I = {}, a = Object.keys(e);
    for (n = 1928 + -241 * 8; n < a.length; n++) A.indexOf(g = a[n]) >= -10 * -692 + -214 + -6706 || (I[g] = e[g]);
    return I;
  }(o, sr);
  return Wg(i, t);
}
function xr() {
  var o = {};
  o.detail = {}, o.bubbles = !(1 * -4709 + -6654 + 11 * 1033), o.cancelable = !(41 * 157 + -1 * 5163 + -1274);
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = uA(cr, Og({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (e.nodeType === 3) return e.data;
    if (7 * -1153 + -1 * -7795 + 277 !== e.nodeType) return null;
    var g = [], n = {}, I = 9992 + 241 * 1 + 27 * -379, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[$I(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var s = t(r[I], null), C = r[I].slot;
      C ? n[C] = uA(fn, { name: C }, s) : g[I] = s;
    }
    var x = A ? uA(fn, null, g) : g;
    return uA(A || e.nodeName.toLowerCase(), n, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Ug : se)(this._vdom, this._root);
}
function $I(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Er(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void 0, e[$I(o)] = t, this._vdom = Wg(this._vdom, e), se(this._vdom, this._root);
  }
}
function dr() {
  se(this._vdom = null, this._root);
}
function fn(o, i) {
  var t = this;
  return uA("slot", Og({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function lr(o, i, t, e) {
  function A() {
    var g = Reflect.construct(HTMLElement, [], A);
    return g._vdomComponent = o, g._root = g, g;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = xr, A.prototype.attributeChangedCallback = Er, A.prototype.disconnectedCallback = dr, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(g) {
    Object.defineProperty(A.prototype, g, { get: function() {
      return this._vdom.props[g];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(g, null, n) : (this._props || (this._props = {}), this._props[g] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(g, n);
    } });
  }), customElements.define(i, A);
}
var ur = -296 * -3 + 4516 + -5404;
function p(o, i, t, e, A, g) {
  i || (i = {});
  var n, I, a = i;
  if ("ref" in a)
    for (I in a = {}, i) I == "ref" ? n = i[I] : a[I] = i[I];
  var r = {};
  r.type = o, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void 0, r.__c = null, r.constructor = void (4911 + -3 * 1637), r.__v = --ur, r.__i = -(-37 * 71 + 9528 + -6900), r.__u = 0, r.__source = A, r.__self = g;
  var s = r;
  if (typeof o == "function" && (n = o.defaultProps))
    for (I in n) a[I] === void 0 && (a[I] = n[I]);
  return N.vnode && N.vnode(s), s;
}
var bA = function() {
  return bA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var g in t) Object.prototype.hasOwnProperty.call(t, g) && (i[g] = t[g]);
    }
    return i;
  }, bA.apply(this, arguments);
};
function Ve(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, g; e < A; e++)
    (g || !(e in i)) && (g || (g = Array.prototype.slice.call(i, 0, e)), g[e] = i[e]);
  return o.concat(g || Array.prototype.slice.call(i));
}
function hr(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var fr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pr = hr(function(o) {
  return fr.test(o) || o.charCodeAt(338 * 12 + -1642 * -3 + -8982) === 369 * -1 + -405 + 177 * 5 && o.charCodeAt(-9435 + -2 * -4718) === 950 + -10 * 84 && o.charCodeAt(-3677 * 2 + 4379 * 2 + -2 * 701) < 7974 + -5869 * 1 + 2014 * -1;
}), ce, j, mi, pn, _e = -7967 + 16 * -235 + -11727 * -1, A0 = [], V = N, yn = V.__b, Dn = V.__r, wn = V.diffed, mn = V.__c, bn = V.unmount, Gn = V.__;
function ot(o, i) {
  V.__h && V.__h(j, o, _e || i), _e = 1 * 7621 + 6 * 1013 + -13699;
  var t = {};
  t.__ = [], t.__h = [];
  var e = j.__H || (j.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function cA(o) {
  return _e = 13 * 93 + 659 + -1867, Hg(o0, o);
}
function Hg(o, i, t) {
  var e = ot(ce++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : o0(void (-1006 * 3 + -4617 + 7635), i), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[-4 * 2374 + -5525 + 15022]], e.__c.setState({}));
  }], e.__c = j, !j.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var s = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (s.every(function(x) {
        return !x.__N;
      })) return !g || g.call(this, I, a, r);
      var C = !(-4796 + 673 * -11 + 12200);
      return s.forEach(function(x) {
        if (x.__N) {
          var Q = x.__[0];
          x.__ = x.__N, x.__N = void 0, Q !== x.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!g || g.call(this, I, a, r));
    };
    j.u = !0;
    var g = j.shouldComponentUpdate, n = j.componentWillUpdate;
    j.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var s = g;
        g = void (-4664 + -44 * -106), A(I, a, r), g = s;
      }
      n && n.call(this, I, a, r);
    }, j.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function P(o, i) {
  var t = ot(ce++, 3);
  !V.__s && Kg(t.__H, i) && (t.__ = o, t.i = i, j.__H.__h.push(t));
}
function it(o, i) {
  var t = ot(ce++, 4);
  !V.__s && Kg(t.__H, i) && (t.__ = o, t.i = i, j.__h.push(t));
}
function fA(o) {
  return _e = -283 + 3 * 96, hA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function e0(o, i, t) {
  _e = -11 * -877 + -4802 + -4839, it(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void (7667 + -368 * -17 + -13923);
  }, t == null ? t : t.concat(o));
}
function hA(o, i) {
  var t = ot(ce++, 7);
  return Kg(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function oe(o, i) {
  return _e = 13 * 347 + -9558 + 5055, hA(function() {
    return o;
  }, i);
}
function xe(o) {
  var i = j.context[o.__c], t = ot(ce++, -9823 + -381 * -19 + 2593);
  return t.c = o, i ? (t.__ == null && (t.__ = !(-2233 + 281 * 1 + 1952), i.sub(j)), i.props.value) : o.__;
}
function So(o, i) {
  V.useDebugValue && V.useDebugValue(i ? i(o) : o);
}
function t0() {
  var o = ot(ce++, 11);
  if (!o.__) {
    for (var i = j.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [7008 + 146 * -48, 7938 + -5565 * 1 + -791 * 3]);
    o.__ = "P" + t[7356 * -1 + -1 * 5653 + -13009 * -1] + "-" + t[1 * -1879 + -5357 + 7237]++;
  }
  return o.__;
}
function yr() {
  for (var o; o = A0.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(xo), o.__H.__h.forEach(Xi), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], V.__e(i, o.__v);
  }
}
V.__b = function(o) {
  j = null, yn && yn(o);
}, V.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), Gn && Gn(o, i);
}, V.__r = function(o) {
  Dn && Dn(o), ce = -2 * -489 + 2331 + 1 * -3309;
  var i = (j = o.__c).__H;
  i && (mi === j ? (i.__h = [], j.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (8526 + 5078 * 1 + -13604);
  })) : (i.__h.forEach(xo), i.__h.forEach(Xi), i.__h = [], ce = 9 * -404 + -5402 * 1 + 9038)), mi = j;
}, V.diffed = function(o) {
  wn && wn(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (-1119 * 7 + -1444 + 9278 !== A0.push(i) && pn === V.requestAnimationFrame || ((pn = V.requestAnimationFrame) || Dr)(yr)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-11726 + 41 * 286);
  })), mi = j = null;
}, V.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(xo), t.__h = t.__h.filter(function(e) {
        return !e.__ || Xi(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], V.__e(e, t.__v);
    }
  }), mn && mn(o, i);
}, V.unmount = function(o) {
  bn && bn(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      xo(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void (118 * -73 + 5809 + 15 * 187), i && V.__e(i, t.__v));
};
var kn = typeof requestAnimationFrame == "function";
function Dr(o) {
  var i, t = function() {
    clearTimeout(e), kn && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  kn && (i = requestAnimationFrame(t));
}
function xo(o) {
  var i = j, t = o.__c;
  typeof t == "function" && (o.__c = void (-5 * 161 + -1 * -5695 + 326 * -15), t()), j = i;
}
function Xi(o) {
  var i = j;
  o.__c = o.__(), j = i;
}
function Kg(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function o0(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function i0(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function $i(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !0;
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(4669 + -1 * 5555 + 886);
  return !(4156 + -61 * 158 + -5483 * -1);
}
function Ag(o, i) {
  this.props = o, this.context = i;
}
function wr(o, i) {
  function t(A) {
    var g = this.props.ref, n = g == A.ref;
    return !n && g && (g.call ? g(null) : g.current = null), i ? !i(this.props, A) || !n : $i(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, uA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(-838 * 9 + 4813 + 1 * 2729), e.__f = !0, e;
}
(Ag.prototype = new LA()).isPureReactComponent = !(6 * 763 + -3441 * 1 + -3 * 379), Ag.prototype.shouldComponentUpdate = function(o, i) {
  return $i(this.props, o) || $i(this.state, i);
};
var Nn = N.__b;
N.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), Nn && Nn(o);
};
var mr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -8 * -648 + 1206 * -2 + 1139;
function g0(o) {
  function i(t) {
    var e = i0({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = mr, i.render = i, i.prototype.isReactComponent = i.__f = !0, i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var Fn = function(o, i) {
  return o == null ? null : te(te(o).map(i));
}, br = { map: Fn, forEach: Fn, count: function(o) {
  return o ? te(o).length : -8369 + -8369 * -1;
}, only: function(o) {
  var i = te(o);
  if (-185 * 17 + -1939 * -1 + 1207 !== i.length) throw "Children.only";
  return i[9810 + 1337 * 1 + -11147];
}, toArray: te }, Gr = N.__e;
N.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, g = i; g = g.__; ) if ((A = g.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  Gr(o, i, t, e);
};
var Sn = N.unmount;
function n0(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = i0({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return n0(e, i, t);
  })), o;
}
function I0(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return I0(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(9146 + 17 * -538), o.__c.__P = t)), o;
}
function Eo() {
  this.__u = -732 + -2297 * -1 + 313 * -5, this.t = null, this.__b = null;
}
function a0(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function kr(o) {
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
  return A.displayName = "Lazy", A.__f = !(-189 + -13 * -2 + -1 * -163), A;
}
function dt() {
  this.u = null, this.o = null;
}
N.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && -1 * 6991 + 6904 + 119 & o.__u && (o.type = null), Sn && Sn(o);
}, (Eo.prototype = new LA()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = a0(e.__v), g = !(-8734 + -1 * 8705 + 8 * 2180), n = function() {
    g || (g = !(-5267 + 31 * -85 + 7902), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[-463 * 3 + -1451 * -1 + -62] = I0(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || 32 & i.__u || e.setState({ __a: e.__b = e.__v.__k[-1 * -8017 + 8937 + -16954] }), o.then(n, n);
}, Eo.prototype.componentWillUnmount = function() {
  this.t = [];
}, Eo.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-386 * -4 + -8 * 815 + 4976].__c;
      this.__v.__k[-9941 * -1 + -202 * -46 + -9 * 2137] = n0(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && uA(YA, null, o.fallback);
  return A && (A.__u &= -(-149 * -26 + 1 * -7659 + -1 * -3818)), [uA(YA, null, i.__a ? null : o.children), A];
};
var Rn = function(o, i, t) {
  if (++t[59 * 123 + -5134 * 1 + -2122] === t[2613 * 2 + 8 * 658 + -1 * 10490] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[0] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 2 * 1009 + -5 * 79 + -10 * 162; ) t.pop()();
    if (t[50 + -7 * 7] < t[755 * -11 + 26 * 131 + -4899 * -1]) break;
    o.u = t = t[-974 + -2636 * 3 + -1 * -8884];
  }
};
function Nr(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function Fr(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    se(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(753 * 3 + -7957 * 1 + 5698);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 7248 + -2 * -4841 + -16929, -7680 + -7681 * -1), i.i.removeChild(e);
  } }), se(uA(Nr, { context: i.context }, o.__v), i.l);
}
function Sr(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = uA(Fr, t);
  return e.containerInfo = i, e;
}
(dt.prototype = new LA()).__a = function(o) {
  var i = this, t = a0(i.__v), e = i.o.get(o);
  return e[1 * -2959 + -1 * -8074 + 3 * -1705]++, function(A) {
    var g = function() {
      i.props.revealOrder ? (e.push(A), Rn(i, o, e)) : A();
    };
    t ? t(g) : g();
  };
}, dt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = te(o.children);
  o.revealOrder && o.revealOrder[-2697 + 1 * -9972 + 309 * 41] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-2344 * 4 + 1 * -2354 + -1 * -11731, -1757 + -251 * -7, this.u]);
  return o.children;
}, dt.prototype.componentDidUpdate = dt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    Rn(o, t, i);
  });
};
var r0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 19315 * 1 + 33881 * -2 + 108550, Rr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Mr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, vr = /[A-Z0-9]/g, Lr = typeof document < "u", Jr = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function Yr(o, i, t) {
  return i.__k == null && (i.textContent = ""), se(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function Ur(o, i, t) {
  return Ug(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
LA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(LA.prototype, o, { configurable: !0, get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-1916 + -5 * 229 + 3061), t.writable = !(-5 * 599 + 134 * -41 + -653 * -13), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var Mn = N.event;
function Wr() {
}
function Or() {
  return this.cancelBubble;
}
function Hr() {
  return this.defaultPrevented;
}
N.event = function(o) {
  return Mn && (o = Mn(o)), o.persist = Wr, o.isPropagationStopped = Or, o.isDefaultPrevented = Hr, o.nativeEvent = o;
};
var lo = {};
lo.enumerable = !(279 * -9 + 3881 + -1369), lo.configurable = !(4247 * -1 + -3503 * -1 + -1 * -744), lo.get = function() {
  return this.class;
};
var Tg, Kr = lo, vn = N.vnode;
N.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var g in t) {
      var n = t[g];
      if (!(g === "value" && "defaultValue" in t && n == null || Lr && g === "children" && e === "noscript" || g === "class" || g === "className")) {
        var I = g.toLowerCase();
        g === "defaultValue" && "value" in t && t.value == null ? g = "value" : g === "download" && n === !0 ? n = "" : I === "translate" && n === "no" ? n = !1 : I === "ondoubleclick" ? g = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || Jr(t.type) ? I === "onfocus" ? g = "onfocusin" : I === "onblur" ? g = "onfocusout" : Mr.test(g) ? g = I : -(194 + -193 * 1) === e.indexOf("-") && Rr.test(g) ? g = g.replace(vr, "-$&").toLowerCase() : n === null && (n = void (1579 * 5 + -7701 + -194)) : I = g = "oninput", I === "oninput" && A[g = I] && (g = "oninputCapture"), A[g] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = te(t.children).forEach(function(a) {
      a.props.selected = -(-3050 + 113 * 27) != A.value.indexOf(a.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = te(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(-3469 + -2 * -1735) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", Kr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = r0, vn && vn(o);
};
var Ln = N.__r;
N.__r = function(o) {
  Ln && Ln(o), Tg = o.__c;
};
var Jn = N.diffed;
N.diffed = function(o) {
  Jn && Jn(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), Tg = null;
};
var aA = {};
aA.readContext = function(o) {
  return Tg.__n[o.__c].props.value;
}, aA.useCallback = oe, aA.useContext = xe, aA.useDebugValue = So, aA.useDeferredValue = s0, aA.useEffect = P, aA.useId = t0, aA.useImperativeHandle = e0, aA.useInsertionEffect = x0, aA.useLayoutEffect = it, aA.useMemo = hA, aA.useReducer = Hg, aA.useRef = fA, aA.useState = cA, aA.useSyncExternalStore = E0, aA.useTransition = c0;
var C0 = {};
C0.current = aA;
var B0 = {};
B0.ReactCurrentDispatcher = C0;
var Tr = B0;
function Pr(o) {
  return uA.bind(null, o);
}
function ri(o) {
  return !!o && o.$$typeof === r0;
}
function qr(o) {
  return ri(o) && o.type === YA;
}
function jr(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function Zr(o) {
  return ri(o) ? Wg.apply(null, arguments) : o;
}
function Vr(o) {
  return !!o.__k && (se(null, o), !(-43 * -151 + 9902 + 5 * -3279));
}
function _r(o) {
  return o && (o.base || -2796 + 1254 * 1 + -1 * -1543 === o.nodeType && o) || null;
}
var zr = function(o, i) {
  return o(i);
}, Xr = function(o, i) {
  return o(i);
}, $r = YA;
function Q0(o) {
  o();
}
function s0(o) {
  return o;
}
function c0() {
  return [!(-1135 * 1 + -1 * -4670 + 38 * -93), Q0];
}
var x0 = it, AC = ri;
function E0(o, i) {
  var t = i(), e = cA({ h: { __: t, v: i } }), A = e[-5015 + 47 * 178 + 1117 * -3].h, g = e[1746 * -3 + 1686 * 4 + -1505];
  return it(function() {
    A.__ = t, A.v = i, bi(A) && g({ h: A });
  }, [o, t, i]), P(function() {
    return bi(A) && g({ h: A }), o(function() {
      bi(A) && g({ h: A });
    });
  }, [o]), t;
}
function bi(o) {
  var i, t, e = o.v, A = o.__;
  try {
    var g = e();
    return !((i = A) === (t = g) && (-153 * -29 + -2399 + -2038 !== i || (2 * -1919 + -526 * 1 + 4365) / i == (-127 + -16 * -8) / t) || i != i && t != t);
  } catch {
    return !(-194 * -51 + 9924 + 18 * -1101);
  }
}
var G = {};
G.useState = cA, G.useId = t0, G.useReducer = Hg, G.useEffect = P, G.useLayoutEffect = it, G.useInsertionEffect = x0, G.useTransition = c0, G.useDeferredValue = s0, G.useSyncExternalStore = E0, G.startTransition = Q0, G.useRef = fA, G.useImperativeHandle = e0, G.useMemo = hA, G.useCallback = oe, G.useContext = xe, G.useDebugValue = So, G.version = "17.0.2", G.Children = br, G.render = Yr, G.hydrate = Ur, G.unmountComponentAtNode = Vr, G.createPortal = Sr, G.createElement = uA, G.createContext = tt, G.createFactory = Pr, G.cloneElement = Zr, G.createRef = ar, G.Fragment = YA, G.isValidElement = ri, G.isElement = AC, G.isFragment = qr, G.isMemo = jr, G.findDOMNode = _r, G.Component = LA, G.PureComponent = Ag, G.memo = wr, G.forwardRef = g0, G.flushSync = Xr, G.unstable_batchedUpdates = zr, G.StrictMode = $r, G.Suspense = Eo, G.SuspenseList = dt, G.lazy = kr, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tr;
var Se = G, eC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tC(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function oC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function iC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function gC(o) {
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
const nC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: eC,
  getAugmentedNamespace: gC,
  getDefaultExportFromCjs: tC,
  getDefaultExportFromNamespaceIfNotNamed: iC,
  getDefaultExportFromNamespaceIfPresent: oC
}, Symbol.toStringTag, { value: "Module" }));
var IC = function(i, t, e, A) {
  var g = e ? e.call(A, i, t) : void 0;
  if (g !== void (-14 * -223 + 2 * -309 + -2504)) return !!g;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var n = Object.keys(i), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = -3752 + 1 * 3912 + -1 * 160; r < n.length; r++) {
    var s = n[r];
    if (!a(s)) return !1;
    var C = i[s], x = t[s];
    if (g = e ? e.call(A, C, x, s) : void (1397 * -7 + 14 * 317 + 5341 * 1), g === !1 || g === void (1266 * 4 + 193 * -12 + -2748 * 1) && C !== x) return !1;
  }
  return !0;
};
const aC = nC.getDefaultExportFromCjs(IC);
var q = "-ms-", mt = "-moz-", H = "-webkit-", d0 = "comm", Ci = "rule", Pg = "decl", rC = "@import", l0 = "@keyframes", CC = "@layer", u0 = Math.abs, qg = String.fromCharCode, eg = Object.assign;
function BC(o, i) {
  return oA(o, 3404 + 6163 * 1 + -9567) ^ -6 * 876 + 1262 * 1 + 4039 ? (((i << 5971 + 1779 * 1 + -7748 ^ oA(o, -115 * 23 + 9436 + 1 * -6791)) << -826 * 1 + 8165 + -23 * 319 ^ oA(o, 2902 * -1 + 7784 + -4881)) << -1096 + -37 * -76 + -1714 ^ oA(o, -6860 + -71 * 32 + 9134 * 1)) << -12137 + -1 * -12139 ^ oA(o, 3) : -12 * -403 + -74 * 54 + -840;
}
function h0(o) {
  return o.trim();
}
function zA(o, i) {
  return (o = i.exec(o)) ? o[-2 * 1871 + 1 * 8345 + -4603] : o;
}
function S(o, i, t) {
  return o.replace(i, t);
}
function uo(o, i, t) {
  return o.indexOf(i, t);
}
function oA(o, i) {
  return o.charCodeAt(i) | -659 * 14 + -549 + 1955 * 5;
}
function ze(o, i, t) {
  return o.slice(i, t);
}
function PA(o) {
  return o.length;
}
function f0(o) {
  return o.length;
}
function lt(o, i) {
  return i.push(o), o;
}
function QC(o, i) {
  return o.map(i).join("");
}
function Yn(o, i) {
  return o.filter(function(t) {
    return !zA(t, i);
  });
}
var Bi = 4882 * 1 + -20 * 62 + -3641, Xe = 1657 + -4268 * 1 + -653 * -4, p0 = -115 + 4 * 2433 + -9617, UA = -8635 + 7 * 796 + -3 * -1021, AA = -9 * -1097 + -1 * -4486 + -14359, gt = "";
function Qi(o, i, t, e, A, g, n, I) {
  var a = {};
  return a.value = o, a.root = i, a.parent = t, a.type = e, a.props = A, a.children = g, a.line = Bi, a.column = Xe, a.length = n, a.return = "", a.siblings = I, a;
}
function ne(o, i) {
  return eg(Qi("", null, null, "", null, null, -4738 + -103 * -46, o.siblings), o, { length: -o.length }, i);
}
function Ye(o) {
  for (; o.root; ) o = ne(o.root, { children: [o] });
  lt(o, o.siblings);
}
function sC() {
  return AA;
}
function cC() {
  return AA = UA > 13545 + -9 * 1505 ? oA(gt, --UA) : 587 * -8 + -5194 + 9890, Xe--, AA === 1 * -269 + -33 * -277 + -8862 && (Xe = -8889 + 77 * -1 + 8967, Bi--), AA;
}
function OA() {
  return AA = UA < p0 ? oA(gt, UA++) : -2392 + -52 * -46, Xe++, AA === -53 * 5 + -1 * 5656 + 5931 && (Xe = -1 * 1103 + -3188 + -4 * -1073, Bi++), AA;
}
function ke() {
  return oA(gt, UA);
}
function ho() {
  return UA;
}
function si(o, i) {
  return ze(gt, o, i);
}
function tg(o) {
  switch (o) {
    case -6929 * -1 + -6631 + 149 * -2:
    case -101 * -81 + -3 * 951 + 5319 * -1:
    case -718 + -2953 * 3 + -9587 * -1:
    case -8525 + 4798 * 1 + -1 * -3740:
    case 863 * -3 + 39 * -150 + 8471:
      return -3375 * 1 + -2012 * 1 + 5392;
    case 33:
    case -8682 + -8725 * -1:
    case 5047 * 1 + 2 * -519 + -3965:
    case 2360 + -3 * 771:
    case -3 * -1183 + 2 * 1678 + -6843 * 1:
    case -7561 + 15 * 663 + -116 * 20:
    case 3969 * -1 + 1600 + 2495:
    case 1 * 6158 + -838 + -5261 * 1:
    case 123:
    case 125:
      return -507 * 9 + -4351 + 182 * 49;
    case -813 * -1 + -307 * 10 + 2315 * 1:
      return 7584 + 1 * 7119 + -14700;
    case 13503 + -1 * 13469:
    case 39:
    case 40:
    case 994 * 7 + 1913 * -5 + 2 * 1349:
      return -3555 + 644 * 13 + -1605 * 3;
    case 41:
    case 91 * -82 + -5574 + 691 * 19:
      return -14 * -206 + -9535 + 6652;
  }
  return 26 * 78 + -19 * -523 + -11965 * 1;
}
function xC(o) {
  return Bi = Xe = 5159 + -2579 * 2, p0 = PA(gt = o), UA = 83 * -53 + 122 * -40 + 9279, [];
}
function EC(o) {
  return gt = "", o;
}
function Gi(o) {
  return h0(si(UA - (-263 * 17 + 313 * 11 + 1029), og(o === -2912 + -1 * -3003 ? o + (10421 + 1 * -10419) : o === -6933 + 3 * -2029 + -653 * -20 ? o + (843 + -1 * 842) : o)));
}
function dC(o) {
  for (; (AA = ke()) && AA < 33; ) OA();
  return tg(o) > 1 * -2252 + -3804 + 6058 || tg(AA) > 3 ? "" : " ";
}
function lC(o, i) {
  for (; --i && OA() && !(AA < 9070 + -13 * 694 || AA > -8736 + 8 * -613 + 13742 || AA > 542 * 5 + 3464 * 1 + -1 * 6117 && AA < 1048 + -1 * 983 || AA > -10 * 812 + 1 * -6899 + 15089 * 1 && AA < -1 * 1328 + -1 * 9566 + -379 * -29); ) ;
  return si(o, ho() + (i < -2529 + 13 * 195 && ke() == -5035 + 3 * 1689 && OA() == -4880 + -706 * 14 + 14796));
}
function og(o) {
  for (; OA(); ) switch (AA) {
    case o:
      return UA;
    case 34:
    case -5946 + 109 * -30 + 9255:
      o !== 1 * -8890 + 6876 + 32 * 64 && o !== -3279 * 2 + -5773 + 12370 && og(AA);
      break;
    case -640 + 20 * 34:
      o === 7545 + 245 * 37 + 263 * -63 && og(o);
      break;
    case -3087 + 9727 * 1 + -6548:
      OA();
      break;
  }
  return UA;
}
function uC(o, i) {
  for (; OA() && o + AA !== -19 * 37 + 9930 + -9180 + (-1 * -8506 + 3927 + 303 * -41); ) if (o + AA === -5992 + -6034 * -1 + (-22 * 178 + -9267 + 13225) && ke() === 47) break;
  return "/*" + si(i, UA - (-6359 + -31 * 185 + 12095)) + "*" + qg(o === 47 ? o : OA());
}
function hC(o) {
  for (; !tg(ke()); ) OA();
  return si(o, UA);
}
function fC(o) {
  return EC(fo("", null, null, null, [""], o = xC(o), -8904 + 318 * 28, [1 * 9961 + 6923 + -16884], o));
}
function fo(o, i, t, e, A, g, n, I, a) {
  for (var r = 0, s = 5 * -124 + 8666 + 8046 * -1, C = n, x = 7363 * -1 + -9155 + 16518, Q = 2 * -83 + 21 * 385 + -7919, E = 11039 + -1577 * 7, d = -661 + -1 * 4561 + 1741 * 3, u = -6922 * -1 + -1193 * 3 + -1671 * 2, c = 8047 + 1 * 2118 + 6 * -1694, h = 5880 + -15 * -558 + 30 * -475, m = "", F = A, v = g, k = e, y = m; u; ) switch (E = h, h = OA()) {
    case -2543 * 2 + -1 * 6417 + 17 * 679:
      if (E != 108 && oA(y, C - (-155 * -10 + 4 * 1036 + -5693)) == 58) {
        uo(y += S(Gi(h), "&", "&\f"), "&\f", u0(r ? I[r - 1] : -6056 + 1 * 4766 + 86 * 15)) != -(-5830 + -5158 * -1 + 673 * 1) && (c = -(7522 + 3467 * 2 + -2065 * 7));
        break;
      }
    case 2 * -271 + 7153 * -1 + 7729:
    case 7008 * 1 + -3 * 1298 + -3075:
    case 91:
      y += Gi(h);
      break;
    case 9:
    case -634 + 3 * 190 + 74:
    case -6772 + 2 * 4627 + -1 * 2469:
    case 32:
      y += dC(E);
      break;
    case 5097 * -1 + -757 * -6 + 647 * 1:
      y += lC(ho() - 1, 3019 + 29 * -181 + 2237);
      continue;
    case 738 + 691 * -1:
      switch (ke()) {
        case -16505 + -1 * -16547:
        case 184 + -1865 * -3 + -1433 * 4:
          lt(pC(uC(OA(), ho()), i, t, a), a);
          break;
        default:
          y += "/";
      }
      break;
    case (17086 + -1 * 16963) * d:
      I[r++] = PA(y) * c;
    case (-2268 + -82 * -5 + -661 * -3) * d:
    case 41 * 23 + 25 * 218 + 3167 * -2:
    case 8612 + -489 * 1 + -8123:
      switch (h) {
        case 1237 * 7 + -2 * -1625 + -11909:
        case -13 * 611 + 4979 + 3089:
          u = 7284 + -1 * 7284;
        case 1 * -3279 + -11 * -805 + 1 * -5517 + s:
          c == -1 && (y = S(y, /\f/g, "")), Q > -136 * 6 + 1523 * -1 + 2339 * 1 && PA(y) - C && lt(Q > -30 * 177 + 95 * 78 + 4 * -517 ? Wn(y + ";", e, t, C - (1030 + -9863 * 1 + -2 * -4417), a) : Wn(S(y, " ", "") + ";", e, t, C - (1846 * -3 + 6223 + -683), a), a);
          break;
        case 2173 + 1707 * -4 + 4714:
          y += ";";
        default:
          if (lt(k = Un(y, i, t, r, s, A, I, m, F = [], v = [], C, g), g), h === -9362 + -1 * 2199 + 11684)
            if (s === -4 * -1031 + -1710 * 1 + 2 * -1207) fo(y, i, k, k, F, g, C, I, v);
            else switch (x === 6301 + 2 * 4441 + 6 * -2514 && oA(y, -7414 + -3063 * 1 + -262 * -40) === -13 * 123 + -8302 + 1 * 10011 ? 1 * 3569 + -7069 + -240 * -15 : x) {
              case 100:
              case -3917 * -1 + 2 * -1743 + -323:
              case -749 * 1 + -437 * -17 + -6571:
              case -160 * 3 + -240 * 3 + 1 * 1315:
                fo(o, k, k, e && lt(Un(o, k, k, 0, -7483 + 414 * 3 + 6241 * 1, A, I, m, A, F = [], C, v), v), A, v, C, I, e ? F : v);
                break;
              default:
                fo(y, k, k, k, [""], v, -8293 * -1 + -1 * 9206 + 913, I, v);
            }
      }
      r = s = Q = 7994 + -1 * -9160 + -17154, d = c = -11104 + -11105 * -1, m = y = "", C = n;
      break;
    case 58:
      C = 1 * -4113 + -9378 + 4 * 3373 + PA(y), Q = E;
    default:
      if (d < -6965 + -6966 * -1) {
        if (h == -14815 + -97 * -154) --d;
        else if (h == 1 * -2543 + -8371 * 1 + 11039 && d++ == -43 * 3 + -7493 + -206 * -37 && cC() == 2 * -3541 + 5 * 942 + -227 * -11) continue;
      }
      switch (y += qg(h), h * d) {
        case 38:
          c = s > 0 ? 31 * 43 + -2658 + 34 * 39 : (y += "\f", -(1 * 9479 + 517 * 1 + -9995));
          break;
        case 44:
          I[r++] = (PA(y) - (-77 * 129 + 590 + 9344)) * c, c = 1773 + -9596 * -1 + -11368;
          break;
        case -1762 * 3 + 1293 * 1 + -1 * -4057:
          ke() === -4445 + 337 * 13 + 1 * 109 && (y += Gi(OA())), x = ke(), s = C = PA(m = y += hC(ho())), h++;
          break;
        case 307 * 19 + -2959 + -23 * 123:
          E === -4846 + 4763 * 2 + -4635 && PA(y) == -193 * -30 + 8 * -503 + 252 * -7 && (d = 1 * -2713 + 88 * 109 + -2293 * 3);
      }
  }
  return g;
}
function Un(o, i, t, e, A, g, n, I, a, r, s, C) {
  for (var x = A - 1, Q = A === 16 * 220 + 195 + -3715 ? g : [""], E = f0(Q), d = 8715 * -1 + 1 * 2164 + -6551 * -1, u = 9560 + 4 * -2390, c = 8396 + 2 * -4198; d < e; ++d) for (var h = -77 * -124 + -4414 + -5134, m = ze(o, x + (5 * 1229 + -5335 + -809), x = u0(u = n[d])), F = o; h < E; ++h) (F = h0(u > -354 * 17 + -9625 * 1 + 15643 ? Q[h] + " " + m : S(m, /&\f/g, Q[h]))) && (a[c++] = F);
  return Qi(o, i, t, A === -2841 * -2 + -8246 + 2564 ? Ci : I, a, r, s, C);
}
function pC(o, i, t, e) {
  return Qi(o, i, t, d0, qg(sC()), ze(o, -2721 + -1 * -2723, -(1 * -1941 + -1 * 6011 + 7954)), -5080 + 2 * 2540, e);
}
function Wn(o, i, t, e, A) {
  return Qi(o, i, t, Pg, ze(o, 650 + 143 * 11 + 57 * -39, e), ze(o, e + (-3 * -706 + -3765 + 1648), -(-187 * 43 + 8750 + 6 * -118)), e, A);
}
function y0(o, i, t) {
  switch (BC(o, i)) {
    case -9492 + -62 * 146 + 107 * 221:
      return H + "print-" + o + o;
    case 6011 + -813 * -2 + -1900:
    case 44 * 135 + 7915 + 1609 * -6:
    case -682 * 13 + 887 * 5 + 7608:
    case -4517 + 1723 * -4 + 14842:
    case -1 * -5261 + 31 * -217 + 3107:
    case -5485 * 1 + 9 * 383 + 6495:
    case 7636 + 9323 * -1 + -576 * -8:
    case -10436 * 1 + 4266 + 11742:
    case 1751 * -1 + -111 * 53 + 2 * 6995:
    case -6 * -1902 + 5081 + -10649:
    case 3191:
    case 12264 + 84 * -93 + 2193:
    case -82 * -71 + 4559 + -461 * 16:
    case -14 * 249 + -2 * 2192 + 14261:
    case -5075 + 11633 * -1 + 22587:
    case 870 * 2 + 3456 + 7 * 61:
    case 1 * 6889 + 1762 + 1 * -2516:
    case 8 * -373 + 4610 * -1 + 137 * 89:
    case -4584 * -1 + -2798 + 3069:
    case -1664 * 2 + -8508 + 1 * 16051:
    case -6093 * 1 + -3358 + 15840:
    case -9434 * 1 + -1808 + 16351:
    case -2963 * -3 + -191 + -1 * 3333:
    case 5621:
    case 2075 + 2258 * 1 + 504 * -1:
      return H + o + o;
    case 8819 + 18 * -40 + -10 * 331:
      return mt + o + o;
    case 6 * -353 + -1568 + 9035:
    case 19 * -500 + 1 * 543 + -489 * -27:
    case 9540 + 1 * 3733 + 7 * -1209:
    case 8 * 1252 + -2240 + -808:
    case 2756:
      return H + o + mt + o + q + o + o;
    case -10404 + 161 * -47 + 23907:
      switch (oA(o, i + (9297 + -145 * 27 + -5371))) {
        case 2051 * 3 + -37 * -1 + -6076:
          return H + o + q + S(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case -9237 + -4 * -461 + 7501 * 1:
          return H + o + q + S(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case -9654 * 1 + 6581 * 1 + -1 * -3118:
          return H + o + q + S(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 1 * 10352 + -7 * 90 + -2894:
    case -3052 + 1751 * 1 + 5569:
    case -3487 + 3195 * 2:
      return H + o + q + o + o;
    case 7171 + -57 * -140 + -8986:
      return H + o + q + "flex-" + o + o;
    case -8940 + 233 * 33 + 6438:
      return H + o + S(o, /(\w+).+(:[^]+)/, H + "box-$1$2" + q + "flex-$1$2") + o;
    case 4793 * -1 + -3625 + 13861:
      return H + o + q + "flex-item-" + S(o, /flex-|-self/g, "") + (zA(o, /flex-|baseline/) ? "" : q + "grid-row-" + S(o, /flex-|-self/g, "")) + o;
    case 4675:
      return H + o + q + "flex-line-pack" + S(o, /align-content|flex-|-self/g, "") + o;
    case -344 * -2 + 3788 + -1072 * -1:
      return H + o + q + S(o, "shrink", "negative") + o;
    case 15837 + 111 * -95:
      return H + o + q + S(o, "basis", "preferred-size") + o;
    case 3847 * -1 + 1355 + 8552:
      return H + "box-" + S(o, "-grow", "") + H + o + q + S(o, "grow", "positive") + o;
    case -171 * 35 + -5480 + 16019:
      return H + S(o, /([^-])(transform)/g, "$1" + H + "$2") + o;
    case 11827 * -1 + 12175 + 1 * 5839:
      return S(S(S(o, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), o, "") + o;
    case -3 * -683 + 1 * 9343 + 1 * -5897:
    case 24 * -103 + -2627 + 9058:
      return S(o, /(image-set\([^]*)/, H + "$1$`$1");
    case 6076 + 124 * -14 + 314 * 2:
      return S(S(o, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + o + o;
    case 3077 + 1 * 1123:
      if (!zA(o, /flex-|baseline/)) return q + "grid-column-align" + ze(o, i) + o;
      break;
    case 2592:
    case 7704 + -1 * 2297 + -2047:
      return q + S(o, "template-", "") + o;
    case -747 * 2 + 37 * 229 + -2595:
    case -5113 + 72 * 81 + 1 * 2897:
      return t && t.some(function(e, A) {
        return i = A, zA(e.props, /grid-\w+-end/);
      }) ? ~uo(o + (t = t[i].value), "span", 337 * -21 + -1 * 7593 + -163 * -90) ? o : q + S(o, "-start", "") + o + q + "grid-row-span:" + (~uo(t, "span", -7381 + 43 * -66 + -929 * -11) ? zA(t, /\d+/) : +zA(t, /\d+/) - +zA(o, /\d+/)) + ";" : q + S(o, "-start", "") + o;
    case -6280 * -1 + -4877 + 3493:
    case -1 * -1837 + -3482 * -1 + -1191:
      return t && t.some(function(e) {
        return zA(e.props, /grid-\w+-start/);
      }) ? o : q + S(S(o, "-end", "-span"), "span ", "") + o;
    case 4095:
    case 1920 + 2 * -313 + -7 * -327:
    case 5 * -489 + -4148 + 10661:
    case -1090 * -6 + 3291 + -7299:
      return S(o, /(.+)-inline(.+)/, H + "$1$2") + o;
    case 12898 + -1318 * -9 + -16644:
    case 10519 * -1 + -2 * 5321 + -1411 * -20:
    case 19 * 239 + 5328 + -4116:
    case -11 * 355 + 6821 + 291 * 9:
    case 590 + 1 * -8611 + 13466:
    case -5678 * 1 + -3259 * -3 + -3 * -534:
    case 9028 + 1 * 3 + -1 * 4098:
    case 5 * 1201 + 5707 + 5 * -1407:
    case 5533:
    case -4146 * 1 + 7963 + 116 * 17:
    case 840 + -1 * -2028 + 2153 * 1:
    case 4765:
      if (PA(o) - (-2806 + -1 * -8948 + -89 * 69) - i > -1 * -4463 + 7491 + -116 * 103) switch (oA(o, i + (883 + -9 * 98))) {
        case 7128 + 1 * -7019:
          if (oA(o, i + (-597 + 1 * 601)) !== -8 + -3903 * -2 + -7753) break;
        case -9199 * 1 + -946 + 10247:
          return S(o, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + mt + (oA(o, i + (2 * -75 + -8446 + 8599)) == 1 * -4723 + 694 * 1 + 4137 ? "$3" : "$2-$3")) + o;
        case -1843 + -3 * 629 + 769 * 5:
          return ~uo(o, "stretch", -3890 * 1 + -1 * 629 + -4519 * -1) ? y0(S(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case 246 * -38 + 9201 + 5299:
    case 60 * -160 + -211 * 42 + -73 * -334:
      return S(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, g, n, I, a, r) {
        return q + A + ":" + g + r + (n ? q + A + "-span:" + (I ? a : +a - +g) + r : "") + o;
      });
    case 7207 + 286 * 14 + 202 * -31:
      if (oA(o, i + (431 * -1 + -571 * -13 + -6986)) === 1 * -6465 + -1 * 3548 + 10134) return S(o, ":", ":" + H) + o;
      break;
    case 4652 + -9283 * 1 + 11075:
      switch (oA(o, oA(o, -5580 + -3 * 2307 + 1 * 12515) === 45 ? 98 * 74 + 10 * -678 + -2 * 227 : 3249 + -321 * 11 + 293)) {
        case 120:
          return S(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (oA(o, -29 * -191 + 901 * 5 + 5015 * -2) === 14454 + -1601 * 9 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + q + "$2box$3") + o;
        case 100:
          return S(o, ":", ":" + q) + o;
      }
      break;
    case -131 * 7 + -5245 + 11881:
    case 2980 + -9 * 37:
    case 2806 + -61 * 11:
    case 20 * -499 + -8 * 1006 + 21955:
    case 1 * 6717 + -2 * 1198 + -2 * 965:
      return S(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function Ro(o, i) {
  for (var t = "", e = -13 * 129 + 2364 + -1 * 687; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function yC(o, i, t, e) {
  switch (o.type) {
    case CC:
      if (o.children.length) break;
    case rC:
    case Pg:
      return o.return = o.return || o.value;
    case d0:
      return "";
    case l0:
      return o.return = o.value + "{" + Ro(o.children, e) + "}";
    case Ci:
      if (!PA(o.value = o.props.join(","))) return "";
  }
  return PA(t = Ro(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function DC(o) {
  var i = f0(o);
  return function(t, e, A, g) {
    for (var n = "", I = -708 * -4 + 3309 + -3 * 2047; I < i; I++) n += o[I](t, e, A, g) || "";
    return n;
  };
}
function wC(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function mC(o, i, t, e) {
  if (o.length > -(-1691 + -31 * -265 + -6523) && !o.return)
    switch (o.type) {
      case Pg:
        o.return = y0(o.value, o.length, t);
        return;
      case l0:
        return Ro([ne(o, { value: S(o.value, "@", "@" + H) })], e);
      case Ci:
        if (o.length) return QC(t = o.props, function(A) {
          switch (zA(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Ye(ne(o, { props: [S(A, /:(read-\w+)/, ":" + mt + "$1")] }));
              var g = {};
              g.props = [A], Ye(ne(o, g)), eg(o, { props: Yn(t, e) });
              break;
            case "::placeholder":
              Ye(ne(o, { props: [S(A, /:(plac\w+)/, ":" + H + "input-$1")] })), Ye(ne(o, { props: [S(A, /:(plac\w+)/, ":" + mt + "$1")] })), Ye(ne(o, { props: [S(A, /:(plac\w+)/, q + "input-$1")] }));
              var n = {};
              n.props = [A], Ye(ne(o, n)), eg(o, { props: Yn(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var bC = b, O = {}, Re = typeof process < "u" && void (12 * 695 + -3 * -2901 + -17043) !== O && (O.REACT_APP_SC_ATTR || O.SC_ATTR) || "data-styled", D0 = "active", w0 = "data-styled-version", ci = "6.1.11", jg = `/*!sc*/
`, Zg = typeof window < "u" && "HTMLElement" in window, GC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-612 + -383 * -21 + 3 * -2477) !== O && O.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && O.REACT_APP_SC_DISABLE_SPEEDY !== "" ? O.REACT_APP_SC_DISABLE_SPEEDY !== "false" && O.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-28 * 34 + -3153 + -5 * -821) !== O && void (-31 * 247 + 5813 + 1844) !== O.SC_DISABLE_SPEEDY && O.SC_DISABLE_SPEEDY !== "" ? O.SC_DISABLE_SPEEDY !== "false" && O.SC_DISABLE_SPEEDY : O.NODE_ENV !== "production"), On = /invalid hook call/i, ao = /* @__PURE__ */ new Set(), kC = function(o, i) {
  if (O.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var g = !0;
      console.error = function(n) {
        for (var I = [], a = 1; a < arguments.length; a++) I[a - (27 * -251 + -246 * 20 + -11698 * -1)] = arguments[a];
        On.test(n) ? (g = !1, ao.delete(e)) : A.apply(void (-7099 * -1 + -1 * -3641 + 1790 * -6), Ve([n], I, !1));
      }, fA(), g && !ao.has(e) && (console.warn(e), ao.add(e));
    } catch (n) {
      On.test(n.message) && ao.delete(e);
    } finally {
      console.error = A;
    }
  }
}, xi = Object.freeze([]), $e = Object.freeze({});
function NC(o, i, t) {
  return void (-6967 * 1 + 97 * -14 + 333 * 25) === t && (t = $e), o.theme !== t.theme && o.theme || i || t.theme;
}
var ig = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), FC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, SC = /(^-|-$)/g;
function Hn(o) {
  return o.replace(FC, "-").replace(SC, "");
}
var RC = /(a)(d)/gi, ro = 6484 + -34 * -125 + -10682, Kn = function(o) {
  return String.fromCharCode(o + (o > 3020 + -101 * -59 + -8954 ? -2 * -3191 + 5988 + -12331 : -8695 + 226 * -24 + 14216));
};
function gg(o) {
  var i, t = "";
  for (i = Math.abs(o); i > ro; i = i / ro | -4333 + -2 * 1678 + 11 * 699) t = Kn(i % ro) + t;
  return (Kn(i % ro) + t).replace(RC, "$1-$2");
}
var ki, m0 = -1758 * 2 + -4961 + -338 * -41, he = function(o, i) {
  for (var t = i.length; t; ) o = (6012 + 3 * -1993) * o ^ i.charCodeAt(--t);
  return o;
}, b0 = function(o) {
  return he(m0, o);
};
function MC(o) {
  return gg(b0(o) >>> -1 * -154 + -17 * -493 + 569 * -15);
}
function G0(o) {
  return O.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Ni(o) {
  return typeof o == "string" && (O.NODE_ENV === "production" || o.charAt(-12268 + 6134 * 2) === o.charAt(2782 + 1 * -2782).toLowerCase());
}
var vA = {};
vA.childContextTypes = !0, vA.contextType = !0, vA.contextTypes = !0, vA.defaultProps = !0, vA.displayName = !0, vA.getDefaultProps = !0, vA.getDerivedStateFromError = !0, vA.getDerivedStateFromProps = !0, vA.mixins = !0, vA.propTypes = !0, vA.type = !0;
var Ie = {};
Ie.name = !0, Ie.length = !0, Ie.prototype = !0, Ie.caller = !0, Ie.callee = !0, Ie.arguments = !0, Ie.arity = !0;
var le = {};
le.$$typeof = !0, le.compare = !0, le.defaultProps = !0, le.displayName = !0, le.propTypes = !0, le.type = !0;
var Oe = {};
Oe.$$typeof = !0, Oe.render = !0, Oe.defaultProps = !0, Oe.displayName = !0, Oe.propTypes = !0;
var k0 = typeof Symbol == "function" && Symbol.for, N0 = k0 ? Symbol.for("react.memo") : 978 * 46 + 68147 + -241 * 220, vC = k0 ? Symbol.for("react.forward_ref") : -1028 * -34 + -2 * 39759 + 104678, LC = vA, JC = Ie, F0 = le, YC = ((ki = {})[vC] = Oe, ki[N0] = F0, ki);
function Tn(o) {
  return ("type" in (i = o) && i.type.$$typeof) === N0 ? F0 : "$$typeof" in o ? YC[o.$$typeof] : LC;
  var i;
}
var UC = Object.defineProperty, WC = Object.getOwnPropertyNames, Pn = Object.getOwnPropertySymbols, OC = Object.getOwnPropertyDescriptor, HC = Object.getPrototypeOf, qn = Object.prototype;
function S0(o, i, t) {
  if (typeof i != "string") {
    if (qn) {
      var e = HC(i);
      e && e !== qn && S0(o, e, t);
    }
    var A = WC(i);
    Pn && (A = A.concat(Pn(i)));
    for (var g = Tn(o), n = Tn(i), I = -1746 + 2 * 873; I < A.length; ++I) {
      var a = A[I];
      if (!(a in JC || t && t[a] || n && a in n || g && a in g)) {
        var r = OC(i, a);
        try {
          UC(o, a, r);
        } catch {
        }
      }
    }
  }
  return o;
}
function At(o) {
  return typeof o == "function";
}
function Vg(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function pe(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function jn(o, i) {
  if (3 * 1951 + -1847 * 1 + 1 * -4006 === o.length) return "";
  for (var t = o[5577 + -507 * 11], e = 7232 + 7 * -1033; e < o.length; e++) t += o[e];
  return t;
}
function et(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function ng(o, i, t) {
  if (void (-15112 + 2 * 7556) === t && (t = !1), !t && !et(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = 5955 + -5776 * 1 + 1 * -179; e < i.length; e++) o[e] = ng(o[e], i[e]);
  else if (et(i))
    for (var e in i) o[e] = ng(o[e], i[e]);
  return o;
}
function _g(o, i) {
  var t = {};
  t.value = i, Object.defineProperty(o, "toString", t);
}
var eA = {};
eA[1] = `Cannot create styled-component for component: %s.

`, eA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, eA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, eA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, eA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, eA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, eA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', eA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, eA[9] = "Missing document `<head>`\n\n", eA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, eA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, eA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", eA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, eA[14] = `ThemeProvider: "theme" prop is required.

`, eA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", eA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, eA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, eA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var KC = O.NODE_ENV !== "production" ? eA : {};
function TC() {
  for (var o = [], i = -6113 + 7643 * 1 + 10 * -153; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[1 * -5941 + -9505 + 15446], e = [], A = 1049 * 8 + 1 * -8534 + -11 * -13, g = o.length; A < g; A += 7481 + -10 * 748) e.push(o[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function nt(o) {
  for (var i = [], t = -1946 + 6127 * 1 + -76 * 55; t < arguments.length; t++) i[t - (1261 + 45 * -28)] = arguments[t];
  return O.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > 9839 + -9109 * -1 + 3 * -6316 ? " Args: ".concat(i.join(", ")) : "")) : new Error(TC.apply(void (1 * -9671 + -8514 + -1 * -18185), Ve([KC[o]], i, !1)).trim());
}
var PC = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(-35 * -283 + -87 * -86 + 5 * -3375), this.length = 1 * -5587 + -394 * -21 + 15 * -145, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = -1 * 1846 + 1959 + -113, e = -358 * 20 + 517 + 6643; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, g = A; i >= g; ) if ((g <<= -4243 * -1 + 1516 + 1 * -5758) < -54 * -13 + 2423 + -3125) throw nt(1 * 5021 + 4913 + 261 * -38, "".concat(i));
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(e), this.length = g;
      for (var n = A; n < g; n++) this.groupSizes[n] = 672 * 1 + -3245 + 1 * 2573;
    }
    for (var I = this.indexOfGroup(i + (-5045 + -6 * -1130 + -1734 * 1)), a = (n = 5750 + -5749 * -1 + -11499 * 1, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[i]++, I++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 0;
      for (var g = e; g < A; g++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || this.groupSizes[i] === 0) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), g = A + e, n = A; n < g; n++) t += "".concat(this.tag.getRule(n)).concat(jg);
    return t;
  }, o;
}(), qC = 4023 + 719 * -7 + 1011 << 2374 + -9 * 1033 + 17 * 409, po = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), yo = -4827 * 1 + 6854 * -1 + 11682, Co = function(o) {
  if (po.has(o)) return po.get(o);
  for (; Mo.has(yo); ) yo++;
  var i = yo++;
  if (O.NODE_ENV !== "production" && ((4211 * -1 + -479 + 2 * 2345 | i) < 7025 + -1 * 7025 || i > qC)) throw nt(-3050 * 3 + 2433 * 3 + -1 * -1867, "".concat(i));
  return po.set(o, i), Mo.set(i, o), i;
}, jC = function(o, i) {
  yo = i + (-1 * 2948 + -5154 + -111 * -73), po.set(o, i), Mo.set(i, o);
}, ZC = "style[".concat(Re, "][").concat(w0, '="').concat(ci, '"]'), VC = new RegExp("^".concat(Re, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), _C = function(o, i, t) {
  for (var e, A = t.split(","), g = -806 * -7 + -2939 * 1 + 51 * -53, n = A.length; g < n; g++) (e = A[g]) && o.registerName(i, e);
}, zC = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (49 * -18 + -4 * 2386 + -802 * -13) !== t ? t : "").split(jg), A = [], g = 4379 * -1 + -6809 + 11188, n = e.length; g < n; g++) {
    var I = e[g].trim();
    if (I) {
      var a = I.match(VC);
      if (a) {
        var r = 0 | parseInt(a[1], 10), s = a[1 * 6887 + 11 * -271 + -3904];
        r !== 0 && (jC(s, r), _C(o, s, a[17760 + 17757 * -1]), o.getTag().insertRules(r, A)), A.length = -845 * 7 + 2956 + -1 * -2959;
      } else A.push(I);
    }
  }
};
function XC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var R0 = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(Re, "]")));
    return a[a.length - (9009 + 263 * 35 + -18213)];
  }(t), g = void (-2228 + -2 * -1114) !== A ? A.nextSibling : null;
  e.setAttribute(Re, D0), e.setAttribute(w0, ci);
  var n = XC();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, g), e;
}, $C = function() {
  function o(i) {
    this.element = R0(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 2 * -581 + -1 * -2239 + -1077, g = e.length; A < g; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw nt(17);
    }(this.element), this.length = -2871 * -1 + -26 * 92 + -479;
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
}(), AB = function() {
  function o(i) {
    this.element = R0(i), this.nodes = this.element.childNodes, this.length = -2305 * -2 + -9128 + 4518;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= 43 * 213 + -3983 + -5176) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), eB = function() {
  function o(i) {
    this.rules = [], this.length = 1 * 2727 + 3 * -1583 + -6 * -337;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -3 * 42 + 1126 + -1e3, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, 31 * -166 + 18 * 337 + -919 * 1), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), Zn = Zg, tB = { isServer: !Zg, useCSSOMInjection: !GC }, M0 = function() {
  function o(i, t, e) {
    void (409 * -1 + 7522 + -7113) === i && (i = $e), void (-739 + 18 * 181 + -2519) === t && (t = {});
    var A = this;
    this.options = bA(bA({}, tB), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Zg && Zn && (Zn = !1, function(g) {
      for (var n = document.querySelectorAll(ZC), I = -1 * -5051 + 3062 + -133 * 61, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(Re) !== D0 && (zC(g, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), _g(this, function() {
      return function(g) {
        for (var n = g.getTag(), I = n.length, a = "", r = function(C) {
          var x = function(c) {
            return Mo.get(c);
          }(C);
          if (void (-2519 * 1 + 711 + 16 * 113) === x) return "continue";
          var Q = g.names.get(x), E = n.getGroup(C);
          if (void (4714 + -1004 * -1 + -2859 * 2) === Q || 933 * -1 + 3640 + -2707 === E.length) return "continue";
          var d = "".concat(Re, ".g").concat(C, '[id="').concat(x, '"]'), u = "";
          void (7324 + 2705 * -1 + -4619) !== Q && Q.forEach(function(c) {
            c.length > 0 && (u += "".concat(c, ","));
          }), a += "".concat(E).concat(d, '{content:"').concat(u, '"}').concat(jg);
        }, s = 4695 + 23 * 205 + -2 * 4705; s < I; s++) r(s);
        return a;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return Co(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return void (-7 * -1303 + 5601 * -1 + -3520) === t && (t = !0), new o(bA(bA({}, this.options), i), this.gs, t && this.names || void (-521 * 5 + -431 * 18 + -10363 * -1));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || -2119 * -2 + -9539 + 5301) + (-9600 + -34 * -269 + 35 * 13);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new eB(A) : e ? new $C(A) : new AB(A);
    }(this.options), new PC(i)));
    var i;
  }, o.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, o.prototype.registerName = function(i, t) {
    if (Co(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, o.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(Co(i), e);
  }, o.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, o.prototype.clearRules = function(i) {
    this.getTag().clearGroup(Co(i)), this.clearNames(i);
  }, o.prototype.clearTag = function() {
    this.tag = void (-1 * 6631 + -5867 + 6 * 2083);
  }, o;
}(), oB = /&/g, iB = /^\s*\/\/.*$/gm;
function v0(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = v0(t.children, i)), t;
  });
}
function L0(o) {
  var i, t, e, A = o === void 0 ? $e : o, g = A.options, n = void (-93 + 173 * -53 + 9262) === g ? $e : g, I = A.plugins, a = void (530 * -16 + 44 * 186 + 4 * 74) === I ? xi : I, r = function(x, Q, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 0 ? ".".concat(i) : x;
  }, s = a.slice();
  s.push(function(x) {
    x.type === Ci && x.value.includes("&") && (x.props[-7175 + 1543 * -1 + 8718] = x.props[-6098 + -3049 * -2].replace(oB, t).replace(e, r));
  }), n.prefix && s.push(mC), s.push(yC);
  var C = function(x, Q, E, d) {
    void (43 * 23 + -61 * 70 + 3281 * 1) === Q && (Q = ""), void (29 * 43 + 303 * 21 + -7610) === E && (E = ""), d === void 0 && (d = "&"), i = d, t = Q, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = x.replace(iB, ""), c = fC(E || Q ? "".concat(E, " ").concat(Q, " { ").concat(u, " }") : u);
    n.namespace && (c = v0(c, n.namespace));
    var h = [];
    return Ro(c, DC(s.concat(wC(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(x, Q) {
    return Q.name || nt(301 * 21 + -6489 + 183), he(x, Q.name);
  }, m0).toString() : "", C;
}
var gB = new M0(), Ig = L0(), zg = Se.createContext({ shouldForwardProp: void (3 * -1233 + 3543 + 156), styleSheet: gB, stylis: Ig });
zg.Consumer;
var nB = Se.createContext(void (14354 + -2 * 7177));
function ag() {
  return xe(zg);
}
function IB(o) {
  var i = cA(o.stylisPlugins), t = i[-11334 + -3778 * -3], e = i[8 * 96 + -4 * -2315 + 37 * -271], A = ag().styleSheet, g = hA(function() {
    var s = A, C = {};
    return C.useCSSOMInjection = !1, o.sheet ? s = o.sheet : o.target && (s = s.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (s = s.reconstructWithOptions(C)), s;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), n = hA(function() {
    var s = {};
    s.namespace = o.namespace, s.prefix = o.enableVendorPrefixes;
    var C = {};
    return C.options = s, C.plugins = t, L0(C);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  P(function() {
    aC(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var I = hA(function() {
    var s = {};
    return s.shouldForwardProp = o.shouldForwardProp, s.styleSheet = g, s.stylis = n, s;
  }, [o.shouldForwardProp, g, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, Se.createElement(zg.Provider, a, Se.createElement(nB.Provider, r, o.children));
}
var Vn = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, g) {
      g === void 0 && (g = Ig);
      var n = e.name + g.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, g(e.rules, n, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, _g(this, function() {
      throw nt(153 * -54 + -5419 + 13693, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return void (-1 * -8718 + 1 * -4285 + -13 * 341) === i && (i = Ig), this.name + i.hash;
  }, o;
}(), aB = function(o) {
  return o >= "A" && o <= "Z";
};
function _n(o) {
  for (var i = "", t = 5210 + 271 * -4 + 4126 * -1; t < o.length; t++) {
    var e = o[t];
    if (t === 1 && e === "-" && o[3959 * -2 + -107 + 8025] === "-") return o;
    aB(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var J0 = function(o) {
  return o == null || o === !1 || o === "";
}, Y0 = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var g = o[A];
    o.hasOwnProperty(A) && !J0(g) && (Array.isArray(g) && g.isCss || At(g) ? e.push("".concat(_n(A), ":"), g, ";") : et(g) ? e.push.apply(e, Ve(Ve(["".concat(A, " {")], Y0(g), !1), ["}"], !1)) : e.push("".concat(_n(A), ": ").concat((i = A, (t = g) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 2 * 3590 + 5238 + -12418 === t || i in bC || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Ne(o, i, t, e) {
  if (J0(o)) return [];
  if (Vg(o)) return [".".concat(o.styledComponentId)];
  if (At(o)) {
    if (!At(g = o) || g.prototype && g.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return O.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Vn || et(A) || A === null || console.error("".concat(G0(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ne(A, i, t, e);
  }
  var g;
  return o instanceof Vn ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : et(o) ? Y0(o) : Array.isArray(o) ? Array.prototype.concat.apply(xi, o.map(function(n) {
    return Ne(n, i, t, e);
  })) : [o.toString()];
}
function rB(o) {
  for (var i = -3 * -371 + -253 * 38 + 8501; i < o.length; i += -3 * -973 + -251 * 4 + -11 * 174) {
    var t = o[i];
    if (At(t) && !Vg(t)) return !1;
  }
  return !0;
}
var CB = b0(ci), BB = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = O.NODE_ENV === "production" && (void (-1360 * 5 + 3733 * -1 + 10533) === e || e.isStatic) && rB(i), this.componentId = t, this.baseHash = he(CB, t), this.baseStyle = e, M0.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = pe(A, this.staticRulesId);
      else {
        var g = jn(Ne(this.rules, i, t, e)), n = gg(he(this.baseHash, g) >>> -4469 + -4469 * -1);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(g, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = pe(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = he(this.baseHash, e.hash), r = "", s = 4264 + -2427 * -1 + -6691; s < this.rules.length; s++) {
        var C = this.rules[s];
        if (typeof C == "string") r += C, O.NODE_ENV !== "production" && (a = he(a, C));
        else if (C) {
          var x = jn(Ne(C, i, t, e));
          a = he(a, x + s), r += x;
        }
      }
      if (r) {
        var Q = gg(a >>> 0);
        t.hasNameForId(this.componentId, Q) || t.insertRules(this.componentId, Q, e(r, ".".concat(Q), void (-173 * 36 + -1 * 487 + 6715), this.componentId)), A = pe(A, Q);
      }
    }
    return A;
  }, o;
}(), U0 = Se.createContext(void (-2 * 668 + 7983 * -1 + 9319));
U0.Consumer;
var Fi = {}, zn = /* @__PURE__ */ new Set();
function QB(o, i, t) {
  var e = Vg(o), A = o, g = !Ni(o), n = i.attrs, I = n === void 0 ? xi : n, a = i.componentId, r = void (-484 + -68 * -138 + 89 * -100) === a ? function(v, k) {
    var y = typeof v != "string" ? "sc" : Hn(v);
    Fi[y] = (Fi[y] || 369 * -22 + 3746 * -2 + 15610) + (-115 * -52 + -34 + -29 * 205);
    var K = "".concat(y, "-").concat(MC(ci + y + Fi[y]));
    return k ? "".concat(k, "-").concat(K) : K;
  }(i.displayName, i.parentComponentId) : a, s = i.displayName, C = void (188 * 24 + -6648 + 8 * 267) === s ? function(v) {
    return Ni(v) ? "styled.".concat(v) : "Styled(".concat(G0(v), ")");
  }(o) : s, x = i.displayName && i.componentId ? "".concat(Hn(i.displayName), "-").concat(i.componentId) : i.componentId || r, Q = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, E = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var u = i.shouldForwardProp;
      E = function(v, k) {
        return d(v, k) && u(v, k);
      };
    } else E = d;
  }
  var c = new BB(t, x, e ? A.componentStyle : void (7514 + -1081 * 7 + 53));
  function h(v, k) {
    return function(y, K, QA) {
      var $ = y.attrs, RA = y.componentStyle, Z = y.defaultProps, Ct = y.foldedComponentIds, cn = y.styledComponentId, tr = y.target, or = Se.useContext(U0), ir = ag(), fi = y.shouldForwardProp || ir.shouldForwardProp;
      O.NODE_ENV !== "production" && So(cn);
      var xn = NC(K, or, Z) || $e, _A = function(io, st, go) {
        var Je = {};
        Je.className = void (9457 + -1 * 9457), Je.theme = go;
        for (var Di, Ee = bA(bA({}, st), Je), wi = -1 * 9931 + -83 * 59 + 14828; wi < io.length; wi += -39 * 82 + -9209 + 12408) {
          var no = At(Di = io[wi]) ? Di(Ee) : Di;
          for (var ge in no) Ee[ge] = ge === "className" ? pe(Ee[ge], no[ge]) : ge === "style" ? bA(bA({}, Ee[ge]), no[ge]) : no[ge];
        }
        return st.className && (Ee.className = pe(Ee.className, st.className)), Ee;
      }($, K, xn), Bt = _A.as || tr, Qt = {};
      for (var MA in _A) _A[MA] === void 0 || MA[8079 + 873 * -11 + 2 * 762] === "$" || MA === "as" || MA === "theme" && _A.theme === xn || (MA === "forwardedAs" ? Qt.as = _A.forwardedAs : fi && !fi(MA, Bt) || (Qt[MA] = _A[MA], fi || O.NODE_ENV !== "development" || pr(MA) || zn.has(MA) || !ig.has(Bt) || (zn.add(MA), console.warn('styled-components: it looks like an unknown prop "'.concat(MA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pi = function(io, st) {
        var go = ag(), Je = io.generateAndInjectStyles(st, go.styleSheet, go.stylis);
        return O.NODE_ENV !== "production" && So(Je), Je;
      }(RA, _A);
      O.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(pi);
      var yi = pe(Ct, cn);
      return pi && (yi += " " + pi), _A.className && (yi += " " + _A.className), Qt[Ni(Bt) && !ig.has(Bt) ? "class" : "className"] = yi, Qt.ref = QA, uA(Bt, Qt);
    }(m, v, k);
  }
  h.displayName = C;
  var m = Se.forwardRef(h), F = {};
  return F.attrs = !0, F.componentStyle = !0, F.displayName = !0, F.foldedComponentIds = !0, F.shouldForwardProp = !0, F.styledComponentId = !0, F.target = !0, m.attrs = Q, m.componentStyle = c, m.displayName = C, m.shouldForwardProp = E, m.foldedComponentIds = e ? pe(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : o, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = e ? function(k) {
      for (var y = [], K = -3617 * 1 + 2248 + 1370; K < arguments.length; K++) y[K - (-1 * 9991 + -8464 + 3 * 6152)] = arguments[K];
      for (var QA = 0, $ = y; QA < $.length; QA++) ng(k, $[QA], !0);
      return k;
    }({}, A.defaultProps, v) : v;
  } }), O.NODE_ENV !== "production" && (kC(C, x), m.warnTooManyClasses = /* @__PURE__ */ function(v, k) {
    var y = {}, K = !1;
    return function(QA) {
      if (!K && (y[QA] = !0, Object.keys(y).length >= 1842 + 1642 * -1)) {
        var $ = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(-8837 + -8517 * 1 + 134 * 131, " classes were generated for component ").concat(v).concat($, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), K = !0, y = {};
      }
    };
  }(C, x)), _g(m, function() {
    return ".".concat(m.styledComponentId);
  }), g && S0(m, o, F), m;
}
function Xn(o, i) {
  for (var t = [o[-6699 + -21 * 103 + 8862 * 1]], e = 21 * -269 + -5827 + 11476 * 1, A = i.length; e < A; e += 1) t.push(i[e], o[e + (2 * -3926 + -4699 + -1569 * -8)]);
  return t;
}
var $n = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function W0(o) {
  for (var i = [], t = 2763 * 3 + -4519 + -3769 * 1; t < arguments.length; t++) i[t - (-2635 + -1318 * -2)] = arguments[t];
  if (At(o) || et(o)) return $n(Ne(Xn(xi, Ve([o], i, !0))));
  var e = o;
  return 7698 + 3209 * 1 + -10907 === i.length && 3702 + -123 * 27 + -380 === e.length && typeof e[0] == "string" ? Ne(e) : $n(Ne(Xn(e, i)));
}
function rg(o, i, t) {
  if (void (1 * 5519 + -329 * 6 + -3545) === t && (t = $e), !i) throw nt(-4556 + 2 * 4831 + -5105, i);
  var e = function(A) {
    for (var g = [], n = 8516 + -25 * -347 + 15 * -1146; n < arguments.length; n++) g[n - (2 * 4226 + -1 * 4993 + -3458)] = arguments[n];
    return o(i, t, W0.apply(void (-2518 * 3 + 46 + 7508), Ve([A], g, !1)));
  };
  return e.attrs = function(A) {
    return rg(o, i, bA(bA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return rg(o, i, bA(bA({}, t), A));
  }, e;
}
var O0 = function(o) {
  return rg(QB, o);
}, It = O0;
ig.forEach(function(o) {
  It[o] = O0(o);
});
O.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Bo = "__sc-".concat(Re, "__");
O.NODE_ENV !== "production" && O.NODE_ENV !== "test" && typeof window < "u" && (window[Bo] || (window[Bo] = -495 * 7 + 1467 + 222 * 9), -7301 + -6 * -1217 === window[Bo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Bo] += -4 * 2296 + 1 * 8161 + 1024);
const sB = It.div`
  position: relative;
`, cB = It.video`
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
const Do = {};
Do.CONTINUE_DETECTION = "continue-detection", Do.SWITCH_CAMERA = "switch-camera", Do.TOGGLE_MIRROR = "toggle-mirror";
const Si = Do, Cg = {};
Cg.FIRST_FRAME = "first-frame", Cg.FIRST_VALID_FRAME = "first-valid-frame";
const Ri = Cg, H0 = {};
H0.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const AI = H0;
var K0 = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(K0 || {}), Be = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(Be || {}), St = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(St || {}), xB = ((o) => (o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(xB || {}), EB = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(EB || {}), dB = ((o) => (o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(dB || {});
const T0 = {};
T0.EYE_NOT_PRESENT = "eye_not_present";
const eI = T0, dA = {};
dA.CANDIDATE_SELECTION = "candidate_selection", dA.FACE_TOO_CLOSE = "face_too_close", dA.FACE_TOO_FAR = "face_too_far", dA.FACE_CENTERING = "face_centering", dA.FACE_NOT_PRESENT = "face_not_present", dA.SHARPNESS_TOO_LOW = "sharpness_too_low", dA.BRIGHTNESS_TOO_LOW = "brightness_too_low", dA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", dA.DEVICE_PITCHED = "device_pitched", dA.LEFT_EYE_NOT_PRESENT = "left_" + eI.EYE_NOT_PRESENT, dA.RIGHT_EYE_NOT_PRESENT = "right_" + eI.EYE_NOT_PRESENT, dA.MOUTH_NOT_PRESENT = "mouth_not_present", dA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", dA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const tA = dA, yA = {};
yA.isPresent = tA.FACE_NOT_PRESENT, yA.isNotPitched = tA.DEVICE_PITCHED, yA.isNotSmall = tA.FACE_TOO_FAR, yA.isNotLarge = tA.FACE_TOO_CLOSE, yA.isNotOutOfBounds = tA.FACE_CENTERING, yA.isNotDim = tA.BRIGHTNESS_TOO_LOW, yA.isNotBright = tA.BRIGHTNESS_TOO_HIGH, yA.isSharp = tA.SHARPNESS_TOO_LOW, yA.isLeftEyePresent = tA.LEFT_EYE_NOT_PRESENT, yA.isRightEyePresent = tA.RIGHT_EYE_NOT_PRESENT, yA.isMouthPresent = tA.MOUTH_NOT_PRESENT, yA.isMouthScoreNotTooHigh = tA.MOUTH_SCORE_TOO_HIGH, yA.isMouthScoreNotTooLow = tA.MOUTH_SCORE_TOO_LOW;
const lB = yA, Bg = {};
Bg.FRONT = "user", Bg.REAR = "environment";
const Xg = Bg, Qg = {};
Qg.AUTO_CAPTURE = "AUTO_CAPTURE", Qg.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const P0 = Qg, ut = {};
ut.LOADING = "LOADING", ut.ERROR = "ERROR", ut.WAITING = "WAITING", ut.RUNNING = "RUNNING";
const qA = ut;
({ ...tA });
var mA = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(mA || {});
const q0 = { ...qA };
q0.DONE = "DONE";
const ee = q0;
({ ...tA });
({ ...tA });
const Ei = tt(void 0);
Ei.displayName = "AppStateContext";
function at() {
  const o = xe(Ei);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const uB = Ei.Provider, j0 = at;
class Z0 extends LA {
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
    return ((i = this.context) == null ? void 0 : i.appState) === qA.ERROR ? null : this.props.children;
  }
}
D(Z0, "contextType", Ei);
const hB = It.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, fB = It.div`
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
function pB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const yB = g0(
  ({ detectionDetails: o, isImageMirror: i }, t) => pB() ? (console.log(o), /* @__PURE__ */ p(YA, { children: [
    /* @__PURE__ */ p(hB, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ p(fB, { children: /* @__PURE__ */ p("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), vo = tt(void 0);
vo.displayName = "AnalyticsContext";
function V0() {
  const o = xe(vo);
  if (o === void 0)
    throw new Error(`${vo.displayName} must be used within a AnalyticsProvider`);
  return o;
}
function tI(o, i, t, e, A) {
  return iA(A - -723, t);
}
function _0(o, i, t, e, A) {
  return iA(o - 644, t);
}
function oI(o, i, t, e, A) {
  return iA(i - 570, o);
}
(function(o, i) {
  function t(a, r, s, C, x) {
    return iA(r - -101, s);
  }
  function e(a, r, s, C, x) {
    return iA(s - -766, C);
  }
  function A(a, r, s, C, x) {
    return iA(r - 639, a);
  }
  const g = o();
  function n(a, r, s, C, x) {
    return iA(x - 454, C);
  }
  function I(a, r, s, C, x) {
    return iA(a - 405, s);
  }
  for (; ; )
    try {
      if (parseInt(t(327, 310, "NyW2", 326, 327)) / 1 * (-parseInt(t(297, 304, "0c]5", 314, 318)) / 2) + -parseInt(e(-335, -360, -353, "UJe0", -336)) / 3 + parseInt(n(857, 839, 860, "0#K5", 849)) / 4 + parseInt(A("]5UD", 1035, 1034, 1038, 1026)) / 5 * (parseInt(n(859, 851, 858, "J])t", 870)) / 6) + parseInt(e(-369, -351, -367, "NCxl", -350)) / 7 * (parseInt(I(824, 813, "8Woi", 821, 832)) / 8) + -parseInt(A("J])t", 1040, 1026, 1037, 1051)) / 9 * (-parseInt(I(823, 820, "lPpA", 807, 815)) / 10) + -parseInt(n(838, 852, 839, "P]z5", 854)) / 11 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Jo, 713369);
function iA(o, i) {
  const t = Jo();
  return iA = function(e, A) {
    e = e - (-3 * -2919 + -636 * 3 + 2153 * -3);
    let g = t[e];
    if (iA.sOLHUp === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      iA.QZsfZt = s, o = arguments, iA.sOLHUp = !0;
    }
    const I = t[4439 * 1 + -1626 + -29 * 97], a = e + I, r = o[a];
    return r ? g = r : (iA.tzyWGq === void 0 && (iA.tzyWGq = !0), g = iA.QZsfZt(g, A), o[a] = g), g;
  }, iA(o, i);
}
function iI(o, i, t, e, A) {
  return iA(A - 710, e);
}
const Lo = tt(void (2120 + -1060 * 2));
function Jo() {
  const o = ["C297", "fConW5q4WQ4", "WO0hW6zYy0xcHrPyE8kNWRDfna", "mSoPcXdcRCogWRuWmrG", "W7HzW5pdKvJcH8oLdcRcJb4t", "iCowW4G+WQS", "F8kOz8ojaCoRW51cWR8Y", "WRizW6tdTXa", "W7XwASoyW6G", "WOxdMYPyomk+W7TJWOC", "exLty8kq", "m8oOfXhdPwFcGCogB3lcUSkTFa", "kmo6W7GLWP0", "pGRcLcX8W5ddSHK/", "naVcK2TRW5JdNce1WPa", "WO0bW6jYAIhdVKLMqCkN", "WOBcULRcPdCRWR1bWO/cGZ4g", "WO8hW6aZedhdTenZ", "pbHjW7vb", "oSoBrdbXWQFcTmkQimo1WQHFCG", "W605W7mrxcvBFCk1", "WOhcU1/cPZqTW713WQNcVsG9WOW", "WPNcOmosW7zhW4JdGCkzWOW", "pGrPW6Dj", "ymkGAexcSa", "dam4WOm", "WOlcT8kDxLm", "waqLW5Dv", "omoSfrdcIbddMCofsfW", "WRhdOmo0t10", "B1y0WQaEW519agldRLBdL2a", "AmkMWQKWWQpcSmkBpCokha", "jg7dTmoCv1FdV1m6zW", "AvFdKY9s", "asldLmo8WRldQxddHSouW4hdTa", "WPRcPSovWQ08WOpcOCo3WP5Rccq7WOa", "pWZcLtz0W6/dOY4g"];
  return Jo = function() {
    return o;
  }, Jo();
}
function gI(o, i, t, e, A) {
  return iA(i - -4, A);
}
Lo[gI(385, 399, 402, 410, "[hd1") + tI(-304, -307, "UJe0", -314, -297) + "e"] = _0(1035, 1025, ")rb%") + tI(-296, -320, "^8ph", -305, -313) + gI(400, 386, 385, 377, "obwg");
function eo() {
  function o(n, I, a, r, s) {
    return iI(n - 60, I - 49, a - 367, a, s - -70);
  }
  const i = xe(Lo);
  function t(n, I, a, r, s) {
    return oI(I, n - -1113);
  }
  if (i === void (-2206 * -4 + -91 * -62 + -14466)) throw new Error(Lo[t(-145, "J])t") + g(547, 549, 532, 528, "0#K5") + "e"] + (g(535, 541, 524, 526, "YVi(") + o(1017, 1040, "obwg", 1047, 1032) + A(831, "]5UD") + A(811, "mJGG") + o(1043, 1040, "HUK4", 1057, 1049) + t(-118, "0#K5") + e(886, "[hd1", 864, 882) + o(1060, 1049, "T(t^", 1053, 1042)));
  function e(n, I, a, r, s) {
    return _0(r - -169, I - 176, I);
  }
  function A(n, I, a, r, s) {
    return oI(I, n - -153);
  }
  function g(n, I, a, r, s) {
    return iI(n - 122, I - 456, a - 467, s, a - -598);
  }
  return i;
}
const Rt = (o) => o.length < 1 ? -1479 + -1 * -1479 : o.reduce((t, e) => t + e, 1702 + 1 * -9657 + 7955) / o.length, ie = (o) => Number.parseFloat(o.toFixed(973 * 1 + 2829 + -3799)), DB = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(-1 * 4513 + 2 * 4812 + -5111, -2934 + -97 * 31 + -13 * -457, i.canvas.width, i.canvas.height);
}, z0 = -6157 * 1 + 14 * 526 + -17 * 71 + 0.75, wB = -17595 + 1 * 17597, mB = -43 * -87 + -9487 + 6346, bB = 0, GB = "dot-auto-capture-video", di = (o, i) => Math.min(o, i), X0 = ({ height: o, width: i }, t) => {
  const e = di(i, o) * t, A = (i - e) / (5197 * -1 + -977 * 2 + 1 * 7153), g = (o - e) / (5661 + -1907 * -5 + -15194), n = {};
  return n.shiftX = A, n.shiftY = g, n.width = e, n.height = e, n;
}, kB = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = X0(o, i), n = {};
  return n.shiftX = e / o.width, n.shiftY = A / o.height, n.width = g / o.width, n.height = t / o.height, n;
}, NB = ({ height: o, width: i }) => {
  const t = di(i, o), e = t / (1 * -9587 + -8680 + 18270) * (-2271 + 4 * -1755 + -55 * -169);
  if (i > o) {
    const g = {};
    return g.width = e, g.height = t, g;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, FB = (o, i) => {
  const t = di(i.width, i.height);
  return ie(o * t);
}, SB = ({ height: o, width: i }) => {
  const t = {};
  return t.height = o, t.width = i, X0(t, z0);
}, RB = (o) => kB(o, z0), MB = (o, i) => FB(o, i) * wB, vB = "@innovatrics/dot-common-auto-capture", LB = "7.2.1", JB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, YB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, UB = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, WB = {
  name: vB,
  private: !0,
  version: LB,
  scripts: JB,
  dependencies: YB,
  devDependencies: UB
}, OB = -1 * 9341 + -10 * 953 + 18871 + 0.4, HB = -3 * 2283 + -1215 + 36 * 224 + 0.16, KB = -4717 + 89 * 53 + 0.2, TB = 3733 + -1 * 3733 + 0.05, PB = 9537 + -2 * -2137 + -13811 * 1, sg = {};
sg.min = -(-2 * -4206 + -5899 + 2 * -1256), sg.max = 1;
const nI = sg, II = 0, qB = -3707 + -6531 * -1 + -2824 + 0.25, jB = 18221 + -2603 * 7 + 0.2, ZB = -4019 * 2 + -5134 + 13172 + 0.85, VB = -10823 + 1 * 10853, _B = 17217 + 239 * -72 + 0.8100000000000005, wo = {};
wo.minDuration = 1e3, wo.maxDuration = 2500, wo.minFrames = 10;
const Mi = wo, cg = {};
cg.max = 100, cg.min = 10;
const aI = cg, zB = -1 * 7615 + -6078 + 7 * 2059, XB = -878 * -3 + 280 + -2714, $B = 8823 * -1 + -3757 + 12584, ht = {};
ht.width = 200, ht.height = 200, ht.top = 50, ht.left = 50;
const AQ = ht, $0 = "AES-CBC", Aa = "RSA-OAEP", eQ = "SHA-256", tQ = "image/jpeg", oQ = 2891 + -31 * 93, iQ = 469 * 5 + -6961 + -24 * -194, ea = "/dot-assets", rI = "dot_embedded_bg.wasm", ta = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), CI = () => {
  const o = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return o && i;
}, gQ = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, xg = (o) => new Promise((i) => {
  setTimeout(i, o);
}), oa = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? ie(t) : t)), ia = () => WB.version, ga = (o) => new URL(o).hostname.replace("www.", ""), nQ = () => ga(window.location.href) === "localhost", Qo = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), IQ = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o, BI = (o, i) => Math.abs(o - i);
function aQ(o, i) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, o(...e);
    };
    t === void (-6710 + -1 * -8985 + -2275) && (t = setTimeout(A, i));
  };
}
function rQ(o) {
  return o.at(-(5706 + -7 * 815)) === "/" ? o.slice(-4076 * -2 + 6994 + 15146 * -1, -(-2678 * 2 + -286 + 5643)) : o;
}
function na(o) {
  return "" + rQ(o ?? "") + ea;
}
const CQ = () => "prod".toLowerCase() === "dev";
var re;
class $g extends Array {
  constructor(t) {
    super();
    W(this, re);
    J(this, re, t);
  }
  get size() {
    return w(this, re);
  }
  pushFixed(...t) {
    if (t.length > w(this, re)) {
      const e = t.slice(-w(this, re));
      this.push(...e);
      return;
    }
    this.length === w(this, re) && this.splice(-348 + -6458 * -1 + -2 * 3055, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(5415 + -2377 * -3 + -12546 * 1);
  }
}
re = new WeakMap();
const Ia = (o, i, t = tQ) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), aa = async (o) => Ia(o, -6013 + 6103 * 1), BQ = async (o) => Ia(o, -9893 * 1 + -29 * 151 + 14372, "image/png"), ra = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, -8232 + 2843 * -1 + -443 * -25, 746 * -7 + -9610 + 14832, t.width, t.height), t;
}, QQ = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(0, -3024 + 1 * 4945 + -113 * 17, o.width, o.height);
  return t;
};
function QI(o, i, t) {
  return t - i / (1556 + -4 * 341 + -5 * 38) < 1266 * -1 + 6295 + -5029 * 1 ? 1 * 5351 + -7841 + 2 * 1245 : t + i / (2 * -2203 + 4539 + -131) > o ? o - i : t - i / (-2241 * -3 + 5849 + -6 * 2095);
}
function sQ(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / (-1581 * 2 + -9139 + 12401)), g = e * (i.top / (-2335 * 2 + -271 * 7 + 6667));
  return { width: i.width, height: i.height, shiftX: QI(t, i.width, A), shiftY: QI(e, i.height, g) };
}
async function cQ(o, i) {
  const t = sQ(o, i), e = ra(o, t);
  return BQ(e);
}
const Ca = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), A.stroke());
}, vi = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: g, width: n } = i, I = {};
  I.x = A, I.y = g;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, Ca(o, a, t);
}, bt = (o, i, t, e = 786 + 471 * -19 + -2721 * -3) => {
  const A = o.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(i.x + e, i.y + e, -6091 + -2 * 336 + 6770, 1 * -5101 + -8327 * -1 + -3219), A.beginPath());
}, xQ = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = i;
  return !(o.x < e || o.x > e + g || o.y < A || o.y > A + t);
}, EQ = (o, i) => Object.values(o).every((t) => xQ(t, i));
function Yo(o) {
  const { height: i, width: t } = NB(o), e = (o.width - t) / (735 + 1 * 6857 + -7590), A = (o.height - i) / (-9533 * -1 + 930 + 317 * -33), g = {};
  return g.shiftX = e, g.shiftY = A, g.width = t, g.height = i, g;
}
function Ba(o, i, t) {
  const { height: e, width: A } = t, g = di(o.width, o.height), n = A - g * i * (1 * 2475 + 1798 + -4271), I = e - g * i * (-7 * 1186 + 1 * -4733 + 13037), a = (o.width - n) / (2797 + -43 * 65), r = (o.height - I) / (1488 + 2869 * 1 + -5 * 871), s = {};
  return s.shiftX = a, s.shiftY = r, s.width = n, s.height = I, s;
}
function Ue(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
(function(o, i) {
  function t(I, a, r, s, C) {
    return CA(C - -154, s);
  }
  function e(I, a, r, s, C) {
    return CA(a - 27, s);
  }
  function A(I, a, r, s, C) {
    return CA(s - 284, I);
  }
  const g = o();
  function n(I, a, r, s, C) {
    return CA(C - -107, s);
  }
  for (; ; )
    try {
      if (parseInt(A("wGAy", 536, 541, 538, 540)) / 1 + -parseInt(e(297, 299, 308, "AwF%", 310)) / 2 + parseInt(A("P#*&", 547, 549, 553, 549)) / 3 * (parseInt(t(115, 124, 123, "jX!W", 122)) / 4) + parseInt(A("#sMA", 553, 545, 545, 535)) / 5 + parseInt(t(93, 115, 92, "oAo9", 103)) / 6 * (-parseInt(t(123, 110, 109, "e%e5", 117)) / 7) + parseInt(e(286, 286, 274, "r@6W", 289)) / 8 + -parseInt(n(152, 177, 156, "*Lc#", 166)) / 9 * (-parseInt(A("EJKz", 528, 544, 539, 532)) / 10) === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Uo, -435778 + -317 * 1279 + 1091794);
function CA(o, i) {
  const t = Uo();
  return CA = function(e, A) {
    e = e - 250;
    let g = t[e];
    if (CA.IIJBDw === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      CA.DllLGx = s, o = arguments, CA.IIJBDw = !0;
    }
    const I = t[0], a = e + I, r = o[a];
    return r ? g = r : (CA.qbqXHp === void 0 && (CA.qbqXHp = !0), g = CA.DllLGx(g, A), o[a] = g), g;
  }, CA(o, i);
}
function Uo() {
  const o = ["emkXW57cOCoQ", "W6XrW6dcGG", "ovTSfW8", "zHfog8oMW4ZcStZdQ27dRq", "Cmo2bSkBWOC", "BCoZW7H9WRa", "tSkCW6pcHCoBWO04", "sSoNW4lcS8ofWRCWW7m", "W4e2t8k0sG", "ydT9WQqcW6DpWQJdQSkDW57cQCoe", "ACk/ib53W67cH8kaE38kEW", "WRX0W6hcSXi5W48", "WPZcMSkph3q", "W5RcGaZcUr/cRmoB", "aG3cT0/cJCkmrSkuldVdLW", "W5VcHq0AFhyMW6CAW4xcTmkWvG", "DHZcJhFdRCkZWOXmFSk/WQrmWP4", "W4RcUmkwWORcTSoXoKG", "yb5ifCoIWQZcJJddINpdVCot", "rCobWORcOLBcTmkovb49j8ov", "WOGtW4aljZxdK3RdJd7dICoV", "AabHomk8fmozWO3dMLVcUNW", "WPFcG8kBbYZdK8kY", "WRldS8oOWORcH8obW5P8sSoasSoM", "WPrRc8opg3iCW6iTWQ8cWO3cRa", "oLX4W5ZcVJdcK8kWW7qGWOZdRIO", "EX8Wq1yAESkVj8o9W6BcUSkM"];
  return Uo = function() {
    return o;
  }, Uo();
}
function dQ({ assetsDirectoryPath: o, bramble: i }) {
  const [t, e] = cA(), A = t !== void (4184 + 27 * 246 + -10826);
  function g(a, r, s, C, x) {
    return CA(a - -408, r);
  }
  P(() => {
    async function a() {
      function r(x, Q, E, d, u) {
        return CA(Q - -862, x);
      }
      function s(x, Q, E, d, u) {
        return CA(x - 66, E);
      }
      await i[C("*Lc#", -400, -386, -381, -389)](na(o));
      function C(x, Q, E, d, u) {
        return CA(u - -652, x);
      }
      e(i[s(336, 328, "r@6W") + s(333, 324, "93Ys") + r("CV^G", -588) + "t"]());
    }
    a();
  }, [i, o, e]);
  const n = {};
  function I(a, r, s, C, x) {
    return CA(x - -307, a);
  }
  return n[I("q2pF", -45, -45, -30, -41) + g(-146, "P#*&")] = t, n[g(-144, "#sMA") + "sh"] = A, n;
}
var Qa = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(Qa || {});
const Eg = {};
Eg.SIMD = "simd", Eg.NO_SIMD = "no-simd";
const sI = Eg, dg = {};
dg.Lower = "Lower", dg.Higher = "Higher";
const lg = dg, mo = {};
mo.VISIBLE = "VISIBLE", mo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", mo.HIDDEN = "HIDDEN";
const Gt = mo;
function lA(o, i) {
  var t = Wo();
  return lA = function(e, A) {
    e = e - 223;
    var g = t[e];
    if (lA.iLZTeG === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, F = Q.length; m < F; m++)
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
      lA.zPZZRo = I, o = arguments, lA.iLZTeG = !0;
    }
    var a = t[-1 * -1963 + -9924 * -1 + -11887], r = e + a, s = o[r];
    return s ? g = s : (lA.IxVvBJ === void 0 && (lA.IxVvBJ = !0), g = lA.zPZZRo(g, A), o[r] = g), g;
  }, lA(o, i);
}
(function(o, i) {
  var t = o();
  function e(r, s, C, x, Q) {
    return lA(Q - -684, C);
  }
  function A(r, s, C, x, Q) {
    return lA(Q - 553, x);
  }
  function g(r, s, C, x, Q) {
    return lA(r - 275, C);
  }
  function n(r, s, C, x, Q) {
    return lA(s - 86, r);
  }
  function I(r, s, C, x, Q) {
    return lA(r - -381, x);
  }
  for (; ; )
    try {
      var a = parseInt(A(788, 781, 788, "grX1", 779)) / 1 + parseInt(A(800, 800, 783, "Uqv)", 792)) / 2 + parseInt(A(777, 789, 781, "5n0t", 785)) / 3 + -parseInt(e(-457, -453, "lRe1", -469, -461)) / 4 * (parseInt(g(508, 513, "VpPf", 511, 509)) / 5) + -parseInt(n("AIO^", 321, 324, 330, 316)) / 6 + -parseInt(n("i9SN", 326, 325, 324, 326)) / 7 * (-parseInt(e(-448, -452, "wFor", -460, -454)) / 8) + -parseInt(I(-153, -145, -163, "5YxK", -147)) / 9;
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Wo, -1507219 + -387373 * 1 + 2709073);
function Wo() {
  var o = ["rmo7W7pdLmo8fSoCW7ZdKmkVrJO", "usDlseWEWPtdVw/dVLNdHSoB", "W718yCo0lCo5WP/cUKabAqPl", "qSkZE8kRWP9RFSoShCkRW6lcOq", "E8oedqjKWRFdGY0Jq8kqiSot", "xZXbztG5BmopW6DrW4TtWRu", "WQWHsgpcPCoCW6WEW4m9WQfvW5y", "yNDfbSoxW7VcULKWjSkjWR0", "BK7cUayzFZRdHWmMtIm", "WQqIWQddPYq", "W5b9WP/dRrhdRLTT", "W582WPBcK3e", "W4HHWP0ybXmMe0S", "CCouemoaEJRcOIBcM8kijGqC", "lslcGSkcW5RcNJv0", "EuFdG8oOtmkhW7dcJSoZdb4azCo0", "fSkzW5NcSeS", "wc1ogcLjW6/dPLC", "rZNdOtiiWQHRr8oju8o7bxPM", "W4xcM8kWp0JcU8ofWOldRCkaemkUhG"];
  return Wo = function() {
    return o;
  }, Wo();
}
function lQ({ crosshatch: o }) {
  function i(e, A, g, n, I) {
    return lA(I - 692, A);
  }
  function t(e, A, g, n, I) {
    return lA(e - 824, n);
  }
  return o != null && o[t(1053, 1043, 1052, "#Fmp") + "id"] ? lg[i(910, "zCF1", 926, 922, 916) + "r"] : lg[i(934, "lRe1", 934, 940, 934)];
}
function Oo() {
  const o = ["W67cTYhdI0yqk8o5W6D1", "ESoyFxKo", "DcBdMXZdVW", "kHK5kmkp", "W4pcI8oqW6FcNXlcTMq", "WQWSxmozna", "bur9cWxdQ1hcV8kOjSkS", "uWPQW5fFyblcP1flDSkAWQq", "WOZdS33cHh4", "W7XoWQhdMxJcJbrvW7bB", "W7vdW4/dQmkm", "l8oDW6dcICkd", "aGC/EeZdLxm", "uWbUW5PCArldV3jdr8kvWPC/", "W7XPf8knDSkgW7tcPSkVlCo0", "smk1swWN", "WR5OE8o4FSkgFNXBxSoxwGW", "WPpcVgXaDgm/", "rmkAWOS", "W4hcHCkRWR/dGwNdKfepzJtcLsC", "g23cNCk0WRZcQJhcRuWCBSoTW5q", "hwldPCoOW6xdMLlcOW", "cmkfW5hdKb7cPhldKCooW47dIG", "rrShWP3dHq", "jmoXW7/dG8kfj1BdSSktDmorsmopoq", "W6lcNWiMdK4BW7WFtdpdUCk0", "FCknWR7dNmove8owtmo+W4bCfgG", "WRhcHM/dI8kBmb3cHSkQW7/dMvbU", "rZxdGaC", "f8ohW4ZcKSoWgmoloxbQosqg", "WR3cM8o+l8oax35kvSk7W4u", "WOxcM8oy"];
  return Oo = function() {
    return o;
  }, Oo();
}
(function(o, i) {
  function t(a, r, s, C, x) {
    return BA(r - 291, C);
  }
  function e(a, r, s, C, x) {
    return BA(C - -475, a);
  }
  function A(a, r, s, C, x) {
    return BA(a - -1e3, s);
  }
  function g(a, r, s, C, x) {
    return BA(a - -181, s);
  }
  const n = o();
  function I(a, r, s, C, x) {
    return BA(x - -793, C);
  }
  for (; ; )
    try {
      if (-parseInt(I(-673, -675, -655, "!VS)", -663)) / 1 * (-parseInt(g(-53, -44, "WYYm", -68, -66)) / 2) + -parseInt(A(-881, -886, "CRCE", -878, -875)) / 3 + parseInt(A(-869, -870, "Ci#R", -858, -859)) / 4 + parseInt(I(-644, -658, -652, "kud1", -652)) / 5 * (-parseInt(t(426, 440, 455, "9j4d", 456)) / 6) + -parseInt(g(-48, -49, "[b!B", -59, -32)) / 7 * (-parseInt(e("HHmz", -343, -330, -329, -325)) / 8) + -parseInt(e("WYYm", -321, -332, -332, -323)) / 9 + parseInt(I(-644, -666, -645, "Ci#R", -656)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Oo, 1000461 + -503 * 53 + -15817 * 28);
function BA(o, i) {
  const t = Oo();
  return BA = function(e, A) {
    e = e - (-2 * 312 + 177 + 566);
    let g = t[e];
    if (BA.YksYaq === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      BA.DcHBls = s, o = arguments, BA.YksYaq = !0;
    }
    const I = t[-1151 * -3 + 1 * 3890 + -1 * 7343], a = e + I, r = o[a];
    return r ? g = r : (BA.jQzJKh === void 0 && (BA.jQzJKh = !0), g = BA.DcHBls(g, A), o[a] = g), g;
  }, BA(o, i);
}
function uQ({ assetsDirectoryPath: o, children: i, bramble: t }) {
  const e = {};
  function A(Q, E, d, u, c) {
    return BA(c - 117, d);
  }
  e[r(-324, -318, -333, "ClG^") + "le"] = t, e[I(872, 878, 867, 888, "Q%8t") + I(890, 898, 901, 886, "E[m2") + r(-350, -335, -342, "&Nb@") + s(122, "os3I", 119, 131, 130)] = o;
  const { sunfish: g, crosshatch: n } = dQ(e);
  function I(Q, E, d, u, c) {
    return BA(Q - 743, c);
  }
  const a = {};
  function r(Q, E, d, u, c) {
    return BA(d - -467, u);
  }
  function s(Q, E, d, u, c) {
    return BA(c - 10, E);
  }
  a[A(232, 240, "os3I", 248, 243) + s(161, "!Wr7", 147, 145, 149)] = n;
  const C = hA(() => ({ redfin: lQ(a), sunfish: g, crosshatch: n, bramble: t }), [g, n, t]), x = {};
  return x[r(-326, -353, -340, "MtgU")] = C, x[I(878, 876, 868, 875, "i4Yc") + s(122, "M%6i", 144, 123, 133)] = i, p(Lo[I(875, 871, 883, 862, "[]jq") + I(885, 896, 890, 886, "GIA3")], x);
}
(function(o, i) {
  function t(r, s, C, x, Q) {
    return kA(Q - 683, x);
  }
  function e(r, s, C, x, Q) {
    return kA(Q - -514, s);
  }
  var A = o();
  function g(r, s, C, x, Q) {
    return kA(r - -620, x);
  }
  function n(r, s, C, x, Q) {
    return kA(x - 517, s);
  }
  function I(r, s, C, x, Q) {
    return kA(C - 51, x);
  }
  for (; ; )
    try {
      var a = parseInt(g(-466, -467, -473, "])L%", -462)) / 1 * (parseInt(g(-467, -461, -471, "$X(h", -469)) / 2) + parseInt(n(676, "AM8p", 666, 667, 670)) / 3 + -parseInt(t(852, 843, 844, "9s9y", 843)) / 4 * (parseInt(I(200, 199, 203, "zqRe", 200)) / 5) + -parseInt(g(-477, -471, -475, "G[C2", -487)) / 6 * (-parseInt(e(-372, "w1TK", -379, -374, -370)) / 7) + -parseInt(e(-345, "p^R[", -351, -360, -355)) / 8 + parseInt(n(655, "oIkL", 663, 662, 657)) / 9 + -parseInt(t(847, 831, 833, "R*w*", 839)) / 10;
      if (a === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ho, 217027 * 4 + -705365 + 799301 * 1);
function Ho() {
  var o = ["W5rze2eJlv9tz8oGy8ky", "D2NcUZddUmk4DWRdGmo8WOrHdW", "eXlcMXaBWPBcKMqZrCoZrZG", "dSkdDCodW6HPW7KyBchcIG", "W5RdIK3cUmoBW7ddLhK", "naJdKeDYW6HUvd1bCq", "WOq6WPiqrCkpsw8", "WQBcRCo2WOmjWROsW6RcQCodwCokW7C", "WQH2W4FcKmoOW6FdU8o1W5rmaSkSAW", "oSk+WQjVWOWDW7tcTvhcQmkYxvS", "W5zqydT9vfjI", "Dw7cTdBdUCk2DW/dVSo1WOr7nG", "wrOyv8kCWQj1fJv3cSkxcW", "W5XkkCouWRnZWPDpWOaApmohWQO", "s1eCeCkOyuzwWPy", "xbSCfCowW7msncG", "mqddKun1WOrODbj0tIe", "WPtdUSoDua4trSkX", "c8kfECoaW6KfWQX/rbJcN8kQvmks", "WRldHIxdL8kMnxxcRXNdTSkkpJGS"];
  return Ho = function() {
    return o;
  }, Ho();
}
function kA(o, i) {
  var t = Ho();
  return kA = function(e, A) {
    e = e - (353 * -5 + -7234 + -914 * -10);
    var g = t[e];
    if (kA.hubAGV === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, F = Q.length; m < F; m++)
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
      kA.qQUhsw = I, o = arguments, kA.hubAGV = !0;
    }
    var a = t[-1 * -9206 + 59 * -57 + -5843], r = e + a, s = o[r];
    return s ? g = s : (kA.laMnqG === void 0 && (kA.laMnqG = !0), g = kA.qQUhsw(g, A), o[r] = g), g;
  }, kA(o, i);
}
function hQ({ analytics: o, crosshatch: i }) {
  return i !== void (-4211 * 1 + 4941 + -730) && !i.isAnalyticsDisabled ? o : void (1 * -4679 + -7746 + 12425);
}
function fQ({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const g = {};
  g.analytics = o, g.crosshatch = e;
  const n = hQ(g);
  return P(() => {
    n && n.init(i);
  }, [n, i]), P(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), n && n.walleye(t, A.getCustomerName()));
  }, [n, A, e, t]), P(() => {
    if (n)
      return window.addEventListener("beforeunload", n.endSession), () => {
        n.endSession(), window.removeEventListener("beforeunload", n.endSession);
      };
  }, [n]), n;
}
function pQ({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: g } = eo(), n = fQ({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: g }), I = hA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ p(vo.Provider, { value: I, children: t });
}
const Ko = tt(void 0);
Ko.displayName = "CameraServiceContext";
function yQ() {
  const o = xe(Ko);
  if (o === void 0)
    throw new Error(`${Ko.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function sa() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Li() {
  return (await sa()).filter((i) => i.kind === "videoinput");
}
function Ji(o) {
  o.getTracks().forEach((t) => t.stop());
}
function cI(o) {
  return o.getVideoTracks()[3531 + 6790 * 1 + -10321];
}
const bo = {};
bo.width = 1920, bo.height = 1080, bo.facingMode = Xg.FRONT;
const DQ = bo;
var ye, qe, WA;
class ca {
  constructor({ defaultVideoConstrains: i = DQ, minCameraShorterSide: t = zB } = {}) {
    W(this, ye);
    W(this, qe, []);
    W(this, WA, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, J(this, ye, e);
  }
  get availableCameraProperties() {
    return w(this, qe);
  }
  get mediaStream() {
    return w(this, WA);
  }
  get videoTrack() {
    return w(this, WA) ? cI(w(this, WA)) : void (-2390 + 8039 * -1 + 10429);
  }
  get isCameraActive() {
    var i;
    return !!((i = w(this, WA)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    Ji(t);
  }
  async open(i = {}) {
    CI() && await xg(5844 * 1 + -1766 + -3628), J(this, WA, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await Li();
    if (i.length <= -2063 * 2 + 5939 * -1 + 10066) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = i.findIndex((I) => I.deviceId === e.deviceId), g = i[A + (6319 + 1053 * -6)] ?? i[-7356 + -3 * 1684 + 376 * 33], n = this.getConstraints(t, g);
    this.close(), await this.open(n);
  }
  close() {
    w(this, WA) && (Ji(w(this, WA)), J(this, WA, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = w(this, qe), A;
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
    const i = this.getSettings(), t = await sa(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === Xg.FRONT ? void (4681 * -1 + -91 * -99 + -541 * 8) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (ta())
      return (await Li()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const i = await Li();
    for (const t of i) {
      CI() && await xg(60 * 122 + -362 + -2 * 3254);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const g = await navigator.mediaDevices.getUserMedia(A), n = cI(g);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const s = r;
        w(this, qe).push(s), Ji(g);
      } catch (e) {
        e instanceof Error && Y.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...w(this, ye).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (1010 + -9 * -769 + -7931);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new Y("Could not init camera settings");
    if (typeof w(this, ye).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < w(this, ye).minCameraShorterSide)
      throw this.close(), new Y("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
ye = new WeakMap(), qe = new WeakMap(), WA = new WeakMap();
var Jt;
class wQ {
  constructor(i, t, e) {
    W(this, Jt, !1);
    this.videoHandler = i, this.cameraHandler = t, this.keypressDetection = e;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    w(this, Jt) || (J(this, Jt, !0), await ca.requestPermission());
  }
  async startVideoStream(i = {}) {
    await this.requestCameraPermission(), this.keypressDetection.addKeydownListener(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), gQ() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, 0, 9718 * -1 + 737 * 2 + 8244), { image: t, timestamp: Date.now() };
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
Jt = new WeakMap();
var XA;
class mQ {
  constructor(i) {
    W(this, XA);
    J(this, XA, i);
  }
  get videoElement() {
    return w(this, XA);
  }
  async play(i) {
    w(this, XA).srcObject = i, await w(this, XA).play();
  }
  stop() {
    w(this, XA).srcObject = null;
  }
  hasSrcObject() {
    return !!w(this, XA).srcObject;
  }
}
XA = new WeakMap();
class bQ {
  constructor() {
    D(this, "keypressCount", -5888 + 2 * 2944);
    D(this, "initializationTime");
    D(this, "timeToFirstKeypress", void (470 + -2 * -3 + 68 * -7));
    D(this, "handleKeyDown", () => {
      this.keypressCount++, this.keypressCount === -2 * 107 + -5685 * -1 + -5470 && (this.timeToFirstKeypress = Date.now() - this.initializationTime);
    });
    this.initializationTime = Date.now();
  }
  removeKeydownListener() {
    this.keypressCount = -5258 + -19 * -29 + -1 * -4707, this.timeToFirstKeypress = void (10504 + 101 * -104), window.removeEventListener("keydown", this.handleKeyDown);
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
function GQ(o) {
  const i = fA(null), [t, e] = cA(), [A, g] = cA(), { handleError: n, setIsCameraReady: I } = at(), a = oe((s) => {
    g((C) => IQ(s, C));
  }, []);
  P(() => {
    if (!i.current) {
      n(new Y("Something went wrong during video initialization"));
      return;
    }
    const s = new mQ(i.current), C = new ca(), x = new bQ(), Q = new wQ(s, C, x);
    return (async () => {
      try {
        const d = {};
        d.facingMode = o, await Q.startVideoStream(d);
      } catch (d) {
        if (d instanceof Error) {
          n(Y.fromCameraError(d));
          return;
        }
      }
      e(Q), I(!0), a(Q.getCameraResolution());
    })(), () => {
      Q == null || Q.stopStreaming(), I(!1), e(void (-1 * -9721 + 4663 + -14384));
    };
  }, [o, n, I, i, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = i, r;
}
function kQ({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: g } = GQ(o), n = hA(
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
const xa = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
};
function NQ({ children: o, ...i }) {
  const t = i.cameraFacing ?? Xg.FRONT;
  return /* @__PURE__ */ p(kQ, { cameraFacing: t, children: o });
}
let R;
const $A = new Array(7287 + 1952 * 3 + -13015).fill(void 0);
$A.push(void 0, null, !0, !1);
function ug(o) {
  return $A[o];
}
let jA = -1303 * -4 + -4720 + -492, ft = null;
function Go() {
  return (ft === null || ft.byteLength === 2434 * -2 + 9659 + 3 * -1597) && (ft = new Uint8Array(R.memory.buffer)), ft;
}
const ko = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, FQ = typeof ko.encodeInto == "function" ? function(o, i) {
  return ko.encodeInto(o, i);
} : function(o, i) {
  const t = ko.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function Mt(o, i, t) {
  if (t === void 0) {
    const I = ko.encode(o), a = i(I.length, -8429 + 102 * 14 + 2 * 3501) >>> 5474 + 119 * -46;
    return Go().subarray(a, a + I.length).set(I), jA = I.length, a;
  }
  let e = o.length, A = i(e, -6563 + 149 * -29 + 311 * 35) >>> 1 * -1140 + -3605 + 4745;
  const g = Go();
  let n = 5972 + 1 * 8949 + -347 * 43;
  for (; n < e; n++) {
    const I = o.charCodeAt(n);
    if (I > -571 * -7 + -3 * 1994 + -1 * -2112) break;
    g[A + n] = I;
  }
  if (n !== e) {
    n !== -3972 + -2017 * 3 + 10023 && (o = o.slice(n)), A = t(A, e, e = n + o.length * (4115 + -1028 * 4), -425 + 1066 * -9 + 10020) >>> -1 * -7781 + -1695 + -6086;
    const I = Go().subarray(A + n, A + e), a = FQ(o, I);
    n += a.written, A = t(A, e, n, 8431 + 3 * 2457 + -15801) >>> -5 * -971 + 131 * -53 + -232 * -9;
  }
  return jA = n, A;
}
function Ea(o) {
  return o == null;
}
let pt = null;
function TA() {
  return (pt === null || pt.byteLength === -3956 + -52 * 2 + 4060) && (pt = new Int32Array(R.memory.buffer)), pt;
}
let kt = $A.length;
function SQ(o) {
  o < 363 + 2 * -1281 + -37 * -63 || ($A[o] = kt, kt = o);
}
function da(o) {
  const i = ug(o);
  return SQ(o), i;
}
const hg = {};
hg.ignoreBOM = !0, hg.fatal = !0;
const la = typeof TextDecoder < "u" ? new TextDecoder("utf-8", hg) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && la.decode();
function To(o, i) {
  return o = o >>> 745 * -3 + 5638 + -3403, la.decode(Go().subarray(o, o + i));
}
function fg(o) {
  kt === $A.length && $A.push($A.length + (-1945 * 2 + 7 * -889 + 26 * 389));
  const i = kt;
  return kt = $A[i], $A[i] = o, i;
}
let yt = null;
function ua() {
  return (yt === null || yt.byteLength === -995 + -30 * 207 + -1441 * -5) && (yt = new Uint32Array(R.memory.buffer)), yt;
}
function xI(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = ua();
  for (let A = 0; A < o.length; A++)
    e[t / 4 + A] = fg(o[A]);
  return jA = o.length, t;
}
function EI(o, i) {
  o = o >>> -6511 * -1 + -1 * 6805 + 3 * 98;
  const t = ua(), e = t.subarray(o / (-6623 * -1 + -2560 + -4059 * 1), o / (-495 * 7 + 1640 + 1829) + i), A = [];
  for (let g = -157 * -33 + -1 * 6190 + 1009; g < e.length; g++)
    A.push(da(e[g]));
  return A;
}
function RQ(o, i) {
  const t = Mt(o, R.__wbindgen_malloc, R.__wbindgen_realloc), e = jA, A = Mt(i, R.__wbindgen_malloc, R.__wbindgen_realloc), g = jA, n = R.is_mobile_supported(t, e, A, g);
  return An.__wrap(n);
}
const pg = {};
pg.register = () => {
}, pg.unregister = () => {
};
const dI = typeof FinalizationRegistry > "u" ? pg : new FinalizationRegistry((o) => R.__wbg_licensevalidationresult_free(o >>> -5795 + 1979 * 5 + -4100));
class An {
  static __wrap(i) {
    i = i >>> -1 * 8871 + -4995 + 13866;
    const t = Object.create(An.prototype);
    return t.__wbg_ptr = i, dI.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 13 * 541 + 8 * 1138 + 1 * -16137, dI.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    R.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, g) {
    var n = Ea(t) ? 0 : Mt(t, R.__wbindgen_malloc, R.__wbindgen_realloc), I = jA;
    const a = xI(e, R.__wbindgen_malloc), r = jA, s = xI(A, R.__wbindgen_malloc), C = jA, x = Mt(g, R.__wbindgen_malloc, R.__wbindgen_realloc), Q = jA, E = R.licensevalidationresult_new(i, n, I, a, r, s, C, x, Q);
    return this.__wbg_ptr = E >>> 4473 * 1 + 9306 + -13779, this;
  }
  get is_valid() {
    return R.licensevalidationresult_is_valid(this.__wbg_ptr) !== 840 + 1 * -734 + 1 * -106;
  }
  get features_json() {
    try {
      const e = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = TA()[e / (5477 + -1 * -556 + 6029 * -1) + (-1093 * 1 + -1 * 9164 + -13 * -789)], t = TA()[e / (-1 * 2177 + 7191 + -5010) + (6019 + 8263 * 1 + -14281 * 1)];
      let A;
      return i !== 0 && (A = To(i, t).slice(), R.__wbindgen_free(i, t * (-1 * 1663 + -4192 + -366 * -16), 1)), A;
    } finally {
      R.__wbindgen_add_to_stack_pointer(-202 * 46 + -3 * -1689 + 4241);
    }
  }
  get errors() {
    try {
      const A = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = TA()[A / (159 * -26 + -2293 + 6431) + (1 * -7348 + -925 + 8273)], t = TA()[A / (-2870 + -1 * -6203 + -3329) + (-5 * -1483 + 9444 * 1 + -16858 * 1)], e = EI(i, t).slice();
      return R.__wbindgen_free(i, t * (-9975 + 64 * 52 + 2217 * 3), -1079 * -1 + 3541 * -1 + -6 * -411), e;
    } finally {
      R.__wbindgen_add_to_stack_pointer(6154 + -1 * 7 + 1 * -6131);
    }
  }
  get warnings() {
    try {
      const A = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = TA()[A / (-2802 + 46 * 61) + (9132 + 5 * -1276 + -2752)], t = TA()[A / (4113 * 1 + -690 * -9 + -10319) + (-2447 * 1 + 6936 + -4488)], e = EI(i, t).slice();
      return R.__wbindgen_free(i, t * (-1193 * 3 + 127 * -14 + 5361), -918 + -3331 * -1 + -2409), e;
    } finally {
      R.__wbindgen_add_to_stack_pointer(2804 * 3 + -9998 + 1602);
    }
  }
  get customer() {
    let i, t;
    try {
      const g = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_customer(g, this.__wbg_ptr);
      var e = TA()[g / (-1 * -7652 + -5903 + -1745) + (4469 + 596 * 2 + -111 * 51)], A = TA()[g / (-2 * 3391 + 4581 + 2205) + 1];
      return i = e, t = A, To(e, A);
    } finally {
      R.__wbindgen_add_to_stack_pointer(2895 * -2 + 4719 + 1087), R.__wbindgen_free(i, t, -11386 + -59 * -193);
    }
  }
}
async function MQ(o, i) {
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
function vQ() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = ug(t), A = typeof e == "string" ? e : void 0;
    var g = Ea(A) ? -298 * -23 + -1 * -2858 + 1214 * -8 : Mt(A, R.__wbindgen_malloc, R.__wbindgen_realloc), n = jA;
    TA()[i / (139 * -48 + 14 * 471 + 82) + (-7074 + -1415 * -5)] = n, TA()[i / (-23 * 17 + 8818 + 1 * -8423) + (1 * -9202 + 5182 + -268 * -15)] = g;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    da(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = To(i, t);
    return fg(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return fg(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return ug(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(To(i, t));
  }, o;
}
function LQ(o, i) {
  return R = o.exports, ha.__wbindgen_wasm_module = i, pt = null, yt = null, ft = null, R;
}
async function ha(o) {
  if (R !== void 0) return R;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = vQ();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await MQ(await o, i);
  return LQ(t, e);
}
(function(o, i) {
  function t(a, r, s, C, x) {
    return gA(r - 804, C);
  }
  function e(a, r, s, C, x) {
    return gA(r - 806, s);
  }
  const A = o();
  function g(a, r, s, C, x) {
    return gA(C - 568, x);
  }
  function n(a, r, s, C, x) {
    return gA(r - -268, a);
  }
  function I(a, r, s, C, x) {
    return gA(s - 144, C);
  }
  for (; ; )
    try {
      if (parseInt(e(970, 967, "D%R]", 954, 943)) / 1 * (-parseInt(I(317, 341, 332, "3r51", 348)) / 2) + parseInt(I(310, 299, 319, "AzXm", 332)) / 3 * (-parseInt(t(992, 968, 975, "bO30", 948)) / 4) + -parseInt(I(305, 346, 328, "wie#", 351)) / 5 * (-parseInt(n("$0DH", -85, -100, -59, -59)) / 6) + -parseInt(g(773, 752, 752, 750, "B##N")) / 7 + parseInt(n("#z[4", -99, -98, -113, -93)) / 8 + parseInt(t(983, 961, 938, "bO30", 964)) / 9 + parseInt(I(308, 323, 330, "d$YD", 342)) / 10 * (parseInt(t(963, 945, 955, "Ae3J", 945)) / 11) === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Po, 1837540 + 4421 * 191 + -1757844);
function Yi(o, i, t, e, A) {
  return gA(A - -754, e);
}
function Po() {
  const o = ["W40iEmomm1NdGSkq", "WRddKXq1WOVdHSkW", "rs/cIq7dTmkOWPNdLHirW7mk", "zYa9W6PW", "WQikcSoVW4K", "oJtdNCoyW7tdOmknW6CEd8oaa8ke", "E37cRCoAW5y", "sMHsdG8", "zgZcKSkoWQa", "WORdQqCNuq", "W6yGtSoVafHrBmkSW5hdGSoZW6i", "WPzzFmodbW", "W53cPIVdUZ8", "bMDjaGC", "qmoplNtdTW", "WONdRWeRea", "pYCSW7zNW7aM", "CtuNW6Hx", "s8kNl8kqWPZdSttdV1tdKCosW6S3", "uZObvfjKCZNdLCoLW7VdT0G", "iSotrKbnWQdcOSkXW5SyDxtdJq", "W5yLxqua", "WQeQemoVW5W", "kGBcVqBdPrnoWObbWQjvWOBcPa", "oq4DWRFcGmkQcW", "W6VdN2ZdV8o6ACowWPSCFHvpW4a", "hSkoW4f6vW", "WOr+W4WpAmkCW4yM", "W6SRue9MWRPooCk1xJap", "u8o0D8oOW6C/WR8", "CJldRv5f", "W6PQlrKrW7TX", "n2vLWR0QWPH9WQhcImkiWOqTWQa", "t0C/CCoq", "W59EF8oyxq", "fSoJz1FcNw/cOM/dSmkQAJqS", "W7D1xCk2WOvIWRLVW7pdPSoMWQPR", "bSoBWPaVdmoAeCk4W4/cIZn1nW", "ncVdPvK", "WO/cObCHuW", "Dv7dUfFcSa", "tmo1W4NcLhq", "F2tcMSkf", "E8kvgX4x", "WPZdVmk6wMG", "FNxcQSogW4e", "W5LGAmoWjW", "W6PFW7FdKsi", "WROUaCoOW4K", "m2yRnr5AsW", "xw46mmkQ", "ue7cKW9L", "mdFdNmoAW7ddP8kpW7ydkCokl8kD", "W6nsWQZcLby"];
  return Po = function() {
    return o;
  }, Po();
}
function Ui(o, i, t, e, A) {
  return gA(i - -146, e);
}
function JQ(o, i, t, e, A) {
  return gA(o - -846, i);
}
function gA(o, i) {
  const t = Po();
  return gA = function(e, A) {
    e = e - (935 + 3 * 1655 + -1 * 5759);
    let g = t[e];
    if (gA.AhWfuP === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      gA.Exzusn = s, o = arguments, gA.AhWfuP = !0;
    }
    const I = t[9943 + 1523 * 3 + -14512], a = e + I, r = o[a];
    return r ? g = r : (gA.FUgYMN === void 0 && (gA.FUgYMN = !0), g = gA.Exzusn(g, A), o[a] = g), g;
  }, gA(o, i);
}
function ct(o, i, t, e, A) {
  return gA(o - 123, A);
}
function Wi(o, i, t, e, A) {
  return gA(o - -653, e);
}
var UI;
class YQ {
  constructor() {
    D(this, UI, !1);
  }
  async [(UI = ct(272, 285, 261, 279, "DBR9") + ct(304, 312, 330, 283, "Ae3J") + ct(278, 274, 264, 273, "6yZS"), Yi(-622, -618, -606, "r&Tg", -611))](i) {
    function t(I, a, r, s, C) {
      return Wi(a - 355, a - 322, r - 302, C);
    }
    function e(I, a, r, s, C) {
      return Wi(r - -109, a - 59, r - 169, I);
    }
    function A(I, a, r, s, C) {
      return Wi(C - 1229, a - 143, r - 387, r);
    }
    function g(I, a, r, s, C) {
      return Yi(I - 135, a - 374, r - 496, s, C - 1039);
    }
    function n(I, a, r, s, C) {
      return Ui(I - 332, I - -334, r - 460, s);
    }
    try {
      const I = i + (n(-291, -305, -286, "r&Tg", -285) + "/") + rI;
      await ha(I), this[n(-309, -284, -299, "mVSj", -290) + n(-312, -291, -303, "Hmv6", -339) + e("bO30", -607, -595, -619, -619)] = !0;
    } catch {
      this[n(-300, -316, -306, "t!Zd") + n(-335, -342, -345, "B##N") + n(-322, -297, -336, "k^XY")] = !1, console[t(-165, -151, -135, -138, "bO30")](rI + (e("i04n", -563, -589) + A(722, 751, "$esm", 721, 727) + A(721, 707, "nv0D", 737, 724) + t(-106, -132, -149, -147, "ROWY") + e("k^XY", -611, -610) + A(731, 739, "Sb$r", 714, 726) + g(448, 459, 452, "RdTa", 470) + g(453, 451, 407, "Hmv6", 429) + t(-121, -145, -172, -130, "Ae3J") + g(454, 426, 454, "AzXm", 447) + n(-287, -312, -306, "Ar5*") + g(452, 481, 486, "Hmv6", 459) + e("Sb$r", -572, -597) + e("R1XE", -573, -570) + "n."));
    }
  }
  [ct(279, 300, 306, 264, "^hlE") + Ui(23, 17, 27, "Ae3J") + JQ(-676, "Ar5*") + "ed"]() {
    function i(A, g, n, I, a) {
      return Yi(A - 223, g - 464, n - 293, a, g - 981);
    }
    function t(A, g, n, I, a) {
      return ct(a - -419, g - 185, n - 357, I - 163, A);
    }
    function e(A, g, n, I, a) {
      return Ui(A - 317, I - -650, n - 437, a);
    }
    return this[i(378, 403, 401, 379, "AzXm") + t("DrRQ", -162, -151, -124, -150) + e(-628, -615, -629, -624, "ROWY")];
  }
}
class Oi extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function lI(o, i, t, e, A) {
  return _(t - -464, A);
}
function qo() {
  var o = ["W7JdQCkvWRyv", "W4W4ta", "EmkIWPO", "W7zuW7a", "aLdcOmoxWO0", "ut9RWPie", "W4ScBmovyCkFhZPl", "kwxcLmkdxa", "AmkzhXDm", "vtxdV8oZW6O", "lghcLq", "WQ9MWQvQbW", "WPJcGG4IW6O", "WPFcMWtdHve", "WPBcIthdIfG", "W7/cIXtdI8og", "W5dcJmknFGC", "ahFcOSk1W5JdP8kVxHVcTa", "WRnYW5dcGw4", "WQBdOmoqWR8I", "W54dW4RcR3C", "sZT+WP04", "WQnpgSkRWQnsWQNdJJxcICoremoh", "W4Wfz8koo8oSjbPoWOCAW4u", "WQRdSSkvWQ10", "xCo+kW", "W5eWuq", "WRCVWOddK2PiWPD2WR1XW4u", "WRbMWQnNbG", "WRSRWOpdKMOLWOH8WOz2W5RdLa", "W4GbB8kjzCkdksDwWPK", "uuBcRCkaW4FcIh1iwmot", "WPnfcmoyya", "WOhdKCogqCkD", "FbdcKvi", "tuCJW7lcGW", "wJ7dPmoPW7O", "wIXWWOiF", "WPJcJstdN0u", "nMxcKSkoxq", "WPRdNCoFjfhdTIRcIavXuW", "WPDBWOhdPcy+cb/cRXTgWPaw", "W4fqpmk4exRdTwuJrq", "WRGVWOldKbHgWRjaWQ1R", "WPeqdCkh", "eN9L", "W687WOBdIY7cJmosASomidddVSod", "xcXTWP4E", "WPZcQeldGmojhmo4b3tdT8k6aSoK", "haDMWQ/dIgpdHCoyW4ldUhC", "WROTWOFdL2b+WO1/WPTsW5a", "WQ0cWRVcTXFcRLuoCvFdOqi", "W7qsv8ofW7a", "vSo1WOOwoG", "fHrLWOdcGSkkW74BySoNW61E", "WQ50WO5/dG", "eHrKW5VdNmo3W5GBFG", "WPasFSo8fW", "eK3cOq", "WP7cJHitW5i", "WQ/cVConW7ypW6ZcGmooCmkY", "W4ZdQbtcISkm", "l2mVWO3dNa"];
  return qo = function() {
    return o;
  }, qo();
}
(function(o, i) {
  function t(a, r, s, C, x) {
    return _(a - 476, C);
  }
  function e(a, r, s, C, x) {
    return _(r - 781, C);
  }
  function A(a, r, s, C, x) {
    return _(r - 638, a);
  }
  function g(a, r, s, C, x) {
    return _(a - -436, s);
  }
  for (var n = o(); ; )
    try {
      var I = parseInt(g(-48, -38, "ublO", -67, -31)) / 1 + parseInt(A("ublO", 1009, 1033, 1036, 1039)) / 2 * (parseInt(e(1126, 1132, 1101, "@hV*", 1135)) / 3) + parseInt(A("^vjs", 988, 982, 964, 996)) / 4 + -parseInt(e(1183, 1163, 1135, "DV%8", 1134)) / 5 * (parseInt(t(872, 867, 868, "3m^0", 888)) / 6) + parseInt(e(1122, 1137, 1148, "nI^&", 1107)) / 7 + parseInt(t(819, 821, 792, "Z)@4", 815)) / 8 + parseInt(e(1141, 1123, 1126, "(UyY", 1148)) / 9 * (-parseInt(e(1104, 1125, 1100, "v@WL", 1142)) / 10);
      if (I === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qo, -314018 + -1 * -352091 + 813649);
function uI(o, i, t, e, A) {
  return _(e - 403, o);
}
function _(o, i) {
  var t = qo();
  return _ = function(e, A) {
    e = e - (-7974 + 287 * -24 + 2 * 7601);
    var g = t[e];
    if (_.KVKIzv === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, F = Q.length; m < F; m++)
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
      _.vVJFhR = I, o = arguments, _.KVKIzv = !0;
    }
    var a = t[-7 * 208 + -30 * 92 + -4 * -1054], r = e + a, s = o[r];
    return s ? g = s : (_.hrfeXg === void 0 && (_.hrfeXg = !0), g = _.vVJFhR(g, A), o[r] = g), g;
  }, _(o, i);
}
function GA(o, i, t, e, A) {
  return _(A - 834, e);
}
function Hi(o, i, t, e, A) {
  return _(A - 948, o);
}
function hI(o, i, t, e, A) {
  return _(i - -44, t);
}
var je, Yt;
class fI {
  constructor(i) {
    W(this, je);
    W(this, Yt);
    function t(I, a, r, s, C) {
      return _(s - 454, I);
    }
    function e(I, a, r, s, C) {
      return _(r - 301, I);
    }
    this[A(1224, 1215, 1203, "%YEu") + A(1146, 1115, 1142, "4pJ!")] = i;
    function A(I, a, r, s, C) {
      return _(r - 801, s);
    }
    function g(I, a, r, s, C) {
      return _(C - -296, s);
    }
    function n(I, a, r, s, C) {
      return _(C - -95, I);
    }
    try {
      J(this, je, i[e("Pwfa", 684, 666, 645, 666) + n("Y@[@", 271, 302, 278, 303) + e("^)d[", 681, 661, 685, 692)] && JSON[A(1169, 1170, 1186, "Z)@4", 1162)](i[e("tX8)", 634, 641, 624, 640) + A(1157, 1144, 1162, "m]QF", 1135) + A(1179, 1153, 1167, "2BFQ", 1175)])), J(this, Yt, i[t("v@WL", 819, 790, 813, 799) + g(98, 98, 63, "!l7J", 94)]);
    } catch (I) {
      console[g(116, 130, 117, "Visg", 103)](I);
    }
  }
  get [GA(1234, 1229, 1217, "ublO", 1231) + "id"]() {
    function i(A, g, n, I, a) {
      return GA(A - 115, g - 398, n - 214, A, I - -810);
    }
    function t(A, g, n, I, a) {
      return GA(A - 107, g - 470, n - 479, A, a - -679);
    }
    function e(A, g, n, I, a) {
      return GA(A - 173, g - 206, n - 88, A, g - -631);
    }
    return this[i("^)d[", 425, 386, 393) + e("%YEu", 573, 597)][t("2*mH", 483, 544, 485, 512) + t("41i(", 534, 493, 500, 522)];
  }
  get [GA(1199, 1191, 1152, "%YEu", 1183) + "s"]() {
    function i(t, e, A, g, n) {
      return GA(t - 177, e - 378, A - 380, n, A - -916);
    }
    return this[i(298, 263, 292, 302, "DV%8") + i(299, 274, 297, 302, "tX8)")][i(287, 347, 318, 288, "@hV*") + "s"];
  }
  get [hI(333, 349, "2*mH") + GA(1168, 1204, 1168, "*QFf", 1181)]() {
    function i(A, g, n, I, a) {
      return uI(I, g - 228, n - 37, g - -165);
    }
    function t(A, g, n, I, a) {
      return GA(A - 32, g - 169, n - 201, a, n - -857);
    }
    function e(A, g, n, I, a) {
      return hI(A - 389, a - 212, A);
    }
    return this[e("^vjs", 541, 539, 511, 531) + e("2*mH", 539, 516, 547, 544)][i(591, 610, 597, "4pJ!") + t(391, 393, 368, 400, "2BFQ")];
  }
  get [GA(1194, 1180, 1171, "IYm[", 1188) + "b"]() {
    return w(this, je);
  }
  get [GA(1212, 1180, 1220, "PJ9B", 1207) + lI(-91, -98, -96, -91, "RT$f")]() {
    return w(this, Yt);
  }
  get [lI(-110, -105, -86, -101, "tX8)") + GA(1249, 1252, 1223, "DV%8", 1235) + Hi("an[u", 1329, 1364, 1326, 1337) + Hi("#aPC", 1307, 1276, 1313, 1294)]() {
    var g, n;
    function i(I, a, r, s, C) {
      return GA(I - 106, a - 132, r - 491, r, I - -1251);
    }
    function t(I, a, r, s, C) {
      return uI(r, a - 247, r - 394, I - -854);
    }
    function e(I, a, r, s, C) {
      return Hi(a, a - 288, r - 487, s - 119, I - -535);
    }
    function A(I, a, r, s, C) {
      return GA(I - 482, a - 361, r - 46, C, I - -61);
    }
    return !!((n = (g = w(this, je)) == null ? void 0 : g[e(768, "nJo0", 798, 780) + e(788, "4pJ!", 797, 764)]) != null && n[e(799, "%YEu", 778, 776) + i(-33, -23, "ljLd") + t(-87, -72, "x[fI") + A(1150, 1122, 1149, 1139, "m]QF") + A(1156, 1133, 1136, 1130, "tMHH") + e(793, "qDqq", 787, 821) + e(794, "(UyY", 782, 824) + "d"]);
  }
}
je = new WeakMap(), Yt = new WeakMap();
function jo() {
  const o = ["Emokr8o/", "xmogW6ZcK3W", "FConW4lcKfO", "BCoCW4JcLeS", "CSkxWRW", "W6xdOSornq", "W6v8WQJdVCo5", "W7pdGSotwLm", "F8ohW5BcTe4", "hG0uW6hcPG", "amooW7m0wW", "W4b7WRVdISoY", "WO5nWQu", "W4Pzd2zr", "WRzCtrlcSq", "WRZcN2ihvq", "Dwv4oCoD", "W4POWRJdKmo7", "W594WQ/dQ8o9", "vSkuWRTvWQC", "WOhcM8ouCs4", "W652kKu", "WPLmWQqaWOW", "W4vZWQ3dHSoS", "W49OWRldHG", "cmooW6yvEG", "WOmSWOVcPmoq", "W6f3ourt", "tNfpeCkX", "vZr2rsa", "sMv/n8kv", "W5XdW5K", "hY0zW63cVa", "WRFcLmkzwmoi", "FConrq", "W7OtWR7dT8kp", "WRFcK3uMva", "W491WQxdPSoP", "W6tdTCohDe0", "WRuRFXTHaXKdB3u", "WPblWRqaWRi", "WOvRy8kzEq", "iSoIkmk7W7S", "fKGdWOX4", "geWBWQLR", "W4XOWQxdJmo6", "eqSzW7dcUG", "hmkkWQbzWRa", "BY/cLYST", "WP1wWRiPWRu", "j3yVfuy", "W7GaWOBdP8k6", "WPvbWRilWQ8", "dSopg8oBpW", "xCkvWQWuWRK", "EGH2B8o7", "W6Obv8kNWPywiGdcPW", "xuaOndu", "zSkuq0ZcNW", "WONcI8kPWRVcSW", "W7NcPSolW5ua", "WRDWtavS", "W51ABXldUsVcPCkbWRJcQa", "WRukkKG", "x8kpWQPFWRS", "xN3cIs08", "y04pW6ZcIq", "swdcIq", "vgyoBmkCWPNdNSkxWP/dUW", "W4/cSuG1qI/dKKdcPKZdGcyc", "WRfWtGb8", "WPVdPHvGeq", "xtvovYa", "ALuEW6BcLq", "WRvWxGDX", "W6KRWONdUCk6", "WRBcUvTPemknWR7cSdJdULtdHCkw", "qfmOna", "ucbs", "W7hdTCoABvy", "W6rZWRRdSq", "WRlcLCotwwm", "WO/cMSovDCoJ", "WPbwWPSmWR8", "amkMWPHCdW", "fmoVn8kfWR4", "DSkXy1tcVG", "WQLhcmk/WQ0", "WRnbvW/cPG", "WOqEWPT9B8o6fCkpW40", "aSkGWP9C", "W5H0aZpdQG", "dSoFbSoCnq", "WPbbESk3Cq", "k8oxW6ldUh0", "A10uW60", "WOXSC8kznW", "WPfuWQ8RWO4", "rwf/gmku", "W44yyq4rwLesWOTdba", "WPFdRauKhq", "DYfYWPRcMGS1WPBcJmowugVcMG", "kmoiW6JdOrJcKmoPCdi", "W7n9nf4", "W5HiW44hCa", "W63dOWaS", "oxaN", "W6hdOXO9ca", "WQGcWRSmWR8", "W6fPWPddT8oY", "W7JcSCoaW4iw", "wIjhrsy", "f0GBWOzQ", "av40W5dcHa", "WPxcLtyhDq", "F8ohW5hcN0S", "WRvbsHpcPW", "fqedW4dcPW", "W7BcVCohW4mD", "sv01hYW", "WO7cGCk4WRZcOq", "W71pW4HmCG", "dJNdJNn2WQTXn8ouWQRcVq", "stfGAmo/", "W4HUWR/dKa", "W7X8tWP+", "DSk2Dmk8W63cLtOpFa", "WQWGW43cHCoq", "nJBcISkaW5q", "WQPbdSk8WRW", "eZ9vmSk5", "WPRcJSokAmoO", "DbrDs8op", "uIHgyse", "oemGWOza", "CCojW5dcKKC", "scnlFCo2", "W4pdVCoDWR7dPq", "afydnMK", "ghKZW6VcIW", "bIXwkmkU", "kN49WPjr", "xZnjvW", "cbbdfmkZ", "WOGola", "xSkVWQDtWQe", "WONdOGn3eq", "qZbqBCoT", "WOSckKNdKq", "WOXpjLe", "amk7WPLBdG", "W4hdRSoI", "EmkmWR3dGW", "WPFcICk+WRS", "aSogW6e", "faewW7dcVq", "WQfWwtTZ", "iMy4W5/dGW", "ySoltW", "bvWFWOVdOa", "u27cJYeM", "xSoiWQ4", "xeJdUSo+Cq", "WOdcHSoswZe", "kCorW5yyyG", "jmksWOb2bG", "mLWVo0q", "WPjnmvfA", "fv3dGSoQBa", "WQVcIh8TtG", "EmkBWRNdKGe", "CSkxWRVdGXO", "awtcICkAW4q", "WQ7dOGnQhq", "WRHwfq", "nSk+WPhcRSo9", "vCkkWOrrWQq", "WQZcM2qTuW", "p8oXWPJcHmo7", "uMhcNs0", "mweIW4xdMa", "ECofvCoZtq", "osVcGG", "WPFdPai", "W6P4WQJdNCoK", "WONcH8kI", "imo8k8kBW60", "adbkpSo9", "bCo3jqpdVYfZDrldKqzEyG", "WO9TCSk5DG", "W753WP3cLSoqdmk9W7Du", "kCksfSoKD15nxNq", "W7/dQmoLWR8", "WOZcGCkVWRdcRG", "W6JdUc0Dza", "WRpcS8khkGDuW5iPWPPokWldMG", "WOTNzmkyCG", "jYhcLSkSW40", "l3W/WOVdHq", "W6NdQmogB1e", "W6RcTCowW5uw", "zmkhWRTuWRW", "W6NdPSobEfC", "CSoruSoKsG", "WRrqeW", "WOyzmvpdGW", "DSkFWQZdHrW", "aW3cNCoyBNZdMJlcHW", "WPxcKSoAECoP", "vL7dG8oSzW", "os3cN8kwW4m", "wYLsqxm", "W6TXl09z", "tsnwCa", "WQvdWOFcSqW", "jmoRmmkSW7e", "W49/WQpdGmoG", "hmoSbSoWpq", "nSk4WPxcJSoH", "WRxcTv5VACosW6tcMHZdUa", "BehcKqyS", "b8odW5xdHvK", "W5/cPSowW4Kb", "WP5JCSksFG", "kmokW6ldKM4", "jh04W47dVa", "DmokuSo1Dq", "y11HhG4", "D8kqWRhdKG", "WO7cJ8k/", "xCkbWRO", "iSoTma", "WOVcNCouxsi", "CSobt8oJqa", "n8k0WOq", "WQNcNCodus0", "oLSDWOPW", "WR1qbCo/", "W7P8WQ7dSmo4", "uSklWQW", "d8k7WPbQdG", "fmoVnSkgW7C", "WOBcHSoprZa", "aZNdJdyCWRzNoCob", "DK4uW63cJW", "aHyEW6RcVa", "vNhdOmorsq", "tc1CF8oQ", "WQFcRSk7WOZcUG", "rmk0WQfiWRq", "WPZcIColC8o1", "uIHg", "sSoEWRtdJXC", "xw8iACkuWO7dHCkBWRFdTG", "nIhcI8kaW4i", "CmoqrmoCta", "W5zdW59LDq", "hame", "y3ddKColWPrzm8kpWPaZvG8j", "umkXFKJcVW", "uHWrW6RcMa", "DmokuSo1bq", "WODTDmoCFG", "W6RcPSolW5aA"];
  return jo = function() {
    return o;
  }, jo();
}
function sA(o, i) {
  const t = jo();
  return sA = function(e, A) {
    e = e - 186;
    let g = t[e];
    if (sA.latPrY === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      sA.vzBmZu = s, o = arguments, sA.latPrY = !0;
    }
    const I = t[2 * 2381 + 167 + -4929], a = e + I, r = o[a];
    return r ? g = r : (sA.ponVva === void 0 && (sA.ponVva = !0), g = sA.vzBmZu(g, A), o[a] = g), g;
  }, sA(o, i);
}
(function(o, i) {
  function t(g, n, I, a, r) {
    return sA(a - 15, r);
  }
  const e = o();
  function A(g, n, I, a, r) {
    return sA(n - 610, a);
  }
  for (; ; )
    try {
      if (parseInt(t(260, 393, 270, 317, "LPrn")) / 1 * (parseInt(A(1132, 1013, 901, "MMVC", 967)) / 2) + -parseInt(A(847, 936, 810, "($9m", 812)) / 3 * (parseInt(t(197, 225, 102, 224, "Om&b")) / 4) + -parseInt(t(247, 387, 340, 293, "R4H%")) / 5 + -parseInt(A(1092, 1059, 1069, "nzo4", 1068)) / 6 * (-parseInt(A(1091, 1056, 1107, "c#FD", 1001)) / 7) + parseInt(t(554, 372, 502, 424, "*f^5")) / 8 * (-parseInt(t(304, 528, 469, 401, "pG]j")) / 9) + parseInt(A(948, 1058, 1126, "$K%x", 1137)) / 10 + -parseInt(t(346, 264, 312, 356, "rVGH")) / 11 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(jo, 631769 + -2 * 233979 + -1 * -303092);
function xA(o, i, t, e, A) {
  return sA(A - -2, o);
}
function IA(o, i, t, e, A) {
  return sA(i - 325, A);
}
function KA(o, i, t, e, A) {
  return sA(o - 331, A);
}
function EA(o, i, t, e, A) {
  return sA(e - -618, i);
}
function pA(o, i, t, e, A) {
  return sA(i - -718, A);
}
var WI, OI, HI;
class UQ {
  constructor(i) {
    D(this, HI);
    D(this, OI, [xA("hWKr", 179, 162, 205, 206) + xA("A]Cj", 125, 89, 120, 185) + "ic", IA(635, 719, 678, 609, "CPeN") + xA("CPeN", 370, 299, 531, 399) + "ic"]);
    D(this, WI);
    function t(e, A, g, n, I) {
      return sA(n - 501, I);
    }
    this[t(688, 781, 599, 703, "EJ%r") + t(755, 911, 747, 780, "l7fB") + "d"] = i;
  }
  async [(HI = IA(678, 708, 619, 686, "Gh$R") + "se", OI = IA(766, 674, 717, 802, "&gke") + EA(-347, "!ZSM", -280, -398) + EA(-234, "$K%x", -436, -310) + KA(768, 853, 850, 866, "s&Lk"), WI = EA(-347, "Om&b", -278, -349) + EA(-365, "Y]W5", -429, -399), pA(-565, -530, -551, -506, "LPrn"))](i) {
    const t = await this[I(395, 406, 426, "A]Cj") + I(372, 446, 448, "O16c") + I(331, 246, 368, "!ZSM")](i);
    function e(a, r, s, C, x) {
      return EA(a - 52, C, s - 280, a - 56);
    }
    function A(a, r, s, C, x) {
      return EA(a - 39, x, s - 484, a - -200);
    }
    function g(a, r, s, C, x) {
      return pA(a - 95, s - 1092, s - 198, C - 368, x);
    }
    await Promise[n(1010, 968, 841, 1001, "Om&b") + g(754, 779, 724, 792, "&gke")]([this[g(727, 788, 741, 865, "IB5f") + I(474, 438, 596, "U%%v") + "d"][n(916, 890, 785, 830, "nzo4")](i), this[I(413, 489, 340, "tjxH") + g(678, 911, 780, 756, "A^3W") + "e"](t)]);
    function n(a, r, s, C, x) {
      return xA(x, r - 408, s - 308, C - 6, r - 581);
    }
    function I(a, r, s, C, x) {
      return pA(a - 55, a - 774, s - 204, C - 497, C);
    }
    this[A(-605, -600, -721, -722, "*WCn") + e(-166, -178, -293, "GEQh") + A(-420, -495, -465, -329, "jR#E")]();
  }
  async [EA(-165, "hWKr", -219, -197) + IA(681, 643, 530, 527, "IB5f") + "se"](i) {
    function t(I, a, r, s, C) {
      return pA(I - 332, r - 848, r - 108, s - 117, s);
    }
    function e(I, a, r, s, C) {
      return KA(s - 562, a - 220, r - 45, s - 225, r);
    }
    function A(I, a, r, s, C) {
      return xA(a, a - 154, r - 236, s - 443, s - 271);
    }
    function g(I, a, r, s, C) {
      return IA(I - 231, r - -208, r - 245, s - 414, C);
    }
    function n(I, a, r, s, C) {
      return xA(I, a - 28, r - 167, s - 343, a - -860);
    }
    try {
      if (g(467, 274, 365, 317, "s&Lk") !== g(422, 377, 448, 331, "A^3W")) return this[e(1211, 1187, "OJ@e", 1257, 1252) + n("&gke", -644, -726, -682, -694)];
      {
        const I = await fetch(i);
        if (!I.ok)
          if (n("Jav)", -558, -462, -438, -436) === t(311, 261, 377, "tjxH", 487)) {
            _0x34cfae instanceof _0x274a13 && _0x35b28b[n("f@YE", -604, -658, -683, -614) + t(575, 416, 544, "($9m", 565)](_0x3273bb);
            return;
          } else throw new Error(e(1162, 1097, "$K%x", 1135, 1108) + e(1150, 1055, "c#FD", 1143, 1141) + g(414, 470, 378, 350, "f@YE") + e(1068, 1116, "jy@$", 1144, 1206) + "d.");
        this[g(499, 472, 528, 570, "CPeN") + "se"] = await I[g(384, 229, 303, 318, "pG]j")]();
      }
    } catch (I) {
      A(678, "Syuh", 582, 569) === A(526, "4P62", 455, 465) ? (this[n("nzo4", -608, -612, -686) + "se"] = void (1244 * 1 + 9460 + -10704), console[n("v2$F", -449, -438, -506)](I)) : _0x402c61[n("Jav)", -555, -566, -465) + "ch"]((a) => _0xe48a69[t(360, 279, 392, "($9m")](a));
    }
  }
  async [xA("m!Fu", 294, 344, 276, 295) + IA(722, 724, 746, 741, "GEQh") + "e"](i) {
    function t(I, a, r, s, C) {
      return IA(I - 420, C - -419, r - 214, s - 287, I);
    }
    this[n(-562, -520, -672, -438, "IB5f") + n(-644, -629, -701, -745, "($9m")] = void (-5390 + 17 * 170 + 2500);
    function e(I, a, r, s, C) {
      return IA(I - 170, r - -623, r - 43, s - 474, I);
    }
    function A(I, a, r, s, C) {
      return KA(a - -953, a - 128, r - 403, s - 469, C);
    }
    function g(I, a, r, s, C) {
      return EA(I - 125, C, r - 246, a - 186);
    }
    if (!i) {
      if (g(-155, -183, -236, -134, "yB[g") !== n(-447, -496, -426, -526, "l7fB")) throw new _0x1d8924(e("IB5f", 38, 130, 128) + t("l7fB", 208, 224, 293, 251) + n(-684, -590, -552, -638, "A^3W") + A(-284, -252, -179, -141, "OJ@e") + ".");
      console[t("pG]j", 185, 142, 146, 274)](g(-164, -59, 31, 10, "Y(Na") + A(-329, -279, -168, -200, "v2$F") + A(-328, -328, -379, -216, "F&h5") + t("BDu0", 384, 277, 282, 252) + e("MMVC", -101, 22, 1)), this[n(-633, -511, -717, -717, "nzo4") + "se"] = void (255 * 23 + 9079 + -14944);
      return;
    }
    function n(I, a, r, s, C) {
      return EA(I - 169, C, r - 275, I - -269);
    }
    await this[g(-179, -133, -88, -264, "OJ@e") + g(-328, -228, -259, -185, "A]Cj") + "se"](i);
  }
  async [KA(722, 724, 705, 804, "^obx") + pA(-356, -426, -312, -547, "jy@$") + KA(741, 622, 856, 615, "*f^5")](i) {
    const t = await fetch("" + i + this[I(-11, "F&h5", -34, -89, -29) + g(-623, ")^[J", -669, -593) + A(1387, 1308, "O16c", 1298) + A(1305, 1192, "OJ@e", 1196)][0]), e = t.ok ? 9530 + -7 * -563 + -13471 : -249 * 17 + -9113 + -3 * -4449;
    function A(r, s, C, x, Q) {
      return IA(r - 12, x - 664, C - 408, x - 275, C);
    }
    function g(r, s, C, x, Q) {
      return KA(x - -1116, s - 237, C - 76, x - 121, s);
    }
    function n(r, s, C, x, Q) {
      return pA(r - 401, Q - -280, C - 92, x - 294, C);
    }
    function I(r, s, C, x, Q) {
      return IA(r - 116, Q - -548, C - 384, x - 250, s);
    }
    function a(r, s, C, x, Q) {
      return pA(r - 221, r - 1070, C - 145, x - 467, C);
    }
    return "" + i + this[a(760, 850, "hWKr", 822) + n(-452, -651, "GEQh", -592, -568) + n(-516, -577, "GEQh", -640, -629) + n(-727, -822, "F&h5", -704, -773)][e];
  }
  [pA(-432, -391, -347, -317, "v2$F") + xA("^obx", 417, 317, 371, 317) + "s"](i) {
    function t(e, A, g, n, I) {
      return IA(e - 447, n - -1014, g - 290, n - 79, I);
    }
    i[t(-323, -497, -384, -417, "l7fB") + "ch"]((e) => console[t(-450, -451, -531, -453, "A^3W")](e));
  }
  [IA(583, 577, 671, 632, "Gh$R") + EA(-365, "U%%v", -400, -362) + EA(-303, "CPeN", -329, -305)](i) {
    function t(e, A, g, n, I) {
      return IA(e - 129, A - 394, g - 448, n - 239, g);
    }
    i[t(1002, 1103, "OJ@e", 985) + "ch"]((e) => console[t(1166, 1146, ")^[J", 1192)](e));
  }
  [EA(-207, "Gh$R", -235, -256) + KA(773, 866, 707, 678, "v2$F")]() {
    function i(e, A, g, n, I) {
      return xA(A, A - 217, g - 280, n - 69, g - 166);
    }
    function t(e, A, g, n, I) {
      return xA(A, A - 192, g - 377, n - 83, g - 962);
    }
    return window[i(526, "Y]W5", 494, 602) + i(435, "A^3W", 432, 318)][t(1115, "R4H%", 1242, 1325) + i(378, "CPeN", 486, 361)];
  }
  [EA(-75, "%gfN", -75, -189) + pA(-260, -380, -249, -448, "O16c") + IA(739, 662, 663, 693, "rVGH")]() {
    function i(n, I, a, r, s) {
      return KA(n - -645, I - 297, a - 24, r - 226, s);
    }
    function t(n, I, a, r, s) {
      return KA(s - 456, I - 462, a - 352, r - 429, r);
    }
    function e(n, I, a, r, s) {
      return pA(n - 305, I - 1281, a - 107, r - 450, s);
    }
    function A(n, I, a, r, s) {
      return pA(n - 190, s - 73, a - 154, r - 318, a);
    }
    function g(n, I, a, r, s) {
      return IA(n - 283, s - 317, a - 451, r - 487, n);
    }
    try {
      if (g("pG]j", 949, 967, 1013, 1002) === g("Y(Na", 929, 916, 902, 852)) this[A(-558, -340, "BDu0", -361, -444) + "se"] = void (-8915 * -1 + 6358 + 9 * -1697), _0x1d37d9[A(-165, -236, "Jav)", -155, -204)](_0x1cd66c);
      else {
        if (!this[g("l7fB", 1020, 990, 1029, 1030) + "se"])
          if (i(-88, -159, -28, 33, "*WCn") === i(-11, 95, -4, 116, "($9m")) {
            _0x5c3901[i(33, -48, 41, 67, "O16c")](i(-4, 83, -29, -35, "EJ%r") + g("rVGH", 864, 781, 951, 897) + e(682, 753, 682, 882, "LPrn") + i(112, 243, 243, 82, "R4H%") + g("R4H%", 937, 900, 952, 994)), this[i(106, 226, -5, 146, "v2$F") + "se"] = void (549 + -1 * 549);
            return;
          } else throw new Oi(A(-524, -373, "Gh$R", -437, -448) + e(1006, 898, 780, 994, "nzo4") + A(-316, -263, "O16c", -262, -301) + t(1131, 1038, 1230, "pG]j", 1161) + ".");
        if (!this[t(1042, 1257, 1218, "tjxH", 1159) + i(103, -12, 17, -20, "hWKr") + "d"][t(1295, 1095, 1230, "F&h5", 1163) + i(-86, -49, -31, -91, "CPeN") + i(44, -78, -5, 109, "OJ@e") + "ed"]())
          throw t(1248, 1139, 1013, "&gke", 1135) === i(-99, -109, -50, -198, "Y]W5") ? new _0x5a5f82(t(1089, 1073, 1185, "%gfN", 1167) + t(1221, 1223, 1109, "($9m", 1182) + g("l7fB", 1006, 1179, 1039, 1085) + g("&gke", 932, 916, 916, 840) + ".") : new Oi(A(-329, -274, "Om&b", -146, -213) + i(133, 16, 133, 96, "U%%v") + A(-478, -390, "*f^5", -485, -414) + i(-21, -121, -21, 33, "rVGH") + ".");
        this[t(1321, 1163, 1241, "F&h5", 1206) + t(1092, 1084, 1031, "4P62", 1009)] = new fI(RQ(this[t(1125, 1208, 1224, "YAw4", 1143) + "se"], this[t(1041, 1079, 914, "YAw4", 987) + A(-159, -155, "EJ%r", -113, -221)]())), this[A(-163, -98, "MMVC", -290, -211) + t(1241, 1247, 1327, "z)oW", 1220) + "s"](this[A(-337, -172, "z)oW", -374, -303) + e(739, 848, 857, 962, "R4H%")][t(1074, 1326, 1071, "($9m", 1199) + "s"]), this[i(-51, -49, -173, -124, "$K%x") + A(-443, -487, "CPeN", -273, -361) + t(1204, 1156, 1215, "F&h5", 1212)](this[t(1008, 1139, 910, "Y]W5", 1017) + t(1e3, 1199, 944, "nzo4", 1076)][i(-8, 79, 25, -130, "l7fB") + i(26, -93, 31, 24, "YAw4")]);
      }
    } catch (n) {
      if (e(863, 945, 993, 834, "jR#E") === g("jy@$", 950, 845, 882, 971)) _0x4e602c[i(-115, -30, 9, -232, "vVXM")](_0x114844);
      else {
        if (n instanceof Oi)
          if (i(124, 44, 139, 30, "ra^A") === g("CPeN", 995, 950, 806, 901)) n[A(-269, -411, "rVGH", -440, -380)]();
          else return;
        else n instanceof Error && (g("GEQh", 1141, 1102, 1091, 1086) !== g("^obx", 776, 922, 882, 859) ? console[g("%gfN", 961, 980, 948, 975)](n) : _0x4679dc[A(-184, -172, "&gke", -260, -290) + "ch"]((a) => _0x2a62a3[e(849, 795, 904, 719, "c#FD")](a)));
        const I = {};
        I[e(832, 769, 740, 813, "Y]W5") + i(67, 34, 61, 2, "O16c")] = !1, I[e(705, 809, 910, 893, "IB5f") + "s"] = [], I[t(1024, 1208, 1188, ")^[J", 1108) + A(-384, -283, "A^3W", -264, -333)] = [], I[i(-61, -80, -76, -113, "nzo4") + e(815, 802, 865, 735, "hWKr") + i(-73, 37, 14, -30, "O16c")] = void (8276 + 2 * 2952 + 7090 * -2), I[e(763, 798, 828, 700, "nzo4")] = function() {
        }, I[e(854, 777, 736, 763, "%gfN") + i(3, 114, -24, 51, "f@YE")] = "", this[g("rVGH", 910, 895, 823, 853) + t(1078, 1117, 915, "($9m", 1030)] = new fI(I);
      }
    }
  }
  [xA("Ta]g", 462, 325, 383, 443) + pA(-346, -318, -223, -333, "Syuh") + pA(-420, -353, -309, -393, ")^[J") + "t"]() {
    function i(e, A, g, n, I) {
      return xA(I, A - 83, g - 498, n - 278, n - 744);
    }
    function t(e, A, g, n, I) {
      return xA(g, A - 240, g - 373, n - 55, I - -94);
    }
    return this[i(1091, 1250, 1288, 1173, "s&Lk") + t(225, 224, "^obx", -2, 99)];
  }
  [EA(-230, ")^[J", -395, -351) + xA("MMVC", 247, 113, 92, 210) + KA(753, 666, 851, 786, "jR#E")]() {
    var n, I;
    function i(a, r, s, C, x) {
      return IA(a - 227, r - -1058, s - 45, C - 436, C);
    }
    function t(a, r, s, C, x) {
      return pA(a - 406, x - -221, s - 385, C - 343, r);
    }
    function e(a, r, s, C, x) {
      return xA(C, r - 444, s - 263, C - 321, s - -160);
    }
    if (!this[A(-356, -250, "A^3W", -215) + "se"])
      if (t(-710, "CPeN", -620, -614, -607) === t(-619, "yB[g", -628, -729, -718)) {
        if (!this[t(-564, "%gfN", -555, -530, -648) + "se"]) throw new _0x3bb4f8(i(-482, -353, -222, "%gfN") + t(-704, "GEQh", -646, -785, -748) + e(210, 106, 108, "*WCn") + i(-475, -372, -259, "vVXM") + ".");
        if (!this[i(-357, -361, -415, "tjxH") + i(-560, -540, -561, "BDu0") + "d"][i(-429, -488, -584, "jy@$") + g(229, 220, 133, "YAw4") + i(-462, -343, -365, "^obx") + "ed"]()) throw new _0x1f3883(i(-446, -370, -314, "Ta]g") + A(-226, -245, "$K%x", -123) + i(-290, -418, -353, "IB5f") + t(-673, "yB[g", -559, -514, -542) + ".");
        this[i(-375, -326, -337, "BDu0") + g(170, 6, 107, ")^[J")] = new _0x3c143e(_0x54a917(this[i(-523, -438, -363, "pG]j") + "se"], this[i(-454, -435, -403, "Om&b") + e(113, 25, 134, "Y]W5")]())), this[A(-80, -122, "EJ%r", -49) + e(188, 118, 143, "BDu0") + "s"](this[t(-485, "vVXM", -550, -500, -504) + e(67, 194, 127, "nzo4")][e(304, 220, 230, "OJ@e") + "s"]), this[t(-608, "YAw4", -621, -553, -611) + e(67, 32, 162, "Om&b") + e(151, 5, 104, "U%%v")](this[i(-368, -445, -477, "*f^5") + e(-23, 203, 102, "O16c")][e(127, 84, 144, "l7fB") + g(-70, -91, -9, "tjxH")]);
      } else return;
    function A(a, r, s, C, x) {
      return IA(a - 58, r - -851, s - 372, C - 401, s);
    }
    function g(a, r, s, C, x) {
      return EA(a - 51, C, s - 35, s - 372);
    }
    try {
      if (i(-450, -328, -244, "z)oW", -321) === t(-643, "^obx", -642, -785, -715)) {
        const a = JSON[e(173, 83, 67, "U%%v", 35)](this[t(-553, "f@YE", -554, -729, -638) + "se"]);
        return (n = a == null ? void 0 : a[e(276, 324, 231, "YAw4", 139) + g(63, 27, 68, "Om&b", 178)]) == null ? void 0 : n[g(74, 302, 193, "Syuh", 135) + i(-467, -446, -446, "MMVC", -357)];
      } else {
        _0x3b87ed instanceof _0x4f3ce9 ? _0x24bf57[i(-323, -399, -481, "F&h5", -531)]() : _0x13e0fe instanceof _0x587bf2 && _0x2276b5[i(-435, -348, -452, "R4H%", -472)](_0x13b48b);
        const a = {};
        a[t(-703, "Y]W5", -601, -615, -733) + i(-436, -382, -255, "nzo4", -497)] = !1, a[g(52, 49, 120, "CPeN", 61) + "s"] = [], a[A(-291, -266, "Gh$R", -257, -274) + i(-586, -499, -482, "!ZSM", -525)] = [], a[t(-748, "YAw4", -684, -826, -701) + e(64, 94, 118, "rVGH", 177) + i(-415, -489, -476, "ZUgi", -464)] = void 0, a[e(279, 225, 209, "OJ@e", 121)] = function() {
        }, a[A(-287, -286, "$K%x", -172, -338) + t(-631, "*f^5", -822, -627, -712)] = "", this[g(-79, 23, -23, "*WCn", -155) + i(-329, -356, -356, "Ta]g", -386)] = new _0x38fdf9(a);
      }
    } catch (a) {
      if (i(-468, -358, -295, "Ta]g") === e(36, 88, 115, "LPrn")) {
        if (a instanceof Error)
          if (g(71, -18, 108, "R4H%") !== g(226, 264, 156, "Y]W5")) Y[e(111, 52, 161, "s&Lk") + e(280, 231, 197, "GEQh")](a);
          else {
            const r = _0xa42571[e(80, 136, 121, "BDu0")](this[e(181, 217, 225, "GEQh") + "se"]);
            return (I = r == null ? void 0 : r[e(117, 88, 71, "s&Lk") + A(-284, -269, "MMVC", -192)]) == null ? void 0 : I[i(-562, -447, -323, "O16c") + g(244, 73, 132, "A]Cj")];
          }
        return;
      } else _0x2fe332[i(-478, -517, -501, "F&h5") + g(0, -56, -57, "yB[g")](_0x100af2);
    }
  }
}
const gi = class gi extends UQ {
  static getInstance() {
    if (!this._instance) {
      const i = new YQ();
      this._instance = new gi(i);
    }
    return this._instance;
  }
};
D(gi, "_instance");
let yg = gi;
const ni = class ni {
  constructor() {
    D(this, "lastDetails", {});
    D(this, "delayedTime", -2870 + -1 * 1165 + 5 * 807);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ni()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -5868 + 4 * -1986 + 13812;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && xa(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
D(ni, "_instance");
let vt = ni;
const to = vt.getInstance(), fa = (o, i, t = mB) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  to.dispatchDelayedCustomEventOnChange(o, A, t);
}, WQ = (o, i) => {
  to.dispatchCustomEventOnChange(o, i);
}, OQ = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  to.dispatchCustomEventOnChange(o, e);
}, HQ = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const g = A;
  to.dispatchCustomEventOnChange(o, g);
}, KQ = (o, { detection: i, fps: t, image: e, invalidValidators: A, isInCandidateSelection: g }) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = i, n.data.fps = t, n.data.isInCandidateSelection = g, n.data.invalidValidators = A, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const I = n;
  to.dispatchCustomEventOnChange(o, I);
}, Dg = (o, i) => {
  xa(o, i);
}, TQ = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  P(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, WQ(o, A);
  }, [t, e, o]);
}, PQ = (o) => o === K0.CONTROL ? !ta() : !0, qQ = (o, i) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: g } = at(), [n, I] = cA(), a = hA(() => {
    const s = g && i && i.isStreaming && i.getCameraSettings().facingMode;
    return s ? n ?? s === "user" : n ?? PQ(o);
  }, [i, n, o, g]);
  P(() => {
    const s = () => {
      t !== qA.LOADING && e(qA.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, x = async () => {
      if (i) {
        e(qA.LOADING);
        try {
          await i.switchCamera(), e(qA.RUNNING);
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
        case Si.CONTINUE_DETECTION:
          s();
          break;
        case Si.TOGGLE_MIRROR:
          C();
          break;
        case Si.SWITCH_CAMERA:
          x();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(o, Q), () => {
      document.removeEventListener(o, Q);
    };
  }, [t, i, A, n, e, a, o]);
  const r = {};
  return r.shouldCameraMirror = a, r;
};
function jQ(o, i) {
  P(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      OQ(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
function ZQ(o) {
  return ie(Math.abs(o));
}
const VQ = () => {
  const [o, i] = cA(null), t = fA(new $g(-112 * 50 + -9421 + 15026));
  function e(g) {
    const { z: n } = g.accelerationIncludingGravity || {};
    if (!n) return;
    t.current.pushFixed(ZQ(n));
    const I = ie(Rt(t.current)), a = {};
    a.z = I, i(a);
  }
  P(() => (window.addEventListener("devicemotion", aQ(e, iQ), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = o, A;
}, pa = (o, i) => {
  const t = fA(i);
  P(() => {
    t.current = i;
  }, [i]), P(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(o, e), () => {
      document.removeEventListener(o, e);
    };
  }, [o]);
};
var _Q = Symbol.for("preact-signals");
function en() {
  if (Pe > 6664 + 1 * -1187 + -74 * 74)
    Pe--;
  else {
    for (var o, i = !1; void (31 * 293 + 8048 + -17131) !== Nt; ) {
      var t = Nt;
      for (Nt = void (-14155 + 2831 * 5), wg++; void (-3375 * -1 + 6574 + -9949) !== t; ) {
        var e = t.o;
        if (t.o = void (10 * 178 + 169 * -7 + 1 * -597), t.f &= -(-179 * 23 + 2 * 3365 + 5 * -522), !(762 * 9 + -1 * 3134 + -3716 & t.f) && wa(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !(-4065 + -7950 * 1 + 12015));
        }
        t = e;
      }
    }
    if (wg = 0, Pe--, i) throw o;
  }
}
var T = void (13161 + 4387 * -3), Nt = void (-5654 + 1 * 5654), Pe = -45 * -57 + -3555 + 6 * 165, wg = -10397 + 1 * 10397, Zo = 0;
function ya(o) {
  if (void (-2869 * 3 + 1957 + 6650) !== T) {
    var i = o.n;
    if (void (3 * 2879 + 3248 + -11885) === i || i.t !== T)
      return i = { i: 0, S: o, p: T.s, n: void 0, t: T, e: void (2823 * -1 + -4 * 2369 + 12299), x: void (-8216 + -8 * 965 + 15936), r: i }, void (-7712 + -2213 * 1 + 9925) !== T.s && (T.s.n = i), T.s = i, o.n = i, -6042 + 558 * 8 + 1610 & T.f && o.S(i), i;
    if (-(1 * -2155 + 2068 + 22 * 4) === i.i)
      return i.i = 0, void (-3835 + 59 * 65) !== i.n && (i.n.p = i.p, void (-348 + -4 * -835 + 16 * -187) !== i.p && (i.p.n = i.n), i.p = T.s, i.n = void (-6164 * 1 + -3 * 517 + -1 * -7715), T.s.n = i, T.s = i), i;
  }
}
function rA(o) {
  this.v = o, this.i = 2203 * -1 + -1989 + 4192, this.n = void (5098 + -1 * 5105 + -1 * -7), this.t = void (-5040 + 2 * -896 + 976 * 7);
}
rA.prototype.brand = _Q, rA.prototype.h = function() {
  return !(1375 + 6135 * -1 + 4760);
}, rA.prototype.S = function(o) {
  this.t !== o && void (-8832 + -1 * 3577 + 12409) === o.e && (o.x = this.t, void (5067 + 19 * 160 + -8107) !== this.t && (this.t.e = o), this.t = o);
}, rA.prototype.U = function(o) {
  if (this.t !== void 0) {
    var i = o.e, t = o.x;
    void (7897 + 1369 * 4 + 1 * -13373) !== i && (i.x = t, o.e = void (11 * 212 + -5451 + 3119)), void (1019 * 4 + -4321 * 2 + -2 * -2283) !== t && (t.e = i, o.x = void (-5023 + -18 * -43 + 4249)), o === this.t && (this.t = t);
  }
}, rA.prototype.subscribe = function(o) {
  var i = this;
  return li(function() {
    var t = i.value, e = T;
    T = void (7219 + 158 * 8 + -8483);
    try {
      o(t);
    } finally {
      T = e;
    }
  });
}, rA.prototype.valueOf = function() {
  return this.value;
}, rA.prototype.toString = function() {
  return this.value + "";
}, rA.prototype.toJSON = function() {
  return this.value;
}, rA.prototype.peek = function() {
  var o = T;
  T = void (1542 + 3 * -514);
  try {
    return this.value;
  } finally {
    T = o;
  }
}, Object.defineProperty(rA.prototype, "value", { get: function() {
  var o = ya(this);
  return void (37 * 31 + -1 * 1407 + 260) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (wg > 9 * 93 + -6831 + 6094) throw new Error("Cycle detected");
    this.v = o, this.i++, Zo++, Pe++;
    try {
      for (var i = this.t; void (-1022 * 1 + -7551 + 8573) !== i; i = i.x) i.t.N();
    } finally {
      en();
    }
  }
} });
function Da(o) {
  return new rA(o);
}
function wa(o) {
  for (var i = o.s; void (1643 * 5 + -942 + -1039 * 7) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(9732 + -4 * 2433);
  return !(-34 * 124 + 11 * 359 + -268 * -1);
}
function ma(o) {
  for (var i = o.s; void (10625 + -25 * 425) !== i; i = i.n) {
    var t = i.S.n;
    if (void (2748 + 5550 * 1 + -1 * 8298) !== t && (i.r = t), i.S.n = i, i.i = -(-3511 + -4 * -878), void (-62 * -138 + 6694 + 250 * -61) === i.n) {
      o.s = i;
      break;
    }
  }
}
function ba(o) {
  for (var i = o.s, t = void 0; void (-875 * -9 + -3903 + -993 * 4) !== i; ) {
    var e = i.p;
    -(3595 * -2 + -19 * 404 + 14867) === i.i ? (i.S.U(i), void (6079 + 33 * -260 + 2501) !== e && (e.n = i.n), void (-7 * 411 + -7374 + -1139 * -9) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (2657 * 2 + -5270 + -44) !== i.r && (i.r = void 0), i = e;
  }
  o.s = t;
}
function He(o) {
  rA.call(this, void (166 * -23 + -232 + 4050)), this.x = o, this.s = void (-2 * 951 + -8371 * -1 + -6469), this.g = Zo - (8168 * 1 + 9747 * -1 + 1580), this.f = 1 * 3019 + -1 * -2005 + -5020;
}
(He.prototype = new rA()).h = function() {
  if (this.f &= -(-7404 + -2469 * -3), -5 * 1135 + 731 * 7 + 559 & this.f) return !(3752 + -121 * 31);
  if (-7815 + 403 * -1 + -33 * -250 == (-9026 * -1 + 3862 + -12852 & this.f)) return !(-315 + -481 * -4 + -1609);
  if (this.f &= -(9745 * 1 + -796 * 8 + 2 * -1686), this.g === Zo) return !0;
  if (this.g = Zo, this.f |= -7 * -814 + 223 * -19 + -146 * 10, this.i > 9950 + 67 * -87 + -4121 && !wa(this)) return this.f &= -2, !(-107 + 1 * 107);
  var o = T;
  try {
    ma(this), T = this;
    var i = this.x();
    (16 & this.f || this.v !== i || 30 * 173 + -47 * -113 + 1 * -10501 === this.i) && (this.v = i, this.f &= -(-2995 * 2 + -9 * 635 + 11722), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return T = o, ba(this), this.f &= -(-1068 + -3159 * -2 + -5248 * 1), !0;
}, He.prototype.S = function(o) {
  if (void (642 * 2 + 2 * 2463 + -15 * 414) === this.t) {
    this.f |= 5 * 1612 + -9733 + 1 * 1709;
    for (var i = this.s; i !== void 0; i = i.n) i.S.S(i);
  }
  rA.prototype.S.call(this, o);
}, He.prototype.U = function(o) {
  if (void (2 * -4754 + -8335 + -2549 * -7) !== this.t && (rA.prototype.U.call(this, o), void (4 * 1979 + -1445 + -6471) === this.t)) {
    this.f &= -33;
    for (var i = this.s; i !== void 0; i = i.n) i.S.U(i);
  }
}, He.prototype.N = function() {
  if (!(9091 + 11 * 101 + 10 * -1020 & this.f)) {
    this.f |= -5521 + 1 * 5527;
    for (var o = this.t; void (-239 * -23 + 5720 + -11217) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(He.prototype, "value", { get: function() {
  if (336 + -2163 * -1 + -2498 * 1 & this.f) throw new Error("Cycle detected");
  var o = ya(this);
  if (this.h(), void (-7507 * -1 + 1 * -1985 + -5522) !== o && (o.i = this.i), -12 * -12 + 2 * 223 + -41 * 14 & this.f) throw this.v;
  return this.v;
} });
function zQ(o) {
  return new He(o);
}
function Ga(o) {
  var i = o.u;
  if (o.u = void (6 * 29 + 3248 * -2 + -3161 * -2), typeof i == "function") {
    Pe++;
    var t = T;
    T = void (14145 + -41 * 345);
    try {
      i();
    } catch (e) {
      throw o.f &= -(103 * -1 + -2 * 1217 + 2539), o.f |= 491 * 17 + -9657 + 1318, tn(o), e;
    } finally {
      T = t, en();
    }
  }
}
function tn(o) {
  for (var i = o.s; void (11694 + -1 * 11694) !== i; i = i.n) i.S.U(i);
  o.x = void (-9274 * -1 + -1 * -7071 + -5 * 3269), o.s = void (2 * 1056 + 7298 + -9410), Ga(o);
}
function XQ(o) {
  if (T !== this) throw new Error("Out-of-order effect");
  ba(this), T = o, this.f &= -(6893 * -1 + -3517 * -1 + -6 * -563), 8 & this.f && tn(this), en();
}
function Dt(o) {
  this.x = o, this.u = void (181 * 8 + -9920 * -1 + 58 * -196), this.s = void (523 * -6 + -2 * -2063 + -988), this.o = void (12 * 676 + 7765 + -15877), this.f = -435 * 17 + 7 * 277 + -4 * -1372;
}
Dt.prototype.c = function() {
  var o = this.S();
  try {
    if (-1 * 3214 + -8 * -458 + 13 * -34 & this.f || void (5980 + -15 * -126 + -3935 * 2) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, Dt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -85 * 5 + 137 * -3 + 837, this.f &= -(-65 * 91 + 360 + 5564), Ga(this), ma(this), Pe++;
  var o = T;
  return T = this, XQ.bind(this, o);
}, Dt.prototype.N = function() {
  !(2 & this.f) && (this.f |= 23 + -1 * -8913 + 8934 * -1, this.o = Nt, Nt = this);
}, Dt.prototype.d = function() {
  this.f |= 7 * 906 + 6411 + -2549 * 5, -1161 + -5091 * 1 + 169 * 37 & this.f || tn(this);
};
function li(o) {
  var i = new Dt(o);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Ki;
function Te(o, i) {
  N[o] = i.bind(null, N[o] || function() {
  });
}
function so(o) {
  Ki && Ki(), Ki = o && o.S();
}
function ka(o) {
  var i = this, t = o.data, e = rt(t);
  e.value = t;
  var A = hA(function() {
    for (var g = i.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= 1 * 159 + 107 * -3 + 166;
      break;
    }
    return i.__$u.c = function() {
      var n;
      !TI(A.peek()) && ((n = i.base) == null ? void (-4273 + -1 * -9484 + 579 * -9) : n.nodeType) === 3 ? i.base.data = A.peek() : (i.__$f |= -2221 * 3 + -4069 + 10733, i.setState({}));
    }, zQ(function() {
      var n = e.value.value;
      return 7 * -718 + 3065 + 1961 === n ? -1103 + 2921 * 1 + 9 * -202 : !(-1321 * -1 + -17 * -566 + 353 * -31) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
ka.displayName = "_st";
var mg = {};
mg.configurable = !(-32 * -188 + -8248 + -6 * -372), mg.value = void (46 * 191 + -2592 + 19 * -326);
var bg = {};
bg.configurable = !(2351 + -8141 * 1 + 5790), bg.value = ka;
var Gg = {};
Gg.configurable = !0, Gg.get = function() {
  var o = {};
  return o.data = this, o;
};
var kg = {};
kg.configurable = !0, kg.value = 1;
var xt = {};
xt.constructor = mg, xt.type = bg, xt.props = Gg, xt.__b = kg, Object.defineProperties(rA.prototype, xt), Te("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var g = e[A];
      g instanceof rA && (t || (i.__np = t = {}), t[A] = g, e[A] = g.peek());
    }
  }
  o(i);
}), Te("__r", function(o, i) {
  so();
  var t, e = i.__c;
  e && (e.__$f &= -(9314 + -4 * 1813 + -412 * 5), void (-4967 * -2 + 3903 * 1 + -13837) === (t = e.__$u) && (e.__$u = t = function(A) {
    var g;
    return li(function() {
      g = this;
    }), g.c = function() {
      e.__$f |= -1089 + -133 * -4 + 558, e.setState({});
    }, g;
  }())), so(t), o(i);
}), Te("__e", function(o, i, t, e) {
  so(), o(i, t, e);
}), Te("diffed", function(o, i) {
  so();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var g = t.U;
      if (g) for (var n in g) {
        var I = g[n];
        void (3 * -91 + 1739 + -1466) !== I && !(n in e) && (I.d(), g[n] = void (3123 + 1041 * -3));
      }
      else t.U = g = {};
      for (var a in e) {
        var r = g[a], s = e[a];
        void (-9224 + -1153 * -8) === r ? (r = $Q(t, a, s, A), g[a] = r) : r.o(s, A);
      }
    }
  }
  o(i);
});
function $Q(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, g = Da(t);
  return { o: function(n, I) {
    g.value = n, e = I;
  }, d: li(function() {
    var n = g.value.value;
    e[i] !== n && (e[i] = n, A ? o[i] = n : n ? o.setAttribute(i, n) : o.removeAttribute(i));
  }) };
}
Te("unmount", function(o, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (2305 + 5 * -461);
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
      I && (n.__$u = void (-29 * 1 + -9239 + 2 * 4634), I.d());
    }
  }
  o(i);
}), Te("__h", function(o, i, t, e) {
  (e < -14245 + -1096 * -13 || -1 * 7593 + -1933 + -9535 * -1 === e) && (i.__$f |= -186 * 52 + 8938 * -1 + 18 * 1034), o(i, t, e);
}), LA.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && void (-4581 + 5991 * 1 + 141 * -10) !== t.s || 2 * 1481 + -8811 + -1951 * -3 & this.__$f)) return !0;
  if (3 & this.__$f) return !(1 * -5595 + 9912 + -4317);
  for (var e in i) return !(8715 + 1847 * -2 + -5021);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(-316 * -14 + 7880 + 1 * -12304);
  for (var g in this.props) if (!(g in o)) return !(2631 + 1 * -7654 + 5023);
  return !1;
};
function rt(o) {
  return hA(function() {
    return Da(o);
  }, []);
}
function As(o) {
  var i = fA(o);
  i.current = o, P(function() {
    return li(function() {
      return i.current();
    });
  }, []);
}
const es = (o) => {
  const i = rt(!1);
  return pa(o, (e) => {
    e.detail && (i.value = e.detail.animationEnd);
  }), i;
}, ts = async () => WebAssembly.validate(new Uint8Array([0, 6 * 382 + 7493 * -1 + 5298, 281 * -29 + 2351 + 5913, 2251 * 1 + -2801 * 2 + 5 * 692, -1 * -1444 + 1737 + 10 * -318, 883 * 6 + -9958 + 4660, -3112 + 35 * -139 + 7977, -3 * -2063 + 7560 + -4583 * 3, 7 * 1195 + 2380 + -10744, -147 * 27 + -93 * -35 + 719, -2286 * -2 + 2091 + -6662, 96, 2 * -3494 + 8902 + -638 * 3, 1, 8 * -799 + 5090 + 1425, -1805 * 2 + -483 + -32 * -128, 3421 + 331 * 17 + 2 * -4523, -3967 * -2 + -8 * -538 + -4079 * 3, 34 * -52 + -1 * -1883 + 115 * -1, -9480 + -2 * -4442 + 606, -6633 + -133 * -51 + -140, 674 * 8 + 233 * 5 + 11 * -596, 9004 + -4 * -2310 + 18236 * -1, 7912 + 7237 * -1 + -45 * 15, -2 * -3001 + -43 * 217 + 3394, 1 * -1691 + 1 * -2118 + 3809, 2680 + -789 * 11 + -6 * -1042, -1 * 4882 + -3 * 1052 + 8053, -2 * 1847 + -1130 + -1 * -5077, 13479 + 13381 * -1, -3662 * 1 + -173 * -35 + -2382]));
function os() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(671 * -1 + -7618 + 151 * 55);
}
function is() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = os();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function gs(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const pI = (o) => Math.round(o / 500) * 500 / (1210 + -1 * 612 + 402), We = (o) => o ? o <= 28 * -299 + -1129 * 8 + 17405 ? Math.round(o * (-1 * 1481 + 8563 * 1 + -7062)) / (-3486 + -2 * -1753) : Math.round(o / (4559 * 1 + -6413 * -1 + -10922)) * (9 * 796 + 861 + -7975) : 8473 + 5513 * -1 + -40 * 74, ns = (o) => Math.round(o * (11241 + 1 * -11239)) / (6493 + -6491 * 1);
async function Is() {
  return await ts() ? sI.SIMD : sI.NO_SIMD;
}
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Na = {}, yI = {}, as = rs;
function rs(o, i) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, g = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(n, I) {
    t[e] = function(a) {
      if (g)
        if (g = !1, a)
          I(a);
        else {
          for (var r = new Array(arguments.length - 1), s = 0; s < r.length; )
            r[s++] = arguments[s];
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
var Fa = {};
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
    for (var r = null, s = [], C = 0, x = 0, Q; I < a; ) {
      var E = n[I++];
      switch (x) {
        case 0:
          s[C++] = t[E >> 2], Q = (E & 3) << 4, x = 1;
          break;
        case 1:
          s[C++] = t[Q | E >> 4], Q = (E & 15) << 2, x = 2;
          break;
        case 2:
          s[C++] = t[Q | E >> 6], s[C++] = t[E & 63], x = 0;
          break;
      }
      C > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, s)), C = 0);
    }
    return x && (s[C++] = t[Q], s[C++] = 61, x === 1 && (s[C++] = 61)), r ? (C && r.push(String.fromCharCode.apply(String, s.slice(0, C))), r.join("")) : String.fromCharCode.apply(String, s.slice(0, C));
  };
  var g = "invalid encoding";
  i.decode = function(n, I, a) {
    for (var r = a, s = 0, C, x = 0; x < n.length; ) {
      var Q = n.charCodeAt(x++);
      if (Q === 61 && s > 1)
        break;
      if ((Q = e[Q]) === void 0)
        throw Error(g);
      switch (s) {
        case 0:
          C = Q, s = 1;
          break;
        case 1:
          I[a++] = C << 2 | (Q & 48) >> 4, C = Q, s = 2;
          break;
        case 2:
          I[a++] = (C & 15) << 4 | (Q & 60) >> 2, C = Q, s = 3;
          break;
        case 3:
          I[a++] = (C & 3) << 6 | Q, s = 0;
          break;
      }
    }
    if (s === 1)
      throw Error(g);
    return a - r;
  }, i.test = function(n) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n);
  };
})(Fa);
var Cs = ui;
function ui() {
  this._listeners = {};
}
ui.prototype.on = function(o, i, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
ui.prototype.off = function(o, i) {
  if (o === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
ui.prototype.emit = function(o) {
  var i = this._listeners[o];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var Bs = DI(DI);
function DI(o) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function A(a, r, s) {
      i[0] = a, r[s] = t[0], r[s + 1] = t[1], r[s + 2] = t[2], r[s + 3] = t[3];
    }
    function g(a, r, s) {
      i[0] = a, r[s] = t[3], r[s + 1] = t[2], r[s + 2] = t[1], r[s + 3] = t[0];
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
    o.writeFloatLE = i.bind(null, wI), o.writeFloatBE = i.bind(null, mI);
    function t(e, A, g) {
      var n = e(A, g), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    o.readFloatLE = t.bind(null, bI), o.readFloatBE = t.bind(null, GI);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function A(a, r, s) {
      i[0] = a, r[s] = t[0], r[s + 1] = t[1], r[s + 2] = t[2], r[s + 3] = t[3], r[s + 4] = t[4], r[s + 5] = t[5], r[s + 6] = t[6], r[s + 7] = t[7];
    }
    function g(a, r, s) {
      i[0] = a, r[s] = t[7], r[s + 1] = t[6], r[s + 2] = t[5], r[s + 3] = t[4], r[s + 4] = t[3], r[s + 5] = t[2], r[s + 6] = t[1], r[s + 7] = t[0];
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
        var s;
        if (n < 22250738585072014e-324)
          s = n / 5e-324, e(s >>> 0, I, a + A), e((r << 31 | s / 4294967296) >>> 0, I, a + g);
        else {
          var C = Math.floor(Math.log(n) / Math.LN2);
          C === 1024 && (C = 1023), s = n * Math.pow(2, -C), e(s * 4503599627370496 >>> 0, I, a + A), e((r << 31 | C + 1023 << 20 | s * 1048576 & 1048575) >>> 0, I, a + g);
        }
      }
    }
    o.writeDoubleLE = i.bind(null, wI, 0, 4), o.writeDoubleBE = i.bind(null, mI, 4, 0);
    function t(e, A, g, n, I) {
      var a = e(n, I + A), r = e(n, I + g), s = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, x = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? x ? NaN : s * (1 / 0) : C === 0 ? s * 5e-324 * x : s * Math.pow(2, C - 1075) * (x + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, bI, 0, 4), o.readDoubleBE = t.bind(null, GI, 4, 0);
  }(), o;
}
function wI(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function mI(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function bI(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function GI(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function kI(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Qs = ss;
function ss(o) {
  try {
    if (typeof kI != "function")
      return null;
    var i = kI(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var Sa = {};
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
})(Sa);
var cs = xs;
function xs(o, i, t) {
  var e = t || 8192, A = e >>> 1, g = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return o(I);
    n + I > e && (g = o(e), n = 0);
    var a = i.call(g, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var Ti, NI;
function Es() {
  if (NI)
    return Ti;
  NI = 1, Ti = i;
  var o = Le();
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
  }, Ti;
}
var FI;
function Le() {
  return FI || (FI = 1, function(o) {
    var i = o;
    i.asPromise = as, i.base64 = Fa, i.EventEmitter = Cs, i.float = Bs, i.inquire = Qs, i.utf8 = Sa, i.pool = cs, i.LongBits = Es(), i.isNode = !!(typeof de < "u" && de && de.process && de.process.versions && de.process.versions.node), i.global = i.isNode && de || typeof window < "u" && window || typeof self < "u" && self || de, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(yI)), yI;
}
var Ra = U, JA = Le(), Ng, hi = JA.LongBits, SI = JA.base64, RI = JA.utf8;
function oo(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function on() {
}
function ds(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function U() {
  this.len = 0, this.head = new oo(on, 0, 0), this.tail = this.head, this.states = null;
}
var Ma = function() {
  return JA.Buffer ? function() {
    return (U.create = function() {
      return new Ng();
    })();
  } : function() {
    return new U();
  };
};
U.create = Ma();
U.alloc = function(o) {
  return new JA.Array(o);
};
JA.Array !== Array && (U.alloc = JA.pool(U.alloc, JA.Array.prototype.subarray));
U.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new oo(o, i, t), this.len += i, this;
};
function gn(o, i, t) {
  i[t] = o & 255;
}
function ls(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function nn(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
nn.prototype = Object.create(oo.prototype);
nn.prototype.fn = ls;
U.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new nn(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
U.prototype.int32 = function(o) {
  return o < 0 ? this._push(In, 10, hi.fromNumber(o)) : this.uint32(o);
};
U.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function In(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
U.prototype.uint64 = function(o) {
  var i = hi.from(o);
  return this._push(In, i.length(), i);
};
U.prototype.int64 = U.prototype.uint64;
U.prototype.sint64 = function(o) {
  var i = hi.from(o).zzEncode();
  return this._push(In, i.length(), i);
};
U.prototype.bool = function(o) {
  return this._push(gn, 1, o ? 1 : 0);
};
function Fg(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
U.prototype.fixed32 = function(o) {
  return this._push(Fg, 4, o >>> 0);
};
U.prototype.sfixed32 = U.prototype.fixed32;
U.prototype.fixed64 = function(o) {
  var i = hi.from(o);
  return this._push(Fg, 4, i.lo)._push(Fg, 4, i.hi);
};
U.prototype.sfixed64 = U.prototype.fixed64;
U.prototype.float = function(o) {
  return this._push(JA.float.writeFloatLE, 4, o);
};
U.prototype.double = function(o) {
  return this._push(JA.float.writeDoubleLE, 8, o);
};
var us = JA.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
U.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(gn, 1, 0);
  if (JA.isString(o)) {
    var t = U.alloc(i = SI.length(o));
    SI.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(us, i, o);
};
U.prototype.string = function(o) {
  var i = RI.length(o);
  return i ? this.uint32(i)._push(RI.write, i, o) : this._push(gn, 1, 0);
};
U.prototype.fork = function() {
  return this.states = new ds(this), this.head = this.tail = new oo(on, 0, 0), this.len = 0, this;
};
U.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new oo(on, 0, 0), this.len = 0), this;
};
U.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
U.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
U._configure = function(o) {
  Ng = o, U.create = Ma(), Ng._configure();
};
var hs = ZA, va = Ra;
(ZA.prototype = Object.create(va.prototype)).constructor = ZA;
var Qe = Le();
function ZA() {
  va.call(this);
}
ZA._configure = function() {
  ZA.alloc = Qe._Buffer_allocUnsafe, ZA.writeBytesBuffer = Qe.Buffer && Qe.Buffer.prototype instanceof Uint8Array && Qe.Buffer.prototype.set.name === "set" ? function(o, i, t) {
    i.set(o, t);
  } : function(o, i, t) {
    if (o.copy)
      o.copy(i, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        i[t++] = o[e++];
  };
};
ZA.prototype.bytes = function(o) {
  Qe.isString(o) && (o = Qe._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(ZA.writeBytesBuffer, i, o), this;
};
function fs(o, i, t) {
  o.length < 40 ? Qe.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
ZA.prototype.string = function(o) {
  var i = Qe.Buffer.byteLength(o);
  return this.uint32(i), i && this._push(fs, i, o), this;
};
ZA._configure();
var La = X, VA = Le(), Sg, Ja = VA.LongBits, ps = VA.utf8;
function HA(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function X(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var MI = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new X(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new X(o);
  throw Error("illegal buffer");
}, Ya = function() {
  return VA.Buffer ? function(o) {
    return (X.create = function(i) {
      return VA.Buffer.isBuffer(i) ? new Sg(i) : MI(i);
    })(o);
  } : MI;
};
X.create = Ya();
X.prototype._slice = VA.Array.prototype.subarray || /* istanbul ignore next */
VA.Array.prototype.slice;
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
function Pi() {
  var o = new Ja(0, 0), i = 0;
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
        throw HA(this);
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
        throw HA(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
X.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Vo(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
X.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  return Vo(this.buf, this.pos += 4);
};
X.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  return Vo(this.buf, this.pos += 4) | 0;
};
function vI() {
  if (this.pos + 8 > this.len)
    throw HA(this, 8);
  return new Ja(Vo(this.buf, this.pos += 4), Vo(this.buf, this.pos += 4));
}
X.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw HA(this, 4);
  var o = VA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
X.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw HA(this, 4);
  var o = VA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
X.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw HA(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
X.prototype.string = function() {
  var o = this.bytes();
  return ps.read(o, 0, o.length);
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
  Sg = o, X.create = Ya(), Sg._configure();
  var i = VA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  VA.merge(X.prototype, {
    int64: function() {
      return Pi.call(this)[i](!1);
    },
    uint64: function() {
      return Pi.call(this)[i](!0);
    },
    sint64: function() {
      return Pi.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return vI.call(this)[i](!0);
    },
    sfixed64: function() {
      return vI.call(this)[i](!1);
    }
  });
};
var ys = Me, Ua = La;
(Me.prototype = Object.create(Ua.prototype)).constructor = Me;
var LI = Le();
function Me(o) {
  Ua.call(this, o);
}
Me._configure = function() {
  LI.Buffer && (Me.prototype._slice = LI.Buffer.prototype.slice);
};
Me.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
Me._configure();
var Wa = {}, Ds = Lt, an = Le();
(Lt.prototype = Object.create(an.EventEmitter.prototype)).constructor = Lt;
function Lt(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  an.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
Lt.prototype.rpcCall = function o(i, t, e, A, g) {
  if (!A)
    throw TypeError("request must be specified");
  var n = this;
  if (!g)
    return an.asPromise(o, n, i, t, e, A);
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
Lt.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var i = o;
  i.Service = Ds;
})(Wa);
var ws = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = Ra, i.BufferWriter = hs, i.Reader = La, i.BufferReader = ys, i.util = Le(), i.rpc = Wa, i.roots = ws, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(Na);
var M = Na;
const f = M.Reader, L = M.Writer, l = M.util, B = M.roots.default || (M.roots.default = {}), ve = B.dot = (() => {
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
      return e || (e = L.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      let A = e === void 0 ? t.len : t.pos + e, g = new B.dot.Content();
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
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, M.util.toJSONOptions);
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
        if (A || (A = L.create()), e.images != null && e.images.length)
          for (let g = 0; g < e.images.length; ++g)
            B.dot.Image.encode(e.images[g], A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < g; ) {
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
            let g = B.dot.Image.verify(e.images[A]);
            if (g)
              return "images." + g;
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
          for (let g = 0; g < e.images.length; ++g) {
            if (typeof e.images[g] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[g] = B.dot.Image.fromObject(e.images[g]);
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
        let g = {};
        if ((A.arrays || A.defaults) && (g.images = []), A.defaults && (g.metadata = null), e.images && e.images.length) {
          g.images = [];
          for (let n = 0; n < e.images.length; ++n)
            g.images[n] = B.dot.Image.toObject(e.images[n], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && g.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && B.dot.v4.WebMetadata.encode(A.web, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && B.dot.v4.AndroidMetadata.encode(A.android, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && B.dot.v4.IosMetadata.encode(A.ios, g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.Metadata();
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
            let n = B.dot.v4.WebMetadata.verify(A.web);
            if (n)
              return "web." + n;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (g.metadata === 1)
            return "metadata: multiple values";
          g.metadata = 1;
          {
            let n = B.dot.v4.AndroidMetadata.verify(A.android);
            if (n)
              return "android." + n;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (g.metadata === 1)
            return "metadata: multiple values";
          g.metadata = 1;
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
        let g = new B.dot.v4.Metadata();
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
          g.web = B.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          g.android = B.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          g.ios = B.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.platform = g.enums === String ? "WEB" : 0, n.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (n.platform = g.enums === String ? B.dot.Platform[A.platform] === void 0 ? A.platform : B.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (n.web = B.dot.v4.WebMetadata.toObject(A.web, g), g.oneofs && (n.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (n.android = B.dot.v4.AndroidMetadata.toObject(A.android, g), g.oneofs && (n.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (n.ios = B.dot.v4.IosMetadata.toObject(A.ios, g), g.oneofs && (n.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n.sessionToken = A.sessionToken, g.oneofs && (n._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (n.componentVersion = A.componentVersion), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        if (g || (g = L.create()), A.supportedAbis != null && A.supportedAbis.length)
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
            ).string(n[I]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[n[I]], g.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.AndroidCamera.encode(A.camera, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && g.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.AndroidMetadata(), a, r;
        for (; A.pos < n; ) {
          let s = A.uint32();
          switch (s >>> 3) {
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
              I.dynamicCameraFrameProperties === l.emptyObject && (I.dynamicCameraFrameProperties = {});
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
              A.skipType(s & 7);
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
          let g = B.dot.v4.AndroidCamera.verify(A.camera);
          if (g)
            return "camera." + g;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let g = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let n = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[g]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let g = Object.keys(A.dynamicCameraFrameProperties);
          for (let n = 0; n < g.length; ++n) {
            let I = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[g[n]]);
            if (I)
              return "dynamicCameraFrameProperties." + I;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let g = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (g)
            return "croppedYuv420Image." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.AndroidMetadata)
          return A;
        let g = new B.dot.v4.AndroidMetadata();
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
          g.camera = B.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          g.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            g.digestsWithTimestamp[n] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          g.dynamicCameraFrameProperties = {};
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I) {
            if (typeof A.dynamicCameraFrameProperties[n[I]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            g.dynamicCameraFrameProperties[n[I]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[n[I]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, g.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (g.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          g.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
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
            n.dynamicCameraFrameProperties[I[a]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[I[a]], g);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], g);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = B.dot.v4.AndroidCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (n.tamperingIndicators = g.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : g.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, g.oneofs && (n._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (n.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, g), g.oneofs && (n._croppedYuv420Image = "croppedYuv420Image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.AndroidCamera();
        for (; e.pos < g; ) {
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
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let g = {};
        return A.defaults && (g.resolution = null, g.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (g.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (g.rotationDegrees = e.rotationDegrees), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.Yuv420Image();
        for (; e.pos < g; ) {
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
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || l.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || l.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || l.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? l.base64.decode(e.yPlane, A.yPlane = l.newBuffer(l.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? l.base64.decode(e.uPlane, A.uPlane = l.newBuffer(l.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? l.base64.decode(e.vPlane, A.vPlane = l.newBuffer(l.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.size = null, A.bytes === String ? g.yPlane = "" : (g.yPlane = [], A.bytes !== Array && (g.yPlane = l.newBuffer(g.yPlane))), A.bytes === String ? g.uPlane = "" : (g.uPlane = [], A.bytes !== Array && (g.uPlane = l.newBuffer(g.uPlane))), A.bytes === String ? g.vPlane = "" : (g.vPlane = [], A.bytes !== Array && (g.vPlane = l.newBuffer(g.vPlane)))), e.size != null && e.hasOwnProperty("size") && (g.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (g.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (g.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (g.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        if (g || (g = L.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && g.uint32(
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
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.IosCamera.encode(A.camera, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.IosMetadata(), a, r;
        for (; A.pos < n; ) {
          let s = A.uint32();
          switch (s >>> 3) {
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
              if (I.isoValues && I.isoValues.length || (I.isoValues = []), (s & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  I.isoValues.push(A.int32());
              } else
                I.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(s & 7);
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
          let g = B.dot.v4.IosCamera.verify(A.camera);
          if (g)
            return "camera." + g;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let g = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
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
            let n = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[g]);
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
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let g = new B.dot.v4.IosMetadata();
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
          g.camera = B.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          g.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
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
            g.digestsWithTimestamp[n] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
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
            n.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], g);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = B.dot.v4.IosCamera.toObject(A.camera, g), g.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, g), g.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.IosCamera();
        for (; e.pos < g; ) {
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
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !l.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let g = {};
        return A.defaults && (g.resolution = null, g.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (g.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (g.rotationDegrees = e.rotationDegrees), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        if (g || (g = L.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let n = 0; n < A.availableCameraProperties.length; ++n)
            B.dot.v4.CameraProperties.encode(A.availableCameraProperties[n], g.uint32(
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
            B.dot.v4.DetectedObject.encode(A.detectionRecord[n], g.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n)
            B.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[n], g.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && B.dot.Image.encode(A.croppedImage, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.WebMetadata();
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
          let g = B.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (g)
            return "currentCameraProperties." + g;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let g = 0; g < A.availableCameraProperties.length; ++g) {
            let n = B.dot.v4.CameraProperties.verify(A.availableCameraProperties[g]);
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
            let n = B.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[g]);
            if (n)
              return "hashedDetectedImagesWithTimestamp." + n;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let g = 0; g < A.detectionRecord.length; ++g) {
            let n = B.dot.v4.DetectedObject.verify(A.detectionRecord[g]);
            if (n)
              return "detectionRecord." + n;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let g = B.dot.Image.verify(A.croppedImage);
          if (g)
            return "croppedImage." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.WebMetadata)
          return A;
        let g = new B.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          g.currentCameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          g.availableCameraProperties = [];
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            if (typeof A.availableCameraProperties[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            g.availableCameraProperties[n] = B.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[n]);
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
            g.hashedDetectedImagesWithTimestamp[n] = B.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[n]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          g.detectionRecord = [];
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            if (typeof A.detectionRecord[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            g.detectionRecord[n] = B.dot.v4.DetectedObject.fromObject(A.detectionRecord[n]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          g.croppedImage = B.dot.Image.fromObject(A.croppedImage);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.availableCameraProperties = [], n.hashedDetectedImages = [], n.detectionRecord = [], n.hashedDetectedImagesWithTimestamp = []), g.defaults && (n.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (n.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, g)), A.availableCameraProperties && A.availableCameraProperties.length) {
          n.availableCameraProperties = [];
          for (let I = 0; I < A.availableCameraProperties.length; ++I)
            n.availableCameraProperties[I] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[I], g);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          n.hashedDetectedImages = [];
          for (let I = 0; I < A.hashedDetectedImages.length; ++I)
            n.hashedDetectedImages[I] = A.hashedDetectedImages[I];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          n.detectionRecord = [];
          for (let I = 0; I < A.detectionRecord.length; ++I)
            n.detectionRecord[I] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[I], g);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          n.hashedDetectedImagesWithTimestamp = [];
          for (let I = 0; I < A.hashedDetectedImagesWithTimestamp.length; ++I)
            n.hashedDetectedImagesWithTimestamp[I] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[I], g);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (n.croppedImage = B.dot.Image.toObject(A.croppedImage, g), g.oneofs && (n._croppedImage = "croppedImage")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.HashedDetectedImageWithTimestamp();
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
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
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
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.MediaTrackSettings();
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
        if (A instanceof B.dot.v4.MediaTrackSettings)
          return A;
        let g = new B.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (g.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (g.autoGainControl = !!A.autoGainControl), A.channelCount != null && (g.channelCount = A.channelCount | 0), A.deviceId != null && (g.deviceId = String(A.deviceId)), A.displaySurface != null && (g.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (g.echoCancellation = !!A.echoCancellation), A.facingMode != null && (g.facingMode = String(A.facingMode)), A.frameRate != null && (g.frameRate = Number(A.frameRate)), A.groupId != null && (g.groupId = String(A.groupId)), A.height != null && (g.height = A.height | 0), A.noiseSuppression != null && (g.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (g.sampleRate = A.sampleRate | 0), A.sampleSize != null && (g.sampleSize = A.sampleSize | 0), A.width != null && (g.width = A.width | 0), A.deviceName != null && (g.deviceName = String(A.deviceName)), g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (n.aspectRatio = g.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, g.oneofs && (n._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (n.autoGainControl = A.autoGainControl, g.oneofs && (n._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (n.channelCount = A.channelCount, g.oneofs && (n._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (n.deviceId = A.deviceId, g.oneofs && (n._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (n.displaySurface = A.displaySurface, g.oneofs && (n._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (n.echoCancellation = A.echoCancellation, g.oneofs && (n._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (n.facingMode = A.facingMode, g.oneofs && (n._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (n.frameRate = g.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, g.oneofs && (n._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (n.groupId = A.groupId, g.oneofs && (n._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (n.height = A.height, g.oneofs && (n._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (n.noiseSuppression = A.noiseSuppression, g.oneofs && (n._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (n.sampleRate = A.sampleRate, g.oneofs && (n._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (n.sampleSize = A.sampleSize, g.oneofs && (n._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (n.width = A.width, g.oneofs && (n._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (n.deviceName = A.deviceName, g.oneofs && (n._deviceName = "deviceName")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.ImageBitmap();
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
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.width = 0, g.height = 0), e.width != null && e.hasOwnProperty("width") && (g.width = e.width), e.height != null && e.hasOwnProperty("height") && (g.height = e.height), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.CameraProperties();
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
          let g = B.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (g)
            return "cameraInitFrameResolution." + g;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let g = B.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (g)
            return "cameraProperties." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.CameraProperties)
          return A;
        let g = new B.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          g.cameraInitFrameResolution = B.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          g.cameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (n.cameraInitFrameResolution = B.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, g), g.oneofs && (n._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (n.cameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, g)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DetectedObject();
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
        let g = {};
        return A.defaults && (g.brightness = 0, g.sharpness = 0, g.hotspots = 0, g.confidence = 0, g.faceSize = 0, g.faceCenter = null, g.smallestEdge = 0, g.bottomLeft = null, g.bottomRight = null, g.topLeft = null, g.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (g.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (g.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (g.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (g.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (g.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (g.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (g.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (g.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (g.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (g.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (g.topRight = B.dot.v4.Point.toObject(e.topRight, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.Point();
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
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let g = {};
        return A.defaults && (g.x = 0, g.y = 0), e.x != null && e.hasOwnProperty("x") && (g.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (g.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.FaceContent();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DocumentContent();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && B.dot.v4.FaceContent.encode(A.faceContent, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && B.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && B.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && B.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && B.dot.v4.PalmContent.encode(A.palmContent, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && B.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.Blob();
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
        let g = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          g.blob = 1;
          {
            let n = B.dot.v4.DocumentContent.verify(A.documentContent);
            if (n)
              return "documentContent." + n;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = B.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (n)
              return "eyeGazeLivenessContent." + n;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = B.dot.v4.FaceContent.verify(A.faceContent);
            if (n)
              return "faceContent." + n;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = B.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (n)
              return "magnifeyeLivenessContent." + n;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = B.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (n)
              return "smileLivenessContent." + n;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
          {
            let n = B.dot.v4.PalmContent.verify(A.palmContent);
            if (n)
              return "palmContent." + n;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (g.blob === 1)
            return "blob: multiple values";
          g.blob = 1;
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
        let g = new B.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          g.documentContent = B.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          g.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          g.faceContent = B.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          g.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          g.smileLivenessContent = B.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          g.palmContent = B.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          g.travelDocumentContent = B.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (n.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, g), g.oneofs && (n.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (n.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, g), g.oneofs && (n.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (n.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, g), g.oneofs && (n.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (n.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, g), g.oneofs && (n.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (n.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, g), g.oneofs && (n.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (n.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, g), g.oneofs && (n.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (n.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, g), g.oneofs && (n.blob = "travelDocumentContent")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.ldsMasterFile = null, g.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, g.authenticationStatus = null, g.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (g.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (g.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (g.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.LdsMasterFile();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (g.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, g.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && B.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && B.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, g.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && B.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, g.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && B.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, g.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && B.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, g.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && B.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, g.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, g.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, g.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, g.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, g.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, g.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, g.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && B.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, g.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && B.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, g.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && B.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, g.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.Lds1eMrtdApplication();
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
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (g)
            return "comHeaderAndDataGroupPresenceInformation." + g;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (g)
            return "sodDocumentSecurityObject." + g;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (g)
            return "dg1MachineReadableZoneInformation." + g;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (g)
            return "dg2EncodedIdentificationFeaturesFace." + g;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (g)
            return "dg3AdditionalIdentificationFeatureFingers." + g;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (g)
            return "dg4AdditionalIdentificationFeatureIrises." + g;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (g)
            return "dg5DisplayedPortrait." + g;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (g)
            return "dg7DisplayedSignatureOrUsualMark." + g;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (g)
            return "dg8DataFeatures." + g;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (g)
            return "dg9StructureFeatures." + g;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (g)
            return "dg10SubstanceFeatures." + g;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (g)
            return "dg11AdditionalPersonalDetails." + g;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (g)
            return "dg12AdditionalDocumentDetails." + g;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (g)
            return "dg13OptionalDetails." + g;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (g)
            return "dg14SecurityOptions." + g;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (g)
            return "dg15ActiveAuthenticationPublicKeyInfo." + g;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let g = B.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (g)
            return "dg16PersonsToNotify." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1eMrtdApplication)
          return A;
        let g = new B.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          g.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          g.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          g.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          g.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          g.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          g.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          g.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          g.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          g.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          g.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          g.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          g.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          g.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          g.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          g.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          g.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          g.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        return g.defaults && (n.comHeaderAndDataGroupPresenceInformation = null, n.sodDocumentSecurityObject = null, n.dg1MachineReadableZoneInformation = null, n.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (n.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, g)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (n.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, g)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (n.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, g)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (n.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, g)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (n.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, g), g.oneofs && (n._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (n.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, g), g.oneofs && (n._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (n.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, g), g.oneofs && (n._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (n.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, g), g.oneofs && (n._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (n.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, g), g.oneofs && (n._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (n.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, g), g.oneofs && (n._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (n.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, g), g.oneofs && (n._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (n.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, g), g.oneofs && (n._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (n.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, g), g.oneofs && (n._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (n.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, g), g.oneofs && (n._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (n.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, g), g.oneofs && (n._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (n.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, g), g.oneofs && (n._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (n.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, g), g.oneofs && (n._dg16PersonsToNotify = "dg16PersonsToNotify")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.Lds1ElementaryFile();
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
        if (A instanceof B.dot.v4.Lds1ElementaryFile)
          return A;
        let g = new B.dot.v4.Lds1ElementaryFile();
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
        return g.defaults && (n.id = g.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (n.id = g.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (n.bytes = g.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : g.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, g.oneofs && (n._bytes = "bytes")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.data = null, g.chip = null), e.data != null && e.hasOwnProperty("data") && (g.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (g.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DataAuthenticationStatus();
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
        let g = {};
        return A.defaults && (g.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, g.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (g.status = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : B.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (g.protocol = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return g || (g = L.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && g.uint32(
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
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.ChipAuthenticationStatus();
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
        if (A instanceof B.dot.v4.ChipAuthenticationStatus)
          return A;
        let g = new B.dot.v4.ChipAuthenticationStatus();
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
        return g.defaults && (n.status = g.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (n.status = g.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (n.protocol = g.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, g.oneofs && (n._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (n.activeAuthenticationResponse = g.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : g.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, g.oneofs && (n._activeAuthenticationResponse = "activeAuthenticationResponse")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        if (g || (g = L.create()), A.segments != null && A.segments.length)
          for (let n = 0; n < A.segments.length; ++n)
            B.dot.v4.EyeGazeLivenessSegment.encode(A.segments[n], g.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, g.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, g.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), g;
      }, t.encodeDelimited = function(A, g) {
        return this.encode(A, g).ldelim();
      }, t.decode = function(A, g) {
        A instanceof f || (A = f.create(A));
        let n = g === void 0 ? A.len : A.pos + g, I = new B.dot.v4.EyeGazeLivenessContent();
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
          let g = B.dot.Image.verify(A.image);
          if (g)
            return "image." + g;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let g = 0; g < A.segments.length; ++g) {
            let n = B.dot.v4.EyeGazeLivenessSegment.verify(A.segments[g]);
            if (n)
              return "segments." + n;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let g = B.dot.v4.Metadata.verify(A.metadata);
          if (g)
            return "metadata." + g;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.EyeGazeLivenessContent)
          return A;
        let g = new B.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          g.image = B.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          g.segments = [];
          for (let n = 0; n < A.segments.length; ++n) {
            if (typeof A.segments[n] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            g.segments[n] = B.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[n]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          g.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return g;
      }, t.toObject = function(A, g) {
        g || (g = {});
        let n = {};
        if ((g.arrays || g.defaults) && (n.segments = []), g.defaults && (n.metadata = null), A.segments && A.segments.length) {
          n.segments = [];
          for (let I = 0; I < A.segments.length; ++I)
            n.segments[I] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[I], g);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(A.metadata, g)), A.image != null && A.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(A.image, g), g.oneofs && (n._image = "image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.corner = A.enums === String ? "TOP_LEFT" : 0, g.image = null), e.corner != null && e.hasOwnProperty("corner") && (g.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (g.image = B.dot.Image.toObject(e.image, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && B.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.SmileLivenessContent();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.neutralExpressionFaceImage = null, g.smileExpressionFaceImage = null, g.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (g.neutralExpressionFaceImage = B.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (g.smileExpressionFaceImage = B.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
        return A || (A = L.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
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
        let g = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.PalmContent();
        for (; e.pos < g; ) {
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
        let g = {};
        return A.defaults && (g.image = null, g.metadata = null), e.image != null && e.hasOwnProperty("image") && (g.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, M.util.toJSONOptions);
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
      return e || (e = L.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, g = new B.dot.Image();
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
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, M.util.toJSONOptions);
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
      return e || (e = L.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
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
      let A = e === void 0 ? t.len : t.pos + e, g = new B.dot.ImageSize();
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
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, M.util.toJSONOptions);
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
      if (e || (e = L.create()), t.items != null && t.items.length) {
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
      let A = e === void 0 ? t.len : t.pos + e, g = new B.dot.Int32List();
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
      return this.constructor.toObject(this, M.util.toJSONOptions);
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
      return e || (e = L.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
      let A = e === void 0 ? t.len : t.pos + e, g = new B.dot.RectangleDouble();
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
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, M.util.toJSONOptions);
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
      return e || (e = L.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
      let A = e === void 0 ? t.len : t.pos + e, g = new B.dot.DigestWithTimestamp();
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
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
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
      return this.constructor.toObject(this, M.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), o;
})();
function _o() {
  const o = ["fCoAWQ5sWQVcRmoSW7HjiwxdKSkM", "vsr+cKddPCoZiSk9WQe1vCoA", "W7VcUmktiSkVbbC", "j3NcGmkYW4S", "WOZdLXNdK2q", "fCoFWQrvWQVcRmoRW6HLl1VdQCkZ", "hSoqWPbbjuJdU8o+AM7cLbPxpW", "As5JW5FdMxbxW4a", "W6BdSKBcRbtdMmklwdddUNtcSW", "WPnxWOr8W4jwWP0RiSoAtLRdOW", "W4NdRSkRfCk7CYHYW70HWPZdVd3dRa", "qtuzASoeWRpcJMe6", "g3ZdGMRcK8kDla", "ymkzku8", "W6NdQ2hcHNm", "DCkBgHZdSq", "rNeCW7hcUq", "W7ldUCoHbSkOjrpcVmk0", "rMddO13cPa", "WR7dQGC", "oYH+rmkF", "p8k/W5FcIH3dNI3cSCkC", "a8kjnSkJW4m", "emo6e8kflq", "FCkmgG", "vmo9WQZdN3S", "fSknlW", "WR7dQSo2WOuMW7vNAmkgWRO1zu4", "emoFWQDwWQVcOCk1W7jng3JdVG", "W5erW5q6WP0", "W5hcHuxdJuOOWPijyG", "b8kEiCk2W4u", "cCoWBmo6W5ChWR7cVrToDuBcLa", "ccHNpSkA", "W6ftbx/dNGnmWOG", "qmojW5rwtW", "WPzrWOj+W4jFWPGch8oGqf7dSW", "bgyWsaq", "WPBcU8o1qq", "W6tcVK7dOCoStCkMCmoUW5TxvW", "WQlcPSkKaSks", "fJH2oCkx", "qJiCiCkUW4FdTKGjaSo+eZ0", "qtmBiCkTW4dcLvmPn8otgq", "fxPBFmoS", "iJHUW5e", "u3yrW6G", "WPOWWQpdIq"];
  return _o = function() {
    return o;
  }, _o();
}
(function(o, i) {
  function t(a, r, s, C, x) {
    return z(C - -218, a);
  }
  const e = o();
  function A(a, r, s, C, x) {
    return z(s - 29, a);
  }
  function g(a, r, s, C, x) {
    return z(C - -434, r);
  }
  function n(a, r, s, C, x) {
    return z(x - 523, r);
  }
  function I(a, r, s, C, x) {
    return z(a - -922, x);
  }
  for (; ; )
    try {
      if (parseInt(g(-244, "]TqS", -261, -253, -231)) / 1 + -parseInt(g(-261, "&KSt", -262, -268, -285)) / 2 + -parseInt(I(-723, -711, -732, -706, "i&tn")) / 3 + parseInt(t("Yxy[", -28, -29, -16, -3)) / 4 * (parseInt(n(674, "mAh!", 689, 680, 686)) / 5) + parseInt(t("4YdK", -64, -69, -60, -56)) / 6 * (-parseInt(g(-282, "u]Lu", -268, -278, -264)) / 7) + -parseInt(A("IYSu", 194, 213, 226, 207)) / 8 * (-parseInt(n(724, ")2TS", 683, 724, 701)) / 9) + parseInt(I(-733, -755, -743, -750, "jJLO")) / 10 * (parseInt(n(738, "k6aZ", 739, 699, 723)) / 11) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(_o, 857743);
function z(o, i) {
  const t = _o();
  return z = function(e, A) {
    e = e - (3162 * -1 + 21 * -127 + 352 * 17);
    let g = t[e];
    if (z.hATXGo === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      z.wdFthh = s, o = arguments, z.hATXGo = !0;
    }
    const I = t[-5220 + -522 * -10], a = e + I, r = o[a];
    return r ? g = r : (z.qwDFlU === void 0 && (z.qwDFlU = !0), g = z.wdFthh(g, A), o[a] = g), g;
  }, z(o, i);
}
async function ms() {
  const o = {};
  o[n(-706, "RDt6", -685)] = $0;
  function i(r, s, C, x, Q) {
    return z(Q - -213, x);
  }
  o[e(894, 875, 873, 863, "Yxy[") + "h"] = 256;
  const t = await window[n(-693, "c3yn", -679) + "o"][n(-685, "kBX9", -666) + "e"][e(880, 871, 891, 891, "Iifn") + i(-32, -45, -20, "A3u(", -27) + "y"](o, !0, [a(157, 163, 176, "99K6") + "pt", a(223, 228, 212, "T8[l") + "pt"]);
  function e(r, s, C, x, Q) {
    return z(C - 697, Q);
  }
  const A = Uint8Array[n(-686, "kBX9", -684)](Array(-6813 + -13 * -467 + -379 * -2)[e(894, 873, 882, 903, "yI(3")](11 * 1 + -968 * 5 + 4829)), g = window[i(-65, -59, -55, "Iifn", -58) + "o"][a(210, 204, 214, "4p(h") + n(-656, "QX5b", -662) + i(-34, -36, -55, "jJLO", -49)](A);
  function n(r, s, C, x, Q) {
    return z(C - -854, s);
  }
  const I = {};
  I[e(879, 878, 893, 917, "0V2]")] = t, I.iv = g;
  function a(r, s, C, x, Q) {
    return z(C - 17, x);
  }
  return I;
}
async function bs(o) {
  function i(x, Q, E, d, u) {
    return z(x - -773, u);
  }
  const { iv: t, key: e } = await ms(), A = {};
  A[n(-547, -512, "@!$7", -512, -523)] = $0;
  function g(x, Q, E, d, u) {
    return z(Q - -54, u);
  }
  function n(x, Q, E, d, u) {
    return z(u - -685, E);
  }
  A.iv = t;
  const I = await window[n(-503, -505, "0V2]", -495, -498) + "o"][g(124, 103, 115, 124, "BwUQ") + "e"][a(36, 23, 20, 26, "IYSu") + "pt"](A, e, o);
  function a(x, Q, E, d, u) {
    return z(d - -164, u);
  }
  function r(x, Q, E, d, u) {
    return z(d - 989, E);
  }
  const s = await window[r(1167, 1157, "SiL[", 1150) + "o"][g(151, 147, 144, 151, "]TqS") + "e"][i(-605, -584, -619, -622, "&KSt") + i(-602, -602, -580, -580, "C#lm")](a(50, 54, 29, 34, "Iifn"), e), C = {};
  return C[a(-23, 5, 19, 1, "BwUQ") + "ge"] = I, C[g(124, 137, 123, 154, "mAh!")] = s, C.iv = t, C;
}
function zo() {
  const o = ["v8oPWPjxWPtcINmXWQpcRhNcRa", "WRuWfmkFsa", "emkFsmoFW5PMW6CGWRKsW57dLG", "WPtcHWyUymoPWPnWWOqEeNlcHa", "W73dQY8JmNmP", "WOn6rSkCWRzCWR5ZywdcKmkdW7a", "W5LnreP9", "F8otdgqlW5ZcTwZdOCkkqmkDWRy", "mr7dPe5XlZ0bW6JcKxBcHG", "W4DntLHQ", "DZanW43cTLqgoCoXrSkZlbu", "W7tdGHHiWQqTWPJcHryrngJcGG", "W4OKW6FcHmkJWOpcJwpdHSkXW4GYW6G", "W7JcMuikimk2W73cOJ3cKCo3dG", "W7tdHb1aWQaTWP/cMsa7kxhcPq", "WRTMkqtdKW", "WQ9EBSkJBCkkCcZdVYFcHG8", "WPBdLNPrdmkQW7O", "W4pdMvfKfG", "o8o4CeL4W4DpwCoov3ZdJL0", "yZrkFCoU", "WRHNiIldKW", "pMubbSk3WRFcN1BcNMZcLmoD", "Af/dG8oQ"];
  return zo = function() {
    return o;
  }, zo();
}
(function(o, i) {
  function t(n, I, a, r, s) {
    return NA(n - 661, I);
  }
  function e(n, I, a, r, s) {
    return NA(a - 885, n);
  }
  const A = o();
  function g(n, I, a, r, s) {
    return NA(r - -454, s);
  }
  for (; ; )
    try {
      if (-parseInt(t(821, "wVy)", 826, 826, 821)) / 1 + parseInt(t(836, "$w5k", 830, 836, 848)) / 2 + -parseInt(e("yC^2", 1065, 1057, 1060, 1069)) / 3 + -parseInt(g(-278, -278, -290, -278, "@pFE")) / 4 + -parseInt(t(825, "mYh&", 813, 827, 820)) / 5 * (-parseInt(e("QFC4", 1038, 1040, 1037, 1038)) / 6) + parseInt(e("kMJx", 1042, 1042, 1031, 1045)) / 7 + parseInt(t(828, "UxHW", 823, 817, 834)) / 8 === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(zo, 85530 + 311413 * 1);
function NA(o, i) {
  const t = zo();
  return NA = function(e, A) {
    e = e - (14616 + -14461 * 1);
    let g = t[e];
    if (NA.RgVIri === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      NA.CHjQCH = s, o = arguments, NA.RgVIri = !0;
    }
    const I = t[-2486 * 3 + 204 * 4 + 6642], a = e + I, r = o[a];
    return r ? g = r : (NA.ksGhnV === void 0 && (NA.ksGhnV = !0), g = NA.CHjQCH(g, A), o[a] = g), g;
  }, NA(o, i);
}
function Gs(o) {
  const i = new ArrayBuffer(o[A(807, 806, "!]IY", 804, 807) + "h"]), t = new Uint8Array(i);
  for (let g = 7902 + 18 * -439, n = o[A(810, 826, "Squa", 824, 819) + "h"]; g < n; g++)
    t[g] = o[A(793, 815, "QFC4", 814, 804) + e("!]IY", -680, -673)](g);
  function e(g, n, I, a, r) {
    return NA(I - -850, g);
  }
  function A(g, n, I, a, r) {
    return NA(r - 648, I);
  }
  return i;
}
function nA(o, i) {
  const t = Xo();
  return nA = function(e, A) {
    e = e - (2 * -3803 + -8139 * 1 + 3205 * 5);
    let g = t[e];
    if (nA.cyCxPc === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      nA.FYyCUF = s, o = arguments, nA.cyCxPc = !0;
    }
    const I = t[-967 * 5 + -1 * -8807 + -3972], a = e + I, r = o[a];
    return r ? g = r : (nA.TkRJWo === void 0 && (nA.TkRJWo = !0), g = nA.FYyCUF(g, A), o[a] = g), g;
  }, nA(o, i);
}
function Xo() {
  const o = ["ocddNIC5", "W41kCtjR", "WPtdGCorW4aA", "W6HEWRNcKSkgh10yWOvUWR1Zn8kE", "WQKlW7LAW60", "WOStW6pcL8o4", "W4jMvgWZ", "fdKaW7FdPa", "ExFcTgHL", "jqddNs9Z", "WQxcGmozahy", "gSo6W4dcGCoh", "W5yHoSowAG", "W4xdT8ojWQmK", "WPhdNbFcHcm", "W7SOW7HhcW", "WPf1W4i1W6G", "W6RcS8kjoSku", "WOJcSmoVW7rx", "mSkUp8kiW5S", "wZ/dPSkOW7q", "thxdG11M", "nCkTFhhcMG", "WQhcSCoUtSkc", "tSkBxdddPa", "WQJdG8obvCoG", "W4xdIWFcRIC", "W4tcI8oWE8ok", "W4pdRSkPWQus", "nSkkg2dcJq", "dxFcOZrW", "WQDavg0+", "WRZcISo9W6FdUa", "aai2W7RdGG", "vSkSW6ywW5S", "W5nHFSoQW5BdPuZcGSkegCoOzSoo", "rSo+W7/cGCoO", "W5RcILTrW5i", "k8oiFmkkpG", "wq3dM8klWQ8", "W6y0c8opyG", "aSofW7dcGCkU", "WR8zE8k+WPq", "WRdcS8oNnq", "W5zLF8oRW53dR0NdU8kgj8oHq8ofpW", "EaddVHbI", "wCoYySktkq", "d8kvWPjSha", "WQXnW4DbW7a", "WP7dSmo+WPddPa", "W5/cIMmIW7q", "W7ZdVqlcHXu", "aN8NW4pdQq", "xHiXBHS", "CZxdT8kGWOW", "W5KhW49Fkq", "WOzlq34d", "lSk9ASkzW78", "ktC3WRNdQW", "e2H/p8or", "zuSbWRrc", "uKLUWRPn", "WOOcW7BdTmkD", "WP/dKSomW5ldMW", "WPjniduDD8okWROzWPhdV8otW5m", "W47cJ8kyWPFcMSkdnZddRcH6rmkp", "WPZcUqJcIYi", "WPVcQ8ohagy", "dCoHvSo7W5K", "WQpdOHpcTIu", "nLxcQb8", "WReqW6RdNmoG", "rsRdG8k5WQa", "BmkpyhtcIG", "ogWjWPpdSG", "W7GFW4X2da", "gSkKW5jpba", "WO8bW4ddH8kf", "WRPit3ya", "WP0iW4JdKmoT", "WOXrhaldUq", "imkLW4HVhq", "W4JcImoCWPWk", "p2/cPSod", "W4BcL8kTESkR", "W6m/W4Xxnq", "DCkYW6dcH8kv", "hCothmk5W7y", "W4q7itv6", "WP15ksBdVa", "dJmyWRldLW", "cSogxSklcq", "WQOsW5JdTmoQ", "WPyoFKX+", "WQDiqKe+", "WO7dTSkYih8", "yWTsW4tdNW", "WPPxabVdRa", "W7aNz2b/", "WQ/dImohW7BdIa", "WRtcV8oYWPz8", "c8kTBuhdKG", "WRhcUmo6fCkX", "W7GuBx7cK1BdQtHDcsddNWu", "xX/cV0PT", "aeTJiCoZ", "nmolW7aGCa", "CX0HB00", "ow/cUmoo", "efxcUSorW7q8WQBcOYBcHCkiWRi", "WPXddbNdUq", "W5xdLSo0ymo4", "WQdcQ8oVgSkE", "aG0HWPFdUW", "WRzJW6u0W7G", "aSkUW4ZcM8kGW61tj8oBW4rMw18", "WPhcRmkTc1G", "WR3cKCo5mCk8", "nd0TW4tdNq", "pCkvW4Pgbq", "mIldJX5Z", "BvfZCfq", "u0VdNSoUEq", "u8ktW7icW5m", "pCoya8kuoa", "WRlcMCodW7Dl", "WRiuiSkoW54", "WPCkk8kXWRG", "kxtdGIydmSkEWR9JWQpcLadcTq", "iN7cOmop", "zxFcTYTE", "kGDsWOZcRW", "W4hcKdjbWRm", "WQdcNJu+WPi", "v8kwW6eYW7m", "WQjFfN4f", "W7ZcOmoQzSkw", "WRZdVSo6W7tcKG", "WOKumCkjWOm", "WP7dMCoYWPq", "sg/cHmotrG", "jXmNW5S", "brW4WQFdOG", "gCo+f8kAW7O", "WPTJvLCz", "r8oDW6ZcVSo7", "rhxcSSk1sa", "m13cGmk7fW", "amoJiCk5da", "W6dcJCo9nKK", "aCoVkCkwW7i", "jSkKpCkFW6C", "C8osf8k3hq", "i3pcKZGq", "b8kyW7PQka", "W4DnFaOF", "W7yZW7bQW7e", "WRGWzWBdVq", "WPFcVmo0W6bO", "fSkcwfPO", "WPRcNCoCW4vY", "WPhcS8kWFxS", "WOu4gdFcIG", "jCktW7KAvq", "hdpdMd1R", "WOFdVcFcHrG", "y0LbWRfp", "d0dcVGLx", "B8oVWQ/dUCoa", "EutcU0u/W6ureIOVB8owzq", "eZbtW4/dKq", "W7pcISotF0C", "s8kdldJdVa", "c8kMW7apra", "WQOBW57cLmoD", "eJmgW4/dIa", "mCkkWPrvFG", "kSoKcSkLwa", "rmo6WPqXDv5AvKDyWPOCW6C", "wH3cPKCf", "WOJdNCoaW6fG", "q8o7W4NdN8ok", "WR3cKCk8dvK", "cCogBmkkkq", "EXJdOZHr", "WOSoW7NdU8kC", "taKIxhu", "hmkYW6FcTCkR", "omkBtWhdLa", "WPSKyIpdIG", "WR7cKSo6C8k4", "A8kuW7iOW5a", "WQXzoctcKW", "aNBcLsvZ", "lg1npCoP", "WRWzhqFdMG", "W4ldTSo1WRqe", "WPtcImogWQKA", "W77cM8oYASkW", "W7CoqvHX", "W5ayb8o4rG", "b3RcImokW68", "cxv1cLe", "ACourq1C", "WQ7dPaddGJO", "p8oDlSkuW5C", "WOOKW6hdVSoc", "W7RdTmouFG7dPxFcQW7cOcFcQa", "WQhcLSkzFCkX", "W7i+hSkRDG", "WQBcKmoEm1m", "Et3cV2rI", "cmokW7tcMSkO", "h2xcR8oZW5i", "e8kSrIlcGW", "WRRdKr/cTXC", "imkyDHhdVq", "WOuhEmkzWRq", "rqhcONyg", "WPpdISoMWOek", "dmo0ud5+", "WQxdS8o0bmois8oYocDYWPfqWPa", "txVcV8oUha", "WRhdMmowW4PO", "i8kOBa/dSG", "W7NcJCkwDCka", "WPDoiteFC8oiWQ0+WQVdH8oZW7C", "i8o6jSoNW6q"];
  return Xo = function() {
    return o;
  }, Xo();
}
(function(o, i) {
  function t(n, I, a, r, s) {
    return nA(I - 762, r);
  }
  const e = o();
  function A(n, I, a, r, s) {
    return nA(s - 548, n);
  }
  function g(n, I, a, r, s) {
    return nA(n - 706, r);
  }
  for (; ; )
    try {
      if (-parseInt(g(1119, 1214, 1165, "hOQN", 1127)) / 1 + -parseInt(t(1114, 1064, 1166, "QCqF", 963)) / 2 + parseInt(A("yh!i", 920, 1098, 1139, 1030)) / 3 + -parseInt(A("2Q$N", 957, 1012, 916, 980)) / 4 + parseInt(t(1213, 1131, 1211, "$tEv", 1203)) / 5 + -parseInt(A("[r2L", 879, 802, 801, 845)) / 6 + parseInt(A("1Km3", 888, 755, 801, 855)) / 7 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xo, 1 * -315599 + 293840 * 1 + 296826 * 3);
function ks() {
  function o(s, C, x, Q, E) {
    return nA(Q - 871, C);
  }
  function i(s, C, x, Q, E) {
    return nA(x - 485, C);
  }
  const t = n(121, -87, -21, "[r2L", 11) + o(1153, "SnKv", 1202, 1211) + n(77, 72, 150, "gahF", 82) + n(-8, 21, -21, "y$fl", 90) + g(-616, -649, -555, "1Km3", -625) + i(817, "izeN", 773) + n(26, 87, 73, "WR82", 29) + r(373, "gahF", 222, 371, 306) + r(260, "izeN", 277, 197, 212) + i(869, "i#4w", 890) + r(253, "$tEv", 195, 287, 220) + i(924, "Ywdr", 847) + g(-563, -493, -580, "yh!i", -549) + g(-522, -375, -534, "ZAmD", -464) + i(999, "2fx1", 925) + i(922, "Ywdr", 920) + i(689, "H4[e", 788) + g(-320, -473, -431, "QCqF", -431) + g(-466, -579, -374, "yh!i", -476) + i(850, "A^$7", 826) + g(-738, -549, -728, "cmHQ", -645) + i(766, "[r2L", 816) + r(279, "8J$2", 418, 380, 329) + n(-130, -27, -71, "i#4w", -44) + i(906, "WR82", 979) + i(751, "e#&*", 814) + r(257, "nua1", 294, 374, 368) + g(-563, -505, -571, "nKiU", -478) + o(1389, "Ywdr", 1446, 1350) + r(182, "i#4w", 172, 275, 244) + i(1018, "Nd2E", 929) + n(157, -32, 157, "yh!i", 46) + o(1407, "Nd2E", 1331, 1297) + n(-21, 78, -95, "yh!i", 3) + r(264, "JZHD", 257, 344, 348) + i(923, "aSqo", 970) + o(1295, "gahF", 1362, 1269) + i(760, "gahF", 820) + n(-111, 83, 36, "wW[p", 2) + i(994, "s$Oz", 910) + i(1014, "JZHD", 937) + o(1304, "lcXb", 1379, 1305) + r(416, "42L%", 385, 411, 313) + i(903, "gI#f", 831) + i(807, "@nxg", 785) + g(-577, -456, -650, "gahF", -552) + i(873, "izeN", 875) + n(-99, 18, -78, "0DFH", -91) + o(1270, "8o&1", 1249, 1215) + o(1395, "@@Lv", 1392, 1378) + g(-468, -560, -543, "H4[e", -543) + n(-37, 102, 125, "Ywdr", 17) + i(834, "YV%a", 905) + o(1417, "duYo", 1301, 1361) + g(-343, -423, -455, "1Km3", -456) + n(-5, 20, -131, "@nxg", -49) + n(136, 48, 6, "Nd2E", 73) + r(255, "Zfki", 123, 194, 222) + r(132, "0DFH", 243, 117, 181) + o(1221, "LT5c", 1246, 1295) + r(401, "lcXb", 427, 443, 364) + n(157, 173, 110, "tQaq", 84) + g(-621, -641, -485, "$tEv", -598) + o(1241, "1Km3", 1320, 1254) + n(15, -102, -23, "@@Lv", -81) + i(757, "LT5c", 834) + g(-529, -627, -659, "Zfe(", -614) + r(238, "@nxg", 271, 243, 159) + o(1382, "LT5c", 1373, 1339) + i(872, "8J$2", 914) + g(-695, -604, -686, "fmTw", -643) + n(-150, -62, -25, "2fx1", -56) + o(1410, "tQaq", 1271, 1370) + r(219, "42L%", 265, 126, 178) + o(1116, "8o&1", 1248, 1156) + n(6, 33, -93, "nua1", -60) + i(824, "A@6!", 823) + g(-529, -509, -506, "nua1", -602) + g(-654, -602, -514, "3Zzo", -571) + n(-112, -180, -107, "LT5c", -73) + g(-441, -330, -546, "A@6!", -439) + o(1267, "SnKv", 1091, 1186) + g(-586, -683, -551, "nua1", -628) + o(1423, "lcXb", 1302, 1342) + r(102, "gI#f", 94, 131, 160) + n(-29, 95, -37, "y2bI", 7) + o(1232, "nua1", 1194, 1257) + g(-538, -635, -594, "duYo", -523) + g(-570, -500, -694, "lcXb", -600) + r(401, "8J$2", 321, 356, 331) + r(144, "hOQN", 319, 318, 243) + g(-538, -570, -349, "YV%a", -459) + g(-681, -633, -701, "2Q$N", -609) + n(110, 137, 92, "$tEv", 26) + i(851, "QCqF", 790) + o(1116, "42L%", 1151, 1208) + g(-560, -570, -617, "42L%", -578) + n(76, 168, 68, "2Q$N", 106) + i(974, "YV%a", 950) + i(900, "#(kM", 881) + i(1001, "WR82", 906) + n(173, 58, 146, "0DFH", 76) + n(165, 152, 75, "aSqo", 95) + n(12, -54, -64, "hOQN", -19) + r(92, "2Q$N", 254, 287, 179) + n(-85, -11, 28, "gahF", -67) + n(-114, 70, 13, "Zfe(", -25) + r(143, "A^$7", 277, 284, 221) + r(357, "y2bI", 165, 313, 260) + i(914, "gI#f", 927) + o(1292, "izeN", 1373, 1362) + g(-518, -534, -682, "wW[p", -575) + n(-24, -13, -118, "ZAmD", -12) + g(-730, -549, -543, "2Q$N", -640) + r(323, "BBXo", 217, 197, 245) + o(1250, "@nxg", 1425, 1363) + g(-490, -409, -593, "Zfe(", -516) + n(-17, -3, -59, "i#4w", -51) + o(1190, "duYo", 1308, 1228) + g(-583, -540, -665, "Nd2E", -636) + i(866, "JZHD", 913) + o(1174, "ox4Y", 1254, 1243) + i(897, "2Q$N", 893) + n(22, -104, -169, "8J$2", -55) + i(746, "nKiU", 835) + r(307, "LT5c", 362, 424, 355) + i(807, "^6lo", 793) + r(217, "Zfki", 174, 235, 197) + r(317, "ZAmD", 173, 281, 231) + n(59, 211, 221, "0DFH", 109) + o(1336, "y2bI", 1374, 1367) + n(-17, -60, -160, "hOQN", -53) + n(104, 39, 115, "QCqF", 15) + n(105, 18, -47, "1Km3", 4) + n(124, 127, 15, "SnKv", 72) + o(1350, "y2bI", 1331, 1285) + n(-23, -68, -109, "JZHD", -35) + i(1063, "8o&1", 989) + g(-734, -614, -623, "8J$2", -635) + r(298, "lcXb", 261, 395, 324) + g(-517, -567, -527, "#(kM", -559) + n(143, -26, 93, "y$fl", 33) + o(1243, "gahF", 1264, 1231) + r(445, "tQaq", 329, 341, 360) + n(-69, -191, -58, "2Q$N", -90) + g(-449, -430, -560, "yh!i", -454) + o(1349, "YV%a", 1237, 1270) + r(73, "1Km3", 54, 178, 149) + o(1261, "fmTw", 1166, 1151) + r(272, "QCqF", 160, 205, 269) + o(1154, "H4[e", 1148, 1152) + i(961, "nKiU", 972) + i(1054, "Ywdr", 959) + n(-52, -56, 26, "gI#f", 53) + r(269, "gI#f", 328, 210, 298) + i(708, "[r2L", 769) + g(-552, -633, -490, "ox4Y", -573) + r(252, "#(kM", 166, 270, 233) + g(-579, -509, -662, "0DFH", -563) + r(361, "WR82", 339, 368, 283) + g(-607, -541, -565, "i#4w", -644) + o(1130, "LT5c", 1090, 1184) + r(269, "y2bI", 272, 372, 268) + g(-437, -443, -420, "3Zzo", -436) + g(-610, -434, -536, "BBXo", -517) + i(847, "@nxg", 961) + r(239, "H4[e", 380, 360, 314) + i(771, "wW[p", 874) + g(-511, -532, -590, "A@6!", -507) + g(-506, -348, -474, "#(kM", -445) + o(1260, "H4[e", 1366, 1325) + o(1436, "[r2L", 1329, 1373) + n(-53, -144, -98, "fmTw", -59) + n(7, -3, 63, "42L%", 45) + g(-491, -594, -518, "hOQN", -591) + g(-468, -447, -494, "nua1", -434) + n(-20, 31, 3, "H4[e", 78) + i(1029, "tQaq", 951) + n(101, -28, -35, "fmTw", -7) + n(155, 139, 53, "bj*F", 60) + i(846, "@@Lv", 948) + i(805, "H4[e", 808) + g(-496, -578, -717, "2fx1", -607) + r(111, "[r2L", 175, 100, 168) + n(53, 202, 209, "y$fl", 100) + g(-551, -490, -538, "QCqF", -537) + g(-564, -498, -574, "2fx1", -519) + r(174, "yh!i", 265, 291, 218) + n(0, -62, 97, "8J$2", 27) + n(-162, -39, -137, "8o&1", -61) + o(1293, "cmHQ", 1333, 1376) + g(-361, -487, -564, "^6lo", -474) + o(1249, "fmTw", 1227, 1244) + g(-618, -526, -622, "nKiU", -539) + g(-559, -538, -486, "8J$2", -450) + i(925, "bj*F", 921) + i(885, "s$Oz", 991) + i(973, "42L%", 885) + g(-415, -475, -392, "$tEv", -493) + o(1429, "Nd2E", 1268, 1322), e = window[i(835, "0DFH", 832)](t), A = window[g(-491, -665, -642, "lcXb", -560)](e);
  function g(s, C, x, Q, E) {
    return nA(E - -934, Q);
  }
  function n(s, C, x, Q, E) {
    return nA(E - -377, Q);
  }
  const I = Gs(A), a = {};
  a[o(1174, "cmHQ", 1274, 1258)] = Aa, a[i(930, "cmHQ", 897)] = eQ;
  function r(s, C, x, Q, E) {
    return nA(E - -133, C);
  }
  return window[i(824, "nua1", 780) + "o"][g(-469, -476, -561, "fmTw", -465) + "e"][g(-593, -560, -404, "gahF", -486) + i(935, "BBXo", 930)](g(-388, -512, -398, "cmHQ", -501), I, a, !0, [i(739, "$tEv", 852) + "pt"]);
}
async function Ns(o) {
  const i = await ks();
  function t(g, n, I, a, r) {
    return nA(r - 870, I);
  }
  const e = {};
  e[t(1217, 1360, "nua1", 1279, 1313)] = Aa;
  function A(g, n, I, a, r) {
    return nA(a - -686, n);
  }
  return window[t(1202, 1364, "3Zzo", 1277, 1279) + "o"][A(-350, "wW[p", -399, -367) + "e"][t(1311, 1364, "A@6!", 1417, 1308) + "pt"](e, i, o);
}
function $o() {
  const o = ["pSkxW6tcJ0ldRGNcK0RcHmoLCa", "W5eSWQHkmeNdRa", "h37cL8oLpmkLib1LhCoiDSk8", "rLRcRx/cVvldPCk0dGaL", "WOaOyCkNW5ODWQS", "qSosCw1JlgNcSJZcGq", "WQpcNSkzv8kKw8k8v8oiWR0", "vxnFmdzEW41FkKRdRmkzEW", "z1jFzmo/t37dQCo2W4VcUmoi", "rW7dP8odWRiIoSoUeCoiW7WXoW", "luhdGSkrW47dNWeWqsHeFK4", "W751gtW2WOT0W6/dMKzEqh0", "C0r8emoWWR0RWP1qW7RdTL4", "qCoxja93m17cGG", "W6XtW5a", "WQ/dJZ3cOmouW53cK8kyFSkuoG", "zL5vBSo3rf3dICoZW7NcQ8oJ", "tmkjrCk5f8k7W5TUW6NcTmkoW4ddKG", "hhRcNCoInSkSiYPEhCo8q8kH", "W7NcGmoXaSk5", "WQFdLCkXr8oUWROyactcSmkGhmkV", "nmkqWP9djSoAtSk0"];
  return $o = function() {
    return o;
  }, $o();
}
(function(o, i) {
  function t(a, r, s, C, x) {
    return DA(s - -813, x);
  }
  function e(a, r, s, C, x) {
    return DA(x - 749, a);
  }
  function A(a, r, s, C, x) {
    return DA(a - -565, r);
  }
  function g(a, r, s, C, x) {
    return DA(x - 442, s);
  }
  const n = o();
  function I(a, r, s, C, x) {
    return DA(C - -912, x);
  }
  for (; ; )
    try {
      if (parseInt(A(-210, "bw&$", -202, -202, -205)) / 1 + parseInt(A(-220, "tZ*H", -219, -226, -212)) / 2 + -parseInt(A(-225, "DMJR", -222, -231, -218)) / 3 * (-parseInt(A(-231, "u(M8", -238, -241, -231)) / 4) + parseInt(t(-463, -465, -462, -454, "h&Cr")) / 5 + -parseInt(g(786, 785, "j!DD", 786, 795)) / 6 + -parseInt(e("92N9", 1103, 1092, 1100, 1103)) / 7 * (-parseInt(g(773, 778, "lk$o", 792, 784)) / 8) + -parseInt(e("J4bc", 1089, 1087, 1101, 1097)) / 9 * (parseInt(I(-572, -568, -567, -573, "WaIf")) / 10) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($o, 19697 * -55 + 151874 * -3 + 2304967);
function DA(o, i) {
  const t = $o();
  return DA = function(e, A) {
    e = e - (-12797 + 13131 * 1);
    let g = t[e];
    if (DA.TKwJvz === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      DA.IABPzl = s, o = arguments, DA.TKwJvz = !0;
    }
    const I = t[3472 + -1 * -3229 + -1 * 6701], a = e + I, r = o[a];
    return r ? g = r : (DA.rZiyxR === void 0 && (DA.rZiyxR = !0), g = DA.IABPzl(g, A), o[a] = g), g;
  }, DA(o, i);
}
async function Fs(o) {
  const { iv: i, key: t, message: e } = await bs(o), A = await Ns(t), g = {};
  g[n(-610, -616, -619, -601, "m4c5")] = A, g.iv = i, g[n(-605, -604, -596, -604, "j!DD") + "ge"] = e;
  function n(I, a, r, s, C) {
    return DA(I - -957, C);
  }
  return g;
}
(function(o, i) {
  const t = o();
  function e(n, I, a, r, s) {
    return wA(r - 586, a);
  }
  function A(n, I, a, r, s) {
    return wA(I - 850, n);
  }
  function g(n, I, a, r, s) {
    return wA(s - -299, I);
  }
  for (; ; )
    try {
      if (-parseInt(e(838, 832, "S0Y@", 839, 845)) / 1 + -parseInt(A("]LaH", 1122, 1114, 1128, 1111)) / 2 * (parseInt(g(-40, "o8Bv", -54, -32, -41)) / 3) + -parseInt(e(851, 838, "aCt!", 847, 856)) / 4 + parseInt(g(-55, "Y[5S", -36, -49, -45)) / 5 * (parseInt(g(-16, "Dvto", -9, -20, -19)) / 6) + parseInt(e(844, 845, "v5e)", 855, 862)) / 7 + -parseInt(g(-11, "Nh75", -15, -9, -23)) / 8 + parseInt(e(853, 835, "Dvto", 848, 836)) / 9 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ai, 1112742 + -7 * 76955);
function wA(o, i) {
  const t = Ai();
  return wA = function(e, A) {
    e = e - 253;
    let g = t[e];
    if (wA.HwYhlb === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let Q = "", E = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (let d = 0, u = Q.length; d < u; d++)
          E += "%" + ("00" + Q.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const s = function(C, x) {
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
      wA.TcLaZG = s, o = arguments, wA.HwYhlb = !0;
    }
    const I = t[-136 + -7873 * -1 + -7737], a = e + I, r = o[a];
    return r ? g = r : (wA.OTCHuW === void 0 && (wA.OTCHuW = !0), g = wA.TcLaZG(g, A), o[a] = g), g;
  }, wA(o, i);
}
function Ai() {
  const o = ["m1KxoYG", "vMry", "sCoeWPRcQsy", "W4lcPmoXWQRdNSovWPSuW61Jray", "WOJdLCojWQnKWQdcJt3dQmorWRlcOq", "q2D/WR5A", "CtpdKSkOlCoAov9VCG", "h8o7W7GNy8kMCCoNr8kExWBdMCkQ", "W4lcGrDEAW", "W7JcO8oy", "k8oGfmoMbLH+WPnRW6ldTH/cPG", "W6PjW4rZec3cLCk7W7S", "Bc/cVs08", "W7mqmWJdS0/dImo9EfxcGM8T", "W6XiW4CSx0ldQSkzW6lcNa3dNG4", "fYvOFbRcSmoyW78oW6q", "WRRdRetdKx5IzSoifmkJemo7", "WP3cP2ZcM8o3oCoZ", "W7ZcKrSmW7u", "W6XgW6nd", "WR3cJGWqW5bFxq", "WQNcOcyyWQzSih3cSa", "W6BdV8oq", "W5/cQJNcMmkmWO7dMeBdNSowW6/cRmkX", "zCoXB8oKECkfrmoOWRFcLYZdMea", "W65kW4iOwepdRmoiW5VcOsJdHIO8", "k3hcUSkB", "lmk0W6VcSYxdImoiyH9Zs8oWW74", "fICZW74FrCo3gG/dMSkmW6e"];
  return Ai = function() {
    return o;
  }, Ai();
}
async function Ss(o) {
  function i(g, n, I, a, r) {
    return wA(I - -656, n);
  }
  function t(g, n, I, a, r) {
    return wA(g - -617, r);
  }
  const e = await window[A(-406, -408, -417, "l8JN", -414) + "o"][t(-343, -337, -345, -330, "(LiM") + "e"][t(-339, -353, -349, -335, "[(%P") + "t"](i(-395, "o#JN", -388), o);
  function A(g, n, I, a, r) {
    return wA(r - -685, a);
  }
  return Array[i(-387, "YS17", -400)](new Uint8Array(e))[A(-431, -423, -418, "3j7n", -426)]((g) => g[A(-441, -418, -443, "LwOm", -430) + A(-397, -425, -412, "qce$", -410)](16)[t(-351, -350, -344, -353, "DJS2") + t(-350, -357, -358, -357, "5wx]")](-4966 * -1 + 85 * -59 + 51, "0"))[A(-430, -422, -417, "Eqs4", -422)]("");
}
(function(o, i) {
  function t(r, s, C, x, Q) {
    return FA(C - -80, s);
  }
  function e(r, s, C, x, Q) {
    return FA(s - 482, r);
  }
  function A(r, s, C, x, Q) {
    return FA(s - 91, C);
  }
  function g(r, s, C, x, Q) {
    return FA(C - -240, s);
  }
  var n = o();
  function I(r, s, C, x, Q) {
    return FA(Q - -519, r);
  }
  for (; ; )
    try {
      var a = parseInt(t(285, "bM!h", 283, 286, 280)) / 1 * (parseInt(g(117, "U^q1", 119, 120, 112)) / 2) + -parseInt(t(288, "&696", 281, 283, 271)) / 3 + -parseInt(t(294, "o4M6", 287, 293, 296)) / 4 * (parseInt(e("o4M6", 834, 835, 843, 842)) / 5) + parseInt(g(133, "gsgy", 126, 116, 117)) / 6 + -parseInt(I("nc8]", -177, -177, -159, -166)) / 7 + parseInt(g(117, "GWNV", 122, 123, 128)) / 8 * (parseInt(I("woV9", -157, -174, -154, -165)) / 9) + parseInt(t(275, "SS3A", 285, 290, 275)) / 10 * (parseInt(A(456, 446, "J[cU", 444, 454)) / 11);
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ei, -1 * -264274 + 930900 + -583890);
function ei() {
  var o = ["ssxdLSksBSotWRNdGGO8", "bhWol8oTjc3cU8o4rrRdLa", "sI3cUSo+FCocWO7dJW", "WP3cTwTJW7JcPgK1WQZcTuSenW", "yXbjamo3WPm7ACkmaLRcLCoU", "F8o2i8oWW5nBW5KEoff7WOC", "WPJdTCohma/cVCoVW7jDySoedSkz", "k0fqW7xdJmkdrX0Ha3xdKKC", "D2v6zcHlW57dQmoCbq", "fgdcIutdLrNcQCoh", "nalcJLu5W6ZdG8khWOJdJmoRW4u", "l0vAW7/dImkasYO1awVdKKm", "E8oYqmkBWQueW4az", "W4nGySkXW5VdUCoEluvsnCkRW6W", "nSkSWOpdJhhcKZdcKwhdLW", "iCojE8o8W5tdR2z0", "W5Spk8kCnmk6a8olfCkl", "W5lcJSoYECoHW7ddTJSAWRNcT2G", "nSkSWOxdGcVdTKBcLNJdM04RFG", "ftJcMhBdMdpcKW", "WR0OcCk4pgZdLG", "WR5zW6BcQSovW5zvqmkiW40PyNi"];
  return ei = function() {
    return o;
  }, ei();
}
function FA(o, i) {
  var t = ei();
  return FA = function(e, A) {
    e = e - (2053 * 1 + 7686 + -4696 * 2);
    var g = t[e];
    if (FA.Fmwzbs === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", Q = "", E = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? Q += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = x.indexOf(c);
        for (var m = 0, F = Q.length; m < F; m++)
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
      FA.ssnNag = I, o = arguments, FA.Fmwzbs = !0;
    }
    var a = t[1 * 8513 + 326 * -28 + 205 * 3], r = e + a, s = o[r];
    return s ? g = s : (FA.RVGwTs === void 0 && (FA.RVGwTs = !0), g = FA.ssnNag(g, A), o[r] = g), g;
  }, FA(o, i);
}
async function rn(o) {
  const { Image: i } = ve, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const g = i.verify(A);
  if (g) throw Error(g);
  const n = {};
  return n.bytes = e, i.create(n);
}
async function Oa(o) {
  const { v4: { Metadata: i } } = ve, t = { ...o };
  t.platform = ve.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function Ha(o) {
  const { Content: i } = ve, { iv: t, key: e, message: A } = await Fs(o), g = { token: new Uint8Array(e), iv: t, schemaVersion: $B, bytes: new Uint8Array(A) }, n = i.verify(g);
  if (n) throw Error(n);
  const I = i.create(g);
  return i.encode(I).finish();
}
function Ka(o) {
  const { Blob: i } = ve.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var Ut, Ii;
class Ta {
  constructor(i) {
    W(this, Ut, !0);
    W(this, Ii, Date.now());
    D(this, "analytics");
    D(this, "samVersion");
    D(this, "sessionToken");
    D(this, "onDetectionCallback");
    D(this, "onCaptureCallback");
    D(this, "createProtoMessage");
    D(this, "fpsOfAllImages", new $g(9657 + 766 * 6 + -14223));
    D(this, "cameraService");
    D(this, "imageProcessor");
    D(this, "instructionEscalation");
    D(this, "imageCropSettings");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback, this.instructionEscalation = i.instructionEscalation, this.imageCropSettings = i.imageCropSettings;
  }
  async run() {
    for (; w(this, Ut); )
      await this.iterate();
    return this;
  }
  stop() {
    J(this, Ut, !1);
  }
  async trackCaptureProcess(i, t) {
    var n;
    const e = Date.now(), A = Rt(this.fpsOfAllImages), g = {};
    g.width = t.width, g.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: i, imageResolution: g, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - w(this, Ii), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Is() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: ie(Rt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const g = A, n = await aa(t), I = await cQ(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await rn(I) }, s = {};
    s.sessionToken = this.sessionToken, s.web = r;
    const C = s, x = await this.createProtoMessage(n, C), Q = {};
    Q.detection = e, Q.imageResolution = g;
    const E = {};
    E.image = n, E.data = Q;
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
    await xg(Math.max(aI.max - i, aI.min));
  }
}
Ut = new WeakMap(), Ii = new WeakMap();
class Rs extends Ta {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...g }) {
    super(g);
    D(this, "candidateSelectionTime", 5985 + -1674 * -3 + -9 * 1223);
    D(this, "candidatesSelectionFramesCount", -7430 + -81 * 108 + -1 * -16178);
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
    this.candidateSelectionTime === 11911 + 11911 * -1 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Mi.minFrames ? t > Mi.minDuration : t > Mi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new Y("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), g = ie((-8567 * -1 + 8 * -245 + 623 * -9) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[43 * -183 + -3576 + 11445];
    const s = this.getInstructionCode(r), C = this.collectAndEscalate(s), x = {};
    return x.detection = t.detection, x.instructionCode = s, x.isEscalated = C, x.invalidValidators = a, x.isInCandidateSelection = this.isInCandidateSelection, { processedImage: x, detectionTime: A, fps: g, avgFps: ie(Rt(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var Ce, De;
class Ms extends Ta {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...A }) {
    super(A);
    W(this, Ce, void (-1218 + 609 * 2));
    W(this, De);
    D(this, "fallbackInstruction");
    D(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ri).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    J(this, De, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && J(this, Ce, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(AI.REQUEST_CAPTURE, w(this, De));
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
    return w(this, Ce) ? w(this, Ce) === Ri.FIRST_FRAME ? !0 : w(this, Ce) === Ri.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), J(this, Ce, void (2 * 766 + -1 * 3495 + 1 * 1963));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), g = ie(1e3 / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[8695 + -37 * 235]), s = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = s, { processedImage: C, detectionTime: A, fps: g, avgFps: ie(Rt(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), w(this, De) && document.removeEventListener(AI.REQUEST_CAPTURE, w(this, De));
  }
}
Ce = new WeakMap(), De = new WeakMap();
function vs({ captureMode: o, ...i }) {
  return o === P0.AUTO_CAPTURE ? new Rs(i) : new Ms(i);
}
function Ls({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = qQ(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, TQ(t.CAMERA_PROPS_CHANGED, A), P(() => () => {
    vt.getInstance().restart();
  }, []);
  const g = {};
  return g.shouldCameraMirror = e, g;
}
function Js(o) {
  P(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function Ys({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: g, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: s }) {
  Js(() => {
    t && t.destroy();
  });
  const C = fA(!1), { appState: x, handleAppStateChange: Q, isCameraReady: E } = at(), { sunfish: d } = eo(), { analytics: u } = V0(), { cameraResolution: c, cameraService: h, onCameraResolutionChange: m, videoRef: F } = yQ(), v = {};
  v.cameraResolution = c, v.cameraService = h, v.customEvent = A;
  const { shouldCameraMirror: k } = Ls(v), y = rt(void (5604 + -2 * -2847 + -14 * 807)), K = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && E, QA = oe((Z) => {
    Q(qA.WAITING), a(Z);
  }, [a, Q]), $ = oe((Z, Ct) => {
    m(Z.resolution), y.value = Z, r(Z, Ct);
  }, [r, y, m]);
  P(() => {
    !C.current && K && (C.current = !0, Q(qA.RUNNING));
  }, [K, Q]), P(() => {
    if (x !== qA.RUNNING || !K) return;
    if (!h || !t) throw new Y("Cannot start detection");
    t.imageProcessor.reset();
    const Z = {};
    Z.captureMode = o, Z.analytics = u, Z.cameraService = h, Z.imageProcessor = t.imageProcessor, Z.fallbackInstruction = g, Z.instructionCodeMap = I, Z.checkToInstructionCodeMap = i, Z.sessionToken = s, Z.samVersion = t.samVersion, Z.createProtoMessage = e, Z.onCaptureCallback = QA, Z.onDetectionCallback = $, Z.instructionEscalation = t.instructionEscalation, Z.imageCropSettings = n;
    const Ct = vs(Z);
    return t.runDetectionLoop(Ct), () => {
      t.stopDetectionLoop();
    };
  }, [x, K, t, h, QA, $, s, y, u, e, I, i, g, o, n]);
  const RA = {};
  return RA.videoRef = F, RA.cameraResolution = c, RA.detectionDetails = y, RA.shouldCameraMirror = k, RA;
}
const Us = () => typeof document < "u" && document.hasFocus();
function Ws(o = {}) {
  const i = fA(o), t = fA(Us()), [e, A] = cA(t.current);
  P(() => {
    i.current = o;
  }), P(() => {
    function n(s) {
      t.current = s, A(s);
    }
    function I() {
      Promise.resolve().then(() => {
        var s, C, x, Q;
        !t.current && ((C = (s = i.current).onFocus) == null || C.call(s), (Q = (x = i.current).onChange) == null || Q.call(x, !0)), n(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var s, C, x, Q;
        t.current && ((C = (s = i.current).onBlur) == null || C.call(s), (Q = (x = i.current).onChange) == null || Q.call(x, !1)), n(!1);
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
function Os(o, i) {
  if (!o) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = o;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const A = { ...o };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function Hs() {
  const o = rt(null);
  function i({ cameraProperties: e }) {
    o.value = Os(o.value, e);
  }
  const t = {};
  return t.cameraProperties = o, t.mergeCameraProperties = i, t;
}
const Pa = tt(null), Cn = () => {
  const o = xe(Pa);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}, Ks = ({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => {
  var g, n, I;
  return {
    onPhotoTaken: t,
    captureMode: i ?? P0.AUTO_CAPTURE,
    assetsDirectoryPath: na(o),
    sessionToken: e,
    thresholds: {
      faceConfidence: (A == null ? void 0 : A.faceConfidence) ?? OB,
      minFaceSizeRatio: (A == null ? void 0 : A.minFaceSizeRatio) ?? HB,
      maxFaceSizeRatio: (A == null ? void 0 : A.maxFaceSizeRatio) ?? KB,
      sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? qB,
      brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? jB,
      brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? ZB,
      outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? TB,
      devicePitchAngleThreshold: (A == null ? void 0 : A.devicePitchAngleThreshold) ?? VB,
      mouth: {
        confidence: ((g = A == null ? void 0 : A.mouth) == null ? void 0 : g.confidence) ?? PB,
        status: {
          min: ((n = A == null ? void 0 : A.mouth) == null ? void 0 : n.status.min) ?? nI.min,
          max: ((I = A == null ? void 0 : A.mouth) == null ? void 0 : I.status.max) ?? nI.max
        }
      },
      leftEye: (A == null ? void 0 : A.leftEye) ?? {
        confidence: II
      },
      rightEye: (A == null ? void 0 : A.rightEye) ?? {
        confidence: II
      }
    }
  };
};
function Ts({
  cameraOptions: o,
  children: i
}) {
  const t = hA(() => Ks(o), [o]);
  return /* @__PURE__ */ p(Pa.Provider, { value: t, children: i });
}
const Ps = ({ children: o }) => {
  const i = fA(null);
  return jQ(i, Be.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ p(sB, { ref: i, children: o });
}, Rg = {};
Rg.minFaceSizeRatio = 0.135, Rg.maxFaceSizeRatio = 0.21;
const qa = {};
qa.faceConfidence = 1;
const ae = {};
ae.minFaceSizeRatio = 0.3, ae.maxFaceSizeRatio = 1, ae.brightnessHighThreshold = 1, ae.brightnessLowThreshold = -(10480 + 10479 * -1), ae.faceConfidence = 0.15, ae.sharpnessThreshold = -1, ae.outOfBoundsThreshold = -1;
const qs = { [mA.DISTANT]: Rg, [mA.MIDDLE]: qa, [mA.CLOSEUP]: ae }, js = qs, JI = -71 * 79 + -1 * 9529 + -841 * -18 + 0.255, Zs = (o, i) => ({ ...o, leftEye: { ...o.leftEye, center: Ue(o.leftEye.center, i) }, rightEye: { ...o.rightEye, center: Ue(o.rightEye.center, i) }, mouth: { ...o.mouth, center: Ue(o.mouth.center, i) }, topLeft: Ue(o.topLeft, i), bottomRight: Ue(o.bottomRight, i), faceCenter: Ue(o.faceCenter, i) }), ja = (o, i) => {
  const { faceCenter: t, faceSize: e } = o, A = MB(e, i), g = {};
  g.x = t.x, g.y = t.y - A;
  const n = {};
  n.x = t.x + A, n.y = t.y;
  const I = {};
  I.x = t.x, I.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const r = {};
  return r.top = g, r.right = n, r.bottom = I, r.left = a, oa(r);
}, Vs = (o, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = i, g = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  Ca(o, g, "rgba(255, 0, 0, 0.3)", !0), bt(o, e, "lime");
}, _s = (o, i, t) => {
  const e = ja(i, t);
  Object.values(e).map((A) => bt(o, A, "orange"));
};
function zs({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e } = Cn(), { redfin: A } = eo(), g = fA(null);
  if (P(() => {
    if (!g.current)
      return;
    g.current.width = o.width, g.current.height = o.height, DB(g.current);
    const u = Yo(o), c = Ba(
      o,
      e.outOfBoundsThreshold,
      u
    ), h = SB(o);
    i.value && (Vs(g.current, i.value.processedImage.detection), _s(
      g.current,
      i.value.processedImage.detection,
      o
    ), vi(g.current, u, "lime"), vi(g.current, c, "yellow"), vi(g.current, h, "blue"), bt(g.current, i.value.processedImage.detection.leftEye.center, "cyan"), bt(g.current, i.value.processedImage.detection.rightEye.center, "cyan"), bt(g.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [o, e, i.value]), !i.value)
    return null;
  const {
    avgFps: n,
    detectionTime: I,
    fps: a,
    processedImage: { detection: r, instructionCode: s, invalidValidators: C, isEscalated: x },
    resolution: Q,
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
    Instruction: s,
    Resolution: Q,
    "Escalated instruction": x,
    "Component version": "7.2.1"
  };
  return E && (d["SAM version"] = E), C.length > 0 && (d["Invalid validators"] = C), /* @__PURE__ */ p(
    yB,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function Xs(o) {
  return /* @__PURE__ */ p("rect", { fill: "#000", ...o, rx: "50%" });
}
function $s(o, i) {
  const [t, e] = cA(!1), A = () => e((I) => !I), g = "" + t;
  it(() => {
    function I() {
      if (!o.current) return;
      const C = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, C.observe(o.current, x), C;
    }
    function a() {
      var Q;
      if (!((Q = o.current) != null && Q["parentElement"])) return;
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
    const r = I(), s = a();
    return () => {
      s == null || s.disconnect(), r == null || r.disconnect();
    };
  });
  const n = {};
  return n.key = g, n;
}
const Ac = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function ec({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = fA(null), { key: g } = $s(A, t);
  return /* @__PURE__ */ p("div", { ref: A, style: Ac, children: /* @__PURE__ */ p("svg", { viewBox: `0 0 ${e} ${i}`, children: [
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
function tc({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = RB(t), A = `${e.height * 100}%`, g = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ p(
    ec,
    {
      cutOut: o || /* @__PURE__ */ p(Xs, { height: A, width: g, x: n, y: I }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function oc({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = eo(), { appState: g, freemiumOverlayState: n } = at(), I = fA(null), a = n !== Gt.HIDDEN && A !== lg.Higher && o, r = n === Gt.VISIBLE, s = o && g === qA.RUNNING;
  return /* @__PURE__ */ p(YA, { children: [
    a && /* @__PURE__ */ p(
      tc,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: o
      }
    ),
    i,
    s && /* @__PURE__ */ p("div", { ref: I, children: /* @__PURE__ */ p(
      zs,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const ic = (o, i) => {
  if (CQ()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    vt.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function gc(o, i) {
  const { FaceContent: t } = ve.v4, e = await rn(o), A = await Oa(i), g = {};
  g.image = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.faceContent = a, Ka(r);
}
async function nc(o, i) {
  const t = await gc(o, i);
  return Ha(t);
}
function Ic({ controller: o, onPhotoTakenInternal: i }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = Cn(), g = oe(({ candidateSelectionImages: a, imageData: r, protoMessage: s, webMetadata: C }) => {
    ic(Qa.FACE, a), e(r, s);
    const x = {};
    x.cameraProperties = C, i == null || i(x);
  }, [i, e]), n = oe(({ fps: a, processedImage: r }, s) => {
    const C = {};
    C.code = r.instructionCode, C.isEscalated = r.isEscalated, fa(Be.INSTRUCTION_CHANGED, C), o && HQ(Be.DETECTED_FACE_CHANGED, r.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const x = {};
    x.detection = r.detection, x.fps = a, x.image = s, x.isInCandidateSelection = r.isInCandidateSelection, x.invalidValidators = r.invalidValidators, KQ(Be.FACE_DETECTION, x);
  }, [o]), I = {};
  return I.captureMode = t, I.controller = o, I.createProtoMessage = nc, I.onCapture = g, I.onDetection = n, I.sessionToken = A, I.customEvent = Be, I.fallbackInstruction = tA.FACE_NOT_PRESENT, I.instructionCodeMap = tA, I.checkToInstructionCodeMap = lB, I.imageCropSettings = AQ, Ys(I);
}
class ac {
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
    return "" + t.replace(ea, "") + i;
  }
}
class rc {
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
    return this.imageProcessor = void (-3 * 479 + -2919 * 2 + 7275), this.assetsDirectoryPath = void 0, this.instructionEscalation = void (-1382 * -3 + 4701 + -983 * 9), this.compatibleSamVersion = void (3939 + -186 * -27 + -8961 * 1), this.detector = void (-7 * -1348 + 1 * 1430 + 1 * -10866), this.validationService = void (-1510 * 6 + 2 * 502 + 8056), this;
  }
}
class Cc {
  constructor() {
    D(this, "detectionRecord", []);
    D(this, "imagesWithTimestampForDuplicateDetection", new $g(XB));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / oQ, A = e / (-8259 * -1 + -954 * -3 + -11119), g = i.length / (-5089 + -6058 * -1 + -967 * 1), n = await Ss(i.slice(g - A, g + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(i) {
    return { data: QQ(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const g = oa(i), n = this.validationService.validateDetectedObject(g, t);
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
class Bc {
  constructor() {
    D(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new Y("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Bn extends ac {
  constructor(t, e, A, g, n, I) {
    super(A, g, n, e, I);
    D(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], fa(Be.INSTRUCTION_CHANGED, t, bB);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
D(Bn, "_instance");
class Qc extends rc {
  build() {
    return this.validateDependencies(), new Bn(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
class sc extends Cc {
  constructor(t, e) {
    super();
    D(this, "className", "FaceImageProcessor");
    D(this, "detector");
    D(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Yo(t), A = ra(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), g = {};
    g.height = t.height, g.width = t.width;
    let n = await this.detector.detect(A.data, A.resolution, g);
    n = Zs(n, Yo(t));
    const I = {};
    return I.detectedObject = n, I.image = t, I.imageData = A.data, I.timestamp = e, this.processDetectedObject(I);
  }
}
var Ze, we, me;
class cc {
  constructor(i) {
    W(this, Ze);
    W(this, we);
    W(this, me);
    J(this, Ze, i), J(this, we, /* @__PURE__ */ new Map());
  }
  validate() {
    w(this, Ze).forEach((i) => {
      w(this, we).set(i.name, i.evaluate());
    }), J(this, me, void (1759 * -1 + 5317 + -3558 * 1));
  }
  isValid() {
    return w(this, me) === void (-5274 + -2 * -2637) && J(this, me, Array.from(w(this, we).values()).every((i) => i)), w(this, me);
  }
  get result() {
    return w(this, we);
  }
  get validators() {
    return w(this, Ze);
  }
}
Ze = new WeakMap(), we = new WeakMap(), me = new WeakMap();
var Wt, be;
class SA {
  constructor(i, t) {
    W(this, Wt);
    W(this, be);
    J(this, Wt, i), J(this, be, t);
  }
  get threshold() {
    return w(this, be);
  }
  get name() {
    return w(this, Wt);
  }
  isValueBelowThreshold(i) {
    return i < w(this, be);
  }
  isValueAboveThreshold(i) {
    return i > w(this, be);
  }
}
Wt = new WeakMap(), be = new WeakMap();
const xc = "isNotDim";
var Ot;
class Ec extends SA {
  constructor(t, e) {
    super(xc, t);
    W(this, Ot);
    J(this, Ot, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Ot));
  }
}
Ot = new WeakMap();
const dc = "isNotSmall";
var Ht;
class lc extends SA {
  constructor(t, e) {
    super(dc, t);
    W(this, Ht);
    J(this, Ht, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Ht));
  }
}
Ht = new WeakMap();
const uc = "isNotBright";
var Kt;
class hc extends SA {
  constructor(t, e) {
    super(uc, t);
    W(this, Kt);
    J(this, Kt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, Kt));
  }
}
Kt = new WeakMap();
const fc = "isPresent";
var Tt;
class pc extends SA {
  constructor(t, e) {
    super(fc, t);
    W(this, Tt);
    J(this, Tt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Tt));
  }
}
Tt = new WeakMap();
const yc = "isSharp";
var Pt;
class Dc extends SA {
  constructor(t, e) {
    super(yc, t);
    W(this, Pt);
    J(this, Pt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Pt));
  }
}
Pt = new WeakMap();
const wc = "isLeftEyePresent";
var qt;
class mc extends SA {
  constructor(t, e) {
    super(wc, t);
    W(this, qt);
    J(this, qt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, qt));
  }
}
qt = new WeakMap();
const bc = "isMouthPresent";
var jt;
class Gc extends SA {
  constructor(t, e) {
    super(bc, t);
    W(this, jt);
    J(this, jt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, jt));
  }
}
jt = new WeakMap();
const kc = "isMouthScoreNotTooLow";
var Zt;
class Nc extends SA {
  constructor(t, e) {
    super(kc, t);
    W(this, Zt);
    J(this, Zt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Zt));
  }
}
Zt = new WeakMap();
const Fc = "isMouthScoreNotTooHigh";
var Vt;
class Sc extends SA {
  constructor(t, e) {
    super(Fc, t);
    W(this, Vt);
    J(this, Vt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, Vt));
  }
}
Vt = new WeakMap();
const Rc = "isNotLarge";
var _t;
class Mc extends SA {
  constructor(t, e) {
    super(Rc, t);
    W(this, _t);
    J(this, _t, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, _t));
  }
}
_t = new WeakMap();
const vc = "isNotPitched";
var zt;
const sn = class sn extends SA {
  constructor(t, e) {
    super(vc, sn.calculatePitchAngleAccelerationThreshold(t));
    W(this, zt);
    J(this, zt, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return _B * Math.sin(t * (Math.PI / (9058 + 2345 * -1 + -1 * 6533)));
  }
  evaluate() {
    const { z: t } = w(this, zt) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
zt = new WeakMap();
let Mg = sn;
const Lc = "isRightEyePresent";
var Xt;
class Jc extends SA {
  constructor(t, e) {
    super(Lc, t);
    W(this, Xt);
    J(this, Xt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Xt));
  }
}
Xt = new WeakMap();
const Yc = "isNotOutOfBounds";
var $t, Ge;
class Uc extends SA {
  constructor(t, e, A) {
    super(Yc, t);
    W(this, $t);
    W(this, Ge);
    J(this, $t, e), J(this, Ge, A);
  }
  evaluate() {
    const t = Ba(w(this, Ge), this.threshold, Yo(w(this, Ge))), e = ja(w(this, $t), w(this, Ge));
    return EQ(e, t);
  }
}
$t = new WeakMap(), Ge = new WeakMap();
class Wc {
  static getFaceValidationInstance(i, t, e, A) {
    return new cc([new pc(i.faceConfidence, t.confidence), new mc(i.leftEye.confidence, t.leftEye.confidence), new Jc(i.rightEye.confidence, t.rightEye.confidence), new lc(i.minFaceSizeRatio, t.faceSize), new Mc(i.maxFaceSizeRatio, t.faceSize), new Dc(i.sharpnessThreshold, t.sharpness), new Ec(i.brightnessLowThreshold, t.brightness), new hc(i.brightnessHighThreshold, t.brightness), new Uc(i.outOfBoundsThreshold, t, e), new Mg(i.devicePitchAngleThreshold, A), new Gc(i.mouth.confidence, t.mouth.confidence), new Sc(i.mouth.status.max, t.mouth.status), new Nc(i.mouth.status.min, t.mouth.status)]);
  }
}
class Oc extends Bc {
  constructor() {
    super(...arguments);
    D(this, "className", "FaceValidationService");
    D(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = Wc.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Za = Symbol("Comlink.proxy"), Hc = Symbol("Comlink.endpoint"), Kc = Symbol("Comlink.releaseProxy"), qi = Symbol("Comlink.finalizer"), No = Symbol("Comlink.thrown"), Va = (o) => typeof o == "object" && o !== null || typeof o == "function", Tc = {
  canHandle: (o) => Va(o) && o[Za],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return za(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), $a(o);
  }
}, Pc = {
  canHandle: (o) => Va(o) && No in o,
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
}, _a = /* @__PURE__ */ new Map([
  ["proxy", Tc],
  ["throw", Pc]
]);
function qc(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function za(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!qc(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: g, type: n, path: I } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(fe);
    let r;
    try {
      const s = I.slice(0, -1).reduce((x, Q) => x[Q], o), C = I.reduce((x, Q) => x[Q], o);
      switch (n) {
        case "GET":
          r = C;
          break;
        case "SET":
          s[I.slice(-1)[0]] = fe(A.data.value), r = !0;
          break;
        case "APPLY":
          r = C.apply(s, a);
          break;
        case "CONSTRUCT":
          {
            const x = new C(...a);
            r = Xc(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: Q } = new MessageChannel();
            za(o, Q), r = zc(x, [x]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (s) {
      r = { value: s, [No]: 0 };
    }
    Promise.resolve(r).catch((s) => ({ value: s, [No]: 0 })).then((s) => {
      const [C, x] = ii(s);
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), x), n === "RELEASE" && (i.removeEventListener("message", e), Xa(i), qi in o && typeof o[qi] == "function" && o[qi]());
    }).catch((s) => {
      const [C, x] = ii({
        value: new TypeError("Unserializable return value"),
        [No]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), x);
    });
  }), i.start && i.start();
}
function jc(o) {
  return o.constructor.name === "MessagePort";
}
function Xa(o) {
  jc(o) && o.close();
}
function $a(o, i) {
  return vg(o, [], i);
}
function co(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function Ar(o) {
  return Ke(o, {
    type: "RELEASE"
  }).then(() => {
    Xa(o);
  });
}
const ti = /* @__PURE__ */ new WeakMap(), oi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (ti.get(o) || 0) - 1;
  ti.set(o, i), i === 0 && Ar(o);
});
function Zc(o, i) {
  const t = (ti.get(i) || 0) + 1;
  ti.set(i, t), oi && oi.register(o, i, o);
}
function Vc(o) {
  oi && oi.unregister(o);
}
function vg(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(g, n) {
      if (co(e), n === Kc)
        return () => {
          Vc(A), Ar(o), e = !0;
        };
      if (n === "then") {
        if (i.length === 0)
          return { then: () => A };
        const I = Ke(o, {
          type: "GET",
          path: i.map((a) => a.toString())
        }).then(fe);
        return I.then.bind(I);
      }
      return vg(o, [...i, n]);
    },
    set(g, n, I) {
      co(e);
      const [a, r] = ii(I);
      return Ke(o, {
        type: "SET",
        path: [...i, n].map((s) => s.toString()),
        value: a
      }, r).then(fe);
    },
    apply(g, n, I) {
      co(e);
      const a = i[i.length - 1];
      if (a === Hc)
        return Ke(o, {
          type: "ENDPOINT"
        }).then(fe);
      if (a === "bind")
        return vg(o, i.slice(0, -1));
      const [r, s] = YI(I);
      return Ke(o, {
        type: "APPLY",
        path: i.map((C) => C.toString()),
        argumentList: r
      }, s).then(fe);
    },
    construct(g, n) {
      co(e);
      const [I, a] = YI(n);
      return Ke(o, {
        type: "CONSTRUCT",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, a).then(fe);
    }
  });
  return Zc(A, o), A;
}
function _c(o) {
  return Array.prototype.concat.apply([], o);
}
function YI(o) {
  const i = o.map(ii);
  return [i.map((t) => t[0]), _c(i.map((t) => t[1]))];
}
const er = /* @__PURE__ */ new WeakMap();
function zc(o, i) {
  return er.set(o, i), o;
}
function Xc(o) {
  return Object.assign(o, { [Za]: !0 });
}
function ii(o) {
  for (const [i, t] of _a)
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
    er.get(o) || []
  ];
}
function fe(o) {
  switch (o.type) {
    case "HANDLER":
      return _a.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function Ke(o, i, t) {
  return new Promise((e) => {
    const A = $c();
    o.addEventListener("message", function g(n) {
      !n.data || !n.data.id || n.data.id !== A || (o.removeEventListener("message", g), e(n.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function $c() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Ax = "SAM v1.44.6 for idcards", ex = "/dot-assets/magnifeye/dot-S9_xGlWZ.js";
function tx() {
  const { handleError: o } = at(), { acceleration: i } = VQ(), { assetsDirectoryPath: t, thresholds: e } = Cn(), [A, g] = cA();
  P(() => {
    (async () => {
      const a = Bn.getWorkerPath(ex, t), r = {};
      r.type = "module";
      const s = new Worker(new URL(a, import.meta.url), r), C = $a(s), x = await new C(), Q = new Oc(), E = new sc(x, Q), d = new Qc().setDetector(x).setValidationService(Q).setImageProcessor(E).setCompatibleSamVersion(Ax).setAssetsDirectoryPath(t).build();
      try {
        await d.init(), g(d);
      } catch (u) {
        if (u instanceof Error) {
          o(Y.fromError(u));
          return;
        }
      }
    })();
  }, [o, t]), P(() => {
    A && A.setThresholds(e);
  }, [A, e]), P(() => {
    A && A.setAcceleration(i);
  }, [i, A]);
  const n = {};
  return n.controller = A, n;
}
function ox({ onPhotoTakenInternal: o }) {
  const { isCameraReady: i } = j0(), { sunfish: t } = eo(), { controller: e } = tx(), { cameraResolution: A, detectionDetails: g, shouldCameraMirror: n, videoRef: I } = Ic({
    controller: e,
    onPhotoTakenInternal: o
  });
  return /* @__PURE__ */ p(YA, { children: /* @__PURE__ */ p(
    oc,
    {
      cameraResolution: A,
      detectionDetails: g,
      shouldMirror: n,
      children: /* @__PURE__ */ p(
        cB,
        {
          ref: I,
          $isImageMirror: n,
          $isVisible: t && i,
          autoPlay: !0,
          id: GB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function ix(o, i) {
  const { MagnifEyeLivenessContent: t } = ve.v4, e = await Promise.all(o.map(async (s) => rn(s))), A = await Oa(i), g = {};
  g.images = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.magnifeyeLivenessContent = a, Ka(r);
}
async function gx(o, i) {
  const t = o.map((A) => A.image), e = await ix(t, i);
  return Ha(e);
}
function nx(o, i) {
  const t = BI(o.faceSize, JI);
  return BI(i.faceSize, JI) < t;
}
const Ix = (o, i) => {
  const t = rt(void 0), e = (g) => {
    if (!(!g.detail || o !== ee.RUNNING || i !== mA.CLOSEUP)) {
      if (!t.value) {
        t.value = g.detail;
        return;
      }
      nx(t.value.data.detection, g.detail.data.detection) && (t.value = g.detail);
    }
  };
  pa(Be.FACE_DETECTION, e);
  const A = {};
  return A.middleImageBestCandidate = t, A;
}, ax = It.div`
  ${(o) => o.$isSecondStep && W0`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, rx = ({
  assetsDirectoryPath: o,
  onComplete: i,
  sessionToken: t
}) => {
  const { analytics: e } = V0(), { appState: A, handleAppStateChange: g, handleError: n, magnifEyePhase: I, setIsCameraReady: a, setMagnifEyePhase: r } = j0(), { cameraProperties: s, mergeCameraProperties: C } = Hs(), x = rt([]), { middleImageBestCandidate: Q } = Ix(A, I), E = es(St.ANIMATION_END);
  function d(k) {
    x.value = [...x.value, k];
  }
  function u(k) {
    r(k), Dg(St.STATUS_CHANGED, { phase: k });
  }
  function c(k) {
    d(k), u(mA.MIDDLE);
  }
  function h() {
    u(mA.DISTANT), E.value = !1, x.value = [], e == null || e.reset();
  }
  As(() => {
    E.value && u(mA.CLOSEUP);
  }), Ws({
    onBlur: () => {
      a(!1), g(ee.LOADING), h();
    },
    onFocus: () => {
      a(!0), g(ee.RUNNING);
    }
  });
  async function m(k) {
    if (Q.value) {
      const K = { image: await aa(Q.value.image), data: Q.value.data };
      d(K);
    }
    d(k);
    try {
      const y = {
        sessionToken: t,
        web: s.value
      }, K = await gx(x.value, y), [QA] = x.value;
      i(QA, K), e == null || e.trackLivenessProcess(x.value);
    } catch (y) {
      y instanceof Error && n(Y.fromError(y));
      return;
    }
    g(ee.DONE);
  }
  const F = {
    [mA.DISTANT]: c,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [mA.MIDDLE]: () => {
    },
    [mA.CLOSEUP]: m
  }, v = hA(
    () => ({
      assetsDirectoryPath: o,
      magnifEyePhase: I,
      onPhotoTaken: F[I],
      thresholds: js[I]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, I]
  );
  return /* @__PURE__ */ p(Ps, { children: /* @__PURE__ */ p(ax, { $isSecondStep: I !== mA.DISTANT, children: /* @__PURE__ */ p(Ts, { cameraOptions: v, children: /* @__PURE__ */ p(ox, { onPhotoTakenInternal: C }) }) }) });
};
function Cx({ initAppState: o, onError: i }) {
  const [t, e] = cA(o), [A, g] = cA(), [n, I] = cA(!1), a = fA(i);
  P(() => {
    a.current = i;
  }, [i]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = g, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function Bx(o, i) {
  return i !== mA.DISTANT ? Gt.HIDDEN : o !== ee.RUNNING ? Gt.VISIBLE : Gt.VISIBLE_WITH_MASK;
}
function Qx({
  onError: o
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: g, setError: n, setIsCameraReady: I } = Cx({
    initAppState: ee.LOADING,
    onError: o
  }), [a, r] = cA(mA.DISTANT), s = Bx(i, a), C = oe(
    (Q) => {
      Dg(St.STATUS_CHANGED, { state: ee.ERROR, error: Q }), I(!1), A.current(Q), n(Q), g(ee.ERROR);
    },
    [I, A, n, g]
  ), x = oe(
    (Q) => {
      Q !== ee.WAITING && (g(Q), Dg(St.STATUS_CHANGED, { state: Q }));
    },
    [g]
  );
  return {
    appState: i,
    magnifEyePhase: a,
    setMagnifEyePhase: r,
    freemiumOverlayState: s,
    isCameraReady: e,
    setIsCameraReady: I,
    handleAppStateChange: x,
    handleError: C,
    error: t
  };
}
var Qn = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(Qn || {});
class sx {
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
    const I = Qo(n);
    try {
      await fetch("" + g + I + "&" + i, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: ia() }, A = { organization: ga(window.location.href) }, g = Qo({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(g);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = Qo(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const A = {};
    A.key = i, A.count = 1, A.dur = e, A.segmentation = t;
    const g = [A], n = Qo({ events: JSON.stringify(g) });
    await this.countlyFetch(n);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(Qn.AUTO_CAPTURE, i, t);
  }
}
const Et = new sx();
class cx {
  constructor() {
    D(this, "countly", Et);
  }
  createSegmentation(i) {
    return { appVersion: ia(), ...i };
  }
  init(i) {
    if (nQ()) return;
    const t = is();
    Et.init(t, i);
  }
  endSession() {
    Et.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const A = this.createSegmentation(e);
    Et.sendAutoCaptureEvent(A);
  }
  trackEscalated(i) {
    const t = {};
    t.instructionCode = i;
    const e = this.createSegmentation(t);
    Et.sendEvent(Qn.ESCALATION_TRIGGER, e);
  }
}
class xx extends cx {
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
class Ex extends xx {
  trackLivenessProcess(i) {
    var C, x, Q, E, d, u, c, h, m, F;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e, A] = i, [g, n] = this.captureProcessAnalytics, I = ns(g.averageFps + (n == null ? void 0 : n.averageFps)) / (-8040 + -1497 * 5 + 15527), a = pI(g.captureProcessDurationInMs), r = pI(n == null ? void 0 : n["captureProcessDurationInMs"]), s = this.createSegmentation({ faceSizeDistant: We((C = t.data.detection) == null ? void 0 : C.faceSize), faceSizeCloseup: We((x = A == null ? void 0 : A.data.detection) == null ? void 0 : x.faceSize), faceSizeMiddle: We((Q = e.data.detection) == null ? void 0 : Q.faceSize), confidenceDistant: We((E = t.data.detection) == null ? void 0 : E.confidence), confidenceCloseup: We((d = A == null ? void 0 : A.data.detection) == null ? void 0 : d.confidence), confidenceMiddle: We((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((h = (c = t.data) == null ? void 0 : c["imageResolution"]) == null ? void 0 : h.width) + "x" + ((F = (m = t.data) == null ? void 0 : m["imageResolution"]) == null ? void 0 : F.height), averageFps: I, captureTimeCloseup: r > -13619 + 976 * 14 ? ">45" : "" + r, captureTimeDistant: a > -197 * 49 + -355 * 17 + 15718 ? ">30" : "" + a, camera: gs(g == null ? void 0 : g.deviceName, g == null ? void 0 : g.facingMode), instructionSet: g.instructionSet });
    this.countly.sendAutoCaptureEvent(s, a + r), this.reset();
  }
}
const dx = new Ex(), lx = ({ props: o }) => o ? /* @__PURE__ */ p(IB, { target: o.styleTarget, children: /* @__PURE__ */ p(
  uQ,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: yg.getInstance(),
    children: /* @__PURE__ */ p(pQ, { analytics: dx, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ p(
      uB,
      {
        value: Qx({
          onError: o.onError
        }),
        children: /* @__PURE__ */ p(Z0, { children: /* @__PURE__ */ p(NQ, { children: /* @__PURE__ */ p(rx, { ...o }) }) })
      }
    ) })
  }
) }) : null;
lr(lx, "x-dot-magnifeye-liveness", ["props"]);
