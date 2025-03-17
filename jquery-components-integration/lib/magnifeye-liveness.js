var tr = Object.defineProperty;
var ln = (o) => {
  throw TypeError(o);
};
var or = (o, i, t) => i in o ? tr(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var w = (o, i, t) => or(o, typeof i != "symbol" ? i + "" : i, t), un = (o, i, t) => i.has(o) || ln("Cannot " + t);
var D = (o, i, t) => (un(o, i, "read from private field"), t ? t.call(o) : i.get(o)), W = (o, i, t) => i.has(o) ? ln("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), J = (o, i, t, e) => (un(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var Ao, N, WI, OI, ue, hn, HI, Zi, Ug, Vi, _i, KI, Ft = {}, TI = [], ir = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ai = Array.isArray;
function Ae(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function PI(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function uA(o, i, t) {
  var e, A, g, n = {};
  for (g in i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : n[g] = i[g];
  if (arguments.length > 5 * 1669 + -2 * -81 + -8505 && (n.children = arguments.length > -1237 + 73 * 94 + 5622 * -1 ? Ao.call(arguments, 2) : t), typeof o == "function" && o.defaultProps != null)
    for (g in o.defaultProps) void (-8097 + -621 * -9 + 2508) === n[g] && (n[g] = o.defaultProps[g]);
  return wt(o, n, e, A, null);
}
function wt(o, i, t, e, A) {
  var g = {};
  g.type = o, g.props = i, g.key = t, g.ref = e, g.__k = null, g.__ = null, g.__b = 0, g.__e = null, g.__d = void (-4934 + -3 * 1746 + -5086 * -2), g.__c = null, g.constructor = void (-1030 + 74 * -56 + 5174), g.__v = A ?? ++WI, g.__i = -1, g.__u = 0;
  var n = g;
  return A == null && N.vnode != null && N.vnode(n), n;
}
function gr() {
  var o = {};
  return o.current = null, o;
}
function LA(o) {
  return o.children;
}
function MA(o, i) {
  this.props = o, this.context = i;
}
function Fe(o, i) {
  if (i == null) return o.__ ? Fe(o.__, o.__i + (-17 * 128 + -704 * 4 + 4993 * 1)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? Fe(o) : null;
}
function qI(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = -76 * -14 + 82 * 73 + -7050; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return qI(o);
  }
}
function zi(o) {
  (!o.__d && (o.__d = !(-3609 + -5 * -1235 + -2566)) && ue.push(o) && !Fo.__r++ || hn !== N.debounceRendering) && ((hn = N.debounceRendering) || HI)(Fo);
}
function Fo() {
  var o, i, t, e, A, g, n, I;
  for (ue.sort(Zi); o = ue.shift(); ) o.__d && (i = ue.length, e = void (-13559 + -13559 * -1), g = (A = (t = o).__v).__e, n = [], I = [], t.__P && ((e = Ae({}, A)).__v = A.__v + (107 * -92 + 8476 + 1369), N.vnode && N.vnode(e), Yg(t.__P, e, A, t.__n, t.__P.namespaceURI, -73 * 62 + 29 * -210 + 4 * 2662 & A.__u ? [g] : null, n, g ?? Fe(A), !!(51 * 121 + -4709 + -1430 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, VI(n, e, I), e.__e != g && qI(e)), ue.length > i && ue.sort(Zi));
  Fo.__r = 12 * 624 + 6323 + -13811;
}
function jI(o, i, t, e, A, g, n, I, a, r, s) {
  var C, E, B, x, d, u = e && e.__k || TI, c = i.length;
  for (t.__d = a, nr(t, i, u), a = t.__d, C = 1754 + -309 * 14 + -1 * -2572; C < c; C++) (B = t.__k[C]) != null && typeof B != "boolean" && typeof B != "function" && (E = -(712 + 711 * -1) === B.__i ? Ft : u[B.__i] || Ft, B.__i = C, Yg(o, B, E, A, g, n, I, a, r, s), x = B.__e, B.ref && E.ref != B.ref && (E.ref && Wg(E.ref, null, B), s.push(B.ref, B.__c || x, B)), d == null && x != null && (d = x), -1476 + 6833 * 9 + 5515 & B.__u || E.__k === B.__k ? (a && typeof B.type == "string" && !o.contains(a) && (a = Fe(E)), a = ZI(B, a, o)) : typeof B.type == "function" && void (-7 * -1128 + 1 * -4633 + -13 * 251) !== B.__d ? a = B.__d : x && (a = x.nextSibling), B.__d = void (11949 + -569 * 21), B.__u &= -196609);
  t.__d = a, t.__e = d;
}
function nr(o, i, t) {
  var e, A, g, n, I, a = i.length, r = t.length, s = r, C = -1 * -4693 + 4286 + -8979;
  for (o.__k = [], e = 0; e < a; e++) n = e + C, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? wt(null, A, null, null, null) : ai(A) ? wt(LA, { children: A }, null, null, null) : void (-14 * -488 + -9074 * 1 + 2242) === A.constructor && A.__b > 7134 + 6 * -29 + -174 * 40 ? wt(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + 1, I = Ir(A, t, n, s), A.__i = I, g = null, -(107 * 25 + 7808 + 1747 * -6) !== I && (s--, (g = t[I]) && (g.__u |= -15 * -4861 + -853 * -232 + 139739 * -1)), g == null || g.__v === null ? (-(3537 + -6546 * 1 + 3010) == I && C--, typeof A.type != "function" && (A.__u |= 1 * 100771 + -3 * 33151 + -3058 * -21)) : I !== n && (I == n - (2381 + 1 * 3706 + -6086) ? C = I - n : I == n + (1176 + -2701 * 2 + 4227) ? C++ : I > n ? s > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= 1 * 84353 + 10979 * -7 + 58036))) : (g = t[n]) && g.key == null && g.__e && 10328 + 2 * -5164 == (31765 * -2 + -50563 + 245165 & g.__u) && (g.__e == o.__d && (o.__d = Fe(g)), Xi(g, g, !(-45 * -75 + -4 * 2317 + 5894)), t[n] = null, s--);
  if (s)
    for (e = 58 * 37 + 5613 * -1 + 3467; e < r; e++) (g = t[e]) != null && -1 * -4438 + 19 * 419 + -4133 * 3 == (52410 + -11313 * -1 + 1 * 67349 & g.__u) && (g.__e == o.__d && (o.__d = Fe(g)), Xi(g, g));
}
function ZI(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = -5837 + 4489 * -2 + 14815; e && A < e.length; A++) e[A] && (e[A].__ = o, i = ZI(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && 8949 + 3 * 461 + -10324 === i.nodeType);
  return i;
}
function te(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (ai(o) ? o.some(function(t) {
    te(t, i);
  }) : i.push(o)), i;
}
function Ir(o, i, t, e) {
  var A = o.key, g = o.type, n = t - (-1 * 6257 + -455 + 137 * 49), I = t + 1, a = i[t];
  if (a === null || a && A == a.key && g === a.type && 6388 + -1398 * 1 + -4990 == (3 * 73037 + -93411 + 5372 & a.__u)) return t;
  if (e > (a != null && 5134 + -2567 * 2 == (-245616 + 78307 * 1 + 298381 & a.__u) ? 1065 + 33 * -70 + 1246 : -4335 + -7349 * 1 + 1 * 11684)) for (; n >= 17100 + 38 * -450 || I < i.length; ) {
    if (n >= 745 * -8 + -2120 + 8080) {
      if ((a = i[n]) && !(-60009 + 12 * -12388 + 339737 & a.__u) && A == a.key && g === a.type) return n;
      n--;
    }
    if (I < i.length) {
      if ((a = i[I]) && 2031 * 3 + 1231 + -7324 == (249459 + 132 * 602 + -67 * 2953 & a.__u) && A == a.key && g === a.type) return I;
      I++;
    }
  }
  return -(-558 * -8 + 8239 + 3 * -4234);
}
function fn(o, i, t) {
  i[-1190 + -595 * -2] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || ir.test(i) ? t : t + "px";
}
function Io(o, i, t, e, A) {
  var g;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || fn(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || fn(o.style, i, t[i]);
    }
  else if (i[-3676 + -1 * -7876 + -4200] === "o" && i[-1 * -6359 + 9897 + -16255] === "n") g = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(-25 * 229 + -3341 + 9068) : i.slice(-2553 + 1 * -7957 + 2628 * 4), o.l || (o.l = {}), o.l[i + g] = t, t ? e ? t.u = e.u : (t.u = Ug, o.addEventListener(i, g ? _i : Vi, g)) : o.removeEventListener(i, g ? _i : Vi, g);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(1 * -2498 + -9906 + 12405) === t && i[-1 * 5219 + -246 * -36 + -3633] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && -509 * -19 + 1924 + -11594 == t ? "" : t));
  }
}
function pn(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = Ug++;
      else if (i.t < t.u) return;
      return t(N.event ? N.event(i) : i);
    }
  };
}
function Yg(o, i, t, e, A, g, n, I, a, r) {
  var s, C, E, B, x, d, u, c, h, m, F, v, k, y, K, BA, AA = i.type;
  if (void (1079 * 6 + 2851 * -2 + 4 * -193) !== i.constructor) return null;
  1405 * -1 + 4188 + -2655 & t.__u && (a = !!(1 * -4043 + -1361 * -5 + -2730 & t.__u), g = [I = i.__e = t.__e]), (s = N.__b) && s(i);
  A: if (typeof AA == "function") try {
    if (c = i.props, h = "prototype" in AA && AA.prototype.render, m = (s = AA.contextType) && e[s.__c], F = s ? m ? m.props.value : s.__ : e, t.__c ? u = (C = i.__c = t.__c).__ = C.__E : (h ? i.__c = C = new AA(c, F) : (i.__c = C = new MA(c, F), C.constructor = AA, C.render = rr), m && m.sub(C), C.props = c, C.state || (C.state = {}), C.context = F, C.__n = e, E = C.__d = !(-1035 + -34 * -93 + -2127), C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && AA.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = Ae({}, C.__s)), Ae(C.__s, AA.getDerivedStateFromProps(c, C.__s))), B = C.props, x = C.state, C.__v = i, E) h && AA.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && AA.getDerivedStateFromProps == null && c !== B && C.componentWillReceiveProps != null && C.componentWillReceiveProps(c, F), !C.__e && (C.shouldComponentUpdate != null && !(-1 * -9098 + -687 * 9 + -2914) === C.shouldComponentUpdate(c, C.__s, F) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (C.props = c, C.state = C.__s, C.__d = !(-1 * -869 + -8675 * 1 + 7807)), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(FA) {
          FA && (FA.__ = i);
        }), v = -11148 + 2787 * 4; v < C._sb.length; v++) C.__h.push(C._sb[v]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(c, C.__s, F), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(B, x, d);
      });
    }
    if (C.context = F, C.props = c, C.__P = o, C.__e = !(-73 * 79 + -1303 * 1 + 7071), k = N.__r, y = 7790 + -1 * -7629 + 17 * -907, h) {
      for (C.state = C.__s, C.__d = !(1 * -9582 + -3 * -1549 + 4936), k && k(i), s = C.render(C.props, C.state, C.context), K = -4216 + 2 * 2985 + -1754; K < C._sb.length; K++) C.__h.push(C._sb[K]);
      C._sb = [];
    } else do
      C.__d = !(16148 + 241 * -67), k && k(i), s = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++y < -389 * -9 + 818 + -38 * 113);
    C.state = C.__s, C.getChildContext != null && (e = Ae(Ae({}, e), C.getChildContext())), h && !E && C.getSnapshotBeforeUpdate != null && (d = C.getSnapshotBeforeUpdate(B, x)), jI(o, ai(BA = s != null && s.type === LA && s.key == null ? s.props.children : s) ? BA : [BA], i, t, e, A, g, n, I, a, r), C.base = i.__e, i.__u &= -(6149 + -1 * -8047 + -401 * 35), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (FA) {
    i.__v = null, a || g != null ? (i.__e = I, i.__u |= a ? -1 * -2401 + 2 * 4772 + -11785 : 2233 + 1 * 4774 + -93 * 75, g[g.indexOf(I)] = null) : (i.__e = t.__e, i.__k = t.__k), N.__e(FA, i, t);
  }
  else g == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = ar(t.__e, i, t, e, A, g, n, a, r);
  (s = N.diffed) && s(i);
}
function VI(o, i, t) {
  i.__d = void (1 * -4571 + 9 * 991 + -4348);
  for (var e = 8 * 1192 + -1850 + -7686; e < t.length; e++) Wg(t[e], t[++e], t[++e]);
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
function ar(o, i, t, e, A, g, n, I, a) {
  var r, s, C, E, B, x, d, u = t.props, c = i.props, h = i.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), g != null) {
    for (r = -5405 + -1 * 3004 + -8409 * -1; r < g.length; r++) if ((B = g[r]) && "setAttribute" in B == !!h && (h ? B.localName === h : -73 * -82 + -1435 + -12 * 379 === B.nodeType)) {
      o = B, g[r] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(c);
    o = document.createElementNS(A, h, c.is && c), g = null, I = !(9152 + -6793 * -1 + -15944);
  }
  if (h === null) u === c || I && o.data === c || (o.data = c);
  else {
    if (g = g && Ao.call(o.childNodes), u = t.props || Ft, !I && g != null)
      for (u = {}, r = 16219 + -1 * 16219; r < o.attributes.length; r++) u[(B = o.attributes[r]).name] = B.value;
    for (r in u) if (B = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = B;
      else if (r !== "key" && !(r in c)) {
        if (r == "value" && "defaultValue" in c || r == "checked" && "defaultChecked" in c) continue;
        Io(o, r, null, B, A);
      }
    }
    for (r in c) B = c[r], r == "children" ? E = B : r == "dangerouslySetInnerHTML" ? s = B : r == "value" ? x = B : r == "checked" ? d = B : r === "key" || I && typeof B != "function" || u[r] === B || Io(o, r, B, u[r], A);
    if (s) I || C && (s.__html === C.__html || s.__html === o.innerHTML) || (o.innerHTML = s.__html), i.__k = [];
    else if (C && (o.innerHTML = ""), jI(o, ai(E) ? E : [E], i, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, g, n, g ? g[1609 + 514 * 5 + -21 * 199] : t.__k && Fe(t, 1049 * -3 + 5130 + -661 * 3), I, a), g != null)
      for (r = g.length; r--; ) g[r] != null && PI(g[r]);
    I || (r = "value", void (31 * 138 + -1 * 3987 + -291) !== x && (x !== o[r] || h === "progress" && !x || h === "option" && x !== u[r]) && Io(o, r, x, u[r], A), r = "checked", void (-23 * 432 + -9614 + 19550) !== d && d !== o[r] && Io(o, r, d, u[r], A));
  }
  return o;
}
function Wg(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    N.__e(e, t);
  }
}
function Xi(o, i, t) {
  var e, A;
  if (N.unmount && N.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Wg(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (g) {
      N.__e(g, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = -5448 + 79 * -1 + -5527 * -1; A < e.length; A++) e[A] && Xi(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || PI(o.__e), o.__c = o.__ = o.__e = o.__d = void (-3398 * -2 + -6684 + 14 * -8);
}
function rr(o, i, t) {
  return this.constructor(o, t);
}
function se(o, i, t) {
  var e, A, g, n;
  N.__ && N.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, g = [], n = [], Yg(i, o = (!e && t || i).__k = uA(LA, null, [o]), A || Ft, Ft, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? Ao.call(i.childNodes) : null, g, !e && t ? t : A ? A.__e : i.firstChild, e, n), VI(g, o, n);
}
function Og(o, i) {
  se(o, i, Og);
}
function Hg(o, i, t) {
  var e, A, g, n, I = Ae({}, o.props);
  for (g in o.type && o.type.defaultProps && (n = o.type.defaultProps), i) g == "key" ? e = i[g] : g == "ref" ? A = i[g] : I[g] = void (-4393 + -3 * -438 + 3079) === i[g] && void (-1 * -8986 + 6605 * -1 + -2381) !== n ? n[g] : i[g];
  return arguments.length > 2 && (I.children = arguments.length > -1 * -9527 + -3574 + -5950 ? Ao.call(arguments, 2) : t), wt(o.type, I, e || o.key, A || o.ref, null);
}
function ot(o, i) {
  var t = { __c: i = "__cC" + KI++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, g;
    return this.getChildContext || (A = [], (g = {})[i] = this, this.getChildContext = function() {
      return g;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, zi(I);
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
Ao = TI.slice, N = { __e: function(o, i, t, e) {
  for (var A, g, n; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((g = A.constructor) && g.getDerivedStateFromError != null && (A.setState(g.getDerivedStateFromError(o)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    o = I;
  }
  throw o;
} }, WI = 1712 + -39 * -29 + -2843, OI = function(o) {
  return o != null && o.constructor == null;
}, MA.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof o == "function" && (o = o(Ae({}, t), this.props)), o && Ae(t, o), o != null && this.__v && (i && this._sb.push(i), zi(this));
}, MA.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(-1 * -7481 + 341 * -22 + 21), o && this.__h.push(o), zi(this));
}, MA.prototype.render = LA, ue = [], HI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zi = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, Fo.__r = 3716 * -1 + -6415 + 10131, Ug = 3308 * 3 + 2253 * 3 + -16683, Vi = pn(!(592 + 1 * -591)), _i = pn(!(-1243 + 7787 * 1 + -1 * 6544)), KI = -1603 + -2 * -1069 + -1 * 535;
function Kg() {
  return (Kg = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = 1055 + 11 * 745 + 1 * -9249; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var Cr = ["context", "children"];
function Br(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var g, n, I = {}, a = Object.keys(e);
    for (n = 0; n < a.length; n++) A.indexOf(g = a[n]) >= 8466 + -5 * -110 + -9016 || (I[g] = e[g]);
    return I;
  }(o, Cr);
  return Hg(i, t);
}
function Qr() {
  var o = {};
  o.detail = {}, o.bubbles = !(4612 + 1153 * -4), o.cancelable = !0;
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = uA(Br, Kg({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (-1 * -3779 + -6207 + 2431 === e.nodeType) return e.data;
    if (1 * 2269 + 8712 + -10980 !== e.nodeType) return null;
    var g = [], n = {}, I = 4566 + -2 * -3637 + -11840, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[_I(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var s = t(r[I], null), C = r[I].slot;
      C ? n[C] = uA(yn, { name: C }, s) : g[I] = s;
    }
    var E = A ? uA(yn, null, g) : g;
    return uA(A || e.nodeName.toLowerCase(), n, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Og : se)(this._vdom, this._root);
}
function _I(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function sr(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (1 * -7043 + -2 * -1542 + 107 * 37), e[_I(o)] = t, this._vdom = Hg(this._vdom, e), se(this._vdom, this._root);
  }
}
function cr() {
  se(this._vdom = null, this._root);
}
function yn(o, i) {
  var t = this;
  return uA("slot", Kg({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Er(o, i, t, e) {
  function A() {
    var g = Reflect.construct(HTMLElement, [], A);
    return g._vdomComponent = o, g._root = g, g;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Qr, A.prototype.attributeChangedCallback = sr, A.prototype.disconnectedCallback = cr, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(g) {
    Object.defineProperty(A.prototype, g, { get: function() {
      return this._vdom.props[g];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(g, null, n) : (this._props || (this._props = {}), this._props[g] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(g, n);
    } });
  }), customElements.define(i, A);
}
var xr = -136 * -12 + -5 * 1019 + 3463;
function p(o, i, t, e, A, g) {
  i || (i = {});
  var n, I, a = i;
  if ("ref" in a)
    for (I in a = {}, i) I == "ref" ? n = i[I] : a[I] = i[I];
  var r = {};
  r.type = o, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (998 * -3 + 3229 * -2 + 139 * 68), r.__c = null, r.constructor = void (1676 * -2 + -1 * 609 + -233 * -17), r.__v = --xr, r.__i = -(-19404 + 19405 * 1), r.__u = 0, r.__source = A, r.__self = g;
  var s = r;
  if (typeof o == "function" && (n = o.defaultProps))
    for (I in n) void (-9685 + -1 * -9685) === a[I] && (a[I] = n[I]);
  return N.vnode && N.vnode(s), s;
}
var wA = function() {
  return wA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var g in t) Object.prototype.hasOwnProperty.call(t, g) && (i[g] = t[g]);
    }
    return i;
  }, wA.apply(this, arguments);
};
function _e(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, g; e < A; e++)
    (g || !(e in i)) && (g || (g = Array.prototype.slice.call(i, 0, e)), g[e] = i[e]);
  return o.concat(g || Array.prototype.slice.call(i));
}
function dr(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var lr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ur = dr(function(o) {
  return lr.test(o) || o.charCodeAt(-82 * 42 + -1 * -1873 + 1571) === -7313 * -1 + -1177 + -25 * 241 && o.charCodeAt(-3937 + -225 * -27 + -2137) === 7542 + 1 * -7432 && o.charCodeAt(-1 * 2301 + -5168 + 7471) < -1 * 2813 + -5371 + 8275;
}), ce, j, mi, Dn, ze = 4 * 332 + -6284 + 4956, zI = [], _ = N, wn = _.__b, mn = _.__r, bn = _.diffed, Gn = _.__c, kn = _.unmount, Nn = _.__;
function it(o, i) {
  _.__h && _.__h(j, o, ze || i), ze = 415 * 1 + 9093 + 4754 * -2;
  var t = {};
  t.__ = [], t.__h = [];
  var e = j.__H || (j.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function xA(o) {
  return ze = 1, Tg(Aa, o);
}
function Tg(o, i, t) {
  var e = it(ce++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : Aa(void (6465 * 1 + 9849 + -8157 * 2), i), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[8015 + 4007 * -2]], e.__c.setState({}));
  }], e.__c = j, !j.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var s = e.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (s.every(function(E) {
        return !E.__N;
      })) return !g || g.call(this, I, a, r);
      var C = !(13026 + -13025 * 1);
      return s.forEach(function(E) {
        if (E.__N) {
          var B = E.__[0];
          E.__ = E.__N, E.__N = void 0, B !== E.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!g || g.call(this, I, a, r));
    };
    j.u = !(-8931 + 8931 * 1);
    var g = j.shouldComponentUpdate, n = j.componentWillUpdate;
    j.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var s = g;
        g = void (1106 + 1106 * -1), A(I, a, r), g = s;
      }
      n && n.call(this, I, a, r);
    }, j.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function P(o, i) {
  var t = it(ce++, 3);
  !_.__s && Pg(t.__H, i) && (t.__ = o, t.i = i, j.__H.__h.push(t));
}
function gt(o, i) {
  var t = it(ce++, 4);
  !_.__s && Pg(t.__H, i) && (t.__ = o, t.i = i, j.__h.push(t));
}
function fA(o) {
  return ze = -2665 + -15 * 387 + 15 * 565, hA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function XI(o, i, t) {
  ze = -461 * -13 + -1 * -1319 + -7306, gt(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void (1 * -9221 + 692 + 8529);
  }, t == null ? t : t.concat(o));
}
function hA(o, i) {
  var t = it(ce++, 7);
  return Pg(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function oe(o, i) {
  return ze = -9 * 727 + 13 * -462 + -29 * -433, hA(function() {
    return o;
  }, i);
}
function Ee(o) {
  var i = j.context[o.__c], t = it(ce++, 9);
  return t.c = o, i ? (t.__ == null && (t.__ = !(7 * -569 + -7752 + -1 * -11735), i.sub(j)), i.props.value) : o.__;
}
function So(o, i) {
  _.useDebugValue && _.useDebugValue(i ? i(o) : o);
}
function $I() {
  var o = it(ce++, 11);
  if (!o.__) {
    for (var i = j.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [-2 * -3053 + 9388 + -15494, 16566 + 2761 * -6]);
    o.__ = "P" + t[1 * 5523 + -7956 + 2433] + "-" + t[-2304 * 1 + 3637 * -1 + 5942]++;
  }
  return o.__;
}
function hr() {
  for (var o; o = zI.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(Eo), o.__H.__h.forEach($i), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], _.__e(i, o.__v);
  }
}
_.__b = function(o) {
  j = null, wn && wn(o);
}, _.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), Nn && Nn(o, i);
}, _.__r = function(o) {
  mn && mn(o), ce = -1349 * -1 + -703 + -646;
  var i = (j = o.__c).__H;
  i && (mi === j ? (i.__h = [], j.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (31 * -7 + -5900 + 6117);
  })) : (i.__h.forEach(Eo), i.__h.forEach($i), i.__h = [], ce = 4 * -119 + -2164 + -55 * -48)), mi = j;
}, _.diffed = function(o) {
  bn && bn(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (8113 + 8 * 560 + -12592 !== zI.push(i) && Dn === _.requestAnimationFrame || ((Dn = _.requestAnimationFrame) || fr)(hr)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), mi = j = null;
}, _.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(Eo), t.__h = t.__h.filter(function(e) {
        return !e.__ || $i(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], _.__e(e, t.__v);
    }
  }), Gn && Gn(o, i);
}, _.unmount = function(o) {
  kn && kn(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Eo(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void 0, i && _.__e(i, t.__v));
};
var Fn = typeof requestAnimationFrame == "function";
function fr(o) {
  var i, t = function() {
    clearTimeout(e), Fn && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  Fn && (i = requestAnimationFrame(t));
}
function Eo(o) {
  var i = j, t = o.__c;
  typeof t == "function" && (o.__c = void (-31 * -257 + 3 * -461 + -6584), t()), j = i;
}
function $i(o) {
  var i = j;
  o.__c = o.__(), j = i;
}
function Pg(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function Aa(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function ea(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Ag(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !(1352 + -13 * 104);
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(4489 + 9 * 439 + -8440);
  return !(7959 + 8 * 1192 + -17494);
}
function eg(o, i) {
  this.props = o, this.context = i;
}
function pr(o, i) {
  function t(A) {
    var g = this.props.ref, n = g == A.ref;
    return !n && g && (g.call ? g(null) : g.current = null), i ? !i(this.props, A) || !n : Ag(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, uA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(1552 * 5 + -2 * -1931 + -11622), e.__f = !(-11237 + 1 * 11237), e;
}
(eg.prototype = new MA()).isPureReactComponent = !(3797 * -1 + -6606 + 10403 * 1), eg.prototype.shouldComponentUpdate = function(o, i) {
  return Ag(this.props, o) || Ag(this.state, i);
};
var Sn = N.__b;
N.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), Sn && Sn(o);
};
var yr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 1 * -6593 + 1 * -3535 + -14039 * -1;
function ta(o) {
  function i(t) {
    var e = ea({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = yr, i.render = i, i.prototype.isReactComponent = i.__f = !0, i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var Rn = function(o, i) {
  return o == null ? null : te(te(o).map(i));
}, Dr = { map: Rn, forEach: Rn, count: function(o) {
  return o ? te(o).length : -2202 + 2941 * -3 + 21 * 525;
}, only: function(o) {
  var i = te(o);
  if (-9531 * 1 + 703 + 8829 !== i.length) throw "Children.only";
  return i[0];
}, toArray: te }, wr = N.__e;
N.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, g = i; g = g.__; ) if ((A = g.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  wr(o, i, t, e);
};
var Mn = N.unmount;
function oa(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = ea({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return oa(e, i, t);
  })), o;
}
function ia(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return ia(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(4564 + -3 * -2787 + -12925), o.__c.__P = t)), o;
}
function xo() {
  this.__u = 510 * 2 + 4224 + -5244, this.t = null, this.__b = null;
}
function ga(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function mr(o) {
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
  return A.displayName = "Lazy", A.__f = !(3710 + 1093 * 8 + -2 * 6227), A;
}
function dt() {
  this.u = null, this.o = null;
}
N.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && 34 * 254 + -7739 + -865 & o.__u && (o.type = null), Mn && Mn(o);
}, (xo.prototype = new MA()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = ga(e.__v), g = !(5739 + -38 * 151), n = function() {
    g || (g = !(8630 + -1 * -1651 + -10281), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[3 * 158 + 8402 + -8876 * 1] = ia(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || 2810 + -18 * 23 + 4 * -591 & i.__u || e.setState({ __a: e.__b = e.__v.__k[9800 + -1661 * -1 + -11461] }), o.then(n, n);
}, xo.prototype.componentWillUnmount = function() {
  this.t = [];
}, xo.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-1 * 5680 + 467 + 401 * 13].__c;
      this.__v.__k[-2566 * 1 + -3099 + 5665] = oa(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && uA(LA, null, o.fallback);
  return A && (A.__u &= -(773 * 5 + 4323 + -8155)), [uA(LA, null, i.__a ? null : o.children), A];
};
var vn = function(o, i, t) {
  if (++t[1] === t[13837 + 101 * -137] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[-4400 + 3839 * -1 + 8239] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 4656 + 205 * 1 + -4858; ) t.pop()();
    if (t[-8 * 876 + -1667 + 8676] < t[-1932 + -2113 * 3 + 8271]) break;
    o.u = t = t[10 * 849 + 37 * -19 + -7785];
  }
};
function br(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function Gr(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    se(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-11 * -449 + -2171 * 4 + 3745);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -9862 + -120 * 46 + -15383 * -1, -7 * -158 + 21 * -141 + -64 * -29), i.i.removeChild(e);
  } }), se(uA(br, { context: i.context }, o.__v), i.l);
}
function kr(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = uA(Gr, t);
  return e.containerInfo = i, e;
}
(dt.prototype = new MA()).__a = function(o) {
  var i = this, t = ga(i.__v), e = i.o.get(o);
  return e[0]++, function(A) {
    var g = function() {
      i.props.revealOrder ? (e.push(A), vn(i, o, e)) : A();
    };
    t ? t(g) : g();
  };
}, dt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = te(o.children);
  o.revealOrder && o.revealOrder[6686 + -2 * 3343] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [1, 1410 + 5 * -1327 + -11 * -475, this.u]);
  return o.children;
}, dt.prototype.componentDidUpdate = dt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    vn(o, t, i);
  });
};
var na = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 116909 + -11082 * 1 + -45724, Nr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Fr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Sr = /[A-Z0-9]/g, Rr = typeof document < "u", Mr = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function vr(o, i, t) {
  return i.__k == null && (i.textContent = ""), se(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function Lr(o, i, t) {
  return Og(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
MA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(MA.prototype, o, { configurable: !(-299 * 22 + 2760 + 3818), get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-2 * -3112 + 2 * 3470 + -13164), t.writable = !(-9480 + -1 * 1913 + 11393 * 1), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var Ln = N.event;
function Jr() {
}
function Ur() {
  return this.cancelBubble;
}
function Yr() {
  return this.defaultPrevented;
}
N.event = function(o) {
  return Ln && (o = Ln(o)), o.persist = Jr, o.isPropagationStopped = Ur, o.isDefaultPrevented = Yr, o.nativeEvent = o;
};
var lo = {};
lo.enumerable = !(-2 * 1655 + 6317 + -3006), lo.configurable = !(-2117 + -1 * -2117), lo.get = function() {
  return this.class;
};
var qg, Wr = lo, Jn = N.vnode;
N.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var g in t) {
      var n = t[g];
      if (!(g === "value" && "defaultValue" in t && n == null || Rr && g === "children" && e === "noscript" || g === "class" || g === "className")) {
        var I = g.toLowerCase();
        g === "defaultValue" && "value" in t && t.value == null ? g = "value" : g === "download" && !(1 * 3137 + 4812 + 1 * -7949) === n ? n = "" : I === "translate" && n === "no" ? n = !(9638 + 419 * -23) : I === "ondoubleclick" ? g = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || Mr(t.type) ? I === "onfocus" ? g = "onfocusin" : I === "onblur" ? g = "onfocusout" : Fr.test(g) ? g = I : e.indexOf("-") === -1 && Nr.test(g) ? g = g.replace(Sr, "-$&").toLowerCase() : n === null && (n = void (1 * -2648 + 6 * -277 + -2 * -2155)) : I = g = "oninput", I === "oninput" && A[g = I] && (g = "oninputCapture"), A[g] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = te(t.children).forEach(function(a) {
      a.props.selected = -(1 * 3614 + 1196 + 3 * -1603) != A.value.indexOf(a.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = te(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(-2867 + -1017 * 3 + 5919) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", Wr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = na, Jn && Jn(o);
};
var Un = N.__r;
N.__r = function(o) {
  Un && Un(o), qg = o.__c;
};
var Yn = N.diffed;
N.diffed = function(o) {
  Yn && Yn(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), qg = null;
};
var IA = {};
IA.readContext = function(o) {
  return qg.__n[o.__c].props.value;
}, IA.useCallback = oe, IA.useContext = Ee, IA.useDebugValue = So, IA.useDeferredValue = Ca, IA.useEffect = P, IA.useId = $I, IA.useImperativeHandle = XI, IA.useInsertionEffect = Qa, IA.useLayoutEffect = gt, IA.useMemo = hA, IA.useReducer = Tg, IA.useRef = fA, IA.useState = xA, IA.useSyncExternalStore = sa, IA.useTransition = Ba;
var Ia = {};
Ia.current = IA;
var aa = {};
aa.ReactCurrentDispatcher = Ia;
var Or = aa;
function Hr(o) {
  return uA.bind(null, o);
}
function ri(o) {
  return !!o && o.$$typeof === na;
}
function Kr(o) {
  return ri(o) && o.type === LA;
}
function Tr(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function Pr(o) {
  return ri(o) ? Hg.apply(null, arguments) : o;
}
function qr(o) {
  return !!o.__k && (se(null, o), !(-5035 + -5035 * -1));
}
function jr(o) {
  return o && (o.base || -165 * 10 + 8154 + -6503 === o.nodeType && o) || null;
}
var Zr = function(o, i) {
  return o(i);
}, Vr = function(o, i) {
  return o(i);
}, _r = LA;
function ra(o) {
  o();
}
function Ca(o) {
  return o;
}
function Ba() {
  return [!(8093 + -6 * 1427 + 470), ra];
}
var Qa = gt, zr = ri;
function sa(o, i) {
  var t = i(), e = xA({ h: { __: t, v: i } }), A = e[-9914 * -1 + 3 * -2586 + -2156].h, g = e[41 * -56 + 3365 * 1 + -1068];
  return gt(function() {
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
    return !((i = A) === (t = g) && (9860 + -642 * 1 + -9218 !== i || 1 / i == (-5367 + -13 * 147 + 7279) / t) || i != i && t != t);
  } catch {
    return !(2 * 689 + 4763 + -6141);
  }
}
var G = {};
G.useState = xA, G.useId = $I, G.useReducer = Tg, G.useEffect = P, G.useLayoutEffect = gt, G.useInsertionEffect = Qa, G.useTransition = Ba, G.useDeferredValue = Ca, G.useSyncExternalStore = sa, G.startTransition = ra, G.useRef = fA, G.useImperativeHandle = XI, G.useMemo = hA, G.useCallback = oe, G.useContext = Ee, G.useDebugValue = So, G.version = "17.0.2", G.Children = Dr, G.render = vr, G.hydrate = Lr, G.unmountComponentAtNode = qr, G.createPortal = kr, G.createElement = uA, G.createContext = ot, G.createFactory = Hr, G.cloneElement = Pr, G.createRef = gr, G.Fragment = LA, G.isValidElement = ri, G.isElement = zr, G.isFragment = Kr, G.isMemo = Tr, G.findDOMNode = jr, G.Component = MA, G.PureComponent = eg, G.memo = pr, G.forwardRef = ta, G.flushSync = Vr, G.unstable_batchedUpdates = Zr, G.StrictMode = _r, G.Suspense = xo, G.SuspenseList = dt, G.lazy = mr, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Or;
var Se = G, Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $r(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function AC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function eC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function tC(o) {
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
const oC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Xr,
  getAugmentedNamespace: tC,
  getDefaultExportFromCjs: $r,
  getDefaultExportFromNamespaceIfNotNamed: eC,
  getDefaultExportFromNamespaceIfPresent: AC
}, Symbol.toStringTag, { value: "Module" }));
var iC = function(i, t, e, A) {
  var g = e ? e.call(A, i, t) : void 0;
  if (g !== void (-2078 + -1 * -7348 + -62 * 85)) return !!g;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var n = Object.keys(i), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = 9302 + -9302 * 1; r < n.length; r++) {
    var s = n[r];
    if (!a(s)) return !1;
    var C = i[s], E = t[s];
    if (g = e ? e.call(A, C, E, s) : void (-4 * -1986 + 57 * 81 + -12561), g === !1 || g === void 0 && C !== E) return !1;
  }
  return !0;
};
const gC = oC.getDefaultExportFromCjs(iC);
var q = "-ms-", mt = "-moz-", H = "-webkit-", ca = "comm", Ci = "rule", jg = "decl", nC = "@import", Ea = "@keyframes", IC = "@layer", xa = Math.abs, Zg = String.fromCharCode, tg = Object.assign;
function aC(o, i) {
  return gA(o, 4041 * 1 + -7349 + 2 * 1654) ^ -9 * 624 + -7053 + -39 * -326 ? (((i << -6033 + 5 * 1207 ^ gA(o, 8090 * 1 + -1 * -8565 + -16655)) << -12 * 401 + -1 * 4261 + 9075 ^ gA(o, 1)) << 2 ^ gA(o, 2 * 1187 + -1853 + 3 * -173)) << 2 ^ gA(o, -6805 * 1 + 2390 + 94 * 47) : -1391 * 7 + -1 * -9571 + 166;
}
function da(o) {
  return o.trim();
}
function zA(o, i) {
  return (o = i.exec(o)) ? o[4713 + 2468 * -2 + 223] : o;
}
function S(o, i, t) {
  return o.replace(i, t);
}
function uo(o, i, t) {
  return o.indexOf(i, t);
}
function gA(o, i) {
  return o.charCodeAt(i) | 1 * -6523 + 2409 + 4114;
}
function Xe(o, i, t) {
  return o.slice(i, t);
}
function TA(o) {
  return o.length;
}
function la(o) {
  return o.length;
}
function lt(o, i) {
  return i.push(o), o;
}
function rC(o, i) {
  return o.map(i).join("");
}
function Wn(o, i) {
  return o.filter(function(t) {
    return !zA(t, i);
  });
}
var Bi = -8937 + -9 * -883 + 991 * 1, $e = 1, ua = -1 * -3921 + -3222 + -699, JA = 119 * 77 + 1743 + -10906, eA = -691 * -9 + 7442 + -13661, nt = "";
function Qi(o, i, t, e, A, g, n, I) {
  var a = {};
  return a.value = o, a.root = i, a.parent = t, a.type = e, a.props = A, a.children = g, a.line = Bi, a.column = $e, a.length = n, a.return = "", a.siblings = I, a;
}
function ne(o, i) {
  return tg(Qi("", null, null, "", null, null, 338 * -18 + 9416 + -3332, o.siblings), o, { length: -o.length }, i);
}
function Ue(o) {
  for (; o.root; ) o = ne(o.root, { children: [o] });
  lt(o, o.siblings);
}
function CC() {
  return eA;
}
function BC() {
  return eA = JA > 8238 * -1 + -2 * 1949 + 12136 ? gA(nt, --JA) : -6969 + 7162 * 1 + 1 * -193, $e--, eA === -3529 + 1 * 3539 && ($e = -442 * -8 + 2 * 1688 + -6911, Bi--), eA;
}
function YA() {
  return eA = JA < ua ? gA(nt, JA++) : -11960 + 11960 * 1, $e++, eA === -5126 + 8095 * 1 + 11 * -269 && ($e = -2 * -4286 + 22 * 323 + -15677, Bi++), eA;
}
function ke() {
  return gA(nt, JA);
}
function ho() {
  return JA;
}
function si(o, i) {
  return Xe(nt, o, i);
}
function og(o) {
  switch (o) {
    case 1439 * 1 + -2284 * -1 + 73 * -51:
    case 9:
    case -1409 * 7 + -2328 + 12201:
    case -5179 * 1 + 3387 * 1 + -1 * -1805:
    case 9699 + 837 * 10 + -18037:
      return -2 * 1143 + -8851 + 11142;
    case -8 * -1119 + 4579 * -1 + -4340:
    case 88 * 28 + -9690 + 7269:
    case 21 * 437 + 6523 + -19 * 824:
    case -15738 + 15785 * 1:
    case 2942 * 1 + 21 * 83 + -4623:
    case 64:
    case 4733 * 2 + 7092 + 4 * -4108:
    case -1907 * 5 + 7821 + 591 * 3:
    case 2 * -4711 + -4572 * -2 + 1 * 401:
    case 1 * -7495 + -277 * -1 + 1049 * 7:
      return -493 * 1 + 2683 * 3 + 32 * -236;
    case 2 * 3797 + -4388 * 1 + 1574 * -2:
      return -1 * -654 + -426 + -225;
    case -43 * -141 + 2 * 571 + -7171:
    case -598 * -2 + -11 * 487 + 4200:
    case -3395 + -5 * -687:
    case -3 * -2348 + -1 * 8387 + 1434:
      return -7379 + 121 * 61;
    case -82 * 93 + 8403 + -736:
    case 6279 + 485 * 11 + -11521:
      return 5233 + 15 * 339 + -57 * 181;
  }
  return 1 * -8041 + 1 * -143 + 8184;
}
function QC(o) {
  return Bi = $e = 4503 + 1 * -4502, ua = TA(nt = o), JA = 1 * 7090 + -2806 + -21 * 204, [];
}
function sC(o) {
  return nt = "", o;
}
function Gi(o) {
  return da(si(JA - (-12 * -333 + -140 * -4 + -4555), ig(o === -3687 * -2 + -7013 + 18 * -15 ? o + 2 : o === 8330 + -1503 * 6 + 4 * 182 ? o + (3 * 2505 + 3864 + 5689 * -2) : o)));
}
function cC(o) {
  for (; (eA = ke()) && eA < -3120 + 9437 * -1 + 10 * 1259; ) YA();
  return og(o) > 1 * 4933 + -8819 + -4 * -972 || og(eA) > -1 * 9923 + -8986 + 18912 ? "" : " ";
}
function EC(o, i) {
  for (; --i && YA() && !(eA < -4245 + 53 * 81 || eA > -4828 + -6 * 1135 + 11740 || eA > 1 * 1717 + -257 * -2 + -1087 * 2 && eA < 409 * 4 + 382 * -21 + -6451 * -1 || eA > 267 + -1 * 197 && eA < 5 * -1508 + 3889 + 3748); ) ;
  return si(o, ho() + (i < -113 * -1 + -84 * -79 + -6743 && ke() == 511 * -17 + -60 + -8779 * -1 && YA() == 7009 + 5125 * -1 + -1852));
}
function ig(o) {
  for (; YA(); ) switch (eA) {
    case o:
      return JA;
    case 5386 + 3 * -2189 + 1215:
    case 1845 + -197 * -39 + -9489:
      o !== -1115 + -2551 * 1 + 3700 && o !== -11 * -209 + 4543 + -6803 && ig(eA);
      break;
    case -1663 * 1 + 1 * 1489 + 214:
      o === -2570 * 1 + 2842 * 3 + -5915 && ig(o);
      break;
    case -298 * 23 + -1 * 9662 + 2076 * 8:
      YA();
      break;
  }
  return JA;
}
function xC(o, i) {
  for (; YA() && o + eA !== -1057 * 2 + 1 * -5393 + 7554 + 10; ) if (o + eA === -379 * 13 + -725 + 78 * 73 + (1633 * -4 + 9002 + -2428) && ke() === 2731 * -1 + -681 + -3459 * -1) break;
  return "/*" + si(i, JA - 1) + "*" + Zg(o === 8185 + -3280 * -1 + -33 * 346 ? o : YA());
}
function dC(o) {
  for (; !og(ke()); ) YA();
  return si(o, JA);
}
function lC(o) {
  return sC(fo("", null, null, null, [""], o = QC(o), -12732 + -4244 * -3, [0], o));
}
function fo(o, i, t, e, A, g, n, I, a) {
  for (var r = 0, s = 6895 + -211 * -27 + -3148 * 4, C = n, E = -1 * 3863 + -9239 + 13102, B = 7694 + 113 * 1 + -7807, x = 6314 + -1 * 4062 + -563 * 4, d = 1, u = 1, c = -15904 + 1 * 15905, h = 6695 + -103 * 65, m = "", F = A, v = g, k = e, y = m; u; ) switch (x = h, h = YA()) {
    case -9286 + 9326 * 1:
      if (x != -1 * 8012 + 11 * 277 + 5073 && gA(y, C - (31 * 293 + 3964 + -13046)) == 3503 + -1 * 9533 + 6088) {
        uo(y += S(Gi(h), "&", "&\f"), "&\f", xa(r ? I[r - (74 * 131 + 1 * -609 + -9084)] : -9939 + -9939 * -1)) != -(7282 + 236 * 11 + -9877) && (c = -(-4762 + 221 * -11 + 7194 * 1));
        break;
      }
    case 186 * 20 + -1507 + -2179:
    case -4914 * 1 + 450 * -3 + 6303:
    case -5177 + 986 * -7 + 12170:
      y += Gi(h);
      break;
    case 896 * 8 + -2722 * 1 + -261 * 17:
    case -2 * 4325 + 423 * -20 + 17120:
    case 173 * -5 + -6536 * 1 + 7414:
    case -5 * 1785 + -5314 + 14271:
      y += cC(x);
      break;
    case 4567 * -1 + 1686 + 2973:
      y += EC(ho() - (8486 + -599 * -10 + -14475), 167 * -31 + 6760 * -1 + 11944);
      continue;
    case 6914 * 1 + 4 * 709 + -31 * 313:
      switch (ke()) {
        case 2 * 4768 + -2726 + 12 * -564:
        case 19021 + -2 * 9487:
          lt(uC(xC(YA(), ho()), i, t, a), a);
          break;
        default:
          y += "/";
      }
      break;
    case (-282 * 29 + 9357 * 1 + -1056) * d:
      I[r++] = TA(y) * c;
    case 125 * d:
    case 4911 * 1 + 8805 + -1951 * 7:
    case 12947 + -107 * 121:
      switch (h) {
        case -2555 + -2 * 2521 + -71 * -107:
        case -107 * 9 + -1 * 9172 + -135 * -76:
          u = -9589 + -1 * -4091 + -1 * -5498;
        case 7733 + 7674 * -1 + s:
          c == -(799 + -3 * -337 + -27 * 67) && (y = S(y, /\f/g, "")), B > 1906 + 1906 * -1 && TA(y) - C && lt(B > -27 * 47 + -2692 * -2 + -3 * 1361 ? Hn(y + ";", e, t, C - (3092 + -1 * 1619 + -1472), a) : Hn(S(y, " ", "") + ";", e, t, C - (-7199 * 1 + -281 * 29 + 307 * 50), a), a);
          break;
        case -3319 + 6 * 563:
          y += ";";
        default:
          if (lt(k = On(y, i, t, r, s, A, I, m, F = [], v = [], C, g), g), h === 3561 + -191 * 18)
            if (s === 157 * 2 + -3687 * 2 + 20 * 353) fo(y, i, k, k, F, g, C, I, v);
            else switch (E === -529 + -1 * 2622 + 65 * 50 && gA(y, 3) === 6279 + 31 * -199 ? 100 : E) {
              case 5206 + 4057 * -1 + -1 * 1049:
              case -1954 * 3 + -16 * 393 + 12258:
              case -1 * 1177 + 8735 + 573 * -13:
              case 2803 * 1 + -633 * -1 + 27 * -123:
                fo(o, k, k, e && lt(On(o, k, k, 1 * -4525 + 5799 * -1 + 10324, 2 * -3362 + -6439 + 13163, A, I, m, A, F = [], C, v), v), A, v, C, I, e ? F : v);
                break;
              default:
                fo(y, k, k, k, [""], v, -8469 + 3 * 2823, I, v);
            }
      }
      r = s = B = -257 * -26 + 3013 + -9695, d = c = -1823 + -3065 * -3 + -3 * 2457, m = y = "", C = n;
      break;
    case -1279 * -5 + -8713 + -44 * -54:
      C = 43 * 163 + 383 * 11 + -11221 + TA(y), B = x;
    default:
      if (d < 8352 + -1 * 6211 + 4 * -535) {
        if (h == 153 * 27 + -6627 + -291 * -9) --d;
        else if (h == 125 && d++ == 9612 + -1291 * -1 + -10903 && BC() == 6731 + 1 * 8893 + -15499) continue;
      }
      switch (y += Zg(h), h * d) {
        case -1329 + -946 * 9 + 9881:
          c = s > 1664 + -1 * 1664 ? -125 * 1 + 8013 + -3 * 2629 : (y += "\f", -(-1047 + -2 * -524));
          break;
        case -3488 + -1790 * 4 + -27 * -396:
          I[r++] = (TA(y) - (-13 * 571 + -9364 + 5596 * 3)) * c, c = 112 + -2999 * -3 + -3036 * 3;
          break;
        case 12 * -234 + -3929 + 6801:
          ke() === 3 * -2417 + -1150 + 8446 && (y += Gi(YA())), E = ke(), s = C = TA(m = y += dC(ho())), h++;
          break;
        case 739 * -11 + -161 * 55 + -1 * -17029:
          x === 529 + 3689 * 1 + 1 * -4173 && TA(y) == -4974 + 1923 * -1 + 6899 && (d = 0);
      }
  }
  return g;
}
function On(o, i, t, e, A, g, n, I, a, r, s, C) {
  for (var E = A - 1, B = A === -7655 + 213 * 2 + 7229 ? g : [""], x = la(B), d = -3897 * -2 + -1 * -8452 + -8123 * 2, u = 241 + -241 * -25 + -6266, c = 887 * 2 + -9940 + 8166; d < e; ++d) for (var h = -1 * 6408 + 1 * -5953 + 12361, m = Xe(o, E + 1, E = xa(u = n[d])), F = o; h < x; ++h) (F = da(u > 9524 + -1 * 9524 ? B[h] + " " + m : S(m, /&\f/g, B[h]))) && (a[c++] = F);
  return Qi(o, i, t, A === 337 * 5 + -1 * -1616 + -3301 * 1 ? Ci : I, a, r, s, C);
}
function uC(o, i, t, e) {
  return Qi(o, i, t, ca, Zg(CC()), Xe(o, 1814 + 243 * 1 + -3 * 685, -(-8694 + 1 * -2338 + 6 * 1839)), 3030 + -17 * 197 + 319, e);
}
function Hn(o, i, t, e, A) {
  return Qi(o, i, t, jg, Xe(o, 7663 + 1363 * -3 + -3574, e), Xe(o, e + (-12 * -739 + 1559 + -10426), -(2554 * 2 + -2573 * 3 + 2612)), e, A);
}
function ha(o, i, t) {
  switch (aC(o, i)) {
    case 10412 + -1 * 5309:
      return H + "print-" + o + o;
    case 11103 + 1 * 7591 + 1851 * -7:
    case 4228 + 1 * -7094 + 37 * 191:
    case 1 * -4491 + 2 * -2189 + -12046 * -1:
    case 1 * 5231 + -3 * -461 + 3181 * -1:
    case 3152 + -1 * 578 + 1 * -933:
    case -4526 + -7835 * 1 + 16818:
    case 2921:
    case 7130 + 5534 * 1 + -7092:
    case -3964 * -2 + -4123 + 2551:
    case 5844:
    case -4993 + 4159 * -1 + -12343 * -1:
    case -2846 * 1 + -11289 + -2078 * -10:
    case -6211 * 1 + -3917 + -571 * -23:
    case 1 * -5441 + -10180 + 22012 * 1:
    case -3097 * 3 + 8254 + 266 * 26:
    case -37 * 31 + 67 * -85 + 4155 * 3:
    case 1 * -5491 + 25 * -335 + -59 * -339:
    case 29 * 61 + 19 * -313 + 1 * 8777:
    case 17199 + 8 * -1543:
    case -509 * 11 + -9 * -313 + 6997:
    case 4237 + 2 * 1076:
    case 2927 + 4 * 1284 + 1477 * -2:
    case 5365:
    case 312 + 5309 * 1:
    case 3829:
      return H + o + o;
    case 1487 * 3 + -13 * 758 + 10182:
      return mt + o + o;
    case 2267 * 1 + 3626 * -2 + 2 * 5167:
    case 8059 + -10 * -821 + -12023:
    case 8592 + 3349 * 1 + 1 * -7131:
    case -328 * -10 + 9689 + 353 * -17:
    case 9675 + 4203 * 2 + -3065 * 5:
      return H + o + mt + o + q + o + o;
    case -7 * 1210 + -2 * 543 + -3873 * -4:
      switch (gA(o, i + (7438 + 4423 * 1 + -11850))) {
        case 8985 + -3493 * -2 + -15857:
          return H + o + q + S(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 6659 * 1 + 9369 + 7960 * -2:
          return H + o + q + S(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case -1 * -1017 + -7372 * -1 + 298 * -28:
          return H + o + q + S(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 6828:
    case 4268:
    case -18 * -506 + -5 * 499 + 106 * -35:
      return H + o + q + o + o;
    case -17515 + 64 * 370:
      return H + o + q + "flex-" + o + o;
    case 2148 + -9969 * 1 + 6504 * 2:
      return H + o + S(o, /(\w+).+(:[^]+)/, H + "box-$1$2" + q + "flex-$1$2") + o;
    case 5981 * 1 + 651 + -41 * 29:
      return H + o + q + "flex-item-" + S(o, /flex-|-self/g, "") + (zA(o, /flex-|baseline/) ? "" : q + "grid-row-" + S(o, /flex-|-self/g, "")) + o;
    case 4675:
      return H + o + q + "flex-line-pack" + S(o, /align-content|flex-|-self/g, "") + o;
    case -10223 + -1 * -15771:
      return H + o + q + S(o, "shrink", "negative") + o;
    case 5292:
      return H + o + q + S(o, "basis", "preferred-size") + o;
    case -571 + -1 * -9166 + -2535:
      return H + "box-" + S(o, "-grow", "") + H + o + q + S(o, "grow", "positive") + o;
    case 2597 + 1957 * 1:
      return H + S(o, /([^-])(transform)/g, "$1" + H + "$2") + o;
    case 41 * 127 + 2916 + 16 * -121:
      return S(S(S(o, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), o, "") + o;
    case -2 * -680 + 1915 * 1 + 2220:
    case 271 * -27 + 989 * -5 + 16221 * 1:
      return S(o, /(image-set\([^]*)/, H + "$1$`$1");
    case 59 * 71 + -4043 + 1 * 4822:
      return S(S(o, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + o + o;
    case 2 * -98 + 7447 + 1 * -3051:
      if (!zA(o, /flex-|baseline/)) return q + "grid-column-align" + Xe(o, i) + o;
      break;
    case -5523 + 1 * -699 + 8814:
    case 3360:
      return q + S(o, "template-", "") + o;
    case 4384:
    case 7673 + -5231 * 1 + 1174:
      return t && t.some(function(e, A) {
        return i = A, zA(e.props, /grid-\w+-end/);
      }) ? ~uo(o + (t = t[i].value), "span", -2 * -2658 + -4 * 616 + -2852) ? o : q + S(o, "-start", "") + o + q + "grid-row-span:" + (~uo(t, "span", 2507 + -2 * 2399 + 2291) ? zA(t, /\d+/) : +zA(t, /\d+/) - +zA(o, /\d+/)) + ";" : q + S(o, "-start", "") + o;
    case -5898 * -1 + -11 * 445 + 3893:
    case 6328 + -10 * 220:
      return t && t.some(function(e) {
        return zA(e.props, /grid-\w+-start/);
      }) ? o : q + S(S(o, "-end", "-span"), "span ", "") + o;
    case 2038 + 1 * 2057:
    case -2441 * -4 + -5704 + -477:
    case 159 * -57 + -4149 + -384 * -45:
    case 7490 + 10 * -543 + -1 * -472:
      return S(o, /(.+)-inline(.+)/, H + "$1$2") + o;
    case 26441 + 5 * -3665:
    case 11549 * -1 + 4244 + -2 * -7182:
    case 11744 + -5991 * 1:
    case -9762 + 4897 * 1 + 10400:
    case -5754 * 1 + -10253 + 21452:
    case -1 * -9117 + -231 * -47 + -2039 * 7:
    case 9557 + 179 * -34 + -1462 * -1:
    case 1724 + 8098 * -1 + 11051 * 1:
    case -3813 + -3254 * -3 + -416:
    case 5789:
    case -1 * -9901 + 1 * -5639 + 253 * 3:
    case 4384 + 4468 * -1 + -1 * -4849:
      if (TA(o) - (3267 + 2 * -1633) - i > -5561 * -1 + 1 * 9787 + -15342) switch (gA(o, i + (-4150 + -4359 * 1 + 8510))) {
        case 109:
          if (gA(o, i + (-2 * 581 + 5238 + -4072)) !== 1 * -515 + -36 * 128 + 5168) break;
        case 4426 + 4324 * -1:
          return S(o, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + mt + (gA(o, i + (4321 + 2159 * -2)) == -54 * 69 + -825 + 4659 ? "$3" : "$2-$3")) + o;
        case -2125 + -181 * 2 + 2602:
          return ~uo(o, "stretch", 8084 + -39 * -235 + -17249) ? ha(S(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case 1 * -6124 + 109 * 29 + 8115:
    case -3285 * -2 + -16 * 392 + 937 * 6:
      return S(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, g, n, I, a, r) {
        return q + A + ":" + g + r + (n ? q + A + "-span:" + (I ? a : +a - +g) + r : "") + o;
      });
    case 6 * -1500 + 1245 + 1588 * 8:
      if (gA(o, i + 6) === -8893 + 2 * 2699 + -3616 * -1) return S(o, ":", ":" + H) + o;
      break;
    case -7881 + -15 * -955:
      switch (gA(o, gA(o, 9831 + -724 * 11 + -1853) === 1 * 5677 + 4877 + -10509 ? -1168 + 8467 * -1 + 9653 : -2 * -2379 + -4 * 41 + 4583 * -1)) {
        case 4 * 917 + 7875 + 11423 * -1:
          return S(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (gA(o, -1 * -8123 + 7577 + 253 * -62) === 97 * 53 + -1 * -8093 + -13189 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + q + "$2box$3") + o;
        case -4683 + 8518 * 1 + -3735:
          return S(o, ":", ":" + q) + o;
      }
      break;
    case -4318 + 1747 * 5 + -2 * -651:
    case 2647:
    case 2135:
    case 3927:
    case -2 * -998 + 410 * -14 + 6135:
      return S(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function Ro(o, i) {
  for (var t = "", e = 0; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function hC(o, i, t, e) {
  switch (o.type) {
    case IC:
      if (o.children.length) break;
    case nC:
    case jg:
      return o.return = o.return || o.value;
    case ca:
      return "";
    case Ea:
      return o.return = o.value + "{" + Ro(o.children, e) + "}";
    case Ci:
      if (!TA(o.value = o.props.join(","))) return "";
  }
  return TA(t = Ro(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function fC(o) {
  var i = la(o);
  return function(t, e, A, g) {
    for (var n = "", I = 0; I < i; I++) n += o[I](t, e, A, g) || "";
    return n;
  };
}
function pC(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function yC(o, i, t, e) {
  if (o.length > -1 && !o.return)
    switch (o.type) {
      case jg:
        o.return = ha(o.value, o.length, t);
        return;
      case Ea:
        return Ro([ne(o, { value: S(o.value, "@", "@" + H) })], e);
      case Ci:
        if (o.length) return rC(t = o.props, function(A) {
          switch (zA(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              Ue(ne(o, { props: [S(A, /:(read-\w+)/, ":" + mt + "$1")] }));
              var g = {};
              g.props = [A], Ue(ne(o, g)), tg(o, { props: Wn(t, e) });
              break;
            case "::placeholder":
              Ue(ne(o, { props: [S(A, /:(plac\w+)/, ":" + H + "input-$1")] })), Ue(ne(o, { props: [S(A, /:(plac\w+)/, ":" + mt + "$1")] })), Ue(ne(o, { props: [S(A, /:(plac\w+)/, q + "input-$1")] }));
              var n = {};
              n.props = [A], Ue(ne(o, n)), tg(o, { props: Wn(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var DC = b, O = {}, Re = typeof process < "u" && void (8509 + -2 * 34 + 367 * -23) !== O && (O.REACT_APP_SC_ATTR || O.SC_ATTR) || "data-styled", fa = "active", pa = "data-styled-version", ci = "6.1.11", Vg = `/*!sc*/
`, _g = typeof window < "u" && "HTMLElement" in window, wC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (7406 * 1 + -430 * -14 + -49 * 274) !== O && void (-3 * -2761 + -2 * -3149 + -14581) !== O.REACT_APP_SC_DISABLE_SPEEDY && O.REACT_APP_SC_DISABLE_SPEEDY !== "" ? O.REACT_APP_SC_DISABLE_SPEEDY !== "false" && O.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-1041 + -13 * -293 + 2768 * -1) !== O && O.SC_DISABLE_SPEEDY !== void 0 && O.SC_DISABLE_SPEEDY !== "" ? O.SC_DISABLE_SPEEDY !== "false" && O.SC_DISABLE_SPEEDY : O.NODE_ENV !== "production"), Kn = /invalid hook call/i, ao = /* @__PURE__ */ new Set(), mC = function(o, i) {
  if (O.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var g = !0;
      console.error = function(n) {
        for (var I = [], a = 5882 + -1 * 5881; a < arguments.length; a++) I[a - (-6565 + 1 * -5279 + 515 * 23)] = arguments[a];
        Kn.test(n) ? (g = !1, ao.delete(e)) : A.apply(void (-187 * 22 + 226 * 22 + 11 * -78), _e([n], I, !1));
      }, fA(), g && !ao.has(e) && (console.warn(e), ao.add(e));
    } catch (n) {
      Kn.test(n.message) && ao.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Ei = Object.freeze([]), At = Object.freeze({});
function bC(o, i, t) {
  return void (-2 * -4677 + -9789 + -435 * -1) === t && (t = At), o.theme !== t.theme && o.theme || i || t.theme;
}
var gg = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), GC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, kC = /(^-|-$)/g;
function Tn(o) {
  return o.replace(GC, "-").replace(kC, "");
}
var NC = /(a)(d)/gi, ro = -72 * -41 + 5799 + -1 * 8699, Pn = function(o) {
  return String.fromCharCode(o + (o > 5899 * -1 + 103 * -4 + 6336 ? 803 + 5 * 1473 + -8129 : -9499 * -1 + -458 * 6 + -6654));
};
function ng(o) {
  var i, t = "";
  for (i = Math.abs(o); i > ro; i = i / ro | 0) t = Pn(i % ro) + t;
  return (Pn(i % ro) + t).replace(NC, "$1-$2");
}
var ki, ya = -5 * 631 + -1123 * 9 + -18643 * -1, he = function(o, i) {
  for (var t = i.length; t; ) o = (1 * -5798 + -5827 + 11658) * o ^ i.charCodeAt(--t);
  return o;
}, Da = function(o) {
  return he(ya, o);
};
function FC(o) {
  return ng(Da(o) >>> 8793 + 23 * 62 + -10219);
}
function wa(o) {
  return O.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Ni(o) {
  return typeof o == "string" && (O.NODE_ENV === "production" || o.charAt(-8 * -1059 + 1 * 8179 + -16651) === o.charAt(-16757 + -16757 * -1).toLowerCase());
}
var RA = {};
RA.childContextTypes = !0, RA.contextType = !0, RA.contextTypes = !0, RA.defaultProps = !0, RA.displayName = !0, RA.getDefaultProps = !0, RA.getDerivedStateFromError = !0, RA.getDerivedStateFromProps = !0, RA.mixins = !0, RA.propTypes = !0, RA.type = !0;
var Ie = {};
Ie.name = !0, Ie.length = !0, Ie.prototype = !0, Ie.caller = !0, Ie.callee = !0, Ie.arguments = !0, Ie.arity = !0;
var le = {};
le.$$typeof = !0, le.compare = !0, le.defaultProps = !0, le.displayName = !0, le.propTypes = !0, le.type = !0;
var He = {};
He.$$typeof = !0, He.render = !0, He.defaultProps = !0, He.displayName = !0, He.propTypes = !0;
var ma = typeof Symbol == "function" && Symbol.for, ba = ma ? Symbol.for("react.memo") : -92044 + -1 * -152159, SC = ma ? Symbol.for("react.forward_ref") : -2903 * -2 + 40 * -332 + 67586, RC = RA, MC = Ie, Ga = le, vC = ((ki = {})[SC] = He, ki[ba] = Ga, ki);
function qn(o) {
  return ("type" in (i = o) && i.type.$$typeof) === ba ? Ga : "$$typeof" in o ? vC[o.$$typeof] : RC;
  var i;
}
var LC = Object.defineProperty, JC = Object.getOwnPropertyNames, jn = Object.getOwnPropertySymbols, UC = Object.getOwnPropertyDescriptor, YC = Object.getPrototypeOf, Zn = Object.prototype;
function ka(o, i, t) {
  if (typeof i != "string") {
    if (Zn) {
      var e = YC(i);
      e && e !== Zn && ka(o, e, t);
    }
    var A = JC(i);
    jn && (A = A.concat(jn(i)));
    for (var g = qn(o), n = qn(i), I = 4533 + 1921 * 3 + -10296; I < A.length; ++I) {
      var a = A[I];
      if (!(a in MC || t && t[a] || n && a in n || g && a in g)) {
        var r = UC(i, a);
        try {
          LC(o, a, r);
        } catch {
        }
      }
    }
  }
  return o;
}
function et(o) {
  return typeof o == "function";
}
function zg(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function pe(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function Vn(o, i) {
  if (-42 * 155 + 5809 + 701 === o.length) return "";
  for (var t = o[14 * 262 + 6209 + -9877], e = 1 * 4974 + 5107 * -1 + 134; e < o.length; e++) t += o[e];
  return t;
}
function tt(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function Ig(o, i, t) {
  if (t === void 0 && (t = !1), !t && !tt(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = 2399 * -2 + 4087 + 1 * 711; e < i.length; e++) o[e] = Ig(o[e], i[e]);
  else if (tt(i))
    for (var e in i) o[e] = Ig(o[e], i[e]);
  return o;
}
function Xg(o, i) {
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
var WC = O.NODE_ENV !== "production" ? tA : {};
function OC() {
  for (var o = [], i = -6086 * 1 + -1971 + -1151 * -7; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[-8512 + -4639 * -2 + -766], e = [], A = 1, g = o.length; A < g; A += -2200 + 50 * 170 + -6299) e.push(o[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function It(o) {
  for (var i = [], t = -6508 + -6509 * -1; t < arguments.length; t++) i[t - 1] = arguments[t];
  return O.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > -3 * 205 + -2287 * 3 + 7476 ? " Args: ".concat(i.join(", ")) : "")) : new Error(OC.apply(void 0, _e([WC[o]], i, !1)).trim());
}
var HC = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(512), this.length = 1 * -4193 + -3257 * 1 + 7962, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = 41 * 214 + 221 * 29 + -5061 * 3, e = 0; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, g = A; i >= g; ) if ((g <<= 1) < -3681 + -9 * -409) throw It(1774 * 4 + 6692 + 4 * -3443, "".concat(i));
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(e), this.length = g;
      for (var n = A; n < g; n++) this.groupSizes[n] = 5 * -797 + 6706 + -2721;
    }
    for (var I = this.indexOfGroup(i + (2 * -4748 + 1 * 5751 + -3746 * -1)), a = (n = -3 * 1346 + 7119 + -3081, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[i]++, I++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 0;
      for (var g = e; g < A; g++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -13 * 623 + -398 * 4 + 9691 * 1 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), g = A + e, n = A; n < g; n++) t += "".concat(this.tag.getRule(n)).concat(Vg);
    return t;
  }, o;
}(), KC = 4804 + 41 * -232 + 4709 << 650 * 6 + 664 * -8 + 7 * 206, po = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), yo = -2044 + -70 * -95 + -4605, Co = function(o) {
  if (po.has(o)) return po.get(o);
  for (; Mo.has(yo); ) yo++;
  var i = yo++;
  if (O.NODE_ENV !== "production" && ((3952 + -3628 * -2 + -11208 | i) < 4935 + 105 * -47 || i > KC)) throw It(9471 + -1 * 4880 + -4575, "".concat(i));
  return po.set(o, i), Mo.set(i, o), i;
}, TC = function(o, i) {
  yo = i + (407 * -24 + 6779 * -1 + 84 * 197), po.set(o, i), Mo.set(i, o);
}, PC = "style[".concat(Re, "][").concat(pa, '="').concat(ci, '"]'), qC = new RegExp("^".concat(Re, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), jC = function(o, i, t) {
  for (var e, A = t.split(","), g = 0, n = A.length; g < n; g++) (e = A[g]) && o.registerName(i, e);
}, ZC = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (3 * 2029 + -8737 * -1 + -68 * 218) !== t ? t : "").split(Vg), A = [], g = -1163 * 5 + -282 * 12 + 9199, n = e.length; g < n; g++) {
    var I = e[g].trim();
    if (I) {
      var a = I.match(qC);
      if (a) {
        var r = 0 | parseInt(a[1], 10), s = a[-9890 + 339 * 12 + 5824];
        -464 * 18 + -3776 + 12128 !== r && (TC(s, r), jC(o, s, a[239 * -12 + -2463 + -42 * -127]), o.getTag().insertRules(r, A)), A.length = 4 * -72 + -1248 * 2 + -464 * -6;
      } else A.push(I);
    }
  }
};
function VC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Na = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(Re, "]")));
    return a[a.length - (1347 + 1346 * -1)];
  }(t), g = A !== void 0 ? A.nextSibling : null;
  e.setAttribute(Re, fa), e.setAttribute(pa, ci);
  var n = VC();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, g), e;
}, _C = function() {
  function o(i) {
    this.element = Na(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 0, g = e.length; A < g; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw It(4 * 977 + -2566 * 2 + 17 * 73);
    }(this.element), this.length = -1 * -167 + -3446 * -2 + -7059;
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
}(), zC = function() {
  function o(i) {
    this.element = Na(i), this.nodes = this.element.childNodes, this.length = -3609 + 5813 * 1 + 29 * -76;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -9655 * -1 + 1 * 467 + -10122) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), XC = function() {
  function o(i) {
    this.rules = [], this.length = 745 * 13 + -68 * -11 + -10433;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, 4751 + -1601 * -1 + -6352, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, 1), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), _n = _g, $C = { isServer: !_g, useCSSOMInjection: !wC }, Fa = function() {
  function o(i, t, e) {
    i === void 0 && (i = At), void (-2043 * -4 + -2459 + -29 * 197) === t && (t = {});
    var A = this;
    this.options = wA(wA({}, $C), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && _g && _n && (_n = !1, function(g) {
      for (var n = document.querySelectorAll(PC), I = 0, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(Re) !== fa && (ZC(g, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), Xg(this, function() {
      return function(g) {
        for (var n = g.getTag(), I = n.length, a = "", r = function(C) {
          var E = function(c) {
            return Mo.get(c);
          }(C);
          if (void (1 * 9539 + 721 + 5130 * -2) === E) return "continue";
          var B = g.names.get(E), x = n.getGroup(C);
          if (void (-1466 + -17 * -233 + -2495) === B || 7870 + -101 * 15 + -1 * 6355 === x.length) return "continue";
          var d = "".concat(Re, ".g").concat(C, '[id="').concat(E, '"]'), u = "";
          void (-2689 * 2 + 5969 + 197 * -3) !== B && B.forEach(function(c) {
            c.length > 163 * -6 + 130 * 21 + -876 * 2 && (u += "".concat(c, ","));
          }), a += "".concat(x).concat(d, '{content:"').concat(u, '"}').concat(Vg);
        }, s = -676 * -6 + 28 * 354 + -144 * 97; s < I; s++) r(s);
        return a;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return Co(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return t === void 0 && (t = !0), new o(wA(wA({}, this.options), i), this.gs, t && this.names || void (3 * -1451 + 117 * 7 + 3534));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 0) + (-3085 + -2 * -1543);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new XC(A) : e ? new _C(A) : new zC(A);
    }(this.options), new HC(i)));
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
    this.tag = void (-2274 + 758 * 3);
  }, o;
}(), AB = /&/g, eB = /^\s*\/\/.*$/gm;
function Sa(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Sa(t.children, i)), t;
  });
}
function Ra(o) {
  var i, t, e, A = o === void 0 ? At : o, g = A.options, n = void (4 * 103 + 2075 + -2487 * 1) === g ? At : g, I = A.plugins, a = I === void 0 ? Ei : I, r = function(E, B, x) {
    return x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 4829 * -1 + 1 * 7848 + -3019 ? ".".concat(i) : E;
  }, s = a.slice();
  s.push(function(E) {
    E.type === Ci && E.value.includes("&") && (E.props[8409 * -1 + 4356 + 4053] = E.props[-2740 + 685 * 4].replace(AB, t).replace(e, r));
  }), n.prefix && s.push(yC), s.push(hC);
  var C = function(E, B, x, d) {
    void (3 * -723 + -2138 + -59 * -73) === B && (B = ""), void (-2 * -1172 + -503 * 14 + 4698) === x && (x = ""), void (-15258 + 3 * 5086) === d && (d = "&"), i = d, t = B, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = E.replace(eB, ""), c = lC(x || B ? "".concat(x, " ").concat(B, " { ").concat(u, " }") : u);
    n.namespace && (c = Sa(c, n.namespace));
    var h = [];
    return Ro(c, fC(s.concat(pC(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(E, B) {
    return B.name || It(-8002 + 1 * 6009 + -1 * -2008), he(E, B.name);
  }, ya).toString() : "", C;
}
var tB = new Fa(), ag = Ra(), $g = Se.createContext({ shouldForwardProp: void 0, styleSheet: tB, stylis: ag });
$g.Consumer;
var oB = Se.createContext(void (-1720 + 1429 * 3 + -2567));
function rg() {
  return Ee($g);
}
function iB(o) {
  var i = xA(o.stylisPlugins), t = i[8 * -194 + -1 * -1259 + 293], e = i[7459 + 226 * -33], A = rg().styleSheet, g = hA(function() {
    var s = A, C = {};
    return C.useCSSOMInjection = !1, o.sheet ? s = o.sheet : o.target && (s = s.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (s = s.reconstructWithOptions(C)), s;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), n = hA(function() {
    var s = {};
    s.namespace = o.namespace, s.prefix = o.enableVendorPrefixes;
    var C = {};
    return C.options = s, C.plugins = t, Ra(C);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  P(function() {
    gC(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var I = hA(function() {
    var s = {};
    return s.shouldForwardProp = o.shouldForwardProp, s.styleSheet = g, s.stylis = n, s;
  }, [o.shouldForwardProp, g, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, Se.createElement($g.Provider, a, Se.createElement(oB.Provider, r, o.children));
}
var zn = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, g) {
      void (-5967 + -391 * 17 + 6307 * 2) === g && (g = ag);
      var n = e.name + g.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, g(e.rules, n, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, Xg(this, function() {
      throw It(-1757 + -6398 * 1 + -8167 * -1, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return void (-312 * -8 + 1 * -6521 + 4025) === i && (i = ag), this.name + i.hash;
  }, o;
}(), gB = function(o) {
  return o >= "A" && o <= "Z";
};
function Xn(o) {
  for (var i = "", t = 0; t < o.length; t++) {
    var e = o[t];
    if (1053 + -305 * -23 + 8067 * -1 === t && e === "-" && o[543 + 1 * 4019 + 1 * -4562] === "-") return o;
    gB(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Ma = function(o) {
  return o == null || o === !1 || o === "";
}, va = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var g = o[A];
    o.hasOwnProperty(A) && !Ma(g) && (Array.isArray(g) && g.isCss || et(g) ? e.push("".concat(Xn(A), ":"), g, ";") : tt(g) ? e.push.apply(e, _e(_e(["".concat(A, " {")], va(g), !1), ["}"], !1)) : e.push("".concat(Xn(A), ": ").concat((i = A, (t = g) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -1 * 3305 + 2479 + -826 * -1 === t || i in DC || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Ne(o, i, t, e) {
  if (Ma(o)) return [];
  if (zg(o)) return [".".concat(o.styledComponentId)];
  if (et(o)) {
    if (!et(g = o) || g.prototype && g.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return O.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof zn || tt(A) || A === null || console.error("".concat(wa(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ne(A, i, t, e);
  }
  var g;
  return o instanceof zn ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : tt(o) ? va(o) : Array.isArray(o) ? Array.prototype.concat.apply(Ei, o.map(function(n) {
    return Ne(n, i, t, e);
  })) : [o.toString()];
}
function nB(o) {
  for (var i = -6392 + 4 * 1598; i < o.length; i += 1151 * -3 + -382 + -14 * -274) {
    var t = o[i];
    if (et(t) && !zg(t)) return !1;
  }
  return !0;
}
var IB = Da(ci), aB = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = O.NODE_ENV === "production" && (void (-6403 + -1 * -7103 + -14 * 50) === e || e.isStatic) && nB(i), this.componentId = t, this.baseHash = he(IB, t), this.baseStyle = e, Fa.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = pe(A, this.staticRulesId);
      else {
        var g = Vn(Ne(this.rules, i, t, e)), n = ng(he(this.baseHash, g) >>> -1 * -634 + 3207 * 3 + -10255);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(g, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = pe(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = he(this.baseHash, e.hash), r = "", s = 76 * 98 + 3088 + -5268 * 2; s < this.rules.length; s++) {
        var C = this.rules[s];
        if (typeof C == "string") r += C, O.NODE_ENV !== "production" && (a = he(a, C));
        else if (C) {
          var E = Vn(Ne(C, i, t, e));
          a = he(a, E + s), r += E;
        }
      }
      if (r) {
        var B = ng(a >>> 0);
        t.hasNameForId(this.componentId, B) || t.insertRules(this.componentId, B, e(r, ".".concat(B), void (2750 + 25 * -110), this.componentId)), A = pe(A, B);
      }
    }
    return A;
  }, o;
}(), La = Se.createContext(void 0);
La.Consumer;
var Fi = {}, $n = /* @__PURE__ */ new Set();
function rB(o, i, t) {
  var e = zg(o), A = o, g = !Ni(o), n = i.attrs, I = void (-137 * -8 + 3453 + -1 * 4549) === n ? Ei : n, a = i.componentId, r = void (767 * 2 + 6193 + -7727) === a ? function(v, k) {
    var y = typeof v != "string" ? "sc" : Tn(v);
    Fi[y] = (Fi[y] || 37 * 241 + -152 + -8765) + (-1768 * -4 + -913 + -6158);
    var K = "".concat(y, "-").concat(FC(ci + y + Fi[y]));
    return k ? "".concat(k, "-").concat(K) : K;
  }(i.displayName, i.parentComponentId) : a, s = i.displayName, C = void (-5433 + -652 * -10 + 1087 * -1) === s ? function(v) {
    return Ni(v) ? "styled.".concat(v) : "Styled(".concat(wa(v), ")");
  }(o) : s, E = i.displayName && i.componentId ? "".concat(Tn(i.displayName), "-").concat(i.componentId) : i.componentId || r, B = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, x = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var u = i.shouldForwardProp;
      x = function(v, k) {
        return d(v, k) && u(v, k);
      };
    } else x = d;
  }
  var c = new aB(t, E, e ? A.componentStyle : void 0);
  function h(v, k) {
    return function(y, K, BA) {
      var AA = y.attrs, FA = y.componentStyle, Z = y.defaultProps, Bt = y.foldedComponentIds, xn = y.styledComponentId, $0 = y.target, Ar = Se.useContext(La), er = rg(), fi = y.shouldForwardProp || er.shouldForwardProp;
      O.NODE_ENV !== "production" && So(xn);
      var dn = bC(K, Ar, Z) || At, VA = function(io, ct, go) {
        var Je = {};
        Je.className = void (6834 + -1901 * -1 + -8735), Je.theme = go;
        for (var Di, xe = wA(wA({}, ct), Je), wi = 2126 * 1 + -4321 + 2195; wi < io.length; wi += -2851 * -1 + -3 * 163 + -1 * 2361) {
          var no = et(Di = io[wi]) ? Di(xe) : Di;
          for (var ge in no) xe[ge] = ge === "className" ? pe(xe[ge], no[ge]) : ge === "style" ? wA(wA({}, xe[ge]), no[ge]) : no[ge];
        }
        return ct.className && (xe.className = pe(xe.className, ct.className)), xe;
      }(AA, K, dn), Qt = VA.as || $0, st = {};
      for (var SA in VA) void (-15390 + 30 * 513) === VA[SA] || SA[43 * 83 + -8392 + -371 * -13] === "$" || SA === "as" || SA === "theme" && VA.theme === dn || (SA === "forwardedAs" ? st.as = VA.forwardedAs : fi && !fi(SA, Qt) || (st[SA] = VA[SA], fi || O.NODE_ENV !== "development" || ur(SA) || $n.has(SA) || !gg.has(Qt) || ($n.add(SA), console.warn('styled-components: it looks like an unknown prop "'.concat(SA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pi = function(io, ct) {
        var go = rg(), Je = io.generateAndInjectStyles(ct, go.styleSheet, go.stylis);
        return O.NODE_ENV !== "production" && So(Je), Je;
      }(FA, VA);
      O.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(pi);
      var yi = pe(Bt, xn);
      return pi && (yi += " " + pi), VA.className && (yi += " " + VA.className), st[Ni(Qt) && !gg.has(Qt) ? "class" : "className"] = yi, st.ref = BA, uA(Qt, st);
    }(m, v, k);
  }
  h.displayName = C;
  var m = Se.forwardRef(h), F = {};
  return F.attrs = !0, F.componentStyle = !0, F.displayName = !0, F.foldedComponentIds = !0, F.shouldForwardProp = !0, F.styledComponentId = !0, F.target = !0, m.attrs = B, m.componentStyle = c, m.displayName = C, m.shouldForwardProp = x, m.foldedComponentIds = e ? pe(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = E, m.target = e ? A.target : o, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = e ? function(k) {
      for (var y = [], K = -1025 * -5 + -1373 * 3 + -335 * 3; K < arguments.length; K++) y[K - (435 * 5 + 1845 + 1 * -4019)] = arguments[K];
      for (var BA = 2372 + 13 * -331 + -1 * -1931, AA = y; BA < AA.length; BA++) Ig(k, AA[BA], !0);
      return k;
    }({}, A.defaultProps, v) : v;
  } }), O.NODE_ENV !== "production" && (mC(C, E), m.warnTooManyClasses = /* @__PURE__ */ function(v, k) {
    var y = {}, K = !1;
    return function(BA) {
      if (!K && (y[BA] = !0, Object.keys(y).length >= -9110 + 1 * -6263 + 15573)) {
        var AA = k ? ' with the id of "'.concat(k, '"') : "";
        console.warn("Over ".concat(-1 * -8013 + 151 * -7 + 3378 * -2, " classes were generated for component ").concat(v).concat(AA, `.
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
  }(C, E)), Xg(m, function() {
    return ".".concat(m.styledComponentId);
  }), g && ka(m, o, F), m;
}
function AI(o, i) {
  for (var t = [o[-9457 * -1 + 793 * -11 + -734]], e = 1 * -1929 + 7343 * 1 + -2707 * 2, A = i.length; e < A; e += 7292 + -1 * 7291) t.push(i[e], o[e + (17269 + -12 * 1439)]);
  return t;
}
var eI = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function Ja(o) {
  for (var i = [], t = -568 * -9 + 1924 + -7035; t < arguments.length; t++) i[t - (-2008 + -1 * 9047 + -1 * -11056)] = arguments[t];
  if (et(o) || tt(o)) return eI(Ne(AI(Ei, _e([o], i, !0))));
  var e = o;
  return -785 + -251 * 21 + -6056 * -1 === i.length && 1 * -1145 + -2221 + 3367 === e.length && typeof e[-9 * -55 + 1 * -1675 + 1180] == "string" ? Ne(e) : eI(Ne(AI(e, i)));
}
function Cg(o, i, t) {
  if (void (-1 * 3727 + 4625 + 898 * -1) === t && (t = At), !i) throw It(961 * 4 + -43 * -14 + 35 * -127, i);
  var e = function(A) {
    for (var g = [], n = 3123 * -2 + 8129 + -1882; n < arguments.length; n++) g[n - (8090 + -96 * -43 + -12217 * 1)] = arguments[n];
    return o(i, t, Ja.apply(void (1 * -3427 + 9137 + 5710 * -1), _e([A], g, !1)));
  };
  return e.attrs = function(A) {
    return Cg(o, i, wA(wA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Cg(o, i, wA(wA({}, t), A));
  }, e;
}
var Ua = function(o) {
  return Cg(rB, o);
}, at = Ua;
gg.forEach(function(o) {
  at[o] = Ua(o);
});
O.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Bo = "__sc-".concat(Re, "__");
O.NODE_ENV !== "production" && O.NODE_ENV !== "test" && typeof window < "u" && (window[Bo] || (window[Bo] = -2407 * -4 + 5 * -1202 + -18 * 201), -1998 + -1 * -4889 + -34 * 85 === window[Bo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Bo] += -4962 + -541 * 5 + -12 * -639);
const CB = at.div`
  position: relative;
`, BB = at.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class U extends Error {
  constructor(t, e) {
    super(t);
    w(this, "cause");
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
const Do = {};
Do.CONTINUE_DETECTION = "continue-detection", Do.SWITCH_CAMERA = "switch-camera", Do.TOGGLE_MIRROR = "toggle-mirror";
const Si = Do, Bg = {};
Bg.FIRST_FRAME = "first-frame", Bg.FIRST_VALID_FRAME = "first-valid-frame";
const Ri = Bg, Ya = {};
Ya.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const tI = Ya;
var Wa = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(Wa || {}), Be = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(Be || {}), St = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(St || {}), QB = ((o) => (o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(QB || {}), sB = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(sB || {}), cB = ((o) => (o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(cB || {});
const Oa = {};
Oa.EYE_NOT_PRESENT = "eye_not_present";
const oI = Oa, dA = {};
dA.CANDIDATE_SELECTION = "candidate_selection", dA.FACE_TOO_CLOSE = "face_too_close", dA.FACE_TOO_FAR = "face_too_far", dA.FACE_CENTERING = "face_centering", dA.FACE_NOT_PRESENT = "face_not_present", dA.SHARPNESS_TOO_LOW = "sharpness_too_low", dA.BRIGHTNESS_TOO_LOW = "brightness_too_low", dA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", dA.DEVICE_PITCHED = "device_pitched", dA.LEFT_EYE_NOT_PRESENT = "left_" + oI.EYE_NOT_PRESENT, dA.RIGHT_EYE_NOT_PRESENT = "right_" + oI.EYE_NOT_PRESENT, dA.MOUTH_NOT_PRESENT = "mouth_not_present", dA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", dA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const iA = dA, pA = {};
pA.isPresent = iA.FACE_NOT_PRESENT, pA.isNotPitched = iA.DEVICE_PITCHED, pA.isNotSmall = iA.FACE_TOO_FAR, pA.isNotLarge = iA.FACE_TOO_CLOSE, pA.isNotOutOfBounds = iA.FACE_CENTERING, pA.isNotDim = iA.BRIGHTNESS_TOO_LOW, pA.isNotBright = iA.BRIGHTNESS_TOO_HIGH, pA.isSharp = iA.SHARPNESS_TOO_LOW, pA.isLeftEyePresent = iA.LEFT_EYE_NOT_PRESENT, pA.isRightEyePresent = iA.RIGHT_EYE_NOT_PRESENT, pA.isMouthPresent = iA.MOUTH_NOT_PRESENT, pA.isMouthScoreNotTooHigh = iA.MOUTH_SCORE_TOO_HIGH, pA.isMouthScoreNotTooLow = iA.MOUTH_SCORE_TOO_LOW;
const EB = pA, Qg = {};
Qg.FRONT = "user", Qg.REAR = "environment";
const An = Qg, sg = {};
sg.AUTO_CAPTURE = "AUTO_CAPTURE", sg.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Ha = sg, ut = {};
ut.LOADING = "LOADING", ut.ERROR = "ERROR", ut.WAITING = "WAITING", ut.RUNNING = "RUNNING";
const PA = ut;
({ ...iA });
var DA = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(DA || {});
const Ka = { ...PA };
Ka.DONE = "DONE";
const ee = Ka;
({ ...iA });
({ ...iA });
const xi = ot(void 0);
xi.displayName = "AppStateContext";
function rt() {
  const o = Ee(xi);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const xB = xi.Provider, Ta = rt;
class Pa extends MA {
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
    return ((i = this.context) == null ? void 0 : i.appState) === PA.ERROR ? null : this.props.children;
  }
}
w(Pa, "contextType", xi);
const dB = at.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, lB = at.div`
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
function uB() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const hB = ta(
  ({ detectionDetails: o, isImageMirror: i }, t) => uB() ? (console.log(o), /* @__PURE__ */ p(LA, { children: [
    /* @__PURE__ */ p(dB, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ p(lB, { children: /* @__PURE__ */ p("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), vo = ot(void 0);
vo.displayName = "AnalyticsContext";
function qa() {
  const o = Ee(vo);
  if (o === void 0)
    throw new Error(`${vo.displayName} must be used within a AnalyticsProvider`);
  return o;
}
function ja(o, i, t, e, A) {
  return sA(A - 46, t);
}
function Lo() {
  const o = ["WOBcK8kQuHJdPWm4qa4", "FCoyW6S5wmoaWQueumo8WQi0xW", "WORdIcNcP1ldKrddLMXUkG", "W5KojCklW6OtW4VcIW", "W5WpxmoqWOudW6JcICo9F8o8", "ECkBWPtdUSoaW4ZcVmoDwNLxWQBdUWK", "W541WR/dSYldNX1vWRa", "W7BcThpcImkE", "WQ/dJsNcMG7dKSolyq", "n38Wya5wmXW", "cKHstwq", "bruUWOui", "W5C3WR/cQ3/cG25CWPRdRtLWrG", "e0ddNNBcVq", "z8oBWO91iM0lW5hdVCkMga", "eaPJuW8", "hSoOW6PtWRa", "WQ/dJ8ow", "CCoFW48ozSoAWOzEc8o/nSo0W4ZcNW", "WR3dR8oNoSodW6e6W650", "W7RcMmkCWOBcIYZdJLlcUCk9WP1U", "WRKeW4LXbKtdQLfM", "D8ovW45wdCkIW4i0ca", "WO3cMSkJW6KnFe/cI8k7EMVdUG", "tuC7W5bOW5nsW6bsDa", "W6VdI8keW7/dKW", "g8oAWQlcIYO", "W4zUW5bmgcW3W6/dRW", "qvSOW51XlCo9WRS", "wubKux4", "omkkWQv4", "laDIWPzI", "W6/dHx3dL8ko", "hHCtdcCCWQPCumoipG", "zKRcSav8W5RcJmkIW7hcVbdcT8kx", "tum0W5C8WOeoW5XmACo6bCor", "WOiWFColjCk8C8kJWRy", "W5ddVmoeW7xdOG", "fWz+uay"];
  return Lo = function() {
    return o;
  }, Lo();
}
(function(o, i) {
  function t(I, a, r, s, C) {
    return sA(r - 976, a);
  }
  function e(I, a, r, s, C) {
    return sA(C - -345, r);
  }
  function A(I, a, r, s, C) {
    return sA(I - 516, a);
  }
  const g = o();
  function n(I, a, r, s, C) {
    return sA(r - -338, a);
  }
  for (; ; )
    try {
      if (parseInt(n(-15, "E83z", -34, -32, -31)) / 1 * (parseInt(n(-52, "TsIo", -53, -53, -67)) / 2) + -parseInt(t(1253, "[W^3", 1259, 1247, 1267)) / 3 + -parseInt(t(1236, "9tx&", 1255, 1247, 1258)) / 4 * (-parseInt(n(-65, "TsIo", -52, -33, -58)) / 5) + -parseInt(e(-28, -39, "TTnD", -32, -39)) / 6 * (-parseInt(e(-75, -45, "MGx%", -64, -61)) / 7) + -parseInt(A(804, "hT(h", 788, 812, 792)) / 8 * (parseInt(n(-38, "foll", -33, -20, -16)) / 9) + -parseInt(A(794, "TTnD", 790, 789, 784)) / 10 + parseInt(e(-70, -71, "mGwE", -52, -54)) / 11 * (parseInt(A(816, "E83z", 820, 823, 816)) / 12) === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Lo, 67961 * 1 + -519 * -2979 + 1 * -796944);
function iI(o, i, t, e, A) {
  return sA(e - -141, t);
}
function cg(o, i, t, e, A) {
  return sA(e - -255, A);
}
function fB(o, i, t, e, A) {
  return sA(t - -387, e);
}
const Jo = ot(void (248 * 2 + 3573 + -4069));
function sA(o, i) {
  const t = Lo();
  return sA = function(e, A) {
    e = e - (9365 + 9087 * -1);
    let g = t[e];
    if (sA.lluCFJ === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      sA.eKMrXJ = s, o = arguments, sA.lluCFJ = !0;
    }
    const I = t[1101 * 4 + -9534 * -1 + -13938], a = e + I, r = o[a];
    return r ? g = r : (sA.dvnWnB === void 0 && (sA.dvnWnB = !0), g = sA.eKMrXJ(g, A), o[a] = g), g;
  }, sA(o, i);
}
Jo[cg(32, 43, 51, 34, "fKm)") + iI(162, 166, "VHZ0", 154) + "e"] = iI(138, 148, "ba4]", 152) + cg(58, 61, 62, 56, "C@4H") + ja(367, 362, "[W^3", 346, 358);
function eo() {
  function o(A, g, n, I, a) {
    return fB(A - 71, g - 241, n - 920, I);
  }
  const i = Ee(Jo);
  function t(A, g, n, I, a) {
    return cg(A - 117, g - 63, n - 193, A - 446, g);
  }
  function e(A, g, n, I, a) {
    return ja(A - 14, g - 431, n, I - 458, A - 81);
  }
  if (i === void 0) throw new Error(Jo[e(424, 426, "N0!3", 438) + t(489, "5hl$", 477) + "e"] + (o(829, 820, 825, "C@4H") + e(407, 419, "Vt]X", 393) + o(866, 862, 847, "2^RU") + t(499, "oNtj", 490) + e(434, 414, "Hive", 438) + o(830, 828, 814, "N0!3") + o(834, 856, 846, "TTnD") + e(426, 429, "Hive", 436)));
  return i;
}
const Rt = (o) => o.length < 7926 + 4510 * 1 + -12435 ? 3 * 1123 + -5726 + 2357 : o.reduce((t, e) => t + e, -35 * 11 + 505 * -10 + 5435) / o.length, ie = (o) => Number.parseFloat(o.toFixed(-225 * -34 + 2481 * 4 + -17571)), pB = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(0, -5 * -1889 + 3235 * -2 + 25 * -119, i.canvas.width, i.canvas.height);
}, Za = 2 * 3581 + -1 * 4933 + -3 * 743 + 0.75, yB = -1237 * -5 + 2906 + -9089, DB = 600, wB = -7718 * -1 + 8214 + 3983 * -4, mB = "dot-auto-capture-video", di = (o, i) => Math.min(o, i), Va = ({ height: o, width: i }, t) => {
  const e = di(i, o) * t, A = (i - e) / (1574 * 1 + 119 * 40 + -6332), g = (o - e) / (7 * 307 + 43 * -1 + -2104), n = {};
  return n.shiftX = A, n.shiftY = g, n.width = e, n.height = e, n;
}, bB = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = Va(o, i), n = {};
  return n.shiftX = e / o.width, n.shiftY = A / o.height, n.width = g / o.width, n.height = t / o.height, n;
}, GB = ({ height: o, width: i }) => {
  const t = di(i, o), e = t / (-9210 + -1 * 5716 + -14929 * -1) * (-7461 + 1067 * 7 + -4);
  if (i > o) {
    const g = {};
    return g.width = e, g.height = t, g;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, kB = (o, i) => {
  const t = di(i.width, i.height);
  return ie(o * t);
}, NB = ({ height: o, width: i }) => {
  const t = {};
  return t.height = o, t.width = i, Va(t, Za);
}, FB = (o) => bB(o, Za), SB = (o, i) => kB(o, i) * yB, RB = "@innovatrics/dot-common-auto-capture", MB = "7.1.2", vB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, LB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, JB = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, UB = {
  name: RB,
  private: !0,
  version: MB,
  scripts: vB,
  dependencies: LB,
  devDependencies: JB
}, YB = -5280 + -826 * 11 + 14366 + 0.4, WB = -1214 * -4 + 6244 + -11100 + 0.16, OB = 4367 + 6833 * 1 + -11200 + 0.2, HB = 1 * -8052 + 3 * 1949 + 2205 + 0.05, KB = -1 * 7109 + 1741 + 5368, Eg = {};
Eg.min = -(7186 + 3 * 2351 + -2034 * 7), Eg.max = 1;
const gI = Eg, nI = 4369 + -56 * -24 + -5713 * 1, TB = 18 * -148 + 5978 + 3314 * -1 + 0.25, PB = 10656 + -4 * 2664 + 0.2, qB = 7267 + -1 * 1315 + 48 * -124 + 0.85, jB = 7484 + -9305 * 1 + 1851 * 1, ZB = 9 + 0.8100000000000005, wo = {};
wo.minDuration = 1e3, wo.maxDuration = 2500, wo.minFrames = 10;
const Mi = wo, xg = {};
xg.max = 100, xg.min = 10;
const II = xg, VB = 140 * 61 + 7982 + 2 * -7901, _B = -41 + -1 * -719 + 478 * -1, zB = -61 * 83 + 791 * 12 + 1475 * -3, ht = {};
ht.width = 200, ht.height = 200, ht.top = 50, ht.left = 50;
const XB = ht, _a = "AES-CBC", za = "RSA-OAEP", $B = "SHA-256", AQ = "image/jpeg", eQ = 8, tQ = 40, Xa = "/dot-assets", aI = "dot_embedded_bg.wasm", $a = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), rI = () => {
  const o = /Android/i.test(navigator.userAgent), i = /Firefox/i.test(navigator.userAgent);
  return o && i;
}, oQ = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, dg = (o) => new Promise((i) => {
  setTimeout(i, o);
}), A0 = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? ie(t) : t)), e0 = () => UB.version, t0 = (o) => new URL(o).hostname.replace("www.", ""), iQ = () => t0(window.location.href) === "localhost", Qo = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), gQ = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o, CI = (o, i) => Math.abs(o - i);
function nQ(o, i) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, o(...e);
    };
    t === void (8743 + -8743 * 1) && (t = setTimeout(A, i));
  };
}
function IQ(o) {
  return o.at(-(5790 + -1 * 5789)) === "/" ? o.slice(404 + -9281 * -1 + -9685, -(-1 * 8971 + -2035 + -3669 * -3)) : o;
}
function o0(o) {
  return "" + IQ(o ?? "") + Xa;
}
const aQ = () => "prod".toLowerCase() === "dev";
var re;
class en extends Array {
  constructor(t) {
    super();
    W(this, re);
    J(this, re, t);
  }
  get size() {
    return D(this, re);
  }
  pushFixed(...t) {
    if (t.length > D(this, re)) {
      const e = t.slice(-D(this, re));
      this.push(...e);
      return;
    }
    this.length === D(this, re) && this.splice(1 * -6018 + -7071 + -1 * -13089, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(2092 * -1 + -6 * -937 + -3530);
  }
}
re = new WeakMap();
const i0 = (o, i, t = AQ) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), g0 = async (o) => i0(o, 542 * -8 + -2557 * -3 + -3245), rQ = async (o) => i0(o, 10149 + -10049 * 1, "image/png"), n0 = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, -1 * -3793 + 9732 + -13525 * 1, -6274 * 1 + 383 * -6 + 8572, t.width, t.height), t;
}, CQ = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(2958 * -1 + 1944 * 1 + -1 * -1014, 2 * -2861 + 3564 * -2 + -1285 * -10, o.width, o.height);
  return t;
};
function BI(o, i, t) {
  return t - i / (1149 + -3701 * 1 + -1277 * -2) < -9430 + -46 * -205 ? -103 * 22 + -1 * 3203 + 5469 : t + i / (-4 * -2500 + -4446 + 694 * -8) > o ? o - i : t - i / 2;
}
function BQ(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / 100), g = e * (i.top / (8002 + -6 * -170 + -3 * 2974));
  return { width: i.width, height: i.height, shiftX: BI(t, i.width, A), shiftY: BI(e, i.height, g) };
}
async function QQ(o, i) {
  const t = BQ(o, i), e = n0(o, t);
  return rQ(e);
}
const I0 = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), A.stroke());
}, vi = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: g, width: n } = i, I = {};
  I.x = A, I.y = g;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, I0(o, a, t);
}, bt = (o, i, t, e = 1 * 2293 + -9258 + -5 * -1393) => {
  const A = o.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(i.x + e, i.y + e, 6651 + 311 * 24 + -1 * 14108, 1 * -9939 + -8118 + -18064 * -1), A.beginPath());
}, sQ = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: g } = i;
  return !(o.x < e || o.x > e + g || o.y < A || o.y > A + t);
}, cQ = (o, i) => Object.values(o).every((t) => sQ(t, i));
function Uo(o) {
  const { height: i, width: t } = GB(o), e = (o.width - t) / (-1 * -6049 + -4451 * -1 + -10498), A = (o.height - i) / (5 * -101 + -407 * -20 + 17 * -449), g = {};
  return g.shiftX = e, g.shiftY = A, g.width = t, g.height = i, g;
}
function a0(o, i, t) {
  const { height: e, width: A } = t, g = di(o.width, o.height), n = A - g * i * (6603 + 2 * 2998 + -12597), I = e - g * i * (-3941 + 1 * 3943), a = (o.width - n) / (-6371 + -1 * -6373), r = (o.height - I) / (-641 + -1 * -643), s = {};
  return s.shiftX = a, s.shiftY = r, s.width = n, s.height = I, s;
}
function Ye(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
function Yo() {
  const o = ["gSosWRqXW4G", "yCoZomkihNBdGhLhv0ldQmkCFW", "W6tcJZ9qnJxcJLC", "cSkSwrxcL1Os", "gMimWODsWRTEW4hdP8koW64i", "W4vSdCkNW7WUW6uyArtcVG", "W44Whx1kWQxdQLm", "o8ojW7ldQCkYW6fOW70", "WOLBWO7dNwpcRCopW4BcSSo5WPxdUa", "zuRcUuVcGJady8kolCovWQi", "ESkCxCkxxXDZFSknbSkuDNW", "WQ1Sx1y6WPn6W5ny", "WOVdJ8kDgZeXWRL1AK/dUW", "WPDPcM1m", "aSkLECoiqa", "h2qlWOvvW5zfW6NdL8kJW4u", "WPPZWPezW4O", "yaldN186ltddSa", "W6BcJ1OaFgddTuTkBG0Qiq", "WPH1W7rIWR0", "E8kfF8kmW6i", "y8kFW7JdRG", "o8oUW4BdHcpcK8kgW6VcUmoEWRZdLmogtW", "WOZdG8kDg3yFWO1ux3K", "WP3cM8oQiCo1mHHsqa", "pmoLW4tdHIxdVmoKWPlcGSorWP8", "W44VW5nLWPxcVmosEmoPcSkA", "W4OZWQSMWR0wWRHIWOrS", "ymkYW4bmW5TpW4tcJxddK00", "W6pdStD4jYZcOG", "uCohy8kiWQmZWPhcOCoDW5ioW70"];
  return Yo = function() {
    return o;
  }, Yo();
}
(function(o, i) {
  function t(a, r, s, C, E) {
    return rA(a - 349, s);
  }
  const e = o();
  function A(a, r, s, C, E) {
    return rA(s - 243, r);
  }
  function g(a, r, s, C, E) {
    return rA(E - -145, C);
  }
  function n(a, r, s, C, E) {
    return rA(s - -970, r);
  }
  function I(a, r, s, C, E) {
    return rA(r - -844, E);
  }
  for (; ; )
    try {
      if (-parseInt(g(112, 108, 96, "i8n*", 101)) / 1 + parseInt(A(480, "pQDJ", 492, 495, 497)) / 2 * (parseInt(n(-744, "xtSe", -735, -735, -746)) / 3) + -parseInt(n(-731, "cUV&", -722, -725, -724)) / 4 * (-parseInt(t(570, 581, "Oa6M", 570, 581)) / 5) + -parseInt(I(-612, -612, -623, -603, "FQOY")) / 6 * (parseInt(n(-748, ")SrD", -737, -750, -746)) / 7) + -parseInt(t(596, 585, "i%Qv", 580, 601)) / 8 * (-parseInt(g(99, 90, 105, "Tiq0", 99)) / 9) + -parseInt(t(577, 574, "l)RZ", 564, 580)) / 10 * (-parseInt(A(476, "xtSe", 482, 495, 473)) / 11) + -parseInt(I(-601, -603, -610, -606, "Oa6M")) / 12 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Yo, 673359);
function rA(o, i) {
  const t = Yo();
  return rA = function(e, A) {
    e = e - (3579 + -2413 * 1 + -945);
    let g = t[e];
    if (rA.KVaFul === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      rA.kToQxR = s, o = arguments, rA.KVaFul = !0;
    }
    const I = t[3886 + 67 * -58], a = e + I, r = o[a];
    return r ? g = r : (rA.uOZilA === void 0 && (rA.uOZilA = !0), g = rA.kToQxR(g, A), o[a] = g), g;
  }, rA(o, i);
}
function EQ({ assetsDirectoryPath: o, bramble: i }) {
  const [t, e] = xA();
  function A(a, r, s, C, E) {
    return rA(a - -121, r);
  }
  const g = t !== void (4499 + 1121 * 2 + 2247 * -3);
  P(() => {
    async function a() {
      function r(C, E, B, x, d) {
        return rA(d - 763, B);
      }
      function s(C, E, B, x, d) {
        return rA(d - 246, E);
      }
      await i[r(995, 984, "Tiq0", 976, 990)](o0(o)), e(i[r(971, 997, "FQOY", 998, 985) + r(988, 1001, "ZcXj", 998, 1e3) + s(502, "z2&c", 494, 508, 497) + "t"]());
    }
    a();
  }, [i, o, e]);
  function n(a, r, s, C, E) {
    return rA(a - 95, E);
  }
  const I = {};
  return I[n(320, 327, 309, 321, ")SrD") + A(129, "fHVa")] = t, I[A(105, "ypA]") + "sh"] = g, I;
}
var r0 = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(r0 || {});
const lg = {};
lg.SIMD = "simd", lg.NO_SIMD = "no-simd";
const QI = lg, ug = {};
ug.Lower = "Lower", ug.Higher = "Higher";
const hg = ug, mo = {};
mo.VISIBLE = "VISIBLE", mo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", mo.HIDDEN = "HIDDEN";
const Gt = mo;
function Wo() {
  var o = ["ESkiv2DxW51IW6C", "W5BcHCosW77dIXJcJvzz", "WPxdN8ksW5xcUs5mb8o3Br14WPS", "zW9WCfrjwmoLv8kXWR5b", "BCoBWQH8W6xcGdvkemkntq", "emk4WO5AcCo+W6pdIG", "jvf3WQSYWRHYzJCm", "W5mqzGddRCk9jmoGWOhcTCoZWOm", "WPy+r8ktCIVcMK4", "gt/cLSomWQj/xaLig8oj", "fmk/W5mTFSoTW6FdPmoEwXe", "WRlcKx1PC8oEuMtdSZuD", "emkhW7GTWRe", "AXBdJd3dJxBcUfS", "iColtNfq", "W7VcMtpdQxlcRmk4WPRcHq", "WRhcLxrSEmoTyuJdGW4b", "ESklicqfW6fuW6nrW51E", "W5GiWQqjW7hcRSo9W4zqW4S", "WRSakCkbn8kGaX3dStdcLfiw", "jCkMamkKySovFSk0WOLPlW", "W5Grg07cTSomaCox", "wmo+rSoWiG", "W4BcLmkhW5dcO15wcCoyWRu", "WP/cJmkbWOy8WPxdQCkxWQay", "iZqzexlcRCojW6C", "Amk8jmkkW6eUtSk8WPFcUWK"];
  return Wo = function() {
    return o;
  }, Wo();
}
function lA(o, i) {
  var t = Wo();
  return lA = function(e, A) {
    e = e - (7924 + 7669 * -1);
    var g = t[e];
    if (lA.iOzITu === void 0) {
      var n = function(C) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", x = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var m = 0, F = B.length; m < F; m++)
          x += "%" + ("00" + B.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, I = function(C, E) {
        var B = [], x = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      lA.EVjruc = I, o = arguments, lA.iOzITu = !0;
    }
    var a = t[-8 * 960 + 3867 * 1 + 3813], r = e + a, s = o[r];
    return s ? g = s : (lA.LEKtKV === void 0 && (lA.LEKtKV = !0), g = lA.EVjruc(g, A), o[r] = g), g;
  }, lA(o, i);
}
(function(o, i) {
  function t(r, s, C, E, B) {
    return lA(B - -344, s);
  }
  function e(r, s, C, E, B) {
    return lA(E - -522, r);
  }
  function A(r, s, C, E, B) {
    return lA(E - -106, r);
  }
  function g(r, s, C, E, B) {
    return lA(E - -718, B);
  }
  function n(r, s, C, E, B) {
    return lA(r - -806, B);
  }
  for (var I = o(); ; )
    try {
      var a = parseInt(A("HN]7", 155, 161, 152, 149)) / 1 * (-parseInt(e("7Cw7", -247, -258, -248, -255)) / 2) + -parseInt(t(-93, "wJnd", -92, -75, -81)) / 3 + parseInt(t(-69, "UHTF", -73, -90, -80)) / 4 + parseInt(n(-536, -546, -543, -533, "26IJ")) / 5 * (-parseInt(g(-464, -463, -446, -452, "PGZx")) / 6) + -parseInt(n(-529, -516, -519, -529, "HgCg")) / 7 * (parseInt(n(-530, -538, -521, -528, "xPKU")) / 8) + parseInt(e("PGZx", -241, -258, -251, -246)) / 9 * (-parseInt(e("lwCX", -262, -264, -267, -263)) / 10) + -parseInt(t(-80, "jd5W", -78, -80, -77)) / 11 * (-parseInt(g(-437, -455, -437, -446, "HgCg")) / 12);
      if (a === i) break;
      I.push(I.shift());
    } catch {
      I.push(I.shift());
    }
})(Wo, -1 * 6637 + -171592 + 9563 * 37);
function xQ({ crosshatch: o }) {
  function i(e, A, g, n, I) {
    return lA(g - -290, I);
  }
  function t(e, A, g, n, I) {
    return lA(I - -555, e);
  }
  return o != null && o[t("t6&r", -278, -274, -279, -280) + "id"] ? hg[i(-29, -10, -17, -10, "xFfC") + "r"] : hg[t("F%]o", -286, -307, -288, -299)];
}
function Oo() {
  const o = ["BNtcMZGcDCo0", "W7fiW5JcN1ddJSkbWPxcNvhcTmoB", "be1DD8kkW6yPW4zqC8oc", "yIpdQ2z6nCoFsSkMi17cGG", "Bdf/uvRcLYpdLNZdSr9k", "WQz9fSkLW5yguSo0WOxcTCoEW6m", "jvlcUI0P", "c8k5W6Oeh1yjW5X0W73cKr/dJW", "wHrYWOhdVhNdQbtcJW", "W7mIWPzsW47dL8oGW7PlWOqHW63cMq", "W6VdGsZdP8kFeCk/WOJdL8kSWP5X", "WP9claNcVt5hma", "AYBdGZldQ3TKWQK", "WP1ay1NdSuDec8oTW7zFra", "WONdOCo6W5brm8kyWPhcVeBdTcNdJG", "WRNdVaNdG1W4WQvnFhVdPCkI", "vsRdOfxdUmknW5ldVq", "W5VcP8kSWPuq", "WRyFWQFdL1xdHYG", "jbxcHqDwWQrxWPhdMCo4WQe", "WRtdTaJcRsjjWP9rxG", "edtdKmkxWPedW7OcWPtdGSkomhy", "e8oyWPhcTvG", "W4zQm8kvW6a", "fr7cO3v2", "WRr3W4OwWPO", "WQayWPtdJWG", "CuBdGq", "WORcUCoXW4pcGG", "WRbZW4G", "WQWnWQpcN0VdQuZdJG", "W74coXNcOq", "WRq8W6lcJtHXeqSnW7hdS38", "uCkXW4vQ"];
  return Oo = function() {
    return o;
  }, Oo();
}
function cA(o, i) {
  const t = Oo();
  return cA = function(e, A) {
    e = e - (-46 * -70 + 11 * 11 + -3203);
    let g = t[e];
    if (cA.sScsxD === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      cA.nrQGQe = s, o = arguments, cA.sScsxD = !0;
    }
    const I = t[1 * -4713 + 146 * 4 + 4129], a = e + I, r = o[a];
    return r ? g = r : (cA.NCVpYP === void 0 && (cA.NCVpYP = !0), g = cA.nrQGQe(g, A), o[a] = g), g;
  }, cA(o, i);
}
(function(o, i) {
  const t = o();
  function e(I, a, r, s, C) {
    return cA(a - 510, C);
  }
  function A(I, a, r, s, C) {
    return cA(r - -68, I);
  }
  function g(I, a, r, s, C) {
    return cA(s - 287, I);
  }
  function n(I, a, r, s, C) {
    return cA(a - 881, I);
  }
  for (; ; )
    try {
      if (parseInt(n("Xc#T", 1045, 1029, 1061, 1040)) / 1 + parseInt(g("vKG5", 460, 458, 445, 453)) / 2 + parseInt(n("(ME@", 1047, 1058, 1043, 1040)) / 3 + parseInt(n("CeCP", 1048, 1055, 1054, 1034)) / 4 * (-parseInt(e(650, 664, 663, 677, "(z*u")) / 5) + parseInt(e(685, 673, 681, 673, "btun")) / 6 * (-parseInt(n("jsi^", 1030, 1046, 1047, 1046)) / 7) + -parseInt(A("(z*u", 73, 83, 78, 71)) / 8 * (parseInt(g("@qeW", 408, 439, 425, 440)) / 9) + -parseInt(e(693, 681, 692, 670, "(ME@")) / 10 * (parseInt(A("l4tz", 119, 102, 115, 104)) / 11) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Oo, 5 * 117563 + -302188 * -1 + 100189 * -5);
function dQ({ assetsDirectoryPath: o, children: i, bramble: t }) {
  const e = {};
  e[r(-346, -370, -363, -376, "hv6d") + "le"] = t, e[r(-383, -366, -368, -352, "ORlM") + A("(z*u", 165) + A("Ua%5", 147) + g(986, 1009, "jl]k", 1003, 992)] = o;
  function A(B, x, d, u, c) {
    return cA(x - 8, B);
  }
  function g(B, x, d, u, c) {
    return cA(c - 842, d);
  }
  const { sunfish: n, crosshatch: I } = EQ(e), a = {};
  a[r(-332, -330, -340, -349, "jd1%") + g(973, 988, "ib^f", 980, 985)] = I;
  function r(B, x, d, u, c) {
    return cA(d - -508, c);
  }
  const s = hA(() => ({ redfin: xQ(a), sunfish: n, crosshatch: I, bramble: t }), [n, I, t]);
  function C(B, x, d, u, c) {
    return cA(u - -109, d);
  }
  const E = {};
  return E[g(970, 979, "%OU^", 975, 984)] = s, E[C(40, 24, "czto", 32) + g(978, 986, "%OU^", 999, 988)] = i, p(Jo[g(994, 1005, "Xc#T", 1003, 990) + g(972, 972, "l4tz", 975, 986)], E);
}
function bA(o, i) {
  var t = Ho();
  return bA = function(e, A) {
    e = e - (-4407 + 191 * 52 + -5396);
    var g = t[e];
    if (bA.yuPVoG === void 0) {
      var n = function(C) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", x = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var m = 0, F = B.length; m < F; m++)
          x += "%" + ("00" + B.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, I = function(C, E) {
        var B = [], x = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      bA.KfCPiI = I, o = arguments, bA.yuPVoG = !0;
    }
    var a = t[-3308 + -827 * -4], r = e + a, s = o[r];
    return s ? g = s : (bA.vwGZpt === void 0 && (bA.vwGZpt = !0), g = bA.KfCPiI(g, A), o[r] = g), g;
  }, bA(o, i);
}
function Ho() {
  var o = ["WQJdVSorW7bMcCoFfMOJWOVcT0K", "yw3cH0r1WRyln20ziuHu", "WQJcSmkEW4ldR3DSaSkGWQNdT2q", "WPdcGSkyWPVdO2ZcGLepWQTW", "W6lcLGdcLSkQA8oUW4dcPCkZhq", "BsVdJSkdW6NdPf1OW57dRH3dVq", "A27cTSodWPhcUeO", "W6KScSo+WRjwW53dSbpdQqNdVti", "x8oVW5BdHrNcHuTPjSoVWRmm", "CmoYWQ9he2ngW7tdHd/dJ8koW7G", "kCk4WQNdLujOW4FcJcdcMKfaoa", "WOTDxCoNhmkrh2rdW4O3W70W", "W7DSWQBcR8kzWOJcIW", "x8kQlsxcUmoNlL7dQ3jVqsm", "WQ4Ci8onamk4WPhcLu4qdSoZWPq"];
  return Ho = function() {
    return o;
  }, Ho();
}
(function(o, i) {
  function t(r, s, C, E, B) {
    return bA(r - 116, C);
  }
  function e(r, s, C, E, B) {
    return bA(E - 917, B);
  }
  function A(r, s, C, E, B) {
    return bA(E - -862, C);
  }
  var g = o();
  function n(r, s, C, E, B) {
    return bA(C - -598, B);
  }
  function I(r, s, C, E, B) {
    return bA(s - -140, E);
  }
  for (; ; )
    try {
      var a = parseInt(n(-466, -469, -464, -468, "fM1g")) / 1 + parseInt(e(1054, 1049, 1054, 1055, "YR(H")) / 2 + -parseInt(t(251, 255, "FLS@", 248, 258)) / 3 + -parseInt(e(1056, 1045, 1059, 1053, "FLS@")) / 4 * (-parseInt(A(-739, -731, "et)A", -731, -727)) / 5) + -parseInt(n(-452, -459, -458, -452, "vy^(")) / 6 + -parseInt(I(0, -1, -6, "97VI", -2)) / 7 + parseInt(I(-10, -11, -9, "rJK5", -17)) / 8;
      if (a === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Ho, -87 * 3239 + 91770 + 411336);
function lQ({ analytics: o, crosshatch: i }) {
  return i !== void (-5 * -47 + -247 * -21 + -5422) && !i.isAnalyticsDisabled ? o : void (352 + 5528 * 1 + -5880);
}
function uQ({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const g = {};
  g.analytics = o, g.crosshatch = e;
  const n = lQ(g);
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
function hQ({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: g } = eo(), n = uQ({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: g }), I = hA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ p(vo.Provider, { value: I, children: t });
}
const Ko = ot(void 0);
Ko.displayName = "CameraServiceContext";
function fQ() {
  const o = Ee(Ko);
  if (o === void 0)
    throw new Error(`${Ko.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function C0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Li() {
  return (await C0()).filter((i) => i.kind === "videoinput");
}
function Ji(o) {
  o.getTracks().forEach((t) => t.stop());
}
function sI(o) {
  return o.getVideoTracks()[0];
}
const bo = {};
bo.width = 1920, bo.height = 1080, bo.facingMode = An.FRONT;
const pQ = bo;
var ye, je, UA;
class B0 {
  constructor({ defaultVideoConstrains: i = pQ, minCameraShorterSide: t = VB } = {}) {
    W(this, ye);
    W(this, je, []);
    W(this, UA, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, J(this, ye, e);
  }
  get availableCameraProperties() {
    return D(this, je);
  }
  get mediaStream() {
    return D(this, UA);
  }
  get videoTrack() {
    return D(this, UA) ? sI(D(this, UA)) : void (4577 + -19 * 157 + 797 * -2);
  }
  get isCameraActive() {
    var i;
    return !!((i = D(this, UA)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    Ji(t);
  }
  async open(i = {}) {
    rI() && await dg(10 * 445 + 1123 * -7 + 1287 * 3), J(this, UA, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const i = await Li();
    if (i.length <= -1 * -593 + -14 * -707 + -2 * 5245) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = i.findIndex((I) => I.deviceId === e.deviceId), g = i[A + 1] ?? i[-83 * -71 + -7502 + 1609 * 1], n = this.getConstraints(t, g);
    this.close(), await this.open(n);
  }
  close() {
    D(this, UA) && (Ji(D(this, UA)), J(this, UA, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = D(this, je), A;
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
    const i = this.getSettings(), t = await C0(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === An.FRONT ? void (-5 * 1737 + -5289 + 13974) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return $a() ? (await Li()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-1858 + 496 * -17 + 10290);
  }
  async collectAvailableCamerasInfo() {
    const i = await Li();
    for (const t of i) {
      rI() && await dg(-3 * -2158 + 3130 + 4577 * -2);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const g = await navigator.mediaDevices.getUserMedia(A), n = sI(g);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const s = r;
        D(this, je).push(s), Ji(g);
      } catch (e) {
        e instanceof Error && U.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...D(this, ye).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t.deviceId } : void (-145 * 1 + 5318 + -5173);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new U("Could not init camera settings");
    if (typeof D(this, ye).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < D(this, ye).minCameraShorterSide)
      throw this.close(), new U("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
ye = new WeakMap(), je = new WeakMap(), UA = new WeakMap();
var Jt;
class yQ {
  constructor(i, t) {
    W(this, Jt, !1);
    this.videoHandler = i, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    D(this, Jt) || (J(this, Jt, !0), await B0.requestPermission());
  }
  async startVideoStream(i = {}) {
    await this.requestCameraPermission(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t);
    await this.cameraHandler.open(e), oQ() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
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
    return e.drawImage(this.videoHandler.videoElement, 18251 + -1 * 18251, -2765 + 191 * -2 + 3147), { image: t, timestamp: Date.now() };
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
Jt = new WeakMap();
var XA;
class DQ {
  constructor(i) {
    W(this, XA);
    J(this, XA, i);
  }
  get videoElement() {
    return D(this, XA);
  }
  async play(i) {
    D(this, XA).srcObject = i, await D(this, XA).play();
  }
  stop() {
    D(this, XA).srcObject = null;
  }
  hasSrcObject() {
    return !!D(this, XA).srcObject;
  }
}
XA = new WeakMap();
function wQ(o) {
  const i = fA(null), [t, e] = xA(), [A, g] = xA(), { handleError: n, setIsCameraReady: I } = rt(), a = oe((s) => {
    g((C) => gQ(s, C));
  }, []);
  P(() => {
    if (!i.current) {
      n(new U("Something went wrong during video initialization"));
      return;
    }
    const s = new DQ(i.current), C = new B0(), E = new yQ(s, C);
    return (async () => {
      try {
        const x = {};
        x.facingMode = o, await E.startVideoStream(x);
      } catch (x) {
        if (x instanceof Error) {
          n(U.fromCameraError(x));
          return;
        }
      }
      e(E), I(!0), a(E.getCameraResolution());
    })(), () => {
      E == null || E.stopStreaming(), I(!1), e(void (-1 * 7233 + -7619 + 14852 * 1));
    };
  }, [o, n, I, i, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = i, r;
}
function mQ({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: g } = wQ(o), n = hA(
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
const Q0 = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
};
function bQ({ children: o, ...i }) {
  const t = i.cameraFacing ?? An.FRONT;
  return /* @__PURE__ */ p(mQ, { cameraFacing: t, children: o });
}
let R;
const $A = new Array(62 * 63 + -755 * -9 + -10573 * 1).fill(void 0);
$A.push(void 0, null, !0, !1);
function fg(o) {
  return $A[o];
}
let qA = -6688 + 3667 * -1 + 5 * 2071, ft = null;
function Go() {
  return (ft === null || ft.byteLength === 5 * -827 + 3504 + -631 * -1) && (ft = new Uint8Array(R.memory.buffer)), ft;
}
const ko = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, GQ = typeof ko.encodeInto == "function" ? function(o, i) {
  return ko.encodeInto(o, i);
} : function(o, i) {
  const t = ko.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function Mt(o, i, t) {
  if (t === void 0) {
    const I = ko.encode(o), a = i(I.length, 3932 + -1 * 3931) >>> 4410 + 6382 * 1 + -10792;
    return Go().subarray(a, a + I.length).set(I), qA = I.length, a;
  }
  let e = o.length, A = i(e, 1842 + 2 * 2603 + -29 * 243) >>> 0;
  const g = Go();
  let n = 3290 + -470 * 7;
  for (; n < e; n++) {
    const I = o.charCodeAt(n);
    if (I > -6781 + -6025 * 1 + 3 * 4311) break;
    g[A + n] = I;
  }
  if (n !== e) {
    n !== 6269 * 1 + -7738 + 113 * 13 && (o = o.slice(n)), A = t(A, e, e = n + o.length * (-1 * -1219 + 8306 + 3174 * -3), 2407 * 1 + 9571 * -1 + 7165) >>> 0;
    const I = Go().subarray(A + n, A + e), a = GQ(o, I);
    n += a.written, A = t(A, e, n, -4089 + -2 * 1985 + -52 * -155) >>> -209 * -2 + 552 + -970;
  }
  return qA = n, A;
}
function s0(o) {
  return o == null;
}
let pt = null;
function KA() {
  return (pt === null || pt.byteLength === 4101 + -32 * 193 + -1 * -2075) && (pt = new Int32Array(R.memory.buffer)), pt;
}
let kt = $A.length;
function kQ(o) {
  o < 3794 + -317 * 13 + 1 * 459 || ($A[o] = kt, kt = o);
}
function c0(o) {
  const i = fg(o);
  return kQ(o), i;
}
const pg = {};
pg.ignoreBOM = !0, pg.fatal = !0;
const E0 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", pg) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && E0.decode();
function To(o, i) {
  return o = o >>> 418 + -1 * 1303 + 885, E0.decode(Go().subarray(o, o + i));
}
function yg(o) {
  kt === $A.length && $A.push($A.length + (3 * -709 + 1 * -7459 + -1 * -9587));
  const i = kt;
  return kt = $A[i], $A[i] = o, i;
}
let yt = null;
function x0() {
  return (yt === null || yt.byteLength === 6991 * 1 + 1 * -3265 + -3726) && (yt = new Uint32Array(R.memory.buffer)), yt;
}
function cI(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = x0();
  for (let A = -5583 * -1 + 442 + -6025; A < o.length; A++)
    e[t / (720 + -2 * 4325 + -2 * -3967) + A] = yg(o[A]);
  return qA = o.length, t;
}
function EI(o, i) {
  o = o >>> 8560 + -43 * -209 + -17547;
  const t = x0(), e = t.subarray(o / (2969 + 565 * -1 + 120 * -20), o / (1 * 8337 + 3840 + 7 * -1739) + i), A = [];
  for (let g = 4568 + 3518 * -1 + -1050; g < e.length; g++)
    A.push(c0(e[g]));
  return A;
}
function NQ(o, i) {
  const t = Mt(o, R.__wbindgen_malloc, R.__wbindgen_realloc), e = qA, A = Mt(i, R.__wbindgen_malloc, R.__wbindgen_realloc), g = qA, n = R.is_mobile_supported(t, e, A, g);
  return tn.__wrap(n);
}
const Dg = {};
Dg.register = () => {
}, Dg.unregister = () => {
};
const xI = typeof FinalizationRegistry > "u" ? Dg : new FinalizationRegistry((o) => R.__wbg_licensevalidationresult_free(o >>> 0));
class tn {
  static __wrap(i) {
    i = i >>> 1 * -8840 + 1 * -9037 + 17877;
    const t = Object.create(tn.prototype);
    return t.__wbg_ptr = i, xI.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xI.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    R.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, g) {
    var n = s0(t) ? 0 : Mt(t, R.__wbindgen_malloc, R.__wbindgen_realloc), I = qA;
    const a = cI(e, R.__wbindgen_malloc), r = qA, s = cI(A, R.__wbindgen_malloc), C = qA, E = Mt(g, R.__wbindgen_malloc, R.__wbindgen_realloc), B = qA, x = R.licensevalidationresult_new(i, n, I, a, r, s, C, E, B);
    return this.__wbg_ptr = x >>> 59 * -159 + 4 * 194 + 5 * 1721, this;
  }
  get is_valid() {
    return R.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const e = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = KA()[e / (-71 * -107 + 4581 + -12174) + (-359 * -2 + 5737 + -1 * 6455)], t = KA()[e / (-139 * 7 + 2741 + -1764) + (-4881 + 4447 * 1 + -29 * -15)];
      let A;
      return i !== 4 * 1694 + -1321 + -5455 && (A = To(i, t).slice(), R.__wbindgen_free(i, t * (7861 + 19 * -431 + -47 * -7), 70 * -118 + -7261 + -78 * -199)), A;
    } finally {
      R.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const A = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = KA()[A / (-5830 + 2917 * 2) + (2 * 697 + 1045 * 1 + -2439)], t = KA()[A / (3 * -1159 + -1 * 358 + 3839) + 1], e = EI(i, t).slice();
      return R.__wbindgen_free(i, t * (-291 + 2911 * -1 + -1603 * -2), -9660 + -4832 * -2), e;
    } finally {
      R.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const A = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = KA()[A / (13 * 721 + -6664 * -1 + -16033) + (-133 * 21 + -2 * -1258 + 277)], t = KA()[A / (-7408 + -73 * -107 + -399) + (-6747 * -1 + 27 * 311 + 797 * -19)], e = EI(i, t).slice();
      return R.__wbindgen_free(i, t * (4047 + 126 * -28 + 515 * -1), -5 * -24 + 4397 * 1 + -1 * 4513), e;
    } finally {
      R.__wbindgen_add_to_stack_pointer(1878 + 14 * -133);
    }
  }
  get customer() {
    let i, t;
    try {
      const g = R.__wbindgen_add_to_stack_pointer(-16);
      R.licensevalidationresult_customer(g, this.__wbg_ptr);
      var e = KA()[g / (-5921 + 2 * -1907 + 9739) + (-1503 * 5 + 827 * -7 + 13304)], A = KA()[g / (-15362 + 394 * 39) + (5 * 719 + -6147 + 2553)];
      return i = e, t = A, To(e, A);
    } finally {
      R.__wbindgen_add_to_stack_pointer(311 * -32 + 6260 * 1 + 1236 * 3), R.__wbindgen_free(i, t, -6047 + -2 * -119 + 5810);
    }
  }
}
async function FQ(o, i) {
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
function SQ() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = fg(t), A = typeof e == "string" ? e : void 0;
    var g = s0(A) ? -7 * -724 + -3074 * 3 + 4154 : Mt(A, R.__wbindgen_malloc, R.__wbindgen_realloc), n = qA;
    KA()[i / (-13767 + 13771 * 1) + (39 * 83 + -140 * -35 + -8136)] = n, KA()[i / (-335 * 15 + 5468 + -1 * 439) + (713 * -6 + -6119 + -1 * -10397)] = g;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    c0(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = To(i, t);
    return yg(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return yg(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return fg(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(To(i, t));
  }, o;
}
function RQ(o, i) {
  return R = o.exports, d0.__wbindgen_wasm_module = i, pt = null, yt = null, ft = null, R;
}
async function d0(o) {
  if (R !== void 0) return R;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhghAwJAAkAgACAAKAIMIgFGBEAgAEEUQRAgAEEUaiIBKAIAIgQbaigCACICDQFBACEBDAILIAAoAggiAiABNgIMIAEgAjYCCAwBCyABIABBEGogBBshBANAIAQhBSACIgFBFGoiAiABQRBqIAIoAgAiAhshBCABQRRBECACG2ooAgAiAg0ACyAFQQA2AgALAkAgA0UNAAJAIAAgACgCHEECdEHUrcIAaiICKAIARwRAIANBEEEUIAMoAhAgAEYbaiABNgIAIAENAQwCCyACIAE2AgAgAQ0AQfCwwgBB8LDCACgCAEF+IAAoAhx3cTYCAA8LIAEgAzYCGCAAKAIQIgIEQCABIAI2AhAgAiABNgIYCyAAQRRqKAIAIgBFDQAgAUEUaiAANgIAIAAgATYCGAsLrwIBBH9BHyECIABCADcCECABQf///wdNBEAgAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+aiECCyAAIAI2AhwgAkECdEHUrcIAaiEEAkBB8LDCACgCACIFQQEgAnQiA3FFBEBB8LDCACADIAVyNgIAIAQgADYCACAAIAQ2AhgMAQsCQAJAIAEgBCgCACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBH3FBACACQR9HG3QhBANAIAMgBEEddkEEcWpBEGoiBSgCACICRQ0CIARBAXQhBCACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBSAANgIAIAAgAzYCGAsgACAANgIMIAAgADYCCAvBAgIEfwF+IwBBQGoiAyQAQQEhBQJAIAAtAAQNACAALQAFIQUCQCAAKAIAIgQoAhwiBkEEcUUEQCAFRQ0BQQEhBSAEKAIUQYXPwABBAiAEQRhqKAIAKAIMEQAARQ0BDAILIAVFBEBBASEFIAQoAhRBuajAAEEBIARBGGooAgAoAgwRAAANAiAEKAIcIQYLQQEhBSADQQE6ABsgA0E0akGQqMAANgIAIAMgBCkCFDcCDCADIANBG2o2AhQgAyAEKQIINwIkIAQpAgAhByADIAY2AjggAyAEKAIQNgIsIAMgBC0AIDoAPCADIAc3AhwgAyADQQxqNgIwIAEgA0EcaiACEQEADQEgAygCMEGyqMAAQQIgAygCNCgCDBEAACEFDAELIAEgBCACEQEAIQULIABBAToABSAAIAU6AAQgA0FAayQAC8QCAgR/AX4jAEFAaiIDJAAgACgCACEFIAACf0EBIAAtAAgNABogACgCBCIEKAIcIgZBBHFFBEBBASAEKAIUQYXPwABBtqjAACAFG0ECQQEgBRsgBEEYaigCACgCDBEAAA0BGiABIAQgAigCDBEBAAwBCyAFRQRAQQEgBCgCFEG3qMAAQQIgBEEYaigCACgCDBEAAA0BGiAEKAIcIQYLIANBAToAGyADQTRqQZCowAA2AgAgAyAEKQIUNwIMIAMgA0EbajYCFCADIAQpAgg3AiQgBCkCACEHIAMgBjYCOCADIAQoAhA2AiwgAyAELQAgOgA8IAMgBzcCHCADIANBDGo2AjBBASABIANBHGogAigCDBEBAA0AGiADKAIwQbKowABBAiADKAI0KAIMEQAACzoACCAAIAVBAWo2AgAgA0FAayQAIAALkgIBAX8jAEEQayICJAAgACgCACEAAn8gASgCACABKAIIcgRAIAJBADYCDCABIAJBDGoCfwJAAkAgAEGAAU8EQCAAQYAQSQ0BIABBgIAETw0CIAIgAEE/cUGAAXI6AA4gAiAAQQx2QeABcjoADCACIABBBnZBP3FBgAFyOgANQQMMAwsgAiAAOgAMQQEMAgsgAiAAQT9xQYABcjoADSACIABBBnZBwAFyOgAMQQIMAQsgAiAAQT9xQYABcjoADyACIABBEnZB8AFyOgAMIAIgAEEGdkE/cUGAAXI6AA4gAiAAQQx2QT9xQYABcjoADUEECxARDAELIAEoAhQgACABQRhqKAIAKAIQEQEACyACQRBqJAALlgIBAn8jAEEQayICJAACQCAAIAJBDGoCfwJAIAFBgAFPBEAgAkEANgIMIAFBgBBJDQEgAUGAgARJBEAgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwDCyACIAFBP3FBgAFyOgAPIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADSACIAFBEnZBB3FB8AFyOgAMQQQMAgsgACgCCCIDIAAoAgRGBEAgACADEIoBIAAoAgghAwsgACADQQFqNgIIIAAoAgAgA2ogAToAAAwCCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgsQ5AELIAJBEGokAEEAC5YCAQJ/IwBBEGsiAiQAAkAgACACQQxqAn8CQCABQYABTwRAIAJBADYCDCABQYAQSQ0BIAFBgIAESQRAIAIgAUE/cUGAAXI6AA4gAiABQQx2QeABcjoADCACIAFBBnZBP3FBgAFyOgANQQMMAwsgAiABQT9xQYABcjoADyACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA0gAiABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAyAAKAIERgRAIAAgAxDhASAAKAIIIQMLIAAgA0EBajYCCCAAKAIAIANqIAE6AAAMAgsgAiABQT9xQYABcjoADSACIAFBBnZBwAFyOgAMQQILEOUBCyACQRBqJABBAAuuAgEFfyMAQdAAayICJAAgACgCACEDIAJBADYCOCACIAM2AkBBfyEAA0AgAEEBaiEAIAJBEGogAkE4ahA2IAIoAhBBAUYNAAsgAkEANgIoIAIgAzYCJCACQQA2AhwgAUEYaigCACEDIAEoAhQhAQNAAkAgAkEIaiACQRxqEDYgAigCCCIFRQ0AIAIoAgwhBiACIAIoAihBAWoiBDYCKCACIAY2AiwgAkEBNgI8IAJB1JfCADYCOCACQgE3AkQgAkEENgI0IAIgAkEwajYCQCACIAJBLGo2AjAgASADIAJBOGoQLw0AIARFIAAgBE1yDQEgAkEBNgI8IAJB1KTAADYCOCACQgA3AkQgAkGMrMIANgJAIAEgAyACQThqEC9FDQELCyACQdAAaiQAIAVBAEcL/wECAn8BfgJAIAJFBEAgAEEAOgABDAELAkACQAJAAkACQCABLQAAQStrDgMAAgECCyACQQFrIgJFDQIgAUEBaiEBDAELIAJBAUYNAQsCQCACQQlPBEADQCACRQ0CIAEtAABBMGsiBEEJSw0DIAOtQgp+IgVCIIinDQQgAUEBaiEBIAJBAWshAiAEIAWnIgRqIgMgBE8NAAsgAEECOgABDAQLA0AgAS0AAEEwayIEQQlLDQIgAUEBaiEBIAQgA0EKbGohAyACQQFrIgINAAsLIAAgAzYCBCAAQQA6AAAPCyAAQQE6AAEMAQsgAEECOgABIABBAToAAA8LIABBAToAAAumAgEDfyMAQTBrIgkkACABBH8gCSACNgIsIAkgAjYCKCAJIAE2AiQgCUEYaiAJQSRqEMQBIAkoAhwhASAJKAIYBUEACyEKIAlBEGogAyAEEDsgCSgCFCEDIAkoAhAhCyAJQQhqIAUgBhA7IAkoAgwhBCAJKAIIIQYgCSAINgIsIAkgCDYCKCAJIAc2AiQgCSAJQSRqEMQBQbixwgAtAAAaIAkoAgQhBSAJKAIAIQdBOBAKIgJFBEAACyACIAE2AjAgAiABNgIsIAIgCjYCKCACIAc2AhwgAiAGNgIQIAIgCzYCBCACQQA2AgAgAiAAQQBHOgA0IAIgBTYCJCACIAU2AiAgAiAENgIYIAIgBDYCFCACIAM2AgwgAiADNgIIIAlBMGokACACC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEEBIAAoAgAiACgCAEECayIDIANBBE8bQQFrDgMBAgMACyABKAIUQZiVwgBBJiABQRhqKAIAKAIMEQAADAMLIAIgADYCDCACQRxqQgE3AgAgAkEBNgIUIAJBzJXCADYCECACQSs2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwwCCyABKAIUQdSVwgBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJBnJbCADYCECACQRU2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEECIAAoAgAiACgCAEEEayIDIANBBE8bQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfiEwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEGAhcEAQRogAUEYaigCACgCDBEAAAwCCyACIAA2AgwgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEvNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAQsgASgCFEGahcEAQRQgAUEYaigCACgCDBEAAAsgAkEwaiQAC7ECAgJ/AX4jAEEgayICJAACQCABLQAAQQJGBEAgAUEQaikDACEEAkACQAJAIAEoAghBAWsOAgECAAsgAAJ/IARCgICAgAhaBEAgAkEBOgAIIAIgBDcDECAAIAJBCGogAkEfakGAgMAAEJwBNgIEQQEMAQsgACAEPgIEQQALNgIADAMLIAACfyAEQoCAgIAIfEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQYCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBgIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQYCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAuqAgICfwF+IwBBIGsiAiQAAkAgAS0AAEECRgRAIAFBEGopAwAhBAJAAkACQCABKAIIQQFrDgIBAgALIAACfyAEQoCAgIAQWgRAIAJBAToACCACIAQ3AxAgACACQQhqIAJBH2pBkIDAABCcATYCBEEBDAELIAAgBD4CBEEACzYCAAwDCyAAAn8gBEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQZCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBkIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQZCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAugAgEBfyMAQTBrIgIkAAJ/AkACQAJAAkAgACgCACIAKAIAQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfSFwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEH8hcEAQScgAUEYaigCACgCDBEAAAwCCyABKAIUQaOGwQBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJB3IbBADYCECACQSw2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC7kCAQF/IwBBEGsiAiQAAn8CQAJAAkACQAJAAkACQAJAIAAtAABBAWsOBwECAwQFBgcACyACIABBBGo2AgggAUHspMAAQQpB9qTAAEEDIAJBCGpB3KTAABCNAQwHCyABKAIUQfmkwABBCSABQRhqKAIAKAIMEQAADAYLIAEoAhRBgqXAAEEHIAFBGGooAgAoAgwRAAAMBQsgAiAAQQFqNgIMIAFBiaXAAEENQczTwABBBiACQQxqQfihwAAQjQEMBAsgASgCFEGWpcAAQQUgAUEYaigCACgCDBEAAAwDCyABKAIUQfqDwQBBBiABQRhqKAIAKAIMEQAADAILIAEoAhRBm6XAAEENIAFBGGooAgAoAgwRAAAMAQsgASgCFEGopcAAQQsgAUEYaigCACgCDBEAAAsgAkEQaiQAC40CAQJ/IwBBEGsiAiQAAkAgACgCACIDLQAARQRAIAEoAhRBsMbAAEEEIAFBGGooAgAoAgwRAAAhAAwBC0EBIQAgAiADQQFqNgIAIAIgASgCFEG0xsAAQQQgAUEYaigCACgCDBEAADoADCACIAE2AgggAkEAOgANIAJBADYCBCACQQRqIAJBvKjAABBiIAItAAwhASgCACIDRQRAIAFBAEchAAwBCyABDQAgAigCCCEBAkAgA0EBRw0AIAItAA1FDQAgAS0AHEEEcQ0AIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANAQsgASgCFEG0nsIAQQEgAUEYaigCACgCDBEAACEACyACQRBqJAAgAAvtAQEFfyMAQeAAayIFJAAgBSACIARqQQFqEHwgBSgCKCIGQQRNBH8gBUEIagUgBSgCBCEGIAUoAggLIAYgASACIAMgBBAGIAVBMGoiASAFQTAQvgIaIAFBBHIhByAFQThqIQggBUHYAGohAyAFKAI4IQEDQCAIIQYgBSgCWCIEIQIgBEEFSSIJRQRAIAEhBiAFKAI0IQILAkAgAkUNACACQQN0IAZqQQhrKQMAQgBSDQAgAyECIAlFBEAgBSgCNCEEIAchAgsgBEUNASACIARBAWs2AgAMAQsLIAAgBUEwakEwEL4CGiAFQeAAaiQAC4ECAQh/IwBBEGsiBCQAIAAoAggiAyAAKAIEIgUgAyAFSxshByAAKAIAIQYCQAJAAkACQANAIAJFBEBBACEDDAULIAMgB0YNASAAIANBAWoiCDYCCCACQQFrIQIgAyAGaiEJIAEtAAAgCCEDIAFBAWohASAJLQAARg0ACyAEQQhqIAYgBSADELYBQbixwgAtAAAaIAQoAgwhASAEKAIIIQJBFBAKIgNFDQEgA0EJNgIADAILIAQgBiAFIAcQtgFBuLHCAC0AABogBCgCBCEBIAQoAgAhAkEUEAoiA0UNACADQQU2AgAMAQsACyADIAI2AgwgAyABNgIQCyAEQRBqJAAgAwvoAQEEfyMAQeAAayIDJAAgASgCKCIFIQQgBUEFTwRAIAEoAgQhBAsCQAJAAn8gAigCKCIGQQVPBEAgBCACKAIETw0CIAIoAgQhBiACKAIIDAELIAQgBk8NASACQQhqCyECIANBADYCMCADQQA2AlggA0EwaiIEIAIgAiAGQQN0ahBDIAAgAyAEQTAQvgIgARAUDAELIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AjAgA0EANgJYIANBMGoiBCABIAEgBUEDdGoQQyAAIAMgBEEwEL4CIAIQFAsgA0HgAGokAAvgAQEHfwJAIAAtAABBBUcNACAAKAIEIgVFDQAgAEEIaigCACEGA0AgBUGMAmohACAFLwGSAyIJQQxsIQdBfyEDAkACQANAIAdFBEAgCSEDDAILIAAoAgghBCAAKAIAIQggA0EBaiEDIAdBDGshByAAQQxqIQBBfyABIAggAiAEIAIgBEkbELwCIgggAiAEayAIGyIEQQBHIARBAEgbIgRBAUYNAAsgBEH/AXFFDQELIAZFBEBBAA8LIAZBAWshBiAFIANBAnRqQZgDaigCACEFDAELCyAFIANBGGxqIQMLIAML9gECAn8CfiMAQRBrIgQkAAJAAkACQAJAAkACQCABKAIIIgUgASgCBEkEQCABKAIAIAVqLQAAIgVBLkYNASAFQcUARiAFQeUARnINAgtCASEGIAJFDQIgAyEHDAQLIAQgASACIANBABA9IAQoAgBFDQIgACAEKAIENgIIIABCAzcDAAwECyAEIAEgAiADQQAQNyAEKAIARQ0BIAAgBCgCBDYCCCAAQgM3AwAMAwtCACEGQgAgA30iB0IAUwRAQgIhBgwCCyADur1CgICAgICAgICAf4UhBwwBCyAEKQMIIQcLIAAgBzcDCCAAIAY3AwALIARBEGokAAvJAQEGfyAAQShqIQQgACgCKCICQQRNBH8gAEEIagUgACgCBCECIAAoAggLIAIgASgCKCIDQQRNBH8gAUEIagUgASgCBCEDIAEoAggLIAMQTCAAQQRqIQUgAEEIaiEDIAAoAgghBgNAIAMhAiAEKAIAIgAhASAAQQVJIgdFBEAgBiECIAUoAgAhAQsCQCABRQ0AIAFBA3QgAmpBCGspAwBCAFINACAEIQEgB0UEQCAFIgEoAgAhAAsgAEUNASABIABBAWs2AgAMAQsLC90BAQF/IwBBMGsiAiQAAn8gACgCACIALQAEBEAgAiAAQQVqLQAAOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkECNgIcIAJB6KzAADYCGCACIAA2AhAgAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAQsgAkEkakIBNwIAIAJBATYCHCACQaStwAA2AhggAkEENgIMIAIgADYCCCABQRhqKAIAIQAgAiACQQhqNgIgIAEoAhQgACACQRhqEC8LIAJBMGokAAvUAQEBfyAAAn8CQAJ/AkACQAJAIAEEQCACQQBIDQECQCADKAIEBEAgA0EIaigCACIERQRAIAJFDQZBuLHCAC0AABogAUEJSQ0CDAULIAMoAgAgBCABIAIQIwwGCyACRQ0EQbixwgAtAAAaIAFBCU8NAwsgAhAKDAQLIABBADYCBCAAQQhqIAI2AgAMBAsgAEEANgIEDAMLIAEgAhBADAELIAELIgMEQCAAIAM2AgQgAEEIaiACNgIAQQAMAgsgACABNgIEIABBCGogAjYCAAtBAQs2AgALvgECBH4CfyABIANPBEACQCADRQ0AIAAgA0EDdGohCCADIQkDQCAAIAQgACkDAHwiBSACKQMAfCIHNwMAIAQgBVatIAUgB1atfCEEIABBCGohACACQQhqIQIgCUEBayIJDQALIARQDQAgAUEDdCADQQN0ayEAA0AgAEUNASAIIAQgCCkDAHwiBTcDACAAQQhrIQAgCEEIaiEIIAYgBCAFVq18IQQgBEIAUg0ACwsPC0GJmMIAQSNB6PXAABDeAQAL2wEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogA0GwjcAAEGIgBEH0iMAAEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvLAQEHfyABBEADQCAAIARBDGxqIgcoAgAhBSAHKAIIIggEQCAFQRRqIQJBACEGA0ACQCACQQxqKAIAIgNFDQAgAkEQaigCAEUNACADECILAkACQAJAAkAgAkEEaygCAA4DAAEDAQsgAkEEaigCAEUNAiAFIAZBLGxqQRRqIQMMAQsgAiEDIAJBBGooAgBFDQELIAMoAgAQIgsgBkEBaiEGIAJBLGohAiAIQQFrIggNAAsLIAcoAgQEQCAFECILIARBAWoiBCABRw0ACwsL2QEBA38jAEEQayICJAAgACgCACEDIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhACACQQA6AAkgAiAAOgAIIAIgATYCBCADKAIoIgRBBE0EfyADQQhqBSADKAIEIQQgAygCCAshASAEBEAgBEEDdCEAA0AgAiABNgIMIAJBBGogAkEMakEqEGEgAUEIaiEBIABBCGsiAA0ACyACLQAIIQALQQEhASAAQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhAQsgAkEQaiQAIAEL0wEBA38jAEEwayIEJAACQAJAIAFBBE0EQCAEQQA2AgAgAQRAIARBCGohAiABIQMDQCACQgA3AwAgAkEIaiECIANBAWsiAw0ACwsgBCABNgIoIAAgBEEwEL4CGgwBCwJAAkACQCABQf////8ASw0AIAFBA3QiAkEASA0AIAINAUEIIQMMAgsQ6gEACyACEAoiA0UNAiADQQRrLQAAQQNxRQ0AIANBACACELsCGgsgACABNgIoIAAgAzYCCCAAIAE2AgQgAEEBNgIACyAEQTBqJAAPCwALzwEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogAyAEEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvbAgEEfyACKAIEIQMgASgCCCEFAkACQAJAAkACQAJAAkACQCACKAIAQQFrDgIBAgALIAMoAgAhBAwBCyADKAIAQQFqIgRFDQELIAJBDGooAgAhBiAFIQMgAigCCEEBaw4CAQMCCyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABBqKvAADYCCCAAQYyswgA2AhAgAEEIakHg5sAAEOsBAAsgBigCACEDDAELIAYoAgBBAWoiA0UNAQsCQCADIARPBEAgAyAFSw0BIAEgBDYCCCAAIAM2AgwgACABNgIIIAAgBSADazYCECAAIAEoAgAiASADajYCBCAAIAEgBGo2AgAPCyAEIANBjN3AABC6AQALIAMgBUGM3cAAELgBAAsjAEEgayIAJAAgAEEUakIANwIAIABBATYCDCAAQdyrwAA2AgggAEGMrMIANgIQIABBCGpB8ObAABDrAQAL3gEBAn8jAEEQayICJAAgAiAAKAIAIgA2AgQgASgCFEH/xcAAQQYgAUEYaigCACgCDBEAACEDIAJBADoADSACIAM6AAwgAiABNgIIIAJBCGpBhcbAAEEEIABBBGpB5L7AABBIQYnGwABBBSACQQRqQZDGwAAQSCEDIAItAAwhAAJ/IABBAEcgAi0ADUUNABpBASAADQAaIAMoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAJBEGokAAvNAQEEfyMAQRBrIgMkAANAAkAgA0EEaiAAEDwgAygCBCIBRQ0AIAEgAygCDCICQQxsaiIEQZACaigCAARAIARBjAJqKAIAECILAkACQAJAIAEgAkEYbGoiAS0AAA4FBAQEAQIACyABQQRqELIBDAMLIAFBCGooAgBFDQIgASgCBBAiDAILIAFBDGooAgAiBARAIAEoAgQhAgNAIAIQtAEgAkEYaiECIARBAWsiBA0ACwsgAUEIaigCAEUNASABKAIEECIMAQsLIANBEGokAAvJAQEEfyMAQSBrIgIkAAJAAkAgAUEBaiIBRQ0AQQQgACgCBCIEQQF0IgMgASABIANJGyIBIAFBBE0bIgNBBHQhASADQYCAgMAASUECdCEFAkAgBEUEQCACQQA2AhgMAQsgAiAAKAIANgIUIAJBBDYCGCACIARBBHQ2AhwLIAJBCGogBSABIAJBFGoQdyACKAIMIQEgAigCCEUEQCAAIAM2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgAkEgaiQAC8kBAQR/IwBBIGsiAiQAAkACQCABQQFqIgFFDQBBBCAAKAIEIgRBAXQiAyABIAEgA0kbIgEgAUEETRsiA0EMbCEBIANBq9Wq1QBJQQJ0IQUCQCAERQRAIAJBADYCGAwBCyACQQQ2AhggAiAEQQxsNgIcIAIgACgCADYCFAsgAkEIaiAFIAEgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALyQECA38BfiMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAAJ/AkACQCABQShqKAIAIgRFBEAgASADNgIADAELIAJBEGogBCABQTBqKAIAENYBIAIpAhQhBSACKAIQIQMgASABKAIAQQFrNgIAIAMNAQtBACEDQQAMAQsgAiAFNwIUIAIgAzYCECACQQhqIAJBEGoQxAEgAigCCCEDIAIoAgwLNgIEIAAgAzYCACACQSBqJAAPCxC1AgALELYCAAvEAQECfyMAQSBrIgQkAAJAIAIgA2oiAyACSQ0AQQggASgCBCICQQF0IgUgAyADIAVJGyIDIANBCE0bIgNBf3NBH3YhBQJAIAJFBEAgBEEANgIYDAELIAQgAjYCHCAEQQE2AhggBCABKAIANgIUCyAEQQhqIAUgAyAEQRRqEHcgBCgCDCEFIAQoAggEQCAEQRBqKAIAIQMMAQsgASADNgIEIAEgBTYCAEGBgICAeCEFCyAAIAM2AgQgACAFNgIAIARBIGokAAvJAQECfyMAQTBrIgIkACAAKAIAIQAgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEtNgIsIAIgAEEIajYCKCABQRhqKAIAIQMgAiACQShqNgIYAn9BASABKAIUIgEgAyACQRBqEC8NABpBACAAKAIARQ0AGiACIAAoAgQ2AgwgAkEcakIBNwIAIAJBATYCFCACQezJwAA2AhAgAkEuNgIsIAIgAkEoajYCGCACIAJBDGo2AiggASADIAJBEGoQLwsgAkEwaiQAC74BAQJ/IwBBIGsiAyQAAkACQCABIAEgAmoiAUsNAEEIIAAoAgQiAkEBdCIEIAEgASAESRsiASABQQhNGyIEQX9zQR92IQECQCACRQRAIANBADYCGAwBCyADIAI2AhwgA0EBNgIYIAMgACgCADYCFAsgA0EIaiABIAQgA0EUahCMASADKAIMIQEgAygCCEUEQCAAIAQ2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgA0EgaiQAC70BAQF/IwBBEGsiCyQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASALQQA6AA0gCyABOgAMIAsgADYCCCALQQhqIAMgBCAFIAYQSCAHIAggCSAKEEghAiALLQAMIQECfyABQQBHIAstAA1FDQAaQQEgAQ0AGiACKAIAIgAtABxBBHFFBEAgACgCFEG0qMAAQQIgACgCGCgCDBEAAAwBCyAAKAIUQdzswABBASAAKAIYKAIMEQAACyALQRBqJAAL0QIBA38jAEEgayIDJAACQAJAIAEgASACaiICSw0AQQggACgCBCIEQQF0IgEgAiABIAJLGyIBIAFBCE0bIgFBf3NBH3YhBQJAIARFBEAgA0EANgIYDAELIAMgBDYCHCADQQE2AhggAyAAKAIANgIUCyADQRRqIQQgA0EIaiICAn8CQCAFBEAgAUEASA0BAn8gBCgCBARAIARBCGooAgAiBQRAIAQoAgAgBUEBIAEQIwwCCwtBuLHCAC0AABogARAKCyIEBEAgAiAENgIEIAJBCGogATYCAEEADAMLIAJBATYCBCACQQhqIAE2AgBBAQwCCyACQQA2AgQgAkEIaiABNgIAQQEMAQsgAkEANgIEQQELNgIAIAMoAgwhAiADKAIIRQRAIAAgATYCBCAAIAI2AgAMAgsgAkGBgICAeEYNASACRQ0AAAsQ6gEACyADQSBqJAALuwEBBn8gACgCDCIBIAAoAggiBGtBGG4hBiABIARHBEADQAJAAkACQAJAIAQgAkEYbGoiAS0AAA4FAwMDAQIACyABQQRqELIBDAILIAFBCGooAgBFDQEgASgCBBAiDAELIAFBDGooAgAiBQRAIAEoAgQhAwNAIAMQtAEgA0EYaiEDIAVBAWsiBQ0ACwsgAUEIaigCAEUNACABKAIEECILIAJBAWoiAiAGRw0ACwsgACgCBARAIAAoAgAQIgsLuwEBA38jAEEgayICJAACQAJAIAFBAWoiAUUNAEEIIAAoAgQiBEEBdCIDIAEgASADSRsiASABQQhNGyIDQX9zQR92IQECQCAERQRAIAJBADYCGAwBCyACIAQ2AhwgAkEBNgIYIAIgACgCADYCFAsgAkEIaiABIAMgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALxwEBAX8CQCAFIAFBAWtGBEAgAC8BkgMiAUELTw0BIAAgAUEBaiIFOwGSAyAAIAFBDGxqIgZBlAJqIAJBCGooAgA2AgAgBkGMAmogAikCADcCACAAIAFBGGxqIgEgAykDADcDACABQQhqIANBCGopAwA3AwAgAUEQaiADQRBqKQMANwMAIAAgBUECdGpBmANqIAQ2AgAgBCAFOwGQAyAEIAA2AogCDwtB3OjBAEEwQYzpwQAQ3gEAC0HQ58EAQSBBnOnBABDeAQALngEAAkACQCABBEAgAkEASA0BAn8gAygCBARAAkAgA0EIaigCACIBRQRADAELIAMoAgAgAUEBIAIQIwwCCwtBuLHCAC0AABogAhAKCyIBBEAgACABNgIEIABBCGogAjYCACAAQQA2AgAPCyAAQQE2AgQMAgsgAEEANgIEDAELIABBADYCBCAAQQE2AgAPCyAAQQhqIAI2AgAgAEEBNgIAC7MBAQF/IwBBEGsiByQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASAHQQA6AA0gByABOgAMIAcgADYCCCAHQQhqIAMgBCAFIAYQSCECIActAAwhAQJ/IAFBAEcgBy0ADUUNABpBASABDQAaIAIoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAdBEGokAAvkAQACQAJAAkACQAJAAkACQCAALQAAQQFrDgYBAgMEBQYACyABKAIUQZiEwABBIiABQRhqKAIAKAIMEQAADwsgASgCFEG6hMAAQR0gAUEYaigCACgCDBEAAA8LIAEoAhRB14TAAEEgIAFBGGooAgAoAgwRAAAPCyABKAIUQfeEwABBHSABQRhqKAIAKAIMEQAADwsgASgCFEGUhcAAQRcgAUEYaigCACgCDBEAAA8LIAEoAhRBq4XAAEEqIAFBGGooAgAoAgwRAAAPCyABKAIUQdWFwABBICABQRhqKAIAKAIMEQAAC7cBAQR/IwBBEGsiAiQAIAAoAgghAyAAKAIAIQBBASEEIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhBSACQQA6AAkgAiAFOgAIIAIgATYCBCADBH8DQCACIAA2AgwgAkEEaiACQQxqQQgQYSAAQQFqIQAgA0EBayIDDQALIAItAAgFIAULQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhBAsgAkEQaiQAIAQLqwEBBn8jAEEgayIDJAAgA0EIaiACENUBIAMoAgghBgJAIAMoAgwiB0UNACACQQxsIQUgBiEEIAchCANAIAVFDQEgA0EQaiABKAIAIAFBCGooAgAQ1gEgBEEIaiADQRhqKAIANgIAIAQgAykDEDcCACAFQQxrIQUgBEEMaiEEIAFBDGohASAIQQFrIggNAAsLIAAgAjYCCCAAIAc2AgQgACAGNgIAIANBIGokAAuzAQEEfyAAKAIEIQEgAEGMrMIANgIEIAAoAgAhAyAAQYyswgA2AgAgACgCECECAkACQCABIANGBEAgAkUNAiAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0BIAEoAgAiASAAaiABIARqIAIQvQIMAQsgAkUNASAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0AIAEoAgAiASAAaiABIARqIAIQvQILIAMgACACajYCAAsLnQEBBX8gACACKAIAIAEoAgwiAyABKAIIIgQgASgCBCIFc3MgASgCACIBQQV3amoiBkEedyIHNgIMIAAgAigCBCADIAQgASAFQR53IgVzc2pqIAZBBXdqIgNBHnc2AgggACAEIAIoAghqIAUgAUEedyIBcyAGc2ogA0EFd2oiBDYCBCAAIAIoAgwgBWogASAHcyADc2ogBEEFd2o2AgALmwEBA38jAEEQayIFJAACQCABKAIoIgNBBUkEQCADIQRBBCEDDAELIAEoAgQhBAsCf0GBgICAeCACIAMgBGtNDQAaQQAgBCACIARqIgNLDQAaQQBBfyADQQFrZ3ZBACADQQJPG0EBaiIDRQ0AGiAFQQhqIAEgAxBBIAUoAgwhAyAFKAIICyEEIAAgAzYCBCAAIAQ2AgAgBUEQaiQAC6QBAQJ/AkAgAEGQA28iA0EfdUGQA3EgA2oiA0GQA0kEQAJAIAFBDEsgAkEfS3IgAEH//w9rQYKAYElyDQAgA0Gcl8AAai0AACACQQR0IAFBCXRyciIBQQN2IQIgAUGANE8NAiACQaibwABqLAAAIgJFDQAgASACQQN0ayAAQQ10ciEECyAEDwsgA0GQA0GYm8AAELcBAAsgAkHABkHoocAAELcBAAuhAQEKfwJAIAAEQCAAKAIADQEgAEEANgIAIAAoAgQhASAAKAIIIAAoAgwhBSAAKAIQIQIgACgCFCEGIAAoAhghByAAKAIcIQggACgCICEJIAAoAighAyAAKAIsIQogABAiIANFIApFckUEQCADECILIAEgBRDtAQRAIAEQIgsgAiAHEO0BIAYEQCACECILIAkEQCAIECILDwsQtQIACxC2AgALwAEBAn8jAEEQayICJAACfwJAAkACQAJAQQEgACgCACIAKAIAQQJrIgMgA0EETxtBAWsOAwECAwALIAEoAhRBpJbCAEEaIAFBGGooAgAoAgwRAAAMAwsgAiAANgIIIAFBvpbCAEEEIAJBCGpBxJbCABB9DAILIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAQsgAiAAQQRqNgIMIAFB4JbCAEEKQeqWwgBBAyACQQxqQfCWwgAQjQELIAJBEGokAAuUAQECfyAAQQBOBH8gAAUgAUEtOgAAIAFBAWohAUEAIABrCyICQeMATARAIAJBCUwEQCABIAJBMGo6AAAgAEEfdkEBag8LIAEgAkEBdEH6icIAai8AADsAACAAQR92QQJyDwsgASACQeQAbiIDQTBqOgAAIAEgAiADQeQAbGtBAXRB+onCAGovAAA7AAEgAEEfdkEDagu4AQECfyMAQRBrIgIkAAJ/AkACQAJAAkBBAiAAKAIAIgAoAgBBBGsiAyADQQRPG0EBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpBsIXBABB9DAMLIAEoAhRBwIXBAEEGIAFBGGooAgAoAgwRAAAMAgsgAiAANgIMIAFB8JDBAEEFIAJBDGpByIXBABB9DAELIAEoAhRB2IXBAEEHIAFBGGooAgAoAgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = SQ();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await FQ(await o, i);
  return RQ(t, e);
}
(function(o, i) {
  function t(n, I, a, r, s) {
    return EA(r - 29, a);
  }
  function e(n, I, a, r, s) {
    return EA(I - -517, a);
  }
  function A(n, I, a, r, s) {
    return EA(s - 548, r);
  }
  const g = o();
  for (; ; )
    try {
      if (-parseInt(t(208, 234, "i!%i", 227, 222)) / 1 + parseInt(t(223, 219, "1Pmx", 210, 234)) / 2 * (parseInt(t(263, 257, "eG#Y", 242, 227)) / 3) + parseInt(e(-310, -296, "fSbY", -320, -302)) / 4 + parseInt(e(-301, -294, "58Ie", -298, -299)) / 5 + -parseInt(t(254, 253, "496V", 235, 258)) / 6 + parseInt(A(717, 724, 743, "u9PE", 738)) / 7 + parseInt(e(-302, -302, "^IiI", -315, -327)) / 8 * (-parseInt(e(-308, -324, "fSbY", -299, -348)) / 9) === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Po, 1823727 * -1 + 1 * 169744 + 2580373);
function Ui(o, i, t, e, A) {
  return EA(i - -904, e);
}
function Po() {
  const o = ["tM0sW6TJCCotmtW", "WOn/WQLEdG", "WQHEs8olkSkiAZy1WPmaea", "etzwW7zw", "WPBdQLPfWOC", "W4jWoNlcTMxcQ0FcIt3dGSohWQS", "WPP3WQ1dhW", "W49LESkLW4STW4iiWRVcIa", "W7FdNCoMWRdcGIrYWRzqiW", "WPu1o8o/W6i", "jSofWPJdSWC", "sCkjW5bzW5K", "WOmOFcS", "WPRdHCoetvm", "WPTDWRFdK8koW5mwASkkcCogBqK", "W5pcUbSFW7FdP8otqtlcQ8k8W6FcGG", "DfNdPSk5WP1EgNPOWRStWOy", "nCoikSopx3pdQZ3dMSooBYWj", "WRDoBSoBsq", "WQiSmCkBy8oUDG", "xZXkW7Pu", "h8koBSoqWRWkEIrUgxu+W5W", "WOHeW4f8WRr5W7G", "ucHdW6XA", "DSk/pmoiEMXkW4jB", "eKBdOSoaEG", "W5jncZOK", "v8kjW49DW6O", "ECk4W5iFCG", "efdcSZ3dPq", "WQbDtCollmklkGeBWRmDnNu", "eCovWQPVWO4", "uIKYWPxdK0ZdJY7cLSkCb8kNrW", "wmoDWQnYW5W", "W4FdI8knzG", "W5DQW7z9WQK", "W4FdU8kjWOSQ", "B8kXW5BcVCov", "W6XcrSo1W7i", "W7zfWQhcOKO", "n8k/WPJcNvemWRRcKuFcGSoPAHS", "iSoQWODgWQ0", "WR/dMryFW60", "W5G5W7JcJSklC8ksW6ldThWqW6iI", "bKxcQt/dGG", "WP7dV8o9rvq", "nCk3W4KtEG", "WORdJmo7W7FdKW", "c1JcUJxdIa", "WPHBWRxdKmkdW5eEBmkaaCoFuZG"];
  return Po = function() {
    return o;
  }, Po();
}
function Yi(o, i, t, e, A) {
  return EA(t - 546, o);
}
function Wi(o, i, t, e, A) {
  return EA(A - 780, e);
}
function MQ(o, i, t, e, A) {
  return EA(t - 378, o);
}
function Oi(o, i, t, e, A) {
  return EA(o - 441, i);
}
function EA(o, i) {
  const t = Po();
  return EA = function(e, A) {
    e = e - (3791 * 2 + -3505 * 2 + -396);
    let g = t[e];
    if (EA.ShQVbT === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      EA.bqSrAw = s, o = arguments, EA.ShQVbT = !0;
    }
    const I = t[-327 * 10 + 3 * -941 + 6093], a = e + I, r = o[a];
    return r ? g = r : (EA.otAytF === void 0 && (EA.otAytF = !0), g = EA.bqSrAw(g, A), o[a] = g), g;
  }, EA(o, i);
}
var LI;
class vQ {
  constructor() {
    w(this, LI, !1);
  }
  async [(LI = Wi(1008, 983, 982, "LO8G", 1e3) + Ui(-708, -727, -709, "D8EG") + Ui(-741, -728, -747, "eG#Y"), Ui(-667, -679, -699, "*Q5s"))](i) {
    function t(I, a, r, s, C) {
      return Wi(I - 250, a - 347, r - 340, a, I - -682);
    }
    function e(I, a, r, s, C) {
      return Oi(r - -1158, C);
    }
    function A(I, a, r, s, C) {
      return Yi(I, a - 253, r - -249);
    }
    function g(I, a, r, s, C) {
      return Oi(I - -298, s);
    }
    function n(I, a, r, s, C) {
      return Yi(r, a - 367, s - -788);
    }
    try {
      const I = i + (n(-22, -3, "0)Xb", -28, -9) + "/") + aI;
      await d0(I), this[n(-45, -19, "qJH8", -33, -44) + A("V1F#", 472, 475, 462, 488) + A("LO8G", 484, 486, 499, 462)] = !0;
    } catch {
      this[n(-36, -58, "496V", -47) + n(-47, -34, "0)Xb", -48) + n(-68, -45, "@wvg", -59)] = !1, console[t(301, "y!PG", 312)](aI + (g(323, 303, 301, "sTlh") + t(299, "lbjG", 324) + e(-520, -543, -535, -538, "Y8&!") + A("RMV%", 472, 484) + e(-524, -518, -538, -531, "1[gR") + t(290, "W]T#", 302) + t(309, "0)Xb", 323) + g(360, 377, 361, "*gvH") + A("W]T#", 497, 494) + A("LO8G", 490, 482) + e(-482, -512, -493, -472, "r801") + g(359, 371, 361, "Xa4R") + g(365, 364, 360, "r801") + A("i!%i", 472, 497) + "n."));
    }
  }
  [Oi(627, "Y^04") + MQ("Y^04", 570, 582) + Wi(1009, 1015, 1001, "Ej6N", 998) + "ed"]() {
    function i(t, e, A, g, n) {
      return Yi(t, e - 31, A - -238);
    }
    return this[i("Ej6N", 512, 510) + i("DcHw", 520, 496) + i("RMV%", 550, 527)];
  }
}
class Hi extends Error {
  constructor() {
    super(...arguments);
    w(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function We(o, i, t, e, A) {
  return z(A - -684, e);
}
function Ki(o, i, t, e, A) {
  return z(A - 981, t);
}
function OA(o, i, t, e, A) {
  return z(o - 291, A);
}
function z(o, i) {
  var t = qo();
  return z = function(e, A) {
    e = e - (3592 + 228 * 16 + -6829);
    var g = t[e];
    if (z.OIVuGr === void 0) {
      var n = function(C) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", x = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var m = 0, F = B.length; m < F; m++)
          x += "%" + ("00" + B.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, I = function(C, E) {
        var B = [], x = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      z.axwHCe = I, o = arguments, z.OIVuGr = !0;
    }
    var a = t[-1 * -811 + -796 * 1 + -15], r = e + a, s = o[r];
    return s ? g = s : (z.wzftZc === void 0 && (z.wzftZc = !0), g = z.axwHCe(g, A), o[r] = g), g;
  }, z(o, i);
}
(function(o, i) {
  function t(r, s, C, E, B) {
    return z(C - -11, B);
  }
  function e(r, s, C, E, B) {
    return z(r - 196, E);
  }
  var A = o();
  function g(r, s, C, E, B) {
    return z(r - -46, E);
  }
  function n(r, s, C, E, B) {
    return z(r - 615, B);
  }
  function I(r, s, C, E, B) {
    return z(s - 209, r);
  }
  for (; ; )
    try {
      var a = parseInt(e(630, 622, 661, "^eG^", 649)) / 1 * (-parseInt(e(660, 665, 692, "UpSu", 627)) / 2) + parseInt(e(655, 641, 664, "onrC", 667)) / 3 * (-parseInt(t(482, 465, 454, 437, "76bU")) / 4) + parseInt(e(640, 624, 617, "[H7Y", 649)) / 5 + -parseInt(I("3C4@", 656, 657, 685, 633)) / 6 * (-parseInt(g(393, 379, 371, "YlCp", 426)) / 7) + parseInt(e(637, 654, 665, "$5w&", 661)) / 8 + parseInt(n(1088, 1066, 1088, 1095, "&%T0")) / 9 * (parseInt(t(398, 406, 412, 412, "@67@")) / 10) + parseInt(t(383, 398, 402, 402, "4&tP")) / 11 * (-parseInt(I("$5w&", 631, 662, 637, 618)) / 12);
      if (a === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(qo, -148061 + 411118 * 2);
function dI(o, i, t, e, A) {
  return z(i - -870, t);
}
function qo() {
  var o = ["utSetCkTW4RcGvm", "WP7dPMRdLmkI", "BCkcWO/dUCoh", "WQBcJw4rC1hcSIa", "W6xcPSkeW7FdL2L3W4yjWQZcLvC", "yCozW6zCma", "WR7dPCoRWQlcIG", "fsrID28", "cmonbSoxFW", "WQVcICkjW6BdIa", "wIJcNCo4xConWPrCWP8Wamoe", "WQtdTx3cLSk1", "WQ/dTCkqea", "W5fnsWhcKa", "WPtcV8ka", "WOC1tSoTidZcKSkJ", "WROOW63dGSo9", "WR3dSmoqW4jm", "dSkuW7S1W6FcMhxdLce", "WPuzawBdJmohxYVdTSk+W4e", "xcRcK8k5bCkNWQ19WQS", "W5dcHITXWRa", "WQBcJZPplIxdQL0PWQSubtDK", "W7n/WOFcJ8kvy8oymG", "WRa0W7JdN8oR", "cCkqW7nhWOZdSMJdOZdcKgldQG", "WRHvaSobWR0", "WP3cUmkE", "W6lcR8koWR4tW7v+p1GhCq", "f8onamoAFG", "W6X2xg/dVCodmM0EW4TuW6u", "WQVdVSke", "mCkDWQ0DBmkHW6pdICoHx2D3", "WRpdUCojWPtcGW", "DdBdMSoxaW", "WQpdQCkeemoV", "zCoiWQtdUSkJ", "WQ3dNuNdR1q", "WQddJfldVKG", "A8kcWPldPCog", "W5BcSIixnmoMW43cUG", "W5z0Emouga", "WQldGCk+", "W6WyDW7cGG", "W60kxbVcIW", "W6hcLCo8W6xdOYnUxrKHW7VdMa", "W7tcQSohr8kLWOj4WPBcK8ocW54", "WRRdS8op", "W6yEwWZcJa", "WRNdSCoo", "ESkvWPZdUSoH", "z8o/W77dPSk5s8ktbSoqW7CU", "W41psW", "W6dcRmkaW7nmW6fvdxO", "WRfEgd/cUWOGW6hcJW", "WQ/dQmk3eCo8", "WRVdV8oz", "pCkvW7pcN8oJW7zYWQqhCqyOeCoV", "W4BcGJH2WQa", "a8oEhCohza", "f2udqmks", "WRlcQ31wC8knwr8JWQX/abe+", "WRqSW7JdLCoG", "WQpdOmkKWQ/cUG", "W5DQCSod", "mwtdSCoZiw4TWOu", "WP0mW51VWOCgW7/dKhpdUKeeqIa"];
  return qo = function() {
    return o;
  }, qo();
}
function LQ(o, i, t, e, A) {
  return z(i - -16, e);
}
var Ze, Ut;
class lI {
  constructor(i) {
    W(this, Ze);
    W(this, Ut);
    function t(I, a, r, s, C) {
      return z(a - -883, I);
    }
    this[t("^eG^", -423) + g(1270, 1288, 1304, "&%T0")] = i;
    function e(I, a, r, s, C) {
      return z(s - -325, a);
    }
    function A(I, a, r, s, C) {
      return z(s - -899, r);
    }
    function g(I, a, r, s, C) {
      return z(I - 807, s);
    }
    function n(I, a, r, s, C) {
      return z(C - -468, r);
    }
    try {
      J(this, Ze, i[g(1284, 1315, 1274, "iLNs", 1289) + t("0!WJ", -451, -463, -462, -454) + g(1253, 1250, 1253, "thBb", 1248)] && JSON[e(112, "iLNs", 112, 115, 131)](i[n(0, -7, "pvPO", -53, -33) + g(1237, 1220, 1248, "m@r9", 1266) + A(-486, -448, "UcYe", -466, -477)])), J(this, Ut, i[e(88, "0f0I", 66, 99, 88) + A(-458, -429, "@67@", -433, -464)]);
    } catch (I) {
      console[t("76bU", -452)](I);
    }
  }
  get [OA(716, 722, 713, 696, "@67@") + "id"]() {
    function i(e, A, g, n, I) {
      return OA(n - -836, A - 50, g - 418, n - 385, A);
    }
    function t(e, A, g, n, I) {
      return OA(e - 220, A - 306, g - 310, n - 87, A);
    }
    return this[i(-103, "cAZZ", -94, -125) + i(-143, "pvPO", -140, -131)][t(973, "&%T0", 968, 949) + i(-43, "@67@", -86, -70)];
  }
  get [OA(745, 713, 766, 721, "76bU") + "s"]() {
    function i(e, A, g, n, I) {
      return We(e - 337, A - 333, g - 143, g, A - -218);
    }
    function t(e, A, g, n, I) {
      return OA(A - -290, A - 301, g - 206, n - 337, e);
    }
    return this[i(-512, -491, "6hVt") + t("6hVt", 428, 401, 421)][i(-476, -481, "Jim$") + "s"];
  }
  get [OA(744, 712, 716, 720, "IGRd") + dI(-414, -399, "0!WJ")]() {
    function i(A, g, n, I, a) {
      return OA(g - -1194, g - 111, n - 61, I - 376, a);
    }
    function t(A, g, n, I, a) {
      return OA(g - -83, g - 130, n - 489, I - 398, A);
    }
    function e(A, g, n, I, a) {
      return dI(A - 151, n - 503, g);
    }
    return this[i(-466, -445, -424, -451, "Jim$") + e(99, "oSJr", 89)][e(109, "6hVt", 81) + t("@67@", 676, 662, 696)];
  }
  get [We(-256, -249, -242, "@67@", -232) + "b"]() {
    return D(this, Ze);
  }
  get [OA(758, 750, 740, 782, "&%T0") + We(-217, -250, -262, "76bU", -234)]() {
    return D(this, Ut);
  }
  get [Ki(1434, 1467, "76bU", 1432, 1455) + OA(734, 757, 702, 716, "pvPO") + We(-249, -250, -253, "UpSu", -269) + We(-247, -284, -255, "^eG^", -268)]() {
    var g, n;
    function i(I, a, r, s, C) {
      return Ki(I - 339, a - 371, r, s - 311, I - -267);
    }
    function t(I, a, r, s, C) {
      return Ki(I - 65, a - 331, I, s - 463, s - -223);
    }
    function e(I, a, r, s, C) {
      return We(I - 481, a - 201, r - 447, I, C - 1543);
    }
    function A(I, a, r, s, C) {
      return LQ(I - 252, C - 314, r - 474, s);
    }
    return !!((n = (g = D(this, Ze)) == null ? void 0 : g[A(736, 710, 699, "o2C8", 724) + A(769, 731, 731, "UpSu", 759)]) != null && n[A(793, 749, 756, "Jim$", 767) + i(1169, 1193, "H9MJ", 1192) + t("BT5X", 1216, 1215, 1203) + e("Bh5z", 1268, 1246, 1243, 1271) + t("oSJr", 1201, 1245, 1215) + A(736, 713, 728, "3C4@", 734) + e("#CXk", 1314, 1281, 1294, 1287) + "d"]);
  }
}
Ze = new WeakMap(), Ut = new WeakMap();
function nA(o, i) {
  const t = jo();
  return nA = function(e, A) {
    e = e - 331;
    let g = t[e];
    if (nA.WaYxyx === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      nA.DECRbQ = s, o = arguments, nA.WaYxyx = !0;
    }
    const I = t[15164 + 34 * -446], a = e + I, r = o[a];
    return r ? g = r : (nA.hFoFbi === void 0 && (nA.hFoFbi = !0), g = nA.DECRbQ(g, A), o[a] = g), g;
  }, nA(o, i);
}
(function(o, i) {
  function t(I, a, r, s, C) {
    return nA(C - 97, s);
  }
  function e(I, a, r, s, C) {
    return nA(C - 676, a);
  }
  function A(I, a, r, s, C) {
    return nA(s - -452, a);
  }
  const g = o();
  function n(I, a, r, s, C) {
    return nA(I - -690, C);
  }
  for (; ; )
    try {
      if (parseInt(t(368, 514, 352, "py#U", 431)) / 1 * (-parseInt(t(687, 568, 513, "%)R)", 622)) / 2) + parseInt(A(-162, "A5jN", -116, -85, -96)) / 3 + -parseInt(t(447, 382, 370, "PJ6W", 476)) / 4 * (parseInt(A(-126, "PJ6W", -4, -29, -59)) / 5) + -parseInt(n(-285, -300, -197, -335, "JYCx")) / 6 * (-parseInt(t(641, 684, 638, "mw&K", 578)) / 7) + -parseInt(e(1112, "olTo", 1078, 1040, 1131)) / 8 + -parseInt(e(1027, "vaCD", 1114, 1238, 1138)) / 9 + parseInt(A(-87, "mw&K", -129, -60, -63)) / 10 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(jo, -1202001 + -28 * -68397);
function V(o, i, t, e, A) {
  return nA(e - 475, o);
}
function _A(o, i, t, e, A) {
  return nA(o - 128, t);
}
function QA(o, i, t, e, A) {
  return nA(A - -573, i);
}
function mA(o, i, t, e, A) {
  return nA(e - 47, A);
}
function HA(o, i, t, e, A) {
  return nA(t - 450, o);
}
function jo() {
  const o = ["m8k8WQmX", "WOD+WROKW7q", "W4pcS8khW6Xe", "W7q3CmoQWQy", "WO4XWRmoW7i", "puFcT8ordG", "A8oLW71SW6OgsmotxmkM", "W4RcUSoTAYu", "BCk1z8oGxq", "pSkBehxdKa", "r1hdVmknWQS", "prTqqmov", "W6vKWOtdG8kE", "W7NcJq/cJv0", "W6u/WPJdVq", "W6/dOIyJWQi", "W50QyCoKWQa", "W4m/WOddVcW", "W5uXWR5ohG", "W7ZcOtLVW6q", "jCkLbwxdUq", "WO7cIeNdOJ4", "WRVcH07dRW", "WQeHW7rssa", "qeGsW4ZcKa", "DCkXWOlcSYi", "zCkBWPdcTaW", "WPpcR8ouW63dSG", "W7ZcIGRcHW", "W6tcQSodxHW", "WOnWWQKcW64", "sCkhWOhdGIS", "W7NcTmoFCCow", "W5VcM8kdmdy", "W6ddIbJdHuC", "W5KQWQddVcS", "gmk6WPxdUKe", "aaTCW4FcGmo0yCkcfCk+tW", "W77cPZDTW5q", "W6tcSLRdLq", "W6RdUbOWWQ0", "W5NcN07dNuC", "W63cJfldGXq", "W7hdSaS7", "W4VcPZbBW40", "WOOhW63cTCoE", "nXeRW4K2", "pSkldxldMG", "W5lcGCk8phu", "WPKjW7FcI0BcHhxcKmob", "WRmKW4jnEG", "WQxcIrRdGYe", "W7tcKaNcPfO", "W5ZcN0tdIW", "WP4oWO7cMxdcT0hcTa", "quddOmkY", "W63cQmoe", "WRq5W5L7za", "yCkKCmoHxa", "WOH+WRmvW7q", "W67dJu3dH1C", "rvK9WPZcGG", "W6xcK8okDCos", "W63dKte", "WOLgW7pcSSou", "WOT2WPldKSku", "W5NcICokD8oA", "W6xcOmocFbe", "WQD5WRiMW4m", "WRGVW7iCsa", "aXpcOmoWW58", "BmoGWOOzW6KXESoZ", "WO/cG1ZdPHS", "W6hcTv/dN8o5", "WPZdVmkVWPm", "W7BcIWlcNee", "W7ZcOsbVW64", "nmkiya", "zSo0WRTIW4a", "ACkKyq", "W5ZcM8onCCkt", "WPy3ymoABa", "qv8eWO0", "W6mwWPD1lW", "W5dcKSkd", "WPfrFspdOG", "WQhcReddIW8", "W7e3Fq", "W5FcRSkAW4DD", "drpcVa", "W6O0A8oyWPa", "p8kbymktAW", "W7fno8oEea", "WORcVSoyW63dTq", "W6tcGvldT8kz", "W5VcRSkDW7zE", "WOjYWRGpW7u", "W7BcU8oBcw4", "m8kHWPi/W60", "o0NcT8ksdW", "W47cUmoMyZm", "oGWGW58", "W4rtWQlcV3m", "WROVW6e", "mmo+lCk4gSkDWO3dU8ksESk9uq", "F8ksWPVdNW", "kCkAd2tdMW", "W5ySWOpdPJS", "rSoMW5NcRHZdVWL2dmkoWR3cNq", "sfayWOlcLa", "W5dcIIVdUCky", "WRtcPKbIW7FcHfldMdL3ea", "pCkkz8kYja", "juNcR8kyaW", "W6VdMsddQeS", "W6JcImorB8oa", "WQhdVwXFW4TKbSowda", "AK56WPrSuXlcN8o6W7X5mW", "W4dcTCkbW69v", "WRjiW6BcMCop", "WOb1WOGeW5e", "W5xcPmkAW6fy", "WPJcK3zMW6a", "vvSsW5dcHW", "WPZcQfddPaq", "oCojW53dOf3dMCk7W5C/W4OFpWDC", "W4JcLSoTwHG", "f8kWWO8", "W5/cQmknW6DE", "hqbXWOT1DYhcKeVcGfmFBSkW", "W6RdKYBdQuu", "WRHaWRG3W5u", "F8kjF8oSrq", "W60wWOS", "p8k8WRy7W44", "sCk1WRddTYG", "WOFcJ1NdOGa", "W4qzmSo7gG", "W6NcNdRdG1a", "W67cRLpdICoK", "W7erWRJcTqq", "W4fsWQJcQG", "WRldUmkpiae0aSobW545", "W6BcOCoeDYu", "WPPmA2JcRG", "W7hcIXJcRv4", "W6FcQSorCWa", "mSkoz8kviW", "x8orW7hcV8k0", "W4tcJaHiW6W", "W580FmoxBq", "W70QyCoKWQa", "prLlB8oJ", "oCkkFCkflG", "ASkICCoRsG", "WQLTWORdKSk8", "WOlcNNPwW4O", "W4CXWP4", "tLmGWPVcIq", "pu/cSa", "WQhdVMGYWR4Hm8o9n8oPW4n1", "W4WBWPzbdW", "W4dcQYD9W5y", "s8ksWQNdOHC", "mSk2WOldVeC", "WOhdTmoCW7TEgmk7kmoc", "W7tcGGhdQNS", "W67cQu/dJSo4", "WO7cMMHuW5C", "WOpcNMjCW5G", "W7VcL3NdKSkL", "qfmx", "CSkpWPC", "lSk3WR0Q", "WQ8AWPXOlq", "WPBcO8oqW6FdJq", "W7hcQSoetr8", "pmk9WRCBW78", "W4dcRSka", "BSkuWPZdMIS", "WReLW7jWsa", "WPJdS8kVWOK", "prTjqmoF", "WPC9W5DAWOi", "WRxcQmohcg8", "mmkleq", "W7NcJW3cOMe", "W7W9rSodWR0", "W47cLmkcjNm", "W7ZcGg/dMCkY", "dmkWWPm", "WONcG17dOWS", "WRZdJSknlCkffCo/qSklWPnSW4VdUW", "W7JcINNdUmk2", "WQnTWPNdS8kr", "pr1n", "xfurWPNdLq", "WPLhExNdUW", "WPSpW7D2za", "WOVdSSoBWROjtCoMaSo6ivbmaq", "dJOpW6qm", "W4tcOZb7W5a", "omkCew7dJq", "tCogW7ZcTCkL", "W4xcRce2W5q", "WPVcN8oMjK4", "W5VcOZz2W5e", "W5pdLq/cV1FdMCk/h8kvk2HPWO0", "W4qoiW", "ruBdUSkUWRa", "W4qbo8oKfG", "WO3cRCodW60", "WOBcKgLWW5a", "W5lcRmkl", "uu4kWOpdHW", "W47cH8kzo2i", "WPXqD37dVq", "W5OVWORdPIu", "gWz6W4uIiNpdUge", "WRPiW7xcMCoq", "DSkhWOFdJYO", "W6f0WRunfYVdM2z2oCkiEse", "o8kTWPpdTLS", "hrTjqmoF", "WOxcRf3cSW"];
  return jo = function() {
    return o;
  }, jo();
}
var JI, UI, YI;
class JQ {
  constructor(i) {
    w(this, YI);
    w(this, UI, [V("tY]R", 960, 827, 912) + _A(595, 603, "aJns") + "ic", QA(-228, "V*qJ", -249, -104, -160) + HA("@Pjz", 860, 798) + "ic"]);
    w(this, JI);
    function t(e, A, g, n, I) {
      return nA(A - -753, e);
    }
    this[t("&G@M", -271) + t("H(xf", -287) + "d"] = i;
  }
  async [(YI = mA(411, 578, 460, 492, "GtUo") + "se", UI = mA(427, 340, 407, 382, "&Yi%") + V("jcz3", 887, 1081, 997) + QA(-43, "&Yi%", -33, -151, -64) + _A(671, 668, "np^Y"), JI = _A(498, 456, "kQMj") + HA("jp7p", 964, 968), _A(532, 460, "zG9Z"))](i) {
    function t(a, r, s, C, E) {
      return _A(E - -483, r - 250, a);
    }
    function e(a, r, s, C, E) {
      return HA(E, r - 366, C - -567);
    }
    function A(a, r, s, C, E) {
      return mA(a - 18, r - 261, s - 107, s - 735, r);
    }
    function g(a, r, s, C, E) {
      return HA(E, r - 461, a - 101);
    }
    const n = await this[e(316, 367, 214, 326, "kdOo") + e(412, 385, 388, 418, "x[1y") + e(388, 481, 480, 393, "&Yi%")](i);
    await Promise[e(275, 408, 315, 356, "qpAW") + e(216, 314, 162, 252, "x[1y")]([this[A(1352, "BjGU", 1327) + e(322, 382, 220, 300, "A5jN") + "d"][t("C#k9", 128, 127, 65, 89)](i), this[g(989, 1052, 956, 1030, "4X(c") + I(842, 769, 945, 849, "4X(c") + "e"](n)]);
    function I(a, r, s, C, E) {
      return HA(E, r - 393, a - -123);
    }
    this[I(832, 905, 881, 737, "kQMj") + t("MGR#", 176, 156, 249, 185) + e(264, 243, 280, 216, "wizS")]();
  }
  async [mA(622, 546, 583, 571, "Z3Pl") + QA(-115, "GtUo", -156, -167, -87) + "se"](i) {
    function t(I, a, r, s, C) {
      return HA(r, a - 470, I - 282);
    }
    function e(I, a, r, s, C) {
      return QA(I - 446, C, r - 208, s - 3, r - 1356);
    }
    function A(I, a, r, s, C) {
      return _A(a - 362, a - 68, I);
    }
    function g(I, a, r, s, C) {
      return HA(C, a - 173, r - -136);
    }
    function n(I, a, r, s, C) {
      return V(a, a - 88, r - 374, r - -872);
    }
    try {
      if (t(1115, 1088, "jp7p", 1068, 1097) !== t(1212, 1240, "kQMj", 1253, 1242)) {
        const I = await fetch(i);
        if (!I.ok)
          if (A("olTo", 1044, 949, 1042, 997) === n(-39, "JYCx", -34, -106, 76)) this[A("MGR#", 898, 791, 852, 844) + t(1186, 1150, "&Yi%", 1156, 1185) + "d"] = _0x257fe1;
          else throw new Error(g(728, 741, 712, 776, "hzBF") + n(45, "jp7p", -38, -116, -20) + g(803, 775, 715, 777, "jcz3") + n(115, "vcuI", 103, 106, 200) + "d.");
        this[g(811, 603, 705, 765, "vaCD") + "se"] = await I[n(-72, "py#U", 39, -72, 114)]();
      } else throw new _0x28d948(A("&Yi%", 1029, 1005, 922, 1123) + A("aCKQ", 1038, 1065, 1017, 989) + n(168, "wsIm", 124, 87, 185) + e(1262, 1325, 1338, 1428, "JYCx") + ".");
    } catch (I) {
      if (A("JYCx", 879) === t(1193, 1158, "BjGU")) this[e(1278, 1293, 1228, 1120, "GtUo") + "se"] = void (-65 * 7 + -3983 + 4438), console[g(872, 862, 826, 734, "CfEh")](I);
      else return _0x2bf235[t(1097, 1195, "zG9Z") + g(799, 783, 704, 715, "Z3Pl")][g(632, 767, 672, 603, "vaCD") + e(1361, 1377, 1334, 1378, "jcz3")];
    }
  }
  async [mA(410, 505, 450, 465, "vcuI") + QA(-56, "t4Qy", -223, -183, -127) + "e"](i) {
    this[t(806, 859, "@Pjz", 931) + t(801, 844, "aJns", 775)] = void (124 * -65 + -6777 + 401 * 37);
    function t(I, a, r, s, C) {
      return QA(I - 102, r, r - 52, s - 115, a - 953);
    }
    function e(I, a, r, s, C) {
      return V(r, a - 257, r - 211, C - 56);
    }
    function A(I, a, r, s, C) {
      return HA(r, a - 170, a - -100);
    }
    function g(I, a, r, s, C) {
      return V(I, a - 232, r - 132, C - -371);
    }
    if (!i)
      if (A(720, 774, "tY]R") === e(837, 792, "jp7p", 872, 862)) {
        console[e(968, 959, "py#U", 1076, 1019)](n("3PjE", 176, 90, 103, 98) + g("qpAW", 403, 394, 428, 459) + n("@Pjz", 113, 80, 187, 132) + t(863, 822, "AmOk", 779) + e(915, 837, "CfEh", 989, 876)), this[n("MGR#", 196, 170, 131, 226) + "se"] = void (-57 * -172 + 7608 + -17412);
        return;
      } else _0x417a0f[e(897, 953, "py#U", 906, 971) + "ch"]((I) => _0x1c7901[A(816, 877, "etLG")](I));
    function n(I, a, r, s, C) {
      return V(I, a - 496, r - 36, C - -750);
    }
    await this[g("vaCD", 526, 393, 385, 488) + e(947, 1030, "Z3Pl", 979, 958) + "se"](i);
  }
  async [QA(-58, "np^Y", -101, 5, -75) + QA(-45, "0e^a", -148, -100, -157) + mA(531, 449, 541, 549, "kQMj")](i) {
    function t(r, s, C, E, B) {
      return V(s, s - 430, C - 350, E - 301);
    }
    function e(r, s, C, E, B) {
      return V(B, s - 250, C - 135, C - -730);
    }
    const A = await fetch("" + i + this[I(322, 352, 259, 299, "JYCx") + I(472, 385, 373, 379, "kQMj") + t(1291, "JYCx", 1197, 1182) + a(742, 696, 687, 705, "AmOk")][7933 * 1 + 948 * 9 + 185 * -89]), g = A.ok ? 0 : -3294 + -1 * 9719 + 13014;
    function n(r, s, C, E, B) {
      return _A(s - -1102, s - 331, r);
    }
    function I(r, s, C, E, B) {
      return V(B, s - 454, C - 383, C - -625);
    }
    function a(r, s, C, E, B) {
      return V(B, s - 285, C - 308, C - -156);
    }
    return "" + i + this[I(316, 329, 281, 178, "Vp1t") + n("wsIm", -438) + e(70, 234, 142, 232, "py#U") + a(725, 647, 683, 702, "JEsz")][g];
  }
  [QA(16, "wsIm", -148, -48, -95) + V("Z3Pl", 998, 980, 960) + "s"](i) {
    function t(e, A, g, n, I) {
      return QA(e - 464, I, g - 49, n - 133, e - 1066);
    }
    i[t(950, 979, 905, 1047, "vcuI") + "ch"]((e) => console[t(1024, 1087, 981, 1030, "20(c")](e));
  }
  [mA(434, 452, 514, 458, "H(xf") + mA(535, 642, 600, 566, "AmOk") + V("I#@y", 995, 917, 897)](i) {
    function t(e, A, g, n, I) {
      return mA(e - 491, A - 79, g - 36, g - 54, I);
    }
    i[t(517, 466, 557, 645, "3PjE") + "ch"]((e) => console[t(706, 677, 617, 585, "MGR#")](e));
  }
  [QA(-111, "0e^a", -117, -179, -198) + V("C#k9", 711, 843, 812)]() {
    function i(A, g, n, I, a) {
      return V(a, g - 460, n - 205, A - -718);
    }
    function t(A, g, n, I, a) {
      return _A(I - -1071, g - 119, g);
    }
    function e(A, g, n, I, a) {
      return V(g, g - 496, n - 341, A - -303);
    }
    return window[i(248, 237, 183, 292, "kXp9") + e(522, "kXp9", 531)][t(-611, "A$Y&", -471, -522) + e(648, "vaCD", 754)];
  }
  [V("I#@y", 740, 836, 851) + QA(-175, "qpAW", -193, -190, -173) + mA(318, 325, 412, 393, "tY]R")]() {
    function i(n, I, a, r, s) {
      return V(r, I - 5, a - 152, s - -992);
    }
    function t(n, I, a, r, s) {
      return QA(n - 276, a, a - 161, r - 437, r - 286);
    }
    function e(n, I, a, r, s) {
      return QA(n - 359, I, a - 433, r - 74, r - 1260);
    }
    function A(n, I, a, r, s) {
      return mA(n - 408, I - 279, a - 135, a - 543, I);
    }
    function g(n, I, a, r, s) {
      return V(s, I - 266, a - 427, a - -1110);
    }
    try {
      if (t(177, 149, "JEsz", 176, 223) === A(1186, "tY]R", 1096, 1023, 1118)) {
        if (!this[A(876, "etLG", 926, 986, 825) + "se"])
          if (g(-218, -176, -220, -277, "GtUo") !== A(1105, "MGR#", 1039, 1097, 1135)) _0x57d44e[e(1225, "GtUo", 1094, 1145, 1038)]();
          else throw new Hi(g(-183, -111, -206, -265, "aCKQ") + i(-42, 64, 117, "&G@M", 16) + A(1007, "0e^a", 944, 852, 892) + t(16, 106, "V*qJ", 57, -11) + ".");
        if (!this[g(-375, -372, -284, -202, "vaCD") + t(266, 161, "3PjE", 165, 260) + "d"][t(-19, -13, "py#U", 74, 19) + g(-317, -335, -294, -242, "$]Kp") + e(1147, "Vp1t", 1116, 1119, 1102) + "ed"]()) {
          if (t(87, 166, "Bg2^", 181, 252) === t(78, 154, "jp7p", 107, 35)) return this[t(297, 286, "%)R)", 190, 267) + A(1166, "AmOk", 1073, 971, 1129)];
          throw new Hi(t(20, -38, "olTo", 56, 29) + t(157, 254, "I#@y", 206, 118) + i(-159, -35, -144, "%)R)", -58) + g(-139, -146, -136, -103, "GtUo") + ".");
        }
        this[e(994, "olTo", 1033, 1065, 1142) + t(147, 330, "hzBF", 227, 325)] = new lI(NQ(this[i(-74, 64, -90, "20(c", 11) + "se"], this[g(-189, -229, -258, -337, "jcz3") + A(969, ")Q!C", 1077, 968, 1004)]())), this[A(863, "4X(c", 946, 862, 916) + A(1152, "kXp9", 1094, 1077, 1072) + "s"](this[i(107, 119, 105, "aCKQ", 12) + t(176, 256, "aJns", 177, 272)][g(-204, -93, -202, -269, "3PjE") + "s"]), this[e(1177, "vaCD", 1215, 1177, 1074) + i(47, -26, -46, "&G@M", 35) + t(322, 230, "JYCx", 257, 313)](this[g(-22, -172, -106, -28, "aCKQ") + i(-64, -55, -60, "I#@y", -155)][g(-12, -82, -124, -29, "kdOo") + g(-226, -361, -288, -306, "wsIm")]);
      } else throw new _0x15faf2(g(-258, -288, -232, -175, "kQMj") + t(153, 257, "A5jN", 259, 170) + A(1153, "jp7p", 1082, 1082, 1129) + t(108, 88, "Bg2^", 73, 51) + "d.");
    } catch (n) {
      if (A(1125, "AmOk", 1016) !== A(1151, "JYCx", 1085)) {
        if (n instanceof Hi)
          if (g(-242, -176, -248, -142, "&Yi%") !== i(-122, -75, -159, "A5jN", -122)) {
            _0x58bb76 instanceof _0x4880ff && _0x50773e[g(-144, -166, -160, -104, "Vp1t") + A(945, "%)R)", 1024)](_0x3260d6);
            return;
          } else n[t(-10, 42, "kdOo", 79)]();
        else if (n instanceof Error)
          if (t(133, 115, "Vp1t", 98) === g(-281, -321, -282, -388, "kXp9")) console[e(1065, "x[1y", 1102, 1152)](n);
          else throw new _0x561d3c(A(1232, "aCKQ", 1120) + g(-315, -305, -303, -404, "kdOo") + g(-62, -185, -85, -18, "olTo") + i(-228, -70, -240, "PJ6W", -178) + ".");
        const I = {};
        I[e(1226, "20(c", 1091, 1190) + g(-155, -139, -200, -216, "AmOk")] = !1, I[t(156, 132, "A5jN", 209) + "s"] = [], I[t(261, 117, "aJns", 182) + e(933, "0e^a", 1095, 1027)] = [], I[t(238, 259, "@Pjz", 173) + t(60, 229, "JYCx", 152) + e(1108, "vaCD", 1174, 1128)] = void (-1 * -5147 + 1 * 2984 + -8131), I[t(365, 319, "aCKQ", 254)] = function() {
        }, I[e(1219, "Bg2^", 1096, 1134) + g(-134, -203, -187, -103, "x[1y")] = "", this[t(151, 363, "BjGU", 251) + e(996, "Vp1t", 1130, 1106)] = new lI(I);
      } else _0x9aa236[g(-294, -117, -221, -313, "kXp9")](_0xc8ae1b);
    }
  }
  [V("JYCx", 1058, 1009, 992) + V("A$Y&", 923, 1018, 1024) + QA(3, "aJns", -29, 15, -47) + "t"]() {
    function i(t, e, A, g, n) {
      return mA(t - 331, e - 241, A - 348, A - -1005, t);
    }
    return this[i("etLG", -662, -556) + i("0e^a", -518, -548)];
  }
  [HA("aJns", 953, 982) + mA(459, 440, 360, 428, "vaCD") + V("olTo", 901, 970, 995)]() {
    var n, I;
    function i(a, r, s, C, E) {
      return HA(s, r - 478, a - -1014);
    }
    function t(a, r, s, C, E) {
      return V(a, r - 18, s - 369, C - -510);
    }
    function e(a, r, s, C, E) {
      return V(E, r - 140, s - 413, C - -478);
    }
    if (!this[g(-394, -361, "aJns", -398) + "se"]) {
      if (i(-215, -179, "&Yi%") !== i(-192, -171, "A$Y&")) return;
      {
        const a = _0x2a107c[e(317, 495, 385, 383, "CfEh")](this[A("PJ6W", 1010) + "se"]);
        return (n = a == null ? void 0 : a[t("MGR#", 372, 324, 303) + g(-477, -443, "A5jN", -392)]) == null ? void 0 : n[t("etLG", 358, 444, 395) + e(361, 432, 503, 393, "tY]R")];
      }
    }
    function A(a, r, s, C, E) {
      return _A(r - 375, r - 99, a);
    }
    function g(a, r, s, C, E) {
      return QA(a - 8, s, s - 129, C - 447, a - -246);
    }
    try {
      if (A("PJ6W", 915, 870, 992, 858) !== A("3PjE", 860, 960, 790, 899)) {
        const a = JSON[A("wsIm", 954, 971, 1041, 996)](this[g(-285, -329, "JEsz", -255, -271) + "se"]);
        return (I = a == null ? void 0 : a[e(455, 611, 449, 544, "jp7p") + i(-93, -146, "qpAW", -149, -151)]) == null ? void 0 : I[t("x[1y", 496, 407, 462, 431) + A("wizS", 855, 799, 825, 906)];
      } else _0x5b56ce[A("jcz3", 896, 939, 932, 786) + "ch"]((a) => _0x2d2d5f[t("4X(c", 516, 492, 439, 397)](a));
    } catch (a) {
      if (e(602, 519, 482, 510, "hzBF") === t("x[1y", 564, 569, 473)) {
        a instanceof Error && (g(-369, -308, "kXp9", -332) !== A("vcuI", 1056) ? U[g(-437, -408, "&G@M", -396) + e(509, 434, 493, 450, "Z3Pl")](a) : (this[e(461, 490, 303, 396, "&Yi%") + "se"] = void (-58 * -58 + -17 * -107 + -1 * 5183), _0x145eb0[g(-347, -432, "np^Y", -251)](_0x31c79c)));
        return;
      } else _0x22b758[g(-330, -443, "jp7p", -362) + A("kQMj", 923)](_0x1f55e9);
    }
  }
}
const gi = class gi extends JQ {
  static getInstance() {
    if (!this._instance) {
      const i = new vQ();
      this._instance = new gi(i);
    }
    return this._instance;
  }
};
w(gi, "_instance");
let wg = gi;
const ni = class ni {
  constructor() {
    w(this, "lastDetails", {});
    w(this, "delayedTime", -543 * 17 + -1751 + 38 * 289);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ni()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -702 * -1 + 4567 * 1 + -5269;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && Q0(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
w(ni, "_instance");
let vt = ni;
const to = vt.getInstance(), l0 = (o, i, t = DB) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  to.dispatchDelayedCustomEventOnChange(o, A, t);
}, UQ = (o, i) => {
  to.dispatchCustomEventOnChange(o, i);
}, YQ = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  to.dispatchCustomEventOnChange(o, e);
}, WQ = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const g = A;
  to.dispatchCustomEventOnChange(o, g);
}, OQ = (o, { detection: i, fps: t, image: e, invalidValidators: A, isInCandidateSelection: g }) => {
  const n = {};
  n.image = e, n.data = {}, n.data.detection = i, n.data.fps = t, n.data.isInCandidateSelection = g, n.data.invalidValidators = A, n.data.imageResolution = {}, n.data.imageResolution.width = e.width, n.data.imageResolution.height = e.height;
  const I = n;
  to.dispatchCustomEventOnChange(o, I);
}, mg = (o, i) => {
  Q0(o, i);
}, HQ = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  P(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, UQ(o, A);
  }, [t, e, o]);
}, KQ = (o) => o === Wa.CONTROL ? !$a() : !0, TQ = (o, i) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: g } = rt(), [n, I] = xA(), a = hA(() => {
    const s = g && i && i.isStreaming && i.getCameraSettings().facingMode;
    return s ? n ?? s === "user" : n ?? KQ(o);
  }, [i, n, o, g]);
  P(() => {
    const s = () => {
      t !== PA.LOADING && e(PA.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, E = async () => {
      if (i) {
        e(PA.LOADING);
        try {
          await i.switchCamera(), e(PA.RUNNING);
        } catch (x) {
          if (x instanceof Error) {
            A(U.fromCameraError(x));
            return;
          }
        }
        I(void 0);
      }
    }, B = (x) => {
      var d;
      switch ((d = x.detail) == null ? void 0 : d["instruction"]) {
        case Si.CONTINUE_DETECTION:
          s();
          break;
        case Si.TOGGLE_MIRROR:
          C();
          break;
        case Si.SWITCH_CAMERA:
          E();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(o, B), () => {
      document.removeEventListener(o, B);
    };
  }, [t, i, A, n, e, a, o]);
  const r = {};
  return r.shouldCameraMirror = a, r;
};
function PQ(o, i) {
  P(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      YQ(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
function qQ(o) {
  return ie(Math.abs(o));
}
const jQ = () => {
  const [o, i] = xA(null), t = fA(new en(-11 * -287 + -844 + 1154 * -2));
  function e(g) {
    const { z: n } = g.accelerationIncludingGravity || {};
    if (!n) return;
    t.current.pushFixed(qQ(n));
    const I = ie(Rt(t.current)), a = {};
    a.z = I, i(a);
  }
  P(() => (window.addEventListener("devicemotion", nQ(e, tQ), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = o, A;
}, u0 = (o, i) => {
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
var ZQ = Symbol.for("preact-signals");
function on() {
  if (qe > -1 * 2678 + 1 * -4921 + -38 * -200)
    qe--;
  else {
    for (var o, i = !1; void (-1114 * 3 + 1 * -167 + 3509) !== Nt; ) {
      var t = Nt;
      for (Nt = void (-1985 * 1 + -7531 * 1 + -13 * -732), bg++; void (-5391 * -1 + 4111 + -9502) !== t; ) {
        var e = t.o;
        if (t.o = void (283 * -3 + 28 * -57 + 489 * 5), t.f &= -(-6309 + -437 * 5 + -29 * -293), !(-2 * 2642 + 23 * 3 + 5223 * 1 & t.f) && p0(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !(8020 + -1 * 9973 + 1953));
        }
        t = e;
      }
    }
    if (bg = -13137 + -151 * -87, qe--, i) throw o;
  }
}
var T = void (853 + 938 * -9 + 7589), Nt = void (-1 * 5729 + 696 + 5033), qe = -6596 + 147 * 62 + 1259 * -2, bg = 178 * 36 + 8053 + -14461, Zo = -139 * 29 + 6001 * -1 + 10032;
function h0(o) {
  if (void (-457 * -3 + 1165 * 7 + 9526 * -1) !== T) {
    var i = o.n;
    if (i === void 0 || i.t !== T)
      return i = { i: 0, S: o, p: T.s, n: void 0, t: T, e: void (1 * -383 + -1 * -4999 + -4616), x: void (-55 * -6 + -4404 + -7 * -582), r: i }, void (191 * 25 + 5 * 749 + -4 * 2130) !== T.s && (T.s.n = i), T.s = i, o.n = i, -3824 + -482 * -8 & T.f && o.S(i), i;
    if (-(7901 * 1 + 4964 + 2144 * -6) === i.i)
      return i.i = -4931 * 1 + -3046 * 1 + -3 * -2659, void (2 * -718 + -5399 + 6835) !== i.n && (i.n.p = i.p, void (1 * -6065 + -7244 + 13309) !== i.p && (i.p.n = i.n), i.p = T.s, i.n = void 0, T.s.n = i, T.s = i), i;
  }
}
function aA(o) {
  this.v = o, this.i = 0, this.n = void (6342 + -9371 * 1 + 3029), this.t = void (-4633 * -2 + -43 * -173 + -16705);
}
aA.prototype.brand = ZQ, aA.prototype.h = function() {
  return !(-1955 + -283 * 20 + 7615);
}, aA.prototype.S = function(o) {
  this.t !== o && void (623 + 2 * -375 + 127) === o.e && (o.x = this.t, void (-3861 + 2427 * 2 + -993) !== this.t && (this.t.e = o), this.t = o);
}, aA.prototype.U = function(o) {
  if (void (-1 * 5465 + -5028 + 1 * 10493) !== this.t) {
    var i = o.e, t = o.x;
    i !== void 0 && (i.x = t, o.e = void (22 * 398 + -2284 + -6472)), void (9343 + -112 * 16 + -7551 * 1) !== t && (t.e = i, o.x = void (1083 * 9 + 8041 + -17788)), o === this.t && (this.t = t);
  }
}, aA.prototype.subscribe = function(o) {
  var i = this;
  return li(function() {
    var t = i.value, e = T;
    T = void (-3075 + -2 * 4282 + 11639);
    try {
      o(t);
    } finally {
      T = e;
    }
  });
}, aA.prototype.valueOf = function() {
  return this.value;
}, aA.prototype.toString = function() {
  return this.value + "";
}, aA.prototype.toJSON = function() {
  return this.value;
}, aA.prototype.peek = function() {
  var o = T;
  T = void (-9541 + 1 * 113 + 9428);
  try {
    return this.value;
  } finally {
    T = o;
  }
}, Object.defineProperty(aA.prototype, "value", { get: function() {
  var o = h0(this);
  return o !== void 0 && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (bg > 170 + 7 * -10) throw new Error("Cycle detected");
    this.v = o, this.i++, Zo++, qe++;
    try {
      for (var i = this.t; void (666 + -333 * 2) !== i; i = i.x) i.t.N();
    } finally {
      on();
    }
  }
} });
function f0(o) {
  return new aA(o);
}
function p0(o) {
  for (var i = o.s; void (-3 * 586 + -7683 + 9441) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(24 * 299 + 3129 + -10305);
  return !(809 + -8 * -770 + 871 * -8);
}
function y0(o) {
  for (var i = o.s; void (-4 * 1511 + -4469 * -2 + -2 * 1447) !== i; i = i.n) {
    var t = i.S.n;
    if (void (4791 + 1 * -4791) !== t && (i.r = t), i.S.n = i, i.i = -(-6386 + 1 * -146 + 6533), void (-1162 + -9662 * -1 + -8500) === i.n) {
      o.s = i;
      break;
    }
  }
}
function D0(o) {
  for (var i = o.s, t = void (8 * -1009 + -7891 * 1 + -313 * -51); void (68 * -6 + -305 * 19 + 6203) !== i; ) {
    var e = i.p;
    -(44 * -134 + -1 * -5607 + 1 * 290) === i.i ? (i.S.U(i), e !== void 0 && (e.n = i.n), void (3286 + 37 * -191 + -1 * -3781) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (-4322 * -2 + -1294 * 1 + -7350) !== i.r && (i.r = void (8571 + -5 * -1553 + -16336)), i = e;
  }
  o.s = t;
}
function Ke(o) {
  aA.call(this, void (-5 * -909 + 3 * -3119 + 4812)), this.x = o, this.s = void (-287 + 2341 * 2 + -293 * 15), this.g = Zo - (-6070 + 2207 * -1 + -2 * -4139), this.f = 11 * -265 + 5202 + -2283 * 1;
}
(Ke.prototype = new aA()).h = function() {
  if (this.f &= -(-11036 + 1 * 11039), -87 * -16 + 9147 + -10538 & this.f) return !(23 * 26 + 8461 * -1 + 7864);
  if ((-1722 + -879 * -2 & this.f) == 32) return !(7756 + 25 * -167 + -3581);
  if (this.f &= -(613 * 4 + -1768 + -679), this.g === Zo) return !(215 + -1 * 215);
  if (this.g = Zo, this.f |= 3783 + -1 * 3782, this.i > 9895 + -8 * -678 + -15319 && !p0(this)) return this.f &= -(9 * -993 + -5 * 1033 + -41 * -344), !(9427 * -1 + -179 * 43 + -2 * -8562);
  var o = T;
  try {
    y0(this), T = this;
    var i = this.x();
    (-1378 + 3 * 1650 + -3556 & this.f || this.v !== i || -43 * 167 + -517 * -5 + 4596 === this.i) && (this.v = i, this.f &= -(-2633 + -106 * -25), this.i++);
  } catch (t) {
    this.v = t, this.f |= -2878 * 2 + 5997 + -15 * 15, this.i++;
  }
  return T = o, D0(this), this.f &= -(-883 * -11 + 1 * 9542 + -19253), !(7570 + -2243 * 3 + -841);
}, Ke.prototype.S = function(o) {
  if (this.t === void 0) {
    this.f |= -1913 * 1 + 8896 + -6947;
    for (var i = this.s; void (-4847 + -118 * 26 + 7915 * 1) !== i; i = i.n) i.S.S(i);
  }
  aA.prototype.S.call(this, o);
}, Ke.prototype.U = function(o) {
  if (void (9339 + -5 * 1031 + 2092 * -2) !== this.t && (aA.prototype.U.call(this, o), void (1059 + -10 * 836 + 7301) === this.t)) {
    this.f &= -(26 * 202 + 6397 + -11616);
    for (var i = this.s; void (1 * 6271 + -647 * 8 + 365 * -3) !== i; i = i.n) i.S.U(i);
  }
}, Ke.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 11113 + 1 * -11107;
    for (var o = this.t; void (-5161 * -1 + -188 * 22 + 205 * -5) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(Ke.prototype, "value", { get: function() {
  if (-233 * -11 + -3686 + 1124 & this.f) throw new Error("Cycle detected");
  var o = h0(this);
  if (this.h(), void (-1 * -1999 + -9919 * -1 + 202 * -59) !== o && (o.i = this.i), 999 * 1 + -457 * 15 + 5872 & this.f) throw this.v;
  return this.v;
} });
function VQ(o) {
  return new Ke(o);
}
function w0(o) {
  var i = o.u;
  if (o.u = void (-2 * -382 + -43 * 17 + -33), typeof i == "function") {
    qe++;
    var t = T;
    T = void (8278 * -1 + -1 * 803 + -9081 * -1);
    try {
      i();
    } catch (e) {
      throw o.f &= -(-1 * -11 + 9891 + -4 * 2475), o.f |= -1413 + 991 * -2 + 3403 * 1, gn(o), e;
    } finally {
      T = t, on();
    }
  }
}
function gn(o) {
  for (var i = o.s; void (7948 * -1 + 2633 * 3 + 49) !== i; i = i.n) i.S.U(i);
  o.x = void 0, o.s = void (5904 + -72 * 82), w0(o);
}
function _Q(o) {
  if (T !== this) throw new Error("Out-of-order effect");
  D0(this), T = o, this.f &= -(5395 + 1 * 4273 + 3 * -3222), 8 & this.f && gn(this), on();
}
function Dt(o) {
  this.x = o, this.u = void (9465 + 3 * -2233 + 2766 * -1), this.s = void (2 * 1901 + 166 * 11 + -67 * 84), this.o = void (-1 * -4507 + -8213 + 1853 * 2), this.f = -2138 * 3 + -9 * 214 + -4186 * -2;
}
Dt.prototype.c = function() {
  var o = this.S();
  try {
    if (-18 * -390 + -1 * -8501 + -15513 & this.f || void (-4426 + -2 * -711 + 1 * 3004) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, Dt.prototype.S = function() {
  if (-1 * -4969 + -9579 + 87 * 53 & this.f) throw new Error("Cycle detected");
  this.f |= -19 * -290 + -2694 + -2815, this.f &= -(1541 + 13 * 296 + -5380), w0(this), y0(this), qe++;
  var o = T;
  return T = this, _Q.bind(this, o);
}, Dt.prototype.N = function() {
  !(-9104 + -1 * -145 + 3 * 2987 & this.f) && (this.f |= 371 * 11 + 1406 + -5485, this.o = Nt, Nt = this);
}, Dt.prototype.d = function() {
  this.f |= -4453 + -2434 * -1 + -2027 * -1, -991 * 2 + 9707 + -7724 & this.f || gn(this);
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
var Ti;
function Pe(o, i) {
  N[o] = i.bind(null, N[o] || function() {
  });
}
function so(o) {
  Ti && Ti(), Ti = o && o.S();
}
function m0(o) {
  var i = this, t = o.data, e = Ct(t);
  e.value = t;
  var A = hA(function() {
    for (var g = i.__v; g = g.__; ) if (g.__c) {
      g.__c.__$f |= -6756 + -1 * -9934 + -3174;
      break;
    }
    return i.__$u.c = function() {
      var n;
      !OI(A.peek()) && 8514 * -1 + 3 * -1819 + 13974 * 1 === ((n = i.base) == null ? void (9951 + 131 * -52 + -3139 * 1) : n.nodeType) ? i.base.data = A.peek() : (i.__$f |= 5236 + -12 * 86 + -4203, i.setState({}));
    }, VQ(function() {
      var n = e.value.value;
      return 10782 + -1797 * 6 === n ? -6655 + 439 * -11 + 11484 : !(-5 * 309 + 6 * -48 + -1 * -1833) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
m0.displayName = "_st";
var Gg = {};
Gg.configurable = !(13 * -750 + -137 * -49 + 3037), Gg.value = void (1 * -3856 + 3 * 2823 + -1 * 4613);
var kg = {};
kg.configurable = !(-2 * -139 + -5286 * 1 + 5008), kg.value = m0;
var Ng = {};
Ng.configurable = !(-53 * 157 + -397 * -16 + 1969), Ng.get = function() {
  var o = {};
  return o.data = this, o;
};
var Fg = {};
Fg.configurable = !(2928 + -1 * 9409 + 6481), Fg.value = 1;
var Et = {};
Et.constructor = Gg, Et.type = kg, Et.props = Ng, Et.__b = Fg, Object.defineProperties(aA.prototype, Et), Pe("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var g = e[A];
      g instanceof aA && (t || (i.__np = t = {}), t[A] = g, e[A] = g.peek());
    }
  }
  o(i);
}), Pe("__r", function(o, i) {
  so();
  var t, e = i.__c;
  e && (e.__$f &= -(11120 + 51 * -218), void (-8536 + 27 * 113 + 5485 * 1) === (t = e.__$u) && (e.__$u = t = function(A) {
    var g;
    return li(function() {
      g = this;
    }), g.c = function() {
      e.__$f |= -4342 + -143 * -55 + -3522, e.setState({});
    }, g;
  }())), so(t), o(i);
}), Pe("__e", function(o, i, t, e) {
  so(), o(i, t, e);
}), Pe("diffed", function(o, i) {
  so();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var g = t.U;
      if (g) for (var n in g) {
        var I = g[n];
        void (4775 + -37 * -57 + -6884) !== I && !(n in e) && (I.d(), g[n] = void (961 * 8 + -6294 + -17 * 82));
      }
      else t.U = g = {};
      for (var a in e) {
        var r = g[a], s = e[a];
        r === void 0 ? (r = zQ(t, a, s, A), g[a] = r) : r.o(s, A);
      }
    }
  }
  o(i);
});
function zQ(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, g = f0(t);
  return { o: function(n, I) {
    g.value = n, e = I;
  }, d: li(function() {
    var n = g.value.value;
    e[i] !== n && (e[i] = n, A ? o[i] = n : n ? o.setAttribute(i, n) : o.removeAttribute(i));
  }) };
}
Pe("unmount", function(o, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-3518 + 239 * 23 + -1979);
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
      I && (n.__$u = void 0, I.d());
    }
  }
  o(i);
}), Pe("__h", function(o, i, t, e) {
  (e < -1 * -7586 + -1 * 6349 + -1 * 1234 || 1 * 9629 + -340 * -21 + -16760 === e) && (i.__$f |= -1 * 9239 + -4219 + 13460), o(i, t, e);
}), MA.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && void (-9817 * 1 + -5061 + 14878 * 1) !== t.s || 313 * 23 + 1 * -8263 + 1068 & this.__$f)) return !(-4155 + -1 * 4447 + 8602 * 1);
  if (3 & this.__$f) return !(-1 * 6886 + -7734 + 14620);
  for (var e in i) return !(-1724 + -17 * -493 + -951 * 7);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(67 * -1 + -4574 * -1 + -4507);
  for (var g in this.props) if (!(g in o)) return !(-1556 * 5 + 2559 + 5221);
  return !(4717 * 1 + -5736 + 1020);
};
function Ct(o) {
  return hA(function() {
    return f0(o);
  }, []);
}
function XQ(o) {
  var i = fA(o);
  i.current = o, P(function() {
    return li(function() {
      return i.current();
    });
  }, []);
}
const $Q = (o) => {
  const i = Ct(!1);
  return u0(o, (e) => {
    e.detail && (i.value = e.detail.animationEnd);
  }), i;
}, As = async () => WebAssembly.validate(new Uint8Array([10083 + 3 * -3361, 13 * 293 + -2794 * -3 + -12094 * 1, -628 + 2 * -3305 + -171 * -43, -207 * -39 + 41 * -113 + -3331, 10062 + -10061 * 1, 4259 + 557 * 5 + -7044, -483 + -89 * -109 + -838 * 11, -2 * -4099 + 2875 + -11073, -1 * 8063 + 424 * -1 + 8488, 2677 + -11 * 473 + 1 * 2531, -4831 * 1 + 1 * -6869 + 1 * 11701, 5881 * -1 + -4824 + 7 * 1543, -2 * 698 + -3 * 1084 + 4648, 1391 * -1 + 3695 + -329 * 7, -35 * 206 + -5793 + 13126, -6068 + -338 * 1 + -377 * -17, -947 * 7 + 9 * -1028 + 15883, 1 * -2243 + 2113 * -2 + 6470, -2038 + -1069 * 4 + -82 * -77, -1201 + 6 * -355 + -1 * -3341, 3352 + 2 * -4269 + 433 * 12, 7567 + -1 * -3329 + -10895, -7 * 1155 + -4140 + -1 * -12233, 57 + -1970 * 1 + -1 * -1913, -9468 + 1 * 9533, 0, 253, 15, 253, -4 * -1294 + 1753 + -6831, 3964 + -59 * 67]));
function es() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(2447 + -2 * -356 + -3143);
}
function ts() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = es();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function os(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const uI = (o) => Math.round(o / 500) * 500 / (7005 + 1 * -4067 + 2 * -969), Oe = (o) => o ? o <= 1 ? Math.round(o * (1633 * 1 + 21 * -355 + 5842)) / (-29 * -303 + 9136 + -17903) : Math.round(o / 50) * (497 * -3 + -3833 * 1 + 5374) : 0, is = (o) => Math.round(o * (-179 * -2 + -1 * -5803 + -1 * 6159)) / (-2 * 97 + -6757 + -409 * -17);
async function gs() {
  return await As() ? QI.SIMD : QI.NO_SIMD;
}
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b0 = {}, hI = {}, ns = Is;
function Is(o, i) {
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
var G0 = {};
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
    for (var r = null, s = [], C = 0, E = 0, B; I < a; ) {
      var x = n[I++];
      switch (E) {
        case 0:
          s[C++] = t[x >> 2], B = (x & 3) << 4, E = 1;
          break;
        case 1:
          s[C++] = t[B | x >> 4], B = (x & 15) << 2, E = 2;
          break;
        case 2:
          s[C++] = t[B | x >> 6], s[C++] = t[x & 63], E = 0;
          break;
      }
      C > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, s)), C = 0);
    }
    return E && (s[C++] = t[B], s[C++] = 61, E === 1 && (s[C++] = 61)), r ? (C && r.push(String.fromCharCode.apply(String, s.slice(0, C))), r.join("")) : String.fromCharCode.apply(String, s.slice(0, C));
  };
  var g = "invalid encoding";
  i.decode = function(n, I, a) {
    for (var r = a, s = 0, C, E = 0; E < n.length; ) {
      var B = n.charCodeAt(E++);
      if (B === 61 && s > 1)
        break;
      if ((B = e[B]) === void 0)
        throw Error(g);
      switch (s) {
        case 0:
          C = B, s = 1;
          break;
        case 1:
          I[a++] = C << 2 | (B & 48) >> 4, C = B, s = 2;
          break;
        case 2:
          I[a++] = (C & 15) << 4 | (B & 60) >> 2, C = B, s = 3;
          break;
        case 3:
          I[a++] = (C & 3) << 6 | B, s = 0;
          break;
      }
    }
    if (s === 1)
      throw Error(g);
    return a - r;
  }, i.test = function(n) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n);
  };
})(G0);
var as = ui;
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
var rs = fI(fI);
function fI(o) {
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
    o.writeFloatLE = i.bind(null, pI), o.writeFloatBE = i.bind(null, yI);
    function t(e, A, g) {
      var n = e(A, g), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    o.readFloatLE = t.bind(null, DI), o.readFloatBE = t.bind(null, wI);
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
    o.writeDoubleLE = i.bind(null, pI, 0, 4), o.writeDoubleBE = i.bind(null, yI, 4, 0);
    function t(e, A, g, n, I) {
      var a = e(n, I + A), r = e(n, I + g), s = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, E = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? E ? NaN : s * (1 / 0) : C === 0 ? s * 5e-324 * E : s * Math.pow(2, C - 1075) * (E + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, DI, 0, 4), o.readDoubleBE = t.bind(null, wI, 4, 0);
  }(), o;
}
function pI(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function yI(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function DI(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function wI(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function mI(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Cs = Bs;
function Bs(o) {
  try {
    if (typeof mI != "function")
      return null;
    var i = mI(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var k0 = {};
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
})(k0);
var Qs = ss;
function ss(o, i, t) {
  var e = t || 8192, A = e >>> 1, g = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return o(I);
    n + I > e && (g = o(e), n = 0);
    var a = i.call(g, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var Pi, bI;
function cs() {
  if (bI)
    return Pi;
  bI = 1, Pi = i;
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
  }, Pi;
}
var GI;
function Le() {
  return GI || (GI = 1, function(o) {
    var i = o;
    i.asPromise = ns, i.base64 = G0, i.EventEmitter = as, i.float = rs, i.inquire = Cs, i.utf8 = k0, i.pool = Qs, i.LongBits = cs(), i.isNode = !!(typeof de < "u" && de && de.process && de.process.versions && de.process.versions.node), i.global = i.isNode && de || typeof window < "u" && window || typeof self < "u" && self || de, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
  }(hI)), hI;
}
var N0 = Y, vA = Le(), Sg, hi = vA.LongBits, kI = vA.base64, NI = vA.utf8;
function oo(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function nn() {
}
function Es(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function Y() {
  this.len = 0, this.head = new oo(nn, 0, 0), this.tail = this.head, this.states = null;
}
var F0 = function() {
  return vA.Buffer ? function() {
    return (Y.create = function() {
      return new Sg();
    })();
  } : function() {
    return new Y();
  };
};
Y.create = F0();
Y.alloc = function(o) {
  return new vA.Array(o);
};
vA.Array !== Array && (Y.alloc = vA.pool(Y.alloc, vA.Array.prototype.subarray));
Y.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new oo(o, i, t), this.len += i, this;
};
function In(o, i, t) {
  i[t] = o & 255;
}
function xs(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function an(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
an.prototype = Object.create(oo.prototype);
an.prototype.fn = xs;
Y.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new an(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
Y.prototype.int32 = function(o) {
  return o < 0 ? this._push(rn, 10, hi.fromNumber(o)) : this.uint32(o);
};
Y.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function rn(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
Y.prototype.uint64 = function(o) {
  var i = hi.from(o);
  return this._push(rn, i.length(), i);
};
Y.prototype.int64 = Y.prototype.uint64;
Y.prototype.sint64 = function(o) {
  var i = hi.from(o).zzEncode();
  return this._push(rn, i.length(), i);
};
Y.prototype.bool = function(o) {
  return this._push(In, 1, o ? 1 : 0);
};
function Rg(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
Y.prototype.fixed32 = function(o) {
  return this._push(Rg, 4, o >>> 0);
};
Y.prototype.sfixed32 = Y.prototype.fixed32;
Y.prototype.fixed64 = function(o) {
  var i = hi.from(o);
  return this._push(Rg, 4, i.lo)._push(Rg, 4, i.hi);
};
Y.prototype.sfixed64 = Y.prototype.fixed64;
Y.prototype.float = function(o) {
  return this._push(vA.float.writeFloatLE, 4, o);
};
Y.prototype.double = function(o) {
  return this._push(vA.float.writeDoubleLE, 8, o);
};
var ds = vA.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
Y.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(In, 1, 0);
  if (vA.isString(o)) {
    var t = Y.alloc(i = kI.length(o));
    kI.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(ds, i, o);
};
Y.prototype.string = function(o) {
  var i = NI.length(o);
  return i ? this.uint32(i)._push(NI.write, i, o) : this._push(In, 1, 0);
};
Y.prototype.fork = function() {
  return this.states = new Es(this), this.head = this.tail = new oo(nn, 0, 0), this.len = 0, this;
};
Y.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new oo(nn, 0, 0), this.len = 0), this;
};
Y.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
Y.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
Y._configure = function(o) {
  Sg = o, Y.create = F0(), Sg._configure();
};
var ls = jA, S0 = N0;
(jA.prototype = Object.create(S0.prototype)).constructor = jA;
var Qe = Le();
function jA() {
  S0.call(this);
}
jA._configure = function() {
  jA.alloc = Qe._Buffer_allocUnsafe, jA.writeBytesBuffer = Qe.Buffer && Qe.Buffer.prototype instanceof Uint8Array && Qe.Buffer.prototype.set.name === "set" ? function(o, i, t) {
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
  Qe.isString(o) && (o = Qe._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(jA.writeBytesBuffer, i, o), this;
};
function us(o, i, t) {
  o.length < 40 ? Qe.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
jA.prototype.string = function(o) {
  var i = Qe.Buffer.byteLength(o);
  return this.uint32(i), i && this._push(us, i, o), this;
};
jA._configure();
var R0 = $, ZA = Le(), Mg, M0 = ZA.LongBits, hs = ZA.utf8;
function WA(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function $(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var FI = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new $(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new $(o);
  throw Error("illegal buffer");
}, v0 = function() {
  return ZA.Buffer ? function(o) {
    return ($.create = function(i) {
      return ZA.Buffer.isBuffer(i) ? new Mg(i) : FI(i);
    })(o);
  } : FI;
};
$.create = v0();
$.prototype._slice = ZA.Array.prototype.subarray || /* istanbul ignore next */
ZA.Array.prototype.slice;
$.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, WA(this, 10);
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
function qi() {
  var o = new M0(0, 0), i = 0;
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
        throw WA(this);
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
        throw WA(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
$.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Vo(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
$.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw WA(this, 4);
  return Vo(this.buf, this.pos += 4);
};
$.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw WA(this, 4);
  return Vo(this.buf, this.pos += 4) | 0;
};
function SI() {
  if (this.pos + 8 > this.len)
    throw WA(this, 8);
  return new M0(Vo(this.buf, this.pos += 4), Vo(this.buf, this.pos += 4));
}
$.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw WA(this, 4);
  var o = ZA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
$.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw WA(this, 4);
  var o = ZA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
$.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw WA(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
$.prototype.string = function() {
  var o = this.bytes();
  return hs.read(o, 0, o.length);
};
$.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw WA(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw WA(this);
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
  Mg = o, $.create = v0(), Mg._configure();
  var i = ZA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  ZA.merge($.prototype, {
    int64: function() {
      return qi.call(this)[i](!1);
    },
    uint64: function() {
      return qi.call(this)[i](!0);
    },
    sint64: function() {
      return qi.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return SI.call(this)[i](!0);
    },
    sfixed64: function() {
      return SI.call(this)[i](!1);
    }
  });
};
var fs = Me, L0 = R0;
(Me.prototype = Object.create(L0.prototype)).constructor = Me;
var RI = Le();
function Me(o) {
  L0.call(this, o);
}
Me._configure = function() {
  RI.Buffer && (Me.prototype._slice = RI.Buffer.prototype.slice);
};
Me.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
Me._configure();
var J0 = {}, ps = Lt, Cn = Le();
(Lt.prototype = Object.create(Cn.EventEmitter.prototype)).constructor = Lt;
function Lt(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  Cn.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
Lt.prototype.rpcCall = function o(i, t, e, A, g) {
  if (!A)
    throw TypeError("request must be specified");
  var n = this;
  if (!g)
    return Cn.asPromise(o, n, i, t, e, A);
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
  i.Service = ps;
})(J0);
var ys = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = N0, i.BufferWriter = ls, i.Reader = R0, i.BufferReader = fs, i.util = Le(), i.rpc = J0, i.roots = ys, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(b0);
var M = b0;
const f = M.Reader, L = M.Writer, l = M.util, Q = M.roots.default || (M.roots.default = {}), ve = Q.dot = (() => {
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
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = Q.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(E & 7);
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
        return A || (A = L.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
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
        return A || (A = L.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && Q.dot.ImageSize.encode(e.size, A.uint32(
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
                let E = A.uint32();
                switch (E >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = A.bool();
                    break;
                  default:
                    A.skipType(E & 7);
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
        return A || (A = L.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && Q.dot.ImageSize.encode(e.resolution, A.uint32(
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
        if (g || (g = L.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && Q.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, g.uint32(
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
        return g || (g = L.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && Q.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, g.uint32(
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
        return A || (A = L.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
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
        return A || (A = L.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
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
        return g || (g = L.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && Q.dot.v4.DocumentContent.encode(A.documentContent, g.uint32(
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
        return A || (A = L.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && Q.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        return A || (A = L.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && Q.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
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
        return g || (g = L.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && Q.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, g.uint32(
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
        return A || (A = L.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && Q.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
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
        return A || (A = L.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && Q.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
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
        return A || (A = L.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && Q.dot.Image.encode(e.image, A.uint32(
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
      return this.constructor.toObject(this, M.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), o;
})();
(function(o, i) {
  const t = o();
  function e(I, a, r, s, C) {
    return X(C - 784, a);
  }
  function A(I, a, r, s, C) {
    return X(I - 318, r);
  }
  function g(I, a, r, s, C) {
    return X(I - 329, r);
  }
  function n(I, a, r, s, C) {
    return X(s - 513, a);
  }
  for (; ; )
    try {
      if (parseInt(g(509, 510, "Iv$*", 516, 532)) / 1 * (-parseInt(g(501, 502, "L!MX", 497, 479)) / 2) + -parseInt(A(457, 467, "Fe5U", 476, 450)) / 3 + parseInt(e(948, "Uq*a", 940, 932, 929)) / 4 + -parseInt(g(478, 469, "Iv$*", 498, 457)) / 5 + -parseInt(e(958, "wD0P", 941, 941, 934)) / 6 * (parseInt(g(482, 464, "hM3i", 464, 499)) / 7) + -parseInt(n(662, "p#e)", 641, 653, 641)) / 8 * (parseInt(A(485, 484, "0pEb", 471, 494)) / 9) + -parseInt(n(656, "Ml@2", 646, 664, 659)) / 10 * (-parseInt(n(623, ")pz(", 644, 647, 639)) / 11) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(_o, 719 * -217 + 280025 + 39573 * 3);
async function Ds() {
  const o = {};
  function i(s, C, E, B, x) {
    return X(C - -575, B);
  }
  function t(s, C, E, B, x) {
    return X(B - 662, C);
  }
  function e(s, C, E, B, x) {
    return X(E - 959, x);
  }
  o[A(899, 922, 876, "fF%@")] = _a;
  function A(s, C, E, B, x) {
    return X(s - 739, B);
  }
  o[A(909, 927, 917, "h^ye") + "h"] = 256;
  const g = await window[A(903, 896, 894, "fF%@") + "o"][e(1128, 1100, 1120, 1099, "WP#A") + "e"][t(812, "r0ok", 833, 835) + e(1088, 1091, 1107, 1109, "Zpa6") + "y"](o, !0, [A(918, 910, 929, "dgy1") + "pt", t(784, "Iv$*", 794, 797) + "pt"]), n = Uint8Array[r(-786, -793, ")pz(")](Array(-5314 * 1 + 63 * -25 + -5 * -1381)[A(895, 879, 888, "pU#j")](155 + 31 * -5)), I = window[e(1134, 1124, 1114, 1102, "462f") + "o"][A(901, 924, 916, "fF%@") + i(-415, -437, -457, "4APJ") + A(880, 885, 895, "cBmq")](n), a = {};
  a[A(875, 874, 858, "4APJ")] = g;
  function r(s, C, E, B, x) {
    return X(C - -970, E);
  }
  return a.iv = I, a;
}
function X(o, i) {
  const t = _o();
  return X = function(e, A) {
    e = e - (1 * 9497 + -6441 + -37 * 79);
    let g = t[e];
    if (X.TlDKqj === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      X.VPmkXk = s, o = arguments, X.TlDKqj = !0;
    }
    const I = t[1 * -5815 + 2110 + -195 * -19], a = e + I, r = o[a];
    return r ? g = r : (X.oPTnVL === void 0 && (X.oPTnVL = !0), g = X.VPmkXk(g, A), o[a] = g), g;
  }, X(o, i);
}
function _o() {
  const o = ["W4fQWRSzFSoWqXBcVMa", "B8kgW4FcLcK", "yCk1y1BcHmkso3mxm8kHW7i", "W5PJW5ldLdNcJCkvCmkSEW", "xLOQWPuA", "t8kKWQNcPG", "jGnue8oS", "W7DAoJ/cUq", "A8oZaN04edZcGJ1rWQf0", "uWFcVmozwdXmWRRdG2njg8kX", "yIpcMKJcMCkqWPddNG", "iI1NW4BdGG", "W57dLtDJfmkUcSoQW5VdUwJdQmoW", "WR7cNCkNWOVdKmo0WPBcJmknWQPSomo8", "WPbJCCk0W5PpW4tdSwlcIdFdUSokW4a", "W5m2ma", "tmkLW4S0CZb/", "W7VdLCoriCkweGNcVSk0WRpdRYa", "WQddR2JcK08", "nxVcP3a", "nSkRWOissW1cEve", "drDg", "W7LxFmkz", "jqDkbq", "FL7cMSkhyW", "lantmSoS", "WQxcRXTmwmo2sX04uW", "kbrEemo5", "nMRcU3pcGq", "tSo0WPPypMngzSkIW4tdL8kJ", "pYm1ACo4wvqSW4FcJG", "WPFcRSk4W5dcMmocjZzBW7NcVKJdJG", "pb/dJSoapqHyrbz4W4OUW68Q", "W6f5D8khuW", "WPhcM0yHW50", "WPmWoSktFK9boKu", "BSoOWPfoW4K", "smo5WPy7vb1qqCk6", "WP8JBXtdIW", "igFcQwJcNW", "r8k3WQVcRG", "WRKdWRVdIKqmoa", "W7JdUxVdRCkr", "W5ZdMd8nDCoEE8oaW6e", "zmoWW5KrFa", "emo0WPxcL8kBqLjD", "WOVcHgqLxG", "ASkhW5e"];
  return _o = function() {
    return o;
  }, _o();
}
async function ws(o) {
  const { iv: i, key: t } = await Ds(), e = {};
  function A(C, E, B, x, d) {
    return X(d - 821, x);
  }
  e[A(971, 958, 987, ")pz(", 963)] = _a, e.iv = i;
  function g(C, E, B, x, d) {
    return X(x - 651, B);
  }
  function n(C, E, B, x, d) {
    return X(x - 351, C);
  }
  const I = await window[A(1001, 1004, 975, "kb5#", 996) + "o"][n("pU#j", 539, 512, 527) + "e"][A(938, 935, 938, "w]j)", 954) + "pt"](e, t, o), a = await window[A(992, 1013, 978, "A0qm", 992) + "o"][A(956, 970, 964, "vI$L", 965) + "e"][A(996, 998, 991, "pU#j", 986) + n("h^ye", 487, 515, 510)](g(807, 779, "Ml@2", 803), t), r = {};
  r[s(258, "fF%@", 262, 246, 260) + "ge"] = I;
  function s(C, E, B, x, d) {
    return X(d - 117, E);
  }
  return r[A(966, 1e3, 989, "^ZjG", 979)] = a, r.iv = i, r;
}
function zo() {
  const o = ["W7fBWOW3WQeSWP8uoN7cI8kc", "WPaKWRqbW4tdPCo6W59SjYqx", "nmkwemkXWOdcV8o/W6RdQmoTWRhcIa", "W7CPWRpdJJJcQmo+W4OKkmoCW54", "hCkNWQ/cRSkg", "W6D5tSoaW5u", "amoSvmoNW4anW5e/zmoxWPDa", "g8oqWPFdRtmUvMSaW5aFBCoX", "aCkGWR/dHJ3dSqWB", "WRtdI8k6mW", "nmkFemoXW5ddN8ooW5hdSa", "tmkUuZ/cS8kGjNtdJq7cMmop", "W7pcP8kMWOpcGG", "W7iVFM3dHmopvCoMWQa", "i8k/W7VdQSkFbCkEeq", "W6JdTCoCsmkEcuZcHwxdNCoD", "WOeTWOP9W43cLHJcUSozWQ3dMGO", "hmoSdMBdGq", "W4dcHSojW4zdW4qcWRGMWOddTG", "zmkvz8kUWOW", "WOr5lCkzcW18W61gnd7dRG", "WRiHhCkgWQFcRIKPW47dKrK0", "WOiKWOPWW4xcMxlcJCoJWOZdUGJcQG", "yCk4tNNdKq", "n8kze8k3WOhcVCoXW5JdH8ovWP3cHq", "W5tcICkemSos"];
  return zo = function() {
    return o;
  }, zo();
}
(function(o, i) {
  const t = o();
  function e(n, I, a, r, s) {
    return GA(r - -439, I);
  }
  function A(n, I, a, r, s) {
    return GA(n - -976, r);
  }
  function g(n, I, a, r, s) {
    return GA(s - -440, n);
  }
  for (; ; )
    try {
      if (parseInt(e(-101, "wA7U", -105, -98, -104)) / 1 + parseInt(A(-650, -662, -647, "OX!M", -651)) / 2 + parseInt(g("grdp", -117, -122, -118, -121)) / 3 + parseInt(e(-124, "kSwy", -111, -116, -127)) / 4 + -parseInt(g("Mvub", -114, -122, -115, -115)) / 5 + -parseInt(g("PYtx", -110, -98, -100, -109)) / 6 * (-parseInt(A(-637, -628, -643, "grdp", -649)) / 7) + parseInt(A(-640, -640, -634, "&4Bj", -634)) / 8 * (-parseInt(A(-658, -651, -653, "d4Ca", -666)) / 9) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(zo, 385718);
function GA(o, i) {
  const t = zo();
  return GA = function(e, A) {
    e = e - (6222 + -3425 * -2 + -12756);
    let g = t[e];
    if (GA.LpJVQi === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      GA.eMLqlg = s, o = arguments, GA.LpJVQi = !0;
    }
    const I = t[5417 + -563 * -6 + -1759 * 5], a = e + I, r = o[a];
    return r ? g = r : (GA.cVwWEP === void 0 && (GA.cVwWEP = !0), g = GA.eMLqlg(g, A), o[a] = g), g;
  }, GA(o, i);
}
function ms(o) {
  const i = new ArrayBuffer(o[A(402, 390, "$^hg") + "h"]);
  function t(g, n, I, a, r) {
    return GA(n - -1e3, a);
  }
  const e = new Uint8Array(i);
  for (let g = 0, n = o[t(-680, -684, -684, "Snb&") + "h"]; g < n; g++)
    e[g] = o[A(393, 391, "d4Ca") + A(375, 385, "omdg")](g);
  function A(g, n, I, a, r) {
    return GA(n - 63, I);
  }
  return i;
}
(function(o, i) {
  function t(I, a, r, s, C) {
    return oA(s - -145, r);
  }
  function e(I, a, r, s, C) {
    return oA(r - -174, C);
  }
  function A(I, a, r, s, C) {
    return oA(I - 771, s);
  }
  function g(I, a, r, s, C) {
    return oA(s - -479, r);
  }
  const n = o();
  for (; ; )
    try {
      if (-parseInt(e(179, 286, 285, 212, "YJNL")) / 1 + parseInt(e(233, 282, 341, 429, "i3g^")) / 2 + parseInt(A(1299, 1367, 1244, "xSIm", 1235)) / 3 + parseInt(A(1240, 1309, 1344, "m(ww", 1303)) / 4 * (-parseInt(g(52, 160, "l*BT", 50, -40)) / 5) + parseInt(A(1170, 1229, 1062, "Z&7m", 1183)) / 6 * (parseInt(A(1233, 1229, 1259, "^ae2", 1187)) / 7) + parseInt(g(-161, -104, "ieW3", -75, -152)) / 8 + -parseInt(t(362, 284, "yTC4", 371, 461)) / 9 * (parseInt(g(41, 136, "gmYV", 68, 22)) / 10) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xo, 69627 + -171 * -6926 + 26 * -13621);
function bs() {
  function o(s, C, E, B, x) {
    return oA(C - -115, s);
  }
  const i = t(-81, -77, -167, -86, "Zea7") + o("a2Ao", 295) + t(75, 19, -87, 32, "ImPb") + t(-210, -155, -249, -102, "ImPb") + o(")U*$", 367) + t(58, -42, -20, 1, "Tnhe") + r(1461, 1430, "Ugzd", 1307, 1398) + t(32, -7, 56, 66, "i3g^") + r(1200, 1164, "4twR", 1199, 1260) + o("PVYi", 435) + g(1327, 1480, "Lco!", 1451, 1403) + r(1247, 1320, "3XOt", 1328, 1300) + n(1158, 1083, "m(ww") + r(1408, 1343, "CKiE", 1299, 1381) + r(1448, 1440, "rC^G", 1360, 1358) + o("PVYi", 439) + t(5, -86, -128, -48, "ezX!") + o("y&iY", 287) + n(1172, 1105, "^ae2") + t(81, -10, 96, -121, "7CkA") + r(1316, 1412, "j@MC", 1337, 1313) + r(1397, 1288, "T@u#", 1489, 1375) + n(1143, 1103, "5RJ5") + o("y!%7", 352) + g(1452, 1406, "YJNL", 1510, 1445) + n(943, 951, "yTC4") + r(1387, 1323, "tRDZ", 1404, 1302) + n(876, 927, "Lco!") + r(1413, 1251, "m^LN", 1233, 1339) + n(887, 919, "Ugzd") + n(1108, 1107, "y!%7") + g(1577, 1444, "[6tY", 1460, 1527) + o("XOwy", 286) + r(1328, 1318, "FsUA", 1292, 1292) + t(-259, -143, -219, -151, "ImPb") + t(-251, -194, -179, -132, "Z&7m") + o("1ifM", 328) + t(-141, -70, 32, 1, "gmYV") + t(-196, -205, -173, -289, "xSIm") + t(25, 7, -82, 72, "]bCn") + o("Ugzd", 337) + t(-243, -149, -192, -245, "r0(M") + o("[XvP", 317) + t(-94, -1, -63, 75, "m(ww") + t(-44, -11, -104, -38, "rC^G") + t(77, 8, -39, -36, "tRDZ") + g(1475, 1297, "BAZR", 1387, 1382) + g(1387, 1426, "y!%7", 1503, 1487) + t(-45, -25, -71, 83, "Lco!") + t(-67, -136, -94, -123, "7CkA") + o("m(ww", 279) + n(1003, 905, "m(ww") + t(-34, -38, -91, -56, "5RJ5") + r(1438, 1375, "75^)", 1502, 1386) + t(-239, -196, -149, -237, "3XOt") + n(1034, 921, "^ae2") + o("[6tY", 351) + o("4twR", 314) + t(-46, -61, -171, -15, "3XOt") + r(1465, 1339, "1ifM", 1345, 1390) + o("gmYV", 433) + g(1352, 1359, "i3g^", 1385, 1431) + r(1231, 1329, "YJNL", 1320, 1306) + g(1616, 1433, ")U*$", 1606, 1526) + r(1425, 1403, "Ugzd", 1539, 1454) + n(953, 928, "y!%7") + t(-41, -116, -218, -71, "l*BT") + r(1336, 1474, "CKiE", 1277, 1382) + g(1373, 1315, "i3g^", 1389, 1421) + n(1134, 1087, "CKiE") + g(1342, 1473, "rC^G", 1504, 1459) + o("m(ww", 245) + r(1441, 1383, "ImPb", 1284, 1332) + t(-112, -44, -2, 29, "@QVK") + n(987, 1065, "gmYV") + r(1236, 1268, "r0(M", 1186, 1240) + n(1070, 979, "ezX!") + t(-78, -13, -28, 53, "1ifM") + o("&q!d", 406) + n(999, 1101, "Lco!") + o("i3g^", 365) + g(1535, 1524, "FsUA", 1564, 1451) + t(-77, -147, -35, -83, "1csC") + n(1054, 1059, "yfvH") + t(-179, -113, -77, -227, "rC^G") + t(-107, -93, -158, -107, "[6tY") + t(-22, 3, -17, 117, "i3g^") + t(-279, -171, -230, -133, "leJV") + o("75^)", 388) + t(-211, -190, -304, -134, "Z&7m") + n(936, 1040, "a2Ao") + r(1239, 1254, "[XvP", 1148, 1238) + g(1371, 1289, "d#ZI", 1343, 1371) + o("&q!d", 448) + o("yfvH", 469) + g(1446, 1457, "y&iY", 1510, 1483) + o("@QVK", 275) + t(-97, -27, 23, 19, "^ae2") + g(1349, 1457, "y&iY", 1387, 1346) + t(-163, -74, -33, 9, "YJNL") + t(-303, -204, -92, -205, "ieW3") + r(1449, 1282, "Z&7m", 1377, 1387) + n(866, 940, "&q!d") + n(889, 884, "^ae2") + r(1408, 1260, "1csC", 1430, 1371) + g(1545, 1508, "ImPb", 1584, 1477) + r(1303, 1350, "m^LN", 1415, 1384) + n(1033, 993, "@r2x") + g(1425, 1363, "yfvH", 1305, 1373) + n(895, 888, "BAZR") + n(996, 1030, "m^LN") + g(1429, 1622, "ieW3", 1600, 1544) + n(992, 894, "a2Ao") + n(1047, 946, "leJV") + g(1590, 1604, "2Rye", 1530, 1553) + r(1346, 1131, "@r2x", 1260, 1245) + n(918, 1022, "&q!d") + t(-73, -138, -224, -94, "j@MC") + g(1607, 1626, "Zea7", 1479, 1532) + g(1586, 1515, "ieW3", 1492, 1540) + r(1240, 1294, "yTC4", 1285, 1324) + g(1680, 1598, "[XvP", 1643, 1565) + g(1486, 1593, "ezX!", 1651, 1547) + g(1434, 1651, "]bCn", 1664, 1551) + r(1225, 1399, "FsUA", 1362, 1285) + g(1395, 1436, "rC^G", 1382, 1492) + r(1342, 1274, "xSIm", 1276, 1312) + r(1322, 1306, "@QVK", 1295, 1301) + n(1028, 1099, "2Rye") + n(876, 986, "rC^G") + r(1356, 1509, "ImPb", 1387, 1419) + n(1163, 1108, "^ae2") + g(1489, 1660, "yTC4", 1607, 1556) + r(1379, 1503, "[6tY", 1484, 1397) + o("Lco!", 294) + g(1539, 1370, "YpwZ", 1407, 1474) + r(1247, 1283, "[6tY", 1201, 1315) + o("1csC", 248) + t(16, -28, 17, -49, "leJV") + t(-88, -81, -43, -133, "yfvH") + g(1531, 1494, "Lco!", 1385, 1460) + o("YJNL", 458) + t(-38, -18, -35, 77, "gmYV") + o("7CkA", 302) + t(-94, -151, -87, -198, "ieW3") + g(1308, 1375, "r0(M", 1388, 1375) + o("7CkA", 350) + t(-194, -161, -131, -79, "&q!d") + r(1448, 1380, "1csC", 1405, 1443) + o("1csC", 310) + n(981, 971, "@QVK") + t(-171, -154, -157, -237, "a2Ao") + r(1204, 1271, "yfvH", 1227, 1247) + r(1371, 1382, "rC^G", 1403, 1383) + g(1556, 1441, "l*BT", 1428, 1488) + g(1331, 1455, "yTC4", 1385, 1369) + g(1433, 1521, "yTC4", 1521, 1525) + r(1505, 1490, "T@u#", 1523, 1438) + o("7CkA", 346) + t(110, 12, -48, -62, "3XOt") + r(1510, 1429, "XOwy", 1523, 1446) + n(1013, 994, "tRDZ") + o("@r2x", 330) + n(947, 886, "gmYV") + o("2Rye", 387) + g(1328, 1424, "]bCn", 1501, 1437) + n(809, 887, "Tnhe") + r(1177, 1149, "FsUA", 1308, 1249) + o("i3g^", 446) + r(1244, 1380, "7CkA", 1340, 1357) + t(-108, -200, -141, -231, "a2Ao") + r(1412, 1483, "ieW3", 1362, 1444) + n(936, 1046, "4twR") + o("y&iY", 262) + g(1526, 1620, "1ifM", 1576, 1533) + r(1256, 1169, "2Rye", 1317, 1261) + t(-306, -189, -189, -204, "hJzu") + r(1270, 1275, "Lco!", 1243, 1343) + r(1343, 1217, "CKiE", 1314, 1270) + o("j@MC", 376) + n(1054, 997, "r0(M") + o("gmYV", 369) + g(1456, 1472, "XOwy", 1548, 1522) + r(1204, 1226, "Lco!", 1298, 1311) + n(987, 1102, "ieW3") + n(1019, 1048, "d#ZI") + o("2Rye", 277) + g(1353, 1346, "leJV", 1342, 1353) + t(-172, -182, -205, -81, "yfvH") + g(1365, 1360, "Zea7", 1477, 1410) + n(1110, 1014, "tRDZ") + g(1428, 1616, "T@u#", 1546, 1523) + o("T@u#", 389) + n(1060, 973, "d#ZI") + o("ImPb", 298) + r(1404, 1319, "YpwZ", 1266, 1350) + r(1470, 1441, "yfvH", 1350, 1361) + n(952, 1053, "@r2x") + o("ezX!", 397) + n(810, 909, "@r2x");
  function t(s, C, E, B, x) {
    return oA(C - -569, x);
  }
  const e = window[o("l*BT", 455)](i), A = window[r(1135, 1291, "@r2x", 1135, 1225)](e);
  function g(s, C, E, B, x) {
    return oA(x - 987, E);
  }
  function n(s, C, E, B, x) {
    return oA(C - 516, E);
  }
  const I = ms(A), a = {};
  a[g(1394, 1470, "l*BT", 1497, 1500)] = za;
  function r(s, C, E, B, x) {
    return oA(x - 864, E);
  }
  return a[n(918, 956, "3XOt")] = $B, window[t(-185, -130, -64, -197, "75^)") + "o"][t(-192, -128, -60, -204, "&q!d") + "e"][o("ImPb", 370) + t(-166, -123, -130, -11, "m(ww")](n(874, 916, "ezX!"), I, a, !0, [n(995, 970, "ezX!") + "pt"]);
}
function Xo() {
  const o = ["wfmYW6rC", "gCoqW4WwW7q", "W5zvWOtdUmkh", "dmoeWRVdMq", "FSkpW6/dV0i", "W7e3wqdcPG", "WPVdRhSrW4e", "W5/dQtFdKmkf", "emkCW4rxW7m", "EZFdNeFdQG", "n8k1lSkbWOW", "pmkXEt95", "WOH7W5G5ya", "lrRdHLG5", "tqDyW4Pv", "W50OjKTz", "WRz2qe0JxSo2WPFcQCoAWRldJG", "WP8WDw7dNW", "CIi/WPBcKq", "W4RcQ8kHW4H5D8kMtraAWR4", "pCklFHTr", "ufJcHdZdRa", "Dx8HWQ/cQW", "eCkYWQqGW4i", "WPxdGv7dQCoM", "kWFdGCozWRC", "sCk4W67cLe0rpmozEHe", "iXNdG0yK", "zIyyW51VeCoPeqWD", "arFcRvOa", "q8kxW5ZdIhy", "WOVdHwddR8kw", "WQODDJGI", "gmkPWRrEW7m", "W61bWO7cLCkg", "ogz4WRD/", "FSkkW7pdNGO", "fSo+WOGRW6S", "W5ZdULJdQbq", "ccKZWRKp", "d8kYCxHu", "W69FatyW", "eahdV8oIWQC", "WPtcKSkfwIa", "W7xcPmk9oqy", "r8o7W47dUCoH", "WRj3qe8VwCk2WOxcKSo9WRpdNf8", "sqtdVCozWO0", "WOldNxuoW4m", "WOldICokcaa", "vaChWPtdMW", "kW3cPhe5", "W4Kqisjs", "WQ8GtdxcRG", "z8oSWQ7cImke", "a2zSWOfU", "W70OatKo", "WORdNtRdVCog", "n8kVb8oCWPG", "uvLneX4", "d1ldNmkeW4C", "q8oObuNcPW", "FcpcNLe7", "gSkSnSoTW44", "W6NdVCoTW61y", "WO9vW4ldO8ou", "aCkrWQNcHCoSuCoxWOCAm0y", "ld3cJMWx", "qSokyKxdHG", "h8kDtXKW", "kCkwcmov", "WQ55q3iG", "FSkMW4LYWOFdPw/dV8odua7dQqu", "W7bxcapcS0OWWRFcJ1JcGeTB", "cuxdNmkNWQu", "bIZdI8knWPy", "gGNcNe9t", "WRiXxe0S", "pCkPp8kZW4O", "auRdVmkSW4q", "W7/dTmoDvCoY", "gCkCW5fXhq", "WOvfW5OEAq", "D0mtW7zZ", "WQnxDmorja", "WQXPdwNdIaqHW5fziYqBqW", "DmoduSkaWQtcSSkvW5yByW", "WPPfwmo1WPy", "yY3dJmolkq", "tZLmW5bU", "cCkXWR5WWPa", "sr7dPwxdJq", "kXNdR0ip", "j8oxp2BcSa", "WRDLW67dVSku", "WQrwEqhdQa", "hJiyW74A", "fCkdWPTvW6K", "W7VdV8kpb8oT", "WR/dICogWQrY", "A8oiW6pdImkM", "t8khW4ZdRhy", "WPddICoXewG", "Fx4aW7DH", "WPLwedyyWRVcPHe", "W70Xitqm", "W6yReL4b", "iSoJnrJcMa", "W5WJfIOZ", "FCkHW492WOtdPsZdRCoDtH/dGW", "d8kpt8ksWPq", "gSoTqtRcMq", "hHtdRSoMW6W", "pKnGW4LL", "gCkWqSkwW6W", "fIBcG2yh", "vYWBWOVcIa", "g8khvXvA", "lSo5WOGbW6G", "h8odW4GfW58", "gmkmmSklW7y", "WOxdSNNdJ8kE", "BSoQl3WXESkwnXZcGtGwW7i", "AZHLfXC", "l8oLWRBdJ0W", "imoeW6ZdG2C", "WQqGdGddMq", "jSkdcSos", "dqxdS8k4WPa", "D8kIWRSUW4u", "W618otzd", "ECogk1tdHq", "A2m8W5abqmkKWR8", "W57dIJhdK8k7", "hvrgWQnU", "WQlcGdhdTCoJ", "W5FcOmoUWQre", "jmkZjmkGW6G", "WRXgW5FdRSov", "xYFdLZuI", "uZ4xBrG", "wmkDW7VcJ8kx", "zCkuW6ZdQaG", "hSk+wCkBW4m", "rrpdO8oiaG", "tc/dLCk/WQe", "WOJdHmoiWPSK", "sr3dMgBdHW", "WR/dUW/dJmoN", "WORdISo5WRHZ", "WQ4BsgRcOa", "cSoEW67cKuu", "W6zxWRldJG", "WOW+ChWA", "W6hcPSotW7zG", "W60zAH3cLW", "eSkerCklW6K", "W5hcLmo+b8oZ", "lM7cHatdMXDmu8kbWPq", "WQldGmoOWRal", "aCkOW7TToa", "W6CYjaa1", "WOP0BmomoW", "WOXjW6NcMtS", "WOHGW4lcHmou", "W5pcONVcK8oD", "WRJdMSkyrmo9", "WQxcH2RcIbq", "WPSFvWVcSq", "eCoGW4LSia", "WRFdISoHv8oX", "f8ovWRvwWQ8", "W4v5WORdMmkd", "W7uXz3NdGq", "z8o8WQVcJmky", "lNStW5jO", "v1lcNaNdHa", "zCoXW6RdLCkd", "zmo/W73cJmkp", "W5BcJqJcJ3W", "mCozWQtdRvy", "WPmdW70Qza", "rmoKWQ4ytaVcP8kvnmkWd8ojW50", "ttHJtxK", "WR5GWRRcKCo8", "emolWO/dI1S", "W5O9W4FcHt4", "WRbvtmooWPi", "mKjeyZC", "W4lcLmkloCom", "W7/cJ8kCEmoFW5qzqmo1", "kSkVCsq", "sX/cGw8s", "WQ0FsGdcVG", "lrFdVvtdOq", "F8oFiSolWPpcLmkwWOHFWP8Xd8oq", "W4ZdICowWRqY", "nexdQmktWQS", "DSoguCo8WRtcQSkOW6us", "hSk1nmkhW6S", "jmkpW5RdLh4", "rCk8W654lW", "xSkAWOVdKua", "W43dVHJdVmoG", "eLJdMSokWPm", "aq3dImo5WQu", "rmkEW5D/nG", "CCkmW6NcIN4", "trHbWRhcMW", "lmkqwSkmW7C", "zcaEW5WXuCkRiW0LWRxdGCo8", "WQlcNKZcJdq", "xuRcJcldMG", "W6NcTmoLWQzU", "WRZdJSoJdrC", "f8kidmklW44", "W5VcLmoCW7zC", "nWxdJmoMW6a", "WO3cJIBdHW", "uvVcUcldNG", "WRD8wSonWPi", "W7hcImkCd8ks", "WR7dQ0OLW60", "WRxcVHlcK8op", "cYOjWQtcHW", "g8ovWQOlW5m", "WOmWcMpdNa", "WPvaW4BdSSol", "WRnRW64BzG", "msj2WRvH", "nNBdGCk9W6C", "WPnZW6ddNa", "pSknomkPW7a", "W4jZjt9m"];
  return Xo = function() {
    return o;
  }, Xo();
}
function oA(o, i) {
  const t = Xo();
  return oA = function(e, A) {
    e = e - 359;
    let g = t[e];
    if (oA.pMZcWz === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      oA.uwvMJd = s, o = arguments, oA.pMZcWz = !0;
    }
    const I = t[-3837 + -1 * -3837], a = e + I, r = o[a];
    return r ? g = r : (oA.gZIgrP === void 0 && (oA.gZIgrP = !0), g = oA.uwvMJd(g, A), o[a] = g), g;
  }, oA(o, i);
}
async function Gs(o) {
  const i = await bs();
  function t(g, n, I, a, r) {
    return oA(I - 251, a);
  }
  const e = {};
  function A(g, n, I, a, r) {
    return oA(a - -954, I);
  }
  return e[t(665, 649, 678, "[XvP")] = za, window[A(-446, -496, "rC^G", -444) + "o"][A(-558, -506, "m^LN", -592) + "e"][t(800, 779, 725, "]bCn") + "pt"](e, i, o);
}
function yA(o, i) {
  const t = $o();
  return yA = function(e, A) {
    e = e - (-62 * 106 + 4 * 1471 + -7 * -123);
    let g = t[e];
    if (yA.JHgjtj === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      yA.RuUyVw = s, o = arguments, yA.JHgjtj = !0;
    }
    const I = t[29 * 4 + -6990 + 6874], a = e + I, r = o[a];
    return r ? g = r : (yA.wbcsLR === void 0 && (yA.wbcsLR = !0), g = yA.RuUyVw(g, A), o[a] = g), g;
  }, yA(o, i);
}
(function(o, i) {
  function t(a, r, s, C, E) {
    return yA(a - -84, s);
  }
  function e(a, r, s, C, E) {
    return yA(r - -976, C);
  }
  function A(a, r, s, C, E) {
    return yA(a - -932, r);
  }
  function g(a, r, s, C, E) {
    return yA(E - 495, r);
  }
  const n = o();
  function I(a, r, s, C, E) {
    return yA(r - -517, a);
  }
  for (; ; )
    try {
      if (parseInt(e(-807, -800, -811, "I1W!", -803)) / 1 + -parseInt(g(659, "&08*", 673, 678, 668)) / 2 + parseInt(I("STFa", -331, -341, -320, -335)) / 3 * (-parseInt(g(676, "anVu", 693, 689, 683)) / 4) + -parseInt(t(108, 105, "9@b6", 97, 105)) / 5 + -parseInt(A(-743, "YG@3", -746, -739, -742)) / 6 + -parseInt(A(-749, "I1W!", -751, -741, -740)) / 7 * (-parseInt(e(-797, -792, -799, "By@y", -788)) / 8) + -parseInt(I("l0hy", -335, -345, -339, -345)) / 9 * (-parseInt(I("anVu", -340, -342, -340, -337)) / 10) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($o, -92727 + -1 * -495389);
function $o() {
  const o = ["mCoiW49IlxNdUSoThSoOhG", "WQqqBW", "e08UimkbeuOz", "W6pcHbxcISozsSoAjshdRSoTW4BdNq", "vJhdUeCrxwZdQW", "W7JdT8kxWRDGW53cK8k6", "umkdW4zLtCkUkq8peszXia", "cN3dTeBcG8k3u8k+xSohWPVdGa", "h0vhwmoFovG/xSoOlW", "oCkfnNa7WOhdKJxdGvvFiq", "cNRdTK3cJCk8lSkwFmoPWR7dL8oL", "fZpdVMy9", "m2ySmmotghyzW4zwWPtcTq", "eK5owSoCtG4bsCoHoduP", "qLC7W7bsW5lcV8omxGSkw8kv", "t2FcUcbLfvnCWRhcS2lcSW", "W6dcINVdSCkhdCkGma", "xZRcRY9YkJNdR8k8W5ddImkapa", "WRaNDSk5muGQW68", "m29frCkovNCf", "aSk7W7BdO8kvW7BdGmkuW4vpWOm", "nweUo8owuvOBW6rYWPO"];
  return $o = function() {
    return o;
  }, $o();
}
async function ks(o) {
  const { iv: i, key: t, message: e } = await ws(o), A = await Gs(t);
  function g(I, a, r, s, C) {
    return yA(s - 167, C);
  }
  const n = {};
  return n[g(364, 343, 364, 354, "1SIV")] = A, n.iv = i, n[g(352, 347, 347, 342, ")lxJ") + "ge"] = e, n;
}
function CA(o, i) {
  const t = Ai();
  return CA = function(e, A) {
    e = e - (2116 + -1 * 1857);
    let g = t[e];
    if (CA.OVUWCS === void 0) {
      var n = function(C) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let B = "", x = "";
        for (let d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (let d = 0, u = B.length; d < u; d++)
          x += "%" + ("00" + B.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(x);
      };
      const s = function(C, E) {
        let B = [], x = 0, d, u = "";
        C = n(C);
        let c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (let h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      CA.CvaQnd = s, o = arguments, CA.OVUWCS = !0;
    }
    const I = t[-6509 + 1 * 6509], a = e + I, r = o[a];
    return r ? g = r : (CA.JSfLpU === void 0 && (CA.JSfLpU = !0), g = CA.CvaQnd(g, A), o[a] = g), g;
  }, CA(o, i);
}
(function(o, i) {
  function t(I, a, r, s, C) {
    return CA(I - 476, C);
  }
  function e(I, a, r, s, C) {
    return CA(I - -780, s);
  }
  const A = o();
  function g(I, a, r, s, C) {
    return CA(C - -120, a);
  }
  function n(I, a, r, s, C) {
    return CA(s - -322, C);
  }
  for (; ; )
    try {
      if (-parseInt(g(162, "St0*", 170, 163, 167)) / 1 * (-parseInt(g(168, "pcNA", 155, 153, 169)) / 2) + parseInt(e(-502, -517, -505, "Fevj", -502)) / 3 * (-parseInt(g(150, "cHr7", 179, 150, 165)) / 4) + -parseInt(t(756, 755, 740, 766, "pcNA")) / 5 + -parseInt(t(739, 752, 723, 749, ")K)z")) / 6 + -parseInt(n(-34, -27, -48, -34, "Ndo6")) / 7 + -parseInt(n(-40, -53, -54, -41, "ekvy")) / 8 + -parseInt(e(-512, -514, -502, "St0*", -511)) / 9 * (-parseInt(g(156, "OmT^", 157, 140, 145)) / 10) === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ai, -1204922 + 32 * 66576);
function Ai() {
  const o = ["r8ktgd3dVMaAamo5aL3dGs4", "BCo8b8oTWQyUW79NmSoe", "cmkkW4pdPSo3WQmNW417WPRdL8k5W58", "lCoqW6X7W5VdOJlcSSk/", "fq4DW7dcRSo9W6tdImoPha", "sXlcVZzm", "nLTXx1lcJmkTW7bhWP5JgmkPWO4", "iSovWOHjW5/dLGhcMa", "lCk6h8kZWPhcT8kfW7O2bmosW5ldUG", "mL0kWRq", "W5X/iZtdOZ5DySoMfbinba", "n10CWQNdIa", "W4evD8oxWPLQWRnYyIFcNCoGWRK", "zmo5z8k3WOqhW6Py", "lmk3hCosW6xdT8oFW4OT", "kmkAWPe", "W5uKWRaGW4mibmoGWRKScCk7WQK", "W7JdOYvOWPu", "l3WwWPpdQCkSWRVcJSobW5G", "BqyTbG", "sSo+E39E", "k3awWP3cS8o0W4FcS8oMW5/cV8okWQ4", "rHxcVW", "mZJcNJa9W57cU8kcW5Xo", "DbWMhaW", "kCoCW60tWQ7cPgJcNSknW4FcNh/cGG", "W4pdUCo7WOSMWP7dMmkpW4BcLXpcR8onW6a", "nv0r", "W7PZW64sWRa", "WRlcMCo1W6rDECoMvafr", "WOxdRNldVmoHkSobid96"];
  return Ai = function() {
    return o;
  }, Ai();
}
async function Ns(o) {
  function i(I, a, r, s, C) {
    return CA(I - -950, C);
  }
  function t(I, a, r, s, C) {
    return CA(a - 541, r);
  }
  function e(I, a, r, s, C) {
    return CA(C - -965, r);
  }
  function A(I, a, r, s, C) {
    return CA(C - 219, s);
  }
  function g(I, a, r, s, C) {
    return CA(a - -729, I);
  }
  const n = await window[i(-684, -692, -670, -672, "(pVq") + "o"][A(490, 495, 488, "]n(6", 498) + "e"][A(481, 485, 473, "3k9T", 479) + "t"](e(-679, -682, "VgY[", -695, -693), o);
  return Array[t(799, 805, "(pVq")](new Uint8Array(n))[g("5&8h", -459)]((I) => I[i(-675, -686, -685, -661, "lOHA") + A(498, 497, 505, "3k9T", 496)](11723 + -1 * 11707)[g("7BzD", -446) + e(-677, -676, "(pVq", -689, -683)](-1223 + 457 * 19 + -7458, "0"))[g("]n(6", -455)]("");
}
(function(o, i) {
  var t = o();
  function e(r, s, C, E, B) {
    return kA(E - -288, r);
  }
  function A(r, s, C, E, B) {
    return kA(C - 543, r);
  }
  function g(r, s, C, E, B) {
    return kA(B - -861, r);
  }
  function n(r, s, C, E, B) {
    return kA(B - 335, E);
  }
  function I(r, s, C, E, B) {
    return kA(E - 788, C);
  }
  for (; ; )
    try {
      var a = parseInt(n(710, 709, 703, "2TJf", 713)) / 1 + -parseInt(n(696, 703, 697, "Tj!T", 706)) / 2 + parseInt(n(718, 728, 730, "cL03", 720)) / 3 + parseInt(g("lV8B", -495, -486, -499, -489)) / 4 * (parseInt(e("uX68", 102, 98, 96, 89)) / 5) + -parseInt(e("KEvD", 97, 92, 100, 109)) / 6 + parseInt(A("cM]V", 942, 933, 935, 939)) / 7 * (parseInt(I(1179, 1171, "9apj", 1175, 1177)) / 8) + parseInt(e("KePb", 103, 95, 98, 102)) / 9 * (-parseInt(e("wmJ^", 84, 77, 85, 90)) / 10);
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ei, 7 * -73064 + -152529 + -1 * -1477166);
function kA(o, i) {
  var t = ei();
  return kA = function(e, A) {
    e = e - (99 * -87 + 1 * 3628 + 5356);
    var g = t[e];
    if (kA.ilKTrq === void 0) {
      var n = function(C) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", B = "", x = "", d = 0, u, c, h = 0; c = C.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? B += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = E.indexOf(c);
        for (var m = 0, F = B.length; m < F; m++)
          x += "%" + ("00" + B.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(x);
      }, I = function(C, E) {
        var B = [], x = 0, d, u = "";
        C = n(C);
        var c;
        for (c = 0; c < 256; c++)
          B[c] = c;
        for (c = 0; c < 256; c++)
          x = (x + B[c] + E.charCodeAt(c % E.length)) % 256, d = B[c], B[c] = B[x], B[x] = d;
        c = 0, x = 0;
        for (var h = 0; h < C.length; h++)
          c = (c + 1) % 256, x = (x + B[c]) % 256, d = B[c], B[c] = B[x], B[x] = d, u += String.fromCharCode(C.charCodeAt(h) ^ B[(B[c] + B[x]) % 256]);
        return u;
      };
      kA.wWZtTT = I, o = arguments, kA.ilKTrq = !0;
    }
    var a = t[-1 * -929 + -4951 * 1 + 4022], r = e + a, s = o[r];
    return s ? g = s : (kA.bzLtxs === void 0 && (kA.bzLtxs = !0), g = kA.wWZtTT(g, A), o[r] = g), g;
  }, kA(o, i);
}
function ei() {
  var o = ["A8oEWQ3cOrhcICocW7JdSwP4nCkD", "WPD6fmkmuSkTW7GHo1u", "acT+oCo/fmk6reldT8olA18", "rmksF8oKW5nZW4ycW4KQW4PhWO0", "W6ldJCkPWQKnW7vWp8oSgW", "W5ZcRYFdTtShWRu", "tmoxWP5/tgLqW5NdMSou", "sI3dMSotW7KngHtcKmkTsW", "WQ1GW6qQaCkqWOhdMHr4", "tc/dMmovWOeKndZcLSkD", "W7ZcRCkFW6PBWQ1FigRdRCoUWRC", "dhLYW47cTZldNa", "oSkXfCkzWRyZwSoYWQHUdq", "WQqoWOhdGmk5W5pdSguEW75dW5G", "W7DTqqtcVCo3WOKYimk9ySk7WRy", "BSoCWQVcPvddJSkcW5RdKLK", "m8kaWQhdQvldVJNcS8oFAG", "csGUWRZdOepcP8oyv8oFq8oYBG", "W55Namk/WPtcQaPQxKZcUgzB", "wCo2yCkbWPFcTYSmbSkz"];
  return ei = function() {
    return o;
  }, ei();
}
async function Bn(o) {
  const { Image: i } = ve, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const g = i.verify(A);
  if (g) throw Error(g);
  const n = {};
  return n.bytes = e, i.create(n);
}
async function U0(o) {
  const { v4: { Metadata: i } } = ve, t = { ...o };
  t.platform = ve.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function Y0(o) {
  const { Content: i } = ve, { iv: t, key: e, message: A } = await ks(o), g = { token: new Uint8Array(e), iv: t, schemaVersion: zB, bytes: new Uint8Array(A) }, n = i.verify(g);
  if (n) throw Error(n);
  const I = i.create(g);
  return i.encode(I).finish();
}
function W0(o) {
  const { Blob: i } = ve.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var Yt, Ii;
class O0 {
  constructor(i) {
    W(this, Yt, !0);
    W(this, Ii, Date.now());
    w(this, "analytics");
    w(this, "samVersion");
    w(this, "sessionToken");
    w(this, "onDetectionCallback");
    w(this, "onCaptureCallback");
    w(this, "createProtoMessage");
    w(this, "fpsOfAllImages", new en(6142 + -2 * -1006 + -8124));
    w(this, "cameraService");
    w(this, "imageProcessor");
    w(this, "instructionEscalation");
    w(this, "imageCropSettings");
    this.cameraService = i.cameraService, this.imageProcessor = i.imageProcessor, this.analytics = i.analytics, this.samVersion = i.samVersion, this.sessionToken = i.sessionToken, this.createProtoMessage = i.createProtoMessage, this.onDetectionCallback = i.onDetectionCallback, this.onCaptureCallback = i.onCaptureCallback, this.instructionEscalation = i.instructionEscalation, this.imageCropSettings = i.imageCropSettings;
  }
  async run() {
    for (; D(this, Yt); )
      await this.iterate();
    return this;
  }
  stop() {
    J(this, Yt, !1);
  }
  async trackCaptureProcess(i, t) {
    var n;
    const e = Date.now(), A = Rt(this.fpsOfAllImages), g = {};
    g.width = t.width, g.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: i, imageResolution: g, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - D(this, Ii), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await gs() });
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: ie(Rt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const g = A, n = await g0(t), I = await QQ(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await Bn(I) }, s = {};
    s.sessionToken = this.sessionToken, s.web = r;
    const C = s, E = await this.createProtoMessage(n, C), B = {};
    B.detection = e, B.imageResolution = g;
    const x = {};
    x.image = n, x.data = B;
    const d = x;
    this.stop();
    const u = {};
    u.imageData = d, u.protoMessage = E, u.webMetadata = r, u.candidateSelectionImages = i, this.onCaptureCallback(u);
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
    await dg(Math.max(II.max - i, II.min));
  }
}
Yt = new WeakMap(), Ii = new WeakMap();
class Fs extends O0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...g }) {
    super(g);
    w(this, "candidateSelectionTime", -7380 + 2 * 1192 + 4996);
    w(this, "candidatesSelectionFramesCount", -68 + -12 * 155 + 1928);
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
    this.candidateSelectionTime === -30 * 215 + 4921 + 1529 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Mi.minFrames ? t > Mi.minDuration : t > Mi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new U("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), g = ie((-5075 + 1863 * 5 + -9 * 360) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[0];
    const s = this.getInstructionCode(r), C = this.collectAndEscalate(s), E = {};
    return E.detection = t.detection, E.instructionCode = s, E.isEscalated = C, E.invalidValidators = a, E.isInCandidateSelection = this.isInCandidateSelection, { processedImage: E, detectionTime: A, fps: g, avgFps: ie(Rt(this.fpsOfAllImages)), resolution: I };
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
class Ss extends O0 {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...A }) {
    super(A);
    W(this, Ce);
    W(this, De);
    w(this, "fallbackInstruction");
    w(this, "checkToInstructionCodeMap");
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
    }), document.addEventListener(tI.REQUEST_CAPTURE, D(this, De));
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
    return D(this, Ce) ? D(this, Ce) === Ri.FIRST_FRAME ? !0 : D(this, Ce) === Ri.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), J(this, Ce, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), g = ie((-2160 + -9026 * 1 + 12186) / A);
    this.fpsOfAllImages.pushFixed(g);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[-31 * 211 + -5573 + 12114]), s = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = s, { processedImage: C, detectionTime: A, fps: g, avgFps: ie(Rt(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), D(this, De) && document.removeEventListener(tI.REQUEST_CAPTURE, D(this, De));
  }
}
Ce = new WeakMap(), De = new WeakMap();
function Rs({ captureMode: o, ...i }) {
  return o === Ha.AUTO_CAPTURE ? new Fs(i) : new Ss(i);
}
function Ms({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = TQ(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, HQ(t.CAMERA_PROPS_CHANGED, A), P(() => () => {
    vt.getInstance().restart();
  }, []);
  const g = {};
  return g.shouldCameraMirror = e, g;
}
function vs(o) {
  P(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function Ls({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: g, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: s }) {
  vs(() => {
    t && t.destroy();
  });
  const C = fA(!1), { appState: E, handleAppStateChange: B, isCameraReady: x } = rt(), { sunfish: d } = eo(), { analytics: u } = qa(), { cameraResolution: c, cameraService: h, onCameraResolutionChange: m, videoRef: F } = fQ(), v = {};
  v.cameraResolution = c, v.cameraService = h, v.customEvent = A;
  const { shouldCameraMirror: k } = Ms(v), y = Ct(void (714 + 25 * 3 + -789)), K = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && x, BA = oe((Z) => {
    B(PA.WAITING), a(Z);
  }, [a, B]), AA = oe((Z, Bt) => {
    m(Z.resolution), y.value = Z, r(Z, Bt);
  }, [r, y, m]);
  P(() => {
    !C.current && K && (C.current = !0, B(PA.RUNNING));
  }, [K, B]), P(() => {
    if (E !== PA.RUNNING || !K) return;
    if (!h || !t) throw new U("Cannot start detection");
    t.imageProcessor.reset();
    const Z = {};
    Z.captureMode = o, Z.analytics = u, Z.cameraService = h, Z.imageProcessor = t.imageProcessor, Z.fallbackInstruction = g, Z.instructionCodeMap = I, Z.checkToInstructionCodeMap = i, Z.sessionToken = s, Z.samVersion = t.samVersion, Z.createProtoMessage = e, Z.onCaptureCallback = BA, Z.onDetectionCallback = AA, Z.instructionEscalation = t.instructionEscalation, Z.imageCropSettings = n;
    const Bt = Rs(Z);
    return t.runDetectionLoop(Bt), () => {
      t.stopDetectionLoop();
    };
  }, [E, K, t, h, BA, AA, s, y, u, e, I, i, g, o, n]);
  const FA = {};
  return FA.videoRef = F, FA.cameraResolution = c, FA.detectionDetails = y, FA.shouldCameraMirror = k, FA;
}
const Js = () => typeof document < "u" && document.hasFocus();
function Us(o = {}) {
  const i = fA(o), t = fA(Js()), [e, A] = xA(t.current);
  P(() => {
    i.current = o;
  }), P(() => {
    function n(s) {
      t.current = s, A(s);
    }
    function I() {
      Promise.resolve().then(() => {
        var s, C, E, B;
        !t.current && ((C = (s = i.current).onFocus) == null || C.call(s), (B = (E = i.current).onChange) == null || B.call(E, !0)), n(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var s, C, E, B;
        t.current && ((C = (s = i.current).onBlur) == null || C.call(s), (B = (E = i.current).onChange) == null || B.call(E, !1)), n(!1);
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
function Ys(o, i) {
  if (!o) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = o;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const A = { ...o };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function Ws() {
  const o = Ct(null);
  function i({ cameraProperties: e }) {
    o.value = Ys(o.value, e);
  }
  const t = {};
  return t.cameraProperties = o, t.mergeCameraProperties = i, t;
}
const H0 = ot(null), Qn = () => {
  const o = Ee(H0);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}, Os = ({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => {
  var g, n, I;
  return {
    onPhotoTaken: t,
    captureMode: i ?? Ha.AUTO_CAPTURE,
    assetsDirectoryPath: o0(o),
    sessionToken: e,
    thresholds: {
      faceConfidence: (A == null ? void 0 : A.faceConfidence) ?? YB,
      minFaceSizeRatio: (A == null ? void 0 : A.minFaceSizeRatio) ?? WB,
      maxFaceSizeRatio: (A == null ? void 0 : A.maxFaceSizeRatio) ?? OB,
      sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? TB,
      brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? PB,
      brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? qB,
      outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? HB,
      devicePitchAngleThreshold: (A == null ? void 0 : A.devicePitchAngleThreshold) ?? jB,
      mouth: {
        confidence: ((g = A == null ? void 0 : A.mouth) == null ? void 0 : g.confidence) ?? KB,
        status: {
          min: ((n = A == null ? void 0 : A.mouth) == null ? void 0 : n.status.min) ?? gI.min,
          max: ((I = A == null ? void 0 : A.mouth) == null ? void 0 : I.status.max) ?? gI.max
        }
      },
      leftEye: (A == null ? void 0 : A.leftEye) ?? {
        confidence: nI
      },
      rightEye: (A == null ? void 0 : A.rightEye) ?? {
        confidence: nI
      }
    }
  };
};
function Hs({
  cameraOptions: o,
  children: i
}) {
  const t = hA(() => Os(o), [o]);
  return /* @__PURE__ */ p(H0.Provider, { value: t, children: i });
}
const Ks = ({ children: o }) => {
  const i = fA(null);
  return PQ(i, Be.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ p(CB, { ref: i, children: o });
}, vg = {};
vg.minFaceSizeRatio = 0.135, vg.maxFaceSizeRatio = 0.21;
const K0 = {};
K0.faceConfidence = 1;
const ae = {};
ae.minFaceSizeRatio = 0.3, ae.maxFaceSizeRatio = 1, ae.brightnessHighThreshold = 1, ae.brightnessLowThreshold = -(-11106 + -29 * -383), ae.faceConfidence = 0.15, ae.sharpnessThreshold = -(-6389 + 1 * -2116 + -4253 * -2), ae.outOfBoundsThreshold = -(-691 * 14 + 12 * -32 + 10059 * 1);
const Ts = { [DA.DISTANT]: vg, [DA.MIDDLE]: K0, [DA.CLOSEUP]: ae }, Ps = Ts, MI = -4367 + -5 * 1087 + 13 * 754 + 0.255, qs = (o, i) => ({ ...o, leftEye: { ...o.leftEye, center: Ye(o.leftEye.center, i) }, rightEye: { ...o.rightEye, center: Ye(o.rightEye.center, i) }, mouth: { ...o.mouth, center: Ye(o.mouth.center, i) }, topLeft: Ye(o.topLeft, i), bottomRight: Ye(o.bottomRight, i), faceCenter: Ye(o.faceCenter, i) }), T0 = (o, i) => {
  const { faceCenter: t, faceSize: e } = o, A = SB(e, i), g = {};
  g.x = t.x, g.y = t.y - A;
  const n = {};
  n.x = t.x + A, n.y = t.y;
  const I = {};
  I.x = t.x, I.y = t.y + A;
  const a = {};
  a.x = t.x - A, a.y = t.y;
  const r = {};
  return r.top = g, r.right = n, r.bottom = I, r.left = a, A0(r);
}, js = (o, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = i, g = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  I0(o, g, "rgba(255, 0, 0, 0.3)", !0), bt(o, e, "lime");
}, Zs = (o, i, t) => {
  const e = T0(i, t);
  Object.values(e).map((A) => bt(o, A, "orange"));
};
function Vs({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e } = Qn(), { redfin: A } = eo(), g = fA(null);
  if (P(() => {
    if (!g.current)
      return;
    g.current.width = o.width, g.current.height = o.height, pB(g.current);
    const u = Uo(o), c = a0(
      o,
      e.outOfBoundsThreshold,
      u
    ), h = NB(o);
    i.value && (js(g.current, i.value.processedImage.detection), Zs(
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
    processedImage: { detection: r, instructionCode: s, invalidValidators: C, isEscalated: E },
    resolution: B,
    samVersion: x
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
    Resolution: B,
    "Escalated instruction": E,
    "Component version": "7.1.2"
  };
  return x && (d["SAM version"] = x), C.length > 0 && (d["Invalid validators"] = C), /* @__PURE__ */ p(
    hB,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: d,
      isImageMirror: t
    }
  );
}
function _s(o) {
  return /* @__PURE__ */ p("rect", { fill: "#000", ...o, rx: "50%" });
}
function zs(o, i) {
  const [t, e] = xA(!1), A = () => e((I) => !I), g = "" + t;
  gt(() => {
    function I() {
      if (!o.current) return;
      const C = new MutationObserver(() => {
        A();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, C.observe(o.current, E), C;
    }
    function a() {
      var B;
      if (!((B = o.current) != null && B["parentElement"])) return;
      const C = new MutationObserver((x) => {
        x.find((u) => {
          for (const c of u.removedNodes)
            if (c !== (i == null ? void 0 : i.current) && c === o.current)
              return !0;
        }) && A(), x.forEach((u) => {
          u.addedNodes.forEach((c) => {
            var h;
            c !== (i == null ? void 0 : i.current) && ((h = c.parentElement) == null || h.removeChild(c));
          });
        });
      }), E = {};
      return E.childList = !0, C.observe(o.current.parentElement, E), C;
    }
    const r = I(), s = a();
    return () => {
      s == null || s.disconnect(), r == null || r.disconnect();
    };
  });
  const n = {};
  return n.key = g, n;
}
const Xs = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function $s({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = fA(null), { key: g } = zs(A, t);
  return /* @__PURE__ */ p("div", { ref: A, style: Xs, children: /* @__PURE__ */ p("svg", { viewBox: `0 0 ${e} ${i}`, children: [
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
function Ac({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = FB(t), A = `${e.height * 100}%`, g = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ p(
    $s,
    {
      cutOut: o || /* @__PURE__ */ p(_s, { height: A, width: g, x: n, y: I }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function ec({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = eo(), { appState: g, freemiumOverlayState: n } = rt(), I = fA(null), a = n !== Gt.HIDDEN && A !== hg.Higher && o, r = n === Gt.VISIBLE, s = o && g === PA.RUNNING;
  return /* @__PURE__ */ p(LA, { children: [
    a && /* @__PURE__ */ p(
      Ac,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: o
      }
    ),
    i,
    s && /* @__PURE__ */ p("div", { ref: I, children: /* @__PURE__ */ p(
      Vs,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const tc = (o, i) => {
  if (aQ()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    vt.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function oc(o, i) {
  const { FaceContent: t } = ve.v4, e = await Bn(o), A = await U0(i), g = {};
  g.image = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.faceContent = a, W0(r);
}
async function ic(o, i) {
  const t = await oc(o, i);
  return Y0(t);
}
function gc({ controller: o, onPhotoTakenInternal: i }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = Qn(), g = oe(({ candidateSelectionImages: a, imageData: r, protoMessage: s, webMetadata: C }) => {
    tc(r0.FACE, a), e(r, s);
    const E = {};
    E.cameraProperties = C, i == null || i(E);
  }, [i, e]), n = oe(({ fps: a, processedImage: r }, s) => {
    const C = {};
    C.code = r.instructionCode, C.isEscalated = r.isEscalated, l0(Be.INSTRUCTION_CHANGED, C), o && WQ(Be.DETECTED_FACE_CHANGED, r.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = r.detection, E.fps = a, E.image = s, E.isInCandidateSelection = r.isInCandidateSelection, E.invalidValidators = r.invalidValidators, OQ(Be.FACE_DETECTION, E);
  }, [o]), I = {};
  return I.captureMode = t, I.controller = o, I.createProtoMessage = ic, I.onCapture = g, I.onDetection = n, I.sessionToken = A, I.customEvent = Be, I.fallbackInstruction = iA.FACE_NOT_PRESENT, I.instructionCodeMap = iA, I.checkToInstructionCodeMap = EB, I.imageCropSettings = XB, Ls(I);
}
class nc {
  constructor(i, t, e, A, g) {
    w(this, "isDetectorInitialized", !1);
    w(this, "samVersion", null);
    w(this, "detection");
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
    return "" + t.replace(Xa, "") + i;
  }
}
class Ic {
  constructor() {
    w(this, "imageProcessor");
    w(this, "assetsDirectoryPath");
    w(this, "instructionEscalation");
    w(this, "compatibleSamVersion");
    w(this, "validationService");
    w(this, "detector");
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
    return this.imageProcessor = void (12373 + 1 * -12373), this.assetsDirectoryPath = void (738 * 3 + 5 * -310 + 83 * -8), this.instructionEscalation = void (-2 * 2288 + 8985 + 4409 * -1), this.compatibleSamVersion = void (-8 * 1242 + -8111 + 1 * 18047), this.detector = void (-2754 + 7 * 166 + 1592), this.validationService = void (1665 + -8135 * -1 + 9800 * -1), this;
  }
}
class ac {
  constructor() {
    w(this, "detectionRecord", []);
    w(this, "imagesWithTimestampForDuplicateDetection", new en(_B));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / eQ, A = e / (-4423 * 2 + -9398 * -1 + -550 * 1), g = i.length / (9907 + 2 * -576 + 8753 * -1), n = await Ns(i.slice(g - A, g + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(i) {
    return { data: CQ(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const g = A0(i), n = this.validationService.validateDetectedObject(g, t);
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
class rc {
  constructor() {
    w(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new U("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class sn extends nc {
  constructor(t, e, A, g, n, I) {
    super(A, g, n, e, I);
    w(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], l0(Be.INSTRUCTION_CHANGED, t, wB);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
w(sn, "_instance");
class Cc extends Ic {
  build() {
    return this.validateDependencies(), new sn(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
class Bc extends ac {
  constructor(t, e) {
    super();
    w(this, "className", "FaceImageProcessor");
    w(this, "detector");
    w(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Uo(t), A = n0(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), g = {};
    g.height = t.height, g.width = t.width;
    let n = await this.detector.detect(A.data, A.resolution, g);
    n = qs(n, Uo(t));
    const I = {};
    return I.detectedObject = n, I.image = t, I.imageData = A.data, I.timestamp = e, this.processDetectedObject(I);
  }
}
var Ve, we, me;
class Qc {
  constructor(i) {
    W(this, Ve);
    W(this, we);
    W(this, me);
    J(this, Ve, i), J(this, we, /* @__PURE__ */ new Map());
  }
  validate() {
    D(this, Ve).forEach((i) => {
      D(this, we).set(i.name, i.evaluate());
    }), J(this, me, void (-6528 + 1 * 5935 + 593 * 1));
  }
  isValid() {
    return D(this, me) === void (7108 + 7 * -161 + -5981) && J(this, me, Array.from(D(this, we).values()).every((i) => i)), D(this, me);
  }
  get result() {
    return D(this, we);
  }
  get validators() {
    return D(this, Ve);
  }
}
Ve = new WeakMap(), we = new WeakMap(), me = new WeakMap();
var Wt, be;
class NA {
  constructor(i, t) {
    W(this, Wt);
    W(this, be);
    J(this, Wt, i), J(this, be, t);
  }
  get threshold() {
    return D(this, be);
  }
  get name() {
    return D(this, Wt);
  }
  isValueBelowThreshold(i) {
    return i < D(this, be);
  }
  isValueAboveThreshold(i) {
    return i > D(this, be);
  }
}
Wt = new WeakMap(), be = new WeakMap();
const sc = "isNotDim";
var Ot;
class cc extends NA {
  constructor(t, e) {
    super(sc, t);
    W(this, Ot);
    J(this, Ot, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Ot));
  }
}
Ot = new WeakMap();
const Ec = "isNotSmall";
var Ht;
class xc extends NA {
  constructor(t, e) {
    super(Ec, t);
    W(this, Ht);
    J(this, Ht, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Ht));
  }
}
Ht = new WeakMap();
const dc = "isNotBright";
var Kt;
class lc extends NA {
  constructor(t, e) {
    super(dc, t);
    W(this, Kt);
    J(this, Kt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, Kt));
  }
}
Kt = new WeakMap();
const uc = "isPresent";
var Tt;
class hc extends NA {
  constructor(t, e) {
    super(uc, t);
    W(this, Tt);
    J(this, Tt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Tt));
  }
}
Tt = new WeakMap();
const fc = "isSharp";
var Pt;
class pc extends NA {
  constructor(t, e) {
    super(fc, t);
    W(this, Pt);
    J(this, Pt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Pt));
  }
}
Pt = new WeakMap();
const yc = "isLeftEyePresent";
var qt;
class Dc extends NA {
  constructor(t, e) {
    super(yc, t);
    W(this, qt);
    J(this, qt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, qt));
  }
}
qt = new WeakMap();
const wc = "isMouthPresent";
var jt;
class mc extends NA {
  constructor(t, e) {
    super(wc, t);
    W(this, jt);
    J(this, jt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, jt));
  }
}
jt = new WeakMap();
const bc = "isMouthScoreNotTooLow";
var Zt;
class Gc extends NA {
  constructor(t, e) {
    super(bc, t);
    W(this, Zt);
    J(this, Zt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Zt));
  }
}
Zt = new WeakMap();
const kc = "isMouthScoreNotTooHigh";
var Vt;
class Nc extends NA {
  constructor(t, e) {
    super(kc, t);
    W(this, Vt);
    J(this, Vt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, Vt));
  }
}
Vt = new WeakMap();
const Fc = "isNotLarge";
var _t;
class Sc extends NA {
  constructor(t, e) {
    super(Fc, t);
    W(this, _t);
    J(this, _t, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, _t));
  }
}
_t = new WeakMap();
const Rc = "isNotPitched";
var zt;
const En = class En extends NA {
  constructor(t, e) {
    super(Rc, En.calculatePitchAngleAccelerationThreshold(t));
    W(this, zt);
    J(this, zt, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return ZB * Math.sin(t * (Math.PI / 180));
  }
  evaluate() {
    const { z: t } = D(this, zt) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
zt = new WeakMap();
let Lg = En;
const Mc = "isRightEyePresent";
var Xt;
class vc extends NA {
  constructor(t, e) {
    super(Mc, t);
    W(this, Xt);
    J(this, Xt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, Xt));
  }
}
Xt = new WeakMap();
const Lc = "isNotOutOfBounds";
var $t, Ge;
class Jc extends NA {
  constructor(t, e, A) {
    super(Lc, t);
    W(this, $t);
    W(this, Ge);
    J(this, $t, e), J(this, Ge, A);
  }
  evaluate() {
    const t = a0(D(this, Ge), this.threshold, Uo(D(this, Ge))), e = T0(D(this, $t), D(this, Ge));
    return cQ(e, t);
  }
}
$t = new WeakMap(), Ge = new WeakMap();
class Uc {
  static getFaceValidationInstance(i, t, e, A) {
    return new Qc([new hc(i.faceConfidence, t.confidence), new Dc(i.leftEye.confidence, t.leftEye.confidence), new vc(i.rightEye.confidence, t.rightEye.confidence), new xc(i.minFaceSizeRatio, t.faceSize), new Sc(i.maxFaceSizeRatio, t.faceSize), new pc(i.sharpnessThreshold, t.sharpness), new cc(i.brightnessLowThreshold, t.brightness), new lc(i.brightnessHighThreshold, t.brightness), new Jc(i.outOfBoundsThreshold, t, e), new Lg(i.devicePitchAngleThreshold, A), new mc(i.mouth.confidence, t.mouth.confidence), new Nc(i.mouth.status.max, t.mouth.status), new Gc(i.mouth.status.min, t.mouth.status)]);
  }
}
class Yc extends rc {
  constructor() {
    super(...arguments);
    w(this, "className", "FaceValidationService");
    w(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = Uc.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const P0 = Symbol("Comlink.proxy"), Wc = Symbol("Comlink.endpoint"), Oc = Symbol("Comlink.releaseProxy"), ji = Symbol("Comlink.finalizer"), No = Symbol("Comlink.thrown"), q0 = (o) => typeof o == "object" && o !== null || typeof o == "function", Hc = {
  canHandle: (o) => q0(o) && o[P0],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return Z0(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), _0(o);
  }
}, Kc = {
  canHandle: (o) => q0(o) && No in o,
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
}, j0 = /* @__PURE__ */ new Map([
  ["proxy", Hc],
  ["throw", Kc]
]);
function Tc(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function Z0(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Tc(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: g, type: n, path: I } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(fe);
    let r;
    try {
      const s = I.slice(0, -1).reduce((E, B) => E[B], o), C = I.reduce((E, B) => E[B], o);
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
            const E = new C(...a);
            r = _c(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: B } = new MessageChannel();
            Z0(o, B), r = Vc(E, [E]);
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
      const [C, E] = ii(s);
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), E), n === "RELEASE" && (i.removeEventListener("message", e), V0(i), ji in o && typeof o[ji] == "function" && o[ji]());
    }).catch((s) => {
      const [C, E] = ii({
        value: new TypeError("Unserializable return value"),
        [No]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, C), { id: g }), E);
    });
  }), i.start && i.start();
}
function Pc(o) {
  return o.constructor.name === "MessagePort";
}
function V0(o) {
  Pc(o) && o.close();
}
function _0(o, i) {
  return Jg(o, [], i);
}
function co(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function z0(o) {
  return Te(o, {
    type: "RELEASE"
  }).then(() => {
    V0(o);
  });
}
const ti = /* @__PURE__ */ new WeakMap(), oi = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (ti.get(o) || 0) - 1;
  ti.set(o, i), i === 0 && z0(o);
});
function qc(o, i) {
  const t = (ti.get(i) || 0) + 1;
  ti.set(i, t), oi && oi.register(o, i, o);
}
function jc(o) {
  oi && oi.unregister(o);
}
function Jg(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(g, n) {
      if (co(e), n === Oc)
        return () => {
          jc(A), z0(o), e = !0;
        };
      if (n === "then") {
        if (i.length === 0)
          return { then: () => A };
        const I = Te(o, {
          type: "GET",
          path: i.map((a) => a.toString())
        }).then(fe);
        return I.then.bind(I);
      }
      return Jg(o, [...i, n]);
    },
    set(g, n, I) {
      co(e);
      const [a, r] = ii(I);
      return Te(o, {
        type: "SET",
        path: [...i, n].map((s) => s.toString()),
        value: a
      }, r).then(fe);
    },
    apply(g, n, I) {
      co(e);
      const a = i[i.length - 1];
      if (a === Wc)
        return Te(o, {
          type: "ENDPOINT"
        }).then(fe);
      if (a === "bind")
        return Jg(o, i.slice(0, -1));
      const [r, s] = vI(I);
      return Te(o, {
        type: "APPLY",
        path: i.map((C) => C.toString()),
        argumentList: r
      }, s).then(fe);
    },
    construct(g, n) {
      co(e);
      const [I, a] = vI(n);
      return Te(o, {
        type: "CONSTRUCT",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, a).then(fe);
    }
  });
  return qc(A, o), A;
}
function Zc(o) {
  return Array.prototype.concat.apply([], o);
}
function vI(o) {
  const i = o.map(ii);
  return [i.map((t) => t[0]), Zc(i.map((t) => t[1]))];
}
const X0 = /* @__PURE__ */ new WeakMap();
function Vc(o, i) {
  return X0.set(o, i), o;
}
function _c(o) {
  return Object.assign(o, { [P0]: !0 });
}
function ii(o) {
  for (const [i, t] of j0)
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
    X0.get(o) || []
  ];
}
function fe(o) {
  switch (o.type) {
    case "HANDLER":
      return j0.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function Te(o, i, t) {
  return new Promise((e) => {
    const A = zc();
    o.addEventListener("message", function g(n) {
      !n.data || !n.data.id || n.data.id !== A || (o.removeEventListener("message", g), e(n.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function zc() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const Xc = "SAM v1.44.6 for idcards", $c = "/dot-assets/magnifeye/dot-S9_xGlWZ.js";
function AE() {
  const { handleError: o } = rt(), { acceleration: i } = jQ(), { assetsDirectoryPath: t, thresholds: e } = Qn(), [A, g] = xA();
  P(() => {
    (async () => {
      const a = sn.getWorkerPath($c, t), r = {};
      r.type = "module";
      const s = new Worker(new URL(a, import.meta.url), r), C = _0(s), E = await new C(), B = new Yc(), x = new Bc(E, B), d = new Cc().setDetector(E).setValidationService(B).setImageProcessor(x).setCompatibleSamVersion(Xc).setAssetsDirectoryPath(t).build();
      try {
        await d.init(), g(d);
      } catch (u) {
        if (u instanceof Error) {
          o(U.fromError(u));
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
function eE({ onPhotoTakenInternal: o }) {
  const { isCameraReady: i } = Ta(), { sunfish: t } = eo(), { controller: e } = AE(), { cameraResolution: A, detectionDetails: g, shouldCameraMirror: n, videoRef: I } = gc({
    controller: e,
    onPhotoTakenInternal: o
  });
  return /* @__PURE__ */ p(LA, { children: /* @__PURE__ */ p(
    ec,
    {
      cameraResolution: A,
      detectionDetails: g,
      shouldMirror: n,
      children: /* @__PURE__ */ p(
        BB,
        {
          ref: I,
          $isImageMirror: n,
          $isVisible: t && i,
          autoPlay: !0,
          id: mB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function tE(o, i) {
  const { MagnifEyeLivenessContent: t } = ve.v4, e = await Promise.all(o.map(async (s) => Bn(s))), A = await U0(i), g = {};
  g.images = e, g.metadata = A;
  const n = g, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.magnifeyeLivenessContent = a, W0(r);
}
async function oE(o, i) {
  const t = o.map((A) => A.image), e = await tE(t, i);
  return Y0(e);
}
function iE(o, i) {
  const t = CI(o.faceSize, MI);
  return CI(i.faceSize, MI) < t;
}
const gE = (o, i) => {
  const t = Ct(void 0), e = (g) => {
    if (!(!g.detail || o !== ee.RUNNING || i !== DA.CLOSEUP)) {
      if (!t.value) {
        t.value = g.detail;
        return;
      }
      iE(t.value.data.detection, g.detail.data.detection) && (t.value = g.detail);
    }
  };
  u0(Be.FACE_DETECTION, e);
  const A = {};
  return A.middleImageBestCandidate = t, A;
}, nE = at.div`
  ${(o) => o.$isSecondStep && Ja`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, IE = ({
  assetsDirectoryPath: o,
  onComplete: i,
  sessionToken: t
}) => {
  const { analytics: e } = qa(), { appState: A, handleAppStateChange: g, handleError: n, magnifEyePhase: I, setIsCameraReady: a, setMagnifEyePhase: r } = Ta(), { cameraProperties: s, mergeCameraProperties: C } = Ws(), E = Ct([]), { middleImageBestCandidate: B } = gE(A, I), x = $Q(St.ANIMATION_END);
  function d(k) {
    E.value = [...E.value, k];
  }
  function u(k) {
    r(k), mg(St.STATUS_CHANGED, { phase: k });
  }
  function c(k) {
    d(k), u(DA.MIDDLE);
  }
  function h() {
    u(DA.DISTANT), x.value = !1, E.value = [], e == null || e.reset();
  }
  XQ(() => {
    x.value && u(DA.CLOSEUP);
  }), Us({
    onBlur: () => {
      a(!1), g(ee.LOADING), h();
    },
    onFocus: () => {
      a(!0), g(ee.RUNNING);
    }
  });
  async function m(k) {
    if (B.value) {
      const K = { image: await g0(B.value.image), data: B.value.data };
      d(K);
    }
    d(k);
    try {
      const y = {
        sessionToken: t,
        web: s.value
      }, K = await oE(E.value, y), [BA] = E.value;
      i(BA, K), e == null || e.trackLivenessProcess(E.value);
    } catch (y) {
      y instanceof Error && n(U.fromError(y));
      return;
    }
    g(ee.DONE);
  }
  const F = {
    [DA.DISTANT]: c,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [DA.MIDDLE]: () => {
    },
    [DA.CLOSEUP]: m
  }, v = hA(
    () => ({
      assetsDirectoryPath: o,
      magnifEyePhase: I,
      onPhotoTaken: F[I],
      thresholds: Ps[I]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, I]
  );
  return /* @__PURE__ */ p(Ks, { children: /* @__PURE__ */ p(nE, { $isSecondStep: I !== DA.DISTANT, children: /* @__PURE__ */ p(Hs, { cameraOptions: v, children: /* @__PURE__ */ p(eE, { onPhotoTakenInternal: C }) }) }) });
};
function aE({ initAppState: o, onError: i }) {
  const [t, e] = xA(o), [A, g] = xA(), [n, I] = xA(!1), a = fA(i);
  P(() => {
    a.current = i;
  }, [i]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = g, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function rE(o, i) {
  return i !== DA.DISTANT ? Gt.HIDDEN : o !== ee.RUNNING ? Gt.VISIBLE : Gt.VISIBLE_WITH_MASK;
}
function CE({
  onError: o
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: g, setError: n, setIsCameraReady: I } = aE({
    initAppState: ee.LOADING,
    onError: o
  }), [a, r] = xA(DA.DISTANT), s = rE(i, a), C = oe(
    (B) => {
      mg(St.STATUS_CHANGED, { state: ee.ERROR, error: B }), I(!1), A.current(B), n(B), g(ee.ERROR);
    },
    [I, A, n, g]
  ), E = oe(
    (B) => {
      B !== ee.WAITING && (g(B), mg(St.STATUS_CHANGED, { state: B }));
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
    handleAppStateChange: E,
    handleError: C,
    error: t
  };
}
var cn = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(cn || {});
class BE {
  constructor() {
    w(this, "appKey", "");
    w(this, "deviceId", "");
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
    const e = { _app_version: e0() }, A = { organization: t0(window.location.href) }, g = Qo({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
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
    await this.sendEvent(cn.AUTO_CAPTURE, i, t);
  }
}
const xt = new BE();
class QE {
  constructor() {
    w(this, "countly", xt);
  }
  createSegmentation(i) {
    return { appVersion: e0(), ...i };
  }
  init(i) {
    if (iQ()) return;
    const t = ts();
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
    xt.sendEvent(cn.ESCALATION_TRIGGER, e);
  }
}
class sE extends QE {
  constructor() {
    super(...arguments);
    w(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class cE extends sE {
  trackLivenessProcess(i) {
    var C, E, B, x, d, u, c, h, m, F;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e, A] = i, [g, n] = this.captureProcessAnalytics, I = is(g.averageFps + (n == null ? void 0 : n.averageFps)) / (263 * 38 + 8225 + -18217), a = uI(g.captureProcessDurationInMs), r = uI(n == null ? void 0 : n["captureProcessDurationInMs"]), s = this.createSegmentation({ faceSizeDistant: Oe((C = t.data.detection) == null ? void 0 : C.faceSize), faceSizeCloseup: Oe((E = A == null ? void 0 : A.data.detection) == null ? void 0 : E.faceSize), faceSizeMiddle: Oe((B = e.data.detection) == null ? void 0 : B.faceSize), confidenceDistant: Oe((x = t.data.detection) == null ? void 0 : x.confidence), confidenceCloseup: Oe((d = A == null ? void 0 : A.data.detection) == null ? void 0 : d.confidence), confidenceMiddle: Oe((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((h = (c = t.data) == null ? void 0 : c["imageResolution"]) == null ? void 0 : h.width) + "x" + ((F = (m = t.data) == null ? void 0 : m["imageResolution"]) == null ? void 0 : F.height), averageFps: I, captureTimeCloseup: r > -7335 + -1 * 1545 + 8925 ? ">45" : "" + r, captureTimeDistant: a > 9358 + -176 * 53 ? ">30" : "" + a, camera: os(g == null ? void 0 : g.deviceName, g == null ? void 0 : g.facingMode), instructionSet: g.instructionSet });
    this.countly.sendAutoCaptureEvent(s, a + r), this.reset();
  }
}
const EE = new cE(), xE = ({ props: o }) => o ? /* @__PURE__ */ p(iB, { target: o.styleTarget, children: /* @__PURE__ */ p(
  dQ,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: wg.getInstance(),
    children: /* @__PURE__ */ p(hQ, { analytics: EE, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ p(
      xB,
      {
        value: CE({
          onError: o.onError
        }),
        children: /* @__PURE__ */ p(Pa, { children: /* @__PURE__ */ p(bQ, { children: /* @__PURE__ */ p(IE, { ...o }) }) })
      }
    ) })
  }
) }) : null;
Er(xE, "x-dot-magnifeye-liveness", ["props"]);
