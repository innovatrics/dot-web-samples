var hr = Object.defineProperty;
var ug = (o) => {
  throw TypeError(o);
};
var pr = (o, i, t) => i in o ? hr(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var S = (o, i, t) => pr(o, typeof i != "symbol" ? i + "" : i, t), fg = (o, i, t) => i.has(o) || ug("Cannot " + t);
var w = (o, i, t) => (fg(o, i, "read from private field"), t ? t.call(o) : i.get(o)), P = (o, i, t) => i.has(o) ? ug("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), H = (o, i, t, e) => (fg(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var W0, J, Pa, Ta, qe, hg, qa, Wi, Ln, vi, Li, ja, c0 = {}, Za = [], yr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ai = Array.isArray;
function De(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Va(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function vA(o, i, t) {
  var e, A, n, g = {};
  for (n in i) n == "key" ? e = i[n] : n == "ref" ? A = i[n] : g[n] = i[n];
  if (arguments.length > 2 && (g.children = arguments.length > -6 * -749 + 31 * -204 + 1833 ? W0.call(arguments, -10986 + 41 * 268) : t), typeof o == "function" && o.defaultProps != null)
    for (n in o.defaultProps) void (-6900 + 296 * 17 + -467 * -4) === g[n] && (g[n] = o.defaultProps[n]);
  return i0(o, g, e, A, null);
}
function i0(o, i, t, e, A) {
  var n = {};
  n.type = o, n.props = i, n.key = t, n.ref = e, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__d = void (824 * -2 + 1 * 5405 + 289 * -13), n.__c = null, n.constructor = void (-2102 * -2 + -2519 + 1685 * -1), n.__v = A ?? ++Pa, n.__i = -(-8 * -517 + 9477 + -13612), n.__u = 0;
  var g = n;
  return A == null && J.vnode != null && J.vnode(g), g;
}
function Dr() {
  var o = {};
  return o.current = null, o;
}
function ae(o) {
  return o.children;
}
function ne(o, i) {
  this.props = o, this.context = i;
}
function it(o, i) {
  if (i == null) return o.__ ? it(o.__, o.__i + (1199 * -1 + 8277 + -7 * 1011)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? it(o) : null;
}
function _a(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = 0; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return _a(o);
  }
}
function Ji(o) {
  (!o.__d && (o.__d = !0) && qe.push(o) && !lo.__r++ || hg !== J.debounceRendering) && ((hg = J.debounceRendering) || qa)(lo);
}
function lo() {
  var o, i, t, e, A, n, g, a;
  for (qe.sort(Wi); o = qe.shift(); ) o.__d && (i = qe.length, e = void 0, n = (A = (t = o).__v).__e, g = [], a = [], t.__P && ((e = De({}, A)).__v = A.__v + (2478 + -29 * -281 + -10626), J.vnode && J.vnode(e), Jn(t.__P, e, A, t.__n, t.__P.namespaceURI, 1 * 5861 + -338 + -5491 & A.__u ? [n] : null, g, n ?? it(A), !!(7611 * 1 + 16 * -536 + 1 * 997 & A.__u), a), e.__v = A.__v, e.__.__k[e.__i] = e, $a(g, e, a), e.__e != n && _a(e)), qe.length > i && qe.sort(Wi));
  lo.__r = 1 * -3721 + -4 * -2459 + 5 * -1223;
}
function za(o, i, t, e, A, n, g, a, x, I, c) {
  var r, Q, C, E, d, u = e && e.__k || Za, s = i.length;
  for (t.__d = x, mr(t, i, u), x = t.__d, r = -5346 + 255 * -7 + 7131; r < s; r++) (C = t.__k[r]) != null && typeof C != "boolean" && typeof C != "function" && (Q = C.__i === -1 ? c0 : u[C.__i] || c0, C.__i = r, Jn(o, C, Q, A, n, g, a, x, I, c), E = C.__e, C.ref && Q.ref != C.ref && (Q.ref && Un(Q.ref, null, C), c.push(C.ref, C.__c || E, C)), d == null && E != null && (d = E), -166518 + -116027 * -2 & C.__u || Q.__k === C.__k ? (x && typeof C.type == "string" && !o.contains(x) && (x = it(Q)), x = Xa(C, x, o)) : typeof C.type == "function" && void (763 * -2 + 6575 + -11 * 459) !== C.__d ? x = C.__d : E && (x = E.nextSibling), C.__d = void (20 * 127 + 8688 + 4 * -2807), C.__u &= -(-316516 + 49557 * -1 + -2 * -281341));
  t.__d = x, t.__e = d;
}
function mr(o, i, t) {
  var e, A, n, g, a, x = i.length, I = t.length, c = I, r = -13662 + 1242 * 11;
  for (o.__k = [], e = -1 * -4559 + -6181 + 1622; e < x; e++) g = e + r, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? i0(null, A, null, null, null) : Ai(A) ? i0(ae, { children: A }, null, null, null) : void (648 + -2999 * 3 + 8349) === A.constructor && A.__b > -3 * 286 + -1 * -6701 + -5843 ? i0(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (-6602 * -1 + 9565 + 118 * -137), a = wr(A, t, g, c), A.__i = a, n = null, -(907 + 6 * -151) !== a && (c--, (n = t[a]) && (n.__u |= 50010 + 613 * -157 + 59101 * 3)), n == null || n.__v === null ? (a == -1 && r--, typeof A.type != "function" && (A.__u |= 1 * 81471 + -43698 + -1 * -27763)) : a !== g && (a == g - (72 * -66 + -1723 * 1 + 1 * 6476) ? r = a - g : a == g + 1 ? r++ : a > g ? c > x - g ? r += a - g : r-- : a < g && r++, a !== e + r && (A.__u |= 4965 + 100127 * 1 + -39556))) : (n = t[g]) && n.key == null && n.__e && -13 * -317 + 8167 + 16 * -768 == (-92070 + 19 * 1807 + 188809 & n.__u) && (n.__e == o.__d && (o.__d = it(n)), Ui(n, n, !(4073 * 1 + -52 * 101 + 1180)), t[g] = null, c--);
  if (c)
    for (e = -113 * -1 + -7867 + 7754; e < I; e++) (n = t[e]) != null && 534 + -707 * 7 + 4415 == (-8512 + -5816 * -24 & n.__u) && (n.__e == o.__d && (o.__d = it(n)), Ui(n, n));
}
function Xa(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = 3 * 1987 + 2 * -164 + -5633; e && A < e.length; A++) e[A] && (e[A].__ = o, i = Xa(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && -149 * 17 + -5631 + 227 * 36 === i.nodeType);
  return i;
}
function we(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (Ai(o) ? o.some(function(t) {
    we(t, i);
  }) : i.push(o)), i;
}
function wr(o, i, t, e) {
  var A = o.key, n = o.type, g = t - (6066 + 1 * 3644 + -133 * 73), a = t + (122 * 25 + 2 * 1100 + -1 * 5249), x = i[t];
  if (x === null || x && A == x.key && n === x.type && !(-5 * -23781 + -203399 * 1 + 215566 & x.__u)) return t;
  if (e > (x != null && -1 * -5416 + 3 * 51 + 1 * -5569 == (8657 * -15 + -231511 + -2 * -246219 & x.__u) ? -4 * -2208 + -8846 + 1 * 15 : 1 * -1007 + -9625 + 10632)) for (; g >= -3121 + -31 * -283 + -5652 * 1 || a < i.length; ) {
    if (g >= 0) {
      if ((x = i[g]) && -1613 * -3 + 4217 + -4528 * 2 == (1 * 202999 + 1 * -78229 + -23 * -274 & x.__u) && A == x.key && n === x.type) return g;
      g--;
    }
    if (a < i.length) {
      if ((x = i[a]) && -11746 + 1 * 11746 == (355837 + -224765 * 1 & x.__u) && A == x.key && n === x.type) return a;
      a++;
    }
  }
  return -(2 * -3811 + -5409 + 6 * 2172);
}
function pg(o, i, t) {
  i[4801 + 73 * -82 + -1185 * -1] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || yr.test(i) ? t : t + "px";
}
function H0(o, i, t, e, A) {
  var n;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || pg(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || pg(o.style, i, t[i]);
    }
  else if (i[-4167 * 1 + -6477 + -1774 * -6] === "o" && i[-839 * 4 + 2455 + 451 * 2] === "n") n = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(1 * -6962 + -9138 * -1 + -2174) : i.slice(4244 * 2 + 591 + -9077), o.l || (o.l = {}), o.l[i + n] = t, t ? e ? t.u = e.u : (t.u = Ln, o.addEventListener(i, n ? Li : vi, n)) : o.removeEventListener(i, n ? Li : vi, n);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-8521 * -1 + -10 * 283 + 569 * -10) === t && i[4] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && 2851 * 3 + -9867 + -263 * -5 == t ? "" : t));
  }
}
function yg(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = Ln++;
      else if (i.t < t.u) return;
      return t(J.event ? J.event(i) : i);
    }
  };
}
function Jn(o, i, t, e, A, n, g, a, x, I) {
  var c, r, Q, C, E, d, u, s, f, p, k, F, R, N, Z, mA, nA = i.type;
  if (void (5 * -1 + 6311 + -6306) !== i.constructor) return null;
  -1177 + 2 * -1416 + 1 * 4137 & t.__u && (x = !!(-2 * -3235 + 2250 + 12 * -724 & t.__u), n = [a = i.__e = t.__e]), (c = J.__b) && c(i);
  A: if (typeof nA == "function") try {
    if (s = i.props, f = "prototype" in nA && nA.prototype.render, p = (c = nA.contextType) && e[c.__c], k = c ? p ? p.props.value : c.__ : e, t.__c ? u = (r = i.__c = t.__c).__ = r.__E : (f ? i.__c = r = new nA(s, k) : (i.__c = r = new ne(s, k), r.constructor = nA, r.render = kr), p && p.sub(r), r.props = s, r.state || (r.state = {}), r.context = k, r.__n = e, Q = r.__d = !(-7 * -1409 + -9643 + -220), r.__h = [], r._sb = []), f && r.__s == null && (r.__s = r.state), f && nA.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = De({}, r.__s)), De(r.__s, nA.getDerivedStateFromProps(s, r.__s))), C = r.props, E = r.state, r.__v = i, Q) f && nA.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), f && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (f && nA.getDerivedStateFromProps == null && s !== C && r.componentWillReceiveProps != null && r.componentWillReceiveProps(s, k), !r.__e && (r.shouldComponentUpdate != null && !(-7535 + -3 * -2512) === r.shouldComponentUpdate(s, r.__s, k) || i.__v === t.__v)) {
        for (i.__v !== t.__v && (r.props = s, r.state = r.__s, r.__d = !1), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(VA) {
          VA && (VA.__ = i);
        }), F = 4402 + 4 * -1307 + -118 * -7; F < r._sb.length; F++) r.__h.push(r._sb[F]);
        r._sb = [], r.__h.length && g.push(r);
        break A;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(s, r.__s, k), f && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(C, E, d);
      });
    }
    if (r.context = k, r.props = s, r.__P = o, r.__e = !(1 * -9886 + -4720 + 14607), R = J.__r, N = 1342 + 61 * -22, f) {
      for (r.state = r.__s, r.__d = !(2 * -3528 + 207 + -25 * -274), R && R(i), c = r.render(r.props, r.state, r.context), Z = -134 * 53 + 283 * 11 + -3989 * -1; Z < r._sb.length; Z++) r.__h.push(r._sb[Z]);
      r._sb = [];
    } else do
      r.__d = !1, R && R(i), c = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++N < -2423 + -108 * -17 + -1 * -612);
    r.state = r.__s, r.getChildContext != null && (e = De(De({}, e), r.getChildContext())), f && !Q && r.getSnapshotBeforeUpdate != null && (d = r.getSnapshotBeforeUpdate(C, E)), za(o, Ai(mA = c != null && c.type === ae && c.key == null ? c.props.children : c) ? mA : [mA], i, t, e, A, n, g, a, x, I), r.base = i.__e, i.__u &= -(-7 * 131 + -23 * -131 + -43 * 45), r.__h.length && g.push(r), u && (r.__E = r.__ = null);
  } catch (VA) {
    i.__v = null, x || n != null ? (i.__e = a, i.__u |= x ? -8138 + 1 * -5565 + -3 * -4621 : 32, n[n.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), J.__e(VA, i, t);
  }
  else n == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = br(t.__e, i, t, e, A, n, g, x, I);
  (c = J.diffed) && c(i);
}
function $a(o, i, t) {
  i.__d = void (-794 + -804 * 3 + 3206);
  for (var e = 0; e < t.length; e++) Un(t[e], t[++e], t[++e]);
  J.__c && J.__c(i, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(n) {
        n.call(A);
      });
    } catch (n) {
      J.__e(n, A.__v);
    }
  });
}
function br(o, i, t, e, A, n, g, a, x) {
  var I, c, r, Q, C, E, d, u = t.props, s = i.props, f = i.type;
  if (f === "svg" ? A = "http://www.w3.org/2000/svg" : f === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), n != null) {
    for (I = -2 * -1751 + 8983 + 2497 * -5; I < n.length; I++) if ((C = n[I]) && "setAttribute" in C == !!f && (f ? C.localName === f : -1 * 3790 + -7648 + 11441 === C.nodeType)) {
      o = C, n[I] = null;
      break;
    }
  }
  if (o == null) {
    if (f === null) return document.createTextNode(s);
    o = document.createElementNS(A, f, s.is && s), n = null, a = !(34 * 146 + -31 + -4932);
  }
  if (f === null) u === s || a && o.data === s || (o.data = s);
  else {
    if (n = n && W0.call(o.childNodes), u = t.props || c0, !a && n != null)
      for (u = {}, I = -881 * 7 + 1034 * 4 + 2031; I < o.attributes.length; I++) u[(C = o.attributes[I]).name] = C.value;
    for (I in u) if (C = u[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") r = C;
      else if (I !== "key" && !(I in s)) {
        if (I == "value" && "defaultValue" in s || I == "checked" && "defaultChecked" in s) continue;
        H0(o, I, null, C, A);
      }
    }
    for (I in s) C = s[I], I == "children" ? Q = C : I == "dangerouslySetInnerHTML" ? c = C : I == "value" ? E = C : I == "checked" ? d = C : I === "key" || a && typeof C != "function" || u[I] === C || H0(o, I, C, u[I], A);
    if (c) a || r && (c.__html === r.__html || c.__html === o.innerHTML) || (o.innerHTML = c.__html), i.__k = [];
    else if (r && (o.innerHTML = ""), za(o, Ai(Q) ? Q : [Q], i, t, e, f === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, n, g, n ? n[-3 * 669 + 5834 + 1 * -3827] : t.__k && it(t, -5908 + 4426 * 1 + 1482), a, x), n != null)
      for (I = n.length; I--; ) n[I] != null && Va(n[I]);
    a || (I = "value", void (1 * -4541 + 8539 * -1 + -20 * -654) !== E && (E !== o[I] || f === "progress" && !E || f === "option" && E !== u[I]) && H0(o, I, E, u[I], A), I = "checked", void (-1381 * 3 + -4279 + 8422) !== d && d !== o[I] && H0(o, I, d, u[I], A));
  }
  return o;
}
function Un(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    J.__e(e, t);
  }
}
function Ui(o, i, t) {
  var e, A;
  if (J.unmount && J.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Un(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (n) {
      J.__e(n, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = 0; A < e.length; A++) e[A] && Ui(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || Va(o.__e), o.__c = o.__ = o.__e = o.__d = void 0;
}
function kr(o, i, t) {
  return this.constructor(o, t);
}
function Ye(o, i, t) {
  var e, A, n, g;
  J.__ && J.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, n = [], g = [], Jn(i, o = (!e && t || i).__k = vA(ae, null, [o]), A || c0, c0, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? W0.call(i.childNodes) : null, n, !e && t ? t : A ? A.__e : i.firstChild, e, g), $a(n, o, g);
}
function Yn(o, i) {
  Ye(o, i, Yn);
}
function On(o, i, t) {
  var e, A, n, g, a = De({}, o.props);
  for (n in o.type && o.type.defaultProps && (g = o.type.defaultProps), i) n == "key" ? e = i[n] : n == "ref" ? A = i[n] : a[n] = i[n] === void 0 && void (1 * 2173 + -1534 * 1 + -639 * 1) !== g ? g[n] : i[n];
  return arguments.length > -14708 + 14710 * 1 && (a.children = arguments.length > 5864 + 1 * 5099 + 274 * -40 ? W0.call(arguments, -3885 + -23 * -169) : t), i0(o.type, a, e || o.key, A || o.ref, null);
}
function It(o, i) {
  var t = { __c: i = "__cC" + ja++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, n;
    return this.getChildContext || (A = [], (n = {})[i] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(g) {
      this.props.value !== g.value && A.some(function(a) {
        a.__e = !0, Ji(a);
      });
    }, this.sub = function(g) {
      A.push(g);
      var a = g.componentWillUnmount;
      g.componentWillUnmount = function() {
        A && A.splice(A.indexOf(g), 1), a && a.call(g);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
W0 = Za.slice, J = { __e: function(o, i, t, e) {
  for (var A, n, g; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((n = A.constructor) && n.getDerivedStateFromError != null && (A.setState(n.getDerivedStateFromError(o)), g = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), g = A.__d), g) return A.__E = A;
  } catch (a) {
    o = a;
  }
  throw o;
} }, Pa = 0, Ta = function(o) {
  return o != null && o.constructor == null;
}, ne.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof o == "function" && (o = o(De({}, t), this.props)), o && De(t, o), o != null && this.__v && (i && this._sb.push(i), Ji(this));
}, ne.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(-4 * 863 + -164 * -1 + 3288), o && this.__h.push(o), Ji(this));
}, ne.prototype.render = ae, qe = [], qa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wi = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, lo.__r = 0, Ln = 4692 * 1 + -3832 + -5 * 172, vi = yg(!(9808 + 28 * 245 + -7 * 2381)), Li = yg(!(1 * -3199 + 1 * -6442 + 9641)), ja = -4908 * 1 + 1 * -7439 + -12347 * -1;
function Hn() {
  return (Hn = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = 1 * -5902 + -424 * -2 + 5055; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var Gr = ["context", "children"];
function Sr(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var n, g, a = {}, x = Object.keys(e);
    for (g = 4227 * -1 + -9545 + 13772; g < x.length; g++) A.indexOf(n = x[g]) >= 3296 * -3 + 3049 + -977 * -7 || (a[n] = e[n]);
    return a;
  }(o, Gr);
  return On(i, t);
}
function Nr() {
  var o = {};
  o.detail = {}, o.bubbles = !(-2390 + 811 * 7 + 1 * -3287), o.cancelable = !(9310 + -308 * -7 + -11466);
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = vA(Sr, Hn({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (e.nodeType === 3) return e.data;
    if (9685 + -5 * 501 + -7179 !== e.nodeType) return null;
    var n = [], g = {}, a = -705 * 10 + 5 * -1283 + 13465, x = e.attributes, I = e.childNodes;
    for (a = x.length; a--; ) x[a].name !== "slot" && (g[x[a].name] = x[a].value, g[Ax(x[a].name)] = x[a].value);
    for (a = I.length; a--; ) {
      var c = t(I[a], null), r = I[a].slot;
      r ? g[r] = vA(Dg, { name: r }, c) : n[a] = c;
    }
    var Q = A ? vA(Dg, null, n) : n;
    return vA(A || e.nodeName.toLowerCase(), g, Q);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Yn : Ye)(this._vdom, this._root);
}
function Ax(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Fr(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void 0, e[Ax(o)] = t, this._vdom = On(this._vdom, e), Ye(this._vdom, this._root);
  }
}
function Rr() {
  Ye(this._vdom = null, this._root);
}
function Dg(o, i) {
  var t = this;
  return vA("slot", Hn({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Mr(o, i, t, e) {
  function A() {
    var n = Reflect.construct(HTMLElement, [], A);
    return n._vdomComponent = o, n._root = n, n;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Nr, A.prototype.attributeChangedCallback = Fr, A.prototype.disconnectedCallback = Rr, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(n) {
    Object.defineProperty(A.prototype, n, { get: function() {
      return this._vdom.props[n];
    }, set: function(g) {
      this._vdom ? this.attributeChangedCallback(n, null, g) : (this._props || (this._props = {}), this._props[n] = g, this.connectedCallback());
      var a = typeof g;
      g != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, g);
    } });
  }), customElements.define(i, A);
}
var Wr = 7 * 207 + 7640 + -9089;
function D(o, i, t, e, A, n) {
  i || (i = {});
  var g, a, x = i;
  if ("ref" in x)
    for (a in x = {}, i) a == "ref" ? g = i[a] : x[a] = i[a];
  var I = {};
  I.type = o, I.props = x, I.key = t, I.ref = g, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void 0, I.__c = null, I.constructor = void (-252 + 42 * 6), I.__v = --Wr, I.__i = -(9221 * -1 + -39 * 63 + 1 * 11679), I.__u = 0, I.__source = A, I.__self = n;
  var c = I;
  if (typeof o == "function" && (g = o.defaultProps))
    for (a in g) void (5533 + -3 * 3078 + 3701) === x[a] && (x[a] = g[a]);
  return J.vnode && J.vnode(c), c;
}
var PA = function() {
  return PA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, PA.apply(this, arguments);
};
function Gt(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, n; e < A; e++)
    (n || !(e in i)) && (n || (n = Array.prototype.slice.call(i, 0, e)), n[e] = i[e]);
  return o.concat(n || Array.prototype.slice.call(i));
}
function vr(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var Lr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jr = vr(function(o) {
  return Lr.test(o) || o.charCodeAt(-3591 + -3 * -1197) === 3387 + -510 * -1 + 3786 * -1 && o.charCodeAt(4921 + -601 * -7 + -9127) === 9313 + -1566 * 1 + -7637 && o.charCodeAt(9898 + 9896 * -1) < -3483 * 2 + -6217 + 1 * 13274;
}), Oe, X, li, mg, St = 927 * 1 + -237 + -690, ex = [], AA = J, wg = AA.__b, bg = AA.__r, kg = AA.diffed, Gg = AA.__c, Sg = AA.unmount, Ng = AA.__;
function vt(o, i) {
  AA.__h && AA.__h(X, o, St || i), St = -8891 + 607 * -1 + 3 * 3166;
  var t = {};
  t.__ = [], t.__h = [];
  var e = X.__H || (X.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function DA(o) {
  return St = 231 + 9105 * -1 + -1775 * -5, Kn(ix, o);
}
function Kn(o, i, t) {
  var e = vt(Oe++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : ix(void (-124 * 12 + -2698 + -7 * -598), i), function(a) {
    var x = e.__N ? e.__N[0] : e.__[0], I = e.t(x, a);
    x !== I && (e.__N = [I, e.__[-7557 + 1 * 145 + 3 * 2471]], e.__c.setState({}));
  }], e.__c = X, !X.u)) {
    var A = function(a, x, I) {
      if (!e.__c.__H) return !0;
      var c = e.__c.__H.__.filter(function(Q) {
        return !!Q.__c;
      });
      if (c.every(function(Q) {
        return !Q.__N;
      })) return !n || n.call(this, a, x, I);
      var r = !(5231 * -1 + 3546 + -281 * -6);
      return c.forEach(function(Q) {
        if (Q.__N) {
          var C = Q.__[0];
          Q.__ = Q.__N, Q.__N = void 0, C !== Q.__[0] && (r = !0);
        }
      }), !(!r && e.__c.props === a) && (!n || n.call(this, a, x, I));
    };
    X.u = !(8063 + -1 * 8063);
    var n = X.shouldComponentUpdate, g = X.componentWillUpdate;
    X.componentWillUpdate = function(a, x, I) {
      if (this.__e) {
        var c = n;
        n = void (-319 + -11 * -29), A(a, x, I), n = c;
      }
      g && g.call(this, a, x, I);
    }, X.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function _(o, i) {
  var t = vt(Oe++, 3);
  !AA.__s && Pn(t.__H, i) && (t.__ = o, t.i = i, X.__H.__h.push(t));
}
function Lt(o, i) {
  var t = vt(Oe++, 4);
  !AA.__s && Pn(t.__H, i) && (t.__ = o, t.i = i, X.__h.push(t));
}
function LA(o) {
  return St = -9577 + -1 * -9582, NA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function tx(o, i, t) {
  St = 6, Lt(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void (-1 * 9440 + 1993 + 7447);
  }, t == null ? t : t.concat(o));
}
function NA(o, i) {
  var t = vt(Oe++, 7);
  return Pn(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function be(o, i) {
  return St = -1 * 7743 + -1 * -349 + 7402, NA(function() {
    return o;
  }, i);
}
function Ge(o) {
  var i = X.context[o.__c], t = vt(Oe++, 9);
  return t.c = o, i ? (t.__ == null && (t.__ = !(9743 * 1 + -1 * 7894 + -1849), i.sub(X)), i.props.value) : o.__;
}
function uo(o, i) {
  AA.useDebugValue && AA.useDebugValue(i ? i(o) : o);
}
function ox() {
  var o = vt(Oe++, 11);
  if (!o.__) {
    for (var i = X.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [3603 * 1 + 1492 * -3 + -873 * -1, 6320 + -147 * -9 + -7643]);
    o.__ = "P" + t[1 * -5528 + 190 * -3 + 6098] + "-" + t[1]++;
  }
  return o.__;
}
function Ur() {
  for (var o; o = ex.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(z0), o.__H.__h.forEach(Yi), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], AA.__e(i, o.__v);
  }
}
AA.__b = function(o) {
  X = null, wg && wg(o);
}, AA.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), Ng && Ng(o, i);
}, AA.__r = function(o) {
  bg && bg(o), Oe = -7525 + 16 * 146 + 5189 * 1;
  var i = (X = o.__c).__H;
  i && (li === X ? (i.__h = [], X.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-8131 * -1 + -2 * -2708 + 589 * -23);
  })) : (i.__h.forEach(z0), i.__h.forEach(Yi), i.__h = [], Oe = 109 * -37 + -1194 + 1 * 5227)), li = X;
}, AA.diffed = function(o) {
  kg && kg(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (1579 * -1 + 4592 * -2 + 10764 !== ex.push(i) && mg === AA.requestAnimationFrame || ((mg = AA.requestAnimationFrame) || Yr)(Ur)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-1 * -1476 + -69 * 106 + 5838);
  })), li = X = null;
}, AA.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(z0), t.__h = t.__h.filter(function(e) {
        return !e.__ || Yi(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], AA.__e(e, t.__v);
    }
  }), Gg && Gg(o, i);
}, AA.unmount = function(o) {
  Sg && Sg(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      z0(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void (1873 + -467 * 20 + -19 * -393), i && AA.__e(i, t.__v));
};
var Fg = typeof requestAnimationFrame == "function";
function Yr(o) {
  var i, t = function() {
    clearTimeout(e), Fg && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  Fg && (i = requestAnimationFrame(t));
}
function z0(o) {
  var i = X, t = o.__c;
  typeof t == "function" && (o.__c = void (-1778 * -3 + -5760 + -142 * -3), t()), X = i;
}
function Yi(o) {
  var i = X;
  o.__c = o.__(), X = i;
}
function Pn(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function ix(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function nx(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Oi(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !(-37 * -23 + 49 * 36 + -2615 * 1);
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(-9257 + 1 * 6573 + 2684);
  return !(-6052 + 1 * 6793 + -740);
}
function Hi(o, i) {
  this.props = o, this.context = i;
}
function Or(o, i) {
  function t(A) {
    var n = this.props.ref, g = n == A.ref;
    return !g && n && (n.call ? n(null) : n.current = null), i ? !i(this.props, A) || !g : Oi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, vA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(-1 * -7277 + 386 * 12 + -11909), e.__f = !(-1 * 3227 + -5 * 1780 + 67 * 181), e;
}
(Hi.prototype = new ne()).isPureReactComponent = !(-1 * 2897 + 3 * 947 + 56), Hi.prototype.shouldComponentUpdate = function(o, i) {
  return Oi(this.props, o) || Oi(this.state, i);
};
var Rg = J.__b;
J.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), Rg && Rg(o);
};
var Hr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 12159 + -8 * 1031;
function gx(o) {
  function i(t) {
    var e = nx({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = Hr, i.render = i, i.prototype.isReactComponent = i.__f = !(-1454 + -1 * -1454), i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var Mg = function(o, i) {
  return o == null ? null : we(we(o).map(i));
}, Kr = { map: Mg, forEach: Mg, count: function(o) {
  return o ? we(o).length : -1 * -4027 + 19 * -73 + -2640;
}, only: function(o) {
  var i = we(o);
  if (i.length !== 1) throw "Children.only";
  return i[-1 * 3578 + 9586 + 1 * -6008];
}, toArray: we }, Pr = J.__e;
J.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, n = i; n = n.__; ) if ((A = n.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  Pr(o, i, t, e);
};
var Wg = J.unmount;
function ax(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = nx({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return ax(e, i, t);
  })), o;
}
function xx(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return xx(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(3391 * 1 + 5493 * 1 + -8884), o.__c.__P = t)), o;
}
function X0() {
  this.__u = -13285 + -2657 * -5, this.t = null, this.__b = null;
}
function Ix(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function Tr(o) {
  var i, t, e;
  function A(n) {
    if (i || (i = o()).then(function(g) {
      t = g.default || g;
    }, function(g) {
      e = g;
    }), e) throw e;
    if (!t) throw i;
    return vA(t, n);
  }
  return A.displayName = "Lazy", A.__f = !(2382 + -2862 * 3 + -6 * -1034), A;
}
function Vt() {
  this.u = null, this.o = null;
}
J.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && 32 & o.__u && (o.type = null), Wg && Wg(o);
}, (X0.prototype = new ne()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = Ix(e.__v), n = !(9085 + 9084 * -1), g = function() {
    n || (n = !(-9497 * 1 + -11 * -876 + -1 * 139), t.__R = null, A ? A(a) : a());
  };
  t.__R = g;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var x = e.state.__a;
        e.__v.__k[-415 * 23 + -2329 * 2 + 14203] = xx(x, x.__c.__P, x.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.t.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || -5524 + 1667 * -1 + -1 * -7223 & i.__u || e.setState({ __a: e.__b = e.__v.__k[0] }), o.then(g, g);
}, X0.prototype.componentWillUnmount = function() {
  this.t = [];
}, X0.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-6460 + -1523 * -1 + -4937 * -1].__c;
      this.__v.__k[-5737 + -3 * -2167 + 2 * -382] = ax(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && vA(ae, null, o.fallback);
  return A && (A.__u &= -(-1 * 6066 + -9871 + 15970)), [vA(ae, null, i.__a ? null : o.children), A];
};
var vg = function(o, i, t) {
  if (++t[1 * 8236 + -9634 + 1399] === t[-215 * -3 + -7584 + -3 * -2313] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[0] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > -47 * 14 + -8689 * 1 + -9350 * -1; ) t.pop()();
    if (t[-504 * 3 + 6763 * 1 + -875 * 6] < t[1099 * -2 + -544 + -3 * -914]) break;
    o.u = t = t[449 * -2 + -8656 + 9556];
  }
};
function qr(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function jr(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    Ye(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-4415 + -5079 * 1 + 9494);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -16908 + -16909 * -1, 9539 * 1 + 776 + -191 * 54), i.i.removeChild(e);
  } }), Ye(vA(qr, { context: i.context }, o.__v), i.l);
}
function Zr(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = vA(jr, t);
  return e.containerInfo = i, e;
}
(Vt.prototype = new ne()).__a = function(o) {
  var i = this, t = Ix(i.__v), e = i.o.get(o);
  return e[-4571 * 1 + 7946 + -375 * 9]++, function(A) {
    var n = function() {
      i.props.revealOrder ? (e.push(A), vg(i, o, e)) : A();
    };
    t ? t(n) : n();
  };
}, Vt.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = we(o.children);
  o.revealOrder && o.revealOrder[0] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [368 + 7 * 1011 + -7444, -1 * -1798 + -1 * 9047 + -11 * -659, this.u]);
  return o.children;
}, Vt.prototype.componentDidUpdate = Vt.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    vg(o, t, i);
  });
};
var rx = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 99795 + 1 * 119143 + -31767 * 5, Vr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, _r = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, zr = /[A-Z0-9]/g, Xr = typeof document < "u", $r = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function AC(o, i, t) {
  return i.__k == null && (i.textContent = ""), Ye(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function eC(o, i, t) {
  return Yn(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
ne.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(ne.prototype, o, { configurable: !(-2 * -3407 + -1281 * 1 + -503 * 11), get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(131 * -49 + -3326 * 1 + 9745), t.writable = !(1608 + 19 * -97 + -1 * -235), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var Lg = J.event;
function tC() {
}
function oC() {
  return this.cancelBubble;
}
function iC() {
  return this.defaultPrevented;
}
J.event = function(o) {
  return Lg && (o = Lg(o)), o.persist = tC, o.isPropagationStopped = oC, o.isDefaultPrevented = iC, o.nativeEvent = o;
};
var $0 = {};
$0.enumerable = !(-6721 + 3361 * 2), $0.configurable = !(-3 * -398 + -3831 + -879 * -3), $0.get = function() {
  return this.class;
};
var Tn, nC = $0, Jg = J.vnode;
J.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var n in t) {
      var g = t[n];
      if (!(n === "value" && "defaultValue" in t && g == null || Xr && n === "children" && e === "noscript" || n === "class" || n === "className")) {
        var a = n.toLowerCase();
        n === "defaultValue" && "value" in t && t.value == null ? n = "value" : n === "download" && !(420 * -16 + 3665 + 13 * 235) === g ? g = "" : a === "translate" && g === "no" ? g = !1 : a === "ondoubleclick" ? n = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || $r(t.type) ? a === "onfocus" ? n = "onfocusin" : a === "onblur" ? n = "onfocusout" : _r.test(n) ? n = a : -(-4947 + 7 * 67 + 4479) === e.indexOf("-") && Vr.test(n) ? n = n.replace(zr, "-$&").toLowerCase() : g === null && (g = void (-58 * 146 + 1 * -7729 + 3 * 5399)) : a = n = "oninput", a === "oninput" && A[n = a] && (n = "oninputCapture"), A[n] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = we(t.children).forEach(function(x) {
      x.props.selected = -(-965 * -9 + -60 * 8 + -293 * 28) != A.value.indexOf(x.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = we(t.children).forEach(function(x) {
      x.props.selected = A.multiple ? -(5768 + 1 * -3590 + -2177) != A.defaultValue.indexOf(x.props.value) : A.defaultValue == x.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", nC)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = rx, Jg && Jg(o);
};
var Ug = J.__r;
J.__r = function(o) {
  Ug && Ug(o), Tn = o.__c;
};
var Yg = J.diffed;
J.diffed = function(o) {
  Yg && Yg(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), Tn = null;
};
var lA = {};
lA.readContext = function(o) {
  return Tn.__n[o.__c].props.value;
}, lA.useCallback = be, lA.useContext = Ge, lA.useDebugValue = uo, lA.useDeferredValue = Bx, lA.useEffect = _, lA.useId = ox, lA.useImperativeHandle = tx, lA.useInsertionEffect = Ex, lA.useLayoutEffect = Lt, lA.useMemo = NA, lA.useReducer = Kn, lA.useRef = LA, lA.useState = DA, lA.useSyncExternalStore = dx, lA.useTransition = Qx;
var Cx = {};
Cx.current = lA;
var cx = {};
cx.ReactCurrentDispatcher = Cx;
var gC = cx;
function aC(o) {
  return vA.bind(null, o);
}
function ei(o) {
  return !!o && o.$$typeof === rx;
}
function xC(o) {
  return ei(o) && o.type === ae;
}
function IC(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function rC(o) {
  return ei(o) ? On.apply(null, arguments) : o;
}
function CC(o) {
  return !!o.__k && (Ye(null, o), !(-1 * -5947 + -9103 + 3156));
}
function cC(o) {
  return o && (o.base || 4 * 448 + -51 * -7 + -2148 === o.nodeType && o) || null;
}
var sC = function(o, i) {
  return o(i);
}, BC = function(o, i) {
  return o(i);
}, QC = ae;
function sx(o) {
  o();
}
function Bx(o) {
  return o;
}
function Qx() {
  return [!(7765 + 2 * 1120 + -10004), sx];
}
var Ex = Lt, EC = ei;
function dx(o, i) {
  var t = i(), e = DA({ h: { __: t, v: i } }), A = e[-4333 + 1 * 1646 + 2687].h, n = e[3 * 3109 + 9566 + -18892];
  return Lt(function() {
    A.__ = t, A.v = i, ui(A) && n({ h: A });
  }, [o, t, i]), _(function() {
    return ui(A) && n({ h: A }), o(function() {
      ui(A) && n({ h: A });
    });
  }, [o]), t;
}
function ui(o) {
  var i, t, e = o.v, A = o.__;
  try {
    var n = e();
    return !((i = A) === (t = n) && (2413 * -4 + -2 * -3807 + 2 * 1019 !== i || (-8 * 985 + -1125 + 9006) / i == (-4668 * 1 + -5504 + -3 * -3391) / t) || i != i && t != t);
  } catch {
    return !(-4775 * 1 + -3232 + 8007);
  }
}
var W = {};
W.useState = DA, W.useId = ox, W.useReducer = Kn, W.useEffect = _, W.useLayoutEffect = Lt, W.useInsertionEffect = Ex, W.useTransition = Qx, W.useDeferredValue = Bx, W.useSyncExternalStore = dx, W.startTransition = sx, W.useRef = LA, W.useImperativeHandle = tx, W.useMemo = NA, W.useCallback = be, W.useContext = Ge, W.useDebugValue = uo, W.version = "17.0.2", W.Children = Kr, W.render = AC, W.hydrate = eC, W.unmountComponentAtNode = CC, W.createPortal = Zr, W.createElement = vA, W.createContext = It, W.createFactory = aC, W.cloneElement = rC, W.createRef = Dr, W.Fragment = ae, W.isValidElement = ei, W.isElement = EC, W.isFragment = xC, W.isMemo = IC, W.findDOMNode = cC, W.Component = ne, W.PureComponent = Hi, W.memo = Or, W.forwardRef = gx, W.flushSync = BC, W.unstable_batchedUpdates = sC, W.StrictMode = QC, W.Suspense = X0, W.SuspenseList = Vt, W.lazy = Tr, W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gC;
var nt = W, dC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lC(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function uC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function fC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function hC(o) {
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
const pC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: dC,
  getAugmentedNamespace: hC,
  getDefaultExportFromCjs: lC,
  getDefaultExportFromNamespaceIfNotNamed: fC,
  getDefaultExportFromNamespaceIfPresent: uC
}, Symbol.toStringTag, { value: "Module" }));
var yC = function(i, t, e, A) {
  var n = e ? e.call(A, i, t) : void 0;
  if (n !== void (1 * 6245 + -8554 + 1 * 2309)) return !!n;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var g = Object.keys(i), a = Object.keys(t);
  if (g.length !== a.length) return !1;
  for (var x = Object.prototype.hasOwnProperty.bind(t), I = 289 * 11 + 2320 + 13 * -423; I < g.length; I++) {
    var c = g[I];
    if (!x(c)) return !1;
    var r = i[c], Q = t[c];
    if (n = e ? e.call(A, r, Q, c) : void (-472 * -14 + -187 * 47 + -2181 * -1), n === !1 || n === void (-198 * -47 + 3780 + -13086) && r !== Q) return !1;
  }
  return !0;
};
const DC = pC.getDefaultExportFromCjs(yC);
var z = "-ms-", n0 = "-moz-", j = "-webkit-", lx = "comm", ti = "rule", qn = "decl", mC = "@import", ux = "@keyframes", wC = "@layer", fx = Math.abs, jn = String.fromCharCode, Ki = Object.assign;
function bC(o, i) {
  return cA(o, 10 * 747 + -43 * -101 + -11813) ^ 6263 * 1 + -917 * -2 + -8052 ? (((i << 1 * 8509 + -3801 + -4706 ^ cA(o, -13681 + 1 * 13681)) << -2 * 2545 + -927 + 6019 * 1 ^ cA(o, -394 * 1 + -8 * 881 + 7443)) << 1 * -9217 + -416 + 5 * 1927 ^ cA(o, 1 * 6756 + 33 * -73 + -11 * 395)) << 1460 + -9 * 162 ^ cA(o, 2 * 1229 + 1 * 6863 + -9318) : -1 * 2423 + 2313 + 11 * 10;
}
function hx(o) {
  return o.trim();
}
function fe(o, i) {
  return (o = i.exec(o)) ? o[294 + 3866 * 1 + -4160] : o;
}
function U(o, i, t) {
  return o.replace(i, t);
}
function Ao(o, i, t) {
  return o.indexOf(i, t);
}
function cA(o, i) {
  return o.charCodeAt(i) | 1 * 7166 + 2695 + -9861;
}
function Nt(o, i, t) {
  return o.slice(i, t);
}
function se(o) {
  return o.length;
}
function px(o) {
  return o.length;
}
function _t(o, i) {
  return i.push(o), o;
}
function kC(o, i) {
  return o.map(i).join("");
}
function Og(o, i) {
  return o.filter(function(t) {
    return !fe(t, i);
  });
}
var oi = 237 * 11 + -8577 + 5971, Ft = 1921 * -2 + -2886 + 6729, yx = -15122 + -2 * -7561, xe = -4059 + 33 * 123, gA = -4067 + -1 * 1169 + -1 * -5236, Jt = "";
function ii(o, i, t, e, A, n, g, a) {
  var x = {};
  return x.value = o, x.root = i, x.parent = t, x.type = e, x.props = A, x.children = n, x.line = oi, x.column = Ft, x.length = g, x.return = "", x.siblings = a, x;
}
function Me(o, i) {
  return Ki(ii("", null, null, "", null, null, -3 * 214 + 1697 * -2 + 1 * 4036, o.siblings), o, { length: -o.length }, i);
}
function st(o) {
  for (; o.root; ) o = Me(o.root, { children: [o] });
  _t(o, o.siblings);
}
function GC() {
  return gA;
}
function SC() {
  return gA = xe > -2 * 4030 + -7612 + 15672 ? cA(Jt, --xe) : 2 * 2075 + -8755 * -1 + 5 * -2581, Ft--, gA === -1 * -381 + 4 * 1414 + -6027 && (Ft = -125 * 9 + -9 * 386 + 4600, oi--), gA;
}
function re() {
  return gA = xe < yx ? cA(Jt, xe++) : -3124 + 3124 * 1, Ft++, gA === 8106 + 115 * -86 + 1794 && (Ft = 755 + 1063 * 7 + 745 * -11, oi++), gA;
}
function tt() {
  return cA(Jt, xe);
}
function eo() {
  return xe;
}
function ni(o, i) {
  return Nt(Jt, o, i);
}
function Pi(o) {
  switch (o) {
    case -1 * -4309 + -247 * -37 + -13448:
    case -6 * -803 + 510 + -1773 * 3:
    case 10:
    case -10 * -426 + -56 * 37 + -435 * 5:
    case -98 * -101 + -3 * 2069 + 3659 * -1:
      return 437 * -11 + -7693 * -1 + 43 * -67;
    case -7039 + 1 * -993 + -5 * -1613:
    case -62 * 155 + 4269 + 5384:
    case 44:
    case 47:
    case 62:
    case -2 * 3767 + 4 * 1895 + 18:
    case 1823 + -1 * 9487 + -41 * -190:
    case 13480 + -13421 * 1:
    case 8037 + 2817 * 1 + 3577 * -3:
    case 547 * 7 + -339 * 1 + -673 * 5:
      return -2177 + 1 * -3547 + 5728;
    case 7786 + 84 * -92:
      return -1 * 5419 + 8989 * -1 + -1 * -14411;
    case -5693 + 1 * -1157 + 6884:
    case 39:
    case -20 * -332 + 6112 + -12712:
    case -7022 + -1 * 7589 + -1 * -14702:
      return 2;
    case 6079 + -65 * -10 + -1 * 6688:
    case 197 * 37 + 6723 + -13919:
      return -1 * 305 + -3 * -2437 + -7005;
  }
  return 3942 + 1 * -8805 + 4863;
}
function NC(o) {
  return oi = Ft = 3838 * -2 + 2922 + -5 * -951, yx = se(Jt = o), xe = -1 * -1042 + 5666 + 156 * -43, [];
}
function FC(o) {
  return Jt = "", o;
}
function fi(o) {
  return hx(ni(xe - (1320 + 1 * -9985 + 14 * 619), Ti(o === 6019 + -79 * -5 + -6323 ? o + (378 + 1 * -5993 + 137 * 41) : o === 6299 * -1 + 5250 + 1089 ? o + (125 * -5 + -9913 + -3513 * -3) : o)));
}
function RC(o) {
  for (; (gA = tt()) && gA < -964 * -8 + 2238 + 1 * -9917; ) re();
  return Pi(o) > 1 * 5701 + -84 * 31 + -1 * 3095 || Pi(gA) > 4426 + -14 * 580 + 3697 ? "" : " ";
}
function MC(o, i) {
  for (; --i && re() && !(gA < -44 * -166 + -1351 + 5 * -1181 || gA > 9189 + 17 * 409 + 2 * -8020 || gA > 4616 + 47 * -97 && gA < -9604 * 1 + -46 + 9715 || gA > 70 && gA < -9318 + -3113 * 3 + 18754); ) ;
  return ni(o, eo() + (i < -5055 + 2 * 947 + -1 * -3167 && tt() == -9763 * 1 + 9678 + 117 && re() == 860 + 3920 * -1 + 2 * 1546));
}
function Ti(o) {
  for (; re(); ) switch (gA) {
    case o:
      return xe;
    case 34:
    case -3454 + 458 * 5 + 1203:
      o !== -3945 + -1 * -3979 && o !== -1 * 7831 + -3833 + 11703 && Ti(gA);
      break;
    case -3367 + 104 * 29 + 391:
      o === -710 + 811 * 3 + -1682 * 1 && Ti(o);
      break;
    case -9953 * 1 + -9038 + 19083:
      re();
      break;
  }
  return xe;
}
function WC(o, i) {
  for (; re() && o + gA !== 6502 + -6 * -775 + 11105 * -1 + 10; ) if (o + gA === 42 + (-1 * 7937 + -5 * 1810 + 17029) && tt() === -7297 + -2 * -517 + 6310) break;
  return "/*" + ni(i, xe - (1041 * 7 + 3645 + -10931)) + "*" + jn(o === 6846 + 1 * -6799 ? o : re());
}
function vC(o) {
  for (; !Pi(tt()); ) re();
  return ni(o, xe);
}
function LC(o) {
  return FC(to("", null, null, null, [""], o = NC(o), -8684 + -2 * -4874 + -8 * 133, [-8385 + 14 * -661 + 17639], o));
}
function to(o, i, t, e, A, n, g, a, x) {
  for (var I = 0, c = 1090 + 22 * -191 + 3112, r = g, Q = -2231 * -2 + 9186 + 8 * -1706, C = -2 * -589 + -955 * -4 + -4998, E = 0, d = -176 * -13 + -1 * 5064 + 2777 * 1, u = 3 * -3225 + -575 * -2 + 1 * 8526, s = 1, f = 20 * -1 + -5 * -1509 + 1505 * -5, p = "", k = A, F = n, R = e, N = p; u; ) switch (E = f, f = re()) {
    case 7424 + -2 * 3692:
      if (E != -1797 * -5 + -630 + 8247 * -1 && cA(N, r - (-9 * -349 + -11 * -547 + 1 * -9157)) == -317 * 23 + 1 * 8698 + -1349) {
        Ao(N += U(fi(f), "&", "&\f"), "&\f", fx(I ? a[I - (11 * 223 + -1107 + 269 * -5)] : -646 * -5 + 302 + -3532)) != -(1800 + -2 * 965 + 131) && (s = -1);
        break;
      }
    case 1 * 7231 + -7464 + 267:
    case 6625 + -1 * 2965 + -3621:
    case -1844 + -1 * -3614 + -73 * 23:
      N += fi(f);
      break;
    case 7998 + 6023 * -1 + -1966:
    case -5137 + 4562 * 1 + -65 * -9:
    case -15363 + -4 * -3844:
    case 1795 + -1 * 9337 + 7574:
      N += RC(E);
      break;
    case 92:
      N += MC(eo() - (-8405 * 1 + -4253 * 2 + 16912), 1 * 7195 + 1022 + -1642 * 5);
      continue;
    case 47:
      switch (tt()) {
        case -2047 * -1 + 5489 + 7494 * -1:
        case 6836 + 7 * -982 + 5 * 17:
          _t(JC(WC(re(), eo()), i, t, x), x);
          break;
        default:
          N += "/";
      }
      break;
    case 123 * d:
      a[I++] = se(N) * s;
    case 125 * d:
    case 59:
    case -4 * -385 + -43 * -188 + -3208 * 3:
      switch (f) {
        case 7666 * -1 + -9834 + -2500 * -7:
        case 2031 * -3 + -3157 + 1 * 9375:
          u = 34 * -17 + 1465 + -887;
        case 1101 + -1042 * 1 + c:
          s == -(5319 * 1 + -1 * -7041 + -12359) && (N = U(N, /\f/g, "")), C > -4832 + 2390 * 2 + -26 * -2 && se(N) - r && _t(C > 5437 + 1 * -1763 + -607 * 6 ? Kg(N + ";", e, t, r - (9725 + -23 * 53 + 189 * -45), x) : Kg(U(N, " ", "") + ";", e, t, r - (-1 * 1345 + 13 * 395 + -3788), x), x);
          break;
        case -2 * 3313 + 4579 + 18 * 117:
          N += ";";
        default:
          if (_t(R = Hg(N, i, t, I, c, A, a, p, k = [], F = [], r, n), n), f === 11787 + -162 * 72)
            if (c === 9400 + 739 * -5 + -5705) to(N, i, R, R, k, n, r, a, F);
            else switch (Q === 9558 + 28 * 104 + 139 * -89 && cA(N, -9353 + -1303 * 7 + 18477) === 501 * 8 + -4976 + 1078 ? -4393 + 1 * 4493 : Q) {
              case -2446 * 2 + 3420 + 1572:
              case 1 * -356 + 7865 + -7401:
              case 7053 + 3 * -133 + -85 * 77:
              case 316 + 74 * 51 + -3975:
                to(o, R, R, e && _t(Hg(o, R, R, 766 + 713 * 6 + 97 * -52, 112 * -48 + -759 * 9 + 13 * 939, A, a, p, A, k = [], r, F), F), A, F, r, a, e ? k : F);
                break;
              default:
                to(N, R, R, R, [""], F, -7 * 387 + -4291 + -70 * -100, a, F);
            }
      }
      I = c = C = 4015 * -2 + -685 * -10 + 1180, d = s = 1, p = N = "", r = g;
      break;
    case 8141 * -1 + 9409 + 121 * -10:
      r = -1388 + -4 * -999 + -2607 + se(N), C = E;
    default:
      if (d < 89 * 38 + -4443 + -6 * -177) {
        if (f == 123) --d;
        else if (f == -910 * -3 + -2394 + -1 * 211 && d++ == -6391 + -581 * -11 && SC() == 5712 + -337 * 1 + -250 * 21) continue;
      }
      switch (N += jn(f), f * d) {
        case 8266 + -63 * 93 + 1 * -2369:
          s = c > -9376 + 653 * 15 + -419 ? -7335 + 4 * -2399 + 3 * 5644 : (N += "\f", -(-1007 + -6 * -389 + 3 * -442));
          break;
        case -1601 * -1 + -9659 + 2 * 4051:
          a[I++] = (se(N) - (-778 + 620 * -16 + -823 * -13)) * s, s = -125 * 1 + 4106 + -3980;
          break;
        case 47 * -130 + 2096 + -4078 * -1:
          tt() === -9388 * 1 + 4137 * 1 + 5296 && (N += fi(re())), Q = tt(), c = r = se(p = N += vC(eo())), f++;
          break;
        case -251 * 9 + 55 * -66 + 989 * 6:
          E === 45 && se(N) == -2545 * -1 + -88 * 96 + 1181 * 5 && (d = 8 * -544 + -961 * 2 + 6274);
      }
  }
  return n;
}
function Hg(o, i, t, e, A, n, g, a, x, I, c, r) {
  for (var Q = A - 1, C = A === -961 * -4 + 6497 + -10341 ? n : [""], E = px(C), d = 0, u = -2337 + -6 * -157 + 465 * 3, s = 8034 + 618 * -13; d < e; ++d) for (var f = 9473 * -1 + 3830 + 5643, p = Nt(o, Q + (3 * -1639 + 62 * -31 + -72 * -95), Q = fx(u = g[d])), k = o; f < E; ++f) (k = hx(u > 89 * -1 + -1390 + -1479 * -1 ? C[f] + " " + p : U(p, /&\f/g, C[f]))) && (x[s++] = k);
  return ii(o, i, t, A === -41 * 221 + 2681 + 6380 ? ti : a, x, I, c, r);
}
function JC(o, i, t, e) {
  return ii(o, i, t, lx, jn(GC()), Nt(o, 2, -2), -1434 * -5 + -1383 * 2 + -4404, e);
}
function Kg(o, i, t, e, A) {
  return ii(o, i, t, qn, Nt(o, -4717 * -2 + -8837 + 199 * -3, e), Nt(o, e + 1, -(1018 + -393 * 5 + 948)), e, A);
}
function Dx(o, i, t) {
  switch (bC(o, i)) {
    case 2382 * 1 + -5460 + -8181 * -1:
      return j + "print-" + o + o;
    case 0 + -1 * 257 + 5994:
    case -3963 + -131 * 17 + 10391:
    case -1 * 2063 + 6071 + -831:
    case -2 * -83 + 5018 + -103 * 17:
    case -1 * 9851 + 3 * 1049 + 1669 * 5:
    case -9934 * -1 + 670 + -6147:
    case 7811 * 1 + 7541 + 1 * -12431:
    case -3 * 541 + 2616 + 4579:
    case 6356:
    case -20 * 347 + -54 * -191 + -247 * -10:
    case -2432 + 1 * 5623:
    case 2097 + -4 * 1468 + 10 * 1042:
    case 1 * 353 + 9034 + -1 * 6382:
    case 6391:
    case 4522 + 38 * -55 + 3 * 1149:
    case 7212 + 227 * -7:
    case 9071 + 2 * 3923 + -10782:
    case -3362 * 1 + -7613 + 13 * 1198:
    case 202 * 37 + -1 * -3041 + 2830 * -2:
    case 4215:
    case -16 * 600 + 12768 + -3221 * -1:
    case 4928 + -1 * -181:
    case -5341 * 1 + 6121 + 4585:
    case 7671 * -1 + 267 * 11 + 10355:
    case 3 * -1471 + -9522 + 17764:
      return j + o + o;
    case 16007 + 11218 * -1:
      return n0 + o + o;
    case 8072 + -1 * 6449 + 81 * 46:
    case 6861 + 1678 * 2 + -5971:
    case 8016 + -2983 * 2 + 920 * 3:
    case -13 * 70 + 4390 + 3488:
    case -101 * 73 + -9965 + 20094:
      return j + o + n0 + o + z + o + o;
    case -53 * -25 + 2837 + 1774:
      switch (cA(o, i + (1943 * 1 + 1 * -6494 + 4562))) {
        case 8721 + 295 * 26 + -1 * 16277:
          return j + o + z + U(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 1 * -9777 + -518 * 10 + 15065:
          return j + o + z + U(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case -58 * 8 + 8661 * -1 + -70 * -131:
          return j + o + z + U(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case -125 * -22 + 11339 + -7261:
    case -8993 + -1 * 4281 + -1 * -17542:
    case -1 * -889 + -6074 + 6 * 1348:
      return j + o + z + o + o;
    case -29 * 385 + -7408 + 24738:
      return j + o + z + "flex-" + o + o;
    case 9309 + -271 * -26 + -11168:
      return j + o + U(o, /(\w+).+(:[^]+)/, j + "box-$1$2" + z + "flex-$1$2") + o;
    case -3345 + -13 * -676:
      return j + o + z + "flex-item-" + U(o, /flex-|-self/g, "") + (fe(o, /flex-|baseline/) ? "" : z + "grid-row-" + U(o, /flex-|-self/g, "")) + o;
    case 4675:
      return j + o + z + "flex-line-pack" + U(o, /align-content|flex-|-self/g, "") + o;
    case -2 * -3049 + -4103 + 3553:
      return j + o + z + U(o, "shrink", "negative") + o;
    case -2 * 872 + 379 * -19 + -14237 * -1:
      return j + o + z + U(o, "basis", "preferred-size") + o;
    case 6060:
      return j + "box-" + U(o, "-grow", "") + j + o + z + U(o, "grow", "positive") + o;
    case 5411 * 1 + -8581 + -7724 * -1:
      return j + U(o, /([^-])(transform)/g, "$1" + j + "$2") + o;
    case -10517 + -6263 * -1 + 10441:
      return U(U(U(o, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), o, "") + o;
    case 1 * -5107 + -291 * -27 + 9 * 305:
    case 2803 * -2 + -6518 * -1 + -277 * -11:
      return U(o, /(image-set\([^]*)/, j + "$1$`$1");
    case 4055 * 1 + -179 * 26 + 5567:
      return U(U(o, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + o + o;
    case 41 + -12 * 724 + -12847 * -1:
      if (!fe(o, /flex-|baseline/)) return z + "grid-column-align" + Nt(o, i) + o;
      break;
    case 418 * -11 + -9335 + 16525:
    case -17 * -211 + 307 * 19 + -202 * 30:
      return z + U(o, "template-", "") + o;
    case 4384:
    case -8878 + -5 * -1486 + 5064:
      return t && t.some(function(e, A) {
        return i = A, fe(e.props, /grid-\w+-end/);
      }) ? ~Ao(o + (t = t[i].value), "span", 8691 + 1 * -3153 + -5538) ? o : z + U(o, "-start", "") + o + z + "grid-row-span:" + (~Ao(t, "span", -3140 * 3 + -580 + -50 * -200) ? fe(t, /\d+/) : +fe(t, /\d+/) - +fe(o, /\d+/)) + ";" : z + U(o, "-start", "") + o;
    case -313 * 6 + 4643 + 1 * 2131:
    case 4128:
      return t && t.some(function(e) {
        return fe(e.props, /grid-\w+-start/);
      }) ? o : z + U(U(o, "-end", "-span"), "span ", "") + o;
    case 4095:
    case 494 * 16 + 7201 + 5761 * -2:
    case 139 + -1 * 8178 + -1 * -12107:
    case 2532:
      return U(o, /(.+)-inline(.+)/, j + "$1$2") + o;
    case 711 + -1153 * -8 + -17 * 107:
    case -197 * -61 + -7512 + -2 * -1277:
    case 4 * -2746 + 4321 + 12416:
    case -1857 + 12 * 616:
    case 10119 + 4949 * -1 + -11 * -25:
    case -8186 + -1 * 7211 + 21098:
    case -14304 + -19237 * -1:
    case 1055 * -1 + 1623 * -1 + -5 * -1471:
    case -3409 + -34 * -263:
    case 15535 + -4873 * 2:
    case 2 * -3886 + 384 + 12409 * 1:
    case 1367 + -1699 * -2:
      if (se(o) - (-7965 + 399 * -25 + 17941) - i > -2 * 3297 + -9360 + 15960) switch (cA(o, i + (6368 + 1 * -6367))) {
        case 1 * -3151 + 5403 + 2143 * -1:
          if (cA(o, i + (13 * -728 + -1768 + 106 * 106)) !== -1 * 9043 + 11 * -867 + 18625) break;
        case 9798 + -16 * 606:
          return U(o, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + n0 + (cA(o, i + (14 * 438 + -4644 * -2 + -15417)) == -9973 + 2 * 2614 + 23 * 211 ? "$3" : "$2-$3")) + o;
        case 3884 + -4933 * 1 + 1164 * 1:
          return ~Ao(o, "stretch", 519 + -173 * 3) ? Dx(U(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case 8721 * 1 + -11 * -368 + -7617:
    case 18 * 590 + 4595 + -1859 * 5:
      return U(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, n, g, a, x, I) {
        return z + A + ":" + n + I + (g ? z + A + "-span:" + (a ? x : +x - +n) + I : "") + o;
      });
    case -4817 * 1 + -1222 + 10988:
      if (cA(o, i + (47 * -106 + 2332 + 2656)) === 3 * 1536 + -3 * 35 + -4382) return U(o, ":", ":" + j) + o;
      break;
    case 71 * -94 + 1 * 397 + -12721 * -1:
      switch (cA(o, cA(o, -1239 + -1 * 3650 + 4903 * 1) === -5873 + -1 * -9390 + -3472 ? -35 * -5 + -8917 + 8760 : -2 * 4423 + -1941 + 2 * 5399)) {
        case 120:
          return U(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + j + (cA(o, -2 * -3314 + 5330 + -11944) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + z + "$2box$3") + o;
        case -4 * -1015 + -8938 + 4978:
          return U(o, ":", ":" + z) + o;
      }
      break;
    case 1662 + 73 * 1 + 3984:
    case 2647:
    case 103 * -37 + -47 * -18 + 1700 * 3:
    case 3927:
    case 1 * 1406 + 2076 * -1 + 3061:
      return U(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function fo(o, i) {
  for (var t = "", e = 0; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function UC(o, i, t, e) {
  switch (o.type) {
    case wC:
      if (o.children.length) break;
    case mC:
    case qn:
      return o.return = o.return || o.value;
    case lx:
      return "";
    case ux:
      return o.return = o.value + "{" + fo(o.children, e) + "}";
    case ti:
      if (!se(o.value = o.props.join(","))) return "";
  }
  return se(t = fo(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function YC(o) {
  var i = px(o);
  return function(t, e, A, n) {
    for (var g = "", a = -626 + -626 * -1; a < i; a++) g += o[a](t, e, A, n) || "";
    return g;
  };
}
function OC(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function HC(o, i, t, e) {
  if (o.length > -(8377 + -5 * -1451 + -77 * 203) && !o.return)
    switch (o.type) {
      case qn:
        o.return = Dx(o.value, o.length, t);
        return;
      case ux:
        return fo([Me(o, { value: U(o.value, "@", "@" + j) })], e);
      case ti:
        if (o.length) return kC(t = o.props, function(A) {
          switch (fe(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              st(Me(o, { props: [U(A, /:(read-\w+)/, ":" + n0 + "$1")] }));
              var n = {};
              n.props = [A], st(Me(o, n)), Ki(o, { props: Og(t, e) });
              break;
            case "::placeholder":
              st(Me(o, { props: [U(A, /:(plac\w+)/, ":" + j + "input-$1")] })), st(Me(o, { props: [U(A, /:(plac\w+)/, ":" + n0 + "$1")] })), st(Me(o, { props: [U(A, /:(plac\w+)/, z + "input-$1")] }));
              var g = {};
              g.props = [A], st(Me(o, g)), Ki(o, { props: Og(t, e) });
              break;
          }
          return "";
        });
    }
}
var M = {};
M.animationIterationCount = 1, M.aspectRatio = 1, M.borderImageOutset = 1, M.borderImageSlice = 1, M.borderImageWidth = 1, M.boxFlex = 1, M.boxFlexGroup = 1, M.boxOrdinalGroup = 1, M.columnCount = 1, M.columns = 1, M.flex = 1, M.flexGrow = 1, M.flexPositive = 1, M.flexShrink = 1, M.flexNegative = 1, M.flexOrder = 1, M.gridRow = 1, M.gridRowEnd = 1, M.gridRowSpan = 1, M.gridRowStart = 1, M.gridColumn = 1, M.gridColumnEnd = 1, M.gridColumnSpan = 1, M.gridColumnStart = 1, M.msGridRow = 1, M.msGridRowSpan = 1, M.msGridColumn = 1, M.msGridColumnSpan = 1, M.fontWeight = 1, M.lineHeight = 1, M.opacity = 1, M.order = 1, M.orphans = 1, M.tabSize = 1, M.widows = 1, M.zIndex = 1, M.zoom = 1, M.WebkitLineClamp = 1, M.fillOpacity = 1, M.floodOpacity = 1, M.stopOpacity = 1, M.strokeDasharray = 1, M.strokeDashoffset = 1, M.strokeMiterlimit = 1, M.strokeOpacity = 1, M.strokeWidth = 1;
var KC = M, q = {}, gt = typeof process < "u" && void (5818 + 2 * -565 + -4688) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", mx = "active", wx = "data-styled-version", gi = "6.1.11", Zn = `/*!sc*/
`, Vn = typeof window < "u" && "HTMLElement" in window, PC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && q !== void 0 && void (2539 * -1 + -8918 + 11457) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-6895 * -1 + -47 * 49 + -4592) !== q && q.SC_DISABLE_SPEEDY !== void 0 && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), Pg = /invalid hook call/i, K0 = /* @__PURE__ */ new Set(), TC = function(o, i) {
  if (q.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var n = !0;
      console.error = function(g) {
        for (var a = [], x = -4363 * -2 + 8753 + 2 * -8739; x < arguments.length; x++) a[x - (-1 * -185 + 4514 + -174 * 27)] = arguments[x];
        Pg.test(g) ? (n = !1, K0.delete(e)) : A.apply(void (-533 + -31 * 51 + -2114 * -1), Gt([g], a, !1));
      }, LA(), n && !K0.has(e) && (console.warn(e), K0.add(e));
    } catch (g) {
      Pg.test(g.message) && K0.delete(e);
    } finally {
      console.error = A;
    }
  }
}, ai = Object.freeze([]), Rt = Object.freeze({});
function qC(o, i, t) {
  return void (-5700 + 1 * 5853 + -17 * 9) === t && (t = Rt), o.theme !== t.theme && o.theme || i || t.theme;
}
var qi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), jC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ZC = /(^-|-$)/g;
function Tg(o) {
  return o.replace(jC, "-").replace(ZC, "");
}
var VC = /(a)(d)/gi, P0 = 1 * 2466 + -5484 + -1 * -3070, qg = function(o) {
  return String.fromCharCode(o + (o > 6437 + -76 * -65 + -11352 ? -5542 + 2 * 4266 + -2951 : -9 * -369 + 4343 * 1 + -7567 * 1));
};
function ji(o) {
  var i, t = "";
  for (i = Math.abs(o); i > P0; i = i / P0 | -4535 + 1 * 4535) t = qg(i % P0) + t;
  return (qg(i % P0) + t).replace(VC, "$1-$2");
}
var hi, bx = 2386 * -1 + 5185 + 2582, je = function(o, i) {
  for (var t = i.length; t; ) o = (-4 * 1381 + -3679 + 2309 * 4) * o ^ i.charCodeAt(--t);
  return o;
}, kx = function(o) {
  return je(bx, o);
};
function _C(o) {
  return ji(kx(o) >>> 0);
}
function Gx(o) {
  return q.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function pi(o) {
  return typeof o == "string" && (q.NODE_ENV === "production" || o.charAt(9056 + 4243 * 1 + -13299) === o.charAt(3663 * 2 + 1 * -3937 + -3389 * 1).toLowerCase());
}
var $A = {};
$A.childContextTypes = !0, $A.contextType = !0, $A.contextTypes = !0, $A.defaultProps = !0, $A.displayName = !0, $A.getDefaultProps = !0, $A.getDerivedStateFromError = !0, $A.getDerivedStateFromProps = !0, $A.mixins = !0, $A.propTypes = !0, $A.type = !0;
var We = {};
We.name = !0, We.length = !0, We.prototype = !0, We.caller = !0, We.callee = !0, We.arguments = !0, We.arity = !0;
var Te = {};
Te.$$typeof = !0, Te.compare = !0, Te.defaultProps = !0, Te.displayName = !0, Te.propTypes = !0, Te.type = !0;
var dt = {};
dt.$$typeof = !0, dt.render = !0, dt.defaultProps = !0, dt.displayName = !0, dt.propTypes = !0;
var Sx = typeof Symbol == "function" && Symbol.for, Nx = Sx ? Symbol.for("react.memo") : -94294 + -8182 * 1 + 162591, zC = Sx ? Symbol.for("react.forward_ref") : 97085 + -1 * 54354 + 17381, XC = $A, $C = We, Fx = Te, Ac = ((hi = {})[zC] = dt, hi[Nx] = Fx, hi);
function jg(o) {
  return ("type" in (i = o) && i.type.$$typeof) === Nx ? Fx : "$$typeof" in o ? Ac[o.$$typeof] : XC;
  var i;
}
var ec = Object.defineProperty, tc = Object.getOwnPropertyNames, Zg = Object.getOwnPropertySymbols, oc = Object.getOwnPropertyDescriptor, ic = Object.getPrototypeOf, Vg = Object.prototype;
function Rx(o, i, t) {
  if (typeof i != "string") {
    if (Vg) {
      var e = ic(i);
      e && e !== Vg && Rx(o, e, t);
    }
    var A = tc(i);
    Zg && (A = A.concat(Zg(i)));
    for (var n = jg(o), g = jg(i), a = -1489 + -6241 * 1 + 7730; a < A.length; ++a) {
      var x = A[a];
      if (!(x in $C || t && t[x] || g && x in g || n && x in n)) {
        var I = oc(i, x);
        try {
          ec(o, x, I);
        } catch {
        }
      }
    }
  }
  return o;
}
function Mt(o) {
  return typeof o == "function";
}
function _n(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function Ve(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function _g(o, i) {
  if (3348 + 1 * -3348 === o.length) return "";
  for (var t = o[-27 * 53 + -9816 + 11247], e = 2636 + -1 * -1138 + -343 * 11; e < o.length; e++) t += o[e];
  return t;
}
function Wt(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function Zi(o, i, t) {
  if (void (-8031 + 72 * -98 + 15087) === t && (t = !1), !t && !Wt(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = -2102 * -2 + -553 * 13 + 2985 * 1; e < i.length; e++) o[e] = Zi(o[e], i[e]);
  else if (Wt(i))
    for (var e in i) o[e] = Zi(o[e], i[e]);
  return o;
}
function zn(o, i) {
  var t = {};
  t.value = i, Object.defineProperty(o, "toString", t);
}
var xA = {};
xA[1] = `Cannot create styled-component for component: %s.

`, xA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, xA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, xA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, xA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, xA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, xA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', xA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, xA[9] = "Missing document `<head>`\n\n", xA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, xA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, xA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", xA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, xA[14] = `ThemeProvider: "theme" prop is required.

`, xA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", xA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, xA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, xA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var nc = q.NODE_ENV !== "production" ? xA : {};
function gc() {
  for (var o = [], i = 2 * -242 + 34 * -19 + -10 * -113; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[4618 * 1 + 9256 + -13874], e = [], A = -2960 + 1 * 6179 + -3218, n = o.length; A < n; A += 2521 * -3 + 4224 + 3340) e.push(o[A]);
  return e.forEach(function(g) {
    t = t.replace(/%[a-z]/, g);
  }), t;
}
function Ut(o) {
  for (var i = [], t = 1524 + 1523 * -1; t < arguments.length; t++) i[t - 1] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > 11 * -809 + 1095 + -3902 * -2 ? " Args: ".concat(i.join(", ")) : "")) : new Error(gc.apply(void (131 * 2 + 3119 + -3381), Gt([nc[o]], i, !1)).trim());
}
var ac = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(2440 + -1 * -5583 + -7511), this.length = 1 * -2785 + 67 * -99 + 9930, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = -6869 + -2265 * -1 + 2 * 2302, e = -2602 * 1 + 9059 * 1 + -587 * 11; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, n = A; i >= n; ) if ((n <<= -9796 + 97 * 101) < 47 * 20 + 8 * 587 + 1 * -5636) throw Ut(-8 * 417 + 5724 + 2372 * -1, "".concat(i));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(e), this.length = n;
      for (var g = A; g < n; g++) this.groupSizes[g] = -569 * -8 + 1 * 5441 + -9993;
    }
    for (var a = this.indexOfGroup(i + (-8067 + -671 * 2 + -5 * -1882)), x = (g = 0, t.length); g < x; g++) this.tag.insertRule(a, t[g]) && (this.groupSizes[i]++, a++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 440 + -107 * -65 + -493 * 15;
      for (var n = e; n < A; n++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -11507 + -37 * -311 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), n = A + e, g = A; g < n; g++) t += "".concat(this.tag.getRule(g)).concat(Zn);
    return t;
  }, o;
}(), xc = -1 * -1037 + 2 * -2903 + 795 * 6 << 1388 + 310 * -5 + 192, oo = /* @__PURE__ */ new Map(), ho = /* @__PURE__ */ new Map(), io = 466 + 19 * -47 + 428, T0 = function(o) {
  if (oo.has(o)) return oo.get(o);
  for (; ho.has(io); ) io++;
  var i = io++;
  if (q.NODE_ENV !== "production" && ((3698 + -537 * 9 + 1135 | i) < -8235 + -549 * -15 || i > xc)) throw Ut(-314 * -15 + 14 * -554 + 3062, "".concat(i));
  return oo.set(o, i), ho.set(i, o), i;
}, Ic = function(o, i) {
  io = i + (-6473 * -1 + -2 * -1465 + -9402), oo.set(o, i), ho.set(i, o);
}, rc = "style[".concat(gt, "][").concat(wx, '="').concat(gi, '"]'), Cc = new RegExp("^".concat(gt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), cc = function(o, i, t) {
  for (var e, A = t.split(","), n = 1 * -1173 + -6404 + 7577, g = A.length; n < g; n++) (e = A[n]) && o.registerName(i, e);
}, sc = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (34 * 73 + -4477 + 1995) !== t ? t : "").split(Zn), A = [], n = -7298 + 7298 * 1, g = e.length; n < g; n++) {
    var a = e[n].trim();
    if (a) {
      var x = a.match(Cc);
      if (x) {
        var I = 0 | parseInt(x[1], 10), c = x[769 * -6 + -6529 + 11145];
        7806 + -3 * 2602 !== I && (Ic(c, I), cc(o, c, x[2 * 3682 + -3270 + 1 * -4091]), o.getTag().insertRules(I, A)), A.length = -5 * -1647 + -1166 + 7069 * -1;
      } else A.push(a);
    }
  }
};
function Bc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Mx = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(a) {
    var x = Array.from(a.querySelectorAll("style[".concat(gt, "]")));
    return x[x.length - (-1430 + 3 * 477)];
  }(t), n = void (19 * -247 + -5515 + 32 * 319) !== A ? A.nextSibling : null;
  e.setAttribute(gt, mx), e.setAttribute(wx, gi);
  var g = Bc();
  return g && e.setAttribute("nonce", g), t.insertBefore(e, n), e;
}, Qc = function() {
  function o(i) {
    this.element = Mx(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 1 * -963 + 7981 + -7018, n = e.length; A < n; A++) {
        var g = e[A];
        if (g.ownerNode === t) return g;
      }
      throw Ut(17);
    }(this.element), this.length = -3453 * -1 + 9906 + -13359;
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
}(), Ec = function() {
  function o(i) {
    this.element = Mx(i), this.nodes = this.element.childNodes, this.length = -347 * 26 + 2940 + 6082;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -160 * 42 + 277 * -13 + 10321) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), dc = function() {
  function o(i) {
    this.rules = [], this.length = 9192 + 1 * -3557 + -5635 * 1;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, -245 * 15 + 1048 + 2627, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, 1), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), zg = Vn, lc = { isServer: !Vn, useCSSOMInjection: !PC }, Wx = function() {
  function o(i, t, e) {
    void (3680 + 697 * -6 + -251 * -2) === i && (i = Rt), void (-7715 * 1 + -3237 + 10952) === t && (t = {});
    var A = this;
    this.options = PA(PA({}, lc), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Vn && zg && (zg = !1, function(n) {
      for (var g = document.querySelectorAll(rc), a = -5 * 17 + -3108 + 31 * 103, x = g.length; a < x; a++) {
        var I = g[a];
        I && I.getAttribute(gt) !== mx && (sc(n, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), zn(this, function() {
      return function(n) {
        for (var g = n.getTag(), a = g.length, x = "", I = function(r) {
          var Q = function(s) {
            return ho.get(s);
          }(r);
          if (Q === void 0) return "continue";
          var C = n.names.get(Q), E = g.getGroup(r);
          if (void (1186 + 1 * -1186) === C || 5887 + 1866 * 3 + -11485 === E.length) return "continue";
          var d = "".concat(gt, ".g").concat(r, '[id="').concat(Q, '"]'), u = "";
          void (3503 + 1 * -8026 + -4523 * -1) !== C && C.forEach(function(s) {
            s.length > -1 * -9767 + 3956 + -1 * 13723 && (u += "".concat(s, ","));
          }), x += "".concat(E).concat(d, '{content:"').concat(u, '"}').concat(Zn);
        }, c = 1 * -4883 + -59 * -31 + -2 * -1527; c < a; c++) I(c);
        return x;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return T0(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return void (553 * 6 + 26 * 62 + 34 * -145) === t && (t = !0), new o(PA(PA({}, this.options), i), this.gs, t && this.names || void (-1 * -935 + -3 * -2267 + -7736));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 0) + (46 * 9 + -7990 * 1 + 7577);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new dc(A) : e ? new Qc(A) : new Ec(A);
    }(this.options), new ac(i)));
    var i;
  }, o.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, o.prototype.registerName = function(i, t) {
    if (T0(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, o.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(T0(i), e);
  }, o.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, o.prototype.clearRules = function(i) {
    this.getTag().clearGroup(T0(i)), this.clearNames(i);
  }, o.prototype.clearTag = function() {
    this.tag = void (-1 * -5397 + 152 * -36 + -5 * -15);
  }, o;
}(), uc = /&/g, fc = /^\s*\/\/.*$/gm;
function vx(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = vx(t.children, i)), t;
  });
}
function Lx(o) {
  var i, t, e, A = o === void 0 ? Rt : o, n = A.options, g = void (-1 * 7823 + 6725 + 1098) === n ? Rt : n, a = A.plugins, x = void (-4627 + -15 * 137 + 6682) === a ? ai : a, I = function(Q, C, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > -11792 + 737 * 16 ? ".".concat(i) : Q;
  }, c = x.slice();
  c.push(function(Q) {
    Q.type === ti && Q.value.includes("&") && (Q.props[-5512 + 1 * 5951 + 439 * -1] = Q.props[-5732 + -188 * 6 + 6860].replace(uc, t).replace(e, I));
  }), g.prefix && c.push(HC), c.push(UC);
  var r = function(Q, C, E, d) {
    void (-16 * 50 + -12 * 113 + 2156) === C && (C = ""), void (5085 + -1017 * 5) === E && (E = ""), d === void 0 && (d = "&"), i = d, t = C, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = Q.replace(fc, ""), s = LC(E || C ? "".concat(E, " ").concat(C, " { ").concat(u, " }") : u);
    g.namespace && (s = vx(s, g.namespace));
    var f = [];
    return fo(s, YC(c.concat(OC(function(p) {
      return f.push(p);
    })))), f;
  };
  return r.hash = x.length ? x.reduce(function(Q, C) {
    return C.name || Ut(-4705 + 1 * 3557 + 1163), je(Q, C.name);
  }, bx).toString() : "", r;
}
var hc = new Wx(), Vi = Lx(), Xn = nt.createContext({ shouldForwardProp: void (-4714 * 1 + -2218 * 1 + 6932), styleSheet: hc, stylis: Vi });
Xn.Consumer;
var pc = nt.createContext(void (-5815 * -1 + -574 + -5241));
function _i() {
  return Ge(Xn);
}
function yc(o) {
  var i = DA(o.stylisPlugins), t = i[3 * -577 + -6244 + 7975], e = i[-1982 + -1181 * -2 + 379 * -1], A = _i().styleSheet, n = NA(function() {
    var c = A, r = {};
    return r.useCSSOMInjection = !1, o.sheet ? c = o.sheet : o.target && (c = c.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (c = c.reconstructWithOptions(r)), c;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), g = NA(function() {
    var c = {};
    c.namespace = o.namespace, c.prefix = o.enableVendorPrefixes;
    var r = {};
    return r.options = c, r.plugins = t, Lx(r);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  _(function() {
    DC(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var a = NA(function() {
    var c = {};
    return c.shouldForwardProp = o.shouldForwardProp, c.styleSheet = n, c.stylis = g, c;
  }, [o.shouldForwardProp, n, g]), x = {};
  x.value = a;
  var I = {};
  return I.value = g, nt.createElement(Xn.Provider, x, nt.createElement(pc.Provider, I, o.children));
}
var Xg = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, n) {
      void (343 * -1 + -3544 + 299 * 13) === n && (n = Vi);
      var g = e.name + n.hash;
      A.hasNameForId(e.id, g) || A.insertRules(e.id, g, n(e.rules, g, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, zn(this, function() {
      throw Ut(1057 * -1 + 1261 * -1 + 2 * 1165, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return void (-5 * 1129 + 299 * 24 + -1 * 1531) === i && (i = Vi), this.name + i.hash;
  }, o;
}(), Dc = function(o) {
  return o >= "A" && o <= "Z";
};
function $g(o) {
  for (var i = "", t = -4836 + -8421 * -1 + 717 * -5; t < o.length; t++) {
    var e = o[t];
    if (-6 * 919 + -1 * -3007 + 2508 === t && e === "-" && o[3112 + -1 * 3112] === "-") return o;
    Dc(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Jx = function(o) {
  return o == null || o === !1 || o === "";
}, Ux = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var n = o[A];
    o.hasOwnProperty(A) && !Jx(n) && (Array.isArray(n) && n.isCss || Mt(n) ? e.push("".concat($g(A), ":"), n, ";") : Wt(n) ? e.push.apply(e, Gt(Gt(["".concat(A, " {")], Ux(n), !1), ["}"], !1)) : e.push("".concat($g(A), ": ").concat((i = A, (t = n) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 16201 + 16201 * -1 === t || i in KC || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function ot(o, i, t, e) {
  if (Jx(o)) return [];
  if (_n(o)) return [".".concat(o.styledComponentId)];
  if (Mt(o)) {
    if (!Mt(n = o) || n.prototype && n.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return q.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Xg || Wt(A) || A === null || console.error("".concat(Gx(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ot(A, i, t, e);
  }
  var n;
  return o instanceof Xg ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : Wt(o) ? Ux(o) : Array.isArray(o) ? Array.prototype.concat.apply(ai, o.map(function(g) {
    return ot(g, i, t, e);
  })) : [o.toString()];
}
function mc(o) {
  for (var i = 1799 + 257 * -7; i < o.length; i += -14043 + -3511 * -4) {
    var t = o[i];
    if (Mt(t) && !_n(t)) return !1;
  }
  return !0;
}
var wc = kx(gi), bc = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (e === void 0 || e.isStatic) && mc(i), this.componentId = t, this.baseHash = je(wc, t), this.baseStyle = e, Wx.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Ve(A, this.staticRulesId);
      else {
        var n = _g(ot(this.rules, i, t, e)), g = ji(je(this.baseHash, n) >>> -2030 + 10 * 203);
        if (!t.hasNameForId(this.componentId, g)) {
          var a = e(n, ".".concat(g), void 0, this.componentId);
          t.insertRules(this.componentId, g, a);
        }
        A = Ve(A, g), this.staticRulesId = g;
      }
    else {
      for (var x = je(this.baseHash, e.hash), I = "", c = 626 * 1 + 469 * -11 + 4533; c < this.rules.length; c++) {
        var r = this.rules[c];
        if (typeof r == "string") I += r, q.NODE_ENV !== "production" && (x = je(x, r));
        else if (r) {
          var Q = _g(ot(r, i, t, e));
          x = je(x, Q + c), I += Q;
        }
      }
      if (I) {
        var C = ji(x >>> 0);
        t.hasNameForId(this.componentId, C) || t.insertRules(this.componentId, C, e(I, ".".concat(C), void (-7427 + 1 * -7379 + 22 * 673), this.componentId)), A = Ve(A, C);
      }
    }
    return A;
  }, o;
}(), Yx = nt.createContext(void (4534 * 1 + 4 * -1172 + 154));
Yx.Consumer;
var yi = {}, Aa = /* @__PURE__ */ new Set();
function kc(o, i, t) {
  var e = _n(o), A = o, n = !pi(o), g = i.attrs, a = void (11 * 699 + -4588 + -443 * 7) === g ? ai : g, x = i.componentId, I = void (6444 + -6 * 1074) === x ? function(F, R) {
    var N = typeof F != "string" ? "sc" : Tg(F);
    yi[N] = (yi[N] || -25 * 383 + -11 * -463 + 4482) + (1 * 7515 + 3985 + -11499);
    var Z = "".concat(N, "-").concat(_C(gi + N + yi[N]));
    return R ? "".concat(R, "-").concat(Z) : Z;
  }(i.displayName, i.parentComponentId) : x, c = i.displayName, r = void (-2563 * 2 + -117 * -53 + -1075) === c ? function(F) {
    return pi(F) ? "styled.".concat(F) : "Styled(".concat(Gx(F), ")");
  }(o) : c, Q = i.displayName && i.componentId ? "".concat(Tg(i.displayName), "-").concat(i.componentId) : i.componentId || I, C = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, E = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var u = i.shouldForwardProp;
      E = function(F, R) {
        return d(F, R) && u(F, R);
      };
    } else E = d;
  }
  var s = new bc(t, Q, e ? A.componentStyle : void (2348 * 4 + 1448 + 542 * -20));
  function f(F, R) {
    return function(N, Z, mA) {
      var nA = N.attrs, VA = N.componentStyle, tA = N.defaultProps, Ht = N.foldedComponentIds, dg = N.styledComponentId, lr = N.target, ur = nt.useContext(Yx), fr = _i(), si = N.shouldForwardProp || fr.shouldForwardProp;
      q.NODE_ENV !== "production" && uo(dg);
      var lg = qC(Z, ur, tA) || Rt, ue = function(U0, Tt, Y0) {
        var ct = {};
        ct.className = void (14693 + 1 * -14693), ct.theme = Y0;
        for (var Ei, He = PA(PA({}, Tt), ct), di = 11 * -898 + 7652 + -6 * -371; di < U0.length; di += 6435 + 1726 * -1 + -4708) {
          var O0 = Mt(Ei = U0[di]) ? Ei(He) : Ei;
          for (var Se in O0) He[Se] = Se === "className" ? Ve(He[Se], O0[Se]) : Se === "style" ? PA(PA({}, He[Se]), O0[Se]) : O0[Se];
        }
        return Tt.className && (He.className = Ve(He.className, Tt.className)), He;
      }(nA, Z, lg), Kt = ue.as || lr, Pt = {};
      for (var _A in ue) void (3 * 247 + -211 * -41 + -9392) === ue[_A] || _A[-9358 + -9358 * -1] === "$" || _A === "as" || _A === "theme" && ue.theme === lg || (_A === "forwardedAs" ? Pt.as = ue.forwardedAs : si && !si(_A, Kt) || (Pt[_A] = ue[_A], si || q.NODE_ENV !== "development" || Jr(_A) || Aa.has(_A) || !qi.has(Kt) || (Aa.add(_A), console.warn('styled-components: it looks like an unknown prop "'.concat(_A, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Bi = function(U0, Tt) {
        var Y0 = _i(), ct = U0.generateAndInjectStyles(Tt, Y0.styleSheet, Y0.stylis);
        return q.NODE_ENV !== "production" && uo(ct), ct;
      }(VA, ue);
      q.NODE_ENV !== "production" && N.warnTooManyClasses && N.warnTooManyClasses(Bi);
      var Qi = Ve(Ht, dg);
      return Bi && (Qi += " " + Bi), ue.className && (Qi += " " + ue.className), Pt[pi(Kt) && !qi.has(Kt) ? "class" : "className"] = Qi, Pt.ref = mA, vA(Kt, Pt);
    }(p, F, R);
  }
  f.displayName = r;
  var p = nt.forwardRef(f), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, p.attrs = C, p.componentStyle = s, p.displayName = r, p.shouldForwardProp = E, p.foldedComponentIds = e ? Ve(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = Q, p.target = e ? A.target : o, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = e ? function(R) {
      for (var N = [], Z = -39 * -39 + 1847 + 259 * -13; Z < arguments.length; Z++) N[Z - 1] = arguments[Z];
      for (var mA = -1809 * -4 + -8700 + 1464 * 1, nA = N; mA < nA.length; mA++) Zi(R, nA[mA], !0);
      return R;
    }({}, A.defaultProps, F) : F;
  } }), q.NODE_ENV !== "production" && (TC(r, Q), p.warnTooManyClasses = /* @__PURE__ */ function(F, R) {
    var N = {}, Z = !1;
    return function(mA) {
      if (!Z && (N[mA] = !0, Object.keys(N).length >= -116 * -8 + 1466 + -2194)) {
        var nA = R ? ' with the id of "'.concat(R, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(F).concat(nA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Z = !0, N = {};
      }
    };
  }(r, Q)), zn(p, function() {
    return ".".concat(p.styledComponentId);
  }), n && Rx(p, o, k), p;
}
function ea(o, i) {
  for (var t = [o[1 * 7109 + 315 * -21 + -494]], e = -3314 * 1 + -2099 + -1 * -5413, A = i.length; e < A; e += 5185 + 1 * 3022 + -8206) t.push(i[e], o[e + (-5221 + -2611 * -2)]);
  return t;
}
var ta = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function Ox(o) {
  for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
  if (Mt(o) || Wt(o)) return ta(ot(ea(ai, Gt([o], i, !0))));
  var e = o;
  return i.length === 0 && 7494 + 194 * 37 + -14671 === e.length && typeof e[0] == "string" ? ot(e) : ta(ot(ea(e, i)));
}
function zi(o, i, t) {
  if (t === void 0 && (t = Rt), !i) throw Ut(12248 + 12247 * -1, i);
  var e = function(A) {
    for (var n = [], g = 44 * 88 + 9263 + -11 * 1194; g < arguments.length; g++) n[g - (-2827 + -2 * -1414)] = arguments[g];
    return o(i, t, Ox.apply(void (7565 + -10 * 147 + 53 * -115), Gt([A], n, !1)));
  };
  return e.attrs = function(A) {
    return zi(o, i, PA(PA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return zi(o, i, PA(PA({}, t), A));
  }, e;
}
var Hx = function(o) {
  return zi(kc, o);
}, Yt = Hx;
qi.forEach(function(o) {
  Yt[o] = Hx(o);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var q0 = "__sc-".concat(gt, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[q0] || (window[q0] = -2 * -3313 + 1 * -7951 + -25 * -53), -3022 + 212 * -18 + 6839 === window[q0] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[q0] += 4461 * -1 + 8780 + 2 * -2159);
const Gc = Yt.div`
  position: relative;
`, Sc = Yt.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class L extends Error {
  constructor(t, e) {
    super(t);
    S(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof L) return t;
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
    return new L(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof L) return t;
    const e = "An unexpected error has occurred";
    return new L(e);
  }
}
const no = {};
no.CONTINUE_DETECTION = "continue-detection", no.SWITCH_CAMERA = "switch-camera", no.TOGGLE_MIRROR = "toggle-mirror";
const yt = no, Xi = {};
Xi.FIRST_FRAME = "first-frame", Xi.FIRST_VALID_FRAME = "first-valid-frame";
const Di = Xi, Kx = {};
Kx.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const oa = Kx;
var Px = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(Px || {}), Be = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(Be || {}), Dt = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.CONTROL = "magnifeye-auto-capture:control", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(Dt || {}), Nc = ((o) => (o.CONTROL = "smile-auto-capture:control", o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(Nc || {}), Fc = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(Fc || {}), Rc = ((o) => (o.CONTROL = "eye-gaze-auto-capture:control", o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(Rc || {});
const Tx = {};
Tx.EYE_NOT_PRESENT = "eye_not_present";
const ia = Tx, RA = {};
RA.CANDIDATE_SELECTION = "candidate_selection", RA.FACE_TOO_CLOSE = "face_too_close", RA.FACE_TOO_FAR = "face_too_far", RA.FACE_CENTERING = "face_centering", RA.FACE_NOT_PRESENT = "face_not_present", RA.SHARPNESS_TOO_LOW = "sharpness_too_low", RA.BRIGHTNESS_TOO_LOW = "brightness_too_low", RA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", RA.DEVICE_PITCHED = "device_pitched", RA.LEFT_EYE_NOT_PRESENT = "left_" + ia.EYE_NOT_PRESENT, RA.RIGHT_EYE_NOT_PRESENT = "right_" + ia.EYE_NOT_PRESENT, RA.MOUTH_NOT_PRESENT = "mouth_not_present", RA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", RA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const CA = RA, OA = {};
OA.isPresent = CA.FACE_NOT_PRESENT, OA.isNotPitched = CA.DEVICE_PITCHED, OA.isNotSmall = CA.FACE_TOO_FAR, OA.isNotLarge = CA.FACE_TOO_CLOSE, OA.isNotOutOfBounds = CA.FACE_CENTERING, OA.isNotDim = CA.BRIGHTNESS_TOO_LOW, OA.isNotBright = CA.BRIGHTNESS_TOO_HIGH, OA.isSharp = CA.SHARPNESS_TOO_LOW, OA.isLeftEyePresent = CA.LEFT_EYE_NOT_PRESENT, OA.isRightEyePresent = CA.RIGHT_EYE_NOT_PRESENT, OA.isMouthPresent = CA.MOUTH_NOT_PRESENT, OA.isMouthScoreNotTooHigh = CA.MOUTH_SCORE_TOO_HIGH, OA.isMouthScoreNotTooLow = CA.MOUTH_SCORE_TOO_LOW;
const Mc = OA, $i = {};
$i.FRONT = "user", $i.REAR = "environment";
const $n = $i, An = {};
An.AUTO_CAPTURE = "AUTO_CAPTURE", An.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const en = An, zt = {};
zt.LOADING = "LOADING", zt.ERROR = "ERROR", zt.WAITING = "WAITING", zt.RUNNING = "RUNNING";
const ie = zt, qx = { ...ie };
qx.DONE = "DONE";
const tn = qx;
({ ...CA });
var KA = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(KA || {});
const me = tn;
({ ...CA });
({ ...CA });
const xi = It(void 0);
xi.displayName = "AppStateContext";
function rt() {
  const o = Ge(xi);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const Wc = xi.Provider, jx = rt;
class Zx extends ne {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new L("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === ie.ERROR ? null : this.props.children;
  }
}
S(Zx, "contextType", xi);
const vc = Yt.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Lc = Yt.div`
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
function Jc() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Uc = gx(
  ({ detectionDetails: o, isImageMirror: i }, t) => Jc() ? (console.log(o), /* @__PURE__ */ D(ae, { children: [
    /* @__PURE__ */ D(vc, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ D(Lc, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), po = It(void 0);
po.displayName = "AnalyticsContext";
function Vx() {
  const o = Ge(po);
  if (o === void 0)
    throw new Error(`${po.displayName} must be used within a AnalyticsProvider`);
  return o;
}
(function(o, i) {
  function t(x, I, c, r, Q) {
    return bA(c - -765, I);
  }
  function e(x, I, c, r, Q) {
    return bA(x - -381, Q);
  }
  function A(x, I, c, r, Q) {
    return bA(I - -518, x);
  }
  const n = o();
  function g(x, I, c, r, Q) {
    return bA(x - 178, c);
  }
  function a(x, I, c, r, Q) {
    return bA(I - -205, c);
  }
  for (; ; )
    try {
      if (parseInt(A("nvTV", -199, -195, -182, -188)) / 1 * (parseInt(A("XC1)", -192, -203, -203, -187)) / 2) + -parseInt(g(521, 536, "#AoU", 534, 506)) / 3 * (parseInt(A("fMxr", -172, -180, -165, -171)) / 4) + parseInt(t(-466, "Ho%N", -453, -467, -450)) / 5 * (parseInt(g(503, 507, "w*LF", 490, 513)) / 6) + -parseInt(e(-66, -80, -58, -76, "Ge1b")) / 7 * (parseInt(t(-456, "Ho%N", -444, -445, -449)) / 8) + parseInt(a(95, 106, "xQT0", 107, 111)) / 9 + parseInt(t(-430, "sl3O", -434, -440, -445)) / 10 + -parseInt(t(-428, "5Z24", -425, -443, -419)) / 11 * (parseInt(g(491, 496, "KQsm", 499, 493)) / 12) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Do, 458 * -1154 + 962282 + 174485);
function on(o, i, t, e, A) {
  return bA(t - 435, e);
}
function _x(o, i, t, e, A) {
  return bA(t - -788, o);
}
function bA(o, i) {
  const t = Do();
  return bA = function(e, A) {
    e = e - (-1356 * -2 + -6657 + 4254 * 1);
    let n = t[e];
    if (bA.WTzCVP === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      bA.MVoRXs = c, o = arguments, bA.WTzCVP = !0;
    }
    const a = t[-4164 + 1388 * 3], x = e + a, I = o[x];
    return I ? n = I : (bA.iCDdtB === void 0 && (bA.iCDdtB = !0), n = bA.MVoRXs(n, A), o[x] = n), n;
  }, bA(o, i);
}
const yo = It(void (-9679 + 5101 * -1 + 20 * 739));
function Do() {
  const o = ["kSkUDWhdHW", "WOvQW78OWONcGvq5rbVdQXO", "WRqDtdRdNgWKe8ov", "qSoAW5KzWPimW5O", "zCkgl1PDzmk5C8oKBNhcNa", "WR/cOh1eybxdV8oTySk1W4S8WPu", "W47cH8kQnK5lhmo8WQj4", "WPzasCoetuFdG8oSttFdL8o8", "BsSknSofgeajuSk7W40V", "BM3cTCk3", "WP7dHSoDywC", "tSo/ECo7vq", "EtL+W4RcH8k/DSopWRu", "W7BcLNqFxG", "WRZcOxGepMxcQ8oMAa", "WPqzA8kvjuaWomoIWOyRW64", "WOZdPmoRW5HX", "W5jopSkcza", "gwddRmkUWRK3hq", "WRpdGSkEoNZdN23cQhFdSW", "WO9PWRlcVmkr", "iJeCWQXbWR3cSCkfW4S", "WO49oGKN", "DSohW5xdH8kdhCkapqKIcCoBW5K", "qCkJWRDDW5jwWPmhWPDwW4hcVMG", "WOP5WO/cRCkq", "sSkzuw41", "W7mbrSoKW5y", "WOqxuCk+fq", "WPDprColtbFdV8o2BXBdTG", "CmobW5ldHSkagSogiIy/nCo3", "FM3cVW", "WOqufmoscq", "WOVdI8o6oSk7gLJdR1tcN8of", "W6VcOSoxW582W77dRSofWPT5", "cmoFW7OHWP4ZW58", "z8kaomo3Bc1O", "WQFdGsLBcSozzxVcMcSfD8k6"];
  return Do = function() {
    return o;
  }, Do();
}
function g0(o, i, t, e, A) {
  return bA(A - 107, t);
}
yo[g0(418, 444, "kASf", 423, 434) + _x("KQsm", -490, -471) + "e"] = g0(433, 411, "1s%l", 416, 430) + on(737, 757, 753, "$&A3") + g0(433, 407, "7(Kt", 410, 423);
function v0() {
  function o(g, a, x, I, c) {
    return on(g - 493, a - 341, c - -667, I);
  }
  const i = Ge(yo);
  function t(g, a, x, I, c) {
    return g0(g - 29, a - 282, I, I - 189, c - 28);
  }
  function e(g, a, x, I, c) {
    return on(g - 174, a - 340, g - -1016, a);
  }
  function A(g, a, x, I, c) {
    return g0(g - 182, a - 382, c, I - 60, x - 54);
  }
  if (i === void 0) throw new Error(yo[o(92, 84, 106, "#Wtv", 101) + o(100, 119, 85, "kASf", 100) + "e"] + (e(-247, ")eAU") + n(-576, -575, -560, -557, "s^zp") + t(468, 460, 476, "gE1B", 459) + A(489, 497, 506, 505, "n#Qx") + n(-577, -579, -561, -589, "s^zp") + n(-578, -594, -601, -580, "I!]w") + A(476, 476, 490, 471, "lXIc") + t(469, 481, 481, "7(Kt", 473)));
  function n(g, a, x, I, c) {
    return _x(c, a - 76, a - -126);
  }
  return i;
}
const s0 = (o) => o.length < 1 ? 3449 * -2 + -1 * -1493 + 5405 : o.reduce((t, e) => t + e, 4629 + 7993 * -1 + -841 * -4) / o.length, ke = (o) => Number.parseFloat(o.toFixed(10708 + 5 * -2141)), Yc = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(-2 * -3621 + 9015 + -16257, 0, i.canvas.width, i.canvas.height);
}, zx = -6972 + 2 * -710 + -1049 * -8 + 0.75, Oc = 42 * 211 + 3288 + -12148, Hc = -1 * -2282 + -1 * 5999 + -1 * -4317, Kc = 7710 * -1 + -40 * -223 + -1210, Pc = "dot-auto-capture-video", Ii = (o, i) => Math.min(o, i), Xx = ({ height: o, width: i }, t) => {
  const e = Ii(i, o) * t, A = (i - e) / (3142 * 1 + -10 * 122 + -1920), n = (o - e) / (628 * -2 + -501 * -13 + -1 * 5255), g = {};
  return g.shiftX = A, g.shiftY = n, g.width = e, g.height = e, g;
}, Tc = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = Xx(o, i), g = {};
  return g.shiftX = e / o.width, g.shiftY = A / o.height, g.width = n / o.width, g.height = t / o.height, g;
}, qc = ({ height: o, width: i }) => {
  const t = Ii(i, o), e = t / (2972 + -7901 * -1 + -10870) * (422 * 13 + -2522 + -2960);
  if (i > o) {
    const n = {};
    return n.width = e, n.height = t, n;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, jc = (o, i) => {
  const t = Ii(i.width, i.height);
  return ke(o * t);
}, Zc = ({ height: o, width: i }) => {
  const t = {};
  return t.height = o, t.width = i, Xx(t, zx);
}, Vc = (o) => Tc(o, zx), _c = (o, i) => jc(o, i) * Oc, zc = "@innovatrics/dot-common-auto-capture", Xc = "7.3.2", $c = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, As = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, es = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, ts = {
  name: zc,
  private: !0,
  version: Xc,
  scripts: $c,
  dependencies: As,
  devDependencies: es
}, os = 693 + 7652 * 1 + -8336 + 0.8100000000000005, go = {};
go.minDuration = 1e3, go.maxDuration = 2500, go.minFrames = 10;
const mi = go, nn = {};
nn.max = 100, nn.min = 10;
const na = nn, is = 19 * -313 + 6868 + -201 * 1, ns = -3 * 1707 + 1575 * 1 + 3746, gs = -8012 + 1237 * 1 + 6779, Xt = {};
Xt.width = 200, Xt.height = 200, Xt.top = 50, Xt.left = 50;
const as = Xt, mo = "AES-CBC", $x = "RSA-OAEP", xs = "SHA-256", Is = "image/jpeg", rs = 11425 + 7 * -1631, Cs = -4609 + 59 * -22 + 5947, AI = "/dot-assets", ga = "dot_embedded_bg.wasm", Ag = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
function aa() {
  return /Android/i.test(navigator.userAgent);
}
function B0() {
  return /Firefox/i.test(navigator.userAgent);
}
const cs = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, gn = (o) => new Promise((i) => {
  setTimeout(i, o);
}), eI = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? ke(t) : t)), tI = () => ts.version, oI = (o) => new URL(o).hostname.replace("www.", ""), ss = () => oI(window.location.href) === "localhost", j0 = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), Bs = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o, xa = (o, i) => Math.abs(o - i);
function Qs(o, i) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, o(...e);
    };
    t === void (-15 * -465 + 4015 + 14 * -785) && (t = setTimeout(A, i));
  };
}
function Es(o) {
  return o.at(-(-5158 * 1 + -1893 + 7052)) === "/" ? o.slice(1922 * -4 + 6654 + -517 * -2, -1) : o;
}
function iI(o) {
  return "" + Es(o ?? "") + AI;
}
function a0() {
  return !1;
}
const ds = () => "prod".toLowerCase() === "dev";
var Le;
class eg extends Array {
  constructor(t) {
    super();
    P(this, Le);
    H(this, Le, t);
  }
  get size() {
    return w(this, Le);
  }
  pushFixed(...t) {
    if (t.length > w(this, Le)) {
      const e = t.slice(-w(this, Le));
      this.push(...e);
      return;
    }
    this.length === w(this, Le) && this.splice(1 * 2539 + 152 * -52 + 37 * 145, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4201 * -2 + -76 * 77 + -2550);
  }
}
Le = new WeakMap();
const nI = (o, i, t = Is) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), gI = async (o) => nI(o, 90), ls = async (o) => nI(o, 53 * -131 + 2987 + -52 * -78, "image/png"), aI = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, -9 * 307 + 7804 * 1 + -5041 * 1, -1 * 4099 + 3264 + 835, t.width, t.height), t;
}, us = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(-29 * -131 + 343 * -10 + -369, 431 + 3476 * -2 + 1 * 6521, o.width, o.height);
  return t;
};
function Ia(o, i, t) {
  return t - i / (-959 + -1 * 4775 + 5736) < -492 * -15 + -9750 + 2370 ? 0 : t + i / (-2484 + 226 * 11) > o ? o - i : t - i / 2;
}
function fs(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / (-1 * 4411 + 9317 + -4806)), n = e * (i.top / 100);
  return { width: i.width, height: i.height, shiftX: Ia(t, i.width, A), shiftY: Ia(e, i.height, n) };
}
async function hs(o, i) {
  const t = fs(o, i), e = aI(o, t);
  return ls(e);
}
const xI = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), A.stroke());
}, wi = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: n, width: g } = i, a = {};
  a.x = A, a.y = n;
  const x = {};
  x.topLeft = a, x.width = g, x.height = e, x.color = t, xI(o, x, t);
}, x0 = (o, i, t, e = 8 * -167 + 23 * 163 + 19 * -127) => {
  const A = o.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(i.x + e, i.y + e, 49 * 139 + 3793 * 2 + -14390, 3760 + -1 * 7783 + 4030), A.beginPath());
}, ps = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = i;
  return !(o.x < e || o.x > e + n || o.y < A || o.y > A + t);
}, ys = (o, i) => Object.values(o).every((t) => ps(t, i));
function wo(o) {
  const { height: i, width: t } = qc(o), e = (o.width - t) / (3398 + 423 * 14 + 9318 * -1), A = (o.height - i) / (-9030 + -6338 * -1 + -3 * -898), n = {};
  return n.shiftX = e, n.shiftY = A, n.width = t, n.height = i, n;
}
function II(o, i, t) {
  const { height: e, width: A } = t, n = Ii(o.width, o.height), g = A - n * i * (8875 + -19 * 467), a = e - n * i * (-7968 + -3985 * -2), x = (o.width - g) / (1632 + 163 * -10), I = (o.height - a) / (-3508 + 15 * 234), c = {};
  return c.shiftX = x, c.shiftY = I, c.width = g, c.height = a, c;
}
function Bt(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
function fA(o, i) {
  const t = bo();
  return fA = function(e, A) {
    e = e - (7 * -909 + 4 * -779 + -46 * -214);
    let n = t[e];
    if (fA.uKHDsF === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      fA.UbcUSk = c, o = arguments, fA.uKHDsF = !0;
    }
    const a = t[2045 * 1 + 4 * 1499 + -8041], x = e + a, I = o[x];
    return I ? n = I : (fA.cqtjER === void 0 && (fA.cqtjER = !0), n = fA.UbcUSk(n, A), o[x] = n), n;
  }, fA(o, i);
}
(function(o, i) {
  function t(a, x, I, c, r) {
    return fA(I - 865, c);
  }
  const e = o();
  function A(a, x, I, c, r) {
    return fA(a - 698, I);
  }
  function n(a, x, I, c, r) {
    return fA(c - 891, I);
  }
  function g(a, x, I, c, r) {
    return fA(x - -446, I);
  }
  for (; ; )
    try {
      if (-parseInt(n(1276, 1267, "7%ZA", 1270, 1272)) / 1 * (parseInt(A(1074, 1086, "t&TE", 1081, 1063)) / 2) + -parseInt(t(1249, 1258, 1249, "L0@G", 1242)) / 3 * (-parseInt(n(1255, 1249, "fRT4", 1257, 1246)) / 4) + -parseInt(n(1255, 1275, "]nPZ", 1266, 1271)) / 5 + parseInt(n(1264, 1263, "*rXA", 1261, 1268)) / 6 + parseInt(A(1071, 1060, "xcG6", 1061, 1065)) / 7 + -parseInt(g(-85, -79, "L0@G", -80, -67)) / 8 + parseInt(g(-47, -57, "Wd%j", -52, -53)) / 9 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(bo, 220367 + 882770 * -1 + 1239891);
function bo() {
  const o = ["vIeNna", "W7y3nSkfACoMW6m7W63dS8o6rmkg", "WOyYW7yHnszFWQr/", "nSoba8k5BgddPCkmzdnS", "W7vLDa4C", "W4VdT2lcJSkhW5ryWPnV", "f8kdAmkIWOm", "W7DoWR/dNLDlWP7dOHxdKr4MW5m", "W5NcLJhdN8kU", "WP3cS8oSW41wWQ/dJxFdImkCCa", "WOy5W75WvNGIWP9UWOy7W6vv", "W7m4aSofcq", "WRJcJmkCWRPsdaSRW4tcJ8oN", "WO5oWQ0axx49W5K2idlcHJ0", "W7CaWQfdW4utdLZdUmo3FmkBxq", "omkSDmoloLNdHq", "W5FdTYeCc3TJWOvSACkUW6CU", "W4ZcVSozt8kLASk5WReeWQaCl8o0", "WPVdSCkiWRldSSocW7zqztP7cZG", "WPywWPdcUmkjewXWtSoOWQa", "qCotWODRFG", "xSkAW5zlqLtcLGCIfYS3Fq", "W6pcGSkOumoUW6xcJa", "W4mTWQiVnW", "W6fEWQ9zW6PcW7fAW6SFAe1Q"];
  return bo = function() {
    return o;
  }, bo();
}
function Ds({ assetsDirectoryPath: o, bramble: i }) {
  function t(I, c, r, Q, C) {
    return fA(r - 83, I);
  }
  const [e, A] = DA(), n = e !== void (-10462 + -2 * -5231);
  function g(I, c, r, Q, C) {
    return fA(c - 355, C);
  }
  function a(I, c, r, Q, C) {
    return fA(I - 782, Q);
  }
  _(() => {
    async function I() {
      function c(Q, C, E, d, u) {
        return fA(E - -373, C);
      }
      function r(Q, C, E, d, u) {
        return fA(C - 954, d);
      }
      await i[r(1339, 1336, 1346, "^Jze")](iI(o)), A(i[r(1332, 1334, 1344, "jZX%") + r(1330, 1342, 1337, "d2gI") + c(16, "[pZ$", 4) + "t"]());
    }
    I();
  }, [i, o, A]);
  const x = {};
  return x[a(1150, 1145, 1163, "&])H") + t("xp8p", 437, 448)] = e, x[g(753, 741, 739, 741, "7@yh") + "sh"] = n, x;
}
var rI = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(rI || {});
const an = {};
an.SIMD = "simd", an.NO_SIMD = "no-simd";
const ra = an, xn = {};
xn.Lower = "Lower", xn.Higher = "Higher";
const In = xn, ao = {};
ao.VISIBLE = "VISIBLE", ao.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", ao.HIDDEN = "HIDDEN";
const I0 = ao, rn = {};
rn.MOBILE = "MOBILE", rn.DESKTOP = "DESKTOP";
const Ca = rn;
function HA(o, i) {
  var t = ko();
  return HA = function(e, A) {
    e = e - (-4748 + 355 * -22 + -1 * -12706);
    var n = t[e];
    if (HA.ChnEBg === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (var p = 0, k = C.length; p < k; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var C = [], E = 0, d, u = "";
        r = g(r);
        var s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (var f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      HA.JkaOwy = a, o = arguments, HA.ChnEBg = !0;
    }
    var x = t[8293 + 8293 * -1], I = e + x, c = o[I];
    return c ? n = c : (HA.AmUunc === void 0 && (HA.AmUunc = !0), n = HA.JkaOwy(n, A), o[I] = n), n;
  }, HA(o, i);
}
(function(o, i) {
  var t = o();
  function e(x, I, c, r, Q) {
    return HA(r - 366, I);
  }
  function A(x, I, c, r, Q) {
    return HA(c - 238, Q);
  }
  function n(x, I, c, r, Q) {
    return HA(x - -428, c);
  }
  function g(x, I, c, r, Q) {
    return HA(I - -964, x);
  }
  for (; ; )
    try {
      var a = parseInt(e(538, "YvEn", 535, 533, 532)) / 1 * (parseInt(e(515, "NpNb", 525, 521, 525)) / 2) + parseInt(e(507, "FfFl", 517, 516, 521)) / 3 + -parseInt(n(-279, -269, "COxP", -280, -289)) / 4 + -parseInt(e(521, "C@5s", 521, 522, 516)) / 5 * (parseInt(A(411, 398, 404, 413, "RVSR")) / 6) + parseInt(A(404, 405, 402, 403, "&d!M")) / 7 + parseInt(g("Av]L", -799, -796, -798, -792)) / 8 + -parseInt(A(388, 390, 396, 399, "Qc^2")) / 9;
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ko, -291633 + 4868 * 97);
function ko() {
  var o = ["Frn7jSo2qv3dI8okxCka", "dmo3WPqgW4W", "pLfjsupcOYRcJSol", "cmk8WPhcIalcNIe", "EuRdUcbqW796qt0", "rmoXp8ozWPNdICotW5FcJZGVtvi", "W7NdRblcO8o1W77cOZWYfrG", "b8oPW6tdLSouE2VcI8oBhWJdOCoC", "nqCZW5iDW5ZdGW", "W5esWRKSBG", "oSkPymkaW40", "W4ThFmoDaCoIBwFcRmkVx8keEG", "WQxcQ3TGk1hdJCk1DCkEC8kqDW", "BSkmW4/dQmkKnLhdQIZcK24", "W5xdL2rhCHm2W4hcMvC", "dmoHW5ZdIeFdO0tdLYJdTCkTWRRdHW", "W71qW5/dPbWJbSkWWPpdSGi", "W63cJH7cSxWjfIDdW5hcJ0a", "W7VdUCodjCofWPxdMhasW6i", "jgpcMrpdLSoJbCkfWP7cJZlcJI0"];
  return ko = function() {
    return o;
  }, ko();
}
function ms({ crosshatch: o }) {
  function i(e, A, n, g, a) {
    return HA(A - -875, n);
  }
  function t(e, A, n, g, a) {
    return HA(n - -129, e);
  }
  return o != null && o[t("R2PP", 26, 33) + "id"] ? In[t("Qc^2", 41, 34) + "r"] : In[i(-716, -721, "r7Bb")];
}
function hA(o, i) {
  const t = Go();
  return hA = function(e, A) {
    e = e - (-3988 * 1 + -326 + 4541);
    let n = t[e];
    if (hA.PbpQgX === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      hA.IoFshy = c, o = arguments, hA.PbpQgX = !0;
    }
    const a = t[0], x = e + a, I = o[x];
    return I ? n = I : (hA.UFZAnL === void 0 && (hA.UFZAnL = !0), n = hA.IoFshy(n, A), o[x] = n), n;
  }, hA(o, i);
}
(function(o, i) {
  function t(x, I, c, r, Q) {
    return hA(r - -936, I);
  }
  function e(x, I, c, r, Q) {
    return hA(x - 587, I);
  }
  const A = o();
  function n(x, I, c, r, Q) {
    return hA(r - 792, I);
  }
  function g(x, I, c, r, Q) {
    return hA(c - -705, r);
  }
  function a(x, I, c, r, Q) {
    return hA(Q - 951, c);
  }
  for (; ; )
    try {
      if (parseInt(n(1041, "o%JF", 1036, 1036, 1035)) / 1 + -parseInt(g(-475, -485, -470, "Moeq", -486)) / 2 + -parseInt(n(1027, "SNwQ", 1052, 1043, 1030)) / 3 * (-parseInt(t(-683, "UX1@", -690, -682, -683)) / 4) + parseInt(a(1182, 1174, "g*Nu", 1206, 1191)) / 5 * (parseInt(t(-719, "$fw!", -695, -708, -703)) / 6) + parseInt(g(-474, -480, -472, "g*Nu", -483)) / 7 * (-parseInt(g(-452, -451, -445, "gcTU", -430)) / 8) + -parseInt(a(1195, 1194, "wGoA", 1206, 1199)) / 9 * (parseInt(t(-708, "J*Gy", -708, -706, -693)) / 10) + parseInt(e(837, "YRHg", 848, 840, 823)) / 11 * (-parseInt(t(-684, "cG!n", -669, -680, -667)) / 12) === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Go, 513651);
function Go() {
  const o = ["rcFcKmolW7CbW4a", "W4tcN8obWOO", "zCkop0ewW5afW4a", "W5jlACkxWQO", "W7r4BCo5W5tdHSojjCkQ", "W5hdQ8oYWP3dLNVdGmk1FrWwoL4", "BdhcLmo9nmo5s8kwW6JdJmkjW4m", "hqZdNCoPWOi", "W5emsSoVWP/cISkk", "W7LXamocW5tdJmoJjW", "W6DDW7tcRCkhW6NcKSkgpSoc", "W7HWASkDW7hdMCoKdCkiWQq", "WQ0dW6iqWPe", "W5JcJIfsma", "WO3cOSokzMS+WPq", "WOeMW5iQdGeTWOOrW6i3W40", "W7SlqXNcNXPxWQO9fmozWP8", "f8kKW7uhWPjSW5lcNCo5W5WZ", "WORdIxyqCsirWRJdNmotW6ZcTq4", "FCkjW6ldHJVdRmo2jXpdNSokWRW", "W5tcK8k8W77cVttcVa", "cI3dHG", "W7DdWR5qW5GYWPBdUw99WQr9", "W7j4BSkBWOxdR8o3hCkSWPHW", "W5m6i2JcKSo+WRmDWRz9WPlcRq", "WQ0FW6qoWOW", "nYmQp8km", "WPJdRGn2ia", "mmkXzSoYEa", "W7XdWRGfWP9ZWOldP3y", "WOJcV8k+W4/cJa", "W67cSmoN", "W5/dKHutWR1sW7i2WO8", "WO/dJNOtCs1MWRVdJ8osW73cHq", "W6zyW7xcQ8oXWRBcTCkBiCojW4rL"];
  return Go = function() {
    return o;
  }, Go();
}
function ws({ assetsDirectoryPath: o, children: i, bramble: t }) {
  const e = {};
  function A(C, E, d, u, s) {
    return hA(E - -917, s);
  }
  e[r(304, 292, 289, 287, "c%ru") + "le"] = t;
  function n(C, E, d, u, s) {
    return hA(E - -149, C);
  }
  e[g(1196, 1207, "7CSL") + r(313, 310, 292, 301, "*W8c") + g(1217, 1205, "g*Nu") + n("uHXi", 98)] = o;
  function g(C, E, d, u, s) {
    return hA(C - 959, d);
  }
  const { sunfish: a, crosshatch: x } = Ds(e), I = {};
  I[n("o%JF", 110) + n("SNwQ", 92)] = x;
  const c = NA(() => ({ redfin: ms(I), sunfish: a, crosshatch: x, bramble: t }), [a, x, t]);
  function r(C, E, d, u, s) {
    return hA(u - 48, s);
  }
  const Q = {};
  return Q[n("b%1W", 89)] = c, Q[r(294, 272, 294, 284, "g*Nu") + A(-675, -675, -686, -667, "L#h%")] = i, D(yo[A(-668, -668, -653, -665, "3]HQ") + n("*W8c", 83)], Q);
}
(function(o, i) {
  function t(x, I, c, r, Q) {
    return te(x - 320, Q);
  }
  function e(x, I, c, r, Q) {
    return te(r - 436, Q);
  }
  function A(x, I, c, r, Q) {
    return te(Q - -292, c);
  }
  var n = o();
  function g(x, I, c, r, Q) {
    return te(x - -34, Q);
  }
  for (; ; )
    try {
      var a = -parseInt(e(954, 933, 951, 943, "^Pue")) / 1 * (-parseInt(e(929, 929, 936, 939, "pYIn")) / 2) + parseInt(t(837, 836, 838, 849, "uS[l")) / 3 + -parseInt(g(485, 492, 489, 497, "TFiT")) / 4 * (-parseInt(A(211, 222, "(c$p", 223, 216)) / 5) + -parseInt(g(489, 482, 493, 496, "PGHf")) / 6 * (-parseInt(A(221, 202, "NVPc", 206, 209)) / 7) + parseInt(t(835, 832, 825, 832, "(c$p")) / 8 * (-parseInt(g(482, 488, 472, 474, "Yn7e")) / 9) + parseInt(A(215, 223, "qQ(R", 202, 213)) / 10 + parseInt(g(488, 486, 497, 485, "uS[l")) / 11 * (-parseInt(A(224, 222, "07]j", 223, 222)) / 12);
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(So, 1 * -1000817 + 11 * 26479 + 3122 * 467);
function te(o, i) {
  var t = So();
  return te = function(e, A) {
    e = e - (1 * 5289 + 617 * -10 + 1381);
    var n = t[e];
    if (te.dGmQPX === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (var p = 0, k = C.length; p < k; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var C = [], E = 0, d, u = "";
        r = g(r);
        var s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (var f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      te.whDXQx = a, o = arguments, te.dGmQPX = !0;
    }
    var x = t[8258 + -1 * 8258], I = e + x, c = o[I];
    return c ? n = c : (te.tjAhFz === void 0 && (te.tjAhFz = !0), n = te.whDXQx(n, A), o[I] = n), n;
  }, te(o, i);
}
function So() {
  var o = ["dhNdNCo4cmk8emkeWOVcOmo9WPdcVa", "W43dQSkBwSkyW7BcNCkTW4m2nrq", "n8o/W7NdLrSMW4JcLJVdNSkVfq", "WOPJWOy1rGyXEu0Cu30j", "nJiEF0Dpl8kSW6TEWONcTG", "WPWRdcXfWPWVjWhcUSkpW60", "brxdIb/cNSoVWOW", "qmkCACk0W6NcKrO", "WOuDeCodWPHXxCoJv0OuWPRcHa", "sZDAW6DVW4BcG8k+sqW", "p8o+W7/dMH1zW6/cOrldUmkQ", "qSole8kPW4lcTtJcTNy", "W7pdH8otkmknWPOnW7tdSa7dSXZcOq", "cqT/WQFcU38eCmkYW6/dN8k4W50", "i8oylSosW6JcT2FdH8kDkG", "WOCDhCokWPX3pmotsxqVWPm", "hCodj8kpWQrKW5e1WQa", "u8k0W60uFHxcLCohgCk5WRSRW70", "W7RcLCkqFmkxmgS", "W48mamo5hLhdJW", "uSkIkxxcICo+sqbi", "W7/dQmoVf8oMBeddQt4CrmkM", "wCk9W6WtEwVdLmo9mCkJWQ0", "W7iHW5rdyb5dAMK"];
  return So = function() {
    return o;
  }, So();
}
function bs({ analytics: o, crosshatch: i }) {
  return i !== void (8013 * 1 + -7607 * -1 + -15620) && !i.isAnalyticsDisabled ? o : void (1 * -6259 + -154 * -64 + 109 * -33);
}
function ks({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const n = {};
  n.analytics = o, n.crosshatch = e;
  const g = bs(n);
  return _(() => {
    g && g.init(i);
  }, [g, i]), _(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), g && g.walleye(t, A.getCustomerName()));
  }, [g, A, e, t]), _(() => {
    if (g)
      return window.addEventListener("beforeunload", g.endSession), () => {
        g.endSession(), window.removeEventListener("beforeunload", g.endSession);
      };
  }, [g]), g;
}
function Gs({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: n } = v0(), g = ks({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: n }), a = NA(
    () => ({
      analytics: g
    }),
    [g]
  );
  return /* @__PURE__ */ D(po.Provider, { value: a, children: t });
}
const No = It(void 0);
No.displayName = "CameraServiceContext";
function Ss() {
  const o = Ge(No);
  if (o === void 0)
    throw new Error(`${No.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function CI() {
  return navigator.mediaDevices.enumerateDevices();
}
async function bi() {
  return (await CI()).filter((i) => i.kind === "videoinput");
}
function xo(o) {
  o.getTracks().forEach((t) => t.stop());
}
function Cn(o) {
  return o.getVideoTracks()[185 + -191 * -3 + -379 * 2];
}
function Fo() {
  const o = ["WOfrCSk7W5BcQSkJ", "ESkBWRhcPMqHvYFcLq", "WPazvhmeW44mqCkUWR4voa", "j8okW6RcS0m", "rJRcTdRdImkTwG", "WR3cOudcG8koW6XFAbig", "lmk6lLXTxSofvxddJKpdKq", "WQKbW7ydW5i", "W4ZcJSkNeW", "hCkDivv5W6dcVguDleq", "W4uzWRiAbSkqWOFdTebEW6uu", "hhreymo8nmofu1u5", "W4iAWR/dNu8sWQhcJSoEEmkGW6u", "WQaxW7WVW6u", "W4S/mmk1zWJdPmkc", "W7CtWRDaWQ8", "uSoMW74aW4i", "WQ1fW60EWO/cUxmiovq", "W7ZdUmk+WODmWPWJis/dHmkh", "y8oPWQeOW4lcQ8oOWPiqf3edWP0", "smk0W5hdGCkmiSogW4rQWQldOSoDaW", "oen7wXKqd8oFhSo9", "WRRcQ0pcJmoUWR1ZuaGGqau", "nCoVrfCZWOpdGG9Ldmo9iq", "A3r9WQegW6qJBSo1nCoIkGW", "W7VcLSo2oCkC", "kmk8wWyxl8oBFq", "BGdcSqae", "e8k3WQ9eWPmHWQxcNCoOWR9ud8ox", "W6NcNmk0srlcTvHuWOW"];
  return Fo = function() {
    return o;
  }, Fo();
}
(function(o, i) {
  function t(a, x, I, c, r) {
    return kA(I - -889, r);
  }
  function e(a, x, I, c, r) {
    return kA(r - 872, a);
  }
  function A(a, x, I, c, r) {
    return kA(r - -992, c);
  }
  const n = o();
  function g(a, x, I, c, r) {
    return kA(c - -727, x);
  }
  for (; ; )
    try {
      if (parseInt(g(-491, "Y)7F", -481, -476, -471)) / 1 + parseInt(g(-478, "3acH", -474, -478, -481)) / 2 * (-parseInt(g(-474, "eoKN", -472, -460, -455)) / 3) + -parseInt(t(-632, -640, -626, -614, "cQJj")) / 4 * (-parseInt(t(-608, -604, -615, -629, "EHj(")) / 5) + parseInt(t(-647, -647, -633, -647, "4Hhv")) / 6 * (parseInt(A(-716, -738, -715, ")lK(", -730)) / 7) + parseInt(t(-643, -632, -630, -639, ")Jnj")) / 8 * (-parseInt(g(-461, "EBfx", -477, -472, -487)) / 9) + parseInt(e(")MSV", 1147, 1138, 1136, 1136)) / 10 + -parseInt(e("zyqH", 1134, 1146, 1141, 1141)) / 11 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fo, 245683 + -1 * 240194 + 242371 * 1);
function Ns(o) {
  function i(A, n, g, a, x) {
    return kA(g - 611, a);
  }
  const t = new Uint8Array(o);
  function e(A, n, g, a, x) {
    return kA(a - -222, n);
  }
  return window[e(23, "Azld", 18, 31)](t[i(865, 862, 872, "p@X3") + "e"](function(A, n) {
    function g(x, I, c, r, Q) {
      return i(x - 189, I - 341, I - -1061, Q);
    }
    function a(x, I, c, r, Q) {
      return i(x - 211, I - 1, r - -321, I);
    }
    return A + String[g(-200, -192, -196, -185, "fu*w") + a(561, "Pic[", 554, 562) + "de"](n);
  }, ""));
}
function kA(o, i) {
  const t = Fo();
  return kA = function(e, A) {
    e = e - (-4 * -805 + -2498 * 4 + 7019);
    let n = t[e];
    if (kA.alNCta === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      kA.hzIgtQ = c, o = arguments, kA.alNCta = !0;
    }
    const a = t[-3489 + 56 * 131 + -3847], x = e + a, I = o[x];
    return I ? n = I : (kA.TXcVnH === void 0 && (kA.TXcVnH = !0), n = kA.hzIgtQ(n, A), o[x] = n), n;
  }, kA(o, i);
}
function cn(o) {
  const i = new ArrayBuffer(o[t(-100, -97, -75, -86, "u#Mj") + "h"]);
  function t(n, g, a, x, I) {
    return kA(x - -334, I);
  }
  const e = new Uint8Array(i);
  for (let n = -2537 + -4639 * 2 + 11815, g = o[A(")lK(", 991, 990, 996) + "h"]; n < g; n++)
    e[n] = o[t(-77, -68, -78, -64, "gnVw") + t(-73, -84, -81, -82, "fu*w")](n);
  function A(n, g, a, x, I) {
    return kA(x - 736, n);
  }
  return i;
}
(function(o, i) {
  const t = o();
  function e(a, x, I, c, r) {
    return pA(x - 726, r);
  }
  function A(a, x, I, c, r) {
    return pA(x - 257, a);
  }
  function n(a, x, I, c, r) {
    return pA(r - 716, a);
  }
  function g(a, x, I, c, r) {
    return pA(r - -409, x);
  }
  for (; ; )
    try {
      if (parseInt(A("G5)G", 750, 759, 762, 835)) / 1 + parseInt(e(1339, 1218, 1258, 1039, "cSLc")) / 2 * (-parseInt(A("Z1zQ", 517, 392, 478, 534)) / 3) + -parseInt(e(1034, 1138, 1131, 1052, "0)l5")) / 4 * (parseInt(e(1205, 1153, 1254, 1197, "cQgo")) / 5) + -parseInt(n("fY$t", 1007, 865, 758, 944)) / 6 * (-parseInt(e(1073, 1132, 1094, 967, "cQgo")) / 7) + parseInt(e(1190, 1080, 992, 922, "RNUN")) / 8 * (parseInt(e(1276, 1141, 1172, 1087, "V*c6")) / 9) + parseInt(e(924, 923, 743, 920, "3rJV")) / 10 * (parseInt(g(141, "yX!]", 72, -116, 36)) / 11) + parseInt(A("PUgT", 759, 834, 698, 938)) / 12 * (parseInt(e(1126, 1208, 1115, 1205, "Xf)O")) / 13) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ro, 125131 * 6 + -904292 + 805878);
function m(o, i, t, e, A) {
  return pA(i - -27, A);
}
const GA = {};
GA[b(987, "K8FT", 1038, 898) + b(907, "QIkk", 840, 763) + b(870, "m#fY", 843, 786) + b(1037, ")WSk", 1079, 914) + m(341, 396, 474, 545, "QIkk")] = y(1109, 1252, 976, "GrpC") + v(-548, -387, -456, "2%EM") + m(475, 490, 608, 500, "B@(5") + b(963, ")oX3", 851, 874) + m(530, 363, 429, 259, "PUgT") + m(187, 347, 282, 485, "V*c6") + G(84, 138, 113, 115, "Xf)O") + b(1058, "CErs", 1092, 932), GA[G(245, 393, 285, 295, "yX!]") + G(553, 281, 638, 455, "2%EM") + G(313, 299, 450, 382, "XdOn") + G(352, 116, 87, 250, "]F[i") + m(426, 242, 114, 407, "d*go") + m(168, 278, 208, 110, "PUgT")] = G(266, 427, 479, 363, "XdOn") + b(900, "p(gi", 812, 743) + v(-277, -396, -506, "CgtR") + v(-644, -471, -607, "m#fY") + m(355, 253, 252, 90, ")oX3") + G(210, 435, 248, 305, "QIkk") + m(321, 390, 529, 562, "GrpC") + v(-361, -255, -136, "XvBb"), GA[v(-416, -287, -332, "M%s!") + y(993, 1096, 823, "QIkk") + b(861, "pblB", 723, 717) + G(311, 210, 361, 200, "Z1zQ") + b(1022, "yX!]", 927, 875)] = G(235, 219, 152, 228, "1$j)"), GA[G(372, 197, 226, 301, "5*R@") + G(371, 315, 279, 227, "^cCE") + v(-494, -583, -626, "cQgo") + y(871, 994, 762, "@%j!") + v(-416, -331, -336, "Xf)O") + G(495, 259, 586, 426, "lM14")] = y(1036, 974, 986, "CErs") + m(626, 497, 385, 619, ")Iq*") + y(930, 786, 781, "CErs") + v(-276, -414, -451, "o2qR") + y(1075, 1038, 986, "d3L2") + y(918, 789, 801, "pblB") + b(791, "CgtR", 970, 844) + b(888, "M%s!", 884, 722), GA[y(890, 813, 970, "lM14") + y(1090, 1024, 1149, "XvBb") + m(35, 172, 291, 305, "2%EM") + "L"] = G(139, 390, 276, 266, "CErs") + y(1146, 1250, 1120, "pblB") + G(331, 332, 171, 151, "cSLc") + G(354, 405, 317, 241, "YUtA") + m(465, 436, 362, 621, "Hkhg") + y(1091, 953, 965, "Hkhg"), GA[b(717, ")Iq*", 917, 822) + v(-301, -405, -564, "XdOn") + v(-149, -322, -496, "RNUN") + b(824, "]F[i", 775, 946) + y(1218, 1398, 1144, "z*!)")] = b(948, "a@kd", 973, 984) + G(52, 233, 362, 193, "m3Pf") + y(1010, 862, 907, "3dG5") + y(1034, 958, 913, "^hIa") + G(376, 315, 231, 359, "Xf)O") + y(1096, 1065, 1089, "[lcc") + m(177, 318, 481, 204, "QIkk") + G(455, 488, 346, 392, "Xf)O"), GA[v(-327, -379, -552, "dNm7") + G(389, 493, 290, 416, "RNUN") + v(-585, -550, -605, "CgtR") + m(564, 407, 258, 385, "d*go") + m(388, 435, 432, 450, "YUtA") + "Y"] = m(612, 528, 414, 406, "CgtR") + G(323, 282, 350, 439, "K8FT") + b(513, "m3Pf", 584, 695) + v(-149, -326, -403, "d*go") + v(-87, -244, -388, ")WSk") + y(855, 944, 748, "5*R@") + G(248, 267, 173, 164, "d*go") + y(857, 688, 808, "PUgT");
function v(o, i, t, e, A) {
  return pA(i - -792, e);
}
GA[b(765, "a@kd", 820, 845) + m(284, 440, 273, 486, "3rJV") + "NV"] = y(1197, 1259, 1044, "G5)G"), GA[m(106, 291, 132, 277, "QIkk") + y(1014, 1003, 907, "K8FT") + v(-373, -252, -334, "3rJV") + b(683, "B@(5", 687, 698)] = m(196, 313, 399, 269, "YOm[") + m(392, 365, 357, 292, "M%s!") + v(-352, -384, -376, "B@(5") + y(1144, 1275, 1321, "pblB") + b(1007, "V*c6", 748, 925) + m(93, 247, 177, 341, "m#fY") + m(679, 498, 374, 523, "*KDr") + m(448, 302, 478, 193, "Xf)O") + m(247, 338, 359, 387, "M%s!") + y(1094, 1145, 1066, "a@kd") + G(191, 262, 239, 116, "fY$t") + v(-652, -588, -617, "YUtA") + G(371, 340, 424, 308, "G5)G") + y(887, 1066, 856, "Hkhg") + b(789, "[lcc", 732, 712) + b(498, ")Iq*", 668, 674) + m(472, 459, 638, 400, "YOm[") + b(837, "cSLc", 748, 801) + b(692, "m3Pf", 590, 765) + m(169, 200, 186, 298, "fY$t") + y(970, 1110, 850, ")WSk") + y(1217, 1367, 1356, "a@kd") + G(273, 441, 342, 338, "3rJV") + m(170, 263, 337, 234, "d*go") + b(676, "@%j!", 805, 787) + G(257, 375, 386, 413, "Hkhg") + b(720, "o2qR", 657, 660) + b(776, "RNUN", 513, 643) + G(376, 350, 186, 195, "3dG5") + v(-543, -509, -410, "3dG5") + m(363, 325, 186, 341, "lM14") + v(-368, -374, -334, "^hIa") + b(813, "Hkhg", 556, 677) + v(-745, -596, -475, ")Iq*") + y(1079, 1138, 1108, "lM14") + m(521, 372, 513, 527, "Xf)O") + G(448, 581, 411, 447, "d*go") + v(-132, -284, -284, "K8FT") + b(799, "]F[i", 1015, 916) + G(17, -60, 205, 120, "yX!]") + y(892, 1042, 726, "YOm[") + m(561, 395, 447, 399, "pblB") + b(750, "QIkk", 485, 631) + y(1103, 1202, 1065, "o2qR") + v(-330, -484, -642, ")Iq*") + y(1133, 1005, 1082, "m3Pf") + G(305, 315, 164, 171, "^cCE") + v(-198, -362, -463, "CErs") + G(321, 134, 148, 260, "V*c6") + m(391, 284, 182, 111, ")oX3") + b(823, "1$j)", 563, 652) + v(-283, -298, -206, "cSLc") + m(301, 415, 509, 548, "^cCE") + y(1046, 879, 941, "CErs") + m(218, 326, 381, 160, "pblB") + b(859, "*KDr", 862, 929) + G(537, 235, 329, 374, "PUgT") + b(1e3, "^hIa", 1023, 969) + y(928, 980, 880, "7^xI") + G(202, 7, 80, 156, "pblB") + m(301, 350, 532, 172, ")Iq*") + y(1176, 1192, 1162, "3dG5") + v(-276, -407, -361, "QIkk") + y(1049, 1071, 946, "cQgo") + G(350, 306, 412, 403, "Hkhg") + y(1156, 1113, 1116, "]F[i") + G(72, 336, 379, 217, "K8FT") + b(858, ")Iq*", 881, 904) + b(640, "cQgo", 943, 799) + v(-457, -423, -554, "@%j!") + G(469, 335, 310, 424, "7^xI") + m(421, 507, 641, 324, "B@(5") + v(-404, -360, -233, "yX!]") + m(183, 220, 155, 130, "M%s!") + y(942, 924, 976, "QIkk") + v(-175, -272, -413, "XvBb") + y(997, 930, 924, "YOm[") + G(-34, 186, 170, 134, "cSLc") + y(1015, 874, 834, "7^xI") + G(386, 282, 466, 345, "1$j)") + y(959, 959, 1098, "pblB") + b(821, "RNUN", 519, 662) + m(336, 441, 570, 409, "7^xI") + m(282, 426, 500, 383, "GrpC") + y(1026, 1109, 847, "z*!)") + G(113, 36, 274, 158, "dNm7") + y(914, 1040, 826, "Xf)O") + y(1107, 991, 1090, "CgtR") + m(458, 287, 339, 363, "yX!]") + b(888, "XvBb", 800, 794) + b(1059, "CgtR", 945, 934) + v(-332, -288, -211, "z*!)") + y(1202, 1106, 1029, "pblB") + v(-312, -289, -234, "Z1zQ") + b(662, "YOm[", 966, 803) + y(1138, 1039, 1021, ")oX3") + v(-496, -594, -626, "@%j!") + y(1003, 1123, 1131, "3rJV") + G(299, 70, 229, 233, "cQgo") + b(608, "3rJV", 568, 700) + y(952, 952, 921, ")WSk") + b(624, ")oX3", 921, 755) + b(745, "a@kd", 817, 816) + b(652, "Z1zQ", 595, 756) + b(516, "XdOn", 764, 648) + y(974, 799, 1136, "CgtR") + b(666, "7^xI", 681, 697) + G(351, 149, 406, 277, "K8FT") + v(-323, -472, -534, "3dG5") + m(235, 269, 313, 329, "d3L2") + y(1065, 1194, 1183, "dNm7") + y(1155, 1131, 1139, "d3L2") + G(320, 126, 339, 179, "a@kd") + y(866, 801, 962, "1$j)") + G(441, 332, 140, 282, ")Iq*") + b(817, "K8FT", 657, 637) + v(-278, -363, -289, "0)l5") + G(321, 119, 115, 216, "dNm7") + m(324, 304, 435, 164, "3dG5") + G(156, 255, 68, 162, "^hIa") + y(1028, 1193, 1169, "XdOn") + y(996, 903, 1079, "2%EM") + G(365, 230, 265, 243, "YUtA") + m(171, 188, 310, 231, ")WSk") + m(334, 218, 251, 342, "RNUN") + m(673, 509, 573, 606, "B@(5") + m(151, 180, 108, 60, "3dG5") + b(594, "]F[i", 909, 732) + b(555, "o2qR", 833, 686) + b(680, "d3L2", 915, 821) + G(130, 126, 351, 194, "M%s!") + m(398, 308, 381, 474, ")WSk") + y(983, 1006, 917, "M%s!") + y(1129, 1058, 1034, "G5)G") + m(405, 484, 559, 606, "d*go") + m(462, 469, 496, 483, "0)l5") + G(120, 106, -27, 125, "V*c6") + G(237, 183, 327, 142, "]F[i") + y(1212, 1105, 1101, "7^xI") + m(564, 522, 581, 349, "lM14") + b(553, "fY$t", 513, 632) + v(-412, -346, -356, "d3L2") + G(-7, -4, 230, 144, "lM14") + G(158, 281, 158, 303, "cSLc") + m(303, 457, 423, 342, "K8FT") + y(1186, 1279, 1162, "K8FT") + y(1142, 1267, 1020, "PUgT") + b(591, "K8FT", 640, 622) + y(1059, 894, 1018, "p(gi") + y(1209, 1336, 1111, "0)l5") + y(1076, 1167, 899, "d*go") + y(1025, 1086, 1091, "o2qR") + b(917, "1$j)", 824, 971) + m(372, 198, 214, 174, "o2qR") + m(506, 501, 457, 603, "3dG5") + y(869, 930, 704, "lM14") + G(402, 394, 293, 370, "Z1zQ") + v(-301, -285, -218, "d*go") + y(891, 941, 871, "cQgo") + b(714, "yX!]", 1020, 835) + v(-295, -406, -316, "G5)G") + b(801, "3dG5", 608, 710) + b(703, "p(gi", 909, 751) + G(149, -45, 170, 99, "yX!]") + v(-470, -539, -699, "GrpC") + G(207, 237, 316, 352, "^hIa") + y(965, 873, 869, "XvBb") + G(115, 344, 399, 289, "]F[i") + v(-194, -251, -123, "M%s!") + G(531, 448, 231, 384, "QIkk") + m(300, 373, 299, 305, "3dG5") + v(-273, -355, -254, "3dG5") + m(307, 179, 270, 110, ")WSk") + m(351, 506, 341, 393, ")oX3") + m(423, 285, 194, 283, "PUgT") + G(286, 255, 178, 159, "7^xI") + y(1013, 1028, 954, "7^xI") + y(1083, 927, 1022, "Hkhg") + b(839, "m3Pf", 737, 894) + b(603, "XvBb", 643, 663) + y(982, 878, 883, "d*go") + b(766, "XvBb", 723, 795) + v(-708, -541, -596, "^hIa") + y(1017, 841, 1018, "V*c6") + m(127, 190, 226, 163, "M%s!") + m(193, 275, 373, 208, "@%j!") + G(159, 83, 373, 245, "cSLc") + v(-393, -253, -152, "CgtR") + b(858, "fY$t", 1016, 890) + b(771, "fY$t", 974, 866) + m(395, 219, 131, 314, "d*go") + G(283, 572, 280, 417, "d3L2") + b(808, "dNm7", 837, 685) + G(242, 552, 515, 371, "m3Pf") + m(80, 234, 281, 86, "p(gi") + m(430, 371, 510, 496, "M%s!") + y(1119, 1052, 986, "Xf)O") + m(179, 289, 360, 264, "YUtA") + G(171, -89, 130, 95, "*KDr") + b(1024, "[lcc", 1007, 965), GA[m(259, 406, 290, 426, "YUtA") + v(-491, -543, -384, "1$j)")] = "/", GA[y(889, 794, 869, "YOm[")] = m(518, 502, 552, 422, "*KDr") + b(653, ")WSk", 622, 673);
function G(o, i, t, e, A) {
  return pA(e - -106, A);
}
GA[G(474, 365, 314, 429, "CgtR")] = !1, GA[y(927, 875, 1092, "]F[i")] = !0, GA[y(907, 735, 723, "CgtR")] = !1, GA[m(522, 537, 454, 644, "o2qR") + m(384, 267, 209, 94, "yX!]") + b(794, "^cCE", 822, 963) + b(884, ")WSk", 956, 931)] = y(1115, 1078, 1224, "^cCE");
var ca = GA;
function Ro() {
  const o = ["WRioWRWVWOa", "ECkGW7v/WO8", "eMRcSc93", "WRJdPMhcM8of", "dCouACkkFW", "WO/dMSkvWOGN", "D8kPW4vRha", "W6PDnSkbBG", "uCoEC8k+cG", "h1NcMmoNfW", "W6r2WR8sWQO", "W7GxW7BcVt8", "WPBcGCoxW6Ca", "W6H5W60", "W6hcL8org8oW", "WR/dUSkeWQ8l", "zmk4WPXQbG", "C8oGeSkGjG", "WOy+DJRcGq", "lJWIzZG", "bhmgW7/cPa", "nmo+W4NdOCk4", "WOHai8krwG", "W57cQJVcKmk8W4Gqvc0ila", "hmoNWOZcJ8o6", "WQaKiapcKG", "WQ51hCkGAq", "WRRcKuyfyq", "WPZdKCotWOHa", "DJxcMLW", "W5ueW5JdPfW", "W7dcO8keg8oj", "WR7cImop", "WRhcNSoDz8oj", "F8oljCogsa", "W4rVW4G3zq", "WOlcL8kRW5m3", "tmkSeKrG", "juJcLcHX", "ftKkeG", "W54rW7RdKx8", "W6KVFhJcTG", "W6pcPCovW6qq", "fSkEW5hdICo/", "WOddOIK0bG", "lgJdPCkzyq", "xsZcI0ddNW", "F8kZW7/cQmoV", "WPBcQmo3W5Gt", "W4SNWRpdNXm", "nCoxDCkPgq", "yHCdFCkK", "WP7dU8kTWOXw", "rmk7WOOzWRm", "WQBdUf8Vta", "WRhdSCkE", "j8k4tmojWOikW6e", "W7mkW796WRu", "qSoFWRRcMCop", "fCo1t8oNW4K", "gCkYWO4lWQW", "ir50nNa", "CSoAtmkvW4G", "xmkOW5tcGmkU", "B8oWWONcMSoc", "imowBKHbW7D6z8oG", "rCocxSowWO0", "q8ohWQlcGSou", "W5JcMxHqWQe", "WPHfj8kqla", "W79fvSkvFW", "WONdMCkjWOCf", "W4SrW755WP0", "W5xdVb7cK0i", "kf/cG8oDdG", "WRWqjZFcNG", "WPFcU2uZDG", "W5mfjCkPWRS", "WQ1zemkyoW", "W4C0W5lcI28", "D8keWRbAWQi", "i8ogpSoqWRC", "gIRcH0JcOa", "jLpcQ8o6ka", "w8kLvSoxWQi", "eNFcQGTj", "WPJdJSkWWQKW", "k8oEAZWqWRbXzSocW7SLEq", "uSkXW4ZcISoy", "dmoKe2m5", "eCoDc8ksWR8", "n1BcHH5e", "nITyqau", "iHflib8", "WQRdIxVcSxG", "gSoZmCoOWPG", "rmkPASoTWQS4tmktW44", "yGhdIdVcHG", "qmk5WPWoWRK", "WQxdMtJdRmoB", "DmoDW5bZca", "W7C2W5pcHbG", "W6rfW78b", "FZFcI0dcTa", "W5WNpSkHWOa", "W41KW5mZzq", "rX8dW48", "WPhcP38XEW", "WQLoWQZdSxy", "e2D5k0S", "WQxcJSowW6OP", "erKLEGC", "eCo1lSk4ka", "haSTzde", "nSoLuSk8jW", "a1FcHqTg", "pmovWQVcR8oa", "W4OGW44", "xtVcUKpcGW", "dSkmW7JcOmoY", "WQNcNSol", "qmkpBCoHWPW", "lN7cUmohnW", "B8o5W4VcPSk5", "eNfn", "W7r3W6ZdHg4", "Emk4WPbvaW", "amoGzZ1/", "W5qYWOaZWOzfWOu", "WPvyW5DaWQm", "WQVcHL0qlq", "WRpcTNOzmW", "gMXyeCoV", "W4BcH3ygEa", "cNDlg8oT", "jguzohO", "Cmk6W7FcJCkk", "lmoitSkrha", "vSkJkmkXDq", "WRmooX/cSa", "amoSWPZcIG", "WOdcJK0uAG", "jvP4y8ow", "WRSSWRXaWQG", "W6JdNCklW4BdTq", "WPzyDwBcMW", "WRNcS1igwa", "W53cUCoXCW", "WOTeW7FcJ2G", "vmk7cfDN", "lSkiWQSRWOC", "W6iYcWVcRG", "WPujW7S", "j8kmkmoPWQm", "D8kzCmofrCoYW43cSSoIbMe", "B8kyWOHzWPa", "ESkCj31x", "WPG8WOXYnCoSW5WRtSkjhIG", "cmoAi8kGiq", "WR0iftxcVG", "W7NcMmkmW5FcQq", "s8kFW6xcMCky", "W4RdQqRcTg0", "iSokj8kabq", "wwesW4pcJW", "f2tcG8ozeG", "WPtcJ04YbW", "WRNdNCoFW4BdSW", "i1VcHqer", "WOuQjL/cKa", "jmkaDSooWRK", "DXldL1Lk", "WOJcVgGtdq", "WPH+k8kYea", "WRG7WPO4WQy", "W7ZdMIBcKG", "w8oYWO/cR8oU", "CmkmsmkyWQf4c8ouwmkF", "kSoghSk6nG", "WOeqW63dK2u", "WRHknSkDiq", "iCoKWOBcQSol", "W4ddVI3cTNG", "a2hcTCo9dW", "WPufWPHTWR8", "gmovWPL4mHmfWPdcNW", "D8kCWR0UWPu", "W4RcPCoRW6S/", "WOyKmGBcKG", "vYjEaCkZ", "nNbipCog", "WQRdLSkSW6WW", "W4OiW6nLWOm", "W6LTW7JdKxy", "WQ4HWQJdJ2mgqahcHq", "lmkJDCoIfG", "jMBdLv57", "AmkbfbzL", "eqaadW", "WPyPftZdVq", "WQ8AW5TtWQm", "W6OLyhVcVG", "W7KtW67cNdS", "p1pcUSoHAG", "WOm+W6hdL1W", "WR0PWQ44WQe", "zmkBWQGPWOy", "W4q/iSofWR4", "W71FW5Covq", "tSoXWOFcGmoc", "W41EW58svq", "W4altKS", "z8kuWQOUWPu", "eSk0W55CW70", "W7RcUSk0W4NcOq", "W5CQW4HmW4q", "xSk0cLGr", "W6CBW6zNWRa", "uCkPiCkFhHJdImoJxa", "W5CSW5FdJI4", "AW/cVfdcHW", "WQlcOKLlpW", "tKfDhYxdPmowWO9cW5m", "WRvlCv3dSa", "e8oXWOBcGmo+", "W6tcJmkdW4y", "WQFdUMWovq", "WOJdH8kMWOiI", "WOtcMhKTva", "W5egW63dHN8", "WOhdK1RdRCoY", "WRJdNSoyW5tcQSoDWQ3cUZu", "jCoaimk0W5zTW7pcTCo4xmozW44", "c2BcOIr7", "WRddM3NdVSog", "i19VEmox", "tCkDsCkWWQe", "rCkatSosWOm", "rHLOjwm", "k8k4W7qkWQ8", "WRu7W71vW6W", "x2tdHbVcGq", "W5JcRtJcNSk8", "p8oBdCkrka", "aCkwnSkOfW", "v8omWQNcJCoD", "t2jdfX4", "u8oRWP7dLmkl", "W4imi8k+WPO", "W615WRXgW7K", "W4TOW4VdVei", "WRddTSk0W6q1", "W4i+W5P3rG", "z8oJWRSSWPa", "kcykrmk9", "vNddGGZcIW", "ACkVWRddPmoq", "dNfxuW", "WQPhwmobla", "WOKbW41eW4G", "De/cLtT9", "WQy/WOCMWQe", "W5iQnSkcWQa", "o8oCWOxcQSo4", "WPJdVmo4WO0e", "gComkmo6WQS", "CNFcIv9D", "tSk0fcbt", "WQqejIVcHG", "W4ZdOr3cUNm", "w3fEW43cPq", "vmosWQ/cKmov", "WQqbW4C0WQS", "n8kTWPJcSSkY", "WQD9rSoaW4LJW6ZdO1xcRSklEW", "W6VcTe50W4C", "WRFcSCoUgmoL", "W69oWQVdLwG", "dc5mjSoQ", "gCoSW5fBW7G", "bN1cA8kDW48LW63cTW", "c1vjgCoJ", "mIengCkp", "W5VcQJNcN8kXW6SXydGHdW", "W53dVa3cPuu", "jmoOB8oSW7G", "FCkfW4xcO8o1", "rmkQW43cKCoq", "aeipW7xcHa", "kSoBCSkwkW", "W6pcHMGTlq", "CCkkWQiUWPm", "zXFcNg7dNG", "W4JdVmkRW55u", "fCo1kSoPWQy", "WQD7sCobW4bJW6RdRwNcK8kVqG", "sSkNW6jzyG", "yXOylmkG", "WQOyW59bW5i", "sGZcPNxcNW", "W4JdGWFcQ04", "W6CcW7H6WRu", "nmoDsmkpdq", "bCoGeCk8ka", "d8kbW5a", "WRWLCtxcJG", "WRBdGSkehSoNWPnBWPxcOe8", "fSoqoSo9W4S", "EmkAmw8", "hCoQWO7cLCo2", "W7WbBwVcLG", "CmkUA8kFWQO", "BCk7p0TT", "WQ7cNN/dHXJcHmk0EIBcJMu", "xH4KW5NcTW", "h8odh8oTWR8", "lXWsefu", "m3HYmCoQ", "DSoqWP7cRa", "W68MW5BcVw4", "WPhcL8oEW60i", "sCk7D8kGWRW", "jmk8nSoNWQO", "W5bcW7hcG2K", "W4pdUWdcRa", "W4mQW4Dt", "bSkDWPVcQmow", "uCkOiCoKF3BdMSo8tNlcHWW", "WPLeeaddGq", "yCkpzqbB", "W7utW7r0WQ8", "qSkcW5Xtja", "BmkvegrA", "xCk0eMfP", "uSo0CSkZkG", "wmk+dLjM", "WPdcSfjYzG", "yGtdRsddOq", "pJ4+zsK", "iSohpCksWQm", "ASoWWP7cPCo/", "WQzadCks", "mYmQfCoU", "W6ldNCkJW5NcKW", "WOvjWPjmWOG", "WRJcO8kuW7tcQq", "W4lcQ8khW63cRG", "WOZdNCkZWPGT", "WOzknCoekW", "WQy/WOCMWQm", "dmoGfgr9WR/cVZ3cKmkO", "W6e7W4pdMKm", "WR7dRSkQWQSN", "wmocWPxcSCoH", "W79NW5bXua", "WOuqmCkzcW", "qhtdLWtcIW", "WQNcSv8pjW", "tCkCWP4+W7G", "W6VdVZCsoq", "WQGOWQ/cLcLSsaFcMqhcTSkw", "vhjvqSoTW4JdKuJdMCo2p8k1", "W5noW6ddQfe", "avpcJSoPcq", "yYWHsSkH", "imo8WOxcI8ob", "cCoLewDV", "rSkWW4BcM8kW", "zN0/W7VcRa", "ymokWQFcQ8ob", "W7WyuSkDmfvfWOhdUW"];
  return Ro = function() {
    return o;
  }, Ro();
}
function y(o, i, t, e, A) {
  return pA(o - 655, e);
}
function pA(o, i) {
  const t = Ro();
  return pA = function(e, A) {
    e = e - 196;
    let n = t[e];
    if (pA.uMHHQE === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      pA.xbWoGf = c, o = arguments, pA.uMHHQE = !0;
    }
    const a = t[7985 + 1 * -2153 + -5832], x = e + a, I = o[x];
    return I ? n = I : (pA.YXCtJa === void 0 && (pA.YXCtJa = !0), n = pA.xbWoGf(n, A), o[x] = n), n;
  }, pA(o, i);
}
async function Fs() {
  const o = {};
  o[g("m#fY", 77, 108)] = mo;
  function i(c, r, Q, C, E) {
    return v(c - 23, r - 1316, Q - 32, E);
  }
  o[I("CgtR", 1206, 1320, 1482) + "h"] = 256;
  function t(c, r, Q, C, E) {
    return G(c - 305, r - 38, Q - 187, E - 910, r);
  }
  const e = await window[g("7^xI", -104, -195) + "o"][t(969, "cSLc", 1115, 1216, 1129) + "e"][t(1211, "z*!)", 1102, 942, 1086) + x(-341, -536, -333, "GrpC", -383) + "y"](o, !0, [i(1e3, 1042, 983, 1212, "K8FT") + "pt", I("XvBb", 1110, 1064, 908) + "pt"]), A = Uint8Array[I("yX!]", 1234, 1076, 1157)](Array(8080 + -4 * -169 + -8740)[t(1146, "YUtA", 1205, 1108, 1261)](4192 * -2 + 6995 + -3 * -463)), n = window[i(764, 885, 770, 1052, ")oX3") + "o"][t(1324, "1$j)", 1448, 1242, 1318) + g("dNm7", 137, 119) + x(-744, -475, -728, "QIkk", -596)](A);
  function g(c, r, Q, C, E) {
    return G(c - 261, r - 120, Q - 374, r - -206, c);
  }
  const a = {};
  function x(c, r, Q, C, E) {
    return b(c - 167, C, Q - 298, E - -1245);
  }
  a[x(-687, -513, -420, "p(gi", -542)] = e;
  function I(c, r, Q, C, E) {
    return m(c - 275, Q - 796, Q - 436, C - 55, c);
  }
  return a.iv = n, a;
}
function b(o, i, t, e, A) {
  return pA(e - 419, i);
}
async function Rs(o) {
  const { iv: i, key: t } = await Fs();
  function e(r, Q, C, E, d) {
    return v(r - 172, r - 598, C - 85, Q);
  }
  const A = {};
  A[e(279, "PUgT", 330)] = mo;
  function n(r, Q, C, E, d) {
    return b(r - 242, C, C - 81, Q - -1317);
  }
  A.iv = i;
  const g = await window[e(14, "7^xI", 13) + "o"][e(225, "^hIa", 389) + "e"][e(278, "2%EM", 352) + "pt"](A, t, o);
  function a(r, Q, C, E, d) {
    return b(r - 485, r, C - 210, d - -763);
  }
  const x = await window[c(69, 75, 226, "3rJV") + "o"][c(328, 353, 397, "[lcc") + "e"][a("PUgT", -313, -305, -27, -134) + e(136, "G5)G", 283)](a("cSLc", 13, 163, 66, 172), t), I = {};
  I[a("YOm[", 365, 303, 169, 194) + "ge"] = g;
  function c(r, Q, C, E, d) {
    return m(r - 170, Q - -186, C - 455, E - 129, E);
  }
  return I[n(-333, -340, "K8FT")] = x, I.iv = i, I;
}
async function Ms(o) {
  const i = ca[t(398, "YUtA", 416) + t(405, "Z1zQ", 249) + "EY"];
  function t(f, p, k, F, R) {
    return v(f - 46, k - 648, k - 191, p);
  }
  const e = ca[C(595, 284, "o2qR", 413) + d(315, 160, 241, "Z1zQ") + "V"];
  if (!o || !i || !e) return void (3 * 1135 + -2685 + -720);
  const A = new TextEncoder();
  function n(f, p, k, F, R) {
    return y(F - -593, p - 46, k - 335, k);
  }
  function g(f, p, k, F, R) {
    return G(f - 410, p - 125, k - 69, k - -89, F);
  }
  const a = A[d(-106, -101, -171, "^hIa") + "e"](o), x = window[n(630, 595, "3rJV", 502)](i), I = window[C(46, 268, "*oX6", 87)](e), c = cn(x), r = cn(I), Q = {};
  Q[d(196, 22, -107, "^cCE")] = mo;
  function C(f, p, k, F, R) {
    return y(F - -806, p - 404, k - 150, k);
  }
  Q[g(429, 183, 348, ")oX3") + "h"] = 128;
  const E = await window[C(176, -10, "3dG5", 120) + "o"][d(-82, -29, -165, "m3Pf") + "e"][g(134, 326, 304, "[lcc") + d(297, 129, 124, ")Iq*")](n(454, 401, "m#fY", 318), c, Q, !1, [d(-174, -82, -50, "7^xI") + "pt"]);
  function d(f, p, k, F, R) {
    return G(f - 150, p - 277, k - 462, p - -215, F);
  }
  const u = {};
  u[d(-95, 36, 139, "m3Pf")] = mo, u.iv = r;
  const s = await window[g(349, 385, 236, "lM14") + "o"][C(127, -75, "M%s!", 72) + "e"][t(487, "QIkk", 412) + "pt"](u, E, a);
  return Ns(s);
}
(function(o, i) {
  const t = o();
  function e(x, I, c, r, Q) {
    return sA(I - -600, x);
  }
  function A(x, I, c, r, Q) {
    return sA(r - 580, Q);
  }
  function n(x, I, c, r, Q) {
    return sA(c - -338, x);
  }
  function g(x, I, c, r, Q) {
    return sA(r - 326, x);
  }
  function a(x, I, c, r, Q) {
    return sA(x - -258, Q);
  }
  for (; ; )
    try {
      if (parseInt(n(")Q]6", -169, -136, -122, -117)) / 1 + parseInt(n("#K3F", -101, -108, -98, -128)) / 2 + -parseInt(a(-11, -50, -51, 7, "RmCq")) / 3 * (-parseInt(e("eM9z", -368, -411, -378, -336)) / 4) + parseInt(A(790, 793, 770, 781, "@lJT")) / 5 + -parseInt(A(810, 890, 802, 847, "TvhQ")) / 6 + parseInt(g("t[uf", 526, 518, 525, 485)) / 7 + -parseInt(n("t[uf", -86, -127, -86, -136)) / 8 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Wo, 95547 + -107 * -7156 + -327804);
const Ws = -7417 + -1823 * 1 + -16 * -765, vs = 8034 + -15 * -82 + -2264, cI = -3093 * -1 + 1 * -653 + -2437, sI = 1 * -743 + 939 * 5 + -3952 + 0.5, BI = {};
BI[Ee(801, 845, 884, 884, "t[uf")] = 1280;
const QI = {};
QI[dA(633, "f9aC", 614, 649, 614)] = 720;
const EI = {};
EI[TA(1179, 1184, "@lJT", 1215)] = 60;
const Io = {};
Io[Ee(810, 832, 856, 857, "a7T%")] = BI, Io[SA("8zen", -133) + "t"] = QI, Io[IA("@oXl", 549) + IA("TvhQ", 572)] = EI;
const dI = {};
dI[dA(597, "t[uf", 560, 607, 585)] = 1920;
const lI = {};
lI[TA(1273, 1280, "l7sA", 1264)] = 1080;
const ro = {};
ro[TA(1227, 1236, "sptS", 1246)] = dI, ro[IA("O$BQ", 613) + "t"] = lI, ro[TA(1247, 1206, "@lJT", 1250) + Ee(873, 904, 878, 934, "jG3L")] = 30;
const uI = {};
uI[SA(")iMK", -147)] = 1;
function TA(o, i, t, e, A) {
  return sA(e - 991, t);
}
const fI = {};
fI[SA("NLe0", -136)] = 1;
const hI = {};
hI[IA("&Yq0", 530)] = 1;
const Co = {};
Co[dA(650, "93[l", 609, 624, 618)] = uI, Co[dA(672, "0RI!", 684, 660, 640) + "t"] = fI, Co[dA(574, "a7T%", 649, 649, 620) + SA("e6@N", -157)] = hI;
const pI = {};
pI[dA(604, "V8Au", 607, 561, 592)] = 1;
const yI = {};
yI[dA(586, "@lJT", 594, 592, 602)] = 1;
const DI = {};
DI[SA("3pwI", -161)] = 1;
const co = {};
co[IA("TvhQ", 532)] = pI, co[TA(1215, 1166, "(d$f", 1208) + "t"] = yI, co[SA("^Rqs", -154) + SA("us^O", -105)] = DI;
const $t = {};
$t[Ee(881, 864, 904, 847, "#K3F")] = Io, $t[IA("orqK", 608) + IA("H7dg", 548)] = ro, $t[IA("])a#", 550)] = Co, $t[Ee(939, 909, 897, 927, "&Yq0") + Ee(919, 891, 867, 899, "a7T%")] = co;
const Mo = $t;
function SA(o, i, t, e, A) {
  return sA(i - -345, o);
}
const lt = {};
lt[IA("#K3F", 597) + dA(631, "(iGe", 588, 628, 629) + IA("JXo[", 553)] = Ws, lt[Ee(882, 898, 876, 923, "nDOE") + SA("G9]@", -76) + Ee(821, 856, 812, 862, "93[l") + TA(1246, 1270, "l7sA", 1249)] = Mo[dA(658, "f9aC", 655, 666, 653)], lt[dA(654, "ffOq", 642, 676, 644) + Ee(863, 889, 915, 896, "#K3F") + IA("&Yq0", 581) + dA(589, "O!Og", 572, 636, 593)] = Mo[dA(525, "f9aC", 600, 532, 569) + dA(683, "sptS", 679, 601, 641)], lt[SA("5xYl", -150) + IA("G9]@", 599)] = cI, lt[dA(604, ")iMK", 554, 559, 561) + TA(1222, 1176, "&Yq0", 1207) + IA("9WQ%", 609) + TA(1184, 1272, "NLe0", 1229) + IA("RmCq", 591)] = sI;
const ut = {};
ut[SA("NoLn", -112) + IA("eM9z", 573) + SA("ffOq", -103)] = vs, ut[IA("zspv", 564) + SA("jG3L", -101) + SA("us^O", -108) + Ee(780, 824, 805, 853, "V8Au")] = Mo[SA("nDOE", -124)], ut[TA(1225, 1223, "8zen", 1187) + dA(605, "v$B*", 558, 561, 572) + TA(1222, 1284, "MNeS", 1261) + SA("NLe0", -125)] = Mo[dA(634, "eM9z", 624, 609, 608) + IA("ErYh", 542)], ut[IA("ffOq", 528) + TA(1172, 1235, "v$B*", 1213)] = cI, ut[dA(621, "@oXl", 609, 571, 604) + IA("#K3F", 588) + dA(670, "ErYh", 646, 621, 627) + TA(1263, 1303, "cv^D", 1263) + SA("D21S", -135)] = sI;
function Ee(o, i, t, e, A) {
  return sA(i - 638, A);
}
const sn = {};
function dA(o, i, t, e, A) {
  return sA(A - 379, i);
}
sn[TA(1189, 1227, "V8Au", 1222)] = lt, sn[TA(1223, 1176, "G9]@", 1183)] = ut;
function sA(o, i) {
  const t = Wo();
  return sA = function(e, A) {
    e = e - (3 * 641 + -7265 + -2 * -2762);
    let n = t[e];
    if (sA.IsPoCc === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      sA.NdOhYq = c, o = arguments, sA.IsPoCc = !0;
    }
    const a = t[-4975 + -1 * -243 + 4732], x = e + a, I = o[x];
    return I ? n = I : (sA.dMcedC === void 0 && (sA.dMcedC = !0), n = sA.NdOhYq(n, A), o[x] = n), n;
  }, sA(o, i);
}
function IA(o, i, t, e, A) {
  return sA(i - 345, o);
}
const Ls = sn;
function Wo() {
  const o = ["W6VcRte", "dsddUmkOjq", "W4emWP9C", "cSkeWRqswW", "bSkyWRaqqW", "W7dcTwDMW5W", "W7LNWP7dUf0", "W6FdOea", "uSoqW6nfaSo0W4RcMSoHw8oqshddTq", "wCksfrVdIW", "cgJdLIre", "W68womoV", "W7xcVdNdGJiBsSkIkYK", "WR9TrSkYmG", "W4VdIYVdJ2C", "WRKiWRHbqG", "e8o8ebHK", "W7vXWOVdQa", "mqNcQ0y", "bCkSW7ldHW", "kLbJw3K", "jKXNwwe", "gsFdT8kbnq", "WQddPh7cHa", "hSoomCkA", "W60wW6qcWQW", "W60dW4ysWO0", "W7FcTtRdIuvch8kjjZ/dQx5K", "b23dGde", "WQ9uWPDfWP9VW7RcUdLK", "W4hdJgJdUCk/", "rSojW5ddPmolyc4dz8kdDSk0WQ0", "W6xcImoHWOBcOa", "WQn/rSkPpa", "W5zGoqy4", "W7P5WRNdUKO", "WR0vWQ5uqW", "W7D1pWi", "abKCqmoa", "y8ktWORdHCkm", "WRtdPhNcMrm", "FI3dKSofda", "WOpdHhxdMx/dVN5mxLpcTejTua", "WOZcKCo4", "W4VdH8k+eNPJW7nbWOqM", "WQ/dO8kqW7Dw", "fty9W5VcINKiW4lcRNa", "jmkwy8oFDW", "WQFdPMBcSXm", "WQVdPhxcPbK", "cGqk", "W6i0ECkF", "x8kYW4JcRWu", "CGqXaYZdKCk6lCkPW5pdPxr9", "WQXvWPHhW64FWQdcStD+WPhcKMu", "bWtdGq", "juzNv3a", "mHFcRvZdKG", "v08fmCkP", "sCkOW5G", "FxrOW6NdMa", "W7ddIbXiWOi", "zmkgWO/dHSka", "xJxdPCop", "FSkyFCopWQRdK8k9ahKZW7z7W6G", "W5JdUaG5WQ0", "W784vmkega", "W4rZjGjy", "WR5Tvmk+dG", "W7ZcKKRdLWW", "abtdL3Ly", "W6BcKCoZWPe", "WRScWRjobW", "CmksWO3dQ8kp", "WOOLW5CqW4S", "WQH0u8k4kq", "d3JdGa", "o8ogiCklW7i", "W6dcLtpcIG", "zCoxf8kDpmkwqmk6bSorgSkJ", "W7pcKCoMWOdcKG", "WQZdNdP4W54", "W74TEmkC", "c8k6W7FdSdK", "eqizwCon", "bmkmoCo6tW", "v8kwebddGq", "WQ3dJ8ks", "WQWpWR1PbG", "umoqW6ndaSkBWQRdQCokDmou", "WRviFSkStmouvMZcT2hcJa", "DWiXaItdN8k8dCkeW7pdPvfe", "WOiKWRNdOCkQmwpcHJ01z00"];
  return Wo = function() {
    return o;
  }, Wo();
}
(function(o, i) {
  const t = o();
  function e(x, I, c, r, Q) {
    return BA(Q - -174, r);
  }
  function A(x, I, c, r, Q) {
    return BA(c - 176, r);
  }
  function n(x, I, c, r, Q) {
    return BA(I - -292, x);
  }
  function g(x, I, c, r, Q) {
    return BA(I - 701, r);
  }
  function a(x, I, c, r, Q) {
    return BA(x - -964, Q);
  }
  for (; ; )
    try {
      if (-parseInt(e(211, 90, 187, "inV2", 89)) / 1 + -parseInt(A(595, 380, 458, ")]*d", 542)) / 2 * (parseInt(A(412, 266, 353, "h7T@", 248)) / 3) + -parseInt(e(223, 131, -38, "53ng", 87)) / 4 + -parseInt(g(939, 927, 1041, ")]*d", 915)) / 5 + parseInt(g(1119, 1060, 1002, "sGx5", 1153)) / 6 + parseInt(n("RJ#I", -14, -5, 65, 108)) / 7 + parseInt(a(-813, -746, -675, -900, "2Kw*")) / 8 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(vo, -614 * 1319 + 428749 + 907080);
function $(o, i, t, e, A) {
  return BA(t - 127, i);
}
function aA(o, i, t, e, A) {
  return BA(t - 267, A);
}
function BA(o, i) {
  const t = vo();
  return BA = function(e, A) {
    e = e - (-12040 + -329 * -37);
    let n = t[e];
    if (BA.sEqoqd === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      BA.aVNHru = c, o = arguments, BA.sEqoqd = !0;
    }
    const a = t[-277 * 8 + 365 * 1 + -1851 * -1], x = e + a, I = o[x];
    return I ? n = I : (BA.pRGnld === void 0 && (BA.pRGnld = !0), n = BA.aVNHru(n, A), o[x] = n), n;
  }, BA(o, i);
}
function zA(o, i, t, e, A) {
  return BA(A - -219, e);
}
function JA(o, i, t, e, A) {
  return BA(A - 704, t);
}
function UA(o, i, t, e, A) {
  return BA(e - -163, i);
}
function vo() {
  const o = ["W79Xj30Dz8kmW5pcTCoKW53dGq", "WRvLWOZdPgO", "WQfVkmkGW4dcPGaiCCo3WOe5", "WOBcI8kXWRCl", "rHq8WPi", "cmo9W4uYW5y", "nIrjuw0", "W5HRW4K5hG", "zelcJmoyeG", "W4TWW40Lha", "W6S1W6TorW", "c8k9W4uBBa", "WRWDuCk/W64", "bSogW4LICW", "W67cVc7dO8k6", "yCktW4xdIsy", "D8kcmmk+qq", "lSkgW7NcGmot", "WQe9WPFdVuK", "dhjua8oE", "W5KvW7T2vW", "W5yID8kPW5S", "BI8+", "yCkIi8kora", "sf3cLSoVaW", "WRBdMMZcOgS", "t8kCcNWE", "psfAu3a", "hL5CeSoB", "zSkeW5BdGte", "vmkEbLSe", "WR0XCYzc", "W7quWPG", "W4OKuCkDeq", "WPfmWRRdSM0", "WQWXycbE", "vhddUa", "kCoGpc9M", "WQ3cLCogrmo3", "mSoUoW", "swVdPwtdQq", "DJWMbMW", "f8kkW5T+Da", "l0/cICobW6i", "WRKRWP7dGcC", "W5yKsSkBdq", "emoGW5i", "WO3cImonvSo3", "pCo7W48KW40", "s8kkg1au", "gmkYW50", "W6SgWRldNCos", "rWuLWRpcRW", "WQSZsmkLW7m", "fezXEZO", "WRSIEYfy", "W4JcKaNdLmk3", "WPOwE8kzW5e", "gSoEW4zSDq", "W7VcPSk+CSkT", "hKVcI8obW64", "W5OKvCkvbG", "vL/cNq", "xCkYW4yAlq", "W6SLW69gua", "ymksW7BdKJC", "FmkZwSo5W7O", "AqpdImkJsW", "guDNW4xdV3fRdCotj1/cIa", "W41dWRb6W6dcMwPMW5tcPCk+W50", "qxmAW7/dNa", "W5PAWQi", "y8kQzmkjEW", "W6BcT8kJwmk8", "BWBdJCk/", "ysePhhy", "W6dcHCknCmkN", "r8kyWP4Pnx7dJa/dJIFcGCou", "zmkuW4ddJYK", "W47cQmk0bmow", "WOVdMSo5", "zSk3r8oq", "a8oAW4X6Da", "l8kSW7/cNCoz", "b07cSgVcMG", "cWhdSCkSnq", "WRzFW5VcPSk1W4/dVvVdLmo2WPSMma", "uCosD8o5da", "EtPhrIq", "de9zbCoh", "p1JcNmoeW7G", "W70UtCkpeq", "W7dcGCkQyIi", "wrmhWRtcSG", "WQWkDG", "ASkuW5NdHsy", "rNuqW57dMq", "W5qYC8oHWOu", "WRW8FG", "hCo1W4WYW4S", "W7FcUCkKrCk8", "AH7dIq", "w1xcTIa7", "WROvv8k/W4G", "jmkiW5BcQ8oM", "W7CYWO7cGr0", "WROCWONdKG", "W7FcImkVC0S", "WO8hW6yQWQy", "pcXCqgu", "WQaWzMCO", "W7RcT8kNuW", "W6y0WPJcSbq", "W7W4WO7cOXK", "WQJdMMFcQ3m", "o8oMW5m4W4S", "gmkUW5SbFW", "WPCHE2yP", "wXaLWRtcPq", "WR3cK8oAsCoM", "ugLlwrO8Ca", "W73cUCkK", "W5CYBmkkaa", "WP8fW7aKWQa", "WR3dNNRcHMy", "s3hdUfNdUa", "oGldJCkPr8oFWPRdLGWPWRToWPW", "WOqwB1GO", "u8kInmkOra", "nvnQCc8", "zZyMdhy", "W4LPW4yKcq", "jSkcW63cJmoC", "W4nPW4y", "C8oiBCoLca", "W7xcKW7dSW", "q8knhvOc", "W7iyA8oZWP0", "WP8+W6y", "bWxdGCknjG", "ndfAvwe", "tCkZiSkKra", "qCkAg2yv", "W6pcJsZdOCkR", "dCoGW4aLW40", "W4xcS8k1", "CCkxW5RdJdy", "qglcGcSR", "l8kMW7NcImoC", "cvDSusS", "xMaBW5xdKG", "tmkHWPjVWOOzWP0evSklBCknsWa", "W6OIW69ivG", "yYCPcMy", "WPKfW6CQWQy", "WRBcOCk0WRKf", "g1Hncmox", "WPVcJCkMWP8r", "WRO3AYnj", "W7BcKaJdQSk7", "F1pcKCoWba", "W5SoCmkOW5W", "W4NcIqtdTSkS", "W7FcJSkUCW", "WOivWRpdTXu", "hunrcmou", "WOOcW7eJ", "WOXiW5jDpa", "a3pdV8kV", "WQL2WQtdPfS", "W5akDmkQW4y", "W6OdWPJdQ8o2", "dh5wamoC", "CwFcNmoXjW", "WQCtvG", "WQejrHz2", "dh5C", "s8ksW7OIwv4F", "WR82E24+", "WRySWPJdUe8", "hbtdNmkLma", "W7qHW73cUqS9W5xdNY1GW6ZcI8k6W7W", "W7aRWPNcTH0", "emoNW5uLW5G", "dmo5W4a5W5O", "W5lcMCk+gCoq", "lCoOmsr9", "zCkqgLKu", "WRGvxmk0W7u", "W5SitCkAcG", "W5n/W5eBmq", "dxpdQSkYWRa", "W7hcSSkprmk6", "v3pcJY4T", "WQa8WQtdPLG", "j8kgW73cJSov", "WRKyWPBdLG", "wWeOWPVcRW", "uSkwavid", "WPWzWR7dTri", "W6y+W7rtba", "yJagWQ7cGG", "WOGwW6SLWQy", "xhJcIJm8", "W5aGtSkz", "v28nW4ldLW", "C8kIj8k/uq", "w28qW4tcNG", "WROzsmkDW7G", "xCocCCoXgq", "WRZdMN3cSq", "WROzxvab", "rCkqauye", "pJfCywe", "wbaJWPhcPq", "ECk8C8k2qW", "WOZdMSo5Cq", "k1ZcL8oOvW", "WPFcP8kN", "WRVdJwVcT2y", "b3FdSCk+", "zmkZmmkKrG", "lKFcK8opW74", "hhFdQmkYWRW", "W491W507cq", "WPazWQhdUXK", "W7PXiNyDB8oLW4pcLmo7W6/dK8k1", "xNpcIYyl", "aCoxEW", "WRZcHSoks8o3", "WRCsW6yIWRm", "W6TsW5ueW5W", "W4xcGSkLbCoc", "WOBdKmoHFCoU", "cCk1W4CjFG", "sSoYz8o7la", "qxxcLIK9", "W6pcJstdSSkQ", "ke/cLmogW7K", "cSo1W4G7W4O", "WQWRWQ7dOK8", "dtZdKq", "buJcSh3cIG", "WQVcRSonq8oS", "WRC5WOJdUL4", "actdIN98WPVcT2VdOwTHnCoI", "bmolW4f1Da", "fmo3mdnX", "qSosBCocgq", "WPBdLmo+Emo+", "a3eb", "WQuyWPldNsy", "a252CYe", "W5CVv8kp", "ChNcJcSQ", "W5ehWQJdL8op", "WRCRAgOV", "WQ3cK8oNqmo1", "nmoVjG", "AXJdJCkVsG", "l8oGpc1H", "W5eDWO0ar3ZdLSoExH1noCkg", "WPbAW5bRha", "h0fJW4BdUhvRiCo7ehtcOG", "W6ycWOxdRmoW", "yCo2nCkOuq", "DsCJg2O", "rra1WP7cQW", "WQOztSk4W7K", "FKRdN8kJua", "W41JW5WcdG", "W5XVW4WYeG", "whhdPupdUa", "WRmXWOxdSuu", "x2qlW5FdMW", "vg7dV3tdQq", "W6xcNGZdOCk9", "uNJdHeddPq", "aIBdJhj+WPlcVh3dT05Dd8os", "C8oiDSo6ga", "W7CyWOxdI8oH", "WRCTWO/dH0m"];
  return vo = function() {
    return o;
  }, vo();
}
var Wa, va, he;
class Js {
  constructor(i = {}) {
    P(this, he);
    S(this, va, []);
    S(this, Wa, {});
    function t(n, g, a, x, I) {
      return aA(n - 340, g - 41, x - -227, x - 154, a);
    }
    function e(n, g, a, x, I) {
      return zA(n - 16, g - 480, a - 478, x, g - -350);
    }
    H(this, he, Ls);
    function A(n, g, a, x, I) {
      return aA(n - 201, g - 489, x - -992, x - 474, a);
    }
    this[e(-97, -205, -299, "sGx5") + t(380, 366, "isAO", 375) + A(-365, -399, "dMYU", -407)](i);
  }
  [(va = zA(205, 198, 46, "YW]G", 122) + zA(36, 93, 170, "6f$s", 41), Wa = JA(1201, 1179, "YW]G", 960, 1086) + $(383, "^hkl", 356) + "s", aA(699, 696, 658, 592, "jJOl") + UA(259, "3HrU", 329, 204) + UA(-127, "D[wc", -48, -6) + "fo")](i) {
    function t(I, c, r, Q, C) {
      return zA(I - 346, c - 394, r - 489, r, I - -55);
    }
    function e(I, c, r, Q, C) {
      return UA(I - 113, r, r - 414, I - 386);
    }
    const A = Cn(i);
    function n(I, c, r, Q, C) {
      return zA(I - 321, c - 384, r - 489, r, C - 1192);
    }
    const g = A == null ? void 0 : A[x("cwtP", -153, -277, -167, -140) + n(1221, 1403, "c!Nm", 1220, 1351) + "s"]();
    function a(I, c, r, Q, C) {
      return JA(I - 222, c - 474, C, Q - 196, r - -927);
    }
    if (!(g != null && g[e(550, 465, "47GM") + "t"]) || !(g != null && g[x("U@Y&", 109, 220, 27, 112)]) || !(g != null && g[t(23, 36, "r*YF") + n(1264, 1430, "RJ#I", 1183, 1317)]))
      if (x("5Rca", -63, -42, 12, -67) !== x("!7Xt", -113, -218, -199, -92)) ({ deviceInfo: _0x421b36 } = _0x3cd685);
      else throw new L(a(-82, 118, 31, -23, "RJ#I") + a(44, 127, 147, 245, "jJOl") + e(597, 631, "dX]^") + e(499, 377, "j3BE") + n(1248, 1414, "sGx5", 1319, 1297) + a(41, 30, -25, 100, "cwtP"));
    if (A)
      if (x("@ZDN", -47, 54, 101, -27) !== a(27, 195, 116, 38, "isAO")) {
        const I = {};
        return I[t(16, -3, "KJ1H") + a(-111, -120, 16, 18, "2Kw*")] = this[n(1176, 1100, "3HrU", 1008, 1112) + n(1266, 1212, "KJ1H", 1144, 1133)], I[a(-12, -95, -9, 100, "inV2") + n(1239, 1203, "2Kw*", 1189, 1157) + "e"] = !1, I;
      } else {
        const I = {};
        return I[n(1476, 1377, "EMF[", 1231, 1336)] = A[t(33, -95, "hLSR")], I.id = g[a(135, 92, 76, 181, "cA*d") + x("U@Y&", -84, 147, 145, 32)], I;
      }
    function x(I, c, r, Q, C) {
      return $(I - 233, I, C - -409);
    }
    return void (-8934 * 1 + 2253 * -1 + 11187);
  }
  async [$(326, "2Kw*", 271) + aA(503, 549, 497, 517, "PXJ]") + JA(974, 1062, "(g0d", 1073, 1115) + "m"](i) {
    const t = document[e(635, 463, 598, "r*YF", 566) + g(602, 641, "Znk$") + g(646, 672, "h7T@")](g(567, 613, "q[90"));
    t[g(702, 709, "eTqz") + g(783, 644, "Vd61")] = !0;
    function e(I, c, r, Q, C) {
      return $(I - 352, Q, C - 128);
    }
    function A(I, c, r, Q, C) {
      return UA(I - 208, r, r - 3, C - 776);
    }
    t[n("cwtP", 1280, 1212, 1114, 1154)] = !0, t[x(-536, -504, -419, -508, "sGx5") + e(543, 514, 408, "DBF7", 486) + "e"] = !0, t[A(914, 948, "^hkl", 883, 1014)][g(745, 747, "dMYU") + g(715, 743, "YW]G")] = x(-383, -412, -354, -268, "r*YF") + e(712, 779, 656, "DqRE", 638), t[g(458, 498, ")]*d")][n("jJOl", 1147, 1060, 1019, 1111) + "ty"] = "0", t[n("RJ#I", 1042, 918, 1080, 970)][n("j3BE", 999, 1020, 978, 982) + n("j3BE", 996, 1039, 1176, 1060) + A(918, 823, "2Kw*", 1071, 941)] = e(524, 489, 578, "Dt(B", 471), t[x(-587, -453, -535, -639, "q[90")][e(604, 479, 437, "Vd61", 521)] = g(615, 590, "c!Nm");
    function n(I, c, r, Q, C) {
      return $(I - 46, I, C - 696);
    }
    function g(I, c, r, Q, C) {
      return UA(I - 227, r, r - 137, c - 503);
    }
    t[e(357, 518, 556, "inV2", 452)][g(372, 501, "zu5o") + "t"] = x(-497, -359, -486, -403, "eTqz");
    const a = await navigator[n("inV2", 991, 955, 1203, 1090) + x(-306, -432, -372, -246, "a8HV") + "es"][A(946, 932, "!7Xt", 1008, 883) + g(458, 483, "j3BE") + "ia"](i);
    function x(I, c, r, Q, C) {
      return $(I - 491, C, r - -841);
    }
    return t[e(682, 531, 725, "c!Nm", 607) + A(920, 693, "FOFG", 860, 781)] = a, await t[g(704, 696, "DqRE")](), a;
  }
  async [$(554, "a8HV", 499) + aA(493, 609, 572, 663, "948j") + $(532, "A1ia", 515)]() {
    var I, c;
    function i(r, Q, C, E, d) {
      return UA(r - 102, r, C - 265, C - -646);
    }
    if (!a0())
      if (n(1193, 1360, 1250, "@ZDN") !== n(1358, 1357, 1303, "cA*d")) {
        const r = {};
        return r[n(1301, 1265, 1322, "PXJ]")] = _0x48af86, r;
      } else return;
    const t = await this[A(482, 561, 506, 372, "@ZDN") + "st"](w(this, he)[A(412, 340, 404, 544, "hLSR")]), e = await this[i("dMYU", -536, -487) + "st"](w(this, he)[n(1046, 981, 1052, "j3BE")]);
    function A(r, Q, C, E, d) {
      return aA(r - 429, Q - 115, r - -65, E - 450, d);
    }
    function n(r, Q, C, E, d) {
      return UA(r - 313, E, C - 240, C - 1080);
    }
    function g(r, Q, C, E, d) {
      return $(r - 134, Q, d - 649);
    }
    const a = ((I = t[i("MeU#", -528, -584) + g(1025, "(g0d", 1093, 1124, 1028)]) == null ? void 0 : I[g(868, "47GM", 929, 1076, 980)]) + n(1346, 1267, 1270, "PXJ]") + ((c = e[i("47GM", -594, -466) + A(374, 347, 477, 264, "Znk$")]) == null ? void 0 : c[A(488, 512, 507, 424, "inV2")]), x = await this[n(1063, 958, 1071, "PXJ]") + i("cA*d", -541, -661) + g(1206, "a8HV", 1171, 1196, 1101) + i("A1ia", -420, -483) + "lt"](a, t[n(1307, 1291, 1208, "!7Xt") + "ge"], e[g(1129, "hLSR", 1114, 873, 995) + "ge"]);
    this[i("(g0d", -597, -660) + i("Dt(B", -516, -560)][i("PXJ]", -543, -643)](x);
  }
  async [JA(968, 914, "eTqz", 902, 952) + "st"](i) {
    function t(f, p, k, F, R) {
      return UA(f - 217, f, k - 382, R - 855);
    }
    function e(f, p, k, F, R) {
      return zA(f - 29, p - 82, k - 33, f, k - 184);
    }
    function A(f, p, k, F, R) {
      return JA(f - 393, p - 391, f, F - 261, F - -1154);
    }
    function n(f, p, k, F, R) {
      return $(f - 484, k, R - -7);
    }
    const { fallbackConstraints: g, maxTestDuration: a, primaryConstraints: x, runAmount: I, runDurationCutoffFactor: c } = i;
    let r = 4 * 1932 + -34 * 40 + -398 * 16, Q = I, C, E = this[t("c!Nm", 879, 982, 862, 966) + t("^hkl", 994, 966, 1116, 1021) + A("PXJ]", -235, -230, -248) + "s"](this[e("Vd61", 454, 322) + n(415, 576, "(g0d", 484, 456) + "s"], x);
    for (let f = -568 * -5 + 3 * 2536 + -10448; f < I; f++)
      if (A("sGx5", -199, -119, -110) !== u("YW]G", -294, -338, -351)) {
        if (r > a * c)
          if (e("!Jb@", 215, 176) === A(")]*d", -376, -275, -275)) {
            Q = f;
            break;
          } else throw new _0x17c0a4(e("cwtP", 264, 152) + n(474, 458, "KJ1H", 274, 337) + A("bxNi", -236, -364, -250) + u("zu5o", -526, -553, -539) + A("DqRE", -255, -85, -181) + A("h7T@", -218, -164, -216));
        const p = await this[n(384, 302, "q[90", 268, 401) + e("dX]^", 339, 354) + u("D[wc", -393, -465, -424) + A("6f$s", -159, -137, -129)](E);
        if (p[A("h7T@", -72, -45, -52)])
          if (e("zvB2", 161, 248) !== e("D[wc", 20, 120)) {
            if (this[e("q[90", 120, 205) + e("!Jb@", 473, 357) + A("Vd61", -9, -45, -127) + u("YW]G", -506, -506, -517) + "or"](p[e("bxNi", -19, 117)]))
              if (e("dMYU", 368, 242) !== n(392, 398, "inV2", 273, 321)) E = this[t("jJOl", 817, 764, 832, 832) + n(327, 316, "2Kw*", 469, 450) + u("YW]G", -415, -381, -354) + "s"](this[u("5Rca", -366, -465, -355) + u("cwtP", -351, -282, -397) + "s"], g), f--;
              else return;
          } else _0x1286f6 = this[u("U@Y&", -401, -238, -314) + t("47GM", 956, 1055, 1022, 1065) + n(277, 330, "isAO", 316, 414) + "s"](this[t("9]aM", 974, 922, 1061, 1058) + n(620, 653, "hLSR", 417, 516) + "s"], _0x30291a), _0x2daca2--;
        p[e("Dt(B", 293, 198) + t("47GM", 773, 1008, 825, 881)] && (u("KJ1H", -517, -471, -536) !== n(239, 363, "eTqz", 267, 355) ? this[e("cwtP", 300, 177) + e("sGx5", 223, 211) + "s"] = _0x6be259 : { deviceInfo: C } = p), r += p[n(316, 476, "jJOl", 525, 429) + e("isAO", 212, 139)] || 0;
      } else {
        const p = {};
        return p[e("A1ia", 301, 161)] = _0x35a464[e("c!Nm", 31, 115)], p.id = _0x104c8a[e("RJ#I", 117, 158) + u("Znk$", -521, -666, -533)], p;
      }
    const d = Math[e("Znk$", 261, 121)](r / (Q || 1));
    this[u("YW]G", -394, -388, -327) + t(")]*d", 896, 1089, 1109, 1029) + "s"] = this[e("eTqz", 210, 174) + A("eTqz", -269, -222, -316) + t("a8HV", 832, 964, 808, 930) + "s"](this[t("dMYU", 883, 1050, 966, 964) + n(379, 354, "q[90", 361, 364) + "s"], {}, C == null ? void 0 : C.id);
    function u(f, p, k, F, R) {
      return aA(f - 19, p - 124, F - -976, F - 196, f);
    }
    const s = {};
    return s[t("U@Y&", 880, 970, 777, 874) + "ge"] = d, s[u("47GM", -332, -320, -366) + t("^hkl", 978, 907, 878, 935)] = C, s;
  }
  async [aA(579, 489, 529, 476, "53ng") + aA(294, 351, 434, 575, "53ng") + $(376, "47GM", 442) + JA(943, 1071, "Dt(B", 981, 1066)](i) {
    function t(x, I, c, r, Q) {
      return zA(x - 130, I - 110, c - 442, c, x - -291);
    }
    function e(x, I, c, r, Q) {
      return zA(x - 330, I - 364, c - 106, x, Q - -18);
    }
    const A = Date[t(-130, -238, "!Jb@")]();
    function n(x, I, c, r, Q) {
      return UA(x - 102, x, c - 211, I - -42);
    }
    function g(x, I, c, r, Q) {
      return UA(x - 356, c, c - 64, x - 27);
    }
    function a(x, I, c, r, Q) {
      return $(x - 22, r, Q - -1038);
    }
    try {
      if (e("j3BE", -60, 112, -77, 59) !== t(-126, -33, "RJ#I", -90, -52)) return _0x29dc72 instanceof _0x2b4289 && _0x452889[g(27, -52, "dX]^", -60, 146)] === e("j3BE", -155, -127, -36, -75) + g(67, 122, "RJ#I", 28, 180) + t(-268, -208, "9]aM", -271, -284) + t(-113, -2, "2Kw*", -6, -51);
      {
        const x = await this[g(70, 140, "948j", 30, 2) + a(-742, -763, -643, "948j", -770) + n("948j", 205, 225, 173, 146) + "m"](i), I = Date[e("!Jb@", 282, 129, 154, 143)]() - A, c = this[n("bczU", 27, 85, -91, 12) + e("^hkl", 3, 81, 8, 20) + g(172, 244, "cwtP", 114, 232) + "fo"](x);
        xo(x);
        const r = {};
        return r[t(-164, -112, "bxNi", -149, -245) + g(-3, -108, "!7Xt", 8, -54)] = I, r[e("948j", -26, -13, 73, -16) + a(-670, -646, -503, "zu5o", -608)] = c, r;
      }
    } catch (x) {
      if (n("!Jb@", 204, 174) !== n("bxNi", 97, 8)) {
        const I = {};
        I[g(120, 0, "!Jb@")] = _0x439aa2, _0xb64988[a(-533, -546, -735, "q[90", -611) + e("bczU", -156, -6, -154, -92)] = I;
      } else {
        const I = {};
        return I[n("cwtP", -69, -134)] = x, I;
      }
    }
  }
  [JA(851, 1084, "q[90", 1011, 944) + aA(629, 465, 503, 564, "RJ#I") + zA(64, 81, -86, "DqRE", 40) + $(457, "q[90", 321) + "or"](i) {
    function t(n, g, a, x, I) {
      return UA(n - 273, n, a - 60, I - -222);
    }
    function e(n, g, a, x, I) {
      return $(n - 146, a, I - 162);
    }
    function A(n, g, a, x, I) {
      return aA(n - 374, g - 251, x - -673, x - 75, a);
    }
    return i instanceof DOMException && i[e(714, 729, "YW]G", 593, 682)] === t("6f$s", -91, -40, -238, -138) + A(-98, -177, "@ZDN", -235) + e(352, 527, "Vd61", 423, 442) + t("!Jb@", 101, 21, -45, 14);
  }
  async [UA(165, "^hkl", 188, 157) + zA(-67, -56, -91, "[jIT", -82) + $(253, "FOFG", 350) + aA(625, 623, 628, 492, "bczU") + "lt"](i, t, e) {
    return { optSetting: await Ms(i), afterOpt: t, beforeOpt: e };
  }
  [UA(315, "PXJ]", 367, 227) + $(412, "cA*d", 492) + JA(867, 994, "6f$s", 963, 962)](i) {
    function t(A, n, g, a, x) {
      return zA(A - 305, n - 189, g - 197, A, n - 320);
    }
    function e(A, n, g, a, x) {
      return JA(A - 433, n - 359, x, a - 357, a - -349);
    }
    Object[t("c!Nm", 306, 313) + "es"](i)[t("U@Y&", 488, 454) + "ch"](([A, n]) => {
      function g(r, Q, C, E, d) {
        return t(E, Q - -56, C - 239);
      }
      function a(r, Q, C, E, d) {
        return t(C, E - -492, C - 416);
      }
      function x(r, Q, C, E, d) {
        return e(r - 83, Q - 442, C - 16, Q - -145, d);
      }
      function I(r, Q, C, E, d) {
        return e(r - 236, Q - 159, C - 24, d - -311, r);
      }
      function c(r, Q, C, E, d) {
        return t(d, Q - -748, C - 16);
      }
      if (x(592, 558, 445, 451, "EMF[") === x(552, 418, 522, 327, "isAO")) {
        const r = A;
        w(this, he)[r] && (a(-17, 77, "j3BE", -53) !== c(-219, -349, -488, -413, "948j") ? w(this, he)[r] = { ...w(this, he)[r], ...n } : this[x(543, 614, 648, 485, "47GM") + I("bczU", 368, 136, 216, 229) + I(")]*d", 434, 299, 453, 357) + a(-183, -180, "r*YF", -44) + "or"](_0x1cd45a[I(")]*d", 329, 337, 238, 361)]) && (_0x261696 = this[x(349, 405, 417, 440, "cA*d") + g(250, 351, 451, "KJ1H") + g(492, 357, 452, "cwtP") + "s"](this[c(-126, -234, -175, -234, "!7Xt") + x(566, 461, 428, 320, "A1ia") + "s"], _0x5e2791), _0x147761--));
      } else {
        const r = { ..._0x33a47f }, Q = r, C = { ...typeof Q[x(447, 481, 384, 547, "!7Xt")] == a(5, 17, "r*YF", -14) + "t" ? Q[I("2Kw*", 358, 318, 370, 331)] : {}, ..._0x2f7679 }, E = C;
        if (_0x2fea28) {
          const d = {};
          d[x(489, 622, 553, 731, "Vd61")] = _0x1cb8b4, E[a(-14, -36, "isAO", -123) + I("3HrU", 211, 289, 414, 285)] = d;
        }
        return Q[c(-523, -461, -399, -469, "6f$s")] = E, Q;
      }
    });
  }
  [$(247, "!Jb@", 305) + aA(680, 763, 646, 721, "[jIT") + aA(525, 601, 586, 527, "6f$s") + "s"](i = {}, t = {}, e) {
    const A = { ...i };
    function n(C, E, d, u, s) {
      return $(C - 282, C, u - 752);
    }
    function g(C, E, d, u, s) {
      return aA(C - 73, E - 112, E - -379, u - 46, C);
    }
    const a = A, x = { ...typeof a[I("MeU#", 754, 692, 704)] == n("zvB2", 942, 970, 1048) + "t" ? a[I("DqRE", 1020, 911, 889)] : {}, ...t };
    function I(C, E, d, u, s) {
      return aA(C - 276, E - 467, u - 273, u - 407, C);
    }
    function c(C, E, d, u, s) {
      return $(C - 431, C, E - 872);
    }
    const r = x;
    function Q(C, E, d, u, s) {
      return JA(C - 344, E - 171, u, u - 115, s - -754);
    }
    if (e)
      if (I("inV2", 812, 885, 915) === c("zvB2", 1315)) {
        const C = _0x135c88(_0x26fd9a), E = C == null ? void 0 : C[c("jJOl", 1212) + I("Znk$", 714, 800, 705) + "s"]();
        if (!(E != null && E[g("MeU#", 87, 104, 162) + "t"]) || !(E != null && E[c("Znk$", 1309)]) || !(E != null && E[n("948j", 1011, 1150, 1100) + n("PXJ]", 905, 899, 1017)])) throw new _0x35f187(g("eTqz", 167, 247, 130) + I("h7T@", 850, 834, 885) + I("c!Nm", 627, 764, 747) + I("2Kw*", 975, 870, 921) + I("948j", 737, 838, 805) + g("a8HV", 110, 175, 107));
        if (C) {
          const d = {};
          return d[I("FOFG", 696, 794, 760)] = C[n("cA*d", 1281, 1314, 1293)], d.id = E[Q(67, 263, 53, "FOFG", 141) + c(")]*d", 1375)], d;
        }
        return void (-9680 + 1 * 6599 + 3081);
      } else {
        const C = {};
        C[I("Znk$", 873, 778, 911)] = e, r[c("bxNi", 1291) + I("D[wc", 756, 878, 758)] = C;
      }
    return a[n("isAO", 1056, 1010, 1067)] = r, a;
  }
  [aA(574, 676, 667, 536, "inV2") + UA(-59, "2Kw*", -48, 20) + aA(519, 438, 520, 519, "47GM")](i) {
    function t(e, A, n, g, a) {
      return $(e - 106, n, e - 480);
    }
    this[t(871, 860, "@ZDN") + t(851, 921, "q[90") + "s"] = i;
  }
  [$(421, "hLSR", 533) + JA(947, 937, "RJ#I", 862, 931) + $(421, "h7T@", 420) + JA(1219, 1136, "isAO", 1230, 1089) + $(228, "!7Xt", 351)]() {
    function i(g, a, x, I, c) {
      return JA(g - 408, a - 170, I, I - 324, g - -1077);
    }
    function t(g, a, x, I, c) {
      return zA(g - 198, a - 177, x - 44, g, x - 671);
    }
    function e(g, a, x, I, c) {
      return aA(g - 409, a - 16, I - -571, I - 448, x);
    }
    const A = {};
    A[i(-39, -74, -33, "inV2") + n(560, 487, 596, 636, "r*YF")] = this[n(689, 739, 658, 684, "dMYU") + e(-92, -239, "3HrU", -124)], A[e(-25, -46, "inV2", -90) + t("!7Xt", 743, 741) + "e"] = !1;
    function n(g, a, x, I, c) {
      return JA(g - 484, a - 451, c, I - 341, g - -290);
    }
    return A;
  }
}
he = new WeakMap();
const so = {};
so.width = 1920, so.height = 1080, so.facingMode = $n.FRONT;
const Us = so;
var _e, wt, Ie;
class mI {
  constructor({ defaultVideoConstrains: i = Us, minCameraShorterSide: t = is } = {}) {
    P(this, _e);
    P(this, wt, []);
    P(this, Ie, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, H(this, _e, e);
  }
  get availableCameraProperties() {
    return w(this, wt);
  }
  get mediaStream() {
    return w(this, Ie);
  }
  get videoTrack() {
    return w(this, Ie) ? Cn(w(this, Ie)) : void (-82 * 54 + -2 * -1789 + 850);
  }
  get isCameraActive() {
    var i;
    return !!((i = w(this, Ie)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    xo(t);
  }
  async open(i = {}) {
    aa() && B0() && await gn(-417 * 17 + -4268 + -1 * -11807), H(this, Ie, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get next device");
    const i = await bi(), t = this.videoTrack.getSettings(), e = i.findIndex((n) => n.deviceId === t.deviceId);
    return (i[e + (-391 + -595 * -14 + -21 * 378)] ?? i[-167 * 35 + -4518 + 10363]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(i) {
    if (!this.videoTrack) throw Error("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, i);
  }
  close() {
    w(this, Ie) && (xo(w(this, Ie)), H(this, Ie, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = w(this, wt), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const i = this.getSettings();
    if (!i.width) throw new L("Video width is undefined");
    if (!i.height) throw new L("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await CI(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === $n.FRONT ? void (-169 + -13 * -13) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Ag() ? (await bi()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (5695 * 1 + 137 * 67 + -6 * 2479);
  }
  async collectAvailableCamerasInfo() {
    const i = await bi();
    for (const t of i) {
      aa() && B0() && await gn(13464 + -1 * 13014);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const n = await navigator.mediaDevices.getUserMedia(A), g = Cn(n);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = g.getSettings(), x = { ...a };
        x.deviceName = g.label;
        const I = {};
        I.cameraProperties = x;
        const c = I;
        w(this, wt).push(c), xo(n);
      } catch (e) {
        e instanceof Error && L.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...w(this, _e).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t } : void (212 * 41 + -5061 + 1 * -3631);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new L("Could not init camera settings");
    if (typeof w(this, _e).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < w(this, _e).minCameraShorterSide)
      throw this.close(), new L("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
_e = new WeakMap(), wt = new WeakMap(), Ie = new WeakMap();
var l0;
class Ys {
  constructor({ cameraEvaluator: i, cameraHandler: t, performanceCheckup: e, videoHandler: A }) {
    P(this, l0, !1);
    S(this, "videoHandler");
    S(this, "cameraHandler");
    S(this, "performanceCheckup");
    S(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = i;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    w(this, l0) || (H(this, l0, !0), await mI.requestPermission());
  }
  async startFirstVideoStream(i = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t == null ? void 0 : t.deviceId);
    !B0() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(i != null && i.width)) throw new L("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new L("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new L("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 0, -1289 * -3 + 3033 + 3 * -2300), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(i) {
    await this.cameraHandler.open(i), cs() && (this.cameraHandler.close(), await this.cameraHandler.open(i)), await this.mountVideoStream();
  }
  async switchCamera() {
    const i = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(i);
    this.pauseStream(), !B0() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
l0 = new WeakMap();
var pe;
class Os {
  constructor(i) {
    P(this, pe);
    H(this, pe, i);
  }
  get videoElement() {
    return w(this, pe);
  }
  async play(i) {
    w(this, pe).srcObject = i, await w(this, pe).play();
  }
  stop() {
    w(this, pe).srcObject = null;
  }
  hasSrcObject() {
    return !!w(this, pe).srcObject;
  }
}
pe = new WeakMap();
function XA(o, i, t, e, A) {
  return yA(o - -463, A);
}
(function(o, i) {
  function t(x, I, c, r, Q) {
    return yA(x - -41, r);
  }
  function e(x, I, c, r, Q) {
    return yA(r - -843, I);
  }
  var A = o();
  function n(x, I, c, r, Q) {
    return yA(r - -673, c);
  }
  function g(x, I, c, r, Q) {
    return yA(x - -164, Q);
  }
  for (; ; )
    try {
      var a = -parseInt(g(281, 329, 297, 313, "ILjh")) / 1 + parseInt(n(-160, -206, "FVhS", -222, -160)) / 2 * (parseInt(g(341, 331, 399, 375, "3bew")) / 3) + parseInt(g(280, 299, 334, 259, "MT3k")) / 4 * (parseInt(e(-346, "M*Km", -307, -351, -376)) / 5) + -parseInt(t(413, 398, 434, "3bew", 396)) / 6 + -parseInt(n(-139, -194, "aK0&", -198, -213)) / 7 + -parseInt(g(318, 283, 340, 281, "S3PP")) / 8 + parseInt(n(-58, -132, "FVhS", -121, -103)) / 9;
      if (a === i) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Lo, -205759 * -1 + -536340 + 686441);
function qA(o, i, t, e, A) {
  return yA(e - 313, o);
}
function Ne(o, i, t, e, A) {
  return yA(e - -171, o);
}
function Lo() {
  var o = ["E2PHr8om", "FbRcNSofomoqe3ZdRYPQW54I", "aCo6qWhdVq", "ta3cHCobW6O", "qf4xmt4", "g8kMW70", "WRPnjCkikW", "arpdKxP2", "hsOf", "hSokAa", "ECkdW491cq", "CSkeW4HL", "i3uKpSkQ", "lLe8p8kO", "WRFcHSk+WOldS3HnWO7cJwO", "fJNcRG", "v8oCWQpcNMG", "W44RWR/cOrm", "oepdNG", "s1tcO09yWRpdJW", "atBdL2Dw", "W53cJ8oPhmo7", "W4FdVSkCh8kg", "h8oXtG", "W7TPy8kTj8oEl1qNW4W", "B2H8", "W7OdWQtcVmkx", "hrldMmoqpq", "W450tG", "y8kUW4L0nW", "WRCEWRRcRCob", "wCk2k8oZW6i", "W48VWOpdR2y", "W5xcOmocWQ7cOG", "W67cTgSUWR8", "WRSaWQW", "emk9DSoMwa", "eZZdHmozcW", "x8kVeSoIW6W", "rMfRWQDp", "W5BcPmovWRRcVa", "gvpdH8oHW7VdImktWOtcQG", "WRGWpfnK", "w0rIx8oS", "W6ddMCo/W4pdSa", "pLNdHCknxa", "WR8mWQFcJCol", "WRVcS3/dGCo1", "aeZdGJBcHa", "Fwn8ACoe", "raVcGa", "W7xdS8oIW4xdQG", "W5aJWPxdSua", "gZddJW", "etqtW7DC", "kx7dQd/cQa", "b8o6BGRdLa", "gGVdMmoeeq", "iheZpSkP", "W5nWrmoeWR8", "ACoLWOGVW4m", "hGzoCMfQqMm3A8okiCkS", "WRPhjSk5iq", "W7ZcThyZWP8", "edhdJevR", "n8kJEW", "aSowBXfx", "w8kOdL3cPSoUgcddJgmCAx4", "ESoNWQxcJMG", "f8kaW71keW", "WQaYWP1msW", "tXBcKCoDW6W", "WQ5xuCkCcq", "W7adWOtcMmk0", "W6HUWR8JW7NdNmktWQ/cG8kqlKG", "WRFcPgBdH8o5", "butdICkEEq", "peFdMSkUsG", "b8kLW6W", "lSkor8oPwq", "W55PwCopWPG", "W6yLWR3cMmoKWRv9", "xmoIWRPdWPurW4CNemkKW4iH", "cSoiDr99", "ecZdI0PT", "bSk+W7ChW5C", "n0NdMq", "mKldN8khbG", "gGDofJi8hKCd", "estcQSkvW7q", "iKddGXdcMq", "WRFcH8k1WOxcTGGkWOlcMu0ifg0", "lCkurSozqG", "W4JcR8oy", "qSo7WPuuW7G", "DSkeW5rYlq", "WO7dLrFdTmkM", "W6nAW7hdM8kCW50UWOZcOvPSW7XB", "yG3cLmorW6S", "eZpcOmkrW40", "hJRdGxLW", "W5JcSSoFWONcOq", "WQSDWRVcI8oD", "gmkZFfJcNq", "md/cUSkcW4O", "WRmbWQdcLmop", "uSo8wKldRq", "WReFWQZcJ8oA", "WR4YW79dWQa", "W7GTWRxcJSk2", "hdhdKx1R", "WQTwW6hdJ8oejdCGzCorW4m", "DbFcNmozx8kcW7xdRmkZW6v+", "fY7dKW", "WO7cNMHTkCo+fb/cT8kEWRCAW4e", "ieZdHmkEAq", "F8oNx07dQG", "WQW2iSoSja", "aSokDrf1", "W7rIW5G0gCobW5xcTtFcVmozW4mm", "temnbJG", "W4/cRmonWQtcRq", "ySotC8kF", "v8kTla", "vH7cLKtdHmo9n3TmWONdKCoUW4u", "W7RcShGZWQG", "W6RcThC5", "hCk+W7WrW4O"];
  return Lo = function() {
    return o;
  }, Lo();
}
function Qt(o, i, t, e, A) {
  return yA(e - 645, o);
}
function YA(o, i, t, e, A) {
  return yA(e - -750, t);
}
function yA(o, i) {
  var t = Lo();
  return yA = function(e, A) {
    e = e - (9411 + -9050 * 1 + 70);
    var n = t[e];
    if (yA.wKJwzQ === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (var p = 0, k = C.length; p < k; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var C = [], E = 0, d, u = "";
        r = g(r);
        var s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (var f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      yA.ZKaMvI = a, o = arguments, yA.wKJwzQ = !0;
    }
    var x = t[-1 * 7819 + -3 * 421 + 9082], I = e + x, c = o[I];
    return c ? n = c : (yA.EvffTw === void 0 && (yA.EvffTw = !0), n = yA.ZKaMvI(n, A), o[I] = n), n;
  }, yA(o, i);
}
var La, Ja, Ua;
class Hs {
  constructor() {
    S(this, Ua, 0);
    S(this, Ja);
    S(this, La, void (779 + -1 * 779));
    function i(e, A, n, g, a) {
      return YA(e - 237, A - 344, A, g - 916);
    }
    function t(e, A, n, g, a) {
      return XA(a - 836, A - 215, n - 62, g - 258, g);
    }
    this[i(711, "FVhS", 685, 661) + i(579, "MT3k", 658, 634) + t(922, 950, 864, "BgPR", 923) + t(924, 873, 840, "eX#z", 869)] = Date[t(972, 981, 899, "Pbgg", 917)]();
  }
  [(Ua = Qt("GioS", 1169, 1129, 1188) + qA("sC4H", 812, 834, 770) + qA("[Z$j", 844, 770, 827), Ja = YA(-263, -315, "Pbgg", -277) + XA(28, -17, 38, 71, "DDV0") + Qt("GioS", 1220, 1156, 1168) + Ne("MT3k", 390, 371, 355), La = YA(-318, -317, "Rd&7", -292) + qA("ngQv", 710, 762, 774) + "p", YA(-167, -249, "7[*L", -226) + qA("U]3[", 828, 817, 785) + YA(-213, -293, "1^XY", -264))]() {
    function i(a, x, I, c, r) {
      return Qt(I, x - 226, I - 475, r - 218);
    }
    this[e("LOiu", 1282, 1322) + e("0Jv@", 1302, 1289) + A("aK0&", 1005, 993)]++;
    function t(a, x, I, c, r) {
      return YA(a - 39, x - 87, I, x - 972);
    }
    function e(a, x, I, c, r) {
      return qA(a, x - 334, I - 396, x - 534);
    }
    function A(a, x, I, c, r) {
      return qA(a, x - 356, I - 492, x - 243);
    }
    function n(a, x, I, c, r) {
      return YA(a - 41, x - 351, a, I - -47);
    }
    if (this[e("GioS", 1390, 1438) + t(714, 743, "MT3k") + i(1376, 1341, "7[*L", 1257, 1319)] === -5307 + 2331 * -2 + -10 * -997)
      if (t(747, 734, "AbIG") !== A("1^XY", 1085, 1118)) this[t(702, 757, "3bew") + i(1421, 1402, "(h@8", 1440, 1390) + "p"] = Date[t(711, 763, "ngQv")]() - this[t(766, 703, "Nsqj") + e("Nsqj", 1293, 1271) + i(1413, 1355, "Pbgg", 1318, 1374) + n("BgPR", -283, -278)];
      else {
        var g = {};
        return g[A("aK0&", 1006, 1059) + e("qPl^", 1335, 1307) + "e"] = !1, g;
      }
  }
  [Ne("M*Km", 379, 311, 365) + XA(6, 14, 40, 18, "TS)1") + YA(-218, -248, "M*Km", -272) + qA("M#3j", 805, 786, 821) + "up"]() {
    function i(g, a, x, I, c) {
      return YA(g - 484, a - 145, c, I - 1617);
    }
    function t(g, a, x, I, c) {
      return Ne(x, a - 288, x - 65, c - 584);
    }
    function e(g, a, x, I, c) {
      return XA(I - 103, a - 102, x - 138, I - 125, a);
    }
    if (!a0())
      if (i(1455, 1359, 1468, 1418, "sC4H") === i(1273, 1370, 1366, 1307, "M*Km")) this[n(1187, "Pbgg", 1237) + e(139, "7[*L", 97, 104) + i(1375, 1434, 1443, 1383, "DDV0")]++, this[i(1282, 1315, 1353, 1315, "ILjh") + e(93, "FVhS", 130, 123) + t(974, 943, "M*Km", 888, 922)] === -1 * -4723 + 137 * 2 + -2 * 2498 && (this[i(1372, 1410, 1422, 1361, "ngQv") + e(115, "i5$W", 132, 71) + "p"] = _0x2c17e0[n(1272, "Ojk2", 1280)]() - this[t(881, 804, "#*&W", 812, 851) + e(208, "1^XY", 180, 162) + A(177, "qPl^", 183, 279, 223) + e(156, "29@S", 134, 139)]);
      else return;
    this[A(200, "eN(r", 234, 191, 197) + n(1287, "29@S", 1319) + t(854, 829, "eX#z", 916, 854)] = 4 * 1718 + -7 * -571 + -3623 * 3, this[n(1223, "Mh]G", 1254) + n(1192, "TS)1", 1253) + "p"] = void (12 * -149 + 5758 + -10 * 397);
    function A(g, a, x, I, c) {
      return XA(c - 132, a - 214, x - 264, I - 292, a);
    }
    function n(g, a, x, I, c) {
      return Ne(a, a - 295, x - 267, x - 945);
    }
    window[e(145, "d6yC", 45, 106) + n(1268, "umD[", 1278) + A(207, "Pbgg", 112, 132, 167) + e(92, "tkah", 163, 125)](e(161, "[Z$j", 89, 133) + "wn", this[n(1299, "umD[", 1277) + i(1304, 1313, 1351, 1299, "eX#z") + A(181, "(h@8", 261, 249, 225)][e(130, "qPl^", 176, 129)](this));
  }
  [YA(-288, -252, "Rd&7", -249) + XA(-29, -86, 15, -36, "ngQv") + Qt("MT3k", 1141, 1231, 1182) + Qt("3M0s", 1151, 1063, 1098) + "up"]() {
    function i(n, g, a, x, I) {
      return qA(I, g - 140, a - 44, a - -611);
    }
    function t(n, g, a, x, I) {
      return XA(g - -238, g - 61, a - 241, x - 53, I);
    }
    function e(n, g, a, x, I) {
      return qA(a, g - 393, a - 211, n - -64);
    }
    function A(n, g, a, x, I) {
      return YA(n - 56, g - 320, g, a - 168);
    }
    if (!a0())
      return i(195, 241, 215, 228, "eBt@") === e(783, 819, "DDV0") ? this[t(-315, -259, -247, -250, "0Jv@") + A(-12, "jYE2", -49) + "p"] : void 0;
    window[i(254, 177, 241, 178, "3M0s") + i(283, 311, 257, 290, "Pbgg") + A(-125, "T@kl", -123) + "r"](A(-26, "umD[", -33) + "wn", this[i(294, 173, 232, 296, "9xdB") + A(-116, "eN(r", -64) + e(725, 722, "eN(r")][t(-136, -199, -179, -199, "Rd&7")](this));
  }
  [XA(7, -18, 55, 6, "MT3k") + qA("i5$W", 815, 798, 820) + "lt"]() {
    function i(g, a, x, I, c) {
      return Ne(x, a - 257, x - 256, g - 325);
    }
    function t(g, a, x, I, c) {
      return XA(I - 712, a - 235, x - 253, I - 364, g);
    }
    function e(g, a, x, I, c) {
      return Qt(I, a - 350, x - 475, g - -1080);
    }
    if (!a0() || !this[t("qPl^", 836, 713, 774) + t("M*Km", 639, 641, 688) + "p"]) {
      if (e(113, 82, 92, "eN(r") === t("3M0s", 734, 809, 795)) return this[e(96, 37, 150, "7[*L") + i(707, 748, "sJeH") + i(654, 704, "Nsqj")];
      var A = {};
      return A[e(55, 1, 19, "ILjh") + t("7[*L", 768, 674, 733) + "e"] = !1, A;
    }
    function n(g, a, x, I, c) {
      return XA(x - -219, a - 107, x - 235, I - 67, a);
    }
    return { performance: !0, hiccupAmount: this[t("U]3[", 822, 795, 766) + t("BgPR", 664, 679, 692) + e(107, 95, 52, "3bew") + "t"](), firstHiccup: this[t("DDV0", 733, 770, 789) + t("U]3[", 650, 697, 685) + e(17, 65, 69, "Ojk2") + n(-211, "sJeH", -185, -225) + "ss"]() };
  }
  [XA(-30, -44, -5, 2, "S3PP") + Ne("MT3k", 302, 353, 294) + YA(-262, -186, "Rd&7", -230) + "t"]() {
    function i(e, A, n, g, a) {
      return qA(A, A - 117, n - 42, a - 336);
    }
    function t(e, A, n, g, a) {
      return Ne(n, A - 453, n - 179, A - -399);
    }
    return this[i(1094, "Ojk2", 1078, 1131, 1111) + t(-87, -123, "Pbgg") + t(-164, -121, "aK0&")];
  }
  [qA("b1X9", 803, 796, 784) + XA(84, 28, 43, 109, "[Z$j") + Ne("Nsqj", 361, 364, 386) + YA(-197, -195, "#*&W", -212) + "ss"]() {
    function i(e, A, n, g, a) {
      return qA(g, A - 215, n - 383, n - -778);
    }
    function t(e, A, n, g, a) {
      return YA(e - 290, A - 257, e, A - 1631);
    }
    return this[t("ngQv", 1375) + i(-49, -27, 2, "Ojk2") + "p"];
  }
}
function Ks(o) {
  const i = LA(null), [t, e] = DA(), [A, n] = DA(), { handleError: g, setIsCameraReady: a } = rt(), x = be((c) => {
    n((r) => Bs(c, r));
  }, []);
  _(() => {
    if (!i.current) {
      g(new L("Something went wrong during video initialization"));
      return;
    }
    const c = new Os(i.current), r = new Js(), Q = new mI(), C = new Hs(), E = {};
    E.videoHandler = c, E.cameraHandler = Q, E.performanceCheckup = C, E.cameraEvaluator = r;
    const d = new Ys(E);
    return (async () => {
      try {
        const s = {};
        s.facingMode = o, await d.startFirstVideoStream(s);
      } catch (s) {
        if (s instanceof Error) {
          g(L.fromCameraError(s));
          return;
        }
      }
      e(d), a(!0), x(d.getCameraResolution());
    })(), () => {
      d == null || d.stopStreaming(), a(!1), e(void (9679 * -1 + -7988 + -13 * -1359));
    };
  }, [o, g, a, i, x]);
  const I = {};
  return I.cameraService = t, I.cameraResolution = A, I.onCameraResolutionChange = x, I.videoRef = i, I;
}
function Ps({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: n } = Ks(o), g = NA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: n
    }),
    [e, t, A, n]
  );
  return /* @__PURE__ */ D(No.Provider, { value: g, children: i });
}
const tg = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
}, Ts = (o, i) => {
  const t = {};
  t.instruction = i, tg(o, t);
};
function qs({ children: o, ...i }) {
  const t = i.cameraFacing ?? $n.FRONT;
  return /* @__PURE__ */ D(Ps, { cameraFacing: t, children: o });
}
let Y;
const ye = new Array(-6984 + -28 * -254).fill(void 0);
ye.push(void 0, null, !0, !1);
function Bn(o) {
  return ye[o];
}
let Qe = 122 * -59 + 4237 + 2961, A0 = null;
function Bo() {
  return (A0 === null || A0.byteLength === 7395 + 52 * -25 + 115 * -53) && (A0 = new Uint8Array(Y.memory.buffer)), A0;
}
const Qo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, js = typeof Qo.encodeInto == "function" ? function(o, i) {
  return Qo.encodeInto(o, i);
} : function(o, i) {
  const t = Qo.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function Q0(o, i, t) {
  if (t === void 0) {
    const a = Qo.encode(o), x = i(a.length, -9455 + -1 * -4401 + 5055) >>> 848 + 5508 * 1 + -6356;
    return Bo().subarray(x, x + a.length).set(a), Qe = a.length, x;
  }
  let e = o.length, A = i(e, 9 * -757 + -4015 * 1 + 10829) >>> -1 * -362 + -7849 * -1 + -8211;
  const n = Bo();
  let g = -155 * -51 + -1 * -277 + 8182 * -1;
  for (; g < e; g++) {
    const a = o.charCodeAt(g);
    if (a > -1567 * 4 + 5177 * -1 + -2 * -5786) break;
    n[A + g] = a;
  }
  if (g !== e) {
    g !== 124 * -9 + -584 + 1700 && (o = o.slice(g)), A = t(A, e, e = g + o.length * (2496 * -3 + -1875 + -7 * -1338), -150 * 1 + -1 * 8663 + -339 * -26) >>> 4246 + 1 * 6121 + 7 * -1481;
    const a = Bo().subarray(A + g, A + e), x = js(o, a);
    g += x.written, A = t(A, e, g, 1603 + 1 * -5577 + 3975) >>> -1615 + -373 * -6 + 1 * -623;
  }
  return Qe = g, A;
}
function wI(o) {
  return o == null;
}
let e0 = null;
function ce() {
  return (e0 === null || e0.byteLength === 0) && (e0 = new Int32Array(Y.memory.buffer)), e0;
}
let r0 = ye.length;
function Zs(o) {
  o < 132 || (ye[o] = r0, r0 = o);
}
function bI(o) {
  const i = Bn(o);
  return Zs(o), i;
}
const Qn = {};
Qn.ignoreBOM = !0, Qn.fatal = !0;
const kI = typeof TextDecoder < "u" ? new TextDecoder("utf-8", Qn) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && kI.decode();
function Jo(o, i) {
  return o = o >>> -5 * 1559 + -2881 * -1 + 4914, kI.decode(Bo().subarray(o, o + i));
}
function En(o) {
  r0 === ye.length && ye.push(ye.length + (-2231 * -4 + 2843 * -2 + -3237));
  const i = r0;
  return r0 = ye[i], ye[i] = o, i;
}
let t0 = null;
function GI() {
  return (t0 === null || t0.byteLength === -2173 * -3 + 3181 + -25 * 388) && (t0 = new Uint32Array(Y.memory.buffer)), t0;
}
function sa(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = GI();
  for (let A = -1981 * 5 + -5565 + 1547 * 10; A < o.length; A++)
    e[t / (-1062 + -1219 * 1 + 2285) + A] = En(o[A]);
  return Qe = o.length, t;
}
function Ba(o, i) {
  o = o >>> 0;
  const t = GI(), e = t.subarray(o / (6135 + -6131 * 1), o / (7244 + -191 * -47 + -16217 * 1) + i), A = [];
  for (let n = -9329 + 49 * -196 + 18933 * 1; n < e.length; n++)
    A.push(bI(e[n]));
  return A;
}
function Vs(o, i) {
  const t = Q0(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), e = Qe, A = Q0(i, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Qe, g = Y.is_mobile_supported(t, e, A, n);
  return og.__wrap(g);
}
const dn = {};
dn.register = () => {
}, dn.unregister = () => {
};
const Qa = typeof FinalizationRegistry > "u" ? dn : new FinalizationRegistry((o) => Y.__wbg_licensevalidationresult_free(o >>> 0));
class og {
  static __wrap(i) {
    i = i >>> 0;
    const t = Object.create(og.prototype);
    return t.__wbg_ptr = i, Qa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = -7 * 447 + -10 * -587 + -2741, Qa.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    Y.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, n) {
    var g = wI(t) ? 0 : Q0(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), a = Qe;
    const x = sa(e, Y.__wbindgen_malloc), I = Qe, c = sa(A, Y.__wbindgen_malloc), r = Qe, Q = Q0(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), C = Qe, E = Y.licensevalidationresult_new(i, g, a, x, I, c, r, Q, C);
    return this.__wbg_ptr = E >>> 0, this;
  }
  get is_valid() {
    return Y.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const e = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = ce()[e / (-11 * -662 + 915 + -8193) + (-3334 + -1 * -946 + -398 * -6)], t = ce()[e / (-2 * -4470 + 1 * 2691 + -11627) + (-4700 + -190 * 29 + 10211)];
      let A;
      return i !== -1 * 883 + -9496 + 107 * 97 && (A = Jo(i, t).slice(), Y.__wbindgen_free(i, t * (-422 * 19 + 87 * -99 + 16632), 1 * -663 + 7494 + 6830 * -1)), A;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(-932 * -3 + 405 * 4 + -4400);
    }
  }
  get errors() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = ce()[A / (7013 * 1 + 21 * -461 + 2672) + (411 * 24 + -9 * -443 + -13851)], t = ce()[A / (9871 + -703 * 10 + 1 * -2837) + (4108 + 1179 * 7 + 40 * -309)], e = Ba(i, t).slice();
      return Y.__wbindgen_free(i, t * (-1397 + -1 * -1401), -787 * 11 + 272 * 17 + 4037), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(8217 + 47 * -209 + 1622);
    }
  }
  get warnings() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = ce()[A / (-2032 + -107 * 49 + -29 * -251) + 0], t = ce()[A / (7069 + 9587 * -1 + 2522) + (-8741 + 841 * -2 + -5212 * -2)], e = Ba(i, t).slice();
      return Y.__wbindgen_free(i, t * 4, 4), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(2258 + 328 * -4 + -930);
    }
  }
  get customer() {
    let i, t;
    try {
      const n = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_customer(n, this.__wbg_ptr);
      var e = ce()[n / (9070 + 14 * -221 + -2986 * 2) + (1 * -2609 + 8155 + -5546)], A = ce()[n / (-6267 * -1 + -2871 + -8 * 424) + (3300 + 1156 * -8 + 5949)];
      return i = e, t = A, Jo(e, A);
    } finally {
      Y.__wbindgen_add_to_stack_pointer(8241 + 2123 * 2 + -4157 * 3), Y.__wbindgen_free(i, t, 2443 + 6389 * 1 + -1 * 8831);
    }
  }
}
async function _s(o, i) {
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
function zs() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = Bn(t), A = typeof e == "string" ? e : void 0;
    var n = wI(A) ? -1 * 6814 + 5 * -1529 + 19 * 761 : Q0(A, Y.__wbindgen_malloc, Y.__wbindgen_realloc), g = Qe;
    ce()[i / (-29 * -143 + 2054 + -6197) + (-487 * -13 + 9765 + -3219 * 5)] = g, ce()[i / (-163 * -51 + 739 + -13 * 696) + (-2 * -4637 + -4313 + -4961)] = n;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    bI(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = Jo(i, t);
    return En(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return En(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return Bn(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Jo(i, t));
  }, o;
}
function Xs(o, i) {
  return Y = o.exports, SI.__wbindgen_wasm_module = i, e0 = null, t0 = null, A0 = null, Y;
}
async function SI(o) {
  if (Y !== void 0) return Y;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2lzX3ZhbGlkAPYBJWxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2ZlYXR1cmVzX2pzb24AgwEebGljZW5zZXZhbGlkYXRpb25yZXN1bHRfZXJyb3JzAJ4BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X3dhcm5pbmdzAJ8BIGxpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X2N1c3RvbWVyALEBE2lzX21vYmlsZV9zdXBwb3J0ZWQABxFfX3diaW5kZ2VuX21hbGxvYwDXARJfX3diaW5kZ2VuX3JlYWxsb2MA8QEfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgCvAg9fX3diaW5kZ2VuX2ZyZWUAqAIJjAIBAEEBC5IBmAIcnQKpAqsCmAKdAuYBqgKVAosCwwFdXPQBHqIBzwGfAvIBZj+zAnb1AZYC7AFFpgL9AdkB/AH9AfsBgwKCAvwB/AH+Af8BgAJYhQFpDqkCbWqTAvkBpgKBAqwC+gFjkgLAAokCigKNApQC4gGUAt8BVLACwAKMAsACsQKUAo8BwALmAegBbuMBngIx2wGyAllvpAE67wEmzgHwAcEBW8AC0gGxApQCrQJktwKEAvMBxwEqmgKnApsCjgGaAUc1Fo4CnAKlAoUCoAKgAoYCoQKhAocCogKiAo4CkAKjAqMCkQKkAqQCe9QB9wGIAt0BmwGWAZgBrgJluAJ/uQLaAaUBUboCCqjWCLsCkUQCD38FfiMAQbAJayIGJAAgAiAEIAMgBUkiCBshDCAEIAIgCBshDiADIAUgAyAFSxshCQJAAkACQAJAIAMgBSAIGyINQSFPBEACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDUGBAk8EQEEAIQggBkEANgKACCAGQQA2AqgIIAZBgAhqIgIgDCAMIA0gCUEDbiISQQFqIgogCiANSxsiD0EDdGoiEBBDIAZB+AhqIAJBMBC+AhogDSAPayICIAogAiAKSRshESAGQYAJaiELIAYoAvgIIRMCQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyIHRQ0AIAYoAoAJIRQDQCADIAUgBEEBcSIEGyECIAdBA3QgFCALIAQbakEIaykDAFBFBEAgAiEIDAILIAIEQCAGQfgIakEEQSggBBtqIAJBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALCyAGQTBqIAtBGGopAwA3AwAgBkEoaiALQRBqKQMANwMAIAZBIGogC0EIaikDADcDACAGIAspAwA3AxggBiAGKAKkCTYCPCAGIAU2AjggBiADNgIUIAYgEzYCECAGQQJBASAIGzoAQCAPIBFqIgcgDUsNAUEAIQIgBkEANgKACCAGQQA2AqgIIAZBgAhqIgMgECAQIBFBA3RqEEMgBkH4CGogA0EwEL4CGiAGQYAJaiEIIAYoAvgIIRACQCAGKAL8CCIDIAYoAqAJIgUgBUEESyIEGyILBEAgBigCgAkhEQNAIAMgBSAEQQFxIg8bIQQgC0EDdCARIAggDxtqQQhrKQMAQgBSDQIgBARAIAZB+AhqQQRBKCAPG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgsNAAsLQQAhBAsgBkHoAGogCEEYaiILKQMANwMAIAZB4ABqIAhBEGoiDykDADcDACAGQdgAaiAIQQhqKQMANwMAIAYgCCkDADcDUCAGIAYoAqQJNgJ0IAYgBTYCcCAGIAM2AkwgBiAQNgJIIAZBAkEBIAQbOgB4IAZBADYCgAggBkEANgKoCCAGQYAIaiIDIAwgB0EDdGogDCANQQN0ahBDIAZB+AhqIANBMBC+AhogBigC+AghDQJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgxFDQAgBigCgAkhEANAIAMgBSAEQQFxIgcbIQQgDEEDdCAQIAggBxtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAHG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgwNAAsLIAZBoAFqIAspAwA3AwAgBkGYAWogDykDADcDACAGQZABaiAIQQhqKQMANwMAIAYgCCkDADcDiAEgBiAGKAKkCTYCrAEgBiAFNgKoASAGIAM2AoQBIAYgDTYCgAEgBkECQQEgAhs6ALABIAkgEk0NAiAJIAprIgIgCiACIApJGyEMQQAhAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA4gCkEDdGoiDRBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCEPAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiB0UNACAGKAKACSEQA0AgAyAFIARBAXEiCxshBCAHQQN0IBAgCCALG2pBCGspAwBQRQRAIAQhAgwCCyAEBEAgBkH4CGpBBEEoIAsbaiAEQQFrNgIAIAYoAqAJIQUgBigC/AghAwsgAyAFIAVBBEsiBBsiBw0ACwsgBkHYAWogCEEYaikDADcDACAGQdABaiAIQRBqKQMANwMAIAZByAFqIAhBCGopAwA3AwAgBiAIKQMANwPAASAGIAYoAqQJNgLkASAGIAU2AuABIAYgAzYCvAEgBiAPNgK4ASAGQQJBASACGzoA6AEgCiAMaiIPIAlLDQNBACECIAZBADYCgAggBkEANgKoCCAGQYAIaiIDIA0gDSAMQQN0ahBDIAZB+AhqIANBMBC+AhogBkGACWohCCAGKAL4CCENAkAgBigC/AgiAyAGKAKgCSIFIAVBBEsiBBsiBwRAIAYoAoAJIQsDQCADIAUgBEEBcSIMGyEEIAdBA3QgCyAIIAwbakEIaykDAEIAUg0CIAQEQCAGQfgIakEEQSggDBtqIARBAWs2AgAgBigCoAkhBSAGKAL8CCEDCyADIAUgBUEESyIEGyIHDQALC0EAIQQLIAZBkAJqIAhBGGopAwA3AwAgBkGIAmogCEEQaikDADcDACAGQYACaiAIQQhqKQMANwMAIAYgCCkDADcD+AEgBiAGKAKkCTYCnAIgBiAFNgKYAiAGIAM2AvQBIAYgDTYC8AFBASELIAZBAkEBIAQbOgCgAiAGQQA2AoAIIAZBADYCqAggBkGACGoiAyAOIA9BA3RqIA4gCUEDdGoQQyAGQfgIaiADQTAQvgIaIAZBgAlqIQkgBigC+AghDgJAIAYoAvwIIgMgBigCoAkiBSAFQQRLIgQbIgdFDQAgBigCgAkhDANAIAMgBSAEQQFxIggbIQQgB0EDdCAMIAkgCBtqQQhrKQMAUEUEQCAEIQIMAgsgBARAIAZB+AhqQQRBKCAIG2ogBEEBazYCACAGKAKgCSEFIAYoAvwIIQMLIAMgBSAFQQRLIgQbIgcNAAsLIAZByAJqIAlBGGopAwA3AwAgBkHAAmogCUEQaikDADcDACAGQbgCaiAJQQhqKQMANwMAIAYgCSkDADcDsAIgBiAGKAKkCTYC1AIgBiAFNgLQAiAGIAM2AqwCIAYgDjYCqAIgBkECQQEgAhs6ANgCIAZB4AJqIgIgBkEQaiAGQYABahAhIAZBmANqIgMgBkG4AWogBkGoAmoQISAGQdADaiACIAZByABqEB8gBkGIBGogAyAGQfABahAfAkAgBi0AQCICQQFGDQACQAJAAkAgBi0A6AEiC0EBaw4CAwEACyACDQFBAiELDAILQQIhCyACDQELQQAhCwsgBkH4CGoiAiAGKAI4IgVBBUkEfyAGQRhqBSAGKAIUIQUgBigCGAsgBSAGKALgASIDQQVJBH8gBkHAAWoFIAYoArwBIQMgBigCwAELIAMQcCAGQcAEaiALIAIQQkEBIQUCQCAGLQCwASICQQFGDQACQAJAAkAgBi0A2AIiBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAKoASIDQQVJBH8gBkGIAWoFIAYoAoQBIQMgBigCiAELIAMgBigC0AIiBEEFSQR/IAZBsAJqBSAGKAKsAiEEIAYoArACCyAEEHAgBkH4BGogBSACEEIgBkGACGoiAyAGQeACakE4EL4CGiACIAZByABqQTgQvgIaIAZBkAdqIAMgAhApIAMgBkGYA2pBOBC+AhogAiAGQfABakE4EL4CGiAGQcgHaiADIAIQKUEBIQUCQCAGLQDAByICQQFGDQACQAJAAkAgBi0A+AciBUEBaw4CAwEACyACDQFBAiEFDAILQQIhBSACDQELQQAhBQsgBkH4CGoiAiAGKAK4ByIDQQRNBH8gBkGYB2oFIAYoApQHIQMgBigCmAcLIAMgBigC8AciBEEETQR/IAZB0AdqBSAGKALMByEEIAYoAtAHCyAEEHAgBkGwBWogBSACEEIgBkGQB2oQjwIgBkHIB2oQjwJBASEFAkAgBi0AgAQiAkEBRg0AAkACQAJAIAYtALgEIgVBAWsOAgMBAAsgAg0BQQIhBQwCC0ECIQUgAg0BC0EAIQULIAZB+AhqIgIgBigC+AMiA0EETQR/IAZB2ANqBSAGKALUAyEDIAYoAtgDCyADIAYoArAEIgRBBE0EfyAGQZAEagUgBigCjAQhBCAGKAKQBAsgBBBwIAZB6AVqIAUgAhBCIAZBgAhqIgMgBkHQA2pBOBC+AhogAiAGQYABakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQMDQCAFIBUgBSkDACIVQgGGIhd8IhY3AwAgFiAXVK0gFUI/iHwhFSAFQQhqIQUgA0EIayIDDQALIBVQDQBBBCEDAn8gBigCoAkiBEEETQRAIAZBgAlqIQcgBAwBCyAGQfgIakEEciECIAYoAoAJIQcgBCEDIAYoAvwICyEFIAMgBUYEQCAGQfgIaiICEKABIAYoAvwIIQUgBigCgAkhByACQQRyIQILIAcgBUEDdGogFTcDACACIAIoAgBBAWo2AgALIAZBkAdqIgQgBkH4CGoiAkEwEL4CGiAGQYAIaiIDIAkgBBBCIAIgBkEQakE4EL4CGiAEIAMgAhAlIAMgBkGIBGpBOBC+AhogAiAGQagCakE4EL4CGiAGQcgHaiIEIAMgAhApIAYtAPgHIQkgAiAEQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQdgGaiIDIAZB+AhqIgJBMBC+AhogBkGACGoiBCAJIAMQQiACIAZBuAFqQTgQvgIaIAZByAdqIAQgAhAlQQEhBQJAIAYtAMAHIgJBAUYNAAJAAkACQCAGLQD4ByIFQQFrDgIDAQALIAINAUECIQUMAgtBAiEFIAINAQtBACEFCyAGQYAIaiIJIAYoArgHIgNBBE0EfyAGQZgHagUgBigClAchAyAGKAKYBwsgAyAGKALwByIEQQRNBH8gBkHQB2oFIAYoAswHIQQgBigC0AcLIAQQcCAGQfgIaiIDIAUgCRBCIAZBkAdqIgQQjwIgBkHIB2oiBRCPAiAJIAMgBkGwBWoiCBAtIAYtALAIIQIgBSAJQTAQvgIaIAMgBUIDEE0gBCADQTAQvgIaIAZBoAZqIgcgAiAEEEIgAyAIQTgQvgIaIAkgAyAGQegFaiIJEC0gBi0AsAghAiAGQcgHaiAGQYAIakEwEL4CGiADIAVCAhBNIAZBkAdqIAZB+AhqQTAQvgIaIAZB2AZqIAIgBBBCIAMgCUE4EL4CGiAEIAMgBkHABGoQLSADIAdBOBC+AhogBi0AqAkiAkEBRgRAIAYtAMAHIQIgBigCuAciA0EETQR/IAZBmAdqBSAGKAKUByEDIAYoApgHCyEFIAZBADYCyAcgBkEANgLwByAGQcgHaiIEIAUgBSADQQN0ahBDIAZBgAhqIARBMBC+AhogBiACOgCwCAwLCwJAAkACQAJAIAYtAMAHIgNBAWsOAgABAgsgBkGACGogBkGgBmpBMBC+AhogBkG0CGogBkGsCWooAAA2AAAgBkECIAJrOgCwCCAGIAYoAKkJNgCxCAwOCyACRQ0BDAsLIAJFDQoLIAZBgAhqIgIgBkGgBmpBMBC+AhogBkHIB2oiBCACIAZBkAdqEBQgAiADIAQQQgwLCyAJIA1BAXYiCkkNAyAMIApBA3QiAmohECAGQfgIaiIDIAkgCmsiESANIAprIhJqQQFqIhMQfCAGQZAHaiADQTAQvgIaIAIgDmohFCAGQbgHaiEJIAYoArgHIgVBBE0EfyAGQZgHagUgBigClAchBSAGKAKYBwsgBSAQIBIgFCAREAYgBkGQB2pBBHIhCCAGQZgHaiEEIAYoApgHIQcDQCAEIQIgBigCuAciBSEDIAVBBUkiC0UEQCAGKAKUByEDIAchAgsCQCADRQ0AIANBA3QgAmpBCGspAwBCAFINACAJIQMgC0UEQCAGKAKUByEFIAghAwsgBUUNASADIAVBAWs2AgAMAQsLIAEgCkkNBCAEIQMgACAKQQN0aiIPIAEgCmsiCyAFQQVPBH8gBigClAchBSAHBSADCyAFEHggASANQX5xIgJJDQUgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAAgAkEDdGogASACayAFIAMQeCAJIQMgBigCuAciBUEFTwRAIAYoApQHIQUgCCEDCyAFBEAgA0EANgIACyAGQZAHaiATEEkgBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIAUgAyAMIAogDiAKEAYgBigCmAchBwNAIAQhAiAGKAK4ByIFIQMgBUEFSSINRQRAIAYoApQHIQMgByECCwJAIANFDQAgA0EDdCACakEIaykDAEIAUg0AIAkhAyANRQRAIAYoApQHIQUgCCEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBCEDIAAgASAFQQVPBH8gBigClAchBSAHBSADCyAFEHggBCEFIAYoArgHIgNBBU8EQCAGKAKYByEFIAYoApQHIQMLIA8gCyAFIAMQeCAGQfgIaiICIBAgEiAMIAoQGyAGLQD4CCEAIAZByAdqIAZBgAlqIgFBMBC+AhogAiAUIBEgDiAKEBsgBi0A+AghAiAGQYAIaiABQTAQvgIaIABBAUYNBwJAAkACQCACQQFrDgIKAAELIAANAQwICyAADQcLIAkhAyAGKAK4ByIFQQVPBEAgBigClAchBSAIIQMLIAUEQCADQQA2AgALIAZBkAdqIBMQSSAEIQUgBigCuAciA0EFTwRAIAYoApgHIQUgBigClAchAwsgBSADIAYoAvAHIgBBBE0EfyAGQdAHagUgBigCzAchACAGKALQBwsgACAGKAKoCCICQQRNBH8gBkGICGoFIAYoAoQIIQIgBigCiAgLIAIQBiAGKAKYByEBA0AgBCEAIAYoArgHIgUhAyAFQQVJIgJFBEAgBigClAchAyABIQALAkAgA0UNACADQQN0IABqQQhrKQMAQgBSDQAgCSEDIAJFBEAgBigClAchBSAIIQMLIAVFDQEgAyAFQQFrNgIADAELCyAPIAsgBUEFTwR/IAYoApQHIQUgAQUgBAsgBRBMDAcLIAcgDUGI9MAAELgBAAsgCiAJQZj0wAAQuAEACyAPIAlBqPTAABC4AQALQYmYwgBBI0HY88AAEN4BAAsgCiABQejzwAAQuQEACyACIAFB+PPAABC5AQALIA8gCyAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIAUgBigCqAgiA0EETQR/IAZBiAhqBSAGKAKECCEDIAYoAogICyADEAYLIAZBgAhqEI8CIAZByAdqEI8CIAZBkAdqEI8CDAgLAkACQAJAAkAgBigCuAciBUEETQR/IAZBmAdqBSAGKAKUByEFIAYoApgHCyAFIAYoAqAJIgRBBE0EfyAGQYAJagUgBigC/AghBCAGKAKACQsgBBCoAUH/AXEOAgECAAsgBkGACGoiAiAGQaAGakEwEL4CGiACIAZBkAdqEHUgBkHIB2oiBCACQTAQvgIaIAJBAiADayAEEEIMBAsgBkECNgLACCAGQgQ3ArgIIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAZBuAhqEDMgBkGACGoiAyACQTAQvgIaIANBBHIhAiAGQYgIaiEJIAZBqAhqIQggBigCiAghBwNAIAkhBCAGKAKoCCIFIQMgBUEFSSIORQRAIAchBCAGKAKECCEDCwJAIANFDQAgA0EDdCAEakEIaykDAEIAUg0AIAghAyAORQRAIAYoAoQIIQUgAiEDCyAFRQ0BIAMgBUEBazYCAAwBCwsgBkG4CGogBkGACGoiAkEwEL4CGiAGQoCAgIAgNwLwCCAGQYyswgA2AuwIIAZBADYCgAggBkEANgKoCCACIAZB7AhqEDMgBkHIB2ogAkEwEL4CGiAGKALwByIFQQRNBH8gBkHQB2oFIAYoAswHIQUgBigC0AcLIQQgBkG4CGogBRDQASAGKALgCCIDQQRNBH8gBkHACGoFIAYoArwIIQMgBigCwAgLIAMgBUcNBCAGQeAIaiEJIAQgBUEDdBC+AhogBkG4CGpBBHIhAiAGQcAIaiEIIAYoAsAIIQcDQCAIIQQgBigC4AgiBSEDIAVBBUkiDkUEQCAHIQQgBigCvAghAwsgA0UNAiADQQN0IARqQQhrKQMAQgBSDQIgCSEDIA5FBEAgBigCvAghBSACIQMLIAVFDQAgAyAFQQFrNgIADAALAAsgBkGACGoiAiAGQaAGakEwEL4CGiAGQcgHaiIEIAZBkAdqIAIQGiACIAMgBBBCDAILIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CCyAGLQCwCCECIAZByAdqIgMgBkGACGpBMBC+AhogBkH4CGoiBCADQgIQTSAGQbgIaiIFIARBMBC+AhogAyACIAUQQiAGKAKgBSIDQQRNBH8gBkGABWoFIAYoAvwEIQMgBigCgAULIQUgBi0AqAUhCSAGQQA2AoAIIAZBADYCqAggBkGACGoiAiAFIAUgA0EDdGoQQyAGQfgIaiACQTAQvgIaIAYoAqAJIgNBBE0EfyAGQYAJagUgBigC/AghAyAGKAKACQshBQJAIANFDQAgBkGgCWohAiADQQN0IQNCACEVA0AgBSAVIAUpAwAiFUIBhiIXfCIWNwMAIBYgF1StIBVCP4h8IRUgBUEIaiEFIANBCGsiAw0ACyAVUA0AQQQhAwJ/IAYoAqAJIgRBBE0EQCAGQYAJaiEHIAQMAQsgBkH4CGpBBHIhAiAGKAKACSEHIAQhAyAGKAL8CAshBSADIAVGBEAgBkH4CGoiAhCgASAGKAL8CCEFIAYoAoAJIQcgAkEEciECCyAHIAVBA3RqQgE3AwAgAiACKAIAQQFqNgIACyAGQYAIaiIDIAZB+AhqIgJBMBC+AhogAiAJIAMQQiAGQaAGaiAGQcgHaiACECkgAiAGQZAHaiICQTgQvgIaIAYtAIgHIgVBAUYEQCADIAJBOBC+AhoMBAsCQAJAAkACQAJAIAYtAKgJIgNBAWsOAgABAgsgBigCgAciBEEETQR/IAZB4AZqBSAGKALcBiEEIAYoAuAGCyEDIAZBADYCyAcgBkEANgLwByAGQcgHaiICIAMgAyAEQQN0ahBDIAZBgAhqIAJBMBC+AhogBiAFOgCwCAwDCyAFRQ0BDAULIAVFDQQLAkACQAJAAkAgBigCoAkiBEEETQR/IAZBgAlqBSAGKAL8CCEEIAYoAoAJCyAEIAYoAoAHIgJBBE0EfyAGQeAGagUgBigC3AYhAiAGKALgBgsgAhCoAUH/AXEOAgECAAsgBkGACGoiAiAGQZAHakEwEL4CGiAGQcgHaiIDIAZB2AZqIAIQGiACIAUgAxBCDAcLIAZBAjYCwAggBkIENwK4CCAGQQA2AsgHIAZBADYC8AcgBkHIB2oiAiAGQbgIahAzIAZBgAhqIgMgAkEwEL4CGiADQQRyIQIgBkGICGohCSAGQagIaiEIIAYoAogIIQcDQCAJIQQgBigCqAgiBSEDIAVBBUkiDkUEQCAHIQQgBigChAghAwsCQCADRQ0AIANBA3QgBGpBCGspAwBCAFINACAIIQMgDkUEQCAGKAKECCEFIAIhAwsgBUUNASADIAVBAWs2AgAMAQsLIAZBuAhqIAZBgAhqIgJBMBC+AhogBkKAgICAIDcC8AggBkGMrMIANgLsCCAGQQA2AoAIIAZBADYCqAggAiAGQewIahAzIAZByAdqIAJBMBC+AhogBigC8AciBUEETQR/IAZB0AdqBSAGKALMByEFIAYoAtAHCyEEIAZBuAhqIAUQ0AEgBigC4AgiA0EETQR/IAZBwAhqBSAGKAK8CCEDIAYoAsAICyADIAVHDQQgBkHgCGohCSAEIAVBA3QQvgIaIAZBuAhqQQRyIQIgBkHACGohCCAGKALACCEHA0AgCCEEIAYoAuAIIgUhAyAFQQVJIg5FBEAgByEEIAYoArwIIQMLIANFDQIgA0EDdCAEakEIaykDAEIAUg0CIAkhAyAORQRAIAYoArwIIQUgAiEDCyAFRQ0AIAMgBUEBazYCAAwACwALIAZBgAhqIgIgBkGQB2pBMBC+AhogAiAGQdgGahB1IAZByAdqIgQgAkEwEL4CGiACIAMgBBBCDAULIAZByAdqEI8CIAZBgAhqIAZBuAhqQTAQvgIaIAZBAToAsAgLIAZB+AhqEI8CDAMLIAMgBUH88cAAELsBAAsgAyAFQfzxwAAQuwEACyAGQYAIaiICIAZBkAdqQTAQvgIaIAZByAdqIgQgAiAGQdgGahAUIAIgAyAEEEILIAZB+AhqIgIgBkGACGoiAyAGQfgEahAtIAZBkAdqIAJBOBC+AhogAiAGQdgGaiIEQTgQvgIaIAMgAiAGQaAGahAtIAQgA0E4EL4CGiAAIAEgBigC6AQiBUEETQR/IAZByARqBSAGKALEBCEFIAYoAsgECyAFEHggBkH4CGoiAiAGQdgGakE4EL4CGiAGQYAIaiACIApBBnQQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZBkAdqQTgQvgIaIAIgAyAKQQd0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqIgIQjwIgBkH4CGoiAyAGQaAGakE4EL4CGiACIAMgCkHAAWwQGCAAIAEgBigCqAgiBUEETQR/IAZBiAhqBSAGKAKECCEFIAYoAogICyAFEHggBkGACGoiAhCPAiAGQfgIaiIDIAZB+ARqQTgQvgIaIAIgAyAKQQh0EBggACABIAYoAqgIIgVBBE0EfyAGQYgIagUgBigChAghBSAGKAKICAsgBRB4IAZBgAhqEI8CIAZBwARqEI8CDAELIA1FDQAgDCANQQN0aiEKIAFBA3QhAiAJQQN0IQgDQCABIAdJDQICQCAMKQMAIhhQDQAgCSABIAdrSw0EIAlFDQAgACEFIA4hAyAJIQRCACEVA0AgBiADKQMAQgAgGBCwASAFIBUgBSkDAHwiFiAGKQMAfCIZNwMAIBYgGVatIAZBCGopAwAgFSAWVq18fCEVIAVBCGohBSADQQhqIQMgBEEBayIEDQALIBVQDQAgCCEFA0AgAiAFRg0GIAAgBWoiAyAVIAMpAwB8IhY3AwAgBUEIaiEFIBcgFSAWVq18IRUgFUIAUg0ACwsgB0EBaiEHIAJBCGshAiAAQQhqIQAgDEEIaiIMIApHDQALCyAGQbAJaiQADwsgByABQcjzwAAQuQEAC0GJmMIAQSNBgPPAABDeAQALQZDzwABBJUG488AAENEBAAuxtQEDIH8IfgF8IwBBoANrIgUkACAFIAE2AsgBIAUgATYCxAEgBSAANgLAASAFQSBqIAVBwAFqIgAQxAEgBSgCICEbIAUoAiQhHCAFIAM2AsgBIAUgAzYCxAEgBSACNgLAASAFQRhqIAAQxAEgBSgCGCEdIAVBEGogBSgCHCIVEOABIAUoAhQhIyAFKAIQIB0gFRC+AiEZIAVB0AFqQgA3AgAgBUGAAToA2AEgBUKAgICAEDcCyAEgBSAcNgLEASAFIBs2AsABIAVB4ABqIAAQCQJAAkACfwJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAIAUtAGBBBkcEQCAFQfACaiAFQfAAaikDADcDACAFQegCaiAFQegAaikDADcDACAFIAUpA2A3A+ACAkAgBSgCyAEiASAFKALEASIDSQRAIAUoAsABIQIDQCABIAJqLQAAQQlrIgBBF0tBASAAdEGTgIAEcUVyDQIgAyABQQFqIgFHDQALIAUgAzYCyAELIAVB0AJqIAVB8AJqKQMANwMAIAUgBS8B4gI7AbACIAUgBSkD6AI3A8gCIAUtAOECIQAgBS0A4AIhAiAFKALkAiEBIAUoAtABBEAgBSgCzAEQIgsgAkEGRg0EIAVBQGsgBUHQAmopAwA3AwAgBSABNgI0IAUgBS8BsAI7ATIgBSAFKQPIAjcDOCAFIAA6ADEgBSACOgAwIAVBMGoiEyEMIwBBkAdrIgQkACAEQYAGaiIAQZzWwABBgAEQSyAEQeAGaiIIQZzXwABBBBBLIARBsAZqIABBMBC+AhogBCgCsAYhDQJAAkACQAJAAkACfyAEKALYBiIBQQVPBEAgBCgCtAYiAkUNAiAEKAK4BgwBCyABRQ0BIAEhAiAEQbgGagshACACQQZ0IAJBA3QgAGpBCGspAwB5p2tBgCBNDQBBCyEADAELIARB6AZqIgYhAiAEQYgHaigCACIHIQAgB0EFTwRAIAQoAugGIQIgBEHkBmooAgAhAAsgAARAIABBA3QhA0EBIQADQCAAQQFxRQRAQQ0hAAwDCyACKQMAICV8ISVBACEAIAJBCGohAiADQQhrIgMNAAsLIAYhAiAHIgNBBU8EQCAEQeQGaigCACEDIAQoAugGIQILAn8CQCABQQVPBEAgAiADIAQoArgGIAQoArQGEKgBQf8BcUECTw0BQQghAAwDC0EIIQAgAiADIARBuAZqIgIgARCoAUH/AXFBAkkNAiACDAELIAQoArQGIQEgBCgCuAYLQQghACABRQ0ALQAAQQFxRQ0AQQkhACAHQQVPBH8gBCgC6AYhBiAEQeQGaigCAAUgBwtFDQAgBi0AAEEBcUUNACAlQgJUBEBBDCEADAELICVCgICAgCBUDQFBDSEACyAEQbAGaiIBEI8CIAgQjwJBuLHCAC0AABpBPBAKIgJFDQEgAiAlNwIEIAIgADYCACACQQxqIARBmAJqQTAQvgIaIARCBDcCuAYgBEGY5cAANgK0BiAEIAI2ArAGIAFBoNfAABAuQbDXwAAQWiECDAILIAQoArQGIQIgBCkDuAYhJCAEQZgCaiIAIARBwAZqQdAAEL4CGiAEQcgBaiIBIABB0AAQvgIaIARB+ABqIgAgAUHQABC+AhogBCAkNwMgIARBKGogAEHQABC+AhogBCACNgIcIAQgDTYCGAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgDEHA18AAQRIQcyIBBEAgAS0AAEEDRiIARQ0HIAEoAgRBACAAGyEKIARBsAZqIAFBDGooAgAiC0ECdiALQQNxQQBHakEDbBDMASAEKAK4BiEQIAQoArAGIRYgC0EHcSIAIQMgAA4GAQIDBAUCBgtBuLHCAC0AABpBARAKIgBFDQ4gAEEBOgAAIARCBDcCuAYgBEGw5cAANgK0BiAEIAA2ArAGIARBsAZqQaTYwAAQLiECDA0LQQghAwwEC0IBISUgC0UNCiAKIAtBAWsiAGotAAAiAUE9Rg0KIAFBkNrAAGotAABB/wFHDQogAa1CCIYgAK1CIIaEISUMCgtBCiEDDAILQQshAwwBC0EMIQMLIAtBA3YgAEEAR2ohEUEAIQEgCyADayIAQQAgACALTRsiDUEgSQRAQQAhAwwGCyANQSBrIQJBACEDQQAhCAJAA0AgCEFgRg0DIAhBIGoiASALSw0EIANBGmoiACAQSw0FAkACQCAIIApqIg4tAAAiB0GQ2sAAajEAACIpQv8BUQ0AIA5BAWotAAAiB0GQ2sAAajEAACIoQv8BUQRAIAhBAXIhCAwBCyAOQQJqLQAAIgdBkNrAAGoxAAAiJUL/AVEEQCAIQQJyIQgMAQsgDkEDai0AACIHQZDawABqMQAAIipC/wFRBEAgCEEDciEIDAELIA5BBGotAAAiB0GQ2sAAajEAACImQv8BUQRAIAhBBHIhCAwBCyAOQQVqLQAAIgdBkNrAAGoxAAAiJEL/AVEEQCAIQQVyIQgMAQsgDkEGai0AACIHQZDawABqMQAAIitC/wFRBEAgCEEGciEIDAELIA5BB2otAAAiB0GQ2sAAajEAACInQv8BUg0BIAhBB3IhCAsgB61CCIYgCK1CIIaEISUMCQsgAyAWaiIAIChCNIYgKUI6hoQiKCAlQi6GhCIlICpCKIaEICZCIoaEIiYgJEIchoQiJCArQhaGhCAnQhCGhCInQoD+A4NCKIYgJ0KAgPwHg0IYhiAnQoCAgPgPg0IIhoSEICRCCIhCgICA+A+DICZCGIhCgID8B4OEICVCKIhCgP4DgyAoQjiIhISENwAAQQghByAOQQhqLQAAIgZBkNrAAGoxAAAiKUL/AVENBkEJIQcgDkEJai0AACIGQZDawABqMQAAIihC/wFRDQZBCiEHIA5BCmotAAAiBkGQ2sAAajEAACIlQv8BUQ0GQQshByAOQQtqLQAAIgZBkNrAAGoxAAAiKkL/AVENBkEMIQcgDkEMai0AACIGQZDawABqMQAAIiZC/wFRDQZBDSEHIA5BDWotAAAiBkGQ2sAAajEAACIkQv8BUQ0GQQ4hByAOQQ5qLQAAIgZBkNrAAGoxAAAiK0L/AVENBkEPIQcgDkEPai0AACIGQZDawABqMQAAIidC/wFRDQYgAEEGaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEQIQcCQCAOQRBqLQAAIgZBkNrAAGoxAAAiKUL/AVENAEERIQcgDkERai0AACIGQZDawABqMQAAIihC/wFRDQBBEiEHIA5BEmotAAAiBkGQ2sAAajEAACIlQv8BUQ0AQRMhByAOQRNqLQAAIgZBkNrAAGoxAAAiKkL/AVENAEEUIQcgDkEUai0AACIGQZDawABqMQAAIiZC/wFRDQBBFSEHIA5BFWotAAAiBkGQ2sAAajEAACIkQv8BUQ0AQRYhByAOQRZqLQAAIgZBkNrAAGoxAAAiK0L/AVENAEEXIQcgDkEXai0AACIGQZDawABqMQAAIidC/wFRDQAgAEEMaiAoQjSGIClCOoaEIiggJUIuhoQiJSAqQiiGhCAmQiKGhCImICRCHIaEIiQgK0IWhoQgJ0IQhoQiJ0KA/gODQiiGICdCgID8B4NCGIYgJ0KAgID4D4NCCIaEhCAkQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAlQiiIQoD+A4MgKEI4iISEhDcAAEEYIQcgDkEYai0AACIGQZDawABqMQAAIilC/wFRDQJBGSEHIA5BGWotAAAiBkGQ2sAAajEAACIoQv8BUQ0CQRohByAOQRpqLQAAIgZBkNrAAGoxAAAiJUL/AVENAkEbIQcgDkEbai0AACIGQZDawABqMQAAIipC/wFRDQJBHCEHIA5BHGotAAAiBkGQ2sAAajEAACImQv8BUQ0CQR0hByAOQR1qLQAAIgZBkNrAAGoxAAAiJEL/AVENAkEeIQcgDkEeai0AACIGQZDawABqMQAAIitC/wFRDQJBHyEHIA5BH2otAAAiBkGQ2sAAajEAACInQv8BUQ0CIABBEmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEEayERIANBGGohAyABIQggASACSw0IDAELCyAGrUIIhiAHIAhyrUIghoQhJQwHCyAGrUIIhiAHIAhyrUIghoQhJQwGC0G4scIALQAAGkEBEAoiAEUNByAAQQE6AAAgBEIENwK4BiAEQbDlwAA2ArQGIAQgADYCsAYgBEGwBmpBpNjAABAuIQIMBgtBYEEAQeSOwAAQugEACyABIAtB5I7AABC4AQALIAAgEEH0jsAAELgBAAsgBq1CCIYgByAIcq1CIIaEISUMAQsCQAJAIA1BCEkNACABIA1BCGsiAE8NAAJAAkACQAJAAkADQCABQQhqIQYgAUF4Rg0CIAYgC0sNAyADQQhqIQIgA0F3Sw0EIAIgEEsNBSABIApqIgctAAAiAkGQ2sAAajEAACIpQv8BUQ0BIAdBAWotAAAiAkGQ2sAAajEAACIoQv8BUQRAIAFBAXIhAQwCCyAHQQJqLQAAIgJBkNrAAGoxAAAiJUL/AVEEQCABQQJyIQEMAgsgB0EDai0AACICQZDawABqMQAAIipC/wFRBEAgAUEDciEBDAILIAdBBGotAAAiAkGQ2sAAajEAACImQv8BUQRAIAFBBHIhAQwCCyAHQQVqLQAAIgJBkNrAAGoxAAAiJEL/AVEEQCABQQVyIQEMAgsgB0EGai0AACICQZDawABqMQAAIitC/wFRBEAgAUEGciEBDAILIAdBB2otAAAiAkGQ2sAAajEAACInQv8BUgRAIAMgFmogKEI0hiApQjqGhCIoICVCLoaEIiUgKkIohoQgJkIihoQiJiAkQhyGhCIkICtCFoaEICdCEIaEIidCgP4Dg0IohiAnQoCA/AeDQhiGICdCgICA+A+DQgiGhIQgJEIIiEKAgID4D4MgJkIYiEKAgPwHg4QgJUIoiEKA/gODIChCOIiEhIQ3AAAgEUEBayERIANBBmohAyAAIAYiAU0NCAwBCwsgAUEHciEBCyABrUIghiACrUIIhoQhJQwGC0F4IAZBhI/AABC6AQALIAYgC0GEj8AAELgBAAsgAyACQZSPwAAQugEACyACIBBBlI/AABC4AQALIAEhBgsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBFBAkkEQCADIQcMAQsgEUEBayEIQQAgBmshEQNAIAYgC0sNBSADQQZqIQcgA0F5Sw0GIAcgEEsNByAGIAtGDQggBiAKaiIBLQAAIgJBkNrAAGoxAAAiKUL/AVENFSALIBFqIgBBAkkNCSABQQFqLQAAIgJBkNrAAGoxAAAiKkL/AVENAyAAQQJNDQogAUECai0AACICQZDawABqMQAAIitC/wFRDQsgAEEDTQ0MIAFBA2otAAAiAkGQ2sAAajEAACInQv8BUQ0NIABBBE0NDiABQQRqLQAAIgJBkNrAAGoxAAAiKEL/AVENDyAAQQVNDRAgAUEFai0AACICQZDawABqMQAAIiVC/wFRDREgAEEGTQ0SIAFBBmotAAAiAkGQ2sAAajEAACImQv8BUQ0TIABBB00NFCABQQdqLQAAIgJBkNrAAGoxAAAiJEL/AVENAiADIBZqIgAgKkI0hiApQjqGhCArQi6GhCAnQiiGhCAoQiKGhCAlQhyGhCAmQhaGhCImQgiIQoCAgPgPgyAmQhiIQoCA/AeDhCAmQiiIQoD+A4MgJkI4iISEPgAAIABBBGogJiAkQhCGhCIkQoCA/AeDQhiGICRCgICA+A+DQgiGhEIgiD0AACARQQhrIREgBkEIaiEGIAchAyAIQQFrIggNAAsLIAYgC0sNAiAGIAtGBEBCACEmQQAhAEEAIRFBACECDBYLIAogC2ohCyAGIApqIQNBACERQgAhJkEAIQFBACENQQAhCANAQQAhAgNAIAIgCGohDiACIANqIgotAAAiAEE9RwRAAkAgAkUEQCAAQZDawABqMQAAIiRC/wFRDQEgDkEBaiEIICQgEUEBaiIRQTpsQT5xrYYgJoQhJkEAIQIgACENIApBAWoiAyALRw0EDBoLIAEgBmqtQiCGQoD6AIQhJQwaCyAArUIIhiAGIA5qrUIghoQhJQwZCyABIA4gAhshASAOQQJxBEAgAyACQQFqIgJqIAtGDRcMAQsLCyABIAZqrUIghkKA+gCEISUMFgsgBkEHaiEGDBILIAZBAWohBgwRCyAGIAtBiIrAABC5AQALIAYgC0Gkj8AAELkBAAsgAyAHQbSPwAAQugEACyAHIBBBtI/AABC4AQALQQBBAEHEj8AAELcBAAtBAUEBQdSPwAAQtwEAC0ECQQJB5I/AABC3AQALIAZBAmohBgwJC0EDQQNB9I/AABC3AQALIAZBA2ohBgwHC0EEQQRBhJDAABC3AQALIAZBBGohBgwFC0EFQQVBlJDAABC3AQALIAZBBWohBgwDC0EGQQZBpJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIgA0UNAiADQQFrIQMgAkGYA2ohAgwACwALQYCXwgBBK0GYksIAEN4BAAsgAUIANwIIIAEgAjYCBCABQQE2AgBBAAsiBSACLwGSA0kEQCACIQMMAQsDQCACKAKIAiIDBEAgAi8BkAMhBSACECIgBEEBaiEEIAMiAi8BkgMgBU0NAQwCCwsgAhAiQYCXwgBBK0H4kcIAEN4BAAsgBUEBaiEGAkAgBEUEQCADIQIMAQsgAyAGQQJ0akGYA2ooAgAhAkEAIQYgBEEBayIHRQ0AA0AgAigCmAMhAiAHQQFrIgcNAAsLIAEgBjYCDCABQQA2AgggASACNgIEIAAgBTYCCCAAIAQ2AgQgACADNgIAC7MEAQl/IwBBEGsiCCQAIAEgASgCCCIGQQFqIgc2AggCQAJAIAEoAgQiBSAHSwRAIAcgBWshCiABKAIAIQlBACEGAkACfwNAIAcgCWotAAAiC0EwayIMQf8BcSINQQpPBEAgBgRAIAQgBmoiBCALQSByQeUARw0DGiAAIAEgAiADIAQQNwwGCyAIIAkgBSAFIAdBAWoiASABIAVLGxC2AUG4scIALQAAGiAIKAIEIQIgCCgCACEEQRQQCiIBRQ0GIAEgBDYCDCABQQ02AgAgACABNgIEIABBATYCACABIAI2AhAMBQsgDUEFSyADQpmz5syZs+bMGVJyIANCmLPmzJmz5swZVnENAiABIAdBAWoiBzYCCCAGQQFrIQYgA0IKfiAMrUL/AYN8IQMgBSAHRw0ACyAEIApqCyEEIAAgASACIAMgBBBTDAILIAQgBmohBQJAAkACQCABKAIIIgQgASgCBCIHTw0AIAEoAgAhBgNAIAQgBmotAAAiCUEwa0H/AXFBCU0EQCABIARBAWoiBDYCCCAEIAdHDQEMAgsLIAlBIHJB5QBGDQELIAAgASACIAMgBRBTDAELIAAgASACIAMgBRA3CwwBCyAIQQhqIAEoAgAgBSAFIAZBAmoiASABIAVLGxC2AUG4scIALQAAGiAIKAIMIQIgCCgCCCEEQRQQCiIBRQ0BIAEgBDYCDCABQQU2AgAgACABNgIEIABBATYCACABIAI2AhALIAhBEGokAA8LAAu5AwEFfwJAIABCgICAgBBUBEAgASECDAELIAFBCGsiAiAAIABCgMLXL4AiAEKAvqjQD358pyIDQZDOAG4iBEGQzgBwIgVB5ABuIgZBAXRB+onCAGovAAA7AAAgAUEEayADIARBkM4AbGsiA0H//wNxQeQAbiIEQQF0QfqJwgBqLwAAOwAAIAFBBmsgBSAGQeQAbGtB//8DcUEBdEH6icIAai8AADsAACABQQJrIAMgBEHkAGxrQf//A3FBAXRB+onCAGovAAA7AAALAkAgAKciAUGQzgBJBEAgASEDDAELIAJBBGshAgNAIAIgAUGQzgBuIgNB8LF/bCABaiIEQeQAbiIFQQF0QfqJwgBqLwAAOwAAIAJBAmogBCAFQeQAbGtBAXRB+onCAGovAAA7AAAgAkEEayECIAFB/8HXL0sgAyEBDQALIAJBBGohAgsCQCADQeMATQRAIAMhAQwBCyACQQJrIgIgAyADQf//A3FB5ABuIgFB5ABsa0H//wNxQQF0QfqJwgBqLwAAOwAACyABQQlNBEAgAkEBayABQTBqOgAADwsgAkECayABQQF0QfqJwgBqLwAAOwAAC+ADAQF/IwBBMGsiAiQAAn8CQAJAAkACQAJAAkACQAJAAkACQCAAKAIAIgAtAABBAWsOCQECAwQFBgcICQALIAIgAEEBajYCDCACQRxqQgE3AgAgAkEBNgIUIAJB7IDBADYCECACQRk2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwwJCyABKAIUQfSAwQBBHCABQRhqKAIAKAIMEQAADAgLIAEoAhRBkIHBAEEeIAFBGGooAgAoAgwRAAAMBwsgASgCFEGugcEAQSEgAUEYaigCACgCDBEAAAwGCyABKAIUQc+BwQBBFiABQRhqKAIAKAIMEQAADAULIAEoAhRB5YHBAEESIAFBGGooAgAoAgwRAAAMBAsgASgCFEH3gcEAQS0gAUEYaigCACgCDBEAAAwDCyABKAIUQaSCwQBBJyABQRhqKAIAKAIMEQAADAILIAEoAhRBy4LBAEEoIAFBGGooAgAoAgwRAAAMAQsgAiAAQQRqNgIMIAJBHGpCATcCACACQQI2AhQgAkGcg8EANgIQIAJBGjYCLCABQRhqKAIAIQAgAiACQShqNgIYIAIgAkEMajYCKCABKAIUIAAgAkEQahAvCyACQTBqJAAL5wIBBX8CQEHN/3tBECAAIABBEE0bIgBrIAFNDQAgAEEQIAFBC2pBeHEgAUELSRsiBGpBDGoQCiICRQ0AIAJBCGshAQJAIABBAWsiAyACcUUEQCABIQAMAQsgAkEEayIFKAIAIgZBeHEgAiADakEAIABrcUEIayICIABBACACIAFrQRBNG2oiACABayICayEDIAZBA3EEQCAAIAAoAgRBAXEgA3JBAnI2AgQgACADaiIDIAMoAgRBAXI2AgQgBSAFKAIAQQFxIAJyQQJyNgIAIAEgAmoiAyADKAIEQQFyNgIEIAEgAhAyDAELIAEoAgAhASAAIAM2AgQgACABIAJqNgIACwJAIAAoAgQiAUEDcUUNACABQXhxIgIgBEEQak0NACAAIAFBAXEgBHJBAnI2AgQgACAEaiIBIAIgBGsiBEEDcjYCBCAAIAJqIgIgAigCBEEBcjYCBCABIAQQMgsgAEEIaiEDCyADC68DAQd/IwBBEGsiByQAQQQhBAJAAkACfyABKAIoIgNBBE0EQCABQQhqIQYgAwwBCyABKAIIIQYgAyEEIAEoAgQLIgggAk0EQAJAAkACQAJAIAJBBU8EQEGBgICAeCEFIAIgBEYNB0EAIQUgAkH/////AUsgAkEDdCIJQfj///8HS3INByADQQVJDQIgBEEDdCEDIARB/////wFNDQEMBgtBgYCAgHghBSADQQRNDQYgAUEANgIAIAFBCGogBiAIQQN0EL4CGiABIAg2AiggBEEDdCIBQfn///8HSSAEQf////8BTXENAyAHIAE2AgwgB0EANgIIQbzvwABBKyAHQQhqQejvwABB3PDAABCuAQALIANB+P///wdLDQRBCCEFIAYgA0EIIAkQIyIDDQEMBQtBuLHCAC0AABogCRAKIgNFBEBBCCEFDAULIAMgBiAIQQN0EL4CGgsgASACNgIoIAEgAzYCCCABIAg2AgQgAUEBNgIAQYGAgIB4IQUMAwsgBhAiDAILQaDxwABBIEHA8cAAEN4BAAsgAyEJCyAAIAk2AgQgACAFNgIAIAdBEGokAAuBAwEJfyMAQfAAayIEJAACQAJ/IAFB/wFxQQFHBEAgAUEBIAIoAigiA0EFTwR/IAIoAgQFIAMLGwwBCyAEQoCAgIAgNwI4IARBjKzCADYCNCAEQQA2AkAgBEEANgJoIARBQGsiASAEQTRqEDMCfyAEIAFBMBC+AiIGKAIoIgFBBE0EQCAGQQhqDAELIAYoAgQhASAGKAIICyEFIAIgARDQASACKAIoIgNBBE0EfyACQQhqBSACKAIEIQMgAigCCAsgASADRw0BIAJBKGohCCAFIAFBA3QQvgIaIAJBBGohCSACQQhqIQogAigCCCEHA0AgCiEFIAgoAgAiASEDIAFBBUkiC0UEQCAJKAIAIQMgByEFCwJAIANFDQAgA0EDdCAFakEIaykDAEIAUg0AIAghAyALRQRAIAkiAygCACEBCyABRQ0BIAMgAUEBazYCAAwBCwsgBhCPAkEBCyEBIAAgAkEwEL4CIAE6ADAgBEHwAGokAA8LIAMgAUH88cAAELsBAAuBAwIIfwF+IwBBEGsiCCQAIAhBCGogACACIAFrQQN2EJMBAkAgCCgCCCIDQYGAgIB4RwRAIANFDQEACyAAQShqIQlBBCEFAn8gACgCKCIHQQRNBEAgAEEIaiEEIAkhBiAHDAELIABBBGohBiAAKAIIIQQgByEFIAAoAgQLIQMCQAJAIAYgAyAFSQR/IAQgA0EDdGohBANAIAEgAkYNAiAEIAEpAwA3AwAgBEEIaiEEIAFBCGohASAFIANBAWoiA0cNAAsgBQUgAws2AgAgAEEEaiEHIABBCGohCgNAIAEgAkYNAgJ/IAkoAgAiBUEFTwRAIAcoAgAhBCAKKAIAIQYgBwwBCyAFIQQgCiEGQQQhBSAJCyEDIAEpAwAhCyAEIAVGBEAgABCgASAAKAIEIQQgACgCCCEGIAchAwsgAUEIaiEBIAYgBEEDdGogCzcDACADIAMoAgBBAWo2AgAMAAsACyAGIAM2AgALIAhBEGokAA8LQezwwABBEUGA8cAAEN4BAAuCAwEFfwJAIAEoAiAiAwR/IAEgA0EBazYCIAJAAn8CQAJAQQAgASgCACIDIAEoAgQiAhtFBEAgA0UNASABQQhqKAIAIQQgAUEMaigCAAwDCyABQQhqIQIgAUEMaigCACEDA0AgAigCACECIANFDQIgA0EBayEDIAJBmANqIQIMAAsAC0GAl8IAQStBqJLCABDeAQALIAFCADcCCCABIAI2AgQgAUEBNgIAQQALIgUgAi8BkgNJBEAgAiEDDAELA0AgAigCiAIiA0UNAyAEQQFqIQQgAi8BkAMhBSAFIAMiAi8BkgNPDQALCyAFQQFqIQYCQCAERQRAIAMhAgwBCyADIAZBAnRqQZgDaigCACECQQAhBiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = zs();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await _s(await o, i);
  return Xs(t, e);
}
function Uo() {
  const o = ["W6xdN8ksW4ff", "W5tdJJu5WOlcMSkWW5nuWRi8WPW", "WQ7dIIOlcq", "lSkDWO3dLcldH8k5WRO", "WQ/dLSoEWOVcSa", "vCk6W6JdUtb3WRpcGSopksRcMa", "p8kbwmkMWQdcSaCCWP7dNsC", "W5VcOmk4W4JcIq", "WQRdHdqhuW", "W7FcK29zg8oJxmovWONdJ8oxzW", "iYZdK8kqra", "tmo+pCkkW74", "W5/cImk6W4JcHW", "WR8/caL5", "W6ZdHmoEWOVcUa", "tCoYW4vAW5W", "W5NcNfifWO7cMNFcHX4", "W6v2W7hcVKO7dvvbdSoa", "WQGnxqaJ", "EmkhFv3cPa", "grFcPI0vd8oTWQzDW6eFWPy", "W5JdG8k8W43cS2/cQ8kZ", "W77cNX7dVSoXW7RdUwO", "W5RcMceHWOtcONFcPG", "ddPCW5eO", "nf1MwLRdRYPk", "W7m1tKpcPfhcKSoWzYNcQG", "WP/dIbeEWQq", "nCocWRjjW7XyWQbvbZmqAG", "gmoReJldPq", "dCkTWRxcOgS", "FSoqe8oYW5S", "aSo0iCkgW7W", "W4eJE0zg", "W6NcJ8opgSo8", "W4tcRmkez8kN", "gCoJhd7dRG", "W4NcOmkoW6tcRLpcN8oUeG", "ACowir/cSCo+W47dI8oFpSoi", "W7q9quRcPWhcN8o0waZcRmor", "umkkWRyH", "WPZdP8oJpSoGWPyoWO3dOSkMWOS", "W7y1rIRdPftcUSo2vG", "qmoVW5zqW5y", "D3xdN8kcEmoeW5TV", "ACoziX7cSSo+W4NdHSoSjCom", "W4NcRCkoWQRdUupcVCopmCocW7S", "WRBcTCogWQ0", "W5PbWPFcH8kv", "WQXLkJ/cIG", "W7LIxtD/C8oCCLy", "ymoFbSoWW6a", "pCoFW6pdLmod"];
  return Uo = function() {
    return o;
  }, Uo();
}
(function(o, i) {
  function t(x, I, c, r, Q) {
    return QA(I - -668, c);
  }
  const e = o();
  function A(x, I, c, r, Q) {
    return QA(r - -565, Q);
  }
  function n(x, I, c, r, Q) {
    return QA(Q - -883, r);
  }
  function g(x, I, c, r, Q) {
    return QA(I - 1e3, r);
  }
  function a(x, I, c, r, Q) {
    return QA(Q - 539, c);
  }
  for (; ; )
    try {
      if (-parseInt(a(989, 996, "aSZz", 979, 979)) / 1 + -parseInt(t(-261, -244, "Lr&a", -238, -226)) / 2 + -parseInt(a(994, 971, "yU[&", 981, 984)) / 3 * (parseInt(a(949, 983, "bAic", 965, 968)) / 4) + parseInt(A(-144, -147, -144, -157, "r[P)")) / 5 * (parseInt(n(-431, -430, -464, "fn4T", -444)) / 6) + -parseInt(t(-246, -220, "mE3k", -219, -240)) / 7 * (-parseInt(A(-96, -95, -108, -114, "l)Z4")) / 8) + -parseInt(t(-210, -225, "t4)M", -204, -204)) / 9 * (-parseInt(t(-243, -254, "rPNl", -243, -272)) / 10) + -parseInt(g(1430, 1416, 1399, "45sb", 1416)) / 11 * (parseInt(A(-157, -136, -128, -145, "j5D3")) / 12) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Uo, -198771 + 63 * 6621);
function QA(o, i) {
  const t = Uo();
  return QA = function(e, A) {
    e = e - (11039 + -1 * 10635);
    let n = t[e];
    if (QA.BAYNuA === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      QA.vcAlKY = c, o = arguments, QA.BAYNuA = !0;
    }
    const a = t[9871 * 1 + 130 * 8 + -10911], x = e + a, I = o[x];
    return I ? n = I : (QA.GMLyIn === void 0 && (QA.GMLyIn = !0), n = QA.vcAlKY(n, A), o[x] = n), n;
  }, QA(o, i);
}
function $s(o, i, t, e, A) {
  return QA(A - -600, o);
}
function AB(o, i, t, e, A) {
  return QA(A - -282, e);
}
function ki(o, i, t, e, A) {
  return QA(A - -429, o);
}
function Fe(o, i, t, e, A) {
  return QA(i - 765, e);
}
function eB(o, i, t, e, A) {
  return QA(A - 540, o);
}
var Ya;
class tB {
  constructor() {
    S(this, Ya, !1);
  }
  async [(Ya = Fe(1217, 1215, 1224, "fn4T") + Fe(1210, 1183, 1189, "n)z&") + Fe(1222, 1198, 1217, "rPNl"), Fe(1170, 1175, 1150, "KL#@"))](i) {
    function t(a, x, I, c, r) {
      return ki(c, x - 159, I - 64, c - 12, x - 441);
    }
    function e(a, x, I, c, r) {
      return eB(c, x - 343, I - 3, c - 133, a - -706);
    }
    function A(a, x, I, c, r) {
      return Fe(a - 180, x - -1736, I - 95, c);
    }
    function n(a, x, I, c, r) {
      return Fe(a - 192, I - -1737, I - 489, r);
    }
    function g(a, x, I, c, r) {
      return ki(x, x - 28, I - 488, c - 252, I - 123);
    }
    try {
      const a = i + (n(-547, -562, -545, -563, "QQ]%") + "/") + ga;
      await SI(a), this[n(-502, -496, -518, -493, "bAic") + t(425, 434, 430, "V)yV", 417) + g(89, "f&0T", 107, 82, 113)] = !0;
    } catch {
      this[A(-541, -567, -561, "bA7P") + A(-530, -537, -513, "z6JH") + n(-542, -527, -525, -512, "pMnn")] = !1, console[g(124, "DPg#", 111, 107)](ga + (t(461, 468, 443, "t1Jz") + e(269, 256, 248, "O)0g") + n(-557, -530, -531, -527, "iC1z") + n(-539, -556, -549, -544, "HLRz") + e(253, 238, 234, "!qZB") + e(271, 255, 276, "QQ]%") + A(-519, -516, -517, "z6JH") + A(-506, -518, -506, "zQS6") + A(-515, -535, -527, "j5D3") + A(-533, -533, -527, "f&0T") + g(124, "r[P)", 136, 138) + t(415, 437, 422, "32CT") + g(139, "bAic", 115, 117) + g(124, "r7aK", 146, 153) + "n."));
    }
  }
  [AB(105, 150, 149, "nrqB", 123) + $s("O)0g", -151, -166, -186, -170) + Fe(1188, 1196, 1200, "32CT") + "ed"]() {
    function i(e, A, n, g, a) {
      return ki(g, A - 26, n - 479, g - 388, A - -492);
    }
    function t(e, A, n, g, a) {
      return Fe(e - 449, g - -74, n - 0, A);
    }
    return this[t(1140, "bAic", 1157, 1145) + i(-513, -499, -488, "V)yV") + t(1082, "r7aK", 1086, 1097)];
  }
}
class Gi extends Error {
  constructor() {
    super(...arguments);
    S(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Ea(o, i, t, e, A) {
  return eA(i - 821, t);
}
function eA(o, i) {
  var t = Yo();
  return eA = function(e, A) {
    e = e - (61 * -29 + -9905 + 11819);
    var n = t[e];
    if (eA.xiOuEM === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (var p = 0, k = C.length; p < k; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var C = [], E = 0, d, u = "";
        r = g(r);
        var s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (var f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      eA.RczIAv = a, o = arguments, eA.xiOuEM = !0;
    }
    var x = t[0], I = e + x, c = o[I];
    return c ? n = c : (eA.bXEFwE === void 0 && (eA.bXEFwE = !0), n = eA.RczIAv(n, A), o[I] = n), n;
  }, eA(o, i);
}
function qt(o, i, t, e, A) {
  return eA(o - -23, t);
}
function Si(o, i, t, e, A) {
  return eA(e - 308, A);
}
(function(o, i) {
  var t = o();
  function e(I, c, r, Q, C) {
    return eA(r - 71, Q);
  }
  function A(I, c, r, Q, C) {
    return eA(I - -945, C);
  }
  function n(I, c, r, Q, C) {
    return eA(I - -295, c);
  }
  function g(I, c, r, Q, C) {
    return eA(I - -938, C);
  }
  function a(I, c, r, Q, C) {
    return eA(I - -940, c);
  }
  for (; ; )
    try {
      var x = -parseInt(e(251, 234, 234, "6Pd8", 223)) / 1 + -parseInt(e(255, 292, 261, "W3sg", 249)) / 2 + parseInt(A(-798, -808, -819, -810, ")6(!")) / 3 + parseInt(a(-745, "cptz", -728, -716, -714)) / 4 * (-parseInt(a(-741, "6Pd8", -763, -733, -729)) / 5) + -parseInt(e(237, 201, 216, "!B7v", 202)) / 6 + -parseInt(g(-747, -769, -773, -776, "W3sg")) / 7 * (-parseInt(g(-787, -783, -780, -793, "0(YM")) / 8) + -parseInt(n(-123, "6Pd8", -118, -116, -136)) / 9 * (-parseInt(e(264, 275, 274, "bnGQ", 300)) / 10);
      if (x === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Yo, 7 * 245529 + 741527 + -1485326);
function Z0(o, i, t, e, A) {
  return eA(i - -393, o);
}
function Ke(o, i, t, e, A) {
  return eA(t - 71, e);
}
function Yo() {
  var o = ["WPulWPtcPSo1", "WPinWPu", "WP0Oo8oMW6eDWQS", "qZNdISk/W6G", "F8kOW5DnW58", "WPHMFmkbWPzUW5hcTadcM8o6WPyd", "kSojnSoiWQJcPCkmAtxcKmoMch0", "WOVdUwJdH8o9", "b2ZdPG", "DCkDW5HLWO8", "W7PPW7tcRsuzW5BcL1u", "q2etsfVdUCoRWRhcKSk4t1SNW7u", "W6yzxgddPxPjWPxdVCk7WR8Ddq", "W4hdUfnOWOW", "wdVcP8k6WOhcRhX3W7ahW584oCoC", "j0WKW4T+", "FmooW6ldNSkthGjAkSkVrWtdQW", "W5xdJSkz", "CCoTWOOjvW", "xdHnWRac", "qbOiW6CBW7JdJG4", "jLeIW7nP", "DCkap8kdeW", "ESkFySkfW6S", "k0iKW79Z", "rSkwWRJdVCo1", "mSk4W49JcGiPc0FcTCopWO/cOq", "fslcPGLT", "WOixWOJcVmoi", "zCoTWPGIsa", "tYHhuJK", "z8kriSkFdG", "jmodnSoaWQNcP8oiAXVcJ8ovlG", "W5fXA8k0WPhcJSocmMubWPXI", "WOFdGSkrWPZdLCkZW64", "prja", "ymo6WPyLtG", "zSo6WOS5tW", "W5ddR09eWPu", "dJtcLa", "uCoIxSooW5K", "lCoom8oeWQ3cQ8kjFttcVSoQeN4", "W5ydshvC", "qYFdUCkkW7y", "WR51W4pdTXO", "F8kgW41+", "W5Kiu29m", "WRhdKmkgfHq", "EmojW6/dK8kDgGnJd8kWDcFdUW", "WRRdG8kDbG8", "yCkjW5L/WOK", "umksWQVdUSoL", "chRdM8oE", "tmobra", "qb1SW680W77dLYHl", "WPxcJY3dT8kuWPv8rq", "kSohsG", "WQpcQ8kZr0C", "edJcGW", "sMpdNL88WPdcJCooW4L1qW", "twhdKvi7W4BdNmoVW6X3y8kLiq", "fslcUbfT"];
  return Yo = function() {
    return o;
  }, Yo();
}
var bt, u0;
class da {
  constructor(i) {
    P(this, bt);
    P(this, u0);
    function t(a, x, I, c, r) {
      return eA(x - -540, a);
    }
    function e(a, x, I, c, r) {
      return eA(c - -630, a);
    }
    this[t("5pM!", -373) + e("wwPA", -474, -449, -469)] = i;
    function A(a, x, I, c, r) {
      return eA(x - -348, c);
    }
    function n(a, x, I, c, r) {
      return eA(c - 671, I);
    }
    function g(a, x, I, c, r) {
      return eA(I - -446, x);
    }
    try {
      H(this, bt, i[e("5pM!", -479, -457, -470, -464) + e("5pM!", -496, -450, -481, -466) + A(-177, -200, -219, "E$S5", -216)] && JSON[e("ypsU", -490, -489, -474, -471)](i[t("ypsU", -358, -337, -389, -328) + g(-288, "wJr@", -277, -269, -262) + n(867, 835, "Voe&", 865, 891)])), H(this, u0, i[g(-223, "sm5s", -244, -267, -241) + A(-173, -161, -177, "8sIf", -165)]);
    } catch (a) {
      console[A(-181, -172, -181, "sm5s")](a);
    }
  }
  get [Ke(239, 236, 245, "@xJs") + "id"]() {
    function i(e, A, n, g, a) {
      return Ke(e - 446, A - 15, A - 570, a);
    }
    function t(e, A, n, g, a) {
      return Ke(e - 298, A - 106, a - 800, A);
    }
    return this[t(1062, "DHFj", 1052, 1030, 1049) + i(848, 829, 852, 835, "%W$y")][t(1054, "W3sg", 1044, 1033, 1063) + t(1069, "W3sg", 1088, 1090, 1060)];
  }
  get [Si(450, 502, 494, 476, "5pM!") + "s"]() {
    function i(t, e, A, n, g) {
      return Ke(t - 41, e - 485, n - -559, g);
    }
    return this[i(-260, -289, -292, -282, "wJr@") + i(-298, -319, -303, -308, "DHFj")][i(-320, -342, -333, -336, "4*Zf") + "s"];
  }
  get [Ke(262, 252, 233, "Mimt") + Ke(302, 277, 272, "!B7v")]() {
    function i(A, n, g, a, x) {
      return Ea(A - 210, g - -679, x);
    }
    function t(A, n, g, a, x) {
      return Ke(A - 270, n - 114, x - 319, n);
    }
    function e(A, n, g, a, x) {
      return Si(A - 67, n - 60, g - 475, x - -922, A);
    }
    return this[i(317, 309, 319, 331, "E@1v") + e("4*Zf", -447, -442, -481, -459)][i(310, 306, 323, 337, "sm5s") + t(554, "*OAy", 550, 599, 574)];
  }
  get [Z0("4*Zf", -247) + "b"]() {
    return w(this, bt);
  }
  get [qt(136, 144, "Voe&") + qt(143, 113, "NBL^")]() {
    return w(this, u0);
  }
  get [Z0("W3sg", -235) + Z0("E@1v", -220) + Ea(986, 992, "*OAy") + Si(483, 489, 468, 491, "CqTJ")]() {
    var n, g;
    function i(a, x, I, c, r) {
      return Z0(c, x - 536);
    }
    function t(a, x, I, c, r) {
      return qt(r - 847, x - 324, a);
    }
    function e(a, x, I, c, r) {
      return qt(r - 1019, x - 441, c);
    }
    function A(a, x, I, c, r) {
      return qt(x - 574, x - 263, c);
    }
    return !!((g = (n = w(this, bt)) == null ? void 0 : n[A(732, 705, 721, "6Pd8") + e(1148, 1197, 1163, "W3sg", 1166)]) != null && g[t("2qxX", 991, 990, 1005, 974) + t("@xJs", 1036, 999, 1012, 1020) + t("aeB2", 1045, 1015, 1004, 1021) + e(1188, 1212, 1219, "Voe&", 1189) + e(1124, 1164, 1160, "Mimt", 1149) + i(327, 318, 329, "b(xA") + A(758, 751, 778, "shjH") + "d"]);
  }
}
bt = new WeakMap(), u0 = new WeakMap();
function Oo() {
  const o = ["ECksbSo4ta", "FNebdmo2", "WRhcPNhcVCk3", "wLtcHLi", "W61bW7eZWOe", "g0/cHdxcTq", "WPRcH8kUlSke", "DguEeCoJ", "WQeHxmohqa", "cmo7W7JcICo9", "WPngEq", "oSksamoZrq", "W4yFbYxdJq", "WQ/cG8kTWRTS", "W792W53dPSo0", "FtJcSCosWP4", "W44wgINcKW", "W4qAcchcHW", "W63cTSoiWO3dJq", "ASkFW7zJyq", "W4KCeJZcLa", "W5TVWPjBBW", "jCknDmoqzW", "BJddPIhdGCkgg8oEW7uIW4lcJ8o4WOm", "WPFcIXnJdq", "wvhcJIZcNq", "nhRdQLpcQa", "jxPpw2m", "W4TwW60VWPy", "sczEW4Se", "W4G5W6fqsW", "D8oplCkxlbinC34PxuhdL8oA", "WQ/cSSo7C0a", "W4RdPr4GnG", "WR/cQhdcSmk7", "bttdTv/cMW", "i3jpuwO", "acfhbgS", "WQdcS8ooEW", "cfLPuLW", "DSohWQ7dIeq", "sftcGuXB", "WR40W7FcUSoB", "W7fnbd/dNq", "jmkgW5CCtq", "hmoDWRVdPW", "sYzmW64E", "W5HAdmk0ua", "WRFcRNhcT8k+", "oCkPW6OZsq", "bCo+WR/dKgZdKv8", "BZzNWQVcVG", "ymkeW4HpyW", "W75HW5BdSCoI", "WRqLsSonta", "qdD0W4ms", "yIvHWQFcPa", "qqPwW4mf", "W4yAhY3cIa", "cxVcSrlcJW", "WPdcL1ddKCk1uwtdTG", "gxJdO8kbjW", "W6OPs1X4", "gCkYr3uQ", "W64JuwrJ", "W6jlW7WHWPa", "WRz8WOGqEq", "tYzwW5Ku", "W47dVWu2", "fgZcQG", "WRa1W7xdOge", "WQxcHCkbWRLI", "eYZdTv/cNq", "fgpcP8kkma", "WRhcKCkaWQm", "W6yPW5r4Fa", "FcSjctjaBCkoxf0iDa", "W4VdJNy", "tSktoCkyECoJW7qAaHtcHapcLW", "WONcHWnzcq", "W4v2bZRdLW", "lSogdXnI", "Cx8+aSoE", "xCogWRNcIvO", "iSoega", "W43dPmo8WQNcHq", "kmkyAa", "mmoMW7dcMSox", "AJpdOcFdGCkkgmkDW4ahW57cGCoF", "hCopWQNdSSk7", "W6S/W6C3", "fc7dQL/cRW", "WPmYxmogwW", "a1vDFwO", "W4rVWPrwBG", "qcXF", "WRZcTxFcSCkT", "W6jqW5mPWOC", "W4pdPaOaza", "W6C7W7D6zW", "gmofBSkf", "W6jnW7WLWOO", "W7JcLZftW7q", "W6G/W7DAEG", "ndhcSa", "iCocaHK", "WRq+W6pdGKy", "W4RcQSk/WQJdSq", "W4RdPr4GrG", "dmosy8ofpW", "W74QjCkxyW", "i8o2WO/dNCkf", "W6lcOmoRWO/dLG", "DMqikCoL", "lhzE", "W59mWRtdUmklW4z7WPCxW7DOra", "W6tcMsjeW50", "jsnEvSk+WOzqWQuZCCkSW4Tp", "bSkbW67cKalcHdS+eWC+W4VdLq", "kSkqFa", "W5fuWODsDq", "vuFcNq", "W64PW5pdLgv6ga", "W6qIvMq", "W7ZdQCkAiYzmECo+W4lcSqxcMmoG", "WRVcOMhcUSk6", "o8o2BmoOla", "W5NcGSkKkmkp", "dtXylwy", "vSoBWQ/dGMy", "wSowWRNdIuu", "W6Kue8k4eW", "WQ1mBW", "imkqBSonCa", "WRVdKWj5W6K", "W4BdGCkjrgm", "rmkpW6lcU2GiWRCzcCoCW49EnW", "ktVcPSot", "CmogkmksiH9ncLSVzuG", "aCooWR3dVZK", "dSopEa", "EgnuW4ms", "W5RdICkbuMi", "WPxcRMBcU8kX", "hfHtv3W", "WOKPaSkebq", "oCohWR7dTmk9", "W4hdIgddPmkh", "W4GKW57dVmoK", "W6LbW6SeWOS", "l8orbar0", "W6eJxNrD", "omkYwhfU", "x8oAWRVdOKq", "WQFcUSoB", "W5LTW7m2WP0", "W70+vN5L", "W6OOW7f2Fq", "iCkAB8oNEW", "AL/cIqtdKa", "nSo3W6JcMCo/", "W5lcMWr2hKCL", "emojACoojq", "WOCAW7pdQCou", "zIxdTCo3wgtdUHFdTmk5h8oWnG", "iCouWQpdUCkH", "WR3cQhhcM8kY", "WRKuW50WWRDipmk1", "o8kXW7meBG", "ESoOcabDWRia", "qcPBW48F", "oZVcV8otWOu", "imkAd8o/tW", "W5tdNfyovZr6WQmeWPj8WOpdUW", "W7hdTSkDDge", "WOOhW6JcUSoo", "W5LfW6WTW4q", "yZHNWO3cUW", "kgLjv3K", "DNWbnSoP", "aJ/dOL7cRG", "W5JdMSktE08", "kdTvv38", "W50sdIy", "wSoBWRxdKW", "tSoysCojbSkjWQq", "W4isccVcJG", "gmofBmokpG", "fmooWQddPIi", "WQJcKcXvW78", "h8ofzmoylG", "pCkHW701tW", "jCoiWRNdVXq", "emo8WOtdPmkA", "s8ovBSoHmSkAWQC", "WROPtComrW", "WQJcL8kb", "vCoAWQNdIvi", "jSkjdmoGqG", "W43dUmo9WQpdLW", "W7vLW57dVmo9", "Ex8zrCoL", "W53dHqWOCW", "WOaBW6ldP8or", "gNZcQWJcLa", "k8kAAq", "vSoBWQ/dGHy", "nhlcRCk2dq", "l8kCFSonzW", "g8ofFSoNiG", "W6WOW6XQFa", "fSozWQBdHtK", "WPxcNaLseW", "W6SPs3n5", "W4NdOSoMWRu", "W6tcNYbfW78", "WRpcUmoVz3W", "A0hcMKK", "WPi+WRddSMC", "BIfqW44C", "W6mJsZb4", "WRToACofWQq", "hCovWQJdRdq", "WONdNanYWQa", "mSouWQxdPmkM", "AqfQW4aM", "mbFcSmooWOq", "W4tdV8oTWQpcMq", "WR06h8kzhW", "WRCRfCkehW", "WPfay8kVCG", "Bg7dRmkwW4LyFCo7uCkFaWG", "W4/dHMBdGSko", "omofWQ/dUCkM", "aIDno3e", "oh7cSmoiWOq", "pNNcPCkQ", "WO/dGb9KW7m", "B0JcOff0", "vKhcH08", "W6BdGCkpxW", "vv/cJGRcMa", "W7DbWRiysW", "smkeWPPotq", "W7VcMs0", "xdfrW4qf", "W5OTtx54", "WRaVaW", "xIXk", "jhvDvW", "WRaYs8om", "eSk8W7OFEq", "A8koW4G", "W4NdPb8aDW"];
  return Oo = function() {
    return o;
  }, Oo();
}
function EA(o, i) {
  const t = Oo();
  return EA = function(e, A) {
    e = e - (9423 + -14 * 286 + -4989);
    let n = t[e];
    if (EA.AeDfFc === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      EA.tDVTVB = c, o = arguments, EA.AeDfFc = !0;
    }
    const a = t[-4379 * 2 + -25 * 206 + 3 * 4636], x = e + a, I = o[x];
    return I ? n = I : (EA.ukrJrn === void 0 && (EA.ukrJrn = !0), n = EA.tDVTVB(n, A), o[x] = n), n;
  }, EA(o, i);
}
(function(o, i) {
  const t = o();
  function e(g, a, x, I, c) {
    return EA(g - 42, x);
  }
  function A(g, a, x, I, c) {
    return EA(I - -596, g);
  }
  function n(g, a, x, I, c) {
    return EA(I - 852, c);
  }
  for (; ; )
    try {
      if (-parseInt(A("ci8*", -195, -140, -82, -103)) / 1 * (-parseInt(n(1368, 1398, 1450, 1373, "0Zk*")) / 2) + parseInt(A("@tmT", -65, -240, -147, -147)) / 3 * (-parseInt(n(1476, 1479, 1500, 1415, "yKcl")) / 4) + -parseInt(n(1291, 1359, 1444, 1339, "2)Or")) / 5 + -parseInt(e(517, 428, "taRe", 490, 631)) / 6 + -parseInt(A("l23s", -59, 32, -36, -146)) / 7 * (parseInt(e(558, 453, "X4@3", 543, 671)) / 8) + -parseInt(n(1426, 1472, 1597, 1528, "2)Or")) / 9 + -parseInt(e(608, 596, "&LHH", 720, 520)) / 10 * (-parseInt(n(1351, 1249, 1466, 1369, "@tmT")) / 11) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Oo, -47170 + 36682 * -1 + 1047425 * 1);
function FA(o, i, t, e, A) {
  return EA(i - 494, A);
}
function Re(o, i, t, e, A) {
  return EA(o - -240, t);
}
function wA(o, i, t, e, A) {
  return EA(e - -963, i);
}
function rA(o, i, t, e, A) {
  return EA(t - -930, o);
}
function jA(o, i, t, e, A) {
  return EA(t - -209, o);
}
var Oa, Ha, Ka;
class oB {
  constructor(i) {
    S(this, Ka);
    S(this, Ha, [wA(-351, "Rc[r", -194, -310) + rA("ci8*", -360, -328) + "ic", jA("IbEV", 507, 450) + rA("@tmT", -468, -448) + "ic"]);
    S(this, Oa);
    function t(A, n, g, a, x) {
      return EA(A - -648, x);
    }
    function e(A, n, g, a, x) {
      return EA(g - -534, a);
    }
    this[t(-83, -127, -176, -52, "nNcr") + e(48, 51, 45, "!#OK") + "d"] = i;
  }
  async [(Ka = FA(1181, 1158, 1168, 1082, "Rc[r") + "se", Ha = wA(-383, "k4RS", -237, -281) + FA(857, 948, 854, 832, "k4RS") + FA(874, 1001, 977, 1121, "P*rP") + Re(416, 391, "3omv"), Oa = wA(-307, "4fBr", -366, -296) + jA("azJ5", 181, 241), Re(282, 305, "vCxs"))](i) {
    function t(x, I, c, r, Q) {
      return Re(c - 409, I - 181, I);
    }
    const e = await this[A(1159, 1057, 1256, "vCxs") + A(1327, 1239, 1451, "Ck5J") + A(1314, 1295, 1274, "3omv")](i);
    function A(x, I, c, r, Q) {
      return rA(r, I - 57, x - 1628);
    }
    function n(x, I, c, r, Q) {
      return jA(x, I - 401, r - 9);
    }
    function g(x, I, c, r, Q) {
      return jA(r, I - 315, c - -486);
    }
    await Promise[g(-232, -49, -117, "X4@3") + t(557, "!#OK", 659)]([this[n("kVZP", 479, 528, 478) + n("nNcr", 444, 417, 324) + "d"][A(1281, 1327, 1275, "@tmT")](i), this[g(-240, -33, -145, "vCxs") + n("@tmT", 271, 280, 329) + "e"](e)]);
    function a(x, I, c, r, Q) {
      return FA(x - 329, Q - -176, c - 186, r - 472, I);
    }
    this[a(744, "!81I", 792, 785, 869) + t(622, "X4@3", 681) + n("k4RS", 147, 246, 266)]();
  }
  async [rA("vCxs", -383, -318) + wA(-592, "]0Lf", -588, -475) + "se"](i) {
    function t(a, x, I, c, r) {
      return FA(a - 386, c - -1463, I - 128, c - 279, x);
    }
    function e(a, x, I, c, r) {
      return wA(a - 238, r, I - 105, a - 459);
    }
    function A(a, x, I, c, r) {
      return rA(a, x - 82, x - 631);
    }
    function n(a, x, I, c, r) {
      return rA(a, x - 406, c - 1147);
    }
    function g(a, x, I, c, r) {
      return rA(a, x - 300, c - 1141);
    }
    try {
      if (t(-504, "Dz54", -303, -389, -368) !== e(-35, -112, -114, 32, "0Zk*")) {
        const a = await fetch(i);
        if (!a.ok)
          if (n("k4RS", 849, 955, 841, 858) !== e(-66, -78, -86, -94, "taRe")) _0x444d39[e(-20, 20, -41, 74, "qFQt")](_0x541cd5);
          else throw new Error(A("2)Or", 359, 349, 469, 240) + t(-373, "]0Lf", -358, -337, -422) + e(130, 16, 185, 26, "rZjq") + n("Dk^q", 773, 839, 805, 843) + "d.");
        this[g("Dk^q", 941, 950, 825, 940) + "se"] = await a[t(-465, "rZjq", -560, -433, -322)]();
      } else this[A("mtl*", 166, 181, 93, 96) + "se"] = void (-11 * 788 + -23 * 311 + 13 * 1217), _0x2f8670[g("TNH2", 769, 761, 798, 817)](_0x5886c7);
    } catch (a) {
      A("Dz54", 274) !== g("jxDS", 749, 647, 736) ? _0x296ba8[A("9w4#", 219)]() : (this[g("IbEV", 705, 781, 737) + "se"] = void (-40 * 52 + -17 * 560 + 11600), console[A("6]zj", 257)](a));
    }
  }
  async [FA(1087, 1009, 1018, 935, "Dk^q") + wA(-324, "9w4#", -416, -356) + "e"](i) {
    function t(g, a, x, I, c) {
      return rA(I, a - 7, x - 499);
    }
    function e(g, a, x, I, c) {
      return rA(g, a - 272, a - 1868);
    }
    function A(g, a, x, I, c) {
      return rA(c, a - 492, I - 1719);
    }
    if (this[n("ci8*", 1051, 1039, 1127) + n("nNcr", 1208, 1224, 1208)] = void (197 * 40 + 6961 + -14841), !i)
      if (n("i$d9", 1129, 1135, 1203) !== n("yKcl", 998, 959, 1025)) this[n("azJ5", 1046, 1243, 1129) + t(-23, 72, 22, "]qf0") + "d"] = _0x14faad;
      else {
        console[t(217, 302, 204, "yKcl")](e("yKcl", 1398) + n("k4RS", 1037, 1041, 1093) + t(-4, 38, 99, "ib#a") + n("TNH2", 976, 1031, 1091) + n("6]zj", 955, 969, 1042)), this[n("i$d9", 1034, 1156, 1143) + "se"] = void (-1 * 5693 + 625 * -15 + 15068);
        return;
      }
    function n(g, a, x, I, c) {
      return jA(g, a - 466, I - 762);
    }
    await this[A(1260, 1348, 1296, 1300, "QSpK") + t(227, 211, 111, "nNcr") + "se"](i);
  }
  async [rA("TNH2", -389, -320) + jA("yKcl", 421, 397) + FA(1170, 1133, 1152, 1075, "Dz54")](i) {
    function t(a, x, I, c, r) {
      return FA(a - 82, I - -582, I - 407, c - 163, x);
    }
    function e(a, x, I, c, r) {
      return wA(a - 169, r, I - 235, I - 1307);
    }
    const A = await fetch("" + i + this[n(1134, 1225, "jxDS", 1078, 1132) + n(1092, 1186, "0xOQ", 1156, 1218) + n(1093, 930, "!#OK", 1002, 980) + t(362, "P*rP", 379, 491)][8216 + -1523 * 5 + -601 * 1]);
    function n(a, x, I, c, r) {
      return Re(r - 786, x - 398, I);
    }
    const g = A.ok ? -314 * 21 + -67 * -41 + 3847 : -3 * -2125 + -9685 + 3311;
    return "" + i + this[e(1140, 999, 1013, 1020, "Ghht") + e(805, 764, 840, 948, "&LHH") + t(381, "@tmT", 440, 320) + e(928, 1082, 957, 862, "qFQt")][g];
  }
  [FA(897, 1002, 1039, 908, "jxDS") + wA(-466, "@tmT", -429, -524) + "s"](i) {
    function t(A, n, g, a, x) {
      return jA(a, n - 387, g - -315);
    }
    function e(A, n, g, a, x) {
      return rA(g, n - 41, A - 79);
    }
    i[t(49, -33, -73, "0xOQ") + "ch"]((A) => console[e(-269, -144, "Ghht")](A));
  }
  [rA("vCxs", -252, -375) + FA(1096, 1038, 1141, 1125, ")8#n") + rA("raP5", -405, -335)](i) {
    function t(A, n, g, a, x) {
      return jA(n, n - 389, A - 258);
    }
    function e(A, n, g, a, x) {
      return wA(A - 330, g, g - 278, a - 1280);
    }
    i[t(595, "SHAL") + "ch"]((A) => console[e(665, 662, "8#Pk", 754)](A));
  }
  [rA("k4RS", -487, -485) + jA("TNH2", 301, 235)]() {
    function i(e, A, n, g, a) {
      return Re(g - 206, A - 116, a);
    }
    function t(e, A, n, g, a) {
      return FA(e - 238, e - 454, n - 148, g - 135, a);
    }
    return window[t(1412, 1361, 1341, 1397, "&LHH") + i(433, 367, 416, 469, "rZjq")][i(516, 389, 490, 471, "0Zk*") + t(1461, 1420, 1445, 1478, "taRe")];
  }
  [wA(-332, "Rc[r", -476, -392) + jA("^B)L", 198, 227) + wA(-468, "jxDS", -277, -374)]() {
    function i(g, a, x, I, c) {
      return jA(x, a - 6, c - 347);
    }
    function t(g, a, x, I, c) {
      return FA(g - 116, c - -863, x - 97, I - 26, a);
    }
    function e(g, a, x, I, c) {
      return jA(I, a - 239, x - 406);
    }
    function A(g, a, x, I, c) {
      return jA(c, a - 193, x - -790);
    }
    function n(g, a, x, I, c) {
      return FA(g - 24, c - -552, x - 451, I - 286, a);
    }
    try {
      if (i(550, 570, "taRe", 633, 630) !== i(695, 631, "k4RS", 877, 756)) {
        if (!this[n(621, "k4RS", 536, 391, 511) + "se"]) {
          if (i(698, 732, "sKs3", 681, 624) === A(-415, -317, -408, -305, "TNH2")) throw new Gi(A(-428, -378, -382, -507, "0Zk*") + n(369, "ib#a", 468, 262, 388) + i(745, 795, "@tmT", 685, 743) + e(753, 535, 630, "nNcr", 558) + ".");
          if (!this[e(747, 594, 675, "l23s", 596) + "se"]) throw new _0x3f65a2(t(92, "QSpK", 102, 16, 137) + n(717, "L4CQ", 626, 547, 607) + i(795, 854, "dQ)Q", 764, 760) + t(224, "@tmT", 313, 174, 227) + ".");
          if (!this[i(606, 584, "nNcr", 707, 703) + i(480, 657, "4fBr", 681, 590) + "d"][i(927, 810, "QSpK", 867, 809) + n(362, "k4RS", 446, 433, 398) + n(625, "4fBr", 479, 550, 541) + "ed"]()) throw new _0x1632c4(n(552, "kVZP", 507, 388, 500) + n(493, "X4@3", 622, 664, 542) + t(89, "nNcr", 124, -33, 78) + n(545, "Dz54", 438, 572, 483) + ".");
          this[e(845, 725, 820, "]0Lf", 762) + i(875, 665, "kVZP", 876, 778)] = new _0x392467(_0x43369a(this[A(-589, -525, -499, -401, "&LHH") + "se"], this[i(669, 781, "9w4#", 801, 695) + A(-490, -556, -495, -609, "*Mfi")]())), this[t(281, "]0Lf", 256, 177, 195) + i(865, 801, "&LHH", 796, 819) + "s"](this[A(-404, -428, -363, -386, "dQ)Q") + n(511, "taRe", 609, 632, 622)][e(721, 767, 692, "nNcr", 723) + "s"]), this[t(198, "HcXM", 132, 89, 89) + t(175, "dQ)Q", 197, 133, 164) + t(128, "3omv", 240, 126, 151)](this[e(758, 776, 830, "^B)L", 908) + e(899, 832, 871, "D!On", 751)][t(320, "]qf0", 349, 186, 292) + A(-408, -544, -514, -507, "9w4#")]);
        }
        if (!this[i(937, 751, "kVZP", 842, 816) + A(-449, -503, -519, -611, "*Mfi") + "d"][i(645, 692, "6]zj", 683, 612) + e(711, 918, 822, "rZjq", 713) + e(903, 763, 851, "X4@3", 949) + "ed"]())
          throw e(725, 608, 638, "ci8*", 615) === e(795, 733, 834, "3omv", 919) ? new _0x2491c5(e(782, 652, 703, "QSpK", 615) + e(1002, 983, 876, "!#OK", 927) + n(514, "qFQt", 434, 432, 540) + A(-502, -422, -467, -516, "9w4#") + ".") : new Gi(e(535, 737, 659, "!81I", 571) + t(174, "vCxs", 198, 218, 250) + A(-473, -684, -564, -570, "taRe") + A(-358, -414, -472, -367, "^B)L") + ".");
        this[t(29, "L4CQ", 190, 120, 73) + e(697, 860, 742, "]0Lf", 669)] = new da(Vs(this[A(-381, -419, -337, -320, "sKs3") + "se"], this[A(-446, -366, -451, -538, "&LHH") + A(-264, -460, -361, -329, "3omv")]())), this[n(670, "l23s", 490, 636, 553) + A(-570, -470, -508, -578, "]qf0") + "s"](this[A(-400, -260, -372, -249, ")8#n") + n(612, "Ghht", 612, 644, 527)][t(142, "6]zj", 291, 291, 187) + "s"]), this[t(174, "k4RS", 353, 348, 275) + n(592, "vCxs", 461, 573, 587) + i(657, 818, "8#Pk", 807, 691)](this[e(685, 710, 746, "*Mfi", 684) + e(789, 738, 852, "nNcr", 927)][i(604, 641, "D!On", 689, 631) + t(53, "*Mfi", 64, -1, 114)]);
      } else {
        _0x3446ce instanceof _0x5eaf6e && _0x5c1047[e(740, 773, 694, "P*rP", 742) + n(476, "k4RS", 600, 625, 589)](_0x47fe13);
        return;
      }
    } catch (g) {
      if (e(605, 788, 716, "D!On") !== e(871, 789, 789, "]0Lf")) {
        if (g instanceof Gi) {
          if (n(531, "taRe", 521, 482, 485) === n(440, "i$d9", 553, 542, 509)) throw new _0x374ba4(i(821, 776, "D!On", 685, 779) + n(501, ")8#n", 504, 619, 570) + t(278, "taRe", 291, 327, 212) + t(184, "rZjq", 387, 315, 299) + "d.");
          g[t(89, "k4RS", 192, 46, 125)]();
        } else if (g instanceof Error) {
          if (e(902, 858, 812, "8#Pk") === t(50, "!#OK", 94, 2, 102)) throw new _0x1f8dc6(n(414, "&LHH", 588, 594, 517) + A(-546, -564, -437, -343, "ci8*") + t(221, "Ghht", 387, 359, 301) + A(-313, -439, -378, -454, "TNH2") + ".");
          console[e(897, 847, 774, "taRe")](g);
        }
        const a = {};
        a[n(533, "raP5", 642, 609, 608) + t(101, "SHAL", 227, 223, 107)] = !1, a[i(483, 600, "azJ5", 491, 593) + "s"] = [], a[A(-505, -340, -379, -379, "k0fm") + A(-285, -291, -353, -378, ")8#n")] = [], a[n(456, "rZjq", 391, 603, 512) + A(-398, -309, -322, -343, "l23s") + i(718, 734, "Dk^q", 656, 781)] = void (513 * -13 + -6435 + 13104), a[t(190, "]qf0", 204, 238, 280)] = function() {
        }, a[n(423, "raP5", 508, 523, 412) + t(257, "0xOQ", 162, 288, 282)] = "", this[n(522, "9w4#", 609, 708, 617) + e(713, 690, 645, "i$d9")] = new da(a);
      } else return;
    }
  }
  [rA("jxDS", -436, -322) + Re(417, 486, "&LHH") + Re(319, 428, "sKs3") + "t"]() {
    function i(e, A, n, g, a) {
      return FA(e - 46, a - -1444, n - 5, g - 387, n);
    }
    function t(e, A, n, g, a) {
      return rA(a, A - 91, A - 1296);
    }
    return this[i(-475, -282, "*Mfi", -390, -401) + t(1082, 997, 935, 1001, "SHAL")];
  }
  [wA(-372, "6]zj", -482, -461) + wA(-398, "3omv", -514, -523) + wA(-325, "P*rP", -476, -362)]() {
    var g, a;
    function i(x, I, c, r, Q) {
      return rA(Q, I - 111, x - 1069);
    }
    function t(x, I, c, r, Q) {
      return wA(x - 498, x, c - 216, c - 1048);
    }
    function e(x, I, c, r, Q) {
      return wA(x - 13, Q, c - 383, c - 509);
    }
    if (!this[i(700, 652, 730, 624, "jxDS") + "se"])
      if (A(-17, -72, -58, -76, "i$d9") === i(822, 819, 856, 873, "6]zj")) _0x29c427[A(129, 137, 138, 124, "P*rP") + "ch"]((x) => _0x26de28[A(75, -42, -142, -100, "raP5")](x));
      else return;
    function A(x, I, c, r, Q) {
      return FA(x - 55, I - -1009, c - 387, r - 399, Q);
    }
    function n(x, I, c, r, Q) {
      return Re(r - 833, I - 246, I);
    }
    try {
      if (e(49, 91, -23, 54, "8#Pk") === n(1069, "X4@3", 1138, 1074, 1061)) {
        const x = JSON[i(673, 718, 695, 686, "Dz54")](this[t("qFQt", 819, 711, 776, 657) + "se"]);
        return (g = x == null ? void 0 : x[n(1272, "Ghht", 1323, 1266, 1172) + n(1287, "Ck5J", 1223, 1256, 1248)]) == null ? void 0 : g[i(799, 745, 841, 854, "X4@3") + i(607, 671, 589, 512, "HcXM")];
      } else return this[A(182, 94, 64, 15, "6]zj") + i(637, 566, 598, 565, "6]zj")];
    } catch (x) {
      if (A(-73, -6, 56, -32, "ib#a") !== A(90, -5, -58, 91, "]0Lf")) {
        _0x596cea[n(1115, "taRe", 1190, 1241)](n(1241, "0xOQ", 1358, 1235) + i(686, 648, 590, 648, "4fBr") + A(-189, -83, 14, 21, "P*rP") + e(117, 22, 143, 162, "Rc[r") + t("jxDS", 551, 584)), this[t("]qf0", 703, 679) + "se"] = void (-4357 * -1 + 2 * 3698 + 1679 * -7);
        return;
      } else {
        if (x instanceof Error)
          if (A(17, 39, 142, -76, "&LHH") === A(35, -36, 53, -61, "L4CQ")) L[i(691, 654, 683, 783, "@tmT") + n(1099, "jxDS", 1072, 1132)](x);
          else {
            const I = _0x1209e2[A(-41, -14, -10, -68, "Dk^q")](this[e(-94, 118, 3, -110, "Ghht") + "se"]);
            return (a = I == null ? void 0 : I[A(-128, -52, -125, -49, "vCxs") + e(53, 154, 77, 107, "k0fm")]) == null ? void 0 : a[t("HcXM", 645, 688) + i(743, 787, 810, 838, "9w4#")];
          }
        return;
      }
    }
  }
}
const zo = class zo extends oB {
  static getInstance() {
    if (!this._instance) {
      const i = new tB();
      this._instance = new zo(i);
    }
    return this._instance;
  }
};
S(zo, "_instance");
let ln = zo;
const ig = It(void 0);
ig.displayName = "CameraOptionsContext";
function NI() {
  const o = Ge(ig);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}
function iB({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e
}) {
  return {
    onPhotoTaken: t,
    captureMode: i ?? en.AUTO_CAPTURE,
    assetsDirectoryPath: iI(o),
    sessionToken: e
  };
}
function nB({
  cameraOptions: o,
  children: i
}) {
  const t = NA(() => iB(o), [o]);
  return /* @__PURE__ */ D(ig.Provider, { value: t, children: i });
}
const Xo = class Xo {
  constructor() {
    S(this, "lastDetails", {});
    S(this, "delayedTime", -31 * 67 + 2339 * 1 + -262);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Xo()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 3559 * 1 + 1371 * -5 + 3296;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && tg(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
S(Xo, "_instance");
let E0 = Xo;
const L0 = E0.getInstance(), FI = (o, i, t = Hc) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  L0.dispatchDelayedCustomEventOnChange(o, A, t);
}, gB = (o, i) => {
  L0.dispatchCustomEventOnChange(o, i);
}, aB = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  L0.dispatchCustomEventOnChange(o, e);
}, xB = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const n = A;
  L0.dispatchCustomEventOnChange(o, n);
}, IB = (o, { detection: i, fps: t, image: e, invalidValidators: A, isInCandidateSelection: n }) => {
  const g = {};
  g.image = e, g.data = {}, g.data.detection = i, g.data.fps = t, g.data.isInCandidateSelection = n, g.data.invalidValidators = A, g.data.imageResolution = {}, g.data.imageResolution.width = e.width, g.data.imageResolution.height = e.height;
  const a = g;
  L0.dispatchCustomEventOnChange(o, a);
}, un = (o, i) => {
  tg(o, i);
}, rB = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  _(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, gB(o, A);
  }, [t, e, o]);
};
function fn(o, i) {
  _(() => {
    const t = (e) => {
      i(e);
    };
    return document.addEventListener(o, t), () => {
      document.removeEventListener(o, t);
    };
  }, [i, o]);
}
const CB = (o) => o === Px.CONTROL ? !Ag() : !0;
function cB(o, i) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: n } = rt(), [g, a] = DA(), x = NA(() => {
    const E = n && i && i.isStreaming && i.getCameraSettings().facingMode;
    return E ? g ?? E === "user" : g ?? CB(o);
  }, [i, g, o, n]);
  function I() {
    t !== ie.LOADING && e(ie.RUNNING);
  }
  function c() {
    g === void (-5057 + -5057 * -1) ? a(!x) : a(!g);
  }
  async function r() {
    if (i) {
      e(ie.LOADING);
      try {
        await i.switchCamera(), e(ie.RUNNING);
      } catch (E) {
        if (E instanceof Error) {
          A(L.fromCameraError(E));
          return;
        }
      }
      a(void (12 * -158 + 4519 + -1 * 2623));
    }
  }
  function Q(E) {
    var d;
    switch ((d = E.detail) == null ? void 0 : d["instruction"]) {
      case yt.CONTINUE_DETECTION:
        I();
        break;
      case yt.TOGGLE_MIRROR:
        c();
        break;
      case yt.SWITCH_CAMERA:
        r();
        break;
      default:
        return;
    }
  }
  fn(o, Q);
  const C = {};
  return C.shouldCameraMirror = x, C;
}
function sB(o, i) {
  fn(o, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === yt.CONTINUE_DETECTION && Ts(Be.CONTROL, yt.CONTINUE_DETECTION);
  }), fn(Be.CONTROL, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === yt.CONTINUE_DETECTION && i();
  });
}
function BB(o, i) {
  _(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      aB(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
function QB(o) {
  return ke(Math.abs(o));
}
const EB = () => {
  const [o, i] = DA(null), t = LA(new eg(-3 * 652 + 4 * -53 + 2173));
  function e(n) {
    const { z: g } = n.accelerationIncludingGravity || {};
    if (!g) return;
    t.current.pushFixed(QB(g));
    const a = ke(s0(t.current)), x = {};
    x.z = a, i(x);
  }
  _(() => (window.addEventListener("devicemotion", Qs(e, Cs), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = o, A;
}, RI = (o, i) => {
  const t = LA(i);
  _(() => {
    t.current = i;
  }, [i]), _(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(o, e), () => {
      document.removeEventListener(o, e);
    };
  }, [o]);
};
var dB = Symbol.for("preact-signals");
function ng() {
  if (mt > 3 * 631 + 754 + -2646)
    mt--;
  else {
    for (var o, i = !1; void (-5339 + 19 * 281) !== C0; ) {
      var t = C0;
      for (C0 = void (-2575 * -2 + 9 * 431 + -9029 * 1), hn++; void (-32 * -2 + -61 * 29 + 55 * 31) !== t; ) {
        var e = t.o;
        if (t.o = void (1826 + -2 * 913), t.f &= -(-7310 + -2783 * -2 + 1747), !(13278 + -1327 * 10 & t.f) && vI(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !(6661 * -1 + -1569 + 8230));
        }
        t = e;
      }
    }
    if (hn = -5374 + 2 * 2687, mt--, i) throw o;
  }
}
var V = void (-9089 + -127 * 71 + 18106), C0 = void (8329 + -23 * 362 + -1 * 3), mt = 1 * 9423 + -1 * -4109 + -13532, hn = 4030 + 1693 * 5 + -12495, Ho = 269 * -29 + -9360 + 17161 * 1;
function MI(o) {
  if (void (10 * -641 + -2 * -4255 + -100 * 21) !== V) {
    var i = o.n;
    if (void (1701 + -706 * 11 + -1213 * -5) === i || i.t !== V)
      return i = { i: 0, S: o, p: V.s, n: void (-7082 * 1 + 515 * 16 + -1158), t: V, e: void (7526 + 142 * -53), x: void (1648 * 6 + -3912 + -166 * 36), r: i }, void (-18 * 38 + -1744 + 2428) !== V.s && (V.s.n = i), V.s = i, o.n = i, 1 * -3407 + 3103 * -3 + 12748 & V.f && o.S(i), i;
    if (-(-1 * -2277 + 63 * 114 + -9458) === i.i)
      return i.i = -1 * 8503 + -2 * -4183 + 137, void (-9661 + 1 * 9661) !== i.n && (i.n.p = i.p, void (-6397 + 1 * 6397) !== i.p && (i.p.n = i.n), i.p = V.s, i.n = void (674 * 14 + 53 * 14 + 10178 * -1), V.s.n = i, V.s = i), i;
  }
}
function uA(o) {
  this.v = o, this.i = 11619 + 1 * -11619, this.n = void (1702 + -974 * -1 + -4 * 669), this.t = void (-8251 + 37 * 223);
}
uA.prototype.brand = dB, uA.prototype.h = function() {
  return !(1209 + -1 * 8792 + 7583 * 1);
}, uA.prototype.S = function(o) {
  this.t !== o && void (-13 * 495 + -1 * 2920 + 9355) === o.e && (o.x = this.t, void (-4208 * 2 + -2116 + 2633 * 4) !== this.t && (this.t.e = o), this.t = o);
}, uA.prototype.U = function(o) {
  if (this.t !== void 0) {
    var i = o.e, t = o.x;
    void (3458 + -349 * 3 + -2411 * 1) !== i && (i.x = t, o.e = void (3 * -779 + -13 * -175 + -62 * -1)), void (1553 * 1 + -1398 * -3 + -7 * 821) !== t && (t.e = i, o.x = void (-1 * 8751 + -17 * -478 + 625)), o === this.t && (this.t = t);
  }
}, uA.prototype.subscribe = function(o) {
  var i = this;
  return ri(function() {
    var t = i.value, e = V;
    V = void (6005 * 1 + -7461 + -2 * -728);
    try {
      o(t);
    } finally {
      V = e;
    }
  });
}, uA.prototype.valueOf = function() {
  return this.value;
}, uA.prototype.toString = function() {
  return this.value + "";
}, uA.prototype.toJSON = function() {
  return this.value;
}, uA.prototype.peek = function() {
  var o = V;
  V = void (-9971 + -59 * -169);
  try {
    return this.value;
  } finally {
    V = o;
  }
}, Object.defineProperty(uA.prototype, "value", { get: function() {
  var o = MI(this);
  return void (7616 + -467 * 8 + 10 * -388) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (hn > -2026 * 1 + -5 * 49 + 1 * 2371) throw new Error("Cycle detected");
    this.v = o, this.i++, Ho++, mt++;
    try {
      for (var i = this.t; void (501 * -5 + 746 + 1759 * 1) !== i; i = i.x) i.t.N();
    } finally {
      ng();
    }
  }
} });
function WI(o) {
  return new uA(o);
}
function vI(o) {
  for (var i = o.s; i !== void 0; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(-1 * 733 + 4 * -274 + 1829);
  return !(-6290 + 105 * 26 + -3 * -1187);
}
function LI(o) {
  for (var i = o.s; void (8139 + 3 * -2713) !== i; i = i.n) {
    var t = i.S.n;
    if (void (-6987 + 753 * -9 + -2294 * -6) !== t && (i.r = t), i.S.n = i, i.i = -(746 * -6 + 3493 * -1 + -2 * -3985), void (2382 + -6 * 397) === i.n) {
      o.s = i;
      break;
    }
  }
}
function JI(o) {
  for (var i = o.s, t = void (9645 + -1 * 6133 + -2 * 1756); void (3415 + 3415 * -1) !== i; ) {
    var e = i.p;
    -(-8852 + 2 * 2129 + 4595) === i.i ? (i.S.U(i), void (3002 + 1 * 5651 + -8653) !== e && (e.n = i.n), void (-731 + -1 * 7306 + 1 * 8037) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, void (-9372 + -1451 * 1 + -10823 * -1) !== i.r && (i.r = void (-5264 + -1 * 9739 + -15003 * -1)), i = e;
  }
  o.s = t;
}
function ft(o) {
  uA.call(this, void (-3877 + 4 * -1864 + 11333)), this.x = o, this.s = void (-4093 + 4093 * 1), this.g = Ho - (-1 * 641 + 2209 * 2 + -3776), this.f = -4593 + -3 * -554 + 587 * 5;
}
(ft.prototype = new uA()).h = function() {
  if (this.f &= -(5 * 1999 + -43 * -199 + -18549), -95 * -34 + -924 + -2305 & this.f) return !(4622 + -167 * 57 + -4898 * -1);
  if ((36 & this.f) == 32) return !(9373 + 123 * -16 + -1 * 7405);
  if (this.f &= -(-8669 + 1 * 5207 + 3467), this.g === Ho) return !(6548 + 6548 * -1);
  if (this.g = Ho, this.f |= 2 * -1205 + -45 + -8 * -307, this.i > 6648 + 3 * -2216 && !vI(this)) return this.f &= -(-473 * -7 + -5963 + 1 * 2654), !(4818 + -18 * 259 + -156);
  var o = V;
  try {
    LI(this), V = this;
    var i = this.x();
    (-8094 + -10 * -811 & this.f || this.v !== i || -15935 + 15935 * 1 === this.i) && (this.v = i, this.f &= -(-655 * -1 + 61 * 74 + -5152), this.i++);
  } catch (t) {
    this.v = t, this.f |= 128 * 41 + -5 * 90 + -1594 * 3, this.i++;
  }
  return V = o, JI(this), this.f &= -(-8537 * -1 + 4942 + -13477 * 1), !(-2933 + 2933 * 1);
}, ft.prototype.S = function(o) {
  if (void (5676 + -103 * -67 + -12577 * 1) === this.t) {
    this.f |= -8617 + 2467 * 1 + -6 * -1031;
    for (var i = this.s; void (1760 + 1 * -4447 + 2687) !== i; i = i.n) i.S.S(i);
  }
  uA.prototype.S.call(this, o);
}, ft.prototype.U = function(o) {
  if (void (14917 + 2131 * -7) !== this.t && (uA.prototype.U.call(this, o), this.t === void 0)) {
    this.f &= -33;
    for (var i = this.s; void (-1 * 1411 + -5371 + -6782 * -1) !== i; i = i.n) i.S.U(i);
  }
}, ft.prototype.N = function() {
  if (!(-1 * -9466 + 5 * 886 + 13894 * -1 & this.f)) {
    this.f |= 52 * 173 + 1138 + -10128;
    for (var o = this.t; void (-5229 + 747 * 7) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(ft.prototype, "value", { get: function() {
  if (-2986 * 1 + -213 * -41 + -5746 & this.f) throw new Error("Cycle detected");
  var o = MI(this);
  if (this.h(), o !== void 0 && (o.i = this.i), -8691 + 57 * -172 + -18511 * -1 & this.f) throw this.v;
  return this.v;
} });
function lB(o) {
  return new ft(o);
}
function UI(o) {
  var i = o.u;
  if (o.u = void (-342 * 28 + -7527 + 1 * 17103), typeof i == "function") {
    mt++;
    var t = V;
    V = void (-12 * -58 + 3450 + -4146);
    try {
      i();
    } catch (e) {
      throw o.f &= -(1 * 2018 + 5076 + 1 * -7092), o.f |= -2 * 3264 + 1519 + 5017, gg(o), e;
    } finally {
      V = t, ng();
    }
  }
}
function gg(o) {
  for (var i = o.s; void (3486 + -581 * 6) !== i; i = i.n) i.S.U(i);
  o.x = void (-914 + 205 * -22 + 5424), o.s = void (1687 * 4 + 173 * -2 + -3 * 2134), UI(o);
}
function uB(o) {
  if (V !== this) throw new Error("Out-of-order effect");
  JI(this), V = o, this.f &= -(7126 * 1 + 4359 + -11483), 8 & this.f && gg(this), ng();
}
function o0(o) {
  this.x = o, this.u = void (1 * 7525 + 111 * 3 + -7858), this.s = void (-61 * -5 + -5655 + 5350), this.o = void (-2 * -1437 + -7720 + 1 * 4846), this.f = 4388 + -484 * 9;
}
o0.prototype.c = function() {
  var o = this.S();
  try {
    if (564 + -21 * 76 + 1040 & this.f || void (-2 * 4987 + 1 * 4397 + 39 * 143) === this.x) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, o0.prototype.S = function() {
  if (2 * 604 + 349 * 11 + -58 * 87 & this.f) throw new Error("Cycle detected");
  this.f |= -22 * -65 + 2 * 1709 + -4847, this.f &= -(9833 + 2 * -1360 + -222 * 32), UI(this), LI(this), mt++;
  var o = V;
  return V = this, uB.bind(this, o);
}, o0.prototype.N = function() {
  !(-5495 + -13 * -609 + -2420 & this.f) && (this.f |= -1 * -4889 + 6310 + -11197, this.o = C0, C0 = this);
}, o0.prototype.d = function() {
  this.f |= 725 * -3 + 6565 + -4382, 1 & this.f || gg(this);
};
function ri(o) {
  var i = new o0(o);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var Ni;
function pt(o, i) {
  J[o] = i.bind(null, J[o] || function() {
  });
}
function V0(o) {
  Ni && Ni(), Ni = o && o.S();
}
function YI(o) {
  var i = this, t = o.data, e = Ot(t);
  e.value = t;
  var A = NA(function() {
    for (var n = i.__v; n = n.__; ) if (n.__c) {
      n.__c.__$f |= 32 * -6 + 6658 + -18 * 359;
      break;
    }
    return i.__$u.c = function() {
      var g;
      !Ta(A.peek()) && -11566 + -503 * -23 === ((g = i.base) == null ? void (-2 * -1983 + 463 * 4 + -5818) : g.nodeType) ? i.base.data = A.peek() : (i.__$f |= 1 * 2695 + 9772 + -23 * 542, i.setState({}));
    }, lB(function() {
      var g = e.value.value;
      return -1 * -9259 + 3889 * -1 + -3 * 1790 === g ? 0 : !(-589 * 12 + -5625 + 12693) === g ? "" : g || "";
    });
  }, []);
  return A.value;
}
YI.displayName = "_st";
var pn = {};
pn.configurable = !(-9361 + 8413 * -1 + 8887 * 2), pn.value = void (8548 + 3 * -1847 + 97 * -31);
var yn = {};
yn.configurable = !(-9286 * 1 + -545 * -11 + 3291), yn.value = YI;
var Dn = {};
Dn.configurable = !0, Dn.get = function() {
  var o = {};
  return o.data = this, o;
};
var mn = {};
mn.configurable = !(-433 * 4 + 2798 * 2 + -3864), mn.value = 1;
var jt = {};
jt.constructor = pn, jt.type = yn, jt.props = Dn, jt.__b = mn, Object.defineProperties(uA.prototype, jt), pt("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var n = e[A];
      n instanceof uA && (t || (i.__np = t = {}), t[A] = n, e[A] = n.peek());
    }
  }
  o(i);
}), pt("__r", function(o, i) {
  V0();
  var t, e = i.__c;
  e && (e.__$f &= -(-5911 + -2018 * -2 + 1877 * 1), void (-1 * 8387 + 3120 + 5267) === (t = e.__$u) && (e.__$u = t = function(A) {
    var n;
    return ri(function() {
      n = this;
    }), n.c = function() {
      e.__$f |= -12129 + 12130 * 1, e.setState({});
    }, n;
  }())), V0(t), o(i);
}), pt("__e", function(o, i, t, e) {
  V0(), o(i, t, e);
}), pt("diffed", function(o, i) {
  V0();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var n = t.U;
      if (n) for (var g in n) {
        var a = n[g];
        void (3134 * 2 + 29 * -185 + -903) !== a && !(g in e) && (a.d(), n[g] = void 0);
      }
      else t.U = n = {};
      for (var x in e) {
        var I = n[x], c = e[x];
        void (9544 + -5 * -1555 + -17319) === I ? (I = fB(t, x, c, A), n[x] = I) : I.o(c, A);
      }
    }
  }
  o(i);
});
function fB(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, n = WI(t);
  return { o: function(g, a) {
    n.value = g, e = a;
  }, d: ri(function() {
    var g = n.value.value;
    e[i] !== g && (e[i] = g, A ? o[i] = g : g ? o.setAttribute(i, g) : o.removeAttribute(i));
  }) };
}
pt("unmount", function(o, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-15382 + -15382 * -1);
        for (var A in e) {
          var n = e[A];
          n && n.d();
        }
      }
    }
  } else {
    var g = i.__c;
    if (g) {
      var a = g.__$u;
      a && (g.__$u = void (-2262 + 172 * -26 + 91 * 74), a.d());
    }
  }
  o(i);
}), pt("__h", function(o, i, t, e) {
  (e < -576 * -12 + -3903 + -167 * 18 || 1188 + 1 * -2843 + 1664 === e) && (i.__$f |= 8167 + -19 * -67 + -9438), o(i, t, e);
}), ne.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && void (1232 * 1 + -137 * 61 + 285 * 25) !== t.s || -3599 * 2 + 1019 * -3 + 1 * 10259 & this.__$f)) return !0;
  if (-7734 * -1 + -21 * -467 + -17538 & this.__$f) return !(-125 * -5 + -2 * -2627 + -5879);
  for (var e in i) return !(160 * -16 + -5220 + 7780);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(3 * 1246 + 68 * 1 + 173 * -22);
  for (var n in this.props) if (!(n in o)) return !(-2 * -1289 + -809 * -5 + -6623);
  return !1;
};
function Ot(o) {
  return NA(function() {
    return WI(o);
  }, []);
}
function hB(o) {
  var i = LA(o);
  i.current = o, _(function() {
    return ri(function() {
      return i.current();
    });
  }, []);
}
const pB = (o) => {
  const i = Ot(!1);
  return RI(o, (e) => {
    e.detail && (i.value = e.detail.animationEnd);
  }), i;
}, yB = async () => WebAssembly.validate(new Uint8Array([-4923 + 4923 * 1, -843 + -1 * -940, 1627 + -5261 * -1 + -6773, -5 * -949 + 1121 * 5 + -10241, 12 * 27 + -1231 * 1 + -1 * -908, 1 * 8774 + 6 * 1663 + 586 * -32, 0, -1 * 9172 + 1 * 2109 + 7063, -180 * -6 + -6232 + -1 * -5153, -1603 + 7 * -1109 + -1 * -9371, 1091 * 1 + 5324 * 1 + -6414, 96, 12 * 501 + 10 * 715 + -13162, 1, -1 * -4778 + -8773 + 4118, -6 * 324 + 2297 * 1 + 350 * -1, 4786 + 3 * -2458 + 2590, -2543 + -2027 * 1 + 4571, -2374 + -2 * -1187, -5690 * -1 + 8309 + -4663 * 3, 3782 * -2 + 5242 + 2332, 7554 + 8075 * 1 + -15628 * 1, -6976 + -6 * 502 + 9996, 0, 65, -9416 + -88 * -107, 1131 + 878 * -1, 7109 + -1 * 7094, 253, 733 + 1 * -5678 + 1 * 5043, 11]));
function DB() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(10048 + -12 * 836);
}
function mB() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = DB();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function wB(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const la = (o) => Math.round(o / 500) * 500 / (6668 + 1 * -8668 + -24 * -125), Et = (o) => o ? o <= 1 ? Math.round(o * (1389 * 5 + 2 * -620 + -3 * 1895)) / (1 * 613 + -1 * 1909 + 1316) : Math.round(o / (-8577 + 4856 * -2 + 18339)) * (253 * -30 + -7362 + 15002) : 1220 + -294 * 31 + -1 * -7894, bB = (o) => Math.round(o * (1 * -5679 + -5157 + 10838)) / 2;
async function kB() {
  return await yB() ? ra.SIMD : ra.NO_SIMD;
}
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, OI = {}, ua = {}, GB = SB;
function SB(o, i) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, n = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(g, a) {
    t[e] = function(x) {
      if (n)
        if (n = !1, x)
          a(x);
        else {
          for (var I = new Array(arguments.length - 1), c = 0; c < I.length; )
            I[c++] = arguments[c];
          g.apply(null, I);
        }
    };
    try {
      o.apply(i || null, t);
    } catch (x) {
      n && (n = !1, a(x));
    }
  });
}
var HI = {};
(function(o) {
  var i = o;
  i.length = function(g) {
    var a = g.length;
    if (!a)
      return 0;
    for (var x = 0; --a % 4 > 1 && g.charAt(a) === "="; )
      ++x;
    return Math.ceil(g.length * 3) / 4 - x;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  i.encode = function(g, a, x) {
    for (var I = null, c = [], r = 0, Q = 0, C; a < x; ) {
      var E = g[a++];
      switch (Q) {
        case 0:
          c[r++] = t[E >> 2], C = (E & 3) << 4, Q = 1;
          break;
        case 1:
          c[r++] = t[C | E >> 4], C = (E & 15) << 2, Q = 2;
          break;
        case 2:
          c[r++] = t[C | E >> 6], c[r++] = t[E & 63], Q = 0;
          break;
      }
      r > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, c)), r = 0);
    }
    return Q && (c[r++] = t[C], c[r++] = 61, Q === 1 && (c[r++] = 61)), I ? (r && I.push(String.fromCharCode.apply(String, c.slice(0, r))), I.join("")) : String.fromCharCode.apply(String, c.slice(0, r));
  };
  var n = "invalid encoding";
  i.decode = function(g, a, x) {
    for (var I = x, c = 0, r, Q = 0; Q < g.length; ) {
      var C = g.charCodeAt(Q++);
      if (C === 61 && c > 1)
        break;
      if ((C = e[C]) === void 0)
        throw Error(n);
      switch (c) {
        case 0:
          r = C, c = 1;
          break;
        case 1:
          a[x++] = r << 2 | (C & 48) >> 4, r = C, c = 2;
          break;
        case 2:
          a[x++] = (r & 15) << 4 | (C & 60) >> 2, r = C, c = 3;
          break;
        case 3:
          a[x++] = (r & 3) << 6 | C, c = 0;
          break;
      }
    }
    if (c === 1)
      throw Error(n);
    return x - I;
  }, i.test = function(g) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(g);
  };
})(HI);
var NB = Ci;
function Ci() {
  this._listeners = {};
}
Ci.prototype.on = function(o, i, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
Ci.prototype.off = function(o, i) {
  if (o === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
Ci.prototype.emit = function(o) {
  var i = this._listeners[o];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var FB = fa(fa);
function fa(o) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function A(x, I, c) {
      i[0] = x, I[c] = t[0], I[c + 1] = t[1], I[c + 2] = t[2], I[c + 3] = t[3];
    }
    function n(x, I, c) {
      i[0] = x, I[c] = t[3], I[c + 1] = t[2], I[c + 2] = t[1], I[c + 3] = t[0];
    }
    o.writeFloatLE = e ? A : n, o.writeFloatBE = e ? n : A;
    function g(x, I) {
      return t[0] = x[I], t[1] = x[I + 1], t[2] = x[I + 2], t[3] = x[I + 3], i[0];
    }
    function a(x, I) {
      return t[3] = x[I], t[2] = x[I + 1], t[1] = x[I + 2], t[0] = x[I + 3], i[0];
    }
    o.readFloatLE = e ? g : a, o.readFloatBE = e ? a : g;
  }() : function() {
    function i(e, A, n, g) {
      var a = A < 0 ? 1 : 0;
      if (a && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), n, g);
      else if (isNaN(A))
        e(2143289344, n, g);
      else if (A > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, n, g);
      else if (A < 11754943508222875e-54)
        e((a << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, n, g);
      else {
        var x = Math.floor(Math.log(A) / Math.LN2), I = Math.round(A * Math.pow(2, -x) * 8388608) & 8388607;
        e((a << 31 | x + 127 << 23 | I) >>> 0, n, g);
      }
    }
    o.writeFloatLE = i.bind(null, ha), o.writeFloatBE = i.bind(null, pa);
    function t(e, A, n) {
      var g = e(A, n), a = (g >> 31) * 2 + 1, x = g >>> 23 & 255, I = g & 8388607;
      return x === 255 ? I ? NaN : a * (1 / 0) : x === 0 ? a * 1401298464324817e-60 * I : a * Math.pow(2, x - 150) * (I + 8388608);
    }
    o.readFloatLE = t.bind(null, ya), o.readFloatBE = t.bind(null, Da);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function A(x, I, c) {
      i[0] = x, I[c] = t[0], I[c + 1] = t[1], I[c + 2] = t[2], I[c + 3] = t[3], I[c + 4] = t[4], I[c + 5] = t[5], I[c + 6] = t[6], I[c + 7] = t[7];
    }
    function n(x, I, c) {
      i[0] = x, I[c] = t[7], I[c + 1] = t[6], I[c + 2] = t[5], I[c + 3] = t[4], I[c + 4] = t[3], I[c + 5] = t[2], I[c + 6] = t[1], I[c + 7] = t[0];
    }
    o.writeDoubleLE = e ? A : n, o.writeDoubleBE = e ? n : A;
    function g(x, I) {
      return t[0] = x[I], t[1] = x[I + 1], t[2] = x[I + 2], t[3] = x[I + 3], t[4] = x[I + 4], t[5] = x[I + 5], t[6] = x[I + 6], t[7] = x[I + 7], i[0];
    }
    function a(x, I) {
      return t[7] = x[I], t[6] = x[I + 1], t[5] = x[I + 2], t[4] = x[I + 3], t[3] = x[I + 4], t[2] = x[I + 5], t[1] = x[I + 6], t[0] = x[I + 7], i[0];
    }
    o.readDoubleLE = e ? g : a, o.readDoubleBE = e ? a : g;
  }() : function() {
    function i(e, A, n, g, a, x) {
      var I = g < 0 ? 1 : 0;
      if (I && (g = -g), g === 0)
        e(0, a, x + A), e(1 / g > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, x + n);
      else if (isNaN(g))
        e(0, a, x + A), e(2146959360, a, x + n);
      else if (g > 17976931348623157e292)
        e(0, a, x + A), e((I << 31 | 2146435072) >>> 0, a, x + n);
      else {
        var c;
        if (g < 22250738585072014e-324)
          c = g / 5e-324, e(c >>> 0, a, x + A), e((I << 31 | c / 4294967296) >>> 0, a, x + n);
        else {
          var r = Math.floor(Math.log(g) / Math.LN2);
          r === 1024 && (r = 1023), c = g * Math.pow(2, -r), e(c * 4503599627370496 >>> 0, a, x + A), e((I << 31 | r + 1023 << 20 | c * 1048576 & 1048575) >>> 0, a, x + n);
        }
      }
    }
    o.writeDoubleLE = i.bind(null, ha, 0, 4), o.writeDoubleBE = i.bind(null, pa, 4, 0);
    function t(e, A, n, g, a) {
      var x = e(g, a + A), I = e(g, a + n), c = (I >> 31) * 2 + 1, r = I >>> 20 & 2047, Q = 4294967296 * (I & 1048575) + x;
      return r === 2047 ? Q ? NaN : c * (1 / 0) : r === 0 ? c * 5e-324 * Q : c * Math.pow(2, r - 1075) * (Q + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, ya, 0, 4), o.readDoubleBE = t.bind(null, Da, 4, 0);
  }(), o;
}
function ha(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function pa(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function ya(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function Da(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function ma(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var RB = MB;
function MB(o) {
  try {
    if (typeof ma != "function")
      return null;
    var i = ma(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var KI = {};
(function(o) {
  var i = o;
  i.length = function(t) {
    for (var e = 0, A = 0, n = 0; n < t.length; ++n)
      A = t.charCodeAt(n), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 ? (++n, e += 4) : e += 3;
    return e;
  }, i.read = function(t, e, A) {
    var n = A - e;
    if (n < 1)
      return "";
    for (var g = null, a = [], x = 0, I; e < A; )
      I = t[e++], I < 128 ? a[x++] = I : I > 191 && I < 224 ? a[x++] = (I & 31) << 6 | t[e++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[x++] = 55296 + (I >> 10), a[x++] = 56320 + (I & 1023)) : a[x++] = (I & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, x > 8191 && ((g || (g = [])).push(String.fromCharCode.apply(String, a)), x = 0);
    return g ? (x && g.push(String.fromCharCode.apply(String, a.slice(0, x))), g.join("")) : String.fromCharCode.apply(String, a.slice(0, x));
  }, i.write = function(t, e, A) {
    for (var n = A, g, a, x = 0; x < t.length; ++x)
      g = t.charCodeAt(x), g < 128 ? e[A++] = g : g < 2048 ? (e[A++] = g >> 6 | 192, e[A++] = g & 63 | 128) : (g & 64512) === 55296 && ((a = t.charCodeAt(x + 1)) & 64512) === 56320 ? (g = 65536 + ((g & 1023) << 10) + (a & 1023), ++x, e[A++] = g >> 18 | 240, e[A++] = g >> 12 & 63 | 128, e[A++] = g >> 6 & 63 | 128, e[A++] = g & 63 | 128) : (e[A++] = g >> 12 | 224, e[A++] = g >> 6 & 63 | 128, e[A++] = g & 63 | 128);
    return A - n;
  };
})(KI);
var WB = vB;
function vB(o, i, t) {
  var e = t || 8192, A = e >>> 1, n = null, g = e;
  return function(a) {
    if (a < 1 || a > A)
      return o(a);
    g + a > e && (n = o(e), g = 0);
    var x = i.call(n, g, g += a);
    return g & 7 && (g = (g | 7) + 1), x;
  };
}
var Fi, wa;
function LB() {
  if (wa)
    return Fi;
  wa = 1, Fi = i;
  var o = Ct();
  function i(n, g) {
    this.lo = n >>> 0, this.hi = g >>> 0;
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
  i.fromNumber = function(n) {
    if (n === 0)
      return t;
    var g = n < 0;
    g && (n = -n);
    var a = n >>> 0, x = (n - a) / 4294967296 >>> 0;
    return g && (x = ~x >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++x > 4294967295 && (x = 0))), new i(a, x);
  }, i.from = function(n) {
    if (typeof n == "number")
      return i.fromNumber(n);
    if (o.isString(n))
      if (o.Long)
        n = o.Long.fromString(n);
      else
        return i.fromNumber(parseInt(n, 10));
    return n.low || n.high ? new i(n.low >>> 0, n.high >>> 0) : t;
  }, i.prototype.toNumber = function(n) {
    if (!n && this.hi >>> 31) {
      var g = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return g || (a = a + 1 >>> 0), -(g + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, i.prototype.toLong = function(n) {
    return o.Long ? new o.Long(this.lo | 0, this.hi | 0, !!n) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!n };
  };
  var A = String.prototype.charCodeAt;
  return i.fromHash = function(n) {
    return n === e ? t : new i(
      (A.call(n, 0) | A.call(n, 1) << 8 | A.call(n, 2) << 16 | A.call(n, 3) << 24) >>> 0,
      (A.call(n, 4) | A.call(n, 5) << 8 | A.call(n, 6) << 16 | A.call(n, 7) << 24) >>> 0
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
    var n = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ n) >>> 0, this.lo = (this.lo << 1 ^ n) >>> 0, this;
  }, i.prototype.zzDecode = function() {
    var n = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ n) >>> 0, this.hi = (this.hi >>> 1 ^ n) >>> 0, this;
  }, i.prototype.length = function() {
    var n = this.lo, g = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? g === 0 ? n < 16384 ? n < 128 ? 1 : 2 : n < 2097152 ? 3 : 4 : g < 16384 ? g < 128 ? 5 : 6 : g < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Fi;
}
var ba;
function Ct() {
  return ba || (ba = 1, function(o) {
    var i = o;
    i.asPromise = GB, i.base64 = HI, i.EventEmitter = NB, i.float = FB, i.inquire = RB, i.utf8 = KI, i.pool = WB, i.LongBits = LB(), i.isNode = !!(typeof Pe < "u" && Pe && Pe.process && Pe.process.versions && Pe.process.versions.node), i.global = i.isNode && Pe || typeof window < "u" && window || typeof self < "u" && self || Pe, i.emptyArray = Object.freeze ? Object.freeze([]) : (
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
    i.isSet = function(A, n) {
      var g = A[n];
      return g != null && A.hasOwnProperty(n) ? typeof g != "object" || (Array.isArray(g) ? g.length : Object.keys(g).length) > 0 : !1;
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
    }, i.longFromHash = function(A, n) {
      var g = i.LongBits.fromHash(A);
      return i.Long ? i.Long.fromBits(g.lo, g.hi, n) : g.toNumber(!!n);
    };
    function t(A, n, g) {
      for (var a = Object.keys(n), x = 0; x < a.length; ++x)
        (A[a[x]] === void 0 || !g) && (A[a[x]] = n[a[x]]);
      return A;
    }
    i.merge = t, i.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function n(g, a) {
        if (!(this instanceof n))
          return new n(g, a);
        Object.defineProperty(this, "message", { get: function() {
          return g;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
      }
      return n.prototype = Object.create(Error.prototype, {
        constructor: {
          value: n,
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
      }), n;
    }
    i.newError = e, i.ProtocolError = e("ProtocolError"), i.oneOfGetter = function(A) {
      for (var n = {}, g = 0; g < A.length; ++g)
        n[A[g]] = 1;
      return function() {
        for (var a = Object.keys(this), x = a.length - 1; x > -1; --x)
          if (n[a[x]] === 1 && this[a[x]] !== void 0 && this[a[x]] !== null)
            return a[x];
      };
    }, i.oneOfSetter = function(A) {
      return function(n) {
        for (var g = 0; g < A.length; ++g)
          A[g] !== n && delete this[A[g]];
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
      function(n, g) {
        return new A(n, g);
      }, i._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(n) {
        return new A(n);
      };
    };
  }(ua)), ua;
}
var PI = T, ge = Ct(), wn, ci = ge.LongBits, ka = ge.base64, Ga = ge.utf8;
function J0(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function ag() {
}
function JB(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function T() {
  this.len = 0, this.head = new J0(ag, 0, 0), this.tail = this.head, this.states = null;
}
var TI = function() {
  return ge.Buffer ? function() {
    return (T.create = function() {
      return new wn();
    })();
  } : function() {
    return new T();
  };
};
T.create = TI();
T.alloc = function(o) {
  return new ge.Array(o);
};
ge.Array !== Array && (T.alloc = ge.pool(T.alloc, ge.Array.prototype.subarray));
T.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new J0(o, i, t), this.len += i, this;
};
function xg(o, i, t) {
  i[t] = o & 255;
}
function UB(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function Ig(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
Ig.prototype = Object.create(J0.prototype);
Ig.prototype.fn = UB;
T.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new Ig(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
T.prototype.int32 = function(o) {
  return o < 0 ? this._push(rg, 10, ci.fromNumber(o)) : this.uint32(o);
};
T.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function rg(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
T.prototype.uint64 = function(o) {
  var i = ci.from(o);
  return this._push(rg, i.length(), i);
};
T.prototype.int64 = T.prototype.uint64;
T.prototype.sint64 = function(o) {
  var i = ci.from(o).zzEncode();
  return this._push(rg, i.length(), i);
};
T.prototype.bool = function(o) {
  return this._push(xg, 1, o ? 1 : 0);
};
function bn(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
T.prototype.fixed32 = function(o) {
  return this._push(bn, 4, o >>> 0);
};
T.prototype.sfixed32 = T.prototype.fixed32;
T.prototype.fixed64 = function(o) {
  var i = ci.from(o);
  return this._push(bn, 4, i.lo)._push(bn, 4, i.hi);
};
T.prototype.sfixed64 = T.prototype.fixed64;
T.prototype.float = function(o) {
  return this._push(ge.float.writeFloatLE, 4, o);
};
T.prototype.double = function(o) {
  return this._push(ge.float.writeDoubleLE, 8, o);
};
var YB = ge.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
T.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(xg, 1, 0);
  if (ge.isString(o)) {
    var t = T.alloc(i = ka.length(o));
    ka.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(YB, i, o);
};
T.prototype.string = function(o) {
  var i = Ga.length(o);
  return i ? this.uint32(i)._push(Ga.write, i, o) : this._push(xg, 1, 0);
};
T.prototype.fork = function() {
  return this.states = new JB(this), this.head = this.tail = new J0(ag, 0, 0), this.len = 0, this;
};
T.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new J0(ag, 0, 0), this.len = 0), this;
};
T.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
T.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
T._configure = function(o) {
  wn = o, T.create = TI(), wn._configure();
};
var OB = de, qI = PI;
(de.prototype = Object.create(qI.prototype)).constructor = de;
var Ue = Ct();
function de() {
  qI.call(this);
}
de._configure = function() {
  de.alloc = Ue._Buffer_allocUnsafe, de.writeBytesBuffer = Ue.Buffer && Ue.Buffer.prototype instanceof Uint8Array && Ue.Buffer.prototype.set.name === "set" ? function(o, i, t) {
    i.set(o, t);
  } : function(o, i, t) {
    if (o.copy)
      o.copy(i, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        i[t++] = o[e++];
  };
};
de.prototype.bytes = function(o) {
  Ue.isString(o) && (o = Ue._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(de.writeBytesBuffer, i, o), this;
};
function HB(o, i, t) {
  o.length < 40 ? Ue.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
de.prototype.string = function(o) {
  var i = Ue.Buffer.byteLength(o);
  return this.uint32(i), i && this._push(HB, i, o), this;
};
de._configure();
var jI = iA, le = Ct(), kn, ZI = le.LongBits, KB = le.utf8;
function Ce(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function iA(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var Sa = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new iA(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new iA(o);
  throw Error("illegal buffer");
}, VI = function() {
  return le.Buffer ? function(o) {
    return (iA.create = function(i) {
      return le.Buffer.isBuffer(i) ? new kn(i) : Sa(i);
    })(o);
  } : Sa;
};
iA.create = VI();
iA.prototype._slice = le.Array.prototype.subarray || /* istanbul ignore next */
le.Array.prototype.slice;
iA.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Ce(this, 10);
    return o;
  };
}();
iA.prototype.int32 = function() {
  return this.uint32() | 0;
};
iA.prototype.sint32 = function() {
  var o = this.uint32();
  return o >>> 1 ^ -(o & 1) | 0;
};
function Ri() {
  var o = new ZI(0, 0), i = 0;
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
        throw Ce(this);
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
        throw Ce(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
iA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Ko(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
iA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ce(this, 4);
  return Ko(this.buf, this.pos += 4);
};
iA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ce(this, 4);
  return Ko(this.buf, this.pos += 4) | 0;
};
function Na() {
  if (this.pos + 8 > this.len)
    throw Ce(this, 8);
  return new ZI(Ko(this.buf, this.pos += 4), Ko(this.buf, this.pos += 4));
}
iA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Ce(this, 4);
  var o = le.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
iA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Ce(this, 4);
  var o = le.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
iA.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw Ce(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
iA.prototype.string = function() {
  var o = this.bytes();
  return KB.read(o, 0, o.length);
};
iA.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw Ce(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw Ce(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
iA.prototype.skipType = function(o) {
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
iA._configure = function(o) {
  kn = o, iA.create = VI(), kn._configure();
  var i = le.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  le.merge(iA.prototype, {
    int64: function() {
      return Ri.call(this)[i](!1);
    },
    uint64: function() {
      return Ri.call(this)[i](!0);
    },
    sint64: function() {
      return Ri.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return Na.call(this)[i](!0);
    },
    sfixed64: function() {
      return Na.call(this)[i](!1);
    }
  });
};
var PB = at, _I = jI;
(at.prototype = Object.create(_I.prototype)).constructor = at;
var Fa = Ct();
function at(o) {
  _I.call(this, o);
}
at._configure = function() {
  Fa.Buffer && (at.prototype._slice = Fa.Buffer.prototype.slice);
};
at.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
at._configure();
var zI = {}, TB = d0, Cg = Ct();
(d0.prototype = Object.create(Cg.EventEmitter.prototype)).constructor = d0;
function d0(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  Cg.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
d0.prototype.rpcCall = function o(i, t, e, A, n) {
  if (!A)
    throw TypeError("request must be specified");
  var g = this;
  if (!n)
    return Cg.asPromise(o, g, i, t, e, A);
  if (!g.rpcImpl) {
    setTimeout(function() {
      n(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return g.rpcImpl(
      i,
      t[g.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(a, x) {
        if (a)
          return g.emit("error", a, i), n(a);
        if (x === null) {
          g.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(x instanceof e))
          try {
            x = e[g.responseDelimited ? "decodeDelimited" : "decode"](x);
          } catch (I) {
            return g.emit("error", I, i), n(I);
          }
        return g.emit("data", x, i), n(null, x);
      }
    );
  } catch (a) {
    g.emit("error", a, i), setTimeout(function() {
      n(a);
    }, 0);
    return;
  }
};
d0.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var i = o;
  i.Service = TB;
})(zI);
var qB = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = PI, i.BufferWriter = OB, i.Reader = jI, i.BufferReader = PB, i.util = Ct(), i.rpc = zI, i.roots = qB, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(OI);
var O = OI;
const h = O.Reader, K = O.Writer, l = O.util, B = O.roots.default || (O.roots.default = {}), xt = B.dot = (() => {
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
      return e || (e = K.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      t instanceof h || (t = h.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new B.dot.Content();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.token = t.bytes();
            break;
          }
          case 2: {
            n.iv = t.bytes();
            break;
          }
          case 3: {
            n.schemaVersion = t.int32();
            break;
          }
          case 4: {
            n.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, i;
  }(), o.v4 = function() {
    const i = {};
    return i.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.images = l.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = K.create()), e.images != null && e.images.length)
          for (let n = 0; n < e.images.length; ++n)
            B.dot.Image.encode(e.images[n], A.uint32(
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
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(B.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let A = 0; A < e.images.length; ++A) {
            let n = B.dot.Image.verify(e.images[A]);
            if (n)
              return "images." + n;
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
          for (let n = 0; n < e.images.length; ++n) {
            if (typeof e.images[n] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[n] = B.dot.Image.fromObject(e.images[n]);
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
        let n = {};
        if ((A.arrays || A.defaults) && (n.images = []), A.defaults && (n.metadata = null), e.images && e.images.length) {
          n.images = [];
          for (let g = 0; g < e.images.length; ++g)
            n.images[g] = B.dot.Image.toObject(e.images[g], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), i.Metadata = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
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
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && B.dot.v4.WebMetadata.encode(A.web, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && B.dot.v4.AndroidMetadata.encode(A.android, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && B.dot.v4.IosMetadata.encode(A.ios, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.Metadata();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.platform = A.int32();
              break;
            }
            case 5: {
              a.sessionToken = A.string();
              break;
            }
            case 6: {
              a.componentVersion = A.string();
              break;
            }
            case 2: {
              a.web = B.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = B.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = B.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n._sessionToken = 1, !l.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !l.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          n.metadata = 1;
          {
            let g = B.dot.v4.WebMetadata.verify(A.web);
            if (g)
              return "web." + g;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let g = B.dot.v4.AndroidMetadata.verify(A.android);
            if (g)
              return "android." + g;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let g = B.dot.v4.IosMetadata.verify(A.ios);
            if (g)
              return "ios." + g;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Metadata)
          return A;
        let n = new B.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              n.platform = A.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            n.platform = 0;
            break;
          case "ANDROID":
          case 1:
            n.platform = 1;
            break;
          case "IOS":
          case 2:
            n.platform = 2;
            break;
        }
        if (A.sessionToken != null && (n.sessionToken = String(A.sessionToken)), A.componentVersion != null && (n.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          n.web = B.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          n.android = B.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          n.ios = B.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.platform = n.enums === String ? "WEB" : 0, g.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (g.platform = n.enums === String ? B.dot.Platform[A.platform] === void 0 ? A.platform : B.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (g.web = B.dot.v4.WebMetadata.toObject(A.web, n), n.oneofs && (g.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (g.android = B.dot.v4.AndroidMetadata.toObject(A.android, n), n.oneofs && (g.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (g.ios = B.dot.v4.IosMetadata.toObject(A.ios, n), n.oneofs && (g.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (g.sessionToken = A.sessionToken, n.oneofs && (g._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (g.componentVersion = A.componentVersion), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), i.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let g = 0; g < A.supportedAbis.length; ++g)
            n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[g]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let g = 0; g < A.digests.length; ++g)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[g]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let g = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < g.length; ++a)
            n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(g[a]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[g[a]], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.AndroidCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.AndroidMetadata(), x, I;
        for (; A.pos < g; ) {
          let c = A.uint32();
          switch (c >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              a.device = A.string();
              break;
            }
            case 6: {
              a.camera = B.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === l.emptyObject && (a.dynamicCameraFrameProperties = {});
              let r = A.uint32() + A.pos;
              for (x = "", I = null; A.pos < r; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    I = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[x] = I;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = B.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let n = 0; n < A.supportedAbis.length; ++n)
            if (!l.isString(A.supportedAbis[n]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !l.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = B.dot.v4.AndroidCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || l.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let g = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (g)
              return "digestsWithTimestamp." + g;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let n = Object.keys(A.dynamicCameraFrameProperties);
          for (let g = 0; g < n.length; ++g) {
            let a = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[n[g]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || l.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.AndroidMetadata)
          return A;
        let n = new B.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          n.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            n.supportedAbis[g] = String(A.supportedAbis[g]);
        }
        if (A.device != null && (n.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          n.camera = B.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          n.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            typeof A.digests[g] == "string" ? l.base64.decode(A.digests[g], n.digests[g] = l.newBuffer(l.base64.length(A.digests[g])), 0) : A.digests[g].length >= 0 && (n.digests[g] = A.digests[g]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            if (typeof A.digestsWithTimestamp[g] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[g]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          n.dynamicCameraFrameProperties = {};
          for (let g = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < g.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[g[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            n.dynamicCameraFrameProperties[g[a]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[g[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? l.base64.decode(A.tamperingIndicators, n.tamperingIndicators = l.newBuffer(l.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (n.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.supportedAbis = [], g.digests = [], g.digestsWithTimestamp = []), (n.objects || n.defaults) && (g.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          g.supportedAbis = [];
          for (let x = 0; x < A.supportedAbis.length; ++x)
            g.supportedAbis[x] = A.supportedAbis[x];
        }
        if (A.device != null && A.hasOwnProperty("device") && (g.device = A.device, n.oneofs && (g._device = "device")), A.digests && A.digests.length) {
          g.digests = [];
          for (let x = 0; x < A.digests.length; ++x)
            g.digests[x] = n.bytes === String ? l.base64.encode(A.digests[x], 0, A.digests[x].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[x]) : A.digests[x];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          g.dynamicCameraFrameProperties = {};
          for (let x = 0; x < a.length; ++x)
            g.dynamicCameraFrameProperties[a[x]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[x]], n);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          g.digestsWithTimestamp = [];
          for (let x = 0; x < A.digestsWithTimestamp.length; ++x)
            g.digestsWithTimestamp[x] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[x], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (g.camera = B.dot.v4.AndroidCamera.toObject(A.camera, n), n.oneofs && (g._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (g.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (g._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (g.tamperingIndicators = n.bytes === String ? l.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : n.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, n.oneofs && (g._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (g.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (g._croppedYuv420Image = "croppedYuv420Image")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), i.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.AndroidCamera();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), i.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Yuv420Image();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.size = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.yPlane = e.bytes();
              break;
            }
            case 3: {
              g.uPlane = e.bytes();
              break;
            }
            case 4: {
              g.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = l.newBuffer(n.yPlane))), A.bytes === String ? n.uPlane = "" : (n.uPlane = [], A.bytes !== Array && (n.uPlane = l.newBuffer(n.uPlane))), A.bytes === String ? n.vPlane = "" : (n.vPlane = [], A.bytes !== Array && (n.vPlane = l.newBuffer(n.vPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (n.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (n.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), i.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
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
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let g = Object.keys(A.architectureInfo), a = 0; a < g.length; ++a)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(g[a]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[g[a]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let g = 0; g < A.digests.length; ++g)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[g]);
        if (A.isoValues != null && A.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let g = 0; g < A.isoValues.length; ++g)
            n.int32(A.isoValues[g]);
          n.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.IosCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.IosMetadata(), x, I;
        for (; A.pos < g; ) {
          let c = A.uint32();
          switch (c >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === l.emptyObject && (a.architectureInfo = {});
              let r = A.uint32() + A.pos;
              for (x = "", I = !1; A.pos < r; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    I = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.architectureInfo[x] = I;
              break;
            }
            case 6: {
              a.camera = B.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (c & 7) === 2) {
                let r = A.uint32() + A.pos;
                for (; A.pos < r; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(c & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !l.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!l.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(A.architectureInfo);
          for (let g = 0; g < n.length; ++g)
            if (typeof A.architectureInfo[n[g]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = B.dot.v4.IosCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || l.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let g = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (g)
              return "digestsWithTimestamp." + g;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < A.isoValues.length; ++n)
            if (!l.isInteger(A.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let n = new B.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (n.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let g = Object.keys(A.architectureInfo), a = 0; a < g.length; ++a)
            n.architectureInfo[g[a]] = !!A.architectureInfo[g[a]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          n.camera = B.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            typeof A.digests[g] == "string" ? l.base64.decode(A.digests[g], n.digests[g] = l.newBuffer(l.base64.length(A.digests[g])), 0) : A.digests[g].length >= 0 && (n.digests[g] = A.digests[g]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            if (typeof A.digestsWithTimestamp[g] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[g]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            n.isoValues[g] = A.isoValues[g] | 0;
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        (n.arrays || n.defaults) && (g.digests = [], g.isoValues = [], g.digestsWithTimestamp = []), (n.objects || n.defaults) && (g.architectureInfo = {}), n.defaults && (g.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (g.cameraModelId = A.cameraModelId);
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          g.architectureInfo = {};
          for (let x = 0; x < a.length; ++x)
            g.architectureInfo[a[x]] = A.architectureInfo[a[x]];
        }
        if (A.digests && A.digests.length) {
          g.digests = [];
          for (let x = 0; x < A.digests.length; ++x)
            g.digests[x] = n.bytes === String ? l.base64.encode(A.digests[x], 0, A.digests[x].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[x]) : A.digests[x];
        }
        if (A.isoValues && A.isoValues.length) {
          g.isoValues = [];
          for (let x = 0; x < A.isoValues.length; ++x)
            g.isoValues[x] = A.isoValues[x];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          g.digestsWithTimestamp = [];
          for (let x = 0; x < A.digestsWithTimestamp.length; ++x)
            g.digestsWithTimestamp[x] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[x], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (g.camera = B.dot.v4.IosCamera.toObject(A.camera, n), n.oneofs && (g._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (g.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (g._detectionNormalizedRectangle = "detectionNormalizedRectangle")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), i.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.IosCamera();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), i.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: l.oneOfGetter(e = ["croppedImage"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            B.dot.v4.CameraProperties.encode(A.availableCameraProperties[g], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[g]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let g = 0; g < A.detectionRecord.length; ++g)
            B.dot.v4.DetectedObject.encode(A.detectionRecord[g], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            B.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && B.dot.Image.encode(A.croppedImage, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.currentCameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(B.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(B.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(B.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let n = B.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            let g = B.dot.v4.CameraProperties.verify(A.availableCameraProperties[n]);
            if (g)
              return "availableCameraProperties." + g;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            if (!l.isString(A.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            let g = B.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[n]);
            if (g)
              return "hashedDetectedImagesWithTimestamp." + g;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            let g = B.dot.v4.DetectedObject.verify(A.detectionRecord[n]);
            if (g)
              return "detectionRecord." + g;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let n = B.dot.Image.verify(A.croppedImage);
          if (n)
            return "croppedImage." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.WebMetadata)
          return A;
        let n = new B.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g) {
            if (typeof A.availableCameraProperties[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[g] = B.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[g]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            n.hashedDetectedImages[g] = String(A.hashedDetectedImages[g]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g) {
            if (typeof A.hashedDetectedImagesWithTimestamp[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[g] = B.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[g]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g) {
            if (typeof A.detectionRecord[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[g] = B.dot.v4.DetectedObject.fromObject(A.detectionRecord[g]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          n.croppedImage = B.dot.Image.fromObject(A.croppedImage);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.availableCameraProperties = [], g.hashedDetectedImages = [], g.detectionRecord = [], g.hashedDetectedImagesWithTimestamp = []), n.defaults && (g.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (g.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, n)), A.availableCameraProperties && A.availableCameraProperties.length) {
          g.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            g.availableCameraProperties[a] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], n);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          g.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            g.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          g.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            g.detectionRecord[a] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[a], n);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          g.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            g.hashedDetectedImagesWithTimestamp[a] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], n);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (g.croppedImage = B.dot.Image.toObject(A.croppedImage, n), n.oneofs && (g._croppedImage = "croppedImage")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), i.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.imageHash = e.string();
              break;
            }
            case 2: {
              g.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !l.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !l.isInteger(e.timestampMillis) && !(e.timestampMillis && l.isInteger(e.timestampMillis.low) && l.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if (A.defaults)
          if (n.imageHash = "", l.Long) {
            let g = new l.Long(0, 0, !0);
            n.timestampMillis = A.longs === String ? g.toString() : A.longs === Number ? g.toNumber() : g;
          } else
            n.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (n.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? n.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : n.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new l.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), i.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
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
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && n.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && n.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && n.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && n.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && n.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && n.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && n.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && n.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && n.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.MediaTrackSettings();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.aspectRatio = A.double();
              break;
            }
            case 2: {
              a.autoGainControl = A.bool();
              break;
            }
            case 3: {
              a.channelCount = A.int32();
              break;
            }
            case 4: {
              a.deviceId = A.string();
              break;
            }
            case 5: {
              a.displaySurface = A.string();
              break;
            }
            case 6: {
              a.echoCancellation = A.bool();
              break;
            }
            case 7: {
              a.facingMode = A.string();
              break;
            }
            case 8: {
              a.frameRate = A.double();
              break;
            }
            case 9: {
              a.groupId = A.string();
              break;
            }
            case 10: {
              a.height = A.int32();
              break;
            }
            case 11: {
              a.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              a.sampleRate = A.int32();
              break;
            }
            case 13: {
              a.sampleSize = A.int32();
              break;
            }
            case 14: {
              a.width = A.int32();
              break;
            }
            case 15: {
              a.deviceName = A.string();
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !l.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !l.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !l.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !l.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !l.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !l.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !l.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !l.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MediaTrackSettings)
          return A;
        let n = new B.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (n.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (n.autoGainControl = !!A.autoGainControl), A.channelCount != null && (n.channelCount = A.channelCount | 0), A.deviceId != null && (n.deviceId = String(A.deviceId)), A.displaySurface != null && (n.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (n.echoCancellation = !!A.echoCancellation), A.facingMode != null && (n.facingMode = String(A.facingMode)), A.frameRate != null && (n.frameRate = Number(A.frameRate)), A.groupId != null && (n.groupId = String(A.groupId)), A.height != null && (n.height = A.height | 0), A.noiseSuppression != null && (n.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (n.sampleRate = A.sampleRate | 0), A.sampleSize != null && (n.sampleSize = A.sampleSize | 0), A.width != null && (n.width = A.width | 0), A.deviceName != null && (n.deviceName = String(A.deviceName)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (g.aspectRatio = n.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, n.oneofs && (g._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (g.autoGainControl = A.autoGainControl, n.oneofs && (g._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (g.channelCount = A.channelCount, n.oneofs && (g._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (g.deviceId = A.deviceId, n.oneofs && (g._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (g.displaySurface = A.displaySurface, n.oneofs && (g._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (g.echoCancellation = A.echoCancellation, n.oneofs && (g._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (g.facingMode = A.facingMode, n.oneofs && (g._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (g.frameRate = n.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, n.oneofs && (g._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (g.groupId = A.groupId, n.oneofs && (g._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (g.height = A.height, n.oneofs && (g._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (g.noiseSuppression = A.noiseSuppression, n.oneofs && (g._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (g.sampleRate = A.sampleRate, n.oneofs && (g._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (g.sampleSize = A.sampleSize, n.oneofs && (g._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (g.width = A.width, n.oneofs && (g._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (g.deviceName = A.deviceName, n.oneofs && (g._deviceName = "deviceName")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), i.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.ImageBitmap();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.width = e.int32();
              break;
            }
            case 2: {
              g.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.width = 0, n.height = 0), e.width != null && e.hasOwnProperty("width") && (n.width = e.width), e.height != null && e.hasOwnProperty("height") && (n.height = e.height), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), i.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let n = B.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (n)
            return "cameraInitFrameResolution." + n;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let n = B.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (n)
            return "cameraProperties." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.CameraProperties)
          return A;
        let n = new B.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          n.cameraInitFrameResolution = B.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          n.cameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (g.cameraInitFrameResolution = B.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, n), n.oneofs && (g._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (g.cameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, n)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), i.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DetectedObject();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.brightness = e.float();
              break;
            }
            case 2: {
              g.sharpness = e.float();
              break;
            }
            case 3: {
              g.hotspots = e.float();
              break;
            }
            case 4: {
              g.confidence = e.float();
              break;
            }
            case 5: {
              g.faceSize = e.float();
              break;
            }
            case 6: {
              g.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.brightness = 0, n.sharpness = 0, n.hotspots = 0, n.confidence = 0, n.faceSize = 0, n.faceCenter = null, n.smallestEdge = 0, n.bottomLeft = null, n.bottomRight = null, n.topLeft = null, n.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (n.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (n.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (n.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (n.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (n.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (n.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (n.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (n.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (n.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (n.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (n.topRight = B.dot.v4.Point.toObject(e.topRight, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), i.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.Point();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.x = e.float();
              break;
            }
            case 2: {
              g.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.x = 0, n.y = 0), e.x != null && e.hasOwnProperty("x") && (n.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (n.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), i.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.FaceContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), i.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DocumentContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), i.Blob = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: l.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && B.dot.v4.FaceContent.encode(A.faceContent, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && B.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && B.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && B.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && B.dot.v4.PalmContent.encode(A.palmContent, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && B.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.Blob();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.documentContent = B.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = B.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = B.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = B.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = B.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          n.blob = 1;
          {
            let g = B.dot.v4.DocumentContent.verify(A.documentContent);
            if (g)
              return "documentContent." + g;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = B.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (g)
              return "eyeGazeLivenessContent." + g;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = B.dot.v4.FaceContent.verify(A.faceContent);
            if (g)
              return "faceContent." + g;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = B.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (g)
              return "magnifeyeLivenessContent." + g;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = B.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (g)
              return "smileLivenessContent." + g;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = B.dot.v4.PalmContent.verify(A.palmContent);
            if (g)
              return "palmContent." + g;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = B.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (g)
              return "travelDocumentContent." + g;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Blob)
          return A;
        let n = new B.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          n.documentContent = B.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          n.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          n.faceContent = B.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          n.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          n.smileLivenessContent = B.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          n.palmContent = B.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          n.travelDocumentContent = B.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (g.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, n), n.oneofs && (g.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (g.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, n), n.oneofs && (g.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (g.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, n), n.oneofs && (g.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (g.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, n), n.oneofs && (g.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (g.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, n), n.oneofs && (g.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (g.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, n), n.oneofs && (g.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (g.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, n), n.oneofs && (g.blob = "travelDocumentContent")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), i.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.ldsMasterFile = null, n.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, n.authenticationStatus = null, n.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (n.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (n.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (n.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), i.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.LdsMasterFile();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (n.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), i.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
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
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && B.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && B.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && B.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && B.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && B.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && B.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, n.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, n.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, n.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && B.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && B.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, n.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && B.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, n.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (n)
            return "comHeaderAndDataGroupPresenceInformation." + n;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (n)
            return "sodDocumentSecurityObject." + n;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (n)
            return "dg1MachineReadableZoneInformation." + n;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (n)
            return "dg2EncodedIdentificationFeaturesFace." + n;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (n)
            return "dg3AdditionalIdentificationFeatureFingers." + n;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (n)
            return "dg4AdditionalIdentificationFeatureIrises." + n;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (n)
            return "dg5DisplayedPortrait." + n;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (n)
            return "dg7DisplayedSignatureOrUsualMark." + n;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (n)
            return "dg8DataFeatures." + n;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (n)
            return "dg9StructureFeatures." + n;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (n)
            return "dg10SubstanceFeatures." + n;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (n)
            return "dg11AdditionalPersonalDetails." + n;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (n)
            return "dg12AdditionalDocumentDetails." + n;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (n)
            return "dg13OptionalDetails." + n;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (n)
            return "dg14SecurityOptions." + n;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (n)
            return "dg15ActiveAuthenticationPublicKeyInfo." + n;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let n = B.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (n)
            return "dg16PersonsToNotify." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1eMrtdApplication)
          return A;
        let n = new B.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          n.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          n.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          n.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          n.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          n.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          n.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          n.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          n.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          n.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          n.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          n.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          n.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          n.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          n.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          n.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          n.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          n.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.comHeaderAndDataGroupPresenceInformation = null, g.sodDocumentSecurityObject = null, g.dg1MachineReadableZoneInformation = null, g.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (g.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, n)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (g.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, n)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (g.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, n)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (g.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, n)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (g.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, n), n.oneofs && (g._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (g.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, n), n.oneofs && (g._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (g.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, n), n.oneofs && (g._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (g.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, n), n.oneofs && (g._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (g.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, n), n.oneofs && (g._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (g.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, n), n.oneofs && (g._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (g.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, n), n.oneofs && (g._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (g.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, n), n.oneofs && (g._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (g.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, n), n.oneofs && (g._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (g.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, n), n.oneofs && (g._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (g.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, n), n.oneofs && (g._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (g.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, n), n.oneofs && (g._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (g.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, n), n.oneofs && (g._dg16PersonsToNotify = "dg16PersonsToNotify")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), i.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: l.oneOfGetter(e = ["bytes"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.Lds1ElementaryFile();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        let n = new B.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              n.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            n.id = 0;
            break;
          case "ID_COM":
          case 1:
            n.id = 1;
            break;
          case "ID_SOD":
          case 2:
            n.id = 2;
            break;
          case "ID_DG1":
          case 3:
            n.id = 3;
            break;
          case "ID_DG2":
          case 4:
            n.id = 4;
            break;
          case "ID_DG3":
          case 5:
            n.id = 5;
            break;
          case "ID_DG4":
          case 6:
            n.id = 6;
            break;
          case "ID_DG5":
          case 7:
            n.id = 7;
            break;
          case "ID_DG7":
          case 8:
            n.id = 8;
            break;
          case "ID_DG8":
          case 9:
            n.id = 9;
            break;
          case "ID_DG9":
          case 10:
            n.id = 10;
            break;
          case "ID_DG10":
          case 11:
            n.id = 11;
            break;
          case "ID_DG11":
          case 12:
            n.id = 12;
            break;
          case "ID_DG12":
          case 13:
            n.id = 13;
            break;
          case "ID_DG13":
          case 14:
            n.id = 14;
            break;
          case "ID_DG14":
          case 15:
            n.id = 15;
            break;
          case "ID_DG15":
          case 16:
            n.id = 16;
            break;
          case "ID_DG16":
          case 17:
            n.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? l.base64.decode(A.bytes, n.bytes = l.newBuffer(l.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (n.bytes = A.bytes)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.id = n.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (g.id = n.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (g.bytes = n.bytes === String ? l.base64.encode(A.bytes, 0, A.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, n.oneofs && (g._bytes = "bytes")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "ID_UNSPECIFIED"] = 0, n[A[1] = "ID_COM"] = 1, n[A[2] = "ID_SOD"] = 2, n[A[3] = "ID_DG1"] = 3, n[A[4] = "ID_DG2"] = 4, n[A[5] = "ID_DG3"] = 5, n[A[6] = "ID_DG4"] = 6, n[A[7] = "ID_DG5"] = 7, n[A[8] = "ID_DG7"] = 8, n[A[9] = "ID_DG8"] = 9, n[A[10] = "ID_DG9"] = 10, n[A[11] = "ID_DG10"] = 11, n[A[12] = "ID_DG11"] = 12, n[A[13] = "ID_DG12"] = 13, n[A[14] = "ID_DG13"] = 14, n[A[15] = "ID_DG14"] = 15, n[A[16] = "ID_DG15"] = 16, n[A[17] = "ID_DG16"] = 17, n;
      }(), t;
    }(), i.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), i.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.data = null, n.chip = null), e.data != null && e.hasOwnProperty("data") && (n.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (n.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), i.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.DataAuthenticationStatus();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.status = e.int32();
              break;
            }
            case 2: {
              g.protocol = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, n.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (n.status = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : B.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (n.protocol = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
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
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.status = A.int32();
              break;
            }
            case 2: {
              a.protocol = A.int32();
              break;
            }
            case 3: {
              a.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
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
        let n = new B.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              n.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            n.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            n.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            n.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            n.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              n.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            n.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            n.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            n.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            n.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? l.base64.decode(A.activeAuthenticationResponse, n.activeAuthenticationResponse = l.newBuffer(l.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (n.activeAuthenticationResponse = A.activeAuthenticationResponse)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.status = n.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (g.status = n.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (g.protocol = n.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, n.oneofs && (g._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (g.activeAuthenticationResponse = n.bytes === String ? l.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : n.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, n.oneofs && (g._activeAuthenticationResponse = "activeAuthenticationResponse")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "STATUS_UNSPECIFIED"] = 0, n[A[1] = "STATUS_AUTHENTICATED"] = 1, n[A[2] = "STATUS_DENIED"] = 2, n[A[3] = "STATUS_NOT_SUPPORTED"] = 3, n;
      }(), t.Protocol = function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, n[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, n[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, n[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, n;
      }(), t;
    }(), i.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.image = null, t.prototype.segments = l.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: l.oneOfGetter(e = ["image"]),
        set: l.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.segments != null && A.segments.length)
          for (let g = 0; g < A.segments.length; ++g)
            B.dot.v4.EyeGazeLivenessSegment.encode(A.segments[g], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof h || (A = h.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 3: {
              a.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof h || (A = new h(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = B.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let n = 0; n < A.segments.length; ++n) {
            let g = B.dot.v4.EyeGazeLivenessSegment.verify(A.segments[n]);
            if (g)
              return "segments." + g;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = B.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.EyeGazeLivenessContent)
          return A;
        let n = new B.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          n.image = B.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let g = 0; g < A.segments.length; ++g) {
            if (typeof A.segments[g] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[g] = B.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[g]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.segments = []), n.defaults && (g.metadata = null), A.segments && A.segments.length) {
          g.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            g.segments[a] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (g.metadata = B.dot.v4.Metadata.toObject(A.metadata, n)), A.image != null && A.hasOwnProperty("image") && (g.image = B.dot.Image.toObject(A.image, n), n.oneofs && (g._image = "image")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), i.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.corner = e.int32();
              break;
            }
            case 2: {
              g.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.corner = A.enums === String ? "TOP_LEFT" : 0, n.image = null), e.corner != null && e.hasOwnProperty("corner") && (n.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), i.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), i.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && B.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
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
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.SmileLivenessContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.neutralExpressionFaceImage = null, n.smileExpressionFaceImage = null, n.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (n.neutralExpressionFaceImage = B.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (n.smileExpressionFaceImage = B.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), i.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof h || (e = h.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new B.dot.v4.PalmContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof h || (e = new h(e)), this.decode(e, e.uint32());
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
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
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
      return e || (e = K.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof h || (t = h.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new B.dot.Image();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
      return e || (e = K.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof h || (t = h.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new B.dot.ImageSize();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.width = t.int32();
            break;
          }
          case 2: {
            n.height = t.int32();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
      if (e || (e = K.create()), t.items != null && t.items.length) {
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
      t instanceof h || (t = h.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new B.dot.Int32List();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            if (n.items && n.items.length || (n.items = []), (g & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                n.items.push(t.int32());
            } else
              n.items.push(t.int32());
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
        for (let n = 0; n < t.items.length; ++n)
          A.items[n] = t.items[n];
      }
      return A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
      return e || (e = K.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
      t instanceof h || (t = h.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new B.dot.RectangleDouble();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.left = t.double();
            break;
          }
          case 2: {
            n.top = t.double();
            break;
          }
          case 3: {
            n.right = t.double();
            break;
          }
          case 4: {
            n.bottom = t.double();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
      return this.constructor.toObject(this, O.util.toJSONOptions);
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
      return e || (e = K.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof h || (t = h.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new B.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.digest = t.bytes();
            break;
          }
          case 2: {
            n.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof h || (t = new h(t)), this.decode(t, t.uint32());
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
          let n = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), o;
})();
function oA(o, i) {
  const t = Po();
  return oA = function(e, A) {
    e = e - (-5610 + 1 * -7919 + 13688);
    let n = t[e];
    if (oA.UvIIFg === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      oA.ZOmwnu = c, o = arguments, oA.UvIIFg = !0;
    }
    const a = t[-3593 + -3593 * -1], x = e + a, I = o[x];
    return I ? n = I : (oA.HMnXcV === void 0 && (oA.HMnXcV = !0), n = oA.ZOmwnu(n, A), o[x] = n), n;
  }, oA(o, i);
}
(function(o, i) {
  function t(x, I, c, r, Q) {
    return oA(I - 521, c);
  }
  function e(x, I, c, r, Q) {
    return oA(c - 667, I);
  }
  function A(x, I, c, r, Q) {
    return oA(c - 404, I);
  }
  const n = o();
  function g(x, I, c, r, Q) {
    return oA(x - -165, I);
  }
  function a(x, I, c, r, Q) {
    return oA(I - 995, Q);
  }
  for (; ; )
    try {
      if (-parseInt(g(86, "tKH*", -7, 179, 168)) / 1 * (-parseInt(e(911, "#8HM", 860, 971, 764)) / 2) + parseInt(t(879, 781, "8[SG", 853, 691)) / 3 + -parseInt(e(1063, "2aX&", 1009, 924, 931)) / 4 * (parseInt(t(786, 845, "U^E)", 808, 956)) / 5) + -parseInt(A(685, "DgFu", 793, 717, 774)) / 6 + -parseInt(t(900, 837, "bdQH", 821, 757)) / 7 + parseInt(t(760, 872, "4qz#", 948, 954)) / 8 + parseInt(A(620, "MFfj", 662, 584, 704)) / 9 * (-parseInt(a(1253, 1240, 1188, 1189, "5tZQ")) / 10) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Po, -354046 + -557 * 1366 + 2 * 964097);
function jB() {
  const o = a(696, 653, "0il7", 709, 631) + x(1234, 1204, 1292, 1249, "][B6") + a(601, 660, "rmA1", 632, 687) + x(1251, 1180, 1367, 1249, "Zn8n") + x(1263, 1301, 1267, 1323, "MFfj") + A(437, 373, 319, "Zn8n", 398) + I(-492, -580, -479, "rmA1") + e(183, 137, 190, 35, "RMtD") + A(598, 619, 512, "bj%Q", 558) + I(-475, -512, -573, "iiSb") + I(-647, -559, -658, "*%wA") + e(299, 221, 176, 140, "RMtD") + a(470, 572, "RMtD", 596, 574) + x(1133, 1083, 1034, 1195, "@TBW") + a(537, 677, "4aUA", 709, 616) + x(1203, 1174, 1142, 1235, "$KpM") + x(1113, 1129, 1117, 1194, "EyH[") + e(227, 170, 273, 275, "EyH[") + e(250, 271, 246, 197, "EyH[") + I(-656, -725, -645, "bdQH") + x(1069, 1146, 1031, 1071, "tKH*") + a(657, 569, "*%wA", 723, 652) + I(-700, -613, -623, "5tZQ") + e(53, 165, 133, 150, "2dgW") + a(701, 728, "XdlX", 738, 679) + e(197, 300, 311, 397, "4aUA") + e(385, 290, 218, 355, "4aUA") + x(1155, 1213, 1147, 1193, "6%C5") + I(-588, -612, -656, "bMks") + e(127, 198, 129, 155, "MFfj") + I(-510, -555, -524, "4ure") + x(1249, 1156, 1162, 1329, "DHbV") + x(1097, 1080, 1157, 1193, "CL@9") + A(529, 347, 537, "DHbV", 424) + e(2, 89, 145, 77, "@TBW") + A(445, 433, 570, "bdQH", 484) + e(26, 99, 98, 12, "gNsp") + x(1277, 1390, 1387, 1288, "RMtD") + a(610, 543, "CL@9", 404, 518) + a(510, 512, "bj%Q", 639, 567) + e(172, 151, 235, 60, "%dT$") + a(494, 645, "Gu^0", 514, 561) + I(-499, -483, -600, "rmA1") + x(1105, 1009, 1180, 1013, "EV0X") + A(554, 565, 659, "2aX&", 593) + A(404, 414, 547, "^f(H", 494) + A(575, 648, 476, "DgFu", 555) + a(554, 445, "Zn8n", 573, 559) + e(215, 164, 228, 240, "RMtD") + A(266, 445, 279, "tKH*", 372) + A(432, 485, 543, "4aUA", 538) + a(600, 622, "@TBW", 564, 612) + I(-533, -498, -540, "O2)E") + e(170, 183, 197, 189, "8[SG") + a(595, 557, "4qz#", 433, 546) + I(-694, -801, -580, "bj%Q") + A(305, 324, 355, "#8HM", 409) + x(1255, 1270, 1290, 1237, "uv[R") + A(420, 434, 321, "bj%Q", 419) + I(-627, -738, -693, "*d*4") + I(-572, -563, -536, "5tZQ") + e(196, 216, 107, 226, "iiSb") + x(1205, 1241, 1212, 1291, "RMtD") + A(355, 336, 453, "vt84", 412) + A(437, 387, 318, "Gu^0", 416) + I(-653, -579, -767, "2aX&") + x(1257, 1191, 1240, 1161, "DgFu") + e(106, 191, 300, 221, "Zn8n") + x(1212, 1245, 1286, 1231, "(LU5") + e(242, 163, 261, 166, "2aX&") + e(359, 246, 215, 265, "#8HM") + A(535, 608, 607, "RMtD", 552) + x(1270, 1283, 1387, 1246, "3faj") + e(84, 145, 241, 175, "EyH[") + A(538, 461, 525, "4aUA", 567) + e(197, 90, 180, 39, "0il7") + a(721, 585, "pQTS", 686, 688) + e(306, 195, 262, 133, "5tZQ") + x(1283, 1219, 1365, 1270, "RMtD") + x(1132, 1126, 1065, 1196, "][B6") + x(1140, 1052, 1089, 1166, "O&oO") + A(496, 465, 470, "0il7", 544) + A(359, 355, 501, "EyH[", 449) + I(-531, -462, -485, "i0at") + A(581, 513, 354, "8[SG", 464) + e(89, 153, 133, 247, "][B6") + x(1197, 1230, 1243, 1310, "pQTS") + x(1184, 1151, 1171, 1173, "DgFu") + I(-524, -552, -482, "][B6") + A(531, 347, 426, "DgFu", 447) + x(1214, 1209, 1148, 1253, "RMtD") + e(121, 202, 248, 292, "O2)E") + a(627, 654, "4qz#", 555, 576) + A(467, 508, 633, "O&oO", 534) + x(1267, 1221, 1181, 1336, "vt84") + I(-703, -693, -648, "bMks") + e(300, 311, 215, 379, "O2)E") + I(-482, -408, -558, "O&oO") + A(614, 432, 433, "XdlX", 506) + e(294, 186, 75, 205, "gNsp") + e(213, 112, 52, 173, "vt84") + A(562, 452, 596, "tKH*", 480) + A(342, 432, 462, "6%C5", 397) + e(306, 203, 146, 187, "4ure") + a(700, 501, "83Tc", 638, 609) + I(-589, -642, -496, "O&oO") + e(258, 190, 199, 294, "4ure") + a(726, 610, "4aUA", 781, 685) + A(526, 405, 514, "DHbV", 491) + e(397, 298, 407, 332, "Zn8n") + e(233, 134, 88, 94, "4qz#") + I(-558, -505, -646, "DgFu") + a(753, 695, "RMtD", 634, 674) + a(563, 454, "O2)E", 549, 550) + A(512, 292, 315, "2dgW", 400) + A(435, 477, 476, "2aX&", 401) + I(-679, -700, -771, "DgFu") + I(-500, -387, -596, "U^E)") + x(1260, 1149, 1368, 1260, "RMtD") + x(1271, 1287, 1220, 1367, "$KpM") + x(1282, 1368, 1272, 1183, "3faj") + I(-634, -654, -624, "bMks") + I(-637, -701, -669, "i0at") + I(-560, -462, -450, "R*Nz") + e(-7, 109, 67, 21, "@TBW") + x(1149, 1181, 1137, 1070, "bMks") + I(-668, -769, -681, "][B6") + e(192, 305, 356, 420, "Zn8n") + e(204, 111, 72, 207, "iiSb") + A(553, 662, 453, "8[SG", 568) + e(218, 105, -7, -10, "bj%Q") + x(1241, 1297, 1180, 1134, "(LU5") + A(432, 443, 469, "$KpM", 455) + e(141, 107, 217, 204, "tKH*") + I(-597, -637, -535, "pQTS") + x(1233, 1274, 1174, 1237, "U^E)") + A(579, 621, 515, "MFfj", 556) + a(459, 546, "(LU5", 435, 534) + e(356, 301, 218, 192, "bdQH") + a(863, 758, "6%C5", 739, 747) + I(-618, -637, -703, "4aUA") + I(-509, -416, -594, "4ure") + e(138, 104, 97, 40, "DgFu") + A(698, 515, 629, "8[SG", 594) + A(448, 493, 450, "Gu^0", 504) + a(623, 512, "][B6", 486, 600) + A(413, 403, 401, "rmA1", 392) + x(1170, 1193, 1178, 1236, "RMtD") + A(488, 537, 556, "Zn8n", 520) + A(634, 598, 481, "8[SG", 564) + x(1222, 1233, 1300, 1156, "vt84") + e(115, 227, 136, 170, "5tZQ") + a(678, 760, "8[SG", 600, 671) + I(-686, -605, -730, "i0at") + a(699, 702, "M&hV", 718, 704) + a(540, 563, "EV0X", 511, 582) + A(446, 446, 344, "bMks", 374) + A(458, 434, 262, "bj%Q", 379) + x(1211, 1185, 1206, 1198, "4ure") + I(-662, -694, -726, "4qz#") + x(1093, 1124, 1202, 1181, "DHbV") + A(530, 497, 372, "0il7", 450) + A(391, 270, 379, "#8HM", 386) + A(536, 497, 434, "*%wA", 528) + A(452, 526, 600, "pQTS", 517) + I(-602, -653, -498, "XdlX") + x(1061, 948, 1111, 1148, "iiSb") + a(630, 776, "0il7", 645, 731) + e(-23, 93, 157, 79, "4aUA") + e(184, 212, 132, 301, "$KpM") + x(1207, 1148, 1276, 1153, "DHbV") + x(1188, 1235, 1238, 1162, "2aX&") + e(284, 264, 223, 225, "2dgW") + a(574, 756, "DgFu", 682, 649) + a(647, 704, "O&oO", 522, 633) + A(517, 636, 459, "DgFu", 542) + e(190, 92, 23, 134, "rmA1") + x(1156, 1236, 1266, 1093, "2dgW") + A(410, 450, 539, "rmA1", 511) + I(-569, -634, -578, "O&oO") + A(496, 519, 437, "tKH*", 470) + a(507, 479, "][B6", 681, 587) + e(297, 200, 278, 88, "4aUA") + I(-562, -564, -655, "83Tc") + a(548, 575, "vt84", 513, 533) + x(1071, 1010, 1014, 1109, "%dT$") + e(207, 249, 324, 346, "bj%Q") + e(185, 106, 44, 206, "4ure") + x(1181, 1245, 1127, 1284, "CL@9") + x(1280, 1230, 1221, 1232, "^f(H") + I(-529, -561, -460, "*%wA") + a(771, 726, "bdQH", 783, 706) + e(397, 307, 334, 312, "4qz#") + I(-537, -482, -572, "tKH*") + x(1123, 1153, 1046, 1237, "4ure") + e(228, 219, 109, 183, "2dgW") + A(421, 388, 343, "H5%S", 437) + e(170, 224, 253, 130, "O2)E") + I(-585, -556, -583, "DgFu") + e(168, 273, 222, 266, "H5%S"), i = window[a(790, 686, "XdlX", 734, 677)](o), t = window[e(178, 130, 202, 126, "gNsp")](i);
  function e(c, r, Q, C, E) {
    return oA(r - -73, E);
  }
  function A(c, r, Q, C, E) {
    return oA(E - 203, C);
  }
  const n = cn(t), g = {};
  g[e(213, 189, 188, 210, "rmA1")] = $x;
  function a(c, r, Q, C, E) {
    return oA(E - 359, Q);
  }
  g[I(-677, -594, -734, "%dT$")] = xs;
  function x(c, r, Q, C, E) {
    return oA(c - 901, E);
  }
  function I(c, r, Q, C, E) {
    return oA(c - -867, C);
  }
  return window[A(381, 466, 487, "Q^yG", 432) + "o"][x(1167, 1256, 1190, 1184, "bdQH") + "e"][a(517, 661, "83Tc", 475, 584) + e(66, 128, 168, 105, "MFfj")](x(1288, 1172, 1238, 1256, "2dgW"), n, g, !0, [e(227, 304, 326, 356, "bdQH") + "pt"]);
}
function Po() {
  const o = ["zJFcQx5g", "oCk1uCkbza", "W58LCg3cKa", "W4fyW5pdGW", "eINdUx5c", "WONdVZxdUmoY", "tmohWQXLkmoOa8opWPPiWPDFna", "jYddPHz+", "mCovgmoOEa", "nmokWRnAWOG", "WR/dK8ofWOjH", "WPGiWPa5pa", "WPhdOtLlWR/cImo7", "W600m8kzxG", "W6Lnb8ouwq", "WOzKsmkazW", "W6NcP2yJdG", "uCosBSoLkq", "WO3dHSoYWP11", "WPVdS29XnSojW6W", "emocbLHu", "mSkPhmkZs3KwWO0wjYHq", "z8ojg8oaja", "WQVcRdKw", "W6jdW7ddO20", "ls4Zs2y", "iheYzSkR", "W5DsWPVcNGC", "W6ZcSrGRWPa", "smkHWQOgFq", "nuldU35X", "W5S5wCokCW", "WPddLfnHlW", "cmo0i8o4uW", "W5ddL8o2WRvH", "tZdcJ3X0", "z8odFZzk", "W7vQW4tdP3W", "WPhdIqL4WP0", "dZpcQ0je", "uSoWWR4NWOq", "WQORySkAW6G", "W5jdW4NcMJm", "WRBdIsNdJ8kw", "WPVdKtVdICoj", "W6RdJhBdOSovWONdNslcVSolW7uqW4C", "W6m4DCo4pW", "WPzqW4VdKKtcLZu", "DtlcTCkPAq", "W7PLWO8tnW", "sgjFbSol", "WPFdUZddICoX", "WQRcJfjpdG", "WRtcUubYsq", "W4JdGdflW4G", "cf3dGgjX", "lSkGW44krG", "W5jgEmojqq", "z8oiFfvL", "AahcS1Xi", "WP0lW49duCkxWQelWRekWQm", "sSk5W5qexq", "cLqhFW4", "W6itmSoEpG", "q0Dvgmkh", "idNdH2nC", "WPD3WOegfa", "W5HfWPS+iW", "ldibWOSu", "WQ3dVrKjda", "WQhdKsNdT8oO", "W6vvW7hdSu8", "WR3cPgdcSd0", "uCojg8k0mW", "cKpdM3XH", "WRSJwmkrzG", "aJ/dG2fC", "WPWwW4JdMvPaW4PskbpdJwi", "lrOyhem", "CeDPsq", "tSoXf8o9W5a", "sf5xgmko", "WPZcQW06xG", "WPxdGq3cSCov", "CSkbuCk4A8oPra", "ESk6FCknWPddIsmnW5RdKSkt", "W5hdNvDSWPy", "WOpdPSoYW4LO", "WRBcQW3cVHzVWRuwWOWerKvG", "W7dcJG5blG", "WO4Ix8oYza", "WPldJqzoWQy", "AI/cSub2", "hmoUgmoIW7m", "WQKmnwNdTW", "bCoLaujv", "WOhdGmoWWPTP", "W5fGaSoFka", "W6FcUh8YAW", "W4JdVunSWPm", "W4ldHrBdNSoC", "WPVcULNcSwW", "mmojaCoJEa", "kLNcSSkbAttdNWJdRW", "W4m2ihhdTG", "mW7dSK1+", "C0pdOmoxea", "W40XWR/cHXa", "WPDZWPxcGI0", "W6zNWPu8ka", "ff7cPrvE", "dXyAw30", "WRpcSSkaB8k7WQBdSY7dOtvkuKm0", "W4JcUsRdK8oo", "W63dNY9bfG", "WPSQWQb0W7O", "WPFcSaBcLmkY", "WOddItFcQSoK", "W61iW53dS1S", "W4yaW7ddQgi", "ifRdGNC/", "W5Ted8kqaSkSsmo9W7rUh0aJWRm", "u8ofxCoLka", "W7ddOhy2ca", "WO3cTmo4WQHl", "WQFdICoaW4j1", "ACokhSoEoq", "WR3dLq9pEW", "imoGgmovW5O", "WPpcNa1cmG", "EL7dIXPw", "W4GuwSofoW", "gteLE2a", "n8odgCowua", "WQZdKCkuWQD5", "W7ywWRRcHIu", "WPpcIGuMha", "m0hdP3ft", "W4fjWPRcMbi", "bI0is2W", "WOJcMh5oiW", "W5xdQ8oIhmoD", "CwddJXrH", "fL7dSePq", "WPxcRYWYCmkuW5KKovn6W5K", "bSk8cvjt", "EahcJumU", "eahcTh4aW7tcUX/cUx4sW4BcGq", "W7hcNuyU", "WRLSl8kUkW", "W4JcV03cQ8ksAY4zt17cG3eD", "qaldSSkjrW", "Cmokg8o0da", "s0WVaSk8", "WO0/u8oVW5K", "CKKXg8oe", "W5XmW5ZdKLS", "W65YpSoYjW", "ACoUgCoGwa", "vmoPWO17WPG", "WPBdVIq+dq", "WOJdR8orWRj2", "d8kIW70uxW", "W67dQbHmWPW", "WPpdPWv8WQq", "FrtdOvn0", "zCkvWPWIWRi", "cmornhTf", "W6ZcRWtcN8kt", "WOdcTsaDwa", "WOxcIeRcMtu", "WRxcSdJcGmos", "WOtdJHNdNCoo", "WR/cJshcSCoy", "W5DJWOZdIMC", "W7BdQZn6W7O", "W5Xhemo4AW", "W4fHo8owxG", "uCoFfmoVW7u", "trjsgmoB", "WOZcJZWnCG", "W5RdUWOYvmkTvSkNDqClzG", "W7hdSSoLA8oK", "WQFdNXdcQ8o0", "WOJdVauDga", "jqxdVhy", "d8oih2mb", "W6fqWPbiaG", "mSkqE8kdWOFcPJPgfmkQgCo2va", "WPDolCk9tq", "mJ0FELG", "WQqOpmocW6e", "W6NdMwz2zG", "wZhdKCkhyq", "W7umiwddUa", "acals0a", "W5BdKx98", "xhG6xYe", "pmoJp2a", "W58ZrSksra", "W4xdLmoWaCoL", "tSocgmkiW5e", "W5pcSSoLiCoA", "W6JcLhlcLmk1", "WPlcGcKiyq", "nL7cPwjO", "W4TfWPlcOaO", "fttdGXjo", "ogOMxXC", "kr/dSSkwsa", "mwxdVuTx", "WQZcSHhcJCkj", "W5pcSSkffmoD", "bc3dIuz0", "CKf/w8k1", "W7RdHveWWR4", "W4fwWO01kq", "W4qnW6VdOxe", "WRqSlmk8Dq", "kqRdP2Lc", "WPvvWQySha", "W54qaxxdSq", "WPxdPr/dQCoF", "W55znMldIq", "W6ldQutdUvS", "W4TznSoZaq", "W6K0egRcKG", "W7uRbmoxsG", "rSojWQbaWPq", "WQa3W6ZcJNW", "lrjFiCoeCSo4WPfE", "sbVdKmkItG", "peJdOxji", "W6RcPH83uq"];
  return Po = function() {
    return o;
  }, Po();
}
async function ZB(o) {
  const i = await jB();
  function t(g, a, x, I, c) {
    return oA(c - 420, a);
  }
  function e(g, a, x, I, c) {
    return oA(a - -161, g);
  }
  function A(g, a, x, I, c) {
    return oA(c - 780, I);
  }
  const n = {};
  return n[t(550, "4ure", 675, 638, 662)] = $x, window[A(976, 1042, 898, "XdlX", 999) + "o"][A(909, 937, 1048, "4ure", 941) + "e"][e("DgFu", 66) + "pt"](n, i, o);
}
(function(o, i) {
  const t = o();
  function e(x, I, c, r, Q) {
    return MA(c - 405, r);
  }
  function A(x, I, c, r, Q) {
    return MA(I - -71, r);
  }
  function n(x, I, c, r, Q) {
    return MA(Q - -193, I);
  }
  function g(x, I, c, r, Q) {
    return MA(x - -397, c);
  }
  function a(x, I, c, r, Q) {
    return MA(c - 235, Q);
  }
  for (; ; )
    try {
      if (-parseInt(A(248, 258, 260, "Bc7F", 265)) / 1 * (-parseInt(a(580, 567, 575, 584, "5w2a")) / 2) + parseInt(e(730, 746, 736, "3TcE", 748)) / 3 * (-parseInt(A(257, 255, 265, "vZ4N", 252)) / 4) + parseInt(A(257, 248, 247, "pu4F", 236)) / 5 * (parseInt(A(245, 249, 259, "8P*D", 246)) / 6) + parseInt(g(-72, -75, "&edN", -79, -78)) / 7 * (parseInt(A(278, 266, 263, "3f6V", 271)) / 8) + parseInt(e(753, 734, 743, "YOcY", 741)) / 9 + -parseInt(A(250, 252, 243, "tSlU", 248)) / 10 + -parseInt(n(132, "8P*D", 118, 121, 125)) / 11 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(To, -1 * 433681 + 382464 + 5 * 74648);
async function VB(o) {
  function i(x, I, c, r, Q) {
    return MA(I - -184, c);
  }
  function t(x, I, c, r, Q) {
    return MA(Q - -81, r);
  }
  const { iv: e, key: A, message: n } = await Rs(o), g = await ZB(A), a = {};
  return a[t(251, 255, 238, "Q22k", 249)] = g, a.iv = e, a[i(145, 157, "Gpdc") + "ge"] = n, a;
}
function MA(o, i) {
  const t = To();
  return MA = function(e, A) {
    e = e - (-9378 + 8698 * -1 + 18394);
    let n = t[e];
    if (MA.rFeBIY === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      MA.IxPDvr = c, o = arguments, MA.rFeBIY = !0;
    }
    const a = t[-74 * 91 + 5939 + 1 * 795], x = e + a, I = o[x];
    return I ? n = I : (MA.kzNIiz === void 0 && (MA.kzNIiz = !0), n = MA.IxPDvr(n, A), o[x] = n), n;
  }, MA(o, i);
}
function To() {
  const o = ["W4uweCklnvjqWOy4W5BcS2u", "Bmk4WRS", "ymkzW4SKW5G9W6iVWPRdRWu", "WPCMWONcIW3dOmkgu8klW73dLa", "WQvfW7Snx8o3k1ZcKq8yWOtdRW", "W4iAf8kapv4KWQi7W4tcO3FdSG", "p8oTWPJcMvZcJJew", "eg/cNSkQACoBbmkiW554WRjn", "W7lcK0NcKSkoESoF", "dCo+WOLHB8o+W6pcV8kyW6rGW7W3", "W4/dRwpcUCkXW5GrmsBdJcq", "wK11WQ7cV8oPWRu", "smkcWPTzfG", "g8k6dSkxW7ZdQmoXWRnLW4tdMSkDBG", "W4yPWPCRW4GIkZm", "gSk+cSkuW7RcGCkbWQXSW73dPa", "Cmo0WR97i0n1W6y", "gmo8bb3dPtxdLq", "xmoBW47dRmkood7cRLBcKxvpW60", "W4BdOgtcSCk9WOX1er/dPd3cGmoy", "rH9qcuy6W6rXW5LQcfVcJW", "W7iCue4tl8oIca", "W7VdUw1zbCkGWOG", "W7NdJa7dI8oHgCkOWONdIZhdNMxcMW"];
  return To = function() {
    return o;
  }, To();
}
(function(o, i) {
  function t(g, a, x, I, c) {
    return WA(I - 279, c);
  }
  function e(g, a, x, I, c) {
    return WA(x - 40, g);
  }
  function A(g, a, x, I, c) {
    return WA(g - 520, c);
  }
  const n = o();
  for (; ; )
    try {
      if (-parseInt(A(753, 751, 757, 753, "xo[w")) / 1 + -parseInt(t(493, 504, 505, 499, "9XUN")) / 2 + parseInt(A(751, 745, 753, 764, "Z@d]")) / 3 + parseInt(e("yI][", 257, 268, 268, 272)) / 4 + parseInt(t(519, 506, 522, 509, "ctLJ")) / 5 + parseInt(e("HiwG", 246, 256, 246, 256)) / 6 * (parseInt(e("HiwG", 249, 258, 271, 258)) / 7) + -parseInt(A(758, 771, 763, 752, "vLM9")) / 8 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qo, 911919 + -2 * 79444 + -1 * -122133);
function qo() {
  const o = ["gqWABX9VcamHea", "hamrAf8ivs80j8k4c0a", "jCk7cCkHW63cPMxdSmovWQmtfSoQ", "wbxdLSkqWRK", "WR/cSCoqW4epACoNWO/cLW1MWQS", "W7aJm03dJq", "wmkWW4ixxW", "ACkGACocW5ZdQshdJSo7WPinW6e", "nwb9qhe", "z1pdQmkfBqK4WPFdILmqlW1L", "W6ldQCka", "W7n/WROOs8k8W51zW7vLjSk6W6a", "wYGYcc8", "WRFcKSksBqKglmozW6WmcSklWRi", "BSknDYGAWQOjumowkSoR", "WONcVCoyW6i", "A8keCInBWOWGDComgW", "B8kNASonW5NcOcFdMmo/WOKu", "oCkXxCkpW5btW4b4pcFcSCkH", "W6ldL8ox", "WOLPxq", "WPvlWQW1W6fVb8oLcSkfj8onzq", "BCoKWP8Gnw06W5tdH8k1WQ3dJa", "yIeDDCoM", "W7nCyfflWRddNf/cTCkYCmkXW5eD", "sqzAvW", "hxDztMXBvxGHkMxcTCkb"];
  return qo = function() {
    return o;
  }, qo();
}
function WA(o, i) {
  const t = qo();
  return WA = function(e, A) {
    e = e - (-1943 * -2 + -9413 + -1913 * -3);
    let n = t[e];
    if (WA.mcieoQ === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let C = "", E = "";
        for (let d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (let d = 0, u = C.length; d < u; d++)
          E += "%" + ("00" + C.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const c = function(r, Q) {
        let C = [], E = 0, d, u = "";
        r = g(r);
        let s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (let f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      WA.HYaNGk = c, o = arguments, WA.mcieoQ = !0;
    }
    const a = t[0], x = e + a, I = o[x];
    return I ? n = I : (WA.ODQLgH === void 0 && (WA.ODQLgH = !0), n = WA.HYaNGk(n, A), o[x] = n), n;
  }, WA(o, i);
}
async function _B(o) {
  function i(g, a, x, I, c) {
    return WA(g - -97, I);
  }
  function t(g, a, x, I, c) {
    return WA(g - -170, c);
  }
  function e(g, a, x, I, c) {
    return WA(c - -483, x);
  }
  const A = await window[t(64, 68, 61, 76, "ap3h") + "o"][t(65, 70, 67, 76, "l8gJ") + "e"][n(1116, 1119, 1132, "9i$5") + "t"](e(-238, -238, "^lqa", -251, -246), o);
  function n(g, a, x, I, c) {
    return WA(a - 894, I);
  }
  return Array[e(-254, -254, "X^2)", -273, -266)](new Uint8Array(A))[t(52, 47, 64, 49, "6iyp")]((g) => g[e(-259, -277, "yI][", -257, -269) + n(1097, 1106, 1111, "xo[w")](-4451 + -3 * -1489)[i(135, 140, 136, "0!cx") + n(1103, 1115, 1101, "bvPy")](-5593 + -104 * 26 + -193 * -43, "0"))[e(-259, -248, "M5A3", -268, -256)]("");
}
(function(o, i) {
  var t = o();
  function e(x, I, c, r, Q) {
    return oe(I - -154, Q);
  }
  function A(x, I, c, r, Q) {
    return oe(Q - -811, c);
  }
  function n(x, I, c, r, Q) {
    return oe(I - -452, x);
  }
  function g(x, I, c, r, Q) {
    return oe(x - 58, Q);
  }
  for (; ; )
    try {
      var a = -parseInt(n("xY28", -57, -54, -58, -68)) / 1 * (parseInt(n("Bg9f", -54, -58, -64, -48)) / 2) + -parseInt(g(449, 453, 451, 455, "[BFH")) / 3 * (-parseInt(g(459, 456, 458, 459, "mC5U")) / 4) + parseInt(e(248, 240, 232, 237, "ZY9a")) / 5 * (-parseInt(e(232, 236, 228, 236, ")K2%")) / 6) + -parseInt(g(454, 456, 445, 444, "R^SL")) / 7 + -parseInt(n("kIx(", -68, -62, -66, -74)) / 8 + -parseInt(g(451, 448, 447, 442, "bN22")) / 9 + -parseInt(A(-436, -433, ")K2%", -426, -429)) / 10 * (-parseInt(e(235, 238, 235, 247, "pa][")) / 11);
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(jo, -1 * 343019 + 31 * -4863 + 769560);
function oe(o, i) {
  var t = jo();
  return oe = function(e, A) {
    e = e - 382;
    var n = t[e];
    if (oe.ppJgIp === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", C = "", E = "", d = 0, u, s, f = 0; s = r.charAt(f++); ~s && (u = d % 4 ? u * 64 + s : s, d++ % 4) ? C += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          s = Q.indexOf(s);
        for (var p = 0, k = C.length; p < k; p++)
          E += "%" + ("00" + C.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var C = [], E = 0, d, u = "";
        r = g(r);
        var s;
        for (s = 0; s < 256; s++)
          C[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + C[s] + Q.charCodeAt(s % Q.length)) % 256, d = C[s], C[s] = C[E], C[E] = d;
        s = 0, E = 0;
        for (var f = 0; f < r.length; f++)
          s = (s + 1) % 256, E = (E + C[s]) % 256, d = C[s], C[s] = C[E], C[E] = d, u += String.fromCharCode(r.charCodeAt(f) ^ C[(C[s] + C[E]) % 256]);
        return u;
      };
      oe.BEmtIB = a, o = arguments, oe.ppJgIp = !0;
    }
    var x = t[-3 * 2073 + 3 * -911 + 8952], I = e + x, c = o[I];
    return c ? n = c : (oe.aeGrsC === void 0 && (oe.aeGrsC = !0), n = oe.BEmtIB(n, A), o[I] = n), n;
  }, oe(o, i);
}
function jo() {
  var o = ["uSo2obRdUcpdKhRdJrrReSkm", "WQVdRWRdM1FdV8ofvSksWPtcHCkmWRmQ", "WRqFWQ/dI3lcTCo2mW", "WPD1WOziBmkLrNZcHfPmE8o2", "WQJdSXlcH8kjrCkt", "WQZdQWRdN1NdUCkupSkxWO/cPCk8", "W5GbW4rOW5/cHSk7hLyCWR7dLG", "omouW6Gqx8o5WObZ", "mmoEW4WuEmo4daZcNGzLcW8", "WQVdQWVdK1ldVSkMemk3WOtcVCkY", "CSo/WPtcHmkiWRVcIa", "W7ezkWJcIuFcO8oG", "WROsW5tdMCoSqZldGer+sCkb", "r8kqoCkVvtfufa", "mCoqWRfRpmo2WRrAW4JcVmkm", "CSowW4BcSmkzW7tcJwVcSxJcR27cHq", "vmoZoH3dUI/cN0JdTqf3hq", "oSk/WQi9EmkTWP7cRW", "mComymoQW4JcTveY", "F8olWOvOomoZW6PyW4nYW4S", "e3ddLSkMbG1sCwqJW7qP"];
  return jo = function() {
    return o;
  }, jo();
}
async function cg(o) {
  const { Image: i } = xt, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const n = i.verify(A);
  if (n) throw Error(n);
  const g = {};
  return g.bytes = e, i.create(g);
}
async function XI(o) {
  const { v4: { Metadata: i } } = xt, t = { ...o };
  t.platform = xt.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function $I(o) {
  const { Content: i } = xt, { iv: t, key: e, message: A } = await VB(o), n = { token: new Uint8Array(e), iv: t, schemaVersion: gs, bytes: new Uint8Array(A) }, g = i.verify(n);
  if (g) throw Error(g);
  const a = i.create(n);
  return i.encode(a).finish();
}
function Ar(o) {
  const { Blob: i } = xt.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var f0, $o;
class er {
  constructor(i, t, e, A, n, g, a, x, I, c, r, Q) {
    P(this, f0, !0);
    P(this, $o, Date.now());
    S(this, "fpsOfAllImages", new eg(1310 + 3 * 3046 + -2 * 5209));
    this.cameraService = i, this.imageCropSettings = t, this.imageProcessor = e, this.createProtoMessage = A, this.onCaptureCallback = n, this.onDetectionCallback = g, this.checkToInstructionCodeMap = a, this.fallbackInstruction = x, this.samVersion = I, this.instructionEscalation = c, this.sessionToken = r, this.analytics = Q;
  }
  async run() {
    for (; w(this, f0); )
      await this.iterate();
    return this;
  }
  stop() {
    H(this, f0, !1);
  }
  async trackCaptureProcess(i, t) {
    var a;
    const e = Date.now(), A = s0(this.fpsOfAllImages), n = {};
    n.width = t.width, n.height = t.height;
    const g = { detection: i, imageResolution: n, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - w(this, $o), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await kB() };
    a0() && Object.assign(g, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !B0() }), (a = this.analytics) == null || a.trackCaptureProcess(g);
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: ke(s0(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const n = A, g = await gI(t), a = await hs(t, this.imageCropSettings), x = await this.cameraService.getCameraProperties(), I = { ...x, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await cg(a) }, c = {};
    c.sessionToken = this.sessionToken, c.web = I;
    const r = c, Q = await this.createProtoMessage(g, r), C = {};
    C.detection = e, C.imageResolution = n;
    const E = {};
    E.image = g, E.data = C;
    const d = E;
    this.stop();
    const u = {};
    u.imageData = d, u.protoMessage = Q, u.webMetadata = I, u.candidateSelectionImages = i, this.onCaptureCallback(u);
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
    return Array.from(i).forEach(([A, n]) => {
      !n && e.push(t[A]);
    }), e;
  }
  async sleep(i) {
    await gn(Math.max(na.max - i, na.min));
  }
}
f0 = new WeakMap(), $o = new WeakMap();
class zB extends er {
  constructor(t, ...e) {
    super(...e);
    S(this, "candidateSelectionTime", -6193 + -13 * 626 + -843 * -17);
    S(this, "candidatesSelectionFramesCount", -7868 + 240 * 27 + 1388);
    S(this, "isInCandidateSelection", !1);
    S(this, "lastImage", null);
    S(this, "bestImage", null);
    S(this, "candidateSelectionImages", []);
    this.instructionCodeMap = t;
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
    const n = this.getDetectionDetails(A);
    this.onDetection(n, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const g = {};
    g.instructionCode = n.processedImage.instructionCode, g.isValid = e.isValid, g.image = t.image, g.detection = e.detection, this.lastImage = g, await this.sleep(n.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? L.fromCameraError(e) : L.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const n = {};
    n.image = t.image, n.detection = e.detection;
    const g = n;
    this.bestImage = g, this.candidateSelectionImages.push(g);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const n = {};
    n.image = t.image, n.detection = e.detection;
    const g = n;
    this.isNewImageBetter(this.lastImage.detection, g.detection) ? this.bestImage = g : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, g), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 9791 + -1725 * -3 + 14966 * -1 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= mi.minFrames ? t > mi.minDuration : t > mi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new L("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), n = ke(1e3 / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = e.image.width, g.height = e.image.height;
    const a = g, x = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), I = {};
    I.isNewDetectionValid = t.isValid, I.newInvalidInstruction = x[-5984 + 19 * 413 + -3 * 621];
    const c = this.getInstructionCode(I), r = this.collectAndEscalate(c), Q = {};
    return Q.detection = t.detection, Q.instructionCode = c, Q.isEscalated = r, Q.invalidValidators = x, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: A, fps: n, avgFps: ke(s0(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class tr {
  constructor() {
    S(this, "cameraService");
    S(this, "imageCropSettings");
    S(this, "imageProcessor");
    S(this, "instructionEscalation");
    S(this, "createProtoMessage");
    S(this, "onCaptureCallback");
    S(this, "onDetectionCallback");
    S(this, "checkToInstructionCodeMap");
    S(this, "fallbackInstruction");
    S(this, "samVersion");
    S(this, "sessionToken");
    S(this, "analytics");
  }
  setCameraService(i) {
    return this.cameraService = i, this;
  }
  setImageCropSettings(i) {
    return this.imageCropSettings = i, this;
  }
  setImageProcessor(i) {
    return this.imageProcessor = i, this;
  }
  setInstructionEscalation(i) {
    return this.instructionEscalation = i, this;
  }
  setCreateProtoMessage(i) {
    return this.createProtoMessage = i, this;
  }
  setOnCaptureCallback(i) {
    return this.onCaptureCallback = i, this;
  }
  setOnDetectionCallback(i) {
    return this.onDetectionCallback = i, this;
  }
  setCheckToInstructionCodeMap(i) {
    return this.checkToInstructionCodeMap = i, this;
  }
  setFallbackInstruction(i) {
    return this.fallbackInstruction = i, this;
  }
  setSamVersion(i) {
    return this.samVersion = i, this;
  }
  setSessionToken(i) {
    return this.sessionToken = i, this;
  }
  setAnalytics(i) {
    return this.analytics = i, this;
  }
  reset() {
    return this.cameraService = void 0, this.imageCropSettings = void (-1 * -2139 + 1361 * 1 + -3500), this.imageProcessor = void (-15 * -381 + -6790 + -25 * -43), this.instructionEscalation = void (-17 * -52 + -2 * 1093 + 434 * 3), this.createProtoMessage = void (1 * -6683 + -1741 * 2 + 10165), this.onCaptureCallback = void 0, this.onDetectionCallback = void 0, this.checkToInstructionCodeMap = void (193 * 48 + -8831 + -433), this.fallbackInstruction = void (-6671 + -994 * -8 + -1281), this.samVersion = void (153 * -39 + 7559 * -1 + 2 * 6763), this.sessionToken = void (-9693 + 49 * -94 + 14299), this.analytics = void (-5 * -740 + 5660 + 104 * -90), this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new L("CameraService is required");
    if (!this.imageCropSettings) throw new L("ImageCropSettings is required");
    if (!this.imageProcessor) throw new L("ImageProcessor is required");
    if (!this.createProtoMessage) throw new L("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new L("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new L("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new L("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new L("FallbackInstruction is required");
    if (!this.samVersion) throw new L("SamVersion is required");
  }
}
class XB extends tr {
  constructor() {
    super(...arguments);
    S(this, "instructionCodeMap");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void (646 + 17 * -38), this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new L("instructionCodeMap is required");
  }
  build() {
    return this.validateDependencies(), new zB(this.instructionCodeMap, this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
var Je, ze;
class $B extends er {
  constructor(...t) {
    super(...t);
    P(this, Je, void (6 * -941 + -2686 + 8332));
    P(this, ze);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Di).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    H(this, ze, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && H(this, Je, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(oa.REQUEST_CAPTURE, w(this, ze));
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
    return w(this, Je) ? w(this, Je) === Di.FIRST_FRAME ? !0 : w(this, Je) === Di.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? L.fromCameraError(e) : L.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), H(this, Je, void (-4458 + -202 * 47 + -4 * -3488));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), n = ke(1e3 / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = t.image.width, g.height = t.image.height;
    const a = g, x = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), I = this.getInstructionCode(x[8031 + -1 * -7103 + 94 * -161]), c = this.collectAndEscalate(I), r = {};
    return r.detection = e.detection, r.instructionCode = I, r.invalidValidators = x, r.isInCandidateSelection = !1, r.isEscalated = c, { processedImage: r, detectionTime: A, fps: n, avgFps: ke(s0(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), w(this, ze) && document.removeEventListener(oa.REQUEST_CAPTURE, w(this, ze));
  }
}
Je = new WeakMap(), ze = new WeakMap();
class AQ extends tr {
  build() {
    return this.validateDependencies(), new $B(this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
class eQ {
  static create(i, t) {
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: n, createProtoMessage: g, fallbackInstruction: a, imageCropSettings: x, imageProcessor: I, instructionCodeMap: c, instructionEscalation: r, onCaptureCallback: Q, onDetectionCallback: C, samVersion: E, sessionToken: d } = t;
    switch (i) {
      case en.AUTO_CAPTURE:
        return new XB().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setInstructionCodeMap(c).setCameraService(A).setImageCropSettings(x).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(Q).setOnDetectionCallback(C).setSamVersion(E).setInstructionEscalation(r).setSessionToken(d).setAnalytics(e).build();
      case en.WAIT_FOR_REQUEST:
        return new AQ().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setCameraService(A).setImageCropSettings(x).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(Q).setOnDetectionCallback(C).setSamVersion(E).setInstructionEscalation(r).setSessionToken(d).setAnalytics(e).build();
      default:
        throw new L("Invalid detection type: " + i);
    }
  }
}
function tQ({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = cB(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, rB(t.CAMERA_PROPS_CHANGED, A), _(() => () => {
    E0.getInstance().restart();
  }, []);
  const n = {};
  return n.shouldCameraMirror = e, n;
}
function oQ(o) {
  _(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function iQ({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: n, imageCropSettings: g, instructionCodeMap: a, onCapture: x, onDetection: I, sessionToken: c }) {
  oQ(() => {
    t && t.destroy();
  });
  const r = LA(!1), { appState: Q, handleAppStateChange: C, isCameraReady: E } = rt(), { sunfish: d } = v0(), { analytics: u } = Vx(), { cameraResolution: s, cameraService: f, onCameraResolutionChange: p, videoRef: k } = Ss(), F = {};
  F.cameraResolution = s, F.cameraService = f, F.customEvent = A;
  const { shouldCameraMirror: R } = tQ(F), N = Ot(void (6025 + -1 * 8983 + 2958)), Z = (f == null ? void 0 : f["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && E, mA = be((tA) => {
    C(ie.WAITING), x(tA);
  }, [x, C]), nA = be((tA, Ht) => {
    p(tA.resolution), N.value = tA, I(tA, Ht);
  }, [I, N, p]);
  _(() => {
    !r.current && Z && (r.current = !0, C(ie.RUNNING));
  }, [Z, C]), _(() => {
    if (Q !== ie.RUNNING || !Z) return;
    if (!f || !t) throw new L("Cannot start detection");
    t.imageProcessor.reset();
    const tA = {};
    tA.analytics = u, tA.cameraService = f, tA.imageProcessor = t.imageProcessor, tA.fallbackInstruction = n, tA.instructionCodeMap = a, tA.checkToInstructionCodeMap = i, tA.sessionToken = c, tA.samVersion = t.samVersion, tA.createProtoMessage = e, tA.onCaptureCallback = mA, tA.onDetectionCallback = nA, tA.instructionEscalation = t.instructionEscalation, tA.imageCropSettings = g;
    const Ht = eQ.create(o, tA);
    return t.runDetectionLoop(Ht), () => {
      t.stopDetectionLoop();
    };
  }, [Q, Z, t, f, mA, nA, c, N, u, e, a, i, n, o, g]);
  const VA = {};
  return VA.videoRef = k, VA.cameraResolution = s, VA.detectionDetails = N, VA.shouldCameraMirror = R, VA;
}
const nQ = () => typeof document < "u" && document.hasFocus();
function gQ(o = {}) {
  const i = LA(o), t = LA(nQ()), [e, A] = DA(t.current);
  _(() => {
    i.current = o;
  }), _(() => {
    function g(c) {
      t.current = c, A(c);
    }
    function a() {
      Promise.resolve().then(() => {
        var c, r, Q, C;
        !t.current && ((r = (c = i.current).onFocus) == null || r.call(c), (C = (Q = i.current).onChange) == null || C.call(Q, !0)), g(!0);
      });
    }
    function x() {
      Promise.resolve().then(() => {
        var c, r, Q, C;
        t.current && ((r = (c = i.current).onBlur) == null || r.call(c), (C = (Q = i.current).onChange) == null || C.call(Q, !1)), g(!1);
      });
    }
    function I() {
      document.visibilityState === "hidden" && x();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", x), window.document.addEventListener("visibilitychange", I), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", x), window.document.removeEventListener("visibilitychange", I);
    };
  }, []);
  const n = {};
  return n.isWindowFocused = e, n;
}
function aQ(o = {}) {
  const { appState: i } = rt();
  gQ({ onBlur: () => {
    var t;
    i === ie.WAITING || i === tn.DONE || (t = o.onBlur) == null || t.call(o);
  }, onFocus: () => {
    var t;
    i === ie.WAITING || i === tn.DONE || (t = o.onFocus) == null || t.call(o);
  } });
}
function xQ(o, i) {
  if (!o) return i;
  const { detectionRecord: t, hashedDetectedImages: e } = o;
  i.hashedDetectedImages && (e == null || e.push(...i.hashedDetectedImages)), i.detectionRecord && (t == null || t.push(...i.detectionRecord));
  const A = { ...o };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function IQ() {
  const o = Ot(null);
  function i({ cameraProperties: e }) {
    o.value = xQ(o.value, e);
  }
  const t = {};
  return t.cameraProperties = o, t.mergeCameraProperties = i, t;
}
const sg = It(void 0);
sg.displayName = "CommonThresholdsContext";
function rQ() {
  const o = Ge(sg);
  if (!o)
    throw new Error("Missing provider for ThresholdsContext");
  return o;
}
function CQ() {
  return Ag() ? Ca.MOBILE : Ca.DESKTOP;
}
function cQ({
  cameraOptionsThresholds: o,
  children: i,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, n] = DA(CQ()), g = NA(() => ({ thresholds: t(o, e[A]), thresholdsPreset: A, setThresholdsPreset: n }), [o, A, n, e, t]);
  return /* @__PURE__ */ D(sg.Provider, { value: g, children: i });
}
const Gn = {};
Gn.min = -(-4709 + 2 * 494 + 3722), Gn.max = 1;
const Sn = {};
Sn.confidence = 0, Sn.status = Gn;
const or = {};
or.confidence = 0;
const ir = {};
ir.confidence = 0;
const Ae = {};
Ae.faceConfidence = 0.4, Ae.minFaceSizeRatio = 0.16, Ae.maxFaceSizeRatio = 0.2, Ae.sharpnessThreshold = 0.25, Ae.brightnessLowThreshold = 0.2, Ae.brightnessHighThreshold = 0.85, Ae.outOfBoundsThreshold = 0.05, Ae.devicePitchAngleThreshold = 30, Ae.mouth = Sn, Ae.leftEye = or, Ae.rightEye = ir;
const Nn = {};
Nn.min = -(-1 * -863 + 1015 + -1877), Nn.max = 1;
const Fn = {};
Fn.confidence = 0, Fn.status = Nn;
const nr = {};
nr.confidence = 0;
const gr = {};
gr.confidence = 0;
const ee = {};
ee.faceConfidence = 0.4, ee.minFaceSizeRatio = 0.16, ee.maxFaceSizeRatio = 0.2, ee.sharpnessThreshold = 0.25, ee.brightnessLowThreshold = 0.2, ee.brightnessHighThreshold = 0.85, ee.outOfBoundsThreshold = 0.05, ee.devicePitchAngleThreshold = 30, ee.mouth = Fn, ee.leftEye = nr, ee.rightEye = gr;
const Rn = {};
Rn.MOBILE = Ae, Rn.DESKTOP = ee;
const sQ = Rn;
function BQ(o, i) {
  var t, e, A;
  return {
    faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? i.faceConfidence,
    minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? i.minFaceSizeRatio,
    maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? i.maxFaceSizeRatio,
    sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? i.sharpnessThreshold,
    brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? i.brightnessLowThreshold,
    brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? i.brightnessHighThreshold,
    outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? i.outOfBoundsThreshold,
    devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? i.devicePitchAngleThreshold,
    mouth: {
      confidence: ((t = o == null ? void 0 : o.mouth) == null ? void 0 : t.confidence) ?? i.mouth.confidence,
      status: {
        min: ((e = o == null ? void 0 : o.mouth) == null ? void 0 : e.status.min) ?? i.mouth.status.min,
        max: ((A = o == null ? void 0 : o.mouth) == null ? void 0 : A.status.max) ?? i.mouth.status.max
      }
    },
    leftEye: (o == null ? void 0 : o.leftEye) ?? {
      confidence: i.leftEye.confidence
    },
    rightEye: (o == null ? void 0 : o.rightEye) ?? {
      confidence: i.rightEye.confidence
    }
  };
}
function QQ({
  cameraOptionsThresholds: o,
  children: i
}) {
  return /* @__PURE__ */ D(
    cQ,
    {
      cameraOptionsThresholds: o,
      thresholdsPresetMapper: BQ,
      thresholdsPresets: sQ,
      children: i
    }
  );
}
const EQ = ({ children: o }) => {
  const i = LA(null);
  return BB(i, Be.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(Gc, { ref: i, children: o });
}, Mn = {};
Mn.minFaceSizeRatio = 0.135, Mn.maxFaceSizeRatio = 0.21;
const ar = {};
ar.faceConfidence = 1;
const ve = {};
ve.minFaceSizeRatio = 0.3, ve.maxFaceSizeRatio = 1, ve.brightnessHighThreshold = 1, ve.brightnessLowThreshold = -(1 * 7138 + -1444 + 1 * -5693), ve.faceConfidence = 0.15, ve.sharpnessThreshold = -(4463 + 654 * 3 + -44 * 146), ve.outOfBoundsThreshold = -(-2 * -3467 + -9242 * 1 + -2309 * -1);
const dQ = { [KA.DISTANT]: Mn, [KA.MIDDLE]: ar, [KA.CLOSEUP]: ve }, lQ = dQ, Ra = 0 + 0.255;
function xr() {
  return rQ();
}
const uQ = (o, i) => ({ ...o, leftEye: { ...o.leftEye, center: Bt(o.leftEye.center, i) }, rightEye: { ...o.rightEye, center: Bt(o.rightEye.center, i) }, mouth: { ...o.mouth, center: Bt(o.mouth.center, i) }, topLeft: Bt(o.topLeft, i), bottomRight: Bt(o.bottomRight, i), faceCenter: Bt(o.faceCenter, i) }), Ir = (o, i) => {
  const { faceCenter: t, faceSize: e } = o, A = _c(e, i), n = {};
  n.x = t.x, n.y = t.y - A;
  const g = {};
  g.x = t.x + A, g.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const x = {};
  x.x = t.x - A, x.y = t.y;
  const I = {};
  return I.top = n, I.right = g, I.bottom = a, I.left = x, eI(I);
}, fQ = (o, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = i, n = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  xI(o, n, "rgba(255, 0, 0, 0.3)", !0), x0(o, e, "lime");
}, hQ = (o, i, t) => {
  const e = Ir(i, t);
  Object.values(e).map((A) => x0(o, A, "orange"));
};
function pQ({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = xr(), { redfin: n } = v0(), g = LA(null);
  if (_(() => {
    if (!g.current)
      return;
    g.current.width = o.width, g.current.height = o.height, Yc(g.current);
    const s = wo(o), f = II(
      o,
      e.outOfBoundsThreshold,
      s
    ), p = Zc(o);
    i.value && (fQ(g.current, i.value.processedImage.detection), hQ(
      g.current,
      i.value.processedImage.detection,
      o
    ), wi(g.current, s, "lime"), wi(g.current, f, "yellow"), wi(g.current, p, "blue"), x0(g.current, i.value.processedImage.detection.leftEye.center, "cyan"), x0(g.current, i.value.processedImage.detection.rightEye.center, "cyan"), x0(g.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [o, e, i.value]), !i.value)
    return null;
  const {
    avgFps: a,
    detectionTime: x,
    fps: I,
    processedImage: { detection: c, instructionCode: r, invalidValidators: Q, isEscalated: C },
    resolution: E,
    samVersion: d
  } = i.value, u = {
    Confidence: c.confidence,
    Brightness: c.brightness,
    Sharpness: c.sharpness,
    "Face size": c.faceSize,
    "Left eye confidence": c.leftEye.confidence,
    "Left eye status": c.leftEye.status,
    "Right eye confidence": c.rightEye.confidence,
    "Right eye status": c.rightEye.status,
    "Mouth confidence": c.mouth.confidence,
    "Mouth status": c.mouth.status,
    "Detection time": x,
    FPS: I,
    "Avg FPS": a,
    Tier: n,
    Instruction: r,
    Resolution: E,
    "Escalated instruction": C,
    "Component version": "7.3.2",
    "Thresholds preset": A
  };
  return d && (u["SAM version"] = d), Q.length > 0 && (u["Invalid validators"] = Q), /* @__PURE__ */ D(
    Uc,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: u,
      isImageMirror: t
    }
  );
}
function yQ({ isRounded: o, isSquare: i, ...t }) {
  return o ? /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ D("rect", { fill: "#000", ...t, rx: i ? "0" : "50%" });
}
function DQ(o, i) {
  const [t, e] = DA(!1), A = () => e((a) => !a), n = "" + t;
  Lt(() => {
    function a() {
      if (!o.current) return;
      const r = new MutationObserver(() => {
        A();
      }), Q = {};
      return Q.childList = !0, Q.subtree = !0, Q.attributes = !0, r.observe(o.current, Q), r;
    }
    function x() {
      var C;
      if (!((C = o.current) != null && C["parentElement"])) return;
      const r = new MutationObserver((E) => {
        E.find((u) => {
          for (const s of u.removedNodes)
            if (s !== (i == null ? void 0 : i.current) && s === o.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((s) => {
            var f;
            s !== (i == null ? void 0 : i.current) && ((f = s.parentElement) == null || f.removeChild(s));
          });
        });
      }), Q = {};
      return Q.childList = !0, r.observe(o.current.parentElement, Q), r;
    }
    const I = a(), c = x();
    return () => {
      c == null || c.disconnect(), I == null || I.disconnect();
    };
  });
  const g = {};
  return g.key = n, g;
}
const mQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function wQ({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = LA(null), { key: n } = DQ(A, t);
  return /* @__PURE__ */ D("div", { ref: A, style: mQ, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${e} ${i}`, children: [
    /* @__PURE__ */ D("defs", { children: [
      /* @__PURE__ */ D("mask", { id: "placeholder", children: [
        /* @__PURE__ */ D("rect", { fill: "#fff", height: "100%", width: "100%" }),
        o
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
  ] }) }, n);
}
function bQ({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = Vc(t), A = `${e.height * 100}%`, n = `${e.width * 100}%`, g = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    wQ,
    {
      cutOut: o || /* @__PURE__ */ D(yQ, { height: A, width: n, x: g, y: a }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function kQ({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = v0(), { appState: n, freemiumOverlayState: g } = rt(), a = LA(null), x = g !== I0.HIDDEN && A !== In.Higher && o, I = g === I0.VISIBLE, c = o && n === ie.RUNNING;
  return /* @__PURE__ */ D(ae, { children: [
    x && /* @__PURE__ */ D(
      bQ,
      {
        fullOverlay: I,
        ignoreElement: a,
        resolution: o
      }
    ),
    i,
    c && /* @__PURE__ */ D("div", { ref: a, children: /* @__PURE__ */ D(
      pQ,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const GQ = (o, i) => {
  if (ds()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    E0.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function SQ(o, i) {
  const { FaceContent: t } = xt.v4, e = await cg(o), A = await XI(i), n = {};
  n.image = e, n.metadata = A;
  const g = n, a = t.verify(g);
  if (a) throw Error(a);
  const x = t.create(g), I = {};
  return I.faceContent = x, Ar(I);
}
async function NQ(o, i) {
  const t = await SQ(o, i);
  return $I(t);
}
function FQ({ controller: o, onPhotoTakenInternal: i }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = NI(), n = be(({ candidateSelectionImages: x, imageData: I, protoMessage: c, webMetadata: r }) => {
    GQ(rI.FACE, x), e(I, c);
    const Q = {};
    Q.cameraProperties = r, i == null || i(Q);
  }, [i, e]), g = be(({ fps: x, processedImage: I }, c) => {
    const r = {};
    r.code = I.instructionCode, r.isEscalated = I.isEscalated, FI(Be.INSTRUCTION_CHANGED, r), o && xB(Be.DETECTED_FACE_CHANGED, I.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const Q = {};
    Q.detection = I.detection, Q.fps = x, Q.image = c, Q.isInCandidateSelection = I.isInCandidateSelection, Q.invalidValidators = I.invalidValidators, IB(Be.FACE_DETECTION, Q);
  }, [o]), a = {};
  return a.captureMode = t, a.controller = o, a.createProtoMessage = NQ, a.onCapture = n, a.onDetection = g, a.sessionToken = A, a.customEvent = Be, a.fallbackInstruction = CA.FACE_NOT_PRESENT, a.instructionCodeMap = CA, a.checkToInstructionCodeMap = Mc, a.imageCropSettings = as, iQ(a);
}
class RQ {
  constructor(i, t, e, A, n) {
    S(this, "isDetectorInitialized", !1);
    S(this, "samVersion", null);
    S(this, "detection");
    this.imageProcessor = i, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = n;
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
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new L("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
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
    return "" + t.replace(AI, "") + i;
  }
}
class MQ {
  constructor() {
    S(this, "imageProcessor");
    S(this, "assetsDirectoryPath");
    S(this, "instructionEscalation");
    S(this, "compatibleSamVersion");
    S(this, "validationService");
    S(this, "detector");
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
    if (!this.imageProcessor) throw new L("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new L("AssetsDirectoryPath is required");
    if (!this.detector) throw new L("Detector is required");
    if (!this.compatibleSamVersion) throw new L("CompatibleSamVersion is required");
    if (!this.validationService) throw new L("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (29 * 319 + 6443 + -15694), this.assetsDirectoryPath = void (-477 + 9 * 53), this.instructionEscalation = void (-9197 * 1 + 78 * 121 + -1 * 241), this.compatibleSamVersion = void (12075 + 483 * -25), this.detector = void (7 * -721 + -1 * 6574 + 11621), this.validationService = void (-230 + -1 * -4429 + -4199), this;
  }
}
class WQ {
  constructor() {
    S(this, "detectionRecord", []);
    S(this, "imagesWithTimestampForDuplicateDetection", new eg(ns));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / rs, A = e / 2, n = i.length / (-10451 + 1 * 10453), g = await _B(i.slice(n - A, n + A)), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: us(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const n = eI(i), g = this.validationService.validateDetectedObject(n, t);
    if (g.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = A, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(i), { detection: n, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class vQ {
  constructor() {
    S(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new L("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Bg extends RQ {
  constructor(t, e, A, n, g, a) {
    super(A, n, g, e, a);
    S(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], FI(Be.INSTRUCTION_CHANGED, t, Kc);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
S(Bg, "_instance");
class LQ extends MQ {
  build() {
    return this.validateDependencies(), new Bg(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
class JQ extends WQ {
  constructor(t, e) {
    super();
    S(this, "className", "FaceImageProcessor");
    S(this, "detector");
    S(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = wo(t), A = aI(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), n = {};
    n.height = t.height, n.width = t.width;
    let g = await this.detector.detect(A.data, A.resolution, n);
    g = uQ(g, wo(t));
    const a = {};
    return a.detectedObject = g, a.image = t, a.imageData = A.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var kt, Xe, $e;
class UQ {
  constructor(i) {
    P(this, kt);
    P(this, Xe);
    P(this, $e);
    H(this, kt, i), H(this, Xe, /* @__PURE__ */ new Map());
  }
  validate() {
    w(this, kt).forEach((i) => {
      w(this, Xe).set(i.name, i.evaluate());
    }), H(this, $e, void (263 * -17 + 1 * 9771 + -5300));
  }
  isValid() {
    return w(this, $e) === void 0 && H(this, $e, Array.from(w(this, Xe).values()).every((i) => i)), w(this, $e);
  }
  get result() {
    return w(this, Xe);
  }
  get validators() {
    return w(this, kt);
  }
}
kt = new WeakMap(), Xe = new WeakMap(), $e = new WeakMap();
var h0, At;
class ZA {
  constructor(i, t) {
    P(this, h0);
    P(this, At);
    H(this, h0, i), H(this, At, t);
  }
  get threshold() {
    return w(this, At);
  }
  get name() {
    return w(this, h0);
  }
  isValueBelowThreshold(i) {
    return i < w(this, At);
  }
  isValueAboveThreshold(i) {
    return i > w(this, At);
  }
}
h0 = new WeakMap(), At = new WeakMap();
const YQ = "isNotDim";
var p0;
class OQ extends ZA {
  constructor(t, e) {
    super(YQ, t);
    P(this, p0);
    H(this, p0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, p0));
  }
}
p0 = new WeakMap();
const HQ = "isNotSmall";
var y0;
class KQ extends ZA {
  constructor(t, e) {
    super(HQ, t);
    P(this, y0);
    H(this, y0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, y0));
  }
}
y0 = new WeakMap();
const PQ = "isNotBright";
var D0;
class TQ extends ZA {
  constructor(t, e) {
    super(PQ, t);
    P(this, D0);
    H(this, D0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, D0));
  }
}
D0 = new WeakMap();
const qQ = "isPresent";
var m0;
class jQ extends ZA {
  constructor(t, e) {
    super(qQ, t);
    P(this, m0);
    H(this, m0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, m0));
  }
}
m0 = new WeakMap();
const ZQ = "isSharp";
var w0;
class VQ extends ZA {
  constructor(t, e) {
    super(ZQ, t);
    P(this, w0);
    H(this, w0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, w0));
  }
}
w0 = new WeakMap();
const _Q = "isLeftEyePresent";
var b0;
class zQ extends ZA {
  constructor(t, e) {
    super(_Q, t);
    P(this, b0);
    H(this, b0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, b0));
  }
}
b0 = new WeakMap();
const XQ = "isMouthPresent";
var k0;
class $Q extends ZA {
  constructor(t, e) {
    super(XQ, t);
    P(this, k0);
    H(this, k0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, k0));
  }
}
k0 = new WeakMap();
const AE = "isMouthScoreNotTooLow";
var G0;
class eE extends ZA {
  constructor(t, e) {
    super(AE, t);
    P(this, G0);
    H(this, G0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, G0));
  }
}
G0 = new WeakMap();
const tE = "isMouthScoreNotTooHigh";
var S0;
class oE extends ZA {
  constructor(t, e) {
    super(tE, t);
    P(this, S0);
    H(this, S0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, S0));
  }
}
S0 = new WeakMap();
const iE = "isNotLarge";
var N0;
class nE extends ZA {
  constructor(t, e) {
    super(iE, t);
    P(this, N0);
    H(this, N0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, N0));
  }
}
N0 = new WeakMap();
const gE = "isNotPitched";
var F0;
const Eg = class Eg extends ZA {
  constructor(t, e) {
    super(gE, Eg.calculatePitchAngleAccelerationThreshold(t));
    P(this, F0);
    H(this, F0, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return os * Math.sin(t * (Math.PI / (-24 * -70 + -9596 + -253 * -32)));
  }
  evaluate() {
    const { z: t } = w(this, F0) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
F0 = new WeakMap();
let Wn = Eg;
const aE = "isRightEyePresent";
var R0;
class xE extends ZA {
  constructor(t, e) {
    super(aE, t);
    P(this, R0);
    H(this, R0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, R0));
  }
}
R0 = new WeakMap();
const IE = "isNotOutOfBounds";
var M0, et;
class rE extends ZA {
  constructor(t, e, A) {
    super(IE, t);
    P(this, M0);
    P(this, et);
    H(this, M0, e), H(this, et, A);
  }
  evaluate() {
    const t = II(w(this, et), this.threshold, wo(w(this, et))), e = Ir(w(this, M0), w(this, et));
    return ys(e, t);
  }
}
M0 = new WeakMap(), et = new WeakMap();
class CE {
  static getFaceValidationInstance(i, t, e, A) {
    return new UQ([new jQ(i.faceConfidence, t.confidence), new zQ(i.leftEye.confidence, t.leftEye.confidence), new xE(i.rightEye.confidence, t.rightEye.confidence), new KQ(i.minFaceSizeRatio, t.faceSize), new nE(i.maxFaceSizeRatio, t.faceSize), new VQ(i.sharpnessThreshold, t.sharpness), new OQ(i.brightnessLowThreshold, t.brightness), new TQ(i.brightnessHighThreshold, t.brightness), new rE(i.outOfBoundsThreshold, t, e), new Wn(i.devicePitchAngleThreshold, A), new $Q(i.mouth.confidence, t.mouth.confidence), new oE(i.mouth.status.max, t.mouth.status), new eE(i.mouth.status.min, t.mouth.status)]);
  }
}
class cE extends vQ {
  constructor() {
    super(...arguments);
    S(this, "className", "FaceValidationService");
    S(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = CE.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const rr = Symbol("Comlink.proxy"), sE = Symbol("Comlink.endpoint"), BE = Symbol("Comlink.releaseProxy"), Mi = Symbol("Comlink.finalizer"), Eo = Symbol("Comlink.thrown"), Cr = (o) => typeof o == "object" && o !== null || typeof o == "function", QE = {
  canHandle: (o) => Cr(o) && o[rr],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return sr(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), Qr(o);
  }
}, EE = {
  canHandle: (o) => Cr(o) && Eo in o,
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
}, cr = /* @__PURE__ */ new Map([
  ["proxy", QE],
  ["throw", EE]
]);
function dE(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function sr(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!dE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: n, type: g, path: a } = Object.assign({ path: [] }, A.data), x = (A.data.argumentList || []).map(Ze);
    let I;
    try {
      const c = a.slice(0, -1).reduce((Q, C) => Q[C], o), r = a.reduce((Q, C) => Q[C], o);
      switch (g) {
        case "GET":
          I = r;
          break;
        case "SET":
          c[a.slice(-1)[0]] = Ze(A.data.value), I = !0;
          break;
        case "APPLY":
          I = r.apply(c, x);
          break;
        case "CONSTRUCT":
          {
            const Q = new r(...x);
            I = yE(Q);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: Q, port2: C } = new MessageChannel();
            sr(o, C), I = pE(Q, [Q]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      I = { value: c, [Eo]: 0 };
    }
    Promise.resolve(I).catch((c) => ({ value: c, [Eo]: 0 })).then((c) => {
      const [r, Q] = _o(c);
      i.postMessage(Object.assign(Object.assign({}, r), { id: n }), Q), g === "RELEASE" && (i.removeEventListener("message", e), Br(i), Mi in o && typeof o[Mi] == "function" && o[Mi]());
    }).catch((c) => {
      const [r, Q] = _o({
        value: new TypeError("Unserializable return value"),
        [Eo]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, r), { id: n }), Q);
    });
  }), i.start && i.start();
}
function lE(o) {
  return o.constructor.name === "MessagePort";
}
function Br(o) {
  lE(o) && o.close();
}
function Qr(o, i) {
  return vn(o, [], i);
}
function _0(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function Er(o) {
  return ht(o, {
    type: "RELEASE"
  }).then(() => {
    Br(o);
  });
}
const Zo = /* @__PURE__ */ new WeakMap(), Vo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (Zo.get(o) || 0) - 1;
  Zo.set(o, i), i === 0 && Er(o);
});
function uE(o, i) {
  const t = (Zo.get(i) || 0) + 1;
  Zo.set(i, t), Vo && Vo.register(o, i, o);
}
function fE(o) {
  Vo && Vo.unregister(o);
}
function vn(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(n, g) {
      if (_0(e), g === BE)
        return () => {
          fE(A), Er(o), e = !0;
        };
      if (g === "then") {
        if (i.length === 0)
          return { then: () => A };
        const a = ht(o, {
          type: "GET",
          path: i.map((x) => x.toString())
        }).then(Ze);
        return a.then.bind(a);
      }
      return vn(o, [...i, g]);
    },
    set(n, g, a) {
      _0(e);
      const [x, I] = _o(a);
      return ht(o, {
        type: "SET",
        path: [...i, g].map((c) => c.toString()),
        value: x
      }, I).then(Ze);
    },
    apply(n, g, a) {
      _0(e);
      const x = i[i.length - 1];
      if (x === sE)
        return ht(o, {
          type: "ENDPOINT"
        }).then(Ze);
      if (x === "bind")
        return vn(o, i.slice(0, -1));
      const [I, c] = Ma(a);
      return ht(o, {
        type: "APPLY",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, c).then(Ze);
    },
    construct(n, g) {
      _0(e);
      const [a, x] = Ma(g);
      return ht(o, {
        type: "CONSTRUCT",
        path: i.map((I) => I.toString()),
        argumentList: a
      }, x).then(Ze);
    }
  });
  return uE(A, o), A;
}
function hE(o) {
  return Array.prototype.concat.apply([], o);
}
function Ma(o) {
  const i = o.map(_o);
  return [i.map((t) => t[0]), hE(i.map((t) => t[1]))];
}
const dr = /* @__PURE__ */ new WeakMap();
function pE(o, i) {
  return dr.set(o, i), o;
}
function yE(o) {
  return Object.assign(o, { [rr]: !0 });
}
function _o(o) {
  for (const [i, t] of cr)
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
    dr.get(o) || []
  ];
}
function Ze(o) {
  switch (o.type) {
    case "HANDLER":
      return cr.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function ht(o, i, t) {
  return new Promise((e) => {
    const A = DE();
    o.addEventListener("message", function n(g) {
      !g.data || !g.data.id || g.data.id !== A || (o.removeEventListener("message", n), e(g.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function DE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const mE = "SAM v1.44.6 for idcards", wE = "/dot-assets/magnifeye/dot-S9_xGlWZ.js";
function bE() {
  const { handleError: o } = rt(), { acceleration: i } = EB(), { assetsDirectoryPath: t } = NI(), { thresholds: e } = xr(), [A, n] = DA();
  _(() => {
    (async () => {
      const x = Bg.getWorkerPath(wE, t), I = {};
      I.type = "module";
      const c = new Worker(new URL(x, import.meta.url), I), r = Qr(c), Q = await new r(), C = new cE(), E = new JQ(Q, C), d = new LQ().setDetector(Q).setValidationService(C).setImageProcessor(E).setCompatibleSamVersion(mE).setAssetsDirectoryPath(t).build();
      try {
        await d.init(), n(d);
      } catch (u) {
        if (u instanceof Error) {
          o(L.fromError(u));
          return;
        }
      }
    })();
  }, [o, t]), _(() => {
    A && A.setThresholds(e);
  }, [A, e]), _(() => {
    A && A.setAcceleration(i);
  }, [i, A]);
  const g = {};
  return g.controller = A, g;
}
function kE({ onPhotoTakenInternal: o }) {
  const { isCameraReady: i } = jx(), { sunfish: t } = v0(), { controller: e } = bE(), { cameraResolution: A, detectionDetails: n, shouldCameraMirror: g, videoRef: a } = FQ({
    controller: e,
    onPhotoTakenInternal: o
  });
  return /* @__PURE__ */ D(ae, { children: /* @__PURE__ */ D(
    kQ,
    {
      cameraResolution: A,
      detectionDetails: n,
      shouldMirror: g,
      children: /* @__PURE__ */ D(
        Sc,
        {
          ref: a,
          $isImageMirror: g,
          $isVisible: t && i,
          autoPlay: !0,
          id: Pc,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function GE(o, i) {
  const { MagnifEyeLivenessContent: t } = xt.v4, e = await Promise.all(o.map(async (c) => cg(c))), A = await XI(i), n = {};
  n.images = e, n.metadata = A;
  const g = n, a = t.verify(g);
  if (a) throw Error(a);
  const x = t.create(g), I = {};
  return I.magnifeyeLivenessContent = x, Ar(I);
}
async function SE(o, i) {
  const t = o.map((A) => A.image), e = await GE(t, i);
  return $I(e);
}
function NE(o, i) {
  const t = xa(o.faceSize, Ra);
  return xa(i.faceSize, Ra) < t;
}
const FE = (o, i) => {
  const t = Ot(void 0), e = (n) => {
    if (!(!n.detail || o !== me.RUNNING || i !== KA.CLOSEUP)) {
      if (!t.value) {
        t.value = n.detail;
        return;
      }
      NE(t.value.data.detection, n.detail.data.detection) && (t.value = n.detail);
    }
  };
  RI(Be.FACE_DETECTION, e);
  const A = {};
  return A.middleImageBestCandidate = t, A;
}, RE = Yt.div`
  ${(o) => o.$isSecondStep && Ox`
      transition: all 1.5s ease-in-out;
      transform: translate(16%, 5%) scale(2);
      transition-delay: 1.5s;
    `}
`, ME = ({
  assetsDirectoryPath: o,
  onComplete: i,
  sessionToken: t
}) => {
  const { analytics: e } = Vx(), { appState: A, handleAppStateChange: n, handleError: g, magnifEyePhase: a, setIsCameraReady: x, setMagnifEyePhase: I } = jx(), { cameraProperties: c, mergeCameraProperties: r } = IQ(), Q = Ot([]), { middleImageBestCandidate: C } = FE(A, a), E = pB(Dt.ANIMATION_END);
  function d(R) {
    Q.value = [...Q.value, R];
  }
  function u(R) {
    I(R), un(Dt.STATUS_CHANGED, { phase: R });
  }
  function s(R) {
    d(R), u(KA.MIDDLE), n(me.RUNNING);
  }
  function f() {
    u(KA.DISTANT), E.value = !1, Q.value = [], e == null || e.reset();
  }
  hB(() => {
    E.value && u(KA.CLOSEUP);
  }), aQ({
    onBlur: () => {
      x(!1), n(me.LOADING), f();
    },
    onFocus: () => {
      x(!0), n(me.RUNNING);
    }
  }), sB(Dt.CONTROL, () => {
    f();
  });
  async function p(R) {
    if (C.value) {
      const Z = { image: await gI(C.value.image), data: C.value.data };
      d(Z);
    }
    d(R);
    try {
      const N = {
        sessionToken: t,
        web: c.value
      }, Z = await SE(Q.value, N), [mA] = Q.value;
      i(mA, Z), e == null || e.trackLivenessProcess(Q.value);
    } catch (N) {
      N instanceof Error && g(L.fromError(N));
      return;
    }
    n(me.DONE);
  }
  const k = {
    [KA.DISTANT]: s,
    /**
     * we don't care about onPhotoTaken in MIDDLE phase, because faceConfidence = 1
     */
    [KA.MIDDLE]: () => {
    },
    [KA.CLOSEUP]: p
  }, F = NA(
    () => ({
      assetsDirectoryPath: o,
      magnifEyePhase: a,
      onPhotoTaken: k[a]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, a]
  );
  return /* @__PURE__ */ D(EQ, { children: /* @__PURE__ */ D(RE, { $isSecondStep: a !== KA.DISTANT, children: /* @__PURE__ */ D(nB, { cameraOptions: F, children: /* @__PURE__ */ D(QQ, { cameraOptionsThresholds: lQ[a], children: /* @__PURE__ */ D(kE, { onPhotoTakenInternal: r }) }) }) }) });
};
function WE({ initAppState: o, onError: i }) {
  const [t, e] = DA(o), [A, n] = DA(), [g, a] = DA(!1), x = LA(i);
  _(() => {
    x.current = i;
  }, [i]);
  const I = {};
  return I.appState = t, I.setAppState = e, I.error = A, I.setError = n, I.isCameraReady = g, I.setIsCameraReady = a, I.onErrorRef = x, I;
}
function vE(o, i) {
  return i !== KA.DISTANT ? I0.HIDDEN : o !== me.RUNNING ? I0.VISIBLE : I0.VISIBLE_WITH_MASK;
}
function LE({
  onError: o
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: n, setError: g, setIsCameraReady: a } = WE({
    initAppState: me.LOADING,
    onError: o
  }), [x, I] = DA(KA.DISTANT), c = vE(i, x), r = be(
    (C) => {
      un(Dt.STATUS_CHANGED, { state: me.ERROR, error: C }), a(!1), A.current(C), g(C), n(me.ERROR);
    },
    [a, A, g, n]
  ), Q = be(
    (C) => {
      n(C), un(Dt.STATUS_CHANGED, { state: C });
    },
    [n]
  );
  return {
    appState: i,
    magnifEyePhase: x,
    setMagnifEyePhase: I,
    freemiumOverlayState: c,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: Q,
    handleError: r,
    error: t
  };
}
var Qg = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(Qg || {});
class JE {
  constructor() {
    S(this, "appKey", "");
    S(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, n = "https://innovatrics.count.ly/i?", g = {};
    g.app_key = this.appKey, g.device_id = this.deviceId;
    const a = j0(g);
    try {
      await fetch("" + n + a + "&" + i, A);
    } catch (x) {
      console.error("Countly Error", x);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: tI() }, A = { organization: oI(window.location.href) }, n = j0({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(n);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = j0(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const A = {};
    A.key = i, A.count = 1, A.dur = e, A.segmentation = t;
    const n = [A], g = j0({ events: JSON.stringify(n) });
    await this.countlyFetch(g);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(Qg.AUTO_CAPTURE, i, t);
  }
}
const Zt = new JE();
class UE {
  constructor() {
    S(this, "countly", Zt);
  }
  createSegmentation(i) {
    return { appVersion: tI(), ...i };
  }
  init(i) {
    if (ss()) return;
    const t = mB();
    Zt.init(t, i);
  }
  endSession() {
    Zt.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const A = this.createSegmentation(e);
    Zt.sendAutoCaptureEvent(A);
  }
  trackEscalated(i) {
    const t = {};
    t.instructionCode = i;
    const e = this.createSegmentation(t);
    Zt.sendEvent(Qg.ESCALATION_TRIGGER, e);
  }
}
class YE extends UE {
  constructor() {
    super(...arguments);
    S(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class OE extends YE {
  trackLivenessProcess(i) {
    var r, Q, C, E, d, u, s, f, p, k;
    if (!i.length || !this.captureProcessAnalytics.length) return;
    const [t, e, A] = i, [n, g] = this.captureProcessAnalytics, a = bB(n.averageFps + (g == null ? void 0 : g.averageFps)) / (7677 + 1 * -3363 + -4312), x = la(n.captureProcessDurationInMs), I = la(g == null ? void 0 : g["captureProcessDurationInMs"]), c = this.createSegmentation({ faceSizeDistant: Et((r = t.data.detection) == null ? void 0 : r.faceSize), faceSizeCloseup: Et((Q = A == null ? void 0 : A.data.detection) == null ? void 0 : Q.faceSize), faceSizeMiddle: Et((C = e.data.detection) == null ? void 0 : C.faceSize), confidenceDistant: Et((E = t.data.detection) == null ? void 0 : E.confidence), confidenceCloseup: Et((d = A == null ? void 0 : A.data.detection) == null ? void 0 : d.confidence), confidenceMiddle: Et((u = e.data.detection) == null ? void 0 : u.confidence), imageResolution: ((f = (s = t.data) == null ? void 0 : s["imageResolution"]) == null ? void 0 : f.width) + "x" + ((k = (p = t.data) == null ? void 0 : p["imageResolution"]) == null ? void 0 : k.height), averageFps: a, captureTimeCloseup: I > -5177 + -162 * -17 + 2468 ? ">45" : "" + I, captureTimeDistant: x > 687 * 5 + 2255 * 4 + -35 * 355 ? ">30" : "" + x, camera: wB(n == null ? void 0 : n.deviceName, n == null ? void 0 : n.facingMode), instructionSet: n.instructionSet });
    this.countly.sendAutoCaptureEvent(c, x + I), this.reset();
  }
}
const HE = new OE(), KE = ({ props: o }) => o ? /* @__PURE__ */ D(yc, { target: o.styleTarget, children: /* @__PURE__ */ D(
  ws,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: ln.getInstance(),
    children: /* @__PURE__ */ D(Gs, { analytics: HE, appKey: "d5ca54dabfb1a2c72d7090c9c8980252a879da44", children: /* @__PURE__ */ D(
      Wc,
      {
        value: LE({
          onError: o.onError
        }),
        children: /* @__PURE__ */ D(Zx, { children: /* @__PURE__ */ D(qs, { children: /* @__PURE__ */ D(ME, { ...o }) }) })
      }
    ) })
  }
) }) : null;
Mr(KE, "x-dot-magnifeye-liveness", ["props"]);
