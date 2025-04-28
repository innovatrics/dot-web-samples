var Oc = Object.defineProperty;
var br = (i) => {
  throw TypeError(i);
};
var Jc = (i, n, t) => n in i ? Oc(i, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[n] = t;
var F = (i, n, t) => Jc(i, typeof n != "symbol" ? n + "" : n, t), wr = (i, n, t) => n.has(i) || br("Cannot " + t);
var v = (i, n, t) => (wr(i, n, "read from private field"), t ? t.call(i) : n.get(i)), z = (i, n, t) => n.has(i) ? br("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(i) : n.set(i, t), _ = (i, n, t, e) => (wr(i, n, "write to private field"), e ? e.call(i, t) : n.set(i, t), t);
var Ro, Y, cg, Ig, $e, Dr, xg, ji, T0, qi, Zi, Cg, Qo = {}, Bg = [], Uc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, si = Array.isArray;
function Ne(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Qg(i) {
  var n = i.parentNode;
  n && n.removeChild(i);
}
function YA(i, n, t) {
  var e, A, o, r = {};
  for (o in n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : r[o] = n[o];
  if (arguments.length > 1 * -5867 + -6404 + 1 * 12273 && (r.children = arguments.length > 6326 + -2 * 1861 + 153 * -17 ? Ro.call(arguments, -9810 + 4906 * 2) : t), typeof i == "function" && i.defaultProps != null)
    for (o in i.defaultProps) void (25 * 305 + -171 * 28 + -2837 * 1) === r[o] && (r[o] = i.defaultProps[o]);
  return so(i, r, e, A, null);
}
function so(i, n, t, e, A) {
  var o = {};
  o.type = i, o.props = n, o.key = t, o.ref = e, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (69 * -34 + -474 + -3 * -940), o.__c = null, o.constructor = void (2908 + -167 * 15 + -31 * 13), o.__v = A ?? ++cg, o.__i = -(-1 * 929 + -1277 + 2207), o.__u = 0;
  var r = o;
  return A == null && Y.vnode != null && Y.vnode(r), r;
}
function Yc() {
  var i = {};
  return i.current = null, i;
}
function ce(i) {
  return i.children;
}
function oe(i, n) {
  this.props = i, this.context = n;
}
function ct(i, n) {
  if (n == null) return i.__ ? ct(i.__, i.__i + (-328 + 19 * 211 + -920 * 4)) : null;
  for (var t; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? ct(i) : null;
}
function dg(i) {
  var n, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, n = 1122 + 611 * 1 + -1733 * 1; n < i.__k.length; n++) if ((t = i.__k[n]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return dg(i);
  }
}
function Vi(i) {
  (!i.__d && (i.__d = !(225 * 1 + 7904 + 11 * -739)) && $e.push(i) && !pn.__r++ || Dr !== Y.debounceRendering) && ((Dr = Y.debounceRendering) || xg)(pn);
}
function pn() {
  var i, n, t, e, A, o, r, a;
  for ($e.sort(ji); i = $e.shift(); ) i.__d && (n = $e.length, e = void (-1 * 1731 + 941 * -3 + 4554), o = (A = (t = i).__v).__e, r = [], a = [], t.__P && ((e = Ne({}, A)).__v = A.__v + 1, Y.vnode && Y.vnode(e), H0(t.__P, e, A, t.__n, t.__P.namespaceURI, 32 & A.__u ? [o] : null, r, o ?? ct(A), !!(3398 * 2 + -3 * -128 + -7148 & A.__u), a), e.__v = A.__v, e.__.__k[e.__i] = e, ug(r, e, a), e.__e != o && dg(e)), $e.length > n && $e.sort(ji));
  pn.__r = 3 * -147 + 17 * 358 + -5645;
}
function Eg(i, n, t, e, A, o, r, a, g, s, I) {
  var c, Q, x, d, E, f = e && e.__k || Bg, C = n.length;
  for (t.__d = g, Pc(t, n, f), g = t.__d, c = 44 * 14 + 26 * -73 + 1282; c < C; c++) (x = t.__k[c]) != null && typeof x != "boolean" && typeof x != "function" && (Q = -(7682 + 1 * -2211 + 2 * -2735) === x.__i ? Qo : f[x.__i] || Qo, x.__i = c, H0(i, x, Q, A, o, r, a, g, s, I), d = x.__e, x.ref && Q.ref != x.ref && (Q.ref && K0(Q.ref, null, x), I.push(x.ref, x.__c || d, x)), E == null && d != null && (E = d), 1 * -23873 + 129836 + 1 * -40427 & x.__u || Q.__k === x.__k ? (g && typeof x.type == "string" && !i.contains(g) && (g = ct(Q)), g = lg(x, g, i)) : typeof x.type == "function" && x.__d !== void 0 ? g = x.__d : d && (g = d.nextSibling), x.__d = void (7213 + 3 * 487 + 4337 * -2), x.__u &= -(-147328 + -187 * -418 + 265771));
  t.__d = g, t.__e = E;
}
function Pc(i, n, t) {
  var e, A, o, r, a, g = n.length, s = t.length, I = s, c = 3639 * -1 + 2007 + 204 * 8;
  for (i.__k = [], e = -3791 + -1 * -353 + -2 * -1719; e < g; e++) r = e + c, (A = i.__k[e] = (A = n[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? so(null, A, null, null, null) : si(A) ? so(ce, { children: A }, null, null, null) : void (-8688 + 1 * 8654 + 34) === A.constructor && A.__b > -3734 + -1 * 8513 + 12247 ? so(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = i, A.__b = i.__b + (3226 + 75 * -43), a = Tc(A, t, r, I), A.__i = a, o = null, -(-8439 + -1476 * -1 + -1741 * -4) !== a && (I--, (o = t[a]) && (o.__u |= 131072)), o == null || o.__v === null ? (-(-4604 * 1 + -1 * 2755 + 7360) == a && c--, typeof A.type != "function" && (A.__u |= 90746 + -10 * 2521)) : a !== r && (a == r - (79 * -89 + -2096 + -56 * -163) ? c = a - r : a == r + (274 * 26 + 6407 + -55 * 246) ? c++ : a > r ? I > g - r ? c += a - r : c-- : a < r && c++, a !== e + c && (A.__u |= -163967 + -2031 * -113))) : (o = t[r]) && o.key == null && o.__e && -4791 * -1 + 3 * -2304 + 2121 == (-120536 + -22769 * 1 + 274377 & o.__u) && (o.__e == i.__d && (i.__d = ct(o)), _i(o, o, !(1880 + -2 * 4891 + -1129 * -7)), t[r] = null, I--);
  if (I)
    for (e = 10 * -919 + 7012 + -363 * -6; e < s; e++) (o = t[e]) != null && 13 * -226 + 595 + 2343 == (59952 * 3 + -101512 * -2 + 4128 * -61 & o.__u) && (o.__e == i.__d && (i.__d = ct(o)), _i(o, o));
}
function lg(i, n, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 4172 + 2122 * -1 + -2050; e && A < e.length; A++) e[A] && (e[A].__ = i, n = lg(e[A], n, t));
    return n;
  }
  i.__e != n && (t.insertBefore(i.__e, n || null), n = i.__e);
  do
    n = n && n.nextSibling;
  while (n != null && -9284 + 132 * -47 + 15496 === n.nodeType);
  return n;
}
function Fe(i, n) {
  return n = n || [], i == null || typeof i == "boolean" || (si(i) ? i.some(function(t) {
    Fe(t, n);
  }) : n.push(i)), n;
}
function Tc(i, n, t, e) {
  var A = i.key, o = i.type, r = t - (-36 * 271 + -644 + -3467 * -3), a = t + (1 * -8951 + -41 * -123 + -3909 * -1), g = n[t];
  if (g === null || g && A == g.key && o === g.type && 7433 * -1 + -4999 + 12432 == (70979 + 41 * -4222 + 233195 & g.__u)) return t;
  if (e > (g != null && -2777 + 2777 * 1 == (131072 & g.__u) ? -2 * 108 + -467 * 4 + 2085 : 1523 + -1 * 1523)) for (; r >= -2578 + 4 * -664 + -1 * -5234 || a < n.length; ) {
    if (r >= -9197 + 785 * -2 + 10767) {
      if ((g = n[r]) && -644 * 11 + 4763 + 2321 == (131072 & g.__u) && A == g.key && o === g.type) return r;
      r--;
    }
    if (a < n.length) {
      if ((g = n[a]) && 2 * -902 + -2889 + 4693 == (61829 * -3 + 1 * -90769 + 407328 & g.__u) && A == g.key && o === g.type) return a;
      a++;
    }
  }
  return -(-3452 + -103 * 23 + 5822);
}
function kr(i, n, t) {
  n[-2213 + 49 * -10 + -51 * -53] === "-" ? i.setProperty(n, t ?? "") : i[n] = t == null ? "" : typeof t != "number" || Uc.test(n) ? t : t + "px";
}
function To(i, n, t, e, A) {
  var o;
  A: if (n === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (n in e) t && n in t || kr(i.style, n, "");
      if (t)
        for (n in t) e && t[n] === e[n] || kr(i.style, n, t[n]);
    }
  else if (n[1415 * 2 + -3028 * 2 + 3226] === "o" && n[-4234 + 164 * 14 + -1 * -1939] === "n") o = n !== (n = n.replace(/(PointerCapture)$|Capture$/i, "$1")), n = n.toLowerCase() in i || n === "onFocusOut" || n === "onFocusIn" ? n.toLowerCase().slice(2) : n.slice(2505 + 8 * -714 + 1 * 3209), i.l || (i.l = {}), i.l[n + o] = t, t ? e ? t.u = e.u : (t.u = T0, i.addEventListener(n, o ? Zi : qi, o)) : i.removeEventListener(n, o ? Zi : qi, o);
  else {
    if (A == "http://www.w3.org/2000/svg") n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (n != "width" && n != "height" && n != "href" && n != "list" && n != "form" && n != "tabIndex" && n != "download" && n != "rowSpan" && n != "colSpan" && n != "role" && n != "popover" && n in i) try {
      i[n] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-65 * -139 + 672 + 4853 * -2) === t && n[12891 + -12887 * 1] !== "-" ? i.removeAttribute(n) : i.setAttribute(n, n == "popover" && -7 * -822 + 3010 + -8763 == t ? "" : t));
  }
}
function Gr(i) {
  return function(n) {
    if (this.l) {
      var t = this.l[n.type + i];
      if (n.t == null) n.t = T0++;
      else if (n.t < t.u) return;
      return t(Y.event ? Y.event(n) : n);
    }
  };
}
function H0(i, n, t, e, A, o, r, a, g, s) {
  var I, c, Q, x, d, E, f, C, h, b, k, R, J, M, tA, HA, cA = n.type;
  if (n.constructor !== void 0) return null;
  1337 * -4 + -9232 + 14708 * 1 & t.__u && (g = !!(-2636 * 2 + -7704 + 12 * 1084 & t.__u), o = [a = n.__e = t.__e]), (I = Y.__b) && I(n);
  A: if (typeof cA == "function") try {
    if (C = n.props, h = "prototype" in cA && cA.prototype.render, b = (I = cA.contextType) && e[I.__c], k = I ? b ? b.props.value : I.__ : e, t.__c ? f = (c = n.__c = t.__c).__ = c.__E : (h ? n.__c = c = new cA(C, k) : (n.__c = c = new oe(C, k), c.constructor = cA, c.render = Kc), b && b.sub(c), c.props = C, c.state || (c.state = {}), c.context = k, c.__n = e, Q = c.__d = !(-4798 * 2 + -5281 * 1 + -87 * -171), c.__h = [], c._sb = []), h && c.__s == null && (c.__s = c.state), h && cA.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Ne({}, c.__s)), Ne(c.__s, cA.getDerivedStateFromProps(C, c.__s))), x = c.props, d = c.state, c.__v = n, Q) h && cA.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), h && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (h && cA.getDerivedStateFromProps == null && C !== x && c.componentWillReceiveProps != null && c.componentWillReceiveProps(C, k), !c.__e && (c.shouldComponentUpdate != null && !(17634 + -77 * 229) === c.shouldComponentUpdate(C, c.__s, k) || n.__v === t.__v)) {
        for (n.__v !== t.__v && (c.props = C, c.state = c.__s, c.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(_A) {
          _A && (_A.__ = n);
        }), R = 3529 + 57 * -52 + -565; R < c._sb.length; R++) c.__h.push(c._sb[R]);
        c._sb = [], c.__h.length && r.push(c);
        break A;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(C, c.__s, k), h && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(x, d, E);
      });
    }
    if (c.context = k, c.props = C, c.__P = i, c.__e = !(263 * -7 + 6938 + -5096), J = Y.__r, M = 0, h) {
      for (c.state = c.__s, c.__d = !(2107 + -3 * 2557 + 35 * 159), J && J(n), I = c.render(c.props, c.state, c.context), tA = -2 * 3291 + 5797 + 785; tA < c._sb.length; tA++) c.__h.push(c._sb[tA]);
      c._sb = [];
    } else do
      c.__d = !(-3 * -3041 + 865 * 9 + -16907), J && J(n), I = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++M < 8030 + -25 * -18 + -445 * 19);
    c.state = c.__s, c.getChildContext != null && (e = Ne(Ne({}, e), c.getChildContext())), h && !Q && c.getSnapshotBeforeUpdate != null && (E = c.getSnapshotBeforeUpdate(x, d)), Eg(i, si(HA = I != null && I.type === ce && I.key == null ? I.props.children : I) ? HA : [HA], n, t, e, A, o, r, a, g, s), c.base = n.__e, n.__u &= -(-194 + 1 * 355), c.__h.length && r.push(c), f && (c.__E = c.__ = null);
  } catch (_A) {
    n.__v = null, g || o != null ? (n.__e = a, n.__u |= g ? -5741 + 3 * 1149 + 2 * 1227 : -953 + -1 * -985, o[o.indexOf(a)] = null) : (n.__e = t.__e, n.__k = t.__k), Y.__e(_A, n, t);
  }
  else o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Hc(t.__e, n, t, e, A, o, r, g, s);
  (I = Y.diffed) && I(n);
}
function ug(i, n, t) {
  n.__d = void (237 * -1 + 1126 + -889);
  for (var e = -4251 + 3253 * 2 + -2255; e < t.length; e++) K0(t[e], t[++e], t[++e]);
  Y.__c && Y.__c(n, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(o) {
        o.call(A);
      });
    } catch (o) {
      Y.__e(o, A.__v);
    }
  });
}
function Hc(i, n, t, e, A, o, r, a, g) {
  var s, I, c, Q, x, d, E, f = t.props, C = n.props, h = n.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), o != null) {
    for (s = -2339 + -246 * -29 + -4795; s < o.length; s++) if ((x = o[s]) && "setAttribute" in x == !!h && (h ? x.localName === h : x.nodeType === 3)) {
      i = x, o[s] = null;
      break;
    }
  }
  if (i == null) {
    if (h === null) return document.createTextNode(C);
    i = document.createElementNS(A, h, C.is && C), o = null, a = !(4 * -2280 + 90 + -11 * -821);
  }
  if (h === null) f === C || a && i.data === C || (i.data = C);
  else {
    if (o = o && Ro.call(i.childNodes), f = t.props || Qo, !a && o != null)
      for (f = {}, s = -13 * -457 + -5998 + 19 * 3; s < i.attributes.length; s++) f[(x = i.attributes[s]).name] = x.value;
    for (s in f) if (x = f[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") c = x;
      else if (s !== "key" && !(s in C)) {
        if (s == "value" && "defaultValue" in C || s == "checked" && "defaultChecked" in C) continue;
        To(i, s, null, x, A);
      }
    }
    for (s in C) x = C[s], s == "children" ? Q = x : s == "dangerouslySetInnerHTML" ? I = x : s == "value" ? d = x : s == "checked" ? E = x : s === "key" || a && typeof x != "function" || f[s] === x || To(i, s, x, f[s], A);
    if (I) a || c && (I.__html === c.__html || I.__html === i.innerHTML) || (i.innerHTML = I.__html), n.__k = [];
    else if (c && (i.innerHTML = ""), Eg(i, si(Q) ? Q : [Q], n, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, o, r, o ? o[-2546 * -3 + 6839 + -14477] : t.__k && ct(t, -958 + 2 * 479), a, g), o != null)
      for (s = o.length; s--; ) o[s] != null && Qg(o[s]);
    a || (s = "value", void (-9 * -897 + -67 + -8006) !== d && (d !== i[s] || h === "progress" && !d || h === "option" && d !== f[s]) && To(i, s, d, f[s], A), s = "checked", void (1436 + -2837 * 2 + -326 * -13) !== E && E !== i[s] && To(i, s, E, f[s], A));
  }
  return i;
}
function K0(i, n, t) {
  try {
    typeof i == "function" ? i(n) : i.current = n;
  } catch (e) {
    Y.__e(e, t);
  }
}
function _i(i, n, t) {
  var e, A;
  if (Y.unmount && Y.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || K0(e, null, n)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (o) {
      Y.__e(o, n);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = 0; A < e.length; A++) e[A] && _i(e[A], n, t || typeof i.type != "function");
  t || i.__e == null || Qg(i.__e), i.__c = i.__ = i.__e = i.__d = void (5586 + -3 * -1303 + 9 * -1055);
}
function Kc(i, n, t) {
  return this.constructor(i, t);
}
function He(i, n, t) {
  var e, A, o, r;
  Y.__ && Y.__(i, n), A = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], H0(n, i = (!e && t || n).__k = YA(ce, null, [i]), A || Qo, Qo, n.namespaceURI, !e && t ? [t] : A ? null : n.firstChild ? Ro.call(n.childNodes) : null, o, !e && t ? t : A ? A.__e : n.firstChild, e, r), ug(o, i, r);
}
function j0(i, n) {
  He(i, n, j0);
}
function q0(i, n, t) {
  var e, A, o, r, a = Ne({}, i.props);
  for (o in i.type && i.type.defaultProps && (r = i.type.defaultProps), n) o == "key" ? e = n[o] : o == "ref" ? A = n[o] : a[o] = void (5 * 103 + 3138 + 281 * -13) === n[o] && void (989 * 9 + 5409 + -30 * 477) !== r ? r[o] : n[o];
  return arguments.length > 8966 + 11 * 65 + -9679 * 1 && (a.children = arguments.length > -5484 + 1163 * 4 + 835 * 1 ? Ro.call(arguments, 1519 * -4 + 5301 + 777) : t), so(i.type, a, e || i.key, A || i.ref, null);
}
function Qt(i, n) {
  var t = { __c: n = "__cC" + Cg++, __: i, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, o;
    return this.getChildContext || (A = [], (o = {})[n] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && A.some(function(a) {
        a.__e = !0, Vi(a);
      });
    }, this.sub = function(r) {
      A.push(r);
      var a = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        A && A.splice(A.indexOf(r), 1), a && a.call(r);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Ro = Bg.slice, Y = { __e: function(i, n, t, e) {
  for (var A, o, r; n = n.__; ) if ((A = n.__c) && !A.__) try {
    if ((o = A.constructor) && o.getDerivedStateFromError != null && (A.setState(o.getDerivedStateFromError(i)), r = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), r = A.__d), r) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, cg = -2 * 2605 + 2 * 1183 + -4 * -711, Ig = function(i) {
  return i != null && i.constructor == null;
}, oe.prototype.setState = function(i, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof i == "function" && (i = i(Ne({}, t), this.props)), i && Ne(t, i), i != null && this.__v && (n && this._sb.push(n), Vi(this));
}, oe.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(-8459 + 1497 * 3 + 3968), i && this.__h.push(i), Vi(this));
}, oe.prototype.render = ce, $e = [], xg = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ji = function(i, n) {
  return i.__v.__b - n.__v.__b;
}, pn.__r = -3793 + 1 * 3793, T0 = 2285 + 3 * 1668 + -7289, qi = Gr(!(1 * 5959 + -3803 * -1 + 227 * -43)), Zi = Gr(!(6867 + -5506 * -1 + -12373)), Cg = -8 * 742 + 7849 * -1 + 13785;
function Z0() {
  return (Z0 = Object.assign ? Object.assign.bind() : function(i) {
    for (var n = -1 * 8383 + 4957 * -2 + 18298; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var jc = ["context", "children"];
function qc(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var n = i.children, t = function(e, A) {
    if (e == null) return {};
    var o, r, a = {}, g = Object.keys(e);
    for (r = 0; r < g.length; r++) A.indexOf(o = g[r]) >= -6 * -12 + 9782 + -26 * 379 || (a[o] = e[o]);
    return a;
  }(i, jc);
  return q0(n, t);
}
function Zc() {
  var i = {};
  i.detail = {}, i.bubbles = !(-2691 + -8609 * -1 + -1 * 5918), i.cancelable = !(-1753 * 3 + -41 * -179 + 2 * -1040);
  var n = new CustomEvent("_preact", i);
  this.dispatchEvent(n), this._vdom = YA(qc, Z0({}, this._props, { context: n.detail.context }), function t(e, A) {
    if (1 * -8617 + 495 + 8125 === e.nodeType) return e.data;
    if (-1550 + 1579 * -6 + -735 * -15 !== e.nodeType) return null;
    var o = [], r = {}, a = -5 * -571 + 27 * 87 + -2 * 2602, g = e.attributes, s = e.childNodes;
    for (a = g.length; a--; ) g[a].name !== "slot" && (r[g[a].name] = g[a].value, r[fg(g[a].name)] = g[a].value);
    for (a = s.length; a--; ) {
      var I = t(s[a], null), c = s[a].slot;
      c ? r[c] = YA(Sr, { name: c }, I) : o[a] = I;
    }
    var Q = A ? YA(Sr, null, o) : o;
    return YA(A || e.nodeName.toLowerCase(), r, Q);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? j0 : He)(this._vdom, this._root);
}
function fg(i) {
  return i.replace(/-(\w)/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Vc(i, n, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void (1116 * -1 + -6620 + 7736), e[fg(i)] = t, this._vdom = q0(this._vdom, e), He(this._vdom, this._root);
  }
}
function _c() {
  He(this._vdom = null, this._root);
}
function Sr(i, n) {
  var t = this;
  return YA("slot", Z0({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = n;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function zc(i, n, t, e) {
  function A() {
    var o = Reflect.construct(HTMLElement, [], A);
    return o._vdomComponent = i, o._root = o, o;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Zc, A.prototype.attributeChangedCallback = Vc, A.prototype.disconnectedCallback = _c, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(A.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(r) {
      this._vdom ? this.attributeChangedCallback(o, null, r) : (this._props || (this._props = {}), this._props[o] = r, this.connectedCallback());
      var a = typeof r;
      r != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(o, r);
    } });
  }), customElements.define(n, A);
}
var Xc = 29 * 26 + -3751 * -1 + -4505;
function w(i, n, t, e, A, o) {
  n || (n = {});
  var r, a, g = n;
  if ("ref" in g)
    for (a in g = {}, n) a == "ref" ? r = n[a] : g[a] = n[a];
  var s = {};
  s.type = i, s.props = g, s.key = t, s.ref = r, s.__k = null, s.__ = null, s.__b = 0, s.__e = null, s.__d = void (-143 * -61 + -522 + 59 * -139), s.__c = null, s.constructor = void (4958 + -14 * 471 + 1636), s.__v = --Xc, s.__i = -(-1 * -3853 + -2 * 2242 + 632), s.__u = 0, s.__source = A, s.__self = o;
  var I = s;
  if (typeof i == "function" && (r = i.defaultProps))
    for (a in r) void (8014 + -423 * 17 + -823) === g[a] && (g[a] = r[a]);
  return Y.vnode && Y.vnode(I), I;
}
var ZA = function() {
  return ZA = Object.assign || function(n) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, ZA.apply(this, arguments);
};
function Rt(i, n, t) {
  if (t || arguments.length === 2) for (var e = 0, A = n.length, o; e < A; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return i.concat(o || Array.prototype.slice.call(n));
}
function $c(i) {
  var n = Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = i(t)), n[t];
  };
}
var AI = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eI = $c(function(i) {
  return AI.test(i) || i.charCodeAt(-297 + 13 * -395 + 5432) === -1 * -3829 + 7608 * -1 + -3890 * -1 && i.charCodeAt(4100 + -2 * 1759 + 1 * -581) === -394 * 2 + -1 * 692 + -10 * -159 && i.charCodeAt(2) < 7838 * 1 + -5249 * -1 + -12996;
}), Ke, eA, ki, Nr, Mt = -30 * -89 + -1855 * 4 + 2375 * 2, hg = [], oA = Y, Fr = oA.__b, vr = oA.__r, Rr = oA.diffed, Mr = oA.__c, Wr = oA.unmount, Lr = oA.__;
function Pt(i, n) {
  oA.__h && oA.__h(eA, i, Mt || n), Mt = -9 * 857 + -3996 + 11709;
  var t = {};
  t.__ = [], t.__h = [];
  var e = eA.__H || (eA.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function PA(i) {
  return Mt = 298 * -5 + 5 * 563 + -2 * 662, V0(yg, i);
}
function V0(i, n, t) {
  var e = Pt(Ke++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(n) : yg(void (-4960 + -3 * -66 + 4762), n), function(a) {
    var g = e.__N ? e.__N[0] : e.__[0], s = e.t(g, a);
    g !== s && (e.__N = [s, e.__[1]], e.__c.setState({}));
  }], e.__c = eA, !eA.u)) {
    var A = function(a, g, s) {
      if (!e.__c.__H) return !0;
      var I = e.__c.__H.__.filter(function(Q) {
        return !!Q.__c;
      });
      if (I.every(function(Q) {
        return !Q.__N;
      })) return !o || o.call(this, a, g, s);
      var c = !(1601 * 6 + -1662 + -7943);
      return I.forEach(function(Q) {
        if (Q.__N) {
          var x = Q.__[0];
          Q.__ = Q.__N, Q.__N = void 0, x !== Q.__[0] && (c = !0);
        }
      }), !(!c && e.__c.props === a) && (!o || o.call(this, a, g, s));
    };
    eA.u = !(705 * -11 + 175 * -16 + 2111 * 5);
    var o = eA.shouldComponentUpdate, r = eA.componentWillUpdate;
    eA.componentWillUpdate = function(a, g, s) {
      if (this.__e) {
        var I = o;
        o = void (8439 + 4626 * 1 + -871 * 15), A(a, g, s), o = I;
      }
      r && r.call(this, a, g, s);
    }, eA.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function aA(i, n) {
  var t = Pt(Ke++, 3);
  !oA.__s && _0(t.__H, n) && (t.__ = i, t.i = n, eA.__H.__h.push(t));
}
function Tt(i, n) {
  var t = Pt(Ke++, 4);
  !oA.__s && _0(t.__H, n) && (t.__ = i, t.i = n, eA.__h.push(t));
}
function re(i) {
  return Mt = 5389 + -4 * -1361 + -10828, TA(function() {
    var n = {};
    return n.current = i, n;
  }, []);
}
function pg(i, n, t) {
  Mt = 6, Tt(function() {
    return typeof i == "function" ? (i(n()), function() {
      return i(null);
    }) : i ? (i.current = n(), function() {
      return i.current = null;
    }) : void (15538 + -2 * 7769);
  }, t == null ? t : t.concat(i));
}
function TA(i, n) {
  var t = Pt(Ke++, 7);
  return _0(t.__H, n) && (t.__ = i(), t.__H = n, t.__h = i), t.__;
}
function ve(i, n) {
  return Mt = -2604 + 1 * 9083 + -6471, TA(function() {
    return i;
  }, n);
}
function Re(i) {
  var n = eA.context[i.__c], t = Pt(Ke++, 31 * 207 + 3282 + -9690);
  return t.c = i, n ? (t.__ == null && (t.__ = !(2437 * 1 + -648 + 1789 * -1), n.sub(eA)), n.props.value) : i.__;
}
function mn(i, n) {
  oA.useDebugValue && oA.useDebugValue(n ? n(i) : i);
}
function mg() {
  var i = Pt(Ke++, 11);
  if (!i.__) {
    for (var n = eA.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    var t = n.__m || (n.__m = [3963 + -2 * -775 + 5513 * -1, 483 * -9 + -607 + 1 * 4954]);
    i.__ = "P" + t[2091 + 1 * -2091] + "-" + t[-683 * -4 + 1 * -3161 + -10 * -43]++;
  }
  return i.__;
}
function tI() {
  for (var i; i = hg.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(en), i.__H.__h.forEach(zi), i.__H.__h = [];
  } catch (n) {
    i.__H.__h = [], oA.__e(n, i.__v);
  }
}
oA.__b = function(i) {
  eA = null, Fr && Fr(i);
}, oA.__ = function(i, n) {
  i && n.__k && n.__k.__m && (i.__m = n.__k.__m), Lr && Lr(i, n);
}, oA.__r = function(i) {
  vr && vr(i), Ke = 107 * -88 + 1427 + -1 * -7989;
  var n = (eA = i.__c).__H;
  n && (ki === eA ? (n.__h = [], eA.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-357 + 179 * -47 + 8770);
  })) : (n.__h.forEach(en), n.__h.forEach(zi), n.__h = [], Ke = 0)), ki = eA;
}, oA.diffed = function(i) {
  Rr && Rr(i);
  var n = i.__c;
  n && n.__H && (n.__H.__h.length && (3469 * 2 + -1 * -7777 + 7 * -2102 !== hg.push(n) && Nr === oA.requestAnimationFrame || ((Nr = oA.requestAnimationFrame) || oI)(tI)), n.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (15110 + -7555 * 2);
  })), ki = eA = null;
}, oA.__c = function(i, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(en), t.__h = t.__h.filter(function(e) {
        return !e.__ || zi(e);
      });
    } catch (e) {
      n.some(function(A) {
        A.__h && (A.__h = []);
      }), n = [], oA.__e(e, t.__v);
    }
  }), Mr && Mr(i, n);
}, oA.unmount = function(i) {
  Wr && Wr(i);
  var n, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      en(e);
    } catch (A) {
      n = A;
    }
  }), t.__H = void (6565 + 13 * -505), n && oA.__e(n, t.__v));
};
var Or = typeof requestAnimationFrame == "function";
function oI(i) {
  var n, t = function() {
    clearTimeout(e), Or && cancelAnimationFrame(n), setTimeout(i);
  }, e = setTimeout(t, 100);
  Or && (n = requestAnimationFrame(t));
}
function en(i) {
  var n = eA, t = i.__c;
  typeof t == "function" && (i.__c = void (-7436 + 49 * -1 + 7485), t()), eA = n;
}
function zi(i) {
  var n = eA;
  i.__c = i.__(), eA = n;
}
function _0(i, n) {
  return !i || i.length !== n.length || n.some(function(t, e) {
    return t !== i[e];
  });
}
function yg(i, n) {
  return typeof n == "function" ? n(i) : n;
}
function bg(i, n) {
  for (var t in n) i[t] = n[t];
  return i;
}
function Xi(i, n) {
  for (var t in i) if (t !== "__source" && !(t in n)) return !0;
  for (var e in n) if (e !== "__source" && i[e] !== n[e]) return !(-8441 + -1041 * 6 + 14687);
  return !(7769 + 476 * -10 + 1504 * -2);
}
function $i(i, n) {
  this.props = i, this.context = n;
}
function nI(i, n) {
  function t(A) {
    var o = this.props.ref, r = o == A.ref;
    return !r && o && (o.call ? o(null) : o.current = null), n ? !n(this.props, A) || !r : Xi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, YA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(3 * 2886 + -1409 * -3 + -12885), e.__f = !(6626 + 3313 * -2), e;
}
($i.prototype = new oe()).isPureReactComponent = !(-6816 + -71 * -96), $i.prototype.shouldComponentUpdate = function(i, n) {
  return Xi(this.props, i) || Xi(this.state, n);
};
var Jr = Y.__b;
Y.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), Jr && Jr(i);
};
var iI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -8405 * -1 + -683 * 9 + 1653;
function wg(i) {
  function n(t) {
    var e = bg({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return n.$$typeof = iI, n.render = n, n.prototype.isReactComponent = n.__f = !(8572 + -8572 * 1), n.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", n;
}
var Ur = function(i, n) {
  return i == null ? null : Fe(Fe(i).map(n));
}, rI = { map: Ur, forEach: Ur, count: function(i) {
  return i ? Fe(i).length : 647 + 647 * -1;
}, only: function(i) {
  var n = Fe(i);
  if (1 * 5169 + 4743 * 2 + -14654 !== n.length) throw "Children.only";
  return n[-1 * -3947 + 16 * 16 + -4203];
}, toArray: Fe }, aI = Y.__e;
Y.__e = function(i, n, t, e) {
  if (i.then) {
    for (var A, o = n; o = o.__; ) if ((A = o.__c) && A.__c) return n.__e == null && (n.__e = t.__e, n.__k = t.__k), A.__c(i, n);
  }
  aI(i, n, t, e);
};
var Yr = Y.unmount;
function Dg(i, n, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = bg({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = n), i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return Dg(e, n, t);
  })), i;
}
function kg(i, n, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return kg(e, n, t);
  }), i.__c && i.__c.__P === n && (i.__e && t.appendChild(i.__e), i.__c.__e = !(-7446 + 34 * 219), i.__c.__P = t)), i;
}
function tn() {
  this.__u = 3483 + 3 * -2617 + 4368, this.t = null, this.__b = null;
}
function Gg(i) {
  var n = i.__.__c;
  return n && n.__a && n.__a(i);
}
function gI(i) {
  var n, t, e;
  function A(o) {
    if (n || (n = i()).then(function(r) {
      t = r.default || r;
    }, function(r) {
      e = r;
    }), e) throw e;
    if (!t) throw n;
    return YA(t, o);
  }
  return A.displayName = "Lazy", A.__f = !(11858 + 2 * -5929), A;
}
function eo() {
  this.u = null, this.o = null;
}
Y.unmount = function(i) {
  var n = i.__c;
  n && n.__R && n.__R(), n && 32 & i.__u && (i.type = null), Yr && Yr(i);
}, (tn.prototype = new oe()).__c = function(i, n) {
  var t = n.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = Gg(e.__v), o = !(53 * -20 + -2 * 6 + 1073), r = function() {
    o || (o = !(-4193 + 467 * -1 + 4660), t.__R = null, A ? A(a) : a());
  };
  t.__R = r;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var g = e.state.__a;
        e.__v.__k[0] = kg(g, g.__c.__P, g.__c.__O);
      }
      var s;
      for (e.setState({ __a: e.__b = null }); s = e.t.pop(); ) s.forceUpdate();
    }
  };
  e.__u++ || 8421 + 1272 * 2 + 29 * -377 & n.__u || e.setState({ __a: e.__b = e.__v.__k[1496 + 88 * -17] }), i.then(r, r);
}, tn.prototype.componentWillUnmount = function() {
  this.t = [];
}, tn.prototype.render = function(i, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[14 * -431 + 1 * 6375 + 31 * -11].__c;
      this.__v.__k[9504 + 44 * -216] = Dg(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = n.__a && YA(ce, null, i.fallback);
  return A && (A.__u &= -(-1 * -2796 + 6679 + 2 * -4721)), [YA(ce, null, n.__a ? null : i.children), A];
};
var Pr = function(i, n, t) {
  if (++t[-2 * -1471 + -41 * -73 + -5934] === t[3974 + 3 * 865 + -1 * 6569] && i.o.delete(n), i.props.revealOrder && (i.props.revealOrder[-5183 + -2 * 3418 + 12019] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > -2881 * -3 + 3241 + -11881; ) t.pop()();
    if (t[-12661 + -12662 * -1] < t[1626 * 3 + -5 * -1291 + 1619 * -7]) break;
    i.u = t = t[3323 * -3 + 2098 + 7873 * 1];
  }
};
function sI(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function cI(i) {
  var n = this, t = i.i;
  n.componentWillUnmount = function() {
    He(null, n.l), n.l = null, n.i = null;
  }, n.i && n.i !== t && n.componentWillUnmount(), n.l || (n.i = t, n.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-887 * -6 + -7 * 659 + 1 * -709);
  }, appendChild: function(e) {
    this.childNodes.push(e), n.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), n.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 2343 + -3 * -1759 + 19 * -401, -4412 + 2571 * -3 + 12126), n.i.removeChild(e);
  } }), He(YA(sI, { context: n.context }, i.__v), n.l);
}
function II(i, n) {
  var t = {};
  t.__v = i, t.i = n;
  var e = YA(cI, t);
  return e.containerInfo = n, e;
}
(eo.prototype = new oe()).__a = function(i) {
  var n = this, t = Gg(n.__v), e = n.o.get(i);
  return e[-9601 + -6 * -161 + -1 * -8635]++, function(A) {
    var o = function() {
      n.props.revealOrder ? (e.push(A), Pr(n, i, e)) : A();
    };
    t ? t(o) : o();
  };
}, eo.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var n = Fe(i.children);
  i.revealOrder && i.revealOrder[-2259 * -3 + 8291 + 4 * -3767] === "b" && n.reverse();
  for (var t = n.length; t--; ) this.o.set(n[t], this.u = [1, 14 * 605 + 4670 * -1 + 200 * -19, this.u]);
  return i.children;
}, eo.prototype.componentDidUpdate = eo.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(n, t) {
    Pr(i, t, n);
  });
};
var Sg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 8 * -3647 + 20 * -2039 + 130059, xI = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, CI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, BI = /[A-Z0-9]/g, QI = typeof document < "u", dI = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function EI(i, n, t) {
  return n.__k == null && (n.textContent = ""), He(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
function lI(i, n, t) {
  return j0(i, n), typeof t == "function" && t(), i ? i.__c : null;
}
oe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(oe.prototype, i, { configurable: !0, get: function() {
    return this["UNSAFE_" + i];
  }, set: function(n) {
    var t = {};
    t.configurable = !(-6397 + -5483 * -1 + 914), t.writable = !(-9521 + 1 * -5619 + 757 * 20), t.value = n, Object.defineProperty(this, i, t);
  } });
});
var Tr = Y.event;
function uI() {
}
function fI() {
  return this.cancelBubble;
}
function hI() {
  return this.defaultPrevented;
}
Y.event = function(i) {
  return Tr && (i = Tr(i)), i.persist = uI, i.isPropagationStopped = fI, i.isDefaultPrevented = hI, i.nativeEvent = i;
};
var on = {};
on.enumerable = !(-3739 + 7339 * 1 + -3599), on.configurable = !(-106 + -1849 * 2 + 3804), on.get = function() {
  return this.class;
};
var z0, pI = on, Hr = Y.vnode;
Y.vnode = function(i) {
  typeof i.type == "string" && function(n) {
    var t = n.props, e = n.type, A = {};
    for (var o in t) {
      var r = t[o];
      if (!(o === "value" && "defaultValue" in t && r == null || QI && o === "children" && e === "noscript" || o === "class" || o === "className")) {
        var a = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && r === !0 ? r = "" : a === "translate" && r === "no" ? r = !(2 * 177 + -79 * -2 + -511 * 1) : a === "ondoubleclick" ? o = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || dI(t.type) ? a === "onfocus" ? o = "onfocusin" : a === "onblur" ? o = "onfocusout" : CI.test(o) ? o = a : e.indexOf("-") === -1 && xI.test(o) ? o = o.replace(BI, "-$&").toLowerCase() : r === null && (r = void (-9967 * 1 + -1 * -9969 + 1 * -2)) : a = o = "oninput", a === "oninput" && A[o = a] && (o = "oninputCapture"), A[o] = r;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Fe(t.children).forEach(function(g) {
      g.props.selected = -(-74 * -5 + -3904 * 1 + 101 * 35) != A.value.indexOf(g.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = Fe(t.children).forEach(function(g) {
      g.props.selected = A.multiple ? -(-898 * -11 + 2511 + -12388) != A.defaultValue.indexOf(g.props.value) : A.defaultValue == g.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", pI)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), n.props = A;
  }(i), i.$$typeof = Sg, Hr && Hr(i);
};
var Kr = Y.__r;
Y.__r = function(i) {
  Kr && Kr(i), z0 = i.__c;
};
var jr = Y.diffed;
Y.diffed = function(i) {
  jr && jr(i);
  var n = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value), z0 = null;
};
var yA = {};
yA.readContext = function(i) {
  return z0.__n[i.__c].props.value;
}, yA.useCallback = ve, yA.useContext = Re, yA.useDebugValue = mn, yA.useDeferredValue = Rg, yA.useEffect = aA, yA.useId = mg, yA.useImperativeHandle = pg, yA.useInsertionEffect = Wg, yA.useLayoutEffect = Tt, yA.useMemo = TA, yA.useReducer = V0, yA.useRef = re, yA.useState = PA, yA.useSyncExternalStore = Lg, yA.useTransition = Mg;
var Ng = {};
Ng.current = yA;
var Fg = {};
Fg.ReactCurrentDispatcher = Ng;
var mI = Fg;
function yI(i) {
  return YA.bind(null, i);
}
function ci(i) {
  return !!i && i.$$typeof === Sg;
}
function bI(i) {
  return ci(i) && i.type === ce;
}
function wI(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function DI(i) {
  return ci(i) ? q0.apply(null, arguments) : i;
}
function kI(i) {
  return !!i.__k && (He(null, i), !(3160 + 74 * -102 + 2194 * 2));
}
function GI(i) {
  return i && (i.base || 1 * 3523 + 6e3 + -9522 === i.nodeType && i) || null;
}
var SI = function(i, n) {
  return i(n);
}, NI = function(i, n) {
  return i(n);
}, FI = ce;
function vg(i) {
  i();
}
function Rg(i) {
  return i;
}
function Mg() {
  return [!(-4 * -1345 + -5522 + 143), vg];
}
var Wg = Tt, vI = ci;
function Lg(i, n) {
  var t = n(), e = PA({ h: { __: t, v: n } }), A = e[0].h, o = e[13 * 243 + -9171 + 6013];
  return Tt(function() {
    A.__ = t, A.v = n, Gi(A) && o({ h: A });
  }, [i, t, n]), aA(function() {
    return Gi(A) && o({ h: A }), i(function() {
      Gi(A) && o({ h: A });
    });
  }, [i]), t;
}
function Gi(i) {
  var n, t, e = i.v, A = i.__;
  try {
    var o = e();
    return !((n = A) === (t = o) && (-1 * 4259 + -1 * -9323 + -5064 !== n || (1 * 6961 + -55 * 102 + 1350 * -1) / n == (-1 * -9565 + -5591 * -1 + -2165 * 7) / t) || n != n && t != t);
  } catch {
    return !(895 * -5 + -1 * -3 + 4472);
  }
}
var O = {};
O.useState = PA, O.useId = mg, O.useReducer = V0, O.useEffect = aA, O.useLayoutEffect = Tt, O.useInsertionEffect = Wg, O.useTransition = Mg, O.useDeferredValue = Rg, O.useSyncExternalStore = Lg, O.startTransition = vg, O.useRef = re, O.useImperativeHandle = pg, O.useMemo = TA, O.useCallback = ve, O.useContext = Re, O.useDebugValue = mn, O.version = "17.0.2", O.Children = rI, O.render = EI, O.hydrate = lI, O.unmountComponentAtNode = kI, O.createPortal = II, O.createElement = YA, O.createContext = Qt, O.createFactory = yI, O.cloneElement = DI, O.createRef = Yc, O.Fragment = ce, O.isValidElement = ci, O.isElement = vI, O.isFragment = bI, O.isMemo = wI, O.findDOMNode = GI, O.Component = oe, O.PureComponent = $i, O.memo = nI, O.forwardRef = wg, O.flushSync = NI, O.unstable_batchedUpdates = SI, O.StrictMode = FI, O.Suspense = tn, O.SuspenseList = eo, O.lazy = gI, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mI;
var It = O, RI = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function MI(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function WI(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function LI(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function OI(i) {
  if (i.__esModule) return i;
  var n = i.default;
  if (typeof n == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(e) {
    var A = Object.getOwnPropertyDescriptor(i, e);
    Object.defineProperty(t, e, A.get ? A : {
      enumerable: !0,
      get: function() {
        return i[e];
      }
    });
  }), t;
}
const JI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: RI,
  getAugmentedNamespace: OI,
  getDefaultExportFromCjs: MI,
  getDefaultExportFromNamespaceIfNotNamed: LI,
  getDefaultExportFromNamespaceIfPresent: WI
}, Symbol.toStringTag, { value: "Module" }));
var UI = function(n, t, e, A) {
  var o = e ? e.call(A, n, t) : void 0;
  if (o !== void (1 * 9330 + -2333 * 2 + -4664)) return !!o;
  if (n === t) return !0;
  if (typeof n != "object" || !n || typeof t != "object" || !t) return !1;
  var r = Object.keys(n), a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (var g = Object.prototype.hasOwnProperty.bind(t), s = -1 * 9876 + 4666 + 5210; s < r.length; s++) {
    var I = r[s];
    if (!g(I)) return !1;
    var c = n[I], Q = t[I];
    if (o = e ? e.call(A, c, Q, I) : void 0, o === !1 || o === void (1 * 8452 + -6 * -541 + -11698 * 1) && c !== Q) return !1;
  }
  return !0;
};
const YI = JI.getDefaultExportFromCjs(UI);
var AA = "-ms-", co = "-moz-", V = "-webkit-", Og = "comm", Ii = "rule", X0 = "decl", PI = "@import", Jg = "@keyframes", TI = "@layer", Ug = Math.abs, $0 = String.fromCharCode, A0 = Object.assign;
function HI(i, n) {
  return uA(i, 2047 * -1 + -1 * -4055 + -2008) ^ 45 ? (((n << -1 * 1549 + -1618 * -5 + -6539 ^ uA(i, 1 * -65 + -1 * 22 + 1 * 87)) << -4 * -625 + -6302 + 3804 ^ uA(i, 6073 + 1651 * -2 + 1385 * -2)) << -597 * -12 + -11 * 137 + -145 * 39 ^ uA(i, 419 * 1 + -550 + -19 * -7)) << 7314 + -4918 * -1 + -10 * 1223 ^ uA(i, 4852 + 301 * -5 + -44 * 76) : 146 + -307 * 23 + 1 * 6915;
}
function Yg(i) {
  return i.trim();
}
function De(i, n) {
  return (i = n.exec(i)) ? i[1 * 9022 + -8734 + 32 * -9] : i;
}
function P(i, n, t) {
  return i.replace(n, t);
}
function nn(i, n, t) {
  return i.indexOf(n, t);
}
function uA(i, n) {
  return i.charCodeAt(n) | 18 * -349 + 9680 + -3398;
}
function Wt(i, n, t) {
  return i.slice(n, t);
}
function le(i) {
  return i.length;
}
function Pg(i) {
  return i.length;
}
function to(i, n) {
  return n.push(i), i;
}
function KI(i, n) {
  return i.map(n).join("");
}
function qr(i, n) {
  return i.filter(function(t) {
    return !De(t, n);
  });
}
var xi = 11068 + -217 * 51, Lt = -9109 + 7977 * -1 + 17087, Tg = 523 * -11 + 8756 + 7 * -429, ae = -349 * -5 + 1 * 9950 + -11695 * 1, BA = 0, Ht = "";
function Ci(i, n, t, e, A, o, r, a) {
  var g = {};
  return g.value = i, g.root = n, g.parent = t, g.type = e, g.props = A, g.children = o, g.line = xi, g.column = Lt, g.length = r, g.return = "", g.siblings = a, g;
}
function Le(i, n) {
  return A0(Ci("", null, null, "", null, null, 1 * -2306 + 1 * 3787 + -1481, i.siblings), i, { length: -i.length }, n);
}
function ft(i) {
  for (; i.root; ) i = Le(i.root, { children: [i] });
  to(i, i.siblings);
}
function jI() {
  return BA;
}
function qI() {
  return BA = ae > 6080 + 1 * -923 + -9 * 573 ? uA(Ht, --ae) : 0, Lt--, BA === 1046 * -3 + -2002 + 2 * 2575 && (Lt = 1, xi--), BA;
}
function se() {
  return BA = ae < Tg ? uA(Ht, ae++) : -1242 + 1 * 1242, Lt++, BA === -7991 + 1263 * 4 + 3 * 983 && (Lt = 1, xi++), BA;
}
function gt() {
  return uA(Ht, ae);
}
function rn() {
  return ae;
}
function Bi(i, n) {
  return Wt(Ht, i, n);
}
function e0(i) {
  switch (i) {
    case 0:
    case 519 * -3 + 8374 + -6808:
    case -61 * 73 + 6064 + 1 * -1601:
    case 5110 + 1 * -8903 + 3806:
    case -4419 + 4 * -466 + 6315:
      return -1084 * 6 + 20 * 43 + 5649;
    case 2 * -93 + -134 + -353 * -1:
    case 5008 + -1 * -617 + -2 * 2791:
    case 44:
    case 47:
    case 1 * 7451 + 256 * -14 + -3805:
    case 17718 + -8827 * 2:
    case 126:
    case -3171 * 1 + -1985 * -5 + -6695:
    case -3119 + 1621 * 2:
    case -1288 + 2803 * -3 + 9822:
      return -9377 + 35 * -199 + 16346;
    case 5 * 1726 + 8 * -813 + -2068:
      return 8126 + -95 * 61 + 8 * -291;
    case -3140 + 602 * 3 + 1368:
    case 2 * -2947 + 5637 * -1 + 2 * 5785:
    case 5216 + 2022 * 3 + 803 * -14:
    case 282 * -21 + -9083 + -4 * -3774:
      return 2857 * -3 + 349 * -1 + 3 * 2974;
    case 3411 + 1387 * 3 + 443 * -17:
    case 7 * 269 + 538 * 1 + -8 * 291:
      return -1539 * 4 + -148 * -55 + 1 * -1983;
  }
  return -2131 * 4 + 3 * -3165 + -18019 * -1;
}
function ZI(i) {
  return xi = Lt = -433 * -1 + 8878 + 19 * -490, Tg = le(Ht = i), ae = 3011 * 3 + -874 + -8159, [];
}
function VI(i) {
  return Ht = "", i;
}
function Si(i) {
  return Yg(Bi(ae - 1, t0(i === 3137 * 1 + 4231 * -1 + 1185 ? i + (-1691 + -19 * 269 + 27 * 252) : i === 180 + 14 * -10 ? i + 1 : i)));
}
function _I(i) {
  for (; (BA = gt()) && BA < -2785 * 3 + 3 * 1707 + 3267; ) se();
  return e0(i) > 1 * -6601 + 1 * 4513 + 2090 * 1 || e0(BA) > 3 ? "" : " ";
}
function zI(i, n) {
  for (; --n && se() && !(BA < 1999 + 1 * 4750 + -6701 || BA > -1394 * -1 + -6485 * 1 + 1 * 5193 || BA > 1 * -2257 + -6255 + 8569 && BA < 6022 + -1 * 5957 || BA > 70 && BA < -5760 + -1 * -5857); ) ;
  return Bi(i, rn() + (n < -1539 + 19 * -47 + 1219 * 2 && gt() == 116 * 4 + 224 + -656 && se() == -4636 + 4668 * 1));
}
function t0(i) {
  for (; se(); ) switch (BA) {
    case i:
      return ae;
    case 2072 + -1 * -1337 + -3375:
    case 39:
      i !== -491 * -3 + -6514 + 5075 && i !== -1 * 1931 + -4468 + 2 * 3219 && t0(BA);
      break;
    case -1545 + -1 * -9054 + -77 * 97:
      i === 4619 + 2914 * 3 + 37 * -360 && t0(i);
      break;
    case -4351 + 3 * 1481:
      se();
      break;
  }
  return ae;
}
function XI(i, n) {
  for (; se() && i + BA !== 1807 * -3 + -2521 + 7989 + (-1 * 8161 + 6184 * -1 + -9 * -1595); ) if (i + BA === -919 * -1 + -3726 + 2849 + (-3404 + -2 * -1723) && gt() === -3127 + 46 * 69) break;
  return "/*" + Bi(n, ae - (5 * -1546 + 465 * 1 + 7266)) + "*" + $0(i === 5 * 1279 + -8426 * -1 + -14774 ? i : se());
}
function $I(i) {
  for (; !e0(gt()); ) se();
  return Bi(i, ae);
}
function Ax(i) {
  return VI(an("", null, null, null, [""], i = ZI(i), -5 * 1444 + -6855 + 14075, [1247 * -3 + 8904 + -5163], i));
}
function an(i, n, t, e, A, o, r, a, g) {
  for (var s = 0, I = 8 * -860 + -38 * -238 + -1 * 2164, c = r, Q = -4155 + 4813 * -1 + 472 * 19, x = 13 + 3622 * 1 + 1 * -3635, d = -1 * -9673 + 7460 + -17133 * 1, E = 1, f = -3121 + 1017 * 1 + 2105 * 1, C = 1, h = -1 * 6765 + -1 * -4772 + 1 * 1993, b = "", k = A, R = o, J = e, M = b; f; ) switch (d = h, h = se()) {
    case -4161 + -21 * -263 + -1322:
      if (d != -14673 + -1 * -14781 && uA(M, c - (-8494 + -3998 * 1 + 31 * 403)) == 89 * -92 + -283 * 31 + 3 * 5673) {
        nn(M += P(Si(h), "&", "&\f"), "&\f", Ug(s ? a[s - (-1229 + -5 * 595 + 4205)] : -2366 + 10 * -609 + 28 * 302)) != -(1 * -6953 + 4 * 1777 + -154) && (C = -(5960 + -50 * 44 + -3759));
        break;
      }
    case -4175 + 52 * 109 + -1459:
    case -13 * -373 + -47 * -157 + -239 * 51:
    case -17 * -39 + 3987 + -4559 * 1:
      M += Si(h);
      break;
    case -3 * 36 + 75 * -18 + 489 * 3:
    case 3024 + -5 * 479 + -619:
    case 13:
    case -464 * 17 + 1 * 1893 + 3 * 2009:
      M += _I(d);
      break;
    case -7634 + -1 * 3470 + 11196 * 1:
      M += zI(rn() - (-2761 * -2 + 7679 * -1 + -83 * -26), 3231 + -248 * 13);
      continue;
    case 7035 * -1 + 4443 + 2639:
      switch (gt()) {
        case 4777 + -1 * 4735:
        case 2633 * 3 + -3270 * 3 + 1958:
          to(ex(XI(se(), rn()), n, t, g), g);
          break;
        default:
          M += "/";
      }
      break;
    case (700 * -13 + 2004 + 7219 * 1) * E:
      a[s++] = le(M) * C;
    case (2527 + -771 * -9 + -9341 * 1) * E:
    case -5024 + -67 * -69 + 460:
    case 7178 * -1 + 8005 + -827 * 1:
      switch (h) {
        case 8005 * -1 + 6172 + 1833:
        case 17597 + 624 * -28:
          f = 11 * -753 + -3191 * -3 + -1290;
        case -6019 * -1 + 7731 * 1 + 13691 * -1 + I:
          C == -1 && (M = P(M, /\f/g, "")), x > -6558 * -1 + -1565 * -5 + -14383 && le(M) - c && to(x > 5627 + 2443 * 3 + 2 * -6462 ? Vr(M + ";", e, t, c - (-12714 + -1 * -12715), g) : Vr(P(M, " ", "") + ";", e, t, c - 2, g), g);
          break;
        case 61 * -129 + -2 * -1338 + 13 * 404:
          M += ";";
        default:
          if (to(J = Zr(M, n, t, s, I, A, a, b, k = [], R = [], c, o), o), h === -390 * -7 + 9299 + -11906)
            if (I === -6590 + -30 * -200 + 590) an(M, n, J, J, k, o, c, a, R);
            else switch (Q === -2211 * -3 + 1 * 2757 + -9291 && uA(M, 5218 * -1 + 3299 + 1922) === 1 * -5219 + -1 * -295 + 6 * 839 ? -5007 * 1 + -1 * 9397 + 56 * 259 : Q) {
              case 428 * 8 + 7619 + -10943:
              case 7629 + -1186 * -1 + -8707:
              case 17 * -326 + -1265 * -2 + 3121:
              case -1 * -5722 + 3 * -2846 + -2931 * -1:
                an(i, J, J, e && to(Zr(i, J, J, 576 + -90 * -51 + -14 * 369, 4387 + 1 * 7851 + -12238, A, a, b, A, k = [], c, R), R), A, R, c, a, e ? k : R);
                break;
              default:
                an(M, J, J, J, [""], R, -1 * -3455 + 1701 + -5156, a, R);
            }
      }
      s = I = x = -6653 * 1 + 2244 + -1 * -4409, E = C = 1, b = M = "", c = r;
      break;
    case 58:
      c = 319 * -17 + 628 * -9 + 11076 + le(M), x = d;
    default:
      if (E < -58 * 1 + -3613 * -1 + -3554) {
        if (h == 86 * 86 + 3192 + -10465) --E;
        else if (h == 7343 + -137 * 38 + -2012 && E++ == 1 * -4708 + -3642 * 1 + -4175 * -2 && qI() == 1964 * -4 + 24 * -79 + 9877) continue;
      }
      switch (M += $0(h), h * E) {
        case -10136 + -2 * -5087:
          C = I > 3138 * 3 + -22 * 62 + -8050 ? 4215 + -1 * -5453 + -9667 : (M += "\f", -(-1 * -2721 + -8138 + 602 * 9));
          break;
        case -5341 + 46 * 46 + 467 * 7:
          a[s++] = (le(M) - (-26 * 337 + 81 * -64 + 13947)) * C, C = -693 + -2 * -347;
          break;
        case 1595 + -8509 * -1 + -1255 * 8:
          gt() === 45 && (M += Si(se())), Q = gt(), I = c = le(b = M += $I(rn())), h++;
          break;
        case 607 * -1 + -541 + 1 * 1193:
          d === -573 * -12 + -1019 * -9 + -14 * 1143 && le(M) == -9521 + -2 * -4479 + 565 && (E = 0);
      }
  }
  return o;
}
function Zr(i, n, t, e, A, o, r, a, g, s, I, c) {
  for (var Q = A - 1, x = A === 1 * -9307 + -9653 + 18960 ? o : [""], d = Pg(x), E = -217 * 19 + 4311 + 4 * -47, f = -3211 + 3211 * 1, C = -1 * 7583 + 29 * 82 + 5205; E < e; ++E) for (var h = -45 * 105 + -7550 * 1 + 12275, b = Wt(i, Q + 1, Q = Ug(f = r[E])), k = i; h < d; ++h) (k = Yg(f > 171 * 13 + 7 * -197 + 422 * -2 ? x[h] + " " + b : P(b, /&\f/g, x[h]))) && (g[C++] = k);
  return Ci(i, n, t, A === -9 * 302 + 1 * 222 + 48 * 52 ? Ii : a, g, s, I, c);
}
function ex(i, n, t, e) {
  return Ci(i, n, t, Og, $0(jI()), Wt(i, 2, -(-7341 * 1 + -9406 + -1 * -16749)), -349 * -17 + -32 * 104 + -521 * 5, e);
}
function Vr(i, n, t, e, A) {
  return Ci(i, n, t, X0, Wt(i, -4445 + 7763 * -1 + 12208, e), Wt(i, e + (405 * -20 + -7 * 718 + 13127), -1), e, A);
}
function Hg(i, n, t) {
  switch (HI(i, n)) {
    case -8758 + 83 * 167:
      return V + "print-" + i + i;
    case 11227 + -45 * -181 + -13635:
    case 5178 + 3 * 735 + 1591 * -2:
    case 2424 + 1 * 7010 + -6257:
    case 2 * -1259 + -7603 + 13554:
    case -423 * 6 + -3363 + 2514 * 3:
    case -194 * 44 + 23 * 165 + 9198:
    case 1803 + 34 * 35 + -72:
    case 433 * 19 + 3072 + -5727:
    case -3178 + -14 * -681:
    case 367 * 29 + 5770 + 3523 * -3:
    case 3 * -1137 + 5038 + 1564:
    case 17365 + 2680 * -4:
    case -9605 + -2571 * 1 + 893 * 17:
    case 8410 + 345 * 30 + -12369:
    case 4 * -2053 + -338 * 7 + 1 * 16457:
    case -1 * 5042 + -6609 + 17274:
    case 1 * -1458 + 3434 + -4159 * -1:
    case 8715 + -49 * 84:
    case 6936 + -367 * -27 + -11990:
    case 1 * -2897 + 4226 + 2886:
    case -9794 + -2 * -2197 + 11789 * 1:
    case -2263 * -1 + 2 * 917 + -46 * -22:
    case 18 * 15 + 3 * -609 + 3461 * 2:
    case -18414 + -11 * -2185:
    case -8327 + -3 * -4052:
      return V + i + i;
    case -9502 * -1 + 3017 + 773 * -10:
      return co + i + i;
    case -1 * 7913 + 3225 + 10037:
    case -1 * 7831 + -7989 + 20066:
    case -57 * 158 + -7325 + 87 * 243:
    case 29 * 449 + 5077 + 3 * -3710:
    case -15988 + -24 * -781:
      return V + i + co + i + AA + i + i;
    case 59 * -153 + -11147 + 5222 * 5:
      switch (uA(i, n + (-9465 * -1 + 4 * -1450 + -3654))) {
        case 17 * 115 + -8829 + 6988:
          return V + i + AA + P(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 8835 + -3 * 2909:
          return V + i + AA + P(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -5885 + 1 * -251 + -1 * -6181:
          return V + i + AA + P(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case -4375 + -1 * -11203:
    case 4268:
    case 2903:
      return V + i + AA + i + i;
    case -3376 * -1 + 10837 + 2012 * -4:
      return V + i + AA + "flex-" + i + i;
    case -188 * -41 + 2949 + -2735 * 2:
      return V + i + P(i, /(\w+).+(:[^]+)/, V + "box-$1$2" + AA + "flex-$1$2") + i;
    case 7740 * 1 + -6952 + -19 * -245:
      return V + i + AA + "flex-item-" + P(i, /flex-|-self/g, "") + (De(i, /flex-|baseline/) ? "" : AA + "grid-row-" + P(i, /flex-|-self/g, "")) + i;
    case 5145 + -2 * 235:
      return V + i + AA + "flex-line-pack" + P(i, /align-content|flex-|-self/g, "") + i;
    case -8194 + -16 * 468 + 21230:
      return V + i + AA + P(i, "shrink", "negative") + i;
    case -271 * -9 + 272 * 31 + 7 * -797:
      return V + i + AA + P(i, "basis", "preferred-size") + i;
    case 4 * -2951 + 1561 * 3 + 13181:
      return V + "box-" + P(i, "-grow", "") + V + i + AA + P(i, "grow", "positive") + i;
    case -6 * 103 + -7270 + 12442:
      return V + P(i, /([^-])(transform)/g, "$1" + V + "$2") + i;
    case -25 * -153 + 11273 + -7 * 1273:
      return P(P(P(i, /(zoom-|grab)/, V + "$1"), /(image-set)/, V + "$1"), i, "") + i;
    case 815 + 312 * 15:
    case -271 * 1 + -1 * -5321 + -1091 * 1:
      return P(i, /(image-set\([^]*)/, V + "$1$`$1");
    case 4968:
      return P(P(i, /(.+:)(flex-)?(.*)/, V + "box-pack:$3" + AA + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + V + i + i;
    case 83 * -83 + 2771 + 8318:
      if (!De(i, /flex-|baseline/)) return AA + "grid-column-align" + Wt(i, n) + i;
      break;
    case -996 * 5 + 1 * -8399 + 1 * 15971:
    case 3360:
      return AA + P(i, "template-", "") + i;
    case 4384:
    case 19 * -51 + -8409 + 12994:
      return t && t.some(function(e, A) {
        return n = A, De(e.props, /grid-\w+-end/);
      }) ? ~nn(i + (t = t[n].value), "span", 4434 + -62 * -138 + 1299 * -10) ? i : AA + P(i, "-start", "") + i + AA + "grid-row-span:" + (~nn(t, "span", -7 * 831 + 1800 + -13 * -309) ? De(t, /\d+/) : +De(t, /\d+/) - +De(i, /\d+/)) + ";" : AA + P(i, "-start", "") + i;
    case -8294 + 13190 * 1:
    case -17 * -16 + -2599 + 1291 * 5:
      return t && t.some(function(e) {
        return De(e.props, /grid-\w+-start/);
      }) ? i : AA + P(P(i, "-end", "-span"), "span ", "") + i;
    case 1182 + -813 * -1 + -700 * -3:
    case 3583:
    case -3 * -863 + -101 * 78 + 9357:
    case -1837 + 2576 * 1 + -1 * -1793:
      return P(i, /(.+)-inline(.+)/, V + "$1$2") + i;
    case 1478 * 8 + 14440 + -13 * 1396:
    case -5344 + 157 * 79:
    case 400 + -147 * -47 + -1556 * 1:
    case 5535:
    case -1 * 9962 + 11 * 223 + 12954:
    case -21248 + -691 * -39:
    case 16 * -302 + -1514 + -11279 * -1:
    case 4 * -1729 + 35 * -214 + -3 * -6361:
    case -7987 + -2510 * -1 + -734 * -15:
    case 379 + -4365 * -1 + 1045:
    case 5021:
    case -9469 * 1 + -792 + 15026:
      if (le(i) - (6091 + 238 * -36 + -6 * -413) - n > 6721 + -43 * 37 + -5124) switch (uA(i, n + (-2117 + -2808 * -3 + -6306))) {
        case -131 * -45 + -6844 * -1 + -12630:
          if (uA(i, n + (8900 + -1451 * 5 + -1 * 1641)) !== 45) break;
        case 3334 * 1 + -1 * 7249 + 4017:
          return P(i, /(.+:)(.+)-([^]+)/, "$1" + V + "$2-$3$1" + co + (uA(i, n + (-5519 * 1 + 7903 + -2381)) == -9815 + 4 * -2339 + 19279 * 1 ? "$3" : "$2-$3")) + i;
        case -17 * 153 + 190 * -14 + -1 * -5376:
          return ~nn(i, "stretch", 21 * -166 + -2993 + 6479) ? Hg(P(i, "stretch", "fill-available"), n, t) + i : i;
      }
      break;
    case 5152:
    case -10324 + 54 * 61 + 12950:
      return P(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, o, r, a, g, s) {
        return AA + A + ":" + o + s + (r ? AA + A + "-span:" + (a ? g : +g - +o) + s : "") + i;
      });
    case -4260 + 1 * -1527 + -16 * -671:
      if (uA(i, n + (-17 * 251 + 7589 + -3316)) === -729 * 9 + -3601 + 1469 * 7) return P(i, ":", ":" + V) + i;
      break;
    case 6384 + 5 * 12:
      switch (uA(i, uA(i, -3715 + 1683 * -1 + 2 * 2706) === 156 * -15 + -3 * -478 + 951 ? 19 * 23 + 7 * 1262 + -9253 : -1 * -7759 + -6658 + -1090)) {
        case 3255 + 33 * -95:
          return P(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + V + (uA(i, 1912 * 1 + 8023 + -1 * 9921) === 45 ? "inline-" : "") + "box$3$1" + V + "$2$3$1" + AA + "$2box$3") + i;
        case 9273 + -1154 * -1 + -10327:
          return P(i, ":", ":" + AA) + i;
      }
      break;
    case 2 * 2237 + 8688 + -1 * 7443:
    case 1946 + 1027 * -1 + 4 * 432:
    case 2581 * 1 + 5099 + 1 * -5545:
    case 1 * 5971 + -1 * 943 + -1101:
    case 158 * 1 + 27 * 2 + 2179:
      return P(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function yn(i, n) {
  for (var t = "", e = -47 * 2 + -3362 * 1 + 3456; e < i.length; e++) t += n(i[e], e, i, n) || "";
  return t;
}
function tx(i, n, t, e) {
  switch (i.type) {
    case TI:
      if (i.children.length) break;
    case PI:
    case X0:
      return i.return = i.return || i.value;
    case Og:
      return "";
    case Jg:
      return i.return = i.value + "{" + yn(i.children, e) + "}";
    case Ii:
      if (!le(i.value = i.props.join(","))) return "";
  }
  return le(t = yn(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function ox(i) {
  var n = Pg(i);
  return function(t, e, A, o) {
    for (var r = "", a = 0; a < n; a++) r += i[a](t, e, A, o) || "";
    return r;
  };
}
function nx(i) {
  return function(n) {
    n.root || (n = n.return) && i(n);
  };
}
function ix(i, n, t, e) {
  if (i.length > -(1420 * -5 + -1 * -6366 + 735) && !i.return)
    switch (i.type) {
      case X0:
        i.return = Hg(i.value, i.length, t);
        return;
      case Jg:
        return yn([Le(i, { value: P(i.value, "@", "@" + V) })], e);
      case Ii:
        if (i.length) return KI(t = i.props, function(A) {
          switch (De(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ft(Le(i, { props: [P(A, /:(read-\w+)/, ":" + co + "$1")] }));
              var o = {};
              o.props = [A], ft(Le(i, o)), A0(i, { props: qr(t, e) });
              break;
            case "::placeholder":
              ft(Le(i, { props: [P(A, /:(plac\w+)/, ":" + V + "input-$1")] })), ft(Le(i, { props: [P(A, /:(plac\w+)/, ":" + co + "$1")] })), ft(Le(i, { props: [P(A, /:(plac\w+)/, AA + "input-$1")] }));
              var r = {};
              r.props = [A], ft(Le(i, r)), A0(i, { props: qr(t, e) });
              break;
          }
          return "";
        });
    }
}
var L = {};
L.animationIterationCount = 1, L.aspectRatio = 1, L.borderImageOutset = 1, L.borderImageSlice = 1, L.borderImageWidth = 1, L.boxFlex = 1, L.boxFlexGroup = 1, L.boxOrdinalGroup = 1, L.columnCount = 1, L.columns = 1, L.flex = 1, L.flexGrow = 1, L.flexPositive = 1, L.flexShrink = 1, L.flexNegative = 1, L.flexOrder = 1, L.gridRow = 1, L.gridRowEnd = 1, L.gridRowSpan = 1, L.gridRowStart = 1, L.gridColumn = 1, L.gridColumnEnd = 1, L.gridColumnSpan = 1, L.gridColumnStart = 1, L.msGridRow = 1, L.msGridRowSpan = 1, L.msGridColumn = 1, L.msGridColumnSpan = 1, L.fontWeight = 1, L.lineHeight = 1, L.opacity = 1, L.order = 1, L.orphans = 1, L.tabSize = 1, L.widows = 1, L.zIndex = 1, L.zoom = 1, L.WebkitLineClamp = 1, L.fillOpacity = 1, L.floodOpacity = 1, L.stopOpacity = 1, L.strokeDasharray = 1, L.strokeDashoffset = 1, L.strokeMiterlimit = 1, L.strokeOpacity = 1, L.strokeWidth = 1;
var rx = L, Z = {}, xt = typeof process < "u" && void (-1331 + -1 * -6878 + -5547) !== Z && (Z.REACT_APP_SC_ATTR || Z.SC_ATTR) || "data-styled", Kg = "active", jg = "data-styled-version", Qi = "6.1.11", Ar = `/*!sc*/
`, er = typeof window < "u" && "HTMLElement" in window, ax = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-235 * 2 + 7774 + -332 * 22) !== Z && void (7 * 808 + -42 * 134 + -28) !== Z.REACT_APP_SC_DISABLE_SPEEDY && Z.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Z.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Z.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (682 * -4 + 1354 * -4 + 1 * 8144) !== Z && Z.SC_DISABLE_SPEEDY !== void 0 && Z.SC_DISABLE_SPEEDY !== "" ? Z.SC_DISABLE_SPEEDY !== "false" && Z.SC_DISABLE_SPEEDY : Z.NODE_ENV !== "production"), _r = /invalid hook call/i, Ho = /* @__PURE__ */ new Set(), gx = function(i, n) {
  if (Z.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var o = !0;
      console.error = function(r) {
        for (var a = [], g = -183 * 1 + -1823 + -1 * -2007; g < arguments.length; g++) a[g - (895 * 1 + -1 * 214 + -680)] = arguments[g];
        _r.test(r) ? (o = !1, Ho.delete(e)) : A.apply(void (-4 * 514 + 7525 + -5469 * 1), Rt([r], a, !1));
      }, re(), o && !Ho.has(e) && (console.warn(e), Ho.add(e));
    } catch (r) {
      _r.test(r.message) && Ho.delete(e);
    } finally {
      console.error = A;
    }
  }
}, di = Object.freeze([]), Ot = Object.freeze({});
function sx(i, n, t) {
  return void (4622 + 1 * 2169 + 6791 * -1) === t && (t = Ot), i.theme !== t.theme && i.theme || n || t.theme;
}
var o0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), cx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ix = /(^-|-$)/g;
function zr(i) {
  return i.replace(cx, "-").replace(Ix, "");
}
var xx = /(a)(d)/gi, Ko = 3 * -3174 + 1 * -6793 + 16367, Xr = function(i) {
  return String.fromCharCode(i + (i > 9293 + -6730 * -1 + 15998 * -1 ? -2427 + 91 * 41 + -1265 : -4 * -492 + -2 * -3320 + -8511));
};
function n0(i) {
  var n, t = "";
  for (n = Math.abs(i); n > Ko; n = n / Ko | -1965 * -1 + 974 * -2 + -1 * 17) t = Xr(n % Ko) + t;
  return (Xr(n % Ko) + t).replace(xx, "$1-$2");
}
var Ni, qg = 5381, At = function(i, n) {
  for (var t = n.length; t; ) i = (-4760 + -482 * -1 + 4311 * 1) * i ^ n.charCodeAt(--t);
  return i;
}, Zg = function(i) {
  return At(qg, i);
};
function Cx(i) {
  return n0(Zg(i) >>> -1 * 547 + -17 * -289 + -4366);
}
function Vg(i) {
  return Z.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Fi(i) {
  return typeof i == "string" && (Z.NODE_ENV === "production" || i.charAt(1 * -358 + -121 * -15 + -1457) === i.charAt(-2904 + -57 * -63 + -687).toLowerCase());
}
var Ae = {};
Ae.childContextTypes = !0, Ae.contextType = !0, Ae.contextTypes = !0, Ae.defaultProps = !0, Ae.displayName = !0, Ae.getDefaultProps = !0, Ae.getDerivedStateFromError = !0, Ae.getDerivedStateFromProps = !0, Ae.mixins = !0, Ae.propTypes = !0, Ae.type = !0;
var Oe = {};
Oe.name = !0, Oe.length = !0, Oe.prototype = !0, Oe.caller = !0, Oe.callee = !0, Oe.arguments = !0, Oe.arity = !0;
var _e = {};
_e.$$typeof = !0, _e.compare = !0, _e.defaultProps = !0, _e.displayName = !0, _e.propTypes = !0, _e.type = !0;
var mt = {};
mt.$$typeof = !0, mt.render = !0, mt.defaultProps = !0, mt.displayName = !0, mt.propTypes = !0;
var _g = typeof Symbol == "function" && Symbol.for, zg = _g ? Symbol.for("react.memo") : -66 * 1341 + -35244 + 183865, Bx = _g ? Symbol.for("react.forward_ref") : 9 * -4121 + -12857 + 18343 * 6, Qx = Ae, dx = Oe, Xg = _e, Ex = ((Ni = {})[Bx] = mt, Ni[zg] = Xg, Ni);
function $r(i) {
  return ("type" in (n = i) && n.type.$$typeof) === zg ? Xg : "$$typeof" in i ? Ex[i.$$typeof] : Qx;
  var n;
}
var lx = Object.defineProperty, ux = Object.getOwnPropertyNames, Aa = Object.getOwnPropertySymbols, fx = Object.getOwnPropertyDescriptor, hx = Object.getPrototypeOf, ea = Object.prototype;
function $g(i, n, t) {
  if (typeof n != "string") {
    if (ea) {
      var e = hx(n);
      e && e !== ea && $g(i, e, t);
    }
    var A = ux(n);
    Aa && (A = A.concat(Aa(n)));
    for (var o = $r(i), r = $r(n), a = 0; a < A.length; ++a) {
      var g = A[a];
      if (!(g in dx || t && t[g] || r && g in r || o && g in o)) {
        var s = fx(n, g);
        try {
          lx(i, g, s);
        } catch {
        }
      }
    }
  }
  return i;
}
function Jt(i) {
  return typeof i == "function";
}
function tr(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function tt(i, n) {
  return i && n ? "".concat(i, " ").concat(n) : i || n || "";
}
function ta(i, n) {
  if (418 + 1231 * -2 + 2044 === i.length) return "";
  for (var t = i[0], e = -9237 * 1 + 7117 * 1 + 21 * 101; e < i.length; e++) t += i[e];
  return t;
}
function Ut(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function i0(i, n, t) {
  if (void (-5761 + 5761 * 1) === t && (t = !1), !t && !Ut(i) && !Array.isArray(i)) return n;
  if (Array.isArray(n))
    for (var e = -1 * 4478 + -7 * 502 + 18 * 444; e < n.length; e++) i[e] = i0(i[e], n[e]);
  else if (Ut(n))
    for (var e in n) i[e] = i0(i[e], n[e]);
  return i;
}
function or(i, n) {
  var t = {};
  t.value = n, Object.defineProperty(i, "toString", t);
}
var dA = {};
dA[1] = `Cannot create styled-component for component: %s.

`, dA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, dA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, dA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, dA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, dA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, dA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', dA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, dA[9] = "Missing document `<head>`\n\n", dA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, dA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, dA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", dA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, dA[14] = `ThemeProvider: "theme" prop is required.

`, dA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", dA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, dA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, dA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var px = Z.NODE_ENV !== "production" ? dA : {};
function mx() {
  for (var i = [], n = -3695 * -1 + 3963 + -1094 * 7; n < arguments.length; n++) i[n] = arguments[n];
  for (var t = i[8323 + 203 * -41], e = [], A = 9663 + -1e3 * -8 + -17662, o = i.length; A < o; A += -4 * -2062 + 1 * -3907 + -4340) e.push(i[A]);
  return e.forEach(function(r) {
    t = t.replace(/%[a-z]/, r);
  }), t;
}
function Kt(i) {
  for (var n = [], t = 92 * 80 + 3 * -2141 + 12 * -78; t < arguments.length; t++) n[t - (-1 * 8164 + -6088 + 1 * 14253)] = arguments[t];
  return Z.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(n.length > -5328 + 15 * -446 + 12018 * 1 ? " Args: ".concat(n.join(", ")) : "")) : new Error(mx.apply(void (-411 + -9739 * -1 + -9328), Rt([px[i]], n, !1)).trim());
}
var yx = function() {
  function i(n) {
    this.groupSizes = new Uint32Array(3654 + -877 * -1 + -4019 * 1), this.length = 512, this.tag = n;
  }
  return i.prototype.indexOfGroup = function(n) {
    for (var t = -3 * 3319 + 161 * 7 + -10 * -883, e = -4126 + -3 * -836 + 1618; e < n; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, o = A; n >= o; ) if ((o <<= -12753 + -1 * -12754) < -2 * 4246 + 3476 + 5016) throw Kt(-1 * 2027 + -6 * -1598 + 5 * -1509, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var r = A; r < o; r++) this.groupSizes[r] = 1180 * 1 + 7078 + -1 * 8258;
    }
    for (var a = this.indexOfGroup(n + (3842 + -4093 * 2 + 4345)), g = (r = 5271 + -1 * -3907 + -9178, t.length); r < g; r++) this.tag.insertRule(a, t[r]) && (this.groupSizes[n]++, a++);
  }, i.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), A = e + t;
      this.groupSizes[n] = 714 + 7 * -102;
      for (var o = e; o < A; o++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || -3 * 1457 + 7668 + -3297 === this.groupSizes[n]) return t;
    for (var e = this.groupSizes[n], A = this.indexOfGroup(n), o = A + e, r = A; r < o; r++) t += "".concat(this.tag.getRule(r)).concat(Ar);
    return t;
  }, i;
}(), bx = 1 << 5044 + 2 * -2507, gn = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), sn = -1986 * 2 + -1 * -365 + 3608, jo = function(i) {
  if (gn.has(i)) return gn.get(i);
  for (; bn.has(sn); ) sn++;
  var n = sn++;
  if (Z.NODE_ENV !== "production" && ((-20 * 316 + -1 * 5097 + 11417 * 1 | n) < -16065 + -765 * -21 || n > bx)) throw Kt(-6332 * -1 + 5335 + 11651 * -1, "".concat(n));
  return gn.set(i, n), bn.set(n, i), n;
}, wx = function(i, n) {
  sn = n + (-9418 + -9 * -365 + 6134), gn.set(i, n), bn.set(n, i);
}, Dx = "style[".concat(xt, "][").concat(jg, '="').concat(Qi, '"]'), kx = new RegExp("^".concat(xt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gx = function(i, n, t) {
  for (var e, A = t.split(","), o = 21 * 441 + -106 * -93 + -19119, r = A.length; o < r; o++) (e = A[o]) && i.registerName(n, e);
}, Sx = function(i, n) {
  for (var t, e = ((t = n.textContent) !== null && void (-6957 + 773 * 9) !== t ? t : "").split(Ar), A = [], o = -3647 * -1 + -69 * 133 + 5530, r = e.length; o < r; o++) {
    var a = e[o].trim();
    if (a) {
      var g = a.match(kx);
      if (g) {
        var s = 0 | parseInt(g[1], 10), I = g[2];
        29 * 241 + 4733 + -11722 !== s && (wx(I, s), Gx(i, I, g[1 * 8219 + 1 * 217 + -2811 * 3]), i.getTag().insertRules(s, A)), A.length = -9 * 379 + 26 * -33 + -1 * -4269;
      } else A.push(a);
    }
  }
};
function Nx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var As = function(i) {
  var n = document.head, t = i || n, e = document.createElement("style"), A = function(a) {
    var g = Array.from(a.querySelectorAll("style[".concat(xt, "]")));
    return g[g.length - (8868 * 1 + -1387 * 1 + -1 * 7480)];
  }(t), o = void (-1 * -6469 + 1357 + -602 * 13) !== A ? A.nextSibling : null;
  e.setAttribute(xt, Kg), e.setAttribute(jg, Qi);
  var r = Nx();
  return r && e.setAttribute("nonce", r), t.insertBefore(e, o), e;
}, Fx = function() {
  function i(n) {
    this.element = As(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -1566 + 1844 * 1 + -1 * 278, o = e.length; A < o; A++) {
        var r = e[A];
        if (r.ownerNode === t) return r;
      }
      throw Kt(17);
    }(this.element), this.length = 449 * 21 + -35 * 123 + -5124;
  }
  return i.prototype.insertRule = function(n, t) {
    try {
      return this.sheet.insertRule(t, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, i.prototype.getRule = function(n) {
    var t = this.sheet.cssRules[n];
    return t && t.cssText ? t.cssText : "";
  }, i;
}(), vx = function() {
  function i(n) {
    this.element = As(n), this.nodes = this.element.childNodes, this.length = -2648 + -367 * 3 + 3749;
  }
  return i.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 898 * -7 + -4909 * 1 + 11195) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, i;
}(), Rx = function() {
  function i(n) {
    this.rules = [], this.length = 287 * -9 + 1 * -461 + 3044 * 1;
  }
  return i.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 7097 * 1 + 57 * -17 + -6128, t), this.length++, !0);
  }, i.prototype.deleteRule = function(n) {
    this.rules.splice(n, -1 * -5113 + -2946 * -1 + -8058), this.length--;
  }, i.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, i;
}(), oa = er, Mx = { isServer: !er, useCSSOMInjection: !ax }, es = function() {
  function i(n, t, e) {
    void (4 * 2027 + -35 * 152 + -68 * 41) === n && (n = Ot), void (105 * -94 + -5978 * -1 + 3892) === t && (t = {});
    var A = this;
    this.options = ZA(ZA({}, Mx), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && er && oa && (oa = !1, function(o) {
      for (var r = document.querySelectorAll(Dx), a = 1 * -7768 + -1 * 4673 + 4147 * 3, g = r.length; a < g; a++) {
        var s = r[a];
        s && s.getAttribute(xt) !== Kg && (Sx(o, s), s.parentNode && s.parentNode.removeChild(s));
      }
    }(this)), or(this, function() {
      return function(o) {
        for (var r = o.getTag(), a = r.length, g = "", s = function(c) {
          var Q = function(C) {
            return bn.get(C);
          }(c);
          if (Q === void 0) return "continue";
          var x = o.names.get(Q), d = r.getGroup(c);
          if (void (-892 * -11 + -2507 + -1 * 7305) === x || -16976 + -8488 * -2 === d.length) return "continue";
          var E = "".concat(xt, ".g").concat(c, '[id="').concat(Q, '"]'), f = "";
          x !== void 0 && x.forEach(function(C) {
            C.length > -9656 + -6411 * 1 + 16067 && (f += "".concat(C, ","));
          }), g += "".concat(d).concat(E, '{content:"').concat(f, '"}').concat(Ar);
        }, I = -1086 * 4 + 1929 + 115 * 21; I < a; I++) s(I);
        return g;
      }(A);
    });
  }
  return i.registerId = function(n) {
    return jo(n);
  }, i.prototype.reconstructWithOptions = function(n, t) {
    return void (-1311 + -82 * -62 + -3773) === t && (t = !0), new i(ZA(ZA({}, this.options), n), this.gs, t && this.names || void (4350 * 1 + -7191 + 2841));
  }, i.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || -5065 + 4269 * 1 + 796) + (2175 + 1 * -2174);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new Rx(A) : e ? new Fx(A) : new vx(A);
    }(this.options), new yx(n)));
    var n;
  }, i.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, i.prototype.registerName = function(n, t) {
    if (jo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, i.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(jo(n), e);
  }, i.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, i.prototype.clearRules = function(n) {
    this.getTag().clearGroup(jo(n)), this.clearNames(n);
  }, i.prototype.clearTag = function() {
    this.tag = void (11506 + -1 * 11506);
  }, i;
}(), Wx = /&/g, Lx = /^\s*\/\/.*$/gm;
function ts(i, n) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ts(t.children, n)), t;
  });
}
function os(i) {
  var n, t, e, A = i === void 0 ? Ot : i, o = A.options, r = void (-1313 * -7 + 5 * -1514 + -1621) === o ? Ot : o, a = A.plugins, g = void (1 * -1559 + -1 * -5756 + -4197) === a ? di : a, s = function(Q, x, d) {
    return d.startsWith(t) && d.endsWith(t) && d.replaceAll(t, "").length > -5588 * -1 + -1153 * 8 + 36 * 101 ? ".".concat(n) : Q;
  }, I = g.slice();
  I.push(function(Q) {
    Q.type === Ii && Q.value.includes("&") && (Q.props[-2162 * 1 + 6364 + -4202] = Q.props[0].replace(Wx, t).replace(e, s));
  }), r.prefix && I.push(ix), I.push(tx);
  var c = function(Q, x, d, E) {
    void (-103 * -29 + -8197 + 521 * 10) === x && (x = ""), void (4333 + 1 * 1027 + -268 * 20) === d && (d = ""), void (1 * -9421 + 4183 * 1 + 582 * 9) === E && (E = "&"), n = E, t = x, e = new RegExp("\\".concat(t, "\\b"), "g");
    var f = Q.replace(Lx, ""), C = Ax(d || x ? "".concat(d, " ").concat(x, " { ").concat(f, " }") : f);
    r.namespace && (C = ts(C, r.namespace));
    var h = [];
    return yn(C, ox(I.concat(nx(function(b) {
      return h.push(b);
    })))), h;
  };
  return c.hash = g.length ? g.reduce(function(Q, x) {
    return x.name || Kt(-7737 + 1 * 7357 + 395), At(Q, x.name);
  }, qg).toString() : "", c;
}
var Ox = new es(), r0 = os(), nr = It.createContext({ shouldForwardProp: void (3164 + 4 * 2026 + -939 * 12), styleSheet: Ox, stylis: r0 });
nr.Consumer;
var Jx = It.createContext(void (-1278 * -1 + 8008 + -9286));
function a0() {
  return Re(nr);
}
function Ux(i) {
  var n = PA(i.stylisPlugins), t = n[13 * -547 + 4567 * -1 + 11678 * 1], e = n[-374 * 13 + -2921 * 3 + -6 * -2271], A = a0().styleSheet, o = TA(function() {
    var I = A, c = {};
    return c.useCSSOMInjection = !1, i.sheet ? I = i.sheet : i.target && (I = I.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (I = I.reconstructWithOptions(c)), I;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), r = TA(function() {
    var I = {};
    I.namespace = i.namespace, I.prefix = i.enableVendorPrefixes;
    var c = {};
    return c.options = I, c.plugins = t, os(c);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  aA(function() {
    YI(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = TA(function() {
    var I = {};
    return I.shouldForwardProp = i.shouldForwardProp, I.styleSheet = o, I.stylis = r, I;
  }, [i.shouldForwardProp, o, r]), g = {};
  g.value = a;
  var s = {};
  return s.value = r, It.createElement(nr.Provider, g, It.createElement(Jx.Provider, s, i.children));
}
var na = function() {
  function i(n, t) {
    var e = this;
    this.inject = function(A, o) {
      o === void 0 && (o = r0);
      var r = e.name + o.hash;
      A.hasNameForId(e.id, r) || A.insertRules(e.id, r, o(e.rules, r, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, or(this, function() {
      throw Kt(-8173 + 8185 * 1, String(e.name));
    });
  }
  return i.prototype.getName = function(n) {
    return void (83 * -48 + -2859 + 6843) === n && (n = r0), this.name + n.hash;
  }, i;
}(), Yx = function(i) {
  return i >= "A" && i <= "Z";
};
function ia(i) {
  for (var n = "", t = 6326 + -1 * 6326; t < i.length; t++) {
    var e = i[t];
    if (152 * 4 + -5125 + 4518 === t && e === "-" && i[1 * 6731 + 297 * -1 + -6434] === "-") return i;
    Yx(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var ns = function(i) {
  return i == null || i === !1 || i === "";
}, is = function(i) {
  var n, t, e = [];
  for (var A in i) {
    var o = i[A];
    i.hasOwnProperty(A) && !ns(o) && (Array.isArray(o) && o.isCss || Jt(o) ? e.push("".concat(ia(A), ":"), o, ";") : Ut(o) ? e.push.apply(e, Rt(Rt(["".concat(A, " {")], is(o), !1), ["}"], !1)) : e.push("".concat(ia(A), ": ").concat((n = A, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -8844 + 3 * 1813 + -1135 * -3 === t || n in rx || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function st(i, n, t, e) {
  if (ns(i)) return [];
  if (tr(i)) return [".".concat(i.styledComponentId)];
  if (Jt(i)) {
    if (!Jt(o = i) || o.prototype && o.prototype.isReactComponent || !n) return [i];
    var A = i(n);
    return Z.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof na || Ut(A) || A === null || console.error("".concat(Vg(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), st(A, n, t, e);
  }
  var o;
  return i instanceof na ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Ut(i) ? is(i) : Array.isArray(i) ? Array.prototype.concat.apply(di, i.map(function(r) {
    return st(r, n, t, e);
  })) : [i.toString()];
}
function Px(i) {
  for (var n = -3100 * 3 + -5 * -333 + 7635 * 1; n < i.length; n += -5875 * 1 + 2870 + 3006) {
    var t = i[n];
    if (Jt(t) && !tr(t)) return !1;
  }
  return !0;
}
var Tx = Zg(Qi), Hx = function() {
  function i(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = Z.NODE_ENV === "production" && (void (-3885 * 2 + 2 * 2705 + 2360) === e || e.isStatic) && Px(n), this.componentId = t, this.baseHash = At(Tx, t), this.baseStyle = e, es.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(n, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = tt(A, this.staticRulesId);
      else {
        var o = ta(st(this.rules, n, t, e)), r = n0(At(this.baseHash, o) >>> 0);
        if (!t.hasNameForId(this.componentId, r)) {
          var a = e(o, ".".concat(r), void 0, this.componentId);
          t.insertRules(this.componentId, r, a);
        }
        A = tt(A, r), this.staticRulesId = r;
      }
    else {
      for (var g = At(this.baseHash, e.hash), s = "", I = -43 * -205 + -5368 + -3447; I < this.rules.length; I++) {
        var c = this.rules[I];
        if (typeof c == "string") s += c, Z.NODE_ENV !== "production" && (g = At(g, c));
        else if (c) {
          var Q = ta(st(c, n, t, e));
          g = At(g, Q + I), s += Q;
        }
      }
      if (s) {
        var x = n0(g >>> 0);
        t.hasNameForId(this.componentId, x) || t.insertRules(this.componentId, x, e(s, ".".concat(x), void (-89 * -47 + 1 * 2896 + -7079), this.componentId)), A = tt(A, x);
      }
    }
    return A;
  }, i;
}(), rs = It.createContext(void (1 * -4403 + 4829 * 1 + -2 * 213));
rs.Consumer;
var vi = {}, ra = /* @__PURE__ */ new Set();
function Kx(i, n, t) {
  var e = tr(i), A = i, o = !Fi(i), r = n.attrs, a = void (-1 * 1186 + 1503 * -2 + 4192) === r ? di : r, g = n.componentId, s = void (1 * -4809 + 1701 + 3108) === g ? function(R, J) {
    var M = typeof R != "string" ? "sc" : zr(R);
    vi[M] = (vi[M] || -808 + -3660 * -1 + -2852) + (3339 * -2 + -478 + 7157);
    var tA = "".concat(M, "-").concat(Cx(Qi + M + vi[M]));
    return J ? "".concat(J, "-").concat(tA) : tA;
  }(n.displayName, n.parentComponentId) : g, I = n.displayName, c = void (-628 * 7 + 9543 + -5147) === I ? function(R) {
    return Fi(R) ? "styled.".concat(R) : "Styled(".concat(Vg(R), ")");
  }(i) : I, Q = n.displayName && n.componentId ? "".concat(zr(n.displayName), "-").concat(n.componentId) : n.componentId || s, x = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, d = n.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var E = A.shouldForwardProp;
    if (n.shouldForwardProp) {
      var f = n.shouldForwardProp;
      d = function(R, J) {
        return E(R, J) && f(R, J);
      };
    } else d = E;
  }
  var C = new Hx(t, Q, e ? A.componentStyle : void (6 * 1297 + -59 * 158 + 20 * 77));
  function h(R, J) {
    return function(M, tA, HA) {
      var cA = M.attrs, _A = M.componentStyle, iA = M.defaultProps, jt = M.foldedComponentIds, mr = M.styledComponentId, Mc = M.target, Wc = It.useContext(rs), Lc = a0(), mi = M.shouldForwardProp || Lc.shouldForwardProp;
      Z.NODE_ENV !== "production" && mn(mr);
      var yr = sx(tA, Wc, iA) || Ot, ye = function(Uo, Vt, Yo) {
        var ut = {};
        ut.className = void (1359 + 1 * -1637 + 278), ut.theme = Yo;
        for (var wi, qe = ZA(ZA({}, Vt), ut), Di = 7231 + -247 * 39 + 1 * 2402; Di < Uo.length; Di += 1201 * 3 + 685 + -4287) {
          var Po = Jt(wi = Uo[Di]) ? wi(qe) : wi;
          for (var Me in Po) qe[Me] = Me === "className" ? tt(qe[Me], Po[Me]) : Me === "style" ? ZA(ZA({}, qe[Me]), Po[Me]) : Po[Me];
        }
        return Vt.className && (qe.className = tt(qe.className, Vt.className)), qe;
      }(cA, tA, yr), qt = ye.as || Mc, Zt = {};
      for (var zA in ye) void (-9123 + 89 * 26 + -11 * -619) === ye[zA] || zA[-4532 + 7247 * 1 + -2715 * 1] === "$" || zA === "as" || zA === "theme" && ye.theme === yr || (zA === "forwardedAs" ? Zt.as = ye.forwardedAs : mi && !mi(zA, qt) || (Zt[zA] = ye[zA], mi || Z.NODE_ENV !== "development" || eI(zA) || ra.has(zA) || !o0.has(qt) || (ra.add(zA), console.warn('styled-components: it looks like an unknown prop "'.concat(zA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var yi = function(Uo, Vt) {
        var Yo = a0(), ut = Uo.generateAndInjectStyles(Vt, Yo.styleSheet, Yo.stylis);
        return Z.NODE_ENV !== "production" && mn(ut), ut;
      }(_A, ye);
      Z.NODE_ENV !== "production" && M.warnTooManyClasses && M.warnTooManyClasses(yi);
      var bi = tt(jt, mr);
      return yi && (bi += " " + yi), ye.className && (bi += " " + ye.className), Zt[Fi(qt) && !o0.has(qt) ? "class" : "className"] = bi, Zt.ref = HA, YA(qt, Zt);
    }(b, R, J);
  }
  h.displayName = c;
  var b = It.forwardRef(h), k = {};
  return k.attrs = !0, k.componentStyle = !0, k.displayName = !0, k.foldedComponentIds = !0, k.shouldForwardProp = !0, k.styledComponentId = !0, k.target = !0, b.attrs = x, b.componentStyle = C, b.displayName = c, b.shouldForwardProp = d, b.foldedComponentIds = e ? tt(A.foldedComponentIds, A.styledComponentId) : "", b.styledComponentId = Q, b.target = e ? A.target : i, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = e ? function(J) {
      for (var M = [], tA = 5 * 453 + -1244 * 5 + 3956; tA < arguments.length; tA++) M[tA - (-1 * -8527 + 8488 * -1 + -38 * 1)] = arguments[tA];
      for (var HA = 65 * 128 + 9883 + -18203, cA = M; HA < cA.length; HA++) i0(J, cA[HA], !0);
      return J;
    }({}, A.defaultProps, R) : R;
  } }), Z.NODE_ENV !== "production" && (gx(c, Q), b.warnTooManyClasses = /* @__PURE__ */ function(R, J) {
    var M = {}, tA = !1;
    return function(HA) {
      if (!tA && (M[HA] = !0, Object.keys(M).length >= -6498 + 7204 * 1 + 253 * -2)) {
        var cA = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(7933 * 1 + -6163 * -1 + -13896 * 1, " classes were generated for component ").concat(R).concat(cA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), tA = !0, M = {};
      }
    };
  }(c, Q)), or(b, function() {
    return ".".concat(b.styledComponentId);
  }), o && $g(b, i, k), b;
}
function aa(i, n) {
  for (var t = [i[3 * 928 + -3416 + 632]], e = 964 + -4 * -1606 + -7388, A = n.length; e < A; e += -2 * 3030 + 8012 + 1 * -1951) t.push(n[e], i[e + (-6069 + 5051 * 1 + -1019 * -1)]);
  return t;
}
var ga = function(i) {
  var n = {};
  return n.isCss = !0, Object.assign(i, n);
};
function jx(i) {
  for (var n = [], t = 2762 + -2 * -686 + 1 * -4133; t < arguments.length; t++) n[t - (-2051 * 3 + -853 + -1001 * -7)] = arguments[t];
  if (Jt(i) || Ut(i)) return ga(st(aa(di, Rt([i], n, !0))));
  var e = i;
  return -5 * 820 + 1394 + 451 * 6 === n.length && e.length === 1 && typeof e[-1 * 9617 + 19 * -190 + 13227] == "string" ? st(e) : ga(st(aa(e, n)));
}
function g0(i, n, t) {
  if (void (1463 * 5 + 6739 * 1 + -14054) === t && (t = Ot), !n) throw Kt(6432 + -1 * 5109 + -1322, n);
  var e = function(A) {
    for (var o = [], r = 1; r < arguments.length; r++) o[r - (-6359 * 1 + -1 * -3474 + -2 * -1443)] = arguments[r];
    return i(n, t, jx.apply(void (8917 + -241 * 37), Rt([A], o, !1)));
  };
  return e.attrs = function(A) {
    return g0(i, n, ZA(ZA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return g0(i, n, ZA(ZA({}, t), A));
  }, e;
}
var as = function(i) {
  return g0(Kx, i);
}, Mo = as;
o0.forEach(function(i) {
  Mo[i] = as(i);
});
Z.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qo = "__sc-".concat(xt, "__");
Z.NODE_ENV !== "production" && Z.NODE_ENV !== "test" && typeof window < "u" && (window[qo] || (window[qo] = -9224 * 1 + -3726 + 1850 * 7), 2688 + -1 * 7 + -2680 === window[qo] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qo] += -6278 + -21 * -299);
const qx = Mo.div`
  position: relative;
`, Zx = Mo.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class U extends Error {
  constructor(t, e) {
    super(t);
    F(this, "cause");
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
const cn = {};
cn.CONTINUE_DETECTION = "continue-detection", cn.SWITCH_CAMERA = "switch-camera", cn.TOGGLE_MIRROR = "toggle-mirror";
const Ri = cn, s0 = {};
s0.FIRST_FRAME = "first-frame", s0.FIRST_VALID_FRAME = "first-valid-frame";
const Mi = s0, gs = {};
gs.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const sa = gs;
var ss = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(ss || {}), Vx = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(Vx || {}), _x = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(_x || {}), zx = ((i) => (i.CONTROL = "smile-auto-capture:control", i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(zx || {}), Te = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(Te || {}), Xx = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(Xx || {});
const c0 = {};
c0.FRONT = "user", c0.REAR = "environment";
const wn = c0, I0 = {};
I0.AUTO_CAPTURE = "AUTO_CAPTURE", I0.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const x0 = I0, oo = {};
oo.LOADING = "LOADING", oo.ERROR = "ERROR", oo.WAITING = "WAITING", oo.RUNNING = "RUNNING";
const mA = oo, cs = { ...mA };
cs.DONE = "DONE";
const ca = cs;
var $x = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))($x || {});
const Qe = {};
Qe.CANDIDATE_SELECTION = "candidate_selection", Qe.PALM_CENTERING = "palm_centering", Qe.PALM_NOT_PRESENT = "palm_not_present", Qe.PALM_TOO_FAR = "palm_too_far", Qe.PALM_TOO_CLOSE = "palm_too_close", Qe.SHARPNESS_TOO_LOW = "sharpness_too_low", Qe.BRIGHTNESS_TOO_LOW = "brightness_too_low", Qe.BRIGHTNESS_TOO_HIGH = "brightness_too_high", Qe.DEVICE_PITCHED = "device_pitched";
const de = Qe, we = {};
we.isPresent = de.PALM_NOT_PRESENT, we.isNotPitched = de.DEVICE_PITCHED, we.isNotSmall = de.PALM_TOO_FAR, we.isNotOutOfBounds = de.PALM_CENTERING, we.isNotDim = de.BRIGHTNESS_TOO_LOW, we.isNotBright = de.BRIGHTNESS_TOO_HIGH, we.isSharp = de.SHARPNESS_TOO_LOW, we.isNotLarge = de.PALM_TOO_CLOSE;
const AC = we, Ei = Qt(void 0);
Ei.displayName = "AppStateContext";
function je() {
  const i = Re(Ei);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const eC = Ei.Provider;
class Is extends oe {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const n = new U("An unknown error has occurred");
    (t = this.context) == null || t.handleError(n);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var n;
    return ((n = this.context) == null ? void 0 : n.appState) === mA.ERROR ? null : this.props.children;
  }
}
F(Is, "contextType", Ei);
const tC = Mo.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, oC = Mo.div`
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
function nC() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const iC = wg(
  ({ detectionDetails: i, isImageMirror: n }, t) => nC() ? (console.log(i), /* @__PURE__ */ w(ce, { children: [
    /* @__PURE__ */ w(tC, { ref: t, $isImageMirror: n }),
    /* @__PURE__ */ w(oC, { children: /* @__PURE__ */ w("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), Dn = Qt(void 0);
Dn.displayName = "AnalyticsContext";
function rC() {
  const i = Re(Dn);
  if (i === void 0)
    throw new Error(`${Dn.displayName} must be used within a AnalyticsProvider`);
  return i;
}
(function(i, n) {
  function t(a, g, s, I, c) {
    return vA(c - 509, I);
  }
  const e = i();
  function A(a, g, s, I, c) {
    return vA(I - 339, g);
  }
  function o(a, g, s, I, c) {
    return vA(c - -796, a);
  }
  function r(a, g, s, I, c) {
    return vA(g - -850, c);
  }
  for (; ; )
    try {
      if (parseInt(A(463, "Nmbo", 441, 457, 469)) / 1 * (parseInt(A(485, "B)19", 489, 474, 469)) / 2) + parseInt(A(474, "^%Fl", 460, 466, 447)) / 3 * (parseInt(t(632, 657, 643, "#dxV", 651)) / 4) + parseInt(o("5@6P", -667, -639, -665, -648)) / 5 + parseInt(A(485, "Sk]Y", 473, 489, 504)) / 6 * (parseInt(r(-707, -725, -717, -734, "RFps")) / 7) + -parseInt(A(451, "ELOo", 482, 469, 461)) / 8 * (-parseInt(t(670, 682, 672, "HJ*v", 663)) / 9) + parseInt(o("riE(", -683, -661, -678, -677)) / 10 * (-parseInt(r(-720, -705, -715, -694, "lzA(")) / 11) + -parseInt(A(466, "pHYg", 472, 460, 470)) / 12 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sn, 30906 + -3357 * -68);
function aC(i, n, t, e, A) {
  return vA(i - 681, A);
}
function C0(i, n, t, e, A) {
  return vA(n - -979, A);
}
function gC(i, n, t, e, A) {
  return vA(i - -404, e);
}
const kn = Qt(void (5806 * -1 + -708 * -11 + -1982));
function Gn(i, n, t, e, A) {
  return vA(n - 205, i);
}
function Sn() {
  const i = ["WOhdJCkNWPDEWRCBWQq", "WPS5FadcISk6W7LSW7XdW7VcUW", "tHZdKCodua", "W60kWRu5W5rgW60", "WQ3cPqClymokfZi", "W5RdUCoQimkA", "vCowW6uUvq", "W7OBfwXIs1X+D8oPW4hcM8oA", "WOpdS25oiq", "W4q5gslcOmoBW63cGq", "W55QvCotACkBWP4pW7/dTCkHoLm", "vsOKmCoz", "DZpcK8oVabNdVsK", "zSksBGFdUYddQrTpfCoUWPe", "pSoAeLtcRW", "g03cKSkgbtZdUw7dVCoqWOlcUru", "W63dMZxdV8oUW6hcGq", "W5q9WQBdR13cJCoLW4Pqvb/cK8ku", "WR3dTIG", "WP7cTCoHW5/cTSkCW4HWxWXqpSoc", "W53dPmoQWP7cUq", "W4FdUZ1Yja", "WPO/p0ZdVmoxW59U", "FSkfWPVcPZ8OW7tcNComya", "WQRdTHNdOSoQ", "awq7errrW7m", "W5VdOSk1W4JdSq", "W6KFWQTvB18+WPyBW4aBW4G", "W7pdSCo/uCkuWQlcL8o+", "AmkUWQldQCkcr0ZdTge2m8kJW5u", "WOS9c8kxpa", "W67cOmo/W4aL", "i8o4W4xcKa", "pHnCW65JW7ddSSoPW4aCW5KZ", "W5SQjmkamSoBW4i", "FXJcPCkAF8kDWOr4W43dJ3Hu", "kSknWRn/cYdcHtFdMCo9W7m4", "aM7cScvkW7G5g1pdSq", "W5jTkgdcLa"];
  return Sn = function() {
    return i;
  }, Sn();
}
function vA(i, n) {
  const t = Sn();
  return vA = function(e, A) {
    e = e - 117;
    let o = t[e];
    if (vA.iCuGVY === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      vA.HDMafP = I, i = arguments, vA.iCuGVY = !0;
    }
    const a = t[15 * -296 + -3 * 1636 + -492 * -19], g = e + a, s = i[g];
    return s ? o = s : (vA.vjrcib === void 0 && (vA.vjrcib = !0), o = vA.HDMafP(o, A), i[g] = o), o;
  }, vA(i, n);
}
kn[aC(824, 842, 809, 829, "Exd!") + Gn("rt0B", 357) + "e"] = C0(-847, -832, -820, -837, "5Lnm") + C0(-847, -853, -866, -849, "Nmbo") + Gn("C9Lb", 339);
function Wo() {
  function i(o, r, a, g, s) {
    return C0(o - 422, r - 683, a - 5, g - 106, a);
  }
  const n = Re(kn);
  function t(o, r, a, g, s) {
    return Gn(o, r - -825);
  }
  if (n === void (-6116 + 6 * 257 + 4574)) throw new Error(kn[t("8@Y7", -497) + t("HJ*v", -465) + "e"] + (e("Ty7h", 250, 236) + A("Sk]Y", 701, 721, 707) + t("pHYg", -492) + e("v@WQ", 237, 234) + i(-132, -147, "8@Y7", -157) + e("0mE@", 236, 227) + e("W]7O", 226, 222) + i(-189, -176, "Nmbo", -185)));
  function e(o, r, a, g, s) {
    return gC(r - 508, r - 214, a - 24, o);
  }
  function A(o, r, a, g, s) {
    return Gn(o, g - 362);
  }
  return n;
}
const Zo = (i, n) => Math.hypot(n.x - i.x, n.y - i.y), Nn = (i) => i.length < -4562 + 1 * -3583 + 8146 * 1 ? 0 : i.reduce((t, e) => t + e, -2951 + 2951 * 1) / i.length, Yt = (i) => Number.parseFloat(i.toFixed(15137 + -161 * 94)), sC = (i) => {
  const { bottomLeft: n, bottomRight: t, topLeft: e, topRight: A } = i, o = Zo(e, A), r = Zo(A, t), a = Zo(n, t), g = Zo(e, n);
  return Math.min(o, r, a, g);
}, cC = (i) => {
  const n = i.getContext("2d");
  n && n.clearRect(-3169 + -1 * 4837 + 8006, -1346 * 4 + -1457 + 6841 * 1, n.canvas.width, n.canvas.height);
}, xs = -2 * 1103 + -4405 + 11 * 601 + 0.85, IC = -7143 + 29 * -240 + -1 * -14703, xC = 9117 + 3 * -3039, CC = "dot-auto-capture-video", ir = (i, n) => Math.min(i, n), Cs = ({ height: i, width: n }, t) => {
  const e = ir(n, i) * t, A = (n - e) / (-2284 * 2 + 15 * -543 + 12715), o = (i - e) / (-111 * 43 + -9256 + 3 * 4677), r = {};
  return r.shiftX = A, r.shiftY = o, r.width = e, r.height = e, r;
}, BC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = Cs(i, n), r = {};
  return r.shiftX = e / i.width, r.shiftY = A / i.height, r.width = o / i.width, r.height = t / i.height, r;
}, QC = ({ height: i, width: n }) => {
  const t = ir(n, i), e = t / (-3 * -2481 + -1 * -8005 + -15445) * (-984 + 605 * -1 + -1593 * -1);
  if (n > i) {
    const o = {};
    return o.width = e, o.height = t, o;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, dC = ({ height: i, width: n }) => {
  const t = {};
  return t.height = i, t.width = n, Cs(t, xs);
}, EC = (i) => BC(i, xs), lC = "@innovatrics/dot-common-auto-capture", uC = "7.3.2", fC = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, hC = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, pC = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, mC = {
  name: lC,
  private: !0,
  version: uC,
  scripts: fC,
  dependencies: hC,
  devDependencies: pC
}, In = {};
In.minDuration = 1e3, In.maxDuration = 2500, In.minFrames = 10;
const Wi = In, B0 = {};
B0.max = 100, B0.min = 10;
const Ia = B0, yC = -1 * 7858 + 301 + 8277, bC = -2715 * -3 + -1 * 9166 + 1221, wC = 142 * 11 + -5584 + -6 * -671, no = {};
no.width = 200, no.height = 200, no.top = 50, no.left = 50;
const DC = no, Fn = "AES-CBC", Bs = "RSA-OAEP", kC = "SHA-256", GC = "image/jpeg", SC = 1323 + 67 * -45 + 1700, Qs = "/dot-assets", xa = "dot_embedded_bg.wasm", li = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
function Ca() {
  return /Android/i.test(navigator.userAgent);
}
function Eo() {
  return /Firefox/i.test(navigator.userAgent);
}
const NC = () => {
  const i = navigator.userAgent.includes("Chrome"), n = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && n ? !1 : n;
}, Q0 = (i) => new Promise((n) => {
  setTimeout(n, i);
}), FC = (i) => JSON.parse(JSON.stringify(i, (n, t) => typeof t == "number" ? Yt(t) : t)), ds = () => mC.version, Es = (i) => new URL(i).hostname.replace("www.", ""), vC = () => Es(window.location.href) === "localhost", Vo = (i) => Object.entries(i).map(([n, t]) => encodeURIComponent(n) + "=" + encodeURIComponent(t)).join("&"), RC = (i, n) => JSON.stringify(i) === JSON.stringify(n) ? n : i;
function MC(i) {
  return i.at(-(6 * 493 + 5940 + -217 * 41)) === "/" ? i.slice(1 * -4091 + 537 * 10 + -1279, -(-2402 + -27 * -89)) : i;
}
function ls(i) {
  return "" + MC(i ?? "") + Qs;
}
function Io() {
  return !1;
}
const WC = () => "prod".toLowerCase() === "dev";
var Je;
class us extends Array {
  constructor(t) {
    super();
    z(this, Je);
    _(this, Je, t);
  }
  get size() {
    return v(this, Je);
  }
  pushFixed(...t) {
    if (t.length > v(this, Je)) {
      const e = t.slice(-v(this, Je));
      this.push(...e);
      return;
    }
    this.length === v(this, Je) && this.splice(-2262 * -3 + -1 * 2996 + -3790, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4411 * 1 + 6035 * -1 + 10446);
  }
}
Je = new WeakMap();
const fs = (i, n, t = GC) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, n);
}), LC = async (i) => fs(i, 1 * 9149 + 4523 + -13582), OC = async (i) => fs(i, -257 * 13 + -2186 + 5627 * 1, "image/png"), hs = (i, n) => {
  const t = document.createElement("canvas");
  t.width = n.width, t.height = n.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, n.shiftX, n.shiftY, n.width, n.height, -41 * 91 + 6006 + 7 * -325, -1 * -2053 + 9346 + -11399, t.width, t.height), t;
}, JC = (i) => {
  const n = i.getContext("2d");
  if (!n) throw new Error("getImageDataForSam ctx error");
  const { data: t } = n.getImageData(83 * -89 + 6146 + 1241, 5404 + 28 * -193, i.width, i.height);
  return t;
};
function Ba(i, n, t) {
  return t - n / (-1686 * 2 + 67 * 115 + 71 * -61) < -43 * -130 + -2056 + -3534 ? -1575 + 5 * 458 + -715 : t + n / (8 * -479 + -1029 * -1 + -2805 * -1) > i ? i - n : t - n / (1 * 8187 + -13 * -97 + -2 * 4723);
}
function UC(i, n) {
  const t = i.width, e = i.height, A = t * (n.left / (7 * -1249 + -2230 + 11073)), o = e * (n.top / (-8993 + -8 * 526 + 13301));
  return { width: n.width, height: n.height, shiftX: Ba(t, n.width, A), shiftY: Ba(e, n.height, o) };
}
async function YC(i, n) {
  const t = UC(i, n), e = hs(i, t);
  return OC(e);
}
const PC = (i, n, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(n.topLeft.x, n.topLeft.y, n.width, n.height), A.stroke());
}, Li = (i, n, t) => {
  const { height: e, shiftX: A, shiftY: o, width: r } = n, a = {};
  a.x = A, a.y = o;
  const g = {};
  g.topLeft = a, g.width = r, g.height = e, g.color = t, PC(i, g, t);
};
function TC({ canvas: i, color: n, fill: t, offset: e = 11138 + -2 * 5569, polygon: A }) {
  const o = i.getContext("2d");
  if (!o) return;
  const { bottomLeft: r, bottomRight: a, topLeft: g, topRight: s } = A;
  t ? o.fillStyle = n : o.strokeStyle = n, o.beginPath(), o.moveTo(g.x + e, g.y + e), o.lineTo(s.x + e, s.y + e), o.lineTo(a.x + e, a.y + e), o.lineTo(r.x + e, r.y + e), o.closePath(), t ? o.fill() : o.stroke();
}
const HC = (i, n) => {
  const { height: t, shiftX: e, shiftY: A, width: o } = n;
  return !(i.x < e || i.x > e + o || i.y < A || i.y > A + t);
}, KC = (i, n) => Object.values(i).every((t) => HC(t, n));
function vn(i) {
  const { height: n, width: t } = QC(i), e = (i.width - t) / (49 * 55 + -373 * 23 + 5886), A = (i.height - n) / (-1004 * 4 + 1 * -6821 + 10839), o = {};
  return o.shiftX = e, o.shiftY = A, o.width = t, o.height = n, o;
}
function ps(i, n, t) {
  const { height: e, width: A } = t, o = ir(i.width, i.height), r = A - o * n * (-5 * -1787 + 1 * -8867 + -66), a = e - o * n * 2, g = (i.width - r) / (4784 + 6 * -797), s = (i.height - a) / (-14330 + 1 * 14332), I = {};
  return I.shiftX = g, I.shiftY = s, I.width = r, I.height = a, I;
}
function _o(i, n) {
  const { shiftX: t, shiftY: e } = n, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function jC(i, n) {
  return { ...i, topLeft: _o(i.topLeft, n), topRight: _o(i.topRight, n), bottomRight: _o(i.bottomRight, n), bottomLeft: _o(i.bottomLeft, n) };
}
function qC(i, n) {
  const t = sC(i), e = Math.min(n.width, n.height), A = t / e, o = { ...i };
  return o.smallestEdge = A, o;
}
(function(i, n) {
  function t(g, s, I, c, Q) {
    return wA(c - 303, Q);
  }
  function e(g, s, I, c, Q) {
    return wA(Q - -820, c);
  }
  function A(g, s, I, c, Q) {
    return wA(s - -509, c);
  }
  function o(g, s, I, c, Q) {
    return wA(I - -445, g);
  }
  const r = i();
  function a(g, s, I, c, Q) {
    return wA(s - -921, c);
  }
  for (; ; )
    try {
      if (-parseInt(e(-567, -569, -585, "o4K1", -573)) / 1 + -parseInt(e(-572, -579, -570, "ZK5#", -578)) / 2 * (-parseInt(e(-584, -575, -557, "mUtB", -572)) / 3) + parseInt(e(-555, -560, -557, "n3&N", -571)) / 4 * (parseInt(A(-294, -284, -288, "0IEu", -283)) / 5) + -parseInt(A(-274, -285, -283, "o4K1", -289)) / 6 * (parseInt(A(-269, -277, -284, "ioOb", -275)) / 7) + parseInt(t(555, 536, 535, 542, "QfTr")) / 8 * (parseInt(a(-680, -683, -696, "3rsj", -678)) / 9) + parseInt(o("q*OW", -187, -195, -185, -196)) / 10 * (parseInt(A(-278, -273, -278, "ZK5#", -276)) / 11) + -parseInt(A(-264, -278, -294, "!)$C", -287)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Rn, -89510 * 5 + 103 * -722 + 799777);
function Rn() {
  const i = ["WRddTLnAkq", "W4lcOdFcV8odlCoOA8kLhmoPkG", "W7lcGCk9xuldOqS2", "WRdcPtFdTa", "jZ7dRG9Q", "W78sxLOZW5C/W4q6xXq", "W6NdU8o+iCoBWOnNW4HRFgO", "W7zDW4xcLmkj", "WRBcIHVdSmkOWRFdImotW63dLCowC8kh", "WOfJBgjlpSkk", "W40lW73cMLi", "WO1yW5qcW6JdHCkcBmoNjmohea", "W67cP8kkqCkgWPjk", "mCoiEmkBxgX3gZu", "W6ddU2/cSJJcTKZdGtdcLr0P", "xv5+WR90gfFdJM/dQSkrCq", "iCo5mmoVW7tdLMGIWRZcMCkBW6q", "W4ZcMCoIiwNcVg9iWPpcQqxdMW", "mSoeESoBa2THbXXbpa", "ACo3WQfac38XpmkgWRRdN8oE", "A8kVm8kdW5GAc8oNW74", "iCo6mmoSW7tdMHGIWP7cQ8kbW4pdMa", "g8oTW4RcHIHeW7K", "h8kXW4FcHZvqW5hdNW", "AqD9uXa", "W4ZcNmoUjg7cTNTmWP/cSchdVG", "jmo8rmk0WPxcH2Kc", "W64EDxnmW7tcI8ot", "WOqyWOzkWQJcGmke", "WRvTimkDW6ayW4BcRCo5mCk5", "pCkEF8oRDq"];
  return Rn = function() {
    return i;
  }, Rn();
}
function wA(i, n) {
  const t = Rn();
  return wA = function(e, A) {
    e = e - 220;
    let o = t[e];
    if (wA.GHXDGr === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      wA.hCbuuS = I, i = arguments, wA.GHXDGr = !0;
    }
    const a = t[19 * 379 + 39 * -67 + -4588], g = e + a, s = i[g];
    return s ? o = s : (wA.JbEkgJ === void 0 && (wA.JbEkgJ = !0), o = wA.hCbuuS(o, A), i[g] = o), o;
  }, wA(i, n);
}
function ZC({ assetsDirectoryPath: i, bramble: n }) {
  const [t, e] = PA(), A = t !== void (8 * -927 + 7586 + 34 * -5);
  function o(g, s, I, c, Q) {
    return wA(c - 703, s);
  }
  aA(() => {
    async function g() {
      await n[s("827v", -747, -776, -761)](ls(i));
      function s(c, Q, x, d, E) {
        return wA(d - -994, c);
      }
      function I(c, Q, x, d, E) {
        return wA(E - 318, c);
      }
      e(n[I("Kjh!", 569, 551, 542, 555) + s("iOO(", -781, -777, -765) + s("Yu(Q", -772, -786, -771) + "t"]());
    }
    g();
  }, [n, i, e]);
  const r = {};
  r[a(593, "H9K4", 594, 607) + o(939, "YR)d", 940, 943)] = t, r[o(945, "a826", 947, 933) + "sh"] = A;
  function a(g, s, I, c, Q) {
    return wA(c - 373, s);
  }
  return r;
}
var ms = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(ms || {});
const d0 = {};
d0.SIMD = "simd", d0.NO_SIMD = "no-simd";
const Qa = d0, E0 = {};
E0.Lower = "Lower", E0.Higher = "Higher";
const l0 = E0, xn = {};
xn.VISIBLE = "VISIBLE", xn.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", xn.HIDDEN = "HIDDEN";
const Mn = xn, u0 = {};
u0.MOBILE = "MOBILE", u0.DESKTOP = "DESKTOP";
const da = u0;
function jA(i, n) {
  var t = Wn();
  return jA = function(e, A) {
    e = e - (2623 + -35 * -255 + -11158 * 1);
    var o = t[e];
    if (jA.rwFHhn === void 0) {
      var r = function(c) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", d = "", E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (var b = 0, k = x.length; b < k; b++)
          d += "%" + ("00" + x.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, a = function(c, Q) {
        var x = [], d = 0, E, f = "";
        c = r(c);
        var C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (var h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      jA.vRoLBq = a, i = arguments, jA.rwFHhn = !0;
    }
    var g = t[4735 * -1 + -5156 + 9891], s = e + g, I = i[s];
    return I ? o = I : (jA.bDaxla === void 0 && (jA.bDaxla = !0), o = jA.vRoLBq(o, A), i[s] = o), o;
  }, jA(i, n);
}
(function(i, n) {
  function t(s, I, c, Q, x) {
    return jA(c - 264, s);
  }
  function e(s, I, c, Q, x) {
    return jA(x - -102, s);
  }
  function A(s, I, c, Q, x) {
    return jA(x - 570, I);
  }
  function o(s, I, c, Q, x) {
    return jA(x - 46, s);
  }
  var r = i();
  function a(s, I, c, Q, x) {
    return jA(I - 216, c);
  }
  for (; ; )
    try {
      var g = -parseInt(a(618, 618, "O8]h", 625, 619)) / 1 * (parseInt(e("GBKl", 303, 285, 302, 292)) / 2) + parseInt(a(633, 622, "0R!Z", 626, 624)) / 3 * (-parseInt(a(620, 620, "IV9J", 631, 613)) / 4) + parseInt(A(967, "ATKk", 978, 981, 977)) / 5 * (-parseInt(t("2zNJ", 682, 675, 676, 665)) / 6) + parseInt(a(617, 611, "zvdQ", 604, 607)) / 7 * (-parseInt(t("^(MV", 664, 663, 668, 661)) / 8) + -parseInt(o("rCtO", 453, 451, 449, 458)) / 9 + parseInt(o("#JMa", 453, 440, 435, 444)) / 10 + parseInt(a(617, 608, "33wB", 610, 597)) / 11;
      if (g === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wn, 21367 * -14 + -325715 + 940755);
function Wn() {
  var i = ["v8ofaa9dWOOsiCk7auC", "W6PeiwZcUcqmW4O", "W6ZcLCoTESkEW5BdTrlcK8oLWP/dHW", "WRDqlIBcLSoLpXJdGYus", "WQa7A8o6WR/cQ07cGCoIwa", "n8o0W5VcKx7cPmk7WPLXW4S3edO", "WO3dISk4W7BcULVcPmkV", "kmkCt14b", "WPypWRRcLJLTzWDoWQy", "n8o2WORdRaldSCokWQq", "puztW7ZdIX5fW5FdQG", "WRbXCqfrWOrjW6m", "WRvsj1ddVmouccNdPW", "W57dI8kCW5X7WRH4jCo+WQm", "CLNcOSkGtq9Gcc/dPSoCECo7aq", "nbj+WPWaWOTdW6JcSchdKCkbzq", "Ea7cIXxdJ2r4sf5VW53dNSoy", "mmouAJ/dNq", "WPSdprm2", "AmkzzKCvW5zXW6tcP3bpaG", "WQTKzCovW5WlW4tcNmoPf8kGENC", "vCoaaaHlW6TaumkFmeVcQCo+ia", "gt/cOvVdMXTZWPm", "ccZcT8orDCknW6z5W7OJ", "W6xdVCkokWhcVcBcJa"];
  return Wn = function() {
    return i;
  }, Wn();
}
function VC({ crosshatch: i }) {
  function n(t, e, A, o, r) {
    return jA(r - -443, A);
  }
  return i != null && i[n(-32, -27, "ODQB", -33, -30) + "id"] ? l0[n(-23, -38, "xzm8", -23, -29) + "r"] : l0[n(-48, -31, "33wB", -50, -40)];
}
function DA(i, n) {
  const t = Ln();
  return DA = function(e, A) {
    e = e - (-9843 + 23 * -4 + 795 * 13);
    let o = t[e];
    if (DA.wzfntU === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      DA.JLdMPv = I, i = arguments, DA.wzfntU = !0;
    }
    const a = t[-4755 + 19 * 319 + -1306], g = e + a, s = i[g];
    return s ? o = s : (DA.uQGPFL === void 0 && (DA.uQGPFL = !0), o = DA.JLdMPv(o, A), i[g] = o), o;
  }, DA(i, n);
}
(function(i, n) {
  function t(a, g, s, I, c) {
    return DA(I - -294, g);
  }
  function e(a, g, s, I, c) {
    return DA(g - -265, I);
  }
  function A(a, g, s, I, c) {
    return DA(s - -899, c);
  }
  function o(a, g, s, I, c) {
    return DA(g - -741, a);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(t(126, "f)Gu", 141, 134, 144)) / 1 * (parseInt(A(-507, -490, -492, -493, ")rpa")) / 2) + -parseInt(A(-485, -480, -491, -483, "nlg3")) / 3 * (-parseInt(A(-488, -502, -494, -484, "&[zh")) / 4) + -parseInt(o("H!lr", -318, -312, -333, -323)) / 5 + -parseInt(o("hxIi", -312, -322, -327, -307)) / 6 + parseInt(e(145, 145, 142, "IXn1", 140)) / 7 + -parseInt(e(139, 137, 127, "PMEJ", 148)) / 8 + parseInt(o("gfQw", -326, -332, -324, -328)) / 9 * (parseInt(t(137, "Ayvw", 112, 122, 136)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ln, -1303262 + 7 * 322513);
function Ln() {
  const i = ["fmkqxw/cQmkgv8omW65Upa", "WPGnW6/dGCoXWR9g", "WPtcSZa1WQlcLaDWW7z+W7G/WRhdHq", "W5veWRhcOqS", "gZ/cLSowW5pdKsxdGCos", "zI7cMq5y", "mLaW", "ja/cICk8WOa+js8RrCk4", "W7TCySoxWRSzy8ok", "WO5QW7uVrXBdUJFcGGhdPrTr", "EmoAW71Bg0rNW6VcMdldOLZcLW", "BtVcGH9j", "W4S8WQ0", "n8k1WOBcKfe", "p3/dNvueW43dUKhdRCo2WPy", "vXrEcLmkbs4VdIG+W4a", "qfxdPtSc", "WQvbdgKBWRxcHf/dRhFcRwVcJq", "W5BdJLW0fa", "hwi6WQ95", "WPFdKK3dJmkdWOzQBCkIW4jKWQyEzW", "WP/cOdxcN8ocW4yN", "W6y2jmoAia", "W6tcSSkAWRpdJrP6BdiJqa", "WOmFW6VdULZcHcP1iurSWRFcPq", "WRtcJaSSbmk5WQ9vW4y", "WQxcMHdcQmoUW6z+aW", "WOuDW6ZdVLBcHsOHbLTQWPlcKZ0", "ESorW75zge9IW7xcQJpdP1pcIW", "WR/cH8kdmq", "fK0csGy", "F0SCtSk7l8k7bH91WOejW4RcIa"];
  return Ln = function() {
    return i;
  }, Ln();
}
function _C({ assetsDirectoryPath: i, children: n, bramble: t }) {
  function e(d, E, f, C, h) {
    return DA(f - -491, C);
  }
  function A(d, E, f, C, h) {
    return DA(d - 45, f);
  }
  const o = {};
  o[e(-102, -98, -90, "f6B)") + "le"] = t, o[I("9#rE", 489) + A(449, 439, "HTVv") + Q(1305, 1311, 1302, 1314, "f)Gu") + A(456, 444, "@fws")] = i;
  const { sunfish: r, crosshatch: a } = ZC(o), g = {};
  g[e(-61, -57, -61, "(ry[") + A(464, 456, "f)Gu")] = a;
  const s = TA(() => ({ redfin: VC(g), sunfish: r, crosshatch: a, bramble: t }), [r, a, t]);
  function I(d, E, f, C, h) {
    return DA(E - 62, d);
  }
  const c = {};
  c[A(457, 452, "hxIi")] = s, c[A(462, 459, "r*Xd") + e(-75, -56, -65, "H!lr")] = n;
  function Q(d, E, f, C, h) {
    return DA(d - 880, h);
  }
  function x(d, E, f, C, h) {
    return DA(h - 834, d);
  }
  return w(kn[Q(1280, 1269, 1274, 1295, ")rpa") + x("^z$s", 1267, 1269, 1259, 1254)], c);
}
(function(i, n) {
  function t(g, s, I, c, Q) {
    return ee(g - 123, s);
  }
  var e = i();
  function A(g, s, I, c, Q) {
    return ee(g - -674, c);
  }
  function o(g, s, I, c, Q) {
    return ee(g - 784, Q);
  }
  function r(g, s, I, c, Q) {
    return ee(c - 579, g);
  }
  for (; ; )
    try {
      var a = parseInt(t(422, "Rlfb", 421, 417, 415)) / 1 + parseInt(o(1086, 1091, 1086, 1089, "TbKw")) / 2 + -parseInt(t(433, "ua6k", 426, 429, 428)) / 3 + -parseInt(t(428, "k23o", 436, 433, 430)) / 4 * (-parseInt(r("0VDQ", 873, 873, 874, 872)) / 5) + -parseInt(r("jO@e", 879, 877, 877, 870)) / 6 * (-parseInt(o(1084, 1091, 1078, 1092, "tXhl")) / 7) + -parseInt(o(1093, 1084, 1094, 1092, "j$IL")) / 8 + -parseInt(A(-381, -379, -379, "IKRE", -386)) / 9;
      if (a === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(On, 129275 * 7 + 1345494 + -1545436);
function On() {
  var i = ["WPRdSfv3W6ClWP8Re8ktW65yWPe", "bCk8WPXVW4WSs8kvW57dMmkaW7ZdIa", "lmovWRjfW43cOmkDWRdcJhikmZ8", "WPNcOSk1FMJdOL0raCkWlKy", "W7pdKaZcNCkUrCkgWOdcGmkezfLz", "WPRdQmoNcCkhW4VcQZvWW67cUmkHWQK", "ggJcRfisrw1sggBcTxlcJq", "W4FcPHRcSSopcCoqi3SBW6Cela", "W7pcLSoGFSouCSkHW7JcHmoXW53dTXK", "iSoNpeJcTSovmd9vW7xcPqvq", "w8kUgwRdQWKGzNC4rejs", "W6XzmSo1xmkaW4G", "hJ3dLcrmlI0", "W77dGCkycmkdhmoV", "WOSGsSoDEsNcHSk0W4ddLSkhzmkj", "WPxcRSkKBSo3WPldRW", "FmkwW5pcKSkzWPFdOtrBWQKIWPu", "W7bedbJcQYJcSCorW5NcLgddS8kW"];
  return On = function() {
    return i;
  }, On();
}
function ee(i, n) {
  var t = On();
  return ee = function(e, A) {
    e = e - (-3041 + 2 * 1667);
    var o = t[e];
    if (ee.PJwCUh === void 0) {
      var r = function(c) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", d = "", E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (var b = 0, k = x.length; b < k; b++)
          d += "%" + ("00" + x.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, a = function(c, Q) {
        var x = [], d = 0, E, f = "";
        c = r(c);
        var C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (var h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      ee.mGXDpM = a, i = arguments, ee.PJwCUh = !0;
    }
    var g = t[6209 + 1 * -6209], s = e + g, I = i[s];
    return I ? o = I : (ee.FUiVed === void 0 && (ee.FUiVed = !0), o = ee.mGXDpM(o, A), i[s] = o), o;
  }, ee(i, n);
}
function zC({ analytics: i, crosshatch: n }) {
  return n !== void (1 * -6410 + 222 * -39 + 15068) && !n.isAnalyticsDisabled ? i : void (11 * 147 + 11 * -559 + -1 * -4532);
}
function XC({ analytics: i, appKey: n, redfin: t, crosshatch: e, bramble: A }) {
  const o = {};
  o.analytics = i, o.crosshatch = e;
  const r = zC(o);
  return aA(() => {
    r && r.init(n);
  }, [r, n]), aA(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), r && r.walleye(t, A.getCustomerName()));
  }, [r, A, e, t]), aA(() => {
    if (r)
      return window.addEventListener("beforeunload", r.endSession), () => {
        r.endSession(), window.removeEventListener("beforeunload", r.endSession);
      };
  }, [r]), r;
}
function $C({
  analytics: i,
  appKey: n,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: o } = Wo(), r = XC({ analytics: i, redfin: e, appKey: n, crosshatch: A, bramble: o }), a = TA(
    () => ({
      analytics: r
    }),
    [r]
  );
  return /* @__PURE__ */ w(Dn.Provider, { value: a, children: t });
}
const rr = Qt(void 0);
rr.displayName = "CameraOptionsContext";
function ys() {
  const i = Re(rr);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}
function AB({
  assetsDirectoryPath: i,
  captureMode: n,
  onPhotoTaken: t,
  sessionToken: e
}) {
  return {
    onPhotoTaken: t,
    captureMode: n ?? x0.AUTO_CAPTURE,
    assetsDirectoryPath: ls(i),
    sessionToken: e
  };
}
function eB({
  cameraOptions: i,
  children: n
}) {
  const t = TA(() => AB(i), [i]);
  return /* @__PURE__ */ w(rr.Provider, { value: t, children: n });
}
const tB = (i, n) => {
  const t = {};
  t.detail = n, document.dispatchEvent(new CustomEvent(i, t));
}, ri = class ri {
  constructor() {
    F(this, "lastDetails", {});
    F(this, "delayedTime", -6466 + -504 * 10 + 5753 * 2);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ri()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1 * -2391 + 4787 * 1 + -2396;
  }
  isDetailChanged(n, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[n]) ? (this.lastDetails[n] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(n, t) {
    this.isDetailChanged(n, t) && tB(n, t);
  }
  dispatchDelayedCustomEventOnChange(n, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(n, t), this.delayedTime = A);
  }
};
F(ri, "_instance");
let lo = ri;
const Lo = lo.getInstance(), bs = (i, n, t = IC) => {
  const e = {};
  e.instructionCode = n.code, e.isEscalated = n.isEscalated ?? !1;
  const A = e;
  Lo.dispatchDelayedCustomEventOnChange(i, A, t);
}, Ea = (i, n) => {
  Lo.dispatchCustomEventOnChange(i, n);
}, oB = (i, n) => {
  Lo.dispatchCustomEventOnChange(i, n);
}, nB = (i, n) => {
  const t = {};
  t.size = n;
  const e = t;
  Lo.dispatchCustomEventOnChange(i, e);
}, iB = (i, n, t) => {
  const e = n.confidence < t ? void 0 : n, A = {};
  A.detectedObject = e;
  const o = A;
  Lo.dispatchCustomEventOnChange(i, o);
}, rB = (i, n) => {
  const { cameraResolution: t, shouldCameraMirror: e } = n;
  aA(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, oB(i, A);
  }, [t, e, i]);
};
function aB(i, n) {
  aA(() => {
    const t = (e) => {
      n(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [n, i]);
}
const gB = (i) => i === ss.CONTROL ? !li() : !0;
function sB(i, n) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: o } = je(), [r, a] = PA(), g = TA(() => {
    const d = o && n && n.isStreaming && n.getCameraSettings().facingMode;
    return d ? r ?? d === "user" : r ?? gB(i);
  }, [n, r, i, o]);
  function s() {
    t !== mA.LOADING && e(mA.RUNNING);
  }
  function I() {
    r === void (52 * 71 + -5 * -1231 + 9847 * -1) ? a(!g) : a(!r);
  }
  async function c() {
    if (n) {
      e(mA.LOADING);
      try {
        await n.switchCamera(), e(mA.RUNNING);
      } catch (d) {
        if (d instanceof Error) {
          A(U.fromCameraError(d));
          return;
        }
      }
      a(void (1131 + 671 * 3 + -3144));
    }
  }
  function Q(d) {
    var E;
    switch ((E = d.detail) == null ? void 0 : E["instruction"]) {
      case Ri.CONTINUE_DETECTION:
        s();
        break;
      case Ri.TOGGLE_MIRROR:
        I();
        break;
      case Ri.SWITCH_CAMERA:
        c();
        break;
      default:
        return;
    }
  }
  aB(i, Q);
  const x = {};
  return x.shouldCameraMirror = g, x;
}
function cB(i, n) {
  aA(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      nB(n, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, n]);
}
var IB = Symbol.for("preact-signals");
function ar() {
  if (Gt > 14 + 13 * -1)
    Gt--;
  else {
    for (var i, n = !1; void (156 * 49 + -2552 + -67 * 76) !== xo; ) {
      var t = xo;
      for (xo = void (5642 + -7 * -1008 + -14 * 907), f0++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void (-113 * -87 + 2435 + -6133 * 2), t.f &= -(5311 + 2654 * -2), !(-6303 + -101 * 53 + 11664 & t.f) && ks(t)) try {
          t.c();
        } catch (A) {
          !n && (i = A, n = !(313 * 29 + 1 * -5020 + 1 * -4057));
        }
        t = e;
      }
    }
    if (f0 = 1 * -439 + -3 * -1479 + -3998 * 1, Gt--, n) throw i;
  }
}
var $ = void (-4 * -1777 + -4051 * -1 + 1 * -11159), xo = void (-436 * 13 + 8 * 692 + 132), Gt = 10 * -838 + 2443 + 5937, f0 = -1754 + 2 * 914 + -74, Jn = 379 * -25 + 78 * 15 + 8305;
function ws(i) {
  if ($ !== void 0) {
    var n = i.n;
    if (void (-6899 * -1 + -25 * 347 + -148 * -12) === n || n.t !== $)
      return n = { i: 0, S: i, p: $.s, n: void 0, t: $, e: void (7643 + 6572 * 1 + -14215), x: void (-9226 + -9226 * -1), r: n }, $.s !== void 0 && ($.s.n = n), $.s = n, i.n = n, 9844 + -8 * -656 + -15 * 1004 & $.f && i.S(n), n;
    if (-(-9320 + -673 * -6 + 5283) === n.i)
      return n.i = -9815 + -13 * -530 + -325 * -9, void (9154 + 4611 * -2 + 34 * 2) !== n.n && (n.n.p = n.p, void (-3816 + -106 * -36) !== n.p && (n.p.n = n.n), n.p = $.s, n.n = void (1133 + 1 * -6361 + -2 * -2614), $.s.n = n, $.s = n), n;
  }
}
function bA(i) {
  this.v = i, this.i = -283 * -29 + 7870 * 1 + -16077, this.n = void (2241 + 1 * 3038 + 1 * -5279), this.t = void (-8957 * -1 + 6652 + -15609);
}
bA.prototype.brand = IB, bA.prototype.h = function() {
  return !0;
}, bA.prototype.S = function(i) {
  this.t !== i && void (-2755 + 4 * 929 + -31 * 31) === i.e && (i.x = this.t, void (-1966 * 2 + -1582 + 919 * 6) !== this.t && (this.t.e = i), this.t = i);
}, bA.prototype.U = function(i) {
  if (void (-9462 + 3 * -217 + 10113) !== this.t) {
    var n = i.e, t = i.x;
    void (1 * 7354 + 3 * -3110 + 1976) !== n && (n.x = t, i.e = void (1069 * -9 + 3400 + -1 * -6221)), void (-127 * 47 + -4836 + 10805) !== t && (t.e = n, i.x = void (2765 + -8967 * -1 + -11732)), i === this.t && (this.t = t);
  }
}, bA.prototype.subscribe = function(i) {
  var n = this;
  return sr(function() {
    var t = n.value, e = $;
    $ = void (55 * -79 + 3063 + -1 * -1282);
    try {
      i(t);
    } finally {
      $ = e;
    }
  });
}, bA.prototype.valueOf = function() {
  return this.value;
}, bA.prototype.toString = function() {
  return this.value + "";
}, bA.prototype.toJSON = function() {
  return this.value;
}, bA.prototype.peek = function() {
  var i = $;
  $ = void (-1 * -5822 + 156 * -40 + 418);
  try {
    return this.value;
  } finally {
    $ = i;
  }
}, Object.defineProperty(bA.prototype, "value", { get: function() {
  var i = ws(this);
  return void (-2138 + -409 * 17 + -1 * -9091) !== i && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (f0 > 1 * -2778 + 1202 + -419 * -4) throw new Error("Cycle detected");
    this.v = i, this.i++, Jn++, Gt++;
    try {
      for (var n = this.t; void (1869 * 2 + -2 * 173 + -3392) !== n; n = n.x) n.t.N();
    } finally {
      ar();
    }
  }
} });
function Ds(i) {
  return new bA(i);
}
function ks(i) {
  for (var n = i.s; void (6509 + 283 * -23) !== n; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !(-2689 * 3 + 4 * 5 + 8047);
  return !(-8969 + 3 * 2990);
}
function Gs(i) {
  for (var n = i.s; void (2296 * -1 + -5332 + 7628) !== n; n = n.n) {
    var t = n.S.n;
    if (void (1042 * 9 + 19 * 219 + -13539) !== t && (n.r = t), n.S.n = n, n.i = -(923 + 2 * -1813 + -169 * -16), void (-1482 * 4 + 4519 * 1 + 1409) === n.n) {
      i.s = n;
      break;
    }
  }
}
function Ss(i) {
  for (var n = i.s, t = void (-1 * 5371 + 5475 + -4 * 26); n !== void 0; ) {
    var e = n.p;
    -(-1 * -1156 + -670 + 485 * -1) === n.i ? (n.S.U(n), void (-8 * 530 + -25 * -169 + 1 * 15) !== e && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, void (2216 * -3 + 1088 + -556 * -10) !== n.r && (n.r = void (-2447 * 2 + 4629 + 53 * 5)), n = e;
  }
  i.s = t;
}
function yt(i) {
  bA.call(this, void (443 * 9 + -793 * 2 + -2401)), this.x = i, this.s = void (-2716 + -1 * -2543 + -1 * -173), this.g = Jn - (2537 + 1268 * -2), this.f = -9852 + 148 * -45 + 16516;
}
(yt.prototype = new bA()).h = function() {
  if (this.f &= -(-4 * 1294 + -3809 + 214 * 42), 1 * 8185 + 7727 * 1 + -15911 & this.f) return !1;
  if (-130 * -68 + -1930 + -6878 == (4 * -1241 + -20 * 463 + -2 * -7130 & this.f)) return !(-879 * -1 + -43 * 190 + 7291);
  if (this.f &= -(-7044 + 5 * 1511 + 506 * -1), this.g === Jn) return !(11441 + 673 * -17);
  if (this.g = Jn, this.f |= 1, this.i > -727 * -11 + 9076 + -17073 && !ks(this)) return this.f &= -(89 * 71 + 3 * -2413 + 1 * 922), !(1 * -1013 + -1525 * -3 + -3562);
  var i = $;
  try {
    Gs(this), $ = this;
    var n = this.x();
    (16 & this.f || this.v !== n || -8918 + -4255 * 2 + -8714 * -2 === this.i) && (this.v = n, this.f &= -(-61 * -129 + 686 * 7 + -19 * 666), this.i++);
  } catch (t) {
    this.v = t, this.f |= 6849 + 1 * 53 + -6886, this.i++;
  }
  return $ = i, Ss(this), this.f &= -(5813 + 1937 * -3), !(-6199 * -1 + 5611 + -5905 * 2);
}, yt.prototype.S = function(i) {
  if (this.t === void 0) {
    this.f |= -2874 + -1 * 1169 + -1 * -4079;
    for (var n = this.s; void (-8638 + -5 * 1858 + 17928) !== n; n = n.n) n.S.S(n);
  }
  bA.prototype.S.call(this, i);
}, yt.prototype.U = function(i) {
  if (void (2 * -751 + -9964 + 11466) !== this.t && (bA.prototype.U.call(this, i), void (-480 * -1 + -888 + 408) === this.t)) {
    this.f &= -(9028 + -147 * -61 + 8981 * -2);
    for (var n = this.s; void (-2257 * -3 + 7 * 533 + -10502) !== n; n = n.n) n.S.U(n);
  }
}, yt.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i = this.t; void (2 * -1726 + -7 * -401 + 645) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(yt.prototype, "value", { get: function() {
  if (443 * 10 + 373 * 1 + -14 * 343 & this.f) throw new Error("Cycle detected");
  var i = ws(this);
  if (this.h(), void (-17 * -274 + -218 * 14 + -73 * 22) !== i && (i.i = this.i), -5 * 433 + 675 + 1506 & this.f) throw this.v;
  return this.v;
} });
function xB(i) {
  return new yt(i);
}
function Ns(i) {
  var n = i.u;
  if (i.u = void (-254 * -3 + -61 * -75 + -9 * 593), typeof n == "function") {
    Gt++;
    var t = $;
    $ = void (1 * -7526 + 3578 * 1 + 1 * 3948);
    try {
      n();
    } catch (e) {
      throw i.f &= -(8985 * 1 + -50 * -82 + 7 * -1869), i.f |= 3 * 1796 + -134 * 56 + 2 * 1062, gr(i), e;
    } finally {
      $ = t, ar();
    }
  }
}
function gr(i) {
  for (var n = i.s; void (4421 + 1431 * -3 + -64 * 2) !== n; n = n.n) n.S.U(n);
  i.x = void (10044 + -4 * 2511), i.s = void (5 * -227 + 3667 + -2532), Ns(i);
}
function CB(i) {
  if ($ !== this) throw new Error("Out-of-order effect");
  Ss(this), $ = i, this.f &= -(-5874 + 2113 * 1 + 3763), 1934 * 1 + 4147 + 6073 * -1 & this.f && gr(this), ar();
}
function io(i) {
  this.x = i, this.u = void (-4875 + 975 * 5), this.s = void (4207 + -1 * 4207), this.o = void (6918 + -4 * 1662 + -18 * 15), this.f = -1502 * 4 + 3295 + -45 * -61;
}
io.prototype.c = function() {
  var i = this.S();
  try {
    if (-545 * -5 + 84 + -2801 & this.f || void (-7841 * 1 + 2531 + 5310) === this.x) return;
    var n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    i();
  }
}, io.prototype.S = function() {
  if (18491 + 1849 * -10 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -(7290 + -1 * -4143 + -48 * 238), Ns(this), Gs(this), Gt++;
  var i = $;
  return $ = this, CB.bind(this, i);
}, io.prototype.N = function() {
  !(-8013 + -35 * -229 & this.f) && (this.f |= -3 * 877 + 498 * -16 + -10601 * -1, this.o = xo, xo = this);
}, io.prototype.d = function() {
  this.f |= 1 * -6003 + -7367 + 1 * 13378, 9330 + -14 * 569 + -1363 & this.f || gr(this);
};
function sr(i) {
  var n = new io(i);
  try {
    n.c();
  } catch (t) {
    throw n.d(), t;
  }
  return n.d.bind(n);
}
var Oi;
function kt(i, n) {
  Y[i] = n.bind(null, Y[i] || function() {
  });
}
function zo(i) {
  Oi && Oi(), Oi = i && i.S();
}
function Fs(i) {
  var n = this, t = i.data, e = vs(t);
  e.value = t;
  var A = TA(function() {
    for (var o = n.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= 7758 + 1174 * 1 + 372 * -24;
      break;
    }
    return n.__$u.c = function() {
      var r;
      !Ig(A.peek()) && -6058 + -6061 * -1 === ((r = n.base) == null ? void (-1 * -7577 + 600 * -1 + -6977) : r.nodeType) ? n.base.data = A.peek() : (n.__$f |= 2 * -2571 + -8884 + 14027, n.setState({}));
    }, xB(function() {
      var r = e.value.value;
      return 3655 + -3 * 89 + -77 * 44 === r ? -4772 + 433 * 9 + 875 : !(-1902 + 1902 * 1) === r ? "" : r || "";
    });
  }, []);
  return A.value;
}
Fs.displayName = "_st";
var h0 = {};
h0.configurable = !(1 * -8747 + -3106 * 1 + 9 * 1317), h0.value = void (1639 + 1639 * -1);
var p0 = {};
p0.configurable = !(-27 * -166 + 9605 + -14087), p0.value = Fs;
var m0 = {};
m0.configurable = !(1431 + -159 * 9), m0.get = function() {
  var i = {};
  return i.data = this, i;
};
var y0 = {};
y0.configurable = !(7397 + 1958 * -4 + 3 * 145), y0.value = 1;
var _t = {};
_t.constructor = h0, _t.type = p0, _t.props = m0, _t.__b = y0, Object.defineProperties(bA.prototype, _t), kt("__b", function(i, n) {
  if (typeof n.type == "string") {
    var t, e = n.props;
    for (var A in e) if (A !== "children") {
      var o = e[A];
      o instanceof bA && (t || (n.__np = t = {}), t[A] = o, e[A] = o.peek());
    }
  }
  i(n);
}), kt("__r", function(i, n) {
  zo();
  var t, e = n.__c;
  e && (e.__$f &= -(-5722 * 1 + 347 * -19 + 12317), void (-5384 + -8 * -673) === (t = e.__$u) && (e.__$u = t = function(A) {
    var o;
    return sr(function() {
      o = this;
    }), o.c = function() {
      e.__$f |= 1, e.setState({});
    }, o;
  }())), zo(t), i(n);
}), kt("__e", function(i, n, t, e) {
  zo(), i(n, t, e);
}), kt("diffed", function(i, n) {
  zo();
  var t;
  if (typeof n.type == "string" && (t = n.__e)) {
    var e = n.__np, A = n.props;
    if (e) {
      var o = t.U;
      if (o) for (var r in o) {
        var a = o[r];
        void (10 * 31 + -3512 + 3202) !== a && !(r in e) && (a.d(), o[r] = void 0);
      }
      else t.U = o = {};
      for (var g in e) {
        var s = o[g], I = e[g];
        void (301 * -28 + 3054 + 5374) === s ? (s = BB(t, g, I, A), o[g] = s) : s.o(I, A);
      }
    }
  }
  i(n);
});
function BB(i, n, t, e) {
  var A = n in i && i.ownerSVGElement === void 0, o = Ds(t);
  return { o: function(r, a) {
    o.value = r, e = a;
  }, d: sr(function() {
    var r = o.value.value;
    e[n] !== r && (e[n] = r, A ? i[n] = r : r ? i.setAttribute(n, r) : i.removeAttribute(n));
  }) };
}
kt("unmount", function(i, n) {
  if (typeof n.type == "string") {
    var t = n.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-13646 + 6823 * 2);
        for (var A in e) {
          var o = e[A];
          o && o.d();
        }
      }
    }
  } else {
    var r = n.__c;
    if (r) {
      var a = r.__$u;
      a && (r.__$u = void (-15166 + 1 * 15166), a.d());
    }
  }
  i(n);
}), kt("__h", function(i, n, t, e) {
  (e < 3 || 3 * -1230 + -1355 + -5054 * -1 === e) && (n.__$f |= -4 * 1681 + 179 * -47 + -15139 * -1), i(n, t, e);
}), oe.prototype.shouldComponentUpdate = function(i, n) {
  var t = this.__$u;
  if (!(t && void (4583 * 2 + 3354 + -8 * 1565) !== t.s || -3 * 2202 + -7 * 1097 + 14289 & this.__$f) || -218 * -32 + -1408 + -5565 & this.__$f) return !0;
  for (var e in n) return !(-1111 + -353 * -17 + -5 * 978);
  for (var A in i) if (A !== "__source" && i[A] !== this.props[A]) return !(4 * -334 + -450 + -94 * -19);
  for (var o in this.props) if (!(o in i)) return !(-1 * 6431 + 85 * -40 + 9831);
  return !(9044 + -688 * 13 + -99);
};
function vs(i) {
  return TA(function() {
    return Ds(i);
  }, []);
}
const Un = Qt(void 0);
Un.displayName = "CameraServiceContext";
function QB() {
  const i = Re(Un);
  if (i === void 0)
    throw new Error(`${Un.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function Rs() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ji() {
  return (await Rs()).filter((n) => n.kind === "videoinput");
}
function Cn(i) {
  i.getTracks().forEach((t) => t.stop());
}
function b0(i) {
  return i.getVideoTracks()[2894 + 2 * 298 + -3490];
}
function OA(i, n) {
  const t = Yn();
  return OA = function(e, A) {
    e = e - (10980 + -29 * 362);
    let o = t[e];
    if (OA.JyXLbO === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      OA.neAKct = I, i = arguments, OA.JyXLbO = !0;
    }
    const a = t[-164 * -32 + 2350 * 4 + -14648], g = e + a, s = i[g];
    return s ? o = s : (OA.DeCbeh === void 0 && (OA.DeCbeh = !0), o = OA.neAKct(o, A), i[g] = o), o;
  }, OA(i, n);
}
(function(i, n) {
  const t = i();
  function e(a, g, s, I, c) {
    return OA(a - 964, s);
  }
  function A(a, g, s, I, c) {
    return OA(s - -767, c);
  }
  function o(a, g, s, I, c) {
    return OA(s - 284, I);
  }
  function r(a, g, s, I, c) {
    return OA(c - 322, a);
  }
  for (; ; )
    try {
      if (parseInt(o(769, 770, 766, "k!I1", 763)) / 1 + -parseInt(A(-278, -275, -278, -275, "sEmk")) / 2 * (-parseInt(e(1448, 1457, "6t#G", 1437, 1453)) / 3) + -parseInt(A(-257, -260, -269, -258, "*AxA")) / 4 + -parseInt(r("YITD", 811, 831, 820, 822)) / 5 + parseInt(o(769, 773, 771, "2v^J", 781)) / 6 * (-parseInt(A(-273, -263, -274, -262, "pb&X")) / 7) + parseInt(e(1468, 1458, "NpqJ", 1469, 1470)) / 8 + parseInt(o(779, 782, 772, "uxgX", 769)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Yn, 303528 + 27143 * 17 + -381993);
function dB(i) {
  const n = new Uint8Array(i);
  function t(e, A, o, r, a) {
    return OA(o - -883, e);
  }
  return window[t("pb&X", -399, -386)](n[t("R^*%", -402, -391) + "e"](function(e, A) {
    function o(r, a, g, s, I) {
      return t(s, a - 151, I - 1033);
    }
    return e + String[o(649, 647, 652, "3yIY", 656) + o(653, 660, 644, "BXfr", 652) + "de"](A);
  }, ""));
}
function w0(i) {
  function n(o, r, a, g, s) {
    return OA(g - -844, s);
  }
  const t = new ArrayBuffer(i[A(745, 748, 750, 745, "e$y^") + "h"]), e = new Uint8Array(t);
  for (let o = 0, r = i[n(-328, -329, -339, -341, "z$f(") + "h"]; o < r; o++)
    e[o] = i[n(-349, -360, -371, -359, "*AxA") + n(-340, -351, -341, -353, ")z1o")](o);
  function A(o, r, a, g, s) {
    return OA(r - 241, s);
  }
  return t;
}
function Yn() {
  const i = ["WQv0dSoDxctdJmoWhv9WW6fD", "WR7dNCkQW5CxBCogt8oRW73cLq", "oSo7Evr+W5zdgeRcQ8odWRCi", "xtP7umoYmgVdGSkTkSoj", "wtv2W6BdIWJdVZHC", "AwBcR8k6yG", "qCoFWPFdL2O", "WPhcNdWQlCk9W4rGW5y", "cNddJmo+WQOXCmkjWORcLSoL", "xJf3WPVcJetcGbPdkSoNamoJ", "uCoycW3cO8kYoSkxgYzIW4i", "W4BdMwiZ", "kCkNWRtcH8kwW4tdMePiW7ydWPRdIG", "WRRcMCoeWQZcS2pdQ8kOEaLT", "bZ3dVCkIkrRdJWtcMSk/W6RdQ04", "WPT2W5uzqLlcG3BdMW", "W5iLW7xcSSoU", "j1SqDqq", "hGDMbuyDWQFdRwhdS8oQW7JdVa", "WRf7avpcJSoJpmkSaLlcVCo+W5u", "WQ1bW6/dR8kQ", "eYX8lmoD", "fCoZW7JdGCk0cSk4aSkZECk9wG", "tNaGFSkDCSkdW53dKv85qZm", "kNhcNCosW5NcOmkwW7hdQW", "Emo+W6FdGSoK"];
  return Yn = function() {
    return i;
  }, Yn();
}
(function(i, n) {
  function t(a, g, s, I, c) {
    return kA(I - 157, c);
  }
  function e(a, g, s, I, c) {
    return kA(c - -346, I);
  }
  const A = i();
  function o(a, g, s, I, c) {
    return kA(g - -931, I);
  }
  function r(a, g, s, I, c) {
    return kA(c - 495, a);
  }
  for (; ; )
    try {
      if (-parseInt(r("gX*J", 1157, 1038, 959, 1071)) / 1 + -parseInt(r("LTwN", 1023, 918, 1114, 1070)) / 2 * (parseInt(o(-522, -441, -346, "xa&z", -553)) / 3) + parseInt(r("d1J&", 903, 946, 845, 951)) / 4 + -parseInt(o(-813, -679, -668, "V5zE", -734)) / 5 * (-parseInt(o(-463, -352, -313, "FKT3", -363)) / 6) + -parseInt(t(645, 863, 601, 696, "V5zE")) / 7 * (-parseInt(r("]d&U", 770, 875, 827, 903)) / 8) + -parseInt(t(697, 475, 769, 639, "LTwN")) / 9 * (-parseInt(o(-533, -515, -446, "Iv4(", -341)) / 10) + parseInt(e(-81, 200, 145, "NqT)", 33)) / 11 * (-parseInt(e(180, -6, 192, "@UIM", 64)) / 12) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Pn, 198516 + 1 * 609571 + -2138 * 169);
const WA = {};
WA[G(561, "moGp") + G(676, "t*b!") + G(685, "ttiw") + D(777, "]g5f", 707, 720) + S("ZA5O", 612, 483, 543, 433)] = G(497, "0yO%") + D(736, "CIz0", 803, 851) + N("ZA5O", -352, -228) + S("w1Pu", 428, 317, 421, 498) + W(732, "CIz0") + N("LTwN", -17, -119) + S("FKT3", 701, 783, 822, 711) + N("4wMs", -132, -212), WA[D(753, "moGp", 947, 803) + D(901, "Nsj$", 916, 994) + G(648, "]g5f") + G(827, "0yO%") + S("moGp", 601, 419, 609, 505) + G(763, "ieIY")] = W(681, "[k1k") + G(744, "6y5K") + D(942, "&veS", 698, 868) + W(773, "vUEr") + S("]d&U", 343, 281, 477, 459) + D(981, "6y5K", 877, 962) + N("NqT)", -165, 16) + D(893, "ieIY", 554, 736);
function G(i, n, t, e, A) {
  return kA(i - 219, n);
}
function N(i, n, t, e, A) {
  return kA(t - -583, i);
}
WA[W(501, "@UIM") + D(922, "1oR@", 778, 914) + G(797, "N1FX") + S("BqvX", 746, 596, 901, 754) + S("]dw9", 483, 770, 482, 589)] = N("T]*w", -148, -86), WA[S("WIR(", 443, 327, 467, 430) + D(633, "4wMs", 649, 744) + D(926, "4wMs", 1040, 1008) + D(747, "d1J&", 628, 807) + D(954, "]g5f", 1047, 1033) + W(555, "LTwN")] = N("q74u", -334, -239) + G(495, "F!dA") + D(818, "d1J&", 761, 786) + N("vUEr", -180, -48) + N("l8N[", -146, 22) + W(531, "vUEr") + S("&qix", 648, 332, 678, 507) + N("]g5f", -238, -64), WA[S("vUEr", 603, 544, 561, 678) + D(1003, "CIz0", 1131, 1013) + N("FKT3", -135, -92) + "L"] = N("Nsj$", -477, -294) + D(954, "V5zE", 1222, 1059) + D(1055, "b6#%", 1008, 1026) + N("]dw9", 87, -76) + N("]g5f", -144, -89) + N("UvJK", -185, -319), WA[W(527, "WIR(") + W(799, "ieIY") + G(697, "0zHZ") + N("NqT)", -333, -219) + D(981, "ZUOb", 1011, 888)] = G(607, "CuD0") + G(472, "&veS") + D(828, "Xo1)", 876, 875) + N("CIz0", 35, 26) + W(833, "!sY@") + S("LTwN", 752, 771, 601, 723) + D(1124, "q74u", 764, 944) + G(803, "F!dA"), WA[G(727, "UvJK") + W(826, "!sY@") + D(835, "gX*J", 820, 760) + W(620, "nhMb") + S("0yO%", 489, 604, 749, 612) + "Y"] = S("xa&z", 464, 745, 665, 609) + D(923, "BqhQ", 864, 1003) + D(952, "nIm]", 1007, 964) + N("moGp", -241, -247) + D(739, "!sY@", 784, 897) + S("Iv4(", 443, 477, 458, 504) + S("ZUOb", 562, 505, 646, 605) + G(780, "]g5f");
function W(i, n, t, e, A) {
  return kA(i - 239, n);
}
WA[G(755, "vUEr") + S("q74u", 559, 881, 846, 737) + "NV"] = D(989, "ZA5O", 916, 929), WA[S("a!]3", 347, 396, 339, 468) + D(849, "V5zE", 808, 905) + N("nhMb", -76, -196) + D(1196, "0yO%", 989, 1019)] = D(757, "moGp", 880, 876) + G(822, "ZA5O") + G(704, "LTwN") + N("0yO%", 11, -67) + D(686, "l8N[", 924, 761) + W(752, "BqvX") + G(805, "&veS") + G(812, "ttiw") + D(1023, "xa&z", 1082, 1029) + N("BqhQ", -142, -290) + N("UvJK", -243, -99) + S("752b", 733, 589, 657, 690) + D(901, "!sY@", 904, 956) + D(737, "4wMs", 725, 889) + W(543, "a!]3") + S("N1FX", 467, 469, 331, 398) + W(765, "752b") + G(733, "BqvX") + S("NqT)", 592, 887, 540, 712) + D(813, "]d&U", 786, 866) + W(770, "Xo1)") + S("vUEr", 343, 384, 557, 432) + G(665, "NqT)") + N("nIm]", -330, -157) + G(492, "F!dA") + D(745, "FZhV", 887, 731) + G(649, "6y5K") + D(921, "l8N[", 828, 757) + S("CuD0", 389, 503, 477, 565) + N("4wMs", -208, -334) + S("Xo1)", 720, 496, 758, 651) + S("Iv4(", 612, 448, 556, 463) + G(775, "nhMb") + D(941, "&veS", 984, 1028) + S("a!]3", 514, 823, 516, 693) + W(798, "BqhQ") + D(1154, "H2CR", 1131, 1063) + S("ieIY", 686, 661, 659, 607) + G(659, "[k1k") + N("q74u", -25, -6) + D(876, "vUEr", 622, 791) + G(557, "UvJK") + G(793, "moGp") + S("ieIY", 272, 299, 481, 436) + D(973, "ZA5O", 941, 999) + G(617, "752b") + G(532, "@UIM") + W(574, "ZA5O") + D(598, "@UIM", 792, 733) + D(985, "CIz0", 961, 1058) + W(749, "WIR(") + S("]dw9", 333, 522, 278, 423) + N("ZA5O", 1, -17) + G(473, "1oR@") + D(837, "Iv4(", 1056, 998) + G(484, "a!]3") + S("Xy5x", 558, 265, 237, 416) + D(695, "H2CR", 890, 853) + S("w1Pu", 533, 593, 802, 685) + G(799, "BqhQ") + D(979, "gX*J", 1081, 935) + S("BqvX", 729, 581, 596, 597) + W(739, "a!]3") + G(640, "CIz0") + D(1220, "Nsj$", 1006, 1049) + S("ZUOb", 419, 551, 522, 422) + D(742, "T]*w", 760, 834) + S("Xy5x", 707, 456, 509, 634) + D(1146, "ieIY", 1054, 1062) + S("ieIY", 405, 580, 596, 541) + N("752b", -405, -224) + W(760, "b6#%") + D(812, "752b", 704, 854) + W(502, "BqhQ") + G(620, "t*b!") + D(1078, "WIR(", 1089, 934) + W(810, "N1FX") + W(743, "4wMs") + D(1131, "l8N[", 968, 1006) + D(725, "Nsj$", 715, 893) + W(719, "Nsj$") + W(635, "vUEr") + W(525, "UvJK") + G(680, "0yO%") + W(510, "d1J&") + S("&qix", 591, 499, 665, 617) + S("nhMb", 546, 712, 656, 567) + W(624, "CuD0") + S("]g5f", 618, 749, 667, 733) + N("@UIM", 29, -51) + G(760, "V5zE") + S("d1J&", 644, 409, 594, 545) + G(605, "[k1k") + D(1002, "&qix", 866, 909) + W(843, "w1Pu") + S("CIz0", 426, 540, 398, 548) + G(487, "l8N[") + D(591, "CIz0", 702, 722) + N("CIz0", -220, -37) + N("BqvX", 102, -60) + D(1020, "ieIY", 770, 937) + D(691, "4wMs", 864, 727) + N("752b", -179, -174) + S("!sY@", 666, 473, 466, 613) + S("]dw9", 523, 613, 525, 509) + N("0yO%", -462, -314) + N("6y5K", -126, -230) + G(698, "WIR(") + G(577, "0yO%") + G(589, "b6#%") + G(551, "CuD0") + S("moGp", 361, 307, 569, 487) + N("WIR(", -146, -26) + S("]g5f", 705, 543, 577, 647) + G(546, "1oR@") + S("a!]3", 532, 534, 586, 566) + N("0zHZ", -309, -142) + S("d1J&", 492, 754, 500, 592) + N("CuD0", -69, -181) + S("Xy5x", 499, 434, 484, 594) + W(561, "ieIY") + W(588, "FKT3") + S("Xy5x", 278, 266, 388, 427) + N("ttiw", -69, -140) + S("4wMs", 346, 396, 412, 426) + N("]dw9", -196, -194) + G(516, "FKT3") + S("ieIY", 290, 458, 574, 460) + N("6y5K", -240, -170) + W(643, "NqT)") + G(656, "4wMs") + G(804, "N1FX") + S("BqhQ", 627, 676, 691, 662) + G(560, "ZA5O") + D(875, "nIm]", 797, 963) + D(1082, "T]*w", 984, 1050) + S("N1FX", 593, 436, 604, 454) + N("UvJK", -252, -316) + W(846, "0yO%") + W(605, "nhMb") + N("T]*w", -340, -268) + N("LTwN", -118, -94) + W(756, "LTwN") + W(546, "752b") + S("6y5K", 476, 809, 682, 628) + D(1024, "]g5f", 734, 878) + D(664, "[k1k", 688, 801) + D(929, "nhMb", 872, 881) + N("ZA5O", -162, -144) + G(595, "]d&U") + D(984, "H2CR", 756, 829) + G(825, "BqvX") + N("Iv4(", -2, -145) + G(579, "!sY@") + N("ttiw", -351, -255) + D(1066, "moGp", 1048, 983) + N("WIR(", -80, -68) + G(652, "[k1k") + S("]dw9", 595, 503, 506, 444) + W(688, "@UIM") + N("NqT)", -39, -161) + D(701, "T]*w", 742, 855) + S("T]*w", 392, 456, 439, 573) + W(545, "1oR@") + S("4wMs", 770, 544, 596, 682) + N("FZhV", 122, 9) + G(476, "Nsj$") + S("moGp", 264, 565, 426, 424) + N("vUEr", -138, -33) + G(731, "Xy5x") + G(748, "ttiw") + W(769, "ZUOb") + N("ttiw", -91, -148) + W(499, "b6#%") + S("Iv4(", 776, 664, 715, 738) + D(807, "Xy5x", 669, 770) + S("1oR@", 529, 611, 304, 479) + W(494, "4wMs") + N("Nsj$", -278, -260) + G(616, "WIR(") + S("q74u", 327, 342, 353, 492) + D(1123, "1oR@", 889, 1024) + G(477, "0yO%") + G(768, "w1Pu") + W(634, "]dw9") + S("FZhV", 410, 612, 311, 452) + W(822, "Iv4(") + S("FKT3", 787, 564, 727, 695) + N("Iv4(", -360, -250) + W(619, "BqvX") + N("moGp", -56, -205) + W(622, "b6#%") + G(673, "b6#%") + G(530, "WIR(") + N("F!dA", 186, 17) + D(1020, "0zHZ", 911, 912) + D(822, "4wMs", 922, 756) + S("@UIM", 659, 440, 468, 493) + W(794, "l8N[") + G(747, "w1Pu"), WA[S("FKT3", 452, 536, 288, 443) + S("ZA5O", 602, 557, 536, 542)] = "/";
function S(i, n, t, e, A) {
  return kA(A - 142, i);
}
function D(i, n, t, e, A) {
  return kA(e - 461, n);
}
function kA(i, n) {
  const t = Pn();
  return kA = function(e, A) {
    e = e - (16366 + 16117 * -1);
    let o = t[e];
    if (kA.dYJWwo === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      kA.YezQkn = I, i = arguments, kA.dYJWwo = !0;
    }
    const a = t[9759 + 9759 * -1], g = e + a, s = i[g];
    return s ? o = s : (kA.gdJPJD === void 0 && (kA.gdJPJD = !0), o = kA.YezQkn(o, A), i[g] = o), o;
  }, kA(i, n);
}
WA[N("Nsj$", -368, -222)] = D(1166, "ZUOb", 1020, 1043) + W(852, "WIR("), WA[W(570, "ieIY")] = !1, WA[N("nIm]", -62, -106)] = !0, WA[W(518, "l8N[")] = !1, WA[G(610, "752b") + S("&qix", 576, 464, 372, 485) + D(998, "q74u", 1150, 985) + D(627, "CuD0", 795, 781)] = N("nhMb", -387, -229);
var la = WA;
async function EB() {
  function i(I, c, Q, x, d) {
    return D(I - 482, I, Q - 85, x - -79);
  }
  const n = {};
  n[s(692, 688, 826, "moGp")] = Fn;
  function t(I, c, Q, x, d) {
    return D(I - 497, I, Q - 205, Q - -216);
  }
  n[s(731, 708, 783, "4wMs") + "h"] = 256;
  const e = await window[r("]dw9", -467, -632, -619, -534) + "o"][g("ttiw", 649, 666) + "e"][r("4wMs", -199, -187, -405, -229) + t("]g5f", 660, 751) + "y"](n, !0, [r("H2CR", -206, -151, -274, -285) + "pt", r("T]*w", -75, -417, -419, -249) + "pt"]), A = Uint8Array[s(662, 748, 840, "ttiw")](Array(5200 + 1 * -709 + -4475)[g("nIm]", 671, 506)](-3133 + 9 * 93 + 2296)), o = window[s(840, 749, 690, "6y5K") + "o"][t("0yO%", 400, 495) + g("V5zE", 278, 459) + s(675, 846, 921, "F!dA")](A);
  function r(I, c, Q, x, d) {
    return N(I, c - 139, d - -256);
  }
  const a = {};
  a[i("nhMb", 759, 840, 841)] = e;
  function g(I, c, Q, x, d) {
    return N(I, c - 190, Q - 791);
  }
  function s(I, c, Q, x, d) {
    return G(c - 155, x);
  }
  return a.iv = o, a;
}
function Pn() {
  const i = ["W4BdPCk9DCkG", "hSkwWO/dLcu", "W6u4W67dP8o0", "uXpdM8kXxW", "i8okde/cUa", "W5uVafddUq", "pvZcQ8oOmW", "Bwj5W7Xv", "BXHNW70O", "xI5GxCkF", "f2aVW5RdKW", "WQH1W5OMhW", "WRKlW4Webq", "sCogW4FcGhW", "uX4BkSkh", "jSkFng0", "Ew8PW43dKW", "ESkqb8kbW4S", "bJu8k8kF", "WP0HW60yma", "WRfZWQ7dO8om", "W6CMW7BcVSoBWOtdNCkkW55K", "W5FdRSo4Dmk3", "s8kDo0lcNG", "xZe+k8oh", "WP7cT8oFbxm", "WPWMs8k4ja", "W4mxW44phW", "fCkIW7P9pq", "C8k7W4PnWR0", "ASkOWQldPhK", "h3WNWQNcLG", "WONcNZxcRCk8", "WRZcOrS", "W50/WQ1kWP8", "btealSkI", "W77cPHRdK8od", "ohLdASkA", "W4OSW6SEcq", "b1xcRqxcHq", "l2ujW6ef", "e3ihWRRcHW", "eCktcdVcSq", "W4pdV8kqWQeb", "WRGmmYZcRW", "FSkBAZZdJa", "m8o9W4Sa", "W48IWQf5na", "oHHx", "twZdKSkvCa", "gxSlt3e", "W6tcOKZcRvW", "Cdq2gSk4", "vqeZamk5", "W4/dJmkiW4O5", "W7BcTcZcG8on", "hH9qWRZdNKJdVsFcLmoD", "t8kToSkRW7O", "WPG7zCkahq", "WQ3cHSorC8kp", "dvfdW6Hz", "WPNcQCkcwSoB", "WPVcHXdcNCoG", "W5KJyhVdOq", "yd5bE8kK", "iHe2vmkb", "kLadpc4", "WQldIhql", "W78AWOWdBa", "oZfPdmk0", "bh01isS", "gKe+vui", "W6RcGCoOW6DGxbVdRYpdN3VdJG", "WO0NWRPIWRC", "m18iCK4", "umkhke/cPW", "CCoOW5xdTSor", "WRddQN0E", "WR/dMSkVW5Cz", "CNddTH/cHa", "k8kQfmk5W4K", "WRZcKmoAmHm", "CqCLWQtcOq", "W6hcOxFcRa", "W5PqWRKhW4K", "W7FdVSkCW6K", "W4tcHq/cPsa", "W7aYb3ZdUG", "c2JcTSoHeG", "WPilW4bVW6C", "W7ZdLmkbwCkb", "W5G9geldJG", "WPH/xmkkoa", "WRhdM8kOWRGL", "k1mnW4bO", "WR8SWR1kWRi", "DmoNnblcKW", "W4FdJtG8WQi", "WONcRSkx", "WP/cOCkit8oE", "W4uTba", "WPfQW5HAW78", "W6hdMmkml8ks", "wb4Bkmkb", "kLLEW4Ln", "WR3cPxNcQMG", "tmoGd27cNG", "WQdcMXldPmot", "W4eTWQW0", "W7m3W6/dTuO", "c2zhW44W", "W5NcIu7cJfe", "WQdcPmk7dCoa", "W6JcGmoTWRqX", "W57cMK/cPua", "aMv2W7et", "WOWlWOPGWOK", "dM3dHmkeDW", "b1mCmZa", "WPtcHmk8W6un", "ExnaWR7cNa", "WRjyyI3cQSk7W7ZcHIJcS8oEmdG", "bG/dTcCy", "xdxdSCkdWRi", "pMTTWPXH", "zHPJW7Si", "WPxcRSknxq", "WQWCW6KJbW", "sSoMWR7dGmoa", "smkTcae0", "WR0avCk1", "W5pdQSkjFSoX", "W4pcMuxcIf4", "kNJdPCoioa", "W4ldLmokj8kY", "h0NcLSoOWRq", "nb03EgG", "iLdcRmoxaq", "z0q3BLK/eq", "ESknW75lWOC", "dujdEmoa", "mxxdUIBcVW", "W7XfWPzeW4u", "W5hdPZu9", "kaFdGXi2", "WQVdRbVdVru", "bmoaW7aNW54", "W5NcTfNcPwu", "vbFcJ8k6xSovW7/dLmkFfmkEWQi", "thWIW4pdMq", "p1FcM8oYW4e", "WRP5WQldVmoJ", "j8kFW6P3WQW", "imoDwmkAW7hdPZBcR8oD", "WQScW45YW4y", "W680WO/dLfK", "pLNcJSoKW4m", "W7e+WRSzWPG", "y0eyt2i", "fCobWPpdLh8", "uSo3WRddG8o8", "ihBcN8oCnq", "vSovWQRdKSob", "W6fZWOOVW70", "bNK/y1S", "WPFcP8kUACof", "tSk+bmkKW7e", "tmo4WO3dImoi", "W5aybeNdTG", "cfXe", "WPSmianz", "WOynW55ZWPa", "Fx0iWPqL", "cNFcJSotlW", "WPldLWFdLIi", "FSk9WQhdNqm", "WOBdR8kOi8oI", "W47cHvZcQxldV8k7W6JcQadcNINcMq", "xSooWRldKmoX", "EG1hWOJcIaW2W63dGq", "vgJdMCoXomkjW6q", "W5HqW504W5XWW4VdMmoyW4OWpq", "geFcGYKx", "vmkeBSoSkG", "W5VcLxBcG18", "WOFcU8oFkmo5WQSbyc/dJGtcIW", "h8k+WPfPxW", "WRekqSkVjq", "nmkEW5zpda", "ofBcRmo3W7C", "ACktWRhdHrm", "k0ZdLCk7cW", "WPuoW60qW70", "WQS/WR57WQ8", "uYVcGCoaW7q", "WQZdQIOxW5m", "luFdRCk1qG", "yuSmaCkT", "h8k+W7X5mG", "l0xdOZOM", "W51XWOqHW4e", "WOaBrCkIxG", "W5ndW4BdGtS", "W5NdTdC1", "W5ldGaGLWQm", "Fmkjv2m8", "uWmujmom", "W6ldM8oAl8kf", "b2nnWP5o", "W45eW6JdNMm", "WQHgft0z", "W5OZW53dUJ0", "W5ZdJcacWOu", "WO1eWOddKCok", "ghBdHCkcyG", "eNtdM8opjG", "cx44uq", "WQxcKCkqemoR", "dMe3WRBcOa", "jLXTW4qL", "W4LgfdG+", "W4RdSCkDW7Pv", "wSkDpMhcHq", "q8kGW5byWRS", "CgXtW5NdMG", "FWejWPDUBCoDqmkLDvBcUqu", "WPmaaNrC", "W4tdOdGKWPG", "ah7cUW", "oKarWPJcPq", "WQiLW6a+iG", "WOpcKmkAmSoT", "sYRcN8kriG", "WPRcHmoSWOz/", "W5qMie3dJG", "W7tdMG8EWQa", "nSk/WPbrWRa", "lxXNW4K", "BCkVc8kx", "WQOuW4ybfa", "r8k4grnp", "kCkslg3cJq", "lmkRomk8W78", "W7uoWPeoDq", "WRFcLCk9c8os", "W5SgagNdKa", "WPtdS1CJ", "WRXDlemF", "C8kgpCoxW6i", "WQKJyCkyna", "A8okWPqoxmoCc0DTy1PJWQe", "WPNcJCoGW6moub3dPCo2", "W6VdL8oVW6bG", "W7BcGtpcGSoV", "WP3dTSkdWOi/", "lW/dTXqx", "ASoiWPunvCkwwu9oD3q", "WR5xkLic", "W4hcJmkxW74E", "yCk6WPrtWRNcNx01WQ1iaa", "cMu5msy", "W5FdJCkRW7yi", "t8kuW47cHY4", "oSkuW5bsgq", "sSkbcZ1v", "sKSjW6VdQW", "W6PMWRegW6i", "W6RcRNNcU3C", "WOhcTmky", "WQ9tWRTiWRC", "C0ZcGLjW", "W7xdRNOjW7G", "WQBcKx0cWO4", "bY1dg8kz", "aCk9W7vyxa", "omkpW4b3ca", "iKqsCrq", "W4tcHdBdT8o2", "C8ocpSklCG", "CCkGp8kfW6m", "i0qwcWy", "W6hdNCkYW4Dr", "y2qLW5NdIG", "D142W5xdHW", "E8oxkmoBW4C", "WOiLW54+iq", "W5ZdSmk8W7yJ", "WPjVW7zLfmokWReYWOVdJSoDiW", "ASokWPypdW", "WQZcRMxdUmkb", "zSkAWRyUWRi", "WRZcLelcHeu", "A3SXW5BdMW", "WP/dS8khWOes", "FXhdMWaK", "uSotWO/cS8o3", "WQxcJI0", "pw9HW7nx", "W4pdRt4uWRy", "euhcLCkQuq", "F8oyoCklsa", "mee6WO/cNq", "WR0ovSk+jW", "W4ZdVCked8kp", "W4pdUSkdxmko", "WQ3cHSk0FCoG", "W4xdVmk6l8kG", "bgD8W5DK", "W6H+WOFdOSo5WRddMa", "zs4wESkM", "WRnBWO/dLSo9", "W7FdMMBdTCkW", "CgTxWPKc", "W5e3gv3dGG", "grPGuCkV", "F8kgWQxcGG0", "CtuHemk2", "ASoSWRhdGmou", "B2nrWOSq", "WPRcPmkqESoM", "WQCmWQPKW5G", "BSk9WQpdVX8", "pMzuccq", "dxtcRmoJhW", "lWLqA8oj", "mK7dU8ofW5m", "FCouomkRW78", "WQupW5Wt", "WRJcJ2tcVmkk", "W5ePhLxdHa", "BSkFWPnEwW", "sCkAk2BcLG", "wmoQdxNcOG", "W5xdVmksB8k8", "ESkKW7b+WP4", "d2vgW6HL", "WONcTCk7xSoj", "hComW6iSW5i", "CGHrv0y", "fNBdOmoJda", "WPFcGCklibe", "amkKW6rSpq", "W6r5EgjgDYT+W74", "W5NcKupdUgy", "WPRdVmk6W4GBtae", "WPjUW7nMfCooWPqnWOpdGmomaG", "W6JdL8oQWPKd", "WRBcISk5pXa", "FWvqecaNW6bdsq", "WRtcVrhcP8kO", "WPRcGSoHW5f/", "dwRdICkuBG", "W7VcUSkMDmo8", "EColBd/cMG", "WOhcJmkep3m", "WRlcMCkyrmoh", "tSkMkH5b", "WQylFCkMiG", "W5TLWOGJW5q", "W6HIWR4hW74", "a8kTW4f1oq", "C0lcRb/cUq", "W6FdHgOwWPO", "EmkpvwnM", "WPNdPSkiWOGs"];
  return Pn = function() {
    return i;
  }, Pn();
}
async function lB(i) {
  const { iv: n, key: t } = await EB(), e = {};
  e[g("ttiw", 681, 643, 812)] = Fn;
  function A(c, Q, x, d, E) {
    return N(x, Q - 245, c - 357);
  }
  e.iv = n;
  const o = await window[I(1021, 1174, 1126, "H2CR") + "o"][g("FZhV", 776, 771, 750) + "e"][A(219, 353, "ZUOb") + "pt"](e, t, i);
  function r(c, Q, x, d, E) {
    return S(c, Q - 485, x - 34, d - 155, E - 423);
  }
  const a = await window[A(149, 255, "6y5K") + "o"][r("ZUOb", 1074, 985, 813, 913) + "e"][g("FKT3", 835, 994, 889) + r("WIR(", 889, 869, 1012, 1034)](r("N1FX", 1018, 1200, 1097, 1064), t);
  function g(c, Q, x, d, E) {
    return D(c - 390, c, x - 497, d - -83);
  }
  const s = {};
  s[r("]g5f", 1055, 1041, 1029, 984) + "ge"] = o, s[g("BqhQ", 1017, 993, 905)] = a, s.iv = n;
  function I(c, Q, x, d, E) {
    return N(d, Q - 487, Q - 1438);
  }
  return s;
}
async function uB(i) {
  function n(h, b, k, R, J) {
    return G(b - -288, R);
  }
  const t = la[C(851, 794, 923, "xa&z") + C(846, 822, 964, "Nsj$") + "EY"], e = la[n(487, 493, 481, "1oR@") + x("0zHZ", 732, 787) + "V"];
  if (!i || !t || !e) return void (-420 * 9 + 9287 + -5507);
  function A(h, b, k, R, J) {
    return N(J, b - 173, k - 424);
  }
  const o = new TextEncoder(), r = o[a(360, "a!]3", 623, 501) + "e"](i);
  function a(h, b, k, R, J) {
    return N(b, b - 148, R - 737);
  }
  const g = window[a(568, "gX*J", 675, 493)](t), s = window[x("xa&z", 739, 576)](e), I = w0(g), c = w0(s), Q = {};
  function x(h, b, k, R, J) {
    return G(k - 80, h);
  }
  Q[n(366, 542, 673, "F!dA")] = Fn, Q[x("BqvX", 923, 795) + "h"] = 128;
  const d = await window[n(365, 250, 104, "H2CR") + "o"][a(436, "@UIM", 550, 614) + "e"][a(443, "q74u", 651, 478) + C(792, 772, 854, "nIm]")](C(889, 795, 875, "vUEr"), I, Q, !1, [n(473, 429, 416, "moGp") + "pt"]), E = {};
  E[n(236, 288, 469, "vUEr")] = Fn, E.iv = c;
  const f = await window[A(572, 409, 405, 249, "Iv4(") + "o"][A(419, 230, 303, 466, "&qix") + "e"][C(891, 867, 928, "V5zE") + "pt"](E, d, r);
  function C(h, b, k, R, J) {
    return G(k - 327, R);
  }
  return dB(f);
}
(function(i, n) {
  function t(a, g, s, I, c) {
    return GA(s - 954, a);
  }
  const e = i();
  function A(a, g, s, I, c) {
    return GA(s - -457, I);
  }
  function o(a, g, s, I, c) {
    return GA(I - 452, a);
  }
  function r(a, g, s, I, c) {
    return GA(I - 837, g);
  }
  for (; ; )
    try {
      if (-parseInt(o("2E3i", 810, 843, 848, 809)) / 1 + -parseInt(o("g8pB", 811, 848, 851, 898)) / 2 * (-parseInt(o("9z$Q", 929, 878, 894, 897)) / 3) + -parseInt(t("gTF^", 1369, 1333, 1327, 1338)) / 4 * (parseInt(o("pyy5", 918, 881, 898, 864)) / 5) + -parseInt(r(1288, "@3#v", 1322, 1293, 1296)) / 6 * (parseInt(A(-20, 21, -5, "U6Xw", -16)) / 7) + parseInt(t("@3#v", 1308, 1341, 1333, 1314)) / 8 + -parseInt(A(-92, -72, -57, "9Ptf", -73)) / 9 * (-parseInt(o("pff1", 852, 869, 875, 839)) / 10) + parseInt(A(-17, -54, -25, "pyy5", -37)) / 11 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Hn, 366472);
const fB = 1549 * 6 + 75 * -122 + 408 * 7, hB = 243 * -17 + -6313 + -28 * -623;
function fA(i, n, t, e, A) {
  return GA(t - 738, n);
}
const Ms = -1 * -4166 + 1940 + -17 * 359, Ws = 15298 + 1 * -15298 + 0.5, Ls = {};
Ls[UA("g8pB", -530)] = 1280;
const Os = {};
Os[UA("RrN@", -555)] = 720;
const Js = {};
function qA(i, n, t, e, A) {
  return GA(n - 814, A);
}
Js[qA(1141, 1180, 1206, 1170, "XqRb")] = 60;
function GA(i, n) {
  const t = Hn();
  return GA = function(e, A) {
    e = e - 365;
    let o = t[e];
    if (GA.PhQRsV === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      GA.muexSB = I, i = arguments, GA.PhQRsV = !0;
    }
    const a = t[-3118 * -1 + 8351 + -1 * 11469], g = e + a, s = i[g];
    return s ? o = s : (GA.RWQJZm === void 0 && (GA.RWQJZm = !0), o = GA.muexSB(o, A), i[g] = o), o;
  }, GA(i, n);
}
const Bn = {};
Bn[VA(351, 394, 321, 320, "xT73")] = Ls, Bn[UA("U#fO", -554) + "t"] = Os, Bn[UA("dMH)", -480) + fA(1140, "&lPo", 1108)] = Js;
const Us = {};
Us[fA(1149, "))HD", 1141)] = 1920;
const Ys = {};
Ys[qA(1269, 1228, 1228, 1268, "3mWo")] = 1080;
const Qn = {};
Qn[fA(1136, "]U8r", 1146)] = Us, Qn[UA("dMH)", -518) + "t"] = Ys, Qn[qA(1235, 1252, 1259, 1259, "j]GJ") + UA("3mWo", -486)] = 30;
const Ps = {};
Ps[MA(20, 16, "6RXc", 29)] = 1;
const Ts = {};
Ts[MA(23, 79, "!&C(", 35)] = 1;
const Hs = {};
Hs[UA("VI[k", -567)] = 1;
function UA(i, n, t, e, A) {
  return GA(n - -939, i);
}
const dn = {};
dn[qA(1175, 1189, 1152, 1158, "0!Yu")] = Ps, dn[MA(64, 58, "PgZV", 68) + "t"] = Ts, dn[VA(444, 473, 473, 432, "KtP2") + MA(8, 51, "45t9", 2)] = Hs;
const Ks = {};
Ks[UA("zlX^", -572)] = 1;
const js = {};
js[VA(419, 437, 430, 380, "jygg")] = 1;
const qs = {};
qs[VA(417, 460, 457, 394, "U6Xw")] = 1;
const En = {};
function MA(i, n, t, e, A) {
  return GA(e - -387, t);
}
En[VA(351, 334, 308, 365, "xT73")] = Ks, En[fA(1222, "KURR", 1196) + "t"] = js, En[MA(-63, -23, "pyy5", -18) + qA(1281, 1243, 1198, 1257, "80Ku")] = qs;
const Co = {};
Co[VA(432, 393, 445, 430, "b5MF")] = Bn, Co[UA("xT73", -553) + VA(437, 397, 432, 433, "RrN@")] = Qn, Co[fA(1157, "6RXc", 1163)] = dn;
function VA(i, n, t, e, A) {
  return GA(i - -17, A);
}
Co[qA(1154, 1195, 1195, 1191, "KURR") + qA(1165, 1192, 1222, 1240, "))HD")] = En;
const Tn = Co;
function Hn() {
  const i = ["v8o5W5tcIG", "sX7dTf8gW6nL", "WOXRWRKAEG", "W5iRW61B", "W4GXW51DWPO", "W5KGW5dcHZ4", "W5uRWPixca", "n8outCodDq", "WO/dTCkCWOjE", "WPJdHCkRWOTX", "W5K3W5lcQZ8", "hdldNfbUWOq6hq", "xvqeW5hcMW", "lstcTevP", "fCoZgW/dQa", "W53dQWu3yW", "WQLkqCoh", "grtdG1Wq", "W7/cNSoMW5VcU8kQsbzCpu/dSG", "W7GLWOy", "qZmgDsS", "WOiEWPPXW7m", "qSooACofW7JdTJr/", "hmk8WQLs", "W4VdVWSJ", "W5JdNLXQDa", "CCojW417WPSchCoCvmo1nG", "WRJdJmke", "iCkOWRnd", "WR3cUfmKWPpdLJ05W6v+ECkg", "W6uKWObI", "mmkoWRhdQtRcGmkUW4T+WODR", "aSojWPNdOIe", "W5BdVmkJWODa", "WRr+W4WKpt8DW71iW4jZsG", "r8oxW6FdLCkC", "WOBdHCkK", "gXGMWPFcMG", "ESoFW7FcSwC", "W5yaW47cSd4", "WOOQeCkADG", "eZRcVMrjWPi9gxW", "smoocSkcWP/cQu9gW7RdKMCUW7q", "WPpdMCkI", "uSk7ddhdNcvuzK8", "mmkkWRVdRtRdK8kTW5LlWPP5Eq", "fCkntSogW44", "W4y9WPCqeG", "xJbGCa", "W78RWPj0xa", "W7/dGmox", "WO3cQCkQWRz2WOf0yW", "fIhcPue", "c8o6sG", "u1abW5RcKq", "WRP+W4iJox0yW4P1W7n5", "W4y9WPCvcG", "pmklWRRdG8o7", "tsqoFYy", "W4jSWPpcL8k+", "l27dPsby", "x8kIxvFcTCkPWQBcVMZcKsS", "WOeHbmklyW", "W6ldRGjZW4K", "W4NdKx5/FW", "BSomW6lcTw0", "cZRcKIe", "vCkJaZBdNCkgWPNcJG", "WRpdGmkwq0a", "WPVdLSkKWOnw", "WOuTdmkhEq", "i8kgW7vNlW", "n8kpWPiKW4W", "b8oOrG7dVW", "WOLGWQS", "rmoCWQVdRZPwcq", "cmkksmovW4y", "j8kpWRxdGCoa", "WQBdGSkJ", "W5D5WO3cMSk1", "d8oXxZNdRG", "WQldImk9WONdOG", "W43dMxXUuq", "WR96W4qNpZTfW6H+W6T3yrG", "W4ZdGvLKEq", "WQddI8kIWOa", "e2zlFCoM", "EmoSWPZdLrS", "nmkrWPq+", "W6HvWQ3cGCkPWPbaWPxdRa", "WQWyW7lcHCk0", "zSo5WQddTaW", "bmkRWPxdIWldPtWSWRSfCfO", "l8oir8od", "fCoNasldSG", "W5lcV8opWOPSWPJcNqzF", "W6HFWQJdSSoVW5TNWPpdKadcSg4"];
  return Hn = function() {
    return i;
  }, Hn();
}
const bt = {};
bt[VA(360, 407, 340, 383, "RrN@") + VA(374, 365, 405, 367, "Mibt") + UA("4y4V", -528)] = fB, bt[fA(1148, "MOMa", 1114) + fA(1113, "xT73", 1126) + MA(-56, -29, "pff1", -7) + fA(1188, "sM(Z", 1189)] = Tn[MA(109, 27, "b5MF", 62)], bt[VA(443, 431, 416, 484, "AXJJ") + fA(1181, "vB8D", 1145) + MA(64, 66, "pff1", 60) + MA(13, 85, "@3#v", 44)] = Tn[fA(1161, "zsM)", 1148) + MA(103, 45, "45t9", 57)], bt[VA(377, 381, 421, 372, "9Ptf") + MA(-3, 38, "]U8r", 10)] = Ms, bt[fA(1118, "evUh", 1136) + qA(1211, 1253, 1208, 1226, "pyy5") + fA(1162, "QOra", 1128) + fA(1117, "xS5i", 1156) + qA(1262, 1251, 1218, 1265, "45t9")] = Ws;
const wt = {};
wt[MA(-34, 15, "Mibt", 8) + MA(39, 11, "ut3t", 18) + UA("XqRb", -565)] = hB, wt[qA(1228, 1187, 1231, 1171, "zsM)") + fA(1219, "gTF^", 1171) + VA(366, 398, 409, 341, "AXJJ") + MA(18, 25, "VI[k", 41)] = Tn[UA("MOMa", -547)], wt[fA(1197, "PgZV", 1151) + UA("4y4V", -533) + VA(424, 468, 390, 420, "XqRb") + qA(1202, 1218, 1244, 1183, "ut3t")] = Tn[qA(1264, 1264, 1311, 1256, "@3#v") + VA(365, 394, 353, 369, "U#fO")], wt[MA(80, 56, "vB8D", 70) + UA("80Ku", -515)] = Ms, wt[UA("vB8D", -491) + qA(1274, 1229, 1189, 1199, "evUh") + qA(1277, 1254, 1236, 1299, "4y4V") + MA(87, 35, "xT73", 39) + fA(1117, "@3#v", 1158)] = Ws;
const D0 = {};
D0[fA(1177, "2E3i", 1139)] = bt, D0[fA(1166, "cDp4", 1155)] = wt;
const pB = D0;
function QA(i, n, t, e, A) {
  return hA(e - -859, n);
}
(function(i, n) {
  function t(g, s, I, c, Q) {
    return hA(I - 357, Q);
  }
  const e = i();
  function A(g, s, I, c, Q) {
    return hA(I - 725, c);
  }
  function o(g, s, I, c, Q) {
    return hA(I - -604, g);
  }
  function r(g, s, I, c, Q) {
    return hA(Q - 164, I);
  }
  function a(g, s, I, c, Q) {
    return hA(s - 542, Q);
  }
  for (; ; )
    try {
      if (-parseInt(r(781, 838, "81#O", 887, 766)) / 1 * (parseInt(r(473, 376, "lnGq", 648, 509)) / 2) + -parseInt(r(744, 630, "3hRs", 884, 756)) / 3 * (-parseInt(A(1269, 1370, 1261, "2GUU", 1216)) / 4) + -parseInt(r(585, 502, "xrcZ", 461, 520)) / 5 * (-parseInt(o("ny(O", -82, -212, -258, -221)) / 6) + parseInt(a(1150, 1055, 1079, 1043, "M)e7")) / 7 + -parseInt(a(1193, 1116, 1204, 1037, "aW@o")) / 8 * (-parseInt(A(1296, 1169, 1294, "UVME", 1431)) / 9) + parseInt(a(1171, 1110, 1045, 1098, "x0s7")) / 10 + parseInt(t(757, 762, 826, 817, "M)e7")) / 11 * (-parseInt(r(743, 592, "jyMQ", 727, 663)) / 12) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kn, -715028 + -2 * -41639 + 12 * 103157);
function NA(i, n, t, e, A) {
  return hA(n - 112, e);
}
function IA(i, n, t, e, A) {
  return hA(e - -856, i);
}
function lA(i, n, t, e, A) {
  return hA(A - -698, n);
}
function Kn() {
  const i = ["W7dcU8k9gZi", "WRBdNG4OgG", "W582pmoGWRK", "F1G0vSoN", "Amk7W5FdKZe", "ASkKnCoMW7a", "l8o9WR3cG2K", "gmkjAt7dGq", "WRFdHCoIW68", "W4qYW63cUrS", "WPXeimoFWOG", "W5K5eSoN", "rmkpW6ldOrq", "W452memF", "W79VW77cOwq", "ECo0rmkH", "juNcSCk1W78", "W7FdGCkfW71l", "ySkOA8k6oq", "WPTFfd7cQa", "m8o+DSkuEG", "FKKTDW", "WPFdGYpcLWG", "W5iIW5/cSCoq", "C8kIW7W", "eH1HWQym", "cXP2WRCr", "WQxcHWnpdG", "BSkUW5FdKYi", "WOFcVXL5iW", "W5bLBvtcKa", "W70dW4pcLW", "tCktyW", "omo0mmoTyYhdSZpdKGtcTmoWqW", "EmkmW7tdScS", "amoZWRhcLxe", "WPNcLMBcTmoO", "WPhdPbKueGJcUq", "wtRdICoEjG", "W4iHvIRcMa", "WRdcGqLzfq", "W5HOesaS", "gaTZWRek", "rq1CW6VdIG", "W6ZdJSkfW6CF", "hKWzWPJcM8kUqSoqWRRdPSo1W5O", "lK7cRCk5W78", "qHLgW7BdTG", "WRZdRCoHW6ZdNq", "De02E8oH", "DweUDmoT", "W7pdJs/cOwO", "WPJcKgRcMSoU", "W4XgBCk1aq", "zmoHumkOFq", "zmkkW7hdUXy", "DGVdIa", "WOxcMSo1DSkEqmkBW5pdS8kOW5ZcUcS", "vSkgAY8", "wbXbW4hdMW", "WPrtimoxWP8", "W55JdmojWOu", "W6hdTYOOoG", "W4BdJ8kcW6bl", "WPzTWRzVFG", "WOZdHbu5wW", "W4Pfovqt", "F0yZ", "WOFcOZ1Ojq", "WOtcMsXfnG", "W6BdJ8kcW6bl", "W5dcQ8kTfZC", "WOnupmoRWOq", "W4KHoCo1WO4", "WOpcRZLima", "gmorCG", "W5H0deu9", "yeCPFmo2", "b3r7na0", "jf/cQa", "ESoWw8kJFq", "W4ddKCkzW797", "vSknW4BcUmkH", "kCofFCkaFa", "hSkhgmkRya", "WQddHq3cNIC", "vSkdW4xcRSkN", "vCkcW5xdMXG", "zCk9DSkzna", "h8oMWQRcNhG", "W7GdW5JcKCoO", "WPxdHq8KdW", "WQKWtwjUohGCW6JdV8kvBa", "WQhdPq3cLIG", "WRFdOrlcKt8", "WOVdIXeO", "WPbkaZtcOG", "W79IctO7", "W4aLtslcGW", "cM5N", "W7GWW7hcPX0", "uCkeyWpcJW", "WOddMa4Icq", "WQ/cHWm", "WQNcHH4", "jvVcR8kuW7K", "BNlcNZFcMG", "W4hdPY4Glq", "FrxdSmoXWOq", "tColW4S", "eCkwW5VdPSkCqs0p", "E3BcMYZcLq", "W4Xwkhmb", "m8olF8kcrG", "W68HW77cOHS", "b2r/pbO", "A8otW7ldH8ka", "W6ZdJ8kc", "WPP/fdBcPW", "rXHAW4JdIG", "W65RW7ZcOwG", "W65FFCkRba", "kCoECSkoyq", "WRCUirFdVq", "W4ddOc4UkW", "W6tdKcdcU3a", "W50LtspcIq", "t3VcRq", "WQddPd7cJtK", "W4BcQNZdR8k7", "W64nW6W", "WRHeW6hcPgrRFW", "c3hcLtVcSW", "W57cOCk8eJi", "ASkUW5ldIdC", "BmkICmkyma", "W6/dHCkpW6C", "W7BdLmknW6fl", "W4FcVupdQCkj", "bmksW5a", "WQO1twDOpsPzW4JdHSkkwcFdLW", "oCojzCkoBa", "W4nGW6BcOwu", "W5hcUvZdRSkE", "WRS8WRJdVdSulYzYq8okBK/cPW", "mConAG", "dHzMWPer", "DSo8r8kHFa", "D2xcMJFcLq", "AMZcNYFcHW", "WQVdRWW", "d8kVfq", "wxxcMxj3", "W4tdUZiKpq", "fSkvWO7cSSoDbxC/eZ4gESkP", "W7KLW6hcPqW", "WOLtbJlcPa", "W65CBmk2fq", "qmolW5ldSCky", "WOnWWQPUqG", "F0/cJIRcNq", "qJNdGCoezq", "EmkkW7xdSa", "gaRdUYikW6qOcrvBvG", "WO1BcZNcVW", "weFcP0vD", "W5ujuslcGW", "W7JcTSk9ddC", "kv/cN8k1W6O", "WRZdGmokW7JdGa", "qqddNav8", "dXb9WRWn", "iSkKg8o0kCkQW7HJW4DcWP4rWOO", "hLlcKcZcJq", "WRHSoCoEWQm", "WOxcMMdcVCos", "bCkeg8kICa", "hKtcJerZW5ib", "W6PrBmkRba", "W6pdMJJcOwC", "WPn8ib3dUW", "W7hdGCkfW79m", "oetcRSk+W7G", "WOFcKJjTpG", "h8oMWRlcGMK", "WPxdHH00", "W59snuOb", "W6msW4JcMSoL", "W6i3W4FcVr0", "WOtcRan7kG", "WQr7pchdOa", "W5RcJ0/dNSk4", "rCkQiSoVW7G", "pSonFSkcFq", "CmoWxCkhEq", "W5ldKCk1kCoE", "W7KNW6FcPqS", "W5BdSCob", "W45bgvax", "W4T4dConWP4", "W5hdGSk0mG", "WRtcIqrsdG", "eYf3WQel", "WO3cQYHpna", "WRlcIqrqcq", "xLVcP3zl", "W4qHvIJcNW", "W5XDASk8ba", "W6yHW7RcRb0", "ge8qWPZcNmkIk8oEWOBdVSoVW4xcOW", "nmoZzmk0W5NcQ8oxW7hdHCoK", "q0hcHMDD", "dfjSddW", "W5X+aCocWO0", "cNhcLsRcTa", "tYddG23dRH3dNCozWOxdPZa", "W6HAq3VcHa", "ebzGWRuB", "C8kHW43dIsq", "lhDSjXO", "A8oTCCk4jq", "WPvHWQb6yG", "W6ddK8kzW79l", "W51ZveVcLG", "gMFdVCoffadcMJ4", "W4JdTY4Gha", "WR7dGCo7W5NdLW", "B8kEk8oupmkyW5ZdLcGcW6KTcq", "AxlcNrhcLG", "W4FcQutdK8ky", "WPHpjSol", "WQjRWRXOyG", "WO5bid/dHq", "WOSHebpdG8kkW5L3EtFdH8oI", "W4ldK8kJj8oy", "W45beumw", "W7TiCCk1fG", "W41/texcHG", "fMb9pby", "eMJcHrRcUq", "W418cCoaWP8", "WPfHWQb9Eq", "W6PBASk2fW", "WOrXdNpdMdldM2dcHK/dISkj", "wfpcOh9m", "W7FdKqqPgG", "W5G0fmo+WOW", "W75oetu3", "WQ7dJCoRW77dMG", "W6itW5/cOSoL", "xu0KE8oJ", "qmowW5NdO8ky", "W74hW5ZcKW", "W4ddNsW1ma", "W7tdMGPycSoZwKC", "WQ8eoa", "WRJdHSo8W6xdNG", "ACk/z8k8jq", "WQFdKshcVcq", "W41dda", "W4dcRe7dPSkj", "EmkeW7BdSa", "WRBdTalcKY4", "hSoZWRRcNMK", "sdJdHSodmq", "a8kjhW", "wCkdW4RcRSk5", "W7HVW6pcPN8", "EwhcKZVcHG", "W7xdLCkFW7S", "WOJcPsLfhq", "WOTFedBcVW", "uuTIorBcR0K", "WQFcQILNfq", "WPvHpahdVq", "gmkhgmkPzW", "WRtdKmku", "W5TIwLFcOq", "W5RdPSoowmk3", "W5pdHSkXl8op", "WP4AetlcVW", "W5ldJCkZ", "t1ZcVwnr", "WPOdcvmJW6RdImkt", "W5FcNe96pSkeWRPlW77cGa", "gmklemkPCa"];
  return Kn = function() {
    return i;
  }, Kn();
}
function Ce(i, n, t, e, A) {
  return hA(t - -8, A);
}
function hA(i, n) {
  const t = Kn();
  return hA = function(e, A) {
    e = e - (1240 + -71 * 13);
    let o = t[e];
    if (hA.ZlMPTk === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      hA.xzGNsk = I, i = arguments, hA.ZlMPTk = !0;
    }
    const a = t[7 * -118 + 2235 * -1 + 3061], g = e + a, s = i[g];
    return s ? o = s : (hA.CHzdeQ === void 0 && (hA.CHzdeQ = !0), o = hA.xzGNsk(o, A), i[g] = o), o;
  }, hA(i, n);
}
var eg, tg, ke;
class mB {
  constructor(n = {}) {
    z(this, ke);
    F(this, tg, []);
    F(this, eg, {});
    function t(A, o, r, a, g) {
      return IA(r, o - 336, r - 343, A - 1280);
    }
    function e(A, o, r, a, g) {
      return IA(r, o - 116, r - 160, g - 326);
    }
    _(this, ke, pB), this[e(9, 206, "CAgf", 76, 63) + e(-82, -295, "EN39", -231, -204) + t(887, 895, "x$Gy")](n);
  }
  [(tg = IA("sWM^", -269, -388, -294) + NA(774, 657, 567, "xrcZ"), eg = IA("x$Gy", -580, -495, -470) + lA(-171, "x$Gy", -5, -77, -138) + "s", QA(-440, "beAy", -385, -322) + IA("[1hc", -367, -261, -329) + IA("T@]&", -444, -508, -445) + "fo")](n) {
    const t = b0(n);
    function e(s, I, c, Q, x) {
      return IA(c, I - 96, c - 181, I - 1224);
    }
    const A = t == null ? void 0 : t[o(-142, -174, -59, "tLa$") + r(1125, 1173, 1052, 1124, "a)fm") + "s"]();
    function o(s, I, c, Q, x) {
      return Ce(s - 179, I - 120, c - -636, Q - 188, Q);
    }
    function r(s, I, c, Q, x) {
      return IA(x, I - 174, c - 186, c - 1336);
    }
    function a(s, I, c, Q, x) {
      return NA(s - 267, Q - 745, c - 40, s);
    }
    if (!(A != null && A[r(898, 920, 929, 1069, "2p*]") + "t"]) || !(A != null && A[a("hnrP", 1342, 1202, 1280)]) || !(A != null && A[e(791, 720, "CAgf") + a("2GUU", 1235, 1254, 1343)])) {
      if (g(-24, -41, -77, -1, "oTgl") !== o(-97, -36, -112, "aW@o")) throw new U(e(817, 860, "55D!") + o(-317, -264, -278, "FP4d") + g(85, 99, 56, 31, "NVTJ") + a("UXxX", 1273, 1248, 1302) + a("no$9", 1255, 1454, 1339) + g(273, 322, 112, 224, "3hRs"));
      this[r(1057, 838, 964, 1084, "3*@*") + a("lNuk", 1361, 1393, 1380) + "s"] = _0xc7abf8;
    }
    function g(s, I, c, Q, x) {
      return IA(x, I - 408, c - 479, Q - 484);
    }
    if (t)
      if (g(245, 314, 189, 178, "ovli") !== o(-99, 15, -73, "lnGq")) {
        const s = {};
        return s[e(752, 693, "2p*]")] = _0x25d4ec[a("T^L^", 1233, 1126, 1251)], s.id = _0x1c4ab4[g(142, 58, 109, 6, "lNuk") + a("i2*S", 1309, 1182, 1291)], s;
      } else {
        const s = {};
        return s[a("RUVS", 1190, 1336, 1237)] = t[r(689, 812, 819, 774, "UXxX")], s.id = A[o(-207, -365, -239, "[1hc") + e(634, 700, "a)fm")], s;
      }
    return void (-71 + -291 * 17 + 2509 * 2);
  }
  async [Ce(409, 522, 488, 454, "NVTJ") + Ce(541, 422, 422, 463, "55D!") + QA(-440, "SKKh", -574, -499) + "m"](n) {
    const t = document[e(-348, -256, -380, -398, "a)fm") + A(435, 454, 358, "xrcZ") + g(-583, -688, -483, -523, "CAgf")](g(-422, -546, -547, -475, "lNuk"));
    t[r(-319, "beAy", -208) + r(-331, "]7rx", -413)] = !0, t[A(481, 267, 345, "55D!")] = !0, t[e(-398, -430, -295, -493, "lgTC") + g(-436, -360, -396, -389, "Dtqv") + "e"] = !0, t[o(1363, 1270, 1380, "&i9)")][A(336, 379, 436, "SKKh") + e(-430, -535, -498, -448, "NVTJ")] = e(-577, -586, -637, -534, "tLa$") + g(-546, -613, -501, -431, "FP4d"), t[o(1239, 1222, 1252, "DTie")][e(-451, -338, -390, -546, "lNuk") + "ty"] = "0", t[g(-524, -421, -533, -606, "bKdp")][e(-470, -433, -610, -378, "RUVS") + r(-278, "xrcZ", -381) + o(1342, 1286, 1403, "[1hc")] = o(1238, 1293, 1187, "oTgl");
    function e(s, I, c, Q, x) {
      return lA(s - 80, x, c - 87, Q - 445, s - -208);
    }
    function A(s, I, c, Q, x) {
      return Ce(s - 119, I - 287, c - -6, Q - 97, Q);
    }
    t[r(-289, "2p*]", -212)][g(-364, -439, -304, -439, "aW@o")] = r(-337, "UXxX", -268);
    function o(s, I, c, Q, x) {
      return NA(s - 327, s - 792, c - 342, Q);
    }
    function r(s, I, c, Q, x) {
      return QA(s - 258, I, c - 279, s - 24);
    }
    t[g(-489, -553, -497, -599, "T^L^")][r(-440, "T@]&", -335) + "t"] = g(-588, -672, -448, -483, "NVTJ");
    const a = await navigator[o(1411, 1357, 1413, "lgTC") + r(-414, "EN39", -341) + "es"][e(-435, -497, -307, -547, "xrcZ") + A(544, 701, 580, "xrcZ") + "ia"](n);
    t[e(-319, -218, -405, -413, "lgTC") + A(443, 387, 481, "NVTJ")] = a, await t[A(669, 455, 530, "SKKh")]();
    function g(s, I, c, Q, x) {
      return IA(x, I - 222, c - 257, s - -81);
    }
    return a;
  }
  async [lA(-104, "a)fm", -209, -180, -99) + IA("sWM^", -517, -553, -423) + NA(571, 502, 512, "2p*]")]() {
    var I, c;
    function n(Q, x, d, E, f) {
      return NA(Q - 360, d - -639, d - 362, f);
    }
    function t(Q, x, d, E, f) {
      return NA(Q - 370, Q - 132, d - 98, f);
    }
    function e(Q, x, d, E, f) {
      return lA(Q - 251, x, d - 155, E - 363, d - 73);
    }
    function A(Q, x, d, E, f) {
      return NA(Q - 405, Q - 476, d - 433, f);
    }
    if (!Io())
      return A(931, 834, 852, 835, "x$Gy") === A(1063, 954, 1152, 1039, "M)e7"), void 0;
    const o = await this[n(-22, 30, 61, -9, "ovli") + "st"](v(this, ke)[n(108, -27, 32, 135, "CAgf")]), r = await this[t(768, 734, 774, 891, "2GUU") + "st"](v(this, ke)[g(1187, 1084, "vS[[", 1262)]), a = ((I = o[n(-94, -69, -75, -130, "DTie") + e(-180, "RUVS", -216, -252)]) == null ? void 0 : I[g(1338, 1315, "oTgl", 1255)]) + A(916, 1044, 990, 1048, "beAy") + ((c = r[g(1225, 1368, "RUVS", 1155) + A(1130, 1045, 1230, 1186, "sWM^")]) == null ? void 0 : c[e(-101, "SKKh", -171, -303)]);
    function g(Q, x, d, E, f) {
      return lA(Q - 143, d, d - 121, E - 213, Q - 1515);
    }
    const s = await this[A(918, 1036, 867, 948, "ny(O") + n(-19, 12, -83, 55, "DTie") + n(51, -55, 70, -71, "lnGq") + g(1378, 1483, "k!Er", 1391) + "lt"](a, o[n(-112, -161, -57, -56, "lgTC") + "ge"], r[A(1013, 1083, 1108, 1038, "xrcZ") + "ge"]);
    this[n(-50, -47, -125, -68, "x0s7") + e(70, "81#O", -60, -52)][e(-406, "NVTJ", -283, -346)](s);
  }
  async [QA(-396, "2p*]", -444, -537) + "st"](n) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: o, runDurationCutoffFactor: r } = n;
    let a = 6674 * 1 + 4985 + -1 * 11659;
    function g(h, b, k, R, J) {
      return QA(h - 32, k, k - 430, R - 107);
    }
    function s(h, b, k, R, J) {
      return NA(h - 164, b - -84, k - 399, h);
    }
    let I = o, c;
    function Q(h, b, k, R, J) {
      return lA(h - 327, b, k - 375, R - 190, R - -30);
    }
    let x = this[g(-178, -293, "k!Er", -176) + E(1e3, "hnrP", 833, 893, 895) + E(571, "Dtqv", 680, 742, 645) + "s"](this[g(-386, -179, "UXxX", -311) + s("&i9)", 542, 438) + "s"], A);
    for (let h = -1091 * 2 + 1 * 4735 + -1 * 2553; h < o; h++)
      if (E(649, "EN39", 520, 671, 623) === g(-312, -508, "DTie", -371)) {
        if (a > e * r)
          if (g(-416, -465, "sWM^", -406) !== E(684, "NVTJ", 614, 660, 745)) {
            const k = {};
            return k[f("aW@o", 117, 151, 128) + Q(-178, "NVTJ", -212, -188)] = this[E(602, "RUVS", 658, 572, 667) + E(773, "beAy", 992, 870, 900)], k[Q(-238, "81#O", -275, -271) + E(699, "*2Aq", 734, 633, 663) + "e"] = !1, k;
          } else {
            I = h;
            break;
          }
        const b = await this[f("no$9", 60, 102, 111) + E(748, "]7rx", 791, 919, 777) + Q(-412, "lNuk", -522, -384) + f("lnGq", -111, 11, -16)](x);
        if (b[f("EN39", -4, 36, 39)]) {
          if (f("vS[[", -136, -86, -228) === Q(-246, "ovli", -247, -240)) ({ deviceInfo: _0x38cb9c } = _0xb95262);
          else if (this[Q(-235, "&i9)", -57, -181) + g(-275, -129, "&i9)", -197) + s("3*@*", 438, 495) + s("sWM^", 416, 281) + "or"](b[E(740, "SKKh", 823, 839, 766)])) {
            if (f("2p*]", -186, -65, 4) !== Q(-90, "x$Gy", -290, -180)) return _0x4ca4d5 instanceof _0x3d2041 && _0x1deaf1[s("FP4d", 445, 473)] === f("&i9)", 47, -79, -164) + g(-463, -243, "k!Er", -368) + g(-204, -313, "bKdp", -246) + E(960, "no$9", 774, 764, 844);
            x = this[s("&i9)", 595, 600) + Q(-363, "jyMQ", -217, -328) + s("*2Aq", 376, 476) + "s"](this[g(-360, -373, "NVTJ", -323) + g(-287, -436, "DTie", -299) + "s"], t), h--;
          }
        }
        b[Q(-174, "jyMQ", -178, -272) + g(-310, -338, "81#O", -227)] && (E(782, "7v*S", 929, 790, 834) !== s("3hRs", 603, 689) ? { deviceInfo: c } = b : this[f("2GUU", 20, 123, 9) + Q(-55, "k!Er", -102, -198) + s("]7rx", 509, 465) + s("DTie", 515, 487) + "or"](_0x5d03cc[E(923, "CAgf", 871, 948, 859)]) && (_0xa397f7 = this[g(-442, -459, "bqQf", -383) + f("NVTJ", -34, -25, -8) + E(594, "oTgl", 704, 831, 719) + "s"](this[E(903, "M)e7", 763, 820, 822) + g(-330, -232, "x0s7", -334) + "s"], _0x37d1c0), _0x241c40--)), a += b[s("EN39", 494, 528) + E(871, "SAvF", 925, 899, 861)] || 4727 + 3 * 1009 + -7754;
      } else {
        const b = _0x1bcda2(_0x2c4ba2), k = b == null ? void 0 : b[s("tLa$", 613, 624) + s("Qb9f", 391, 390) + "s"]();
        if (!(k != null && k[E(726, "ny(O", 767, 644, 682) + "t"]) || !(k != null && k[Q(-272, "tLa$", -456, -407)]) || !(k != null && k[g(-381, -344, "Dtqv", -273) + g(-376, -463, "7v*S", -337)])) throw new _0x32b05e(s("beAy", 440, 471) + f("3*@*", -218, -116, -93) + s("1Uem", 548, 628) + E(863, "]7rx", 908, 818, 857) + f("ny(O", 4, 132, 75) + s("]7rx", 470, 544));
        if (b) {
          const R = {};
          return R[s("bKdp", 402, 544)] = b[f("UVME", 13, -83, -165)], R.id = k[f("lnGq", 49, 27, 11) + g(-382, -159, "&i9)", -263)], R;
        }
        return void (109 * 89 + 1373 * -3 + -5582);
      }
    const d = Math[Q(-104, "[1hc", -307, -187)](a / (I || -1 * 4516 + -1 * 5002 + 9519));
    this[g(-232, -460, "NVTJ", -323) + s("81#O", 426, 312) + "s"] = this[E(777, "x0s7", 783, 773, 783) + s("NVTJ", 450, 408) + s("vS[[", 347, 490) + "s"](this[Q(-352, "3*@*", -222, -244) + g(-331, -280, "T^L^", -416) + "s"], {}, c == null ? void 0 : c.id);
    function E(h, b, k, R, J) {
      return Ce(h - 406, b - 260, J - 313, R - 492, b);
    }
    function f(h, b, k, R, J) {
      return lA(h - 142, h, k - 369, R - 244, k - 251);
    }
    const C = {};
    return C[s("beAy", 508, 380) + "ge"] = d, C[s("ovli", 530, 567) + E(775, "tLa$", 656, 667, 712)] = c, C;
  }
  async [NA(536, 543, 570, "bqQf") + lA(-416, "oTgl", -370, -443, -305) + IA("hnrP", -188, -170, -276) + QA(-624, "*2Aq", -472, -521)](n) {
    function t(g, s, I, c, Q) {
      return NA(g - 326, I - 357, I - 57, Q);
    }
    function e(g, s, I, c, Q) {
      return NA(g - 123, s - -773, I - 107, c);
    }
    const A = Date[r(537, 606, "DTie")]();
    function o(g, s, I, c, Q) {
      return Ce(g - 204, s - 464, s - 569, c - 43, c);
    }
    function r(g, s, I, c, Q) {
      return NA(g - 94, s - -15, I - 193, I);
    }
    function a(g, s, I, c, Q) {
      return QA(g - 30, g, I - 435, Q - 675);
    }
    try {
      if (t(701, 734, 819, 685, "3hRs") === e(0, -143, -11, "hnrP", -14)) {
        const g = await this[t(940, 1137, 1012, 1037, "T^L^") + r(320, 420, "RUVS", 343, 452) + o(1126, 1127, 1268, "beAy", 1005) + "m"](n), s = Date[t(1019, 899, 937, 962, "M)e7")]() - A, I = this[t(908, 1e3, 995, 961, "55D!") + r(460, 529, "vS[[", 589, 631) + t(905, 811, 929, 823, "FP4d") + "fo"](g);
        Cn(g);
        const c = {};
        return c[e(-123, -224, -342, "lnGq", -296) + r(632, 559, "x$Gy", 674, 584)] = s, c[a("&i9)", 369, 356, 382, 289) + t(914, 823, 789, 823, "jyMQ")] = I, c;
      } else {
        const g = {};
        return g[a("bqQf", 321, 350, 305, 235)] = _0x1ef6de, g;
      }
    } catch (g) {
      if (e(-163, -255, -257, "x0s7") === a("sWM^", 310, 312, 264, 244)) {
        const s = {};
        s[r(394, 524, "sWM^")] = _0x347903, _0x4f8065[o(1014, 1099, 967, "3*@*") + o(1069, 1071, 995, "*2Aq")] = s;
      } else {
        const s = {};
        return s[o(1211, 1162, 1034, "beAy")] = g, s;
      }
    }
  }
  [lA(-234, "3hRs", -412, -236, -309) + QA(-282, "k!Er", -280, -329) + QA(-309, "lgTC", -251, -394) + lA(-274, "tLa$", -101, -253, -170) + "or"](n) {
    function t(o, r, a, g, s) {
      return lA(o - 40, g, a - 109, g - 157, r - 1327);
    }
    function e(o, r, a, g, s) {
      return lA(o - 184, o, a - 224, g - 421, g - -291);
    }
    function A(o, r, a, g, s) {
      return lA(o - 328, a, a - 241, g - 353, r - 1020);
    }
    return n instanceof DOMException && n[A(728, 689, "tLa$", 794)] === A(987, 900, "lnGq", 818) + e("Qb9f", -442, -418, -412) + e("EN39", -387, -593, -477) + t(1028, 1168, 1116, "no$9");
  }
  async [QA(-492, "M)e7", -627, -535) + QA(-397, "lNuk", -511, -382) + IA("Dtqv", -425, -397, -483) + lA(-423, "]7rx", -383, -321, -319) + "lt"](n, t, e) {
    return { optSetting: await uB(n), afterOpt: t, beforeOpt: e };
  }
  [IA("ovli", -470, -637, -523) + NA(585, 631, 615, "lgTC") + IA("RUVS", -506, -305, -430)](n) {
    function t(A, o, r, a, g) {
      return NA(A - 300, r - -685, r - 349, g);
    }
    function e(A, o, r, a, g) {
      return lA(A - 260, o, r - 419, a - 53, r - 1258);
    }
    Object[t(-164, -276, -218, -344, "2GUU") + "es"](n)[e(987, "ny(O", 1054, 1042) + "ch"](([A, o]) => {
      function r(c, Q, x, d, E) {
        return t(c - 353, Q - 180, Q - -144, d - 117, x);
      }
      function a(c, Q, x, d, E) {
        return e(c - 266, Q, x - -815, d - 89);
      }
      function g(c, Q, x, d, E) {
        return e(c - 356, Q, E - -1560, d - 456);
      }
      function s(c, Q, x, d, E) {
        return t(c - 371, Q - 275, E - -325, d - 36, d);
      }
      function I(c, Q, x, d, E) {
        return t(c - 378, Q - 133, Q - 1481, d - 226, E);
      }
      if (s(-274, -285, -411, "bqQf", -365) !== r(-159, -271, "Qb9f", -394)) {
        const c = { ..._0x5e01aa }, Q = c, x = { ...typeof Q[s(-452, -452, -272, "aW@o", -407)] == I(1381, 1443, 1415, 1491, "*2Aq") + "t" ? Q[a(272, "k!Er", 130, 217)] : {}, ..._0x2371ee }, d = x;
        if (_0x59dbb9) {
          const E = {};
          E[g(-586, "k!Er", -506, -464, -599)] = _0x357b8a, d[g(-392, "]7rx", -482, -425, -500) + r(-317, -231, "2GUU", -223)] = E;
        }
        return Q[r(-61, -202, "lNuk", -113)] = d, Q;
      } else {
        const c = A;
        v(this, ke)[c] && (r(-229, -206, "2GUU", -306) === a(234, "xrcZ", 180, 129) ? v(this, ke)[c] = { ...v(this, ke)[c], ...o } : (_0x4c025a = this[I(1341, 1393, 1378, 1364, "81#O") + a(61, "no$9", 92, 215) + g(-687, "2GUU", -790, -771, -683) + "s"](this[r(-407, -380, "1Uem", -267) + g(-531, "ovli", -618, -634, -503) + "s"], _0x3e32b8), _0x16f681--));
      }
    });
  }
  [NA(614, 551, 430, "bKdp") + QA(-531, "T^L^", -531, -494) + IA("NVTJ", -408, -369, -480) + "s"](n = {}, t = {}, e) {
    const A = { ...n }, o = A, r = { ...typeof o[g(1223, "x$Gy", 1353)] == I("[1hc", -31, -149, -155) + "t" ? o[g(1311, "a)fm", 1374)] : {}, ...t };
    function a(x, d, E, f, C) {
      return QA(x - 422, x, E - 409, E - 570);
    }
    function g(x, d, E, f, C) {
      return QA(x - 11, d, E - 352, E - 1813);
    }
    function s(x, d, E, f, C) {
      return QA(x - 136, C, E - 363, d - 1656);
    }
    function I(x, d, E, f, C) {
      return lA(x - 297, x, E - 471, f - 335, d - 292);
    }
    function c(x, d, E, f, C) {
      return IA(f, d - 222, E - 80, C - 915);
    }
    const Q = r;
    if (e) {
      if (a("no$9", 424, 302) !== a("no$9", 259, 302)) throw new _0x1a05d1(a("UVME", 227, 262) + a("FP4d", -22, 77) + s(1102, 1221, 1282, 1135, "SKKh") + s(1259, 1138, 999, 1102, "lgTC") + g(1220, "lNuk", 1307) + g(1498, "2GUU", 1518));
      {
        const x = {};
        x[I("SAvF", -55, -121, -119)] = e, Q[a("3hRs", 289, 293) + c(566, 392, 544, "oTgl", 442)] = x;
      }
    }
    return o[g(1481, "a)fm", 1374)] = Q, o;
  }
  [IA("k!Er", -285, -215, -351) + Ce(564, 336, 459, 597, "Mu1r") + lA(-62, "bqQf", -152, 26, -109)](n) {
    function t(A, o, r, a, g) {
      return Ce(A - 118, o - 21, a - -853, a - 128, o);
    }
    function e(A, o, r, a, g) {
      return Ce(A - 342, o - 104, r - -952, a - 236, o);
    }
    this[t(-406, "3*@*", -486, -377) + e(-703, "Qb9f", -573, -539) + "s"] = n;
  }
  [IA("bKdp", -236, -436, -303) + QA(-159, "EN39", -379, -275) + Ce(523, 529, 485, 554, "Qb9f") + IA("T@]&", -429, -337, -322) + lA(-52, "NVTJ", 12, -9, -117)]() {
    function n(r, a, g, s, I) {
      return NA(r - 91, r - 840, g - 49, I);
    }
    function t(r, a, g, s, I) {
      return QA(r - 47, g, g - 64, s - 1608);
    }
    function e(r, a, g, s, I) {
      return QA(r - 286, r, g - 197, a - 1312);
    }
    const A = {};
    function o(r, a, g, s, I) {
      return QA(r - 403, I, g - 138, s - 1699);
    }
    return A[n(1416, 1507, 1417, 1390, "[1hc") + t(1154, 1296, "*2Aq", 1192)] = this[n(1399, 1451, 1293, 1326, "ny(O") + n(1515, 1539, 1388, 1483, "x$Gy")], A[e("hnrP", 1053, 1168) + o(1221, 1366, 1376, 1237, "1Uem") + "e"] = !1, A;
  }
}
ke = new WeakMap();
const ln = {};
ln.width = 1920, ln.height = 1080, ln.facingMode = wn.FRONT;
const yB = ln;
var ot, St, ge;
class Zs {
  constructor({ defaultVideoConstrains: n = yB, minCameraShorterSide: t = yC } = {}) {
    z(this, ot);
    z(this, St, []);
    z(this, ge, null);
    const e = {};
    e.defaultVideoConstrains = n, e.minCameraShorterSide = t, _(this, ot, e);
  }
  get availableCameraProperties() {
    return v(this, St);
  }
  get mediaStream() {
    return v(this, ge);
  }
  get videoTrack() {
    return v(this, ge) ? b0(v(this, ge)) : void (-4 * -2349 + 1 * 5176 + 4 * -3643);
  }
  get isCameraActive() {
    var n;
    return !!((n = v(this, ge)) != null && n.active);
  }
  static async requestPermission() {
    const n = {};
    n.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(n);
    Cn(t);
  }
  async open(n = {}) {
    Ca() && Eo() && await Q0(450), _(this, ge, await navigator.mediaDevices.getUserMedia(n)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get next device");
    const n = await Ji(), t = this.videoTrack.getSettings(), e = n.findIndex((o) => o.deviceId === t.deviceId);
    return (n[e + (1103 * -1 + 551 * 2 + 2)] ?? n[4007 + 137 * -20 + -1 * 1267]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(n) {
    if (!this.videoTrack) throw Error("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, n);
  }
  close() {
    v(this, ge) && (Cn(v(this, ge)), _(this, ge, null));
  }
  async getProperties() {
    const n = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = n;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = v(this, St), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const n = this.getSettings();
    if (!n.width) throw new U("Video width is undefined");
    if (!n.height) throw new U("Video height is undefined");
    const t = {};
    return t.width = n.width, t.height = n.height, t;
  }
  async getDeviceName() {
    const n = this.getSettings(), t = await Rs(), e = t.find((A) => A.deviceId === n.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(n) {
    return n === wn.FRONT ? void (1636 + 2 * -818) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return li() ? (await Ji()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (6543 + 5 * -326 + 1 * -4913);
  }
  async collectAvailableCamerasInfo() {
    const n = await Ji();
    for (const t of n) {
      Ca() && Eo() && await Q0(-32 * 92 + -293 * -12 + 2 * -61);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const o = await navigator.mediaDevices.getUserMedia(A), r = b0(o);
        if (!r) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = r.getSettings(), g = { ...a };
        g.deviceName = r.label;
        const s = {};
        s.cameraProperties = g;
        const I = s;
        v(this, St).push(I), Cn(o);
      } catch (e) {
        e instanceof Error && U.logError(e);
      }
    }
  }
  getConstraints(n, t) {
    const e = { ...v(this, ot).defaultVideoConstrains, ...n };
    e.deviceId = t ? { exact: t } : void (406 * 11 + -8703 + 4237);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const n = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(n != null && n.height) || !(n != null && n.width))
      throw this.close(), new U("Could not init camera settings");
    if (typeof v(this, ot).minCameraShorterSide != "number") return;
    if (Math.min(n == null ? void 0 : n.width, n == null ? void 0 : n.height) < v(this, ot).minCameraShorterSide)
      throw this.close(), new U("Could not init video because of low camera resolution: " + n.width + "x" + n.height + ".");
  }
}
ot = new WeakMap(), St = new WeakMap(), ge = new WeakMap();
var mo;
class bB {
  constructor({ cameraEvaluator: n, cameraHandler: t, performanceCheckup: e, videoHandler: A }) {
    z(this, mo, !1);
    F(this, "videoHandler");
    F(this, "cameraHandler");
    F(this, "performanceCheckup");
    F(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = n;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    v(this, mo) || (_(this, mo, !0), await Zs.requestPermission());
  }
  async startFirstVideoStream(n = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(n.facingMode), e = this.cameraHandler.getConstraints(n, t == null ? void 0 : t.deviceId);
    !Eo() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const n = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(n != null && n.width)) throw new U("Cant take photo - video width is undefined");
    if (!(n != null && n.height)) throw new U("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = n.width, t.height = n.height;
    const e = t.getContext("2d");
    if (!e) throw new U("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 0, -317 * 22 + 41 * -157 + -13411 * -1), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(n) {
    await this.cameraHandler.open(n), NC() && (this.cameraHandler.close(), await this.cameraHandler.open(n)), await this.mountVideoStream();
  }
  async switchCamera() {
    const n = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(n);
    this.pauseStream(), !Eo() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
mo = new WeakMap();
var Ge;
class wB {
  constructor(n) {
    z(this, Ge);
    _(this, Ge, n);
  }
  get videoElement() {
    return v(this, Ge);
  }
  async play(n) {
    v(this, Ge).srcObject = n, await v(this, Ge).play();
  }
  stop() {
    v(this, Ge).srcObject = null;
  }
  hasSrcObject() {
    return !!v(this, Ge).srcObject;
  }
}
Ge = new WeakMap();
function We(i, n, t, e, A) {
  return pA(A - -655, t);
}
function zt(i, n, t, e, A) {
  return pA(i - -783, e);
}
function LA(i, n, t, e, A) {
  return pA(i - 852, e);
}
function KA(i, n, t, e, A) {
  return pA(t - 660, n);
}
(function(i, n) {
  function t(s, I, c, Q, x) {
    return pA(c - 258, x);
  }
  var e = i();
  function A(s, I, c, Q, x) {
    return pA(c - -693, I);
  }
  function o(s, I, c, Q, x) {
    return pA(I - -270, x);
  }
  function r(s, I, c, Q, x) {
    return pA(Q - 855, x);
  }
  function a(s, I, c, Q, x) {
    return pA(c - -462, s);
  }
  for (; ; )
    try {
      var g = -parseInt(o(-7, -8, -44, -2, "lZdk")) / 1 * (parseInt(o(44, 93, 84, 130, "XD*y")) / 2) + parseInt(a("K0WM", -76, -130, -154, -90)) / 3 * (-parseInt(t(456, 450, 514, 478, "cwEE")) / 4) + -parseInt(A(-452, "nAqU", -399, -415, -460)) / 5 * (parseInt(o(-50, 12, -48, -45, "2o(C")) / 6) + -parseInt(r(1217, 1164, 1186, 1220, "KFuf")) / 7 + -parseInt(A(-435, "jQqa", -377, -438, -378)) / 8 + parseInt(r(1165, 1090, 1206, 1142, "qc6c")) / 9 * (-parseInt(t(547, 547, 536, 535, "nAqU")) / 10) + parseInt(a("lZdk", -58, -120, -66, -166)) / 11;
      if (g === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(jn, 129219);
function Be(i, n, t, e, A) {
  return pA(A - -410, i);
}
function jn() {
  var i = ["CmkDW6lcRCkk", "zCklW6pcImkk", "W6DkfSovoW", "xLZdOLNcKW", "WPT1WPRcNtK", "W5xcTmoduSkn", "W5HyFSkwW4e", "ECkFqq", "WP5kzW", "W5n9zIVcQuy+W77dL3FcKJa", "WO8qW5jf", "cCo0fmkQkW", "FmkaW7JcMSk1", "W5HGAmkSW6O", "W5RdHSkkkSkV", "W4TuWR/dUCkQ", "W49cWR3dK8kU", "xmovW5pdRCkmcmofWQ5mWRPanG", "xCk3hCkRW6i", "W5NcO8oAvmkb", "cSo+nW", "WRSEWRddMCkG", "WOL+WPO", "AXOCW4LR", "W6TrWRb/WRy", "hJuUW77dHmkAW4C", "qmoaWQG", "WOvky0BdHW", "n1JdV8kzmG", "sdy+W4ZdPa", "F8kYwNrG", "kLZdO8kCoa", "W7FdHmoXDvm", "WR9oyuVdKq", "bw1EvSoOW4hcVG", "W7JdISkXWQ4iW6mwWOa/W680WP1yW6G", "nCkiamk1W5VcMf8", "WOjuymkuWRS", "W79DWQ9JWRq", "W5xdGCoBsNu", "W4pcJSoCvCkg", "W6ZdM8oTyCov", "WQRcH8k1WOK7u8kFvmkSCZC", "WOySmhy", "W4NcVCobrCkB", "aSo4mSk2gq", "mCkOW4ZcPmor", "WPv9WOS", "W5HDWRRdKSk/", "D2feWOJcPIPGWPTFxCoVAq", "B3JcPSopW6u", "WPLiDq", "mSkaW5tcLSor", "d8o0oCkHaG", "W7/dMCoQW4bP", "W7jrWQrGWRi", "pCojadC8vCk9wuFcSN47", "W4ZdLmo7ENW", "W4SHWQZdPCkkx8orWQeukmkzWO4", "W67cNSkcqWC", "W4tcUmoHAN8", "eCoUwmkxW44", "WOldUW9Kvq", "W5RcRCoQz38", "saRcQX/cHq", "W4nDWR4", "mHuyW43dOa", "sCoEWRtdUSon", "WO95W7/cUSoA", "sgvIhg3cICk9WQRdJ8kYDSkC", "rcSKW7VdOG", "rwLsv8o3", "WQtdTaKMyW", "W73dTSoP", "p0VdT8kvjq", "W7RdPCk9W6FdLW", "WQOoWQ/dHCkr", "W5rHAmkBW44", "W7pdIW07tYKL", "ecOtW63dTG", "WR3cI8kYmmkjW6VcLSo+qCo0md4", "u25ozmoi", "WR7cRdhdMr8", "W4tcImkuWRZdUW", "datcOh/cQ8oVf8oYsa", "hCoLw8krW6a", "W7VcJmoOW75zWQ5j", "W6jzWRJdN8kP", "kZWLW5hdKG", "W5zPFmkzW4e", "W57cOSoe", "vWBcVqhcOW", "WPjjz1O", "WO9NA8kdWQi", "mZCf", "zmkqw2vI", "hhf+WRNcV8oQWRtdHuNdH8ouW5at", "pvZdPCkXmG", "DaRcPXlcPa", "W5VdVSkTW7ddQq", "WOWFWRRdLmkF", "WP01lhFdRa", "WQRcHmkZW69eEmknFCkB", "dmkiWP/cGmot", "WQlcKfpcKGm", "W5ddHSkQeCka", "nYldVmknWRHUomkgkMyPWRddGq", "W5z2ySkFW7C", "F2BcVCoEW78", "eSo+wSkwW58", "W7HyWRrQWQe", "WOBcVSoOWRFcKCkZd8ocW7vFtW", "WQdcLSoGW65y", "WRfgWPm", "WRyveuldIG", "WQBcJ8oN", "WPT1WPRcGJu", "rr4cW6X4", "WQVdOmo6W6X+z8k7", "FNrErmos", "W6dcUmoLz2W", "pmo+s8kgW54", "WQekAW", "x8osWRtdR8ow", "g8kfW57cJ8of", "cLBdTKddOSkOy8kSW5uIeey", "W4RcG8kzWPtdVq", "dvhdVexdQmkOd8o9W5WmludcPmkf", "FXucW5/dNG", "u1zyxSoJ", "W7tdQmo1y0K"];
  return jn = function() {
    return i;
  }, jn();
}
function pA(i, n) {
  var t = jn();
  return pA = function(e, A) {
    e = e - (-4513 * 1 + 207 + -190 * -24);
    var o = t[e];
    if (pA.hbOMMF === void 0) {
      var r = function(c) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", d = "", E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (var b = 0, k = x.length; b < k; b++)
          d += "%" + ("00" + x.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, a = function(c, Q) {
        var x = [], d = 0, E, f = "";
        c = r(c);
        var C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (var h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      pA.pSXBus = a, i = arguments, pA.hbOMMF = !0;
    }
    var g = t[8225 + -3 * 587 + 808 * -8], s = e + g, I = i[s];
    return I ? o = I : (pA.ErdFOM === void 0 && (pA.ErdFOM = !0), o = pA.pSXBus(o, A), i[s] = o), o;
  }, pA(i, n);
}
var og, ng, ig;
class DB {
  constructor() {
    F(this, ig, 4682 + 2 * -2341);
    F(this, ng);
    F(this, og, void (735 * 3 + -3 * 3319 + 7752));
    function n(A, o, r, a, g) {
      return Be(o, o - 76, r - 235, a - 227, r - 1374);
    }
    function t(A, o, r, a, g) {
      return KA(A - 334, A, a - 18);
    }
    function e(A, o, r, a, g) {
      return KA(A - 427, g, a - -1312);
    }
    this[e(-243, -336, -316, -275, "K0WM") + e(-370, -335, -405, -366, "D%Y#") + e(-358, -294, -263, -324, ")QWo") + n(1345, "[A5t", 1318, 1271)] = Date[t("g4*J", 983, 992, 1036)]();
  }
  [(ig = LA(1214, 1171, 1202, "D%Y#") + KA(987, "K0WM", 996) + We(-375, -327, "&mPo", -386, -357), ng = LA(1178, 1174, 1121, "LLnA") + KA(1084, "nAqU", 1021) + KA(1035, "8i79", 1026) + We(-259, -294, "t@[W", -278, -283), og = KA(882, "nt6%", 945) + KA(950, "07yU", 955) + "p", LA(1196, 1232, 1195, "xM]&") + We(-293, -374, "^bVM", -354, -342) + KA(1053, "AVT@", 993))]() {
    function n(o, r, a, g, s) {
      return KA(o - 342, r, a - -679);
    }
    this[e("F3uK", 329, 429, 373) + e("Q79L", 369, 427, 371) + e("[A5t", 454, 369, 393)]++;
    function t(o, r, a, g, s) {
      return zt(o - 532, r - 151, a - 243, g);
    }
    function e(o, r, a, g, s) {
      return KA(o - 340, o, g - -596);
    }
    function A(o, r, a, g, s) {
      return LA(s - -287, r - 237, a - 464, r);
    }
    if (this[A(837, "AtBq", 808, 788, 832) + e("!rXQ", 339, 384, 344) + A(829, "XD*y", 895, 821, 879)] === 7 * -1116 + -4215 + -31 * -388)
      if (t(4, 31, -51, "q$N@") !== n(198, "^bVM", 246)) this[t(59, 42, 107, "d0bp") + t(12, -22, -51, "t@[W") + "p"] = Date[e("$9Jp", 423, 450, 391)]() - this[n(292, "2o(C", 338) + e("vh1%", 449, 412, 423) + n(392, "8i79", 347) + n(296, "g4*J", 296)];
      else return this[e("AVT@", 488, 425, 438) + n(345, "vh1%", 281) + "p"];
  }
  [zt(-405, -388, -439, "07yU") + zt(-402, -417, -402, "9LNN") + We(-278, -281, "9LNN", -349, -320) + KA(966, "eU17", 985) + "up"]() {
    function n(a, g, s, I, c) {
      return Be(c, g - 472, s - 316, I - 468, g - 141);
    }
    function t(a, g, s, I, c) {
      return LA(g - -1119, g - 419, s - 400, c);
    }
    if (!Io())
      if (o("FM6M", 1165, 1195, 1213) !== o("DJQ)", 1173, 1198, 1134)) {
        if (!_0x2790a8() || !this[o("$9Jp", 1292, 1254, 1273) + n(-31, 28, 66, 89, "nt6%") + "p"]) {
          var e = {};
          return e[n(94, 69, 41, 109, "9LNN") + o("t@[W", 1316, 1257, 1264) + "e"] = !1, e;
        }
        return { performance: !0, hiccupAmount: this[n(-2, 42, -9, 82, "[A5t") + A(-603, -594, -590, -638, "2o(C") + o("LLnA", 1213, 1249, 1287) + "t"](), firstHiccup: this[t(-10, 25, -13, 62, "[A5t") + A(-569, -574, -614, -534, "$9Jp") + r(484, "qc6c", 509, 514, 482) + n(144, 114, 129, 93, ")QWo") + "ss"]() };
      } else return;
    function A(a, g, s, I, c) {
      return Be(c, g - 251, s - 395, I - 266, a - -477);
    }
    function o(a, g, s, I, c) {
      return Be(a, g - 445, s - 142, I - 325, s - 1312);
    }
    this[A(-518, -536, -573, -532, "FBs)") + n(75, 51, 27, 20, "^bVM") + o("XD*y", 1200, 1216, 1226)] = 0;
    function r(a, g, s, I, c) {
      return We(a - 335, g - 416, g, I - 445, c - 862);
    }
    this[o("IU#b", 1190, 1208, 1201) + o("g4*J", 1299, 1242, 1296) + "p"] = void (-2989 + -466 * -17 + -1 * 4933), window[n(77, 62, 117, 84, "D%Y#") + o("IU#b", 1182, 1241, 1260) + o("q$N@", 1305, 1275, 1214) + o("g4*J", 1159, 1170, 1212)](n(44, -10, -60, -43, "6&JS") + "wn", this[A(-539, -524, -483, -556, "cwEE") + r(534, "07yU", 547, 566, 512) + o("IU#b", 1318, 1282, 1261)][r(482, "LPoI", 488, 494, 524)](this));
  }
  [zt(-464, -430, -415, "Q79L") + Be("t@[W", -136, -54, -131, -87) + LA(1219, 1273, 1163, "DJQ)") + Be(")QWo", -120, -108, -68, -134) + "up"]() {
    function n(o, r, a, g, s) {
      return KA(o - 201, a, o - -509);
    }
    if (!Io()) {
      if (e("K0WM", 797, 723, 737) === A("jQqa", -181, -173, -169, -180)) return;
      this[e("lZdk", 664, 714, 721) + t(194, "nAqU", 134, 179) + e("AtBq", 798, 743, 804) + n(440, 502, "vAKG")] = _0x35c69e[n(417, 462, "LLnA")]();
    }
    function t(o, r, a, g, s) {
      return We(o - 85, r - 421, r, g - 217, a - 428);
    }
    function e(o, r, a, g, s) {
      return LA(g - -419, r - 379, a - 404, o);
    }
    function A(o, r, a, g, s) {
      return LA(s - -1322, r - 489, a - 323, o);
    }
    window[n(473, 535, "t@[W") + t(137, "6&JS", 75, 25) + e("DJQ)", 770, 855, 803) + "r"](t(198, "$9Jp", 133, 166) + "wn", this[A("XD*y", -224, -253, -261, -199) + A("IlHi", -31, -154, -132, -91) + A("lZdk", -238, -167, -156, -179)][n(501, 484, "jQqa")](this));
  }
  [KA(921, "M#hB", 918) + LA(1121, 1135, 1174, "xM]&") + "lt"]() {
    function n(g, s, I, c, Q) {
      return LA(s - -1551, s - 225, I - 478, g);
    }
    function t(g, s, I, c, Q) {
      return LA(Q - -899, s - 113, I - 219, I);
    }
    function e(g, s, I, c, Q) {
      return KA(g - 436, g, c - -464);
    }
    if (!Io() || !this[r(-157, "AVT@", -147, -168) + r(-182, "qc6c", -139, -201) + "p"])
      if (n("YLf]", -353, -312) === e("vh1%", 544, 604, 549)) {
        var A = {};
        return A[r(-244, "Q79L", -213, -158) + t(230, 312, "g4*J", 226, 287) + "e"] = !1, A;
      } else {
        var o = {};
        return o[r(-203, "AVT@", -222, -197) + a(410, 375, 437, 435, "KFuf") + "e"] = !1, o;
      }
    function r(g, s, I, c, Q) {
      return We(g - 370, s - 277, s, c - 13, I - 134);
    }
    function a(g, s, I, c, Q) {
      return zt(s - 783, s - 31, I - 229, Q);
    }
    return { performance: !0, hiccupAmount: this[e("9LNN", 439, 412, 469) + r(-303, "jQqa", -244, -286) + e("YLf]", 603, 599, 560) + "t"](), firstHiccup: this[t(262, 195, "XzUR", 252, 234) + e("XzUR", 545, 512, 517) + e("^bVM", 531, 519, 580) + r(-267, "LLnA", -209, -177) + "ss"]() };
  }
  [We(-335, -262, "FM6M", -348, -325) + LA(1203, 1175, 1140, "LLnA") + Be("XD*y", -28, -13, -19, -73) + "t"]() {
    function n(t, e, A, o, r) {
      return Be(A, e - 109, A - 8, o - 129, e - 357);
    }
    return this[n(261, 230, "^bVM", 261) + n(176, 204, "07yU", 265) + n(188, 217, "q$N@", 259)];
  }
  [LA(1131, 1103, 1142, "*Q5Q") + Be("q$N@", -140, -108, -129, -146) + Be("nt6%", -84, -115, -200, -149) + LA(1220, 1173, 1162, "nt6%") + "ss"]() {
    function n(t, e, A, o, r) {
      return LA(r - 87, e - 108, A - 140, o);
    }
    return this[n(1295, 1225, 1312, "D%Y#", 1284) + n(1275, 1154, 1266, "AtBq", 1213) + "p"];
  }
}
function kB(i) {
  const n = re(null), [t, e] = PA(), [A, o] = PA(), { handleError: r, setIsCameraReady: a } = je(), g = ve((I) => {
    o((c) => RC(I, c));
  }, []);
  aA(() => {
    if (!n.current) {
      r(new U("Something went wrong during video initialization"));
      return;
    }
    const I = new wB(n.current), c = new mB(), Q = new Zs(), x = new DB(), d = {};
    d.videoHandler = I, d.cameraHandler = Q, d.performanceCheckup = x, d.cameraEvaluator = c;
    const E = new bB(d);
    return (async () => {
      try {
        const C = {};
        C.facingMode = i, await E.startFirstVideoStream(C);
      } catch (C) {
        if (C instanceof Error) {
          r(U.fromCameraError(C));
          return;
        }
      }
      e(E), a(!0), g(E.getCameraResolution());
    })(), () => {
      E == null || E.stopStreaming(), a(!1), e(void (-1315 + -5 * -263));
    };
  }, [i, r, a, n, g]);
  const s = {};
  return s.cameraService = t, s.cameraResolution = A, s.onCameraResolutionChange = g, s.videoRef = n, s;
}
function GB({ cameraFacing: i, children: n }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: o } = kB(i), r = TA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: o
    }),
    [e, t, A, o]
  );
  return /* @__PURE__ */ w(Un.Provider, { value: r, children: n });
}
const SB = async () => WebAssembly.validate(new Uint8Array([-4281 * 2 + 6383 + -2179 * -1, -1793 + 5064 * -1 + 19 * 366, -899 * -9 + -8399 + 423, 21 * -185 + -7316 + -174 * -65, -12 * -606 + 3 * -913 + -1133 * 4, 24 * 289 + -5933 + -1 * 1003, 5859 + 171 * 17 + -8766, 1550 + -5 * 310, -6733 + 2 * -1191 + 9116, 2095 + 2090 * -1, -7400 + 53 * -86 + 11959, 96, 11 * 459 + 9289 + -7169 * 2, -7589 * 1 + 6797 + 793, -23 * -359 + -3373 + 529 * -9, 3, 6793 + 6791 * -1, 1644 + -8 * -790 + -7963 * 1, 1 * -115 + -8957 + -56 * -162, 10, -1543 + 1 * 1553, -6085 + -2 * -3043, -606 + 52 * -175 + 9714, -15590 + -5 * -3118, 1 * 5663 + 3538 + 8 * -1142, 3093 * -3 + 4388 + 4891, -2 * 1018 + -719 * -9 + -4182, -2 * 4449 + 7151 + 1762, -4566 + 3151 * -1 + 7970, -69 * 81 + 1e3 + -109 * -43, -7007 + -23 * -59 + -51 * -111]));
function NB() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(5287 * -1 + 9052 + -3749);
}
function FB() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const n = NB();
  return sessionStorage.setItem("dot-user-id", n), n;
}
const vB = (i) => Math.round(i / 500) * 500 / (-1318 * 6 + -27 * -233 + 2617);
function RB(i) {
  return i !== mA.RUNNING ? Mn.VISIBLE : Mn.VISIBLE_WITH_MASK;
}
async function MB() {
  return await SB() ? Qa.SIMD : Qa.NO_SIMD;
}
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vs = {}, ua = {}, WB = LB;
function LB(i, n) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, o = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(r, a) {
    t[e] = function(g) {
      if (o)
        if (o = !1, g)
          a(g);
        else {
          for (var s = new Array(arguments.length - 1), I = 0; I < s.length; )
            s[I++] = arguments[I];
          r.apply(null, s);
        }
    };
    try {
      i.apply(n || null, t);
    } catch (g) {
      o && (o = !1, a(g));
    }
  });
}
var _s = {};
(function(i) {
  var n = i;
  n.length = function(r) {
    var a = r.length;
    if (!a)
      return 0;
    for (var g = 0; --a % 4 > 1 && r.charAt(a) === "="; )
      ++g;
    return Math.ceil(r.length * 3) / 4 - g;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  n.encode = function(r, a, g) {
    for (var s = null, I = [], c = 0, Q = 0, x; a < g; ) {
      var d = r[a++];
      switch (Q) {
        case 0:
          I[c++] = t[d >> 2], x = (d & 3) << 4, Q = 1;
          break;
        case 1:
          I[c++] = t[x | d >> 4], x = (d & 15) << 2, Q = 2;
          break;
        case 2:
          I[c++] = t[x | d >> 6], I[c++] = t[d & 63], Q = 0;
          break;
      }
      c > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, I)), c = 0);
    }
    return Q && (I[c++] = t[x], I[c++] = 61, Q === 1 && (I[c++] = 61)), s ? (c && s.push(String.fromCharCode.apply(String, I.slice(0, c))), s.join("")) : String.fromCharCode.apply(String, I.slice(0, c));
  };
  var o = "invalid encoding";
  n.decode = function(r, a, g) {
    for (var s = g, I = 0, c, Q = 0; Q < r.length; ) {
      var x = r.charCodeAt(Q++);
      if (x === 61 && I > 1)
        break;
      if ((x = e[x]) === void 0)
        throw Error(o);
      switch (I) {
        case 0:
          c = x, I = 1;
          break;
        case 1:
          a[g++] = c << 2 | (x & 48) >> 4, c = x, I = 2;
          break;
        case 2:
          a[g++] = (c & 15) << 4 | (x & 60) >> 2, c = x, I = 3;
          break;
        case 3:
          a[g++] = (c & 3) << 6 | x, I = 0;
          break;
      }
    }
    if (I === 1)
      throw Error(o);
    return g - s;
  }, n.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(_s);
var OB = ui;
function ui() {
  this._listeners = {};
}
ui.prototype.on = function(i, n, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: n,
    ctx: t || this
  }), this;
};
ui.prototype.off = function(i, n) {
  if (i === void 0)
    this._listeners = {};
  else if (n === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === n ? t.splice(e, 1) : ++e;
  return this;
};
ui.prototype.emit = function(i) {
  var n = this._listeners[i];
  if (n) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < n.length; )
      n[e].fn.apply(n[e++].ctx, t);
  }
  return this;
};
var JB = fa(fa);
function fa(i) {
  return typeof Float32Array < "u" ? function() {
    var n = new Float32Array([-0]), t = new Uint8Array(n.buffer), e = t[3] === 128;
    function A(g, s, I) {
      n[0] = g, s[I] = t[0], s[I + 1] = t[1], s[I + 2] = t[2], s[I + 3] = t[3];
    }
    function o(g, s, I) {
      n[0] = g, s[I] = t[3], s[I + 1] = t[2], s[I + 2] = t[1], s[I + 3] = t[0];
    }
    i.writeFloatLE = e ? A : o, i.writeFloatBE = e ? o : A;
    function r(g, s) {
      return t[0] = g[s], t[1] = g[s + 1], t[2] = g[s + 2], t[3] = g[s + 3], n[0];
    }
    function a(g, s) {
      return t[3] = g[s], t[2] = g[s + 1], t[1] = g[s + 2], t[0] = g[s + 3], n[0];
    }
    i.readFloatLE = e ? r : a, i.readFloatBE = e ? a : r;
  }() : function() {
    function n(e, A, o, r) {
      var a = A < 0 ? 1 : 0;
      if (a && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, r);
      else if (isNaN(A))
        e(2143289344, o, r);
      else if (A > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, o, r);
      else if (A < 11754943508222875e-54)
        e((a << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, o, r);
      else {
        var g = Math.floor(Math.log(A) / Math.LN2), s = Math.round(A * Math.pow(2, -g) * 8388608) & 8388607;
        e((a << 31 | g + 127 << 23 | s) >>> 0, o, r);
      }
    }
    i.writeFloatLE = n.bind(null, ha), i.writeFloatBE = n.bind(null, pa);
    function t(e, A, o) {
      var r = e(A, o), a = (r >> 31) * 2 + 1, g = r >>> 23 & 255, s = r & 8388607;
      return g === 255 ? s ? NaN : a * (1 / 0) : g === 0 ? a * 1401298464324817e-60 * s : a * Math.pow(2, g - 150) * (s + 8388608);
    }
    i.readFloatLE = t.bind(null, ma), i.readFloatBE = t.bind(null, ya);
  }(), typeof Float64Array < "u" ? function() {
    var n = new Float64Array([-0]), t = new Uint8Array(n.buffer), e = t[7] === 128;
    function A(g, s, I) {
      n[0] = g, s[I] = t[0], s[I + 1] = t[1], s[I + 2] = t[2], s[I + 3] = t[3], s[I + 4] = t[4], s[I + 5] = t[5], s[I + 6] = t[6], s[I + 7] = t[7];
    }
    function o(g, s, I) {
      n[0] = g, s[I] = t[7], s[I + 1] = t[6], s[I + 2] = t[5], s[I + 3] = t[4], s[I + 4] = t[3], s[I + 5] = t[2], s[I + 6] = t[1], s[I + 7] = t[0];
    }
    i.writeDoubleLE = e ? A : o, i.writeDoubleBE = e ? o : A;
    function r(g, s) {
      return t[0] = g[s], t[1] = g[s + 1], t[2] = g[s + 2], t[3] = g[s + 3], t[4] = g[s + 4], t[5] = g[s + 5], t[6] = g[s + 6], t[7] = g[s + 7], n[0];
    }
    function a(g, s) {
      return t[7] = g[s], t[6] = g[s + 1], t[5] = g[s + 2], t[4] = g[s + 3], t[3] = g[s + 4], t[2] = g[s + 5], t[1] = g[s + 6], t[0] = g[s + 7], n[0];
    }
    i.readDoubleLE = e ? r : a, i.readDoubleBE = e ? a : r;
  }() : function() {
    function n(e, A, o, r, a, g) {
      var s = r < 0 ? 1 : 0;
      if (s && (r = -r), r === 0)
        e(0, a, g + A), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, g + o);
      else if (isNaN(r))
        e(0, a, g + A), e(2146959360, a, g + o);
      else if (r > 17976931348623157e292)
        e(0, a, g + A), e((s << 31 | 2146435072) >>> 0, a, g + o);
      else {
        var I;
        if (r < 22250738585072014e-324)
          I = r / 5e-324, e(I >>> 0, a, g + A), e((s << 31 | I / 4294967296) >>> 0, a, g + o);
        else {
          var c = Math.floor(Math.log(r) / Math.LN2);
          c === 1024 && (c = 1023), I = r * Math.pow(2, -c), e(I * 4503599627370496 >>> 0, a, g + A), e((s << 31 | c + 1023 << 20 | I * 1048576 & 1048575) >>> 0, a, g + o);
        }
      }
    }
    i.writeDoubleLE = n.bind(null, ha, 0, 4), i.writeDoubleBE = n.bind(null, pa, 4, 0);
    function t(e, A, o, r, a) {
      var g = e(r, a + A), s = e(r, a + o), I = (s >> 31) * 2 + 1, c = s >>> 20 & 2047, Q = 4294967296 * (s & 1048575) + g;
      return c === 2047 ? Q ? NaN : I * (1 / 0) : c === 0 ? I * 5e-324 * Q : I * Math.pow(2, c - 1075) * (Q + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, ma, 0, 4), i.readDoubleBE = t.bind(null, ya, 4, 0);
  }(), i;
}
function ha(i, n, t) {
  n[t] = i & 255, n[t + 1] = i >>> 8 & 255, n[t + 2] = i >>> 16 & 255, n[t + 3] = i >>> 24;
}
function pa(i, n, t) {
  n[t] = i >>> 24, n[t + 1] = i >>> 16 & 255, n[t + 2] = i >>> 8 & 255, n[t + 3] = i & 255;
}
function ma(i, n) {
  return (i[n] | i[n + 1] << 8 | i[n + 2] << 16 | i[n + 3] << 24) >>> 0;
}
function ya(i, n) {
  return (i[n] << 24 | i[n + 1] << 16 | i[n + 2] << 8 | i[n + 3]) >>> 0;
}
function ba(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var UB = YB;
function YB(i) {
  try {
    if (typeof ba != "function")
      return null;
    var n = ba(i);
    return n && (n.length || Object.keys(n).length) ? n : null;
  } catch {
    return null;
  }
}
var zs = {};
(function(i) {
  var n = i;
  n.length = function(t) {
    for (var e = 0, A = 0, o = 0; o < t.length; ++o)
      A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
    return e;
  }, n.read = function(t, e, A) {
    var o = A - e;
    if (o < 1)
      return "";
    for (var r = null, a = [], g = 0, s; e < A; )
      s = t[e++], s < 128 ? a[g++] = s : s > 191 && s < 224 ? a[g++] = (s & 31) << 6 | t[e++] & 63 : s > 239 && s < 365 ? (s = ((s & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (s >> 10), a[g++] = 56320 + (s & 1023)) : a[g++] = (s & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
    return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
  }, n.write = function(t, e, A) {
    for (var o = A, r, a, g = 0; g < t.length; ++g)
      r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
    return A - o;
  };
})(zs);
var PB = TB;
function TB(i, n, t) {
  var e = t || 8192, A = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > A)
      return i(a);
    r + a > e && (o = i(e), r = 0);
    var g = n.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), g;
  };
}
var Ui, wa;
function HB() {
  if (wa)
    return Ui;
  wa = 1, Ui = n;
  var i = dt();
  function n(o, r) {
    this.lo = o >>> 0, this.hi = r >>> 0;
  }
  var t = n.zero = new n(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = n.zeroHash = "\0\0\0\0\0\0\0\0";
  n.fromNumber = function(o) {
    if (o === 0)
      return t;
    var r = o < 0;
    r && (o = -o);
    var a = o >>> 0, g = (o - a) / 4294967296 >>> 0;
    return r && (g = ~g >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++g > 4294967295 && (g = 0))), new n(a, g);
  }, n.from = function(o) {
    if (typeof o == "number")
      return n.fromNumber(o);
    if (i.isString(o))
      if (i.Long)
        o = i.Long.fromString(o);
      else
        return n.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new n(o.low >>> 0, o.high >>> 0) : t;
  }, n.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, n.prototype.toLong = function(o) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var A = String.prototype.charCodeAt;
  return n.fromHash = function(o) {
    return o === e ? t : new n(
      (A.call(o, 0) | A.call(o, 1) << 8 | A.call(o, 2) << 16 | A.call(o, 3) << 24) >>> 0,
      (A.call(o, 4) | A.call(o, 5) << 8 | A.call(o, 6) << 16 | A.call(o, 7) << 24) >>> 0
    );
  }, n.prototype.toHash = function() {
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
  }, n.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, n.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, n.prototype.length = function() {
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Ui;
}
var Da;
function dt() {
  return Da || (Da = 1, function(i) {
    var n = i;
    n.asPromise = WB, n.base64 = _s, n.EventEmitter = OB, n.float = JB, n.inquire = UB, n.utf8 = zs, n.pool = PB, n.LongBits = HB(), n.isNode = !!(typeof Ze < "u" && Ze && Ze.process && Ze.process.versions && Ze.process.versions.node), n.global = n.isNode && Ze || typeof window < "u" && window || typeof self < "u" && self || Ze, n.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), n.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), n.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, n.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, n.isObject = function(A) {
      return A && typeof A == "object";
    }, n.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    n.isSet = function(A, o) {
      var r = A[o];
      return r != null && A.hasOwnProperty(o) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, n.Buffer = function() {
      try {
        var A = n.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(A) {
      return typeof A == "number" ? n.Buffer ? n._Buffer_allocUnsafe(A) : new n.Array(A) : n.Buffer ? n._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, n.Array = typeof Uint8Array < "u" ? Uint8Array : Array, n.Long = /* istanbul ignore next */
    n.global.dcodeIO && /* istanbul ignore next */
    n.global.dcodeIO.Long || /* istanbul ignore next */
    n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(A) {
      return A ? n.LongBits.from(A).toHash() : n.LongBits.zeroHash;
    }, n.longFromHash = function(A, o) {
      var r = n.LongBits.fromHash(A);
      return n.Long ? n.Long.fromBits(r.lo, r.hi, o) : r.toNumber(!!o);
    };
    function t(A, o, r) {
      for (var a = Object.keys(o), g = 0; g < a.length; ++g)
        (A[a[g]] === void 0 || !r) && (A[a[g]] = o[a[g]]);
      return A;
    }
    n.merge = t, n.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function o(r, a) {
        if (!(this instanceof o))
          return new o(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
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
      }), o;
    }
    n.newError = e, n.ProtocolError = e("ProtocolError"), n.oneOfGetter = function(A) {
      for (var o = {}, r = 0; r < A.length; ++r)
        o[A[r]] = 1;
      return function() {
        for (var a = Object.keys(this), g = a.length - 1; g > -1; --g)
          if (o[a[g]] === 1 && this[a[g]] !== void 0 && this[a[g]] !== null)
            return a[g];
      };
    }, n.oneOfSetter = function(A) {
      return function(o) {
        for (var r = 0; r < A.length; ++r)
          A[r] !== o && delete this[A[r]];
      };
    }, n.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, n._configure = function() {
      var A = n.Buffer;
      if (!A) {
        n._Buffer_from = n._Buffer_allocUnsafe = null;
        return;
      }
      n._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(o, r) {
        return new A(o, r);
      }, n._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new A(o);
      };
    };
  }(ua)), ua;
}
var Xs = j, ne = dt(), k0, fi = ne.LongBits, ka = ne.base64, Ga = ne.utf8;
function Oo(i, n, t) {
  this.fn = i, this.len = n, this.next = void 0, this.val = t;
}
function cr() {
}
function KB(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function j() {
  this.len = 0, this.head = new Oo(cr, 0, 0), this.tail = this.head, this.states = null;
}
var $s = function() {
  return ne.Buffer ? function() {
    return (j.create = function() {
      return new k0();
    })();
  } : function() {
    return new j();
  };
};
j.create = $s();
j.alloc = function(i) {
  return new ne.Array(i);
};
ne.Array !== Array && (j.alloc = ne.pool(j.alloc, ne.Array.prototype.subarray));
j.prototype._push = function(i, n, t) {
  return this.tail = this.tail.next = new Oo(i, n, t), this.len += n, this;
};
function Ir(i, n, t) {
  n[t] = i & 255;
}
function jB(i, n, t) {
  for (; i > 127; )
    n[t++] = i & 127 | 128, i >>>= 7;
  n[t] = i;
}
function xr(i, n) {
  this.len = i, this.next = void 0, this.val = n;
}
xr.prototype = Object.create(Oo.prototype);
xr.prototype.fn = jB;
j.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new xr(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
j.prototype.int32 = function(i) {
  return i < 0 ? this._push(Cr, 10, fi.fromNumber(i)) : this.uint32(i);
};
j.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function Cr(i, n, t) {
  for (; i.hi; )
    n[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    n[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  n[t++] = i.lo;
}
j.prototype.uint64 = function(i) {
  var n = fi.from(i);
  return this._push(Cr, n.length(), n);
};
j.prototype.int64 = j.prototype.uint64;
j.prototype.sint64 = function(i) {
  var n = fi.from(i).zzEncode();
  return this._push(Cr, n.length(), n);
};
j.prototype.bool = function(i) {
  return this._push(Ir, 1, i ? 1 : 0);
};
function G0(i, n, t) {
  n[t] = i & 255, n[t + 1] = i >>> 8 & 255, n[t + 2] = i >>> 16 & 255, n[t + 3] = i >>> 24;
}
j.prototype.fixed32 = function(i) {
  return this._push(G0, 4, i >>> 0);
};
j.prototype.sfixed32 = j.prototype.fixed32;
j.prototype.fixed64 = function(i) {
  var n = fi.from(i);
  return this._push(G0, 4, n.lo)._push(G0, 4, n.hi);
};
j.prototype.sfixed64 = j.prototype.fixed64;
j.prototype.float = function(i) {
  return this._push(ne.float.writeFloatLE, 4, i);
};
j.prototype.double = function(i) {
  return this._push(ne.float.writeDoubleLE, 8, i);
};
var qB = ne.Array.prototype.set ? function(i, n, t) {
  n.set(i, t);
} : function(i, n, t) {
  for (var e = 0; e < i.length; ++e)
    n[t + e] = i[e];
};
j.prototype.bytes = function(i) {
  var n = i.length >>> 0;
  if (!n)
    return this._push(Ir, 1, 0);
  if (ne.isString(i)) {
    var t = j.alloc(n = ka.length(i));
    ka.decode(i, t, 0), i = t;
  }
  return this.uint32(n)._push(qB, n, i);
};
j.prototype.string = function(i) {
  var n = Ga.length(i);
  return n ? this.uint32(n)._push(Ga.write, n, i) : this._push(Ir, 1, 0);
};
j.prototype.fork = function() {
  return this.states = new KB(this), this.head = this.tail = new Oo(cr, 0, 0), this.len = 0, this;
};
j.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Oo(cr, 0, 0), this.len = 0), this;
};
j.prototype.ldelim = function() {
  var i = this.head, n = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = n, this.len += t), this;
};
j.prototype.finish = function() {
  for (var i = this.head.next, n = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, n, t), t += i.len, i = i.next;
  return n;
};
j._configure = function(i) {
  k0 = i, j.create = $s(), k0._configure();
};
var ZB = fe, Ac = Xs;
(fe.prototype = Object.create(Ac.prototype)).constructor = fe;
var Ye = dt();
function fe() {
  Ac.call(this);
}
fe._configure = function() {
  fe.alloc = Ye._Buffer_allocUnsafe, fe.writeBytesBuffer = Ye.Buffer && Ye.Buffer.prototype instanceof Uint8Array && Ye.Buffer.prototype.set.name === "set" ? function(i, n, t) {
    n.set(i, t);
  } : function(i, n, t) {
    if (i.copy)
      i.copy(n, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        n[t++] = i[e++];
  };
};
fe.prototype.bytes = function(i) {
  Ye.isString(i) && (i = Ye._Buffer_from(i, "base64"));
  var n = i.length >>> 0;
  return this.uint32(n), n && this._push(fe.writeBytesBuffer, n, i), this;
};
function VB(i, n, t) {
  i.length < 40 ? Ye.utf8.write(i, n, t) : n.utf8Write ? n.utf8Write(i, t) : n.write(i, t);
}
fe.prototype.string = function(i) {
  var n = Ye.Buffer.byteLength(i);
  return this.uint32(n), n && this._push(VB, n, i), this;
};
fe._configure();
var ec = gA, pe = dt(), S0, tc = pe.LongBits, _B = pe.utf8;
function Ie(i, n) {
  return RangeError("index out of range: " + i.pos + " + " + (n || 1) + " > " + i.len);
}
function gA(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var Sa = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new gA(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new gA(i);
  throw Error("illegal buffer");
}, oc = function() {
  return pe.Buffer ? function(i) {
    return (gA.create = function(n) {
      return pe.Buffer.isBuffer(n) ? new S0(n) : Sa(n);
    })(i);
  } : Sa;
};
gA.create = oc();
gA.prototype._slice = pe.Array.prototype.subarray || /* istanbul ignore next */
pe.Array.prototype.slice;
gA.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Ie(this, 10);
    return i;
  };
}();
gA.prototype.int32 = function() {
  return this.uint32() | 0;
};
gA.prototype.sint32 = function() {
  var i = this.uint32();
  return i >>> 1 ^ -(i & 1) | 0;
};
function Yi() {
  var i = new tc(0, 0), n = 0;
  if (this.len - this.pos > 4) {
    for (; n < 4; ++n)
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << n * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    if (i.lo = (i.lo | (this.buf[this.pos] & 127) << 28) >>> 0, i.hi = (i.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return i;
    n = 0;
  } else {
    for (; n < 3; ++n) {
      if (this.pos >= this.len)
        throw Ie(this);
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << n * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
    return i.lo = (i.lo | (this.buf[this.pos++] & 127) << n * 7) >>> 0, i;
  }
  if (this.len - this.pos > 4) {
    for (; n < 5; ++n)
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << n * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
  } else
    for (; n < 5; ++n) {
      if (this.pos >= this.len)
        throw Ie(this);
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << n * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
  throw Error("invalid varint encoding");
}
gA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function qn(i, n) {
  return (i[n - 4] | i[n - 3] << 8 | i[n - 2] << 16 | i[n - 1] << 24) >>> 0;
}
gA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ie(this, 4);
  return qn(this.buf, this.pos += 4);
};
gA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Ie(this, 4);
  return qn(this.buf, this.pos += 4) | 0;
};
function Na() {
  if (this.pos + 8 > this.len)
    throw Ie(this, 8);
  return new tc(qn(this.buf, this.pos += 4), qn(this.buf, this.pos += 4));
}
gA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Ie(this, 4);
  var i = pe.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
gA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Ie(this, 4);
  var i = pe.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
gA.prototype.bytes = function() {
  var i = this.uint32(), n = this.pos, t = this.pos + i;
  if (t > this.len)
    throw Ie(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(n, t) : n === t ? new this.buf.constructor(0) : this._slice.call(this.buf, n, t);
};
gA.prototype.string = function() {
  var i = this.bytes();
  return _B.read(i, 0, i.length);
};
gA.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw Ie(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw Ie(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
gA.prototype.skipType = function(i) {
  switch (i) {
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
      for (; (i = this.uint32() & 7) !== 4; )
        this.skipType(i);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + i + " at offset " + this.pos);
  }
  return this;
};
gA._configure = function(i) {
  S0 = i, gA.create = oc(), S0._configure();
  var n = pe.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  pe.merge(gA.prototype, {
    int64: function() {
      return Yi.call(this)[n](!1);
    },
    uint64: function() {
      return Yi.call(this)[n](!0);
    },
    sint64: function() {
      return Yi.call(this).zzDecode()[n](!1);
    },
    fixed64: function() {
      return Na.call(this)[n](!0);
    },
    sfixed64: function() {
      return Na.call(this)[n](!1);
    }
  });
};
var zB = Ct, nc = ec;
(Ct.prototype = Object.create(nc.prototype)).constructor = Ct;
var Fa = dt();
function Ct(i) {
  nc.call(this, i);
}
Ct._configure = function() {
  Fa.Buffer && (Ct.prototype._slice = Fa.Buffer.prototype.slice);
};
Ct.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Ct._configure();
var ic = {}, XB = uo, Br = dt();
(uo.prototype = Object.create(Br.EventEmitter.prototype)).constructor = uo;
function uo(i, n, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  Br.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!n, this.responseDelimited = !!t;
}
uo.prototype.rpcCall = function i(n, t, e, A, o) {
  if (!A)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return Br.asPromise(i, r, n, t, e, A);
  if (!r.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return r.rpcImpl(
      n,
      t[r.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(a, g) {
        if (a)
          return r.emit("error", a, n), o(a);
        if (g === null) {
          r.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(g instanceof e))
          try {
            g = e[r.responseDelimited ? "decodeDelimited" : "decode"](g);
          } catch (s) {
            return r.emit("error", s, n), o(s);
          }
        return r.emit("data", g, n), o(null, g);
      }
    );
  } catch (a) {
    r.emit("error", a, n), setTimeout(function() {
      o(a);
    }, 0);
    return;
  }
};
uo.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var n = i;
  n.Service = XB;
})(ic);
var $B = {};
(function(i) {
  var n = i;
  n.build = "minimal", n.Writer = Xs, n.BufferWriter = ZB, n.Reader = ec, n.BufferReader = zB, n.util = dt(), n.rpc = ic, n.roots = $B, n.configure = t;
  function t() {
    n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
  }
  t();
})(Vs);
var H = Vs;
const m = H.Reader, K = H.Writer, u = H.util, B = H.roots.default || (H.roots.default = {}), fo = B.dot = (() => {
  const i = {};
  return i.Content = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = u.newBuffer([]), n.prototype.iv = u.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = u.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof m || (t = m.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new B.dot.Content();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
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
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof m || (t = new m(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? u.base64.decode(t.token, e.token = u.newBuffer(u.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? u.base64.decode(t.iv, e.iv = u.newBuffer(u.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = u.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = u.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? u.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? u.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, n;
  }(), i.v4 = function() {
    const n = {};
    return n.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.images = u.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = K.create()), e.images != null && e.images.length)
          for (let o = 0; o < e.images.length; ++o)
            B.dot.Image.encode(e.images[o], A.uint32(
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(B.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let A = 0; A < e.images.length; ++A) {
            let o = B.dot.Image.verify(e.images[A]);
            if (o)
              return "images." + o;
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
          for (let o = 0; o < e.images.length; ++o) {
            if (typeof e.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[o] = B.dot.Image.fromObject(e.images[o]);
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
        let o = {};
        if ((A.arrays || A.defaults) && (o.images = []), A.defaults && (o.metadata = null), e.images && e.images.length) {
          o.images = [];
          for (let r = 0; r < e.images.length; ++r)
            o.images[r] = B.dot.Image.toObject(e.images[r], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), n.Metadata = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: u.oneOfGetter(e = ["sessionToken"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: u.oneOfGetter(e = ["web", "android", "ios"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && B.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && B.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && B.dot.v4.IosMetadata.encode(A.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Metadata();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !u.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !u.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let r = B.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = B.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = B.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Metadata)
          return A;
        let o = new B.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              o.platform = A.platform;
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
        if (A.sessionToken != null && (o.sessionToken = String(A.sessionToken)), A.componentVersion != null && (o.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = B.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = B.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = B.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? B.dot.Platform[A.platform] === void 0 ? A.platform : B.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = B.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = B.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = B.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), n.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = u.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.dynamicCameraFrameProperties = u.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: u.oneOfGetter(e = ["device"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: u.oneOfGetter(e = ["tamperingIndicators"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: u.oneOfGetter(e = ["croppedYuv420Image"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = K.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let r = 0; r < A.supportedAbis.length; ++r)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[r]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.AndroidCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.AndroidMetadata(), g, s;
        for (; A.pos < r; ) {
          let I = A.uint32();
          switch (I >>> 3) {
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
              a.dynamicCameraFrameProperties === u.emptyObject && (a.dynamicCameraFrameProperties = {});
              let c = A.uint32() + A.pos;
              for (g = "", s = null; A.pos < c; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    g = A.string();
                    break;
                  case 2:
                    s = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[g] = s;
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
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!u.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !u.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = B.dot.v4.AndroidCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (o)
            return "detectionNormalizedRectangle." + o;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let o = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (o)
            return "croppedYuv420Image." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.AndroidMetadata)
          return A;
        let o = new B.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let r = 0; r < A.supportedAbis.length; ++r)
            o.supportedAbis[r] = String(A.supportedAbis[r]);
        }
        if (A.device != null && (o.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          o.camera = B.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, o.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (o.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          o.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            r.supportedAbis[g] = A.supportedAbis[g];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? u.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let g = 0; g < a.length; ++g)
            r.dynamicCameraFrameProperties[a[g]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.AndroidCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (r.tamperingIndicators = o.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : o.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, o.oneofs && (r._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (r.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, o), o.oneofs && (r._croppedYuv420Image = "croppedYuv420Image")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), n.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.AndroidCamera();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), n.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = u.newBuffer([]), t.prototype.uPlane = u.newBuffer([]), t.prototype.vPlane = u.newBuffer([]), t.create = function(e) {
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.Yuv420Image();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.size = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.yPlane = e.bytes();
              break;
            }
            case 3: {
              r.uPlane = e.bytes();
              break;
            }
            case 4: {
              r.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.size = null, A.bytes === String ? o.yPlane = "" : (o.yPlane = [], A.bytes !== Array && (o.yPlane = u.newBuffer(o.yPlane))), A.bytes === String ? o.uPlane = "" : (o.uPlane = [], A.bytes !== Array && (o.uPlane = u.newBuffer(o.uPlane))), A.bytes === String ? o.vPlane = "" : (o.vPlane = [], A.bytes !== Array && (o.vPlane = u.newBuffer(o.vPlane)))), e.size != null && e.hasOwnProperty("size") && (o.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (o.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (o.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (o.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), n.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = u.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.isoValues = u.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = K.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[r[a]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.isoValues != null && A.isoValues.length) {
          o.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let r = 0; r < A.isoValues.length; ++r)
            o.int32(A.isoValues[r]);
          o.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.IosCamera.encode(A.camera, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.IosMetadata(), g, s;
        for (; A.pos < r; ) {
          let I = A.uint32();
          switch (I >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === u.emptyObject && (a.architectureInfo = {});
              let c = A.uint32() + A.pos;
              for (g = "", s = !1; A.pos < c; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    g = A.string();
                    break;
                  case 2:
                    s = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.architectureInfo[g] = s;
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
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (I & 7) === 2) {
                let c = A.uint32() + A.pos;
                for (; A.pos < c; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !u.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!u.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let o = Object.keys(A.architectureInfo);
          for (let r = 0; r < o.length; ++r)
            if (typeof A.architectureInfo[o[r]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let o = B.dot.v4.IosCamera.verify(A.camera);
          if (o)
            return "camera." + o;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let o = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (o)
            return "detectionNormalizedRectangle." + o;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || u.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let o = 0; o < A.isoValues.length; ++o)
            if (!u.isInteger(A.isoValues[o]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let o = new B.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (o.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          o.architectureInfo = {};
          for (let r = Object.keys(A.architectureInfo), a = 0; a < r.length; ++a)
            o.architectureInfo[r[a]] = !!A.architectureInfo[r[a]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          o.camera = B.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          o.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? u.base64.decode(A.digests[r], o.digests[r] = u.newBuffer(u.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          o.isoValues = [];
          for (let r = 0; r < A.isoValues.length; ++r)
            o.isoValues[r] = A.isoValues[r] | 0;
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        (o.arrays || o.defaults) && (r.digests = [], r.isoValues = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.architectureInfo = {}), o.defaults && (r.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (r.cameraModelId = A.cameraModelId);
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let g = 0; g < a.length; ++g)
            r.architectureInfo[a[g]] = A.architectureInfo[a[g]];
        }
        if (A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? u.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        if (A.isoValues && A.isoValues.length) {
          r.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            r.isoValues[g] = A.isoValues[g];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (r.camera = B.dot.v4.IosCamera.toObject(A.camera, o), o.oneofs && (r._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (r.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, o), o.oneofs && (r._detectionNormalizedRectangle = "detectionNormalizedRectangle")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), n.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.IosCamera();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
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
        let o = {};
        return A.defaults && (o.resolution = null, o.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (o.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (o.rotationDegrees = e.rotationDegrees), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), n.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = u.emptyArray, t.prototype.hashedDetectedImages = u.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = u.emptyArray, t.prototype.detectionRecord = u.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: u.oneOfGetter(e = ["croppedImage"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = K.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let r = 0; r < A.availableCameraProperties.length; ++r)
            B.dot.v4.CameraProperties.encode(A.availableCameraProperties[r], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[r]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let r = 0; r < A.detectionRecord.length; ++r)
            B.dot.v4.DetectedObject.encode(A.detectionRecord[r], o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r)
            B.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && B.dot.Image.encode(A.croppedImage, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.WebMetadata();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let o = B.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (o)
            return "currentCameraProperties." + o;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            let r = B.dot.v4.CameraProperties.verify(A.availableCameraProperties[o]);
            if (r)
              return "availableCameraProperties." + r;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            if (!u.isString(A.hashedDetectedImages[o]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o) {
            let r = B.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[o]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            let r = B.dot.v4.DetectedObject.verify(A.detectionRecord[o]);
            if (r)
              return "detectionRecord." + r;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let o = B.dot.Image.verify(A.croppedImage);
          if (o)
            return "croppedImage." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.WebMetadata)
          return A;
        let o = new B.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          o.currentCameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          o.availableCameraProperties = [];
          for (let r = 0; r < A.availableCameraProperties.length; ++r) {
            if (typeof A.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            o.availableCameraProperties[r] = B.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[r]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          o.hashedDetectedImages = [];
          for (let r = 0; r < A.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = String(A.hashedDetectedImages[r]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          o.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < A.hashedDetectedImagesWithTimestamp.length; ++r) {
            if (typeof A.hashedDetectedImagesWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            o.hashedDetectedImagesWithTimestamp[r] = B.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          o.detectionRecord = [];
          for (let r = 0; r < A.detectionRecord.length; ++r) {
            if (typeof A.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            o.detectionRecord[r] = B.dot.v4.DetectedObject.fromObject(A.detectionRecord[r]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          o.croppedImage = B.dot.Image.fromObject(A.croppedImage);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), o.defaults && (r.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, o)), A.availableCameraProperties && A.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            r.availableCameraProperties[a] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], o);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            r.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          r.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            r.detectionRecord[a] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[a], o);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            r.hashedDetectedImagesWithTimestamp[a] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], o);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (r.croppedImage = B.dot.Image.toObject(A.croppedImage, o), o.oneofs && (r._croppedImage = "croppedImage")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), n.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.imageHash = e.string();
              break;
            }
            case 2: {
              r.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", u.Long) {
            let r = new u.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), n.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: u.oneOfGetter(e = ["aspectRatio"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: u.oneOfGetter(e = ["autoGainControl"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: u.oneOfGetter(e = ["channelCount"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: u.oneOfGetter(e = ["deviceId"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: u.oneOfGetter(e = ["displaySurface"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: u.oneOfGetter(e = ["echoCancellation"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: u.oneOfGetter(e = ["facingMode"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: u.oneOfGetter(e = ["frameRate"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: u.oneOfGetter(e = ["groupId"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: u.oneOfGetter(e = ["height"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: u.oneOfGetter(e = ["noiseSuppression"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: u.oneOfGetter(e = ["sampleRate"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: u.oneOfGetter(e = ["sampleSize"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: u.oneOfGetter(e = ["width"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: u.oneOfGetter(e = ["deviceName"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.MediaTrackSettings();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MediaTrackSettings)
          return A;
        let o = new B.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (o.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (o.autoGainControl = !!A.autoGainControl), A.channelCount != null && (o.channelCount = A.channelCount | 0), A.deviceId != null && (o.deviceId = String(A.deviceId)), A.displaySurface != null && (o.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (o.echoCancellation = !!A.echoCancellation), A.facingMode != null && (o.facingMode = String(A.facingMode)), A.frameRate != null && (o.frameRate = Number(A.frameRate)), A.groupId != null && (o.groupId = String(A.groupId)), A.height != null && (o.height = A.height | 0), A.noiseSuppression != null && (o.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (o.sampleRate = A.sampleRate | 0), A.sampleSize != null && (o.sampleSize = A.sampleSize | 0), A.width != null && (o.width = A.width | 0), A.deviceName != null && (o.deviceName = String(A.deviceName)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, o.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, o.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, o.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, o.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, o.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, o.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, o.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), n.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.ImageBitmap();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.width = e.int32();
              break;
            }
            case 2: {
              r.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), n.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: u.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.CameraProperties();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let o = B.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = B.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.CameraProperties)
          return A;
        let o = new B.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = B.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = B.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), n.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.DetectedObject();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.brightness = e.float();
              break;
            }
            case 2: {
              r.sharpness = e.float();
              break;
            }
            case 3: {
              r.hotspots = e.float();
              break;
            }
            case 4: {
              r.confidence = e.float();
              break;
            }
            case 5: {
              r.faceSize = e.float();
              break;
            }
            case 6: {
              r.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              r.smallestEdge = e.float();
              break;
            }
            case 8: {
              r.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              r.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              r.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              r.topRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = B.dot.v4.Point.toObject(e.topRight, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), n.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.Point();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.x = e.float();
              break;
            }
            case 2: {
              r.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), n.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.FaceContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), n.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.DocumentContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), n.Blob = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: u.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && B.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && B.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && B.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && B.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && B.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && B.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Blob();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = B.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = B.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (r)
              return "travelDocumentContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Blob)
          return A;
        let o = new B.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = B.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = B.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = B.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = B.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          o.travelDocumentContent = B.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (r.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, o), o.oneofs && (r.blob = "travelDocumentContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), n.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              r.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              r.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.ldsMasterFile = null, o.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, o.authenticationStatus = null, o.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (o.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (o.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (o.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), n.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.LdsMasterFile();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (o.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), n.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.comHeaderAndDataGroupPresenceInformation = null, t.prototype.sodDocumentSecurityObject = null, t.prototype.dg1MachineReadableZoneInformation = null, t.prototype.dg2EncodedIdentificationFeaturesFace = null, t.prototype.dg3AdditionalIdentificationFeatureFingers = null, t.prototype.dg4AdditionalIdentificationFeatureIrises = null, t.prototype.dg5DisplayedPortrait = null, t.prototype.dg7DisplayedSignatureOrUsualMark = null, t.prototype.dg8DataFeatures = null, t.prototype.dg9StructureFeatures = null, t.prototype.dg10SubstanceFeatures = null, t.prototype.dg11AdditionalPersonalDetails = null, t.prototype.dg12AdditionalDocumentDetails = null, t.prototype.dg13OptionalDetails = null, t.prototype.dg14SecurityOptions = null, t.prototype.dg15ActiveAuthenticationPublicKeyInfo = null, t.prototype.dg16PersonsToNotify = null;
      let e;
      return Object.defineProperty(t.prototype, "_dg3AdditionalIdentificationFeatureFingers", {
        get: u.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: u.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: u.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: u.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: u.oneOfGetter(e = ["dg8DataFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: u.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: u.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: u.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: u.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: u.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: u.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: u.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: u.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && B.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && B.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && B.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && B.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && B.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && B.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, o.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, o.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, o.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, o.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, o.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, o.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && B.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && B.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, o.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && B.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, o.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (o)
            return "comHeaderAndDataGroupPresenceInformation." + o;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (o)
            return "sodDocumentSecurityObject." + o;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (o)
            return "dg1MachineReadableZoneInformation." + o;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (o)
            return "dg2EncodedIdentificationFeaturesFace." + o;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (o)
            return "dg3AdditionalIdentificationFeatureFingers." + o;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (o)
            return "dg4AdditionalIdentificationFeatureIrises." + o;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (o)
            return "dg5DisplayedPortrait." + o;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (o)
            return "dg7DisplayedSignatureOrUsualMark." + o;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (o)
            return "dg8DataFeatures." + o;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (o)
            return "dg9StructureFeatures." + o;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (o)
            return "dg10SubstanceFeatures." + o;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (o)
            return "dg11AdditionalPersonalDetails." + o;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (o)
            return "dg12AdditionalDocumentDetails." + o;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (o)
            return "dg13OptionalDetails." + o;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (o)
            return "dg14SecurityOptions." + o;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (o)
            return "dg15ActiveAuthenticationPublicKeyInfo." + o;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let o = B.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (o)
            return "dg16PersonsToNotify." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1eMrtdApplication)
          return A;
        let o = new B.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          o.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          o.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          o.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          o.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          o.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          o.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          o.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          o.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          o.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          o.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          o.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          o.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          o.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          o.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          o.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          o.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          o.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.comHeaderAndDataGroupPresenceInformation = null, r.sodDocumentSecurityObject = null, r.dg1MachineReadableZoneInformation = null, r.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (r.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, o)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (r.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, o)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (r.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, o)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (r.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, o)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (r.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, o), o.oneofs && (r._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (r.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, o), o.oneofs && (r._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (r.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, o), o.oneofs && (r._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (r.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, o), o.oneofs && (r._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (r.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, o), o.oneofs && (r._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (r.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, o), o.oneofs && (r._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (r.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, o), o.oneofs && (r._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (r.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, o), o.oneofs && (r._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (r.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, o), o.oneofs && (r._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (r.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, o), o.oneofs && (r._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (r.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, o), o.oneofs && (r._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (r.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, o), o.oneofs && (r._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (r.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, o), o.oneofs && (r._dg16PersonsToNotify = "dg16PersonsToNotify")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), n.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: u.oneOfGetter(e = ["bytes"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.Lds1ElementaryFile();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || u.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1ElementaryFile)
          return A;
        let o = new B.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              o.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            o.id = 0;
            break;
          case "ID_COM":
          case 1:
            o.id = 1;
            break;
          case "ID_SOD":
          case 2:
            o.id = 2;
            break;
          case "ID_DG1":
          case 3:
            o.id = 3;
            break;
          case "ID_DG2":
          case 4:
            o.id = 4;
            break;
          case "ID_DG3":
          case 5:
            o.id = 5;
            break;
          case "ID_DG4":
          case 6:
            o.id = 6;
            break;
          case "ID_DG5":
          case 7:
            o.id = 7;
            break;
          case "ID_DG7":
          case 8:
            o.id = 8;
            break;
          case "ID_DG8":
          case 9:
            o.id = 9;
            break;
          case "ID_DG9":
          case 10:
            o.id = 10;
            break;
          case "ID_DG10":
          case 11:
            o.id = 11;
            break;
          case "ID_DG11":
          case 12:
            o.id = 12;
            break;
          case "ID_DG12":
          case 13:
            o.id = 13;
            break;
          case "ID_DG13":
          case 14:
            o.id = 14;
            break;
          case "ID_DG14":
          case 15:
            o.id = 15;
            break;
          case "ID_DG15":
          case 16:
            o.id = 16;
            break;
          case "ID_DG16":
          case 17:
            o.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? u.base64.decode(A.bytes, o.bytes = u.newBuffer(u.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (o.bytes = A.bytes)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.id = o.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (r.id = o.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (r.bytes = o.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : o.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, o.oneofs && (r._bytes = "bytes")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "ID_UNSPECIFIED"] = 0, o[A[1] = "ID_COM"] = 1, o[A[2] = "ID_SOD"] = 2, o[A[3] = "ID_DG1"] = 3, o[A[4] = "ID_DG2"] = 4, o[A[5] = "ID_DG3"] = 5, o[A[6] = "ID_DG4"] = 6, o[A[7] = "ID_DG5"] = 7, o[A[8] = "ID_DG7"] = 8, o[A[9] = "ID_DG8"] = 9, o[A[10] = "ID_DG9"] = 10, o[A[11] = "ID_DG10"] = 11, o[A[12] = "ID_DG11"] = 12, o[A[13] = "ID_DG12"] = 13, o[A[14] = "ID_DG13"] = 14, o[A[15] = "ID_DG14"] = 15, o[A[16] = "ID_DG15"] = 16, o[A[17] = "ID_DG16"] = 17, o;
      }(), t;
    }(), n.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), n.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.data = null, o.chip = null), e.data != null && e.hasOwnProperty("data") && (o.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (o.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), n.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.DataAuthenticationStatus();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.status = e.int32();
              break;
            }
            case 2: {
              r.protocol = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, o.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (o.status = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : B.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (o.protocol = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      }(), t.Protocol = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      }(), t;
    }(), n.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.status = 0, t.prototype.protocol = null, t.prototype.activeAuthenticationResponse = null;
      let e;
      return Object.defineProperty(t.prototype, "_protocol", {
        get: u.oneOfGetter(e = ["protocol"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: u.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = K.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || u.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.ChipAuthenticationStatus)
          return A;
        let o = new B.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              o.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            o.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            o.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            o.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            o.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              o.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            o.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            o.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            o.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            o.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? u.base64.decode(A.activeAuthenticationResponse, o.activeAuthenticationResponse = u.newBuffer(u.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (o.activeAuthenticationResponse = A.activeAuthenticationResponse)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.status = o.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (r.status = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (r.protocol = o.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, o.oneofs && (r._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (r.activeAuthenticationResponse = o.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : o.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, o.oneofs && (r._activeAuthenticationResponse = "activeAuthenticationResponse")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "STATUS_UNSPECIFIED"] = 0, o[A[1] = "STATUS_AUTHENTICATED"] = 1, o[A[2] = "STATUS_DENIED"] = 2, o[A[3] = "STATUS_NOT_SUPPORTED"] = 3, o;
      }(), t.Protocol = function() {
        const A = {}, o = Object.create(A);
        return o[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, o[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, o[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, o[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, o;
      }(), t;
    }(), n.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.image = null, t.prototype.segments = u.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: u.oneOfGetter(e = ["image"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = K.create()), A.segments != null && A.segments.length)
          for (let r = 0; r < A.segments.length; ++r)
            B.dot.v4.EyeGazeLivenessSegment.encode(A.segments[r], o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof m || (A = m.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof m || (A = new m(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let o = B.dot.Image.verify(A.image);
          if (o)
            return "image." + o;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let o = 0; o < A.segments.length; ++o) {
            let r = B.dot.v4.EyeGazeLivenessSegment.verify(A.segments[o]);
            if (r)
              return "segments." + r;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let o = B.dot.v4.Metadata.verify(A.metadata);
          if (o)
            return "metadata." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.EyeGazeLivenessContent)
          return A;
        let o = new B.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          o.image = B.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          o.segments = [];
          for (let r = 0; r < A.segments.length; ++r) {
            if (typeof A.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            o.segments[r] = B.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[r]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          o.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.segments = []), o.defaults && (r.metadata = null), A.segments && A.segments.length) {
          r.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            r.segments[a] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], o);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (r.metadata = B.dot.v4.Metadata.toObject(A.metadata, o)), A.image != null && A.hasOwnProperty("image") && (r.image = B.dot.Image.toObject(A.image, o), o.oneofs && (r._image = "image")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), n.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), n.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), n.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.SmileLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.neutralExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.smileExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              r.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = B.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = B.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), n.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
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
        e instanceof m || (e = m.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new B.dot.v4.PalmContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof m || (e = new m(e)), this.decode(e, e.uint32());
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
        let o = {};
        return A.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), n;
  }(), i.Image = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = u.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = K.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof m || (t = m.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new B.dot.Image();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof m || (t = new m(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  }(), i.ImageSize = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.width = 0, n.prototype.height = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = K.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof m || (t = m.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new B.dot.ImageSize();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.width = t.int32();
            break;
          }
          case 2: {
            o.height = t.int32();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof m || (t = new m(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, n;
  }(), i.Int32List = function() {
    function n(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.items = u.emptyArray, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof m || (t = m.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new B.dot.Int32List();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (r & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                o.items.push(t.int32());
            } else
              o.items.push(t.int32());
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof m || (t = new m(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!u.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, n.fromObject = function(t) {
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
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let o = 0; o < t.items.length; ++o)
          A.items[o] = t.items[o];
      }
      return A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, n;
  }(), i.Platform = function() {
    const n = {}, t = Object.create(n);
    return t[n[0] = "WEB"] = 0, t[n[1] = "ANDROID"] = 1, t[n[2] = "IOS"] = 2, t;
  }(), i.RectangleDouble = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.left = 0, n.prototype.top = 0, n.prototype.right = 0, n.prototype.bottom = 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof m || (t = m.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new B.dot.RectangleDouble();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.left = t.double();
            break;
          }
          case 2: {
            o.top = t.double();
            break;
          }
          case 3: {
            o.right = t.double();
            break;
          }
          case 4: {
            o.bottom = t.double();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof m || (t = new m(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, n;
  }(), i.DigestWithTimestamp = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.digest = u.newBuffer([]), n.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = K.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof m || (t = m.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new B.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.digest = t.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof m || (t = new m(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? u.base64.decode(t.digest, e.digest = u.newBuffer(u.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (u.Long ? (e.timestampMillis = u.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = u.newBuffer(A.digest))), u.Long) {
          let o = new u.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? u.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, n;
  }(), i;
})();
(function(i, n) {
  function t(a, g, s, I, c) {
    return CA(a - -281, g);
  }
  function e(a, g, s, I, c) {
    return CA(c - 541, s);
  }
  function A(a, g, s, I, c) {
    return CA(s - -428, I);
  }
  function o(a, g, s, I, c) {
    return CA(g - 953, c);
  }
  const r = i();
  for (; ; )
    try {
      if (-parseInt(o(1587, 1638, 1600, 1663, "uqpU")) / 1 * (-parseInt(t(220, "iBFH", 113, 131, 267)) / 2) + parseInt(o(1663, 1567, 1454, 1485, "!wmr")) / 3 * (parseInt(A(11, 65, 68, "JZEW", 105)) / 4) + -parseInt(A(-26, 150, 88, "^Yqs", 179)) / 5 * (parseInt(t(329, "$[FD", 369, 399, 340)) / 6) + -parseInt(e(1125, 1120, ")L#q", 1281, 1188)) / 7 * (-parseInt(o(1466, 1483, 1535, 1479, "T1P1")) / 8) + parseInt(t(200, "&4sn", 171, 298, 298)) / 9 + parseInt(e(1109, 1159, "gOW4", 1226, 1201)) / 10 * (parseInt(o(1678, 1639, 1672, 1594, "X)oi")) / 11) + -parseInt(o(1666, 1614, 1514, 1689, "X)oi")) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Zn, 493652 + -64233 * -3);
function CA(i, n) {
  const t = Zn();
  return CA = function(e, A) {
    e = e - (10343 + -13 * 759);
    let o = t[e];
    if (CA.OpLURv === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      CA.PEyfhq = I, i = arguments, CA.OpLURv = !0;
    }
    const a = t[-8199 + -9 * -911], g = e + a, s = i[g];
    return s ? o = s : (CA.cIkigK === void 0 && (CA.cIkigK = !0), o = CA.PEyfhq(o, A), i[g] = o), o;
  }, CA(i, n);
}
function Zn() {
  const i = ["DuNdKCoDiq", "wCkxW4tcKMiuW4vcWOddJmk0", "W4bWxCkvDG", "WQHaWR8/BG", "W55BW4/dGCos", "WRFdRSkVW5NdMq", "W7FdVZNcTSkM", "wCkXWPRcKSkA", "cmkfW5j4W6K", "r18SfSkG", "mcm3W7KO", "f8kMW6dcPCkW", "cL/dPmoKba", "CmkaWOZcHmkO", "WOVcTCoEWOaO", "uIe7W40z", "omoZWPhcLWu", "W5CZACkxxG", "iuqQgCkl", "W4Hib8oWqW", "W7BdP3xcTCkM", "WOVcOSoVWOn0", "vsVdHY1V", "iCoQW7NcRaq", "W5RdJ8oUsHy", "a8oNwh5U", "WOxcQSk1W63dLG", "W7j0WRGAW6m", "WRBdImkYWQyW", "WRddKwVcPSki", "W7i/DstcSq", "jhZdOteG", "WPS9CbZcPG", "WPL3FJNdUW", "WPNdLZbJW7mCyI/cKCkMuGS", "W41sWRu+W6e", "BHNdOZzb", "W7juWPuhWPS", "WQeYWRhdGwC", "sCkanGpcNW", "m8oGW6aUW74", "h2ddRSoQdW", "m8kGW7ffAW", "su/cTaRcRW", "ESo4W7lcVmoQ", "gfVcMhNdSq", "W7RcLmoJW6FdLG", "E8oYFmokW6/cRcxdGG", "WOFcQYKxvd8DW6ecWPi2xCkppG", "lCkYzmosW7W", "W7xcISkfW77dHG", "W6uCWR0+ra", "Ba3dUYLa", "WQxcISopW7zs", "WPNdLCkKAv0", "WRNcLCkLvrS", "W5nSwCkjea", "WP3cHSkSW4FdNG", "WRaJrZtdGa", "sCk+i8o8kq", "WOlcMNBcVCkN", "FhBcMWJcOa", "WRtdICoZWQq2", "WQmIWOxdRai", "W4LSuSo0W6K", "WPtcHmkIW5tcJW", "WQdcRmkNWRhdLq", "W7ZdTSkcvge", "j8k0W49wW58", "W7DfW7NdPSoE", "W5FdVSkOW4xdNG", "W6rJW5tdHmkA", "W6FdQmopW7ddPvT4WPGb", "WOxcRcezvJWDWPKgWQmermke", "aSkHW6Da", "WQu0WRZdSCkT", "b8oDW7NcKHi", "WPdcQuKeWOG", "cCoNWQBdIGS", "qCkAWOFcHxu", "WOJdI8k6W53dKW", "fwxdOGdcOa", "WQJcSSkWs1G", "W4WcW5PBEWxdU3Xata", "W6bOdSoYW6W", "WP/cJ8kzza", "W7fsg8oEW6m", "W5uSiSkzEq", "WOhdO03cT8kF", "WPlcRSkhWOpdGW", "EZldQIL5", "scRdHSoCCq", "emk+qmo6nSk2lmoLW6C", "l8obDMj0", "l8kSs8oYW5i", "W7OTWRqxW7m", "WOlcJSkkW5ldVW", "ke7dIZ4R", "WRu4W6BdVmoe", "teJdSCo6dG", "WQbCWPKgwq", "dmkNW6zOW4G", "bCkhhCoeW7G", "tmkhWPVcJmk1", "v1FdSCozW7u", "wSoMWRKqWRj2CCoWif80WQi", "WOldJ8kxa1a", "u8k0WRPSW5m", "WRiUW5ldJI4", "W57dVSopW43dRW", "WRVdO0qTgG", "nSoSW5xcTWS", "e8k+W55iW68", "W7PLW5xdKmoD", "kmkqWPxcL3ldSCkmbW", "W4xdSCk3xSkJ", "WQj3iSo4W5a", "WOVdK8oZFa", "WQlcLmkwwh0", "WO/cPCoCWOb3", "emoYmH/cUM7dHXCr", "WQ3dLSojWQLs", "Cmk7vsRcQG", "ECkUqConW7m", "W4RdLmk6b3i", "WO7cPCoDgrieWRi9W6vn", "WPrsW5KDma", "xmk/W4NcJSk+", "iCkUFCoHW5e", "WOFdI8ktpMK", "WP/cM8oeWP0r", "WQ5qW5jJW5m", "EmkMvudcVq", "jCojWQxdQGi", "WQnTm8orW7e", "WR/dOCo3tx4", "W4PAWRaAW4S", "C8kUWOZcQmkc", "WP1KWO04uG", "b8kVW4vuW5i", "W4XgW5lcKc7cUCkYW4qrea", "W6NcVLhcRCk7", "imkpWPxdGmor", "WPlcRmkmWOpdIW", "WQdcR8k5W4BdHG", "W4FcL1lcI8ky", "W5HNfK95", "nIG9W5Ok", "jgZdRqD9", "W5/cNe3cHmkx", "WRm0W6ZdS8k5", "uc7dUrnN", "WQ82W5xdSbm", "WOeJW5JdOCoh", "vmkhW6ZcNHhcMveZ", "WOuyqHRdIG", "WONcM8oUWOW", "WPJcU8oixCoYASkcy10Mvx0", "WR7dOSkOkH8", "imkqBCopW60", "tSoCqSoHka", "WQf7x8orW5a", "W7RdSfTevq", "W5qEy8kmEW", "B0ZdGSoTW6u", "WPtcUCobxCktmmkLygmW", "kKVcTfZdOa", "W5JdJCodobHFWQqhW5JdRCoG", "W6/dGCougWS", "W4VdLSkUgGq", "p8ooWRVdOJq", "AMBcLXZcPG", "WPpcOSkBW5RdHW", "s8oAWR7dI8kU", "dSk7W6HHCa", "W5xdTCkitG", "Av7cLGRcPW", "WRhcL8oOW5W1", "aMNcOGtdNa", "DSkGuJtcOW", "WRtcNSklEvG", "W6b8W6xdRW", "WOxcMCkNW5tdUW", "WP04WRdcLra", "xwevB8kt", "W5COWROdua", "iNpdKG8H", "F8kbCSkYW58", "WQZdG8kLW73dHa", "W77cQK3cMCkQ", "W4aYWOhdNmoE", "rSoXWQhcNNu", "W7tdISk/W7NdLx87WQW", "dCkYBConW7G", "mmkBWPtdHCoA", "W5VcSxdcTa", "B8kSW4ZcQ8o+", "W4xdPSkrgmkM", "DWBcM2qLb8ovmCkKW5VcOSk4", "W4zOmSkTW5i", "sJBdQWH5", "WOlcQmkVW5xdUW", "WQRcQSkLxHi", "WPxcHCozW7XB", "cCk6W4u1qG", "W7ejcGPH", "W7NdS8o+W5VdGa", "cXxdUsPV", "lCkOW6GVW6K", "W5XfWQ8kW7m", "vsJdSr1/", "iCohweH6", "hCkZWRZcU8k+", "pmkMgmoWW7m", "W4O9WRq9na", "iJn2mmk5FKNdOSoD", "t8k+W7vnW7e", "WQddO3Shhq", "WQWaWONdSZW", "fYtcG23dSq", "jv4TACke", "nmk/W6bnW5y", "E8oXWQZcRvi", "W77dK3TPbW", "WQKWW6BdN8o+", "rmoMWPlcNNq", "WR5QW51TnKr9hmkSW7SsBSoBW7S", "dNddHSoMkG", "WPtcQfCaWP4", "hCoFW4hcJ8kuW43dU0VcJW", "WR3dM0qxbW", "rwipp8ob", "W5pcPmkOura", "W7FdR8kOW4RdTa", "Cmo+WPlcTCoBWQ7dHSkhWP0", "k8k4BSopW6C", "WQnTb8o0W7W"];
  return Zn = function() {
    return i;
  }, Zn();
}
function AQ() {
  const i = a("(jpV", 619, 654, 748, 722) + a("eS&@", 804, 810, 752, 692) + t(812, 791, 907, "gOW4") + a("L&im", 534, 705, 619, 606) + r(-308, "eS&@") + s(1213, 1101, 1218, "PwNq", 1159) + r(-334, "uqpU") + r(-326, "Xe#5") + r(-345, "UqXo") + t(1029, 1044, 968, "$[FD") + a("^Yqs", 697, 636, 767, 659) + r(-403, "7ij6") + s(975, 1127, 977, "&4sn", 1055) + a("w6R*", 641, 851, 865, 759) + o(1285, "!wmr") + a("#WCl", 531, 637, 649, 602) + o(1147, "L&im") + t(832, 903, 842, "JZEW") + s(976, 1031, 986, "UUbN", 1071) + a("1CJ4", 676, 847, 862, 771) + a("NBNk", 626, 629, 667, 594) + r(-223, "[vmq") + t(920, 755, 870, "[Tr1") + t(1018, 1097, 996, "JZEW") + s(904, 1075, 863, "JZEW", 966) + s(983, 1091, 1049, "[vmq", 1073) + o(1212, "uqpU") + r(-408, "^Yqs") + r(-263, "!wmr") + r(-400, "PBQT") + t(1082, 960, 1047, "U^a6") + t(1049, 932, 937, "qJco") + a("PBQT", 829, 677, 848, 777) + r(-353, "xuEw") + o(1132, "X)oi") + s(959, 1058, 1066, "gOW4", 1047) + o(1117, "DXZi") + r(-227, "U^a6") + a("rI&U", 596, 498, 512, 595) + a("&4sn", 613, 600, 559, 583) + r(-319, "]EXT") + r(-309, "U^a6") + o(1169, "PBQT") + a("w6R*", 786, 771, 659, 709) + o(1220, "pJ*$") + s(1194, 1105, 1063, "a]Nq", 1116) + t(1006, 1076, 1001, "$[FD") + r(-271, "eS&@") + t(845, 933, 857, "pJ*$") + t(806, 914, 844, "Hm@c") + r(-228, "wE8L") + s(1237, 1147, 1104, "UUbN", 1170) + s(939, 1078, 992, "!wmr", 1004) + t(895, 1031, 945, "4gD5") + s(1052, 1186, 1139, "uqpU", 1137) + a("pJ*$", 801, 764, 707, 688) + s(1045, 996, 975, "(jpV", 1018) + s(966, 975, 903, "!wmr", 967) + t(835, 821, 865, "Jm5C") + o(1136, "a]Nq") + t(940, 979, 1011, "WRpS") + s(1052, 913, 909, "^Yqs", 986) + t(1048, 933, 990, "1CJ4") + r(-211, "&4sn") + r(-289, "PGwE") + s(1055, 1101, 1020, "WRpS", 1138) + t(834, 954, 889, "iBFH") + s(892, 1035, 997, "1CJ4", 989) + t(804, 920, 856, "qKI!") + t(1007, 1007, 960, "#WCl") + o(1264, "uqpU") + a("$[FD", 615, 641, 643, 670) + a("PGwE", 671, 837, 751, 725) + a("DuLI", 755, 702, 859, 809) + o(1076, "WRpS") + o(1198, ")L#q") + o(1108, "#WCl") + o(1213, "PwNq") + s(1139, 1051, 1170, "PBQT", 1155) + r(-208, "7ij6") + s(824, 937, 934, "#WCl", 934) + o(1229, "U^a6") + a("]EXT", 591, 588, 681, 591) + s(1020, 897, 976, "NBNk", 1014) + a("[Tr1", 718, 784, 906, 788) + a("gOW4", 622, 565, 679, 669) + t(1093, 954, 987, "C0#g") + a("z5rc", 653, 740, 564, 624) + o(1270, "^Yqs") + r(-412, "OzH5") + r(-367, "Jm5C") + s(1043, 1050, 929, "qKI!", 965) + o(1235, "L&im") + t(952, 850, 938, "^Yqs") + s(848, 890, 941, "NBNk", 963) + s(1146, 1026, 1213, "qKI!", 1106) + t(1001, 1076, 989, "C0#g") + t(1004, 1045, 1022, "uqpU") + r(-338, "a]Nq") + t(1009, 1036, 980, "T1P1") + o(1111, "Jm5C") + r(-219, "Jm5C") + o(1155, "wE8L") + a("T1P1", 636, 623, 528, 587) + a("WRpS", 816, 830, 890, 795) + a("sV[m", 734, 761, 783, 737) + t(941, 830, 909, "Jm5C") + t(847, 977, 923, "rI&U") + o(1142, "DuLI") + a("xuEw", 811, 809, 725, 730) + a("4gD5", 732, 708, 905, 792) + a("qJco", 621, 495, 536, 586) + r(-184, "qKI!") + r(-241, "^Yqs") + t(893, 766, 866, "9yBw") + a("9yBw", 629, 614, 593, 681) + s(1095, 1220, 1137, "DuLI", 1160) + a("gOW4", 684, 713, 533, 604) + a("NBNk", 583, 679, 670, 678) + t(914, 835, 934, "wE8L") + o(1268, "UqXo") + a("OzH5", 652, 531, 620, 640) + t(1042, 1026, 929, "qKI!") + t(986, 1053, 942, "4gD5") + o(1205, "gOW4") + r(-393, "gOW4") + a("UqXo", 831, 865, 806, 756) + s(1034, 910, 1031, "w6R*", 943) + a("sV[m", 681, 839, 696, 768) + s(896, 936, 1078, "oK*K", 994) + r(-182, "z5rc") + a("[Tr1", 787, 871, 734, 811) + s(860, 1035, 955, "$[FD", 976) + t(845, 989, 951, "(jpV") + t(1011, 985, 972, "DXZi") + s(1105, 1110, 950, "qJco", 1064) + s(847, 887, 902, "gOW4", 936) + o(1180, "U^a6") + r(-395, "rI&U") + o(1221, "rI&U") + o(1176, "w6R*") + t(1003, 945, 908, "DuLI") + r(-258, "rI&U") + t(768, 956, 847, "pJ*$") + o(1109, "&4sn") + r(-320, "pJ*$") + o(1287, "DuLI") + a("DXZi", 620, 716, 606, 723) + t(1101, 1010, 1010, "rI&U") + s(1080, 1020, 971, "4gD5", 1025) + r(-293, "X)oi") + o(1284, ")L#q") + r(-348, "iBFH") + a("sV[m", 641, 662, 714, 611) + t(904, 1083, 964, "pJ*$") + o(1104, "PBQT") + t(793, 785, 893, "pJ*$") + s(979, 1010, 987, "z5rc", 1020) + t(884, 922, 961, "7ij6") + s(1185, 1179, 1115, "PGwE", 1112) + r(-260, "[vmq") + a("GUnc", 600, 781, 586, 687) + t(961, 835, 921, "uqpU") + s(1013, 1157, 1190, "GUnc", 1096) + t(822, 911, 924, "Y0Ll") + s(925, 953, 881, "PBQT", 995) + t(928, 904, 984, "qKI!") + a("T1P1", 689, 768, 780, 789) + r(-193, "PBQT") + r(-242, "qKI!") + a("PwNq", 837, 832, 728, 742) + s(1165, 1202, 1241, "xuEw", 1158) + a("DuLI", 635, 625, 720, 620) + a("gOW4", 677, 678, 813, 762) + a("&4sn", 687, 573, 548, 588) + s(1070, 1024, 1007, "(jpV", 1089) + r(-217, "L&im") + o(1238, "z5rc") + o(1202, "iBFH") + a("U^a6", 860, 760, 773, 749) + t(1032, 887, 997, "eS&@") + t(847, 833, 939, "a]Nq") + t(940, 911, 944, "Xe#5") + o(1249, "Y0Ll") + o(1144, "Y0Ll") + s(1035, 1156, 1079, "DuLI", 1121) + t(1043, 1069, 1048, "UUbN") + o(1277, "w6R*") + r(-373, "DuLI") + o(1129, "gOW4") + s(1046, 980, 1104, "uqpU", 1097) + t(937, 958, 956, "PBQT") + s(1006, 916, 1046, "JZEW", 1013) + t(982, 1073, 977, "PwNq") + a("oK*K", 737, 856, 665, 772) + a("(jpV", 785, 734, 751, 696) + t(853, 871, 878, "sV[m") + a("UqXo", 793, 766, 867, 794) + t(856, 955, 873, "[Tr1") + a("a]Nq", 563, 709, 564, 652), n = window[r(-205, "&4sn")](i);
  function t(I, c, Q, x, d) {
    return CA(Q - 344, x);
  }
  const e = window[a("sV[m", 646, 527, 510, 593)](n), A = w0(e);
  function o(I, c, Q, x, d) {
    return CA(I - 594, c);
  }
  function r(I, c, Q, x, d) {
    return CA(I - -892, c);
  }
  function a(I, c, Q, x, d) {
    return CA(d - 100, I);
  }
  const g = {};
  function s(I, c, Q, x, d) {
    return CA(d - 458, x);
  }
  return g[r(-341, "iBFH")] = Bs, g[a("Jm5C", 747, 560, 662, 671)] = kC, window[o(1300, "GUnc") + "o"][s(953, 941, 1145, "U^a6", 1034) + "e"][t(952, 934, 871, "U^a6") + r(-335, "7ij6")](s(1264, 1132, 1124, "NBNk", 1156), A, g, !0, [r(-185, "gOW4") + "pt"]);
}
async function eQ(i) {
  function n(r, a, g, s, I) {
    return CA(a - -896, s);
  }
  const t = await AQ(), e = {};
  function A(r, a, g, s, I) {
    return CA(s - -135, g);
  }
  e[o(1462, "L&im")] = Bs;
  function o(r, a, g, s, I) {
    return CA(r - 930, a);
  }
  return window[A(526, 524, "7ij6", 547) + "o"][n(-441, -419, -474, "eS&@") + "e"][o(1409, "pJ*$") + "pt"](e, t, i);
}
function Vn() {
  const i = ["utqyW6RcLfJdVZD1", "AgmpW4JcMYf3W57dVCoWdYBcQG", "WQRcHXFcLCkiW7LQvCo4WP0MwNu", "WPHTn8kjkmksb1iTWPddKSksW4y", "yvJcK8oOEw7dNSoJvCkkbKxdQW", "W5xdUcNcLCoPWOxdIe4r", "WRZdNCkhW7xdK3tdRCku", "bfBcMGZcLCkVm0BcN1GXyG", "mmoJFNNdUmotzY3dLmowWPXu", "W4NdMmkuW5xdOmklW5iKWOpdSmke", "vsNcGSogWQO", "WPTPnSkli8kEdueLWQ/dR8kvW4u", "cN3dGmkeW71QW7ddPZ8PDG", "w2LFxJxdM09vBW", "lmkKWOywWPlcNSobWQpdICklkgi", "pCkexSkYdCkVW6u", "AGPVhmkXErz3ArOXgCkt", "rCoxArvabMKQWOePj8kuFCoO", "W6tdG8oN", "WRRcKCkRW7jgkfdcN1K", "oNZcQCo6vSk5oCobWPJcHIFdT33dQW", "WRxdM3NdLmkrqrldMq", "W4RcT8kRpbaXsG", "pvRcLYtcGhxdMmkj", "iSokW7hdJd7cHuRcQXldRslcOa", "W6XOW5RdOCobt3G", "cx7cHCoGWOn3W5tdNW", "r8kucxmSqIq"];
  return Vn = function() {
    return i;
  }, Vn();
}
(function(i, n) {
  function t(g, s, I, c, Q) {
    return JA(Q - -321, s);
  }
  function e(g, s, I, c, Q) {
    return JA(c - -775, Q);
  }
  const A = i();
  function o(g, s, I, c, Q) {
    return JA(I - -174, c);
  }
  function r(g, s, I, c, Q) {
    return JA(Q - 109, c);
  }
  function a(g, s, I, c, Q) {
    return JA(I - 304, s);
  }
  for (; ; )
    try {
      if (-parseInt(o(88, 80, 79, "8q#3", 91)) / 1 + parseInt(o(82, 94, 81, "AO!7", 84)) / 2 * (-parseInt(t(-89, "aNzN", -86, -76, -83)) / 3) + parseInt(a(569, "5uRz", 555, 558, 565)) / 4 * (-parseInt(e(-535, -526, -525, -536, "znRY")) / 5) + -parseInt(r(357, 349, 339, "5uRz", 346)) / 6 * (parseInt(e(-523, -522, -518, -532, "#]cr")) / 7) + -parseInt(e(-541, -537, -537, -533, "U^$u")) / 8 * (parseInt(a(560, "B%@p", 558, 559, 567)) / 9) + parseInt(e(-533, -545, -539, -531, "lyi0")) / 10 * (parseInt(a(547, "vqqp", 539, 550, 533)) / 11) + -parseInt(r(332, 335, 342, "5ywu", 341)) / 12 * (-parseInt(t(-95, "aNzN", -98, -80, -93)) / 13) === n) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Vn, 500672);
function JA(i, n) {
  const t = Vn();
  return JA = function(e, A) {
    e = e - (3653 * 1 + 5711 + 16 * -571);
    let o = t[e];
    if (JA.isHuLD === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      JA.KhUDIQ = I, i = arguments, JA.isHuLD = !0;
    }
    const a = t[0], g = e + a, s = i[g];
    return s ? o = s : (JA.XFXFQt === void 0 && (JA.XFXFQt = !0), o = JA.KhUDIQ(o, A), i[g] = o), o;
  }, JA(i, n);
}
async function tQ(i) {
  const { iv: n, key: t, message: e } = await lB(i), A = await eQ(t);
  function o(g, s, I, c, Q) {
    return JA(c - 318, g);
  }
  function r(g, s, I, c, Q) {
    return JA(I - -526, s);
  }
  const a = {};
  return a[o("7g8@", 548, 543, 547)] = A, a.iv = n, a[r(-275, "5uRz", -277) + "ge"] = e, a;
}
(function(i, n) {
  const t = i();
  function e(a, g, s, I, c) {
    return SA(c - -396, s);
  }
  function A(a, g, s, I, c) {
    return SA(s - -244, a);
  }
  function o(a, g, s, I, c) {
    return SA(I - -151, g);
  }
  function r(a, g, s, I, c) {
    return SA(g - 532, s);
  }
  for (; ; )
    try {
      if (-parseInt(A("LH9y", 171, 188, 188, 192)) / 1 * (parseInt(o(286, "gqV#", 278, 280, 297)) / 2) + -parseInt(o(284, "LH9y", 265, 274, 287)) / 3 * (-parseInt(e(54, 64, "u4Sj", 44, 49)) / 4) + -parseInt(o(269, "bF[N", 271, 278, 265)) / 5 + -parseInt(o(296, "eOUE", 283, 279, 270)) / 6 * (parseInt(e(60, 42, "x$2l", 46, 56)) / 7) + -parseInt(e(75, 52, "o2[3", 59, 57)) / 8 + -parseInt(r(978, 972, "1^8l", 963, 963)) / 9 * (parseInt(A("%7j)", 171, 189, 178, 205)) / 10) + parseInt(r(955, 956, "o2[3", 940, 954)) / 11 * (parseInt(o(283, "FMjg", 296, 290, 288)) / 12) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(_n, 121 * 3566 + -124958 + -326173 * -1);
function SA(i, n) {
  const t = _n();
  return SA = function(e, A) {
    e = e - (-4013 * 2 + -1 * 2223 + 227 * 47);
    let o = t[e];
    if (SA.blSVAy === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      SA.rzzlGe = I, i = arguments, SA.blSVAy = !0;
    }
    const a = t[-8613 + 17 * -391 + 70 * 218], g = e + a, s = i[g];
    return s ? o = s : (SA.QevQLl === void 0 && (SA.QevQLl = !0), o = SA.rzzlGe(o, A), i[g] = o), o;
  }, SA(i, n);
}
function _n() {
  const i = ["FSohWPtdT8ot", "yWzcWQ8", "o8kBW7lcU8oYgMxdK8oyxW", "WRWIW43dN3bvymkyWOOe", "cCo6W5XwWPBdLJOVW6ldNG", "a8oja8krWPxcHvZdU8oHa8oDlG", "vuW1WOFcQZ7cOa", "D1Wh", "WR58WPBcRNzoFG", "W7JcNhNcLG", "WO7cQLxdLwtdJ1rSW6JcImkSWOG", "cmo7W59wW5xdHrWvW5NdOr0", "iKG2W6vtW58Q", "uHHJW7FdI27cItBcHubxiq", "W4pdHCkAW7NcHv5dqY1Y", "W73dGSkSWPJcU8oPp8kDfrPhWOi", "DSouavNdRant", "WORcISkkWR7cK8kAFrldGdX2W50", "WOBcR8kywqauW4/cJSkGWRNcQG", "uG3dS8kmW7a0EZRdH8o2imob", "oCkupCkQWQu", "nKuBW7CNjmkwFXv6WRi", "W6ZdRt7dU8oQW4TijCkzWPK", "WRddVmkW", "W63dOCkzWOmZ", "WRb+WR8", "jCkTWRyaWPhcVCoMW5aYb8k2xW", "uG3dSmkmW75fzHRdMSoUba", "WRBcOmotW4T1ot09WRldIs8tvG", "BCk+W6aKza", "W6hcHNlcJmkO", "mqNcNf7dGa", "jSo2W5/dLrddU8oOj1FcSCk/jW", "W73dMCoVWRldII/dNmocW5HY", "d8ombmkyWPFcHaVdH8ougSo3evC"];
  return _n = function() {
    return i;
  }, _n();
}
async function oQ(i) {
  function n(a, g, s, I, c) {
    return SA(c - -178, a);
  }
  function t(a, g, s, I, c) {
    return SA(I - -307, c);
  }
  function e(a, g, s, I, c) {
    return SA(s - -885, a);
  }
  function A(a, g, s, I, c) {
    return SA(c - 930, g);
  }
  function o(a, g, s, I, c) {
    return SA(c - -379, s);
  }
  const r = await window[A(1367, "&*co", 1382, 1381, 1373) + "o"][o(65, 67, "!POg", 59, 70) + "e"][o(78, 54, "]Rz!", 77, 71) + "t"](n("eWBL", 263, 258, 259, 261), i);
  return Array[n("1^8l", 241, 227, 237, 242)](new Uint8Array(r))[A(1359, "Taxp", 1381, 1389, 1372)]((a) => a[e("pd&0", -433, -431) + t(144, 139, 144, 137, "Gf8h")](4 * -983 + -5967 + -9915 * -1)[t(131, 148, 159, 141, "f3j7") + e("gqV#", -447, -459)](1 * 9755 + -1801 * -1 + 1 * -11554, "0"))[A(1368, "!POg", 1373, 1364, 1358)]("");
}
(function(i, n) {
  var t = i();
  function e(g, s, I, c, Q) {
    return te(s - 751, I);
  }
  function A(g, s, I, c, Q) {
    return te(I - -73, c);
  }
  function o(g, s, I, c, Q) {
    return te(c - -583, Q);
  }
  function r(g, s, I, c, Q) {
    return te(c - 498, I);
  }
  for (; ; )
    try {
      var a = -parseInt(r(638, 631, "5Mql", 631, 635)) / 1 * (-parseInt(A(63, 63, 55, "yUl%", 55)) / 2) + -parseInt(A(68, 58, 64, "7SJ0", 59)) / 3 * (parseInt(A(52, 40, 47, "po)2", 55)) / 4) + -parseInt(e(893, 886, "rD#E", 879, 881)) / 5 + parseInt(A(61, 60, 57, "Im#e", 64)) / 6 + parseInt(A(48, 44, 50, ")!#l", 58)) / 7 * (parseInt(o(-457, -460, -449, -451, "LAkI")) / 8) + -parseInt(o(-453, -452, -461, -454, "!2U*")) / 9 + -parseInt(r(621, 614, "^6NZ", 624, 627)) / 10 * (parseInt(r(625, 629, "v)OB", 634, 624)) / 11);
      if (a === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(zn, -1 * -226789 + -1 * -297326 + -129406 * 1);
function te(i, n) {
  var t = zn();
  return te = function(e, A) {
    e = e - (1124 * -4 + -3746 + -2 * -4181);
    var o = t[e];
    if (te.gayFpG === void 0) {
      var r = function(c) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", d = "", E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (var b = 0, k = x.length; b < k; b++)
          d += "%" + ("00" + x.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, a = function(c, Q) {
        var x = [], d = 0, E, f = "";
        c = r(c);
        var C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (var h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      te.adjtEM = a, i = arguments, te.gayFpG = !0;
    }
    var g = t[-323 + -323 * -1], s = e + g, I = i[s];
    return I ? o = I : (te.KKwTyO === void 0 && (te.KKwTyO = !0), o = te.adjtEM(o, A), i[s] = o), o;
  }, te(i, n);
}
function zn() {
  var i = ["W4GwWOuyivyt", "W5BcKs7dVmoow2JdSq", "W4FdOSkCohdcH8k7BcBdM8kdz1G", "e8k3sxdcImopFmofBCoAW4ldTCoK", "WRbjy3mlWOZcV0uIuqyv", "cCkkoCoFWR7dMMdcMfZcS0e", "W43cIqDgjHCpWRZdV1JdSa", "W48RWQL7tCkPW7SB", "WOJdNuDCc1BcRCo3og0", "rSo6WPTmeSozxmoFdf/dV2BcKG", "bg08nSo3jwhdMbhcHmksqa", "WRVcNaZcNSoTD1ZdOmoEd8ojzSk3", "f8kWmsRdUSkOlSou", "d8kZWRPpWOFcKeD5uYldTq", "WRyZkajlW6BcNa", "WO7dN0ejkNlcMCoSlG", "W6VcVb3dHKGkW6dcRrnaWPqdWQK", "vchcS37cMxKJW57cVq", "W5BcNhtcOmk3ExBdO2BdJWO", "W54WaSo8bSkKWRpdUSk2u2JcTe8", "W4SVWO5ZqmkiW4Ow"];
  return zn = function() {
    return i;
  }, zn();
}
async function rc(i) {
  const { Image: n } = fo, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const o = n.verify(A);
  if (o) throw Error(o);
  const r = {};
  return r.bytes = e, n.create(r);
}
async function nQ(i) {
  const { v4: { Metadata: n } } = fo, t = { ...i };
  t.platform = fo.Platform.WEB;
  const e = t, A = n.verify(e);
  if (A) throw Error(A);
  return n.create(e);
}
async function iQ(i) {
  const { Content: n } = fo, { iv: t, key: e, message: A } = await tQ(i), o = { token: new Uint8Array(e), iv: t, schemaVersion: wC, bytes: new Uint8Array(A) }, r = n.verify(o);
  if (r) throw Error(r);
  const a = n.create(o);
  return n.encode(a).finish();
}
function rQ(i) {
  const { Blob: n } = fo.v4, t = n.verify(i);
  if (t) throw Error(t);
  const e = n.create(i);
  return n.encode(e).finish();
}
var yo, ai;
class ac {
  constructor(n, t, e, A, o, r, a, g, s, I, c, Q) {
    z(this, yo, !0);
    z(this, ai, Date.now());
    F(this, "fpsOfAllImages", new us(1109 * 3 + 6399 * 1 + -3 * 3232));
    this.cameraService = n, this.imageCropSettings = t, this.imageProcessor = e, this.createProtoMessage = A, this.onCaptureCallback = o, this.onDetectionCallback = r, this.checkToInstructionCodeMap = a, this.fallbackInstruction = g, this.samVersion = s, this.instructionEscalation = I, this.sessionToken = c, this.analytics = Q;
  }
  async run() {
    for (; v(this, yo); )
      await this.iterate();
    return this;
  }
  stop() {
    _(this, yo, !1);
  }
  async trackCaptureProcess(n, t) {
    var a;
    const e = Date.now(), A = Nn(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height;
    const r = { detection: n, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - v(this, ai), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await MB() };
    Io() && Object.assign(r, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !Eo() }), (a = this.analytics) == null || a.trackCaptureProcess(r);
  }
  onDetection(n, t) {
    this.onDetectionCallback({ ...n, avgFps: Yt(Nn(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: n, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const o = A, r = await LC(t), a = await YC(t, this.imageCropSettings), g = await this.cameraService.getCameraProperties(), s = { ...g, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await rc(a) }, I = {};
    I.sessionToken = this.sessionToken, I.web = s;
    const c = I, Q = await this.createProtoMessage(r, c), x = {};
    x.detection = e, x.imageResolution = o;
    const d = {};
    d.image = r, d.data = x;
    const E = d;
    this.stop();
    const f = {};
    f.imageData = E, f.protoMessage = Q, f.webMetadata = s, f.candidateSelectionImages = n, this.onCaptureCallback(f);
  }
  collectAndEscalate(n) {
    if (!this.instructionEscalation) return !1;
    const t = n;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(n) {
    return Date.now() - n;
  }
  getInvalidInstructions(n, t) {
    const e = [];
    return Array.from(n).forEach(([A, o]) => {
      !o && e.push(t[A]);
    }), e;
  }
  async sleep(n) {
    await Q0(Math.max(Ia.max - n, Ia.min));
  }
}
yo = new WeakMap(), ai = new WeakMap();
class aQ extends ac {
  constructor(t, ...e) {
    super(...e);
    F(this, "candidateSelectionTime", -5815 + 1111 * 1 + 6 * 784);
    F(this, "candidatesSelectionFramesCount", 5622 + 1060 * 5 + -10922);
    F(this, "isInCandidateSelection", !1);
    F(this, "lastImage", null);
    F(this, "bestImage", null);
    F(this, "candidateSelectionImages", []);
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
    const o = this.getDetectionDetails(A);
    this.onDetection(o, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const r = {};
    r.instructionCode = o.processedImage.instructionCode, r.isValid = e.isValid, r.image = t.image, r.detection = e.detection, this.lastImage = r, await this.sleep(o.detectionTime);
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
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.bestImage = r, this.candidateSelectionImages.push(r);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = e.detection;
    const r = o;
    this.isNewImageBetter(this.lastImage.detection, r.detection) ? this.bestImage = r : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, r), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 3072 + -3083 * 2 + -1 * -3094 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Wi.minFrames ? t > Wi.minDuration : t > Wi.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new U("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), o = Yt((21 * -203 + -7604 + 12867) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = e.image.width, r.height = e.image.height;
    const a = r, g = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), s = {};
    s.isNewDetectionValid = t.isValid, s.newInvalidInstruction = g[-588 + -42 * -14];
    const I = this.getInstructionCode(s), c = this.collectAndEscalate(I), Q = {};
    return Q.detection = t.detection, Q.instructionCode = I, Q.isEscalated = c, Q.invalidValidators = g, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: A, fps: o, avgFps: Yt(Nn(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class gc {
  constructor() {
    F(this, "cameraService");
    F(this, "imageCropSettings");
    F(this, "imageProcessor");
    F(this, "instructionEscalation");
    F(this, "createProtoMessage");
    F(this, "onCaptureCallback");
    F(this, "onDetectionCallback");
    F(this, "checkToInstructionCodeMap");
    F(this, "fallbackInstruction");
    F(this, "samVersion");
    F(this, "sessionToken");
    F(this, "analytics");
  }
  setCameraService(n) {
    return this.cameraService = n, this;
  }
  setImageCropSettings(n) {
    return this.imageCropSettings = n, this;
  }
  setImageProcessor(n) {
    return this.imageProcessor = n, this;
  }
  setInstructionEscalation(n) {
    return this.instructionEscalation = n, this;
  }
  setCreateProtoMessage(n) {
    return this.createProtoMessage = n, this;
  }
  setOnCaptureCallback(n) {
    return this.onCaptureCallback = n, this;
  }
  setOnDetectionCallback(n) {
    return this.onDetectionCallback = n, this;
  }
  setCheckToInstructionCodeMap(n) {
    return this.checkToInstructionCodeMap = n, this;
  }
  setFallbackInstruction(n) {
    return this.fallbackInstruction = n, this;
  }
  setSamVersion(n) {
    return this.samVersion = n, this;
  }
  setSessionToken(n) {
    return this.sessionToken = n, this;
  }
  setAnalytics(n) {
    return this.analytics = n, this;
  }
  reset() {
    return this.cameraService = void (81 * -47 + -9872 + 13679), this.imageCropSettings = void (-828 + -1 * 1906 + 2734), this.imageProcessor = void (-284 * -4 + 2615 + -3751), this.instructionEscalation = void (9595 + -1 * -2002 + -1 * 11597), this.createProtoMessage = void (-6290 + -6196 * -1 + -1 * -94), this.onCaptureCallback = void (3187 * -1 + 2246 + -1 * -941), this.onDetectionCallback = void (-1 * -9693 + -8349 + -1344), this.checkToInstructionCodeMap = void (8590 + 859 * -10), this.fallbackInstruction = void (-2851 * 2 + -1 * -4565 + 1137), this.samVersion = void (-6094 + 1 * -5011 + 11105), this.sessionToken = void (5147 + 2 * 613 + -6373), this.analytics = void (38 * -1 + 9131 + -9093 * 1), this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new U("CameraService is required");
    if (!this.imageCropSettings) throw new U("ImageCropSettings is required");
    if (!this.imageProcessor) throw new U("ImageProcessor is required");
    if (!this.createProtoMessage) throw new U("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new U("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new U("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new U("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new U("FallbackInstruction is required");
    if (!this.samVersion) throw new U("SamVersion is required");
  }
}
class gQ extends gc {
  constructor() {
    super(...arguments);
    F(this, "instructionCodeMap");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void (-7769 + 1 * -1769 + 9538), this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new U("instructionCodeMap is required");
  }
  build() {
    return this.validateDependencies(), new aQ(this.instructionCodeMap, this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
var Ue, nt;
class sQ extends ac {
  constructor(...t) {
    super(...t);
    z(this, Ue, void (-8323 + -31 * 23 + -12 * -753));
    z(this, nt);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Mi).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    _(this, nt, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && _(this, Ue, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(sa.REQUEST_CAPTURE, v(this, nt));
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
    return v(this, Ue) ? v(this, Ue) === Mi.FIRST_FRAME ? !0 : v(this, Ue) === Mi.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
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
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), _(this, Ue, void 0);
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), o = Yt((5463 + 401 * -19 + 3156) / A);
    this.fpsOfAllImages.pushFixed(o);
    const r = {};
    r.width = t.image.width, r.height = t.image.height;
    const a = r, g = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), s = this.getInstructionCode(g[0]), I = this.collectAndEscalate(s), c = {};
    return c.detection = e.detection, c.instructionCode = s, c.invalidValidators = g, c.isInCandidateSelection = !1, c.isEscalated = I, { processedImage: c, detectionTime: A, fps: o, avgFps: Yt(Nn(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), v(this, nt) && document.removeEventListener(sa.REQUEST_CAPTURE, v(this, nt));
  }
}
Ue = new WeakMap(), nt = new WeakMap();
class cQ extends gc {
  build() {
    return this.validateDependencies(), new sQ(this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
class IQ {
  static create(n, t) {
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: o, createProtoMessage: r, fallbackInstruction: a, imageCropSettings: g, imageProcessor: s, instructionCodeMap: I, instructionEscalation: c, onCaptureCallback: Q, onDetectionCallback: x, samVersion: d, sessionToken: E } = t;
    switch (n) {
      case x0.AUTO_CAPTURE:
        return new gQ().setCheckToInstructionCodeMap(o).setFallbackInstruction(a).setInstructionCodeMap(I).setCameraService(A).setImageCropSettings(g).setImageProcessor(s).setCreateProtoMessage(r).setOnCaptureCallback(Q).setOnDetectionCallback(x).setSamVersion(d).setInstructionEscalation(c).setSessionToken(E).setAnalytics(e).build();
      case x0.WAIT_FOR_REQUEST:
        return new cQ().setCheckToInstructionCodeMap(o).setFallbackInstruction(a).setCameraService(A).setImageCropSettings(g).setImageProcessor(s).setCreateProtoMessage(r).setOnCaptureCallback(Q).setOnDetectionCallback(x).setSamVersion(d).setInstructionEscalation(c).setSessionToken(E).setAnalytics(e).build();
      default:
        throw new U("Invalid detection type: " + n);
    }
  }
}
function xQ({ cameraResolution: i, cameraService: n, customEvent: t }) {
  const { shouldCameraMirror: e } = sB(t.CONTROL, n), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, rB(t.CAMERA_PROPS_CHANGED, A), aA(() => () => {
    lo.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = e, o;
}
function CQ(i) {
  aA(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function BQ({ captureMode: i, checkToInstructionCodeMap: n, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: o, imageCropSettings: r, instructionCodeMap: a, onCapture: g, onDetection: s, sessionToken: I }) {
  CQ(() => {
    t && t.destroy();
  });
  const c = re(!1), { appState: Q, handleAppStateChange: x, isCameraReady: d } = je(), { sunfish: E } = Wo(), { analytics: f } = rC(), { cameraResolution: C, cameraService: h, onCameraResolutionChange: b, videoRef: k } = QB(), R = {};
  R.cameraResolution = C, R.cameraService = h, R.customEvent = A;
  const { shouldCameraMirror: J } = xQ(R), M = vs(void (-894 + -5 * -587 + 157 * -13)), tA = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && E && d, HA = ve((iA) => {
    x(mA.WAITING), g(iA);
  }, [g, x]), cA = ve((iA, jt) => {
    b(iA.resolution), M.value = iA, s(iA, jt);
  }, [s, M, b]);
  aA(() => {
    !c.current && tA && (c.current = !0, x(mA.RUNNING));
  }, [tA, x]), aA(() => {
    if (Q !== mA.RUNNING || !tA) return;
    if (!h || !t) throw new U("Cannot start detection");
    t.imageProcessor.reset();
    const iA = {};
    iA.analytics = f, iA.cameraService = h, iA.imageProcessor = t.imageProcessor, iA.fallbackInstruction = o, iA.instructionCodeMap = a, iA.checkToInstructionCodeMap = n, iA.sessionToken = I, iA.samVersion = t.samVersion, iA.createProtoMessage = e, iA.onCaptureCallback = HA, iA.onDetectionCallback = cA, iA.instructionEscalation = t.instructionEscalation, iA.imageCropSettings = r;
    const jt = IQ.create(i, iA);
    return t.runDetectionLoop(jt), () => {
      t.stopDetectionLoop();
    };
  }, [Q, tA, t, h, HA, cA, I, M, f, e, a, n, o, i, r]);
  const _A = {};
  return _A.videoRef = k, _A.cameraResolution = C, _A.detectionDetails = M, _A.shouldCameraMirror = J, _A;
}
const QQ = () => typeof document < "u" && document.hasFocus();
function dQ(i = {}) {
  const n = re(i), t = re(QQ()), [e, A] = PA(t.current);
  aA(() => {
    n.current = i;
  }), aA(() => {
    function r(I) {
      t.current = I, A(I);
    }
    function a() {
      Promise.resolve().then(() => {
        var I, c, Q, x;
        !t.current && ((c = (I = n.current).onFocus) == null || c.call(I), (x = (Q = n.current).onChange) == null || x.call(Q, !0)), r(!0);
      });
    }
    function g() {
      Promise.resolve().then(() => {
        var I, c, Q, x;
        t.current && ((c = (I = n.current).onBlur) == null || c.call(I), (x = (Q = n.current).onChange) == null || x.call(Q, !1)), r(!1);
      });
    }
    function s() {
      document.visibilityState === "hidden" && g();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", g), window.document.addEventListener("visibilitychange", s), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", g), window.document.removeEventListener("visibilitychange", s);
    };
  }, []);
  const o = {};
  return o.isWindowFocused = e, o;
}
function EQ(i = {}) {
  const { appState: n } = je();
  dQ({ onBlur: () => {
    var t;
    n === mA.WAITING || n === ca.DONE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    n === mA.WAITING || n === ca.DONE || (t = i.onFocus) == null || t.call(i);
  } });
}
const Qr = Qt(void 0);
Qr.displayName = "CommonThresholdsContext";
function lQ() {
  const i = Re(Qr);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function uQ() {
  return li() ? da.MOBILE : da.DESKTOP;
}
function fQ({
  cameraOptionsThresholds: i,
  children: n,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, o] = PA(uQ()), r = TA(() => ({ thresholds: t(i, e[A]), thresholdsPreset: A, setThresholdsPreset: o }), [i, A, o, e, t]);
  return /* @__PURE__ */ w(Qr.Provider, { value: r, children: n });
}
const N0 = {};
N0.min = 0.4, N0.max = 1;
const ze = {};
ze.brightnessHighThreshold = 0.9, ze.brightnessLowThreshold = 0.25, ze.confidenceThreshold = 0.8, ze.outOfBoundsThreshold = 0.03, ze.sharpnessThreshold = 0.07, ze.sizeIntervalThreshold = N0;
const F0 = {};
F0.min = 0.34, F0.max = 0.46;
const Xe = {};
Xe.brightnessHighThreshold = 0.9, Xe.brightnessLowThreshold = 0.25, Xe.confidenceThreshold = 0.8, Xe.outOfBoundsThreshold = 0.03, Xe.sharpnessThreshold = 0.06, Xe.sizeIntervalThreshold = F0;
const v0 = {};
v0.MOBILE = ze, v0.DESKTOP = Xe;
const hQ = v0;
function pQ(i, n) {
  var t, e, A, o;
  return {
    brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? n.brightnessHighThreshold,
    brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? n.brightnessLowThreshold,
    confidenceThreshold: (i == null ? void 0 : i.confidenceThreshold) ?? n.confidenceThreshold,
    outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? n.outOfBoundsThreshold,
    sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? n.sharpnessThreshold,
    sizeIntervalThreshold: {
      max: ((t = i == null ? void 0 : i.sizeIntervalThreshold) == null ? void 0 : t.max) ?? ((e = n.sizeIntervalThreshold) == null ? void 0 : e.max),
      min: ((A = i == null ? void 0 : i.sizeIntervalThreshold) == null ? void 0 : A.min) ?? ((o = n.sizeIntervalThreshold) == null ? void 0 : o.min)
    }
  };
}
function mQ({
  cameraOptionsThresholds: i,
  children: n
}) {
  return /* @__PURE__ */ w(
    fQ,
    {
      cameraOptionsThresholds: i,
      thresholdsPresetMapper: pQ,
      thresholdsPresets: hQ,
      children: n
    }
  );
}
function sc() {
  return lQ();
}
function yQ({ cameraResolution: i, detectionDetails: n, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = sc(), { redfin: o } = Wo(), r = re(null);
  if (aA(() => {
    if (!(r != null && r.current) || !i)
      return;
    r.current.width = i.width, r.current.height = i.height, cC(r.current);
    const C = vn(i), h = ps(
      i,
      e.outOfBoundsThreshold,
      C
    ), b = dC(i);
    n.value && (TC({
      canvas: r.current,
      polygon: n.value.processedImage.detection,
      color: "red"
    }), Li(r.current, C, "lime"), Li(r.current, h, "yellow"), Li(r.current, b, "blue"));
  }, [i, n.value, e.outOfBoundsThreshold]), !n.value)
    return null;
  const {
    avgFps: a,
    detectionTime: g,
    fps: s,
    processedImage: { detection: I, instructionCode: c, invalidValidators: Q, isEscalated: x },
    resolution: d,
    samVersion: E
  } = n.value, f = {
    Confidence: I.confidence,
    "Smallest edge": I.smallestEdge,
    Brightness: I.brightness,
    Sharpness: I.sharpness,
    "Detection time": g,
    FPS: s,
    "Avg FPS": a,
    Tier: o,
    Instruction: c,
    Resolution: d,
    "Escalated instruction": x,
    "Component version": "7.3.2",
    "Thresholds preset": A
  };
  return E && (f["SAM version"] = E), Q.length > 0 && (f["Invalid validators"] = Q), /* @__PURE__ */ w(
    iC,
    {
      ref: r,
      cameraResolution: i,
      detectionDetails: f,
      isImageMirror: t
    }
  );
}
function bQ(i, n) {
  const [t, e] = PA(!1), A = () => e((a) => !a), o = "" + t;
  Tt(() => {
    function a() {
      if (!i.current) return;
      const c = new MutationObserver(() => {
        A();
      }), Q = {};
      return Q.childList = !0, Q.subtree = !0, Q.attributes = !0, c.observe(i.current, Q), c;
    }
    function g() {
      var x;
      if (!((x = i.current) != null && x["parentElement"])) return;
      const c = new MutationObserver((d) => {
        d.find((f) => {
          for (const C of f.removedNodes)
            if (C !== (n == null ? void 0 : n.current) && C === i.current)
              return !0;
        }) && A(), d.forEach((f) => {
          f.addedNodes.forEach((C) => {
            var h;
            C !== (n == null ? void 0 : n.current) && ((h = C.parentElement) == null || h.removeChild(C));
          });
        });
      }), Q = {};
      return Q.childList = !0, c.observe(i.current.parentElement, Q), c;
    }
    const s = a(), I = g();
    return () => {
      I == null || I.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = o, r;
}
const wQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function DQ({ cutOut: i, height: n, ignoreElement: t, width: e }) {
  const A = re(null), { key: o } = bQ(A, t);
  return /* @__PURE__ */ w("div", { ref: A, style: wQ, children: /* @__PURE__ */ w("svg", { viewBox: `0 0 ${e} ${n}`, children: [
    /* @__PURE__ */ w("defs", { children: [
      /* @__PURE__ */ w("mask", { id: "placeholder", children: [
        /* @__PURE__ */ w("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ w(
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
            /* @__PURE__ */ w("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ w("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ w(
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
    /* @__PURE__ */ w("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function kQ(i) {
  return /* @__PURE__ */ w(
    "svg",
    {
      height: i.height,
      viewBox: "-3 0 297 238",
      width: i.width,
      x: i.x,
      xmlns: "http://www.w3.org/2000/svg",
      y: i.y,
      children: [
        /* @__PURE__ */ w("path", { d: "M9.27 106.94C5.32 103.19 2.86 97.89 2.86 92.02C2.86 80.66 12.07 71.46 23.42 71.46C26.26 71.46 28.96 72.04 31.42 73.08" }),
        /* @__PURE__ */ w("path", { d: "M92.5 2.5V105L31.43 73.08L9.5 107L43.98 141.54C44.55 142.27 45.42 143.38 46.45 144.73C59.05 161.28 65.78 174.04 69.8 180.8C73.76 187.45 82.38 201.9 97.4 213.77C118.44 230.39 146.31 237.4 161.62 235.05C163.35 234.78 169.15 233.75 177.15 233.71C186.16 233.66 192.61 234.94 194.79 235.24C213.1 237.8 235.51 223.02 239.65 220.29C264.38 203.98 273.91 180.37 277.6 170.83C283.11 156.62 283.65 136.98 284.88 120.99C284.88 120.99 285.21 116.77 285.45 112.3C287.17 80.65 285.9 29.66 285.55 2.19995" }),
        /* @__PURE__ */ w("path", { d: "M92.0139 105L92.49 2.20991M9.27 106.94C5.32 103.19 2.86 97.89 2.86 92.02C2.86 80.66 12.07 71.46 23.42 71.46C26.26 71.46 28.96 72.04 31.42 73.08M92.49 105.13L34.08 74.44L31.43 73.08M31.43 73.08L9.5 107L43.98 141.54C44.55 142.27 45.42 143.38 46.45 144.73C59.05 161.28 65.78 174.04 69.8 180.8C73.76 187.45 82.38 201.9 97.4 213.77C118.44 230.39 146.31 237.4 161.62 235.05C163.35 234.78 169.15 233.75 177.15 233.71C186.16 233.66 192.61 234.94 194.79 235.24C213.1 237.8 235.51 223.02 239.65 220.29C264.38 203.98 273.91 180.37 277.6 170.83C283.11 156.62 283.65 136.98 284.88 120.99C284.88 120.99 285.21 116.77 285.45 112.3C287.17 80.65 285.9 29.66 285.55 2.19995M31.43 73.08L92.5 105V2.5" })
      ]
    }
  );
}
function GQ({ fullOverlay: i, ignoreElement: n, resolution: t }) {
  const e = EC(t), A = `${e.height * 100}%`, o = `${e.width * 100}%`, r = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ w(
    DQ,
    {
      cutOut: i || /* @__PURE__ */ w(kQ, { height: A, width: o, x: r, y: a }),
      height: t.height,
      ignoreElement: n,
      width: t.width
    }
  );
}
function SQ({ cameraResolution: i, children: n, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = Wo(), { appState: o, freemiumOverlayState: r } = je(), a = re(null), g = r !== Mn.HIDDEN && A !== l0.Higher && i, s = r === Mn.VISIBLE, I = i && o === mA.RUNNING;
  return /* @__PURE__ */ w(ce, { children: [
    g && /* @__PURE__ */ w(
      GQ,
      {
        fullOverlay: s,
        ignoreElement: a,
        resolution: i
      }
    ),
    n,
    I && /* @__PURE__ */ w("div", { ref: a, children: /* @__PURE__ */ w(
      yQ,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const NQ = (i, n) => {
  if (WC()) {
    const t = {};
    t.candidateSelectionImages = n;
    const e = t;
    lo.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cc = {}, va = {}, FQ = vQ;
function vQ(i, n) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, o = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(r, a) {
    t[e] = function(g) {
      if (o)
        if (o = !1, g)
          a(g);
        else {
          for (var s = new Array(arguments.length - 1), I = 0; I < s.length; )
            s[I++] = arguments[I];
          r.apply(null, s);
        }
    };
    try {
      i.apply(n || null, t);
    } catch (g) {
      o && (o = !1, a(g));
    }
  });
}
var Ic = {};
(function(i) {
  var n = i;
  n.length = function(r) {
    var a = r.length;
    if (!a)
      return 0;
    for (var g = 0; --a % 4 > 1 && r.charAt(a) === "="; )
      ++g;
    return Math.ceil(r.length * 3) / 4 - g;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  n.encode = function(r, a, g) {
    for (var s = null, I = [], c = 0, Q = 0, x; a < g; ) {
      var d = r[a++];
      switch (Q) {
        case 0:
          I[c++] = t[d >> 2], x = (d & 3) << 4, Q = 1;
          break;
        case 1:
          I[c++] = t[x | d >> 4], x = (d & 15) << 2, Q = 2;
          break;
        case 2:
          I[c++] = t[x | d >> 6], I[c++] = t[d & 63], Q = 0;
          break;
      }
      c > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, I)), c = 0);
    }
    return Q && (I[c++] = t[x], I[c++] = 61, Q === 1 && (I[c++] = 61)), s ? (c && s.push(String.fromCharCode.apply(String, I.slice(0, c))), s.join("")) : String.fromCharCode.apply(String, I.slice(0, c));
  };
  var o = "invalid encoding";
  n.decode = function(r, a, g) {
    for (var s = g, I = 0, c, Q = 0; Q < r.length; ) {
      var x = r.charCodeAt(Q++);
      if (x === 61 && I > 1)
        break;
      if ((x = e[x]) === void 0)
        throw Error(o);
      switch (I) {
        case 0:
          c = x, I = 1;
          break;
        case 1:
          a[g++] = c << 2 | (x & 48) >> 4, c = x, I = 2;
          break;
        case 2:
          a[g++] = (c & 15) << 4 | (x & 60) >> 2, c = x, I = 3;
          break;
        case 3:
          a[g++] = (c & 3) << 6 | x, I = 0;
          break;
      }
    }
    if (I === 1)
      throw Error(o);
    return g - s;
  }, n.test = function(r) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r);
  };
})(Ic);
var RQ = hi;
function hi() {
  this._listeners = {};
}
hi.prototype.on = function(i, n, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: n,
    ctx: t || this
  }), this;
};
hi.prototype.off = function(i, n) {
  if (i === void 0)
    this._listeners = {};
  else if (n === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === n ? t.splice(e, 1) : ++e;
  return this;
};
hi.prototype.emit = function(i) {
  var n = this._listeners[i];
  if (n) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < n.length; )
      n[e].fn.apply(n[e++].ctx, t);
  }
  return this;
};
var MQ = Ra(Ra);
function Ra(i) {
  return typeof Float32Array < "u" ? function() {
    var n = new Float32Array([-0]), t = new Uint8Array(n.buffer), e = t[3] === 128;
    function A(g, s, I) {
      n[0] = g, s[I] = t[0], s[I + 1] = t[1], s[I + 2] = t[2], s[I + 3] = t[3];
    }
    function o(g, s, I) {
      n[0] = g, s[I] = t[3], s[I + 1] = t[2], s[I + 2] = t[1], s[I + 3] = t[0];
    }
    i.writeFloatLE = e ? A : o, i.writeFloatBE = e ? o : A;
    function r(g, s) {
      return t[0] = g[s], t[1] = g[s + 1], t[2] = g[s + 2], t[3] = g[s + 3], n[0];
    }
    function a(g, s) {
      return t[3] = g[s], t[2] = g[s + 1], t[1] = g[s + 2], t[0] = g[s + 3], n[0];
    }
    i.readFloatLE = e ? r : a, i.readFloatBE = e ? a : r;
  }() : function() {
    function n(e, A, o, r) {
      var a = A < 0 ? 1 : 0;
      if (a && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, r);
      else if (isNaN(A))
        e(2143289344, o, r);
      else if (A > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, o, r);
      else if (A < 11754943508222875e-54)
        e((a << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, o, r);
      else {
        var g = Math.floor(Math.log(A) / Math.LN2), s = Math.round(A * Math.pow(2, -g) * 8388608) & 8388607;
        e((a << 31 | g + 127 << 23 | s) >>> 0, o, r);
      }
    }
    i.writeFloatLE = n.bind(null, Ma), i.writeFloatBE = n.bind(null, Wa);
    function t(e, A, o) {
      var r = e(A, o), a = (r >> 31) * 2 + 1, g = r >>> 23 & 255, s = r & 8388607;
      return g === 255 ? s ? NaN : a * (1 / 0) : g === 0 ? a * 1401298464324817e-60 * s : a * Math.pow(2, g - 150) * (s + 8388608);
    }
    i.readFloatLE = t.bind(null, La), i.readFloatBE = t.bind(null, Oa);
  }(), typeof Float64Array < "u" ? function() {
    var n = new Float64Array([-0]), t = new Uint8Array(n.buffer), e = t[7] === 128;
    function A(g, s, I) {
      n[0] = g, s[I] = t[0], s[I + 1] = t[1], s[I + 2] = t[2], s[I + 3] = t[3], s[I + 4] = t[4], s[I + 5] = t[5], s[I + 6] = t[6], s[I + 7] = t[7];
    }
    function o(g, s, I) {
      n[0] = g, s[I] = t[7], s[I + 1] = t[6], s[I + 2] = t[5], s[I + 3] = t[4], s[I + 4] = t[3], s[I + 5] = t[2], s[I + 6] = t[1], s[I + 7] = t[0];
    }
    i.writeDoubleLE = e ? A : o, i.writeDoubleBE = e ? o : A;
    function r(g, s) {
      return t[0] = g[s], t[1] = g[s + 1], t[2] = g[s + 2], t[3] = g[s + 3], t[4] = g[s + 4], t[5] = g[s + 5], t[6] = g[s + 6], t[7] = g[s + 7], n[0];
    }
    function a(g, s) {
      return t[7] = g[s], t[6] = g[s + 1], t[5] = g[s + 2], t[4] = g[s + 3], t[3] = g[s + 4], t[2] = g[s + 5], t[1] = g[s + 6], t[0] = g[s + 7], n[0];
    }
    i.readDoubleLE = e ? r : a, i.readDoubleBE = e ? a : r;
  }() : function() {
    function n(e, A, o, r, a, g) {
      var s = r < 0 ? 1 : 0;
      if (s && (r = -r), r === 0)
        e(0, a, g + A), e(1 / r > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, g + o);
      else if (isNaN(r))
        e(0, a, g + A), e(2146959360, a, g + o);
      else if (r > 17976931348623157e292)
        e(0, a, g + A), e((s << 31 | 2146435072) >>> 0, a, g + o);
      else {
        var I;
        if (r < 22250738585072014e-324)
          I = r / 5e-324, e(I >>> 0, a, g + A), e((s << 31 | I / 4294967296) >>> 0, a, g + o);
        else {
          var c = Math.floor(Math.log(r) / Math.LN2);
          c === 1024 && (c = 1023), I = r * Math.pow(2, -c), e(I * 4503599627370496 >>> 0, a, g + A), e((s << 31 | c + 1023 << 20 | I * 1048576 & 1048575) >>> 0, a, g + o);
        }
      }
    }
    i.writeDoubleLE = n.bind(null, Ma, 0, 4), i.writeDoubleBE = n.bind(null, Wa, 4, 0);
    function t(e, A, o, r, a) {
      var g = e(r, a + A), s = e(r, a + o), I = (s >> 31) * 2 + 1, c = s >>> 20 & 2047, Q = 4294967296 * (s & 1048575) + g;
      return c === 2047 ? Q ? NaN : I * (1 / 0) : c === 0 ? I * 5e-324 * Q : I * Math.pow(2, c - 1075) * (Q + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, La, 0, 4), i.readDoubleBE = t.bind(null, Oa, 4, 0);
  }(), i;
}
function Ma(i, n, t) {
  n[t] = i & 255, n[t + 1] = i >>> 8 & 255, n[t + 2] = i >>> 16 & 255, n[t + 3] = i >>> 24;
}
function Wa(i, n, t) {
  n[t] = i >>> 24, n[t + 1] = i >>> 16 & 255, n[t + 2] = i >>> 8 & 255, n[t + 3] = i & 255;
}
function La(i, n) {
  return (i[n] | i[n + 1] << 8 | i[n + 2] << 16 | i[n + 3] << 24) >>> 0;
}
function Oa(i, n) {
  return (i[n] << 24 | i[n + 1] << 16 | i[n + 2] << 8 | i[n + 3]) >>> 0;
}
function Ja(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var WQ = LQ;
function LQ(i) {
  try {
    if (typeof Ja != "function")
      return null;
    var n = Ja(i);
    return n && (n.length || Object.keys(n).length) ? n : null;
  } catch {
    return null;
  }
}
var xc = {};
(function(i) {
  var n = i;
  n.length = function(t) {
    for (var e = 0, A = 0, o = 0; o < t.length; ++o)
      A = t.charCodeAt(o), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, e += 4) : e += 3;
    return e;
  }, n.read = function(t, e, A) {
    var o = A - e;
    if (o < 1)
      return "";
    for (var r = null, a = [], g = 0, s; e < A; )
      s = t[e++], s < 128 ? a[g++] = s : s > 191 && s < 224 ? a[g++] = (s & 31) << 6 | t[e++] & 63 : s > 239 && s < 365 ? (s = ((s & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[g++] = 55296 + (s >> 10), a[g++] = 56320 + (s & 1023)) : a[g++] = (s & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, g > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, a)), g = 0);
    return r ? (g && r.push(String.fromCharCode.apply(String, a.slice(0, g))), r.join("")) : String.fromCharCode.apply(String, a.slice(0, g));
  }, n.write = function(t, e, A) {
    for (var o = A, r, a, g = 0; g < t.length; ++g)
      r = t.charCodeAt(g), r < 128 ? e[A++] = r : r < 2048 ? (e[A++] = r >> 6 | 192, e[A++] = r & 63 | 128) : (r & 64512) === 55296 && ((a = t.charCodeAt(g + 1)) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (a & 1023), ++g, e[A++] = r >> 18 | 240, e[A++] = r >> 12 & 63 | 128, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128) : (e[A++] = r >> 12 | 224, e[A++] = r >> 6 & 63 | 128, e[A++] = r & 63 | 128);
    return A - o;
  };
})(xc);
var OQ = JQ;
function JQ(i, n, t) {
  var e = t || 8192, A = e >>> 1, o = null, r = e;
  return function(a) {
    if (a < 1 || a > A)
      return i(a);
    r + a > e && (o = i(e), r = 0);
    var g = n.call(o, r, r += a);
    return r & 7 && (r = (r | 7) + 1), g;
  };
}
var Pi, Ua;
function UQ() {
  if (Ua)
    return Pi;
  Ua = 1, Pi = n;
  var i = Et();
  function n(o, r) {
    this.lo = o >>> 0, this.hi = r >>> 0;
  }
  var t = n.zero = new n(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = n.zeroHash = "\0\0\0\0\0\0\0\0";
  n.fromNumber = function(o) {
    if (o === 0)
      return t;
    var r = o < 0;
    r && (o = -o);
    var a = o >>> 0, g = (o - a) / 4294967296 >>> 0;
    return r && (g = ~g >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++g > 4294967295 && (g = 0))), new n(a, g);
  }, n.from = function(o) {
    if (typeof o == "number")
      return n.fromNumber(o);
    if (i.isString(o))
      if (i.Long)
        o = i.Long.fromString(o);
      else
        return n.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new n(o.low >>> 0, o.high >>> 0) : t;
  }, n.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var r = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return r || (a = a + 1 >>> 0), -(r + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, n.prototype.toLong = function(o) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var A = String.prototype.charCodeAt;
  return n.fromHash = function(o) {
    return o === e ? t : new n(
      (A.call(o, 0) | A.call(o, 1) << 8 | A.call(o, 2) << 16 | A.call(o, 3) << 24) >>> 0,
      (A.call(o, 4) | A.call(o, 5) << 8 | A.call(o, 6) << 16 | A.call(o, 7) << 24) >>> 0
    );
  }, n.prototype.toHash = function() {
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
  }, n.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, n.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, n.prototype.length = function() {
    var o = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? r === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Pi;
}
var Ya;
function Et() {
  return Ya || (Ya = 1, function(i) {
    var n = i;
    n.asPromise = FQ, n.base64 = Ic, n.EventEmitter = RQ, n.float = MQ, n.inquire = WQ, n.utf8 = xc, n.pool = OQ, n.LongBits = UQ(), n.isNode = !!(typeof Ve < "u" && Ve && Ve.process && Ve.process.versions && Ve.process.versions.node), n.global = n.isNode && Ve || typeof window < "u" && window || typeof self < "u" && self || Ve, n.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), n.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), n.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, n.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, n.isObject = function(A) {
      return A && typeof A == "object";
    }, n.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    n.isSet = function(A, o) {
      var r = A[o];
      return r != null && A.hasOwnProperty(o) ? typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0 : !1;
    }, n.Buffer = function() {
      try {
        var A = n.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(A) {
      return typeof A == "number" ? n.Buffer ? n._Buffer_allocUnsafe(A) : new n.Array(A) : n.Buffer ? n._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, n.Array = typeof Uint8Array < "u" ? Uint8Array : Array, n.Long = /* istanbul ignore next */
    n.global.dcodeIO && /* istanbul ignore next */
    n.global.dcodeIO.Long || /* istanbul ignore next */
    n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(A) {
      return A ? n.LongBits.from(A).toHash() : n.LongBits.zeroHash;
    }, n.longFromHash = function(A, o) {
      var r = n.LongBits.fromHash(A);
      return n.Long ? n.Long.fromBits(r.lo, r.hi, o) : r.toNumber(!!o);
    };
    function t(A, o, r) {
      for (var a = Object.keys(o), g = 0; g < a.length; ++g)
        (A[a[g]] === void 0 || !r) && (A[a[g]] = o[a[g]]);
      return A;
    }
    n.merge = t, n.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function o(r, a) {
        if (!(this instanceof o))
          return new o(r, a);
        Object.defineProperty(this, "message", { get: function() {
          return r;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
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
      }), o;
    }
    n.newError = e, n.ProtocolError = e("ProtocolError"), n.oneOfGetter = function(A) {
      for (var o = {}, r = 0; r < A.length; ++r)
        o[A[r]] = 1;
      return function() {
        for (var a = Object.keys(this), g = a.length - 1; g > -1; --g)
          if (o[a[g]] === 1 && this[a[g]] !== void 0 && this[a[g]] !== null)
            return a[g];
      };
    }, n.oneOfSetter = function(A) {
      return function(o) {
        for (var r = 0; r < A.length; ++r)
          A[r] !== o && delete this[A[r]];
      };
    }, n.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, n._configure = function() {
      var A = n.Buffer;
      if (!A) {
        n._Buffer_from = n._Buffer_allocUnsafe = null;
        return;
      }
      n._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(o, r) {
        return new A(o, r);
      }, n._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new A(o);
      };
    };
  }(va)), va;
}
var Cc = q, ie = Et(), R0, pi = ie.LongBits, Pa = ie.base64, Ta = ie.utf8;
function Jo(i, n, t) {
  this.fn = i, this.len = n, this.next = void 0, this.val = t;
}
function dr() {
}
function YQ(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function q() {
  this.len = 0, this.head = new Jo(dr, 0, 0), this.tail = this.head, this.states = null;
}
var Bc = function() {
  return ie.Buffer ? function() {
    return (q.create = function() {
      return new R0();
    })();
  } : function() {
    return new q();
  };
};
q.create = Bc();
q.alloc = function(i) {
  return new ie.Array(i);
};
ie.Array !== Array && (q.alloc = ie.pool(q.alloc, ie.Array.prototype.subarray));
q.prototype._push = function(i, n, t) {
  return this.tail = this.tail.next = new Jo(i, n, t), this.len += n, this;
};
function Er(i, n, t) {
  n[t] = i & 255;
}
function PQ(i, n, t) {
  for (; i > 127; )
    n[t++] = i & 127 | 128, i >>>= 7;
  n[t] = i;
}
function lr(i, n) {
  this.len = i, this.next = void 0, this.val = n;
}
lr.prototype = Object.create(Jo.prototype);
lr.prototype.fn = PQ;
q.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new lr(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
q.prototype.int32 = function(i) {
  return i < 0 ? this._push(ur, 10, pi.fromNumber(i)) : this.uint32(i);
};
q.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function ur(i, n, t) {
  for (; i.hi; )
    n[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    n[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  n[t++] = i.lo;
}
q.prototype.uint64 = function(i) {
  var n = pi.from(i);
  return this._push(ur, n.length(), n);
};
q.prototype.int64 = q.prototype.uint64;
q.prototype.sint64 = function(i) {
  var n = pi.from(i).zzEncode();
  return this._push(ur, n.length(), n);
};
q.prototype.bool = function(i) {
  return this._push(Er, 1, i ? 1 : 0);
};
function M0(i, n, t) {
  n[t] = i & 255, n[t + 1] = i >>> 8 & 255, n[t + 2] = i >>> 16 & 255, n[t + 3] = i >>> 24;
}
q.prototype.fixed32 = function(i) {
  return this._push(M0, 4, i >>> 0);
};
q.prototype.sfixed32 = q.prototype.fixed32;
q.prototype.fixed64 = function(i) {
  var n = pi.from(i);
  return this._push(M0, 4, n.lo)._push(M0, 4, n.hi);
};
q.prototype.sfixed64 = q.prototype.fixed64;
q.prototype.float = function(i) {
  return this._push(ie.float.writeFloatLE, 4, i);
};
q.prototype.double = function(i) {
  return this._push(ie.float.writeDoubleLE, 8, i);
};
var TQ = ie.Array.prototype.set ? function(i, n, t) {
  n.set(i, t);
} : function(i, n, t) {
  for (var e = 0; e < i.length; ++e)
    n[t + e] = i[e];
};
q.prototype.bytes = function(i) {
  var n = i.length >>> 0;
  if (!n)
    return this._push(Er, 1, 0);
  if (ie.isString(i)) {
    var t = q.alloc(n = Pa.length(i));
    Pa.decode(i, t, 0), i = t;
  }
  return this.uint32(n)._push(TQ, n, i);
};
q.prototype.string = function(i) {
  var n = Ta.length(i);
  return n ? this.uint32(n)._push(Ta.write, n, i) : this._push(Er, 1, 0);
};
q.prototype.fork = function() {
  return this.states = new YQ(this), this.head = this.tail = new Jo(dr, 0, 0), this.len = 0, this;
};
q.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Jo(dr, 0, 0), this.len = 0), this;
};
q.prototype.ldelim = function() {
  var i = this.head, n = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = n, this.len += t), this;
};
q.prototype.finish = function() {
  for (var i = this.head.next, n = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, n, t), t += i.len, i = i.next;
  return n;
};
q._configure = function(i) {
  R0 = i, q.create = Bc(), R0._configure();
};
var HQ = he, Qc = Cc;
(he.prototype = Object.create(Qc.prototype)).constructor = he;
var Pe = Et();
function he() {
  Qc.call(this);
}
he._configure = function() {
  he.alloc = Pe._Buffer_allocUnsafe, he.writeBytesBuffer = Pe.Buffer && Pe.Buffer.prototype instanceof Uint8Array && Pe.Buffer.prototype.set.name === "set" ? function(i, n, t) {
    n.set(i, t);
  } : function(i, n, t) {
    if (i.copy)
      i.copy(n, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        n[t++] = i[e++];
  };
};
he.prototype.bytes = function(i) {
  Pe.isString(i) && (i = Pe._Buffer_from(i, "base64"));
  var n = i.length >>> 0;
  return this.uint32(n), n && this._push(he.writeBytesBuffer, n, i), this;
};
function KQ(i, n, t) {
  i.length < 40 ? Pe.utf8.write(i, n, t) : n.utf8Write ? n.utf8Write(i, t) : n.write(i, t);
}
he.prototype.string = function(i) {
  var n = Pe.Buffer.byteLength(i);
  return this.uint32(n), n && this._push(KQ, n, i), this;
};
he._configure();
var dc = sA, me = Et(), W0, Ec = me.LongBits, jQ = me.utf8;
function xe(i, n) {
  return RangeError("index out of range: " + i.pos + " + " + (n || 1) + " > " + i.len);
}
function sA(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var Ha = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new sA(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new sA(i);
  throw Error("illegal buffer");
}, lc = function() {
  return me.Buffer ? function(i) {
    return (sA.create = function(n) {
      return me.Buffer.isBuffer(n) ? new W0(n) : Ha(n);
    })(i);
  } : Ha;
};
sA.create = lc();
sA.prototype._slice = me.Array.prototype.subarray || /* istanbul ignore next */
me.Array.prototype.slice;
sA.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, xe(this, 10);
    return i;
  };
}();
sA.prototype.int32 = function() {
  return this.uint32() | 0;
};
sA.prototype.sint32 = function() {
  var i = this.uint32();
  return i >>> 1 ^ -(i & 1) | 0;
};
function Ti() {
  var i = new Ec(0, 0), n = 0;
  if (this.len - this.pos > 4) {
    for (; n < 4; ++n)
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << n * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    if (i.lo = (i.lo | (this.buf[this.pos] & 127) << 28) >>> 0, i.hi = (i.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return i;
    n = 0;
  } else {
    for (; n < 3; ++n) {
      if (this.pos >= this.len)
        throw xe(this);
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << n * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
    return i.lo = (i.lo | (this.buf[this.pos++] & 127) << n * 7) >>> 0, i;
  }
  if (this.len - this.pos > 4) {
    for (; n < 5; ++n)
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << n * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
  } else
    for (; n < 5; ++n) {
      if (this.pos >= this.len)
        throw xe(this);
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << n * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
  throw Error("invalid varint encoding");
}
sA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Xn(i, n) {
  return (i[n - 4] | i[n - 3] << 8 | i[n - 2] << 16 | i[n - 1] << 24) >>> 0;
}
sA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw xe(this, 4);
  return Xn(this.buf, this.pos += 4);
};
sA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw xe(this, 4);
  return Xn(this.buf, this.pos += 4) | 0;
};
function Ka() {
  if (this.pos + 8 > this.len)
    throw xe(this, 8);
  return new Ec(Xn(this.buf, this.pos += 4), Xn(this.buf, this.pos += 4));
}
sA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw xe(this, 4);
  var i = me.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
sA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw xe(this, 4);
  var i = me.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
sA.prototype.bytes = function() {
  var i = this.uint32(), n = this.pos, t = this.pos + i;
  if (t > this.len)
    throw xe(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(n, t) : n === t ? new this.buf.constructor(0) : this._slice.call(this.buf, n, t);
};
sA.prototype.string = function() {
  var i = this.bytes();
  return jQ.read(i, 0, i.length);
};
sA.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw xe(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw xe(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
sA.prototype.skipType = function(i) {
  switch (i) {
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
      for (; (i = this.uint32() & 7) !== 4; )
        this.skipType(i);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + i + " at offset " + this.pos);
  }
  return this;
};
sA._configure = function(i) {
  W0 = i, sA.create = lc(), W0._configure();
  var n = me.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  me.merge(sA.prototype, {
    int64: function() {
      return Ti.call(this)[n](!1);
    },
    uint64: function() {
      return Ti.call(this)[n](!0);
    },
    sint64: function() {
      return Ti.call(this).zzDecode()[n](!1);
    },
    fixed64: function() {
      return Ka.call(this)[n](!0);
    },
    sfixed64: function() {
      return Ka.call(this)[n](!1);
    }
  });
};
var qQ = Bt, uc = dc;
(Bt.prototype = Object.create(uc.prototype)).constructor = Bt;
var ja = Et();
function Bt(i) {
  uc.call(this, i);
}
Bt._configure = function() {
  ja.Buffer && (Bt.prototype._slice = ja.Buffer.prototype.slice);
};
Bt.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Bt._configure();
var fc = {}, ZQ = ho, fr = Et();
(ho.prototype = Object.create(fr.EventEmitter.prototype)).constructor = ho;
function ho(i, n, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  fr.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!n, this.responseDelimited = !!t;
}
ho.prototype.rpcCall = function i(n, t, e, A, o) {
  if (!A)
    throw TypeError("request must be specified");
  var r = this;
  if (!o)
    return fr.asPromise(i, r, n, t, e, A);
  if (!r.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return r.rpcImpl(
      n,
      t[r.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(a, g) {
        if (a)
          return r.emit("error", a, n), o(a);
        if (g === null) {
          r.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(g instanceof e))
          try {
            g = e[r.responseDelimited ? "decodeDelimited" : "decode"](g);
          } catch (s) {
            return r.emit("error", s, n), o(s);
          }
        return r.emit("data", g, n), o(null, g);
      }
    );
  } catch (a) {
    r.emit("error", a, n), setTimeout(function() {
      o(a);
    }, 0);
    return;
  }
};
ho.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var n = i;
  n.Service = ZQ;
})(fc);
var VQ = {};
(function(i) {
  var n = i;
  n.build = "minimal", n.Writer = Cc, n.BufferWriter = HQ, n.Reader = dc, n.BufferReader = qQ, n.util = Et(), n.rpc = fc, n.roots = VQ, n.configure = t;
  function t() {
    n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader);
  }
  t();
})(cc);
var X = cc;
const y = X.Reader, rA = X.Writer, p = X.util, l = X.roots.default || (X.roots.default = {}), _Q = l.dot = (() => {
  const i = {};
  return i.Content = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.token = p.newBuffer([]), n.prototype.iv = p.newBuffer([]), n.prototype.schemaVersion = 0, n.prototype.bytes = p.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = rA.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new l.dot.Content();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
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
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || p.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || p.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !p.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || p.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof l.dot.Content)
        return t;
      let e = new l.dot.Content();
      return t.token != null && (typeof t.token == "string" ? p.base64.decode(t.token, e.token = p.newBuffer(p.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? p.base64.decode(t.iv, e.iv = p.newBuffer(p.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? p.base64.decode(t.bytes, e.bytes = p.newBuffer(p.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = p.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = p.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = p.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? p.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? p.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? p.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, X.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, n;
  }(), i.v4 = function() {
    const n = {};
    return n.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.images = p.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = rA.create()), e.images != null && e.images.length)
          for (let o = 0; o < e.images.length; ++o)
            l.dot.Image.encode(e.images[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && l.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.images && r.images.length || (r.images = []), r.images.push(l.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = l.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let A = 0; A < e.images.length; ++A) {
            let o = l.dot.Image.verify(e.images[A]);
            if (o)
              return "images." + o;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = l.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new l.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let o = 0; o < e.images.length; ++o) {
            if (typeof e.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[o] = l.dot.Image.fromObject(e.images[o]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = l.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.images = []), A.defaults && (o.metadata = null), e.images && e.images.length) {
          o.images = [];
          for (let r = 0; r < e.images.length; ++r)
            o.images[r] = l.dot.Image.toObject(e.images[r], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = l.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), n.Metadata = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: p.oneOfGetter(e = ["sessionToken"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: p.oneOfGetter(e = ["web", "android", "ios"]),
        set: p.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = rA.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && l.dot.v4.WebMetadata.encode(A.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && l.dot.v4.AndroidMetadata.encode(A.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && l.dot.v4.IosMetadata.encode(A.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof y || (A = y.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new l.dot.v4.Metadata();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              a.web = l.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = l.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = l.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof y || (A = new y(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !p.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !p.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let r = l.dot.v4.WebMetadata.verify(A.web);
            if (r)
              return "web." + r;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = l.dot.v4.AndroidMetadata.verify(A.android);
            if (r)
              return "android." + r;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let r = l.dot.v4.IosMetadata.verify(A.ios);
            if (r)
              return "ios." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof l.dot.v4.Metadata)
          return A;
        let o = new l.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              o.platform = A.platform;
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
        if (A.sessionToken != null && (o.sessionToken = String(A.sessionToken)), A.componentVersion != null && (o.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = l.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = l.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = l.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.platform = o.enums === String ? "WEB" : 0, r.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (r.platform = o.enums === String ? l.dot.Platform[A.platform] === void 0 ? A.platform : l.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (r.web = l.dot.v4.WebMetadata.toObject(A.web, o), o.oneofs && (r.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (r.android = l.dot.v4.AndroidMetadata.toObject(A.android, o), o.oneofs && (r.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (r.ios = l.dot.v4.IosMetadata.toObject(A.ios, o), o.oneofs && (r.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (r.sessionToken = A.sessionToken, o.oneofs && (r._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (r.componentVersion = A.componentVersion), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), n.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.supportedAbis = p.emptyArray, t.prototype.device = null, t.prototype.digests = p.emptyArray, t.prototype.digestsWithTimestamp = p.emptyArray, t.prototype.dynamicCameraFrameProperties = p.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: p.oneOfGetter(e = ["device"]),
        set: p.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        if (o || (o = rA.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let r = 0; r < A.supportedAbis.length; ++r)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[r]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let r = 0; r < A.digests.length; ++r)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[r]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[a]), l.dot.Int32List.encode(A.dynamicCameraFrameProperties[r[a]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r)
            l.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[r], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof y || (A = y.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new l.dot.v4.AndroidMetadata(), g, s;
        for (; A.pos < r; ) {
          let I = A.uint32();
          switch (I >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              a.device = A.string();
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(l.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === p.emptyObject && (a.dynamicCameraFrameProperties = {});
              let c = A.uint32() + A.pos;
              for (g = "", s = null; A.pos < c; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    g = A.string();
                    break;
                  case 2:
                    s = l.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[g] = s;
              break;
            }
            default:
              A.skipType(I & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof y || (A = new y(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < A.supportedAbis.length; ++o)
            if (!p.isString(A.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !p.isString(A.device))
          return "device: string expected";
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let o = 0; o < A.digests.length; ++o)
            if (!(A.digests[o] && typeof A.digests[o].length == "number" || p.isString(A.digests[o])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            let r = l.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[o]);
            if (r)
              return "digestsWithTimestamp." + r;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!p.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(A.dynamicCameraFrameProperties);
          for (let r = 0; r < o.length; ++r) {
            let a = l.dot.Int32List.verify(A.dynamicCameraFrameProperties[o[r]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof l.dot.v4.AndroidMetadata)
          return A;
        let o = new l.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let r = 0; r < A.supportedAbis.length; ++r)
            o.supportedAbis[r] = String(A.supportedAbis[r]);
        }
        if (A.device != null && (o.device = String(A.device)), A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let r = 0; r < A.digests.length; ++r)
            typeof A.digests[r] == "string" ? p.base64.decode(A.digests[r], o.digests[r] = p.newBuffer(p.base64.length(A.digests[r])), 0) : A.digests[r].length >= 0 && (o.digests[r] = A.digests[r]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let r = 0; r < A.digestsWithTimestamp.length; ++r) {
            if (typeof A.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[r] = l.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[r]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let r = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < r.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[r[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[r[a]] = l.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[r[a]]);
          }
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        if ((o.arrays || o.defaults) && (r.supportedAbis = [], r.digests = [], r.digestsWithTimestamp = []), (o.objects || o.defaults) && (r.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          r.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            r.supportedAbis[g] = A.supportedAbis[g];
        }
        if (A.device != null && A.hasOwnProperty("device") && (r.device = A.device, o.oneofs && (r._device = "device")), A.digests && A.digests.length) {
          r.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            r.digests[g] = o.bytes === String ? p.base64.encode(A.digests[g], 0, A.digests[g].length) : o.bytes === Array ? Array.prototype.slice.call(A.digests[g]) : A.digests[g];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          r.dynamicCameraFrameProperties = {};
          for (let g = 0; g < a.length; ++g)
            r.dynamicCameraFrameProperties[a[g]] = l.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[g]], o);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            r.digestsWithTimestamp[g] = l.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[g], o);
        }
        return r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), n.IosMetadata = function() {
      function t(e) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = p.emptyObject, t.prototype.digests = p.emptyArray, t.prototype.digestsWithTimestamp = p.emptyArray, t.prototype.isoValues = p.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = rA.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let o = Object.keys(e.architectureInfo), r = 0; r < o.length; ++r)
            A.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o[r]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[o[r]]).ldelim();
        if (e.digests != null && e.digests.length)
          for (let o = 0; o < e.digests.length; ++o)
            A.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[o]);
        if (e.isoValues != null && e.isoValues.length) {
          A.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let o = 0; o < e.isoValues.length; ++o)
            A.int32(e.isoValues[o]);
          A.ldelim();
        }
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o)
            l.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[o], A.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.IosMetadata(), a, g;
        for (; e.pos < o; ) {
          let s = e.uint32();
          switch (s >>> 3) {
            case 1: {
              r.cameraModelId = e.string();
              break;
            }
            case 2: {
              r.architectureInfo === p.emptyObject && (r.architectureInfo = {});
              let I = e.uint32() + e.pos;
              for (a = "", g = !1; e.pos < I; ) {
                let c = e.uint32();
                switch (c >>> 3) {
                  case 1:
                    a = e.string();
                    break;
                  case 2:
                    g = e.bool();
                    break;
                  default:
                    e.skipType(c & 7);
                    break;
                }
              }
              r.architectureInfo[a] = g;
              break;
            }
            case 3: {
              r.digests && r.digests.length || (r.digests = []), r.digests.push(e.bytes());
              break;
            }
            case 5: {
              r.digestsWithTimestamp && r.digestsWithTimestamp.length || (r.digestsWithTimestamp = []), r.digestsWithTimestamp.push(l.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              if (r.isoValues && r.isoValues.length || (r.isoValues = []), (s & 7) === 2) {
                let I = e.uint32() + e.pos;
                for (; e.pos < I; )
                  r.isoValues.push(e.int32());
              } else
                r.isoValues.push(e.int32());
              break;
            }
            default:
              e.skipType(s & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !p.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!p.isObject(e.architectureInfo))
            return "architectureInfo: object expected";
          let A = Object.keys(e.architectureInfo);
          for (let o = 0; o < A.length; ++o)
            if (typeof e.architectureInfo[A[o]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (e.digests != null && e.hasOwnProperty("digests")) {
          if (!Array.isArray(e.digests))
            return "digests: array expected";
          for (let A = 0; A < e.digests.length; ++A)
            if (!(e.digests[A] && typeof e.digests[A].length == "number" || p.isString(e.digests[A])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let A = 0; A < e.digestsWithTimestamp.length; ++A) {
            let o = l.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[A]);
            if (o)
              return "digestsWithTimestamp." + o;
          }
        }
        if (e.isoValues != null && e.hasOwnProperty("isoValues")) {
          if (!Array.isArray(e.isoValues))
            return "isoValues: array expected";
          for (let A = 0; A < e.isoValues.length; ++A)
            if (!p.isInteger(e.isoValues[A]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.IosMetadata)
          return e;
        let A = new l.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (A.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          A.architectureInfo = {};
          for (let o = Object.keys(e.architectureInfo), r = 0; r < o.length; ++r)
            A.architectureInfo[o[r]] = !!e.architectureInfo[o[r]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          A.digests = [];
          for (let o = 0; o < e.digests.length; ++o)
            typeof e.digests[o] == "string" ? p.base64.decode(e.digests[o], A.digests[o] = p.newBuffer(p.base64.length(e.digests[o])), 0) : e.digests[o].length >= 0 && (A.digests[o] = e.digests[o]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          A.digestsWithTimestamp = [];
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o) {
            if (typeof e.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            A.digestsWithTimestamp[o] = l.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[o]);
          }
        }
        if (e.isoValues) {
          if (!Array.isArray(e.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          A.isoValues = [];
          for (let o = 0; o < e.isoValues.length; ++o)
            A.isoValues[o] = e.isoValues[o] | 0;
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        (A.arrays || A.defaults) && (o.digests = [], o.isoValues = [], o.digestsWithTimestamp = []), (A.objects || A.defaults) && (o.architectureInfo = {}), A.defaults && (o.cameraModelId = ""), e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && (o.cameraModelId = e.cameraModelId);
        let r;
        if (e.architectureInfo && (r = Object.keys(e.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let a = 0; a < r.length; ++a)
            o.architectureInfo[r[a]] = e.architectureInfo[r[a]];
        }
        if (e.digests && e.digests.length) {
          o.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            o.digests[a] = A.bytes === String ? p.base64.encode(e.digests[a], 0, e.digests[a].length) : A.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          o.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            o.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            o.digestsWithTimestamp[a] = l.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], A);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosMetadata";
      }, t;
    }(), n.WebMetadata = function() {
      function t(e) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = p.emptyArray, t.prototype.hashedDetectedImages = p.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = p.emptyArray, t.prototype.detectionRecord = p.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = rA.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && l.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let o = 0; o < e.availableCameraProperties.length; ++o)
            l.dot.v4.CameraProperties.encode(e.availableCameraProperties[o], A.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (e.hashedDetectedImages != null && e.hashedDetectedImages.length)
          for (let o = 0; o < e.hashedDetectedImages.length; ++o)
            A.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(e.hashedDetectedImages[o]);
        if (e.detectionRecord != null && e.detectionRecord.length)
          for (let o = 0; o < e.detectionRecord.length; ++o)
            l.dot.v4.DetectedObject.encode(e.detectionRecord[o], A.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o)
            l.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[o], A.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.WebMetadata();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.currentCameraProperties = l.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.availableCameraProperties && r.availableCameraProperties.length || (r.availableCameraProperties = []), r.availableCameraProperties.push(l.dot.v4.CameraProperties.decode(e, e.uint32()));
              break;
            }
            case 3: {
              r.hashedDetectedImages && r.hashedDetectedImages.length || (r.hashedDetectedImages = []), r.hashedDetectedImages.push(e.string());
              break;
            }
            case 5: {
              r.hashedDetectedImagesWithTimestamp && r.hashedDetectedImagesWithTimestamp.length || (r.hashedDetectedImagesWithTimestamp = []), r.hashedDetectedImagesWithTimestamp.push(l.dot.v4.HashedDetectedImageWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              r.detectionRecord && r.detectionRecord.length || (r.detectionRecord = []), r.detectionRecord.push(l.dot.v4.DetectedObject.decode(e, e.uint32()));
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties")) {
          let A = l.dot.v4.MediaTrackSettings.verify(e.currentCameraProperties);
          if (A)
            return "currentCameraProperties." + A;
        }
        if (e.availableCameraProperties != null && e.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(e.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let A = 0; A < e.availableCameraProperties.length; ++A) {
            let o = l.dot.v4.CameraProperties.verify(e.availableCameraProperties[A]);
            if (o)
              return "availableCameraProperties." + o;
          }
        }
        if (e.hashedDetectedImages != null && e.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(e.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let A = 0; A < e.hashedDetectedImages.length; ++A)
            if (!p.isString(e.hashedDetectedImages[A]))
              return "hashedDetectedImages: string[] expected";
        }
        if (e.hashedDetectedImagesWithTimestamp != null && e.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let A = 0; A < e.hashedDetectedImagesWithTimestamp.length; ++A) {
            let o = l.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[A]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let A = 0; A < e.detectionRecord.length; ++A) {
            let o = l.dot.v4.DetectedObject.verify(e.detectionRecord[A]);
            if (o)
              return "detectionRecord." + o;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.WebMetadata)
          return e;
        let A = new l.dot.v4.WebMetadata();
        if (e.currentCameraProperties != null) {
          if (typeof e.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          A.currentCameraProperties = l.dot.v4.MediaTrackSettings.fromObject(e.currentCameraProperties);
        }
        if (e.availableCameraProperties) {
          if (!Array.isArray(e.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          A.availableCameraProperties = [];
          for (let o = 0; o < e.availableCameraProperties.length; ++o) {
            if (typeof e.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            A.availableCameraProperties[o] = l.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[o]);
          }
        }
        if (e.hashedDetectedImages) {
          if (!Array.isArray(e.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          A.hashedDetectedImages = [];
          for (let o = 0; o < e.hashedDetectedImages.length; ++o)
            A.hashedDetectedImages[o] = String(e.hashedDetectedImages[o]);
        }
        if (e.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(e.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          A.hashedDetectedImagesWithTimestamp = [];
          for (let o = 0; o < e.hashedDetectedImagesWithTimestamp.length; ++o) {
            if (typeof e.hashedDetectedImagesWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            A.hashedDetectedImagesWithTimestamp[o] = l.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          A.detectionRecord = [];
          for (let o = 0; o < e.detectionRecord.length; ++o) {
            if (typeof e.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            A.detectionRecord[o] = l.dot.v4.DetectedObject.fromObject(e.detectionRecord[o]);
          }
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), A.defaults && (o.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = l.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, A)), e.availableCameraProperties && e.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            o.availableCameraProperties[r] = l.dot.v4.CameraProperties.toObject(e.availableCameraProperties[r], A);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let r = 0; r < e.hashedDetectedImages.length; ++r)
            o.hashedDetectedImages[r] = e.hashedDetectedImages[r];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          o.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r)
            o.detectionRecord[r] = l.dot.v4.DetectedObject.toObject(e.detectionRecord[r], A);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            o.hashedDetectedImagesWithTimestamp[r] = l.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[r], A);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.WebMetadata";
      }, t;
    }(), n.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = p.Long ? p.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.imageHash = e.string();
              break;
            }
            case 2: {
              r.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !p.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !p.isInteger(e.timestampMillis) && !(e.timestampMillis && p.isInteger(e.timestampMillis.low) && p.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new l.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (p.Long ? (A.timestampMillis = p.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new p.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if (A.defaults)
          if (o.imageHash = "", p.Long) {
            let r = new p.Long(0, 0, !0);
            o.timestampMillis = A.longs === String ? r.toString() : A.longs === Number ? r.toNumber() : r;
          } else
            o.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (o.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? o.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : o.timestampMillis = A.longs === String ? p.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new p.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), n.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: p.oneOfGetter(e = ["aspectRatio"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: p.oneOfGetter(e = ["autoGainControl"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: p.oneOfGetter(e = ["channelCount"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: p.oneOfGetter(e = ["deviceId"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: p.oneOfGetter(e = ["displaySurface"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: p.oneOfGetter(e = ["echoCancellation"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: p.oneOfGetter(e = ["facingMode"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: p.oneOfGetter(e = ["frameRate"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: p.oneOfGetter(e = ["groupId"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: p.oneOfGetter(e = ["height"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: p.oneOfGetter(e = ["noiseSuppression"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: p.oneOfGetter(e = ["sampleRate"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: p.oneOfGetter(e = ["sampleSize"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: p.oneOfGetter(e = ["width"]),
        set: p.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: p.oneOfGetter(e = ["deviceName"]),
        set: p.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = rA.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof y || (A = y.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new l.dot.v4.MediaTrackSettings();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
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
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof y || (A = new y(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !p.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !p.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !p.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !p.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !p.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !p.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !p.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !p.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !p.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !p.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof l.dot.v4.MediaTrackSettings)
          return A;
        let o = new l.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (o.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (o.autoGainControl = !!A.autoGainControl), A.channelCount != null && (o.channelCount = A.channelCount | 0), A.deviceId != null && (o.deviceId = String(A.deviceId)), A.displaySurface != null && (o.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (o.echoCancellation = !!A.echoCancellation), A.facingMode != null && (o.facingMode = String(A.facingMode)), A.frameRate != null && (o.frameRate = Number(A.frameRate)), A.groupId != null && (o.groupId = String(A.groupId)), A.height != null && (o.height = A.height | 0), A.noiseSuppression != null && (o.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (o.sampleRate = A.sampleRate | 0), A.sampleSize != null && (o.sampleSize = A.sampleSize | 0), A.width != null && (o.width = A.width | 0), A.deviceName != null && (o.deviceName = String(A.deviceName)), o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (r.aspectRatio = o.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, o.oneofs && (r._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (r.autoGainControl = A.autoGainControl, o.oneofs && (r._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (r.channelCount = A.channelCount, o.oneofs && (r._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (r.deviceId = A.deviceId, o.oneofs && (r._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (r.displaySurface = A.displaySurface, o.oneofs && (r._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (r.echoCancellation = A.echoCancellation, o.oneofs && (r._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (r.facingMode = A.facingMode, o.oneofs && (r._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (r.frameRate = o.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, o.oneofs && (r._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (r.groupId = A.groupId, o.oneofs && (r._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (r.height = A.height, o.oneofs && (r._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (r.noiseSuppression = A.noiseSuppression, o.oneofs && (r._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (r.sampleRate = A.sampleRate, o.oneofs && (r._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (r.sampleSize = A.sampleSize, o.oneofs && (r._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (r.width = A.width, o.oneofs && (r._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (r.deviceName = A.deviceName, o.oneofs && (r._deviceName = "deviceName")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), n.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.ImageBitmap();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.width = e.int32();
              break;
            }
            case 2: {
              r.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !p.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !p.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.ImageBitmap)
          return e;
        let A = new l.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.width = 0, o.height = 0), e.width != null && e.hasOwnProperty("width") && (o.width = e.width), e.height != null && e.hasOwnProperty("height") && (o.height = e.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), n.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: p.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: p.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = rA.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && l.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && l.dot.v4.MediaTrackSettings.encode(A.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof y || (A = y.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new l.dot.v4.CameraProperties();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = l.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = l.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof y || (A = new y(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let o = l.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let o = l.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof l.dot.v4.CameraProperties)
          return A;
        let o = new l.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = l.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = l.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return o.defaults && (r.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (r.cameraInitFrameResolution = l.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, o), o.oneofs && (r._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (r.cameraProperties = l.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, o)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), n.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && l.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && l.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && l.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && l.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && l.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.DetectedObject();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.brightness = e.float();
              break;
            }
            case 2: {
              r.sharpness = e.float();
              break;
            }
            case 3: {
              r.hotspots = e.float();
              break;
            }
            case 4: {
              r.confidence = e.float();
              break;
            }
            case 5: {
              r.faceSize = e.float();
              break;
            }
            case 6: {
              r.faceCenter = l.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              r.smallestEdge = e.float();
              break;
            }
            case 8: {
              r.bottomLeft = l.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              r.bottomRight = l.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              r.topLeft = l.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              r.topRight = l.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
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
          let A = l.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = l.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = l.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = l.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = l.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.DetectedObject)
          return e;
        let A = new l.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = l.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = l.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = l.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = l.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = l.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (o.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (o.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (o.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (o.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (o.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (o.faceCenter = l.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (o.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (o.bottomLeft = l.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (o.bottomRight = l.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (o.topLeft = l.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (o.topRight = l.dot.v4.Point.toObject(e.topRight, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), n.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.Point();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.x = e.float();
              break;
            }
            case 2: {
              r.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.Point)
          return e;
        let A = new l.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.x = 0, o.y = 0), e.x != null && e.hasOwnProperty("x") && (o.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (o.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), n.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && l.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && l.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.FaceContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = l.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = l.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = l.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = l.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.FaceContent)
          return e;
        let A = new l.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = l.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = l.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = l.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = l.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), n.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && l.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && l.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.DocumentContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = l.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = l.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = l.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = l.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.DocumentContent)
          return e;
        let A = new l.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = l.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = l.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = l.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = l.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), n.Blob = function() {
      function t(A) {
        if (A)
          for (let o = Object.keys(A), r = 0; r < o.length; ++r)
            A[o[r]] != null && (this[o[r]] = A[o[r]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: p.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: p.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, o) {
        return o || (o = rA.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && l.dot.v4.DocumentContent.encode(A.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && l.dot.v4.FaceContent.encode(A.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && l.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && l.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && l.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && l.dot.v4.PalmContent.encode(A.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(A, o) {
        return this.encode(A, o).ldelim();
      }, t.decode = function(A, o) {
        A instanceof y || (A = y.create(A));
        let r = o === void 0 ? A.len : A.pos + o, a = new l.dot.v4.Blob();
        for (; A.pos < r; ) {
          let g = A.uint32();
          switch (g >>> 3) {
            case 1: {
              a.documentContent = l.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = l.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = l.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = l.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = l.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = l.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(g & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof y || (A = new y(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let o = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let r = l.dot.v4.DocumentContent.verify(A.documentContent);
            if (r)
              return "documentContent." + r;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = l.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (r)
              return "eyeGazeLivenessContent." + r;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = l.dot.v4.FaceContent.verify(A.faceContent);
            if (r)
              return "faceContent." + r;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = l.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (r)
              return "magnifeyeLivenessContent." + r;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = l.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (r)
              return "smileLivenessContent." + r;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let r = l.dot.v4.PalmContent.verify(A.palmContent);
            if (r)
              return "palmContent." + r;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof l.dot.v4.Blob)
          return A;
        let o = new l.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = l.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = l.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = l.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = l.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = l.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = l.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        return o;
      }, t.toObject = function(A, o) {
        o || (o = {});
        let r = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (r.documentContent = l.dot.v4.DocumentContent.toObject(A.documentContent, o), o.oneofs && (r.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (r.faceContent = l.dot.v4.FaceContent.toObject(A.faceContent, o), o.oneofs && (r.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (r.magnifeyeLivenessContent = l.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, o), o.oneofs && (r.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (r.smileLivenessContent = l.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, o), o.oneofs && (r.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (r.eyeGazeLivenessContent = l.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, o), o.oneofs && (r.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (r.palmContent = l.dot.v4.PalmContent.toObject(A.palmContent, o), o.oneofs && (r.blob = "palmContent")), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), n.EyeGazeLivenessContent = function() {
      function t(e) {
        if (this.segments = [], e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.segments = p.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = rA.create()), e.segments != null && e.segments.length)
          for (let o = 0; o < e.segments.length; ++o)
            l.dot.v4.EyeGazeLivenessSegment.encode(e.segments[o], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && l.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.segments && r.segments.length || (r.segments = []), r.segments.push(l.dot.v4.EyeGazeLivenessSegment.decode(e, e.uint32()));
              break;
            }
            case 2: {
              r.metadata = l.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.segments != null && e.hasOwnProperty("segments")) {
          if (!Array.isArray(e.segments))
            return "segments: array expected";
          for (let A = 0; A < e.segments.length; ++A) {
            let o = l.dot.v4.EyeGazeLivenessSegment.verify(e.segments[A]);
            if (o)
              return "segments." + o;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = l.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.EyeGazeLivenessContent)
          return e;
        let A = new l.dot.v4.EyeGazeLivenessContent();
        if (e.segments) {
          if (!Array.isArray(e.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          A.segments = [];
          for (let o = 0; o < e.segments.length; ++o) {
            if (typeof e.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            A.segments[o] = l.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[o]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          A.metadata = l.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        if ((A.arrays || A.defaults) && (o.segments = []), A.defaults && (o.metadata = null), e.segments && e.segments.length) {
          o.segments = [];
          for (let r = 0; r < e.segments.length; ++r)
            o.segments[r] = l.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[r], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = l.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), n.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && l.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.corner = e.int32();
              break;
            }
            case 2: {
              r.image = l.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
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
          let A = l.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new l.dot.v4.EyeGazeLivenessSegment();
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
          A.image = l.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.corner = A.enums === String ? "TOP_LEFT" : 0, o.image = null), e.corner != null && e.hasOwnProperty("corner") && (o.corner = A.enums === String ? l.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : l.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (o.image = l.dot.Image.toObject(e.image, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), n.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), n.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && l.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && l.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && l.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.SmileLivenessContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.neutralExpressionFaceImage = l.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.smileExpressionFaceImage = l.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              r.metadata = l.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let A = l.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = l.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = l.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.SmileLivenessContent)
          return e;
        let A = new l.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = l.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = l.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = l.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = l.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = l.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = l.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), n.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), o = 0; o < A.length; ++o)
            e[A[o]] != null && (this[A[o]] = e[A[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = rA.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && l.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && l.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof y || (e = y.create(e));
        let o = A === void 0 ? e.len : e.pos + A, r = new l.dot.v4.PalmContent();
        for (; e.pos < o; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              r.image = l.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              r.metadata = l.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return r;
      }, t.decodeDelimited = function(e) {
        return e instanceof y || (e = new y(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = l.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = l.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof l.dot.v4.PalmContent)
          return e;
        let A = new l.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = l.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = l.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let o = {};
        return A.defaults && (o.image = null, o.metadata = null), e.image != null && e.hasOwnProperty("image") && (o.image = l.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (o.metadata = l.dot.v4.Metadata.toObject(e.metadata, A)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, X.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), n;
  }(), i.Image = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.bytes = p.newBuffer([]), n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = rA.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new l.dot.Image();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || p.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof l.dot.Image)
        return t;
      let e = new l.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? p.base64.decode(t.bytes, e.bytes = p.newBuffer(p.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = p.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? p.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, X.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, n;
  }(), i.Int32List = function() {
    function n(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.items = p.emptyArray, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      if (e || (e = rA.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new l.dot.Int32List();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (r & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                o.items.push(t.int32());
            } else
              o.items.push(t.int32());
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!p.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, n.fromObject = function(t) {
      if (t instanceof l.dot.Int32List)
        return t;
      let e = new l.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let A = 0; A < t.items.length; ++A)
          e.items[A] = t.items[A] | 0;
      }
      return e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let o = 0; o < t.items.length; ++o)
          A.items[o] = t.items[o];
      }
      return A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, X.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, n;
  }(), i.Platform = function() {
    const n = {}, t = Object.create(n);
    return t[n[0] = "WEB"] = 0, t[n[1] = "ANDROID"] = 1, t[n[2] = "IOS"] = 2, t;
  }(), i.DigestWithTimestamp = function() {
    function n(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return n.prototype.digest = p.newBuffer([]), n.prototype.timestampMillis = p.Long ? p.Long.fromBits(0, 0, !0) : 0, n.create = function(t) {
      return new n(t);
    }, n.encode = function(t, e) {
      return e || (e = rA.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, n.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, n.decode = function(t, e) {
      t instanceof y || (t = y.create(t));
      let A = e === void 0 ? t.len : t.pos + e, o = new l.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let r = t.uint32();
        switch (r >>> 3) {
          case 1: {
            o.digest = t.bytes();
            break;
          }
          case 2: {
            o.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(r & 7);
            break;
        }
      }
      return o;
    }, n.decodeDelimited = function(t) {
      return t instanceof y || (t = new y(t)), this.decode(t, t.uint32());
    }, n.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || p.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !p.isInteger(t.timestampMillis) && !(t.timestampMillis && p.isInteger(t.timestampMillis.low) && p.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, n.fromObject = function(t) {
      if (t instanceof l.dot.DigestWithTimestamp)
        return t;
      let e = new l.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? p.base64.decode(t.digest, e.digest = p.newBuffer(p.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (p.Long ? (e.timestampMillis = p.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new p.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, n.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = p.newBuffer(A.digest))), p.Long) {
          let o = new p.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? p.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? p.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new p.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, n.prototype.toJSON = function() {
      return this.constructor.toObject(this, X.util.toJSONOptions);
    }, n.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, n;
  }(), i;
})();
async function zQ(i, n) {
  const { PalmContent: t } = _Q.v4, e = await rc(i), A = await nQ(n), o = {};
  o.image = e, o.metadata = A;
  const r = o, a = t.verify(r);
  if (a) throw Error(a);
  const g = t.create(r), s = {};
  return s.palmContent = g, rQ(s);
}
async function XQ(i, n) {
  const t = await zQ(i, n);
  return iQ(t);
}
function $Q({ controller: i }) {
  const { captureMode: n, onPhotoTaken: t, sessionToken: e } = ys(), A = ve(({ candidateSelectionImages: a, imageData: g, protoMessage: s }) => {
    NQ(ms.PALM, a), t(g, s);
  }, [t]), o = ve(({ processedImage: a }) => {
    const g = {};
    g.code = a.instructionCode, g.isEscalated = a.isEscalated, bs(Te.INSTRUCTION_CHANGED, g), i && iB(Te.DETECTED_PALM_CHANGED, a.detection, i.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [i]), r = {};
  return r.captureMode = n, r.controller = i, r.createProtoMessage = XQ, r.onCapture = A, r.onDetection = o, r.sessionToken = e, r.customEvent = Te, r.fallbackInstruction = de.PALM_NOT_PRESENT, r.instructionCodeMap = de, r.checkToInstructionCodeMap = AC, r.imageCropSettings = DC, BQ(r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const hc = Symbol("Comlink.proxy"), Ad = Symbol("Comlink.endpoint"), ed = Symbol("Comlink.releaseProxy"), Hi = Symbol("Comlink.finalizer"), un = Symbol("Comlink.thrown"), pc = (i) => typeof i == "object" && i !== null || typeof i == "function", td = {
  canHandle: (i) => pc(i) && i[hc],
  serialize(i) {
    const { port1: n, port2: t } = new MessageChannel();
    return yc(i, n), [t, [t]];
  },
  deserialize(i) {
    return i.start(), wc(i);
  }
}, od = {
  canHandle: (i) => pc(i) && un in i,
  serialize({ value: i }) {
    let n;
    return i instanceof Error ? n = {
      isError: !0,
      value: {
        message: i.message,
        name: i.name,
        stack: i.stack
      }
    } : n = { isError: !1, value: i }, [n, []];
  },
  deserialize(i) {
    throw i.isError ? Object.assign(new Error(i.value.message), i.value) : i.value;
  }
}, mc = /* @__PURE__ */ new Map([
  ["proxy", td],
  ["throw", od]
]);
function nd(i, n) {
  for (const t of i)
    if (n === t || t === "*" || t instanceof RegExp && t.test(n))
      return !0;
  return !1;
}
function yc(i, n = globalThis, t = ["*"]) {
  n.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!nd(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: r, path: a } = Object.assign({ path: [] }, A.data), g = (A.data.argumentList || []).map(et);
    let s;
    try {
      const I = a.slice(0, -1).reduce((Q, x) => Q[x], i), c = a.reduce((Q, x) => Q[x], i);
      switch (r) {
        case "GET":
          s = c;
          break;
        case "SET":
          I[a.slice(-1)[0]] = et(A.data.value), s = !0;
          break;
        case "APPLY":
          s = c.apply(I, g);
          break;
        case "CONSTRUCT":
          {
            const Q = new c(...g);
            s = cd(Q);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: Q, port2: x } = new MessageChannel();
            yc(i, x), s = sd(Q, [Q]);
          }
          break;
        case "RELEASE":
          s = void 0;
          break;
        default:
          return;
      }
    } catch (I) {
      s = { value: I, [un]: 0 };
    }
    Promise.resolve(s).catch((I) => ({ value: I, [un]: 0 })).then((I) => {
      const [c, Q] = ei(I);
      n.postMessage(Object.assign(Object.assign({}, c), { id: o }), Q), r === "RELEASE" && (n.removeEventListener("message", e), bc(n), Hi in i && typeof i[Hi] == "function" && i[Hi]());
    }).catch((I) => {
      const [c, Q] = ei({
        value: new TypeError("Unserializable return value"),
        [un]: 0
      });
      n.postMessage(Object.assign(Object.assign({}, c), { id: o }), Q);
    });
  }), n.start && n.start();
}
function id(i) {
  return i.constructor.name === "MessagePort";
}
function bc(i) {
  id(i) && i.close();
}
function wc(i, n) {
  return L0(i, [], n);
}
function Xo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function Dc(i) {
  return Dt(i, {
    type: "RELEASE"
  }).then(() => {
    bc(i);
  });
}
const $n = /* @__PURE__ */ new WeakMap(), Ai = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const n = ($n.get(i) || 0) - 1;
  $n.set(i, n), n === 0 && Dc(i);
});
function rd(i, n) {
  const t = ($n.get(n) || 0) + 1;
  $n.set(n, t), Ai && Ai.register(i, n, i);
}
function ad(i) {
  Ai && Ai.unregister(i);
}
function L0(i, n = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(o, r) {
      if (Xo(e), r === ed)
        return () => {
          ad(A), Dc(i), e = !0;
        };
      if (r === "then") {
        if (n.length === 0)
          return { then: () => A };
        const a = Dt(i, {
          type: "GET",
          path: n.map((g) => g.toString())
        }).then(et);
        return a.then.bind(a);
      }
      return L0(i, [...n, r]);
    },
    set(o, r, a) {
      Xo(e);
      const [g, s] = ei(a);
      return Dt(i, {
        type: "SET",
        path: [...n, r].map((I) => I.toString()),
        value: g
      }, s).then(et);
    },
    apply(o, r, a) {
      Xo(e);
      const g = n[n.length - 1];
      if (g === Ad)
        return Dt(i, {
          type: "ENDPOINT"
        }).then(et);
      if (g === "bind")
        return L0(i, n.slice(0, -1));
      const [s, I] = qa(a);
      return Dt(i, {
        type: "APPLY",
        path: n.map((c) => c.toString()),
        argumentList: s
      }, I).then(et);
    },
    construct(o, r) {
      Xo(e);
      const [a, g] = qa(r);
      return Dt(i, {
        type: "CONSTRUCT",
        path: n.map((s) => s.toString()),
        argumentList: a
      }, g).then(et);
    }
  });
  return rd(A, i), A;
}
function gd(i) {
  return Array.prototype.concat.apply([], i);
}
function qa(i) {
  const n = i.map(ei);
  return [n.map((t) => t[0]), gd(n.map((t) => t[1]))];
}
const kc = /* @__PURE__ */ new WeakMap();
function sd(i, n) {
  return kc.set(i, n), i;
}
function cd(i) {
  return Object.assign(i, { [hc]: !0 });
}
function ei(i) {
  for (const [n, t] of mc)
    if (t.canHandle(i)) {
      const [e, A] = t.serialize(i);
      return [
        {
          type: "HANDLER",
          name: n,
          value: e
        },
        A
      ];
    }
  return [
    {
      type: "RAW",
      value: i
    },
    kc.get(i) || []
  ];
}
function et(i) {
  switch (i.type) {
    case "HANDLER":
      return mc.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Dt(i, n, t) {
  return new Promise((e) => {
    const A = Id();
    i.addEventListener("message", function o(r) {
      !r.data || !r.data.id || r.data.id !== A || (i.removeEventListener("message", o), e(r.data));
    }), i.start && i.start(), i.postMessage(Object.assign({ id: A }, n), t);
  });
}
function Id() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const xd = "SAM v1.44.6 for idcards";
class Cd {
  constructor(n, t, e, A, o) {
    F(this, "isDetectorInitialized", !1);
    F(this, "samVersion", null);
    F(this, "detection");
    this.imageProcessor = n, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = o;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(n) {
    await this.detector.initSamModule(location.href, n);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(n) {
    if (!n || !this.areVersionsCompatible(n))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new U("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = n;
  }
  runDetectionLoop(n) {
    this.detection && this.detection.stop(), this.detection = n, this.detection.run();
  }
  stopDetectionLoop() {
    var n, t;
    (n = this.detection) == null || n.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(n) {
    this.imageProcessor.validationService.thresholds = n;
  }
  areVersionsCompatible(n) {
    return n === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(n, t) {
    return "" + t.replace(Qs, "") + n;
  }
}
class Bd {
  constructor() {
    F(this, "imageProcessor");
    F(this, "assetsDirectoryPath");
    F(this, "instructionEscalation");
    F(this, "compatibleSamVersion");
    F(this, "validationService");
    F(this, "detector");
  }
  setImageProcessor(n) {
    return this.imageProcessor = n, this;
  }
  setAssetsDirectoryPath(n) {
    return this.assetsDirectoryPath = n, this;
  }
  setCompatibleSamVersion(n) {
    return this.compatibleSamVersion = n, this;
  }
  setInstructionEscalation(n) {
    return this.instructionEscalation = n, this;
  }
  setValidationService(n) {
    return this.validationService = n, this;
  }
  setDetector(n) {
    return this.detector = n, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new U("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new U("AssetsDirectoryPath is required");
    if (!this.detector) throw new U("Detector is required");
    if (!this.compatibleSamVersion) throw new U("CompatibleSamVersion is required");
    if (!this.validationService) throw new U("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (-5667 + -39 * -167 + -846), this.assetsDirectoryPath = void (-3802 + 1 * 3802), this.instructionEscalation = void (1 * -143 + 3642 + 1 * -3499), this.compatibleSamVersion = void (-8470 + 4 * 2183 + -262), this.detector = void (3013 + 23 * -131), this.validationService = void (-1281 + -27 * -334 + 3 * -2579), this;
  }
}
class Qd {
  constructor() {
    F(this, "detectionRecord", []);
    F(this, "imagesWithTimestampForDuplicateDetection", new us(bC));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: n, timestamp: t }) {
    const e = n.length / SC, A = e / (37 * 58 + -2775 + 631), o = n.length / (-1563 * 2 + -8657 * -1 + -5529), r = await oQ(n.slice(o - A, o + A)), a = {};
    a.imageHash = r, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(n) {
    return { data: JC(n), resolution: { width: n.width, height: n.height } };
  }
  async processDetectedObject({ detectedObject: n, image: t, imageData: e, timestamp: A }) {
    const o = FC(n), r = this.validationService.validateDetectedObject(o, t);
    if (r.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = A, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(n), { detection: o, validationResult: r.result, isValid: r.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class dd {
  constructor() {
    F(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new U("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Gc extends Cd {
  constructor(t, e, A, o, r, a) {
    super(A, o, r, e, a);
    F(this, "detector");
    this.detector = t;
  }
  async init() {
    await super.init();
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], bs(Te.INSTRUCTION_CHANGED, t, xC);
  }
}
class Ed extends Bd {
  build() {
    return this.validateDependencies(), new Gc(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const ld = "/dot-assets/palm/dot-SgTgUGr6.js";
class ud extends Qd {
  constructor(t, e) {
    super();
    F(this, "className", "PalmImageProcessor");
    F(this, "detector");
    F(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = vn(t), A = hs(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t);
    let o = await this.detector.detect(A.data, A.resolution);
    o = jC(o, vn(t)), o = qC(o, t);
    const r = {};
    return r.image = t, r.timestamp = e, r.imageData = A.data, r.detectedObject = o, this.processDetectedObject(r);
  }
}
var Nt, it, rt;
class fd {
  constructor(n) {
    z(this, Nt);
    z(this, it);
    z(this, rt);
    _(this, Nt, n), _(this, it, /* @__PURE__ */ new Map());
  }
  validate() {
    v(this, Nt).forEach((n) => {
      v(this, it).set(n.name, n.evaluate());
    }), _(this, rt, void 0);
  }
  isValid() {
    return v(this, rt) === void (313 * 3 + -1 * 3957 + 3018) && _(this, rt, Array.from(v(this, it).values()).every((n) => n)), v(this, rt);
  }
  get result() {
    return v(this, it);
  }
  get validators() {
    return v(this, Nt);
  }
}
Nt = new WeakMap(), it = new WeakMap(), rt = new WeakMap();
var bo, at;
class lt {
  constructor(n, t) {
    z(this, bo);
    z(this, at);
    _(this, bo, n), _(this, at, t);
  }
  get threshold() {
    return v(this, at);
  }
  get name() {
    return v(this, bo);
  }
  isValueBelowThreshold(n) {
    return n < v(this, at);
  }
  isValueAboveThreshold(n) {
    return n > v(this, at);
  }
}
bo = new WeakMap(), at = new WeakMap();
const hd = "isNotDim";
var wo;
class pd extends lt {
  constructor(t, e) {
    super(hd, t);
    z(this, wo);
    _(this, wo, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(v(this, wo));
  }
}
wo = new WeakMap();
const md = "isNotSmall";
var Do;
class yd extends lt {
  constructor(t, e) {
    super(md, t);
    z(this, Do);
    _(this, Do, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(v(this, Do));
  }
}
Do = new WeakMap();
const bd = "isNotBright";
var ko;
class wd extends lt {
  constructor(t, e) {
    super(bd, t);
    z(this, ko);
    _(this, ko, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(v(this, ko));
  }
}
ko = new WeakMap();
const Dd = "isNotLarge";
var Go;
class kd extends lt {
  constructor(t, e) {
    super(Dd, t);
    z(this, Go);
    _(this, Go, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(v(this, Go));
  }
}
Go = new WeakMap();
const Gd = "isPresent";
var So;
class Sd extends lt {
  constructor(t, e) {
    super(Gd, t);
    z(this, So);
    _(this, So, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(v(this, So));
  }
}
So = new WeakMap();
const Nd = "isSharp";
var No;
class Fd extends lt {
  constructor(t, e) {
    super(Nd, t);
    z(this, No);
    _(this, No, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(v(this, No));
  }
}
No = new WeakMap();
const vd = "isNotOutOfBounds";
var Fo, Ft;
class Rd extends lt {
  constructor(t, e, A) {
    super(vd, t);
    z(this, Fo);
    z(this, Ft);
    _(this, Fo, e), _(this, Ft, A);
  }
  evaluate() {
    const t = ps(v(this, Ft), this.threshold, vn(v(this, Ft))), { bottomLeft: e, bottomRight: A, topLeft: o, topRight: r } = v(this, Fo), a = {};
    return a.topLeft = o, a.topRight = r, a.bottomLeft = e, a.bottomRight = A, KC(a, t);
  }
}
Fo = new WeakMap(), Ft = new WeakMap();
class Md {
  static getPalmValidationInstance(n, t, e) {
    return new fd([new Sd(n.confidenceThreshold, t.confidence), new Rd(n.outOfBoundsThreshold, t, e), new yd(n.sizeIntervalThreshold.min, t.smallestEdge), new Fd(n.sharpnessThreshold, t.sharpness), new pd(n.brightnessLowThreshold, t.brightness), new wd(n.brightnessHighThreshold, t.brightness), new kd(n.sizeIntervalThreshold.max, t.smallestEdge)]);
  }
}
class Wd extends dd {
  constructor() {
    super(...arguments);
    F(this, "className", "PalmValidationService");
  }
  validateDetectedObject(t, e) {
    const A = Md.getPalmValidationInstance(this.getThresholds(), t, e);
    return A.validate(), A;
  }
}
function Ld() {
  const { handleError: i } = je(), { assetsDirectoryPath: n } = ys(), { thresholds: t } = sc(), [e, A] = PA();
  aA(() => {
    async function r() {
      const a = Gc.getWorkerPath(ld, n), g = {};
      g.type = "module";
      const s = new Worker(new URL(a, import.meta.url), g), I = wc(s), c = await new I(), Q = new Wd(), x = new ud(c, Q), d = new Ed().setDetector(c).setValidationService(Q).setImageProcessor(x).setAssetsDirectoryPath(n).setCompatibleSamVersion(xd).build();
      try {
        await d.init(), A(d);
      } catch (E) {
        if (E instanceof Error) {
          i(U.fromError(E));
          return;
        }
      }
    }
    r();
  }, [i, n]), aA(() => {
    e && e.setThresholds(t);
  }, [e, t]);
  const o = {};
  return o.controller = e, o;
}
function Od() {
  const { isCameraReady: i } = je(), { sunfish: n } = Wo(), { controller: t } = Ld(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: o, videoRef: r } = $Q({ controller: t });
  return /* @__PURE__ */ w(SQ, { cameraResolution: e, detectionDetails: A, shouldMirror: o, children: /* @__PURE__ */ w(
    Zx,
    {
      ref: r,
      $isImageMirror: o,
      $isVisible: n && i,
      autoPlay: !0,
      id: CC,
      muted: !0,
      playsInline: !0
    }
  ) });
}
function Jd({ children: i }) {
  const n = re(null);
  return cB(n, Te.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ w(qx, { ref: n, children: i });
}
function Ud(i) {
  const { handleAppStateChange: n, setIsCameraReady: t } = je();
  return EQ({
    onBlur: () => {
      t(!1), n(mA.LOADING);
    },
    onFocus: () => {
      t(!0), n(mA.RUNNING);
    }
  }), /* @__PURE__ */ w(Jd, { children: /* @__PURE__ */ w(eB, { cameraOptions: i, children: /* @__PURE__ */ w(mQ, { cameraOptionsThresholds: i.thresholds, children: /* @__PURE__ */ w(Od, {}) }) }) });
}
function Yd({ children: i, ...n }) {
  const t = n.cameraFacing ?? li() ? wn.REAR : wn.FRONT;
  return /* @__PURE__ */ w(GB, { cameraFacing: t, children: i });
}
function Pd({ initAppState: i, onError: n }) {
  const [t, e] = PA(i), [A, o] = PA(), [r, a] = PA(!1), g = re(n);
  aA(() => {
    g.current = n;
  }, [n]);
  const s = {};
  return s.appState = t, s.setAppState = e, s.error = A, s.setError = o, s.isCameraReady = r, s.setIsCameraReady = a, s.onErrorRef = g, s;
}
function Td({ onError: i }) {
  const n = {};
  n.initAppState = mA.LOADING, n.onError = i;
  const { appState: t, error: e, isCameraReady: A, onErrorRef: o, setAppState: r, setError: a, setIsCameraReady: g } = Pd(n), s = RB(t), I = ve((x) => {
    const d = {};
    d.appState = mA.ERROR, d.error = x, Ea(Te.STATE_CHANGED, d), g(!1), o.current(x), a(x), r(mA.ERROR);
  }, [g, o, a, r]), c = ve((x) => {
    const d = {};
    d.appState = x, Ea(Te.STATE_CHANGED, d), r(x);
  }, [r]), Q = {};
  return Q.appState = t, Q.freemiumOverlayState = s, Q.isCameraReady = A, Q.setIsCameraReady = g, Q.handleAppStateChange = c, Q.handleError = I, Q.error = e, Q;
}
var hr = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(hr || {});
class Hd {
  constructor() {
    F(this, "appKey", "");
    F(this, "deviceId", "");
  }
  async countlyFetch(n) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, o = "https://innovatrics.count.ly/i?", r = {};
    r.app_key = this.appKey, r.device_id = this.deviceId;
    const a = Vo(r);
    try {
      await fetch("" + o + a + "&" + n, A);
    } catch (g) {
      console.error("Countly Error", g);
    }
  }
  async init(n, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = n;
    const e = { _app_version: ds() }, A = { organization: Es(window.location.href) }, o = Vo({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const n = {};
    n.end_session = "1";
    const t = Vo(n);
    await this.countlyFetch(t);
  }
  async sendEvent(n, t, e) {
    const A = {};
    A.key = n, A.count = 1, A.dur = e, A.segmentation = t;
    const o = [A], r = Vo({ events: JSON.stringify(o) });
    await this.countlyFetch(r);
  }
  async sendAutoCaptureEvent(n, t) {
    await this.sendEvent(hr.AUTO_CAPTURE, n, t);
  }
}
const Xt = new Hd();
class Kd {
  constructor() {
    F(this, "countly", Xt);
  }
  createSegmentation(n) {
    return { appVersion: ds(), ...n };
  }
  init(n) {
    if (vC()) return;
    const t = FB();
    Xt.init(t, n);
  }
  endSession() {
    Xt.endSession();
  }
  walleye(n, t) {
    const e = {};
    e.nocturne = n, e.customer = t;
    const A = this.createSegmentation(e);
    Xt.sendAutoCaptureEvent(A);
  }
  trackEscalated(n) {
    const t = {};
    t.instructionCode = n;
    const e = this.createSegmentation(t);
    Xt.sendEvent(hr.ESCALATION_TRIGGER, e);
  }
}
class jd extends Kd {
  trackCaptureProcess({ averageFps: n, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: o, facingMode: r, imageResolution: a, instructionSet: g, isSystemStable: s, performanceCheckup: I }) {
    if (!A) return;
    const c = vB(e), Q = {};
    Q.facingMode = r, Q.confidence = A.confidence, Q.camera = o, Q.imageResolution = a.width + "x" + a.height, Q.averageFps = n, Q.captureTime = c, Q.instructionSet = g, Q.optCheck = t, Q.isSystemStable = s, Q.performanceCheckup = I;
    const x = this.createSegmentation(Q);
    this.countly.sendAutoCaptureEvent(x, c);
  }
}
const qd = new jd();
let T;
const Se = new Array(-6037 * 1 + 1624 + 19 * 239).fill(void 0);
Se.push(void 0, null, !0, !1);
function O0(i) {
  return Se[i];
}
let ue = 4 * 1322 + -9 * 738 + 1354, ro = null;
function fn() {
  return (ro === null || ro.byteLength === -47 * 10 + 8320 + -7850) && (ro = new Uint8Array(T.memory.buffer)), ro;
}
const hn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Zd = typeof hn.encodeInto == "function" ? function(i, n) {
  return hn.encodeInto(i, n);
} : function(i, n) {
  const t = hn.encode(i);
  n.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function po(i, n, t) {
  if (t === void 0) {
    const a = hn.encode(i), g = n(a.length, 1) >>> 341 * -10 + 383 + 3 * 1009;
    return fn().subarray(g, g + a.length).set(a), ue = a.length, g;
  }
  let e = i.length, A = n(e, 6080 + 177 * -3 + -2774 * 2) >>> -7599 + 2533 * 3;
  const o = fn();
  let r = -9655 + 9 * -171 + 11194;
  for (; r < e; r++) {
    const a = i.charCodeAt(r);
    if (a > -1151 * 6 + -1243 + 8276) break;
    o[A + r] = a;
  }
  if (r !== e) {
    r !== -1 * -1743 + -1290 + -453 && (i = i.slice(r)), A = t(A, e, e = r + i.length * (194 * -46 + 23 * -337 + 2 * 8339), 9222 + 1 * 7879 + 15 * -1140) >>> 23 * -289 + -1 * -3187 + -865 * -4;
    const a = fn().subarray(A + r, A + e), g = Zd(i, a);
    r += g.written, A = t(A, e, r, 1) >>> -3038 + 11 * -893 + 12861;
  }
  return ue = r, A;
}
function Sc(i) {
  return i == null;
}
let ao = null;
function Ee() {
  return (ao === null || ao.byteLength === 153 * 37 + -9460 + 3799) && (ao = new Int32Array(T.memory.buffer)), ao;
}
let Bo = Se.length;
function Vd(i) {
  i < -3026 * -2 + 4503 * 2 + 17 * -878 || (Se[i] = Bo, Bo = i);
}
function Nc(i) {
  const n = O0(i);
  return Vd(i), n;
}
const J0 = {};
J0.ignoreBOM = !0, J0.fatal = !0;
const Fc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", J0) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Fc.decode();
function ti(i, n) {
  return i = i >>> -13571 + -41 * -331, Fc.decode(fn().subarray(i, i + n));
}
function U0(i) {
  Bo === Se.length && Se.push(Se.length + 1);
  const n = Bo;
  return Bo = Se[n], Se[n] = i, n;
}
let go = null;
function vc() {
  return (go === null || go.byteLength === -1156 * -4 + 8874 + -13498) && (go = new Uint32Array(T.memory.buffer)), go;
}
function Za(i, n) {
  const t = n(i.length * 4, 4) >>> 0, e = vc();
  for (let A = 2838 + 1 * -5422 + 2584; A < i.length; A++)
    e[t / (-257 * -36 + 3721 * 2 + -16690) + A] = U0(i[A]);
  return ue = i.length, t;
}
function Va(i, n) {
  i = i >>> 0;
  const t = vc(), e = t.subarray(i / 4, i / (139 * 3 + 8027 + -8440) + n), A = [];
  for (let o = 1786 + -1786 * 1; o < e.length; o++)
    A.push(Nc(e[o]));
  return A;
}
function _d(i, n) {
  const t = po(i, T.__wbindgen_malloc, T.__wbindgen_realloc), e = ue, A = po(n, T.__wbindgen_malloc, T.__wbindgen_realloc), o = ue, r = T.is_mobile_supported(t, e, A, o);
  return pr.__wrap(r);
}
const Y0 = {};
Y0.register = () => {
}, Y0.unregister = () => {
};
const _a = typeof FinalizationRegistry > "u" ? Y0 : new FinalizationRegistry((i) => T.__wbg_licensevalidationresult_free(i >>> 3951 + 67 * -122 + 41 * 103));
class pr {
  static __wrap(n) {
    n = n >>> -9090 + 9 * 73 + -8433 * -1;
    const t = Object.create(pr.prototype);
    return t.__wbg_ptr = n, _a.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const n = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _a.unregister(this), n;
  }
  free() {
    const n = this.__destroy_into_raw();
    T.__wbg_licensevalidationresult_free(n);
  }
  constructor(n, t, e, A, o) {
    var r = Sc(t) ? 0 : po(t, T.__wbindgen_malloc, T.__wbindgen_realloc), a = ue;
    const g = Za(e, T.__wbindgen_malloc), s = ue, I = Za(A, T.__wbindgen_malloc), c = ue, Q = po(o, T.__wbindgen_malloc, T.__wbindgen_realloc), x = ue, d = T.licensevalidationresult_new(n, r, a, g, s, I, c, Q, x);
    return this.__wbg_ptr = d >>> 4206 + -20 * 373 + -1627 * -2, this;
  }
  get is_valid() {
    return T.licensevalidationresult_is_valid(this.__wbg_ptr) !== 1 * -7942 + -3172 * 2 + -7143 * -2;
  }
  get features_json() {
    try {
      const e = T.__wbindgen_add_to_stack_pointer(-16);
      T.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var n = Ee()[e / (-17 * -53 + -1 * 5740 + -1 * -4843) + 0], t = Ee()[e / (-7 * 1351 + -1602 + -1 * -11063) + (-19 * 53 + 633 * -2 + 2274)];
      let A;
      return n !== 277 * 23 + -1 * -617 + -6988 && (A = ti(n, t).slice(), T.__wbindgen_free(n, t * (-5664 + 1133 * 5), -3309 + 41 * -223 + 12453)), A;
    } finally {
      T.__wbindgen_add_to_stack_pointer(-2 * -2579 + -6297 + 7 * 165);
    }
  }
  get errors() {
    try {
      const A = T.__wbindgen_add_to_stack_pointer(-16);
      T.licensevalidationresult_errors(A, this.__wbg_ptr);
      var n = Ee()[A / (-5 * 1955 + -171 + 9950) + (-9277 + -4907 * 1 + 14184)], t = Ee()[A / (-9831 * 1 + 1127 * 1 + 8708) + (-15234 + 5 * 3047)], e = Va(n, t).slice();
      return T.__wbindgen_free(n, t * (-628 * -14 + 57 * -152 + 1 * -124), 27 * -173 + -6837 + 11512), e;
    } finally {
      T.__wbindgen_add_to_stack_pointer(-277 * 17 + -2 * 2681 + -1 * -10087);
    }
  }
  get warnings() {
    try {
      const A = T.__wbindgen_add_to_stack_pointer(-16);
      T.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var n = Ee()[A / (-932 * -8 + -1 * -7706 + 53 * -286) + (7514 + -236 * 11 + -2459 * 2)], t = Ee()[A / (8964 + 4091 * -1 + 1623 * -3) + (-1 * -5623 + -2778 + -2844)], e = Va(n, t).slice();
      return T.__wbindgen_free(n, t * (-2054 * 2 + 9571 + -5459), -461 + 1 * 7058 + 347 * -19), e;
    } finally {
      T.__wbindgen_add_to_stack_pointer(9244 + -8209 * 1 + -1019);
    }
  }
  get customer() {
    let n, t;
    try {
      const o = T.__wbindgen_add_to_stack_pointer(-16);
      T.licensevalidationresult_customer(o, this.__wbg_ptr);
      var e = Ee()[o / (187 * -5 + -2492 + 3431) + (469 + 349 * -14 + 4417)], A = Ee()[o / (-4392 + 1 * 3055 + 1341) + (-1279 * 3 + -16 * 67 + 4910)];
      return n = e, t = A, ti(e, A);
    } finally {
      T.__wbindgen_add_to_stack_pointer(6495 + 1889 * -4 + 3 * 359), T.__wbindgen_free(n, t, -2581 + -8063 * 1 + 10645);
    }
  }
}
async function zd(i, n) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, n);
    } catch (e) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, n);
  } else {
    const t = await WebAssembly.instantiate(i, n);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = i, e;
    } else return t;
  }
}
function Xd() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(n, t) {
    const e = O0(t), A = typeof e == "string" ? e : void 0;
    var o = Sc(A) ? 349 * -15 + 400 + -967 * -5 : po(A, T.__wbindgen_malloc, T.__wbindgen_realloc), r = ue;
    Ee()[n / (-1420 + 3863 * 1 + 3 * -813) + (-7975 + 8 * 997)] = r, Ee()[n / 4 + (1169 * 6 + 1379 * -1 + -5635)] = o;
  }, i.wbg.__wbindgen_object_drop_ref = function(n) {
    Nc(n);
  }, i.wbg.__wbindgen_string_new = function(n, t) {
    const e = ti(n, t);
    return U0(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return U0(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(n) {
    return O0(n).getTime();
  }, i.wbg.__wbindgen_throw = function(n, t) {
    throw new Error(ti(n, t));
  }, i;
}
function $d(i, n) {
  return T = i.exports, Rc.__wbindgen_wasm_module = n, ao = null, go = null, ro = null, T;
}
async function Rc(i) {
  if (T !== void 0) return T;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const n = Xd();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await zd(await i, n);
  return $d(t, e);
}
(function(i, n) {
  function t(a, g, s, I, c) {
    return RA(g - 411, a);
  }
  function e(a, g, s, I, c) {
    return RA(a - 710, s);
  }
  function A(a, g, s, I, c) {
    return RA(g - 823, c);
  }
  function o(a, g, s, I, c) {
    return RA(g - 388, a);
  }
  const r = i();
  for (; ; )
    try {
      if (parseInt(t("@OI5", 719, 695, 720, 704)) / 1 + -parseInt(t("7hO1", 740, 723, 731, 754)) / 2 + parseInt(A(1154, 1174, 1188, 1154, "[sOE")) / 3 * (parseInt(A(1196, 1179, 1183, 1179, "rk%D")) / 4) + parseInt(e(1053, 1072, "EgJf", 1057, 1042)) / 5 + -parseInt(e(1026, 1016, "kAax", 1042, 1045)) / 6 + parseInt(t("aEwJ", 751, 765, 762, 741)) / 7 * (-parseInt(t("8iPI", 748, 727, 729, 771)) / 8) + parseInt(o("S0I$", 721, 730, 700, 724)) / 9 * (-parseInt(A(1192, 1181, 1177, 1186, "A[cM")) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, -150526 + -1717 * -182);
function za(i, n, t, e, A) {
  return RA(i - 694, t);
}
function RA(i, n) {
  const t = oi();
  return RA = function(e, A) {
    e = e - (8913 * 1 + 3845 + -12450);
    let o = t[e];
    if (RA.XgXQve === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      RA.yEmUZs = I, i = arguments, RA.XgXQve = !0;
    }
    const a = t[-4289 * 2 + -8151 + 16729], g = e + a, s = i[g];
    return s ? o = s : (RA.kePQRv === void 0 && (RA.kePQRv = !0), o = RA.yEmUZs(o, A), i[g] = o), o;
  }, RA(i, n);
}
function $o(i, n, t, e, A) {
  return RA(n - 996, t);
}
function ht(i, n, t, e, A) {
  return RA(e - 967, n);
}
function Xa(i, n, t, e, A) {
  return RA(n - 612, e);
}
function oi() {
  const i = ["W7FdK8klnCoh", "cSkKFmkAl0L6iW", "AKFcLeDH", "WPm5kCoYW7xcUIX8oq", "WPm7kmkQWQ/dQa1KhL0cW4W", "W5bPAwT5", "WPFdGWTodG", "xK1SW7W8", "WPVdIumA", "W6BcO8karCoE", "atlcSGan", "AmozWO/dLhpdRqvVW4jPW5PB", "nWeMbeCkWP17", "W4hcQutdPJ0", "W4pcSmoHz8oGqLRdISkMxCkD", "WR7cRrmOW5G", "nL1femoF", "nrRdMXqXuvX+F8kTmW", "BfWRcvy", "aX0WW7KQz2NcRx0", "vmo8DSkwiq", "uI0uh8k7WRbMDmkdcCk8WQO", "WR/dR8o1WPCl", "WQ1AlCoeqCo8sCo0gmo6WRq", "wYJcTH0u", "WO7dRSoZqxy", "gJBcOWCy", "iCoNW5iMW7iTW7hcRmogqSkDeW", "W47dHhtdGmot", "q8omsmkuW5niDsOhWOxdPMi", "W4K/W559eCk4W4SN", "WP/dRKqhkG", "WO/cPCkFW6BcSYGDCSk3vrhcNq", "vq4tWPxcIa", "WOTQW5r0ka", "ySk1WPb/WO0", "WRWhCSkyaG", "W7xdTYaXEW", "W4BdRehdUJS", "hSkmbfTXfMxcLq", "w0v6W7aI", "W7tdSsGXpW", "CGWNBLRcICoettDsba", "WRHNtmox", "W6/dUse5eG", "W7lcU8kOuhm", "WOVcP8kyW6RcTLOlEmkWFGK", "w8oCb19s", "WPNcUrFcUwBdU8oKzmkTW50J", "WQfVsSoquW", "n8oVf8osamkkyMJdIZPI", "kxFcMsnOhHDdWO8BWOa"];
  return oi = function() {
    return i;
  }, oi();
}
var rg;
class AE {
  constructor() {
    F(this, rg, !1);
  }
  async [(rg = ht(1263, "LShW", 1314, 1289) + ht(1318, "[sOE", 1302, 1324) + za(1022, 1014, "XUX2"), Xa(945, 959, 946, "Xhr&"))](n) {
    function t(a, g, s, I, c) {
      return ht(a - 43, s, s - 88, a - -479);
    }
    function e(a, g, s, I, c) {
      return za(I - -789, g - 181, a);
    }
    function A(a, g, s, I, c) {
      return $o(a - 294, I - -809, c);
    }
    function o(a, g, s, I, c) {
      return Xa(a - 192, g - -407, s - 95, I);
    }
    function r(a, g, s, I, c) {
      return ht(a - 100, a, s - 461, s - -1704);
    }
    try {
      const a = n + (e("[zvm", 192, 196, 216, 232) + "/") + xa;
      await Rc(a), this[o(531, 539, 539, "zb)I", 521) + e("8O^y", 228, 248, 241, 262) + e("rk%D", 223, 227, 246, 263)] = !0;
    } catch {
      this[o(522, 526, 533, "orW4") + r("[zvm", -417, -424) + A(522, 538, 509, 514, "A[cM")] = !1, console[o(513, 535, 539, "8O^y")](xa + (e("KnN9", 215, 214, 228) + t(808, 788, "pzUG") + t(820, 822, "SodI") + o(560, 559, 547, "b%ko") + A(534, 536, 536, 532, "Xhr&") + e("54]j", 229, 240, 230) + o(544, 549, 569, "P6Tn") + o(560, 557, 582, "54]j") + o(534, 554, 540, "[zvm") + r("luUd", -369, -382) + t(803, 777, "[eiI") + r("XUX2", -424, -413) + e("8AU9", 231, 258, 244) + o(544, 553, 540, "QF$F") + "n."));
    }
  }
  [ht(1264, "4E^y", 1298, 1276) + $o(1310, 1314, "Xhr&") + ht(1337, "A[cM", 1319, 1313) + "ed"]() {
    function n(e, A, o, r, a) {
      return $o(e - 45, r - -744, a);
    }
    function t(e, A, o, r, a) {
      return $o(e - 77, e - -1372, o);
    }
    return this[t(-45, -46, "XUX2") + n(568, 550, 543, 564, "BedL") + n(630, 615, 632, 611, "aEwJ")];
  }
}
class Ki extends Error {
  constructor() {
    super(...arguments);
    F(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function nA(i, n) {
  var t = ni();
  return nA = function(e, A) {
    e = e - (-3095 + 809 * 5 + 231 * -3);
    var o = t[e];
    if (nA.OjSKIz === void 0) {
      var r = function(c) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", x = "", d = "", E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (var b = 0, k = x.length; b < k; b++)
          d += "%" + ("00" + x.charCodeAt(b).toString(16)).slice(-2);
        return decodeURIComponent(d);
      }, a = function(c, Q) {
        var x = [], d = 0, E, f = "";
        c = r(c);
        var C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (var h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      nA.EdkLaS = a, i = arguments, nA.OjSKIz = !0;
    }
    var g = t[-5939 + 102 * -9 + 6857], s = e + g, I = i[s];
    return I ? o = I : (nA.ddwPvH === void 0 && (nA.ddwPvH = !0), o = nA.EdkLaS(o, A), i[s] = o), o;
  }, nA(i, n);
}
function $a(i, n, t, e, A) {
  return nA(A - 544, i);
}
function $t(i, n, t, e, A) {
  return nA(i - 887, A);
}
(function(i, n) {
  var t = i();
  function e(s, I, c, Q, x) {
    return nA(I - -83, x);
  }
  function A(s, I, c, Q, x) {
    return nA(s - -157, x);
  }
  function o(s, I, c, Q, x) {
    return nA(c - -873, x);
  }
  function r(s, I, c, Q, x) {
    return nA(x - -629, c);
  }
  function a(s, I, c, Q, x) {
    return nA(x - 882, Q);
  }
  for (; ; )
    try {
      var g = -parseInt(e(241, 220, 225, 209, "dxJm")) / 1 + -parseInt(e(180, 184, 164, 210, "DAjB")) / 2 * (-parseInt(A(131, 159, 122, 104, "0MXY")) / 3) + -parseInt(e(222, 215, 186, 196, "3U2[")) / 4 + -parseInt(o(-584, -565, -567, -593, "5zIq")) / 5 + -parseInt(r(-285, -348, "!f!v", -329, -317)) / 6 * (-parseInt(o(-551, -551, -568, -594, "9YjP")) / 7) + parseInt(o(-559, -582, -589, -600, "5zIq")) / 8 * (parseInt(r(-352, -362, "6LJZ", -329, -350)) / 9) + parseInt(a(1198, 1195, 1195, "(vbS", 1196)) / 10 * (parseInt(r(-328, -312, "$Vfn", -307, -310)) / 11);
      if (g === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ni, -136 * 9370 + 122297 * -4 + 2696970);
function Ao(i, n, t, e, A) {
  return nA(i - -783, n);
}
function ni() {
  var i = ["jMOIWOrlWRD0C8o4aL7cKa", "W53dJmoMm8kL", "aCoOa8oyWQS", "WOCjw8kjxW", "W6O3ya3dLmojWRhcVwRdVa", "s8kyw8o0fmkRA8kAfmoyWOVdRaG", "vt4X", "W6ZcGSkEbqynWPSuj8oN", "WP0+BCkmxW", "CJy/", "WRxcTmom", "CvHL", "WOtcM0nJWQu", "W4z3fXOVa8oopa", "W5XRa8kRWQpdU0ddVSkCjrJdHq", "fHy/zG0", "W6ZcHmkEbYqfWQ4gm8oe", "wtVdVhJdOCk1W6yxyshdHL3cOa", "o15K", "BCoHW6VdQCk4", "csXEWOu", "WPhcUxLrW7a8vCoGWPicWQy", "WP86rCoOW78", "W43dQJW", "BmoVFCoiW4W", "lwn/pw3dTanTw8kb", "Esm+yvy", "WRmmWP7cLCkQ", "BJq/uu4", "BZaUyKe", "f8ksfSkwdG", "mf53W4/cTW", "WQ9jodhdGW", "WPWKdr8G", "WPiGgaG9", "xSkOrCkcW7RdOrC/W4j5EmkiWR4", "udRcPalcUSoUWR0v", "ASoRWPHxkq", "fu7cGNW4", "xN12WPFdNW", "zqSIWOVdUXbrrZBcTmkVCG", "WObaaLpdTa", "e8o8CGHRDHNdNmkrbmkooa", "WPFcUNDqW7jzd8ouWRKDWQHXla", "FmoXW6VdGSk9", "q2DpWPJdOq", "W7BdPCkmx8orc8kDWR3cICkB", "W5ddMXOOWR0laJz3pq", "CdnVW6SB", "W7iFW7FcUGBcQ8k2W6u", "W4pcP8olWPZcRG", "zH0tiSoPWQBdOCkUW5NdMfaZWOq", "WQvwmHBdGG", "WQLlodddHa", "nvVcOwmZ", "sJG7", "W51PwCo9W73cNKldTG", "hXK4zay", "WRJdGSoFwt0", "jwOSWOrkW5fDx8oNgvG", "p1vXW7/cQW", "WOCQfW", "n0PcEG"];
  return ni = function() {
    return i;
  }, ni();
}
function pt(i, n, t, e, A) {
  return nA(t - 579, n);
}
function An(i, n, t, e, A) {
  return nA(A - 467, t);
}
var vt, vo;
class Ag {
  constructor(n) {
    z(this, vt);
    z(this, vo);
    function t(a, g, s, I, c) {
      return nA(I - -121, c);
    }
    function e(a, g, s, I, c) {
      return nA(s - 816, c);
    }
    function A(a, g, s, I, c) {
      return nA(s - 329, c);
    }
    this[t(152, 161, 170, 180, "y!)n") + t(152, 207, 186, 175, "XM&y")] = n;
    function o(a, g, s, I, c) {
      return nA(g - 213, s);
    }
    function r(a, g, s, I, c) {
      return nA(c - 784, s);
    }
    try {
      _(this, vt, n[o(484, 503, "zYUo", 515, 531) + r(1051, 1066, "0MXY", 1070, 1075) + t(170, 147, 133, 148, "W)[q")] && JSON[o(469, 498, "$Vfn", 487, 476)](n[A(605, 605, 626, 622, "XM&y") + t(161, 206, 196, 186, "]QRb") + o(454, 474, "XM&y", 493, 458)])), _(this, vo, n[e(1071, 1078, 1098, 1101, "]QRb") + e(1073, 1113, 1097, 1087, "dxJm")]);
    } catch (a) {
      console[e(1049, 1094, 1078, 1085, "(vbS")](a);
    }
  }
  get [Ao(-481, "ZQvZ") + "id"]() {
    function n(A, o, r, a, g) {
      return Ao(A - 1407, o);
    }
    function t(A, o, r, a, g) {
      return Ao(o - 1728, a);
    }
    function e(A, o, r, a, g) {
      return Ao(g - 358, r);
    }
    return this[n(899, "F5S2") + e(-134, -172, "A0qz", -119, -147)][n(890, "b]cU") + t(1290, 1263, 1288, "W)[q")];
  }
  get [$t(1176, 1207, 1177, 1200, "0MXY") + "s"]() {
    function n(t, e, A, o, r) {
      return $t(e - -1115, e - 374, A - 218, o - 54, t);
    }
    return this[n("a9OB", 76, 72, 82) + n("XM&y", 68, 98, 86)][n("6LJZ", 30, 4, 5) + "s"];
  }
  get [Ao(-519, "$2Lu") + $t(1161, 1134, 1168, 1133, ")#oH")]() {
    function n(A, o, r, a, g) {
      return pt(A - 151, r, g - 326);
    }
    function t(A, o, r, a, g) {
      return $t(a - -907, o - 281, r - 199, a - 239, r);
    }
    function e(A, o, r, a, g) {
      return $a(a, o - 255, r - 432, a - 26, r - -1524);
    }
    return this[e(-663, -709, -685, "P6&l") + t(326, 312, "vjuJ", 297)][n(1237, 1191, "i$M&", 1234, 1218) + t(284, 249, "0MXY", 252)];
  }
  get [pt(896, "hafc", 890) + "b"]() {
    return v(this, vt);
  }
  get [pt(902, "VtZG", 879) + $t(1173, 1146, 1202, 1186, "5zIq")]() {
    return v(this, vo);
  }
  get [An(752, 756, "@7S4", 789, 760) + An(755, 742, "3U2[", 731, 732) + An(721, 720, "b]cU", 749, 738) + An(722, 735, "6Og0", 740, 750)]() {
    var o, r;
    function n(a, g, s, I, c) {
      return $a(g, g - 257, s - 291, I - 357, a - -112);
    }
    function t(a, g, s, I, c) {
      return pt(a - 371, g, I - 332);
    }
    function e(a, g, s, I, c) {
      return pt(a - 324, I, c - -455);
    }
    function A(a, g, s, I, c) {
      return pt(a - 337, g, s - -1364);
    }
    return !!((r = (o = v(this, vt)) == null ? void 0 : o[n(726, "dxJm", 694, 752) + n(705, "h8Q8", 674, 693)]) != null && r[e(425, 404, 432, "iK^K", 411) + e(412, 454, 431, "P6&l", 439) + e(380, 365, 369, "A0qz", 381) + n(740, "ZQvZ", 739, 746) + n(748, "P6&l", 758, 736) + t(1190, "dxJm", 1157, 1171) + A(-515, "0MXY", -493) + "d"]);
  }
}
vt = new WeakMap(), vo = new WeakMap();
(function(i, n) {
  function t(a, g, s, I, c) {
    return EA(s - -280, a);
  }
  const e = i();
  function A(a, g, s, I, c) {
    return EA(c - 319, g);
  }
  function o(a, g, s, I, c) {
    return EA(a - 263, g);
  }
  function r(a, g, s, I, c) {
    return EA(g - -634, c);
  }
  for (; ; )
    try {
      if (parseInt(r(-133, -112, -165, -150, "nN3w")) / 1 + -parseInt(r(-218, -232, -301, -112, "z091")) / 2 + parseInt(r(-234, -242, -339, -159, "fhD5")) / 3 + -parseInt(A(736, "r9R2", 713, 585, 680)) / 4 + -parseInt(o(690, "FV]N", 768, 716, 763)) / 5 * (-parseInt(A(911, "zR2u", 824, 939, 840)) / 6) + -parseInt(r(-211, -243, -304, -192, "#$EP")) / 7 + -parseInt(t("5Ew@", 210, 248, 232, 222)) / 8 * (-parseInt(A(931, "BL(K", 730, 888, 837)) / 9) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ii, 665095 + 11 * -42269);
function XA(i, n, t, e, A) {
  return EA(i - 165, n);
}
function $A(i, n, t, e, A) {
  return EA(e - 7, i);
}
function xA(i, n, t, e, A) {
  return EA(n - 750, t);
}
function be(i, n, t, e, A) {
  return EA(e - 758, i);
}
function ii() {
  const i = ["ArqGWQD/", "vCoiW6FcSCkb", "W7JcOJu", "vSoRebu7", "DHiT", "WR51xdOK", "W7WRvCkrW78", "CtucW6/cRG", "W73cOZr/", "WRXbW6u", "oCkSW5O", "WRhdJCkvg1i", "wdFdH2JdNq", "eu7cGq", "Aca6cW", "WPq/mmk9fq", "ihXVWQhdMW", "WO3cHCkNw8o5", "W6ldKCknvXi", "W4eSWO0RWQe", "amktW7jTW48", "xweGde8", "W4ioWOWCWQu", "W4/cKSo1gq", "W6mjrCkyW4i", "ya8XWQ1J", "W7e+CSkoAG", "p8k1W5tdHSog", "hCofWQO+aW", "a3TLWOldHW", "WORdOCk4cdW", "p8k6W4/dJSoQ", "W4xdG8k2sZO", "W7NcPY4", "WOD+xcGc", "W6zRW685WQy", "WQtdKCkjcbS", "W4ygWPSAWQm", "W7yTrmkXW7a", "WPuOo8kQaW", "W6lcPKrtW7O", "WOBdR8k4lJK", "bCkjW7nCW4e", "kSksW7xdH8o6Et3dP8oimCkraa", "W4pcLCoDFL0", "WO4bWOamWQu", "D8kTW4BdJmoL", "W5SuW7O", "W4/dJMBcKSo6", "pSk9W57dJq", "mSoVW4ddNCkd", "WOhdSSkJgcC", "n8o6W6ddNCkA", "W5qjW7ioWOa", "WPiJlmkRrG", "A8kxtSoxWQu", "W4CiWOe", "W4tcN8okoq", "W5WUtSo2vq", "WR9SW6C8g8kUxttdQSo5WOVcJSo5", "W4hdIhFcSmoG", "kHqMWQX2", "mmkoW74", "WRbPxtiC", "W5CoWR9kEa", "W5OtWOmCWQ8", "WRVdGmkVvSo/", "WOtdTCkQW4nQ", "W5yyrCkoDa", "WOlcOK3dVmkq", "emobWPlcJmo4", "gKFcGtlcNW", "WOZdUCkTWOG", "W58AW6KEWPS", "oSoIW4ddP8kC", "WRpcKCk3WQbG", "ntXFnLy", "WOhdPCkIgde", "W6FdJCkXqaC", "W4ddRt55fW", "W63cLSoZASonWP3dN8kgWRO", "W7JcOKnVW7G", "W5D4W7KX", "W6/dJCkMzb4", "Bmk3WP7cH8omwYiWW6zboW", "W7/cMJvRdG", "W7mWwCkhW6i", "qmo8drGN", "W5SsW74yWP0", "W6dcLSo4bCkRW53dKCkCWPVcQqS4", "aCk7vKrNlmofW6bDWOZcJt0", "WOBcOL/dRmkY", "nSoRW54", "WPTxW4m1EG", "sG8VdL4", "WR/dGmk/uCoY", "lCkjWQfDW68", "W5xdGM0", "BCoeWQJdG3a", "uIZdKtldNG", "AguAiG0UtCofwCoZW4re", "W4FcNSoRuKW", "W73dIhVdK3a", "WONdV8k9", "W7hcVYb/bG", "W6vAW6S1W7m", "Fa4Aq3C", "W5iKtq", "WRpcOCk2", "wmoVebu7", "z8oVfHG6", "xZ7dKq", "Etms", "W60QWQ16rW", "WPNdTCkGmty", "WOBcT8omCmoq", "W7FdHgNdM2q", "WRddI8kIrG", "mSk5W5VdLSo5", "WQVcV17dT8kU", "W6CXWRHH", "WObbWRCxzW", "W4VcJSokmIG", "W6ZcJ8k3WQ1X", "emohWPBcRmoK", "zSo6WPJcJCk7dCoUrmozW5jH", "F8ocWQhcLmk7", "W4FcNSo1", "W7xcJmoDmJi", "wtuMea", "W7mPDmkTCq", "odXfyK0", "W7CPBSksFq", "W5xcVCoDnte", "WR3dVJVcTmoW", "bNfJWONdMG", "W7lcOSo7W6/cNG", "WOpcQf4", "i8kUW57dJCoC", "WQCSk8kM", "omkfW79qtq", "W7xcUtDChq", "WQVcJmkTWRP6", "Acaid28", "ACkCsCo2WPO", "pSo8W57dM8kl", "iSoFWPyaoa", "WOhcO8oG", "CZ8xW57cTG", "ax1YW4FdGa", "W6VdV8oPW6NcQ15ejmktWRBcQa", "W5LqW7q6W4i", "WRH6rJm", "W5hcMCoamt4", "WRpdHSksoH0", "WPxdOCk+bq", "vc4PjKK", "qqpdQsRdMG", "WOBcRfJdU8k0", "nmk5W4pdOmoD", "e8khW7nQW4u", "W6FcN8oDmYK", "W4RdHgdcMCoN", "ltjhF1S", "W73cVSoEW4VcJa", "W4ywWOKoWQO", "WRLpW6u9", "WRFdKCkjdqe", "AmkwsmoCWPe", "oCkoW6PuAa", "AW4MW6X9", "vh4nW716", "WORcU8ksWOVdKa", "W7uCW7bbmq", "l8kpW6j8W44", "zHunWPf2", "WRhcG8kieqy", "bNXVWPm", "omoRW4ldH8kC", "omo8W4pdH8kk", "WPRcQftdRa", "zXGNWQz0", "W5CLW6vdoa", "W7G4tmkiEW", "W5ZdSSkImSkddIpdOfmMW6XV", "udtdHW", "W5ywW7G", "us8Oda", "WR/dGmkQrSoV", "W5LRW6G3W64", "DSocWRu", "WQlcPe/dVCkY", "WOzKbcL6W6WUWRupW4GYDh4", "WRBdUIhcPmo9", "WRtdQYFcPa", "W5ZcLSoJwue", "amkQW5RdLmkR", "e8osWQWxfW", "W4aJCmkyW4u", "W6GWWQXlsq", "W6NcQf5eW6a", "WQdcKCkXWR1N", "W4hcImoblZ4", "fSoEWQW4ea", "WORcOLJdNCkX", "CHWXWQX4", "WPy5n8k9", "dSohWOm", "d8kGW49tW4W", "zeGzW7rk", "W5tcJmodnt8", "WQBdLdZcU8ol", "W7RcTvLEW6y", "WR9QW683gSkMusxdJmoUWPVcNmos", "vcGTbLu", "W5r4W647W7q", "W6BcLmkrbGDeWRby", "W5q9W5Celq", "wsi6", "oSokbCoQWQldHa3dJCoz", "s8krW4pdMSkJD8oMW7miWRfH", "WQ3dVMeNrrKWo8kdFLBdRa", "BgeIcLG", "qtJdKdxdLa", "ktzysvu", "W7GtW7Dhcq", "WRRcL8oJgehcGSojWOBcUmoYmuJdIq", "mCkFW4bCFG", "W7WTv8kqW50", "W7egW6zOca", "WRNcVmk3WQ7dQa", "W7VdG0pdS2q", "W7C5C8kvDW", "W4CjWOKw", "WOlcPe/dVCkY", "e0BcKtBdIW", "W7FcUmowW6VcIq", "WONcQfJdLmk1", "W4xdLxlcJda", "aSk5eW4MtmoyW4a"];
  return ii = function() {
    return i;
  }, ii();
}
function EA(i, n) {
  const t = ii();
  return EA = function(e, A) {
    e = e - (-9 * -49 + 9733 + -9871);
    let o = t[e];
    if (EA.BzgqHb === void 0) {
      var r = function(c) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let x = "", d = "";
        for (let E = 0, f, C, h = 0; C = c.charAt(h++); ~C && (f = E % 4 ? f * 64 + C : C, E++ % 4) ? x += String.fromCharCode(255 & f >> (-2 * E & 6)) : 0)
          C = Q.indexOf(C);
        for (let E = 0, f = x.length; E < f; E++)
          d += "%" + ("00" + x.charCodeAt(E).toString(16)).slice(-2);
        return decodeURIComponent(d);
      };
      const I = function(c, Q) {
        let x = [], d = 0, E, f = "";
        c = r(c);
        let C;
        for (C = 0; C < 256; C++)
          x[C] = C;
        for (C = 0; C < 256; C++)
          d = (d + x[C] + Q.charCodeAt(C % Q.length)) % 256, E = x[C], x[C] = x[d], x[d] = E;
        C = 0, d = 0;
        for (let h = 0; h < c.length; h++)
          C = (C + 1) % 256, d = (d + x[C]) % 256, E = x[C], x[C] = x[d], x[d] = E, f += String.fromCharCode(c.charCodeAt(h) ^ x[(x[C] + x[d]) % 256]);
        return f;
      };
      EA.LIWpMN = I, i = arguments, EA.BzgqHb = !0;
    }
    const a = t[1699 * -4 + -7920 + 566 * 26], g = e + a, s = i[g];
    return s ? o = s : (EA.uKwIcU === void 0 && (EA.uKwIcU = !0), o = EA.LIWpMN(o, A), i[g] = o), o;
  }, EA(i, n);
}
function FA(i, n, t, e, A) {
  return EA(i - 510, e);
}
var ag, gg, sg;
class eE {
  constructor(n) {
    F(this, sg);
    F(this, gg, [xA(1221, 1113, "*F#V") + FA(824, 810, 749, "b^X)") + "ic", be("MMF1", 1207, 1074, 1183) + XA(637, "*F#V") + "ic"]);
    F(this, ag);
    function t(A, o, r, a, g) {
      return EA(o - -523, r);
    }
    function e(A, o, r, a, g) {
      return EA(o - 728, A);
    }
    this[t(-267, -180, "&Jr%") + e("XMHA", 1088) + "d"] = n;
  }
  async [(sg = xA(1141, 1074, "z]8X") + "se", gg = $A(")^dB", 439, 322, 425) + xA(1186, 1104, "L7]w") + XA(640, "vRN#") + xA(1286, 1246, "VFXz"), ag = XA(634, "BL(K") + FA(1001, 1066, 1044, "CfqP"), FA(989, 995, 954, "20wV"))](n) {
    function t(a, g, s, I, c) {
      return FA(I - -460, g - 82, s - 301, s);
    }
    const e = await this[o(1437, "yt*3", 1373, 1372, 1317) + o(1335, "L7]w", 1521, 1351, 1435) + t(398, 553, "P1ax", 491)](n);
    await Promise[o(1229, "L7]w", 1383, 1434, 1331) + A(-476, -451, "z]8X", -410)]([this[r("E9pF", 1005, 1079, 951, 978) + A(-441, -455, "#$EP", -409) + "d"][o(1472, "#$EP", 1419, 1267, 1374)](n), this[A(-224, -293, "@Dvc", -247) + t(414, 415, "20wV", 487) + "e"](e)]);
    function A(a, g, s, I, c) {
      return xA(a - 15, I - -1527, s);
    }
    function o(a, g, s, I, c) {
      return FA(c - 445, g - 365, s - 269, g);
    }
    function r(a, g, s, I, c) {
      return $A(a, g - 292, s - 148, c - 465);
    }
    this[r("z091", 1036, 871, 1008, 937) + A(-173, -214, "vRN#", -246) + r("&Jr%", 749, 892, 783, 851)]();
  }
  async [xA(1173, 1055, "fhD5") + be("DBtn", 1264, 1139, 1234) + "se"](n) {
    function t(a, g, s, I, c) {
      return be(a, g - 40, s - 332, c - -24);
    }
    function e(a, g, s, I, c) {
      return FA(g - -117, g - 364, s - 460, a);
    }
    function A(a, g, s, I, c) {
      return FA(s - -1085, g - 217, s - 296, c);
    }
    function o(a, g, s, I, c) {
      return be(s, g - 452, s - 343, g - -440);
    }
    function r(a, g, s, I, c) {
      return xA(a - 345, c - -1564, g);
    }
    try {
      if (r(-444, "FV]N", -459, -380, -481) !== r(-409, "z]8X", -367, -360, -347)) {
        _0x430220 instanceof _0x41348e ? _0x87fd87[o(614, 727, "XMHA", 622, 754)]() : _0x44d272 instanceof _0x52f2b0 && _0x4d94cb[t("g6FN", 1045, 1145, 1094, 1140)](_0x5ce2aa);
        const a = {};
        a[r(-475, "5Ew@", -426, -477, -494) + o(802, 732, "eetx", 621, 636)] = !1, a[r(-388, "*F#V", -568, -605, -487) + "s"] = [], a[o(862, 791, "89wM", 886, 884) + o(666, 653, "4[ba", 542, 555)] = [], a[e("eetx", 843, 775, 906, 773) + t("z091", 1380, 1274, 1150, 1260) + A(-303, -187, -269, -318, "*F#V")] = void (51 * -118 + 4562 + -13 * -112), a[r(-534, "QAdl", -449, -364, -455)] = function() {
        }, a[e("DBtn", 715, 731, 807, 717) + A(14, -54, -83, -91, "fI4I")] = "", this[r(-576, "&Jr%", -422, -525, -461) + A(-207, -210, -236, -304, "z]8X")] = new _0x59a95e(a);
      } else {
        const a = await fetch(n);
        if (!a.ok)
          if (t("7@SP", 1251, 1288, 1101, 1208) === e("b^X)", 852, 856, 892, 855)) _0x492299[e("g6FN", 697, 578, 655, 691)]();
          else throw new Error(o(671, 726, "hvxO", 736, 613) + A(-312, -105, -225, -322, "yt*3") + r(-225, "BL(K", -304, -315, -336) + e("FV]N", 741, 810, 768, 821) + "d.");
        this[r(-390, "@Dvc", -511, -560, -506) + "se"] = await a[A(-155, -15, -93, -56, "E9pF")]();
      }
    } catch (a) {
      if (A(-116, -121, -62, -46, "VFXz") === e("@Dvc", 719, 651)) this[r(-240, "*F#V", -251, -209, -272) + "se"] = void (-1 * -9397 + 9797 + -19194), console[A(-57, -22, -58, -46, "CfqP")](a);
      else return _0x20d15c[A(-183, -178, -195, -216, "5Ew@") + r(-517, "7@SP", -395, -353, -404)][e("MMF1", 837, 917) + e("b^X)", 880, 937)];
    }
  }
  async [FA(881, 848, 802, "E9pF") + xA(1123, 1174, "QAdl") + "e"](n) {
    function t(a, g, s, I, c) {
      return XA(a - -217, c);
    }
    function e(a, g, s, I, c) {
      return be(s, g - 298, s - 453, a - 85);
    }
    this[A(-194, "7@SP", -151, -114) + o(-418, -402, -497, "VFXz")] = void (-1 * 1874 + -8693 + 10567 * 1);
    function A(a, g, s, I, c) {
      return XA(I - -811, g);
    }
    function o(a, g, s, I, c) {
      return be(I, g - 1, s - 320, a - -1612);
    }
    function r(a, g, s, I, c) {
      return XA(I - -253, c);
    }
    if (!n)
      if (e(1189, 1162, "pf&Q") !== A(-191, ")^dB", -48, -113)) this[A(-227, "5Ew@", -345, -261) + t(289, 211, 218, 257, "P1ax") + "d"] = _0x980c1f;
      else {
        console[A(-131, "r9R2", -150, -224)](A(-269, "fI4I", -228, -343) + A(-112, "hvxO", -198, -122) + e(1216, 1276, "bdPE") + r(344, 547, 483, 452, "9Q)Q") + A(-377, ")GAO", -293, -272)), this[e(1174, 1175, "20wV") + "se"] = void (7938 + 81 * -98);
        return;
      }
    await this[A(-369, "#$EP", -218, -249) + t(441, 481, 515, 327, "E9pF") + "se"](n);
  }
  async [$A("E9pF", 431, 543, 546) + $A("VFXz", 526, 462, 502) + $A("hvxO", 269, 391, 323)](n) {
    const t = await fetch("" + n + this[A(1303, 1224, "fI4I", 1268, 1236) + o(1488, 1479, 1376, "uZxD") + A(1282, 1192, "zR2u", 1199, 1165) + r(656, 697, 772, 688, "P1ax")][0]);
    function e(g, s, I, c, Q) {
      return $A(I, s - 123, I - 32, g - 464);
    }
    function A(g, s, I, c, Q) {
      return XA(Q - 643, I);
    }
    function o(g, s, I, c, Q) {
      return FA(s - 484, s - 166, I - 422, c);
    }
    function r(g, s, I, c, Q) {
      return $A(Q, s - 445, I - 489, g - 141);
    }
    const a = t.ok ? 1 * 7213 + 7728 + -67 * 223 : -1027 + 7 * -191 + -43 * -55;
    return "" + n + this[o(1446, 1465, 1572, "yeUF") + o(1611, 1523, 1415, "yeUF") + r(590, 580, 610, 590, "yeUF") + e(902, 834, "hvxO")][a];
  }
  [xA(1093, 1190, "Cm8[") + FA(931, 1015, 877, "E9pF") + "s"](n) {
    function t(e, A, o, r, a) {
      return xA(e - 476, e - -1113, r);
    }
    n[t(138, 122, 60, "r9R2") + "ch"]((e) => console[t(105, 159, 137, "jTs2")](e));
  }
  [xA(1374, 1264, "jdM7") + be("fhD5", 1142, 1266, 1170) + FA(825, 757, 929, "bdPE")](n) {
    function t(e, A, o, r, a) {
      return FA(A - -587, A - 479, o - 25, e);
    }
    n[t("3jpd", 389, 418) + "ch"]((e) => console[t("g6FN", 233, 303)](e));
  }
  [$A("BL(K", 457, 471, 463) + FA(861, 750, 743, "Cm8[")]() {
    function n(e, A, o, r, a) {
      return XA(r - -635, A);
    }
    function t(e, A, o, r, a) {
      return xA(e - 273, r - -1450, o);
    }
    return window[n(83, "bdPE", -51, 67) + n(-149, "z]8X", -99, -112)][t(-222, -377, "E9pF", -307) + n(8, "V0Md", -29, 18)];
  }
  [XA(677, "QAdl") + $A("g6FN", 389, 429, 450) + be("uZxD", 1261, 1215, 1192)]() {
    function n(r, a, g, s, I) {
      return xA(r - 292, r - -193, g);
    }
    function t(r, a, g, s, I) {
      return $A(I, a - 58, g - 143, r - 329);
    }
    function e(r, a, g, s, I) {
      return FA(I - 352, a - 365, g - 119, a);
    }
    function A(r, a, g, s, I) {
      return xA(r - 263, r - -504, g);
    }
    function o(r, a, g, s, I) {
      return $A(I, a - 324, g - 338, a - 374);
    }
    try {
      if (e(1234, "r9R2", 1115, 1172, 1228) !== t(731, 674, 800, 618, "jTs2")) {
        if (!this[t(705, 621, 782, 703, ")GAO") + "se"])
          if (t(706, 636, 791, 728, "uZxD") === n(1056, 1094, "&[tF", 1097, 1152)) _0x31b35b[e(1156, "uZxD", 1214, 1268, 1190)](_0xa348f2);
          else throw new Ki(n(980, 1091, "jTs2", 1078, 1066) + n(938, 941, "g6FN", 822, 820) + o(627, 737, 715, 777, "P1ax") + o(935, 851, 782, 748, "zR2u") + ".");
        if (!this[o(627, 690, 768, 693, "eetx") + e(1365, "*F#V", 1280, 1336, 1345) + "d"][t(774, 817, 846, 871, "3jpd") + t(736, 633, 802, 629, "HDl8") + e(1259, "L7]w", 1174, 1166, 1214) + "ed"]())
          if (n(875, 963, "20wV", 926, 867) === o(686, 797, 757, 910, "BL(K")) _0x32f4b1[e(1190, "@Dvc", 1266, 1267, 1202) + "ch"]((r) => _0x5a69a0[A(703, 717, "&Jr%", 766, 770)](r));
          else throw new Ki(A(583, 606, "CfqP", 559, 666) + e(1293, "z091", 1129, 1171, 1240) + t(841, 727, 950, 725, "&[tF") + o(829, 919, 825, 850, "3jpd") + ".");
        this[n(874, 973, "P1ax", 821, 822) + A(706, 686, "E9pF", 806, 621)] = new Ag(_d(this[A(782, 742, "E9pF", 721, 822) + "se"], this[o(798, 827, 822, 825, "zR2u") + o(880, 835, 919, 829, "hn#Y")]())), this[A(635, 582, "fhD5", 564, 750) + o(845, 844, 901, 733, "QAdl") + "s"](this[n(912, 867, "V0Md", 900, 881) + t(678, 596, 664, 681, "jdM7")][o(693, 746, 863, 685, "hn#Y") + "s"]), this[o(716, 758, 785, 771, "MMF1") + n(987, 987, "QAdl", 890, 883) + o(641, 693, 753, 790, "FV]N")](this[o(890, 884, 965, 889, "MMF1") + A(578, 491, "&Jr%", 590, 645)][e(1460, "*F#V", 1439, 1324, 1369) + e(1205, "hy)u", 1217, 1329, 1311)]);
      } else {
        _0x4de9e9[t(871, 983, 884, 982, "z]8X")](n(955, 1026, "DBtn", 1010, 920) + o(731, 700, 635, 817, "#$EP") + n(870, 932, "BL(K", 757, 903) + A(584, 691, "BL(K", 701, 695) + e(1118, "pf&Q", 1146, 1194, 1187)), this[A(575, 583, "Cm8[", 548, 460) + "se"] = void (-2870 + 14 * 205);
        return;
      }
    } catch (r) {
      if (A(699, 761, "CfqP") === t(723, 617, 634, 762, "4[ba")) {
        if (r instanceof Ki)
          if (t(846, 739, 844, 927, "DBtn") !== o(614, 715, 647, 724, "5Ew@")) r[o(811, 730, 801, 706, "V0Md")]();
          else throw new _0x11311a(A(744, 706, "FV]N") + o(724, 832, 935, 771, "20wV") + n(961, 891, ")^dB") + n(960, 847, "pf&Q") + ".");
        else if (r instanceof Error) {
          if (n(1068, 1128, "89wM") !== A(730, 661, "vRN#")) throw new _0x1a4481(n(1076, 1040, "vRN#") + A(596, 567, "yt*3") + t(659, 650, 667, 564, "hvxO") + e(1089, "z]8X", 1194, 1302, 1209) + "d.");
          console[e(1286, "&[tF", 1255, 1171, 1192)](r);
        }
        const a = {};
        a[A(663, 774, "hy)u") + e(1223, "pf&Q", 1286, 1178, 1291)] = !1, a[o(757, 801, 753, 897, "FV]N") + "s"] = [], a[e(1399, "pf&Q", 1396, 1358, 1359) + t(749, 830, 833, 636, "b^X)")] = [], a[o(849, 871, 854, 909, "#$EP") + t(719, 823, 776, 773, "jdM7") + t(735, 826, 653, 618, "yt*3")] = void (-4632 + -1544 * -3), a[o(848, 765, 645, 655, "CfqP")] = function() {
        }, a[t(737, 814, 767, 841, "b^X)") + e(1213, "L7]w", 1263, 1268, 1256)] = "", this[t(805, 692, 924, 827, "BL(K") + t(711, 750, 743, 741, "V0Md")] = new Ag(a);
      } else _0x422157[n(983, 882, "nN3w") + e(1295, "nN3w", 1253, 1488, 1371)](_0x433d80);
    }
  }
  [xA(1280, 1182, "uZxD") + xA(1160, 1254, "QAdl") + xA(1156, 1086, "hn#Y") + "t"]() {
    function n(e, A, o, r, a) {
      return FA(o - -168, A - 376, o - 108, e);
    }
    function t(e, A, o, r, a) {
      return xA(e - 186, a - -679, r);
    }
    return this[t(553, 487, 460, "L7]w", 552) + n("fhD5", 861, 753)];
  }
  [$A("Cm8[", 525, 402, 468) + XA(620, "QAdl") + XA(561, "hvxO")]() {
    var r, a;
    function n(g, s, I, c, Q) {
      return XA(g - 705, s);
    }
    if (!this[t(1228, "V0Md", 1307) + "se"])
      return A(319, 337, "z]8X", 352) !== n(1347, "*F#V") ? void 0 : this[o("@Dvc", -366, -265) + t(1463, "vRN#", 1444)];
    function t(g, s, I, c, Q) {
      return FA(I - 407, s - 330, I - 127, s);
    }
    function e(g, s, I, c, Q) {
      return be(s, s - 445, I - 36, Q - -1123);
    }
    function A(g, s, I, c, Q) {
      return xA(g - 346, c - -719, I);
    }
    function o(g, s, I, c, Q) {
      return xA(g - 351, I - -1403, g);
    }
    try {
      if (n(1305, "QAdl", 1346, 1211, 1265) !== t(1114, "hn#Y", 1224, 1232, 1229)) {
        const g = JSON[t(1505, "b^X)", 1442, 1364, 1535)](this[n(1386, "hvxO", 1336, 1347, 1278) + "se"]);
        return (r = g == null ? void 0 : g[A(625, 443, "jdM7", 533, 415) + A(602, 622, "hvxO", 551, 590)]) == null ? void 0 : r[n(1404, "uZxD", 1490, 1430, 1369) + n(1234, "yeUF", 1141, 1304, 1172)];
      } else {
        const g = _0x458dde[e(122, "DBtn", 96, 115, 97)](this[e(-11, "nN3w", -67, -27, 7) + "se"]);
        return (a = g == null ? void 0 : g[n(1303, "z091", 1270, 1267, 1250) + e(-46, ")GAO", 100, -54, 40)]) == null ? void 0 : a[n(1285, "r9R2", 1376, 1400, 1283) + e(145, "E9pF", 162, 62, 74)];
      }
    } catch (g) {
      if (t(1382, "&[tF", 1365) !== t(1306, "CfqP", 1324)) {
        g instanceof Error && (n(1370, "@Dvc") === e(-13, "hvxO", -38, -16, 80) ? U[A(512, 506, "hvxO", 489) + n(1181, "jTs2")](g) : _0x4c0234[n(1214, "DBtn") + "ch"]((s) => _0x58822d[A(550, 565, "hvxO", 520)](s)));
        return;
      } else this[e(148, "yt*3", 125, 130, 99) + "se"] = void (7 * 202 + -5377 * 1 + 1 * 3963), _0xc38b5a[o("L7]w", -300, -206)](_0x3a5ebd);
    }
  }
}
const gi = class gi extends eE {
  static getInstance() {
    if (!this._instance) {
      const n = new AE();
      this._instance = new gi(n);
    }
    return this._instance;
  }
};
F(gi, "_instance");
let P0 = gi;
function tE({ cameraOptions: i }) {
  return i ? /* @__PURE__ */ w(Ux, { target: i.styleTarget, children: /* @__PURE__ */ w(
    _C,
    {
      assetsDirectoryPath: i.assetsDirectoryPath,
      bramble: P0.getInstance(),
      children: /* @__PURE__ */ w($C, { analytics: qd, appKey: "1f291301e6e7324d4117ed61b278a43a7771557d", children: /* @__PURE__ */ w(
        eC,
        {
          value: Td({
            onError: i.onError
          }),
          children: /* @__PURE__ */ w(Is, { children: /* @__PURE__ */ w(Yd, { cameraFacing: i.cameraFacing, children: /* @__PURE__ */ w(Ud, { ...i }) }) })
        }
      ) })
    }
  ) }) : null;
}
zc(tE, "x-dot-palm-capture", ["cameraOptions"]);
