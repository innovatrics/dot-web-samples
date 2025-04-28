var SI = Object.defineProperty;
var Fg = (i) => {
  throw TypeError(i);
};
var NI = (i, o, t) => o in i ? SI(i, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[o] = t;
var G = (i, o, t) => NI(i, typeof o != "symbol" ? o + "" : o, t), Rg = (i, o, t) => o.has(i) || Fg("Cannot " + t);
var D = (i, o, t) => (Rg(i, o, "read from private field"), t ? t.call(i) : o.get(i)), K = (i, o, t) => o.has(i) ? Fg("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), H = (i, o, t, e) => (Rg(i, o, "write to private field"), e ? e.call(i, t) : o.set(i, t), t);
var Y0, U, ox, ix, _e, Mg, nx, ji, Xn, Zi, _i, gx, Q0 = {}, ax = [], FI = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ri = Array.isArray;
function Ge(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function xx(i) {
  var o = i.parentNode;
  o && o.removeChild(i);
}
function YA(i, o, t) {
  var e, A, n, g = {};
  for (n in o) n == "key" ? e = o[n] : n == "ref" ? A = o[n] : g[n] = o[n];
  if (arguments.length > 4152 + 830 * -5 && (g.children = arguments.length > -6378 + 1 * 951 + 5430 ? Y0.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null)
    for (n in i.defaultProps) void (-2 * 3662 + -1086 + -1 * -8410) === g[n] && (g[n] = i.defaultProps[n]);
  return r0(i, g, e, A, null);
}
function r0(i, o, t, e, A) {
  var n = {};
  n.type = i, n.props = o, n.key = t, n.ref = e, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__d = void (-9517 + 2547 * 3 + 1876), n.__c = null, n.constructor = void (10 * -977 + 1368 + -4201 * -2), n.__v = A ?? ++ox, n.__i = -(9551 + 5 * -811 + 1 * -5495), n.__u = 0;
  var g = n;
  return A == null && U.vnode != null && U.vnode(g), g;
}
function RI() {
  var i = {};
  return i.current = null, i;
}
function xe(i) {
  return i.children;
}
function ge(i, o) {
  this.props = i, this.context = o;
}
function at(i, o) {
  if (o == null) return i.__ ? at(i.__, i.__i + (-2 * -4892 + 6 * 739 + -14217)) : null;
  for (var t; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? at(i) : null;
}
function rx(i) {
  var o, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, o = 0; o < i.__k.length; o++) if ((t = i.__k[o]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return rx(i);
  }
}
function Vi(i) {
  (!i.__d && (i.__d = !(-555 + -689 * -12 + -7713)) && _e.push(i) && !mo.__r++ || Mg !== U.debounceRendering) && ((Mg = U.debounceRendering) || nx)(mo);
}
function mo() {
  var i, o, t, e, A, n, g, a;
  for (_e.sort(ji); i = _e.shift(); ) i.__d && (o = _e.length, e = void (-1 * 1977 + 9047 * 1 + -7070), n = (A = (t = i).__v).__e, g = [], a = [], t.__P && ((e = Ge({}, A)).__v = A.__v + (1379 * 4 + -1 * 6418 + 903), U.vnode && U.vnode(e), $n(t.__P, e, A, t.__n, t.__P.namespaceURI, 9539 * 1 + -298 * 13 + -5633 & A.__u ? [n] : null, g, n ?? at(A), !!(9159 + -3967 * -1 + -13094 & A.__u), a), e.__v = A.__v, e.__.__k[e.__i] = e, cx(g, e, a), e.__e != n && rx(e)), _e.length > o && _e.sort(ji));
  mo.__r = 11622 + 298 * -39;
}
function Ix(i, o, t, e, A, n, g, a, x, r, C) {
  var I, Q, s, E, d, u = e && e.__k || ax, c = o.length;
  for (t.__d = x, MI(t, o, u), x = t.__d, I = -129 * -25 + 2824 + 1 * -6049; I < c; I++) (s = t.__k[I]) != null && typeof s != "boolean" && typeof s != "function" && (Q = -(-3302 + 1195 * 2 + 913) === s.__i ? Q0 : u[s.__i] || Q0, s.__i = I, $n(i, s, Q, A, n, g, a, x, r, C), E = s.__e, s.ref && Q.ref != s.ref && (Q.ref && Ag(Q.ref, null, s), C.push(s.ref, s.__c || E, s)), d == null && E != null && (d = E), 3 * 27661 + -15096 * 1 + -2351 & s.__u || Q.__k === s.__k ? (x && typeof s.type == "string" && !i.contains(x) && (x = at(Q)), x = Cx(s, x, i)) : typeof s.type == "function" && void (399 * -9 + 4 * -403 + 5203) !== s.__d ? x = s.__d : E && (x = E.nextSibling), s.__d = void (12767 + -17 * 751), s.__u &= -(-267707 * 1 + -1596 * -1 + 462720));
  t.__d = x, t.__e = d;
}
function MI(i, o, t) {
  var e, A, n, g, a, x = o.length, r = t.length, C = r, I = 6 * 626 + 7831 + -1 * 11587;
  for (i.__k = [], e = 1963 + -1 * 9111 + -3574 * -2; e < x; e++) g = e + I, (A = i.__k[e] = (A = o[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? r0(null, A, null, null, null) : ri(A) ? r0(xe, { children: A }, null, null, null) : void (3 * 1368 + 9093 + -13197) === A.constructor && A.__b > 0 ? r0(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = i, A.__b = i.__b + (2430 + -1 * -3457 + -5886), a = WI(A, t, g, C), A.__i = a, n = null, a !== -1 && (C--, (n = t[a]) && (n.__u |= -87945 * 1 + 3 * 25498 + 142523 * 1)), n == null || n.__v === null ? (-(-7548 + -11 * 43 + 8022) == a && I--, typeof A.type != "function" && (A.__u |= -101194 * 1 + 14044 + 2 * 76343)) : a !== g && (a == g - (2 * 4021 + -7538 + 1 * -503) ? I = a - g : a == g + (-6020 + -366 * -5 + -127 * -33) ? I++ : a > g ? C > x - g ? I += a - g : I-- : a < g && I++, a !== e + I && (A.__u |= -166286 + 159 * 1458))) : (n = t[g]) && n.key == null && n.__e && -2783 * 1 + -1147 + 3930 == (21491 * -4 + 26036 + -764 * -250 & n.__u) && (n.__e == i.__d && (i.__d = at(n)), zi(n, n, !(-9110 * 1 + -4270 + 13381)), t[g] = null, C--);
  if (C)
    for (e = -1 * 8693 + -2886 + 11579; e < r; e++) (n = t[e]) != null && 593 * -5 + -1 * 3380 + 6345 == (50335 * 1 + -38340 + -1 * -119077 & n.__u) && (n.__e == i.__d && (i.__d = at(n)), zi(n, n));
}
function Cx(i, o, t) {
  var e, A;
  if (typeof i.type == "function") {
    for (e = i.__k, A = 1 * 7079 + -210 * 9 + 1 * -5189; e && A < e.length; A++) e[A] && (e[A].__ = i, o = Cx(e[A], o, t));
    return o;
  }
  i.__e != o && (t.insertBefore(i.__e, o || null), o = i.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -754 + -6737 * -1 + 1 * -5975 === o.nodeType);
  return o;
}
function Se(i, o) {
  return o = o || [], i == null || typeof i == "boolean" || (ri(i) ? i.some(function(t) {
    Se(t, o);
  }) : o.push(i)), o;
}
function WI(i, o, t, e) {
  var A = i.key, n = i.type, g = t - (7191 + 1294 * -2 + -4602), a = t + (-2755 + -12 * 593 + -16 * -617), x = o[t];
  if (x === null || x && A == x.key && n === x.type && 7562 * -1 + 1867 * 5 + -1773 == (1411 * 2 + -248788 + 188519 * 2 & x.__u)) return t;
  if (e > (x != null && -1550 + -310 * -5 == (1217 * 191 + -166751 + 65376 & x.__u) ? 1 : 125 * -76 + 3354 + 439 * 14)) for (; g >= -8 * 509 + 7292 * 1 + -3220 || a < o.length; ) {
    if (g >= 0) {
      if ((x = o[g]) && -2 * -445 + -11 * 437 + -1 * -3917 == (-39107 * 5 + -74441 * 1 + 401048 & x.__u) && A == x.key && n === x.type) return g;
      g--;
    }
    if (a < o.length) {
      if ((x = o[a]) && 649 * 2 + -1635 + 337 == (84964 + 1 * 55551 + -9443 & x.__u) && A == x.key && n === x.type) return a;
      a++;
    }
  }
  return -1;
}
function Wg(i, o, t) {
  o[-4341 * 1 + 2496 + 1845] === "-" ? i.setProperty(o, t ?? "") : i[o] = t == null ? "" : typeof t != "number" || FI.test(o) ? t : t + "px";
}
function j0(i, o, t, e, A) {
  var n;
  A: if (o === "style")
    if (typeof t == "string") i.style.cssText = t;
    else {
      if (typeof e == "string" && (i.style.cssText = e = ""), e)
        for (o in e) t && o in t || Wg(i.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Wg(i.style, o, t[o]);
    }
  else if (o[0] === "o" && o[-16 * 173 + -1331 * -4 + -73 * 35] === "n") n = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in i || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(53 * -22 + 6933 * 1 + 5765 * -1) : o.slice(-753 * -3 + 9182 * -1 + 5 * 1385), i.l || (i.l = {}), i.l[o + n] = t, t ? e ? t.u = e.u : (t.u = Xn, i.addEventListener(o, n ? _i : Zi, n)) : i.removeEventListener(o, n ? _i : Zi, n);
  else {
    if (A == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in i) try {
      i[o] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(1 * -4421 + -2961 * 1 + 7383) === t && o[-9 * -121 + -1 * 7481 + 6396] !== "-" ? i.removeAttribute(o) : i.setAttribute(o, o == "popover" && -1622 * 1 + 6079 + -4456 == t ? "" : t));
  }
}
function vg(i) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + i];
      if (o.t == null) o.t = Xn++;
      else if (o.t < t.u) return;
      return t(U.event ? U.event(o) : o);
    }
  };
}
function $n(i, o, t, e, A, n, g, a, x, r) {
  var C, I, Q, s, E, d, u, c, h, p, w, k, R, N, V, wA, AA = o.type;
  if (void (11283 + -3 * 3761) !== o.constructor) return null;
  1 * -398 + 7750 + -7224 & t.__u && (x = !!(-203 * 26 + -1 * -5051 + 259 & t.__u), n = [a = o.__e = t.__e]), (C = U.__b) && C(o);
  A: if (typeof AA == "function") try {
    if (c = o.props, h = "prototype" in AA && AA.prototype.render, p = (C = AA.contextType) && e[C.__c], w = C ? p ? p.props.value : C.__ : e, t.__c ? u = (I = o.__c = t.__c).__ = I.__E : (h ? o.__c = I = new AA(c, w) : (o.__c = I = new ge(c, w), I.constructor = AA, I.render = LI), p && p.sub(I), I.props = c, I.state || (I.state = {}), I.context = w, I.__n = e, Q = I.__d = !(2976 + -1 * 2976), I.__h = [], I._sb = []), h && I.__s == null && (I.__s = I.state), h && AA.getDerivedStateFromProps != null && (I.__s == I.state && (I.__s = Ge({}, I.__s)), Ge(I.__s, AA.getDerivedStateFromProps(c, I.__s))), s = I.props, E = I.state, I.__v = o, Q) h && AA.getDerivedStateFromProps == null && I.componentWillMount != null && I.componentWillMount(), h && I.componentDidMount != null && I.__h.push(I.componentDidMount);
    else {
      if (h && AA.getDerivedStateFromProps == null && c !== s && I.componentWillReceiveProps != null && I.componentWillReceiveProps(c, w), !I.__e && (I.shouldComponentUpdate != null && I.shouldComponentUpdate(c, I.__s, w) === !1 || o.__v === t.__v)) {
        for (o.__v !== t.__v && (I.props = c, I.state = I.__s, I.__d = !(-8262 + -8263 * -1)), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(OA) {
          OA && (OA.__ = o);
        }), k = -10 * 933 + -35 * 5 + 9505; k < I._sb.length; k++) I.__h.push(I._sb[k]);
        I._sb = [], I.__h.length && g.push(I);
        break A;
      }
      I.componentWillUpdate != null && I.componentWillUpdate(c, I.__s, w), h && I.componentDidUpdate != null && I.__h.push(function() {
        I.componentDidUpdate(s, E, d);
      });
    }
    if (I.context = w, I.props = c, I.__P = i, I.__e = !(12417 + 32 * -388), R = U.__r, N = -8513 + -7540 * -1 + 973, h) {
      for (I.state = I.__s, I.__d = !(7596 + -1 * 9274 + -73 * -23), R && R(o), C = I.render(I.props, I.state, I.context), V = 2 * -677 + -764 * 7 + 6702; V < I._sb.length; V++) I.__h.push(I._sb[V]);
      I._sb = [];
    } else do
      I.__d = !1, R && R(o), C = I.render(I.props, I.state, I.context), I.state = I.__s;
    while (I.__d && ++N < 177 * -23 + 2176 + 640 * 3);
    I.state = I.__s, I.getChildContext != null && (e = Ge(Ge({}, e), I.getChildContext())), h && !Q && I.getSnapshotBeforeUpdate != null && (d = I.getSnapshotBeforeUpdate(s, E)), Ix(i, ri(wA = C != null && C.type === xe && C.key == null ? C.props.children : C) ? wA : [wA], o, t, e, A, n, g, a, x, r), I.base = o.__e, o.__u &= -(1 * 5983 + -1245 + -4577), I.__h.length && g.push(I), u && (I.__E = I.__ = null);
  } catch (OA) {
    o.__v = null, x || n != null ? (o.__e = a, o.__u |= x ? 2287 * -4 + 7947 + 1361 : 1 * 9479 + -58 * 139 + 1385 * -1, n[n.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), U.__e(OA, o, t);
  }
  else n == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = vI(t.__e, o, t, e, A, n, g, x, r);
  (C = U.diffed) && C(o);
}
function cx(i, o, t) {
  o.__d = void (-1236 + 206 * 6);
  for (var e = 5 * -1151 + 5098 + -1 * -657; e < t.length; e++) Ag(t[e], t[++e], t[++e]);
  U.__c && U.__c(o, i), i.some(function(A) {
    try {
      i = A.__h, A.__h = [], i.some(function(n) {
        n.call(A);
      });
    } catch (n) {
      U.__e(n, A.__v);
    }
  });
}
function vI(i, o, t, e, A, n, g, a, x) {
  var r, C, I, Q, s, E, d, u = t.props, c = o.props, h = o.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), n != null) {
    for (r = 0; r < n.length; r++) if ((s = n[r]) && "setAttribute" in s == !!h && (h ? s.localName === h : -473 * -2 + -2605 + -3 * -554 === s.nodeType)) {
      i = s, n[r] = null;
      break;
    }
  }
  if (i == null) {
    if (h === null) return document.createTextNode(c);
    i = document.createElementNS(A, h, c.is && c), n = null, a = !(-8861 + -21 * -422);
  }
  if (h === null) u === c || a && i.data === c || (i.data = c);
  else {
    if (n = n && Y0.call(i.childNodes), u = t.props || Q0, !a && n != null)
      for (u = {}, r = 6667 * 1 + -1443 * 1 + 8 * -653; r < i.attributes.length; r++) u[(s = i.attributes[r]).name] = s.value;
    for (r in u) if (s = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") I = s;
      else if (r !== "key" && !(r in c)) {
        if (r == "value" && "defaultValue" in c || r == "checked" && "defaultChecked" in c) continue;
        j0(i, r, null, s, A);
      }
    }
    for (r in c) s = c[r], r == "children" ? Q = s : r == "dangerouslySetInnerHTML" ? C = s : r == "value" ? E = s : r == "checked" ? d = s : r === "key" || a && typeof s != "function" || u[r] === s || j0(i, r, s, u[r], A);
    if (C) a || I && (C.__html === I.__html || C.__html === i.innerHTML) || (i.innerHTML = C.__html), o.__k = [];
    else if (I && (i.innerHTML = ""), Ix(i, ri(Q) ? Q : [Q], o, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, n, g, n ? n[3213 + -1 * -9713 + -12926] : t.__k && at(t, 3 * -1531 + 7445 + -2852), a, x), n != null)
      for (r = n.length; r--; ) n[r] != null && xx(n[r]);
    a || (r = "value", void (-62 * 82 + 1129 * -3 + 8471) !== E && (E !== i[r] || h === "progress" && !E || h === "option" && E !== u[r]) && j0(i, r, E, u[r], A), r = "checked", void (197 * -14 + -5635 + -1199 * -7) !== d && d !== i[r] && j0(i, r, d, u[r], A));
  }
  return i;
}
function Ag(i, o, t) {
  try {
    typeof i == "function" ? i(o) : i.current = o;
  } catch (e) {
    U.__e(e, t);
  }
}
function zi(i, o, t) {
  var e, A;
  if (U.unmount && U.unmount(i), (e = i.ref) && (e.current && e.current !== i.__e || Ag(e, null, o)), (e = i.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (n) {
      U.__e(n, o);
    }
    e.base = e.__P = null;
  }
  if (e = i.__k)
    for (A = -1481 * -4 + -9028 + 3104; A < e.length; A++) e[A] && zi(e[A], o, t || typeof i.type != "function");
  t || i.__e == null || xx(i.__e), i.__c = i.__ = i.__e = i.__d = void (-70 * 25 + 129 * -71 + 10909 * 1);
}
function LI(i, o, t) {
  return this.constructor(i, t);
}
function Oe(i, o, t) {
  var e, A, n, g;
  U.__ && U.__(i, o), A = (e = typeof t == "function") ? null : t && t.__k || o.__k, n = [], g = [], $n(o, i = (!e && t || o).__k = YA(xe, null, [i]), A || Q0, Q0, o.namespaceURI, !e && t ? [t] : A ? null : o.firstChild ? Y0.call(o.childNodes) : null, n, !e && t ? t : A ? A.__e : o.firstChild, e, g), cx(n, i, g);
}
function eg(i, o) {
  Oe(i, o, eg);
}
function tg(i, o, t) {
  var e, A, n, g, a = Ge({}, i.props);
  for (n in i.type && i.type.defaultProps && (g = i.type.defaultProps), o) n == "key" ? e = o[n] : n == "ref" ? A = o[n] : a[n] = void (-168 * -12 + 6233 * 1 + -8249) === o[n] && void (-2603 * 2 + 1 * 1667 + 3539) !== g ? g[n] : o[n];
  return arguments.length > -5638 + -4161 * 1 + 9801 && (a.children = arguments.length > 6965 * 1 + -2078 * 4 + 18 * 75 ? Y0.call(arguments, -150 + -38 * -4) : t), r0(i.type, a, e || i.key, A || i.ref, null);
}
function st(i, o) {
  var t = { __c: o = "__cC" + gx++, __: i, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, n;
    return this.getChildContext || (A = [], (n = {})[o] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(g) {
      this.props.value !== g.value && A.some(function(a) {
        a.__e = !0, Vi(a);
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
Y0 = ax.slice, U = { __e: function(i, o, t, e) {
  for (var A, n, g; o = o.__; ) if ((A = o.__c) && !A.__) try {
    if ((n = A.constructor) && n.getDerivedStateFromError != null && (A.setState(n.getDerivedStateFromError(i)), g = A.__d), A.componentDidCatch != null && (A.componentDidCatch(i, e || {}), g = A.__d), g) return A.__E = A;
  } catch (a) {
    i = a;
  }
  throw i;
} }, ox = -1 * -8216 + 4533 + -12749, ix = function(i) {
  return i != null && i.constructor == null;
}, ge.prototype.setState = function(i, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof i == "function" && (i = i(Ge({}, t), this.props)), i && Ge(t, i), i != null && this.__v && (o && this._sb.push(o), Vi(this));
}, ge.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = !(7154 + -8443 * 1 + -1 * -1289), i && this.__h.push(i), Vi(this));
}, ge.prototype.render = xe, _e = [], nx = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ji = function(i, o) {
  return i.__v.__b - o.__v.__b;
}, mo.__r = -553 * 4 + -3135 + 5347 * 1, Xn = 0, Zi = vg(!(5684 + -5 * -690 + -9133)), _i = vg(!(2960 + -1 * 6158 + 26 * 123)), gx = 8363 * 1 + -7 * 991 + -1426;
function og() {
  return (og = Object.assign ? Object.assign.bind() : function(i) {
    for (var o = 2394 + -9879 * -1 + 1534 * -8; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    }
    return i;
  }).apply(this, arguments);
}
var UI = ["context", "children"];
function JI(i) {
  this.getChildContext = function() {
    return i.context;
  };
  var o = i.children, t = function(e, A) {
    if (e == null) return {};
    var n, g, a = {}, x = Object.keys(e);
    for (g = -1986 + -3 * -929 + -801; g < x.length; g++) A.indexOf(n = x[g]) >= 0 || (a[n] = e[n]);
    return a;
  }(i, UI);
  return tg(o, t);
}
function YI() {
  var i = {};
  i.detail = {}, i.bubbles = !(2 * 3036 + 52 * 94 + -10960), i.cancelable = !0;
  var o = new CustomEvent("_preact", i);
  this.dispatchEvent(o), this._vdom = YA(JI, og({}, this._props, { context: o.detail.context }), function t(e, A) {
    if (2557 + 1382 * 4 + 4041 * -2 === e.nodeType) return e.data;
    if (-1156 + 1 * -2949 + 1 * 4106 !== e.nodeType) return null;
    var n = [], g = {}, a = 3412 * -1 + -23 * 257 + 9323 * 1, x = e.attributes, r = e.childNodes;
    for (a = x.length; a--; ) x[a].name !== "slot" && (g[x[a].name] = x[a].value, g[sx(x[a].name)] = x[a].value);
    for (a = r.length; a--; ) {
      var C = t(r[a], null), I = r[a].slot;
      I ? g[I] = YA(Lg, { name: I }, C) : n[a] = C;
    }
    var Q = A ? YA(Lg, null, n) : n;
    return YA(A || e.nodeName.toLowerCase(), g, Q);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? eg : Oe)(this._vdom, this._root);
}
function sx(i) {
  return i.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function OI(i, o, t) {
  if (this._vdom) {
    var e = {};
    e[i] = t = t ?? void 0, e[sx(i)] = t, this._vdom = tg(this._vdom, e), Oe(this._vdom, this._root);
  }
}
function HI() {
  Oe(this._vdom = null, this._root);
}
function Lg(i, o) {
  var t = this;
  return YA("slot", og({}, i, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function KI(i, o, t, e) {
  function A() {
    var n = Reflect.construct(HTMLElement, [], A);
    return n._vdomComponent = i, n._root = n, n;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = YI, A.prototype.attributeChangedCallback = OI, A.prototype.disconnectedCallback = HI, t = t || i.observedAttributes || Object.keys(i.propTypes || {}), A.observedAttributes = t, t.forEach(function(n) {
    Object.defineProperty(A.prototype, n, { get: function() {
      return this._vdom.props[n];
    }, set: function(g) {
      this._vdom ? this.attributeChangedCallback(n, null, g) : (this._props || (this._props = {}), this._props[n] = g, this.connectedCallback());
      var a = typeof g;
      g != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, g);
    } });
  }), customElements.define(o, A);
}
var PI = -4956 + 1 * 219 + 4737;
function m(i, o, t, e, A, n) {
  o || (o = {});
  var g, a, x = o;
  if ("ref" in x)
    for (a in x = {}, o) a == "ref" ? g = o[a] : x[a] = o[a];
  var r = {};
  r.type = i, r.props = x, r.key = t, r.ref = g, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-67 * 32 + -148 * 50 + 2 * 4772), r.__c = null, r.constructor = void (8439 + -3 * -1346 + -12477 * 1), r.__v = --PI, r.__i = -1, r.__u = 0, r.__source = A, r.__self = n;
  var C = r;
  if (typeof i == "function" && (g = i.defaultProps))
    for (a in g) x[a] === void 0 && (x[a] = g[a]);
  return U.vnode && U.vnode(C), C;
}
var PA = function() {
  return PA = Object.assign || function(o) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]);
    }
    return o;
  }, PA.apply(this, arguments);
};
function Mt(i, o, t) {
  if (t || arguments.length === 2) for (var e = 0, A = o.length, n; e < A; e++)
    (n || !(e in o)) && (n || (n = Array.prototype.slice.call(o, 0, e)), n[e] = o[e]);
  return i.concat(n || Array.prototype.slice.call(o));
}
function TI(i) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = i(t)), o[t];
  };
}
var qI = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jI = TI(function(i) {
  return qI.test(i) || i.charCodeAt(-152 * -47 + 6677 + -13821) === 8522 + 1 * -8411 && i.charCodeAt(330 * -19 + -9497 + 15768) === 4 * -736 + -2186 * 4 + 11798 && i.charCodeAt(1596 + -797 * 2) < -191 + -3 * -3232 + -3 * 3138;
}), He, $, Si, Ug, Wt = -9674 + 7 * 1382, Bx = [], eA = U, Jg = eA.__b, Yg = eA.__r, Og = eA.diffed, Hg = eA.__c, Kg = eA.unmount, Pg = eA.__;
function Ht(i, o) {
  eA.__h && eA.__h($, i, Wt || o), Wt = -2 * 3251 + -4 * -1124 + 2006;
  var t = {};
  t.__ = [], t.__h = [];
  var e = $.__H || ($.__H = t);
  return i >= e.__.length && e.__.push({}), e.__[i];
}
function BA(i) {
  return Wt = 169 * 43 + -3 * -1609 + -12093, ig(dx, i);
}
function ig(i, o, t) {
  var e = Ht(He++, 2);
  if (e.t = i, !e.__c && (e.__ = [t ? t(o) : dx(void 0, o), function(a) {
    var x = e.__N ? e.__N[0] : e.__[0], r = e.t(x, a);
    x !== r && (e.__N = [r, e.__[-1 * 68 + -6695 + 6764]], e.__c.setState({}));
  }], e.__c = $, !$.u)) {
    var A = function(a, x, r) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(Q) {
        return !!Q.__c;
      });
      if (C.every(function(Q) {
        return !Q.__N;
      })) return !n || n.call(this, a, x, r);
      var I = !(-4003 * -2 + -525 * -9 + -12730);
      return C.forEach(function(Q) {
        if (Q.__N) {
          var s = Q.__[0];
          Q.__ = Q.__N, Q.__N = void 0, s !== Q.__[0] && (I = !0);
        }
      }), !(!I && e.__c.props === a) && (!n || n.call(this, a, x, r));
    };
    $.u = !(-188 * -53 + 2614 * -1 + -42 * 175);
    var n = $.shouldComponentUpdate, g = $.componentWillUpdate;
    $.componentWillUpdate = function(a, x, r) {
      if (this.__e) {
        var C = n;
        n = void (2989 + 1 * 2749 + -5738), A(a, x, r), n = C;
      }
      g && g.call(this, a, x, r);
    }, $.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function Z(i, o) {
  var t = Ht(He++, 3);
  !eA.__s && ng(t.__H, o) && (t.__ = i, t.i = o, $.__H.__h.push(t));
}
function Kt(i, o) {
  var t = Ht(He++, 4);
  !eA.__s && ng(t.__H, o) && (t.__ = i, t.i = o, $.__h.push(t));
}
function tA(i) {
  return Wt = -1865 + -1 * -1870, RA(function() {
    var o = {};
    return o.current = i, o;
  }, []);
}
function Qx(i, o, t) {
  Wt = -163 * 12 + -117 + 2079, Kt(function() {
    return typeof i == "function" ? (i(o()), function() {
      return i(null);
    }) : i ? (i.current = o(), function() {
      return i.current = null;
    }) : void (6021 * 1 + 7679 + -13700 * 1);
  }, t == null ? t : t.concat(i));
}
function RA(i, o) {
  var t = Ht(He++, 7);
  return ng(t.__H, o) && (t.__ = i(), t.__H = o, t.__h = i), t.__;
}
function qA(i, o) {
  return Wt = 16922 + -8457 * 2, RA(function() {
    return i;
  }, o);
}
function Fe(i) {
  var o = $.context[i.__c], t = Ht(He++, 2 * 1933 + -2360 + -1497);
  return t.c = i, o ? (t.__ == null && (t.__ = !(-7 * -587 + 8762 + -12871), o.sub($)), o.props.value) : i.__;
}
function wo(i, o) {
  eA.useDebugValue && eA.useDebugValue(o ? o(i) : i);
}
function Ex() {
  var i = Ht(He++, 11);
  if (!i.__) {
    for (var o = $.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [0, 0]);
    i.__ = "P" + t[-7717 * 1 + 4789 * 1 + 1 * 2928] + "-" + t[-4 * -2273 + 8099 + -17190]++;
  }
  return i.__;
}
function ZI() {
  for (var i; i = Bx.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(to), i.__H.__h.forEach(Xi), i.__H.__h = [];
  } catch (o) {
    i.__H.__h = [], eA.__e(o, i.__v);
  }
}
eA.__b = function(i) {
  $ = null, Jg && Jg(i);
}, eA.__ = function(i, o) {
  i && o.__k && o.__k.__m && (i.__m = o.__k.__m), Pg && Pg(i, o);
}, eA.__r = function(i) {
  Yg && Yg(i), He = -45 * -185 + 5394 + -13719 * 1;
  var o = ($ = i.__c).__H;
  o && (Si === $ ? (o.__h = [], $.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (o.__h.forEach(to), o.__h.forEach(Xi), o.__h = [], He = 5066 + 1 * 9565 + -14631)), Si = $;
}, eA.diffed = function(i) {
  Og && Og(i);
  var o = i.__c;
  o && o.__H && (o.__H.__h.length && (70 * -10 + 28 * -254 + -13 * -601 !== Bx.push(o) && Ug === eA.requestAnimationFrame || ((Ug = eA.requestAnimationFrame) || _I)(ZI)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), Si = $ = null;
}, eA.__c = function(i, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(to), t.__h = t.__h.filter(function(e) {
        return !e.__ || Xi(e);
      });
    } catch (e) {
      o.some(function(A) {
        A.__h && (A.__h = []);
      }), o = [], eA.__e(e, t.__v);
    }
  }), Hg && Hg(i, o);
}, eA.unmount = function(i) {
  Kg && Kg(i);
  var o, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      to(e);
    } catch (A) {
      o = A;
    }
  }), t.__H = void (-11394 + 1899 * 6), o && eA.__e(o, t.__v));
};
var Tg = typeof requestAnimationFrame == "function";
function _I(i) {
  var o, t = function() {
    clearTimeout(e), Tg && cancelAnimationFrame(o), setTimeout(i);
  }, e = setTimeout(t, 100);
  Tg && (o = requestAnimationFrame(t));
}
function to(i) {
  var o = $, t = i.__c;
  typeof t == "function" && (i.__c = void (-2316 + 17 * -343 + 8147), t()), $ = o;
}
function Xi(i) {
  var o = $;
  i.__c = i.__(), $ = o;
}
function ng(i, o) {
  return !i || i.length !== o.length || o.some(function(t, e) {
    return t !== i[e];
  });
}
function dx(i, o) {
  return typeof o == "function" ? o(i) : o;
}
function lx(i, o) {
  for (var t in o) i[t] = o[t];
  return i;
}
function $i(i, o) {
  for (var t in i) if (t !== "__source" && !(t in o)) return !(-71 * 57 + 4168 + -121);
  for (var e in o) if (e !== "__source" && i[e] !== o[e]) return !(-1 * -1916 + 4472 + -6388);
  return !(8827 + 1471 * -6);
}
function An(i, o) {
  this.props = i, this.context = o;
}
function VI(i, o) {
  function t(A) {
    var n = this.props.ref, g = n == A.ref;
    return !g && n && (n.call ? n(null) : n.current = null), o ? !o(this.props, A) || !g : $i(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, YA(i, A);
  }
  return e.displayName = "Memo(" + (i.displayName || i.name) + ")", e.prototype.isReactComponent = !(-1062 + -9 * -118), e.__f = !(1 * -3559 + -4530 + -8089 * -1), e;
}
(An.prototype = new ge()).isPureReactComponent = !(3491 + -683 * -12 + 11687 * -1), An.prototype.shouldComponentUpdate = function(i, o) {
  return $i(this.props, i) || $i(this.state, o);
};
var qg = U.__b;
U.__b = function(i) {
  i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), qg && qg(i);
};
var zI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -2434 + 423 * 15;
function ux(i) {
  function o(t) {
    var e = lx({}, t);
    return delete e.ref, i(e, t.ref || null);
  }
  return o.$$typeof = zI, o.render = o, o.prototype.isReactComponent = o.__f = !(-1 * -7311 + 1925 * 3 + -13086), o.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", o;
}
var jg = function(i, o) {
  return i == null ? null : Se(Se(i).map(o));
}, XI = { map: jg, forEach: jg, count: function(i) {
  return i ? Se(i).length : 0;
}, only: function(i) {
  var o = Se(i);
  if (-7641 + 19 * -398 + 2172 * 7 !== o.length) throw "Children.only";
  return o[-7863 + 1523 * 1 + -2 * -3170];
}, toArray: Se }, $I = U.__e;
U.__e = function(i, o, t, e) {
  if (i.then) {
    for (var A, n = o; n = n.__; ) if ((A = n.__c) && A.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), A.__c(i, o);
  }
  $I(i, o, t, e);
};
var Zg = U.unmount;
function hx(i, o, t) {
  return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), i.__c.__H = null), (i = lx({}, i)).__c != null && (i.__c.__P === t && (i.__c.__P = o), i.__c = null), i.__k = i.__k && i.__k.map(function(e) {
    return hx(e, o, t);
  })), i;
}
function fx(i, o, t) {
  return i && t && (i.__v = null, i.__k = i.__k && i.__k.map(function(e) {
    return fx(e, o, t);
  }), i.__c && i.__c.__P === o && (i.__e && t.appendChild(i.__e), i.__c.__e = !(9705 + 1769 * 5 + 1325 * -14), i.__c.__P = t)), i;
}
function oo() {
  this.__u = -13008 + -48 * -271, this.t = null, this.__b = null;
}
function px(i) {
  var o = i.__.__c;
  return o && o.__a && o.__a(i);
}
function AC(i) {
  var o, t, e;
  function A(n) {
    if (o || (o = i()).then(function(g) {
      t = g.default || g;
    }, function(g) {
      e = g;
    }), e) throw e;
    if (!t) throw o;
    return YA(t, n);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function A0() {
  this.u = null, this.o = null;
}
U.unmount = function(i) {
  var o = i.__c;
  o && o.__R && o.__R(), o && -935 + -13 * 13 + 71 * 16 & i.__u && (i.type = null), Zg && Zg(i);
}, (oo.prototype = new ge()).__c = function(i, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = px(e.__v), n = !(6002 + 1 * -2495 + 1753 * -2), g = function() {
    n || (n = !(1 * 199 + -5443 + 5244), t.__R = null, A ? A(a) : a());
  };
  t.__R = g;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var x = e.state.__a;
        e.__v.__k[-800 + -32 * -25] = fx(x, x.__c.__P, x.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || 2 * -1701 + 197 * -20 + -2 * -3687 & o.__u || e.setState({ __a: e.__b = e.__v.__k[2 * 196 + -1871 * -5 + -9747] }), i.then(g, g);
}, oo.prototype.componentWillUnmount = function() {
  this.t = [];
}, oo.prototype.render = function(i, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-3967 * 1 + 2278 + 1 * 1689].__c;
      this.__v.__k[-5697 + 199 * -13 + 2 * 4142] = hx(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = o.__a && YA(xe, null, i.fallback);
  return A && (A.__u &= -(-1924 + -1 * 4093 + -6050 * -1)), [YA(xe, null, o.__a ? null : i.children), A];
};
var _g = function(i, o, t) {
  if (++t[-1069 * 9 + -765 + 10387] === t[2754 + -3701 * 2 + -1 * -4648] && i.o.delete(o), i.props.revealOrder && (i.props.revealOrder[9 * 960 + 4658 + 1 * -13298] !== "t" || !i.o.size)) for (t = i.u; t; ) {
    for (; t.length > 67 * -34 + 1461 + -10 * -82; ) t.pop()();
    if (t[-575 * -15 + 1445 + -10069 * 1] < t[8589 * -1 + -12 * -33 + 1 * 8193]) break;
    i.u = t = t[13318 + -3329 * 4];
  }
};
function eC(i) {
  return this.getChildContext = function() {
    return i.context;
  }, i.children;
}
function tC(i) {
  var o = this, t = i.i;
  o.componentWillUnmount = function() {
    Oe(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(4982 * 2 + 3411 + -13375);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 9548 + -151 * 65 + 268, 3667 * 1 + -19 * -319 + -1 * 9727), o.i.removeChild(e);
  } }), Oe(YA(eC, { context: o.context }, i.__v), o.l);
}
function oC(i, o) {
  var t = {};
  t.__v = i, t.i = o;
  var e = YA(tC, t);
  return e.containerInfo = o, e;
}
(A0.prototype = new ge()).__a = function(i) {
  var o = this, t = px(o.__v), e = o.o.get(i);
  return e[60 * 141 + 1297 * -7 + -1 * -619]++, function(A) {
    var n = function() {
      o.props.revealOrder ? (e.push(A), _g(o, i, e)) : A();
    };
    t ? t(n) : n();
  };
}, A0.prototype.render = function(i) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Se(i.children);
  i.revealOrder && i.revealOrder[0] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [-1 * 1617 + 1 * -5654 + 7272, 4672 + -1127 * -2 + -6926, this.u]);
  return i.children;
}, A0.prototype.componentDidUpdate = A0.prototype.componentDidMount = function() {
  var i = this;
  this.o.forEach(function(o, t) {
    _g(i, t, o);
  });
};
var yx = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -18562 * -1 + -78908 * -1 + 43 * -869, iC = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, nC = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, gC = /[A-Z0-9]/g, aC = typeof document < "u", xC = function(i) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
};
function rC(i, o, t) {
  return o.__k == null && (o.textContent = ""), Oe(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
function IC(i, o, t) {
  return eg(i, o), typeof t == "function" && t(), i ? i.__c : null;
}
ge.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
  Object.defineProperty(ge.prototype, i, { configurable: !(-10667 + 10667 * 1), get: function() {
    return this["UNSAFE_" + i];
  }, set: function(o) {
    var t = {};
    t.configurable = !(66 * -97 + -1 * -1852 + 4550), t.writable = !(-1716 + 205 * 41 + -6689), t.value = o, Object.defineProperty(this, i, t);
  } });
});
var Vg = U.event;
function CC() {
}
function cC() {
  return this.cancelBubble;
}
function sC() {
  return this.defaultPrevented;
}
U.event = function(i) {
  return Vg && (i = Vg(i)), i.persist = CC, i.isPropagationStopped = cC, i.isDefaultPrevented = sC, i.nativeEvent = i;
};
var io = {};
io.enumerable = !(-1 * 7951 + 7849 * 1 + 103), io.configurable = !(-1 * 1733 + 3224 * 1 + -1491), io.get = function() {
  return this.class;
};
var gg, BC = io, zg = U.vnode;
U.vnode = function(i) {
  typeof i.type == "string" && function(o) {
    var t = o.props, e = o.type, A = {};
    for (var n in t) {
      var g = t[n];
      if (!(n === "value" && "defaultValue" in t && g == null || aC && n === "children" && e === "noscript" || n === "class" || n === "className")) {
        var a = n.toLowerCase();
        n === "defaultValue" && "value" in t && t.value == null ? n = "value" : n === "download" && !(6843 + -3 * -1097 + -10134) === g ? g = "" : a === "translate" && g === "no" ? g = !(-4 * 667 + -6946 + -3205 * -3) : a === "ondoubleclick" ? n = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || xC(t.type) ? a === "onfocus" ? n = "onfocusin" : a === "onblur" ? n = "onfocusout" : nC.test(n) ? n = a : -(-7167 + 623 * -15 + 16513) === e.indexOf("-") && iC.test(n) ? n = n.replace(gC, "-$&").toLowerCase() : g === null && (g = void (-867 * 11 + -6551 * 1 + 16088)) : a = n = "oninput", a === "oninput" && A[n = a] && (n = "oninputCapture"), A[n] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = Se(t.children).forEach(function(x) {
      x.props.selected = -(-1 * -8117 + -2640 + 1369 * -4) != A.value.indexOf(x.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = Se(t.children).forEach(function(x) {
      x.props.selected = A.multiple ? -(-2024 + 225 * 9) != A.defaultValue.indexOf(x.props.value) : A.defaultValue == x.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", BC)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), o.props = A;
  }(i), i.$$typeof = yx, zg && zg(i);
};
var Xg = U.__r;
U.__r = function(i) {
  Xg && Xg(i), gg = i.__c;
};
var $g = U.diffed;
U.diffed = function(i) {
  $g && $g(i);
  var o = i.props, t = i.__e;
  t != null && i.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), gg = null;
};
var hA = {};
hA.readContext = function(i) {
  return gg.__n[i.__c].props.value;
}, hA.useCallback = qA, hA.useContext = Fe, hA.useDebugValue = wo, hA.useDeferredValue = bx, hA.useEffect = Z, hA.useId = Ex, hA.useImperativeHandle = Qx, hA.useInsertionEffect = Gx, hA.useLayoutEffect = Kt, hA.useMemo = RA, hA.useReducer = ig, hA.useRef = tA, hA.useState = BA, hA.useSyncExternalStore = Sx, hA.useTransition = kx;
var Dx = {};
Dx.current = hA;
var mx = {};
mx.ReactCurrentDispatcher = Dx;
var QC = mx;
function EC(i) {
  return YA.bind(null, i);
}
function Ii(i) {
  return !!i && i.$$typeof === yx;
}
function dC(i) {
  return Ii(i) && i.type === xe;
}
function lC(i) {
  return !!i && !!i.displayName && (typeof i.displayName == "string" || i.displayName instanceof String) && i.displayName.startsWith("Memo(");
}
function uC(i) {
  return Ii(i) ? tg.apply(null, arguments) : i;
}
function hC(i) {
  return !!i.__k && (Oe(null, i), !0);
}
function fC(i) {
  return i && (i.base || 1241 * 1 + 129 * 67 + -9883 === i.nodeType && i) || null;
}
var pC = function(i, o) {
  return i(o);
}, yC = function(i, o) {
  return i(o);
}, DC = xe;
function wx(i) {
  i();
}
function bx(i) {
  return i;
}
function kx() {
  return [!(1 * -8611 + 5827 + -1 * -2785), wx];
}
var Gx = Kt, mC = Ii;
function Sx(i, o) {
  var t = o(), e = BA({ h: { __: t, v: o } }), A = e[3174 + 19 * 1 + 3193 * -1].h, n = e[-2169 + 1571 * 2 + -27 * 36];
  return Kt(function() {
    A.__ = t, A.v = o, Ni(A) && n({ h: A });
  }, [i, t, o]), Z(function() {
    return Ni(A) && n({ h: A }), i(function() {
      Ni(A) && n({ h: A });
    });
  }, [i]), t;
}
function Ni(i) {
  var o, t, e = i.v, A = i.__;
  try {
    var n = e();
    return !((o = A) === (t = n) && (8559 + -9 * 951 !== o || (-2753 + 1 * 4979 + 1 * -2225) / o == (-142 * 31 + 7 * -857 + -743 * -14) / t) || o != o && t != t);
  } catch {
    return !(2353 + 5 * 1520 + -1 * 9953);
  }
}
var L = {};
L.useState = BA, L.useId = Ex, L.useReducer = ig, L.useEffect = Z, L.useLayoutEffect = Kt, L.useInsertionEffect = Gx, L.useTransition = kx, L.useDeferredValue = bx, L.useSyncExternalStore = Sx, L.startTransition = wx, L.useRef = tA, L.useImperativeHandle = Qx, L.useMemo = RA, L.useCallback = qA, L.useContext = Fe, L.useDebugValue = wo, L.version = "17.0.2", L.Children = XI, L.render = rC, L.hydrate = IC, L.unmountComponentAtNode = hC, L.createPortal = oC, L.createElement = YA, L.createContext = st, L.createFactory = EC, L.cloneElement = uC, L.createRef = RI, L.Fragment = xe, L.isValidElement = Ii, L.isElement = mC, L.isFragment = dC, L.isMemo = lC, L.findDOMNode = fC, L.Component = ge, L.PureComponent = An, L.memo = VI, L.forwardRef = ux, L.flushSync = yC, L.unstable_batchedUpdates = pC, L.StrictMode = DC, L.Suspense = oo, L.SuspenseList = A0, L.lazy = AC, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QC;
var xt = L, wC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bC(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function kC(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function GC(i) {
  return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i;
}
function SC(i) {
  if (i.__esModule) return i;
  var o = i.default;
  if (typeof o == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
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
const NC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: wC,
  getAugmentedNamespace: SC,
  getDefaultExportFromCjs: bC,
  getDefaultExportFromNamespaceIfNotNamed: GC,
  getDefaultExportFromNamespaceIfPresent: kC
}, Symbol.toStringTag, { value: "Module" }));
var FC = function(o, t, e, A) {
  var n = e ? e.call(A, o, t) : void 0;
  if (n !== void 0) return !!n;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var g = Object.keys(o), a = Object.keys(t);
  if (g.length !== a.length) return !1;
  for (var x = Object.prototype.hasOwnProperty.bind(t), r = -1 * -949 + -3502 * 1 + 2553; r < g.length; r++) {
    var C = g[r];
    if (!x(C)) return !1;
    var I = o[C], Q = t[C];
    if (n = e ? e.call(A, I, Q, C) : void (-4074 + 9863 * 1 + -5789), n === !1 || n === void (7649 * 1 + -11 * -281 + -10 * 1074) && I !== Q) return !1;
  }
  return !0;
};
const RC = NC.getDefaultExportFromCjs(FC);
var X = "-ms-", I0 = "-moz-", j = "-webkit-", Nx = "comm", Ci = "rule", ag = "decl", MC = "@import", Fx = "@keyframes", WC = "@layer", Rx = Math.abs, xg = String.fromCharCode, en = Object.assign;
function vC(i, o) {
  return EA(i, 3772 + 3772 * -1) ^ -29 + 9509 * -1 + -7 * -1369 ? (((o << -3 * 2500 + 3129 + -1 * -4373 ^ EA(i, 1380 * 7 + -5749 + -3911)) << -8557 + 3 * 2853 ^ EA(i, -1 * 3867 + 7330 + -3462)) << -9003 + -1 * -9005 ^ EA(i, 2136 + 19 * -418 + 5808)) << 1 * -3398 + -1 * -2746 + 3 * 218 ^ EA(i, -1 * 5099 + 2614 + 1244 * 2) : 878 * 7 + -8684 + 2538;
}
function Mx(i) {
  return i.trim();
}
function me(i, o) {
  return (i = o.exec(i)) ? i[9413 * 1 + 361 + -9774] : i;
}
function J(i, o, t) {
  return i.replace(o, t);
}
function no(i, o, t) {
  return i.indexOf(o, t);
}
function EA(i, o) {
  return i.charCodeAt(o) | -13 * 388 + 3760 + 3 * 428;
}
function vt(i, o, t) {
  return i.slice(o, t);
}
function ue(i) {
  return i.length;
}
function Wx(i) {
  return i.length;
}
function e0(i, o) {
  return o.push(i), i;
}
function LC(i, o) {
  return i.map(o).join("");
}
function Aa(i, o) {
  return i.filter(function(t) {
    return !me(t, o);
  });
}
var ci = 54 * 151 + 3747 * 2 + -15647 * 1, Lt = 6741 + -20 * 337, vx = 8857 + 17 * -521, re = 7636 + -5695 * -1 + -13331, xA = -863 + -1 * -863, Pt = "";
function si(i, o, t, e, A, n, g, a) {
  var x = {};
  return x.value = i, x.root = o, x.parent = t, x.type = e, x.props = A, x.children = n, x.line = ci, x.column = Lt, x.length = g, x.return = "", x.siblings = a, x;
}
function We(i, o) {
  return en(si("", null, null, "", null, null, -1 * -4973 + -6247 + -91 * -14, i.siblings), i, { length: -i.length }, o);
}
function dt(i) {
  for (; i.root; ) i = We(i.root, { children: [i] });
  e0(i, i.siblings);
}
function UC() {
  return xA;
}
function JC() {
  return xA = re > 0 ? EA(Pt, --re) : -1 * 8375 + -7934 + 16309, Lt--, xA === 1923 * -2 + -234 * 24 + 9472 && (Lt = 3185 + 1189 * -3 + 383 * 1, ci--), xA;
}
function se() {
  return xA = re < vx ? EA(Pt, re++) : 1 * -8354 + 2237 * -1 + 10591, Lt++, xA === 1 * -97 + -220 * -25 + -5393 && (Lt = -48 * 1 + -3761 + 3810, ci++), xA;
}
function nt() {
  return EA(Pt, re);
}
function go() {
  return re;
}
function Bi(i, o) {
  return vt(Pt, i, o);
}
function tn(i) {
  switch (i) {
    case -2637 + -1 * -5011 + -1187 * 2:
    case -8217 + -404 * 9 + 11862:
    case 4625 + -34 * 133 + 3 * -31:
    case 4 * -1 + -4 * -1871 + -7467 * 1:
    case -1 * 2642 + 126 + 2548:
      return 5;
    case -641 * -4 + 9314 + -11845:
    case -8862 * 1 + -2 * 1613 + 12131:
    case 1175 + 6773 * -1 + -31 * -182:
    case 648 + -47 * -70 + 3 * -1297:
    case 62:
    case -5399 + -51 * -127 + -1 * 1014:
    case -641 * -8 + -93 * -55 + -10117:
    case 59:
    case 13 * 678 + 55 * -37 + -6656:
    case 125:
      return -9369 + 316 * 11 + 5897;
    case -2 * -1407 + -1061 * 1 + -1695:
      return 1 * 4618 + 5711 * -1 + 1096;
    case -1168 * -1 + 6192 + -6 * 1221:
    case 4478 * 1 + -5114 + 675:
    case 169 * 13 + 1936 + 4093 * -1:
    case 1 * -2016 + 43 * -97 + -73 * -86:
      return -6316 + 1209 * -6 + 13572;
    case 8372 + -2 * 1231 + 1 * -5869:
    case 93:
      return -1 * 9322 + -781 + 10104;
  }
  return 1995 + -122 * -40 + -11 * 625;
}
function YC(i) {
  return ci = Lt = 1, vx = ue(Pt = i), re = 1 * -5657 + -7337 + 12994, [];
}
function OC(i) {
  return Pt = "", i;
}
function Fi(i) {
  return Mx(Bi(re - (-31 * 119 + -253 * -24 + -2382), on(i === 2833 * 1 + 4 * 25 + -2842 ? i + (-7111 * -1 + 4378 + -547 * 21) : i === -3050 * -2 + 1317 + -7377 ? i + (-5763 + 169 * -26 + 10158) : i)));
}
function HC(i) {
  for (; (xA = nt()) && xA < -298 * 29 + 16 * 355 + -599 * -5; ) se();
  return tn(i) > -22 * -321 + 5234 + -12294 || tn(xA) > 13173 + 3 * -4390 ? "" : " ";
}
function KC(i, o) {
  for (; --o && se() && !(xA < 1 * 4479 + 1175 * -5 + -76 * -19 || xA > 171 * 9 + 2762 + -4199 || xA > -1 * 8237 + -8724 + 17018 && xA < -1 * 10 + 5361 + -5286 || xA > 3237 + 4 * 1923 + -10859 && xA < -69 * 101 + 9524 + -1229 * 2); ) ;
  return Bi(i, go() + (o < 6 && nt() == -15813 + -1 * -15845 && se() == 1 * -8156 + -2780 + 6 * 1828));
}
function on(i) {
  for (; se(); ) switch (xA) {
    case i:
      return re;
    case 1 * -8417 + 39 * -169 + -6 * -2507:
    case 5 * -232 + 21 * 458 + 1 * -8419:
      i !== 34 && i !== 39 && on(xA);
      break;
    case 3788 * 1 + -2755 + 993 * -1:
      i === 11330 + -3 * 3763 && on(i);
      break;
    case -8050 + -354 * -23:
      se();
      break;
  }
  return re;
}
function PC(i, o) {
  for (; se() && i + xA !== 256 + -1 * 5500 + 5291 + (-8704 + 536 * -12 + 15146); ) if (i + xA === -2 * -3202 + -3152 * -1 + -9514 + (4589 + 4547 * -1) && nt() === 47) break;
  return "/*" + Bi(o, re - (6139 + -321 * 6 + -4212)) + "*" + xg(i === 6869 * -1 + 104 * -5 + 7436 ? i : se());
}
function TC(i) {
  for (; !tn(nt()); ) se();
  return Bi(i, re);
}
function qC(i) {
  return OC(ao("", null, null, null, [""], i = YC(i), 14 * -473 + -9796 * -1 + -3174, [1203 + -111 * 5 + -648 * 1], i));
}
function ao(i, o, t, e, A, n, g, a, x) {
  for (var r = 0, C = -2458 * -2 + 112 * 47 + 1 * -10180, I = g, Q = 3189 * 1 + -2161 + 2 * -514, s = -3 * -289 + -6661 + 5794, E = -10669 + -10669 * -1, d = 5 * -843 + 2 * 1783 + 650, u = -9343 * -1 + -1 * 5218 + -4124, c = -8 * -443 + -2699 * 1 + -4 * 211, h = 0, p = "", w = A, k = n, R = e, N = p; u; ) switch (E = h, h = se()) {
    case -3055 * -1 + 57 * -44 + 39 * -13:
      if (E != 461 * -15 + -1573 + 8596 && EA(N, I - (2345 * 1 + 511 * 17 + -11031)) == 10711 + -3 * 3551) {
        no(N += J(Fi(h), "&", "&\f"), "&\f", Rx(r ? a[r - (-2 * 911 + 8823 + -25 * 280)] : -661 * 9 + 2088 + -3 * -1287)) != -(-985 * -5 + -10 * 380 + -1124) && (c = -1);
        break;
      }
    case -79 * -101 + -5455 + 830 * -3:
    case -5803 + 1 * -3559 + 9401:
    case 6321 + 89 * -70:
      N += Fi(h);
      break;
    case 3004 + -1 * 2995:
    case 1 * 9974 + 9328 + -14 * 1378:
    case 169 + -1 * -747 + 3 * -301:
    case 198 * -12 + 1 * 2061 + 1 * 347:
      N += HC(E);
      break;
    case 3350 + -3 * 3074 + 5964:
      N += KC(go() - (6137 + -2 * -678 + -7492), 7);
      continue;
    case -1007 * -4 + 1366 * 2 + -6713:
      switch (nt()) {
        case 147 * -41 + 2676 + -87 * -39:
        case -7 * 305 + -8753 * -1 + -6571:
          e0(jC(PC(se(), go()), o, t, x), x);
          break;
        default:
          N += "/";
      }
      break;
    case (-3117 * -2 + 1 * -1183 + -4928) * d:
      a[r++] = ue(N) * c;
    case (9403 + 53 * -158 + -904) * d:
    case 8936 + -6567 * 1 + -2310 * 1:
    case 2406 * -3 + 1441 * -2 + -1 * -10100:
      switch (h) {
        case -233 * -33 + -4509 + 318 * -10:
        case -8 * -396 + 3 * -387 + -1 * 1882:
          u = 0;
        case 2 * -3227 + 16 * -198 + 9681 + C:
          c == -(-6081 + -1 * -2903 + 3179) && (N = J(N, /\f/g, "")), s > 0 && ue(N) - I && e0(s > 4538 * 1 + 159 * -56 + 4398 ? ta(N + ";", e, t, I - (112 * -9 + 4284 + -3275), x) : ta(J(N, " ", "") + ";", e, t, I - (-1316 + -227 * 20 + 5858), x), x);
          break;
        case -39 * 152 + -2 * -1977 + 2033 * 1:
          N += ";";
        default:
          if (e0(R = ea(N, o, t, r, C, A, a, p, w = [], k = [], I, n), n), h === 2819 * 1 + 1 * 9209 + -11905)
            if (C === 306 * -28 + -4821 * 1 + -4463 * -3) ao(N, o, R, R, w, n, I, a, k);
            else switch (Q === 25 * -263 + 1 * 9155 + 2481 * -1 && EA(N, 4220 + -757 * 5 + 216 * -2) === -8165 * 1 + -1 * 7969 + 4 * 4061 ? 1 * -1181 + -1 * -7575 + -6294 : Q) {
              case 5313 + -6481 * 1 + -634 * -2:
              case -1 * 9113 + 3739 + 5482:
              case 1 * -8281 + 4826 + 3564:
              case 3 * -1093 + 2017 * -1 + 7 * 773:
                ao(i, R, R, e && e0(ea(i, R, R, 9774 + -9774 * 1, 9471 * 1 + -9479 + 8 * 1, A, a, p, A, w = [], I, k), k), A, k, I, a, e ? w : k);
                break;
              default:
                ao(N, R, R, R, [""], k, -7 * 2 + -8877 + 8891, a, k);
            }
      }
      r = C = s = 37 * -105 + -3330 + 7215, d = c = 1, p = N = "", I = g;
      break;
    case 58:
      I = 1 + ue(N), s = E;
    default:
      if (d < 753 * 3 + -1 * -2581 + 1613 * -3) {
        if (h == 9113 + -8798 * -1 + -17788) --d;
        else if (h == -1973 + 186 * -8 + 3586 * 1 && d++ == 0 && JC() == 125) continue;
      }
      switch (N += xg(h), h * d) {
        case -79 * -5 + 9286 * 1 + -1 * 9643:
          c = C > -1 * -7666 + -304 + 818 * -9 ? 1911 * -2 + -1 * 7445 + 11268 : (N += "\f", -(-137 * 21 + 3 * -477 + -31 * -139));
          break;
        case -19 * 33 + 19 * 7 + -1 * -538:
          a[r++] = (ue(N) - (1 * 9497 + -2475 + -7021)) * c, c = -1245 * -1 + 1 * -5605 + 623 * 7;
          break;
        case 7942 * 1 + -25 * 257 + -1453:
          nt() === 45 && (N += Fi(se())), Q = nt(), C = I = ue(p = N += TC(go())), h++;
          break;
        case -1 * -6909 + 2 * 2890 + 4 * -3161:
          E === 2 * 3529 + -67 * -21 + -4210 * 2 && ue(N) == -131 * 7 + -3313 * -3 + -9020 && (d = 0);
      }
  }
  return n;
}
function ea(i, o, t, e, A, n, g, a, x, r, C, I) {
  for (var Q = A - 1, s = A === 57 * 5 + -2458 * 4 + 9547 ? n : [""], E = Wx(s), d = 3 * -206 + -1853 + 2471, u = 2 * 1474 + -393 * 3 + -1769, c = 226 * 1 + 5609 + -5835; d < e; ++d) for (var h = 0, p = vt(i, Q + (-6 * -1065 + 9302 + -15691), Q = Rx(u = g[d])), w = i; h < E; ++h) (w = Mx(u > 4752 + 2 * -423 + 18 * -217 ? s[h] + " " + p : J(p, /&\f/g, s[h]))) && (x[c++] = w);
  return si(i, o, t, A === 1976 + -5680 * -1 + -7656 ? Ci : a, x, r, C, I);
}
function jC(i, o, t, e) {
  return si(i, o, t, Nx, xg(UC()), vt(i, 1818 + -4 * 1963 + 6036, -(729 * -3 + 4921 + 2732 * -1)), 1 * 7167 + -1908 + 1753 * -3, e);
}
function ta(i, o, t, e, A) {
  return si(i, o, t, ag, vt(i, -267 * -8 + 718 + 2 * -1427, e), vt(i, e + (1790 * -1 + 2499 + -708), -(9909 + -1 * 5223 + -4685)), e, A);
}
function Lx(i, o, t) {
  switch (vC(i, o)) {
    case -3 * 131 + 9693 + 1 * -4197:
      return j + "print-" + i + i;
    case 5981 + -46 * 8 + 124:
    case -2 * -1030 + 9085 + -6944:
    case 7149 + 8966 * 1 + 6469 * -2:
    case -11641 + -2 * -7537:
    case 7642 * 1 + -1130 + 1 * -4871:
    case 45 * -66 + -6068 + 13495 * 1:
    case -4117 + -1 * -3503 + 3535:
    case 1 * -8741 + 1017 * -5 + 19398:
    case 9277 + -9 * 853 + -29 * -164:
    case -2954 * -3 + -4473 + 1455:
    case -15 * 413 + -9232 + 174 * 107:
    case -11779 * 1 + -2791 + 4243 * 5:
    case 11545 + 20 * -427:
    case -3 * -929 + 4344 + 148 * -5:
    case 3 * -2953 + 5136 + 9602:
    case 1 * -262 + 7189 + -1304:
    case -12237 + 10369 * -1 + -41 * -701:
    case 3 * 303 + 1002 * -2 + 5694:
    case -1735 * 5 + -3 * 57 + 4567 * 3:
    case -1908 + 93 * -43 + 5061 * 2:
    case -5459 + -3452 * -2 + 4944:
    case 9780 + -1303 * -3 + -8580:
    case 98 + 1 * 5267:
    case 5621:
    case 3829:
      return j + i + i;
    case 4789:
      return I0 + i + i;
    case 2790 + -853 * -3:
    case 2593 + -7818 * 1 + 9471:
    case -24 * -63 + 6446 + -4 * 787:
    case -16787 + 5 * 4751:
    case 1193 + 1137 * 7 + -123 * 52:
      return j + i + I0 + i + X + i + i;
    case 89 * -77 + 3269 + -140 * -68:
      switch (EA(i, o + (7793 + -169 * 13 + -5585))) {
        case -4482 + -1 * 581 + 5177:
          return j + i + X + J(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case -2 * -4673 + 1 * 9041 + -18279:
          return j + i + X + J(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case -211 * 47 + -15 * -587 + 13 * 89:
          return j + i + X + J(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 37 * 50 + -1 * -10256 + 7 * -754:
    case -6234 * -1 + -2575 + 609:
    case -44 * -65 + -2809 + 2852:
      return j + i + X + i + i;
    case 1597 + -2 * -2284:
      return j + i + X + "flex-" + i + i;
    case -7490 * 1 + 1 * -8258 + 20935:
      return j + i + J(i, /(\w+).+(:[^]+)/, j + "box-$1$2" + X + "flex-$1$2") + i;
    case 25 * -276 + -1663 * 1 + 47 * 298:
      return j + i + X + "flex-item-" + J(i, /flex-|-self/g, "") + (me(i, /flex-|baseline/) ? "" : X + "grid-row-" + J(i, /flex-|-self/g, "")) + i;
    case 9 * -31 + -505 * 11 + 10509:
      return j + i + X + "flex-line-pack" + J(i, /align-content|flex-|-self/g, "") + i;
    case 1721 + 1 * -4191 + 8018:
      return j + i + X + J(i, "shrink", "negative") + i;
    case 12759 + -2489 * 3:
      return j + i + X + J(i, "basis", "preferred-size") + i;
    case -8623 + 10537 * 1 + -6 * -691:
      return j + "box-" + J(i, "-grow", "") + j + i + X + J(i, "grow", "positive") + i;
    case -812 * -9 + 38 * 125 + -7504:
      return j + J(i, /([^-])(transform)/g, "$1" + j + "$2") + i;
    case -8155 + -10 * -1148 + 2862:
      return J(J(J(i, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), i, "") + i;
    case -2798 * 1 + -8814 + 17107 * 1:
    case 1929 * -3 + -1 * 9029 + -5 * -3755:
      return J(i, /(image-set\([^]*)/, j + "$1$`$1");
    case -19186 + 2 * 12077:
      return J(J(i, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + X + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + i + i;
    case 131 * -7 + -9134 + -14251 * -1:
      if (!me(i, /flex-|baseline/)) return X + "grid-column-align" + vt(i, o) + i;
      break;
    case -252 + 137 * -1 + 1 * 2981:
    case 3360:
      return X + J(i, "template-", "") + i;
    case 43 * 8 + 2283 * -2 + 13 * 662:
    case 8291 * 1 + -236 * 9 + -2551:
      return t && t.some(function(e, A) {
        return o = A, me(e.props, /grid-\w+-end/);
      }) ? ~no(i + (t = t[o].value), "span", 25 * 17 + 7191 + -7616) ? i : X + J(i, "-start", "") + i + X + "grid-row-span:" + (~no(t, "span", 556 * -8 + -7479 * 1 + 11927) ? me(t, /\d+/) : +me(t, /\d+/) - +me(i, /\d+/)) + ";" : X + J(i, "-start", "") + i;
    case 12 * 446 + -3177 + 2721:
    case 1 * -9580 + 8232 + 5476:
      return t && t.some(function(e) {
        return me(e.props, /grid-\w+-start/);
      }) ? i : X + J(J(i, "-end", "-span"), "span ", "") + i;
    case 8967 + 1 * 9281 + -14153:
    case 2 * -4 + 3695 + -104:
    case 5 * -1649 + -3 * 461 + 13696:
    case 2532:
      return J(i, /(.+)-inline(.+)/, j + "$1$2") + i;
    case 9155 + 1 * -4471 + -22 * -156:
    case 7059:
    case -7207 + 288 * 45:
    case -1929 * -3 + -10598 + -7 * -1478:
    case 5445:
    case 1854 * 1 + 6241 + -2394:
    case -6874 + -344 * -1 + -1 * -11463:
    case 5063 + -7274 * -1 + 7660 * -1:
    case 1 * 1883 + -20 * -56 + 110 * 23:
    case 7994 + 441 * -5:
    case -11 * -128 + -3274 + 97 * 71:
    case 7712 + -5169 * 1 + 2 * 1111:
      if (ue(i) - (-343 + -95 * 5 + 3 * 273) - o > -4749 * -2 + -3 * 2495 + -2007) switch (EA(i, o + (1930 * 1 + 151 * 51 + -9630))) {
        case -8189 * 1 + 1 * -5877 + 189 * 75:
          if (EA(i, o + (77 * -123 + -8652 + 18127)) !== -9 * 61 + 9 * -1073 + -1139 * -9) break;
        case 3429 + -236 * 2 + 571 * -5:
          return J(i, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + I0 + (EA(i, o + (1594 + -37 * 43)) == -3 * -839 + -991 + -1418 ? "$3" : "$2-$3")) + i;
        case 6805 * 1 + 1 * 528 + -18 * 401:
          return ~no(i, "stretch", 9273 + -1 * -4019 + 3323 * -4) ? Lx(J(i, "stretch", "fill-available"), o, t) + i : i;
      }
      break;
    case -1327 * -3 + -46 * 47 + -11 * -303:
    case -7311 * -1 + -2881 + 1490:
      return J(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, n, g, a, x, r) {
        return X + A + ":" + n + r + (g ? X + A + "-span:" + (a ? x : +x - +n) + r : "") + i;
      });
    case -1 * -143 + -1851 + 6657:
      if (EA(i, o + (101 * -27 + 670 + 2063)) === 10 * -807 + -1221 * -3 + 4528) return J(i, ":", ":" + j) + i;
      break;
    case 6444:
      switch (EA(i, EA(i, -157 * 15 + -3 * 425 + 3644) === 6526 * -1 + -16 * 490 + 1 * 14411 ? -1193 * 7 + 5586 + 23 * 121 : 7382 + -15 * 342 + -2241 * 1)) {
        case 120:
          return J(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + j + (EA(i, 266 * -35 + -4811 * -1 + 1 * 4513) === -11992 + 1 * 12037 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + X + "$2box$3") + i;
        case 100:
          return J(i, ":", ":" + X) + i;
      }
      break;
    case 5719:
    case -5611 * -1 + 277 * 5 + 4349 * -1:
    case -5210 + -1469 * -5:
    case 6151 + 314 * -7 + -26:
    case 14836 + -1 * 12445:
      return J(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function bo(i, o) {
  for (var t = "", e = 5014 * -1 + -59 * -167 + -4839; e < i.length; e++) t += o(i[e], e, i, o) || "";
  return t;
}
function ZC(i, o, t, e) {
  switch (i.type) {
    case WC:
      if (i.children.length) break;
    case MC:
    case ag:
      return i.return = i.return || i.value;
    case Nx:
      return "";
    case Fx:
      return i.return = i.value + "{" + bo(i.children, e) + "}";
    case Ci:
      if (!ue(i.value = i.props.join(","))) return "";
  }
  return ue(t = bo(i.children, e)) ? i.return = i.value + "{" + t + "}" : "";
}
function _C(i) {
  var o = Wx(i);
  return function(t, e, A, n) {
    for (var g = "", a = -6165 + -4733 * -1 + 8 * 179; a < o; a++) g += i[a](t, e, A, n) || "";
    return g;
  };
}
function VC(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function zC(i, o, t, e) {
  if (i.length > -(-3830 + -1277 * -3) && !i.return)
    switch (i.type) {
      case ag:
        i.return = Lx(i.value, i.length, t);
        return;
      case Fx:
        return bo([We(i, { value: J(i.value, "@", "@" + j) })], e);
      case Ci:
        if (i.length) return LC(t = i.props, function(A) {
          switch (me(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              dt(We(i, { props: [J(A, /:(read-\w+)/, ":" + I0 + "$1")] }));
              var n = {};
              n.props = [A], dt(We(i, n)), en(i, { props: Aa(t, e) });
              break;
            case "::placeholder":
              dt(We(i, { props: [J(A, /:(plac\w+)/, ":" + j + "input-$1")] })), dt(We(i, { props: [J(A, /:(plac\w+)/, ":" + I0 + "$1")] })), dt(We(i, { props: [J(A, /:(plac\w+)/, X + "input-$1")] }));
              var g = {};
              g.props = [A], dt(We(i, g)), en(i, { props: Aa(t, e) });
              break;
          }
          return "";
        });
    }
}
var W = {};
W.animationIterationCount = 1, W.aspectRatio = 1, W.borderImageOutset = 1, W.borderImageSlice = 1, W.borderImageWidth = 1, W.boxFlex = 1, W.boxFlexGroup = 1, W.boxOrdinalGroup = 1, W.columnCount = 1, W.columns = 1, W.flex = 1, W.flexGrow = 1, W.flexPositive = 1, W.flexShrink = 1, W.flexNegative = 1, W.flexOrder = 1, W.gridRow = 1, W.gridRowEnd = 1, W.gridRowSpan = 1, W.gridRowStart = 1, W.gridColumn = 1, W.gridColumnEnd = 1, W.gridColumnSpan = 1, W.gridColumnStart = 1, W.msGridRow = 1, W.msGridRowSpan = 1, W.msGridColumn = 1, W.msGridColumnSpan = 1, W.fontWeight = 1, W.lineHeight = 1, W.opacity = 1, W.order = 1, W.orphans = 1, W.tabSize = 1, W.widows = 1, W.zIndex = 1, W.zoom = 1, W.WebkitLineClamp = 1, W.fillOpacity = 1, W.floodOpacity = 1, W.stopOpacity = 1, W.strokeDasharray = 1, W.strokeDashoffset = 1, W.strokeMiterlimit = 1, W.strokeOpacity = 1, W.strokeWidth = 1;
var XC = W, q = {}, rt = typeof process < "u" && void (-4253 + -9767 * 1 + -2804 * -5) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Ux = "active", Jx = "data-styled-version", Qi = "6.1.11", rg = `/*!sc*/
`, Ig = typeof window < "u" && "HTMLElement" in window, $C = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (191 * 27 + 508 + -5665 * 1) !== q && void (-1 * -2917 + 9523 + -12440) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-3304 + 9569 * 1 + -6265) !== q && void (-1904 + -1 * 6917 + 8821) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), oa = /invalid hook call/i, Z0 = /* @__PURE__ */ new Set(), Ac = function(i, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(i).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var n = !0;
      console.error = function(g) {
        for (var a = [], x = 17 * 61 + -911 * 3 + 1697; x < arguments.length; x++) a[x - (-1623 * 1 + 7829 * 1 + -85 * 73)] = arguments[x];
        oa.test(g) ? (n = !1, Z0.delete(e)) : A.apply(void 0, Mt([g], a, !1));
      }, tA(), n && !Z0.has(e) && (console.warn(e), Z0.add(e));
    } catch (g) {
      oa.test(g.message) && Z0.delete(e);
    } finally {
      console.error = A;
    }
  }
}, Ei = Object.freeze([]), Ut = Object.freeze({});
function ec(i, o, t) {
  return void (13787 + -811 * 17) === t && (t = Ut), i.theme !== t.theme && i.theme || o || t.theme;
}
var nn = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), tc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oc = /(^-|-$)/g;
function ia(i) {
  return i.replace(tc, "-").replace(oc, "");
}
var ic = /(a)(d)/gi, _0 = 9158 + 226 * 2 + -1593 * 6, na = function(i) {
  return String.fromCharCode(i + (i > -3974 + -2311 * -2 + -1 * 623 ? 19 * 457 + -263 * -29 + -16271 : 9157 + -2 * -4474 + -18008));
};
function gn(i) {
  var o, t = "";
  for (o = Math.abs(i); o > _0; o = o / _0 | 4324 + 47 * -92) t = na(o % _0) + t;
  return (na(o % _0) + t).replace(ic, "$1-$2");
}
var Ri, Yx = 4 * -161 + 5943 + 82, Ve = function(i, o) {
  for (var t = o.length; t; ) i = (15127 + 7547 * -2) * i ^ o.charCodeAt(--t);
  return i;
}, Ox = function(i) {
  return Ve(Yx, i);
};
function nc(i) {
  return gn(Ox(i) >>> 2 * -1714 + 8045 + -4617);
}
function Hx(i) {
  return q.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Mi(i) {
  return typeof i == "string" && (q.NODE_ENV === "production" || i.charAt(-2191 * 1 + -272 + 2463 * 1) === i.charAt(-65 * 61 + 7993 * 1 + -4028).toLowerCase());
}
var XA = {};
XA.childContextTypes = !0, XA.contextType = !0, XA.contextTypes = !0, XA.defaultProps = !0, XA.displayName = !0, XA.getDefaultProps = !0, XA.getDerivedStateFromError = !0, XA.getDerivedStateFromProps = !0, XA.mixins = !0, XA.propTypes = !0, XA.type = !0;
var ve = {};
ve.name = !0, ve.length = !0, ve.prototype = !0, ve.caller = !0, ve.callee = !0, ve.arguments = !0, ve.arity = !0;
var Ze = {};
Ze.$$typeof = !0, Ze.compare = !0, Ze.defaultProps = !0, Ze.displayName = !0, Ze.propTypes = !0, Ze.type = !0;
var ft = {};
ft.$$typeof = !0, ft.render = !0, ft.defaultProps = !0, ft.displayName = !0, ft.propTypes = !0;
var Kx = typeof Symbol == "function" && Symbol.for, Px = Kx ? Symbol.for("react.memo") : -3 * -21554 + 67649 + -72196, gc = Kx ? Symbol.for("react.forward_ref") : 1 * 1919 + -93535 + -29 * -5232, ac = XA, xc = ve, Tx = Ze, rc = ((Ri = {})[gc] = ft, Ri[Px] = Tx, Ri);
function ga(i) {
  return ("type" in (o = i) && o.type.$$typeof) === Px ? Tx : "$$typeof" in i ? rc[i.$$typeof] : ac;
  var o;
}
var Ic = Object.defineProperty, Cc = Object.getOwnPropertyNames, aa = Object.getOwnPropertySymbols, cc = Object.getOwnPropertyDescriptor, sc = Object.getPrototypeOf, xa = Object.prototype;
function qx(i, o, t) {
  if (typeof o != "string") {
    if (xa) {
      var e = sc(o);
      e && e !== xa && qx(i, e, t);
    }
    var A = Cc(o);
    aa && (A = A.concat(aa(o)));
    for (var n = ga(i), g = ga(o), a = -1207 + -453 * 3 + 2566; a < A.length; ++a) {
      var x = A[a];
      if (!(x in xc || t && t[x] || g && x in g || n && x in n)) {
        var r = cc(o, x);
        try {
          Ic(i, x, r);
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
function Cg(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function Xe(i, o) {
  return i && o ? "".concat(i, " ").concat(o) : i || o || "";
}
function ra(i, o) {
  if (-75 * 20 + -4604 + 8 * 763 === i.length) return "";
  for (var t = i[884 + -2 * -69 + -1022], e = 9394 + -1 * 4159 + -5234; e < i.length; e++) t += i[e];
  return t;
}
function Yt(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function an(i, o, t) {
  if (void (-74 * 12 + -131 * 14 + -2722 * -1) === t && (t = !1), !t && !Yt(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o))
    for (var e = 0; e < o.length; e++) i[e] = an(i[e], o[e]);
  else if (Yt(o))
    for (var e in o) i[e] = an(i[e], o[e]);
  return i;
}
function cg(i, o) {
  var t = {};
  t.value = o, Object.defineProperty(i, "toString", t);
}
var IA = {};
IA[1] = `Cannot create styled-component for component: %s.

`, IA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, IA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, IA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, IA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, IA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, IA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', IA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, IA[9] = "Missing document `<head>`\n\n", IA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, IA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, IA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", IA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, IA[14] = `ThemeProvider: "theme" prop is required.

`, IA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", IA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, IA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, IA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Bc = q.NODE_ENV !== "production" ? IA : {};
function Qc() {
  for (var i = [], o = 1777 * 4 + -736 + -6372; o < arguments.length; o++) i[o] = arguments[o];
  for (var t = i[-6027 + -24 * 157 + 9795], e = [], A = -2927 * -2 + -2735 + 1559 * -2, n = i.length; A < n; A += -3597 + 4903 * 1 + -1305) e.push(i[A]);
  return e.forEach(function(g) {
    t = t.replace(/%[a-z]/, g);
  }), t;
}
function Tt(i) {
  for (var o = [], t = 353 * -25 + 9815 + -989; t < arguments.length; t++) o[t - (-2 * 3844 + -28 * -70 + -5729 * -1)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(o.length > -2 * 2009 + -32 * 312 + 14002 ? " Args: ".concat(o.join(", ")) : "")) : new Error(Qc.apply(void (151 * 62 + 897 * 3 + -12053), Mt([Bc[i]], o, !1)).trim());
}
var Ec = function() {
  function i(o) {
    this.groupSizes = new Uint32Array(-8848 + 1 * -3125 + 55 * 227), this.length = 5251 + -125 * 19 + -4 * 591, this.tag = o;
  }
  return i.prototype.indexOfGroup = function(o) {
    for (var t = 17 * -27 + 7033 + 19 * -346, e = 1 * 977 + -4792 + 3815; e < o; e++) t += this.groupSizes[e];
    return t;
  }, i.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, n = A; o >= n; ) if ((n <<= 1) < 0) throw Tt(3801 * 1 + 1219 * -7 + 4748, "".concat(o));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(e), this.length = n;
      for (var g = A; g < n; g++) this.groupSizes[g] = 4 * 580 + -8326 + 6006;
    }
    for (var a = this.indexOfGroup(o + (-14998 + 14999 * 1)), x = (g = -662 * -5 + 1015 + 173 * -25, t.length); g < x; g++) this.tag.insertRule(a, t[g]) && (this.groupSizes[o]++, a++);
  }, i.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), A = e + t;
      this.groupSizes[o] = -28 * -219 + 3576 + -9708;
      for (var n = e; n < A; n++) this.tag.deleteRule(e);
    }
  }, i.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || -1 * 1031 + -11 * 212 + 3363 === this.groupSizes[o]) return t;
    for (var e = this.groupSizes[o], A = this.indexOfGroup(o), n = A + e, g = A; g < n; g++) t += "".concat(this.tag.getRule(g)).concat(rg);
    return t;
  }, i;
}(), dc = -1234 * 4 + 3865 + 1072 << 30, xo = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map(), ro = 1, V0 = function(i) {
  if (xo.has(i)) return xo.get(i);
  for (; ko.has(ro); ) ro++;
  var o = ro++;
  if (q.NODE_ENV !== "production" && ((-8268 + 3 * 3269 + -3 * 513 | o) < 829 + 829 * -1 || o > dc)) throw Tt(7901 * -1 + 1405 + 6512, "".concat(o));
  return xo.set(i, o), ko.set(o, i), o;
}, lc = function(i, o) {
  ro = o + (15 * -29 + 4014 + 1 * -3578), xo.set(i, o), ko.set(o, i);
}, uc = "style[".concat(rt, "][").concat(Jx, '="').concat(Qi, '"]'), hc = new RegExp("^".concat(rt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), fc = function(i, o, t) {
  for (var e, A = t.split(","), n = 1510 * 2 + 5902 + -8922, g = A.length; n < g; n++) (e = A[n]) && i.registerName(o, e);
}, pc = function(i, o) {
  for (var t, e = ((t = o.textContent) !== null && void (-2 * -2517 + 5593 + -10627) !== t ? t : "").split(rg), A = [], n = -9 * -1094 + 7577 * 1 + -131 * 133, g = e.length; n < g; n++) {
    var a = e[n].trim();
    if (a) {
      var x = a.match(hc);
      if (x) {
        var r = 0 | parseInt(x[1], 10), C = x[-6932 + -443 * 11 + -11807 * -1];
        4947 + 1977 * -1 + 27 * -110 !== r && (lc(C, r), fc(i, C, x[4444 + -2 * -1068 + -6577]), i.getTag().insertRules(r, A)), A.length = 9666 + 63 * -102 + -3240;
      } else A.push(a);
    }
  }
};
function yc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jx = function(i) {
  var o = document.head, t = i || o, e = document.createElement("style"), A = function(a) {
    var x = Array.from(a.querySelectorAll("style[".concat(rt, "]")));
    return x[x.length - (241 + 24 * -10)];
  }(t), n = void (-9260 + 247 * 1 + 9013) !== A ? A.nextSibling : null;
  e.setAttribute(rt, Ux), e.setAttribute(Jx, Qi);
  var g = yc();
  return g && e.setAttribute("nonce", g), t.insertBefore(e, n), e;
}, Dc = function() {
  function i(o) {
    this.element = jx(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -3483 + 3 * 1161, n = e.length; A < n; A++) {
        var g = e[A];
        if (g.ownerNode === t) return g;
      }
      throw Tt(1 * 6817 + -341 + -1 * 6459);
    }(this.element), this.length = 9880 + -1 * 3064 + -284 * 24;
  }
  return i.prototype.insertRule = function(o, t) {
    try {
      return this.sheet.insertRule(t, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, i.prototype.getRule = function(o) {
    var t = this.sheet.cssRules[o];
    return t && t.cssText ? t.cssText : "";
  }, i;
}(), mc = function() {
  function i(o) {
    this.element = jx(o), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 57 * 10 + -3548 + -1 * -2978) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, i;
}(), wc = function() {
  function i(o) {
    this.rules = [], this.length = -5 * 1163 + -1 * 227 + -106 * -57;
  }
  return i.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -68 * -8 + 7855 + 8399 * -1, t), this.length++, !0);
  }, i.prototype.deleteRule = function(o) {
    this.rules.splice(o, 5143 + -1 * 4798 + -344), this.length--;
  }, i.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, i;
}(), Ia = Ig, bc = { isServer: !Ig, useCSSOMInjection: !$C }, Zx = function() {
  function i(o, t, e) {
    void (955 * -7 + 7539 + -854) === o && (o = Ut), void (-49 * 51 + 2 * -723 + -263 * -15) === t && (t = {});
    var A = this;
    this.options = PA(PA({}, bc), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Ig && Ia && (Ia = !1, function(n) {
      for (var g = document.querySelectorAll(uc), a = 7748 + -2321 * 1 + -67 * 81, x = g.length; a < x; a++) {
        var r = g[a];
        r && r.getAttribute(rt) !== Ux && (pc(n, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), cg(this, function() {
      return function(n) {
        for (var g = n.getTag(), a = g.length, x = "", r = function(I) {
          var Q = function(c) {
            return ko.get(c);
          }(I);
          if (void (817 + 223 * -27 + 5204) === Q) return "continue";
          var s = n.names.get(Q), E = g.getGroup(I);
          if (void (-3974 + 1 * -8803 + -1 * -12777) === s || 2908 + 5 * -1909 + -6637 * -1 === E.length) return "continue";
          var d = "".concat(rt, ".g").concat(I, '[id="').concat(Q, '"]'), u = "";
          s !== void 0 && s.forEach(function(c) {
            c.length > -3326 + -1 * 4129 + 213 * 35 && (u += "".concat(c, ","));
          }), x += "".concat(E).concat(d, '{content:"').concat(u, '"}').concat(rg);
        }, C = 0; C < a; C++) r(C);
        return x;
      }(A);
    });
  }
  return i.registerId = function(o) {
    return V0(o);
  }, i.prototype.reconstructWithOptions = function(o, t) {
    return t === void 0 && (t = !0), new i(PA(PA({}, this.options), o), this.gs, t && this.names || void (9501 + 1382 * 1 + -10883));
  }, i.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || -14428 + 7214 * 2) + (-8792 + -1726 * -1 + 7067);
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new wc(A) : e ? new Dc(A) : new mc(A);
    }(this.options), new Ec(o)));
    var o;
  }, i.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, i.prototype.registerName = function(o, t) {
    if (V0(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, i.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(V0(o), e);
  }, i.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, i.prototype.clearRules = function(o) {
    this.getTag().clearGroup(V0(o)), this.clearNames(o);
  }, i.prototype.clearTag = function() {
    this.tag = void (1 * 6507 + -869 * -8 + -1 * 13459);
  }, i;
}(), kc = /&/g, Gc = /^\s*\/\/.*$/gm;
function _x(i, o) {
  return i.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = _x(t.children, o)), t;
  });
}
function Vx(i) {
  var o, t, e, A = i === void 0 ? Ut : i, n = A.options, g = n === void 0 ? Ut : n, a = A.plugins, x = void (-9929 * -1 + 5877 + -15806) === a ? Ei : a, r = function(Q, s, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > -68 * 107 + -4669 + 11945 ? ".".concat(o) : Q;
  }, C = x.slice();
  C.push(function(Q) {
    Q.type === Ci && Q.value.includes("&") && (Q.props[0] = Q.props[41 * -221 + 1 * 4987 + -3 * -1358].replace(kc, t).replace(e, r));
  }), g.prefix && C.push(zC), C.push(ZC);
  var I = function(Q, s, E, d) {
    void (2196 + -1098 * 2) === s && (s = ""), E === void 0 && (E = ""), void (-7857 + 1 * -6268 + 14125) === d && (d = "&"), o = d, t = s, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = Q.replace(Gc, ""), c = qC(E || s ? "".concat(E, " ").concat(s, " { ").concat(u, " }") : u);
    g.namespace && (c = _x(c, g.namespace));
    var h = [];
    return bo(c, _C(C.concat(VC(function(p) {
      return h.push(p);
    })))), h;
  };
  return I.hash = x.length ? x.reduce(function(Q, s) {
    return s.name || Tt(-17 * 199 + 113 * -67 + -1 * -10969), Ve(Q, s.name);
  }, Yx).toString() : "", I;
}
var Sc = new Zx(), xn = Vx(), sg = xt.createContext({ shouldForwardProp: void 0, styleSheet: Sc, stylis: xn });
sg.Consumer;
var Nc = xt.createContext(void 0);
function rn() {
  return Fe(sg);
}
function Fc(i) {
  var o = BA(i.stylisPlugins), t = o[-17 * 289 + 116 * 16 + 3057], e = o[-3407 + 4754 * 1 + -1346], A = rn().styleSheet, n = RA(function() {
    var C = A, I = {};
    return I.useCSSOMInjection = !1, i.sheet ? C = i.sheet : i.target && (C = C.reconstructWithOptions({ target: i.target }, !1)), i.disableCSSOMInjection && (C = C.reconstructWithOptions(I)), C;
  }, [i.disableCSSOMInjection, i.sheet, i.target, A]), g = RA(function() {
    var C = {};
    C.namespace = i.namespace, C.prefix = i.enableVendorPrefixes;
    var I = {};
    return I.options = C, I.plugins = t, Vx(I);
  }, [i.enableVendorPrefixes, i.namespace, t]);
  Z(function() {
    RC(t, i.stylisPlugins) || e(i.stylisPlugins);
  }, [i.stylisPlugins]);
  var a = RA(function() {
    var C = {};
    return C.shouldForwardProp = i.shouldForwardProp, C.styleSheet = n, C.stylis = g, C;
  }, [i.shouldForwardProp, n, g]), x = {};
  x.value = a;
  var r = {};
  return r.value = g, xt.createElement(sg.Provider, x, xt.createElement(Nc.Provider, r, i.children));
}
var Ca = function() {
  function i(o, t) {
    var e = this;
    this.inject = function(A, n) {
      void (-29 * 43 + -101 * 83 + 5 * 1926) === n && (n = xn);
      var g = e.name + n.hash;
      A.hasNameForId(e.id, g) || A.insertRules(e.id, g, n(e.rules, g, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, cg(this, function() {
      throw Tt(-4 * -2126 + -913 + -7579, String(e.name));
    });
  }
  return i.prototype.getName = function(o) {
    return void (-521 * 14 + -9 * 30 + 7564) === o && (o = xn), this.name + o.hash;
  }, i;
}(), Rc = function(i) {
  return i >= "A" && i <= "Z";
};
function ca(i) {
  for (var o = "", t = -1747 * -5 + -4543 * -2 + -17821; t < i.length; t++) {
    var e = i[t];
    if (-65 * -32 + 7948 + -271 * 37 === t && e === "-" && i[-1 * -4471 + -3862 + 203 * -3] === "-") return i;
    Rc(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var zx = function(i) {
  return i == null || i === !1 || i === "";
}, Xx = function(i) {
  var o, t, e = [];
  for (var A in i) {
    var n = i[A];
    i.hasOwnProperty(A) && !zx(n) && (Array.isArray(n) && n.isCss || Jt(n) ? e.push("".concat(ca(A), ":"), n, ";") : Yt(n) ? e.push.apply(e, Mt(Mt(["".concat(A, " {")], Xx(n), !1), ["}"], !1)) : e.push("".concat(ca(A), ": ").concat((o = A, (t = n) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 1 * 4909 + 2564 * -2 + 219 === t || o in XC || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function gt(i, o, t, e) {
  if (zx(i)) return [];
  if (Cg(i)) return [".".concat(i.styledComponentId)];
  if (Jt(i)) {
    if (!Jt(n = i) || n.prototype && n.prototype.isReactComponent || !o) return [i];
    var A = i(o);
    return q.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Ca || Yt(A) || A === null || console.error("".concat(Hx(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gt(A, o, t, e);
  }
  var n;
  return i instanceof Ca ? t ? (i.inject(t, e), [i.getName(e)]) : [i] : Yt(i) ? Xx(i) : Array.isArray(i) ? Array.prototype.concat.apply(Ei, i.map(function(g) {
    return gt(g, o, t, e);
  })) : [i.toString()];
}
function Mc(i) {
  for (var o = 4426 + 8708 * 1 + 6 * -2189; o < i.length; o += -3691 * 1 + 1696 + 1996) {
    var t = i[o];
    if (Jt(t) && !Cg(t)) return !1;
  }
  return !0;
}
var Wc = Ox(Qi), vc = function() {
  function i(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (e === void 0 || e.isStatic) && Mc(o), this.componentId = t, this.baseHash = Ve(Wc, t), this.baseStyle = e, Zx.registerId(t);
  }
  return i.prototype.generateAndInjectStyles = function(o, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Xe(A, this.staticRulesId);
      else {
        var n = ra(gt(this.rules, o, t, e)), g = gn(Ve(this.baseHash, n) >>> 0);
        if (!t.hasNameForId(this.componentId, g)) {
          var a = e(n, ".".concat(g), void 0, this.componentId);
          t.insertRules(this.componentId, g, a);
        }
        A = Xe(A, g), this.staticRulesId = g;
      }
    else {
      for (var x = Ve(this.baseHash, e.hash), r = "", C = 0; C < this.rules.length; C++) {
        var I = this.rules[C];
        if (typeof I == "string") r += I, q.NODE_ENV !== "production" && (x = Ve(x, I));
        else if (I) {
          var Q = ra(gt(I, o, t, e));
          x = Ve(x, Q + C), r += Q;
        }
      }
      if (r) {
        var s = gn(x >>> 0);
        t.hasNameForId(this.componentId, s) || t.insertRules(this.componentId, s, e(r, ".".concat(s), void (-4 * 419 + 83 * 51 + -2557), this.componentId)), A = Xe(A, s);
      }
    }
    return A;
  }, i;
}(), $x = xt.createContext(void (7390 * 1 + 1283 * 2 + -9956));
$x.Consumer;
var Wi = {}, sa = /* @__PURE__ */ new Set();
function Lc(i, o, t) {
  var e = Cg(i), A = i, n = !Mi(i), g = o.attrs, a = g === void 0 ? Ei : g, x = o.componentId, r = void (4443 + 4603 * 1 + 9046 * -1) === x ? function(k, R) {
    var N = typeof k != "string" ? "sc" : ia(k);
    Wi[N] = (Wi[N] || 151 * -31 + -6953 + 277 * 42) + (1 * 2191 + 6057 + -1 * 8247);
    var V = "".concat(N, "-").concat(nc(Qi + N + Wi[N]));
    return R ? "".concat(R, "-").concat(V) : V;
  }(o.displayName, o.parentComponentId) : x, C = o.displayName, I = void (-6023 + 1 * 5003 + 1020) === C ? function(k) {
    return Mi(k) ? "styled.".concat(k) : "Styled(".concat(Hx(k), ")");
  }(i) : C, Q = o.displayName && o.componentId ? "".concat(ia(o.displayName), "-").concat(o.componentId) : o.componentId || r, s = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, E = o.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (o.shouldForwardProp) {
      var u = o.shouldForwardProp;
      E = function(k, R) {
        return d(k, R) && u(k, R);
      };
    } else E = d;
  }
  var c = new vc(t, Q, e ? A.componentStyle : void (-1 * -1649 + -6368 + 429 * 11));
  function h(k, R) {
    return function(N, V, wA) {
      var AA = N.attrs, OA = N.componentStyle, z = N.defaultProps, _A = N.foldedComponentIds, Ke = N.styledComponentId, Di = N.target, K0 = xt.useContext($x), GI = rn(), mi = N.shouldForwardProp || GI.shouldForwardProp;
      q.NODE_ENV !== "production" && wo(Ke);
      var Ng = ec(V, K0, z) || Ut, ye = function(P0, Vt, T0) {
        var Et = {};
        Et.className = void (5209 + -5209 * 1), Et.theme = T0;
        for (var ki, Pe = PA(PA({}, Vt), Et), Gi = -2096 * -3 + 2963 * 1 + -9251; Gi < P0.length; Gi += 1061 * 3 + 7088 + 13 * -790) {
          var q0 = Jt(ki = P0[Gi]) ? ki(Pe) : ki;
          for (var Re in q0) Pe[Re] = Re === "className" ? Xe(Pe[Re], q0[Re]) : Re === "style" ? PA(PA({}, Pe[Re]), q0[Re]) : q0[Re];
        }
        return Vt.className && (Pe.className = Xe(Pe.className, Vt.className)), Pe;
      }(AA, V, Ng), Zt = ye.as || Di, _t = {};
      for (var VA in ye) void (17 * 228 + 2257 * 1 + 1 * -6133) === ye[VA] || VA[1 * -7313 + -139 * -42 + 1475] === "$" || VA === "as" || VA === "theme" && ye.theme === Ng || (VA === "forwardedAs" ? _t.as = ye.forwardedAs : mi && !mi(VA, Zt) || (_t[VA] = ye[VA], mi || q.NODE_ENV !== "development" || jI(VA) || sa.has(VA) || !nn.has(Zt) || (sa.add(VA), console.warn('styled-components: it looks like an unknown prop "'.concat(VA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var wi = function(P0, Vt) {
        var T0 = rn(), Et = P0.generateAndInjectStyles(Vt, T0.styleSheet, T0.stylis);
        return q.NODE_ENV !== "production" && wo(Et), Et;
      }(OA, ye);
      q.NODE_ENV !== "production" && N.warnTooManyClasses && N.warnTooManyClasses(wi);
      var bi = Xe(_A, Ke);
      return wi && (bi += " " + wi), ye.className && (bi += " " + ye.className), _t[Mi(Zt) && !nn.has(Zt) ? "class" : "className"] = bi, _t.ref = wA, YA(Zt, _t);
    }(p, k, R);
  }
  h.displayName = I;
  var p = xt.forwardRef(h), w = {};
  return w.attrs = !0, w.componentStyle = !0, w.displayName = !0, w.foldedComponentIds = !0, w.shouldForwardProp = !0, w.styledComponentId = !0, w.target = !0, p.attrs = s, p.componentStyle = c, p.displayName = I, p.shouldForwardProp = E, p.foldedComponentIds = e ? Xe(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = Q, p.target = e ? A.target : i, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = e ? function(R) {
      for (var N = [], V = 5502 + -46 * 23 + -4443; V < arguments.length; V++) N[V - (-369 * -5 + -4008 + 2164)] = arguments[V];
      for (var wA = 283 * -4 + 4536 + -3404, AA = N; wA < AA.length; wA++) an(R, AA[wA], !0);
      return R;
    }({}, A.defaultProps, k) : k;
  } }), q.NODE_ENV !== "production" && (Ac(I, Q), p.warnTooManyClasses = /* @__PURE__ */ function(k, R) {
    var N = {}, V = !1;
    return function(wA) {
      if (!V && (N[wA] = !0, Object.keys(N).length >= 5 * -394 + -3725 + 5895)) {
        var AA = R ? ' with the id of "'.concat(R, '"') : "";
        console.warn("Over ".concat(1 * 31 + 1498 + 3 * -443, " classes were generated for component ").concat(k).concat(AA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), V = !0, N = {};
      }
    };
  }(I, Q)), cg(p, function() {
    return ".".concat(p.styledComponentId);
  }), n && qx(p, i, w), p;
}
function Ba(i, o) {
  for (var t = [i[-6943 * -1 + 747 * 9 + 6833 * -2]], e = -521 * -15 + -9 * -563 + -12882, A = o.length; e < A; e += -159 * 42 + 7120 + -441) t.push(o[e], i[e + (-46 * 50 + 3837 * -1 + 6138)]);
  return t;
}
var Qa = function(i) {
  var o = {};
  return o.isCss = !0, Object.assign(i, o);
};
function Uc(i) {
  for (var o = [], t = 1; t < arguments.length; t++) o[t - (-8280 + 68 * -47 + 11477)] = arguments[t];
  if (Jt(i) || Yt(i)) return Qa(gt(Ba(Ei, Mt([i], o, !0))));
  var e = i;
  return -9980 + -1 * 6335 + 16315 === o.length && e.length === 1 && typeof e[1014 * 1 + -1526 * -1 + -2540] == "string" ? gt(e) : Qa(gt(Ba(e, o)));
}
function In(i, o, t) {
  if (void (17196 + -4 * 4299) === t && (t = Ut), !o) throw Tt(106 * 53 + -5029 * -1 + -10646, o);
  var e = function(A) {
    for (var n = [], g = 6908 * -1 + 3 * 869 + 4302; g < arguments.length; g++) n[g - (-9041 * 1 + 1 * 3701 + 763 * 7)] = arguments[g];
    return i(o, t, Uc.apply(void (-3994 + -4 * -797 + 31 * 26), Mt([A], n, !1)));
  };
  return e.attrs = function(A) {
    return In(i, o, PA(PA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return In(i, o, PA(PA({}, t), A));
  }, e;
}
var Ar = function(i) {
  return In(Lc, i);
}, O0 = Ar;
nn.forEach(function(i) {
  O0[i] = Ar(i);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var z0 = "__sc-".concat(rt, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[z0] || (window[z0] = -71 * 44 + -4222 * 1 + -2 * -3673), -3245 + -3246 * -1 === window[z0] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[z0] += 1);
const Jc = O0.div`
  position: relative;
`, Yc = O0.video`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(i) => i.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class v extends Error {
  constructor(t, e) {
    super(t);
    G(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof v) return t;
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
    return new v(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof v) return t;
    const e = "An unexpected error has occurred";
    return new v(e);
  }
}
const Io = {};
Io.CONTINUE_DETECTION = "continue-detection", Io.SWITCH_CAMERA = "switch-camera", Io.TOGGLE_MIRROR = "toggle-mirror";
const wt = Io, Cn = {};
Cn.FIRST_FRAME = "first-frame", Cn.FIRST_VALID_FRAME = "first-valid-frame";
const Co = Cn, er = {};
er.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const cn = er;
var tr = ((i) => (i.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", i.CONTROL = "document-auto-capture:control", i.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", i.DOCUMENT_DETECTION = "document-auto-capture:document-detection", i.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", i.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", i.STATE_CHANGED = "document-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", i))(tr || {}), ie = ((i) => (i.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", i.CONTROL = "face-auto-capture:control", i.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", i.FACE_DETECTION = "face-auto-capture:face-detection", i.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", i.STATE_CHANGED = "face-auto-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", i))(ie || {}), Oc = ((i) => (i.ANIMATION_END = "magnifeye-auto-capture:animation-end", i.CONTROL = "magnifeye-auto-capture:control", i.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", i))(Oc || {}), Ot = ((i) => (i.CONTROL = "smile-auto-capture:control", i.INSTRUCTION_ESCALATED = "smile:instruction-escalated", i.STATUS_CHANGED = "smile-auto-capture:status-changed", i))(Ot || {}), Hc = ((i) => (i.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", i.CONTROL = "palm-capture:control", i.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", i.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", i.STATE_CHANGED = "palm-capture:state-changed", i.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", i))(Hc || {}), Kc = ((i) => (i.CONTROL = "eye-gaze-auto-capture:control", i.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", i))(Kc || {});
const or = {};
or.EYE_NOT_PRESENT = "eye_not_present";
const Ea = or, vA = {};
vA.CANDIDATE_SELECTION = "candidate_selection", vA.FACE_TOO_CLOSE = "face_too_close", vA.FACE_TOO_FAR = "face_too_far", vA.FACE_CENTERING = "face_centering", vA.FACE_NOT_PRESENT = "face_not_present", vA.SHARPNESS_TOO_LOW = "sharpness_too_low", vA.BRIGHTNESS_TOO_LOW = "brightness_too_low", vA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", vA.DEVICE_PITCHED = "device_pitched", vA.LEFT_EYE_NOT_PRESENT = "left_" + Ea.EYE_NOT_PRESENT, vA.RIGHT_EYE_NOT_PRESENT = "right_" + Ea.EYE_NOT_PRESENT, vA.MOUTH_NOT_PRESENT = "mouth_not_present", vA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", vA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const CA = vA, KA = {};
KA.isPresent = CA.FACE_NOT_PRESENT, KA.isNotPitched = CA.DEVICE_PITCHED, KA.isNotSmall = CA.FACE_TOO_FAR, KA.isNotLarge = CA.FACE_TOO_CLOSE, KA.isNotOutOfBounds = CA.FACE_CENTERING, KA.isNotDim = CA.BRIGHTNESS_TOO_LOW, KA.isNotBright = CA.BRIGHTNESS_TOO_HIGH, KA.isSharp = CA.SHARPNESS_TOO_LOW, KA.isLeftEyePresent = CA.LEFT_EYE_NOT_PRESENT, KA.isRightEyePresent = CA.RIGHT_EYE_NOT_PRESENT, KA.isMouthPresent = CA.MOUTH_NOT_PRESENT, KA.isMouthScoreNotTooHigh = CA.MOUTH_SCORE_TOO_HIGH, KA.isMouthScoreNotTooLow = CA.MOUTH_SCORE_TOO_LOW;
const Pc = KA, sn = {};
sn.FRONT = "user", sn.REAR = "environment";
const Bg = sn, Bn = {};
Bn.AUTO_CAPTURE = "AUTO_CAPTURE", Bn.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const E0 = Bn, t0 = {};
t0.LOADING = "LOADING", t0.ERROR = "ERROR", t0.WAITING = "WAITING", t0.RUNNING = "RUNNING";
const ne = t0, ir = { ...ne };
ir.DONE = "DONE";
const Qn = ir;
({ ...CA });
var Tc = ((i) => (i.CLOSEUP = "CLOSEUP", i.DISTANT = "DISTANT", i.MIDDLE = "MIDDLE", i))(Tc || {});
({ ...CA });
const En = {};
En.NEUTRAL = "NEUTRAL", En.SMILE = "SMILE";
const de = En, oe = Qn;
({ ...CA });
const di = st(void 0);
di.displayName = "AppStateContext";
function Bt() {
  const i = Fe(di);
  if (i === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return i;
}
const qc = di.Provider, nr = Bt;
class gr extends ge {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const o = new v("An unknown error has occurred");
    (t = this.context) == null || t.handleError(o);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var o;
    return ((o = this.context) == null ? void 0 : o.appState) === ne.ERROR ? null : this.props.children;
  }
}
G(gr, "contextType", di);
const jc = O0.canvas`
  transform: ${(i) => i.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, Zc = O0.div`
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
function _c() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Vc = ux(
  ({ detectionDetails: i, isImageMirror: o }, t) => _c() ? (console.log(i), /* @__PURE__ */ m(xe, { children: [
    /* @__PURE__ */ m(jc, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ m(Zc, { children: /* @__PURE__ */ m("pre", { children: JSON.stringify(i, null, 2) }) })
  ] })) : null
), Go = st(void 0);
Go.displayName = "AnalyticsContext";
function li() {
  const i = Fe(Go);
  if (i === void 0)
    throw new Error(`${Go.displayName} must be used within a AnalyticsProvider`);
  return i;
}
function GA(i, o) {
  const t = So();
  return GA = function(e, A) {
    e = e - 470;
    let n = t[e];
    if (GA.cYDEst === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      GA.qusBtx = C, i = arguments, GA.cYDEst = !0;
    }
    const a = t[2 * 2619 + 8396 + -13634], x = e + a, r = i[x];
    return r ? n = r : (GA.vGvovf === void 0 && (GA.vGvovf = !0), n = GA.qusBtx(n, A), i[x] = n), n;
  }, GA(i, o);
}
(function(i, o) {
  function t(a, x, r, C, I) {
    return GA(C - 372, r);
  }
  function e(a, x, r, C, I) {
    return GA(C - 93, r);
  }
  function A(a, x, r, C, I) {
    return GA(C - 281, I);
  }
  const n = i();
  function g(a, x, r, C, I) {
    return GA(C - -781, I);
  }
  for (; ; )
    try {
      if (parseInt(g(-299, -290, -282, -285, "N8mu")) / 1 * (-parseInt(e(561, 580, "2y3Z", 565, 562)) / 2) + -parseInt(g(-286, -269, -289, -280, "V6[X")) / 3 + -parseInt(g(-277, -303, -301, -291, "c7az")) / 4 + -parseInt(t(846, 855, "2y3Z", 859, 867)) / 5 + parseInt(t(872, 883, "cR2V", 867, 880)) / 6 + -parseInt(A(766, 782, 792, 781, "kZWk")) / 7 + parseInt(g(-301, -308, -323, -310, "%kDe")) / 8 * (parseInt(t(852, 873, "g@!!", 857, 857)) / 9) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(So, 73878 + 898468 * 1 + 2 * -31077);
function vi(i, o, t, e, A) {
  return GA(e - 15, i);
}
function dn(i, o, t, e, A) {
  return GA(t - -543, A);
}
function So() {
  const i = ["W7zJs2i1rSovtmk6grRdLNa", "cMNdG8o9eq", "WPaOfcjV", "qmkbhmkOWOa", "oMVcIt9T", "WR3dSwVdN1ldTWLNw8oRWRPtW6C", "eSoxwq", "tCkMWOdcOwuPW6DdWPPNAISQ", "WQGQWO3cKbmTa8o/ea", "WQFcMxtdJwS", "kGZdIt7cVW", "amkKAYzaxWK8dSoNuCkzBG", "WPJcLxpcIhi", "WPGTgSoeW7GyuSktWOmRla4d", "WQnEnIXlr8oFhmkLW5SCWRvD", "W49Hy8krWQ0", "WOhcOI3dUq89m8kcW5DTW4GfbW", "WPZcJSkSmSk7", "WPjjC8kqW58Fg3G", "hSknC8obpSkhhqhcV8kCe8oPW4C", "gMxdImo5", "W5RdUSkjW5xcVmoAW6FdU3JdPmoVWP8B", "B8kvimoKW4ddJCk7WOZcTSkvaG", "W4/cISopeCk8", "t8kfhSopiudcPCkMW7FcNGD9wa", "ewSPW7qK", "W5FcRSo7W4VcVuhdV0OaW4/cRZRcLG", "WQSaW73dPqddGLhdSSoKWOFdObjg", "WOOuCSkOW58", "WOBcSCkvW4lcHmkBW47cLW", "WP8PhCkdWQzbd8kPWRm", "qmoeW69dja"];
  return So = function() {
    return i;
  }, So();
}
const No = st(void (-1 * -9974 + 1 * -9797 + 177 * -1));
No[vi("g]ER", 499, 503, 490) + vi("2y3Z", 509, 505, 504) + "e"] = vi("eYIa", 515, 499, 501) + dn(-56, -37, -46, -58, "VoW7") + ar(-208, -199, -210, -215, "g]ER");
function zc(i, o, t, e, A) {
  return GA(i - -559, A);
}
function ar(i, o, t, e, A) {
  return GA(t - -704, A);
}
function qt() {
  const i = Fe(No);
  function o(n, g, a, x, r) {
    return dn(n - 434, g - 68, a - 502, x - 142, g);
  }
  if (i === void (-9850 + -1121 * -2 + 7608)) throw new Error(No[t(-517, "XMJR", -493, -502) + t(-497, "FDJ6", -494, -497) + "e"] + (e("nz(0", 467, 475, 480) + o(445, "bDaO", 458, 465) + e("eYIa", 480, 486, 464) + A(1400, 1412, "XLvC", 1401) + e("VoW7", 488, 504, 493) + t(-490, "@bcg", -504, -498) + o(423, "#AUj", 435, 420) + t(-501, "dCy8", -493, -495)));
  function t(n, g, a, x, r) {
    return ar(n - 352, g - 108, x - -271, x - 214, g);
  }
  function e(n, g, a, x, r) {
    return zc(g - 556, g - 315, a - 11, x - 339, n);
  }
  function A(n, g, a, x, r) {
    return dn(n - 260, g - 352, n - 1459, x - 217, a);
  }
  return i;
}
const It = (i) => i.length < -1 * -8669 + -4 * -2131 + 2456 * -7 ? -4 * -985 + -117 * 37 + 389 : i.reduce((t, e) => t + e, 0) / i.length, Ne = (i) => Number.parseFloat(i.toFixed(-11 * -29 + -17 * -37 + -3 * 315)), Xc = (i) => {
  const o = i.getContext("2d");
  o && o.clearRect(-269 * 7 + 8667 + -6784, -3718 + -1 * 7751 + 11469, o.canvas.width, o.canvas.height);
}, xr = 0 + 0.75, $c = 9989 * 1 + -7997 + -1990, As = 2 * -3561 + -9343 + 17065 * 1, es = -29 * 277 + -8352 * -1 + -319, ts = "dot-auto-capture-video", ui = (i, o) => Math.min(i, o), rr = ({ height: i, width: o }, t) => {
  const e = ui(o, i) * t, A = (o - e) / (8884 + -9625 * 1 + 743), n = (i - e) / (-4856 * 1 + -457 * -1 + 27 * 163), g = {};
  return g.shiftX = A, g.shiftY = n, g.width = e, g.height = e, g;
}, os = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = rr(i, o), g = {};
  return g.shiftX = e / i.width, g.shiftY = A / i.height, g.width = n / i.width, g.height = t / i.height, g;
}, is = ({ height: i, width: o }) => {
  const t = ui(o, i), e = t / (10788 + -719 * 15) * (-16 * 142 + -50 * 86 + 4 * 1644);
  if (o > i) {
    const n = {};
    return n.width = e, n.height = t, n;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, ns = (i, o) => {
  const t = ui(o.width, o.height);
  return Ne(i * t);
}, gs = ({ height: i, width: o }) => {
  const t = {};
  return t.height = i, t.width = o, rr(t, xr);
}, as = (i) => os(i, xr), xs = (i, o) => ns(i, o) * $c, rs = "@innovatrics/dot-common-auto-capture", Is = "7.3.2", Cs = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, cs = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, ss = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, Bs = {
  name: rs,
  private: !0,
  version: Is,
  scripts: Cs,
  dependencies: cs,
  devDependencies: ss
}, Qs = 11399 + -67 * 170 + 0.8100000000000005, co = {};
co.minDuration = 1e3, co.maxDuration = 2500, co.minFrames = 10;
const Li = co, ln = {};
ln.max = 100, ln.min = 10;
const da = ln, Es = -79 * 14 + 9259 + -7433 * 1, ds = -1102 + -1 * 6461 + 7763, ls = -7432 + 877 * 9 + 1 * -457, o0 = {};
o0.width = 200, o0.height = 200, o0.top = 50, o0.left = 50;
const us = o0, Fo = "AES-CBC", Ir = "RSA-OAEP", hs = "SHA-256", fs = "image/jpeg", ps = 8369 + -5773 * 1 + -2588, ys = 40, Cr = "/dot-assets", la = "dot_embedded_bg.wasm", Qg = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
function ua() {
  return /Android/i.test(navigator.userAgent);
}
function d0() {
  return /Firefox/i.test(navigator.userAgent);
}
const Ds = () => {
  const i = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return i && o ? !1 : o;
}, un = (i) => new Promise((o) => {
  setTimeout(o, i);
}), cr = (i) => JSON.parse(JSON.stringify(i, (o, t) => typeof t == "number" ? Ne(t) : t)), sr = () => Bs.version, Br = (i) => new URL(i).hostname.replace("www.", ""), ms = () => Br(window.location.href) === "localhost", X0 = (i) => Object.entries(i).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), ws = (i, o) => JSON.stringify(i) === JSON.stringify(o) ? o : i;
function bs(i, o) {
  let t;
  return (...e) => {
    const A = () => {
      clearTimeout(t), t = void 0, i(...e);
    };
    t === void (-4 * -1394 + -1 * -5279 + -10855) && (t = setTimeout(A, o));
  };
}
function ks(i) {
  return i.at(-(-2006 * 2 + 1 * 1193 + 1 * 2820)) === "/" ? i.slice(-1 * 5422 + 27 * 273 + -1949, -(1196 * -5 + -629 * -3 + 4094)) : i;
}
function Qr(i) {
  return "" + ks(i ?? "") + Cr;
}
function C0() {
  return !1;
}
const Gs = () => "prod".toLowerCase() === "dev";
var Le;
class l0 extends Array {
  constructor(t) {
    super();
    K(this, Le);
    H(this, Le, t);
  }
  get size() {
    return D(this, Le);
  }
  pushFixed(...t) {
    if (t.length > D(this, Le)) {
      const e = t.slice(-D(this, Le));
      this.push(...e);
      return;
    }
    this.length === D(this, Le) && this.splice(1 * 7893 + 995 + -8888, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
  }
}
Le = new WeakMap();
const Er = (i, o, t = fs) => new Promise((e) => {
  i.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, o);
}), Ss = async (i) => Er(i, 1 * -6785 + -8921 * -1 + -2046 * 1), Ns = async (i) => Er(i, 3990 * -1 + -8693 + 1 * 12783, "image/png"), dr = (i, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(i, o.shiftX, o.shiftY, o.width, o.height, 0, -1 * 5714 + 5861 + 21 * -7, t.width, t.height), t;
}, Fs = (i) => {
  const o = i.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(0, -10 * -294 + 754 * 5 + -110 * 61, i.width, i.height);
  return t;
};
function ha(i, o, t) {
  return t - o / (-2932 + 2 * 2759 + 8 * -323) < 0 ? 5982 * -1 + 1 * 4609 + 1373 : t + o / (-622 * -14 + -2780 + -5926) > i ? i - o : t - o / (-7092 + 2152 * 4 + 1514 * -1);
}
function Rs(i, o) {
  const t = i.width, e = i.height, A = t * (o.left / (4155 + 1 * -1429 + 13 * -202)), n = e * (o.top / (-27 * 117 + -7 * -312 + -1075 * -1));
  return { width: o.width, height: o.height, shiftX: ha(t, o.width, A), shiftY: ha(e, o.height, n) };
}
async function Ms(i, o) {
  const t = Rs(i, o), e = dr(i, t);
  return Ns(e);
}
const lr = (i, o, t, e) => {
  const A = i.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (A.strokeStyle = t, A.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), A.stroke());
}, Ui = (i, o, t) => {
  const { height: e, shiftX: A, shiftY: n, width: g } = o, a = {};
  a.x = A, a.y = n;
  const x = {};
  x.topLeft = a, x.width = g, x.height = e, x.color = t, lr(i, x, t);
}, c0 = (i, o, t, e = -4658 + -1 * -4658) => {
  const A = i.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(o.x + e, o.y + e, 7, 7), A.beginPath());
}, Ws = (i, o) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = o;
  return !(i.x < e || i.x > e + n || i.y < A || i.y > A + t);
}, vs = (i, o) => Object.values(i).every((t) => Ws(t, o));
function Ro(i) {
  const { height: o, width: t } = is(i), e = (i.width - t) / (-1 * -8663 + -1043 * -1 + -4852 * 2), A = (i.height - o) / (8975 * -1 + -1 * -7879 + 1098), n = {};
  return n.shiftX = e, n.shiftY = A, n.width = t, n.height = o, n;
}
function ur(i, o, t) {
  const { height: e, width: A } = t, n = ui(i.width, i.height), g = A - n * o * (6441 + 2 * 677 + -7793), a = e - n * o * (-1917 + 2683 * 1 + -764), x = (i.width - g) / (2 * -2998 + -2037 + -1607 * -5), r = (i.height - a) / 2, C = {};
  return C.shiftX = x, C.shiftY = r, C.width = g, C.height = a, C;
}
function lt(i, o) {
  const { shiftX: t, shiftY: e } = o, A = {};
  return A.x = i.x + t, A.y = i.y + e, A;
}
function Mo() {
  const i = ["txO8W6xdVmkavJL0EIuSWPu", "W6pdNCkSx8kT", "W6qsWPC5WRX+xmoDtCknWO3dLxa", "FdjTW7RcVdqQ", "BwlcLHijbb3dGSo9W6FdKCkT", "W6mhfCkjfe9nWOO8aSkvrW", "FCkfWQdcRGVdO2RcVqnVWOVcGmoV", "WPZdLcxcSMy", "W6qfWRxcTCoEWQNcGfzR", "WQyIW6zFsxiyruldNdFdPmki", "n8kEW7tdTgxdLKu6i8oHWO1S", "t8k/W6tdJxFdMIxcT2nIW7DzwW", "W5ZcKH3cGMDHkhO", "nSkJWOBcPSoj", "FmoCpNLoEfLHW4K4CgS", "WOrKWPypBWyOW6XnW6lcUmoNWO0", "WRlcJSo0hCo7E8osWP5BlSohWRZdJq", "kX8SW4nsjhtdPa", "f8oPBSkUgG", "xrmGt8kjW4xcGWm", "mmoAWRNcOqxcVLm", "ucZdTJvmjt1j", "WQeRW6jvsNCEqvNdSJZdQCkR", "pL/cPLxcTuuIvhC", "E8oqpxfiFWLmW6Ghw0tdOq", "WPBcJ8oDWPRdOG", "W5vNWQNdKq", "W4j/WQmsfq", "CSoZWQldT8k5WQdcLWGpvaFcGmob", "W6ZcLmkdBK0En8kC", "mHlcVSoSWPz2WOldUq"];
  return Mo = function() {
    return i;
  }, Mo();
}
(function(i, o) {
  function t(x, r, C, I, Q) {
    return SA(r - 991, I);
  }
  const e = i();
  function A(x, r, C, I, Q) {
    return SA(r - 650, C);
  }
  function n(x, r, C, I, Q) {
    return SA(I - 421, r);
  }
  function g(x, r, C, I, Q) {
    return SA(C - 59, r);
  }
  function a(x, r, C, I, Q) {
    return SA(x - -857, I);
  }
  for (; ; )
    try {
      if (parseInt(a(-542, -532, -539, "z7j6", -544)) / 1 * (parseInt(a(-561, -557, -560, "o3Pu", -565)) / 2) + parseInt(a(-554, -550, -551, "0#3A", -569)) / 3 * (parseInt(A(963, 962, "dIQ9", 951, 972)) / 4) + -parseInt(g(351, "Gs7E", 367, 372, 359)) / 5 + parseInt(g(349, "bq3B", 363, 375, 349)) / 6 * (-parseInt(n(738, "8&ck", 759, 743, 728)) / 7) + -parseInt(n(731, "LwVW", 727, 718, 712)) / 8 * (parseInt(t(1291, 1307, 1315, "EWXc", 1306)) / 9) + -parseInt(n(720, "$bo[", 711, 716, 713)) / 10 * (-parseInt(n(714, "qK$K", 740, 726, 715)) / 11) + -parseInt(A(970, 967, "GrwR", 960, 967)) / 12 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mo, 12637 * -67 + 781539 + 253794 * 3);
function SA(i, o) {
  const t = Mo();
  return SA = function(e, A) {
    e = e - (-1 * -7277 + -1 * -5476 + 4153 * -3);
    let n = t[e];
    if (SA.OTOAte === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      SA.IuLzZi = C, i = arguments, SA.OTOAte = !0;
    }
    const a = t[87 * 61 + 5213 * 1 + -10520], x = e + a, r = i[x];
    return r ? n = r : (SA.KgVSzw === void 0 && (SA.KgVSzw = !0), n = SA.IuLzZi(n, A), i[x] = n), n;
  }, SA(i, o);
}
function Ls({ assetsDirectoryPath: i, bramble: o }) {
  const [t, e] = BA(), A = t !== void (6 * 227 + -1642 * -2 + -4646);
  Z(() => {
    async function a() {
      await o[r(-380, "mE1Q", -390)](Qr(i));
      function x(C, I, Q, s, E) {
        return SA(Q - 121, s);
      }
      function r(C, I, Q, s, E) {
        return SA(Q - -709, I);
      }
      e(o[r(-388, "LVdv", -398) + x(416, 429, 415, "7V2B") + r(-387, "z7j6", -389) + "t"]());
    }
    a();
  }, [o, i, e]);
  function n(a, x, r, C, I) {
    return SA(a - -139, C);
  }
  const g = {};
  return g[n(167, 169, 153, "UIJ#") + n(179, 176, 188, "tjC2")] = t, g[n(161, 161, 167, "qK$K") + "sh"] = A, g;
}
var hr = ((i) => (i.DOCUMENT = "document-auto-capture:dev", i.FACE = "face-auto-capture:dev", i.PALM = "palm-capture:dev", i))(hr || {});
const hn = {};
hn.SIMD = "simd", hn.NO_SIMD = "no-simd";
const fa = hn, fn = {};
fn.Lower = "Lower", fn.Higher = "Higher";
const pn = fn, so = {};
so.VISIBLE = "VISIBLE", so.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", so.HIDDEN = "HIDDEN";
const Wo = so, yn = {};
yn.MOBILE = "MOBILE", yn.DESKTOP = "DESKTOP";
const pa = yn;
function vo() {
  var i = ["fKnrWOJcSX95Fmo5qrKg", "W59cjSktWP8lhJVcKbjVWR4", "CCkqhmkfW58QWPxcSbSJqa", "WOasFSoYW5tdMSodW7mIW7xdQmkm", "n8otxf7cQedcNCoB", "dg8XACoY", "dCkIvMJdVaO2wmoHuqW", "a8kSdHxcLbe/vG", "WPRcQMBdSGW", "tSkiWRJcPCoMuSkzgdfmW4qvEG", "sw3dLMPFd8oqoSkes31eW5W", "W53dM8kYlqxcUmosqSkQWOlcPq", "WPTEWPKkWODwW59MjLhcM8kT", "WRpcMmkXWQJcIMTaC8kiW4ZdS8or", "WRRcHwBcK0hcTwDqe8olW7pdOG", "WO5fW4ysjCk1W74qW65YEa", "W5OxEmocW4Xoeq", "bSoRW7v9W58Vo8orW6ddU8oiCq", "W7aAWOfpBW", "WPHvWP4iWOvtW7naiwRcLCkM", "W6BcPgZdUaJcKcq"];
  return vo = function() {
    return i;
  }, vo();
}
(function(i, o) {
  var t = i();
  function e(x, r, C, I, Q) {
    return LA(r - -295, C);
  }
  function A(x, r, C, I, Q) {
    return LA(C - -821, x);
  }
  function n(x, r, C, I, Q) {
    return LA(r - 475, Q);
  }
  function g(x, r, C, I, Q) {
    return LA(x - -772, r);
  }
  for (; ; )
    try {
      var a = -parseInt(A("vSBa", -577, -584, -583, -595)) / 1 + parseInt(e(-60, -53, "yT$@", -63, -43)) / 2 + parseInt(g(-536, "%)Wq", -538, -534, -543)) / 3 + parseInt(g(-541, "vSBa", -537, -542, -533)) / 4 * (parseInt(e(-54, -61, "QScv", -67, -54)) / 5) + parseInt(e(-72, -67, "UqM3", -58, -59)) / 6 + -parseInt(n(716, 721, 727, 724, "jEQ@")) / 7 + -parseInt(A("HwhE", -594, -591, -581, -593)) / 8 * (parseInt(n(717, 715, 707, 705, "@m26")) / 9);
      if (a === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(vo, 89915 + -3389 * 2 + -19857 * -1);
function LA(i, o) {
  var t = vo();
  return LA = function(e, A) {
    e = e - (1496 + -157 * -29 + -5822 * 1);
    var n = t[e];
    if (LA.WWuSfY === void 0) {
      var g = function(I) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (var p = 0, w = s.length; p < w; p++)
          E += "%" + ("00" + s.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(I, Q) {
        var s = [], E = 0, d, u = "";
        I = g(I);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      LA.ihwrDi = a, i = arguments, LA.WWuSfY = !0;
    }
    var x = t[-1007 * -1 + -4336 + 3329], r = e + x, C = i[r];
    return C ? n = C : (LA.vUtkuS === void 0 && (LA.vUtkuS = !0), n = LA.ihwrDi(n, A), i[r] = n), n;
  }, LA(i, o);
}
function Us({ crosshatch: i }) {
  function o(A, n, g, a, x) {
    return LA(x - 635, n);
  }
  function t(A, n, g, a, x) {
    return LA(n - 214, A);
  }
  function e(A, n, g, a, x) {
    return LA(n - 673, A);
  }
  return i != null && i[e("LJ9#", 914) + "id"] ? pn[t("@m)4", 458) + "r"] : pn[o(866, "HwhE", 866, 876, 868)];
}
(function(i, o) {
  function t(a, x, r, C, I) {
    return pA(r - 729, C);
  }
  const e = i();
  function A(a, x, r, C, I) {
    return pA(x - 112, I);
  }
  function n(a, x, r, C, I) {
    return pA(x - -405, I);
  }
  function g(a, x, r, C, I) {
    return pA(r - -417, C);
  }
  for (; ; )
    try {
      if (parseInt(t(933, 930, 948, "4eCi", 964)) / 1 * (-parseInt(t(948, 943, 940, "dg^6", 956)) / 2) + parseInt(t(956, 925, 943, "Psb4", 928)) / 3 * (-parseInt(t(909, 933, 927, "cvil", 913)) / 4) + parseInt(g(-204, -206, -201, "XEI4", -202)) / 5 * (-parseInt(A(318, 320, 332, 314, "rf1Y")) / 6) + -parseInt(t(916, 910, 926, "6!uJ", 932)) / 7 * (-parseInt(n(-184, -188, -197, -174, "AbL9")) / 8) + -parseInt(n(-192, -177, -164, -182, "wbZC")) / 9 + parseInt(g(-225, -225, -207, "CHB)", -225)) / 10 * (-parseInt(t(941, 957, 958, "C[Ed", 947)) / 11) + parseInt(A(323, 338, 324, 356, "fEgw")) / 12 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Lo, -1 * -791047 + 1 * -817526 + 595476);
function pA(i, o) {
  const t = Lo();
  return pA = function(e, A) {
    e = e - 195;
    let n = t[e];
    if (pA.obEllp === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      pA.nTHcNi = C, i = arguments, pA.obEllp = !0;
    }
    const a = t[-611 * -14 + 3 * 2755 + -16819], x = e + a, r = i[x];
    return r ? n = r : (pA.EwbgFR === void 0 && (pA.EwbgFR = !0), n = pA.nTHcNi(n, A), i[x] = n), n;
  }, pA(i, o);
}
function Lo() {
  const i = ["W60WWQhdRrBcRCoNW6hcRa", "WPnCd2DdW5fk", "WQRcNcdcTea", "WQ5JW7xdIte", "W6GLWRaUDbNdLMFcG2lcVtGpaa", "WQa8bMdcRWO+ymopW7tcO8ozBa", "mxvuwwa", "WPJcOdFcPCoQ", "lH8JW7zaEXBdTCoIW4pcJgHXxq", "u8o5acRcVmoIWOj/BWJcQYm", "WPpdTXzAWPFdH0eaW7pdOSo9DMq", "vspdLSkMrmkdwZldPG", "WO7dLIxdVZJdHmkbWPnk", "k8kuW5fM", "WRm1c8kiFSoCWQnHxthdIxS", "W4aZhqRcHmo9CWpdOG", "sCogWP05emkOzLr9vZhcOW", "WPNdGCkiW47cTmkitfO", "WPxdTCobW6BdOJOYWP0fWRpcMq", "WRX+WQvsBq", "WRyWoL5iWPSsiSoDa8odcq", "W5m9WQu2ta", "W6XgWOxdTMK", "W7RcHSkiW77cMq", "WRtcMei", "kHvi", "WOZdKIRcG1RcTmkXWRTmDCk6qq", "W64NWRiOCbNcOZ3cHelcUdG", "W5NdL2RdO8k+WPSld2fvWO9V", "j8kAC3elWQtcUsrCevBdKq", "fCkUWQWlrCkfEq", "F08aoXnhpmkr", "heGFhCodnIpcTW", "ASouqYSG", "WRhcQ8kmpSo+uxxdNW", "WR82nL5oW7KWoSotkCoZ"];
  return Lo = function() {
    return i;
  }, Lo();
}
function Js({ assetsDirectoryPath: i, children: o, bramble: t }) {
  function e(E, d, u, c, h) {
    return pA(c - -612, u);
  }
  const A = {};
  A[g(-626, -620, -623, -624, "Oimo") + "le"] = t;
  function n(E, d, u, c, h) {
    return pA(d - -907, h);
  }
  A[e(-392, -413, "N2M#", -408) + e(-372, -375, "CHB)", -387) + n(-719, -706, -702, -699, "z#5s") + n(-712, -712, -698, -706, "cvil")] = i;
  function g(E, d, u, c, h) {
    return pA(c - -844, h);
  }
  const { sunfish: a, crosshatch: x } = Ls(A), r = {};
  function C(E, d, u, c, h) {
    return pA(h - 535, d);
  }
  r[g(-651, -646, -648, -641, "cZ]j") + n(-695, -692, -677, -698, "mPgb")] = x;
  function I(E, d, u, c, h) {
    return pA(c - -426, u);
  }
  const Q = RA(() => ({ redfin: Us(r), sunfish: a, crosshatch: x, bramble: t }), [a, x, t]), s = {};
  return s[I(-213, -194, "(rKb", -205)] = Q, s[g(-620, -604, -604, -620, "nOaa") + g(-652, -647, -638, -638, "0@sX")] = o, m(No[C(736, "g2nx", 743, 738, 740) + I(-213, -208, "[WAQ", -219)], s);
}
function Uo() {
  var i = ["W5JdLrZdMrvqW5OcW5xcK8obW4i", "WPqRW6ePjZdcJa", "khP+EwVcLhHcWOjGW6S", "W65Fts0BeCkJW60", "vmkBW4pcPGmrWPKrvSozW649WQG", "W59uESofAbP0k2ZcPamVWOa", "W5/cJCoboLLeW6hdGCk1aSoRW5C", "WP5RWPfMq23dMgX8WRHHWOnv", "WPBdGXvwC8k0W4VcM8o1WQpcHb4", "nZPWyW4Wcmo3W5zekmkI", "W6pdGrFcG1BdKJpdJdeNWR9W", "W6CPgCkXW4GyW6yXE8oBlaG", "W6iTtmoeWPLrW4e8", "FSkcow0OW7/cKmk1W77cHa", "W4ddKSoxW6z6WRySWQC", "aK/cQSoXW4tcUHNdLa/dH35gW7m", "WRJdNmoRkYLAla", "Efu4cmoviSoAW64", "WQjxdY9wW5xcVeFdPCkk", "FSkipMTjW5hcRCknW73cPrG"];
  return Uo = function() {
    return i;
  }, Uo();
}
(function(i, o) {
  function t(x, r, C, I, Q) {
    return ee(x - 963, r);
  }
  var e = i();
  function A(x, r, C, I, Q) {
    return ee(C - 351, r);
  }
  function n(x, r, C, I, Q) {
    return ee(x - -566, r);
  }
  function g(x, r, C, I, Q) {
    return ee(Q - 620, I);
  }
  for (; ; )
    try {
      var a = parseInt(n(-288, "yejX", -282, -289, -280)) / 1 + parseInt(t(1249, "8u(i", 1254, 1258, 1240)) / 2 + parseInt(A(635, "wHAf", 628, 618, 635)) / 3 * (-parseInt(g(905, 915, 917, "bZsn", 910)) / 4) + -parseInt(n(-275, "wHAf", -282, -268, -278)) / 5 * (-parseInt(t(1244, "R2&m", 1249, 1250, 1249)) / 6) + -parseInt(g(899, 905, 899, "bZsn", 909)) / 7 + parseInt(t(1236, "mdJc", 1244, 1243, 1233)) / 8 * (-parseInt(A(627, "IzBP", 625, 625, 615)) / 9) + parseInt(t(1248, "B5gx", 1252, 1239, 1242)) / 10;
      if (a === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Uo, 114920);
function ee(i, o) {
  var t = Uo();
  return ee = function(e, A) {
    e = e - (6530 + 3905 * 1 + -10163);
    var n = t[e];
    if (ee.lFEZqL === void 0) {
      var g = function(I) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (var p = 0, w = s.length; p < w; p++)
          E += "%" + ("00" + s.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(I, Q) {
        var s = [], E = 0, d, u = "";
        I = g(I);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      ee.jeielL = a, i = arguments, ee.lFEZqL = !0;
    }
    var x = t[0], r = e + x, C = i[r];
    return C ? n = C : (ee.tmyzZm === void 0 && (ee.tmyzZm = !0), n = ee.jeielL(n, A), i[r] = n), n;
  }, ee(i, o);
}
function Ys({ analytics: i, crosshatch: o }) {
  return o !== void (-788 + -197 * -4) && !o.isAnalyticsDisabled ? i : void 0;
}
function Os({ analytics: i, appKey: o, redfin: t, crosshatch: e, bramble: A }) {
  const n = {};
  n.analytics = i, n.crosshatch = e;
  const g = Ys(n);
  return Z(() => {
    g && g.init(o);
  }, [g, o]), Z(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), g && g.walleye(t, A.getCustomerName()));
  }, [g, A, e, t]), Z(() => {
    if (g)
      return window.addEventListener("beforeunload", g.endSession), () => {
        g.endSession(), window.removeEventListener("beforeunload", g.endSession);
      };
  }, [g]), g;
}
function Hs({
  analytics: i,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: n } = qt(), g = Os({ analytics: i, redfin: e, appKey: o, crosshatch: A, bramble: n }), a = RA(
    () => ({
      analytics: g
    }),
    [g]
  );
  return /* @__PURE__ */ m(Go.Provider, { value: a, children: t });
}
const Jo = st(void 0);
Jo.displayName = "CameraServiceContext";
function Ks() {
  const i = Fe(Jo);
  if (i === void 0)
    throw new Error(`${Jo.displayName} must be used within a CameraServiceProvider`);
  return i;
}
async function fr() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ji() {
  return (await fr()).filter((o) => o.kind === "videoinput");
}
function Bo(i) {
  i.getTracks().forEach((t) => t.stop());
}
function Dn(i) {
  return i.getVideoTracks()[-6533 + -47 * -139];
}
function NA(i, o) {
  const t = Yo();
  return NA = function(e, A) {
    e = e - 450;
    let n = t[e];
    if (NA.WxnLen === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      NA.nrxJtb = C, i = arguments, NA.WxnLen = !0;
    }
    const a = t[9034 + 299 * 31 + 3 * -6101], x = e + a, r = i[x];
    return r ? n = r : (NA.TSZTOj === void 0 && (NA.TSZTOj = !0), n = NA.nrxJtb(n, A), i[x] = n), n;
  }, NA(i, o);
}
(function(i, o) {
  const t = i();
  function e(a, x, r, C, I) {
    return NA(a - -965, r);
  }
  function A(a, x, r, C, I) {
    return NA(x - -459, a);
  }
  function n(a, x, r, C, I) {
    return NA(x - -541, r);
  }
  function g(a, x, r, C, I) {
    return NA(x - 616, C);
  }
  for (; ; )
    try {
      if (parseInt(g(1071, 1081, 1089, "m7#Y", 1077)) / 1 + -parseInt(n(-71, -73, "Gl@i", -79, -85)) / 2 * (parseInt(A("ok29", -1, -11, -10, -10)) / 3) + -parseInt(n(-68, -72, "3qx)", -74, -61)) / 4 + -parseInt(A("PWJM", -4, -16, -2, -16)) / 5 + parseInt(e(-503, -500, "(6VG", -505, -500)) / 6 + parseInt(e(-498, -492, "ZIDd", -491, -491)) / 7 + -parseInt(A("ZIDd", -3, -12, 6, -2)) / 8 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Yo, 1480387 * 1 + 536182 + 632 * -1826);
function Ps(i) {
  function o(A, n, g, a, x) {
    return NA(g - -740, A);
  }
  const t = new Uint8Array(i);
  function e(A, n, g, a, x) {
    return NA(x - -783, a);
  }
  return window[o("7JX&", -288, -276)](t[e(-305, -304, -308, "DKk8", -313) + "e"](function(A, n) {
    function g(x, r, C, I, Q) {
      return o(r, r - 384, I - 1621);
    }
    function a(x, r, C, I, Q) {
      return o(r, r - 439, I - 608);
    }
    return A + String[a(309, "3qx)", 328, 321) + g(1339, "M)x0", 1356, 1347) + "de"](n);
  }, ""));
}
function mn(i) {
  function o(n, g, a, x, r) {
    return NA(r - 25, g);
  }
  function t(n, g, a, x, r) {
    return NA(n - -821, x);
  }
  const e = new ArrayBuffer(i[o(491, "uNio", 481, 474, 486) + "h"]), A = new Uint8Array(e);
  for (let n = -1450 + -1 * -4144 + -2 * 1347, g = i[t(-348, -354, -358, "#2DY") + "h"]; n < g; n++)
    A[n] = i[o(469, "[SYF", 479, 470, 479) + o(486, ")cyq", 480, 476, 482)](n);
  return e;
}
function Yo() {
  const i = ["WOBcUSkepYe", "WQxdUNNdGh8zWOtcQSksW7VdK8koWQK", "W6ddVCkzW5GEW4nIW47dStiYpq", "WQKtb2GusXDNgSoWaSkvxG", "WPGlaCkaCG", "W6BdQ8k5c8kBzmk4oqnVBva", "WR1pwCkCnweoWROCu8oAbe8", "W5ZcGcZcQsG", "wbpdUmkrdCoxrqTGqmk2W4zN", "dSonW6NcSSo0BNrmh8oPqSk/WOC", "W5lcNsDVySo8WQRcTq", "W71uxZzM", "oqGOag0", "W7pcGhfeEwK5ffJcKCoAW4FdHq", "WQ/dSNJdJN4yWOlcNCkuW5FdLSkzWPu", "WQVcQMdcLmoH", "AmoTeCoNWQLCWOxcQa", "W6tdO8k8cSkzBSoedJrIsNOy", "FSoxz8kOC8kuWRrPW6vbW4XFWRy", "W5ddImkOW6RdMG", "iYjvW5xcL8kXW6dcOSk+lb15fW", "WQKdoGHCWQL/WPZdG8kaECoQwa", "W6BdGCocWOe", "hxNcRJa3WQHcW50Tsmk2vY8"];
  return Yo = function() {
    return i;
  }, Yo();
}
(function(i, o) {
  function t(a, x, r, C, I) {
    return yA(r - -357, x);
  }
  const e = i();
  function A(a, x, r, C, I) {
    return yA(x - -525, r);
  }
  function n(a, x, r, C, I) {
    return yA(C - 877, r);
  }
  function g(a, x, r, C, I) {
    return yA(I - -628, C);
  }
  for (; ; )
    try {
      if (parseInt(g(55, -137, -56, "NkBY", -101)) / 1 + -parseInt(A(186, 39, "*e@l", -8, 195)) / 2 * (parseInt(t(298, "(U@A", 236, 340, 179)) / 3) + parseInt(g(-184, 146, 120, "X3UE", -3)) / 4 * (parseInt(t(175, "6rbA", 240, 317, 300)) / 5) + parseInt(n(1215, 1301, "Rodf", 1346, 1224)) / 6 + -parseInt(t(515, "yqF3", 366, 535, 286)) / 7 * (parseInt(n(1319, 1437, "3#q5", 1372, 1472)) / 8) + -parseInt(g(38, 149, -63, "FxWI", -4)) / 9 * (parseInt(g(-270, -32, 28, "hxRQ", -115)) / 10) + parseInt(g(64, 52, -23, "hxRQ", 36)) / 11 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Oo, -330387 + -2685 * -205 + 173225);
const FA = {};
function Oo() {
  const i = ["DSoVWRGYna", "WODNW7iiza", "W5ZdNq/cKmo4", "smkgWQuVcW", "W6nZiSozWQm", "jwGIW7xdGW", "W6pcISk6Ee4", "WPOLWPb+WQ7cUHDlW4eA", "D8o9W7xdS8k0", "nSkSts/dJa", "W7FcLSoIDmkd", "pae7r8oM", "z25Wz3u", "W6nGW68Puq", "FSo5WPaCoW", "W4LeW6JcQ8oh", "sCkuyNJdLW", "pZJcLcDT", "W6BcTmoMibi", "u8o6gCoyW7W", "DwqztCkE", "DSkLWQmboW", "WPb3lWFdRa", "f8khW5nzoaehWRlcHSkm", "Cc5AxCo+", "W43dKYGoeW", "WO1PbCk9W4e", "WOtdJdWquW", "rNFdL8kUWRK", "q0KvWONdVa", "WQJdGtNcKCo1", "vNxdRHm", "p8oVWP9PCW", "FxxdJJm", "z3LSjMa", "f8ocW5NcGei", "W5XMW4mFAG", "WRNdGqldMau", "W77cNCkhrJu", "fZ5fbce", "zSoThvpdJq", "hmoxjSoiqa", "W7fIeG", "WQ0YjSov", "W4ZdGbvRbW", "BMFdLcTG", "cSo6WPhdVSkq", "ewldSmosWOu", "W7RcPCoFid0", "WQa0WRRcT1y", "zGDQWOiu", "z8odW4q0eW", "W6ZcKmoWrJ0", "iHCTqG", "CmkLWPaHuq", "xWPAACoG", "W7FcPmkhhmoV", "rNiazmos", "luXwsMm", "ySoWWR4VcG", "WR0edhZdNq", "W7tcHSkcrMe", "hNnxi8kx", "iaBcLW", "WP4SWP1WW7W", "W5ZcMSoxc8o5", "aCosWONdSL8", "WOmpg8oGWPe", "gdyDyCox", "cH4XDCoc", "emo9W58Sna", "FmkDqrb5", "bJ9xpqe", "W6edW5aDwW", "ea/cUqSd", "g30QWQ/dRq", "EIpcMSkQW7W", "W54DW5PFta", "j2WxWO7dUG", "jdeHldu", "WPjFbNVdNa", "dNdcQ8koW4a", "DI5laCok", "WOddL33dTSoJ", "imodWOusgW", "WQddJmklW4RdPa", "W4BcKmk2lCoC", "oSkvBr7cKW", "zmkIBmkqWRC", "WOTNwhNdSG", "W57dIY8sbq", "xK9ZvKO", "WR02WP/dNqm", "WRhdIK7dSSoc", "zmoXW4u0oq", "WRZdSwxdK8oi", "ls0KjeO", "W7fSW5hcIW", "ECoYW7dcTv0", "rmoCWQebpG", "WRGhW4zYWQ4", "W5VcQSorzXW", "oLHQWQa2", "yHnUW7aR", "xSoKbMpcTG", "W6xcUSkvkSoA", "vc9dEmod", "W4NdRtdcI8oR", "zrHBq8or", "iCo2jg43W6JcSmoyB8oWWQhdNai", "W6PwdSouWQe", "v8kbqaLn", "W4RcQSoBcCkA", "WPqOW4SIW7K", "fL1nW7xdIq", "smkTW5m", "uvj7qLq", "W6pdN8otWPNcPG", "eSkgW5HwA2j4WRhcPSkXWRycyW", "zbe5W7jT", "uCkaqrHA", "z8oQWRWYzW", "WRBdOCorumkYWPr2pmkJWP5u", "wmkaubZcVq", "uv5fxKi", "F8kQzYvV", "rCoRWO83dW", "t8o3W5BcH1K", "x8kouXHh", "AmkFW6xdGSkM", "CCoHWPWRdW", "bIBcIKb9", "pt8hpZO", "WRRdJrS", "tCodW5pcH2u", "nvLSWQeKWROpWPH+WOO", "W5XcW73dTqa", "DgNdRXH+", "W7RcPHKpDG", "W51Im8osW4e", "xwipWOm8", "WRurjSobW5C", "e3HSnSop", "gcRdGSkiBq", "WQJcT2ZdNmokWP/dO8ozqtq", "thyajSkt", "pgW1WPddPW", "WPdcUcaqtW", "q8kmWQ1upa", "W7BcGSondmkp", "sfZdMfn3", "FKPmFhS", "W6TsW6qG", "qmo0BmkRqG", "W5tdT8oOWQJdOq", "aCoAWPTvDG", "i8oFWOaLnG", "krCTxSoT", "z3n8Exu", "W7StWPziWPy", "kHxcLtfz", "W4dcQ8ohyWm", "m8odW7zpW7FdVSk0W74", "aryYnae", "WPVdQ8owArzbW6FdPa", "W7/cRSoqCSkF", "dmkyW4NcQmkd", "eK0uWQy", "u8kiWQ4irW", "WPFdR8ozzLVdLgxcVwa", "fan+jSoZ", "DeFdJCoAWOi", "uSkYW7XVW78", "W4b3pCoSWQu", "WOLAjIRcJW", "WO3dU1/dP8o8", "WP3dR8ozftVcP0RcG0JcKSkViq", "WRVdQHRcRHO", "zSkirqfM", "W6LYcCooWPS", "uWunESk1", "W6aVW4X0WPi", "l8ooW6FcH1W", "BwRdNazE", "y8kTssNcNW", "zYJdPSoWdW", "W5HwW40/", "gq4AjW8", "W41MW7lcUSo6", "WRaTpCoBWQa", "hvS5oI0", "W4xdPmoOWRJcJa", "jmkIj8oCkW", "W7tcICkiA14", "W6HwxYVcIq", "WOvrWP/dN1W", "W4jMeSooWOq", "W73dRmkCB10", "WRBdTwFdH8oz", "lWGnfa", "iSosW6VcMuu", "itHte8oy", "W61KW5/cNCk2", "nLS5WQfJ", "WRLeWPVcVgq", "WP95W5eJWQy", "cchdV8oEWPFdHahdMMdcKvNcLCoq", "W55mW4i", "nhr7q1K", "ugFdOcmd", "W7ldNMVcVSoW", "WOSiWRdcVeu", "s8k3CfJcVW", "mSoYA8klW6HRlSkC", "iJeEcI8", "v8kpwSk0W5e", "sCk6WRFdSSkX", "xmoDW78ffG", "fGzZpmoT", "v8k1W5r3WO4", "gSo+c8oZcq", "oSk4gCobW7K", "W7dcRSoQDmke", "BSkLWOT+W7K", "W6uDrIddKq", "nCoxca", "mH1WcCoi", "WR/dVMRdJ8oj", "e8o8W67cRgq", "W7rcW6VcQ8oI", "W6VcISozDvW", "W6CluxNcJq", "WOrRE8koW6m", "FH8hgZq", "whdcQ8kFW58", "yxjQzxG", "W57cMCkZlCka", "xNpcQSkpW4i", "Fc1jqmo1", "tSorW5hcJNK", "uf/dVa", "WRldMZVdKmoa", "W5jnvSkOW5tcU8oGyCkNW7hdPq", "W4jBW5asWQu", "ACk0WQ7dRCkr", "qmkcWRhcMmkn", "W6pcOdZdPmo8bcrBua", "W4jYW54NWRW", "W71TW7KFWPa", "ye/dQd9C", "W73dTshcLmoo", "cGXdlCoh", "tuPZwKO", "W5VcKSkQpCon", "FmoMW57cJxa", "W4WGW7ZdKbm", "WQHupmk3W7O", "W4W1W7/dKb0", "W4JcImk6pCor", "nHVcJJ5b", "W4JcP8oUlmkg", "lXLxhgu", "WQ3dH1/dHmoG", "j8oBcSoxla", "d8otWPi", "WQtcHqiyBW", "fWK9WR7dUq", "u8o7W4NcL1K", "uCkvW57dJ8kh", "W5ddOSoPWRpcHW", "n8oTdh3dGW", "pqe9vmo8", "WOmIWQ3cGgu", "W5RcP3NcPwxdLSk7nSkrWPhcHmo3WPW", "WPhdS8k1ECkLe8ofW5BdI8oV", "uSoXECkNWQe", "W71sW44XtW", "W73cMCoxAIu", "rCkdW7PPW60", "W74YcmoBW4i", "eXqWcbK", "xSomqxddUW", "WRhcPelcKCo3", "W6VdLI8EpG", "oCo5dmo8W5O", "yCk3wKK", "smkPW5vIW7C", "W6FdHX0yna", "q2ZcRCkUW6u", "E8o1W7tcRG", "WOxdKGFdHtS", "BepdUmkTWOC", "vCkUW4/dL8kx", "wSkauXZcSW", "DhFcUIea", "WOnOf8kKW4S", "WPqVnSovW5e", "W5SeW6/dOZ0", "W7GYWQbUW4O", "WRW/W47dOra", "yGuTW7WN", "W7P+hSk3W4e", "iY8yfJC", "qSkqxXnx", "BColpvFdRG", "W4bgW7NcTW", "WOVdPLddTmoR", "W4mzW6/dPgm", "DgFdVaTM", "WQPjomkkW6K", "WO0FuSoJW5y", "vSkNW5ZdVmkC", "s8kqvqzE", "nSohWOGxWO/cJCodW4K4W6OzWOKd", "ihySWQJdOW", "W6v7W7qO", "e3ddGZX8", "lmk8lSoXW7O", "ya4QWQ0S", "W5HLW4WcWOO", "j8ogemoZeG", "rYuEbqe", "mSkKp8o4W44", "pSo2WOLqCW", "WRFdOmoww8oH", "WRjzgWBdTW", "wxVcQ8kFW58", "W6/cM8kUdmkX", "WPtcJCo7fSk8", "xxv9Bwu", "W5n6W50aya", "W5q0WQBcOhq", "mSo2o8ogWR86f8ktamozqmoX", "r1ddQbHj", "W58eWQfQWQK", "rGdcTXHt", "pcXkENu", "W6VdLJjQfW", "WQhcMSkeWPZdPW", "W5jmW5ujFa", "WRdcI8kHlCoX", "b2ytWQ8ZWO9XW6i", "WRtcNmovwCo5", "hZm2pa0", "bIhcUqr5", "lSkJW7xcRtG", "fSkpW59zkW0YWRVcHmkN", "WObpWOnFAW", "iCkziGjI", "smo2p8kMrW", "W6ZcOJddGCku", "WRPNoZZdQa", "nmkPsx3cNG", "qvjivu0", "ka4ngW", "WQ4LomowWOy", "sCoBW4RcIL4", "F8kKweG", "gJ3dVmo6W6K", "fZldO0zW", "smoOW7dcLfy", "DmkNW4ddImkG", "zcpdP8oGbq", "b8kbomofWQy", "vsamW5Wl"];
  return Oo = function() {
    return i;
  }, Oo();
}
function yA(i, o) {
  const t = Oo();
  return yA = function(e, A) {
    e = e - (7038 + 1 * -2917 + -3702);
    let n = t[e];
    if (yA.DtQAxb === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      yA.UXwTCr = C, i = arguments, yA.DtQAxb = !0;
    }
    const a = t[8076 + -847 * -4 + -1 * 11464], x = e + a, r = i[x];
    return r ? n = r : (yA.HAVlvc === void 0 && (yA.HAVlvc = !0), n = yA.UXwTCr(n, A), i[x] = n), n;
  }, yA(i, o);
}
FA[F(261, "Mce4") + F(66, "Zpo*") + y(1605, 1590, 1552, 1607, "yWlw") + S(1208, 1268, 1200, 1262, "vejP") + F(15, "[FI1")] = b(1225, 1013, 1309, "D8z*", 1173) + M(258, "USqk", 299, 242) + F(280, "KEps") + b(1199, 1073, 1238, ")FaR", 1251) + S(1480, 1332, 1332, 1383, "yWlw") + b(1127, 1433, 1167, "yqF3", 1255) + F(85, "7j$9") + y(1605, 1536, 1568, 1463, "0s^F");
function F(i, o, t, e, A) {
  return yA(i - -470, o);
}
FA[b(1083, 1056, 1011, "YQc^", 1017) + S(1164, 1101, 1250, 1201, "K^YH") + b(970, 927, 1162, "WVzS", 1097) + y(1676, 1685, 1562, 1566, "YQc^") + M(95, "gh[G", -58, 66) + S(1257, 1375, 1263, 1416, "FxWI")] = b(1017, 1242, 1195, "^5Nn", 1105) + b(940, 903, 810, "ZZ]!", 908) + M(242, "p2eu", 16, 79) + F(26, "WVzS") + y(1599, 1605, 1461, 1530, "Trc9") + S(1379, 1204, 1381, 1337, ")FaR") + S(1288, 1176, 1255, 1104, "era#") + M(127, "ZxcK", 232, 233), FA[y(1313, 1535, 1464, 1494, "USqk") + b(1245, 1008, 1144, "KEps", 1179) + S(1242, 1063, 1159, 1018, "7wxh") + b(1158, 1024, 1151, "yWlw", 986) + b(1370, 1315, 1205, "WVzS", 1244)] = b(752, 896, 960, "6rbA", 921);
function M(i, o, t, e, A) {
  return yA(e - -467, o);
}
FA[F(259, "D8z*") + M(362, "zOe]", 274, 301) + b(1115, 978, 909, "K^YH", 937) + M(59, "mUXn", 155, 30) + M(279, "K^YH", 330, 196) + b(1076, 1177, 1191, "Y6IG", 1224)] = F(292, "23pg") + S(1086, 1190, 1078, 1217, "Trc9") + F(142, "5j0M") + S(1193, 1086, 1184, 1088, "yqF3") + M(117, "5j0M", 102, 117) + b(1144, 1211, 1175, "gU0y", 1063) + S(983, 1047, 866, 1052, "Y6IG") + S(1324, 1297, 1266, 1415, "vpPh"), FA[y(1433, 1370, 1508, 1408, "*e@l") + y(1493, 1327, 1413, 1258, "K^YH") + F(139, "vpPh") + "L"] = b(1048, 1032, 1055, "zOe]", 987) + y(1348, 1400, 1517, 1638, ")FaR") + y(1508, 1416, 1540, 1452, "yqF3") + S(1173, 1175, 1146, 1138, "Mce4") + y(1343, 1522, 1451, 1312, "KEps") + y(1599, 1467, 1557, 1395, "Rodf"), FA[y(1379, 1534, 1463, 1509, "ZZ]!") + y(1551, 1392, 1442, 1273, "X3UE") + y(1728, 1616, 1717, 1815, "Rodf") + S(1327, 1383, 1375, 1546, "Y6IG") + F(184, "K^YH")] = b(1058, 796, 936, "ZxcK", 979) + S(1405, 1325, 1393, 1331, "5oBr") + M(466, "WVzS", 145, 311) + S(982, 1157, 1220, 1125, "5oBr") + y(1373, 1399, 1407, 1228, "mUXn") + S(1363, 1311, 1306, 1200, "YQc^") + y(1214, 1209, 1378, 1370, "YQc^") + S(1338, 1347, 1491, 1493, "5oBr");
function S(i, o, t, e, A) {
  return yA(o - 622, A);
}
FA[y(1488, 1527, 1623, 1514, "J49Z") + F(120, "[FI1") + b(1189, 1034, 1044, "vpPh", 1079) + M(46, "ZZ]!", 193, 102) + S(1255, 1162, 1134, 1323, "(U@A") + "Y"] = F(304, "5j0M") + M(-127, "era#", -86, -14) + y(1638, 1848, 1712, 1748, "MBnw") + F(-38, "gU0y") + y(1503, 1729, 1581, 1594, "USqk") + M(-27, "*e@l", 39, -28) + S(1171, 1323, 1459, 1330, "6rbA") + y(1449, 1383, 1487, 1328, ")FaR"), FA[b(1344, 1121, 1188, "era#", 1190) + M(170, "7j$9", 38, 139) + "NV"] = y(1762, 1593, 1650, 1675, "s1rY"), FA[M(108, "5j0M", 318, 227) + M(-21, "23pg", -86, 13) + F(5, "KEps") + S(1164, 1278, 1190, 1219, "Mce4")] = M(-176, "mUXn", 112, -38) + M(252, "gh[G", 140, 151) + y(1498, 1354, 1380, 1452, "s1rY") + M(135, "J49Z", 164, 160) + b(1075, 1155, 1129, "zOe]", 1239) + F(243, "Zpo*") + F(271, "7wxh") + b(1287, 1377, 1309, "^1!4", 1241) + S(1376, 1360, 1464, 1382, ")FaR") + M(78, "(U@A", 29, 25) + y(1556, 1561, 1538, 1717, "A&32") + b(961, 863, 838, "K^YH", 897) + y(1579, 1348, 1400, 1387, "3#q5") + M(202, "ZxcK", 170, 76) + M(232, "p2eu", 108, 156) + S(1112, 1283, 1353, 1170, "(U@A") + S(1299, 1195, 1299, 1059, "X3UE") + y(1510, 1548, 1541, 1506, "yqF3") + b(922, 1080, 1008, "ZZ]!", 1052) + M(136, "23pg", 224, 176) + y(1757, 1692, 1654, 1743, "23pg") + y(1602, 1406, 1587, 1655, "Y6IG") + S(1474, 1373, 1525, 1356, "gh[G") + y(1399, 1519, 1534, 1596, "6rbA") + y(1537, 1314, 1458, 1415, "X3UE") + F(111, "NkBY") + M(-139, "J49Z", -177, -43) + y(1495, 1685, 1525, 1637, "vejP") + b(1295, 1153, 1102, "s1rY", 1119) + M(360, "D8z*", 70, 250) + M(192, "Y6IG", 59, 133) + b(1093, 1016, 968, "hxRQ", 1112) + b(1152, 1133, 1092, "5oBr", 1107) + S(1123, 1298, 1248, 1174, ")FaR") + S(1344, 1280, 1263, 1113, "7j$9") + y(1249, 1434, 1387, 1536, "MBnw") + M(141, "zOe]", 329, 161) + y(1533, 1282, 1409, 1371, "KEps") + y(1441, 1577, 1576, 1571, "7wxh") + F(-19, "k4Tv") + S(891, 1071, 1154, 1140, "[FI1") + S(1043, 1057, 1103, 1034, "MBnw") + b(1234, 1098, 1371, "mUXn", 1196) + y(1774, 1707, 1723, 1541, "vpPh") + F(210, "KEps") + y(1505, 1489, 1544, 1576, "ZZ]!") + M(94, "0s^F", 333, 268) + y(1679, 1614, 1555, 1402, "6rbA") + M(-113, "6rbA", -126, -33) + S(1208, 1178, 1324, 1060, "yqF3") + b(1066, 731, 741, "mUXn", 901) + b(1121, 1084, 1247, "KEps", 1078) + y(1577, 1501, 1420, 1539, "[FI1") + b(1184, 1186, 1289, "Trc9", 1149) + y(1594, 1565, 1424, 1467, "yWlw") + F(221, "vpPh") + F(264, "zOe]") + S(986, 1136, 1217, 1150, "5j0M") + S(1069, 1151, 1017, 1149, "K^YH") + M(69, "KEps", 77, 35) + M(300, "Trc9", 188, 281) + S(1472, 1376, 1361, 1403, "zOe]") + M(-174, "gU0y", 90, -40) + M(63, "s1rY", 211, 96) + F(183, "kICk") + M(232, "5oBr", 230, 154) + F(218, "7wxh") + F(307, "NkBY") + y(1626, 1781, 1649, 1515, "[FI1") + F(102, "0s^F") + y(1794, 1791, 1648, 1729, "(U@A") + b(1337, 1385, 1240, "6rbA", 1221) + S(1015, 1161, 1032, 1046, "Mce4") + F(198, "0s^F") + y(1674, 1680, 1584, 1722, "USqk") + S(1185, 1274, 1252, 1443, "vejP") + S(1043, 1099, 959, 971, "Rodf") + b(1200, 1196, 1254, "K^YH", 1174) + F(-9, "^5Nn") + y(1454, 1761, 1591, 1589, "k4Tv") + y(1573, 1780, 1615, 1737, "0s^F") + S(1284, 1184, 1179, 1044, "p2eu") + M(132, "USqk", 395, 277) + b(968, 840, 955, "^5Nn", 1022) + b(1147, 1122, 1258, "kICk", 1230) + y(1631, 1675, 1571, 1392, "hxRQ") + S(1134, 1309, 1323, 1284, "KEps") + y(1290, 1525, 1386, 1313, "6rbA") + F(74, "NkBY") + b(1086, 1154, 1321, "^5Nn", 1195) + b(1233, 1268, 1104, "FxWI", 1116) + b(1348, 1108, 1040, "vpPh", 1168) + y(1460, 1384, 1397, 1383, "s1rY") + b(1266, 1323, 1266, "[FI1", 1186) + F(-42, "D8z*") + b(1285, 1194, 1263, "mUXn", 1140) + y(1578, 1566, 1435, 1385, "ZZ]!") + S(1118, 1127, 1206, 1233, "YQc^") + F(58, "FxWI") + M(255, "NkBY", 336, 255) + S(1406, 1253, 1086, 1226, "5j0M") + b(1015, 910, 918, "MBnw", 982) + S(1236, 1146, 1124, 992, "^5Nn") + b(1004, 1005, 1037, "KEps", 917) + F(147, "mUXn") + y(1419, 1405, 1501, 1487, "KEps") + F(125, "A&32") + M(38, "Y6IG", -3, 34) + y(1494, 1790, 1611, 1446, "^1!4") + S(1345, 1216, 1368, 1072, "yqF3") + b(877, 954, 904, "7j$9", 962) + S(1067, 1052, 916, 1018, "kICk") + M(355, "MBnw", 394, 270) + y(1356, 1537, 1389, 1364, "kICk") + b(1227, 1191, 1141, "6rbA", 1108) + b(1336, 1199, 1115, "3#q5", 1193) + F(290, "7wxh") + S(1315, 1193, 1248, 1077, "ZxcK") + y(1411, 1511, 1414, 1548, "Rodf") + M(-132, "^5Nn", 17, 23) + b(1310, 1339, 1211, "J49Z", 1227) + S(997, 1079, 1123, 1141, "#9kk") + F(272, "vejP") + b(955, 1037, 987, "23pg", 1094) + M(289, "[FI1", 72, 138) + S(1440, 1385, 1541, 1339, "USqk") + y(1571, 1534, 1672, 1660, "MBnw") + F(-50, "WVzS") + b(1311, 1376, 1164, "#9kk", 1248) + b(930, 1015, 1134, "hxRQ", 1049) + y(1546, 1435, 1412, 1243, "era#") + y(1597, 1372, 1502, 1514, "Y6IG") + y(1785, 1731, 1724, 1625, "gh[G") + S(1307, 1147, 1255, 1199, ")FaR") + M(284, "7j$9", 247, 183) + y(1597, 1673, 1627, 1574, "k4Tv") + M(35, "5j0M", 34, -44) + M(176, "23pg", 94, 195) + y(1523, 1397, 1577, 1755, "0s^F") + y(1751, 1419, 1589, 1721, "(U@A") + S(1262, 1110, 995, 1202, "Y6IG") + S(1390, 1341, 1457, 1518, "Rodf") + b(1068, 852, 1136, "5j0M", 958) + S(1287, 1389, 1514, 1325, "MBnw") + y(1722, 1723, 1658, 1536, "MBnw") + b(921, 1051, 1163, "#9kk", 1006) + y(1724, 1780, 1666, 1655, "23pg") + F(28, "9d[)") + M(348, "6q^h", 21, 171) + b(1170, 1100, 1284, "Y6IG", 1134) + S(1321, 1393, 1323, 1548, "#9kk") + b(1050, 1205, 1242, "Y6IG", 1142) + b(919, 1e3, 880, ")FaR", 915) + b(864, 1153, 1102, "hxRQ", 1045) + M(-124, "#9kk", 107, -8) + F(212, "p2eu") + S(1259, 1121, 1076, 1225, "Rodf") + y(1540, 1657, 1699, 1573, "ZxcK") + y(1539, 1596, 1675, 1527, "yWlw") + F(295, "p2eu") + F(-39, ")FaR") + F(97, "A&32") + b(1082, 1124, 1219, "6rbA", 1132) + F(64, "Y6IG") + b(1080, 1082, 1205, "X3UE", 1201) + y(1292, 1394, 1363, 1407, "Rodf") + b(954, 890, 1047, "X3UE", 938) + y(1575, 1355, 1448, 1593, "Trc9") + F(-14, "vpPh") + y(1744, 1674, 1656, 1833, "0s^F") + F(200, "yqF3") + y(1337, 1680, 1503, 1383, "3#q5") + y(1777, 1515, 1644, 1802, ")FaR") + y(1639, 1657, 1558, 1683, "9d[)") + F(109, "gh[G") + y(1586, 1705, 1614, 1512, "kICk") + S(1145, 1170, 1110, 1182, "NkBY") + F(208, "vpPh") + b(1089, 872, 923, "kICk", 1016) + y(1577, 1668, 1507, 1650, "kICk") + y(1513, 1410, 1474, 1524, "yqF3") + S(1508, 1365, 1490, 1314, "9d[)") + F(19, "9d[)") + S(1270, 1202, 1354, 1143, "Mce4") + y(1728, 1762, 1613, 1697, "ZxcK") + y(1592, 1678, 1687, 1752, "mUXn") + F(226, "gh[G") + y(1647, 1581, 1529, 1546, "X3UE") + M(128, "s1rY", -102, 7) + F(185, "5oBr") + S(1247, 1270, 1201, 1408, "7j$9") + y(1739, 1563, 1628, 1746, "yWlw") + y(1573, 1389, 1468, 1536, "6rbA") + y(1523, 1604, 1621, 1699, "X3UE") + M(136, "^1!4", -135, 24) + M(197, "23pg", -22, 50) + b(913, 901, 957, "^1!4", 929) + S(1227, 1065, 1151, 1133, "7j$9") + y(1769, 1560, 1674, 1501, "s1rY") + M(88, "Zpo*", -120, 27), FA[F(-33, "vpPh") + b(1254, 1131, 1123, "yWlw", 1254)] = "/", FA[b(1187, 1224, 1374, "(U@A", 1234)] = S(1151, 1090, 1248, 1086, "YQc^") + y(1542, 1256, 1423, 1288, "MBnw"), FA[F(106, "ZxcK")] = !1;
function y(i, o, t, e, A) {
  return yA(t - 942, A);
}
FA[S(1249, 1288, 1225, 1198, "D8z*")] = !0;
function b(i, o, t, e, A) {
  return yA(A - 475, e);
}
FA[b(911, 1097, 840, "FxWI", 959)] = !1, FA[F(144, "ZxcK") + b(1079, 901, 914, "hxRQ", 998) + F(257, "WVzS") + S(960, 1130, 1278, 964, "WVzS")] = S(1240, 1358, 1454, 1209, "ZZ]!");
var ya = FA;
async function Ts() {
  const i = {};
  i[o("Mce4", 1131, 1122, 1284)] = Fo, i[o("6rbA", 1232, 1406, 1161) + "h"] = 256;
  function o(C, I, Q, s, E) {
    return S(C - 416, I - 61, Q - 463, s - 117, C);
  }
  const t = await window[n(-70, 99, "3#q5") + "o"][a(1641, 1493, "vpPh") + "e"][g(488, 452, "D8z*", 497, 482) + r(983, 730, "5oBr", 788, 849) + "y"](i, !0, [a(1486, 1405, "Y6IG") + "pt", o("gU0y", 1268, 1123, 1119) + "pt"]), e = Uint8Array[o("5j0M", 1233, 1412, 1095)](Array(1 * -2441 + -2539 * 1 + 4996)[o("[FI1", 1323, 1481, 1419)](1 * -2393 + -5520 + 41 * 193)), A = window[a(1211, 1273, "ZZ]!") + "o"][o("vejP", 1290, 1182, 1333) + o("X3UE", 1294, 1119, 1347) + o("era#", 1334, 1334, 1214)](e);
  function n(C, I, Q, s, E) {
    return b(C - 337, I - 268, Q - 37, Q, I - -977);
  }
  function g(C, I, Q, s, E) {
    return F(E - 262, Q);
  }
  function a(C, I, Q, s, E) {
    return M(C - 343, Q, Q - 258, I - 1188);
  }
  const x = {};
  function r(C, I, Q, s, E) {
    return b(C - 125, I - 277, Q - 105, Q, E - -382);
  }
  return x[a(1547, 1479, "^5Nn")] = t, x.iv = A, x;
}
async function qs(i) {
  const { iv: o, key: t } = await Ts();
  function e(I, Q, s, E, d) {
    return M(I - 314, d, s - 341, Q - -488);
  }
  const A = {};
  A[g(-416, -246, -324, -147, "Mce4")] = Fo, A.iv = o;
  function n(I, Q, s, E, d) {
    return y(I - 387, Q - 497, Q - -678, E - 40, I);
  }
  function g(I, Q, s, E, d) {
    return y(I - 120, Q - 238, Q - -1636, E - 93, d);
  }
  const a = await window[r("KEps", 339, 477, 273, 363) + "o"][g(-123, -184, -309, -348, "k4Tv") + "e"][n("KEps", 850, 852, 1015) + "pt"](A, t, i), x = await window[e(-48, -172, -167, -4, "(U@A") + "o"][e(-294, -260, -120, -135, "yWlw") + "e"][n("vejP", 924, 804, 1055) + e(-599, -418, -356, -596, "yqF3")](e(-402, -489, -512, -514, "23pg"), t);
  function r(I, Q, s, E, d) {
    return F(d - 105, I);
  }
  const C = {};
  return C[r("K^YH", 67, 45, -3, 111) + "ge"] = a, C[g(-66, -136, -227, -238, "D8z*")] = x, C.iv = o, C;
}
async function js(i) {
  const o = ya[a(991, 984, 1058, 937, "MBnw") + r(1293, 1446, 1289, 1453, "7j$9") + "EY"], t = ya[A("USqk", -641, -549, -460) + A("gh[G", -369, -491, -431) + "V"];
  if (!i || !o || !t) return void (8216 + 1985 * 3 + -14171);
  const e = new TextEncoder();
  function A(h, p, w, k, R) {
    return F(k - -512, h);
  }
  const n = e[a(1119, 1018, 1067, 1095, "6rbA") + "e"](i), g = window[a(1059, 1015, 1096, 1087, "mUXn")](o);
  function a(h, p, w, k, R) {
    return b(h - 190, p - 354, w - 11, R, h - 66);
  }
  function x(h, p, w, k, R) {
    return y(h - 459, p - 112, k - -1174, k - 129, w);
  }
  function r(h, p, w, k, R) {
    return b(h - 486, p - 298, w - 240, R, w - 206);
  }
  const C = window[r(1250, 1230, 1386, 1214, "5j0M")](t), I = mn(g), Q = mn(C), s = {};
  function E(h, p, w, k, R) {
    return b(h - 174, p - 414, w - 336, w, k - -872);
  }
  s[r(1044, 1223, 1184, 1055, "J49Z")] = Fo, s[E(31, 20, "kICk", 141) + "h"] = 128;
  const d = await window[A("WVzS", -439, -675, -563) + "o"][E(-72, -44, "zOe]", 55) + "e"][A("#9kk", -389, -501, -393) + E(467, 169, "Y6IG", 350)](A("Y6IG", -218, -426, -391), I, s, !1, [A("#9kk", -282, -216, -242) + "pt"]), u = {};
  u[E(155, 199, "s1rY", 239)] = Fo, u.iv = Q;
  const c = await window[A("WVzS", -597, -640, -563) + "o"][x(135, 317, "^5Nn", 298) + "e"][a(1218, 1242, 1392, 1049, "gU0y") + "pt"](u, d, n);
  return Ps(c);
}
function Ie(i, o, t, e, A) {
  return dA(A - -308, e);
}
(function(i, o) {
  const t = i();
  function e(x, r, C, I, Q) {
    return dA(x - 382, I);
  }
  function A(x, r, C, I, Q) {
    return dA(x - -962, r);
  }
  function n(x, r, C, I, Q) {
    return dA(C - 423, I);
  }
  function g(x, r, C, I, Q) {
    return dA(r - 15, C);
  }
  function a(x, r, C, I, Q) {
    return dA(x - 308, I);
  }
  for (; ; )
    try {
      if (parseInt(a(760, 743, 731, "@3pY", 771)) / 1 * (parseInt(g(446, 472, "]J3c", 439, 479)) / 2) + -parseInt(a(802, 757, 763, "I(2M", 802)) / 3 * (parseInt(a(764, 750, 796, "*Aff", 795)) / 4) + parseInt(e(913, 957, 960, "]dco", 918)) / 5 * (-parseInt(n(907, 913, 951, "@3pY", 996)) / 6) + -parseInt(a(840, 881, 844, "N*rF", 805)) / 7 + -parseInt(g(494, 476, "cZ7j", 514, 482)) / 8 * (-parseInt(e(881, 854, 887, "nj1R", 882)) / 9) + -parseInt(e(895, 886, 892, "N*rF", 862)) / 10 * (-parseInt(A(-447, "(0Ei", -488, -418, -443)) / 11) + -parseInt(a(848, 825, 849, "cZ7j", 884)) / 12 * (-parseInt(g(498, 520, "cZ7j", 519, 499)) / 13) === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ho, -34 * -23596 + -1 * -665719 + -848628);
const Zs = -1 * 1684 + -4 * 933 + -2 * -4208, _s = -9043 + 201 * 2 + -15641 * -1, pr = 22 * -242 + -7277 + 12604, yr = 0 + 0.5, Dr = {};
Dr[TA("FcwR", -338, -397, -351)] = 1280;
const mr = {};
mr[TA("q%r4", -355, -394, -363)] = 720;
const wr = {};
wr[nA(-469, -458, -481, "yxiN")] = 60;
const Qo = {};
Qo[Ie(268, 261, 181, "j3Z@", 219)] = Dr, Qo[TA("MgK9", -326, -397, -347) + "t"] = mr, Qo[jA(1130, 1127, 1157, "0gx^") + jA(1103, 1105, 1082, "!RAp")] = wr;
const br = {};
br[nA(-549, -525, -511, "n4J*")] = 1920;
const kr = {};
kr[nA(-380, -448, -423, "djAV")] = 1080;
const Eo = {};
Eo[jA(1140, 1132, 1109, "c!Ty")] = br, Eo[TA("s!41", -359, -407, -400) + "t"] = kr, Eo[TA("w9xz", -363, -386, -402) + Ie(182, 192, 136, "FcwR", 163)] = 30;
function jA(i, o, t, e, A) {
  return dA(o - 624, e);
}
const Gr = {};
Gr[jA(1072, 1079, 1081, "djAV")] = 1;
const Sr = {};
Sr[TA("nj1R", -364, -454, -410)] = 1;
const Nr = {};
Nr[Ie(206, 144, 193, "c!Ty", 182)] = 1;
function Ho() {
  const i = ["DLZdK3vv", "W4xdOKj/na", "i2NdKmokWP9oEG", "WPddRmogjSkE", "W6i6WPi", "W53cOmo7qHbhn8oNDmoeWPrjWO4", "WR/dPHRcN8og", "tCkXgtmZ", "zWZdMwa2nKv5Cq", "w2RcHWJdIa", "iCoKWQag", "FCkJxSkAWOC", "zehdGa", "WQCusKpdIq", "W5hcIahdRmk9", "lr8jaCkP", "WOGzASklkrmomW", "pbCEaq", "u8o+W7SaWR4KsXZdNt3dV8kLxq", "lNP3WOddIa", "W68wWRtdKmku", "W6epqCk3Cq", "nqmdaq", "WQVdOrxcTSow", "FSk8bGek", "pHBcNSoPW7O", "WPu9CMu", "W60BaMfp", "WQ3dUWK", "iSonW4z2jvaCWO3dSq", "C2ldP8k7WQ4", "WR4doa1zWROUW4JcICo/zCkT", "jCoRWQWHWO0", "bmoQb0zS", "W4mDxmoqWPFcUCkZW6BdOq", "WO8DhmoRCg40kSoQmCkKWQG", "nHKA", "zmkjt8kAWOa", "WPVdO8kMmvC", "mSk/jCk5WRG", "WQ8guL3dIG", "zMldK8oucq", "W78Bgw9i", "yqddLWDlq21yvmkhvSkY", "m2vSWOu", "j8omW4v6hLufWRBdNG", "BJJcGmoTW790BW", "WRvofCoJnXf+W7LjWQ1Gpa", "W4iXWOpcLKq", "ngrjgHC", "ju1WWRiUW6xdHSkZy8k/WPDoWPa", "bSkCumo+WQq", "pmk8cSk/WRm", "pXFcKSoVW74", "WR4dpuK5W7GjW6/cPW", "jSojWQebWOC", "xSk8bG0", "ohHnga8", "WRyEWPjRESoTWRW", "W4HLme5AW73dSSoqoW", "W53dJfWQWPy", "F0xdUCoVWQm", "krClemks", "yG/dNaDntXX+uCkXrmknWQm", "W5ZcRCkOASkm", "mHmeeSkP", "BwK4rw7dIhBcQdBdHgxdIq", "W4FdHfy8", "WOldRmoRpmkc", "W6ODcMne", "WOblhCoTWRO", "pSkKW5P7cq", "WPRdT8kUegq", "W5ywvmkX", "WRKvv1ZdIq", "xCoJW4eZWQW", "ltrLcW", "WPnzhq", "m2HLWPFdUG", "W6ZdI8o5WP8UmNGY", "o2fFdW", "W4pcTY8", "W70HWPDPFG", "W7BdOf1z", "lSoRWRGzWOO", "W64REmolWQm", "ka8UgSkV", "W6LBFK4", "e8kNWQXmW68", "W5bPd8osvG", "wSkWoZ8P", "sIX/mu9MdmkcW6OSWRpcPG", "B8kYw8knWPS", "WO4MAfDo", "ySkPaq", "WOGrWO/cPx55W7q", "WQ57lmkxW5mCsCk/iCk5ASkL", "zWddN0mTa2LDEW", "uwFcIb8"];
  return Ho = function() {
    return i;
  }, Ho();
}
const lo = {};
lo[TA("(0Ei", -403, -393, -383)] = Gr, lo[TA("MX!s", -315, -288, -333) + "t"] = Sr, lo[TA("mTLW", -333, -353, -352) + mA(1092, 1109, 1150, "v%^d")] = Nr;
const Fr = {};
Fr[jA(1203, 1162, 1204, "tbN#")] = 1;
const Rr = {};
Rr[nA(-524, -523, -482, "$Fhz")] = 1;
const Mr = {};
Mr[Ie(129, 148, 154, "MgK9", 143)] = 1;
const uo = {};
uo[jA(1135, 1136, 1177, "AjVn")] = Fr, uo[mA(1163, 1118, 1142, "AjVn") + "t"] = Rr, uo[nA(-434, -470, -472, "@cr%") + mA(1093, 1136, 1106, "!RAp")] = Mr;
const i0 = {};
i0[TA("@3pY", -405, -390, -384)] = Qo, i0[jA(1129, 1094, 1081, "nX2m") + TA("]dco", -434, -356, -394)] = Eo, i0[Ie(262, 245, 201, "Mqx%", 233)] = lo, i0[nA(-479, -534, -493, "Mqx%") + mA(1133, 1156, 1130, "*Aff")] = uo;
const Ko = i0;
function TA(i, o, t, e, A) {
  return dA(e - -869, i);
}
const bt = {};
bt[Ie(175, 250, 244, "HT2q", 221) + nA(-423, -471, -424, "W4Pj") + Ie(206, 176, 222, "et)p", 192)] = Zs;
function nA(i, o, t, e, A) {
  return dA(t - -969, e);
}
function dA(i, o) {
  const t = Ho();
  return dA = function(e, A) {
    e = e - (-23 * -211 + -1772 + 1315 * -2);
    let n = t[e];
    if (dA.bwRLZV === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      dA.ggZEsr = C, i = arguments, dA.bwRLZV = !0;
    }
    const a = t[7896 * -1 + -1355 + 11 * 841], x = e + a, r = i[x];
    return r ? n = r : (dA.ogEZTf === void 0 && (dA.ogEZTf = !0), n = dA.ggZEsr(n, A), i[x] = n), n;
  }, dA(i, o);
}
bt[mA(1162, 1127, 1173, "9y2h") + Ie(186, 226, 203, "AjVn", 176) + Ie(201, 210, 169, "*Aff", 172) + nA(-458, -475, -477, "v%^d")] = Ko[jA(1113, 1102, 1078, "djAV")];
function mA(i, o, t, e, A) {
  return dA(o - 655, e);
}
bt[TA("9y2h", -324, -319, -332) + mA(1171, 1153, 1123, "!RAp") + Ie(175, 236, 180, "9y2h", 202) + mA(1172, 1162, 1133, "HT2q")] = Ko[nA(-513, -531, -486, "I(2M") + mA(1161, 1134, 1122, "zkH*")], bt[mA(1158, 1128, 1137, "XzAR") + jA(1190, 1143, 1159, "AjVn")] = pr, bt[Ie(238, 185, 241, "0gx^", 212) + nA(-461, -534, -501, "]dco") + nA(-466, -464, -435, "c!Ty") + nA(-478, -480, -507, "N3pk") + nA(-441, -460, -460, "@cr%")] = yr;
const pt = {};
pt[nA(-421, -409, -421, "mtya") + mA(1079, 1121, 1131, "et)p") + nA(-449, -461, -445, "w9xz")] = _s, pt[nA(-428, -489, -458, "QC*#") + mA(1152, 1159, 1152, "yxiN") + Ie(221, 268, 270, "w9xz", 231) + jA(1109, 1116, 1072, "v%^d")] = Ko[nA(-473, -486, -495, "sEg7")], pt[mA(1164, 1137, 1125, "HT2q") + mA(1232, 1185, 1166, "6lxp") + jA(1093, 1140, 1119, "Mqx%") + mA(1155, 1178, 1162, "]J3c")] = Ko[nA(-501, -546, -509, "AjVn") + mA(1186, 1188, 1162, "AjVn")], pt[mA(1167, 1146, 1116, "]J3c") + nA(-430, -472, -473, "q%r4")] = pr, pt[nA(-419, -425, -434, "nX2m") + nA(-446, -480, -448, "v%^d") + jA(1118, 1077, 1104, "HT2q") + TA("MX!s", -316, -302, -320) + TA("0gx^", -317, -296, -344)] = yr;
const wn = {};
wn[mA(1172, 1169, 1207, "AjVn")] = bt, wn[jA(1062, 1089, 1072, "n4J*")] = pt;
const Vs = wn;
function Ce(i, o, t, e, A) {
  return lA(i - 657, t);
}
function HA(i, o, t, e, A) {
  return lA(i - 394, t);
}
function oA(i, o, t, e, A) {
  return lA(t - -770, e);
}
(function(i, o) {
  function t(x, r, C, I, Q) {
    return lA(C - 64, Q);
  }
  function e(x, r, C, I, Q) {
    return lA(x - 246, Q);
  }
  function A(x, r, C, I, Q) {
    return lA(Q - -898, I);
  }
  const n = i();
  function g(x, r, C, I, Q) {
    return lA(Q - 51, x);
  }
  function a(x, r, C, I, Q) {
    return lA(Q - 677, C);
  }
  for (; ; )
    try {
      if (-parseInt(g("F!vT", 504, 575, 553, 494)) / 1 + -parseInt(g("hAGj", 653, 617, 404, 539)) / 2 + parseInt(g("F!vT", 598, 645, 597, 538)) / 3 * (parseInt(g("H&V(", 444, 580, 386, 452)) / 4) + parseInt(e(572, 525, 594, 593, "l(&g")) / 5 * (-parseInt(A(-407, -327, -225, "@tN[", -301)) / 6) + parseInt(t(686, 676, 617, 747, "Rx^1")) / 7 * (parseInt(A(-436, -288, -354, "gP(p", -325)) / 8) + -parseInt(a(1037, 1078, "H&V(", 1152, 1105)) / 9 + parseInt(e(638, 533, 712, 728, "XKge")) / 10 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Po, 1066918 + -2182 * -57 + -311751);
function rA(i, o, t, e, A) {
  return lA(o - 38, t);
}
function Po() {
  const i = ["W7O6bthcKq", "zCkaWQpdHfv0FL4", "W65sW6aRWRe", "iCo6W6HLva", "mbPtm8kt", "W7DEW70IWOy", "W4TlW6tdLLC", "W6HyW6aRWPa", "sv7dLmo8W6q", "lqxcNCk8ya", "W63dJCoHBmow", "dxOpztm", "W5fxzZbu", "W41Dzq", "pdBdKSk2W7y", "iKVdQdi", "W6GsWQhcPCkt", "t1RdKmo+", "rW7cKwFdHG", "W6XjW408xq", "d0xdQYqT", "W6LsWQZcU8kb", "amogcfzp", "u8oCn8oFuq", "rCo/WQW", "ufFcPW", "tmoghmomwW", "WRfClSk2W6W", "zmkcW6JcMZCsn0iAW6BdM8oAaW", "W74AdW", "B0tdHNSH", "W6ZcHvukeW", "EaPobW", "rW7cMW", "ir1ybSkc", "W7jyW4y3xq", "zaHmdmkt", "W6RdVexdMbW", "WOVdQrybW6y", "W7ujWRZcHCke", "W4zesYHf", "wb0aW7yI", "DY8vWOpcPa", "z8kjW7FdU8oHC8o6sMzOamkVW7W", "B2hdRmo1W5W", "W5bVW6mmWQ4", "kCowhL5A", "CWvx", "ttFcI0xdJa", "qX8mW5e4", "FqipWPlcRG", "kvldSsu4", "WOmUyuBdSW", "WOVdUX0hW6W", "WQnhnCkDW6O", "WQxdNvZcIg0", "aSoQWQtcJmkH", "WPNdU8oXW67cUq", "dZ93pSk3", "WPvqgSoyqq", "kmoQca", "W4xdMSksbq8", "WQqdW67dSSkI", "aYpdGSk2W7S", "WRzgkmkCW70", "W44YWOBcGCkW", "W4pdU8oJode", "tYlcJwBdJa", "W6HAW6yRWPC", "h8oqW5inW5W", "W5G8hJJcKq", "W6WoWQVcLmkz", "larOqfS", "WQjskmkAW6i", "WQ3cMtRcISoj", "ggiNyYq", "gmodW5GUW40", "n8oYW79Iva", "wuldLwyN", "WRuOEehdOW", "FWrn", "WPWpWQFcGMdcOvCAW6G4", "W71sW4ldGMq", "r2hdICoEW5a", "F8kswWywdXOqBCoFW5pcVWW", "kmorhLbC", "W6GgWQBcN8kc", "zmkoW7tdVSoGC8kMyg9veCkw", "W6ucA8okWRujfubdzXZdHei", "WR1kWOfSxq", "xSoWWRzhWRa", "WQ7dT1ZdHv8", "mSoBWRpcOmkY", "W5ldICk2dH8", "WRCvW6RdJCouqmo2oHOTbCopwq", "WQ9vj8obsq", "nSosW79QwW", "qsBcKMtdMW", "yCowo1iw", "uHelW4W4", "WRuzW67dLCkZ", "tSo0WQLcWQa", "WQpdIKBcIxG", "W4PmW6tdMfe", "yG5ra8ku", "ECoym1iW", "kmocjW", "W4DKDxS2", "WP8Sy00", "EfxdKwa2", "Earu", "W6OiWRZcMmkc", "WOBcKYBcGCof", "W4VcKe4daq", "WOVcVYS", "FSk0BSo7lG", "W5nvW6mSWO0", "nazzaSkz", "sSoAc8ob", "W7W2hXFcLa", "lH1OvuC", "W7rPW6O2WPy", "W7nnW5y1ta", "W4bxqY9F", "uq8lWOtcUq", "WPqiEeNdRa", "W59OW7ldN3m", "aIFdKSkY", "W45iW7pdHui", "iW7cGmkDmW", "WRrCmSkaW7K", "WQRdUmo+W6q", "W6LpW643WPC", "W41Wre0H", "CwBcLbxcVa", "f3CkyYq", "WQJdU8oQW7pcQq", "lG5FaSkA", "DWqGWOxcVW", "WRFdSCo7W7tcRa", "Cq5xmCkf", "cJZcOgCv", "WQFcKKhcNM0", "yvpdUM5Q", "paXTqLS", "oSo4W6C", "hmkLWR1OWRnLWP4r", "W6VdNf/dLbi", "WOhdKbKeW6a", "W6VcT8kJWPVdLq", "z2JdT8oRW40", "jutdRcn5", "WQmHwL3dHW", "FrJcSwbRWPBcRM7dICkfWPaYW64", "yCoEm0iy", "vvNcSa", "zaKbWPlcOG", "au/dOt44", "WQToWP5RsG", "WRj6oa", "kmoQaLLb", "WQKnW63dPa", "WRtdU8oO", "jXLCc8kd", "W5FdVCoPpY0", "jCovWRldHNe", "wCoDhCoiqa", "F1hdIMWN", "W4NdUSo5oa", "WPBdRbKXW6y", "jX1pcmke", "zSkHEmo9pW", "W4zDW7pdVK0", "WPBcOmoVcdvNmSkv", "wXSgW4S", "sSodgCoqrW", "lqtcMG", "W5G8bsFcGq", "W6pcNCoMtCoh", "rr8mW5m/", "W6jhWQ7cLSkh", "WQajW7tdKSkZ", "nGRcNCkMna", "qGOCW5mP", "W6VdKfC", "wrSmW5GK", "pe/dTZe2", "WQpdU1ZcNxy", "W5VcI1ivfa", "ACo+WQPhWQC", "WRZcRuVdNs8HyCkc", "e0Gl", "o8oxmCkR", "WRtdHSo6W67cUa", "nHP/vv0", "WOyve3eaWQFcQahcTJSQWQm", "hs/cU2yt", "W5/dG3VdKmkvWPFdQs3cJbFdSa", "rc3cSKNdSa", "WQ/dGx3cJxW", "cYVcPgee", "W4dcICo6E8oR", "W73dTvZdHG", "CX9f", "W4mqaIpcMq", "W7KgWQlcLmke", "WRPgkmkwW6K", "W7G8bsFcGq", "eGRcJmkUW4/dNNNdOgK9", "AfhdJMuM", "k8oPkG", "W5PetYm", "WRzFc8ohqa", "W6/dUmkshbC", "dJBdHCkqW7y", "W7NcMSkoWP/dTa", "jWtcMSk7na", "W7tcHv4dda", "dSojW5OcW5S", "W7mqWORcHSkq", "W7RdUfRdNqW", "W6JcImoKymob", "qtpcU2tdNW", "oCokaLHD", "CW9Memks", "pSogghXb", "W6PuW6yRWPC", "tYdcVxXh", "ashcVg0", "rMxdJ8owW4S", "WP4mWQlcGbhdLICTW6yIc8oTea", "WQ9fg8obsq", "W6NcOSkSWQ7dVXeWuv3dL2S0kG", "WOCKAK3dRW", "rmkYB8oOoq", "qWSlW6WL", "y1VdQwzM", "wmojoKuA", "W4PnW6pdM1C", "tgBcPW/cLG", "WQTpkSouuG", "W6FcU8k/WPNdLa", "WOiEW7ldRSkK", "WQvsnCkDW7K", "WRPaWPL2sG", "ASoKECo/lG", "malcMSkVmW", "sYJcKq", "WOdcLYlcGW", "WRNdU8oXW67cUq", "W7RdUSoWW6NdRq", "W5Pruq", "mrTec8kt", "W4DrwYPu", "WPmvW5hdQ8k+", "kCoFlmk4vq", "setcVYxcKW", "W5ldLCkpgri", "W4XmW7pdLLC", "Dmolg1ip", "v8okcSoiCq", "kq7cHSkVjq", "CSonlvGl", "laHraSk/", "j8o0kSkfCW", "W6LmWQS", "wx/cScRcKG", "nw4byJe", "vJxcNMJdHW", "rZ/cNMldNq", "wmoWWRzfWRC", "WRazWOTTamoGBrK3WOXT", "erbzCN8", "jYbne8kF", "dW7dQx7dICkWngDFemogd8kGWQ8", "W61lWPBcS8kI", "W4TBW6ddNKa", "W416W6ebWQu", "iXLyfCkx", "C0ddK00W", "WR3cNCoQ", "lmobh1bc"];
  return Po = function() {
    return i;
  }, Po();
}
function lA(i, o) {
  const t = Po();
  return lA = function(e, A) {
    e = e - (7027 + 5 * -1342);
    let n = t[e];
    if (lA.oBBiDd === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      lA.CKSTse = C, i = arguments, lA.oBBiDd = !0;
    }
    const a = t[8334 + 2 * -4381 + 2 * 214], x = e + a, r = i[x];
    return r ? n = r : (lA.LklawN === void 0 && (lA.LklawN = !0), n = lA.CKSTse(n, A), i[x] = n), n;
  }, lA(i, o);
}
function QA(i, o, t, e, A) {
  return lA(t - 617, i);
}
var Za, _a, we;
class zs {
  constructor(o = {}) {
    K(this, we);
    G(this, _a, []);
    G(this, Za, {});
    function t(A, n, g, a, x) {
      return oA(A - 317, n - 198, n - 237, g);
    }
    function e(A, n, g, a, x) {
      return rA(A - 289, g - -728, A);
    }
    H(this, we, Vs), this[t(-161, -61, "mK3R") + e("J4vt", -238, -248) + t(-2, -109, "2N4U")](o);
  }
  [(_a = oA(-205, -148, -263, "s9Em") + oA(-392, -451, -339, "WLSX"), Za = oA(-458, -330, -445, "1dQv") + HA(843, 751, "i%EM") + "s", oA(-278, -450, -319, "Rx^1") + oA(-556, -395, -430, "]N3c") + Ce(1098, 1210, "i%EM") + "fo")](o) {
    const t = Dn(o);
    function e(r, C, I, Q, s) {
      return rA(r - 36, r - 565, Q);
    }
    const A = t == null ? void 0 : t[e(1184, 1123, 1182, "bn%!") + e(1057, 1002, 1038, "hAGj") + "s"]();
    if (!(A != null && A[e(1188, 1209, 1103, "i%EM") + "t"]) || !(A != null && A[e(1167, 1175, 1284, "gP(p")]) || !(A != null && A[e(942, 1058, 977, "2SVS") + a(363, 455, 349, 393, "s9Em")])) {
      if (g(613, 655, 658, 655, "xfyM") !== g(604, 639, 590, 478, "1dQv")) return;
      throw new v(g(871, 1004, 927, 994, "2N4U") + n(152, 204, 381, "pXEX", 270) + g(691, 701, 671, 767, "jRkH") + x(1084, "WiFU", 1206, 1233, 1214) + a(313, 423, 360, 226, "NZs4") + n(217, 231, 348, "jRkH", 266));
    }
    function n(r, C, I, Q, s) {
      return rA(r - 336, s - -136, Q);
    }
    if (t)
      if (e(1153, 1202, 1161, "l(&g") !== n(227, 373, 354, "tXUD", 284)) {
        const r = {};
        return r[e(1035, 977, 965, "BED1")] = t[g(819, 903, 953, 903, "SV]G")], r.id = A[a(451, 577, 588, 424, "2N4U") + x(1231, "b3C*", 1442, 1440, 1351)], r;
      } else this[a(267, 238, 232, 248, "deT)") + g(689, 740, 632, 790, "hnm*") + x(1459, "SQuP", 1322, 1352, 1414) + x(1406, "J4vt", 1306, 1513, 1429) + "or"](_0x1e8ec0[g(823, 840, 757, 808, "y3!H")]) && (_0x45075b = this[a(521, 525, 451, 588, "NZs4") + a(538, 627, 667, 462, "WLSX") + e(1052, 1091, 1159, "i%EM") + "s"](this[x(1299, "i%EM", 1318, 1301, 1390) + n(471, 283, 295, "xfyM", 363) + "s"], _0x1dd9f9), _0x24414d--);
    function g(r, C, I, Q, s) {
      return rA(r - 133, r - 244, s);
    }
    function a(r, C, I, Q, s) {
      return oA(r - 206, C - 218, r - 720, s);
    }
    function x(r, C, I, Q, s) {
      return HA(s - 497, C - 255, C);
    }
    return void (6218 + 3109 * -2);
  }
  async [oA(-248, -442, -340, "98$#") + rA(584, 460, "b3C*") + oA(-396, -299, -257, "WLSX") + "m"](o) {
    const t = document[n(-72, 5, "W5oi") + g("jDRN", 1019, 934, 905, 968) + g("BED1", 852, 953, 939, 868)](A(234, "QtXD", 124, 238));
    function e(r, C, I, Q, s) {
      return HA(I - -1280, C - 47, C);
    }
    function A(r, C, I, Q, s) {
      return QA(C, C - 295, Q - -805);
    }
    t[g("hAGj", 907, 766, 750, 885) + e(-562, "XKge", -461)] = !0, t[e(-511, "hAGj", -562)] = !0;
    function n(r, C, I, Q, s) {
      return HA(r - -842, C - 72, I);
    }
    function g(r, C, I, Q, s) {
      return QA(r, C - 370, s - -196);
    }
    t[A(504, "QtXD", 481, 387) + e(-478, "hnm*", -370) + "e"] = !0, t[e(-244, "i%EM", -303)][A(210, "WiFU", 349, 323) + a("BED1", -11, -79, -273, -137)] = A(168, "b3C*", 224, 211) + n(58, -7, "tXUD"), t[g("i%EM", 912, 1137, 925, 1004)][e(-485, "k)yY", -448) + "ty"] = "0", t[e(-538, "MO%a", -451)][e(-655, "hnm*", -542) + a("SQuP", -253, -313, -329, -205) + g("SQuP", 720, 849, 795, 790)] = e(-569, "y3!H", -540);
    function a(r, C, I, Q, s) {
      return oA(r - 242, C - 109, s - 153, r);
    }
    t[n(-77, 44, "SQuP")][n(-118, -143, "Ar#F")] = n(-127, -45, "SV]G"), t[n(-78, -202, "SV]G")][e(-338, "@tN[", -374) + "t"] = A(87, "2SVS", 96, 210);
    const x = await navigator[a("pXEX", 58, -114, -81, -78) + a("omBc", 2, -177, -226, -138) + "es"][n(81, 135, "jRkH") + n(45, -42, "xfyM") + "ia"](o);
    return t[a("^sAg", -257, -57, -274, -141) + g("i%EM", 1134, 1116, 856, 995)] = x, await t[a("pXEX", 20, -98, -120, -86)](), x;
  }
  async [Ce(1220, 1231, "SV]G") + Ce(989, 870, "n0Mw") + rA(584, 565, "n0Mw")]() {
    var C, I;
    function o(Q, s, E, d, u) {
      return rA(Q - 491, s - 930, Q);
    }
    if (!C0())
      if (o("Fzuk", 1301) === o("hnm*", 1413)) {
        const Q = {};
        return Q[A(1560, "2SVS", 1520, 1543, 1546) + a(888, 964, 887, 995, "i%EM")] = this[e(952, 1030, "98$#", 973) + e(1110, 1179, "^sAg", 1045)], Q[g(1259, 1312, 1248, "Rx^1") + A(1261, "rH&5", 1307, 1400, 1371) + "e"] = !1, Q;
      } else return;
    const t = await this[a(870, 955, 1057, 916, "bn%!") + "st"](D(this, we)[A(1441, "tXUD", 1574, 1666, 1560)]);
    function e(Q, s, E, d, u) {
      return QA(E, s - 146, d - -41);
    }
    function A(Q, s, E, d, u) {
      return HA(u - 574, s - 490, s);
    }
    const n = await this[e(1004, 921, "SV]G", 980) + "st"](D(this, we)[A(1402, "jDRN", 1276, 1225, 1288)]);
    function g(Q, s, E, d, u) {
      return QA(d, s - 50, s - 109);
    }
    function a(Q, s, E, d, u) {
      return QA(u, s - 65, d - -201);
    }
    const x = ((C = t[o("Jbl(", 1457) + A(1656, "k)yY", 1588, 1524, 1516)]) == null ? void 0 : C[o("@tN[", 1334)]) + a(702, 796, 766, 744, "NZs4") + ((I = n[a(684, 731, 834, 755, "2SVS") + A(1645, "b3C*", 1628, 1645, 1528)]) == null ? void 0 : I[o("SQuP", 1297)]), r = await this[a(715, 859, 746, 850, "SV]G") + a(902, 880, 805, 912, "rH&5") + A(1516, "hAGj", 1335, 1465, 1441) + a(805, 900, 839, 937, "hnm*") + "lt"](x, t[a(998, 850, 972, 944, "W5oi") + "ge"], n[A(1584, "FTly", 1393, 1439, 1503) + "ge"]);
    this[g(1132, 1174, 1252, "]N3c") + A(1341, "98$#", 1168, 1280, 1295)][g(1170, 1244, 1227, "QtXD")](r);
  }
  async [oA(-276, -386, -354, "WiFU") + "st"](o) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: n, runDurationCutoffFactor: g } = o;
    function a(h, p, w, k, R) {
      return QA(R, p - 34, p - -710);
    }
    function x(h, p, w, k, R) {
      return QA(R, p - 163, h - -106);
    }
    let r = -2695 * -1 + -469 * 13 + 3402, C = n, I, Q = this[a(427, 374, 248, 451, "]N3c") + a(358, 327, 291, 341, "Rx^1") + a(605, 472, 467, 334, "H&V(") + "s"](this[x(966, 1079, 1054, 859, "deT)") + a(354, 429, 486, 511, "MO%a") + "s"], A);
    for (let h = 1980 + 431 * -16 + -2 * -2458; h < n; h++)
      if (x(906, 975, 794, 955, "hnm*") !== u(-91, "bn%!")) {
        if (r > e * g)
          if (u(2, "WiFU") === c("2SVS", 95, 225)) ({ deviceInfo: _0x4e7cb5 } = _0x58f1fa);
          else {
            C = h;
            break;
          }
        const p = await this[u(-110, "i%EM") + x(1016, 1086, 875, 947, "XYo9") + d(882, 946, "BED1") + x(1087, 1129, 1176, 1099, "jRkH")](Q);
        if (p[c("XYo9", 161, 286)])
          if (u(32, "Ar#F") === c("FTly", 307, 381)) {
            if (this[x(934, 1014, 950, 801, "QtXD") + a(478, 359, 236, 423, "omBc") + u(-77, "]N3c") + d(1044, 975, "s9Em") + "or"](p[a(592, 477, 573, 386, "SV]G")])) {
              if (c("XKge", 568, 440) !== c("SV]G", 266, 364)) throw new _0x26eb17(x(985, 931, 942, 1030, "@tN[") + a(150, 252, 263, 115, "y3!H") + x(1062, 960, 1145, 1167, "Rx^1") + x(1008, 1089, 961, 962, "]N3c") + x(921, 988, 1043, 805, "2SVS") + x(852, 899, 955, 717, "b3C*"));
              Q = this[x(870, 788, 939, 955, "Fzuk") + d(911, 966, "J4vt") + u(-102, "hAGj") + "s"](this[d(861, 908, "gP(p") + x(951, 1076, 1028, 937, "SQuP") + "s"], t), h--;
            }
          } else {
            const w = {};
            return w[u(40, "W5oi")] = _0x46abe6, w;
          }
        if (p[u(-145, "y3!H") + c("deT)", 470, 493)])
          if (a(546, 459, 530, 591, "omBc") !== u(19, "W5oi")) {
            const w = _0x4d9213(_0x4406ef), k = w == null ? void 0 : w[d(907, 982, "BED1") + c("hAGj", 305, 360) + "s"]();
            if (!(k != null && k[x(919, 1046, 779, 801, "l(&g") + "t"]) || !(k != null && k[x(1031, 959, 950, 910, "mK3R")]) || !(k != null && k[d(992, 879, "jDRN") + a(397, 336, 215, 283, "1dQv")])) throw new _0x804759(d(942, 912, "1dQv") + x(1002, 996, 1014, 970, "jDRN") + d(858, 853, "4DEy") + c("98$#", 498, 473) + d(1085, 984, "deT)") + x(884, 809, 822, 825, "tXUD"));
            if (w) {
              const R = {};
              return R[c("Rx^1", 367, 321)] = w[a(284, 370, 438, 362, "n0Mw")], R.id = k[a(488, 396, 322, 272, "Jbl(") + a(573, 498, 364, 564, "FTly")], R;
            }
            return void (866 * -1 + -5782 + -1662 * -4);
          } else ({ deviceInfo: I } = p);
        r += p[d(797, 888, "b3C*") + c("]N3c", 269, 271)] || 2809 * -1 + -1 * 2663 + 5472;
      } else this[u(-1, "bn%!") + u(95, "Jbl(") + "s"] = _0x5152db;
    const s = Math[x(1047, 1050, 995, 987, "pXEX")](r / (C || 10 * -656 + 7667 + -79 * 14));
    this[c("Jbl(", 349, 268) + d(1060, 1024, "jRkH") + "s"] = this[a(326, 312, 266, 373, "hnm*") + u(114, "1dQv") + d(957, 903, "xfyM") + "s"](this[a(336, 274, 263, 319, "pXEX") + a(334, 295, 338, 321, "2N4U") + "s"], {}, I == null ? void 0 : I.id);
    const E = {};
    E[c("SV]G", 381, 302) + "ge"] = s;
    function d(h, p, w, k, R) {
      return QA(w, p - 236, p - -175);
    }
    function u(h, p, w, k, R) {
      return oA(h - 279, p - 429, h - 307, p);
    }
    E[c("rH&5", 323, 383) + d(811, 860, "]N3c")] = I;
    function c(h, p, w, k, R) {
      return rA(h - 412, w - -132, h);
    }
    return E;
  }
  async [Ce(1226, 1267, "k)yY") + oA(-306, -306, -389, "SV]G") + HA(741, 695, "mO8d") + HA(949, 853, "XKge")](o) {
    function t(x, r, C, I, Q) {
      return QA(C, r - 369, r - -416);
    }
    const e = Date[a(-422, -405, "pXEX")]();
    function A(x, r, C, I, Q) {
      return oA(x - 276, r - 421, I - 1506, x);
    }
    function n(x, r, C, I, Q) {
      return QA(I, r - 474, x - -280);
    }
    function g(x, r, C, I, Q) {
      return QA(x, r - 41, r - 357);
    }
    function a(x, r, C, I, Q) {
      return rA(x - 117, r - -1005, C);
    }
    try {
      if (t(670, 799, "]N3c", 935, 746) !== g("W5oi", 1500, 1588, 1411, 1395)) {
        const x = await this[t(861, 733, "hnm*", 593, 751) + A("Rx^1", 1332, 1400, 1293, 1243) + t(503, 615, "n0Mw", 639, 717) + "m"](o), r = Date[A("BED1", 1313, 1303, 1246, 1354)]() - e, C = this[t(615, 703, "deT)", 619, 734) + t(468, 578, "XYo9", 597, 506) + A("W5oi", 1184, 1408, 1308, 1309) + "fo"](x);
        Bo(x);
        const I = {};
        return I[t(697, 607, "W5oi", 509, 622) + n(882, 895, 894, "rH&5", 936)] = r, I[A("F!vT", 1225, 1365, 1228, 1174) + A("XKge", 1215, 1136, 1120, 1154)] = C, I;
      } else {
        const x = { ..._0x39308c }, r = x, C = { ...typeof r[a(-591, -541, "QtXD", -595, -617)] == n(790, 819, 680, "k)yY", 835) + "t" ? r[n(854, 885, 910, "SV]G", 967)] : {}, ..._0x1b14dd }, I = C;
        if (_0x33f32f) {
          const Q = {};
          Q[a(-562, -423, "mK3R", -528, -476)] = _0x2fb724, I[g("W5oi", 1368, 1462, 1432, 1241) + A("]N3c", 1163, 1253, 1169, 1230)] = Q;
        }
        return r[A("J4vt", 1327, 1331, 1292, 1174)] = I, r;
      }
    } catch (x) {
      if (t(499, 559, "Ar#F") === A("WiFU", 1151, 1065, 1073)) {
        const r = {};
        r[t(462, 588, "]N3c")] = _0x31b63e, _0x2a8381[g("Jbl(", 1463) + a(-248, -383, "jDRN")] = r;
      } else {
        const r = {};
        return r[a(-548, -482, "b3C*")] = x, r;
      }
    }
  }
  [QA("deT)", 906, 934) + oA(-437, -219, -334, "BED1") + HA(768, 856, "XKge") + HA(736, 807, "BED1") + "or"](o) {
    function t(n, g, a, x, r) {
      return rA(n - 208, g - 738, r);
    }
    function e(n, g, a, x, r) {
      return QA(n, g - 425, x - -1144);
    }
    function A(n, g, a, x, r) {
      return QA(n, g - 280, g - 73);
    }
    return o instanceof DOMException && o[t(1201, 1284, 1236, 1410, "omBc")] === e("XYo9", -260, -137, -172) + A("WiFU", 1129) + t(1411, 1325, 1228, 1450, "Fzuk") + e("bn%!", -84, -131, -167);
  }
  async [rA(474, 604, "QtXD") + QA("omBc", 1263, 1142) + Ce(1140, 1021, "mO8d") + oA(-170, -226, -177, "pXEX") + "lt"](o, t, e) {
    return { optSetting: await js(o), afterOpt: t, beforeOpt: e };
  }
  [rA(468, 553, "NZs4") + oA(-333, -403, -379, "SV]G") + rA(346, 421, "l5MU")](o) {
    function t(A, n, g, a, x) {
      return Ce(n - -1266, n - 231, x);
    }
    function e(A, n, g, a, x) {
      return HA(g - -459, n - 48, a);
    }
    Object[t(-321, -234, -351, -93, "xfyM") + "es"](o)[e(407, 478, 362, "hAGj") + "ch"](([A, n]) => {
      function g(C, I, Q, s, E) {
        return t(C - 426, Q - 1509, Q - 309, s - 217, I);
      }
      function a(C, I, Q, s, E) {
        return e(C - 316, I - 380, s - 579, E);
      }
      function x(C, I, Q, s, E) {
        return e(C - 3, I - 319, s - 577, I);
      }
      function r(C, I, Q, s, E) {
        return t(C - 230, s - -221, Q - 393, s - 207, I);
      }
      if (r(-337, "l5MU", -568, -437) !== a(920, 858, 1027, 970, "F!vT")) {
        const C = A;
        D(this, we)[C] && (a(1080, 842, 824, 958, "l(&g") === a(949, 892, 844, 904, "mK3R") ? (_0x2febde = this[a(991, 896, 948, 893, "jRkH") + a(997, 866, 876, 899, "FTly") + a(964, 950, 1002, 982, "hnm*") + "s"](this[g(1356, "jRkH", 1234, 1105) + a(1007, 1141, 1102, 1110, "y3!H") + "s"], _0x391d49), _0x5ec4b6--) : D(this, we)[C] = { ...D(this, we)[C], ...n });
      } else return _0x2963f1 instanceof _0x1ba05b && _0x1aafda[r(-309, "l(&g", -394, -413)] === g(1208, "NZs4", 1252, 1169) + x(1044, "mK3R", 1179, 1106) + g(1385, "1dQv", 1300, 1410) + g(1417, "98$#", 1378, 1263);
    });
  }
  [rA(342, 457, "MO%a") + HA(851, 743, "pXEX") + QA("MO%a", 1216, 1139) + "s"](o = {}, t = {}, e) {
    function A(s, E, d, u, c) {
      return QA(u, E - 82, s - -499);
    }
    function n(s, E, d, u, c) {
      return oA(s - 295, E - 285, E - 1422, u);
    }
    const g = { ...o }, a = g, x = { ...typeof a[n(1179, 1150, 1113, "XYo9")] == Q(1397, 1384, "J4vt", 1385) + "t" ? a[Q(1318, 1386, "omBc", 1286)] : {}, ...t };
    function r(s, E, d, u, c) {
      return oA(s - 486, E - 31, s - 271, E);
    }
    function C(s, E, d, u, c) {
      return Ce(u - -1055, E - 269, c);
    }
    const I = x;
    if (e)
      if (C(-40, 97, -40, -41, "XKge") === r(-40, "Ar#F")) {
        const s = {};
        return s[A(679, 662, 650, "bn%!")] = _0x9d6655[Q(1152, 1370, "WLSX", 1270)], s.id = _0x99156b[Q(1425, 1512, "98$#", 1444) + A(677, 804, 765, "hAGj")], s;
      } else {
        const s = {};
        s[C(0, 8, 1, -62, "^sAg")] = e, I[C(162, 160, 296, 182, "l5MU") + A(632, 562, 725, "@tN[")] = s;
      }
    a[r(-28, "WiFU")] = I;
    function Q(s, E, d, u, c) {
      return rA(s - 29, u - 897, d);
    }
    return a;
  }
  [HA(737, 846, "b3C*") + Ce(1006, 1021, "Ar#F") + rA(502, 606, "gP(p")](o) {
    function t(A, n, g, a, x) {
      return rA(A - 101, g - -584, x);
    }
    function e(A, n, g, a, x) {
      return Ce(a - -61, n - 51, g);
    }
    this[t(123, -7, -16, 30, "hAGj") + e(1184, 1205, "WiFU", 1082) + "s"] = o;
  }
  [QA("1dQv", 1094, 1136) + Ce(1035, 925, "QtXD") + rA(501, 592, "XYo9") + HA(796, 854, "hnm*") + Ce(1013, 972, "W5oi")]() {
    function o(g, a, x, r, C) {
      return oA(g - 201, a - 279, g - 950, C);
    }
    function t(g, a, x, r, C) {
      return rA(g - 367, g - -918, r);
    }
    function e(g, a, x, r, C) {
      return oA(g - 230, a - 63, a - -216, C);
    }
    const A = {};
    A[t(-373, -511, -419, "s9Em") + e(-687, -648, -749, -525, "jDRN")] = this[e(-547, -565, -555, -485, "l5MU") + e(-635, -496, -407, -563, "2N4U")], A[o(534, 418, 454, 408, "^ZK8") + n(542, 643, 575, 524, "^ZK8") + "e"] = !1;
    function n(g, a, x, r, C) {
      return HA(a - -294, a - 415, C);
    }
    return A;
  }
}
we = new WeakMap();
const ho = {};
ho.width = 1920, ho.height = 1080, ho.facingMode = Bg.FRONT;
const Xs = ho;
var $e, St, ce;
class Wr {
  constructor({ defaultVideoConstrains: o = Xs, minCameraShorterSide: t = Es } = {}) {
    K(this, $e);
    K(this, St, []);
    K(this, ce, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, H(this, $e, e);
  }
  get availableCameraProperties() {
    return D(this, St);
  }
  get mediaStream() {
    return D(this, ce);
  }
  get videoTrack() {
    return D(this, ce) ? Dn(D(this, ce)) : void (-11398 + -2 * -5699);
  }
  get isCameraActive() {
    var o;
    return !!((o = D(this, ce)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Bo(t);
  }
  async open(o = {}) {
    ua() && d0() && await un(7579 + -919 * 7 + -696), H(this, ce, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get next device");
    const o = await Ji(), t = this.videoTrack.getSettings(), e = o.findIndex((n) => n.deviceId === t.deviceId);
    return (o[e + (2212 + -3 * 737)] ?? o[2357 * -2 + 31 * 314 + -5020]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(o) {
    if (!this.videoTrack) throw Error("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, o);
  }
  close() {
    D(this, ce) && (Bo(D(this, ce)), H(this, ce, null));
  }
  async getProperties() {
    const o = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = o;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = D(this, St), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const o = this.getSettings();
    if (!o.width) throw new v("Video width is undefined");
    if (!o.height) throw new v("Video height is undefined");
    const t = {};
    return t.width = o.width, t.height = o.height, t;
  }
  async getDeviceName() {
    const o = this.getSettings(), t = await fr(), e = t.find((A) => A.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === Bg.FRONT ? void (7424 + -1606 * -6 + -17060) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Qg() ? (await Ji()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (-748 + 22 * 34);
  }
  async collectAvailableCamerasInfo() {
    const o = await Ji();
    for (const t of o) {
      ua() && d0() && await un(1 * 6467 + 9267 + -15284);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const n = await navigator.mediaDevices.getUserMedia(A), g = Dn(n);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = g.getSettings(), x = { ...a };
        x.deviceName = g.label;
        const r = {};
        r.cameraProperties = x;
        const C = r;
        D(this, St).push(C), Bo(n);
      } catch (e) {
        e instanceof Error && v.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...D(this, $e).defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t } : void (12 * -262 + -8864 + 12008);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const o = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(o != null && o.height) || !(o != null && o.width))
      throw this.close(), new v("Could not init camera settings");
    if (typeof D(this, $e).minCameraShorterSide != "number") return;
    if (Math.min(o == null ? void 0 : o.width, o == null ? void 0 : o.height) < D(this, $e).minCameraShorterSide)
      throw this.close(), new v("Could not init video because of low camera resolution: " + o.width + "x" + o.height + ".");
  }
}
$e = new WeakMap(), St = new WeakMap(), ce = new WeakMap();
var p0;
class $s {
  constructor({ cameraEvaluator: o, cameraHandler: t, performanceCheckup: e, videoHandler: A }) {
    K(this, p0, !1);
    G(this, "videoHandler");
    G(this, "cameraHandler");
    G(this, "performanceCheckup");
    G(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = o;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    D(this, p0) || (H(this, p0, !0), await Wr.requestPermission());
  }
  async startFirstVideoStream(o = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t == null ? void 0 : t.deviceId);
    !d0() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(o != null && o.width)) throw new v("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new v("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = o.width, t.height = o.height;
    const e = t.getContext("2d");
    if (!e) throw new v("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 1517 * -3 + -2 * 4186 + 12923, -199 * 46 + -7535 + -5563 * -3), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(o) {
    await this.cameraHandler.open(o), Ds() && (this.cameraHandler.close(), await this.cameraHandler.open(o)), await this.mountVideoStream();
  }
  async switchCamera() {
    const o = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(o);
    this.pauseStream(), !d0() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
p0 = new WeakMap();
var be;
class AB {
  constructor(o) {
    K(this, be);
    H(this, be, o);
  }
  get videoElement() {
    return D(this, be);
  }
  async play(o) {
    D(this, be).srcObject = o, await D(this, be).play();
  }
  stop() {
    D(this, be).srcObject = null;
  }
  hasSrcObject() {
    return !!D(this, be).srcObject;
  }
}
be = new WeakMap();
(function(i, o) {
  function t(x, r, C, I, Q) {
    return DA(C - -280, I);
  }
  function e(x, r, C, I, Q) {
    return DA(C - -15, Q);
  }
  var A = i();
  function n(x, r, C, I, Q) {
    return DA(x - -205, r);
  }
  function g(x, r, C, I, Q) {
    return DA(Q - -309, r);
  }
  for (; ; )
    try {
      var a = -parseInt(t(-61, -65, -55, "[5wF", -68)) / 1 * (-parseInt(t(-35, -70, -40, "$Z3k", -9)) / 2) + parseInt(t(-81, -91, -58, "U1*@", -83)) / 3 * (-parseInt(g(-81, "U1*@", -40, -6, -57)) / 4) + -parseInt(e(213, 217, 148, 182, "#e)4")) / 5 * (parseInt(g(-45, "7j]*", -96, -66, -33)) / 6) + -parseInt(n(59, "!7om", 50, 100, 106)) / 7 + parseInt(n(-26, "QrFs", -60, -46, -72)) / 8 + -parseInt(e(180, 221, 227, 212, ")awM")) / 9 + parseInt(t(-32, -10, -62, "hUrI", -67)) / 10 * (parseInt(g(-110, "XvKx", -139, -165, -96)) / 11);
      if (a === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(To, 181 * -930 + -421740 + 3329 * 269);
function bA(i, o, t, e, A) {
  return DA(o - -667, A);
}
function To() {
  var i = ["DIDHW6CE", "omk0xG", "WQ48BCkYW4a", "z8ooWQy", "WPvOW615rG", "v0CjW5Xx", "h2RcP8ojnq", "WRb5BHa3", "W4RdTMyLWOS", "tWHR", "WRXhi8kPwq", "W5pdQeyYWPy", "wcjBgWJdHSk0pctcI18", "WPRdQH8", "qSoEEhnz", "zr9kW7yG", "W5JdMSkxE2K", "wMadebK", "WQjwAb84", "W7lcKg7cGmog", "W6W9W5y", "g8o3W67cGwy", "WOquW74/BG", "kmkWWQpdS8k8W4mbBG", "mgrfW4FcQM/dH1ygWQ1jjW", "W7FdUCkA", "WRrHW6vtigaPaW", "ACogWRCjWQ8", "b30kwfK", "WPtdG8o7", "kmopW6hcJCoI", "W6m/WPddSZPkD8o+a8kazCk5amoX", "W4hdT2aLWPu", "pCo9W54BWPK", "WQDJW50", "W7LHpmo/WPLOiuddG3zY", "qrnSW58f", "xYfAgGxcKSo8rGtcS2RcUg0M", "WQZdHCoziSo+xSoXfCkojv4", "bCouW6tcGCoL", "amkFr8oVWOy", "WR7dHSo7W5/cPG", "yt8oWOhdRa", "WRD+W5RcHMa", "W5xdS8ohqajkWQKn", "nmklWOm", "W73dKbhcMmoKW6hcI8kneX1R", "uWTGW4Sb", "amkTuSoKWQC", "kSoBW6JcG2y", "WORdQG5o", "WPuHlmonCq", "WRzdWORdUCoT", "y8kqWRNdOJBcLtO", "mmkYw8k7W5C", "WOzBjGVcS8oqWRxcSbnjW7mpW5S", "pcG6z8kW", "WRTJW4dcSv8", "W4eNsg3dMW", "WPCtW7G", "s8kSWRhdJZ5vWRVcRseOd8kPWOe", "zSocWQ0MWQy", "WRXRWPxdOKW", "h0hcPCoGmG", "WORdOCoCW6tcJa", "W7HItmkPW4Dia2a", "m1jstCkq", "cdTau1VcGxXXqNRdMSkvW4O", "WOpdSXieuW", "wxabeqG", "W5xdImkkxgO", "nCktWPO", "W6KxW5/cTSkA", "DNnZmZWeW6FcVmo8t8otdWa", "sCozF2m", "FMq5WRTQ", "WOv1W6O", "W5VcTLOmweZdLMZdRv1vW4xdPW", "f2xcVCoMoq", "AKaE", "WPVdIajpgG", "WPvpWRy1cq", "jIm6C1C", "WPJdNCoTW7/cOG", "nSo6W5Kl", "cCoVW6JcI1C", "qMJcH8oxhSkhoq", "WRnPW43cGhK", "WQGCW58", "hx5gDcdcKSk9", "kvycW4zwWOVcTq", "WPFcR8o7", "bmk4s8oSWQm", "gCowW7dcI8oK", "WQCXASkSW40", "o8obW7tcRL0", "x29byWa", "mCoHW5eaWOi", "W6yIW5zJaa", "mSoYW6tcMhi", "FSoKWOhdTSkb", "isK2DNW", "WQOByCkXW6u", "oCkkWQBdGXm", "xcVcO8ouWP8", "xMHA", "c8odW7VcNSoL", "WPZdVWqADq", "AgeOW6DJ", "WQFdRqHFgW", "W6NdUNW2WOW", "CX3cRxBdLq", "rmohFW", "m8kDWOpdLbG", "W7ddUmkepSko", "W5iPzLRdPa", "W4ZcNCkPWORdUCkzovzijLFcJ3C", "W6WIW4b2pW", "dSkXw8oMWRa", "WQ9lWPldP8o8", "jSk+w8kUW4W", "mH8MCmkQ", "fSomW5NdLr4", "WQaNAG", "WQbOW4tcQNK", "x0PhFIa", "W5xdLCkCBq", "qYFcTCokWRK", "WQWqW5riea", "WQqcW4LOgG", "oCo2W6maWRy", "lcu9ywC", "wsfAgqlcNCkNnrtcJftcPq", "jSo2W5OaWOy", "E8oOWPVdHG", "iCkTWOJdUYy", "WP4Lfmokxq", "ahWu", "tZ8FWPhdRq", "WR5PmSkeDa"];
  return To = function() {
    return i;
  }, To();
}
function DA(i, o) {
  var t = To();
  return DA = function(e, A) {
    e = e - (2517 + -17 * -217 + 35 * -173);
    var n = t[e];
    if (DA.DsRIvM === void 0) {
      var g = function(I) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (var p = 0, w = s.length; p < w; p++)
          E += "%" + ("00" + s.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(I, Q) {
        var s = [], E = 0, d, u = "";
        I = g(I);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      DA.dZJMlh = a, i = arguments, DA.DsRIvM = !0;
    }
    var x = t[0], r = e + x, C = i[r];
    return C ? n = C : (DA.PppZuC === void 0 && (DA.PppZuC = !0), n = DA.dZJMlh(n, A), i[r] = n), n;
  }, DA(i, o);
}
function MA(i, o, t, e, A) {
  return DA(t - -635, A);
}
function Me(i, o, t, e, A) {
  return DA(t - 404, o);
}
function Qe(i, o, t, e, A) {
  return DA(A - 738, o);
}
function ut(i, o, t, e, A) {
  return DA(A - -192, o);
}
var Va, za, Xa;
class eB {
  constructor() {
    G(this, Xa, 6095 + -508 * 15 + 1525);
    G(this, za);
    G(this, Va, void (8324 + 5119 * -1 + -1 * 3205));
    function o(n, g, a, x, r) {
      return Me(n - 221, g, x - -537);
    }
    function t(n, g, a, x, r) {
      return Qe(n - 215, r, a - 300, x - 154, a - -1717);
    }
    function e(n, g, a, x, r) {
      return Qe(n - 329, r, a - 402, x - 363, g - -919);
    }
    function A(n, g, a, x, r) {
      return ut(n - 474, a, a - 204, x - 102, x - 419);
    }
    this[e(20, 88, 24, 24, "EkU8") + A(502, 521, "2ooc", 506) + o(-21, "B)Dk", 65, 21) + A(480, 444, "XvKx", 434)] = Date[t(-773, -743, -721, -658, "$Z3k")]();
  }
  [(Xa = MA(-498, -445, -478, -409, "t!CJ") + MA(-337, -370, -399, -369, ")AhE") + MA(-393, -335, -372, -393, "oLb@"), za = Me(585, "hkAd", 605) + bA(-487, -444, -456, -418, "L5XZ") + bA(-410, -384, -324, -317, "7j]*") + Me(650, "VWSk", 679), Va = Me(675, "dN03", 645) + Me(579, "!7om", 560) + "p", Qe(1025, "U1*@", 1033, 981, 1019) + MA(-357, -333, -346, -288, "U1*@") + Qe(1006, "$Z3k", 925, 980, 970))]() {
    this[A("6Rky", 426, 399, 318, 362) + A("gN^$", 350, 472, 388, 413) + e(574, 620, "gu4Q", 554)]++;
    function o(g, a, x, r, C) {
      return bA(g - 462, g - 136, x - 280, r - 202, x);
    }
    function t(g, a, x, r, C) {
      return Qe(g - 393, C, x - 424, r - 75, g - -57);
    }
    function e(g, a, x, r, C) {
      return MA(g - 208, a - 61, g - 963, r - 477, x);
    }
    function A(g, a, x, r, C) {
      return MA(g - 256, a - 393, C - 846, r - 387, g);
    }
    function n(g, a, x, r, C) {
      return MA(g - 11, a - 315, C - 1164, r - 139, r);
    }
    this[A("6TMW", 405, 319, 379, 364) + t(857, 806, 878, 824, "VWSk") + o(-310, -344, "hUrI", -267)] === -11 * -79 + 5 * -237 + 317 && (o(-376, -436, "@U9q", -412) === A("#e)4", 517, 484, 406, 462) ? this[e(557, 507, "4k2)", 538) + t(866, 925, 916, 877, "4k2)") + "p"] = Date[A("QrFs", 369, 347, 439, 395)]() - this[e(489, 499, "sXyv", 514) + e(517, 508, "U1*@", 501) + o(-357, -325, "6Rky", -384) + e(518, 586, "1)E0", 505)] : this[t(839, 826, 893, 847, "p8bs") + A("t!CJ", 464, 417, 428, 406) + "p"] = _0x1d53cb[o(-319, -249, "sXyv", -349)]() - this[o(-316, -302, "QrFs", -270) + e(536, 582, "$c(Y", 581) + t(963, 940, 1025, 907, ")AhE") + n(689, 712, 719, "#e)4", 745)]);
  }
  [bA(-447, -395, -439, -381, "$c(Y") + bA(-398, -383, -444, -337, "rAlz") + Me(615, "VWSk", 579) + ut(80, "#e)4", 61, 34, 36) + "up"]() {
    function o(n, g, a, x, r) {
      return MA(n - 368, g - 351, n - 200, x - 149, g);
    }
    if (!C0())
      return o(-145, "$Z3k", -205, -98) !== o(-252, "rJY8", -255, -232) ? this[o(-196, "62^r", -152, -183) + e(-550, "hUrI", -528, -542) + e(-545, "!7om", -558, -625)] : void 0;
    this[e(-660, "t!CJ", -601, -559) + t(-324, -269, "#e)4", -330) + A("7j]*", -522, -472, -582)] = 0, this[o(-186, "^$^@", -186, -174) + t(-362, -451, "t!CJ", -405) + "p"] = void (-2155 + 2155 * 1);
    function t(n, g, a, x, r) {
      return Qe(n - 491, a, a - 484, x - 266, x - -1338);
    }
    function e(n, g, a, x, r) {
      return MA(n - 38, g - 237, a - -123, x - 481, g);
    }
    function A(n, g, a, x, r) {
      return MA(n - 37, g - 460, g - -39, x - 381, n);
    }
    window[A("hUrI", -503, -569, -442) + A(")awM", -512, -515, -579) + o(-263, "7j]*", -257, -293) + e(-655, "viT4", -585, -538)](o(-192, "JO3h", -146, -235) + "wn", this[A("$Z3k", -514, -493, -471) + e(-593, "a%17", -561, -544) + e(-654, "hkAd", -599, -655)][o(-174, "hkAd", -106, -220)](this));
  }
  [ut(85, "hUrI", 18, 97, 52) + bA(-487, -441, -391, -446, "6TMW") + Qe(979, "n)nP", 971, 1012, 1003) + ut(96, "t!CJ", -28, -37, 27) + "up"]() {
    function o(g, a, x, r, C) {
      return bA(g - 158, x - 167, x - 429, r - 279, r);
    }
    function t(g, a, x, r, C) {
      return MA(g - 196, a - 478, x - 579, r - 257, a);
    }
    function e(g, a, x, r, C) {
      return bA(g - 170, r - 499, x - 189, r - 484, C);
    }
    function A(g, a, x, r, C) {
      return Qe(g - 444, a, x - 188, r - 483, g - -75);
    }
    if (!C0())
      if (e(5, 13, 5, 30, "t!CJ") === n("$Z3k", 111, 79, 107)) this[n("rAlz", 149, 192, 89) + t(142, "%gXn", 149, 196) + e(106, 162, 96, 114, ")AhE") + o(-296, -275, -293, "XvKx")] = _0x259c4a[o(-375, -347, -312, "dN03")]();
      else return;
    function n(g, a, x, r, C) {
      return bA(g - 105, a - 596, x - 67, r - 234, g);
    }
    window[e(71, 164, 175, 106, "hUrI") + n("n)nP", 122, 90, 66) + t(185, "L5XZ", 178, 235) + "r"](n("XuEw", 107, 68, 167) + "wn", this[o(-328, -285, -297, "viT4") + t(102, "2ooc", 171, 162) + o(-271, -356, -330, "U1*@")][A(844, "zvl5", 856, 795)](this));
  }
  [Qe(990, "XvKx", 1061, 1031, 1023) + bA(-505, -499, -468, -525, "JO3h") + "lt"]() {
    function o(a, x, r, C, I) {
      return bA(a - 33, I - 1133, r - 213, C - 176, r);
    }
    function t(a, x, r, C, I) {
      return bA(a - 85, x - -313, r - 231, C - 132, a);
    }
    function e(a, x, r, C, I) {
      return MA(a - 440, x - 26, C - 179, C - 401, r);
    }
    if (!C0() || !this[e(-265, -234, "wU1Z", -252) + e(-179, -179, "6TMW", -239) + "p"])
      if (e(-204, -207, ")awM", -211) !== e(-306, -317, "gN^$", -269)) {
        if (!_0x3ec401()) return;
        this[n(-655, "2ooc", -720, -592) + t("viT4", -723, -691, -785) + n(-554, "@U9q", -491, -529)] = 6190 + -1 * -788 + 3 * -2326, this[t("XuEw", -692, -636, -650) + e(-291, -296, "@U9q", -264) + "p"] = void (2986 + -38 * -4 + -3138 * 1), _0x4426e6[n(-640, "rAlz", -643, -616) + e(-224, -137, "n)nP", -206) + g("!7om", 1232, 1175, 1266, 1245) + o(761, 763, "!7om", 727, 703)](o(627, 612, "lu45", 654, 672) + "wn", this[n(-572, "1)E0", -544, -525) + t("$Z0f", -718, -750, -754) + e(-218, -296, "L5XZ", -260)][o(803, 780, "rAlz", 769, 737)](this));
      } else {
        var A = {};
        return A[o(570, 649, "dN03", 668, 633) + o(562, 662, "62^r", 634, 632) + "e"] = !1, A;
      }
    function n(a, x, r, C, I) {
      return MA(a - 293, x - 192, a - -185, C - 250, x);
    }
    function g(a, x, r, C, I) {
      return Qe(a - 422, a, r - 500, C - 32, I - 240);
    }
    return { performance: !0, hiccupAmount: this[t("1)E0", -766, -699, -720) + t("6TMW", -700, -756, -725) + t("AZiZ", -811, -827, -852) + "t"](), firstHiccup: this[t("zvl5", -693, -751, -725) + o(760, 766, "qq0h", 783, 725) + g("XvKx", 1200, 1084, 1090, 1142) + o(735, 678, "2ooc", 652, 701) + "ss"]() };
  }
  [ut(78, "PG9A", 67, 97, 61) + MA(-380, -433, -367, -344, "jaaY") + bA(-537, -473, -485, -512, "%gXn") + "t"]() {
    function o(t, e, A, n, g) {
      return Me(t - 115, n, e - 522);
    }
    return this[o(1222, 1181, 1248, "B)Dk") + o(1183, 1117, 1123, "oLb@") + o(1248, 1204, 1257, "X(Y[")];
  }
  [bA(-533, -481, -529, -496, "a%17") + ut(-54, "rAlz", 20, -27, -15) + bA(-395, -429, -453, -364, "rJY8") + Me(640, "wU1Z", 660) + "ss"]() {
    function o(e, A, n, g, a) {
      return MA(e - 461, A - 120, n - -154, g - 355, A);
    }
    function t(e, A, n, g, a) {
      return bA(e - 382, e - 428, n - 61, g - 176, A);
    }
    return this[t(-30, "gu4Q", -22, -51) + o(-461, "$c(Y", -503, -470) + "p"];
  }
}
function tB(i) {
  const o = tA(null), [t, e] = BA(), [A, n] = BA(), { handleError: g, setIsCameraReady: a } = Bt(), x = qA((C) => {
    n((I) => ws(C, I));
  }, []);
  Z(() => {
    if (!o.current) {
      g(new v("Something went wrong during video initialization"));
      return;
    }
    const C = new AB(o.current), I = new zs(), Q = new Wr(), s = new eB(), E = {};
    E.videoHandler = C, E.cameraHandler = Q, E.performanceCheckup = s, E.cameraEvaluator = I;
    const d = new $s(E);
    return (async () => {
      try {
        const c = {};
        c.facingMode = i, await d.startFirstVideoStream(c);
      } catch (c) {
        if (c instanceof Error) {
          g(v.fromCameraError(c));
          return;
        }
      }
      e(d), a(!0), x(d.getCameraResolution());
    })(), () => {
      d == null || d.stopStreaming(), a(!1), e(void (-4113 * 1 + -567 * 3 + 5814));
    };
  }, [i, g, a, o, x]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = x, r.videoRef = o, r;
}
function oB({ cameraFacing: i, children: o }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: n } = tB(i), g = RA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: n
    }),
    [e, t, A, n]
  );
  return /* @__PURE__ */ m(Jo.Provider, { value: g, children: o });
}
const hi = (i, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(i, t));
}, iB = (i, o) => {
  const t = {};
  t.instruction = o, hi(i, t);
};
function nB(i) {
  const o = {};
  o.instruction = i;
  const t = o;
  hi(cn.REQUEST_CAPTURE, t);
}
function gB({ children: i, ...o }) {
  const t = o.cameraFacing ?? Bg.FRONT;
  return /* @__PURE__ */ m(oB, { cameraFacing: t, children: i });
}
let Y;
const ke = new Array(128).fill(void 0);
ke.push(void 0, null, !0, !1);
function bn(i) {
  return ke[i];
}
let he = -937 * 4 + -2597 * 1 + 6345, n0 = null;
function fo() {
  return (n0 === null || n0.byteLength === 0) && (n0 = new Uint8Array(Y.memory.buffer)), n0;
}
const po = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, aB = typeof po.encodeInto == "function" ? function(i, o) {
  return po.encodeInto(i, o);
} : function(i, o) {
  const t = po.encode(i);
  o.set(t);
  const e = {};
  return e.read = i.length, e.written = t.length, e;
};
function u0(i, o, t) {
  if (t === void 0) {
    const a = po.encode(i), x = o(a.length, -1889 + -3 * -2631 + -6003) >>> 0;
    return fo().subarray(x, x + a.length).set(a), he = a.length, x;
  }
  let e = i.length, A = o(e, 1 * 7754 + -6408 + 269 * -5) >>> 8964 + 1052 * -2 + -6860;
  const n = fo();
  let g = 0;
  for (; g < e; g++) {
    const a = i.charCodeAt(g);
    if (a > 13640 + 1 * -13513) break;
    n[A + g] = a;
  }
  if (g !== e) {
    g !== 120 + -167 * 26 + 4222 && (i = i.slice(g)), A = t(A, e, e = g + i.length * (8645 + 20 * -152 + -5602), 5834 * -1 + -3185 + -9020 * -1) >>> 2374 + 11 * -131 + -933;
    const a = fo().subarray(A + g, A + e), x = aB(i, a);
    g += x.written, A = t(A, e, g, -101 + -6 * -17) >>> -8627 * -1 + 4656 * -1 + 361 * -11;
  }
  return he = g, A;
}
function vr(i) {
  return i == null;
}
let g0 = null;
function Ee() {
  return (g0 === null || g0.byteLength === -2 * 698 + 3727 + -2331) && (g0 = new Int32Array(Y.memory.buffer)), g0;
}
let s0 = ke.length;
function xB(i) {
  i < -1898 + -5 * -406 || (ke[i] = s0, s0 = i);
}
function Lr(i) {
  const o = bn(i);
  return xB(i), o;
}
const kn = {};
kn.ignoreBOM = !0, kn.fatal = !0;
const Ur = typeof TextDecoder < "u" ? new TextDecoder("utf-8", kn) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ur.decode();
function qo(i, o) {
  return i = i >>> -1151 * 1 + -6337 + 7488, Ur.decode(fo().subarray(i, i + o));
}
function Gn(i) {
  s0 === ke.length && ke.push(ke.length + (29 * -58 + -91 * 61 + 7234));
  const o = s0;
  return s0 = ke[o], ke[o] = i, o;
}
let a0 = null;
function Jr() {
  return (a0 === null || a0.byteLength === -1 * -2279 + -892 + -1387) && (a0 = new Uint32Array(Y.memory.buffer)), a0;
}
function Da(i, o) {
  const t = o(i.length * 4, 4) >>> 0, e = Jr();
  for (let A = 943 + -1333 * -4 + -6275; A < i.length; A++)
    e[t / 4 + A] = Gn(i[A]);
  return he = i.length, t;
}
function ma(i, o) {
  i = i >>> 1 * -7165 + 1739 * 1 + 5426;
  const t = Jr(), e = t.subarray(i / 4, i / (7251 + -278 * 25 + -297) + o), A = [];
  for (let n = 3285 * -3 + -8690 + 18545; n < e.length; n++)
    A.push(Lr(e[n]));
  return A;
}
function rB(i, o) {
  const t = u0(i, Y.__wbindgen_malloc, Y.__wbindgen_realloc), e = he, A = u0(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = he, g = Y.is_mobile_supported(t, e, A, n);
  return Eg.__wrap(g);
}
const Sn = {};
Sn.register = () => {
}, Sn.unregister = () => {
};
const wa = typeof FinalizationRegistry > "u" ? Sn : new FinalizationRegistry((i) => Y.__wbg_licensevalidationresult_free(i >>> 31 * 11 + 2 * -23 + -5 * 59));
class Eg {
  static __wrap(o) {
    o = o >>> -10190 + -2038 * -5;
    const t = Object.create(Eg.prototype);
    return t.__wbg_ptr = o, wa.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 2299 * -1 + 5587 + -3288, wa.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Y.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, A, n) {
    var g = vr(t) ? 0 : u0(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), a = he;
    const x = Da(e, Y.__wbindgen_malloc), r = he, C = Da(A, Y.__wbindgen_malloc), I = he, Q = u0(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), s = he, E = Y.licensevalidationresult_new(o, g, a, x, r, C, I, Q, s);
    return this.__wbg_ptr = E >>> 0, this;
  }
  get is_valid() {
    return Y.licensevalidationresult_is_valid(this.__wbg_ptr) !== -29 * 322 + -4661 + -1 * -13999;
  }
  get features_json() {
    try {
      const e = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Ee()[e / (-2900 * -1 + 43 * -88 + 888) + (-1 * -8898 + -260 + 1 * -8638)], t = Ee()[e / (317 * 1 + 7518 + -41 * 191) + 1];
      let A;
      return o !== 7677 + -6729 * -1 + -14406 && (A = qo(o, t).slice(), Y.__wbindgen_free(o, t * (8589 * -1 + 1018 * -5 + -72 * -190), -223 * -31 + 4 * 1896 + -14496 * 1)), A;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(129 * -72 + -7565 + -16869 * -1);
    }
  }
  get errors() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_errors(A, this.__wbg_ptr);
      var o = Ee()[A / (825 + 1681 * -2 + 11 * 231) + (-6015 + -1 * -6015)], t = Ee()[A / (-3328 + -238 * -14) + (-1936 * -3 + -61 * 120 + -1513 * -1)], e = ma(o, t).slice();
      return Y.__wbindgen_free(o, t * (3717 + 79 * -47), 1405 + 1 * -1401), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(-1066 * 4 + 4473 * -2 + 13226);
    }
  }
  get warnings() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var o = Ee()[A / 4 + (1 * 1287 + 14 * -350 + 3613)], t = Ee()[A / 4 + (-13 * -253 + 3566 * 2 + -10420)], e = ma(o, t).slice();
      return Y.__wbindgen_free(o, t * 4, 5436 + -1 * 8662 + -85 * -38), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(-2311 + -447 * -14 + 1 * -3931);
    }
  }
  get customer() {
    let o, t;
    try {
      const n = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_customer(n, this.__wbg_ptr);
      var e = Ee()[n / 4 + (-845 + 3173 * 1 + -2328)], A = Ee()[n / (-9327 * -1 + -163 * -23 + 16 * -817) + (2973 * -1 + -7598 + -881 * -12)];
      return o = e, t = A, qo(e, A);
    } finally {
      Y.__wbindgen_add_to_stack_pointer(16), Y.__wbindgen_free(o, t, -6346 + 3 * -1395 + 2633 * 4);
    }
  }
}
async function IB(i, o) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, o);
    } catch (e) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, o);
  } else {
    const t = await WebAssembly.instantiate(i, o);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = i, e;
    } else return t;
  }
}
function CB() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbindgen_string_get = function(o, t) {
    const e = bn(t), A = typeof e == "string" ? e : void 0;
    var n = vr(A) ? -3303 + -367 * -9 : u0(A, Y.__wbindgen_malloc, Y.__wbindgen_realloc), g = he;
    Ee()[o / (1197 * -3 + -9439 + 13034) + (1 * -2932 + 1621 * 1 + -164 * -8)] = g, Ee()[o / (-14071 + 1 * 14075) + (9723 + 3 * -2153 + -3264)] = n;
  }, i.wbg.__wbindgen_object_drop_ref = function(o) {
    Lr(o);
  }, i.wbg.__wbindgen_string_new = function(o, t) {
    const e = qo(o, t);
    return Gn(e);
  }, i.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Gn(/* @__PURE__ */ new Date());
  }, i.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return bn(o).getTime();
  }, i.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(qo(o, t));
  }, i;
}
function cB(i, o) {
  return Y = i.exports, Yr.__wbindgen_wasm_module = o, g0 = null, a0 = null, n0 = null, Y;
}
async function Yr(i) {
  if (Y !== void 0) return Y;
  typeof i > "u" && (i = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const o = CB();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: e } = await IB(await i, o);
  return cB(t, e);
}
(function(i, o) {
  function t(x, r, C, I, Q) {
    return uA(C - -61, Q);
  }
  function e(x, r, C, I, Q) {
    return uA(Q - -552, x);
  }
  const A = i();
  function n(x, r, C, I, Q) {
    return uA(I - 765, x);
  }
  function g(x, r, C, I, Q) {
    return uA(C - -688, x);
  }
  function a(x, r, C, I, Q) {
    return uA(Q - 860, r);
  }
  for (; ; )
    try {
      if (-parseInt(g("7E)$", -276, -256, -240, -243)) / 1 + parseInt(g("V5]%", -313, -292, -298, -317)) / 2 * (-parseInt(g("nn*Y", -299, -297, -314, -314)) / 3) + -parseInt(t(340, 312, 326, 321, "kIge")) / 4 * (parseInt(n("e$4b", 1209, 1213, 1200, 1183)) / 5) + -parseInt(a(1286, "oszv", 1275, 1278, 1267)) / 6 * (-parseInt(e("NuTT", -126, -142, -164, -148)) / 7) + parseInt(a(1264, "NuTT", 1245, 1241, 1254)) / 8 + -parseInt(e("TQF[", -146, -149, -160, -149)) / 9 + parseInt(n("e$4b", 1166, 1170, 1181, 1193)) / 10 === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(jo, 392263);
function $0(i, o, t, e, A) {
  return uA(o - -340, t);
}
function zt(i, o, t, e, A) {
  return uA(A - 624, o);
}
function jo() {
  const i = ["jbSNumoVemoAWQBcQIZdQa", "smoiFCoEWRm", "WRtcKY7dR8kpW647zbfVWRfKaG", "m8knW7ZcMsRcOatdSZZdUmksWQG", "W7FcVe7dMgi", "W7lcQ0hcRYW8vHa", "W5VcHH3cUvGHB8ku", "W5/cOSkQW6K1", "WObAW5SJEJzgWQpdQSo7fMH/", "FhBdOCoSWRVdLSoDyq", "rKZdRXbe", "W4zVF34iW4tcTwD0y8o5WQNcKG", "E3hcGtBcVmojW4OCW53cHSoAW5u", "W7BdHg3cSSo2", "W4ZdLXtcIg0", "imohhSoTc8offI7cObtcKqZcLW", "WQKmWQPSW4q", "W6DVEWWHt8klWP1bk8ocFSkj", "WOJcGHfMFq", "W658W5ldOx8", "f8kkWPvgyG", "qCo/W6hdGIy", "WOtcSSocrSk9", "W4CDy8kp", "quVdSG0", "WRhdPCoNW5Sq", "WQhdG3/cTSot", "smoYWRRcHXi", "W61gWRBcK8om", "pmk7vtRdIW", "CmoEWRRdHfO", "WRjNhSktfWtdP1hcOs3dTvy", "AsmBtIy", "WQnww8kLBa", "lmk9zmkzESknsa", "W70UkK98", "W7bJcKLu", "W5q/huP5", "guJcSwjuW4VdOSk+ux0fWPpcNq", "WO1/fuK7r8k6", "cmokWQjbWPu", "idldP2xdVq", "W6fQgfL6pCo1WRu", "W7eXwCkwna", "WPKeWODNBW", "nmkkW73cMcdcOhVdVXhdI8k6WRlcJq", "WOONwCkzW6y", "hbxcRu8toYXOvZddUW", "n3jxgxxdJYtdMfxcPcqhWQu", "WQxcVSk8WOjDWP89DSoBwCkOwG", "WPtdI8oaW7tcJq", "W5hdLSkMWO15"];
  return jo = function() {
    return i;
  }, jo();
}
function sB(i, o, t, e, A) {
  return uA(A - -637, t);
}
function Yi(i, o, t, e, A) {
  return uA(o - -483, t);
}
function uA(i, o) {
  const t = jo();
  return uA = function(e, A) {
    e = e - (-32 * -251 + 3633 + -1 * 11279);
    let n = t[e];
    if (uA.VFgQTR === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      uA.JeuUvv = C, i = arguments, uA.VFgQTR = !0;
    }
    const a = t[37 * 214 + 5270 * 1 + -13188], x = e + a, r = i[x];
    return r ? n = r : (uA.dmuAGo === void 0 && (uA.dmuAGo = !0), n = uA.JeuUvv(n, A), i[x] = n), n;
  }, uA(i, o);
}
function BB(i, o, t, e, A) {
  return uA(e - 713, t);
}
var $a;
class QB {
  constructor() {
    G(this, $a, !1);
  }
  async [($a = zt(1e3, "$@F*", 1036, 1040, 1024) + zt(1038, "!Hg$", 1035, 1052, 1026) + $0(38, 49, "dL!e"), $0(84, 85, "V5]%"))](o) {
    function t(a, x, r, C, I) {
      return $0(a - 241, I - -153, C);
    }
    function e(a, x, r, C, I) {
      return zt(a - 240, I, r - 104, C - 39, x - -754);
    }
    function A(a, x, r, C, I) {
      return zt(a - 386, x, r - 132, C - 275, r - 191);
    }
    function n(a, x, r, C, I) {
      return $0(a - 291, C - -590, r);
    }
    function g(a, x, r, C, I) {
      return Yi(a - 126, x - -53, a);
    }
    try {
      const a = o + (e(287, 306, 299, 291, "nn*Y") + "/") + la;
      await Yr(a), this[e(316, 301, 292, 281, "NuTT") + A(1230, "!OAi", 1249, 1258, 1256) + n(-483, -499, "E%hV", -508, -483)] = !0;
    } catch {
      this[e(291, 300, 293, 297, "!ASh") + A(1232, "6L$K", 1234, 1244) + t(-67, -66, -64, "dLG4", -60)] = !1, console[e(303, 294, 277, 301, "no1V")](la + (t(-56, -43, -53, "akZb", -67) + A(1227, "e&cC", 1235, 1244) + g("bj!v", -113) + t(-88, -91, -82, "TQF[", -66) + A(1256, "E%hV", 1243, 1258) + A(1201, "yq4Q", 1214, 1237) + n(-495, -508, "oszv", -515) + n(-537, -515, "BoHt", -522) + n(-477, -508, "HcV2", -501) + g("t[@u", -144) + e(251, 263, 244, 268, "A7)m") + t(-79, -38, -50, "@m0I", -56) + t(-51, -53, -68, "tIr9", -76) + t(-55, -46, -53, "P@ZI", -72) + "n."));
    }
  }
  [Yi(-94, -93, "W1lm") + zt(1028, "H7lq", 987, 998, 1010) + BB(1144, 1105, "4J(W", 1118) + "ed"]() {
    function o(e, A, n, g, a) {
      return Yi(e - 63, a - -272, e);
    }
    function t(e, A, n, g, a) {
      return sB(e - 439, A - 275, e, g - 92, a - 46);
    }
    return this[t("TQF[", -175, -194, -193, -177) + o("V5]%", -340, -352, -327, -344) + o("mw!N", -344, -372, -366, -360)];
  }
}
class Oi extends Error {
  constructor() {
    super(...arguments);
    G(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ht(i, o, t, e, A) {
  return aA(t - 442, e);
}
(function(i, o) {
  function t(a, x, r, C, I) {
    return aA(a - 286, C);
  }
  function e(a, x, r, C, I) {
    return aA(C - -722, x);
  }
  var A = i();
  function n(a, x, r, C, I) {
    return aA(C - 947, x);
  }
  for (; ; )
    try {
      var g = parseInt(n(1112, "5wU*", 1103, 1120, 1145)) / 1 + parseInt(e(-562, "zlzB", -521, -537, -556)) / 2 + -parseInt(e(-514, "IPRr", -493, -508, -525)) / 3 + -parseInt(e(-552, "@uVI", -539, -528, -553)) / 4 + -parseInt(e(-528, "ePnt", -478, -501, -494)) / 5 + parseInt(t(508, 485, 500, "g%EU", 511)) / 6 * (parseInt(e(-491, "!%DK", -519, -507, -532)) / 7) + -parseInt(t(474, 445, 484, "DOei", 454)) / 8;
      if (g === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Zo, -1426 * 424 + 1050996 + -15912 * -10);
function ba(i, o, t, e, A) {
  return aA(t - -367, e);
}
function Te(i, o, t, e, A) {
  return aA(t - -613, A);
}
function qe(i, o, t, e, A) {
  return aA(o - -183, i);
}
function EB(i, o, t, e, A) {
  return aA(o - 319, e);
}
function aA(i, o) {
  var t = Zo();
  return aA = function(e, A) {
    e = e - (-4080 + -1 * -9533 + 5287 * -1);
    var n = t[e];
    if (aA.KSrxPj === void 0) {
      var g = function(I) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (var p = 0, w = s.length; p < w; p++)
          E += "%" + ("00" + s.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(I, Q) {
        var s = [], E = 0, d, u = "";
        I = g(I);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      aA.rUwMgc = a, i = arguments, aA.KSrxPj = !0;
    }
    var x = t[4 * 2323 + 7944 * -1 + 2 * -674], r = e + x, C = i[r];
    return C ? n = C : (aA.nMkenY === void 0 && (aA.nMkenY = !0), n = aA.rUwMgc(n, A), i[r] = n), n;
  }, aA(i, o);
}
var Nt, y0;
class ka {
  constructor(o) {
    K(this, Nt);
    K(this, y0);
    function t(g, a, x, r, C) {
      return aA(r - -638, a);
    }
    this[n(-122, -97, "wrbf") + n(-104, -117, "8aJo")] = o;
    function e(g, a, x, r, C) {
      return aA(r - 592, a);
    }
    function A(g, a, x, r, C) {
      return aA(C - -34, r);
    }
    function n(g, a, x, r, C) {
      return aA(g - -288, x);
    }
    try {
      H(this, Nt, o[e(833, "bCLY", 808, 810, 838) + A(170, 171, 194, "%eoV", 167) + n(-107, -118, "i]c1", -81, -82)] && JSON[n(-91, -103, "kYx1", -108, -86)](o[n(-84, -84, "psFX", -86, -98) + t(-448, "5wU*", -476, -467, -439) + t(-429, "GW$E", -461, -455, -461)])), H(this, y0, o[A(161, 197, 150, "dNi5", 169) + A(170, 132, 168, "h0cJ", 159)]);
    } catch (g) {
      console[A(123, 106, 140, "fs]n", 133)](g);
    }
  }
  get [Te(-394, -420, -397, -389, "DOei") + "id"]() {
    function o(e, A, n, g, a) {
      return Te(e - 39, A - 113, a - -180, g - 235, A);
    }
    function t(e, A, n, g, a) {
      return Te(e - 267, A - 174, n - 336, g - 437, g);
    }
    return this[t(-131, -102, -109, "veU8") + t(-111, -87, -102, "vGp$")][o(-579, "nO3R", -564, -609, -583) + o(-605, "]Y$f", -628, -598, -603)];
  }
  get [qe("!%DK", 28) + "s"]() {
    function o(A, n, g, a, x) {
      return qe(a, A - 281);
    }
    function t(A, n, g, a, x) {
      return Te(A - 63, n - 72, A - 347, a - 321, g);
    }
    function e(A, n, g, a, x) {
      return Te(A - 132, n - 377, x - -165, a - 230, n);
    }
    return this[o(278, 280, 280, "dNi5") + e(-603, "kD9%", -552, -599, -579)][t(-68, -48, "p4Hg", -73) + "s"];
  }
  get [qe("nO3R", -4) + ba(-147, -131, -159, "14[m")]() {
    function o(A, n, g, a, x) {
      return ht(A - 362, n - 428, x - 18, n);
    }
    function t(A, n, g, a, x) {
      return ht(A - 107, n - 320, g - 376, A);
    }
    function e(A, n, g, a, x) {
      return ht(A - 330, n - 209, n - -755, a);
    }
    return this[e(-115, -126, -140, "YdbA") + t("g%EU", 992, 1e3)][t("m&@$", 962, 990) + o(639, "PC6a", 614, 638, 636)];
  }
  get [qe("IPRr", 30) + "b"]() {
    return D(this, Nt);
  }
  get [qe("h0cJ", 3) + ba(-151, -141, -147, "zlzB")]() {
    return D(this, y0);
  }
  get [ht(608, 631, 637, "kYx1") + ht(670, 674, 648, "@XAs") + Te(-433, -451, -422, -424, "8aJo") + qe("m&@$", 9)]() {
    var n, g;
    function o(a, x, r, C, I) {
      return qe(x, r - 79);
    }
    function t(a, x, r, C, I) {
      return Te(a - 110, x - 239, C - -259, C - 51, I);
    }
    function e(a, x, r, C, I) {
      return EB(a - 436, x - 356, r - 374, C);
    }
    function A(a, x, r, C, I) {
      return ht(a - 80, x - 249, C - -11, I);
    }
    return !!((g = (n = D(this, Nt)) == null ? void 0 : n[e(902, 892, 876, "dStG") + e(862, 880, 888, "veU8")]) != null && g[e(841, 852, 851, "OQJr") + A(650, 637, 611, 631, "nO3R") + t(-688, -658, -685, -660, "dStG") + o(62, "bCLY", 74) + t(-663, -671, -667, -665, "hKuC") + e(853, 849, 876, "kD9%") + e(884, 877, 879, "dNi5") + "d"]);
  }
}
Nt = new WeakMap(), y0 = new WeakMap();
function Zo() {
  var i = ["umokEKag", "iN3cPuXx", "zCoxrmkLlG", "EYCYW54r", "gmo8WOm", "WQ4+WR7cPIO", "fNeH", "lSkvWRlcHCk5", "rCkkBcDPWQpcP8orlqddLCoxqW", "WPFcPCkuzr0", "W6ddGSk9v8od", "WOtcPxn+kHLrW6FcNSotW4RdJxO", "aCkQW5JdPhRcGducWPGUWOtcNCk+", "WRVdPSkc", "nCkWWQ/cLCkW", "tXH9xa", "WPNcTCkv", "W5xcVd0oW7X+WOFcP8o8W4BcPmkEW5e", "WP8SCZfI", "zCkdtINcOSogu0ddO8oy", "WOy+qcXM", "g8kSeaFcOq", "WQH0W5r7sq", "E8oBu8kFnq", "jSoscudcUW", "AZq/W4eh", "EYaUW5Kn", "WQVdOaW0WQe", "WRJcM8kF", "WP/cQSk2WPrL", "v8oUWOtcPZ4", "W7xdI8kI", "vuWeWQZdJH3cKIOmsaOwW5q", "E8ofACk9jG", "WPuyw1ddHq", "dx17rmoX", "W4NcPCkslSkG", "WP/dUmousSoZsNJcPWFcNSoVW7JdQq", "W4nBhq3cHdiDuWbLvq", "W5VdPraSDG", "cNzPuCoN", "mhhcQ1zW", "W7VdICoyW4qKuGJcSLKinGKR", "gCoykG", "WRWPWPOMWOFdISkUW45ZWR/cOmot", "W7DRW77dSZe5zCk2EmkO", "W7mgD8oXWPG", "yGlcJ0a", "WQNcJmkdWODH", "xITgv0vbzCoHW6DBWOy", "W4DUagG0xSo3WQ/dMCotDmkaFa", "wbe/xWe", "wHvQvHG", "g0v+n1ZcPmoHtgfcuLWL", "WQL7W4DCsa", "W7dcNvulna", "drHc"];
  return Zo = function() {
    return i;
  }, Zo();
}
(function(i, o) {
  function t(a, x, r, C, I) {
    return cA(r - -197, C);
  }
  function e(a, x, r, C, I) {
    return cA(I - 348, C);
  }
  function A(a, x, r, C, I) {
    return cA(r - -429, a);
  }
  function n(a, x, r, C, I) {
    return cA(I - 174, C);
  }
  const g = i();
  for (; ; )
    try {
      if (-parseInt(e(631, 744, 606, "yH5V", 649)) / 1 + parseInt(n(583, 695, 702, "Lkf!", 706)) / 2 * (parseInt(n(549, 518, 582, "p&kY", 529)) / 3) + parseInt(e(593, 788, 628, "mheK", 659)) / 4 + -parseInt(t(257, 343, 319, "M8ve", 336)) / 5 + parseInt(A("Gsp9", -137, -58, 59, -38)) / 6 * (parseInt(A("2mtP", 133, 92, 100, 99)) / 7) + -parseInt(t(201, 78, 179, "6j*u", 54)) / 8 * (-parseInt(n(474, 587, 470, "aAWW", 569)) / 9) + -parseInt(A("b[%9", 11, -61, -46, 60)) / 10 === o) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(_o, -625557 + -893 * -1627);
function De(i, o, t, e, A) {
  return cA(A - 646, i);
}
function iA(i, o, t, e, A) {
  return cA(i - 171, A);
}
function kA(i, o, t, e, A) {
  return cA(A - 601, t);
}
function WA(i, o, t, e, A) {
  return cA(e - 315, i);
}
function cA(i, o) {
  const t = _o();
  return cA = function(e, A) {
    e = e - (17 * 492 + -8693 * 1 + -89 * -7);
    let n = t[e];
    if (cA.GjgYKq === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      cA.NoIRbd = C, i = arguments, cA.GjgYKq = !0;
    }
    const a = t[3 * -57 + -775 + -43 * -22], x = e + a, r = i[x];
    return r ? n = r : (cA.dpAMbJ === void 0 && (cA.dpAMbJ = !0), n = cA.NoIRbd(n, A), i[x] = n), n;
  }, cA(i, o);
}
function zA(i, o, t, e, A) {
  return cA(o - 958, e);
}
var Ax, ex, tx;
class dB {
  constructor(o) {
    G(this, tx);
    G(this, ex, [De("6j*u", 1144, 1108, 906, 1015) + zA(1387, 1276, 1351, "ztC7") + "ic", zA(1340, 1299, 1405, "$Kvl") + WA("afFE", 609, 756, 629) + "ic"]);
    G(this, Ax);
    function t(A, n, g, a, x) {
      return cA(x - 856, A);
    }
    function e(A, n, g, a, x) {
      return cA(g - -784, A);
    }
    this[t("S(0*", 1284, 1209, 1086, 1213) + e("1oth", -279, -293) + "d"] = o;
  }
  async [(tx = iA(617, 636, 494, 655, "kz)9") + "se", ex = iA(565, 629, 464, 578, "b[%9") + WA("2CiY", 648, 565, 651) + WA("OWG4", 762, 751, 833) + kA(981, 1088, "Bme%", 887, 959), Ax = WA("nVzO", 883, 882, 804) + iA(653, 724, 607, 701, "yH5V"), iA(581, 555, 707, 535, "b[%9"))](o) {
    function t(x, r, C, I, Q) {
      return iA(x - 282, r - 206, C - 336, I - 121, r);
    }
    const e = await this[A("mheK", 439, 354, 391) + n(380, 480, "ug(i", 503) + n(444, 429, "$Kvl", 527)](o);
    function A(x, r, C, I, Q) {
      return WA(x, r - 430, C - 161, I - -228);
    }
    await Promise[A("mheK", 352, 327, 436) + A("#j$K", 556, 629, 536)]([this[a(1270, "b[%9", 1234) + g(-365, -274, "6j*u", -335) + "d"][t(779, "1oth", 656, 771)](o), this[g(-11, -139, "6RPi", -231) + n(477, 461, "yFb$", 523) + "e"](e)]);
    function n(x, r, C, I, Q) {
      return kA(x - 164, r - 461, C, I - 205, I - -476);
    }
    function g(x, r, C, I, Q) {
      return iA(r - -775, r - 281, C - 278, I - 106, C);
    }
    function a(x, r, C, I, Q) {
      return zA(x - 310, x - -126, C - 231, r);
    }
    this[g(-378, -262, "6RPi", -215) + a(1180, "Y$f^", 1088) + n(509, 693, "6RPi", 622)]();
  }
  async [De("Y%UG", 1170, 1163, 1240, 1184) + kA(965, 954, "b[%9", 1006, 954) + "se"](o) {
    var a;
    function t(x, r, C, I, Q) {
      return zA(x - 389, Q - -1040, C - 468, r);
    }
    function e(x, r, C, I, Q) {
      return WA(I, r - 162, C - 425, x - -92);
    }
    function A(x, r, C, I, Q) {
      return De(x, r - 259, C - 266, I - 309, r - -375);
    }
    function n(x, r, C, I, Q) {
      return iA(C - 584, r - 331, C - 244, I - 61, I);
    }
    function g(x, r, C, I, Q) {
      return kA(x - 348, r - 105, I, I - 26, x - -1514);
    }
    try {
      if (t(237, "S(0*", 333, 328, 355) === e(637, 531, 528, "adBn", 635)) {
        const x = await fetch(o);
        if (!x.ok)
          if (e(730, 627, 754, ")N4p", 646) !== e(648, 663, 755, "mheK", 684)) {
            const r = _0x5070a7[A("9c]H", 632, 592, 641, 556)](this[g(-445, -435, -465, "HSgL", -390) + "se"]);
            return (a = r == null ? void 0 : r[n(1274, 1060, 1182, "2CiY", 1071) + A("kz)9", 802, 713, 677, 730)]) == null ? void 0 : a[t(275, "BK$g", 252, 255, 234) + n(1227, 1248, 1236, "6j*u", 1174)];
          } else throw new Error(n(1193, 1160, 1083, "Q!cr", 1050) + g(-594, -638, -563, "ZBey", -523) + g(-606, -586, -682, "xIV4", -531) + t(412, "ug(i", 337, 246, 366) + "d.");
        this[g(-494, -583, -505, "mheK", -504) + "se"] = await x[n(1131, 1244, 1168, "Y%UG", 1191)]();
      } else _0x11b180[t(504, "2mtP", 332, 450, 438)](_0x5c6999);
    } catch (x) {
      if (e(734, 704, 737, "5#*R") !== n(1131, 1102, 1052, "OWG4")) throw new _0x351267(t(336, "6RPi", 150, 275, 214) + t(441, "MMU#", 506, 359, 447) + t(290, "er@i", 333, 219, 340) + g(-455, -513, -528, "MMU#") + "d.");
      this[n(956, 1164, 1076, "c3IO") + "se"] = void (-349 + 7 * 331 + -1968), console[g(-510, -383, -617, "BK$g")](x);
    }
  }
  async [WA("p&kY", 826, 711, 751) + kA(1071, 1084, "BK$g", 1068, 1077) + "e"](o) {
    function t(a, x, r, C, I) {
      return WA(r, x - 108, r - 500, a - -1053);
    }
    function e(a, x, r, C, I) {
      return zA(a - 485, C - -535, r - 347, I);
    }
    function A(a, x, r, C, I) {
      return WA(a, x - 2, r - 75, r - -293);
    }
    function n(a, x, r, C, I) {
      return WA(I, x - 177, r - 225, C - 367);
    }
    function g(a, x, r, C, I) {
      return iA(a - 728, x - 100, r - 176, C - 475, I);
    }
    if (this[g(1285, 1292, 1261, 1198, "Q!cr") + A("Zh4(", 678, 568)] = void (-4330 + -10 * -433), !o)
      if (e(1029, 878, 945, 937, "Bme%") === g(1261, 1343, 1204, 1234, "yFb$")) {
        console[t(-443, -470, "BK$g")](t(-279, -190, "2mtP") + A("!FnP", 559, 478) + n(1082, 1060, 1222, 1178, "hMo2") + e(843, 948, 871, 868, "kz)9") + g(1208, 1307, 1237, 1265, "p&kY")), this[A("LPR!", 322, 407) + "se"] = void (9655 + 239 * 37 + -18498);
        return;
      } else return;
    await this[g(1305, 1301, 1234, 1293, "Gsp9") + A("Zh4(", 437, 534) + "se"](o);
  }
  async [WA("FUyZ", 738, 735, 842) + kA(904, 846, "Yk)7", 897, 921) + WA("ZBey", 847, 656, 756)](o) {
    const t = await fetch("" + o + this[g(931, 888, "hMo2", 806) + e(-287, "2mtP", -166, -41) + A("4Jut", 1383, 1274, 1298) + a("1oth", 744, 679, 645)][0]);
    function e(x, r, C, I, Q) {
      return iA(C - -649, r - 439, C - 44, I - 113, r);
    }
    function A(x, r, C, I, Q) {
      return iA(I - 603, r - 88, C - 420, I - 14, x);
    }
    const n = t.ok ? 8021 + -1 * 8021 : 9271 * -1 + 4657 + 65 * 71;
    function g(x, r, C, I, Q) {
      return iA(x - 313, r - 181, C - 364, I - 178, C);
    }
    function a(x, r, C, I, Q) {
      return kA(x - 34, r - 26, x, I - 176, I - -340);
    }
    return "" + o + this[g(904, 905, "6j*u", 915) + A("c3IO", 1164, 1109, 1107) + g(1007, 1066, "M8ve", 1068) + a("1oth", 701, 693, 645)][n];
  }
  [De("2mtP", 1107, 1164, 1067, 1129) + zA(1313, 1309, 1372, "taUb") + "s"](o) {
    function t(A, n, g, a, x) {
      return iA(a - -422, n - 321, g - 294, a - 448, x);
    }
    function e(A, n, g, a, x) {
      return zA(A - 17, g - -1492, g - 306, A);
    }
    o[t(95, 249, 136, 139, "nVzO") + "ch"]((A) => console[e("9c]H", -65, -187)](A));
  }
  [iA(572, 456, 650, 660, "U4bK") + kA(875, 935, "1oth", 874, 914) + De("hMo2", 880, 940, 959, 985)](o) {
    function t(A, n, g, a, x) {
      return iA(x - -156, n - 211, g - 38, a - 376, a);
    }
    function e(A, n, g, a, x) {
      return kA(A - 334, n - 203, g, a - 208, x - -1467);
    }
    o[t(609, 489, 402, "Yk)7", 484) + "ch"]((A) => console[e(-589, -570, "S(0*", -529, -474)](A));
  }
  [zA(1189, 1303, 1176, "Zh4(") + De("HSgL", 1061, 957, 1130, 1077)]() {
    function o(A, n, g, a, x) {
      return zA(A - 23, A - -1044, g - 204, a);
    }
    function t(A, n, g, a, x) {
      return iA(n - 188, n - 343, g - 184, a - 445, a);
    }
    function e(A, n, g, a, x) {
      return WA(g, n - 41, g - 4, a - -1065);
    }
    return window[t(821, 836, 866, "MMU#") + t(710, 742, 733, ")N4p")][e(-195, -246, "U4bK", -290) + o(321, 448, 260, "otbt")];
  }
  [iA(560, 447, 571, 542, "b[%9") + kA(808, 911, "2mtP", 932, 932) + kA(950, 1115, ")N4p", 994, 1018)]() {
    function o(g, a, x, r, C) {
      return iA(x - -869, a - 422, x - 248, r - 309, g);
    }
    function t(g, a, x, r, C) {
      return kA(g - 310, a - 476, g, r - 81, x - 376);
    }
    function e(g, a, x, r, C) {
      return zA(g - 390, x - -1675, x - 164, C);
    }
    function A(g, a, x, r, C) {
      return WA(a, a - 481, x - 243, g - 562);
    }
    function n(g, a, x, r, C) {
      return kA(g - 10, a - 92, g, r - 408, a - -387);
    }
    try {
      if (t("xIV4", 1508, 1479, 1379, 1589) !== t("hMo2", 1544, 1494, 1531, 1595)) {
        if (!this[t("6j*u", 1352, 1472, 1492, 1466) + "se"])
          if (n("2CiY", 637, 627, 544, 703) === A(1220, "U4bK", 1217, 1109, 1114)) _0x4e1494[e(-321, -275, -329, -302, "ug(i")]();
          else throw new Oi(n("hMo2", 688, 664, 636, 748) + A(1403, "6RPi", 1478, 1526, 1324) + n("FUyZ", 693, 587, 803, 651) + A(1321, "hMo2", 1253, 1336, 1269) + ".");
        if (!this[o("2CiY", -136, -157, -189, -135) + A(1204, "afFE", 1299, 1231, 1291) + "d"][o("!FnP", -292, -264, -300, -173) + o("Yk)7", -345, -301, -291, -306) + e(-182, -303, -306, -352, "ZBey") + "ed"]()) {
          if (o("kz)9", -247, -286, -246, -213) !== e(-264, -172, -223, -162, "Gsp9")) throw new Oi(A(1277, "2mtP", 1161, 1237, 1187) + A(1365, "2mtP", 1449, 1310, 1317) + n("LPR!", 623, 606, 733, 723) + t("nVzO", 1377, 1469, 1532, 1486) + ".");
          _0x4ea5a1[o("afFE", -200, -265, -350, -153) + "ch"]((g) => _0x1f1b5d[o("Lkf!", -505, -388, -489, -386)](g));
        }
        this[t("aAWW", 1318, 1405, 1280, 1344) + e(-213, -431, -338, -246, "b[%9")] = new ka(rB(this[o("2CiY", -105, -162, -266, -189) + "se"], this[A(1222, "Zh4(", 1214, 1205, 1166) + e(-203, -427, -301, -296, "D7Fd")]())), this[o("6j*u", -244, -185, -94, -173) + n("5#*R", 577, 701, 587, 519) + "s"](this[e(-378, -291, -289, -216, "aAWW") + A(1359, "yH5V", 1340, 1430, 1389)][o("ztC7", -186, -255, -272, -384) + "s"]), this[e(-271, -253, -266, -320, "p&kY") + o("otbt", -328, -302, -244, -309) + n("3#1b", 680, 639, 616, 680)](this[o("Q!cr", -201, -312, -315, -278) + A(1427, "c3IO", 1549, 1494, 1336)][o("afFE", -305, -280, -344, -223) + e(-294, -195, -173, -53, "$Kvl")]);
      } else {
        if (!this[e(-362, -300, -293, -332, "1oth") + "se"]) throw new _0x5c36a8(o("Y$f^", -382, -373, -350, -413) + e(-427, -288, -313, -189, "OWG4") + e(-109, -136, -239, -159, "6RPi") + t("MMU#", 1217, 1311, 1217, 1281) + ".");
        if (!this[e(-253, -125, -216, -134, "hMo2") + A(1282, "M8ve", 1375, 1333, 1303) + "d"][t("1oth", 1452, 1464, 1529, 1378) + A(1330, "yFb$", 1436, 1424, 1370) + A(1171, "U4bK", 1196, 1104, 1119) + "ed"]()) throw new _0x2f849c(n("Y$f^", 720, 610, 592, 768) + n("afFE", 640, 603, 742, 557) + n("ZBey", 681, 578, 614, 773) + o("S(0*", -400, -305, -259, -187) + ".");
        this[o("otbt", -197, -159, -143, -77) + t("otbt", 1597, 1528, 1609, 1400)] = new _0x2790a1(_0x3b646f(this[o("D7Fd", -374, -324, -325, -219) + "se"], this[t("p&kY", 1515, 1467, 1565, 1513) + o("6j*u", -365, -318, -216, -196)]())), this[n("er@i", 514, 596, 639, 560) + A(1332, "er@i", 1226, 1287, 1359) + "s"](this[e(-189, -167, -175, -235, "M8ve") + o("!FnP", -87, -168, -175, -104)][o("MMU#", -89, -170, -82, -261) + "s"]), this[t("mheK", 1279, 1344, 1457, 1471) + o("nVzO", -361, -374, -445, -246) + o("$Kvl", -101, -154, -100, -102)](this[A(1347, "adBn", 1408, 1232, 1431) + t("Gsp9", 1334, 1429, 1511, 1299)][n("2CiY", 685, 588, 668, 772) + n("Bme%", 551, 441, 579, 608)]);
      }
    } catch (g) {
      if (A(1375, "FUyZ", 1462) === A(1361, "U4bK", 1311)) {
        _0x4b93c7 instanceof _0x327097 ? _0x41385b[A(1340, "#j$K", 1446)]() : _0x252876 instanceof _0x1dc018 && _0x632c29[e(-132, -56, -184, -205, "ZBey")](_0x4b5801);
        const a = {};
        a[A(1223, "Zh4(", 1139) + e(-447, -360, -352, -288, "FUyZ")] = !1, a[o("c3IO", -515, -399, -468) + "s"] = [], a[t("9c]H", 1311, 1398, 1493) + e(-298, -219, -192, -241, "HSgL")] = [], a[A(1231, "Zh4(", 1158) + t("afFE", 1525, 1406, 1524) + t(")N4p", 1184, 1280, 1395)] = void (-7273 + -10 * -889 + -7 * 231), a[n("p&kY", 719, 642, 827)] = function() {
        }, a[e(-364, -254, -255, -283, "Y%UG") + o("Zh4(", -196, -146, -272)] = "", this[e(-160, -116, -183, -255, "b[%9") + o("Q!cr", -317, -188, -72)] = new _0x49792d(a);
      } else {
        if (g instanceof Oi) {
          if (n("S(0*", 675, 619, 754) !== n("yFb$", 713, 773, 797)) throw new _0x26d23c(A(1229, "#j$K", 1187) + A(1221, "otbt", 1116) + A(1192, "yH5V", 1303) + t("ZBey", 1189, 1275, 1147) + ".");
          g[o("S(0*", -255, -258, -347)]();
        } else if (g instanceof Error) {
          if (t("2CiY", 1573, 1526, 1420) === n("U4bK", 700, 617, 679)) return _0x1b6c0d[t("U4bK", 1437, 1349, 1358) + t("Gsp9", 1450, 1517, 1547)][A(1258, "BK$g", 1303) + t("Y%UG", 1443, 1354, 1256)];
          console[n("4Jut", 718, 684, 589)](g);
        }
        const a = {};
        a[n("Zh4(", 560, 551, 485) + o("6RPi", -206, -153, -48)] = !1, a[t("b[%9", 1188, 1279, 1251) + "s"] = [], a[o("er@i", -274, -311, -210) + o("HSgL", -228, -173, -221)] = [], a[o("hMo2", -293, -183, -134) + n("Y$f^", 589, 531, 683) + A(1309, "S(0*", 1394)] = void (-31 * -202 + -17 * 43 + -5531), a[e(-381, -258, -282, -318, "Yk)7")] = function() {
        }, a[e(-302, -380, -409, -520, "4Jut") + e(-203, -358, -326, -270, "b[%9")] = "", this[n("taUb", 749, 657, 620) + t("Zh4(", 1470, 1523, 1480)] = new ka(a);
      }
    }
  }
  [De("afFE", 977, 892, 911, 1005) + iA(643, 710, 636, 628, "U4bK") + zA(1334, 1340, 1410, "5#*R") + "t"]() {
    function o(e, A, n, g, a) {
      return WA(g, A - 221, n - 129, e - -944);
    }
    function t(e, A, n, g, a) {
      return kA(e - 212, A - 389, e, g - 152, A - 17);
    }
    return this[t("FUyZ", 1098, 974, 1121) + o(-136, -44, -101, "6j*u")];
  }
  [iA(537, 652, 522, 472, "9c]H") + iA(511, 445, 533, 416, "xIV4") + kA(1012, 830, "b[%9", 944, 930)]() {
    var g;
    function o(a, x, r, C, I) {
      return iA(x - -466, x - 246, r - 414, C - 279, I);
    }
    if (!this[e(-82, -38, "taUb", -55) + "se"])
      return e(-85, -117, "FUyZ", -24) === t(1060, 1158, "MMU#", 1033) ? this[t(1185, 1083, "Q!cr", 1084) + t(1090, 1247, "4Jut", 1183)] : void 0;
    function t(a, x, r, C, I) {
      return zA(a - 304, C - -260, r - 124, r);
    }
    function e(a, x, r, C, I) {
      return kA(a - 331, x - 146, r, C - 273, a - -1205);
    }
    function A(a, x, r, C, I) {
      return De(a, x - 388, r - 495, C - 291, x - 159);
    }
    function n(a, x, r, C, I) {
      return De(I, x - 165, r - 31, C - 197, C - 5);
    }
    try {
      if (t(1063, 981, "2CiY", 1071, 1046) === e(-101, -179, "otbt", -55, -101)) {
        const a = JSON[e(-244, -288, "ug(i", -327, -270)](this[A("U4bK", 1143, 1063, 1193, 1176) + "se"]);
        return (g = a == null ? void 0 : a[A("ZBey", 1169, 1057, 1242, 1241) + e(-196, -267, "Y%UG", -145, -236)]) == null ? void 0 : g[n(1080, 1095, 1104, 1021, "adBn") + o(305, 213, 161, 179, "aAWW")];
      } else {
        _0x2148f8[t(955, 1017, "$Kvl", 1003, 930)](e(-147, -114, "3#1b", -35, -269) + A("Q!cr", 1348, 1383, 1407, 1258) + A("yFb$", 1247, 1235, 1350, 1298) + A("xIV4", 1244, 1235, 1156, 1142) + e(-67, -138, "M8ve", -18, -118)), this[n(885, 1113, 952, 989, "U4bK") + "se"] = void 0;
        return;
      }
    } catch (a) {
      if (n(937, 873, 1025, 957, "MMU#") === t(1102, 1021, "er@i", 1048)) _0x384569[n(1063, 912, 1041, 1041, "nVzO") + "ch"]((x) => _0x54cd87[t(1128, 1058, "2CiY", 1015)](x));
      else {
        a instanceof Error && (o(136, 120, 16, 148, "1oth") !== e(-150, -35, "3#1b", -111) ? v[n(1e3, 972, 978, 973, "Y$f^") + n(1243, 1214, 1240, 1115, "HSgL")](a) : _0xa924cc[t(1021, 1088, "taUb", 1054) + o(34, 104, 190, 94, "mheK")](_0x3734e2));
        return;
      }
    }
  }
}
function _o() {
  const i = ["WQGsWPFcRY4", "W7BcHxLaxW", "WO3dImkl", "W4CezvnuWPtcLbq9F8o4WOv4", "W5NdRmk+WRjI", "WRtdIveQWPq", "mSo0z3NdQq", "WOqjo0uH", "W65lW7ZcIau", "EsGQWPFdGW", "wmo9W6tdJCoAAr7cLH3dL8o3xHW", "wYWyWOVdUq", "j8ogW6BdTSoE", "p1T6WPXH", "W717dGJcLW", "WQK9sW7cImk+ESkRW7y", "FK/cOaHm", "cmkMWQ/cKmkY", "ySkRW43dKmoo", "wWddUG", "m0vmdCoM", "gNLiWPrS", "q8oQq3Cz", "t8o7vhyy", "W7DNWQBdI8kk", "W7qAWQG", "WQfIW7ZcVGtdM0tcGG", "W5xdLrGQWOG", "xaTyWONcUW", "CvtcRb5r", "oSkag0SS", "cCkTWRJdMW", "WRytuZtdUa", "W6FcT8oYj8kZ", "drKj", "mSkgdgSV", "dSk6WRpcHSkr", "W6xcRCkMWRHP", "umowWRm", "cWXe", "fSo8Ch/dRW", "iXldTarpWRFcJCoCW40", "W6revXldU8oAW6VcTa", "bCkyexG7", "pSoMW5OuWOC", "W6ZcPmoPn8kO", "e8o4DG", "vMFcGmocyW", "BSkXW7JcIq", "iYP0rmoj", "dCoWW6xdNCoz", "W5BdIb8RWP4", "m8o1W5WyWP0", "h8k0W5NdM2S", "Fbm3lWTyiIP9kCkovG", "wGTfWPxcUG", "W6hcR3W", "WOFcOdhdRSoI", "v8oFWQy8", "CSoFFxCL", "WPysmWqq", "zmkWW43dGCoX", "WPn2tmkH", "W6iXW77cLq", "W5hdSh3cK8k+WPrVumoRW51rWOv/", "W7r9ma7cHG", "WRioWPVdTM8", "kSk5nmkZvq", "ke99EXW", "zmkQW63cKSoz", "p8khhKe", "CuS1l2C", "W5NdHa8RWOK", "WOLxW64rAW", "oSoUW40sWOe", "WPmCWOpcH3W", "WORdH8kOESk1c8kahmoBWRDmvZq", "pSkPiCkPBW", "WReCW4tcHKe", "WOWbWOddRa", "jSkVnCo5xa", "W7xdGSkEW7fg", "ttDwWPFcRq", "WPyEnK8W", "W7L9gsVcJa", "WQyWWR7dO8kYWPmrbG", "oSoZW6iEWOW", "qmo3rhyp", "smouqvKs", "oSkDneCH", "W4juW4m", "u2/cJ8ooDW", "CsO4", "WObgmGyb", "eCoDWQKWFW", "eqrmdCoH", "Ch7cVmo8vq", "W5ddPCoXpCkJ", "gCo4CfJdQa", "f8oUw2RdPG", "W4ZcK8oIjq", "WP4hWOhcJMC", "WOhcQsNdSCoU", "cmkRW4hdJ2K", "v1tcSqjq", "WRGPW7pcJ8kp", "CXbuWP/cPG", "gmo4zwJdSG", "W44Hemk9W5z1baZdLCk5ya", "FKNcPcHq", "gmoDWQiSWPu", "W41hW5JcQW", "i8kVjCorua", "W6eeW6T6Ca", "W4VcK8oIomoL", "WOb5a11G", "WR7dO1mlWRe", "W5pdIaqXWOG", "exvy", "W5ZcL8oKcmo1", "WPdcTYZdJmo/", "c08pW4ldUmkIsKeIk8o6W41e", "W5Ssn0uY", "W6pdLmo/eCoX", "vuztW5JcMsNdULFcVNddKSo1", "u2NcJ8okBq", "g8kXpumJ", "dK/dQehdLG", "WO0wWPFcNwq", "W41npMafsmolWPe", "WReBqG", "W7iaW7D6Ca", "vXHdWPNcOa", "WPKAo0u", "B8kWW63cKSoy", "WQNdTfirWQ8", "W7VcR3W", "WOqBWOhdQW", "c1C4kCom", "W5ldV8kLWQj5", "gmkNW4ldM3y", "W70kW74", "srHBWPpcRa", "d8kNiCkczW", "uHXf", "fCoCWRag", "emoBWQWmWPW", "wXXrWPVcVq", "W5JcMCobvNzhBmk/Cmo3WQBcNa", "W5pcPmoVoSkP", "WOD7W64lEG", "WQTIkMnd", "WPlcQJC", "W49OdWRdHq", "t3tcHCofBq", "BSoqWRq7", "ySkTW6ZcICoe", "fSkiW7NdUSoT", "d8kTWRJcKCkh", "aHmtWO3dHa", "W6xcQmo4", "WRevuW", "cvCVjCod", "vHDEWO4", "W5NdHGySWOa", "W5ybWRNcOCof", "WQqtxYm", "W4VdI8oonCo4", "WPyKWQpdIg4", "d0FdOKO", "W7hcPxXABW", "m8kRi8oZua", "WOZcRcBdH8oL", "WPaEneOG", "W4ZcK8oIjCoP", "cSoMW57dMMS", "fmkVcui0", "WOKgWORdVwG", "WOtcGc7dI8oE", "kSkLjCk9ua", "nCkgfLOW", "WOpdN8kweJC", "nSkViSocuW", "xurFW5ZcN2pdPvBcULhdMG", "waBdOhK", "d8oDWRG", "iSkLi8oywa", "W7z1WOxdICkr", "WOXaW6uh", "WPT8sCoRWQK", "n8oyWPq5WP4", "wXzdWR/cPq", "WOnamH0n", "emoDWRe", "W6ddHH4T", "WQDVpgGq", "FvCIBNK", "Esi+WO3dKG", "W6ulWRpcV8oV", "W7KqWR/cRmoO", "EYGTWOldGW", "WRedW7z8EW", "WOiYWR/cRSkK", "wmo4z8oXm8oBiCoccSoaqmoN", "WODHqCoHWPe", "dbCtWO3dHa", "WQ9iiwre", "W6Duz8kPtG", "kSk0W4ldMM0", "W4SMWR7dGCkb", "W71niSk8Bq", "bSo+xM0f", "W5zMxcpcQG", "v2NcN8oFDW", "oColWOmfWOS", "WRmdvcpdVW", "WPOPWRq", "rWJdUW", "cWPbamoj", "W51fCq", "W57dJH4SWPS", "wq7dQNj5", "WOXDW7iNBW", "W6pdK8oJfSoT", "iCkicKaR", "xgpcGSoyFa", "vurEW5/cMYldQLdcTL/dKSos", "usjRWQFdUq", "Dru2kq5CpZTAcSkGrq", "BSk8W7VcImof", "sSo3uNKF", "aGTtaCkL", "ghjpWR0L", "hM5tWQT2", "WPKEia", "jub6Fvq", "W6H7fqNcKq", "FfhcQmoFsG", "B8kKW4RdLSo2", "DMNcOCoaEG", "WOWCWR7dUxu", "W7zMceFcJa", "cSk6pmk0Dq", "WPb2xmolWOO", "WOCkWO3dVgm", "bCkHkCkIyG", "WPWAjKG9", "nG42WQldOa", "WPGsmu47", "EIm4WOBcLG", "babof8oG", "mMPxWQ9W", "WOD4gMfd", "y8kYWPzpW5CfW6xcRSk+iXRdS1u", "EYi/WQBdMW", "WRXvgbWn", "W4NcNCoyoCkH", "ySk3W4ZdMSoS", "WPfHtCoQ"];
  return _o = function() {
    return i;
  }, _o();
}
const gi = class gi extends dB {
  static getInstance() {
    if (!this._instance) {
      const o = new QB();
      this._instance = new gi(o);
    }
    return this._instance;
  }
};
G(gi, "_instance");
let Nn = gi;
const dg = st(void 0);
dg.displayName = "CameraOptionsContext";
function Or() {
  const i = Fe(dg);
  if (!i)
    throw new Error("Missing provider for CameraOptionsContext");
  return i;
}
function lB({
  assetsDirectoryPath: i,
  captureMode: o,
  onPhotoTaken: t,
  sessionToken: e
}) {
  return {
    onPhotoTaken: t,
    captureMode: o ?? E0.AUTO_CAPTURE,
    assetsDirectoryPath: Qr(i),
    sessionToken: e
  };
}
function uB({
  cameraOptions: i,
  children: o
}) {
  const t = RA(() => lB(i), [i]);
  return /* @__PURE__ */ m(dg.Provider, { value: t, children: o });
}
const ai = class ai {
  constructor() {
    G(this, "lastDetails", {});
    G(this, "delayedTime", 8443 + 362 * -8 + 3 * -1849);
  }
  static getInstance() {
    return !this._instance && (this._instance = new ai()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && hi(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = A);
  }
};
G(ai, "_instance");
let h0 = ai;
const jt = h0.getInstance(), Hr = (i, o, t = As) => {
  const e = {};
  e.instructionCode = o.code, e.isEscalated = o.isEscalated ?? !1;
  const A = e;
  jt.dispatchDelayedCustomEventOnChange(i, A, t);
}, hB = (i, o) => {
  jt.dispatchCustomEventOnChange(i, o);
}, fB = (i, o) => {
  const t = {};
  t.size = o;
  const e = t;
  jt.dispatchCustomEventOnChange(i, e);
}, pB = (i, o, t) => {
  const e = o.confidence < t ? void 0 : o, A = {};
  A.detectedObject = e;
  const n = A;
  jt.dispatchCustomEventOnChange(i, n);
}, yB = (i, { detection: o, fps: t, image: e, invalidValidators: A, isInCandidateSelection: n }) => {
  const g = {};
  g.image = e, g.data = {}, g.data.detection = o, g.data.fps = t, g.data.isInCandidateSelection = n, g.data.invalidValidators = A, g.data.imageResolution = {}, g.data.imageResolution.width = e.width, g.data.imageResolution.height = e.height;
  const a = g;
  jt.dispatchCustomEventOnChange(i, a);
};
function DB(i, o) {
  const t = {};
  t.instructionCode = o;
  const e = t;
  jt.dispatchCustomEventOnChange(i, e);
}
const Fn = (i, o) => {
  hi(i, o);
}, mB = (i, o) => {
  const { cameraResolution: t, shouldCameraMirror: e } = o;
  Z(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, hB(i, A);
  }, [t, e, i]);
};
function Rn(i, o) {
  Z(() => {
    const t = (e) => {
      o(e);
    };
    return document.addEventListener(i, t), () => {
      document.removeEventListener(i, t);
    };
  }, [o, i]);
}
const wB = (i) => i === tr.CONTROL ? !Qg() : !0;
function bB(i, o) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: n } = Bt(), [g, a] = BA(), x = RA(() => {
    const E = n && o && o.isStreaming && o.getCameraSettings().facingMode;
    return E ? g ?? E === "user" : g ?? wB(i);
  }, [o, g, i, n]);
  function r() {
    t !== ne.LOADING && e(ne.RUNNING);
  }
  function C() {
    g === void (13 * -463 + -1 * -9814 + 345 * -11) ? a(!x) : a(!g);
  }
  async function I() {
    if (o) {
      e(ne.LOADING);
      try {
        await o.switchCamera(), e(ne.RUNNING);
      } catch (E) {
        if (E instanceof Error) {
          A(v.fromCameraError(E));
          return;
        }
      }
      a(void (7534 * 1 + 9 * -1039 + 79 * 23));
    }
  }
  function Q(E) {
    var d;
    switch ((d = E.detail) == null ? void 0 : d["instruction"]) {
      case wt.CONTINUE_DETECTION:
        r();
        break;
      case wt.TOGGLE_MIRROR:
        C();
        break;
      case wt.SWITCH_CAMERA:
        I();
        break;
      default:
        return;
    }
  }
  Rn(i, Q);
  const s = {};
  return s.shouldCameraMirror = x, s;
}
function kB(i, o) {
  Rn(i, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === wt.CONTINUE_DETECTION && iB(ie.CONTROL, wt.CONTINUE_DETECTION);
  }), Rn(ie.CONTROL, (t) => {
    var e;
    ((e = t.detail) == null ? void 0 : e["instruction"]) === wt.CONTINUE_DETECTION && o();
  });
}
function GB(i, o) {
  Z(() => {
    if (!i.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      fB(o, A.contentRect);
    });
    return t.observe(i.current), () => {
      t.disconnect();
    };
  }, [i, o]);
}
function SB(i) {
  return Ne(Math.abs(i));
}
const NB = () => {
  const [i, o] = BA(null), t = tA(new l0(-1470 * 1 + 4 * 911 + 723 * -3));
  function e(n) {
    const { z: g } = n.accelerationIncludingGravity || {};
    if (!g) return;
    t.current.pushFixed(SB(g));
    const a = Ne(It(t.current)), x = {};
    x.z = a, o(x);
  }
  Z(() => (window.addEventListener("devicemotion", bs(e, ys), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = i, A;
}, lg = (i, o) => {
  const t = tA(o);
  Z(() => {
    t.current = o;
  }, [o]), Z(() => {
    const e = (A) => t.current(A);
    return document.addEventListener(i, e), () => {
      document.removeEventListener(i, e);
    };
  }, [i]);
};
var FB = Symbol.for("preact-signals");
function ug() {
  if (kt > -5994 + 11 * 545)
    kt--;
  else {
    for (var i, o = !1; B0 !== void 0; ) {
      var t = B0;
      for (B0 = void (254 * -17 + 8317 + 129 * -31), Mn++; void (-12192 + -1 * -12192) !== t; ) {
        var e = t.o;
        if (t.o = void (10060 + 1006 * -10), t.f &= -(-2471 + 1 * -7670 + 10144), !(4518 * 2 + 5 * 1871 + 1 * -18383 & t.f) && Tr(t)) try {
          t.c();
        } catch (A) {
          !o && (i = A, o = !(9696 + 9 * 423 + 643 * -21));
        }
        t = e;
      }
    }
    if (Mn = 0, kt--, o) throw i;
  }
}
var _ = void (-7969 * -1 + 6647 + -14616), B0 = void (7457 + -10 * 877 + 1313), kt = 187 * 33 + 3715 + -9886, Mn = 974 + -1 * -6711 + -265 * 29, Vo = 0;
function Kr(i) {
  if (_ !== void 0) {
    var o = i.n;
    if (void (-6008 + -7253 * 1 + 13261) === o || o.t !== _)
      return o = { i: 0, S: i, p: _.s, n: void (-6897 + -7454 * -1 + 1 * -557), t: _, e: void (-7961 + 17 * -494 + 123 * 133), x: void (5349 + -395 * 7 + -2584), r: o }, _.s !== void 0 && (_.s.n = o), _.s = o, i.n = o, -13368 + -1 * -13400 & _.f && i.S(o), o;
    if (-(3066 + 1 * 8781 + -11846) === o.i)
      return o.i = 7894 * -1 + -9293 + 17187, o.n !== void 0 && (o.n.p = o.p, void (5387 * -1 + -5204 + 623 * 17) !== o.p && (o.p.n = o.n), o.p = _.s, o.n = void (-2865 * -1 + 1281 + -2 * 2073), _.s.n = o, _.s = o), o;
  }
}
function fA(i) {
  this.v = i, this.i = 4296 * 2 + 5365 + -13957, this.n = void (-771 * 11 + -1945 + 10426), this.t = void 0;
}
fA.prototype.brand = FB, fA.prototype.h = function() {
  return !(-1 * 9263 + 4564 + 37 * 127);
}, fA.prototype.S = function(i) {
  this.t !== i && void (-100 + 1 * -829 + 929 * 1) === i.e && (i.x = this.t, void (-8662 + -5 * -670 + -8 * -664) !== this.t && (this.t.e = i), this.t = i);
}, fA.prototype.U = function(i) {
  if (void (13 * -505 + -3158 + 9723) !== this.t) {
    var o = i.e, t = i.x;
    void (2255 * -3 + 13 * -304 + 1531 * 7) !== o && (o.x = t, i.e = void (-9667 + 983 * 1 + 8684)), void (-1 * -6277 + 107 * -41 + -1890) !== t && (t.e = o, i.x = void (1 * -1407 + -18 * 204 + 3 * 1693)), i === this.t && (this.t = t);
  }
}, fA.prototype.subscribe = function(i) {
  var o = this;
  return fg(function() {
    var t = o.value, e = _;
    _ = void (-787 * 11 + -3589 * -1 + -28 * -181);
    try {
      i(t);
    } finally {
      _ = e;
    }
  });
}, fA.prototype.valueOf = function() {
  return this.value;
}, fA.prototype.toString = function() {
  return this.value + "";
}, fA.prototype.toJSON = function() {
  return this.value;
}, fA.prototype.peek = function() {
  var i = _;
  _ = void (-4557 + 1365 * 5 + -2268);
  try {
    return this.value;
  } finally {
    _ = i;
  }
}, Object.defineProperty(fA.prototype, "value", { get: function() {
  var i = Kr(this);
  return i !== void 0 && (i.i = this.i), this.v;
}, set: function(i) {
  if (i !== this.v) {
    if (Mn > 100) throw new Error("Cycle detected");
    this.v = i, this.i++, Vo++, kt++;
    try {
      for (var o = this.t; void (58 * -15 + -145 * 11 + -85 * -29) !== o; o = o.x) o.t.N();
    } finally {
      ug();
    }
  }
} });
function Pr(i) {
  return new fA(i);
}
function Tr(i) {
  for (var o = i.s; void (-2315 + 2 * -3762 + -1 * -9839) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !(5776 + 788 * 11 + 92 * -157);
  return !(7556 * -1 + 4023 + 3534);
}
function qr(i) {
  for (var o = i.s; void (-363 + 13 * -107 + 1754) !== o; o = o.n) {
    var t = o.S.n;
    if (void (-8 * -1009 + -6520 + -1552) !== t && (o.r = t), o.S.n = o, o.i = -1, void (5364 + -1 * 4886 + -1 * 478) === o.n) {
      i.s = o;
      break;
    }
  }
}
function jr(i) {
  for (var o = i.s, t = void (-7999 * -1 + 7196 + -5065 * 3); void (1 * -6337 + 9594 + -3257) !== o; ) {
    var e = o.p;
    -(-1 * 3085 + -2012 + -2 * -2549) === o.i ? (o.S.U(o), void (-7580 * -1 + -1 * 1783 + -5797) !== e && (e.n = o.n), void (-2766 + -461 * -6) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (1 * -2293 + 2386 * 3 + 695 * -7) !== o.r && (o.r = void 0), o = e;
  }
  i.s = t;
}
function yt(i) {
  fA.call(this, void (-4802 + -1528 * 1 + -422 * -15)), this.x = i, this.s = void (2312 + 34 * -68), this.g = Vo - (-1 * -5199 + -9736 * -1 + -14934), this.f = -12801 + -197 * -65;
}
(yt.prototype = new fA()).h = function() {
  if (this.f &= -(-9427 + 2 * -1373 + -3044 * -4), 1 * -9917 + 3 * -474 + 11340 & this.f) return !(-2 * -950 + 786 + -2685);
  if (-11163 + 11195 * 1 == (616 + -2 * -542 + -4 * 416 & this.f)) return !(4798 + 18 * -547 + 5048);
  if (this.f &= -(-15646 + -15651 * -1), this.g === Vo) return !(-8396 * -1 + -9998 + 1602);
  if (this.g = Vo, this.f |= 1, this.i > -6768 + 16 * 423 && !Tr(this)) return this.f &= -(-134 * -13 + -6824 + -1 * -5084), !(-7025 + -281 * -25);
  var i = _;
  try {
    qr(this), _ = this;
    var o = this.x();
    (-5885 * 1 + 3265 + 659 * 4 & this.f || this.v !== o || 701 * -13 + -4 * 1220 + 13993 === this.i) && (this.v = o, this.f &= -(-8519 + -97 * -3 + -1649 * -5), this.i++);
  } catch (t) {
    this.v = t, this.f |= 1106 * 7 + 6 * 879 + 52 * -250, this.i++;
  }
  return _ = i, jr(this), this.f &= -(1087 * -3 + -4819 + 8082), !(-2497 * -1 + 459 * 11 + -7546);
}, yt.prototype.S = function(i) {
  if (void (9 * 1095 + -2 * 3946 + 151 * -13) === this.t) {
    this.f |= 2497 * 1 + -72 * -105 + -11 * 911;
    for (var o = this.s; o !== void 0; o = o.n) o.S.S(o);
  }
  fA.prototype.S.call(this, i);
}, yt.prototype.U = function(i) {
  if (void (-2 * -3629 + -8347 + 1089) !== this.t && (fA.prototype.U.call(this, i), this.t === void 0)) {
    this.f &= -(489 * -3 + -3896 + 142 * 38);
    for (var o = this.s; void (-9982 + 1205 * -4 + -6 * -2467) !== o; o = o.n) o.S.U(o);
  }
}, yt.prototype.N = function() {
  if (!(985 * 4 + 3325 * 2 + 5294 * -2 & this.f)) {
    this.f |= -5396 + 1523 * -6 + 14540;
    for (var i = this.t; void (59 * 31 + 204 * 2 + -2237) !== i; i = i.x) i.t.N();
  }
}, Object.defineProperty(yt.prototype, "value", { get: function() {
  if (-6619 + 314 * 20 + -85 * -4 & this.f) throw new Error("Cycle detected");
  var i = Kr(this);
  if (this.h(), void (-7154 + -4 * 871 + 10638) !== i && (i.i = this.i), -1 * 3643 + -5362 * -1 + -1703 & this.f) throw this.v;
  return this.v;
} });
function RB(i) {
  return new yt(i);
}
function Zr(i) {
  var o = i.u;
  if (i.u = void (107 * -19 + 6729 + 1174 * -4), typeof o == "function") {
    kt++;
    var t = _;
    _ = void (-2 * 1e3 + 7714 + -5714);
    try {
      o();
    } catch (e) {
      throw i.f &= -(-13 * 3 + -1071 + -139 * -8), i.f |= 8, hg(i), e;
    } finally {
      _ = t, ug();
    }
  }
}
function hg(i) {
  for (var o = i.s; void (758 * -3 + -8961 + 3745 * 3) !== o; o = o.n) o.S.U(o);
  i.x = void (-1 * -3676 + -1461 * -1 + -5137), i.s = void (122 * -19 + 8 * -76 + 2926), Zr(i);
}
function MB(i) {
  if (_ !== this) throw new Error("Out-of-order effect");
  jr(this), _ = i, this.f &= -(3 * -854 + -376 * -17 + 348 * -11), 8 & this.f && hg(this), ug();
}
function x0(i) {
  this.x = i, this.u = void (5118 + 1 * -4759 + -359), this.s = void (1 * -9203 + -310 + 9513 * 1), this.o = void (-10994 + -10994 * -1), this.f = 32;
}
x0.prototype.c = function() {
  var i = this.S();
  try {
    if (1127 * 3 + -3 * 2657 + 4598 & this.f || void (-1 * -2031 + -1517 + -257 * 2) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    i();
  }
}, x0.prototype.S = function() {
  if (419 * -9 + 7459 + -3687 & this.f) throw new Error("Cycle detected");
  this.f |= 2343 + -2 * 1171, this.f &= -(578 * -13 + 7250 + 273), Zr(this), qr(this), kt++;
  var i = _;
  return _ = this, MB.bind(this, i);
}, x0.prototype.N = function() {
  !(3 * 587 + -1 * 4319 + 2560 & this.f) && (this.f |= 1348 * -6 + 3866 * 1 + -12 * -352, this.o = B0, B0 = this);
}, x0.prototype.d = function() {
  this.f |= 152 * -38 + 8390 + 1 * -2606, -8548 + 1511 * -2 + 11571 & this.f || hg(this);
};
function fg(i) {
  var o = new x0(i);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Hi;
function mt(i, o) {
  U[i] = o.bind(null, U[i] || function() {
  });
}
function Ao(i) {
  Hi && Hi(), Hi = i && i.S();
}
function _r(i) {
  var o = this, t = i.data, e = Gt(t);
  e.value = t;
  var A = RA(function() {
    for (var n = o.__v; n = n.__; ) if (n.__c) {
      n.__c.__$f |= -1571 * -6 + -36 * -134 + -14246;
      break;
    }
    return o.__$u.c = function() {
      var g;
      !ix(A.peek()) && ((g = o.base) == null ? void (8007 + -607 * 1 + -7400) : g.nodeType) === 3 ? o.base.data = A.peek() : (o.__$f |= 533 + -1 * 2851 + -2319 * -1, o.setState({}));
    }, RB(function() {
      var g = e.value.value;
      return 571 * 5 + -33 * -14 + 107 * -31 === g ? 0 : !(9 * -511 + -440 + 5039) === g ? "" : g || "";
    });
  }, []);
  return A.value;
}
_r.displayName = "_st";
var Wn = {};
Wn.configurable = !(-11 * 890 + 7744 * -1 + 17534), Wn.value = void (2 * 4891 + -2020 * 4 + 46 * -37);
var vn = {};
vn.configurable = !(9505 + 1960 * -2 + -5585), vn.value = _r;
var Ln = {};
Ln.configurable = !(-952 * 8 + -1 * 7883 + 15499), Ln.get = function() {
  var i = {};
  return i.data = this, i;
};
var Un = {};
Un.configurable = !(666 * 9 + 458 * 15 + 2144 * -6), Un.value = 1;
var Xt = {};
Xt.constructor = Wn, Xt.type = vn, Xt.props = Ln, Xt.__b = Un, Object.defineProperties(fA.prototype, Xt), mt("__b", function(i, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var A in e) if (A !== "children") {
      var n = e[A];
      n instanceof fA && (t || (o.__np = t = {}), t[A] = n, e[A] = n.peek());
    }
  }
  i(o);
}), mt("__r", function(i, o) {
  Ao();
  var t, e = o.__c;
  e && (e.__$f &= -(-196 * -7 + 8113 + 9483 * -1), void (-1 * 5257 + 1756 + 3501) === (t = e.__$u) && (e.__$u = t = function(A) {
    var n;
    return fg(function() {
      n = this;
    }), n.c = function() {
      e.__$f |= -2 * 1824 + -470 * 1 + 4119, e.setState({});
    }, n;
  }())), Ao(t), i(o);
}), mt("__e", function(i, o, t, e) {
  Ao(), i(o, t, e);
}), mt("diffed", function(i, o) {
  Ao();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, A = o.props;
    if (e) {
      var n = t.U;
      if (n) for (var g in n) {
        var a = n[g];
        void (-1013 * 9 + -1 * -3138 + 5979) !== a && !(g in e) && (a.d(), n[g] = void (2374 + -399 * -5 + -4369));
      }
      else t.U = n = {};
      for (var x in e) {
        var r = n[x], C = e[x];
        void (6244 + 223 * -28) === r ? (r = WB(t, x, C, A), n[x] = r) : r.o(C, A);
      }
    }
  }
  i(o);
});
function WB(i, o, t, e) {
  var A = o in i && i.ownerSVGElement === void 0, n = Pr(t);
  return { o: function(g, a) {
    n.value = g, e = a;
  }, d: fg(function() {
    var g = n.value.value;
    e[o] !== g && (e[o] = g, A ? i[o] = g : g ? i.setAttribute(o, g) : i.removeAttribute(o));
  }) };
}
mt("unmount", function(i, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-9797 + -2 * 1229 + 1 * 12255);
        for (var A in e) {
          var n = e[A];
          n && n.d();
        }
      }
    }
  } else {
    var g = o.__c;
    if (g) {
      var a = g.__$u;
      a && (g.__$u = void (2185 + 2185 * -1), a.d());
    }
  }
  i(o);
}), mt("__h", function(i, o, t, e) {
  (e < -2 * 1523 + -3115 + 6164 || 71 * 123 + 1 * -3299 + -5 * 1085 === e) && (o.__$f |= 2), i(o, t, e);
}), ge.prototype.shouldComponentUpdate = function(i, o) {
  var t = this.__$u;
  if (!(t && void (657 + 55 * 18 + -1647) !== t.s || -2342 * -4 + -2513 * 1 + -6851 & this.__$f)) return !(4697 + -2 * -4294 + -13285);
  if (-7037 * 1 + 7348 + -308 & this.__$f) return !(-2069 * -1 + 3 * -1587 + -673 * -4);
  for (var e in o) return !(-473 * 1 + -9473 * -1 + 300 * -30);
  for (var A in i) if (A !== "__source" && i[A] !== this.props[A]) return !(139 * -53 + 1393 * -7 + 6 * 2853);
  for (var n in this.props) if (!(n in i)) return !(-4989 + 1 * -9534 + -103 * -141);
  return !(-39 * -217 + -9426 + 964);
};
function Gt(i) {
  return RA(function() {
    return Pr(i);
  }, []);
}
const vB = async () => WebAssembly.validate(new Uint8Array([-2 * 454 + 25 * -23 + 1483, -2971 * 2 + -5467 + 22 * 523, 159 * 46 + -386 * 15 + 1 * -1409, -1 * -8026 + -2 * -2011 + 11939 * -1, 3 * 1861 + 5816 + 139 * -82, -11 * -303 + -14 * 646 + 5711, 4970 + -182 * -5 + 3 * -1960, -8915 * -1 + 4599 * -1 + -332 * 13, -5570 + -49 * -37 + 3758, 578 + 1351 * 7 + -10030, 6511 + 10 * -651, 5442 + 1 * 3931 + -9277, -2931 * -3 + 1 * -4079 + -4714, 29 * -151 + -7310 + 11690, 123, 1309 * 1 + -9280 + 2658 * 3, -2 * 2003 + 5323 * -1 + -1 * -9331, -4661 + 1 * 2767 + 379 * 5, 1 * 8453 + -6966 + -1487, 2381 * 2 + -5920 + 1168 * 1, -3 * -1818 + 13 * 563 + -1 * 12763, 1468 * -5 + 1662 + 5679, -1493 + -1501 * -1, 3 * 3282 + -1689 * 3 + -4779, -53 * 155 + 9365 * -1 + 1 * 17645, 1954 * -1 + -8630 + 10584, 253, -2 * 146 + -2056 + -1 * -2363, -27 * 214 + 3814 + 1 * 2217, 3518 * 2 + -3049 + 1 * -3889, 2 * -4589 + 1 * 687 + -218 * -39]));
function LB() {
  const [i] = window.crypto.getRandomValues(new Uint32Array(1));
  return i.toString(16);
}
function UB() {
  const i = sessionStorage.getItem("dot-user-id");
  if (i) return i;
  const o = LB();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function JB(i, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : i;
}
const Jn = {};
Jn.label = ">1m", Jn.time = 60;
const Yn = {};
Yn.label = ">45", Yn.time = 45;
const On = {};
On.label = ">30", On.time = 30;
function Ga(i, o = [Jn, Yn, On]) {
  const t = o.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (i > e.time) return e.label;
  return "" + i;
}
const Sa = (i) => Math.round(i / 500) * 500 / (-1337 + -1 * 9824 + 12161 * 1), Na = (i) => i ? i <= 2313 * 1 + -1 * 9958 + 1 * 7646 ? Math.round(i * (-9348 + 2 * -2876 + 15120)) / (5607 + 83 * -117 + 4124) : Math.round(i / 50) * (262 * -2 + 1 * 1259 + 685 * -1) : 76 * 60 + 7799 + -12359, YB = (i) => Math.round(i * (-629 * 4 + -4874 * 1 + 7392)) / (759 + 197 * -11 + 1410);
async function Vr() {
  return await vB() ? fa.SIMD : fa.NO_SIMD;
}
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zr = {}, Fa = {}, OB = HB;
function HB(i, o) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, n = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(g, a) {
    t[e] = function(x) {
      if (n)
        if (n = !1, x)
          a(x);
        else {
          for (var r = new Array(arguments.length - 1), C = 0; C < r.length; )
            r[C++] = arguments[C];
          g.apply(null, r);
        }
    };
    try {
      i.apply(o || null, t);
    } catch (x) {
      n && (n = !1, a(x));
    }
  });
}
var Xr = {};
(function(i) {
  var o = i;
  o.length = function(g) {
    var a = g.length;
    if (!a)
      return 0;
    for (var x = 0; --a % 4 > 1 && g.charAt(a) === "="; )
      ++x;
    return Math.ceil(g.length * 3) / 4 - x;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  o.encode = function(g, a, x) {
    for (var r = null, C = [], I = 0, Q = 0, s; a < x; ) {
      var E = g[a++];
      switch (Q) {
        case 0:
          C[I++] = t[E >> 2], s = (E & 3) << 4, Q = 1;
          break;
        case 1:
          C[I++] = t[s | E >> 4], s = (E & 15) << 2, Q = 2;
          break;
        case 2:
          C[I++] = t[s | E >> 6], C[I++] = t[E & 63], Q = 0;
          break;
      }
      I > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, C)), I = 0);
    }
    return Q && (C[I++] = t[s], C[I++] = 61, Q === 1 && (C[I++] = 61)), r ? (I && r.push(String.fromCharCode.apply(String, C.slice(0, I))), r.join("")) : String.fromCharCode.apply(String, C.slice(0, I));
  };
  var n = "invalid encoding";
  o.decode = function(g, a, x) {
    for (var r = x, C = 0, I, Q = 0; Q < g.length; ) {
      var s = g.charCodeAt(Q++);
      if (s === 61 && C > 1)
        break;
      if ((s = e[s]) === void 0)
        throw Error(n);
      switch (C) {
        case 0:
          I = s, C = 1;
          break;
        case 1:
          a[x++] = I << 2 | (s & 48) >> 4, I = s, C = 2;
          break;
        case 2:
          a[x++] = (I & 15) << 4 | (s & 60) >> 2, I = s, C = 3;
          break;
        case 3:
          a[x++] = (I & 3) << 6 | s, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(n);
    return x - r;
  }, o.test = function(g) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(g);
  };
})(Xr);
var KB = fi;
function fi() {
  this._listeners = {};
}
fi.prototype.on = function(i, o, t) {
  return (this._listeners[i] || (this._listeners[i] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
fi.prototype.off = function(i, o) {
  if (i === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[i] = [];
  else
    for (var t = this._listeners[i], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
fi.prototype.emit = function(i) {
  var o = this._listeners[i];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var PB = Ra(Ra);
function Ra(i) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function A(x, r, C) {
      o[0] = x, r[C] = t[0], r[C + 1] = t[1], r[C + 2] = t[2], r[C + 3] = t[3];
    }
    function n(x, r, C) {
      o[0] = x, r[C] = t[3], r[C + 1] = t[2], r[C + 2] = t[1], r[C + 3] = t[0];
    }
    i.writeFloatLE = e ? A : n, i.writeFloatBE = e ? n : A;
    function g(x, r) {
      return t[0] = x[r], t[1] = x[r + 1], t[2] = x[r + 2], t[3] = x[r + 3], o[0];
    }
    function a(x, r) {
      return t[3] = x[r], t[2] = x[r + 1], t[1] = x[r + 2], t[0] = x[r + 3], o[0];
    }
    i.readFloatLE = e ? g : a, i.readFloatBE = e ? a : g;
  }() : function() {
    function o(e, A, n, g) {
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
        var x = Math.floor(Math.log(A) / Math.LN2), r = Math.round(A * Math.pow(2, -x) * 8388608) & 8388607;
        e((a << 31 | x + 127 << 23 | r) >>> 0, n, g);
      }
    }
    i.writeFloatLE = o.bind(null, Ma), i.writeFloatBE = o.bind(null, Wa);
    function t(e, A, n) {
      var g = e(A, n), a = (g >> 31) * 2 + 1, x = g >>> 23 & 255, r = g & 8388607;
      return x === 255 ? r ? NaN : a * (1 / 0) : x === 0 ? a * 1401298464324817e-60 * r : a * Math.pow(2, x - 150) * (r + 8388608);
    }
    i.readFloatLE = t.bind(null, va), i.readFloatBE = t.bind(null, La);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function A(x, r, C) {
      o[0] = x, r[C] = t[0], r[C + 1] = t[1], r[C + 2] = t[2], r[C + 3] = t[3], r[C + 4] = t[4], r[C + 5] = t[5], r[C + 6] = t[6], r[C + 7] = t[7];
    }
    function n(x, r, C) {
      o[0] = x, r[C] = t[7], r[C + 1] = t[6], r[C + 2] = t[5], r[C + 3] = t[4], r[C + 4] = t[3], r[C + 5] = t[2], r[C + 6] = t[1], r[C + 7] = t[0];
    }
    i.writeDoubleLE = e ? A : n, i.writeDoubleBE = e ? n : A;
    function g(x, r) {
      return t[0] = x[r], t[1] = x[r + 1], t[2] = x[r + 2], t[3] = x[r + 3], t[4] = x[r + 4], t[5] = x[r + 5], t[6] = x[r + 6], t[7] = x[r + 7], o[0];
    }
    function a(x, r) {
      return t[7] = x[r], t[6] = x[r + 1], t[5] = x[r + 2], t[4] = x[r + 3], t[3] = x[r + 4], t[2] = x[r + 5], t[1] = x[r + 6], t[0] = x[r + 7], o[0];
    }
    i.readDoubleLE = e ? g : a, i.readDoubleBE = e ? a : g;
  }() : function() {
    function o(e, A, n, g, a, x) {
      var r = g < 0 ? 1 : 0;
      if (r && (g = -g), g === 0)
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
        e(0, a, x + A), e((r << 31 | 2146435072) >>> 0, a, x + n);
      else {
        var C;
        if (g < 22250738585072014e-324)
          C = g / 5e-324, e(C >>> 0, a, x + A), e((r << 31 | C / 4294967296) >>> 0, a, x + n);
        else {
          var I = Math.floor(Math.log(g) / Math.LN2);
          I === 1024 && (I = 1023), C = g * Math.pow(2, -I), e(C * 4503599627370496 >>> 0, a, x + A), e((r << 31 | I + 1023 << 20 | C * 1048576 & 1048575) >>> 0, a, x + n);
        }
      }
    }
    i.writeDoubleLE = o.bind(null, Ma, 0, 4), i.writeDoubleBE = o.bind(null, Wa, 4, 0);
    function t(e, A, n, g, a) {
      var x = e(g, a + A), r = e(g, a + n), C = (r >> 31) * 2 + 1, I = r >>> 20 & 2047, Q = 4294967296 * (r & 1048575) + x;
      return I === 2047 ? Q ? NaN : C * (1 / 0) : I === 0 ? C * 5e-324 * Q : C * Math.pow(2, I - 1075) * (Q + 4503599627370496);
    }
    i.readDoubleLE = t.bind(null, va, 0, 4), i.readDoubleBE = t.bind(null, La, 4, 0);
  }(), i;
}
function Ma(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
function Wa(i, o, t) {
  o[t] = i >>> 24, o[t + 1] = i >>> 16 & 255, o[t + 2] = i >>> 8 & 255, o[t + 3] = i & 255;
}
function va(i, o) {
  return (i[o] | i[o + 1] << 8 | i[o + 2] << 16 | i[o + 3] << 24) >>> 0;
}
function La(i, o) {
  return (i[o] << 24 | i[o + 1] << 16 | i[o + 2] << 8 | i[o + 3]) >>> 0;
}
function Ua(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var TB = qB;
function qB(i) {
  try {
    if (typeof Ua != "function")
      return null;
    var o = Ua(i);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var $r = {};
(function(i) {
  var o = i;
  o.length = function(t) {
    for (var e = 0, A = 0, n = 0; n < t.length; ++n)
      A = t.charCodeAt(n), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 ? (++n, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, A) {
    var n = A - e;
    if (n < 1)
      return "";
    for (var g = null, a = [], x = 0, r; e < A; )
      r = t[e++], r < 128 ? a[x++] = r : r > 191 && r < 224 ? a[x++] = (r & 31) << 6 | t[e++] & 63 : r > 239 && r < 365 ? (r = ((r & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[x++] = 55296 + (r >> 10), a[x++] = 56320 + (r & 1023)) : a[x++] = (r & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, x > 8191 && ((g || (g = [])).push(String.fromCharCode.apply(String, a)), x = 0);
    return g ? (x && g.push(String.fromCharCode.apply(String, a.slice(0, x))), g.join("")) : String.fromCharCode.apply(String, a.slice(0, x));
  }, o.write = function(t, e, A) {
    for (var n = A, g, a, x = 0; x < t.length; ++x)
      g = t.charCodeAt(x), g < 128 ? e[A++] = g : g < 2048 ? (e[A++] = g >> 6 | 192, e[A++] = g & 63 | 128) : (g & 64512) === 55296 && ((a = t.charCodeAt(x + 1)) & 64512) === 56320 ? (g = 65536 + ((g & 1023) << 10) + (a & 1023), ++x, e[A++] = g >> 18 | 240, e[A++] = g >> 12 & 63 | 128, e[A++] = g >> 6 & 63 | 128, e[A++] = g & 63 | 128) : (e[A++] = g >> 12 | 224, e[A++] = g >> 6 & 63 | 128, e[A++] = g & 63 | 128);
    return A - n;
  };
})($r);
var jB = ZB;
function ZB(i, o, t) {
  var e = t || 8192, A = e >>> 1, n = null, g = e;
  return function(a) {
    if (a < 1 || a > A)
      return i(a);
    g + a > e && (n = i(e), g = 0);
    var x = o.call(n, g, g += a);
    return g & 7 && (g = (g | 7) + 1), x;
  };
}
var Ki, Ja;
function _B() {
  if (Ja)
    return Ki;
  Ja = 1, Ki = o;
  var i = Qt();
  function o(n, g) {
    this.lo = n >>> 0, this.hi = g >>> 0;
  }
  var t = o.zero = new o(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = o.zeroHash = "\0\0\0\0\0\0\0\0";
  o.fromNumber = function(n) {
    if (n === 0)
      return t;
    var g = n < 0;
    g && (n = -n);
    var a = n >>> 0, x = (n - a) / 4294967296 >>> 0;
    return g && (x = ~x >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++x > 4294967295 && (x = 0))), new o(a, x);
  }, o.from = function(n) {
    if (typeof n == "number")
      return o.fromNumber(n);
    if (i.isString(n))
      if (i.Long)
        n = i.Long.fromString(n);
      else
        return o.fromNumber(parseInt(n, 10));
    return n.low || n.high ? new o(n.low >>> 0, n.high >>> 0) : t;
  }, o.prototype.toNumber = function(n) {
    if (!n && this.hi >>> 31) {
      var g = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return g || (a = a + 1 >>> 0), -(g + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(n) {
    return i.Long ? new i.Long(this.lo | 0, this.hi | 0, !!n) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!n };
  };
  var A = String.prototype.charCodeAt;
  return o.fromHash = function(n) {
    return n === e ? t : new o(
      (A.call(n, 0) | A.call(n, 1) << 8 | A.call(n, 2) << 16 | A.call(n, 3) << 24) >>> 0,
      (A.call(n, 4) | A.call(n, 5) << 8 | A.call(n, 6) << 16 | A.call(n, 7) << 24) >>> 0
    );
  }, o.prototype.toHash = function() {
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
  }, o.prototype.zzEncode = function() {
    var n = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ n) >>> 0, this.lo = (this.lo << 1 ^ n) >>> 0, this;
  }, o.prototype.zzDecode = function() {
    var n = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ n) >>> 0, this.hi = (this.hi >>> 1 ^ n) >>> 0, this;
  }, o.prototype.length = function() {
    var n = this.lo, g = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? g === 0 ? n < 16384 ? n < 128 ? 1 : 2 : n < 2097152 ? 3 : 4 : g < 16384 ? g < 128 ? 5 : 6 : g < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, Ki;
}
var Ya;
function Qt() {
  return Ya || (Ya = 1, function(i) {
    var o = i;
    o.asPromise = OB, o.base64 = Xr, o.EventEmitter = KB, o.float = PB, o.inquire = TB, o.utf8 = $r, o.pool = jB, o.LongBits = _B(), o.isNode = !!(typeof je < "u" && je && je.process && je.process.versions && je.process.versions.node), o.global = o.isNode && je || typeof window < "u" && window || typeof self < "u" && self || je, o.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), o.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), o.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, o.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, o.isObject = function(A) {
      return A && typeof A == "object";
    }, o.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    o.isSet = function(A, n) {
      var g = A[n];
      return g != null && A.hasOwnProperty(n) ? typeof g != "object" || (Array.isArray(g) ? g.length : Object.keys(g).length) > 0 : !1;
    }, o.Buffer = function() {
      try {
        var A = o.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(A) {
      return typeof A == "number" ? o.Buffer ? o._Buffer_allocUnsafe(A) : new o.Array(A) : o.Buffer ? o._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, o.Array = typeof Uint8Array < "u" ? Uint8Array : Array, o.Long = /* istanbul ignore next */
    o.global.dcodeIO && /* istanbul ignore next */
    o.global.dcodeIO.Long || /* istanbul ignore next */
    o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(A) {
      return A ? o.LongBits.from(A).toHash() : o.LongBits.zeroHash;
    }, o.longFromHash = function(A, n) {
      var g = o.LongBits.fromHash(A);
      return o.Long ? o.Long.fromBits(g.lo, g.hi, n) : g.toNumber(!!n);
    };
    function t(A, n, g) {
      for (var a = Object.keys(n), x = 0; x < a.length; ++x)
        (A[a[x]] === void 0 || !g) && (A[a[x]] = n[a[x]]);
      return A;
    }
    o.merge = t, o.lcFirst = function(A) {
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
    o.newError = e, o.ProtocolError = e("ProtocolError"), o.oneOfGetter = function(A) {
      for (var n = {}, g = 0; g < A.length; ++g)
        n[A[g]] = 1;
      return function() {
        for (var a = Object.keys(this), x = a.length - 1; x > -1; --x)
          if (n[a[x]] === 1 && this[a[x]] !== void 0 && this[a[x]] !== null)
            return a[x];
      };
    }, o.oneOfSetter = function(A) {
      return function(n) {
        for (var g = 0; g < A.length; ++g)
          A[g] !== n && delete this[A[g]];
      };
    }, o.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, o._configure = function() {
      var A = o.Buffer;
      if (!A) {
        o._Buffer_from = o._Buffer_allocUnsafe = null;
        return;
      }
      o._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(n, g) {
        return new A(n, g);
      }, o._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(n) {
        return new A(n);
      };
    };
  }(Fa)), Fa;
}
var AI = T, ae = Qt(), Hn, pi = ae.LongBits, Oa = ae.base64, Ha = ae.utf8;
function H0(i, o, t) {
  this.fn = i, this.len = o, this.next = void 0, this.val = t;
}
function pg() {
}
function VB(i) {
  this.head = i.head, this.tail = i.tail, this.len = i.len, this.next = i.states;
}
function T() {
  this.len = 0, this.head = new H0(pg, 0, 0), this.tail = this.head, this.states = null;
}
var eI = function() {
  return ae.Buffer ? function() {
    return (T.create = function() {
      return new Hn();
    })();
  } : function() {
    return new T();
  };
};
T.create = eI();
T.alloc = function(i) {
  return new ae.Array(i);
};
ae.Array !== Array && (T.alloc = ae.pool(T.alloc, ae.Array.prototype.subarray));
T.prototype._push = function(i, o, t) {
  return this.tail = this.tail.next = new H0(i, o, t), this.len += o, this;
};
function yg(i, o, t) {
  o[t] = i & 255;
}
function zB(i, o, t) {
  for (; i > 127; )
    o[t++] = i & 127 | 128, i >>>= 7;
  o[t] = i;
}
function Dg(i, o) {
  this.len = i, this.next = void 0, this.val = o;
}
Dg.prototype = Object.create(H0.prototype);
Dg.prototype.fn = zB;
T.prototype.uint32 = function(i) {
  return this.len += (this.tail = this.tail.next = new Dg(
    (i = i >>> 0) < 128 ? 1 : i < 16384 ? 2 : i < 2097152 ? 3 : i < 268435456 ? 4 : 5,
    i
  )).len, this;
};
T.prototype.int32 = function(i) {
  return i < 0 ? this._push(mg, 10, pi.fromNumber(i)) : this.uint32(i);
};
T.prototype.sint32 = function(i) {
  return this.uint32((i << 1 ^ i >> 31) >>> 0);
};
function mg(i, o, t) {
  for (; i.hi; )
    o[t++] = i.lo & 127 | 128, i.lo = (i.lo >>> 7 | i.hi << 25) >>> 0, i.hi >>>= 7;
  for (; i.lo > 127; )
    o[t++] = i.lo & 127 | 128, i.lo = i.lo >>> 7;
  o[t++] = i.lo;
}
T.prototype.uint64 = function(i) {
  var o = pi.from(i);
  return this._push(mg, o.length(), o);
};
T.prototype.int64 = T.prototype.uint64;
T.prototype.sint64 = function(i) {
  var o = pi.from(i).zzEncode();
  return this._push(mg, o.length(), o);
};
T.prototype.bool = function(i) {
  return this._push(yg, 1, i ? 1 : 0);
};
function Kn(i, o, t) {
  o[t] = i & 255, o[t + 1] = i >>> 8 & 255, o[t + 2] = i >>> 16 & 255, o[t + 3] = i >>> 24;
}
T.prototype.fixed32 = function(i) {
  return this._push(Kn, 4, i >>> 0);
};
T.prototype.sfixed32 = T.prototype.fixed32;
T.prototype.fixed64 = function(i) {
  var o = pi.from(i);
  return this._push(Kn, 4, o.lo)._push(Kn, 4, o.hi);
};
T.prototype.sfixed64 = T.prototype.fixed64;
T.prototype.float = function(i) {
  return this._push(ae.float.writeFloatLE, 4, i);
};
T.prototype.double = function(i) {
  return this._push(ae.float.writeDoubleLE, 8, i);
};
var XB = ae.Array.prototype.set ? function(i, o, t) {
  o.set(i, t);
} : function(i, o, t) {
  for (var e = 0; e < i.length; ++e)
    o[t + e] = i[e];
};
T.prototype.bytes = function(i) {
  var o = i.length >>> 0;
  if (!o)
    return this._push(yg, 1, 0);
  if (ae.isString(i)) {
    var t = T.alloc(o = Oa.length(i));
    Oa.decode(i, t, 0), i = t;
  }
  return this.uint32(o)._push(XB, o, i);
};
T.prototype.string = function(i) {
  var o = Ha.length(i);
  return o ? this.uint32(o)._push(Ha.write, o, i) : this._push(yg, 1, 0);
};
T.prototype.fork = function() {
  return this.states = new VB(this), this.head = this.tail = new H0(pg, 0, 0), this.len = 0, this;
};
T.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new H0(pg, 0, 0), this.len = 0), this;
};
T.prototype.ldelim = function() {
  var i = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = i.next, this.tail = o, this.len += t), this;
};
T.prototype.finish = function() {
  for (var i = this.head.next, o = this.constructor.alloc(this.len), t = 0; i; )
    i.fn(i.val, o, t), t += i.len, i = i.next;
  return o;
};
T._configure = function(i) {
  Hn = i, T.create = eI(), Hn._configure();
};
var $B = fe, tI = AI;
(fe.prototype = Object.create(tI.prototype)).constructor = fe;
var Ye = Qt();
function fe() {
  tI.call(this);
}
fe._configure = function() {
  fe.alloc = Ye._Buffer_allocUnsafe, fe.writeBytesBuffer = Ye.Buffer && Ye.Buffer.prototype instanceof Uint8Array && Ye.Buffer.prototype.set.name === "set" ? function(i, o, t) {
    o.set(i, t);
  } : function(i, o, t) {
    if (i.copy)
      i.copy(o, t, 0, i.length);
    else
      for (var e = 0; e < i.length; )
        o[t++] = i[e++];
  };
};
fe.prototype.bytes = function(i) {
  Ye.isString(i) && (i = Ye._Buffer_from(i, "base64"));
  var o = i.length >>> 0;
  return this.uint32(o), o && this._push(fe.writeBytesBuffer, o, i), this;
};
function AQ(i, o, t) {
  i.length < 40 ? Ye.utf8.write(i, o, t) : o.utf8Write ? o.utf8Write(i, t) : o.write(i, t);
}
fe.prototype.string = function(i) {
  var o = Ye.Buffer.byteLength(i);
  return this.uint32(o), o && this._push(AQ, o, i), this;
};
fe._configure();
var oI = gA, pe = Qt(), Pn, iI = pe.LongBits, eQ = pe.utf8;
function Be(i, o) {
  return RangeError("index out of range: " + i.pos + " + " + (o || 1) + " > " + i.len);
}
function gA(i) {
  this.buf = i, this.pos = 0, this.len = i.length;
}
var Ka = typeof Uint8Array < "u" ? function(i) {
  if (i instanceof Uint8Array || Array.isArray(i))
    return new gA(i);
  throw Error("illegal buffer");
} : function(i) {
  if (Array.isArray(i))
    return new gA(i);
  throw Error("illegal buffer");
}, nI = function() {
  return pe.Buffer ? function(i) {
    return (gA.create = function(o) {
      return pe.Buffer.isBuffer(o) ? new Pn(o) : Ka(o);
    })(i);
  } : Ka;
};
gA.create = nI();
gA.prototype._slice = pe.Array.prototype.subarray || /* istanbul ignore next */
pe.Array.prototype.slice;
gA.prototype.uint32 = /* @__PURE__ */ function() {
  var i = 4294967295;
  return function() {
    if (i = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (i = (i | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (i = (i | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return i;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, Be(this, 10);
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
function Pi() {
  var i = new iI(0, 0), o = 0;
  if (this.len - this.pos > 4) {
    for (; o < 4; ++o)
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    if (i.lo = (i.lo | (this.buf[this.pos] & 127) << 28) >>> 0, i.hi = (i.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return i;
    o = 0;
  } else {
    for (; o < 3; ++o) {
      if (this.pos >= this.len)
        throw Be(this);
      if (i.lo = (i.lo | (this.buf[this.pos] & 127) << o * 7) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
    return i.lo = (i.lo | (this.buf[this.pos++] & 127) << o * 7) >>> 0, i;
  }
  if (this.len - this.pos > 4) {
    for (; o < 5; ++o)
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
  } else
    for (; o < 5; ++o) {
      if (this.pos >= this.len)
        throw Be(this);
      if (i.hi = (i.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return i;
    }
  throw Error("invalid varint encoding");
}
gA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function zo(i, o) {
  return (i[o - 4] | i[o - 3] << 8 | i[o - 2] << 16 | i[o - 1] << 24) >>> 0;
}
gA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Be(this, 4);
  return zo(this.buf, this.pos += 4);
};
gA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw Be(this, 4);
  return zo(this.buf, this.pos += 4) | 0;
};
function Pa() {
  if (this.pos + 8 > this.len)
    throw Be(this, 8);
  return new iI(zo(this.buf, this.pos += 4), zo(this.buf, this.pos += 4));
}
gA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw Be(this, 4);
  var i = pe.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, i;
};
gA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw Be(this, 4);
  var i = pe.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, i;
};
gA.prototype.bytes = function() {
  var i = this.uint32(), o = this.pos, t = this.pos + i;
  if (t > this.len)
    throw Be(this, i);
  return this.pos += i, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
gA.prototype.string = function() {
  var i = this.bytes();
  return eQ.read(i, 0, i.length);
};
gA.prototype.skip = function(i) {
  if (typeof i == "number") {
    if (this.pos + i > this.len)
      throw Be(this, i);
    this.pos += i;
  } else
    do
      if (this.pos >= this.len)
        throw Be(this);
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
  Pn = i, gA.create = nI(), Pn._configure();
  var o = pe.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  pe.merge(gA.prototype, {
    int64: function() {
      return Pi.call(this)[o](!1);
    },
    uint64: function() {
      return Pi.call(this)[o](!0);
    },
    sint64: function() {
      return Pi.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Pa.call(this)[o](!0);
    },
    sfixed64: function() {
      return Pa.call(this)[o](!1);
    }
  });
};
var tQ = Ct, gI = oI;
(Ct.prototype = Object.create(gI.prototype)).constructor = Ct;
var Ta = Qt();
function Ct(i) {
  gI.call(this, i);
}
Ct._configure = function() {
  Ta.Buffer && (Ct.prototype._slice = Ta.Buffer.prototype.slice);
};
Ct.prototype.string = function() {
  var i = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + i, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + i, this.len));
};
Ct._configure();
var aI = {}, oQ = f0, wg = Qt();
(f0.prototype = Object.create(wg.EventEmitter.prototype)).constructor = f0;
function f0(i, o, t) {
  if (typeof i != "function")
    throw TypeError("rpcImpl must be a function");
  wg.EventEmitter.call(this), this.rpcImpl = i, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
f0.prototype.rpcCall = function i(o, t, e, A, n) {
  if (!A)
    throw TypeError("request must be specified");
  var g = this;
  if (!n)
    return wg.asPromise(i, g, o, t, e, A);
  if (!g.rpcImpl) {
    setTimeout(function() {
      n(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return g.rpcImpl(
      o,
      t[g.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(a, x) {
        if (a)
          return g.emit("error", a, o), n(a);
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
          } catch (r) {
            return g.emit("error", r, o), n(r);
          }
        return g.emit("data", x, o), n(null, x);
      }
    );
  } catch (a) {
    g.emit("error", a, o), setTimeout(function() {
      n(a);
    }, 0);
    return;
  }
};
f0.prototype.end = function(i) {
  return this.rpcImpl && (i || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(i) {
  var o = i;
  o.Service = oQ;
})(aI);
var iQ = {};
(function(i) {
  var o = i;
  o.build = "minimal", o.Writer = AI, o.BufferWriter = $B, o.Reader = oI, o.BufferReader = tQ, o.util = Qt(), o.rpc = aI, o.roots = iQ, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(zr);
var O = zr;
const f = O.Reader, P = O.Writer, l = O.util, B = O.roots.default || (O.roots.default = {}), ct = B.dot = (() => {
  const i = {};
  return i.Content = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.token = l.newBuffer([]), o.prototype.iv = l.newBuffer([]), o.prototype.schemaVersion = 0, o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = P.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, e.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, e.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = l.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = l.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  }(), i.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.images = l.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = P.create()), e.images != null && e.images.length)
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
        e instanceof f || (e = f.create(e));
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
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
    }(), o.Metadata = function() {
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
        return n || (n = P.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.AndroidMetadata = function() {
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
        if (n || (n = P.create()), A.supportedAbis != null && A.supportedAbis.length)
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
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.AndroidMetadata(), x, r;
        for (; A.pos < g; ) {
          let C = A.uint32();
          switch (C >>> 3) {
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
              let I = A.uint32() + A.pos;
              for (x = "", r = null; A.pos < I; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    r = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[x] = r;
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
              A.skipType(C & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), o.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = l.newBuffer([]), t.prototype.uPlane = l.newBuffer([]), t.prototype.vPlane = l.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = l.newBuffer(n.yPlane))), A.bytes === String ? n.uPlane = "" : (n.uPlane = [], A.bytes !== Array && (n.uPlane = l.newBuffer(n.uPlane))), A.bytes === String ? n.vPlane = "" : (n.vPlane = [], A.bytes !== Array && (n.vPlane = l.newBuffer(n.vPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? l.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (n.uPlane = A.bytes === String ? l.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (n.vPlane = A.bytes === String ? l.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), o.IosMetadata = function() {
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
        if (n || (n = P.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && n.uint32(
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
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new B.dot.v4.IosMetadata(), x, r;
        for (; A.pos < g; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === l.emptyObject && (a.architectureInfo = {});
              let I = A.uint32() + A.pos;
              for (x = "", r = !1; A.pos < I; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    r = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.architectureInfo[x] = r;
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
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (C & 7) === 2) {
                let I = A.uint32() + A.pos;
                for (; A.pos < I; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return a;
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
    }(), o.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), o.WebMetadata = function() {
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
        if (n || (n = P.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, n.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
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
    }(), o.MediaTrackSettings = function() {
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
        return n || (n = P.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && n.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
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
        let n = {};
        return A.defaults && (n.width = 0, n.height = 0), e.width != null && e.hasOwnProperty("width") && (n.width = e.width), e.height != null && e.hasOwnProperty("height") && (n.height = e.height), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), o.CameraProperties = function() {
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
        return n || (n = P.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        let n = {};
        return A.defaults && (n.brightness = 0, n.sharpness = 0, n.hotspots = 0, n.confidence = 0, n.faceSize = 0, n.faceCenter = null, n.smallestEdge = 0, n.bottomLeft = null, n.bottomRight = null, n.topLeft = null, n.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (n.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (n.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (n.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (n.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (n.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (n.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (n.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (n.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (n.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (n.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (n.topRight = B.dot.v4.Point.toObject(e.topRight, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), o.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
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
        let n = {};
        return A.defaults && (n.x = 0, n.y = 0), e.x != null && e.hasOwnProperty("x") && (n.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (n.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), o.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
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
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), o.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
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
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
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
        return n || (n = P.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, n.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
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
        let n = {};
        return A.defaults && (n.ldsMasterFile = null, n.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, n.authenticationStatus = null, n.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (n.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (n.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (n.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), o.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
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
        let n = {};
        return A.defaults && (n.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (n.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), o.Lds1eMrtdApplication = function() {
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
        return n || (n = P.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, n.uint32(
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.Lds1ElementaryFile = function() {
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
        return n || (n = P.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
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
    }(), o.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), o.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
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
        let n = {};
        return A.defaults && (n.data = null, n.chip = null), e.data != null && e.hasOwnProperty("data") && (n.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (n.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), o.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
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
    }(), o.ChipAuthenticationStatus = function() {
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
        return n || (n = P.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && n.uint32(
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
        A instanceof f || (A = f.create(A));
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
    }(), o.EyeGazeLivenessContent = function() {
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
        if (n || (n = P.create()), A.segments != null && A.segments.length)
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
        A instanceof f || (A = f.create(A));
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
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
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
    }(), o.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
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
        let n = {};
        return A.defaults && (n.corner = A.enums === String ? "TOP_LEFT" : 0, n.image = null), e.corner != null && e.hasOwnProperty("corner") && (n.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), o.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), o.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && B.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
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
        let n = {};
        return A.defaults && (n.neutralExpressionFaceImage = null, n.smileExpressionFaceImage = null, n.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (n.neutralExpressionFaceImage = B.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (n.smileExpressionFaceImage = B.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), o.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = P.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
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
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), o;
  }(), i.Image = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.bytes = l.newBuffer([]), o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = P.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, e.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = l.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, o;
  }(), i.ImageSize = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.width = 0, o.prototype.height = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = P.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !l.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !l.isInteger(t.height) ? "height: integer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, o;
  }(), i.Int32List = function() {
    function o(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.items = l.emptyArray, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      if (e || (e = P.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
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
    }, o.fromObject = function(t) {
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
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let n = 0; n < t.items.length; ++n)
          A.items[n] = t.items[n];
      }
      return A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, o;
  }(), i.Platform = function() {
    const o = {}, t = Object.create(o);
    return t[o[0] = "WEB"] = 0, t[o[1] = "ANDROID"] = 1, t[o[2] = "IOS"] = 2, t;
  }(), i.RectangleDouble = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.left = 0, o.prototype.top = 0, o.prototype.right = 0, o.prototype.bottom = 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = P.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, o;
  }(), i.DigestWithTimestamp = function() {
    function o(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return o.prototype.digest = l.newBuffer([]), o.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, o.create = function(t) {
      return new o(t);
    }, o.encode = function(t, e) {
      return e || (e = P.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
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
    }, o.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, e.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = l.newBuffer(A.digest))), l.Long) {
          let n = new l.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), i;
})();
(function(i, o) {
  function t(a, x, r, C, I) {
    return sA(C - -936, a);
  }
  function e(a, x, r, C, I) {
    return sA(r - 888, C);
  }
  const A = i();
  function n(a, x, r, C, I) {
    return sA(a - -210, r);
  }
  function g(a, x, r, C, I) {
    return sA(a - 187, x);
  }
  for (; ; )
    try {
      if (parseInt(g(825, "A3*2", 893, 844, 866)) / 1 + parseInt(n(350, 286, "g8#r", 345, 310)) / 2 + parseInt(g(772, "^k$Z", 868, 757, 751)) / 3 + parseInt(t("^k$Z", -442, -246, -353, -296)) / 4 + parseInt(e(1423, 1307, 1370, "]8IQ", 1297)) / 5 + -parseInt(g(817, "]bQg", 844, 703, 892)) / 6 * (parseInt(n(472, 366, "&8PY", 435, 464)) / 7) + -parseInt(g(866, "0xg[", 831, 793, 931)) / 8 === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Xo, 260363);
function sA(i, o) {
  const t = Xo();
  return sA = function(e, A) {
    e = e - (3250 + -2244 * 1 + -31 * 17);
    let n = t[e];
    if (sA.TEuByV === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      sA.GPgvxY = C, i = arguments, sA.TEuByV = !0;
    }
    const a = t[2539 * -1 + -9290 + 11829], x = e + a, r = i[x];
    return r ? n = r : (sA.bufBrS === void 0 && (sA.bufBrS = !0), n = sA.GPgvxY(n, A), i[x] = n), n;
  }, sA(i, o);
}
function Xo() {
  const i = ["W6bQW6ZdMeW", "WP3cQMafW7G", "WPrIrmkR", "W4WrpGVdQW", "WPCdoGi+", "W5Tul8o2FG", "W43dHuxdQcS", "W4hdJXWPgL0wuKRcNSo+W7O", "W6VdIxlcNY8", "q8kwWOneW6W", "WO3dISoomMu", "WQddGCkbEZW", "WQZcOCkngIm", "m8oUmNRdUW", "W5qdgmk8W6O", "W7ddOstcLhC", "WOdcVwFdTWFcJM8WWQTZW4Hg", "W7jXwmkvCW", "WOJcJmk0fvS", "jmoqmNRdLq", "n8kjW4nYW60", "B8kqW4T7W5C", "WOhdIgxcPaW", "W4XPWPdcT8ku", "j8kuW4VdLCoV", "WOVcRSo9W4lcLW", "WQCgamkUxW", "WO3dO8otF8kK", "o8kqW5xdScy", "sqjqW5PA", "W7dcRmofWQ7dOCorlmkMk8oNW43cQG", "kSk9WO9rW4G", "W7tcQ8oiWQ/dOmoslCkrc8o0W4pcIW", "WPvHqSkeW6a", "WPOnjMuu", "W6i9W7NdQ04", "pmoonIVdHW", "WQJcL2qoW5C", "W4zjW5RdUKq", "W5PPW4tdHCkV", "W51ZWOq5la", "WP7cOSkIyHm", "WPWOlfaH", "amkIW4xdSIe", "WP7cPKq7W4y", "W4BcOMHAxa", "WR9IjrXD", "tremW5WZ", "W7Pxn8oZuG", "ACovih4U", "tajLWQjK", "W5NdV8olCCoZ", "WPTOqSkIqa", "W7zepmkNwa", "AmkIW7HyW5m", "WRVcRLzszq", "W7bgW7FdRCoB", "W4RdP3ldQZK", "wLTAW60", "WO/dICoItmkg", "bmoknhZdHW", "pmouvw7dRW", "WPFcSh0ZW6u", "W4lcOmkTCH8", "W6VdUNpcOG", "CSk3W7XjW4W", "WONcQmkxWPNcQW", "fCoDW73dL8o0", "pCkPW5pdVdS", "W4zyWPmMW7i", "W6q4W6nYW68", "CSkeW4rQ", "WOu6W4qeWOu", "p8owW7VdSY8", "WPBdNSk1yHa", "W6JdKSkojCo/", "WQ3dICoiW4dcKG", "r8oOWR1jW40VWOhcJa", "F8kxW5b/W48", "W5pdUCkphCo8", "WRfXxCkX", "WPtcI3VdJsO", "tCoPtSoAwSkEALTpfCoe", "WQ/dQ8oSgea", "WP16WPFdL8kR", "W4WPWR7dNaTdqKldMfNcOG", "W51JA8o1kW", "WQqkdwKS", "WQ7cLmkBWRtcNG", "WQJcLfi+W4C", "iCoguZRdPq", "WQuad0CZ", "WQTwsSo7W5i", "W7SbWQ1uW6a", "iSo0uJRdJW", "W6FdKfhcRX0", "WPTVjJK8", "W5RcT8oSymky", "WORcLMK0WPG", "W4nnamkLrq", "W5TedCobuW", "DgPZW4f7", "W6zLmCkpW6G", "tZLwWQOd", "WQ9RySkAW6u", "WOxdSd3dGGq", "W4ZcUxNcP2i", "WO97EmkDFG", "W6NdSmoeoMq", "fSkLWRGuW58", "WQ7cVbJdQWddH2VdRSkFWONcVuu", "W4TvnSoejG", "zmodWPm3W5O", "WQ8wjgmH", "W6vemmo8wq", "W7rCW7FdLCkv", "WQ5YW6/cN3a", "W6LubCobtG", "WQGLn8kkEW", "WPxdISonWQRcMa", "WR/cJ8kzfJ8", "W4BdNCkyDSkA", "W4NcI8k5WPBcPa", "wCkGpH/cUtPRWRaBW7BcPSoKWQu", "nxlcKmkqdW", "W4/cPSopd0iTndjojwJdIG", "E2hdOWW4WQiKWOBdSutcOXNdUa", "pmogA2ZdNa", "qcvAW40m", "cHGdWRSzAfCpWPeYWOOa", "WRFcGL/dKHS", "W7vxtxBdKq", "WOOmW6GhWR0", "ptnqW78N", "hd/cNMW8", "W6faACopda", "WPyrWO7cRMW", "WRjdFCoPzG", "W4LIW7VcSf8", "WRXcvCoADq", "W5ZcT8k6fru", "W4tcL8kzFW", "WQOAyhRdGa", "W5Hxm8opsa", "i8kaW67dQmoA", "p8oTWQDlW7K", "W6HUaSoLzG", "nmkkW6/dLWC", "x3lcICk1dq", "W6uZW5ajW5m", "W5nmW5u+lG", "W6H3W5pdRSo3", "W4rlBLXm", "W68Zj8kIFq", "W6vVthxcSa", "W6LUcCoGFG", "W67dQ0pcVWW", "dMXVWR1C", "W4SWemo3WRvAvCoCWRPsAqVdHG", "W6tcVIFcJwS", "WOu5ECknoa", "oSoNgXdcJG", "WO/cPrK0W5u", "WPJcQMLqAa", "WO7cK2uiW5u", "W6TGsbdcRa", "W7WcW54wW5e", "k0RcPmkIpa", "a8ojqhtdOG", "W4NdMvNcUf0", "WPhdNCkSFW0", "WQ7dN0tcTxi", "kgDlW7TF", "nSk/W6JdTmo1", "p8owWOZdQr0", "WQmSi1ve", "W6mwW7ZdIKm", "zCkqwNVcI8kFWRlcNZ1QWRbFW5e", "pSoUWPixW6e", "CSozauu8", "f8kEW5VdI8oo", "W5RdV0NcVfO", "W7HfpCkwlW", "cCo4D2tdLa", "W7bwk1Wc", "W63dOh7cT1W", "WOX1zSkuW6K", "W4zPbCkzW4u", "WQhcTmo/WPdcTq", "W6JdN8oAC8kC", "W4junSo7Cq", "cGjCW4uH", "W5XoWOGKmW", "WPHWW7ZcP3S", "d8kqW5ldHa", "W48qnIddLW", "eCk0puGCW5RdRa4", "W65Bn8k0Fq", "W4/cHmktz3W", "WQpdSf/dKIO", "wmo/DNFdMa", "W69rW73cVwy", "W5xdPCo8FSky", "WRatW6OaW6u", "WQn3y8knW7e", "WQ9CW7RcVN0", "WQ/dKctcLtK", "W79CW7ddMSkF", "imkpW6JcLs4", "W7mup8kmuG", "nmkEWQnXWOS", "W5bmsmo3aW", "W4XQn8k6va", "WONcP8kVWP/cMq", "WQNdPeZdVdS", "W6vqW5BcQL4", "W5HVsHRcPa", "wxOeW4TY", "BmotWQCfW78", "W7ddV3/cH04", "WOBcQNHAgG", "WPpdKSoDe10", "hmkqtmkEdW", "W7hdGL/cIay", "W5Chnmo1W74", "p8ohAXBdNW", "bYRcQ8ojdW", "W7NcSmkbrdG", "W4VcU0SIeW"];
  return Xo = function() {
    return i;
  }, Xo();
}
function nQ() {
  const i = x(1306, 1326, 1223, 1220, "oX)M") + a(1188, "oX)M", 1119) + r(-351, -255, -296, -351, "&8PY") + r(-102, -223, -129, -230, "tWDI") + g(-324, -209, -355, "12f$", -298) + g(-464, -481, -312, "9A3*", -373) + r(-268, -211, -171, -68, "u$cj") + a(1158, "Gkr4", 1106) + r(-170, -159, -123, -46, "&8PY") + g(-158, -97, -260, "0xg[", -186) + x(1192, 1122, 1260, 1195, "T[NB") + r(-124, -174, -159, -90, "quvT") + g(-360, -334, -243, "O]gH", -280) + r(-208, -245, -294, -359, "g$e^") + A(607, 531, 535, "iWmp") + A(643, 624, 619, "JEJ6") + g(-285, -153, -206, "Yl[n", -251) + a(1039, "K]zC", 1126) + a(1152, "YHTq", 1214) + A(552, 582, 580, "]8IQ") + A(585, 486, 431, "py3X") + a(1133, "JEJ6", 1227) + r(-78, -38, -141, -217, "R^4f") + a(1140, "1FkG", 1141) + x(1115, 1086, 1126, 1108, "6tpC") + a(1114, "]bQg", 1168) + r(-179, -267, -183, -215, "JrDZ") + g(-434, -437, -388, "wf]l", -387) + x(1236, 1180, 1301, 1345, "tWDI") + r(-122, -209, -116, -38, "R^4f") + a(1205, "ciu7", 1276) + x(1235, 1176, 1275, 1264, "HlbE") + r(-12, -106, -74, -132, "O]gH") + g(-367, -413, -323, "A3*2", -356) + x(1277, 1343, 1214, 1195, "wf]l") + x(1269, 1166, 1326, 1217, "T[NB") + r(-26, -43, -86, -200, "49JL") + g(-72, -216, -138, "iWmp", -185) + g(-279, -284, -448, "12f$", -350) + r(-341, -320, -247, -288, "tWDI") + r(-296, -208, -298, -191, "Z^S^") + g(-224, -265, -149, "49JL", -204) + x(1249, 1233, 1218, 1187, "py3X") + x(1138, 1127, 1187, 1206, "YHTq") + r(-206, -90, -172, -241, "n]Gz") + A(741, 681, 771, "*y]K") + r(-243, -60, -161, -210, "JrDZ") + A(492, 597, 679, "Z^S^") + A(423, 525, 499, "A3*2") + x(1206, 1148, 1170, 1281, "LCkp") + a(1262, "Z^S^", 1262) + A(634, 604, 591, "g8#r") + g(-208, -112, -227, "HlbE", -169) + A(522, 591, 606, "p7sn") + a(1189, "T[NB", 1167) + A(707, 594, 517, "g8#r") + a(1036, "f]PQ", 1127) + A(569, 541, 529, "R^4f") + A(548, 603, 531, "quvT") + g(-245, -339, -244, "12f$", -335) + r(-101, -74, -81, -76, "Z^S^") + x(1284, 1192, 1397, 1308, "12f$") + a(1155, "9A3*", 1148) + A(605, 584, 590, "9A3*") + A(649, 649, 752, "Z^S^") + x(1301, 1352, 1390, 1219, "YHTq") + x(1316, 1387, 1336, 1278, "n]Gz") + x(1223, 1192, 1308, 1309, "wf]l") + A(616, 610, 698, "oX)M") + g(-316, -403, -478, "G1PO", -369) + a(1180, "u$cj", 1116) + a(1213, "YHTq", 1173) + r(-108, -190, -190, -278, "p7sn") + r(-298, -227, -272, -167, "oKd[") + g(-207, -277, -328, "Z^S^", -221) + A(440, 524, 515, "Gkr4") + a(1292, "Z^S^", 1265) + x(1263, 1242, 1237, 1210, "K]zC") + x(1123, 1086, 1230, 1077, "G1PO") + x(1141, 1252, 1165, 1157, "SlZz") + a(1335, "99W]", 1272) + x(1216, 1136, 1174, 1268, "wf]l") + a(1285, "]bQg", 1257) + A(590, 580, 509, "]bQg") + a(1085, "&8PY", 1136) + A(523, 621, 687, "*y]K") + x(1134, 1100, 1210, 1103, "p7sn") + r(-263, -298, -285, -257, "oX)M") + A(542, 651, 553, "$)nA") + A(483, 535, 472, "49JL") + g(-162, -131, -222, "JrDZ", -246) + a(1303, "9A3*", 1284) + g(-273, -396, -346, "f]PQ", -375) + A(578, 577, 647, "f]PQ") + r(-264, -157, -229, -222, "$)nA") + g(-319, -145, -362, "wf]l", -258) + a(1211, "f]PQ", 1221) + A(770, 680, 687, "6tpC") + A(441, 555, 617, "tWDI") + A(699, 598, 534, "^DLi") + A(656, 696, 629, "f]PQ") + r(-274, -225, -215, -316, "]bQg") + a(1161, "K]zC", 1263) + A(675, 560, 506, "JrDZ") + A(621, 646, 660, "LCkp") + g(-339, -390, -381, "xJVI", -340) + r(-69, -50, -117, -154, "n]Gz") + A(562, 536, 500, "6tpC") + r(-338, -293, -264, -203, "LCkp") + A(578, 592, 661, "f]PQ") + A(614, 655, 751, "oKd[") + g(-166, -249, -138, "!DYT", -168) + r(-195, -151, -94, -199, "12f$") + a(1122, "u$cj", 1101) + r(-112, -242, -227, -238, "99W]") + a(1201, "u$ff", 1260) + x(1175, 1276, 1237, 1231, "oX)M") + x(1215, 1313, 1282, 1141, "T[NB") + a(1210, "Z^S^", 1259) + A(710, 682, 740, "SlZz") + a(1087, "wf]l", 1149) + a(1276, "g$e^", 1163) + g(-378, -320, -363, "OFKP", -308) + x(1297, 1215, 1401, 1387, "xJVI") + a(1064, "G1PO", 1172) + x(1327, 1374, 1263, 1433, "99W]") + A(600, 636, 678, "p7sn") + r(-398, -331, -297, -249, "tWDI") + a(1108, "R^4f", 1166) + g(-303, -310, -151, "^k$Z", -244) + A(642, 600, 523, "LCkp") + g(-436, -402, -337, "*y]K", -346) + g(-235, -358, -391, "K]zC", -297) + A(384, 489, 542, "tWDI") + A(572, 515, 593, "M#UG") + A(787, 703, 771, "6tpC") + r(-180, -180, -177, -71, "ciu7") + a(1302, "wf]l", 1237) + g(-347, -381, -482, "SlZz", -377) + x(1170, 1117, 1106, 1224, "g8#r") + g(-344, -284, -348, "O]gH", -357) + A(645, 645, 623, "al&c") + g(-305, -190, -227, "K]zC", -281) + x(1273, 1183, 1386, 1383, "T[NB") + A(583, 575, 525, "xJVI") + A(503, 480, 376, "xJVI") + x(1324, 1273, 1297, 1305, "]bQg") + r(-164, -116, -156, -191, "f]PQ") + a(1238, "49JL", 1186) + g(-333, -475, -392, "^DLi", -370) + g(-246, -239, -272, "u$ff", -331) + x(1238, 1138, 1255, 1234, "LCkp") + a(1316, "^k$Z", 1267) + r(-328, -323, -226, -211, "5u@p") + A(452, 533, 540, "YHTq") + r(-105, -302, -195, -217, "SlZz") + g(-260, -232, -230, "Z^S^", -167) + A(519, 481, 552, "T[NB") + r(-397, -210, -289, -183, "wf]l") + r(-274, -365, -286, -329, "99W]") + x(1282, 1343, 1374, 1312, "ciu7") + r(-176, -287, -234, -204, "oKd[") + a(1171, "OFKP", 1268) + A(403, 510, 519, "Z^S^") + x(1271, 1163, 1325, 1181, "]8IQ") + A(704, 688, 583, "Z^S^") + a(1220, "u$cj", 1131) + A(514, 522, 456, "LCkp") + x(1133, 1119, 1051, 1066, "oX)M") + g(-312, -292, -420, "oKd[", -326) + g(-387, -374, -351, "tWDI", -312) + r(-186, -78, -164, -90, "oX)M") + x(1183, 1211, 1239, 1296, "al&c") + A(549, 662, 740, "p7sn") + a(1142, "oKd[", 1104) + r(-185, -267, -221, -247, "M#UG") + g(-266, -342, -198, "G1PO", -253) + x(1125, 1122, 1143, 1101, "p7sn") + a(1251, "$)nA", 1162) + a(1370, "py3X", 1297) + x(1128, 1064, 1237, 1021, "]bQg") + x(1260, 1316, 1366, 1271, "12f$") + a(1201, "Gkr4", 1252) + r(-199, -307, -283, -259, "JrDZ") + x(1184, 1290, 1145, 1252, "Z^S^") + x(1196, 1261, 1140, 1123, "n]Gz") + x(1225, 1336, 1129, 1301, "al&c") + r(-104, -192, -103, -80, "LCkp") + r(-172, -236, -133, -32, "al&c") + r(-309, -275, -290, -251, "g8#r") + x(1189, 1153, 1135, 1227, "R^4f") + x(1121, 1063, 1029, 1236, "oKd[") + g(-268, -197, -161, "YHTq", -232) + g(-245, -94, -132, "OFKP", -180) + g(-271, -227, -159, "Yl[n", -227) + a(1202, "SlZz", 1198) + A(752, 691, 576, "M#UG") + a(1087, "$)nA", 1105) + g(-225, -256, -234, "]bQg", -339) + r(-113, -210, -225, -236, "g8#r"), o = window[r(-343, -292, -259, -340, "f]PQ")](i), t = window[x(1237, 1339, 1244, 1324, "&8PY")](o), e = mn(t);
  function A(C, I, Q, s, E) {
    return sA(I - -4, s);
  }
  const n = {};
  function g(C, I, Q, s, E) {
    return sA(E - -873, s);
  }
  n[a(1253, "]8IQ", 1150)] = Ir;
  function a(C, I, Q, s, E) {
    return sA(Q - 595, I);
  }
  function x(C, I, Q, s, E) {
    return sA(C - 626, E);
  }
  function r(C, I, Q, s, E) {
    return sA(Q - -777, E);
  }
  return n[x(1320, 1366, 1251, 1254, "5u@p")] = hs, window[r(-270, -265, -255, -325, "5u@p") + "o"][a(1267, "quvT", 1169) + "e"][x(1265, 1334, 1254, 1302, "iWmp") + r(-63, -122, -160, -49, "tWDI")](A(665, 629, 676, "n]Gz"), e, n, !0, [r(3, -159, -78, 30, "Z^S^") + "pt"]);
}
async function gQ(i) {
  const o = await nQ();
  function t(n, g, a, x, r) {
    return sA(r - -896, x);
  }
  const e = {};
  e[t(-351, -218, -207, "quvT", -272)] = Ir;
  function A(n, g, a, x, r) {
    return sA(a - -357, x);
  }
  return window[t(-209, -296, -163, "quvT", -265) + "o"][A(75, 68, 168, "49JL") + "e"][A(412, 235, 340, "G1PO") + "pt"](e, o, i);
}
function $o() {
  const i = ["tWFdKSkHx8o0cSkDWR0", "arVcI0RdHb/cKXOkW5PkaG", "WOFdLCk8WO3cOf5YWRO", "WQyDb8k8WQNcJ8o0WQJdLrLTpcG", "sZBdGmkaWQS7WQVcVa", "W6JdT8oRW5e/W7zXsMHhiSkc", "fqBdUvD7WPncsCoddCo/Crq", "W7JdPmkKzNORCmoywMqfxa", "w8ocWOZdLWpdIHSd", "WRjyWPpdR0KDoZNdHG", "sSo4W45DW64ynxVcKqpdU8klWOS", "fSoEca", "WRVdSdv5W7ZdRmo1rvdcMmowh8ol", "WQLCCevUW5xcQCoezI8koW", "eqpdUfD3WPuhBCoccmokyq", "fry7j8koW5/cMsnYW5VdMM4", "W5VcKe8zl8oxmIjEuCkYW47dNG", "W5W6kbldUq", "D2P3waCRl8o5", "W7ddQSkLz3mVlCoiCNS8wCoR", "dSkzWPSzc8ktW5TkWQ3cOmkEzG", "WR3dTdPYW7tdQ8kjrMVcP8orhW"];
  return $o = function() {
    return i;
  }, $o();
}
(function(i, o) {
  function t(x, r, C, I, Q) {
    return UA(r - 295, x);
  }
  function e(x, r, C, I, Q) {
    return UA(Q - -492, r);
  }
  function A(x, r, C, I, Q) {
    return UA(C - -488, r);
  }
  function n(x, r, C, I, Q) {
    return UA(x - -890, Q);
  }
  const g = i();
  function a(x, r, C, I, Q) {
    return UA(I - 285, Q);
  }
  for (; ; )
    try {
      if (parseInt(e(-93, "lA8B", -108, -99, -99)) / 1 + parseInt(a(679, 683, 682, 679, "@FLE")) / 2 + -parseInt(e(-111, "4KtZ", -111, -98, -106)) / 3 * (-parseInt(e(-90, "oJiX", -105, -105, -100)) / 4) + -parseInt(t("@oNu", 691, 702, 694, 681)) / 5 * (parseInt(A(-108, "eiXE", -97, -97, -106)) / 6) + parseInt(n(-509, -515, -515, -510, "NxNB")) / 7 + -parseInt(e(-101, "D)jy", -91, -96, -97)) / 8 * (parseInt(A(-110, "G2A*", -100, -92, -89)) / 9) + parseInt(A(-97, "D)jy", -103, -96, -114)) / 10 === o) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})($o, -1203827 * 1 + 25650 + 2038850);
function UA(i, o) {
  const t = $o();
  return UA = function(e, A) {
    e = e - 380;
    let n = t[e];
    if (UA.BxhpzB === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      UA.zGgKdV = C, i = arguments, UA.BxhpzB = !0;
    }
    const a = t[1397 + -5 * -53 + -1662], x = e + a, r = i[x];
    return r ? n = r : (UA.AHyaEi === void 0 && (UA.AHyaEi = !0), n = UA.zGgKdV(n, A), i[x] = n), n;
  }, UA(i, o);
}
async function aQ(i) {
  const { iv: o, key: t, message: e } = await qs(i), A = await gQ(t), n = {};
  function g(x, r, C, I, Q) {
    return UA(Q - 749, I);
  }
  n[a("Fuxh", 643)] = A, n.iv = o;
  function a(x, r, C, I, Q) {
    return UA(r - 244, x);
  }
  return n[g(1124, 1138, 1130, "mCzX", 1132) + "ge"] = e, n;
}
(function(i, o) {
  function t(g, a, x, r, C) {
    return JA(x - 93, g);
  }
  function e(g, a, x, r, C) {
    return JA(g - -28, C);
  }
  const A = i();
  function n(g, a, x, r, C) {
    return JA(C - -718, r);
  }
  for (; ; )
    try {
      if (-parseInt(n(-322, -336, -314, "Dlp0", -326)) / 1 + parseInt(e(345, 357, 345, 351, "W)L^")) / 2 + -parseInt(n(-325, -325, -342, "0mun", -328)) / 3 + parseInt(e(348, 338, 338, 336, "zh((")) / 4 * (parseInt(t("dmuw", 454, 468, 469, 455)) / 5) + parseInt(n(-336, -316, -326, "oQsC", -329)) / 6 * (-parseInt(e(352, 352, 359, 366, "WgRT")) / 7) + parseInt(e(344, 338, 343, 356, "cnoG")) / 8 + -parseInt(n(-359, -355, -352, "8%$W", -344)) / 9 * (-parseInt(n(-349, -321, -318, "n]!S", -333)) / 10) === o) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ai, -163669 * 7 + 2 * -612239 + 541687 * 6);
function Ai() {
  const i = ["dSopfmkUW5BdOf4EWR/dR8o4W5y", "W7rvW7K", "W6G2bem", "jgbFWRJdNmk0WRNcOSoZla", "W57dG3dcUuNdIqiFzSkdWRW", "dmoDbmkpmWhcLCogW6nqWP/dVa", "WPnpWRpdUtVdNI/cI8kyWOZcO8o+", "WOBdN3vyW5JdRchcPG", "bmkSoq", "WQWqcmoGnmk+fLa", "deCADf8IWR9AWPBdV8knlMm", "W4FcH8kTmWNcKrXgWRqzW6rTWPK", "B8omh8knWOubFt5jWOb/W7ii", "fSktBCkcWOxcM37dMc/dUW", "W4lcJ8kOmWVcNeb/WRmtW7Hr", "sMvuW5JcPa", "AcPzWO1WAuTzW4ddO8kNWOnN", "W5dcG1XAW48", "WRhcIqZcHcS", "BXhcQrq/W53dGCoa", "WPpdPH/cM8oz", "WPu2W4TyDG", "W5aMD13dRa", "WRBcIwf/umk9W7CitfajW4XA", "W4e1zW", "WOxdNGKkWOxdRbJcPmkNAmoL", "WO7cKY9e", "WP9Lq8kTlSkZxSk/W6/cGCoUW6it", "jI7dM1/dSCk+rmo4BSopW58ZzG", "WR99wbNdICo3W5VdGuzVoxKh", "W5BdIqHnCCoJWO/cUW"];
  return Ai = function() {
    return i;
  }, Ai();
}
function JA(i, o) {
  const t = Ai();
  return JA = function(e, A) {
    e = e - (-253 * -29 + -1 * -3406 + -10377);
    let n = t[e];
    if (JA.oYaUFB === void 0) {
      var g = function(I) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let s = "", E = "";
        for (let d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (let d = 0, u = s.length; d < u; d++)
          E += "%" + ("00" + s.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(I, Q) {
        let s = [], E = 0, d, u = "";
        I = g(I);
        let c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (let h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      JA.zbiTsh = C, i = arguments, JA.oYaUFB = !0;
    }
    const a = t[-2609 * -1 + -23 * -67 + -4150], x = e + a, r = i[x];
    return r ? n = r : (JA.rqVVhv === void 0 && (JA.rqVVhv = !0), n = JA.zbiTsh(n, A), i[x] = n), n;
  }, JA(i, o);
}
async function xQ(i) {
  function o(g, a, x, r, C) {
    return JA(a - -495, x);
  }
  function t(g, a, x, r, C) {
    return JA(a - -801, r);
  }
  const e = await window[n("0K9A", -141, -113, -138, -125) + "o"][A(-44, -32, -34, -44, "xNVm") + "e"][A(-47, -55, -50, -58, "30EE") + "t"](n("NAOa", -152, -156, -140, -150), i);
  function A(g, a, x, r, C) {
    return JA(g - -440, C);
  }
  function n(g, a, x, r, C) {
    return JA(C - -516, g);
  }
  return Array[t(-420, -423, -431, "8%$W")](new Uint8Array(e))[A(-63, -61, -79, -52, "[dkm")]((g) => g[t(-417, -407, -421, "rzQL") + o(-112, -111, "tq6V")](-127 * -51 + 1 * 5749 + -12210)[o(-129, -128, "Bubh") + t(-434, -432, -422, "Bubh")](2, "0"))[t(-416, -430, -428, "dmuw")]("");
}
function te(i, o) {
  var t = ei();
  return te = function(e, A) {
    e = e - (-1 * 5335 + -7714 + 13388);
    var n = t[e];
    if (te.tcLKKP === void 0) {
      var g = function(I) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", s = "", E = "", d = 0, u, c, h = 0; c = I.charAt(h++); ~c && (u = d % 4 ? u * 64 + c : c, d++ % 4) ? s += String.fromCharCode(255 & u >> (-2 * d & 6)) : 0)
          c = Q.indexOf(c);
        for (var p = 0, w = s.length; p < w; p++)
          E += "%" + ("00" + s.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(I, Q) {
        var s = [], E = 0, d, u = "";
        I = g(I);
        var c;
        for (c = 0; c < 256; c++)
          s[c] = c;
        for (c = 0; c < 256; c++)
          E = (E + s[c] + Q.charCodeAt(c % Q.length)) % 256, d = s[c], s[c] = s[E], s[E] = d;
        c = 0, E = 0;
        for (var h = 0; h < I.length; h++)
          c = (c + 1) % 256, E = (E + s[c]) % 256, d = s[c], s[c] = s[E], s[E] = d, u += String.fromCharCode(I.charCodeAt(h) ^ s[(s[c] + s[E]) % 256]);
        return u;
      };
      te.DmCXeD = a, i = arguments, te.tcLKKP = !0;
    }
    var x = t[2 * -78 + 4 * 887 + -1696 * 2], r = e + x, C = i[r];
    return C ? n = C : (te.ZuDKAq === void 0 && (te.ZuDKAq = !0), n = te.DmCXeD(n, A), i[r] = n), n;
  }, te(i, o);
}
function ei() {
  var i = ["DhRcLszxe8oCxSos", "WRzCa8k4W5igna", "W5L2pu3dH2VdSbykumo6W57dImof", "WQ7cOmk/WOpdJCo5dCoaWRK", "tdpdLSk2vSk8FaHcW5BdJXpcTx8", "D3NcKMDzi8o/D8o4WQm", "W4G0WPVcUmk1W7RcOKKqW6ZcVG", "aSo7yCkKW4utetDVW7f5", "jb06cSoDW7K+WOHssG", "WQZcQCo7W6RdVSk4qCkqsa", "gHRcKwvXW5LIW54ZnqJdL8k+", "W57dLCk8nquGW7nBeea1jG", "zbddINhcPSo1l8oXnq", "bCo+AmkIW4LXfJ18W7biWPC", "iHqZc8kRWPHzWRHtDcBcLJW", "WPrBW4KOgSogc3NcLa", "hxJdHxhcNCkxoCkAWR5DWQa", "DSodc8oin1iB", "xmk0xKhdTCkKuCormCk8qh0", "kdn4WO7cImoHhCoEcq", "gN3dJhFcKCo1pSkqWQ1CWPhcVa", "WOVdLCo1W5ZcMhpcJ8koW7WcWQ0"];
  return ei = function() {
    return i;
  }, ei();
}
(function(i, o) {
  function t(x, r, C, I, Q) {
    return te(Q - -109, r);
  }
  function e(x, r, C, I, Q) {
    return te(Q - 885, r);
  }
  function A(x, r, C, I, Q) {
    return te(Q - 148, C);
  }
  var n = i();
  function g(x, r, C, I, Q) {
    return te(Q - 119, r);
  }
  for (; ; )
    try {
      var a = parseInt(e(1253, "e)7l", 1251, 1240, 1242)) / 1 + -parseInt(t(239, "Q*on", 253, 242, 246)) / 2 * (-parseInt(e(1220, "#IRR", 1228, 1240, 1230)) / 3) + parseInt(g(470, "NO(h", 480, 470, 473)) / 4 + -parseInt(t(254, "[vtO", 246, 249, 243)) / 5 * (-parseInt(A(500, 492, "CTwJ", 492, 492)) / 6) + parseInt(e(1240, "e)7l", 1233, 1240, 1236)) / 7 * (-parseInt(A(499, 501, "4AZ#", 490, 495)) / 8) + parseInt(t(240, "nnFP", 250, 253, 247)) / 9 * (parseInt(A(490, 498, "IA3I", 494, 491)) / 10) + -parseInt(t(233, "N1Ln", 241, 244, 237)) / 11;
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ei, -1 * -182433 + 6 * -43830 + -14137 * -23);
async function ti(i) {
  const { Image: o } = ct, t = await i.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const n = o.verify(A);
  if (n) throw Error(n);
  const g = {};
  return g.bytes = e, o.create(g);
}
async function xI(i) {
  const { v4: { Metadata: o } } = ct, t = { ...i };
  t.platform = ct.Platform.WEB;
  const e = t, A = o.verify(e);
  if (A) throw Error(A);
  return o.create(e);
}
async function rI(i) {
  const { Content: o } = ct, { iv: t, key: e, message: A } = await aQ(i), n = { token: new Uint8Array(e), iv: t, schemaVersion: ls, bytes: new Uint8Array(A) }, g = o.verify(n);
  if (g) throw Error(g);
  const a = o.create(n);
  return o.encode(a).finish();
}
function II(i) {
  const { Blob: o } = ct.v4, t = o.verify(i);
  if (t) throw Error(t);
  const e = o.create(i);
  return o.encode(e).finish();
}
var D0, xi;
class CI {
  constructor(o, t, e, A, n, g, a, x, r, C, I, Q) {
    K(this, D0, !0);
    K(this, xi, Date.now());
    G(this, "fpsOfAllImages", new l0(365 * 8 + -3039 * -3 + -1 * 12007));
    this.cameraService = o, this.imageCropSettings = t, this.imageProcessor = e, this.createProtoMessage = A, this.onCaptureCallback = n, this.onDetectionCallback = g, this.checkToInstructionCodeMap = a, this.fallbackInstruction = x, this.samVersion = r, this.instructionEscalation = C, this.sessionToken = I, this.analytics = Q;
  }
  async run() {
    for (; D(this, D0); )
      await this.iterate();
    return this;
  }
  stop() {
    H(this, D0, !1);
  }
  async trackCaptureProcess(o, t) {
    var a;
    const e = Date.now(), A = It(this.fpsOfAllImages), n = {};
    n.width = t.width, n.height = t.height;
    const g = { detection: o, imageResolution: n, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - D(this, xi), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Vr() };
    C0() && Object.assign(g, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !d0() }), (a = this.analytics) == null || a.trackCaptureProcess(g);
  }
  onDetection(o, t) {
    this.onDetectionCallback({ ...o, avgFps: Ne(It(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: o, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const n = A, g = await Ss(t), a = await Ms(t, this.imageCropSettings), x = await this.cameraService.getCameraProperties(), r = { ...x, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await ti(a) }, C = {};
    C.sessionToken = this.sessionToken, C.web = r;
    const I = C, Q = await this.createProtoMessage(g, I), s = {};
    s.detection = e, s.imageResolution = n;
    const E = {};
    E.image = g, E.data = s;
    const d = E;
    this.stop();
    const u = {};
    u.imageData = d, u.protoMessage = Q, u.webMetadata = r, u.candidateSelectionImages = o, this.onCaptureCallback(u);
  }
  collectAndEscalate(o) {
    if (!this.instructionEscalation) return !1;
    const t = o;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(o) {
    return Date.now() - o;
  }
  getInvalidInstructions(o, t) {
    const e = [];
    return Array.from(o).forEach(([A, n]) => {
      !n && e.push(t[A]);
    }), e;
  }
  async sleep(o) {
    await un(Math.max(da.max - o, da.min));
  }
}
D0 = new WeakMap(), xi = new WeakMap();
class rQ extends CI {
  constructor(t, ...e) {
    super(...e);
    G(this, "candidateSelectionTime", -5 * 193 + -4718 + 5683);
    G(this, "candidatesSelectionFramesCount", 0);
    G(this, "isInCandidateSelection", !1);
    G(this, "lastImage", null);
    G(this, "bestImage", null);
    G(this, "candidateSelectionImages", []);
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
      throw e instanceof Error ? v.fromCameraError(e) : v.fromError(e);
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
    this.candidateSelectionTime === -7442 + -13 * -106 + 6064 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= Li.minFrames ? t > Li.minDuration : t > Li.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new v("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), n = Ne((-2550 * 2 + -1224 + 7324) / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = e.image.width, g.height = e.image.height;
    const a = g, x = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = x[0];
    const C = this.getInstructionCode(r), I = this.collectAndEscalate(C), Q = {};
    return Q.detection = t.detection, Q.instructionCode = C, Q.isEscalated = I, Q.invalidValidators = x, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: A, fps: n, avgFps: Ne(It(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class cI {
  constructor() {
    G(this, "cameraService");
    G(this, "imageCropSettings");
    G(this, "imageProcessor");
    G(this, "instructionEscalation");
    G(this, "createProtoMessage");
    G(this, "onCaptureCallback");
    G(this, "onDetectionCallback");
    G(this, "checkToInstructionCodeMap");
    G(this, "fallbackInstruction");
    G(this, "samVersion");
    G(this, "sessionToken");
    G(this, "analytics");
  }
  setCameraService(o) {
    return this.cameraService = o, this;
  }
  setImageCropSettings(o) {
    return this.imageCropSettings = o, this;
  }
  setImageProcessor(o) {
    return this.imageProcessor = o, this;
  }
  setInstructionEscalation(o) {
    return this.instructionEscalation = o, this;
  }
  setCreateProtoMessage(o) {
    return this.createProtoMessage = o, this;
  }
  setOnCaptureCallback(o) {
    return this.onCaptureCallback = o, this;
  }
  setOnDetectionCallback(o) {
    return this.onDetectionCallback = o, this;
  }
  setCheckToInstructionCodeMap(o) {
    return this.checkToInstructionCodeMap = o, this;
  }
  setFallbackInstruction(o) {
    return this.fallbackInstruction = o, this;
  }
  setSamVersion(o) {
    return this.samVersion = o, this;
  }
  setSessionToken(o) {
    return this.sessionToken = o, this;
  }
  setAnalytics(o) {
    return this.analytics = o, this;
  }
  reset() {
    return this.cameraService = void (8183 + -167 * 49), this.imageCropSettings = void (-269 * -1 + 4 * -1931 + -213 * -35), this.imageProcessor = void (3 * -925 + -3010 * 1 + -65 * -89), this.instructionEscalation = void (14863 + -1 * 14863), this.createProtoMessage = void (-6354 + 158 * -26 + 10462), this.onCaptureCallback = void (19 * -152 + -8325 + -11213 * -1), this.onDetectionCallback = void (-3006 + 15 * -181 + 5721), this.checkToInstructionCodeMap = void (-1916 + 268 * -4 + 2988), this.fallbackInstruction = void (-53 * -131 + -1108 * 2 + -163 * 29), this.samVersion = void (6388 + 1236 * 3 + -10096), this.sessionToken = void 0, this.analytics = void (-1424 * 6 + -6271 + -14815 * -1), this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new v("CameraService is required");
    if (!this.imageCropSettings) throw new v("ImageCropSettings is required");
    if (!this.imageProcessor) throw new v("ImageProcessor is required");
    if (!this.createProtoMessage) throw new v("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new v("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new v("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new v("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new v("FallbackInstruction is required");
    if (!this.samVersion) throw new v("SamVersion is required");
  }
}
class IQ extends cI {
  constructor() {
    super(...arguments);
    G(this, "instructionCodeMap");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void (-3746 + -3 * 1268 + 7550), this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new v("instructionCodeMap is required");
  }
  build() {
    return this.validateDependencies(), new rQ(this.instructionCodeMap, this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
var Ue, At;
class CQ extends CI {
  constructor(...t) {
    super(...t);
    K(this, Ue, void (2510 + -92 * 14 + -1222));
    K(this, At);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Co).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    H(this, At, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && H(this, Ue, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(cn.REQUEST_CAPTURE, D(this, At));
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
    return D(this, Ue) ? D(this, Ue) === Co.FIRST_FRAME ? !0 : D(this, Ue) === Co.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? v.fromCameraError(e) : v.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), H(this, Ue, void (23 + -23 * 1));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), n = Ne((-9695 * -1 + 2177 + -72 * 151) / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = t.image.width, g.height = t.image.height;
    const a = g, x = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(x[-7088 + -1772 * -4]), C = this.collectAndEscalate(r), I = {};
    return I.detection = e.detection, I.instructionCode = r, I.invalidValidators = x, I.isInCandidateSelection = !1, I.isEscalated = C, { processedImage: I, detectionTime: A, fps: n, avgFps: Ne(It(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), D(this, At) && document.removeEventListener(cn.REQUEST_CAPTURE, D(this, At));
  }
}
Ue = new WeakMap(), At = new WeakMap();
class cQ extends cI {
  build() {
    return this.validateDependencies(), new CQ(this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
class sQ {
  static create(o, t) {
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: n, createProtoMessage: g, fallbackInstruction: a, imageCropSettings: x, imageProcessor: r, instructionCodeMap: C, instructionEscalation: I, onCaptureCallback: Q, onDetectionCallback: s, samVersion: E, sessionToken: d } = t;
    switch (o) {
      case E0.AUTO_CAPTURE:
        return new IQ().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setInstructionCodeMap(C).setCameraService(A).setImageCropSettings(x).setImageProcessor(r).setCreateProtoMessage(g).setOnCaptureCallback(Q).setOnDetectionCallback(s).setSamVersion(E).setInstructionEscalation(I).setSessionToken(d).setAnalytics(e).build();
      case E0.WAIT_FOR_REQUEST:
        return new cQ().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setCameraService(A).setImageCropSettings(x).setImageProcessor(r).setCreateProtoMessage(g).setOnCaptureCallback(Q).setOnDetectionCallback(s).setSamVersion(E).setInstructionEscalation(I).setSessionToken(d).setAnalytics(e).build();
      default:
        throw new v("Invalid detection type: " + o);
    }
  }
}
function BQ({ cameraResolution: i, cameraService: o, customEvent: t }) {
  const { shouldCameraMirror: e } = bB(t.CONTROL, o), A = {};
  A.cameraResolution = i, A.shouldCameraMirror = e, mB(t.CAMERA_PROPS_CHANGED, A), Z(() => () => {
    h0.getInstance().restart();
  }, []);
  const n = {};
  return n.shouldCameraMirror = e, n;
}
function QQ(i) {
  Z(() => (window.addEventListener("beforeunload", i), () => {
    window.removeEventListener("beforeunload", i);
  }), [i]);
}
function EQ({ captureMode: i, checkToInstructionCodeMap: o, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: n, imageCropSettings: g, instructionCodeMap: a, onCapture: x, onDetection: r, sessionToken: C }) {
  QQ(() => {
    t && t.destroy();
  });
  const I = tA(!1), { appState: Q, handleAppStateChange: s, isCameraReady: E } = Bt(), { sunfish: d } = qt(), { analytics: u } = li(), { cameraResolution: c, cameraService: h, onCameraResolutionChange: p, videoRef: w } = Ks(), k = {};
  k.cameraResolution = c, k.cameraService = h, k.customEvent = A;
  const { shouldCameraMirror: R } = BQ(k), N = Gt(void (-3743 * 1 + -1526 + 1 * 5269)), V = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && E, wA = qA((z) => {
    s(ne.WAITING), x(z);
  }, [x, s]), AA = qA((z, _A) => {
    p(z.resolution), N.value = z, r(z, _A);
  }, [r, N, p]);
  Z(() => {
    !I.current && V && (I.current = !0, s(ne.RUNNING));
  }, [V, s]), Z(() => {
    if (Q !== ne.RUNNING || !V) return;
    if (!h || !t) throw new v("Cannot start detection");
    t.imageProcessor.reset();
    const z = {};
    z.analytics = u, z.cameraService = h, z.imageProcessor = t.imageProcessor, z.fallbackInstruction = n, z.instructionCodeMap = a, z.checkToInstructionCodeMap = o, z.sessionToken = C, z.samVersion = t.samVersion, z.createProtoMessage = e, z.onCaptureCallback = wA, z.onDetectionCallback = AA, z.instructionEscalation = t.instructionEscalation, z.imageCropSettings = g;
    const _A = sQ.create(i, z);
    return t.runDetectionLoop(_A), () => {
      t.stopDetectionLoop();
    };
  }, [Q, V, t, h, wA, AA, C, N, u, e, a, o, n, i, g]);
  const OA = {};
  return OA.videoRef = w, OA.cameraResolution = c, OA.detectionDetails = N, OA.shouldCameraMirror = R, OA;
}
function sI({ callback: i, delay: o, skip: t = !1 }) {
  const [e, A] = BA(!1), n = tA(i), g = tA(null);
  Z(() => {
    n.current = i;
  }, [i]);
  const a = qA(() => {
    g.current && (clearTimeout(g.current), g.current = null), A(!1);
  }, []), x = qA(() => {
    t || (a(), A(!0), g.current = setTimeout(() => {
      n.current(), A(!1);
    }, o));
  }, [o, a, t]);
  Z(() => {
    x();
  }, [o, a, x]);
  const r = {};
  return r.isActive = e, r.reset = x, r.clear = a, r;
}
function BI(i) {
  const o = tA([]);
  return Z(() => {
    o.current.forEach((t) => t()), o.current = [];
  }, [i]), (t) => {
    o.current.push(t);
  };
}
const dQ = () => typeof document < "u" && document.hasFocus();
function lQ(i = {}) {
  const o = tA(i), t = tA(dQ()), [e, A] = BA(t.current);
  Z(() => {
    o.current = i;
  }), Z(() => {
    function g(C) {
      t.current = C, A(C);
    }
    function a() {
      Promise.resolve().then(() => {
        var C, I, Q, s;
        !t.current && ((I = (C = o.current).onFocus) == null || I.call(C), (s = (Q = o.current).onChange) == null || s.call(Q, !0)), g(!0);
      });
    }
    function x() {
      Promise.resolve().then(() => {
        var C, I, Q, s;
        t.current && ((I = (C = o.current).onBlur) == null || I.call(C), (s = (Q = o.current).onChange) == null || s.call(Q, !1)), g(!1);
      });
    }
    function r() {
      document.visibilityState === "hidden" && x();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", x), window.document.addEventListener("visibilitychange", r), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", x), window.document.removeEventListener("visibilitychange", r);
    };
  }, []);
  const n = {};
  return n.isWindowFocused = e, n;
}
function uQ(i = {}) {
  const { appState: o } = Bt();
  lQ({ onBlur: () => {
    var t;
    o === ne.WAITING || o === Qn.DONE || (t = i.onBlur) == null || t.call(i);
  }, onFocus: () => {
    var t;
    o === ne.WAITING || o === Qn.DONE || (t = i.onFocus) == null || t.call(i);
  } });
}
function hQ(i, o) {
  if (!i) return o;
  const { detectionRecord: t, hashedDetectedImages: e } = i;
  o.hashedDetectedImages && (e == null || e.push(...o.hashedDetectedImages)), o.detectionRecord && (t == null || t.push(...o.detectionRecord));
  const A = { ...i };
  return A.hashedDetectedImages = e, A.detectionRecord = t, A;
}
function fQ() {
  const i = Gt(null);
  function o({ cameraProperties: e }) {
    i.value = hQ(i.value, e);
  }
  const t = {};
  return t.cameraProperties = i, t.mergeCameraProperties = o, t;
}
const bg = st(void 0);
bg.displayName = "CommonThresholdsContext";
function pQ() {
  const i = Fe(bg);
  if (!i)
    throw new Error("Missing provider for ThresholdsContext");
  return i;
}
function yQ() {
  return Qg() ? pa.MOBILE : pa.DESKTOP;
}
function DQ({
  cameraOptionsThresholds: i,
  children: o,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, n] = BA(yQ()), g = RA(() => ({ thresholds: t(i, e[A]), thresholdsPreset: A, setThresholdsPreset: n }), [i, A, n, e, t]);
  return /* @__PURE__ */ m(bg.Provider, { value: g, children: o });
}
const Tn = {};
Tn.min = -(2526 + -259 * 1 + -2266), Tn.max = 1;
const qn = {};
qn.confidence = 0, qn.status = Tn;
const QI = {};
QI.confidence = 0;
const EI = {};
EI.confidence = 0;
const $A = {};
$A.faceConfidence = 0.4, $A.minFaceSizeRatio = 0.16, $A.maxFaceSizeRatio = 0.2, $A.sharpnessThreshold = 0.25, $A.brightnessLowThreshold = 0.2, $A.brightnessHighThreshold = 0.85, $A.outOfBoundsThreshold = 0.05, $A.devicePitchAngleThreshold = 30, $A.mouth = qn, $A.leftEye = QI, $A.rightEye = EI;
const jn = {};
jn.min = -(-53 * -44 + 1 * -5653 + 302 * 11), jn.max = 1;
const Zn = {};
Zn.confidence = 0, Zn.status = jn;
const dI = {};
dI.confidence = 0;
const lI = {};
lI.confidence = 0;
const Ae = {};
Ae.faceConfidence = 0.4, Ae.minFaceSizeRatio = 0.16, Ae.maxFaceSizeRatio = 0.2, Ae.sharpnessThreshold = 0.25, Ae.brightnessLowThreshold = 0.2, Ae.brightnessHighThreshold = 0.85, Ae.outOfBoundsThreshold = 0.05, Ae.devicePitchAngleThreshold = 30, Ae.mouth = Zn, Ae.leftEye = dI, Ae.rightEye = lI;
const _n = {};
_n.MOBILE = $A, _n.DESKTOP = Ae;
const mQ = _n;
function wQ(i, o) {
  var t, e, A;
  return {
    faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? o.faceConfidence,
    minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? o.minFaceSizeRatio,
    maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? o.maxFaceSizeRatio,
    sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? o.sharpnessThreshold,
    brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? o.brightnessLowThreshold,
    brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? o.brightnessHighThreshold,
    outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? o.outOfBoundsThreshold,
    devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? o.devicePitchAngleThreshold,
    mouth: {
      confidence: ((t = i == null ? void 0 : i.mouth) == null ? void 0 : t.confidence) ?? o.mouth.confidence,
      status: {
        min: ((e = i == null ? void 0 : i.mouth) == null ? void 0 : e.status.min) ?? o.mouth.status.min,
        max: ((A = i == null ? void 0 : i.mouth) == null ? void 0 : A.status.max) ?? o.mouth.status.max
      }
    },
    leftEye: (i == null ? void 0 : i.leftEye) ?? {
      confidence: o.leftEye.confidence
    },
    rightEye: (i == null ? void 0 : i.rightEye) ?? {
      confidence: o.rightEye.confidence
    }
  };
}
function bQ({
  cameraOptionsThresholds: i,
  children: o
}) {
  return /* @__PURE__ */ m(
    DQ,
    {
      cameraOptionsThresholds: i,
      thresholdsPresetMapper: wQ,
      thresholdsPresets: mQ,
      children: o
    }
  );
}
function kQ({ onFaceTrackingLost: i, skipOutsideOfCandidateSelection: o }) {
  const t = tA(i);
  Z(() => {
    t.current = i;
  }, [i]);
  const e = qA((n) => {
    if (!n.detail) return;
    const { data: g } = n.detail;
    o && !g.isInCandidateSelection || g.invalidValidators.includes(CA.FACE_NOT_PRESENT) && t.current();
  }, [o]), A = {};
  return A.handleFaceDetection = e, A;
}
function GQ(i) {
  return function(t) {
    const { handleFaceDetection: e } = i(t);
    lg(ie.FACE_DETECTION, e);
  };
}
const SQ = ({ children: i }) => {
  const o = tA(null);
  return GB(o, ie.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ m(Jc, { ref: o, children: i });
}, kg = 6477 + 113 * -78 + 2337 + 0.5;
function NQ() {
  const i = {};
  i.max = kg;
  const o = {};
  o.confidence = 0.3, o.status = i;
  const t = {};
  return t.mouth = o, t;
}
const FQ = -393 * -23 + 2209 * -1 + -3415 * 2 + 0.4;
function RQ(i) {
  const o = {};
  o.min = FQ + i;
  const t = {};
  t.confidence = 0.3, t.status = o;
  const e = {};
  return e.brightnessHighThreshold = 1, e.brightnessLowThreshold = -1, e.sharpnessThreshold = -(1783 + -6 * 297), e.outOfBoundsThreshold = -(6097 + 7 * -359 + -1 * 3583), e.minFaceSizeRatio = 0.1, e.mouth = t, e;
}
const MQ = 887 * -5 + 17495 + 36 * -85, qa = 3797 * -2 + 9113 + -16 * 94, yo = {};
yo.timeout = 4e3, yo.threshold = 0.7, yo.instructions = ["mouth_score_too_high", "mouth_score_too_low"];
const Ti = yo;
function uI() {
  return pQ();
}
const WQ = (i, o) => ({ ...i, leftEye: { ...i.leftEye, center: lt(i.leftEye.center, o) }, rightEye: { ...i.rightEye, center: lt(i.rightEye.center, o) }, mouth: { ...i.mouth, center: lt(i.mouth.center, o) }, topLeft: lt(i.topLeft, o), bottomRight: lt(i.bottomRight, o), faceCenter: lt(i.faceCenter, o) }), hI = (i, o) => {
  const { faceCenter: t, faceSize: e } = i, A = xs(e, o), n = {};
  n.x = t.x, n.y = t.y - A;
  const g = {};
  g.x = t.x + A, g.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const x = {};
  x.x = t.x - A, x.y = t.y;
  const r = {};
  return r.top = n, r.right = g, r.bottom = a, r.left = x, cr(r);
}, vQ = (i, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = o, n = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  lr(i, n, "rgba(255, 0, 0, 0.3)", !0), c0(i, e, "lime");
}, LQ = (i, o, t) => {
  const e = hI(o, t);
  Object.values(e).map((A) => c0(i, A, "orange"));
};
function UQ({ cameraResolution: i, detectionDetails: o, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = uI(), { redfin: n } = qt(), g = tA(null);
  if (Z(() => {
    if (!g.current)
      return;
    g.current.width = i.width, g.current.height = i.height, Xc(g.current);
    const c = Ro(i), h = ur(
      i,
      e.outOfBoundsThreshold,
      c
    ), p = gs(i);
    o.value && (vQ(g.current, o.value.processedImage.detection), LQ(
      g.current,
      o.value.processedImage.detection,
      i
    ), Ui(g.current, c, "lime"), Ui(g.current, h, "yellow"), Ui(g.current, p, "blue"), c0(g.current, o.value.processedImage.detection.leftEye.center, "cyan"), c0(g.current, o.value.processedImage.detection.rightEye.center, "cyan"), c0(g.current, o.value.processedImage.detection.mouth.center, "cyan"));
  }, [i, e, o.value]), !o.value)
    return null;
  const {
    avgFps: a,
    detectionTime: x,
    fps: r,
    processedImage: { detection: C, instructionCode: I, invalidValidators: Q, isEscalated: s },
    resolution: E,
    samVersion: d
  } = o.value, u = {
    Confidence: C.confidence,
    Brightness: C.brightness,
    Sharpness: C.sharpness,
    "Face size": C.faceSize,
    "Left eye confidence": C.leftEye.confidence,
    "Left eye status": C.leftEye.status,
    "Right eye confidence": C.rightEye.confidence,
    "Right eye status": C.rightEye.status,
    "Mouth confidence": C.mouth.confidence,
    "Mouth status": C.mouth.status,
    "Detection time": x,
    FPS: r,
    "Avg FPS": a,
    Tier: n,
    Instruction: I,
    Resolution: E,
    "Escalated instruction": s,
    "Component version": "7.3.2",
    "Thresholds preset": A
  };
  return d && (u["SAM version"] = d), Q.length > 0 && (u["Invalid validators"] = Q), /* @__PURE__ */ m(
    Vc,
    {
      ref: g,
      cameraResolution: i,
      detectionDetails: u,
      isImageMirror: t
    }
  );
}
function JQ({ isRounded: i, isSquare: o, ...t }) {
  return i ? /* @__PURE__ */ m("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ m("rect", { fill: "#000", ...t, rx: o ? "0" : "50%" });
}
function YQ(i, o) {
  const [t, e] = BA(!1), A = () => e((a) => !a), n = "" + t;
  Kt(() => {
    function a() {
      if (!i.current) return;
      const I = new MutationObserver(() => {
        A();
      }), Q = {};
      return Q.childList = !0, Q.subtree = !0, Q.attributes = !0, I.observe(i.current, Q), I;
    }
    function x() {
      var s;
      if (!((s = i.current) != null && s["parentElement"])) return;
      const I = new MutationObserver((E) => {
        E.find((u) => {
          for (const c of u.removedNodes)
            if (c !== (o == null ? void 0 : o.current) && c === i.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((c) => {
            var h;
            c !== (o == null ? void 0 : o.current) && ((h = c.parentElement) == null || h.removeChild(c));
          });
        });
      }), Q = {};
      return Q.childList = !0, I.observe(i.current.parentElement, Q), I;
    }
    const r = a(), C = x();
    return () => {
      C == null || C.disconnect(), r == null || r.disconnect();
    };
  });
  const g = {};
  return g.key = n, g;
}
const OQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function HQ({ cutOut: i, height: o, ignoreElement: t, width: e }) {
  const A = tA(null), { key: n } = YQ(A, t);
  return /* @__PURE__ */ m("div", { ref: A, style: OQ, children: /* @__PURE__ */ m("svg", { viewBox: `0 0 ${e} ${o}`, children: [
    /* @__PURE__ */ m("defs", { children: [
      /* @__PURE__ */ m("mask", { id: "placeholder", children: [
        /* @__PURE__ */ m("rect", { fill: "#fff", height: "100%", width: "100%" }),
        i
      ] }),
      /* @__PURE__ */ m(
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
            /* @__PURE__ */ m("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ m("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ m(
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
    /* @__PURE__ */ m("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function KQ({ fullOverlay: i, ignoreElement: o, resolution: t }) {
  const e = as(t), A = `${e.height * 100}%`, n = `${e.width * 100}%`, g = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ m(
    HQ,
    {
      cutOut: i || /* @__PURE__ */ m(JQ, { height: A, width: n, x: g, y: a }),
      height: t.height,
      ignoreElement: o,
      width: t.width
    }
  );
}
function PQ({ cameraResolution: i, children: o, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = qt(), { appState: n, freemiumOverlayState: g } = Bt(), a = tA(null), x = g !== Wo.HIDDEN && A !== pn.Higher && i, r = g === Wo.VISIBLE, C = i && n === ne.RUNNING;
  return /* @__PURE__ */ m(xe, { children: [
    x && /* @__PURE__ */ m(
      KQ,
      {
        fullOverlay: r,
        ignoreElement: a,
        resolution: i
      }
    ),
    o,
    C && /* @__PURE__ */ m("div", { ref: a, children: /* @__PURE__ */ m(
      UQ,
      {
        cameraResolution: i,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const TQ = (i, o) => {
  if (Gs()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    h0.getInstance().dispatchCustomEventOnChange(i, e);
  }
};
async function qQ(i, o) {
  const { FaceContent: t } = ct.v4, e = await ti(i), A = await xI(o), n = {};
  n.image = e, n.metadata = A;
  const g = n, a = t.verify(g);
  if (a) throw Error(a);
  const x = t.create(g), r = {};
  return r.faceContent = x, II(r);
}
async function jQ(i, o) {
  const t = await qQ(i, o);
  return rI(t);
}
function ZQ({ controller: i, onPhotoTakenInternal: o }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = Or(), n = qA(({ candidateSelectionImages: x, imageData: r, protoMessage: C, webMetadata: I }) => {
    TQ(hr.FACE, x), e(r, C);
    const Q = {};
    Q.cameraProperties = I, o == null || o(Q);
  }, [o, e]), g = qA(({ fps: x, processedImage: r }, C) => {
    const I = {};
    I.code = r.instructionCode, I.isEscalated = r.isEscalated, Hr(ie.INSTRUCTION_CHANGED, I), i && pB(ie.DETECTED_FACE_CHANGED, r.detection, i.imageProcessor.validationService.getThresholds().faceConfidence);
    const Q = {};
    Q.detection = r.detection, Q.fps = x, Q.image = C, Q.isInCandidateSelection = r.isInCandidateSelection, Q.invalidValidators = r.invalidValidators, yB(ie.FACE_DETECTION, Q);
  }, [i]), a = {};
  return a.captureMode = t, a.controller = i, a.createProtoMessage = jQ, a.onCapture = n, a.onDetection = g, a.sessionToken = A, a.customEvent = ie, a.fallbackInstruction = CA.FACE_NOT_PRESENT, a.instructionCodeMap = CA, a.checkToInstructionCodeMap = Pc, a.imageCropSettings = us, EQ(a);
}
var le;
class _Q {
  constructor(o, t) {
    K(this, le);
    this.instructionCodeCollector = o, this.config = t, H(this, le, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return D(this, le);
  }
  canEscalate(o) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(o) ? !1 : t.filter((A) => A === o).length / t.length >= this.config.threshold;
  }
  collect(o) {
    this.instructionCodeCollector.pushWithTimestamp(o);
  }
  isEscalated(o) {
    return D(this, le).get(o) ?? !1;
  }
  escalate() {
    for (const [o, t] of D(this, le).entries())
      !t && this.canEscalate(o) && (this.config.onEscalate(o), D(this, le).set(o, !0));
  }
  reset() {
    D(this, le).forEach((o, t) => {
      D(this, le).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
le = new WeakMap();
var m0, Je, Ft;
class VQ extends Array {
  constructor(t) {
    super();
    K(this, m0, 9887 + 1 * -9887);
    K(this, Je, []);
    K(this, Ft, !1);
    H(this, m0, t);
  }
  clearAfterTimeout() {
    if (D(this, Je).length === -26 * -121 + -4885 + 47 * 37) return;
    const t = Date.now(), e = D(this, Je).findLastIndex((A) => t - A > D(this, m0));
    e !== -(2 * -4492 + 5237 * -1 + 14222) && (H(this, Ft, !0), this.splice(3776 + -49 * 98 + -18 * -57, e + 1), D(this, Je).splice(8939 + 1 * -4261 + 2339 * -2, e + 1));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), D(this, Je).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return D(this, Ft);
  }
  clear() {
    this.splice(-4122 + -2 * -944 + 2234), D(this, Je).splice(1084 * 2 + -601 * -13 + -1 * 9981), H(this, Ft, !1);
  }
}
m0 = new WeakMap(), Je = new WeakMap(), Ft = new WeakMap();
class zQ {
  constructor(o, t, e, A, n) {
    G(this, "isDetectorInitialized", !1);
    G(this, "samVersion", null);
    G(this, "detection");
    this.imageProcessor = o, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = n;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(o) {
    if (!o || !this.areVersionsCompatible(o))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new v("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = o;
  }
  runDetectionLoop(o) {
    this.detection && this.detection.stop(), this.detection = o, this.detection.run();
  }
  stopDetectionLoop() {
    var o, t;
    (o = this.detection) == null || o.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(o) {
    this.imageProcessor.validationService.thresholds = o;
  }
  areVersionsCompatible(o) {
    return o === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(o, t) {
    return "" + t.replace(Cr, "") + o;
  }
}
class XQ {
  constructor() {
    G(this, "imageProcessor");
    G(this, "assetsDirectoryPath");
    G(this, "instructionEscalation");
    G(this, "compatibleSamVersion");
    G(this, "validationService");
    G(this, "detector");
  }
  setImageProcessor(o) {
    return this.imageProcessor = o, this;
  }
  setAssetsDirectoryPath(o) {
    return this.assetsDirectoryPath = o, this;
  }
  setCompatibleSamVersion(o) {
    return this.compatibleSamVersion = o, this;
  }
  setInstructionEscalation(o) {
    return this.instructionEscalation = o, this;
  }
  setValidationService(o) {
    return this.validationService = o, this;
  }
  setDetector(o) {
    return this.detector = o, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new v("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new v("AssetsDirectoryPath is required");
    if (!this.detector) throw new v("Detector is required");
    if (!this.compatibleSamVersion) throw new v("CompatibleSamVersion is required");
    if (!this.validationService) throw new v("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void 0, this.assetsDirectoryPath = void (1496 + 44 * -34), this.instructionEscalation = void (6755 + 2 * -2 + 1 * -6751), this.compatibleSamVersion = void (4195 + 1543 * 3 + -8824), this.detector = void (3 * -223 + 1026 * 6 + -5487), this.validationService = void (-2879 + 1 * 2879), this;
  }
}
class $Q {
  constructor() {
    G(this, "detectionRecord", []);
    G(this, "imagesWithTimestampForDuplicateDetection", new l0(ds));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: o, timestamp: t }) {
    const e = o.length / ps, A = e / (-2811 * 2 + 4508 + 1116), n = o.length / (64 * 2 + 9289 * 1 + 1345 * -7), g = await xQ(o.slice(n - A, n + A)), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(o) {
    return { data: Fs(o), resolution: { width: o.width, height: o.height } };
  }
  async processDetectedObject({ detectedObject: o, image: t, imageData: e, timestamp: A }) {
    const n = cr(o), g = this.validationService.validateDetectedObject(n, t);
    if (g.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = A, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(o), { detection: n, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class AE {
  constructor() {
    G(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new v("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class Gg extends zQ {
  constructor(t, e, A, n, g, a) {
    super(A, n, g, e, a);
    G(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], Hr(ie.INSTRUCTION_CHANGED, t, es);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
G(Gg, "_instance");
class eE extends XQ {
  build() {
    return this.validateDependencies(), new Gg(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
class tE extends $Q {
  constructor(t, e) {
    super();
    G(this, "className", "FaceImageProcessor");
    G(this, "detector");
    G(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Ro(t), A = dr(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), n = {};
    n.height = t.height, n.width = t.width;
    let g = await this.detector.detect(A.data, A.resolution, n);
    g = WQ(g, Ro(t));
    const a = {};
    return a.detectedObject = g, a.image = t, a.imageData = A.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var Rt, et, tt;
class oE {
  constructor(o) {
    K(this, Rt);
    K(this, et);
    K(this, tt);
    H(this, Rt, o), H(this, et, /* @__PURE__ */ new Map());
  }
  validate() {
    D(this, Rt).forEach((o) => {
      D(this, et).set(o.name, o.evaluate());
    }), H(this, tt, void (3953 + 64 * 149 + 13489 * -1));
  }
  isValid() {
    return D(this, tt) === void (6659 * -1 + 1963 + 4696) && H(this, tt, Array.from(D(this, et).values()).every((o) => o)), D(this, tt);
  }
  get result() {
    return D(this, et);
  }
  get validators() {
    return D(this, Rt);
  }
}
Rt = new WeakMap(), et = new WeakMap(), tt = new WeakMap();
var w0, ot;
class ZA {
  constructor(o, t) {
    K(this, w0);
    K(this, ot);
    H(this, w0, o), H(this, ot, t);
  }
  get threshold() {
    return D(this, ot);
  }
  get name() {
    return D(this, w0);
  }
  isValueBelowThreshold(o) {
    return o < D(this, ot);
  }
  isValueAboveThreshold(o) {
    return o > D(this, ot);
  }
}
w0 = new WeakMap(), ot = new WeakMap();
const iE = "isNotDim";
var b0;
class nE extends ZA {
  constructor(t, e) {
    super(iE, t);
    K(this, b0);
    H(this, b0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, b0));
  }
}
b0 = new WeakMap();
const gE = "isNotSmall";
var k0;
class aE extends ZA {
  constructor(t, e) {
    super(gE, t);
    K(this, k0);
    H(this, k0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, k0));
  }
}
k0 = new WeakMap();
const xE = "isNotBright";
var G0;
class rE extends ZA {
  constructor(t, e) {
    super(xE, t);
    K(this, G0);
    H(this, G0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, G0));
  }
}
G0 = new WeakMap();
const IE = "isPresent";
var S0;
class CE extends ZA {
  constructor(t, e) {
    super(IE, t);
    K(this, S0);
    H(this, S0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, S0));
  }
}
S0 = new WeakMap();
const cE = "isSharp";
var N0;
class sE extends ZA {
  constructor(t, e) {
    super(cE, t);
    K(this, N0);
    H(this, N0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, N0));
  }
}
N0 = new WeakMap();
const BE = "isLeftEyePresent";
var F0;
class QE extends ZA {
  constructor(t, e) {
    super(BE, t);
    K(this, F0);
    H(this, F0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, F0));
  }
}
F0 = new WeakMap();
const EE = "isMouthPresent";
var R0;
class dE extends ZA {
  constructor(t, e) {
    super(EE, t);
    K(this, R0);
    H(this, R0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, R0));
  }
}
R0 = new WeakMap();
const lE = "isMouthScoreNotTooLow";
var M0;
class uE extends ZA {
  constructor(t, e) {
    super(lE, t);
    K(this, M0);
    H(this, M0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, M0));
  }
}
M0 = new WeakMap();
const hE = "isMouthScoreNotTooHigh";
var W0;
class fE extends ZA {
  constructor(t, e) {
    super(hE, t);
    K(this, W0);
    H(this, W0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, W0));
  }
}
W0 = new WeakMap();
const pE = "isNotLarge";
var v0;
class yE extends ZA {
  constructor(t, e) {
    super(pE, t);
    K(this, v0);
    H(this, v0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(D(this, v0));
  }
}
v0 = new WeakMap();
const DE = "isNotPitched";
var L0;
const Sg = class Sg extends ZA {
  constructor(t, e) {
    super(DE, Sg.calculatePitchAngleAccelerationThreshold(t));
    K(this, L0);
    H(this, L0, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Qs * Math.sin(t * (Math.PI / (1287 + 33 * 157 + 262 * -24)));
  }
  evaluate() {
    const { z: t } = D(this, L0) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
L0 = new WeakMap();
let Vn = Sg;
const mE = "isRightEyePresent";
var U0;
class wE extends ZA {
  constructor(t, e) {
    super(mE, t);
    K(this, U0);
    H(this, U0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(D(this, U0));
  }
}
U0 = new WeakMap();
const bE = "isNotOutOfBounds";
var J0, it;
class kE extends ZA {
  constructor(t, e, A) {
    super(bE, t);
    K(this, J0);
    K(this, it);
    H(this, J0, e), H(this, it, A);
  }
  evaluate() {
    const t = ur(D(this, it), this.threshold, Ro(D(this, it))), e = hI(D(this, J0), D(this, it));
    return vs(e, t);
  }
}
J0 = new WeakMap(), it = new WeakMap();
class GE {
  static getFaceValidationInstance(o, t, e, A) {
    return new oE([new CE(o.faceConfidence, t.confidence), new QE(o.leftEye.confidence, t.leftEye.confidence), new wE(o.rightEye.confidence, t.rightEye.confidence), new aE(o.minFaceSizeRatio, t.faceSize), new yE(o.maxFaceSizeRatio, t.faceSize), new sE(o.sharpnessThreshold, t.sharpness), new nE(o.brightnessLowThreshold, t.brightness), new rE(o.brightnessHighThreshold, t.brightness), new kE(o.outOfBoundsThreshold, t, e), new Vn(o.devicePitchAngleThreshold, A), new dE(o.mouth.confidence, t.mouth.confidence), new fE(o.mouth.status.max, t.mouth.status), new uE(o.mouth.status.min, t.mouth.status)]);
  }
}
class SE extends AE {
  constructor() {
    super(...arguments);
    G(this, "className", "FaceValidationService");
    G(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = GE.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const fI = Symbol("Comlink.proxy"), NE = Symbol("Comlink.endpoint"), FE = Symbol("Comlink.releaseProxy"), qi = Symbol("Comlink.finalizer"), Do = Symbol("Comlink.thrown"), pI = (i) => typeof i == "object" && i !== null || typeof i == "function", RE = {
  canHandle: (i) => pI(i) && i[fI],
  serialize(i) {
    const { port1: o, port2: t } = new MessageChannel();
    return DI(i, o), [t, [t]];
  },
  deserialize(i) {
    return i.start(), wI(i);
  }
}, ME = {
  canHandle: (i) => pI(i) && Do in i,
  serialize({ value: i }) {
    let o;
    return i instanceof Error ? o = {
      isError: !0,
      value: {
        message: i.message,
        name: i.name,
        stack: i.stack
      }
    } : o = { isError: !1, value: i }, [o, []];
  },
  deserialize(i) {
    throw i.isError ? Object.assign(new Error(i.value.message), i.value) : i.value;
  }
}, yI = /* @__PURE__ */ new Map([
  ["proxy", RE],
  ["throw", ME]
]);
function WE(i, o) {
  for (const t of i)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function DI(i, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!WE(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: n, type: g, path: a } = Object.assign({ path: [] }, A.data), x = (A.data.argumentList || []).map(ze);
    let r;
    try {
      const C = a.slice(0, -1).reduce((Q, s) => Q[s], i), I = a.reduce((Q, s) => Q[s], i);
      switch (g) {
        case "GET":
          r = I;
          break;
        case "SET":
          C[a.slice(-1)[0]] = ze(A.data.value), r = !0;
          break;
        case "APPLY":
          r = I.apply(C, x);
          break;
        case "CONSTRUCT":
          {
            const Q = new I(...x);
            r = OE(Q);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: Q, port2: s } = new MessageChannel();
            DI(i, s), r = YE(Q, [Q]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      r = { value: C, [Do]: 0 };
    }
    Promise.resolve(r).catch((C) => ({ value: C, [Do]: 0 })).then((C) => {
      const [I, Q] = ni(C);
      o.postMessage(Object.assign(Object.assign({}, I), { id: n }), Q), g === "RELEASE" && (o.removeEventListener("message", e), mI(o), qi in i && typeof i[qi] == "function" && i[qi]());
    }).catch((C) => {
      const [I, Q] = ni({
        value: new TypeError("Unserializable return value"),
        [Do]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, I), { id: n }), Q);
    });
  }), o.start && o.start();
}
function vE(i) {
  return i.constructor.name === "MessagePort";
}
function mI(i) {
  vE(i) && i.close();
}
function wI(i, o) {
  return zn(i, [], o);
}
function eo(i) {
  if (i)
    throw new Error("Proxy has been released and is not useable");
}
function bI(i) {
  return Dt(i, {
    type: "RELEASE"
  }).then(() => {
    mI(i);
  });
}
const oi = /* @__PURE__ */ new WeakMap(), ii = "FinalizationRegistry" in globalThis && new FinalizationRegistry((i) => {
  const o = (oi.get(i) || 0) - 1;
  oi.set(i, o), o === 0 && bI(i);
});
function LE(i, o) {
  const t = (oi.get(o) || 0) + 1;
  oi.set(o, t), ii && ii.register(i, o, i);
}
function UE(i) {
  ii && ii.unregister(i);
}
function zn(i, o = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(n, g) {
      if (eo(e), g === FE)
        return () => {
          UE(A), bI(i), e = !0;
        };
      if (g === "then") {
        if (o.length === 0)
          return { then: () => A };
        const a = Dt(i, {
          type: "GET",
          path: o.map((x) => x.toString())
        }).then(ze);
        return a.then.bind(a);
      }
      return zn(i, [...o, g]);
    },
    set(n, g, a) {
      eo(e);
      const [x, r] = ni(a);
      return Dt(i, {
        type: "SET",
        path: [...o, g].map((C) => C.toString()),
        value: x
      }, r).then(ze);
    },
    apply(n, g, a) {
      eo(e);
      const x = o[o.length - 1];
      if (x === NE)
        return Dt(i, {
          type: "ENDPOINT"
        }).then(ze);
      if (x === "bind")
        return zn(i, o.slice(0, -1));
      const [r, C] = ja(a);
      return Dt(i, {
        type: "APPLY",
        path: o.map((I) => I.toString()),
        argumentList: r
      }, C).then(ze);
    },
    construct(n, g) {
      eo(e);
      const [a, x] = ja(g);
      return Dt(i, {
        type: "CONSTRUCT",
        path: o.map((r) => r.toString()),
        argumentList: a
      }, x).then(ze);
    }
  });
  return LE(A, i), A;
}
function JE(i) {
  return Array.prototype.concat.apply([], i);
}
function ja(i) {
  const o = i.map(ni);
  return [o.map((t) => t[0]), JE(o.map((t) => t[1]))];
}
const kI = /* @__PURE__ */ new WeakMap();
function YE(i, o) {
  return kI.set(i, o), i;
}
function OE(i) {
  return Object.assign(i, { [fI]: !0 });
}
function ni(i) {
  for (const [o, t] of yI)
    if (t.canHandle(i)) {
      const [e, A] = t.serialize(i);
      return [
        {
          type: "HANDLER",
          name: o,
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
    kI.get(i) || []
  ];
}
function ze(i) {
  switch (i.type) {
    case "HANDLER":
      return yI.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function Dt(i, o, t) {
  return new Promise((e) => {
    const A = HE();
    i.addEventListener("message", function n(g) {
      !g.data || !g.data.id || g.data.id !== A || (i.removeEventListener("message", n), e(g.data));
    }), i.start && i.start(), i.postMessage(Object.assign({ id: A }, o), t);
  });
}
function HE() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const KE = "SAM v1.44.6 for idcards", PE = "/dot-assets/smile/dot-Dk4zHcWg.js";
function TE() {
  const { handleError: i } = Bt(), { acceleration: o } = NB(), { assetsDirectoryPath: t } = Or(), { thresholds: e } = uI(), { analytics: A } = li(), [n, g] = BA();
  Z(() => {
    (async () => {
      const r = Gg.getWorkerPath(PE, t), C = {};
      C.type = "module";
      const I = new Worker(new URL(r, import.meta.url), C), Q = wI(I), s = await new Q(), E = new SE(), d = new tE(s, E), u = new _Q(new VQ(Ti.timeout), { threshold: Ti.threshold, instructions: Ti.instructions, onEscalate: (h) => {
        DB(Ot.INSTRUCTION_ESCALATED, h), A == null || A.trackEscalated(h);
      } }), c = new eE().setDetector(s).setValidationService(E).setImageProcessor(d).setCompatibleSamVersion(KE).setAssetsDirectoryPath(t).setInstructionEscalation(u).build();
      try {
        await c.init(), g(c);
      } catch (h) {
        if (h instanceof Error) {
          i(v.fromError(h));
          return;
        }
      }
    })();
  }, [A, i, t]), Z(() => {
    n && n.setThresholds(e);
  }, [n, e]), Z(() => {
    n && n.setAcceleration(o);
  }, [o, n]);
  const a = {};
  return a.controller = n, a;
}
function qE({ onPhotoTakenInternal: i }) {
  const { isCameraReady: o } = nr(), { sunfish: t } = qt(), { controller: e } = TE(), { cameraResolution: A, detectionDetails: n, shouldCameraMirror: g, videoRef: a } = ZQ({
    controller: e,
    onPhotoTakenInternal: i
  });
  return /* @__PURE__ */ m(xe, { children: /* @__PURE__ */ m(
    PQ,
    {
      cameraResolution: A,
      detectionDetails: n,
      shouldMirror: g,
      children: /* @__PURE__ */ m(
        Yc,
        {
          ref: a,
          $isImageMirror: g,
          $isVisible: t && o,
          autoPlay: !0,
          id: ts,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
async function jE(i, o, t) {
  const { SmileLivenessContent: e } = ct.v4, A = await ti(i), n = await ti(o), g = await xI(t), a = {};
  a.neutralExpressionFaceImage = A, a.smileExpressionFaceImage = n, a.metadata = g;
  const x = a, r = e.verify(x);
  if (r) throw Error(r);
  const C = e.create(x), I = {};
  return I.smileLivenessContent = C, II(I);
}
async function ZE(i, o, t) {
  const e = await jE(i, o, t);
  return rI(e);
}
function _E() {
  return { images: { fps: new l0(-4253 * -2 + -6752 + -1724), mouthStatus: new l0(42 * -219 + -6938 + 1 * 16141) }, imageResolution: void (13 * 613 + -1315 * 1 + -6654) };
}
function VE({ skip: i }) {
  const o = tA(_E()), { analytics: t } = li(), { crosshatch: e } = qt(), A = tA(!1);
  function n() {
    const r = o.current, C = It(r.images.fps), I = It(r.images.mouthStatus);
    A.current = !0;
    const Q = {};
    Q.customer = e == null ? void 0 : e.customer, Q.duration = qa, Q.averageFps = C, Q.imageResolution = r.imageResolution, Q.averageExpressionScore = I, t == null || t.trackLongCapture(Q);
  }
  const g = {};
  g.callback = n, g.delay = qa * (-14 * 97 + 4594 + -2236), g.skip = i || A.current, sI(g);
  const a = qA((r) => {
    if (!r.detail) return;
    const { data: C } = r.detail;
    o.current.images.fps.pushFixed(C.fps), o.current.images.mouthStatus.pushFixed(C.detection.mouth.status), o.current.imageResolution = C.imageResolution;
  }, []);
  lg(ie.FACE_DETECTION, a);
  const x = {};
  return x.wasEventTriggered = A, x;
}
function zE(i) {
  const o = i.sort((A, n) => A - n), t = Math.floor(o.length / (-8677 + 9 * -869 + 825 * 20));
  return o.length % (-1994 * 3 + -8062 + 14046) === -21 * 353 + 5508 + 1905 ? (o[t - (-7984 + 7985 * 1)] + o[t]) / (-6974 + 7 * -991 + -1 * -13913) : o[t];
}
function XE() {
  const [i, o] = BA(void 0), t = tA(!0), e = tA([]), A = qA((x) => {
    if (!x.detail || !t.current) return;
    const { data: r } = x.detail;
    if (!r.isInCandidateSelection) return;
    const C = r.detection.mouth.status;
    C < kg && e.current.push(C);
  }, []);
  function n() {
    e.current = [], t.current = !0, o(void (16 * -483 + -1 * -6269 + 1459));
  }
  function g() {
    t.current = !1, o(zE(e.current));
  }
  const a = {};
  return a.median = i, a.reset = n, a.stop = g, a.handleFaceDetection = A, a;
}
function $E(i) {
  return function() {
    const { handleFaceDetection: t, median: e, reset: A, stop: n } = i();
    lg(ie.FACE_DETECTION, t);
    const g = {};
    return g.median = e, g.reset = A, g.stop = n, g;
  };
}
function Ad({ phase: i }) {
  const [o, t] = BA(E0.AUTO_CAPTURE), e = BI(o);
  function A() {
    t(E0.WAIT_FOR_REQUEST), e(() => nB(Co.FIRST_FRAME));
  }
  const n = {};
  n.callback = A, n.delay = MQ, n.skip = i === de.NEUTRAL;
  const { clear: g, isActive: a, reset: x } = sI(n), r = {};
  return r.captureMode = o, r.restart = x, r.stop = g, r.isActive = a, r;
}
function ed(i, o, t) {
  switch (i) {
    case de.SMILE:
      return { ...RQ(o), ...t };
    case de.NEUTRAL:
    default:
      return { ...NQ(), ...t };
  }
}
const td = ({
  assetsDirectoryPath: i,
  onComplete: o,
  sessionToken: t,
  thresholds: e
}) => {
  var z;
  const { analytics: A } = li(), { appState: n, handleAppStateChange: g, handleError: a, setIsCameraReady: x } = nr(), { cameraProperties: r, mergeCameraProperties: C } = fQ(), I = BI(n), Q = Gt(de.NEUTRAL), s = Gt(null), E = Gt(null), { captureMode: d, stop: u } = Ad({ phase: Q.value }), {
    median: c,
    reset: h,
    stop: p
  } = $E(XE)();
  VE({
    skip: Q.value !== de.NEUTRAL || n !== oe.RUNNING
  });
  function w(_A) {
    Q.value = _A, Fn(Ot.STATUS_CHANGED, { phase: _A });
  }
  function k() {
    u(), h(), w(de.NEUTRAL), s.value = null, E.value = null, A == null || A.reset();
  }
  GQ(kQ)({
    onFaceTrackingLost: () => {
      g(oe.WAITING), k(), I(() => g(oe.RUNNING));
    },
    skipOutsideOfCandidateSelection: Q.value === de.NEUTRAL
  }), uQ({
    onBlur: () => {
      x(!1), g(oe.LOADING), k();
    },
    onFocus: () => {
      x(!0), g(oe.RUNNING);
    }
  }), kB(Ot.CONTROL, () => {
    k();
  });
  function R(_A) {
    s.value = _A, p(), w(de.SMILE), g(oe.RUNNING);
  }
  async function N(_A) {
    u(), E.value = _A;
    try {
      if (!s.value || !E.value)
        throw new v("Missing face data");
      const Ke = {
        sessionToken: t,
        web: r.value
      }, Di = await ZE(
        s.value.image,
        E.value.image,
        Ke
      ), K0 = [s.value, E.value];
      o(K0, Di), A == null || A.trackLivenessProcess(K0), g(oe.DONE);
    } catch (Ke) {
      Ke instanceof Error && a(v.fromError(Ke));
      return;
    }
  }
  const V = {
    [de.NEUTRAL]: R,
    [de.SMILE]: N
  }, wA = ((z = s.value) == null ? void 0 : z.data.detection.mouth.status) ?? kg, AA = ed(
    Q.value,
    c ?? wA,
    e
  ), OA = RA(
    () => ({
      assetsDirectoryPath: i,
      captureMode: d,
      onPhotoTaken: V[Q.value]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i, d, Q.value, AA]
  );
  return /* @__PURE__ */ m(SQ, { children: /* @__PURE__ */ m(uB, { cameraOptions: OA, children: /* @__PURE__ */ m(bQ, { cameraOptionsThresholds: AA, children: /* @__PURE__ */ m(qE, { onPhotoTakenInternal: C }) }) }) });
};
function od({ initAppState: i, onError: o }) {
  const [t, e] = BA(i), [A, n] = BA(), [g, a] = BA(!1), x = tA(o);
  Z(() => {
    x.current = o;
  }, [o]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = n, r.isCameraReady = g, r.setIsCameraReady = a, r.onErrorRef = x, r;
}
function id(i) {
  return i !== oe.RUNNING && i !== oe.WAITING ? Wo.VISIBLE : Wo.VISIBLE_WITH_MASK;
}
function nd({
  onError: i
}) {
  const { appState: o, error: t, isCameraReady: e, onErrorRef: A, setAppState: n, setError: g, setIsCameraReady: a } = od({
    initAppState: oe.LOADING,
    onError: i
  }), x = id(o), r = qA(
    (I) => {
      Fn(Ot.STATUS_CHANGED, { state: oe.ERROR, error: I }), a(!1), A.current(I), g(I), n(oe.ERROR);
    },
    [a, A, g, n]
  ), C = qA(
    (I) => {
      n(I), Fn(Ot.STATUS_CHANGED, { state: I });
    },
    [n]
  );
  return {
    appState: o,
    freemiumOverlayState: x,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: C,
    handleError: r,
    error: t
  };
}
var yi = ((i) => (i.AUTO_CAPTURE = "auto-capture", i.ESCALATION_TRIGGER = "escalation-trigger", i.LONG_CAPTURE_SMILE = "long-capture-smile", i))(yi || {});
class gd {
  constructor() {
    G(this, "appKey", "");
    G(this, "deviceId", "");
  }
  async countlyFetch(o) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, n = "https://innovatrics.count.ly/i?", g = {};
    g.app_key = this.appKey, g.device_id = this.deviceId;
    const a = X0(g);
    try {
      await fetch("" + n + a + "&" + o, A);
    } catch (x) {
      console.error("Countly Error", x);
    }
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: sr() }, A = { organization: Br(window.location.href) }, n = X0({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(n);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = X0(o);
    await this.countlyFetch(t);
  }
  async sendEvent(o, t, e) {
    const A = {};
    A.key = o, A.count = 1, A.dur = e, A.segmentation = t;
    const n = [A], g = X0({ events: JSON.stringify(n) });
    await this.countlyFetch(g);
  }
  async sendAutoCaptureEvent(o, t) {
    await this.sendEvent(yi.AUTO_CAPTURE, o, t);
  }
}
const $t = new gd();
class ad {
  constructor() {
    G(this, "countly", $t);
  }
  createSegmentation(o) {
    return { appVersion: sr(), ...o };
  }
  init(o) {
    if (ms()) return;
    const t = UB();
    $t.init(t, o);
  }
  endSession() {
    $t.endSession();
  }
  walleye(o, t) {
    const e = {};
    e.nocturne = o, e.customer = t;
    const A = this.createSegmentation(e);
    $t.sendAutoCaptureEvent(A);
  }
  trackEscalated(o) {
    const t = {};
    t.instructionCode = o;
    const e = this.createSegmentation(t);
    $t.sendEvent(yi.ESCALATION_TRIGGER, e);
  }
}
class xd extends ad {
  constructor() {
    super(...arguments);
    G(this, "captureProcessAnalytics", []);
  }
  trackCaptureProcess(t) {
    this.captureProcessAnalytics.push(t);
  }
  reset() {
    this.captureProcessAnalytics = [];
  }
}
class rd extends xd {
  trackLivenessProcess(o) {
    var C, I, Q, s, E, d;
    if (!o.length || !this.captureProcessAnalytics.length) return;
    const [t, e] = o, [A, n] = this.captureProcessAnalytics, g = YB(A.averageFps + (n == null ? void 0 : n.averageFps)) / (-4688 + 573 * 11 + -1 * 1613), a = Sa(A.captureProcessDurationInMs), x = Sa(n.captureProcessDurationInMs), r = this.createSegmentation({ faceSize: Na((C = e.data.detection) == null ? void 0 : C.faceSize), confidence: Na((I = t.data.detection) == null ? void 0 : I.confidence), imageResolution: ((s = (Q = t.data) == null ? void 0 : Q["imageResolution"]) == null ? void 0 : s.width) + "x" + ((d = (E = t.data) == null ? void 0 : E["imageResolution"]) == null ? void 0 : d.height), averageFps: g, captureTimeNeutral: Ga(a), captureTimeSmile: Ga(x), camera: JB(A == null ? void 0 : A.deviceName, A.facingMode), instructionSet: A.instructionSet });
    this.countly.sendAutoCaptureEvent(r, a + x), this.reset();
  }
  async trackLongCapture(o) {
    const { averageExpressionScore: t, averageFps: e, customer: A, duration: n, imageResolution: g } = o, a = this.createSegmentation({ imageResolution: g, averageFps: e, instructionSet: await Vr(), expressionScore: t, ...A && { customer: A } });
    this.countly.sendEvent(yi.LONG_CAPTURE_SMILE, a, n);
  }
}
const Id = new rd(), Cd = ({ props: i }) => i ? /* @__PURE__ */ m(Fc, { target: i.styleTarget, children: /* @__PURE__ */ m(
  Js,
  {
    assetsDirectoryPath: i.assetsDirectoryPath,
    bramble: Nn.getInstance(),
    children: /* @__PURE__ */ m(Hs, { analytics: Id, appKey: "d64319129bb0ee02eccfab418edba9629a97d6b6", children: /* @__PURE__ */ m(
      qc,
      {
        value: nd({
          onError: i.onError
        }),
        children: /* @__PURE__ */ m(gr, { children: /* @__PURE__ */ m(gB, { children: /* @__PURE__ */ m(td, { ...i }) }) })
      }
    ) })
  }
) }) : null;
KI(Cd, "x-dot-smile-liveness", ["props"]);
